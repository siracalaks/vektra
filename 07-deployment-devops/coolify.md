---
name: Coolify
stage: 07-deployment-devops
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/coollabsio/coolify
---

# Coolify

**What it does:** Open-source, self-hostable PaaS for one-click Docker app and database deploys — a Heroku/Vercel/Netlify alternative.

**Stage / workflow:** Deployment & DevOps — the control plane that builds, deploys, and manages every service on your VPS from a single dashboard.

**Cost model:** Free and self-hostable (open source). No per-seat or per-deploy fees; you only pay for the VPS it runs on.

**Connection to Claude/n8n:** self-host (reference). Coolify itself hosts n8n/Supabase/etc.; it is the platform, not a tool Claude calls directly.

**Connection recipe:**
```bash
# Install on a fresh VPS (canonical installer)
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

**When to use it:** Whenever you want push-to-deploy Git/Docker workflows on your own hardware without managing raw Compose files by hand.

**Why it's useful:** This is the VPS platform already running n8n, Supabase, Qdrant, Ollama, and LiteLLM — every other tool here deploys as a Coolify service.

**Notable alternatives:** Dokku, CapRover, Dokploy.
