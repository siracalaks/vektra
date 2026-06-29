---
name: amazon-ses
stage: 04-backend-database
type: library
cost: paid
conn_type: api
status: active
added: 2026-06-27
source_url: https://aws.amazon.com/ses/
---

# Amazon SES

**What it does:** High-scale, low-cost transactional and bulk email service from AWS, via API or SMTP.

**Stage / workflow:** Backend — transactional/bulk email delivery at the lowest per-message cost.

**Cost model:** Paid (pay-per-email); the cheapest option at high volume.

**Connection to Claude/n8n:** API via AWS SDK or SMTP credentials; send from app or n8n.

**Connection recipe:**
```bash
npm install @aws-sdk/client-ses
# configure AWS credentials + verified domain; choose an EU region (eu-central-1)
```

**When to use it:** When email volume is high enough that per-message price dominates and you accept more setup (domain verification, DKIM, sandbox exit).

**Why it's useful:** Pick an EU region (e.g. eu-central-1) for GDPR data residency; lowest cost when sending at scale for German/Turkish clients.

**Notable alternatives:** Resend (far better DX, React Email — preferred for low/medium volume); Postmark (deliverability); self-hosted SMTP (full control).
