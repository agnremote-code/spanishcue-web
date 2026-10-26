# G4 content review: «El ascensor del cerro» B2 (Valparaíso)

- **Reviewer:** Alejandro (CEO, independent G4 reviewer). Martin authored the content; I did not.
- **Date:** 2026-10-26
- **Branch / HEAD reviewed:** `claude/escucha-3d-ascensor-cerro-b2-20261026` @ `9b79673d`. Both content files were last changed in `e59feb9f` («B2 scenes and listenings… (Martin)») and have no uncommitted changes.
- **Basis:** BOARD-DECISION-001 §3.1 (N1 including beat labelling) and §3.2 (G1, G2, G4), concept `docs/board/concepts/2026-10-23-valparaiso-ascensor-del-cerro.md` §8 (spec) and §9 (open checks), objective descriptors `app/autoestudio/curriculum/objectives/b2.ts` and `b1.ts`, CLAUDE.md §7, and the format of the precedent review `docs/audits/la-feria-de-villaluz-g4-review-20261021.md`.
- **Method limits:** I worked only from the checklist, the concept and the files, and did not redo the concept research. I did not listen to any audio. The only external check was a single web search for the funicular's name (deviation 5).

## Scope

There is one level (B2), and I reviewed all of it:

- `app/el-ascensor-del-cerro/levels/b2.mjs` (706 lines): CAST, CIRCLES ×6, CLOSING, ROUTES, E1_LABEL, PLACEMENT. For each circle I read the line, dialogue, objective, related ids, exponents, every beat with all its options and feedback, the timeline, talk, words and teacher text.
- `app/escucha-3d/content/ascensor/b2.json` (235 lines): 6 listenings, each with its lines, choice, open, gaps and glossary.
- For G6 context only: `app/lesson-catalog.ts:135` (row 243).

## Machine checks (re-run by the reviewer at `9b79673d`)

```
$ node scripts/check-ascensor.mjs
authored circles: estacion, escalera, cafe, taller, mirador, asamblea
615/615 checks passed

$ node scripts/check-escucha-3d.mjs ascensor B2
Escucha 3D: all files OK

$ npm run test:language            (G3)
# pass 43  # fail 0
Neutral Spanish guard: 0 unresolved findings across 1760 source files.
ENGLISH COPY: UNCHANGED (10882 strings in 126 files)
```

These checks cover structure: G1 ids, 3–6 exponents, N1 labels and coverage, gap text, and routes. They cannot tell whether a "wrong" option is really wrong, whether feedback states a rule that holds, or whether the notes that feed the closing attribute ideas to the right person. The findings below address those questions.

## Summary judgement

This is a strong, honest B2 unit. The language is B2 throughout:
- the aunque indicative/subjunctive contrast;
- por mucho que;
- siempre que / a no ser que / a cambio de que;
- convendría que + imperfect subjunctive;
- backshift in reported speech, and when not to backshift («admitió que… exige»);
- the full system of verbs of change;
- a closing that is real mediation: synthesise, keep reservations, attribute, adapt the register, and don't invent agreements.

It is not A2 material dressed up, and it does not stretch into C1.

The cast avoids the clichés named in §9.1. Paola is a business owner who is also a resident («Yo también soy vecina»). Alex frames the lift as public transport and refuses to decide for the junta. Elvira is explicitly «no es la mala de la historia». The mural is a negotiable point, not decoration. There is no poverty-by-the-port framing.

The page makes no claim that the voices sound Chilean (b2.mjs:31-33, 142, 248). The teacher is told twice to bring a real sample, with its source.

Six items block shipping. Two are contrasts where the stated rule fails: in one, a native speaker can defend the "wrong" option; in the other, the feedback contradicts the circle's own model dialogue. One is a concessive-mood criterion that points students to the wrong answer. Two are attribution and invention errors inside the mediation machinery itself, which matter more than usual here because attributing correctly and not inventing are exactly what the closing assesses. One is a timing note that leaves out a beat.

None of them needs audio regeneration. Every required edit is in `b2.mjs` scene text, not in `b2.json` listening lines.

## Per-circle findings

### 1. estacion: `b2.fun.describir-transformacion` (b2.mjs:53-143)

