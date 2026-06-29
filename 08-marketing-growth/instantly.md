---
name: Instantly
stage: 08-marketing-growth
type: reference
cost: paid
conn_type: api
status: active
added: 2026-06-27
source_url: https://instantly.ai
---

# Instantly

**What it does:** Cold-email outreach SaaS for running multi-inbox campaigns with secondary sending domains and a unified Unibox for replies.

**Stage / workflow:** Marketing/growth stage — launch and scale cold-email campaigns, warm inboxes, and manage replies from one place.

**Cost model:** Paid SaaS (subscription).

**Connection to Claude/n8n:** API — no native MCP; integrate via the Instantly REST API driven from n8n.

**Connection recipe:**
```bash
# n8n HTTP Request node -> Instantly API to push leads / launch campaigns;
# manage replies in Unibox.
# Example: POST leads into a campaign
curl -X POST https://api.instantly.ai/api/v2/leads \
  -H "Authorization: Bearer $INSTANTLY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"campaign":"<campaign_id>","email":"lead@example.com"}'
```

**When to use it:** When running cold-email outreach at scale across multiple secondary domains and inboxes, with reply management in Unibox.

**Why it's useful:** n8n HTTP Request nodes push leads and launch campaigns, and synced replies can route into Twenty CRM or Evolution API follow-ups.

**Notable alternatives:** Smartlead, Lemlist, Apollo.io.
