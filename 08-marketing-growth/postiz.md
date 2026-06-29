---
name: Postiz
stage: 08-marketing-growth
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/gitroomhq/postiz-app
---

# Postiz

**What it does:** Open-source social-media scheduling and management platform (Buffer/Hootsuite alternative).

**Stage / workflow:** Marketing/growth stage — plan, schedule, and publish social content across multiple channels.

**Cost model:** Self-hostable, free under open source; a hosted paid plan also exists.

**Connection to Claude/n8n:** Self-host — deploy via Docker; automate posting through its API from n8n.

**Connection recipe:**
```bash
docker run -d --name postiz -p 5000:5000 ghcr.io/gitroomhq/postiz-app:latest
```

**When to use it:** When you want to schedule and batch social posts across platforms from one self-hosted dashboard instead of per-network tools.

**Why it's useful:** Ships as a Docker image, so it deploys cleanly on the Coolify VPS and its API can be driven by n8n workflows.

**Notable alternatives:** Buffer, Hootsuite, Mixpost (self-hosted).
