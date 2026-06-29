---
name: Copy.ai
stage: 08-marketing-growth
type: app
domain: writing
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://copy.ai
---

# Copy.ai

**What it does:** AI copywriting plus go-to-market (GTM) workflow automation for sales and marketing teams.

**Stage / workflow:** Marketing/growth stage — draft copy and run multi-step GTM workflows (enrichment, outreach, content) from one platform.

**Cost model:** Freemium — free tier with limits, paid plans for workflows, seats, and higher usage.

**Connection to Claude/n8n:** API — no native MCP; Copy.ai offers an API/workflow webhooks you can drive from n8n.

**Connection recipe:**
```bash
# Sign up at https://copy.ai, get an API key.
# In n8n: HTTP Request node -> Copy.ai REST API / trigger workflows via webhook.
# No official MCP.
```

**When to use it:** When you want copy generation tied to GTM automation (lead enrichment, sequences) rather than a pure writing assistant.

**Why it's useful:** GTM workflows complement Instantly cold-email and can be orchestrated alongside n8n for SMB lead-gen pipelines.

**Notable alternatives:** Jasper AI, Writesonic, Clay.
