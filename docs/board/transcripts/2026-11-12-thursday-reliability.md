# Transcript: Thursday reliability routine, 2026-11-12

Exported verbatim from the session's subagent transcripts (not retyped). Each executive was a subagent of the facilitator. The executives did not message each other: every exchange is one request from the facilitator and one report back. Timestamps are UTC from the transcript records.

## Sofia: draft BOARD-DECISION-005

### Facilitator → Sofia (2026-11-12T02:06:21.702Z)

> You are **Sofia**, Chief Product & Innovation Officer on the SpanishCue Executive Board (see docs/board/CONSTITUTION.md). The facilitator (a Claude Code scheduled Thursday run) asks you to DRAFT one board decision file. Repo: /home/user/spanishcue-web (branch `claude/thursday-review-20261112`, = origin/main a7625b4). Do NOT run git commands that change state, do not commit, do not touch any file other than the one you create. Never query or write production D1; never touch secrets.
>
> ## Task (W46 plan item 4, docs/board/assessments/2026-W45.md line ~157 — missed twice already)
> Write `docs/board/decisions/BOARD-DECISION-005-uid-rekeying.md`: the UID → internal account-id re-keying decision. Deliverable is EITHER a scheduled migration item (scope, `docs/releases/MIGRATION_RELEASE.md` path, one-writer rule, no D1 writes by agents/routines) OR a recorded decision to defer with a reason. You recommend; Alejandro reviews and the board votes afterwards, so leave §Sign-off as "PENDING" with a vote table (Alejandro / Sofia / Martin) and fill only your own vote.
>
> ## Background (verified by the facilitator just now)
> - Finding from the 10-22 Thursday audit (docs/board/STATUS.md ~line 388): teacher data is keyed by the Firebase UID (`session.userId`, = header `x-chespanish-user-uid`) instead of the internal account id (`session.accountId`, header set from `auth_identities` → `users.id` in `app/firebase-session.ts:144`). Affects student tracker (`app/student-tracker/server.ts:4 authenticatedOwnerId`), roster, live-class, autoestudio share, `/api/lesson-reports`. `docs/BACKEND_MIGRATION.md` says Firebase UID is not the account key. No cross-user leak was found.
> - `app/access-policy.ts:42-70` builds the session with both `userId` (UID) and `accountId`.
>
> ## What to establish (read code; label every claim VERIFIED with file:line, or HYPOTHESIS)
> 1. Exact inventory: every table/column and API route that stores or filters by the Firebase UID rather than `users.id` (check db/schema.ts, drizzle/*.sql, app/api/**, app/student-tracker/**, academy/institutions, favorites, progress, homework links, live_class_sessions, lesson reports, referrals, account_security). Also note which areas ALREADY use accountId correctly.
> 2. Actual risk today: when does UID ≠ stable identity matter? (Firebase project change / account linking / provider switch / cutover export per docs/BACKEND_MIGRATION.md and docs/releases/CUTOVER_RUNBOOK.md, PRODUCTION_DATA_EXPORT.md). Is there any current scenario where a user loses data or another user can see it? Is there a case where a single account has two UIDs (e.g. Google + email/password linked identities in `auth_identities`) so their data splits?
> 3. Migration shape if scheduled: additive vs destructive steps (e.g. add `owner_account_id` columns + backfill via join on auth_identities + dual-read, then later drop), which files are migration-sensitive (`scripts/release-policy.mjs` migrationSensitivePaths), the MIGRATION_RELEASE.md requirements, who may execute (owner-authorized production workflow only; agents never write D1), one-writer rule (auth: `app/firebase-session.ts`, `app/api/auth/**`, `server/**`; check open PRs touching those — open PRs right now: #404, #360, #324, #283, #282, #275, #257, #225, #209).
> 4. A clear recommendation with a trigger: what would make it urgent (e.g. before Firebase identity linking ships, or before any second provider), and the smallest safe first step that needs no D1 write (e.g. a code-only dual-key read layer, or a guard test that inventories UID-keyed paths so new ones are not added).
>
> Keep it decision-sized (~80–140 lines), in the style of docs/board/decisions/BOARD-DECISION-004.md (headings: Situation, Options considered, Decision (proposed), What would change this decision, Sign-off). Header lines: Date 2026-11-12 (Thursday reliability routine); Drafted by: Sofia (agent, convened by the facilitator); Status: PROPOSED. Plain, precise English. Budget: about 25 tool calls.
>
> When done, reply with: the file path, your recommendation in 3 lines, and any defect you found that the facilitator should consider fixing in code now (with file:line).

### Sofia → Facilitator (2026-11-12T02:09:10.721Z)

> I wrote the decision file at `/home/user/spanishcue-web/docs/board/decisions/BOARD-DECISION-005-uid-rekeying.md` (about 95 lines). Its status is PROPOSED and §5 Sign-off is PENDING, with my APPROVE vote filled in and Alejandro's and Martin's left open. I touched no other file, ran no git command that changes state, and read or wrote nothing in D1.
>
> **Recommendation:**
> 1. Defer the D1 re-keying. Today's harm is orphaned data (students that stop showing for a teacher), not a leak, and it only happens after an event that is not planned. No agent or routine writes production D1 for this.
> 2. Do one code-only step now: a guard test that lists every server consumer of `session.userId` / `x-chespanish-user-uid` and fails if a new one appears. New teacher-data tables and routes must use `accountId`. This is not migration-sensitive and does not touch the auth files covered by the one-writer rule.
> 3. The migration plan is ready in three steps: A, a code-only dual read (`owner_id IN (accountId, uid)`); B, an idempotent `drizzle/00NN` key rewrite under `defer_foreign_keys`, with a backup, separate owner authorization and the owner-authorized Cloudflare workflow; C, remove the fallback later. It becomes urgent before any of these ships: Firebase account linking or "multiple accounts per email", account deletion and re-signup, Apple or a second identity provider, or a change of Firebase project. I set a review date at the first Thursday after 2026-12-10.
>
> **Main findings (all checked in code):**
> - **Keyed by UID: five entry points, ten tables.**
>   - The student tracker (`app/student-tracker/server.ts:4-8`) → `students`, `class_records`.
>   - Roster (`app/api/roster/route.ts:11-14`) → `student_homework_links`.
>   - Live class (`app/api/live-class/route.ts:14`) → `live_class_sessions`.
>   - Autoestudio share (`app/autoestudio/share/server.ts:106-108`) → the two Autoestudio tables and the three homework tables.
>   - Lesson reports (`app/api/lesson-reports/route.ts:9-12`) → `lesson_reports`.
>   - Two of these tables have composite foreign keys that include `owner_id` (`db/schema.ts:393-395`, `434-438`), which is why step B needs deferred foreign keys.
> - **Already correct:** progress, favorites, academy, billing and grants, referrals, and account security.
> - **How a single account gets two UIDs:** `syncFirebaseAccount` attaches a new Firebase UID with the same verified email to the existing `users.id` (`db/accounts.ts:188`, `ON CONFLICT(normalized_email)`). Billing, PRO access, progress and favorites follow the account; tracker, roster, live-class and homework data stay under the old UID. Nothing is deleted and nobody else can see it. When a second UID actually happens depends on the Firebase project settings, which I did not read, so the scenarios in §1 are marked as hypotheses.
> - **The cutover does not cause it:** the Firebase project stays the same (`docs/releases/CUTOVER_RUNBOOK.md:105-106`).
> - **Overlap:** open PR #404 edits `app/api/live-class/route.ts`, on an unrelated line. A re-keying PR should wait for it or rebase onto it.
>
> **Defects for the facilitator:** none urgent, and no leak.
> - `worker/index.ts:312` turns a failed account read into no account-id header (`.catch(()=>null)`). UID-keyed routes keep working; account-keyed routes return 401. This is noted in the decision as a behaviour change step A brings, not a bug.
> - The one fix worth scheduling now is the guard test from item 2. Its allowlist would be the five entry points above plus the two legitimate UID uses: `app/cuenta/page.tsx:57` and `app/firebase-session.ts` (around lines 141-148).

## Alejandro: independent code review + vote

### Facilitator → Alejandro (2026-11-12T02:11:08.192Z)

> You are **Alejandro**, CEO & Chief Strategy Officer on the SpanishCue Executive Board (docs/board/CONSTITUTION.md). You are the independent reviewer for the Thursday reliability routine (2026-11-12). Repo: /home/user/spanishcue-web, branch `claude/thursday-review-20261112` (HEAD 58c7ff5e, base origin/main a7625b4). Read-only: do not edit files, do not run git commands that change state, never query production D1. A full `npm test` is currently running in the background in this checkout — don't run `npm test` or `npm run build` yourself (it would collide); targeted `node --test <file>` runs are fine.
>
> Review `git diff a7625b4..HEAD` — two parts:
>
> **A. Code fixes (commit 27f847b0)**, each claimed to fail on main:
> 1. `db/institutions.ts` createInstitution: a concurrent create for one account lost on `institution_members.user_id` UNIQUE → 503; now re-checks membership in the catch → 409.
> 2. `app/api/admin/academies/route.ts` POST: malformed/non-object JSON → 503; now 400 (owner check still first).
> 3. `app/api/roster/route.ts` POST: D1 throw → bare 500; now JSON 503 `private, no-store`.
> Regression test: `tests/backend-error-codes.test.mjs` (added to package.json `test`). Check correctness, that no behaviour other than the error code changes, and that the tests would fail on main (you can verify by `git stash`-free means, e.g. `git show a7625b4:db/institutions.ts > /tmp/...` and reasoning, or by temporarily copying — but do NOT modify tracked files; reasoning is acceptable).
>
> **B. Decision + guard (commit 58c7ff5e)**: `docs/board/decisions/BOARD-DECISION-005-uid-rekeying.md` (drafted by Sofia) and `tests/uid-keyed-surface.test.mjs` (implements decision §3.2). Verify the key claims against code (e.g. `db/accounts.ts` ON CONFLICT(normalized_email) attaching a new UID to an existing users.id; the inventory of UID-keyed tables; the "already correct" list; that the guard covers the real UID-read shapes and has no obvious bypass that matters). Then cast your board vote on the decision: APPROVE / APPROVE WITH CHANGES / REJECT, with reasons.
>
> Budget ~25 tool calls. Reply with: verdict on the code (APPROVE / REQUEST CHANGES), numbered blockers (if any) and non-blocking notes (file:line), and your vote on BOARD-DECISION-005 with a one-line note for the sign-off table. Label claims VERIFIED (with path) or HYPOTHESIS.

### Alejandro → Facilitator (2026-11-12T02:13:03.188Z)

> ## Alejandro: independent review, Thursday reliability routine 2026-11-12
> Branch `claude/thursday-review-20261112`, HEAD 58c7ff5e, base a7625b4. I changed no files and no git state, and I ran nothing against production D1. To compare against main I extracted read-only snapshots of main and HEAD with `git archive` into the scratchpad (`/tmp/claude-0/-home-user-spanishcue-web/fd0d08e2-233f-5ddd-a6c2-fa7e082743fc/scratchpad/{main,head}`) and ran an instrumented copy of the test in each.
>
> ### A. Code fixes (27f847b0): **APPROVE**
>
> **Blockers:** none.
>
> **Fail-on-main check: VERIFIED.** I ran `tests/backend-error-codes.test.mjs` against the main snapshot: all 3 tests fail (academies test: expected 400, got 503). Against HEAD all 3 pass. In this checkout, `node --test tests/backend-error-codes.test.mjs tests/uid-keyed-surface.test.mjs` passes 5/5.
>
> **Each fix is correct, and only the error code changes. VERIFIED:**
> 1. `db/institutions.ts:170-182`: the existing pre-check (line 164) and the happy path are unchanged. A batch error turns into 409 only when the account now has a membership; any other error is rethrown as before. `institution_members.user_id` is UNIQUE (`drizzle/0017_institutions.sql:17`). The academy route maps `InstitutionError` to its status (`app/api/academy/route.ts:68`).
> 2. `app/api/admin/academies/route.ts:23-31`: the owner check and the origin check still run before the body is parsed (the test asserts 403 for an anonymous request). On main, the bodies `null` and malformed JSON gave 503. The bodies `[]` and `"seats"` already gave 400 through `setSeatLimit`'s `InstitutionError` (`db/institutions.ts:371-372`), so that part only tightens the error message.
> 3. `app/api/roster/route.ts:35-47`: the 401, 403 and bad-JSON 400 responses stay outside the try. An unknown action still falls through to 400. `db/roster.ts` throws nothing on purpose, so the catch-all cannot hide a meaningful error. GET is unchanged.
>
> **Non-blocking notes:**
> - N1 `tests/backend-error-codes.test.mjs:22` (fake `batch`): the race test does **not** hit the UNIQUE path it describes. VERIFIED by instrumenting the batch: the losing request fails with `cannot start a transaction within a transaction`, because the second `BEGIN` runs while the first batch is still open. The re-check then reads the winner's uncommitted rows over the same sqlite connection. The fix's logic is still right for real D1, where batches are atomic and serialized and the loser gets the UNIQUE error (HYPOTHESIS, based on D1 batch semantics). The test does still prove that main gives 503. Suggestion: serialize the fake `batch` with a promise-chain mutex, so the loser really gets `UNIQUE constraint failed: institution_members.user_id`.
> - N2 `db/institutions.ts:179`: if the re-check finds a membership left by an unrelated batch failure, it reports 409 rather than 503. That is acceptable, because the account really does already belong to an academy.
>
> ### B. BOARD-DECISION-005 and the guard (58c7ff5e)
>
> **Claims checked:**
> - VERIFIED: `db/accounts.ts:188`: `ON CONFLICT(normalized_email) DO UPDATE` keeps the existing `users.id`. Then `auth_identities ... ON CONFLICT(provider, provider_subject)` (`db/accounts.ts:221-232`) links the new UID to that `users.id`, and the old UID's row stays. So data under the old UID is orphaned, not leaked. It also means the step B mapping can find the old UID.
> - VERIFIED: `app/firebase-session.ts:141-145` sets the UID header and sets the account-id header only when an account resolved. `app/access-policy.ts:62-63` gives `userId` = UID and `accountId` = `users.id`. `worker/index.ts:311-313` has `.catch(()=>null)`.
> - VERIFIED: the UID-keyed entry points are `app/student-tracker/server.ts:4-8`, `app/api/roster/route.ts:11-14`, `app/api/live-class/route.ts:14`, `app/autoestudio/share/server.ts:104-108` (`teacher()`, two lines off the decision's 106-108) and `app/api/lesson-reports/route.ts:9-12`. The 5-per-day limit is at `app/lesson-reports/service.ts:36`. The ten tables are listed correctly.
> - VERIFIED, "already correct" list: progress, favorites and academy each use `accountIdFromHeaders` (`app/api/progress/route.ts:14`, `app/api/favorites/route.ts:27`, `app/api/academy/route.ts:23`).
> - VERIFIED, guard coverage: I grepped for other `userId` read shapes (`x).userId`, destructuring and so on). None outside FROZEN is a UID read; the remaining hits are `users.id`, member or billing values.
>
> **Guard weakness that matters** (`tests/uid-keyed-surface.test.mjs:24`): the regex only catches direct reads. A route that gets the UID through a helper passes the guard. VERIFIED: 15 route files already do this and are not in FROZEN, including `app/api/students/**`, `app/api/class-records/**` (through `authenticatedOwnerId`) and `app/api/autoestudio/**` (through `teacher()` from `share/server`). That is exactly how the decision says new features copy the pattern. A new tracker or homework route that calls `authenticatedOwnerId(request)` or `teacher(request)` would add UID-keyed data and the test would stay green.
>
> **Step B gap (HYPOTHESIS, from the schema):** a plain `UPDATE` can hit a UNIQUE or primary-key constraint when one account owns rows under two UIDs. The relevant constraints are `class_records_owner_request_key_unique` (`db/schema.ts:397`), plus the primary keys on `student_homework_links` (`drizzle/0014`) and `live_class_sessions` (`drizzle/0015`). Collisions are unlikely because the IDs are random, but one collision would make the whole migration fail. The plan should add a read-only collision count before the run and define how a collision is resolved.
>
> ### Vote on BOARD-DECISION-005: **APPROVE WITH CHANGES**
> Deferring the D1 rewrite and freezing the surface now is right: today's only harm is orphaning, which no planned event triggers, and the §4 triggers are concrete. The changes I ask for before the vote counts as final:
> 1. Extend the guard so it also flags any importer of the UID helpers (`authenticatedOwnerId`, and `teacher` from `autoestudio/share/server`). Freeze today's consumer list, which gives 15 files (`app/api/students/**`, `app/api/class-records/**`, `app/api/autoestudio/**`, `app/autoestudio/errors/server.ts`).
> 2. Add to §3.3 B a collision pre-check, run read-only and locally rehearsed, for unique or primary keys that include `owner_id`.
> 3. Optionally, fix the `share/server.ts` line citation to 104-108.
>
> **Sign-off table line:** `Alejandro | APPROVE WITH CHANGES | Defer the rewrite and keep the guard, but the guard must also freeze importers of authenticatedOwnerId/teacher() (15 routes bypass it today), and step B needs an owner_id unique-collision pre-check.`

## Martin: vote on BOARD-DECISION-005

### Facilitator → Martin (2026-11-12T02:11:08.205Z)

> You are **Martin**, Chief Learning, Research & Quality Officer on the SpanishCue Executive Board (docs/board/CONSTITUTION.md). The facilitator of the Thursday 2026-11-12 routine asks for your board vote on one decision. Repo: /home/user/spanishcue-web (read-only for you: edit nothing, no git state changes, never query production D1; don't run npm test/build, a run is in progress).
>
> Read `docs/board/decisions/BOARD-DECISION-005-uid-rekeying.md` (drafted by Sofia). It proposes deferring a D1 re-keying of teacher data (students, class records, roster, live-class, Autoestudio/homework, lesson reports) from the Firebase UID to the internal account id, with a code-only guard test now (`tests/uid-keyed-surface.test.mjs`) and a ready migration plan plus triggers.
>
> Your angle is quality and the teacher's experience: is the risk to teachers (students/homework "disappearing" after a second UID) described honestly, are the triggers in §4 the right ones from a teacher/product view, and is there anything a teacher would lose that the plan does not cover? Spot-check 2–3 claims in code if useful (budget ~10 tool calls).
>
> Reply with: your vote (APPROVE / APPROVE WITH CHANGES / REJECT), up to 3 concrete reasons or requested changes, and a one-line note for the sign-off table.

### Martin → Facilitator (2026-11-12T02:11:37.640Z)

> **Martin's vote on BOARD-DECISION-005: APPROVE WITH CHANGES**
>
> I agree with deferring the D1 rewrite and shipping the guard test now. The account-linking facts I checked match the code: `authenticatedOwnerId` and the Autoestudio `teacher()` both return `session.userId`, and `syncFirebaseAccount` does `ON CONFLICT(normalized_email)`, which attaches a new UID to the existing account. But §1 makes the teacher risk sound smaller than it is.
>
> **Requested changes:**
>
> 1. **§1 "Risk today": the data does not just sit still. Students keep sending work, and the teacher loses control of their links.** Each student pass is found by its token, and the homework write path takes its owner from the pass (`ownerOfPass`, `app/autoestudio/errors/server.ts:24-26,57,71`). So after a second UID:
>    - Students' existing links keep working.
>    - New homework errors and events keep landing under the old UID, where the teacher can't see them.
>    - The teacher can't revoke or rotate those links. `pass.owner_id!==owner` returns `pass_not_found` (`app/autoestudio/share/server.ts:207-210`).
>
>    Please add a line saying that. It is a loss of control over live student access, not only "rows disappear from view". It also makes the harm worse the longer it goes unnoticed. A smaller point: the 500-pass cap is counted per UID, so the new UID starts again from zero.
>
> 2. **§4 triggers: don't wait for a support ticket.** A teacher who sees an empty roster is more likely to cancel quietly than to write to us. Turn the read-only count named in the support-report trigger into a recurring check: count UID-keyed owners that map to the same `users.id`, plus owner UIDs with no `auth_identities` row. Run it at the monthly or the 2026-12-10 review, through the authorized read path, not by agents. Any result above zero should count as a trigger. Also add two triggers:
>    - Any support or admin step that deletes or recreates a Firebase user, including account recovery and GDPR or erasure requests.
>    - Any teacher report that a student link "can't be revoked".
>
> 3. **§3 plan: name the student-facing parts and check the teacher's view.**
>    - Step A should say that `ownerOfPass` and the pass-ownership check behind revoke and rotate also use the `[accountId, uid]` fallback. Otherwise the teacher sees the passes again but still can't revoke them.
>    - Before step C, check that a teacher who had two UIDs sees one merged list: students, class records, passes and homework history, with no duplicates. The class-records-to-students composite foreign key should still hold after B.
>    - `autoestudio_progress` keys off `learner_id`, so it follows the learner. Please say that explicitly so nobody counts it as an eleventh table.
>
> **Sign-off note:** APPROVE WITH CHANGES. Defer the rewrite and ship the guard. Say plainly that students keep submitting to, and keep access to, links the teacher can no longer see or revoke. Make the orphan count a recurring trigger, and cover the share-pass paths in step A.
>
> I edited nothing and ran nothing that changes state. I read the decision file, `app/student-tracker/server.ts`, `app/autoestudio/share/server.ts`, `app/autoestudio/errors/server.ts`, `app/api/roster/route.ts` and `db/accounts.ts`, all under `/home/user/spanishcue-web/`.

