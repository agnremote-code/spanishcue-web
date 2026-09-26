# Conversation family production status · Batch 1, Run 1

Source branch: `codex/conversation-batch1-run1-20260926`.
Canonical base: `a736cfc49ab787ec6e26b9dc27d7de3060582baf` (2026-09-26).
The freshly fetched main matches the historical audit snapshot. No overlapping open PRs were found.
Planning authority: audit commit `e6da3f0943de088a9cba837ea71b3faa77a473eb` on `codex/conversation-family-audit-20260926`.
The historical audit is unchanged. This record tracks additive implementation only.

## Approved scope and design

Implement exactly Red Flag o No A1 (18 situations), Let’s Talk B2 (15 worlds × 8 questions), La máquina que elimina cosas del mundo B2 (30 decisions), and Tu vida con una regla absurda B2 (15 rules × 3 questions). Each keeps its existing visual engine, has Spanish-only new learner content, level-specific speaking support and a substantial oral closing within a suggested 45-minute sequence.

Public family metadata adds four query-selected variants to existing canonical lesson IDs. The route/access ledger, historical defaults and resource slugs remain authoritative. No new route or catalog card is required. Private banks remain with protected engine hosts. Existing persisted keys remain valid; B2 world keys are isolated by family and level.

## Implementation and verification plan

- [x] Fetch main, check overlapping PRs, read repository/authoring rules and audit; create and preserve a dedicated remote branch.
- [x] Run the 32 existing conversation baseline tests.
- [x] Capture structural hashes of all ten original banks, full route ledger and existing family variant/preview metadata directly from canonical main.
- [x] Author and integrate the four banks using targeted failing-then-passing tests; preserve original content.
- [x] Add four distinct sibling thumbnails and metadata-only public summaries; verify single-card/resource coherence.
- [ ] Verify selectors, unsupported query fallback, historical defaults, history, state reset/isolation and original URLs.
- [ ] Inspect entry, interaction, support, closing, selectors and catalog previews on desktop and mobile.
- [ ] Run relevant tests, lint, typecheck, protected build/artifact validation and diff checks; record limitations precisely.
- [ ] Commit and push the completed branch. Do not open an auto-merging PR, merge, deploy or start Run 2.

## Review focus

1. Old links without `level` and invalid queries must retain the route's original level.
2. Switching a level midway through a conversation must not carry disposable answers into another level or overwrite saved world decisions.
3. New public catalog/resource previews must describe the selected variant without importing private banks.
4. A1 must remain concrete and supported; B2 must elicit grounded argument, counterpoints and revision rather than abstract C1 discussion.
5. Mobile support and closing states must remain readable after content expands.

No production, D1, authentication, billing, environment/secrets, domains, release state or deployment configuration changes are authorized or included.

## Implementation checkpoint

All four requested variants are implemented in source and independently reviewed for Spanish quality and CEFR demand. Red Flag A1 has 18 situations; Let’s Talk B2 has 120 questions; Machine B2 has 30 dilemmas; Rules B2 has 15 rules and 45 questions. All ten original bank fingerprints and the entire route ledger match canonical main.

`npm run test:conversation`: 60/60 passed, including new regression coverage now invoked by `npm test`. `npm run lint`: passed. `npm run build`: passed, including protected asset finalization and artifact validation. TypeScript retains precisely the baseline's 11 diagnostics (billing 8, marketing 2, Mexico 1); no new diagnostics.

**Visual QA is blocked, not passed.** The supplied cloud browser rejected the local component preview with `net::ERR_BLOCKED_BY_CLIENT`, then explicitly rejected the shared local file protocol under its browser security policy. That policy forbids alternate surfaces/workarounds. Desktop/mobile entry, interaction, support, closing, selector and catalog inspection therefore remain unverified. The four actual saved thumbnail images were visually inspected. SSR and hook-driven interaction tests are useful evidence but are not browser/visual verification. No deployment or merge is authorized by this checkpoint.
