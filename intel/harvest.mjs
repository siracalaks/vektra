// Vektra Intelligence — local starter harvester (zero dependencies).
// Uses Node's built-in fetch (Node 18+). No npm install, no VPS needed.
// Harvests from Hacker News (no auth) + GitHub Search (optional token),
// rule-classifies into the stage/domain taxonomy, matches tool mentions
// against your 194-card registry, dedups, and writes intel/intel-data.js
// which intel-viewer.html reads.
//
// Run:   node intel/harvest.mjs
// Token (optional, higher GitHub limits):  set GITHUB_TOKEN env var first.
//
// This is the LOCAL starter. The scaled version (embeddings + vision +
// Qdrant + n8n) lives in 00-meta/engine-setup-guide.md.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// --- keywords to harvest (edit freely) ---
const KEYWORDS = [
  "shadcn", "mcp server", "nextjs", "ai agent", "supabase",
  "tailwind", "design system", "self hosted", "rag", "n8n",
];

// --- rule-based classification (stage + domain) ---
const RULES = [
  { re: /shadcn|tailwind|react|next\.?js|frontend|component/i, stage: "03-frontend", domain: "design-tool" },
  { re: /design system|ui kit|figma|ux|landing/i,             stage: "02-design-ui", domain: "design-tool" },
  { re: /mcp|agent|llm|rag|prompt|claude|openai/i,            stage: "05-ai-agents", domain: "automation" },
  { re: /supabase|postgres|auth|database|vector|qdrant/i,     stage: "04-backend-database", domain: "" },
  { re: /n8n|zapier|automation|workflow|self ?host|docker|coolify/i, stage: "07-deployment-devops", domain: "automation" },
  { re: /video|image|voice|avatar|tts|stable diffusion/i,     stage: "06-video-media", domain: "" },
  { re: /seo|marketing|email|growth|sales|copywrit/i,         stage: "08-marketing-growth", domain: "writing" },
];
function classify(text) {
  for (const r of RULES) if (r.re.test(text)) return { stage: r.stage, domain: r.domain };
  return { stage: "09-learning-reference", domain: "" };
}

// --- known tool names (from your registry) for mention-matching ---
let TOOLS = [];
try {
  const reg = JSON.parse(readFileSync(join(ROOT, "registry.json"), "utf8"));
  TOOLS = reg.map((r) => r.name).filter((n) => n && n.length > 2);
} catch { /* registry optional */ }
function mentions(text) {
  const t = text.toLowerCase();
  return TOOLS.filter((name) => t.includes(name.toLowerCase())).slice(0, 6);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- Hacker News (Algolia, no auth) ---
async function harvestHN(kw) {
  const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(kw)}&tags=story&hitsPerPage=12`;
  try {
    const r = await fetch(url);
    const j = await r.json();
    return (j.hits || []).map((h) => ({
      source: "hackernews",
      title: h.title || h.story_title || "(untitled)",
      external_url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
      engagement: { points: h.points || 0, comments: h.num_comments || 0 },
      keyword: kw,
    }));
  } catch (e) { console.error("HN fail", kw, e.message); return []; }
}

// --- GitHub Search (token optional) ---
async function harvestGH(kw) {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(kw)}&sort=stars&order=desc&per_page=5`;
  const headers = { Accept: "application/vnd.github+json", "User-Agent": "vektra-intel" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  try {
    const r = await fetch(url, { headers });
    const j = await r.json();
    if (!j.items) return [];
    return j.items.map((it) => ({
      source: "github",
      title: it.full_name + (it.description ? " — " + it.description : ""),
      external_url: it.html_url,
      engagement: { stars: it.stargazers_count || 0, pushed: it.pushed_at },
      keyword: kw,
    }));
  } catch (e) { console.error("GH fail", kw, e.message); return []; }
}

// --- run ---
console.log(`Harvesting ${KEYWORDS.length} keywords from HN + GitHub…`);
let raw = [];
for (const kw of KEYWORDS) raw.push(...(await harvestHN(kw)));
for (const kw of KEYWORDS.slice(0, 6)) { // limit GH calls (rate limit w/o token)
  raw.push(...(await harvestGH(kw)));
  await sleep(1500);
}

// classify + enrich + dedup
const seen = new Set();
const items = [];
for (const it of raw) {
  if (!it.external_url || seen.has(it.external_url)) continue;
  seen.add(it.external_url);
  const { stage, domain } = classify(it.title);
  const score = it.engagement.stars ?? it.engagement.points ?? 0;
  items.push({
    id: items.length + 1,
    source: it.source,
    text: it.title,
    external_url: it.external_url,
    stage, domain,
    tool_mentions: mentions(it.title),
    keyword: it.keyword,
    score,
    engagement: it.engagement,
  });
}
items.sort((a, b) => b.score - a.score);

mkdirSync(__dirname, { recursive: true });
const out = `// Generated by harvest.mjs — ${items.length} items. Do not edit by hand.\nwindow.INTEL = ${JSON.stringify(items, null, 1)};\n`;
writeFileSync(join(__dirname, "intel-data.js"), out, "utf8");

const gh = items.filter((i) => i.source === "github").length;
const hn = items.filter((i) => i.source === "hackernews").length;
console.log(`✓ ${items.length} items (${gh} GitHub, ${hn} HN) → intel/intel-data.js`);
console.log("Open intel/intel-viewer.html in your browser to see them.");
