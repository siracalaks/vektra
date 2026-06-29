# Trust Scoring — How a tool earns its place in the library

Goal: remove the question mark in your head. A card is not trustworthy
because it lists a command — it's trustworthy because **signals prove the tool
is alive, adopted, and maintained**. This file is the transparent contract the
n8n ingestion engine (and any human reviewer) uses to score a candidate and
decide its `status`.

## New card frontmatter fields (added by ingestion / refresh)

```yaml
type: <agent | skill | mcp | mvp | library | app | reference>
stars: <int|null>            # GitHub stars
last_commit: <YYYY-MM-DD|null>
weekly_downloads: <int|null> # npm/PyPI last-week downloads
used_by: <int|null>          # GitHub "Used by" dependents
trust_score: <0-100|null>    # computed (formula below)
verified: <true|false>       # connection recipe actually tested
last_checked: <YYYY-MM-DD>   # when signals were last refreshed
```

`null` = signal not applicable (e.g. a hosted SaaS has no stars) or not yet
fetched. Null signals are skipped in scoring (re-normalize over present ones),
never counted as zero.

## Score formula (0–100, transparent & boring on purpose)

Four weighted components. Each maps a raw signal to 0–1, then weighted-summed.

| Component | Weight | 0 → 1 mapping |
|---|---|---|
| **Adoption** | 0.35 | stars and/or weekly_downloads and/or used_by, log-scaled: `min(1, log10(max(stars,1))/4.5)` (≈31k stars = 1.0); for libraries also blend `log10(weekly_downloads)/6` (1M dl = 1.0); take the max of available adoption signals |
| **Liveness** | 0.30 | last_commit recency: ≤3mo→1.0, ≤6mo→0.8, ≤12mo→0.5, ≤24mo→0.2, >24mo or archived→0 |
| **Source quality** | 0.20 | best tier the tool was found in: Tier1 official→1.0, Tier1/2 curated→0.8, Tier3 trending→0.4, Tier4 news-only→0.2 (see sources.yaml) |
| **Recipe verified** | 0.15 | `verified: true`→1.0 else 0 |

```
trust_score = round(100 * (
    0.35*adoption + 0.30*liveness + 0.20*source_quality + 0.15*verified
) / sum_of_weights_for_present_components)
```

Hosted SaaS (no repo) score on adoption (editorial/launch signals) + source
quality + verified only; weights renormalize.

## Score → status mapping

| trust_score | status | meaning |
|---|---|---|
| **≥ 70** | `active` | proven; recommend freely |
| **40–69** | `watch` | promising or uncertain — recommend with a caveat |
| **< 40** | `watch` | weak signal; keep but flag |
| archived / last_commit > 24mo / recipe broken | `deprecated` | do not recommend |

`status` is always derived from `trust_score` + the override rules, never set by
hand. Re-run on each quarterly refresh so the library self-heals as tools rise
and die.

## Auto-promote vs human review (the security gate)

The ingestion engine writes every new candidate's signals, computes the score,
then routes:

- **trust_score ≥ 70 AND found in a Tier 1 official / Tier 2 curated source** →
  may auto-promote into its stage folder + registry.
- **Everything else** (gray zone, Tier 3 social-only, anything executable it
  can't verify) → lands in `99-inbox/` for human review.

**Hard rule — never auto-promote executable code on signal alone.** Skills and
MCP servers run code and can carry injected instructions; Anthropic advises
auditing `SKILL.md` before install. A high score means "worth your 30 seconds,"
not "safe to run unseen." The human gate in `99-inbox/` is the safeguard — keep
it. (See [ingestion-workflow.md](ingestion-workflow.md) for the full routing.)

## Worked examples

- **better-auth** — stars≈18k, last_commit recent, verified true, Tier 2 curated.
  adoption≈0.95, liveness 1.0, source 0.8, verified 1.0 →
  score ≈ `100*(0.35*.95+0.30*1+0.20*.8+0.15*1)=`**93 → active**. ✅
- **clerk** — large adoption but hosted SaaS, US-only residency caveat, recipe
  fine. Scores high on adoption but the GDPR caveat is a *fit* concern, not a
  trust one → stays `watch` by editorial override (residency note in card),
  not by score. Documents why "watch" can be a judgment flag, not just a number.
- **dead-experimental-repo** — stars 40, last_commit 3 years ago, archived →
  liveness 0, adoption ≈0.3 → score ≈ `100*(0.35*.3+0)/...` ≈ 15, plus archived
  override → **deprecated**. ✅
