---
name: Anyword
stage: 08-marketing-growth
type: app
domain: writing
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://anyword.com
---

# Anyword

**What it does:** AI copywriting platform with predictive performance scoring to forecast how copy will convert.

**Stage / workflow:** Marketing/growth stage — generate and rank ad/email/landing copy variants by predicted performance before shipping.

**Cost model:** Freemium — limited free/trial, paid plans for performance prediction, seats, and data sources.

**Connection to Claude/n8n:** API — no native MCP; Anyword offers an API you can drive from n8n.

**Connection recipe:**
```bash
# Sign up at https://anyword.com, get an API key.
# In n8n: HTTP Request node -> Anyword REST API for copy + performance scoring.
# No official MCP.
```

**When to use it:** When you want data-backed copy selection (predicted conversion) rather than just generation.

**Why it's useful:** Predictive scoring helps pick winning subject lines/copy for Instantly cold-email, with n8n routing the variants.

**Notable alternatives:** Jasper AI, Copy.ai, Writesonic.
