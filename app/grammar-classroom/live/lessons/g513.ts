import type { LiveLesson } from '../types';

/**
 * Lesson 513 · C2 · Ambigüedad intencional y ambigüedad accidental (course unit G213).
 * Builds on G186 (lesson 118: ellipsis with several candidates, «nombre + de» agent/patient,
 * implicit subject of infinitives). Those cases are not repeated. C2 step: who pays for the second
 * reading. Accidental ambiguity as a defect to repair in contracts, reports and instructions
 * (modifier attachment, a complement shared by a coordination, scope of negation with «todos… no»,
 * negated causal clauses and mood, «su», scope of «solo», commas in relative clauses, «cuando
 * salía» → «cuando este salía»); intentional ambiguity in humour, advertising, diplomacy and
 * literature (double meanings the reader must see, calculated vagueness: «tomaremos las medidas
 * oportunas»); polysemy vs syntax vs vagueness; context and intonation as resolvers; repair tools
 * (order, punctuation, explicit referent, quantifier, mood, precise word) and the rule not to
 * repair what context already resolves. Ampliación (audit row 35): stylistic adjective position
 * (un viejo cliente / un cliente viejo) and «sendos» as a disambiguator.
 * Scene: Estudio Tilde, a small writing studio. Elena Robles (head editor), Nuria Paredes (lawyer)
 * and Bruno Salas (copywriter) revise a contract and a campaign for Cooperativa Roble, a furniture
 * cooperative run by Ramón Ibarra. Escuchar: Nuria's weekly style minute «Letra clara»
 * (es-MX-DaliaNeural). Escribir: Elena's revision memo to Ramón.
 */
