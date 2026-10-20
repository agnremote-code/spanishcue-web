import type { LiveLesson } from '../types';

/**
 * Lesson 489 · C1 · Conectores de reformulación: es decir, a saber, mejor dicho (course unit G189).
 * Builds on G165 (g465), where es decir, o sea, en otras palabras and mejor dicho appeared
 * as one family among others, plus en resumen / en definitiva / total, que… as closers.
 * Here the reformulation family is studied by function, with register, punctuation and
 * position: explanatory (es decir, esto es, o sea, en otras palabras, dicho de otro modo;
 * a saber + enumeration; vale decir, receptive, formal writing in some American
 * countries), rectifying (mejor dicho, más bien, o mejor, digo — colloquial), distancing
 * (en cualquier caso, en todo caso, de todos modos / de todas formas) and recapitulating
 * (en suma, en resumen, en definitiva, en fin — also resignation —, total — colloquial —,
 * al fin y al cabo, después de todo). «O sea»: filler vs connector vs «o sea que» +
 * conclusion. «Es decir, que…» keeps the indicative. Errors: *osea, «es decir» used to
 * correct, «a saber» without a list, «por fin» for «en fin», «eso es» for «esto es».
 * Ampliación: en todo caso = «si acaso, como mucho», total = «no merece la pena», «a saber»
 * + interrogative (= quién sabe).
 * Scene: the Centro de Estudios del Agua de Valdelobos prepares a public talk on the
 * drought plan. Héctor Arriaga (hydrologist) writes too technically; Nuria Calderón
 * (communication officer) helps him reformulate; Lucía Ferrer (local radio) interviews
 * him. Escuchar: the opening of Héctor's talk (es-MX-JorgeNeural, one voice).
 * Escribir: an explanatory note for the neighbourhood website. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 489,
  level: 'C1',
  title: 'Conectores de reformulación: es decir, a saber, mejor dicho',
  subtitle: 'Explicar, corregir, relativizar y resumir lo que acabas de decir eligiendo el conector exacto para cada función y registro.',
  legend: [
    { tone: 'blue', label: 'EXPLICAR · es decir, esto es, o sea, en otras palabras, dicho de otro modo, a saber' },
    { tone: 'orange', label: 'RECTIFICAR · mejor dicho, más bien, o mejor, digo' },
    { tone: 'violet', label: 'DISTANCIARSE · en cualquier caso, en todo caso, de todos modos' },
    { tone: 'teal', label: 'RECAPITULAR · en suma, en resumen, en definitiva, en fin, total, al fin y al cabo' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Volver sobre lo dicho', coach: 'Decirlo otra vez, pero mejor. Saying it again, but better.',
      steps: [
        { title: 'Una charla para el barrio · A talk for the neighbourhood', blocks: [
          { kind: 'lead', text: 'El embalse de Valdelobos está al treinta y dos por ciento y el ayuntamiento ha activado el plan de sequía. El jueves, el hidrólogo Héctor Arriaga da una charla para los vecinos en la Casa de Cultura. Su presentación es rigurosa, pero está llena de tecnicismos, y Nuria Calderón, responsable de comunicación del Centro de Estudios del Agua, le ayuda a hacerla comprensible. En la clase 165 usaste «es decir» o «mejor dicho» como un recurso más de un discurso. Hoy estudias a fondo los **conectores de reformulación**: los que te permiten volver sobre lo que acabas de decir para **explicarlo**, **corregirlo**, **quitarle importancia** o **resumirlo**.', en: 'The Valdelobos reservoir is at 32% and the drought plan is in force. Héctor, a hydrologist, gives a public talk on Thursday; his slides are rigorous but full of jargon, and Nuria, the communication officer, helps him make them clear. In class 165 you met es decir and mejor dicho as one tool among many; today you study the whole reformulation family: markers that take you back to what you have just said in order to explain it, correct it, play it down or sum it up.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase de Héctor y cada continuación. Tu alumno explica qué hace cada conector con lo que se acaba de decir.', self: 'Lee la frase de Héctor y las cuatro continuaciones. ¿Qué hace cada conector con lo dicho? (What does each marker do with what has just been said?)' } },
          { kind: 'compare', title: 'Una frase, cuatro maneras de volver sobre ella · One sentence, four ways back', columns: [
            { tone: 'blue', label: 'EXPLICAR', sentence: 'El acuífero está sobreexplotado; [[es decir|blue]], sacamos más agua de la que se recarga.', idea: 'Lo segundo dice lo mismo que lo primero, pero de forma más clara.', en: 'The second part says the same thing more clearly: the first statement still stands.' },
            { tone: 'orange', label: 'RECTIFICAR', sentence: 'El acuífero está en mal estado; [[mejor dicho|orange]], está sobreexplotado.', idea: 'Lo segundo sustituye a lo primero porque es más exacto.', en: 'The second part replaces the first because it is more accurate: the first wording is withdrawn.' },
            { tone: 'violet', label: 'DISTANCIARSE', sentence: 'No sé si el acuífero se recuperará pronto. [[En cualquier caso|violet]], hay que ahorrar.', idea: 'Lo dicho antes deja de ser decisivo: lo que sigue vale sea como sea.', en: 'What came before stops being decisive: what follows holds whatever the case.' },
            { tone: 'teal', label: 'RECAPITULAR', sentence: 'Llueve menos, gastamos más y el acuífero no se recarga. [[En definitiva|teal]], tenemos un problema serio.', idea: 'Lo segundo resume o valora todo lo anterior.', en: 'The second part sums up or evaluates everything before it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Está en mal estado; mejor dicho, está sobreexplotado». ¿Qué pasa con «en mal estado»?', options: ['Se resume.', 'Se sustituye por una expresión más exacta.', 'Se mantiene y se explica.'], answer: 1, why: '«Mejor dicho» rectifica: el hablante retira su primera formulación y la cambia por otra más precisa.', en: 'With mejor dicho the speaker withdraws the first wording and replaces it.' },
            { prompt: '«No sé si se recuperará. En cualquier caso, hay que ahorrar». ¿Qué hace «en cualquier caso»?', options: ['Resta importancia a la duda: hay que ahorrar de todas maneras.', 'Introduce una enumeración.', 'Corrige un dato equivocado.'], answer: 0, why: 'Es un conector de distanciamiento: lo dicho antes (la duda) no cambia la conclusión.', en: 'It sets the doubt aside: we have to save water either way.' },
          ] },
        ] },
        { title: 'Explicar: es decir, esto es, a saber · Explaining', mascot: '/brand/mascot/studying.webp', coach: 'Lo mismo, más claro. The same, but clearer.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'REFORMULADORES EXPLICATIVOS', question: '¿Quieres decir lo mismo de otra manera para que se entienda mejor?', en: 'Explanatory markers present the second statement as equivalent to the first, only clearer. Es decir is the all-purpose one; esto es is formal and written (don’t confuse it with eso es, “that’s right”); o sea belongs to conversation; en otras palabras and dicho de otro modo usually simplify or translate jargon. A saber is special: it does not paraphrase but spells out the members of something just announced (“three phases, namely: …”), so it needs a list or a specification after it. Vale decir is a formal equivalent of es decir in writing from some American countries.', formula: ['enunciado; es decir, / esto es, + lo mismo, más claro', 'enunciado; en otras palabras, / dicho de otro modo, + versión más sencilla', 'conversación: …, o sea, …', 'nombre que anuncia un conjunto, a saber: elemento, elemento y elemento'],
            meaning: 'Los **explicativos** presentan lo segundo como **equivalente** a lo primero, pero más claro. **Es decir** sirve para todo; **esto es** es formal y escrito; **o sea** es propio de la conversación; **en otras palabras** y **dicho de otro modo** suelen simplificar o traducir un tecnicismo. **A saber** es distinto: no parafrasea, sino que **enumera** los elementos de algo que acabas de anunciar («tres fases, a saber: …»).',
            examples: [
              { es: 'El consumo ha bajado un diez por ciento, [[esto es|blue]], unos dos millones de litros al día.', en: 'Consumption is down ten per cent, that is, about two million litres a day: formal, written.' },
              { es: 'Hay un déficit hídrico estructural. [[Dicho de otro modo|blue]], cada año llueve menos de lo que gastamos.', en: 'There is a structural water deficit. To put it another way, every year it rains less than we use: jargon translated.' },
              { es: 'El plan establece dos excepciones, [[a saber|blue]]: los hospitales y los centros escolares.', en: 'The plan sets out two exceptions, namely hospitals and schools: a saber spells out the “two exceptions”.' },
              { es: '—Mañana cortan el agua de ocho a dos. —[[O sea|blue]], toda la mañana sin agua.', en: '“They’re cutting the water off from eight to two tomorrow.” “So, the whole morning without water”: conversational.' },
            ] },
          { kind: 'table', title: 'Registro y matiz · Register and nuance', head: ['Conector', 'Matiz', 'Registro'], rows: [
            ['[[es decir|blue]]', 'explica, aclara, concreta', 'neutro: oral y escrito'],
            ['[[esto es|blue]]', 'igual que «es decir»', 'formal, sobre todo escrito'],
            ['[[o sea|blue]]', 'explica; también saca conclusiones', 'coloquial'],
            ['[[en otras palabras|blue]] · [[dicho de otro modo|blue]] (de otra manera)', 'lo dice de forma más sencilla o más directa', 'neutro, cuidado'],
            ['[[a saber|blue]]', 'enumera los elementos de un conjunto anunciado', 'formal'],
            ['vale decir', 'igual que «es decir»', 'formal; frecuente en textos de algunos países americanos'],
          ], note: '«Esto es» (reformula) ≠ «eso es» (confirma: «—¿Tres fases? —Eso es»). «A saber» va detrás de una palabra que anuncia un conjunto: «tres fases», «dos excepciones», «los siguientes requisitos».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Informe técnico del Centro.', prompt: 'La demanda supera la recarga natural; ___, el acuífero pierde reservas cada año.', options: ['esto es', 'a saber', 'o sea'], answer: 0, why: 'Se explica lo mismo en un texto formal: «esto es». «O sea» es coloquial y «a saber» necesitaría una enumeración.', en: 'Demand exceeds natural recharge; that is, the aquifer loses reserves every year.' },
            { prompt: 'Las restricciones afectan a dos actividades, ___: el riego de jardines y el llenado de piscinas.', options: ['mejor dicho', 'en cualquier caso', 'a saber'], answer: 2, why: '«Dos actividades» anuncia un conjunto y lo que sigue enumera sus elementos: «a saber».', en: 'The restrictions affect two activities, namely watering gardens and filling pools.' },
          ] },
        ] },
        { title: '«O sea»: tres usos · Three uses of «o sea»', mascot: '/brand/mascot/speaking.webp', coach: '¿Conector, conclusión o muletilla? Marker, conclusion or filler?', blocks: [
          { kind: 'compare', title: 'Tres «o sea» distintos · Three different «o sea»', columns: [
            { tone: 'blue', label: 'REFORMULA', sentence: 'Habrá restricciones nocturnas, [[o sea|blue]], de diez de la noche a seis de la mañana.', idea: 'Equivale a «es decir»: concreta lo anterior. Coma delante y detrás.', en: 'Equivalent to es decir: it pins down what came before. Commas on both sides.' },
            { tone: 'blue', label: 'CONCLUYE: O SEA QUE', sentence: 'El embalse sigue bajando, [[o sea que|blue]] este verano habrá restricciones.', idea: 'Introduce una consecuencia, como «así que». Sin coma después.', en: 'It introduces a consequence, like así que (“so”). No comma after it.' },
            { tone: 'neutral', label: 'MULETILLA', sentence: 'Es que, o sea, no sé, el plan me parece, o sea, un poco exagerado.', idea: 'No une nada: el hablante gana tiempo. Muy frecuente al hablar; evítalo en una charla o un texto.', en: 'It links nothing: the speaker is just buying time. Very common in casual speech; avoid it in a talk or in writing.' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Es decir, que…» y «o sea, que…» · The mood does not change', text: 'Al hablar es muy frecuente reformular o sacar una conclusión con **que**: «—El lunes entramos en alerta. —**Es decir, que** ya **hay** normas». Ese «que» introduce lo que el hablante deduce, y el verbo va en **indicativo**, como cualquier afirmación. No lo confundas con «decir que» + subjuntivo para transmitir una orden («Te digo que **riegues** de noche»): en «es decir» el verbo «decir» ya no transmite nada; es un conector fijo.', en: 'In speech, people often reformulate or conclude with que: “Es decir, que ya hay normas”. That que introduces what the speaker infers, so the verb is indicative, like any statement. Don’t mix it up with decir que + subjunctive for passing on an order: inside es decir, the verb decir no longer reports anything; it is a fixed marker.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—No nos van a dar más agua del trasvase. —Es decir, que ___ que ahorrar más.', options: ['tenemos', 'tuviéramos', 'tengamos'], answer: 0, why: 'Es una conclusión que el hablante afirma: indicativo, «tenemos». «Es decir» no exige subjuntivo.', en: '“They won’t give us any more water from the transfer.” “So we have to save even more.”' },
            { prompt: '¿En qué frase «o sea» es una muletilla?', options: ['Viene el técnico el martes, o sea, pasado mañana.', 'Es que, o sea, yo no sabía nada, o sea, nadie me avisó.', 'Cerraron el grifo general, o sea que no había agua.'], answer: 1, why: 'En la primera, «o sea» no une dos enunciados equivalentes ni saca una conclusión: solo rellena pausas.', en: 'In which sentence is o sea just a filler?' },
          ] },
        ] },
        { title: 'Rectificar: mejor dicho, más bien, digo · Correcting yourself', mascot: '/autoestudio/mascot/noting.webp', coach: 'Retiro lo dicho y lo cambio. I take it back and change it.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'REFORMULADORES RECTIFICATIVOS', question: '¿Lo que acabas de decir no era del todo exacto y quieres sustituirlo?', en: 'Rectifying markers withdraw the first wording and replace it with a better one. Mejor dicho is neutral and works for facts and for nuance. Más bien offers a more accurate description, often softening or adjusting: “no es prudente, más bien temeroso”; it often follows a negation (no…, sino más bien…). O mejor improves a suggestion or a plan (“call her, or better still, write to her”). Digo is colloquial and fixes a slip of the tongue on the spot (a date, a name, a number). This is the key contrast with es decir: es decir keeps what you said and explains it; mejor dicho takes it back.', formula: ['enunciado, mejor dicho, + versión correcta', 'no es A, (sino) más bien B · A; más bien, B', 'propuesta, o mejor, + propuesta mejor', 'coloquial: dato equivocado, digo, dato correcto'],
            meaning: 'Los **rectificativos** retiran la primera formulación y la sustituyen por otra mejor. **Mejor dicho** es neutro: corrige un dato o un matiz. **Más bien** propone una descripción más ajustada, a menudo para matizar («no…, sino más bien…»). **O mejor** mejora una propuesta. **Digo** es coloquial y corrige al momento un lapsus: una fecha, un nombre, una cifra.',
            examples: [
              { es: 'Héctor fue prudente; [[mejor dicho|orange]], excesivamente cauteloso.', en: 'Héctor was careful; or rather, overcautious: the first word was too kind.' },
              { es: 'La reunión no fue tensa, sino [[más bien|orange]] incómoda.', en: 'The meeting wasn’t tense so much as awkward: a more accurate description.' },
              { es: 'Mándale el informe a Nuria, [[o mejor|orange]], llévaselo en persona.', en: 'Send Nuria the report, or better still, take it to her in person: an improved plan.' },
              { es: 'La charla es el jueves a las siete, [[digo|orange]], a las ocho.', en: 'The talk is on Thursday at seven, I mean, at eight: an instant fix of a slip.' },
            ] },
          { kind: 'decide', title: '¿Explicar o rectificar? · Explain or correct?', steps: [
            { q: '¿Sigue siendo verdad lo que has dicho primero?', yes: 'Explicas: «es decir», «esto es», «o sea», «en otras palabras».', no: 'Rectificas: pasa a la siguiente pregunta.' },
            { q: '¿Es un lapsus (fecha, nombre, cifra) en una conversación informal?', yes: '«digo» (o «mejor dicho»).', no: 'Siguiente pregunta.' },
            { q: '¿Mejoras una propuesta o un plan?', yes: '«o mejor».', no: '«mejor dicho» para corregir; «más bien» para matizar una descripción.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Somos veinte vecinos en la comunidad, ___, dieciocho: dos pisos están vacíos.', options: ['mejor dicho', 'a saber', 'es decir'], answer: 0, why: 'El primer dato era falso y se sustituye: «mejor dicho». «Es decir» mantendría «veinte» y lo explicaría.', en: 'There are twenty of us in the building, or rather eighteen: two flats are empty.' },
            { prompt: 'Podemos reunirnos el lunes, ___, el martes por la tarde, que hay más gente libre.', options: ['en suma', 'o mejor', 'esto es'], answer: 1, why: 'Se mejora una propuesta: «o mejor». «Esto es» explicaría el lunes, no lo cambiaría.', en: 'We could meet on Monday, or better still, on Tuesday afternoon, when more people are free.' },
          ] },
        ] },
        { title: 'Distanciarse y recapitular · Setting aside and summing up', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Sea como sea… y, en suma… Whatever the case… and, in short…', blocks: [
          { kind: 'concept', tone: 'violet', label: 'DISTANCIAMIENTO', question: '¿Quieres dejar a un lado lo dicho porque, sea como sea, lo importante es lo que viene?', en: 'Distancing markers make what was said before irrelevant to the conclusion: whatever the answer to that question or doubt, what follows still holds. En cualquier caso and en todo caso are neutral and frequent in formal speech; de todos modos, de todas formas and de cualquier manera are very common in conversation too. Unlike sin embargo (class 190), they don’t oppose two ideas: they simply stop the previous one from mattering.', formula: ['duda / opinión / dato discutible. En cualquier caso, / En todo caso, + lo que vale igualmente', '…; de todos modos, / de todas formas, + lo que vale igualmente'],
            meaning: 'Los conectores de **distanciamiento** quitan relevancia a lo dicho antes: sea cual sea la respuesta a esa duda u opinión, lo que sigue **vale igualmente**. **En cualquier caso** y **en todo caso** son neutros y frecuentes en discursos; **de todos modos** y **de todas formas** son muy habituales también al conversar. A diferencia de «sin embargo» (clase 190), no oponen dos ideas: hacen que la primera deje de importar.',
            examples: [
              { es: 'Quizá llueva en octubre, quizá no. [[En cualquier caso|violet]], las restricciones siguen hasta nuevo aviso.', en: 'It may rain in October or it may not. Either way, the restrictions stay in force until further notice.' },
              { es: 'No sé si vendrá mucha gente a la charla; [[de todos modos|violet]], la grabaremos.', en: 'I don’t know if many people will come to the talk; we’ll record it anyway.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'RECAPITULACIÓN', question: '¿Quieres cerrar con lo esencial, con una valoración o con el argumento que lo decide todo?', en: 'Recapitulating markers close a stretch of discourse. En resumen sums up; en suma does the same in formal style; en definitiva gives the final verdict. En fin closes a topic and often adds resignation or weariness (“oh well”); it is not por fin (“at last”). Total, que… wraps up a story in conversation. Al fin y al cabo and después de todo introduce the consideration that ultimately settles the matter, often to justify or reassure (“after all”).', formula: ['enumeración o argumentos. En resumen, / En suma, / En definitiva, + síntesis o valoración', 'En fin, (que) + cierre, a menudo resignado', 'coloquial: historia. Total, que + resultado', 'consejo o juicio; al fin y al cabo, / después de todo, + razón decisiva'],
            meaning: '**En resumen** resume; **en suma** hace lo mismo en registro formal; **en definitiva** da la valoración final. **En fin** cierra un tema y a menudo añade **resignación** o cansancio; no es «por fin». **Total, que…** cierra una historia en la conversación. **Al fin y al cabo** y **después de todo** introducen la razón que, en el fondo, decide la cuestión, muchas veces para justificar o tranquilizar.',
            examples: [
              { es: 'Menos lluvia, más consumo y un acuífero agotado: [[en suma|teal]], un problema estructural.', en: 'Less rain, higher consumption and a depleted aquifer: in sum, a structural problem.' },
              { es: 'Han vuelto a aplazar la obra de la depuradora. [[En fin|teal]], ya nos lo esperábamos.', en: 'They’ve postponed the treatment plant again. Oh well, we saw it coming: resignation.' },
              { es: 'No te enfades con los técnicos; [[al fin y al cabo|teal]], ellos no deciden cuándo llueve.', en: 'Don’t get angry with the technicians; after all, they don’t decide when it rains: the decisive reason.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Llevábamos tres años esperando la nueva tubería y ___ la han instalado.', options: ['en suma', 'en fin', 'por fin'], answer: 2, why: 'Después de una larga espera, algo llega: «por fin». «En fin» cerraría el tema o expresaría resignación.', en: 'We’d been waiting three years for the new pipe and at last they’ve installed it.' },
            { prompt: 'Algunos dicen que la sequía es pasajera y otros que no. ___, ahorrar agua nunca está de más.', options: ['A saber', 'De todas formas', 'Mejor dicho'], answer: 1, why: 'Se deja a un lado la discusión: ahorrar vale en cualquier caso. Distanciamiento.', en: 'Some say the drought is temporary and others disagree. Either way, saving water never hurts.' },
          ] },
        ] },
        { title: 'Puntuación, posición y errores · Punctuation, position, mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Comas, dos puntos y trampas. Commas, colons and traps.', blocks: [
          { kind: 'table', title: 'Dónde van y cómo se puntúan · Position and punctuation', head: ['Posición', 'Ejemplo', 'Puntuación'], rows: [
            ['entre dos partes de la oración', 'Llegará el lunes, [[es decir|blue]], dentro de tres días.', 'coma delante y detrás'],
            ['tras una pausa fuerte', 'El acuífero no se recarga; [[en otras palabras|blue]], se agota.', 'punto y coma (o punto) delante, coma detrás'],
            ['al principio de un párrafo', '[[En definitiva|teal]], el plan es necesario.', 'coma detrás'],
            ['«a saber» + lista', 'tres fases, [[a saber|blue]]: prealerta, alerta y emergencia', 'coma delante, dos puntos detrás'],
            ['«o sea que» + conclusión', 'No ha llovido, [[o sea que|blue]] seguimos igual.', 'coma delante, nada detrás'],
          ], note: 'Casi todos estos conectores pueden ir al principio de su enunciado; algunos (en cualquier caso, en definitiva, al fin y al cabo) también en medio, entre comas: «El plan, en cualquier caso, es obligatorio». «Digo» y «o mejor» van siempre justo antes de la corrección.' },
          { kind: 'mistakes', title: 'Errores frecuentes · Common mistakes', items: [
            { wrong: 'La charla es el jueves, es decir, el viernes.', right: 'La charla es el jueves, mejor dicho, el viernes.', why: '«Es decir» mantiene lo dicho y lo explica; si el primer dato es falso, hay que rectificar.' },
            { wrong: 'Osea, que no hay agua.', right: 'O sea, que no hay agua.', why: '«O sea» se escribe siempre en dos palabras.' },
            { wrong: 'El plan es importante, a saber, todos debemos cumplirlo.', right: 'El plan es importante; es decir, todos debemos cumplirlo.', why: '«A saber» solo enumera los elementos de un conjunto anunciado; para parafrasear, «es decir».' },
            { wrong: 'Es decir, que tengamos que ahorrar más.', right: 'Es decir, que tenemos que ahorrar más.', why: 'Es una conclusión que se afirma: indicativo. «Es decir» no pide subjuntivo.' },
            { wrong: 'Discutimos dos horas. Por fin, que no decidimos nada.', right: 'Discutimos dos horas. En fin, que no decidimos nada.', why: '«Por fin» = «at last», tras una espera. Para cerrar con resignación: «en fin».' },
            { wrong: 'La demanda supera la recarga, eso es, el acuífero pierde agua.', right: 'La demanda supera la recarga, esto es, el acuífero pierde agua.', why: '«Eso es» confirma lo que ha dicho otro; el reformulador es «esto es».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien puntuada?', options: ['El plan prevé tres medidas, a saber: riego nocturno, cortes y multas.', 'El plan prevé tres medidas: a saber riego nocturno, cortes y multas.', 'El plan prevé tres medidas a saber, riego nocturno, cortes y multas.'], answer: 0, why: 'Coma delante de «a saber» y dos puntos detrás, antes de la enumeración.', en: 'Which sentence is correctly punctuated?' },
            { prompt: '¿Qué frase está bien escrita?', options: ['No ha llovido, osea que seguimos en alerta.', 'No ha llovido, o sea que seguimos en alerta.', 'No ha llovido o sea, que seguimos en alerta.'], answer: 1, why: '«O sea» en dos palabras; con «o sea que» + conclusión, coma delante y ninguna detrás.', en: 'Which sentence is correctly written?' },
          ] },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El ensayo de la charla', coach: 'Toca cada conector. Tap each marker.',
      steps: [
        { title: 'Miércoles por la tarde · Wednesday afternoon', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Nuria y tu alumno es Héctor. Después tu alumno toca cada conector marcado y explica su función.', self: 'Lee el diálogo en voz alta y toca cada conector marcado. ¿Explica, corrige, se distancia o resume? (Tap each marker: does it explain, correct, set aside or sum up?)' } },
          { kind: 'explore', title: 'Nuria revisa la presentación de Héctor', setting: 'Despacho del Centro de Estudios del Agua, la víspera de la charla.', lines: [
            { who: 'Nuria', text: 'Héctor, ya he leído tu presentación. Es rigurosa, pero en la segunda diapositiva pones «déficit hídrico estructural». ¿Qué le va a decir eso a la gente del barrio?', en: 'Your slides are rigorous, but what will “structural water deficit” mean to people from the neighbourhood?' },
            { who: 'Héctor', text: 'Que, año tras año, gastamos más agua de la que llueve. [[Dicho de otro modo|blue]], no es un mal verano: es un problema de fondo.', en: 'That year after year we use more water than falls as rain. To put it another way, it isn’t one bad summer: it’s a deep-rooted problem.' },
            { who: 'Nuria', text: '¡Pues di eso! Y aquí, donde hablas de «usos prioritarios», ¿cuáles son?', en: 'Then say that! And here, where you mention “priority uses”, which are they?' },
            { who: 'Héctor', text: 'Hay tres, [[a saber|blue]]: el consumo de las casas, los servicios esenciales y el regadío. Lo aprobó la junta el lunes, [[digo|orange]], el martes.', en: 'There are three, namely household use, essential services and irrigation. The board approved it on Monday, I mean, on Tuesday.' },
            { who: 'Nuria', text: 'Bien. Otra cosa: dices que la situación es «preocupante». Yo diría que es [[más bien|orange]] seria. Estamos en alerta.', en: 'Another thing: you call the situation “worrying”. I’d say it’s serious, rather. We’re on alert.' },
            { who: 'Héctor', text: 'Tienes razón: es seria; [[mejor dicho|orange]], es la más grave en quince años. Pero no quiero asustar a nadie.', en: 'You’re right: it’s serious; or rather, it’s the worst in fifteen years. But I don’t want to scare anyone.' },
            { who: 'Nuria', text: 'Ni asustar ni maquillar. Habrá vecinos que piensen que exageramos. [[En cualquier caso|violet]], las normas son las mismas para todos, y eso tiene que quedar claro.', en: 'Neither scare people nor sugar-coat it. Some neighbours will think we’re exaggerating. Either way, the rules are the same for everyone, and that has to be clear.' },
            { who: 'Héctor', text: '¿Y si me preguntan por los cortes de agua? Es que, [[o sea|blue]], no hay ninguno previsto, pero tampoco lo puedo garantizar.', en: 'And if they ask me about water cuts? I mean, well, none are planned, but I can’t guarantee it either.' },
            { who: 'Nuria', text: 'Pues dilo así, pero sin ese «o sea». [[De todos modos|violet]], si los hubiera, se avisaría con una semana de antelación: eso tranquiliza mucho.', en: 'Then say it like that, but without the “o sea”. In any case, if there were any, people would get a week’s notice: that’s very reassuring.' },
            { who: 'Héctor', text: 'De acuerdo. ¿Y para cerrar? Había pensado en repasar las cinco medidas una por una.', en: 'OK. And to close? I was thinking of going over the five measures one by one.' },
            { who: 'Nuria', text: 'Mejor una sola frase: «[[En suma|teal]], pequeños gestos, muchas veces al día». Y una razón final: [[al fin y al cabo|teal]], es el agua que sale de nuestros grifos.', en: 'Better one sentence: “In sum, small habits, many times a day”. And a final reason: after all, it’s the water that comes out of our taps.' },
            { who: 'Héctor', text: '[[En fin|teal]], que me toca rehacer media presentación. [[Total|teal]], tampoco tenía planes para esta noche.', en: 'Oh well, looks like I’m redoing half the presentation. Not that I had plans for tonight anyway.' },
          ], notes: {
            'Dicho de otro modo': 'Explicativo: traduce el tecnicismo a una idea sencilla. Neutro y cuidado, perfecto para una charla.',
            'a saber': 'Explicativo especial: enumera los tres elementos que anuncia «hay tres». Coma delante y dos puntos detrás.',
            'digo': 'Rectificativo coloquial: Héctor corrige al momento un lapsus con la fecha. En una conversación es natural.',
            'más bien': 'Rectificativo que matiza: Nuria propone una palabra más exacta que «preocupante».',
            'mejor dicho': 'Rectificativo: Héctor retira «seria» y la sustituye por algo todavía más preciso.',
            'En cualquier caso': 'Distanciamiento: lo que piensen algunos vecinos no cambia lo importante, que las normas son para todos.',
            'o sea': 'Aquí es una muletilla: no explica ni concluye nada, solo ayuda a Héctor a ganar tiempo. Por eso Nuria le pide que lo quite.',
            'De todos modos': 'Distanciamiento: aunque no se pueda garantizar nada, lo que sigue vale igualmente.',
            'En suma': 'Recapitulativo formal: resume todas las medidas en una idea.',
            'al fin y al cabo': 'Recapitulativo argumentativo: presenta la razón que, en el fondo, lo decide todo.',
            'En fin': 'Recapitulativo con resignación: Héctor acepta que tiene trabajo por delante. «En fin, que…» es muy oral.',
            'Total': 'Coloquial: aquí «total» quita importancia (de todas formas, no tenía planes). Ver la Ampliación.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué le preocupa a Nuria la segunda diapositiva?', options: ['Porque es demasiado corta.', 'Porque tiene un dato equivocado.', 'Porque usa un término técnico que los vecinos no entenderán.'], answer: 2, why: '«¿Qué le va a decir eso a la gente del barrio?»: el problema es el tecnicismo.', en: 'Why is Nuria worried about the second slide?' },
            { prompt: '¿Qué corrige Héctor con «digo»?', options: ['El número de usos prioritarios.', 'El nombre de la junta.', 'El día en que la junta aprobó el plan.'], answer: 2, why: '«Lo aprobó la junta el lunes, digo, el martes»: corrige la fecha.', en: 'What does Héctor correct with “digo”?' },
            { prompt: '¿Qué le aconseja Nuria para cerrar la charla?', options: ['Repasar las cinco medidas una por una.', 'Terminar con una sola frase y una razón final.', 'Hablar de los cortes de agua.'], answer: 1, why: '«Mejor una sola frase… Y una razón final».', en: 'What does Nuria advise him to do to close the talk?' },
          ] },
        ] },
        { title: 'Las notas de Nuria · Nuria’s notes', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: '¿Qué hace cada conector? · What does each marker do?', categories: [
            { id: 'explicar', label: 'Explica', tone: 'blue' },
            { id: 'rectificar', label: 'Rectifica', tone: 'orange' },
            { id: 'distanciarse', label: 'Se distancia', tone: 'violet' },
            { id: 'recapitular', label: 'Recapitula', tone: 'teal' },
          ], items: [
            { text: 'Diapositiva 3: «El nivel freático ha bajado, esto es, el agua subterránea está más profunda».', answer: 'explicar', why: '«Esto es» aclara el tecnicismo sin retirarlo.' },
            { text: 'Diapositiva 4: «Afecta a unos 9.000 hogares, mejor dicho, a 9.400».', answer: 'rectificar', why: 'La primera cifra se sustituye por la exacta.' },
            { text: 'Diapositiva 5: «No sabemos cuánto durará la sequía. En todo caso, el plan se revisará cada mes».', answer: 'distanciarse', why: 'La duda queda a un lado: el plan se revisa igualmente.' },
            { text: 'Diapositiva 6: «Ducharse, arreglar fugas, regar de noche: en resumen, gastar solo lo necesario».', answer: 'recapitular', why: '«En resumen» condensa la lista en una idea.' },
            { text: 'Diapositiva 7: «La medida no es un castigo, sino más bien una precaución».', answer: 'rectificar', why: '«Más bien» sustituye «castigo» por una descripción más ajustada.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Elegir la función exacta', coach: 'Primero la función, luego el conector. Function first, then the marker.',
      steps: [
        { title: 'Las preguntas del público · Questions from the audience', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada pregunta del público y la respuesta de Héctor. Tu alumno elige el conector y dice en voz alta qué función tiene.', self: 'Lee cada respuesta, elige el conector y di su función: explicar, rectificar, distanciarse o recapitular. (Name the function before choosing.)' } },
          { kind: 'choice', items: [
            { context: 'Una vecina pregunta qué significa «riego por goteo».', prompt: 'Es un sistema que lleva el agua directamente a la raíz; ___, no se pierde casi nada por evaporación.', options: ['mejor dicho', 'en otras palabras', 'en fin'], answer: 1, why: 'Se explica la ventaja con palabras más sencillas, sin corregir nada: «en otras palabras».', en: 'It takes water straight to the root; in other words, hardly any is lost to evaporation.' },
            { context: 'Un vecino pregunta qué sanciones hay.', prompt: 'La ordenanza prevé dos tipos de sanción, ___: un aviso por escrito y una multa si se repite.', options: ['o sea que', 'después de todo', 'a saber'], answer: 2, why: '«Dos tipos de sanción» anuncia un conjunto y se enumeran sus elementos: «a saber».', en: 'The bylaw provides for two kinds of penalty, namely a written warning and a fine for repeat offences.' },
            { context: 'Héctor se equivoca con una cifra.', prompt: 'El año pasado gastamos ciento veinte litros por persona y día, ___, ciento cuarenta; perdón.', options: ['digo', 'en suma', 'esto es'], answer: 0, why: 'Corrige al momento un lapsus en una respuesta oral: «digo». «Esto es» mantendría la cifra equivocada.', en: 'Last year we used 120 litres per person per day, I mean, 140; sorry.' },
            { context: 'Alguien duda de que el embalse se recupere este invierno.', prompt: 'Puede que sí y puede que no. ___, el plan seguirá activo hasta que supere el cincuenta por ciento.', options: ['En cualquier caso', 'A saber', 'Esto es'], answer: 0, why: 'La duda queda a un lado: lo que sigue vale pase lo que pase. Distanciamiento.', en: 'Maybe, maybe not. Either way, the plan will stay active until it is over fifty per cent.' },
            { context: 'Un vecino se queja de que no puede llenar la piscina.', prompt: 'Lo entiendo, pero ___, una piscina no es un uso esencial y el agua es de todos.', options: ['al fin y al cabo', 'es decir', 'mejor dicho'], answer: 0, why: 'Héctor presenta la razón decisiva para justificar la norma: «al fin y al cabo».', en: 'I understand, but after all, a pool isn’t an essential use and the water belongs to everyone.' },
          ] },
        ] },
        { title: '«O sea» en la radio · «O sea» on the radio', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'lead', text: 'Al día siguiente, Lucía Ferrer, de la radio local, sale a la calle a preguntar a los vecinos por el plan. En sus respuestas aparece muchas veces «o sea». Clasifícalas.', en: 'The next day Lucía Ferrer from the local radio goes out to ask residents about the plan. O sea keeps coming up in their answers: classify each use.' },
          { kind: 'classify', title: '¿Reformula, concluye o rellena? · Rephrase, conclude or fill?', categories: [
            { id: 'reformula', label: 'Reformula (= es decir)', tone: 'blue' },
            { id: 'concluye', label: 'Concluye (o sea que = así que)', tone: 'teal' },
            { id: 'muletilla', label: 'Muletilla', tone: 'neutral' },
          ], items: [
            { text: 'Riego de noche, o sea, después de las diez.', answer: 'reformula', why: 'Concreta qué significa «de noche».' },
            { text: 'Ya no se puede lavar el coche en la calle, o sea que lo llevo al lavadero.', answer: 'concluye', why: '«O sea que» presenta una consecuencia: equivale a «así que».' },
            { text: 'Pues mira, o sea, yo creo que, o sea, está bien.', answer: 'muletilla', why: 'No une dos ideas: solo llena las pausas.' },
            { text: 'La fase de alerta, o sea, la segunda de las tres, empezó el lunes.', answer: 'reformula', why: 'Entre comas, aclara qué es la fase de alerta.' },
            { text: 'El embalse está bajísimo, o sea que habrá que aguantar.', answer: 'concluye', why: 'Sin coma después y con una consecuencia: «o sea que» concluye.' },
            { text: 'Es que, o sea, nadie nos explicó nada antes.', answer: 'muletilla', why: '«Es que, o sea,…»: relleno típico del habla espontánea.' },
          ] },
        ] },
        { title: 'El borrador de la nota de prensa · The press release draft', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: 'El plan se aplica desde el lunes, es decir, desde hace tres días.', ok: true, why: 'Correcto: «es decir» concreta la fecha sin cambiarla, entre comas.' },
            { sentence: 'La charla tuvo lugar en la biblioteca, es decir, en la Casa de Cultura: la biblioteca estaba cerrada.', ok: false, options: ['La charla tuvo lugar en la biblioteca, mejor dicho, en la Casa de Cultura.', 'La charla tuvo lugar en la biblioteca, a saber, en la Casa de Cultura.'], answer: 0, why: 'El primer lugar es falso y se sustituye: rectificar con «mejor dicho», no explicar.' },
            { sentence: 'El Centro recomienda tres hábitos a saber, ducharse, regar de noche y revisar las fugas.', ok: false, options: ['El Centro recomienda tres hábitos, a saber: ducharse, regar de noche y revisar las fugas.', 'El Centro recomienda tres hábitos, a saber, que ducharse, regar de noche y revisar las fugas.'], answer: 0, why: 'Coma delante de «a saber» y dos puntos antes de la enumeración.' },
            { sentence: 'Las obras durarán dos semanas, a saber, hasta el día veinte.', ok: false, options: ['Las obras durarán dos semanas, es decir, hasta el día veinte.', 'Las obras durarán dos semanas, a saber: hasta el día veinte.'], answer: 0, why: 'No hay ningún conjunto que enumerar: se concreta el plazo. Para explicar, «es decir»; «a saber» solo enumera.' },
            { sentence: 'Nadie sabe cuándo lloverá. En cualquier caso, el Centro seguirá informando cada semana.', ok: true, why: 'Correcto: distanciamiento; la duda no cambia lo que sigue.' },
          ] },
        ] },
        { title: 'Mensajes con la radio · Messages with the radio', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Nuria y Lucía preparan la entrevista · Nuria and Lucía set up the interview', lines: [
            { who: 'Lucía', text: 'Hola, Nuria. ¿Puede venir Héctor al programa el viernes a las nueve, ___, a las diez? Me acaban de cambiar la parrilla.', options: ['esto es', 'mejor dicho', 'en suma'], answer: 1, why: 'Lucía sustituye la hora por la correcta: rectifica con «mejor dicho».' },
            { who: 'Nuria', text: 'Sí, puede. Te pido una cosa: preguntas sencillas, ___, sin tecnicismos.', options: ['o sea', 'a saber', 'digo'], answer: 0, why: 'Explica qué significa «preguntas sencillas» en un mensaje informal: «o sea». «A saber» necesitaría una lista y «digo» corregiría un lapsus.' },
            { who: 'Lucía', text: 'Perfecto. No sé si nos dará tiempo a abrir los teléfonos a los oyentes; ___, guardaré cinco minutos al final por si acaso.', options: ['es decir', 'al fin y al cabo', 'de todas formas'], answer: 2, why: 'La duda queda a un lado: los cinco minutos se guardan igualmente. Distanciamiento.' },
            { who: 'Nuria', text: '¡Gracias! Ha sido una semana larguísima: tres charlas, dos ruedas de prensa y la página web. ___, que el viernes me tomo un café contigo después del programa.', options: ['A saber', 'Mejor dicho', 'En fin'], answer: 2, why: 'Nuria cierra la enumeración con cansancio y pasa a otra cosa: «en fin, que…».' },
          ] },
        ] },
        { title: 'Construye la frase · Build the sentence', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', items: [
            { tiles: ['El', 'acuífero', 'está', 'agotado;', 'es', 'decir,', 'casi', 'no', 'queda', 'agua.'], accept: ['El acuífero está agotado; es decir, casi no queda agua.'], en: 'The aquifer is depleted; that is, there’s hardly any water left.' },
            { tiles: ['No', 'es', 'una', 'prohibición,', 'sino', 'más', 'bien', 'una', 'recomendación.'], accept: ['No es una prohibición, sino más bien una recomendación.'], en: 'It isn’t a ban so much as a recommendation.' },
            { tiles: ['Hay', 'dos', 'excepciones,', 'a', 'saber:', 'hospitales', 'y', 'colegios.'], accept: ['Hay dos excepciones, a saber: hospitales y colegios.'], en: 'There are two exceptions, namely hospitals and schools.' },
          ] },
        ] },
        { title: 'Reescribe con el conector · Rewrite with the marker', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'La medida afecta a los jardines privados. Quiero decir que no afecta a los parques públicos.', instruction: 'Une las dos frases con «es decir» (punto y coma o coma delante).', accept: ['La medida afecta a los jardines privados; es decir, no afecta a los parques públicos', 'La medida afecta a los jardines privados, es decir, no afecta a los parques públicos', 'La medida afecta a los jardines privados; es decir, no a los parques públicos', 'La medida afecta a los jardines privados, es decir, no a los parques públicos'] },
            { prompt: 'Vinieron unos cien vecinos. No, me equivoco: vinieron ciento cincuenta.', instruction: 'Corrige el dato en una sola oración con «mejor dicho».', accept: ['Vinieron unos cien vecinos, mejor dicho, ciento cincuenta', 'Vinieron unos cien vecinos; mejor dicho, ciento cincuenta', 'Vinieron unos cien vecinos, mejor dicho, vinieron ciento cincuenta', 'Vinieron unos cien vecinos; mejor dicho, vinieron ciento cincuenta'] },
            { prompt: 'Puede que el otoño sea lluvioso. Da igual: hay que cambiar los hábitos.', instruction: 'Sustituye «Da igual:» por un conector de distanciamiento.', accept: ['Puede que el otoño sea lluvioso. En cualquier caso, hay que cambiar los hábitos', 'Puede que el otoño sea lluvioso. En todo caso, hay que cambiar los hábitos', 'Puede que el otoño sea lluvioso. De todos modos, hay que cambiar los hábitos', 'Puede que el otoño sea lluvioso. De todas formas, hay que cambiar los hábitos', 'Puede que el otoño sea lluvioso. De cualquier manera, hay que cambiar los hábitos', 'Puede que el otoño sea lluvioso; en cualquier caso, hay que cambiar los hábitos', 'Puede que el otoño sea lluvioso; de todos modos, hay que cambiar los hábitos'] },
            { prompt: 'Se pierde agua en las tuberías viejas, en los riegos de día y en los grifos que gotean. Resumo: el problema es el despilfarro.', instruction: 'Sustituye «Resumo:» por un conector recapitulativo formal.', accept: ['Se pierde agua en las tuberías viejas, en los riegos de día y en los grifos que gotean. En suma, el problema es el despilfarro', 'Se pierde agua en las tuberías viejas, en los riegos de día y en los grifos que gotean. En resumen, el problema es el despilfarro', 'Se pierde agua en las tuberías viejas, en los riegos de día y en los grifos que gotean. En definitiva, el problema es el despilfarro', 'Se pierde agua en las tuberías viejas, en los riegos de día y en los grifos que gotean. En conclusión, el problema es el despilfarro'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno explica en voz alta un término técnico de su campo con tres conectores de funciones distintas: uno que explique («dicho de otro modo»), uno que rectifique («mejor dicho») y uno que cierre («en definitiva»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La charla de Héctor', coach: 'Escucha cómo vuelve sobre lo que dice. Listen to how he goes back over what he says.',
      steps: [
        { title: 'Jueves, Casa de Cultura · Thursday, at the community centre', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada conector de reformulación y su función. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para anotar cada conector y su función. (Listen once for the gist, then note each marker and what it does.)' } },
          { kind: 'listen', title: 'Apertura de la charla sobre el plan de sequía', channel: 'CASA DE CULTURA DE VALDELOBOS · GRABACIÓN', src: '/audio/grammar-live/489.mp3',
            before: 'Héctor abre la charla ante los vecinos. ¿Qué crees que les explicará primero: la situación, las normas o los consejos? (What do you think he’ll explain first?)',
            gist: { prompt: '¿Cuál es el propósito principal de Héctor? · What is Héctor’s main aim?', options: ['Defender que el plan de sequía es exagerado.', 'Anunciar cortes de agua para la próxima semana.', 'Explicar con claridad la situación del embalse, las nuevas normas y qué puede hacer cada vecino.'], answer: 2, why: 'Explica el nivel del embalse, las fases, las normas y pide gestos concretos.', en: 'He clearly explains the reservoir situation, the new rules and what each resident can do.' },
            details: [
              { prompt: '¿Cómo explica Héctor el «treinta y dos por ciento»?', options: ['Que llueve un tercio menos que antes.', 'Que el embalse guarda menos de un tercio de lo que podría almacenar.', 'Que el consumo ha bajado un tercio.'], answer: 1, why: '«…está al treinta y dos por ciento, es decir, guarda menos de un tercio del agua que podría almacenar».', en: 'How does Héctor explain the “thirty-two per cent”?' },
              { prompt: '¿Qué corrige con «mejor dicho»?', options: ['La fecha de la charla.', 'El número de fases del plan.', 'La fase en la que están: ya no es prealerta, sino alerta.'], answer: 2, why: '«Estamos en prealerta; mejor dicho, estábamos: desde el lunes, la fase es de alerta».', en: 'What does he correct with “mejor dicho”?' },
              { prompt: '¿Qué dice sobre los cortes de agua en las casas?', options: ['Que solo afectarán a las piscinas.', 'Que no están previstos y que, si llegaran, se anunciarían con una semana de antelación.', 'Que empezarán el lunes.'], answer: 1, why: '«No están previstos; de todos modos, si llegaran, se anunciarían con una semana de antelación».', en: 'What does he say about water cuts in homes?' },
              { prompt: '¿Qué función tiene «al fin y al cabo» al final?', options: ['Corrige un dato anterior.', 'Introduce una enumeración.', 'Da la razón decisiva para no ver las medidas como un sacrificio.'], answer: 2, why: '«No lo vean como un sacrificio: al fin y al cabo, el agua del embalse es la que sale de nuestros grifos».', en: 'What job does “al fin y al cabo” do at the end?' },
            ],
            transcript: 'Buenas tardes y gracias por venir. Mi compañera Nuria me ha pedido que hable claro, así que voy a intentarlo. Ahora mismo el embalse está al treinta y dos por ciento, [[es decir|blue]], guarda menos de un tercio del agua que podría almacenar. El plan de sequía tiene tres fases, [[a saber|blue]]: prealerta, alerta y emergencia. Estamos en prealerta; [[mejor dicho|orange]], estábamos: desde el lunes, la fase es de alerta. [[Dicho de otro modo|blue]], lo que hasta ahora eran recomendaciones son ya normas: está prohibido regar jardines durante el día y llenar piscinas privadas. Sé que a algunos de ustedes les parece exagerado, y es una opinión respetable. [[En cualquier caso|violet]], las normas son obligatorias para todos. ¿Habrá cortes de agua en las casas? No están previstos; [[de todos modos|violet]], si llegaran, se anunciarían con una semana de antelación. Les pido tres cosas sencillas: ducharse en lugar de bañarse, arreglar los grifos que gotean y poner la lavadora solo cuando esté llena. [[En suma|teal]], pequeños gestos, muchas veces al día. Y no lo vean como un sacrificio: [[al fin y al cabo|teal]], el agua del embalse es la que sale de nuestros grifos.',
            reply: { teacher: 'Tú eres un vecino escéptico y le haces a Héctor una pregunta difícil. Tu alumno responde como Héctor con al menos un conector explicativo, uno de distanciamiento y uno recapitulativo.', self: 'Imagina que un vecino te pregunta: «¿Y por qué tengo que ahorrar yo, si el problema es el regadío?». Responde en voz alta como Héctor con «es decir», «en cualquier caso» y «al fin y al cabo». (Answer a sceptical neighbour aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Explicar, corregir y cerrar en voz alta', coach: 'Vuelve sobre lo que dices. Go back over what you say.',
      steps: [
        { title: 'Situaciones para reformular · Situations for reformulating', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y a veces finges no entender («¿Cómo?», «¿Qué quieres decir?»), para que tu alumno reformule. Si usa «es decir» para corregir o «a saber» sin lista, tú repites la frase corregida y siguen.', self: 'Responde cada pregunta en voz alta. Después imagina que alguien no te ha entendido y reformula con otro conector. (Answer aloud, then rephrase as if someone had not understood.)' } },
          { kind: 'talk', cards: [
            { q: 'Explica un término técnico de tu trabajo o tus estudios a alguien que no sabe nada del tema. · Explain a technical term from your field to a layperson.', followUps: ['¿Puedes decirlo todavía más sencillo?', '¿Qué partes o elementos tiene?'], phrases: ['[[es decir|blue]], …', '[[dicho de otro modo|blue]], …', '…, [[a saber|blue]]: …'], hint: 'Primero el término, luego una paráfrasis y, si tiene partes, enuméralas con «a saber:».', example: 'Trabajo en logística inversa, es decir, en todo lo que pasa cuando un cliente devuelve un producto. Dicho de otro modo, hacemos el camino de la tienda al almacén al revés. El proceso tiene tres pasos, a saber: recoger el paquete, revisarlo y decidir si se vuelve a vender.' },
            { q: 'Cuenta una anécdota en la que te equivocaste al dar un dato (una fecha, una dirección, un nombre). · Tell a story where you got a detail wrong.', followUps: ['¿Cómo te diste cuenta?', '¿Qué pasó al final?'], phrases: ['[[digo|orange]], …', '[[mejor dicho|orange]], …', '[[Total|teal]], que…'], hint: 'Registro coloquial: aquí «digo» y «total, que…» son naturales.', example: 'Le dije a mi hermana que la cena era el sábado, digo, el viernes, pero ya era tarde: ella había entendido el sábado. Total, que se presentó con un pastel un día después de la fiesta.' },
            { q: 'Describe a una persona o una situación con una primera palabra y después busca otra más exacta. · Describe someone, then find a more precise word.', followUps: ['¿Por qué la segunda palabra es mejor?', '¿Cómo lo diría esa persona de sí misma?'], phrases: ['no es…, sino [[más bien|orange]]…', '…; [[mejor dicho|orange]], …'], hint: '«Más bien» para matizar una descripción; «mejor dicho» para sustituirla.', example: 'Mi jefe no es antipático, sino más bien reservado. Es tímido; mejor dicho, le cuesta hablar en público, pero en una conversación a solas es muy cercano.' },
            { q: 'Un amigo duda si aceptar un trabajo en otra ciudad. ¿Qué le aconsejas, aunque no sepas todos los detalles? · Advise a friend despite not knowing everything.', followUps: ['¿Y si no le gusta la ciudad?', '¿Qué es lo más importante para ti en un trabajo?'], phrases: ['[[En cualquier caso|violet]], …', '[[de todos modos|violet]], …', '[[al fin y al cabo|teal]], …'], hint: 'Deja a un lado lo que no sabes con un distanciador y termina con la razón decisiva.', example: 'No sé si el sueldo compensa el cambio. En cualquier caso, yo lo probaría un año: si no te convence, puedes volver. Al fin y al cabo, eres joven y no tienes hipoteca.' },
            { q: 'Resume una semana complicada que hayas tenido y haz una valoración final. · Sum up a tough week and give your verdict.', followUps: ['¿Qué fue lo peor?', '¿Aprendiste algo?'], phrases: ['[[En resumen|teal]], …', '[[En definitiva|teal]], …', '[[En fin|teal]], …'], hint: 'Enumera lo que pasó y cierra con «en definitiva» (valoración) o «en fin» (resignación).', example: 'El lunes se estropeó la caldera, el miércoles tuve dos reuniones larguísimas y el viernes se me olvidó el cumpleaños de mi madre. En fin, que no fue mi mejor semana. En definitiva, necesito unas vacaciones.' },
            { q: 'Eres Héctor en la radio. Lucía te pregunta: «¿Qué puede hacer un vecino normal?». · Answer as Héctor on the radio.', followUps: ['¿Y las empresas?', '¿Cuándo terminará el plan?'], phrases: ['[[a saber|blue]]: …', '[[en otras palabras|blue]], …', '[[En suma|teal]], …'], hint: 'Enumera medidas con «a saber:», explica una y cierra con «en suma».', example: 'Puede hacer mucho. Le propongo tres gestos, a saber: ducharse en lugar de bañarse, arreglar los grifos que gotean y regar de noche. En otras palabras, gastar el agua que necesita y ni una gota más. En suma, cambiar pequeños hábitos.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («es decir» para corregir una fecha, «a saber» sin lista, «por fin, que…»). Tu alumno lo detecta y lo corrige.', self: 'Ahora graba una de tus respuestas y escúchala: ¿hay algún «o sea» de relleno? Repítela sin muletillas. (Record one answer and repeat it without fillers.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota divulgativa', coach: 'Claro, exacto y bien cerrado. Clear, precise and well rounded off.',
      steps: [
        { title: 'La web vecinal · The neighbourhood website', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada conector: ¿explica, rectifica, se distancia o recapitula? ¿Está bien puntuado? Tu alumno lee la nota en voz alta.', self: 'Escribe tu nota y toca «Revisar mi texto». Después comprueba la función y la puntuación de cada conector. (Check what each marker does and how it is punctuated.)' } },
          { kind: 'write', title: 'Mi nota divulgativa · My explanatory note', situation: 'La web de la asociación de vecinos publica notas breves que explican temas técnicos a todo el mundo. Escribe una para sus lectores: el plan de sequía de Valdelobos o un tema de tu campo profesional que afecte a la vida diaria (la factura de la luz, un tratamiento médico, un contrato de alquiler…). (Write a short note for the residents’ association website explaining a technical topic to everyone.)', task: [
            'Explica al menos un tecnicismo con «es decir», «esto es», «en otras palabras» o «dicho de otro modo». (Explain a technical term.)',
            'Enumera los elementos de algo que anuncias con «a saber:». (List items with a saber.)',
            'Rectifica o matiza una idea con «mejor dicho» o «más bien». (Correct or refine an idea.)',
            'Deja a un lado una duda u opinión con «en cualquier caso», «en todo caso» o «de todos modos». (Set aside a doubt.)',
            'Cierra con un recapitulativo formal y una razón final («en suma», «en definitiva», «al fin y al cabo»), sin «o sea», «total» ni «digo». (Close formally.)',
          ], starters: ['…, es decir,…', 'Dicho de otro modo,…', '…, a saber:…', '…; mejor dicho,…', 'No es…, sino más bien…', 'En cualquier caso,…', 'En suma,…', 'Al fin y al cabo,…'],
            words: ['es decir', 'esto es', 'en otras palabras', 'a saber', 'mejor dicho', 'más bien', 'en cualquier caso', 'de todos modos', 'en suma', 'en definitiva'],
            model: '¿Qué significa estar «en alerta por sequía»? Desde el lunes, Valdelobos está en fase de alerta, [[es decir|blue]], el agua del embalse ya no basta para garantizar todos los usos sin restricciones. El plan tiene tres fases, [[a saber|blue]]: prealerta, alerta y emergencia. En la fase actual hay dos normas obligatorias: no se puede regar durante el día ni llenar piscinas privadas. No se trata de un castigo, sino [[más bien|orange]] de una medida preventiva. Muchos vecinos preguntan si habrá cortes en las casas. Por ahora no están previstos. [[En cualquier caso|violet]], si se produjeran, se anunciarían con una semana de antelación. Hay quien piensa que el problema es solo de este año; [[dicho de otro modo|blue]], que bastará con un invierno lluvioso. Los datos dicen lo contrario: cada año gastamos más agua de la que recibimos. [[En suma|teal]], conviene cambiar pequeños hábitos: ducharse en lugar de bañarse, arreglar fugas y regar de noche. [[Al fin y al cabo|teal]], el agua del embalse es la que bebemos todos.',
            minWords: 150,
            checks: [
              { label: 'Un explicativo (es decir, esto es, en otras palabras, dicho de otro modo)', pattern: '(?<!\\p{L})(?:es\\s+decir|esto\\s+es|en\\s+otras\\s+palabras|dicho\\s+de\\s+otr[oa]\\s+(?:modo|manera|forma))(?!\\p{L})', tip: 'Explica un tecnicismo: «…, es decir, …».' },
              { label: '«a saber» seguido de dos puntos', pattern: '(?<!\\p{L})a\\s+saber\\s*:', tip: 'Anuncia un conjunto y enuméralo: «tres fases, a saber: …».' },
              { label: 'Un rectificativo (mejor dicho, más bien)', pattern: '(?<!\\p{L})(?:mejor\\s+dicho|más\\s+bien)(?!\\p{L})', tip: 'Corrige o matiza: «…; mejor dicho, …» o «no es…, sino más bien…».' },
              { label: 'Un distanciador (en cualquier caso, en todo caso, de todos modos, de todas formas)', pattern: '(?<!\\p{L})(?:en\\s+cualquier\\s+caso|en\\s+todo\\s+caso|de\\s+todos\\s+modos|de\\s+todas\\s+(?:formas|maneras))(?!\\p{L})', tip: 'Deja a un lado una duda: «En cualquier caso, …».' },
              { label: 'Un cierre (en suma, en resumen, en definitiva, al fin y al cabo, después de todo)', pattern: '(?<!\\p{L})(?:en\\s+suma|en\\s+resumen|en\\s+definitiva|al\\s+fin\\s+y\\s+al\\s+cabo|después\\s+de\\s+todo)(?!\\p{L})', tip: 'Cierra con «En suma, …» o «Al fin y al cabo, …».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})osea(?!\\p{L})', why: '**O sea** se escribe en dos palabras.' },
              { pattern: '(?<!\\p{L})o\\s+sea(?!\\p{L})', why: '«O sea» es coloquial. En una nota para la web, usa **es decir** o **esto es**.' },
              { pattern: '(?:^|[.;:]\\s*)(?:total|digo)\\s*,', why: '«Total» y «digo» son coloquiales. En un texto escrito, usa **en definitiva** o **mejor dicho**.' },
              { pattern: '(?<!\\p{L})por\\s+fin\\s*,\\s*que(?!\\p{L})', why: 'Para cerrar con resignación se dice **en fin, que…**; «por fin» significa «at last».' },
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
            { tone: 'blue', label: 'EXPLICAR', formula: 'es decir · esto es (formal) · o sea (coloquial) · en otras palabras · dicho de otro modo · a saber: + lista', example: 'Tres fases, a saber: prealerta, alerta y emergencia.', caption: 'lo dicho se mantiene; «a saber» solo enumera', en: 'what you said still stands; a saber only lists the members of a set' },
            { tone: 'orange', label: 'RECTIFICAR', formula: 'mejor dicho · más bien · o mejor · digo (coloquial)', example: 'Fue prudente; mejor dicho, excesivamente cauteloso.', caption: 'lo dicho se retira y se sustituye', en: 'what you said is withdrawn and replaced' },
            { tone: 'violet', label: 'DISTANCIARSE', formula: 'en cualquier caso · en todo caso · de todos modos · de todas formas', example: 'Quizá llueva. En cualquier caso, hay que ahorrar.', caption: 'lo dicho deja de ser decisivo', en: 'what came before stops mattering for the conclusion' },
            { tone: 'teal', label: 'RECAPITULAR', formula: 'en resumen · en suma · en definitiva · en fin · total, que… · al fin y al cabo', example: 'En fin, que me toca rehacerlo.', caption: '«en fin», a menudo resignado; ≠ «por fin»', en: 'en fin often sounds resigned and is not por fin, “at last”' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de elegir el conector, pregúntate qué haces con lo que acabas de decir: ¿lo **mantienes y lo aclaras** (es decir), lo **retiras** (mejor dicho), lo **dejas a un lado** (en cualquier caso) o lo **resumes** (en suma)? Después ajusta el registro: «o sea», «digo» y «total» son de la conversación; «esto es», «a saber» y «en suma», del texto cuidado. Y puntúa: coma detrás del conector, dos puntos tras «a saber».', en: 'Before choosing the marker, ask what you are doing with what you just said: keeping and clarifying it, withdrawing it, setting it aside or summing it up. Then adjust the register: o sea, digo and total belong to conversation; esto es, a saber and en suma to careful writing. And punctuate: a comma after the marker, a colon after a saber.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El vuelo sale a las siete, ___, a las siete y cuarto: lo han retrasado.', options: ['esto es', 'mejor dicho', 'en suma'], answer: 1, why: 'El primer dato ya no vale y se sustituye: rectificar.', en: 'The flight leaves at seven, or rather at a quarter past: it’s been delayed.' },
            { context: 'Contrato de alquiler.', prompt: 'El arrendatario asumirá dos gastos, ___: el agua y la electricidad.', options: ['a saber', 'o sea que', 'total'], answer: 0, why: '«Dos gastos» anuncia un conjunto; se enumera en registro formal con «a saber:».', en: 'The tenant will cover two costs, namely water and electricity.' },
            { prompt: 'No sé si me darán el puesto. ___, la entrevista me ha servido para aprender.', options: ['Digo', 'De todos modos', 'Es decir'], answer: 1, why: 'La duda queda a un lado: lo que sigue vale igualmente.', en: 'I don’t know if I’ll get the job. Either way, the interview was a learning experience.' },
            { prompt: '—Han cerrado la autopista por obras. —O sea que ___ por la carretera vieja.', options: ['vamos', 'fuéramos', 'vayamos'], answer: 0, why: '«O sea que» introduce una conclusión que se afirma: indicativo.', en: '“They’ve closed the motorway for roadworks.” “So we’re going by the old road.”' },
            { prompt: 'No te preocupes tanto por el examen; ___, es solo una prueba de nivel.', options: ['al fin y al cabo', 'mejor dicho', 'a saber'], answer: 0, why: 'Se da la razón decisiva para tranquilizar: «al fin y al cabo».', en: 'Don’t worry so much about the exam; after all, it’s only a placement test.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una clínica. Now, at a clinic.', blocks: [
          { kind: 'lead', text: 'Elena Robles, fisioterapeuta, prepara una hoja informativa para sus pacientes. Sus notas son demasiado técnicas o demasiado coloquiales: tú las conviertes en frases claras y cuidadas.', en: 'Elena, a physiotherapist, is preparing an information sheet for her patients. Her notes are either too technical or too casual: you turn them into clear, careful sentences.' },
          { kind: 'rewrite', title: 'Las notas de Elena · Elena’s notes', items: [
            { prompt: 'Tiene una tendinitis rotuliana, o sea, el tendón de la rodilla está inflamado.', instruction: 'Sustituye «o sea» por un explicativo formal y escrito.', accept: ['Tiene una tendinitis rotuliana, esto es, el tendón de la rodilla está inflamado', 'Tiene una tendinitis rotuliana; esto es, el tendón de la rodilla está inflamado', 'Tiene una tendinitis rotuliana, es decir, el tendón de la rodilla está inflamado', 'Tiene una tendinitis rotuliana; es decir, el tendón de la rodilla está inflamado'] },
            { prompt: 'El tratamiento tiene tres partes: frío, ejercicios y descanso.', instruction: 'Usa «a saber» con la puntuación correcta.', accept: ['El tratamiento tiene tres partes, a saber: frío, ejercicios y descanso'] },
            { prompt: 'Haga los ejercicios dos veces al día, digo, tres.', instruction: 'Hazlo formal: sustituye «digo».', accept: ['Haga los ejercicios dos veces al día, mejor dicho, tres', 'Haga los ejercicios dos veces al día; mejor dicho, tres', 'Haga los ejercicios dos veces al día, mejor dicho, tres veces', 'Haga los ejercicios dos veces al día; mejor dicho, tres veces'] },
          ] },
        ] },
        { title: 'Ampliación · Otros valores de «en todo caso», «total» y «a saber» · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: tres conectores de hoy tienen otro valor muy frecuente. **En todo caso** puede significar «si acaso, como mucho» y limita lo dicho: «No es un experto; en todo caso, un aficionado con buena memoria». **Total**, en la conversación, puede quitar importancia a algo para justificar una decisión: «No me arreglo, total, solo voy a la panadería». Y **a saber** + palabra interrogativa no reformula nada: significa «quién sabe»: «A saber dónde ha dejado las llaves».', en: 'For strong students or spare time: three of today’s markers have another very common use. En todo caso can mean “if anything, at most” and scales down what was said. In conversation, total can play something down to justify a decision (“what’s the point anyway”). And a saber followed by a question word doesn’t reformulate at all: it means “who knows”.' },
          { kind: 'choice', title: 'Otros valores · Other uses', items: [
            { prompt: '«No es una sequía histórica; en todo caso, un año seco». ¿Qué hace aquí «en todo caso»?', options: ['Limita lo dicho: como mucho, es un año seco.', 'Enumera.', 'Deja a un lado una duda.'], answer: 0, why: 'Equivale a «si acaso, como mucho»: rebaja la primera afirmación.', en: 'Here en todo caso means “at most, if anything”.' },
            { prompt: '«¿Para qué voy a lavar el coche? Total, mañana llueve». ¿Qué expresa «total»?', options: ['Una corrección.', 'Que no merece la pena hacerlo.', 'Una suma exacta.'], answer: 1, why: 'Valor coloquial: presenta un argumento que hace inútil la acción.', en: 'Total here means “it’s not worth it anyway”.' },
            { prompt: '«A saber cuándo arreglan la tubería». ¿Qué significa?', options: ['Nadie sabe cuándo la van a arreglar.', 'La arreglan pronto, a saber: mañana.', 'Es decir, cuándo la arreglan.'], answer: 0, why: '«A saber» + interrogativo = «quién sabe»: expresa duda o escepticismo, no reformula.', en: 'A saber + question word means “who knows”.' },
            { prompt: 'Pasa a registro formal: «Total, que la reunión no sirvió de nada».', options: ['En definitiva, la reunión no dio ningún resultado.', 'O sea que la reunión no sirvió de nada.', 'Por fin, la reunión no sirvió de nada.'], answer: 0, why: '«En definitiva» cierra con una valoración en registro formal; «o sea que» es coloquial y «por fin» significa «at last».', en: 'Make it formal.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno cuenta una anécdota coloquial con «total», «en fin» y «a saber + interrogativo» y después la resume en dos frases formales.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 190 · Conectores contraargumentativos y restrictivos', text: 'Ya sabes volver sobre lo que dices para explicarlo, corregirlo, dejarlo a un lado o resumirlo. Los distanciadores de hoy («en cualquier caso», «de todos modos») rozan la oposición sin llegar a ella. En la clase 190 das ese paso: los conectores que oponen o restringen lo dicho, como «sin embargo», «no obstante», «ahora bien» o «eso sí», con sus matices de fuerza y registro.', en: 'You can now go back over what you say to explain, correct, set aside or sum it up. Today’s distancing markers come close to contrast without quite getting there; class 190 takes that step, with connectors that oppose or restrict what was said, and their differences in strength and register.', href: '/gramatica/conectores-contraargumentativos-y-restrictivos', label: 'Ir a la clase 190' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Llegó el lunes, es decir, hace tres días” y “Llegó el lunes, mejor dicho, el martes”?». Respuesta esperada: «es decir» mantiene el dato y lo explica; «mejor dicho» lo retira y lo sustituye. Tarea: la nota divulgativa de Escribir sobre un tema de su campo.' },
        ] },
      ],
    },
  ],
};
