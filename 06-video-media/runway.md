---
name: Runway ML
stage: 06-video-media
type: app
domain: video
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://runwayml.com
---

# Runway ML

**What it does:** AI video generation and editing — text/image-to-video (Gen models) plus tools like inpainting, motion brush, and green-screen.

**Stage / workflow:** Core image-to-video generation. A direct alternative to fal.ai/Kling for turning a product photo into a 9:16 motion clip.

**Cost model:** Freemium — limited free credits; paid tiers by credits/seats. Developer API available.

**Connection to Claude/n8n:** Hosted REST API.

**Connection recipe:**
```bash
# Sign up at https://runwayml.com, get API key.
# In n8n: HTTP Request node -> POST prompt + start image to the REST API -> poll task -> fetch video.
```

**When to use it:** Image-to-video when you want Runway's motion quality/editing tools, or as a fallback to Kling.

**Why it's useful:** REST call from self-hosted n8n; image-to-video output drops into the existing 9:16 assembly, same pattern as fal.ai.

**Notable alternatives:** fal.ai/Kling (current provider), Veo (Google), Hailuo/MiniMax (free credits).
