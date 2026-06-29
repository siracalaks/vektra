---
name: Consensus
stage: 01-ideation
type: reference
domain: research
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://consensus.app
---

# Consensus

**What it does:** AI search engine over peer-reviewed research papers that returns evidence-based answers with study-level citations.

**Stage / workflow:** Ideation/validation — quickly ask "does the research support X?" and get a consensus view drawn from published studies.

**Cost model:** Freemium. Free tier with limited searches; paid Premium for unlimited use and advanced features. API available for partners/paid use.

**Connection to Claude/n8n:** API where offered. Mainly a web app; integrate via HTTP if API access is granted.

**Connection recipe:**
```bash
# Sign up at https://consensus.app and request/create API access (paid).
# In n8n: HTTP Request node -> Consensus REST API (Bearer token). No official MCP.
# Or use the web app for evidence-backed answer search.
```

**When to use it:** When you want a fast, citation-backed yes/no/consensus signal on a claim before committing to an idea.

**Why it's useful:** API responses with study citations can flow through an n8n HTTP node into Supabase as a vetted evidence layer.

**Notable alternatives:** Elicit (extraction + summaries), Perplexity (general grounded search), Semantic Scholar API.
