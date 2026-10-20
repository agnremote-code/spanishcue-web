import type { LiveLesson } from '../types';

/**
 * Lesson 233 · B2 · Estilo indirecto.
 * A technician's visit to Marta's apartment changes twice; Marta, Diego and
 * Julia (maintenance office) pass the messages on. The class is about keeping
 * the intention (statement, question, request) and the real time reference,
 * not about applying a mechanical tense table.
 */
export const lesson: LiveLesson = {
  id: 233,
  level: 'B2',
  title: 'Estilo indirecto',
  subtitle: 'Transmitir lo que alguien dijo, preguntó o pidió, con los tiempos y las referencias que corresponden al momento en que lo cuentas.',
  legend: [
    { tone: 'blue', label: 'Afirmación · dijo / explicó / confirmó que…' },
    { tone: 'teal', label: 'Pregunta · preguntó si / qué / cuándo…' },
    { tone: 'orange', label: 'Petición · pidió que + subjuntivo' },
    { tone: 'violet', label: 'Referencia · persona, lugar o tiempo ajustados' },
  ],
  optionNotes: {
    'Dijo que irá mañana.': '«Mañana» era mañana para quien habló, no para ti. Y «irá» presenta la visita desde hoy, cuando ya pasó: «iría el martes».',
    'Dijo que vaya el martes.': 'El subjuntivo transmite una petición. Aquí era una afirmación: «dijo que iría».',
    'Preguntó que podía estar.': 'Una pregunta de sí o no se transmite con «si», no con «que».',
    'Pidió si pudiera estar.': 'Era una pregunta, no una petición: «preguntó si podía estar».',
    'Dijo si dejaba libre la ventana.': 'Era una petición: «pidió que dejara».',
    'Preguntó que dejó libre la ventana.': 'Era una petición, no una pregunta: «pidió que dejara».',
    'pidió que dejaba': 'Después de «pedir que» va el subjuntivo: «dejara» o «dejase».',
    'preguntó que': 'Para una pregunta de sí o no se usa «si»; para otras, la palabra interrogativa (qué, cuándo, dónde).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Contar lo que otra persona dijo', coach: 'Las palabras cambian; la intención, no.',
      steps: [
        { title: 'Un mensaje, tres intenciones · One message, three intentions', blocks: [
          { kind: 'lead', text: 'El lunes, Julia, de la oficina de mantenimiento, llama a Marta: «**El técnico vendrá mañana a las nueve. ¿Puedes estar en casa? Deja libre el espacio delante de la ventana.**» El viernes, Marta se lo cuenta a su compañero de apartamento.', en: 'On Monday Julia, from the maintenance office, phones Marta: “The technician will come tomorrow at nine. Can you be at home? Clear the space in front of the window.” On Friday Marta passes this on to her flatmate. Reported speech keeps the intention, but the tenses and time words have to fit the moment you are speaking.' },
          { kind: 'guide', text: { teacher: 'Lean el mensaje original. Pregunta: «¿Qué hace Julia en cada frase: informa, pregunta o pide?». Después, comparen con la versión de Marta.', self: 'Lee el mensaje original. ¿Qué hace Julia en cada frase: informa, pregunta o pide? Después compara con lo que cuenta Marta.' } },
          { kind: 'compare', title: 'Lo que dijo Julia → lo que cuenta Marta', columns: [
            { tone: 'blue', label: 'AFIRMACIÓN', sentence: 'Julia [[dijo que el técnico vendría|blue]] [[el martes|violet]] a las nueve.', idea: '«Vendrá mañana» → vendría el martes. Marta habla el viernes: «mañana» ya no sirve.', en: 'Statement: «vendrá mañana» becomes «vendría el martes». Marta is speaking on Friday, so «mañana» no longer works; she names the day.' },
            { tone: 'teal', label: 'PREGUNTA', sentence: '[[Preguntó si podía estar|teal]] en casa.', idea: '«¿Puedes…?» → preguntó si podía. La pregunta se introduce con «si».', en: 'Question: «¿Puedes…?» becomes «preguntó si podía…». A yes/no question is introduced with «si» (if/whether).' },
            { tone: 'orange', label: 'PETICIÓN', sentence: '[[Pidió que dejara libre|orange]] el espacio de la ventana.', idea: '«Deja libre…» → pidió que dejara. La petición pasa al subjuntivo.', en: 'Request: «Deja libre…» becomes «pidió que dejara…». A request moves into the subjunctive, like “she asked me to clear…”.' },
          ] },
          { kind: 'tip', icon: '🎯', title: 'Lo primero: la intención', text: 'Antes de pensar en los tiempos, decide qué hizo la otra persona: **afirmar** (dijo que), **preguntar** (preguntó si / qué / cuándo) o **pedir** (pidió que + subjuntivo). Preguntar no es lo mismo que ordenar.', en: 'First, the intention. Before thinking about tenses, decide what the other person did: state something (dijo que), ask (preguntó si / qué / cuándo) or request (pidió que + subjunctive). Asking is not the same as telling someone to do something.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Julia dijo: «¿Puedes estar en casa?». ¿Cómo lo cuenta Marta?', options: ['Preguntó si podía estar en casa.', 'Pidió que estuviera en casa.', 'Dijo que estaba en casa.'], answer: 0, why: 'Era una pregunta de sí o no: «preguntó si».', en: 'Julia asked whether Marta could be at home. How does Marta report it?' },
            { prompt: 'Julia dijo: «Deja libre la ventana». ¿Qué hizo?', options: ['Una petición.', 'Una pregunta.', 'Una afirmación.'], answer: 0, why: 'El imperativo transmite una petición: «pidió que dejara…».', en: 'What did Julia do when she said «Deja libre la ventana»?' },
          ] },
        ] },
        { title: 'Transmitir afirmaciones · Reporting statements', mascot: '/brand/mascot/studying.webp', coach: 'Desde el pasado, los tiempos se desplazan.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'AFIRMACIONES', question: '¿Cuentas algo que alguien afirmó?', en: 'With a reporting verb in the past (dijo, explicó), tenses usually shift back, because you are speaking from a later moment: present → imperfect, future → conditional, perfect or preterite → pluperfect. English does much the same: “I’m busy” → she said she was busy.', formula: ['dijo / explicó / confirmó / aseguró + que + frase'],
            meaning: 'Con un verbo introductor en **pasado** (dijo, explicó), los tiempos suelen desplazarse hacia el pasado, porque cuentas desde un momento posterior: **presente → imperfecto**, **futuro → condicional**, **pretérito perfecto o indefinido → pluscuamperfecto**.',
            examples: [
              { es: '«Estoy ocupada.» → [[Dijo que estaba ocupada|blue]].', en: '“I’m busy.” → She said she was busy.' },
              { es: '«Iré el jueves.» → [[Dijo que iría el jueves|blue]].', en: '“I’ll go on Thursday.” → She said she would go on Thursday.' },
              { es: '«Ya he enviado el aviso.» → [[Dijo que ya había enviado el aviso|blue]].', en: '“I’ve already sent the notice.” → She said she had already sent it.' },
              { es: '«Llamé ayer.» → [[Explicó que había llamado|blue]] [[el día anterior|violet]].', en: '“I called yesterday.” → She explained she had called the day before.' },
            ] },
          { kind: 'table', title: 'Los cambios más frecuentes', head: ['Palabras originales', 'Contado después (dijo que…)'], rows: [
            ['presente: «estoy»', 'imperfecto: [[estaba|blue]]'],
            ['futuro: «iré»', 'condicional: [[iría|blue]]'],
            ['ir a + infinitivo: «voy a llamar»', '[[iba a llamar|blue]]'],
            ['pretérito perfecto: «he enviado»', 'pluscuamperfecto: [[había enviado|blue]]'],
            ['indefinido: «llamé»', '[[había llamado|blue]] (o se mantiene: [[llamó|blue]])'],
            ['imperfecto: «estaba»', 'no cambia: [[estaba|blue]]'],
          ], note: 'Es una tendencia, no una regla mecánica. Si el verbo introductor está en presente («dice que…»), los tiempos no cambian: «Dice que **vendrá** el jueves».' },
          { kind: 'tip', icon: '🕰', title: '¿Y si el dato sigue vigente?', text: 'Puedes **mantener el presente** si lo que se dijo sigue siendo verdad y lo presentas como actual: «Julia confirmó que la oficina **abre** a las ocho». Con «abría» mantienes la perspectiva del relato; tampoco significa que el horario haya cambiado.', en: 'What if the information is still true? You can keep the present if what was said is still true and you present it as current: «Julia confirmó que la oficina abre a las ocho». With «abría» you keep the narrative perspective; that does not mean the opening time has changed either.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'El lunes, Julia dijo: «Iré el martes». Lo cuentas el viernes.', prompt: '¿Cuál es la mejor opción?', options: ['Dijo que iría el martes.', 'Dijo que irá mañana.', 'Dijo que vaya el martes.'], answer: 0, why: 'Futuro → condicional; la fecha real («el martes») se conserva.', en: 'On Monday Julia said she would go on Tuesday. You are reporting it on Friday.' },
            { context: 'Ayer tu jefa dijo: «He terminado el informe».', prompt: 'Mi jefa dijo que ___ el informe.', options: ['había terminado', 'termine', 'terminaría'], answer: 0, why: 'Pretérito perfecto → pluscuamperfecto.', en: 'Yesterday your boss said she had finished the report.' },
          ] },
        ] },
        { title: 'Transmitir preguntas y peticiones · Reporting questions and requests', mascot: '/brand/mascot/speaking.webp', coach: 'Preguntar no es pedir.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PREGUNTAS', question: '¿Cuentas una pregunta?', en: 'Yes/no questions are introduced with «si» (whether). Other questions keep the question word, still with its accent (qué, cuándo, dónde). There are no question marks, and tenses shift just as with statements.', formula: ['preguntó + si + frase (sí / no)', 'preguntó + qué / cuándo / dónde / cómo… + frase'],
            meaning: 'Las preguntas de **sí o no** se introducen con **si**. Las demás conservan la **palabra interrogativa** con tilde (qué, cuándo, dónde). No se usan signos de interrogación, y los tiempos se desplazan igual que en las afirmaciones.',
            examples: [
              { es: '«¿Puedes venir?» → [[Preguntó si podía|teal]] ir.', en: '“Can you come?” → She asked if I could go.' },
              { es: '«¿A qué hora llegas?» → [[Preguntó a qué hora llegaba|teal]].', en: '“What time do you arrive?” → She asked what time I was arriving.' },
              { es: '«¿Dónde está la factura?» → [[Preguntó dónde estaba|teal]] la factura.', en: '“Where’s the invoice?” → She asked where the invoice was.' },
              { es: '«¿Habrá alguien en casa?» → [[Preguntó si habría|teal]] alguien en casa.', en: '“Will anyone be at home?” → She asked if anyone would be at home.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'PETICIONES', question: '¿Cuentas una petición, una orden o un consejo?', en: 'Requests (imperatives, or «¿puedes…?» asking a favour) are reported with que + subjunctive. From the past, the normal form is the imperfect subjunctive (dejara, enviara). In «dijo que + subjunctive», «decir» means “tell someone to”, not “say”.', formula: ['pidió / dijo / recomendó + que + subjuntivo'],
            meaning: 'Las peticiones (imperativos, «¿puedes…?» como favor) se transmiten con **que + subjuntivo**. Desde un pasado, lo normal es el **imperfecto de subjuntivo** (dejara, enviara). Con «dijo que + subjuntivo», «decir» significa «pedir».',
            examples: [
              { es: '«Deja libre la ventana.» → [[Pidió que dejara|orange]] libre la ventana.', en: '“Clear the window.” → She asked me to clear the window.' },
              { es: '«Envíamela esta tarde.» → [[Pidió que se la enviara|orange]] [[esa tarde|violet]].', en: '“Send it to me this afternoon.” → She asked me to send it to her that afternoon.' },
              { es: '«No llames antes de las ocho.» → [[Dijo que no llamáramos|orange]] antes de las ocho.', en: '“Don’t call before eight.” → She told us not to call before eight.' },
              { es: '«Llévate un paraguas.» → [[Me recomendó que me llevara|orange]] un paraguas.', en: '“Take an umbrella.” → She advised me to take an umbrella.' },
            ] },
          { kind: 'compare', title: '«Dijo que» con indicativo o con subjuntivo', columns: [
            { tone: 'blue', label: 'INFORMA', sentence: '[[Dijo que salíamos|blue]] a las ocho.', idea: 'Información: nuestra hora de salida era las ocho.', en: 'Informing: we were leaving at eight; that was the departure time.' },
            { tone: 'orange', label: 'PIDE', sentence: '[[Dijo que saliéramos|orange]] a las ocho.', idea: 'Una orden: teníamos que salir a las ocho.', en: 'Requesting: we had to leave at eight; it was an instruction (“she told us to leave at eight”).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«¿Cuándo vuelves?» → Me preguntó ___.', options: ['cuándo volvía', 'que cuándo vuelva', 'si cuándo volvía'], answer: 0, why: 'Pregunta con palabra interrogativa: «cuándo» + imperfecto.', en: 'Report the question «¿Cuándo vuelves?» (When are you coming back?).' },
            { prompt: '«Cierra la puerta al salir.» → Mi vecina me pidió que ___ la puerta al salir.', options: ['cerrara', 'cerraba', 'cerraría'], answer: 0, why: 'Pedir que + imperfecto de subjuntivo.', en: 'Report your neighbour’s request to close the door on your way out.' },
          ] },
        ] },
        { title: 'Mantener la referencia · Keeping references right', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Hoy de quién? ¿Aquí de quién?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'REFERENCIAS', question: '¿A qué día, lugar o persona se refieren las palabras originales?', en: 'Words like hoy (today), mañana (tomorrow), aquí (here), venir (come) and te (you) depend on who is speaking, when and where. When reporting, don’t copy them: check what they refer to and use a reference your listener will understand. If you report on the same day and in the same place, they can stay.', formula: ['hoy → ese día · mañana → al día siguiente / el martes', 'aquí → allí · venir → ir · tú → yo / él'],
            meaning: 'Palabras como **hoy, mañana, aquí, venir, te** dependen de quién habla, cuándo y dónde. Al transmitir, no las copies: comprueba **a qué se refieren** y usa la referencia que entiende tu oyente. Si lo cuentas el mismo día y en el mismo lugar, pueden mantenerse.',
            examples: [
              { es: 'Lunes: «Mañana vendré». Viernes: [[Dijo que iría el martes|violet]].', en: 'Monday: “I’ll come tomorrow.” Friday: she said she would go on Tuesday.' },
              { es: '«Te llamo aquí.» → [[Dijo que me llamaría allí|violet]].', en: '“I’ll call you here.” → She said she would call me there.' },
              { es: '«Hoy no podemos ir.» (contado al día siguiente) → [[Dijo que ese día no podían ir|violet]].', en: '“We can’t go today” (reported the next day) → she said they couldn’t go that day.' },
              { es: '«Hoy no podemos ir.» (contado el mismo día) → [[Dijo que hoy no pueden venir|violet]].', en: '“We can’t go today” (reported the same day) → she said they can’t come today.' },
            ] },
          { kind: 'table', title: 'Referencias que suelen cambiar', head: ['Palabras originales', 'Contado otro día / en otro lugar'], rows: [
            ['hoy', 'ese día · el martes'],
            ['mañana', 'al día siguiente · el jueves'],
            ['ayer', 'el día anterior · el lunes'],
            ['esta tarde', 'esa tarde'],
            ['aquí', 'allí · en la oficina'],
            ['venir / traer', 'ir / llevar (según dónde estés)'],
            ['tú / te / tu', 'yo / me / mi, o él / le / su (según a quién)'],
          ], note: 'Muchas veces lo más claro es la fecha concreta: «el jueves» se entiende siempre.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'El martes, Ana dijo: «Hoy no puedo; iré el jueves». Lo cuentas el miércoles.', prompt: '¿Qué frase es más clara?', options: ['Ana dijo que el martes no podía y que iría el jueves.', 'Ana dijo que hoy no podía y que iría el jueves.', 'Ana dijo que hoy no puede y que irá mañana.'], answer: 0, why: '«Hoy» era el martes. Para tu oyente del miércoles, «el martes» es claro.', en: 'On Tuesday Ana said she couldn’t make it that day and would go on Thursday. You are reporting it on Wednesday.' },
            { context: 'Tu jefe te dijo en su oficina: «Ven aquí a las diez». Se lo cuentas a un compañero en la cafetería.', prompt: 'Me dijo que ___ a las diez.', options: ['fuera a su oficina', 'viniera aquí', 'iba aquí'], answer: 0, why: 'Desde la cafetería, «venir aquí» es «ir a su oficina»; y es una petición: subjuntivo.', en: 'In his office your boss told you to come there at ten. You tell a colleague in the cafeteria.' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Tres preguntas antes de transmitir.', blocks: [
          { kind: 'decide', title: 'Piensa en el mensaje que vas a transmitir', steps: [
            { q: '¿Era una pregunta?', yes: 'Usa **preguntó si** (sí / no) o **preguntó + qué / cuándo / dónde**: «[[Preguntó si podía|teal]] estar en casa».', no: 'next' },
            { q: '¿Era una petición, una orden o un consejo?', yes: 'Usa **pidió / dijo que + subjuntivo**: «[[Pidió que dejara|orange]] libre la ventana».', no: 'Es una afirmación: **dijo / explicó que** + el tiempo desplazado («[[dijo que iría|blue]]»), o el presente si el dato sigue vigente («[[confirmó que la oficina abre|blue]] a las ocho»). Y revisa **hoy, mañana, aquí**.' },
          ] },
          { kind: 'tip', icon: '🗣', title: 'Elige un verbo preciso', text: '«Decir» sirve para todo, pero otros verbos transmiten mejor la intención: **explicó, confirmó, aclaró, prometió, aseguró, insistió en que, recomendó, me recordó que**. «Prometió que nos **avisaría**» dice más que «dijo».', en: 'Choose a precise verb. «Decir» works for everything, but other verbs convey the intention better: explicó (explained), confirmó, aclaró (clarified), prometió (promised), aseguró (assured), insistió en que, recomendó, me recordó que (reminded me). «Prometió que nos avisaría» says more than «dijo».' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Cuidado con copiar las palabras.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno dice primero la frase original (con comillas) y después corrige la versión indirecta.', self: 'Lee cada frase, imagina las palabras originales y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Preguntó que si podía estar en casa.', right: 'Preguntó si podía estar en casa.', why: 'En la lengua cuidada, la pregunta indirecta se introduce solo con «si».' },
            { wrong: 'Me pidió que le enviaba la factura.', right: 'Me pidió que le enviara la factura.', why: 'Pedir que + subjuntivo.' },
            { wrong: '(El viernes) El lunes dijo que el técnico vendrá mañana.', right: 'El lunes dijo que el técnico iría el martes.', why: '«Mañana» ya no se refiere al día correcto. Usa la fecha concreta.' },
            { wrong: 'Preguntó ¿dónde estaba la factura?', right: 'Preguntó dónde estaba la factura.', why: 'La pregunta indirecta no lleva signos de interrogación, pero «dónde» conserva la tilde.' },
            { wrong: 'Me dijo que llamo a la oficina.', right: 'Me dijo que llamara a la oficina.', why: 'Si era una instrucción («Llama a la oficina»), subjuntivo.' },
            { wrong: 'Explicó que ya ha enviado el aviso la semana pasada.', right: 'Explicó que ya había enviado el aviso la semana anterior.', why: 'Desde un pasado: pluscuamperfecto. Y «la semana pasada» cambia si lo cuentas otro día.' },
          ] },
          { kind: 'teacher', text: 'Di una frase con una afirmación, una pregunta y una petición («Mañana llego tarde. ¿Puedes abrir tú? Deja la llave en recepción»). El alumno la transmite como si fuera la semana que viene.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Una cita que cambió dos veces', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Marta se lo cuenta a Diego · Marta tells Diego', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después el alumno toca cada expresión y dice cuáles eran las palabras originales.', self: 'Lee el diálogo. Después toca cada expresión marcada e imagina qué dijo exactamente Julia.' } },
          { kind: 'explore', title: 'En la cocina, el martes por la mañana', setting: 'El lunes Julia llamó a Marta. El martes por la mañana volvió a llamar. Ahora Marta habla con Diego, su compañero de apartamento.', lines: [
            { who: 'Diego', text: '¿No venía hoy el técnico?', en: 'Wasn’t the technician coming today?' },
            { who: 'Marta', text: 'Eso dijo ayer. Julia [[me dijo que el técnico vendría hoy|blue]] a las nueve.', en: 'That’s what she said yesterday. Julia told me the technician would come today at nine.' },
            { who: 'Diego', text: '¿Y qué pasó?', en: 'So what happened?' },
            { who: 'Marta', text: 'Acaba de llamar otra vez. [[Me explicó que tenían una avería urgente|blue]] y que [[hoy no pueden venir|violet]].', en: 'She’s just called again. She explained they had an urgent breakdown and that they can’t come today.' },
            { who: 'Diego', text: 'Vaya. ¿Y cuándo vienen?', en: 'Oh dear. So when are they coming?' },
            { who: 'Marta', text: '[[Dijo que vendrían el jueves|blue]].', en: 'She said they’d come on Thursday.' },
            { who: 'Diego', text: '¿Te preguntó algo?', en: 'Did she ask you anything?' },
            { who: 'Marta', text: 'Sí, [[me preguntó si podíamos estar en casa|teal]] y le dije que tú trabajas desde casa ese día.', en: 'Yes, she asked if we could be at home, and I told her you work from home that day.' },
            { who: 'Diego', text: '¿Y lo de la ventana sigue igual?', en: 'And the thing about the window still stands?' },
            { who: 'Marta', text: 'Sí. [[Pidió que dejáramos libre|orange]] el espacio delante de la ventana.', en: 'Yes. She asked us to clear the space in front of the window.' },
            { who: 'Diego', text: '¿Y si tenemos un problema? ¿A qué hora se puede llamar?', en: 'And if we have a problem? What time can we call?' },
            { who: 'Marta', text: '[[Confirmó que la oficina abre a las ocho|blue]] todos los días.', en: 'She confirmed the office opens at eight every day.' },
          ], notes: {
            'me dijo que el técnico vendría hoy': 'Julia dijo ayer: «Vendrá **mañana**». Marta habla al día siguiente: «mañana» es **hoy**. El futuro pasa a **condicional** (vendría). Usa «venir» porque está en casa, el lugar de la visita.',
            'Me explicó que tenían una avería urgente': '«Tenemos una avería» → **tenían**: presente → imperfecto desde el pasado.',
            'hoy no pueden venir': 'Julia llamó esta mañana: «Hoy no podemos ir». Marta lo cuenta **el mismo día** y la situación sigue vigente: mantiene **hoy** y el **presente**. Cambia «ir» por **venir** porque Marta está en casa.',
            'Dijo que vendrían el jueves': '«Iremos el jueves» → **vendrían**: futuro → condicional. «El jueves» se conserva porque es una fecha concreta.',
            'me preguntó si podíamos estar en casa': 'Una pregunta de sí o no: «¿Pueden estar en casa?» → **preguntó si** + imperfecto.',
            'Pidió que dejáramos libre': 'Una petición: «Dejen libre…» → **pidió que** + imperfecto de subjuntivo.',
            'Confirmó que la oficina abre a las ocho': 'El horario **sigue vigente**: Marta mantiene el presente. «Abría» también sería posible.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no viene hoy el técnico?', options: ['Porque tienen una avería urgente.', 'Porque Marta no está en casa.', 'Porque la oficina está cerrada.'], answer: 0, why: '«Me explicó que tenían una avería urgente».', en: 'Why isn’t the technician coming today?' },
            { prompt: '¿Qué instrucción sigue vigente?', options: ['Dejar libre el espacio delante de la ventana.', 'Llamar antes de las ocho.', 'Quitar las cortinas.'], answer: 0, why: '«Pidió que dejáramos libre el espacio delante de la ventana».', en: 'Which instruction still applies?' },
          ] },
        ] },
        { title: 'Un mensaje de la jefa · A message from the boss', mascot: '/brand/mascot/speaking.webp', coach: 'Transmitir en el trabajo, con precisión.', blocks: [
          { kind: 'explore', title: 'Después de la reunión', setting: 'Lucas no pudo ir a la reunión del miércoles. El jueves, su compañera Inés le cuenta lo que dijo la jefa.', lines: [
            { who: 'Lucas', text: '¿Qué dijo la jefa ayer? No pude ir.', en: 'What did the boss say yesterday? I couldn’t make it.' },
            { who: 'Inés', text: '[[Dijo que el cliente había aceptado|blue]] el presupuesto.', en: 'She said the client had accepted the quote.' },
            { who: 'Lucas', text: '¡Genial! ¿Y para cuándo es la entrega?', en: 'Great! And when’s the deadline?' },
            { who: 'Inés', text: '[[Explicó que la entrega sería|blue]] [[el día 15|violet]], no a fin de mes.', en: 'She explained the delivery would be on the 15th, not at the end of the month.' },
            { who: 'Lucas', text: 'Uf, es pronto. ¿Preguntó algo sobre mi parte?', en: 'Phew, that’s soon. Did she ask anything about my part?' },
            { who: 'Inés', text: 'Sí, [[preguntó cuándo podías terminar|teal]] los diseños.', en: 'Yes, she asked when you could finish the designs.' },
            { who: 'Lucas', text: '¿Y qué le dijiste?', en: 'And what did you tell her?' },
            { who: 'Inés', text: 'Que no sabía. Por eso [[me pidió que hablaras con ella|orange]] [[hoy|violet]].', en: 'That I didn’t know. That’s why she asked me to tell you to talk to her today.' },
            { who: 'Lucas', text: 'De acuerdo, la llamo después de comer. ¿Algo más?', en: 'OK, I’ll call her after lunch. Anything else?' },
            { who: 'Inés', text: '[[Prometió que contrataría|blue]] a una persona más si hacía falta.', en: 'She promised she’d hire one more person if necessary.' },
          ], notes: {
            'Dijo que el cliente había aceptado': '«El cliente **ha aceptado**» → **había aceptado**: pretérito perfecto → pluscuamperfecto.',
            'Explicó que la entrega sería': '«La entrega **será**» → **sería**: futuro → condicional.',
            'el día 15': 'Una fecha concreta: no cambia, sea cual sea el día en que lo cuentes.',
            'preguntó cuándo podías terminar': 'Pregunta con palabra interrogativa: «¿Cuándo **puede** terminar Lucas?» → **cuándo podías**. Inés habla con Lucas: «Lucas» pasa a **tú**.',
            'me pidió que hablaras con ella': 'Petición: «Que **hable** conmigo» → **pidió que hablaras**. «Conmigo» pasa a **con ella**.',
            'hoy': 'La jefa dijo ayer: «Que hable conmigo **mañana**». Inés lo cuenta al día siguiente: **hoy**.',
            'Prometió que contrataría': '«Prometer» es más preciso que «decir»: deja clara la intención. «Contrataré» → **contrataría**.',
          } },
          { kind: 'teacher', text: 'Pide al alumno que reconstruya las palabras exactas de la jefa a partir de lo que cuenta Inés. Es un buen ejercicio para comprobar si entiende los cambios.' },
        ] },
        { title: '¿Afirmación, pregunta o petición? · Statement, question or request?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'afirmacion', label: 'Afirmación', tone: 'blue' },
            { id: 'pregunta', label: 'Pregunta', tone: 'teal' },
            { id: 'peticion', label: 'Petición', tone: 'orange' },
          ], items: [
            { text: 'Me explicó que tenían una avería urgente.', answer: 'afirmacion', why: 'Explicó que + indicativo.' },
            { text: 'Me preguntó si podíamos estar en casa.', answer: 'pregunta', why: 'Preguntó si.' },
            { text: 'Pidió que dejáramos libre el espacio.', answer: 'peticion', why: 'Pidió que + subjuntivo.' },
            { text: 'Preguntó cuándo podías terminar los diseños.', answer: 'pregunta', why: 'Preguntó + cuándo.' },
            { text: 'Me pidió que hablaras con ella hoy.', answer: 'peticion', why: 'Pidió que + subjuntivo.' },
            { text: 'Prometió que contrataría a una persona más.', answer: 'afirmacion', why: 'Prometió que + condicional: una afirmación sobre el futuro.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero la intención, después el tiempo.',
      steps: [
        { title: 'Elige según el contexto · Choose from the context', blocks: [
          { kind: 'choice', items: [
            { context: 'Ayer tu hermano dijo: «Estoy muy cansado».', prompt: 'Mi hermano dijo que ___ muy cansado.', options: ['estaba', 'esté', 'estaría'], answer: 0, why: 'Presente → imperfecto, desde una perspectiva pasada.', en: 'Yesterday your brother said he was very tired.' },
            { context: 'Julia preguntó: «¿Puedes estar en casa?». Marta lo cuenta sobre sí misma.', prompt: 'Julia me preguntó ___ estar en casa.', options: ['si podía', 'que podía', 'que pudiera'], answer: 0, why: 'Pregunta de sí o no: «si».', en: 'Julia asked whether Marta could be at home. Marta reports it about herself.' },
            { context: 'Julia dijo: «Deja libre la ventana».', prompt: 'Julia me pidió que ___ libre la ventana.', options: ['dejara', 'dejaba', 'dejaría'], answer: 0, why: 'Pedir que + imperfecto de subjuntivo.', en: 'Julia asked Marta to clear the window.' },
            { context: 'La semana pasada tu amiga dijo: «Te devolveré el libro».', prompt: 'Me dijo que me ___ el libro.', options: ['devolvería', 'devuelva', 'devolvía'], answer: 0, why: 'Futuro → condicional.', en: 'Last week your friend said she would give you the book back.' },
            { context: 'Tu profesora preguntó: «¿Dónde vives?».', prompt: 'Me preguntó ___.', options: ['dónde vivía', 'si dónde vivía', 'que dónde viva'], answer: 0, why: 'Palabra interrogativa + imperfecto.', en: 'Your teacher asked where you lived.' },
            { context: 'Ayer tu compañero dijo: «Ya he mandado el correo».', prompt: 'Dijo que ya ___ el correo.', options: ['había mandado', 'haya mandado', 'mandaría'], answer: 0, why: 'Pretérito perfecto → pluscuamperfecto.', en: 'Yesterday your colleague said he had already sent the email.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase transmite una **orden**?', options: ['Dijo que saliéramos a las ocho.', 'Dijo que salíamos a las ocho.'], answer: 0, why: '«Dijo que» + subjuntivo = pidió. Con indicativo, solo informa.', en: 'Which sentence reports an instruction?' },
            { prompt: 'Julia dijo hace una semana: «La oficina abre a las ocho». El horario no ha cambiado. ¿Qué frases pueden ser adecuadas?', options: ['Las dos: «abre» y «abría».', 'Solo «Dijo que la oficina abría a las ocho».', 'Solo «Dijo que la oficina abre a las ocho».'], answer: 0, why: '«Abre» presenta el horario como actual; «abría» mantiene la perspectiva del relato. Ninguna dice que haya cambiado.', en: 'A week ago Julia said the office opens at eight, and the hours haven’t changed. Which sentences can work?' },
            { prompt: '«Preguntó si iría» / «Preguntó cuándo iría». ¿Qué diferencia hay?', options: ['La primera era una pregunta de sí o no; la segunda preguntaba por el momento.', 'No hay diferencia.', 'La segunda es una petición.'], answer: 0, why: '«Si» para sí / no; «cuándo» para el tiempo.', en: 'What is the difference between «Preguntó si iría» and «Preguntó cuándo iría»?' },
            { prompt: 'El lunes Ana dijo: «Mañana vengo». Hoy es jueves. ¿Qué frase es **más clara**?', options: ['Ana dijo que vendría el martes.', 'Ana dijo que vendría mañana.', 'Ana dijo que viene mañana.'], answer: 0, why: '«Mañana» hoy sería el viernes. La fecha concreta evita el malentendido.', en: 'On Monday Ana said she’d come tomorrow. Today is Thursday. Which sentence is clearest?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Transmitir una llamada', lines: [
            { who: 'Sara', text: '¿Quién llamó?' },
            { who: 'Pablo', text: 'Era tu madre. Dijo que ___ el sábado a comer.', options: ['vendría', 'venga', 'vendrá mañana'], answer: 0, why: 'Una afirmación sobre el futuro: «Iré el sábado» → vendría.' },
            { who: 'Sara', text: '¡Qué bien! ¿Preguntó algo?' },
            { who: 'Pablo', text: 'Sí, ___ necesitábamos algo del mercado.', options: ['preguntó si', 'preguntó que', 'pidió que'], answer: 0, why: 'Una pregunta de sí o no.' },
            { who: 'Sara', text: '¿Y qué le dijiste?' },
            { who: 'Pablo', text: 'Que no sabía. Te pidió que la ___ esta noche.', options: ['llamaras', 'llamabas', 'llamarías'], answer: 0, why: 'Pedir que + imperfecto de subjuntivo.' },
            { who: 'Sara', text: 'Bueno. ¿Dijo a qué hora llegaba?' },
            { who: 'Pablo', text: 'Dijo que ___ antes de la una.', options: ['llegaría', 'llegue', 'llegara'], answer: 0, why: 'Futuro → condicional en una afirmación.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Me preguntó que si quería un café.', ok: false, options: ['Me preguntó si quería un café.', 'Me preguntó que quería un café.', 'Me preguntó si quisiera un café.'], answer: 0, why: 'En la lengua cuidada, la pregunta indirecta se introduce solo con «si».' },
            { sentence: 'La profesora nos pidió que leyéramos el capítulo tres.', ok: true, why: 'Correcta: petición con pedir que + imperfecto de subjuntivo.' },
            { sentence: 'Mi jefe me dijo que mande el informe antes de las cinco.', ok: false, options: ['Mi jefe me dijo que mandara el informe antes de las cinco.', 'Mi jefe me dijo que mandaba el informe antes de las cinco.', 'Mi jefe me dijo si mandara el informe antes de las cinco.'], answer: 0, why: 'Con «dijo» en pasado, la petición va en imperfecto de subjuntivo.' },
            { sentence: 'Preguntó ¿a qué hora empezaba la reunión?', ok: false, options: ['Preguntó a qué hora empezaba la reunión.', 'Preguntó que a qué hora empezaba la reunión?', 'Preguntó a que hora empezaba la reunión.'], answer: 0, why: 'Sin signos de interrogación; «qué» conserva la tilde.' },
            { sentence: 'Ayer Luis me dijo que había perdido las llaves.', ok: true, why: 'Correcta: «He perdido las llaves» → había perdido.' },
            { sentence: 'El lunes me prometió que me ayudará mañana.', ok: false, options: ['El lunes me prometió que me ayudaría al día siguiente.', 'El lunes me prometió que me ayude mañana.', 'El lunes me prometió que me ayudaba mañana.'], answer: 0, why: 'Futuro → condicional, y «mañana» pasa a «al día siguiente».' },
          ] },
        ] },
        { title: 'Construye y transforma · Build and transform', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Me', 'preguntó', 'si', 'podía', 'ayudarla'], accept: ['Me preguntó si podía ayudarla'], en: 'She asked me if I could help her.' },
            { tiles: ['Nos', 'pidió', 'que', 'llegáramos', 'temprano'], accept: ['Nos pidió que llegáramos temprano'], en: 'She asked us to arrive early.' },
            { tiles: ['Dijo', 'que', 'iría', 'el', 'jueves'], accept: ['Dijo que iría el jueves', 'Dijo que el jueves iría'], en: 'She said she would go on Thursday.' },
            { tiles: ['Preguntó', 'dónde', 'estaba', 'la', 'factura'], accept: ['Preguntó dónde estaba la factura'], en: 'She asked where the invoice was.' },
          ] },
          { kind: 'rewrite', title: 'Transmite el mensaje', items: [
            { prompt: 'Ayer Elena dijo: «Estoy ocupada».', instruction: 'Empieza con «Elena dijo que…».', accept: ['Elena dijo que estaba ocupada'] },
            { prompt: 'Tu vecino dijo: «¿Tienes una escalera?».', instruction: 'Empieza con «Mi vecino me preguntó…».', accept: ['Mi vecino me preguntó si tenía una escalera'] },
            { prompt: 'Tu jefa dijo: «Envíame el presupuesto».', instruction: 'Empieza con «Mi jefa me pidió que…».', accept: ['Mi jefa me pidió que le enviara el presupuesto', 'Mi jefa me pidió que le enviase el presupuesto'] },
            { prompt: 'El lunes Julia dijo: «El técnico vendrá mañana». Lo cuentas el viernes.', instruction: 'Empieza con «Julia dijo que…» y usa el día concreto.', accept: ['Julia dijo que el técnico vendría el martes', 'Julia dijo que el técnico iría el martes', 'Julia dijo que el martes vendría el técnico', 'Julia dijo que el martes iría el técnico'] },
            { prompt: 'Tu amigo preguntó: «¿Cuándo vuelves de vacaciones?».', instruction: 'Empieza con «Mi amigo me preguntó…».', accept: ['Mi amigo me preguntó cuándo volvía de vacaciones', 'Mi amigo me preguntó cuándo volvería de vacaciones'] },
          ] },
        ] },
        { title: 'El recado completo · The full message', mascot: '/brand/mascot/kneeling.webp', coach: 'Un recado bien transmitido evita problemas.', blocks: [
          { kind: 'choice', items: [
            { context: 'Mensaje original (lunes): «Hola, soy Carmen. Mañana no puedo ir a la clase. ¿Puedes avisar al profesor?». Lo cuentas el miércoles.', prompt: '¿Qué versión es correcta y clara?', options: ['Carmen dijo que el martes no podía ir a clase y me preguntó si podía avisar al profesor.', 'Carmen dijo que mañana no puede ir a clase y me pidió si avisaba al profesor.', 'Carmen dijo que no podría ir a clase y que avise al profesor.'], answer: 0, why: 'Fecha concreta, afirmación con imperfecto y la pregunta con «si».', en: 'Monday’s message from Carmen: she can’t come to class tomorrow, and can you tell the teacher? You report it on Wednesday.' },
            { context: 'Mensaje original: «Trae los documentos y no llegues tarde».', prompt: '¿Cómo transmites las dos peticiones?', options: ['Me pidió que llevara los documentos y que no llegara tarde.', 'Me dijo que llevaba los documentos y que no llegaba tarde.', 'Me preguntó si llevaría los documentos.'], answer: 0, why: 'Dos peticiones: pidió que + subjuntivo. «Traer» pasa a «llevar» si ya no estás en ese lugar.', en: 'Original message: “Bring the documents and don’t be late.”' },
            { context: 'Mensaje original: «¿Ya has pagado la luz?».', prompt: '¿Cómo transmites la pregunta?', options: ['Me preguntó si ya había pagado la luz.', 'Me preguntó que ya pagué la luz.', 'Me pidió que pagara la luz.'], answer: 0, why: 'Pregunta de sí o no; pretérito perfecto → pluscuamperfecto.', en: 'Original message: “Have you paid the electricity bill yet?”' },
            { context: 'Mensaje original: «Prometo que te llamaré esta semana».', prompt: '¿Cómo lo transmites la semana siguiente?', options: ['Prometió que me llamaría esa semana.', 'Prometió que me llamará esta semana.', 'Prometió que me llame esa semana.'], answer: 0, why: 'Futuro → condicional; «esta semana» → «esa semana».', en: 'Original message: “I promise I’ll call you this week.”' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El mensaje de Diego', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un resumen para Marta', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota qué dijo, qué preguntó y qué pidió Julia.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Haz tres listas: lo que Julia dijo, preguntó y pidió.' } },
          { kind: 'listen', title: 'Diego resume la llamada de Julia', channel: 'MENSAJE DE VOZ · PARA MARTA', src: '/audio/grammar-classroom/233.mp3',
            before: 'Diego habló con Julia, de la oficina de mantenimiento, y le deja un mensaje a Marta con un resumen. ¿Por qué crees que lo hace?',
            gist: { prompt: '¿Para qué envía Diego el mensaje?', options: ['Para que tengan la misma información y comprobar diferencias antes de la visita.', 'Para cancelar otra vez la visita.', 'Para quejarse de la oficina.'], answer: 0, why: '«Te mando este resumen para que no tengamos tres versiones distintas».', en: 'Why does Diego send the message?' },
            details: [
              { prompt: '¿Cuándo vendrá el técnico?', options: ['El jueves entre las nueve y las diez.', 'El jueves exactamente a las nueve.', 'El martes a las ocho.'], answer: 0, why: '«Me dijo que el técnico iría el jueves entre las nueve y las diez, no exactamente a las nueve».', en: 'When will the technician come?' },
              { prompt: '¿Qué preguntó Julia?', options: ['Si había alguien en casa que pudiera abrir el cuarto de instalaciones.', 'Dónde estaba la ventana.', 'A qué hora salía Marta del trabajo.'], answer: 0, why: '«Preguntó si había alguien en casa que pudiera abrir el cuarto de instalaciones».', en: 'What did Julia ask?' },
              { prompt: '¿Qué le pidió Julia a Diego?', options: ['Que le enviara su número a Marta.', 'Que quitara las cortinas.', 'Que llamara a las ocho.'], answer: 0, why: '«Me pidió que te enviara su número por si surgía algún problema».', en: 'What did Julia ask Diego to do?' },
              { prompt: '¿Qué aclaró sobre la ventana?', options: ['Que no hacía falta quitar las cortinas.', 'Que había que cambiarla.', 'Que no hacía falta dejar libre el espacio.'], answer: 0, why: '«Aclaró que no hacía falta quitar las cortinas».', en: 'What did she clarify about the window?' },
              { prompt: '¿Por qué Diego dice «la oficina abre a las ocho» en presente?', options: ['Porque el horario sigue vigente.', 'Porque es un error.', 'Porque la oficina abrirá en el futuro.'], answer: 0, why: '«Dijo que la oficina abre a las ocho y que podemos llamar desde esa hora»: un dato actual.', en: 'Why does Diego say «la oficina abre a las ocho» in the present?' },
            ],
            transcript: 'Hola, Marta. Soy Diego. Acabo de hablar con Julia y quiero asegurarme de que he entendido todo. [[Me dijo que el técnico iría|blue]] [[el jueves|violet]] entre las nueve y las diez, no exactamente a las nueve. También [[preguntó si había alguien en casa|teal]] que pudiera abrir el cuarto de instalaciones. [[Le expliqué que tú trabajarías|blue]] desde casa y [[me pidió que te enviara|orange]] su número por si surgía algún problema. Sobre la ventana, [[confirmó que teníamos que dejar|blue]] libre el espacio, pero [[aclaró que no hacía falta|blue]] quitar las cortinas. Por último, [[dijo que la oficina abre a las ocho|blue]] y que podemos llamar desde esa hora. Te mando este resumen para que no tengamos tres versiones distintas. Si alguno de estos datos no coincide con lo que te dijeron, lo comprobamos antes del jueves.',
            reply: { teacher: 'El alumno responde a Diego como si fuera Marta: confirma un dato, corrige otro y transmite algo que Julia le dijo a ella.', self: 'Responde a Diego como si fueras Marta. Confirma un dato y transmite algo más que Julia te dijo a ti («Julia también me dijo que…»).' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo que me dijeron', coach: 'Cuenta lo que otros dijeron, preguntaron y pidieron.',
      steps: [
        { title: 'Lo que me dijeron', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y pregunta a veces por las palabras exactas de la otra persona para comparar.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta después.' } },
          { kind: 'talk', cards: [
            { q: '¿Cuál es el mejor consejo que te dio alguien? ¿Qué te dijo exactamente?', followUps: ['¿Quién te lo dio?', '¿Lo seguiste?', '¿Se lo has dado tú a otra persona?'], phrases: ['Me dijo que [[siempre|blue]]…', 'Me recomendó que [[no…|orange]]', 'Me explicó que…'], hint: 'Si era un consejo, usa «me recomendó / me dijo que + subjuntivo».', example: 'Mi abuela me dijo que nunca tomara una decisión importante con hambre. También me recomendó que escribiera las cosas antes de discutir.', next: 'Ahora, un recado.', teacher: 'Tu alumno dice primero las palabras exactas («No tomes nunca…») y después las transmite.' },
            { q: '¿Recuerdas un mensaje que llegó mal y causó un problema?', followUps: ['¿Qué te dijeron a ti?', '¿Qué había dicho realmente la otra persona?', '¿Cómo se solucionó?'], phrases: ['Me dijeron que…, pero en realidad…', 'Había dicho que…', 'No me quedó claro si…'], hint: 'Compara las dos versiones: lo que te contaron y lo que se había dicho.', example: 'Una vez un compañero me dijo que la reunión era a las diez. En realidad, la jefa había dicho que sería a las diez del día siguiente. Llegué un día antes.', next: 'Hablemos de preguntas.' },
            { q: '¿Qué te preguntan siempre cuando conoces a alguien nuevo? ¿Y qué te molesta que te pregunten?', followUps: ['¿Qué respondes?', '¿Qué te preguntaron en tu última entrevista?', '¿Qué te gustaría que te preguntaran?'], phrases: ['Siempre me preguntan [[de dónde soy|teal]]…', 'Me preguntaron [[si…|teal]]', 'No me gusta que me pregunten…'], hint: 'Pregunta de sí / no → «si». Otras → «qué, dónde, cuándo, por qué».', example: 'Siempre me preguntan de dónde soy por mi acento. En mi última entrevista me preguntaron si estaba dispuesta a viajar y por qué quería cambiar de trabajo.', next: 'Ahora, peticiones.' },
            { q: '¿Qué te pedía tu familia cuando eras pequeño o pequeña? ¿Y qué te piden ahora?', followUps: ['¿Lo hacías?', '¿Qué les pides tú a otras personas?', '¿Hay algo que te pidieron y no hiciste?'], phrases: ['Mi madre me pedía que [[ordenara|orange]]…', 'Ahora me piden que [[llame|orange]]…', 'Siempre me decían que…'], hint: 'Con «pide» en presente, presente de subjuntivo («me piden que llame»); con «pedía», imperfecto de subjuntivo («me pedía que ordenara»).', example: 'Mi madre me pedía que ordenara mi cuarto todos los sábados. Ahora mis padres me piden que los llame más a menudo.', next: 'Hablemos del trabajo.' },
            { q: 'Cuéntame una reunión o una conversación importante de esta semana. ¿Qué se dijo?', followUps: ['¿Quién habló más?', '¿Qué pidieron?', '¿Qué quedó pendiente?'], phrases: ['Mi jefa [[explicó que|blue]]…', 'Un cliente [[preguntó si|teal]]…', 'Nos [[pidieron que|orange]]…'], hint: 'Usa verbos precisos: explicó, aclaró, prometió, insistió en que, recordó que.', example: 'El lunes tuvimos reunión. Mi jefa explicó que el proyecto se retrasaría un mes. Un compañero preguntó si habría más presupuesto y ella prometió que lo consultaría. Nos pidió que no habláramos todavía con los clientes.', next: 'Para terminar, una promesa.', teacher: 'Haz de compañero que no estuvo en la reunión y pide detalles: «¿Y qué dijo exactamente?».' },
            { q: '¿Alguien te prometió algo que no cumplió? ¿O cumpliste tú una promesa difícil?', followUps: ['¿Qué te prometió exactamente?', '¿Qué explicación te dio?', '¿Volviste a confiar?'], phrases: ['Me prometió que [[vendría|blue]]…', 'Me aseguró que…', 'Me explicó que no había podido…'], hint: '«Prometió que + condicional»: «Me prometió que me devolvería el dinero».', example: 'Un amigo me prometió que me devolvería mi cámara antes del verano. Después me explicó que se le había roto y me preguntó si podía pagarla en dos meses.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor cuenta algo que le dijeron y el alumno pide las palabras exactas («¿Y qué te dijo exactamente?»).', self: 'Esta semana, cuando alguien te dé un recado, escríbelo en estilo indirecto: «X me dijo que…, me preguntó si…, me pidió que…».' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Transmitir una llamada', coach: 'Que tu lector no tenga que preguntar.',
      steps: [
        { title: 'Transmitir una llamada', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos si cada frase transmite bien la intención y si las fechas se entienden.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después comprueba que las fechas se entienden sin conocer el mensaje original.' } },
          { kind: 'write', title: 'Un mensaje para alguien que no estaba', situation: 'Esta mañana recibiste una llamada sobre una visita técnica (o una entrega, o una cita médica). La otra persona de tu casa o de tu oficina no la escuchó. Escríbele un mensaje con todo lo importante.', task: [
            'Transmite una **afirmación** (dijo / explicó / confirmó que…).',
            'Transmite una **pregunta** (preguntó si / cuándo / dónde…).',
            'Transmite una **petición** (pidió que + subjuntivo).',
            'Usa **fechas concretas** y aclara qué dato está **pendiente** de confirmación.',
          ], starters: ['Esta mañana hablé con…', '… me dijo que…', 'Preguntó si…', 'También pidió que…', 'Aclaró que…', 'Todavía no sabemos si…'],
            words: ['explicó', 'confirmó', 'aclaró', 'prometió', 'preguntó si', 'pidió que', 'el jueves', 'esa tarde', 'pendiente'],
            model: 'Hola, Clara. Esta mañana hablé con recepción. Julia [[me dijo que el técnico vendría|blue]] [[el jueves|violet]] entre las nueve y las diez. [[Preguntó si habría alguien|teal]] para abrir el cuarto de instalaciones y le confirmé que trabajarías desde casa. También [[pidió que dejáramos libre|orange]] el espacio delante de la ventana, aunque [[aclaró que no era necesario|blue]] quitar las cortinas. El horario de llegada todavía depende de la visita anterior; [[prometió que nos avisaría|blue]] si había un retraso. ¿Puedes guardar su número y revisar que tengas la llave del cuarto?',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial · The essentials', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'AFIRMACIÓN', formula: 'dijo / explicó que + tiempo desplazado', example: '«Iré el jueves» → Dijo que iría el jueves.', caption: 'Presente → imperfecto; futuro → condicional. El presente vigente puede mantenerse.', en: 'Statement: present → imperfect, future → conditional. A present that is still true can stay.' },
            { tone: 'teal', label: 'PREGUNTA', formula: 'preguntó si / qué / cuándo…', example: '«¿Puedes venir?» → Preguntó si podía ir.', caption: 'Sin signos de interrogación.', en: 'Question: «si» for yes/no, otherwise the question word; no question marks.' },
            { tone: 'orange', label: 'PETICIÓN', formula: 'pidió que + subjuntivo', example: '«Deja libre la ventana» → Pidió que dejara libre la ventana.', caption: 'Preguntar no es pedir.', en: 'Request: «pidió que» + subjunctive. Asking is not requesting.' },
            { tone: 'violet', label: 'REFERENCIA', formula: 'hoy, mañana, aquí, tú → según quién cuenta', example: '«Mañana vendré» (lunes) → Dijo que iría el martes.', caption: 'Usa la fecha concreta si hay dudas.', en: 'Reference: today, tomorrow, here, you depend on who is reporting. Use the actual date if in doubt.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres preguntas', text: '¿Qué **hizo** la persona: afirmar, preguntar o pedir? ¿**Cuándo** lo cuentas: el mismo día o después? ¿Sigue **vigente** el dato? Con eso eliges el verbo, el tiempo y las referencias.', en: 'Three questions. What did the person do: state, ask or request? When are you reporting it: the same day or later? Is the information still true? Those answers give you the verb, the tense and the references.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '«¿Has visto mis llaves?» → Me preguntó ___ sus llaves.', options: ['si había visto', 'que había visto', 'si haya visto'], answer: 0, why: 'Pregunta de sí / no; pretérito perfecto → pluscuamperfecto.', en: 'Report the question «¿Has visto mis llaves?» (Have you seen my keys?).' },
            { prompt: '«Cierra la ventana, por favor.» → Me pidió que ___ la ventana.', options: ['cerrara', 'cerraba', 'cerraría'], answer: 0, why: 'Pedir que + imperfecto de subjuntivo.', en: 'Report the request to close the window.' },
            { prompt: '«Llegaré tarde.» (ayer) → Ayer dijo que ___ tarde.', options: ['llegaría', 'llegue', 'llegará mañana'], answer: 0, why: 'Futuro → condicional.', en: 'Yesterday someone said they would be late. Report it.' },
            { prompt: 'El viernes dijo: «Hoy cierro yo». Lo cuentas el lunes: Dijo que ___ cerraba él.', options: ['el viernes', 'hoy', 'mañana'], answer: 0, why: '«Hoy» era el viernes; el lunes, la fecha concreta es lo claro.', en: 'On Friday he said he was locking up that day. You report it on Monday.' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: ¿es siempre obligatorio cambiar «abre» por «abría» al contar lo que alguien dijo? No: puedes mantener «abre» si presentas el horario como actual; «abría» conserva la perspectiva pasada y tampoco implica que haya cambiado.' },
        ] },
      ],
    },
  ],
};
