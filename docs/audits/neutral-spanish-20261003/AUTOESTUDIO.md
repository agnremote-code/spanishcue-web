# Autoestudio neutral-Spanish audit — 2026-10-03

Scope: every file in `app/autoestudio`, all 120 modules (20 each A1/A2/B1/B2/C1/C2), objective banks, level/curriculum data, UI, engines, teacher sharing, claim and progress surfaces. Reviewed direct-address forms, imperatives/clitics, paradigms, synthetic audio, regional examples and ambiguous first-person past/plural forms. No changes to access, auth, billing, tracking or sharing behavior.

## Repairs

- Landing, teacher notices, claim, share errors, progress notices and adapter errors now use tú: Prueba, Elige, Vuelve, Pídele, Necesitas, Copia/compártelo, Selecciona, Abre.
- Audio availability helper: `Si no escuchás, comprobá` → `Si no escuchas, comprueba`.
- A1 weeks 5–10, 12, 14, 16–17 ordinary paradigm rows use tú instead of combining tú/vos. Regional instruction and explicitly labelled regional rows remain separate. A1-14 now includes vosotros/vosotras for hacer, poner, traer, salir, conocer, saber alongside ustedes.
- Ordinary dialogue B2-18: `seguí con tu idea` → `sigue con tu idea`, also in the quiz audio string.
- C1-06: `Mirá` → `Mira`; `dejame aclarar` → `déjame aclarar`. C1-08: `Tenés razón` → `Tienes razón`.

## Audio correspondence

`audio-manifest.json` has an empty `clips` map. Existing canonical `engine/speech.ts` already synthesizes the exact text with the browser engine when no recorded clip exists; no new TTS mechanism was introduced. The four changed dialogue lines have no recorded assets to replace. `moduleClips` and listening scripts remain in correspondence; B2-18 repeated quiz audio was changed identically. Regional text remains exact for its existing synthesis source. No claim of authentic recording or human-accent validation is made.

## Validation

`node --test tests/neutral-autoestudio.test.mjs tests/autoestudio-*.test.mjs`: 15 files passed, including curriculum validation of all 120 modules, A2–C2 content, audio UI, routes, progress/share boundaries, release/migration guards, plus focused operational-copy/paradigm/synthetic-script regressions. English `en` fields, support arrays, English table cells and English UI branches are preserved; a TypeScript-AST comparison against `origin/main` verified these English values byte-for-byte in all 20 modified Autoestudio sources; global baseline verification is owned by coordinator.

## Exact retained occurrences

Each row below names the runtime module field and exact phrase. These are narrow reviewed occurrences, not whole-module exemptions. Regional reason applies only to that field/string. English fields/support are listed as frozen English copy. First-person past and vosotros plural are false positives, not regional exemptions. File mapping: `a1-01` → `app/autoestudio/curriculum/modules/a1/w01.ts` (analogous for every module). Numeric segments are zero-based array indexes.

### a1-01

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-01.theory.parts.1.body.3` | En Argentina, Uruguay, Paraguay y gran parte de Centroamérica se usa **vos** en lugar de _tú_: **vos sos**. Esta semana solo necesitas reconocerlo. | Explicit recognition of voseo; Martín is identified as Argentine; classification contrasts tú/usted/vos. |
| `a1-01.theory.parts.1.table.rows.4.1` | vos | Explicit recognition of voseo; Martín is identified as Argentine; classification contrasts tú/usted/vos. |
| `a1-01.theory.parts.1.table.rows.4.2` | sos | Explicit recognition of voseo; Martín is identified as Argentine; classification contrasts tú/usted/vos. |
| `a1-01.listening.script.8.text` | Buenas noches. ¿Vos sos Valeria? | Explicit recognition of voseo; Martín is identified as Argentine; classification contrasts tú/usted/vos. |
| `a1-01.listening.stages.2.exercise.prompt` | ¿Estas frases usan tú, usted o vos? | Explicit recognition of voseo; Martín is identified as Argentine; classification contrasts tú/usted/vos. |
| `a1-01.listening.stages.2.exercise.categories.2` | vos | Explicit recognition of voseo; Martín is identified as Argentine; classification contrasts tú/usted/vos. |
| `a1-01.listening.stages.2.exercise.items.4.text` | ¿Vos sos Valeria? | Explicit recognition of voseo; Martín is identified as Argentine; classification contrasts tú/usted/vos. |

### a1-02

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-02.theory.parts.0.table.rows.2.0` | vos (Río de la Plata, Centroamérica) | Separate regional paradigm row explicitly labelled Río de la Plata/Centroamérica; ordinary paradigm is tú. |
| `a1-02.theory.parts.0.table.rows.2.1` | vos | Separate regional paradigm row explicitly labelled Río de la Plata/Centroamérica; ordinary paradigm is tú. |
| `a1-02.theory.parts.0.table.rows.2.2` | sos | Separate regional paradigm row explicitly labelled Río de la Plata/Centroamérica; ordinary paradigm is tú. |
| `a1-02.theory.parts.0.table.rows.2.3` | ¿Sos argentina? | Separate regional paradigm row explicitly labelled Río de la Plata/Centroamérica; ordinary paradigm is tú. |

### a1-04

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-04.theory.parts.0.table.rows.2.0` | vos (Río de la Plata, Centroamérica) | Separate regional -ar row explicitly labelled Río de la Plata/Centroamérica. |

### a1-05

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-05.grammar.exercises.0.items.3.q` | —¿Vos ___ de Montevideo? —Sí, de Montevideo. | Regional recognition objective; Joaquín explicitly identifies Montevideo; exercises compare forms. |
| `a1-05.grammar.exercises.0.items.3.options.1` | sos | Regional recognition objective; Joaquín explicitly identifies Montevideo; exercises compare forms. |
| `a1-05.grammar.exercises.0.items.3.why` | Con **vos** la forma de ser es **sos**. | Regional recognition objective; Joaquín explicitly identifies Montevideo; exercises compare forms. |
| `a1-05.listening.script.4.text` | Yo soy Joaquín, de Montevideo. ¿Vos sos de acá, Rocío? | Regional recognition objective; Joaquín explicitly identifies Montevideo; exercises compare forms. |
| `a1-05.listening.stages.0.exercise.items.2.options.2` | de vos | Regional recognition objective; Joaquín explicitly identifies Montevideo; exercises compare forms. |
| `a1-05.listening.stages.2.exercise.categories.1` | vos | Regional recognition objective; Joaquín explicitly identifies Montevideo; exercises compare forms. |
| `a1-05.listening.stages.2.exercise.items.1.text` | ¿Vos sos de acá, Rocío? | Regional recognition objective; Joaquín explicitly identifies Montevideo; exercises compare forms. |
| `a1-05.listening.stages.2.exercise.items.1.why` | Joaquín es uruguayo: **vos sos** = tú eres. | Regional recognition objective; Joaquín explicitly identifies Montevideo; exercises compare forms. |
| `a1-05.complete.canNow.1` | Hacer las preguntas básicas para conocer a otra persona, de tú, de usted, a un grupo y reconocer vos y vosotros. | Regional recognition objective; Joaquín explicitly identifies Montevideo; exercises compare forms. |

