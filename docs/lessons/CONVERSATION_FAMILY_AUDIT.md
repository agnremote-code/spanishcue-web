# SPANISHCUE — Conversation family audit

Audit date: **2026-09-26**. Status: **complete, source audit only**.

Repository: `agnremote-code/spanishcue-web`. Canonical source snapshot: `a736cfc49ab787ec6e26b9dc27d7de3060582baf`. Audit branch: `codex/conversation-family-audit-20260926`.

Machine-readable companion: [conversation-family-audit.json](conversation-family-audit.json).

## 1. Executive summary

The current source surfaces **49 conversation lesson records**, organized into **42 conceptual families**, with **52 existing family-level experiences**. No family currently covers all six levels; none is missing only one or two levels. The A1–C2 matrix has **200 absent cells**. Of these, **155 are expansion candidates** and **45 belong to nine recommended standalone experiences and are deferred**. This distinction protects existing originals rather than forcing every concept into six badges.

Eight families already contain multiple levels. The remaining 34 are singleton seeds: 25 are recommended as their own future families; nine should remain standalone unless a later concept review justifies an adjacent-level companion. No active orphan is assigned to another family without evidence.

The strongest immediate production basket is **Red Flag o No, Let’s Talk, La máquina que elimina cosas del mundo, and Tu vida con una regla absurda**. The first bounded run should create only their A1, B2, B2 and B2 variants respectively, after a fresh source check. No new lesson content is authored by this audit.

Important exceptions: UK is A1/B1, with its former A2 material retained inside B1; the FREE USA atlas does not absorb the PRO A1 road trip; board/city/monastery image reuse does not establish family identity; native singleton pages usually ignore `?level`. Six multi-level families share one thumbnail across their existing levels. Those are visual-packaging gaps, not absent lesson variants.

This is not a live-production inventory claim. Existing source, routes, thumbnails, lesson text, access logic and production systems remain unchanged. The audit is kept on its task branch; no auto-merge PR is opened because the repository has a merge-event release controller and this request forbids production changes.

### Method and authority

Read `AGENTS.md`, `CLAUDE.md`, the authoring/migration guides, relevant conversation specs/plans, handoff taxonomy/CEFR/routing guidance, and publication/release documentation. Evaluated the actual TypeScript registry and family projection, then checked every native route, dynamic `/clase/[id]` rendering, content imports, level dispatch, resources/SEO aliases, collection filters and local thumbnails. The catalog is a discovery source, not by itself proof of a differentiated bank.

All **123 app page entries** were cross-checked against the complete lesson ledger. Pages outside the ledger are marketing/account/legal/content hubs or dynamic routers; no unregistered active conversation page was found. Static import traversal identifies three unused content modules forming two dormant USA banks. Six explicitly retired conversation drafts are inventoried separately in §7. Recovery branches are not canonical main and are not silently counted.

Count one numeric route-ledger ID as a **lesson record**, one actual family/CEFR pair as a **variant**, and one shared scenario/universe as a **family**. IDs 30, 32 and 36 each provide two variants from one record. Legacy paths, public resource pages, extra query strings, internal stages, translations and optional deeper questions do not multiply counts.

CEFR review follows communicative demand and support, not vocabulary difficulty. It is a broad reviewer inference, not formal certification. A1 requires supported concrete exchanges; A2 routine exchanges and simple reasons; B1 connected narration/explanation; B2 sustained argument/negotiation; C1 nuance/implicit meaning; C2 precise, flexible, multiperspective discourse.

- [Council of Europe: CEFR global scale](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale)
- [Instituto Cervantes: PCIC functions A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/05_funciones_inventario_a1-a2.htm)
- [Instituto Cervantes: PCIC functions B1–B2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/05_funciones_inventario_b1-b2.htm)
- [Instituto Cervantes: PCIC functions C1–C2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/05_funciones_inventario_c1-c2.htm)

## 2. Total conversational lessons and complete route ledger

**49 active records; 52 distinct level experiences.** The table below defines each active ID once. Default levels are historical route defaults, not separate variants. The JSON preserves current canonical resource slugs, legacy aliases and source page paths for every record.

| ID | Existing title | Existing levels (default) | Lesson path | Current thumbnail | Access |
| --- | --- | --- | --- | --- | --- |
| 221 | La ciudad no duerme | B1 (B1) | `/la-ciudad-no-duerme` | `/la-ciudad-no-duerme/preview.webp` | PRO |
| 216 | Entrenador personal | B1 (B1) | `/entrenador-personal` | `/entrenador-personal/hero.webp` | PRO |
| 215 | La vida después de los 30 | B1 (B1) | `/la-vida-despues-de-los-30` | `/vida-despues-30/portrait.webp` | PRO |
| 205 | De eso sí hablo | B1 (B1) | `/tablero-de-eso-si-hablo` | `/catalog-thumbnails/conversation-choice.webp` | PRO |
| 206 | No es tan simple | B2 (B2) | `/tablero-no-es-tan-simple` | `/catalog-thumbnails/advanced-dialogue.webp` | PRO |
| 207 | Red Flag o No · A2 | A2 (A2) | `/red-flag-o-no-a2` | `/play-mode/red-flag-o-no/a2.webp` | PRO |
| 208 | Red Flag o No · B1 | B1 (B1) | `/red-flag-o-no-b1` | `/play-mode/red-flag-o-no/b1.webp` | PRO |
| 209 | Red Flag o No · B2 | B2 (B2) | `/red-flag-o-no-b2` | `/play-mode/red-flag-o-no/b2.webp` | PRO |
| 139 | Ciudad en juego | B1 (B1) | `/ciudad-en-juego` | `/play-mode/ciudad-en-juego.webp` | PRO |
| 138 | ¿Y ahora qué? | B1 (B1) | `/modo-play-y-ahora-que` | `/play-mode/y-ahora-que.webp` | PRO |
| 137 | Uno o el otro | B1 (B1) | `/modo-play-uno-o-el-otro` | `/play-mode/uno-o-el-otro.webp` | PRO |
| 136 | La Cámara de Presión | C2 (C2) | `/la-camara-de-presion` | `/conversation-premium/camara-presion.webp` | PRO |
| 129 | El Ministerio de las Versiones | C2 (C2) | `/el-ministerio-de-las-versiones` | `/conversation-premium/ministerio-versiones.webp` | PRO |
| 128 | La Agencia de Vidas Paralelas | C1 (C1) | `/la-agencia-de-vidas-paralelas` | `/conversation-premium/agencia-vidas-paralelas.webp` | PRO |
| 127 | El Protocolo Aurora | B2 (B2) | `/el-protocolo-aurora` | `/conversation-premium/protocolo-aurora.webp` | PRO |
| 126 | La Noche de las Siete Llamadas | B1 (B1) | `/la-noche-de-las-siete-llamadas` | `/conversation-premium/noche-siete-llamadas.webp` | PRO |
| 125 | La Mesa de las Tres Ofertas | B2 (B2) | `/la-mesa-de-las-tres-ofertas` | `/conversation-premium/mesa-tres-ofertas.webp` | PRO |
| 124 | La Sala de los Mensajes Fuera de Contexto | B2 (B2) | `/la-sala-de-los-mensajes-fuera-de-contexto` | `/conversation-premium/mensajes-fuera-de-contexto.webp` | PRO |
| 123 | En Vivo en Diez Minutos | A2 (A2) | `/en-vivo-en-diez-minutos` | `/conversation-premium/en-vivo-diez-minutos.webp` | PRO |
| 122 | El Teatro de las Coartadas | A2 (A2) | `/el-teatro-de-las-coartadas` | `/conversation-premium/teatro-coartadas.webp` | PRO |
| 121 | El Cine de las Tres Funciones | A1 (A1) | `/el-cine-de-las-tres-funciones` | `/conversation-premium/cine-tres-funciones.webp` | PRO |
| 120 | La Noche de las Invitaciones Cruzadas | A1 (A1) | `/la-noche-de-las-invitaciones-cruzadas` | `/conversation-premium/invitaciones-cruzadas.webp` | PRO |
| 109 | La isla vota | B1 (B1) | `/la-isla-vota` | `/la-isla-vota/island-command-table-v1.webp` | PRO |
| 103 | La máquina que elimina cosas del mundo · A2 | A2 (A2) | `/la-maquina-que-elimina-cosas-a2` | `/conversation-worlds/elimination-machine.webp` | PRO |
| 104 | Tu vida con una regla absurda · A2 | A2 (A2) | `/tu-vida-con-una-regla-absurda-a2` | `/conversation-worlds/absurd-universe.webp` | PRO |
| 101 | La máquina que elimina cosas del mundo | B1 (B1) | `/la-maquina-que-elimina-cosas` | `/conversation-worlds/elimination-machine.webp` | PRO |
| 102 | Tu vida con una regla absurda | B1 (B1) | `/tu-vida-con-una-regla-absurda` | `/conversation-worlds/absurd-universe.webp` | PRO |
| 39 | Buenos Aires en la Calle | A2 (A2) | `/buenos-aires-en-la-calle` | `/buenos-aires-cotidiana/city.webp` | PRO |
| 210 | MÉXICO | B1 (B1) | `/mexico` | `/catalog-thumbnails/mexico-relief.svg` | FREE |
| 36 | ESTADOS UNIDOS | A2, B1 (A2) | `/estados-unidos-a2-b1` | `/catalog-thumbnails/us-relief.webp` | FREE |
| 34 | El Monasterio de las Ideas | C2 (C2) | `/monasterio-de-las-ideas` | `/monastery-ideas-3d.webp` | PRO |
| 33 | Irlanda en Relieve | B1 (B1) | `/irlanda-en-relieve` | `/catalog-thumbnails/ireland-relief.webp` | PRO |
| 32 | Reino Unido en Relieve | A1, B1 (B1) | `/reino-unido-en-relieve` | `/catalog-thumbnails/uk-relief.webp` | PRO |
| 30 | Australia en Movimiento | A2, B1 (A2) | `/australia-en-movimiento` | `/australia-3d-hero.webp` | PRO |
| 29 | Suiza en Relieve | B1 (B1) | `/suiza-en-relieve` | `/suiza-en-relieve-hero.webp` | PRO |
| 27 | El Mundo Fantástico | A1 (A1) | `/mundo-fantastico` | `/og.png` | PRO |
| 26 | Estados Unidos · Coast to Coast | A1 (A1) | `/estados-unidos-basico` | `/usa-basic-hero.webp` | PRO |
| 25 | Israel en Capas | B1 (B1) | `/israel-en-capas` | `/israel-b1-hero.webp` | PRO |
| 24 | Indonesia Fantástica | A1 (A1) | `/indonesia-fantastica` | `/indonesia-fantasy-hero.webp` | PRO |
| 22 | La Ciudad del Futuro | B1 (B1) | `/future-city` | `/catalog-thumbnails/future-city.webp` | PRO |
| 21 | El Reino de las Preguntas Prohibidas · A2 | A2 (A2) | `/preguntas-prohibidas-a2` | `/kingdom-world-bg.webp` | PRO |
| 20 | El Reino de las Preguntas Prohibidas | B1 (B1) | `/preguntas-prohibidas` | `/kingdom-world-bg.webp` | PRO |
| 19 | Argento Roleplays | A1 (A1) | `/argento-roleplays` | `/buenos-aires-cotidiana/atlas-1.webp` | PRO |
| 17 | La Ruleta de Tu Vida | A2 (A2) | `/life-roulette` | `/catalog-thumbnails/life-wheel.webp` | PRO |
| 15 | Let’s Talk · A1 | A1 (A1) | `/a1-conversation` | `/catalog-thumbnails/conversation-a1.webp` | PRO |
| 14 | Let’s Talk · A2 | A2 (A2) | `/basic-conversation` | `/catalog-thumbnails/conversation-a2.webp` | PRO |
| 13 | Choose Your Conversation | B1 (B1) | `/choose-conversation` | `/catalog-thumbnails/conversation-choice.webp` | PRO |
| 11 | Preguntas que dan ganas de hablar | C1 (C1) | `/advanced-conversation` | `/catalog-thumbnails/advanced-dialogue.webp` | PRO |
| 203 | El museo de las decisiones | C2 (C2) | `/clase/203` | `/monastery-worlds/03-biblioteca.webp` | PRO |

## 3. Total conceptual families

| Measure | Count |
| --- | --- |
| Conceptual families | 42 |
| Multi-level families | 8 |
| Single-level seeds | 34 |
| Seed recommendations A | 25 |
| Standalone recommendations C | 9 |
| Active orphan merge recommendations B | 0 |
| FREE families / records / variants | 2 / 2 / 3 |
| PRO families / records / variants | 40 / 47 / 49 |

Collections retain the current source taxonomy, including twelve separate Países families. `native:/…` in the manifest is a generated source reference; it does not mean a level dispatcher exists inside the page.

## 4. Level coverage

| CEFR | Existing variants | Absent family-level cells | Route default records |
| --- | --- | --- | --- |
| A1 | 8 | 34 | 7 |
| A2 | 11 | 31 | 11 |
| B1 | 22 | 20 | 20 |
| B2 | 5 | 37 | 5 |
| C1 | 2 | 40 | 2 |
| C2 | 4 | 38 | 4 |

Existing variants total 52; route default records total 49; absent cells total 200 = 42 × 6 − 52.

## 5. Complete family matrix

**E = EXISTS; M = MISSING.** Missing always means no current separate experience at that level. It is not a production instruction. Order follows production priority, not the alphabet.

| Family / familyId | IDs | A1 | A2 | B1 | B2 | C1 | C2 | Absent | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Red Flag o No / `red-flag-o-no` | 207, 208, 209 | M | E | E | E | M | M | 3 | existing-multilevel |
| Let’s Talk / `lets-talk` | 15, 14, 13 | E | E | E | M | M | M | 3 | existing-multilevel |
| La máquina que elimina cosas del mundo / `la-maquina-que-elimina-cosas` | 101, 103 | M | E | E | M | M | M | 4 | existing-multilevel |
| Tu vida con una regla absurda / `tu-vida-con-una-regla-absurda` | 102, 104 | M | E | E | M | M | M | 4 | existing-multilevel |
| Reino Unido en Relieve / `reino-unido-en-relieve` | 32 | E | M | E | M | M | M | 4 | existing-multilevel |
| Australia en Movimiento / `australia-en-movimiento` | 30 | M | E | E | M | M | M | 4 | existing-multilevel |
| ESTADOS UNIDOS / `estados-unidos-a2-b1` | 36 | M | E | E | M | M | M | 4 | existing-multilevel |
| El Reino de las Preguntas Prohibidas / `preguntas-prohibidas` | 20, 21 | M | E | E | M | M | M | 4 | existing-multilevel |
| La ciudad no duerme / `la-ciudad-no-duerme` | 221 | M | M | E | M | M | M | 5 | A |
| La vida después de los 30 / `la-vida-despues-de-los-30` | 215 | M | M | E | M | M | M | 5 | A |
| La Ruleta de Tu Vida / `life-roulette` | 17 | M | E | M | M | M | M | 5 | A |
| La Noche de las Invitaciones Cruzadas / `la-noche-de-las-invitaciones-cruzadas` | 120 | E | M | M | M | M | M | 5 | A |
| MÉXICO / `mexico` | 210 | M | M | E | M | M | M | 5 | A |
| Irlanda en Relieve / `irlanda-en-relieve` | 33 | M | M | E | M | M | M | 5 | A |
| Suiza en Relieve / `suiza-en-relieve` | 29 | M | M | E | M | M | M | 5 | A |
| Israel en Capas / `israel-en-capas` | 25 | M | M | E | M | M | M | 5 | A |
| Buenos Aires en la Calle / `buenos-aires-en-la-calle` | 39 | M | E | M | M | M | M | 5 | A |
| Argento Roleplays / `argento-roleplays` | 19 | E | M | M | M | M | M | 5 | A |
| El Mundo Fantástico / `mundo-fantastico` | 27 | E | M | M | M | M | M | 5 | A |
| Estados Unidos · Coast to Coast / `estados-unidos-basico` | 26 | E | M | M | M | M | M | 5 | A |
| ¿Y ahora qué? / `modo-play-y-ahora-que` | 138 | M | M | E | M | M | M | 5 | A |
| Uno o el otro / `modo-play-uno-o-el-otro` | 137 | M | M | E | M | M | M | 5 | A |
| Ciudad en juego / `ciudad-en-juego` | 139 | M | M | E | M | M | M | 5 | A |
| El Cine de las Tres Funciones / `el-cine-de-las-tres-funciones` | 121 | E | M | M | M | M | M | 5 | A |
| La Ciudad del Futuro / `future-city` | 22 | M | M | E | M | M | M | 5 | A |
| La isla vota / `la-isla-vota` | 109 | M | M | E | M | M | M | 5 | A |
| La Noche de las Siete Llamadas / `la-noche-de-las-siete-llamadas` | 126 | M | M | E | M | M | M | 5 | A |
| La Mesa de las Tres Ofertas / `la-mesa-de-las-tres-ofertas` | 125 | M | M | M | E | M | M | 5 | A |
| Indonesia Fantástica / `indonesia-fantastica` | 24 | E | M | M | M | M | M | 5 | A |
| De eso sí hablo / `tablero-de-eso-si-hablo` | 205 | M | M | E | M | M | M | 5 | A |
| No es tan simple / `tablero-no-es-tan-simple` | 206 | M | M | M | E | M | M | 5 | A |
| En Vivo en Diez Minutos / `en-vivo-en-diez-minutos` | 123 | M | E | M | M | M | M | 5 | A |
| El Teatro de las Coartadas / `el-teatro-de-las-coartadas` | 122 | M | E | M | M | M | M | 5 | A |
| El Ministerio de las Versiones / `el-ministerio-de-las-versiones` | 129 | M | M | M | M | M | E | 5 | C |
| La Agencia de Vidas Paralelas / `la-agencia-de-vidas-paralelas` | 128 | M | M | M | M | E | M | 5 | C |
| El Protocolo Aurora / `el-protocolo-aurora` | 127 | M | M | M | E | M | M | 5 | C |
| La Sala de los Mensajes Fuera de Contexto / `la-sala-de-los-mensajes-fuera-de-contexto` | 124 | M | M | M | E | M | M | 5 | C |
| La Cámara de Presión / `la-camara-de-presion` | 136 | M | M | M | M | M | E | 5 | C |
| El Monasterio de las Ideas / `monasterio-de-las-ideas` | 34 | M | M | M | M | M | E | 5 | C |
| El museo de las decisiones / `clase-203` | 203 | M | M | M | M | M | E | 5 | C |
| Preguntas que dan ganas de hablar / `advanced-conversation` | 11 | M | M | M | M | E | M | 5 | C |
| Entrenador personal / `entrenador-personal` | 216 | M | M | E | M | M | M | 5 | C |

### Family evidence and implementation notes

#### Red Flag o No — `red-flag-o-no`

Collection: **Modo Play**. Access: **PRO**. IDs: `207`, `208`, `209`. Canonical lesson: `/red-flag-o-no-a2`. Default: **A2**.

