# Autoestudio production QA and draft persistence

> Execute inline under the owner's explicit instruction; no parallel implementation or ordinary approval pauses.

**Goal:** Revalidate current Autoestudio and fix the writing draft loss reproduced in production.
**Architecture:** Keep the existing progress adapters and private-draft boundary. Persist editor changes immediately through `onDraft`; the server adapter already excludes drafts from uploads.
**Spec:** Owner's 2026-10-05 continuation request, plus the existing course contract in `2026-10-02-autoestudio-course.txt`.
**Base:** `4287b6ba1827adffa16c771c49fe28348de61b0d`.

## Constraints

- Preserve all 120 weeks, migrations, data, billing, auth, secrets and release gates.
- One task branch; commit and push checkpoints; use CI + Auto Merge and official production release.
- Never substitute mocked authentication for a claimed real production E2E.

## Task 1: Prevent draft loss before the editor's 600 ms timer

- [ ] Add a DOM regression using the real WritingSection, useProgress and local adapter: edit, immediately unmount/remount, assert the latest draft survives. Include replacing and clearing text.
- [ ] Run it against unchanged source and observe missing saved draft.
- [ ] Remove only WritingSection's delayed callback; call onDraft on each edit.
- [ ] Run the focused DOM and server-adapter privacy regressions, then full tests, lint, typecheck, build/artifact validation.
- [ ] Commit and push; review the diff and preserve sanitized QA evidence.
- [ ] Open PR, resolve CI failures, verify official staging and production release, rerun live smoke and the browser reproduction.

## QA boundaries

Check public samples, locked routes/RSC, forged headers, local progress, draft reload, invalid passes, and next-level navigation. Existing SQLite/Worker tests cover pass creation, claim, persistence, ownership, rotation, revocation and continuity. Real teacher authentication is separately required to validate these in production.

## Ledger

- Current main and no overlapping PRs verified. Existing production/staging workflows succeeded for the base SHA.
- Browser confirmed anonymous /cuenta redirects to login; no teacher session available.
- Browser reproduced draft loss twice: the editor displayed 12 words, then zero after immediate reload.
- Ruling: use the fresh task-specific clone in place on one codex branch, avoiding another implementation/worktree.
