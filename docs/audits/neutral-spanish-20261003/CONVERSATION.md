# Conversation, countries, and play audit — 2026-10-03

Scope: 143 TypeScript/TSX/MJS files across the assigned conversation families, boards, country atlases, fantasy worlds, Noche Abierta and Modo Play activities. 78 source files changed. CSS and game mechanics were not changed.

## Repairs

Ordinary instructions, model dialogues, help, labels, questions and teacher prompts now use tú. Reviewed irregular stems, accents and attached pronouns: `Contá → Cuenta`, `Decíselo → Díselo`, `Conocés → Conoces`, `Defendelo → Defiéndelo`. Pronoun case is contextual: `para vos → para ti`, `con vos → contigo`, subject `vos → tú`. Preserved first-person pasts including `Hoy decidí irme`, `Sé que ya te lo pedí la semana pasada`, `Confundí estar disponible…`, and `preferí callarme`. Preserved proper name TOMÁS.

Noche Abierta's authored fictional dialogues teach general conversation, rather than Argentine voseo, and were normalized across A1–C2. Its old English source comment is preserved verbatim; a Spanish note records the changed register. No recorded audio/transcript pair or audio asset was modified. Prompts asking learners to record their own responses remain prompts.

Ordinary transit/clothing/appliance vocabulary was reviewed (`colectivo → autobús`, `campera → chaqueta`, `heladera → nevera`); genuine Argentine slang lessons and geographic vocabulary examples were retained.

## Deliberate retained regional content

- `app/life-roulette/data.ts`: the dedicated ARGENTO `slang` fields and `slangCards` retain che, dale, posta, copado, quilombo, re, laburo and other intentionally taught expressions. Ordinary topic questions and surrounding page instructions use tú.
- `app/choose-conversation/c2-data.ts`: explicit Argentine pragmatic comparison of «dale, después vemos» is preserved; nearby «che» teaching is unchanged.
- `app/noche-abierta/levels/c2.mjs`: discussion of the meaning of «algo tranqui» and the expression «re tranquilo» retains its explicit lexical/pragmatic teaching purpose. This does not exempt ordinary instructions or voseo.
- `app/mundo-fantastico/data.ts`: Argentina-specific vocabulary `en colectivo` and the explicitly paired `autobús / colectivo` remain legitimate geographic vocabulary; no voseo paradigm is retained.

No voseo pronoun/conjugation is retained in this scope. The scanner's remaining hits are 3 exact regional-expression records and 40 neutral-context records, enumerated in `conversation-exemptions.json`: first-person preterites, standard `da + le`, the name TOMÁS, and English `animate`. Exceptions are exact strings, never whole files.

## Verification and snapshots

- `npm run test:conversation`: 28/28 test files pass.
- `node --test tests/neutral-conversation.test.mjs tests/noche-abierta-journeys.test.mjs tests/noche-navigation-jump.test.mjs`: 3/3 test files pass.
- Scoped `git diff --check`: clean.
- TypeScript AST comparison against base `43e4b3eb1dc76031481d2406a62b9210f0dd97e2`: no non-copy syntax/identifier/numeric structure changes in changed source files.
- Additional English audit compared 6,922 recognized English values (explicit English fields, bilingual helper-call values and recognizable bilingual tuple translations) in changed files to base: no differences. Repository-wide English verification remains the parent's final gate.

The four `tests/fixtures/conversation-batch1*.json` preservation snapshots were refreshed for approved Spanish copy only: changed bank hashes, visible Spanish preview hooks, catalog ledger hash, and source-byte hashes. Base-commit provenance, route/access assertions, IDs, level lists and all test cases remain intact. The A1 source hash embedded in `red-flag-c1.test.mjs` was refreshed. Exact Spanish wording assertions in country flagships, Red Flag A1, and the dilemma argument regex now expect neutral tú. No test was deleted or excluded.

## Exact scanner exceptions

