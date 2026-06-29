---
name: Rork
stage: 02-design-ui
type: app
domain: design-tool
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://rork.com
---

# Rork

**What it does:** AI mobile-app builder that turns natural-language prompts into working iOS/Android apps.

**Stage / workflow:** Prototype-to-app — generate a functional mobile app from a description.

**Cost model:** Freemium — free starter usage with paid plans for more builds/exports (verify current pricing).

**Connection to Claude/n8n:** Web app; primarily browser-based generation (no documented public API).

**Connection recipe:**
```bash
# Web app — sign up at https://rork.com
# No install / no public API unless noted.
```

**When to use it:** When you need a native mobile app prototype fast and the main web stack (Next.js) isn't the target.

**Why it's useful:** Covers the mobile-app gap alongside the Next.js 15 web app when a project needs an iOS/Android companion.

**Notable alternatives:** Rork builds on Expo/React Native concepts; alternatives: a0.dev, FlutterFlow, Expo + v0.
