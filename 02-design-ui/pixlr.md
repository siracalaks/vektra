---
name: Pixlr
stage: 02-design-ui
type: app
domain: design-tool
cost: freemium
conn_type: web-app
status: active
added: 2026-06-27
source_url: https://pixlr.com
---

# Pixlr

**What it does:** Online AI photo editor with background removal, generative fill, and filters.

**Stage / workflow:** Asset editing — quick AI-assisted image cleanup and generation in the browser.

**Cost model:** Freemium — free with limits; paid plans for AI credits and premium features.

**Connection to Claude/n8n:** Web app; Pixlr offers an image API for some operations (verify current API scope).

**Connection recipe:**
```bash
# Web app — sign up at https://pixlr.com
# A Pixlr API exists for certain operations — check https://pixlr.com for current docs.
```

**When to use it:** When you need fast AI photo edits (remove background, fill, filter) without heavy tooling.

**Why it's useful:** Handles quick image prep for UI assets and marketing imagery used in the Next.js 15 app.

**Notable alternatives:** Photopea, remove.bg, Canva.
