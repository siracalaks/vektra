---
name: DESIGN.md
stage: 02-design-ui
type: reference
domain: design-tool
cost: free
conn_type: reference
status: active
added: 2026-06-27
source_url: https://designmd.ai
---

# DESIGN.md

**What it does:** Open-source markdown spec for describing a design system (tokens, components, rules) to AI coding agents.

**Stage / workflow:** Design-to-code contract — a single file that tells AI agents how your UI should look and behave.

**Cost model:** Free and open-source specification.

**Connection to Claude/n8n:** Reference format; feed a DESIGN.md to Claude or coding agents (e.g. Stitch supports DESIGN.md import).

**Connection recipe:**
```bash
# Browse / reference the spec: https://designmd.ai
# Author a DESIGN.md in your repo and pass it to AI agents (e.g. Stitch's
# create_design_system_from_design_md / upload_design_md).
```

**When to use it:** When you want consistent, repeatable UI output from AI agents grounded in one shared design spec.

**Why it's useful:** A DESIGN.md can encode the shadcn/Tailwind tokens and conventions so Claude and Stitch generate on-brand Next.js 15 UI.

**Notable alternatives:** Design tokens (W3C), Storybook docs, Figma variables export.
