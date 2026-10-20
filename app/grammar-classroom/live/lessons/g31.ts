import type { LiveLesson } from '../types';

/**
 * Lesson 31 · B1 · Condiciones y consejos.
 * Julia's team organizes a project meeting with alternatives; Julia and her colleague Andrés run through the class.
 */
export const lesson: LiveLesson = {
  id: 31,
  level: 'B1',
  title: 'Condiciones y consejos',
  subtitle: 'Plantear condiciones reales, acordar qué hacer en cada caso y dar consejos sin imponer.',
  legend: [
    { tone: 'blue', label: 'Si + presente · una condición real' },
    { tone: 'teal', label: 'Presente o futuro · la consecuencia o la regla' },
    { tone: 'orange', label: 'Yo + condicional · un consejo suave' },
  ],
  optionNotes: {
    confirmará: 'Después de «si» (condición real) no usamos futuro: «si confirma».',
    confirmaría: 'Después de «si» (condición real) no usamos condicional: «si confirma».',
    vendrá: 'Después de «si» no usamos futuro: «si no viene».',
    vendría: 'Después de «si» no usamos condicional: «si no viene».',
    elegiríamos: 'Para una regla que se repite, presente en las dos partes: «elegimos».',
    'habíamos elegido': 'El pluscuamperfecto habla de un pasado anterior a otro; aquí es una regla habitual.',
    'Enviarás el documento sin falta': 'El futuro con «tú» suena a orden, no a consejo.',
    'Si enviarías el documento': 'Después de «si» no va condicional, y esto no es un consejo completo.',
    'Envía el documento ya': 'El imperativo es una instrucción directa; el consejo suave se da con «yo + condicional».',
    hacería: 'El condicional de «hacer» es irregular: «haría».',
    tenería: 'El condicional de «tener» es irregular: «tendría».',
    poneríamos: 'El condicional de «poner» es irregular: «pondríamos».',
    deciría: 'El condicional de «decir» es irregular: «diría».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Condiciones reales y consejos', coach: 'Planear con alternativas y aconsejar sin mandar. Plan with alternatives and advise without ordering.',
      steps: [
        { title: 'Si + presente: una condición real · A real condition', blocks: [
          { kind: 'lead', text: 'El equipo de Julia organiza una reunión para revisar un proyecto. Todavía no saben cuántas personas van a venir, así que planean con alternativas: «**Si** todos **confirman** antes del miércoles, **reservaremos** una sala. **Si** dos personas no **pueden** venir, **haremos** una videollamada».', en: 'Julia’s team is organising a meeting to review a project. They don’t know yet how many people will come, so they plan with alternatives: “If everyone confirms before Wednesday, we’ll book a room. If two people can’t come, we’ll do a video call.”' },
          { kind: 'guide', text: { teacher: 'Lee los ejemplos y pregunta: «¿Es posible que pase? ¿Qué tiempo verbal hay después de "si"? ¿Y en la consecuencia?».', self: 'Lee los ejemplos. Fíjate en el verbo después de «si» y en el verbo de la consecuencia.' } },
          { kind: 'concept', tone: 'blue', label: 'SI + PRESENTE → FUTURO / PRESENTE', question: '¿Qué pasará si se cumple la condición?', en: 'What will happen if the condition is met?', formula: ['si + presente, futuro', 'si + presente, presente (decisión o plan)'],
            meaning: '«Si» presenta una **condición real o posible**: puede cumplirse o no. Aunque hable del futuro, después de «si» va el **presente**. La consecuencia va en **futuro** (una previsión o decisión) o en **presente** (un plan acordado).',
            examples: [
              { es: '[[Si Marta confirma hoy|blue]], [[reservaremos|teal]] la sala pequeña.', en: 'If Marta confirms today, we’ll book the small room.' },
              { es: '[[Si dos personas no pueden venir|blue]], [[haremos|teal]] una videollamada.', en: 'If two people can’t come, we’ll do a video call.' },
              { es: '[[Si todos confirman antes del miércoles|blue]], [[reservamos|teal]] la sala del viernes.', en: 'If everyone confirms before Wednesday, we book Friday’s room (an agreed plan).' },
              { es: '[[Hacemos|teal]] una llamada [[si Marta no viene|blue]].', en: 'We’ll make a call if Marta doesn’t come.' },
            ],
            note: 'El orden puede cambiar. Si la condición va primero, ponemos coma; si va al final, normalmente no.' },
          { kind: 'tip', icon: '!', title: 'Nunca futuro ni condicional después de «si»', text: '«Si Marta **confirma**», no «si Marta confirmará» ni «si Marta confirmaría». El futuro va en la otra parte: «…, **reservaremos** la sala».', en: 'Just like English “if”, Spanish “si” takes the present even when you talk about the future: “Si Marta confirma”, never “si Marta confirmará” or “si Marta confirmaría”. The future goes in the other half: “…, reservaremos la sala”.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Si el tren ___ retraso, llegaremos tarde a la reunión.', options: ['tendrá', 'tiene', 'tendría'], answer: 1, why: 'Condición real: «si» + presente.', en: 'The train may be delayed; in that case we’ll be late for the meeting.' },
            { prompt: 'Si todos están de acuerdo, ___ la fecha mañana.', options: ['confirmaremos', 'confirmaríamos', 'confirmáramos'], answer: 0, why: 'La consecuencia de una condición real puede ir en futuro.', en: 'Everyone may agree; then the date gets confirmed tomorrow.' },
          ] },
        ] },
        { title: 'Si + presente → presente: una regla · A rule', mascot: '/brand/mascot/studying.webp', coach: 'Cada vez que pasa esto, hacemos aquello.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'REGLA HABITUAL', question: '¿Qué hacemos siempre en ese caso?', en: 'A habit: what do we always do in that case?', formula: ['si + presente, presente'],
            meaning: 'Con **presente en las dos partes**, la frase expresa una **regla** o una costumbre: una situación que se repite y la reacción práctica que la acompaña.',
            examples: [
              { es: '[[Si la reunión dura más de una hora|blue]], [[hacemos|teal]] una pausa.', en: 'If the meeting lasts more than an hour, we take a break.' },
              { es: '[[Si hay muchos temas|blue]], [[elegimos|teal]] dos y [[dejamos|teal]] el resto para otro día.', en: 'If there are lots of topics, we choose two and leave the rest for another day.' },
              { es: '[[Si alguien llega tarde|blue]], [[empezamos|teal]] igual.', en: 'If someone is late, we start anyway.' },
              { es: '[[Apago|teal]] el teléfono [[si tengo que concentrarme|blue]].', en: 'I switch off my phone if I need to concentrate.' },
            ] },
          { kind: 'compare', title: 'Un plan o una regla · A plan or a rule', columns: [
            { tone: 'teal', label: 'PREVISIÓN', sentence: '[[Si Marta confirma|blue]], [[reservaremos|teal]] la sala.', idea: 'Una situación concreta: esta reunión, esta semana.', en: 'A forecast: one particular situation, this meeting, this week.' },
            { tone: 'teal', label: 'REGLA', sentence: '[[Si la reunión dura mucho|blue]], [[hacemos|teal]] una pausa.', idea: 'Lo que hacemos siempre que pasa.', en: 'A rule: what we do every time it happens.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Regla del equipo: si un documento es muy largo, ___ un resumen.', options: ['enviamos', 'enviaríamos', 'enviáramos'], answer: 0, why: 'Una regla habitual: presente en las dos partes.', en: 'Team rule: whenever a document is very long, a summary goes out.' },
            { prompt: '«Si llueve, trabajamos desde casa.» ¿Qué expresa?', options: ['Una costumbre del equipo.', 'Un consejo.', 'Una situación imposible.'], answer: 0, why: 'Presente + presente: lo que hacen siempre que llueve.', en: '“If it rains, we work from home.” What does it express?' },
          ] },
        ] },
        { title: 'Yo + condicional: un consejo · Giving advice', mascot: '/brand/mascot/speaking.webp', coach: 'Aconseja como si fuera tu decisión.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'YO + CONDICIONAL', question: '¿Qué harías tú?', en: 'What would you do?', formula: ['yo + condicional (infinitivo + -ía)'],
            meaning: 'Para aconsejar **sin dar una orden**, decimos lo que **haríamos nosotros**. La otra persona decide. Es una forma muy natural y educada de proponer soluciones.',
            examples: [
              { es: '[[Yo enviaría|orange]] el resumen antes de reservar.', en: 'I would send the summary before booking.' },
              { es: '[[Yo mantendría|orange]] la fecha y [[cambiaría|orange]] el formato.', en: 'I’d keep the date and change the format.' },
              { es: '[[Yo reservaría|orange]] una hora como máximo.', en: 'I’d book an hour at most.' },
              { es: 'También [[haría|orange]] una lista de preguntas antes de empezar.', en: 'I’d also make a list of questions before starting.' },
            ],
            note: 'Compara: «Envía los documentos hoy» (orden) / «Yo enviaría los documentos hoy» (consejo).' },
          { kind: 'table', title: 'El condicional regular: infinitivo + terminación · The regular conditional: infinitive + ending', head: ['', 'enviar', 'comer', 'decidir'], rows: [
            ['yo', 'enviar**ía**', 'comer**ía**', 'decidir**ía**'],
            ['tú', 'enviar**ías**', 'comer**ías**', 'decidir**ías**'],
            ['él / ella / usted', 'enviar**ía**', 'comer**ía**', 'decidir**ía**'],
            ['nosotros / nosotras', 'enviar**íamos**', 'comer**íamos**', 'decidir**íamos**'],
            ['ellos / ellas / ustedes', 'enviar**ían**', 'comer**ían**', 'decidir**ían**'],
          ], note: 'Las tres conjugaciones tienen las mismas terminaciones y todas llevan tilde en la í.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase es un **consejo**, no una orden?', options: ['Reserva la sala hoy.', 'Yo reservaría la sala hoy.', 'Reservarás la sala hoy.'], answer: 1, why: '«Yo + condicional» propone sin imponer.', en: 'Which sentence is advice, not an order?' },
            { prompt: 'Yo ___ (hablar) con el jefe antes de decidir.', options: ['hablaré', 'hablaría', 'hablaba'], answer: 1, why: 'Condicional: infinitivo + -ía.', en: 'You talk about yourself: speaking to the boss before deciding is your suggestion.' },
          ] },
        ] },
        { title: 'Condicionales irregulares · Irregular conditionals', mascot: '/autoestudio/mascot/noting.webp', coach: 'Los mismos irregulares que el futuro.', blocks: [
          { kind: 'table', title: 'Raíz irregular + -ía, -ías, -ía, -íamos, -ían · Irregular stem + -ía, -ías, -ía, -íamos, -ían', head: ['Infinitivo', 'Raíz', 'yo', 'Ejemplo de consejo'], rows: [
            ['hacer', 'har-', '**haría**', 'Yo [[haría|orange]] una lista de preguntas.'],
            ['decir', 'dir-', '**diría**', 'Yo le [[diría|orange]] la verdad.'],
            ['tener', 'tendr-', '**tendría**', 'Yo [[tendría|orange]] un plan B.'],
            ['poner', 'pondr-', '**pondría**', 'Yo [[pondría|orange]] la reunión por la tarde.'],
            ['salir', 'saldr-', '**saldría**', 'Yo [[saldría|orange]] antes para evitar el tráfico.'],
            ['venir', 'vendr-', '**vendría**', 'Yo [[vendría|orange]] media hora antes.'],
            ['poder', 'podr-', '**podría**', 'Tú [[podrías|orange]] llamar a Marta.'],
            ['mantener', 'mantendr-', '**mantendría**', 'Yo [[mantendría|orange]] la fecha.'],
          ], note: 'Son las mismas raíces que en el futuro: haré → haría, tendré → tendría, podré → podría.' },
          { kind: 'tip', icon: '💡', title: 'Otras formas de aconsejar', text: 'Con el mismo tiempo verbal puedes decir: «**Podrías** llamar a Marta», «**Deberías** enviar el resumen», «**Sería** mejor esperar». Más adelante verás también «Si yo fuera tú…», que es otra estructura.', en: 'With the same tense you can also say “Podrías llamar a Marta” (you could call Marta), “Deberías enviar el resumen” (you should send the summary), “Sería mejor esperar” (it would be better to wait). Later you will also see “Si yo fuera tú…” (if I were you), which is a different structure.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Yo ___ (hacer) la reunión en línea.', options: ['hacería', 'haría', 'hiciera'], answer: 1, why: '«Hacer» es irregular: «haría».', en: 'You suggest holding the meeting online.' },
            { prompt: 'Yo ___ (tener) preparada una alternativa.', options: ['tenería', 'tendría', 'tendré'], answer: 1, why: '«Tener» → raíz «tendr-»: «tendría».', en: 'You suggest having an alternative ready.' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: '¿Prevés, describes una regla o aconsejas?', blocks: [
          { kind: 'decide', title: 'Piensa en lo que quieres decir · Think about what you want to say', steps: [
            { q: '¿Quieres aconsejar sin dar una orden?', yes: 'Usa **yo + condicional**: «[[Yo enviaría|orange]] el resumen hoy».', no: 'next' },
            { q: '¿Es una situación que se repite siempre?', yes: 'Usa **si + presente, presente**: «[[Si dura mucho|blue]], [[hacemos|teal]] una pausa».', no: 'Para una condición concreta, usa **si + presente, futuro / presente**: «[[Si Marta confirma|blue]], [[reservaremos|teal]] la sala».' },
          ] },
          { kind: 'compare', title: 'Tres frases sobre la misma reunión · Three sentences about the same meeting', columns: [
            { tone: 'blue', label: 'CONDICIÓN', sentence: '[[Si Marta no viene|blue]], [[haremos|teal]] una videollamada.', idea: 'Qué pasará en ese caso.', en: 'What will happen in that case.' },
            { tone: 'teal', label: 'REGLA', sentence: '[[Si alguien no puede venir|blue]], [[lo conectamos|teal]] por llamada.', idea: 'Lo que hacemos siempre.', en: 'What we always do.' },
            { tone: 'orange', label: 'CONSEJO', sentence: '[[Yo mantendría|orange]] la fecha.', idea: 'Lo que yo haría: tú decides.', en: 'What I would do: you decide.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno encuentra el error antes de que muestres la corrección y explica qué tipo de frase es: condición, regla o consejo.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Si Marta confirmará hoy, reservaremos la sala.', right: 'Si Marta confirma hoy, reservaremos la sala.', why: 'Después de «si», presente, aunque hablemos del futuro.' },
            { wrong: 'Si tendría tiempo, te ayudo.', right: 'Si tengo tiempo, te ayudo.', why: 'Condición real: nunca condicional después de «si».' },
            { wrong: 'Yo hacería una lista de preguntas.', right: 'Yo haría una lista de preguntas.', why: '«Hacer» es irregular en condicional: «haría».' },
            { wrong: 'Yo tenería un plan B.', right: 'Yo tendría un plan B.', why: '«Tener» → «tendría», como en el futuro «tendré».' },
            { wrong: 'Si hay muchos temas, elegiríamos dos.', right: 'Si hay muchos temas, elegimos dos.', why: 'Es una regla habitual: presente en las dos partes.' },
            { wrong: 'Yo enviaria los documentos hoy.', right: 'Yo enviaría los documentos hoy.', why: 'Todas las formas del condicional llevan tilde en la «í».' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno un problema real de su semana. Responde con dos consejos en condicional y pídele una condición con «si» para cada uno.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Condiciones y consejos en situaciones reales', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Organizar la reunión · Organising the meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y dice si es una condición, una regla o un consejo.', self: 'Lee la conversación. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una llamada el lunes', setting: 'Julia y su compañero Andrés organizan la reunión del proyecto para el viernes. (Julia and her colleague Andrés are organising Friday’s project meeting.)', lines: [
            { who: 'Andrés', text: 'Julia, todavía no sabemos cuántas personas vienen el viernes.', en: 'Julia, we still don’t know how many people are coming on Friday.' },
            { who: 'Julia', text: 'Tranquilo. [[Si todos confirman antes del miércoles|blue]], [[reservaremos|teal]] la sala grande.', en: 'Don’t worry. If everyone confirms before Wednesday, we’ll book the big room.' },
            { who: 'Andrés', text: '¿Y si Marta no puede venir? Siempre está de viaje.', en: 'And what if Marta can’t come? She’s always travelling.' },
            { who: 'Julia', text: '[[Si no puede venir|blue]], [[haremos|teal]] una videollamada.', en: 'If she can’t come, we’ll do a video call.' },
            { who: 'Andrés', text: 'De acuerdo. ¿Cambio la fecha para que pueda estar?', en: 'OK. Shall I change the date so she can be there?' },
            { who: 'Julia', text: 'No, [[yo mantendría|orange]] la fecha y [[adaptaría|orange]] el formato. Cambiarlo todo a última hora es un caos.', en: 'No, I’d keep the date and adapt the format. Changing everything at the last minute is chaos.' },
            { who: 'Andrés', text: 'Tienes razón. ¿Y los documentos?', en: 'You’re right. And the documents?' },
            { who: 'Julia', text: '[[Yo enviaría|orange]] el resumen antes de reservar. Así sabemos cuánto tiempo necesitamos.', en: 'I’d send the summary before booking. That way we’ll know how much time we need.' },
            { who: 'Andrés', text: 'Buena idea. La última reunión duró tres horas…', en: 'Good idea. The last meeting lasted three hours…' },
            { who: 'Julia', text: 'Por eso propongo una regla: [[si la reunión dura más de una hora|blue]], [[hacemos|teal]] una pausa.', en: 'That’s why I’m proposing a rule: if the meeting lasts more than an hour, we take a break.' },
            { who: 'Andrés', text: 'Perfecto. [[Yo también haría|orange]] una lista de preguntas para no perder tiempo.', en: 'Perfect. I’d also make a list of questions so we don’t waste time.' },
          ], notes: {
            'Si todos confirman antes del miércoles': 'Una **condición real**: es posible que todos confirmen, pero no es seguro. Después de «si», presente.',
            'reservaremos': 'La **consecuencia** de la condición, en futuro: lo que harán en ese caso.',
            'Si no puede venir': 'La **alternativa**: otra condición posible, también en presente.',
            'haremos': 'Futuro irregular de «hacer»: la decisión para ese caso.',
            'yo mantendría': 'Julia **aconseja** sin imponer: dice lo que ella haría. «Mantener» es irregular: «mantendría».',
            'adaptaría': 'Segundo consejo, también en condicional. Regular: «adaptar» + «-ía».',
            'Yo enviaría': 'Otro **consejo suave**. Andrés puede aceptarlo o no.',
            'si la reunión dura más de una hora': 'Una **regla** para todas las reuniones: lo que pasa cada vez.',
            'hacemos': 'Presente en las dos partes: la reacción habitual.',
            'Yo también haría': 'Andrés suma su propio consejo con el condicional irregular de «hacer».',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué harán si Marta no puede venir?', options: ['Cambiarán la fecha.', 'Harán una videollamada.', 'Cancelarán la reunión.'], answer: 1, why: '«Si no puede venir, haremos una videollamada».', en: 'What will they do if Marta can’t come?' },
            { prompt: '¿Qué aconseja Julia mantener y qué adaptar?', options: ['Mantener el formato y adaptar la fecha.', 'Mantener la fecha y adaptar el formato.', 'Mantener la sala y adaptar el horario.'], answer: 1, why: '«Yo mantendría la fecha y adaptaría el formato».', en: 'What does Julia advise keeping and what adapting?' },
            { prompt: '¿Cuándo hacen una pausa?', options: ['Siempre a la mitad.', 'Si la reunión dura más de una hora.', 'Si llega Marta.'], answer: 1, why: '«Si la reunión dura más de una hora, hacemos una pausa».', en: 'When do they take a break?' },
          ] },
        ] },
        { title: '¿Condición, regla o consejo? · Condition, rule or advice?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases', categories: [
            { id: 'condicion', label: 'Condición concreta', tone: 'blue' },
            { id: 'regla', label: 'Regla habitual', tone: 'teal' },
            { id: 'consejo', label: 'Consejo', tone: 'orange' },
          ], items: [
            { text: 'Si todos confirman, reservaremos la sala grande.', answer: 'condicion', why: 'Una situación concreta, con consecuencia en futuro.' },
            { text: 'Si la reunión dura más de una hora, hacemos una pausa.', answer: 'regla', why: 'Presente + presente: lo que hacen siempre.' },
            { text: 'Yo mantendría la fecha.', answer: 'consejo', why: 'Yo + condicional.' },
            { text: 'Si Marta no puede venir, haremos una videollamada.', answer: 'condicion', why: 'Una alternativa para este viernes.' },
            { text: 'Yo enviaría el resumen antes de reservar.', answer: 'consejo', why: 'Propone sin imponer.' },
            { text: 'Si hay muchos temas, elegimos dos.', answer: 'regla', why: 'Una norma que se repite.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez. If you make a mistake, read the hint and try again.',
      steps: [
        { title: 'Elige según el contexto · Choose according to the context', blocks: [
          { kind: 'choice', items: [
            { context: 'Condición real con consecuencia futura.', prompt: 'Si Marta ___ hoy, reservaremos.', options: ['confirmará', 'confirma', 'confirmaría'], answer: 1, why: 'Después de «si», presente.', en: 'A real condition with a future consequence: Marta may confirm today.' },
            { context: 'Una regla del equipo.', prompt: 'Si hay muchos temas, ___ dos.', options: ['elegimos', 'elegiríamos', 'habíamos elegido'], answer: 0, why: 'Presente en las dos partes: una pauta habitual.', en: 'A team rule about meetings with lots of topics.' },
            { context: 'Quieres aconsejar al organizador sin imponer.', prompt: '¿Qué le dices?', options: ['Enviarás el documento sin falta', 'Yo enviaría el documento hoy', 'Si enviarías el documento'], answer: 1, why: '«Yo enviaría» propone una recomendación.', en: 'You want to advise the organiser without imposing. What do you say?' },
            { context: 'La condición va después.', prompt: 'Haremos una llamada si Marta no ___.', options: ['vendría', 'vendrá', 'viene'], answer: 2, why: 'La condición sigue en presente aunque vaya al final.', en: 'The condition comes second: Marta may not come.' },
            { context: 'Un consejo con un verbo irregular.', prompt: 'Yo ___ la reunión por la tarde.', options: ['poneríamos', 'pondría', 'ponería'], answer: 1, why: '«Poner» → «pondría».', en: 'Advice with an irregular verb: the afternoon is better for the meeting.' },
            { context: 'Un consejo para un amigo nervioso.', prompt: 'Yo le ___ la verdad a tu jefe.', options: ['deciría', 'diría', 'dirá'], answer: 1, why: '«Decir» → «diría».', en: 'Advice for a nervous friend: telling the boss the truth.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase es **un consejo**?', options: ['Si llueve, cancelamos el picnic.', 'Yo cancelaría el picnic.', 'Si llueve, cancelaremos el picnic.'], answer: 1, why: '«Yo + condicional» propone lo que haría el hablante.', en: 'Which sentence is advice?' },
            { prompt: '«Si un cliente se queja, lo llamamos enseguida.» ¿Qué expresa?', options: ['Una regla de la empresa.', 'Un consejo para un compañero.', 'Algo que no puede pasar.'], answer: 0, why: 'Presente + presente: lo que hacen siempre que pasa.', en: 'What does this sentence express?' },
            { prompt: '«Si terminamos pronto, iremos a cenar.» ¿Es seguro que van a cenar?', options: ['Sí, es seguro.', 'Depende de si terminan pronto.', 'No, es imposible.'], answer: 1, why: 'Condición real: la cena depende de la condición.', en: 'Is it certain that they will go for dinner?' },
            { prompt: '¿Qué frase suena **más suave**?', options: ['Cambia el formato.', 'Yo cambiaría el formato.'], answer: 1, why: 'El condicional deja la decisión a la otra persona.', en: 'Which sentence sounds softer?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Un amigo organiza una mudanza', lines: [
            { who: 'Diego', text: 'Me mudo el sábado y no sé cómo organizarme.' },
            { who: 'Lucía', text: 'Yo ___ una lista de todo lo que tienes que hacer.', options: ['haría', 'hacería', 'hago'], answer: 0, why: 'Consejo: condicional irregular de «hacer».' },
            { who: 'Diego', text: '¿Y si llueve ese día?' },
            { who: 'Lucía', text: 'Si ___, cubrimos las cajas con plástico.', options: ['lloverá', 'llueve', 'llovería'], answer: 1, why: 'Condición real: «si» + presente.' },
            { who: 'Diego', text: 'Mi hermano tiene una camioneta, pero trabaja el sábado.' },
            { who: 'Lucía', text: 'Si tu hermano no puede, ___ una empresa de mudanzas.', options: ['alquilaremos', 'alquiláramos', 'alquilaríamos'], answer: 0, why: 'Consecuencia de una condición real, en futuro.' },
            { who: 'Diego', text: '¿Y qué hago con los muebles viejos?' },
            { who: 'Lucía', text: 'Yo los ___ antes de la mudanza.', options: ['vendería', 'venderé', 'vendo'], answer: 0, why: 'Consejo suave: «yo + condicional».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si el jefe aceptará, empezaremos el lunes.', ok: false, options: ['Si el jefe acepta, empezaremos el lunes.', 'Si el jefe aceptaría, empezaremos el lunes.', 'Si el jefe aceptara, empezaremos el lunes.'], answer: 0, why: 'Condición real: «si» + presente.' },
            { sentence: 'Yo mantendría la fecha y cambiaría el formato.', ok: true, why: 'Correcta: dos consejos en condicional.' },
            { sentence: 'Yo hacería una pausa cada hora.', ok: false, options: ['Yo hacerría una pausa cada hora.', 'Yo haría una pausa cada hora.', 'Yo haceré una pausa cada hora.'], answer: 1, why: '«Hacer» → «haría».' },
            { sentence: 'Si la reunión dura mucho, hacemos una pausa.', ok: true, why: 'Correcta: regla habitual con presente en las dos partes.' },
            { sentence: 'Si tendrías tiempo, podrías ayudarme.', ok: false, options: ['Si tienes tiempo, podrías ayudarme.', 'Si tendrás tiempo, podrías ayudarme.', 'Si tenerías tiempo, podrías ayudarme.'], answer: 0, why: 'Después de «si», nunca condicional: presente.' },
            { sentence: 'Yo tenería cuidado con ese contrato.', ok: false, options: ['Yo tendría cuidado con ese contrato.', 'Yo tendré cuidado con ese contrato.', 'Yo tenía cuidado con ese contrato.'], answer: 0, why: '«Tener» → «tendría».' },
          ] },
        ] },
        { title: 'Construye frases · Build sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Si', 'Marta confirma,', 'la sala', 'reservaremos'], accept: ['Si Marta confirma, reservaremos la sala'], en: 'If Marta confirms, we’ll book the room.' },
            { tiles: ['enviaría', 'Yo', 'el resumen', 'hoy'], accept: ['Yo enviaría el resumen hoy', 'Yo enviaría hoy el resumen'], en: 'I’d send the summary today.' },
            { tiles: ['hacemos', 'si', 'una pausa', 'la reunión dura mucho'], accept: ['hacemos una pausa si la reunión dura mucho'], en: 'We take a break if the meeting goes on too long.' },
          ] },
          { kind: 'rewrite', title: 'Transforma la frase · Transform the sentence', items: [
            { prompt: 'Si todos confirman, reservaremos la sala.', instruction: 'Empieza con «Reservaremos…».', accept: ['Reservaremos la sala si todos confirman'] },
            { prompt: 'Envía los documentos hoy y prepara dos preguntas.', instruction: 'Transforma la orden en consejo con «Yo…».', accept: ['Yo enviaría los documentos hoy y prepararía dos preguntas'] },
            { prompt: 'Mantén la fecha.', instruction: 'Transforma la orden en consejo con «Yo…».', accept: ['Yo mantendría la fecha'] },
            { prompt: 'Puede pasar: Marta no viene. En ese caso, haremos una videollamada.', instruction: 'Une las ideas con «si».', accept: ['Si Marta no viene, haremos una videollamada', 'Haremos una videollamada si Marta no viene'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una recomendación práctica', coach: 'Primero escucha sin leer. First listen without reading.',
      steps: [
        { title: 'Una recomendación práctica', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota en dos columnas las condiciones (si…) y los consejos (yo + condicional).', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota las condiciones y los consejos. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Andrés propone un plan', channel: 'NOTA DE VOZ · PARA JULIA', src: '/audio/grammar-classroom/31.mp3',
            before: 'Andrés le deja a Julia una nota de voz sobre la reunión del viernes. ¿Qué crees que propone si alguien no puede venir? (Andrés leaves Julia a voice message about Friday’s meeting. What do you think he suggests if someone can’t come?)',
            gist: { prompt: '¿De qué trata el mensaje?', options: ['Propone cómo organizar la reunión, con alternativas y consejos.', 'Cancela la reunión del viernes.', 'Pide más tiempo para leer los documentos.'], answer: 0, why: 'Plantea condiciones («si Marta confirma…») y consejos («yo enviaría…»).', en: 'What is the message about?' },
            details: [
              { prompt: '¿Qué harán si Marta confirma hoy?', options: ['Reservarán la sala pequeña.', 'Harán una videollamada.', 'Cambiarán la fecha.'], answer: 0, why: '«Si Marta confirma hoy, reservaremos la sala pequeña».', en: 'What will they do if Marta confirms today?' },
              { prompt: '¿Qué prefiere si Marta no puede venir?', options: ['Cambiar al lunes.', 'Mantener el viernes y conectar su computadora a la llamada.', 'Cancelar.'], answer: 1, why: '«Prefiero mantener el viernes y conectar su computadora a la llamada».', en: 'What does he prefer if Marta can’t come?' },
              { prompt: '¿Qué aconseja hacer con los documentos?', options: ['Imprimirlos.', 'Enviarlos esta tarde.', 'Leerlos en la reunión.'], answer: 1, why: '«Yo enviaría los documentos esta tarde para que todos puedan leerlos».', en: 'What does he advise doing with the documents?' },
              { prompt: '¿Qué hacen si aparecen demasiados temas?', options: ['Alargan la reunión.', 'Eligen dos y dejan el resto para otro día.', 'Hacen otra reunión el sábado.'], answer: 1, why: '«Si aparecen demasiados temas, elegimos dos y dejamos el resto para otro día».', en: 'What do they do if too many topics come up?' },
              { prompt: '¿Cuánto tiempo reservaría?', options: ['Media hora.', 'Una hora como máximo.', 'Dos horas.'], answer: 1, why: '«Yo reservaría una hora como máximo».', en: 'How much time would he book?' },
            ],
            transcript: 'Hola, Julia. Ya tengo cuatro respuestas. [[Si Marta confirma hoy|blue]], [[reservaremos|teal]] la sala pequeña. [[Si no puede venir|blue]], prefiero mantener el viernes y conectar su computadora a la llamada. [[Yo enviaría|orange]] los documentos esta tarde para que todos puedan leerlos. También [[haría|orange]] una lista de preguntas antes de empezar. [[Si aparecen demasiados temas|blue]], [[elegimos|teal]] dos y [[dejamos|teal]] el resto para otro día. No necesitamos resolver todo en una sola reunión. [[Yo reservaría|orange]] una hora como máximo. El miércoles revisamos las respuestas que faltan y confirmamos el formato con el equipo.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Julia: acepta o modifica el plan con una condición (si…) y un consejo (yo + condicional).', self: 'Responde a Andrés como si fueras Julia: añade una condición con «si» y un consejo con «yo + condicional».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Problemas y soluciones', coach: 'Planea con alternativas y aconseja. Plan with alternatives and give advice.',
      steps: [
        { title: 'Problemas y soluciones', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar. Cuando dé una orden («Haz…»), tu alumno la reformula como consejo («Yo haría…»).', self: 'Responde cada pregunta en voz alta, con frases completas. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces si un plan con amigos o compañeros se retrasa? · What do you do if a plan with friends or colleagues is delayed?', followUps: ['¿Esperas o te vas?', '¿Tienes alguna regla personal?'], phrases: ['[[Si alguien llega tarde|blue]], [[espero|teal]]…', '[[Si el plan se retrasa mucho|blue]], [[me voy|teal]]…'], hint: 'Describe tu regla personal: presente en las dos partes.', example: 'Si alguien llega tarde, espero veinte minutos. Si el plan se retrasa mucho, propongo otro día.', next: 'Ahora, una reunión real.', teacher: 'Si el alumno usa futuro después de «si», repite su frase con presente sin explicar.' },
            { q: 'Piensa en una reunión, una fiesta o un viaje que tienes pronto. ¿Qué harás si algo cambia? · Think of a meeting, a party or a trip you have soon. What will you do if something changes?', followUps: ['¿Y si alguien no puede venir?', '¿Y si hace mal tiempo?'], phrases: ['[[Si hace mal tiempo|blue]], [[haremos|teal]]…', '[[Si mi hermana no viene|blue]], [[cambiaremos|teal]]…'], hint: 'Plantea dos condiciones reales y su consecuencia en futuro.', example: 'El mes que viene voy a la playa con amigos. Si hace mal tiempo, visitaremos los pueblos cercanos. Si alguien no puede venir, alquilaremos un coche más pequeño.', next: 'Ahora te toca aconsejar.' },
            { q: 'Un compañero tiene muy poco tiempo para organizar un curso. ¿Qué le aconsejas? · A colleague has very little time to organise a course. What do you advise?', followUps: ['¿Qué es lo más urgente?', '¿Qué dejarías para después?'], phrases: ['[[Yo empezaría|orange]] por…', '[[Yo no haría|orange]]…', '[[Yo pediría|orange]] ayuda a…'], hint: 'Da dos consejos con «yo + condicional» y explica por qué.', example: 'Yo empezaría por el programa, porque es lo más urgente. No haría materiales nuevos: usaría los del año pasado.', next: 'Hablemos de cambios de última hora.' },
            { q: 'Una reunión importante tiene un problema de fecha. ¿Qué es mejor: cambiar la fecha o cambiar el formato? · An important meeting has a date problem. What is better: changing the date or changing the format?', followUps: ['¿Qué pasa si cambias la fecha?', '¿En qué caso revisarías tu decisión?'], phrases: ['[[Yo mantendría|orange]]…', '[[Si cambiamos la fecha|blue]], [[perderemos|teal]]…', '[[Yo pondría|orange]]…'], hint: 'Elige una estrategia, da un consejo y explica una condición para revisarla.', example: 'Yo mantendría la fecha. Si cambiamos la fecha, perderemos a otras personas. Si la mitad del equipo no puede venir, haremos la reunión en línea.', next: 'Ahora, un problema personal.', teacher: 'Haz de compañero indeciso: rechaza el primer consejo y pide otro.' },
            { q: '¿Qué consejo le darías a alguien que quiere aprender español más rápido? · What advice would you give someone who wants to learn Spanish faster?', followUps: ['¿Qué harías tú si tuvieras más tiempo libre?', '¿Qué no harías nunca?'], phrases: ['[[Yo vería|orange]] series…', '[[Yo hablaría|orange]] con…', '[[Si tienes|blue]] poco tiempo, [[puedes|teal]]…'], hint: 'Combina un consejo con condicional y una condición real con «si».', example: 'Yo vería series con subtítulos en español. Si tienes poco tiempo, puedes escuchar pódcast en el autobús.', next: 'Para terminar, tus reglas.', teacher: 'La segunda pregunta usa «si tuvieras» como fórmula: no hace falta explicarla.' },
            { q: '¿Cuáles son tus reglas para no estresarte en el trabajo o los estudios? · What are your rules for not getting stressed at work or in your studies?', followUps: ['¿Las cumples siempre?', '¿Qué regla le recomendarías a un amigo?'], phrases: ['[[Si tengo|blue]] mucho trabajo, [[hago|teal]]…', '[[Si estoy|blue]] cansado, [[paro|teal]]…', '[[Yo recomendaría|orange]]…'], hint: 'Dos reglas personales con presente + presente y un consejo final.', example: 'Si tengo mucho trabajo, hago una lista. Si estoy cansada, paro diez minutos. Yo recomendaría apagar el teléfono por la noche.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno escucha un problema del profesor y le da dos consejos con «yo + condicional».', self: 'Escribe un problema real de esta semana y tres consejos con «Yo…» para resolverlo.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un plan para el equipo', coach: 'Prevé, organiza y aconseja. Plan ahead, organise and advise.',
      steps: [
        { title: 'Un plan para el equipo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después corrijan juntos lo que la revisión no ve.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Mensaje al equipo', situation: 'Tu equipo de trabajo, tu clase o tu grupo de amigos organiza un evento (una reunión, una cena, una excursión) y todavía hay cosas sin decidir. Escribe un mensaje con un plan. (Your team, class or group of friends is organising an event and some things are still undecided. Write a message with a plan.)', task: [
            'Plantea **dos condiciones reales** con **si + presente** y sus consecuencias en futuro.',
            'Propón **una regla** con presente en las dos partes.',
            'Da **dos consejos** con **yo + condicional**.',
            'Termina con el próximo paso y la fecha.',
          ], starters: ['Hola a todos:', 'Si todos confirman…, …', 'Si alguien no puede…, …', 'Si…, siempre…', 'Yo enviaría… / Yo mantendría…', 'El miércoles…'],
            words: ['confirmar', 'reservar', 'mantener', 'adaptar', 'una videollamada', 'como máximo', 'con tiempo', 'el formato', 'una alternativa'],
            model: 'Hola a todos: [[Si todos confirman antes del miércoles|blue]], [[reservaremos|teal]] la sala pequeña para el viernes. [[Si Marta no puede venir|blue]], [[mantendremos|teal]] la fecha y [[haremos|teal]] una videollamada. [[Yo enviaría|orange]] los documentos esta tarde y [[prepararía|orange]] una lista de preguntas para aprovechar el tiempo. [[Si aparecen demasiados temas|blue]], [[elegimos|teal]] dos y [[dejamos|teal]] el resto para otra reunión. [[Yo reservaría|orange]] una hora como máximo. El miércoles podemos revisar las respuestas y confirmar el formato.',
            minWords: 70 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away today?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'CONDICIÓN REAL', formula: 'si + presente, futuro / presente', example: 'Si Marta confirma, reservaremos la sala.', caption: 'Algo posible y lo que pasará.', en: 'Something possible and what will happen.' },
            { tone: 'teal', label: 'REGLA', formula: 'si + presente, presente', example: 'Si dura mucho, hacemos una pausa.', caption: 'Lo que hacemos siempre.', en: 'What we always do.' },
            { tone: 'orange', label: 'CONSEJO', formula: 'yo + condicional', example: 'Yo mantendría la fecha.', caption: 'Lo que yo haría: tú decides.', en: 'What I would do: you decide.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Dos reglas de oro', text: 'Después de **si** (condición real): siempre **presente**, nunca futuro ni condicional. Para aconsejar sin mandar: **yo + condicional**, con sus irregulares (haría, tendría, pondría, diría…).', en: 'After “si” in a real condition: always the present, never the future or the conditional. To advise without giving orders: “yo” + conditional, with its irregular forms (haría, tendría, pondría, diría…).' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda · Four sentences, no help', items: [
            { prompt: 'Si el vuelo ___ retraso, te llamaré.', options: ['tendrá', 'tiene', 'tendría'], answer: 1, why: '«Si» + presente.' },
            { prompt: 'Yo ___ (salir) antes para evitar el tráfico.', options: ['saliría', 'saldría', 'saldré'], answer: 1, why: '«Salir» → «saldría».' },
            { prompt: 'Regla de la casa: si alguien cocina, el otro ___ los platos.', options: ['lavaría', 'lava', 'lavará'], answer: 1, why: 'Regla habitual: presente + presente.' },
            { prompt: '¿Qué frase es un consejo?', options: ['Si quieres, vamos.', 'Yo hablaría con ella.', 'Hablaremos con ella si viene.'], answer: 1, why: '«Yo + condicional».' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Si confirma, reservaremos» y «Yo reservaría hoy»: ¿qué diferencia hay? La primera es una previsión con condición; la segunda, un consejo.' },
        ] },
      ],
    },
  ],
};
