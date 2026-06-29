---
name: chroma
stage: 04-backend-database
type: library
cost: free
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/chroma-core/chroma
---

# Chroma

**What it does:** Open-source, developer-friendly vector database focused on simple embedding storage and retrieval for AI apps.

**Stage / workflow:** Backend — lightweight vector store, ideal for local development and prototyping RAG.

**Cost model:** Free, open source (Apache 2.0).

**Connection to Claude/n8n:** Python/JS client; runs embedded or as a server; integrates into RAG pipelines.

**Connection recipe:**
```bash
pip install chromadb
# or run the server: docker run -d -p 8000:8000 chromadb/chroma
```

**When to use it:** Local development and quick RAG prototypes where setup speed beats production-scale features.

**Why it's useful:** Fast to spin up for prototyping; can self-host on Coolify, though for production he'd promote to Qdrant or pgvector.

**Notable alternatives:** pgvector (in-stack, no new infra); Qdrant (production scale + filtering); Weaviate (hybrid search).
