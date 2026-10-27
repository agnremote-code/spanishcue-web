# Transcript — Tuesday SEO routine, 2026-10-27

Exported from this routine's Claude Code session transcript (`~/.claude/projects/-home-user-spanishcue-web/d543eef4-d981-546d-a704-7f141908c378.jsonl`), not retyped. Every message went between the facilitator (main session) and one executive agent; the executives did not message each other. Martin was not convened (no content or QA question this run). Timestamps are UTC from the transcript.

## 2026-10-27T02:10:43.178Z — Facilitator → Alejandro (task brief (agent spawn))

````text
You are Alejandro, CEO & Chief Strategy Officer of the SpanishCue Executive Board (see docs/board/CONSTITUTION.md). This is the scheduled Tuesday SEO slot, 2026-10-27. Repo: /home/user/spanishcue-web (branch claude/tuesday-seo-20261027, equals origin/main 25b9253 + one STATUS line). Do NOT edit files, commit or push — read-only investigation; the facilitator implements.

Context (VERIFIED): Search Console via Windsor.ai is still blocked (placeholder row, owner request R0), so there is no fresh query/impression data this week. Last real data (2026-10-17): 30 of 241 sitemap URLs had any impressions in 90 days; 0 impressions on 125 /resources/* pages. Prior technical SEO fix was PR #224 (Hospital resource page). Read docs/board/STATUS.md (Backlog rank "P" technical SEO), docs/seo-strategy.md, and the "Indexable Teacher Page standard" (grep for it under docs/ and AGENTS.md).

Task: find the single highest-impact, low-risk TECHNICAL SEO defect that can be fixed in code this run and verified by a test. Candidates to check against the code (verify each, do not assume): sitemap generation (which file builds /sitemap.xml; are all indexable public pages included, any non-200/redirecting/noindex URLs listed, correct lastmod, hreflang alternates), robots.txt, canonical tags and hreflang consistency on /resources/* and landing pages, pages that are linked internally but missing from sitemap (e.g. new 3D resource pages for recently shipped worlds, academias landing, /lp/ pages), duplicate titles/meta descriptions across /resources pages, structured data validity, orphan pages with no internal links. Remember: no thin or mass-generated pages; do not propose new content pages. Do not touch billing, auth, D1, release workflows.

Return (under 600 words): a ranked list of up to 4 VERIFIED defects, each with file:line evidence, why it matters for search, the minimal fix, and the test that would guard it; label anything unverified as HYPOTHESIS. Recommend exactly one to implement now.
````

## 2026-10-27T02:14:47.831Z — Alejandro → Facilitator (hand-back report)

````text
**Alejandro: Tuesday SEO, 2026-10-27. Read-only; I edited, committed and pushed nothing.**

Method: I built `app/sitemap.ts` with esbuild at HEAD. It now lists 432 URLs, 309 of them under /resources. I also rebuilt the sitemap at every first-parent main commit since 2026-09-15 that touched the catalog, resource-seo or sitemap files. Then I fed each URL that was ever listed into the current `lessonForResourceSlug`.

## Ranked defects (all checked against the code)

**1. 65 resource URLs we used to list in the sitemap now return 404, with no redirect. RECOMMENDED.**
- Cause: the slug is built from the lesson's level label and title (`app/resource-seo.ts:53-70`). So every level or title change moves the URL. Hand-added aliases cover only 8 old slugs (`:76-86`). Everything else hits `notFound()` (`app/resources/[slug]/page.tsx:69`). Nothing in the worker or middleware redirects old /resources slugs.
- When each URL was last listed:
  - 6 until 2026-10-23. Commit 032fba09 "cada clase pertenece a un solo nivel" changed slugs such as `spanish-grammar-lesson-a1-a2-ser-estar-y-hay-...` to `...-a1-ser-estar-y-hay-...`.
  - 1 until 2026-10-21: `...a1-b1-reino-unido-en-relieve`.
  - 51 until 2026-10-07, after the grammar course rename.
  - 7 between 09-29 and 10-16, including the casino/noche/bosque `a1-c2` to `a0-c2` changes and `clase-inicial` `a0` to `a1`.
- 64 of the 65 map to a lesson id that still exists. Only id 222 (`el-recadero-de-puerto-neon`) is gone, so it can stay a 404.
- Why it matters for search:
  - URLs we submitted and Google crawled now return 404, so whatever ranking they had built up is thrown away.
  - We can't see these 404s because Search Console is blocked (R0). That they are being reported as "Not found" there is a HYPOTHESIS.
  - The same thing happens again every time a lesson's level label changes, which has happened 4 times in October.
- Minimal fix:
  - Add a fixed table of retired slugs to lesson ids, in `resource-seo.ts` or a new `app/resource-legacy-slugs.ts`.
  - In the page and in `generateMetadata`, send a legacy slug to `permanentRedirect(resourcePathForLesson(lesson))`. That pattern is already used in `app/estados-unidos-basico/page.tsx`.
  - Move the 8 existing aliases into the same table.
  - The full slug-to-id list (65 rows, with the current target URL for each) is in /tmp/claude-0/-home-user-spanishcue-web/d543eef4-d981-546d-a704-7f141908c378/scratchpad/dead-resource-slugs-map.txt
- Guard test:
  - Add a committed fixture, `tests/fixtures/published-resource-slugs.json`, holding every /resources slug ever listed plus today's 309.
  - Add a test (in `tests/seo-architecture.test.mjs` or a new test:seo file) that checks every slug in the fixture either resolves to a live page or is a legacy slug that redirects to a current sitemap URL. Only the ids explicitly marked retired may 404.
  - The same test should check that the current sitemap's slugs are a subset of the fixture. Then any future slug change fails CI until someone adds an alias.

**2. The 8 existing aliases return 200 with a canonical tag instead of redirecting.**
- Evidence: `resource-seo.ts:76-86` together with `lessonForResourceSlug` (`:108`). An old URL serves a full duplicate page whose canonical points to the new slug.
- Why it matters: Google may ignore the canonical hint and keep both URLs. A redirect is the stronger signal.
- Fix: fold these into the redirect table from #1. The same test covers it.

**3. 368 of the 432 sitemap URLs have no `<lastmod>`; only guides have one.**
- Evidence: `app/sitemap.ts:61`, `:77`, `:80`, `:83`. Only `guideModifiedDate` supplies a date.
- Why it matters: it is a weak signal, and Google only trusts lastmod when it is accurate. A build-time date would be misleading. Low priority; a proper fix needs per-lesson modified dates in the catalog.

**HYPOTHESIS, not counted as a defect:** `/sistema-verbal/[slug]` pages are not in the sitemap. I did not confirm whether they are PRO-gated. Also, the family-variant own slugs serve 200 with a canonical to the family page. That is intended deduplication, not a bug.

**Checked and clean:**
- robots.txt blocks only `/api/`.
- hreflang is deliberately empty.
- No duplicate titles or meta descriptions across the 309 resource pages.
- No private or noindex URLs in the sitemap.
- All 18 3D worlds, including feria (241) and madrid (242), have resource pages listed.
- All free lessons are listed.
- `/academias`, the two `/lp` purchase landings, `/para-profesores` and `/aprender-espanol` are listed.
- No URL outside /resources has ever dropped out of the sitemap.

## Recommendation
Implement #1 now and fold #2 into it. The change stays inside the /resources slug lookup and page, and adds one test. It doesn't touch billing, auth, D1 or the release workflows. It brings back 64 URLs Google already crawled, and the test stops this from happening again.
````

## 2026-10-27T02:16:46.729Z — Facilitator → Sofia (task brief (agent spawn))

````text
You are Sofia, Chief Product & Innovation Officer of the SpanishCue Executive Board (docs/board/CONSTITUTION.md), acting as the independent code reviewer. Repo /home/user/spanishcue-web, branch claude/tuesday-seo-20261027. Review the latest commit: `git show HEAD` (diff vs HEAD~1). Do NOT edit, commit or push; a full `npm test` is already running in this checkout — do not run `npm test` or `npm run build` yourself (you may run single `node --test <file>` tests).

The change: /resources/<slug> slugs that were once in the sitemap but no longer match any lesson are mapped (app/resource-legacy-slugs.ts) to lesson ids and 308-redirected (Next `permanentRedirect`) from app/resources/[slug]/page.tsx to the lesson's current resource path; 8 older aliases that used to serve 200 duplicates are folded in; a fixture + guard test was added.

Check independently: (1) is every legacy slug → lesson id mapping correct? Spot-check at least 8 entries against git history of app/lesson-catalog.ts (find the old title/level for that id and confirm the old slug matches app/resource-seo.ts slug rules at that time). (2) Can a redirect target ever be a non-canonical/404 URL (e.g. conversation-family variants — resourcePathForLesson maps to the family canonical)? (3) Does `permanentRedirect` in this vinext/Cloudflare setup emit an HTTP 308 for this route (compare with app/estados-unidos-basico/page.tsx, worker/index.ts, any edge-cache logic for /resources that might cache redirects wrongly or strip Location)? (4) Any risk to FREE/PRO boundaries, generateStaticParams, generateMetadata for legacy slugs, or other tests that fetch the old alias URLs expecting 200 (grep tests/ and scripts/production-smoke.mjs)? (5) Is the guard test meaningful and not flaky?

Return under 400 words: verdict APPROVE or REQUEST CHANGES, with blocking issues (file:line, evidence) separated from non-blocking notes.
````

## 2026-10-27T02:21:01.427Z — Sofia → Facilitator (hand-back report)

````text
**Verdict: APPROVE.** I found no blocking issues in HEAD f36c721b on claude/tuesday-seo-20261027.

**(1) Mapping correctness: all 72 checked, not a sample.** I took 75 of the 88 main commits that touched the catalog or slug sources (13 would not bundle) and bundled each one's `app/` in the scratchpad. For each, I rebuilt every lesson's slug from its level label and title. `slugify` has been unchanged since its first commit (d7ed4a57). All 72 entries in `app/resource-legacy-slugs.ts` match exactly one lesson id in that history, and it is the id the table gives. Examples: `b1-marketing-de-casinos…` and `a1-c2-el-gran-meridiano…` both → 237; `b2-c1-el-multiverso-del-si` → 23; `a1-presente-con-vos` → 3. All 391 fixture slugs appear in that history. `b1-el-recadero-de-puerto-neon` was always id 222, which is no longer in the catalog, so leaving it as a 404 is correct.

**(2) Redirect targets.** `legacyResourceRedirectPath` goes through `resourcePathForLesson`, so variants land on their family's canonical page. The guard test checks that every target is a current sitemap slug. It also checks that no legacy slug is a live slug, so there are no redirect loops or chains.

**(3) Is it really a 308?** Yes. vinext's `permanentRedirect` (`node_modules/vinext/dist/shims/navigation.js:942`) produces a redirect with status 308, and `parseNextRedirectDigest` keeps that status. In `worker/index.ts`:
- the edge cache only stores 200 HTML responses (line 366), so the redirect is never cached;
- `new Response(response.body, response)` keeps the `Location` header;
- the cache key includes the build id, so 200 pages cached under an old build are never served.

`tests/rendered-html.test.mjs:180` checks the real 308 and its `Location`. The worker-level redirect for `/estados-unidos-basico` exists to get ahead of the paid-access check, not because of a problem with the framework's 308. That does not apply to `/resources/*`.

**(4) Side effects.**
- FREE/PRO: the redirect fires before any lesson lookup and only points at public resource pages, so it reveals nothing gated.
- `generateStaticParams` is unchanged, there is no `dynamicParams = false`, and `generateMetadata` returns `{}` for a legacy slug before the page redirects. All harmless.
- No code in `app/` links to a legacy slug. The only other places that use one are `docs/lessons/*` audit files and test fixtures. Tests that used to expect a 200 were updated (`rendered-html`, `conversation-resources`). `edge-cache-policy.test.mjs` only checks the path pattern. `scripts/production-smoke.mjs` uses current slugs only.

**(5) Guard test.** I ran `node --test tests/resource-legacy-slugs.test.mjs tests/conversation-resources.test.mjs`: 7 of 7 pass. The tests are deterministic and need no network. They fail in the right cases: a slug missing from the fixture, a published slug that would 404, a mapping to a missing lesson id, or a legacy slug that shadows a live one.

**Non-blocking notes**
- The redirect drops the query string, so `/resources/<old>?level=B1` lands on the canonical page without `level`. Before this change, the 8 old aliases kept the level. It is minor for SEO, but you could add `?level=` back to the redirect target when it is valid.
- The 308 is sent with `Cache-Control: private, no-store`, so the edge re-renders it on every hit. That is correct, just not cached.
- The test that checks `app/resources/[slug]/page.tsx` with a regex on its source is brittle and will break on harmless reformatting.
- Every new lesson now also needs a fixture update. That friction is intended, and the failure message explains what to do.
- The scratchpad bundling scripts are `/tmp/claude-0/-home-user-spanishcue-web/d543eef4-d981-546d-a704-7f141908c378/scratchpad/dump.mjs` and `/tmp/claude-0/-home-user-spanishcue-web/d543eef4-d981-546d-a704-7f141908c378/scratchpad/check.mjs`. I did not edit, commit or push anything in the repo.
````
