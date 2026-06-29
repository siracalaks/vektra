# Classification Taxonomy & Prompt — routing harvested items

The intelligence engine (Pipeline B in `ingestion-workflow.md`) routes every
harvested item onto the SAME three axes the card library uses, so harvested
knowledge and curated cards are filterable together.

## The three axes (labels)

- **stage** (required): `01-ideation` | `02-design-ui` | `03-frontend` |
  `04-backend-database` | `05-ai-agents` | `06-video-media` |
  `07-deployment-devops` | `08-marketing-growth` | `09-learning-reference`
- **type** (required): `agent` | `skill` | `mcp` | `mvp` | `library` | `app` | `reference`
- **domain** (optional, nullable): `presentations` | `voice` | `avatar` |
  `research` | `writing` | `email` | `chatbot` | `analytics` | `sales` |
  `inspiration` | `image` | `video` | `design-tool` | `automation`
  *(extend as needed; null when nothing fits)*

Keep this list in sync with `intel_categories` (intel-schema.sql) and the
`domain` values seen in `registry.csv`.

## Classifier prompt (zero-shot, runs on Ollama/LiteLLM → Claude)

```
You are a classifier for a developer/design knowledge base.
Given the TEXT of a harvested post (caption + any text extracted from its
images + hashtags), assign it to the taxonomy. Use ONLY the allowed labels.

Allowed stage: [01-ideation, 02-design-ui, 03-frontend, 04-backend-database,
  05-ai-agents, 06-video-media, 07-deployment-devops, 08-marketing-growth,
  09-learning-reference]
Allowed type: [agent, skill, mcp, mvp, library, app, reference]
Allowed domain: [presentations, voice, avatar, research, writing, email,
  chatbot, analytics, sales, inspiration, image, video, design-tool,
  automation] or null

Return STRICT JSON:
{
  "stage": "<one>",
  "type": "<one>",
  "domain": "<one|null>",
  "confidence": <0.0-1.0>,        // your certainty across all three axes
  "tool_mentions": ["<tool>", ...],// named products/libraries/repos
  "summary": "<=20 words",
  "actionable": true|false         // does it name a concrete tool/repo worth saving?
}
If the post is generic/portfolio fluff with no concrete tool or insight,
set actionable=false and confidence low.

TEXT:
"""
{{combined_text}}
"""
```

## Confidence gating (matches Pipeline B)
- `confidence ≥ 0.80` → auto-store, `for_review=false`.
- `confidence < 0.80` OR `actionable=false` → store with `for_review=true`;
  the dashboard shows a "needs review" queue with one-click correct.
- A corrected item's (text → labels) pair is appended to a feedback set
  (`feedback/` jsonl) used to refine the prompt / few-shot examples over time.

## Dedup
Embed `combined_text` (nomic-embed-text, 768-dim) → Qdrant search top-1 in
collection `intel`; if cosine > 0.95, drop as duplicate (don't re-store).

## From intelligence → permanent card
If `actionable=true`, `confidence` high, and `tool_mentions` contains a tool
NOT already in `registry.csv`, hand the item to **Pipeline A** to draft a
`card-template.md` into `99-inbox/` for human promotion. This is how the live
harvest keeps growing the curated library.

## Relevance & free tags (engine v2 — see brain-prompts.md)

Beyond the fixed stage/type/domain axes, the brain (Ollama + Haiku, per
`brain-prompts.md`) adds two flexible signals per item:

- **relevance_score (0–100)** — usefulness to your work, scored BROADLY (not
  filtered to fixed buckets): 70+ = clearly useful or a standout tool, 40–69 =
  maybe, <40 = generic/noise. A strong general dev/AI tool still scores high even
  if off-profile — different projects need different tools.
- **tags[] (free-form)** — 3–6 human-style descriptors, NOT limited to the domain
  list. These accumulate; the dashboard and semantic search use them freely.

Fixed axes keep harvested items filterable alongside the 194 curated cards;
`relevance_score` + free `tags` make them ranked and searchable the human way.
Routing lives in `brain-prompts.md` (auto-store ≥ confidence 0.80; escalate to
Haiku ≥ score 70).
