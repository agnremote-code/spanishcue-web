# Sampled LQG audit (G3 + G6) of non-board 3D worlds, 2026-11-20

- Auditor: Martin (CLRQO). This was a read-only run on `claude/friday-assessment-20261120` at HEAD `bb24d9cc`.
- Scope: W47 plan item 5 (docs/board/assessments/2026-W46.md §6). I took one level per world in full, plus a spot check of A2. The sample is **non-retroactive**. It is not a re-gate of what has shipped.
  - «El tren de las 23:40»: A1 in full (`app/el-tren-de-las-2340/levels/a1.mjs`).
  - «La boda»: A1 in full (`app/la-boda/levels/a1.mjs`).
  - «El mundo en blanco»: A1 in full (`app/el-mundo-en-blanco/levels/a1.mjs`).
  - Spot check: A2 of all three worlds, using targeted greps for structures above A2. I did not read A2 in full.
- Standards:
  - BOARD-DECISION-001 §3.1 N1 (G3 = `npm run test:language`; G6 = level honesty).
  - CLAUDE.md §7–8.
  - docs/LANGUAGE_POLICY.md.
  - Level taxonomy: `app/autoestudio/curriculum/objectives/<level>.ts`.
- Labels: **V** = VERIFIED (quote + file:line or command output). **H** = HYPOTHESIS.
- Severity:
  - **M** (medium): affects level honesty or gives a wrong meaning in model input. Fix it in the next content pass.
  - **L** (low): polish.
  - No finding in this sample is **H**-severity, meaning one that would justify removing a level or adding noindex.

## Level taxonomy used (V)

| Structure | Repo level | Source |
|---|---|---|
| Pretérito perfecto compuesto | A2 | app/autoestudio/curriculum/objectives/a2.ts:9 |
| Pretérito indefinido (regular / irregular) | A2 | a2.ts:19, a2.ts:20 |
| Pretérito imperfecto | A2 | a2.ts:29 |
| Imperativo afirmativo tú/usted | A2 | a2.ts:71 |
| Pluscuamperfecto | B1 | b1.ts:10 |
| Condicional simple (cortesía, consejo, hipótesis) | B1 | b1.ts:83 |
| Imperfecto de subjuntivo | B2 | b2.ts:9 |

Each world's A1 header defines A1 as present-tense only:

- Tren: app/el-tren-de-las-2340/levels/a1.mjs:1 «present tense … ir a + infinitive».
- Boda: app/la-boda/levels/a1.mjs:1 «present tense, «ir a» + infinitive, «tener que», «hay», gustar, simple commands».
- Mundo: app/el-mundo-en-blanco/levels/a1.mjs:1 «presente de verbos frecuentes … «me gustaría» + infinitivo».

## 0. G3: `npm run test:language`

- First run: **exit 1**. The cause was the environment, not the content (V):
  - `node_modules` was absent: `ERR_MODULE_NOT_FOUND: Cannot find package 'typescript'`.
  - After `npm ci --ignore-scripts`, `check-english-copy.mjs` failed with `fatal: not a tree object`. The checkout is shallow (`git rev-parse --is-shallow-repository` → `true`), so the base commit `43e4b3eb…` was missing.
- I fetched that base commit with `git fetch --depth=1 origin 43e4b3eb…`. This changed no branch or file.
- Clean run: **exit 0** (V):
  - `# tests 43` / `# pass 43` / `# fail 0`
  - `Neutral Spanish guard: 0 unresolved findings across 2312 source files.`
  - `ENGLISH COPY: UNCHANGED (10882 strings in 126 files; base 43e4b3eb1dc76031481d2406a62b9210f0dd97e2)`
- Note for CI and other agents (V): in a fresh shallow clone, `test:language` cannot run until dependencies are installed and the English-copy base commit has been fetched.
- `git status` was clean after the run (V).

## 0.1 Machine checks across all levels

- Spanish word count per level (V, scratch script over every Spanish string in `levels/<l>.mjs`, skipping `en` keys). It rises monotonically in every world, so no level is a relabel of another.
  - Tren A0→C2: 2553 / 3768 / 4743 / 5753 / 6543 / 7298 / 8472
  - Boda A0→C2: 2385 / 3644 / 4715 / 5648 / 6382 / 6950 / 7898
  - Mundo A0→C2: 857 / 1473 / 1912 / 2519 / 2847 / 3168 / 3770
