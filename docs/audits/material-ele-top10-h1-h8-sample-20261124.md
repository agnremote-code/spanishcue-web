# Martin: BOARD-DECISION-007 §3.4 early-trigger sample, 2026-11-24

Scope: the 10 most-clicked generated topic-level pages (Search Console, 2026-10-25..11-21), checked against hub clauses H1, H8, H6 and H4 (§3.2). Source: page objects from the generator on main `dce909f` (`sample-pages.json`), `app/material-ele/temas.ts`, `app/material-ele/[slug]/[tema]/[nivel]/page.tsx`, `app/material-ele/components.tsx`, `app/lesson-catalog.ts`, `app/access-policy.ts`, `app/material-ele/audios-gratis.json`. I edited no repository file.

## Verdicts

| # | Page | H1 | H8 | H6 | H4 | Verdict |
|---|---|---|---|---|---|---|
| 1 | formatos/comprension-auditiva/a1 | PASS | **FAIL** (F1, F2) | PASS (note N2) | note N1 | **FAIL** (template copy, fixed in 2 lines) |
| 2 | formatos/comprension-auditiva/b1 | PASS | **FAIL** (F1, F2) | PASS (N2) | N1 | **FAIL** (same) |
| 3 | cultura/fiestas-y-tradiciones/b2 | PASS | PASS | PASS (N2) | N1, N4 | PASS WITH NOTES |
| 4 | formatos/juegos-de-conversacion/b2 | PASS | **FAIL** (F1, F2) | PASS (N2) | N1 | **FAIL** (same) |
| 5 | formatos/juegos-de-conversacion/a2 | PASS | **FAIL** (F1, F2) | PASS (N2) | N1 | **FAIL** (same) |
| 6 | formatos/juegos-de-conversacion/c1 | PASS | **FAIL** (F1, F2) | PASS (N2) | N1 | **FAIL** (same) |
| 7 | formatos/comprension-auditiva/c1 | PASS | **FAIL** (F1, F2) | PASS (N2) | N1 | **FAIL** (same) |
| 8 | formatos/juegos-de-conversacion/a1 | PASS | **FAIL** (F1, F2) | PASS (N2) | N1 | **FAIL** (same) |
| 9 | cultura/fiestas-y-tradiciones/b1 | PASS | PASS | PASS (N2) | N1, N4 | PASS WITH NOTES |
| 10 | vocabulario/emociones-y-sentimientos/b2 | PASS | PASS (note N3, HYPOTHESIS) | PASS (N2) | N1, N5 | PASS WITH NOTES |

All 7 FAILs come from the same two **template** sentences in the `formatos` level copy. No class content, goal, prompt or audio failed. The level honesty of the class lists (H1) holds on all 10 pages.

**Classification caveat for the facilitator.** §3.2 H8 literally covers "authored content shown on the page". F1 and F2 are generated template text, not authored class content, so a strict reading puts them under H4. Your brief reads H8 more broadly ("false claim in text that reaches the page"). On that reading 7/10 sample pages, all in the topic-level family, fail H8. That is above the §5 threshold ("more than 2 of 10 … that family goes noindex until fixed"). Both defects are one-line copy fixes. Applying them at once, in the early-trigger PR §3.4 calls for, clears the condition with no noindex needed. I recommend fixing them now under either reading.

## Findings

### F1. False ordering claim on every `formatos` level page (H-severity). VERIFIED
- Text: section intro «De la clase más corta a la más larga: primero la que entra en media hora, después las que llenan una sesión entera.» and FAQ «¿Con cuál empiezo?» → «Con la primera de la lista: las clases van de la más corta a la más larga…». Source: `app/material-ele/temas.ts:291` (`order`, `faqStart`), rendered at `page.tsx` (`<Section id="clases" … intro={page.order}>`) and FAQ `temas.ts:342`.
- Why it is false: the list is sorted by free first, then entry level `lesson.level`, then `curriculumOrder` (`temas.ts:233`), never by duration. Catalog durations for page 1 run in this order: 242–263 «45–90 min», 236 «55 min», 240 «45–90 min», 130 «≈ 45 min» (`app/lesson-catalog.ts`, ids 242..130). So the list runs roughly longest to shortest. No class in the sample "fits in half an hour": the shortest is ≈45 min.
- The same page shows each duration on the class card (`app/material-ele/components.tsx:101`, `{lesson.level} · {lesson.category} · {lesson.duration}`), so the page contradicts itself where the teacher can see it.
- Pages: 1, 2, 4, 5, 6, 7, 8. The defect also reaches every other `formatos` level page (same template).

