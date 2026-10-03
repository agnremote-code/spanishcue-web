# Grammar and complete paradigms

Scope: grammar-worlds, grammar-steps, verbal-system, sistema-verbal, phrase-labs, syntax-labs, condicionales, condicionales-b1, subjuntivo-pais-maravillas, entrenador-personal, modo-vs-tiempo-verbal, past-b1.

Reviewed individual source strings, grammatical role, and source context. Corrected over 1,000 string/JSX instruction and example occurrences, including clitic accents and diphthong changes. Preserved preterites (abrí, viví, decidí), proper name Tomás, incorrect pedagogical distractors and English. Existing audio references were not altered; these banks use teacher-led speech rather than edited asset transcripts.

Complete tables now distinguish tú, usted, nosotros, vosotros and ustedes. Conditional and subjunctive default vos rows were removed in favor of the international sequence, with full vosotros forms. Past B1 already had six complete rows; its combined tú/vos label now reads tú. Added regular and auxiliary reference paradigms to all 17 Sistema Verbal lessons, including both imperfect-subjunctive series and five imperative addressees. The trainer starts with tú; its explicitly regional client remains selectable.

## Exact preserved regional material

- `grammar-worlds/data-next.ts`: curriculum string `Tú, usted, vosotros y ustedes; vos en zonas voseantes`; note `En gran parte de Hispanoamérica se usa ustedes para el plural; en Argentina, vos es cotidiano.` These identify regional distribution explicitly.
- `entrenador-personal/PersonalTrainer.tsx`: one audience object with id `vos`, label `1 CLIENTE · VOS`, cue `Cliente rioplatense: dirigime con vos.`, frames `HACÉ…`, `MANTENÉ…`, `REPETÍ…`, `NO…`. Deliberate contrast with tú/usted/ustedes.
- `verbal-system/lesson-data.ts`: all existing `regional` arrays remain intact, displayed under `España, América y español rioplatense`. They explicitly explain regional morphology/frequency, including `Tú hablás no es estándar: tú hablas; vos hablás.`, `Vos usa las mismas formas de indefinido que tú en el estándar general: hablaste, comiste.`, `Vos no cambia las formas del imperfecto: vos hablabas, comías, vivías.`, `Las terminaciones son iguales con tú y vos: hablarás.`, `Vos: hablá, comé, viví; tú: habla, come, vive.`, `Las negativas usan subjuntivo en todas las variedades: no hables, no hablés, no hablen.`, `En el habla informal, algunas variedades alternan con imperfecto: Yo que vos, no iba.`, and `El voseo puede aparecer en la subordinada sin cambiar esta serie: quería que vos vinieras.`
- Same file, present practice: `Variante regional: ¿Dónde ___ vos?`, correct option `vivís`, explanation `Con vos, vivir forma vivís.` Existing English explanation explicitly teaches vos and remains byte-identical.
- Same file, imperative practice: `Variante regional: imperativo afirmativo con vos de hablar…`, correct option `hablá`, explanation `El voseo afirmativo lleva acento final.` Existing English explanation explicitly teaches vos and remains byte-identical.
- Same file, imperative comparison: `Variante rioplatense: Vení. / Tú: Ven.` and `Vos/tú son cercanos; usted construye distancia o cortesía.` Preserves explicit contrast and its unchanged English. Formation names regional varieties: `Elige la persona y la variedad: tú, vos, usted, ustedes o vosotros.`
- `condicionales/data.ts`: `Variante rioplatense: Si vos ___ (tener) dudas, preguntame.`, correct answer `tenés`, explanation `Con vos: tenés. El resultado es una instrucción.` English explicitly teaches vos. Two conditional advice strings now lead with `Si yo fuera tú` and retain the parenthetical `(variante rioplatense: Si yo fuera vos…)` corresponding to their immutable English descriptions.
- English strings mentioning `Si venís`, `vos`, `tenés` or other Spanish examples remain unchanged by requirement.

## Validation checkpoint

- New `tests/neutral-grammar.test.mjs`: complete person coverage, independent vosotros expected forms across 16 tenses, imperative negative/positive contrast, conditional/subjunctive coverage and narrow regional-exercise preservation. Pass.
- Existing verbal-system and verbal-help contracts pass.
- Existing personal-trainer checks pass with escalated local subprocess access.
- Existing grammar-wave1/wave3 tests need reviewed neutral-copy fixture/expectation refresh; behavior tests execute, but old string/hash snapshots predictably fail. Work ongoing.