- **G1:** PASS. The descriptor «contar cómo cambió una persona o un lugar y valorarlo» (VERIFIED b2.ts:105) is practised by three verbs-of-change contrasts and a valuing stimulus («me da pena que + subj.», «lo que más ha cambiado es que»). The exponents are the b2.gram.verbos-cambio-sistema set (b2.ts:101), and each one has a targeting beat.
- **Contrasts:**
  - `jefe` is clean: «llegó a ser jefe» and «se puso muy triste».
  - `anonimo`: see **R2**.
  - `hostal`: see **R1**.
- **Listening:** about 120 words. It is natural, and «al tiro» appears once as a labelled exemplar (glossary). The four questions can be answered from the audio, and the distractors are plausible (Q4 «Que no ponga a nadie en su caseta» is a good trap). The gaps match line 17 word for word (VERIFIED b2.json:17 vs :31).
- **Timeline:** see **R5**.
- **Teacher note:** usable. It has a five-column board and a clear voces-chile instruction. Its rule for «ponerse» is part of R2.

### 2. escalera: `b2.fun.conceder-objetar` (b2.mjs:145-249)

- **G1:** PASS. The concessive structures are the exponents of conceding. The `marcadores-chile` exponent belongs to the related objective b2.lis.voces-chile, which §8 assigns to circles 1–2. That is acceptable.
- **Contrasts:**
  - `posibilidad` is correct: «aunque suban» for a possibility, with «suben» and «subirán» wrong because both assert the outcome.
  - `cables`: the correct option is right. The feedback for the indicative option is thin; see Recommendation N1.
  - `cachai` is a good meaning contrast, framed as an exemplar and paired with the register point («en un acta no»).
  - `dato`: the beat is defensible, but the criterion taught around it points the other way; see **R3**.
- **Dialogue and listening:** natural. Both speakers concede for real: «En lo del horario tienes razón. Te lo concedo» / «Es cierto, no lo discuto. Si bien…». The gaps match line 52. Q2 «¿Qué le concede Paola…?» needs the student to recognise a concession, which suits this circle.
- **Cliché:** PASS. The teacher note explicitly forbids a «vecinos vs comercio» framing.

### 3. cafe: `b2.lis.debate-radio` (b2.mjs:251-339). Deviation 1

- **G1:** PASS. The descriptor is «seguir dos posturas y sus condiciones en un debate» (VERIFIED b2.ts:42).
  - `enfermera` (separate position from condition) and `guia` (compare two positions) target it directly.
  - `locutor` (choosing the reporting verb, «admitió que… no había contestado») targets the related b2.fun.resumir-declaraciones and b2.gram.estilo-indirecto-avanzado, which are listed in `related`.
- **Contrasts:** all three are correct and unique. «siempre que sale» is wrong because with the indicative it means «cada vez que». «pide que… va» is a mood error. «admitió que… hubiera contestado» is a mood error. «por lo tanto» is the wrong logical relation.
- **Listening:** about 200 words, three speakers, the longest in the unit. Q4 is a genuine inference question («¿Qué se deduce…?»). The gaps match line 93.
- **Deviation 1:** ACCEPTED. A radio debate scene that teaches reporting what was heard is the right way to give the closing's mediation sources a basis.

### 4. taller: `b2.voc.ciudad-sostenible` (b2.mjs:341-430). Deviation 2

- **G1:** PASS, with a note. The descriptor is «debatir sobre transporte, vivienda, gentrificación y espacio público» (VERIFIED b2.ts:88). It is carried by:
  - the `transporte` contrast;
  - the lexical half of `recomendacion` (público/privado);
  - the gentrification stimulus, which has the strongest prompt in the unit;
  - all five talk questions.
- Two of the five exponents come from related objectives: `se-estima` (b2.fun.informar-objetivamente / pasiva, week 9) and `convendria` (b2.fun.mitigacion, week 17, b2.ts:128). Both are declared in `related` and both have targeting beats, so N1 holds.
- **Deviation 2:** ACCEPTED. They fit a technical report naturally. See Recommendation N7 on the spelling distractor.
- **Contrasts:** `cifra` («Se estiman que» is an agreement error; «Yo creo» is a register error) and `recomendacion` («convendría que sigue» is a mood error) are correct and unique.
- **Listening:** natural, and it lays out a real dilemma (80 M / 14 months vs 50 M / 6 months, done in stages). The gaps match line 129.
- **Teacher note:** it says the figures are fictional. PASS.

