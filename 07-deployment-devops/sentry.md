---
name: Sentry
stage: 07-deployment-devops
type: app
cost: self-hostable
conn_type: self-host
status: watch
added: 2026-06-27
source_url: https://github.com/getsentry/sentry
---

# Sentry

**What it does:** Full-featured error and performance monitoring with rich stack traces, tracing, profiling, and release health across many languages and frameworks.

**Stage / workflow:** Deployment & DevOps / post-launch — deep error and performance observability for production apps.

**Cost model:** Self-hostable (open source) but heavy — Kafka, ClickHouse, Postgres, Redis, ~16GB RAM minimum. Generous-ish free SaaS tier exists. Self-host is costly on a small VPS.

**Connection to Claude/n8n:** API + self-host. Apps report via Sentry SDKs to a DSN; n8n has a Sentry node.

**Connection recipe:**
```bash
# Self-host (canonical install script) — verify host meets ~16GB RAM requirement first
# verify
git clone https://github.com/getsentry/self-hosted.git
cd self-hosted
./install.sh
```

**When to use it:** When you need best-in-class tracing/profiling and have the infrastructure budget; otherwise prefer a lighter tool on a small VPS.

**Why it's useful:** Could run on Coolify, but its resource appetite competes with n8n/Supabase/Qdrant/Ollama on one VPS — PostHog or GlitchTip are the better fit here.

**Notable alternatives:** GlitchTip (lightweight, protocol-compatible), PostHog error tracking, Bugsnag.
