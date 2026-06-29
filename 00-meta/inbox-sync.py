"""inbox_sync.py — auto-grow loop, step 2 (LOCAL, on-demand).

Pulls high-value NEW intel from Supabase that is NOT already in the library, and
drafts a card-template into 99-inbox/ for human review. The cloud engine flags
candidates (relevance_score + is_new); this local script turns them into card
drafts. Human then: review -> move to a stage folder -> add registry row -> embed.

Safe: never overwrites an existing inbox draft, never touches the library or registry.
"""
import json, os, re, urllib.request, urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INBOX = os.path.join(ROOT, "99-inbox")
MIN_RELEVANCE = 75   # threshold for "worth a permanent card"

# Discussion/question titles that are NOT catalogable tools (skip unless backed by a repo)
JUNK_RE = re.compile(r"^(ask hn|show hn|tell hn)\b|\?$", re.I)

def is_real_tool(r, url):
    text=(r.get("text") or "").strip()
    if "github.com" in (url or ""): return True          # real repo
    if JUNK_RE.search(text): return False                # HN discussion / question
    # otherwise require the brain to have engaged the money/opportunity lens as a "buildable" thing
    return (r.get("opportunity_type") in ("tool","idea","clone")) and (r.get("money_score") is not None)

def env(p):
    d={}
    try:
        for l in open(p,encoding="utf-8"):
            l=l.strip()
            if l and not l.startswith("#") and "=" in l:
                k,v=l.split("=",1); d[k.strip()]=v.strip().strip('"').strip("'")
    except FileNotFoundError: pass
    return d
# Credentials: environment variables first, then a repo-local .env (gitignored). Never commit keys.
_e=env(os.path.join(ROOT, ".env"))
SB=(os.environ.get("SUPABASE_URL") or _e.get("SUPABASE_URL","")).rstrip("/")
SVC=os.environ.get("SUPABASE_SERVICE_ROLE_KEY") or _e.get("SUPABASE_SERVICE_ROLE_KEY","")

def jget(url):
    req=urllib.request.Request(url, headers={"apikey":SVC,"Authorization":"Bearer "+SVC})
    with urllib.request.urlopen(req, timeout=60) as r: return json.loads(r.read().decode())

def slugify(s):
    s=s.lower()
    s=re.sub(r"[^a-z0-9]+","-",s).strip("-")
    return re.sub(r"-+","-",s)[:60] or "untitled"

def nice_name(text, url):
    # GitHub "owner/repo — desc" -> repo ; else first ~6 words of title
    m=re.match(r"^[^/]+/([^ ]+)", text or "")
    if m and "github.com" in (url or ""): return m.group(1)
    base=re.split(r"[—\-:|]", text or "", maxsplit=1)[0].strip()
    return " ".join(base.split()[:6]) or "untitled"

def norm_url(u):
    u=(u or "").strip().rstrip("/").lower()
    return re.sub(r"^https?://(www\.)?","",u)

# --- existing library URLs (don't re-draft what we already have) ---
reg=json.load(open(os.path.join(ROOT,"registry.json"),encoding="utf-8"))
have=set(norm_url(r.get("source_url","")) for r in reg)
have_names=set((r.get("name","") or "").lower() for r in reg)

# --- candidate intel: (high relevance + new) OR user-flagged via dashboard "→ kütüphaneye ekle" ---
q=("select=external_url,text,summary,why_it_matters,relevance_score,money_score,"
   "opportunity_type,stage,type,tags,is_new,saved"
   f"&or=(and(is_new.eq.true,relevance_score.gte.{MIN_RELEVANCE}),saved.eq.true)"
   "&order=relevance_score.desc.nullslast&limit=200")
rows=jget(SB+"/rest/v1/intel_items?"+q)
print(f"{len(rows)} aday (relevance>={MIN_RELEVANCE} & yeni, VEYA ⭐ kütüphaneye-aday)")

os.makedirs(INBOX, exist_ok=True)
existing_drafts=set(os.listdir(INBOX))
written=0; skipped=0
for r in rows:
    url=r.get("external_url","");
    if norm_url(url) in have: skipped+=1; continue
    # user-flagged (saved) items bypass the auto heuristic — the human already picked them
    if not r.get("saved") and not is_real_tool(r, url): skipped+=1; continue
    name=nice_name(r.get("text",""), url)
    if name.lower() in have_names: skipped+=1; continue
    slug=slugify(name)
    fname=slug+".md"
    if fname in existing_drafts: skipped+=1; continue
    stage=r.get("stage") or "<choose 01..09>"
    typ=r.get("type") or "<agent|skill|mcp|mvp|library|app|reference>"
    tags=r.get("tags") or []
    domain=(tags[0] if tags else "null")
    summary=(r.get("summary") or r.get("text") or "").replace("\n"," ").strip()
    why=(r.get("why_it_matters") or "").replace("\n"," ").strip()
    rel=r.get("relevance_score"); money=r.get("money_score"); opp=r.get("opportunity_type") or "?"
    card=f"""---
name: {name}
stage: {stage}
type: {typ}
domain: {domain}
cost: <free | freemium | paid | self-hostable>
conn_type: <mcp | cli | git-clone | api | skill | npm | self-host | reference>
status: watch
added: 2026-06-28
source_url: {url}
stars: null
last_commit: null
weekly_downloads: null
used_by: null
trust_score: null
verified: false
last_checked: null
---

<!-- AUTO-DRAFT from the intelligence engine. Relevance {rel}/100 · 💰 {money}/100 · {opp}.
     REVIEW before promoting: verify the connection recipe with a REAL command, set cost/
     conn_type/stage/type, then move this file to its stage folder and add a registry row. -->

# {name}

**What it does:** {summary}

**Stage / workflow:** <where it fits A-to-Z>

**Cost model:** <free/paid/self-hostable + notes>

**Connection to Claude/n8n:** <mcp server / CLI / git clone / API / skill / reference>

**Connection recipe:**
```bash
# VERIFY before use — do not invent. If unknown, keep status: watch.
```

**When to use it:** <best use case, decision trigger>

**Fits your stack because:** {why}

**Notable alternatives:** <2-3 alternatives + when to prefer them>
"""
    open(os.path.join(INBOX,fname),"w",encoding="utf-8").write(card)
    existing_drafts.add(fname); written+=1
    print(f"  + 99-inbox/{fname}  (rel {rel}, 💰 {money}, {opp})")

print(f"DONE -> {written} taslak yazildi, {skipped} atlandi (zaten kütüphanede/taslakta)")
