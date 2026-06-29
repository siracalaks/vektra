---
name: shadcn MCP
stage: 05-ai-agents
type: mcp
cost: free
conn_type: mcp
status: active
added: 2026-06-27
source_url: https://github.com/shadcn-ui/ui
---

# shadcn MCP

**What it does:** Official shadcn MCP server giving Claude direct access to shadcn/ui components and blocks.

**Stage / workflow:** Frontend build phase — let Claude pull and assemble shadcn components in your Next.js app.

**Cost model:** Free, open source.

**Connection to Claude/n8n:** MCP server initialized via the shadcn CLI for the Claude client.

**Connection recipe:**
```bash
npx shadcn@latest mcp init --client claude
# verify exact command
```

**When to use it:** When building UI with shadcn/ui and you want Claude to fetch the correct, up-to-date component source.

**Why it's useful:** Directly serves your Next.js 15 + shadcn/ui + Tailwind frontend, so Claude builds with real components instead of guessing.

**Notable alternatives:** v0, manual shadcn CLI add — prefer the MCP server for in-editor, Claude-driven component access.
