# Transcript: Tuesday SEO routine, 2026-11-03

Scheduled cloud run. The board was convened proportionately as **subagents of the facilitator**: Alejandro ran the read-only technical SEO audit and signed off BOARD-DECISION-004, Martin ran the sampled quality audit, and Sofia did the independent code review and its delta review. **The executives did not message each other**; every message went between the facilitator and one executive.

Exported by script from the session's subagent transcript files (`subagents/agent-*.jsonl`), not retyped: each executive's inbound text messages and each `SubagentHandback` report, verbatim, with their timestamps (UTC). Messages from "harness" are automatic platform reminders, not the facilitator's words. The executives' tool calls and tool outputs are not reproduced here.

## Alejandro

### 2026-11-03T02:11:21.901Z · from facilitator → to Alejandro

````text
You are **Alejandro**, CEO & Chief Strategy Officer of the SpanishCue Executive Board (see docs/board/CONSTITUTION.md), running the Tuesday 2026-11-03 SEO slot as a read-only auditor. Repo: /home/user/spanishcue-web, branch `claude/tuesday-seo-20261103` = origin/main `6e4a2e7`. node_modules is installed. DO NOT edit, commit or push anything; do not touch secrets, D1, workflows, release locks. Outbound to spanishcue.com is blocked by the sandbox proxy, so verify from source and from a local build/tests only.

Context: Search Console is unavailable (Windsor read pause), so no ranking/traffic data exists — never invent any. Since the last board SEO run (main `c8975523`, 2026-10-27, which fixed 65 sitemap 404s with legacy 308 redirects in `app/resource-legacy-slugs.ts`), non-board sessions merged ~230 commits adding large indexable surfaces: the `/material-ele` cluster (topic index of ~105 pages, level pages per topic group, an activity bank with one printable page per activity, guides under /material-ele/guia, HTML index, Atom feed, image/video sitemaps), `/recursos` (310 Spanish pages with hreflang to `/resources`), `/alternativa-a-profedeele`, ten "clases clásicas" A0–C2, new 3D worlds (El consorcio, Vuelo cancelado, Más allá), IndexNow in the deploy workflow, and robots.txt changes (`app/robots.ts`, Crawl-delay 10 for all agents). See `git log --oneline c8975523..HEAD`.

Goal: find **VERIFIED technical SEO defects** on main, ranked by impact, that a small, safe code fix could correct. Check at least:
1. Sitemap(s) (`app/sitemap*`, `app/seo.ts`, any image/video sitemaps): every listed URL resolves to a real route (200, not redirect/404/noindex); no duplicates; no noindex or PRO-redirecting URLs listed; lastmod honesty; sitemap size limits.
2. Canonical + hreflang: `/recursos/*` ↔ `/resources/*` reciprocity (both directions, matching slugs, x-default), self-canonicals, no canonical pointing at a redirect or 404, `?lang=` handling (guarded since SEO-001), material-ele pages.
3. Duplicate/near-duplicate titles and meta descriptions across the new surfaces (compute from the source data; give counts and examples), title length bounds.
4. Internal links that point at 404s or redirects (e.g. links into legacy slugs, material-ele → lesson links).
5. Structured data validity on the new templates (JSON-LD types/required fields, no claims the page does not support).
6. Thin/templated pages: estimate, from source data, how many new indexable pages carry little unique content (e.g. word counts of the unique text per page). Report as evidence only — the board standard forbids noindexing existing pages retroactively without a pedagogy audit, so do NOT recommend noindexing; flag them.
7. robots.txt: is anything Google/Bing need blocked; is Crawl-delay 10 a material risk for Bing discovery of ~N URLs (compute N from the sitemap) — label HYPOTHESIS where it is judgement.
Use the existing tests where helpful (`npm run test:seo` or specific `tests/*seo*`/`tests/*sitemap*` files; look at package.json). A Worker build may be needed for rendered checks; if a build is too slow, say so and fall back to source analysis.

Label every claim VERIFIED (with file:line, command, or count) or HYPOTHESIS. Keep to about 30–40 tool calls. Return a concise report (≤ 900 words): ranked defect list (each: evidence, affected URL count, proposed minimal fix with the files to touch, and a regression test idea), then flagged risks that are not defects, then what you could not verify.
````

### 2026-11-03T02:11:21.924Z · from harness (automatic reminder, not the facilitator) → to Alejandro