- `app/choose-conversation/c2-data.ts` — 'En una charla informal argentina oyes «dale, después vemos» y una persona lo toma como acuerdo. ¿Cómo preguntarías qué quedó decidido sin afirmar que esa expresión siempre significa lo mismo?': Explicit Argentine expression taught as regional pragmatics or ARGENTO vocabulary.
- `app/irlanda-en-relieve/places.ts` — 'Boating and social weekends animate this small Shannon town.': English translation: animate means enliven; English copy is unchanged.
- `app/la-isla-vota/data.ts` — 'Respondí a otra idea': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/life-roulette/data.ts` — 'Con el tiempo entendí…': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/life-roulette/data.ts` — 'dale': Explicit Argentine expression taught as regional pragmatics or ARGENTO vocabulary.
- `app/life-roulette/data.ts` — 'Dale, vamos.': Explicit Argentine expression taught as regional pragmatics or ARGENTO vocabulary.
- `app/modo-play-y-ahora-que/data.ts` — 'Sé que ya te lo pedí la semana pasada.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/modo-play-y-ahora-que/data.ts` — 'TOMÁS': Personal name TOMÁS, not a second-person verb.
- `app/modo-play-y-ahora-que/page.tsx` — '¿Qué le dirías? Dale un consejo concreto y explica por qué puede\n            funcionar.': Neutral tú imperative da + indirect-object pronoun le (give him/her), not Argentine encouragement.
- `app/noche-abierta/content.mjs` — 'Me mudé hace una semana y todavía no conozco a nadie. Salí a dar una vuelta para no quedarme sola en casa.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/content.mjs` — 'Me cancelaron una cita a último momento, pero igual salí. ¿Te vienes a un bar de jazz acá a la vuelta? Dicen que es buenísimo.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/content.mjs` — 'En la máquina de escribir quedó una hoja con una sola línea: «Hoy decidí irme».': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/a1.mjs` — 'En la máquina de escribir hay una hoja: «Hoy decidí irme».': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/a2.mjs` — 'Dos o tres minutos de charla. No corrijas todavía: escucha si usa el pretérito para contar (fui, comí, festejé) e «ir a + infinitivo» para los planes.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/a2.mjs` — 'Perdón, tuve un problema y salí tarde de casa': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/a2.mjs` — 'Martín no quiere hacer cuentas. Dale dos razones para aceptar tu idea.': Neutral tú imperative da + indirect-object pronoun le (give him/her), not Argentine encouragement.
- `app/noche-abierta/levels/a2.mjs` — 'Me mudé al barrio hace una semana. Todavía no conozco a nadie. Salí a caminar porque no quería estar sola en casa.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/a2.mjs` — '¿Qué puede hacer Inés para conocer gente en el barrio? Dale dos o tres ideas.': Neutral tú imperative da + indirect-object pronoun le (give him/her), not Argentine encouragement.
- `app/noche-abierta/levels/a2.mjs` — 'Perdí el último autobús por un minuto. Vivo lejos, el taxi es muy caro y tengo poca batería en el celular.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/a2.mjs` — 'Me cancelaron una cita, pero igual salí. ¿Vienes conmigo a un bar de jazz? Está acá cerca y dicen que es muy bueno.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/a2.mjs` — 'En la máquina de escribir hay una hoja con una sola frase: «Hoy decidí irme».': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/b2.mjs` — 'Hace una semana que me mudé y no conozco a nadie. Salí a dar una vuelta porque, si me quedaba en casa, iba a terminar llamando a mi mamá.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/b2.mjs` — 'Perdí el último autobús por un minuto. Vivo lejísimos, el taxi me sale una fortuna y tengo el celular casi muerto. Una noche perfecta.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/b2.mjs` — 'Me cancelaron una cita a último momento, pero igual salí: no me iba a quedar encerrada. ¿Te vienes a un bar de jazz acá a la vuelta? Dicen que es buenísimo.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/b2.mjs` — 'En la máquina de escribir quedó una hoja con una sola línea, escrita con fuerza: «Hoy decidí irme».': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/c1.mjs` — 'Escríbele a Lu: avísale del error, cuéntale qué le dijiste a Vale y dale a entender, con elegancia y sin enojarte, que leíste lo de «ya sabes quién».': Neutral tú imperative da + indirect-object pronoun le (give him/her), not Argentine encouragement.
- `app/noche-abierta/levels/c1.mjs` — 'Me mudé hace una semana. Todo bien, el barrio es lindo… Salí a dar una vuelta porque el departamento está muy silencioso.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/c1.mjs` — 'Me cancelaron una cita a último momento, pero igual salí, ¿viste? Hay un bar de jazz acá a la vuelta. Si te copa, vente; si no, todo bien, eh.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/c1.mjs` — 'En la máquina de escribir quedó una hoja con una sola línea: «Hoy decidí irme». Debajo, tapada con corrector, había otra palabra.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/c2.mjs` — 'Si te entendí bien, …': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/c2.mjs` — 'Perdí el último autobús por un minuto. Por un minuto. El chofer me vio, te juro que me vio, y aceleró con un cariño… Tengo el celular casi sin batería y un optimismo admirable.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/c2.mjs` — 'Explícale qué quiere decir «algo tranqui» en este grupo, y dale otro ejemplo de frase en código que tampoco entendería.': Neutral tú imperative da + indirect-object pronoun le (give him/her), not Argentine encouragement.
- `app/noche-abierta/levels/c2.mjs` — 'En la máquina quedó una hoja con una sola línea: «Hoy decidí irme». Abajo, tachado: «Ojalá alguien lo note».': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/noche-abierta/levels/c2.mjs` — 'Un amigo llega empapado y pregunta «¿Me perdí algo?». Cuéntale la noche en dos versiones: una seria de treinta segundos y otra irónica.': First-person preterite in a story, reflection, or explicit past-tense example; not a voseo command.
- `app/red-flag-o-no/c1.mjs` — 'Dale una interpretación generosa y otra menos favorable al mismo gesto.': Neutral tú imperative da + indirect-object pronoun le (give him/her), not Argentine encouragement.
- `app/suiza-en-relieve/data.ts` — 'Dale una segunda vida a una tradición sin convertirla en una decoración vacía.': Neutral tú imperative da + indirect-object pronoun le (give him/her), not Argentine encouragement.
- `app/conversation-worlds/data-b2.ts` — 'Una persona lleva comida que se enfría, otra va con un bebé dormido y una tercera tiene una entrega urgente.': Noun bebé means baby, not an imperative.
- `app/conversation-worlds/ConversationWorld.tsx` — 'eliminate': English technical state identifier, not learner-facing Spanish.
- `app/conversation-worlds/c2-presentation.tsx` — 'eliminate': English technical state identifier, not learner-facing Spanish.
- `app/modo-play-uno-o-el-otro/page.tsx` — 'eliminate': English technical state identifier, not learner-facing Spanish.
- `app/preguntas-prohibidas-a2/page.tsx` — 'LOS CATORCE REINOS': Plural noun reinos means kingdoms, not a clitic imperative.
- `app/irlanda-en-relieve/data.ts` — 'Reinos antiguos, lagos interiores y una Irlanda rural que cuenta poder sin castillos perfectos.': Plural noun reinos means kingdoms, not a clitic imperative.
- `app/suiza-en-relieve/data.ts` — '¿Cómo debería reaccionar una persona cuando alguien comete un error en su idioma?': Third-person present comete (commits an error), not a voseo command.

## Independent-review follow-up

Corrected the remaining reviewer findings: plural clitics (`Tócalas`, `defiéndelas`, `respóndelas`, `Reescríbelos`, `Compáralas`), `Justifícalo`, `preséntaselas`, the diphthongs `comprueba/compruebas` and `confiesas`, hiatus accents `evalúa` and `insinúas`, and single-accent `sepáralo`. Added focused regression tests. Re-reviewed the complete applied verb mapping and checked all scoped source for impossible double-acute words; none remain. Refreshed affected preservation hashes after the corrections. The expanded scanner required seven additional exact neutral-context exemptions (bebé, technical eliminate, noun reinos, and third-person comete).
