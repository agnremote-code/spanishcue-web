# Board STATUS: the single source of truth for the next run

_Last updated: 2026-10-21 by the Wednesday 3D routine (scheduled cloud run; facilitator plus Martin, Sofia and Alejandro as agents and one fresh QA agent, see "Current work")._

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
| 2026-10-16 | Owner priority, verbatim: "give priority to grammar and 3d conversation/listening premier pro classes (keeping our style)". PRO grammar and PRO 3D Conversation/Listening come before GROW-001 and other SEO-led items ([BOARD-DECISION-002](decisions/BOARD-DECISION-002.md)). |
| 2026-10-17 | Owner rule, verbatim: "always save the work in case internet goes down". Commit after every coherent step and push the `claude/*` branch immediately (pushing never deploys). |
| 2026-10-17 | Owner directive: resume roles in **parallel streams**: technical SEO = Alejandro, immersive 3D = Sofia, QA/integration = Martin. No unnecessary debate; auto-claim the next task; coordinate files and branches; don't start what can't be finished. |
| 2026-10-17 | **No deploys this session.** Deploy permission was not granted, so every PR stays draft. Nobody marks ready, merges, dispatches workflows or pushes to main. QA marks "QA: RELEASE-READY at <sha>" in a PR comment, and the owner releases. |

