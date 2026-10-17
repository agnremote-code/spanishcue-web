# Feria de Villaluz: Look contract and A2 authoring format

- Owner: Sofia (LESSON-DECISION-001 v5 §4, AM-4). Date: 2026-10-17.
- Code: `app/la-feria-de-villaluz/look-contract.mjs` (+ `.d.mts`). Tests: `tests/feria-look-contract.test.mjs`.
- Status: **PROVISIONAL until Martin's D6 visual check** (QA device, DPR ≈ 1.2, ~8–10 m, low mode). Any item that fails is removed from the data file; the checker then rejects every set that used it.

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
