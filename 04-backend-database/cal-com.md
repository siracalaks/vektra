---
name: cal.com
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/calcom/cal.com
---

# Cal.com

**What it does:** Open-source scheduling and booking infrastructure — a self-hostable Calendly alternative.

**Stage / workflow:** Backend — booking/scheduling layer for sales calls, demos, and client meetings.

**Cost model:** Self-hostable, open source (AGPL). Free when self-hosted; SaaS tier also available.

**Connection to Claude/n8n:** Self-hosted app with API + webhooks; booking events trigger n8n workflows.

**Connection recipe:**
```bash
git clone https://github.com/calcom/cal.com
# production: deploy via Coolify (Docker), point at your Postgres
```

**When to use it:** Embedding booking into a Next.js app or replacing Calendly when EU data residency matters.

**Why it's useful:** Self-hosts on Coolify with Postgres; embeddable in Next.js; keeps client calendar data on EU infra (GDPR).

**Notable alternatives:** Calendly (hosted, US, polished); SavvyCal (hosted); Cal.com SaaS (managed, faster start).
