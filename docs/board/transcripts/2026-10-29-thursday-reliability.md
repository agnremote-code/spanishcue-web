# Transcript: Thursday reliability routine, 2026-10-29

The board was convened proportionately. The facilitator session did the CI/deploy review, the fixes, the tests and the records. A fresh agent acting as **Sofia** did a read-only audit of the academy/institutions API. A fresh agent acting as **Alejandro** did the independent code review. Martin was not needed (no lesson content). The executives did not message each other.

Exported verbatim from the agent logs (timestamps UTC).

## 2026-10-29T02:06:57.523Z · Facilitator → Sofia

You are Sofia, a SpanishCue Executive Board member (see docs/board/CONSTITUTION.md), doing a READ-ONLY security/correctness audit for the Thursday reliability review in /home/user/spanishcue-web (branch claude/thursday-review-20261029, main 839ea09). Do not edit, commit, push, run deploys, or contact any external service; never query production D1.

Scope: the academy/institutions surface added since commit 4d2c680 — `git diff 4d2c680 HEAD -- app/api/academy-demo app/api/academy app/api/admin/academies app/api/admin/academy-demo db/institutions.ts drizzle/0016_academy_demo_requests.sql drizzle/0017_institutions.sql worker/index.ts worker/rate-limit.ts`, plus the pages that call these APIs (grep for `/api/academy` under app/, e.g. app/academias/panel, app/academias/unirse) and the relevant tests (tests/academias*.test.mjs).

Context you need: worker/index.ts strips browser-supplied x-chespanish-* headers and rebuilds identity only for paths listed in its `identityAware` expression; routes read identity via `getUserSessionFromHeaders` from app/access-policy.ts. Admin is gated by the `administrative` prefix check in the Worker plus the route itself. Writes must check exact Origin. Responses must be `private, no-store`. A previous audit (docs/board/STATUS.md, 2026-10-22 entry) found teacher data keyed by Firebase UID rather than the internal account id — note whether the academy code repeats that, but it's a known item, not a new finding.

Check concretely: (1) authn: anonymous requests to each method; is every identity-reading path in `identityAware`? (2) authz: can a member/teacher read or change another institution's data, seats, members or invites; can a non-owner reach admin endpoints; join-code/invite brute-force or reuse; seat-limit races (D1 batch/conditional insert vs. read-then-write); (3) origin checks on every write; (4) input validation and SQL (parameterized?); (5) does an academy membership grant PRO access, and if so is that grant server-side only and correctly revoked; (6) error handling that leaks internals or returns 500s; (7) cache headers.

For each finding give: severity (High/Medium/Low), file:line, a concrete request sequence that triggers it, whether it is VERIFIED from code or a HYPOTHESIS, and a proposed minimal fix plus a regression test idea. Also list what you checked and found clean. Be precise and do not inflate; if nothing is wrong, say so. Report under 700 words.

## 2026-10-29T02:08:32.041Z · Sofia → Facilitator

## Sofia: academy and institutions audit (read-only, main 839ea09 / branch HEAD c4b56293)

I found no High-severity issues. Authentication, cross-institution authorization, origin checks, SQL parameterization and cache headers all hold up. There are two Medium and four Low findings, all about atomicity or error handling.

### Findings

**M1. Removing a member can leave a permanent PRO grant behind** (`db/institutions.ts:302-308`). Status: VERIFIED from code; the trigger is a transient D1 failure.
- `removeMember` runs three separate calls: DELETE the membership, then `revokeInstitutionGrant`, then `syncSeats`.
- If the revoke fails after the DELETE succeeds, the client gets a 503, but the member is already gone. Their grant is still `active` with `expires_at NULL`, and it is `teacher_library`, so `ENTITLED_GRANT_SQL` counts it as full access.
- It can't be fixed afterwards. A retry returns 404, and `syncSeats` (including the owner's `setSeatLimit(…, 0)`) only loops over current members.
- **Sequence:** admin POSTs `{action:"remove-member", userId}`, D1 fails on the second statement, and the teacher keeps PRO indefinitely.
- **Fix:** put the DELETE and the revoke in one `db.batch`. Also make `syncSeats` revoke every `source='institution' AND source_reference=? AND user_id NOT IN (members)` row.
- **Test:** use a DB stub that throws on the revoke statement, then assert that a retry or owner sync brings `accessLevel` back to `free`.

