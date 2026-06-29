---
name: pg-boss
stage: 04-backend-database
type: library
cost: free
conn_type: npm
status: active
added: 2026-06-27
source_url: https://github.com/timgit/pg-boss
---

# pg-boss

**What it does:** Postgres-native job queue for Node.js — scheduling, retries, and pub/sub built on Postgres (SKIP LOCKED).

**Stage / workflow:** Backend — background job queue with zero new infrastructure beyond your existing Postgres.

**Cost model:** Free, open source (MIT).

**Connection to Claude/n8n:** npm library; uses your Supabase Postgres as the queue backend.

**Connection recipe:**
```bash
npm install pg-boss
# point at your Supabase Postgres connection string; it manages its own schema
```

**When to use it:** Background jobs when you want to avoid running Redis — reuse the Postgres you already have.

**Why it's useful:** Uses existing Supabase Postgres — no new service to host; EU data residency by default.

**Notable alternatives:** Graphile Worker (also Postgres-native, LISTEN/NOTIFY-driven); BullMQ (Redis, more throughput/features); Trigger.dev (long-running tasks).
