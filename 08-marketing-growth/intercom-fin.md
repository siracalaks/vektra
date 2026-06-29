---
name: Intercom Fin
stage: 08-marketing-growth
type: agent
domain: chatbot
cost: paid
conn_type: api
status: active
added: 2026-06-27
source_url: https://intercom.com/fin
---

# Intercom Fin

**What it does:** AI customer-support agent built on Intercom that resolves tickets autonomously from your help content.

**Stage / workflow:** Support stage — front-line resolution that deflects tickets before escalating to human agents.

**Cost model:** Paid — Intercom subscription plus per-resolution pricing for Fin.

**Connection to Claude/n8n:** API — no native MCP; Intercom has a REST API and webhooks you can drive from n8n.

**Connection recipe:**
```bash
# Set up Intercom + enable Fin at https://intercom.com/fin, get an access token.
# In n8n: HTTP Request node -> Intercom REST API; webhooks for conversation events.
# No official MCP.
```

**When to use it:** When a client already runs Intercom and wants an autonomous AI agent to deflect support volume.

**Why it's useful:** Intercom webhooks feed n8n for routing/reporting; suits clients scaling support without more headcount.

**Notable alternatives:** Tidio (Lyro), Drift, Botpress.
