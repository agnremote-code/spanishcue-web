# Transcript — Thursday reliability routine, 2026-10-22

Exported from this routine's Claude Code session transcript (`~/.claude/projects/-home-user-spanishcue-web/570e742d-fe9b-553c-808c-1c0d5a45fd0d.jsonl`), not retyped. Every message went between the facilitator (main session) and one executive agent; the executives did not message each other. Timestamps are UTC from the transcript; bodies are verbatim (briefs are the Agent tool prompts, reports are the agents' hand-backs).

## 2026-10-22T02:09:12.308Z — Facilitator → Sofia (task brief (agent spawn))

````text
You are "Sofia", Chief Product & Innovation Officer of the SpanishCue Executive Board, doing the Thursday backend/security reliability review. READ-ONLY: do not edit files, do not commit, do not touch the network beyond the local repo, never query production D1 or use Cloudflare tools.

Repo: /home/user/spanishcue-web (current main 4d2c680). Context: one Cloudflare Worker (worker/index.ts) serves pages and APIs; auth is Firebase token verified server-side (app/firebase-session.ts, server/**); access FREE/PRO from server-created headers (app/access-policy.ts); billing under app/api/billing/** with app/paypal-server.ts, app/paddle-server.ts. Read docs/BACKEND_MIGRATION.md and docs/billing-contract.md briefly if needed.

Task: audit for VERIFIED defects only (a concrete request path → wrong outcome you can point to by file:line). Focus, highest first:
1. API routes under app/api/** (and any worker-level routes in worker/index.ts): every route that reads/writes per-user or admin data must authenticate from server-verified identity, never from browser headers/query/body; check admin/owner-only routes (search for "owner", "admin", role checks) enforce the role server-side; check that browser-supplied x-chespanish-* headers are stripped/replaced before reaching handlers.
2. Cross-site (origin/CSRF) protection on state-changing POSTs; cache-control no-store on authenticated JSON.
3. D1 access paths: SQL built by string concatenation with user input; missing user scoping in WHERE clauses (IDOR, e.g. students/progress/reports for another user's id).
4. Premium media / private chunk routes leaking to anonymous users.
5. Recently changed code (git log --since=2026-10-15 -- app/api server worker app/*server*.ts) for regressions.

Also note any obvious runtime-error risks in those handlers (unhandled JSON parse leading to 500 where a 400 is expected, etc.) but rank them below security.

Report back: a ranked list of findings, each with file:line, the concrete request that triggers it, the actual vs expected outcome, severity (critical/high/medium/low), and your confidence (VERIFIED vs HYPOTHESIS). Also list the areas you checked and found clean, briefly. Keep the report under 900 words. Do not propose large refactors.
````

## 2026-10-22T02:13:14.710Z — Sofia → Facilitator (hand-back report)

````text
## Sofia — Thursday backend/security reliability review (main 4d2c680, read-only)

I found no critical or high security defects. Nothing was edited, committed, or sent over the network. I did not touch production D1 or use any Cloudflare tool.

### Findings, ranked

**1. The PRO speech-recognition API rejects every PRO user (401). Severity: medium (functional, PRO feature broken). VERIFIED.**
- `worker/index.ts:289` (`identityAware` list) does not include `/api/phonetics/speech-attempt`.
- Because of that, the Worker never verifies the session for this path. `authenticatedRequestHeaders` (`app/firebase-session.ts:134-139`) strips all `x-chespanish-*` headers and sets none.
- The route then checks `signedInFromHeaders || fullAccessFromHeaders` at `app/api/phonetics/speech-attempt/route.ts:14`. Both are always false.
- Trigger: a signed-in PRO user records a take in `app/phonetics-family/SpeechAttempt.tsx:27`, which POSTs `/api/phonetics/speech-attempt` with the session cookie.
- Actual: 401 "Inicia sesión con acceso PRO." Expected: speech analysis.
- Fails closed, so this is not a security hole.
- `tests/phonetics-speech-route.test.mjs` misses it because it calls the route directly with hand-made `x-chespanish-*` headers and never goes through the Worker.
- Fix: one-line addition of the path to `identityAware`.

**2. Teacher data is keyed by Firebase UID instead of the internal `users.id`. Severity: medium (data portability / account-model breach), no cross-user leak. VERIFIED in code.**
- `docs/BACKEND_MIGRATION.md:25-26` says the Firebase UID "is not the account primary key".
- These handlers still write and scope by `session.userId` (`x-chespanish-user-uid`, the Firebase UID), not `accountId`:
  - `app/student-tracker/server.ts:4-7` (students, class records, CSV export)
  - `app/api/roster/route.ts:12-15`
  - `app/api/live-class/route.ts:12-15`
  - `app/autoestudio/share/server.ts:87-92` (passes, learners, homework errors, notes)
  - `app/api/lesson-reports/route.ts:9,12`
- Progress, favorites and billing correctly use `accountIdFromHeaders`.
- Outcome: if a teacher's auth identity is re-linked or migrated (new provider or Firebase project), their students, homework passes and reports are orphaned. They stay internally consistent, so there is no IDOR.

**3. `Origin: null` on student-tracker writes returns 500 instead of 403. Severity: low (robustness). VERIFIED.**
- `app/student-tracker/server.ts:12` calls `new URL(origin)`. The literal `null` origin (sandboxed iframe, some privacy modes) throws a TypeError.
- `trackerErrorResponse` (`:25-31`) maps that to 500 `internal_error`.
- Trigger: POST/PATCH/DELETE `/api/students` or `/api/class-records/*` with `Origin: null`. Expected: 403 `forbidden_origin`.

**4. Unhandled D1 errors in `/api/roster` POST become a bare 500. Severity: low. VERIFIED.**
- `app/api/roster/route.ts:35-41`: `syncRoster`, `linkLearner` and `listLinks` are awaited with no try/catch, unlike GET (`:20-25`) and every sibling route.
- The body has no content-type or size check before `request.json()` (`:34`). Size is bounded by platform limits only.

**5. `/aprender-espanol` and `/para-profesores` always render the signed-out state. Severity: low (cosmetic). HYPOTHESIS as to impact.**
- Both read `signedInFromHeaders` (`app/aprender-espanol/page.tsx:124`, `app/para-profesores/page.tsx:105`), but neither path is in `identityAware`, so the value is always false.
- This may be intentional for the SEO pages.

**6. A FREE account can write progress for PRO lesson IDs. Severity: low (data hygiene only, no content leak). VERIFIED.**
- PUT `/api/progress` (`app/api/progress/route.ts:43`) accepts any catalog lesson ID with no entitlement check.

### Checked and clean
- **Header trust boundary.** All six `x-chespanish-*` headers are deleted on every request, then rebuilt only from a verified Firebase token plus the D1 account (`firebase-session.ts:127-152`). `x-autoestudio-*` is wiped and rebuilt from the signed share cookie (`worker/autoestudio-access.ts:4`). `x-spanishcue-identity-checked` is deleted and `x-spanishcue-pathname` is overwritten. The token comes only from an HttpOnly, SameSite=Lax cookie, and unverified emails are rejected.
- **Admin/owner routes.** `/admin*`, `/api/admin/*` and `/api/settings` are owner-gated in the Worker (`index.ts:288,322`) and again in each route (billing, billing/setup, export, lesson-reports, teachers, settings). The `//` and `.rsc` path bypasses are closed (`index.ts:243-249`, `pagePathname`). Percent-encoded paths are checked in decoded form, which is the stricter direction.
- **Cross-site protection.** Every state-changing POST/PUT/PATCH/DELETE checks exact Origin, and share routes also reject `sec-fetch-site: cross-site`. Webhooks have no origin check but are signature-verified: PayPal via `verifyPaypalWebhook`; Paddle via HMAC with a 300s window and constant-time compare. Both are idempotent.
- **Cache-control.** The Worker forces `private, no-store` on every non-asset, non-edge-cache response (`index.ts:381-391`). The edge cache only applies to listed SEO paths with no cookie or auth header.
- **D1.** No user input is concatenated into SQL. The only interpolations are constants, quoted table names in the owner-only export, or the signed-session level. Every tracker, live-class, roster, autoestudio, error/note, favorites, progress and billing query is scoped by the owner or user. Reassigning a class record to another student re-checks that the student belongs to the same owner. Paddle and PayPal refresh, portal and subscription calls verify the subscription belongs to the user. Claim binding requires the HttpOnly claim cookie and a matching verified email.
- **Premium media and private chunks.** These are AES-GCM blobs, decrypted only after `hasFullLibraryAccess` (`worker/private-asset-auth.ts`), which re-verifies the Firebase token plus an active, full-access account. `/audio/<premium>` returns 403 in the Worker as well. PRO lessons, boards and autoestudio redirect to `/acceso`. `public/conversation-premium` and `public/listening-premium` hold only preview thumbnails.
- **Malformed JSON.** Bodies that are not valid JSON, or that parse to `null`, get 400 in every route I checked (progress, favorites, live-class, billing refresh/subscription/claim, settings, teachers, session).
- **Recent changes since 2026-10-15.** The live-class `WORLD_LESSON_IDS` additions are still owner/student-scoped. The demo PRO redirect, the licence watermark, the canonical-path/owner-billing hardening (95b19b6) and the per-IP rate limits show no regressions. PR #60 (Live billing grants count as PRO) is in `db/accounts.ts`.
````

## 2026-10-22T02:15:29.463Z — Facilitator → Alejandro (task brief (agent spawn))

````text
You are "Alejandro", CEO of the SpanishCue Executive Board, acting as the independent code reviewer for the Thursday reliability PR. READ-ONLY: no edits, commits, pushes, or network beyond the local repo; never touch Cloudflare or D1.

Repo /home/user/spanishcue-web, branch claude/thursday-review-20261022 (2 commits on origin/main 4d2c680). Review `git diff origin/main...HEAD`. Note a full `npm test` is running in the background in this checkout: do NOT run npm test, build, or wrangler; you may run single fast node tests (e.g. `node --test tests/worker-identity-routes.test.mjs tests/student-tracker.test.mjs tests/production-smoke.test.mjs`).

The changes claim:
1. worker/index.ts: adds '/api/phonetics/speech-attempt' to `identityAware`, because the Worker strips x-chespanish-* identity headers and recreates them only on identityAware paths, so app/api/phonetics/speech-attempt/route.ts (which requires signedInFromHeaders && fullAccessFromHeaders) always returned 401 for PRO users. New guard tests/worker-identity-routes.test.mjs checks every app/api route reading identity headers is identityAware.
2. app/student-tracker/server.ts requireSameOrigin: exact string compare so `Origin: null` gives 403 not a 500 TypeError.
3. scripts/production-smoke.mjs: new checks that /hospital-san-casi-vivo and /la-feria-de-villaluz anonymously redirect to /acceso, /audio/escucha-3d/feria-a2-baile.mp3 is 403, and the two /resources/... teacher pages return 200 with `<title>3D Spanish Conversation Activity …`, "Inside the 3D world", and "BreadcrumbList". This script runs against PRODUCTION every 6h and in the deploy workflows (staging too), so a wrong expectation would open a false incident or BLOCK a deploy. Verify each expectation against the code: lesson catalog paths/levels/titles (app/lesson-catalog.ts), resourceTitle and slugging (app/resource-seo.ts), the resource page (app/resources/[slug]/page.tsx — how is <title> rendered, does the breadcrumb JSON-LD appear with exactly "BreadcrumbList" in quotes, any HTML escaping of the en dash "–"?), worker access logic (worker/index.ts: identityAware lesson path, premiumAudio, edge cache returning cached HTML). Also check whether the staging Worker would serve these the same way (docs/releases/STAGING.md, deploy-staging.yml uses this smoke?).
4. Any side effect of making speech-attempt identityAware (rate-limits, edge cache, x-spanishcue-identity-checked) — is it safe?

Report: APPROVE or REQUEST CHANGES, with each concrete issue (file:line, why, fix). Under 500 words.
````

## 2026-10-22T02:17:07.519Z — Alejandro → Facilitator (hand-back report)

````text
**Verdict: APPROVE.** I found no blocking issues. Reviewed `git diff origin/main...HEAD` (c58865ba, 3422f508). Tests I ran: `node --test tests/worker-identity-routes.test.mjs tests/production-smoke.test.mjs` (12/12 pass) and `tests/student-tracker.test.mjs` (7/7 pass). I did not run npm test, build or wrangler, and I made no edits and no network calls.

**1. speech-attempt is now identityAware (`worker/index.ts:291`). Correct.**
- The route requires `signedInFromHeaders && fullAccessFromHeaders`. Before this change the Worker stripped those headers and never recreated them on this path, so PRO users always got 401.
- The client (`app/phonetics-family/SpeechAttempt.tsx:27`) makes a same-origin fetch. The session comes from a cookie (`firebaseTokenFromHeaders` reads `FIREBASE_SESSION_COOKIE`), so the browser sends it without any client change.
- Side effects are all safe:
  - Rate limit: `/api/phonetics/speech-attempt` was already in `RATE_LIMITED_POSTS` (`worker/rate-limit.ts:19`). It is keyed by IP and checked before identity, so nothing changes.
  - Edge cache: identityAware paths get no `edgeKey`, and this is a POST with `private, no-store`, so nothing is cached.
  - `x-spanishcue-identity-checked`: only the layout's AuthSessionSync reads it. It has no effect on an API JSON response.
  - Cost: one extra Firebase verify and D1 account lookup per request, only when the cookie is present.
- Guard test: it correctly evaluates the real `administrative`/`identityAware` expressions. I also checked for API routes that read raw `x-chespanish-*` headers without the helper functions. There are none, so the regex leaves no gap today.

**2. `requireSameOrigin` (`app/student-tracker/server.ts:13`). Correct.** Comparing the origin string exactly makes `Origin: null` and malformed origins return 403 instead of throwing a TypeError. Browsers send a serialized origin with no trailing slash, so real same-origin requests still match. The new test asserts status 403 and code `forbidden_origin`.

**3. Production smoke expectations (`scripts/production-smoke.mjs:31-43`). All verified against the code.**
- **Catalog:** id 240 has path `/hospital-san-casi-vivo` and displayLevel `A0–C2` (U+2013, the same byte sequence in both files). Id 241 has path `/la-feria-de-villaluz` and level A2. Neither is in `freeLessonIds` or a conversation family.
- **Anonymous redirect:** both paths match `lessonAtPath`, so an anonymous visitor gets `noStoreRedirect('/acceso?returnTo=…')`. Its pathname is `/acceso`, which is what the smoke expects.
- **Audio:** the `escucha-3d` prefix is not in `freeAudioPrefixes`, so the 403 is returned before any asset fetch. That holds whether or not the file exists, and `public/audio/escucha-3d/feria-a2-baile.mp3` does exist.
- **Slugs:** `slugify` turns `A0–C2` into `a0-c2`, giving `spanish-conversation-activity-a0-c2-hospital-san-casi-vivo` and `spanish-conversation-activity-a2-la-feria-de-villaluz`.
- **Title:** `resourceTitle` adds the "3D " prefix because 240 and 241 are in `immersiveWorldGameByLessonId`. The layout title is a plain string, not a template. React does not escape "–". The `<title>…A1–C2…</title>` pattern is already asserted in `tests/rendered-html.test.mjs:176`.
- **Breadcrumb:** the `BreadcrumbList` structured data is written with `JSON.stringify`, which produces exactly `"@type":"BreadcrumbList"`.
- **"Inside the 3D world":** rendered as an `<h2>` whenever `world3d` is true.
- **Edge cache:** a cached resource page is a byte copy of the same server-rendered HTML, so the checks still pass on a cache hit.
- **Already in production:** the Hospital 3D resource page went out in PR #224 (`c06c01c`, production run 39359743902). Feria went out in #251 (`6383b3b6`, production run 39549567404), recorded in `docs/board/PUBLISHED.md` and commit 6712d323. So when this merges, the push-triggered smoke workflow and the 6-hourly one should not open a false incident.
- **Staging:** `deploy-staging.yml:181` runs this same script with the workers.dev origin. None of the new checks are specific to spanishcue.com: the resource pages are public SSR, and the redirect and 403 logic is identical in the Worker. So staging should pass as well.

**Non-blocking notes:**
- The guard test hardcodes `premiumBoard`, `premiumAudio`, `autoestudio` and `lesson` as false. If a future identity-reading API route is covered only by one of those predicates, the test would fail even though the route is fine. That is acceptable for now; a comment saying so would help.
- This PR also gives the Hospital A0–C2 content smoke that `PUBLISHED.md` lists as pending ("changed-URL smoke … not run") an automated check. Once production smoke passes, that entry can move to Published.
````
