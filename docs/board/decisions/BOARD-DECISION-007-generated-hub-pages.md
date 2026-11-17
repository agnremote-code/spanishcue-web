# BOARD-DECISION-007: generated /material-ele hub pages and the Indexable Teacher Page standard (BOARD-DECISION-001 §3.2)

- Date: 2026-11-17 (Tuesday SEO routine, W47 plan item 1, [assessments/2026-W46.md](../assessments/2026-W46.md) §6)
- Proposed by: Alejandro (CEO, technical SEO)
- Status: **ADOPTED v2, 3 of 3, LOCKED (2026-11-17).** v1 drew APPROVE WITH CHANGES from Martin (4 changes) and Sofia (3 wording changes plus code notes); the facilitator applied all of them in v2 (see §Votes). Both votes were conditional on those changes being applied, so they count as APPROVE for v2.
- Labels: every claim is VERIFIED (with its source), UNKNOWN or HYPOTHESIS. Search Console figures come from the facilitator's facts sheet of 2026-11-17 (Windsor `searchconsole`, `sc-domain:spanishcue.com`, data through 2026-11-14). Code facts were read on branch `claude/seo-tuesday-20261117` (HEAD 34cf110).

## 1. The question
- Martin's audit of 2026-11-03 found that three sampled generated pages FAIL §3.2: topic page `formatos/mundos-3d`, level page `gramatica/adjetivos/a1` ("FAIL, but level-honest") and activity page `palmas-en-la-silaba-fuerte`. The generators have no fields for one objective, ≥8 authored prompts or a sequence, so the whole family fails those clauses (VERIFIED, [transcripts/2026-11-03-tuesday-seo.md](../transcripts/2026-11-03-tuesday-seo.md) §3).
- The families: 113 topic, 371 topic-level and 105 activity pages, added 2026-11-01, all `index: true` (VERIFIED as of 11-03, same source; `robots: { index: true }` at `app/material-ele/components.tsx:28`). Current counts on main `e11f4af` (VERIFIED, facilitator ran the generators with esbuild on 2026-11-17): **113 topic, 377 topic-level, 105 activity pages**.
- His options: (a) noindex the families until authored fields exist; (b) narrow §3.2.
- The copy defects he named were fixed and guarded in PR #357 (VERIFIED, facts sheet; `tests/material-ele-copy-quality.test.mjs`).

## 2. Evidence (28 days, 2026-10-18..11-14)
| Measure | Value | Label |
|---|---|---|
| Site | 77 clicks, 1,132 impr, pos 18.58 | VERIFIED, facts sheet |
| /material-ele, all pages | 108 pages with ≥1 impr, 49 clicks, 542 impr, wpos 12.2 | VERIFIED, facts sheet |
| …generated topic-level pages | 53 pages with ≥1 impr, **34 clicks**, 229 impr, **wpos 9.9** | VERIFIED, facts sheet |
| Share of all site clicks from generated level pages | 34/77 = **44%** | VERIFIED, facts sheet |
| Generated level pages with impressions but 0 clicks | 33 of 53 | VERIFIED, facts sheet |
| Level pages with 0 impressions | 324 of 377 (377 − 53) | VERIFIED: generator count (§1) minus pages with impressions |
| Topic pages and activity pages, separately | not split out in the facts sheet | UNKNOWN |
| Age of the families inside the window | ≤14 days (created 11-01) | VERIFIED, dates |

What this means: the generated level pages are the site's best-ranking traffic source today. Half the window predates them, so a page with 0 impressions has not yet been judged by search (HYPOTHESIS: that young pages are still being discovered).

## 3. Decision
**3.1 Option (b), narrowed scope. No blanket noindex.** §3.2 applies to pages that present themselves as a **teaching page**: a guide, a lesson preview or a cluster page offering its own lesson. It does not apply to **generated hub pages**, whose job is to route a teacher to authored classes or to one authored guide fragment. These hubs fall under the hub standard in §3.2 below. Reasons:
- Noindexing would remove 44% of site clicks at the site's best position (§2), on a sample of 3 pages. That trades verified traffic for a standard that was written for a different kind of page.
- §3.2's purpose is that an indexed page is honest and classroom-usable. A hub can be honest (true levels, real classes, no invented content) without being a lesson. Holding it to "≥8 prompts and a sequence" would push the generators to invent exactly the templated prompts §3.2 forbids.
- §3.2 itself forbids retroactive noindex without an audit (VERIFIED, BOARD-DECISION-001 §3.2). Martin's audit covers 3 pages. It is not an audit of 589.

**3.2 Hub standard.** A generated hub page stays indexable only if every clause holds. A NEW generator family must meet it in tests before merge, otherwise it ships noindex.

