---
name: spec-kit
stage: 01-ideation
type: skill
cost: free
conn_type: git-clone
status: active
added: 2026-06-27
source_url: https://github.com/github/spec-kit
---

# spec-kit

**What it does:** GitHub's spec-driven development toolkit that turns a feature idea into structured specs, plans, and tasks before any code is written.

**Stage / workflow:** Ideation through planning — sits at the front of the A-to-Z flow, converting raw ideas into reviewable specifications that downstream coding agents implement.

**Cost model:** Free and open source. No paid tier; clone and run locally.

**Connection to Claude/n8n:** git clone + workflow reference. Provides a `specify` CLI and prompt templates you use as a structured process for Claude Code; pairs with Superpowers' brainstorm/write-plan steps.

**Connection recipe:**
```bash
# Bootstrap a new spec-driven project (verify exact subcommands against repo docs)
uvx --from git+https://github.com/github/spec-kit.git specify init <project>  # verify

# Or clone and use as a workflow reference
git clone https://github.com/github/spec-kit
```

**When to use it:** When an idea is fuzzy and you want a disciplined spec -> plan -> tasks pipeline before handing implementation to an AI agent, especially for non-trivial features.

**Why it's useful:** It is stack-agnostic and produces plain Markdown specs, so it slots cleanly in front of Next.js 15 + shadcn/ui builds and n8n automation work without imposing any runtime dependency on the Coolify VPS.

**Notable alternatives:** Superpowers (brainstorm/write-plan workflow), Kiro (spec-driven IDE), plain CLAUDE.md/PRD-driven prompting.
