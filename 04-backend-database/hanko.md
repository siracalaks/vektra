---
name: hanko
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/teamhanko/hanko
---

# Hanko

**What it does:** Open-source, passkey-first authentication (WebAuthn/FIDO2) with a self-hostable backend and prebuilt web components.

**Stage / workflow:** Backend — passwordless auth layer for web apps.

**Cost model:** Self-hostable, open source (AGPL). Free when self-hosted; managed cloud also available.

**Connection to Claude/n8n:** Self-hosted backend with API + web components; integrates into Next.js frontends.

**Connection recipe:**
```bash
git clone https://github.com/teamhanko/hanko
docker compose up -d
# production: deploy via Coolify (Docker Compose), point at your Postgres
```

**When to use it:** When you want modern passkey/passwordless auth as the primary login method, self-hosted on EU infra.

**Why it's useful:** Self-hosts on Coolify with Postgres; German-origin project, strong GDPR fit; passkeys reduce password-handling risk.

**Notable alternatives:** better-auth (passkeys as one of many methods); Supabase Auth (in-stack); authentik (full IdP/SSO).
