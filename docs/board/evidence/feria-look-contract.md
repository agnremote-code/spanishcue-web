# Feria de Villaluz: Look contract and A2 authoring format

- Owner: Sofia (LESSON-DECISION-001 v5 §4, AM-4). Date: 2026-10-17.
- Code: `app/la-feria-de-villaluz/look-contract.mjs` (+ `.d.mts`). Tests: `tests/feria-look-contract.test.mjs`.
- Status: **PROVISIONAL until Martin's D6 visual check** (QA device, DPR ≈ 1.2, ~8–10 m, low mode). Any item that fails is removed from the data file; the checker then rejects every set that used it.
- **2026-10-21:** a SwiftShader render pass rated every value (§5). Values that were not clearly legible no longer count as a distinguishing difference. This is **not** the real-device check of G5(b), which is still open.

## 1. What the renderer really shows (people3d, read from `app/noche-abierta/people3d.ts`)

A Busca figure is plain data. `lookOf(figure)` turns it into a fixed people3d `Look` and pose. The 2D SVG figure is drawn from the same record (AM-3).

| Attribute | Values (Spanish words a description may use) | Tier |
|---|---|---|
| age | child (niño/niña), young (joven, chico/chica), adult (hombre/mujer, señor/señora), old (mayor, abuelo/abuela) | A |
| body | f / m (only counts if `body:` is described) | A |
| top | tshirt camiseta **A** · dress vestido **A** · coat abrigo **A** · apron delantal **A** · hoodie sudadera B · shirt camisa B · sweater suéter B · jacket chaqueta B | mixed |
| bottom | skirt falda **A** · pants pantalón **A** · shorts pantalones cortos **A** · jeans B (fixed denim colour) | mixed |
| topColor / bottomColor | rojo, azul, verde, amarillo, naranja, morado, rosa, blanco, negro, gris, marrón (one fixed hex each) | A |
| hair | short pelo corto **A** · long pelo largo **A** · afro **A** · bald calvo/a **A** · cap gorra **A** · ponytail coleta B · bun moño B · curly pelo rizado B · braids trenzas B | mixed |
| hairColor | rubio **A**, moreno **A**, pelirrojo **A**, canoso **A**, castaño B | mixed |
| height | alto/a, bajo/a: relative only, same age band, gap ≥ 0.15 m | B |
| pose (estar + gerundio) | bailando **A**, tocando la guitarra **A**, saludando **A**, señalando **A**, llevando una caja **A**, sentado/a **A**, hablando por teléfono B, leyendo B, brazos cruzados B | mixed |
| holds | maleta **A**, paraguas B, flores B, mapa B | mixed |
| extras (presence only) | mochila **A**, gafas B, barba B, bolso B, bufanda B | mixed |
| location | a la izquierda de, a la derecha de, delante de, detrás de, al lado de / junto a: in the circle's fixed view (camera snaps to the hero heading while a Busca card is open) | A |

**Confusable pairs** never count as the distinguishing difference (they may still be named):
- colours: naranja/amarillo, naranja/rojo, rosa/rojo, gris/blanco, negro/marrón, morado/azul, and azul vs jeans;
- hair colours: castaño/moreno, castaño/pelirrojo, rubio/canoso;
- tops: camisa/suéter/chaqueta/sudadera, which share one long-sleeved silhouette;
- bottoms: pantalón/jeans;
- hair: corto/rizado, rizado/afro, largo/trenzas, coleta/moño.

**NOT AVAILABLE** (the checker rejects the word):
- patterns (rayas, cuadros, lunares, estampado), logos, letters;
- shoes (zapatos, zapatillas, botas);
- **sombrero / gorro**, because people3d picks the hat kind and its colour at random;
- pendientes, collar, reloj, bigote on its own, eye colour, auriculares;
- body shape (gordo/flaco) and skin, by policy;
- mood or face (contento, triste, sonriendo);
- "llevando algo".
- **Presence only:** colours of mochila, bolso, bufanda and gorra are drawn at random, so "mochila roja" is rejected.

## 2. AC2/AC4/AM-4 rules the checker enforces (`validateBuscaSet`)
1. 3–4 distractors. Every value is on the contract, and the target matches every described feature.
2. Every distractor differs from the target in ≥ 1 described feature, counting only non-confusable differences.
3. No single described feature rules out all distractors, so ≥ 2 are needed.
4. ≥ 1 distinguishing feature is not a colour, and ≥ 1 is Tier A.
5. Distractors share the target's age band unless `age:` is described, and the target's body unless `body:` is described.
6. The target's pose and held object aren't unique (AC4). Slots are ≤ 10 m from the circle.
7. The announcement text contains a word for every described feature and no NOT AVAILABLE word or presence-only colour.
8. AC3: `feedbackFor(set, pick)` returns «No, no es esa persona. La persona del aviso lleva una camiseta amarilla.», naming a mismatched feature and preferring one that isn't a colour.

