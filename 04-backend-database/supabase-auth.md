---
name: supabase-auth
stage: 04-backend-database
type: library
cost: self-hostable
conn_type: api
status: active
added: 2026-06-27
source_url: https://supabase.com/docs/guides/auth
---

# Supabase Auth

**What it does:** Built-in authentication (GoTrue) with email/OAuth/magic-link, JWTs, and tight Row Level Security integration.

**Stage / workflow:** Backend — auth layer wired directly into your Supabase Postgres and RLS policies.

**Cost model:** Self-hostable, part of Supabase (open source). Free in the managed free tier; free when self-hosted.

**Connection to Claude/n8n:** API via `@supabase/supabase-js`; tokens flow into RLS-protected queries and n8n.

**Connection recipe:**
```bash
npm install @supabase/supabase-js
# enable Auth providers in the Supabase dashboard; use supabase.auth.signIn*
```

**When to use it:** The simplest, lowest-friction option when you're already on Supabase and want auth + RLS in one place.

**Why it's useful:** Already in the stack; no extra service, auth data lives in Supabase Postgres on EU infra (GDPR).

**Notable alternatives:** better-auth (more control, framework-agnostic); Clerk (drop-in UI but US residency); Hanko (passkey-first).
