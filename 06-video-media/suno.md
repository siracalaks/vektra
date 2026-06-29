---
name: Suno
stage: 06-video-media
type: app
domain: voice
cost: freemium
conn_type: reference
status: active
added: 2026-06-27
source_url: https://suno.com
---

# Suno

**What it does:** AI music generation from text prompts — full songs with vocals, instrumentation, and structure.

**Stage / workflow:** Audio/background-music layer. Generate royalty-free background tracks or jingles for 9:16 clips, then mux under the video.

**Cost model:** Freemium — free daily credits with non-commercial terms; paid plans add monthly credits and commercial-use rights.

**Connection to Claude/n8n:** Reference — no official public API. Use via the web/app UI; export the audio and bring it into the pipeline manually.

**Connection recipe:**
```bash
# Web/app tool — no public API; generate and download tracks via the UI.
# Pull the exported MP3/WAV into n8n's ffmpeg/Remotion mux step manually.
```

**When to use it:** Need a quick, original background track or jingle without licensing a stock library.

**Why it's useful:** Output is a plain audio file that slots into the existing ffmpeg assembly; no infra needed, but it stays a manual UI step.

**Notable alternatives:** Udio (similar generator), Stable Audio (Stability, API), MusicGen (Meta, self-hostable open source).
