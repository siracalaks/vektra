---
name: CapCut
stage: 06-video-media
type: app
domain: video
cost: free
conn_type: reference
status: active
added: 2026-06-27
source_url: https://capcut.com
---

# CapCut

**What it does:** Popular video editor (mobile/desktop/web) with AI effects, auto-subtitles, templates, and background removal.

**Stage / workflow:** Manual post-production/finishing. Polish or template-ize a 9:16 clip, add captions and transitions before publishing.

**Cost model:** Free with a generous feature set; CapCut Pro subscription unlocks premium effects/assets.

**Connection to Claude/n8n:** Reference — no public automation API. Editing is done in the app/web UI.

**Connection recipe:**
```bash
# Web/app tool — no public API; edit and export manually via the UI.
# Bring the exported MP4 back into the pipeline (e.g. Supabase) by hand.
```

**When to use it:** Quick manual finishing, captions, or template-based edits when automation isn't required.

**Why it's useful:** Useful for hands-on touch-ups, but it sits outside the automated n8n flow as a manual step.

**Notable alternatives:** Clipchamp (web editor), Edits/Instagram (mobile), Remotion (programmatic, in-stack).
