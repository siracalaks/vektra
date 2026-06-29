---
name: supabase-storage
stage: 04-backend-database
type: library
cost: self-hostable
conn_type: api
status: active
added: 2026-06-27
source_url: https://supabase.com/docs/guides/storage
---

# Supabase Storage

**What it does:** S3-compatible object storage with image transforms, CDN, and Row Level Security tied to Supabase Auth.

**Stage / workflow:** Backend — default file/object storage for uploads, assets, and media in the stack.

**Cost model:** Self-hostable, part of Supabase (open source). Free in managed free tier; free when self-hosted.

**Connection to Claude/n8n:** API via `@supabase/supabase-js` storage client; RLS-protected access.

**Connection recipe:**
```bash
npm install @supabase/supabase-js
# create a bucket in the dashboard; use supabase.storage.from(bucket).upload(...)
```

**When to use it:** The default object storage choice when already on Supabase — uploads with auth-aware RLS and image transforms in one place.

**Why it's useful:** Already in the stack; storage policies share Supabase Auth/RLS; EU data residency by region.

**Notable alternatives:** MinIO (self-hosted S3 on Coolify, full control); Cloudflare R2 (cheap egress); AWS S3 (mature, US-default unless EU region).
