---
name: Stirling-PDF
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/Stirling-Tools/Stirling-PDF
---

# Stirling-PDF

**What it does:** Self-hosted toolkit for PDF operations — merge, split, convert, OCR, compress, sign, and more.

**Stage / workflow:** Backend — PDF processing service in document pipelines and automations.

**Cost model:** Self-hostable, open source (MIT). Free when self-hosted.

**Connection to Claude/n8n:** Self-hosted app with REST API; call endpoints from n8n to process PDFs in a workflow.

**Connection recipe:**
```bash
docker run -d -p 8080:8080 stirlingtools/stirling-pdf:latest
# production: deploy via Coolify (Docker)
```

**When to use it:** Any document workflow needing PDF manipulation (OCR scanned invoices, merge contracts) without uploading files to a US SaaS.

**Why it's useful:** Self-hosts on Coolify; processes documents on EU infra (GDPR); callable from n8n pipelines.

**Notable alternatives:** Adobe Acrobat (desktop/SaaS, paid); ILovePDF/Smallpdf (hosted SaaS); pdf-lib/pdfcpu (libraries for code-level work).