Canonical resource: `/resources/spanish-conversation-activity-a2-red-flag-o-no-a2`.
Legacy resource aliases: `/resources/spanish-conversation-activity-b1-red-flag-o-no-b1`, `/resources/spanish-conversation-activity-b2-red-flag-o-no-b2`.

**Visual world:** Relationship signal game with red/green buttons, one large situation card, warm-up and final signal map. Three existing hero thumbnails/accent shades retain the same relationship world.

**Interaction:** Choose red or green, justify, optionally reveal a follow-up; 18 situations in three six-card phases plus final top-three/limits reflection.

**Level behavior:** Existing ConversationFamily wrapper accepts supported ?level values, preserves other query parameters/hash, falls back to route-specific historical default for unsupported values and keys activity state by selected level. Shared evidence: app/conversation-families/ConversationFamily.tsx:9–36; navigation.ts:4–5,35–38.

**Current thumbnails:** `/play-mode/red-flag-o-no/a2.webp`, `/play-mode/red-flag-o-no/b1.webp`, `/play-mode/red-flag-o-no/b2.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 207 | Broadly plausible. Concrete dating habits and short opinions/reasons; optional conditional/past follow-ups may need support. |
| B1 | 208 | Broadly plausible. Explain inconsistent conduct, reconsider context and propose boundaries or second chances. |
| B2 | 209 | Broadly plausible. Interpret ambiguity, distinguish privacy/secrecy and intention/impact, defend provisional judgments. |

**Content evidence:** A2: 18 everyday relationship situations + 8 short follow-ups + warm-up.; B1: 18 different context/boundary situations + 8 different follow-ups + warm-up.; B2: 18 ambiguous intention/impact/privacy situations + 8 nuanced follow-ups + warm-up.; shared: Four finale prompts are shared across all three; these are real distinct banks, not badge-only variants..

**Absent levels:** A1, C1, C2. Priority order: A1, C1, C2.

**Decision:** existing-multilevel. Retain; expand this same mechanic only with genuinely authored missing banks. Existing banks share the same central concept, world and renderer.

**Reuse / shared component:** Reuse RedFlagGame + engine.mjs. Move level configuration into typed content modules when extending; add level-specific scaffolds, teacher guidance and finales. No new visual engine required.

**Effort/assets:** low relative implementation complexity. Preserve existing A2/B1/B2 assets. Any new A1/C1/C2 bank needs a new composition or crop consistent with the same red/green relationship world. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Distinct question banks verified, but current finale is shared and no six-level family exists.

**Evidence:** `app/red-flag-o-no/engine.mjs`:1–122; `app/red-flag-o-no/RedFlagGame.tsx`:26–32,86–185; `app/red-flag-o-no-a2/page.tsx`:9; `app/red-flag-o-no-b1/page.tsx`:9; `app/red-flag-o-no-b2/page.tsx`:9.

#### Let’s Talk — `lets-talk`

Collection: **Universos**. Access: **PRO**. IDs: `15`, `14`, `13`. Canonical lesson: `/a1-conversation`. Default: **A1**.

Canonical resource: `/resources/spanish-conversation-activity-a1-lets-talk-a1`.
Legacy resource aliases: `/resources/spanish-conversation-activity-a2-lets-talk-a2`, `/resources/spanish-conversation-activity-b1-choose-your-conversation`.

**Visual world:** 15 colorful emoji topic worlds in a common card grid; topic screen lets learner select three questions for a personal conversation board.

**Interaction:** Select one topic, choose exactly three questions, then display them for open conversation; level-specific closing and teacher note.

**Level behavior:** Existing ConversationFamily wrapper accepts supported ?level values, preserves other query parameters/hash, falls back to route-specific historical default for unsupported values and keys activity state by selected level. Shared evidence: app/conversation-families/ConversationFamily.tsx:9–36; navigation.ts:4–5,35–38.

**Current thumbnails:** `/catalog-thumbnails/conversation-a1.webp`, `/catalog-thumbnails/conversation-a2.webp`, `/catalog-thumbnails/conversation-choice.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A1 | 15 | Broadly plausible with support gap. Short present-tense personal preferences/routines permit simple answers. Abstract values/culture prompts need teacher simplification; current UI does not supply the advertised bilingual questions or phrase frames. |
| A2 | 14 | Broadly plausible. Specific everyday requests, problems, plans, short experience reports and comparisons. |
| B1 | 13 | Mixed B1/B2 stretch, not an automatic relabel. Personal experiences/preferences are B1; several broad social/psychological questions invite abstract arguments. Choose-three format allows accessible selection, but narrative supports would strengthen B1. |

**Content evidence:** A1: 150 authored prompts: 15×10, a1-data.ts.; A2: 90 authored prompts: 15×6, variants.ts (not 150).; B1: 150 authored prompts: 15×10, original data.ts.; distinctness: A1/A2/B1 are genuine different question banks, sharing world titles/colors/emoji and choose-three mechanic..

**Absent levels:** B2, C1, C2. Priority order: B2, C1, C2.

**Decision:** existing-multilevel. Retain A1/A2/B1 grouping: identical topic navigation, same 15-world structure and choose-three interaction establish relationship beyond titles. Existing banks share the same central concept, world and renderer.

**Reuse / shared component:** Retain ChooseConversation renderer and talkVariants; add per-level support content and genuine task banks, not new pages. No new shared engine.

**Effort/assets:** low relative implementation complexity. Current three distinct catalog thumbnails can become coherent level views of same colorful topic board. Preserve one recognizable family card. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- A2 preview says 150 bilingual questions, but actual bank has 90 Spanish-only questions.
- A1 150 count is accurate; bilingual claim is not supported by current shared renderer.

**Evidence:** `app/choose-conversation/page.tsx`:12–28; `app/choose-conversation/variants.ts`:5–27; `app/choose-conversation/a1-data.ts`:1–17; `app/choose-conversation/data.ts`:1–18; `app/a1-conversation/page.tsx`:1–5; `app/basic-conversation/page.tsx`:1–5.

#### La máquina que elimina cosas del mundo — `la-maquina-que-elimina-cosas`

Collection: **Universos**. Access: **PRO**. IDs: `101`, `103`. Canonical lesson: `/la-maquina-que-elimina-cosas`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-la-maquina-que-elimina-cosas-del-mundo`.
Legacy resource aliases: `/resources/spanish-conversation-activity-a2-la-maquina-que-elimina-cosas-del-mundo-a2`.

**Visual world:** Titanium elimination machine surrounds a floating planet in a glass chamber; same illustrated panorama across levels.

**Interaction:** 30 yes/no elimination decisions: choose first, discuss a central question, reveal fictional consequence, retain or reverse decision; progress saved.

**Level behavior:** Existing ConversationFamily wrapper accepts supported ?level values, preserves other query parameters/hash, falls back to route-specific historical default for unsupported values and keys activity state by selected level. Shared evidence: app/conversation-families/ConversationFamily.tsx:9–36; navigation.ts:4–5,35–38.

**Current thumbnails:** `/conversation-worlds/elimination-machine.webp`; shared-across-existing-levels.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 103 | Broadly plausible. Concrete objects/habits and simple preferences/reasons with English and phrase support. |
| B1 | 101 | Plausible with stretch pockets. Explaining choices and consequences fits B1. Rights, inheritance and power prompts can require B2 discussion; use concrete examples rather than treating every abstract response as mandatory. |

**Content evidence:** A2: 30 original everyday elimination decisions with starters, vocabulary and optional English question support.; B1: 30 choices including social rules and human emotions, different questions/consequences, vocabulary/starters..

**Absent levels:** A1, B2, C1, C2. Priority order: B2, A1, C1, C2.

**Decision:** existing-multilevel. Retain as elimination/reconsideration family; do not merge with absurd-rules solely because renderer is shared. Existing banks share the same central concept, world and renderer.

**Reuse / shared component:** Reuse protected ConversationWorldFamily and shared prop-driven ConversationWorld. Keep machine and rules as separate concepts despite shared renderer. Extend typed banks/closings and explicit family+level storage keys; current A2/B1 keys are separate but implicit B1 naming does not scale safely.

**Effort/assets:** low relative implementation complexity. Existing shared machine image is sufficient as family identity; optional cue/label variation only. No per-level world redraw needed. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

**Evidence:** `app/conversation-worlds/ConversationWorldFamily.tsx`:4–18; `app/conversation-worlds/data-a2.ts`:4–36; `app/conversation-worlds/data.ts`:12–42; `app/conversation-worlds/ConversationWorld.tsx`:19–53,61–105; `app/la-maquina-que-elimina-cosas/page.tsx`:1–4; `app/la-maquina-que-elimina-cosas-a2/page.tsx`:1–4.

#### Tu vida con una regla absurda — `tu-vida-con-una-regla-absurda`

Collection: **Universos**. Access: **PRO**. IDs: `102`, `104`. Canonical lesson: `/tu-vida-con-una-regla-absurda`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-tu-vida-con-una-regla-absurda`.
Legacy resource aliases: `/resources/spanish-conversation-activity-a2-tu-vida-con-una-regla-absurda-a2`.

**Visual world:** Impossible city of inverted buildings and floating tram under violet sky, shared across A2/B1.

**Interaction:** 15 impossible laws; scene and three questions revealed one at a time. Track discussed rules; no binary eliminate/reconsider loop.

**Level behavior:** Existing ConversationFamily wrapper accepts supported ?level values, preserves other query parameters/hash, falls back to route-specific historical default for unsupported values and keys activity state by selected level. Shared evidence: app/conversation-families/ConversationFamily.tsx:9–36; navigation.ts:4–5,35–38.

**Current thumbnails:** `/conversation-worlds/absurd-universe.webp`; shared-across-existing-levels.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 104 | Broadly plausible. Describe routine actions and preferences inside a supplied imaginary setting; bilingual scaffolding supports premise. |
| B1 | 102 | Broadly plausible with stretch. Explain how a rule changes a day and compare effects on people. Justice/commodification questions stretch toward B2 but do not invalidate the whole bank. |

**Content evidence:** A2: 15 rules/45 authored questions; concrete food, clothes, gifts, internet, neighbours and travel; English support.; B1: 15 rules/45 different questions exploring personal and social consequences, exceptions and trade-offs..

**Absent levels:** A1, B2, C1, C2. Priority order: B2, A1, C1, C2.

**Decision:** existing-multilevel. Retain its altered-law concept; do not fold into elimination machine. Existing banks share the same central concept, world and renderer.

**Reuse / shared component:** Reuse same protected family host and prop-driven world renderer; author separate rule banks, support and closings. Explicit level storage keys needed when expanding. No new scene engine.

**Effort/assets:** low relative implementation complexity. Retain absurd city as family image; only focus cues/badges need vary across levels. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

**Evidence:** `app/conversation-worlds/ConversationWorldFamily.tsx`:12–18; `app/conversation-worlds/data-a2.ts`:38–55; `app/conversation-worlds/data.ts`:44–60; `app/conversation-worlds/ConversationWorld.tsx`:19–41,80–105; `app/tu-vida-con-una-regla-absurda/page.tsx`:1–4; `app/tu-vida-con-una-regla-absurda-a2/page.tsx`:1–4.

#### Reino Unido en Relieve — `reino-unido-en-relieve`

Collection: **Países**. Access: **PRO**. IDs: `32`. Canonical lesson: `/reino-unido-en-relieve`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-a1-b1-reino-unido-en-relieve`.
Legacy resource aliases: `/resources/spanish-conversation-activity-a2-b1-reino-unido-en-relieve`.

**Visual world:** UK real-border layered relief map across twelve ITL1 areas, with four local stops each and nation filtering.

**Interaction:** Area/place exploration and stance/chunk builder; selected level changes questions, place contexts/prompts, facts, vocabulary, supports and closing.

**Level behavior:** ConversationFamily selector reads exact supported ?level; unsupported/missing falls back to B1; pushState preserves other params/hash, back/forward supported; keyed engine resets disposable state.

**Current thumbnails:** `/catalog-thumbnails/uk-relief.webp`; shared-across-existing-levels.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A1 | 32 | Broadly plausible and clearly differentiated.. Concrete location, likes, short choice and simple travel questions plus dedicated A1 stances/connectors/context/wordbank. |
| B1 | 32 | Broadly plausible mixed-demand bank.. 96 original main discussions plus 48 former A2 practical prompts and 48 B1 place questions. Short practical tasks can serve as warmup; urban identity/language-policy discussions stretch B1 but do not prove a separate B2 bank. |

**Content evidence:** A1MainPrompts: 96; A1PlacePrompts: 48; B1MainPrompts: 144; B1MainComposition: 96 original discussion questions + 48 preserved former A2 practical questions; B1PlacePrompts: 48.

**Absent levels:** A2, B2, C1, C2. Priority order: A2, B2, C1, C2.

**Decision:** existing-multilevel. Extend current family to six independently authored levels. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** No new visual engine. Extend UKLevel/variants contract to six with authored banks; abstract repeated relief-atlas primitives only if beneficial to Ireland/Switzerland, preserving the UK experience.

**Effort/assets:** high relative implementation complexity. A1/B1 currently use identical catalog thumbnail. Use same map silhouette with different stop emphasis/task cue and level, not unrelated styles. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- ?level=A2 falls back to B1; A2 is preserved content, not selectable. Do not resurrect A2 as a badge over these same tasks.
- A1 core 96 + places 48 = 144 prompt opportunities; B1 core 144 + places 48 = 192.

**Evidence:** `app/reino-unido-en-relieve/page.tsx`:58–94; `app/reino-unido-en-relieve/page.tsx`:149–178; `app/reino-unido-en-relieve/variants.ts`:5–44; `app/reino-unido-en-relieve/a1.ts`:7–20; `app/reino-unido-en-relieve/a1.ts`:69–86; `docs/conversation-family-migration.md`:3–5.

#### Australia en Movimiento — `australia-en-movimiento`

Collection: **Países**. Access: **PRO**. IDs: `30`. Canonical lesson: `/australia-en-movimiento`. Default: **A2**.

Canonical resource: `/resources/spanish-conversation-activity-a2-b1-australia-en-movimiento`.

**Visual world:** Stylized layered Australia atlas with eight state/territory areas, illustrated character sheet and question-specific motion classes.

**Interaction:** Select territory/real-place route; answer with quick choices, connectors and bilingual wordbank; hear/build response and expand with speaking moves.

**Level behavior:** ConversationFamily selector reads exact supported ?level; unsupported/missing falls back to A2; pushState preserves other params/hash, back/forward supported; keyed engine resets disposable state.

**Current thumbnails:** `/australia-3d-hero.webp`; shared-across-existing-levels.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 30 | Broadly plausible.. Practical constrained choices, travel plans, needs and simple reasons with explicit quick options. |
| B1 | 30 | Broadly plausible with accessible policy/culture stretches.. Sixteen separate questions compare tourism consequences, housing/preservation or environmental fairness and explain a position; support allows straightforward B1 reasoning. |

**Content evidence:** territories: 8; A2Prompts: 32; B1Prompts: 16; perTerritory: 4 A2 + 2 B1 authored questions; question-specific place and animation.

**Absent levels:** A1, B2, C1, C2. Priority order: A1, B2, C1, C2.

**Decision:** existing-multilevel. Extend current family to six independently authored levels. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extend question/variant schema for six levels and distinct support/mission/closing; reuse atlas/character assets and motion system. No new visual engine necessary.

**Effort/assets:** medium relative implementation complexity. Keep Australia character/map art; choose different region character/action and task cue per level. A2/B1 currently share thumbnail. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Counts verified from source: 32 q(A2) and 16 q(B1). Hero and character sheet assets exist.

**Evidence:** `app/australia-en-movimiento/data.ts`:1–23; `app/australia-en-movimiento/data.ts`:26–53; `app/australia-en-movimiento/page.tsx`:37–65; `app/australia-en-movimiento/page.tsx`:120–152.

#### ESTADOS UNIDOS — `estados-unidos-a2-b1`

Collection: **Países**. Access: **FREE**. IDs: `36`. Canonical lesson: `/estados-unidos-a2-b1`. Default: **A2**.

Canonical resource: `/resources/spanish-conversation-activity-a2-b1-estados-unidos`.

**Visual world:** 50-state real-border relief atlas with Alaska/Hawaii insets, Americana sprite scenes, guide character and local-place photographs.

**Interaction:** Choose/filter/search state, choose one of four places, answer A2 core or B1 extension with stance/chunk builder; six decision modes and closing discussion.

**Level behavior:** ConversationFamily selector reads exact supported ?level; unsupported/missing falls back to A2; pushState preserves other params/hash, back/forward supported; keyed engine resets disposable state.

**Current thumbnails:** `/catalog-thumbnails/us-relief.webp`; shared-across-existing-levels.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 36 | Broadly plausible.. Five prompts per state support preferences, short planning, typical routines and simple comparisons. Shared opposite-position extra move can exceed the core but does not turn the track into B2. |
| B1 | 36 | Communicatively plausible but pedagogical differentiation is thin.. Compare visitor/resident interests and propose a balance is supported B1; exactly the same abstract tourism/local-life question is substituted across all 50 states. Geographic count alone is not evidence of 50 distinct B1 tasks or a rich 45-minute progression. |

**Content evidence:** A2MainPromptInstances: 250; B1MainPromptInstances: 50; localStops: 200; generation: 5 A2 templates and 1 B1 template populated across 50 states; common supports/modes..

**Absent levels:** A1, B2, C1, C2. Priority order: A1, B2, C1, C2.

**Decision:** existing-multilevel. Extend current family to six independently authored levels. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Current engine already supports selection. Parameterize level-specific supports, mode prompts, mission and content selection beyond hardcoded A2/B1. Expand B1 uniqueness before treating the geographic count as depth; do not copy JSX.

**Effort/assets:** high relative implementation complexity. Retain USA atlas world across levels, vary highlighted states/scene composition and communicative cue. Keep visual/access distinction from paid Coast to Coast. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Both local atlas sheets, guide and saxophone assets exist. Wikimedia photos are fetched at runtime; availability not browser-verified.
- USA paid A1 and free atlas intentionally separate per authoring guide. Do not merge access levels.
- No hidden selectable A1/B2/C1/C2 detected; orphan USA banks are described under Coast to Coast and relatedness.
- app/estados-unidos-a2-b1/data.ts is an unreferenced older 20-stop bank structurally derived from Coast to Coast, not the live 50-state atlas.
- app/estados-unidos-en-contraste/data.ts plus map-data.ts has no page.tsx or imports found; authored but unreachable.

**Evidence:** `app/estados-unidos-a2-b1/page.tsx`:2–11; `app/estados-unidos-a2-b1/page.tsx`:71–99; `app/estados-unidos-a2-b1/state-data.ts`:72–95; `app/estados-unidos-a2-b1/mode-panel.tsx`:10–28; `app/estados-unidos-a2-b1/visuals.ts`:11–28.

#### El Reino de las Preguntas Prohibidas — `preguntas-prohibidas`

Collection: **Universos**. Access: **PRO**. IDs: `20`, `21`. Canonical lesson: `/preguntas-prohibidas`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-el-reino-de-las-preguntas-prohibidas`.
Legacy resource aliases: `/resources/spanish-conversation-activity-a2-el-reino-de-las-preguntas-prohibidas-a2`.

