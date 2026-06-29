---
name: lucia
stage: 04-backend-database
type: reference
cost: free
conn_type: reference
status: watch
added: 2026-06-27
source_url: https://github.com/lucia-auth/lucia
---

# Lucia

**What it does:** Lightweight, code-first auth approach for TypeScript — as of 2025 it's positioned as a learning resource/reference rather than a maintained library.

**Stage / workflow:** Backend — reference for understanding session-based auth you implement yourself.

**Cost model:** Free, open source (MIT).

**Connection to Claude/n8n:** Reference material, not a packaged service; you write the auth code.

**Connection recipe:**
```bash
# reference / learning resource — read the guides at lucia-auth.com
# verify exact command (library direction changed in 2025; not a drop-in install)
```

**When to use it:** Learning how sessions/auth work under the hood before rolling your own or choosing a maintained library.

**Why it's useful:** Educational for TypeScript/Next.js auth; for production prefer a maintained option, hence status watch.

**Notable alternatives:** better-auth (maintained, self-hosted, EU); Supabase Auth (in-stack); Stack Auth (open-source).
