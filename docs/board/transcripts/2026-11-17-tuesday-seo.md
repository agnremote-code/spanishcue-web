# Transcript: Tuesday SEO routine, 2026-11-17

Scheduled cloud run. The facilitator (main session) convened the three executives as subagents. Each executive talked only with the facilitator, never with each other. Messages are copied verbatim. Timestamps are approximate UTC from the session clock: the tools did not record exact send times, so these are ±5 min.

Facts sheet given to every executive: the facilitator's scratchpad file `facts-20261117.md`. Its content is reproduced in the decision's §2 and in STATUS (2026-11-17 entry).

## 1. facilitator → Alejandro (≈02:12Z)

````text
You are **Alejandro**, CEO/strategy and technical-SEO lead of the SpanishCue Executive Board (read /home/user/spanishcue-web/docs/board/CONSTITUTION.md first, briefly). Repo: /home/user/spanishcue-web, branch `claude/seo-tuesday-20261117` (already checked out; do NOT commit, push, or change branches; the facilitator commits).

Task: W47 plan item 1 (docs/board/assessments/2026-W46.md §6 item 1): the **/material-ele §3.2 decision**. Write the decision file `docs/board/decisions/BOARD-DECISION-007-generated-hub-pages.md` (status: DRAFT v1, proposed by Alejandro, votes pending from Martin and Sofia).

Inputs (read them):
- Facts sheet with today's Search Console data and code facts: /tmp/claude-0/-home-user-spanishcue-web/6a286f2c-6216-5711-8efc-2f8b2d73933b/scratchpad/facts-20261117.md
- The standard: docs/board/decisions/BOARD-DECISION-001.md §3.2 (Indexable Teacher Page standard).
- Martin's audit: docs/board/transcripts/2026-11-03-tuesday-seo.md, the section "3. Three `/material-ele` pages: all three FAIL §3.2" (around line 237).
- Code: app/material-ele/temas.ts (buildLevelPage ~line 303, topic pages buildPage), app/material-ele/actividades.ts, tests/material-ele-temas.test.mjs, tests/material-ele-copy-quality.test.mjs, tests/material-ele-actividades.test.mjs. Use other decision files (e.g. BOARD-DECISION-006) as the format model.