### a1-06

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-06.theory.parts.0.body.3` | Las formas de **yo** (tengo) y de **tú, él, ellos** (tienes, tiene, tienen) son irregulares; **nosotros** y **vosotros** son regulares. Con **vos** se dice **tenés**. | Tener recognition contrasts tú/vos; Bruno is the Argentine character and feedback labels voseo argentino. |
| `a1-06.grammar.exercises.0.items.3.q` | —Bruno, ¿vos ___ hermanos? —No, soy hijo único. | Tener recognition contrasts tú/vos; Bruno is the Argentine character and feedback labels voseo argentino. |
| `a1-06.grammar.exercises.0.items.3.options.0` | tenés | Tener recognition contrasts tú/vos; Bruno is the Argentine character and feedback labels voseo argentino. |
| `a1-06.grammar.exercises.0.items.3.why` | Con **vos**: tenés. | Tener recognition contrasts tú/vos; Bruno is the Argentine character and feedback labels voseo argentino. |
| `a1-06.listening.script.4.text` | ¿Y vos tenés hermanos? | Tener recognition contrasts tú/vos; Bruno is the Argentine character and feedback labels voseo argentino. |
| `a1-06.listening.stages.2.exercise.items.6.text` | ¿Vos tenés hermanos? | Tener recognition contrasts tú/vos; Bruno is the Argentine character and feedback labels voseo argentino. |

### a1-07

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-07.theory.parts.0.body.3` | Con **vos** la terminación lleva tilde: **vos comés**, **vos vivís**. En América, **beber** se usa, pero para las bebidas es muy frecuente **tomar** (verbo en -ar): _¿Qué tomas?_ | Explicit tú/vos contrast in -er/-ir explanation and correction practice. |
| `a1-07.theory.parts.0.mistakes.1.wrong` | Ella comé pan. | Explicit tú/vos contrast in -er/-ir explanation and correction practice. |
| `a1-07.grammar.exercises.0.items.4.q` | —¿Vos ___ carne? —No, soy vegetariano. | Explicit tú/vos contrast in -er/-ir explanation and correction practice. |
| `a1-07.grammar.exercises.0.items.4.why` | Vos + -er → **comés**, con tilde. | Explicit tú/vos contrast in -er/-ir explanation and correction practice. |
| `a1-07.quiz.items.10.answers.1` | Vos comés pan todos los días, ¿no? | Explicit tú/vos contrast in -er/-ir explanation and correction practice. |
| `a1-07.quiz.items.10.why` | Con **tú** la forma es _comes_, sin tilde; _comés_ es la forma de **vos**. | Explicit tú/vos contrast in -er/-ir explanation and correction practice. |

### a1-08

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-08.theory.parts.0.body.2` | La pregunta clave es **¿Dónde está…?** (un lugar) o **¿Dónde están…?** (varios lugares). En Guatemala, Argentina y otros países con **vos**, la forma es la misma que con tú: **¿Dónde estás vos?** | Estar form comparison and treatment distractor. Dale is colloquial agreement by Andrés, a Colombian in Guatemala, not learner-facing instruction. |
| `a1-08.grammar.exercises.0.items.0.why` | Con **tú** (y con vos): estás. | Estar form comparison and treatment distractor. Dale is colloquial agreement by Andrés, a Colombian in Guatemala, not learner-facing instruction. |
| `a1-08.listening.script.14.text` | Dale. ¡Nos vemos en un rato! | Estar form comparison and treatment distractor. Dale is colloquial agreement by Andrés, a Colombian in Guatemala, not learner-facing instruction. |
| `a1-08.listening.stages.0.exercise.items.1.options.2` | de vos | Estar form comparison and treatment distractor. Dale is colloquial agreement by Andrés, a Colombian in Guatemala, not learner-facing instruction. |

### a1-09

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-09.theory.parts.0.support.1` | With vos the pronoun is _te_ and the verb has the vos ending: _vos te levantás_. With usted: _usted se levanta_. | Frozen English copy; embedded Spanish regional example is part of that English support. |
| `a1-09.grammar.exercises.0.items.3.q` | ¿Vos a qué hora ___ despertás? | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |
| `a1-09.grammar.exercises.0.items.3.options.2` | vos | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |
| `a1-09.grammar.exercises.0.items.3.why` | Con vos el pronombre es **te**: _te despertás_. | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |
| `a1-09.listening.script.3.text` | Yo me levanto temprano, no hay problema. ¿Y vos, Pablo, a qué hora te duchás? | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |
| `a1-09.listening.script.13.text` | Para vos todo es temprano, Pablo. | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |
| `a1-09.listening.stages.2.exercise.items.2.why` | Forma de vos: **te** duchás. | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |
| `a1-09.quiz.items.5.source` | Te duchas por la mañana. (vos) | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |
| `a1-09.quiz.items.5.instruction` | Escribe la forma de vos. | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |
| `a1-09.quiz.items.5.answers.1` | Vos te duchás por la mañana. | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |
| `a1-09.quiz.items.5.why` | Con vos, el pronombre es **te** y el verbo lleva acento al final: **duchás**. | Reflexive tú/vos recognition and transformation; Valentina is explicitly from Rosario. |