export const lesson: LiveLesson = {
  id: 513,
  level: 'C2',
  title: 'Ambigüedad intencional y ambigüedad accidental',
  subtitle: 'Detectar y reparar la ambigüedad que nadie quería, y crear o explicar el doble sentido que sí se busca.',
  legend: [
    { tone: 'orange', label: 'AMBIGÜEDAD ACCIDENTAL · a second reading nobody intended' },
    { tone: 'violet', label: 'DOBLE SENTIDO O VAGUEDAD BUSCADOS · ambiguity on purpose' },
    { tone: 'teal', label: 'REPARACIÓN · orden, puntuación, referente, modo (the fix)' },
    { tone: 'blue', label: 'CONTEXTO · what already selects one reading' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Defecto o recurso?', coach: 'La misma doble lectura puede ser un fallo o un acierto. Same double reading: flaw or craft.',
      steps: [
        { title: 'Dos dobles sentidos, dos destinos · Two double meanings, two fates', blocks: [
          { kind: 'lead', text: 'Estudio Tilde, lunes. Ramón Ibarra, director de la Cooperativa Roble, una cooperativa de muebles, ha enviado dos documentos: el contrato con las tiendas que venden sus productos y una idea para la campaña de otoño. Bruno, el redactor publicitario, lo resume así: «**La propuesta del director puede tener dos lecturas**». Nuria, la abogada, contesta: «Depende de dónde esté: en el anuncio, perfecto; en el contrato, un problema». Ya sabes reconocer frases con dos interpretaciones. Hoy das el paso de C2: decidir **si la segunda lectura sobra o es justo lo que se busca**, y actuar en consecuencia.', en: 'A writing studio is revising a furniture cooperative’s contract and ad campaign. The copywriter notes that the director’s proposal “can be read two ways”; the lawyer replies that this is great in an ad and a problem in a contract. You already spot sentences with two readings; at C2 you decide whether the second reading is a defect to remove or the very point of the text.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases. Tu alumno dice en cada una cuántas lecturas tiene, si quien escribe las quería y qué pasaría si un lector eligiera la otra.', self: 'Lee las tres frases en voz alta. En cada una: ¿cuántas lecturas hay?, ¿las quería quien escribe?, ¿qué pasa si el lector elige la otra? (How many readings, and were they intended?)' } },
          { kind: 'compare', title: 'Tres textos de la cooperativa · Three texts from the cooperative', columns: [
            { tone: 'orange', label: 'ACCIDENTAL · CONTRATO', sentence: 'El cliente [[solo podrá reclamar por escrito en los primeros treinta días|orange]].', idea: '¿«Solo» limita la forma (por escrito) o el plazo (treinta días)? Nadie quería dos lecturas: es un **defecto**.', en: 'Does “solo” restrict the form or the deadline? Nobody intended two readings, and in a contract each party may pick the one that suits it.' },
            { tone: 'violet', label: 'INTENCIONAL · ANUNCIO', sentence: 'Sillas Roble: [[te damos respaldo|violet]].', idea: 'El respaldo de la silla y el apoyo de la cooperativa: el lector tiene que **ver las dos**.', en: 'A deliberate pun: “respaldo” is both the back of a chair and support. The ad works only if the reader catches both meanings at once.' },
            { tone: 'violet', label: 'VAGUEDAD CALCULADA · COMUNICADO', sentence: 'Si las tiendas no cumplen, [[tomaremos las medidas oportunas|violet]].', idea: 'No hay dos lecturas, sino un contorno borroso: dice **poco a propósito** y compromete poco.', en: 'Not two readings but a deliberately blurry edge: it sounds firm while committing to nothing specific.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué distingue de verdad la ambigüedad accidental de la intencional?', options: ['Que la intencional solo aparece en la literatura.', 'La intención de quien escribe y el efecto que busca en el lector.', 'Que la accidental es siempre sintáctica y la intencional, siempre léxica.'], answer: 1, why: 'La misma estructura puede ser un descuido o un recurso. Decide la intención y el género del texto, no el tipo de ambigüedad.', en: 'The same mechanism can be a slip or a device: intention and genre decide.' },
            { prompt: 'En un contrato, una cláusula admite dos lecturas razonables. ¿Qué haces?', options: ['La reformulas para que solo quepa la lectura que quieren las partes.', 'La pones entre comillas para marcar que es literal.', 'La dejas: si hay conflicto, ya decidirá un juez.'], answer: 0, why: 'En un contrato la segunda lectura es un riesgo real: hay que eliminarla antes de firmar.', en: 'In a contract, a second reading is a real risk.' },
          ] },
        ] },
        { title: 'De dónde nace la ambigüedad accidental · Where accidental ambiguity comes from', mascot: '/brand/mascot/studying.webp', coach: 'Gramatical no significa claro. Grammatical is not the same as clear.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'AMBIGÜEDAD ACCIDENTAL', question: '¿Hay una segunda lectura que nadie ha querido poner?', en: 'At C1 you worked on ellipsis and “noun + de”. Here the focus is on the structures that most often slip into contracts, reports and instructions: a modifier that can attach to two nouns, the scope of negation and of “solo”, a possessive “su” with two possible owners, and commas around relative clauses. The sentence may be perfectly grammatical and still defective, because someone can legitimately read what you did not mean.', formula: ['una secuencia de palabras + dos estructuras posibles → dos significados', 'gramatical ≠ claro: una frase correcta puede ser defectuosa', 'en un contrato, la lectura «mala» también es una lectura legítima'],
            meaning: 'En C1 trabajaste la elipsis y el «nombre + de». En C2 la pregunta es **quién paga la segunda lectura**. En un informe, unas instrucciones o un contrato, la ambigüedad accidental es un **defecto**: el lector puede entender lo que no se quiso decir. Y en muchos códigos civiles rige un principio clásico: la cláusula oscura **no favorece a quien la redactó**.',
            examples: [
              { es: 'Vendo [[mesa para niño de madera|orange]].', en: 'Grammatical, but “de madera” can attach to “niño”: an absurd reading that still makes the ad look careless.' },
              { es: '[[Todos los pedidos no|orange]] incluyen el transporte.', en: 'Does no order include delivery, or do only some? The negation can scope over “todos” or over the verb.' },
              { es: 'La cooperativa informará al distribuidor de los cambios en [[su catálogo|orange]].', en: 'Whose catalogue: the cooperative’s or the distributor’s? Both have one.' },
            ] },
          { kind: 'table', title: 'Fuentes frecuentes y su reparación · Frequent sources and their fix', head: ['Fuente', 'Frase con dos lecturas', 'Reparación'], rows: [
            ['Complemento que puede engancharse a dos nombres', 'Vendo [[mesa para niño de madera|orange]].', 'Vendo mesa **de madera** para niño.'],
            ['Complemento compartido por una coordinación', 'Descuento para clientes y [[empresas de la provincia|orange]].', 'Descuento para **empresas de la provincia** y para clientes de cualquier lugar.'],
            ['Alcance de la negación con «todos»', '[[Todos los pedidos no|orange]] llegaron a tiempo.', '**Ningún** pedido llegó a tiempo. / **No todos** los pedidos llegaron a tiempo.'],
            ['Negación + causa', 'No lo invitamos [[porque es amigo del director|orange]].', 'No lo invitamos, porque es amigo del director. / No lo invitamos porque **sea** amigo del director, sino porque sabe de muebles.'],
            ['Posesivo «su» con dos poseedores', 'Elena habló con Nuria de [[su contrato|orange]].', 'Elena habló con Nuria del contrato **de Nuria**.'],
            ['Alcance de «solo»', 'Podrá reclamar [[solo por escrito en treinta días|orange]].', 'Podrá reclamar **únicamente** en treinta días y **siempre** por escrito.'],
            ['Comas en las relativas', 'Los socios[[, que no han pagado la cuota,|orange]] no votarán.', 'Los socios **que no han pagado la cuota** no votarán. (solo esos)'],
          ], note: 'Con la coma, la relativa es **explicativa** y habla de todos los socios; sin coma, es **especificativa** y selecciona un grupo. En la causal negada, el **subjuntivo** («porque sea») obliga a leer que la invitación sí existió y lo que se niega es el motivo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Vendo mesa para niño de madera.» ¿Cuál es la lectura que nadie quería?', options: ['Que la mesa es de madera.', 'Que el vendedor es un niño.', 'Que el niño es de madera.'], answer: 2, why: '«De madera» puede engancharse al nombre más cercano, «niño». Basta con acercarlo a «mesa».', en: 'Which reading did nobody intend?' },
            { prompt: '«Los socios, que no han pagado la cuota, no votarán.» ¿Qué dice realmente?', options: ['Que todos los socios votarán.', 'Que ningún socio ha pagado y ninguno votará.', 'Que solo los socios que no han pagado se quedan sin voto.'], answer: 1, why: 'Entre comas, la relativa es explicativa: se aplica a todos los socios. Para seleccionar un grupo, se quitan las comas.', en: 'With commas, the relative clause describes all the members.' },
          ] },
        ] },
        { title: 'Polisemia, sintaxis y vaguedad · Polysemy, syntax and vagueness', mascot: '/brand/mascot/speaking.webp', coach: '¿Una palabra, una estructura o un límite borroso? A word, a structure or a blurry edge?', blocks: [
          { kind: 'lead', text: 'Antes de reparar, diagnostica. La **polisemia** está en una palabra con dos sentidos; la **ambigüedad sintáctica**, en la manera de agrupar las palabras; la **vaguedad** no ofrece dos lecturas, sino un límite impreciso. Las tres pueden ser accidentales o buscadas, y cada una se repara con una herramienta distinta.', en: 'Diagnose before you fix. Polysemy lives in one word with two senses; structural ambiguity lives in how the words group together; vagueness gives no two discrete readings, only a fuzzy boundary. Each can be accidental or deliberate, and each needs a different repair.' },
          { kind: 'table', title: 'Tres fenómenos, tres pruebas · Three phenomena, three tests', head: ['', 'Polisemia (léxica)', 'Ambigüedad sintáctica', 'Vaguedad'], rows: [
            ['Dónde está', 'en una palabra con dos sentidos', 'en cómo se agrupan las palabras', 'en un límite borroso'],
            ['Ejemplo', 'Nos vemos junto al **banco** de la plaza.', 'Hablaremos **del contrato con el abogado**.', 'Entregaremos el pedido **en un plazo razonable**.'],
            ['Prueba', 'Cambia la palabra por un sinónimo: «asiento» o «entidad». La duda desaparece.', 'Reordena: «Con el abogado, hablaremos del contrato». La duda desaparece.', 'Pregunta «¿cuánto exactamente?»: no hay dos respuestas, hay muchas.'],
            ['Reparación', 'otra palabra o más contexto', 'orden, puntuación, repetir o nombrar', 'precisar: «en diez días hábiles»'],
          ], note: 'En «Hablaremos del contrato con el abogado», el complemento puede ir con «hablaremos» (hablar con el abogado) o con «contrato» (el contrato firmado con el abogado). Ninguna palabra cambia de sentido: cambia la estructura.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Nos vemos junto al banco de la plaza.» ¿Qué tipo de ambigüedad es?', options: ['Léxica: «banco» tiene dos sentidos.', 'Vaguedad: no se sabe la hora.', 'Sintáctica: el complemento se engancha a dos nombres.'], answer: 0, why: 'La duda está en una palabra (asiento o entidad financiera). Con un sinónimo desaparece.', en: 'One word, two senses.' },
            { prompt: '«La cooperativa responderá en un plazo razonable.» ¿Qué le pasa a esta cláusula?', options: ['Es vaga: «razonable» no fija un límite.', 'Tiene un error de concordancia.', 'Tiene dos lecturas sintácticas.'], answer: 0, why: 'No hay dos lecturas concretas, sino un límite impreciso. En un contrato se repara precisando: «en diez días hábiles».', en: 'Not two readings, but an undefined limit.' },
          ] },
        ] },
        { title: 'La ambigüedad que se busca · Ambiguity on purpose', mascot: '/brand/mascot/standing.webp', coach: 'Aquí la segunda lectura es el mensaje. Here the second reading is the message.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'AMBIGÜEDAD INTENCIONAL', question: '¿Quiere quien escribe que veas las dos lecturas, o que no veas ninguna con nitidez?', en: 'In humour and advertising, a double meaning works only when the reader activates both senses: the second one is the punchline. In diplomacy and institutional communication, calculated vagueness lets the speaker sound firm while committing to little, and codes such as “frank talks” are read by insiders as a sign of disagreement. In literature, a double reading enriches the text. The condition is always the same: the audience must be able to recover what is meant.', formula: ['humor y publicidad → doble sentido: se activan las dos lecturas a la vez', 'diplomacia y comunicados → vaguedad calculada: suena firme y compromete poco', 'literatura → la lectura doble enriquece el texto y se deja abierta'],
            meaning: 'En la ambigüedad intencional, la segunda lectura **no es un accidente que tolerar**, sino el efecto que se persigue. En el chiste y en el eslogan, el lector tiene que **recuperar las dos**; en el comunicado diplomático, tiene que **notar que se le dice poco**. Si una lectura se pierde, el recurso falla.',
            examples: [
              { es: '—Un café [[solo|violet]], por favor. —¿Solo? Si quiere, yo le hago compañía.', en: 'A joke built on polysemy: “café solo” is black coffee, but the waiter pretends “solo” means “alone”.' },
              { es: 'Gimnasio Avance: ven a [[sudar la camiseta|violet]].', en: 'A slogan of our own: literally sweating in your T-shirt, and the idiom for working really hard.' },
              { es: 'Las conversaciones entre las dos delegaciones han sido [[francas|violet]].', en: 'In diplomatic language, “frank” talks usually suggest that there was disagreement, without saying so.' },
              { es: 'Estudiaremos su propuesta [[con el máximo interés|violet]].', en: 'Courteous vagueness: it promises attention, not an answer or a date.' },
            ],
            note: 'Un doble sentido que **ofende** o **engaña** deja de ser ingenio. En publicidad, además, la publicidad engañosa está regulada en muchos países: una ambigüedad que induce a error sobre el precio o las condiciones no se salva con «era un juego de palabras».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Por qué funciona «ven a sudar la camiseta» en el anuncio de un gimnasio?', options: ['Porque activa el sentido literal (sudar en el gimnasio) y el figurado (esforzarse).', 'Porque «camiseta» es ambigua sintácticamente.', 'Porque es vago y no promete nada.'], answer: 0, why: 'El lector ve a la vez la imagen literal y la expresión idiomática: el doble sentido es el mensaje.', en: 'Why does the gym slogan work?' },
            { prompt: '«Tomaremos las medidas oportunas.» ¿Qué tipo de recurso es?', options: ['Vaguedad calculada: suena firme y no concreta nada.', 'Un doble sentido humorístico.', 'Una ambigüedad sintáctica accidental.'], answer: 0, why: 'No hay dos lecturas, sino muchas posibles: quien habla evita comprometerse con medidas concretas.', en: 'What kind of device is it?' },
          ] },
        ] },
        { title: 'Contexto, entonación y reparación · Context, intonation and repair', mascot: '/autoestudio/mascot/noting.webp', coach: 'Repara lo justo, ni más ni menos. Fix what needs fixing, no more.', blocks: [
          { kind: 'decide', title: '¿Reparo esta frase? · Do I fix this sentence?', steps: [
            { q: '¿Hay una segunda lectura plausible para el lector real, no solo para un lingüista?', yes: 'Sigue con la siguiente pregunta.', no: '**Déjala**: si el contexto ya selecciona una lectura, reparar solo hace el texto más pesado.' },
            { q: '¿La has puesto a propósito y el género la admite (anuncio, chiste, discurso, poema)?', yes: '**Consérvala** y comprueba que se perciben las dos lecturas.', no: 'Es **accidental**: sigue.' },
            { q: '¿Puedes eliminarla con un cambio pequeño?', yes: 'Usa la herramienta mínima: **orden, puntuación, referente explícito, cuantificador, modo o una palabra más precisa**.', no: 'Divide la frase en dos o enumera las condiciones una por una.' },
          ] },
          { kind: 'table', title: 'Herramientas de reparación · Repair tools', head: ['Herramienta', 'Antes', 'Después'], rows: [
            ['Orden', 'Vendo mesa para niño de madera.', 'Vendo mesa [[de madera para niño|teal]].'],
            ['Puntuación', 'Los socios, que no han pagado, no votarán.', 'Los socios [[que no han pagado|teal]] no votarán.'],
            ['Referente explícito', '…de los cambios en su catálogo.', '…de los cambios [[en el catálogo de la cooperativa|teal]].'],
            ['Demostrativo «este»', 'Ramón llamó a Bruno cuando salía de la oficina.', 'Ramón llamó a Bruno [[cuando este salía|teal]] de la oficina. (= Bruno)'],
            ['Cuantificador', 'Todos los pedidos no incluyen el transporte.', '[[No todos los pedidos|teal]] incluyen el transporte.'],
            ['Modo', 'No lo invitamos porque es amigo del director.', 'No lo invitamos [[porque sea|teal]] amigo del director, sino por su trabajo.'],
          ], note: '«Este» remite al último nombre mencionado, que suele ser el más cercano. Es formal y muy útil en informes y contratos; en la conversación se prefiere repetir el nombre.' },
          { kind: 'tip', icon: '🔊', title: 'Lo que la voz resuelve · What the voice resolves', text: 'Al hablar, la **entonación** y las **pausas** deshacen muchas ambigüedades. «No lo invitamos | porque es amigo del director», con pausa, dice que no hubo invitación. «No lo invitamos porque es amigo del director…, sino porque sabe de muebles», sin pausa y con énfasis en **porque**, dice que sí la hubo. La escritura no tiene entonación: por eso necesita comas, orden y palabras que el habla resuelve sola.', en: 'In speech, intonation and pauses resolve many ambiguities: with a pause, there was no invitation; without one, and with stress on “porque”, there was an invitation but for another reason. Writing has no intonation, so it needs commas, word order and explicit words.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No contratamos a esa empresa porque fuera la más barata.» ¿Qué sabemos?', options: ['Que no la contratamos porque era barata.', 'Que la contratamos, pero el motivo no fue el precio.', 'Que era la más cara.'], answer: 1, why: 'Con subjuntivo, la negación afecta a la causa, no al hecho: la contratación existió.', en: 'What does the subjunctive tell you?' },
            { prompt: '«El cliente conservará su factura.» ¿Hace falta reparar «su»?', options: ['Sí: hay que escribir «sus».', 'No: solo el cliente recibe la factura y es el sujeto; el contexto deja una lectura.', 'Sí: siempre hay que sustituir «su» en un contrato.'], answer: 1, why: 'Solo hay un poseedor plausible. Reparar lo que ya está claro hace el texto más pesado y sugiere un problema que no existe.', en: 'Is there a real second reading?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Reparar de menos, reparar de más. Under-fixing and over-fixing.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error. Tu alumno dice si el fallo es dejar una ambigüedad, reparar de más o estropear un doble sentido buscado, y propone la corrección antes de verla.', self: 'Lee cada frase y decide: ¿se deja una ambigüedad, se repara de más o se estropea un doble sentido? Después toca para ver la corrección. (Under-fixed, over-fixed, or a spoiled pun?)' } },
          { kind: 'mistakes', title: '¿Dónde está el fallo? · Where is the flaw?', items: [
            { wrong: 'Todos los envíos no incluyen el montaje. (Quiere decir: algunos sí lo incluyen.)', right: 'No todos los envíos incluyen el montaje.', why: '«Todos… no» admite dos lecturas por escrito: «ninguno» o «no todos». «No todos» deja solo la segunda.' },
            { wrong: 'El cliente sólo podrá reclamar por escrito en treinta días. (Se pone la tilde para aclarar.)', right: 'El cliente podrá reclamar únicamente en los treinta días siguientes a la entrega y siempre por escrito.', why: 'La tilde, que la Ortografía académica recomienda no escribir, solo distinguiría el adverbio del adjetivo; no dice qué limita el adverbio. El alcance se repara reformulando.' },
            { wrong: 'El cliente conservará su factura, es decir, la factura del cliente y no la de la cooperativa.', right: 'El cliente conservará su factura.', why: 'El contexto ya deja una sola lectura. La aclaración sobra y hace sospechar un problema inexistente.' },
            { wrong: 'Sillas Roble: te damos respaldo (el de la silla y también nuestro apoyo).', right: 'Sillas Roble: te damos respaldo.', why: 'Explicar el doble sentido dentro del eslogan lo mata: el lector tiene que descubrirlo solo.' },
            { wrong: 'Si el distribuidor incumple los plazos, la cooperativa tomará las medidas oportunas.', right: 'Si el distribuidor incumple los plazos, la cooperativa podrá suspender los envíos o resolver el contrato.', why: 'La vaguedad sirve en un comunicado; en un contrato deja la consecuencia abierta. Hay que enumerar las medidas.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un aviso dice: «Se ofrecen clases a adultos y jóvenes de la zona». Las clases son para jóvenes de la zona y para adultos de cualquier lugar. ¿Qué versión es precisa?', options: ['Se ofrecen clases a adultos y jóvenes, de la zona.', 'Se ofrecen clases a jóvenes de la zona y a adultos de cualquier lugar.', 'Se ofrecen clases a adultos y a jóvenes de la zona.'], answer: 1, why: 'Nombrar las dos condiciones por separado elimina la duda. La coma no aclara nada; repetir «a» ayuda, pero no dice de dónde pueden ser los adultos.', en: 'Which version removes the doubt?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno busca en un aviso, un correo de trabajo o unas instrucciones reales una frase con dos lecturas y dice si es accidental o buscada, y qué herramienta la repararía.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión del lunes', coach: 'Toca cada marca: ¿reparar o conservar? Tap each mark: fix or keep?',
      steps: [
        { title: 'El contrato y la campaña · The contract and the campaign', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Nuria y tu alumno es Elena; el papel de Bruno lo leen por turnos. Después tu alumno toca cada expresión marcada y explica si se repara o se conserva, y por qué.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿es un defecto, una reparación, un doble sentido buscado o un caso que el contexto ya resuelve? (Defect, fix, intended pun or resolved by context?)' } },
          { kind: 'explore', title: '«En el anuncio, sí; en el contrato, no»', setting: 'Lunes, diez de la mañana. Elena Robles (editora jefa), Nuria Paredes (abogada) y Bruno Salas (redactor publicitario) revisan los documentos de la Cooperativa Roble.', lines: [
            { who: 'Elena', text: 'Ramón nos ha mandado el contrato para las tiendas y su idea para la campaña. Empezamos por el contrato, Nuria.', en: 'Ramón has sent us the contract for the shops and his idea for the campaign. Let’s start with the contract, Nuria.' },
            { who: 'Nuria', text: 'Cláusula cuatro: «El cliente [[solo podrá reclamar por escrito en los primeros treinta días|orange]]». ¿Qué limita «solo», la forma o el plazo?', en: 'Clause four: does “solo” restrict the form of the claim or the deadline?' },
            { who: 'Elena', text: 'Ramón quería decir las dos cosas, pero cada parte podría leer la que le conviene. Mejor: «podrá reclamar [[únicamente durante los primeros treinta días y siempre por escrito|teal]]».', en: 'Ramón meant both, but each party could read the one that suits it. Better to state both restrictions separately.' },
            { who: 'Nuria', text: 'Cláusula seis: «[[Todos los pedidos no incluyen el transporte|orange]]». ¿Ninguno lo incluye o algunos sí?', en: 'Clause six: does no order include delivery, or do some?' },
            { who: 'Elena', text: 'Algunos sí: los pedidos grandes, de más de diez muebles. Entonces, «[[No todos los pedidos|teal]] incluyen el transporte», y añadimos cuáles.', en: 'Some do: large orders of more than ten pieces. So, “not all orders include delivery”, and we add which ones do.' },
            { who: 'Nuria', text: 'Y la ocho: «La cooperativa informará al distribuidor de los cambios en [[su catálogo|orange]]». Los dos tienen catálogo.', en: 'And clause eight: “its catalogue”. They both have one.' },
            { who: 'Elena', text: 'Pues nombramos al dueño: «[[en el catálogo de la cooperativa|teal]]». En un contrato, repetir no es feo: es seguro.', en: 'Then we name the owner. In a contract, repetition isn’t ugly: it’s safe.' },
            { who: 'Nuria', text: 'En la garantía también hay un «su»: «El cliente conservará su factura». Ahí [[solo hay un poseedor posible|blue]], así que no lo toco.', en: 'The warranty also has a “su”, but there is only one possible owner, so I’m leaving it.' },
            { who: 'Bruno', text: 'Ahora lo divertido. La propuesta del director puede tener dos lecturas, y creo que lo sabe: «Sillas Roble: [[te damos respaldo|violet]]».', en: 'Now the fun part. The director’s proposal can be read two ways, and I think he knows it: “Roble chairs: we’ve got your back.”' },
            { who: 'Nuria', text: 'Si eso estuviera en una cláusula, lo tacharía. ¿Respaldo de la silla o apoyo de la empresa?', en: 'If that were in a clause, I’d cross it out. The back of the chair, or the company’s support?' },
            { who: 'Bruno', text: 'Las dos, y a la vez: esa es la gracia. Y para la línea infantil propongo «Muebles que [[dan mucho juego|violet]]».', en: 'Both, at the same time: that’s the point. And for the children’s range I suggest “furniture that gives plenty of play”.' },
            { who: 'Elena', text: 'Me gustan. Pero el correo de Ramón termina con «[[tomaremos las medidas oportunas|violet]]» si las tiendas incumplen. En una carta, esa vaguedad sirve; en el contrato, [[hay que enumerar las medidas|teal]].', en: 'I like them. But Ramón’s email ends with “we will take appropriate measures”. That vagueness is fine in a letter; in the contract, the measures must be listed.' },
          ], notes: {
            'solo podrá reclamar por escrito en los primeros treinta días': '**Alcance de «solo»**: puede limitar «por escrito» (la forma) o «en los primeros treinta días» (el plazo). Ambigüedad accidental en un texto que obliga.',
            'únicamente durante los primeros treinta días y siempre por escrito': '**Reparación**: cada restricción tiene su propia marca («únicamente», «siempre»). Ya no hay un solo adverbio con dos alcances posibles.',
            'Todos los pedidos no incluyen el transporte': '**Alcance de la negación**: «todos… no» puede leerse como «ninguno» o como «no todos». Por escrito no hay entonación que decida.',
            'No todos los pedidos': '**Reparación con cuantificador**: «no todos» niega la totalidad y deja claro que algunos pedidos sí lo incluyen.',
            'su catálogo': '**«Su» con dos poseedores posibles**: la cooperativa y el distribuidor. El contexto no decide.',
            'en el catálogo de la cooperativa': '**Referente explícito**: se nombra al poseedor. En los contratos se prefiere repetir a arriesgar.',
            'solo hay un poseedor posible': '**El contexto resuelve**: el cliente es el sujeto y quien recibe la factura. Nuria no repara lo que no está roto.',
            'te damos respaldo': '**Doble sentido buscado**: «respaldo» es la parte de la silla en la que se apoya la espalda y también ‘apoyo, protección’. El anuncio necesita las dos lecturas.',
            'dan mucho juego': '**Doble sentido buscado**: «dar (mucho) juego» significa ‘ofrecer muchas posibilidades’, y en muebles para niños activa también el «juego» de jugar.',
            'tomaremos las medidas oportunas': '**Vaguedad calculada**: suena firme, pero no dice qué medidas. Útil en un comunicado; inaceptable en una cláusula.',
            'hay que enumerar las medidas': '**Reparación de la vaguedad**: en un contrato se sustituye la fórmula por consecuencias concretas (suspender envíos, resolver el contrato…).',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Por qué Nuria no toca el «su» de la garantía?', options: ['Porque solo hay un poseedor posible: el cliente.', 'Porque «su» nunca es ambiguo en singular.', 'Porque las garantías no se revisan.'], answer: 0, why: 'El contexto ya selecciona una lectura. Reparar sería innecesario.', en: 'Why does Nuria leave this “su” alone?' },
            { prompt: '¿Qué critica Nuria de «te damos respaldo»?', options: ['Que la cooperativa no fabrica sillas.', 'Nada en el anuncio: solo dice que en una cláusula sería un problema.', 'Que es agramatical.'], answer: 1, why: 'La misma doble lectura es un acierto en el eslogan y un defecto en un texto que obliga.', en: 'What is Nuria’s point about the slogan?' },
            { prompt: '¿Qué propone Elena para «tomaremos las medidas oportunas»?', options: ['Mantenerlo en la carta, pero enumerar las medidas en el contrato.', 'Dejarlo tal cual en el contrato.', 'Usarlo también en el eslogan.'], answer: 0, why: 'La vaguedad es aceptable en la carta y no en la cláusula, donde las consecuencias deben ser concretas.', en: 'What does Elena suggest?' },
          ] },
        ] },
        { title: '¿Reparar o conservar? · Fix or keep?', mascot: '/brand/mascot/kneeling.webp', coach: 'Depende del texto, no solo de la frase. It depends on the text, not just the sentence.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno clasifica cada fragmento del expediente de la cooperativa y justifica en voz alta su decisión con el tipo de texto.', self: 'Clasifica cada fragmento del expediente de la cooperativa. Piensa en el tipo de texto: ¿obliga a alguien o busca un efecto? (Does the text bind someone, or seek an effect?)' } },
          { kind: 'classify', title: 'El expediente de la Cooperativa Roble · The cooperative’s file', categories: [
            { id: 'reparar', label: 'REPARAR · defecto', tone: 'orange' },
            { id: 'conservar', label: 'CONSERVAR · claro o buscado', tone: 'violet' },
          ], items: [
            { text: 'Contrato: «El distribuidor pagará a la cooperativa el alquiler de su almacén».', answer: 'reparar', why: '«Su almacén»: el del distribuidor o el de la cooperativa. En un contrato hay que nombrar al dueño.' },
            { text: 'Folleto: «Muebles que dan mucho juego».', answer: 'conservar', why: 'Doble sentido buscado en un texto publicitario.' },
            { text: 'Instrucciones de montaje: «Atornille el estante al lateral con la llave pequeña».', answer: 'conservar', why: 'En teoría, «con la llave pequeña» podría ir con «lateral», pero solo una lectura es plausible: no hay que repararla.' },
            { text: 'Acta de la asamblea: «Todos los socios no votaron la propuesta».', answer: 'reparar', why: '¿No votó nadie o no votaron todos? Un acta debe dejar constancia exacta.' },
            { text: 'Carta a los socios: «Las conversaciones con las tiendas han sido francas».', answer: 'conservar', why: 'Vaguedad diplomática en una carta: sugiere tensiones sin detallarlas. Es una elección de estilo.' },
            { text: 'Contrato: «Los distribuidores, que superen las ventas pactadas, recibirán una bonificación».', answer: 'reparar', why: 'Con comas, la relativa es explicativa y no selecciona a nadie. Debe ser especificativa, sin comas.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Diagnosticar, reparar, crear', coach: 'Primero el diagnóstico, después la herramienta. Diagnosis first, then the tool.',
      steps: [
        { title: '¿Accidental, doble sentido o vaguedad? · Accident, pun or vagueness?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno clasifica cada texto y nombra el mecanismo: qué palabra o estructura crea la segunda lectura.', self: 'Clasifica cada texto y nombra el mecanismo: ¿qué palabra o estructura crea la segunda lectura? (Name the mechanism.)' } },
          { kind: 'classify', title: 'Siete textos · Seven texts', categories: [
            { id: 'acc', label: 'ACCIDENTAL', tone: 'orange' },
            { id: 'doble', label: 'DOBLE SENTIDO BUSCADO', tone: 'violet' },
            { id: 'vago', label: 'VAGUEDAD CALCULADA', tone: 'blue' },
          ], items: [
            { text: 'Informe técnico: «El técnico revisó la caldera de la vecina que estaba rota».', answer: 'acc', why: '«Que estaba rota» puede referirse a la caldera o a la vecina (las dos femeninas): efecto cómico no buscado.' },
            { text: 'Anuncio de una autoescuela: «Con nosotros, vas por buen camino».', answer: 'doble', why: 'Camino literal (la carretera) y figurado (hacer lo correcto).' },
            { text: 'Comunicado de un ministerio: «La situación se está analizando con la máxima atención».', answer: 'vago', why: 'Suena activo, pero no dice qué se hará ni cuándo.' },
            { text: 'Cláusula: «El proveedor indemnizará al cliente por los daños en su local».', answer: 'acc', why: '«Su local»: el del proveedor o el del cliente.' },
            { text: 'Revista de humor: «Un banco de la plaza, el único que no cobra comisiones».', answer: 'doble', why: 'Polisemia de «banco»: el asiento no cobra comisiones; la entidad sí.' },
            { text: 'Declaración tras una cumbre: «Hemos tenido un intercambio de opiniones sincero».', answer: 'vago', why: 'Fórmula diplomática: sugiere desacuerdo sin decirlo.' },
            { text: 'Correo interno: «Todos los empleados no recibirán el bono anual».', answer: 'acc', why: '«Todos… no»: ¿nadie o no todos? Un correo así genera alarma innecesaria.' },
          ] },
        ] },
        { title: 'Diagnóstico fino · Fine diagnosis', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Elige · Choose', items: [
            { prompt: 'Eslogan de una panadería: «Nuestro pan tiene miga… y nuestra historia, también». ¿Qué dos sentidos activa?', options: ['Pan del día y pan de ayer.', 'Ninguno: es una ambigüedad accidental.', 'La miga del pan y «tener miga», ‘tener más sustancia de lo que parece’.'], answer: 2, why: 'La primera parte es literal; «y nuestra historia, también» obliga a activar el sentido figurado.', en: 'Which two meanings does the bakery slogan play on?' },
            { prompt: '«Hablaremos del acuerdo con la directora.» ¿De qué tipo es la ambigüedad?', options: ['Léxica: «acuerdo» tiene dos sentidos.', 'Sintáctica: «con la directora» puede ir con «hablaremos» o con «acuerdo».', 'Vaguedad: no se dice cuándo.'], answer: 1, why: 'Ninguna palabra cambia de sentido; cambia la agrupación. Se repara reordenando: «Con la directora, hablaremos del acuerdo».', en: 'Is it lexical or structural?' },
            { prompt: '«No elegimos ese diseño porque fuera el más moderno.» ¿Qué sabemos?', options: ['Que no elegimos el diseño.', 'Que el diseño era antiguo.', 'Que lo elegimos, pero no por moderno.'], answer: 2, why: 'El subjuntivo en la causal negada niega el motivo, no el hecho.', en: 'What does the subjunctive tell you?' },
            { prompt: '«Ramón saludó a Bruno cuando este entraba en la sala.» ¿Quién entraba?', options: ['Bruno: «este» remite al último nombre mencionado.', 'Ramón, porque es el sujeto.', 'No se puede saber.'], answer: 0, why: '«Este» señala al referente más cercano en el texto, Bruno. Es una herramienta clásica de desambiguación.', en: 'Who was coming in?' },
            { prompt: '¿Cuál de estos eslóganes, escritos para una tienda de colchones, funciona como doble sentido?', options: ['Colchones Nube: para que duermas tranquilo y tu bolsillo, también.', 'Colchones con garantía de diez años.', 'Colchones de calidad a buen precio.'], answer: 0, why: '«Dormir tranquilo» es literal (descansar) y figurado (no preocuparse); «tu bolsillo, también» activa el segundo sentido.', en: 'Which slogan plays on two meanings?' },
          ] },
        ] },
        { title: 'Revisa el contrato · Check the contract', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son cláusulas del borrador. Tu alumno decide si cada una tiene una ambigüedad real y, si la tiene, elige la reparación y explica por qué las otras no sirven.', self: 'Son cláusulas del borrador. ¿Tienen una ambigüedad real? Si la tienen, elige la reparación. (Real ambiguity? If so, pick the fix.)' } },
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: 'El cliente solo podrá pagar con tarjeta los pedidos urgentes. (Quiere decir: los pedidos urgentes no se pueden pagar de otra forma.)', ok: false, options: ['El cliente sólo podrá pagar con tarjeta los pedidos urgentes.', 'Los pedidos urgentes solo podrán pagarse con tarjeta.', 'El cliente solo podrá pagar, con tarjeta, los pedidos urgentes.'], answer: 1, why: 'La frase original también se lee ‘solo los pedidos urgentes admiten tarjeta’. Con «los pedidos urgentes» como sujeto, «solo» limita la forma de pago. La tilde y las comas no deciden el alcance.' },
            { sentence: 'La cooperativa notificará al cliente cualquier retraso en su pedido.', ok: true, why: 'Solo el cliente hace pedidos: el contexto deja una única lectura. No hay que reparar.' },
            { sentence: 'Todos los envíos no incluyen el montaje. (Quiere decir: el montaje se paga siempre aparte.)', ok: false, options: ['No todos los envíos incluyen el montaje.', 'Ningún envío incluye el montaje.', 'Todos los envíos no incluyen, el montaje.'], answer: 1, why: 'La intención es «ninguno». «No todos» diría lo contrario de lo que se quiere.' },
            { sentence: 'El arrendador comunicará al inquilino la subida de su seguro. (Es el seguro del inquilino.)', ok: false, options: ['El arrendador comunicará al inquilino la subida del seguro que este tiene contratado.', 'El arrendador comunicará al inquilino la subida de su propio seguro.', 'El arrendador comunicará al inquilino la subida de sus seguros.'], answer: 0, why: '«Este» y la relativa identifican al inquilino. «Su propio» tiende a señalar al sujeto, el arrendador: justo la lectura equivocada.' },
            { sentence: 'Los socios, que no hayan pagado la cuota, no podrán votar.', ok: false, options: ['Los socios que, no hayan pagado la cuota, no podrán votar.', 'Los socios que no hayan pagado la cuota no podrán votar.', 'Los socios, que no hayan pagado la cuota no podrán votar.'], answer: 1, why: 'La relativa selecciona un grupo: es especificativa y va sin comas. Con comas sería explicativa, y una explicativa no lleva aquí subjuntivo; una sola coma, además, separaría el sujeto del verbo.' },
          ] },
        ] },
        { title: 'Ramón llama al estudio · Ramón calls the studio', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'La versión final · The final version', lines: [
            { who: 'Ramón', text: 'Elena, en la cláusula seis quiero decir que algunos pedidos sí llevan transporte. ¿Escribo «___ los pedidos incluyen el transporte»?', options: ['Todos no', 'No todos', 'Ningunos'], answer: 1, why: '«No todos» niega la totalidad: algunos sí lo incluyen. «Todos no» seguiría siendo ambiguo por escrito.' },
            { who: 'Elena', text: 'Exacto. ¿Y el descuento? ¿Lo damos por ser socio?' },
            { who: 'Ramón', text: 'No, no lo damos porque el cliente ___ socio, sino por volumen de compra.', options: ['será', 'es', 'sea'], answer: 2, why: 'Se niega el motivo, no el hecho (el descuento existe): causal negada con subjuntivo, seguida de «sino».' },
            { who: 'Elena', text: 'Perfecto. ¿Y la carta a los socios sobre la asamblea?' },
            { who: 'Ramón', text: 'Pongo: «Los socios ___ asistan a la asamblea recibirán el catálogo nuevo». Solo los que vengan.', options: [', que', 'los cuales', 'que'], answer: 2, why: 'Relativa especificativa: selecciona a los que asistan, sin comas. «Los cuales» no introduce una especificativa sin preposición.' },
            { who: 'Elena', text: 'Muy bien. Y el eslogan de las sillas lo dejamos tal cual.' },
            { who: 'Ramón', text: 'Sí: el doble sentido de «___» es justo lo que buscamos.', options: ['damos', 'sillas', 'respaldo'], answer: 2, why: '«Respaldo» es la palabra polisémica: parte de la silla y apoyo.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena sin ambigüedad · Order it with no ambiguity', items: [
            { tiles: ['Vendo', 'mesa', 'de', 'madera', 'para', 'niño.'], accept: ['Vendo mesa de madera para niño.'], en: 'For sale: wooden table for a child (the wood belongs to the table, not to the child).' },
            { tiles: ['No', 'todos', 'los', 'pedidos', 'llegaron', 'a', 'tiempo.'], accept: ['No todos los pedidos llegaron a tiempo.', 'Los pedidos no llegaron todos a tiempo.'], en: 'Not all the orders arrived on time (some did).' },
            { tiles: ['Con', 'la', 'directora,', 'hablaremos', 'del', 'acuerdo.'], accept: ['Con la directora, hablaremos del acuerdo.'], en: 'We will talk to the director about the agreement (not about an agreement made with her).' },
          ] },
        ] },
        { title: 'Repara la cláusula · Fix the clause', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada frase según la instrucción y lee en voz alta las dos versiones: ¿qué lectura ha desaparecido?', self: 'Reescribe cada frase según la instrucción y compara las dos versiones: ¿qué lectura ha desaparecido? (Which reading is gone?)' } },
          { kind: 'rewrite', title: 'Una sola lectura · One reading only', items: [
            { prompt: 'Todos los muebles no tienen garantía. (Quiere decir: algunos sí la tienen.)', instruction: 'Empieza por «No todos».', accept: ['No todos los muebles tienen garantía'] },
            { prompt: 'No contratamos a la empresa porque era la más barata. (Sí la contratamos; el motivo no fue el precio.)', instruction: 'Usa el subjuntivo para que solo quepa esa lectura.', accept: ['No contratamos a la empresa porque fuera la más barata', 'No contratamos a la empresa porque fuese la más barata'] },
            { prompt: 'Se aplicará un descuento a clientes y empresas de la provincia. (Solo las empresas tienen que ser de la provincia.)', instruction: 'Reordena: primero «a empresas de la provincia», después «a clientes».', accept: ['Se aplicará un descuento a empresas de la provincia y a clientes', 'Se aplicará un descuento a las empresas de la provincia y a los clientes', 'Se aplicará un descuento a empresas de la provincia y a clientes de cualquier lugar', 'Se aplicará un descuento a empresas de la provincia y a clientes particulares'] },
            { prompt: 'Ramón le dijo a Bruno que su eslogan era el mejor. (El eslogan es de Bruno.)', instruction: 'Pasa la frase a estilo directo: Ramón le habla a Bruno de tú.', accept: ['Ramón le dijo a Bruno: «Tu eslogan es el mejor»', 'Ramón le dijo a Bruno: «Tu eslogan es el mejor de todos»'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno inventa un eslogan con doble sentido para un producto cualquiera y escribe además una frase de contrato con ambigüedad accidental; tú dices cuál es cuál y cómo funciona cada una.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Letra clara', coach: '¿Error o herramienta? Flaw or tool?',
      steps: [
        { title: 'El minuto de estilo · The style minute', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada ejemplo, dice si es accidental o buscado y qué reparación propone Nuria.', self: 'Escucha una vez para la idea general. En la segunda, anota cada ejemplo y decide si es accidental o buscado. Vas a oír «malinterpretar» (to misread) y «trampa» (trap).' } },
          { kind: 'listen', title: 'Letra clara, con Nuria Paredes', channel: 'ESTUDIO TILDE · PÓDCAST «LETRA CLARA»', src: '/audio/grammar-live/513.mp3',
            before: 'Nuria, la abogada del estudio, graba cada semana un minuto de estilo. Hoy habla de la ambigüedad. ¿Crees que la va a defender o a atacar? (Will she defend or attack ambiguity?)',
            gist: { prompt: '¿Cuál es la idea central? · What is the main idea?', options: ['La ambigüedad es un defecto o una herramienta según quién la busque y en qué texto.', 'La ambigüedad es siempre un error que hay que eliminar.', 'Los contratos deberían aprender de la publicidad y usar dobles sentidos.'], answer: 0, why: 'Nuria lo dice al principio: «Depende de quién la busque», y lo ilustra con el contrato, el anuncio y la diplomacia.', en: 'It depends on who seeks it and in what text.' },
            details: [
              { prompt: '¿Qué problema tiene «Todos los pedidos no incluyen el transporte»?', options: ['No se sabe si ninguno lo incluye o solo algunos.', 'Es demasiado larga para un contrato.', 'Es agramatical.'], answer: 0, why: '«¿Ninguno lo incluye o solo algunos?».', en: 'What is wrong with the clause?' },
              { prompt: '¿Qué aconseja sobre «solo»?', options: ['Colocarlo junto a lo que se quiere limitar.', 'Escribirlo siempre con tilde.', 'Evitarlo en cualquier texto formal.'], answer: 0, why: '«Colóquenlo junto a lo que quieren limitar».', en: 'What is her advice about “solo”?' },
              { prompt: '¿En qué se diferencian el eslogan y «tomaremos las medidas oportunas»?', options: ['El eslogan es vago y la fórmula tiene doble sentido.', 'El eslogan tiene dos lecturas buscadas; la fórmula diplomática admite muchas y compromete poco.', 'Los dos son errores que hay que reparar.'], answer: 1, why: '«No tiene dos lecturas, tiene muchas, y por eso compromete poco».', en: 'How do the slogan and the formula differ?' },
              { prompt: '¿Qué prueba propone antes de entregar un texto?', options: ['Leerlo como alguien que quiere malinterpretarlo.', 'Pedir a un juez que lo revise.', 'Leerlo en voz alta muy deprisa.'], answer: 0, why: '«Léanlo como lo leería alguien que quiere malinterpretarlo».', en: 'What test does she propose?' },
            ],
            transcript: 'Bienvenidos a Letra clara, el minuto de estilo del Estudio Tilde. Hoy, una pregunta que nos hacen mucho: ¿la ambigüedad es siempre un error? No. Depende de quién la busque. En un contrato, una frase como «[[Todos los pedidos no incluyen el transporte|orange]]» es una trampa: ¿ninguno lo incluye o solo algunos? Se arregla en segundos: «[[No todos los pedidos|teal]] incluyen el transporte». Lo mismo pasa con el posesivo: si la cooperativa y el distribuidor tienen catálogo, «[[su catálogo|orange]]» no basta; hay que [[nombrar al dueño|teal]]. Y cuidado con «solo»: colóquenlo [[junto a lo que quieren limitar|teal]], o mejor, digan cada límite por separado. En la publicidad, en cambio, el doble sentido es una herramienta. Si una cooperativa de muebles dice «[[te damos respaldo|violet]]», no queremos que el cliente elija una lectura: queremos que vea las dos y sonría. La diplomacia trabaja de otra manera: «[[tomaremos las medidas oportunas|violet]]» no tiene dos lecturas, tiene muchas, y por eso compromete poco. Mi consejo para esta semana: antes de entregar un texto, léanlo como lo leería alguien que quiere malinterpretarlo. Si encuentran una segunda lectura, pregúntense si la han puesto ustedes a propósito. Si no es así, quítenla. Nos oímos el próximo lunes.',
            reply: { teacher: 'Tú eres Ramón y llamas al estudio porque no entiendes por qué hay que cambiar el contrato y no el eslogan. Tu alumno es Nuria y te lo explica con un ejemplo de cada tipo.', self: 'Resume el pódcast en voz alta en tres frases: un ejemplo accidental con su reparación, un doble sentido buscado y el consejo final. (One accident, one pun, the advice.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Crear y defender dobles sentidos', coach: 'Explica el chiste sin matarlo. Explain the joke without killing it.',
      steps: [
        { title: 'Eslóganes, cláusulas y diplomacia · Slogans, clauses and diplomacy', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde uno o dos minutos. Si tu alumno produce una frase con una segunda lectura no buscada, tú la repites con la lectura absurda y tu alumno la repara.', self: 'Lee cada pregunta y responde en voz alta durante uno o dos minutos. Escucha tus propias frases: ¿hay alguna segunda lectura que no querías? (Listen for unintended second readings.)' } },
          { kind: 'talk', cards: [
            { q: 'Inventa un eslogan con doble sentido para un producto o servicio (una inmobiliaria, una tienda de bicicletas, una academia…) y explica el chiste. · Write your own pun slogan and explain it.', followUps: ['¿Qué lectura llega primero y cuál después?', '¿Podría alguien entenderlo mal de una forma que perjudique a la marca?', '¿Funcionaría traducido a otra lengua?'], phrases: ['[[El juego está en|violet]]…', 'Por un lado significa…, y por otro…', 'La segunda lectura aparece cuando…', 'Si lo explicara en el propio anuncio, …'], hint: 'Elige una palabra polisémica o una expresión idiomática relacionada con el producto. Explica los dos sentidos y qué palabra activa el segundo.', example: 'Para una tienda de bicicletas: «Bicis Rueda: para que tu vida vaya sobre ruedas». El juego está en «ir sobre ruedas»: por un lado, literalmente, desplazarse en bicicleta; por otro, la expresión significa que todo sale bien. Primero se entiende el sentido figurado, y el nombre de la tienda activa el literal. No lo explicaría en el anuncio: el cliente tiene que descubrirlo.' },
            { q: 'Eres Nuria: explícale a Ramón por qué la cláusula «Todos los pedidos no incluyen el transporte» es peligrosa y cómo la reparas. · Explain the risky clause to the client.', followUps: ['¿Qué podría reclamar una tienda con la lectura que no querías?', '¿Por qué no basta con «ya se entiende»?'], phrases: ['[[Admite dos lecturas|orange]]:…', 'Una tienda podría alegar que…', '[[Lo más seguro es|teal]]…', 'En un contrato, repetir…'], hint: 'Formula las dos lecturas, di quién saldría ganando con la que no querías y propón la reparación mínima.', example: 'Ramón, la cláusula admite dos lecturas: que ningún pedido incluye el transporte o que no todos lo incluyen. Si mañana una tienda hace un pedido grande y le cobras el transporte, podría alegar que el contrato dice que ninguno lo incluye, o al revés. Lo más seguro es escribir «No todos los pedidos incluyen el transporte» y añadir cuáles sí: los de más de diez muebles. Es una línea más y te ahorra un conflicto.' },
            { q: '¿Es honesta la vaguedad calculada de la diplomacia y de los comunicados de empresa («tomaremos las medidas oportunas», «estudiaremos su propuesta con el máximo interés»)? · Is calculated vagueness honest?', followUps: ['¿En qué situaciones protege a todos?', '¿Cuándo se convierte en una forma de no responder?', '¿Cómo reaccionas tú cuando la recibes?'], phrases: ['[[Depende del contexto|blue]]:…', 'Es cierto que…, pero…', 'Lo que no dice es…', 'Yo pediría que concretara…'], hint: 'Concede algo a cada lado: la vaguedad puede evitar un conflicto o esconder una falta de compromiso.', example: 'Depende del contexto. En una negociación delicada, una fórmula vaga permite no cerrar puertas y que nadie pierda la cara. Pero cuando un cliente reclama y la empresa contesta «tomaremos las medidas oportunas», lo que no dice es qué hará ni cuándo. En ese caso, yo pediría que concretara: qué medida, en qué plazo y quién responde.' },
            { q: 'Lee en voz alta «No lo invitamos porque es amigo del director» de dos maneras y explica qué cambia. · Read it aloud two ways.', followUps: ['¿Dónde haces la pausa en cada lectura?', '¿Cómo lo escribirías para que no dependiera de la voz?'], phrases: ['Con pausa después de «invitamos»…', 'Sin pausa, y con énfasis en «porque»…', 'Por escrito, [[pondría|teal]]…'], hint: 'Una lectura niega la invitación; la otra niega el motivo. Termina con la versión escrita sin ambigüedad.', example: 'Con pausa después de «invitamos», significa que no hubo invitación y que el motivo fue su amistad con el director. Sin pausa, con énfasis en «porque» y continuando con «sino porque sabe de muebles», significa que sí lo invitamos, pero por otra razón. Por escrito pondría «No lo invitamos porque sea amigo del director, sino porque sabe de muebles».' },
            { q: 'Cuenta un chiste o una anécdota que dependa de un doble sentido (puede ser el del café solo) y explica por qué tiene gracia. · Tell a joke based on a double meaning.', followUps: ['¿Qué tiene que saber el oyente para entenderlo?', '¿Por qué un chiste explicado pierde la gracia?'], phrases: ['La gracia está en que…', 'El oyente espera… y de pronto…', '[[Juega con|violet]] los dos sentidos de…'], hint: 'Cuenta el chiste primero, sin explicaciones; después analiza qué palabra activa la segunda lectura.', example: 'Un cliente pide: «Un café solo, por favor». Y el camarero le contesta: «¿Solo? Si quiere, yo le hago compañía». La gracia está en que el cliente usa «solo» como tipo de café, sin leche, y el camarero finge entender ‘sin compañía’. Juega con los dos sentidos de la misma palabra, y el oyente tiene que conocer los dos para reírse.', next: 'Ahora, el riesgo.' },
            { q: 'Bruno propone un eslogan cuya segunda lectura podría resultar ofensiva para algunos clientes. Eres Elena: ¿cómo se lo dices? · Tell a colleague his pun backfires.', followUps: ['¿Qué alternativa le propones?', '¿Cómo reconoces lo que sí funciona del eslogan?'], phrases: ['[[Me gusta la idea, pero|blue]]…', 'Hay una segunda lectura que…', '¿Y si probamos con…?'], hint: 'Reconoce el ingenio, explica la lectura problemática sin dramatizar y ofrece una alternativa.', example: 'Bruno, me gusta la idea, y el juego de palabras es bueno. Pero hay una segunda lectura que algunos clientes podrían tomarse como una burla, y no queremos que la campaña se recuerde por eso. ¿Y si probamos con otra palabra que mantenga el doble sentido sin ese riesgo? Me encantaría ver dos o tres versiones más.', teacher: 'Tú haces de Bruno y defiendes tu eslogan. Tu alumno insiste con tacto y propone una alternativa.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú dices tres frases, una con un doble sentido buscado, otra con una ambigüedad accidental y otra clara, y tu alumno las identifica y repara la accidental.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿alguna frase tuya tenía una segunda lectura que no querías? (Any unintended second readings?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La revisión para Ramón', coach: 'Repara el contrato, defiende la campaña. Fix the contract, defend the campaign.',
      steps: [
        { title: 'Informe de revisión · Revision memo', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos el texto: ¿cada reparación nombra el problema y la herramienta? ¿El doble sentido se explica sin estropearlo?', self: 'Escribe el informe y toca «Revisar mi texto». Después comprueba que cada reparación dice qué dos lecturas había y que explicas el eslogan con claridad. (Name both readings; explain the pun clearly.)' } },
          { kind: 'write', title: 'Informe para el cliente · Memo to the client', situation: 'Eres Elena Robles (o trabajas en una agencia o un departamento que revisa textos). Escribes a Ramón Ibarra, director de la Cooperativa Roble, para explicarle qué cambias en el contrato y por qué mantienes el doble sentido de la campaña. (A memo to the client: what you fix in the contract and why you keep the pun.)', task: [
            'Cita al menos dos frases ambiguas del contrato (u otras que inventes) y explica sus dos lecturas.',
            'Propón la reparación de cada una y di qué herramienta usas (orden, referente explícito, cuantificador, modo…).',
            'Sustituye una fórmula vaga por consecuencias concretas.',
            'Explica el doble sentido de un eslogan (el de Ramón u otro tuyo) y por qué en la campaña sí funciona.',
            'Cierra con un registro profesional y cordial.',
          ], starters: ['Estimado Ramón:', 'Te envío la revisión…', 'La cláusula … admitía dos lecturas:…', 'Proponemos…', 'En la campaña, en cambio,…', 'Quedamos a tu disposición…'],
            words: ['ambigüedad accidental', 'dos lecturas', 'doble sentido', 'reparar', 'referente explícito', 'alcance', 'vaguedad', 'cláusula', 'eslogan', 'a la vez'],
            model: 'Estimado Ramón: Te envío la revisión del contrato y de la campaña. En el contrato hemos encontrado tres ambigüedades accidentales que conviene reparar antes de firmar. La cláusula cuatro decía que el cliente «solo podrá reclamar por escrito en los primeros treinta días»; no quedaba claro si «solo» limitaba la forma o el plazo, así que proponemos «podrá reclamar únicamente durante los primeros treinta días y siempre por escrito». En la cláusula seis, «Todos los pedidos no incluyen el transporte» admitía dos lecturas: que ninguno lo incluye o que no todos lo incluyen. Como los pedidos grandes sí lo llevan, hemos escrito «No todos los pedidos incluyen el transporte» y hemos añadido cuáles. En la cláusula ocho, «su catálogo» podía ser el de la cooperativa o el del distribuidor; ahora nombramos al dueño. También hemos sustituido «tomaremos las medidas oportunas» por medidas concretas, la suspensión de los envíos o la resolución del contrato: en una cláusula, la vaguedad no protege a nadie. En la campaña, en cambio, el doble sentido es justo lo que buscamos. «Te damos respaldo» funciona porque el lector ve a la vez el respaldo de la silla y el apoyo de la cooperativa. Para la línea infantil proponemos «Muebles que dan mucho juego»: el juego de los niños y «dar juego», ofrecer muchas posibilidades. Quedamos a tu disposición para comentarlo. Un saludo, Elena Robles',
            minWords: 170,
            checks: [
              { label: 'Nombra el problema (ambigüedad, dos lecturas, doble sentido…)', pattern: '(?<!\\p{L})(?:ambig\\p{L}*|dos\\s+lecturas|doble\\s+(?:sentido|lectura))(?!\\p{L})', tip: 'Di qué le pasa a la frase: «admitía dos lecturas».' },
              { label: 'Cita al menos una frase entre comillas', pattern: '«[^»]{8,}»', tip: 'Cita la cláusula original entre comillas latinas: «…».' },
              { label: 'Explica el doble sentido del eslogan', pattern: '(?<!\\p{L})(?:doble\\s+sentido|dos\\s+sentidos|a\\s+la\\s+vez|juego\\s+de\\s+palabras)(?!\\p{L})', tip: 'Explica que el lector ve las dos lecturas «a la vez».' },
              { label: 'Un cierre profesional', pattern: '(?<!\\p{L})(?:un\\s+saludo|saludos|atentamente|quedo|quedamos)(?!\\p{L})', tip: 'Cierra con «Quedamos a tu disposición» o «Un saludo».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'orange', label: 'ACCIDENTAL', formula: 'complemento mal enganchado · todos… no · su · solo · comas en la relativa', example: 'Todos los pedidos no incluyen el transporte.', caption: 'Un defecto en textos que informan u obligan: hay que repararlo.', en: 'A defect in texts that inform or bind: an unintended second reading someone can legitimately choose.' },
            { tone: 'teal', label: 'REPARACIÓN', formula: 'orden · puntuación · referente explícito · este · no todos / ningún · porque + subjuntivo', example: 'No todos los pedidos incluyen el transporte.', caption: 'La herramienta mínima que deja una sola lectura.', en: 'The smallest change that leaves a single reading; repetition is acceptable in contracts.' },
            { tone: 'violet', label: 'BUSCADA', formula: 'doble sentido (humor, publicidad, literatura) · vaguedad calculada (diplomacia)', example: 'Sillas Roble: te damos respaldo.', caption: 'La segunda lectura es el mensaje: no se explica ni se repara.', en: 'The second reading is the point: in a pun both meanings must be recovered; in calculated vagueness, the speaker commits to little.' },
            { tone: 'blue', label: 'CONTEXTO', formula: 'un solo poseedor posible · una sola lectura plausible · entonación', example: 'El cliente conservará su factura.', caption: 'Si el contexto ya decide, no se toca.', en: 'If context or intonation already selects one reading, leave the sentence alone.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Ante cada frase con dos lecturas, pregunta **¿quién la ha puesto ahí?** Si eres tú y el texto busca un efecto, consérvala. Si nadie la quería y el texto informa u obliga, repárala con la herramienta mínima. Y si el contexto ya decide, **no la toques**.', en: 'For any sentence with two readings, ask who put the second reading there. If you did, and the text seeks an effect, keep it. If nobody wanted it and the text informs or binds, fix it minimally. If context already decides, leave it.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'Quieres decir que algunos empleados no firmaron. ¿Qué frase lo dice sin ambigüedad?', options: ['Todos los empleados no firmaron.', 'No todos los empleados firmaron.', 'Ningún empleado firmó.'], answer: 1, why: '«No todos» niega la totalidad; «todos… no» es ambiguo y «ningún» dice otra cosa.', en: 'Some employees did not sign.' },
            { prompt: '«No la elegimos porque fuera la más barata.» ¿Qué sabemos?', options: ['Que la elegimos, pero no por el precio.', 'Que era la más cara.', 'Que no la elegimos.'], answer: 0, why: 'Subjuntivo en la causal negada: se niega el motivo, no el hecho.', en: 'What does the subjunctive tell you?' },
            { prompt: '«Con nosotros, vas por buen camino», en el anuncio de una autoescuela, es…', options: ['un doble sentido buscado.', 'una vaguedad diplomática.', 'una ambigüedad accidental que hay que reparar.'], answer: 0, why: 'El camino literal y el figurado se activan a la vez a propósito.', en: 'A driving school’s slogan.' },
            { prompt: '«Hablaremos del acuerdo con la directora.» ¿Cómo eliminas la ambigüedad?', options: ['Con la directora, hablaremos del acuerdo.', 'Hablaremos del acuerdo, con la directora.', 'Hablaremos del acuerdo con la directora, ya.'], answer: 0, why: 'Al anteponer «con la directora», ya no puede ir con «acuerdo».', en: 'Which change leaves one reading?' },
            { prompt: '«La cooperativa informará al cliente de los cambios en su pedido.» ¿Hace falta reparar «su»?', options: ['No: solo el cliente hace pedidos.', 'Sí: hay que escribir «sus».', 'Sí: siempre hay que sustituir «su».'], answer: 0, why: 'Un solo poseedor plausible: el contexto ya decide.', en: 'Is there a real second reading?' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro texto, la misma decisión. New text, same decision.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: los avisos de una asociación de vecinos. Tu alumno reescribe cada frase y explica qué lectura ha eliminado.', self: 'Ahora, los avisos de una asociación de vecinos: reescribe cada frase según la instrucción. (A residents’ association notice board.)' } },
          { kind: 'rewrite', title: 'El tablón de anuncios · The notice board', items: [
            { prompt: 'Aviso: «Todos los vecinos no podrán usar el patio este fin de semana». (Quiere decir: nadie podrá.)', instruction: 'Empieza por «Ningún vecino».', accept: ['Ningún vecino podrá usar el patio este fin de semana'] },
            { prompt: 'Acta: «La presidenta habló con la secretaria de su propuesta». (La propuesta es de la secretaria.)', instruction: 'Repara «su» con el demostrativo «esta»: «…de la propuesta de esta».', accept: ['La presidenta habló con la secretaria de la propuesta de esta', 'La presidenta habló con la secretaria sobre la propuesta de esta'] },
            { prompt: 'Anuncio: «Se venden bicicletas para niños de aluminio».', instruction: 'Reordena para que «de aluminio» vaya con «bicicletas».', accept: ['Se venden bicicletas de aluminio para niños'] },
          ] },
        ] },
        { title: 'Ampliación · La posición del adjetivo y «sendos»', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Dos recursos nominales de C2 que **evitan** o **crean** ambigüedad. **1.** Algunos adjetivos cambian de sentido según su posición: «un **viejo** cliente» (de hace mucho tiempo) / «un cliente **viejo**» (de edad avanzada); «un **pobre** hombre» (digno de lástima) / «un hombre **pobre**» (sin dinero); «un **simple** trámite» (solo un trámite) / «un trámite **simple**» (sencillo); «**cierto** dato» (un dato) / «un dato **cierto**» (verdadero). La posición desambigua, y también permite jugar: «Ramón es un viejo cliente, pero no un cliente viejo». **2.** «Las dos tiendas recibirán un catálogo» puede significar un catálogo compartido o uno para cada tienda. En registro formal, «**sendos**» deja una sola lectura: «Las dos tiendas recibirán **sendos** catálogos» = uno cada una. No significa ‘ambos’ ni ‘grandes’.', en: 'For strong students or spare time. Some adjectives change meaning with position: “un viejo cliente” is a long-standing client, “un cliente viejo” an elderly one; position removes ambiguity and can also be played with. “Sendos” (formal) means “one each”: it resolves whether two shops share one catalogue or get one each. It does not mean “both” or “big”.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«Ramón es un viejo cliente del estudio.» ¿Qué significa?', options: ['Que ya no es cliente.', 'Que es una persona mayor.', 'Que es cliente desde hace mucho tiempo.'], answer: 2, why: 'Antepuesto, «viejo» significa ‘de hace mucho tiempo’. Pospuesto («un cliente viejo»), se refiere a la edad.', en: 'An adjective before the noun.' },
            { prompt: 'Cada una de las dos tiendas recibirá un catálogo. ¿Qué versión formal lo dice sin ambigüedad?', options: ['Las dos tiendas recibirán sendos catálogos.', 'Las dos tiendas recibirán un catálogo sendo.', 'Las dos tiendas recibirán ambos catálogos.'], answer: 0, why: '«Sendos» = uno para cada una. «Ambos catálogos» habla de dos catálogos que reciben las dos; «sendo» no existe en singular.', en: 'One catalogue for each shop.' },
            { prompt: '«Es un simple trámite» frente a «Es un trámite simple». ¿Qué diferencia hay?', options: ['La segunda es incorrecta.', 'La primera = ‘no es más que un trámite’; la segunda = ‘un trámite sencillo’.', 'Ninguna: significan lo mismo en todos los contextos.'], answer: 1, why: 'Antepuesto, «simple» quita importancia; pospuesto, describe la dificultad.', en: 'Same words, different positions.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno escribe un eslogan que juegue con la posición de un adjetivo (viejo, pobre, simple, gran) y explica las dos lecturas.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 214 · Gramaticalidad, aceptabilidad y variación real', text: 'Hoy has visto que una frase puede ser perfectamente gramatical y, aun así, defectuosa en su contexto. En la clase 214 das el paso siguiente: distinguir lo que es gramatical, lo que resulta aceptable para los hablantes y lo que varía de verdad entre regiones y registros, para juzgar un texto con criterio y no solo con reglas.', en: 'Today you saw that a sentence can be perfectly grammatical and still flawed in context. Class 214 takes the next step: telling apart what is grammatical, what speakers find acceptable, and what genuinely varies across regions and registers, so you can judge a text with discernment rather than rules alone.', href: '/gramatica/gramaticalidad-aceptabilidad-y-variacion-real', label: 'Ir a la clase 214' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué “te damos respaldo” es un acierto en el anuncio y sería un defecto en una cláusula?». Respuesta esperada: la doble lectura es la misma; cambia la intención y el tipo de texto (uno busca un efecto, el otro obliga). Tarea: el informe de Escribir con dos frases ambiguas reales.' },
        ] },
      ],
    },
  ],
};
