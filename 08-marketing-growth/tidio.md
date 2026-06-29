---
name: Tidio
stage: 08-marketing-growth
type: app
domain: chatbot
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://tidio.com
---

# Tidio

**What it does:** AI chatbot plus live chat for customer support and lead capture on websites.

**Stage / workflow:** Marketing/growth + support stage — answer visitor questions, qualify leads, and hand off to live agents.

**Cost model:** Freemium — free tier with limits, paid plans for AI (Lyro) conversations and seats.

**Connection to Claude/n8n:** API — no native MCP; Tidio offers a REST API and webhooks you can drive from n8n.

**Connection recipe:**
```bash
# Sign up at https://tidio.com, get API credentials.
# In n8n: HTTP Request node -> Tidio REST API; subscribe to webhooks for chat events.
# No official MCP.
```

**When to use it:** When an SMB website needs an affordable AI + live-chat widget for support and lead capture.

**Why it's useful:** Webhooks let n8n route captured leads into Twenty CRM or Instantly follow-up; affordable for SMB sites.

**Notable alternatives:** Intercom Fin, Drift, Botpress.
