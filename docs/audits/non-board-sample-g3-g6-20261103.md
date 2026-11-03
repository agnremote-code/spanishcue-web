# Sampled LQG audit (G3 + G6 + §3.2) of non-board units, 2026-11-03

- Auditor: Martin (CLRQO). Read-only run on `claude/tuesday-seo-20261103` = origin/main `6e4a2e7`.
- Scope: W45 plan item 2 (docs/board/assessments/2026-W44.md §4.4, §6). **Sampled and non-retroactive.** It looks at units that shipped without an LQG file and audits a sample. It is not a re-gate of everything shipped.
- Standards: BOARD-DECISION-001 §3.1 N1 (G3 = `npm run test:language`; G6 = level honesty), §3.2 Indexable Teacher Page standard, CLAUDE.md §7–8, docs/LANGUAGE_POLICY.md.
- Labels: **V** = VERIFIED (quote + file:line or command output), **H** = HYPOTHESIS.
- No LQG pedagogy file exists for any sampled unit. V: `ls docs/audits | grep -i pedagogy` returns only `la-feria-de-villaluz-pedagogy-20261021.md`.

## 0. G3: `npm run test:language`

- Script (V, package.json:23): `node --test tests/neutral-spanish.test.mjs tests/english-copy.test.mjs tests/neutral-autoestudio.test.mjs tests/neutral-grammar.test.mjs tests/neutral-audio.test.mjs tests/neutral-conversation.test.mjs && node scripts/neutral-spanish.mjs && node scripts/check-english-copy.mjs`
- Result (V, one run): **exit 0**, with these lines:
  - `# tests 43` / `# pass 43` / `# fail 0`
  - `Neutral Spanish guard: 0 unresolved findings across 2051 source files.`
  - `ENGLISH COPY: UNCHANGED (10882 strings in 126 files; base 43e4b3eb…)`
- Unit-specific machine checks:
  - `node scripts/check-mas-alla.mjs` prints `Más allá: all levels pass.` and exits 0 (V).
  - `node scripts/check-madrid.mjs` prints `Madrid infectada: all scenes OK` and exits 0 (V).
- Limitation (V): the guard passes, but it misses at least one vosotros form in UI copy (§2 below). G3 passing is necessary. It does not prove policy compliance.

## 1. «Más allá: cielo e infierno» (catalog id 243, PR #292)

Catalog entry (V, app/lesson-catalog.ts:139): `levels:["A0","A1","A2","B1","B2","C1","C2"]`, `featured:true`. The content lives in `app/mas-alla/levels/{a0..c2}.mjs` (12 encounters per level) and in `app/mas-alla/voces/{a0..c2}.mjs` (listening voices).

### 1.1 Machine check, all seven levels (V, scratch script over every Spanish string, A0 counting only its `es` half)

| Level | Words (encounters) | Avg sentence length | Lexical types | Identical strings shared with the level below |
|---|---|---|---|---|
| A0 | 765 | 3.9 | 263 | — |
| A1 | 1,492 | 5.2 | 413 | 9 (titles and short options) |
| A2 | 2,255 | 6.7 | 623 | 11 (e.g. option «Mirar el móvil todo el día») |
| B1 | 2,937 | 8.0 | 889 | 10 (titles, options) |
| B2 | 3,288 | 10.2 | 1,094 | 1 |
| C1 | 3,529 | 10.7 | 1,300 | 1 |
| C2 | 3,943 | 11.7 | 1,541 | 3 |

- The voces files share 0 identical strings between any two adjacent levels (V).
- Length, sentence length and vocabulary rise monotonically. The levels are not relabels. Overlap is limited to titles and a few short option labels at A0–B1 (V).
- Pluperfect subjunctive and conditional perfect cluster at B2 in the encounters: 5 `hubier-` and 6 `habría-` forms (V). In the voces they cluster at B2 too: 17 and 24 (V).
- Each level file states its target in a header comment, e.g. app/mas-alla/levels/b1.mjs:1 «el condicional (¿qué harías?), el subjuntivo con «si supieras / si pudieras»». The student-facing hint is one line in app/mas-alla/levels.mjs (e.g. B2 «Hipótesis, arrepentimientos, matices») (V).

