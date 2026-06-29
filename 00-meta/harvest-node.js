// Vektra Harvest — on-demand webhook (n8n Code node). Sanitized — fill CFG (keys live in n8n only).
// Flow:  Webhook (GET) -> THIS Code node -> Respond to Webhook.
//
// Powers the dashboard's "⚡ Harvest now" button. Two modes:
//   • no query        -> harvests the default CFG.keywords (general sweep)
//   • ?q=<term>       -> SEARCH-DRIVEN: researches THAT term live (GitHub + Hacker News for
//                        "<term>", "<term> open source", "<term> tool", "<term> github"),
//                        scores each with the brain, embeds it, and upserts fresh rows.
// Optional ?key=<token> gate (set CFG.token, or leave "" to disable).
const CFG = {
  anthropic: "PASTE_ANTHROPIC_KEY",        // brain: claude-haiku-4-5
  gemini: "PASTE_GEMINI_KEY",              // embeddings: gemini-embedding-001 (768-dim) — makes new intel searchable in "Ask"
  supabaseUrl: "PASTE_SUPABASE_URL",       // e.g. https://xxxx.supabase.co
  supabaseKey: "PASTE_SUPABASE_SERVICE_KEY",
  token: "",                               // optional shared secret; if set, requests must pass ?key=<token>
  hf: "",                                  // optional Hugging Face token (model search works keyless; token only raises limits)
  producthunt: "",                         // optional Product Hunt developer token — adds top launches
  profile: "a solo builder / small dev agency; values tools that save time, can be resold as a service, or unlock a new offering; prefers free or self-hostable",
  keywords: ["ai agent","mcp server","rag pipeline","vector database","llm framework",
             "ai coding assistant","workflow automation","developer tools","open source saas"],
};
const http = this.helpers.httpRequest;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const q = ($input.first() && $input.first().json && $input.first().json.query) || {};
if (CFG.token && q.key !== CFG.token) { return [{ json: { error: "unauthorized" } }]; }
const term = (q.q || "").trim();
const kws = term ? [term, term + " open source", term + " tool", term + " github"] : CFG.keywords;