## Critical facts (verified 2026-10-16)
- **Release rule: only one PR in the merge/deploy pipeline at a time.** Before marking a PR ready, check open ready PRs, running CI/Deploy workflows and that `refs/heads/automation/merge-lock` is absent. A missing check is a review blocker. (Origin: production run 38930549382 for `afe203f` refused safely because #219 held the merge-lock.)
- **Merging is a production deploy.** `ci-automerge.yml` dispatches `deploy-staging.yml` after a merge, and staging success dispatches `deploy-production.yml` (gate `OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true`, no environment reviewer). Opening a PR as non-draft starts that chain.
- **Discoverability is the binding constraint.** In 90 days, 30 of 241 sitemap URLs had any impressions, with about 200 impressions and 3 clicks in total. Every 3D world redirects anonymous users and crawlers to `/acceso`.
- **TTFB fixed (PERF-001, 2026-10-17).** Every Worker-served URL used to take about 1 s because the isolate heap (133.7 MiB at startup in workerd) exceeded Cloudflare's 128 MB per-isolate limit, so a new isolate started for every request (mechanism consistent with the outcome; isolate memory not directly observed). With the paid chunk bodies moved out of the bundle, median server time is about 12 ms (see [perf-001-notes.md](perf-001-notes.md)). Heap headroom is about 25 MiB, guarded by the 36 MiB bundle budget in `tests/worker-startup.test.mjs`.
- **The GA4 property 553569142 returned 0 rows in 30 days.** Analytics fires only after consent (Alejandro, from code), so this needs R2.

## Backlog (BOARD-DECISION-002, locked 2026-10-17; supersedes the BOARD-DECISION-001 v3 §5 order)
Parallel streams: **3D = Sofia**, **technical SEO = Alejandro**, **QA/integration = Martin**. PRO order: LES-001 Feria first, then the «Gustar» A1 grammar class. GROW-001 is paused.

| Rank | Item | Owner → reviewer | State |
|---|---|---|---|
| 1 | LES-001 «La feria de Villaluz» A2 PRO 3D world (LESSON-DECISION-001 v5 + BOARD-DECISION-001 overlays) | Martin (content) → Sofia (build); G4 by Alejandro or a fresh agent; QA Martin | **Deployed 2026-10-21**: PR #251 → `6383b3b6`, production run 39549567404 (workflow smoke passed). The changed-URL smoke is still owed (see Current work). Open follow-ups: G5(b) real-device check (featured flag stays off until then), T5 fps on a real Android, the cover still shows the baile host in its old spot |
| 2 | «Gustar y verbos como gustar» A1 PRO grammar class (`a1.gram.gustar`, `a1.gram.tambien-tampoco`, A2 ext. `a2.gram.doler`; house format of `new-lessons.json`) | Martin (content) → Sofia or a fresh agent (wiring); G4 Alejandro | after the Feria content |
| P | Technical SEO, highest impact first (parallel stream) | Alejandro → Sofia (code review), Martin (QA) | First fix = PR #224, **merged `c06c01c` and deployed 2026-10-20** (production run 39359743902, workflow smoke passed). The changed-URL content smoke is still owed (PUBLISHED.md, Pending verification) |
| P+1 | COMP-001 ProfeDeELE.com benchmark (plan below) | Alejandro + Martin | after the first technical SEO fix |
| — | GROW-001 build | Sofia | **PAUSED** (content approved in #220, kept in `docs/board/content/`) |

### Previous backlog (BOARD-DECISION-001 v3 §5, for reference)
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
- **R0 (2026-10-20, blocking SEO measurement):** Windsor.ai paused all reads: "reads are paused because you have 6 accounts connected and your Free plan includes 1 account". Every `searchconsole` query returns that placeholder row with 0 values. Fix: disconnect the 5 extra accounts at https://onboard.windsor.ai/app/ (keep `sc-domain:spanishcue.com`) or upgrade. The board may not buy paid plans. The owner was notified by push on 2026-10-20. Until this is fixed there is no fresh Search Console evidence; the last real numbers are from 2026-10-17 (PR #224 body).
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
- **2026-10-21 (Wednesday 3D routine): LES-001 Feria A2 built, gated and sent to release in PR #251** (branch `claude/escucha-3d-feria-a2-20261021`). Subscription usage: **UNKNOWN**.
  - **The board was convened as agents.** Martin authored the content, Sofia did the render check, build fixes and wiring, Alejandro did the G4 review, and a fresh agent did QA. The facilitator did integration, commits and records. Every message went between the facilitator and one executive, and the executives did not message each other. All messages are archived verbatim in [transcripts/2026-10-21-wednesday-3d-feria.md](transcripts/2026-10-21-wednesday-3d-feria.md).
  - **Found at start:**
    - Monday 2026-10-19 left no board PR or record.
    - The 2026-10-17 Feria build sat unmerged and was never opened as a PR:
      - `claude/feria-a2-20261017` and `claude/escucha-3d-feria-20261017`, the shell plus 8 listening mp3s;
      - `claude/les-001-feria-content-20261017`, the G4 round-1 edits.
    - STATUS did not mention them. This run carried them onto main `28d852a`.
  - **Done:**
    - Ported the G4 round-1 edits.
    - Martin authored circles 1, 6 and 7, plus 7 Busca sets (6 find, 1 unseen transfer).
    - Alejandro's G4 review: R1–R7 required, all closed. **G4 VERDICT: APPROVE** ([review](../audits/la-feria-de-villaluz-g4-review-20261021.md)), plus the [N1 LQG file](../audits/la-feria-de-villaluz-pedagogy-20261021.md).
    - Sofia's SwiftShader render of the Look contract at DPR 1.25 and ~8–9 m (**not** the real-device G5(b) check) found about half the attributes illegible. The D6 contract update means only legible values may distinguish candidates ([evidence](evidence/feria-look-contract.md) §5–§7), and Martin reworked 5 sets to match.
    - Busca framing fixed: the camera, host and pole occlusions, and phone-portrait framing.
    - Low-mode draw calls went from a median of 288 (max 618) to a maximum of 98 under the T5 ≤120 budget.
    - Catalog row 241 is in the Conversación route and the 3D `/resources` map, with `featured:false` until G5(b).
    - Added the cover and a 241 hover clip.
    - All 15 TTS clips were regenerated by the Escucha 3D audio workflow (runs 39531439467, 39532680534, 39533778785, 39542467174), and their hashes were verified current.
  - **Checks at `d7299793`:**
    - `npm test`: exit 0 (1,228 pass).
    - lint: 0 errors.
    - `validate:artifact`: OK.
    - `git diff --check`: clean.
    - `tsc`: only the 3 errors already on main.
    - Browser smoke (`scripts/qa-feria-browser.mjs`): 76/76.
    - check-feria: 763/763.
    - **QA: RELEASE-READY at d7299793**: no blockers, 4 notes.
  - **Not verified:**
    - the G5(b) real-device check;
    - fps on a real Android;
    - nobody has listened to the TTS clips;
    - the AC12 pilot (post-launch).
  - **Release:**
    - PR #251 merged as `6383b3b6de1d09398523619bedca77602da7fd06`.
    - Runs: CI + Auto Merge 39547852346, staging 39549313371 and production 39549567404, all successful.
    - The production workflow's own smoke passed (`"passed": true`, origin https://spanishcue.com) and the rollback was skipped.
    - Before marking ready, the run waited for #252 (another agent's security PR) to finish deploying (production run 39547506213), then merged main `06753def` and re-ran the full checks (`npm test` exit 0, 1,236 pass).
    - **Changed-URL smoke not yet run:** this sandbox, WebFetch and the staging host are all blocked by the egress proxy. So LES-001 stays under "Pending verification" in PUBLISHED.md.
  - **QA notes left for a follow-up:**
    - dispose textures in World3D cleanup;
    - wire the level radios when a second level ships;
    - re-render the cover;
    - G4 non-blocking recommendations R2-a and R2-b, and round-1 items 10–12.
  - **Next action:**
    - **Thursday:** run the still-owed #224 content smoke (below) plus the Feria smoke:
      - `/la-feria-de-villaluz` anonymous → 302 `/acceso`;
      - `/resources/spanish-conversation-activity-a2-la-feria-de-villaluz` → 200 with the 3D title;
      - `/audio/escucha-3d/feria-a2-baile.mp3` → 403.
      - Then move the PUBLISHED.md entries to Published.
    - **Friday 3D slot:** BOARD-DECISION-002 rank 2, the «Gustar y verbos como gustar» A1 PRO grammar class (Martin authors). Or, if the owner's QA device becomes available, the Feria G5(b) check.
- **2026-10-20 (Tuesday SEO routine).** The board was **not convened** as three named agents. The facilitator session did the integration work, and one fresh agent acting as Martin (QA) did the independent re-review. No inter-agent dialogue happened beyond that one review request and report, so nothing new is archived in `transcripts/`. Subscription usage: **UNKNOWN**.
  - Search Console: **BLOCKED** (R0 above). No rankings or traffic are reported for this run.
  - Since the last STATUS: Codex merged #227 (Noche Abierta teacher tools), #228 (the two `/lp/` purchase landings made indexable) and #229 (commercial-intent landing copy, competitor wording in `docs/seo-strategy.md`). Production deploy 39249910157 for `9030409` succeeded, and the scheduled smoke monitor stayed green on 2026-10-19.
  - PR #224 (technical SEO fix 1): merged `origin/main` (`9030409`, clean) and the stale board docs branch of draft #223 (BOARD-DECISION-002 + the ROUTINES save rule), so the decision record and this STATUS reach main in one PR with one writer. #223 is carried by #224. BOARD-DECISION-002 §1.4 "no deploys" was scoped to the 2026-10-17 session only; the 2026-10-16 routine authorization applies here.
  - Open, not touched: #209 (Codex, Google Ads label, `merge` job red since 2026-10-16; not a board PR), #226 (draft, SC monogram), #225 (draft, COMP-001 evidence pass 1).
  - **Result:** #224 was marked ready after QA RELEASE-READY at `990d1366` and full local checks (`npm test` exit 0, lint 0 errors, validate:artifact OK, diff-check clean, tsc showing only the 3 errors already on main). It merged as `c06c01c` (CI 39358483836); staging 39359479235 and production 39359743902 both succeeded, and the workflow's production smoke passed. **Not done:** the changed-URL content smoke, because this sandbox cannot reach spanishcue.com (proxy `connect_rejected`). **Thursday's run must do it first:** `curl -s https://spanishcue.com/resources/spanish-conversation-activity-a0-c2-hospital-san-casi-vivo` → `<title>` starts "3D Spanish Conversation Activity A0–C2", `"educationalLevel":["A0",…]`, BreadcrumbList and "Inside the 3D world" present; `/hospital-san-casi-vivo` anonymous → 302 `/acceso`. Then move the PUBLISHED.md entry to Published.
  - Lesson learned: the English-copy guard needs full git history (BASE_SHA 43e4b3e). On the shallow cloud clone, run `git fetch --unshallow origin` before `npm test`, or `test:language` fails with "not a tree object".
  - **Next action (next Tuesday, or earlier capacity):** once R0 is fixed, pull 28-day page/query data and compare `/resources/*` 3D pages against the 2026-10-17 baseline (0 impressions on 125 `/resources/*` pages). Then COMP-001 pass 2 on PR #225, reconciling it with Codex's 2026-10-19 competitor wording in `docs/seo-strategy.md` (Lesson Here, ELETUTOR, Linguas). The 3D stream (LES-001 Feria) is unchanged: Monday/Wednesday slots.
- **2026-10-17 (Alejandro):** BOARD-DECISION-002 locked (this PR). Next: Martin authors the LES-001 Feria content; Sofia starts the Feria engine and the Look-attribute contract; Alejandro runs the technical SEO audit and fix on a separate `claude/*` branch. All PRs stay draft this session.
- SEO-001: done and verified in production (see PUBLISHED.md).
- Board records PR #218 merged as `afe203f` (its deploy was in progress when the session closed; the next run should verify it with `gh run list`).
- **PERF-001: DONE** (2026-10-17). PR #221 merged as `e3c42f1`. Staging 38938666820 and production 38938998017 both succeeded, and smoke plus timing passed (see PUBLISHED.md). Remaining blind spot: authorized paid-chunk delivery could not be smoked without a paid session. Any paid-user report of a lesson failing to load triggers a revert of #221. PERF-001 phase 2 (`app-worker.js` 13.8 MB, `ssr/` 23 MB) is optional headroom work, not urgent.
- GROW-001 content PR #220 is live (merged as `30bf6f2`).
- **Next action: GROW-001 build** (Sofia), following the handoff below. Alejandro does the SEO review. Then LES-001. COMP-001 runs in the Tuesday SEO slot.
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
