#!/usr/bin/env python3
"""Vektra MCP server — exposes the growing Vektra library + live intelligence as a
tool Claude can call in ANY project. Zero dependencies (pure stdlib), stdio transport.

It proxies the secured "Sor" n8n webhook, so NO API keys live here — only the
webhook URL + token, read from env (set in the Claude Code MCP registration):
  VEKTRA_ASK_URL   e.g. https://YOUR-n8n-domain/webhook/vektra-ask
  VEKTRA_ASK_KEY   the webhook token (kept out of git)

Register globally (available in every project):
  claude mcp add vektra -s user \
    -e VEKTRA_ASK_URL=<url> -e VEKTRA_ASK_KEY=<token> \
    -- python "<abs path to this file>"
"""
import sys, os, json, urllib.request, urllib.parse

URL = os.environ.get("VEKTRA_ASK_URL", "")
KEY = os.environ.get("VEKTRA_ASK_KEY", "")

TOOLS = [{
    "name": "vektra_ask",
    "description": (
        "Search your growing Vektra knowledge base (a self-harvesting catalog of dev/AI "
        "tools + live intelligence, each scored for your own stack and goals; free/self-hostable "
        "preferred) and return a synthesized, cited recommendation plus the matching source "
        "cards. Use this BEFORE picking a tool, library, MCP, API, or approach for any project — "
        "it reflects the latest auto-updated knowledge, not just training data. Then propose the "
        "relevant items to the user and, on approval, pull them into the project."
    ),
    "inputSchema": {
        "type": "object",
        "properties": {
            "question": {"type": "string", "description": "Natural-language need, e.g. 'best image-to-video API for product clips' or 'auth for a SaaS on Supabase'"}
        },
        "required": ["question"],
    },
}]

def ask(question):
    if not URL:
        return "Vektra yapılandırılmamış: VEKTRA_ASK_URL env değişkeni yok."
    try:
        u = URL + "?q=" + urllib.parse.quote(question) + (("&key=" + urllib.parse.quote(KEY)) if KEY else "")
        with urllib.request.urlopen(u, timeout=90) as r:
            d = json.loads(r.read().decode())
        ans = (d.get("answer") or "").strip() or "(boş cevap)"
        srcs = d.get("sources") or []
        if srcs:
            lines = "\n".join("- [" + str(s.get("kind")) + "] " + str(s.get("name", ""))[:70] + " — " + str(s.get("url", "")) for s in srcs)
            ans += "\n\nKaynak kartlar:\n" + lines
        return ans
    except Exception as e:
        return "Vektra sorgu hatası: " + str(e)

def send(msg):
    data = (json.dumps(msg, ensure_ascii=False) + "\n").encode("utf-8")
    sys.stdout.buffer.write(data)
    sys.stdout.buffer.flush()

def main():
    for raw in sys.stdin:
        line = raw.strip()
        if not line:
            continue
        try:
            req = json.loads(line)
        except Exception:
            continue
        mid = req.get("id")
        method = req.get("method")
        if method == "initialize":
            send({"jsonrpc": "2.0", "id": mid, "result": {
                "protocolVersion": (req.get("params") or {}).get("protocolVersion", "2025-06-18"),
                "capabilities": {"tools": {}},
                "serverInfo": {"name": "vektra", "version": "1.0.0"},
            }})
        elif method == "tools/list":
            send({"jsonrpc": "2.0", "id": mid, "result": {"tools": TOOLS}})
        elif method == "tools/call":
            p = req.get("params") or {}
            if p.get("name") == "vektra_ask":
                text = ask((p.get("arguments") or {}).get("question", ""))
                send({"jsonrpc": "2.0", "id": mid, "result": {"content": [{"type": "text", "text": text}]}})
            else:
                send({"jsonrpc": "2.0", "id": mid, "error": {"code": -32601, "message": "unknown tool"}})
        elif method and method.startswith("notifications/"):
            pass  # no response to notifications
        elif mid is not None:
            send({"jsonrpc": "2.0", "id": mid, "error": {"code": -32601, "message": "unknown method"}})

if __name__ == "__main__":
    main()
