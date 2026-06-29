---
name: ComfyUI
stage: 06-video-media
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/comfyanonymous/ComfyUI
---

# ComfyUI

**What it does:** Node-based graph UI for local image and video generation — wire up Stable Diffusion, Flux, and video models into custom pipelines.

**Stage / workflow:** Self-hosted generation core. Run image and image-to-video workflows on your own GPU, fully offline, as a free alternative to hosted APIs.

**Cost model:** Self-hostable, open source (GPL). Free apart from your own GPU/electricity.

**Connection to Claude/n8n:** Exposes a REST/WebSocket API. Trigger saved workflows from n8n via HTTP Request (queue prompt → poll history → fetch output image/video).

**Connection recipe:**
```bash
git clone https://github.com/comfyanonymous/ComfyUI
cd ComfyUI
pip install -r requirements.txt
python main.py --listen
# API: POST /prompt with a workflow JSON, then GET /history/<id>
```

**When to use it:** When you want full control and zero per-clip cost — batch product image generation and local image-to-video on your existing GPU.

**Why it's useful:** Runs on the same Ollama-class GPU box, deployable on Coolify, and its HTTP API slots directly into n8n orchestration with Supabase output.

**Notable alternatives:** Automatic1111 (web UI), Fooocus (simpler), InvokeAI (polished UI).
