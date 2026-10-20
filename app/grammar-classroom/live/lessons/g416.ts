import type { LiveLesson } from '../types';

/**
 * Lesson 416 · B1 · Consecutivas: así que, por eso, de modo que (course unit G116).
 * Builds on G077 (por eso / así que / entonces at A2, cause vs result direction),
 * G099 (de modo que / de manera que + subjunctive = purpose) and G115 (causales:
 * como, ya que, puesto que, porque). Content: result connectors by register and
 * position: así que, por eso, entonces (conversation); por lo tanto / por tanto,
 * en consecuencia (formal, with their punctuation); de modo que / de manera que
 * + indicative (result) contrasted with + subjunctive (purpose, G099); «¿Así
 * que…?» at the start of a turn to draw a conclusion; transformation cause →
 * result (Como se canceló el tren, tomamos un taxi → Se canceló el tren, así que
 * tomamos un taxi). Intensity results (tan / tanto… que) are left to class 154
 * (one-line preview in the Ampliación); por consiguiente, así pues and «Así,»
 * in writing appear only in the Ampliación, receptively.
 * Scene: Rocío Medina and Julián Ferrer, from a small publishing house, travel
 * to a children's book fair in Granada; their train is cancelled. On Monday
 * Rocío tells the director, Elena Sáez (tú), what happened. In the voice message
 * Julián (Spanish voice, tú) calls Elena from the station; in Escribir the
 * learner writes Rocío's formal complaint to the rail company. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 416,
  level: 'B1',
  title: 'Consecutivas: así que, por eso, de modo que',
  subtitle: 'Contar las consecuencias de un problema con así que, por eso o entonces, y escribir una reclamación con por lo tanto.',
  legend: [
    { tone: 'orange', label: 'CONSECUENCIA EN LA CONVERSACIÓN · así que, por eso, entonces (everyday result)' },
    { tone: 'violet', label: 'CONSECUENCIA FORMAL · por lo tanto, en consecuencia, de modo que + indicativo' },
    { tone: 'teal', label: 'CAUSA · como, ya que, porque (the reason)' },
    { tone: 'blue', label: 'FINALIDAD · de modo que + subjuntivo (the aim, class 099)' },
  ],
  optionNotes: {
    'como': '«Como» presenta la causa y va al principio de la frase: «Como se canceló el tren, tomamos un taxi». No puede ir después de la causa para dar el resultado.',
    'ya que': '«Ya que» presenta la causa (since, because), no el resultado. Aquí la causa ya está dicha: falta la consecuencia.',
    'para que': '«Para que» expresa una finalidad (so that…) y va con subjuntivo. Aquí la frase cuenta un resultado real.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Y qué pasó entonces?', coach: 'Primero la causa, después el resultado. Cause first, then the result.',
      steps: [
        { title: 'Un viaje complicado · A complicated trip', blocks: [
          { kind: 'lead', text: 'Rocío Medina y Julián Ferrer trabajan en una editorial pequeña de libros infantiles. El viernes viajaban a una feria del libro en Granada, pero en la estación hubo un problema. Rocío le escribe a su directora, Elena: «Se canceló el tren, **así que** tomamos un taxi». Hoy aprendes a contar **consecuencias**: en una conversación, en un correo y en una reclamación formal.', en: 'Rocío Medina and Julián Ferrer work at a small children’s book publisher. On Friday they were travelling to a book fair in Granada, but there was a problem at the station. Rocío texts her director, Elena: “The train was cancelled, so we took a taxi.” Today you learn to express results: in a conversation, in an email and in a formal complaint.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno dice qué parte es la causa y qué parte es el resultado. Después tu alumno explica qué cambia entre las dos frases.', self: 'Lee las dos frases en voz alta. ¿Qué parte es la causa? ¿Qué parte es el resultado? (Which part is the cause, which part is the result?)' } },
          { kind: 'compare', title: 'El mismo hecho, dos caminos · Same facts, two routes', columns: [
            { tone: 'teal', label: 'CAUSA PRIMERO · como (clase 115)', sentence: '[[Como|teal]] se canceló el tren, tomamos un taxi.', idea: '«Como» marca la causa. El resultado va después, sin conector.', en: 'Since the train was cancelled, we took a taxi. (the connector marks the reason)' },
            { tone: 'orange', label: 'RESULTADO DESPUÉS · así que', sentence: 'Se canceló el tren, [[así que|orange]] tomamos un taxi.', idea: '«Así que» marca el resultado. La causa va antes, sin conector.', en: 'The train was cancelled, so we took a taxi. (the connector marks the result)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Se canceló el tren, así que tomamos un taxi», ¿qué parte presenta «así que»?', options: ['El resultado: qué hicieron después.', 'El objetivo: para qué lo hicieron.', 'La causa: por qué pasó.'], answer: 0, why: '«Así que» introduce la consecuencia: tomar un taxi es el resultado de la cancelación.', en: 'In this sentence, which part does “así que” introduce?' },
            { prompt: 'Había mucho tráfico, ___ llegamos tarde a la estación.', options: ['así que', 'como', 'porque'], answer: 0, why: 'La causa (mucho tráfico) ya está dicha; ahora viene el resultado: así que.', en: 'There was a lot of traffic, so we got to the station late.' },
          ] },
        ] },
        { title: 'Los conectores de consecuencia · Result connectors', mascot: '/brand/mascot/studying.webp', coach: '¿Hablas o escribes un texto formal? Speaking or formal writing?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'EN LA CONVERSACIÓN', question: '¿Cuentas a un amigo o a un compañero qué pasó?', en: 'Are you telling a friend or a colleague what happened?', formula: ['causa + , así que + resultado', 'causa + , por eso / . Por eso + resultado', 'causa + , entonces + resultado (sobre todo oral)'],
            meaning: '**Así que** es el conector de resultado más frecuente: une dos partes en una sola frase. **Por eso** significa «por esa causa» (eso = lo que acabas de decir) y puede empezar una frase nueva. **Entonces**, además de «then» (clase 077), en la conversación también presenta un resultado o una conclusión.',
            examples: [
              { es: 'No quedaban billetes, [[así que|orange]] fuimos en autobús.', en: 'There were no tickets left, so we went by bus.' },
              { es: 'Julián se mareaba en el autobús. [[Por eso|orange]] prefirió el tren.', en: 'Julián got sick on buses. That’s why he preferred the train.' },
              { es: 'El tren no sale hasta las cuatro, [[entonces|orange]] buscamos otra opción.', en: 'The train doesn’t leave until four, so we’re looking for another option.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'EN UN TEXTO FORMAL', question: '¿Escribes una reclamación, un informe o un correo oficial?', en: 'Are you writing a complaint, a report or an official email?', formula: ['causa + ; por lo tanto, / . Por lo tanto, + resultado (también: por tanto)', 'causa + ; en consecuencia, + resultado', 'causa + , de modo que / de manera que + INDICATIVO'],
            meaning: '**Por lo tanto** (o **por tanto**) y **en consecuencia** son típicos de la lengua escrita y del registro formal: cartas, informes, avisos. **De modo que** y **de manera que** con **indicativo** dicen el resultado; son neutros y valen en la conversación y en la escritura.',
            examples: [
              { es: 'El servicio se canceló por una avería; [[por lo tanto|violet]], solicitamos la devolución del billete.', en: 'The service was cancelled due to a breakdown; therefore, we request a refund of the ticket.' },
              { es: 'La feria cambió de horario; [[en consecuencia|violet]], las editoriales abrieron los stands más tarde.', en: 'The fair changed its opening hours; as a result, the publishers opened their stands later.' },
              { es: 'Había obras en la carretera, [[de modo que|violet]] llegamos con retraso.', en: 'There were roadworks on the road, so we arrived late.' },
            ],
            note: 'Todos estos conectores van **después** de la causa. Ninguno puede presentar la causa.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rocío escribe a la compañía de trenes: «El tren no salió; ___, solicito el reembolso».', options: ['entonces', 'por lo tanto', 'así que'], answer: 1, why: 'En una reclamación escrita, el conector formal es «por lo tanto», con punto y coma antes y coma después.', en: 'Rocío writes to the rail company: “The train didn’t leave; therefore, I request a refund.”' },
            { prompt: 'Rocío habla con Julián: «El taxi es caro, ___ lo pagamos entre los dos».', options: ['ya que', 'así que', 'en consecuencia'], answer: 1, why: 'Es una conversación entre compañeros: «así que» es natural. «En consecuencia» suena a documento oficial.', en: 'Rocío talks to Julián: “The taxi is expensive, so we’ll split it.”' },
            { prompt: '«Llegamos tarde. Por eso no vimos la inauguración». ¿Qué significa «eso»?', options: ['El tren.', 'La inauguración.', 'Que llegamos tarde.'], answer: 2, why: '«Por eso» = por esa causa: «eso» recoge lo que acabas de decir (llegamos tarde).', en: '“We arrived late. That’s why we didn’t see the opening.” What does “eso” refer to?' },
          ] },
        ] },
        { title: 'Posición, puntuación y registro · Position, punctuation and register', mascot: '/brand/mascot/standing.webp', coach: 'Coma, punto y coma, punto. Comma, semicolon, full stop.', blocks: [
          { kind: 'table', title: 'Cada conector en su sitio · Each connector in its place', head: ['Conector', 'Registro', 'Posición y puntuación', 'Ejemplo'], rows: [
            ['[[así que|orange]]', 'neutro, muy frecuente', 'después de coma; no va después de «y»', 'Llovía, **así que** nos quedamos.'],
            ['[[por eso|orange]]', 'neutro', 'después de coma, de punto o de «y»; sin coma detrás', 'Llovía. **Por eso** nos quedamos.'],
            ['[[entonces|orange]]', 'conversación', 'después de coma, o al principio de lo que dices', 'No hay tren, **entonces** vamos en taxi.'],
            ['[[por lo tanto|violet]] / [[por tanto|violet]]', 'formal, escrito', 'después de punto o punto y coma, con coma detrás; o entre comas', 'No hubo servicio; **por lo tanto**, pedimos el reembolso.'],
            ['[[en consecuencia|violet]]', 'formal (cartas, informes)', 'como «por lo tanto»', 'El tren se canceló; **en consecuencia**, perdimos la conexión.'],
            ['[[de modo que|violet]] / [[de manera que|violet]] + indicativo', 'neutro y formal', 'después de coma', 'Había obras, **de modo que** llegamos tarde.'],
          ], note: 'En medio de la frase, «por lo tanto» va entre comas: «La compañía, **por lo tanto**, debe devolver el dinero». (In the middle of the sentence, put commas on both sides.)' },
          { kind: 'tip', icon: '💬', title: '«¿Así que…?» al empezar a hablar · Starting a turn with «Así que…»', text: 'En la conversación, **así que** puede abrir tu intervención para sacar una conclusión de lo que dice la otra persona: «Al final dormimos en un hostal». — «¿**Así que** el hotel estaba lleno?». Es muy natural al hablar. En un texto formal, en cambio, mejor no empieces una oración con «Así que»: usa «Por lo tanto,» o «Por eso».', en: 'In conversation, “así que” can open your turn to draw a conclusion from what the other person has said: “So the hotel was full?” It is very natural in speech. In formal writing, though, it is better not to start a sentence with “Así que”: use “Por lo tanto,” or “Por eso”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien puntuada para un correo formal?', options: ['Hubo una avería, por lo tanto el tren, no salió.', 'Hubo una avería por lo tanto el tren no salió.', 'Hubo una avería; por lo tanto, el tren no salió.'], answer: 2, why: '«Por lo tanto» va después de punto y coma (o punto) y lleva coma detrás.', en: 'Which sentence is correctly punctuated for a formal email?' },
            { prompt: 'Elena oye: «Dormimos en un hostal». Responde: «¿___ no había habitaciones en el hotel?».', options: ['Porque', 'Así que', 'Por lo tanto'], answer: 1, why: 'Al empezar a hablar, «¿Así que…?» saca una conclusión de lo que dice la otra persona. «Por lo tanto» es formal y escrito.', en: 'Elena hears: “We slept in a hostel.” She answers: “So there were no rooms in the hotel?”' },
            { prompt: '¿Cuál de estas frases NO es correcta?', options: ['Estaba cansada y por eso me fui a casa.', 'Estaba cansada y así que me fui a casa.', 'Estaba cansada, así que me fui a casa.'], answer: 1, why: '«Por eso» puede ir después de «y»; «así que» no: ya es un conector completo.', en: 'Which of these sentences is NOT correct?' },
          ] },
        ] },
        { title: 'Resultado, causa y finalidad · Result, cause and purpose', mascot: '/brand/mascot/seated.webp', coach: '¿Resultado real u objetivo? A real result or an aim?', blocks: [
          { kind: 'compare', title: '«De modo que» tiene dos caras · Two faces of «de modo que»', columns: [
            { tone: 'violet', label: 'RESULTADO · + indicativo', sentence: 'Pusimos los carteles en la entrada, [[de modo que|violet]] todos los visitantes los vieron.', idea: 'Cuenta lo que pasó de verdad, como «así que».', en: 'We put the posters at the entrance, so all the visitors saw them. (a real result)' },
            { tone: 'blue', label: 'FINALIDAD · + subjuntivo (clase 099)', sentence: 'Pon los carteles en la entrada, [[de modo que todos los vean|blue]].', idea: 'Dice el objetivo, como «para que».', en: 'Put the posters at the entrance, so that everyone sees them. (an aim)' },
          ] },
          { kind: 'table', title: 'De la causa al resultado · From cause to result', head: ['Con causa (clase 115)', 'Con resultado (hoy)'], rows: [
            ['[[Como|teal]] llovía, no salimos.', 'Llovía, [[así que|orange]] no salimos.'],
            ['No salimos [[porque|teal]] llovía.', 'Llovía. [[Por eso|orange]] no salimos.'],
            ['[[Ya que|teal]] no hubo servicio, solicitamos el reembolso.', 'No hubo servicio; [[por lo tanto|violet]], solicitamos el reembolso.'],
          ], note: 'Al pasar de causa a resultado, **cambia el orden** y **cambia el conector**: la causa va primero y el conector va delante del resultado. (Change the order and the connector.)' },
          { kind: 'decide', title: '¿Qué conector necesitas? · Which connector do you need?', steps: [
            { q: '¿Presentas la razón, el porqué? (the reason)', yes: 'Usa **como** (al principio), **porque**, **ya que** o **puesto que** (clase 115).', no: 'next' },
            { q: '¿Presentas lo que pasó como resultado? (a real result)', yes: 'Usa **así que**, **por eso** o **entonces** al hablar; **por lo tanto** o **en consecuencia** en un texto formal; **de modo que** + indicativo en los dos.', no: 'next' },
            { q: '¿Presentas un objetivo, algo que quieres conseguir? (an aim)', yes: 'Usa **para que** o **de modo que** + **subjuntivo** (clase 099).', no: 'Vuelve a leer tu frase: ¿razón, resultado u objetivo?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El hotel estaba lejos de la feria, de modo que ___ un taxi cada mañana.', options: ['tomemos', 'tomamos', 'tomar'], answer: 1, why: 'Es un resultado real (lo que hicieron): «de modo que» + indicativo, tomamos.', en: 'The hotel was far from the fair, so we took a taxi every morning.' },
            { prompt: 'Habla más despacio, de modo que los niños te ___.', options: ['entender', 'entiendan', 'entienden'], answer: 1, why: 'Es un objetivo (una petición con imperativo): «de modo que» + subjuntivo, como «para que».', en: 'Speak more slowly, so that the children understand you.' },
            { prompt: 'Cambia la causa por un resultado: «Como no había taxis, fuimos andando» →', options: ['Fuimos andando, así que no había taxis.', 'Así que no había taxis, fuimos andando.', 'No había taxis, así que fuimos andando.'], answer: 2, why: 'Primero la causa (no había taxis), después «así que» + el resultado (fuimos andando).', en: 'Turn the cause into a result: “Since there were no taxis, we walked.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Causa o resultado? Cause or result?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿la dirección, el conector, el modo o la puntuación? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿la dirección (causa → resultado), el modo verbal o la puntuación? Toca para ver la corrección. (What goes wrong?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Tomamos un taxi, así que se canceló el tren.', right: 'Se canceló el tren, así que tomamos un taxi.', why: 'Dirección al revés: «así que» presenta el resultado, no la causa. El taxi no causó la cancelación. (Wrong direction: the result goes after «así que».)' },
            { wrong: 'Así que no había trenes, alquilamos un coche.', right: 'Como no había trenes, alquilamos un coche.', why: '«Así que» no puede ir delante de la causa como «como». Para empezar con la causa, usa «como». (Use «como» to put the cause first.)' },
            { wrong: 'Como el hotel estaba lleno, así que buscamos otro.', right: 'Como el hotel estaba lleno, buscamos otro. / El hotel estaba lleno, así que buscamos otro.', why: 'Dos conectores para una sola relación: elige uno, la causa con «como» o el resultado con «así que». (One connector, not two.)' },
            { wrong: 'El tren está cancelado, de modo que tengamos que esperar.', right: 'El tren está cancelado, de modo que tenemos que esperar.', why: 'Es un resultado real: «de modo que» + indicativo. Con subjuntivo sería un objetivo. (A real result takes the indicative.)' },
            { wrong: 'No hubo servicio por lo tanto solicitamos el reembolso.', right: 'No hubo servicio; por lo tanto, solicitamos el reembolso.', why: '«Por lo tanto» necesita puntuación: punto y coma (o punto) antes y coma después. (Punctuation around «por lo tanto».)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elige la frase correcta.', options: ['No te llamé, así que no tenía batería.', 'Como no tenía batería, así que no te llamé.', 'No tenía batería, así que no te llamé.'], answer: 2, why: 'Causa primero y «así que» + resultado, con un solo conector.', en: 'My phone had no battery, so I didn’t call you.' },
            { prompt: 'Había huelga de taxis, de manera que ___ en metro.', options: ['fuéramos', 'vayamos', 'fuimos'], answer: 2, why: 'Resultado real en el pasado: «de manera que» + indicativo, fuimos.', en: 'There was a taxi strike, so we went by metro.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta un pequeño problema de su semana con una causa y dos resultados: «Mi jefe estaba enfermo, así que la reunión se canceló. Por eso salí antes». Tú preguntas: «¿Y en un correo formal, cómo lo dices?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El lunes en la editorial', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Rocío cuenta el viaje · Rocío tells the story', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Rocío. Después tu alumno toca cada conector marcado y dice si presenta una causa, un resultado o un objetivo, y si es de conversación o formal.', self: 'Lee el diálogo en voz alta. Después toca cada conector marcado: ¿causa, resultado u objetivo? ¿Conversación o registro formal? (Cause, result or aim? Everyday or formal?)' } },
          { kind: 'explore', title: 'Lo del tren', setting: 'Lunes por la mañana, en la editorial. Elena Sáez, la directora, habla con Rocío sobre el viaje a la feria. Se tratan de tú. (Monday morning at the publishing house. Elena, the director, talks to Rocío about the trip to the fair.)', lines: [
            { who: 'Elena', text: '¡Rocío! Julián ya me contó lo del tren. [[Así que|orange]] al final llegaron a Granada en taxi, ¿no?', en: 'Rocío! Julián already told me about the train. So in the end you got to Granada by taxi, right?' },
            { who: 'Rocío', text: 'Sí. Anunciaron que no había más trenes hasta las cuatro y que, [[por lo tanto|violet]], la compañía devolvía el dinero. Pero la inauguración era a las doce, [[así que|orange]] compartimos un taxi con la gente de otra editorial.', en: 'Yes. They announced there were no more trains until four and that, therefore, the company would refund the money. But the opening was at twelve, so we shared a taxi with people from another publisher.' },
            { who: 'Elena', text: 'Muy buena idea. ¿Y llegaron a tiempo?', en: 'Very good idea. And did you get there on time?' },
            { who: 'Rocío', text: 'No del todo. Había obras en la carretera, [[de modo que|violet]] llegamos a la una y media. [[Por eso|orange]] no estuvimos en la inauguración.', en: 'Not quite. There were roadworks, so we arrived at half past one. That’s why we weren’t at the opening.' },
            { who: 'Elena', text: 'Bueno, no pasa nada. ¿Y las cajas de libros?', en: 'Well, never mind. And the boxes of books?' },
            { who: 'Rocío', text: 'No cabían en el taxi, [[entonces|orange]] Julián las mandó por mensajería. [[Como|teal]] llegaron el sábado, el viernes solo teníamos unos pocos ejemplares.', en: 'They didn’t fit in the taxi, so Julián sent them by courier. As they arrived on Saturday, on Friday we only had a few copies.' },
            { who: 'Elena', text: '[[Entonces|orange]] el viernes vendieron poco.', en: 'So on Friday you didn’t sell much.' },
            { who: 'Rocío', text: 'Muy poco. Pero el sábado pusimos carteles grandes en la entrada, [[de manera que|violet]] vino muchísima gente al stand.', en: 'Very little. But on Saturday we put big posters at the entrance, so lots of people came to the stand.' },
            { who: 'Elena', text: '¡Qué bien! Para la próxima feria mandamos las cajas dos días antes, [[de modo que lleguen|blue]] a tiempo.', en: 'Great! For the next fair we’ll send the boxes two days earlier, so that they arrive on time.' },
            { who: 'Rocío', text: 'Sí, por favor. Hoy escribo la reclamación a la compañía de trenes, [[ya que|teal]] el tren se canceló por una avería suya.', en: 'Yes, please. Today I’m writing the complaint to the rail company, since the train was cancelled because of a breakdown on their side.' },
            { who: 'Elena', text: 'Perfecto. La cancelación no fue culpa de ustedes; [[en consecuencia|violet]], deberían pagarles también el taxi. Lo digo como en una carta oficial, ¿eh?', en: 'Perfect. The cancellation wasn’t your fault; consequently, they should also pay you back for the taxi. I’m saying it like in an official letter, eh?' },
          ], notes: {
            'Así que': 'Al principio de una intervención: Elena saca una **conclusión** de lo que ya sabe (So…). Muy natural en la conversación.',
            'por lo tanto': 'Rocío repite el anuncio oficial de la estación: un registro **formal**. Va entre comas porque está en medio de la frase.',
            'así que': 'El resultado más frecuente en la conversación: causa (la inauguración era a las doce) + **así que** + lo que hicieron.',
            'de modo que': '**De modo que + indicativo** (llegamos): un resultado real. Neutro: vale al hablar y al escribir.',
            'Por eso': '«Por esa causa»: **eso** recoge lo anterior (llegaron a la una y media). Empieza una frase nueva y no lleva coma detrás.',
            'entonces': 'En la conversación, **entonces** también presenta un resultado (so). Aquí no es «then» de una secuencia.',
            'Como': '**Como** + causa, al principio (clase 115). Compara: «Llegaron el sábado, así que el viernes solo teníamos unos pocos».',
            'Entonces': 'Al principio de la intervención, Elena saca una conclusión: «Entonces…» = so, in that case. Muy oral.',
            'de manera que': 'Igual que «de modo que»: con **indicativo** (vino) cuenta un resultado real del pasado.',
            'de modo que lleguen': 'Con **subjuntivo** (lleguen), «de modo que» ya no cuenta un resultado: dice el **objetivo** (= para que lleguen, clase 099).',
            'ya que': '**Ya que** presenta la causa después del hecho principal (clase 115). No es un conector de resultado.',
            'en consecuencia': 'Muy formal: típico de cartas, informes y documentos. Elena lo usa en broma, «como en una carta oficial».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no esperaron el tren de las cuatro?', options: ['Porque la inauguración de la feria era a las doce.', 'Porque Julián se mareaba en el tren.', 'Porque el tren de las cuatro era muy caro.'], answer: 0, why: '«La inauguración era a las doce, así que compartimos un taxi».', en: 'Why didn’t they wait for the four o’clock train?' },
            { prompt: '¿Por qué no estuvieron en la inauguración?', options: ['Porque había obras en la carretera y llegaron tarde.', 'Porque el taxi se averió.', 'Porque las cajas no llegaron.'], answer: 0, why: '«Había obras en la carretera, de modo que llegamos a la una y media. Por eso no estuvimos en la inauguración».', en: 'Why weren’t they at the opening?' },
            { prompt: '¿Qué van a cambiar para la próxima feria?', options: ['Van a mandar las cajas dos días antes.', 'Van a viajar en coche.', 'Van a poner los carteles antes.'], answer: 0, why: '«Mandamos las cajas dos días antes, de modo que lleguen a tiempo»: un objetivo, con subjuntivo.', en: 'What are they going to change for the next fair?' },
          ] },
        ] },
        { title: '¿Conversación o texto formal? · Everyday or formal?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases sobre el viaje · Sentences about the trip', categories: [
            { id: 'oral', label: 'CONVERSACIÓN · así que, por eso, entonces', tone: 'orange' },
            { id: 'formal', label: 'TEXTO FORMAL O CUIDADO · por lo tanto, en consecuencia', tone: 'violet' },
          ], items: [
            { text: 'No cabían en el taxi, entonces las mandamos por mensajería.', answer: 'oral', why: '«Entonces» como conector de resultado es típico de la lengua hablada.' },
            { text: 'El servicio fue cancelado; en consecuencia, la compañía devolverá el importe.', answer: 'formal', why: '«En consecuencia» y «el importe»: lenguaje de documento oficial.' },
            { text: '¿Así que al final dormiste en un hostal?', answer: 'oral', why: '«¿Así que…?» al principio de la intervención saca una conclusión: muy conversacional.' },
            { text: 'Las cajas llegaron el sábado; por lo tanto, el viernes las ventas fueron bajas.', answer: 'formal', why: '«Por lo tanto» con punto y coma y coma: registro escrito y formal, como un informe.' },
            { text: 'Llegamos tarde, así que nos perdimos la inauguración.', answer: 'oral', why: '«Así que» es el conector de resultado más frecuente al hablar con alguien.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno toma una frase de la columna de conversación y la dice como en un informe para la dirección: «Llegamos tarde; por lo tanto, no estuvimos en la inauguración».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Causa, conector, resultado. Cause, connector, result.',
      steps: [
        { title: 'El conector adecuado · The right connector', blocks: [
          { kind: 'choice', items: [
            { context: 'Rocío escribe la reclamación. (Rocío writes the complaint.)', prompt: 'Nadie nos ofreció otro transporte; ___, tuvimos que pagar un taxi.', options: ['para que', 'por lo tanto', 'ya que'], answer: 1, why: 'Después de la causa, en un texto formal y con punto y coma: «por lo tanto,».', en: 'Nobody offered us other transport; therefore, we had to pay for a taxi.' },
            { context: 'En el stand, el viernes. (At the stand, on Friday.)', prompt: 'No teníamos las cajas, ___ pusimos en la mesa los pocos ejemplares que llevábamos.', options: ['así que', 'ya que', 'como'], answer: 0, why: 'La causa ya está dicha (no teníamos las cajas); falta el resultado: así que.', en: 'We didn’t have the boxes, so we put the few copies we had on the table.' },
            { context: 'Elena da instrucciones para la próxima feria. (Elena gives instructions for the next fair.)', prompt: 'Pon los libros nuevos delante, de modo que la gente los ___ primero.', options: ['ve', 'vea', 'vio'], answer: 1, why: 'Es una instrucción con un objetivo: «de modo que» + subjuntivo (= para que la gente los vea).', en: 'Put the new books at the front, so that people see them first.' },
            { context: 'Rocío cuenta el sábado. (Rocío talks about Saturday.)', prompt: 'Pusimos los libros nuevos delante, de modo que la gente los ___ primero.', options: ['viera', 'vea', 'vio'], answer: 2, why: 'Ahora es lo que pasó de verdad: resultado real, «de modo que» + indicativo, vio.', en: 'We put the new books at the front, so people saw them first.' },
            { context: 'Julián le cuenta a Elena: «El sábado vendimos todos los libros nuevos». (Julián tells Elena they sold all the new books on Saturday.)', prompt: 'Elena: «¿___ el domingo no tenían nada nuevo en el stand?»', options: ['Así que', 'Ya que', 'Por lo tanto'], answer: 0, why: 'Al empezar a hablar, «¿Así que…?» saca una conclusión de lo que acabas de oír. «Por lo tanto» no es de conversación.', en: 'Elena: “So on Sunday you had nothing new at the stand?”' },
          ] },
        ] },
        { title: '¿Causa, resultado u objetivo? · Cause, result or aim?', blocks: [
          { kind: 'classify', title: '¿Qué presenta la parte marcada? · What does the connector introduce?', categories: [
            { id: 'causa', label: 'CAUSA · la razón', tone: 'teal' },
            { id: 'resultado', label: 'RESULTADO · lo que pasó', tone: 'orange' },
            { id: 'objetivo', label: 'OBJETIVO · lo que se quiere conseguir', tone: 'blue' },
          ], items: [
            { text: 'Ya que estás en Granada, visita la Alhambra.', answer: 'causa', why: '«Ya que» presenta la causa o el motivo (since you’re in Granada).' },
            { text: 'Había mucha gente, de manera que esperamos media hora.', answer: 'resultado', why: '«De manera que» + indicativo (esperamos): un resultado real.' },
            { text: 'Habla con el organizador, de manera que nos dé una mesa más grande.', answer: 'objetivo', why: '«De manera que» + subjuntivo (dé): el objetivo, como «para que».' },
            { text: 'El hostal estaba al lado de la estación. Por eso lo elegimos.', answer: 'resultado', why: '«Por eso» presenta lo que hicieron por esa causa.' },
            { text: 'Como la feria cerraba a las ocho, cenamos tarde.', answer: 'causa', why: '«Como» al principio presenta la causa; el resultado va sin conector.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Compramos agua, así que hacía mucho calor en el stand.', ok: false, options: ['Hacía mucho calor en el stand, así que compramos agua.', 'Compramos agua, por eso hacía mucho calor en el stand.', 'Así que hacía mucho calor en el stand, compramos agua.'], answer: 0, why: 'El calor es la causa y comprar agua es el resultado: causa + «así que» + resultado.' },
            { sentence: 'No quedaban billetes de tren, de modo que viajamos en autobús.', ok: true, why: 'Correcta: resultado real con «de modo que» + indicativo (viajamos).' },
            { sentence: 'Julián estaba enfermo, de modo que se quede en el hotel.', ok: false, options: ['Julián estaba enfermo, de modo que se queda en el hotel.', 'Julián estaba enfermo, de modo que se quedó en el hotel.', 'Julián estaba enfermo, para que se quedó en el hotel.'], answer: 1, why: 'Es lo que pasó: resultado real en pasado, indicativo «se quedó». El subjuntivo daría un objetivo.' },
            { sentence: 'Como el hotel no tenía nuestra reserva, así que fuimos a un hostal.', ok: false, options: ['Como el hotel no tenía nuestra reserva, por eso fuimos a un hostal.', 'El hotel no tenía nuestra reserva, como fuimos a un hostal.', 'Como el hotel no tenía nuestra reserva, fuimos a un hostal.'], answer: 2, why: 'Con «como» la causa ya está marcada: el resultado va sin conector.' },
            { sentence: 'La feria cerró antes de la hora y por eso no vendimos todos los libros.', ok: true, why: 'Correcta: «por eso» puede ir después de «y».' },
            { sentence: 'Había huelga de autobuses y así que fuimos andando.', ok: false, options: ['Había huelga de autobuses y entonces que fuimos andando.', 'Había huelga de autobuses, así que fuimos andando.', 'Había huelga de autobuses y así fuimos que andando.'], answer: 1, why: '«Así que» no va después de «y»: coma + «así que».' },
          ] },
        ] },
        { title: 'Al teléfono con el hotel · On the phone to the hotel', blocks: [
          { kind: 'chat-fill', title: 'Rocío llama al hotel desde el taxi · Rocío calls the hotel from the taxi', lines: [
            { who: 'Rocío', text: 'Buenas tardes. Tenemos una reserva para esta noche, pero nos cancelaron el tren, ___ vamos a llegar tarde.', options: ['para que', 'así que', 'porque'], answer: 1, why: 'La cancelación es la causa; llegar tarde, el resultado: así que.' },
            { who: 'Recepcionista', text: 'No se preocupe. La recepción está abierta toda la noche, ___ pueden llegar a cualquier hora.', options: ['como', 'ya que', 'de modo que'], answer: 2, why: 'Resultado: la recepción está abierta y, como consecuencia, pueden llegar cuando quieran. «De modo que» + indicativo (pueden).' },
            { who: 'Rocío', text: 'Perfecto. ¿Y a qué hora es el desayuno?' },
            { who: 'Recepcionista', text: 'De siete a diez. Mañana el hotel está lleno por la feria, ___ le recomiendo bajar temprano.', options: ['por eso', 'porque', 'como'], answer: 0, why: 'Hotel lleno (causa) → bajar temprano (resultado): por eso.' },
            { who: 'Rocío', text: 'Muy bien. ¿Tenemos que pagar algo más por llegar tarde?' },
            { who: 'Recepcionista', text: 'No, señora. Su reserva incluye la noche completa; ___, no hay ningún cargo extra.', options: ['ya que', 'para que', 'en consecuencia'], answer: 2, why: 'La recepcionista habla en registro formal: punto y coma + «en consecuencia,» + el resultado.' },
            { who: 'Rocío', text: 'Genial, ___ nos vemos esta noche. ¡Muchas gracias!', options: ['entonces', 'como', 'porque'], answer: 0, why: 'Rocío cierra la llamada con una conclusión oral: «entonces» (so, in that case).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'quedaban', 'habitaciones,', 'así', 'que', 'dormimos', 'en', 'un', 'hostal.'], accept: ['No quedaban habitaciones, así que dormimos en un hostal.'], en: 'There were no rooms left, so we slept in a hostel.' },
            { tiles: ['Llegamos', 'tarde.', 'Por', 'eso', 'el', 'stand', 'abrió', 'a', 'las', 'cuatro.'], accept: ['Llegamos tarde. Por eso el stand abrió a las cuatro.'], en: 'We arrived late. That’s why the stand opened at four.' },
            { tiles: ['El', 'servicio', 'se', 'canceló;', 'por', 'lo', 'tanto,', 'solicitamos', 'el', 'reembolso.'], accept: ['El servicio se canceló; por lo tanto, solicitamos el reembolso.'], en: 'The service was cancelled; therefore, we request a refund.' },
            { tiles: ['Pusimos', 'carteles', 'en', 'la', 'entrada,', 'de', 'modo', 'que', 'mucha', 'gente', 'vino', 'al', 'stand.'], accept: ['Pusimos carteles en la entrada, de modo que mucha gente vino al stand.'], en: 'We put posters at the entrance, so a lot of people came to the stand.' },
          ] },
        ] },
        { title: 'De la causa al resultado · From cause to result', blocks: [
          { kind: 'rewrite', title: 'Transforma las frases · Transform the sentences', items: [
            { prompt: 'Como el tren no salía, buscamos un taxi.', instruction: 'Empieza con «El tren» y usa «así que».', accept: ['El tren no salía, así que buscamos un taxi'] },
            { prompt: 'Llegamos tarde porque había mucho tráfico.', instruction: 'Empieza con «Había» y usa «por eso».', accept: ['Había mucho tráfico, por eso llegamos tarde', 'Había mucho tráfico y por eso llegamos tarde'] },
            { prompt: 'Ya que el hotel estaba lleno, dormimos en un hostal.', instruction: 'Empieza con «El hotel» y usa «de modo que».', accept: ['El hotel estaba lleno, de modo que dormimos en un hostal'] },
            { prompt: 'El tren se canceló, así que queremos la devolución del dinero.', instruction: 'Escríbelo para una reclamación: cambia «así que» por «por lo tanto» y «queremos» por «solicitamos».', accept: ['El tren se canceló; por lo tanto, solicitamos la devolución del dinero', 'El tren se canceló. Por lo tanto, solicitamos la devolución del dinero'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un viaje con problemas en cuatro frases: una causa con «como», dos resultados con «así que» y «por eso», y una frase final formal con «por lo tanto».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Julián llama desde la estación', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un mensaje de voz para Elena · A voice message for Elena', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye un conector de resultado (así que, por eso, entonces…). Después, las preguntas. Julián habla con acento de España.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta los conectores de resultado que oyes. Julián habla con acento de España. (Listen once for the gist, once for the details, and count the result connectors.)' } },
          { kind: 'listen', title: 'Julián llama desde la estación', channel: 'MENSAJE DE VOZ · DE JULIÁN PARA ELENA', src: '/audio/grammar-live/416.mp3',
            before: 'Es viernes por la mañana. Julián está en la estación y no puede hablar con Elena, así que le deja un mensaje de voz. ¿Qué crees que cuenta: qué pasó, qué van a hacer, qué necesita…? (Julián leaves Elena a voice message from the station. What do you think he says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Julián explica un problema con el tren y qué van a hacer por eso.', 'Julián se queja del precio de los billetes.', 'Julián cancela el viaje y vuelve a la oficina.'], answer: 0, why: 'Cuenta que cancelaron el tren y explica las decisiones: el taxi, las cajas, el aviso a la feria.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Por qué no esperan el tren siguiente?', options: ['Porque sale a las cuatro y la feria se inaugura a las doce.', 'Porque es más caro que un taxi.', 'Porque también está cancelado.'], answer: 0, why: '«El siguiente sale a las cuatro… la inauguración de la feria es a las doce, así que no podemos esperar».', en: 'Why don’t they wait for the next train?' },
              { prompt: '¿Con quién van a compartir el taxi?', options: ['Con la gente de otra editorial.', 'Con unos viajeros de Granada.', 'Con Elena.'], answer: 0, why: '«Hay otra editorial aquí con el mismo problema, de modo que vamos a compartir un taxi con ellos».', en: 'Who are they going to share the taxi with?' },
              { prompt: '¿Qué pasa con las cajas de libros?', options: ['Van por mensajería y llegan mañana.', 'Se quedan en la estación.', 'Las lleva Rocío en el taxi.'], answer: 0, why: '«No caben en el maletero, por eso las mando hoy por mensajería y llegan mañana».', en: 'What happens to the boxes of books?' },
              { prompt: '¿Qué le pide Julián a Elena?', options: ['Que avise a la organización de la feria.', 'Que pague el taxi.', 'Que compre otros billetes.'], answer: 0, why: '«¿Puedes avisar a la organización de que llegamos tarde?».', en: 'What does Julián ask Elena to do?' },
            ],
            transcript: 'Hola, Elena, soy Julián. Te llamo desde la estación porque tenemos un problema: han cancelado nuestro tren por una avería. Acaban de decir por megafonía que el siguiente sale a las cuatro y que, [[por lo tanto|violet]], nos devuelven el dinero de los billetes. Pero la inauguración de la feria es a las doce, [[así que|orange]] no podemos esperar. Hay otra editorial aquí con el mismo problema, [[de modo que|violet]] vamos a compartir un taxi con ellos. Es más caro que el tren, pero entre cuatro no es tanto. Las cajas de libros no caben en el maletero, [[por eso|orange]] las mando hoy por mensajería y llegan mañana. [[Entonces|orange]], hoy vamos a tener solo unos pocos ejemplares en el stand. ¿Puedes avisar a la organización de que llegamos tarde? Ah, y guardo la factura del taxi, [[así que|orange]] luego hacemos la reclamación. Un abrazo.',
            reply: { teacher: 'Tú eres Julián. Tu alumno es Elena y responde al mensaje con tres frases: una conclusión con «Así que…», un resultado con «por eso» o «entonces» y una idea para la reclamación.', self: 'Responde a Julián en voz alta como Elena: saca una conclusión con «Así que…», di qué vas a hacer tú con «por eso» o «entonces» y da una idea para la reclamación. (Answer as Elena with a conclusion and a result.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Un viaje con problemas', coach: '¿Y qué pasó por eso? And what happened as a result?',
      steps: [
        { title: 'Causas y consecuencias · Causes and results', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas como Elena o como un amigo. Tu alumno cuenta un viaje o un día con problemas, real o inventado. Tú repites su frase con el conector correcto y sigues con la repregunta.', self: 'Piensa en un viaje o un día con problemas, real o inventado. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Think of a trip or day that went wrong and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Alguna vez se canceló o se retrasó tu tren, tu vuelo o tu autobús? ¿Qué pasó? · Was your train, flight or bus ever cancelled or delayed? What happened?', followUps: ['¿Dónde estabas? ¿Adónde ibas? (Where were you? Where were you going?)', '¿Qué hiciste entonces? (What did you do then?)'], phrases: ['Mi vuelo se retrasó tres horas, [[así que|orange]]…', 'No había más trenes ese día. [[Por eso|orange]]…', '[[Como|teal]] no tenía batería, …'], hint: 'Primero la causa, después el resultado con «así que» o «por eso». O la causa al principio con «como».', example: 'El año pasado mi vuelo a Lima se retrasó cinco horas, así que dormí un poco en el aeropuerto. No había restaurantes abiertos. Por eso cené unas galletas.', next: 'Ahora, las consecuencias.', teacher: 'Cuenta tú también un problema de viaje corto con «así que» y «por eso»: tu alumno oye los dos conectores en una historia real.' },
            { q: '¿Qué consecuencias tuvo ese problema? Di tres. · What were the consequences of that problem? Give three.', followUps: ['¿Perdiste algo importante? (Did you miss something important?)', '¿Gastaste más dinero? (Did you spend more money?)'], phrases: ['Llegué tarde, [[de modo que|violet]] no pude…', '[[Por eso|orange]] perdí…', '…, [[así que|orange]] tuve que pagar…'], hint: 'Una causa puede tener varias consecuencias: varía los conectores (así que, por eso, de modo que + indicativo).', example: 'Llegué a la boda tarde, de modo que no vi la ceremonia. Además perdí la conexión, así que tuve que pagar otro billete. Por eso ese viaje me costó el doble.', next: 'Ahora, reacciona.' },
            { q: 'Tu compañero te cuenta: «Perdí el último autobús y mi móvil no tenía batería». Reacciona y saca una conclusión. · Your partner tells you about missing the last bus. React and draw a conclusion.', followUps: ['¿Y qué le preguntas después? (What do you ask next?)', '¿Qué le aconsejas? (What do you advise?)'], phrases: ['¿[[Así que|orange]] volviste a casa andando?', '[[Entonces|orange]], ¿cómo volviste?', '¿[[Así que|orange]] no pudiste llamar a nadie?'], hint: 'Al empezar a hablar, «¿Así que…?» o «Entonces…» sacan una conclusión de lo que acabas de oír.', example: '¿Así que volviste a casa andando? ¡Qué horror! Entonces llegaste muy tarde, ¿no?', next: 'Ahora, de la causa al resultado.', teacher: 'Tú cuentas tres frases de un problema («Ayer se rompió la lavadora…») y tu alumno reacciona cada vez con «¿Así que…?» o «Entonces…».' },
            { q: 'Cuenta la última vez que llegaste tarde a algo: primero con «como», después con «así que». · Tell the last time you were late: first with «como», then with «así que».', followUps: ['¿Qué versión es más natural para ti? (Which version feels more natural?)', '¿Y con «por eso»? (And with «por eso»?)'], phrases: ['[[Como|teal]] había mucho tráfico, llegué…', 'Había mucho tráfico, [[así que|orange]] llegué…', 'Había mucho tráfico. [[Por eso|orange]] llegué…'], hint: 'Con «como» la causa va primero y el resultado sin conector. Con «así que» o «por eso», el conector va delante del resultado.', example: 'Como el metro estaba parado, llegué tarde a clase. → El metro estaba parado, así que llegué tarde a clase. → El metro estaba parado. Por eso llegué tarde a clase.', next: 'Ahora, en registro formal.' },
            { q: 'Ahora eres Rocío en la reunión con la dirección. Informa en registro formal de qué pasó y qué decisiones tomaron. · Now you are Rocío reporting formally to management.', followUps: ['¿Qué le pedimos a la compañía de trenes? (What do we ask the rail company for?)', '¿Qué cambiamos para la próxima feria? (What do we change for the next fair?)'], phrases: ['El tren se canceló; [[por lo tanto|violet]], …', 'Las cajas llegaron el sábado; [[en consecuencia|violet]], …', 'Mandaremos las cajas antes, [[de modo que lleguen|blue]] a tiempo.'], hint: 'Registro formal: «por lo tanto» y «en consecuencia». Para el objetivo, «de modo que» + subjuntivo.', example: 'El viernes el tren se canceló por una avería; por lo tanto, viajamos en taxi. Las cajas llegaron el sábado; en consecuencia, el primer día vendimos poco. Para la próxima feria mandaremos las cajas antes, de modo que lleguen a tiempo.', teacher: 'Tú eres Elena y reaccionas en registro informal: «¿Así que el viernes no vendieron casi nada?». Tu alumno ve el contraste de registro.' },
            { q: 'Piensa en un cambio en tu vida (de casa, de trabajo, de ciudad). ¿Qué consecuencias tuvo? · Think of a change in your life. What were its consequences?', followUps: ['¿Fue una consecuencia buena o mala? (Was it a good or a bad result?)', '¿Qué hiciste por eso? (What did you do as a result?)'], phrases: ['Me cambié de casa, [[así que|orange]] ahora…', 'Mi nuevo trabajo está lejos. [[Por eso|orange]]…', '…, [[de manera que|violet]] ahora tengo más tiempo.'], hint: 'Une el cambio y sus resultados. Si hablas de un plan con objetivo, recuerda: «de modo que» + subjuntivo.', example: 'El año pasado me cambié a un piso cerca del trabajo, así que ahora voy andando. Por eso tengo más tiempo por la mañana, de manera que desayuno tranquila.', teacher: 'Pregunta también: «¿Y qué haces ahora para que tu día sea más fácil?». Si tu alumno usa «de modo que», tú le recuerdas que el objetivo va con subjuntivo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y reacciona con «¿Así que…?» o «Entonces…», y tú cuentas un viaje con problemas.', self: 'Ahora haz tú las preguntas en voz alta y responde con un viaje inventado. Reacciona a tus propias frases con «¿Así que…?». (Now ask the questions and react with «¿Así que…?».)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La reclamación', coach: 'Causa, resultado, petición. Cause, result, request.',
      steps: [
        { title: 'Una reclamación a la compañía de trenes · A complaint to the rail company', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector: ¿presenta una causa o un resultado? ¿Es formal? ¿Tiene la puntuación correcta? Después, tu alumno lee su reclamación en voz alta.', self: 'Escribe tu reclamación y toca «Revisar mi texto». Después mira cada conector: ¿causa o resultado? ¿Formal? ¿Bien puntuado? (Write your complaint and check every connector.)' } },
          { kind: 'write', title: 'Una reclamación formal · A formal complaint', situation: 'Eres Rocío (o eres tú, con otro viaje que salió mal). Escribe a la compañía de transporte para presentar una reclamación: cuenta qué pasó, qué consecuencias tuvo y qué pides. (You are Rocío, or yourself after another trip that went wrong. Write to the transport company to make a complaint: what happened, what the consequences were, and what you are asking for.)', task: [
            'Saluda en registro formal y di por qué escribes. (Formal greeting and the reason for writing.)',
            'Cuenta el problema y su causa: fecha, trayecto, qué pasó. (Tell the problem and its cause.)',
            'Explica dos consecuencias con conectores formales: «por lo tanto», «en consecuencia» o «de modo que» + indicativo. (Two results with formal connectors.)',
            'Pide una solución concreta y justifícala con «ya que» o «puesto que». (Ask for a concrete solution and justify it.)',
            'Despídete en registro formal. (Formal closing.)',
          ], starters: ['Estimados señores:', 'Les escribo para presentar una reclamación por…', 'El servicio se canceló por…', '…; por lo tanto, …', '…; en consecuencia, …', '…, de modo que…', 'Ya que…, les solicito…', 'Atentamente,'],
            words: ['por lo tanto', 'por tanto', 'en consecuencia', 'de modo que', 'de manera que', 'ya que', 'puesto que', 'la cancelación', 'el retraso', 'la avería', 'el reembolso', 'la devolución', 'la factura', 'solicitar'],
            model: 'Estimados señores: Les escribo para presentar una reclamación. El viernes 14 de octubre teníamos dos billetes para el tren de las 9:15 a Granada, pero el servicio se canceló por una avería. El siguiente tren salía a las cuatro y nosotros teníamos que estar en la feria del libro a las doce; [[por lo tanto|violet]], mi compañero y yo tomamos un taxi, que nos costó 180 euros. Además, había obras en la carretera, [[de modo que|violet]] llegamos con una hora y media de retraso y no pudimos estar en la inauguración. [[Ya que|teal]] la cancelación no fue responsabilidad nuestra, les solicito la devolución de los billetes y del taxi. Adjunto los billetes y la factura. Quedo a la espera de su respuesta. Atentamente, Rocío Medina',
            minWords: 80,
            checks: [
              { label: 'Un conector formal de resultado: por lo tanto, en consecuencia, de modo que… (a formal result connector)', pattern: '(?<!\\p{L})(?:por\\s+lo\\s+tanto|por\\s+tanto|en\\s+consecuencia|de\\s+(?:modo|manera)\\s+que)(?!\\p{L})', tip: 'Presenta una consecuencia en registro formal: «…; por lo tanto, tomamos un taxi».' },
              { label: 'Una causa: ya que, puesto que, como, porque… (a cause connector)', pattern: '(?<!\\p{L})(?:ya\\s+que|puesto\\s+que|debido\\s+a|como|porque)(?!\\p{L})', tip: 'Justifica tu petición: «Ya que la cancelación no fue responsabilidad nuestra, les solicito…».' },
              { label: 'Saludo o despedida formal (formal greeting or closing)', pattern: '(?<!\\p{L})(?:estimad[oa]s?|atentamente|cordialmente)(?!\\p{L})', tip: 'Empieza con «Estimados señores:» y termina con «Atentamente,».' },
            ],
            warnings: [
              { pattern: '(?:^|[.!?:;]\\s*)así\\s+que(?!\\p{L})', why: 'En una reclamación, mejor no empieces la oración con «Así que». Usa **«Por lo tanto,»** o pon «así que» después de la causa, en la misma frase.' },
              { pattern: '(?<!\\p{L})como\\s[^.;:]{3,80},\\s*(?:así\\s+que|por\\s+eso|por\\s+lo\\s+tanto|entonces)(?!\\p{L})', why: 'Si empiezas con **«como»** (causa), el resultado va sin conector: «Como el tren se canceló, tomamos un taxi».' },
              { pattern: '(?<!\\p{L})(?:por\\s+lo\\s+tanto|en\\s+consecuencia)\\s+(?!,)\\p{L}', why: 'Revisa la puntuación: **«por lo tanto»** y **«en consecuencia»** llevan coma detrás («…; por lo tanto, tomamos…»).' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'orange', label: 'RESULTADO · CONVERSACIÓN', formula: 'causa, así que / por eso / entonces + resultado', example: 'Se canceló el tren, así que tomamos un taxi.', caption: 'lo más frecuente al hablar; «¿Así que…?» saca conclusiones', en: 'the most common in speech; «¿Así que…?» draws a conclusion' },
            { tone: 'violet', label: 'RESULTADO · FORMAL', formula: 'causa; por lo tanto, / en consecuencia, + resultado', example: 'No hubo servicio; por lo tanto, solicitamos el reembolso.', caption: 'cartas, informes, reclamaciones; con punto y coma y coma', en: 'letters, reports, complaints; with a semicolon and a comma' },
            { tone: 'violet', label: 'DE MODO QUE + INDICATIVO', formula: 'causa, de modo que / de manera que + indicativo', example: 'Había obras, de modo que llegamos tarde.', caption: 'un resultado real', en: 'a real result' },
            { tone: 'blue', label: 'DE MODO QUE + SUBJUNTIVO', formula: 'acción, de modo que + subjuntivo (= para que)', example: 'Manda las cajas antes, de modo que lleguen a tiempo.', caption: 'un objetivo, no un resultado (clase 099)', en: 'an aim, not a result (class 099)' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Todos los conectores de hoy van **después de la causa** y presentan el **resultado**. Para empezar con la causa, usa «como» (y nada delante del resultado). Elige el registro: «así que», «por eso», «entonces» al hablar; «por lo tanto», «en consecuencia» al escribir un texto formal. Y mira el verbo después de «de modo que»: indicativo = resultado; subjuntivo = objetivo.', en: 'All of today’s connectors come after the cause and introduce the result. To start with the cause, use “como” (and nothing before the result). Choose the register: “así que”, “por eso”, “entonces” in speech; “por lo tanto”, “en consecuencia” in formal writing. And check the verb after “de modo que”: indicative = result; subjunctive = aim.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mi vuelo salía a las seis de la mañana, ___ dormí en un hotel del aeropuerto.', options: ['así que', 'para que', 'porque'], answer: 0, why: 'Causa (vuelo muy temprano) → resultado (dormí en el aeropuerto): así que.', en: 'My flight left at six in the morning, so I slept at an airport hotel.' },
            { prompt: 'Habla más alto, de modo que te ___ los de atrás.', options: ['oír', 'oigan', 'oyen'], answer: 1, why: 'Petición con un objetivo: «de modo que» + subjuntivo, oigan.', en: 'Speak louder, so that the people at the back can hear you.' },
            { prompt: 'El museo estaba cerrado por obras; ___, el guía cambió la visita al lunes.', options: ['por lo tanto', 'ya que', 'como'], answer: 0, why: 'Después de la causa, con punto y coma y coma: «por lo tanto,».', en: 'The museum was closed for works; therefore, the guide moved the visit to Monday.' },
            { prompt: 'Perdí las llaves. ___ esperé a mi compañera de piso en un bar.', options: ['Por eso', 'Como', 'Ya que'], answer: 0, why: '«Por eso» puede empezar una frase nueva y presenta el resultado de perder las llaves.', en: 'I lost my keys. That’s why I waited for my flatmate in a bar.' },
            { prompt: 'Elige la frase correcta.', options: ['Como había huelga de metro, así que fui en bici.', 'Había huelga de metro, así que fui en bici.', 'Fui en bici, así que había huelga de metro.'], answer: 1, why: 'Causa primero, un solo conector y «así que» delante del resultado.', en: 'There was a metro strike, so I went by bike.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el viaje de Elena.', blocks: [
          { kind: 'lead', text: 'Un mes después, Elena viaja en avión a un congreso de editoriales. Tampoco tiene suerte. Transforma las frases: de la causa al resultado, y del registro oral al formal.', en: 'A month later, Elena flies to a publishers’ conference. She is not lucky either. Transform the sentences: from cause to result, and from everyday to formal register.' },
          { kind: 'rewrite', title: 'El viaje de Elena · Elena’s trip', items: [
            { prompt: 'Como el vuelo salía con retraso, Elena cenó en el aeropuerto.', instruction: 'Empieza con «El vuelo» y usa «así que».', accept: ['El vuelo salía con retraso, así que Elena cenó en el aeropuerto'] },
            { prompt: 'Elena perdió la conexión porque el primer vuelo llegó tarde.', instruction: 'Empieza con «El primer vuelo» y usa «por eso».', accept: ['El primer vuelo llegó tarde, por eso Elena perdió la conexión', 'El primer vuelo llegó tarde y por eso Elena perdió la conexión', 'El primer vuelo llegó tarde, por eso perdió Elena la conexión'] },
            { prompt: 'La aerolínea no avisó del cambio, así que pedimos una compensación.', instruction: 'Pásalo a registro formal: cambia «así que» por «en consecuencia» y «pedimos» por «solicitamos».', accept: ['La aerolínea no avisó del cambio; en consecuencia, solicitamos una compensación', 'La aerolínea no avisó del cambio. En consecuencia, solicitamos una compensación'] },
          ] },
        ] },
        { title: 'Ampliación · Más conectores formales (opcional)', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'lead', text: 'En textos escritos y formales vas a leer otros conectores de resultado. Hoy solo tienes que **reconocerlos**: **por consiguiente** (= por lo tanto, muy formal), **así pues** (para sacar una conclusión al final de un razonamiento) y **Así,** al principio de una oración (= de esta manera, como resultado): «La feria duplicó sus visitantes. **Así**, muchas editoriales pequeñas vendieron más». Y un avance: cuando el resultado depende de una **intensidad** («Había **tanta** gente **que** no se podía pasar»), se usa «tan / tanto… que»: lo estudias en la clase 154.', en: 'In formal writing you will read other result connectors. Today you only need to recognise them: “por consiguiente” (= therefore, very formal), “así pues” (to draw a conclusion at the end of an argument) and “Así,” at the start of a sentence (= in this way, as a result). And a preview: when the result depends on an intensity (“There were so many people that you couldn’t get through”), Spanish uses “tan / tanto… que”: you study it in class 154.' },
          { kind: 'choice', title: 'Reconoce el registro · Recognise the register', items: [
            { prompt: '«La demanda aumentó; por consiguiente, la editorial imprimió más ejemplares». ¿Qué conector significa lo mismo que «por consiguiente»?', options: ['a fin de que', 'por lo tanto', 'puesto que'], answer: 1, why: '«Por consiguiente» = «por lo tanto»: presenta el resultado en registro muy formal.', en: '“Demand rose; consequently, the publisher printed more copies.” Which connector means the same?' },
            { prompt: '¿En qué texto es más natural «así pues»?', options: ['En una conversación rápida en el bar.', 'En un mensaje de voz a un amigo.', 'En la conclusión de un informe o de un artículo.'], answer: 2, why: '«Así pues» es escrito y formal: cierra un razonamiento («Así pues, la feria fue un éxito»).', en: 'In which text is “así pues” most natural?' },
            { prompt: '«Había tanta gente en la feria que no podíamos pasar». ¿Qué presenta la parte con «que»?', options: ['La causa.', 'Un objetivo.', 'El resultado de una intensidad (tanta gente).'], answer: 2, why: 'Con «tanto… que» el resultado depende de la intensidad: es el tema de la clase 154.', en: '“There were so many people at the fair that we couldn’t get through.” What does the part with “que” express?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Extra: tu alumno reescribe la reclamación de Escribir con «por consiguiente» y cierra con «Así pues, …»; en la conversación tú respondes con «¿Así que…?» para mostrar el contraste de registro.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 117 · Conectores argumentativos: además, incluso, en cambio', text: 'Ya unes causas y resultados con «así que», «por eso» o «por lo tanto», en la conversación y en un texto formal. En la clase 117 sumas argumentos y comparas ideas con «además», «incluso» y «en cambio». Es el paso natural: con causas, resultados, sumas y contrastes ya puedes defender una opinión o escribir un informe bien organizado.', en: 'You now link causes and results with “así que”, “por eso” or “por lo tanto”, in conversation and in formal writing. In class 117 you add arguments and compare ideas with “además”, “incluso” and “en cambio”. It is the natural next step: with causes, results, additions and contrasts you can defend an opinion or write a well-organised report.', href: '/gramatica/conectores-argumentativos-ademas-incluso-en-cambio', label: 'Ir a la clase 117' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuál fue tu último problema de viaje y qué pasó por eso?». Respuesta esperada: una causa y dos resultados con conectores distintos. Tarea: escribir la reclamación de Escribir sobre un viaje real.' },
        ] },
      ],
    },
  ],
};
