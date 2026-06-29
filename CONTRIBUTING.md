# Contributing to Vektra

Thanks for helping the catalog grow! Vektra is a **living library** — new tools, fixes,
and better connection recipes are all welcome.

## Add a tool card
1. Copy [`00-meta/card-template.md`](00-meta/card-template.md) into the right stage folder
   (`01-ideation/` … `09-learning-reference/`). Filename = kebab-case tool name (e.g. `better-auth.md`).
2. Fill the frontmatter (`name`, `stage`, `type`, `domain`, `cost`, `conn_type`, `status`, `source_url`).
3. Write the body: **what it does**, **when to use it**, and a **connection recipe** —
   ⚠️ only paste commands you have actually verified. If unsure, leave `status: watch`.
4. Add a matching row to `registry.csv` (and `registry.json` if you regenerate it).
5. Open a PR.

## Other contributions
- **Fix a recipe / mark a dead tool** — update the card, set `status: deprecated` if it's gone.
- **Improve the dashboard** (`intel/dashboard.html`) — single file, zero dependencies, no build.
  i18n PRs (the UI is currently Turkish) are very welcome.
- **Engine / sources** — see `00-meta/engine-node.js`, `00-meta/sources.yaml`, `00-meta/modules.yaml`.

## Ground rules
- **Never commit secrets.** Keys live in n8n or a local `.env` (gitignored). `.env.example` lists them.
- Tool cards describe *public* tools — no private/business data.
- Treat skills & MCP servers as untrusted until reviewed (a card is catalogued, not installed).

By contributing you agree your work is licensed under the repository's [MIT License](LICENSE).
