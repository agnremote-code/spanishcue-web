# BOARD-DECISION-005: Teacher data keyed by Firebase UID: defer the D1 re-keying, add a guard now

- Date: 2026-11-12 (Thursday reliability routine)
- Drafted by: Sofia (agent, convened by the facilitator), W46 plan item 4 ([assessments/2026-W45.md](../assessments/2026-W45.md)); the item was missed on 10-29 and 11-05.
- Source finding: Thursday audit 2026-10-22 ([STATUS.md](../STATUS.md) line 388): Medium, no cross-user leak.
- Status: **ADOPTED 2026-11-12** with the changes both reviewers asked for (§5). Changes applied by the facilitator after the vote are marked *(review)*.

## 1. Situation (VERIFIED in code at a7625b4 unless marked HYPOTHESIS)

**Two identities reach every route.** The Worker sets `x-chespanish-user-uid` to the Firebase UID and, when an `auth_identities` row exists, `x-chespanish-account-id` to `users.id` (`app/firebase-session.ts:141-148`). `getUserSessionFromHeaders` puts the UID in `userId` and `users.id` in `accountId` (`app/access-policy.ts:62-63`). `docs/BACKEND_MIGRATION.md:25` says the UID "is an external identity, not the account primary key".

**These areas key data by the Firebase UID:**

| Entry point | Tables (owner column) |
|---|---|
| `authenticatedOwnerId` (`app/student-tracker/server.ts:4-8`), used by `/api/students/**`, `/api/class-records/**` | `students.owner_id`, `class_records.owner_id` (`db/schema.ts:358,378`). `class_records` has a composite FK `(student_id, owner_id)` to `students` (`db/schema.ts:393-395`) |
| `ownerOf` in `app/api/roster/route.ts:11-14` | `student_homework_links.owner_id` (`drizzle/0014`) |
| `ownerOf` in `app/api/live-class/route.ts:14` | `live_class_sessions.owner_id` (`drizzle/0015:4`) |
| Autoestudio share owner (`app/autoestudio/share/server.ts:104-108`), used by `/api/autoestudio/**` and `app/autoestudio/errors/server.ts` | `autoestudio_learners`, `autoestudio_passes` (composite FK to learners, `db/schema.ts:434-438`), `homework_errors`, `homework_teacher_notes`, `homework_events` (`drizzle/0012:6,29,40`) |
| `/api/lesson-reports` (`app/api/lesson-reports/route.ts:9-12`) | `lesson_reports.user_id` (`db/schema.ts:425`); also the 5-per-day limit (`app/lesson-reports/service.ts:36`) |

**These areas already use `users.id` correctly:** progress (`app/api/progress/route.ts:14`), favorites (`app/api/favorites/route.ts:27`), academy and institution membership (`app/api/academy/route.ts:23`), billing, grants, founder assignments and checkout locks (FKs to `users.id`, `db/schema.ts:96-316`), referrals (fed the billing `users.id`, `app/referrals-server.ts:31-34`), account security (`account_id`, `drizzle/0020:5,14`). Proper uses of the UID as a provider subject are not part of this finding: `app/cuenta/page.tsx:57`, `CHESPANISH_OWNER_UID`.

