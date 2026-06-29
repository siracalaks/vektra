---
name: shadcn/ui
stage: 03-frontend
type: library
cost: free
conn_type: cli
status: active
added: 2026-06-27
source_url: https://github.com/shadcn-ui/ui
---

# shadcn/ui

**What it does:** Copy-paste React components built on Radix UI primitives and styled with Tailwind CSS.

**Stage / workflow:** Foundation layer of the UI — drop in accessible components (buttons, dialogs, forms) you own and customize directly in your codebase.

**Cost model:** Free and open source. Components are copied into your repo, no runtime dependency or license fee.

**Connection to Claude/n8n:** CLI generator. (Note: a shadcn MCP server is filed separately under 05.)

**Connection recipe:**
```bash
npx shadcn@latest init
npx shadcn@latest add button
```

**When to use it:** Whenever you need a clean, accessible component base you fully control rather than a black-box component library.

**Why it's useful:** Built for Next.js 15 + React + TypeScript + Tailwind; it is the canonical source for the shadcn/ui components in the stack.

**Notable alternatives:** Radix Themes, Park UI, NextUI/HeroUI.
