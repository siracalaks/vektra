---
name: Captions
stage: 06-video-media
type: app
domain: video
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://captions.ai
---

# Captions

**What it does:** AI video captioning and editing plus AI creators — auto-subtitles, eye-contact correction, dubbing, and synthetic spokespeople.

**Stage / workflow:** Post-production + avatar. Auto-caption 9:16 clips and/or generate AI-creator UGC variants.

**Cost model:** Freemium — limited free use/watermark; paid tiers by credits and feature access. API offered for the AI-creator/generation features.

**Connection to Claude/n8n:** Hosted REST API (for the creator/generation product); the editor itself is app-based.

**Connection recipe:**
```bash
# Sign up at https://captions.ai, get API key (API covers AI-creator/generation features).
# In n8n: HTTP Request node -> POST script/parameters to the REST API -> poll -> fetch video.
# Manual editing/captioning is done in the app UI.
```

**When to use it:** Fast auto-captions and engaging UGC-style AI-creator clips for vertical social video.

**Why it's useful:** The generation API is callable from self-hosted n8n; output MP4 fits the 9:16 assembly.

**Notable alternatives:** CapCut (free auto-subtitles), Submagic (caption-focused), HeyGen (AI avatars).
