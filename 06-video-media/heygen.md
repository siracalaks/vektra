---
name: HeyGen
stage: 06-video-media
type: app
domain: avatar
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://heygen.com
---

# HeyGen

**What it does:** AI avatar / talking-head video from text — synthetic presenters that lip-sync a script in many languages.

**Stage / workflow:** Avatar-led video. Generate a spokesperson clip to intro or narrate a product, optionally cut into the 9:16 vertical flow.

**Cost model:** Freemium — limited free credits/watermarked output; paid tiers unlock minutes, custom avatars, and API access.

**Connection to Claude/n8n:** Hosted REST API.

**Connection recipe:**
```bash
# Sign up at https://heygen.com, get API key.
# In n8n: HTTP Request node -> POST script + avatar/voice to the REST API -> poll for render -> fetch MP4.
```

**When to use it:** Need a talking presenter without filming a person; explainer or UGC-style spokesperson content.

**Why it's useful:** REST call from self-hosted n8n returns an MP4 that drops into the ffmpeg/Remotion assembly.

**Notable alternatives:** Synthesia (presenter avatars), D-ID (talking portraits), Captions AI (AI creators).
