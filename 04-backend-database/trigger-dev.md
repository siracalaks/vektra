---
name: trigger-dev
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/triggerdotdev/trigger.dev
---

# Trigger.dev

**What it does:** Open-source background jobs and long-running task framework with no serverless timeouts, retries, and observability.

**Stage / workflow:** Backend — durable, long-running task orchestration for AI pipelines and multi-step jobs.

**Cost model:** Self-hostable, open source (Apache 2.0). Free when self-hosted; managed cloud also available.

**Connection to Claude/n8n:** Self-hosted via Docker Compose; SDK in your app defines tasks, triggered by code or n8n.

**Connection recipe:**
```bash
git clone https://github.com/triggerdotdev/trigger.dev
docker compose up -d
# production: deploy via Coolify (Docker Compose)
```

**When to use it:** Long-running AI pipelines (image-to-video, batch processing) that would blow past serverless function timeouts.

**Why it's useful:** Self-hosts on Coolify (Apache 2.0); no serverless timeout caps — ideal for heavy AI media pipelines; EU data residency.

**Notable alternatives:** BullMQ (Redis queue, lower-level); pg-boss/Graphile Worker (Postgres-native, simpler); Inngest (hosted, US).