````text
<system-reminder>
Your final report is delivered through SubagentHandback: when your work is complete, call SubagentHandback({message: <your full report>}). The call ends your run, so make it your last step. Only a SubagentHandback call reaches your caller as your result; plain text you write at the end is not delivered. Do not also send the report with SendMessage: your caller would get it twice.
</system-reminder>
````

### 2026-11-03T02:18:37.509Z · from Alejandro → to facilitator

````text
**Tuesday SEO audit (read-only), main `6e4a2e7`: report**

**Method.** I bundled the sitemap and SEO modules with esbuild and resolved every URL against the route maps. I ran `npm run build` (60 s, passed) and a local `wrangler dev` with a scratch D1. Then I crawled all 1,430 sitemap URLs plus 2,150 unique internal link targets, and all 322 image and 114 video URLs in the sitemap. `npm run test:seo` gave 69 of 69 passing. I edited, committed and pushed nothing.

**Warning about the worktree.** While I was working, HEAD moved to `29396d03` (a board docs commit). Uncommitted changes also appeared in `app/material-ele/{actividades,data,temas}.ts` and `app/madrid-infectada/SceneCard.tsx`. They are not mine: another session is editing this same worktree. My numbers come from the tree as it was at the start. Some of that in-progress diff touches Defects 2 and 3, so check it before opening a fix PR.

**What is clean (VERIFIED)**
- All 1,430 sitemap URLs return 200. None is noindex, none redirects, there are no duplicates and each has a self-canonical.
- Each page has exactly one H1, a title and a description. There are 0 exact duplicate titles and 0 exact duplicate descriptions.
- The sitemap is 1.32 MB (the limit is 50 MB / 50,000 URLs) and no lastmod is in the future.
- hreflang: 646 pages (`/recursos` and `/resources`, 323 each) carry es/en/x-default. All pairs are reciprocal and self-referencing, in both the sitemap and the rendered HTML.
- `?lang=` returns 301 to the clean URL and a trailing slash returns 308.
- All JSON-LD parses.
- The Atom feed lists 656 links, all present in the sitemap. IndexNow reads only `<loc>` entries, so image and video URLs are not submitted.
- No internal link returns 404.

**Defects, ranked by impact**

**1. The video sitemap marks free public previews as `requires_subscription: "yes"` (VERIFIED).**
- Evidence: `app/sitemap.ts` (`pageMedia`) sets `requires_subscription: preview.free ? "no" : "yes"`. That gives "yes" on 415 of 508 video entries. Every one of the 114 `content_loc` mp4 files returns 200 anonymously.
- Affected: about 415 `/material-ele` URLs.
- Fix: set `"no"`, because the preview recording itself is public. Touch `app/sitemap.ts` only.
- Test: in `tests/material-ele-seo.test.mjs`, assert that every `videos[].requires_subscription === "no"` while `content_loc` is under `/conversation-previews/` or `/grammar-previews/`.

**2. Activity titles have a broken suffix (VERIFIED).**
- Evidence: 44 of 105 `/material-ele/actividad/*` titles look like "La oficina compartida: actividad ELE A1 de a1 | SpanishCue". The cause is `app/material-ele/actividades.ts:51`: for level parents, `topic` is "A1" lowercased.
- Fix: drop the `de ${topic}` part when `page.kind === "level"`.
- Test: no actividad title matches `/ de (a1|a2|b1|b2|c1|c2)\b/i`.

**3. Grammar topic pages list phonetics classes (VERIFIED).**
- Evidence: the regex topic matcher in `app/material-ele/temas.ts` (`match:`) pulls in phonetics lessons. Example: line 82, `presente-de-indicativo`, matches lesson 38 "Spanish Mouth Lab". As a result the first goals and warm-ups shown on `/material-ele/gramatica/presente-de-indicativo` and on its `/a1` page are about lips and alveoli. This hurts relevance and is visible to users.
- Affected: 7 topic pages and 17 topic-by-level pages, including ser-y-estar, comparativos-y-superlativos, oraciones-finales, oraciones-concesivas, registro-y-cortesia and indicativo-o-subjuntivo. `acentuacion` and `pronunciacion-y-entonacion` are excluded because phonetics belongs there.
- Fix: in `temas.ts`, restrict the `gramatica` group to `category === "Gramática"`, with those two topics as an allow-list.
- Test: no grammar topic outside the allow-list has a lessonId whose category is Fonética.

