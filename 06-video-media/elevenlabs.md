---
name: ElevenLabs
stage: 06-video-media
type: app
domain: voice
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://elevenlabs.io
---

# ElevenLabs

**What it does:** Best-in-class AI text-to-speech and voice cloning — natural, multilingual narration and custom voices.

**Stage / workflow:** Audio layer for video. Generate Turkish/English voiceover for 9:16 product clips, then mux over the fal.ai/Kling motion with ffmpeg.

**Cost model:** Freemium — free monthly character quota; paid tiers scale by characters and unlock instant/professional voice cloning.

**Connection to Claude/n8n:** Hosted REST API.

**Connection recipe:**
```bash
# Sign up at https://elevenlabs.io, get API key.
# In n8n: HTTP Request node -> POST text to the TTS REST API -> receive audio bytes -> save to Supabase Storage.
```

**When to use it:** Whenever a clip needs spoken narration or a consistent branded voice across many videos.

**Why it's useful:** Pure REST call orchestrated from self-hosted n8n; audio output drops straight into the ffmpeg/Remotion assembly step.

**Notable alternatives:** OpenAI TTS (hosted API), Coqui/XTTS (self-hostable open source), PlayHT (hosted).
