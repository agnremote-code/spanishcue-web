# BOARD-DECISION-001: Session 1 strategy, backlog and first task

- Date: 2026-10-16 · Board: Alejandro (CEO/CSO, drafter), Sofia (CPIO), Martin (CLRQO)
- Status: **v3, LOCKED (2026-10-16).** Both executives APPROVE conditional on the text edits applied here: Martin [B20]/[B22] (N4, §7 risk 4) and Sofia [B21] (G5(a), GROW-001 roles). The one objection round is complete, so no further rounds will be held. v3 = v2 + N4 exact wording + G5(a) wording + GROW-001 roles + risk 4 wording.
- Basis: board/OWNER-MANDATE-2026-10-16.md, board/EVIDENCE-2026-10-16.md, the repo at `3dd0ac4` (read-only), and the messages logged verbatim in team-logs/{Alejandro,Sofia,Martin}.md under "Board Session 1".
- **Nothing has been implemented yet.** Phase A (deliberation) only. No repo writes, PRs or deploys.

Labels: **V** = VERIFIED (path or URL given) · **H** = HYPOTHESIS · **U** = UNKNOWN.

## 1. Collective decision

SpanishCue's binding constraint is **discoverability, not catalogue size**. 241 sitemap URLs produced ~200 impressions and 3 clicks in 90 days (V, EVIDENCE), and every 3D world, our differentiator, returns 302 to `/acceso` for crawlers and anonymous visitors (V, Sofia: worker/index.ts:314; the only playable demo `/demo/noche-abierta` is noindex,nofollow, app/seo.ts:92-93).

For the next 90 days the board will do three things:
1. **Fix measurement and known technical SEO/performance defects first.**
2. **Make the 3D product visible** through intent-led, indexable teacher pages that embed a free, quality-gated playable circle.
3. **Keep shipping 3D lessons only through a Learning Quality Gate**, built on a Feria-scoped minimal World Kit.

All three proposals converged on these points. The remaining disagreement over order is resolved in §5.

## 2. Findings this session (evidence)