**Visual world:** Fantasy kingdom/castle doors as a map of taboo conversation topics, plus power-ups, forbidden blocks, boss and feedback.

**Interaction:** Choose one of 14 worlds, answer four questions; open six challenge blocks; draw bilingual support phrases; complete final boss and self/teacher feedback.

**Level behavior:** Existing ConversationFamily wrapper accepts supported ?level values, preserves other query parameters/hash, falls back to route-specific historical default for unsupported values and keys activity state by selected level. Shared evidence: app/conversation-families/ConversationFamily.tsx:9–36; navigation.ts:4–5,35–38.

**Current thumbnails:** `/kingdom-world-bg.webp`; shared-across-existing-levels.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 21 | Plausible supported A2 with abstract-topic caution. Many short personal yes/no/preference exchanges are A2. Human-rights definitions, morality and AI friendship are less concrete; teachers need selected prompts and vocabulary support. |
| B1 | 20 | Obvious upward demand mismatch. Sustained abstract moral/identity arguments, metaphors, counterarguments and diplomatic/elegant register dominate the bank. Challenges ask emotion versus ethics, difficult stances without cruelty, and elegant brutal honesty. Broadly B2/C1 demand, not merely a few B1 stretch prompts. |

**Content evidence:** A2: 14×4 simpler questions, six simpler challenge blocks, eight bilingual power-ups, support/feedback and simpler boss/closing.; B1: Different 14×4 abstract topic questions, six advanced challenge blocks, counterargument/nuance power-ups and abstract boss..

**Absent levels:** A1, B2, C1, C2. Priority order: B2, C1, A1, C2.

**Decision:** existing-multilevel. Retain world grouping, prioritize B1 demand repair before expansion. Existing banks share the same central concept, world and renderer.

**Reuse / shared component:** Shared KingdomExperience already dispatches separate A2/B1 data. Keep castle assets and mechanics, extract supported variant type plus teacher notes. A1 needs substantially more concrete question worlds/support; advanced bank is useful material for B2/C1 after review.

**Effort/assets:** medium relative implementation complexity. One castle identity; selected door/topic cues can differ. No need to invent different kingdoms for each CEFR level. Resolve the documented CEFR-demand flag before adaptation; preserve current original.

- Current B1 label materially understates central task demand.
- Bilingual topic descriptions/support do not make every question linguistically simple.

**Evidence:** `app/preguntas-prohibidas-a2/variants.ts`:1–6; `app/preguntas-prohibidas-a2/page.tsx`:19–24,39–114; `app/preguntas-prohibidas/data.ts`:6–39; `app/preguntas-prohibidas-a2/data.ts`:5–50; `app/preguntas-prohibidas/page.tsx`:1–2.

#### La ciudad no duerme — `la-ciudad-no-duerme`

Collection: **Modo Play**. Access: **PRO**. IDs: `221`. Canonical lesson: `/la-ciudad-no-duerme`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-la-ciudad-no-duerme`.

**Visual world:** Side-scrolling Barrio del Sur at night, mascot avatar, ten photographed/illustrated encounter scenes, choice of rooftop or bar ending.

**Interaction:** Walk or select map stop; make a local choice; discuss reaction, follow-up and optional twist; revisit/choose another route; finish with neighbourhood reflection.

**Level behavior:** Only B1 appears in ConversationFamily; supported ?level=B1 or unsupported-query fallback both display B1. Children ignore selected level, appropriate only while singleton.

**Current thumbnails:** `/la-ciudad-no-duerme/preview.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 221 | Broadly plausible. Explain impressions, recount a trip or encounter, compare options and give practical advice with starter phrases and teacher follow-ups. |

**Content evidence:** B1: One authored JSON bank of ten stops, each with first situation and optional twist, branching questions, teacher follow-ups, common help and endings..

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Seed its own six-level family. Concrete navigable neighbourhood scales from A1 supported local exchanges to advanced interpretations/urban perspectives. Do not merge with Ciudad en juego: exploration and encounter narrative differ from governance simulation/metrics.

**Reuse / shared component:** Reuse CityGame motion/camera and CityDialogue components. Extract geometry/assets from level-specific stop dialogue; pass variant into CityExperience, CityDialogue and CityGuide (currently content imports are shared singletons). Add keyed state when additional levels arrive. No new shared city engine required.

**Effort/assets:** medium relative implementation complexity. Keep recognizable night street and mascot; use optional different encounter/focal crop per level, preserving same city. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

**Evidence:** `app/la-ciudad-no-duerme/CityGame.tsx`:5–44,54–79,96–144; `app/la-ciudad-no-duerme/CityDialogue.tsx`:6–69; `app/la-ciudad-no-duerme/content.json`:1–33.

#### La vida después de los 30 — `la-vida-despues-de-los-30`

Collection: **Exploración visual**. Access: **PRO**. IDs: `215`. Canonical lesson: `/la-vida-despues-de-los-30`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-la-vida-despues-de-los-30`.

**Visual world:** Full-body adult portrait functions as an anatomical life-topic map; camera zooms to body/face/hand; five subzone question pins in each of ten areas.

**Interaction:** Select body zone, zoom, open one of five questions, mark conversed; save progress, navigate zones, close with past/future reflection.

**Level behavior:** Native single-bank route has no CEFR selector or query-level bank dispatch. A query such as ?level=C2 does not author or load C2 content; catalog-only level metadata is not an additional variant.

**Current thumbnails:** `/vida-despues-30/portrait.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 215 | Broadly plausible. Compare life stages, describe experiences and priorities, give reasons and discuss plans; social pressure/identity prompts may stretch but remain personally anchored. |

**Content evidence:** B1: 50 authored questions across ten life domains, plus help/teacher closing; all embedded in one HTML document string.; persistence: Local storage key spanishcue-vida-30-b1-v1 already includes B1..

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Seed its own six-level visual-exploration family. Stable body-map metaphor and adult-life topics can support concrete A1 routines through nuanced C1/C2 life narratives. Adult topic eligibility is separate from language level. No matching existing engine/concept justifies merging.

**Reuse / shared component:** Reuse camera/pin/modal design and images, but activity-document.ts line 2 contains entire HTML/CSS/JS/questions. Extract pedagogical arrays, support/closings and progress key into a configurable document or component before adding levels; do not copy whole HTML string five times.

**Effort/assets:** high relative implementation complexity. Same body-map silhouette should anchor all levels; optional focus-area crop/marker differs by level. No new anatomical map required. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Source is a one-line embedded document; line 2 is exact evidence location, not a fabricated expanded range.

**Evidence:** `app/la-vida-despues-de-los-30/LifeAfterThirty.tsx`:3–17; `app/la-vida-despues-de-los-30/activity-document.ts`:2; `app/la-vida-despues-de-los-30/page.tsx`:1–11.

#### La Ruleta de Tu Vida — `life-roulette`

Collection: **Universos**. Access: **PRO**. IDs: `17`. Canonical lesson: `/life-roulette`. Default: **A2**.

Canonical resource: `/resources/spanish-conversation-activity-a2-la-ruleta-de-tu-vida`.

**Visual world:** Large interactive 3D-styled 18-sector life-topic wheel with emoji/color sectors, confetti result and bilingual topic/support screens.

**Interaction:** Spin or select unused topic without repeats; answer three varied questions with bilingual starters/words/slang; special Argentine challenge sector; track used topics.

**Level behavior:** Native single-bank route has no CEFR selector or query-level bank dispatch. A query such as ?level=C2 does not author or load C2 content; catalog-only level metadata is not an additional variant.

**Current thumbnails:** `/catalog-thumbnails/life-wheel.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 17 | Broadly plausible. Everyday routines/preferences, simple explanations, short past experiences and future plans, supported with question translations, vocabulary and starter phrases. Slang is optional enrichment rather than CEFR proof. |

**Content evidence:** A2: 17 ordinary topics ×3 bilingual questions=51, plus separate Argentine slang challenge; no other authored level..

**Absent levels:** A1, B1, B2, C1, C2. Priority order: A1, B1, B2, C1, C2.

**Decision:** A. Seed its own six-level roulette family. Stable chance/non-repeat topic mechanic scales to richer communicative tasks; no strong existing family match beyond generic conversation topics.

**Reuse / shared component:** Reuse wheel/topic UI and data schema; make topics/slang/closing/teacher guidance explicit variant props, add ConversationFamily and keyed state. Do not merge into Let’s Talk: non-repeat chance-based wheel, bilingual scaffold panels and Argentine challenge are materially different mechanics.

**Effort/assets:** low relative implementation complexity. Keep wheel as family identity; sector focus/color accent may vary by level, wheel scene should stay recognizable. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

**Evidence:** `app/life-roulette/page.tsx`:18–31,63–118,121–139; `app/life-roulette/data.ts`:1–39.

#### La Noche de las Invitaciones Cruzadas — `la-noche-de-las-invitaciones-cruzadas`

Collection: **Universos**. Access: **PRO**. IDs: `120`. Canonical lesson: `/la-noche-de-las-invitaciones-cruzadas`. Default: **A1**.

Canonical resource: `/resources/spanish-conversation-activity-a1-la-noche-de-las-invitaciones-cruzadas`.

**Visual world:** Navy/gold gala with colored symbol invitations, identity card, hidden guests and round-table seats.

**Interaction:** Introduce yourself, interview four guests, match misplaced invitations, choose two table companions and close conversations.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/invitaciones-cruzadas.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A1 | 120 | broadly plausible. A1 identity, location, job/language/likes and formulaic greetings/repair dominate. Simple because reasons and follow-ups are supported; no obvious mismatch. |

**Absent levels:** A2, B1, B2, C1, C2. Priority order: A2, B1, B2, C1, C2.

**Decision:** A. Strong six-level social-encounter seed: retain invitation matching and table encounters while increasing relationship/interaction complexity. Seed a new six-level family using this existing singleton concept

**Reuse / shared component:** Extract Guest and stage-specific content/support banks. Reuse invitation matching and seating engine; advanced levels need richer guest intention/context records and teacher roles, not longer biographies alone.

**Effort/assets:** medium relative implementation complexity. Retain symbols/invitation/table motif; vary guests, encounter purpose and task cue by level. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

**Evidence:** `app/la-noche-de-las-invitaciones-cruzadas/page.tsx`:7–41; `app/la-noche-de-las-invitaciones-cruzadas/page.tsx`:59–78; `app/la-noche-de-las-invitaciones-cruzadas/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53.

#### MÉXICO — `mexico`

Collection: **Países**. Access: **FREE**. IDs: `210`. Canonical lesson: `/mexico`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-mexico`.

**Visual world:** Custom vector Mexico map with 32 state/entity shapes, regional colors and entity previews.

**Interaction:** Map/search/filter/random → five question cards with common followups; six modes include either/or, relocation, country comparison and ideal-Mexico choices.

**Level behavior:** Native singleton has no ConversationFamily selector and does not read ?level; any level query renders the same hardcoded B1 seed. Catalog level-aware links do not add runtime variants.

**Current thumbnails:** `/catalog-thumbnails/mexico-relief.svg`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 210 | Broadly plausible.. Describe an imagined routine, compare known places, recommend and justify choices with personal examples. Conditional grammar appears but communicative demand remains supported B1. |

**Content evidence:** entities: 32; mainPromptInstances: 160; distinctGeneration: One personal item rotates through 8 templates plus 4 common templates populated with local facts; 3 shared followups..

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extract level-aware Mexico experience and data variants; reuse map, region filter, modes and local facts. Higher levels require genuinely different tasks/followups, not more substitutions.

**Effort/assets:** medium relative implementation complexity. Existing Mexico relief SVG is a distinct country identity. Add level-specific map highlight/crop and task cue; no six unrelated illustrations needed. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- 160 is a count of rendered prompt instances, not 160 independently written communicative tasks. Free access must remain.

**Evidence:** `app/mexico/page.tsx`:3–7; `app/mexico/page.tsx`:20–90; `app/mexico/page.tsx`:90–133; `app/mexico/data.ts`:68–112.

#### Irlanda en Relieve — `irlanda-en-relieve`

Collection: **Países**. Access: **PRO**. IDs: `33`. Canonical lesson: `/irlanda-en-relieve`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-irlanda-en-relieve`.

**Visual world:** Green Ireland real-border relief map, four historic provinces, 26 counties and four local stop cards per county.

**Interaction:** Explore county and local place; choose stance and build a reason/example response with bilingual chunks, six county prompts and extra depth moves.

**Level behavior:** Native singleton has no ConversationFamily selector and does not read ?level; any level query renders the same hardcoded B1 seed. Catalog level-aware links do not add runtime variants.

**Current thumbnails:** `/catalog-thumbnails/ireland-relief.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 33 | Broadly plausible for supported B1 with substantial B1+/B2 stretches.. Local comparisons, recommendations and straightforward proposals fit B1. Many identity/authenticity, housing, conservation and energy-transition prompts demand more abstraction than a simple narrative task; teacher-select/narrow them. This is not a separately authored B2 track. |

**Content evidence:** counties: 26; centralPrompts: 156; placePrompts: 104; totalPrompts: 260.

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extract a typed local relief-atlas engine or reuse/refactor UK pattern with country slots; add level-specific questions, place prompts, contexts, missions, supports and closing. New map art not necessary.

**Effort/assets:** high relative implementation complexity. Keep Irish map/green identity; vary county/stop focus and task cue per level, distinct from UK/Swiss silhouettes. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- 260 combines central and place prompts, not 260 central cards. No CEFR selector.

**Evidence:** `app/irlanda-en-relieve/page.tsx`:3–9; `app/irlanda-en-relieve/page.tsx`:56–82; `app/irlanda-en-relieve/page.tsx`:129–164; `app/irlanda-en-relieve/data.ts`:31–54; `app/irlanda-en-relieve/data.ts`:176–182; `app/irlanda-en-relieve/places.ts`:1–13.

#### Suiza en Relieve — `suiza-en-relieve`

Collection: **Países**. Access: **PRO**. IDs: `29`. Canonical lesson: `/suiza-en-relieve`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-suiza-en-relieve`.

**Visual world:** Swiss red/blue alpine real-border canton relief map with 26 cantons, four specific local place cards each and language/region filtering.

**Interaction:** Canton/place exploration → stance, reason/example prompt, tappable connectors/wordbank and oral response draft.

**Level behavior:** Native singleton has no ConversationFamily selector and does not read ?level; any level query renders the same hardcoded B1 seed. Catalog level-aware links do not add runtime variants.

**Current thumbnails:** `/suiza-en-relieve-hero.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 29 | Broadly plausible for supported B1, with recurring higher-demand prompts.. Concrete life choices, routines, recommendations and straightforward solutions fit B1. Belonging/autonomy, company responsibility or minority-language survival prompts are B1+/B2 stretch discussions; do not infer an existing B2 variant. |

**Content evidence:** cantons: 26; centralPrompts: 156; placePrompts: 104; totalPrompts: 260.

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extract relief-atlas render primitives and explicit variant props; keep canton geometry/world. Add independent level tasks/place prompts/mission/support/closing rather than cloning 163-line page.

**Effort/assets:** high relative implementation complexity. Preserve Swiss relief silhouette/alpine identity; vary canton/place focus and task cue per level. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Swiss hero asset exists. Geographic sibling of Ireland/UK does not mean duplicate lesson.

**Evidence:** `app/suiza-en-relieve/page.tsx`:3–17; `app/suiza-en-relieve/page.tsx`:125–159; `app/suiza-en-relieve/data.ts`:24–78; `app/suiza-en-relieve/data.ts`:160–165; `app/suiza-en-relieve/places.ts`:3–14.

#### Israel en Capas — `israel-en-capas`

Collection: **Países**. Access: **PRO**. IDs: `25`. Canonical lesson: `/israel-en-capas`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-israel-en-capas`.

**Visual world:** Layered Israel illustrated map with nine geographical stops and five cultural lenses, gold/teal stamps and hero landscape.

**Interaction:** Pick location/lens; seven opinion/comparison/solution questions with stance, reason/example/nuance mission and tappable response components.

**Level behavior:** Native singleton has no ConversationFamily selector and does not read ?level; any level query renders the same hardcoded B1 seed. Catalog level-aware links do not add runtime variants.

**Current thumbnails:** `/israel-b1-hero.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 25 | Material mixed-demand concern: repeated B2-like abstraction goes beyond a consistently B1 bank.. Concrete comparison and straightforward opinion can be B1, but recurring interpretation of identity, democratic space, cultural appropriation, economic equality and multi-perspective historical narration requires sustained abstract argumentation. Sentence starters support expression but do not reduce those communicative demands. Preserve original and review task-by-task, not automatic whole-family relabel. |

**Content evidence:** layers: 14; geographicStops: 9; culturalLenses: 5; prompts: 98.

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extract Israel level-prop engine and level-specific tasks/supports; keep original B1 accessible unchanged while adding genuinely reviewed variants. High-level nuanced tasks can inspire later B2/C1 without representing current availability.

**Effort/assets:** high relative implementation complexity. Keep layered map/landscape; per-level focus may shift from concrete place to cultural lens with a task cue. Avoid six unrelated country images. Resolve the documented CEFR-demand flag before adaptation; preserve current original.

- These are demanding questions within B1-labelled seed, not a separate B2/C1 bank. Local hero/mascot exist.

**Evidence:** `app/israel-en-capas/page.tsx`:3–6; `app/israel-en-capas/page.tsx`:76–88; `app/israel-en-capas/page.tsx`:127–151; `app/israel-en-capas/data.ts`:29–36; `app/israel-en-capas/data.ts`:174–195; `app/israel-en-capas/data.ts`:207–210; `app/israel-en-capas/data.ts`:238–269.

#### Buenos Aires en la Calle — `buenos-aires-en-la-calle`

Collection: **Países**. Access: **PRO**. IDs: `39`. Canonical lesson: `/buenos-aires-en-la-calle`. Default: **A2**.

Canonical resource: `/resources/spanish-conversation-activity-a2-buenos-aires-en-la-calle`.

**Visual world:** Night-blue isometric Buenos Aires city with 16 clickable scene portals, teal/amber lighting and four 2×2 scene atlases.

**Interaction:** Choose a location; bilingual words → microdialogues → supported response → open discussion → practical travel mission. Calm/full toggle changes quantity, not CEFR.

**Level behavior:** Native singleton has no ConversationFamily selector and does not read ?level; any level query renders the same hardcoded A2 seed. Catalog level-aware links do not add runtime variants.

**Current thumbnails:** `/buenos-aires-cotidiana/city.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 39 | Core broadly plausible; obvious higher-demand open-discussion sections need review.. Travel transactions, routines, needs and simple experiences are A2-compatible. Always-visible open prompts ask abstract cultural/civic evaluation, e.g. gastronomic traditions versus social/environmental change or multilingual public-service policy. These often require B1/B2 discussion unless teacher narrows the demand. |

**Content evidence:** stops: 16; corePrompts: 48; microdialogues: 48; openPrompts: 16; calm: 3 words / 1 dialogue / 1 basic prompt + open conversation per stop.

