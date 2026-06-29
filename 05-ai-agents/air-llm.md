---
name: AirLLM
stage: 05-ai-agents
type: library
domain: automation
cost: free
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/lyogavin/airllm
---

# AirLLM

**What it does:** Open-source inference runtime that runs very large LLMs (up to 70B) on a single 4GB GPU via layered/sequential inference, without quantization or pruning.

**Stage / workflow:** Agent backend/self-hosting — serve big models locally for agents when GPU memory is the bottleneck.

**Cost model:** Free, open source (Apache-2.0). You pay only for your own hardware/compute.

**Connection to Claude/n8n:** Self-host. Python library you wrap in your own service/endpoint, then call from n8n via HTTP. No managed API.

**Connection recipe:**
```bash
pip install airllm
# Then in Python:
#   from airllm import AutoModel
#   model = AutoModel.from_pretrained("model-name")
# Wrap generation in your own HTTP service to call it from n8n.
```

**When to use it:** When you want to run a large model on modest hardware (4GB GPU) and can trade speed for the ability to fit the model at all.

**Why it's useful:** Self-hostable on Coolify as a Python inference service, exposing an endpoint that n8n workflows and agents can hit without paid API costs.

**Notable alternatives:** Ollama (easy local serving, quantized), llama.cpp (CPU/GPU, GGUF), vLLM (high-throughput GPU serving).
