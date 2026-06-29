---
name: vercel-labs/agent-skills
stage: 02-design-ui
type: skill
cost: free
conn_type: skill
status: active
added: 2026-06-27
source_url: https://github.com/vercel-labs/agent-skills
---

# vercel-labs/agent-skills

**What it does:** Vercel's agent skills — react-best-practices (57 rules), web-interface-guidelines (100+ a11y/perf/UX rules), vercel-audit, frontend-design, and skill-creator.

**Stage / workflow:** Design & UI plus frontend engineering — enforces React/Next.js best practices and accessibility/performance guidelines during build.

**Cost model:** Free, open-source skills from Vercel Labs.

**Connection to Claude/n8n:** Claude Code skill.

**Connection recipe:**
```bash
npx skills add vercel-labs/agent-skills --skill react-best-practices
```

**When to use it:** When building Next.js/React UI and you want Claude to follow Vercel's official React, accessibility, and performance guidance.

**Why it's useful:** Directly targets Next.js 15 + React; react-best-practices and web-interface-guidelines keep generated shadcn/ui components correct and accessible.

**Notable alternatives:** anthropics/skills (frontend-design), impeccable, ui-ux-pro-max-skill.
