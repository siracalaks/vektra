---
name: Veo 3.1
stage: 06-video-media
type: reference
cost: freemium
conn_type: api
status: watch
added: 2026-06-27
source_url: https://deepmind.google/models/veo/
---

# Veo 3.1

**What it does:** Google DeepMind's high-fidelity text/image-to-video model with synchronized audio.

**Stage / workflow:** Video generation — premium-quality alternative source for product/social clips.

**Cost model:** Freemium — free tier of roughly 3 generations/day (via Gemini app / AI Studio), paid via Vertex AI / Gemini API. Marked `watch` because free quotas change.

**Connection to Claude/n8n:** Gemini API / Vertex AI. Call from n8n HTTP Request nodes; verify current model id, quota, and pricing before wiring in.

**Connection recipe:**
```bash
# verify: confirm Veo model id, Gemini/Vertex API endpoint, auth, and current free-tier quota
# no canonical install command — hosted service
```

**When to use it:** When you need top-end visual quality or native audio and the small daily free quota covers your batch, or you're willing to pay via Vertex.

**Why it's useful:** API-driven, orchestrated from n8n, output to Supabase. Use the free tier opportunistically alongside paid fal.ai.

**Notable alternatives:** fal.ai/Kling (paid, reliable), Hailuo/MiniMax (free credits), Seedance 2.0 (watermark-free).
