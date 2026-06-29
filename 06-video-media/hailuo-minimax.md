---
name: Hailuo / MiniMax
stage: 06-video-media
type: reference
cost: freemium
conn_type: api
status: watch
added: 2026-06-27
source_url: https://hailuoai.video
---

# Hailuo / MiniMax

**What it does:** Fast text/image-to-video generation with notably good fabric and clothing physics.

**Stage / workflow:** Video generation — a free-tier alternative or supplement to fal.ai/Kling for the 9:16 clips.

**Cost model:** Freemium with daily free credits. Marked `watch` — the free allowance dropped from effectively unlimited to roughly 3-5 generations/day, so quotas shift.

**Connection to Claude/n8n:** Hosted API. Submit a job and poll for the result via n8n HTTP Request nodes, then store output in Supabase.

**Connection recipe:**
```bash
# verify: confirm MiniMax/Hailuo video API endpoint, auth, and current daily credit limit
# no canonical install command — hosted service
```

**When to use it:** Clothing/fabric-heavy shots where its motion physics shine, and when you want to offset paid fal.ai usage with free daily credits.

**Why it's useful:** API-driven, orchestrated from n8n, output to Supabase; strong clothing physics suits the use case. Keep fal.ai as the reliable paid path.

**Notable alternatives:** fal.ai/Kling (paid, reliable), Seedance 2.0 (watermark-free), Veo 3.1 (Google free tier).
