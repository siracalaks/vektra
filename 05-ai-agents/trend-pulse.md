---
name: Trend Pulse
stage: 05-ai-agents
type: mcp
cost: free
conn_type: mcp
status: watch
added: 2026-06-27
source_url: https://github.com/claude-world/trend-pulse
---

# Trend Pulse

**What it does:** Free MCP server that aggregates 20 trend sources with zero auth required.

**Stage / workflow:** Research/ideation phase — give Claude live trend data across many sources.

**Cost model:** Free, open source, no auth/keys needed.

**Connection to Claude/n8n:** MCP server added to the Claude client.

**Connection recipe:**
```bash
# add as an MCP server
# verify exact command from repo README
```

**When to use it:** When you want Claude to surface current trends for content, marketing, or product ideas.

**Why it's useful:** Zero-auth MCP that plugs into Claude with no secrets to manage, useful for content pipelines feeding n8n.

**Notable alternatives:** Custom RSS aggregators, paid trend APIs — prefer Trend Pulse for a free, no-auth MCP-native option.