### a1-10

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-10.theory.parts.2.table.rows.2.0` | vos (variación regional) | Checkpoint recalls regional forms; Diego is explicitly Argentine and the listening quiz explains llevás as voseo. |
| `a1-10.listening.script.8.text` | ¿Vos sabés si el comedor tiene comida vegetariana? Mi papá dice que hay frijoles, tortillas y pescado… ¡pero el pescado no es vegetariano! Bueno, nos vemos mañana. | Checkpoint recalls regional forms; Diego is explicitly Argentine and the listening quiz explains llevás as voseo. |
| `a1-10.listening.stages.0.exercise.items.2.why` | _¿Vos sabés si el comedor tiene comida vegetariana?_ | Checkpoint recalls regional forms; Diego is explicitly Argentine and the listening quiz explains llevás as voseo. |
| `a1-10.quiz.items.3.audio` | ¡Hola! Soy Martín. La cena es el viernes a las ocho en casa de mi hermana. Ella vive al lado del banco. Yo llevo la comida y vos llevás el jugo, ¿dale? | Checkpoint recalls regional forms; Diego is explicitly Argentine and the listening quiz explains llevás as voseo. |
| `a1-10.quiz.items.3.why` | _Yo llevo la comida y vos llevás el jugo_: **llevás** es la forma de vos de _llevar_. | Checkpoint recalls regional forms; Diego is explicitly Argentine and the listening quiz explains llevás as voseo. |

### a1-11

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-11.goal.steps.2` | Reconoce el **vos** de Centroamérica: `vos querés`, `vos podés`. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.intro` | Esta semana estás en San Salvador. Tus amigos te escriben: «¿Querés subir al volcán el sábado?». Para responder necesitas verbos muy frecuentes que cambian una vocal: **querer**, **poder**, **preferir**, **jugar**… | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.heading` | Vos querés, vos podés: el voseo en Centroamérica | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.body.0` | En El Salvador, Honduras, Nicaragua, Guatemala y Costa Rica, mucha gente usa **vos** con amigos y familia, igual que en Argentina y Uruguay. En este curso aprendes **tú** como forma principal, pero vas a oír _vos_ en la calle y en los mensajes. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.body.1` | La buena noticia: con **vos** estos verbos **no cambian la vocal**. La forma se parece al infinitivo y lleva tilde al final: querer → **vos querés**, poder → **vos podés**, jugar → **vos jugás**, preferir → **vos preferís**, pedir → **vos pedís**. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.body.2` | Con verbos regulares pasa lo mismo: **vos trabajás**, **vos comés**, **vos vivís**. Con reflexivos, el pronombre es **te**: _¿A qué hora te levantás?_ | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.body.3` | Tú y vos significan lo mismo. En San Salvador también se oye **usted** entre amigos y en familia: es una forma de cariño y respeto, no de distancia. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.support.0` | _Vos_ is an informal 'you', used across Central America and the River Plate. Its present forms are stressed on the ending and keep the infinitive vowel: _querés, podés, jugás_ — no stem change. | Frozen English copy; embedded Spanish regional example is part of that English support. |
| `a1-11.theory.parts.2.support.1` | You don't need to produce _vos_ yet. Just recognise it: _¿Vos querés venir?_ = _¿Tú quieres venir?_ | Frozen English copy; embedded Spanish regional example is part of that English support. |
| `a1-11.theory.parts.2.table.caption` | Tú y vos en presente | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.table.head.2` | vos | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.table.rows.0.2` | querés | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.table.rows.1.2` | podés | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.examples.0.es` | ¿Vos querés subir al volcán el sábado? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.examples.0.en` | Do you want to climb the volcano on Saturday? (vos) | Frozen English copy; embedded Spanish regional example is part of that English support. |
| `a1-11.theory.parts.2.examples.1.es` | ¿Podés a las ocho? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.examples.1.en` | Can you make it at eight? (vos) | Frozen English copy; embedded Spanish regional example is part of that English support. |
| `a1-11.theory.parts.2.examples.2.es` | ¿Y vos qué preferís, cine o fútbol? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.examples.2.en` | And what do you prefer, cinema or football? (vos) | Frozen English copy; embedded Spanish regional example is part of that English support. |
| `a1-11.theory.parts.2.mistakes.0.wrong` | ¿Vos quierés ir? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.mistakes.0.right` | ¿Vos querés ir? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.mistakes.0.why` | Con _vos_ el acento cae en la terminación, así que la raíz no cambia: **querés**. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.2.tip` | Si oyes una forma con tilde al final y sin cambio de vocal (_podés, jugás_), es casi seguro **vos**. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.3.body.1` | Para **aceptar**: **¡Sí, claro!**, **¡Buena idea!**, **¡Perfecto!** Cada región tiene su palabra rápida: **¡Va, pues!** en El Salvador y Honduras, **¡Dale!** en Centroamérica y el Río de la Plata, **¡Vale!** en España, **¡Sale!** o **¡Va!** en México. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.3.support.2` | Regional 'OK!': _¡Va, pues!_ (El Salvador, Honduras), _¡Dale!_ (Central America, Argentina, Uruguay), _¡Vale!_ (Spain), _¡Sale!_ (Mexico). | Frozen English copy; embedded Spanish regional example is part of that English support. |
| `a1-11.theory.parts.3.table.rows.3.0` | ¿Vos querés venir? (voseo) | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.theory.parts.3.table.rows.3.1` | ¡Va, pues! / ¡Dale! | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.listening.script.4.text` | Yo no juego al fútbol, pero quiero ver la película nueva de Pixar. ¿Vos querés ir al cine, Karla? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.listening.script.7.text` | ¡Va, pues! A las ocho. Lucía, ¿vos podés? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.listening.script.9.text` | Entonces almorzamos juntos después. ¿Querés comer pupusas? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.listening.script.10.text` | ¡Dale! ¿Dónde está la pupusería? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.listening.stages.2.exercise.items.3.text` | ¡Dale! | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.listening.stages.2.exercise.items.3.why` | Lucía es argentina: _¡Dale!_ = de acuerdo. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.reading.text.4` | **@meli.sv:** @josue503 ¿Querés jugar en el torneo? Necesitamos un equipo de cinco 😅 | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.reading.noticing.items.0.quote` | ¿Querés jugar en el torneo? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.0.items.1.context` | Tu compañero hondureño: «¿Vos podés jugar al básquetbol el sábado?» Tú estás libre. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.0.items.1.options.2` | Vos podés. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.title` | De tú a vos | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.prompt` | Escribe la pregunta como la diría un amigo salvadoreño (con vos). | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.items.0.answers.0` | ¿Vos querés venir? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.items.0.answers.1` | ¿Querés venir? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.items.0.why` | Con vos: **querés**, sin cambio de vocal y con tilde. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.items.1.answers.0` | ¿Podés el domingo? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.items.1.answers.1` | ¿Vos podés el domingo? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.items.1.why` | Con vos: **podés**. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.items.2.answers.1` | ¿Vos a qué hora te acostás los sábados? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.items.2.answers.2` | ¿A qué hora te acostás vos los sábados? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.4.items.2.why` | _Acostarse_ es o → ue con tú (te ac**ue**stas), pero con vos no cambia: **te acostás**. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.practice.exercises.5.items.0.prompt` | Karla: «¿Querés jugar al básquetbol el sábado a las diez?» Tú puedes, pero prefieres otra hora. Acepta y propone otra hora. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.useInClass.cards.3.task` | Pregunta qué palabra usa tu profesor o profesora para decir «OK» a un plan (vale, dale, va, sale…) y si usa vos o tú con sus amigos. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.useInClass.cards.3.phrases.1` | ¿Usas vos o tú? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.quiz.items.9.q` | Un amigo de Tegucigalpa te dice «¿Vos querés ir al concierto?». ¿Qué significa? | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |
| `a1-11.complete.canNow.3` | Reconocer el voseo centroamericano: vos querés, vos podés. | Voseo centroamericano is an explicit objective; Salvadoran/Honduran dialogue and contrasts plus Argentine Lucía; instructions remain tú. |

### a1-12

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-12.theory.parts.0.body.4` | Para aclarar o insistir, añade **a + persona**: _**A Carlos** le gusta el rock_, _**A mí** me encanta_, _¿**A ti** te gusta?_ Con vos (Honduras, Nicaragua, El Salvador…): _¿**A vos** te gusta?_ | Explicit gustar treatment comparison (a ti/a vos/a usted). |
| `a1-12.theory.parts.2.body.3` | Para preguntar por los gustos de otra persona, la forma más rápida es **¿Y a ti?** (o **¿Y a vos?**, **¿Y a usted?**). | Explicit gustar treatment comparison (a ti/a vos/a usted). |
| `a1-12.grammar.exercises.1.items.1.q` | ¿A vos ___ gusta la punta? | Explicit gustar treatment comparison (a ti/a vos/a usted). |
| `a1-12.vocabulary.groups.3.items.4.es` | ¿Y a ti? / ¿Y a vos? | Explicit gustar treatment comparison (a ti/a vos/a usted). |

### a1-13

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-13.theory.parts.4.body.5` | Con los dependientes se usa normalmente **usted**: _¿Tiene…?_, _¿Me hace…?_ En Nicaragua oirás **vos** entre amigos (_¿Vos qué talla usás?_), pero en las tiendas lo más normal es _usted_. | Explicit Nicaraguan register note contrasts friends using vos with shop assistants using usted. |

### a1-14

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-14.theory.parts.0.support.2` | Use _usted_ with waiters. In Nicaragua, friends use _vos_ with each other (_¿Vos qué querés?_), but the waiter will usually treat you as _usted_. | Frozen English copy; embedded Spanish regional example is part of that English support. |
| `a1-14.listening.script.14.text` | Javier, ¿vos sabés cuánto es la propina acá? | Camila is explicitly from Córdoba, Argentina; comprehension distractor identifies her treatment. |
| `a1-14.listening.stages.0.exercise.items.0.options.2` | De vos, como Camila | Camila is explicitly from Córdoba, Argentina; comprehension distractor identifies her treatment. |

