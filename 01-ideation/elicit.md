---
name: Elicit
stage: 01-ideation
type: reference
domain: research
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://elicit.com
---

# Elicit

**What it does:** AI research assistant that finds, screens, and summarizes academic papers and extracts structured data from them.

**Stage / workflow:** Ideation/literature review — validate an idea against existing research, build evidence tables, and pull key findings from many papers fast.

**Cost model:** Freemium. Free monthly credits; paid plans for higher volume and team features. API access is part of paid offerings.

**Connection to Claude/n8n:** API (paid tiers). Primarily a web app; integrate via HTTP where API access is enabled.

**Connection recipe:**
```bash
# Sign up at https://elicit.com and create an account/API key (paid plans).
# In n8n: HTTP Request node -> Elicit REST API (Bearer token). No official MCP.
# Or use the web app directly for paper search and data extraction.
```

**When to use it:** When the idea needs academic grounding — systematic-review-style summaries and extracted findings across many peer-reviewed papers.

**Why it's useful:** Where API access is available, extracted paper data can be pushed into Supabase via an n8n HTTP node for a structured research base.

**Notable alternatives:** Consensus (paper search engine), Semantic Scholar API (free, programmatic), Scite.
