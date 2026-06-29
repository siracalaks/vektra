---
name: medusa
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/medusajs/medusa
---

# Medusa

**What it does:** Open-source, headless commerce backend (Node/TypeScript) for building custom storefronts and marketplaces.

**Stage / workflow:** Backend — the commerce engine behind a Next.js storefront; products, carts, orders, fulfillment, payments.

**Cost model:** Self-hostable, open source (MIT). Free when self-hosted; you own the data and infra.

**Connection to Claude/n8n:** Self-hosted API backend; integrates with n8n via REST/webhooks and with the frontend via its JS SDK.

**Connection recipe:**
```bash
npx create-medusa-app@latest
# production: deploy via Docker/Coolify, point at your Postgres (Supabase)
```

**When to use it:** Building a custom e-commerce or marketplace product (e.g. sellers) where Shopify's lock-in or fees don't fit and you need full backend control.

**Why it's useful:** Node/TS pairs with Next.js 15; runs on Coolify against Supabase Postgres; EU data residency.

**Notable alternatives:** Vendure (NestJS/GraphQL commerce); Saleor (Python/GraphQL); Shopify (hosted SaaS — fast but US-hosted and fee-heavy).