### 1.2 A2 in full (12 encounters, app/mas-alla/levels/a2.mjs)

- **Fits A2 (V):**
  - Short narrative past: «Morí a los veintinueve años, en un accidente de coche.» (a2.mjs:29).
  - Past routine in the imperfect: «Trabajaba catorce horas al día.» (a2.mjs:93).
  - Comparison: «Aquí soy más feliz que antes.» (a2.mjs:93).
  - Past-experience talk prompts: «¿Cuándo fue la última vez que pediste perdón a alguien?» (a2.mjs:20); «¿Cómo era tu vida hace diez años?» (a2.mjs:60).
  - Word lists are concrete and A2-sized (`'la carpeta', 'pesar', 'equivocarse'`, a2.mjs:21).
- **Differs from A1 (V):**
  - Same encounter: A1 asks «¿Qué es más difícil para ti: perdonar o decir «lo siento»?» (a1.mjs:15) with talk «¿Perdonas fácil o difícil? ¿Por qué?» (a1.mjs:21).
  - A2 adds a past-narrative talk prompt (a2.mjs:20).
- **Note: hypothetical structures above A2 (V).**
  - Four core prompts require si + imperfect subjunctive + conditional:
    - «Si te quedara solo un año de vida, ¿qué dejarías de hacer?» (a2.mjs:33)
    - «Si pudieras cambiar un capítulo de tu vida, ¿cuál cambiarías?» (a2.mjs:53)
    - «Si tuvieras un día más, ¿qué harías…?» (a2.mjs:202)
    - «Si pudieras cambiar una sola cosa de tu pasado…» (a2.mjs:241)
  - The unit itself names this structure as the **B1** target (b1.mjs:1). A1 shows the A-level way to phrase it: «Si tienes un año de vida, ¿qué no haces más?» (a1.mjs:34).
  - The answer options are fixed choices, so comprehension holds. But a2.mjs:202 and a2.mjs:241 are open talk prompts that invite production of a B1 structure.
  - H: an A2 student will answer in the present and the teacher will accept it, so this is a stretch and not a mislabel.
- **Objectives / teacher notes / closing (V):**
  - Per-level objective: header comment only (a2.mjs:1) plus the one-line hint.
  - Teacher notes: generic and level-independent, in the «Con profesor» mode, e.g. «Tu alumno piensa, elige y explica por qué.» (app/mas-alla/Encuentro.tsx:136).
  - Closing production: every encounter ends in two open «Más hondo» prompts, and the class ends in «El retrato de tu alma» with an oral task (MasAllaGame.tsx:429, :451).
  - There are **no per-level teacher notes** (CLAUDE.md §8 lists them).
- **Spanish (V):**
  - No errors found.
  - «¿Eres nueva? ¿Eres nuevo?» (a2.mjs:27) is a deliberate gender-open greeting. It reads a little stiffly but is acceptable.
  - Peninsular «el móvil» / «coche» appear inside character speech (a2.mjs:29, :38). That is allowed under LANGUAGE_POLICY as dialogue.
  - A1 «¿qué no haces más?» (a1.mjs:34) is a mild calque. «¿qué dejas de hacer?» is more natural.
- **Verdict A2: PASS WITH NOTES.**
  - Narrowest fix: rephrase a2.mjs:33/53/202/241 into A2-reachable forms, e.g. «Imagina: solo tienes un año de vida. ¿Qué dejas de hacer?».
  - Keep A2 in `levels`.

### 1.3 B2 in full (12 encounters, app/mas-alla/levels/b2.mjs)

- **Fits B2 (V):**
  - Past hypotheses: «Si hubiera sabido que iba a morir hoy, habría arreglado unas cuantas cosas.» (b2.mjs:9).
  - Regret: «Ojalá me hubiera arrepentido antes.» (b2.mjs:93).
  - Concession: «Por mucho que lo justifiques, el que paga eres tú.» (b2.mjs:16).
  - Abstract and idiomatic vocabulary: `'atreverse a', 'arrastrar', 'rendir cuentas'` (b2.mjs:21), «a contraluz», «el duelo» (b2.mjs:83).
  - Talk prompts ask for argued positions: «¿Crees que hay cosas imperdonables? Argumenta tu postura y explica dónde pondrías tú el límite, con un ejemplo concreto.» (b2.mjs:20); «Si existiera una pastilla para borrar un recuerdo concreto, ¿debería ser legal? Da argumentos a favor y en contra.» (b2.mjs:82).