**4. The indexable resource pair for lesson 26 (A1) sends its main link to the A2 world (VERIFIED).**
- Evidence: `/resources/spanish-conversation-activity-a1-estados-unidos-coast-to-coast` and its `/recursos` twin link to `/estados-unidos-basico?level=A1`. `worker/index.ts:266` answers that with a 308 to `/estados-unidos-a2-b1?level=A2`, because `lesson-catalog.ts:267` still has `path:"/estados-unidos-basico"`. This was the only 308 found among all internal links.
- Affected: 2 URLs.
- Fix: this needs a product decision (point the catalog path at the A2–B1 world, or retire the A1 resource through the legacy slug map).
- Test: no internal link from a sitemap page receives a 301 or 308.

**5. Resource titles are very long (VERIFIED, low impact).**
- Evidence: 522 of 644 `/resources` and `/recursos` titles are over 70 characters. The longest is 105 ("Spanish Grammar Lesson B1: Verbos de cambio: … | SPANISHCUE"). The functions are `resourceTitle` and `recursoTitle` in `app/resource-seo.ts`.
- Fix: drop the brand suffix when the title would exceed about 60 characters, or shorten the type label.
- Test: titles must be 78 characters or fewer, matching the bound `/material-ele` already enforces.

**Risks that are not defects**
- **Thin or templated pages (VERIFIED counts; do not noindex).**
  - The 371 topic-by-level pages have a median of 89 unique words (minimum 52). 368 have fewer than 150 and 273 have fewer than 100. 4,662 of their 5,285 goal, warm-up and speaking strings also appear on the parent topic page.
  - The 113 topic pages have a median of 68 unique words.
  - All 105 activity pages repeat an activity that is shown in full on their parent page (median 99 words).
  - The rendered pages are longer (median 1,046 words), but most of that is boilerplate and aggregated lesson text.
  - 92 topic-by-level pages are built from only 2 lessons.
  - Flagged for a pedagogy audit.
- **Internal links to redirects (VERIFIED).** Indexable pages link to 317 PRO lesson URLs that return 302 to `/acceso` (noindex), across 889 links. `/cuenta` returns 307 and is linked from 1,007 pages. This is how the paywall is designed, but it spends crawl budget.
- **One video reused on many pages (VERIFIED counts).** `/conversation-previews/242.mp4` is the video on 82 pages and `244.mp4` on 56. HYPOTHESIS: Google indexes a reused video for only one page, so most of the 508 VideoObject or sitemap video entries will not earn video results.
- **`isAccessibleForFree: false` on 306 `/recursos` pages (VERIFIED).** The resource page itself is open to everyone; the field describes the lesson. HYPOTHESIS: low risk with Google's paywall rules. The `/resources` LearningResource omits the field, which is inconsistent.
- **robots.txt (VERIFIED).** It blocks only `/api/` and 10 non-search bots; Googlebot and Bingbot are not blocked. **HYPOTHESIS about Bing:** with `Crawl-delay: 10`, Bing can fetch at most about 8,640 URLs a day. That is enough for the 1,430 sitemap URLs plus about 2,150 linked URLs within a day, so first discovery is not at risk. The risk is slower recrawl of 629 URLs whose lastmod is 2026-11-01 or 2026-11-02, while IndexNow submits only new URLs, not changed ones. Bing has historically treated 10 as "extremely slow".
- **Price wording (VERIFIED, not SEO).** The pages show US$15,50 / US$15.50, but `docs/billing-contract.md:58` says `1500` USD. Please confirm which figure is current.

**Not verified**
- Production behaviour: spanishcue.com was blocked, so headers, edge cache and Cloudflare routing on the live site are unchecked.
- Search Console coverage, rankings and traffic (the Windsor read pause is still on).
- Google Rich Results validation.
- How Bing actually applies Crawl-delay to this site.
- The rendered checks used a local `wrangler dev` with an empty D1, so pages whose content depends on the database were not checked.

Scratch outputs (crawl, links, metadata) are in /tmp/claude-0/-home-user-spanishcue-web/83d3ff0b-de68-5463-a675-a839cf605d9d/scratchpad: `crawl.json`, `links.json`, `meta.json` and `sm.json`.
````

### 2026-11-03T02:19:59.805Z · from facilitator → to Alejandro

````text
The coordinator sent a message while you were working:
Alejandro, please sign off or object to BOARD-DECISION-004, which parks COMP-001 pass 2 (you are the COMP-001 lead). Thank you for the audit. I fixed your defects 1–3 in commit 089a5de7 on this branch. That diff also covers Martin's fixes, and it explains the uncommitted changes you saw: they were mine (the facilitator's) in the same worktree. Defect 4 (lesson 26 linking to the A2 world) and defect 5 (long resource titles) are recorded as open items. They are not fixed in this PR.

