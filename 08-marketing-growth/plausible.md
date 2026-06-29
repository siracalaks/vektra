---
name: Plausible Analytics
stage: 08-marketing-growth
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/plausible/analytics
---

# Plausible Analytics

**What it does:** Privacy-friendly, lightweight, self-hostable web analytics — a Google Analytics alternative.

**Stage / workflow:** Marketing/growth stage — track traffic, conversions, and campaign performance without cookies or GDPR baggage.

**Cost model:** Self-hostable, free under open source (AGPL); a hosted paid plan also exists.

**Connection to Claude/n8n:** Self-host — deploy via Docker Compose; pull stats through its Stats API into n8n.

**Connection recipe:**
```bash
docker compose up -d
```

**When to use it:** When you want simple, privacy-first analytics on your own sites without Google Analytics tracking overhead.

**Why it's useful:** Self-hosts on the Coolify VPS, drops a lightweight script into the Next.js sites, and its API lets n8n pull metrics for growth dashboards.

**Notable alternatives:** Google Analytics, Umami (self-hosted), Matomo.
