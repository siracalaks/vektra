---
name: Excel MCP Server
stage: 05-ai-agents
type: mcp
cost: free
conn_type: mcp
status: watch
added: 2026-06-27
source_url: https://github.com/haris-musa/excel-mcp-server
---

# Excel MCP Server

**What it does:** MCP server that lets Claude read, write, and manipulate Excel spreadsheets.

**Stage / workflow:** Data phase — Claude-driven spreadsheet generation and editing.

**Cost model:** Free, open source.

**Connection to Claude/n8n:** MCP server run via uvx/pip.

**Connection recipe:**
```bash
uvx excel-mcp-server
# verify exact command from repo README
```

**When to use it:** When a workflow needs Claude to produce or transform .xlsx files directly.

**Why it's useful:** Self-hostable MCP that slots into Claude/n8n pipelines that output spreadsheets for clients.

**Notable alternatives:** Python `openpyxl` scripts, Google Sheets API — prefer this MCP for Claude-native Excel operations.
