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
| 2026-10-16 | **Full creative ownership of all future 3D lessons.** The board brainstorms, selects, designs, builds, tests, reviews and publishes original lessons on schedule. The owner will NOT supply topics, stories, characters, locations or ideas, and does not approve routine deployments. Priorities: pedagogical quality, originality, realistic environments, natural dialogue, listening, SEO. Existing production safeguards stay. Every publication is reported in [PUBLISHED.md](PUBLISHED.md). |
| 2026-10-16 | The owner reaffirmed **total autonomy** to publish the best classes without his authorization, and set the goal of working **better than ProfeDeELE.com** and every competitor. **ProfeDeELE.com is the primary competitive benchmark.** Its offer, the teacher searches it wins, and where SpanishCue can be clearly better are to be researched with real evidence (not yet done). |

## Critical facts (verified 2026-10-16)
- **Merging is a production deploy.** `ci-automerge.yml` dispatches `deploy-staging.yml` after a merge, and staging success dispatches `deploy-production.yml` (gate `OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true`, no environment reviewer). Opening a PR as non-draft starts that chain.
- **Discoverability is the binding constraint.** In 90 days, 30 of 241 sitemap URLs had any impressions, with about 200 impressions and 3 clicks in total. Every 3D world redirects anonymous users and crawlers to `/acceso`.
- **TTFB is about 1.0–1.2 s on every Worker-served URL**, including cache HITs and `/robots.txt`, while static assets take 33–41 ms. Sofia measured it and the facilitator reproduced it, both from one vantage point. The cause is unverified.
- **The GA4 property 553569142 returned 0 rows in 30 days.** Analytics fires only after consent (Alejandro, from code), so this needs R2.

## Backlog (from BOARD-DECISION-001 v3 §5; ranks are binding unless new evidence appears)
| Rank | Item | Owner → reviewer | State |
|---|---|---|---|
| 1 | SEO-001 /argento hreflang fix + `?lang=` regression guard | Alejandro → Sofia | **DONE**: PR #217, `6c7379b`, verified in production 2026-10-16 |
| 2 | PERF-001 TTFB root cause, time-boxed to 1 day | Sofia → Alejandro | NEXT |
| 3 | GROW-001 indexable Noche Abierta teacher page + one new LQG-passed free circle | Martin (content) → Sofia (build); G4 review by Alejandro or a fresh agent | after PERF-001 |
| 4 | LES-001 Feria A2 on the minimal kit (LESSON-DECISION-001 v5) | Martin → Sofia; G4 by Alejandro or a fresh agent | after GROW-001 |
| 5 | SEO-002 consolidation vs. cluster deepening, decided by R1 | Alejandro | blocked on R1 |
| 6 | PERF-002 CI chunk-size gate | Sofia | open |
| 7 | Cluster 3 "online tutors" (only if Search Console shows the demand) | Alejandro | blocked on evidence |
| 8 | Feria AC12 pilot design | Martin | post-launch |
| — | **COMP-001** ProfeDeELE.com benchmark: their offer, formats, pricing, the teacher queries they win, and the gaps SpanishCue can win with evidence. Feeds concept selection and SEO-002. | Alejandro (lead) + Martin (pedagogy) | next Tuesday SEO slot, or earlier if capacity allows |

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
- SEO-001: done and verified in production (see PUBLISHED.md).
- **Next action: PERF-001** (Sofia, time-boxed to 1 day): root-cause the ~1 s TTFB, then fix it or document the hosting limit. Then GROW-001. Run COMP-001 (ProfeDeELE.com benchmark) in the next Tuesday SEO slot.
- Board records: this PR (`claude/board-records-20261016`).

## Recovery
- Read this file first, then CONSTITUTION.md, ROUTINES.md and the latest decision.
- Verbatim message history is in `transcripts/`. If a run was interrupted, check `gh pr list --state open` for `claude/*` board branches and continue from their last pushed commit.

## COMP-001 plan (Alejandro, 2026-10-16; not started)
1. **Their offer.** Catalogue, levels, free vs. paid split, prices: quoted from their own pages with dates, each marked VERIFIED (with URL) or UNKNOWN. Formats (PDF, interactive, video, lesson plans) and audience. Their homepage returned a 307 on an earlier fetch, so follow the redirect.
2. **Searches they win.** For our tracked queries and their category terms ("actividades ELE", "fichas español", "preguntas de conversación", "recursos para profesores de español"): who ranks in the top 10, from live results, our Search Console and their sitemap structure. No invented traffic.
3. **Where SpanishCue can be clearly better.** Compare the same teaching task on both sites against the Indexable Teacher Page standard. Interactive, screen-shareable 3D with conversation and listening in one world is a HYPOTHESIS until checked. Output a gap table and score it into the backlog as a new board decision.
- Lead: Alejandro. Pedagogical comparison: Martin. UX and performance comparison: Sofia.
