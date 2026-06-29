---
name: Zapier
stage: 05-ai-agents
type: app
domain: automation
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://zapier.com
---

# Zapier

**What it does:** No-code automation platform that connects thousands of apps via triggers and actions ("Zaps"), with AI/agent features layered on top.

**Stage / workflow:** Automation/agent orchestration — wire SaaS apps together without code; useful as a hosted bridge to services lacking native n8n nodes.

**Cost model:** Freemium. Free tier with limited tasks/Zaps; paid plans scale by tasks, multi-step Zaps, and premium apps.

**Connection to Claude/n8n:** API + webhooks. Zapier can call REST APIs and receive webhooks, so it interoperates with n8n; some Claude/AI actions are built in.

**Connection recipe:**
```bash
# Sign up at https://zapier.com and create a Zap.
# Use a Webhooks by Zapier trigger/action to bridge to n8n (HTTP).
# Note: if you self-host n8n, Zapier is the hosted alternative; prefer n8n unless an app
# is only reachable through Zapier's catalog.
```

**When to use it:** When you need a connector for an app that n8n doesn't cover, or want a quick hosted Zap rather than maintaining a workflow.

**Why it's useful:** Webhook bridges let Zapier hand off to self-hosted n8n, filling integration gaps without abandoning your own workflow engine.

**Notable alternatives:** n8n (a self-hosted core), Make (visual logic), Pipedream (code-first).
