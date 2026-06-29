---
name: authentik
stage: 04-backend-database
type: app
cost: self-hostable
conn_type: self-host
status: active
added: 2026-06-27
source_url: https://github.com/goauthentik/authentik
---

# authentik

**What it does:** Self-hosted identity provider (IdP) with SSO, OAuth2/OIDC, SAML, LDAP, and MFA — an open Okta/Auth0 alternative.

**Stage / workflow:** Backend — central identity and SSO layer across multiple apps/services.

**Cost model:** Self-hostable, open source. Free when self-hosted; enterprise tier also available.

**Connection to Claude/n8n:** Self-hosted IdP; apps and n8n authenticate via OIDC/SAML against it.

**Connection recipe:**
```bash
# official Docker Compose install
wget https://goauthentik.io/docker-compose.yml
docker compose up -d
# production: deploy via Coolify (Docker Compose)
```

**When to use it:** When you have several apps/services needing unified SSO and centralized identity, self-hosted on EU infra.

**Why it's useful:** Self-hosts on Coolify; provides one EU-resident SSO layer in front of multiple self-hosted tools (n8n, Open WebUI, etc.).

**Notable alternatives:** Keycloak (mature, heavier IdP); Zitadel (modern self-hosted IdP); Auth0/Okta (hosted, US, paid).
