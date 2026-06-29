---
name: bullmq
stage: 04-backend-database
type: library
cost: free
conn_type: npm
status: active
added: 2026-06-27
source_url: https://github.com/taskforcesh/bullmq
---

# BullMQ

**What it does:** Robust Redis-backed message queue for Node.js — jobs, scheduling, retries, rate limiting, and flows.

**Stage / workflow:** Backend — background job and queue layer for async work in your app.

**Cost model:** Free, open source (MIT). You run the Redis infra.

**Connection to Claude/n8n:** npm library in your Node backend; workers process queued jobs.

**Connection recipe:**
```bash
npm install bullmq
# requires a Redis instance (self-host Redis on Coolify)
```

**When to use it:** High-throughput background jobs (emails, AI calls, image processing) when you already run or can run Redis.

**Why it's useful:** MIT and self-hosted — you own the Redis on Coolify; mature choice for Node/Next.js backends needing real queue features.

**Notable alternatives:** pg-boss / Graphile Worker (Postgres-native, no Redis needed); Trigger.dev (managed-style with no serverless timeouts).
