---
name: Agent Skills for Context Engineering
stage: 05-ai-agents
type: skill
cost: free
conn_type: skill
status: active
added: 2026-06-27
source_url: https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering
---

# Agent Skills for Context Engineering

**What it does:** A Claude Code plugin marketplace of ~15 context-engineering skills (context-fundamentals, optimization, compression).

**Stage / workflow:** Used while architecting agents — apply these skills to design and tune context windows for multi-step agent workflows.

**Cost model:** Free, open source.

**Connection to Claude/n8n:** Claude Code plugin marketplace (skills).

**Connection recipe:**
```bash
/plugin marketplace add muratcankoylan/Agent-Skills-for-Context-Engineering
```

**When to use it:** When designing or debugging agent context — compression, prioritization, and context-window optimization.

**Why it's useful:** Installs straight into Claude Code, improving how your agents handle context across n8n and Supabase-backed workflows.

**Notable alternatives:** `andrej-karpathy-skills` (behavioral guidelines) and Anthropic's own skill docs — prefer those for coding-behavior tuning vs. this for context architecture.
