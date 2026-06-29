---
name: Twenty
stage: 08-marketing-growth
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/twentyhq/twenty
---

# Twenty

**What it does:** Open-source CRM (Salesforce alternative) for managing contacts, companies, and deal pipelines.

**Stage / workflow:** Marketing/growth and sales stage — track leads, accounts, and opportunities through the funnel.

**Cost model:** Self-hostable, free under open source; a hosted paid plan also exists.

**Connection to Claude/n8n:** Self-host — deploy via Docker Compose; sync leads and pipeline data through its GraphQL/REST API from n8n.

**Connection recipe:**
```bash
docker compose up -d
```

**When to use it:** When you want a modern, self-owned CRM to manage the sales pipeline fed by cold-email and inbound leads.

**Why it's useful:** Self-hosts on the Coolify VPS and its API lets n8n push leads from Instantly/Unibox and Evolution API (WhatsApp) straight into the pipeline.

**Notable alternatives:** Salesforce, HubSpot CRM, EspoCRM.