| # | Clause | Machine-enforced today? |
|---|---|---|
| H1 | **Level honesty.** Level page: every listed class is written for that level, **and the goals, warm-ups and prompts it shows come only from classes written for that one level** (v2, Martin change 1). Topic page: the stated span is computed from its classes. Activity page: the level its own goal names; when it names none, the page says the range is the guide's, never that the activity is for A1–C2 (v2, Martin change 2). Previous wording: Level page: every listed class is written for that level. Topic page: the stated span is computed from its classes. Activity page: the level its own goal names, else its guide's range | YES. Level: `tests/material-ele-temas.test.mjs:77`. Topic span: by construction only (`app/material-ele/temas.ts:231,233`). Activity: `tests/material-ele-copy-quality.test.mjs:37-50,94-98` |
| H2 | **Substance.** Level page lists ≥2 authored classes of its level. Topic page ≥1 authored class and a hand-written intro | YES. `temas.ts:311` (`ids.length < 2` returns null); `tests/material-ele-temas.test.mjs:13,76`; intro unique and ≥80 chars at `:28,33` |
| H3 | **Unique bounded metadata.** Title ≤78, description 110–165, unique path/title/H1 (and intro for topic and level pages), ≥2–3 FAQ, in sitemap | YES. `tests/material-ele-temas.test.mjs:22-35,69-86`; `tests/material-ele-actividades.test.mjs:17-30` |
| H4 | **Copy quality.** Template Spanish agrees for every topic; capitals and acronyms kept; no invented price, customers or rankings | YES. `tests/material-ele-copy-quality.test.mjs:12-35,53-58`; `tests/material-ele-temas.test.mjs:47-51`; `tests/material-ele-actividades.test.mjs:42-46` |
| H5 | **No invented per-page teaching content.** Goals, warm-ups and speaking prompts on topic and level pages are copied from the listed classes. Activity pages show their guide's authored activity | **YES since this PR** for topic and level pages: guard G-H5 (`tests/material-ele-copy-quality.test.mjs`), mutation-checked by the facilitator (an injected «Objetivo inventado» goal fails it). Activity pages: by construction (`app/material-ele/actividades.ts:53-62`) |
| H6 | **True access claims.** Any "free class" sentence is true for that page | **YES since this PR**: guard G-H6. The sentences at `temas.ts:321` («Tres clases gratis por nivel…») and `temas.ts:335`/`:251` («la clase gratis de este nivel», «una clase gratis de tu nivel») are **true today**: every level A1–C2 has three free grammar classes (VERIFIED, `app/access-policy.ts:1-2`). The guard fails if that stops being true (mutation-checked: removing the C2 samples fails it). `app/material-ele/guias.ts:574` names only A1–B2; it understates but is not false (recommendation: add C1 and C2) |
| H7 | **URL stability.** A published level path is generated or 308-redirects to its topic | YES. `tests/material-ele-copy-quality.test.mjs:79-91` |
| H8 | **Factual correctness of authored content** shown on the page (e.g. the «café» syllable error) | Partly. Single known defects are pinned (`copy-quality.test.mjs:49`). test:language scans `app/` for voseo only (`scripts/neutral-spanish.mjs:8`), not facts. General correctness stays a human audit duty (§3.4) |

**Guards (tests only, small), added in this PR:**
- **G-H5**, in `tests/material-ele-copy-quality.test.mjs`: for every topic and level page, each string in `goals`, `warmups` and `speaking` occurs in the corresponding field of one of its `lessonIds`. About 8 lines.
- **G-H6**, same file: a level page whose description or FAQ says «gratis» must have `freeCount > 0`, or its level must have ≥1 free class in the catalogue (`isFreeLesson`). If it fails, the fix is copy-only (drop or condition the sentence), which this decision authorizes (§3.6).

**3.3 Activity pages.** They are **parts of their guide**, not standalone teaching pages. §3.2's ≥8 prompts and sequence apply to the parent guide, not to the fragment (about 102 of 105 activities carry 2 model prompts: HYPOTHESIS from a grep of `prompts: [` in `app/material-ele/data.ts`). An activity page must hold:
- its content is the guide's authored activity (steps, prompts, correction, online variant), with no generated teaching text beyond scaffolding (H5);
- it links visibly to its full guide (VERIFIED, `app/material-ele/banco-components.tsx:38`) and names it in the FAQ (`actividades.ts:67`);
- its level is the activity's own (H1);
- an authored error found on the page is fixed in the guide's data, which fixes both (the «café» precedent).

Whether the parent guides themselves meet §3.2 is UNKNOWN. They are audited when touched, as §3.2 already says.

**3.4 Re-measurement instead of retroactive noindex.**
- **Date:** Tuesday SEO routine of **2027-02-16**, window 2026-11-15..2027-02-13 (91 days, all after creation).
- **Candidates:** a generated hub page with **0 impressions** in that window. Pages with ≥1 impression stay indexed.
- **Treatment, per family, in one audited PR:** Martin (or a fresh agent) samples ≥5 candidates per family and checks them against §3.2-hub. Preferred remedy for a level page is consolidation (308 to its topic page, recorded in `retiredTemaLevelPaths`); noindex only where no parent exists. Never in bulk without that audit file; never a slug change for a page with impressions.
- **Early trigger:** any page found to break H1, H6 or H8 is fixed or noindexed at once, in its own PR, independent of the date.