### 5. mirador: `b2.fun.negociar-condiciones` (b2.mjs:432-522)

- **G1:** PASS. All three contrasts target the conditional connectors (b2.ts:60, 64): siempre que vs aunque vs indicative; a no ser que vs siempre que vs indicative; a cambio de que vs «a cambio que» (queísmo) vs indicative. In each, the wrong options are wrong for the named feature. `excepcion` is particularly well built: with «siempre que», paying would be the condition *for* the external operator, which is the opposite of what Elvira means.
- **Stimulus:** «solo si + indicativo» with the prosodic-focus note (b2.pron.foco-solo-si) is good.
- **Listening:** the condition is hidden at the end, and Elvira concedes «debería haberlo dicho al principio». The gaps match line 168. The arithmetic holds: 30 % of 80 M = 24 M. See Recommendation N11 on which base the percentage uses.
- **Cliché:** PASS. The teacher note makes the class see the foundation's side.

### 6. asamblea: `b2.fun.mediacion-fuentes` (closing, b2.mjs:524-638 and CLOSING 643-671)

- **G1:** PASS. The descriptor «sintetizar posiciones, conservar reservas y adaptar la información a otra persona sin inventar acuerdos» (VERIFIED b2.ts:38) maps one to one onto the beats `sintesis`, `reserva`, `atribuir`, `adaptar` and `acuerdo`. This is the best-aligned circle in the unit.
- **Contrasts:**
  - `reserva` («le preocupa que… haga… dejen» vs the indicative) is correct.
  - `atribuir` is correct. Keeping the present «exige» because the condition still stands is a precise B2 point, and «ocultó» is rejected as an unproven accusation, which is excellent mediation pedagogy.
  - `adaptar` is correct: usted, short sentences, and it states what is still undecided.
  - `acuerdo` is correct. The invented agreement and the erased agreement are both rejected.
  - `sintesis`: see **R4**.
- **Closing production:** a group acta of 6–8 sentences built from the session notes, with frames (siempre que, aunque, a cambio de que, attribution verbs, queda pendiente), a teacher-ticked self-check that is never computed, and a transfer question. It is real mediation and achievable in 8 minutes. PASS.
- **Listening:** the draft acta is corrected by the people quoted in it («que no diga que yo estoy de acuerdo con los diez años»). It models the target behaviour well. The gaps match line 211.
- **Teacher timing:** see **R6**.

## Routes and deviation 4

- Conversación: 5 + 5 + 5 + 5 + 5 + 20 = **45**. Comprensión: 3 + 6 + 6 + 6 + 6 + 18 = **45** (VERIFIED b2.mjs:675-698). Both are ≤ 45 and both end in the closing.
- **Deviation 4 (single-mode routes): ACCEPTED, and I reconfirm it for the board.**
  - The permanent 3D rule (CLAUDE.md §7, AGENTS.md) requires both modes in the same world, switchable without leaving it. It does not require a route to alternate modes.
  - The §8 line «alternating Conversación and Comprensión auditiva» was a teaching suggestion. Two coherent 45-minute routes are easier to teach live than a route that switches mode every circle.
  - Condition (non-blocking, N6): the teacher notes should say the mode switch remains available in every circle.

## Deviations 5–7

- **(5) Invented «ascensor La Gaviota», no real cerro named:** ACCEPTED. It is the safer reading of §7, where a real named funicular was rejected. One web search found no real Valparaíso ascensor with that name (HYPOTHESIS: not exhaustive). The comment at b2.mjs:34-35 and the catalogue («un funicular inventado») say it is fictional. Only general Valparaíso terms are used as fact («el plan», «los cerros», «ascensorista»). They are widely documented local usage and I found nothing unverifiable.
- **(6) Mural panel as a negotiable point:** ACCEPTED. It turns the mural from postcard decoration into a stake in the dispute, as §9.1 asked.
- **(7) Radio host named Ignacio on `es-AR-TomasNeural`:** ACCEPTED. A voice id is not a character name. The guard flag is a false positive.

