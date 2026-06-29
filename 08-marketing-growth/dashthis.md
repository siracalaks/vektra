---
name: DashThis
stage: 08-marketing-growth
type: app
domain: analytics
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://dashthis.com
---

# DashThis

**What it does:** Automated marketing dashboards and reporting that pull from ad, analytics, and SEO platforms.

**Stage / workflow:** Marketing/growth reporting stage — build client-ready dashboards aggregating multi-channel marketing data.

**Cost model:** Freemium — trial, then paid plans by number of dashboards.

**Connection to Claude/n8n:** API — no native MCP; DashThis offers an API and many native integrations you can supplement from n8n.

**Connection recipe:**
```bash
# Sign up at https://dashthis.com, get API access.
# In n8n: HTTP Request node -> DashThis API to push data / manage dashboards.
# No official MCP.
```

**When to use it:** When you need recurring, branded marketing reports for clients without manual assembly.

**Why it's useful:** Automates the client-reporting layer; n8n can feed custom data sources for SMB agency-style reporting.

**Notable alternatives:** Polymer, Looker Studio, Plausible.
