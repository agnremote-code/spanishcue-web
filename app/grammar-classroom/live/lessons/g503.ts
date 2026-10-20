import type { LiveLesson } from '../types';

/**
 * Lesson 503 · C1 · Oraciones restrictivas, explicativas y puntuación (course unit G203).
 * Builds on G112 (lesson 412: quien, el que, el cual, first contrast especificativa / explicativa),
 * G142 (lesson 234: the verb's preposition before the relative), G169 (lesson 469: mood in relatives,
 * superlatives) and G179 (lesson 479: el cual after long prepositions, cuyo, partitives, clefts).
 * Here, the C1 focus is punctuation as meaning in careful writing: Los alumnos que aprobaron salieron
 * (only some) vs Los alumnos, que aprobaron, salieron (all of them); the paired commas (the second one
 * is the one that gets lost); unique antecedents and proper nouns (Mi hermano que vive en Lima implies
 * more than one); which relatives each type admits (quien and el cual without preposition only in
 * explicativas: *la chica quien vino, *el informe el cual leímos; subjunctive normally only in
 * especificativas); lo que / lo cual for a whole clause (always after a comma; lo cual needs an
 * antecedent); preposition + article + relative (la empresa para la que trabajo; the dropped
 * preposition, *la empresa que trabajo, frequent in speech, rejected in careful writing); long
 * prepositions and locutions with el cual (sin la cual, debido a lo cual, a raíz de lo cual); cuyo
 * agreeing with the possessed noun (formal; «que su» as oral); donde / cuando / como as relatives
 * (el día en que, not *el año donde). Audit fold (row 139): superlative, el único que, el primero
 * que + relative: indicative and subjunctive both correct (el mejor trabajo que he / haya leído).
 * Ampliación: Mi hermana, la que vive en Lima (contrastive apposition), por lo que (consequence),
 * según el cual, los cuales / quienes in explicativas.
 * Scene: a secondary school, the Instituto Río Claro. Marta Lozano (head of studies) and Rubén
 * Aguirre (Spanish teacher, edits the annual report) deal with a circular whose commas told 120
 * families that nobody in cuarto had handed in their project (only twelve hadn't). Elisa Navarro is
 * the head; Alba Prieto, a form tutor; Carmen Ibáñez coordinated the study trip to Lima; Nuria
 * Campos is the student whose project won the regional prize. Escuchar: Marta's audio message to
 * the families (es-ES-ElviraNeural, ustedes). Escribir: a paragraph of the annual report.
 * Everyone uses tú among colleagues. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 503,
  level: 'C1',
  title: 'Oraciones restrictivas, explicativas y puntuación',
  subtitle: 'Puntuar relativas sin ambigüedad y elegir el relativo de un texto cuidado: comas, para la que, lo cual, cuyo y el mejor que haya…',
  legend: [
    { tone: 'teal', label: 'ESPECIFICATIVA · sin comas: selecciona (solo los que…)' },
    { tone: 'orange', label: 'EXPLICATIVA · entre comas: añade un dato sobre todos' },
    { tone: 'blue', label: 'RELATIVO DE TEXTO CUIDADO · para la que, sin la cual, lo cual, cuyo' },
    { tone: 'violet', label: 'SUPERLATIVO + RELATIVA · el mejor que he / haya…' },
  ],
  optionNotes: {
    'que sus': '«Que su / que sus» es frecuente en el habla espontánea, pero no se acepta en un texto cuidado. Para unir poseedor y cosa poseída: **cuyo / cuya / cuyos / cuyas**, que concuerda con lo poseído.',
    'el cual': '«El cual» sin preposición solo funciona en una explicativa, entre comas («El edificio, el cual…»). En una especificativa: **que**, o preposición + el que / el cual.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dos comas que cambian el sentido', coach: 'Una coma puede cambiar a quién te refieres. A comma can change who you mean.',
      steps: [
        { title: 'La circular del jueves · Thursday’s circular', blocks: [
          { kind: 'lead', text: 'El jueves, el Instituto Río Claro envió una circular: «Los alumnos de cuarto, que no han entregado el proyecto, deben presentarse el lunes a las ocho». En una hora, ciento veinte familias escribieron alarmadas. En realidad, solo **doce** alumnos no lo habían entregado. El problema no era el vocabulario ni el verbo: eran **dos comas**.', en: 'On Thursday the school sent a circular whose commas turned a note about twelve students into a statement about all 120. In this class you work on the C1 side of relative clauses: punctuation as meaning, the relative a careful text requires, and register.' },
          { kind: 'compare', title: 'La misma frase, dos sentidos · Same words, two meanings', columns: [
            { tone: 'teal', label: 'ESPECIFICATIVA · sin comas', sentence: 'Los alumnos [[que aprobaron|teal]] salieron al patio.', idea: 'Selecciona: de todos los alumnos, salieron solo los que aprobaron. Los demás se quedaron en clase.', en: 'Restrictive: only the students who passed went out. The clause picks out a subset, so removing it changes the claim.' },
            { tone: 'orange', label: 'EXPLICATIVA · entre comas', sentence: 'Los alumnos, [[que aprobaron|orange]], salieron al patio.', idea: 'Añade un dato: todos los alumnos aprobaron y todos salieron. Es un inciso.', en: 'Non-restrictive: all the students passed and all went out. The clause is an aside about the whole group.' },
          ] },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases en voz alta, con pausas solo en la segunda. Tu alumno dice cuántos alumnos salieron en cada caso.', self: 'Lee las dos frases en voz alta: en la segunda, haz una pausa en cada coma. ¿Cuántos alumnos salieron en cada caso? (How many students went out each time?)' } },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Los alumnos de cuarto, que no han entregado el proyecto, deben presentarse el lunes». ¿Qué entendieron las familias?', options: ['Que solo algunos alumnos de cuarto debían ir el lunes.', 'Que el proyecto se entregaba el lunes.', 'Que ningún alumno de cuarto había entregado el proyecto.'], answer: 2, why: 'Entre comas, la relativa dice algo de todo el grupo: todos los alumnos de cuarto, y ninguno lo ha entregado.', en: 'With commas, the clause applies to the whole group, so families read it as “nobody has handed it in”.' },
            { prompt: '¿Qué quería decir en realidad el instituto?', options: ['Los alumnos de cuarto que no han entregado el proyecto, deben presentarse el lunes.', 'Los alumnos de cuarto, que no han entregado el proyecto deben presentarse el lunes.', 'Los alumnos de cuarto que no han entregado el proyecto deben presentarse el lunes.'], answer: 2, why: 'Sin comas, la relativa selecciona a los doce. Una sola coma, delante o detrás, no es una opción: separa el sujeto del verbo o deja el inciso abierto.', en: 'No commas: the clause selects the twelve. A single comma is never right here.' },
            { prompt: 'En la lengua oral, ¿cómo se nota la diferencia?', options: ['No se nota: solo existe en la escritura.', 'Por el verbo: la explicativa va siempre en pasado.', 'Por las pausas y la entonación: la explicativa va entre pausas, como un inciso.'], answer: 2, why: 'Las comas de la explicativa corresponden a pausas y a un tono más bajo en el habla.', en: 'In speech, the non-restrictive clause is set off by pauses and a lower pitch.' },
          ] },
        ] },
        { title: 'Selecciona o añade · Restrict or add', mascot: '/brand/mascot/studying.webp', coach: 'Tápala: ¿cambia el sentido? Cover it: does the meaning change?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ESPECIFICATIVA · RESTRICTIVA', question: '¿De cuáles hablo?', en: 'Which ones? The clause narrows down what the noun refers to; without it, you would be talking about a different (larger) set.', formula: ['nombre + que · preposición + el que / el cual / quien', 'sin comas y sin pausa'],
            meaning: 'Restringe el antecedente: de todos los X, solo los que cumplen la condición. Si la suprimes, cambias lo que afirmas. Admite subjuntivo cuando el referente no está identificado.',
            examples: [
              { es: 'Los profesores [[que vigilan el examen|teal]] llegan a las ocho.', en: 'Only the teachers supervising the exam arrive at eight; the others don’t.' },
              { es: 'Necesitamos un aula [[en la que quepan treinta personas|teal]].', en: 'We need a room that holds thirty people (any room, not a known one: subjunctive).' },
              { es: 'La profesora [[a quien sustituyo|teal]] vuelve en mayo.', en: 'The teacher I’m covering for comes back in May. «Quien» is fine here because of the preposition.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'EXPLICATIVA · NO RESTRICTIVA', question: '¿Qué más te cuento de él?', en: 'What else can I tell you about it? The noun is already identified; the clause adds a comment, like a parenthesis.', formula: ['nombre, + que / quien / el cual + …,', 'entre comas (en la voz, entre pausas)'],
            meaning: 'Añade información sobre un antecedente ya identificado. Si la suprimes, la referencia no cambia. Con nombres propios y antecedentes únicos (mi madre, la directora, el comedor del centro) lo normal es la explicativa.',
            examples: [
              { es: 'Elisa Navarro, [[que dirige el centro desde 2019|orange]], firmará la carta.', en: 'Elisa Navarro, who has run the school since 2019, will sign the letter. The name already identifies her.' },
              { es: 'La biblioteca, [[la cual se reformó en verano|orange]], abre ya por las tardes.', en: 'The library, which was refurbished in the summer, now opens in the afternoons. «La cual» marks a formal written register.' },
              { es: 'Mi hermana, [[quien vive en Lima|orange]], vendrá a la graduación.', en: 'My sister, who lives in Lima, will come to the graduation: I have only one sister, or I’m not contrasting her with others.' },
            ] },
          { kind: 'table', title: 'Qué admite cada una · What each type allows', head: ['', 'ESPECIFICATIVA (sin comas)', 'EXPLICATIVA (entre comas)'], rows: [
            ['**que**', 'sí: los alumnos **que** aprobaron', 'sí: los alumnos, **que** aprobaron, …'],
            ['**quien / quienes** sin preposición', 'no: *la chica quien vino → la chica **que** vino', 'sí: Mi hermana, **quien** vive en Lima, …'],
            ['**el cual / la cual…** sin preposición', 'no: *el informe el cual leímos → el informe **que** leímos', 'sí, registro formal: La biblioteca, **la cual**…'],
            ['preposición + **el que / el cual / quien**', 'sí: la empresa **para la que** trabajo', 'sí: Rubén, **con quien** comparto despacho, …'],
            ['subjuntivo', 'sí: un aula en la que **quepan** treinta', 'normalmente no: el dato se presenta como real'],
            ['nombre propio o antecedente único', 'raro; con artículo y contraste: «la Lima **que** yo conocí»', 'lo normal: Lima, **que**…'],
          ], note: 'Prueba rápida: tapa la relativa. Si la frase sigue hablando de las mismas personas o cosas, es explicativa y lleva comas. Las comas van **a los dos lados**: la segunda solo desaparece si la frase termina ahí.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Mi hermana que vive en Lima viene en julio» (sin comas). ¿Qué sugiere?', options: ['Que tengo más de una hermana y hablo de la que vive en Lima.', 'Que tengo una sola hermana.', 'Nada especial: aquí las comas son opcionales.'], answer: 0, why: 'La especificativa selecciona entre varias hermanas. Con una sola hermana, lo natural es el inciso: «Mi hermana, que vive en Lima, …».', en: 'Without commas, the clause implies a contrast with other sisters.' },
            { prompt: '¿Qué frase es correcta en un texto cuidado?', options: ['La alumna quien ganó el premio es de mi grupo.', 'La alumna la cual ganó el premio es de mi grupo.', 'La alumna que ganó el premio es de mi grupo.'], answer: 2, why: 'Es especificativa y no hay preposición: solo «que». «Quien» y «la cual» sin preposición exigen comas.', en: 'Restrictive, no preposition: only «que» works.' },
          ] },
        ] },
        { title: 'La preposición y la oración entera · The preposition and the whole clause', mascot: '/brand/mascot/standing.webp', coach: '¿Qué preposición pide el verbo? Which preposition does the verb need?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PREPOSICIÓN + ARTÍCULO + RELATIVO', question: '¿Qué preposición pide el verbo de la relativa?', en: 'If the verb inside the relative clause takes a preposition, it moves to the front of the relative, usually with an article. Dropping it is common in casual speech but reads as an error in careful writing.', formula: ['la empresa para la que trabajo · el tema del que te hablé', 'preposición larga o locución → mejor «el cual»: sin el cual, debido a lo cual'],
            meaning: 'Trabajar **para**, hablar **de**, contar **con**: la preposición va delante del relativo. En el habla espontánea a veces desaparece («la empresa que trabajo»), pero en un texto cuidado es un error. Con preposiciones cortas, «el que» es lo más natural; con preposiciones largas y locuciones, se prefiere «el cual».',
            examples: [
              { es: 'Es la empresa [[para la que|blue]] trabaja la madre de Iván.', en: 'It’s the company Iván’s mother works for (trabajar para → para la que).' },
              { es: 'Este es el tema [[del que|blue]] te hablé ayer.', en: 'This is the topic I told you about yesterday (hablar de → del que).' },
              { es: 'Fue un apoyo [[sin el cual|blue]] el proyecto no habría salido adelante.', en: 'It was support without which the project would not have got off the ground: a long preposition, so «el cual».' },
            ] },
          { kind: 'compare', title: 'Una oración entera como antecedente · A whole clause as antecedent', columns: [
            { tone: 'blue', label: 'LO QUE · neutro y frecuente', sentence: 'El autobús llegó tarde, [[lo que|blue]] retrasó la salida.', idea: 'Retoma toda la oración anterior. Va siempre tras coma. Además funciona sin antecedente: «Haz lo que puedas».', en: '“Which” referring to the whole previous clause; also works with no antecedent (“whatever you can”).' },
            { tone: 'blue', label: 'LO CUAL · más formal', sentence: 'El autobús llegó tarde, [[lo cual|blue]] retrasó la salida.', idea: 'El mismo valor, en un registro más cuidado. Necesita antecedente: nunca «*Haz lo cual puedas». Con locuciones: debido a lo cual, a pesar de lo cual.', en: 'Same meaning, more formal; it always needs an antecedent, so it cannot replace «lo que» in “haz lo que puedas”.' },
          ] },
          { kind: 'table', title: 'Donde, cuando, como · Where, when, how', head: ['Relativo', 'Con antecedente', 'Alternativa con preposición'], rows: [
            ['**donde** (lugar)', 'el aula **donde** ensayamos', 'el aula **en la que / en que** ensayamos'],
            ['**cuando** (tiempo)', 'en junio, **cuando** terminan las clases, … (explicativa)', 'el día **(en) que** llegaste'],
            ['**como** (modo)', 'la manera **como** lo explicó', 'la manera **en que / en la que** lo explicó (más general)'],
          ], note: '«Donde» con antecedente de lugar es normal en los dos tipos de relativa. «Cuando» con antecedente aparece sobre todo en explicativas; en las especificativas se prefiere «(en) que»: «el día en que llegaste». Para el tiempo, en un texto cuidado, evita «donde»: «el año **en que** se fundó», no «el año donde se fundó».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En un texto formal: «Es la fundación ___ trabaja Rubén en verano».', options: ['que', 'para la que', 'la cual'], answer: 1, why: 'Trabajar **para** alguien: la preposición va delante del relativo. Sin ella, la frase diría que la fundación trabaja.', en: 'It’s the foundation Rubén works for in the summer.' },
            { prompt: 'Se fue la luz en el salón de actos, ___ se suspendió el ensayo.', options: ['por el cual', 'por lo cual', 'por cual'], answer: 1, why: 'El antecedente es toda la oración (se fue la luz): neutro, «por lo cual». «Por el cual» buscaría un nombre masculino.', en: 'The power went off in the hall, which is why the rehearsal was cancelled.' },
            { prompt: 'Recuerdo perfectamente el día ___ empezaste aquí.', options: ['en que', 'donde', 'el cual'], answer: 0, why: 'Antecedente de tiempo en una especificativa: «(en) que». «Donde» es para lugares.', en: 'I remember perfectly the day you started here.' },
          ] },
        ] },
        { title: 'Cuyo y el superlativo · Cuyo and superlatives', mascot: '/brand/mascot/speaking.webp', coach: 'Cuyo mira hacia delante. Cuyo agrees with what follows.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CUYO · REGISTRO FORMAL', question: '¿De quién es?', en: 'Whose. It agrees in gender and number with the thing possessed (the noun after it), never with the owner. It belongs to writing and formal speech.', formula: ['poseedor + cuyo / cuya / cuyos / cuyas + lo poseído', 'sin artículo y sin «su» detrás'],
            meaning: '**Cuyo** une un poseedor con lo que posee y concuerda con lo poseído: «el profesor **cuya** hija…», «la alumna **cuyos** padres…». Es propio de la escritura y de la lengua formal; en la conversación se suele reformular. Puede llevar preposición delante: «**de cuya** obra», «**en cuya** casa».',
            examples: [
              { es: 'Es la alumna [[cuyos padres|blue]] organizaron la feria.', en: 'She’s the student whose parents organised the fair: cuyos agrees with padres.' },
              { es: 'Felicitamos al departamento [[cuya propuesta|blue]] ganó el concurso.', en: 'We congratulate the department whose proposal won the competition: cuya agrees with propuesta.' },
              { es: 'Es una autora [[de cuya obra|blue]] apenas se ha escrito.', en: 'She is an author about whose work very little has been written: preposition + cuya.' },
            ],
            note: 'En el habla espontánea se oye «que su» («el alumno que su madre…»): es frecuente, pero no se acepta en un texto cuidado.' },
          { kind: 'compare', title: 'Superlativo + relativa · Superlative + relative clause', columns: [
            { tone: 'violet', label: 'INDICATIVO · constata', sentence: 'Es el mejor proyecto [[que hemos recibido|violet]].', idea: 'Presenta el dato como un hecho dentro de un conjunto conocido.', en: 'It’s the best project we have received: stated as a fact about a known set.' },
            { tone: 'violet', label: 'SUBJUNTIVO · pondera', sentence: 'Es el mejor proyecto [[que hayamos recibido|violet]].', idea: 'Subraya la valoración («de todos los que podamos haber recibido»). Muy frecuente y natural, sobre todo con «nunca», «jamás», «en años».', en: 'Same meaning, with emphasis on the judgement; very common and natural, especially with “ever” (nunca, jamás).' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Los dos modos son correctos · Both moods are correct', text: 'Tras un superlativo y tras «el único que», «el primero que», «el último que», el indicativo y el subjuntivo son correctos y frecuentes: «Eres la única persona que me **ha** entendido / que me **haya** entendido». Estas relativas son siempre especificativas: **sin comas**. Ojo: con «la primera vez que», lo normal es el indicativo: «Es la primera vez que **vengo**».', en: 'After a superlative and after “the only one / the first / the last who”, both moods are correct and common; the subjunctive adds emphasis. These clauses are always restrictive, so no commas. With “la primera vez que” the indicative is the norm.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es el viaje de estudios más barato que ___ organizado.', options: ['solo «hayamos»', 'las dos formas son correctas', 'solo «hemos»'], answer: 1, why: 'Tras superlativo, los dos modos son correctos: «hemos» constata, «hayamos» subraya la valoración.', en: 'It’s the cheapest study trip we have (ever) organised.' },
            { prompt: '¿Qué frase es correcta?', options: ['Es un profesor cuyo hijas estudian aquí.', 'Es un profesor cuyas hijas estudian aquí.', 'Es un profesor cuyas sus hijas estudian aquí.'], answer: 1, why: '«Cuyo» concuerda con lo poseído (hijas: femenino plural) y no lleva «su» detrás.', en: 'He is a teacher whose daughters study here.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Comas, preposición, concordancia. Commas, preposition, agreement.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿las comas, el relativo, la preposición o la concordancia?', self: 'Lee cada frase y decide qué falla: ¿las comas, el relativo, la preposición o la concordancia? Después mira la corrección. (Decide what goes wrong before you check.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Los alumnos de cuarto, que no han entregado el proyecto, deben presentarse el lunes. (Solo son doce.)', right: 'Los alumnos de cuarto que no han entregado el proyecto deben presentarse el lunes.', why: 'Si la relativa selecciona a una parte del grupo, no lleva comas. Con comas, afirma algo de todos. (Restrictive = no commas.)' },
            { wrong: 'Nuestra directora, que llegó en 2019 ha cambiado los horarios.', right: 'Nuestra directora, que llegó en 2019, ha cambiado los horarios.', why: 'El inciso se cierra con otra coma. Es el error de puntuación más frecuente en textos formales. (Close the aside.)' },
            { wrong: 'La chica quien vino ayer es la nueva conserje.', right: 'La chica que vino ayer es la nueva conserje.', why: 'En una especificativa sin preposición, «quien» no funciona: «que». «Quien» sí va tras preposición o entre comas. (No «quien» here.)' },
            { wrong: 'Es la empresa que trabajo desde 2020.', right: 'Es la empresa en la que trabajo desde 2020.', why: 'Trabajar **en** una empresa: la preposición del verbo va delante del relativo. Omitirla es propio del habla, no de un texto cuidado. (Keep the preposition.)' },
            { wrong: 'El informe el cual leímos tenía errores.', right: 'El informe que leímos tenía errores.', why: '«El cual» sin preposición solo va en explicativas: «El informe, el cual…». (No «el cual» in a restrictive clause.)' },
            { wrong: 'Es el instituto cuyo alumnas ganaron el torneo.', right: 'Es el instituto cuyas alumnas ganaron el torneo.', why: '«Cuyo» concuerda con lo poseído (alumnas), no con el poseedor (instituto). (Agree with what is owned.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Corrige: «Es un compañero que siempre cuento con él».', options: ['Es un compañero quien siempre cuento.', 'Es un compañero el cual siempre cuento.', 'Es un compañero con quien siempre cuento.'], answer: 2, why: 'Contar **con** alguien: la preposición va delante del relativo y desaparece el pronombre «él».', en: 'He is a colleague I can always count on.' },
            { prompt: 'Corrige la puntuación: «Lima que es la capital de Perú, tiene casi diez millones de habitantes».', options: ['Lima, que es la capital de Perú, tiene casi diez millones de habitantes.', 'Lima que es la capital de Perú tiene casi diez millones de habitantes.', 'Lima, que es la capital de Perú tiene casi diez millones de habitantes.'], answer: 0, why: 'Con un nombre propio, la relativa es explicativa: comas a los dos lados.', en: 'Lima, which is the capital of Peru, has almost ten million inhabitants.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice dos frases sobre su familia o su trabajo, una con selección («Mis compañeros que viven lejos…») y otra con inciso («Mi jefa, que…»), marcando las pausas con la voz.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La memoria del curso', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En jefatura de estudios · In the head of studies’ office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marta y tu alumno es Rubén. Después tu alumno toca cada expresión marcada y explica por qué lleva o no lleva comas.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿selecciona, añade, o es un relativo de texto cuidado? (Restrict, add, or careful-writing relative?)' } },
          { kind: 'explore', title: 'Dos comas y una memoria', setting: 'Viernes por la mañana, en el Instituto Río Claro. Marta Lozano, jefa de estudios, y Rubén Aguirre, profesor de Lengua, revisan la circular de ayer y la memoria anual del centro. (Friday morning: Marta, head of studies, and Rubén, a Spanish teacher, review yesterday’s circular and the school’s annual report.)', lines: [
            { who: 'Marta', text: 'Rubén, tengo cuarenta mensajes de familias. Por lo visto, la circular de ayer dice que ningún alumno de cuarto ha entregado el proyecto.', en: 'Rubén, I’ve got forty messages from families. Apparently yesterday’s circular says no student in cuarto has handed in the project.' },
            { who: 'Rubén', text: 'A ver… «Los alumnos de cuarto, [[que no han entregado el proyecto|orange]], deben presentarse el lunes». Ya está: son las comas.', en: 'Let’s see… “The cuarto students, who haven’t handed in the project, must come in on Monday.” There it is: it’s the commas.' },
            { who: 'Marta', text: '¡Pero si solo son doce! Lo que quería decir era «los alumnos [[que todavía no lo han entregado|teal]]», sin comas.', en: 'But there are only twelve! What I meant was “the students who still haven’t handed it in”, without commas.' },
            { who: 'Rubén', text: 'Exacto. Con comas hablas de todo cuarto; sin comas, solo de esos doce. Mandamos una corrección y revisamos ya la memoria, [[lo cual|blue]] nos ahorra otra reunión.', en: 'Exactly. With commas you’re talking about the whole year; without them, only those twelve. Let’s send a correction and review the annual report now, which saves us another meeting.' },
            { who: 'Marta', text: 'Vale. Mira este párrafo: «Agradecemos el apoyo de la Fundación Ribera, [[sin la cual|blue]] el viaje a Lima no habría sido posible».', en: 'OK. Look at this paragraph: “We thank the Ribera Foundation for its support, without which the trip to Lima would not have been possible.”' },
            { who: 'Rubén', text: 'Perfecto. Pero dos líneas más abajo pone «la empresa que trabaja el padre de Iván». Falta la preposición: es «la empresa [[para la que|blue]] trabaja».', en: 'Perfect. But two lines further down it says “the company that Iván’s father works”. The preposition is missing: it’s “the company he works for”.' },
            { who: 'Marta', text: 'Cierto. ¿Y aquí? «La profesora quien coordinó el viaje…». Algo me chirría.', en: 'True. And here? “The teacher who coordinated the trip…”. Something sounds off.' },
            { who: 'Rubén', text: 'Sin comas ni preposición, solo «que». Pero si escribes «Carmen Ibáñez, [[quien coordinó el viaje|orange]], …», entre comas, está perfecto.', en: 'With no commas and no preposition, only «que». But if you write “Carmen Ibáñez, who coordinated the trip, …”, between commas, it’s perfect.' },
            { who: 'Marta', text: 'Me gusta. Añade también una línea sobre Nuria Campos, [[cuyo proyecto|blue]] ha ganado el premio regional.', en: 'I like it. Add a line about Nuria Campos too, whose project has won the regional prize.' },
            { who: 'Rubén', text: '¡Claro! Su tutor dice que es el mejor trabajo [[que haya leído|violet]] en veinte años de profesión.', en: 'Of course! Her tutor says it’s the best piece of work he has ever read in twenty years of teaching.' },
            { who: 'Marta', text: 'Pues ponlo tal cual. Y desde hoy, cada circular la leemos los dos antes de enviarla.', en: 'Then put it exactly like that. And from today, we both read every circular before it goes out.' },
          ], notes: {
            'que no han entregado el proyecto': 'Entre comas: **explicativa**. Dice algo de todos los alumnos de cuarto. Por eso las familias entendieron que nadie lo había entregado.',
            'que todavía no lo han entregado': 'Sin comas: **especificativa**. Selecciona solo a los doce alumnos que no lo han entregado.',
            'lo cual': 'Retoma toda la idea anterior (mandar la corrección y revisar la memoria). Va tras coma. «Lo que» también sería correcto, algo menos formal.',
            'sin la cual': 'Preposición larga + artículo + cual, en femenino porque el antecedente es «la Fundación Ribera». En un texto formal se prefiere a «sin la que».',
            'para la que': 'Trabajar **para** una empresa: la preposición del verbo va delante del relativo. «La empresa que trabaja» diría otra cosa: que la empresa es la que trabaja.',
            'quien coordinó el viaje': '«Quien» sin preposición solo funciona en explicativas, entre comas, y con personas. Con un nombre propio, la relativa es explicativa.',
            'cuyo proyecto': '«Cuyo» concuerda con «proyecto» (lo poseído), no con Nuria. Es el relativo propio de un texto formal como una memoria.',
            'que haya leído': 'Superlativo + subjuntivo: el tutor pondera su valoración. «Que ha leído» también es correcto, con un tono más neutro.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué escribieron tantas familias?', options: ['Porque, con las comas, la circular decía que nadie de cuarto había entregado el proyecto.', 'Porque la circular no decía a qué hora había que ir.', 'Porque el proyecto se entregaba el lunes por la mañana.'], answer: 0, why: 'Rubén lo ve enseguida: «son las comas». La explicativa hablaba de todo cuarto.', en: 'Why did so many families write in?' },
            { prompt: '¿Qué falla en «la empresa que trabaja el padre de Iván»?', options: ['Le faltan comas.', 'Falta la preposición que pide «trabajar»: «para la que».', 'Debería ser «la empresa quien trabaja».'], answer: 1, why: 'Rubén: «Falta la preposición: es la empresa para la que trabaja».', en: 'What is wrong with “la empresa que trabaja el padre de Iván”?' },
            { prompt: '¿Por qué acepta Rubén «Carmen Ibáñez, quien coordinó el viaje»?', options: ['Porque es una explicativa entre comas, y ahí «quien» es correcto.', 'Porque «quien» siempre es más formal que «que».', 'Porque Carmen es profesora.'], answer: 0, why: 'Sin comas ni preposición solo vale «que»; entre comas, «quien» es correcto.', en: 'Why does Rubén accept “Carmen Ibáñez, quien coordinó el viaje”?' },
          ] },
        ] },
        { title: '¿Selecciona o añade? · Restrict or add?', mascot: '/brand/mascot/kneeling.webp', coach: '¿Todos o solo algunos? All of them or only some?', blocks: [
          { kind: 'lead', text: 'Rubén ha quitado todas las comas del borrador para revisarlas una a una. Lee el contexto entre paréntesis y decide: ¿la relativa selecciona (sin comas) o añade un dato (entre comas)?', en: 'Rubén has removed every comma from the draft to check them one by one. Read the context in brackets and decide whether each clause restricts (no commas) or adds information (commas).' },
          { kind: 'classify', title: 'El borrador de la memoria · The report draft', categories: [
            { id: 'esp', label: 'ESPECIFICATIVA · sin comas', tone: 'teal' },
            { id: 'exp', label: 'EXPLICATIVA · entre comas', tone: 'orange' },
          ], items: [
            { text: 'El salón de actos _ que se inauguró en 1998 _ necesita reformas. (El centro tiene un solo salón.)', answer: 'exp', why: 'Solo hay uno: la relativa añade un dato. «El salón de actos, que se inauguró en 1998, …».' },
            { text: 'Los profesores _ que acompañaron el viaje _ tendrán un día libre. (Viajaron cuatro de sesenta.)', answer: 'esp', why: 'Selecciona a cuatro profesores: sin comas.' },
            { text: 'Elisa Navarro _ que dirige el centro desde 2019 _ presentará la memoria.', answer: 'exp', why: 'Un nombre propio ya identifica a la persona: inciso entre comas.' },
            { text: 'Las familias _ que aún no han pagado la excursión _ recibirán un aviso. (Son unas pocas.)', answer: 'esp', why: 'Solo algunas familias recibirán el aviso: sin comas.' },
            { text: 'Nuestros alumnos de cuarto _ que este año son 120 _ hicieron el proyecto.', answer: 'exp', why: 'Habla de todos los alumnos de cuarto y añade cuántos son: entre comas.' },
            { text: 'Los libros _ cuyo préstamo haya vencido _ deben devolverse antes del 20.', answer: 'esp', why: 'Solo algunos libros; además, el subjuntivo es propio de la especificativa.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno lee en voz alta dos de las frases con la puntuación correcta, marcando las pausas solo en las explicativas.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero el sentido, después la coma. Meaning first, then the comma.',
      steps: [
        { title: 'Puntúa e interpreta · Punctuate and interpret', blocks: [
          { kind: 'choice', items: [
            { context: 'En la memoria del curso. (In the annual report.)', prompt: '«Los alumnos que viajaron a Lima escribieron un diario». ¿Qué afirma?', options: ['Que todos escribieron un diario, aunque no todos viajaron.', 'Que solo escribieron un diario los alumnos que viajaron.', 'Que todos los alumnos viajaron a Lima y escribieron un diario.'], answer: 1, why: 'Sin comas, la relativa selecciona: los que viajaron, y solo ellos, escribieron el diario.', en: 'Without commas, the clause restricts the group.' },
            { context: 'La misma frase, con comas. (The same sentence, with commas.)', prompt: '«Los alumnos, que viajaron a Lima, escribieron un diario». ¿Qué afirma?', options: ['Que el diario lo escribieron en Lima.', 'Que solo algunos alumnos viajaron.', 'Que todos los alumnos de los que se habla viajaron y escribieron un diario.'], answer: 2, why: 'Entre comas, la relativa añade un dato sobre todo el grupo: todos viajaron.', en: 'With commas, the clause describes the whole group.' },
            { context: 'El centro tiene un solo comedor y ha cerrado por obras. (One canteen only.)', prompt: '¿Qué frase lo dice bien?', options: ['El comedor que estaba en el sótano ha cerrado por obras.', 'El comedor, que estaba en el sótano ha cerrado por obras.', 'El comedor, que estaba en el sótano, ha cerrado por obras.'], answer: 2, why: 'Antecedente único: explicativa con las dos comas. Sin comas parecería que hay varios comedores.', en: 'A unique antecedent takes a non-restrictive clause, with both commas.' },
            { context: 'Rubén tiene tres primos y quiere hablar del que es médico. (He has three cousins.)', prompt: '¿Qué frase lo dice bien?', options: ['Mi primo que es médico vendrá a la charla.', 'Mi primo, el cual es médico vendrá a la charla.', 'Mi primo, que es médico, vendrá a la charla.'], answer: 0, why: 'Selecciona a uno de los tres primos: especificativa, sin comas.', en: 'Choosing one cousin among three: restrictive.' },
            { context: 'Una nota para las familias. (A note for families.)', prompt: '¿Qué frase está bien puntuada?', options: ['Las familias, que quieran asistir, deben inscribirse.', 'Las familias que quieran asistir, deben inscribirse.', 'Las familias que quieran asistir deben inscribirse.'], answer: 2, why: 'Selecciona a las que quieran asistir (subjuntivo: especificativa). No se pone coma entre el sujeto y el verbo.', en: 'Restrictive with subjunctive; never a comma between subject and verb.' },
          ] },
        ] },
        { title: '¿Vale en un texto cuidado? · Fine in careful writing?', blocks: [
          { kind: 'classify', title: 'Frases del boletín del instituto · Sentences from the school newsletter', categories: [
            { id: 'ok', label: 'Correcta en un texto cuidado', tone: 'teal' },
            { id: 'mal', label: 'Hay que corregirla', tone: 'neutral' },
          ], items: [
            { text: 'Es el compañero con quien comparto despacho.', answer: 'ok', why: 'Compartir algo **con** alguien: preposición + quien, correcto también en especificativas.' },
            { text: 'Es el compañero que comparto despacho.', answer: 'mal', why: 'Falta la preposición: «con quien» o «con el que comparto despacho».' },
            { text: 'El gimnasio, el cual se amplió en 2022, tiene ahora dos pistas.', answer: 'ok', why: '«El cual» sin preposición, en una explicativa entre comas: registro formal correcto.' },
            { text: 'Ese es el aula que te hablé.', answer: 'mal', why: 'Hablar **de** algo: «el aula de la que te hablé».' },
            { text: 'La conferencia, cuya duración era de dos horas, empezó tarde.', answer: 'ok', why: '«Cuya» concuerda con «duración»; explicativa bien cerrada.' },
            { text: 'Es la razón por la cual cambiamos el horario.', answer: 'ok', why: 'Preposición + artículo + cual, concordando con «razón».' },
          ] },
        ] },
        { title: 'Corrige la relativa · Fix the relative clause', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Esta es la plataforma que subimos las notas.', ok: false, options: ['Esta es la plataforma a la que subimos las notas.', 'Esta es la plataforma la cual subimos las notas.', 'Esta es la plataforma que subimos a ella las notas.'], answer: 0, why: 'Subir algo **a** una plataforma: la preposición va delante del relativo. Repetir «a ella» es propio del habla.' },
            { sentence: 'La orientadora quien atiende a las familias está de baja.', ok: false, options: ['La orientadora la cual atiende a las familias está de baja.', 'La orientadora, quien atiende a las familias está de baja.', 'La orientadora que atiende a las familias está de baja.'], answer: 2, why: 'Especificativa sin preposición: solo «que». La tercera opción deja el inciso sin cerrar.' },
            { sentence: 'Los alumnos cuyas notas no constan en el acta deben hablar con su tutor.', ok: true, why: 'Correcta: «cuyas» concuerda con «notas», y la relativa selecciona, sin comas.' },
            { sentence: 'Se averió la calefacción, lo cual obligó a suspender las clases.', ok: true, why: 'Correcta: «lo cual» retoma toda la oración anterior y va tras coma.' },
            { sentence: 'Es un tema el cual nadie quiere hablar.', ok: false, options: ['Es un tema del que nadie quiere hablar.', 'Es un tema el que nadie quiere hablar.', 'Es un tema que nadie quiere hablar de él.'], answer: 0, why: 'Hablar **de** algo: «del que» (o «del cual»). Sin preposición, «el cual» no funciona en una especificativa.' },
            { sentence: 'Recuerdo bien el año donde se fundó el instituto.', ok: false, options: ['Recuerdo bien el año el cual se fundó el instituto.', 'Recuerdo bien el año en que se fundó el instituto.', 'Recuerdo bien el año cuando se fundó el instituto.'], answer: 1, why: 'Antecedente de tiempo en una especificativa: «(en) que». «Donde» es para lugares.' },
          ] },
        ] },
        { title: 'La nueva circular · The new circular', blocks: [
          { kind: 'chat-fill', title: 'Marta y Rubén redactan la corrección · Marta and Rubén draft the correction', lines: [
            { who: 'Rubén', text: 'Empiezo así: «Las familias ___ hijos todavía no han entregado el proyecto recibirán un correo».', options: ['cuyos', 'que sus', 'cuyas'], answer: 0, why: '«Cuyo» concuerda con lo poseído: hijos, masculino plural. No con «familias».' },
            { who: 'Marta', text: 'Bien. Y luego: «La sesión será en la biblioteca, ___ hay ordenadores para todos».', options: ['lo cual', 'donde', 'cuando'], answer: 1, why: 'Antecedente de lugar (la biblioteca): «donde», aquí en una explicativa.' },
            { who: 'Rubén', text: '¿Y la tutora? «Lo coordinará Alba Prieto, ___ es la tutora del grupo B».', options: ['lo cual', 'quien', 'cuya'], answer: 1, why: 'Explicativa con nombre propio de persona: «quien» es correcto (también «que» o «la cual»).' },
            { who: 'Marta', text: 'Añade que la circular anterior no era clara, ___ pedimos disculpas.', options: ['por lo cual', 'por el cual', 'por cual'], answer: 0, why: 'El antecedente es toda la oración (no era clara): neutro, «por lo cual», con valor de consecuencia.' },
            { who: 'Rubén', text: 'Y cierro con un tono cercano: «Es la primera vez ___ nos pasa algo así».', options: ['donde', 'en la cual', 'que'], answer: 2, why: '«La primera vez que…» es una construcción fija con «que» y, normalmente, indicativo.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Es', 'la', 'empresa', 'para', 'la', 'que', 'trabaja', 'Iván'], accept: ['Es la empresa para la que trabaja Iván', 'Es la empresa para la que Iván trabaja'], en: 'It’s the company Iván works for.' },
            { tiles: ['La', 'directora,', 'quien', 'firmó', 'la', 'circular,', 'pidió', 'disculpas'], accept: ['La directora, quien firmó la circular, pidió disculpas'], en: 'The head, who signed the circular, apologised.' },
            { tiles: ['Se', 'cancelaron', 'dos', 'vuelos,', 'a', 'raíz', 'de', 'lo', 'cual', 'cambiamos', 'el', 'plan'], accept: ['Se cancelaron dos vuelos, a raíz de lo cual cambiamos el plan'], en: 'Two flights were cancelled, as a result of which we changed the plan.' },
          ] },
        ] },
        { title: 'Une las frases en un texto formal · Join the sentences formally', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'rewrite', title: 'Para la memoria · For the annual report', items: [
            { prompt: 'El laboratorio se renovó en 2023. En el laboratorio hacemos las prácticas de química.', instruction: 'Une las frases con una explicativa (hay un solo laboratorio). Empieza con «El laboratorio, en el que…».', accept: ['El laboratorio, en el que hacemos las prácticas de química, se renovó en 2023'] },
            { prompt: 'Carmen Ibáñez coordinó el viaje. Gracias a eso, todo salió bien.', instruction: 'Une las frases con «gracias a lo cual».', accept: ['Carmen Ibáñez coordinó el viaje, gracias a lo cual todo salió bien'] },
            { prompt: 'Felicitamos a Nuria Campos. Su proyecto ganó el premio regional.', instruction: 'Une las frases con «cuyo / cuya…».', accept: ['Felicitamos a Nuria Campos, cuyo proyecto ganó el premio regional'] },
            { prompt: 'Esta es la asociación. Colaboramos con la asociación desde 2018.', instruction: 'Une las frases con preposición + artículo + relativo.', accept: ['Esta es la asociación con la que colaboramos desde 2018', 'Esta es la asociación con la cual colaboramos desde 2018'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige un aviso real de su trabajo o de su centro de estudios y lo dice de dos maneras: con una relativa que selecciona y con una que añade. Comentan juntos cómo cambia el sentido.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio para las familias', coach: 'Escucha las pausas: también son comas. Listen for the pauses: they are commas too.',
      steps: [
        { title: 'Marta aclara la circular · Marta clears up the circular', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye una pausa de inciso (explicativa) y explica qué dato añade. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. En la segunda, fíjate en las pausas: ¿dónde hay un inciso? (Listen for the pauses that mark asides.)' } },
          { kind: 'listen', title: 'Un audio para las familias', channel: 'MENSAJE DE AUDIO · JEFATURA DE ESTUDIOS · INSTITUTO RÍO CLARO', src: '/audio/grammar-live/503.mp3',
            before: 'Marta graba un audio para todas las familias de cuarto. ¿Qué crees que va a explicar y en qué tono: disculpa, aclaración, alguna buena noticia? (Marta records an audio message for the families. What will she explain, and in what tone?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Marta aclara a quién iba dirigida la circular, da los detalles de la sesión y comparte una buena noticia.', 'Marta pide a todas las familias que vayan al instituto el lunes.', 'Marta anuncia que el proyecto se entrega el lunes.'], answer: 0, why: 'Explica el error de puntuación, quién debe ir el lunes, dónde y con quién, y anuncia el premio de Nuria.', en: 'She clears up the misunderstanding, gives practical details and shares good news.' },
            details: [
              { prompt: '¿Cuántos alumnos deben ir el lunes?', options: ['Doce.', 'Ciento veinte.', 'Todos los de cuarto.'], answer: 0, why: '«Solo los alumnos que todavía no lo han entregado, que son doce».', en: 'How many students must come on Monday?' },
              { prompt: '¿Quién va a escribir a las familias afectadas?', options: ['El tutor de Nuria.', 'La tutora, Alba Prieto.', 'La directora, Elisa Navarro.'], answer: 1, why: '«Recibirán hoy un correo de la tutora, Alba Prieto, con quien pueden hablar a partir de las cinco».', en: 'Who will email the families concerned?' },
              { prompt: '¿Por qué será la sesión en la biblioteca?', options: ['Porque el laboratorio está en obras.', 'Porque allí hay ordenadores para todos.', 'Porque es el aula más grande.'], answer: 1, why: '«En la biblioteca, donde hay ordenadores para todos».', en: 'Why will the session be in the library?' },
              { prompt: '¿Qué dice el tutor de Nuria sobre su proyecto?', options: ['Que todavía tiene que corregirlo.', 'Que lo presentará él en la jornada.', 'Que es el mejor trabajo que ha leído en su carrera.'], answer: 2, why: '«El mejor trabajo que haya leído en veinte años de profesión»: el subjuntivo pondera; el sentido es el mismo que con «ha leído».', en: 'What does Nuria’s tutor say about her project?' },
            ],
            transcript: 'Buenas tardes, familias. Soy Marta Lozano, jefa de estudios del Instituto Río Claro. Les envío este audio porque la circular de ayer no estaba bien redactada, y les debo una explicación. Donde decía «los alumnos de cuarto, [[que no han entregado el proyecto|orange]], deben presentarse el lunes», con esas comas parecía que nadie lo había entregado, [[lo cual|blue]], como es lógico, preocupó a muchas familias. Lo que queríamos decir es que solo los alumnos [[que todavía no lo han entregado|teal]], [[que son doce|orange]], deben venir el lunes a las ocho. Las familias [[cuyos hijos|blue]] estén en esa situación recibirán hoy un correo de la tutora, Alba Prieto, [[con quien|blue]] pueden hablar por teléfono a partir de las cinco. La sesión será en la biblioteca, [[donde|orange]] hay ordenadores para todos. Y aprovecho para darles una buena noticia: el proyecto de Nuria Campos ha ganado el premio regional de investigación. Su tutor dice que es el mejor trabajo [[que haya leído|violet]] en veinte años de profesión, y no exagera. Les pedimos disculpas por las molestias. Muchas gracias y buen fin de semana.',
            reply: { teacher: 'Tú eres Marta. Tu alumno es el padre o la madre de un alumno de cuarto y responde al audio: si su hijo debe ir o no, una pregunta práctica y una felicitación por el premio, con al menos una relativa explicativa.', self: 'Responde a Marta en voz alta como madre o padre de un alumno de cuarto: di si tu hijo debe ir el lunes, haz una pregunta práctica y felicita al centro por el premio. Usa al menos un inciso. (Reply aloud with at least one aside.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Precisión al hablar', coach: 'Selecciona o añade, y que se note. Restrict or add, and make it clear.',
      steps: [
        { title: 'Tu experiencia · Your experience', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y repites la respuesta de tu alumno con la forma correcta cuando hace falta. Fíjate en las pausas de sus incisos: si no las hace, pregúntale de cuántas personas habla.', self: 'Lee cada pregunta y responde en voz alta. Marca los incisos con pausas. Si quieres, graba tu respuesta y comprueba dónde las haces. (Answer aloud; mark asides with pauses.)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en un aviso, un correo o un cartel que entendiste mal por la puntuación o por una frase ambigua. ¿Qué pasó? · Think of a notice or message you misread because of punctuation or ambiguity. What happened?', followUps: ['¿Qué querían decir en realidad? (What did they actually mean?)', '¿Cómo lo habrías redactado tú? (How would you have worded it?)'], phrases: ['Decía «…», [[lo cual|blue]] me hizo pensar que…', '[[Lo que|blue]] querían decir era…', 'Faltaba una coma, [[por lo que|blue]]…'], hint: 'Retoma ideas completas con «lo que / lo cual» tras coma.', example: 'Una vez mi banco me escribió: «Los clientes, que no han actualizado sus datos, perderán el acceso», lo cual me asustó muchísimo. Lo que querían decir era que solo los clientes que no los habían actualizado lo perderían.', teacher: 'Si tu alumno no tiene un ejemplo, cuenta tú uno breve y después le preguntas cómo lo corregiría.' },
            { q: 'Presenta a dos personas importantes de tu vida o de tu trabajo con un dato extra entre pausas. · Introduce two important people, adding extra information as an aside.', followUps: ['¿Tienes más hermanos, primos o jefes? ¿Cambia eso la frase? (Do you have more than one? Does it change the sentence?)', '¿Usarías «quien» o «el cual» al escribirlo? (Would you write «quien» or «el cual»?)'], phrases: ['Mi madre, [[que es enfermera|orange]], …', 'Mi jefa, [[quien lleva veinte años en la empresa|orange]], …', 'Mi primo [[que vive en…|teal]] (y no los otros)…'], hint: 'Con una persona única (mi madre), inciso con pausas. Si tienes varios hermanos y eliges uno, sin pausa.', example: 'Mi madre, que es enfermera, trabaja de noche. Y de mis dos hermanos, mi hermano que vive en Valencia es el que más me llama.', next: 'Ahora, al revés: selecciona.' },
            { q: 'Habla de un grupo (compañeros, vecinos, amigos) y separa a una parte con una relativa que selecciona. · Talk about a group and single out part of it.', followUps: ['¿Y los demás? (And the rest?)', '¿Cambiaría el sentido con comas? (Would commas change the meaning?)'], phrases: ['Los compañeros [[que viven lejos|teal]]…', 'De mis vecinos, solo los [[que…|teal]]', 'Los [[que…|teal]], en cambio,…'], hint: 'Sin pausa: estás eligiendo una parte del grupo.', example: 'En mi oficina, los compañeros que viven lejos teletrabajan los viernes; los que vivimos cerca vamos todos los días.' },
            { q: 'Describe el lugar donde trabajas o estudias y a las personas con las que tratas. Usa preposiciones delante del relativo. · Describe your workplace or school with preposition + relative.', followUps: ['¿Hay algún proyecto del que estés orgulloso u orgullosa? (Any project you are proud of?)', '¿Hay alguien sin quien no podrías hacer tu trabajo? (Is there someone you couldn’t do your job without?)'], phrases: ['la empresa [[para la que|blue]] / [[en la que|blue]] trabajo', 'el equipo [[con el que|blue]] colaboro', 'la sala [[donde|blue]] / [[en la que|blue]] nos reunimos', 'una compañera [[sin la cual|blue]]…'], hint: 'Primero piensa la preposición del verbo: trabajar en / para, colaborar con, depender de.', example: 'La empresa en la que trabajo es pequeña. El equipo con el que colaboro está en Bogotá, y tengo una compañera sin la cual no sabría usar la mitad de los programas.' },
            { q: '¿Cuál es el mejor libro, viaje o curso de tu vida? ¿Y el único que repetirías? · What is the best book, trip or course of your life? And the only one you would repeat?', followUps: ['¿Por qué lo pones por encima de los demás? (Why does it top the others?)', '¿Es lo primero que recomiendas a los demás? (Is it the first thing you recommend?)'], phrases: ['Es el mejor libro [[que he leído|violet]] / [[que haya leído|violet]]…', 'Es el único viaje [[que repetiría|violet]]…', 'Fue la primera vez que…'], hint: 'Tras superlativo, «he leído» y «haya leído» son correctos; el subjuntivo subraya tu valoración.', example: 'Es el mejor libro que haya leído nunca: lo terminé en dos días. Y el único curso que repetiría es uno de fotografía que hice hace años.', teacher: 'Si tu alumno solo usa indicativo, repite su frase con subjuntivo («el mejor que hayas leído, ¿no?») para que oiga las dos.' },
            { q: 'Cuenta una decisión importante y su consecuencia, en un registro formal, como en un informe. · Report a decision and its consequence formally.', followUps: ['¿Qué pasó después? (What happened next?)', '¿Quién te ayudó a tomarla? (Who helped you make it?)'], phrases: ['…, [[debido a lo cual|blue]]…', '…, [[a raíz de lo cual|blue]]…', '…, [[lo cual|blue]] supuso…'], hint: 'Locución + lo cual para encadenar causa y consecuencia sin empezar otra frase.', example: 'Hace tres años cambié de sector, a raíz de lo cual tuve que volver a estudiar, lo cual supuso dos años muy intensos.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes. Tu alumno avisa cada vez que oye un inciso y dice si selecciona o añade.', self: 'Ahora responde otra vez a dos tarjetas, pero en registro formal, como si escribieras un informe: usa «el cual», «cuyo» o una locución con «lo cual». (Answer two cards again in a formal register.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un párrafo de la memoria', coach: 'Claro, preciso, sin ambigüedad. Clear, precise, unambiguous.',
      steps: [
        { title: 'La memoria anual · The annual report', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el texto en voz alta, con las pausas de los incisos, y juntos comprueban cada coma: ¿selecciona o añade?', self: 'Escribe tu párrafo y toca «Revisar mi texto». Después léelo en voz alta: cada inciso debe sonar como una pausa. (Read it aloud to check the commas.)' } },
          { kind: 'write', title: 'Un párrafo para la memoria anual · A paragraph for the annual report', situation: 'Eres Rubén (o escribes sobre tu propio centro de trabajo o de estudios). Redacta un párrafo de la memoria anual para el consejo escolar y las familias sobre el viaje de estudios, el premio de Nuria y la corrección de la circular. Es un texto formal, que debe leerse sin ambigüedades. (You are Rubén, or you write about your own workplace or school. Write a formal, unambiguous paragraph of the annual report.)', task: [
            'Una relativa especificativa y otra explicativa, bien puntuadas (las dos comas del inciso). (One restrictive and one non-restrictive clause, correctly punctuated.)',
            'Al menos una preposición + artículo + relativo (con la que, en el que, sin la cual…). (At least one preposition + article + relative.)',
            '«Lo que» o «lo cual» para retomar una oración entera, o una locución con «lo cual». (Refer back to a whole clause.)',
            'Una relativa con «cuyo / cuya…». (One relative clause with cuyo.)',
            'Una valoración con superlativo + relativa (el mejor… que…). (A superlative + relative clause.)',
          ], starters: ['En abril, cuarenta alumnos de cuarto viajaron a…', 'El viaje, que coordinó…', '…, sin la cual…', 'Los alumnos que participaron…', 'Por otra parte, …, cuyo proyecto…', '…, lo cual…', 'Es el mejor trabajo que…'],
            words: ['que', 'quien', 'el cual', 'la cual', 'lo cual', 'lo que', 'cuyo', 'cuya', 'con la que', 'en el que', 'sin la cual', 'donde', 'gracias a lo cual', 'debido a lo cual'],
            model: 'En abril, cuarenta alumnos de cuarto viajaron a Lima, [[donde|orange]] visitaron dos colegios [[con los que|blue]] el centro colabora desde 2018. El viaje, [[que coordinó la profesora Carmen Ibáñez|orange]], se financió en parte con una beca de la Fundación Ribera, [[sin la cual|blue]] no habría sido posible. Los alumnos [[que participaron|teal]] escribieron un diario de viaje que hoy puede consultarse en la biblioteca. Por otra parte, Nuria Campos, [[cuyo proyecto|blue]] sobre el agua en los Andes ha ganado el premio regional de investigación, presentará su trabajo en la jornada de puertas abiertas, [[lo cual|blue]] es una excelente noticia para todo el centro. Su tutor lo considera el mejor trabajo [[que haya dirigido|violet]] nunca. Por último, pedimos disculpas por la circular del 12 de junio, cuya puntuación generó dudas: solo debían presentarse los alumnos [[que aún no habían entregado el proyecto|teal]], que eran doce.',
            minWords: 120,
            checks: [
              { label: 'Un inciso con relativo entre comas (explicativa) · a relative clause after a comma', pattern: ',\\s*(?:que|quien|quienes|el\\s+cual|la\\s+cual|los\\s+cuales|las\\s+cuales|donde|cuyo|cuya|cuyos|cuyas)(?!\\p{L})', tip: 'Añade un dato entre comas: «El viaje, que coordinó Carmen Ibáñez, …».' },
              { label: 'Preposición + artículo + relativo · preposition + article + relative', pattern: '(?<!\\p{L})(?:a|con|de|en|para|por|sobre|sin|según|desde|hacia|entre|mediante|durante|tras)\\s+(?:el|la|los|las|lo)\\s+(?:que|cual|cuales)(?!\\p{L})', tip: 'Por ejemplo: «los colegios con los que colaboramos», «una beca sin la cual…».' },
              { label: '«Lo que» o «lo cual» · referring back to a whole clause', pattern: '(?<!\\p{L})lo\\s+(?:que|cual)(?!\\p{L})', tip: 'Retoma una oración entera: «…, lo cual es una excelente noticia».' },
              { label: 'Cuyo / cuya / cuyos / cuyas', pattern: '(?<!\\p{L})cuy[oa]s?(?!\\p{L})', tip: 'Une poseedor y cosa poseída: «Nuria Campos, cuyo proyecto…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:alumnos?|alumnas?|profesor|profesores|profesoras?|familias?|personas?|chicos?|chicas?|tutor|tutora|tutores)\\s+quien(?:es)?(?!\\p{L})', why: 'Sin comas ni preposición, «quien» no funciona: «la profesora **que** coordinó» o, con inciso, «Carmen Ibáñez, **quien** coordinó, …».' },
              { pattern: '(?<!\\p{L})cuy[oa]s?\\s+(?:su|sus|el|la|los|las)(?!\\p{L})', why: '«Cuyo» no lleva artículo ni posesivo detrás: «cuyo proyecto», no «cuyo el proyecto» ni «cuyo su proyecto».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What are you taking away today?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'ESPECIFICATIVA', formula: 'sin comas · que / prep. + el que, el cual, quien', example: 'Los alumnos que aprobaron salieron.', caption: 'selecciona una parte; admite subjuntivo', en: 'restricts the set; no commas; may take the subjunctive' },
            { tone: 'orange', label: 'EXPLICATIVA', formula: ', que / quien / el cual … ,', example: 'Los alumnos, que aprobaron, salieron.', caption: 'añade un dato sobre todos; dos comas', en: 'adds a comment about the whole set; a comma on each side' },
            { tone: 'blue', label: 'TEXTO CUIDADO', formula: 'para la que · sin la cual · , lo que / lo cual · cuyo + lo poseído', example: 'Es la empresa para la que trabajo, lo cual me permite viajar.', caption: 'la preposición del verbo delante; cuyo concuerda con lo poseído', en: 'keep the verb’s preposition; lo cual for a whole clause; cuyo agrees with the thing owned' },
            { tone: 'violet', label: 'SUPERLATIVO + RELATIVA', formula: 'el mejor / el único / el primero + que + indicativo o subjuntivo', example: 'Es el mejor libro que he leído / que haya leído.', caption: 'los dos modos son correctos; el subjuntivo pondera', en: 'both moods are correct; the subjunctive adds emphasis' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de poner una coma, pregúntate: **¿todos o solo algunos?** Si selecciona, sin comas; si añade, dos comas. Después, el relativo: sin preposición en una especificativa, solo «que»; «quien» y «el cual» sin preposición, solo entre comas. Y nunca pierdas la preposición del verbo: «la empresa **para la que** trabajo».', en: 'Before you add a comma, ask yourself: all of them or only some? Restrictive clauses take no commas; non-restrictive ones take two. Then choose the relative: in a restrictive clause without a preposition, only «que». And never drop the verb’s preposition.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { context: 'El edificio tiene un solo ascensor. (Only one lift.)', prompt: '¿Qué frase está bien puntuada?', options: ['El ascensor que se averió ayer ya funciona.', 'El ascensor, que se averió ayer, ya funciona.', 'El ascensor, que se averió ayer ya funciona.'], answer: 1, why: 'Antecedente único: explicativa, con una coma a cada lado.', en: 'The lift, which broke down yesterday, is working again.' },
            { prompt: 'Es el proveedor ___ dependemos para el material.', options: ['del que', 'que', 'el cual'], answer: 0, why: 'Depender **de** algo: «del que» (o «del cual»).', en: 'It’s the supplier we depend on for materials.' },
            { prompt: 'Faltaron dos ponentes, ___ el congreso terminó antes.', options: ['debido al cual', 'debido a lo cual', 'debido a cual'], answer: 1, why: 'El antecedente es toda la oración: neutro, «debido a lo cual».', en: 'Two speakers didn’t turn up, because of which the conference finished early.' },
            { prompt: 'El autor, ___ novelas se leen en muchos institutos, visitará la ciudad.', options: ['que sus', 'cuyas', 'cuyos'], answer: 1, why: '«Cuyo» concuerda con lo poseído: novelas, femenino plural.', en: 'The author, whose novels are read in many schools, will visit the city.' },
            { prompt: 'La persona ___ llamó esta mañana era la inspectora.', options: ['la cual', 'quien', 'que'], answer: 2, why: 'Especificativa sin preposición: solo «que».', en: 'The person who called this morning was the inspector.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el boletín de la biblioteca. Now, the library newsletter.', blocks: [
          { kind: 'lead', text: 'La biblioteca municipal prepara su boletín mensual. Une las frases en un texto formal y decide en cada caso si la relativa selecciona o añade.', en: 'The public library is preparing its monthly newsletter. Join the sentences in a formal register and decide each time whether the clause restricts or adds information.' },
          { kind: 'rewrite', title: 'El boletín · The newsletter', items: [
            { prompt: 'La biblioteca municipal reabre el lunes. La biblioteca estuvo cerrada seis meses.', instruction: 'Une con una explicativa (solo hay una biblioteca municipal). Empieza con «La biblioteca municipal».', accept: ['La biblioteca municipal, que estuvo cerrada seis meses, reabre el lunes', 'La biblioteca municipal, la cual estuvo cerrada seis meses, reabre el lunes', 'La biblioteca municipal, que ha estado cerrada seis meses, reabre el lunes', 'La biblioteca municipal, la cual ha estado cerrada seis meses, reabre el lunes'] },
            { prompt: 'Algunos socios tienen el carné caducado. Esos socios deben renovarlo.', instruction: 'Une con una especificativa. Empieza con «Los socios».', accept: ['Los socios que tienen el carné caducado deben renovarlo', 'Los socios cuyo carné ha caducado deben renovarlo', 'Los socios cuyo carné está caducado deben renovarlo'] },
            { prompt: 'Hubo una avería eléctrica. Por eso se retrasó la apertura.', instruction: 'Une con «por lo que» o «por lo cual».', accept: ['Hubo una avería eléctrica, por lo que se retrasó la apertura', 'Hubo una avería eléctrica, por lo cual se retrasó la apertura'] },
          ] },
        ] },
        { title: 'Ampliación · Matices de registro', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: casos más finos. Optional: finer cases.', blocks: [
          { kind: 'teacher', text: 'Paso opcional, para alumnos que quieren ir más allá o si sobra tiempo. Se puede saltar sin perder nada esencial.' },
          { kind: 'choice', title: 'Casos más finos · Finer cases', items: [
            { prompt: '«Mi hermana, la que vive en Lima, viene en julio». ¿Qué comunica «la que» entre comas?', options: ['Que tengo más de una hermana y aclaro de cuál hablo.', 'Es un error: entre comas solo vale «quien».', 'Lo mismo que «que»: tengo una sola hermana.'], answer: 0, why: '«La que» sin antecedente funciona como una aposición que identifica: contrasta con otras hermanas. «Mi hermana, que vive en Lima» no contrasta.', en: 'Between commas, «la que» works as an identifying apposition: “my sister, the one who lives in Lima”.' },
            { prompt: '«Llovió toda la noche, por lo que se suspendió la excursión». ¿Qué valor tiene «por lo que»?', options: ['Lugar: dice dónde estaba la excursión.', 'Consecuencia: retoma toda la oración anterior, como «así que».', 'Causa: explica por qué llovió.'], answer: 1, why: 'Preposición + lo que / lo cual con una oración como antecedente: introduce la consecuencia.', en: 'It introduces the consequence of the whole previous clause, like “so” or “which is why”.' },
            { prompt: 'En un reglamento: «Se aprobó la norma, ___ las familias podrán recurrir las notas».', options: ['según cual', 'según el que', 'según la cual'], answer: 2, why: 'Preposición larga + artículo + cual, concordando con «norma». «Según el que» falla en la concordancia y, además, suena poco natural.', en: 'The rule was approved, under which families will be able to appeal grades.' },
            { prompt: '«Los alumnos, los cuales…» y «Los alumnos, quienes…»: ¿cuál es correcta?', options: ['Solo «quienes».', 'Las dos, en una explicativa de registro formal.', 'Solo «los cuales».'], answer: 1, why: 'En una explicativa, «que», «quienes» y «los cuales» son posibles; «los cuales» y «quienes» suben el registro.', en: 'Both are correct in a formal non-restrictive clause.' },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 204 · Revisión argumentativa C1: coherencia, cohesión y matiz', text: 'Ya puntúas las relativas según su sentido y eliges el relativo propio de un texto cuidado: «para la que», «sin la cual», «lo cual», «cuyo». En la clase 204 das el paso del párrafo al texto completo: revisas un texto argumentativo para que sea coherente, esté bien cohesionado y matice. Es el paso natural: «lo cual» y «a raíz de lo cual» ya son herramientas de cohesión, y una coma bien puesta es parte del matiz.', en: 'You can now punctuate relative clauses by meaning and choose the relative a careful text needs. In class 204 you move from the paragraph to the whole text: you revise an argumentative piece for coherence, cohesion and nuance. It is the natural next step: «lo cual» and «a raíz de lo cual» are already cohesion devices, and a well-placed comma is part of nuance.', href: '/gramatica/revision-argumentativa-c1-coherencia-cohesion-y', label: 'Ir a la clase 204' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué frase de tu trabajo o de tus estudios podría cambiar de sentido con dos comas?». Tu alumno la dice de las dos maneras. Tarea: revisar un correo real o un aviso y comprobar cada relativa: ¿selecciona o añade?, ¿falta alguna preposición?' },
        ] },
      ],
    },
  ],
};
