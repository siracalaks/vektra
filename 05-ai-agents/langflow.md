---
name: Langflow
stage: 05-ai-agents
type: agent
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/langflow-ai/langflow
---

# Langflow

**What it does:** Visual builder for agent and RAG pipelines with a drag-and-drop canvas.

**Stage / workflow:** Build phase — visually compose flows, then deploy them as APIs.

**Cost model:** Self-hostable, open source (run via pip or Docker on your own infra).

**Connection to Claude/n8n:** Self-host on Coolify (pip or Docker); expose flows as APIs callable from n8n.

**Connection recipe:**
```bash
# install via pip
pip install langflow

# or self-host via Docker on Coolify
```

**When to use it:** When you want a visual, experiment-friendly way to build agent/RAG flows.

**Why it's useful:** Runs as a Docker/pip service on Coolify and connects to your self-hosted Qdrant/Ollama/LiteLLM, callable from n8n.

**Notable alternatives:** `Flowise`, `Dify` (visual builders), `langchain` (code-first) — prefer Langflow for its Python-native flow design.
