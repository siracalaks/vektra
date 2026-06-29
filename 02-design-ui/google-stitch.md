---
name: Google Stitch
stage: 02-design-ui
type: app
domain: design-tool
cost: freemium
conn_type: mcp
status: active
added: 2026-06-27
source_url: https://stitch.withgoogle.com
---

# Google Stitch

**What it does:** Google's AI UI design tool that turns prompts into UI screens and exports to Figma or front-end code.

**Stage / workflow:** Design generation — go from prompt to multiple coherent screens, then export for refinement.

**Cost model:** Freemium — free generations with usage limits via Google Labs.

**Connection to Claude/n8n:** Exposes an MCP server, so Claude can drive Stitch directly (project/screen/design-system tools).

**Connection recipe:**
```bash
# Web app — sign in at https://stitch.withgoogle.com
# Stitch also ships an MCP server you can connect to Claude.
# Use the mcp__stitch__* tools (create_project, generate_screen_from_text, etc.).
```

**When to use it:** When you want Claude to generate and iterate on UI screens programmatically via MCP, or to export screens to Figma.

**Why it's useful:** The connected Stitch MCP lets Claude generate screens and design systems that map onto the Next.js 15 + shadcn/Tailwind workflow.

**Notable alternatives:** Vercel v0, Uizard, Figma AI.
