---
name: Stable Diffusion
stage: 06-video-media
type: library
domain: image
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/Stability-AI/stablediffusion
---

# Stable Diffusion

**What it does:** Open-source text-to-image (and image-to-image) diffusion model — runs on your own GPU; the de-facto base for the open image-gen ecosystem.

**Stage / workflow:** Self-hosted image creation/upstream. Generate or edit product/background stills locally; the output still feeds the fal.ai/Kling 9:16 image-to-video step. Pairs with ComfyUI as the node-based front end.

**Cost model:** Free / self-hostable (open weights; check model license for commercial use). Zero per-image API cost on your own GPU.

**Connection to Claude/n8n:** Self-host. Drive it through ComfyUI's API or a local server, called from an n8n HTTP Request / Execute Command node.

**Connection recipe:**
```bash
git clone https://github.com/Stability-AI/stablediffusion
# In practice, run via ComfyUI or AUTOMATIC1111 for a usable API/UI:
#   git clone https://github.com/comfyanonymous/ComfyUI
# Then call the local ComfyUI API from n8n (HTTP Request node).
```

**When to use it:** Want full control, no per-image cost, and custom models/LoRAs/ControlNet on your own hardware.

**Why it's useful:** Runs locally on the same self-host GPU class as Ollama; ComfyUI exposes an API n8n can drive; output stills feed the image-to-video pipeline at zero marginal cost.

**Notable alternatives:** Flux (in-stack), ComfyUI (in-stack front end), Midjourney (hosted, higher aesthetic).
