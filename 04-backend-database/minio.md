---
name: minio
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/minio/minio
---

# MinIO

**What it does:** High-performance, self-hosted, S3-compatible object storage server.

**Stage / workflow:** Backend — self-hosted object storage you fully own, drop-in for the S3 API.

**Cost model:** Self-hostable, open source (AGPL). Free when self-hosted.

**Connection to Claude/n8n:** Self-hosted via Docker; any S3 SDK or n8n S3 node points at its endpoint.

**Connection recipe:**
```bash
docker run -d -p 9000:9000 -p 9001:9001 minio/minio server /data --console-address ":9001"
# production: deploy via Coolify (Docker)
```

**When to use it:** When you want full control over object storage on your own VPS with the S3 API, no third-party storage vendor.

**Why it's useful:** Self-hosts on Coolify; S3-compatible so existing SDKs work; all storage stays on EU infra (GDPR).

**Notable alternatives:** Supabase Storage (in-stack, auth-aware — default); Cloudflare R2 (cheap egress, managed); AWS S3 (mature, managed).
