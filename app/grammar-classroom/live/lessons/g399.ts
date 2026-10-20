import type { LiveLesson } from '../types';

/**
 * Lesson 399 · B1 · Finales: para que, a fin de que (course unit G099).
 * Builds on G026 (porque / para + infinitive), G088 (present subjunctive forms),
 * G095 (same subject → infinitive, different subject → que + subjunctive) and
 * G098 (cuando + subjunctive). Content: para + infinitive (same subject) vs
 * para que + present subjunctive (different subject); ¿para qué…? + indicative
 * in questions (direct and indirect); ir / venir / salir / bajar + a + infinitive
 * after verbs of movement (vengo a ayudarte); formal purpose connectors a fin de
 * (que), con el fin de (que), con el objetivo de + infinitive, and de modo que /
 * de manera que + subjunctive with a purpose meaning (with indicative they mean a
 * consequence, taught in G116). Por / para and porque only as a reminder (G026,
 * G105). Past purpose clauses (para que vinieran) only for recognition in the
 * Ampliación (imperfect subjunctive is G128, B2).
 * Scene: the community garden «La Semilla» prepares its open day on Saturday.
 * Marina Ferrer, the coordinator, talks to Gabriel Ríos, a new volunteer (tú).
 * In the voice message Marina (Chilean voice, ustedes) briefs the volunteers;
 * in Escribir the learner writes Marina's formal request to the district board.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 399,
  level: 'B1',
  title: 'Finales: para que, a fin de que',
  subtitle: 'Explicar para qué haces algo con «para» + infinitivo o «para que» + subjuntivo, y usar «a fin de que» en textos formales.',
  legend: [
    { tone: 'teal', label: 'MISMO SUJETO · para + infinitivo (I do it, I get it)' },
    { tone: 'orange', label: 'OTRO SUJETO · para que + subjuntivo (I do it so someone else…)' },
    { tone: 'violet', label: 'FORMAL · a fin de (que), con el fin de (que), de modo que + subjuntivo' },
    { tone: 'blue', label: 'MOVIMIENTO · ir / venir / salir + a + infinitivo' },
  ],
  optionNotes: {
    'para que gastemos': 'Si el sujeto es el mismo en las dos partes (nosotros regamos, nosotros gastamos), se usa el infinitivo: para gastar.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Para qué lo haces?', coach: '¿Quién consigue el objetivo? Who gets the goal?',
      steps: [
        { title: 'El huerto del barrio · The neighbourhood garden', blocks: [
          { kind: 'lead', text: 'Marina Ferrer coordina el huerto comunitario La Semilla. El sábado hay una jornada de puertas abiertas y Gabriel, un voluntario nuevo, viene a ayudar. Marina explica para qué hace cada cosa: «Riego temprano **para gastar** menos agua». «Pongo carteles **para que** los vecinos **sepan** qué hacemos». Hoy aprendes a decir el objetivo de una acción.', en: 'Marina Ferrer runs the La Semilla community garden. On Saturday there is an open day, and Gabriel, a new volunteer, is coming to help. Marina explains what each thing is for: “I water early to use less water.” “I put up posters so that the neighbours know what we do.” Today you learn to say the purpose of an action.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Marina y tu alumno repite. Después tu alumno dice en cada frase quién consigue el objetivo: ¿Marina u otras personas?', self: 'Lee las dos frases en voz alta. En cada una, ¿quién consigue el objetivo: Marina u otras personas? (Who achieves the goal in each sentence?)' } },
          { kind: 'compare', title: 'Dos objetivos de Marina · Two of Marina’s goals', columns: [
            { tone: 'teal', label: 'MISMO SUJETO · para + infinitivo', sentence: 'Riego temprano [[para gastar|teal]] menos agua.', idea: 'Marina riega y Marina gasta menos. Un solo sujeto: infinitivo.', en: 'I water early to use less water. (Same person does both.)' },
            { tone: 'orange', label: 'OTRO SUJETO · para que + subjuntivo', sentence: 'Pongo carteles [[para que los vecinos sepan|orange]] qué hacemos.', idea: 'Marina pone los carteles, pero los que saben son los vecinos. Dos sujetos: que + subjuntivo.', en: 'I put up posters so that the neighbours know what we do. (Two different people.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Riego temprano para gastar menos agua», ¿quién gasta menos?', options: ['Gabriel.', 'Marina, la misma persona que riega.', 'Los vecinos.'], answer: 1, why: 'Con «para + infinitivo», el sujeto del infinitivo es normalmente el mismo que el del verbo principal: Marina.', en: 'In “Riego temprano para gastar menos agua”, who uses less?' },
            { prompt: 'En «Pongo carteles para que los vecinos sepan qué hacemos», el verbo «sepan» está en…', options: ['presente de subjuntivo.', 'infinitivo.', 'indicativo.'], answer: 0, why: 'Después de «para que» el verbo va siempre en subjuntivo: saber → sepan.', en: 'In this sentence, the verb “sepan” is in…' },
          ] },
        ] },
        { title: 'Para o para que · Para or para que', mascot: '/brand/mascot/studying.webp', coach: 'Un sujeto: infinitivo. Dos sujetos: que + subjuntivo.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'MISMO SUJETO · PARA + INFINITIVO', question: '¿La persona que actúa es la misma que consigue el objetivo?', en: 'Is the person who acts the same one who gets the goal?', formula: ['verbo + para + infinitivo', 'para + no + infinitivo', 'para + infinitivo + pronombre: para ayudarte, para verlo'],
            meaning: 'Cuando el sujeto es **el mismo** en las dos partes, el objetivo va en **infinitivo**. Ya lo usas desde la clase 026: «Estudio para trabajar». Los pronombres van pegados al final: «para ayudarte».',
            examples: [
              { es: 'Gabriel viene los sábados [[para aprender|teal]] a cultivar.', en: 'Gabriel comes on Saturdays to learn how to grow things.' },
              { es: 'Tapamos la tierra [[para no perder|teal]] humedad.', en: 'We cover the soil so as not to lose moisture.' },
              { es: 'Marina llama a don Ernesto [[para pedirle|teal]] semillas.', en: 'Marina calls don Ernesto to ask him for seeds.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'OTRO SUJETO · PARA QUE + SUBJUNTIVO', question: '¿Otra persona (o cosa) consigue el objetivo?', en: 'Does another person (or thing) get the goal?', formula: ['verbo en presente / futuro / imperativo + para que + presente de subjuntivo', 'para que + no + subjuntivo'],
            meaning: 'Cuando el objetivo lo consigue **otro sujeto**, usa **para que + subjuntivo**. Es el mismo contraste de la clase 095 («quiero salir» / «quiero que salgas»). Después de «para que» **nunca** va el indicativo: el objetivo todavía no es un hecho.',
            examples: [
              { es: 'Te explico el compost [[para que lo entiendas|orange]] bien.', en: 'I’ll explain compost to you so that you understand it well.' },
              { es: 'Regamos por la tarde [[para que las plantas no se sequen|orange]].', en: 'We water in the evening so that the plants don’t dry out.' },
              { es: 'Abre la puerta [[para que entren|orange]] los niños.', en: 'Open the gate so the children can come in.' },
            ] },
          { kind: 'table', title: 'Un sujeto o dos · One subject or two', head: ['MISMO SUJETO (para + infinitivo)', 'OTRO SUJETO (para que + subjuntivo)'], rows: [
            ['Vengo temprano [[para regar|teal]]. (I come early to water.)', 'Vengo temprano [[para que riegues|orange]] tú. (…so that you water.)'],
            ['Leo el manual [[para aprender|teal]]. (I read the manual to learn.)', 'Te doy el manual [[para que aprendas|orange]]. (…so that you learn.)'],
            ['Compramos guantes [[para trabajar|teal]] mejor. (to work better)', 'Compramos guantes [[para que los niños trabajen|orange]] seguros. (so that the kids work safely)'],
          ], note: 'Recuerda las formas (clase 088): saber → sepan, poder → puedan, ver → vean, tener → tengan, venir → vengan, ir → vayan.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Marina pone una sombrilla para que los voluntarios no ___ calor.', options: ['pasen', 'pasan', 'pasar'], answer: 0, why: 'Marina pone la sombrilla; los voluntarios pasan calor: otro sujeto, para que + subjuntivo.', en: 'Marina puts up a sunshade so the volunteers don’t get hot.' },
            { prompt: 'Gabriel compra un libro para ___ más sobre tomates.', options: ['saber', 'sabe', 'que sepa'], answer: 0, why: 'Gabriel compra y Gabriel sabe: mismo sujeto, para + infinitivo.', en: 'Gabriel buys a book to learn more about tomatoes.' },
            { prompt: 'Te dejo la llave para que ___ la caseta mañana.', options: ['abres', 'abrir', 'abras'], answer: 2, why: 'Yo dejo la llave, tú abres: para que + subjuntivo, abras.', en: 'I’m leaving you the key so that you can open the shed tomorrow.' },
          ] },
        ] },
        { title: 'Preguntar y moverse · Asking and moving', mascot: '/brand/mascot/standing.webp', coach: '¿Para qué…? pregunta. Vengo a… se mueve.', blocks: [
          { kind: 'concept', tone: 'neutral', label: '¿PARA QUÉ…? + INDICATIVO', question: '¿Preguntas por el objetivo?', en: 'Are you asking about the purpose?', formula: ['¿Para qué + indicativo?', 'No sé / Dime para qué + indicativo', 'Respuesta: para + infinitivo / para que + subjuntivo'],
            meaning: 'La pregunta **¿para qué…?** lleva el verbo en **indicativo**, como cualquier pregunta. El subjuntivo aparece solo en la **respuesta** con «para que».',
            examples: [
              { es: '¿Para qué **sirve** esta lona? — Para cubrir la tierra.', en: 'What is this tarp for? — To cover the soil.' },
              { es: '¿Para qué **quieres** tantas macetas? — Para que los niños planten flores.', en: 'What do you want so many pots for? — So the children can plant flowers.' },
              { es: 'Gabriel no sabe para qué **es** la caja verde.', en: 'Gabriel doesn’t know what the green box is for.' },
            ] },
          { kind: 'concept', tone: 'blue', label: 'MOVIMIENTO + A + INFINITIVO', question: '¿Vas, vienes o sales a un sitio para hacer algo?', en: 'Do you go, come or go out somewhere to do something?', formula: ['ir / venir / salir / bajar / subir / entrar + a + infinitivo', 'vengo a ayudarte · salgo a comprar · bajo a abrir'],
            meaning: 'Con los verbos de **movimiento**, el objetivo se dice normalmente con **a + infinitivo**. «Vengo para ayudarte» también es correcto, pero «vengo a ayudarte» es lo más natural. Lo que no es posible es el infinitivo sin preposición: «vengo ayudarte» es un error (en inglés no hay preposición: I come to help).',
            examples: [
              { es: 'Gabriel [[viene a ayudar|blue]] el sábado.', en: 'Gabriel is coming to help on Saturday.' },
              { es: 'Lucía [[sale a pegar|blue]] los carteles.', en: 'Lucía goes out to put up the posters.' },
              { es: '[[Bajo a abrir|blue]] la puerta. (I’ll go down to open the door.)', en: 'I’ll go down and open the door.' },
            ],
            note: 'Con «ir», el contexto decide: «Voy a regar» puede ser futuro (I’m going to water) o movimiento + objetivo (I’m going over there to water). Y ojo: «volver a + infinitivo» significa repetir (clase 109).' },
          { kind: 'tip', icon: '🔑', title: 'Porque o para que · Because or so that', text: '**Porque** explica la causa y va con **indicativo**: «Riego hoy porque **hace** calor». **Para que** explica el objetivo y va con **subjuntivo**: «Riego hoy para que las plantas no **sufran**». Son preguntas distintas: ¿por qué? / ¿para qué?', en: '“Porque” gives the cause and takes the indicative. “Para que” gives the purpose and takes the subjunctive. They answer different questions: why? / what for?' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Para qué ___ estas botellas vacías?', options: ['guardes', 'guardas', 'guardar'], answer: 1, why: 'Es una pregunta con «¿para qué?»: indicativo, guardas.', en: 'What are you keeping these empty bottles for?' },
            { prompt: 'Mañana vengo ___ las lechugas contigo.', options: ['plantar', 'para que plante', 'a plantar'], answer: 2, why: 'Verbo de movimiento (venir) + a + infinitivo. Sin «a» no es posible, y con el mismo sujeto no se usa «para que».', en: 'Tomorrow I’ll come and plant the lettuces with you.' },
            { prompt: 'No regamos hoy ___ llovió anoche.', options: ['para', 'para que', 'porque'], answer: 2, why: 'La lluvia es la causa, no el objetivo: porque + indicativo.', en: 'We’re not watering today because it rained last night.' },
          ] },
        ] },
        { title: 'Registro formal · Formal register', mascot: '/brand/mascot/speaking.webp', coach: 'En una carta: a fin de que. In a letter: a fin de que.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'FINALES FORMALES', question: '¿Escribes una carta, un informe o un aviso oficial?', en: 'Are you writing a letter, a report or an official notice?', formula: ['a fin de / con el fin de / con el objetivo de + infinitivo (mismo sujeto)', 'a fin de que / con el fin de que + subjuntivo (otro sujeto)', 'de modo que / de manera que + subjuntivo (= para que)'],
            meaning: 'En textos formales, en lugar de «para» se usan estas expresiones. La regla es **la misma**: mismo sujeto, infinitivo; otro sujeto, **que + subjuntivo**. «De modo que» y «de manera que» con subjuntivo dicen **cómo** haces algo para conseguir un objetivo.',
            examples: [
              { es: 'Le escribimos [[a fin de solicitar|violet]] una ayuda.', en: 'We are writing to you in order to request a grant.' },
              { es: 'Abriremos el huerto el sábado [[con el fin de que los vecinos conozcan|violet]] el proyecto.', en: 'We will open the garden on Saturday so that local residents can get to know the project.' },
              { es: 'Colocamos las mesas [[de manera que todos puedan|violet]] ver la demostración.', en: 'We arrange the tables so that everyone can see the demonstration.' },
            ] },
          { kind: 'table', title: 'De lo coloquial a lo formal · From informal to formal', head: ['Coloquial', 'Formal'], rows: [
            ['Escribo **para pedir** una ayuda.', 'Escribo **a fin de** / **con el fin de** / **con el objetivo de pedir** una ayuda.'],
            ['Lo enviamos **para que** ustedes lo **revisen**.', 'Lo enviamos **a fin de que** / **con el fin de que** ustedes lo **revisen**.'],
            ['Ponemos las sillas **para que** todos **vean** bien.', 'Ponemos las sillas **de modo que** / **de manera que** todos **vean** bien.'],
          ], note: 'Siempre con «de»: a fin **de** que, con el fin **de** que. Sin «de» es un error frecuente.' },
          { kind: 'tip', icon: '💡', title: '«De modo que» tiene dos caras · Two faces of «de modo que»', text: 'Con **subjuntivo** expresa un objetivo: «Habla alto **de modo que** todos te **oigan**» (so that everyone hears you). Con **indicativo** expresa una consecuencia: «Llovió mucho, **de modo que** no **regamos**» (so we didn’t water). La consecuencia la estudias en la clase 116.', en: 'With the subjunctive, “de modo que” expresses a purpose (so that). With the indicative it expresses a result (so, therefore). You study results in class 116.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Adjuntamos el presupuesto a fin de que ustedes lo ___.', options: ['estudiar', 'estudian', 'estudien'], answer: 2, why: '«A fin de que» = para que (formal): subjuntivo, estudien.', en: 'We attach the budget so that you can study it.' },
            { prompt: 'Nos reunimos el lunes con el objetivo de ___ los turnos.', options: ['organizar', 'que organicemos', 'organizamos'], answer: 0, why: 'Nosotros nos reunimos y nosotros organizamos: mismo sujeto, infinitivo.', en: 'We are meeting on Monday in order to organise the shifts.' },
            { prompt: 'Pon las plantas altas detrás, de manera que no ___ sombra a las pequeñas.', options: ['hacer', 'hagan', 'hacen'], answer: 1, why: 'Aquí «de manera que» dice el objetivo (para que): subjuntivo, hagan.', en: 'Put the tall plants at the back so that they don’t shade the small ones.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Uno o dos sujetos? ¿Pregunta o respuesta?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿cuántos sujetos hay? ¿es causa u objetivo? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿cuántos sujetos hay? ¿causa u objetivo? Toca para ver la corrección. (How many subjects? Cause or purpose?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Pongo carteles para que los vecinos saben qué hacemos.', right: 'Pongo carteles para que los vecinos sepan qué hacemos.', why: 'Después de «para que», siempre subjuntivo: sepan. (Never the indicative after «para que».)' },
            { wrong: 'Ahorro dinero para que compre una bicicleta.', right: 'Ahorro dinero para comprar una bicicleta.', why: 'Yo ahorro y yo compro: mismo sujeto, infinitivo. «Para que compre» significa que lo compra otra persona.' },
            { wrong: 'Te lo explico para que entender.', right: 'Te lo explico para que lo entiendas.', why: 'Detrás de «que» no va el infinitivo. O «para + infinitivo» o «para que + subjuntivo».' },
            { wrong: 'Vengo ayudarte con las mesas.', right: 'Vengo a ayudarte con las mesas.', why: 'Con verbos de movimiento hace falta «a» (o «para»). En inglés no hay preposición: I come to help.' },
            { wrong: 'Escribimos con el fin que nos den una ayuda.', right: 'Escribimos con el fin de que nos den una ayuda.', why: '«Con el fin de que», «a fin de que»: la preposición «de» no se puede quitar.' },
            { wrong: '¿Para qué sirva esta pala?', right: '¿Para qué sirve esta pala?', why: 'En la pregunta «¿para qué?» el verbo va en indicativo. El subjuntivo va en la respuesta con «para que».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía sale temprano para ___ el autobús de las ocho.', options: ['toma', 'que tome', 'tomar'], answer: 2, why: 'Lucía sale y Lucía toma el autobús: mismo sujeto, infinitivo.', en: 'Lucía leaves early to catch the eight o’clock bus.' },
            { prompt: 'Explíquenle a la gente para qué ___ las donaciones.', options: ['sean', 'ser', 'son'], answer: 2, why: '«Para qué» introduce una pregunta indirecta: indicativo, son.', en: 'Explain to people what the donations are for.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres objetivos de su semana: uno suyo («Voy al gimnasio para…»), uno para otra persona («Cocino para que mis hijos…») y uno con movimiento («Salgo a…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Gabriel llega al huerto', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Primer día en La Semilla · First day at La Semilla', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marina y tu alumno es Gabriel. Después tu alumno toca cada expresión marcada y dice: ¿un sujeto o dos? ¿formal? ¿movimiento?', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿un sujeto o dos? ¿formal? ¿movimiento? (One subject or two? Formal? Movement?)' } },
          { kind: 'explore', title: 'Preparando la jornada', setting: 'Jueves por la tarde, en el huerto comunitario La Semilla. Gabriel, voluntario nuevo, llega y habla con Marina, la coordinadora. Se tratan de tú. (Thursday evening at the community garden. Gabriel, a new volunteer, arrives and talks to Marina, the coordinator.)', lines: [
            { who: 'Gabriel', text: '¡Hola! Soy Gabriel, el voluntario nuevo. [[Vengo a ayudar|blue]] con la jornada del sábado.', en: 'Hi! I’m Gabriel, the new volunteer. I’ve come to help with Saturday’s open day.' },
            { who: 'Marina', text: '¡Qué bien, bienvenido! Mira, primero vamos a tapar los tomates [[para que no se quemen|orange]] con el sol.', en: 'Great, welcome! Look, first we’re going to cover the tomatoes so they don’t get scorched by the sun.' },
            { who: 'Gabriel', text: 'Vale. ¿Y esa lona verde? ¿Para qué sirve?', en: 'OK. And that green tarp? What is it for?' },
            { who: 'Marina', text: 'Es [[para cubrir|teal]] la tierra cuando llueve mucho. Así no se pierden las semillas.', en: 'It’s for covering the soil when it rains a lot. That way the seeds don’t get washed away.' },
            { who: 'Gabriel', text: '¿Y estos carteles? ¿Los pego en las tiendas del barrio?', en: 'And these posters? Shall I put them up in the local shops?' },
            { who: 'Marina', text: 'Sí, por favor. Los ponemos [[para que los vecinos sepan|orange]] qué hacemos aquí. Muchos pasan por la calle y no conocen el huerto.', en: 'Yes, please. We put them up so the neighbours know what we do here. Lots of people walk past and don’t know about the garden.' },
            { who: 'Gabriel', text: '¿Y dónde ponemos las mesas el sábado?', en: 'And where do we put the tables on Saturday?' },
            { who: 'Marina', text: 'En círculo, [[de manera que todos puedan|violet]] ver la demostración. Don Ernesto explica cómo se hace el compost.', en: 'In a circle, so that everyone can see the demonstration. Don Ernesto explains how compost is made.' },
            { who: 'Gabriel', text: '¡Genial! Oye, ¿y para qué es la caja de las donaciones?', en: 'Great! Hey, and what is the donation box for?' },
            { who: 'Marina', text: 'Queremos comprar un depósito [[para recoger|teal]] agua de lluvia. Y el lunes envío una carta a la junta del distrito [[con el fin de pedir|violet]] una ayuda.', en: 'We want to buy a tank to collect rainwater. And on Monday I’m sending a letter to the district board to ask for a grant.' },
            { who: 'Gabriel', text: 'Muy bien. Mañana [[salgo a comprar|blue]] semillas. ¿Te traigo algo?', en: 'Very good. Tomorrow I’m going out to buy seeds. Shall I get you anything?' },
            { who: 'Marina', text: 'Sí, unos guantes pequeños, [[para que los niños puedan|orange]] plantar sin ensuciarse.', en: 'Yes, some small gloves, so the children can plant without getting dirty.' },
          ], notes: {
            'Vengo a ayudar': 'Verbo de movimiento (**venir**) + **a** + infinitivo: el objetivo de la llegada.',
            'para que no se quemen': 'Marina y Gabriel tapan; los tomates (no) se queman: dos sujetos, **para que + subjuntivo**. Quemarse → se quemen.',
            'para cubrir': '**Ser para + infinitivo**: dice la función de un objeto. Responde a «¿para qué sirve?».',
            'para que los vecinos sepan': 'Nosotros ponemos los carteles; los vecinos saben: **para que + subjuntivo**. Saber → sepan.',
            'de manera que todos puedan': '**De manera que + subjuntivo** = para que: dice cómo se colocan las mesas y con qué objetivo. Poder → puedan.',
            'para recoger': 'El huerto compra el depósito y el depósito recoge agua: objetivo del objeto, **para + infinitivo**.',
            'con el fin de pedir': 'Expresión **formal** (una carta oficial). Marina envía y Marina pide: mismo sujeto, infinitivo.',
            'salgo a comprar': '**Salir a + infinitivo**: Gabriel sale con un objetivo, comprar semillas.',
            'para que los niños puedan': 'Gabriel trae los guantes; los niños plantan: dos sujetos, **para que + subjuntivo**.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Para qué sirve la lona verde?', options: ['Para cubrir la tierra cuando llueve mucho.', 'Para dar sombra a los tomates.', 'Para sentarse durante la demostración.'], answer: 0, why: '«Es para cubrir la tierra cuando llueve mucho».', en: 'What is the green tarp for?' },
            { prompt: '¿Por qué ponen las mesas en círculo?', options: ['Para que don Ernesto pueda sentarse.', 'Porque hay poco espacio.', 'Para que todos puedan ver la demostración.'], answer: 2, why: '«En círculo, de manera que todos puedan ver la demostración».', en: 'Why are they putting the tables in a circle?' },
            { prompt: '¿Qué le pide Marina a Gabriel?', options: ['Semillas de lechuga.', 'Una carta para la junta.', 'Guantes pequeños para los niños.'], answer: 2, why: '«Unos guantes pequeños, para que los niños puedan plantar sin ensuciarse».', en: 'What does Marina ask Gabriel for?' },
          ] },
        ] },
        { title: '¿Un sujeto, dos o movimiento? · One subject, two, or movement?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las frases del huerto · Sentences from the garden', categories: [
            { id: 'mismo', label: 'MISMO SUJETO · para + infinitivo', tone: 'teal' },
            { id: 'otro', label: 'OTRO SUJETO · para que / de manera que + subjuntivo', tone: 'orange' },
            { id: 'mov', label: 'MOVIMIENTO · a + infinitivo', tone: 'blue' },
          ], items: [
            { text: 'Mañana salgo a comprar semillas.', answer: 'mov', why: 'Salir + a + infinitivo: Gabriel se mueve con un objetivo.' },
            { text: 'Los ponemos para que los vecinos sepan qué hacemos.', answer: 'otro', why: 'Nosotros ponemos, los vecinos saben: sepan.' },
            { text: 'Queremos un depósito para recoger agua de lluvia.', answer: 'mismo', why: 'Para + infinitivo: la función del depósito.' },
            { text: 'Ponemos las mesas de manera que todos puedan ver.', answer: 'otro', why: 'De manera que + subjuntivo = para que: puedan.' },
            { text: 'Vengo a ayudar con la jornada.', answer: 'mov', why: 'Venir + a + infinitivo.' },
            { text: 'Envío una carta con el fin de pedir una ayuda.', answer: 'mismo', why: 'Marina envía y Marina pide: infinitivo (registro formal).' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra sin mirar el diálogo: «¿Para qué pone Marina carteles? ¿A qué sale Gabriel mañana?». Tu alumno responde con «para que + subjuntivo» y con «a + infinitivo».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Quién consigue el objetivo? Who gets the goal?',
      steps: [
        { title: 'Antes de la jornada · Before the open day', blocks: [
          { kind: 'choice', items: [
            { context: 'Marina explica el riego a Gabriel. (Marina explains the watering.)', prompt: 'Regamos por goteo ___ menos agua.', options: ['para que gastamos', 'para gastar', 'para que gastemos'], answer: 1, why: 'Nosotros regamos y nosotros gastamos: mismo sujeto, para + infinitivo.', en: 'We use drip irrigation to save water.' },
            { context: 'Es sábado por la mañana. (It’s Saturday morning.)', prompt: 'Dejo la puerta abierta para que los vecinos ___ sin llamar.', options: ['entren', 'entrar', 'entran'], answer: 0, why: 'Yo dejo la puerta abierta; los vecinos entran: para que + subjuntivo.', en: 'I’m leaving the gate open so the neighbours can come in without knocking.' },
            { context: 'Un niño encuentra una herramienta rara. (A child finds an odd tool.)', prompt: '¿Para qué ___ esta pala tan pequeña?', options: ['sirve', 'sirva', 'servir'], answer: 0, why: 'Es una pregunta con «¿para qué?»: indicativo, sirve.', en: 'What is this tiny shovel for?' },
            { context: 'Gabriel cuenta el plan de Lucía. (Gabriel tells Lucía’s plan.)', prompt: 'Lucía va al mercado ___ los últimos carteles.', options: ['a pegar', 'para que pegue', 'pegar'], answer: 0, why: 'Ir + a + infinitivo: Lucía va con un objetivo. Sin «a» no es posible, y es el mismo sujeto.', en: 'Lucía is going to the market to put up the last posters.' },
            { context: 'Un folleto de la asociación. (A leaflet from the association.)', prompt: 'Organizamos talleres con el fin de que los niños ___ a cuidar plantas.', options: ['aprendan', 'aprenden', 'aprender'], answer: 0, why: '«Con el fin de que» (formal) + otro sujeto (los niños): subjuntivo, aprendan.', en: 'We organise workshops so that children learn to look after plants.' },
          ] },
        ] },
        { title: '¿Qué forma va? · Which form goes here?', blocks: [
          { kind: 'classify', title: 'Infinitivo, subjuntivo o indicativo · Infinitive, subjunctive or indicative', categories: [
            { id: 'inf', label: 'INFINITIVO', tone: 'teal' },
            { id: 'subj', label: 'SUBJUNTIVO', tone: 'orange' },
            { id: 'ind', label: 'INDICATIVO', tone: 'neutral' },
          ], items: [
            { text: 'Gabriel compra guantes para ___ más cómodo. (trabajar)', answer: 'inf', why: 'Gabriel compra y Gabriel trabaja: trabajar.' },
            { text: 'Marina pone sombrillas para que los mayores ___ frescos. (estar)', answer: 'subj', why: 'Otro sujeto después de «para que»: estén.' },
            { text: '¿Para qué ___ tanta tierra? (querer, tú)', answer: 'ind', why: 'Pregunta con «¿para qué?»: quieres.' },
            { text: 'Don Ernesto viene los martes a ___ los árboles. (podar)', answer: 'inf', why: 'Venir + a + infinitivo: podar.' },
            { text: 'Cierra la valla para que no ___ los perros. (entrar)', answer: 'subj', why: 'Tú cierras, los perros (no) entran: entren.' },
            { text: 'Hoy no regamos porque ___ mucho anoche. (llover)', answer: 'ind', why: '«Porque» da la causa: indicativo, llovió.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Marina guarda las semillas en la nevera para que no se estropean.', ok: false, options: ['Marina guarda las semillas en la nevera para que no se estropeen.', 'Marina guarda las semillas en la nevera para que no estropearse.', 'Marina guarda las semillas en la nevera para no se estropean.'], answer: 0, why: 'Las semillas (otro sujeto) no se estropean: para que + subjuntivo, se estropeen.' },
            { sentence: 'Vengo los sábados aprender a cultivar tomates.', ok: false, options: ['Vengo los sábados por aprender a cultivar tomates.', 'Vengo los sábados a aprender a cultivar tomates.', 'Vengo los sábados que aprenda a cultivar tomates.'], answer: 1, why: 'Venir + a + infinitivo. «Por» no expresa el objetivo aquí.' },
            { sentence: 'Lucía estudia jardinería para que pueda trabajar en un vivero.', ok: false, options: ['Lucía estudia jardinería para poder trabajar en un vivero.', 'Lucía estudia jardinería para que puede trabajar en un vivero.', 'Lucía estudia jardinería porque pueda trabajar en un vivero.'], answer: 0, why: 'Lucía estudia y Lucía trabaja: mismo sujeto, para + infinitivo.' },
            { sentence: 'Los voluntarios colocan las plantas de modo que reciban sol toda la mañana.', ok: true, why: 'Correcta: «de modo que + subjuntivo» expresa el objetivo (= para que reciban).' },
            { sentence: 'Hemos pedido una ayuda con el fin que el huerto tenga agua todo el año.', ok: false, options: ['Hemos pedido una ayuda con el fin de que el huerto tiene agua todo el año.', 'Hemos pedido una ayuda con el fin de tener el huerto agua todo el año.', 'Hemos pedido una ayuda con el fin de que el huerto tenga agua todo el año.'], answer: 2, why: '«Con el fin de que» lleva «de» y subjuntivo: tenga.' },
          ] },
        ] },
        { title: 'El chat de voluntarios · The volunteers’ chat', blocks: [
          { kind: 'chat-fill', title: 'Viernes por la noche, en el chat de La Semilla · Friday night, in the La Semilla chat', lines: [
            { who: 'Lucía', text: 'Ya tengo los últimos carteles. Mañana a las ocho ___ pegarlos en la panadería.', options: ['salgo para que', 'salgo a', 'salgo'], answer: 1, why: 'Salir + a + infinitivo: Lucía sale con un objetivo.' },
            { who: 'Gabriel', text: 'Yo llevo la mesa plegable ___ pongamos las fichas.', options: ['para que', 'para', 'porque'], answer: 0, why: 'Yo llevo la mesa; nosotros ponemos las fichas: otro sujeto, para que + subjuntivo.' },
            { who: 'Don Ernesto', text: '¿Y para qué ___ tantas bolsas de papel?', options: ['necesitemos', 'necesitar', 'necesitamos'], answer: 2, why: 'Pregunta con «¿para qué?»: indicativo, necesitamos.' },
            { who: 'Marina', text: 'Son ___ los niños se lleven semillas a casa.', options: ['para que', 'para', 'porque'], answer: 0, why: 'Las bolsas son el medio; los niños se llevan las semillas: otro sujeto, para que + subjuntivo (se lleven).' },
            { who: 'Marina', text: 'Gabriel, trae una cuerda para que ___ el toldo entre los dos.', options: ['atamos', 'atemos', 'atar'], answer: 1, why: 'Tú traes la cuerda; nosotros atamos el toldo: otro sujeto, subjuntivo, atemos.' },
            { who: 'Gabriel', text: '¡Hecho! Llego a las nueve para ___ tiempo de sobra.', options: ['tener', 'que tenga', 'tengo'], answer: 0, why: 'Gabriel llega y Gabriel tiene tiempo: para + infinitivo.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Pongo', 'agua', 'fresca', 'para', 'que', 'los', 'pájaros', 'beban'], accept: ['Pongo agua fresca para que los pájaros beban'], en: 'I put out fresh water so the birds can drink.' },
            { tiles: ['Vengo', 'a', 'regar', 'las', 'plantas', 'de', 'Marina'], accept: ['Vengo a regar las plantas de Marina'], en: 'I’m coming to water Marina’s plants.' },
            { tiles: ['¿Para', 'qué', 'sirve', 'esta', 'herramienta?'], accept: ['¿Para qué sirve esta herramienta?'], en: 'What is this tool for?' },
            { tiles: ['Escribimos', 'a', 'la', 'junta', 'a', 'fin', 'de', 'pedir', 'una', 'ayuda'], accept: ['Escribimos a la junta a fin de pedir una ayuda'], en: 'We are writing to the board in order to ask for a grant.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Une las ideas · Join the ideas', items: [
            { prompt: 'Organizamos una jornada. Objetivo: los vecinos conocen el huerto.', instruction: 'Otro sujeto: usa «para que» + subjuntivo. Empieza con «Organizamos una jornada para que».', accept: ['Organizamos una jornada para que los vecinos conozcan el huerto'] },
            { prompt: 'Gabriel compra semillas. Objetivo: Gabriel planta lechugas.', instruction: 'Mismo sujeto: usa «para» + infinitivo. Empieza con «Gabriel compra semillas».', accept: ['Gabriel compra semillas para plantar lechugas'] },
            { prompt: 'Te explico el riego. Objetivo: tú lo entiendes.', instruction: 'Otro sujeto. Empieza con «Te explico el riego para que».', accept: ['Te explico el riego para que lo entiendas'] },
            { prompt: 'Pedimos una ayuda para que el huerto tenga un depósito.', instruction: 'Hazla formal: cambia «para que» por «con el fin de que».', accept: ['Pedimos una ayuda con el fin de que el huerto tenga un depósito'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice tres cosas que hace esta semana y para qué: una con «para + infinitivo», una con «para que + subjuntivo» y una con «salgo / voy a + infinitivo».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Marina', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Marina habla a los voluntarios · Marina talks to the volunteers', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada «para que» y dice quién consigue el objetivo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Con cada «para que», piensa quién consigue el objetivo. Marina es chilena y habla al grupo con «ustedes». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Marina', channel: 'MENSAJE DE VOZ · CHAT DE VOLUNTARIOS LA SEMILLA', src: '/audio/grammar-live/399.mp3',
            before: 'Es viernes. Marina manda un audio a los voluntarios sobre la jornada del sábado. ¿Qué crees que dice: quién hace qué, a qué hora, para qué…? (Marina sends a voice message to the volunteers. What do you think she says?)',
            gist: { prompt: '¿Para qué manda Marina el audio?', options: ['Para pedir dinero a los voluntarios.', 'Para cancelar la jornada por el mal tiempo.', 'Para repartir las tareas de la jornada y explicar su objetivo.'], answer: 2, why: 'Dice quién hace cada cosa y para qué: «Les cuento cómo vamos con la jornada del sábado».', en: 'Why does Marina send the voice message?' },
            details: [
              { prompt: '¿Para qué pega Lucía los carteles en las tiendas?', options: ['Para que los niños los pinten.', 'Para que los vecinos se enteren de la jornada.', 'Para vender semillas.'], answer: 1, why: '«Lucía los va a pegar en las tiendas del barrio para que los vecinos se enteren».', en: 'Why is Lucía putting the posters up in the shops?' },
              { prompt: '¿A qué viene Gabriel a las nueve?', options: ['A comprar guantes.', 'A ayudar a Marina con las mesas.', 'A regar el huerto.'], answer: 1, why: '«Gabriel, tú vienes a las nueve a ayudarme con las mesas».', en: 'What is Gabriel coming at nine to do?' },
              { prompt: '¿Por qué hay que regar el viernes por la tarde?', options: ['Para que don Ernesto pueda descansar.', 'Para no tener que regar el sábado temprano.', 'Porque el sábado llueve.'], answer: 1, why: '«Hay que regar todo el viernes por la tarde, para no tener que hacerlo el sábado temprano».', en: 'Why do they need to water on Friday evening?' },
              { prompt: '¿Para qué es el dinero de las donaciones?', options: ['Para pagar los carteles.', 'Para comprar mesas nuevas.', 'Para comprar el depósito de agua.'], answer: 2, why: '«Explíquenles que son para comprar el depósito de agua».', en: 'What is the donation money for?' },
            ],
            transcript: 'Hola, chicos, les habla Marina. Les cuento cómo vamos con la jornada del sábado. Ya tenemos los carteles, y Lucía los va a pegar en las tiendas del barrio [[para que los vecinos se enteren|orange]]. Gabriel, tú [[vienes a las nueve a ayudarme|blue]] con las mesas, ¿cierto? Las vamos a poner en círculo, [[de manera que todos puedan|violet]] ver la demostración de compost. Don Ernesto trae semillas [[para regalar|teal]] a los niños, y yo voy a preparar unas fichas [[para que las familias aprendan|orange]] a plantar en casa. Una cosa importante: hay que regar todo el viernes por la tarde, [[para no tener|teal]] que hacerlo el sábado temprano. ¿Quién puede? Escríbanme hoy [[para que pueda|orange]] organizar los turnos. Y si alguien les pregunta para qué sirven las donaciones, explíquenles que son [[para comprar|teal]] el depósito de agua. ¡Muchas gracias a todos, nos vemos el sábado!',
            reply: { teacher: 'Tú eres Marina. Tu alumno es Gabriel y responde al audio con tres frases: a qué viene el sábado («Vengo a…»), algo que lleva y para qué («Llevo… para que…») y una pregunta con «¿Para qué…?».', self: 'Responde a Marina en voz alta como Gabriel: a qué vienes, qué llevas y para qué, y una pregunta con «¿para qué…?». (Answer as Gabriel: what you’re coming to do, what you bring and why, and one question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus objetivos', coach: 'Di para qué. Say what for.',
      steps: [
        { title: '¿Para qué lo haces? · What do you do it for?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con su experiencia real. Cuando confunde infinitivo y subjuntivo, tú preguntas «¿quién consigue el objetivo?» y tu alumno corrige su frase.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Usa las frases de apoyo. (Read, answer aloud, use the support phrases.)' } },
          { kind: 'talk', cards: [
            { q: '¿Para qué estudias español? ¿Y qué haces para que tu español mejore? · Why are you studying Spanish? And what do you do so that your Spanish improves?', followUps: ['¿Qué haces para no olvidar el vocabulario? (What do you do so as not to forget vocabulary?)', '¿Qué hace tu profesor para que hables más? (What does your teacher do so you speak more?)'], phrases: ['Estudio español [[para poder|teal]]…', 'Veo series [[para que mi oído se acostumbre|orange]]…', '[[para no olvidar|teal]]…'], hint: 'Tú estudias y tú consigues algo: infinitivo. Otra cosa o persona (tu oído, tu profesor): para que + subjuntivo.', example: 'Estudio español para poder trabajar en México. Veo series con subtítulos para que mi oído se acostumbre, y escribo palabras nuevas en una libreta para no olvidarlas.', next: 'Ahora, objetos.' },
            { q: 'Elige tres objetos de tu casa o de tu trabajo. ¿Para qué sirven? · Choose three objects from your home or work. What are they for?', followUps: ['¿Para qué usas tú ese objeto? (What do you use it for?)', '¿Hay algún objeto que no sabes para qué sirve? (Is there an object you don’t know the use of?)'], phrases: ['¿Para qué sirve…? — Sirve [[para|teal]] + infinitivo…', 'Lo uso [[para|teal]]…', 'No sé para qué sirve…'], hint: 'Pregunta con «¿para qué?» + indicativo. Respuesta con para + infinitivo.', example: 'Tengo una tetera eléctrica: sirve para calentar agua. Tengo una lámpara pequeña para leer en la cama. Y en la cocina hay un aparato raro: no sé para qué sirve.', next: 'Ahora, un evento.' },
            { q: 'Organizas una fiesta o un evento en tu barrio o en tu trabajo. ¿Qué haces para que venga mucha gente? · You organise an event. What do you do so that lots of people come?', followUps: ['¿Qué haces para que la gente se sienta cómoda? (…so that people feel comfortable?)', '¿Cómo pones las mesas o las sillas? (How do you set up the tables?)'], phrases: ['Mando invitaciones [[para que la gente sepa|orange]]…', 'Pongo las sillas [[de manera que todos puedan|violet]]…', 'Preparo comida [[para que nadie tenga|orange]] hambre.'], hint: 'Tú haces algo; la gente consigue el objetivo: para que + subjuntivo (sepa, venga, pueda).', example: 'Mando un mensaje a todos los vecinos para que sepan la fecha. Pongo las sillas en círculo, de manera que todos puedan hablar, y preparo comida para que nadie tenga hambre.', next: 'Ahora, movimiento.' },
            { q: 'Piensa en tu semana. ¿Adónde vas y a qué? ¿A qué sales los fines de semana? · Think about your week. Where do you go and to do what?', followUps: ['¿A qué vas al centro de la ciudad? (What do you go downtown for?)', '¿Alguien viene a tu casa a ayudarte con algo? (Does anyone come to help you with something?)'], phrases: ['Voy al mercado [[a comprar|blue]]…', 'Los sábados [[salgo a correr|blue]] / [[salgo a cenar|blue]]…', 'Mi madre [[viene a ayudarme|blue]] con…'], hint: 'Verbo de movimiento + a + infinitivo. No olvides la «a».', example: 'Los lunes voy al mercado a comprar fruta. Los sábados salgo a correr por el parque, y los domingos mi hermana viene a comer a casa.', next: 'Ahora, formal.' },
            { q: 'Estás en una reunión de vecinos. Propón una mejora para tu calle o tu edificio y explica su objetivo en registro formal. · You are at a residents’ meeting. Propose an improvement and explain its purpose formally.', followUps: ['¿Qué necesitan ustedes del ayuntamiento? (What do you need from the council?)', '¿Para qué sirve exactamente? (What exactly is it for?)'], phrases: ['Proponemos… [[con el fin de que|violet]] los vecinos…', '[[a fin de|violet]] + infinitivo…', '[[con el objetivo de|violet]] + infinitivo…'], hint: 'Registro formal: a fin de (que), con el fin de (que), con el objetivo de. Misma regla: un sujeto, infinitivo; dos, que + subjuntivo.', example: 'Proponemos instalar más luces en el parque con el fin de que los vecinos se sientan seguros por la noche. También queremos poner bancos a fin de que las personas mayores puedan descansar.', teacher: 'Tú eres el presidente de la asociación de vecinos y respondes con preguntas: «¿Y para qué necesitamos eso?». Tu alumno defiende su propuesta.' },
            { q: 'Ahora tú eres Marina. Un vecino pregunta: «¿Para qué es este huerto? ¿Para qué piden dinero?». ¿Qué le respondes? · Now you are Marina. A neighbour asks what the garden is for. What do you answer?', followUps: ['¿Qué hacen ustedes para que los niños participen? (What do you do so that children take part?)', '¿A qué puede venir él? (What can he come and do?)'], phrases: ['El huerto es [[para que los vecinos|orange]]…', 'Pedimos dinero [[para comprar|teal]]…', 'Puede [[venir a|blue]] + infinitivo…'], hint: 'Mezcla las tres: para + infinitivo, para que + subjuntivo y venir a + infinitivo.', example: 'El huerto es para que los vecinos cultiven sus verduras y se conozcan. Pedimos dinero para comprar un depósito de agua. Si quiere, puede venir el sábado a ver cómo trabajamos.', teacher: 'Después, cambian los papeles: tú eres Marina y tu alumno es el vecino curioso.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Para qué…?», «¿A qué vas…?») y tú respondes. Tu alumno escucha si usas infinitivo o subjuntivo correctamente.', self: 'Ahora haz tú las preguntas en voz alta («¿Para qué…?», «¿A qué vas…?») y responde como otra persona. (Now ask the questions aloud and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una solicitud formal', coach: 'Explica tus objetivos con formalidad. Explain your goals formally.',
      steps: [
        { title: 'Una carta a la junta del distrito · A letter to the district board', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada objetivo: ¿un sujeto (infinitivo) o dos (que + subjuntivo)? ¿Hay alguna expresión formal? Después, tu alumno lee su carta en voz alta.', self: 'Escribe tu carta y toca «Revisar mi texto». Después, mira cada objetivo: ¿un sujeto o dos? (Write your letter and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Solicitud de ayuda · Request for a grant', situation: 'Eres Marina (o el responsable de otro proyecto de tu barrio: una biblioteca, un club deportivo, un grupo de teatro). Escribe un correo formal a la junta del distrito para pedir una ayuda y explicar para qué la necesitas. Usa «usted / ustedes». (You are Marina, or the person in charge of another local project. Write a formal email to the district board asking for a grant and explaining what it is for.)', task: [
            'Saluda formalmente, preséntate y di para qué escribes. (Greet formally, introduce yourself and say why you are writing.)',
            'Explica dos objetivos con «para + infinitivo» o «para que + subjuntivo». (Two purposes with para / para que.)',
            'Usa al menos una expresión formal: a fin de (que), con el fin de (que), con el objetivo de. (At least one formal purpose expression.)',
            'Invita a la junta a visitar el proyecto («pueden venir a + infinitivo»). (Invite them to visit.)',
            'Despídete formalmente. (Close formally.)',
          ], starters: ['Estimados señores:', 'Me llamo… y coordino…', 'Les escribo con el fin de…', 'Necesitamos… para que…', 'Pueden venir a…', 'Quedo a su disposición.', 'Atentamente,'],
            words: ['para + infinitivo', 'para que + subjuntivo', 'a fin de (que)', 'con el fin de (que)', 'con el objetivo de', 'de manera que', 'venir a + infinitivo', 'solicitar', 'una ayuda', 'el presupuesto'],
            model: 'Estimados señores: Me llamo Marina Ferrer y coordino el huerto comunitario La Semilla, en la calle del Olmo. Les escribo [[con el fin de solicitar|violet]] una ayuda para comprar un depósito de agua. Ahora regamos con agua potable y queremos recoger agua de lluvia [[para gastar|teal]] menos. También necesitamos dos bancos [[para que las personas mayores puedan|orange]] descansar a la sombra. El sábado organizamos una jornada de puertas abiertas [[a fin de que los vecinos conozcan|violet]] el proyecto. Si lo desean, pueden [[venir a ver|blue]] el huerto ese día. Les adjunto el presupuesto [[para que lo revisen|orange]]. Quedo a su disposición para cualquier consulta. Atentamente, Marina Ferrer.',
            minWords: 80,
            checks: [
              { label: 'Un objetivo con «para que» (a purpose with para que)', pattern: '(?<!\\p{L})para\\s+que(?!\\p{L})', tip: 'Explica un objetivo de otras personas: «para que los vecinos conozcan el proyecto».' },
              { label: 'Una expresión formal (a formal purpose expression)', pattern: '(?<!\\p{L})(?:a\\s+fin\\s+de|con\\s+el\\s+fin\\s+de|con\\s+el\\s+objetivo\\s+de)(?!\\p{L})', tip: 'Usa «a fin de», «con el fin de» o «con el objetivo de»: «Les escribo con el fin de solicitar una ayuda».' },
              { label: 'Una invitación con venir a (an invitation with venir a)', pattern: '(?<!\\p{L})(?:venir|vengan|venga)\\s+a\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Invita: «Pueden venir a ver el huerto».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:a\\s+fin|con\\s+el\\s+fin|con\\s+el\\s+objetivo)\\s+que(?!\\p{L})', why: 'Falta «de»: **a fin de que**, **con el fin de que**, **con el objetivo de**.' },
              { pattern: '(?<!\\p{L})para\\s+que\\s+(?:ser|estar|tener|poder|saber|venir|ir|ver|hacer|conocer|participar|usar|regar|llegar|descansar|disfrutar|revisar)(?!\\p{L})', why: 'Después de «para que» no va el infinitivo: **para que puedan**, **para que conozcan**. Con el mismo sujeto, sin «que»: **para poder**.' },
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
            { tone: 'teal', label: 'MISMO SUJETO · PARA + INFINITIVO', formula: 'verbo + para (no) + infinitivo', example: 'Riego temprano para gastar menos agua.', caption: 'la misma persona hace la acción y consigue el objetivo', en: 'the same person acts and gets the goal' },
            { tone: 'orange', label: 'OTRO SUJETO · PARA QUE + SUBJUNTIVO', formula: 'verbo + para que + presente de subjuntivo', example: 'Pongo carteles para que los vecinos sepan qué hacemos.', caption: 'otra persona o cosa consigue el objetivo; nunca indicativo', en: 'someone or something else gets the goal; never indicative' },
            { tone: 'violet', label: 'FORMAL', formula: 'a fin de / con el fin de (que) · con el objetivo de · de modo / manera que + subjuntivo', example: 'Le escribimos a fin de que conozca el proyecto.', caption: 'la misma regla, en cartas y textos oficiales', en: 'the same rule, in letters and official texts' },
            { tone: 'blue', label: 'MOVIMIENTO · A + INFINITIVO', formula: 'ir / venir / salir / bajar + a + infinitivo', example: 'Vengo a ayudarte con las mesas.', caption: 'el objetivo de un movimiento; y «¿para qué…?» + indicativo', en: 'the purpose of a movement; and “¿para qué…?” + indicative' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: **¿quién consigue el objetivo?** Si es la misma persona que actúa: **para + infinitivo** («Ahorro para viajar»). Si es otra: **para que + subjuntivo** («Ahorro para que mis hijos viajen»). En la pregunta, indicativo: «¿Para qué **ahorras**?».', en: 'Ask yourself: who gets the goal? If it is the same person who acts: para + infinitive. If it is someone else: para que + subjunctive. In the question itself, indicative: “¿Para qué ahorras?”' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Hablo despacio para que mis alumnos me ___.', options: ['entender', 'entiendan', 'entienden'], answer: 1, why: 'Yo hablo; mis alumnos entienden: otro sujeto, subjuntivo.', en: 'I speak slowly so that my students understand me.' },
            { prompt: 'Ana se levanta a las seis para ___ al gimnasio.', options: ['ir', 'que vaya', 'va'], answer: 0, why: 'Ana se levanta y Ana va: mismo sujeto, infinitivo.', en: 'Ana gets up at six to go to the gym.' },
            { prompt: '¿Para qué ___ ustedes tantas sillas?', options: ['necesitan', 'necesitar', 'necesiten'], answer: 0, why: 'Pregunta con «¿para qué?»: indicativo.', en: 'What do you need so many chairs for?' },
            { prompt: 'El banco envía este aviso a fin de que sus clientes ___ sus datos.', options: ['actualizan', 'actualizar', 'actualicen'], answer: 2, why: '«A fin de que» + otro sujeto: subjuntivo. Ojo a la ortografía: actualizar → actualice(n).', en: 'The bank sends this notice so that its customers update their details.' },
            { prompt: 'Esta tarde bajo ___ la basura.', options: ['sacar', 'que saque', 'a sacar'], answer: 2, why: 'Verbo de movimiento (bajar) + a + infinitivo.', en: 'This afternoon I’m going down to take the rubbish out.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, la biblioteca del barrio.', blocks: [
          { kind: 'lead', text: 'Gabriel también ayuda en la biblioteca del barrio, que prepara un club de lectura. Une las ideas del cartel con «para», «para que» o «a fin de que».', en: 'Gabriel also helps at the neighbourhood library, which is setting up a book club. Join the ideas on the poster with “para”, “para que” or “a fin de que”.' },
          { kind: 'rewrite', title: 'En la biblioteca · At the library', items: [
            { prompt: 'Abrimos los jueves por la tarde. Objetivo: las personas que trabajan pueden venir.', instruction: 'Otro sujeto. Empieza con «Abrimos los jueves por la tarde para que».', accept: ['Abrimos los jueves por la tarde para que las personas que trabajan puedan venir'] },
            { prompt: 'Gabriel lee mucho. Objetivo: Gabriel recomienda buenos libros.', instruction: 'Mismo sujeto. Empieza con «Gabriel lee mucho».', accept: ['Gabriel lee mucho para recomendar buenos libros'] },
            { prompt: 'Les enviamos el programa. Objetivo: ustedes eligen las sesiones.', instruction: 'Registro formal. Empieza con «Les enviamos el programa a fin de que».', accept: ['Les enviamos el programa a fin de que ustedes elijan las sesiones', 'Les enviamos el programa a fin de que elijan las sesiones'] },
          ] },
        ] },
        { title: 'Ampliación · Finales en pasado y matices (opcional)', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'lead', text: 'Cuando el verbo principal está en **pasado**, «para que» va con otra forma, el **imperfecto de subjuntivo** (lo estudias en la clase 128): «Marina **puso** carteles para que los vecinos **supieran** qué hacían los voluntarios». Hoy solo tienes que **reconocerla**: termina en **-ra** (supieran, vinieran, pudieran). Y un matiz: con verbos como **dar, dejar, traer** + a alguien, el infinitivo también es posible con otro sujeto: «Te dejo la llave **para abrir** la caseta» (tú abres) = «para que abras».', en: 'When the main verb is in the past, “para que” takes another form, the imperfect subjunctive (class 128): “Marina put up posters so the neighbours would know what they did.” Today you only need to recognise it: it ends in -ra. And one nuance: with verbs like give, leave, bring + someone, the infinitive is also possible with a different subject: “I’m leaving you the key to open the shed” (you open it).' },
          { kind: 'choice', title: 'Reconoce el pasado · Recognise the past', items: [
            { prompt: 'Marina ___ unas fichas para que las familias aprendieran a plantar.', options: ['preparó', 'va a preparar', 'prepara'], answer: 0, why: '«Aprendieran» (-ra) es imperfecto de subjuntivo: el verbo principal está en pasado, preparó.', en: 'Marina prepared some worksheets so that families would learn to plant.' },
            { prompt: '«Llamé a Gabriel para que viniera a ayudarme». ¿Cuándo pasó?', options: ['En el pasado: ya pasó.', 'Ahora mismo, en presente.', 'Mañana.'], answer: 0, why: '«Llamé» es pasado y «viniera» es la forma de pasado de «venga».', en: '“I called Gabriel so that he would come and help me.” When did it happen?' },
            { prompt: '«Le di a Lucía una llave para abrir la caseta». ¿Quién abre la caseta?', options: ['Nadie.', 'Lucía.', 'Yo.'], answer: 1, why: 'Con «dar algo a alguien», el infinitivo puede referirse a quien lo recibe: Lucía abre (= para que Lucía abriera).', en: '“I gave Lucía a key to open the shed.” Who opens the shed?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Extra: tu alumno cuenta qué hizo la semana pasada para ayudar a alguien, solo con «para + infinitivo» o «a + infinitivo»; si aparece «para que», tú le das la forma en -ra.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 100 · Relativas con antecedente conocido o buscado', text: 'Ya explicas para qué haces las cosas: «Pongo carteles para que los vecinos sepan qué hacemos». En la clase 100 usas el subjuntivo en otro lugar: para describir algo que **buscas** y todavía no conoces: «Busco un voluntario que sepa de compost» frente a «Tengo un voluntario que sabe de compost». Es el paso natural: el mismo subjuntivo para lo que todavía no es real.', en: 'You can now explain what you do things for: “I put up posters so the neighbours know what we do.” In class 100 you use the subjunctive in another place: to describe something you are looking for and don’t know yet: “I’m looking for a volunteer who knows about compost” versus “I have a volunteer who knows about compost.” It is the natural next step: the same subjunctive for what is not yet real.', href: '/la-persona-que-tengo-en-mente', label: 'Ir a la clase 100' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Para qué vienes a clase de español? ¿Y qué hace tu profesor para que aprendas?». Respuesta esperada: «para + infinitivo» y «para que + subjuntivo». Tarea: escribir la carta de Escribir para un proyecto real de su barrio.' },
        ] },
      ],
    },
  ],
};
