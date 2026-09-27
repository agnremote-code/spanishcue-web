# Conversation family production status · Batch 1, Run 1

Source branch: `codex/conversation-batch1-run1-20260926`.
Canonical base: `a736cfc49ab787ec6e26b9dc27d7de3060582baf` (2026-09-26).
At task start, freshly fetched main matched the historical audit snapshot. No overlapping open PRs were found.
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

Final remote check: main advanced during this run to `5d6733a9b9404bbc17bf6999530eb48ffb574a3e` (PR #69, owner data export). Its seven changed files have no overlap with this batch. The task branch retains the canonical base fetched before editing; none of the newer export work was overwritten or reverted.

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


## Batch 1 · Run 2 — 2026-09-26

### Scope and preservation baseline

Run 2 starts from the authoritative final Run 1 commit `f91942958645a4fc68ccc664deddeb4266c92395`, on `codex/conversation-batch1-run2-20260926`. Canonical main `5d6733a9b9404bbc17bf6999530eb48ffb574a3e` advanced with PR #69. Its seven non-overlapping export-related source files were carried unchanged into integration commit `783a36a64cfa430bfdede97adde7c686748edf9e`, whose parents preserve both histories. No export endpoint or D1 operation was run. The Run 1 history above is preserved verbatim.

The authorized additions are exactly Machine A1, Absurd Rules A1, Red Flag C1 and Let’s Talk C1. No C2, no Machine/Rules C1, no other family, no merge to main and no deployment. The historical audit remains unchanged on audit commit `e6da3f0943de088a9cba837ea71b3faa77a473eb`.

Fresh verification before Run 2 edits: `npm run test:conversation` **60/60 passed**; `tsc --noEmit --incremental false` reports **11 existing diagnostics** (billing 8, marketing 2, Mexico 1). Final comparison will use the captured output, not assume that number. `tests/fixtures/conversation-batch1-run1-preserved.json` captures all fourteen existing bank fingerprints, four families’ current variant/preview metadata, the full route ledger, thirty-six immutable files (including Run 1 banks and thumbnails), and the exact Run 1 status-document prefix directly from `f919429`.

The available capabilities still advertise no permitted local preview/tunnel mechanism. Run 1’s cloud-browser `net::ERR_BLOCKED_BY_CLIENT` and explicit shared-file protocol rejection remain the recorded blocker; no blocked navigation or alternate-browser workaround is being retried. Interactive desktop/mobile QA is pending. This run will continue with source/SSR/hook-driven interaction validation, responsive CSS review and inspection of all four new saved thumbnails, as instructed.

Implementation and source verification are complete; all source/assets are preserved on the Run 2 branch. Interactive desktop/mobile acceptance remains pending for the documented browser-policy reason. This is a branch-only delivery, with no merge or deployment.

### Run 2 implementation checkpoint

All four authorized banks and selectors are implemented. Machine A1 has **24** decisions; Rules A1 has **15 rules / 45 prompts**; Red Flag C1 has **18 situations**, each with first-look, hidden-context, reconsideration and missing-information prompts; Let’s Talk C1 has **120 questions** in the same fifteen worlds. Independent content review read every new item. Two C1 phrases were clarified and new C1 interface instructions were aligned with the repository’s tú strategy; no original or Run 1 wording changed.

The combined conversation suite now passes **87/87 tests**. It verifies fourteen existing bank fingerprints, thirty-six immutable files and Run 1 history, every historical route default, all eight Run 1/Run 2 variants through legacy adapters, resource-page rendering/JSON-LD, exact selectors, unsupported fallbacks, query/hash preservation, simulated history notifications, three-question gating, real Red Flag reveal/revision handlers, A1 world progression and independent session storage effects. Framework link/image output is stubbed in the resource SSR test; this is automated render evidence, not browser QA.

All four new assets are saved and visually inspected: `public/conversation-worlds/elimination-machine-a1.webp` (1672×941), `public/conversation-worlds/absurd-universe-a1.webp` (1672×941), `public/play-mode/red-flag-o-no/c1.webp` (1536×1024), `public/catalog-thumbnails/conversation-c1.webp` (1672×941). No old thumbnail was overwritten. Exact prompts, reference hashes and provenance are in `conversation-batch1-run2-thumbnail-prompts.json`.

Pushed checkpoints so far: `783a36a64cfa430bfdede97adde7c686748edf9e` (safe main integration), `dd9c87b114efe58c039c20d88bf79a0f41bfd9a9` (preservation baseline), `93110aba2989458bff109d2782db0926f2970788` (C1 engines/content). The next checkpoint preserves both A1 banks, all four thumbnails, registry and regression integration. Full lint, build, TypeScript comparison and technical review follow.


### Run 2 final results

Verified implementation checkpoint: **`687084c5d41082008df290b6518c61fe6264cc4f`**. It includes the four variants, four thumbnails, public registration and regression suite. The final documentation/test-only checkpoint records the checks below and fixes the SSR test variable name required by ESLint; application source/assets are identical to the verified implementation checkpoint. Use this branch’s HEAD for the full delivered source and report.

| Family | Run 2 addition | Content and oral progression | Exact selector | Canonical new link |
|---|---|---|---|---|
| La máquina que elimina cosas del mundo | A1 | 24 separate decisions; everyday objects, visible short-answer frames, concrete consequences, reconsideration and actual-choice closing | A1, A2, B1, B2 | `/la-maquina-que-elimina-cosas?level=A1` |
| Tu vida con una regla absurda | A1 | 15 rules × 3 prompts = 45; reaction → routine → choice, visible stage-specific frames and supported invention finale | A1, A2, B1, B2 | `/tu-vida-con-una-regla-absurda?level=A1` |
| Red Flag o No | C1 | 18 situations across three phases of six; initial judgment, explicit hidden-context reveal, revision/qualification and missing-information discussion; criteria/exception finale using actual judgments | A1, A2, B1, B2, C1 | `/red-flag-o-no-a2?level=C1` |
| Let’s Talk | C1 | 15 original worlds × 8 questions = 120; 30 optional follow-ups, seven precision moves, exactly-three selection and synthesis connecting the actual selected questions | A1, A2, B1, B2, C1 | `/a1-conversation?level=C1` |

All four provide selective 45-minute teaching sequences rather than requiring every item in one class. They remain PRO through canonical IDs 101, 102, 207 and 15. No new route ID, slug, resource alias or duplicate catalog card was introduced. No C2 is exposed in these four families, and Machine/Rules do not expose C1. Historical defaults, old query-free URLs, old aliases and all older preview metadata remain intact. Public summaries import no private banks.

| Final check | Result |
|---|---|
| `npm run test:conversation` | **87 passed; 0 failed, skipped or cancelled**. Baseline was 60; 27 new tests added. The command is already included in `npm test`. |
| `npm run lint` | **Passed**. Two new SSR-test local variables were renamed from `module` to satisfy the existing Next ESLint rule; no application change was needed. |
| `npm run build` | **Passed**, including protection, finalization and `validate:artifact`. 59 private client modules and 47 premium media files protected; 281 private paths excluded. |
| `tsc --noEmit --incremental false` | **11 baseline diagnostics remain; zero new diagnostics.** Baseline captured after safe main integration and final output are byte-identical. Both outputs have SHA-256 `cf6b81ec60bcdd8aa9b27fac4f178f2f4910c9fd98b12225381f49c287234859`. Existing locations: billing 8, marketing 2, Mexico 1. |
| `git diff --check` | **Passed** on the complete Run 2 diff. |
| Run 1 preservation | **Passed**: fourteen bank fingerprints, thirty-six exact-file hashes, old family metadata/preview values, full route/access ledger and entire Run 1 status prefix. Independent reviewer checked the hash provenance against Git objects. |
| Thumbnails / JSON | **Passed**: all four actual saved WebPs inspected and decoded; dimensions/hashes agree with valid prompt JSON. Eight original/Run 1 style references remain unchanged. |
| Independent content review | All 24 decisions, 15 rules/45 prompts, 18 Red Flag situations and 120 Talk prompts, supports, guides and closings read. Two new C1 phrases clarified; new C1 interface copy aligned with tú. No outstanding pedagogical defects found. |
| Independent code review | No actionable regressions found in state, dispatch, private boundaries, aliases, resources, tests or responsive CSS. |
| Interactive desktop/mobile QA | **Blocked, not passed.** No permitted new local-preview mechanism is advertised. Run 1’s `net::ERR_BLOCKED_BY_CLIENT` and explicit shared-file protocol rejection remain the recorded restriction; no forbidden workaround or deployment was attempted. |

Static/render coverage spans **all eight Run 1 + Run 2 variants**: Red Flag A1/C1, Talk B2/C1, Machine B2/A1 and Rules B2/A1. SSR checks select them through all ten historical route adapters and render their public resource content, objectives, correct preview image, lesson link and level-specific JSON-LD. Hook-driven tests exercise Red Flag initial/revised/qualified choices, context visibility, keyboard behavior and reset; Talk exact-three gating/reselection/closing; World decision/reveal/revision, three-question progression, finale and persisted session effects. A simulated history test exercises the real selector handlers and subscriptions while preserving other parameters/hash. Real browser history, touch, overflow, focus appearance and desktop/mobile visual acceptance remain unverified.

Responsive source review checked inherited and added CSS for all eight variants: existing single-column breakpoints and wrapping controls remain; new C1 optional support collapses to one column; A1 frames/recaps and C1 context/history blocks wrap long text and use flexible widths. Original B2 CSS is byte-identical. These are structural checks, not screenshots or a claim of visual acceptance.

Full `npm test` and local-worker HTTP tests were deliberately **not run**, because their harness creates/migrates local D1. Only the authorized safe conversation tests, lint, compiler and protected build/artifact checks ran. No production HTTP requests or identity/payment/database operations were needed.

Pedagogical review follows the repository’s communicative-demand approach, with the [PCIC A1–A2 functions](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/05_funciones_inventario_a1-a2.htm), [PCIC C1–C2 functions](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/05_funciones_inventario_c1-c2.htm) and [CEFR global scale](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale) as guidance, not formal certification.

### Run 2 deferred issues and boundaries

- Interactive visual QA remains pending under the browser policy. Static/SSR checks do not remove that limitation.
- The eleven unrelated TypeScript diagnostics remain unchanged. Original/Run 1 content, bilingual-preview drift and historical mixed addressing noted above remain authoritative and were not rewritten.
- No Run 2 implementation defects remain known after review. No C2, Machine/Rules C1, other family or Run 3 work was started.
- No merge to main or PR that would trigger automatic merging was created. No deployment, D1 operation, production-data modification, auth/Firebase/Paddle/PayPal/billing/Resend change, secret/environment/domain change, release-controller/state change or deployment-configuration change occurred.
- Final `main` fetch still resolves to `5d6733a9b9404bbc17bf6999530eb48ffb574a3e`, already included as a parent of integration checkpoint `783a36a`. Main and Run 1 are both ancestors of this branch. The seven upstream export-related files are unchanged from main, not Run 2-authored modifications.

### Run 2 exact changed-file manifest

33 task-owned files relative to integrated baseline `783a36a64cfa430bfdede97adde7c686748edf9e`:

- `app/choose-conversation/C1ConversationTools.tsx`
- `app/choose-conversation/c1-data.ts`
- `app/choose-conversation/c1.css`
- `app/choose-conversation/page.tsx`
- `app/choose-conversation/variants.ts`
- `app/conversation-families/authored-levels.ts`
- `app/conversation-worlds/ConversationWorld.tsx`
- `app/conversation-worlds/ConversationWorldFamily.tsx`
- `app/conversation-worlds/data-a1.ts`
- `app/conversation-worlds/types.ts`
- `app/conversation-worlds/worlds.css`
- `app/red-flag-o-no/RedFlagGame.tsx`
- `app/red-flag-o-no/c1.mjs`
- `app/red-flag-o-no/engine.mjs`
- `app/red-flag-o-no/red-flag.css`
- `docs/lessons/conversation-batch1-run2-thumbnail-prompts.json`
- `docs/lessons/conversation-family-production-status.md`
- `package.json`
- `public/catalog-thumbnails/conversation-c1.webp`
- `public/conversation-worlds/absurd-universe-a1.webp`
- `public/conversation-worlds/elimination-machine-a1.webp`
- `public/play-mode/red-flag-o-no/c1.webp`
- `tests/conversation-batch1-routes.test.mjs`
- `tests/conversation-batch1-run2-routes.test.mjs`
- `tests/conversation-batch1-run2.test.mjs`
- `tests/conversation-batch1.test.mjs`
- `tests/conversation-families.test.mjs`
- `tests/conversation-worlds-a1.test.mjs`
- `tests/fixtures/conversation-batch1-run1-preserved.json`
- `tests/red-flag-c1.test.mjs`
- `tests/red-flag-o-no.test.mjs`
- `tests/talk-b2.test.mjs`
- `tests/talk-c1.test.mjs`

Relative to Run 1 `f919429`, seven additional files come solely from the unchanged main integration: `app/api/admin/export/d1-export.ts`, `app/api/admin/export/route.ts`, `docs/releases/CUTOVER_RUNBOOK.md`, `docs/releases/PRODUCTION_DATA_EXPORT.md`, `scripts/import-production-export.mjs`, `tests/production-export-import.test.mjs`, `tests/teacher-access.test.mjs`. They were not authored in this run; no export or import endpoint/tool was invoked.


## Batch 1 · Run 3 — 2026-09-27

### Scope and preservation baseline

Run 3 begins at the exact Run 2 final commit `2f0194395ab088d435728a9a33c9e07895009ef4`, on `codex/conversation-batch1-run3-20260927`. Freshly fetched canonical main is still `5d6733a9b9404bbc17bf6999530eb48ffb574a3e`, already an ancestor of Run 2; there are no newer main changes to reconcile. No overlapping open PR was found. The remote Run 3 branch was created before content authoring. The previous checkout lost its Git common directory, so a fresh isolated clone was made without deleting or cleaning any old work.

Exactly four additions are authorized: Machine C1, Absurd Rules C1, Red Flag C2 and Let’s Talk C2. Machine/Rules C2 remain deferred to Run 4. Existing content, defaults, routes, aliases, IDs, access, assets and Run 1/Run 2 histories remain authoritative. The historical audit remains on its original audit branch and commit; it is not rewritten here. No merge to main, auto-merging PR or deployment is authorized.

Fresh baseline: `npm run test:conversation` passes **87/87**; `tsc --noEmit --incremental false` reports **11 inherited diagnostics** (billing 8, marketing 2, Mexico 1). Final comparison uses this run’s captured diagnostic output. `tests/fixtures/conversation-batch1-run2-preserved.json` captures **18 existing bank fingerprints, 47 immutable files**, all existing target-family metadata, the complete route ledger and the exact Run 1 + Run 2 status prefix directly from the Run 2 Git objects.

Authoring follows the repository conversation-family guide, [CEFR global scale](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale) and [PCIC C1–C2 functions](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/05_funciones_inventario_c1-c2.htm): C1 qualification/reformulation and C2 pragmatic interpretation/precision are communicative demands, not vocabulary-length targets or formal certification.

Interactive desktop/mobile QA remains pending: no newly permitted local preview method is exposed, and the previously recorded `ERR_BLOCKED_BY_CLIENT` mechanism is not retried. Source/SSR, hook interaction tests, responsive CSS review and saved-thumbnail inspection will provide explicitly limited evidence. No production, D1, authentication, billing, secrets, environment, domains, release state or deployment configuration is changed.

This first checkpoint preserves the baseline and the first two completed thumbnail assets; authored banks and final verification follow.


### Run 3 implementation checkpoint

All four variants are implemented in the existing shared engines. Machine C1 has 30 new dependency/reformulation dilemmas; Rules C1 has 15 rules, 45 questions and 30 staged developments; Red Flag C2 has 18 scenarios with three gated evidence/judgment phases; Let’s Talk C2 has 120 questions in the same fifteen worlds. Public metadata adds exactly four variants to the existing PRO cards and canonical IDs, with no new routes or resource slugs. Red Flag and Let’s Talk now expose A1–C2; Machine and Rules expose A1–C1 only.

Fresh aggregate checks: **115 conversation tests passed**, lint passed, and TypeScript output is byte-identical to the freshly captured 11-diagnostic baseline. The protected build is the next gate. Independent code review verified the preservation fixture against exact Run 2 Git objects and found one keyboard issue: Space on a Red Flag disclosure summary could trigger global lesson shortcuts. A failing-then-passing regression now protects native summary behavior and main-area shortcuts. No technical findings remain open.

Independent content reviewers read all new banks and the relevant complete older banks. Seven Talk prompts were revised to remove weak C2 demands or C1/B2 near-duplicates. Three Red Flag narrative issues were clarified. C1 review corrected two scenario inconsistencies, differentiated two repeated consequence patterns and varied initial question stems. All findings were rechecked and closed. The four saved WebPs were visually inspected and decoded; no older asset was overwritten. Interactive browser QA remains pending as recorded above.

Remote checkpoints before complete integration: `01ad37a86a3350a8255c9e76cd5f9cc46b47b16c` (preservation baseline and first two thumbnails), `a4c6571c1d72124f11ffd37505f85fa6e7079c53` (Talk bank and Red Flag thumbnail), `d2b0ec9e8b9efb3d4daec293f837a3e8781382bb` (Red Flag bank and final thumbnail), `86f51adf962eae36a1420252c508eaa1bf23e9c9` (C2 engines/tests and both C1 banks). This checkpoint preserves full registration, Worlds integration and aggregate regressions before the build.


### Run 3 final results

Verified implementation checkpoint: **`538401b759cb77f14618f524f6cba2d26397476a`**. It contains all Run 3 application source, content, assets, registration and tests. The final documentation checkpoint adds these results only; its parent is that verified implementation. Use the Run 3 branch HEAD for the full delivered record. Fresh final main check still resolves to `5d6733a9b9404bbc17bf6999530eb48ffb574a3e`, an ancestor of this branch.

| Family | Added variant and exact counts | Designed oral progression | Exact selector after Run 3 | Canonical link |
|---|---|---|---|---|
| La máquina que elimina cosas del mundo | **C1: 30 dilemmas**; each has a central question, depth prompt, fictional consequence, reinterpretation, three lexical supports, discourse starter and optional teacher challenge | Initial vote → overlooked dependency → revealed effect → revised/qualified proposition → choose three completed decisions and formulate a principle, exception and worse substitute to avoid | **A1, A2, B1, B2, C1** | `/la-maquina-que-elimina-cosas?level=C1` |
| Tu vida con una regla absurda | **C1: 15 laws × 3 questions = 45**; 30 staged developments, 15 teacher follow-ups and per-rule support | Intention → adaptation/loophole → new norm → choose three completed rules to keep, reject for unintended effects and rewrite precisely | **A1, A2, B1, B2, C1** | `/tu-vida-con-una-regla-absurda?level=C1` |
| Red Flag o No | **C2: 18 scenarios**; each has an initial prompt, context, reconsideration, independent alternative testimony, comparison, evidence question and protocol-conflict task | Initial signal → context and second judgment → alternative account and final signal/qualification/suspension → four or five personal principles tested against a completed scenario | **A1, A2, B1, B2, C1, C2 — complete** | `/red-flag-o-no-a2?level=C2` |
| Let’s Talk | **C2: 15 worlds × 8 questions = 120**; 30 optional follow-ups, five light discourse moves and selected-question synthesis | Choose one world → exactly three questions → oral interpretation/reformulation → register shift → synthesis using the actual three selected questions | **A1, A2, B1, B2, C1, C2 — complete** | `/a1-conversation?level=C2` |

Each variant has a selective 45-minute guide; the entire bank is not intended to be exhausted in one lesson. All new learner content is Spanish. Shared family names and established branding remain authoritative. Existing PRO entitlement IDs remain 101, 102, 207 and 15. No new route, lesson ID, resource alias or family card was created. Existing level metadata/previews remain unchanged. Private banks stay within authorized engine hosts; public registry modules contain summaries only.

Red Flag and Talk use the existing keyed level remount. Worlds retains all eight existing storage keys and adds `chespanish-conversation-machine-C1-v1` and `chespanish-conversation-rules-C1-v1`. Saved decisions/rule completion resume independently. C1 synthesis notes/selections and Red Flag protocol notes are disposable interaction state for the current level/session view, not durable saved lesson content; resetting the activity clears them. Query/hash/history behavior remains in the unchanged shared selector/navigation modules.

| New thumbnail | Composition | Dimensions |
|---|---|---|
| `public/conversation-worlds/elimination-machine-c1.webp` | Floating planet connected to market, delivery and shared-meal chambers, making dependencies visible | 1672 × 941 |
| `public/conversation-worlds/absurd-universe-c1.webp` | Blocked bridge with pedestrians using its underside and an inverted café; same impossible city | 1672 × 941 |
| `public/play-mode/red-flag-o-no/c2.webp` | Familiar editorial red/green conversation with two photographs suggesting competing contextual interpretations | 1536 × 1024 |
| `public/catalog-thumbnails/conversation-c2.webp` | Colorful topic spheres, layered near/far city perspectives and exactly three selected question tiles | 1672 × 941 |

Four separate built-in image generations used inspected prior family images. WebP conversion only; no prior thumbnail overwritten. Prompt/reference/provenance records are in `conversation-batch1-run3-thumbnail-prompts.json`. All four saved images were visually inspected and decoded; dimensions, file sizes, SHA-256 values and all twelve reference records match the files. The Red Flag photos convey contrasting contextual accounts, not a claim to be crops from the same instant.

| Final check | Result |
|---|---|
| `npm run test:conversation` | **115 passed; 0 failed, skipped or cancelled**. Fresh inherited baseline was 87; 28 new tests added. New suites are included in the existing conversation command used by `npm test`. |
| Preservation | **Passed:** 18 old bank fingerprints, 47 immutable-file hashes, existing family variant/preview values, full route ledger and exact Run 1 + Run 2 status prefix. Independent reviewer regenerated the fixture from exact Run 2 Git objects. |
| Routes/catalog/resources | Exact six-/five-level selectors, all historical route defaults and aliases, all four new query variants through the ten legacy adapters, selected public previews/objectives/JSON-LD/canonical URLs and single family cards verified. |
| State/interaction | Red Flag three-stage gates/verdicts/protocol/reset and native summary Space; Talk exact-three cap/reselection/world reset; C1 world progressive developments, actual-choice finale gates, independent storage and completed-rule revisits verified. Real selector handlers preserve other query parameters/hash and respond to simulated back/forward notifications. |
| `npm run lint` | **Passed** on final application source. |
| `npm run build` | **Passed**, including protected finalization and `validate:artifact`: 59 private client modules and 47 premium media files protected; 285 private paths excluded. No deployment occurred. |
| `tsc --noEmit --incremental false` | **Fails with the same 11 inherited diagnostics; zero new diagnostics.** Baseline and post-implementation diagnostic output are byte-identical, SHA-256 `cf6b81ec60bcdd8aa9b27fac4f178f2f4910c9fd98b12225381f49c287234859`. Locations remain billing 8, marketing 2, Mexico 1. |
| `git diff --check` | **Passed** across the complete Run 3 diff. |
| JSON / assets | **Passed** for preservation fixture and thumbnail provenance; four actual WebPs and twelve reference records verified. |
| Independent code review | **No open actionable findings.** The one summary-keyboard issue was reproduced with a failing regression, fixed in the shared guard and independently reverified. |
| Browser visual QA | **Pending, not passed.** The previously documented browser-policy blocker remains; no permitted replacement preview mechanism is exposed and no blocked mechanism was retried. |

Automated render evidence includes all four new variants through their legacy routes, resource pages, the Talk home and all fifteen boards, and hook-driven interaction states. Responsive CSS/source review checked wrapping controls, collapsing columns, long text, focus outlines and full-width fields; thumbnail inspection is complete. These checks do not establish actual desktop/mobile layout, touch behavior, scrolling, focus/animation or real-browser history acceptance. No deployment was used for QA.

### Run 3 content-quality and duplication review

Independent reviewers read all new content and the complete relevant older banks, including first/middle/final items, supports, guides and finales. C1 tasks require dependencies, assumptions, exceptions and reformulation. C2 tasks require precise distinctions, pragmatic interpretation, competing readings and register control. [PCIC C1–C2 pragmatic strategies](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/06_tacticas_pragmaticas_inventario_c1-c2.htm) supplements the references recorded in the baseline; this is an authoring judgment, not formal certification.

- Seven Talk prompts were revised after human review identified C1/B2 overlap or a demand answerable fully at B2. Replacements were independently rechecked. Final questions contain 20–38 words (mean approximately 27.6), with varied stems and no accidental English or unnecessary academic terminology found.
- Three Red Flag scenarios were clarified: screenshot recipient uncertainty, consent scope attributed to a speaker rather than an omniscient narrator, and a more credible independent account of whether another invitation settled an informal promise. No diagnostic labels or sensationalized abuse scenarios were found.
- C1 corrections fixed the party-volume/status contradiction and clarified whether exclusive shops were breaking an access rule. Recommendation-system and library scenarios now have distinct consequences/interpretive demands. Initial Machine question stems were diversified; five of thirty start with “¿Eliminarías”, rather than twenty-eight. Minor new Spanish wording was polished.
- Final normalization check covers **213 new primary items/prompts** (30 Machine questions, 45 Rules questions, 18 Red Flag scenarios, 120 Talk questions) against one another within each family and **1,014 historical same-family items**: **zero exact/normalized duplicates**. Token-overlap rankings were inspected as screening evidence, not treated as proof of semantic originality. Human review caught and resolved the substantive near-duplicates that lexical checks alone missed.
- Shared everyday themes remain where their premises, mechanisms or discourse demands differ meaningfully; none of the original banks was rewritten to force separation.

### Run 3 deferred items and boundaries

Interactive desktop/mobile visual acceptance remains pending for the recorded browser limitation. Full `npm test` and local-worker HTTP tests were not run because that harness creates/migrates local D1; targeted conversation suites and the protected build were used instead. The 11 inherited TypeScript diagnostics and previously documented original-preview discrepancies remain unchanged.

**Machine C2 and Rules C2 were not created or exposed. Run 4 was not started.** Runs 1 and 2, historical original lesson text, assets, defaults, IDs, aliases and access remain intact. The historical audit files remain unchanged on audit commit `e6da3f0943de088a9cba837ea71b3faa77a473eb`.

**No main merge, auto-merging PR, deployment, production/D1 operation, authentication/Firebase change, Paddle/PayPal/billing/Resend change, secret/environment/domain change, release-controller state change or deployment-configuration change occurred.** This is a committed and pushed source-branch delivery; browser acceptance remains pending.

### Run 3 exact changed-file manifest

38 files relative to Run 2 final `2f0194395ab088d435728a9a33c9e07895009ef4`:

- `app/choose-conversation/C2ConversationTools.tsx`
- `app/choose-conversation/c2-data.ts`
- `app/choose-conversation/c2.css`
- `app/choose-conversation/page.tsx`
- `app/choose-conversation/variants.ts`
- `app/conversation-families/authored-levels.ts`
- `app/conversation-worlds/ConversationWorld.tsx`
- `app/conversation-worlds/ConversationWorldFamily.tsx`
- `app/conversation-worlds/data-c1.ts`
- `app/conversation-worlds/types.ts`
- `app/conversation-worlds/worlds.css`
- `app/red-flag-o-no/RedFlagGame.tsx`
- `app/red-flag-o-no/c2.mjs`
- `app/red-flag-o-no/engine.mjs`
- `app/red-flag-o-no/red-flag.css`
- `docs/lessons/conversation-batch1-run3-thumbnail-prompts.json`
- `docs/lessons/conversation-family-production-status.md`
- `package.json`
- `public/catalog-thumbnails/conversation-c2.webp`
- `public/conversation-worlds/absurd-universe-c1.webp`
- `public/conversation-worlds/elimination-machine-c1.webp`
- `public/play-mode/red-flag-o-no/c2.webp`
- `tests/conversation-batch1-routes.test.mjs`
- `tests/conversation-batch1-run2-routes.test.mjs`
- `tests/conversation-batch1-run2.test.mjs`
- `tests/conversation-batch1-run3-routes.test.mjs`
- `tests/conversation-batch1-run3.test.mjs`
- `tests/conversation-batch1.test.mjs`
- `tests/conversation-families.test.mjs`
- `tests/conversation-worlds-a1.test.mjs`
- `tests/conversation-worlds-c1.test.mjs`
- `tests/fixtures/conversation-batch1-run2-preserved.json`
- `tests/red-flag-c1.test.mjs`
- `tests/red-flag-c2.test.mjs`
- `tests/red-flag-o-no.test.mjs`
- `tests/talk-b2.test.mjs`
- `tests/talk-c1.test.mjs`
- `tests/talk-c2.test.mjs`
