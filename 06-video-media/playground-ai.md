---
name: Playground AI
stage: 06-video-media
type: app
domain: image
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://playground.com
---

# Playground AI

**What it does:** Text-to-image generation and editing — graphics, social posts, and product imagery with templates and editing tools.

**Stage / workflow:** Image creation/editing upstream. Produce or edit product/marketing stills that can seed the fal.ai/Kling 9:16 image-to-video step.

**Cost model:** Freemium — free daily generations; paid tiers for more images and commercial features. API available.

**Connection to Claude/n8n:** Hosted REST API.

**Connection recipe:**
```bash
# Sign up at https://playground.com, get API key.
# In n8n: HTTP Request node -> POST prompt to the REST API -> fetch generated image -> store in Supabase.
```

**When to use it:** Marketing-oriented image generation/editing with an API for automation.

**Why it's useful:** REST call from self-hosted n8n; output stills feed the image-to-video flow.

**Notable alternatives:** Krea AI (real-time, API), Flux (in-stack), Midjourney (hosted, no API).
