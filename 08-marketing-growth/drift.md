---
name: Drift
stage: 08-marketing-growth
type: app
domain: chatbot
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://drift.com
---

# Drift

**What it does:** Conversational AI for sales and support — chatbots that qualify, book meetings, and route leads.

**Stage / workflow:** Marketing/growth stage — conversational marketing on the website to capture and route inbound demand.

**Cost model:** Freemium — limited free/entry tier, paid plans for advanced playbooks and seats.

**Connection to Claude/n8n:** API — no native MCP; Drift offers a REST API and webhooks you can drive from n8n.

**Connection recipe:**
```bash
# Sign up at https://drift.com, get an OAuth token / API key.
# In n8n: HTTP Request node -> Drift REST API; webhooks for conversation/lead events.
# No official MCP.
```

**When to use it:** When the focus is conversational marketing to convert and book sales meetings from site traffic.

**Why it's useful:** Qualified leads can flow via n8n into Twenty CRM and Instantly outreach for SMB sales motions.

**Notable alternatives:** Intercom Fin, Tidio, Botpress.
