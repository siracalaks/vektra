---
name: Dify
stage: 05-ai-agents
type: agent
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/langgenius/dify
---

# Dify

**What it does:** LLMOps/agent platform for building, deploying, and operating LLM apps and agents.

**Stage / workflow:** Build and operate phase — design agents, manage prompts, and monitor LLM apps in one platform.

**Cost model:** Self-hostable, open source (run via Docker Compose on your own infra).

**Connection to Claude/n8n:** Self-host on Coolify via docker compose; expose apps as APIs callable from n8n.

**Connection recipe:**
```bash
# self-host via docker compose on Coolify
git clone https://github.com/langgenius/dify
cd dify/docker
docker compose up -d
```

**When to use it:** When you want an all-in-one LLMOps platform with prompt management, RAG, and agent deployment.

**Why it's useful:** Deploys as a Docker Compose stack on Coolify and integrates with your self-hosted models and Qdrant, callable from n8n.

**Notable alternatives:** `Flowise`, `Langflow` (visual builders), `langchain` (code-first) — prefer Dify when you need full LLMOps and operations tooling.
