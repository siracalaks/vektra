---
name: anthropics/skills
stage: 02-design-ui
type: skill
cost: free
conn_type: skill
status: active
added: 2026-06-27
source_url: https://github.com/anthropics/skills
---

# anthropics/skills

**What it does:** Official Anthropic skills for design and frontend work (frontend-design, algorithmic-art, canvas-design, theme-factory, web-artifacts-builder, brand-guidelines, skill-creator).

**Stage / workflow:** Design & UI stage — frontend-design produces distinctive, production-grade frontend output and avoids generic AI aesthetics; theme-factory and brand-guidelines drive consistent visual systems.

**Cost model:** Free, official open-source skills from Anthropic.

**Connection to Claude/n8n:** Claude Code skill, installed directly into the agent.

**Connection recipe:**
```bash
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

**When to use it:** When you want Claude to generate polished, non-generic UI and design artifacts that look hand-crafted rather than AI-templated.

**Why it's useful:** frontend-design + theme-factory pair cleanly with Next.js 15 + shadcn/ui + Tailwind to keep generated components on-brand and production-grade.

**Notable alternatives:** vercel-labs/agent-skills (frontend-design), impeccable, taste-skill.
