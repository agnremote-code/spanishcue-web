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
