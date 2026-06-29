---
name: Customer.io
stage: 08-marketing-growth
type: app
domain: email
cost: paid
conn_type: api
status: active
added: 2026-06-27
source_url: https://customer.io
---

# Customer.io

**What it does:** Behavioral email and messaging automation driven by real-time user/event data.

**Stage / workflow:** Marketing/growth + lifecycle stage — trigger emails, push, SMS, and in-app messages from product events.

**Cost model:** Paid SaaS (subscription scaled by profiles/usage); trial available.

**Connection to Claude/n8n:** API — no native MCP; Customer.io has Track and App REST APIs you can drive from n8n.

**Connection recipe:**
```bash
# Sign up at https://customer.io, get API credentials (Track API + App API keys).
# In n8n: HTTP Request node -> Customer.io REST API to send events / trigger messages.
# No official MCP.
```

**When to use it:** When messaging must react to behavioral events (signups, usage, churn signals) rather than static lists.

**Why it's useful:** n8n forwards product/CRM events to Customer.io for event-driven lifecycle messaging on clients.

**Notable alternatives:** Brevo, Ortto, Customer.io alternatives like Iterable.
