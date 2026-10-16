# Board STATUS: the single source of truth for the next run

_Last updated: 2026-10-16 by the main session (facilitator), at the end of Board Session 1._

## Owner decisions in force
| Date | Decision |
|---|---|
| 2026-10-02 | Full delivery authorization: implement → PR → CI + Auto Merge → deploy → smoke (AGENTS.md/CLAUDE.md header). |
| 2026-10-15 | New Conversation/Listening classes are 3D worlds with both modes (AGENTS.md). |
| 2026-10-16 | Executive Board constituted (OWNER-MANDATE-2026-10-16.md). |
| 2026-10-16 | "3 lessons/week" = **3 shipping units/week**: a new world, a genuinely authored new level, or a gated repair reported as a repair. |
| 2026-10-16 | Board PRs may merge and therefore **auto-deploy** (merge → staging → production) once the local checks pass and the independent review is resolved. This applies to scheduled routines too. |

## Critical facts (verified 2026-10-16)
- **Merging is a production deploy.** `ci-automerge.yml` dispatches `deploy-staging.yml` after a merge, and staging success dispatches `deploy-production.yml` (gate `OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true`, no environment reviewer). Opening a PR as non-draft starts that chain.
- **Discoverability is the binding constraint.** In 90 days, 30 of 241 sitemap URLs had any impressions, with about 200 impressions and 3 clicks in total. Every 3D world redirects anonymous users and crawlers to `/acceso`.
- **TTFB is about 1.0–1.2 s on every Worker-served URL**, including cache HITs and `/robots.txt`, while static assets take 33–41 ms. Sofia measured it and the facilitator reproduced it, both from one vantage point. The cause is unverified.
- **The GA4 property 553569142 returned 0 rows in 30 days.** Analytics fires only after consent (Alejandro, from code), so this needs R2.

## Backlog (from BOARD-DECISION-001 v3 §5; ranks are binding unless new evidence appears)
| Rank | Item | Owner → reviewer | State |
|---|---|---|---|
| 1 | SEO-001 /argento hreflang fix + `?lang=` regression guard | Alejandro → Sofia | IN PROGRESS (see below) |
| 2 | PERF-001 TTFB root cause, time-boxed to 1 day | Sofia → Alejandro | NEXT |
| 3 | GROW-001 indexable Noche Abierta teacher page + one new LQG-passed free circle | Martin (content) → Sofia (build); G4 review by Alejandro or a fresh agent | after PERF-001 |
| 4 | LES-001 Feria A2 on the minimal kit (LESSON-DECISION-001 v5) | Martin → Sofia; G4 by Alejandro or a fresh agent | after GROW-001 |
| 5 | SEO-002 consolidation vs. cluster deepening, decided by R1 | Alejandro | blocked on R1 |
| 6 | PERF-002 CI chunk-size gate | Sofia | open |
| 7 | Cluster 3 "online tutors" (only if Search Console shows the demand) | Alejandro | blocked on evidence |
| 8 | Feria AC12 pilot design | Martin | post-launch |

## Owner data requests (open)
- **R1:** Search Console Page-indexing report, Core Web Vitals report and per-query impressions. The Windsor connector exposes only search analytics and sitemaps.
- **R2:** GA Admin: which property `G-6C7DY2C5LN` reports to.
- **R3:** a weekly aggregate-only D1 query (new accounts, first payments, opened/completed per 3D lesson). Agents never query production D1.

## Scheduled routines (created 2026-10-16; manage at https://claude.ai/code/routines)
| Routine | ID | Cron (UTC) | Connectors |
|---|---|---|---|
| Mon 3D unit | trig_01Br4CeKuff8Hah7Ctjt3RMG | `0 2 * * 1` | none |
| Tue SEO | trig_013afuTHUqNwz6XsHqhCjnNL | `0 2 * * 2` | Windsor-ai |
| Wed 3D unit | trig_01U8ndh2v8paWfR4wDttphJT | `0 2 * * 3` | none |
| Thu reliability review | trig_01WH3JAAa6nP6JWfW8pPy7Xa | `0 2 * * 4` | Cloudflare (read-only use) |
| Fri 3D unit + assessment | trig_01HbNLv713jD5ZH4rn9qx6za | `0 2 * * 5` | Windsor-ai |

All five run on `claude-opus-5-5`, follow [ROUTINES.md](ROUTINES.md), and each is an isolated cloud session. **Limitations:**
- whether a cloud run can convene the three executives with Agent/SendMessage is unverified until the first run, and a run that cannot must say so;
- runs stop when subscription usage is exhausted;
- nothing runs between fires.

## Usage observations
- Subscription usage: **UNKNOWN**. Not exposed to any session.
- Board Session 1 cost about 25 research tool calls per executive and 35 inter-executive messages for deliberation plus the vote.
- Session 0 (lesson test) took 55 messages, about 15 of them caused by crossed messages over circle 6. That led to the lock rule.

## Current work and next action
- SEO-001: Alejandro is implementing on `claude/seo-001-hreflang-lang-guard`. **Next action:** finish Sofia's review, mark the PR ready, verify the merge, and smoke `/argento` in production.
- Board records: this PR (`claude/board-records-20261016`).

## Recovery
- Read this file first, then CONSTITUTION.md, ROUTINES.md and the latest decision.
- Verbatim message history is in `transcripts/`. If a run was interrupted, check `gh pr list --state open` for `claude/*` board branches and continue from their last pushed commit.
