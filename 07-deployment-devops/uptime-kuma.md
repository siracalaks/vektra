---
name: Uptime Kuma
stage: 07-deployment-devops
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/louislam/uptime-kuma
---

# Uptime Kuma

**What it does:** Self-hosted uptime and status monitoring — HTTP/TCP/ping/DNS checks, a public status page, and multi-channel alerting in a clean dashboard.

**Stage / workflow:** Deployment & DevOps / post-launch — watches that your deployed services stay up and notifies you when they don't.

**Cost model:** Free and self-hostable (open source). Single lightweight container; infra cost only.

**Connection to Claude/n8n:** self-host + API/webhook. Alerts fire to webhooks (n8n, Discord, Telegram, etc.); n8n can trigger on incidents.

**Connection recipe:**
```bash
# Self-host via Docker (canonical)
docker run -d --restart=always -p 3001:3001 \
  -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1
```

**When to use it:** When you want a simple, good-looking uptime monitor and public status page without a paid SaaS.

**Why it's useful:** Single-container deploy on the Coolify VPS to monitor n8n, Supabase, Qdrant, Ollama, and LiteLLM endpoints, wiring alerts into n8n.

**Notable alternatives:** Gatus, Healthchecks.io, Statping-ng.
