---
name: Lovart
stage: 06-video-media
type: agent
domain: image
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://lovart.ai
---

# Lovart

**What it does:** AI design/art agent — generates illustrations and creative assets (posters, branding, layouts) from prompts, orchestrating multiple models agentically.

**Stage / workflow:** Image/design creation upstream. Produce branded illustrations and marketing assets; stills can seed the fal.ai/Kling 9:16 image-to-video step.

**Cost model:** Freemium — free credits to start; paid plans add credits and advanced features. API availability is plan-dependent — verify before integrating.

**Connection to Claude/n8n:** Hosted — agentic app with an API path; confirm endpoint details before wiring.

**Connection recipe:**
```bash
# Sign up at https://lovart.ai, get API key (verify API availability/scope first).
# If API: n8n HTTP Request node -> REST API -> fetch asset. Otherwise generate via UI and import manually.
```

**When to use it:** Want an agent to produce cohesive design/illustration sets rather than single one-off images.

**Why it's useful:** If the API is available, it slots into the n8n HTTP pattern; output assets feed the image-to-video flow.

**Notable alternatives:** Krea AI (real-time gen), Playground AI (design-oriented), Midjourney (high-aesthetic stills).
