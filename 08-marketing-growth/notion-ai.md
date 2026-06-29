---
name: Notion AI
stage: 08-marketing-growth
type: reference
domain: writing
cost: freemium
conn_type: reference
status: active
added: 2026-06-27
source_url: https://notion.so/product/ai
---

# Notion AI

**What it does:** AI writing and assist features built directly into Notion workspaces (drafting, summarizing, Q&A over docs).

**Stage / workflow:** Marketing/growth stage — draft and refine content where docs and wikis already live, inside Notion.

**Cost model:** Freemium — bundled add-on to Notion plans; AI features billed per member.

**Connection to Claude/n8n:** Reference — no standalone public Notion AI generation API. Notion's general API can read/write pages from n8n, but AI assist itself is in-app only.

**Connection recipe:**
```bash
# Notion AI assist runs inside Notion — no dedicated public AI API.
# For automation: use the Notion API (page read/write) from n8n,
# and run generation with a direct LLM (e.g. Claude) instead.
```

**When to use it:** When the team already works in Notion and wants in-context drafting/summarization without leaving the workspace.

**Why it's useful:** Notion API integrates with n8n for content ops, though heavy generation is better done via Claude directly for SMB pipelines.

**Notable alternatives:** Jasper AI, Copy.ai, Claude (direct API).
