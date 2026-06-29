---
name: Magic UI
stage: 03-frontend
type: library
cost: free
conn_type: cli
status: active
added: 2026-06-27
source_url: https://github.com/magicuidesign/magicui
---

# Magic UI

**What it does:** Library of animated marketing and landing-page components, distributed as a shadcn-compatible registry.

**Stage / workflow:** Marketing/landing UI polish — hero sections, marquees, animated backgrounds and effects layered on top of your shadcn base.

**Cost model:** Free and open source.

**Connection to Claude/n8n:** CLI generator via the shadcn registry.

**Connection recipe:**
```bash
npx shadcn@latest add "https://magicui.design/r/marquee.json"
# verify exact registry URL per component
```

**When to use it:** When building a landing or marketing page that needs eye-catching motion without hand-writing animations.

**Why it's useful:** Installs through the same shadcn CLI/registry flow, so it drops directly into Next.js + Tailwind + shadcn/ui.

**Notable alternatives:** Aceternity UI, React Bits, Motion Primitives.
