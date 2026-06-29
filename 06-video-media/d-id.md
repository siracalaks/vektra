---
name: D-ID
stage: 06-video-media
type: app
domain: avatar
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://d-id.com
---

# D-ID

**What it does:** Digital humans / talking avatars — animates a still portrait to speak a script or audio track with lip-sync.

**Stage / workflow:** Avatar-led video. Turn a single product-model or brand portrait into a talking spokesperson clip for the 9:16 flow.

**Cost model:** Freemium — trial credits; paid tiers priced by credits/minutes, with a developer API.

**Connection to Claude/n8n:** Hosted REST API.

**Connection recipe:**
```bash
# Sign up at https://d-id.com, get API key.
# In n8n: HTTP Request node -> POST source image + script/audio to the REST API -> poll -> fetch talking video.
```

**When to use it:** Animate a single still image into a talking face cheaply, without a full avatar studio.

**Why it's useful:** REST call from self-hosted n8n; takes one image (a natural fit with your image-first pipeline) and returns an MP4.

**Notable alternatives:** HeyGen (full avatars), Synthesia (presenters), SadTalker (self-hostable open source).
