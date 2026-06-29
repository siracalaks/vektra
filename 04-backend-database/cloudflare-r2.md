---
name: cloudflare-r2
stage: 04-backend-database
type: library
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://www.cloudflare.com/developer-platform/r2/
---

# Cloudflare R2

**What it does:** S3-compatible object storage with zero egress fees, served over Cloudflare's global network.

**Stage / workflow:** Backend — object storage for assets/media where bandwidth/egress cost matters.

**Cost model:** Freemium; free tier, pay for storage but no egress charges.

**Connection to Claude/n8n:** API via any S3-compatible SDK pointed at the R2 endpoint.

**Connection recipe:**
```bash
npm install @aws-sdk/client-s3
# configure S3 client with R2 endpoint + R2 access keys
```

**When to use it:** Serving lots of public/downloaded files (images, media) where S3 egress fees would dominate.

**Why it's useful:** S3-compatible so it slots into existing SDKs; zero egress is ideal for media-heavy AI outputs. Note: confirm EU jurisdiction/data-location settings for GDPR-sensitive client data.

**Notable alternatives:** Supabase Storage (in-stack, auth-aware); MinIO (fully self-hosted, EU); AWS S3 (mature but egress-heavy).