## 3. Where Martin authors (two files; Sofia never edits them)
- `app/la-feria-de-villaluz/levels/a2.mjs`, with named exports:
  - `SCENES`, keyed by circle id `informacion, churreria, tombola, noria, artesania, escenario, fotos, baile`. Each scene is the hospital scene shape (`title, line, dialogue: [[who, text]], ask, options: 3 × {say, reply, end, mood}, talk: 5, words`) **plus**:
    - `objective` (the primary id, AM-2) and `review` (ids);
    - `exponents` (3–6 strings, G1);
    - `beats` (N1: one entry per interactive beat, `{ beat: 'options'|'busca'|'talk'|'listening', label: 'contrast'|'stimulus', exponent? }`; every `exponents` item must be targeted by some contrast beat);
    - `teacher` (a short teacher note);
    - `busca` (ids of sets in `BUSCA`, circles 1/6/7 only).
  - `BUSCA`: array of sets `{ id, circle, kind: 'find'|'transfer', text, voice, speaker, described: ['top:dress', 'topColor:rojo', …], target, figures: [Figure…], landmarks? }`. The Figure shape is in `look-contract.d.mts`. One `transfer` set, unseen, not reused from circles 1/6 (AC10).
  - `ROUTES`: `{ conversacion: [{ circle, minutes }…], escucha: [...] }`. The ids are circle ids plus `'warmup'` and `'closing'`. AM-1: the conversación route contains 1, 6 and 7, and both routes end in `closing`.
  - `CLOSING`: `{ roleplay: { title, setup, prompts: [] }, narrative: { prompt, frame: [] }, selfCheck: [6 items, the last one the imperfecto background sentence], transfer: '…' }` (AC9).
- `app/escucha-3d/content/feria/a2.json`: 8 items in circle order, following the README rules (A2 70–120 words, ≥ 6 countries).
- Martin's GROW-001 overlap note stands: circle 3 (`a2.fun.favores`) is a new situation and new text.

## 4. BOARD-DECISION-001 fields to add (confirmed)
- **G1:** `objective` + `exponents` (3–6) per circle, machine-checked against `app/autoestudio/curriculum/objectives/a2.ts`.
- **N1 beat labelling:** the `beats` list above, so the checker fails a scene whose exponent has no contrast beat.
- **Routes as data** (`ROUTES`) feeding **E1**: progress = round(100 × route circles done ÷ route circles), and 100 only on the closing «Terminar». Any KPI uses the N4 wording only.
- **G2 (guideline):** ≥ 1 contrast beat per scene. It's reported by the checker, not a blocker.
- **Risk 4 update:** Martin authors, and **G4 review is by Alejandro or a fresh agent**, never the author. G5 legibility (the D6 Look check) stays with Martin.
- **LQG file:** `docs/audits/la-feria-de-villaluz-pedagogy-YYYYMMDD.md` (G3 `test:language`, G4, G6 level honesty, beat labelling).

## 5. 2026-10-21 SwiftShader render update (D6 substitute; NOT the G5(b) real-device check)

**What was rendered.** `scripts/qa-feria-browser.mjs --look` (Sofia):
- the real World3D low-power path: coarse pointer, DPR 1.25, no AA, no shadow maps, no bloom;
- the real Busca camera and the real default slots, about 8–9 m from the figures;
- two views: tablet 1180×820 and phone 390×844;
- one attribute changed per shot, everything else neutral.

It ran under SwiftShader (software WebGL) in headless Chromium. Colours, aliasing and brightness on a real phone panel can differ, so **G5(b) (one real-device check per new world) is still required**. A value can only be promoted by a new render or device check.

**Verdict and evidence:** `feria-look-2026-10-21/LOOK-VERDICT.md`, plus representative crops in the same folder.

**Data and checker** (`look-contract.mjs`, `D6.ratings`, `legibility()`):

| Rating | Values |
|---|---|
| legible | age child · top vestido, delantal · bottom falda, pantalón · top colours rojo, naranja, amarillo, rosa, azul, verde, blanco, negro, gris · bottom colours rojo, azul, verde, amarillo, rosa, blanco, gris · hair corto · hair colours rubio, moreno, pelirrojo, canoso · poses guitarra, saludando, señalando, llevando una caja, leyendo · maleta · location relations |
| marginal | top camiseta, abrigo · pantalones cortos, jeans · top colours morado, marrón · bottom colours naranja, morado, negro · afro, calvo, gorra · castaño · alto/bajo (slot depth ±0.5 m cancels a 0.14 m gap) · bailando, sentado, teléfono, brazos cruzados · paraguas, flores, mapa · mochila, bolso, barba |
| illegible | age joven/adulto/mayor · body f/m · sudadera, camisa, suéter, chaqueta · bottom colour marrón · pelo largo, coleta, moño, rizado, trenzas · gafas, bufanda |

**Rules:**
- A marginal or illegible value may still be **named** in an announcement when the target has it, but it never counts as the difference that rules a distractor out.
- AC2's **Tier A** may only come from a legible value.
- An age difference counts only between a child and a non-child.
- A dress colour is rated as a top colour.

