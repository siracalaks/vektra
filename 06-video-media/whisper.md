---
name: Whisper
stage: 06-video-media
type: library
cost: free
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/openai/whisper
---

# Whisper

**What it does:** Open-source automatic speech recognition — transcribe and translate audio/voice to text.

**Stage / workflow:** Post-production — generate captions/subtitles for clips, or transcribe voiceover/reference audio in the editing stage.

**Cost model:** Free, open source (MIT). Self-hosted on your own GPU; no per-minute API cost.

**Connection to Claude/n8n:** Python CLI/library. Run from an n8n Execute Command node against an audio file; for speed, faster-whisper is a drop-in CTranslate2 backend.

**Connection recipe:**
```bash
pip install -U openai-whisper
whisper input.mp3 --model medium --output_format srt
```

**When to use it:** Auto-captioning vertical clips for accessibility/engagement, or transcribing audio for downstream text processing.

**Why it's useful:** Runs locally on the Ollama-class GPU infra at zero marginal cost, scriptable from n8n, outputs SRT/VTT to pair with Remotion or ffmpeg.

**Notable alternatives:** faster-whisper (speed), WhisperX (alignment/diarization), Deepgram (hosted API).