What the decision must settle (your judgement, but grounded in the facts; the W46 assessment already stated your prior position: no blanket noindex; prefer narrowing §3.2 or a targeted rule):
1. Whether §3.2 applies to generated **hub** pages (topic pages, topic-level pages, activity pages) or only to pages that present themselves as a teaching page/guide/preview. Decide (a) noindex, (b) narrow, or a stated mix, with reasons and the data.
2. If narrowed: a precise, testable **hub standard** that generated pages must meet to stay indexable (e.g. level honesty, ≥2 authored classes, unique bounded metadata, copy-quality guard, no invented per-page prompts/claims, factual correctness of anything authored on the page). Say which clauses are ALREADY machine-enforced (cite file:line) and which, if any, are not and need a guard (name the test to add; keep it small). Be honest: only claim a clause is enforced if you verified it in the code.
3. Activity pages specifically (Martin's third FAIL): are they parts of their guide? What must hold?
4. A **re-measurement rule** instead of retroactive noindex: e.g. at a stated date with ≥90 days of data, generated pages with 0 impressions become consolidation/noindex candidates, decided in an audited PR, never in bulk without an audit. Pick concrete thresholds and date.
5. What §3.2 still requires unchanged (new authored teacher/guide/preview pages).
6. Scope limits: no code change is authorized by this decision except tests that encode the hub standard; no URL/slug changes; non-board stream pages are covered too.
Also add a short §"Evidence" table with the cluster numbers from the facts sheet (label VERIFIED/HYPOTHESIS; never invent numbers) and a §"Guides note": the /guides low position is an intent mismatch on one page (recommendation only, the guides are non-board work).

Label every claim VERIFIED (with source), UNKNOWN or HYPOTHESIS. Keep it ≤ ~120 lines. Then reply to me with: the file path, a ≤200-word summary of the decision, and the list of clauses you say are not yet machine-enforced (with the test you propose), so the facilitator can decide whether to implement a guard today.
````

## 2. Alejandro → facilitator (≈02:15Z)

````text
I wrote the decision file at `/home/user/spanishcue-web/docs/board/decisions/BOARD-DECISION-007-generated-hub-pages.md`. It is about 85 lines, marked DRAFT v1 and proposed by Alejandro, with Martin's and Sofia's votes pending. I did not commit anything. I could not run the generators: this sandbox has no node_modules (no esbuild). So current page counts, and whether any page's "free class" sentence is actually false, are marked UNKNOWN in the file.

**Summary of the decision**
- **No blanket noindex.** §3.2 still applies in full to pages that present themselves as a guide, lesson preview or cluster lesson.
- **Generated hub pages** (topic, topic-level and activity pages) must meet a new 8-clause **hub standard** instead (H1–H8): honest levels, ≥2 authored classes per level page, unique bounded metadata, copy quality, no invented teaching content, true access claims, stable URLs, and correct authored facts.
- **Why:** the generated level pages bring in 44% of site clicks (34 of 77) at a weighted position of 9.9. The audit sampled only 3 pages, and the families were at most 14 days old in the 28-day window.
- **Activity pages** count as parts of their guide. They must show the guide's authored activity, state their own level, and link to the full guide.
- **Re-measurement on 2027-02-16** over 91 days of data: pages with 0 impressions become candidates. They are handled per family in one audited PR (at least 5 sampled), preferring a 308 to the topic page over noindex. Nothing is noindexed in bulk.
- **Scope:** only tests and copy-only fixes are authorized, with no slug changes. The standard also covers the non-board stream and open PR #324.
- **Guides:** the /guides note recommends retitling `first-online-spanish-lesson` for teachers. It is a recommendation only.

**Clauses not yet machine-enforced, with the test I propose**
1. **H5, no invented per-page teaching content.** This holds only because of how the code is written (`app/material-ele/temas.ts:240-242`, `temas.ts:331-333`, `app/material-ele/actividades.ts:53-62`). No test checks it.
   - Proposed guard G-H5 in `tests/material-ele-copy-quality.test.mjs`: every `goals`, `warmups` and `speaking` string on a topic or level page must appear in one of the classes it lists. About 8 lines.
2. **H6, true access claims.** Nothing checks either sentence:
   - `temas.ts:321` adds «Tres clases gratis por nivel…» to short level-page descriptions.
   - `temas.ts:340` says «la clase gratis de este nivel» when the page lists no free class (`freeCount` is 0).
   - `app/material-ele/guias.ts:574` says only A1–B2 have three free classes per level, so these sentences may be false on C1/C2 pages.
   - Proposed guard G-H6 in the same file: a level page whose copy says «gratis» needs at least one free listed class (`freeCount > 0`) or at least one free class at that level (`isFreeLesson`). If it fails, the fix is copy-only, which the decision authorizes.
3. **H8, factual correctness of authored content.** Only partly covered: the «café» error is pinned at `tests/material-ele-copy-quality.test.mjs:49`, and test:language checks only for voseo. No general guard is possible, so this stays a human audit duty.
4. **H1 for topic pages.** The stated level span is computed by the code (`temas.ts:225,227`) but not asserted by any test. This is low risk and is noted without a proposed test.
````

(The facilitator then added guards G-H5 and G-H6, mutation-checked both, ran the generators for current counts and updated the draft: commit db33e12.)

## 3. facilitator → Martin (≈02:16Z)

````text
You are **Martin**, Chief Learning Officer (pedagogy, QA) of the SpanishCue Executive Board (skim /home/user/spanishcue-web/docs/board/CONSTITUTION.md). You audited three generated /material-ele pages on 2026-11-03 and found all three FAIL the Indexable Teacher Page standard (your audit: docs/board/transcripts/2026-11-03-tuesday-seo.md, section "3. Three `/material-ele` pages", ~line 237; the standard: docs/board/decisions/BOARD-DECISION-001.md §3.2).

Alejandro has proposed `docs/board/decisions/BOARD-DECISION-007-generated-hub-pages.md` (repo /home/user/spanishcue-web, branch claude/seo-tuesday-20261117, read-only for you: do not edit, commit, push or run `npm test`). Facts sheet with today's Search Console data: /tmp/claude-0/-home-user-spanishcue-web/6a286f2c-6216-5711-8efc-2f8b2d73933b/scratchpad/facts-20261117.md.

Review it from the pedagogy side: does narrowing §3.2 for generated hub pages keep the purpose of your standard (honest, classroom-usable indexed pages)? Is the hub standard H1–H8 sufficient, especially level honesty and no invented teaching content? Are activity pages being "parts of their guide" acceptable given your finding that they carry only 2 prompts? Is the 2027-02-16 re-measurement rule sound? Verify any claim you rely on against the code (app/material-ele/temas.ts, actividades.ts, data.ts; tests/material-ele-*.test.mjs). You may run `node --test tests/material-ele-copy-quality.test.mjs`. Keep to ~20 tool calls.

Reply with exactly one vote line first: `VOTE: APPROVE`, `VOTE: APPROVE WITH CHANGES` or `VOTE: REJECT`, then numbered required changes (if any, each concrete and file-anchored) and non-blocking notes. ≤ 400 words.
````

## 4. facilitator → Sofia (≈02:16Z)

````text
You are **Sofia**, Chief Product & Innovation Officer (engineering) of the SpanishCue Executive Board (skim /home/user/spanishcue-web/docs/board/CONSTITUTION.md). You are the **independent code reviewer** and a voter. Repo /home/user/spanishcue-web, branch claude/seo-tuesday-20261117 (read-only: do not edit, commit or push; do NOT run `npm test` or `npm run build`, the facilitator is running it in this worktree; you may run `node --test tests/material-ele-copy-quality.test.mjs` and `node --test tests/material-ele-temas.test.mjs`).

1. **Code review** of `git diff origin/main -- tests/` (two new tests, G-H5 and G-H6, plus an extra export in the esbuild stdin of tests/material-ele-copy-quality.test.mjs). Check: do they really guard what they claim (G-H5: goals/warm-ups/speaking on topic and level pages come from the listed classes — compare with app/material-ele/temas.ts buildPage ~line 246 and buildLevelPage ~line 331; G-H6: every «gratis» claim on those pages is true — compare with temas.ts:251, :321, :335-340 and app/access-policy.ts:1-2)? Any false positive risk, gaps (e.g. a «gratis» wording the regex misses), flakiness or runtime cost? Is the test wired into an npm script that CI runs (check package.json `test:seo` / `test`)? No app code is changed; confirm that.
2. **Vote** on `docs/board/decisions/BOARD-DECISION-007-generated-hub-pages.md` (proposed by Alejandro). Facts sheet: /tmp/claude-0/-home-user-spanishcue-web/6a286f2c-6216-5711-8efc-2f8b2d73933b/scratchpad/facts-20261117.md. Check the code-fact claims (file:line) you rely on.

Keep to ~20 tool calls. Reply with: `CODE: APPROVE` or `CODE: REQUEST CHANGES` (numbered blockers B1… with file:line, then non-blocking NB…), and `VOTE: APPROVE` / `VOTE: APPROVE WITH CHANGES` / `VOTE: REJECT` with reasons. ≤ 450 words.
````

## 5. Sofia → facilitator (≈02:17Z)

````text
**CODE: APPROVE** (no blockers)

What I checked: `git diff origin/main --stat` shows only `tests/material-ele-copy-quality.test.mjs`, the BOARD-DECISION-007 draft and `docs/board/STATUS.md`. No changes to app, worker, scripts or package.json. Both test files pass when run directly: 17 tests, 0 failures, about 2.4 s. The file is already in `test:seo` (package.json:21). `npm test` (line 13) calls `test:seo`, and CI runs `npm test` (`ci-automerge.yml:45`, `main-health.yml:37`). The guards cost almost nothing at runtime: one esbuild bundle that was already there, plus loops over about 490 pages.

- G-H5 checks every goal, warm-up and speaking prompt on every topic and level page against the classes the page lists. This matches how the pages are built (temas.ts:240-242, 329-331). I see no risk of false failures: empty strings are filtered out before the check, and the `>=300` page-count floor stops the test from passing on an empty list.
- G-H6: I scanned every generated topic and level page for claims like «gratis», «free», «gratuit…» and «sin registro». Ten phrasings exist, and the guard covers all of them, either by regex or through the `freeCount` equality checks. The levels have this many free classes: A1 10, A2 7, B1 5, B2 3, C1 3, C2 3. So every current claim is true. C1 and C2 sit exactly at the threshold of three, so taking one sample away fails the test, as intended.

Non-blocking:
- NB1 (copy-quality.test.mjs, G-H6 «Tres clases gratis por nivel»): the guard only checks `freeAt(p.level)`, but the sentence promises three free classes at *every* level. Assert `freeAt(l)>=3` for all of A1–C2.
- NB2: no catch-all check. If a generator adds a new «gratis» sentence later, nothing tests it. Add a check that every `/gratis/i` match on these pages is one of the known phrasings.
- NB3: the claim «abre la clase gratis … en Material ELE por nivel» (300 pages) assumes that hub page actually links a free class for each level. The guard does not check that.

**VOTE: APPROVE WITH CHANGES**

I agree with the main decision. Noindexing everything on a 3-page sample would drop about 44% of clicks, and it would contradict §3.2's own rule against retroactive noindex. A hub standard (H1–H8) that tests enforce is the right tool, and the 2027-02-16 re-measurement is a sound backstop.

Changes I ask for, all wording only:
1. **Wrong code citations.** temas.ts and main have the same content, so these were never right:
   - §3.2 H1: «temas.ts:225,227» should be **:231,233**.
   - H2: «temas.ts:305» should be **:311**.
   - H6: «:340» should be **:335**.
   - The facts sheet's «buildLevelPage :303» is actually **:309**, and its «:331-333» is actually **:329-331**.
   - H6 cites «guias.ts:574» for the A1–B2 understatement, but that line is the seven-step sequence paragraph and says nothing about A1–B2. The likely sentence is guias.ts:1010 («gratis de subjuntivo en B1, B2, C1 y C2»). Correct the citation or mark it UNKNOWN.
2. §3.2 H6 / the G-H6 bullet: write down what the guard actually enforces. That is `freeCount` equal to the real free count, plus at least 3 free classes at the level for «Tres clases…» (or at every level, after NB1), plus at least 1 for each «clase gratis de este/tu nivel» claim.
3. §3.4: name the owner of the 2027-02-16 re-measurement in STATUS, so the date isn't missed.
````

Facilitator note: `guias.ts:574` was re-checked. It is one long paragraph whose second sentence says «las de A1, A2, B1 y B2 tienen tres clases gratis por nivel», so the citation was kept.

## 6. Martin → facilitator (≈02:18Z)

````text
VOTE: APPROVE WITH CHANGES

I agree with narrowing §3.2. Holding hubs to "≥8 prompts and a sequence" would push the generators to invent templated prompts. But H1 as written does not keep my standard's purpose. It checks which classes a page lists, not the teaching text the page shows. I verified the following with esbuild on HEAD db33e12. `node --test tests/material-ele-copy-quality.test.mjs` passes 10/10, so G-H5 and G-H6 pass and do not catch these problems.

**Required changes**
1. **H1 must cover the goals and prompts a level page shows.** 260 of 377 level pages show goals or "Para conversar" prompts taken from classes written for several levels, mostly the A0–C2 3D worlds. On 217 level pages, the goals and prompts are identical to another level of the same topic. Example: `formatos/comprension-auditiva/a1`, the site's top-clicked page, shows the same 8 prompts as `/c2`, including «Explica qué pesa más al final de una vida: lo que no perdonaste o el perdón que nunca pediste». Its goals also say «de A0 a C2». The source is `temas.ts` `buildLevelPage`, the goals and speaking lines; they render at `app/material-ele/[slug]/[tema]/[nivel]/page.tsx:69-78`.
   - Amend H1: a level page shows goals and prompts only from classes written for that single level, or labels them with the class and its level range.
   - Add G-H1b to `tests/material-ele-copy-quality.test.mjs`.
   - Add this to §3.6 as an authorized change. It drops or labels copied text and invents none.
2. **Activity level fallback.** 71 of 105 activity goals name no level, so the page takes the guide's whole range. Four pages state «Para alumnos de nivel A1–C2» (`actividades.ts`, first FAQ) for a 2-prompt activity. Amend H1 for activities so the fallback reads as the guide's range («de la guía X, A1–C2»), not as the activity's level. Authorize that copy-only change in §3.6.
3. **§3.3 evidence:** the prompt count is now VERIFIED. 102 activities have 2 prompts, 2 have 1 and 1 has 3. "Part of its guide" is acceptable only if the parent guide is audited against §3.2 before 2027-02-16, not "when touched". Add that date to §3.3.
4. **§3.4:** "≥1 impression stays indexed" must not exempt a page from the pedagogy audit. Add a ≤10-page H1/H8 sample of the most-clicked generated pages to the W48 routine. Traffic sends teachers to exactly these pages.

**Non-blocking notes**
- 95 level pages show no prompts at all. That is fine for a hub, and it shows hubs are not lessons.
- The topic-page span is still enforced only by construction. A unit assert costs one line.
- The re-measurement rule is sound as an SEO rule: 91 days, all after the pages were created, and consolidation before noindex. Pedagogical failures are handled by the early trigger, which is correct.
- `guias.ts:574`: add C1 and C2 as recommended.
- H5 and the G-H5 guard are good: the guard checks substrings exactly and confirms no invented content.
````

(The facilitator applied Martin 1–4, Sofia 1–3 and Sofia NB1 in commit a51b7448, then asked both for a delta check.)

## 7. facilitator → Sofia (≈02:19Z)

````text
Delta code review request for v2: the branch is now at a51b7448 (from db33e12). Review only `git diff db33e12..a51b7448`, read-only as before. Do not run npm test or build; single `node --test` files are fine.
Changes:
1. Martin found that 260 of 377 level pages showed goals and prompts copied from multi-level A0–C2 classes (comprension-auditiva/a1 showed the same C2 prompts as /c2). `app/material-ele/temas.ts` buildLevelPage now takes goals, warmups and speaking only from `singleLevel` classes, meaning classes whose levels are exactly [level]. Pages with only multi-level classes now show none (189 of 377). The render already hides empty sections (`app/material-ele/[slug]/[tema]/[nivel]/page.tsx:69-80`).
2. In `app/material-ele/actividades.ts`, when the goal names no level and the range is the guide's (contains «–»), the first FAQ answer now says «No tiene un nivel propio: la guía «…» la propone para …».
3. New tests: G-H1b, the activity-fallback test, and your NB1 applied to G-H6. G-H1b and the activity test were mutation-checked against the old code.
4. The decision is now v2, with your three wording changes applied (`guias.ts:574` is kept because its second sentence names A1–B2).
Check correctness, regressions (rendered tests, JSON-LD or any schema that expects non-empty goals or speaking, the sitemap), and TypeScript. Reply with `DELTA CODE: APPROVE` or `DELTA CODE: REQUEST CHANGES` and, separately, whether your vote stands for v2. Keep it to 250 words or fewer.
````

## 8. facilitator → Martin (≈02:19Z)

````text
Delta check request on BOARD-DECISION-007 v2 (branch at a51b7448). This is read-only, as before.
All four of your changes are applied:
1. H1 now covers shown copy. buildLevelPage uses only single-level classes of that level for goals, warmups and speaking. Guard G-H1b checks this, and the comprension-auditiva/a1 assertion no longer finds «A0 a C2» or «perdón que nunca pediste». 188 of 377 level pages still show goals, 74 show prompts, and 189 show only the class grid, intro and FAQ.
2. The activity fallback FAQ now reads «No tiene un nivel propio: la guía «X» la propone para A1–C2, así que adapta las frases modelo al nivel del grupo.»
3. §3.3: each guide must be audited against §3.2 before 2027-02-16.
4. The W48 Tuesday sample of the 10 most-clicked generated pages, which I will record in STATUS.
Please verify with `git diff db33e12..a51b7448` and the decision file's "v2 changes" section, and check the Spanish of the new FAQ sentence. Reply `DELTA: APPROVE` (your vote stands for v2) or `DELTA: REQUEST CHANGES`. Keep it to 200 words or fewer.
````

## 9. Martin → facilitator (≈02:20Z)

````text
DELTA: APPROVE. My vote stands for v2.

I checked `git diff db33e12..a51b7448` and the decision file's "v2 changes" section. I also ran `tests/material-ele-copy-quality.test.mjs` at a51b7448 in a temporary worktree: 12 pass, 0 fail. I removed the worktree afterwards and changed nothing in the repo.

1. **Level pages:** `temas.ts` now filters goals, warm-ups and prompts through `singleLevel`, which keeps only classes written for exactly that level. The class list still shows all classes, so H2 is unaffected. The new guard G-H1b checks every level page against the same rule and pins the comprension-auditiva/a1 case.
2. **Activity fallback:** `actividades.ts` uses the new wording only when the goal names no level and the guide's range spans more than one level. A guard test covers it.
   - **Spanish:** «No tiene un nivel propio: la guía «X» la propone para A1–C2, así que adapta las frases modelo al nivel del grupo.» is correct and natural. The «la» agrees with «actividad», and «adapta» keeps the site's tú register. The nested «» around the guide name is acceptable.
   - **Optional:** «No tiene nivel propio» (without «un») reads slightly more idiomatic.
3. **§3.3 and §3.4:** both match what I asked for, and §3.6 now authorizes both copy-only changes.

**Non-blocking:**
- About half the level pages (189 of 377) now show no teaching copy at all. That is honest for a hub, but they should be in the W48 sample, as v2 already notes.
- An activity that falls back to a single-level guide still says «Para alumnos de nivel X». That is acceptable, since the guide is written for that level.
````
