# Task 01 · Launch Audit & Baseline Verification

## Status Overview

### Implemented (Local Codebase Baseline)
- [x] Initial full-stack repository structure on `vinext` + Next.js 16 + React 19 + Tailwind CSS 4.
- [x] Cloudflare D1 integration with Drizzle ORM (`offer_settings` table for promotional pricing).
- [x] Fixed free samples selection mechanism (`samplesByLevel` and `samplesByCategory` in `app/access-policy.ts`).
- [x] ChatGPT / Sites authentication integration (`app/chatgpt-auth.ts`).
- [x] Client protection asset scripts (`scripts/protect-client-assets.mjs`).
- [x] Unit & integration test suite (`tests/teacher-access.test.mjs`, `tests/library-filters.test.mjs`, `tests/rendered-html.test.mjs`).
- [x] Launch audit documentation (`docs/launch/STATE.md`, `docs/launch/OWNER_ACTIONS.md`, `docs/launch/TASK-01.md`).

### Tested
- [x] **Local Test Suite (`npm test`)**: Verified 11/11 tests pass (sample sets, offer validation, free vs paid route access, client asset protection, offer configuration persistence).
- [x] **Git Repository State**: Clean status on branch `antigravity/launch-audit` tracking `origin/main` at commit `08ef3a2`.

### Published
- [x] **Main Branch Baseline (`origin/main`)**: Commit `08ef3a2` (`chore: add SpanishCue AI safety rules`) is published on remote repository `agnremote-code/spanishcue-web`.
- [x] **Audit Documentation Branch (`antigravity/launch-audit`)**: Created locally, ready to push after commit.
- [!] *Note: No source code fixes or application changes have been published yet per task instructions (AUDIT + COORDINATION ONLY).*

### Blocked
- [ ] **Commercial Checkout / Payment Flow**: Blocked pending implementation of Task 04 (PayPal Sandbox SDK & API handlers) and manual provision of PayPal API credentials by Alejandro.
- [ ] **PRO Access for Regular Users**: Blocked pending implementation of Task 02 (D1 schema expansion for users/subscriptions) and Task 03 (DB-backed access policy).
- [ ] **Student & Class Tracker ("Mis alumnos")**: Blocked pending database schema expansion in Task 02.

### Next Action
- [ ] **Task 02 (Database Schema Expansion)**: Design and apply Drizzle D1 migrations for `users`, `subscriptions`, `transactions`, `students`, and `taught_lessons`.
- [ ] **Task 03 (Auth & Access Policy Engine)**: Replace hardcoded email check in `app/access-policy.ts` with DB subscription entitlement lookups.