**Absent levels:** A1, B1, B2, C1, C2. Priority order: A1, B1, B2, C1, C2.

**Decision:** A. Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extract page body to a level-prop city engine; separate level-specific stop pedagogy, openPrompts and support while retaining scene IDs/atlas coordinates. No new visual engine required.

**Effort/assets:** medium relative implementation complexity. Keep city identity; per-level crops can highlight different existing portals, task cue and clear level. Existing original image stays. Resolve the documented CEFR-demand flag before adaptation; preserve current original.

- Calm mode is not an A1 variant. Full practice is not a B1 variant. All five local scene assets exist.
- Argento Roleplays shares Argentine language/travel contexts, not runtime/content imports; keep separate.

**Evidence:** `app/buenos-aires-en-la-calle/page.tsx`:14–50; `app/buenos-aires-en-la-calle/page.tsx`:75–112; `app/buenos-aires-en-la-calle/data.ts`:27–58; `app/buenos-aires-en-la-calle/data.ts`:160–275; `app/buenos-aires-en-la-calle/style.css`:7–16.

#### Argento Roleplays — `argento-roleplays`

Collection: **Países**. Access: **PRO**. IDs: `19`. Canonical lesson: `/argento-roleplays`. Default: **A1**.

Canonical resource: `/resources/spanish-conversation-activity-a1-argento-roleplays`.

**Visual world:** Bright Argentina scenario-card deck with emoji scenes, mascot truck and slang/help drawers; not a city-map UI despite map-like catalog thumbnail.

**Interaction:** Read two-character 14-line dialogue aloud, then switch to six new teacher cues and improvise with a phrase bank; help and slang drawers support repair.

**Level behavior:** Native singleton has no ConversationFamily selector and does not read ?level; any level query renders the same hardcoded A1 seed. Catalog level-aware links do not add runtime variants.

**Current thumbnails:** `/buenos-aires-cotidiana/atlas-1.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A1 | 19 | Broadly plausible with dense lexical/reading support demands.. Immediate supported transactions, introductions, choices and repair chunks are A1-compatible. Fourteen model lines do not imply fourteen independent unsupported turns. Some past-tense chunks/slang add load, but guided answer demand remains short; no obvious false A1 label solely from length. |

**Content evidence:** scenarios: 15; modelInterventions: 210; practiceCues: 90; perScenario: 14 dialogue lines + 6 new practice cues + resources.

**Absent levels:** A2, B1, B2, C1, C2. Priority order: A2, B1, B2, C1, C2.

**Decision:** A. Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extract a typed Scenario/variant contract and level-prop dialogue renderer; preserve read→turn mechanism and original A1 models. Higher levels need different role goals, constraints, misunderstandings and register/implicit meaning, not longer models only.

**Effort/assets:** medium relative implementation complexity. Catalog image uses Buenos Aires atlas-1.webp although runtime uses cards/truck. Recommend an Argento scenario/dialogue-specific preview; vary role/task/scene per level. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Read/turn modes are not CEFR levels. Local mascot and truck assets exist.
- Existing Taxi/Uber scene (data.ts 32–33) is not a standalone Taxi family.
- Buenos Aires en la Calle shares country/dialect and some travel situations, but merging would discard a distinct primary mechanic.
- Taxi/Uber is one scenario in this A1 lesson, not a separately registered Taxi family.

**Evidence:** `app/argento-roleplays/page.tsx`:3–8; `app/argento-roleplays/page.tsx`:12–34; `app/argento-roleplays/page.tsx`:39–40; `app/argento-roleplays/data.ts`:18–25; `app/argento-roleplays/data.ts`:26–43.

#### El Mundo Fantástico — `mundo-fantastico`

Collection: **Países**. Access: **PRO**. IDs: `27`. Canonical lesson: `/mundo-fantastico`. Default: **A1**.

Canonical resource: `/resources/spanish-conversation-activity-a1-el-mundo-fantastico`.

**Visual world:** Fantasy global atlas with six continents, globe/world-map silhouette, destination crests and runtime Wikimedia place/food/nature pictures.

**Interaction:** Choose destination; tiny bilingual prompts and supported followups with tappable starter/choice/wordbank answer construction and slow speech synthesis.

**Level behavior:** Native singleton has no ConversationFamily selector and does not read ?level; any level query renders the same hardcoded A1 seed. Catalog level-aware links do not add runtime variants.

**Current thumbnails:** `/og.png`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A1 | 27 | Broadly plausible.. Concrete likes, places, choices, basic travel intentions, short supported replies and optional followups. Ten question functions use four surface versions selected by destination index, not 400 unrelated authored tasks. |

**Content evidence:** destinations: 40; promptInstances: 400; perDestination: 10; generation: 10 question-function templates × 4 surface variants populated by destination; reordered by index..

**Absent levels:** A2, B1, B2, C1, C2. Priority order: A2, B1, B2, C1, C2.

**Decision:** A. Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extract typed per-level question generation/content module and a destination-world engine. Preserve image queries/credits/cache and scaffold components; higher levels need different communicative mechanics and role/constraint support, not longer prompts alone.

**Effort/assets:** high relative implementation complexity. Current catalog /og.png is generic rather than family-specific. Recommend dedicated globe/destination thumbnail and consistent level-specific focus without replacing original. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- No CEFR selector or hidden higher-level banks. world-map.svg and mascot exist; external photos not runtime verified.
- Question-surface variant integer 0–3 is not a CEFR variant.
- The Países collection contains a global atlas, not a Brazil-only lesson; no Brazil family is invented from chat history.

**Evidence:** `app/mundo-fantastico/page.tsx`:25–41; `app/mundo-fantastico/page.tsx`:43–120; `app/mundo-fantastico/page.tsx`:279–307; `app/mundo-fantastico/page.tsx`:339–375; `app/mundo-fantastico/page.tsx`:533–553.

#### Estados Unidos · Coast to Coast — `estados-unidos-basico`

Collection: **Países**. Access: **PRO**. IDs: `26`. Canonical lesson: `/estados-unidos-basico`. Default: **A1**.

Canonical resource: `/resources/spanish-conversation-activity-a1-estados-unidos-coast-to-coast`.

**Visual world:** Illustrated Coast-to-Coast road-trip map with 14 geographic destinations plus 6 everyday lenses, stamps and USA hero art.

**Interaction:** Choose stop/topic; six short questions with quick replies, starter, connectors, bilingual words, speech synthesis and a composed answer.

**Level behavior:** Native singleton has no ConversationFamily selector and does not read ?level; any level query renders the same hardcoded A1 seed. Catalog level-aware links do not add runtime variants.

**Current thumbnails:** `/usa-basic-hero.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A1 | 26 | Broadly plausible with minor A2 stretch prompts.. Core concrete preferences, routines, familiar places and supported short choices fits A1. A few past-experience questions (concert/geyser) or organizing multiple days benefit from teacher simplification but do not obviously invalidate the entire track. |

**Content evidence:** stops: 20; geographicStops: 14; topicLenses: 6; prompts: 120.

**Absent levels:** A2, B1, B2, C1, C2. Priority order: A2, B1, B2, C1, C2.

**Decision:** A. Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extract a level-prop road-trip engine. Review/adapt the orphan higher-demand bank as a possible future level, with explicit level designation and entitlement review; preserve original A1. Do not merge the paid road trip into the free 50-state atlas.

**Effort/assets:** medium relative implementation complexity. Keep USA road-trip hero and stamp identity distinct from free relief atlas; use stop/topic focus plus clear level. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Preserve PRO versus free boundary. Local hero and mascot assets exist.
- Unimported higher-demand bank is not an unadvertised selectable B1/A2 variant.
- {"orphan": "app/estados-unidos-a2-b1/data.ts", "classification": "B candidate for estados-unidos-basico ONLY after pedagogical/access review", "reason": "Explicit imports of sourceStops and UsaStop type plus same 20 stop IDs and override mapping give unusually strong family evidence. The path name alone is misleading.", "runtimeAvailability": "No live import or route found."}
- {"orphan": "app/estados-unidos-en-contraste/data.ts + map-data.ts", "classification": "C: preserve as intentionally separate archival source for now", "reason": "48 place cards/12 macroregions with three discussion questions each, different region schema and no live page/import. Geography alone cannot justify attaching it to either live USA family.", "runtimeAvailability": "Not a routed/selectable family; no CEFR should be advertised from these orphan files."}

**Evidence:** `app/estados-unidos-basico/page.tsx`:3–6; `app/estados-unidos-basico/page.tsx`:63–76; `app/estados-unidos-basico/page.tsx`:112–135; `app/estados-unidos-basico/data.ts`:9–40; `app/estados-unidos-basico/data.ts`:136–168; `app/estados-unidos-a2-b1/data.ts`:1–16; `app/estados-unidos-a2-b1/data.ts`:177–211.

#### ¿Y ahora qué? — `modo-play-y-ahora-que`

Collection: **Modo Play**. Access: **PRO**. IDs: `138`. Canonical lesson: `/modo-play-y-ahora-que`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-y-ahora-que`.

**Visual world:** Colorful Modo Play everyday-problem cards, progressive chat/message panels and story/advice views.

**Interaction:** Seven stages from rapid reaction through missing information, chat, consequences, advice, endings and boss; balanced 12-play session or free bank selection.

**Level behavior:** Native single-bank route has no CEFR selector or query-level bank dispatch. A query such as ?level=C2 does not author or load C2 content; catalog-only level metadata is not an additional variant.

**Current thumbnails:** `/play-mode/y-ahora-que.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 138 | Broadly plausible. Handle everyday mishaps, explain decisions, narrate developments and suggest alternatives. Diplomatic boundary-setting can stretch to B2, but concrete cues and selectable reactions support B1. |

**Content evidence:** B1: One bank: 40 situations plus progressive chats, consequence/missing-info subsets, advice cases, stories and boss/final prompts.; notVariants: Situation.level 1–4 is internal difficulty; seven stage NIVEL labels and session/free modes are not CEFR variants..

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Seed its own six-level everyday-problem family. Concrete decision-to-consequence/chat mechanic scales naturally. Shared shell with Uno o el otro/Ciudad en juego does not establish same pedagogic world or turn mechanics.

**Reuse / shared component:** Reuse PlayShell, cards and chat reveal components; external data is already separated. Extract embedded prompts/session sizing into level configs, pass genuine support banks to shell, wrap with ConversationFamily and reset state by level. No new cross-family engine needed.

**Effort/assets:** medium relative implementation complexity. Keep problem/chat identity; optional message focal detail per level, common composition. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Internal situation levels 1–4 and stage levels 1–7 are not authored CEFR variants.

**Evidence:** `app/modo-play-y-ahora-que/page.tsx`:15–33,151–197,291–320; `app/modo-play-y-ahora-que/data.ts`:1–39; `app/play-mode/PlayShell.tsx`:43–71.

#### Uno o el otro — `modo-play-uno-o-el-otro`

Collection: **Modo Play**. Access: **PRO**. IDs: `137`. Canonical lesson: `/modo-play-uno-o-el-otro`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-uno-o-el-otro`.

**Visual world:** Colorful two-choice cards inside Modo Play shell, progressing into three-option discard cards, rankings and an ideal-life board.

**Interaction:** Six stages: instant choice, justification, two changed conditions, keep two/discard one, rank priorities and construct/defend ideal life. Filter and shuffle 48 choices.

**Level behavior:** Native single-bank route has no CEFR selector or query-level bank dispatch. A query such as ?level=C2 does not author or load C2 content; catalog-only level metadata is not an additional variant.

**Current thumbnails:** `/play-mode/uno-o-el-otro.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 137 | Broadly plausible. Give reasons for personal choices, narrate a past choice, compare trade-offs and revise when practical details change. More elaborate ranking defense is supported B1 stretch. |

**Content evidence:** B1: 48 authored binary choices with depth 1–3; optional two-condition changes, four triple scenarios, six rankings, eight ideal-life domains.; notVariants: depth 1–3 and six stage NIVEL labels represent activity complexity, not CEFR banks..

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Seed its own six-level preference/trade-off family. Binary choice progressing to constraints/ranking is a stable concept. Generic shell reuse does not justify merging city governance or progressive everyday chats.

**Reuse / shared component:** Reuse PlayShell and choice engine. choices.ts is already external; extract triples/rankings/ideal prompts and instruction text from page into per-level configs, make support actual variant data, add family/keyed state. No new shared renderer.

**Effort/assets:** medium relative implementation complexity. Preserve binary-choice/decision board identity. Different object-pair cues optional; avoid six unrelated illustrations. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Numeric depth and six play stages are not CEFR variants.

**Evidence:** `app/modo-play-uno-o-el-otro/page.tsx`:3–39; `app/modo-play-uno-o-el-otro/choices.ts`:1–25; `app/play-mode/PlayShell.tsx`:43–71.

#### Ciudad en juego — `ciudad-en-juego`

Collection: **Modo Play**. Access: **PRO**. IDs: `139`. Canonical lesson: `/ciudad-en-juego`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-ciudad-en-juego`.

**Visual world:** Interactive city-building dashboard inside colorful Modo Play shell, five city metrics (quality, mobility, environment, equity, budget), stage-specific planning panels.

**Interaction:** Seven activity stages: binary city projects, rank priorities, solve urban problems, negotiate stakeholder interests, revise after rule change, respond to events, defend final city model.

**Level behavior:** Native single-bank route has no CEFR selector or query-level bank dispatch. A query such as ?level=C2 does not author or load C2 content; catalog-only level metadata is not an additional variant.

**Current thumbnails:** `/play-mode/ciudad-en-juego.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 139 | Material B2-leaning demand across later core stages. Whole-city policy trade-offs, constrained stakeholder negotiations, defending winners/losers and measuring public outcomes require argument/negotiation beyond routine B1 explanation. Entry choices can fit B1, but substantial later content is B2-like. |

**Content evidence:** B1: One authored 84-trigger bank spanning choices/priorities/problems/negotiations/changes/events/finale; one fixed B1 support bank.; notVariants: Seven NIVEL labels are stages, not seven CEFR levels..

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Seed its own six-level governance/city-building family. Scales from naming/choosing facilities to multiperspective policy negotiation. Shared city subject with La ciudad no duerme is insufficient to merge distinct world/mechanics.

**Reuse / shared component:** Reuse PlayShell and current city metrics/stage components. Parametrize banks, stage instructions, support and boss; content data already separate. Add family wrapper, keyed state and pass real per-level support (PlayShell currently only relabels generic supportLevel). No new visual city engine.

**Effort/assets:** medium relative implementation complexity. Retain city/dashboard identity; optional metric or district focus crop. Do not reuse La ciudad no duerme night-street thumbnail. Resolve the documented CEFR-demand flag before adaptation; preserve current original.

- Ordinal NIVEL 1–7 must not be counted as CEFR variants.
- Default B1 understates negotiation/policy demand in substantial later core stages.

**Evidence:** `app/ciudad-en-juego/page.tsx`:4–36; `app/ciudad-en-juego/data.ts`:57–114,364–387,401–445; `app/play-mode/PlayShell.tsx`:43–71.

#### El Cine de las Tres Funciones — `el-cine-de-las-tres-funciones`

Collection: **Universos**. Access: **PRO**. IDs: `121`. Canonical lesson: `/el-cine-de-las-tres-funciones`. Default: **A1**.

Canonical resource: `/resources/spanish-conversation-activity-a1-el-cine-de-las-tres-funciones`.

**Visual world:** Cream/red cinema marquee, three color-coded film posters, showtimes, lobby meeting orbit and final ticket.

**Interaction:** Choose a film, arrange a time/person/place, invite and respond, then solve a simple plan-B problem and confirm the ticket.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/cine-tres-funciones.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A1 | 121 | broadly plausible with A2 stretch. A1 concrete preferences, days/times, invitations and short supported alternatives dominate. Explaining changes and reacting to an objection stretch toward A2 but visible options/full starters keep a plausible supported A1 route. |

**Absent levels:** A2, B1, B2, C1, C2. Priority order: A2, B1, B2, C1, C2.

**Decision:** A. Six-level cinema-planning seed; each level needs different interaction and closing goals. Preserve the present concrete A1 activity. Seed a new six-level family using this existing singleton concept

**Reuse / shared component:** Extract film/showtime/guest/problem/support banks; reuse cinema-stage engine and ticket. Higher variants add reviews, programming constraints and audience/curatorial roles rather than copying A1 questions.

**Effort/assets:** medium relative implementation complexity. Keep poster/marquee identity; choose different programming dilemma and poster focus for each level, with legible level/task cue. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

**Evidence:** `app/el-cine-de-las-tres-funciones/page.tsx`:7–34; `app/el-cine-de-las-tres-funciones/page.tsx`:43–55; `app/el-cine-de-las-tres-funciones/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53.

#### La Ciudad del Futuro — `future-city`

Collection: **Universos**. Access: **PRO**. IDs: `22`. Canonical lesson: `/future-city`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-la-ciudad-del-futuro`.

**Visual world:** Twelve realistic building cards with futuristic vapor/neon/transit overlays, living balconies and district question pages.

**Interaction:** Explore districts, choose four bilingual questions each, use local vocabulary and an oral challenge; visited-map progress and random district.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/catalog-thumbnails/future-city.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 22 | upward-demand review; substantial B2 material. B1 can narrate/justify concrete city choices, but many core prompts and challenges require rights-based argument, opposed perspectives, defining abstract wealth and compensating minorities. Widespread B2 demands deserve review; English translation aids comprehension, not automatically production level. |

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Strong six-level city exploration seed. Author a concrete B1 bank or separate advanced discussion track before claiming consistent B1. Do not merge with other city concepts solely by setting. Seed a new six-level family using this existing singleton concept

**Reuse / shared component:** Content already separated as District/FutureQuestion. Parameterize district bank, labels, tools, translations and challenge instructions; retain scene keys/map/balconies. Wrap ConversationFamily and reset visited/question state per level. Need genuine level-specific tasks and closing, not only alternative question wording.

**Effort/assets:** medium relative implementation complexity. Keep 12-building city identity; preview concrete resident needs at A1/A2, planning choices at B1/B2, social/ethical trade-offs at C1/C2. Resolve the documented CEFR-demand flag before adaptation; preserve current original.

- English translations are support, not additional levels.
- 12 districts x 4 questions are topic branches, not 12 or 48 variants.

**Evidence:** `app/future-city/data.ts`:21–145; `app/future-city/data.ts`:202–246; `app/future-city/page.tsx`:8–92,111–184,195–268; `app/conversation-families/catalog.ts`:19–42,46–53.

#### La isla vota — `la-isla-vota`

