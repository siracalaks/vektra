---
name: Clay
stage: 08-marketing-growth
type: app
domain: sales
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://clay.com
---

# Clay

**What it does:** Data enrichment and lead-gen automation that combines 50+ data providers with AI in a spreadsheet-like UI.

**Stage / workflow:** Sales/lead-gen stage — build enriched lead lists, waterfall-enrich data, and prep personalized outreach.

**Cost model:** Freemium — free/credit-limited tier, paid plans by credits and seats.

**Connection to Claude/n8n:** API — no native MCP; Clay supports webhooks and an API/HTTP enrichment you can integrate with n8n.

**Connection recipe:**
```bash
# Sign up at https://clay.com, get API/webhook access.
# In n8n: HTTP Request node -> Clay webhook/API to push rows / pull enriched data.
# No official MCP.
```

**When to use it:** When you need deep, multi-source enrichment and personalization before outreach.

**Why it's useful:** Clay enriches leads that n8n hands to Instantly and Lavender-coached sequences for SMB outbound.

**Notable alternatives:** Apollo.io, Clay alternatives like Instantly, Outreach.
