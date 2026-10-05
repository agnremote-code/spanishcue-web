# Autoestudio continuation QA — 2026-10-05

## Fresh baseline

- Main: `4287b6ba1827adffa16c771c49fe28348de61b0d` (PR #113); no open overlapping PRs.
- Recent changes #104–#113 were inspected. Autoestudio changes since #103 are mascot/copy and the approved neutral-Spanish audit; no curriculum regeneration performed here.
- Existing official staging run `37198229727` and production run `37198322722` succeeded for that main SHA. Monitor `37235663206` succeeded.
- Production and staging Autoestudio route suites: 3/3 each, covering public landing/map, seven full public samples, locked paid weeks, forged entitlement headers and RSC denial.
- Production general smoke: 10/10. Lesson-report smoke: 5/5.

## Reproduced and corrected

The production writing editor displayed a saved-draft message while delaying its persistence callback 600 ms. Twice, entering a 12-word draft then immediately reloading restored an empty editor.

`WritingSection` now forwards each edit immediately through the existing progress adapter. This preserves replacement and clearing on reload. No draft is uploaded: the existing server adapter strips writing text and skips draft-only network writes. No curriculum, auth, billing, secrets, schema, migration, release policy or production database records were changed by this fix.

The new DOM regression uses the real editor, progress hook and local adapter, remounting with retained origin storage without waiting for a timer. It failed against unchanged source (`''` instead of the entered text) and passes with the fix. It is included in the normal Worker test runner. Existing server-adapter privacy tests also pass.

## Verification

- Base full suite: 726 passed, zero failed/skipped.
- Corrected full `npm test`: 727 passed, zero failed/skipped; includes verified build, artifact validation, local SQLite migrations and actual Worker HTTP tests.
- Focused writing/server-adapter tests: 9/9; independent reviewer reran these and approved the diff.
- `npm run lint`, `npx tsc --noEmit`, `npm run validate:artifact`, `git diff --check`: passed.
- A local lint run overlapped the build's temporary safe artifact and exhausted heap; serial rerun after build passed without changing lint configuration.
- Browser production: landing, actual A1 goal completion and persistence across reload, writing reproduction, quiz feedback and score update inspected. Public sample/protected-route checks are separate from an authenticated end-to-end claim.

## Authenticated E2E boundary

The browser started without a teacher session: `/cuenta` redirected to sign-in. Secure browser authentication opened Google and reached its passkey verification. At this checkpoint no authenticated teacher dashboard has been observed. Creation, claim, server persistence/dashboard, rotation/revocation and next-level continuity are covered by existing SQLite/Worker tests, but that is not a real production teacher E2E.

No auth bypass, forged production session, new credentials, modified grants, weakened gates or database bootstrap was introduced. Final release evidence and the exact remaining auth state will be recorded on the PR after official publication.
