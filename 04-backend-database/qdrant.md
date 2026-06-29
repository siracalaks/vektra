---
name: qdrant
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/qdrant/qdrant
---

# Qdrant

**What it does:** High-performance, open-source vector database (Rust) with advanced payload filtering, quantization, and HNSW indexing.

**Stage / workflow:** Backend — dedicated vector store for RAG and semantic search at scale.

**Cost model:** Self-hostable, open source (Apache 2.0). Free when self-hosted; managed cloud also available.

**Connection to Claude/n8n:** Self-hosted via Docker; REST/gRPC API and a native n8n Qdrant node.

**Connection recipe:**
```bash
docker run -d -p 6333:6333 qdrant/qdrant
# production: deploy via Coolify (Docker)
```

**When to use it:** When vector workloads outgrow pgvector — large collections, heavy metadata filtering, or high query throughput.

**Why it's useful:** Already running on his Coolify VPS; native n8n node; EU data residency; scales beyond pgvector.

**Notable alternatives:** pgvector (zero new infra — default for small scale); Weaviate (hybrid search built in); Chroma (local dev).