Read `docs/board/decisions/BOARD-DECISION-004.md` (committed at 29396d03). In short:
- R0 is still open. The sandbox cannot reach profedeele.es (curl returns 000).
- The non-board page `/alternativa-a-profedeele` already exists. It says ProfeDeELE costs «95,88 €/año» (gumroad, checked 10-30). Your #225 recorded «Materiales €192/yr» (mas.profedeele.es, checked 10-16).
- The decision parks pass 2 until access exists and reframes the board's role as an accuracy check of that page. It makes no edit to the page (AGENTS.md rule 15).

Reply with APPROVE or OBJECT, plus any wording change. Keep it to 150 words or fewer, and do not edit files. I will archive your reply verbatim.

Address this before completing your current task.
````

### 2026-11-03T02:20:07.718Z · from harness (automatic reminder, not the facilitator) → to Alejandro

````text
[handback-send-enforce] Your report has not been delivered. Call SubagentHandback({message: <your full report>}) now; the call ends your run.
````

### 2026-11-03T02:20:12.365Z · from Alejandro → to facilitator

````text
**Sign-off on BOARD-DECISION-004, for archiving verbatim:**

APPROVE, with one wording change.

Proposed addition to §3.2: "The check covers both sides of every row. SpanishCue's own claims can be checked now, without outside access. Example: the "Precio individual" row (`page.tsx:42`) shows `PRICE_LABEL` = «US$15,50 al mes». The pricing page says US$15.50, but `docs/billing-contract.md:58` still says `1500` USD. The owner should confirm which figure is current. This is an open item, not an edit."

Reason: the decision parks only what really needs the competitor's site. Checking our own figure needs only the repo, so it should not wait for that access.

I checked: the decision document matches the repo. `/alternativa-a-profedeele` shows «95,88 € al año» with the gumroad source, and this run cannot reach profedeele.es. I agree with rejecting Option 2 under rule 15.

— Alejandro, COMP-001 lead, 2026-11-03

---

**Note on the audit:** the full audit report went to you in my earlier handback.
- Thank you for fixing defects 1–3 in `089a5de7`. I did not re-verify that commit.
- Defects 4 (lesson 26: its A1 resource pages link to `/estados-unidos-basico`, which redirects to the A2 world) and 5 (522 of 644 resource titles over 70 characters) stay open.
- I edited and committed no files.
````

## Martin

### 2026-11-03T02:11:21.917Z · from facilitator → to Martin

````text
You are **Martin**, Chief Learning, Research & Quality Officer of the SpanishCue Executive Board (docs/board/CONSTITUTION.md). Tuesday 2026-11-03 run. Repo /home/user/spanishcue-web, branch `claude/tuesday-seo-20261103` = origin/main `6e4a2e7`; node_modules installed. **Read-only**: do not edit, commit or push. You may write ONE file: your audit report at `docs/audits/non-board-sample-g3-g6-20261103.md` (write it, do not commit).

Task (W45 plan item 2, docs/board/assessments/2026-W44.md §4.4 and §6): a **sampled, non-retroactive** Learning Quality Gate audit of non-board units that shipped without an LQG file. Standards: docs/board/decisions/BOARD-DECISION-001.md §3.1 N1 (G3 = `npm run test:language`; G6 = level honesty: the catalogue `levels` lists only levels whose content genuinely matches that CEFR level) and §3.2 (Indexable Teacher Page standard), plus CLAUDE.md §7–8 (no fake level variant made by changing only a badge/label; each CEFR level genuinely authored: objectives, tasks, scaffolding, teacher notes, closing production) and docs/LANGUAGE_POLICY.md.

