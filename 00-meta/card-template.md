---
name: <Tool Name>
stage: <01-ideation | 02-design-ui | 03-frontend | 04-backend-database | 05-ai-agents | 06-video-media | 07-deployment-devops | 08-marketing-growth | 09-learning-reference>
type: <agent | skill | mcp | mvp | library | app | reference>
domain: <optional fine-grained tag: presentations | voice | avatar | research | writing | email | chatbot | analytics | sales | inspiration | image | video | design-tool | automation | … | null>
cost: <free | freemium | paid | self-hostable>
conn_type: <mcp | cli | git-clone | api | skill | npm | self-host | reference>
status: <active | watch | deprecated>
added: <YYYY-MM-DD>
source_url: <github/website>
# Trust signals — populated by the ingestion engine / quarterly refresh.
# Leave null until fetched; status is DERIVED from trust_score (see trust-scoring.md).
stars: <int|null>
last_commit: <YYYY-MM-DD|null>
weekly_downloads: <int|null>
used_by: <int|null>
trust_score: <0-100|null>
verified: <true|false>
last_checked: <YYYY-MM-DD|null>
---

# <Tool Name>

**What it does:** <one line>

**Stage / workflow:** <where it fits A-to-Z>

**Cost model:** <free/paid/self-hostable + notes>

**Connection to Claude/n8n:** <mcp server / CLI / git clone / API / skill / reference>

**Connection recipe:**
```bash
<exact command(s): npx skills add … , /plugin marketplace add … , git clone … ,
 MCP JSON block, or API pattern>
```

**When to use it:** <best use case, decision trigger>

**Why it's useful:** <Coolify/n8n/Supabase/Next.js fit note>

**Notable alternatives:** <2-3 alternatives + when to prefer them>
