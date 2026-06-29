---
name: pgvector
stage: 04-backend-database
type: library
cost: free
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/pgvector/pgvector
---

# pgvector

**What it does:** Postgres extension adding a `vector` type with similarity search (L2, cosine, inner product) and ANN indexes.

**Stage / workflow:** Backend — vector storage and similarity search inside your existing Postgres for RAG/embeddings.

**Cost model:** Free, open source (PostgreSQL license). Bundled with Supabase.

**Connection to Claude/n8n:** SQL extension in Supabase Postgres; query embeddings via `@supabase/supabase-js` or n8n Postgres node.

**Connection recipe:**
```sql
create extension vector;
-- create a table with a vector(1536) column; index with ivfflat/hnsw
```

**When to use it:** The default vector store choice — RAG with modest scale where you want zero new infrastructure.

**Why it's useful:** Already available in Supabase — embeddings live next to relational data, no extra service to host; EU residency.

**Notable alternatives:** Qdrant (better at scale + filtering — already in stack); Chroma (local dev); Weaviate (hybrid search).
