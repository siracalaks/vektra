---
name: vektra-resource-library
description: >
  Vektra's master catalog of every tool, repo, MCP server, skill, and platform
  for building software products A-to-Z (ideation through marketing). Use this
  skill WHENEVER the user asks "what should I use for X", "is there a tool/skill
  for Y", "how do I connect Z to Claude/n8n", or mentions choosing libraries,
  auth, payments, deployment, AI media, MCP servers, or growth tooling. Always
  consult registry.csv first, then read the specific stage card.
license: MIT
---

# Vektra Resource Library — Router

## How to query this library
1. Read `registry.csv` (one row per resource: name, stage, **type**, **domain**, cost, conn_type, status).
   `registry.json` is the same data for programmatic/n8n use.
2. Filter on THREE axes:
   - **stage** — the workflow phase the user is in (01-ideation … 09-learning-reference).
   - **type** — `agent | skill | mcp | mvp | library | app | reference`. Use this for
     cross-cutting asks like "list every MCP server", "what skills do I have",
     "show me MVP starters" — these ignore stage and filter on type.
   - **domain** — optional fine-grained tag (presentations, voice, avatar, research,
     writing, email, chatbot, analytics, sales, inspiration, image, video,
     design-tool, automation, …). Use for asks like "voice/TTS tools" or
     "presentation generators" that cut across stage and type.
3. Open the matching card in the stage folder for the full connection recipe.
4. Prefer FREE + SELF-HOSTABLE tools that fit the Coolify/n8n/Supabase stack.
   Trust the `status` field — it is DERIVED from a transparent score
   (see 00-meta/trust-scoring.md): `active` = proven, `watch` = recommend with
   a caveat, `deprecated` = don't recommend.
5. If nothing matches, say so and propose adding a card via 99-inbox/. New tools
   flow in automatically from 00-meta/sources.yaml (see ingestion-workflow.md).

## Stack constraints (edit to your own — see 00-meta/stack-profile.md)
- Describe your stack here so recommendations fit — e.g. self-hosted on Coolify/VPS:
  n8n, Supabase (Postgres + pgvector), optionally Ollama/LiteLLM for local models.
- Frontend example: Next.js + Supabase + shadcn/ui + Tailwind; config-driven.
- Prefer free/self-hostable. Answer in the user's language; keep tool names in English.

## Stage index
- 01-ideation/        — research, validation, idea generation
- 02-design-ui/       — design taste, UI components, prototyping
- 03-frontend/        — React/Next libraries, forms, state, animation
- 04-backend-database/— DB, auth, payments, storage, vector, queues, email
- 05-ai-agents/       — agent frameworks, MCP servers, skill libraries
- 06-video-media/     — image/video/voice generation, editing
- 07-deployment-devops/— hosting, containers, monitoring, security
- 08-marketing-growth/— SEO, outreach, analytics, social, CRM
- 09-learning-reference/— roadmaps, courses, awesome-lists
- 99-inbox/           — n8n auto-drafts land here for human review

## Maintenance rules
- Every new resource = one card in its stage folder + one row in registry.csv.
- Card filename = kebab-case tool name (e.g. better-auth.md).
- Re-verify connection recipes quarterly (CLIs/MCP setups change fast).
- Treat skills/MCP servers as installed software: audit SKILL.md before install.
