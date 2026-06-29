---
name: Andrej Karpathy Skills
stage: 05-ai-agents
type: skill
cost: free
conn_type: skill
status: active
added: 2026-06-27
source_url: https://github.com/multica-ai/andrej-karpathy-skills
---

# Andrej Karpathy Skills

**What it does:** A single CLAUDE.md of behavioral guidelines distilled from Karpathy's LLM-coding observations (don't hide confusion, surface tradeoffs, write minimal code).

**Stage / workflow:** Applied as a baseline behavior layer for any Claude Code agent or coding session.

**Cost model:** Free, open source.

**Connection to Claude/n8n:** Claude Code skill / CLAUDE.md — curl the file or install as a plugin.

**Connection recipe:**
```bash
# fetch the CLAUDE.md directly (or install as a plugin from the repo)
curl -O https://raw.githubusercontent.com/multica-ai/andrej-karpathy-skills/main/CLAUDE.md
```

**When to use it:** When you want Claude to be more honest about uncertainty, surface tradeoffs, and avoid over-engineering.

**Why it's useful:** Drop the CLAUDE.md into any repo to immediately steer Claude Code toward minimal, transparent code on your Next.js/n8n projects.

**Notable alternatives:** `agent-skills-context-engineering` (context tuning), Anthropic best-practice guides — prefer this one specifically for coding behavior and honesty.
