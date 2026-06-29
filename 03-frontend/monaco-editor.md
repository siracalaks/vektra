---
name: Monaco Editor
stage: 03-frontend
type: library
cost: free
conn_type: npm
status: active
added: 2026-06-27
source_url: https://github.com/microsoft/monaco-editor
---

# Monaco Editor

**What it does:** The code editor that powers VS Code, embeddable as a browser component with syntax highlighting, IntelliSense and diffing.

**Stage / workflow:** In-app code editing — playgrounds, config editors, snippet tools or any feature needing a real code editor.

**Cost model:** Free and open source (MIT).

**Connection to Claude/n8n:** npm package.

**Connection recipe:**
```bash
npm install monaco-editor
# React wrapper:
npm install @monaco-editor/react
```

**When to use it:** When you need a full-featured, VS Code-grade editing experience inside the browser.

**Why it's useful:** The @monaco-editor/react wrapper integrates cleanly with Next.js 15 (dynamic/client import) and TypeScript.

**Notable alternatives:** CodeMirror 6, Ace Editor, Sandpack.