Collection: **Universos**. Access: **PRO**. IDs: `109`. Canonical lesson: `/la-isla-vota`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-la-isla-vota`.

**Visual world:** Island command table/map with eight ministries, five live resource meters, role debate cards and constitution ledger.

**Interaction:** Found a society: vote through eight policy rounds, explain/argue, allocate 24 jobs and 20 budget tokens, react to pressure and record a constitution.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/la-isla-vota/island-command-table-v1.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 109 | obvious upward-demand mismatch in core tasks. Advertised B1, but recurrent political/economic/ethical argument, conditional negotiation and rights/legitimacy distinctions are closer to B2. Concrete survival choices are B1-accessible; the required governance debate across the bank is substantially more demanding. |

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Excellent six-level island-governance seed if a genuinely concrete B1 variant is authored/reviewed. Keep current content preserved as source; do not simply relabel during an audit. Seed a new six-level family using this existing singleton concept

**Reuse / shared component:** Data/renderer already separate. Add level-indexed IslandRound banks, optional governance/pressure complexity, speakingMoves, lexicon and teacher guidance. Reuse metrics/allocation/map/constitution components; parameterize initial resources and reset every session state by level.

**Effort/assets:** high relative implementation complexity. Use the island command table for continuity; low levels foreground concrete resource items, higher levels council/constitution conflicts. No merge with Aurora or city worlds. Resolve the documented CEFR-demand flag before adaptation; preserve current original.

- Duo/group switch is participation mode, not an additional CEFR variant.

**Evidence:** `app/la-isla-vota/data.ts`:98–208; `app/la-isla-vota/data.ts`:223–261,348–415; `app/la-isla-vota/page.tsx`:48–97,132–179,271–405; `app/conversation-families/catalog.ts`:19–42,46–53.

#### La Noche de las Siete Llamadas — `la-noche-de-las-siete-llamadas`

Collection: **Universos**. Access: **PRO**. IDs: `126`. Canonical lesson: `/la-noche-de-las-siete-llamadas`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-la-noche-de-las-siete-llamadas`.

**Visual world:** Nighttime phone wall and operator desk with caller avatars, time/urgency labels and hidden facts.

**Interaction:** Seven progressively harder calls; question before revealing clues, give and revise advice, mark outcome, finish with personal discussion.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/noche-siete-llamadas.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 126 | broadly plausible. B1 fits eliciting a narrative, comparing practical solutions and explaining advice. Final relationship/work choice is a stretch toward B2, but grounded situations and prompts support B1. |

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Strong six-level seed: same phone inquiry/reveal/advice loop scales without changing its identity. Preserve the B1 bank. Seed a new six-level family using this existing singleton concept

**Reuse / shared component:** Extract typed CallScenario and level banks, follow-ups, supports and closing questions. Reuse phone wall/operator engine; variable clue count and teacher resistance by level, ConversationFamily wrapper and level-reset state.

**Effort/assets:** medium relative implementation complexity. Retain phone wall; use different caller/problem preview and visible communicative action for each level. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

**Evidence:** `app/la-noche-de-las-siete-llamadas/page.tsx`:6–18; `app/la-noche-de-las-siete-llamadas/page.tsx`:21–37; `app/la-noche-de-las-siete-llamadas/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53.

#### La Mesa de las Tres Ofertas — `la-mesa-de-las-tres-ofertas`

Collection: **Universos**. Access: **PRO**. IDs: `125`. Canonical lesson: `/la-mesa-de-las-tres-ofertas`. Default: **B2**.

Canonical resource: `/resources/spanish-conversation-activity-b2-la-mesa-de-las-tres-ofertas`.

**Visual world:** Green/copper high-floor boardroom with three investor offers, sealed annexes and signature/exit controls.

**Interaction:** Pitch a project; choose investor; answer objections and counteroffer; reveal a clause/cofounder veto; sign, amend or withdraw under ultimatum.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/mesa-tres-ofertas.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B2 | 125 | broadly plausible. B2 negotiation is explicit: partial concession, new argument, condition, two alternatives, coherent final deal. Some specialized business concepts need vocabulary support but no obvious mismatch. |

**Absent levels:** A1, A2, B1, C1, C2. Priority order: B1, C1, A2, C2, A1.

**Decision:** A. Use as a six-level offer-comparison/negotiation family while preserving the B2 investor story. Lower levels need concrete service/event offers, not diluted equity clauses. Seed a new six-level family using this existing singleton concept

**Reuse / shared component:** Extract offer/project/clause/teacher banks and typed stage descriptors. Reuse three-offer table and decision shell; parameterize number of constraints, response prompts and objections. No new global visual engine needed.

**Effort/assets:** high relative implementation complexity. Same three-offer table; vary the objects/offer cards and task cue by level. B2 investment preview must not be shown for A1 simple-price offers. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

**Evidence:** `app/la-mesa-de-las-tres-ofertas/page.tsx`:7–32; `app/la-mesa-de-las-tres-ofertas/page.tsx`:34–58; `app/la-mesa-de-las-tres-ofertas/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53.

#### Indonesia Fantástica — `indonesia-fantastica`

Collection: **Países**. Access: **PRO**. IDs: `24`. Canonical lesson: `/indonesia-fantastica`. Default: **A1**.

Canonical resource: `/resources/spanish-conversation-activity-a1-indonesia-fantastica`.

**Visual world:** Fantasy Indonesian archipelago with 38 province portals, seven region groups, floating hero landscape and province emblems.

**Interaction:** Select province; ten concrete questions with local authentic place/food/animal facts, choices/starters/sparks, bilingual wordbank and speech/answer builder.

**Level behavior:** Native singleton has no ConversationFamily selector and does not read ?level; any level query renders the same hardcoded A1 seed. Catalog level-aware links do not add runtime variants.

**Current thumbnails:** `/indonesia-fantasy-hero.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A1 | 24 | Broadly plausible with a supported A2 stretch at the end.. Likes, simple choices, packing, basic days/counts and short chunk-based answers fit A1. Three-part day planning and optional past-oriented best-part followup can be narrowed by teacher. Conditional would-like is formulaic support, not evidence of a high level. |

**Content evidence:** provinces: 38; promptInstances: 380; generation: 10 templates populated with authentic province place/action/food/animal/choice fields; not 380 separately written task functions..

**Absent levels:** A2, B1, B2, C1, C2. Priority order: A2, B1, B2, C1, C2.

**Decision:** A. Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging.

**Reuse / shared component:** Extract questionsFor into level content modules; reuse archipelago engine and preserve authentic cultural data merge. Add variant-sensitive choices, sparks, mission and closing; no need to redraw map.

**Effort/assets:** medium relative implementation complexity. Keep archipelago hero; focus different province portal/local motif with level/task cue. Existing A1 original preserved. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- No hidden CEFR variants; seven geographic groups are not levels. Local fantasy hero/mascot assets exist.

**Evidence:** `app/indonesia-fantastica/page.tsx`:6–7; `app/indonesia-fantastica/page.tsx`:39–72; `app/indonesia-fantastica/page.tsx`:193–215; `app/indonesia-fantastica/authentic-data.ts`:1–15.

#### De eso sí hablo — `tablero-de-eso-si-hablo`

Collection: **Tableros**. Access: **PRO**. IDs: `205`. Canonical lesson: `/tablero-de-eso-si-hablo`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-de-eso-si-hablo`.

**Visual world:** Conversation board of six selectable/mixable categories, large prompt surface, follow-up controls and final reflection, shared with No es tan simple.

**Interaction:** Randomize without repetition across selected categories; reveal two specific follow-ups; track completed/skipped items, student-led turn and final questions; persist session.

**Level behavior:** Native single-bank route has no CEFR selector or query-level bank dispatch. A query such as ?level=C2 does not author or load C2 content; catalog-only level metadata is not an additional variant.

**Current thumbnails:** `/catalog-thumbnails/conversation-choice.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 205 | Broadly plausible. Narrate everyday events, describe routines/places/people, explain learning and plans with specific follow-up questions. |

**Content evidence:** B1: 72 primary questions (6×12), 144 specific follow-ups and 12 final prompts in b1-data.ts.; relationship: B2 sibling uses exactly the same BoardLesson/BoardBank contract and turn sequence; it adds optional condition changes..

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** A. Keep as its own potential six-level seed; no board merger recommended without explicit central-concept review. Different central authored frames and topic banks; docs/conversation-family-migration.md explicitly preserves the two differently themed boards. Shared BoardLesson alone is insufficient for a family merge.

**Reuse / shared component:** Reuse BoardLesson, engine and BoardBank independently for this family. Add its own protected level dispatcher and ConversationFamily wrapper when new banks exist, preserving historical default and bank-specific state keys. No new board renderer needed. Shared component reuse is not a family merge.

**Effort/assets:** low relative implementation complexity. Keep a distinct board-family identity reflecting personal stories/plans; use an actual board preview instead of borrowed generic art. Future level variants within this family can share its composition and vary a prompt cue. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Consolidation ambiguity: strong engine reuse, but explicit separate-family decision and different central thematic frames; no merger assumed.

**Evidence:** `app/tablero-de-eso-si-hablo/page.tsx`:1–12; `app/tablero-no-es-tan-simple/page.tsx`:1–12; `app/boards/BoardLesson.tsx`:17–93; `app/boards/b1-data.ts`:14–27,101–131; `app/boards/b2-data.ts`:106–137; `docs/conversation-family-migration.md`:60–63.

#### No es tan simple — `tablero-no-es-tan-simple`

Collection: **Tableros**. Access: **PRO**. IDs: `206`. Canonical lesson: `/tablero-no-es-tan-simple`. Default: **B2**.

Canonical resource: `/resources/spanish-conversation-activity-b2-no-es-tan-simple`.

**Visual world:** Same reusable category/prompt conversation board as B1 sibling, with optional changed-condition reveal.

**Interaction:** Mix six categories, draw without repeats, reveal two follow-ups and on 24 cards a new condition, revise stance, then final reflection.

**Level behavior:** Native single-bank route has no CEFR selector or query-level bank dispatch. A query such as ?level=C2 does not author or load C2 content; catalog-only level metadata is not an additional variant.

**Current thumbnails:** `/catalog-thumbnails/advanced-dialogue.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B2 | 206 | Broadly plausible. Develop everyday arguments, compare alternatives, qualify conclusions and revise decisions under changed circumstances; advanced nuance is tied to concrete situations. |

**Content evidence:** B2: 72 primary questions, 144 follow-ups, 24 optional condition changes and 12 final prompts in b2-data.ts..

**Absent levels:** A1, A2, B1, C1, C2. Priority order: B1, C1, A2, C2, A1.

**Decision:** A. Keep as its own potential six-level seed; no board merger recommended without explicit central-concept review. Different central authored frames and topic banks; docs/conversation-family-migration.md explicitly preserves the two differently themed boards. Shared BoardLesson alone is insufficient for a family merge.

**Reuse / shared component:** Reuse BoardLesson, engine and BoardBank independently for this family. Add its own protected level dispatcher and ConversationFamily wrapper when new banks exist, preserving historical default and bank-specific state keys. No new board renderer needed. Shared component reuse is not a family merge.

**Effort/assets:** low relative implementation complexity. Keep a distinct board-family identity reflecting trade-offs/revised positions; use an actual board preview instead of borrowed generic art. Future level variants within this family can share its composition and vary a prompt cue. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

- Consolidation ambiguity: strong engine reuse, but explicit separate-family decision and different central thematic frames; no merger assumed.

**Evidence:** `app/tablero-no-es-tan-simple/page.tsx`:1–12; `app/boards/BoardLesson.tsx`:36–93; `app/boards/b2-data.ts`:19–46,106–137; `app/boards/b1-data.ts`:101–131; `docs/conversation-family-migration.md`:60–63.

#### En Vivo en Diez Minutos — `en-vivo-en-diez-minutos`

Collection: **Universos**. Access: **PRO**. IDs: `123`. Canonical lesson: `/en-vivo-en-diez-minutos`. Default: **A2**.

Canonical resource: `/resources/spanish-conversation-activity-a2-en-vivo-en-diez-minutos`.

**Visual world:** Neon TV control room with countdown displays, alert wall, five signal tokens and production rundown.

**Interaction:** Rank crises, spend a limited signal budget on solutions, call stakeholders, negotiate cuts, respond to a final twist and pitch a show.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/en-vivo-diez-minutos.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 123 | obvious upward-demand mismatch. Advertised A2, but repeated defence against disagreement, sponsor resistance, conditional compromise and 90-second persuasive pitch demand sustained B1/B2 interaction. Simple vocabulary/starters support some A2 exchanges but do not reduce the core demands to routine simple reasons. |

**Absent levels:** A1, B1, B2, C1, C2. Priority order: A1, B1, B2, C1, C2.

**Decision:** A. Six-level seed is viable. Review A2 before expansion: shorten exchanges, make options/acceptance predictable, supply full turn frames and move sustained objections/pitch to B1/B2 authored variants. Seed a new six-level family using this existing singleton concept

**Reuse / shared component:** Extract Crisis/Solution, call and twist banks plus stage instructions. Preserve token accounting/control room engine. Parameterize budget, hidden facts, oral constraints, scaffolding and closing; key state by level.

**Effort/assets:** high relative implementation complexity. Keep countdown/console; level thumbnails should preview simpler logistical cues at A1/A2 versus stakeholder conflict and public framing at higher levels. Resolve the documented CEFR-demand flag before adaptation; preserve current original.

**Evidence:** `app/en-vivo-en-diez-minutos/page.tsx`:16–41; `app/en-vivo-en-diez-minutos/page.tsx`:56–66; `app/en-vivo-en-diez-minutos/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53.

#### El Teatro de las Coartadas — `el-teatro-de-las-coartadas`

Collection: **Universos**. Access: **PRO**. IDs: `122`. Canonical lesson: `/el-teatro-de-las-coartadas`. Default: **A2**.

Canonical resource: `/resources/spanish-conversation-activity-a2-el-teatro-de-las-coartadas`.

**Visual world:** Dark green/gold theatre, curtain hero, suspect portrait cards, timeline puzzle and evidence dossier.

**Interaction:** Hear four alibis, reorder events, examine contradictions, interview a suspect, defend a vote and reconsider after final evidence.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/teatro-coartadas.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| A2 | 122 | borderline upward demand; review. Short times/actions, supplied questions and sequence frames make an A2 core plausible. Unrehearsed new questions, assessing evidence reliability, answering an objection and a 90-second invented narrative push toward B1; flag these specific tasks rather than blanket relabeling. |

**Absent levels:** A1, B1, B2, C1, C2. Priority order: A1, B1, B2, C1, C2.

**Decision:** A. Strong six-level mystery seed. Keep A2 concrete and well scaffolded; promote evidence argumentation into distinct B1+ cases. Seed a new six-level family using this existing singleton concept

**Reuse / shared component:** Extract suspects/events/contradictions/questions plus level-specific verdict. Reuse suspect cards, timeline, timer and reveal engine; vary evidence burden, listening/retelling constraints and teacher notes.

**Effort/assets:** medium relative implementation complexity. Preserve curtain/mask motif; vary case object and timeline/evidence complexity in each thumbnail. Author genuine objectives, tasks, scaffolds, teacher notes and closing for each new level. C1/C2 need a concept-fit review.

**Evidence:** `app/el-teatro-de-las-coartadas/page.tsx`:7–36; `app/el-teatro-de-las-coartadas/page.tsx`:52–62; `app/el-teatro-de-las-coartadas/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53.

#### El Ministerio de las Versiones — `el-ministerio-de-las-versiones`

Collection: **Universos**. Access: **PRO**. IDs: `129`. Canonical lesson: `/el-ministerio-de-las-versiones`. Default: **C2**.

Canonical resource: `/resources/spanish-conversation-activity-c2-el-ministerio-de-las-versiones`.

**Visual world:** Steel-and-paper institutional archive with sealed evidence tabs, case stack, hypothesis ledger and final hearing.

**Interaction:** Five cases reveal four source layers; revise certainty, distinguish manipulation/misunderstanding, shift registers and defend a provisional final reading against objections.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/ministerio-versiones.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| C2 | 129 | broadly plausible. C2 is well supported by euphemism, irony, subtext, source interests, register control and maintaining incompatible interpretations under challenge. |

**Absent levels:** A1, A2, B1, B2, C1. Priority order: C1, B2, B1, A2, A1.

**Decision:** C. Protect as a C2 interpretation original; do not merge with Messages just because both discuss context. The institutional archive, non-final truth and register transformation are its identity. Intentionally standalone recommendation to protect concept quality

**Reuse / shared component:** Extract CaseFile/Evidence plus finalQuestions and supports from page; retain bespoke archive engine, case certainty and register laboratory. Could share small evidence-disclosure/support controls with other narratives, not a universal lesson template.

**Effort/assets:** high relative implementation complexity. Archive case files and certainty meter remain distinct from message-prism thumbnails; no forced lower-level thumbnails. Concept decision first; maintain intentional standalone.

**Evidence:** `app/el-ministerio-de-las-versiones/page.tsx`:7–112; `app/el-ministerio-de-las-versiones/page.tsx`:114–149; `app/el-ministerio-de-las-versiones/style.css`:1–25; `app/conversation-families/catalog.ts`:19–42,46–53.

#### La Agencia de Vidas Paralelas — `la-agencia-de-vidas-paralelas`

Collection: **Universos**. Access: **PRO**. IDs: `128`. Canonical lesson: `/la-agencia-de-vidas-paralelas`. Default: **C1**.

Canonical resource: `/resources/spanish-conversation-activity-c1-la-agencia-de-vidas-paralelas`.

**Visual world:** Violet/cyan agency reception with six life dossiers, concealed cost layers and a values ledger.

**Interaction:** Reveal decision/success/cost, interview a teacher-played alternate self, choose priorities, rewrite one decision and evaluate ripple consequences.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/agencia-vidas-paralelas.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| C1 | 128 | broadly plausible. C1 demand is nuanced success/freedom definitions, hypothetical life consequences, reformulating judgments and responding to hidden motivations; consistent across six dossiers. |

**Absent levels:** A1, A2, B1, B2, C2. Priority order: B2, C2, B1, A2, A1.

**Decision:** C. Keep C1 standalone unless a separately authored B2/C2 companion preserves counterfactual identity and value conflict. A1 naming jobs would flatten the core rather than adapt it. Intentionally standalone recommendation to protect concept quality

**Reuse / shared component:** Extract Dossier[]/values/supports/final questions; reuse the bespoke six-stage agency shell. Parameterize layer text and rewrite rules only when an approved variant exists; level-key all open/priority/ripple state.

**Effort/assets:** high relative implementation complexity. Retain agency doorway/dossier identity. A future nearby level can foreground a different dossier and consequence, not a recolored badge. Concept decision first; maintain intentional standalone.

**Evidence:** `app/la-agencia-de-vidas-paralelas/page.tsx`:7–120; `app/la-agencia-de-vidas-paralelas/page.tsx`:122–195; `app/la-agencia-de-vidas-paralelas/style.css`:1–25; `app/conversation-families/catalog.ts`:19–42,46–53.

#### El Protocolo Aurora — `el-protocolo-aurora`

Collection: **Universos**. Access: **PRO**. IDs: `127`. Canonical lesson: `/el-protocolo-aurora`. Default: **B2**.

Canonical resource: `/resources/spanish-conversation-activity-b2-el-protocolo-aurora`.

**Visual world:** Cyan/violet ocean-research mission control with telemetry, precedent ledger and future echoes.

**Interaction:** Five scientific decisions; reveal facts, choose a policy, see consequences, negotiate with an NPC and test consistency against an Earth ultimatum.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/protocolo-aurora.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B2 | 127 | broadly plausible. B2 is plausible for supported arguments, concessions, negotiation and defending a principle; ethical/scientific abstraction occasionally reaches C1 but tasks include concrete options and roles. |

