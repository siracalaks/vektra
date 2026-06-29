---
name: Inbox Zero
stage: 08-marketing-growth
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/elie222/inbox-zero
---

# Inbox Zero

**What it does:** Open-source AI email assistant that automates labeling, replies, cold-email blocking, and bulk unsubscribe.

**Stage / workflow:** Marketing/growth and ops stage — manage inbound email at scale, triage replies, and automate responses.

**Cost model:** Self-hostable, free under open source; a hosted paid plan also exists.

**Connection to Claude/n8n:** Self-host — deploy via Docker; trigger or extend workflows through n8n alongside its email automations.

**Connection recipe:**
```bash
git clone https://github.com/elie222/inbox-zero.git
```

**When to use it:** When you want AI-driven inbox triage and automated replies on a mailbox you fully control.

**Why it's useful:** Self-hosts on the Coolify VPS and complements the Instantly/Unibox cold-email flow by automating inbound reply handling, with n8n bridging events.

**Notable alternatives:** Superhuman, Shortwave, SaneBox.
