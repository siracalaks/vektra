---
name: weaviate
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/weaviate/weaviate
---

# Weaviate

**What it does:** Open-source vector database with built-in hybrid (vector + keyword/BM25) search, modules, and GraphQL/REST APIs.

**Stage / workflow:** Backend — vector store for RAG where hybrid search and built-in vectorization matter.

**Cost model:** Self-hostable, open source (BSD). Free when self-hosted; managed cloud also available.

**Connection to Claude/n8n:** Self-hosted via Docker; REST/GraphQL clients; integrates into RAG pipelines.

**Connection recipe:**
```bash
docker run -d -p 8080:8080 cr.weaviate.io/semitechnologies/weaviate:latest
# production: deploy via Coolify (Docker Compose)
```

**When to use it:** When you specifically want hybrid (dense + sparse) retrieval out of the box rather than building it yourself.

**Why it's useful:** Self-hosts on Coolify; hybrid search is a differentiator over pgvector; EU data residency.

**Notable alternatives:** Qdrant (in-stack, strong filtering); pgvector (no new infra); Chroma (local dev).
