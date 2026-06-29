---
name: polar
stage: 04-backend-database
type: library
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://github.com/polarsource/polar
---

# Polar

**What it does:** Open-source Merchant of Record for digital products and SaaS — handles checkout, subscriptions, and EU VAT automatically.

**Stage / workflow:** Backend — billing and payments layer that also takes on tax/VAT liability as MoR.

**Cost model:** Freemium; low MoR fee on transactions. Open source, with a managed platform.

**Connection to Claude/n8n:** API via `@polar-sh/sdk` + webhooks; subscription events drive n8n flows.

**Connection recipe:**
```bash
npm install @polar-sh/sdk
# configure org/access token; handle checkout + webhooks
```

**When to use it:** RECOMMENDED for selling to SMBs — auto EU VAT handling and the lowest MoR fee remove tax-compliance burden.

**Why it's useful:** MoR auto-handles EU VAT so you don't register for VAT in every country; SDK fits Next.js 15.

**Notable alternatives:** Paddle (MoR, established); Lemon Squeezy (MoR but post-acquisition uncertainty); Stripe (processor only, you handle VAT).