## Findings

### REQUIRED (blocks ship)

**R1. Contrast `hostal`: a native speaker can defend the "wrong" option «se volvió un hostal».**
`b2.mjs:95-96`. Current wrong option: `'La casa se volvió un hostal y en invierno se queda vacía.'`, with feature `volverse con un sustantivo`.
- **Problem:** volverse + indefinite noun phrase is grammatical and common, especially in American Spanish («se volvió un desastre», «el barrio se volvió una zona turística»). The circle is set in Chile. The feedback hedges («lo normal es…», «sobre todo con adjetivos»), which admits the option is not actually wrong. That breaks the rule that each contrast has exactly one defensibly correct option. The circle's own dialogue also uses volverse + noun as a model: «me he vuelto alpinista» (`b2.mjs:70`). HYPOTHESIS for the regional frequency; VERIFIED for the internal conflict.
- **Fix:** replace the option with an unambiguous error of the same family:
  - `{ id: 'volvio', label: 'La casa se volvió en un hostal y en invierno se queda vacía.', correct: false, feature: 'volverse con «en»',`
  - `feedback: 'Volverse con «en»: la preposición «en» es de «convertirse»: «se convirtió en un hostal». «Volverse» no lleva «en»; para decir que algo pasa a ser otra cosa, lo claro es «convertirse en».' }`

**R2. Contrast `anonimo` and the circle's board rule: the stated rule for «ponerse» is contradicted by the circle's own model line.**
`b2.mjs:82` feedback: «"ponerse" indica un cambio rápido y pasajero, de estado o de ánimo»; `b2.mjs:63` exponent use «un cambio rápido de estado o de ánimo»; teacher note `b2.mjs:142` «ponerse (estado o ánimo pasajero)».
- **Problem:** don Lorenzo's model line is «El que se ha puesto viejo es el carro» (`b2.mjs:71`). That is a slow, lasting change expressed with ponerse, and it is natural Spanish, as are «el barrio se ha puesto caro» and «se ha puesto peligroso». A sharp student will put line 71 next to the feedback. The wrong option «se ha puesto más anónimo» is still wrong, but the reason given is not why.
- **Fix:**
  - feature → `'ponerse con un rasgo de carácter'`;
  - feedback → `'Ponerse con un rasgo de carácter: «ponerse» va con adjetivos de estado, aspecto o ánimo (nervioso, triste, viejo, caro), a menudo cambios rápidos. «Anónimo» describe el carácter que el barrio ha ido tomando con los años: «se ha vuelto».'`;
  - `b2.mjs:63` use → `'un cambio de estado, aspecto o ánimo, a menudo rápido: se puso muy triste; el carro se ha puesto viejo'`;
  - `b2.mjs:142` → «ponerse (estado, aspecto o ánimo; a menudo rápido)».

**R3. The criterion for concessive mood names a cue that applies to both moods, and the `dato` beat uses that cue for the indicative answer.**
`b2.mjs:152` exponent `aunque-subjuntivo` use: «conceder algo ya sabido, que no cambia la postura, o una simple posibilidad»; teacher note `b2.mjs:248`: «aunque + subjuntivo (algo ya sabido que no cambia la postura, o una posibilidad)»; beat `dato` context `b2.mjs:170`: «…pero su postura no cambia» → correct answer is indicative.
- **Problem:** in every concession the posture stays the same, whatever the mood. That is what conceding means. «Que no cambia la postura» therefore can't distinguish the two moods. As written on the board, though, it is the subjunctive cue, and the class will meet it in a beat whose answer is the indicative. The real criterion is new or asserted information (indicative) against information that is already known, shared or treated as irrelevant, or a mere possibility (subjunctive).
- **Fix:**
  - `b2.mjs:152` use → `'conceder algo que ya se sabe o que se presenta como poco relevante, o una simple posibilidad'`;
  - `b2.mjs:248` → «aunque + subjuntivo (algo que los dos ya saben o que se presenta como poco relevante, o una posibilidad)»;
  - `b2.mjs:170`: replace «Para ella es un dato importante, pero su postura no cambia.» with «Para ti es información nueva, y ella la reconoce, pero mantiene su postura.»

