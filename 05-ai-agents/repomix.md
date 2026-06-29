---
name: Repomix
stage: 05-ai-agents
type: library
cost: free
conn_type: cli
status: active
added: 2026-06-27
source_url: https://github.com/yamadashy/repomix
---

# Repomix

**What it does:** Packs an entire repository into a single AI-friendly file so Claude can read the whole codebase at once.

**Stage / workflow:** Context-prep step before any agent or coding task — feed a full repo to Claude without manual file juggling.

**Cost model:** Free, open source, runs locally via npx (no host needed).

**Connection to Claude/n8n:** CLI tool; also runs as an MCP server with `--mcp`, and can emit a `.claude/skills` codebase reference.

**Connection recipe:**
```bash
# pack the current repo into one file
npx repomix

# run Repomix as an MCP server for Claude
npx repomix --mcp

# generate a .claude/skills codebase reference
npx repomix --skill-generate
```

**When to use it:** When you need to give Claude full-codebase context for review, refactoring, or onboarding into a new repo.

**Why it's useful:** Zero-install via npx, pairs perfectly with Claude Code on any Next.js/n8n repo and can expose itself as an MCP server to your self-hosted setup.

**Notable alternatives:** `gitingest` (web-based repo flattening), `code2prompt` (CLI prompt builder) — prefer those for one-off web pastes; prefer Repomix for repeatable CLI/MCP workflows.
