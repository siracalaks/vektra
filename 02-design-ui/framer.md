---
name: Framer
stage: 02-design-ui
type: app
domain: design-tool
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://framer.com
---

# Framer

**What it does:** AI-assisted web design and no-code site builder with one-click publishing and hosting.

**Stage / workflow:** Design-to-launch — design responsive marketing sites and prototypes, then publish live.

**Cost model:** Freemium — free Framer site on a framer.website subdomain; paid plans add custom domains, more pages, and CMS.

**Connection to Claude/n8n:** Web app; Framer exposes plugin and fetch/data APIs for sites but no public design-generation API.

**Connection recipe:**
```bash
# Web app — sign up at https://framer.com
# No install / no public design API unless noted.
```

**When to use it:** When you need a polished marketing/landing site published fast without a full Next.js build.

**Why it's useful:** Good for quick standalone landing pages alongside the main Next.js 15 app; designs can inform shadcn/Tailwind layouts.

**Notable alternatives:** Webflow, Wix Studio, v0 + Vercel.