### a1-15

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-15.theory.intro` | Esto es un **checkpoint**: no hay gramática nueva. Aquí ordenas lo que ya sabes y aclaras las confusiones más típicas. La parada es **San José, Costa Rica**, donde mucha gente usa **usted** incluso con amigos y familia (el _ustedeo_), y también **vos** entre amigos. Por eso esta semana aparece usted en situaciones muy informales. | Ustedeo and vos in Costa Rica are explicit objectives; Mateo is Uruguayan; classification teaches the contrast. |
| `a1-15.theory.parts.1.body.3` | En Costa Rica, entre amigos, oyes mucho **¿A usted le gusta…?** y **¿Usted quiere…?**: es el ustedeo tico, y no es frío ni distante. Entre amigos también se usa **vos**: _¿Vos querés venir?_ | Ustedeo and vos in Costa Rica are explicit objectives; Mateo is Uruguayan; classification teaches the contrast. |
| `a1-15.listening.script.1.text` | Yo quiero ver el Teatro Nacional. ¿Vos podés el sábado, Lucía? | Ustedeo and vos in Costa Rica are explicit objectives; Mateo is Uruguayan; classification teaches the contrast. |
| `a1-15.listening.stages.2.prompt` | Tercera escucha: ¿cómo se tratan los amigos? Fíjate en tú, vos y usted. | Ustedeo and vos in Costa Rica are explicit objectives; Mateo is Uruguayan; classification teaches the contrast. |
| `a1-15.listening.stages.2.exercise.categories.1` | vos | Ustedeo and vos in Costa Rica are explicit objectives; Mateo is Uruguayan; classification teaches the contrast. |
| `a1-15.listening.stages.2.exercise.items.1.text` | ¿Vos podés el sábado, Lucía? | Ustedeo and vos in Costa Rica are explicit objectives; Mateo is Uruguayan; classification teaches the contrast. |
| `a1-15.listening.stages.2.exercise.items.1.why` | Mateo es uruguayo: **vos podés** (= tú puedes). | Ustedeo and vos in Costa Rica are explicit objectives; Mateo is Uruguayan; classification teaches the contrast. |
| `a1-15.complete.canNow.6` | Reconocer el ustedeo y el vos de Costa Rica. | Ustedeo and vos in Costa Rica are explicit objectives; Mateo is Uruguayan; classification teaches the contrast. |

### a1-16

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-16.theory.parts.0.body.1` | El verbo **ir** es muy irregular: **voy, vas, va, vamos, vais, van**. Con **vos** es igual que con tú: _vos vas_. Solo cambia **ir**; el segundo verbo siempre está en infinitivo: _vamos a **cenar**_, nunca _vamos a cenamos_. | Explicit note explaining vos vas has the same form as tú vas. |

### a1-17

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-17.listening.script.3.text` | ¡Qué salón tan luminoso! Bueno, aquí decís «sala», ¿no? Tiene mucha luz. | Decís is vosotros plural from Jordi, the Spanish character, referring to local speakers; not singular voseo. |

### a1-19

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-19.theory.parts.3.body.0` | **Invitar.** La forma más sencilla es una pregunta con _querer_: **¿Quieres venir a mi fiesta?** También: **¿Vienes a cenar el sábado?**, **Te invito a mi cumpleaños**. En España se oye mucho **¿Te apetece…?**; en muchos países de América, **¿Te animas a…?**. Con vos: **¿Querés venir?** | Explicit invitation comparison with vos; Nico uses es-UY voice within the regional cast. |
| `a1-19.listening.script.5.text` | Hola, Rosa. ¡Muchas felicidades! Pero… ¡qué pena! Es que ese fin de semana tengo que trabajar en Colón. Y vos, ¿estás libre el domingo 18? ¿Tomamos algo? | Explicit invitation comparison with vos; Nico uses es-UY voice within the regional cast. |

### a1-20

| Field | Exact phrase | Reason |
|---|---|---|
| `a1-20.listening.script.3.text` | Che, Valeria, ¿y vos qué vas a hacer después de Panamá? | Martín is explicitly identified as Argentine; Che/vos/dale belong to his dialogue. |
| `a1-20.listening.script.9.text` | Dale, el miércoles 14. Pero hay que reservar mesa. ¿Quién la reserva? | Martín is explicitly identified as Argentine; Che/vos/dale belong to his dialogue. |

### a2-02

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-02.reading.text.1` | A mediodía comimos en un restaurante del barrio. Elisa pidió una sopa y yo probé un plato de verduras. Por la tarde regresamos al parque y leímos nuestros libros en silencio. A las cinco encendí el móvil. Recibí varios mensajes, pero ninguno era urgente. Al final del día escribí una nota para recordar la experiencia. Descansé mejor que otros sábados y decidí repetir el plan una vez al mes. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### a2-03

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-03.listening.script.3.text` | Volví en 1982 y abrí la tienda dos años después. Conocí a tu abuela en 1985. Ella vino a comprar un cuaderno y hablamos toda la tarde. No pongas que fui un gran vendedor: ¡ese día olvidé cobrar el cuaderno! | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### a2-05

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-05.listening.script.1.text` | Empecé el curso. Abrí el puesto en 1985. Antes trabajaba en una oficina y cocinaba solo para mi familia. Solía llevar comida a mis compañeras y ellas me animaron. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### a2-06

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-06.reading.text.1` | Mientras esperaba, abrí la bolsa para buscar el regalo. Dentro había unos zapatos enormes y un abrigo. No era mi bolsa. Primero llamé a la empresa de autobuses, pero nadie contestó. Después volví a la parada. Allí estaba un hombre con otra bolsa gris. Parecía preocupado y miraba su teléfono. Le pregunté si buscaba unos zapatos. Él se rio y me mostró mi regalo. Al final cambiamos las bolsas y tomamos un café. Desde ese día pongo una cinta de color en mi equipaje. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-06.reading.noticing.items.1.quote` | Mientras esperaba, abrí la bolsa para buscar el regalo. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### a2-09

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-09.theory.parts.0.body.0` | Para instrucciones afirmativas con tú usa corta, come, abre; hay formas irregulares como haz, pon, ten, ven, di, sal, sé y ve. Usted usa corte, coma, abra; ustedes corten, coman, abran. Vosotros: cortad, comed, abrid. En variedades con vos puedes oír cortá, comé, abrí. Elige una forma coherente con tu interlocutor. | Explicit imperative treatment comparison: tú/usted/vosotros/ustedes and marked voseo example/transformation. |
| `a2-09.theory.parts.1.examples.1.es` | Cortá el pan; después ponelo en la mesa. | Explicit imperative treatment comparison: tú/usted/vosotros/ustedes and marked voseo example/transformation. |
| `a2-09.grammar.exercises.1.items.2.instruction` | Cambia solo el imperativo a vos, sin escribir el pronombre vos; conserva el pan. | Explicit imperative treatment comparison: tú/usted/vosotros/ustedes and marked voseo example/transformation. |
| `a2-09.grammar.exercises.1.items.2.answers.0` | Cortá el pan. | Explicit imperative treatment comparison: tú/usted/vosotros/ustedes and marked voseo example/transformation. |
| `a2-09.writing.useLanguage.3` | Cortá el pan; después ponelo en la mesa. | Explicit imperative treatment comparison: tú/usted/vosotros/ustedes and marked voseo example/transformation. |

