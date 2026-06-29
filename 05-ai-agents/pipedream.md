---
name: Pipedream
stage: 05-ai-agents
type: app
domain: automation
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://pipedream.com
---

# Pipedream

**What it does:** Developer-first integration and workflow automation platform where steps can be prebuilt actions or arbitrary code (Node.js, Python).

**Stage / workflow:** Automation/agent orchestration — glue APIs together with real code steps when no-code builders are too limiting.

**Cost model:** Freemium. Generous free tier with credits/invocations; paid plans for higher volume, concurrency, and team features.

**Connection to Claude/n8n:** API + webhooks + code steps. Trigger via HTTP, call any REST API (including Claude) from inside a code step, and hand off to n8n by webhook.

**Connection recipe:**
```bash
# Sign up at https://pipedream.com and create a workflow.
# Add an HTTP trigger, then code steps (Node/Python) calling any REST API.
# Bridge to n8n via an HTTP/webhook step. No official MCP.
```

**When to use it:** When you need code-level control inside an automation — custom logic, niche APIs, or quick serverless glue — rather than a pure no-code canvas.

**Why it's useful:** Code steps can call Claude or Supabase REST APIs and webhook into self-hosted n8n, acting as a code-friendly extension of your workflows.

**Notable alternatives:** n8n (self-hosted, also supports code nodes), Make (visual logic), Zapier (broadest catalog).
