# G4 content review: LES-001 «La feria de Villaluz» A2

- **Reviewer:** Alejandro (CEO, independent G4 reviewer; not the author. Author: Martin)
- **Date:** 2026-10-21
- **Branch / HEAD reviewed:** `claude/escucha-3d-feria-a2-20261021` @ `2422b141`. The content files below were last changed in `3ba0f854` (circles 1/6/7 + Busca) and `d72ff330` (round-1 edits, circles 2/3/4/5/8)
- **Basis:** BOARD-DECISION-001 §3 (N1 incl. beat labelling, G1, G2, G4, G6), LESSON-DECISION-001 v5 (§4 map, AC1–AC11, AM-1..AM-9, D2–D7, §6), CLAUDE.md §7, docs/LANGUAGE_POLICY.md, docs/conversation-family-authoring.md
- **Indexable Teacher Page standard:** not applicable. Row 241 is a PRO world and this unit adds no indexable cluster, guide or preview page

## Scope

There is one level (A2), and all of it was reviewed in full:

- `app/la-feria-de-villaluz/levels/a2.mjs`: CAST, CIRCLES ×8 (line, dialogue, every beat and option, feedback, timeline, talk, words, teacher), BUSCA ×7 (6 find sets + 1 transfer), CLOSING, ROUTES, E1_LABEL, PLACEMENT
- `app/escucha-3d/content/feria/a2.json`: 8 listenings (lines, choice, open, gaps, glossary)
- `app/escucha-3d/content/feria/a2.busca.json`: 7 announcements
- `app/lesson-catalog.ts:133`: row id 241 (title, subtitle, goals, explanation, speaking, levels, duration)
- For context only (Sofia's files, not under content review): `look-contract.mjs` (`validateBuscaSet`, `feedbackFor`), `engine.mjs` (`timelinePick`, `timeline`) and the closing and route markup in `FeriaGame.tsx`. I read these to confirm how authored content is rendered and how feedback is generated

## Machine checks (run by the reviewer on the branch)

```
$ node scripts/check-feria.mjs
authored circles: informacion, churreria, tombola, noria, artesania, escenario, fotos, baile
763/763 checks passed
(exit 0)

$ node --test tests/la-feria-de-villaluz.test.mjs tests/feria-look-contract.test.mjs
1..22
# tests 22
# pass 22
# fail 0

$ npm run test:language            (G3)
# tests 43  # pass 43  # fail 0
Neutral Spanish guard: 0 unresolved findings across 1539 source files.
ENGLISH COPY: UNCHANGED (10882 strings in 126 files; base 43e4b3eb1dc76031481d2406a62b9210f0dd97e2)
(exit 0)
```

The checks verify structure (G1 ids and 3–6 exponents, N1 labels and exponent coverage, AC2/AC4/AM-4 on every Busca set, the transfer set not reused, routes, and the E1 wording). They can't judge whether a discriminating feature holds up in the real world, whether a beat agrees with the Busca set next to it, or whether a model sentence is grammatical. The findings below cover those gaps.

## Summary judgement

The level is strong. The contrasts are genuinely A2 and well chosen: relativo que/quien/∅, donde/dónde, el que/la que, quería/dame/quiere, podrías/puedo, me gustaría/gustará/gustarías, te lo/me lo/te la, se la/se lo/le la, pronoun position with poder + infinitivo, indefinido vs imperfecto for complaint facts, me/te podría, hablar con/a, tan…como/más…que/mejor que, estar + gerundio vs ser/infinitivo, durmiendo, imperativo + enclitic (tú and usted), del/de el/en la, querer + inf, background imperfecto, and sequence indefinido. In every one, the correct option is truly correct, and almost every wrong option is wrong for the reason its `feature` names.

The dialogue is lively and unforced (don Ernesto's «seis minutos, uno más por hablar», Celia's churros instead of flowers, the photographer's tío Rubén running gag). Register is handled deliberately: tú by default, usted from older stall keepers and the abuelo, and the beats themselves teach the contrast. The closing meets AC9. The transfer set meets AC10. The catalog row is honest (G6).

Six items block shipping. Two are logic defects in a Busca find set and the beat that follows it. One is a grammatical error in a model sentence. One is a story contradiction between a listening and its scene. One is a route-time honesty problem. One is a flip instruction the app can't carry out.

## Findings

### REQUIRED (blocks ship)

**R1. Busca `informacion-emilio`: distractor Simón is ruled out only by an inference that doesn't hold.**
`app/la-feria-de-villaluz/levels/a2.mjs:814`. Simón matches every described feature except `hair:short`, because his hair value is `cap`. The announcement never mentions a gorra. A boy wearing a cap can perfectly well be «rubio, de pelo corto», and his figure is even `hairColor: 'rubio'`. If the class picks him, `feedbackFor` tells them «La persona del aviso tiene el pelo corto», which the class can't check on a capped head. In the other three sets that use `cap` (`escenario-bruno`, `fotos-nico`), the gorra is stated positively, so they are sound. This one is not.
*Fix:* give Simón a visible, rendered difference that is not a cap:
`{ id: 'simon', body: 'm', age: 'child', top: 'tshirt', topColor: 'verde', bottom: 'shorts', bottomColor: 'azul', hair: 'short', hairColor: 'moreno' },`
AC2 still holds: Gabriel is ruled out by `bottom` (non-colour, Tier A), `rubio` is Tier A, and no single feature rules out everyone. Re-run `node scripts/check-feria.mjs`.

**R2. Contrast `el-que` contradicts the crowd the class has just searched.**
`a2.mjs:121`. The context says «hay dos niños con camiseta verde». The Emilio set right before it has three (Gabriel, Emilio, Simón), and two of them wear pantalones cortos, so the correct answer «Es el que lleva pantalones cortos» does not single out Emilio. Attentive students will notice, and the circle's whole point is precise identification.
*Fix (works with R1):* context →
`'La mamá de Emilio corre a la plaza, pero ve dos niños rubios con camiseta verde. Te pregunta desde lejos: «¿Cuál es? ¿Cuál es mi hijo?»'`
After R1, the two blond boys in green are Gabriel (long trousers) and Emilio (shorts), so «el que lleva pantalones cortos» is uniquely true. No option text changes.

**R3. Model sentence with an indicative where Spanish needs the subjunctive.**
`a2.mjs:138`, stimulus `rosario`, option 2 `say`: «No, gracias. Prefiero una feria donde no tengo que trabajar.» «Una feria» here is non-specific and hypothetical, so the relative clause requires the subjunctive («donde no tenga que trabajar»). The indicative is a learner error, and this is a line the class reads aloud as a model. A2 has not covered this subjunctive, so the fix is to make the antecedent specific rather than to add a subjunctive. That also keeps «donde», which the teacher note asks for.
*Fix:* `say: 'No, gracias. La feria es el lugar donde descanso, no donde trabajo.'`. The `reply` «Te entiendo. La feria es para divertirse.» and the timeline line stay as they are.

**R4. The escenario listening contradicts the escenario scene. Decision: change the listening.**
`app/escucha-3d/content/feria/a2.json:207, 213, 221, 225`. The listening ends «Mira, ahí viene. Con los churros en la mano.» at «faltan cinco minutos». In the scene, by contrast, at «faltan diez minutos» Daniela has already checked the churrería and Valentina wasn't there. She then has to be found by announcement, playing a borrowed guitar in the plaza, and she arrives «todavía con la guitarra del chico en la mano». The Busca announcement also says «empieza en cinco minutos».

The two cannot be the same night in either order. If the listening comes after the scene, the search never happened. If it comes before, she can't already be arriving. The other seven listenings are all coherent moments before or after their scenes (noria: «ya funciona otra vez»; tómbola: after the bag was lent; baile: Julián arrives before Celia's story), so this one should be too.

Fix: move the listening earlier and make it end on the open question that the scene then resolves.
- line 207 `context`: «Faltan quince minutos para el concierto. La técnica de sonido y el guitarrista esperan a la cantante.»
- line 213: «Facundo, faltan quince minutos. ¿Dónde está Valentina?»
- line 221: replace with `{ "s": 0, "text": "Voy a buscarla a la churrería. Tú prepara las guitarras." }`
- line 225 question: «Según Facundo, ¿qué está haciendo Valentina?» (same options and answer). Valentina is not in fact eating churros in the scene, so the question has to attribute the claim to Facundo.

`public/audio/escucha-3d/feria-a2-escenario.mp3`, and any word timings, must be regenerated through the canonical pipeline (`scripts/generate-escucha-3d-audio.py`, GitHub Actions), as LANGUAGE_POLICY requires for synchronized audio, scripts and transcripts. The word count stays inside the A2 range, but re-run `check-feria`.

**R5. As authored, the Conversación route is not a 45-minute lesson (AC8 honesty).**
`a2.mjs:931–941` (ROUTES) plus the teacher notes at `a2.mjs:117, 560, 654, 792`. Each of circles 1, 6 and 7 now holds three contrasts, a Busca beat with two find sets plus an «al revés» round, a stimulus and five talk questions. The closing holds two stimuli, three contrasts, a pair role-play, the transfer find set, the narrative, the self-check and the transfer question.

My realistic estimate for a teacher-led class doing everything shown: warm-up 3, circle 1 ≈ 12, circle 7 ≈ 11, circle 6 ≈ 11, churrería/noria ≈ 7, closing ≈ 16–17. That is about 60 minutes against the labelled 8/7/8/6/10 = 42. The board rejected «treating the full world as a 45-minute class» as dishonest (LESSON-DECISION-001 §8), and the same reasoning applies to a route that overruns by a third. The world still offers the full content, so the honest fix is to say what the 45-minute route skips. The route-step `do` field is rendered only for the warm-up (`FeriaGame.tsx:377`), so the guidance has to go into the circle teacher notes. That is a content-only change.
*Fix:* append to the circle `teacher` notes:
- `informacion` (line 157), `escenario` (line 600), `fotos` (line 694): « En la ruta de 45 minutos: solo el primer aviso, una ronda «al revés» y una o dos preguntas de charla. El segundo aviso y el resto de preguntas son extensión.»
- `baile` (line 792): « En la ruta de 45 minutos: reacción e invitación rápidas (2 min), juego de roles 2 min, el último aviso 1 min, la historia del grupo 4 min y la pregunta final 1 min.»

With those notes, the route comes to about 3 + 9 + 8 + 9 + 6 + 11 ≈ 46 minutes, which matches the label. Alternatively, Sofia can render `do` on circle steps and the same text can live in ROUTES.

**R6. The circle 7 «al revés» instruction asks for something the shared screen can't do, and it departs from AM-6.**
`a2.mjs:653`, Busca beat `prompt`: «Después, «al revés»: una persona coloca a alguien de la plaza con «ponte…».» The NPCs can't be moved by voice, and AM-6 defines the flip as: a student secretly picks an NPC, describes it and gives directions, and the teacher drives to find it. Circles 1 and 6 follow AM-6. Circle 7 doesn't.
*Fix:* `prompt: 'Escuchen dónde está cada persona («a la izquierda del…», «a la derecha de…»), miren desde la mascota y elijan un número. Después, «al revés»: una persona elige en secreto a alguien de la plaza y dice dónde está («está a la derecha del…, detrás de…»); el docente lo busca. Cuando lo encuentra, la persona lo llama a la foto: «¡Ven, ponte aquí!».'`
This keeps the imperative + pronoun target and makes the flip executable.

### RECOMMENDED (should do; does not block)

1. **«hacer fotos» → «tomar/sacar fotos» (AC7, neutral international Spanish).** «Hacer una foto» is the Peninsular collocation. Most of Latin America says «tomar/sacar una foto», and the world already mixes the two (the fotos listening says «la tomó su papá», a noria choice says «Tomó fotos»). Lines: `a2.mjs:613` «hace fotos» → «toma fotos»; `672` «¿te hago una foto a ti?» → «¿te tomo una foto a ti?»; `674` «hazme una» → «tómame una»; `675` «hazla» → «tómala»; `682–683` «me hice una foto» → «me tomé una foto»; `687` «hacer fotos» → «tomar fotos»; `688` «se hace fotos» → «se toma fotos»; `a2.json:275` «aparato para hacer fotos» → «aparato para tomar fotos». This is text only, with no audio impact (scene text isn't voiced per the CAST note; the glossary isn't voiced).
2. **«enfadarse» → a neutral alternative.** `a2.mjs:389` «sin enfadarte» → «sin perder la calma»; `a2.json:197` «sin enfadarse» → «sin ponerse nervioso». «Enfadarse» is the Spain-leaning form, and «enojarse» is regional the other way.
3. **Busca `escenario-valentina` hedges its deciding feature.** `a2.mjs:832` and `a2.busca.json:21`: «seguro que está tocando la guitarra». Renata is ruled out only by pose, so the clinching feature is stated as a guess. Consider «…y está tocando la guitarra con alguien del público: la vi desde aquí.», or accept it as natural speech. If you change it, regenerate that announcement's audio.
4. **Circle 6 teacher notes claim location helps.** `a2.mjs:560` and `a2.mjs:600`: «y el lugar donde está ahora sirven para encontrarla». Neither escenario set describes a location (D5 allows it, but the sets don't use it). Remove «y el lugar donde está (ahora)» or add a `rel:` feature to one set.
5. **Feedback for `cual-es` / `sin-que`.** `a2.mjs:570` could be clearer: «Falta el relativo: sin «que», «la» parece un pronombre de objeto («la está tocando» = está tocándola). Para señalar a la persona: «la que está tocando».»
6. **`fotos-nico` vs the Busca context.** `a2.mjs:652` says the two missing people are «entre la gente que mira la foto». The Nico announcement (`870`) then places him next to «la abuela, la señora que está sentada», which reads as the Ríos grandmother who is in the photo. Use «una señora mayor que está sentada» in the announcement (re-generate audio), or change the context to «Están cerca, entre la gente».
7. **The closing teacher note omits two steps the screen shows.** `a2.mjs:792` lists reaction → invitation/role-play → story → transfer question, but the screen also shows the `fondo`/`secuencia` contrasts and «Un último aviso» (the AC10 transfer set). Add both, plus «En el último aviso, cuenta el primer intento sin ayuda: es la comprobación de la sesión».
8. **Students may read the timeline aloud instead of producing it.** The closing shows the group's timeline sentences in the indefinido, and the self-check (`a2.mjs:915–918`) then ticks «Dije cinco frases… cuatro verbos en indefinido». Add to the baile teacher note: «Lean la lista una vez y escóndanla (o tápenla): la historia se cuenta sin leer, con las palabras de orden.» Also consider phrasing the items without a first-person singular, since the scope is «El grupo en esta sesión» (AM-7), e.g. «Cinco frases o más.»
9. **Internal backlog code in a teacher-facing note.** `a2.mjs:332`: «(GROW-001, «El ascensor no funciona»)» → «(«El ascensor no funciona»)».
10. **Mild craft-to-country typecasting.** Listening badges show countries (`Escucha.tsx:228`): Nayeli · México sells clay (barro) mugs, and don Wilfredo Choque · Bolivia sells wool scarves. Each is plausible and positive, but together they lean folkloric. No change is needed for A2. For B1 and later, vary trades across cast countries.
11. **Family voice coherence.** Celia Paredes (Puerto Rico) and her grandson Julián Paredes (Perú) use different national voices, while the other two families share one. This is acceptable in a pan-Hispanic town and not worth re-generating audio for. Note it for later levels.
12. **Fotos listening vs scene.** In `a2.json` «fotos», the photo is taken at once with everyone present, while the scene needs two missing people found first. It's compatible as a compressed retelling, but a tighter ending would connect to the Busca task («Un momento… faltan dos. ¿Dónde están Inés y Nico?»). That would need audio regeneration, so it's optional.
13. **For Sofia (render, not content).** The transfer target doña Amparo is «una señora mayor que está bailando en la plaza», and doña Celia, the baile host, is also an old woman dancing in the plaza (`a2.mjs:709`). Make sure Celia's rendered look or pose can't be mistaken for a member of the transfer cluster within 10 m of «baile».
14. **Look contract wording, future sets.** `hairColor: 'moreno'` is never described in an announcement today, which is correct. In much of Latin America, «moreno/a» refers to skin, and skin is excluded by policy. Keep it out of announcements and model flips, and prefer «de pelo negro/oscuro» if it's ever needed.

## Checklist results

| Item | Result |
|---|---|
| G1 (one A2 primary id per circle + 3–6 exponents, §4 map) | PASS. The ids match LESSON-DECISION-001 §4/D7 exactly; the checker confirms they are known |
| N1 beat labelling (every interactive beat labelled; no exponent claimed without a targeting beat) | PASS. Every contrast names its exponent. Busca and stimulus beats are labelled «Estímulo de conversación». Baile's `reaccionar` and `aceptar-rechazar` are targeted by stimulus beats that model the forms, which satisfies N1 («a beat that targets X») |
| G2 (≥1 contrast per scene) | PASS. 2–3 contrasts in all 8 circles |
| Contrast correctness (one correct option; wrong options wrong for the named reason; feedback accurate) | PASS, apart from R2 (an answer that is correct but not unique in context). Some wrong options are defensible colloquially: «hablo con el encargado» as a request, and «en la izquierda». The feedback frames them as norm and register preferences, which is acceptable at A2 |
| Model Spanish in stimulus `say` lines | R3 |
| Natural, neutral, tú default / usted where used | PASS with Recommended 1–2. Register is consistent: Fabiola, Marta, don Ernesto, don Abelardo and the abuelo get usted; Yesenia, Camilo, Lorenzo, Joaquín, Julián and Rosario (to the hero) get tú. No voseo leaks from the AR/UY voices. Banned items (verbena, me pone, apetece, vaqueros, jersey) are absent |
| Busca announcements identify the target and sound natural (AC2/AM-4) | PASS on 5 of 7. R1 (Emilio set). Recommended 3 and 6 |
| AC3 wrong-pick feedback | PASS (generated by `feedbackFor`; R1 fixes the one case where the named feature can't be checked) |
| AC10 transfer set unseen | PASS. New people and a new mix (que + estar + gerundio + colour), no figure reused from circles 1/6 |
| AC8 / AM-1 routes | Conversación includes 1, 6 and 7 and ends in the closing; Comprensión has 5 listenings + closing. **Timing: R5** |
| AC9 closing (role-play → narrative with ticked selfCheck incl. imperfecto background sentence → transfer question) | PASS. Order is correct in the data and in `FeriaGame.tsx:420–448`. The selfCheck has ≥5 sentences, ≥3 sequencers, ≥4 indefinido forms incl. 2 of ir/ser/tener/estar, and the imperfecto background item. It's ticked, never computed, and scoped to the group (AM-7) |
| Listenings consistent with scenes | 7 of 8 PASS. **Escenario: R4.** Fotos: Recommended 12 |
| Teacher notes usable | Mostly yes: concrete pre-tasks, board summaries and timed extensions. R5, R6 and Recommended 4, 7, 8, 9 tighten them |
| Factual / cultural stereotyping | No factual errors. Mild typecasting noted in Recommended 10 |
| Catalog row 241 (G6, no over-claiming) | PASS. `levels:["A2"]`, duration «45–90 min» (AM-1). The goals map to beats: describe/locate with relativo + estar-gerundio (c1, c6), pedir/reclamar/comparar (c2, c4, c5), narrate with imperfecto background (c8), listenings. Nothing is claimed without a beat. «Voces de distintos países» is accurate for locale-specific neural voices and matches existing house phrasing. Optional: add «segunda mitad de A2» to the explanation (§7 risk 5); PLACEMENT already says it in the app |
| AM-9 one level per PR / catalog lists only shipped levels | PASS |

## Time spent

This was one agent review session: about 45–55 minutes wall-clock, covering reading the two decisions and the policies, a full read of a2.mjs (962 lines), both JSON files and the catalog row, cross-reading `look-contract.mjs`, `engine.mjs` and `FeriaGame.tsx`, running the three machine checks, and writing this file. A careful human reviewer would need roughly 2.5–3 h for the same scope, which is inside the G4 ≤3 h cap. I report the agent figure as the actual time and the human figure only as an estimate.

## Verdict

R1–R6 are small text edits plus one audio regeneration (R4). Once they're applied and `node scripts/check-feria.mjs`, the two test files and `npm run test:language` pass again, the level can ship without another G4 round. Martin or Sofia can confirm the edits against this list.

G4 VERDICT: APPROVE WITH REQUIRED EDITS

---

## Round 2 (delta), 2026-10-21

- **Reviewer:** Alejandro (same independent reviewer; author still Martin)
- **Delta reviewed:**
  - `2ad2d828` «apply G4 required edits R1-R6 and recommended fixes» (a2.mjs, a2.json, a2.busca.json).
  - `24c65fda` «rework 5 Busca sets on legible D6 features», compared as a raw diff against the facilitator's pre-change copy `a2.before-d6.mjs`.
  - The D6 rules in `docs/board/evidence/feria-look-contract.md` §5–§7, which allow only *legible* values to distinguish.
  - HEAD `24c65fda`.

### Machine checks (re-run by the reviewer at `24c65fda`)

```
$ node scripts/check-feria.mjs
authored circles: informacion, churreria, tombola, noria, artesania, escenario, fotos, baile
763/763 checks passed

$ node --test tests/la-feria-de-villaluz.test.mjs tests/feria-look-contract.test.mjs
# tests 30
# pass 30
# fail 0

$ npm run test:language
# tests 43  # pass 43  # fail 0
Neutral Spanish guard: 0 unresolved findings across 1540 source files.
ENGLISH COPY: UNCHANGED (10882 strings in 126 files; base 43e4b3eb1dc76031481d2406a62b9210f0dd97e2)
```

The test count rose from 22 to 30 because of the D6 contract tests and the Busca framing tests.

### R1–R6: verification

| Item | Status | Evidence |
|---|---|---|
| R1 (Emilio set: the cap inference) | **Resolved, superseded by D6.** R1 was applied exactly as specified in `2ad2d828`. The D6 rework then rebuilt the set: no figure wears a cap, and every distractor is ruled out by a legible value. Gabriel: `bottomColor` azul vs rojo. Andrés: top azul, hair moreno. Simón: hair moreno. Felipe: hair moreno, plus child vs non-child age. The cap problem no longer exists. | a2.mjs:805–817 |
| R2 (the «el que» contrast must be unique) | **Resolved, correct and unique as reworked.** The context says «dos niños rubios con camiseta verde». In the current set, the only blond boys in green are Gabriel (pantalón azul) and Emilio (pantalón rojo), since Simón and Felipe are now dark-haired. So «Es el que lleva el pantalón rojo» picks out Emilio alone. The two wrong options are still wrong for their named reasons («la que»: article agreement; «llevan»: verb agreement). The mother's dialogue (a2.mjs:79), the three «aviso» options (90–94) and the announcement all say «un pantalón rojo», so the circle is internally consistent. «Un pantalón» is the neutral singular. | a2.mjs:79, 90–94, 121–128, 807 |
| R3 (indicative model sentence) | **Applied verbatim.** «No, gracias. La feria es el lugar donde descanso, no donde trabajo.» | a2.mjs:138 |
| R4 (escenario listening timeline) | **Applied verbatim** in the text: quince minutos (context + line 1), the new last line, and Q2 «Según Facundo…». See R7 for the audio. | a2.json:207, 213, 221, 225 |
| R5 (45-minute route honesty) | **Applied verbatim.** The 45-minute guidance is in the teacher notes of informacion, escenario and fotos and in the baile closing note. The route data still sums to 42 (Conversación) and 45 (Comprensión). | a2.mjs:157, 600, 694, 792 |
| R6 (circle 7 flip vs AM-6) | **Applied verbatim.** The flip now has a student pick someone in secret and say where they are; the teacher drives to find them; then «¡Ven, ponte aquí!». | a2.mjs:653 |

Recommended items applied in `2ad2d828`:
- 1, «tomar fotos» throughout;
- 2, «sin perder la calma» / «sin ponerse nerviosa»;
- 3, Valentina's announcement now says «y está tocando la guitarra… la vi desde aquí»;
- 4, location removed from the circle 6 notes;
- 5, `sin-que` feedback;
- 6, the fotos context now says «Están cerca, entre la gente»;
- 7 and 8, closing note completed, and students are told to read the notes once and hide them;
- 9, «GROW-001» removed.

13 (Celia vs the transfer cluster) is resolved by the rework: Amparo now waves near the dance floor instead of dancing. 10, 11 and 12 were left as they were, which is acceptable.

### The 5 reworked Busca sets

All 5 were judged on naturalness, A2 level, correctness against the figures, exponent coverage, and D6 legibility. For each set I checked by hand that every distractor is ruled out by a *legible* value and that the wrong-pick feedback names a feature the class can see.

1. **informacion-emilio** (a2.mjs:805). Announcement: «Es un niño rubio que lleva una camiseta verde y un pantalón rojo.» It's natural and announcer-like, and keeps the target exponent «un niño que lleva…». Distractors and features: covered under R1. Wrong-pick feedback, for example for Gabriel: «La persona del aviso lleva un pantalón rojo». **Pass.** One observation, not blocking: apart from Felipe's age, the set is now solved by colour (top, trousers, hair). D6 forced this, and AC2 still holds (age is a non-colour, legible distinguisher).
2. **informacion-abuelo** (a2.mjs:819). «Su abuelo es un señor mayor, de pelo canoso, que lleva un abrigo gris y una maleta, porque llegó hoy de viaje.» Natural. Distractors: Ramón has no maleta (maleta is legible), Ignacio has an abrigo azul, Eusebio has pelo moreno. **Pass.**
3. **escenario-bruno** (a2.mjs:843). «Bruno es el chico pelirrojo que está llevando una caja con cables. Lleva una camiseta verde.» Natural, and «está llevando» keeps estar + gerundio. Distractors: Mauro is moreno, Lucas is pointing (señalando), Darío has a camiseta blanca, Elías is reading (leyendo). This is the strongest exponent alignment of the five: two distractors are ruled out by *what they are doing*. It's consistent with the beat context («Bruno, el ayudante que trae los cables», a2.mjs:558). **Pass.**
4. **fotos-nico** (a2.mjs:869). «…es el niño rubio que está a la derecha de la abuela, la señora mayor que está leyendo. Lleva una camiseta roja. Tráelo, por favor, y siéntalo delante…» Natural, and the imperative + pronoun exposure («tráelo», «siéntalo») is kept for circle 7. Distractors: Leo is ruled out by location (to the left of the grandmother), Mateo by his camiseta verde, Joel by pelo moreno. Location stays necessary, which is the circle's spatial point. «Leyendo» adds incidental exposure to an irregular gerund. **Pass.**
5. **transferencia-amparo** (a2.mjs:884). «…una señora mayor de pelo canoso que está saludando cerca de la pista de baile. Lleva una camiseta blanca y una falda verde.» Distractors: Teresa wears a pantalón, Pilar has pelo moreno, Dolores is pointing, Gloria has a falda azul. **AC10 still holds.** All five people are new and none is reused from circles 1/6. The mix (que + estar + gerundio + garment and colour) is new. «Saludando» is not a target pose in any circle 1/6 set; it appears only once, as a circle 6 distractor (Abril). **Pass.**

The announcement texts in `a2.busca.json` match BUSCA exactly; test «the Busca announcements file … is in sync» passes.

### New findings

**R7 (REQUIRED, release condition, not an authoring edit). The Busca audio is out of date for the 5 reworked announcements.**
The last «Generate Escucha 3D audio» commit is `67a7769b` (02:35:43). The rework `24c65fda` is from 04:09:17, so these files still speak the old texts:
- `public/audio/escucha-3d/feria-a2-busca-informacion-emilio.mp3`
- `…-informacion-abuelo.mp3`
- `…-escenario-bruno.mp3`
- `…-fotos-nico.mp3`
- `…-transferencia-amparo.mp3`

For example, the abuelo clip would still say «calvo… abrigo marrón», but no figure in the set now matches that. In a listening find task, stale audio sends the class to the wrong person, which is a content defect at the moment of use. Regenerate them through the canonical pipeline and commit before ship (LANGUAGE_POLICY: audio, scripts and transcripts stay synchronized).

I verified this from commit timestamps only; I didn't listen to the files. On the same evidence, the R4 escenario listening and the R1/R3 text edits (`2ad2d828`, 02:34:30) came before the 02:35:43 generation, so they are probably covered. Whoever fills in the audio state should confirm that the generation run picked them up.

RECOMMENDED (non-blocking):
- **R2-a.** Two circles now share a lookalike. «El señor de la maleta» in `fotos-ines` (a2.mjs:863: abrigo gris, canoso, maleta) looks almost the same as Martina's abuelo in circle 1 (abrigo gris, canoso, maleta; adult vs old is illegible under D6). It's harmless, and could even be enjoyed as a callback, but a class may ask «¿es el abuelo de Martina?». Optionally give the circle 7 reference man a different coat colour (e.g. `topColor: 'negro'` with `bottomColor: 'gris'`), then re-run the checker. The id is a noun phrase, so the text doesn't change.
- **R2-b.** «Una señora mayor… que está saludando» with no object is fine. «Que está saludando con la mano» would make the pose easier to picture at A2. The checker still finds «saludando». Optional, and it would need the clip regenerated anyway (R7).

### Round 2 verdict

R1–R6 are applied as specified (R1 and R2 as reworked under D6, and R2 is correct and unique). The 5 reworked sets are natural, correct at A2, legible under D6 and on-exponent, and AC10 holds. The only blocker is R7: the 5 reworked Busca clips must be regenerated so the audio matches the new texts. It needs no authoring work and no further G4 round. Whoever runs the release can verify it by regenerating and committing the clips, with the checks still green.

G4 VERDICT: APPROVE WITH REQUIRED EDITS
