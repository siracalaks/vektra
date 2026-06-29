"""export-library.py — sync the cloud library back into the git repo.

Reads Supabase `library_embeddings` and writes any card that is NOT already a
local registry entry into its stage folder as a markdown card (status: watch),
then appends it to registry.csv + registry.json. Idempotent: re-running only adds
what's new. Reads SUPABASE_URL / SUPABASE_KEY (or SUPABASE_SERVICE_ROLE_KEY) from the
environment, or from a repo-local .env (gitignored). Never commit keys.

Optional: wire this into a CI job (or your n8n library-sync flow) so the repo grows
with the cloud — no local machine needed.
"""
import csv, json, os, re, sys, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CANON = {"01-ideation","02-design-ui","03-frontend","04-backend-database","05-ai-agents",
         "06-video-media","07-deployment-devops","08-marketing-growth","09-learning-reference"}

def _envfile(p):
    d={}
    try:
        for l in open(p,encoding="utf-8"):
            l=l.strip()
            if l and not l.startswith("#") and "=" in l:
                k,v=l.split("=",1); d[k.strip()]=v.strip().strip('"').strip("'")
    except FileNotFoundError: pass
    return d

def config():
    url=os.environ.get("SUPABASE_URL"); key=os.environ.get("SUPABASE_KEY") or os.environ.get("SUPABASE_ANON_KEY")
    if url and key: return url.rstrip("/"), key
    e=_envfile(os.path.join(ROOT, ".env"))   # repo-local .env (gitignored), used only as a local fallback
    url=(e.get("SUPABASE_URL","")).rstrip("/")
    key=e.get("SUPABASE_SERVICE_ROLE_KEY") or e.get("SUPABASE_ANON_KEY","")
    return url, key

def slugify(s):
    s=re.sub(r"[^a-z0-9]+","-",(s or "").lower()).strip("-")
    return re.sub(r"-+","-",s)[:60] or "untitled"

def norm(u): return re.sub(r"/+$","",str(u or "")).lower()

TODAY = os.environ.get("TODAY") or __import__("datetime").date.today().isoformat()

def main():
    SB, KEY = config()
    if not SB or not KEY:
        print("Supabase URL/key yok (env veya .env)."); sys.exit(1)
    req=urllib.request.Request(SB+"/rest/v1/library_embeddings?select=name,text,stage,type,domain,source_url&limit=5000",
        headers={"apikey":KEY,"Authorization":"Bearer "+KEY})
    with urllib.request.urlopen(req,timeout=60) as r:
        rows=json.loads(r.read().decode())

    reg_path=os.path.join(ROOT,"registry.json")
    reg=json.load(open(reg_path,encoding="utf-8"))
    have=set(norm(x.get("source_url")) for x in reg)
    have_files=set()
    new=[]
    for x in rows:
        u=norm(x.get("source_url"))
        stage=x.get("stage")
        if not u or u in have or stage not in CANON: continue
        have.add(u)
        name=x.get("name") or "untitled"
        slug=slugify(name)
        folder=os.path.join(ROOT,stage)
        os.makedirs(folder, exist_ok=True)               # create stage folder if missing
        fname=slug+".md"; i=2
        while (stage,fname) in have_files or os.path.exists(os.path.join(folder,fname)):
            fname=slug+"-"+str(i)+".md"; i+=1
        have_files.add((stage,fname))
        typ=x.get("type") or "reference"; domain=x.get("domain") or "null"
        what=(x.get("text") or name).replace("\n"," ").strip()
        card=f"""---
name: {name}
stage: {stage}
type: {typ}
domain: {domain}
cost: <free | freemium | paid | self-hostable>
conn_type: <mcp | cli | git-clone | api | skill | npm | self-host | reference>
status: watch
added: {TODAY}
source_url: {x.get('source_url')}
stars: null
last_commit: null
weekly_downloads: null
used_by: null
trust_score: null
verified: false
last_checked: null
---

<!-- Auto-exported from the cloud library (engine auto-promoted). status: watch —
     verify the connection recipe with a REAL command before relying on it. -->

# {name}

**What it does:** {what}

**Connection recipe:**
```bash
# VERIFY before use — do not invent.
```
"""
        open(os.path.join(folder,fname),"w",encoding="utf-8").write(card)
        row={"name":name,"stage":stage,"type":typ,"domain":(x.get("domain") or ""),
             "cost":"","conn_type":"","status":"watch","added":TODAY,"source_url":x.get("source_url")}
        reg.append(row); new.append(row)
        print(f"  + {stage}/{fname}")

    if not new:
        print("Yeni kart yok — repo zaten güncel."); return
    json.dump(reg, open(reg_path,"w",encoding="utf-8"), ensure_ascii=False, indent=2)
    cols=["name","stage","type","domain","cost","conn_type","status","added","source_url"]
    with open(os.path.join(ROOT,"registry.csv"),"w",encoding="utf-8",newline="") as f:
        w=csv.DictWriter(f, fieldnames=cols); w.writeheader()
        for x in reg: w.writerow({c:x.get(c,"") for c in cols})
    print(f"DONE -> {len(new)} yeni kart eklendi, registry guncellendi (toplam {len(reg)}).")

if __name__=="__main__":
    main()