**R4. Contrast `sintesis`: the model answer and the feedback attribute to the foundation a position it never stated, in the very beat that teaches synthesis without invention.**
`b2.mjs:552` feedback: «Paola y la fundación necesitan una tarifa turística»; `b2.mjs:555` correct option: «…por otro, el café y la fundación necesitan que suban visitantes.»
- **Problem:** Elvira never mentions a tourist fare or visitor numbers. She asks for longer summer hours, a panel and an external operator (`b2.mjs:446-452`, `b2.json:166-172`). «Necesitan que suban visitantes» is the mediator's own inference, which `acuerdo` and the closing self-check treat as invention. VERIFIED.
- **Fix:**
  - `b2.mjs:555` label → `'En lo que coinciden todos es en que el ascensor tiene que reabrir. Por un lado, los vecinos piden una tarifa propia; por otro, el café necesita que suban visitantes, y la fundación pone condiciones a cambio de su dinero.'`;
  - `b2.mjs:552` feedback → `'Síntesis que borra diferencias: no todos quieren una tarifa barata para todo el mundo. Paola pide también una tarifa turística, y la fundación pone sus propias condiciones. Sintetizar no es simplificar hasta que parezca que todos piensan igual.'`

**R5. The estacion timeline attributes to don Lorenzo statements the student made. These notes are the sources of the closing acta.**
`b2.mjs:130-132`.
- **Problem:** all three notes say «don Lorenzo me contó que…». In the stimulus (`b2.mjs:122-124`), the student said each idea and Lorenzo only agreed (options 1–2). In option 3 he replied with something different: «depende de a quién le pregunte» is the student's line. The closing self-check requires ideas «atribuidas con un verbo preciso» (`b2.mjs:661`), and the notes it is built from must model that. Every other circle's timeline uses «le dije…» correctly. VERIFIED.
- **Fix:**
  - 130 → `'En la estación de abajo, le dije a don Lorenzo que el cerro ha cambiado para bien y para mal: las casas están arregladas, pero muchos vecinos de siempre se han ido. Él estuvo de acuerdo.'`
  - 131 → `'En la estación de abajo, le dije a don Lorenzo que el cerro se ha convertido en un lugar de paso, y él estuvo de acuerdo.'`
  - 132 → `'En la estación de abajo, le dije a don Lorenzo que el cambio depende de a quién se le pregunte, y él me contestó que al dueño del hostal le va bien; a él, no tanto.'`

**R6. The asamblea timing note leaves out one of its five contrasts (route-time honesty).**
`b2.mjs:637`: «los cuatro contrastes, rápidos (4 min), juego de roles 6 min, el acta 8 min y la pregunta final 2 min» (= 20), and «En la ruta de comprensión (18 minutos), el juego de roles dura 4 minutos».
- **Problem:** the circle has five contrasts: `sintesis`, `reserva`, `atribuir` and `adaptar` before the role-play, and `acuerdo` after it (`b2.mjs:547-627`). The order on the same line lists «lo decidido y lo pendiente» as its own step, but no time is given for it.
- **Fix:** replace the timing sentences with:
  - «En la ruta de conversación (20 minutos): los cuatro primeros contrastes, rápidos (4 min), juego de roles 5 min, lo decidido y lo pendiente 1 min, el acta 8 min y la pregunta final 2 min.»
  - «En la ruta de comprensión (18 minutos), el juego de roles dura 3 minutos.»
- Both still sum to 20 and 18.

### RECOMMENDED (non-blocking)

