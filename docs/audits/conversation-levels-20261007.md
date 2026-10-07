# Conversation A0–C2 normalization audit — 2026-10-07

Task base: `1e256d1488cba22f18c06329b6a6a186ee5925f0`. Integrated main: `d01d95890c17096652ce375b69a1eb4475315f5e` (includes the independent country-atlas PR #125).

## Findings and implementation

The initial inventory contained 44 conversation families. USA had separate A1 and A2/B1 catalogue entries. Red Flag, the two Conversation Worlds and Let’s Talk already shared A1–C2 banks; the Kingdom had A2/B1; several country maps had two levels. The other engines mostly hardcoded one authored level in native JSX. None of the original families exposed a genuine A0 route.

USA was inspected first: its existing country views, relief map, state data, activities and mode panel provide the reuse pattern. The existing `ConversationFamily` URL-backed selector was the common navigation layer. The implementation extends that layer and feeds level-specific data into each original engine. It retains maps, layouts, assets, reveal state, decision consequences, timing, game controls and teacher operation. The USA catalogue now has one family, retaining IDs 36 and 26 and both historical URLs; the protected legacy URL retains its access policy.

Each family exposes A0 · A1 · A2 · B1 · B2 · C1 · C2. A0 includes translated prompts, prepared verbs, pronouns, choices, model sentences and short contextual grammar support. A1–C2 tasks change the expected language, question demands and support. Existing authored banks are retained. The new country atlases already satisfy the seven-level contract and are registered without rewriting them.

The catalogue contract in `level-coverage.ts` requires each future conversation engine to be explicitly registered after implementing all seven levels; the inventory test checks the published coverage. The selector preserves query parameters and URL fragments, supports browser history and remounts the native activity on a level change. CSS offsets use the measured selector height, including native responsive breakpoints.

## Per-family inventory and automated checks

“Checked” means content/module rendering and, for stateful engines, the native interaction tests described below. It does not imply a browser screenshot review.

| Class / canonical route | Previous authored levels | Result | Checked |
|---|---|---|---|
| Estados Unidos — `/estados-unidos-a2-b1` | A1 · A2 · B1 | One A0–C2 family | A0, A1, B1, C2 |
| Red Flag o No — `/red-flag-o-no-a2` | A1 · A2 · B1 · B2 · C1 · C2 | One A0–C2 family | A0, A1, B1, C2 |
| La máquina que elimina cosas del mundo — `/la-maquina-que-elimina-cosas` | A1 · A2 · B1 · B2 · C1 · C2 | One A0–C2 family | A0, A1, B1, C2 |
| Tu vida con una regla absurda — `/tu-vida-con-una-regla-absurda` | A1 · A2 · B1 · B2 · C1 · C2 | One A0–C2 family | A0, A1, B1, C2 |
| El Reino de las Preguntas Prohibidas — `/preguntas-prohibidas` | A2 · B1 | One A0–C2 family | A0, A1, B1, C2 |
| Let’s Talk — `/a1-conversation` | A1 · A2 · B1 · B2 · C1 · C2 | One A0–C2 family | A0, A1, B1, C2 |
| La ciudad no duerme — `/la-ciudad-no-duerme` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| El bosque de los hongos gigantes — `/bosque-de-los-hongos-gigantes` | A1 · A2 · B1 · B2 · C1 · C2 | One A0–C2 family | A0, A1, B1, C2 |
| Noche abierta — `/noche-abierta` | A1 · A2 · B1 · B2 · C1 · C2 | One A0–C2 family | A0, A1, B1, C2 |
| Entrenador personal — `/entrenador-personal` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| La vida después de los 30 — `/la-vida-despues-de-los-30` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| De eso sí hablo — `/tablero-de-eso-si-hablo` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| No es tan simple — `/tablero-no-es-tan-simple` | B2 | One A0–C2 family | A0, A1, B1, C2 |
| Ciudad en juego — `/ciudad-en-juego` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| ¿Y ahora qué? — `/modo-play-y-ahora-que` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| Uno o el otro — `/modo-play-uno-o-el-otro` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| La Cámara de Presión — `/la-camara-de-presion` | C2 | One A0–C2 family | A0, A1, B1, C2 |
| El Ministerio de las Versiones — `/el-ministerio-de-las-versiones` | C2 | One A0–C2 family | A0, A1, B1, C2 |
| La Agencia de Vidas Paralelas — `/la-agencia-de-vidas-paralelas` | C1 | One A0–C2 family | A0, A1, B1, C2 |
| El Protocolo Aurora — `/el-protocolo-aurora` | B2 | One A0–C2 family | A0, A1, B1, C2 |
| La Noche de las Siete Llamadas — `/la-noche-de-las-siete-llamadas` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| La Mesa de las Tres Ofertas — `/la-mesa-de-las-tres-ofertas` | B2 | One A0–C2 family | A0, A1, B1, C2 |
| La Sala de los Mensajes Fuera de Contexto — `/la-sala-de-los-mensajes-fuera-de-contexto` | B2 | One A0–C2 family | A0, A1, B1, C2 |
| En Vivo en Diez Minutos — `/en-vivo-en-diez-minutos` | A2 | One A0–C2 family | A0, A1, B1, C2 |
| El Teatro de las Coartadas — `/el-teatro-de-las-coartadas` | A2 | One A0–C2 family | A0, A1, B1, C2 |
| El Cine de las Tres Funciones — `/el-cine-de-las-tres-funciones` | A1 | One A0–C2 family | A0, A1, B1, C2 |
| La Noche de las Invitaciones Cruzadas — `/la-noche-de-las-invitaciones-cruzadas` | A1 | One A0–C2 family | A0, A1, B1, C2 |
| La isla vota — `/la-isla-vota` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| Buenos Aires en la Calle — `/buenos-aires-en-la-calle` | A2 | One A0–C2 family | A0, A1, B1, C2 |
| MÉXICO — `/mexico` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| El Monasterio de las Ideas — `/monasterio-de-las-ideas` | C2 | One A0–C2 family | A0, A1, B1, C2 |
| Irlanda en Relieve — `/irlanda-en-relieve` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| Reino Unido en Relieve — `/reino-unido-en-relieve` | A1 · B1 | One A0–C2 family | A0, A1, B1, C2 |
| Australia en Movimiento — `/australia-en-movimiento` | A2 · B1 | One A0–C2 family | A0, A1, B1, C2 |
| Suiza en Relieve — `/suiza-en-relieve` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| El Mundo Fantástico — `/mundo-fantastico` | A1 | One A0–C2 family | A0, A1, B1, C2 |
| Israel en Capas — `/israel-en-capas` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| Indonesia Fantástica — `/indonesia-fantastica` | A1 | One A0–C2 family | A0, A1, B1, C2 |
| La Ciudad del Futuro — `/future-city` | B1 | One A0–C2 family | A0, A1, B1, C2 |
| Argento Roleplays — `/argento-roleplays` | A1 | One A0–C2 family | A0, A1, B1, C2 |
| La Ruleta de Tu Vida — `/life-roulette` | A2 | One A0–C2 family | A0, A1, B1, C2 |
| Preguntas que dan ganas de hablar — `/advanced-conversation` | C1 | One A0–C2 family | A0, A1, B1, C2 |
| El museo de las decisiones — `/clase/203` | C2 | One A0–C2 family | A0, A1, B1, C2 |
| Suecia — `/suecia` | A0 · A1 · A2 · B1 · B2 · C1 · C2 | One A0–C2 family | A0, A1, B1, C2 |
| Argentina — `/argentina` | A0 · A1 · A2 · B1 · B2 · C1 · C2 | One A0–C2 family | A0, A1, B1, C2 |
| España — `/espana` | A0 · A1 · A2 · B1 · B2 · C1 · C2 | One A0–C2 family | A0, A1, B1, C2 |

## Verification coverage

- Historical conversation suites preserve authored banks, legacy paths, catalogue ledger, protected routes and engine behavior.
- Country tests cover all seven levels in twelve existing routes, native exercise/map/cover rendering and contextual country models; atlas tests cover the three independently added countries.
- Narrative tests exercise original stage controls: 14 gala/cinema authored-stage hashes, theatre chronology and suspects, live-production token budgets, message layers, offer clauses, phone clues, Aurora consequences, agency priorities and rewrites, and Ministry certainty/verdict/register/council controls.
- Game, question-world, board, island, monastery, pressure and museum tests verify level-specific banks and A0 models. Uno tests verify models follow the selected category and option through successive conditions. Ministry tests verify closing support follows the current council question.
- The shared selector tests preserve query/hash/history and isolate activity state. TypeScript, lint, neutral-Spanish and exact English-copy guards cover integration.

Local browser screenshot checks were unavailable because browser-binary downloads failed. Responsive behavior was checked in CSS and DOM/source tests; this is a limitation of local validation, not a claim of visual verification.

## Validated delivery checkpoint

- 551 pre-build regression tests passed, including 153 historical conversation tests and 100 all-level/native interaction tests.
- Protected production build and `validate:artifact` passed; 85 private client modules and 193 premium media files remain protected.
- 359 Worker integration tests passed, including anonymous/free/paid route behavior and premium client/media protection.
- TypeScript, ESLint, neutral-Spanish, English-copy and whitespace checks passed.
- The historical Noche tests now assert seven levels and use the published family catalogue. A0 bilingual text is excluded from the old Spanish-only byte-length proxy for complexity; the original A1–C2 comparison remains.

The task branch is preserved remotely. PR creation, CI merge and production publication are pending the repository overlap rule: draft SEO PR #126 also edits `app/clase/[id]/page.tsx` and `package.json`. No changes were made to that branch or to production.
