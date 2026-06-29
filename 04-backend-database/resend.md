---
name: resend
stage: 04-backend-database
type: library
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://resend.com
---

# Resend

**What it does:** Developer-first transactional email API with first-class React Email components for building templates in JSX.

**Stage / workflow:** Backend — transactional email (signup, receipts, notifications) sent from your app/n8n.

**Cost model:** Freemium SaaS; generous free tier, paid above by volume.

**Connection to Claude/n8n:** API via the `resend` npm SDK; send from Next.js or call from n8n via HTTP.

**Connection recipe:**
```bash
npm install resend
# set RESEND_API_KEY; build templates with react-email, send via resend.emails.send
```

**When to use it:** Best DX for transactional email in a Next.js app, especially with React Email templates.

**Why it's useful:** React Email components fit Next.js 15 directly; fast to wire up for client-facing transactional mail.

**Notable alternatives:** Amazon SES (cheapest at volume, more setup); Postmark (transactional, great deliverability); self-hosted SMTP (full control, more ops).