### a2-10

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-10.practice.exercises.6.items.0.prompt` | Reto de recuperación en la semana 10: Explica una receta distinta en seis pasos, con cantidades, herramientas y dos pronombres unidos al imperativo. Da una instrucción en tú, usted, vosotros, ustedes y vos. Tu pareja altera el orden de dos pasos: escucha y corrige amablemente. Pide que repita la cantidad antes de continuar. | Retrieval task explicitly requires comparing five treatment forms in imperatives. |
| `a2-10.practice.exercises.6.items.0.model` | Primero lava las frutas y córtalas. Mezcla el yogur y añádelo. Tú prueba la mezcla; usted pruébela; vosotros probadla; ustedes pruébenla; vos probala. ¿Puedes repetir cuántas cucharadas, por favor? | Retrieval task explicitly requires comparing five treatment forms in imperatives. |

### a2-11

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-11.reading.text.1` | Sigo leyendo diez minutos al día. Ahora estoy leyendo una historia sencilla que elegí en la biblioteca. Acabo de terminar el primer capítulo y he vuelto a mirar las palabras que marqué el lunes. Algunas ya me resultan familiares. Los viernes hablo con una compañera del curso. Ella está preparando una entrevista y necesita practicar preguntas. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-11.practice.exercises.4.items.0.prompt` | Reto de recuperación en la semana 11: Explica una receta distinta en seis pasos, con cantidades, herramientas y dos pronombres unidos al imperativo. Da una instrucción en tú, usted, vosotros, ustedes y vos. Tu pareja altera el orden de dos pasos: escucha y corrige amablemente. Pide que repita la cantidad antes de continuar. | Imperative retrieval explicitly compares treatments; unrelated elegí is first-person past. |
| `a2-11.practice.exercises.4.items.0.model` | Primero lava las frutas y córtalas. Mezcla el yogur y añádelo. Tú prueba la mezcla; usted pruébela; vosotros probadla; ustedes pruébenla; vos probala. ¿Puedes repetir cuántas cucharadas, por favor? | Imperative retrieval explicitly compares treatments; unrelated elegí is first-person past. |

### a2-16

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-16.title` | Elegí estudiar por la tarde | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.theory.parts.0.heading` | Elegí estudiar por la tarde · formas que necesitas | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.theory.parts.0.body.0` | Porque introduce una causa después de la idea: elegí el curso porque era práctico. Como puede presentar la causa al principio: como trabajaba por la mañana, elegí el turno de tarde. Por eso y así que presentan una consecuencia. No los cambies sin reorganizar el sentido de la frase. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.theory.parts.0.examples.0.es` | Elegí ese curso porque tenía prácticas. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.grammar.exercises.0.items.0.q` | Elegí el turno de tarde ___ trabajo por la mañana. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.pronunciation.produce.0.text` | Como trabajaba lejos / elegí otro horario. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.practice.exercises.0.items.0.words.0` | Elegí | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.practice.exercises.1.items.0.options.0` | Elegí el curso porque por eso así que. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.practice.exercises.1.items.1.q` | En esta interacción de «Elegí estudiar por la tarde», ¿cómo compruebas que puedes continuar? | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.practice.exercises.2.items.0.prompt` | Para «Elegí estudiar por la tarde», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.writing.useLanguage.0` | Elegí ese curso porque tenía prácticas. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.writing.model.0` | El año pasado decidí hacer un curso de atención al público. Trabajaba en una tienda, pero me costaba responder a las preguntas de los clientes. Como quería practicar con otras personas, elegí un grupo presencial. Antes de pagar, visité el centro y hablé con la profesora. Después de comprobar el horario, pedí cambiar un turno en el trabajo. Mi encargada aceptó, así que pude asistir todas las semanas. Al terminar, empecé a atender pedidos por teléfono. Todavía cometo errores, pero ahora pido aclaraciones con más seguridad. Por eso he decidido continuar con otro curso el próximo trimestre. Antes de apuntarme, comprobaré si el horario es posible para mí. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.quiz.items.2.sentence` | Como no tenía tiempo, porque elegí otro curso. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.quiz.items.2.answers.0` | Como no tenía tiempo, elegí otro curso. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.quiz.items.6.model` | El año pasado decidí hacer un curso de atención al público. Trabajaba en una tienda, pero me costaba responder a las preguntas de los clientes. Como quería practicar con otras personas, elegí un grupo presencial. Antes de pagar, visité el centro y hablé con la profesora. Después de comprobar el horario, pedí cambiar un turno en el trabajo. Mi encargada aceptó, así que pude asistir todas las semanas. Al terminar, empecé a atender pedidos por teléfono. Todavía cometo errores, pero ahora pido aclaraciones con más seguridad. Por eso he decidido continuar con otro curso el próximo trimestre. Antes de apuntarme, comprobaré si el horario es posible para mí. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `a2-16.complete.review.0` | En dos días, repite la misión «Elegí estudiar por la tarde» con personas y datos diferentes. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### a2-18

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-18.practice.exercises.3.items.0.model` | Como quería cambiar de empleo, preparé una entrevista. Antes de enviar el formulario, lo revisé. Después de hablar con la encargada, acepté las prácticas. Cuando llegué, saludé al equipo. Aprendí mucho; por eso seguí allí. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### a2-20

| Field | Exact phrase | Reason |
|---|---|---|
| `a2-20.practice.exercises.3.items.0.model` | Como quería cambiar de empleo, preparé una entrevista. Antes de enviar el formulario, lo revisé. Después de hablar con la encargada, acepté las prácticas. Cuando llegué, saludé al equipo. Aprendí mucho; por eso seguí allí. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### b1-01

| Field | Exact phrase | Reason |
|---|---|---|
| `b1-01.listening.script.1.text` | ¿Te subiste a otro? A mí me pasó algo parecido el año pasado. Vi a unos viajeros con mochilas y los seguí sin preguntar adónde iban. ¿Cuándo te diste cuenta del error? | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `b1-01.reading.text.0` | Llegué a la boda de mi hermana con una mochila prestada y una historia que nadie esperaba. Había preparado el viaje con una semana de antelación: compré un billete temprano y guardé el traje en una maleta pequeña. La noche anterior miré el horario, pero no abrí el aviso que la compañía había enviado por correo. Pensé que era publicidad y seguí haciendo la cena. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### b1-03

| Field | Exact phrase | Reason |
|---|---|---|
| `b1-03.listening.script.3.text` | Me vendría bien, pero preferiría no aprender un discurso de memoria. Quiero explicar por qué elegí el curso y preguntar cómo trabajaremos. ¿Puedes escucharme y decirme qué parte no se entiende? | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### b2-02

| Field | Exact phrase | Reason |
|---|---|---|
| `b2-02.listening.script.2.text` | En mi caso ocurre casi lo contrario. Mi familia esperaba que fuera a la universidad y se sorprendió cuando elegí una formación técnica. A veces hablan como si trabajar con las manos significara renunciar a pensar. Sé que no lo hacen para ofenderme, pero me pesa. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |

### b2-19

| Field | Exact phrase | Reason |
|---|---|---|
| `b2-19.theory.parts.0.examples.1.es` | Vos tenés la maleta junto a la puerta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.theory.parts.0.examples.2.es` | Imperativo de venir con vos: vení y mirá la etiqueta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.theory.parts.0.mistakes.0.wrong` | Vos tienes la misma maleta, dijo el personaje voseante. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.theory.parts.0.mistakes.0.right` | Vos tenés la misma maleta, dijo el personaje voseante. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.theory.parts.0.mistakes.0.why` | En el voseo rioplatense trabajado aquí se usa tenés; otras regiones tienen paradigmas distintos. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.theory.parts.1.body.0` | El voseo rioplatense utiliza formas como vos tenés, vení y decime; ustedes y vosotros seleccionan conjugaciones distintas. Auto/coche/carro, departamento/piso y celular/móvil son variantes léxicas. La sílaba tónica del voseo puede practicarse con síntesis, pero el sheísmo requiere una muestra real verificada en clase: una etiqueta de voz no demuestra una variedad. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.theory.parts.1.examples.1.es` | Imperativo de venir con vos: vení y mirá la etiqueta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.grammar.exercises.0.items.1.q` | Vos ___ la maleta junto a la puerta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.grammar.exercises.0.items.1.answers.0.0` | tenés | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.grammar.exercises.0.items.2.q` | Imperativo de venir con vos: ___ y mirá la etiqueta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.grammar.exercises.0.items.2.answers.0.0` | vení | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.grammar.exercises.1.items.0.model` | Vos tenés la maleta; vení y decime qué pasó. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.focus` | Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.explanation.0` | Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.examples.1.es` | Vos tenés la maleta junto a la puerta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.examples.2.es` | Imperativo de venir con vos: vení y mirá la etiqueta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.perceive.items.1.options.1` | tenés | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.perceive.items.1.audio` | Vos tenés la maleta junto a la puerta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.produce.0.tip` | Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.produce.1.text` | Vos tenés la maleta junto a la puerta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.produce.1.tip` | Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.produce.2.text` | Imperativo de venir con vos: vení y mirá la etiqueta. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.pronunciation.produce.2.tip` | Contrasta tenés/tienes y vení/ven; cambia ritmo y voz al pasar de narración a diálogo. Estudia sheísmo solo con una muestra real identificada. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.listening.script.1.text` | Quería acercarlo. El viaje ya había ocurrido, pero al decir entonces suena el celular recupero la impresión de sorpresa. Después vuelvo al pasado. También mantuve vení y vos tenés porque forman parte de la voz del personaje, aunque yo use otras formas en la narración. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.listening.script.4.text` | También me preguntaron por qué escribí hoy llegué y no hoy he llegado en otro fragmento. Las dos formas pueden aparecer según la variedad y la perspectiva temporal. No quería que una elección se presentara como error solo porque no coincide con el uso de otro país. | First-person preterite in past narrative or its exercise/title, not learner-directed voseo. |
| `b2-19.reading.text.1` | Entonces suena el celular. «¿Ya llegaste? Vení a la salida del costado; te estoy esperando en el auto». La voz no había cambiado tanto como ella temía. Elena se quedó inmóvil unos segundos antes de responder. En otra época habría corregido la expresión salida del costado, como si la manera de nombrar una puerta pudiera decir algo sobre la manera de vivir. Ahora preguntó simplemente a qué lado debía ir. El edificio había sido reformado y no quería convertir una duda práctica en otra pequeña batalla. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.reading.text.2` | Su hermano estaba junto a un coche viejo. «Vos tenés la misma maleta», dijo, y sonrió sin acercarse todavía. Elena iba a responder que no, que aquella la había comprado hacía poco, cuando vio una marca en el asa. La maleta no era suya. Durante el viaje había tomado otra idéntica y no lo había advertido hasta ese momento. Los dos se miraron y comenzaron a reír, primero con sorpresa y después con una facilidad que ninguno había previsto. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.reading.tasks.1.items.0.model` | Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.practice.exercises.0.items.1.words.6` | vos: | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.practice.exercises.0.items.1.words.7` | vení | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.practice.exercises.0.items.1.words.9` | mirá | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.practice.exercises.1.items.0.sentence` | Vos tienes la misma maleta, dijo el personaje voseante. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.practice.exercises.1.items.0.answers.0` | Vos tenés la misma maleta, dijo el personaje voseante. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.practice.exercises.1.items.0.why` | En el voseo rioplatense trabajado aquí se usa tenés; otras regiones tienen paradigmas distintos. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.practice.exercises.2.items.1.model` | Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.writing.useLanguage.1` | El voseo rioplatense utiliza formas como vos tenés, vení y decime; ustedes y vosotros seleccionan conjugaciones distintas. Auto/coche/carro, departamento/piso y celular/móvil son variantes léxicas. La sílaba tónica del voseo puede practicarse con síntesis, pero el sheísmo requiere una muestra real verificada en clase: una etiqueta de voz no demuestra una variedad. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.writing.model.1` | En la estación sonó el celular. «Vení a la entrada del costado», dijo su hermano. Elena le pidió que precisara cuál: el edificio había cambiado y no reconocía las salidas. «La que da al estacionamiento; estoy junto al auto». Ella agradeció la explicación sin corregir ninguna palabra. Había pasado demasiado tiempo defendiendo maneras de decir cosas que ambos entendían. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.writing.model.2` | Su hermano esperaba junto a un coche viejo. Miró el equipaje y sonrió: «Vos tenés la misma maleta». Elena iba a explicarle que era nueva cuando ve la etiqueta. No reconoce el nombre. Durante el viaje había tomado otra maleta idéntica. Los dos se quedaron en silencio unos segundos y después comenzaron a reír con una facilidad inesperada. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.speaking.tasks.0.model` | Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.quiz.items.1.audio` | Quería acercarlo. El viaje ya había ocurrido, pero al decir entonces suena el celular recupero la impresión de sorpresa. Después vuelvo al pasado. También mantuve vení y vos tenés porque forman parte de la voz del personaje, aunque yo use otras formas en la narración. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.quiz.items.2.q` | Vos ___ venir mañana, según el voseo del diálogo. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.quiz.items.2.answers.0.0` | podés | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.quiz.items.3.model` | Vos venís con el celular y me contás qué ocurrió. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.quiz.items.4.sentence` | Vení y dígame qué pasó, le dijo a su hermano usando vos. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.quiz.items.4.answers.0` | Vení y decime qué pasó, le dijo a su hermano usando vos. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.quiz.items.5.model` | Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |
| `b2-19.quiz.items.6.model` | Antes de salir, había ensayado varias disculpas. En la estación buscaba un rostro conocido cuando sonó el teléfono. «Vení a la entrada del costado», dijo mi hermano. Le pedí que precisara cuál, sin corregir su manera de decirlo. Entonces veo la etiqueta: llevaba otra maleta. Volvimos juntos al mostrador y empezamos a hablar de algo que podíamos resolver. No arreglamos veinte años; encontramos una primera conversación. Uso el presente histórico solo en el descubrimiento para destacar el giro. | Voseo is an explicit curriculum objective; examples, quoted character speech and exercises teach tenés/vení/decime and preserve narrative voice. |

### b2-20

| Field | Exact phrase | Reason |
|---|---|---|
| `b2-20.listening.script.4.text` | Sí, con una precisión: aceptaremos gestionar el sistema después de ver la versión reducida, no antes. Vos tenés nuestro contacto; mandanos el borrador y lo revisamos mañana. Si alguna expresión regional resulta poco clara para las otras asociaciones, la aclaramos sin cambiar el compromiso. | Checkpoint retrieves B2-19 variation objective; discussion explicitly addresses regional expressions and adapting treatment across associations. |
| `b2-20.reading.text.4` | Nota del voluntariado. Las asociaciones visitantes necesitan una explicación breve y coherente del acuerdo. Algunas utilizan ustedes y otras vosotros; en conversaciones informales también aparece vos. La coordinación no exige uniformar esas formas, pero sí evitar que diferentes versiones del programa indiquen condiciones distintas. Se propone una ficha común con salas disponibles, horarios confirmados, transporte y persona responsable de resolver dudas. Las adaptaciones lingüísticas deben conservar esos cuatro elementos. | Checkpoint retrieves B2-19 variation objective; discussion explicitly addresses regional expressions and adapting treatment across associations. |
| `b2-20.practice.exercises.3.items.7.model` | Guía de revisión, no texto para copiar: Puedo usar el presente histórico y reconozco el uso del perfecto y del indefinido en España y en América. Puedo describir atmósferas, gestos y sensaciones con precisión. Puedo leer un fragmento narrativo con cambios de ritmo y de voz. Puedo interpretar el giro final de un microrrelato. Puedo escribir un relato de 200 palabras con tiempos del pasado variados. Puedo reconocer y usar las formas de vos en presente e imperativo (vos tenés, vení, decime). Puedo adaptar el plural de segunda persona según la variedad. Puedo reconocer variantes léxicas frecuentes: auto/coche/carro, departamento/piso, celular/móvil. Puedo producir el acento del voseo y contrastar el sheísmo con una muestra real identificada en clase. Puedo entender a hablantes de distintas variedades y pedir aclaraciones sobre léxico regional. Puedo seguir un diálogo con voseo y léxico rioplatense sin confundir síntesis con una muestra de acento verificada. | Checkpoint retrieves B2-19 variation objective; discussion explicitly addresses regional expressions and adapting treatment across associations. |

### c1-05

| Field | Exact phrase | Reason |
|---|---|---|
| `c1-05.practice.exercises.3.items.18.model` | La distinción diferencia /s/ y /θ/; el seseo no establece esa oposición. Tú, vos y usted son formas de tratamiento, no pruebas acústicas de procedencia. Una etiqueta regional del sintetizador no acredita ninguno de estos rasgos. | Metalinguistic caution: tú/vos/usted do not identify an accent or origin. |

### c1-14

| Field | Exact phrase | Reason |
|---|---|---|
| `c1-14.pronunciation.explanation.0` | Reconoce cambios de tema y jerarquía aunque cambien léxico o tratamiento. Tú, vos y usted no identifican por sí solos una procedencia. Las etiquetas regionales de las voces son solicitudes de síntesis, no certificación acústica; la comparación de acentos requiere muestras verificadas o trabajo con el docente. | Metalinguistic caution: treatment cannot certify origin or synthesized accent. |
| `c1-14.pronunciation.produce.0.tip` | Reconoce cambios de tema y jerarquía aunque cambien léxico o tratamiento. Tú, vos y usted no identifican por sí solos una procedencia. Las etiquetas regionales de las voces son solicitudes de síntesis, no certificación acústica; la comparación de acentos requiere muestras verificadas o trabajo con el docente. | Metalinguistic caution: treatment cannot certify origin or synthesized accent. |
| `c1-14.reading.noticing.items.1.note` | Reconoce cambios de tema y jerarquía aunque cambien léxico o tratamiento. Tú, vos y usted no identifican por sí solos una procedencia. Las etiquetas regionales de las voces son solicitudes de síntesis, no certificación acústica; la comparación de acentos requiere muestras verificadas o trabajo con el docente. | Metalinguistic caution: treatment cannot certify origin or synthesized accent. |

### c1-15

| Field | Exact phrase | Reason |
|---|---|---|
| `c1-15.practice.exercises.3.items.18.model` | La distinción diferencia /s/ y /θ/; el seseo no establece esa oposición. Tú, vos y usted son formas de tratamiento, no pruebas acústicas de procedencia. Una etiqueta regional del sintetizador no acredita ninguno de estos rasgos. | Retrieval of the metalinguistic caution on treatment versus acoustic provenance. |

### c2-09

| Field | Exact phrase | Reason |
|---|---|---|
| `c2-09.theory.parts.0.body.0` | El voseo combina formas de pronombre y verbo de manera variable: vos tenés y vos tienes no autorizan a deducir por sí solos una identidad nacional. El leísmo de persona masculino singular admitido en ciertos usos no convierte cualquier le por lo en equivalente general. La omisión de una preposición exigida en me di cuenta de que puede aparecer en usos coloquiales; al editar se distingue descripción de la variedad y norma del género. Comprender no exige imitar ni corregir el acento ajeno. | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.theory.parts.0.examples.0.es` | Vos tenés la copia; ¿podés revisarla? | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.grammar.exercises.0.items.0.why` | El voseo combina formas de pronombre y verbo de manera variable: vos tenés y vos tienes no autorizan a deducir por sí solos una identidad nacional. El leísmo de persona masculino singular admitido en ciertos usos no convierte cualquier le por lo en equivalente general. La omisión de una preposición exigida en me di cuenta de que puede aparecer en usos coloquiales; al editar se distingue descripción de la variedad y norma del género. Comprender no exige imitar ni corregir el acento ajeno. | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.grammar.exercises.1.items.0.q` | Vos ___ la copia, según el ejemplo rioplatense. | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.grammar.exercises.1.items.0.answers.0.0` | tenés | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.grammar.exercises.1.items.0.why` | El voseo combina formas de pronombre y verbo de manera variable: vos tenés y vos tienes no autorizan a deducir por sí solos una identidad nacional. El leísmo de persona masculino singular admitido en ciertos usos no convierte cualquier le por lo en equivalente general. La omisión de una preposición exigida en me di cuenta de que puede aparecer en usos coloquiales; al editar se distingue descripción de la variedad y norma del género. Comprender no exige imitar ni corregir el acento ajeno. | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.grammar.exercises.1.items.1.why` | El voseo combina formas de pronombre y verbo de manera variable: vos tenés y vos tienes no autorizan a deducir por sí solos una identidad nacional. El leísmo de persona masculino singular admitido en ciertos usos no convierte cualquier le por lo en equivalente general. La omisión de una preposición exigida en me di cuenta de que puede aparecer en usos coloquiales; al editar se distingue descripción de la variedad y norma del género. Comprender no exige imitar ni corregir el acento ajeno. | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.grammar.exercises.1.items.2.why` | El voseo combina formas de pronombre y verbo de manera variable: vos tenés y vos tienes no autorizan a deducir por sí solos una identidad nacional. El leísmo de persona masculino singular admitido en ciertos usos no convierte cualquier le por lo en equivalente general. La omisión de una preposición exigida en me di cuenta de que puede aparecer en usos coloquiales; al editar se distingue descripción de la variedad y norma del género. Comprender no exige imitar ni corregir el acento ajeno. | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.vocabulary.groups.0.items.2.note` | uso de vos y sus combinaciones verbales | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.vocabulary.exercises.0.pairs.2.right` | uso de vos y sus combinaciones verbales | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.listening.script.0.text` | Nos han pedido hablar neutro, y yo necesito que me expliquen qué problema intentan resolver. Si un cliente no entiende una palabra, la reformulo. Pero cambiar vos por tú no aclara automáticamente un plazo ni convierte una respuesta en más respetuosa. En mi oficina, el tratamiento habitual depende de la relación, no de una escala universal de formalidad. | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.reading.text.0` | La cooperativa abrió un servicio de atención compartido entre tres oficinas. El primer manual exigía emplear un español neutro, pero no definía qué entendía por neutro. Una supervisora tachó vos en un correo; otra pidió sustituir tú por usted para mantener la cercanía habitual de su equipo. Las dos justificaban la corrección por razones opuestas. La aparente solución universal escondía preferencias locales que adquirían autoridad al escribirse en un manual. | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |
| `c2-09.writing.useLanguage.0` | Vos tenés la copia; ¿podés revisarla? | Explicit grammatical/pragmatic variation objective; supplied contrasts and critical discussion of linguistic neutrality. |

