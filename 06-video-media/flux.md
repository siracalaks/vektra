---
name: Flux
stage: 06-video-media
type: library
cost: self-hostable
conn_type: api
status: active
added: 2026-06-27
source_url: https://github.com/black-forest-labs/flux
---

# Flux

**What it does:** State-of-the-art open-weight text-to-image model family from Black Forest Labs.

**Stage / workflow:** Image generation — produce product/source imagery to feed the image-to-video step.

**Cost model:** Self-hostable (open weights; check per-variant license). Free on your own GPU, or pay-per-call via hosted providers like fal.ai.

**Connection to Claude/n8n:** Run locally (ComfyUI/diffusers) or call via fal.ai's REST API from an n8n HTTP Request node.

**Connection recipe:**
```bash
git clone https://github.com/black-forest-labs/flux
cd flux
pip install -e ".[all]"
# or hosted: fal.subscribe("fal-ai/flux/dev", { input: { prompt } })
```

**When to use it:** When you want top-tier image quality with the option to self-host for zero per-image cost, or burst to fal.ai under load.

**Why it's useful:** Self-hostable on the Ollama-class GPU, loads cleanly into ComfyUI for n8n orchestration, and shares the existing fal.ai account as a hosted fallback.

**Notable alternatives:** Stable Diffusion 3.5 (open), Nano Banana Pro (hosted), Ideogram (hosted).
