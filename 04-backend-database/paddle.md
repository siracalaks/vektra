---
name: paddle
stage: 04-backend-database
type: library
cost: paid
conn_type: api
status: active
added: 2026-06-27
source_url: https://www.paddle.com
---

# Paddle

**What it does:** Merchant of Record for SaaS and digital products — handles checkout, subscriptions, and global sales tax/VAT.

**Stage / workflow:** Backend — billing and payments layer with MoR tax compliance.

**Cost model:** Paid SaaS; per-transaction MoR fee.

**Connection to Claude/n8n:** API + webhooks; billing events drive n8n flows.

**Connection recipe:**
```bash
# Paddle Billing API + webhooks; configure seller account + API key
# verify exact command (use official @paddle SDK per current docs)
```

**When to use it:** An established MoR alternative when you want EU VAT handled and prefer a mature vendor over a newer one.

**Why it's useful:** MoR auto-handles German/EU VAT for SMB sales; webhook events integrate with n8n.

**Notable alternatives:** Polar (open-source MoR, lower fee — recommended); Lemon Squeezy (MoR, post-acquisition uncertainty); Stripe (processor only).
