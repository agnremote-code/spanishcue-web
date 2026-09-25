# Conversation family migration

## Reino Unido update · 2026-09-25

The table below records the original migration. The Reino Unido family now offers A1 and B1. Its former A2 practical questions join the existing B1 questions without deleting either track. The A1 variant uses the same twelve-area map and 48 stops with 96 new short questions, 48 new place prompts, simpler contexts, local vocabulary and A1 speaking supports. Existing `?level=A2` links fall back to the B1 default; the selectable levels are A1 and B1. There is no database or entitlement change.

Canonical base: `6807b17ddae2d29deedf5e179f03fdf50635f259`. Source-only task; no production deployment or database change.

48 original conversation entries become 41 families and 51 selectable level variants. All non-conversation records retain their original values.

| Family | Levels | Original lesson IDs | Access | Migration |
|---|---|---|---|---|
| Red Flag o No | A2 · B1 · B2 | 207, 208, 209 | pro | Shared renderer; distinct authored tracks. |
| La máquina que elimina cosas del mundo | A2 · B1 | 101, 103 | pro | Shared renderer; distinct authored tracks. |
| Tu vida con una regla absurda | A2 · B1 | 102, 104 | pro | Shared renderer; distinct authored tracks. |
| El Reino de las Preguntas Prohibidas | A2 · B1 | 20, 21 | pro | Shared renderer; distinct authored tracks. |
| Let’s Talk | A1 · A2 · B1 | 15, 14, 13 | pro | Shared renderer; distinct authored tracks. |
| Entrenador personal | B1 | 216 | pro | Existing authored seed; no unreviewed level added. |
| La vida después de los 30 | B1 | 215 | pro | Existing authored seed; no unreviewed level added. |
| De eso sí hablo | B1 | 205 | pro | Existing authored seed; no unreviewed level added. |
| No es tan simple | B2 | 206 | pro | Existing authored seed; no unreviewed level added. |
| Ciudad en juego | B1 | 139 | pro | Existing authored seed; no unreviewed level added. |
| ¿Y ahora qué? | B1 | 138 | pro | Existing authored seed; no unreviewed level added. |
| Uno o el otro | B1 | 137 | pro | Existing authored seed; no unreviewed level added. |
| La Cámara de Presión | C2 | 136 | pro | Existing authored seed; no unreviewed level added. |
| El Ministerio de las Versiones | C2 | 129 | pro | Existing authored seed; no unreviewed level added. |
| La Agencia de Vidas Paralelas | C1 | 128 | pro | Existing authored seed; no unreviewed level added. |
| El Protocolo Aurora | B2 | 127 | pro | Existing authored seed; no unreviewed level added. |
| La Noche de las Siete Llamadas | B1 | 126 | pro | Existing authored seed; no unreviewed level added. |
| La Mesa de las Tres Ofertas | B2 | 125 | pro | Existing authored seed; no unreviewed level added. |
| La Sala de los Mensajes Fuera de Contexto | B2 | 124 | pro | Existing authored seed; no unreviewed level added. |
| En Vivo en Diez Minutos | A2 | 123 | pro | Existing authored seed; no unreviewed level added. |
| El Teatro de las Coartadas | A2 | 122 | pro | Existing authored seed; no unreviewed level added. |
| El Cine de las Tres Funciones | A1 | 121 | pro | Existing authored seed; no unreviewed level added. |
| La Noche de las Invitaciones Cruzadas | A1 | 120 | pro | Existing authored seed; no unreviewed level added. |
| La isla vota | B1 | 109 | pro | Existing authored seed; no unreviewed level added. |
| Buenos Aires en la Calle | A2 | 39 | pro | Existing authored seed; no unreviewed level added. |
| MÉXICO | B1 | 210 | free | Existing authored seed; no unreviewed level added. |
| ESTADOS UNIDOS | A2 · B1 | 36 | free | Shared renderer; distinct authored tracks. |
| El Monasterio de las Ideas | C2 | 34 | pro | Existing authored seed; no unreviewed level added. |
| Irlanda en Relieve | B1 | 33 | pro | Existing authored seed; no unreviewed level added. |
| Reino Unido en Relieve | A2 · B1 | 32 | pro | Shared renderer; distinct authored tracks. |
| Australia en Movimiento | A2 · B1 | 30 | pro | Shared renderer; distinct authored tracks. |
| Suiza en Relieve | B1 | 29 | pro | Existing authored seed; no unreviewed level added. |
| El Mundo Fantástico | A1 | 27 | pro | Existing authored seed; no unreviewed level added. |
| Estados Unidos · Coast to Coast | A1 | 26 | pro | Existing authored seed; no unreviewed level added. |
| Israel en Capas | B1 | 25 | pro | Existing authored seed; no unreviewed level added. |
| Indonesia Fantástica | A1 | 24 | pro | Existing authored seed; no unreviewed level added. |
| La Ciudad del Futuro | B1 | 22 | pro | Existing authored seed; no unreviewed level added. |
| Argento Roleplays | A1 | 19 | pro | Existing authored seed; no unreviewed level added. |
| La Ruleta de Tu Vida | A2 | 17 | pro | Existing authored seed; no unreviewed level added. |
| Preguntas que dan ganas de hablar | C1 | 11 | pro | Existing authored seed; no unreviewed level added. |
| El museo de las decisiones | C2 | 203 | pro | Existing authored seed; no unreviewed level added. |

