---
name: PostHog
stage: 07-deployment-devops
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/PostHog/posthog
---

# PostHog

**What it does:** All-in-one open-source product analytics — events, error tracking, session replay, feature flags, A/B tests, and LLM observability in a single platform.

**Stage / workflow:** Deployment & DevOps / post-launch — measures user behavior, catches errors, and gates features once your app is live.

**Cost model:** Self-hostable (open source) and very generous free cloud tier (1M events/mo, plus free quotas for replays and flags). Self-host = infra cost only.

**Connection to Claude/n8n:** API + self-host. Ingest events via SDKs/REST; n8n can POST to the capture endpoint; LLM analytics SDKs wrap model calls.

**Connection recipe:**
```bash
# Self-host via Docker (canonical hobby deploy)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/PostHog/posthog/HEAD/bin/deploy-hobby)"
```

**When to use it:** When you want one tool for analytics + error tracking + replays + flags instead of stitching several SaaS products together.

**Why it's useful:** Self-hosts on the Coolify VPS; its LLM observability layer pairs with LiteLLM/Ollama call tracing, and events can flow in from n8n workflows.

**Notable alternatives:** Plausible (privacy analytics), Matomo, Mixpanel.
