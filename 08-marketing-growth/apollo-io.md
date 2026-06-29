---
name: Apollo.io
stage: 08-marketing-growth
type: app
domain: sales
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://apollo.io
---

# Apollo.io

**What it does:** B2B sales intelligence platform — lead database, enrichment, and outreach sequences in one tool.

**Stage / workflow:** Sales/lead-gen stage — find and enrich prospects, then run outreach or export to your sequencer.

**Cost model:** Freemium — free tier with credit limits, paid plans for more credits, enrichment, and sequences.

**Connection to Claude/n8n:** API — no native MCP; Apollo offers a REST API you can drive from n8n.

**Connection recipe:**
```bash
# Sign up at https://apollo.io, get an API key (Settings -> Integrations -> API).
# In n8n: HTTP Request node -> Apollo REST API for search/enrichment/contacts.
# No official MCP.
```

**When to use it:** When you need a prospect database plus enrichment to fuel cold outreach.

**Why it's useful:** Apollo can source/enrich leads that n8n pushes into Instantly cold-email and Twenty CRM for SMB sales.

**Notable alternatives:** Clay, Apollo alternatives like ZoomInfo, Instantly.
