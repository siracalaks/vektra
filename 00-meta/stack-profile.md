# Stack Profile (template)

This file tells the brain (and any Claude session) what you already run, so recommendations
fit your setup instead of suggesting things you'd never use. **Edit it to describe YOUR stack**,
or keep it generic. The live engine reads a one-line `profile` from its CONFIG
(`00-meta/engine-node.js`); this is the longer, human-readable version.

> Everything below is an *example* — replace it with your own.

## Infrastructure
- Automation / orchestration: **n8n**
- Database + Auth + Storage + vectors: **Supabase** (Postgres + pgvector)
- Hosting / PaaS: **Coolify** (or Vercel, Railway, a plain VPS…)
- Optional self-hosted LLMs: **Ollama / LiteLLM** (only if you prefer local models)

## Frontend
- Next.js + React + TypeScript
- shadcn/ui + Tailwind
- config-driven architecture

## Preferences
- **Free and self-hostable first.**
- One decisive recommendation over long option-lists.

## Active work (context for scoring)
Describe what you're building so "relevance" and the 💰 money-radar score mean something for
*you* — e.g. "client websites + automation services; resells AI tooling as a service".
