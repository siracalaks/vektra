# Engine Setup Guide — stand up Pipeline B (Internet Intelligence) on your stack

Concrete, do-it-in-order steps to make `ingestion-workflow.md` real on your
Coolify VPS (n8n + Supabase + Qdrant + Ollama + LiteLLM + Evolution API).
Build the backbone first (GitHub, text-only), prove it, then add the rest.

## ⚡ Hızlı yol — hazır akışı içe aktar (önerilen, görsel)
Ready-made workflow: **`vektra-engine.n8n.json`** (repo kökünde). Tek Code node'lu,
tüm motoru içerir (kaynak → Ollama beyin → Supabase → opsiyonel WhatsApp).

1. n8n → sağ üst **⋯ → Import from File** → `vektra-engine.n8n.json` seç.
2. **"Vektra Engine"** node'unu aç → en üstteki `CONFIG` bloğunda 4 zorunlu değeri gir:
   `ollamaUrl`, `supabaseUrl`, `supabaseServiceKey`, (Ollama modelin). Opsiyonel:
   GitHub token, LiteLLM (Haiku özeti), Evolution API (WhatsApp).
3. **Execute Workflow** ile bir kez elle çalıştır → çıktıda `{harvested, stored, top}` gör.
4. Çalışınca **Active** anahtarını aç → her sabah 08:00'de kendi çalışır.

> Önce Supabase şemasını kur (`intel-schema.sql`) ve Ollama modellerini çek (aşağıda).
> Kodun okunabilir kaynağı: `00-meta/engine-node.js` (akıştaki Code node ile aynı).

---

## 0. Prereqs (one-time)
- [ ] Ollama models pulled on the VPS:
  ```bash
  ollama pull nomic-embed-text        # 768-dim embeddings
  ollama pull llama3.2-vision:11b     # image -> text (add in Step 5)
  ollama pull llama3.2                 # zero-shot classifier (or route via LiteLLM->Claude)
  ```
- [ ] Supabase: run the schema
  ```bash
  psql "$SUPABASE_DB_URL" -f 00-meta/intel-schema.sql
  ```
- [ ] Qdrant: create the collection
  ```bash
  curl -X PUT "$QDRANT_URL/collections/intel" -H 'Content-Type: application/json' -d '{
    "vectors": { "size": 768, "distance": "Cosine" }
  }'
  ```
- [ ] Seed `intel_sources` from `sources.yaml` harvest_* (id + weight).
- [ ] n8n credentials: GitHub token, (later) Reddit OAuth, X token, Apify token.

## 1. Backbone — GitHub harvest (text only) — DO THIS FIRST
n8n workflow `intel-github`:
1. **Schedule Trigger** — daily.
2. **HTTP Request** — `GET https://api.github.com/search/repositories?q={{kw}}+sort:stars`
   header `Authorization: Bearer {{GITHUB_TOKEN}}`. Loop over `harvest_meta.keywords`.
   (Also hit `/search/issues` for discussion threads.)
3. **Code** — normalize each item → `{source_id:'github-harvest', external_url, author,
   text: name+description+readme_excerpt, image_urls:[], engagement:{stars}}`.
4. **Code/Crypto** — `content_hash = sha256(combined_text)`.
5. **HTTP (Qdrant search)** — `POST /collections/intel/points/search` with the
   embedding (next step) `limit:1`; if score > 0.95 → drop (dedup).
6. **HTTP (Ollama embed)** — `POST $OLLAMA/api/embeddings` `{model:'nomic-embed-text', prompt: combined_text}` → vector.
7. **HTTP (classify)** — LiteLLM/Ollama with the prompt in `classification-taxonomy.md`
   → `{stage,type,domain,confidence,tool_mentions,actionable}`.
8. **IF** `confidence>=0.80 && actionable` → `for_review=false` else `true`.
9. **HTTP (Qdrant upsert)** — `PUT /collections/intel/points` `{id, vector, payload}`.
10. **Supabase (insert)** — `intel_items` (relational mirror; `on conflict (content_hash) do nothing`).

✅ Checkpoint: run once, confirm rows land in `intel_items` and points in Qdrant.

## 2. Add Reddit + Hacker News
- **HN** (no auth): `GET https://hn.algolia.com/api/v1/search_by_date?query={{kw}}&tags=story`.
- **Reddit** (needs OAuth — the public `.json` is blocked from servers): create a
  "script" app at reddit.com/prefs/apps, get client_id/secret, use the
  `oauth.reddit.com` host with a token; set a real `User-Agent`. Then
  `GET https://oauth.reddit.com/r/{{sub}}/new?limit=100`.
Feed both into the SAME steps 3–10 (set the right `source_id`).

## 3. Secondary: X / Dev.to / RSS
- **Dev.to** (no auth): `GET https://dev.to/api/articles?tag={{tag}}`.
- **RSS**: n8n **RSS Read** nodes for the feeds in `harvest_secondary.rss-harvest`.
- **X**: paid API; add only if budget allows.

## 4. Supplement: Instagram via Apify (LOW priority, read the RISK note)
- n8n **HTTP Request** → run the actor:
  `POST https://api.apify.com/v2/acts/apify~instagram-hashtag-scraper/runs?token={{APIFY}}`
  body `{ "hashtags": ["uiux","frontend"], "resultsLimit": 100 }`.
- Poll the run, fetch dataset items (caption + `image_urls` + engagement).
- These have images → they REQUIRE Step 5. Keep `weight 0.3`, poll weekly.
- ⚠️ Ban/legal/GDPR risk per `sources.yaml` harvest_supplement.RISK — supplement only.

## 5. Image → information (vision) — enable when Instagram is on
Between normalize and embed, if `image_urls` present:
1. **HTTP** download image → **Supabase Storage** (`intel_images.storage_url`).
2. **HTTP (Ollama vision)** — `POST $OLLAMA/api/generate`
   `{model:'llama3.2-vision:11b', prompt:'Extract all text + tools mentioned + 1-line summary as JSON', images:[base64]}`.
3. **Code** — `combined_text = caption + extracted_text + hashtags`.
Heuristic: skip vision if caption length > 200 (saves GPU).

## 6. Notify + review
- **Evolution API** node — daily WhatsApp digest: counts + top `tool_mentions`.
- Items with `for_review=true` show in the dashboard "Needs review" queue.
- Items where `actionable && tool not in registry.csv` → optionally branch into
  **Pipeline A** to draft a card into `99-inbox/` for promotion.

## Rate-limit & cost cheatsheet
| Source | Auth | Limit | Note |
|---|---|---|---|
| GitHub | token | 5,000/h | cache by `pushed_at` |
| HN Algolia | none | generous | easiest start |
| Reddit | OAuth | ~60/min | public `.json` blocked server-side |
| Dev.to | none | fair | tag-based |
| X v2 | paid | tier-based | optional |
| Apify IG | token | ~$2/1k | weekly, supplement only |
| Ollama vision | local | GPU-bound | ~10–30s/img CPU; batch overnight |

## Verified (read-only, from this repo)
- HN Algolia ✓ returns hits (title, url).
- GitHub Search ✓ returns full_name, stargazers_count, pushed_at.
- Reddit public `.json` ✗ from servers → confirmed: use OAuth (above).