Sample:
1. «Más allá» 3D world (PR #292, catalog id 243, shipped A0–C2 `featured:true`): audit **two levels in full** — pick one low (A1 or A2) and one high (B2 or C1) — and machine-check all levels. Find its files via `app/lesson-catalog.ts`, `app/escucha-3d/games.mjs`, and `git log --all --oneline -- '*mas-alla*'`.
2. One Madrid 3D world (madrid-ciudad or madrid-infectada; choose one): **one level in full**.
3. A sample of 3 `/material-ele` pages (new indexable teacher pages) against the Indexable Teacher Page standard (stated CEFR level matching content; one communicative objective; ≥8 authored classroom-usable prompts, not templated; a teaching sequence of stated length; test:language passing). Pick them at random-ish from different sources (topic page, level page, activity page) and say how you picked.

For each level: is the language genuinely at that CEFR level (vocabulary, structures, task demand, with concrete quoted examples)? Is it genuinely different from the adjacent level, or is it a relabel? Are there objectives, teacher notes and closing production? Any Spanish errors or policy violations (neutral Spanish/tú defaults)? Run `npm run test:language` once (check package.json for the script; report exit code and the relevant lines). Verdict per sampled item: PASS / PASS WITH NOTES / FAIL with reasons. **No recommendation to noindex or unpublish without a failing audit**; if something fails, propose the narrowest fix (e.g. remove a level from `levels`).

Label every claim VERIFIED (quote + file:line) or HYPOTHESIS. Budget about 30–40 tool calls. Return a ≤ 800-word summary to me with the verdicts, the evidence highlights, and the path of the report file you wrote.
````

### 2026-11-03T02:11:21.930Z · from harness (automatic reminder, not the facilitator) → to Martin

````text
<system-reminder>
Your final report is delivered through SubagentHandback: when your work is complete, call SubagentHandback({message: <your full report>}). The call ends your run, so make it your last step. Only a SubagentHandback call reaches your caller as your result; plain text you write at the end is not delivered. Do not also send the report with SendMessage: your caller would get it twice.
</system-reminder>
````

### 2026-11-03T02:15:44.564Z · from Martin → to facilitator

````text
## Martin: sampled Learning Quality Gate audit of non-board units (G3, G6 and §3.2)

**Report:** I wrote the report but did not commit it. It is at `/home/user/spanishcue-web/docs/audits/non-board-sample-g3-g6-20261103.md`. Nothing else was edited and nothing was pushed. This was a read-only run on `6e4a2e7`.

**G3 (`npm run test:language`) passes, exit code 0.** VERIFIED from the run output:
- 43 of 43 tests pass, 0 fail.
- `Neutral Spanish guard: 0 unresolved findings across 2051 source files.`
- `ENGLISH COPY: UNCHANGED (10882 strings in 126 files …)`
- The unit checkers also pass: `scripts/check-mas-alla.mjs` ("all levels pass") and `scripts/check-madrid.mjs` ("all scenes OK").
- The guard does not catch every problem. It misses one vosotros form in interface text (see Madrid below).

### Verdicts

**1. «Más allá» (id 243), levels A2 and B2 read in full, all seven levels machine-checked: PASS WITH NOTES. No level should come out of `levels`.**
- **The levels are genuinely different, not relabels (VERIFIED).** From A0 to C2, encounter words rise from 765 to 3,943, average sentence length from 3.9 to 11.7 words, and distinct words from 263 to 1,541. Adjacent levels share only 1–11 identical strings, and these are titles and short options. The listening voices share none.
- **B2: PASS.** The language is real B2:
  - «Si hubiera sabido que iba a morir hoy, habría arreglado…» (b2.mjs:9)
  - «Ojalá me hubiera arrepentido antes» (b2.mjs:93)
  - «Por mucho que lo justifiques» (b2.mjs:16)
  - Argument prompts such as «Argumenta tu postura… dónde pondrías tú el límite» (b2.mjs:20)

  The B1 version of the same encounter is clearly simpler (b1.mjs:14).
- **A2: PASS WITH NOTES.** The past tenses and comparisons fit A2. However, four core prompts use "si" + imperfect subjunctive, which the unit's own B1 file names as its B1 target (b1.mjs:1):
  - a2.mjs:33 «Si te quedara solo un año…»
  - a2.mjs:53 «Si pudieras cambiar un capítulo…»
  - a2.mjs:202 «Si tuvieras un día más…»
  - a2.mjs:241 «Si pudieras cambiar una sola cosa…»

  A1 already phrases the same idea at A1 level: «Si tienes un año de vida…» (a1.mjs:34). Narrowest fix: reword those four lines into A2 forms.
- **Gaps that apply to every level:**
  - There are no level-specific teacher notes. The «Con profesor» guide is the same text for all levels (Encuentro.tsx:136). CLAUDE.md §8 asks for teacher notes per level.
  - Each level's objective exists only as a code comment plus a one-line hint.
  - Closing production exists: two open prompts per encounter, then «El retrato de tu alma» (MasAllaGame.tsx:429, :451).
- **Optional regional polish:**
  - «rendir un examen» (b2.mjs:8) is Southern Cone usage.
  - «coger el teléfono» (c1.mjs:12) is a word many Latin American speakers avoid.

  Both are said by a Colombian character.
- **Possible G5 issue (HYPOTHESIS, outside my remit):** the lesson is `featured:true`, but I found no recorded G5 rendered check. Sofia should confirm.

**2. Madrid infectada, B1 read in full: PASS WITH NOTES.**
- **The level is genuine B1:**
  - A pluperfect in narration: «no había visto nada parecido» (b1.mjs:57)
  - Reported speech: «me dijeron que lo dejara» (b1.mjs:33)
  - Inference quizzes
  - Prompts asking for a justified opinion (b1.mjs:22, :302)
- **It differs from the levels on either side:**
  - A2 has «Estoy vacunado. Vengo a ayudar.» (a2.mjs:8).
  - B2 asks the student to «anticipa las críticas a tu postura» (b2.mjs:302).
- **Policy violation in interface text (VERIFIED):** «las demás las **leéis** juntos» (app/madrid-infectada/SceneCard.tsx:97). This is a teacher instruction, not dialogue, so LANGUAGE_POLICY applies and the setting does not excuse it. It appears at every level. «Más allá» uses the correct «las leen» (Encuentro.tsx:97). One-word fix.
- Vosotros and «coger» inside the Madrid dialogue are authentic regional speech, which the policy allows.

**3. Three `/material-ele` pages: all three FAIL §3.2.**
- **How I picked them:** index = 20261103 mod the number of pages in each generated list. Those lists hold 113 topic pages, 371 topic-level pages and 105 activity pages.
- **Why the standard applies:** all three families were added on 2026-11-01, after BOARD-DECISION-001, so they count as new pages. They are set `index: true` (components.tsx:28).

| Page | Verdict | Why |
|---|---|---|
| `/material-ele/formatos/mundos-3d` (topic page) | FAIL | No single objective: 8 goals pulled from different lessons by the generator (temas.ts:233). Its 12 prompts are copied from lessons and mix levels. No teaching sequence. Errors in the template: a grammar-only FAQ line on a 3D-worlds page (temas.ts:238), «se abre» for «se abren» (:239), and «3d» in lower case. |
| `/material-ele/gramatica/adjetivos/a1` (level page) | FAIL, but level-honest | Only 2 prompts. No single objective. No stated sequence length. The template's grammar errors repeat on all 371 level pages: «enseñar**lo**» for «enseñarlos» (temas.ts:293) and «adjetivos se trabaja» (:294). |
| `/material-ele/actividad/palmas-en-la-silaba-fuerte` (activity page) | FAIL | Only 2 prompts. Labelled A1–B2 though its own goal says A1, because it inherits the parent guide's range. Factual error: «palabras de tres sílabas… ca-FÉ» (data.ts:2533), but «café» has two syllables and «teléfono» four. |

- **The §3 failures come from the page generators.** They have no fields for an objective, ≥8 prompts or a sequence. So one sample per family speaks for the whole family, at least for those fields.
- §3.2's own consequence is noindex. Rather than noindex hundreds of pages on a 3-page sample, I propose the board choose:
  - (a) noindex the generated families until each page has authored `objective`, `prompts`, and `sequence` fields; or
  - (b) narrow §3.2's scope, for example by treating activity pages as parts of their guide.
- **Fixes that need no product decision:**
  - Correct the Spanish in the templates (temas.ts:238–239, 293–294).
  - Fix the «café» example (data.ts:2533).
  - Make `pageLevel` take the activity's own level.

I propose no level removals and no unpublishing for «Más allá» or Madrid.
````

## Sofia

### 2026-11-03T02:19:53.653Z · from facilitator → to Sofia

````text
You are **Sofia**, Chief Product & Innovation Officer of the SpanishCue Executive Board (docs/board/CONSTITUTION.md), acting as the **independent code reviewer** for draft PR #357 (branch `claude/tuesday-seo-20261103`, repo /home/user/spanishcue-web). You did not write this code. Review ONLY the diff `git diff 6e4a2e7..089a5de7 -- app tests package.json` (main base is `6e4a2e7`). Read-only: do not edit, commit or push. A full `npm test` is being run by the facilitator in the same worktree right now; do NOT run `npm test` or `npm run build` yourself (it would collide). You may run `node --test tests/material-ele-copy-quality.test.mjs` and other single `node --test` files.

What the change claims to do (from two audits this run):
1. `/material-ele` topic/level templates (`app/material-ele/temas.ts`): remove «enseñarlo» (wrong for plural topics), fix «se abre»→«se abren» for plural free classes, stop lower-casing country names/«3D» via new `nameInSentence`, drop a grammar-only ordering claim from the shared topic FAQ, rephrase level-page H1 and intro.
2. Activity pages (`app/material-ele/actividades.ts`): new `activityLevel` uses the level the activity's goal names; level-guide activities no longer get «actividad ELE A1 de a1» titles/H1s.
3. Grammar topics no longer list Fonética lessons except for `acentuacion` and `pronunciacion-y-entonacion`.
4. `app/sitemap.ts`: video sitemap entries always `requires_subscription: "no"` because the preview mp4 is public.
5. `app/material-ele/data.ts`: «café» example fixed; `app/madrid-infectada/SceneCard.tsx`: «leéis»→«leen».
6. New guard `tests/material-ele-copy-quality.test.mjs`, added to `test:seo`.

Check: correctness and regressions (e.g. could any topic page become empty, titles exceed 78 chars or duplicate, `temaSourcesWithoutLessons` non-empty, changed URLs/slugs — slugs must NOT change), Spanish quality of new strings, whether the `requires_subscription` change is truthful (is the preview video really public? check how `/conversation-previews/*` and `/grammar-previews/*` are served/authorized in worker/ and the access policy; PRO media must never leak — confirm these previews were already public before this diff), test quality (do tests actually guard the defects), and anything touching auth/billing/D1/secrets (should be none). Keep to ~25 tool calls. Return a verdict APPROVE / REQUEST CHANGES with numbered blockers (B1…) and non-blocking notes (NB1…), each with file:line evidence. ≤ 500 words.
````

### 2026-11-03T02:19:53.664Z · from harness (automatic reminder, not the facilitator) → to Sofia

````text
<system-reminder>
Your final report is delivered through SubagentHandback: when your work is complete, call SubagentHandback({message: <your full report>}). The call ends your run, so make it your last step. Only a SubagentHandback call reaches your caller as your result; plain text you write at the end is not delivered. Do not also send the report with SendMessage: your caller would get it twice.
</system-reminder>
````

### 2026-11-03T02:21:28.283Z · from Sofia → to facilitator

````text
**Verdict: REQUEST CHANGES** (one blocker). Everything else is sound. I compared the base `6e4a2e7` against head `089a5de7` by bundling both trees with esbuild and comparing every tema, level and activity page plus the sitemap. I also ran `tests/material-ele-copy-quality.test.mjs` (6/6 pass) and `material-ele-temas` + `material-ele-actividades` (11/11 pass). I did not run `npm test` or the build.

**Blockers**

B1. **Three published URLs disappear and will now return 404.** Grammar topics no longer pick up Fonética lessons (`app/material-ele/temas.ts:217-225`). Some level pages only existed because of those lessons, so they are no longer generated and drop out of the sitemap:
- `/material-ele/gramatica/comparativos-y-superlativos/c1`
- `/material-ele/gramatica/comparativos-y-superlativos/c2`
- `/material-ele/gramatica/oraciones-finales/a1`

`generateStaticParams` plus `notFound()` in `app/material-ele/[slug]/[tema]/[nivel]/page.tsx:14,24` makes them 404 in production. That breaks the "slugs/URLs must not change" rule. No internal links point to them; I grepped the repo and found none. Fix: send a 301 from each to its parent topic page (`/material-ele/gramatica/comparativos-y-superlativos`, `/material-ele/gramatica/oraciones-finales`). Then add a guard that every tema-level path on main still exists or has a redirect. The new test does not catch this.

**Checked and fine**
- No URLs were added or renamed, and slugs are unchanged. `temaSourcesWithoutLessons` is empty and no tema page has zero lessons. No title is over 78 characters, and there are no duplicate titles or H1s at base or head. No level page has exactly one lesson, so «1 clases» cannot appear.
- 21 lesson counts change, all from dropping Fonética lessons from grammar topics. 32 activity levels change, and each one matches a level written in that activity's goal (`app/material-ele/data.ts` 380–2720, for example `Red flag o no` goes to B1 and `la-coartada` to A2–B1). Titles like «actividad ELE A1 de a1» are gone (`actividades.ts:55-63`).
- **`requires_subscription: "no"` is truthful.** The preview videos are files in `public/conversation-previews/*.mp4` and `public/grammar-previews/*.mp4`. The worker serves them through the ungated `publicMedia` branch in `worker/index.ts:374-377`. The only media gate is `premiumAudio`, which covers `/audio/<prefix>/` only (`worker/index.ts:298-299,337`). The diff does not touch `worker/` or `public/`, so these videos were already public before this change and no PRO media is newly exposed.
- Nothing touches auth, billing, D1, secrets or bindings.

**Non-blocking notes**

NB1. `temas.ts` FAQ: «¿Para qué nivel son las clases de México?» stays plural even when there is only one class. «hay 1 clase … entre A0–B1» was already there before this diff; «entre A0 y B1» or «de nivel A0–B1» reads better.

NB2. `SceneCard.tsx:97`: «las demás las leen juntos» has no clear subject after «Tú… Tu alumno…». «las demás las leen entre los dos» is clearer and still neutral Spanish.

NB3. `tests/material-ele-copy-quality.test.mjs`, test 3, re-implements the same regex as `activityLevel`, so it can only catch a mismatch between the two. Only the `palmas` check guards a real case; adding a couple of hard-coded expected pairs (for example `es-decir` → C1) would make it meaningful.

NB4. `nameInSentence` (`temas.ts:66-70`) decides which names are countries by checking whether the parent label starts with "Países", which is brittle. A future country placed under another parent would be lower-cased again. An explicit flag on the source, or a list of country slugs, would be more robust.

NB5. The topic-page H1 «X: clases y actividades para la clase de ELE» repeats «clase». Something like «X en la clase de ELE: clases y actividades» avoids it (optional).
````

### 2026-11-03T02:22:51.994Z · from facilitator → to Sofia

````text
The coordinator sent a message while you were working:
Sofia, please do a delta review of the fix for your B1. Your review was REQUEST CHANGES with B1. The fixes are in commits 8db32761 and 3197bc2a on `claude/tuesday-seo-20261103`.

- **B1:** I added `retiredTemaLevelPaths` in `app/material-ele/temas.ts`. It maps the three lost level paths to their topic pages. `app/material-ele/[slug]/[tema]/[nivel]/page.tsx` calls `permanentRedirect` for them before `notFound()`, the same pattern as `app/resources/[slug]/page.tsx:70-71`.
- **New guard:** `tests/fixtures/published-material-ele-level-paths.json` lists 371 paths, the set on main `6e4a2e7`. The new test in `tests/material-ele-copy-quality.test.mjs` fails if a published path is neither generated nor redirected. It also fails if a generated path is missing from the fixture.
- **Rendered test:** I added a test that asserts the 308 in the built Worker (`tests/material-ele-temas-rendered.test.mjs`, end of file).
- **Notes applied:** NB2, NB3, NB4 and NB5. I did not change NB1.

The full `npm test` is running in the worktree right now. Do NOT run `npm test` or the build yourself. A single `node --test tests/material-ele-copy-quality.test.mjs` is fine.

Please check:
- that the fixture equals the base set;
- that the redirect logic is correct;
- that nothing else regressed.

Reply DELTA APPROVE or REQUEST CHANGES, in 200 words or fewer.

Address this before completing your current task.
````

### 2026-11-03T02:23:12.590Z · from Sofia → to facilitator

````text
**DELTA APPROVE.** B1 is fixed at `3197bc2a`. I did not run `npm test`, the build, or the rendered Worker test; that 308 test is part of the facilitator's full run.

- **Fixture equals the base set:** `tests/fixtures/published-material-ele-level-paths.json` has 371 paths. I compared it with the level paths I dumped from `6e4a2e7` earlier, and it matches exactly once both are sorted.
- **Redirect logic is correct:** `app/material-ele/[slug]/[tema]/[nivel]/page.tsx` only redirects when no page is generated for the path and the path is in `retiredTemaLevelPaths`; anything else still gets `notFound()`. The three retired paths are not in `generateStaticParams`, so they are rendered on request and the redirect runs. `generateMetadata` returns `{}` for them, which is harmless. They are not generated, so they cannot appear in the sitemap.
- **The guard works:** the new test fails if a published path is neither generated nor redirected, if a redirect points to a topic that does not exist, if a retired path comes back as a generated page, or if a new level page is missing from the fixture. `node --test tests/material-ele-copy-quality.test.mjs` passes 8 of 8.
- **Notes are applied correctly:** NB2 now reads «entre los dos». NB3 checks `es-decir` = C1 against a fixed value instead of re-running the same regex. NB4's `countrySlugs` matches all 10 country topic pages and still lower-cases `el-mundo`. NB5's new topic heading reads «X en la clase de ELE: clases y actividades».
- **Nothing else regressed:** slugs, titles and the redirect targets are unchanged. Nothing touches auth, billing, D1 or secrets.

NB1 (the plural «son las clases» even when there is one class) is still open and does not block.
````