**New confusable pairs:**
- vestido/abrigo;
- camiseta vs every long-sleeved top;
- sudadera/camisa;
- pantalón/pantalones cortos;
- pelo corto vs largo, coleta, moño, trenzas, calvo, gorra and afro (from the front they all read as short hair).

**Tests:** `tests/feria-look-contract.test.mjs`. Every contract value has a rating; no non-legible value distinguishes; the new pairs are confusable; a named-only value still passes; a marginal pose can't supply Tier A.

**Authored sets that fail the new rules** (Martin revises them):

| Set | Why |
|---|---|
| informacion-emilio | gabriel differs only in `bottom:shorts` (marginal), and the only other distinguishing feature is a colour (AC2) |
| informacion-abuelo | ramon differs only in `hair:bald` (marginal); ignacio only in `topColor:marron` (marginal) |
| escenario-bruno | mauro differs only in `hair:cap` (marginal; the cap colour is random) |
| fotos-nico | joel differs only in `hair:cap` (marginal) |
| transferencia-amparo | pilar differs only in `hair:short` (reads like her hair from the front); dolores only in `pose:dance` (marginal) |

escenario-valentina and fotos-ines still pass.

## 6. Busca framing fix (2026-10-21)

The render check showed three framing faults:
- candidates hidden by the mascot (slot 2) and by the escenario host (slot 1);
- the informacion camera inside the stall awning (a blue wedge across the frame);
- slot 4 half out of frame on a 390 px portrait phone.

**Fixes:**
- `layout.buscaCamera()` is used by World3D and by the tests. It stays behind the mascot and looks along his heading, so screen-left is still his left (risk 3). It is raised to 4 m, which puts the mascot's head below the candidates' feet, and its FOV widens until every candidate and its number fits the screen at any aspect.
- The informacion view now faces south into the plaza, so the camera is clear of the stall.
- The escenario host and the baile host moved out of the view.
- The active circle's gem hides during Busca.
- One scene-wide directional fill light comes from the camera while a Busca card is open. It lights everyone equally, so it adds no target highlight (AC4).

**Test:** `tests/la-feria-de-villaluz.test.mjs`, «Busca framing». It projects the camera in screen space and checks the mascot, every host, the crowd, the stalls and the poles against every candidate:
- every Busca place and every authored set;
- tablet, laptop and 390 px portrait;
- 4 and 5 slots.

**Trade-off:** on a 390 px portrait phone the FOV reaches 81–94°, so candidates are small, about 70–90 CSS px tall. They are complete but less legible than on a tablet or a shared screen.

**Evidence:** `feria-look-2026-10-21/after-*.png`.

## 7. T5 draw calls, low mode (measured 2026-10-21, SwiftShader)

**How it was measured:**
- Command: `node scripts/qa-feria-browser.mjs --calls`.
- Real WebGL draw calls are counted on the context and averaged over 10 frames, after 15 frames to settle.
- Setup: coarse pointer, DPR 1.25, tablet 1180×820 and phone 390×844.
- Places: every place a class stops at, meaning the free view at the spawn, the 8 circle cameras and the 4 Busca places (4 candidates).
- Hospital San Casi Vivo was measured in the same harness for reference.
- This is a count, not an fps figure: T5's fps target on the QA Android is still a manual check.

| World and view | Before (min · median · max) | After (min · median · max) |
|---|---|---|
| feria tablet | 101 · 288 · 618 | **67 · 88 · 98** |
| feria phone | 43 · 168 · 402 | **43 · 66 · 74** |
| hospital tablet (reference, unchanged) | 96 · 326 · 1420 | — |
| hospital phone (reference, unchanged) | 14 · 200 · 804 | — |

**Per place, after (tablet / phone):**
- spawn 76 / 70;
- circles 1–8: 98/64, 96/66, 91/56, 95/61, 89/58, 88/64, 88/43, 96/74;
- Busca: informacion 79/74, escenario 67/67, fotos 80/74, baile 74/74.

The "before" numbers already include the §6 framing change. With the old camera, Busca views measured 548–618 on tablet (§5 run).

**What changed (low path only; high mode is untouched):**
- `bake3d.ts` merges static meshes per material class. Plain materials become vertex colours, glowing parts become one unlit mesh, and textured blob shadows merge per texture.
- Baked: houses, stalls, the stage, the wheel frame, poles, the fountain and the circle discs.
- The wheel's spokes and rims are baked in the wheel's own frame, so it still turns.
- The 12 cabins are 2 instanced meshes that stay level.
- The §3 crowd of 10 is one baked group (no idle motion).
- The 8 hosts are a baked group. Only the host of the open circle is a live person (turns to the mascot and talks).
- Busca candidates are baked per set; the number labels stay sprites.

**Where the remaining ~70–98 calls go:**
- the animated mascot: about 43 meshes;
- the live host of the open circle: about 30;
- the visible circle rings and gems: 2 each;
- string bulbs: 1 instanced;
- about 10 baked material groups, the horizon, and the Busca labels.

The mascot is now the largest single cost.