**Absent levels:** A1, A2, B1, C1, C2. Priority order: B1, C1, A2, C2, A1.

**Decision:** C. Retain this advanced precedent-and-ethics mission as standalone. A1–A2 object naming or routine station exchanges would be a different concept; consider B1/C1/C2 only after distinct authored pedagogy. Intentionally standalone recommendation to protect concept quality

**Reuse / shared component:** Extract protocol content and final bank from compressed page; reuse precedent ledger, telemetry and echo renderer. A configurable narrative stage rail/support dock may be shared; do not collapse Aurora with Island merely because both use governance.

**Effort/assets:** high relative implementation complexity. Preserve ocean station and scientific telemetry. Nearby advanced variants would need different decision/echo cues; defer lower-level variants. Concept decision first; maintain intentional standalone.

**Evidence:** `app/el-protocolo-aurora/page.tsx`:6–24; `app/el-protocolo-aurora/page.tsx`:26–43; `app/el-protocolo-aurora/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53.

#### La Sala de los Mensajes Fuera de Contexto — `la-sala-de-los-mensajes-fuera-de-contexto`

Collection: **Universos**. Access: **PRO**. IDs: `124`. Canonical lesson: `/la-sala-de-los-mensajes-fuera-de-contexto`. Default: **B2**.

Canonical resource: `/resources/spanish-conversation-activity-b2-la-sala-de-los-mensajes-fuera-de-contexto`.

**Visual world:** Red/amber message observatory with a context prism, chat signals and repair-call console.

**Interaction:** Interpret one of three ambiguous phrases, uncover relationship/channel/history, roleplay repair, respond to a leaked screenshot, reassess responsibility after restored original.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/mensajes-fuera-de-contexto.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B2 | 124 | broadly plausible. B2 supported interpretation and pragmatic repair are plausible; tasks explicitly require two readings, resistance, concession, public/private response and revised responsibility. |

**Absent levels:** A1, A2, B1, C1, C2. Priority order: B1, C1, A2, C2, A1.

**Decision:** C. Keep the ambiguity-and-repair original distinct. A nearby B1/C1/C2 extension could work; six-level expansion risks replacing pragmatic ambiguity with unrelated literal message drills. Do not merge with Ministry. Intentionally standalone recommendation to protect concept quality

**Reuse / shared component:** Extract message/repair/support banks; reuse prism, repair console and reveal sequence. Small shared disclosure/teacher-role components are optional. Actual context layers and interpretation prompts must be level-authored.

**Effort/assets:** high relative implementation complexity. Use message/prism motif; differentiate from institutional dossiers. Any new nearby-level preview should show its repair task and ambiguity. Concept decision first; maintain intentional standalone.

**Evidence:** `app/la-sala-de-los-mensajes-fuera-de-contexto/page.tsx`:7–32; `app/la-sala-de-los-mensajes-fuera-de-contexto/page.tsx`:34–58; `app/la-sala-de-los-mensajes-fuera-de-contexto/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53.

#### La Cámara de Presión — `la-camara-de-presion`

Collection: **Universos**. Access: **PRO**. IDs: `136`. Canonical lesson: `/la-camara-de-presion`. Default: **C2**.

Canonical resource: `/resources/spanish-conversation-activity-c2-la-camara-de-presion`.

**Visual world:** Dark pressure chamber, oversized one-question core, left bank spine and live 45-minute timer.

**Interaction:** 130-question bank combines topical pulse and evergreen intellectual moves; stage/family/topic filters, unseen-question navigation and source disclosure.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/conversation-premium/camara-presion.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| C2 | 136 | broadly plausible. C2 demand is precision, challenging presuppositions, implicit meaning, steelmanning and second/third-order consequences. The advanced judgment demand is explicit, not inferred from vocabulary. |

**Absent levels:** A1, A2, B1, B2, C1. Priority order: C1, B2, B1, A2, A1.

**Decision:** C. Keep the C2 pressure chamber standalone. A C1 companion is conceivable after review; do not label simple preference prompts as this same precision concept. Intentionally standalone recommendation to protect concept quality

**Reuse / shared component:** Question model and separated banks already exist. For an approved extra level, parameterize stage pools, labels, bank props and timer defaults, wrap with ConversationFamily and reset used questions by level. Do not treat question.family as CEFR family identity.

**Effort/assets:** high relative implementation complexity. Keep chamber identity; any future advanced variant should change prompt overlay and bank cue. No need for six thumbnails while expansion is deferred. Concept decision first; maintain intentional standalone.

- The internal family field denotes question categories, not hidden A1–C2 tracks.
- Pulse content is dated 14 SEP 2026; external factual accuracy not audited here.

**Evidence:** `app/la-camara-de-presion/page.tsx`:9–35,44–101,104–140; `app/la-camara-de-presion/questions.ts`:29–139; `app/la-camara-de-presion/pulse.ts`:3–43; `app/la-camara-de-presion/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53.

#### El Monasterio de las Ideas — `monasterio-de-las-ideas`

Collection: **Universos**. Access: **PRO**. IDs: `34`. Canonical lesson: `/monasterio-de-las-ideas`. Default: **C2**.

Canonical resource: `/resources/spanish-conversation-activity-c2-el-monasterio-de-las-ideas`.

**Visual world:** Twelve-room monastery miniature with hotspot portals, animated interior layers, live objects and a philosophical question chamber.

**Interaction:** Choose or ring for a room; inspect three artifacts, answer three C2 questions, open counterpoints, track visited rooms and finish with intellectual reflection.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/monastery-ideas-3d.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| C2 | 34 | broadly plausible. C2 is strongly justified by conceptual precision, moral ambiguity, reformulation under restrictions and multiple perspectives; abstraction is central across the bank. |

**Absent levels:** A1, A2, B1, B2, C1. Priority order: C1, B2, B1, A2, A1.

**Decision:** C. Protect the explicitly bespoke C2 philosophical original (the page calls it a unique chapter for Ryan). Do not turn it into A1 object naming or merge museum because of a reused image. Intentionally standalone recommendation to protect concept quality

**Reuse / shared component:** Extract Room[] from the page only if useful; retain map geometry, artifact animations and philosophical depth controls. No new shared six-level engine warranted. A nearby advanced companion would require authored theses, moves and vocabulary, not badge changes.

**Effort/assets:** high relative implementation complexity. Keep the existing thumbnail untouched. If expansion is later approved, use a distinct level composition; the reused monastery image is not evidence of family membership. Concept decision first; maintain intentional standalone.

**Evidence:** `app/monasterio-de-las-ideas/page.tsx`:16–235; `app/monasterio-de-las-ideas/page.tsx`:260–337,341–467; `app/lesson-catalog.ts`:105; `app/conversation-families/catalog.ts`:19–42,46–53.

#### El museo de las decisiones — `clase-203`

Collection: **Universos**. Access: **PRO**. IDs: `203`. Canonical lesson: `/clase/203`. Default: **C2**.

Canonical resource: `/resources/spanish-conversation-activity-c2-el-museo-de-las-decisiones`.

**Visual world:** Generic teacher lesson page with five numbered text sections and expandable activity/round disclosures; museum exists in the prose, not a bespoke scene engine.

**Interaction:** Eight C2 dilemmas (four practice, four speaking); each uses thesis/example/strongest objection/revised position, plus 200-word homework.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/monastery-worlds/03-biblioteca.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| C2 | 203 | broadly plausible. C2 precision, concession, delimiting claims and individual/institutional responsibility are explicit. The lesson is materially authored despite generic rendering; 60–75 minutes differs from usual 45-minute family target. |

**Absent levels:** A1, A2, B1, B2, C1. Priority order: C1, B2, B1, A2, A1.

**Decision:** C. Keep the eight-room ethical seminar intentionally standalone. No strong evidence for merging with Monastery: shared thumbnail and philosophical register are insufficient, and their structures differ. Intentionally standalone recommendation to protect concept quality

**Reuse / shared component:** Reuse generic lesson sections/disclosures. If immersive museum design is desired later, it is a NEW shared museum engine, with scene navigation/artifact model and content separation required; native:/clase/203 currently means generic adapter, not existing museum code.

**Effort/assets:** high relative implementation complexity. Keep the existing thumbnail untouched. If expansion is later approved, use a distinct level composition; the reused monastery image is not evidence of family membership. Concept decision first; maintain intentional standalone.

- The route must be inspected through /clase/[id]; there is no app/clase/203 native component.
- The eight dilemmas are not metadata-only: the generic renderer displays practice and speaking directly.
- 60–75-minute existing duration; do not count as already compliant with a newly authored approximately 45-minute selector.

**Evidence:** `app/additional-samples.ts`:5; `app/clase/[id]/page.tsx`:39–62,136–179; `app/lesson-catalog.ts`:105; `app/conversation-families/catalog.ts`:19–42; `app/conversation-families/catalog.ts`:19–42,46–53.

#### Preguntas que dan ganas de hablar — `advanced-conversation`

Collection: **Universos**. Access: **PRO**. IDs: `11`. Canonical lesson: `/advanced-conversation`. Default: **C1**.

Canonical resource: `/resources/spanish-conversation-activity-c1-preguntas-que-dan-ganas-de-hablar`.

**Visual world:** Minimal category-tab conversation deck with emoji topics and five selectable question cards per topic; no immersive map.

**Interaction:** Sixteen categories / eighty open questions; topic selection and question highlight only, without reveal, grading, closing or depth logic.

**Level behavior:** No native CEFR selector; singleton route renders its sole authored bank. Catalog exposes only the seed level.

**Current thumbnails:** `/catalog-thumbnails/advanced-dialogue.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| C1 | 11 | mixed; obvious weak C1 enforcement. First five categories (25 questions) demand C1 abstraction/nuance. Remaining eleven (55) largely invite preferences, experiences or simple hypotheticals accessible at B1/B2; an advanced learner can answer richly, but the authored interaction does not require C1 discourse. |

**Absent levels:** A1, A2, B1, B2, C2. Priority order: B2, C2, B1, A2, A1.

**Decision:** C. Keep as a deliberately advanced open-discussion deck after a C1 consistency review. No strong source evidence it belongs to Let’s Talk: separate UI, 16 versus 15 topics and different banks. A six-level generic question deck would duplicate an existing broad function without preserving distinctive value. Intentionally standalone recommendation to protect concept quality

**Reuse / shared component:** Extract Topic[] and add authored optional C1 depth/teacher prompts if later authorized. Reuse native tab/card shell. No need to merge or create another universal six-level deck; shared accessible topic navigation is optional.

**Effort/assets:** medium relative implementation complexity. Retain clean advanced dialogue design; a future revision should preview nuanced exchanges. Similar topic names to Let’s Talk are not grounds for identical thumbnails. Concept decision first; maintain intentional standalone.

- No actual hidden B1/B2 selectable variant: lower-demand questions coexist inside the single C1 bank.
- No exact native-component duplication found; pedagogical overlap is not a family identity match.
- CEFR is judged by elicited discourse. Simple wording does not justify lowering a level; the flag concerns absent required depth in much of the bank.

**Evidence:** `app/advanced-conversation/page.tsx`:9–44; `app/advanced-conversation/page.tsx`:45–121; `app/advanced-conversation/page.tsx`:124–139; `app/choose-conversation/data.ts`:1–18; `app/conversation-families/catalog.ts`:19–42,46–53.

#### Entrenador personal — `entrenador-personal`

Collection: **Modo Play**. Access: **PRO**. IDs: `216`. Canonical lesson: `/entrenador-personal`. Default: **B1**.

Canonical resource: `/resources/spanish-conversation-activity-b1-entrenador-personal`.

**Visual world:** Modern gym with exercise images, station navigation, weekly plan and imperative counters; learner is trainer, teacher is client.

**Interaction:** Eight main stations plus cover/result: command warm-up, choose goal, direct exercises, correct errors, respond to resistant client, plan week, handle surprises and final 30-command challenge.

**Level behavior:** Native single-bank route has no CEFR selector or query-level bank dispatch. A query such as ?level=C2 does not author or load C2 content; catalog-only level metadata is not an additional variant.

**Current thumbnails:** `/entrenador-personal/hero.webp`; distinct-per-existing-level.

| Existing level | Ledger ID | CEFR plausibility review |
| --- | --- | --- |
| B1 | 216 | Broadly plausible focused oral practice. Sustained instructions, corrections and spontaneous reactions fit an intermediate oral lesson. Imperative morphology alone is not a CEFR determination; some base commands are simpler. |

**Content evidence:** B1: One fixed imperative-focused bank with vos/tú/ustedes audience toggles, exercise cards, errors/client lines and boss.; notVariants: Audience toggles change address forms, not CEFR level; counters/result names are performance states..

**Absent levels:** A1, A2, B2, C1, C2. Priority order: A2, B2, A1, C1, C2.

**Decision:** C. Intentional B1 standalone recommended. The distinctive pedagogic contract is producing affirmative/negative imperatives and avoiding advice paraphrases. Authentic C1/C2 precision/negotiation would require a changed communicative contract; no existing same-world family has evidence for merge.

**Reuse / shared component:** PersonalTrainer already reuses stage/counter utilities, but many instructions/frames are embedded in TSX and engine.mjs. Extract content/config only if expanding. Existing grammar focus should remain explicit rather than stretching same command-count mechanic into C1/C2.

**Effort/assets:** medium relative implementation complexity. Gym hero is sufficient for intentional B1 standalone; no artificial six-thumbnail set needed. Concept decision first; maintain intentional standalone.

**Evidence:** `app/entrenador-personal/engine.mjs`:1–67,84–97; `app/entrenador-personal/PersonalTrainer.tsx`:22–60,62–80; `app/entrenador-personal/page.tsx`:1–11.

## 6. All missing variants and prioritized queue

The following 42 rows enumerate **all 200 missing family/level pairs**. The JSON `missingVariantQueue` stores all 200 individually with a unique rank, family, level, batch, complexity, asset need and review gate. Candidate means planning eligibility, not approval to rewrite an original.

| Batch | Family | All absent levels in priority order | Count | Disposition |
| --- | --- | --- | --- | --- |
| 1 | Red Flag o No | A1, C1, C2 | 3 | candidate |
| 1 | Let’s Talk | B2, C1, C2 | 3 | candidate |
| 1 | La máquina que elimina cosas del mundo | B2, A1, C1, C2 | 4 | candidate |
| 1 | Tu vida con una regla absurda | B2, A1, C1, C2 | 4 | candidate |
| 2 | Reino Unido en Relieve | A2, B2, C1, C2 | 4 | candidate |
| 2 | Australia en Movimiento | A1, B2, C1, C2 | 4 | candidate |
| 2 | ESTADOS UNIDOS | A1, B2, C1, C2 | 4 | candidate |
| 2 | El Reino de las Preguntas Prohibidas | B2, C1, A1, C2 | 4 | candidate |
| 3 | La ciudad no duerme | A2, B2, A1, C1, C2 | 5 | candidate |
| 3 | La vida después de los 30 | A2, B2, A1, C1, C2 | 5 | candidate |
| 3 | La Ruleta de Tu Vida | A1, B1, B2, C1, C2 | 5 | candidate |
| 3 | La Noche de las Invitaciones Cruzadas | A2, B1, B2, C1, C2 | 5 | candidate |
| 4 | MÉXICO | A2, B2, A1, C1, C2 | 5 | candidate |
| 4 | Irlanda en Relieve | A2, B2, A1, C1, C2 | 5 | candidate |
| 4 | Suiza en Relieve | A2, B2, A1, C1, C2 | 5 | candidate |
| 4 | Israel en Capas | A2, B2, A1, C1, C2 | 5 | candidate |
| 5 | Buenos Aires en la Calle | A1, B1, B2, C1, C2 | 5 | candidate |
| 5 | Argento Roleplays | A2, B1, B2, C1, C2 | 5 | candidate |
| 5 | El Mundo Fantástico | A2, B1, B2, C1, C2 | 5 | candidate |
| 5 | Estados Unidos · Coast to Coast | A2, B1, B2, C1, C2 | 5 | candidate |
| 6 | ¿Y ahora qué? | A2, B2, A1, C1, C2 | 5 | candidate |
| 6 | Uno o el otro | A2, B2, A1, C1, C2 | 5 | candidate |
| 6 | Ciudad en juego | A2, B2, A1, C1, C2 | 5 | candidate |
| 6 | El Cine de las Tres Funciones | A2, B1, B2, C1, C2 | 5 | candidate |
| 7 | La Ciudad del Futuro | A2, B2, A1, C1, C2 | 5 | candidate |
| 7 | La isla vota | A2, B2, A1, C1, C2 | 5 | candidate |
| 7 | La Noche de las Siete Llamadas | A2, B2, A1, C1, C2 | 5 | candidate |
| 7 | La Mesa de las Tres Ofertas | B1, C1, A2, C2, A1 | 5 | candidate |
| 8 | Indonesia Fantástica | A2, B1, B2, C1, C2 | 5 | candidate |
| 8 | De eso sí hablo | A2, B2, A1, C1, C2 | 5 | candidate |
| 8 | No es tan simple | B1, C1, A2, C2, A1 | 5 | candidate |
| 8 | En Vivo en Diez Minutos | A1, B1, B2, C1, C2 | 5 | candidate |
| 8 | El Teatro de las Coartadas | A1, B1, B2, C1, C2 | 5 | candidate |
| 9 | El Ministerio de las Versiones | C1, B2, B1, A2, A1 | 5 | deferred-standalone |
| 9 | La Agencia de Vidas Paralelas | B2, C2, B1, A2, A1 | 5 | deferred-standalone |
| 9 | El Protocolo Aurora | B1, C1, A2, C2, A1 | 5 | deferred-standalone |
| 9 | La Sala de los Mensajes Fuera de Contexto | B1, C1, A2, C2, A1 | 5 | deferred-standalone |
| 10 | La Cámara de Presión | C1, B2, B1, A2, A1 | 5 | deferred-standalone |
| 10 | El Monasterio de las Ideas | C1, B2, B1, A2, A1 | 5 | deferred-standalone |
| 10 | El museo de las decisiones | C1, B2, B1, A2, A1 | 5 | deferred-standalone |
| 10 | Preguntas que dan ganas de hablar | B2, C2, B1, A2, A1 | 5 | deferred-standalone |
| 10 | Entrenador personal | A2, B2, A1, C1, C2 | 5 | deferred-standalone |

155 candidate gaps are spread across 33 families (eight existing multi-level families plus 25 seeds). The other 45 gaps remain visible but deferred across nine standalone recommendations. No artificial zero gap is assigned to a standalone.

## 7. Orphan lessons and non-surfaced source

Here, an active orphan means a singleton with no demonstrated sibling, even though the existing manifest gives every seed a family adapter. **A** = seed its own future six-level family, subject to concept fit; **B** = join an existing family if evidenced; **C** = retain as intentional standalone. All originals remain authoritative.

