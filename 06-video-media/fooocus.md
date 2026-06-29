---
name: Fooocus
stage: 06-video-media
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/lllyasviel/Fooocus
---

# Fooocus

**What it does:** Local Stable Diffusion image generation with a deliberately simple, prompt-first UI (Midjourney-like defaults).

**Stage / workflow:** Image generation — quick, good-looking product/source stills without tuning dozens of parameters.

**Cost model:** Self-hostable, open source. Free apart from your own GPU.

**Connection to Claude/n8n:** Primarily a Gradio web UI; has an API extension. For headless n8n use, ComfyUI is the cleaner API path, but Fooocus is ideal for manual/ad-hoc generation.

**Connection recipe:**
```bash
git clone https://github.com/lllyasviel/Fooocus
cd Fooocus
pip install -r requirements_versions.txt
python entry_with_update.py --listen
```

**When to use it:** Fast manual image generation when you want quality defaults and minimal knobs — good for prototyping a product look before batching in ComfyUI.

**Why it's useful:** Runs on the same GPU box and can be deployed on Coolify; complements ComfyUI for the API-driven batch path.

**Notable alternatives:** ComfyUI (node graph, API), Automatic1111 (full control), InvokeAI (polished UI).
