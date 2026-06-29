---
name: OpenHands
stage: 05-ai-agents
type: agent
cost: self-hostable
conn_type: self-host
status: watch
added: 2026-06-27
source_url: https://github.com/OpenHands/OpenHands
---

# OpenHands

**What it does:** Autonomous coding agent that can read, write, and run code to complete software tasks end to end.

**Stage / workflow:** Build/execution phase — hand it a coding task and it works autonomously in a sandbox.

**Cost model:** Self-hostable, open source (run via Docker on your own infra).

**Connection to Claude/n8n:** Self-host via Docker; point it at Claude/LiteLLM as the backing model.

**Connection recipe:**
```bash
docker run -it --rm -p 3000:3000 openhands/openhands:latest
# verify exact image tag from repo README
```

**When to use it:** When you want a fully autonomous coding agent rather than an interactive assistant.

**Why it's useful:** Deploy it on Coolify as a Docker service and back it with your self-hosted LiteLLM/Ollama models.

**Notable alternatives:** Claude Code (interactive), `crewAI` (multi-agent) — prefer OpenHands for hands-off autonomous coding runs.