| ID | Family | Choice | Evidence-based recommendation |
| --- | --- | --- | --- |
| 221 | La ciudad no duerme | A | Seed its own six-level family. Concrete navigable neighbourhood scales from A1 supported local exchanges to advanced interpretations/urban perspectives. Do not merge with Ciudad en juego: exploration and encounter narrative differ from governance simulation/metrics. |
| 215 | La vida después de los 30 | A | Seed its own six-level visual-exploration family. Stable body-map metaphor and adult-life topics can support concrete A1 routines through nuanced C1/C2 life narratives. Adult topic eligibility is separate from language level. No matching existing engine/concept justifies merging. |
| 17 | La Ruleta de Tu Vida | A | Seed its own six-level roulette family. Stable chance/non-repeat topic mechanic scales to richer communicative tasks; no strong existing family match beyond generic conversation topics. |
| 120 | La Noche de las Invitaciones Cruzadas | A | Strong six-level social-encounter seed: retain invitation matching and table encounters while increasing relationship/interaction complexity. Seed a new six-level family using this existing singleton concept |
| 210 | MÉXICO | A | Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging. |
| 33 | Irlanda en Relieve | A | Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging. |
| 29 | Suiza en Relieve | A | Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging. |
| 25 | Israel en Capas | A | Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging. |
| 39 | Buenos Aires en la Calle | A | Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging. |
| 19 | Argento Roleplays | A | Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging. |
| 27 | El Mundo Fantástico | A | Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging. |
| 26 | Estados Unidos · Coast to Coast | A | Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging. |
| 138 | ¿Y ahora qué? | A | Seed its own six-level everyday-problem family. Concrete decision-to-consequence/chat mechanic scales naturally. Shared shell with Uno o el otro/Ciudad en juego does not establish same pedagogic world or turn mechanics. |
| 137 | Uno o el otro | A | Seed its own six-level preference/trade-off family. Binary choice progressing to constraints/ranking is a stable concept. Generic shell reuse does not justify merging city governance or progressive everyday chats. |
| 139 | Ciudad en juego | A | Seed its own six-level governance/city-building family. Scales from naming/choosing facilities to multiperspective policy negotiation. Shared city subject with La ciudad no duerme is insufficient to merge distinct world/mechanics. |
| 121 | El Cine de las Tres Funciones | A | Six-level cinema-planning seed; each level needs different interaction and closing goals. Preserve the present concrete A1 activity. Seed a new six-level family using this existing singleton concept |
| 22 | La Ciudad del Futuro | A | Strong six-level city exploration seed. Author a concrete B1 bank or separate advanced discussion track before claiming consistent B1. Do not merge with other city concepts solely by setting. Seed a new six-level family using this existing singleton concept |
| 109 | La isla vota | A | Excellent six-level island-governance seed if a genuinely concrete B1 variant is authored/reviewed. Keep current content preserved as source; do not simply relabel during an audit. Seed a new six-level family using this existing singleton concept |
| 126 | La Noche de las Siete Llamadas | A | Strong six-level seed: same phone inquiry/reveal/advice loop scales without changing its identity. Preserve the B1 bank. Seed a new six-level family using this existing singleton concept |
| 125 | La Mesa de las Tres Ofertas | A | Use as a six-level offer-comparison/negotiation family while preserving the B2 investor story. Lower levels need concrete service/event offers, not diluted equity clauses. Seed a new six-level family using this existing singleton concept |
| 24 | Indonesia Fantástica | A | Use this original as seed of its own six-level family; preserve the existing original. Distinct visual world and mechanic; shared country label alone does not justify merging. |
| 205 | De eso sí hablo | A | Keep as its own potential six-level seed; no board merger recommended without explicit central-concept review. Different central authored frames and topic banks; docs/conversation-family-migration.md explicitly preserves the two differently themed boards. Shared BoardLesson alone is insufficient for a family merge. |
| 206 | No es tan simple | A | Keep as its own potential six-level seed; no board merger recommended without explicit central-concept review. Different central authored frames and topic banks; docs/conversation-family-migration.md explicitly preserves the two differently themed boards. Shared BoardLesson alone is insufficient for a family merge. |
| 123 | En Vivo en Diez Minutos | A | Six-level seed is viable. Review A2 before expansion: shorten exchanges, make options/acceptance predictable, supply full turn frames and move sustained objections/pitch to B1/B2 authored variants. Seed a new six-level family using this existing singleton concept |
| 122 | El Teatro de las Coartadas | A | Strong six-level mystery seed. Keep A2 concrete and well scaffolded; promote evidence argumentation into distinct B1+ cases. Seed a new six-level family using this existing singleton concept |
| 129 | El Ministerio de las Versiones | C | Protect as a C2 interpretation original; do not merge with Messages just because both discuss context. The institutional archive, non-final truth and register transformation are its identity. Intentionally standalone recommendation to protect concept quality |
| 128 | La Agencia de Vidas Paralelas | C | Keep C1 standalone unless a separately authored B2/C2 companion preserves counterfactual identity and value conflict. A1 naming jobs would flatten the core rather than adapt it. Intentionally standalone recommendation to protect concept quality |
| 127 | El Protocolo Aurora | C | Retain this advanced precedent-and-ethics mission as standalone. A1–A2 object naming or routine station exchanges would be a different concept; consider B1/C1/C2 only after distinct authored pedagogy. Intentionally standalone recommendation to protect concept quality |
| 124 | La Sala de los Mensajes Fuera de Contexto | C | Keep the ambiguity-and-repair original distinct. A nearby B1/C1/C2 extension could work; six-level expansion risks replacing pragmatic ambiguity with unrelated literal message drills. Do not merge with Ministry. Intentionally standalone recommendation to protect concept quality |
| 136 | La Cámara de Presión | C | Keep the C2 pressure chamber standalone. A C1 companion is conceivable after review; do not label simple preference prompts as this same precision concept. Intentionally standalone recommendation to protect concept quality |
| 34 | El Monasterio de las Ideas | C | Protect the explicitly bespoke C2 philosophical original (the page calls it a unique chapter for Ryan). Do not turn it into A1 object naming or merge museum because of a reused image. Intentionally standalone recommendation to protect concept quality |
| 203 | El museo de las decisiones | C | Keep the eight-room ethical seminar intentionally standalone. No strong evidence for merging with Monastery: shared thumbnail and philosophical register are insufficient, and their structures differ. Intentionally standalone recommendation to protect concept quality |
| 11 | Preguntas que dan ganas de hablar | C | Keep as a deliberately advanced open-discussion deck after a C1 consistency review. No strong source evidence it belongs to Let’s Talk: separate UI, 16 versus 15 topics and different banks. A six-level generic question deck would duplicate an existing broad function without preserving distinctive value. Intentionally standalone recommendation to protect concept quality |
| 216 | Entrenador personal | C | Intentional B1 standalone recommended. The distinctive pedagogic contract is producing affirmative/negative imperatives and avoiding advice paraphrases. Authentic C1/C2 precision/negotiation would require a changed communicative contract; no existing same-world family has evidence for merge. |

### Retired and dormant material, preserved but excluded from active counts

These eight records/banks are accounted for separately. They are not secretly available level variants, and they must not be regenerated or reactivated without reviewing the existing bytes and intent.

| Artifact | Historical level / ID | Source | Disposition |
| --- | --- | --- | --- |
| Tu primera charla | A0 / 2 | `archive/initial-draft-lessons.ts` | intentionally-retired. C: preserve as retired standalone source; no revival or active-family assignment. Source header explicitly retires these on 2026-09-06; no published imports or current lesson-ledger entry. |
| En el café | A1 / 4 | `archive/initial-draft-lessons.ts` | intentionally-retired. C: preserve as retired standalone source; no revival or active-family assignment. Source header explicitly retires these on 2026-09-06; no published imports or current lesson-ledger entry. |
| Perderte y recuperarte | A2 / 6 | `archive/initial-draft-lessons.ts` | intentionally-retired. C: preserve as retired standalone source; no revival or active-family assignment. Source header explicitly retires these on 2026-09-06; no published imports or current lesson-ledger entry. |
| Small talk sin perderte | B1 / 8 | `archive/initial-draft-lessons.ts` | intentionally-retired. C: preserve as retired standalone source; no revival or active-family assignment. Source header explicitly retires these on 2026-09-06; no published imports or current lesson-ledger entry. |
| Debates con onda | B2 / 10 | `archive/initial-draft-lessons.ts` | intentionally-retired. C: preserve as retired standalone source; no revival or active-family assignment. Source header explicitly retires these on 2026-09-06; no published imports or current lesson-ledger entry. |
| Argentina entre líneas | C2 / 12 | `archive/initial-draft-lessons.ts` | intentionally-retired. C: preserve as retired standalone source; no revival or active-family assignment. Source header explicitly retires these on 2026-09-06; no published imports or current lesson-ledger entry. |
| Unused higher-demand Coast-to-Coast bank | not declared / no active ID | `app/estados-unidos-a2-b1/data.ts` | unwired-content. B candidate: same imported 20-stop source structure; review provenance/content before any future adaptation. Imports stops from estados-unidos-basico/data.ts but no active app entry imports this module. Filename does not prove A2 and B1 are separately authored banks. No lesson ID, page, selected level or entitlement registration. |
| Estados Unidos en Contraste source bank | not declared / no active ID | `app/estados-unidos-en-contraste/data.ts`, `app/estados-unidos-en-contraste/map-data.ts` | unwired-content. C: preserve as an unregistered standalone source candidate; do not force it into either active USA family. Twelve educational regions with places and map shapes, but no page, active imports, lesson ID or CEFR declaration. Content alone is not a surfaced family-level experience. |

The dormant 20-stop USA bank is a **B candidate** for the paid Coast-to-Coast family because it directly imports its stop structure. It still has no active route, explicit reviewed level contract or selection path; do not count A2/B1 from its directory name. The contrast bank has twelve pedagogical regions and no runtime page, so it remains a separate unregistered candidate.

## 8. Potential duplicates, family ambiguities and quality caveats

- **True rename/alias family:** Choose Your Conversation (13), Let’s Talk A2 (14) and A1 (15) share the same fifteen topic worlds, choose-three interaction and typed talkVariants. Count three levels in one family; keep every route. Evidence: `app/choose-conversation/variants.ts`, `app/choose-conversation/page.tsx`, `app/a1-conversation/page.tsx`, `app/basic-conversation/page.tsx`.
- **Shared engine, distinct universe:** The elimination machine and absurd-rule world use ConversationWorld but have different premises, visuals and banks. Keep two families. Evidence: `app/conversation-worlds/ConversationWorldFamily.tsx`, `app/conversation-worlds/data.ts`, `app/conversation-worlds/data-a2.ts`.
- **Shared board, separate identity:** Shared BoardLesson, schemas and prompt controls do not establish one central lesson universe. Different topic/interaction contracts plus explicit historical separation outweigh a possible B1/B2 pairing. No merge recommended. Evidence: `app/boards/b1-data.ts`, `app/boards/b2-data.ts`, `app/boards/BoardLesson.tsx`, `docs/conversation-family-migration.md`.
- **City is not a family:** La ciudad no duerme is avatar exploration; Ciudad en juego is governance/building with metrics; Future City is a district discussion atlas. Keep all three, despite urban settings. Evidence: `app/la-ciudad-no-duerme/CityGame.tsx`, `app/ciudad-en-juego/page.tsx`, `app/future-city/page.tsx`.
- **FREE/PRO and world separation:** The FREE 50-state atlas A2/B1 and PRO A1 Coast-to-Coast road trip have different structures and access contracts. Paid A1 does not fill the FREE atlas A1 gap. Evidence: `app/estados-unidos-a2-b1/page.tsx`, `app/estados-unidos-basico/page.tsx`, `app/access-policy.ts`.
- **Historical A2 is not current selectable A2:** UK now exposes A1 and B1. Former A2 questions remain within B1; unsupported ?level=A2 falls back to B1. Preserve the old resource alias. Missing A2 means no current separately adapted/selectable A2 experience, not missing source text. Evidence: `app/reino-unido-en-relieve/variants.ts`, `app/reino-unido-en-relieve/page.tsx`, `app/resource-seo.ts`.
- **Selector versus native adapter:** The manifest calls every seed a family; 33 single-level native pages do not consume ?level. Only the eight multi-level engines plus La ciudad no duerme use the family wrapper. Extra query values never establish authored levels. Evidence: `app/conversation-families/catalog.ts`, `app/conversation-families/ConversationFamily.tsx`, `app/conversation-families/navigation.ts`.
- **Gameplay level is not CEFR:** Numeric stages, supportLevel labels, warm-up/deep phases, random mode, calm/full mode and duo/group modes are interaction settings, not additional CEFR banks. Evidence: `app/play-mode/PlayShell.tsx`, `app/buenos-aires-en-la-calle/page.tsx`, `app/la-isla-vota/page.tsx`.
- **Same image, different lesson:** El museo de las decisiones (203) has eight authored C2 dilemmas in additional-samples.ts and is rendered by /clase/[id]. Its monastery-room thumbnail does not make it a Monastery variant. Evidence: `app/additional-samples.ts`, `app/clase/[id]/page.tsx`, `app/monasterio-de-las-ideas/page.tsx`.
- **Generic question topics are insufficient:** Advanced Conversation has sixteen categories, a separate UI and separate eighty-question bank. Do not silently count it as Let’s Talk C1. Evidence: `app/advanced-conversation/page.tsx`, `app/choose-conversation/variants.ts`.
- **Shared collection is insufficient:** Países is a collection of twelve separate conceptual worlds. Similar atlas CSS and country themes are reusable infrastructure, not grounds for merging countries. Mundo Fantástico is global, not a Brazil-only family. Evidence: `app/lesson-catalog.ts`, `app/mundo-fantastico/page.tsx`.
- **Category boundary:** ARGENTO /argento (16) is Vocabulario; Argento Roleplays (19) is Conversación. Conversation sections inside grammar/listening/pronunciation do not create standalone conversation lessons. Evidence: `app/lesson-catalog.ts`, `app/argento/layout.tsx`, `app/argento-roleplays/page.tsx`.
- **Scene is not separate lesson:** Argento Roleplays contains a Taxi/Uber scene. No independently registered or routed Taxi por la ciudad family exists in this main. Evidence: `app/argento-roleplays/data.ts`, `app/lesson-catalog.ts`.
- **Legacy publication URLs:** Old lesson paths and resource aliases remain resolvable. The current catalog/sitemap expose one canonical family entry; query links and aliases are not extra records. Historical 48/41/51 documentation predates La ciudad no duerme 221. Evidence: `app/resource-seo.ts`, `app/resources/[slug]/page.tsx`, `app/sitemap.ts`, `tests/conversation-legacy-urls.json`, `docs/conversation-family-migration.md`.

### Metadata/quality findings that do not create missing CEFR variants

- A2 has 15 × 6 = 90 authored Spanish-only prompts; the route-ledger preview claims 150 bilingual. A1 has 150 prompts, but the shared renderer does not display the bilingual question support. This is metadata/support drift, not another missing level. Evidence: `app/choose-conversation/variants.ts`, `app/choose-conversation/page.tsx`, `app/lesson-catalog.ts`.
- B1 is selectable and differs from the A2 core, but uses the same tourism-versus-local-life prompt template for all 50 states. Count one existing B1 variant with a depth risk; do not call 50 instantiated questions 50 distinct tasks. Evidence: `app/estados-unidos-a2-b1/state-data.ts`.
- Mexico and Mundo Fantástico generate repeated question structures from geographic/topic data. Geographic quantity is not the same as distinct communicative task variety. Existing levels remain counted. Evidence: `app/mexico/data.ts`, `app/mundo-fantastico/page.tsx`.
- Six multi-level families currently reuse one thumbnail across levels. They still have real existing variants. Future work should add recognizable level variations without replacing originals; do not manufacture missing content merely from an asset-packaging gap. Evidence: `app/conversation-families/catalog.ts`, `app/lesson-catalog.ts`.

## 9. CEFR mismatch flags

These eight flags concern substantial or clearly identified demand mismatches/consistency gaps. They do not change assigned levels, invalidate all content in a mixed bank, or imply hidden variants. Borderline tasks in Teatro, Cinema, Ireland, Switzerland, Let’s Talk and other families remain localized notes above.

| Family | Assigned level | Flag | Evidence |
| --- | --- | --- | --- |
| El Reino de las Preguntas Prohibidas | B1 | Sustained moral/identity abstraction, counterargument and diplomatic/elegant register exceed a broadly B1 core; review against B2/C1 demands, preserving the current bank. | `app/preguntas-prohibidas-a2/variants.ts`:1–6; `app/preguntas-prohibidas-a2/page.tsx`:19–24,39–114; `app/preguntas-prohibidas/data.ts`:6–39; `app/preguntas-prohibidas-a2/data.ts`:5–50; `app/preguntas-prohibidas/page.tsx`:1–2 |
| En Vivo en Diez Minutos | A2 | Repeated objection handling, sponsor resistance, conditional compromise and a 90-second persuasive pitch exceed simple routine A2 interaction. | `app/en-vivo-en-diez-minutos/page.tsx`:16–41; `app/en-vivo-en-diez-minutos/page.tsx`:56–66; `app/en-vivo-en-diez-minutos/style.css`:1–2; `app/conversation-families/catalog.ts`:19–42,46–53 |
| La isla vota | B1 | Repeated legitimacy, rights, economic policy and conditional negotiation tasks require sustained B2-style argument beyond short B1 reasons. | `app/la-isla-vota/data.ts`:98–208; `app/la-isla-vota/data.ts`:223–261,348–415; `app/la-isla-vota/page.tsx`:48–97,132–179,271–405; `app/conversation-families/catalog.ts`:19–42,46–53 |
| Ciudad en juego | B1 | Later required stages use constrained stakeholder negotiation and public-policy defence, substantially B2-like despite accessible entry choices. | `app/ciudad-en-juego/page.tsx`:4–36; `app/ciudad-en-juego/data.ts`:57–114,364–387,401–445; `app/play-mode/PlayShell.tsx`:43–71 |
| La Ciudad del Futuro | B1 | Numerous rights-based trade-offs, minority compensation and abstract urban-value challenges require more than concrete B1 explanation. | `app/future-city/data.ts`:21–145; `app/future-city/data.ts`:202–246; `app/future-city/page.tsx`:8–92,111–184,195–268; `app/conversation-families/catalog.ts`:19–42,46–53 |
| Israel en Capas | B1 | Recurring identity, cultural boundaries and competing-perspective tasks ask B2-like argument; concrete personal prompts remain B1-accessible. | `app/israel-en-capas/page.tsx`:3–6; `app/israel-en-capas/page.tsx`:76–88; `app/israel-en-capas/page.tsx`:127–151; `app/israel-en-capas/data.ts`:29–36; `app/israel-en-capas/data.ts`:174–195; `app/israel-en-capas/data.ts`:207–210; `app/israel-en-capas/data.ts`:238–269 |
| Buenos Aires en la Calle | A2 | Practical core fits A2; the always-rendered open-discussion section includes abstract civic/cultural evaluation requiring B1/B2 discussion. | `app/buenos-aires-en-la-calle/page.tsx`:14–50; `app/buenos-aires-en-la-calle/page.tsx`:75–112; `app/buenos-aires-en-la-calle/data.ts`:27–58; `app/buenos-aires-en-la-calle/data.ts`:160–275; `app/buenos-aires-en-la-calle/style.css`:7–16 |
| Preguntas que dan ganas de hablar | C1 | 25 questions strongly invite advanced nuance, while 55 mostly allow ordinary preference/experience answers without C1 discourse requirements. This is a depth-consistency flag, not a proposed downgrade based on vocabulary. | `app/advanced-conversation/page.tsx`:9–44; `app/advanced-conversation/page.tsx`:45–121; `app/advanced-conversation/page.tsx`:124–139; `app/choose-conversation/data.ts`:1–18; `app/conversation-families/catalog.ts`:19–42,46–53 |

