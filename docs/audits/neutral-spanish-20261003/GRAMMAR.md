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
- Existing grammar-wave1/wave3 expectations and full content/render fingerprints refreshed against reviewed neutral copy. Historical renderer comparison applies only the six enumerated approved UI string edits; access-policy comparison remains exact. The catalog uses a complete reviewed-source SHA-256 fingerprint. The syntax data fingerprint fixture removes dependence on an unavailable historical data file while preserving all five complete banks.
- Final focused run: 73/73 tests pass across neutral-grammar, verbal-system-contract, verbal-help-contract, grammar-wave1-repair, a1-syntax-lessons, wave3-grammar-content, wave3-grammar-interaction and personal-trainer.
- Compared 782 English-key, English-tuple and English-looking source candidates against base 43e4b3e: English copy unchanged. Four flagged changes were exclusively Spanish morphology or the Spanish half of mixed headings; BUILD THE STORY and YOUR TURN remained exact.
- Final scanner run with grammar-exemptions.json: zero findings in all owned roots. The 70 exact entries also document preterites, vosotros vivís, proper name Tomás, standard da+le and the unchanged English Pair note.
- Additional targeted checks preserve accented ordinary enclitics (Prepárame, Corrígeme, dirígenos, Respóndeme, Detente, Acláralo, Tradúcela), preserve the internal corregime station ID, and ensure the ordinary conditional answer is dile.
- Full TypeScript no-emit and focused ESLint validation completed; see parent QA for aggregate run.
