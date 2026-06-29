---
name: Perplexity AI
stage: 01-ideation
type: reference
domain: research
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://perplexity.ai
---

# Perplexity AI

**What it does:** AI answer engine that runs live web searches and returns synthesized answers with inline citations.

**Stage / workflow:** Ideation/research — fast grounded fact-finding, market scans, and "what's the state of X" queries with sources you can verify.

**Cost model:** Freemium. Free tier for basic search; Pro subscription for stronger models and more searches. Sonar API is paid (usage-based).

**Connection to Claude/n8n:** API (Sonar). Call it from n8n via HTTP Request, or reference it manually in the browser for citation-backed research.

**Connection recipe:**
```bash
# Sign up at https://perplexity.ai, then enable the Sonar API and create an API key.
# In n8n: HTTP Request node -> Perplexity Sonar REST API (Bearer token). No official MCP.
# Use it to fetch grounded, cited answers inside a research workflow.
```

**When to use it:** When you need a current, citation-backed answer rather than a frozen-knowledge LLM response — e.g. checking recent releases, pricing, or news.

**Why it's useful:** The Sonar API drops into an n8n HTTP node as a grounded-search step, feeding cited results into Supabase or downstream Claude prompts.

**Notable alternatives:** Exa (developer search API), Tavily (LLM-oriented search API), Google's Gemini with grounding.
