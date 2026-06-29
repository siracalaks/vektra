---
name: lemon-squeezy
stage: 04-backend-database
type: library
cost: paid
conn_type: api
status: watch
added: 2026-06-27
source_url: https://www.lemonsqueezy.com
---

# Lemon Squeezy

**What it does:** Merchant of Record for digital products and SaaS — handles checkout, subscriptions, and global tax/VAT.

**Stage / workflow:** Backend — billing and payments layer with MoR tax handling.

**Cost model:** Paid SaaS; per-transaction MoR fee.

**Connection to Claude/n8n:** API + webhooks; subscription events drive n8n flows.

**Connection recipe:**
```bash
# REST API + webhooks; configure store + API key
# verify exact command (Stripe-owned; SDK/direction may change)
```

**When to use it:** Use if you're already on it. Now Stripe-owned with post-acquisition uncertainty, so not the first pick for new builds.

**Why it's useful:** MoR handles EU VAT, but the acquisition uncertainty means status watch — prefer Polar/Paddle for new SMB projects.

**Notable alternatives:** Polar (open-source MoR, recommended); Paddle (established MoR); Stripe (the new owner, processor-only unless using Tax).
