---
name: LangChain
stage: 05-ai-agents
type: agent
cost: free
conn_type: cli
status: active
added: 2026-06-27
source_url: https://github.com/langchain-ai/langchain
---

# LangChain

**What it does:** General-purpose framework for building agents and RAG pipelines over LLMs.

**Stage / workflow:** Build phase — compose chains, tools, retrievers, and agents in code.

**Cost model:** Free, open source (Python and JS libraries).

**Connection to Claude/n8n:** Library installed via pip (Python) or npm (JS); wire to Claude/LiteLLM as the model.

**Connection recipe:**
```bash
# Python
pip install langchain

# JavaScript / TypeScript
npm install langchain
```

**When to use it:** When you need flexible, code-first control over agent logic, tools, and retrieval.

**Why it's useful:** Connects to your self-hosted Qdrant, Ollama, and LiteLLM, and runs as backend logic behind Next.js/n8n.

**Notable alternatives:** `crewAI` (role-based multi-agent), `Dify`/`Flowise` (visual) — prefer LangChain for maximum code-level flexibility.
