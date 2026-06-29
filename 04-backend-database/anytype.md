---
name: anytype
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/anyproto
---

# Anytype

**What it does:** Local-first, end-to-end encrypted knowledge base and notes app — a privacy-focused Notion alternative.

**Stage / workflow:** Backend/productivity — personal and team knowledge base, notes, and docs.

**Cost model:** Self-hostable, open source. Free; data is local-first with optional self-hosted sync node.

**Connection to Claude/n8n:** Desktop/mobile app with a self-hostable sync backend; not a primary automation target.

**Connection recipe:**
```bash
# self-host the any-sync node (Docker)
git clone https://github.com/anyproto/any-sync-dockercompose
docker compose up -d
# production: deploy via Coolify (Docker Compose)
```

**When to use it:** Privacy-sensitive notes/knowledge where local-first + E2E encryption beats a cloud SaaS.

**Why it's useful:** Self-hostable sync node on Coolify; local-first and encrypted, strong GDPR posture.

**Notable alternatives:** AppFlowy (open-source Notion alt, more app-like); Notion (hosted, US); Obsidian (local-first markdown).