- **Differs from B1 (V):**
  - B1's version of the same question is «¿qué pesa más: lo que no perdonaste a otros o el perdón que nunca pediste?» (b1.mjs:14), with personal-experience talk.
  - B2 moves to «el rencor que guardaste o el perdón que no te atreviste a pedir» (b2.mjs:14) and to argument and limit-setting.
  - Only 1 identical string is shared with B1.
- **Objectives / teacher notes / closing:** same structure as A2, with the same gap: no per-level teacher notes (V).
- **Spanish (V):**
  - Gabriel (Colombian voice) says «Nadie viene aquí a rendir un examen» (b2.mjs:8). «Rendir un examen» is Southern Cone usage; «hacer/presentar un examen» is more neutral.
  - H: this is a minor regional mismatch with the character's stated country. It is not a policy violation, because it is dialogue.
  - The C1 machine check found «ya no puedes coger el teléfono» (c1.mjs:12), also from Gabriel. «Coger» is avoided in much of Latin America; «contestar/agarrar/tomar» would be the neutral choice.
- **Verdict B2: PASS.** Optional polish: b2.mjs:8 and c1.mjs:12.

### 1.4 Unit verdict «Más allá»: **PASS WITH NOTES**

- G3 passes. G6 holds for all seven levels on machine evidence, and in full for A2 and B2. No level should be removed from `levels`.
- Notes:
  1. A2 hypothetical prompts sit at B1.
  2. There are no per-level teacher notes (CLAUDE.md §8). The «Con profesor» guide is generic.
  3. «A0» is a SpanishCue pre-A1 band, not a CEFR level (V, lesson-catalog.ts:139). This is a labelling note, not a G6 failure.
  4. H / out of scope: `featured:true` with no recorded G5 rendered verification. G5(c) says «Unverified» blocks the featured flag. This is for Sofia to confirm or record, not Martin.

## 2. «Madrid infectada» (catalog id 242), level B1 in full

The content is in app/madrid-infectada/levels/b1.mjs: 20 scenes, each with dialogue, a comprehension quiz with `why`, two talk prompts and words.

- **Fits B1 (V):**
  - Narration across the past tenses, including the pluperfect: «En veinte años de nocturnos no había visto nada parecido.» (b1.mjs:57).
  - Reported speech: «mis hijos me dijeron que lo dejara, que me jubilara de una vez» (b1.mjs:33).
  - Opinion and hypothesis talk at B1 demand: «Si tuvieras que elegir quién sube a ese tren, ¿qué criterio aplicarías…? Explica por qué…» (b1.mjs:302); «¿Confías más en los medios de comunicación grandes o en personas normales…? Explica por qué y da un ejemplo concreto.» (b1.mjs:22).
  - Inference quizzes, e.g. «¿Qué quiere decir Lola con su última frase?» (b1.mjs:16).
  - Some B2 input appears receptively: «Tres días que habrían bastado para que muchos se fueran.» (b1.mjs:200). This is acceptable as input.
- **Differs from A2 and B2 (V):**
  - In the radio scene, A2 has «Hola. Estoy vacunado. Vengo a ayudar.» (a2.mjs:8) and a literal quiz.
  - B1 has «Tranquila, estoy vacunado. He venido porque te escucho desde el primer día.» (b1.mjs:8) and an inference quiz.
  - B2's talk prompt is «¿qué es más peligroso: el silencio de las autoridades o la difusión de rumores sin contrastar? Argumenta tu postura…» (b2.mjs:22).
  - In Atocha, B2 asks the student to «anticipa las críticas a tu postura» (b2.mjs:302). B1 asks for «Explica por qué».
  - The adjacent-level identical strings (A2→B1: 21, B1→B2: 24) are scene titles and word-list items. No dialogue is shared (V, sample printed).
