---
name: AppFlowy
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/AppFlowy-IO/AppFlowy
---

# AppFlowy

**What it does:** Open-source Notion alternative — docs, wikis, databases, and project boards, built with Flutter + Rust.

**Stage / workflow:** Backend/productivity — team workspace for docs and project management.

**Cost model:** Self-hostable, open source (AGPL). Free when self-hosted.

**Connection to Claude/n8n:** Desktop/web app with a self-hostable backend (AppFlowy Cloud); integrates via API.

**Connection recipe:**
```bash
# self-host the backend
git clone https://github.com/AppFlowy-IO/AppFlowy-Cloud
docker compose up -d
# production: deploy via Coolify (Docker Compose)
```

**When to use it:** Replacing Notion for a team when you want self-hosted, EU-resident docs and databases.

**Why it's useful:** Self-hosts on Coolify; keeps team workspace data on EU infra (GDPR).

**Notable alternatives:** Anytype (local-first, E2E encrypted); Notion (hosted, US, polished); Outline (self-hosted wiki).