- Identical strings shared with the level below (V, strings longer than 12 characters):
  - Tren: 0 / 3 / 0 / 11 / 6 / 13.
  - Boda: 6 / 5 / 5 / 13 / 10 / 23.
  - Mundo: 3 / 5 / 16 / 11 / 10 / 10.
  - At A0–A2 the shared strings are mostly titles, word-list items and short `ask` lines, e.g. «Gloria te da el papel. ¿Qué haces?».
  - From B1 up, some shared items are whole `end` narrations, e.g. Boda B1→B2 «La carne alcanzó para todos…» and Tren B2→C1/C2 «Si desaparezco, que investigue el pasajero del 8…».
  - Boda C1→C2 shares 23 strings, the highest count in the sample. **L**. H: these are reused plot beats, not fake levels. I did not read C1 or C2.
- `scripts/conversation-quality.mjs` (V, `--json` output filtered per world):
  - Tren: 13 flags. Boda: 16 flags. Mundo: 0 flags.
  - All of them are cross-file near-duplicates of generic talk prompts (e.g. tren a1.mjs:21 «¿Prefieres la ventana o el pasillo?» ≈ escucha-3d vuelo), plus 3 yes/no prompts at B1.
  - **L.** None of these is a level problem.

## 1. «El tren de las 23:40»: A1 in full

- **Fits A1 (V):**
  - Physical description with ser/tener/llevar: «Rosa es bajita, lleva trenzas y un suéter naranja» (a1.mjs:35).
  - Hours: «Son las once y veinte» (a1.mjs:5).
  - Polite requests: «¿Me deja un cuaderno y un bolígrafo?» (a1.mjs:130).
  - Talk prompts are present-tense and personal: «¿Prefieres la ventana o el pasillo?» (a1.mjs:21), «¿Qué documentos llevas siempre?» (a1.mjs:446).
  - The 15 scenes form a coherent mystery with a real closing scene (a1.mjs:488–518).
- **T1. Present tense forced onto past events, giving unnatural Spanish or the wrong meaning in model dialogue. M (V).**
  - The plot needs past reference, but A1 is present-only, so several lines use the present where Spanish needs a past tense:
    - a1.mjs:154 «¿Ve a su tía después de la cena?» (meaning: did you see her).
    - a1.mjs:161 «¿Dónde está usted a la una?» (meaning: where were you at one).
    - a1.mjs:352 «En Mendoza, la señora del abrigo rojo le da jamón.»
    - a1.mjs:381 «A medianoche me la pide.»
    - a1.mjs:492 «¿Duermes bien? Yo no.» This reads as a habitual question (do you sleep well?), not "did you sleep well?".
    - a1.mjs:493 «¿Dónde estás toda la noche?»
    - a1.mjs:494 «En 1968 es mi luna de miel con Ernesto y vemos este amanecer desde la cabina.»
  - Narrative present in the `line`/`end` narration is acceptable. These lines are character dialogue, which students take as a model.
  - H: an A1 student will copy «¿Dónde estás toda la noche?» as a pattern.
- **T2. Pretérito perfecto (A2) at A1, with Peninsular usage in an Argentine setting. L/M (V).**
  - a1.mjs:409, Teófilo, station master at Puente del Inca: «Hace cinco minutos, a las tres y diez, ha bajado al río … Ha echado cenizas … ha vuelto al tren».
  - This is above A1 (a2.ts:9).
  - It also uses the perfect for a closed time («hace cinco minutos, a las tres y diez»). That is Peninsular usage, and a speaker in Argentina would use the indefinido.
  - It is dialogue, but it is not authentic for the setting, so it does not qualify as intentional regional language under LANGUAGE_POLICY.
- **T3. Minor naturalness. L (V):**
  - a1.mjs:132 «Ella sí lo conoce a usted, parece.» The tag order is awkward. «Parece que ella sí lo conoce a usted» is more natural.
  - a1.mjs:363 «¿Qué olor te recuerda tu casa?» The standard form is «te recuerda a tu casa».
  - a1.mjs:125 «que investigue el pasajero del ocho» is present subjunctive at A1. It is a receptive note and acceptable as a chunk.
- **T4. «hacer (una) foto» in student-facing copy. L (V).**
  - a1.mjs:447 talk prompt «¿Haces fotos de tus documentos?».
  - a1.mjs:101 player line «¿Puedo hacer una foto?».
  - a1.mjs:442 the Salvadoran character's mother says «Haz foto de todo».
  - «Hacer fotos» is mainly Peninsular. «Tomar/sacar fotos» is the international choice, and the Boda A1 uses «sacas fotos» (la-boda a1.mjs:364).
  - The neutral-Spanish guard does not flag it. H: this is a minor neutral-Spanish drift, not a breach.
- **Imperatives at A1** (a1.mjs:10 «Mire», :124 «Lea esto», :188 «Llévalo… dile»): the taxonomy places the imperative at A2 (a2.ts:71). These are high-frequency classroom chunks and receptive. **L**, with no action needed.
- **Verdict «El tren» A1: PASS WITH NOTES.** Keep A1 in `levels`.