- **N1. `cables` indicative feedback** (`b2.mjs:202`). «Por mucho que + indicativo» exists for a fact presented as real and observed («por mucho que estudia, no aprueba»). Say why the subjunctive applies here: «…aquí va con subjuntivo porque Paola habla de un deseo cualquiera, del grado que sea ("da igual cuánto"): "por mucho que lo deseemos". Con indicativo se habla de un hecho real y comprobado.»
- **N2. `dato` subjunctive feedback** (`b2.mjs:176`). After R3, consider starting with «La frase es posible, pero no aquí:» so a native-speaker teacher does not read the option as ungrammatical.
- **N3. Pending-vote wording.** CLOSING `ending` (`b2.mjs:652`) says «se votará en la próxima asamblea». The `acuerdo` beat (`:621`) and the acta listening (`b2.json:211`) say «cuando la fundación responda». Use one wording.
- **N4. Inference questions.** Only cafe Q4 is an explicit inference item. Change one question in estacion and mirador to an inference question; these are text only and need no audio regeneration. For example, mirador: «¿Por qué dice Catalina que van a leer el convenio entero?» → «Porque la condición más importante no estaba en la presentación».
- **N5. Listening length.** The clips run about 120–200 words, roughly 1–1.5 min. That is the low end for B2, but it fits a 6-minute slot played twice. Aim longer in any later C1 world.
- **N6. Mode switch and voces-chile in the routes.**
  - Add to each route's warm-up `do`: «El cambio de modo (Conversación / Comprensión auditiva) funciona en cualquier círculo.»
  - The estacion teacher note cites «al tiro» from a listening the Conversación route doesn't play, and if the teacher picks `cafe` over `escalera`, no Chilean-marker beat is visited. Add to the `oneOf` step: «Si eliges el café, comenta antes "al tiro" y "¿cachai?" (escalera, ejemplo de habla chilena).»
- **N7. `transporte` distractor** (`b2.mjs:372`). «mobilidad» tests spelling, not the vocabulary field. A lexical distractor would serve the primary objective better, for example «garantiza la mudanza de los vecinos» with feature «movilidad o mudanza».
- **N8. PLACEMENT** (`b2.mjs:706`). The unit needs weeks 5–13, and convendría is a week-17 descriptor (b2.ts:128). «Para la mitad de B2» → «Para la segunda mitad de B2, a partir de la semana 13…».
- **N9. Café callers.** None of the three radio voices is Chilean. This is forced by the inventory of two Chilean voices and is plausible for a port city, and nothing claims otherwise. Optionally, add to the café teacher note: «las voces de la radio son de otros países; el programa es del cerro».
- **N10. Acta listening in Comprensión.** The asamblea listening is not scheduled in either route. Use it after the class writes its own acta, as a comparison and not as a model to copy.
- **N11. Base of the 30 %.** The 24 M (`b2.json:173`, `b2.mjs:481`) assumes restoring the original car (80 M), while Alex leans towards a 50 M replica. Add to the mirador teacher note: «El convenio se calcula sobre la restauración del carro original (80 millones).»

## Checklist results

| Item | Result |
|---|---|
| G1: one B2 primary id per circle + 3–6 exponents | PASS. All ids exist (b2.ts:38, 42, 48, 64, 88, 105); 5–6 exponents per circle. Supporting-objective exponents in escalera and taller are declared in `related` (deviation 2 accepted) |
| N1 beat labelling | PASS. 19 contrasts each name their exponent, and 6 stimuli are labelled. Every exponent has a targeting beat |
| G2 (≥1 contrast per scene) | PASS. 3–5 per circle |
| Contrast correctness | PASS except **R1** (defensible wrong option) and **R2** (wrong reason). Concessive and conditional mood, a cambio de que, convendría que, the backshift choice and por mucho que are all correct |
| Concessive criterion | **R3** |
| G6 level honesty | PASS. Genuinely B2, neither A2 nor C1. Catalog row 243 has `levels:["B2"]`, `featured:false`, and goals that map to beats |
| Natural, neutral Spanish; Chilean markers as exemplars only | PASS. tú by default, usted with don Lorenzo, no voseo leak from the AR voice. «al tiro» and «¿cachai?» are labelled. Guard: 0 findings |
| Accent claims / real sample for b2.lis.voces-chile | PASS (b2.mjs:31-33, 142, 248; catalog «voces de distintos países») |
| Cultural / cliché (§9.1) | PASS. No postcard or poverty framing. Paola and Alex hold real positions and Elvira is not a villain. Fictional funicular, no unverifiable claims |
| Listening (length, answerable, distractors, gaps, inference) | PASS. Gaps verbatim in all 6. N4 and N5 |
| Closing (mediation production, achievable) | PASS. The source notes need **R4** and **R5** |
| Routes (sum, ≤ 45) | PASS, 45 / 45. **R6** fixes the closing breakdown. Deviation 4 accepted |
| Teacher notes usable live | Yes. R2, R3 and R6 correct three of them |

