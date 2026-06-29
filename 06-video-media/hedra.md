---
name: Hedra
stage: 06-video-media
type: reference
cost: freemium
conn_type: api
status: watch
added: 2026-06-27
source_url: https://www.hedra.com
---

# Hedra

**What it does:** Avatar / talking-head video generation — drive a character image with audio to produce a lip-synced presenter.

**Stage / workflow:** Video generation — add a spokesperson/UGC-style talking head for product promos or voiceover segments.

**Cost model:** Freemium with a free tier. Marked `watch` — hosted credits/limits shift quickly. A HeyGen alternative.

**Connection to Claude/n8n:** Hosted API. Pair with Whisper/TTS audio, submit via n8n HTTP Request, poll for the result, store in Supabase.

**Connection recipe:**
```bash
# verify: confirm Hedra API endpoint, auth, and current free-tier credit limits
# no canonical install command — hosted service
```

**When to use it:** When a clip needs a talking presenter or UGC-style avatar rather than pure product motion.

**Why it's useful:** API-driven and callable from n8n; audio can come from local Whisper/TTS on the GPU box; output to Supabase.

**Notable alternatives:** HeyGen (hosted), D-ID (hosted), SadTalker (self-host).