async function hn(kw) {
  try {
    const j = await http({ url: "https://hn.algolia.com/api/v1/search?query=" + encodeURIComponent(kw) + "&tags=story&hitsPerPage=4", json: true });
    return (j.hits || []).map((h) => ({ source: "hackernews", title: h.title || h.story_title || "", url: h.url || ("https://news.ycombinator.com/item?id=" + h.objectID), signal: h.points || 0 })).filter((x) => x.title && x.url);
  } catch (e) { return []; }
}
async function gh(kw) {
  try {
    const j = await http({ url: "https://api.github.com/search/repositories?q=" + encodeURIComponent(kw) + "&sort=stars&order=desc&per_page=3", headers: { "User-Agent": "vektra", Accept: "application/vnd.github+json" }, json: true });
    return (j.items || []).map((it) => ({ source: "github", title: it.full_name + (it.description ? " — " + it.description : ""), url: it.html_url, signal: it.stargazers_count || 0 }));
  } catch (e) { return []; }
}
// Reddit — keyless public search JSON (term-driven; just a User-Agent).
async function reddit(kw){
  try{ const j=await http({url:"https://www.reddit.com/search.json?q="+encodeURIComponent(kw)+"&sort=top&t=month&limit=4&type=link",headers:{"User-Agent":"vektra/1.0 (intel harvester)"},json:true});
    return ((j.data&&j.data.children)||[]).map(c=>c.data).filter(d=>d&&d.title).map(d=>({source:"reddit",title:"[r/"+(d.subreddit||"")+"] "+d.title,url:d.url_overridden_by_dest||("https://www.reddit.com"+d.permalink),signal:d.score||0,desc:(d.selftext||"").slice(0,1500)})).filter(x=>x.url);
  }catch(e){ return []; }
}
// Dev.to — keyless public articles by tag.
async function devto(kw){
  try{ const tag=kw.toLowerCase().replace(/[^a-z0-9]/g,""); if(!tag) return [];
    const j=await http({url:"https://dev.to/api/articles?per_page=3&top=30&tag="+encodeURIComponent(tag),json:true});
    return (Array.isArray(j)?j:[]).map(a=>({source:"devto",title:a.title,url:a.url,signal:a.positive_reactions_count||0,desc:(a.description||"").slice(0,1500)})).filter(x=>x.url&&x.title);
  }catch(e){ return []; }
}
// Hugging Face — keyless model search (token only raises limits).
async function hf(kw){
  try{ const headers={}; if(CFG.hf) headers.Authorization="Bearer "+CFG.hf;
    const j=await http({url:"https://huggingface.co/api/models?search="+encodeURIComponent(kw)+"&sort=likes&direction=-1&limit=3",headers,json:true});
    return (Array.isArray(j)?j:[]).map(m=>({source:"huggingface",title:m.id+(m.pipeline_tag?" — "+m.pipeline_tag:""),url:"https://huggingface.co/"+m.id,signal:m.likes||0,desc:""})).filter(x=>x.url);
  }catch(e){ return []; }
}
// Product Hunt — top launches via GraphQL (optional; needs CFG.producthunt token).
async function ph(){
  if(!CFG.producthunt) return [];
  try{ const r=await http({method:"POST",url:"https://api.producthunt.com/v2/api/graphql",json:true,headers:{Authorization:"Bearer "+CFG.producthunt,"Content-Type":"application/json",Accept:"application/json"},body:{query:"{ posts(first: 8, order: VOTES) { edges { node { name tagline url votesCount } } } }"}});
    const edges=(r&&r.data&&r.data.posts&&r.data.posts.edges)||[];
    return edges.map(e=>e.node).filter(Boolean).map(n=>({source:"producthunt",title:n.name+(n.tagline?" — "+n.tagline:""),url:n.url,signal:n.votesCount||0,desc:n.tagline||""})).filter(x=>x.url);
  }catch(e){ return []; }
}
async function readme(it) {
  if (it.desc) return String(it.desc).slice(0, 2200);
  if (it.source !== "github") return "";
  const m = it.url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!m) return "";
  try {
    const txt = await http({ url: "https://api.github.com/repos/" + m[1] + "/" + m[2] + "/readme", headers: { "User-Agent": "vektra", Accept: "application/vnd.github.raw" }, json: false });
    return String(txt).slice(0, 2200);
  } catch (e) { return ""; }
}
const SYS = "You analyze a harvested dev/AI item for this operator: " + CFG.profile + ". Read it. Value = saves time OR resellable as a service OR unlocks a new offering. Stay broad. ALSO a MONEY lens: opportunity_type=tool|idea|lead|trend|clone; money_score 0-100. Return STRICT JSON only.";
async function brain(it, c) {
  const user = "ITEM title: " + it.title + "\nsource: " + it.source + "\nsignal: " + it.signal + "\n--- CONTENT ---\n" + (c || "(use title)").slice(0, 2200) + '\n--- end ---\nReturn JSON: {"summary":"<=2 sentences","why_it_matters":"one line: how the operator would use it","relevance_score":0-100,"tags":["3-6 lowercase"],"stage":"01-ideation..09-learning-reference or null","type":"agent|skill|mcp|mvp|library|app|reference or null","opportunity_type":"tool|idea|lead|trend|clone","money_score":0-100}';
  try {
    const r = await http({ method: "POST", url: "https://api.anthropic.com/v1/messages", json: true, headers: { "x-api-key": CFG.anthropic, "anthropic-version": "2023-06-01", "content-type": "application/json" }, body: { model: "claude-haiku-4-5", max_tokens: 420, system: SYS, messages: [{ role: "user", content: user }] } });
    const txt = (r.content && r.content[0] && r.content[0].text) || "{}";
    const m = txt.match(/\{[\s\S]*\}/);
    return m ? JSON.parse(m[0]) : {};
  } catch (e) { return {}; }
}
async function embed(text) {
  try {
    const r = await http({ method: "POST", url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=" + CFG.gemini, json: true, headers: { "Content-Type": "application/json" }, body: { model: "models/gemini-embedding-001", content: { parts: [{ text: (text || "").slice(0, 1500) }] }, outputDimensionality: 768 } });
    return r.embedding && r.embedding.values;
  } catch (e) { return null; }
}
let raw = [];
for (const kw of kws) {
  raw.push(...(await gh(kw))); raw.push(...(await hn(kw)));
  raw.push(...(await reddit(kw))); raw.push(...(await devto(kw))); raw.push(...(await hf(kw)));
  await sleep(400);
}
if (CFG.producthunt) raw.push(...(await ph()));
// dedup by url, then round-robin across sources so no single source (e.g. GitHub stars) buries the rest
const seen = new Set(); const dedup = [];
for (const it of raw) { if (!it.url || seen.has(it.url)) continue; seen.add(it.url); dedup.push(it); }
const CAP = 22, bySrc = {};
for (const it of dedup) { (bySrc[it.source] = bySrc[it.source] || []).push(it); }
for (const s in bySrc) bySrc[s].sort((a, b) => (b.signal || 0) - (a.signal || 0));
const srcs = Object.keys(bySrc); let items = [];
for (let i = 0; items.length < CAP; i++) { let added = false;
  for (const s of srcs) { if (bySrc[s][i]) { items.push(bySrc[s][i]); added = true; if (items.length >= CAP) break; } }
  if (!added) break; }
const rows = [];
for (const it of items) {
  const b = await brain(it, await readme(it));
  const v = await embed((it.title + " " + (b.summary || "")).trim());
  rows.push({ source_id: it.source, external_url: it.url, text: it.title, combined_text: it.title, summary: b.summary || null, why_it_matters: b.why_it_matters || null, relevance_score: (b.relevance_score != null ? b.relevance_score : null), stage: b.stage || null, type: b.type || null, tags: b.tags || [], is_new: true, opportunity_type: b.opportunity_type || null, money_score: (b.money_score != null ? b.money_score : null), content_hash: it.url, embedding: (v && v.length) ? ("[" + v.join(",") + "]") : null });
}
let stored = 0;
if (rows.length) {
  try {
    const ins = await http({ method: "POST", url: CFG.supabaseUrl + "/rest/v1/intel_items?on_conflict=content_hash&select=id", json: true, headers: { apikey: CFG.supabaseKey, Authorization: "Bearer " + CFG.supabaseKey, "Content-Type": "application/json", Prefer: "resolution=ignore-duplicates,return=representation" }, body: rows });
    stored = Array.isArray(ins) ? ins.length : rows.length;
  } catch (e) { const b = e && e.response && e.response.body; const msg = (b && b.message) || (b && (typeof b === "string" ? b : JSON.stringify(b))) || (e && e.message) || String(e); return [{ json: { error: msg, harvested: items.length } }]; }
}
return [{ json: { query: term || null, harvested: items.length, stored: stored, embedded: rows.filter((r) => r.embedding).length } }];
