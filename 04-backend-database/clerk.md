---
name: clerk
stage: 04-backend-database
type: library
cost: freemium
conn_type: npm
status: watch
added: 2026-06-27
source_url: https://clerk.com
---

# Clerk

**What it does:** Drop-in authentication and user management with prebuilt React/Next.js components (sign-in, profile, orgs).

**Stage / workflow:** Backend/frontend — fastest path to a polished auth UI in a Next.js app.

**Cost model:** Freemium SaaS; free tier with MAU limits, paid above.

**Connection to Claude/n8n:** npm library + hosted backend; webhooks can drive n8n flows.

**Connection recipe:**
```bash
npm install @clerk/nextjs
# wrap app in <ClerkProvider>; configure keys in env
```

**When to use it:** Prototypes or products where speed-to-auth beats data-residency concerns.

**Why it's useful:** Great Next.js 15 DX — but US-only data residency is a GDPR risk for German/Turkish clients, hence status watch. Prefer Supabase Auth / better-auth for EU.

**Notable alternatives:** Supabase Auth (in-stack, EU); better-auth (self-hosted, EU); Stack Auth (open-source drop-in).