| # | Finding | Label | Source |
|---|---|---|---|
| F1 | Public `?lang=` URLs already 301 to the clean URL. The GSC `?lang=` duplicates are legacy and lagging | V | worker/index.ts:97-102, 262-265; app/seo.ts:130-137 |
| F2 | The one live hreflang defect: `/argento` declares `en` = `https://spanishcue.com/argento?lang=en`, which 301s (invalid hreflang target). It's the only file with this pattern | V | app/argento/layout.tsx:10 |
| F3 | Canonicals, the sitemap and SEO tests exist and are clean. **Whether the 211 zero-impression URLs are "not indexed" (thin/near-template `/resources/*`) or "indexed but unranked" is unknown.** The GSC indexing report decides which | H/U | app/layout.tsx:45-54; app/sitemap.ts; Sofia C1 |
| F4 | GA4 can't serve as our acquisition source of truth. The build defaults to `G-6C7DY2C5LN` (.github/workflows/deploy-production.yml:145), the queried property was "chespanish-32645" (possible mismatch, H), and `page_view` fires only after analytics consent (app/marketing/GoogleAnalytics.tsx:61; consent defaults denied, app/privacy/consent.ts) | V (code) / H (property) | as cited |
| F5 | The only near-page-1 queries are niche teacher intents: "visual spanish grammar" pos 6, /spanish-grammar-lessons 10.5, /spanish-conversation-activities 15.2, "preguntas para clase de conversación" 29. Per-query volumes are unknown | V / U | EVIDENCE |
| F6 | **TTFB ≈ 1.0–1.3 s on every Worker-routed HTML response, even on edge-cache HIT and on /robots.txt**, while static assets take 33–41 ms and TCP/TLS ≈ 30 ms. The time is spent before or around the edge-cache lookup. Cause unknown (bootstrap/isolate, or hosting overhead). One vantage point | V (measured twice: Sofia [B13], reproduced by facilitator [B16] from the same network, not an independent geography) / H (cause) | worker/index.ts:278-303 (identity awaits skipped for anonymous paths) |
| F7 | Progress: "opened" is already written on every signed-in lesson GET (worker/index.ts:325-326). Completion is never written by 3D worlds. Completion is sticky per account×lesson, so `MAX` means sessions can't be counted | V | db/progress.ts:14-40; Martin [B12] |
| F8 | Production D1 reads by agents aren't authorized. Registrations and paid counts are **U** until the owner runs or authorizes an aggregate query | V | CLAUDE.md:66 |
| F9 | Audience segment (tutor/adult vs school) isn't recorded anywhere | V | app/account-types.ts; db/schema.ts |
| F10 | 3D cadence is already ~2.2–2.9 new worlds/week. 5 catalogue entries claim A0–C2 in one world. The shell is re-implemented per world (10 own `WebGLRenderer`s) | V | app/lesson-catalog.ts addedAt; Sofia/Martin |
| F11 | Competition: the visible teacher-resource market is K-12 curriculum (McGraw-Hill ¡Así se dice!, World Language Cafe, Speak Latino) and free libraries (Share My Lesson). Paid platforms compete on **teacher-visible evidence**: Señor Wooly (~$16.58/mo annual, progress export) and Lingco (analytics). Immersive players need headsets (Immerse ~$45/mo on Quest; ImmerseMe VR/AI). A browser-based, headset-free, teacher-led, screen-shareable 3D product with authored CEFR levels has no direct match **in our limited searches** | V (vendor/press pages) / H (gap) | mheducation.com, worldlanguagecafe.com, sharemylesson.com, senorwooly.com, roadtovr.com, bestpractices.teslontario.org (URLs in logs) |
| F12 | Research: immersion raises presence but can lower learning and raise load (Makransky et al. 2019). VR/game L2 effects are small to moderate, best when the mechanic is the language task. Transfer to desktop 3D isn't established | V (abstracts) / H (transfer) | Martin [B3] |

## 3. Standing rules adopted

### 3.1 Non-votable (truthfulness, verified educational standards, permissions)
- **N1. Learning Quality Gate (LQG) audit file required.** No new lesson, new level, or indexable teacher page merges without `docs/audits/<lesson>-pedagogy-YYYYMMDD.md` covering:
  - G3: `npm run test:language`;
  - G4 substance: author ≠ reviewer;
  - G6: level honesty, so the catalogue `levels` lists only passed levels;
  - **beat labelling**: every interactive beat in a NEW lesson is labelled "linguistic contrast" (naming its exponent) or "conversation stimulus". No goal, metadata or guide claim of practising exponent X without a beat that targets X.
