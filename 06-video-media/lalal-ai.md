---
name: LALAL.AI
stage: 06-video-media
type: app
domain: voice
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://lalal.ai
---

# LALAL.AI

**What it does:** AI stem separation — splits audio into vocals, instrumental, drums, bass, and other tracks; also vocal/noise removal.

**Stage / workflow:** Audio cleanup. Isolate or remove vocals from a reference track, or extract a clean instrumental to use under 9:16 clips.

**Cost model:** Freemium — free minutes to try; paid packs/subscriptions sold by processing minutes.

**Connection to Claude/n8n:** Hosted REST API.

**Connection recipe:**
```bash
# Sign up at https://lalal.ai, get API key.
# In n8n: HTTP Request node -> upload audio to the REST API -> poll for the separated stems -> store in Supabase.
```

**When to use it:** Need a clean instrumental or isolated vocal from an existing track for background audio.

**Why it's useful:** REST call from self-hosted n8n; separated stems feed the ffmpeg mux step.

**Notable alternatives:** Demucs (self-hostable open source, Meta), Spleeter (open source), Moises (hosted app).
