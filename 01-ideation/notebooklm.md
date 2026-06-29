---
name: NotebookLM
stage: 01-ideation
type: reference
domain: research
cost: free
conn_type: reference
status: active
added: 2026-06-27
source_url: https://notebooklm.google.com
---

# NotebookLM

**What it does:** Google AI research notebook that grounds answers in your uploaded sources, supports Q&A over them, and generates audio overviews ("podcast" summaries).

**Stage / workflow:** Ideation/synthesis — dump docs, PDFs, and links into a notebook and interrogate them, then turn the synthesis into notes or an audio briefing.

**Cost model:** Free (Google account). A paid Plus tier exists with higher limits, but core use is free. No public API.

**Connection to Claude/n8n:** Reference only — no official public API. Use the web app directly; outputs are copied/exported manually.

**Connection recipe:**
```bash
# Open https://notebooklm.google.com with a Google account.
# Upload sources (PDFs, docs, URLs), ask questions, generate an audio overview.
# No public API: there is no n8n/MCP integration -- use it as a manual research tool.
```

**When to use it:** When you have a pile of your own sources and want grounded Q&A plus a quick audio recap, without writing any code.

**Why it's useful:** It is a standalone research aid that complements the stack — useful for synthesis even though it stays outside n8n/Supabase automation.

**Notable alternatives:** Perplexity (web-grounded search), self-hosted RAG over Supabase + Claude, Elicit for academic sources.
