---
name: Krea AI
stage: 06-video-media
type: app
domain: image
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://krea.ai
---

# Krea AI

**What it does:** Real-time AI image/video/3D generation and editing — fast iterative canvas, upscaling, and enhancement across many models.

**Stage / workflow:** Image creation/editing upstream. Quickly iterate product stills or enhance/upscale them before the fal.ai/Kling 9:16 image-to-video step.

**Cost model:** Freemium — limited free generations; paid plans for more compute, higher res, and faster queues. API available.

**Connection to Claude/n8n:** Hosted REST API.

**Connection recipe:**
```bash
# Sign up at https://krea.ai, get API key.
# In n8n: HTTP Request node -> POST prompt/image to the REST API -> poll -> fetch result -> store in Supabase.
```

**When to use it:** Fast, interactive image generation/enhancement or upscaling, with an API path to automate later.

**Why it's useful:** REST call from self-hosted n8n; enhanced stills feed the image-to-video flow.

**Notable alternatives:** Playground AI (API), Flux (in-stack), Stable Diffusion (self-host).
