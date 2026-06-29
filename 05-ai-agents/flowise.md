---
name: Flowise
stage: 05-ai-agents
type: agent
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/FlowiseAI/Flowise
---

# Flowise

**What it does:** Visual drag-and-drop builder for LLM apps and agents.

**Stage / workflow:** Build phase — design agent/RAG flows visually, then expose them as APIs.

**Cost model:** Self-hostable, open source (run via npx or Docker on your own infra).

**Connection to Claude/n8n:** Self-host on Coolify (Docker); expose flows as APIs callable from n8n.

**Connection recipe:**
```bash
# quick local start
npx flowise start

# or self-host via Docker on Coolify
```

**When to use it:** When you want to prototype agent/RAG pipelines visually without writing framework code.

**Why it's useful:** Deploys as a Docker service on Coolify and integrates with your self-hosted Qdrant/Ollama/LiteLLM, callable from n8n.

**Notable alternatives:** `Langflow`, `Dify` (visual builders), `langchain` (code-first) — prefer Flowise for LangChain-style visual flows.
