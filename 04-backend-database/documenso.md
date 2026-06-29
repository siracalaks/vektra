---
name: documenso
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/documenso/documenso
---

# Documenso

**What it does:** Open-source document signing platform — a self-hostable DocuSign alternative.

**Stage / workflow:** Backend — e-signature step in onboarding, contracts, and client agreements.

**Cost model:** Self-hostable, open source (AGPL/GPL). Free when self-hosted; SaaS tier also available.

**Connection to Claude/n8n:** Self-hosted app with API + webhooks; trigger signing flows from n8n.

**Connection recipe:**
```bash
docker run -d -p 3000:3000 documenso/documenso
# production: deploy via Coolify (Docker Compose), point at your Postgres
```

**When to use it:** When clients need legally-binding e-signatures and you want EU-hosted data instead of sending documents to a US SaaS.

**Why it's useful:** Self-hosts on Coolify with Postgres; keeps signed contracts on EU infra (GDPR) for German/Turkish SMB clients.

**Notable alternatives:** DocuSign/Adobe Sign (hosted, US, expensive); OpenSign (another open-source signing alt).