## Compatibility and content decisions

- All original lesson paths and IDs remain in the route/access ledger. The original resource URLs are recorded in tests/conversation-legacy-urls.json; each remains resolvable. Consolidated resource pages declare the family's existing canonical resource URL, with no query parameter. The sitemap lists each family once.
- Filtered cards carry the selected level into the public preview and protected lesson. Access redirects preserve the query string through the existing payment return path.
- Original sample IDs 36 and 210 stay free. The distinct paid USA A1 experience is not merged with the free atlas.
- Let’s Talk has one renderer and fifteen complete topic worlds at each level. Its former A2 deck reused B1 questions and had missing topic titles; A2 now uses practical everyday exchanges, plans and short problem-solving tasks. The original B1 and A1 questions remain.
- Reino Unido separates 48 practical A2 tasks from its original 96 discussion questions at B1. Australia selects the existing 32 A2 and 16 B1 questions. The USA atlas selects its existing A2 core or B1 extension by state.
- Singleton families keep their native experiences. Additional levels need authored content and pedagogical review before being advertised. Do not infer CEFR availability from visual reuse.
- Taxi is absent from the inspected canonical main and remains a future family opportunity, not a fabricated migration. Distinct country worlds and the two differently themed boards remain separate.

## Authoring and pedagogy references

See [authoring guide](conversation-family-authoring.md). Communicative level decisions use the [PCIC A1–A2 functions](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/05_funciones_inventario_a1-a2.htm) and [CEFR global scale](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale). These references guide authoring, not a claim of formal certification.

## Verification and review

- Full protected build and local-worker regression passed before review (123 tests in the main worker batch, plus release, tracker, Red Flag and country suites).
- Independent review found repeated overview cards/wrong shelf-level links and Australia place indexes. Fixed both, with a failing-then-passing shelf regression and a control test covering every Australian region/place at both levels. Country active-track counts now agree with content.
- Browser-based visual, mobile, focus and history QA remains unverified: the provided browser blocks the local preview with `net::ERR_BLOCKED_BY_CLIENT`. SSR covers all eight shared engines; this is not a substitute for visual QA.
- TypeScript has the same 12 diagnostics as the original main snapshot, in billing, marketing and Mexico map code; no new diagnostics in the initial comparison. No unrelated fixes included.
- Integrated current main (92ef9db, including concurrent purchase-claim and SEO changes); preserved both suites when resolving the test-runner conflict. Final combined verification is recorded in the PR CI.
- No production deployment, production D1 operation or real checkout was performed.