**3.5 What §3.2 still requires, unchanged.** Every NEW guide, lesson preview or cluster page that presents itself as a teaching page needs: a CEFR level matching the content, one communicative objective, ≥8 authored classroom-usable prompts, a sequence of stated length, and test:language passing. Otherwise noindex. A generated page that adds per-page teaching copy (its own objective, prompts or sequence) becomes a teaching page and falls under §3.2 in full.

**3.6 Scope limits.**
- No code change is authorized except tests that encode §3.2-hub (G-H5, G-H6) and the copy-only fix G-H6 may require. No URL or slug change, no noindex, no redirect.
- The hub standard covers the non-board SEO stream's pages too (they maintain these families: commits 6eaa41b, 9628377, d0ab7f4, c4f3013, VERIFIED, facts sheet). Open PR #324 (new material-ele pages) must meet it before merge.

## 4. Guides note (recommendation only; /guides is non-board work)
- `/guides/first-online-spanish-lesson` has 76 impressions at pos 74.4 and 0 clicks, on learner queries («learn spanish online», «spanish lessons online») (VERIFIED, facts sheet). Without it, /guides sits at wpos 13.1 (VERIFIED, same).
- This is an intent mismatch on one page, not a cluster ranking defect (HYPOTHESIS, strongly supported by the query list). Recommendation to the stream: make the title and H1 say it is for teachers («…for Spanish teachers: planning a first online lesson»). No noindex.

## 5. What would change this decision
- The 2027-02-16 measurement shows the generated families' click share falling below 15% of site clicks while the zero-impression count stays above 80%, or Search Console reports thin or duplicate content on these paths: reopen with that data.
- An audit finds an H1, H6 or H8 failure on more than 2 of 10 sampled pages in one family: that family goes noindex until fixed.

## v2 changes (2026-11-17)
- **Martin 1, H1 on shown copy (VERIFIED by Martin with esbuild on db33e12, re-verified by the facilitator).** 260 of 377 level pages showed goals or prompts copied from classes written for several levels (mostly the A0–C2 worlds), and 217 showed the same copy as another level of their topic. Example: `formatos/comprension-auditiva/a1`, the most-clicked page, showed the same 8 prompts as `/c2`, including «Explica qué pesa más al final de una vida…», and goals saying «de A0 a C2». **Fixed in this PR**: `buildLevelPage` takes goals, warm-ups and prompts only from single-level classes of that level (`app/material-ele/temas.ts`). Guard **G-H1b** (`tests/material-ele-copy-quality.test.mjs`) fails on main's code (mutation-checked). After the fix, 188 of 377 level pages show goals, 74 show prompts, and 189 show only the class list, intro and FAQ, which is acceptable for a hub. comprension-auditiva/a1 keeps 3 goals and 1 warm-up. Risk (HYPOTHESIS): pages that lose copy may move in ranking. Watch the top level pages at the W48 measurement.
- **Martin 2, activity fallback.** 71 of 105 activity goals name no level. Their pages answered «Para alumnos de nivel A1–C2». **Fixed in this PR** (`app/material-ele/actividades.ts`): when the activity names no level and the range is the guide's, the FAQ says «No tiene un nivel propio: la guía «…» la propone para …, así que adapta las frases modelo al nivel del grupo.» Guarded by a test.
- **Martin 3, §3.3.** Prompt count is VERIFIED (Martin): 102 activities have 2 prompts, 2 have 1, and 1 has 3. "Part of its guide" holds only if **each parent guide is audited against §3.2 before 2027-02-16**, not only when touched.
- **Martin 4, §3.4.** Having ≥1 impression never exempts a page from the pedagogy audit. **W48 Tuesday SEO routine:** H1/H8 sample of the ≤10 most-clicked generated pages (Martin or a fresh agent).
- **Sofia 1, citations corrected** (temas.ts :231/:233, :311, :335). `guias.ts:574` is correct: the paragraph's second sentence names only A1–B2 (facilitator re-checked).
- **Sofia 2, what G-H6 enforces:** `freeCount` equals the real count of free listed classes; «Tres clases gratis por nivel» needs ≥3 free classes at **every** level A1–C2 (Sofia NB1, applied); «la clase gratis de este nivel» and «una clase gratis de tu nivel» need ≥1 free class at that level. Free classes per level today: A1 10, A2 7, B1 5, B2 3, C1 3, C2 3 (Sofia, VERIFIED).
- **Sofia 3:** the 2027-02-16 re-measurement is owned by the Tuesday SEO routine (Alejandro) and is recorded in STATUS.
- **§3.6 amended:** besides tests, the two copy-only changes above (drop shown copy from multi-level classes; activity fallback wording) are authorized. They invent nothing.

## Votes
- Alejandro (proposer): APPROVE v1.
- Martin: VOTE APPROVE WITH CHANGES on v1 (changes 1–4, applied in v2).
- Sofia: VOTE APPROVE WITH CHANGES on v1 (changes 1–3, applied in v2); CODE APPROVE on db33e12 (NB1 applied; NB2 and NB3 deferred to follow-ups).
- Result: 3 of 3 for v2. Verbatim messages: [transcripts/2026-11-17-tuesday-seo.md](../transcripts/2026-11-17-tuesday-seo.md).
