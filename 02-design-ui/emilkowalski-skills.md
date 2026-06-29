---
name: emilkowalski/skill
stage: 02-design-ui
type: skill
cost: free
conn_type: skill
status: active
added: 2026-06-27
source_url: https://github.com/emilkowalski/skill
---

# emilkowalski/skill

**What it does:** "Skills for Design Engineers" — focused on animation and design taste, authored by the creator of Sonner and Vaul.

**Stage / workflow:** Design & UI stage — sharpens motion, micro-interactions, and design-taste judgement during component building.

**Cost model:** Free, open-source skill.

**Connection to Claude/n8n:** Claude Code skill (agent-targeted install).

**Connection recipe:**
```bash
npx skills add emilkowalski/skill --agent claude-code
```

**When to use it:** When building animated, high-polish UI (toasts, drawers, transitions) and you want Claude to apply real design-engineer taste rather than defaults.

**Why it's useful:** Sonner/Vaul-style patterns drop straight into a Next.js 15 + shadcn/ui app, improving motion quality of generated components.

**Notable alternatives:** anthropics/skills (frontend-design), impeccable, taste-skill.
