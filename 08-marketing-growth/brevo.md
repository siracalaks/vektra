---
name: Brevo
stage: 08-marketing-growth
type: app
domain: email
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://brevo.com
---

# Brevo

**What it does:** Email, SMS, and marketing automation platform (formerly Sendinblue), with CRM and transactional sending.

**Stage / workflow:** Marketing/growth stage — newsletters, automation flows, transactional email, and basic CRM.

**Cost model:** Freemium — free tier with daily send limit, paid plans by send volume and features.

**Connection to Claude/n8n:** API — no native MCP; Brevo has a well-documented REST API and a native n8n integration node.

**Connection recipe:**
```bash
# Sign up at https://brevo.com, get an API key (SMTP & API settings).
# In n8n: use the Brevo (Sendinblue) node, or HTTP Request -> Brevo REST API.
# No official MCP.
```

**When to use it:** When you want EU-friendly email/SMS automation plus transactional sending under one affordable account.

**Why it's useful:** EU-based provider (GDPR-friendly) with a native n8n node — strong fit for clients and automated flows.

**Notable alternatives:** Sender, Customer.io, Listmonk.