- **Machine check, all levels (V):** words 1,632 → 8,098 and lexical types 451 → 2,483 rise monotonically from A0 to C2. `check-madrid.mjs` passes.
- **Objectives / teacher notes / closing:**
  - The per-level objective is a header comment (b1.mjs:1) plus a one-line hint (levels-info.mjs) (V).
  - The teacher guide is generic, as in «Más allá» (V).
  - Closing production: each scene has «TU TURNO» talk, and the catalog lists final speaking tasks (lesson-catalog.ts:138) (V).
  - H: I did not trace the in-world ending screen.
- **Language policy (V):**
  - **Violation in UI copy:** «Tu alumno lee las líneas de «Tú»; las demás las **leéis** juntos o con la voz del navegador.» (app/madrid-infectada/SceneCard.tsx:97).
  - This is a teacher instruction, not dialogue. LANGUAGE_POLICY says the setting «does not exempt surrounding instructions, teacher notes or navigation».
  - «Más allá» has the correct form, «las leen juntos» (Encuentro.tsx:97).
  - The violation is level-independent, so it shows at every level.
  - The neutral-Spanish guard does not catch it.
  - Vosotros inside dialogue («Si me estáis escuchando, no salgáis…», b1.mjs:7) and «cogí el móvil» (b1.mjs:149) are authentic Madrid speech, which the policy allows.
- **Verdict Madrid infectada B1: PASS WITH NOTES.**
  - Narrowest fix: «las leéis» → «las leen» at SceneCard.tsx:97.
  - Also consider a guard rule for `leéis`/`-áis` in `*.tsx` UI strings.
  - Keep B1 in `levels`.

## 3. `/material-ele`: three new indexable teacher pages vs §3.2

- **How I picked:**
  - The pages are built by generators. The counts are 113 topic pages, 371 topic-level pages, 105 activity pages and 6 question pages (V, via `npx tsx` over `app/material-ele/temas.ts` and `actividades.ts`).
  - I took index = 20261103 mod count from each list. The result was topic #90, topic-level #51 and activity #93.
- **Scope:**
  - All three page families were added on 2026-11-01 (V, `git log --diff-filter=A`: 0f8a7f73, 995f87fd, 6f00747c), after BOARD-DECISION-001 (2026-10-16). They are therefore NEW pages under §3.2.
  - They are indexable: `robots: { index: true, follow: true }` (app/material-ele/components.tsx:28) (V).
  - H: per-activity bank pages are «guide» pages within the meaning of §3.2. The board should confirm this.

### 3.1 Topic page `/material-ele/formatos/mundos-3d` (generator temas.ts:207-243)

- **Stated level:** «A0–C2» (V). It is the union of 21 lessons' levels. It matches the lessons, but the page's own prompts are not levelled.
- **One communicative objective:** **No** (V). It shows 8 `goals` aggregated from different lessons («Conversar con personajes en treinta lugares reales de Estados Unidos», «…supervivencia en Madrid», «…en el más allá»). By construction, `goals: uniq(ordered.flatMap(lesson => lesson.goals)).slice(0, 8)` (temas.ts:233).
- **≥8 authored prompts:** 4 warm-ups + 8 speaking prompts, but they are copied from catalog lessons, not authored for the page (V, temas.ts:234-235). They also mix levels: «Explica qué pesa más al final de una vida…» sits next to an A0 range.
- **Teaching sequence of stated length:** **None** (V).
- **Spanish / truthfulness errors in the template (V):**
  - FAQ: «las de un mismo tema se ordenan de lo regular a lo irregular y de la forma al uso» (temas.ts:238). This is grammar copy, false for 3D worlds.
  - «Sí: 2 de estas clases son gratis y se abre sin registrarse» (temas.ts:239): agreement error, should be «se abren».
  - «mundos 3d» (lower-cased `3D`, temas.ts:238).
- **Verdict: FAIL** (objective, authored prompts, sequence).

### 3.2 Topic-level page `/material-ele/gramatica/adjetivos/a1` (generator temas.ts:282-302)

