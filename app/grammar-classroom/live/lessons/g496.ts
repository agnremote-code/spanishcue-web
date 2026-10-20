import type { LiveLesson } from '../types';

/**
 * Lesson 496 · C1 · Interrogativas retóricas y exclamativas complejas (course unit G196).
 * Builds on G023 (lesson 323: interrogatives with an accent), G184 (lesson 484: inversion in
 * wh-questions and exclamatives, ¡Qué bien canta tu hermana!) and G192 (lesson 492:
 * intensification, ¡Qué + noun + tan / más + adj.!, ¡Cuánto…!, lo + adj. + que, ¡Si es que…!,
 * ¡Vaya si…!), whose core is only recalled here. C1 step, following the NGLE: rhetorical
 * questions assert the opposite polarity (affirmative question → negative assertion: ¿Quién se
 * cree eso? = nadie; negative question → affirmative assertion: ¿Quién no querría vivir mejor?
 * = todos); «¿acaso…?» (biased towards «no»); ¿A quién le importa?, ¿Qué más da?, ¿Y qué?,
 * ¿Para qué…?, ¿Cómo no voy a…? (= claro que sí) vs ¿Cómo voy a…? (= no puedo); real tags
 * ¿no? / ¿verdad? (confirmation) vs rhetorical questions. Complex exclamatives as a system:
 * ¡Qué + N + tan / más + adj.!, ¡Cuánto/a/os/as + N! (agreement), ¡Cómo + verbo!, ¡Lo + adj. +
 * que…!, ¡Quién + imperf. / pluscuamp. de subjuntivo! (wish / surprise), recognition of
 * colloquial ¡Si será…!, ¡Menudo/a…! (mainly Spain) and ¡Qué de…!. Accent on qué / cuánto /
 * cómo / quién vs átono que / cuanto / como / quien; opening ¡ ¿ where the question starts;
 * ¡¿…?!; intonation. Ampliación: negative polarity items in rhetorical questions (¿Acaso he
 * dicho yo nada?, ¿Has visto en tu vida…?) and echo «¿Cómo que…?».
 * Scene: a university debate club prepares the final of an inter-university tournament
 * (motion: closing city centres to private cars). Coach Elena Robles (Spain), debaters Valeria
 * Montes (Bogotá) and Pablo Herrera (Madrid). Escuchar: Valeria's closing speech at the final
 * (es-CO-SalomeNeural, ustedes). Escribir: an opinion column for the club's blog.
 */
