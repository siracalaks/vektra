---
name: n8n
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/n8n-io/n8n
---

# n8n

**What it does:** Fair-code workflow automation and orchestration platform with 400+ integrations and native AI/agent nodes.

**Stage / workflow:** Backend — the orchestration hub that connects APIs, databases, and AI steps into automated pipelines.

**Cost model:** Self-hostable, open source (Sustainable Use License). Free when self-hosted on your own VPS.

**Connection to Claude/n8n:** Self-hosted app; talks to Claude/LLMs via its AI nodes and to external services via HTTP/API nodes.

**Connection recipe:**
```bash
docker run -it --rm -p 5678:5678 docker.n8n.io/n8nio/n8n
# production: deploy via Coolify (n8n one-click / Docker Compose)
```

**When to use it:** Any time a task spans multiple services (webhook to Supabase to LLM to email) and you want a visual, versionable pipeline instead of glue code.

**Why it's useful:** Already running on his Coolify VPS; central glue between Supabase, Qdrant, Ollama, LiteLLM, and Evolution API. EU-hosted, GDPR-friendly.

**Notable alternatives:** Make/Zapier (SaaS, faster start but US-hosted, recurring cost); Windmill (script-first, dev-heavy); Activepieces (lighter open-source alt).