Preserve every original. Future remediation needs a deliberate pedagogical decision: select/support the appropriate tasks, author a genuine separate bank, or review labeling. Do not silently simplify advanced originals or rename them in this audit.

## 10. Recommended production batches

No family is only one or two variants away from six, so the first priority tier is empty. The queue starts with existing multi-level engines, then strong reusable singleton worlds, then large extraction/authoring gaps. Standalone decisions come last. Complexity is relative engineering/content integration effort, not hours; every variant still needs independent pedagogy and quality review.

Each basket contains **3–5 families**. To keep a future Work run manageable, create **at most four complete variants per run**, then repeat the same basket. The basket total is its full backlog, not a request to mass-generate 14–25 lessons in one run. New thumbnail variations can usually reuse crops/compositions of approved world art; none require rebuilding the existing world.

### Batch 1 — Expand established multi-level engines

**14 absent variants · production-candidates.** Most mature shared dispatchers and distinct existing banks; two families already cover three levels.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| Red Flag o No | A1, C1, C2 | low | Reuse RedFlagGame + engine.mjs. Move level configuration into typed content modules when extending; add level-specific scaffolds, teacher guidance and finales. No new visual engine required. | Thumbnail variation per approved new level; reuse existing world art |
| Let’s Talk | B2, C1, C2 | low | Retain ChooseConversation renderer and talkVariants; add per-level support content and genuine task banks, not new pages. No new shared engine. | Thumbnail variation per approved new level; reuse existing world art |
| La máquina que elimina cosas del mundo | B2, A1, C1, C2 | low | Reuse protected ConversationWorldFamily and shared prop-driven ConversationWorld. Keep machine and rules as separate concepts despite shared renderer. Extend typed banks/closings and explicit family+level storage keys; current A2/B1 keys are separate but implicit B1 naming does not scale safely. | Thumbnail variation per approved new level; reuse existing world art |
| Tu vida con una regla absurda | B2, A1, C1, C2 | low | Reuse same protected family host and prop-driven world renderer; author separate rule banks, support and closings. Explicit level storage keys needed when expanding. No new scene engine. | Thumbnail variation per approved new level; reuse existing world art |

**First recommended run:** Red Flag o No **A1**; Let’s Talk **B2**; La máquina que elimina cosas del mundo **B2**; Tu vida con una regla absurda **B2**. Four families, four new variants; ten further gaps remain in this basket. Preserve all existing banks and thumbnails.

### Batch 2 — Complete other existing multi-level foundations

**16 absent variants · production-candidates.** Existing level dispatch and reusable maps/world; review USA B1 depth and Prohibidas B1 demands before extension.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| Reino Unido en Relieve | A2, B2, C1, C2 | high | No new visual engine. Extend UKLevel/variants contract to six with authored banks; abstract repeated relief-atlas primitives only if beneficial to Ireland/Switzerland, preserving the UK experience. | Thumbnail variation per approved new level; reuse existing world art |
| Australia en Movimiento | A1, B2, C1, C2 | medium | Extend question/variant schema for six levels and distinct support/mission/closing; reuse atlas/character assets and motion system. No new visual engine necessary. | Thumbnail variation per approved new level; reuse existing world art |
| ESTADOS UNIDOS | A1, B2, C1, C2 | high | Current engine already supports selection. Parameterize level-specific supports, mode prompts, mission and content selection beyond hardcoded A2/B1. Expand B1 uniqueness before treating the geographic count as depth; do not copy JSX. | Thumbnail variation per approved new level; reuse existing world art |
| El Reino de las Preguntas Prohibidas | B2, C1, A1, C2 | medium | Shared KingdomExperience already dispatches separate A2/B1 data. Keep castle assets and mechanics, extract supported variant type plus teacher notes. A1 needs substantially more concrete question worlds/support; advanced bank is useful material for B2/C1 after review. | Thumbnail variation per approved new level; reuse existing world art |

### Batch 3 — Strong interactive singleton seeds

**20 absent variants · production-candidates.** Recognizable exploration, body map, roulette and social-encounter mechanics; retain each separate identity.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| La ciudad no duerme | A2, B2, A1, C1, C2 | medium | Reuse CityGame motion/camera and CityDialogue components. Extract geometry/assets from level-specific stop dialogue; pass variant into CityExperience, CityDialogue and CityGuide (currently content imports are shared singletons). Add keyed state when additional levels arrive. No new shared city engine required. | Thumbnail variation per approved new level; reuse existing world art |
| La vida después de los 30 | A2, B2, A1, C1, C2 | high | Reuse camera/pin/modal design and images, but activity-document.ts line 2 contains entire HTML/CSS/JS/questions. Extract pedagogical arrays, support/closings and progress key into a configurable document or component before adding levels; do not copy whole HTML string five times. | Thumbnail variation per approved new level; reuse existing world art |
| La Ruleta de Tu Vida | A1, B1, B2, C1, C2 | low | Reuse wheel/topic UI and data schema; make topics/slang/closing/teacher guidance explicit variant props, add ConversationFamily and keyed state. Do not merge into Let’s Talk: non-repeat chance-based wheel, bilingual scaffold panels and Argentine challenge are materially different mechanics. | Thumbnail variation per approved new level; reuse existing world art |
| La Noche de las Invitaciones Cruzadas | A2, B1, B2, C1, C2 | medium | Extract Guest and stage-specific content/support banks. Reuse invitation matching and seating engine; advanced levels need richer guest intention/context records and teacher roles, not longer biographies alone. | Thumbnail variation per approved new level; reuse existing world art |

### Batch 4 — Detailed country atlas seeds

**20 absent variants · production-candidates.** Rich existing geographic engines and data; content differentiation and CEFR review precede multiplication.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| MÉXICO | A2, B2, A1, C1, C2 | medium | Extract level-aware Mexico experience and data variants; reuse map, region filter, modes and local facts. Higher levels require genuinely different tasks/followups, not more substitutions. | Thumbnail variation per approved new level; reuse existing world art |
| Irlanda en Relieve | A2, B2, A1, C1, C2 | high | Extract a typed local relief-atlas engine or reuse/refactor UK pattern with country slots; add level-specific questions, place prompts, contexts, missions, supports and closing. New map art not necessary. | Thumbnail variation per approved new level; reuse existing world art |
| Suiza en Relieve | A2, B2, A1, C1, C2 | high | Extract relief-atlas render primitives and explicit variant props; keep canton geometry/world. Add independent level tasks/place prompts/mission/support/closing rather than cloning 163-line page. | Thumbnail variation per approved new level; reuse existing world art |
| Israel en Capas | A2, B2, A1, C1, C2 | high | Extract Israel level-prop engine and level-specific tasks/supports; keep original B1 accessible unchanged while adding genuinely reviewed variants. High-level nuanced tasks can inspire later B2/C1 without representing current availability. | Thumbnail variation per approved new level; reuse existing world art |

### Batch 5 — Concrete travel/world seeds

**20 absent variants · production-candidates.** Supported original travel exchanges and strong visual foundations; review dormant USA road-trip bank before writing overlapping material.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| Buenos Aires en la Calle | A1, B1, B2, C1, C2 | medium | Extract page body to a level-prop city engine; separate level-specific stop pedagogy, openPrompts and support while retaining scene IDs/atlas coordinates. No new visual engine required. | Thumbnail variation per approved new level; reuse existing world art |
| Argento Roleplays | A2, B1, B2, C1, C2 | medium | Extract a typed Scenario/variant contract and level-prop dialogue renderer; preserve read→turn mechanism and original A1 models. Higher levels need different role goals, constraints, misunderstandings and register/implicit meaning, not longer models only. | Thumbnail variation per approved new level; reuse existing world art |
| El Mundo Fantástico | A2, B1, B2, C1, C2 | high | Extract typed per-level question generation/content module and a destination-world engine. Preserve image queries/credits/cache and scaffold components; higher levels need different communicative mechanics and role/constraint support, not longer prompts alone. | Thumbnail variation per approved new level; reuse existing world art |
| Estados Unidos · Coast to Coast | A2, B1, B2, C1, C2 | medium | Extract a level-prop road-trip engine. Review/adapt the orphan higher-demand bank as a possible future level, with explicit level designation and entitlement review; preserve original A1. Do not merge the paid road trip into the free 50-state atlas. | Thumbnail variation per approved new level; reuse existing world art |

### Batch 6 — Reusable decision/game seeds

**20 absent variants · production-candidates.** Reusable interaction primitives; preserve different scenario identities and review city-governance demand.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| ¿Y ahora qué? | A2, B2, A1, C1, C2 | medium | Reuse PlayShell, cards and chat reveal components; external data is already separated. Extract embedded prompts/session sizing into level configs, pass genuine support banks to shell, wrap with ConversationFamily and reset state by level. No new cross-family engine needed. | Thumbnail variation per approved new level; reuse existing world art |
| Uno o el otro | A2, B2, A1, C1, C2 | medium | Reuse PlayShell and choice engine. choices.ts is already external; extract triples/rankings/ideal prompts and instruction text from page into per-level configs, make support actual variant data, add family/keyed state. No new shared renderer. | Thumbnail variation per approved new level; reuse existing world art |
| Ciudad en juego | A2, B2, A1, C1, C2 | medium | Reuse PlayShell and current city metrics/stage components. Parametrize banks, stage instructions, support and boss; content data already separate. Add family wrapper, keyed state and pass real per-level support (PlayShell currently only relabels generic supportLevel). No new visual city engine. | Thumbnail variation per approved new level; reuse existing world art |
| El Cine de las Tres Funciones | A2, B1, B2, C1, C2 | medium | Extract film/showtime/guest/problem/support banks; reuse cinema-stage engine and ticket. Higher variants add reviews, programming constraints and audience/curatorial roles rather than copying A1 questions. | Thumbnail variation per approved new level; reuse existing world art |

### Batch 7 — Complex narrative and simulation seeds

**20 absent variants · production-candidates.** Distinct strong worlds with large gaps; more work to isolate state, scaffolds and level-specific negotiation.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| La Ciudad del Futuro | A2, B2, A1, C1, C2 | medium | Content already separated as District/FutureQuestion. Parameterize district bank, labels, tools, translations and challenge instructions; retain scene keys/map/balconies. Wrap ConversationFamily and reset visited/question state per level. Need genuine level-specific tasks and closing, not only alternative question wording. | Thumbnail variation per approved new level; reuse existing world art |
| La isla vota | A2, B2, A1, C1, C2 | high | Data/renderer already separate. Add level-indexed IslandRound banks, optional governance/pressure complexity, speakingMoves, lexicon and teacher guidance. Reuse metrics/allocation/map/constitution components; parameterize initial resources and reset every session state by level. | Thumbnail variation per approved new level; reuse existing world art |
| La Noche de las Siete Llamadas | A2, B2, A1, C1, C2 | medium | Extract typed CallScenario and level banks, follow-ups, supports and closing questions. Reuse phone wall/operator engine; variable clue count and teacher resistance by level, ConversationFamily wrapper and level-reset state. | Thumbnail variation per approved new level; reuse existing world art |
| La Mesa de las Tres Ofertas | B1, C1, A2, C2, A1 | high | Extract offer/project/clause/teacher banks and typed stage descriptors. Reuse three-offer table and decision shell; parameterize number of constraints, response prompts and objections. No new global visual engine needed. | Thumbnail variation per approved new level; reuse existing world art |

### Batch 8 — Remaining broad-gap seeds

**25 absent variants · production-candidates.** Large banks or embedded scripts need careful extraction; keep both boards separate and review the A2 narrative demands.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| Indonesia Fantástica | A2, B1, B2, C1, C2 | medium | Extract questionsFor into level content modules; reuse archipelago engine and preserve authentic cultural data merge. Add variant-sensitive choices, sparks, mission and closing; no need to redraw map. | Thumbnail variation per approved new level; reuse existing world art |
| De eso sí hablo | A2, B2, A1, C1, C2 | low | Reuse BoardLesson, engine and BoardBank independently for this family. Add its own protected level dispatcher and ConversationFamily wrapper when new banks exist, preserving historical default and bank-specific state keys. No new board renderer needed. Shared component reuse is not a family merge. | Thumbnail variation per approved new level; reuse existing world art |
| No es tan simple | B1, C1, A2, C2, A1 | low | Reuse BoardLesson, engine and BoardBank independently for this family. Add its own protected level dispatcher and ConversationFamily wrapper when new banks exist, preserving historical default and bank-specific state keys. No new board renderer needed. Shared component reuse is not a family merge. | Thumbnail variation per approved new level; reuse existing world art |
| En Vivo en Diez Minutos | A1, B1, B2, C1, C2 | high | Extract Crisis/Solution, call and twist banks plus stage instructions. Preserve token accounting/control room engine. Parameterize budget, hidden facts, oral constraints, scaffolding and closing; key state by level. | Thumbnail variation per approved new level; reuse existing world art |
| El Teatro de las Coartadas | A1, B1, B2, C1, C2 | medium | Extract suspects/events/contradictions/questions plus level-specific verdict. Reuse suspect cards, timeline, timer and reveal engine; vary evidence burden, listening/retelling constraints and teacher notes. | Thumbnail variation per approved new level; reuse existing world art |

### Batch 9 — Deferred advanced originals: concept decision first

**20 absent variants · decision-only-deferred.** Standalone recommendation. Record gaps for completeness; do not schedule automatic lower-level production.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| El Ministerio de las Versiones | C1, B2, B1, A2, A1 | high | Extract CaseFile/Evidence plus finalQuestions and supports from page; retain bespoke archive engine, case certainty and register laboratory. Could share small evidence-disclosure/support controls with other narratives, not a universal lesson template. | Thumbnail variation per approved new level; deferred |
| La Agencia de Vidas Paralelas | B2, C2, B1, A2, A1 | high | Extract Dossier[]/values/supports/final questions; reuse the bespoke six-stage agency shell. Parameterize layer text and rewrite rules only when an approved variant exists; level-key all open/priority/ripple state. | Thumbnail variation per approved new level; deferred |
| El Protocolo Aurora | B1, C1, A2, C2, A1 | high | Extract protocol content and final bank from compressed page; reuse precedent ledger, telemetry and echo renderer. A configurable narrative stage rail/support dock may be shared; do not collapse Aurora with Island merely because both use governance. | Thumbnail variation per approved new level; deferred |
| La Sala de los Mensajes Fuera de Contexto | B1, C1, A2, C2, A1 | high | Extract message/repair/support banks; reuse prism, repair console and reveal sequence. Small shared disclosure/teacher-role components are optional. Actual context layers and interpretation prompts must be level-authored. | Thumbnail variation per approved new level; deferred |

### Batch 10 — Deferred bespoke/focused originals: concept decision first

**25 absent variants · decision-only-deferred.** Standalone recommendation protects precision, bespoke philosophy, advanced open discussion or imperative-only practice.

| Family | Absent variants | Complexity | Reuse / shared component | New visuals |
| --- | --- | --- | --- | --- |
| La Cámara de Presión | C1, B2, B1, A2, A1 | high | Question model and separated banks already exist. For an approved extra level, parameterize stage pools, labels, bank props and timer defaults, wrap with ConversationFamily and reset used questions by level. Do not treat question.family as CEFR family identity. | Thumbnail variation per approved new level; deferred |
| El Monasterio de las Ideas | C1, B2, B1, A2, A1 | high | Extract Room[] from the page only if useful; retain map geometry, artifact animations and philosophical depth controls. No new shared six-level engine warranted. A nearby advanced companion would require authored theses, moves and vocabulary, not badge changes. | Thumbnail variation per approved new level; deferred |
| El museo de las decisiones | C1, B2, B1, A2, A1 | high | Reuse generic lesson sections/disclosures. If immersive museum design is desired later, it is a NEW shared museum engine, with scene navigation/artifact model and content separation required; native:/clase/203 currently means generic adapter, not existing museum code. | Thumbnail variation per approved new level; deferred |
| Preguntas que dan ganas de hablar | B2, C2, B1, A2, A1 | medium | Extract Topic[] and add authored optional C1 depth/teacher prompts if later authorized. Reuse native tab/card shell. No need to merge or create another universal six-level deck; shared accessible topic navigation is optional. | Thumbnail variation per approved new level; deferred |
| Entrenador personal | A2, B2, A1, C1, C2 | medium | PersonalTrainer already reuses stage/counter utilities, but many instructions/frames are embedded in TSX and engine.mjs. Extract content/config only if expanding. Existing grammar focus should remain explicit rather than stretching same command-count mechanic into C1/C2. | Thumbnail variation per approved new level; deferred |

## Verification and reproducibility

Fresh checks against the canonical snapshot:

- Every active conversation ID appears once in `lessons` and exactly one family membership; all 49 routes resolve to actual source pages, including dynamic 203.
- All 52 existing family/level pairs match evaluated registry metadata and inspected content/dispatch; each of 200 null cells has exactly one queue item.
- All 48 historical resource fixture URLs still resolve to the correct canonical family; new 221 and the current UK resource slug are covered too.
- All 44 unique catalog thumbnail files exist; hashes and available dimensions are recorded in JSON.
- Family matrix, counts, orphan decisions, level reviews and batch membership in Markdown are rendered from the same JSON object.
- 32 existing targeted tests passed, zero failures and zero skips, including shared-engine SSR.
- JSON parsing and structural reconciliation, evidence path/range validation, Markdown agreement and `git diff --check` pass.
- Final diff is restricted to the two requested audit files.

Targeted command:

```sh
node --test tests/conversation-families.test.mjs tests/conversation-variants.test.mjs tests/conversation-resources.test.mjs tests/country-flagships.test.mjs tests/red-flag-o-no.test.mjs tests/conversation-family-rendering.test.mjs
git diff --check
python -m json.tool docs/lessons/conversation-family-audit.json >/dev/null
```

To refresh: evaluate `lessons`, `conversationFamilies`, `catalogLessons`, `resourceSlugForLesson` and `lessonForResourceSlug` from current main, then reconcile the ID set, every available-level pair, active route pages, legacy aliases and thumbnails. Re-review changed content before updating the corresponding family or CEFR judgment. The current JSON is the source snapshot for the next production tasks, not a substitute for fetching fresh main.

Limitations: no full application build or production/live-entitlement check was needed for a docs-only change. FREE/PRO comes from source policy. Source/asset inspection and SSR are not mobile/browser visual QA, learner testing or formal CEFR certification. No production systems, database data, credentials, auth, billing, domains or release-controller state were modified.
