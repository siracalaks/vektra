---
name: impeccable
stage: 02-design-ui
type: skill
cost: free
conn_type: skill
status: active
added: 2026-06-27
source_url: https://github.com/pbakaus/impeccable
---

# impeccable

**What it does:** A design-language layer that makes your AI harness better at design — 23 commands, live browser iteration, and 44 detector rules. Requires Node 24+.

**Stage / workflow:** Design & UI stage — drives iterative, browser-in-the-loop refinement of UI with automated design-rule detection.

**Cost model:** Free, open-source.

**Connection to Claude/n8n:** Claude Code plugin/skill (plugin marketplace + init command).

**Connection recipe:**
```bash
/plugin marketplace add pbakaus/impeccable
/impeccable init
# or: npx impeccable install
```

**When to use it:** When you want Claude to iterate on a live UI in the browser and catch design issues automatically via the detector rules.

**Why it's useful:** Live browser iteration pairs well with a Next.js 15 dev server, enforcing design quality on shadcn/ui + Tailwind output.

**Notable alternatives:** taste-skill, ui-ux-pro-max-skill, anthropics/skills (frontend-design).
