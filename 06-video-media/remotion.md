---
name: Remotion
stage: 06-video-media
type: library
cost: freemium
conn_type: npm
status: active
added: 2026-06-27
source_url: https://github.com/remotion-dev/remotion
---

# Remotion

**What it does:** Create videos programmatically in React — render compositions with dynamic data, text, and motion.

**Stage / workflow:** Templating and post-production. Wrap the fal.ai/Kling clip in a branded 9:16 frame with price, product name, and CTA overlays driven by Supabase data.

**Cost model:** Freemium — free for individuals and small teams; companies above the free-tier threshold need a paid company license.

**Connection to Claude/n8n:** npm package + CLI renderer. Render headlessly (`@remotion/renderer`) from an n8n Execute Command node, then upload the MP4 to Supabase Storage.

**Connection recipe:**
```bash
npx create-video@latest
# or add to an existing project
npm i remotion @remotion/cli
npx remotion render src/index.ts MyComp out/video.mp4
```

**When to use it:** Templated, data-driven product videos where every clip needs the same layout but different text/price/image — ideal for batch output.

**Why it's useful:** Pure Node/React, runs in n8n via CLI or a Next.js render service; pulls overlay data straight from Supabase; deployable on Coolify.

**Notable alternatives:** Motion Canvas (TS-based animation), Revideo (Remotion fork), ffmpeg drawtext (lower-level overlays).
