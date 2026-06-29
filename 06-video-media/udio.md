---
name: Udio
stage: 06-video-media
type: app
domain: voice
cost: freemium
conn_type: reference
status: active
added: 2026-06-27
source_url: https://udio.com
---

# Udio

**What it does:** AI music generation with fine style and voice control — produces songs from text prompts with editable sections.

**Stage / workflow:** Audio/background-music layer. Alternative to Suno for original background tracks behind 9:16 clips.

**Cost model:** Freemium — free monthly credits; paid tiers add credits and broader usage rights.

**Connection to Claude/n8n:** Reference — no official public API. Generate and download via the web UI, then bring audio into the pipeline manually.

**Connection recipe:**
```bash
# Web/app tool — no public API; generate and download tracks via the UI.
# Import the exported audio into the ffmpeg/Remotion mux step manually.
```

**When to use it:** Want more granular control over musical style/voice than a one-shot generator, for branded audio.

**Why it's useful:** Produces a standard audio file that drops into the existing ffmpeg step; manual UI step, no infra.

**Notable alternatives:** Suno (similar), Stable Audio (API), MusicGen (self-hostable open source).
