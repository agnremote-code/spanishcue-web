import type { LiveLesson } from '../types';

/**
 * Lesson 440 · B2 · Finales con subjuntivo: con el fin de que, sin que (course unit G140).
 * Builds on G099 (para + infinitive / para que + present subjunctive, a fin de que,
 * de modo que + subjunctive as purpose), G116 (de modo que + indicative as result),
 * G128 (imperfect subjunctive forms) and G130 (sequence of tenses).
 * B2 content: purpose clauses in past frames (pusimos música para que no oyera nada;
 * a present-tense purpose after a past verb only if the goal is still open now);
 * formal connectors con el fin de (que), con el objeto de (que), a fin de (que) and
 * con vistas a + noun / infinitive; de modo que / de manera que + subjunctive (purpose)
 * vs + indicative (result); sin + infinitive (same subject) vs sin que + subjunctive
 * (another subject; usually with nadie / nada); preventive no vaya a ser que / no sea
 * que + subjunctive (past: no fuera a ser que); colloquial imperative + que + subjunctive
 * (Ven, que te vea) vs imperative + que + indicative giving a reason (Date prisa, que
 * cierran). Ampliación: ir / venir + a que + subjunctive, no fuera a ser que, register.
 * Scene: the staff of the public library of the Santa Rosa neighbourhood prepare a
 * surprise farewell for Amparo Lozano, the director, who retires on Friday. Irene
 * Salcedo organises it with Raúl Montero, a new colleague; don Julián is the caretaker.
 * Escuchar: Irene's audio note to Mónica, who was away (es-MX-DaliaNeural).
 * Escribir: Raúl's chronicle of the farewell for the Friends of the Library bulletin.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 440,
  level: 'B2',
  title: 'Finales con subjuntivo: con el fin de que, sin que',
  subtitle: 'Explicar para qué se hizo algo y qué se quería evitar, con para que, con el fin de que, sin que y no vaya a ser que.',
  legend: [
    { tone: 'teal', label: 'MISMO SUJETO · para, con el fin de, con vistas a, sin + infinitivo' },
    { tone: 'orange', label: 'OTRO SUJETO · para que, con el fin de que + subjuntivo (vea / viera)' },
    { tone: 'violet', label: 'LO QUE NO PASA O SE EVITA · sin que, no vaya a ser que + subjuntivo' },
    { tone: 'blue', label: 'CÓMO Y COLOQUIAL · de manera que + subjuntivo, Ven, que te vea' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Para qué, y sin que nadie lo sepa', coach: '¿Quién actúa y cuándo? Who acts, and when?',
      steps: [
        { title: 'El último viernes de Amparo · Amparo’s last Friday', blocks: [
          { kind: 'lead', text: 'Amparo Lozano dirige la biblioteca pública del barrio de Santa Rosa desde hace treinta y un años, y este viernes se jubila. Su equipo le prepara una despedida sorpresa. Irene, que lo organiza, ya lo hizo una vez: «El año pasado, para la jubilación de Fermín, **pusimos** música en su oficina **para que no oyera** nada, y lo subimos todo **sin que nos viera**». Hoy aprendes a explicar el objetivo de una acción también en pasado, en registro formal y coloquial, y a decir lo que **no** pasa o lo que quieres **evitar**.', en: 'Amparo Lozano has run the Santa Rosa public library for thirty-one years and retires this Friday. Her team is preparing a surprise farewell. Irene, who is organising it, has done this before: last year they played music in Fermín’s office so he wouldn’t hear anything, and carried everything up without him seeing them. Today you learn to state a purpose in past contexts and in formal and colloquial registers, and to say what does not happen or what you want to prevent.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Irene y tu alumno dice en qué tiempo está el verbo principal y qué forma lleva el verbo después de «para que».', self: 'Lee las dos frases en voz alta. ¿En qué tiempo está el verbo principal? ¿Qué forma lleva el verbo después de «para que»? (Which tense is the main verb, and which form follows «para que»?)' } },
          { kind: 'compare', title: 'Dos sorpresas · Two surprises', columns: [
            { tone: 'orange', label: 'AHORA O DESPUÉS · presente de subjuntivo', sentence: 'El viernes ponemos música [[para que Amparo no oiga|orange]] los pasos.', idea: 'El plan es para el viernes: verbo principal en presente con valor de futuro → presente de subjuntivo.', en: 'A plan for Friday: the main verb looks forward, so the purpose clause takes the present subjunctive.' },
            { tone: 'orange', label: 'YA PASÓ · imperfecto de subjuntivo', sentence: 'El año pasado pusimos música [[para que Fermín no oyera|orange]] los pasos.', idea: 'Todo pasó y terminó: verbo principal en pasado → imperfecto de subjuntivo.', en: 'Everything happened and is over: a past main verb pulls the purpose clause into the imperfect subjunctive.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El martes Irene escondió las invitaciones para que Amparo no las ___.', options: ['vería', 'viera', 've'], answer: 1, why: '«Escondió» es pasado y la acción ya terminó: para que + imperfecto de subjuntivo, viera.', en: 'On Tuesday Irene hid the invitations so that Amparo wouldn’t see them.' },
            { prompt: 'Raúl, cierra el programa del homenaje para que Amparo no lo ___ en la pantalla.', options: ['vea', 've', 'viera'], answer: 0, why: 'Imperativo («cierra»): el objetivo mira al futuro → presente de subjuntivo, vea.', en: 'Raúl, close the tribute programme so that Amparo doesn’t see it on the screen.' },
          ] },
        ] },
        { title: 'En pasado y en registro formal · Past and formal', mascot: '/brand/mascot/studying.webp', coach: 'El verbo principal manda. The main verb decides.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'FINALIDAD EN PASADO', question: '¿El verbo principal está en pasado o en condicional?', en: 'Is the main verb in a past tense or in the conditional? Then the purpose clause usually moves to the imperfect subjunctive, just as with quería que (class 130).', formula: ['pasado / condicional + para que + imperfecto de subjuntivo', 'presente / futuro / imperativo + para que + presente de subjuntivo', 'pasado + para que + presente: solo si el objetivo sigue abierto ahora'],
            meaning: 'Es la **correlación temporal** de la clase 130 aplicada a la finalidad. Si cuentas algo ya cerrado, usa **-ra / -se**: «Le dimos un mapa **para que no se perdiera**». Si el objetivo todavía está pendiente cuando hablas, tras un pasado también es posible el presente: «Te dejé las llaves **para que entres** mañana».',
            examples: [
              { es: 'Don Julián se llevó a Amparo al archivo [[para que no subiera|orange]] al salón.', en: 'Don Julián took Amparo to the archive so that she wouldn’t go up to the hall.' },
              { es: 'Imprimimos el programa en letra grande [[para que los mayores pudieran|orange]] leerlo.', en: 'We printed the programme in large type so that older guests could read it.' },
              { es: 'Ayer te dejé el programa en la mesa [[para que lo revises|orange]] mañana.', en: 'A past verb, but the goal is still open (tomorrow), so the present is possible here; «revisaras» would also be correct.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'CONECTORES FORMALES', question: '¿Escribes un informe, una solicitud o una crónica?', en: 'Are you writing a report, an application or a formal account? These connectors raise the register; the subject rule is the same as with para.', formula: ['con el fin de / con el objeto de / a fin de + infinitivo (mismo sujeto)', 'con el fin de que / con el objeto de que / a fin de que + subjuntivo (otro sujeto)', 'con vistas a + sustantivo o infinitivo (pensando en un objetivo futuro)'],
            meaning: '**Con el objeto de** (o **con objeto de**) es todavía más formal que «con el fin de». **Con vistas a** no es exactamente «para»: indica que algo se hace pensando en un objetivo o un momento **futuro**, y va normalmente con **sustantivo o infinitivo**.',
            examples: [
              { es: 'La asociación financió el video [[con el objeto de que|orange]] el barrio conservara la memoria de Amparo.', en: 'The association paid for the video so that the neighbourhood would keep a record of Amparo’s work (formal, written register).' },
              { es: 'Llegamos dos horas antes [[con el fin de preparar|teal]] el salón.', en: 'We arrived two hours early in order to set up the hall: same subject, so the infinitive.' },
              { es: 'Desde enero ahorramos [[con vistas a|teal]] la despedida.', en: 'We have been saving since January with the farewell in mind: a goal further ahead that shapes what we do now.' },
            ] },
          { kind: 'table', title: 'El mismo objetivo, tres momentos · One purpose, three frames', head: ['Marco', 'Mismo sujeto', 'Otro sujeto'], rows: [
            ['Ahora / futuro', 'Abro la sala **para preparar** el salón.', 'Abro la sala **para que** tú **prepares** el salón.'],
            ['Pasado cerrado', 'Abrí la sala **para preparar** el salón.', 'Abrí la sala **para que** tú **prepararas** el salón.'],
            ['Formal', '**Con el fin de preparar** el acto, el equipo llegó antes.', '**Con el objeto de que** el público **pudiera** sentarse, se abrió otra sala.'],
          ], note: 'El infinitivo no cambia con el tiempo: «para preparar» sirve en presente y en pasado. Solo cambia la forma tras «que».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En 2019 la biblioteca amplió el horario con el fin de que los estudiantes ___ preparar sus exámenes.', options: ['pudieran', 'pueden', 'podrían'], answer: 0, why: '«Amplió» (pasado) y la situación ya terminó: con el fin de que + imperfecto de subjuntivo, pudieran.', en: 'In 2019 the library extended its opening hours so that students could prepare for their exams.' },
            { prompt: 'El equipo se reunió el lunes con el objeto de ___ el homenaje.', options: ['organizar', 'organizaba', 'que organizara'], answer: 0, why: 'El equipo se reúne y el equipo organiza: mismo sujeto, infinitivo.', en: 'The team met on Monday in order to organise the tribute.' },
            { prompt: 'Abrimos una cuenta común con vistas ___ la fiesta de diciembre.', options: ['a que', 'a', 'de'], answer: 1, why: '«Con vistas a» + sustantivo: con vistas a la fiesta.', en: 'We opened a shared account with December’s party in mind.' },
          ] },
        ] },
        { title: 'Lo que no pasa y lo que se evita · What doesn’t happen, what you prevent', mascot: '/brand/mascot/standing.webp', coach: 'Sin que: no pasa. No vaya a ser que: por si acaso.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'SIN + INFINITIVO · SIN QUE + SUBJUNTIVO', question: '¿Quieres decir lo que no ocurre mientras pasa otra cosa?', en: 'Do you want to say what does not happen while something else does? Same subject: sin + infinitive. Another subject: sin que + subjunctive, never the indicative.', formula: ['mismo sujeto: sin + infinitivo', 'otro sujeto: sin que + subjuntivo (presente o imperfecto)', 'sin que + nadie / nada / ningún'],
            meaning: '**Sin que** no expresa exactamente una finalidad: dice qué **no** ocurre. Pero sigue la misma regla que «para»: si el sujeto es el mismo, infinitivo («Raúl entró **sin hacer** ruido»); si es otro, **sin que + subjuntivo** («Entramos **sin que** Amparo nos **viera**»). Como «sin» ya es negativo, lo natural después es **nadie, nada, ningún**: «sin que **nadie** se diera cuenta».',
            examples: [
              { es: 'Lo preparamos todo [[sin que Amparo se enterara|violet]] de nada.', en: 'We prepared everything without Amparo finding out a thing.' },
              { es: 'Raúl subió las sillas [[sin hacer|teal]] ruido.', en: 'Raúl carried the chairs up without making a sound: he carried, he made no noise.' },
              { es: 'Explícaselo a Beatriz con tacto, [[sin que se ofenda|violet]].', en: 'Explain it to Beatriz tactfully, in a way that doesn’t offend her.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'NO VAYA A SER QUE · NO SEA QUE', question: '¿Haces algo por precaución, para evitar un riesgo?', en: 'Are you doing something as a precaution, to avoid a risk? «No vaya a ser que» is like “in case” or “just in case”, but it names the danger you want to avoid. It is very common in speech.', formula: ['acción + no vaya a ser que / no sea que + presente de subjuntivo', 'en pasado: no fuera a ser que / no fuera que + imperfecto de subjuntivo', '= para que no… / por si…'],
            meaning: 'Es una **finalidad preventiva**: dices lo que quieres **evitar**. «Habla bajo, **no vaya a ser que** Amparo te **oiga**» = para que Amparo no te oiga. Es una expresión fija: siempre **vaya** (o **fuera** en pasado), nunca «va». Es más coloquial que «para que no».',
            examples: [
              { es: 'Esconde el pastel en la cocina, [[no vaya a ser que lo vea|violet]].', en: 'Hide the cake in the kitchen, in case she sees it.' },
              { es: 'Apaga el celular durante la sorpresa, [[no sea que suene|violet]].', en: 'Switch your phone off during the surprise, in case it rings.' },
              { es: 'Raúl vigiló la escalera, [[no fuera a ser que Amparo subiera|violet]] antes de tiempo.', en: 'Raúl kept an eye on the stairs in case Amparo came up too early (past frame).' },
            ] },
          { kind: 'tip', icon: '💡', title: 'Sin que y nadie · Sin que with nadie', text: 'Con «sin que» se dice «sin que **nadie** lo supiera», no «sin que alguien lo supiera»: la negación ya está en «sin». Y la frase significa que **nadie** lo supo.', en: 'After «sin que», Spanish naturally uses negative words: «sin que nadie lo supiera» means that nobody knew. «Alguien» sounds odd here.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Irene salió de la oficina sin ___ nada a nadie.', options: ['dijo', 'que dijera', 'decir'], answer: 2, why: 'Irene sale e Irene no dice nada: mismo sujeto, sin + infinitivo.', en: 'Irene left the office without saying anything to anyone.' },
            { prompt: 'Compraron el regalo sin que Amparo ___ nada.', options: ['sospechó', 'sospeche', 'sospechara'], answer: 2, why: 'Otro sujeto (Amparo) y pasado cerrado: sin que + imperfecto de subjuntivo.', en: 'They bought the present without Amparo suspecting anything.' },
            { prompt: 'Cierra la puerta del salón, no vaya a ser que alguien ___.', options: ['entra', 'entre', 'entrara'], answer: 1, why: '«No vaya a ser que» en presente → presente de subjuntivo: entre.', en: 'Close the door to the hall, in case someone comes in.' },
          ] },
        ] },
        { title: 'Objetivo, consecuencia o causa · Purpose, result or reason', mascot: '/brand/mascot/speaking.webp', coach: 'El modo cambia el significado. The mood changes the meaning.', blocks: [
          { kind: 'compare', title: 'De manera que: dos caras · Two faces of de manera que', columns: [
            { tone: 'blue', label: 'OBJETIVO · + subjuntivo', sentence: 'Pusimos las sillas en semicírculo [[de manera que todos vieran|blue]] la pantalla.', idea: 'Así las pusimos, con ese objetivo: = para que todos vieran.', en: 'We arranged the chairs in a semicircle so that everyone could see the screen: the way we did it, with that aim.' },
            { tone: 'neutral', label: 'CONSECUENCIA · + indicativo', sentence: 'Amparo llegó antes de tiempo, de manera que **tuvimos** que improvisar.', idea: 'Un resultado real: = así que (clase 116).', en: 'Amparo arrived early, so we had to improvise: a real result, not an aim.' },
          ] },
          { kind: 'concept', tone: 'blue', label: 'IMPERATIVO + QUE + SUBJUNTIVO', question: '¿Das una orden y después dices para qué?', en: 'Giving an order and then the purpose? In colloquial speech «que» + subjunctive after an imperative means “so that”. With the indicative, «que» gives a reason instead.', formula: ['imperativo + que + subjuntivo = para que (objetivo)', 'imperativo + que + indicativo = porque (causa)'],
            meaning: 'En la lengua hablada, después de un imperativo, **que + subjuntivo** expresa finalidad: «Ven, **que te vea**» (para que te vea). Con **indicativo**, «que» explica la causa: «Date prisa, **que cierran** a las ocho» (porque cierran). Ojo: «Ven, que te **cuento**», con indicativo, también es muy frecuente: anuncia lo que vas a hacer.',
            examples: [
              { es: 'Acércate, [[que te vean|blue]] todos en la foto.', en: 'Come closer, so everyone can see you in the photo.' },
              { es: 'Pásame la lista, [[que la revise|blue]] antes de imprimirla.', en: 'Hand me the list so I can check it before printing it.' },
              { es: 'Baja la voz, que Amparo **está** en la oficina.', en: 'Keep your voice down, Amparo is in the office: «que» + indicative gives the reason.' },
            ] },
          { kind: 'decide', title: '¿Subjuntivo o no? · Subjunctive or not?', steps: [
            { q: '¿Expresas un objetivo, algo que todavía no es un hecho (para que, de manera que, que tras imperativo)?', yes: 'Subjuntivo: presente si el marco es presente o futuro; imperfecto si es pasado.', no: 'Sigue con la siguiente pregunta.' },
            { q: '¿Cuentas un resultado real o una causa (de manera que = así que; que = porque)?', yes: 'Indicativo: «de manera que tuvimos que…», «que cierran a las ocho».', no: 'Sigue con la siguiente pregunta.' },
            { q: '¿Dices lo que no ocurre o lo que quieres evitar con otro sujeto (sin que, no vaya a ser que)?', yes: 'Siempre subjuntivo.', no: 'Si el sujeto es el mismo, usa el infinitivo: para / sin / con el fin de + infinitivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Coloca el micrófono en el centro, de modo que todos te ___.', options: ['oyeron', 'oyen', 'oigan'], answer: 2, why: 'Tras un imperativo, el resultado todavía es un objetivo: de modo que + subjuntivo, oigan.', en: 'Put the microphone in the middle so that everyone can hear you.' },
            { prompt: 'Se fue la luz durante el video, de manera que lo ___ dos veces.', options: ['pusiéramos', 'pongamos', 'pusimos'], answer: 2, why: 'Es una consecuencia real (= así que): indicativo, pusimos.', en: 'The power went out during the video, so we played it twice.' },
            { prompt: 'Corre, que ya ___ Amparo por la escalera.', options: ['suba', 'subiera', 'sube'], answer: 2, why: '«Que» explica la causa de la orden (porque ya sube): indicativo.', en: 'Hurry, Amparo is already coming up the stairs.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Un sujeto o dos? ¿Ahora o antes?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿cuántos sujetos hay? ¿el marco es presente o pasado? ¿objetivo o resultado? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿cuántos sujetos hay? ¿el marco es presente o pasado? ¿objetivo o resultado? Toca para ver la corrección. (One subject or two? Present or past frame? Aim or result?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El año pasado pusimos música para que Fermín no oiga nada.', right: 'El año pasado pusimos música para que Fermín no oyera nada.', why: 'Marco pasado y situación cerrada: imperfecto de subjuntivo. El presente solo es posible si el objetivo sigue abierto ahora.' },
            { wrong: 'Raúl entró en el salón sin que hiciera ruido.', right: 'Raúl entró en el salón sin hacer ruido.', why: 'Raúl entra y Raúl no hace ruido: mismo sujeto, sin + infinitivo.' },
            { wrong: 'Lo preparamos todo sin que Amparo se enteró.', right: 'Lo preparamos todo sin que Amparo se enterara.', why: 'Después de «sin que», siempre subjuntivo, también cuando cuentas un hecho real.' },
            { wrong: 'Esconde el regalo, no va a ser que lo encuentre.', right: 'Esconde el regalo, no vaya a ser que lo encuentre.', why: 'Es una expresión fija con subjuntivo: no vaya a ser que (en pasado, no fuera a ser que).' },
            { wrong: 'Pon el cartel en la puerta, de modo que lo ven todos.', right: 'Pon el cartel en la puerta, de modo que lo vean todos.', why: 'Después de una orden, el resultado es todavía un objetivo: de modo que + subjuntivo.' },
            { wrong: 'Llegué temprano para que yo preparara el salón.', right: 'Llegué temprano para preparar el salón.', why: 'El mismo sujeto (yo) en las dos partes: para + infinitivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Beatriz se marchó de la reunión sin que nadie le ___ las gracias.', options: ['diera', 'dio', 'dar'], answer: 0, why: 'Otro sujeto (nadie) y pasado: sin que + imperfecto de subjuntivo.', en: 'Beatriz left the meeting without anyone thanking her.' },
            { prompt: 'Irene mandó los correos desde su casa ___ Amparo no viera nada.', options: ['sin', 'para', 'para que'], answer: 2, why: 'Hay otro sujeto (Amparo) y un verbo conjugado: para que + subjuntivo.', en: 'Irene sent the emails from home so that Amparo wouldn’t see anything.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta una sorpresa que preparó o recibió, con una frase con «para que», una con «sin que» y una con «no fuera a ser que» o «no vaya a ser que».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El plan secreto', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Miércoles, en voz baja · Wednesday, in a low voice', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Raúl. Después tu alumno toca cada expresión marcada y explica: ¿mismo sujeto u otro? ¿presente o pasado? ¿objetivo, precaución o lo que no pasa?', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿mismo sujeto u otro? ¿presente o pasado? ¿objetivo, precaución o lo que no pasa? (Same subject or another? Present or past? Aim, precaution or what doesn’t happen?)' } },
          { kind: 'explore', title: 'Preparando la sorpresa', setting: 'Miércoles por la tarde en la biblioteca de Santa Rosa. Amparo está en su oficina. Raúl, que trabaja allí desde hace tres meses, busca a Irene para hablar de la despedida. Se tratan de tú. (Wednesday afternoon at the library. Raúl finds Irene to talk about the farewell while Amparo is in her office.)', lines: [
            { who: 'Raúl', text: 'Irene, ¿tienes un minuto? Es por lo del viernes.', en: 'Irene, have you got a minute? It’s about Friday.' },
            { who: 'Irene', text: 'Shh… Ven aquí atrás, [[que no nos oiga|blue]]. Y cierra la puerta, [[no vaya a ser que entre|violet]] alguien.', en: 'Shh… Come back here, so she can’t hear us. And shut the door, in case someone walks in.' },
            { who: 'Raúl', text: 'Listo. ¿Cómo lo hacemos el viernes [[para que no se dé cuenta|orange]]? Amparo se fija en todo.', en: 'Done. How do we manage it on Friday so that she doesn’t notice? Amparo notices everything.' },
            { who: 'Irene', text: 'A las cinco, don Julián le va a pedir que lo ayude con unas cajas del archivo, [[para que no suba|orange]] al salón hasta las seis.', en: 'At five, don Julián is going to ask her to help him with some boxes in the archive, so that she doesn’t go up to the hall until six.' },
            { who: 'Raúl', text: '¿Y cómo subimos las sillas [[sin que nos vea|violet]]?', en: 'And how do we carry the chairs up without her seeing us?' },
            { who: 'Irene', text: 'Por la escalera de atrás. El año pasado, para la jubilación de Fermín, lo hicimos así: subimos todo [[sin hacer|teal]] ni un ruido, y le pusimos la radio en su oficina [[para que no oyera|orange]] nada.', en: 'Up the back stairs. Last year, for Fermín’s retirement, that’s how we did it: we carried everything up without a sound and put the radio on in his office so he wouldn’t hear anything.' },
            { who: 'Raúl', text: '¡Qué bien pensado! ¿Y cómo ponemos las sillas?', en: 'Clever! And how do we set out the chairs?' },
            { who: 'Irene', text: 'En semicírculo, [[de manera que todos vean|blue]] la pantalla. Vamos a poner un video con mensajes de lectores de toda la vida.', en: 'In a semicircle, so that everyone can see the screen. We’re showing a video with messages from long-time readers.' },
            { who: 'Raúl', text: '¿Y quién paga el video? ¿Y el regalo?', en: 'And who’s paying for the video? And the present?' },
            { who: 'Irene', text: 'En marzo escribimos a la Asociación de Amigos de la Biblioteca [[con el fin de que nos pagaran|orange]] el video, y aceptaron. Y desde enero ahorramos un poco cada mes [[con vistas a comprarle|teal]] algo especial.', en: 'In March we wrote to the Friends of the Library association so that they would pay for the video, and they agreed. And since January we’ve been saving a little every month with a view to buying her something special.' },
            { who: 'Raúl', text: 'Perfecto. Oye, Beatriz está un poco molesta porque no le toca dar un discurso.', en: 'Great. By the way, Beatriz is a bit upset because she isn’t giving a speech.' },
            { who: 'Irene', text: 'Ay, sí. Explícaselo tú, con tacto, [[sin que se ofenda|violet]]. Y el viernes llega a las cuatro [[para ayudarme|teal]] con todo, ¿sí?', en: 'Oh, right. You explain it to her, tactfully, without offending her. And on Friday come at four to help me with everything, OK?' },
          ], notes: {
            'que no nos oiga': 'Imperativo («ven») + que + subjuntivo = para que no nos oiga. Es finalidad coloquial, muy de la lengua hablada.',
            'no vaya a ser que entre': 'Finalidad preventiva: Irene quiere evitar un riesgo. Expresión fija con «vaya» + presente de subjuntivo.',
            'para que no se dé cuenta': 'Otro sujeto (Amparo) y el plan es futuro: para que + presente de subjuntivo.',
            'para que no suba': 'El marco es futuro («le va a pedir»): presente de subjuntivo. Amparo es otro sujeto.',
            'sin que nos vea': 'Lo que no debe ocurrir, con otro sujeto (Amparo): sin que + subjuntivo.',
            'sin hacer': 'Mismo sujeto (nosotros subimos, nosotros no hacemos ruido): sin + infinitivo.',
            'para que no oyera': 'Recuerdo del año pasado: marco pasado y cerrado → imperfecto de subjuntivo.',
            'de manera que todos vean': 'Dice cómo se colocan las sillas y con qué objetivo: de manera que + subjuntivo (= para que).',
            'con el fin de que nos pagaran': 'Registro más formal; «escribimos» es pasado (marzo) y la acción ya ocurrió: imperfecto de subjuntivo.',
            'con vistas a comprarle': 'Ahorran pensando en un objetivo futuro. Mismo sujeto: con vistas a + infinitivo.',
            'sin que se ofenda': 'Otro sujeto (Beatriz): lo que no debe pasar. Imperativo («explícaselo») → presente de subjuntivo.',
            'para ayudarme': 'Raúl llega y Raúl ayuda: mismo sujeto, para + infinitivo.',
          } },
        ] },
        { title: '¿Qué entendiste? · What did you understand?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Para qué va a pedir ayuda don Julián a Amparo?', options: ['Para mover las cajas antes de la fiesta.', 'Para que no suba al salón antes de las seis.', 'Para enseñarle el video.'], answer: 1, why: 'Irene lo dice: «para que no suba al salón hasta las seis». Las cajas son la excusa.', en: 'Why is don Julián going to ask Amparo for help?' },
            { prompt: '¿Qué hicieron el año pasado para que Fermín no oyera nada?', options: ['Cerraron la puerta del salón.', 'Lo llevaron al archivo.', 'Le pusieron la radio en su oficina.'], answer: 2, why: '«Le pusimos la radio en su oficina para que no oyera nada».', en: 'What did they do last year so that Fermín wouldn’t hear anything?' },
            { prompt: '¿Qué tiene que hacer Raúl con Beatriz?', options: ['Pedirle dinero para el regalo.', 'Explicarle la situación con tacto.', 'Pedirle que dé un discurso.'], answer: 1, why: '«Explícaselo tú, con tacto, sin que se ofenda».', en: 'What does Raúl have to do about Beatriz?' },
          ] },
        ] },
        { title: '¿Qué tipo de finalidad? · Which kind?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Clasifica las frases del plan · Sort the sentences from the plan', categories: [
            { id: 'mismo', label: 'MISMO SUJETO · infinitivo', tone: 'teal' },
            { id: 'otro', label: 'OTRO SUJETO · para que / con el fin de que', tone: 'orange' },
            { id: 'evitar', label: 'LO QUE NO PASA O SE EVITA · sin que / no vaya a ser que', tone: 'violet' },
          ], items: [
            { text: 'Irene llega temprano para colgar los adornos.', answer: 'mismo', why: 'Irene llega e Irene cuelga: infinitivo.' },
            { text: 'Don Julián entretiene a Amparo para que no suba.', answer: 'otro', why: 'Don Julián entretiene; Amparo no sube: otro sujeto.' },
            { text: 'Esconden el pastel, no vaya a ser que Amparo lo vea.', answer: 'evitar', why: 'Precaución: quieren evitar un riesgo.' },
            { text: 'Suben las sillas sin que nadie los vea.', answer: 'evitar', why: 'Dice lo que no ocurre mientras suben las sillas.' },
            { text: 'Escribieron a la asociación con el fin de que pagara el video.', answer: 'otro', why: 'Ellos escriben; la asociación paga: otro sujeto.' },
            { text: 'Ahorran con vistas a comprarle un regalo.', answer: 'mismo', why: 'Ellos ahorran y ellos compran: con vistas a + infinitivo.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Sujeto, marco y significado. Subject, frame and meaning.',
      steps: [
        { title: 'Antes y después de la fiesta · Before and after the party', blocks: [
          { kind: 'choice', items: [
            { context: 'Irene a Raúl, el lunes. (Irene to Raúl on Monday.)', prompt: 'Guarda las invitaciones en tu cajón, para que Amparo no las ___.', options: ['vea', 'viera', 've'], answer: 0, why: 'Imperativo («guarda») → para que + presente de subjuntivo: vea.', en: 'Keep the invitations in your drawer so that Amparo doesn’t see them.' },
            { context: 'Irene recuerda la jubilación de Fermín. (Irene remembers Fermín’s retirement.)', prompt: 'Aquel año le regalamos un viaje para que ___ a su hija en Oaxaca.', options: ['visitaría', 'visitara', 'visite'], answer: 1, why: '«Regalamos» (pasado) y todo terminó: imperfecto de subjuntivo, visitara.', en: 'That year we gave him a trip so that he could visit his daughter in Oaxaca.' },
            { context: 'Nota de Irene. (Irene’s note.)', prompt: 'Mañana llegaré a las tres con el objeto de ___ los adornos antes de que llegue el público.', options: ['cuelgo', 'colgar', 'que cuelgue'], answer: 1, why: 'Yo llego y yo cuelgo: mismo sujeto, infinitivo.', en: 'Tomorrow I’ll arrive at three in order to hang the decorations before the guests arrive.' },
            { context: 'Raúl cuenta el viernes. (Raúl tells what happened on Friday.)', prompt: 'Don Julián entretuvo a Amparo en el archivo sin que ella ___ nada raro.', options: ['notó', 'notara', 'note'], answer: 1, why: 'Sin que + subjuntivo; marco pasado → imperfecto: notara.', en: 'Don Julián kept Amparo busy in the archive without her noticing anything odd.' },
            { context: 'Irene a Raúl, el viernes. (Irene to Raúl on Friday.)', prompt: 'Pon la cámara detrás de los libros, no vaya a ser que Amparo la ___ al entrar.', options: ['viera', 've', 'vea'], answer: 2, why: '«No vaya a ser que» en presente → presente de subjuntivo: vea.', en: 'Put the camera behind the books in case Amparo sees it as she comes in.' },
          ] },
        ] },
        { title: '¿Objetivo o no? · Aim or not?', blocks: [
          { kind: 'classify', title: 'Mira el modo del verbo · Look at the mood', categories: [
            { id: 'objetivo', label: 'OBJETIVO · subjuntivo', tone: 'blue' },
            { id: 'resultado', label: 'CONSECUENCIA O CAUSA · indicativo', tone: 'orange' },
          ], items: [
            { text: 'Amparo llegó media hora antes, de modo que tuvimos que esconder el pastel deprisa.', answer: 'resultado', why: 'Un resultado real: de modo que = así que, indicativo.' },
            { text: 'Pusimos las sillas de manera que nadie quedara detrás de la columna.', answer: 'objetivo', why: 'Cómo las pusimos y con qué fin: subjuntivo.' },
            { text: 'Acércate, que te vean todos en el video.', answer: 'objetivo', why: 'Imperativo + que + subjuntivo = para que te vean.' },
            { text: 'Date prisa, que Amparo ya está subiendo.', answer: 'resultado', why: '«Que» da la causa de la orden (porque ya está subiendo): indicativo.' },
            { text: 'Habla más alto, de modo que te oigan los de atrás.', answer: 'objetivo', why: 'Tras una orden, el resultado es un objetivo: subjuntivo.' },
            { text: 'Las luces estaban apagadas, de manera que Amparo no vio a nadie al entrar.', answer: 'resultado', why: 'Un hecho que ocurrió como consecuencia: indicativo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Le pedimos a don Julián que la entretuviera para que no subiera al salón.', ok: true, why: 'Correcta: marco pasado y situación cerrada → imperfecto de subjuntivo en las dos subordinadas.' },
            { sentence: 'Raúl salió por la puerta de atrás sin que hiciera ruido.', ok: false, options: ['Raúl salió por la puerta de atrás sin que hacía ruido.', 'Raúl salió por la puerta de atrás sin que haga ruido.', 'Raúl salió por la puerta de atrás sin hacer ruido.'], answer: 2, why: 'Mismo sujeto (Raúl sale, Raúl no hace ruido): sin + infinitivo.' },
            { sentence: 'Antes de la fiesta guardé la tarjeta en mi bolso para que Amparo no la encuentre.', ok: false, options: ['Antes de la fiesta guardé la tarjeta en mi bolso para que Amparo no la encontró.', 'Antes de la fiesta guardé la tarjeta en mi bolso para que Amparo no la encontrara.', 'Antes de la fiesta guardé la tarjeta en mi bolso para que Amparo no la encontraría.'], answer: 1, why: 'La fiesta ya pasó y todo está cerrado: para que + imperfecto de subjuntivo, encontrara.' },
            { sentence: 'Lleva una chaqueta, no vaya a ser que haga frío en el salón.', ok: true, why: 'Correcta: precaución con la expresión fija «no vaya a ser que» + presente de subjuntivo.' },
            { sentence: 'Coloca el proyector en el centro, de modo que todos ven el video.', ok: false, options: ['Coloca el proyector en el centro, de modo que todos vieran el video.', 'Coloca el proyector en el centro, de modo que todos vean el video.', 'Coloca el proyector en el centro, de modo que todos ver el video.'], answer: 1, why: 'Tras un imperativo, «de modo que» expresa el objetivo: presente de subjuntivo, vean.' },
            { sentence: 'Lo organizamos todo sin que nadie se lo contara a Amparo.', ok: true, why: 'Correcta: sin que + nadie + imperfecto de subjuntivo en un marco pasado.' },
          ] },
        ] },
        { title: 'Mensajes del jueves · Thursday’s messages', blocks: [
          { kind: 'chat-fill', title: 'Chat de Irene y Raúl · Irene and Raúl’s chat', lines: [
            { who: 'Raúl', text: 'Ya tengo el regalo. Salí a comprarlo a la hora de la comida, sin que Amparo me ___ nada.', options: ['preguntó', 'preguntara', 'pregunte'], answer: 1, why: 'Sin que + subjuntivo; «salí» es pasado → imperfecto: preguntara.' },
            { who: 'Irene', text: '¡Genial! Llévatelo a tu casa, no vaya a ser que lo ___ aquí.', options: ['encuentre', 'encuentra', 'encontrara'], answer: 0, why: 'Imperativo y precaución: no vaya a ser que + presente de subjuntivo.' },
            { who: 'Raúl', text: 'Sí. ¿Y los lectores? ¿Ya mandaron sus mensajes para el video?' },
            { who: 'Irene', text: 'Sí. Les escribí hace dos semanas con el fin de que ___ un saludo corto, y ya respondieron todos.', options: ['grabarían', 'grabaran', 'graban'], answer: 1, why: '«Les escribí» (pasado) y la acción ya está hecha: imperfecto de subjuntivo.' },
            { who: 'Raúl', text: 'Perfecto. Mañana llego a las cuatro ___ ayudarte con las sillas.', options: ['para', 'para que', 'sin'], answer: 0, why: 'Yo llego y yo ayudo: para + infinitivo.' },
            { who: 'Irene', text: 'Gracias. Y trae tu cámara, de modo que ___ grabar el discurso.', options: ['podamos', 'pudiéramos', 'podemos'], answer: 0, why: 'Tras un imperativo, «de modo que» expresa el objetivo: presente de subjuntivo.' },
            { who: 'Raúl', text: 'Listo. Y apagaré el celular durante la sorpresa, no ___ a ser que suene.', options: ['va', 'vaya', 'fuera'], answer: 1, why: 'Expresión fija en presente: no vaya a ser que.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Lo', 'preparamos', 'todo', 'sin', 'que', 'ella', 'se', 'enterara'], accept: ['Lo preparamos todo sin que ella se enterara', 'Lo preparamos todo sin que se enterara ella'], en: 'We prepared everything without her finding out.' },
            { tiles: ['Baja', 'la', 'voz,', 'no', 'vaya', 'a', 'ser', 'que', 'Amparo', 'nos', 'oiga'], accept: ['Baja la voz, no vaya a ser que Amparo nos oiga', 'Baja la voz, no vaya a ser que nos oiga Amparo'], en: 'Keep your voice down, in case Amparo hears us.' },
            { tiles: ['Les', 'escribimos', 'para', 'que', 'grabaran', 'un', 'mensaje'], accept: ['Les escribimos para que grabaran un mensaje'], en: 'We wrote to them so that they would record a message.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Une, cambia el marco o el registro · Join, shift the frame or the register', items: [
            { prompt: 'Raúl entró en el salón. Nadie lo vio.', instruction: 'Une las dos frases con «sin que». Empieza: «Raúl entró en el salón…».', accept: ['Raúl entró en el salón sin que nadie lo viera', 'Raúl entró en el salón sin que nadie lo viese', 'Raúl entró en el salón sin que lo viera nadie', 'Raúl entró en el salón sin que lo viese nadie'] },
            { prompt: 'Irene salió de la oficina. No dijo adiós.', instruction: 'Une las dos frases con «sin» + infinitivo (mismo sujeto).', accept: ['Irene salió de la oficina sin decir adiós'] },
            { prompt: 'Irene, el jueves: «Pongo la mesa al fondo para que todos vean la pantalla».', instruction: 'La fiesta ya pasó. Cuéntalo. Empieza: «Irene puso la mesa al fondo…».', accept: ['Irene puso la mesa al fondo para que todos vieran la pantalla', 'Irene puso la mesa al fondo para que todos viesen la pantalla'] },
            { prompt: 'Carta a la asociación: «Les escribimos para que nos ayuden con los gastos del homenaje».', instruction: 'Hazla más formal con «con el fin de que» o «con el objeto de que».', accept: ['Les escribimos con el fin de que nos ayuden con los gastos del homenaje', 'Les escribimos con el objeto de que nos ayuden con los gastos del homenaje', 'Les escribimos con objeto de que nos ayuden con los gastos del homenaje'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta algo que hizo la semana pasada para que otra persona pudiera hacer algo, y algo que hizo sin que nadie lo supiera.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Irene', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Para Mónica, que no pudo venir · For Mónica, who couldn’t come', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada finalidad y lo que se quería evitar. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada «para que», «sin que» y cada precaución. (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Irene', channel: 'NOTA DE VOZ · DE IRENE PARA MÓNICA', src: '/audio/grammar-live/440.mp3',
            before: 'Es sábado. Mónica, una compañera de la biblioteca, estaba de viaje y no pudo ir a la despedida. Irene le manda un audio. ¿Qué crees que le cuenta? (Mónica missed the farewell. What do you think Irene tells her?)',
            gist: { prompt: '¿Para qué manda Irene el audio?', options: ['Para pedirle a Mónica que organice otra fiesta.', 'Para contarle cómo salió la despedida de Amparo.', 'Para quejarse de que Amparo subió antes de tiempo.'], answer: 1, why: 'Lo dice al principio: «para que sepas cómo salió la despedida de Amparo».', en: 'Why does Irene send the audio message?' },
            details: [
              { prompt: '¿Para qué llevó don Julián a Amparo al archivo?', options: ['Para que no viera cómo subían las sillas.', 'Para buscar unas fotos antiguas.', 'Para que preparara su discurso.'], answer: 0, why: '«La llevó al archivo con una excusa, para que no viera cómo subíamos las sillas».', en: 'Why did don Julián take Amparo to the archive?' },
              { prompt: '¿Por qué se quedó Raúl en la escalera?', options: ['Porque llegó tarde.', 'Por si Amparo subía antes de tiempo.', 'Para grabar la entrada de Amparo.'], answer: 1, why: '«Raúl se quedó en la escalera, no fuera a ser que Amparo subiera antes de tiempo».', en: 'Why did Raúl stay on the stairs?' },
              { prompt: '¿Para qué grabaron el discurso?', options: ['Para mandarlo a la asociación.', 'Para que Mónica también pudiera verlo.', 'Para ponerlo en el video.'], answer: 1, why: '«Grabamos el discurso con el fin de que tú también pudieras verlo».', en: 'Why did they record the speech?' },
              { prompt: '¿Qué quiere Irene que haga Mónica cuando vuelva?', options: ['Que la llame, para contarle lo de las flores.', 'Que le devuelva la cámara.', 'Que escriba la crónica para el boletín.'], answer: 0, why: '«Cuando vuelvas, llámame, que te cuente lo de las flores».', en: 'What does Irene want Mónica to do when she gets back?' },
            ],
            transcript: 'Mónica, hola, soy Irene. Te mando este audio [[para que sepas|orange]] cómo salió la despedida de Amparo, porque sé que te habría encantado estar. Salió increíble. Lo preparamos todo [[sin que ella se enterara|violet]] de nada. El viernes por la tarde, don Julián la llevó al archivo con una excusa, [[para que no viera|orange]] cómo subíamos las sillas. Pusimos la mesa al fondo, [[de manera que todos pudieran|blue]] ver la pantalla, y apagamos las luces. Raúl se quedó en la escalera, [[no fuera a ser que Amparo subiera|violet]] antes de tiempo. Y claro, subió antes de tiempo, así que tuvimos que esconder el pastel detrás de las cortinas. Cuando entró y nos vio a todos, se puso a llorar, y nosotros también. Ah, y grabamos el discurso [[con el fin de que tú también pudieras|orange]] verlo. Te lo mando esta noche. Oye, cuando vuelvas, llámame, [[que te cuente|blue]] lo de las flores, que es una historia buenísima. Un abrazo.',
            reply: { teacher: 'Tú eres Irene. Tu alumno es Mónica y responde con otro audio: reacciona, pregunta para qué hicieron alguna cosa y cuenta algo que preparó ella antes de irse sin que nadie lo supiera.', self: 'Responde como Mónica, en voz alta: reacciona, pregunta para qué hicieron alguna cosa y cuenta algo que preparaste antes de irte sin que nadie lo supiera. (Reply as Mónica.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Sorpresas, precauciones y objetivos', coach: '¿Para qué? ¿Qué querías evitar? What for? What did you want to avoid?',
      steps: [
        { title: 'Habla de tus planes y tus secretos · Talk about your plans and secrets', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de experiencias reales. Si aparece «sin que» o «para que» con indicativo, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de elegir la forma, piensa: ¿mismo sujeto u otro? ¿presente o pasado? (Answer aloud with real examples.)' } },
          { kind: 'talk', cards: [
            { q: '¿Alguna vez preparaste una sorpresa? ¿Qué hiciste para que la otra persona no sospechara? · Have you ever prepared a surprise? How did you keep it secret?', followUps: ['¿Alguien estuvo a punto de contarlo?', '¿Cómo reaccionó la persona?'], phrases: ['Lo organicé todo [[sin que se enterara|violet]]…', 'Le pedí a su hermana que lo distrajera [[para que no viera|orange]]…', 'Escondí el regalo, [[no fuera a ser que lo encontrara|violet]].'], hint: 'Todo pasó: sin que / para que + imperfecto de subjuntivo.', example: 'Para los cuarenta de mi pareja organicé una cena con sus amigos de la universidad sin que se enterara. Le pedí a su hermana que lo llevara al cine para que no viera cómo preparábamos la casa.', next: 'Y a ti, ¿te han dado alguna sorpresa?' },
            { q: '¿Qué precauciones tomas antes de un viaje o de un día importante? · What precautions do you take before a trip or a big day?', followUps: ['¿Alguna vez te pasó lo que querías evitar?', '¿Eres una persona precavida o improvisas?'], phrases: ['Siempre llevo…, [[no vaya a ser que|violet]]…', 'Pongo dos alarmas, [[no sea que|violet]]…', 'Lo reviso todo la noche antes [[para no|teal]]…'], hint: 'Precaución: no vaya a ser que / no sea que + presente de subjuntivo.', example: 'Antes de un viaje siempre hago una copia del pasaporte, no vaya a ser que lo pierda. Y pongo dos alarmas, no sea que me quede dormido.' },
            { q: 'Piensa en una reunión, una clase o una fiesta que preparaste. ¿Cómo organizaste el espacio y para qué? · How did you set up a space for an event, and why?', followUps: ['¿Funcionó?', '¿Qué cambiarías la próxima vez?'], phrases: ['Puse las mesas [[de manera que|blue]] todos pudieran…', 'Cambié la luz [[para que|orange]] la gente estuviera…', 'Al final llovió, de modo que tuvimos que…'], hint: 'Objetivo: de manera que + subjuntivo. Resultado real: de modo que + indicativo.', example: 'En la fiesta de mi sobrino pusimos las mesas en el jardín, de manera que los niños pudieran jugar cerca. Pero empezó a llover, de modo que tuvimos que entrar todos en la sala.', teacher: 'Si tu alumno solo usa «para que», tú le propones reformular con «de manera que» y le pides un resultado real con indicativo.' },
            { q: 'Alguien hizo algo por ti en el pasado para que pudieras conseguir algo: estudiar, viajar, empezar un trabajo. ¿Qué hizo? · Someone once did something so that you could achieve something. What was it?', followUps: ['¿Se lo agradeciste?', '¿Has hecho tú algo parecido por otra persona?'], phrases: ['Mi abuela me prestó dinero [[para que|orange]] pudiera…', 'Mi jefe cambió mi horario [[con el fin de que|orange]]…', 'Lo hizo [[sin que|violet]] yo se lo pidiera.'], hint: 'Marco pasado y cerrado: imperfecto de subjuntivo.', example: 'Cuando estudiaba, mi tía me dejó su departamento en verano para que pudiera preparar los exámenes tranquila. Lo hizo sin que yo se lo pidiera.' },
            { q: 'Eres Irene. Escribes a la Asociación de Amigos de la Biblioteca para pedir dinero para el próximo homenaje. ¿Qué pones? · You are Irene: make a formal request for funding.', followUps: ['¿Qué pasará si no aceptan? (What if they say no?)', '¿Cómo cierras la carta?'], phrases: ['Les escribimos [[con el fin de|teal]] solicitar…', '[[con el objeto de que|orange]] los vecinos puedan…', '[[con vistas a|teal]] la celebración de…'], hint: 'Registro formal: con el fin de, con el objeto de, a fin de que, con vistas a.', example: 'Les escribimos con el fin de solicitar una ayuda con vistas al homenaje de diciembre. Queremos grabar un video con el objeto de que los vecinos puedan recordar la historia de la biblioteca.', teacher: 'Tú eres la presidenta de la asociación y haces preguntas sobre el dinero: tu alumno justifica cada gasto con un conector formal.' },
            { q: 'En la fiesta: eres Irene y hablas con los invitados. Da órdenes rápidas y di para qué. · At the party: give quick instructions and say what for.', followUps: ['¿Y si alguien no te hace caso?', '¿Qué dices cuando llega Amparo?'], phrases: ['Ven, [[que te presente|blue]] a…', 'Acércate, [[que te vea|blue]]…', 'Date prisa, que **sube** Amparo.'], hint: 'Orden + que + subjuntivo = para que. Orden + que + indicativo = porque.', example: 'Beatriz, ven, que te presente a la hija de Amparo. Raúl, acércate a la pantalla, que te vean todos. ¡Apaguen la luz, que sube Amparo!' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («Lo organicé sin que se enteró»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra experiencia distinta. (Now ask the questions aloud and answer with a different experience.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una crónica para el boletín', coach: 'Cuenta para qué se hizo cada cosa. Say what each thing was for.',
      steps: [
        { title: 'La despedida de Amparo · Amparo’s farewell', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada finalidad: ¿mismo sujeto u otro? ¿marco pasado? Después tu alumno lee la crónica en voz alta.', self: 'Escribe tu crónica y toca «Revisar mi texto». Después repasa cada finalidad: ¿mismo sujeto u otro? ¿marco pasado? (Check every purpose clause.)' } },
          { kind: 'write', title: 'Crónica de una despedida · Chronicle of a farewell', situation: 'Eres Raúl (o eres tú, después de una despedida, una fiesta o un evento que ayudaste a organizar). Escribes una crónica breve para el boletín de la Asociación de Amigos de la Biblioteca: cuentas cómo se preparó el acto, para qué se hizo cada cosa y cómo salió. Registro semiformal. (You are Raúl, or yourself after an event you helped organise. Write a short semi-formal chronicle for a newsletter: how it was prepared, what each thing was for and how it went.)', task: [
            'Presenta el acto: quién, cuándo y por qué. (Introduce the event.)',
            'Cuenta dos preparativos con su finalidad en pasado: para que / con el fin de que + imperfecto de subjuntivo.',
            'Di algo que se hizo sin que alguien se diera cuenta (sin que + subjuntivo).',
            'Usa un conector formal (con el objeto de, con vistas a, a fin de) y una frase con de manera que + subjuntivo.',
            'Cierra con una invitación o un plan para el futuro. (Close with an invitation or a plan.)',
          ], starters: ['El pasado viernes, la biblioteca…', 'El equipo preparó el homenaje durante semanas sin que…', 'Con el fin de que el acto…', 'Colocamos…, de manera que…', 'Antes de irse, nos pidió que…', 'Con vistas al próximo año…', 'Si quieres colaborar…'],
            words: ['para que', 'con el fin de que', 'con el objeto de', 'con vistas a', 'sin que', 'sin + infinitivo', 'de manera que', 'no fuera a ser que'],
            model: 'La biblioteca despide a Amparo Lozano. El pasado viernes, la biblioteca pública de Santa Rosa despidió a su directora, Amparo Lozano, después de treinta y un años de trabajo. El equipo preparó el homenaje durante semanas [[sin que ella sospechara|violet]] nada. [[Con el fin de que el acto fuera|orange]] una verdadera sorpresa, don Julián, el conserje, la entretuvo en el archivo mientras los demás subíamos las sillas por la escalera de atrás. Las colocamos en semicírculo, [[de manera que todos pudieran|blue]] ver el video con los mensajes de lectores de toda la vida, que la asociación financió [[con el objeto de conservar|teal]] la memoria del barrio. Cuando Amparo entró en el salón, nadie pudo contener las lágrimas. Antes de irse, nos pidió que siguiéramos con el club de lectura infantil, y así lo haremos: [[con vistas al|teal]] próximo año, ya buscamos voluntarios. Si quieres colaborar, pasa por la biblioteca y te explicaremos todo [[para que puedas|orange]] empezar en septiembre.',
            minWords: 130,
            checks: [
              { label: 'Una finalidad en pasado (para que / con el fin de que… + imperfecto de subjuntivo)', pattern: '(?<!\\p{L})(?:para|fin\\s+de|objeto\\s+de|manera|modo)\\s+que\\s+(?:\\p{L}+\\s+){0,3}?\\p{L}+(?:ara|aras|áramos|aran|iera|ieras|iéramos|ieran|uera|ueras|uéramos|ueran|ase|asen|iese|iesen)(?!\\p{L})', tip: 'Cuenta para qué se hizo algo en el pasado: «para que no se enterara», «con el fin de que el acto fuera…».' },
              { label: 'Una frase con «sin que»', pattern: '(?<!\\p{L})sin\\s+que(?!\\p{L})', tip: 'Di algo que no ocurrió: «sin que nadie se diera cuenta», «sin que ella sospechara nada».' },
              { label: 'Un conector formal (con el fin de, con el objeto de, con vistas a, a fin de)', pattern: '(?<!\\p{L})(?:con\\s+el\\s+fin\\s+de|con\\s+(?:el\\s+)?objeto\\s+de|con\\s+vistas\\s+a|a\\s+fin\\s+de)(?!\\p{L})', tip: 'Sube el registro con «con el objeto de», «con vistas a» o «a fin de».' },
              { label: 'De manera que / de modo que', pattern: '(?<!\\p{L})de\\s+(?:manera|modo)\\s+que(?!\\p{L})', tip: 'Explica cómo se colocó o se hizo algo y con qué objetivo: «de manera que todos pudieran…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})sin\\s+que\\s+(?:\\p{L}+\\s+){0,2}?(?:supo|sospechó|vio|notó|enteró|dio|supieron|vieron|notaron|enteraron)(?!\\p{L})', why: 'Después de **sin que** va siempre el subjuntivo: «sin que nadie lo **supiera**», «sin que se **enterara**».' },
              { pattern: '(?<!\\p{L})no\\s+va\\s+a\\s+ser\\s+que(?!\\p{L})', why: 'La expresión es fija: **no vaya a ser que** (en pasado, **no fuera a ser que**).' },
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
            { tone: 'teal', label: 'MISMO SUJETO', formula: 'para · con el fin de · con el objeto de · con vistas a · sin + infinitivo', example: 'Raúl subió las sillas sin hacer ruido.', caption: 'el infinitivo no cambia con el tiempo', en: 'one subject: the infinitive, in present and past alike' },
            { tone: 'orange', label: 'OTRO SUJETO', formula: 'para que · a fin de que · con el fin de que + vea / viera', example: 'Pusimos música para que no oyera nada.', caption: 'marco presente → vea; marco pasado → viera', en: 'another subject: subjunctive, present or imperfect according to the main verb' },
            { tone: 'violet', label: 'LO QUE NO PASA O SE EVITA', formula: 'sin que + subjuntivo · no vaya a ser que / no fuera a ser que', example: 'Lo preparamos sin que nadie se enterara.', caption: 'siempre subjuntivo', en: 'what does not happen, or the risk you want to prevent: always subjunctive' },
            { tone: 'blue', label: 'OBJETIVO O RESULTADO', formula: 'de manera que / Ven, que… + subjuntivo ↔ + indicativo', example: 'Acércate, que te vea. / Corre, que cierran.', caption: 'subjuntivo = objetivo; indicativo = resultado o causa', en: 'the mood decides: subjunctive for an aim, indicative for a real result or a reason' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Tres preguntas: ¿**mismo sujeto**? → infinitivo (para, sin, con el fin de). ¿**Otro sujeto**? → que + subjuntivo, y el **verbo principal** decide entre **vea** y **viera**. ¿**Objetivo o hecho**? «De manera que» y «que» tras imperativo llevan subjuntivo si expresan un objetivo, e indicativo si cuentan un resultado o una causa.', en: 'Three questions: same subject? Use the infinitive. Another subject? Use que + subjunctive, with the main verb choosing vea or viera. Aim or fact? De manera que and que after an imperative take the subjunctive for an aim and the indicative for a result or a reason.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mi abuela siempre me daba dinero a escondidas, sin que mis padres lo ___.', options: ['sepan', 'supieran', 'sabían'], answer: 1, why: 'Sin que + subjuntivo; marco pasado → imperfecto: supieran.', en: 'My grandmother always slipped me money without my parents knowing.' },
            { prompt: 'Apunta mi número en un papel, no vaya a ser que te ___ sin batería.', options: ['quedes', 'quedaras', 'quedas'], answer: 0, why: 'Precaución en presente: no vaya a ser que + presente de subjuntivo.', en: 'Write my number down on paper, in case your battery dies.' },
            { prompt: 'En 2020 la empresa redujo la jornada con el objeto de que los empleados ___ cuidar a sus hijos.', options: ['pueden', 'podrían', 'pudieran'], answer: 2, why: 'Marco pasado y cerrado (2020): imperfecto de subjuntivo.', en: 'In 2020 the company shortened the working day so that employees could look after their children.' },
            { prompt: 'Corre, que ___ el último autobús.', options: ['se vaya', 'se fuera', 'se va'], answer: 2, why: 'Aquí «que» da la causa (porque se va el autobús): indicativo.', en: 'Run, the last bus is leaving.' },
            { prompt: 'Me fui de la reunión ___ despedirme, porque tenía mucha prisa.', options: ['sin', 'para', 'sin que'], answer: 0, why: 'Mismo sujeto (yo me fui, yo no me despedí): sin + infinitivo.', en: 'I left the meeting without saying goodbye because I was in a real hurry.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, otra sorpresa. Now, another surprise.', blocks: [
          { kind: 'lead', text: 'Los amigos de Elena le prepararon una fiesta por sus cuarenta años. Une las frases o cambia el marco.', en: 'Elena’s friends threw her a party for her fortieth birthday. Join the sentences or shift the time frame.' },
          { kind: 'rewrite', title: 'Los cuarenta de Elena · Elena’s fortieth', items: [
            { prompt: 'Sus amigos la invitaron a cenar. Ella no sospechó nada.', instruction: 'Une las frases con «sin que». Empieza: «Sus amigos la invitaron a cenar…».', accept: ['Sus amigos la invitaron a cenar sin que ella sospechara nada', 'Sus amigos la invitaron a cenar sin que ella sospechase nada', 'Sus amigos la invitaron a cenar sin que sospechara nada', 'Sus amigos la invitaron a cenar sin que sospechase nada'] },
            { prompt: 'Su hermana, el jueves: «Llamo a Elena para que no venga temprano».', instruction: 'La fiesta ya pasó. Empieza: «El jueves su hermana llamó a Elena…».', accept: ['El jueves su hermana llamó a Elena para que no viniera temprano', 'El jueves su hermana llamó a Elena para que no viniese temprano'] },
            { prompt: 'Esconde los regalos. Elena puede verlos.', instruction: 'Une las frases con «no vaya a ser que».', accept: ['Esconde los regalos, no vaya a ser que Elena los vea', 'Esconde los regalos, no vaya a ser que los vea Elena'] },
          ] },
        ] },
        { title: 'Ampliación · A que, no fuera a ser que y registro (opcional)', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: tras **ir / venir** la finalidad con otro sujeto también se dice con **a que + subjuntivo** («Vengo **a que** me **firmes** esto»); la precaución en pasado es **no fuera a ser que**; y cada conector tiene su registro.', en: 'For strong students or spare time: after ir / venir, a purpose with another subject can also be «a que» + subjunctive; the past precaution is «no fuera a ser que»; and each connector has its own register.' },
          { kind: 'choice', title: 'Un paso más · One step further', items: [
            { prompt: 'Ayer vine a la oficina a que me ___ el contrato, pero no estabas.', options: ['firmaras', 'firmabas', 'firmar'], answer: 0, why: 'Venir + a que + subjuntivo (otro sujeto: tú firmas); «vine» es pasado → imperfecto: firmaras.', en: 'Yesterday I came to the office for you to sign my contract, but you weren’t there.' },
            { prompt: 'Cerramos el salón con llave, no ___ a ser que entrara alguien.', options: ['fuera', 'iba', 'vaya'], answer: 0, why: 'En un marco pasado la expresión pasa a «no fuera a ser que» + imperfecto de subjuntivo.', en: 'We locked the hall in case anyone came in.' },
            { prompt: 'Informe oficial: «Se reorganizó el horario ___ facilitar la conciliación familiar».', options: ['no vaya a ser que', 'con vistas a', 'que'], answer: 1, why: '«Con vistas a» + infinitivo es propio del registro formal; las otras dos opciones son coloquiales y no encajan aquí.', en: 'Official report: the timetable was reorganised with a view to helping staff balance work and family.' },
            { prompt: '«Lo hizo sin que nadie se lo pidiera». ¿Qué significa?', options: ['Nadie se lo pidió: lo hizo por iniciativa propia.', 'Lo hizo para que nadie se lo pidiera.', 'Alguien se lo pidió, pero no lo hizo.'], answer: 0, why: '«Sin que nadie» niega que alguien se lo pidiera: fue idea suya.', en: '“He did it without anyone asking him”: what does it mean?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno cuenta una visita a una oficina con «fui a que me…» y una precaución pasada con «no fuera a ser que».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 141 · Subordinadas modales y comparativas irreales', text: 'Ya explicas para qué se hizo algo y qué se quería evitar: «Pusimos música para que no oyera nada», «Lo preparamos sin que se enterara». En la clase 141 usas el mismo imperfecto de subjuntivo para decir **cómo** se hace algo, comparándolo con algo irreal: «Entró **como si no hubiera pasado** nada». Es el paso natural: de «sin que» y «de manera que», que ya hablan del modo, a las comparaciones imaginarias.', en: 'You can now say what something was done for and what people wanted to avoid. In class 141 you use the same imperfect subjunctive to describe how something is done by comparing it with something unreal: “as if nothing had happened”. It is the natural next step: from «sin que» and «de manera que», which already talk about manner, to imaginary comparisons.', href: '/gramatica/subordinadas-modales-y-comparativas-irreales', label: 'Ir a la clase 141' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué hiciste la última vez para que alguien se sintiera bien, y qué preparaste sin que nadie lo supiera?». Respuesta esperada: una frase con «para que» y otra con «sin que», las dos con imperfecto de subjuntivo. Tarea: la crónica de Escribir sobre un evento real.' },
        ] },
      ],
    },
  ],
};
