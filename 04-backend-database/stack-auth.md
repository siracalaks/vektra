---
name: stack-auth
stage: 04-backend-database
type: library
cost: self-hostable
conn_type: npm
status: active
added: 2026-06-27
source_url: https://github.com/stack-auth/stack
---

# Stack Auth

**What it does:** Open-source, self-hostable auth and user management with prebuilt Next.js components — an open Clerk alternative.

**Stage / workflow:** Backend/frontend — drop-in auth UI you can also self-host.

**Cost model:** Self-hostable, open source. Free when self-hosted; managed tier also available.

**Connection to Claude/n8n:** npm library + backend you can self-host; integrates into Next.js apps.

**Connection recipe:**
```bash
npm install @stackframe/stack
# configure project keys; self-host the backend via Docker for full control
```

**When to use it:** You want Clerk-style DX but with the option to self-host on EU infra.

**Why it's useful:** Self-hostable on Coolify; Next.js 15 components; avoids US-only residency lock-in.

**Notable alternatives:** Clerk (more polished but US-hosted); better-auth (library-only, max control); Supabase Auth (in-stack).
