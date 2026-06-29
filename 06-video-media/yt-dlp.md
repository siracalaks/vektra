---
name: yt-dlp
stage: 06-video-media
type: library
cost: free
conn_type: cli
status: active
added: 2026-06-27
source_url: https://github.com/yt-dlp/yt-dlp
---

# yt-dlp

**What it does:** Download and ingest video/audio from thousands of sites, with format selection and post-processing.

**Stage / workflow:** Media ingest — pull reference footage, competitor clips, or audio tracks into the pipeline before generation/editing.

**Cost model:** Free, open source (Unlicense). No accounts or quotas.

**Connection to Claude/n8n:** CLI binary. Call from an n8n Execute Command node, capture the file, and push to Supabase Storage.

**Connection recipe:**
```bash
pip install -U yt-dlp
# or download the standalone binary from the releases page
yt-dlp -f "bv*+ba/b" -o "%(id)s.%(ext)s" "<url>"
```

**When to use it:** Whenever you need to fetch source media or audio for reuse, reference, or remixing in the editing stage.

**Why it's useful:** Single self-hosted binary, scriptable from n8n, zero external dependencies or cost.

**Notable alternatives:** gallery-dl (images), youtube-dl (original, slower), ffmpeg (direct stream capture).