export const lesson: LiveLesson = {
  id: 496,
  level: 'C1',
  title: 'Interrogativas retóricas y exclamativas complejas',
  subtitle: 'Afirmar preguntando y exclamar con matiz: ¿Quién no querría…?, ¿Acaso…?, ¡Cómo ha cambiado!, ¡Quién pudiera…!, con tildes y signos.',
  legend: [
    { tone: 'blue', label: 'PREGUNTA RETÓRICA · afirma lo contrario de lo que pregunta (¿Quién no…? = todos; ¿Acaso…? = no)' },
    { tone: 'teal', label: 'PREGUNTA REAL · pide respuesta o confirmación (¿no?, ¿verdad?)' },
    { tone: 'orange', label: 'EXCLAMATIVA DE GRADO · ¡qué… tan!, ¡cuánto!, ¡cómo + verbo!, ¡lo… que!' },
    { tone: 'violet', label: 'DESEO, SORPRESA Y COLOQUIALES · ¡quién pudiera!, ¡quién lo hubiera dicho!, ¡menudo…!' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Preguntar sin preguntar', coach: 'Hay preguntas que no esperan respuesta. Some questions expect no answer.',
      steps: [
        { title: 'Dos argumentos, el mismo contenido · Two arguments, same content', blocks: [
          { kind: 'lead', text: 'Faltan dos días para la final del torneo interuniversitario de debate. La moción: «Esta casa cerraría el centro de las ciudades al coche privado». **Valeria Montes** (de Bogotá) y **Pablo Herrera** (de Madrid) defienden el «sí»; **Elena Robles**, su entrenadora, les pide que dejen de «leer datos» y empiecen a **convencer**. Su herramienta favorita: preguntas que no esperan respuesta y exclamaciones que contagian la emoción.', en: 'Two days before the final of a university debating tournament. The motion is about closing city centres to private cars. The coach wants her team to stop reading out figures and start persuading, using questions that need no answer and exclamations that carry emotion.' },
          { kind: 'guide', text: { teacher: 'Tú lees la versión plana; tu alumno lee la versión de Valeria. Después tu alumno dice qué afirma de verdad cada pregunta.', self: 'Lee las dos versiones en voz alta. ¿Qué afirma de verdad cada pregunta de la segunda? (What does each question really state?)' } },
          { kind: 'compare', title: 'Afirmar o preguntar · Stating or asking', columns: [
            { tone: 'neutral', label: 'VERSIÓN PLANA', sentence: 'Todo el mundo quiere vivir sin ruido. Los coches no compran en las tiendas. Diez minutos más de viaje no son un problema. El barrio ha cambiado muchísimo.', idea: 'Cuatro afirmaciones correctas; el jurado las escucha y las olvida.', en: 'Four accurate statements that the judges hear and forget.' },
            { tone: 'blue', label: 'VERSIÓN DE VALERIA', sentence: '[[¿Quién no querría|blue]] vivir sin ruido? [[¿Acaso|blue]] compran los coches? Que tardamos diez minutos más… [[¿Y qué?|blue]] [[¡Cómo ha cambiado|orange]] el barrio!', idea: 'Las preguntas obligan al oyente a darse la respuesta él mismo; la exclamativa transmite asombro.', en: 'The questions make the listeners supply the answer themselves, which is far more persuasive; the exclamation conveys amazement rather than just reporting a change.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué afirma Valeria con «¿Quién no querría vivir sin ruido?»?', options: ['Que todo el mundo querría vivir sin ruido.', 'Que no sabe quién quiere vivir sin ruido.', 'Que nadie quiere vivir sin ruido.'], answer: 0, why: 'Pregunta negativa → afirmación positiva: «¿Quién no…?» = todos.', en: 'A negative rhetorical question makes a positive claim: who wouldn’t…? means everyone would.' },
            { prompt: '«¿Acaso compran los coches?» significa…', options: ['Que a veces los coches compran.', 'Que los coches no compran: compran las personas.', 'Que Valeria no lo sabe.'], answer: 1, why: '«Acaso» orienta la pregunta hacia el «no»: la respuesta obvia es negativa.', en: 'Acaso pushes the question towards an obvious “no”.' },
          ] },
        ] },
        { title: 'La pregunta retórica: polaridad al revés · Reversed polarity', mascot: '/brand/mascot/studying.webp', coach: 'Pregunta en positivo, afirma en negativo. Ask positive, assert negative.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PREGUNTA RETÓRICA', question: '¿Quieres afirmar algo con más fuerza, dejando que el oyente lo deduzca?', en: 'A rhetorical question does not request information: it makes a statement, and with the opposite polarity. An affirmative question asserts a negative (Who believes that? = nobody does); a negative question asserts a positive (Who wouldn’t want to live better? = everyone would). Acaso pushes towards an obvious “no”. ¿Cómo no voy a…? means “of course I will”, while ¿Cómo voy a…? means “I can’t possibly”.', formula: ['pregunta afirmativa → afirmación negativa: ¿Quién se cree eso? = nadie', 'pregunta negativa → afirmación positiva: ¿Quién no querría…? = todos', '¿Acaso…? → «no» · ¿Cómo no voy a…? → «claro que sí» · ¿Cómo voy a…? → «no puedo»'],
            meaning: 'La pregunta retórica **no pide información: afirma**, y lo hace con la **polaridad invertida**. Si la pregunta es afirmativa, afirma algo negativo: «¿**Quién** se cree eso?» = nadie se lo cree. Si es negativa, afirma algo positivo: «¿**Quién no** querría vivir mejor?» = todos querrían. **Acaso** orienta hacia un «no» evidente: «¿**Acaso** te he pedido algo?» = no te he pedido nada. Fórmulas muy frecuentes: «¿**A quién le importa**…?» (a nadie), «¿**Qué más da**?» (da igual), «¿**Y qué**?» (eso no cambia nada), «¿**Para qué**…?» (no sirve de nada).',
            examples: [
              { es: '[[¿Quién no querría|blue]] una ciudad con más árboles?', en: 'Everyone would want one: the negative question asserts a positive.' },
              { es: '[[¿Acaso te he pedido|blue]] algo? Solo te he preguntado la hora.', en: 'I haven’t asked you for anything: acaso expects the answer “no”.' },
              { es: '—¿Vienes a la final? —[[¿Cómo no voy a ir?|blue]] · —¿Vienes? —[[¿Cómo voy a ir,|blue]] si trabajo hasta las diez?', en: 'Cómo no voy a… = of course I’m going; cómo voy a… = I can’t possibly go.' },
              { es: '[[¿Para qué|blue]] ampliar la carretera si en dos años estará igual de llena?', en: 'Para qué + infinitive or verb: there is no point in doing it.' },
            ] },
          { kind: 'table', title: 'Lo que se pregunta y lo que se afirma · What is asked and what is stated', head: ['Pregunta retórica', 'Lo que afirma', 'Registro'], rows: [
            ['¿[[A quién le importa|blue]] el color de los autobuses?', 'A nadie le importa.', 'general; algo despectivo'],
            ['¿[[Qué más da|blue]] llegar a las nueve o a las nueve y cuarto?', 'Da igual.', 'general, coloquial'],
            ['Pierdo diez minutos. [[¿Y qué?|blue]]', 'Eso no es un argumento.', 'coloquial, desafiante'],
            ['[[¿No es verdad que|blue]] el aire del centro está peor que nunca?', 'Es verdad.', 'formal: muy propia de debates y discursos'],
            ['[[¿Es que no ves|blue]] lo que pasa?', 'Lo ves (o deberías verlo).', 'reproche'],
          ], note: 'La entonación ayuda: la retórica suele terminar con la voz baja, como una afirmación, y con fuerza en la palabra interrogativa.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Pablo quiere decir que nadie defiende el ruido. ¿Qué pregunta usa?', options: ['¿Quién no defiende el ruido?', '¿Quién defiende el ruido?', '¿No defiende nadie el ruido?'], answer: 1, why: 'Pregunta afirmativa → afirmación negativa: «¿Quién defiende…?» = nadie.', en: 'To assert “nobody”, the question is affirmative.' },
            { prompt: '—¿Vas a votar el domingo? —«¿___ voy a votar? ¡Es mi primera vez!»', options: ['Cómo', 'Cómo no', 'Para qué'], answer: 1, why: '«¿Cómo no voy a…?» = claro que sí. «¿Cómo voy a…?» diría que no puede.', en: 'Of course I’m voting: cómo no voy a…' },
          ] },
        ] },
        { title: '¿Retórica o real? · Rhetorical or genuine?', mascot: '/brand/mascot/speaking.webp', coach: '¿Esperas respuesta o la das tú? Do you expect an answer, or give it?', blocks: [
          { kind: 'decide', title: 'Antes de responder, decide · Decide before you answer', steps: [
            { q: '¿El hablante espera de verdad que el otro conteste?', yes: 'Pregunta real. Las coletillas ¿no? y ¿verdad? piden confirmación: «La final es el viernes, ¿no?».', no: 'Es retórica: sigue con la siguiente pregunta.' },
            { q: '¿La pregunta retórica es afirmativa (sin «no»)?', yes: 'Afirma lo negativo: «¿Quién se cree eso?» = nadie; «¿Acaso…?» = no.', no: 'Afirma lo positivo: «¿Quién no…?» = todos; «¿Cómo no…?» = claro que sí.' },
          ] },
          { kind: 'compare', title: 'Coletilla real / pregunta retórica · Tag or rhetorical question', columns: [
            { tone: 'teal', label: 'PREGUNTA REAL CON COLETILLA', sentence: 'El turno de réplica dura tres minutos, [[¿no?|teal]] · Lo vas a hacer genial, [[¿verdad?|teal]]', idea: 'El hablante cree saber la respuesta, pero la pide: la voz sube al final y el otro contesta.', en: 'The speaker thinks they know the answer but still asks for confirmation; the voice rises and the other person replies.' },
            { tone: 'blue', label: 'PREGUNTA RETÓRICA', sentence: '[[¿Para qué|blue]] sirve un parque al que no se puede llegar a pie? · Me equivoqué en un dato. [[¿Y qué?|blue]]', idea: 'Nadie contesta: la respuesta está implícita («para nada»; «no importa»). La voz suele bajar.', en: 'Nobody replies: the answer is implied (“for nothing”, “it doesn’t matter”), and the voice usually falls.' },
          ] },
          { kind: 'tip', icon: '💡', title: '¿Y qué? / ¿Y qué…? · So what?', text: '**¿Y qué?**, sola, quita importancia a lo que acaba de decir el otro: «—Es caro. —¿Y qué?». Pero **¿Y qué + verbo…?** suele ser una pregunta real que continúa la conversación: «¿Y qué dijo el jurado?». En un debate, «¿Y qué?» es eficaz pero desafiante: después, justifica por qué no importa.', en: 'On its own, ¿Y qué? dismisses the previous point (“so what?”). Followed by a verb, it is usually a genuine follow-up question (“and what did the judges say?”). In a debate it works, but it sounds confrontational, so back it up with a reason.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es una pregunta real, que espera respuesta?', options: ['Mañana ensayamos a las cinco, ¿verdad?', '¿Qué más da un minuto más?', '¿A quién le importa el color de los carriles?'], answer: 0, why: '«¿verdad?» al final pide confirmación: el otro tiene que contestar.', en: 'The tag ¿verdad? asks for confirmation.' },
            { prompt: '«¿Qué más da quién empiece?» significa…', options: ['Es importante quién empieza.', 'Da igual quién empiece.', 'Quiero saber quién empieza.'], answer: 1, why: '«¿Qué más da…?» = da igual, no importa.', en: 'Qué más da means it makes no difference.' },
          ] },
        ] },
        { title: 'Exclamativas: el sistema completo · The full set of exclamatives', mascot: '/autoestudio/mascot/noting.webp', coach: 'Asombro, deseo, queja. Amazement, wishes, complaints.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'EXCLAMATIVAS COMPLEJAS', question: '¿Quieres expresar asombro por un grado o una cantidad, o un deseo imposible?', en: 'In lesson 192 you used qué… tan / más, cuánto and lo… que to intensify. Here is the full system. Cuánto agrees with its noun (cuánta gente, cuántos coches). Cómo + verb exclaims about the intensity or manner of an action (how it’s raining!). Quién + imperfect subjunctive expresses a wish for oneself that seems out of reach (if only I could…); quién + pluperfect subjunctive, especially ¡Quién lo hubiera dicho!, expresses surprise at an outcome nobody expected. The subject goes after the verb.', formula: ['¡Qué + nombre + tan / más + adjetivo! · ¡Cuánto / cuánta / cuántos / cuántas + nombre!', '¡Cómo + verbo! · ¡Lo + adjetivo concordado + que + verbo!', '¡Quién + imperfecto de subjuntivo! (deseo) · ¡Quién lo hubiera dicho! (sorpresa)'],
            meaning: 'Ya usaste en la clase 192 **¡qué… tan / más…!**, **¡cuánto…!** y **¡lo… que…!** para intensificar. Aquí completas el sistema. **Cuánto** concuerda con el nombre: ¡cuánt**a** gente!, ¡cuánt**os** coches! **¡Cómo + verbo!** pondera la intensidad o la manera de una acción: ¡Cómo llueve! **¡Quién + imperfecto de subjuntivo!** expresa un deseo que el hablante ve lejano para sí mismo: ¡Quién pudiera vivir junto al mar! (= ojalá yo pudiera). **¡Quién lo hubiera dicho!** expresa sorpresa ante algo que nadie esperaba. Y, como viste en la clase 184, el sujeto va **detrás del verbo**: ¡Qué bien habla Valeria!',
            examples: [
              { es: '[[¡Qué plaza tan|orange]] tranquila sin coches! · [[¡Cuántas bicis|orange]] hay hoy!', en: 'Qué + noun + tan + adjective, with no article; cuántas agrees with bicis.' },
              { es: '[[¡Cómo ha cambiado|orange]] el barrio desde que cerraron la calle!', en: 'Cómo + verb: how much the neighbourhood has changed.' },
              { es: '[[¡Lo caro que|orange]] está todo! · [[¡Lo lenta que|orange]] va la cola!', en: 'Lo + adjective + que: the adjective agrees (lenta, with la cola).' },
              { es: '[[¡Quién pudiera|violet]] ir al trabajo andando! · [[¡Quién lo hubiera dicho!|violet]] Ganaron los novatos.', en: 'A wish that feels out of reach (if only I could walk to work!) / surprise at an unexpected outcome (who would have thought it!).' },
            ] },
          { kind: 'table', title: 'Exclamativas coloquiales: reconocer y usar con cuidado · Colloquial exclamatives', head: ['Forma', 'Ejemplo', 'Registro y zona'], rows: [
            ['¡**Menudo / menuda** + nombre!', '[[¡Menudo atasco!|violet]] · [[¡Menuda suerte!|violet]]', 'coloquial, propio sobre todo de España; positivo o irónico: «¡Menudo favor me has hecho!» = un mal favor'],
            ['¡**Qué de** + nombre!', '[[¡Qué de gente!|violet]] · ¡Qué de coches!', 'coloquial (= ¡cuánto!); se oye en España y en otras zonas; en un texto formal, mejor «cuánto»'],
            ['¡**Si será** + adjetivo!', '[[¡Si será despistado!|violet]] Otra vez sin las llaves.', 'coloquial, sobre todo en España: exasperación; basta con reconocerla'],
            ['¡**Si es que**…! (clase 192)', '[[¡Si es que|violet]] no escucha a nadie!', 'coloquial, general: presenta la queja como evidente'],
          ], note: 'En un discurso ante un jurado, en un artículo o en una reseña publicada, quedan mejor qué… tan, cuánto, cómo o quién pudiera.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«¡___ gente ha venido a la final!»', options: ['Cuánta', 'Cuántas', 'Cuánto'], answer: 0, why: 'Cuánto concuerda con el nombre: «gente» es femenino singular.', en: 'Cuánta agrees with gente (feminine singular).' },
            { prompt: 'Elena, que no tiene tiempo para nada: «¡___ tener tu tiempo libre!»', options: ['Quién podrá', 'Quién pudiera', 'Quién puede'], answer: 1, why: 'Deseo que se ve lejano: quién + imperfecto de subjuntivo.', en: 'A wish that seems out of reach takes the imperfect subjunctive.' },
          ] },
        ] },
        { title: 'Tildes, signos, entonación y errores · Accents, marks, intonation, mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Qué con tilde, que sin tilde. Stressed qué, unstressed que.', blocks: [
          { kind: 'table', title: 'Con tilde (pregunta o exclama) / sin tilde · Accented or not', head: ['Con tilde', 'Sin tilde', 'Diferencia'], rows: [
            ['¡**Qué** suerte tienes!', '¡**Que** tengas suerte!', 'qué exclamativo / que de deseo (= ojalá)'],
            ['¡**Cómo** llueve!', '**Como** llueve, no salgo.', 'cómo exclamativo / como causal o comparativo'],
            ['¡**Cuánto** has crecido!', '**Cuanto** más ensayas, mejor sale.', 'cuánto exclamativo / cuanto en «cuanto más… más»'],
            ['¿**Quién** lo sabe?', '**Quien** lo sepa, que lo diga.', 'quién interrogativo / quien relativo'],
          ], note: 'También llevan tilde en las indirectas: «No sabes cómo llueve», «Me pregunto quién vendrá».' },
          { kind: 'tip', icon: '🔑', title: 'Signos y entonación · Opening marks and intonation', text: 'En español los signos **¡** y **¿** son obligatorios y se abren **donde empieza** la pregunta o la exclamación, no siempre al principio de la oración: «Y tú, **¿**de verdad crees eso?», «Si lo piensas, **¡**qué absurdo es!». Si es pregunta y exclamación a la vez: «**¡¿**Cómo que no hay final**?!**» (también «¿¡…!?»). En la voz, la retórica suele **bajar** al final, como una afirmación; las coletillas ¿no? y ¿verdad? **suben**; la exclamativa marca con fuerza la palabra exclamativa (QUÉ, CÓMO).', en: 'Opening marks are compulsory and go where the question or exclamation begins, which may be mid-sentence. For a question that is also an exclamation, combine both marks. Rhetorical questions usually fall at the end like statements, tags rise, and exclamatives put strong stress on the exclamative word.' },
          { kind: 'mistakes', title: '¿Qué falla? · What goes wrong?', items: [
            { wrong: '¡Que ciudad tan limpia!', right: '¡Qué ciudad tan limpia!', why: 'El qué exclamativo es tónico y lleva tilde. Sin tilde, «¡Que…!» expresa un deseo: «¡Que te vaya bien!».' },
            { wrong: 'Qué bonito ha quedado el barrio!', right: '¡Qué bonito ha quedado el barrio!', why: 'El signo de apertura es obligatorio en español.' },
            { wrong: '¡Cuánto gente ha venido!', right: '¡Cuánta gente ha venido!', why: 'Ante un nombre, cuánto concuerda en género y número: cuánta gente, cuántos coches.' },
            { wrong: '¿Quién no quiere más tráfico? (para decir que nadie lo quiere)', right: '¿Quién quiere más tráfico?', why: 'Polaridad invertida: para afirmar «nadie», la pregunta es afirmativa. «¿Quién no…?» afirmaría «todos».' },
            { wrong: '¡Quién puede vivir junto al mar!', right: '¡Quién pudiera vivir junto al mar!', why: 'El deseo con «quién» va en imperfecto de subjuntivo.' },
            { wrong: '¡Qué bien Valeria habla!', right: '¡Qué bien habla Valeria!', why: 'En las exclamativas el sujeto va detrás del verbo (clase 184).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No sabes ___ me alegro de verte en la final».', options: ['cuánto', 'cuántos', 'cuanto'], answer: 0, why: 'Exclamativa indirecta: cuánto mantiene la tilde y, ante un verbo, es invariable.', en: 'You can’t imagine how glad I am: indirect exclamatives keep the accent.' },
            { prompt: '«¡___ te mejores pronto!» (un deseo)', options: ['Que', 'Cómo', 'Qué'], answer: 0, why: 'Deseo con que átono, sin tilde (= ojalá te mejores).', en: 'A wish uses unstressed que, with no accent.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre su ciudad: una pregunta retórica con «¿Quién no…?», una con «¿Acaso…?» y una exclamativa con «¡Cómo…!». Tú dices en voz alta qué afirma cada pregunta.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El último ensayo', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Ensayo general · The final rehearsal', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y Pablo; tu alumno es Valeria. Después tu alumno toca cada expresión marcada y dice qué afirma o qué expresa.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di qué afirma o qué expresa.' } },
          { kind: 'explore', title: 'Aula 3, miércoles por la tarde', setting: 'Faltan dos días para la final. Elena hace de equipo rival para que Valeria y Pablo practiquen réplicas y el discurso de cierre.', lines: [
            { who: 'Elena', text: 'Yo hago de equipo rival: «Cerrar el centro arruinará a los comercios». Valeria, réplica.', en: 'I’ll play the other team: “Closing the centre will ruin the shops.” Valeria, your rebuttal.' },
            { who: 'Valeria', text: '[[¿Acaso has visto|blue]] alguna vez a un coche comprando pan? Compra la gente, y la gente camina.', en: 'Have you ever seen a car buying bread? People do the shopping, and people walk.' },
            { who: 'Elena', text: 'Bien, pero mira al jurado, no a mí. Pablo: «Mucha gente necesita el coche para trabajar».', en: 'Good, but look at the judges, not at me. Pablo: “Lots of people need their car for work.”' },
            { who: 'Pablo', text: 'Algunos, sí. [[¿Y qué?|blue]] Nadie quiere quitarle la furgoneta al fontanero; queremos sacar del centro los coches que entran con una sola persona.', en: 'Some do, yes. So what? Nobody wants to take the plumber’s van away; we want to get single-occupant cars out of the centre.' },
            { who: 'Elena', text: 'Mucho mejor. Ahora, el cierre. Valeria, empieza fuerte.', en: 'Much better. Now, the closing speech. Valeria, start strong.' },
            { who: 'Valeria', text: '[[¿Quién no querría|blue]] salir de casa y oír pájaros en lugar de bocinas?', en: 'Who wouldn’t want to step outside and hear birds instead of car horns?' },
            { who: 'Pablo', text: '[[¡Menudo|violet]] arranque! [[¡Qué frase tan|orange]] redonda!', en: 'What an opening! What a perfectly rounded line!' },
            { who: 'Elena', text: 'Es buena, sí, pero delante del jurado, nada de «menudo». [[¿Para qué|blue]] arriesgarse con algo tan coloquial? Y en la pregunta, la voz baja al final, como en una afirmación.', en: 'It’s good, yes, but no “menudo” in front of the judges. Why risk something so colloquial? And in the question, your voice falls at the end, as in a statement.' },
            { who: 'Valeria', text: 'Entendido. Después cuento lo de Bogotá: los domingos cierran avenidas enteras para las bicis. [[¡Cómo cambia|orange]] la ciudad esas mañanas!', en: 'Got it. Then I tell them about Bogotá: on Sundays they close whole avenues for bikes. How the city changes on those mornings!' },
            { who: 'Pablo', text: 'Lo vas a bordar, [[¿verdad?|teal]] Aunque [[¡lo nerviosa que|orange]] te veo!', en: 'You’re going to nail it, right? Although you look so nervous!' },
            { who: 'Valeria', text: '[[¡Quién pudiera|violet]] saltar directamente al viernes por la noche! En septiembre no me atrevía ni a levantar la mano en clase.', en: 'If only I could skip straight to Friday night! In September I didn’t even dare to raise my hand in class.' },
            { who: 'Elena', text: '[[¡Quién lo hubiera dicho!|violet]] Y mírate ahora, en la final. Mañana a las cinco, último ensayo, [[¿no?|teal]]', en: 'Who would have thought it! And look at you now, in the final. Tomorrow at five, last rehearsal, right?' },
          ], notes: {
            '¿Acaso has visto': '**¿Acaso…?** orienta la pregunta hacia un «no» evidente: nunca has visto a un coche comprando. Es retórica: Valeria no espera respuesta.',
            '¿Y qué?': '**¿Y qué?** quita importancia al argumento rival: que algunos necesiten el coche no invalida la moción. Desafiante; Pablo lo justifica justo después.',
            '¿Quién no querría': '**¿Quién no + condicional?** Pregunta negativa → afirmación positiva: todos querrían. El condicional suaviza y abre la frase a cualquier oyente.',
            '¡Menudo': '**¡Menudo + nombre!** Exclamativa coloquial, propia sobre todo de España (Pablo es de Madrid). Aquí es positiva: un arranque muy bueno.',
            '¡Qué frase tan': '**¡Qué + nombre + tan + adjetivo!** Exclamativa de grado, sin artículo (nunca *qué una frase).',
            '¿Para qué': '**¿Para qué + infinitivo?** Retórica: no tiene sentido arriesgarse. Elena da un consejo en forma de pregunta.',
            '¡Cómo cambia': '**¡Cómo + verbo!** Pondera la intensidad del cambio. Cómo lleva tilde.',
            '¿verdad?': '**¿verdad?** Coletilla de pregunta real: Pablo busca que Valeria confirme (y la anima). La voz sube.',
            '¡lo nerviosa que': '**¡Lo + adjetivo + que!** «Nerviosa» concuerda con Valeria. El signo ¡ se abre donde empieza la exclamación, tras «Aunque».',
            '¡Quién pudiera': '**¡Quién + imperfecto de subjuntivo!** Deseo que se ve lejano para uno mismo: ojalá pudiera.',
            '¡Quién lo hubiera dicho!': '**¡Quién lo hubiera dicho!** Pluscuamperfecto de subjuntivo: sorpresa ante algo que nadie esperaba (la Valeria tímida de septiembre, hoy en la final).',
            '¿no?': '**¿no?** Coletilla de confirmación: Elena cree que el ensayo es a las cinco y lo comprueba. Pregunta real.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué responde Pablo al argumento de que la gente necesita el coche para trabajar?', options: ['Que los fontaneros deberían ir en bici.', 'Que nadie necesita el coche.', 'Que la moción solo quiere sacar del centro los coches con una sola persona.'], answer: 2, why: '«Nadie quiere quitarle la furgoneta al fontanero; queremos sacar del centro los coches que entran con una sola persona».', en: 'How does Pablo answer the argument that people need their cars for work?' },
            { prompt: '¿Por qué Elena no quiere oír «menudo» en la final?', options: ['Porque es demasiado coloquial para un jurado.', 'Porque solo se usa en Colombia.', 'Porque es incorrecto.'], answer: 0, why: '«¿Para qué arriesgarse con algo tan coloquial?»: no es un error, es un problema de registro.', en: 'Why doesn’t Elena want to hear menudo in the final?' },
            { prompt: '¿Qué ha cambiado en Valeria desde septiembre?', options: ['Antes no se atrevía a levantar la mano y ahora está en la final.', 'Antes vivía en Bogotá y ahora vive en Madrid.', 'Antes debatía en inglés.'], answer: 0, why: '«En septiembre no me atrevía ni a levantar la mano» — «¡Quién lo hubiera dicho!».', en: 'What has changed about Valeria since September?' },
          ] },
        ] },
        { title: 'Más frases del ensayo · More lines from the rehearsal', mascot: '/brand/mascot/seated.webp', coach: '¿Pregunta, afirma o exclama? Asking, stating or exclaiming?', blocks: [
          { kind: 'classify', title: '¿Qué hace cada frase? · What does each line do?', categories: [
            { id: 'retorica', label: 'Pregunta retórica: afirma sin esperar respuesta', tone: 'blue' },
            { id: 'real', label: 'Pregunta real: pide un dato o una confirmación', tone: 'teal' },
            { id: 'excl', label: 'Exclamativa: asombro, deseo o queja', tone: 'orange' },
          ], items: [
            { text: '¿A quién le importa de qué color son los carriles bici?', answer: 'retorica', why: 'Afirma que a nadie le importa.' },
            { text: 'Elena, ¿a qué hora es el sorteo de posturas?', answer: 'real', why: 'Pide un dato: la hora.' },
            { text: '¡Cuántas horas llevamos ensayando esta semana!', answer: 'excl', why: 'Cuántas + nombre: asombro por la cantidad.' },
            { text: '¿Cómo no vamos a ganar con este cierre?', answer: 'retorica', why: 'Pregunta negativa: afirma «claro que vamos a ganar».' },
            { text: '¡Quién tuviera tu memoria para los datos!', answer: 'excl', why: 'Quién + imperfecto de subjuntivo: deseo.' },
            { text: 'El jurado lo forman tres personas, ¿verdad?', answer: 'real', why: 'Coletilla ¿verdad?: pide confirmación.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno dice en voz alta las dos preguntas retóricas con la voz bajando al final y la de ¿verdad? con la voz subiendo; tú confirmas si se nota la diferencia.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Polaridad, concordancia, tildes, registro. Polarity, agreement, accents, register.',
      steps: [
        { title: '¿Qué afirma de verdad? · What does it really state?', blocks: [
          { kind: 'classify', title: 'Preguntas del público · Questions from the audience', categories: [
            { id: 'si', label: 'Afirma «sí / todos / claro» (pregunta negativa)', tone: 'blue' },
            { id: 'no', label: 'Afirma «no / nadie / para nada» (pregunta afirmativa)', tone: 'violet' },
            { id: 'real', label: 'Pregunta real: pide confirmación', tone: 'teal' },
          ], items: [
            { text: '¿Quién no ha llegado tarde alguna vez por un atasco?', answer: 'si', why: 'Pregunta negativa → todos hemos llegado tarde alguna vez.' },
            { text: '¿Acaso alguien ha propuesto quitar los autobuses?', answer: 'no', why: 'Acaso → nadie lo ha propuesto.' },
            { text: 'Vienes a la final del viernes, ¿no?', answer: 'real', why: '¿no? al final pide confirmación: espera respuesta.' },
            { text: '¿Cómo no vamos a apoyar el transporte público?', answer: 'si', why: '¿Cómo no…? → claro que lo apoyamos.' },
            { text: '¿Para qué sirve un parque al que no se puede llegar a pie?', answer: 'no', why: '¿Para qué…? → no sirve para nada.' },
            { text: 'La réplica dura cuatro minutos, ¿verdad?', answer: 'real', why: 'Coletilla ¿verdad?: el hablante comprueba un dato.' },
          ] },
        ] },
        { title: 'Elige la forma · Choose the form', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', items: [
            { context: 'Pablo quiere decir que nadie quiere más ruido. (Pablo means nobody wants more noise.)', prompt: '«¿___ quiere vivir con más ruido?»', options: ['Acaso no', 'Quién', 'Quién no'], answer: 1, why: 'Para afirmar «nadie», la pregunta retórica es afirmativa: «¿Quién quiere…?». Con «no» afirmaría «todos».', en: 'To assert “nobody”, the rhetorical question is affirmative.' },
            { prompt: '—¿Vas a ir a la final? —«¿___ voy a ir? ¡Llevo un año preparándola!»', options: ['Cómo', 'Cómo no', 'Para qué'], answer: 1, why: '«¿Cómo no voy a ir?» = claro que voy. «¿Cómo voy a ir?» diría que no puede.', en: 'Of course I’m going: cómo no voy a…' },
            { prompt: '«¡___ hubiera tenido una entrenadora así a los veinte años!»', options: ['Quien', 'Quién', 'Ojalá quién'], answer: 1, why: 'Quién exclamativo lleva tilde; con pluscuamperfecto de subjuntivo expresa un deseo sobre el pasado, ya imposible.', en: 'If only I had had a coach like that at twenty: exclamative quién, with an accent.' },
            { context: 'Reseña de una cafetería en la web del club. (A café review on the club website.)', prompt: '«¡___ terraza más agradable!»', options: ['Qué', 'Qué una', 'Cuánta'], answer: 0, why: 'Qué + nombre + más + adjetivo, sin artículo; «cuánta» pondera cantidad, no cualidad.', en: 'What a pleasant terrace: no article after qué.' },
            { prompt: 'El rival: «Perderemos tiempo». Pablo: «¿___? Lo que ganamos es salud».', options: ['Y qué', 'Y que', 'Qué más'], answer: 0, why: '«¿Y qué?» quita importancia al argumento; qué es tónico y lleva tilde.', en: 'So what? Stressed qué, with an accent.' },
          ] },
        ] },
        { title: 'Antes de publicar · Before posting', blocks: [
          { kind: 'fix', items: [
            { sentence: '¡Que ciudad tan ruidosa!', ok: false, options: ['¡Qué ciudad tan ruidosa!', '¡Qué ciudad tan ruidosa?', '¡Qué una ciudad tan ruidosa!'], answer: 0, why: 'El qué exclamativo lleva tilde; los signos se corresponden (¡…!) y no hay artículo.' },
            { sentence: 'Cuánta gente se ha apuntado al torneo!', ok: false, options: ['¡Cuánta gente se ha apuntado al torneo!', 'Cuánta gente se ha apuntado al torneo!!', '¡Cuanta gente se ha apuntado al torneo!'], answer: 0, why: 'Falta el signo de apertura, obligatorio en español; cuánta mantiene la tilde.' },
            { sentence: '¡Quién pudiera tener tu calma antes de un debate!', ok: true, why: 'Correcta: quién + imperfecto de subjuntivo para un deseo que se ve lejano.' },
            { sentence: '¡Cuántos tráfico hay a estas horas!', ok: false, options: ['¡Cuánto tráfico hay a estas horas!', '¡Cuántas tráfico hay a estas horas!', '¡Cuánto de tráfico hay a estas horas!'], answer: 0, why: 'Cuánto concuerda con el nombre: «tráfico» es masculino singular.' },
            { sentence: '¡Lo cara que está la vivienda en el centro!', ok: true, why: 'Correcta: lo + adjetivo concordado con «la vivienda» + que.' },
          ] },
        ] },
        { title: 'El chat de Elena y Valeria · Elena and Valeria’s chat', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Después del ensayo · After the rehearsal', lines: [
            { who: 'Elena', text: 'Valeria, ¡___ has mejorado en la réplica! Hoy no te reconocía.', options: ['qué', 'cómo', 'como'], answer: 1, why: '¡Cómo + verbo! pondera la intensidad del cambio, con tilde. «¡Qué has mejorado!» no funciona con un verbo solo.' },
            { who: 'Valeria', text: 'Gracias. El cierre sigue siendo de un minuto, ___', options: ['¿no?', '¿acaso?', '¿y qué?'], answer: 0, why: 'Valeria comprueba un dato: la coletilla ¿no? pide confirmación real.' },
            { who: 'Elena', text: 'Sí, de uno. Y no metas más cifras: ¿___ sirven veinte datos si el jurado no recuerda ninguno?', options: ['para qué', 'por qué', 'cómo no'], answer: 0, why: '«¿Para qué sirven…?» es retórica: no sirven de nada.' },
            { who: 'Valeria', text: 'Tienes razón. ¡___ tuviera tu experiencia!', options: ['Quién', 'Qué', 'Cuánto'], answer: 0, why: 'Deseo: quién + imperfecto de subjuntivo.' },
            { who: 'Elena', text: 'La tendrás. Ahora, a dormir.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['¿Quién', 'no', 'querría', 'vivir', 'sin', 'ruido?'], accept: ['¿Quién no querría vivir sin ruido?'], en: 'Who wouldn’t want to live without noise? Everyone would.' },
            { tiles: ['¡Qué', 'plaza', 'tan', 'bonita', 'han', 'hecho!'], accept: ['¡Qué plaza tan bonita han hecho!'], en: 'What a lovely square they’ve made! The subject comes after the verb.' },
            { tiles: ['¿Para', 'qué', 'vamos', 'a', 'ampliar', 'la', 'carretera?'], accept: ['¿Para qué vamos a ampliar la carretera?'], en: 'What’s the point of widening the road? (There is none.)' },
          ] },
        ] },
        { title: 'Dilo con más fuerza · Say it with more force', blocks: [
          { kind: 'rewrite', title: 'De afirmación neutra a retórica o exclamativa · From neutral to persuasive', items: [
            { prompt: 'Todo el mundo querría trabajar menos horas.', instruction: 'Pregunta retórica con «¿Quién no…?». (Use ¿Quién no…?)', accept: ['¿Quién no querría trabajar menos horas?'] },
            { prompt: 'Yo nunca he dicho que fuera fácil.', instruction: 'Pregunta retórica con «¿Acaso…?». (Use ¿Acaso…?)', accept: ['¿Acaso he dicho yo que fuera fácil?', '¿Acaso he dicho que fuera fácil?', '¿Acaso dije yo que fuera fácil?', '¿Acaso dije que fuera fácil?', '¿Acaso he dicho yo alguna vez que fuera fácil?', '¿Acaso he dicho alguna vez que fuera fácil?'] },
            { prompt: 'Claro que voy a votar.', instruction: 'Pregunta retórica con «¿Cómo no…?». (Use ¿Cómo no…?)', accept: ['¿Cómo no voy a votar?'] },
            { prompt: 'La ciudad ha cambiado muchísimo.', instruction: 'Exclamativa con «¡Cómo…!». (Use ¡Cómo…!)', accept: ['¡Cómo ha cambiado la ciudad!'] },
            { prompt: 'Todo está carísimo.', instruction: 'Exclamativa con «¡Lo… que…!» y el adjetivo «caro». (Use ¡Lo caro que…!)', accept: ['¡Lo caro que está todo!'] },
            { prompt: 'Me gustaría hablar cinco idiomas, pero lo veo imposible.', instruction: 'Exclamativa de deseo con «¡Quién…!». (A wish with ¡Quién…!)', accept: ['¡Quién pudiera hablar cinco idiomas!', '¡Quién hablara cinco idiomas!', '¡Quién supiera hablar cinco idiomas!'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno lee en voz alta sus respuestas con la entonación adecuada (la retórica, bajando; la exclamativa, con fuerza en la palabra exclamativa) y tú dices si suena a pregunta real o a afirmación.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El cierre de Valeria', coach: 'Primero la idea general, luego los detalles. First the gist, then the details.',
      steps: [
        { title: 'Discurso de cierre en la final · Closing speech at the final', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada pregunta retórica y dice qué afirma, y cada exclamativa y qué expresa. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada pregunta retórica (¿qué afirma?) y cada exclamativa (¿qué expresa?).' } },
          { kind: 'listen', title: 'Un minuto para convencer', channel: 'TORNEO INTERUNIVERSITARIO DE DEBATE · FINAL · DISCURSO DE CIERRE · VALERIA MONTES', src: '/audio/grammar-live/496.mp3',
            before: 'Valeria tiene un minuto para cerrar la final. ¿Qué argumentos del rival crees que va a contestar, y cómo? (Valeria has one minute to close the final. Which of the other team’s arguments will she answer, and how?)',
            gist: { prompt: '¿Qué hace Valeria en su discurso?', options: ['Reconoce que el otro equipo tiene razón.', 'Presenta cifras nuevas sobre contaminación.', 'Responde a los argumentos del rival y pide al jurado que mire lo que ya funciona.'], answer: 2, why: 'Contesta lo de los comercios y los diez minutos, y cierra: «les pido que miren lo que ya funciona».', en: 'What does Valeria do in her speech?' },
            details: [
              { prompt: '¿Qué contesta al argumento de los comercios?', options: ['Que el comercio no le importa.', 'Que los comercios pueden mudarse.', 'Que compran las personas, no los coches, y las personas caminan.'], answer: 2, why: '«¿Acaso compran los coches? Compran las personas, y las personas caminan».', en: 'How does she answer the argument about the shops?' },
              { prompt: '¿Qué pasó con la calle Mayor?', options: ['La volvieron a abrir a los coches.', 'Cerraron casi todas las tiendas.', 'Los comerciantes protestaron y hoy no cambiarían la calle peatonal por nada.'], answer: 2, why: '«Hace diez años… protestaban contra la peatonalización; hoy no la cambiarían por nada. ¡Quién lo hubiera dicho!».', en: 'What happened to the high street?' },
              { prompt: '¿Qué quiere decir su «¿Y qué?»?', options: ['Que pregunta qué opina el jurado.', 'Que no entiende el argumento.', 'Que diez minutos más no pesan frente a la salud de toda una ciudad.'], answer: 2, why: 'Lo explica enseguida: «¿Qué son diez minutos al lado de la salud de una ciudad entera?».', en: 'What does her “So what?” mean?' },
              { prompt: '¿Qué ocurre en Bogotá los domingos?', options: ['Los autobuses son gratis.', 'Se cierran avenidas enteras para las bicicletas.', 'Hay mercados en todas las plazas.'], answer: 1, why: '«Los domingos se cierran avenidas enteras para las bicicletas».', en: 'What happens in Bogotá on Sundays?' },
            ],
            transcript: 'Señoras y señores del jurado: llevamos una hora hablando de coches, así que seré breve. [[¿Quién no querría|blue]] salir de casa por la mañana y oír pájaros en lugar de bocinas? Nuestros rivales dicen que cerrar el centro arruinará a los comercios. [[¿Acaso compran los coches?|blue]] Compran las personas, y las personas caminan. Hace diez años, los comerciantes de nuestra calle Mayor protestaban contra la peatonalización; hoy no la cambiarían por nada. [[¡Quién lo hubiera dicho!|violet]] Nos dicen también que algunos tardarán diez minutos más en llegar al trabajo. [[¿Y qué?|blue]] ¿Qué son diez minutos al lado de la salud de una ciudad entera? Piénsenlo un momento: [[¡cuántas horas|orange]] perdemos cada semana en un atasco, y [[lo caro que|orange]] nos sale tener un coche que pasa el día quieto! Yo soy de Bogotá, donde los domingos se cierran avenidas enteras para las bicicletas. [[¡Cómo cambia|orange]] la ciudad esas mañanas! Las familias pasean, los vecinos se saludan y los niños aprenden a montar en bicicleta en mitad de la calle. No les pido que imaginen un sueño; les pido que miren lo que ya funciona. Muchas gracias.',
            reply: { teacher: 'Tú eres el equipo rival. Tu alumno contesta al discurso con un audio breve: rebate un argumento de Valeria con una pregunta retórica («¿Acaso…?», «¿Quién no…?») y cierra con una exclamativa.', self: 'Eres del equipo rival: graba una réplica de 40 segundos. Rebate un argumento de Valeria con una pregunta retórica («¿Acaso…?», «¿Quién no…?») y cierra con una exclamativa.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Convencer en voz alta', coach: 'Pregunta para afirmar; exclama con medida. Ask to assert; exclaim with care.',
      steps: [
        { title: 'Tu turno en el debate · Your turn in the debate', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las de seguimiento. Cuando tu alumno usa una pregunta retórica, tú dices qué afirma; si no se entiende, tu alumno la reformula.', self: 'Lee la situación y responde en voz alta. En cada respuesta, usa al menos una pregunta retórica y una exclamativa, y comprueba qué afirma cada pregunta.' } },
          { kind: 'talk', cards: [
            { q: 'Moción rápida: «Las tareas para casa deberían desaparecer en primaria». Elige una postura y defiéndela un minuto. · Pick a side on homework in primary school and defend it for a minute.', followUps: ['¿Qué argumento del otro lado te parece más débil? (Weakest argument on the other side?)', '¿Cómo lo rebatirías con «¿Acaso…?»? (Rebut it with ¿Acaso…?)', '¿Con qué frase cerrarías? (Your closing line?)'], phrases: ['[[¿Quién no|blue]] recuerda…?', '[[¿Acaso|blue]]…?', '[[¿Para qué|blue]]…?', '[[¡Cuántas|orange]] tardes…!'], hint: 'Dos preguntas retóricas con polaridad distinta: una negativa (= todos) y una afirmativa (= nadie).', example: '¿Quién no recuerda alguna tarde llorando delante de un cuaderno? ¿Acaso aprende más un niño de siete años por copiar veinte veces la misma frase? ¿Para qué cansarlos si al día siguiente lo han olvidado? ¡Cuántas tardes de juego perdidas! Que jueguen, que lean lo que les guste y que aprendan en clase.' },
            { q: 'Tu rival dice cosas que no te convencen: «Es más caro», «Siempre se ha hecho así», «Es incómodo». Contesta cada una. · Answer three weak arguments.', followUps: ['¿Cuál contestarías con «¿Y qué?»? (Which one with ¿Y qué?)', '¿Y con «¿Qué más da…?»? (Which with ¿Qué más da…?)', '¿Cómo justificas después tu respuesta? (How do you back it up?)'], phrases: ['[[¿Y qué?|blue]] Lo importante es…', '[[¿Qué más da|blue]]…?', '[[¿A quién le importa|blue]]…?', '[[¿Es que|blue]] no…?'], hint: 'Después de un «¿Y qué?», da siempre la razón: si no, suena solo desafiante.', example: '¿Que siempre se ha hecho así? ¿Y qué? También se fumaba en los aviones. ¿Que es más caro? ¿Qué más da pagar un poco más si dura el doble? ¿Es que no ves lo que nos ahorramos a largo plazo?' },
            { q: 'Haz una reseña oral entusiasta (o decepcionada) de un lugar que hayas visitado: un barrio, un restaurante, un museo. · Review a place out loud, with feeling.', followUps: ['¿Qué te sorprendió más? (What surprised you most?)', '¿Volverías? (Would you go back?)', '¿Qué cambiarías? (What would you change?)'], phrases: ['[[¡Qué… tan / más…!|orange]]', '[[¡Cuánta / cuántos…!|orange]]', '[[¡Cómo…!|orange]]', '[[¡Lo… que…!|orange]]'], hint: 'Cuatro tipos distintos de exclamativa; cuidado con la concordancia de cuánto y del adjetivo en lo… que.', example: 'Fui al mercado del puerto el sábado. ¡Qué mercado tan vivo! ¡Cuánta gente, cuántos colores! ¡Cómo gritaban los pescaderos! Eso sí, ¡lo caro que estaba el pescado! ¿Volver? ¿Cómo no voy a volver?' },
            { q: 'Deseos y sorpresas: cuenta algo que te gustaría y ves lejano, y algo que salió de forma inesperada. · A wish that feels out of reach, and a surprising outcome.', followUps: ['¿Por qué lo ves tan lejano? (Why does it feel so far off?)', '¿Quién se sorprendió más? (Who was most surprised?)'], phrases: ['[[¡Quién pudiera|violet]]…!', '[[¡Quién tuviera|violet]]…!', '[[¡Quién lo hubiera dicho!|violet]]', '[[¿Quién no|blue]]…?'], hint: 'Quién + imperfecto de subjuntivo para el deseo; ¡Quién lo hubiera dicho! para la sorpresa.', example: '¡Quién pudiera vivir tres meses en una isla sin móvil! Con mi trabajo, imposible. En cambio, mi hermano, que odiaba correr, acaba de terminar su primera maratón. ¡Quién lo hubiera dicho! ¿Quién no se sorprendería?' },
            { q: '¿Qué exclamativas coloquiales oyes en tu entorno: «¡Menudo…!», «¡Qué de…!», «¡Si será…!»? ¿Funcionan igual las preguntas retóricas en tu lengua? · Colloquial exclamatives where you live, and rhetorical questions in your language.', followUps: ['¿Usarías «menudo» en una presentación de trabajo? (In a work presentation?)', '¿Tu lengua invierte también la polaridad? (Does your language reverse polarity too?)', '¿Cómo suena la entonación? (What about intonation?)'], phrases: ['En … se oye mucho [[¡Menudo|violet]]…', '[[¡Qué de|violet]]… me suena a…', 'En mi lengua, [[¿Quién no|blue]]…? también…'], hint: 'Habla de variedades sin juzgar: «en…, es frecuente…», «a mí me suena coloquial».', example: 'En la serie española que veo dicen todo el tiempo «¡menudo lío!», pero en una reunión de trabajo yo diría «¡qué lío tan grande!» o nada. En inglés también existe «Who wouldn’t want…?» con el mismo sentido: la pregunta negativa afirma que todos querrían.', next: 'En la clase 197 trabajarás la puntuación de incisos, aclaraciones y conectores, que también ordena la voz de un texto escrito.' },
          ], swap: { teacher: 'Al final cambian los papeles: tú dices tres afirmaciones planas sobre la ciudad («Hay mucho tráfico», «Todo el mundo quiere parques») y tu alumno las convierte en preguntas retóricas o exclamativas; tú dices qué afirma cada una.', self: 'Ahora cambia de papel: escribe tres afirmaciones planas sobre tu ciudad y conviértelas en voz alta en una retórica negativa, una con «¿Acaso…?» y una exclamativa.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una columna que convence', coach: 'Retórica con medida, signos completos. Measured rhetoric, full punctuation.',
      steps: [
        { title: 'Tu columna · Your column', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada pregunta retórica (¿qué afirma?, ¿se entiende sin respuesta?) y cada exclamativa (tildes, signos de apertura, concordancia). Después tu alumno la lee en voz alta con la entonación adecuada.', self: 'Escribe tu columna y toca «Revisar mi texto». Después comprueba qué afirma cada pregunta retórica y revisa tildes, signos de apertura y concordancias.' } },
          { kind: 'write', title: 'Columna de opinión para el blog del club de debate · An opinion column for the debate club blog', situation: 'Elena publica cada semana en el blog del club una columna de opinión sobre un tema de debate. Esta semana te toca a ti: elige una moción (por ejemplo, la semana laboral de cuatro días, prohibir los móviles en clase o cerrar el centro al coche) y defiende tu postura ante lectores universitarios. (Write an opinion column for the debate club blog defending your side of a motion; the readers are university students, so the register is careful but lively.)', task: [
            'Presenta la moción y tu postura en la primera frase. (State the motion and your position.)',
            'Usa al menos dos preguntas retóricas de tipos distintos (¿Quién no…?, ¿Acaso…?, ¿Para qué…?, ¿Y qué?) cuyo sentido se deduzca sin respuesta. (Two different rhetorical questions.)',
            'Usa al menos dos exclamativas de tipos distintos (¡Qué… tan…!, ¡Cuánto…!, ¡Cómo…!, ¡Lo… que…!, ¡Quién pudiera…!). (Two different exclamatives.)',
            'Escribe todos los signos de apertura y las tildes de qué, cuánto, cómo y quién. (Opening marks and accents.)',
            'Evita las exclamativas muy coloquiales (¡Menudo…!, ¡Qué de…!, ¡Si será…!): es un texto publicado. (Avoid very colloquial exclamatives.)',
          ], starters: ['Esta semana defiendo que…', '¿Quién no ha…?', '¿Acaso…?', '¡Cuánto tiempo…!', 'Se dice que…, ¿y qué?'], words: ['¿Quién no…?', '¿Acaso…?', '¿Para qué…?', '¿Qué más da…?', '¿Y qué?', '¡Qué… tan…!', '¡Cuánto / cuánta…!', '¡Cómo…!', '¡Lo… que…!', '¡Quién pudiera…!'],
            model: 'Esta semana defiendo que los móviles deberían quedarse en la mochila durante las clases. ¿Quién no ha intentado alguna vez seguir una explicación mientras el teléfono vibra sobre la mesa? Nos dicen que el móvil es una herramienta de aprendizaje. ¿Acaso lo usamos para aprender cuando nadie nos mira? Seamos sinceros: lo usamos para mirar fotos, contestar mensajes y comprobar, por enésima vez, que no ha pasado nada. ¡Cuánto tiempo perdemos así cada día! Otros dirán que prohibir es anticuado. ¿Y qué? También es anticuado pedir silencio en una biblioteca, y nadie lo discute. El año pasado, mi profesora de Historia nos pidió que dejáramos los móviles en una caja durante sus clases. Las primeras semanas protestamos; en junio, nadie quería volver a tenerlos encima. ¡Cómo cambió el ambiente del aula! Por fin hablábamos entre nosotros. ¿Para qué queremos estar conectados con todo el mundo si no escuchamos a quien tenemos al lado?',
            minWords: 140,
            checks: [
              { label: 'Una pregunta retórica (¿Quién no…?, ¿Acaso…?, ¿Para qué…?, ¿Y qué?…)', pattern: '¿\\s*(?:(?:y|pero)\\s+)?(?:acaso|quién\\s+no|cómo\\s+no|para\\s+qué|a\\s+quién|qué\\s+más\\s+da|y\\s+qué|es\\s+que)(?!\\p{L})', tip: 'Escribe, por ejemplo: «¿Quién no ha intentado alguna vez…?» o «¿Acaso…?».' },
              { label: 'Una exclamativa con su signo de apertura (¡Qué…!, ¡Cuánto…!, ¡Cómo…!, ¡Lo… que…!, ¡Quién…!)', pattern: '¡\\s*(?:qué|cuánt[oa]s?|cómo|quién|lo\\s+\\p{L}+\\s+que)(?!\\p{L})', tip: 'Escribe, por ejemplo: «¡Cuánto tiempo perdemos así!».' },
              { label: 'Dos preguntas con signo de apertura', pattern: '¿[^?]+\\?[\\s\\S]*¿[^?]+\\?', tip: 'Abre cada pregunta con ¿, también si empieza a mitad de la oración.' },
            ],
            warnings: [
              { pattern: '[¡¿]\\s*(?:quien|cuant[oa]s?)(?!\\p{L})', why: 'Quién y cuánto llevan tilde cuando preguntan o exclaman.' },
              { pattern: '¡\\s*que\\s+\\p{L}+\\s+(?:tan|más)(?!\\p{L})', why: 'En «¡Qué + nombre + tan / más…!», qué lleva tilde.' },
              { pattern: '(?<!\\p{L})qué\\s+una?\\s+\\p{L}+\\s+(?:tan|más)(?!\\p{L})', why: 'En la exclamativa no hay artículo: «¡Qué idea tan buena!».' },
              { pattern: '(?<!a\\s)(?<!\\p{L})(?:menud[oa]s?|si\\s+será)(?!\\p{L})|¡\\s*qué\\s+de(?!\\p{L})', why: 'Es coloquial: en una columna publicada, mejor «¡Cuánto…!» o «¡Qué… tan…!».' },
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
            { tone: 'blue', label: 'PREGUNTA RETÓRICA', formula: 'afirmativa → afirma «no / nadie» · negativa → afirma «sí / todos» · ¿Acaso…? → no · ¿Cómo no voy a…? → claro que sí', example: '¿Quién no querría vivir mejor? · ¿Acaso te he pedido algo?', caption: 'afirma con la polaridad al revés', en: 'A rhetorical question states something with reversed polarity: affirmative questions deny, negative questions affirm; acaso leans towards “no”.' },
            { tone: 'teal', label: 'PREGUNTA REAL', formula: '… , ¿no? · … , ¿verdad? (la voz sube)', example: 'La final es el viernes, ¿no?', caption: 'pide confirmación y espera respuesta', en: 'Tags such as ¿no? and ¿verdad? ask for real confirmation and expect an answer.' },
            { tone: 'orange', label: 'EXCLAMATIVA DE GRADO', formula: '¡Qué + N + tan / más + adj.! · ¡Cuánto/a/os/as + N! · ¡Cómo + verbo! · ¡Lo + adj. + que…!', example: '¡Cuánta gente! ¡Cómo ha cambiado el barrio!', caption: 'asombro ante un grado o una cantidad', en: 'Exclamatives of degree: no article after qué, cuánto agrees with the noun, cómo goes with a verb, and the subject comes after the verb.' },
            { tone: 'violet', label: 'DESEO, SORPRESA, COLOQUIAL', formula: '¡Quién pudiera…! · ¡Quién lo hubiera dicho! · ¡Menudo…! ¡Qué de…! ¡Si será…! (coloquiales)', example: '¡Quién pudiera ir andando al trabajo!', caption: 'deseo lejano, sorpresa; registro informal', en: 'Quién + imperfect subjunctive for a wish that seems out of reach, ¡Quién lo hubiera dicho! for surprise; menudo, qué de and si será are colloquial.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de lanzar una pregunta retórica, pregúntate **qué afirma**: si quieres decir «nadie», la pregunta va **sin «no»**; si quieres decir «todos», **con «no»**. Y en la escritura, **tilde** en qué, cuánto, cómo y quién, y **signo de apertura** donde empieza la pregunta o la exclamación. Una retórica bien puesta convence; diez seguidas cansan.', en: 'Before asking a rhetorical question, check what it actually states: no “no” to mean nobody, with “no” to mean everyone. In writing, accent the exclamative or interrogative word and open the mark where the question begins. One well-placed rhetorical question persuades; ten in a row wear the reader out.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Para decir que todos lo han soñado: «¿___ ha soñado alguna vez con dejarlo todo?»', options: ['Quien no', 'Quién', 'Quién no'], answer: 2, why: 'Pregunta negativa → afirma «todos»; quién interrogativo lleva tilde.', en: 'Who hasn’t dreamt of dropping everything? Everyone has.' },
            { prompt: '«¿Acaso te he mentido alguna vez?» significa…', options: ['Nunca te he mentido.', 'Te miento a veces.', 'Quizá te he mentido alguna vez.'], answer: 0, why: '«Acaso» orienta hacia el «no»: nunca te he mentido.', en: 'Have I ever lied to you? (I never have.)' },
            { prompt: '«¡___ gente había en la plaza!»', options: ['Cuántas', 'Cuánta', 'Cuánto'], answer: 1, why: 'Cuánta concuerda con «gente».', en: 'How many people there were in the square!' },
            { prompt: '«Llego cinco minutos tarde. ¿___? El debate todavía no ha empezado».', options: ['Cómo no', 'Y qué', 'Para qué'], answer: 1, why: '«¿Y qué?» quita importancia a lo dicho y luego se justifica.', en: 'So what? The debate hasn’t started yet.' },
            { prompt: '«¡___ tener veinte años otra vez!»', options: ['Quién puede', 'Quién pudiera', 'Quien pudiera'], answer: 1, why: 'Deseo lejano: quién (con tilde) + imperfecto de subjuntivo.', en: 'If only I could be twenty again!' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Lima, Perú. **Gabriela Quispe** escribe la reseña de un restaurante en una web de viajes. Su borrador es correcto pero plano; ayúdala a darle vida con exclamativas y una pregunta retórica.', en: 'Lima, Peru. Gabriela is writing a restaurant review for a travel website. Her draft is correct but flat; help her bring it to life with exclamatives and a rhetorical question.' },
          { kind: 'rewrite', title: 'La reseña de Gabriela · Gabriela’s review', items: [
            { prompt: 'El ceviche estaba muy bueno.', instruction: '«¡Qué + nombre + tan / más + adjetivo!» con «bueno». (Use ¡Qué… tan / más…!)', accept: ['¡Qué ceviche tan bueno!', '¡Qué ceviche más bueno!'] },
            { prompt: 'Esperamos muchísimo para pagar.', instruction: 'Exclamativa con «¡Cuánto…!». (Use ¡Cuánto…!)', accept: ['¡Cuánto esperamos para pagar!', '¡Cuánto tuvimos que esperar para pagar!'] },
            { prompt: 'Todo el mundo volvería a un sitio así.', instruction: 'Pregunta retórica con «¿Quién no…?». (Use ¿Quién no…?)', accept: ['¿Quién no volvería a un sitio así?'] },
          ] },
        ] },
        { title: 'Ampliación: «nada» sin «no» y preguntas de eco · Extension', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: retórica de nivel experto. Optional: expert-level rhetoric.', blocks: [
          { kind: 'lead', text: 'Como la pregunta retórica que niega equivale a una oración negativa, admite **palabras de polaridad negativa sin «no»**: «¿**Acaso** he dicho yo **nada**?» (= no he dicho nada), «¿Has visto **en tu vida** una cola igual?» (= nunca has visto). Es un rasgo muy expresivo, frecuente en la lengua culta y coloquial. Por otro lado, **¿Cómo que…?** repite con sorpresa o protesta lo que ha dicho el otro: «—Se suspende la final. —**¡¿Cómo que** se suspende?!».', en: 'Because a rhetorical question that denies works like a negative sentence, it can contain negative words without no: “Did I ever say anything?” (I said nothing); “Have you ever in your life seen such a queue?” (never). ¿Cómo que…? echoes what someone has just said, with surprise or protest, and is often written with both marks.' },
          { kind: 'choice', title: 'Elige la forma · Choose the form', items: [
            { prompt: 'Pablo, ofendido: «¿Acaso he dicho yo ___ contra los ciclistas?»', options: ['nada', 'ninguno', 'nadie'], answer: 0, why: 'La retórica con «acaso» niega: admite «nada» sin «no» (= no he dicho nada contra ellos).', en: 'Have I said anything against cyclists? (I haven’t.)' },
            { prompt: '«¿Has visto ___ una cola igual?» (= nunca has visto una cola así)', options: ['alguna vez no', 'nunca no', 'en tu vida'], answer: 2, why: '«En tu vida» es de polaridad negativa: en la retórica equivale a «nunca».', en: 'Have you ever in your life seen a queue like that?' },
            { prompt: '¿Cómo se escribe una protesta que es pregunta y exclamación a la vez?', options: ['¡¿Cómo que se suspende la final?!', '¿Cómo que se suspende la final!', '¡Cómo que se suspende la final?'], answer: 0, why: 'Se abren y se cierran los dos signos en orden simétrico: ¡¿…?! (o ¿¡…!?). Cómo lleva tilde.', en: 'Both marks open and close symmetrically.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tú dices tres noticias sorprendentes («Han cerrado la biblioteca») y tu alumno reacciona con «¡¿Cómo que…?!» y una retórica con «¿Acaso…?».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 197 · Puntuación de incisos, aclaraciones y conectores', text: 'Hoy has visto que los signos ¡ y ¿ se abren donde empieza la pregunta o la exclamación, a veces a mitad de oración. El paso natural es dominar el resto de la **puntuación que organiza un texto**: las comas, rayas y paréntesis de los incisos y aclaraciones, y la puntuación de los conectores. Así tu columna convencerá también por su claridad.', en: 'Today you saw that opening marks go where the question or exclamation begins, sometimes mid-sentence. The natural next step is the rest of the punctuation that organises a text: commas, dashes and brackets around asides and clarifications, and punctuation with connectors, so your writing persuades through clarity as well.', href: '/gramatica/puntuacion-de-incisos-aclaraciones-y-conectores', label: 'Ir a la clase 197' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué Valeria dice “¿Quién no querría…?” para decir que todos querrían, y por qué escribe “¡Cómo cambia!” con tilde?». Respuesta esperada: la pregunta negativa afirma lo positivo; cómo exclamativo es tónico y lleva tilde.' },
        ] },
      ],
    },
  ],
};
