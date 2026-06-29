---
name: Seedance 2.0
stage: 06-video-media
type: reference
cost: freemium
conn_type: api
status: watch
added: 2026-06-27
source_url: https://seedance.com
---

# Seedance 2.0

**What it does:** Video generation that produces watermark-free social clips.

**Stage / workflow:** Video generation — alternative source for 9:16 social/product video without a watermark to crop out.

**Cost model:** Freemium. Marked `watch` — hosted free tiers shift quickly; confirm current limits before relying on it.

**Connection to Claude/n8n:** Hosted API/platform. Integrate via n8n HTTP Request once the endpoint and auth are confirmed.

**Connection recipe:**
```bash
# verify: confirm Seedance URL (https://seedance.com), API endpoint, auth, and free-tier limits
# no canonical install command — hosted service
```

**When to use it:** When you need clean, watermark-free output for direct social posting and want to diversify away from paid generation.

**Why it's useful:** API-driven and callable from n8n with Supabase output; watermark-free saves a post-processing crop step. Keep fal.ai as the stable fallback.

**Notable alternatives:** Hailuo/MiniMax (free credits), Veo 3.1 (Google), fal.ai/Kling (paid, reliable).
