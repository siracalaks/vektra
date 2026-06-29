---
name: Hermes Agent
stage: 05-ai-agents
type: agent
domain: automation
cost: free
conn_type: git-clone
status: watch
added: 2026-06-27
source_url: https://github.com/NousResearch/hermes-agent
---

# Hermes Agent

**What it does:** Open-source autonomous AI agent (by Nous Research) with persistent memory and user profiles, self-improving skills, a built-in cron scheduler, and multi-platform messaging (Telegram, Discord, Slack, WhatsApp, Signal, CLI).

**Stage / workflow:** Agent runtime — deploy a long-running assistant that remembers across sessions and reacts on chat platforms or schedules.

**Cost model:** Free, open source (MIT). You bring your own model API keys (OpenRouter/OpenAI/Anthropic/custom) and host it.

**Connection to Claude/n8n:** git-clone / self-host. Configure it to use Anthropic (Claude) as the model backend; integrate with n8n via its messaging channels or webhooks/HTTP from your deployment.

**Connection recipe:**
```bash
git clone https://github.com/NousResearch/hermes-agent
cd hermes-agent
# Follow repo docs to install and configure (model API key + channels).
# An installer script is also documented at hermes-agent.nousresearch.com.
# Set the model backend to Anthropic (Claude) via API key.
```

**When to use it:** When you want a self-hosted, memory-backed agent that lives on Telegram/Discord/Slack and can run scheduled tasks — rather than a stateless chatbot.

**Why it's useful:** Self-hostable on Coolify with Claude as the model backend; its messaging channels and scheduler can drive or be driven by n8n workflows. Marked `watch` — verify maturity/stability before production use.

**Notable alternatives:** OpenHands (autonomous dev agent), CrewAI (multi-agent framework), n8n-native AI agent nodes.
