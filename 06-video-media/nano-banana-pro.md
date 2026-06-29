---
name: Nano Banana Pro
stage: 06-video-media
type: reference
cost: freemium
conn_type: api
status: watch
added: 2026-06-27
source_url: https://hailuoai.video
---

# Nano Banana Pro

**What it does:** High-quality image generation (up to 4K), accessible via the Hailuo platform.

**Stage / workflow:** Image generation — produce or upscale product/source stills before the image-to-video step.

**Cost model:** Freemium — free tier available, but hosted limits shift frequently. Marked `watch` because free quotas change fast.

**Connection to Claude/n8n:** Hosted API/platform. Integrate via HTTP Request from n8n; verify the current endpoint and auth before wiring in.

**Connection recipe:**
```bash
# verify: confirm Hailuo/Nano Banana Pro API endpoint, auth, and free-tier limits
# no canonical install command — hosted service
```

**When to use it:** When you need a free, high-resolution (4K) image source and can tolerate changing quotas.

**Why it's useful:** API-driven, so callable from n8n; output stored in Supabase. Keep a self-host fallback (ComfyUI/Flux) for stability.

**Notable alternatives:** Flux (self-host), Fooocus (local), Ideogram (hosted).
