---
name: GlitchTip
stage: 07-deployment-devops
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://glitchtip.com
---

# GlitchTip

**What it does:** Lightweight open-source error tracking that speaks the Sentry protocol, so existing Sentry SDKs work unchanged against a far smaller stack.

**Stage / workflow:** Deployment & DevOps / post-launch — captures exceptions and uptime checks from your running apps.

**Cost model:** Free and self-hostable (open source); also a low-cost hosted plan. Runs on Postgres + Redis only — no Kafka/ClickHouse.

**Connection to Claude/n8n:** API + self-host. Apps send via Sentry SDKs to a self-hosted DSN; n8n can report errors to the same endpoint.

**Connection recipe:**
```bash
# Self-host via Docker Compose (canonical)
wget https://gitlab.com/glitchtip/glitchtip-docker/-/raw/master/docker-compose.yml
docker compose up -d
```

**When to use it:** When you want Sentry-compatible error tracking but can't justify Sentry's heavyweight infrastructure on a small VPS.

**Why it's useful:** Deploys easily on the Coolify VPS with just Postgres + Redis, reusing Supabase-style Postgres knowledge; drop-in for any Sentry SDK in Next.js.

**Notable alternatives:** Sentry (self-hosted), Bugsnag, Rollbar.