**Risk today.**
- *No cross-user exposure.* Every UID-keyed query filters by the verified UID, and a Firebase UID belongs to one person. No path maps one person's UID to another person's data.
- *Data can be orphaned, not leaked.* `syncFirebaseAccount` attaches a *new* Firebase UID that has the same verified email to the *existing* `users.id` (`ON CONFLICT(normalized_email)`, `db/accounts.ts:188`). Billing, PRO access, progress and favorites follow the account. Students, class records, roster links, live classes, Autoestudio learners and homework stay under the old UID and disappear from that teacher's view. No row is deleted.
- *(review, Martin; VERIFIED)* **Students keep using links the teacher can no longer see or control.** A pass is found by its token, and homework writes take their owner from the pass (`ownerOfPass`, `app/autoestudio/errors/server.ts:23-27`). After a second UID, existing student links keep working, and new errors and events keep landing under the old UID, out of the teacher's view. The teacher also cannot revoke or rotate those links: `mutatePass` answers `pass_not_found` when `pass.owner_id !== owner` (`app/autoestudio/share/server.ts:207`). This is a loss of control over live student access, and it gets worse the longer nobody notices. Also, the pass cap is counted per UID, so the new UID starts again from zero. `autoestudio_progress` is keyed by `learner_id` and follows the learner, so it is not an eleventh table.
- *When does a second UID happen?* (HYPOTHESIS, Firebase console not read) (a) a teacher's Firebase user is deleted and they sign up again with the same email; (b) the Firebase project allows several accounts per email, so Google and password sign-in create two UIDs (Firebase's default is one account per email, which links them under one UID); (c) a move to another Firebase project or another identity provider without importing the UIDs; (d) Apple sign-in, if it is enabled with a relay email that is later changed to the real one.
- *The cutover does not trigger it.* The Firebase project stays `chespanish-32645` and its configuration is not changed (`docs/releases/CUTOVER_RUNBOOK.md:105-106`). The data export copies rows unchanged, so the UIDs come through intact (HYPOTHESIS for the export shape, `docs/releases/PRODUCTION_DATA_EXPORT.md`).
- *One opposite effect.* If the account read fails, the Worker sends no account-id header (`worker/index.ts:312`, `.catch(()=>null)`). UID-keyed routes keep working; account-keyed routes return 401. After re-keying, the tracker would fail closed in the same way. That is acceptable, but it is a behaviour change.

## 2. Options considered

1. **Schedule the full re-keying now as a migration release.** Rejected for now. It rewrites the keys of ten tables with real teacher data, two of which have composite foreign keys. It needs a dedicated migration PR, a backup, a lock and owner authorization (`docs/releases/MIGRATION_RELEASE.md` steps 1-5). It also touches the live-class route, which open PR #404 is editing (`app/api/live-class/route.ts`, unrelated lesson-ID line). Today the only harm is orphaning, and that needs an event that has not happened and is not planned.
2. **Do nothing.** Rejected. Each new teacher feature copies the nearest UID pattern (roster, live-class and share all repeat `session.userId`), so the cost of the migration grows every week.
3. **Defer the D1 re-keying, freeze the UID surface now, and write down the migration plan so it is ready when a trigger fires** (chosen).

## 3. Decision (proposed)

