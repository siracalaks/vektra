---
name: MonkeyLearn
stage: 08-marketing-growth
type: app
domain: analytics
cost: freemium
conn_type: api
status: watch
added: 2026-06-27
source_url: https://monkeylearn.com
---

# MonkeyLearn

**What it does:** Text analytics and machine-learning platform for sentiment analysis, classification, and extraction.

**Stage / workflow:** Marketing/growth analytics stage — analyze reviews, support tickets, and survey text for sentiment and themes.

**Cost model:** Freemium — historically free trial plus paid plans by query volume.

**Connection to Claude/n8n:** API — no native MCP; historically a REST API. Verify the product is still operating before relying on it.

**Connection recipe:**
```bash
# Verify availability first at https://monkeylearn.com (service status uncertain).
# If active: sign up, get an API key.
# In n8n: HTTP Request node -> MonkeyLearn REST API for classification/sentiment.
# No official MCP.
```

**When to use it:** When you need turnkey text classification/sentiment — but confirm the service is live first.

**Why it's useful:** Would let n8n enrich inbound text (reviews, tickets) with sentiment for clients — pending availability.

**Notable alternatives:** Claude (direct LLM classification), Google Cloud Natural Language, AWS Comprehend.