### F2. Wrong class name «El tren de las 23» (H-severity, minor). VERIFIED
- The title trim `lesson.title.replace(/:.*$/, "")` (`temas.ts:320` intro, `temas.ts:341` FAQ) cuts everything after the first colon. Class 256 is «El tren de las 23:40» (`app/lesson-catalog.ts`, id 256, route `/el-tren-de-las-2340`), so the FAQ lists it as «El tren de las 23», which is a different, wrong title.
- Pages: 1, 2, 4, 5, 6, 7, 8 (FAQ «¿Qué parte de … corresponde a X?»). Not on 3, 9 or 10, which do not list 256.

### H1, level honesty. PASS on all 10. VERIFIED (catalog), with one HYPOTHESIS limit
- Every listed class includes the page's level in `levels` (or `level` for single-level classes), as enforced by `temas.ts:313`. Multi-level worlds are listed as A0–C2 (HR Crisis 258 as A1–C1, so it appears on A1 and C1 but not C2: correct). Noche abierta (223) has `level:"B1"` but `levels` A0–C2, and its subtitle says «Elige tu nivel adentro, de A0 a C2» (`app/lesson-catalog.ts:170`), so it is acceptable on A1, A2 and C1.
- Goals, warm-ups and prompts come only from single-level classes (`temas.ts:335-337`): page 1 from 130 (A1), page 2 from 132 (B1), page 7 from 134 (C1), page 4 from 206/209 (B2), page 5 from 241/207 (A2). All match their level. Pages 3, 6, 8, 9 and 10 show none.
- H1 and intro: level words match (`levelPhrase`, `temas.ts:284`).
- HYPOTHESIS, not checked: that every multi-level world really implements each catalog level inside the world. I relied on the catalog `levels` field, as the hub standard does.

### «perdón que nunca pediste» (page 1). VERIFIED
- Source: class 243 «Más allá» speaking prompt (`app/lesson-catalog.ts:139`). It is in the topic object's `tema.speaking`, but the level page renders only `page.speaking` (`page.tsx`, «Para conversar» block). Page 1's `speaking` is `[]`. The level page never reads `tema.speaking`, and `TemaCards` shows only name, span and counts (`tema-components.tsx:23-31`). **It cannot reach the A1 level page.**
- On the topic page `/material-ele/formatos/comprension-auditiva` it still appears. That page states «A0–C2» in its title, description and FAQ (span computed from its classes, `temas.ts:233-240`). So it is level-honest under H1 for topic pages.

### H6, free claims. PASS on all 10. VERIFIED
- Pages 1 and 2: «4 audios gratis con preguntas y transcripción» is true. `audios-gratis.json` holds exactly 4 clips each for A1 and B1 (A1: usa-a1-florida, mexico-a1-cdmx, usa-a1-california, mexico-a1-jalisco; B1: usa-b1-hawai, mexico-b1-oaxaca, usa-b1-california, mexico-b1-jalisco). The page renders them (`page.tsx`, `freeAudiosForLevel`), and the mp3s are public under `public/audio/escucha-3d-libre/`.
- FAQ «abre la clase gratis de este nivel en Material ELE por nivel» is true for A1–C2. The free list (`isFreeLesson`) includes A1 (40, 41, 239, 332…), A2 (350, 358, 374…), B1 (389, 390, 402, 210), B2 (436, 439, 461), C1 (468, 480, 481) and C2 (507, 515, 523).
- N2 (note): the clause «**Para probar el formato**, abre la clase gratis de este nivel» is misleading. On B2 and C1 the free classes are grammar classes, not this format, and on the culture pages the word «formato» does not fit at all. The free class exists, so the sentence is not false.

### H8, audio samples (pages 1–2). PASS with a level note
- usa-a1-florida (A1): natural, correct Spanish with a Cuban receptionist and an Ecuadorian guest. Questions and answers match the transcript. Note: «¿Adónde fuiste esta mañana?» uses the pretérito indefinido, which the PCIC places at A2. That is acceptable as a receptive chunk in context and valid Latin American usage with «esta mañana», but it sits at the top edge of A1. Label: HYPOTHESIS-level judgment, note only.
- mexico-a1-jalisco (A1): correct. «me mancho toda la camisa» is colloquial present; «me manché» would be more neutral, but it is not an error.
- mexico-b1-oaxaca (B1): correct and level-appropriate. The cultural details (Auditorio Guelaguetza tickets, the popular Guelaguetza, pan de yema) are plausible and consistent. The ticket price «casi dos mil pesos» I did not verify against a source: HYPOTHESIS, plausible.

