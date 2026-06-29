---
name: better-auth
stage: 04-backend-database
type: library
cost: free
conn_type: npm
status: active
added: 2026-06-27
source_url: https://www.better-auth.com
---

# better-auth

**What it does:** Framework-agnostic TypeScript authentication that runs inside your app; auth data lives in your own Postgres (your Supabase).

**Stage / workflow:** Backend — auth layer for any Next.js product.

**Cost model:** Free, open source (MIT). Self-hosted by design — no external auth vendor.

**Connection to Claude/n8n:** npm library in the app codebase (not an MCP).

**Connection recipe:**
```bash
npm install better-auth
# configure with your Supabase Postgres connection string;
# data stays in your DB (GDPR-friendly for German/Turkish SMB clients).
```

**When to use it:** New Next.js projects needing full control + EU data residency. Preferred over Auth.js (now maintenance mode).

**Why it's useful:** Stores data in existing Supabase Postgres; no US-hosted vendor; full control.

**Notable alternatives:** Supabase Auth (already in stack, simplest); Clerk (fastest drop-in UI but US-only residency — GDPR risk for German clients); Lucia/Stack Auth (lighter).
