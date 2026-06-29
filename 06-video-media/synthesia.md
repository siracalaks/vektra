---
name: Synthesia
stage: 06-video-media
type: app
domain: avatar
cost: freemium
conn_type: api
status: active
added: 2026-06-27
source_url: https://synthesia.io
---

# Synthesia

**What it does:** AI video with synthetic presenters/avatars — turns a script into a studio-style talking-head video, strong for enterprise/training.

**Stage / workflow:** Avatar-led video. Generate a polished spokesperson clip for product explainers; crop/cut into the 9:16 flow where needed.

**Cost model:** Freemium — limited free plan; paid tiers priced by minutes, custom avatars, and seats. API on higher/enterprise plans.

**Connection to Claude/n8n:** Hosted REST API.

**Connection recipe:**
```bash
# Sign up at https://synthesia.io, get API key (API access is plan-gated).
# In n8n: HTTP Request node -> POST script + template to the REST API -> poll for render -> fetch video.
```

**When to use it:** Professional, brand-safe presenter videos at scale (training, explainers, multilingual).

**Why it's useful:** REST call from self-hosted n8n returns a finished MP4 for downstream assembly.

**Notable alternatives:** HeyGen (avatars + API), D-ID (talking portraits), Colossyan (presenter video).
