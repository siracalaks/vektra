---
name: Polymer
stage: 08-marketing-growth
type: app
domain: analytics
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://polymersearch.com
---

# Polymer

**What it does:** AI-powered analytics/BI that turns spreadsheets and data sources into dashboards and insights without setup.

**Stage / workflow:** Marketing/growth reporting stage — explore campaign/sales data and build dashboards from raw sheets.

**Cost model:** Freemium — free/trial tier, paid plans for seats, data volume, and AI features.

**Connection to Claude/n8n:** API — no native MCP; Polymer connects to data sources and offers an API/integrations you can drive from n8n.

**Connection recipe:**
```bash
# Sign up at https://polymersearch.com, connect a data source / get API access.
# In n8n: HTTP Request node -> Polymer API, or push data from n8n into a connected source.
# No official MCP.
```

**When to use it:** When a client has data in spreadsheets and wants instant AI dashboards without a BI build.

**Why it's useful:** n8n can stage marketing data into sheets/sources Polymer reads, giving clients quick reporting.

**Notable alternatives:** DashThis, Looker Studio, Metabase.
