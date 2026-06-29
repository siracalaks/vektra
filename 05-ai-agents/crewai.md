---
name: CrewAI
stage: 05-ai-agents
type: agent
cost: free
conn_type: cli
status: active
added: 2026-06-27
source_url: https://github.com/crewAIInc/crewAI
---

# CrewAI

**What it does:** Python framework for orchestrating multiple role-based AI agents that collaborate to complete tasks.

**Stage / workflow:** Build phase — design multi-agent crews where each agent has a role, goal, and tools.

**Cost model:** Free, open source (Python library).

**Connection to Claude/n8n:** Python library installed via pip; can be wired to Claude/LiteLLM as the underlying model.

**Connection recipe:**
```bash
pip install crewai
```

**When to use it:** When a task needs several cooperating agents (researcher, writer, reviewer) rather than a single agent loop.

**Why it's useful:** Point it at your self-hosted LiteLLM/Ollama endpoint and trigger crews from n8n for backend automation.

**Notable alternatives:** `langchain` (more general framework), `Dify`/`Flowise` (visual builders) — prefer CrewAI for code-first role-based multi-agent orchestration.
