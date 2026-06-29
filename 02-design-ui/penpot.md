---
name: penpot/penpot
stage: 02-design-ui
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/penpot/penpot
---

# penpot/penpot

**What it does:** Open-source, self-hostable design and prototyping platform — a Figma alternative for UI design and team collaboration.

**Stage / workflow:** Design & UI stage — design, prototype, and hand off interfaces before implementation.

**Cost model:** Self-hostable and free; open-source (also available as a hosted cloud option).

**Connection to Claude/n8n:** Self-hosted service, deployed via Docker/Compose on your VPS.

**Connection recipe:**
```bash
# Deploy on Coolify VPS via the official docker-compose
# https://github.com/penpot/penpot/blob/main/docker/images/docker-compose.yaml
git clone https://github.com/penpot/penpot.git
# verify: import docker/images/docker-compose.yaml as a Coolify resource
```

**When to use it:** When you want a fully owned, no-seat-limit design tool for UI/prototyping instead of a SaaS like Figma.

**Why it's useful:** Deploys cleanly on the Coolify VPS via Docker Compose, keeping design tooling self-hosted alongside n8n and Supabase.

**Notable alternatives:** Figma, Excalidraw, Lunacy.