**M2. A seat-limit change can race a seat sync and exceed the limit** (`db/institutions.ts:114-143`, `340-349`). Status: HYPOTHESIS (the interleaving is plausible but I didn't reproduce it).
- `syncSeats` reads `seat_limit` and the member list, then writes a batch later.
- **Sequence:** an accept or remove reads `seat_limit=10`; the owner sets 2 and its sync finishes; the stale sync then writes 10 active grants. The extra grants stay until the next sync.
- A smaller version of the same problem: seat order is `created_at` (in seconds) then `user_id`. Someone who joins in the same second with a lexically smaller UUID can take an existing holder's seat.
- **Fix:** do the allocation inside one batch, as SQL that reads the limit itself, e.g. `… WHERE user_id IN (SELECT user_id … ORDER BY created_at,user_id LIMIT (SELECT seat_limit FROM institutions WHERE id=?))`, plus the matching revoke. This also covers M1.
- **Test:** call `setSeatLimit` down while a sync that started with the old limit is still pending, then assert active grants ≤ the limit.

**L1. Accepting an invitation is not atomic** (`db/institutions.ts:283-292`). Status: VERIFIED.
- The invitation is claimed first, then the member insert runs with `ON CONFLICT DO NOTHING`.
- If the insert fails, or the user joined another academy at the same moment, the link is used up and the user isn't added. In the concurrent case the response is a 200 showing the other academy.
- **Fix:** batch the claim and a conditional insert, and check `changes` on the insert.

**L2. Malformed admin request body returns 503** (`app/api/admin/academies/route.ts:24`). Status: VERIFIED.
- `request.json()` on a bad body gives a 503, not a 400, and there is no content-type check. Owner-only and origin-checked, so this is cosmetic.
- **Fix:** handle bad input as `/api/academy` does (415/400).

**L3. Duplicate "create academy" can return 503** (`db/institutions.ts:156-167`). Status: VERIFIED.
- Two create requests at the same time from the same user: the second hits the UNIQUE `user_id` constraint and gets a 503 instead of a 409. The batch rolls back, so no data is corrupted.

**L4. No admin hierarchy and no rate limit on writes.** Status: VERIFIED.
- Any admin, including an invited one, can demote or remove the academy's creator. This is a product decision, not a vulnerability.
- `/api/academy` is not in `RATE_LIMITED_POSTS`. Pending invitations are capped at 100 with a conditional insert, so the impact is low.

### Checked and clean
- **Who the user is (authentication):**
  - `/api/academy`, `/academias/panel` and `/academias/unirse` are in `identityAware`; `/api/admin/*` is covered by `administrative`.
  - `authenticatedRequestHeaders` always strips `x-chespanish-*` and only sets them when `emailVerified`.
  - Anonymous GET and POST to `/api/academy` return 401; anonymous calls to both admin routes return 403. `/api/academy-demo` is anonymous on purpose, origin-checked and rate-limited.
- **Account key:** the academy code uses `accountIdFromHeaders`, the internal `users.id`. It does not repeat the Firebase-UID problem from the 2026-10-22 audit.
- **What a user may touch (authorization):**
  - Every admin action calls `requireAdmin`, and the institution always comes from the actor's own membership, never from the client.
  - Removing, re-roling and revoking are all scoped by `institution_id`, and the tests cover the cross-academy 404.
  - Teachers never receive the member or invitation lists.
  - Admins can't remove or demote themselves, so at least one admin always remains.
  - Only the owner can set seat counts.
- **Invitations:**
  - Tokens are 256-bit random values; only their SHA-256 hash is stored, and the format is checked before lookup.
  - They are single-use (the claim checks `changes`), expire after 14 days, are replaced when the same email is re-invited, and can be revoked.
  - Acceptance is bound to the verified Firebase email. Brute force is not feasible. The join page sends `no-referrer`.
- **PRO access:**
  - Only server code writes the grant (`source='institution'`, `teacher_library`); it is revoked when seats are reduced or a member is removed (apart from M1). Personal and manual grants are never touched, and the tests confirm this.
  - Creating an academy gives 0 seats, so no free PRO.
- **Writes:** every write checks exact `Origin`, and `/api/academy` also enforces JSON content type and a 4 KB body limit.
- **SQL:** every query is parameterized; the only string interpolation is constant product codes.
- **Migrations:** 0016 and 0017 only use `CREATE … IF NOT EXISTS`.
- **Errors:** database failures return a generic 503 and never leak details (tested).
- **Cache:** every API response is `private, no-store`, and the Worker forces `private, no-store` on identity-aware pages.

I made no edits, commits or deploys, and did not contact production D1 or any external service.

## 2026-10-29T02:15:39.516Z · Facilitator → Alejandro

You are Alejandro, SpanishCue Executive Board member (docs/board/CONSTITUTION.md), giving the INDEPENDENT code review for the Thursday reliability routine. Repo: /home/user/spanishcue-web, branch claude/thursday-review-20261029. Review `git diff 839ea09..HEAD -- scripts tests db` (ignore docs/). Read-only: do not edit, commit, push, deploy, or touch production/D1/secrets. You may run local tests (e.g. `node --test tests/production-smoke.test.mjs tests/academias-institutions.test.mjs`; node_modules is installed).

Two changes:
1. scripts/production-smoke.mjs: network errors/timeouts now throw an error naming method+path, and GET/HEAD get one retry. Motivation: scheduled Production Smoke Monitor run 40638724042 (2026-10-28 05:33Z) died with a bare `DOMException [TimeoutError]` and opened incident #289 naming no URL; the next run passed. This same script is the post-deploy gate in deploy-staging.yml, deploy-production.yml and ci-automerge.yml (check how its exit status drives rollback there). Judge: does one retry on a network error weaken the release gate unacceptably? Are status assertions still never retried? Any way the retry repeats a write?
2. db/institutions.ts: removeMember now does DELETE membership + revoke grant in one db.batch (previously separate calls; a failure between them left a former member with a permanent active `teacher_library` grant, source='institution', that no retry or sync could reach). syncSeats now always appends a statement revoking this institution's grants held by non-members. Check: correctness of the SQL (NOT IN subquery, status filter, product_code/source/source_reference scope — must never touch manual/billing grants or other institutions' grants); D1 batch semantics (atomic; result array ordering; `meta.changes` of the DELETE); behaviour when the target isn't a member (batch still runs the revoke scoped to this institution — acceptable?); any interaction with acceptInvitation/setSeatLimit; whether the test's env-shim change (a Proxy reading globalThis.__INSTITUTION_TEST_ENV lazily) changes the meaning of existing tests. Confirm the new regression test fails on main (`git stash` is NOT allowed — instead copy main's db/institutions.ts via `git show 839ea09:db/institutions.ts` into a temp dir if you want, or reason from code).

Return a verdict APPROVE or REQUEST CHANGES, with blocking (B#) and non-blocking (NB#) items, each with file:line and a concrete reason. Under 500 words.

## 2026-10-29T02:17:28.064Z · Alejandro → Facilitator

**Verdict: APPROVE.** I found no blocking issues.

**What I ran (read-only)**
- On HEAD, `node --test tests/production-smoke.test.mjs tests/academias-institutions.test.mjs` passes 16 of 16.
- I extracted main 839ea09 with `git archive` into `/tmp/claude-0/-home-user-spanishcue-web/a604298c-0ed9-5d45-bce2-a01ca2a1459f/scratchpad/mainrepo` and ran HEAD's institutions test file against main's `db/institutions.ts`. The new regression test fails there with "membership kept when the revoke failed", expected 1, actual 0. So it does reproduce the bug.

**1. Production smoke retry (`scripts/production-smoke.mjs:10-20`)**
- **Status assertions are never retried.** The retry is inside `request()`, which only catches errors thrown by the fetch call. The `assert.ok` at line 23 runs after it and is untouched. A wrong status on the first answer still fails at once.
- **No write is repeated.** Only GET and HEAD retry. All POSTs (lines 70, 72, 116, 120, 123) fail on the first network error, and the test checks `posts === 1`. The explicit `{method:"GET"}` at line 74 is read-only.
- **The release gate is not weakened in a way that matters.** In deploy-production.yml:259-276 and deploy-staging.yml:184-201, the smoke step is `continue-on-error`, and `outcome=='failure'` triggers `wrangler rollback`. An origin that is down or hanging still fails on the second attempt, so it still rolls back. Only one dropped connection per request is forgiven. In ci-automerge.yml:294-297 the smoke only opens an incident, so the retry just cuts false incidents like #289. The worst case adds 20s per flaky GET.

**2. Member removal and seat sync (`db/institutions.ts`)**
- **The SQL is scoped correctly (lines 144-152).**
  - `source='institution' AND source_reference=? AND product_code=?` cannot match manual or billing grants, which have a different `source`.
  - It also cannot match another academy's grants: the upsert at line 130 rewrites `source_reference`, and `institution_members.user_id` is `UNIQUE`.
  - `NOT IN` is safe from the NULL problem because `user_id` is `NOT NULL` (drizzle schema, line 17).
  - The filter `status != 'revoked'` avoids pointless rewrites.
- **D1 batch behaviour (lines 313-317).** D1 runs a batch as one transaction and returns results in statement order, so `[result]` is the DELETE and its `meta.changes` is correct. If the revoke fails, the DELETE rolls back and the admin can retry.
- **When the target is not a member,** the revoke still runs, but only for that user's grant from this academy. Any such grant would be an orphan, so revoking it is correct, and the 404 still follows. Acceptable.
- **acceptInvitation and setSeatLimit:** accept inserts the member before `syncSeats`. The `NOT IN` subquery is evaluated inside each batch's transaction, so a newly joined member is never caught. Any interleaving of concurrent syncs ends with the correct grants. setSeatLimit now also heals orphaned grants, which is what we want.
- **The test env shim does change the meaning of existing tests, for the better** (`tests/academias-institutions.test.mjs:34`).
  - `load()` produces the same bundle text every time, so the `data:` URL module is cached after the first test. Before this change, `env` was frozen to the first test's object.
  - That object's DB was later replaced at line 143 with one that always throws. So the "migration not run" test (line 150) got a 503 no matter what its own fake DB did. It could not fail.
  - With the lazy Proxy, each test uses its own DB. The new test also depends on this to get the flaky DB.

**Non-blocking**
- **NB1** `scripts/production-smoke.mjs:14,33ff`: the timeout signal also covers reading the response body. A timeout during `.text()` or `.json()` is neither retried nor labelled with the request, so a bare TimeoutError can still happen there. Consider reading the body inside `request()` or wrapping those reads.
- **NB2** `scripts/production-smoke.mjs:16`: the retry fires immediately. A short backoff (about 1–2s) would make it more useful against a brief edge or DNS hiccup.
- **NB3** `db/institutions.ts:160`: `revokeInstitutionGrant` has no `status != 'revoked'` filter. It bumps `updated_at` on grants that are already revoked, including on the 404 path. This is cosmetic but makes the audit timestamps noisy.
- **NB4** `tests/academias-institutions.test.mjs:150-157`: now that this test is no longer vacuous, it deserves a one-line comment saying so. That way nobody reverts the Proxy as unnecessary.
