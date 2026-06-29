---
name: n8n MCP
stage: 05-ai-agents
type: mcp
cost: free
conn_type: mcp
status: active
added: 2026-06-27
source_url: https://github.com/czlonkowski/n8n-mcp
---

# n8n MCP

**What it does:** Exposes n8n to Claude via MCP — built-in instance-level MCP plus `czlonkowski/n8n-mcp` which serves 2,000+ node docs to Claude.

**Stage / workflow:** Build phase — let Claude design, query, and reason about n8n workflows and nodes.

**Cost model:** Free, open source (self-hosted alongside your n8n instance).

**Connection to Claude/n8n:** MCP server. Use n8n's built-in instance-level MCP for workflow control, plus czlonkowski/n8n-mcp for node documentation.

**Connection recipe:**
```bash
# 1. Enable instance-level MCP in n8n: Settings -> Instance-level MCP

# 2. Add node-docs MCP server (czlonkowski/n8n-mcp):
# verify exact command from czlonkowski/n8n-mcp README
```

**When to use it:** When building n8n workflows with Claude and you want accurate node parameters and instance control.

**Why it's useful:** Directly targets your self-hosted n8n, giving Claude grounded knowledge of every node you use.

**Notable alternatives:** Manual n8n API calls, n8n docs scraping — prefer the MCP server for structured, up-to-date node access.
