# Autoestudio course and Teacher Share Pass implementation plan

**Goal:** Preserve A1, complete A2–C2, and give one anonymous learner access to one teacher-assigned level with synchronized structural progress.
**Architecture:** Reuse the data-driven A1 engine. Separate privacy-minimized learner/pass/progress tables from named teacher class records. Signed, revocable bearer links establish HttpOnly scoped sessions; Worker and page checks enforce access. Progress adapters keep personal writing local.
**Tech stack:** React/vinext, TypeScript, Cloudflare Worker + D1 SQLite, Web Crypto HMAC, node:test.
**Spec:** docs/superpowers/specs/2026-10-02-autoestudio-course.txt
**Base:** 8969357 (fresh origin/main). No open PRs returned at start. Existing other-task local checkout left untouched.

## Global constraints
- Preserve A1 content and its two public weeks; all new levels have week 1 public.
- Four macro-skills, phonology transversal, original standards-grounded content; no official endorsement claims.
- 20 weeks per new level; checkpoints 5, 10, 15, 20.
- No student account/contact data; encourage non-identifying 2–24 character aliases.
- No raw writing or microphone recordings sent to server.
- One teacher / learner / level per pass; no routine link expiry; rotation preserves progress.
- No browser GitHub login; sequential non-draft PRs and repository Auto Merge only.
- No production D1 operation until exact final SQL operation explicitly authorized, as required by user and migration runbook.

## Review focus
- Forged identity and RSC/encoded paths must not bypass scope.
- Two tabs/devices or two learners on one browser must not mix progress or drafts.
- Simultaneous claims must produce one learner and stable alias.
- Offline failures must be visible and retries must never send old learner progress into new session.
- Locked course bodies and bearer credentials must not enter public JS or analytics.

## Task 1: Backend and migration preparation
- [ ] Test crypto tamper/random/revision/revoke, owner isolation, PRO-only minting, alias validation/atomic claims and structural progress allowlist with real SQLite.
- [ ] Implement app/autoestudio/share server modules, app/api/autoestudio routes and non-rendering /s token exchange.
- [ ] Add additive migration 0011 (0010 reserved for concurrent reports), schema exports, compatibility/recovery procedure. Validate locally with representative existing data.
- [ ] Worker strips pass headers and reconstructs scope from verified cookie; pages independently require matching scope. Preserve other auth.

## Task 2: Learner and teacher UI integration
- [ ] Test adapter isolation, offline recovery and stripping written drafts before network transfer.
- [ ] Add one-field claim view; clean URLs; no account flow.
- [ ] Add teacher pass list/create/copy/rotate/revoke/next-level/progress to cuenta alumnos.
- [ ] Extend ProgressAdapter with async server hydration and namespaced local draft cache; public/PRO behavior unchanged.
- [ ] Add assigned-level markers and correct public preview/locked navigation and truthful sync status.

## Tasks 3–7: A2, B1, B2, C1, C2 separately
- [ ] Research CEFR Companion, PCIC and official DELE task specifications.
- [ ] Audit/remap objective inventories to 20 weeks without losing competencies.
- [ ] Author original literal modules, input/output demand appropriate to each level, real retrieval and integrated checkpoints.
- [ ] Run level-specific structural/content tests and independent self-audit, record limitations honestly.
- [ ] Integrate one level per coherent PR from refreshed main; do not publish partial levels.

## Task 8: Whole course audit and delivery
- [ ] Validate complete coverage, prerequisites, duplicate prompts, skills, no placeholders, client asset boundaries and audio metadata.
- [ ] Run npm test, lint, tsc, build/artifact and Worker access tests.
- [ ] Responsive QA at 1440, 1366, tablet, 390 and 320 widths with safe local fixtures if necessary.
- [ ] Independent review, fix consequential findings and rerun relevant tests.
- [ ] Sequential commits/push/PRs, CI Auto Merge and verify main. Prepare staging and exact migration request; content may ship independently where safe.
- [ ] After database authorization, official production release and smoke.

## Execution record
- Baseline: 17/17 existing Autoestudio tests passed before implementation.
- User explicitly waived design/plan approval gates; existing written specification supplies scope.
- Parallel curriculum authoring uses disjoint per-level files, integrated sequentially by root; backend specialist owns server/schema files, root owns client/Worker integration.