### c2-10

| Field | Exact phrase | Reason |
|---|---|---|
| `c2-10.practice.exercises.3.items.16.prompt` | Recuperación c2.voc.variacion-lexica-pragmatica. Intercambio escrito: agente A, «Ya lo revisamos: terminamos esta mañana»; agente B, «Ya lo revisamos: lo haremos antes de las cuatro». Tratamientos disponibles: «Vos podés avisarme» / «Usted me avisa cuando tenga la copia».<br><br>Explica las dos lecturas temporales con una paráfrasis inequívoca. Propón un tratamiento coherente con una relación concreta sin declarar uno universalmente más cortés. Formula una pregunta que compruebe la interpretación y evita generalizar a una región a partir de este intercambio. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-10.practice.exercises.3.items.16.model` | A informa de una tarea terminada; B anuncia una tarea próxima. Para un compromiso operativo, B puede decir lo revisaremos antes de las cuatro. La elección entre vos y usted depende de relación y uso; ninguna forma garantiza por sí sola cercanía o distancia. Una comprobación útil sería: ¿queda entonces pendiente la revisión hasta esta tarde? En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-10.practice.exercises.3.items.17.prompt` | Recuperación c2.gram.variacion-gramatical. Contrastes escritos suministrados: «Vos tenés la copia» / «Tú tienes la copia»; «A Juan lo vi ayer» / «A Juan le vi ayer»; «Me di cuenta de que faltaba una página» / «Me di cuenta que faltaba una página»; «Hoy he enviado el escrito» / «Hoy envié el escrito».<br><br>Identifica voseo, tuteo, leísmo de persona masculino singular y omisión de la preposición exigida por darse cuenta de. Explica por qué los dos tiempos del último par pueden responder a usos distintos y por qué no basta una frase para asignar un país al hablante. Edita el ejemplo de darse cuenta para una nota formal. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-10.practice.exercises.3.items.17.model` | Vos tenés presenta voseo y tú tienes, tuteo. Le vi con Juan ilustra leísmo de persona masculino singular admitido en determinados usos; no autoriza cualquier sustitución de lo por le. En la nota formal se escribe me di cuenta de que. He enviado y envié pueden organizar de modo distinto la relación con hoy según el uso y el contexto; ninguna forma aislada determina una procedencia. En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-10.practice.exercises.3.items.19.prompt` | Recuperación c2.fun.mediacion-variedades. Intercambio escrito: agente A, «Ya lo revisamos: terminamos esta mañana»; agente B, «Ya lo revisamos: lo haremos antes de las cuatro». Tratamientos disponibles: «Vos podés avisarme» / «Usted me avisa cuando tenga la copia».<br><br>Explica las dos lecturas temporales con una paráfrasis inequívoca. Propón un tratamiento coherente con una relación concreta sin declarar uno universalmente más cortés. Formula una pregunta que compruebe la interpretación y evita generalizar a una región a partir de este intercambio. Contraste nuevo suministrado de «Checkpoint: qué demuestra un éxito»: «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-10.practice.exercises.3.items.19.model` | A informa de una tarea terminada; B anuncia una tarea próxima. Para un compromiso operativo, B puede decir lo revisaremos antes de las cuatro. La elección entre vos y usted depende de relación y uso; ninguna forma garantiza por sí sola cercanía o distancia. Una comprobación útil sería: ¿queda entonces pendiente la revisión hasta esta tarde? En el nuevo contraste, «El dato no cierra la discusión; antes bien, obliga a precisar la muestra.» debe interpretarse dentro de esta cuestión: Integrar retórica, densidad, matiz y variación. La semejanza de función no convierte ambos casos en hechos equivalentes. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |

### c2-13

| Field | Exact phrase | Reason |
|---|---|---|
| `c2-13.practice.exercises.3.items.1.prompt` | Recuperación c2.voc.variacion-lexica-pragmatica. Intercambio escrito: agente A, «Ya lo revisamos: terminamos esta mañana»; agente B, «Ya lo revisamos: lo haremos antes de las cuatro». Tratamientos disponibles: «Vos podés avisarme» / «Usted me avisa cuando tenga la copia».<br><br>Explica las dos lecturas temporales con una paráfrasis inequívoca. Propón un tratamiento coherente con una relación concreta sin declarar uno universalmente más cortés. Formula una pregunta que compruebe la interpretación y evita generalizar a una región a partir de este intercambio. Contraste nuevo suministrado de «Editar sin borrar una voz»: «La restauradora pidió tiempo; el comité, resultados.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-13.practice.exercises.3.items.1.model` | A informa de una tarea terminada; B anuncia una tarea próxima. Para un compromiso operativo, B puede decir lo revisaremos antes de las cuatro. La elección entre vos y usted depende de relación y uso; ninguna forma garantiza por sí sola cercanía o distancia. Una comprobación útil sería: ¿queda entonces pendiente la revisión hasta esta tarde? En el nuevo contraste, «La restauradora pidió tiempo; el comité, resultados.» debe interpretarse dentro de esta cuestión: Cohesión, elipsis, ritmo y control estilístico. La semejanza de función no convierte ambos casos en hechos equivalentes. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-13.practice.exercises.3.items.2.prompt` | Recuperación c2.gram.variacion-gramatical. Contrastes escritos suministrados: «Vos tenés la copia» / «Tú tienes la copia»; «A Juan lo vi ayer» / «A Juan le vi ayer»; «Me di cuenta de que faltaba una página» / «Me di cuenta que faltaba una página»; «Hoy he enviado el escrito» / «Hoy envié el escrito».<br><br>Identifica voseo, tuteo, leísmo de persona masculino singular y omisión de la preposición exigida por darse cuenta de. Explica por qué los dos tiempos del último par pueden responder a usos distintos y por qué no basta una frase para asignar un país al hablante. Edita el ejemplo de darse cuenta para una nota formal. Contraste nuevo suministrado de «Editar sin borrar una voz»: «La restauradora pidió tiempo; el comité, resultados.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-13.practice.exercises.3.items.2.model` | Vos tenés presenta voseo y tú tienes, tuteo. Le vi con Juan ilustra leísmo de persona masculino singular admitido en determinados usos; no autoriza cualquier sustitución de lo por le. En la nota formal se escribe me di cuenta de que. He enviado y envié pueden organizar de modo distinto la relación con hoy según el uso y el contexto; ninguna forma aislada determina una procedencia. En el nuevo contraste, «La restauradora pidió tiempo; el comité, resultados.» debe interpretarse dentro de esta cuestión: Cohesión, elipsis, ritmo y control estilístico. La semejanza de función no convierte ambos casos en hechos equivalentes. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-13.practice.exercises.3.items.4.prompt` | Recuperación c2.fun.mediacion-variedades. Intercambio escrito: agente A, «Ya lo revisamos: terminamos esta mañana»; agente B, «Ya lo revisamos: lo haremos antes de las cuatro». Tratamientos disponibles: «Vos podés avisarme» / «Usted me avisa cuando tenga la copia».<br><br>Explica las dos lecturas temporales con una paráfrasis inequívoca. Propón un tratamiento coherente con una relación concreta sin declarar uno universalmente más cortés. Formula una pregunta que compruebe la interpretación y evita generalizar a una región a partir de este intercambio. Contraste nuevo suministrado de «Editar sin borrar una voz»: «La restauradora pidió tiempo; el comité, resultados.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |
| `c2-13.practice.exercises.3.items.4.model` | A informa de una tarea terminada; B anuncia una tarea próxima. Para un compromiso operativo, B puede decir lo revisaremos antes de las cuatro. La elección entre vos y usted depende de relación y uso; ninguna forma garantiza por sí sola cercanía o distancia. Una comprobación útil sería: ¿queda entonces pendiente la revisión hasta esta tarde? En el nuevo contraste, «La restauradora pidió tiempo; el comité, resultados.» debe interpretarse dentro de esta cuestión: Cohesión, elipsis, ritmo y control estilístico. La semejanza de función no convierte ambos casos en hechos equivalentes. | Retrieval tasks explicitly analyze voseo/tuteo and treatment, not default learner address. |

## Objective-bank occurrences

- `curriculum/objectives/a2.ts`, `a2.gram.imperativo-afirmativo`: “Puedo dar instrucciones con tú, usted, vosotros y ustedes, y conozco la forma de vos.” Explicit imperative-variation objective.
- `curriculum/objectives/b2.ts`, `b2.gram.voseo`: “Puedo reconocer y usar las formas de vos en presente e imperativo (vos tenés, vení, decime).” Explicit voseo objective.

## Machine-readable registry

`autoestudio-exemptions.json` records 282 exact scanner path/text pairs with reasons and categories. It additionally covers the scanner’s expanded first-person-past families, food noun `tomate`, and legitimate vosotros `vivís`/`salís`/`preferís`/`pedís`. English support arrays are excluded from this registry and must be classified as English by the scanner. No authentic-transcript exceptions are needed: the curriculum uses synthetic speech.