## Time spent

One agent session of about 60 minutes: reading the concept, the decision and the precedent, a full read of both content files and the objective descriptors, re-running the three checks, one web search and writing this file. A careful human reviewer would need about 2.5 h for the same scope, which is within the ≤ 3 h G4 budget.

## Verdict

R1–R6 are text edits in `app/el-ascensor-del-cerro/levels/b2.mjs` only. No listening line changes, so no audio needs to be regenerated. Once they are applied and `node scripts/check-ascensor.mjs`, `node scripts/check-escucha-3d.mjs ascensor B2` and `npm run test:language` pass again, the level can ship without another full G4 round. A delta check of the six edits is enough. Deviations 1, 2, 4, 5, 6 and 7 are accepted. Deviation 4 (single-mode routes) is reconfirmed for the board. Separately from G4, the gate (§9.2, §9.4) still requires someone to listen to every clip and to pass G5(a)/(b) before `featured` can be set.

G4 VERDICT: APPROVE WITH REQUIRED CHANGES

---

## Delta check 2026-10-26

- **Reviewer:** Alejandro (same independent reviewer; Martin is still the author).
- **Delta reviewed:** `git diff e59feb9f d97a3187 -- app/el-ascensor-del-cerro/levels/b2.mjs app/escucha-3d/content/ascensor/b2.json`. No uncommitted changes to either file.
- **Checks (re-run at `d97a3187`):**
  - `check-ascensor`: 615/615 passed.
  - `check-escucha-3d ascensor B2`: OK.
  - `npm run test:language`: 43 passed, 0 failed.
  - Neutral Spanish guard: 0 unresolved findings across 1760 files.
  - English copy: unchanged.
- **Listening audio:** no `lines` text changed. I compared `speakers` and `lines` of all 6 items in old and new `b2.json` with a script, and they are identical. The only changed fields are `estacion.choice` and `mirador.choice` (N4). Those are text questions, so no audio needs regenerating.

- **R1:** CLOSED. b2.mjs:95-96 is now «se volvió en un hostal», with feature «volverse con «en»», and the feedback is the proposed text verbatim.
- **R2:** CLOSED. The feature and feedback at :81-82, the exponent use at :63 and the board note at :142 now give the state/aspect/ánimo rule and cite «el carro se ha puesto viejo». They no longer contradict line 71.
- **R3:** CLOSED. :152 and :248 drop «que no cambia la postura» and use known/low-relevance/possibility. The `dato` context at :170 now reads «Para ti es información nueva…».
- **R4:** CLOSED. The `sintesis` correct option at :555 and the `todos-igual` feedback at :552 no longer attribute a tourist-fare or visitor need to the fundación.
- **R5:** CLOSED. The estacion timeline at :130-132 reads «le dije a don Lorenzo que…» plus «él estuvo de acuerdo / él me contestó que…», which attributes each idea correctly.
- **R6:** CLOSED. The timing at :637 is now 4 + 5 + 1 + 8 + 2 = 20 min for Conversación, and the role-play is 3 min in Comprensión (4 + 3 + 1 + 8 + 2 = 18). The route totals of 45 and 45 are unchanged.
- **Recommendations applied:**
  - N3: CLOSING `ending` now says «cuando la fundación responda».
  - N4: estacion Q4 and mirador Q4 are now inference items. Both can be answered from unchanged audio lines (b2.json:18 and :171-173), and each has one defensible answer.
  - N7: the «mudanza» lexical distractor has correct feedback.
  - N8: PLACEMENT now says «segunda mitad de B2, a partir de la semana 13».
- **Still open (non-blocking, unchanged):** N1, N2, N5, N6, N9, N10, N11. Outside G4, the gate still requires someone to listen to every clip and to pass G5(a)/(b) before the `featured` flag can be set.

G4 VERDICT (final): APPROVE
