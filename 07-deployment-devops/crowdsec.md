---
name: CrowdSec
stage: 07-deployment-devops
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/crowdsecurity/crowdsec
---

# CrowdSec

**What it does:** Open-source, collaborative intrusion-prevention system (IPS) that parses logs to detect and block malicious IPs — a modern fail2ban successor with crowd-sourced blocklists.

**Stage / workflow:** Deployment & DevOps — runtime security hardening for your VPS and exposed services.

**Cost model:** Free and self-hostable (open source). Optional paid console/enterprise tiers; the core engine and community blocklists are free.

**Connection to Claude/n8n:** self-host (reference). Runs as a security agent on the host; not invoked by Claude directly.

**Connection recipe:**
```bash
# Debian/Ubuntu (canonical repo install)
curl -s https://install.crowdsec.net | sudo sh
sudo apt install crowdsec
# Add a bouncer to actually drop traffic
sudo apt install crowdsec-firewall-bouncer-iptables
```

**When to use it:** Hardening any internet-facing VPS against brute-force, scanning, and credential-stuffing attacks.

**Why it's useful:** Deployable as a Coolify/host-level service to protect the n8n, Supabase, and LiteLLM endpoints exposed on the VPS.

**Notable alternatives:** fail2ban, Wazuh, Suricata.
