---
name: Midjourney
stage: 06-video-media
type: app
domain: image
cost: paid
conn_type: reference
status: active
added: 2026-06-27
source_url: https://midjourney.com
---

# Midjourney

**What it does:** Top-tier text-to-image generation — highly aesthetic, stylized imagery via Discord and the web app.

**Stage / workflow:** Image creation/upstream. Generate hero or background imagery; a Midjourney still can become the start frame for the fal.ai/Kling 9:16 image-to-video step.

**Cost model:** Paid — subscription tiers (Basic/Standard/Pro/Mega); no free tier.

**Connection to Claude/n8n:** Reference — no official public API (Discord/web only). Generate in the UI, export images manually.

**Connection recipe:**
```bash
# Web/Discord tool — no official public API; generate and download images via the UI.
# Feed the exported still into the image-to-video step (fal.ai/Kling) as the start image.
```

**When to use it:** Best aesthetic quality for stylized/branded imagery where API automation isn't required.

**Why it's useful:** Output is a still image that becomes the start frame of the existing image-to-video flow, though generation stays a manual UI step.

**Notable alternatives:** Stable Diffusion (self-hostable open source), Flux (in-stack), Krea/Playground (API).
