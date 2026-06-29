---
name: Clipchamp
stage: 06-video-media
type: app
domain: video
cost: freemium
conn_type: reference
status: active
added: 2026-06-27
source_url: https://clipchamp.com
---

# Clipchamp

**What it does:** Microsoft's free web-based video editor with templates, stock assets, auto-captions, and text-to-speech.

**Stage / workflow:** Manual post-production/finishing. Template-based edits and captions for 9:16 clips, in-browser.

**Cost model:** Freemium — free editing/export; premium plan (and Microsoft 365) unlocks higher-res export, stock, and brand kit.

**Connection to Claude/n8n:** Reference — no public automation API. Browser app, manual editing.

**Connection recipe:**
```bash
# Web app — no public API; edit and export manually via the browser UI.
# Re-import the exported MP4 into the pipeline (e.g. Supabase) by hand.
```

**When to use it:** Free, no-install web editing with templates when you don't need automation.

**Why it's useful:** Convenient manual finishing tool; sits outside the n8n automation as a UI step.

**Notable alternatives:** CapCut (free editor), Edits/Instagram (mobile), Remotion (programmatic, in-stack).
