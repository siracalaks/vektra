---
name: open-webui
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/open-webui/open-webui
---

# Open WebUI

**What it does:** Self-hosted, feature-rich chat UI for LLMs that pairs natively with Ollama and any OpenAI-compatible API.

**Stage / workflow:** Backend/frontend — chat interface over local and remote models, with RAG and multi-user support.

**Cost model:** Self-hostable, open source. Free when self-hosted.

**Connection to Claude/n8n:** Self-hosted app; connects to Ollama and OpenAI-compatible endpoints (LiteLLM) for model access.

**Connection recipe:**
```bash
docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:main
# production: deploy via Coolify (Docker); point at Ollama / LiteLLM
```

**When to use it:** Giving a team a ChatGPT-style UI over self-hosted models without sending prompts to a US SaaS.

**Why it's useful:** Pairs directly with his Ollama and LiteLLM on Coolify; EU-resident, GDPR-friendly internal chat.

**Notable alternatives:** LibreChat (multi-model, broader provider config); AnythingLLM (RAG-first); Jan/LM Studio (desktop-only).
