# The Sound Map Implementation Plan

> Execute inline using superpowers:executing-plans. Owner authorization in AGENTS.md covers implementation and delivery.

**Goal:** A listening city with six distinct scenes, genuinely differentiated A0–C2 content and one level control.
**Architecture:** Isolated lesson route, authored data, small Three.js city, accessible equivalent location list, existing AudioDeck and catalog/access pipeline. Keep auth, billing, infrastructure and unrelated lessons unchanged.
**Tech Stack:** React, TypeScript, Three.js, Node tests, existing Edge speech build pipeline when reachable.
**Spec:** ../specs/2026-10-07-the-sound-map.txt
**Base:** d01d958 (origin/main after fetch). Open PR #126 is SEO; avoid its files.

## Global constraints
- Six locations: balcony disagreement, singer, taxi radio, park conversation, street vendor, rooftop party.
- A0 bilingual instructions and vocabulary; all levels have different scripts and reasoning demands.
- International Spanish, no repeated generic hotel situations, no auto-started audio.
- No production branch deployment; CI merges then authorized production workflow.

## Review focus
- Switching scenes/levels must stop audio and avoid stale completion events.
- Stored or URL levels and corrupt progress must not crash; progress stays per level.
- No WebGL or reduced motion must retain accessible scene selection.
- Open answers need rubric/self-review, never false automatic correctness claims.
- Failed audio must expose an honest useful recovery state.

### Task 1: Content and progress
- [x] Write tests for 42 unique scripts, complete answer keys, A0 support and per-level progress; run RED.
- [x] Implement content.json and state.mjs with LEVELS, resolveLevel, initialProgress, markComplete, restoreProgress; run GREEN.
- [x] Add reproducible audio assets and manifest or record exact provider blocker. Never claim recorded audio exists when it does not.

### Task 2: Experience and integration
- [x] Create CityMap.tsx with six focusable location controls and Three.js resource disposal, resize, limited pixel ratio, reduced motion and fallback.
- [x] Create page.tsx, layout.tsx, style.css, ScenePanel.tsx using AudioDeck, level selector, retryable activities, hidden transcript, teacher notes and summary.
- [x] Register one new lesson in lesson-catalog.ts and add an original city preview.
- [ ] Test progress behavior and user interactions, then typecheck, lint, language checks and full tests/build.

### Task 3: Review and delivery
- [x] Fresh whole-branch review, fix meaningful findings, verify final artifact.
- [ ] Commit/push, non-draft PR, CI auto-merge, verify main SHA.
- [ ] Dispatch owner-authorized production workflow and verify production.

## Ledger
- References: radio-despues-de-medianoche AudioDeck, phonetics-family level/state approach (A1–C2 only, so not suitable as-is for A0), catalog-driven access protection.
- Ruling: implement in isolated task worktree; do not edit another conversation's checkout.

- Review fixes: retryable bilingual audio, keyboard focus return, response gating, varied distractor positions, neutral speaker descriptions, shadow cleanup.
- Ruling: retain prior Escucha route order, append ID 230; exact historical-test inversions preserve old content/access snapshots.
- Ruling: use connected GitHub immutable blob/tree/commit APIs because terminal has no GitHub credentials. Verified exact user-named repo is public and connection has push/admin access after automatic review initially rejected push on unverified-destination grounds.
- Ruling: no browser visual QA in managed runtime without supported control-browser; DOM interaction tests and artifact checks run, limitation documented.
