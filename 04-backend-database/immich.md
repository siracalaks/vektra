---
name: immich
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/immich-app/immich
---

# Immich

**What it does:** Self-hosted photo and video management with AI search, face recognition, and mobile backup — a Google Photos alternative.

**Stage / workflow:** Backend — media library and backup service for photos/videos.

**Cost model:** Self-hostable, open source (AGPL). Free when self-hosted.

**Connection to Claude/n8n:** Self-hosted app with API; integrates into automations via REST.

**Connection recipe:**
```bash
# official Docker Compose install
wget https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml
docker compose up -d
# production: deploy via Coolify (Docker Compose)
```

**When to use it:** Hosting a private, EU-resident photo library or media backup instead of Google Photos/iCloud.

**Why it's useful:** Self-hosts on Coolify with Postgres; keeps media on EU infra (GDPR).

**Notable alternatives:** Google Photos/iCloud (hosted, US); PhotoPrism (lighter self-hosted alt); Nextcloud Photos (part of a broader suite).
