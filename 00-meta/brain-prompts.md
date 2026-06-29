# Brain Prompts — the "understanding" layer

This is the AI brain that turns a raw harvested item (a GitHub repo, an HN/Dev.to post) into
something useful: a plain summary, a 0–100 relevance score for **your** profile, a one-line
"why it matters", and free-form tags. Output is strict JSON so n8n can store it directly.

> **Canonical implementation:** the live engine in `00-meta/engine-node.js` already embeds these
> prompts (Claude Haiku brain + Gemini embeddings). This file is a reference + an optional
> **self-hosted variant** — route via Ollama/LiteLLM if you prefer local models.

## Cost-optimal routing (optional hybrid)
- **Default model = Ollama** (free, local): runs the per-item prompt on EVERY item.
  Suggested: `llama3.2` (or `qwen2.5:7b`) for reasoning, `nomic-embed-text` for embeddings.
- **Escalate to Claude Haiku** (cents) ONLY when it pays off:
  - item's local `relevance_score >= 70` → re-score + sharpen `why_it_matters`, OR
  - local model returns `confidence < 0.5` (ambiguous), OR
  - the **daily synthesis** (top ~10 items → one digest).
  This keeps paid usage tiny (a handful of calls/day). The simplest setup just uses Claude Haiku
  for everything (what `engine-node.js` ships).

## Operator profile (what "relevant" means — broad, not a hard filter)
Describe yourself here (see `stack-profile.md` and the one-line `profile` in `engine-node.js`).
Example: *"a solo builder / small dev agency; prefers free/self-hostable; values tools that save
time, can be resold as a service, or unlock a new offering."* IMPORTANT: do not hard-filter to
your areas — a genuinely powerful general dev/AI tool scores high even if off-profile. Different
projects need different tools; stay broad and adaptable.

## Per-item prompt (runs on every harvested item)

**System:**
```
You analyze a harvested dev/AI item for an operator (profile below).
Be concise, concrete, honest. Never invent facts not in the input.
PROFILE: <describe the operator — e.g. solo builder/agency; prefers free/self-hostable>.
Value = saves time OR resellable as a service OR unlocks a new offering. Stay broad:
a strong general tool still scores high. Return STRICT JSON only, no prose.
```

**User:**
```
ITEM:
title: {{title}}
source: {{source}}        // github | hackernews | devto | ...
url: {{url}}
text: {{description_or_body}}
signal: {{stars_or_points_or_reactions}}

Return:
{
  "summary": "<=2 plain sentences, what it is + what it does",
  "relevance_score": <0-100>,        // usefulness to the operator (broad)
  "why_it_matters": "<one line: how the operator could use it; or 'general capability'>",
  "tags": ["<3-6 free-form tags, lowercase>"],
  "stage": "<01-ideation..09-learning-reference | null>",
  "type": "<agent|skill|mcp|mvp|library|app|reference | null>",
  "action": "<save | inbox | skip>",  // inbox = worth a permanent library card
  "confidence": <0.0-1.0>
}
RULES:
- relevance_score: 70+ = clearly useful to the operator's work or a standout tool;
  40-69 = maybe; <40 = generic/noise.
- action "inbox" only if it names a concrete tool/repo NOT obviously generic.
- tags are FREE (not a fixed list) — describe it as a human would.
```

## Daily synthesis prompt (one call/day → digest / WhatsApp)

**System:** `You write a tight daily intelligence brief for a busy builder. Match the user's language. No fluff.`

**User:**
```
Today's top items (already scored):
{{json_of_top_10_items_with_summary_score_why}}

Write a short message (<120 words):
- 1-line header with the date and count.
- Top 3-5 picks: "• <name> — <why it matters> (score)".
- End: "Dashboard: {{total}} new findings."
Keep it skimmable. No markdown headers, just bullet dots.
```

## Notes
- The classifier labels (stage/type/domain) stay consistent with `classification-taxonomy.md`.
  `tags` are free-form and additive.
- Embedding: feed `title + summary + tags` to your embedder (Gemini `gemini-embedding-001`, 768-dim,
  in the live engine; or `nomic-embed-text` locally) → store the vector in Supabase/pgvector
  (or Qdrant) for semantic search + dedup.
- Dedup-vs-library: if `tags`/title match a name in `registry.csv`, set `is_new=false`,
  else `is_new=true` (the dashboard "YENİ" badge).
