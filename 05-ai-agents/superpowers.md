---
name: Superpowers
stage: 05-ai-agents
type: skill
cost: free
conn_type: skill
status: active
added: 2026-06-27
source_url: https://github.com/obra/superpowers
---

# Superpowers

**What it does:** Agentic skills framework + software-development methodology that enforces a brainstorm → spec → plan → TDD → review workflow.

**Stage / workflow:** Cross-cutting methodology layer — use at the start of any build.

**Cost model:** Free, open source.

**Connection to Claude/n8n:** Claude plugin/skill. Works in Claude Code AND Antigravity.

**Connection recipe:**
```bash
# In Claude Code:
/plugin marketplace add obra/superpowers
/plugin install superpowers@superpowers
```

**When to use it:** Install first, before populating the library. Use whenever starting a new product so the agent follows a disciplined plan instead of jumping to code.

**Why it's useful:** Tool-agnostic methodology; runs in your primary environments (e.g. Claude Code).

**Notable alternatives:** github/spec-kit (spec-driven, lighter); Agent-Skills-for-Context-Engineering (context-focused).
