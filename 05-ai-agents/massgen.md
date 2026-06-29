---
name: MassGen
stage: 05-ai-agents
type: agent
cost: free
conn_type: git-clone
status: watch
added: 2026-06-27
source_url: https://github.com/massgen/MassGen
---

# MassGen

**What it does:** Multi-agent scaling/generation framework for running agents at scale.

**Stage / workflow:** Experimental build phase — scaling out multi-agent generation pipelines.

**Cost model:** Free, open source.

**Connection to Claude/n8n:** Reference framework — git clone and run locally.

**Connection recipe:**
```bash
git clone https://github.com/massgen/MassGen
# verify exact command from repo README
```

**When to use it:** When experimenting with large-scale multi-agent generation; verify maturity before production use.

**Why it's useful:** Self-hostable and code-first, so it can run on your VPS alongside other agent frameworks if it proves stable.

**Notable alternatives:** `crewAI`, `langchain` — prefer those production-ready frameworks until MassGen is verified.
