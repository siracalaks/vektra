---
name: Self-hosted Supabase MCP
stage: 05-ai-agents
type: mcp
cost: free
conn_type: mcp
status: active
added: 2026-06-27
source_url: https://github.com/HenkDz/selfhosted-supabase-mcp
---

# Self-hosted Supabase MCP

**What it does:** MCP server that connects Claude to a self-hosted Supabase instance (Postgres, Auth, Storage).

**Stage / workflow:** Build/data phase — let Claude query and manage your self-hosted Supabase from inside Claude Code.

**Cost model:** Free, open source.

**Connection to Claude/n8n:** MCP server installed via Smithery CLI for the Claude client.

**Connection recipe:**
```bash
npx -y @smithery/cli install @HenkDz/selfhosted-supabase-mcp --client claude
```

**When to use it:** When you want Claude to read/write your self-hosted Supabase database and services directly.

**Why it's useful:** Built specifically for self-hosted Supabase — exactly your Coolify Postgres/Auth/Storage setup. Never expose it to the public internet; access only via VPN/SSH tunnel.

**Notable alternatives:** Official Supabase MCP (cloud-oriented), direct `psql`/postgres MCP — prefer this one for self-hosted Supabase.
