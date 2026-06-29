---
name: Sender
stage: 08-marketing-growth
type: app
domain: email
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://sender.net
---

# Sender

**What it does:** Email and SMS marketing automation with a notably generous free tier.

**Stage / workflow:** Marketing/growth stage — newsletters, automated email/SMS flows, and subscriber management.

**Cost model:** Freemium — generous free tier (large monthly send/subscriber allowance), paid plans for higher limits and SMS.

**Connection to Claude/n8n:** API — no native MCP; Sender provides a REST API you can drive from n8n.

**Connection recipe:**
```bash
# Sign up at https://sender.net, get an API key.
# In n8n: HTTP Request node -> Sender REST API to add subscribers / trigger campaigns.
# No official MCP.
```

**When to use it:** When you want low-cost email + SMS automation for small lists without enterprise pricing.

**Why it's useful:** Generous free tier suits early-stage clients; n8n pushes subscribers and triggers flows from CRM events.

**Notable alternatives:** Brevo, Listmonk, Customer.io.
