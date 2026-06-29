---
name: graphile-worker
stage: 04-backend-database
type: library
cost: free
conn_type: npm
status: active
added: 2026-06-27
source_url: https://github.com/graphile/worker
---

# Graphile Worker

**What it does:** High-performance Postgres-native job queue for Node.js using LISTEN/NOTIFY and SKIP LOCKED for low-latency processing.

**Stage / workflow:** Backend — background job queue running entirely on your existing Postgres.

**Cost model:** Free, open source (MIT).

**Connection to Claude/n8n:** npm library; can also enqueue jobs directly via SQL from triggers or n8n.

**Connection recipe:**
```bash
npm install graphile-worker
# point at your Supabase Postgres connection string; run the worker process
```

**When to use it:** Low-latency background jobs on Postgres, especially when you want to enqueue from SQL/database triggers.

**Why it's useful:** Uses existing Supabase Postgres — no Redis or extra service; SQL-level enqueue pairs well with Supabase triggers; EU residency.

**Notable alternatives:** pg-boss (Postgres-native, more built-in scheduling features); BullMQ (Redis, higher throughput); Trigger.dev (long-running tasks).
