---
name: papermark
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/mfts/papermark
---

# Papermark

**What it does:** Open-source document sharing with view analytics and access controls — a self-hostable DocSend alternative.

**Stage / workflow:** Backend — share proposals/decks via trackable links, see who opened what.

**Cost model:** Self-hostable, open source (AGPL). Free when self-hosted; SaaS tier also available.

**Connection to Claude/n8n:** Self-hosted app; share events can drive n8n automations via webhooks/API.

**Connection recipe:**
```bash
git clone https://github.com/mfts/papermark
# production: deploy via Coolify (Docker/Next.js), point at your Postgres
```

**When to use it:** Sending sales proposals or pitch decks to SMB clients when you want open/view tracking without handing data to a US SaaS.

**Why it's useful:** Next.js-based, self-hosts on Coolify with Postgres; EU data residency for client documents.

**Notable alternatives:** DocSend (hosted, US); PandaDoc (proposals + signing SaaS); Documenso (signing-focused open source).
