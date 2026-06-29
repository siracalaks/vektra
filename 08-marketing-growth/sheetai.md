---
name: SheetAI
stage: 08-marketing-growth
type: reference
domain: analytics
cost: freemium
conn_type: reference
status: active
added: 2026-06-27
source_url: https://sheetai.app
---

# SheetAI

**What it does:** AI formulas and automation inside Google Sheets (e.g. generate, classify, and enrich cells with AI).

**Stage / workflow:** Marketing/growth analytics stage — run AI directly over spreadsheet data for enrichment and bulk text tasks.

**Cost model:** Freemium — free quota of AI calls, paid plans for higher usage.

**Connection to Claude/n8n:** Reference — it's a Google Sheets add-on, not a standalone API. Automate via Google Sheets (which n8n supports natively) rather than a SheetAI endpoint.

**Connection recipe:**
```bash
# Install the SheetAI add-on in Google Sheets (no public standalone API).
# For automation: use the Google Sheets node in n8n to read/write the sheet,
# and run AI steps in n8n with Claude directly.
```

**When to use it:** When a client lives in Google Sheets and wants AI enrichment in-cell without code.

**Why it's useful:** n8n's Google Sheets node bridges spreadsheet data into automated flows for clients; heavy AI better done via Claude.

**Notable alternatives:** SheetAI alternatives like GPT for Sheets, Polymer, Claude (direct API).
