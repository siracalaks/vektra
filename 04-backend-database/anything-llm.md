---
name: anything-llm
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/Mintplex-Labs/anything-llm
---

# AnythingLLM

**What it does:** Self-hosted, all-in-one RAG application — chat over your documents with workspaces, embeddings, and agents.

**Stage / workflow:** Backend — RAG/chat layer over private document collections.

**Cost model:** Self-hostable, open source (MIT). Free when self-hosted.

**Connection to Claude/n8n:** Self-hosted app with API; connects to Ollama/LiteLLM for models and to vector DBs for storage.

**Connection recipe:**
```bash
docker run -d -p 3001:3001 mintplexlabs/anythingllm
# production: deploy via Coolify (Docker); point at Qdrant + Ollama/LiteLLM
```

**When to use it:** Standing up a document-Q&A assistant for a client or internal team quickly, with full control over data.

**Why it's useful:** Self-hosts on Coolify; uses his Qdrant for vectors and Ollama/LiteLLM for models; EU data residency.

**Notable alternatives:** Open WebUI (chat-first, lighter RAG); LibreChat (multi-model chat); custom pgvector/Qdrant pipeline (max control).
