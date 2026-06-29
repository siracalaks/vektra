---
name: Lavender
stage: 08-marketing-growth
type: app
domain: sales
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://lavender.ai
---

# Lavender

**What it does:** AI email coaching that scores and improves sales outreach emails in real time as you write.

**Stage / workflow:** Sales/lead-gen stage — refine cold and follow-up emails for clarity, tone, and reply likelihood.

**Cost model:** Freemium — free tier with limited daily scores, paid plans for full features and teams.

**Connection to Claude/n8n:** API — primarily a browser/inbox extension; an API exists for teams. No native MCP.

**Connection recipe:**
```bash
# Sign up at https://lavender.ai (browser extension for in-inbox coaching).
# For automation: check team API availability, then in n8n use
# HTTP Request node -> Lavender API to score draft copy. No official MCP.
```

**When to use it:** When improving the quality and reply rate of sales emails before they go out.

**Why it's useful:** Pairs with Instantly cold-email — coach/score copy so SMB outreach lands better; n8n can route drafts for scoring.

**Notable alternatives:** Anyword, Lavender alternatives like Smartwriter, Copy.ai.
