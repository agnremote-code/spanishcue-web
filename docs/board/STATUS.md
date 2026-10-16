# Board STATUS: the single source of truth for the next run

_Last updated: 2026-10-17 by Sofia, after PERF-001 shipped and was verified in production._

## Owner decisions in force
| Date | Decision |
|---|---|
| 2026-10-02 | Full delivery authorization: implement → PR → CI + Auto Merge → deploy → smoke (AGENTS.md/CLAUDE.md header). |
| 2026-10-15 | New Conversation/Listening classes are 3D worlds with both modes (AGENTS.md). |
| 2026-10-16 | Executive Board constituted (OWNER-MANDATE-2026-10-16.md). |
| 2026-10-16 | "3 lessons/week" = **3 shipping units/week**: a new world, a genuinely authored new level, or a gated repair reported as a repair. |
| 2026-10-16 | Board PRs may merge and therefore **auto-deploy** (merge → staging → production) once the local checks pass and the independent review is resolved. This applies to scheduled routines too. |
| 2026-10-16 | **Full creative ownership of all future 3D lessons.** The board brainstorms, selects, designs, builds, tests, reviews and publishes original lessons on schedule. The owner will NOT supply topics, stories, characters, locations or ideas, and does not approve routine deployments. Priorities: pedagogical quality, originality, realistic environments, natural dialogue, listening, SEO. Existing production safeguards stay. Every publication is reported in [PUBLISHED.md](PUBLISHED.md). |
| 2026-10-16 | Owner, verbatim: "dont ask me anything just execute without breaking the website, thats the only condition, i trust your opinions just talk to each other and solve". **The board never asks the owner. It decides and ships**, including changes to the request path. The hard bars are: full tests, an independent review, staging and production smoke, and a revert PR as the default response to any regression. |
| 2026-10-16 | The owner reaffirmed **total autonomy** to publish the best classes without his authorization, and set the goal of working **better than ProfeDeELE.com** and every competitor. **ProfeDeELE.com is the primary competitive benchmark.** Its offer, the teacher searches it wins, and where SpanishCue can be clearly better are to be researched with real evidence (not yet done). |

## Critical facts (verified 2026-10-16)
- **Merging is a production deploy.** `ci-automerge.yml` dispatches `deploy-staging.yml` after a merge, and staging success dispatches `deploy-production.yml` (gate `OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true`, no environment reviewer). Opening a PR as non-draft starts that chain.
- **Discoverability is the binding constraint.** In 90 days, 30 of 241 sitemap URLs had any impressions, with about 200 impressions and 3 clicks in total. Every 3D world redirects anonymous users and crawlers to `/acceso`.
- **TTFB fixed (PERF-001, 2026-10-17).** Every Worker-served URL used to take about 1 s because the isolate heap (133.7 MiB at startup in workerd) exceeded Cloudflare's 128 MB per-isolate limit, so a new isolate started for every request. With the paid chunk bodies moved out of the bundle, median server time is about 12 ms (see [perf-001-notes.md](perf-001-notes.md)). Heap headroom is about 25 MiB, guarded by the 36 MiB bundle budget in `tests/worker-startup.test.mjs`.
- **The GA4 property 553569142 returned 0 rows in 30 days.** Analytics fires only after consent (Alejandro, from code), so this needs R2.

