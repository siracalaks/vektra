---
name: Botpress
stage: 08-marketing-growth
type: app
domain: chatbot
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/botpress/botpress
---

# Botpress

**What it does:** Open-source chatbot and AI agent builder with a visual flow editor; self-hostable or cloud.

**Stage / workflow:** Marketing/growth + support stage — build custom support/sales bots and AI agents with full control over data.

**Cost model:** Self-hostable open-source core (free to run); Botpress Cloud offers a managed freemium tier.

**Connection to Claude/n8n:** Self-host — run it yourself; integrate with n8n via Botpress webhooks/HTTP and connect LLMs (including Claude) as the model backend.

**Connection recipe:**
```bash
# Self-host the open-source server
git clone https://github.com/botpress/botpress.git
cd botpress
# Follow repo README for the current run instructions (Docker / Node).
# Then wire webhooks/HTTP to n8n; configure Claude as the LLM provider.
```

**When to use it:** When a client needs a fully customizable, self-hosted bot/agent for data control or EU residency.

**Why it's useful:** Self-hostable (EU data residency) and pairs with n8n + Claude — ideal for privacy-sensitive clients.

**Notable alternatives:** Tidio, Drift, Rasa.