1. **No D1 change now.** The re-keying is deferred, not dropped. No agent or routine writes production D1 for it, now or later. Only the owner-authorized production workflow may run it.
2. **Smallest safe step now (code only, no D1, not migration-sensitive):** `tests/uid-keyed-surface.test.mjs` (this PR) freezes every server reader of `session.userId` / `x-chespanish-user-uid` (the five entry points in §1, plus `app/access-policy.ts`, `app/cuenta/page.tsx` and `app/firebase-session.ts`). *(review, Alejandro)* It also freezes the 18 files that reach the UID through a helper: `authenticatedOwnerId` and importers of `autoestudio/share/server`. The test fails if a new reader or consumer appears, and if a frozen path stops using the UID. Rule for new work: every new table or route that stores teacher data keys it by `accountId` (`accountIdFromHeaders`). The facilitator schedules this as an ordinary `claude/*` PR. It does not touch auth files, so the one-writer rule for `app/firebase-session.ts`, `app/api/auth/**` and `server/**` is not engaged.
3. **Migration plan, ready for when a trigger fires (expand/contract):**
   - **A. Code only, ordinary release.** Add one owner-key helper that returns `[accountId, uid]`. The five entry points read with `owner_id IN (?, ?)` and write new rows with `accountId` when it is present. Both old and new rows stay visible, and the order of A and B does not matter. *(review, Martin)* The pass-ownership checks behind revoke, rotate and copy (`mutatePass`) and the pass listing use the same fallback, so the teacher can control old links again, not just see them.
   - **B. Data, dedicated migration release.** One idempotent forward SQL file, `drizzle/00NN_owner_account_ids.sql` (migration-sensitive under `scripts/release-policy.mjs:6-8`). It runs `UPDATE <table> SET owner_id = (SELECT user_id FROM auth_identities WHERE provider='firebase' AND provider_subject = owner_id) WHERE owner_id IN (SELECT provider_subject FROM auth_identities WHERE provider='firebase')` on the ten tables, parents and children together, under `PRAGMA defer_foreign_keys = ON` (HYPOTHESIS: D1 honours it inside one migration; check against a disposable local database first, step 3 of the runbook). Re-running it is a no-op because `users.id` values are UUIDs and never match a Firebase UID. Rows whose UID has no `auth_identities` row stay as they are, and the fallback in A keeps them visible. *(review, Alejandro)* Before the run, a read-only, locally rehearsed **collision pre-check** counts rows that would collide on a unique or primary key that includes `owner_id` once two UIDs map to one account (`class_records_owner_request_key_unique`, `db/schema.ts:397`; the primary keys of `student_homework_links`, `drizzle/0014`, and `live_class_sessions`, `drizzle/0015`). A collision blocks the run until a resolution rule for that table is written into the migration PR. This rewrites keys, so it is **not** covered by the additive-only authorization for 0010. It needs a separate explicit owner authorization, a backup or export taken before the run, and the release lock.
   - **C. Contract, later release.** *(review, Martin)* First check that a teacher who had two UIDs sees one merged list (students, class records, passes, homework history) with no duplicates, and that the `class_records` → `students` composite foreign key still holds. Then, when a read-only count shows no UID-keyed rows left that can be mapped, remove the UID fallback. `lesson_reports` may stay as it is: admin triage uses `user_email`, and the old rows are history.
   - **Executor:** only the owner-authorized production workflow (Deploy Production, Cloudflare). Agents prepare the PRs and run local rehearsals only.
4. **Review date:** re-read this decision at the first Thursday routine after 2026-12-10, or sooner if a trigger in §4 fires.

## 4. What would change this decision (makes step 3 urgent, before the triggering change ships)

- Any work on Firebase account linking, "multiple accounts per email", account deletion and re-signup, or a self-serve email change.
- Enabling Apple sign-in (`CHESPANISH_APPLE_AUTH_ENABLED`) or adding any second identity provider to `auth_identities`.
- Any plan to change the Firebase project, or to move away from Firebase.
- *(review, Martin)* **Do not wait for a support ticket.** A teacher who sees an empty roster is more likely to cancel quietly. At each review date, a read-only count goes through the authorized read path, never run by agents (R3 channel): (a) UID-keyed owners that map to the same `users.id`, and (b) owner UIDs with no `auth_identities` row. Any result above zero is a trigger.
- A support report of a teacher whose students "disappeared" after signing in again, or that a student link "can't be revoked".
- Any support or admin step that deletes or recreates a Firebase user, including account recovery and erasure (GDPR) requests.
- An academy feature that shares students across teachers by account. It would need `users.id` keys from day one.

## 5. Sign-off

**ADOPTED 2026-11-12, 3 of 3** (Sofia APPROVE; Alejandro and Martin APPROVE WITH CHANGES). Every requested change is applied above and marked *(review)*. The full reports are in [transcripts/2026-11-12-thursday-reliability.md](../transcripts/2026-11-12-thursday-reliability.md).

| Member | Vote | Note |
|---|---|---|
| Alejandro | APPROVE WITH CHANGES | Defer the rewrite and keep the guard. The guard must also freeze importers of `authenticatedOwnerId` / `teacher()` (15 routes bypassed it). Step B needs an `owner_id` unique-collision pre-check. *Applied.* |
| Sofia | APPROVE | Defer the D1 rewrite, ship the guard test now, and run steps A–C before any trigger in §4. |
| Martin | APPROVE WITH CHANGES | Defer and ship the guard. Say plainly that students keep submitting to links the teacher can no longer see or revoke. Make the orphan count a recurring trigger, and cover the share-pass paths in step A. *Applied.* |
