---
name: SuperDesign
stage: 02-design-ui
type: agent
domain: design-tool
cost: free
conn_type: git-clone
status: active
added: 2026-06-27
source_url: https://github.com/superdesigndev/superdesign
---

# SuperDesign

**What it does:** Open-source AI design agent for VS Code / Cursor that generates UI mockups and wireframes from prompts.

**Stage / workflow:** Design-in-editor — generate and iterate UI directly inside your code editor.

**Cost model:** Free and open-source (you bring your own model/API key).

**Connection to Claude/n8n:** Editor extension/agent; runs locally and can use Claude as the backing model.

**Connection recipe:**
```bash
# Open-source — install the SuperDesign extension in VS Code / Cursor,
# or clone the repo (verify exact path):
git clone https://github.com/superdesigndev/superdesign.git
# Verify repo URL and setup steps in the project README.
```

**When to use it:** When you want UI generation inside your editor, close to the code, instead of a separate SaaS canvas.

**Why it's useful:** Works in VS Code/Cursor alongside the Next.js 15 codebase and can target shadcn/Tailwind output.

**Notable alternatives:** Vercel v0, Google Stitch, Uizard.
