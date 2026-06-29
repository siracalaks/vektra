---
name: Make
stage: 05-ai-agents
type: app
domain: automation
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://make.com
---

# Make

**What it does:** Visual workflow automation (formerly Integromat) with advanced branching, iterators, and data mapping across many app connectors.

**Stage / workflow:** Automation/agent orchestration — build richer multi-step scenarios than basic Zaps, with fine-grained data transformation.

**Cost model:** Freemium. Free tier with limited operations; paid plans scale by operations and add advanced features.

**Connection to Claude/n8n:** API + webhooks. Make scenarios call REST APIs and accept webhooks, so they bridge cleanly to n8n.

**Connection recipe:**
```bash
# Sign up at https://make.com and create a scenario.
# Use a Webhooks module (custom webhook / HTTP) to trigger or call n8n.
# In n8n: HTTP Request node -> Make webhook URL, or vice versa. No official MCP.
```

**When to use it:** When a workflow needs complex logic, mapping, or iteration that a simpler tool struggles with, and a strong visual builder helps.

**Why it's useful:** Webhook + HTTP interop lets Make complement self-hosted n8n for app connectors or scenarios n8n lacks.

**Notable alternatives:** n8n (a self-hosted core), Zapier (broadest app catalog), Pipedream (code-first).
