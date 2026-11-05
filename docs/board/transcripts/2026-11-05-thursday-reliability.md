# Transcript: Thursday 2026-11-05 reliability routine

- Scheduled cloud run, branch `claude/thursday-review-20261105`, PR #387. Subscription usage: **UNKNOWN**.
- **Board convened proportionately, as a subagent of the facilitator.** The facilitator ran the audit and wrote the fixes. A fresh agent acting as **Alejandro** did the independent code review. **Sofia and Martin were not convened**: no content or 3D code changed. No executive messaged another. Every exchange went facilitator → Alejandro → facilitator.
- Times are UTC on 2026-11-05. Exact send times were not recorded:
  - message 1 was sent at about 02:00Z;
  - message 2 was sent a few minutes later;
  - message 3 was received just before 02:12:06Z, when the facilitator read the clock.
- The messages are reproduced verbatim below. The facilitator's local scratchpad paths are kept as sent.

## 1. Facilitator → Alejandro (code review request)

> You are "Alejandro", acting as the independent code reviewer for the SpanishCue Executive Board (see docs/board/CONSTITUTION.md in /home/user/spanishcue-web). You did not write this change. Review it adversarially; do not redo a broad investigation.
>
> Repository: /home/user/spanishcue-web, branch `claude/thursday-review-20261105` (already checked out). Base is origin/main 27f896e9. Diff: `git diff origin/main...HEAD` (files: db/institutions.ts, tests/academias-atomic.test.mjs, package.json). Do NOT modify any files, commit, push, or touch GitHub. Read-only review. Do not run `npm test` (another process is running it); you may run `node --test tests/academias.test.mjs tests/academias-institutions.test.mjs tests/academias-atomic.test.mjs` and small node/sqlite experiments in /tmp/claude-0/-home-user-spanishcue-web/c780790b-c0e4-5376-b7c5-108efce694a4/scratchpad.
>
> Intent of the change:
> 1. M2: `syncSeats` previously read seat_limit and the member list, then wrote grants in a batch from that snapshot, so a sync that read before a seat reduction could re-grant removed seats. Now the ranking (ROW_NUMBER over created_at, user_id) and the limit are evaluated inside the batch SQL (INSERT ... SELECT ... ON CONFLICT DO UPDATE; UPDATE ... WHERE user_id IN (ranked > limit); orphan revoke unchanged).
> 2. L1: `acceptInvitation` previously claimed the invitation, then inserted the membership with ON CONFLICT DO NOTHING; a join to another academy in between burnt the link and returned the other academy's membership as success. Now one batch: conditional INSERT...SELECT from the open invitation, then claim only if the membership exists; on no claim, 409 if in another academy, else 410.
>
> Check specifically:
> - Semantic equivalence with the old syncSeats in the non-race case (same rows granted/revoked, same columns updated, source_reference handling, personal/manual grants never touched, product code).
> - SQLite/Cloudflare D1 compatibility: window functions in D1, the INSERT...SELECT ... ON CONFLICT parse ambiguity (needs a WHERE in the SELECT), bind parameter order vs placeholder order, D1 batch result shape (`meta.changes`) and transaction semantics.
> - Any new failure mode in acceptInvitation (expired invitation, revoked, already-member of same academy, role mapping, error statuses the route maps).
> - Whether the tests genuinely fail on main and pass on the branch (you can verify with `git stash`-free approaches, e.g. `git show origin/main:db/institutions.ts > /tmp/.../old.ts` and bundling it; do not alter the working tree).
> - Anything in the route layer (app/api/academy/route.ts, app/api/admin/academies/route.ts) affected.
>
> Reply with: verdict APPROVE or REQUEST CHANGES; numbered blockers (with file:line and a concrete failure scenario) and numbered non-blocking notes. Label each claim VERIFIED (how) or HYPOTHESIS. Be concise.

## 2. Facilitator → Alejandro (scope extension)

> Facilitator: one more commit landed on the branch, 54ecc89 "Admin Seguridad: keep the alert list working past 100 alerting accounts" (db/account-security.ts listSharingAlerts email lookup now a subquery with 4 fixed params instead of one bind per account; D1 caps at 100 bound params; new test in tests/account-security.test.mjs with a shim that throws over 100 params). Please include it in your verdict: check the subquery selects exactly the same account set as the two batch queries (windows, thresholds, HAVING), and that the test fails on main. Same read-only rules.

## 3. Alejandro → Facilitator (verdict)

