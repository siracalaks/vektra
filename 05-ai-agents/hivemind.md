---
name: Hivemind
stage: 05-ai-agents
type: agent
cost: free
conn_type: git-clone
status: watch
added: 2026-06-27
source_url: https://github.com/hivementality-ai/hivemind
---

# Hivemind

**What it does:** Multi-agent framework for coordinating groups of AI agents.

**Stage / workflow:** Experimental build phase — coordinating agent swarms.

**Cost model:** Free, open source.

**Connection to Claude/n8n:** Reference framework — git clone and run locally.

**Connection recipe:**
```bash
git clone https://github.com/hivementality-ai/hivemind
# verify exact command from repo README
```

**When to use it:** When exploring swarm-style multi-agent coordination; verify maturity first.

**Why it's useful:** Self-hostable and code-first, runnable on your VPS if it proves stable.

**Notable alternatives:** `crewAI`, `MassGen` — prefer production-ready CrewAI until Hivemind is verified.
