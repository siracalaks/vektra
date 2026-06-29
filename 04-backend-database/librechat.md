---
name: LibreChat
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/danny-avila/LibreChat
---

# LibreChat

**What it does:** Self-hosted, multi-model chat UI supporting OpenAI, Anthropic, Google, and any OpenAI-compatible endpoint, with agents and RAG.

**Stage / workflow:** Backend/frontend — unified chat interface across many model providers.

**Cost model:** Self-hostable, open source (MIT). Free when self-hosted.

**Connection to Claude/n8n:** Self-hosted app; configure providers (Anthropic/OpenAI/LiteLLM/Ollama) and expose a single chat UI.

**Connection recipe:**
```bash
git clone https://github.com/danny-avila/LibreChat
docker compose up -d
# production: deploy via Coolify (Docker Compose); point at LiteLLM / Ollama
```

**When to use it:** When a team needs one UI spanning multiple model providers (Claude + local models) with self-hosted control.

**Why it's useful:** Self-hosts on Coolify; routes through LiteLLM/Ollama; keeps conversations on EU infra (GDPR).

**Notable alternatives:** Open WebUI (Ollama-first, simpler); AnythingLLM (RAG-first); hosted ChatGPT/Claude (no control).
