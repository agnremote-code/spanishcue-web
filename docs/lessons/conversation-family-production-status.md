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
- [x] Verify supported query selection, unsupported fallback, ten historical route defaults, isolated world keys and original URLs with automated tests; inspect keyed resets and history subscriptions in source.
- [ ] Inspect entry, interaction, support, closing, selectors and catalog previews on desktop and mobile, including real back/forward and level switching. **Blocked by browser security policy.**
- [x] Run relevant tests, lint, typecheck, protected build/artifact validation and diff checks; record limitations precisely.
- [x] Commit and push implemented source and review results. No auto-merging PR, merge, deployment or Run 2. Visual acceptance remains pending.

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

## Implemented variants

| Family | Added content | Selector after this run | New canonical lesson link |
|---|---|---|---|
| Red Flag o No | A1: 18 situations, three phases of six; 18 concrete follow-ups, phrase frames, per-item teacher cues and a four-step oral closing | A1, A2, B1, B2 | `/red-flag-o-no-a2?level=A1` |
| Let’s Talk | B2: 120 questions in the same 15 worlds, 30 optional follow-ups, six discourse moves and closing tied to the three selected questions | A1, A2, B1, B2 | `/a1-conversation?level=B2` |
| La máquina que elimina cosas del mundo | B2: 30 dilemmas, each with a central question, follow-up, consequence, counterpoint, revision and useful chunks | A2, B1, B2 | `/la-maquina-que-elimina-cosas?level=B2` |
| Tu vida con una regla absurda | B2: 15 rules × three questions = 45 prompts, 15 teacher follow-ups and negotiated oral closing | A2, B1, B2 | `/tu-vida-con-una-regla-absurda?level=B2` |

All four inherit PRO through their existing canonical IDs (207, 15, 101, 102). No new route ID or catalog card was introduced. No C1/C2 was advertised. The ten historical route defaults remain unchanged; supported `?level=` overrides them and unsupported values fall back to the particular route's default. Navigation still preserves other query parameters and hashes. The shared selector's existing pushState/popstate logic is unchanged. Red Flag and Talk disposable state is keyed by selected level; Worlds retains the original B1/A2 session keys and uses separate `chespanish-conversation-machine-B2-v1` and `chespanish-conversation-rules-B2-v1` keys.

## New preview assets

| Path | Distinct scene | Dimensions |
|---|---|---|
| `public/play-mode/red-flag-o-no/a1.webp` | Attentive café exchange and sharing food | 1536 × 1024 |
| `public/catalog-thumbnails/conversation-b2.webp` | Familiar topic orbs with three selected question tokens | 1600 × 900 |
| `public/conversation-worlds/elimination-machine-b2.webp` | Close control-balcony view with reconsideration control | 1672 × 941 |
| `public/conversation-worlds/absurd-universe-b2.webp` | Tram platform and changed-gravity perspective | 1672 × 941 |

Built-in image generation used the corresponding approved family assets as references. Exact prompts and references are in `conversation-batch1-thumbnail-prompts.json`. No previous thumbnail was overwritten. Existing in-lesson world art is retained.

## Final verification and review

- `npm run test:conversation`: **60 passed, 0 failed, 0 skipped**, including all ten legacy route adapters with historical/invalid queries and new level selection, original-bank hashes, catalog/resource coherence, separate keys, three-question gating, machine reconsideration and rule progression.
- `npm run lint`: **passed**. The subsequently added route tests also pass scoped ESLint.
- `npm run build`: **passed** on stable final source. The completed build protects 59 private client modules and 47 premium media files; its finalizer excludes 277 private paths and artifact validation succeeds.
- `tsc --noEmit --incremental false`: **fails with the same 11 baseline diagnostics**, with byte-identical diagnostic output. Eight TS2367 errors are in `app/api/billing/subscription/route.ts`; two are in `app/marketing/MarketingSections.tsx`; one is in `app/mexico/map-data.ts`. No new diagnostics.
- `git diff --check`: **passed**. Original standalone bank files, lesson ledger and access policy are byte-identical to the base. Structural fixtures additionally protect old banks inside edited modules and old family variant/preview metadata.
- Independent content review read every new prompt and found no actionable Spanish/CEFR mismatch or templated bank. Independent code review found one CI integration gap; `test:conversation` now runs within `npm test`.
- Full `npm test` / local-worker HTTP tests were **not run**: the repository worker harness creates and migrates local D1. This run respects the instruction not to touch D1. No production HTTP, identity, billing or database operations were used for verification.
- Actual desktop/mobile visual QA is **blocked** as explained above. Overflow, real touch interaction, browser back/forward and visual layout acceptance are therefore still pending; no claim of release readiness is made.

Intentionally unchanged: the historical audit's Let’s Talk A1/A2 bilingual-preview discrepancy (and A2's old 150-question claim versus its existing 90-question bank), original mixed/stretch prompts, all historical lesson text/assets/defaults, and the unrelated baseline TypeScript errors. The historical audit files remain intact on audit commit `e6da3f0943de088a9cba837ea71b3faa77a473eb`.

Remote checkpoints: `0175dd8b3b81514e8aa16958e004bd6c8c56c3dd` (scope/original snapshots), `4731655f4681666f43c896d1cd4d45885ef29a0b` (Red Flag/Talk), `6be188565dc61e02696484b9f8ba48dac83ca5e3` (Worlds/registry/previews/tests). This follow-up documentation commit records the final verification state.

No deployment, merge to main, D1 operation, production-data change, auth/billing change, secret/environment/domain modification, release-state change or deployment-configuration change occurred. Run 2 was not started.

## Exact changed-file manifest

33 files relative to the canonical base:

- `app/choose-conversation/B2ConversationTools.tsx`
- `app/choose-conversation/b2-data.ts`
- `app/choose-conversation/b2.css`
- `app/choose-conversation/page.tsx`
- `app/choose-conversation/variants.ts`
- `app/conversation-families/authored-levels.ts`
- `app/conversation-families/catalog.ts`
- `app/conversation-families/types.ts`
- `app/conversation-worlds/ConversationWorld.tsx`
- `app/conversation-worlds/ConversationWorldFamily.tsx`
- `app/conversation-worlds/data-b2.ts`
- `app/conversation-worlds/state.ts`
- `app/conversation-worlds/types.ts`
- `app/conversation-worlds/worlds.css`
- `app/red-flag-o-no/RedFlagGame.tsx`
- `app/red-flag-o-no/a1.mjs`
- `app/red-flag-o-no/engine.mjs`
- `app/red-flag-o-no/red-flag.css`
- `app/resources/[slug]/page.tsx`
- `docs/lessons/conversation-batch1-thumbnail-prompts.json`
- `docs/lessons/conversation-family-production-status.md`
- `package.json`
- `public/catalog-thumbnails/conversation-b2.webp`
- `public/conversation-worlds/absurd-universe-b2.webp`
- `public/conversation-worlds/elimination-machine-b2.webp`
- `public/play-mode/red-flag-o-no/a1.webp`
- `tests/conversation-batch1-routes.test.mjs`
- `tests/conversation-batch1.test.mjs`
- `tests/conversation-families.test.mjs`
- `tests/conversation-worlds-b2.test.mjs`
- `tests/fixtures/conversation-batch1-originals.json`
- `tests/red-flag-a1.test.mjs`
- `tests/talk-b2.test.mjs`