## Backlog (from BOARD-DECISION-001 v3 §5; ranks are binding unless new evidence appears)
| Rank | Item | Owner → reviewer | State |
|---|---|---|---|
| 1 | SEO-001 /argento hreflang fix + `?lang=` regression guard | Alejandro → Sofia | **DONE**: PR #217, `6c7379b`, verified in production 2026-10-16 |
| 2 | PERF-001 TTFB root cause, time-boxed to 1 day | Sofia → Alejandro | **DONE**: PR #221, `e3c42f1`, verified in production 2026-10-17 (server time ~1.0 s → ~12 ms) |
| 3 | GROW-001 indexable Noche Abierta teacher page + one new LQG-passed free circle | Martin (content) → Sofia (build); G4 review by Alejandro or a fresh agent | **Content APPROVED** (G4 Alejandro, 2026-10-16, PR #220): A2 `a2.fun.favores`, «El ascensor no funciona». **Next: Sofia builds** after PERF-001 |
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
- Board records PR #218 merged as `afe203f` (its deploy was in progress when the session closed; the next run should verify it with `gh run list`).
- **PERF-001: DONE** (2026-10-17). PR #221 merged as `e3c42f1`. Staging 38938666820 and production 38938998017 both succeeded, and smoke plus timing passed (see PUBLISHED.md). Remaining blind spot: authorized paid-chunk delivery could not be smoked without a paid session. Any paid-user report of a lesson failing to load triggers a revert of #221. PERF-001 phase 2 (`app-worker.js` 13.8 MB, `ssr/` 23 MB) is optional headroom work, not urgent.
- **Next action: GROW-001 build** (Sofia), following the handoff below. Then LES-001. COMP-001 runs in the Tuesday SEO slot.
- _History:_ PERF-001 was IN PROGRESS when the interactive session closed (2026-10-16). Sofia was told to checkpoint to the draft PR on `claude/perf-001-ttfb-20261016`, with notes in `docs/board/perf-001-notes.md`. If it exists, the next run (any slot: Thursday's reliability review is the natural owner) finishes it. Required before marking ready: Alejandro or a fresh agent reviews it, the full checks pass, and the post-deploy smoke covers /, /robots.txt, /sitemap.xml, /spanish-grammar-lessons, /argento, /acceso, a /resources/ page, an anonymous PRO 3D route (must redirect to /acceso) and unauthenticated /api/progress (must refuse). If the branch does not exist, restart PERF-001 from the spec.
- _Original next action (done):_ PERF-001, then GROW-001. Run COMP-001 (ProfeDeELE.com benchmark) in the next Tuesday SEO slot.
- Board records: this PR (`claude/board-records-20261016`).
- **GROW-001 content: APPROVED** by Alejandro (G4, ~1 h) in PR #220, docs only. Content: `docs/board/content/grow-001-circle.md`, data `grow-001-circle.data.mjs`, LQG review `grow-001-lqg-review.md`. Level A2, objective `a2.fun.favores`, scene «El ascensor no funciona»: 3 linguistic contrasts, 1 conversation stimulus, 5 real-life questions, its own 119-word listening (ES/CO/MX voices), a 30-min route and 10 role cards. **Next: Sofia builds it after PERF-001**, following the handoff in `grow-001-circle.md` §6. That means: move the data under `app/`; add it to the FREE ledger with tests; generate the listening via the pipeline, with a narrow 1-item exemption; build the page poster-first, with SEO wiring per Alejandro (breadcrumb under the A2 hub, a hub link, a canonical on the clean path); and write the build PR's `docs/audits/grow-001-pedagogy-YYYYMMDD.md` with G3/G5 and the G4 conditions (a) only this circle's listening is free, with the PRO sentence verified against `app/access-policy.ts`; (b) option labels are never voiced; (c) the exemption names its exact path. Martin does G5 legibility.

## Recovery
- Read this file first, then CONSTITUTION.md, ROUTINES.md and the latest decision.
- Verbatim message history is in `transcripts/`. If a run was interrupted, check `gh pr list --state open` for `claude/*` board branches and continue from their last pushed commit.

## COMP-001 plan (Alejandro, 2026-10-16; not started)
1. **Their offer.** Catalogue, levels, free vs. paid split, prices: quoted from their own pages with dates, each marked VERIFIED (with URL) or UNKNOWN. Formats (PDF, interactive, video, lesson plans) and audience. Their homepage returned a 307 on an earlier fetch, so follow the redirect.
2. **Searches they win.** For our tracked queries and their category terms ("actividades ELE", "fichas español", "preguntas de conversación", "recursos para profesores de español"): who ranks in the top 10, from live results, our Search Console and their sitemap structure. No invented traffic.
3. **Where SpanishCue can be clearly better.** Compare the same teaching task on both sites against the Indexable Teacher Page standard. Interactive, screen-shareable 3D with conversation and listening in one world is a HYPOTHESIS until checked. Output a gap table and score it into the backlog as a new board decision.
- Lead: Alejandro. Pedagogical comparison: Martin. UX and performance comparison: Sofia.