### H4, copy quality (notes, not early-trigger)
- **N1. Template closing clause is semantically broken.** VERIFIED. `temas.ts:332` appends «{tema} para decir lo que quiere decir» to each group's `where` (`temas.ts:291`, `:290`). Results:
  - «…hay un momento en que necesita comprensión auditiva para decir lo que quiere decir» (1, 2, 7): you do not need listening comprehension in order to speak.
  - «…necesita juegos de conversación para decir lo que quiere decir» (4, 5, 6, 8): meaningless.
  - «…para que practique fiestas y tradiciones para decir lo que quiere decir» (3, 9): two final clauses in a row, and «practicar fiestas» is not natural Spanish.
- **N3. Vocabulary order claim** (page 10) «De la escena más simple a la más exigente…» and FAQ «de la escena más guiada a la más abierta, y el léxico se recicla de una a otra» (`temas.ts:288`). The real order is entry level (seven A0-entry worlds, then 429 B2). The claim is unverified and probably not true by construction. HYPOTHESIS. Fix in the same style as F1 when the copy is next touched.
- **N4. Topic fit** (pages 3, 9): «El consorcio» and «Objetos perdidos» are listed under Fiestas y tradiciones by the regex at `temas.ts:206` (`\bboda\b|\bferia\b|…`). Fit not checked: HYPOTHESIS. Not an H clause.
- **N5.** Page 10 lists and features 429 «Subjuntivo tras verbos de influencia en pasado», a grammar class matched by the broad emociones regex (`temas.ts:164`, which includes `relaciones|\bpareja\b|\bamor\b`). The description «8 clases interactivas con escenas reales, audio y tarea oral» is likely not true of a grammar class. HYPOTHESIS. Note only.
- The intro and FAQ claim «14 clases con voces de distintos países» (pages 1 and 2) was not verified world by world. HYPOTHESIS, note.

## Proposed fixes

### H-severity (apply now, §3.4 early trigger)

**F1.** `app/material-ele/temas.ts:291`, in the `formatos` entry of `levelCopy`, replace only these two values:
- `order`:
  - old: `"De la clase más corta a la más larga: primero la que entra en media hora, después las que llenan una sesión entera."`
  - new: `"Cada tarjeta indica el nivel y la duración de la clase; dentro del formato, cada una cambia la situación y el léxico."`
- `faqStart`:
  - old: `"las clases van de la más corta a la más larga, y dentro del formato cada una cambia la situación y el léxico"`
  - new: `"cada tarjeta indica la duración de la clase, y dentro del formato cada una cambia la situación y el léxico"`

The FAQ then reads «Con la primera de la lista: cada tarjeta indica la duración…». The new wording is true by construction: the cards render level and duration at `components.tsx:101`. No test pins the old strings (grep of `tests/` for «más corta», «quiere decir», «probar el formato» returns nothing).

**F2.** `app/material-ele/temas.ts:320` and `:341`: change `lesson.title.replace(/:.*$/, "")` to `lesson.title.replace(/: .*$/, "")`. That trims only a colon followed by a space, so «Madrid infectada: el último brote» → «Madrid infectada», as before, while «El tren de las 23:40» stays whole. This is a one-character template change; if the facilitator reads §3.6 as copy-only, it is the copy fix for the class name. The FAQ answer has no bound, so the description and title length bounds are unaffected.

### Notes (next copy PR, not urgent)
- N2: `temas.ts:342`, change «Para probar el formato, abre la clase gratis de este nivel en Material ELE por nivel.» to «Para ver cómo funciona una clase completa, abre una clase gratis de este nivel en Material ELE por nivel.» This mirrors the topic-page wording at `temas.ts:252` and keeps «gratis», so G-H6 still applies.
- N1: give `LevelCopy` its own closing sentence instead of appending «{tema} para decir lo que quiere decir» at `temas.ts:332`. For example, formatos: «…a medida que el alumno sube, y todas terminan en una conversación.» Cultura: «…con escuchas por zona y preguntas sobre la vida real que el alumno compara con la suya.» Grammar, vocabulary and functions can keep the current ending, which reads correctly there («necesita el subjuntivo para decir…»).
- N3: rewrite the vocabulary `order`/`faqStart` (`temas.ts:288`) in the same neutral style as F1.
