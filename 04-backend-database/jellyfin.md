---
name: jellyfin
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/jellyfin/jellyfin
---

# Jellyfin

**What it does:** Self-hosted media server for streaming your own movies, shows, music, and photos — a Plex/Emby alternative.

**Stage / workflow:** Backend — media streaming service over your own library.

**Cost model:** Self-hostable, open source (GPL). Free when self-hosted; no paywalled features.

**Connection to Claude/n8n:** Self-hosted app with REST API; automate library tasks from n8n.

**Connection recipe:**
```bash
docker run -d -p 8096:8096 jellyfin/jellyfin
# production: deploy via Coolify (Docker)
```

**When to use it:** Streaming a private media library on your own infra without subscriptions or telemetry.

**Why it's useful:** Self-hosts on Coolify; fully free and EU-resident, no premium gating like Plex.

**Notable alternatives:** Plex (polished, freemium, telemetry); Emby (freemium); Kodi (local media center, not server-first).
