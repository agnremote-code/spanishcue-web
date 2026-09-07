# CHESPANISH grammar continuation checkpoint — 2026-09-07

This file records source coverage, not proof that a deployment succeeded. Confirm the live saved version and its commit before treating these lessons as published.

## State on entry

- Last confirmed published source: `014b2fca0d980088472af4c5d45cd655763ec0ed` (version 74).
- Published grammar overview sequence: PCIC sections 1–9, ending with La Ciudad de los Motores.
- Retained unfinished work: combined level/category filters; recovered archive of ten first-day draft cards; `grammar-studio` component and A1 content without images or public routes.
- Protected: every collaboratively developed full class and ID 3, Presente con vos. No protected lesson content changed.

## Included in this revision

| ID | Level | Exact topic / scope | Route |
|---|---|---|---|
| 49 | A1 | 10. El sintagma nominal | /la-estacion-de-las-frases |
| 50 | A1 | 11. El sintagma adjetival | /el-acuario-de-las-cualidades |
| 53 | A2 | 12. El sintagma verbal — structure/participants, selected basic periphrases | /el-archipielago-de-las-acciones |
| 54 | A1 | 13. La oración simple — A1 core | /el-laboratorio-de-las-oraciones |
| 55 | A2 | 14. Oraciones compuestas por coordinación — A1 core + A2 e/u | /el-puerto-de-las-conexiones |
| 56 | A2 | Oraciones compuestas por subordinación — block 15 integration, not exhaustive | /el-jardin-de-las-frases-enlazadas |
| 51 | A2 | 2.5. Grados del adjetivo — comparison | /el-hotel-de-las-diferencias |
| 52 | A2 | 9.1.2. Pretérito imperfecto — forms, description, habits | /el-cine-de-los-recuerdos |

Each has dedicated generated artwork (8 assets), at least 5 theory stations, a question per station, four transformation cases, eight explained autocorrection questions, three oral prompts, a final mission/model and manual review checklist. IDs 49–52 also have distinct manipulable language experiments. Artwork is original generated illustration, not factual imagery.

## Next execution

1. Verify this revision actually became the live version. If not, finish publication of this exact work instead of generating duplicates.
2. Major headings 1–15 now have overview lessons, but **the full A1–A2 inventory is NOT exhausted**. Do not disable continuation merely because the overview reaches section 15.
3. Audit the existing source against the first A2-specific subitems in PCIC order; choose the first genuinely uncovered scope. Check nouns (proper names with articles, gender exceptions, invariable plurals), articles (stressed initial a, reference/ellipsis), then later subitems. Do not assume any one is missing without reading the older lesson's theory.
4. Known selected/not exhaustive areas: aspectual periphrases acabar de/empezar a/volver a, details of infinitives/gerunds/participles, A2 extensions of simple sentences, comparative quantity beyond basic equality. A broad section title is not proof of complete subitem coverage.
5. The user's separate broader request also asks for two lessons each at B1/B2/C1/C2. Those remain pending; this run's explicit automation scope is A1–A2. Do not claim they were created.
6. Combined filters use `app/library-filters.mjs`; changing level/category must preserve the other. Archived IDs are 1,2,4,5,6,7,8,9,10,12; do not remove additional lessons without reliable provenance.
7. No image-generation quota error occurred in this batch. Do not claim credit exhaustion or a known balance. Stop if a future generation returns quota/rate limiting; keep continuation active for transient limits.

## Reference

## Verification for this source

- Build and six focused tests passed; all 45 local authored routes returned rendered HTML successfully. The separate Spanish Mouth Lab external Site was not part of this route test.
- Browser: eight new routes load their own images; theory tabs, wrong/correct feedback, transformations and dedicated manipulable experiments checked. First aquarium state read was premature; explicit heading verification confirmed its last station switches correctly.
- Responsive: 320px and 390px iframe viewports checked for A1, hotel, longest-title garden and library; no horizontal document overflow or clipped title/control boxes. The diagnostic route was removed before publishing.
- Level and category verified in both selection orders, including A2 + Gramática and A2 + Conversación on narrow viewports.
- Standalone TypeScript check reports only existing Cloudflare type-environment gaps in `db/index.ts` and `worker/index.ts` (cloudflare:workers, Fetcher, D1Database). The production build and route tests pass. No unrelated type-environment changes were made.
- Browser extension injected cursor attributes produce a hydration diagnostic; no application navigation/runtime failure was found.

## Reference

Checked 2026-09-07: https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_a1-a2.htm

The website's section-15 heading omits the numeral; the displayed lesson preserves that exact heading and identifies block 15 separately.