### Spot check: «El tren» A2

- The header says A2 is preterite + imperfect (a2.mjs:1). The narration and dialogue contain:
  - **11 pluperfect forms** (B1, b1.ts:10), e.g. «Se notaba que había llorado, o que había intentado llorar» (a2.mjs:122);
  - **5 imperfect-subjunctive forms** (B2, b2.ts:9): «sin que nadie lo viera» (a2.mjs:15), «como si fuera» (a2.mjs:14, :33), «antes de que llamaras» (a2.mjs:122), «como si quisiera» (a2.mjs:291);
  - a conditional talk prompt (B1), «¿Qué comida de tu familia te llevarías a otro país?» (a2.mjs:45).
- **M**, receptive density. H: A2 students understand these lines through context, but the input sits clearly above the stated level. The prompt at :45 invites B1 production.

## 2. «La boda»: A1 in full

- **Fits A1 (V):**
  - Descriptions: «Tiene ochenta y seis años, un suéter azul oscuro y un mate en la mano» (a1.mjs:98).
  - tener que / ir a: «Tengo que ver la lista» (a1.mjs:8), «Voy a llevar su saco a la capilla» (a1.mjs:14).
  - Talk prompts: «¿Sabes coser un botón?» (a1.mjs:89), «¿Qué postre te gusta más?» (a1.mjs:158).
  - Closing production: the toast scene, with the student taking the microphone (a1.mjs:395–417).
- **B1. Production prompts and player lines above A1. M (V).**
  - These require past tenses that the repo places at A2:
    - a1.mjs:68 talk prompt «¿Cómo eras tú a los ocho años?» (imperfecto, a2.ts:29).
    - a1.mjs:345 talk prompt «¿Montaste alguna vez a caballo?» (indefinido, a2.ts:19). It also duplicates the prompt three lines above, «¿Montas a caballo o no?» (a1.mjs:342).
    - a1.mjs:15 player option «Señor, el padrino me invitó.» (indefinido).
    - a1.mjs:108 player option «¿Cuántos años estuvo casada, doña Chela?» (irregular indefinido, a2.ts:20).
    - a1.mjs:377 «Mi papá murió en junio.» This is a receptive line in dialogue and acceptable as a chunk. It is listed for context only.
  - Talk prompts and player options are what the student says. That makes this production, not input.