> **Verdict: APPROVE.** I found no blockers in db6f8bf (academies M2/L1) or in 54ecc89 (Admin Seguridad alert list). I changed no files in the repo. Everything I wrote is in /tmp/claude-0/-home-user-spanishcue-web/c780790b-c0e4-5376-b7c5-108efce694a4/scratchpad: `old/` holds main's tree, and `diff.mjs` is a test that runs the old and new `syncSeats` on the same data and compares the results.
>
> **Blockers:** none.
>
> **What I checked**
>
> 1. **`syncSeats` gives the same result as main when there is no race. VERIFIED** with `diff.mjs`. It ran 300 random cases through the main version and the branch version and compared every `access_grants` column:
>    - Inputs covered: 0–5 seats, 0–6 members, tied `created_at` values, existing institution grants (active or revoked, `source_reference` A or B, some with `expires_at` set), manual grants, and institution grants under the `spanishcue-pro` product code.
>    - Result: 0 differences once timestamps are masked. The only raw differences were the clock rolling over a second between the two runs.
>    - Manual grants and grants under other product codes are never touched. `source_reference` is still overwritten on conflict, as before. The over-limit revoke still ignores `source_reference`, as before; that is safe because `user_id` is UNIQUE in `institution_members`.
>
> 2. **Bind order matches placeholder order. VERIFIED** by reading `db/institutions.ts:121-151`:
>    - INSERT has 7 placeholders: product, institution, now, now, now, then the ranking `institution_id`, then the `seat_limit` id. The binds follow that order.
>    - Over-limit UPDATE has 4: now, product, institution, institution.
>    - The passing tests also show seats landing in the right academy.
>
> 3. **The SQL parses and runs. VERIFIED** under node:sqlite through the test shim.
>    - Both `INSERT ... SELECT ... ON CONFLICT` statements have a WHERE on the outer SELECT (`position <= ...` at `db/institutions.ts:129` and `expires_at > ?` at `:298`), so the upsert parse ambiguity does not apply.
>    - D1 supporting `ROW_NUMBER() OVER` and running a batch as one transaction in order, with `meta.changes` per statement: **HYPOTHESIS**, based on D1 documentation (modern SQLite, window functions supported). I have not run it on D1 itself.
>
> 4. **`acceptInvitation` failure modes. VERIFIED** by reading the code plus test 3. Each case:
>    - Expired, revoked or used before the batch: the earlier 410 check still applies.
>    - Expired or revoked between the read and the batch: nothing is inserted, nothing is claimed, 410.
>    - Joined another academy in the gap: insert does nothing, the claim's EXISTS check fails, 409.
>    - Already a member of the same academy before the call: returns the existing membership, as before.
>    - Same user, same link, sent twice at once: the second request gets 410, which matches main.
>    - The role mapping is unchanged. The statuses thrown are still 403, 409, 410 and 503, and `app/api/academy/route.ts:68` passes `error.status` through. Neither function's signature changed, so the admin route (`setSeatLimit` → `syncSeats`) is unaffected.
>
> 5. **The new tests fail on main and pass on the branch. VERIFIED.** I ran `tests/academias-atomic.test.mjs` against main's code in the `old/` tree:
>    - On main, tests 1 (seat reduction) and 2 (join to another academy) fail.
>    - Test 3 passes on main too. It guards against regressions and does not reproduce the bug.
>    - On the branch, `academias`, `academias-institutions` and `academias-atomic` all pass (9 of 9).
>
> 6. **54ecc89, the Admin Seguridad alert list. VERIFIED.**
>    - The subquery selects the same accounts as the two batch queries (`db/account-security.ts:89-101` against `:124-130`):
>      - devices: same `last_seen >= since`, `GROUP BY account_id`, `HAVING COUNT(*) > DEVICE_ALERT_THRESHOLD` (3);
>      - usage: same `day >= fromDay AND premium_opens > DAILY_OPENS_ALERT_THRESHOLD` (150). The batch query's GROUP BY only removes duplicates, which UNION also does.
>    - The bind order matches: since, 3, fromDay, 150.
>    - Emails are only attached to accounts already in the alert list, so any extra rows the subquery returns are ignored.
>    - With the branch test file run against main's `account-security.ts`, test 3 fails with "D1_ERROR: too many SQL variables". On the branch, 4 of 4 pass.
>
> **Non-blocking notes**
>
> 1. **HYPOTHESIS (54ecc89):** the email lookup is a separate query that runs after the batch. If an account drops out of the windows between the two, for example a device row is deleted or the day rolls over at midnight UTC, that alert shows with `email: null`. Main's ID list did not have this gap. It only affects display and fixes itself on the next load.
> 2. **VERIFIED by reading:** the `acceptInvitation` claim UPDATE does not re-check `expires_at`. That is harmless because the claim also requires the membership to exist, which only the expiry-checked insert can create. In the rare case where the user became a member of the same academy through another invitation at the same moment, this link is claimed and the call succeeds; main did the same.
> 3. **VERIFIED by reading:** the test shim runs the injected interruption before the whole batch, never between statements. That models D1 correctly, since a batch runs as one transaction, but the tests prove nothing about a database where a batch is not atomic.
> 4. **The `package.json` change is fine:** it adds `tests/academias-atomic.test.mjs` to `npm test`. 54ecc89 does not need a `package.json` change because `account-security.test.mjs`, the file it edits, is already part of `npm test`.
