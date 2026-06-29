---
name: listmonk
stage: 08-marketing-growth
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/knadh/listmonk
---

# listmonk

**What it does:** Self-hosted newsletter and mailing-list manager shipping as a single Go binary.

**Stage / workflow:** Marketing/growth stage — manage subscriber lists, build campaigns, and send bulk newsletters.

**Cost model:** Self-hostable, free under open source.

**Connection to Claude/n8n:** Self-host — single binary or Docker; drive lists and campaigns via its HTTP API from n8n.

**Connection recipe:**
```bash
docker compose up -d
```

**When to use it:** When you need a fast, privacy-respecting bulk newsletter tool you own end to end instead of Mailchimp.

**Why it's useful:** Lightweight single binary / Docker image deploys easily on the Coolify VPS, and its API integrates with n8n for automated list and campaign management.

**Notable alternatives:** Mailchimp, Sendy, Mautic.