- **B2. Present tense forced onto past events, giving unnatural Spanish or the wrong meaning. M (V).**
  - In the same file, the opposite workaround appears:
    - a1.mjs:85 «Es de 1962. Nunca me lo pruebo.» (meaning: I've never tried it on).
    - a1.mjs:106 «Abuela, ¿cómo es su boda?» / «Yo no tengo boda. Yo me escapo a caballo.» (meaning: what was your wedding like; I didn't have one; I ran away).
    - a1.mjs:194 «¿Quién hace este plano?» (meaning: who made).
    - a1.mjs:215 «Tengo invitación. Me la da Facundo.» (meaning: Facundo gave it to me).
    - a1.mjs:246 «¿Por qué no lo pienso yo?» (meaning: why didn't I think of it).
    - a1.mjs:313 «¿No? Nunca pienso en eso.» (meaning: I never thought of that).
    - a1.mjs:400 «hoy nos salvas muchas veces» (meaning: you saved us).
    - a1.mjs:406 «Hoy llego solo.» (meaning: I arrived alone today).
  - **Most serious single line:** a1.mjs:383.
    - Facundo has just said «Mi papá murió en junio» (a1.mjs:377).
    - The player option is «Cuéntame de tu papá. ¿Cómo es?».
    - Asking in the present about a man just said to be dead is a wrong meaning in an emotionally loaded moment. The scripted reply works around it («En mi cabeza siempre está contento…»).
  - Taken together, B1 and B2 show the A1 level line was not applied consistently. Real past tenses leak in some places, and the present is forced onto past meaning in others.
- **B3. Minor. L (V):**
  - a1.mjs:62 «¿hay otras cosas abajo de la tierra?» is colloquial (Rioplatense/Mexican). The neutral form is «debajo de la tierra». It is a player line.
  - The narration uses Rioplatense lexis («saco», a1.mjs:10; «cierre», a1.mjs:75; «cantero», a1.mjs:52) in an Argentine-estancia world. H: this is intentional setting colour in narration. It is not a policy breach in my reading, but the board should confirm whether `line` narration counts as «surrounding instructions» under LANGUAGE_POLICY.
- **Verdict «La boda» A1: PASS WITH NOTES.** Keep A1 in `levels`. It has the densest set of A1 findings in this sample.

### Spot check: «La boda» A2

- The header names «deberías» as an A2 target (a2.mjs:1). That puts the advice-conditional in scope, so «¿Qué consejo le daría?» (a2.mjs:312) is consistent with the header.
- The imperfect subjunctive (B2) appears in narration and dialogue:
  - «para que te sentaras» (a2.mjs:97);
  - «sin que nadie la viera» (a2.mjs:221);
  - «Como si casarse fuera un tren que se escapa» (a2.mjs:305).
- There is also a conditional talk prompt: «¿Qué costumbre de tu país le explicarías a un extranjero?» (a2.mjs:114).
- **L/M**, a lower density than the Tren A2.

## 3. «El mundo en blanco»: A1 in full

- **Fits A1 (V):**
  - Short present-tense dialogue.
  - «Prefiero estar a salvo» (a1.mjs:40) practises preferir.
  - «¿A qué lugar de tu vida te gustaría volver un día?» (a1.mjs:107) uses «me gustaría», as the header states.
  - The options fit their questions throughout. All 12 `q` items have three plausible personal answers.
  - The level is short (1,473 words). H: on its own it is short of 45 minutes. The talk prompts carry the extension.
- **W1. Spanish error, an anglicism. M (V).**
  - a1.mjs:93 «¿Qué dices a un amigo cuando hace un error grande?».
  - «Hacer un error» is a calque of "make a mistake". Standard Spanish is «comete un error» or «se equivoca».
  - It is the only occurrence under `app/**/*.mjs` (V, `grep -rnE "hace(s|n)? un error|hacer un error"`).
- **W2. Present tense forced onto past meaning. M (V):**
  - a1.mjs:176 `q` «Con ocho años, ¿qué quieres ser de mayor?». The options «Lo mismo que hago hoy» / «No lo recuerdo» presuppose a past («¿qué querías ser?»), so the question does not fit its own options in tense.
  - a1.mjs:183 «¿Qué juegos te gustan de niña o de niño?» needs «te gustaban».
  - a1.mjs:110 option «A una ciudad donde soy feliz» answers «¿A qué lugar … te gustaría volver?» (a1.mjs:107). It needs «donde fui feliz».
  - a1.mjs:70 «¿Qué mensaje bonito recibes esta semana?» needs «has recibido».
- **W3. Peninsular «enfadarse» in student options and the word list. L (V).**
  - «Me enfado un poco» (a1.mjs:87) and `enfadarse` (a1.mjs:95).
  - «Enojarse» is the Latin American form (used in la-boda a1.mjs:60 «enojada»).
  - The guard does not flag it. H: this is minor drift, since both forms are understood.
- **Verdict «El mundo en blanco» A1: PASS WITH NOTES.** Keep A1 in `levels`.

### Spot check: «El mundo en blanco» A2

- The A2 header lists perfect, indefinido and imperfecto (a2.mjs:1). The spot check found:
  - a talk prompt requiring the pluperfect (B1): «¿Por qué dejaste eso que habías empezado?» (a2.mjs:90);
  - an imperfect subjunctive (B2) in an echo line: «Espero que alguien te dijera «para».» (a2.mjs:224). H: the intended meaning ("I hope someone told you to stop") would fit A2 better as a plain indefinido line, e.g. «¿Alguien te dijo «para»?».
- **L.**

## 4. Summary

| World | Level read | G3 | G6 verdict | Most serious finding |
|---|---|---|---|---|
| El tren de las 23:40 | A1 (+A2 spot) | pass (repo-wide) | PASS WITH NOTES | A1 dialogue uses the present for past events (a1.mjs:154, 161, 492–494). A2 has dense B1/B2 input (pluperfect ×11, imperfect subjunctive ×5) |
| La boda | A1 (+A2 spot) | pass | PASS WITH NOTES | A1 mixes A2 past-tense production (a1.mjs:15, 68, 108, 345) with present-for-past errors (a1.mjs:85, 106, 194, 215, 246, 313, 383, 400, 406) |
| El mundo en blanco | A1 (+A2 spot) | pass | PASS WITH NOTES | Anglicism «hace un error» (a1.mjs:93). A question whose tense does not fit its options (a1.mjs:176) |

- Cross-world pattern (V across the three A1 files): **an A1 world built around a past-tense plot forces the present onto past events.**
  - The fix is pedagogical, not mechanical. Rephrase so the meaning really is present (e.g. «¿Qué tal la noche?»), or allow one or two fixed past chunks and gloss them.
  - H: a G1/G6 lint for A1 files that flags present-tense time adverbs of the past («anoche», «en 1968», «a la una» + present in a question) would catch most of this. That is for Sofia to scope. It is not a recommendation to block anything.
- No noindex or level removal is recommended. Every level read keeps its place in `levels`.
- Not done: I did not read A0, B1–C2 in full or check the 3D renders (G5). I made no Spanish edits.