- **N2. No production D1 reads, writes or exports by agents** without explicit owner authorization (CLAUDE.md:66).
- **N3. The FREE/PRO ledger and its tests decide access.** No PRO content moves to free. An indexable preview's playable circle is a **new, LQG-passed authored unit**: one circle at one level, chosen, authored or reviewed per G4 by Martin. That's Martin's version, accepted by Sofia [B17], because the campaign slice in `app/immersive/demo-content.mjs` was never reviewed as a standalone lesson. It's added explicitly to the FREE ledger with tests, and it exposes no more than the existing public demo slice already does.
- **N4. E1 and any KPI built on it is reported only as** "accounts that have reached the closing of lesson X at least once ÷ accounts that opened lesson X; signed-in PRO accounts only; not learning; reaching the closing ≠ teaching the route". **It is never reported as learning or as a session count.** (Martin's text; completion is sticky per account × lesson, db/progress.ts:29-40, F7.)

### 3.2 Votable standards and guidelines (adopted by this decision)
- **Indexable Teacher Page standard** (Martin C3, as amended).
  - Every NEW cluster/guide/preview page has:
    - a stated CEFR level matching the content (PCIC as reference only);
    - one communicative objective;
    - ≥8 authored, classroom-usable prompts (no templated variants);
    - a teaching sequence of stated length;
    - test:language passing.
  - Otherwise it's noindex.
  - Existing pages are audited when touched, never noindexed retroactively without an audit.
  - The SEO structure (title, H1, schema, internal links) is Alejandro's; the pedagogy is Martin's.
- **G1**: one primary objective id per scene/circle from `app/autoestudio/curriculum/objectives/<level>.ts` plus 3–6 exponents, machine-checked.
- **G2-guideline**: new lessons SHOULD have ≥1 contrast beat per scene. It's not a blocker, and there's no retrofit.
- **G4 rotation**:
  - Martin-authored work is reviewed by Alejandro, or by a fresh strongest-model agent working only from the checklist and the diff.
  - Sofia- or agent-authored work is reviewed by Martin.
  - Alejandro-authored work is reviewed by Martin (pedagogy) and Sofia (code).
  - Each unit gets one level reviewed in full and machine checks on all levels. Add a spot check of a second level when a unit ships ≥3 levels.
  - Review takes ≤3 h per unit, and actual hours are reported weekly.
- **G5 rendered verification**:
  - (a) A per-PR SwiftShader smoke run: screenshots, non-blank canvas, no console errors, the 2D fallback renders, and the longest card per level is fully reachable at 390 px: no text clipped by overflow:hidden/clip, overflowing bodies are scroll containers whose last element scrolls into view, no horizontal overflow, and action buttons are reachable inside the card (Sofia/Martin wording).
  - (b) One real-device check per NEW world on the QA device.
  - (c) "Unverified" blocks the featured flag.
- **E1**:
  - progress = round(100 × route circles done ÷ route circles);
  - 100 only on the closing "Terminar";
  - it ships inside the Feria minimal kit.
- **E2 (class_records handoff) is dropped.** It reversed DECISION.md AM-7. It may return later as a clipboard-only summary.
- **The World Kit is scoped to "extract what Feria needs, as Feria is built".** There's no standalone kit milestone and no migration of shipped worlds. The ≤300-line shell target is measured on Feria.
- **Previews ship poster-first**, with WebGL on click and no video in MVP. Video comes later and must be scripted and reproducible.

### 3.3 Proposal to the OWNER (the board can't change the owner's target)
- Interpret "3 complete 3D lessons/week" as **3 shipping units/week**. A unit is a new world at ≥1 fully authored level, a genuinely authored new level of an existing world, or a gated repair. Each unit has its LQG audit file and is reported by type.
- Estimate (H): 1–2 new worlds/week is sustainable on the kit; 3 new worlds every week isn't, at the depth we've set.
- Until the owner answers, the board reports the weekly count truthfully against the literal target.

- **OWNER DECISION (2026-10-16, relayed by the facilitator [B33]): ACCEPTED.** "3 shipping units/week" as defined above is the operative target.

### 3.4 Requests to OWNER / main session (data, no code)
- R1. The GSC Page-indexing report for all sitemap URLs (indexed / crawled–not indexed / discovered–not indexed, with reasons), the GSC Core Web Vitals report, and per-query impressions for the cluster terms.
- R2. GA Admin: which property and stream `G-6C7DY2C5LN` reports to, and whether it matches 553569142.
- R3. The owner runs, or authorizes, a weekly aggregate-only D1 query: new accounts, first paid subscriptions, and opened/completed counts per 3D lesson. No PII.

## 4. 90-day strategy (2026-10-17 → 2027-01-15)

| Pillar | Days 1–30 | Days 31–60 | Days 61–90 | Leading indicator (no invented targets) |
|---|---|---|---|---|
| Organic search | hreflang fix + test. R1 data. **R1 decides: consolidate thin `/resources/*` vs. deepen clusters** | Cluster 1 "visual Spanish grammar" + cluster 2 conversation activities/preguntas (ES+EN), one investigation + implementation per week | Cluster 3 "online tutors" **only if** GSC shows tutor/online/adult queries (F9: audience UNVERIFIED) | Indexed count. Impressions and avg position per cluster query. Clicks as-is |
| Conversion | Funnel definition. R3 requested | Intent-led preview pages link to free circle → /acceso | Review the funnel with R3 data before any redesign | GSC clicks on preview pages. Owner-reported registrations (U until R3) |
| 3D innovation | Indexable Noche Abierta teacher page + embedded free circle | Feria A2 on the minimal kit (DECISION.md v5) | A preview page per new world | Preview URLs indexed. Feria shipped through LQG |
| Educational excellence | LQG and Indexable Teacher Page standard in force | Feria AC1–AC12 + LQG audit | Feria AM-8 / AC12 pilot design (3D vs 2D), post-launch | % of units with an audit file (target 100%, a rule). lesson_reports per lesson per 14 days |
| Loading performance | **TTFB ~1 s investigation** (time-boxed root cause) | Fix if the root cause is in our code. Otherwise document the hosting limit | CI size gate (initial/lazy JS +10% fails) | TTFB from ≥2 vantage points. CWV from GSC (R1) |
| Backend reliability | Thursday review per mandate §9 (the first one inventories routes, auth boundaries and CI health) | Regressions get tests | — | Defects found/fixed, with tests |
| Differentiation | Positioning: browser-based, headset-free, teacher-led 3D (F11, H) | Teacher-visible evidence: E1 completion in /cuenta (no PII, no migration) | — | Qualitative: teacher feedback via lesson_reports |
| Engineering efficiency | One implementer per task, targeted review | Kit extraction measured on Feria (≤300-line shell) | Kit reused by the next world | Shell lines per new world. Review hours per unit |

## 5. Ranked backlog

Scores are 1–5 (5 = best). Complexity and dependency risk are scored inversely, so 5 = simple / low risk. Total is unweighted.

| Rank | Item | Biz impact | Edu value | Evidence | Complexity (5=simple) | Dep. risk (5=low) | Total | Implementer | Reviewer(s) |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **SEO-001**: /argento hreflang fix + "no `?lang=` in any canonical/hreflang/sitemap" regression test + KPI-sheet spec (C1(b)+C2) + R1–R3 requests filed | 3 | 1 | 5 | 5 | 5 | 19 | Alejandro | Sofia (code) |
| 2 | **PERF-001**: TTFB ~1 s root-cause investigation, time-boxed to 1 day. Local `vinext start` timing plus a second vantage point. Fix only with a demonstrated cause | 4 | 1 | 4 | 3 | 3 | 15 | Sofia | Alejandro |
| 3 | **GROW-001**: indexable Noche Abierta teacher-intent page with an embedded free circle: a NEW LQG-passed one-circle, one-level unit per N3; poster-first, WebGL on click, honest JSON-LD, linked from the conversation hub | 5 | 4 | 3 | 2 | 2 | 16 | Sofia (page, embed, engine; SEO wiring per Alejandro). Circle content authored by Martin first (Spanish, objective, beats, teacher route) | Alejandro (SEO). **G4 content review: Alejandro or a fresh strongest-model agent (not Martin).** Martin: G5 legibility check only |
| 4 | **LES-001**: Feria A2 on the minimal kit with E1, G1/G2 fields and routes-as-data (DECISION.md v5) | 3 | 5 | 3 | 2 | 3 | 16 | Sofia (engine) after Martin authors the content | Martin (G5 legibility); content reviewed by Alejandro/fresh agent (G4) |
| 5 | **SEO-002**: consolidation or cluster 1–2 deepening, **as R1 dictates** | 4 | 3 | 2 (until R1) | 3 | 2 | 14 | Alejandro | Martin (pedagogy), Sofia (code) |
| 6 | **PERF-002**: CI chunk-size gate | 2 | 1 | 4 | 4 | 4 | 15 | Sofia | Alejandro |
| 7 | Cluster 3 "online tutors" | 3 | 2 | 1 | 3 | 2 | 11 | Alejandro | Martin |
| 8 | Feria AC12 pilot design (post-launch) | 2 | 4 | 2 | 3 | 2 | 13 | Martin | Alejandro |

**Ordering note (the call on the remaining disagreement).**
- Martin proposed Feria (#4) before the preview (#3). Sofia and I proposed the preview first, so the majority puts the preview first.
- Reason: Feria adds more PRO content to an audience that can't find us (§1), while the preview opens the first indexable 3D surface using already-public content.
- Martin's substantive concern, "the gate must exist before the next lesson merges", is fully kept as non-votable rule N1. It applies to the preview's circle as well, so nothing ungated merges in either order.
- PERF-001 is placed before GROW-001 even though its total is lower, because it's time-boxed to 1 day and affects all 241 URLs. A 1-day diagnosis is cheaper than shipping new pages that start with a 1 s handicap.
- **Weekly mandate slots.** SEO-001 is Tuesday's weekly SEO item. The first Thursday review is a review rather than an implementation slot. The Mon/Wed/Fri 3D slots are reported honestly against §3.3. The first gated 3D unit is the GROW-001 circle and then LES-001, not 3 new worlds in week 1.

## 6. First task

- **Task:** SEO-001 (rank 1).
- **Single primary implementer:** Alejandro.
- **Reviewer:** Sofia (code and test). Martin has no review here, since there's no learner-facing content change.
- **Branch:** `claude/seo-001-hreflang-lang-guard` (from fresh `origin/main`, base SHA recorded in the PR body; AGENTS.md multi-agent rules).
- **Scope (files):**
  - `app/argento/layout.tsx`: remove the `languages` block. `/argento` isn't a real ES/EN pair under `app/seo.ts` `languagePairs`, which is empty on purpose.
  - A new or extended test in `tests/seo-architecture.test.mjs`.
  - Nothing in PR #209's files, and no D1, auth, billing or ads files.
- **Acceptance criteria:**
  1. `/argento` metadata has a canonical `https://spanishcue.com/argento` and **no** hreflang alternate containing `?lang=`.
  2. A regression test fails if any file under `app/` declares a canonical, hreflang alternate or sitemap URL containing `?lang=`. It's seeded and proven to fail on the old argento code.
  3. The existing SEO suites stay green: `npm run test:seo`, `tests/edge-cache-policy.test.mjs`, the `languageAlternates` behaviour, and the full `npm test`.
  4. The PR body records the KPI-sheet definition (leading indicators only: indexed count, cluster impressions, avg position, clicks as-is, the E1 label from N4, lesson_reports per 14 days) and links R1–R3 as owner/main requests.
  5. Delivery follows CLAUDE.md/AGENTS.md: non-draft PR → CI + Auto Merge → verified merge SHA → owner-authorized Cloudflare deploy → production smoke. **It isn't reported as deployed until production shows the `/argento` HTML without the `?lang=` alternate.**
- **Start condition:** this document is LOCKED. The repo stays read-only until the facilitator authorizes Phase B.

## 7. Open risks
1. **The real cause of near-zero search visibility is U** until R1 arrives. SEO-002's direction depends on it.
2. **The TTFB root cause may sit in the hosting layer and be out of our control** (H). In that case PERF-001 ends with a documented limit and an owner question.
3. **The funnel stays U** if the owner doesn't answer R3.
4. **The preview could cannibalize PRO.** One new authored circle is made free. No PRO content moves, and PRO depth (levels, routes, listenings) stays PRO. Cannibalization is unmeasured (H).
5. **Review bottleneck.** G4 caps review at ≤3 h per unit, and actual hours are measured weekly.
6. **The owner may reject the "shipping units" interpretation (§3.3).** If so, the board reports shortfalls truthfully rather than lowering the gate.
7. **Merge = production deploy; owner gate required** (added 2026-10-16 during Phase B at the facilitator's request. This is a factual addendum, not a decision change).
   - CI + Auto Merge dispatches staging after merge (`.github/workflows/ci-automerge.yml:236`), and staging auto-dispatches `deploy-production.yml` in mode `release` (`deploy-staging.yml:3-5, 221`).
   - `vars.OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true` and the `production` environment has no protection rules.
   - So marking any PR ready (non-draft) leads to an automatic production deploy. SEO-001 (PR #217) is held as a draft until the owner decides whether merges may auto-deploy. Agents don't change the gate variable or environment settings (CLAUDE.md, owner-only).
8. **The competitive scan is thin** (about 10 searches/fetches in total, and two vendor pages 404'd). The positioning gap is H.

## 8. Rejected alternatives and why
- **A ≥100 GSC clicks/month target:** no evidential basis (Martin C1). Withdrawn.
- **Reading production D1 for KPIs without authorization:** forbidden (CLAUDE.md:66, Sofia C2).
- **Declaring "technical SEO is fine":** premature before R1 (Sofia C1).
- **G2 as a non-votable per-scene blocker:** it isn't an established standard (Alejandro challenge 1). It's split into a non-votable labelling rule plus a votable guideline.
- **E2 class_records prefill:** reverses AM-7 (privacy).
- **Serving the unreviewed campaign demo slice as the indexable circle:** it was never reviewed as a standalone lesson (Martin, accepted by Sofia). Replaced by a new LQG-passed circle (N3).
- **A standalone World Kit milestone, or migrating shipped worlds:** no acquisition return, and regression risk.
- **An indexable canvas-first "3D Spanish lesson" demo, or gameplay video in MVP:** no evidence of search demand. Video adds binary weight and isn't reproducible yet.
- **Feria before the preview:** majority view in §5. Martin's quality condition is preserved as N1.
- **Treating TTFB as "network distance":** retracted by Sofia after the control measurements (F6).

## 9. Votes and dissent
- Alejandro: APPROVE (drafter).
- Sofia: **APPROVE** [B21]. Her conditions: an N3/GROW-001 alignment and the G5(a) wording. G5(a) is applied verbatim. On N3, she wrote her objection against v1's text. v2 already adopted Martin's version, which she had asked me to record in [B17] ("I accepted Martin's version… Please record his version"), so v3 keeps it rather than introduce a third variant. Her GROW-001 role split (Martin authors, G4 by Alejandro or a fresh agent) is applied.
- Martin: **APPROVE** [B22]. Conditional on the N4 text (applied verbatim) and the risk-4 editorial (applied). He withdrew his N3 objection against v2.
- Final confirmations that crossed with the lock, and agree with v3: Sofia [B25] withdrew her N3 objection against v2 and approves with the G5(a) wording, which is applied. Martin [B26] approves with the N4 and G5(a) wording, both applied. **Unanimous APPROVE on v3's content.**
- **Recorded dissent:** Martin preferred LES-001 (Feria) ahead of GROW-001 ([B11]). The majority (Alejandro, Sofia) ranked GROW-001 first. His condition is kept as non-votable N1. No other dissent.
- **Owner decisions recorded after the lock (2026-10-16, relayed by the facilitator [B33]):**
  - (1) The "3 shipping units/week" definition (§3.3) is ACCEPTED.
  - (2) Board PRs may go through CI + Auto Merge with the automatic staging → production deploy after their tests and review pass. This resolves §7 risk 7 as a process, but the gate variable and environment settings stay unchanged and owner-only.
  - (3) **Full creative ownership of future 3D lessons** ([B34]): the board brainstorms, selects, designs, builds, tests, reviews and publishes original lessons on schedule. The owner supplies no topics or ideas and doesn't approve routine deployments. Priorities are pedagogical quality, originality, realistic environments, natural dialogue, listening and SEO. Existing production safeguards stay, and every publication is reported. The pipeline is recorded by the facilitator in ROUTINES.md on claude/board-records-20261016. It doesn't change SEO-001.
- **LOCKED.** Changes now require a new board decision with new evidence. A relay or a crossed message is not grounds for reopening.
