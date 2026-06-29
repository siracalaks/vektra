# Ingestion & Intelligence Engine (n8n) — Build Blueprint

Two pipelines, both human-in-the-loop. Sources are defined in `sources.yaml`;
scoring in `trust-scoring.md`; classification labels in `classification-taxonomy.md`;
storage schema in `intel-schema.sql`.

- **Pipeline A — Tool Discovery:** find new tools/MCP/skills → draft a resource
  card → `99-inbox/` for review → promote into a stage folder + registry.
- **Pipeline B — Internet Intelligence:** harvest what the community shares
  (GitHub/Reddit/HN + Instagram), extract info (incl. from images), classify into
  the taxonomy, store in Qdrant+Supabase, surface in the dashboard.

> Never auto-promote executable code (skills/MCP) on signal alone — skills can
> carry injected instructions. The `99-inbox/` human gate is the safeguard.

---

## Pipeline A — Tool Discovery (cards)

```
[Cron daily]
   → [HTTP] sources.yaml tier1/2/3 (MCP Registry ?updated_since, GitHub search,
            PulseMCP, npm/PyPI, Product Hunt)  ── fan-in
   → [Code] dedup vs registry.json (key: github_url | npm_package | mcp_server_name)
   → [HTTP] enrich: GitHub repo API (stars,last_commit), npm downloads, used-by
   → [Code] trust_score = f(adoption,liveness,source,verified)   # trust-scoring.md
   → [IF] score ≥ 70 AND tier1/2 source ──► [LLM] draft card-template.md
   │                                          → [Git] write to stage folder + registry  (auto)
   └─ else ──► [LLM] draft card → [Git/FS] write to 99-inbox/<slug>.md
   → [Evolution API] WhatsApp: "N tools drafted, M auto-filed, K need review"
```
Human reviews `99-inbox/`, runs `/promote-card`, commits.

---

## Pipeline B — Internet Intelligence (harvest → understand → route)

### Nodes (per source, fan-in)
```
[Cron]                          # daily for backbone; weekly for instagram
  → [HTTP] harvest_backbone (GitHub/Reddit/HN) + secondary (X/Dev.to/RSS)
           + supplement (Apify Instagram)        # see sources.yaml harvest_*
  → [Code] normalize → {source, url, author, text(caption/title/body),
                        image_urls[], engagement, ts}
```

### Image → information (only when image_urls present, e.g. Instagram carousels)
```
  → [HTTP] download image → Supabase Storage (or MinIO)
  → [Ollama] llama3.2-vision : "Extract all text + list tools/tech mentioned
             + 1-line summary. Return JSON." (self-hosted, free)
  → [Code] merge: combined_text = caption + extracted_text + hashtags
```
Heuristic: skip vision if caption already > 200 chars (saves GPU).

### Understand → route ("neural networks" = embeddings + classification)
```
  → [Ollama] embed (nomic-embed-text)  → vector[768]
  → [LLM] zero-shot classify combined_text into:
           stage (01..09) + type + domain   # labels in classification-taxonomy.md
           → returns {stage,type,domain,confidence,tool_mentions[]}
  → [Qdrant] dedup: search collection "intel"; if max cosine > 0.95 → DROP
  → [IF] confidence ≥ 0.80 ──► auto-store
     └─ else ──► flag for_review = true (shown in dashboard "needs review")
  → [Qdrant] upsert {vector, payload: all metadata}     # intel-schema.sql
  → [Supabase] insert intel_items (relational mirror, no vector)
  → [Evolution API] daily digest: "X new items, top tools: …"
```

### What the user gets
The dashboard (separate `vektra-dashboard/` app) reads Qdrant+Supabase:
semantic search, browse by stage/type/domain, trending tools, bookmarks.
High-signal harvested items that name a NEW tool can be piped into Pipeline A
to become a permanent card.

---

## Defensive / honest notes
- **Instagram:** ToS/ban/legal risk (Meta won May 2026 case). Keep it the lowest
  weight; go via Apify (not direct), poll weekly, store no EU personal data.
- **Vision cost:** llama3.2-vision ≈ 10–30 s/image (CPU) / faster on 11GB+ GPU.
  Batch overnight; skip when caption is already rich.
- **Classification drift:** start at confidence ≥ 0.80; everything else → dashboard
  "needs review" with a one-click correct → feeds a feedback set over time.
- **Rate limits:** GitHub 5k/h (token), Reddit ~60/min, HN none, X paid. Cache by
  `updated_since`/last-seen id; back off on 429.
- **Embedding model is pinned** (`nomic-embed-text`): store `embedding_model` in
  payload; re-embed if you ever switch (one-time cost).

## Build order
1. Stand up Qdrant collection `intel` + run `intel-schema.sql` on Supabase.
2. Pipeline B backbone only: GitHub → embed → classify → store (no images yet).
3. Add Reddit + HN. Validate dashboard reads.
4. Add image/vision step, then Instagram supplement.
5. Wire Pipeline A auto-draft to 99-inbox. Turn on WhatsApp digests.
