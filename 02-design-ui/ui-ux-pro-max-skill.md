---
name: nextlevelbuilder/ui-ux-pro-max-skill
stage: 02-design-ui
type: skill
cost: free
conn_type: skill
status: active
added: 2026-06-27
source_url: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
---

# nextlevelbuilder/ui-ux-pro-max-skill

**What it does:** A searchable design knowledge base — 84 UI styles, 161 palettes, 73 font pairings, 99 UX guidelines, and 25 chart types, backed by CSV + Python BM25 search. Requires Python 3.x.

**Stage / workflow:** Design & UI stage — Claude queries the dataset to pick styles, palettes, type pairings, and UX rules before building.

**Cost model:** Free, open-source skill.

**Connection to Claude/n8n:** Claude Code plugin/skill (plugin marketplace).

**Connection recipe:**
```bash
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
```

**When to use it:** When you need grounded design decisions (palette, fonts, chart type, UX patterns) instead of Claude improvising.

**Why it's useful:** Palette and font-pairing lookups feed directly into Tailwind theme config and shadcn/ui tokens for Next.js 15 projects.

**Notable alternatives:** anthropics/skills (theme-factory), taste-skill, impeccable.
