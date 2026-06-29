---
name: bitwarden
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/bitwarden/server
---

# Bitwarden

**What it does:** Self-hosted password and secrets manager for individuals and teams.

**Stage / workflow:** Backend — central vault for credentials, API keys, and shared team secrets.

**Cost model:** Self-hostable, open source (AGPL/GPL). Free when self-hosted; SaaS tiers also available.

**Connection to Claude/n8n:** Self-hosted vault; secrets retrieved by apps/n8n via CLI or Secrets Manager API.

**Connection recipe:**
```bash
# official self-host (Docker)
curl -Lso bitwarden.sh https://func.bitwarden.com/api/dl/?app=self-host&platform=linux
# lightweight alternative: vaultwarden/server Docker image
```

**When to use it:** Storing and sharing team secrets without trusting a third-party SaaS, or when you want one EU-hosted vault for all credentials.

**Why it's useful:** Self-hosts on Coolify; keeps API keys and client secrets on EU infra. Vaultwarden is a lightweight drop-in for a single VPS.

**Notable alternatives:** Vaultwarden (lightweight Bitwarden-compatible server); 1Password (hosted, polished, paid); HashiCorp Vault (heavy, infra-grade secrets).
