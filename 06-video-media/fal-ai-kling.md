---
name: fal.ai — Kling image-to-video
stage: 06-video-media
type: library
cost: paid
conn_type: api
status: active
added: 2026-06-27
source_url: https://fal.ai
---

# fal.ai — Kling image-to-video

**What it does:** Hosted image-to-video generation (Kling models) — turns a product photo into short motion clips.

**Stage / workflow:** Video/media generation. Core of the clothing pipeline (9:16 vertical).

**Cost model:** Paid (per-generation). No free self-host; this is the API provider you already use.

**Connection to Claude/n8n:** REST API. In n8n use an HTTP Request node (submit → poll status → fetch result), then stitch with an ffmpeg step and deliver via Supabase Storage.

**Connection recipe:**
```js
// JS client
import { fal } from "@fal-ai/client";
const result = await fal.subscribe("fal-ai/kling-video/v2.6/pro/image-to-video", {
  input: {
    prompt: "model turns slowly, fabric flows, studio light",
    start_image_url: "<product_photo_url>",
    aspect_ratio: "9:16",
    duration: "5"
  }
});
// n8n: HTTP POST to the queue endpoint, then poll the status URL until completed.
```

**When to use it:** Any image→video step for clothing / e-commerce sellers; default 9:16.

**Why it's useful:** Already the chosen provider; orchestrated from self-hosted n8n; output stored in Supabase.

**Notable alternatives (free):** Hailuo/MiniMax (daily free credits, good fabric physics), Seedance 2.0 (watermark-free), ComfyUI (self-host on own GPU). Note: OpenAI Sora discontinued (web/app Apr 2026, API Sep 2026) — do not anchor on it.
