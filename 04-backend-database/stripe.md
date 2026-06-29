---
name: stripe
stage: 04-backend-database
type: library
cost: paid
conn_type: api
status: active
added: 2026-06-27
source_url: https://stripe.com
---

# Stripe

**What it does:** Full-featured payment processing — cards, subscriptions, invoicing, and Connect for marketplaces.

**Stage / workflow:** Backend — payment processing layer (note: a processor, NOT a Merchant of Record).

**Cost model:** Paid SaaS; per-transaction fees, no monthly minimum.

**Connection to Claude/n8n:** API via the `stripe` npm SDK + webhooks; payment events drive n8n flows.

**Connection recipe:**
```bash
npm install stripe
# configure secret key; handle PaymentIntents/Subscriptions + webhooks
```

**When to use it:** When you need the most flexible, battle-tested payment APIs and are willing to handle EU VAT/tax yourself (or via Stripe Tax).

**Why it's useful:** Industry-standard SDK fits Next.js 15; great for marketplaces (Connect). Caveat: as a processor, VAT compliance is on you — Polar/Paddle MoR may be simpler for SMB sales.

**Notable alternatives:** Polar (MoR, auto EU VAT — recommended for SMB sales); Paddle (MoR); Mollie (EU-focused processor).