- **Stated level:** A1. **Level-honest** (V): lessons 41 and 110 are `level:"A1"` (lesson-catalog.ts:252, :238), lesson 307 is a live grammar lesson (app/grammar-classroom/live/lessons/g307.ts:14), and the goals are A1 («Hacer concordar adjetivos en género y número», «Usar la posición neutra y muy + adjetivo»).
- **One objective:** No. It shows 6 aggregated goals (V).
- **≥8 prompts:** **No.** There are 2 warm-ups and `speaking: []` (V, generator output).
- **Sequence:** an ordering sentence («primero la forma regular, después las irregularidades y el uso»), with no stated length (V).
- **Spanish errors in the template, which repeat across all 371 level pages (V):**
  - H1 «Adjetivos en A1: 3 clases para enseñar**lo** a principiantes» (temas.ts:293): plural antecedent, should be «enseñarlos».
  - Intro «En A1, adjetivos se trabaja en 3 clases» (temas.ts:294): missing article, and the verb does not agree.
- **Verdict: FAIL** (prompts, objective, sequence). G6 passes.

### 3.3 Activity page `/material-ele/actividad/palmas-en-la-silaba-fuerte` (data.ts:2529ff, generator actividades.ts:43-62)

- **Stated level:**
  - The title and FAQ say «A1–B2» (V, generator `pageLevel(parent)` from the parent kicker «Ortografía y pronunciación · A1–B2», data.ts:2514).
  - The activity's own goal says «Oír y marcar la sílaba tónica **(A1)**».
  - **Level mismatch** (G6 spirit, V).
- **One objective:** yes, the tonic syllable. It is phonological rather than communicative.
- **≥8 prompts:** **No.** There are 2 (V).
- **Sequence:** yes: 3 steps and «6 minutos» (V).
- **Content error (V):** «Di palabras de **tres sílabas** … te-LÉ-fo-no, **ca-FÉ**, MÚ-si-ca» (data.ts:2533). «Café» has two syllables, and «teléfono» has four.
- **Verdict: FAIL** (prompts, level label, factual error).

### 3.4 Narrowest fixes for §3 (proposed, not applied)

- §3.2 states the consequence itself: «Otherwise it's noindex». All three sampled pages fail, so the standard applies to them.
- The failures are **generator-structural**: objective, prompts and sequence are not data fields. One sample per family therefore says the same about every page the generator builds (V for the template-borne fields; H for page-specific content).
- Before any family-wide noindex, the board should choose between two options:
  - (a) noindex the three generated families until each page carries authored `objective`, `prompts[≥8]` and `sequence` fields;
  - (b) narrow the §3.2 scope (e.g. treat activity bank pages as fragments of their guide).
- Fixes that need no product decision:
  - temas.ts:238-239, :293-294: «se abren», «enseñarlos», «En A1, los adjetivos se trabajan…», and no grammar-ordering FAQ outside `gramatica`.
  - data.ts:2533: three-syllable examples, e.g. «ca-MI-sa», «ven-TA-na».
  - actividades.ts `pageLevel`: prefer the level in the activity's own goal over the parent's range.

## 4. Summary of verdicts

| Item | Verdict |
|---|---|
| G3 `npm run test:language` | PASS (exit 0; 43/43; guard 0 findings; English unchanged) |
| «Más allá» A2 (full) | PASS WITH NOTES: 4 si + imperfect subjunctive prompts at B1 |
| «Más allá» B2 (full) | PASS (regional polish b2.mjs:8, c1.mjs:12) |
| «Más allá» all levels (machine) | PASS: monotonic progression, not relabels; no per-level teacher notes |
| Madrid infectada B1 (full) | PASS WITH NOTES: UI vosotros «leéis» at SceneCard.tsx:97 |
| /material-ele/formatos/mundos-3d | FAIL §3.2 |
| /material-ele/gramatica/adjetivos/a1 | FAIL §3.2 (G6 OK) |
| /material-ele/actividad/palmas-en-la-silaba-fuerte | FAIL §3.2 + level label + «café» error |

No level should be removed from any catalog `levels` array on this evidence.
