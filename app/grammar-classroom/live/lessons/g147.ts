import type { LiveLesson } from '../types';

/**
 * Lesson 147 · B1 · Pretérito pluscuamperfecto.
 * Core: había + participio for an action before another past point, to explain
 * causes and to report discoveries. One story runs through the class: Elena's
 * workshop reservation that did not appear.
 */
export const lesson: LiveLesson = {
  id: 147,
  level: 'B1',
  title: 'Pluscuamperfecto',
  subtitle: 'Explicar qué había pasado antes de un momento del pasado: ordenar hechos, dar causas y contar descubrimientos.',
  legend: [
    { tone: 'blue', label: 'El momento de referencia en el pasado' },
    { tone: 'orange', label: 'Pluscuamperfecto · lo que pasó antes de ese momento' },
    { tone: 'teal', label: 'Ya, todavía no, nunca… antes de ese momento' },
  ],
  optionNotes: {
    empezó: '«Empezó» presenta el hecho en secuencia, después del otro. Si ocurrió antes, se usa el pluscuamperfecto.',
    salió: '«Salió» pone la salida después de la llegada. Para decir que ocurrió antes, se usa «había salido».',
    'ha salido': 'El perfecto compuesto se mira desde hoy. Aquí el punto de referencia es un momento pasado.',
    'ha empezado': 'El perfecto compuesto se mira desde hoy. Aquí el punto de referencia es un momento pasado.',
    'habían llegados': 'Con «haber», el participio no cambia: siempre termina en -o.',
    'había escribido': 'El participio de «escribir» es irregular: «escrito».',
    'había rompido': 'El participio de «romper» es irregular: «roto».',
    'había volvido': 'El participio de «volver» es irregular: «vuelto».',
    'había hacido': 'El participio de «hacer» es irregular: «hecho».',
    'había decido': 'El participio de «decir» es irregular: «dicho».',
    'había vido': 'El participio de «ver» es irregular: «visto».',
    'había ponido': 'El participio de «poner» es irregular: «puesto».',
    descansará: 'El futuro no sirve para explicar la causa de un estado pasado.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El pasado del pasado', coach: 'Dos momentos en el pasado: ¿cuál fue primero?',
      steps: [
        { title: 'Dos momentos en el pasado · Two moments in the past', blocks: [
          { kind: 'lead', text: 'El viernes, Elena llegó al centro cultural para dar un taller. Pero **dos semanas antes** había pasado algo importante: había reservado una sala. El pluscuamperfecto sirve para **volver atrás** desde un momento que ya es pasado.', en: 'On Friday Elena arrived at the cultural centre to run a workshop. But two weeks earlier something important had happened: she had booked a room. The pluperfect (“had + past participle”) lets you step further back from a moment that is already in the past.' },
          { kind: 'guide', text: { teacher: 'Lean las dos frases y dibujen una línea del tiempo en la pizarra o en un papel. Pregunta: «¿Qué pasó primero en cada frase?».', self: 'Lee las dos frases y dibuja una línea del tiempo en un papel. ¿Qué pasó primero en cada una?' } },
          { kind: 'compare', title: 'Cuando llegamos al cine…', columns: [
            { tone: 'blue', label: 'INDEFINIDO', sentence: 'Cuando [[llegamos|blue]], la película **empezó**.', idea: 'Dos hechos seguidos: primero llegamos y después empezó la película. La vimos completa.', en: 'Two events in a row: first we arrived, then the film started. We saw all of it.' },
            { tone: 'orange', label: 'PLUSCUAMPERFECTO', sentence: 'Cuando [[llegamos|blue]], la película [[ya había empezado|orange]].', idea: 'La película empezó **antes** de la llegada. Nos perdimos el principio.', en: 'The film started before we arrived. We missed the beginning.' },
          ] },
          { kind: 'tip', icon: '⏮', title: 'Busca el segundo pasado', text: 'El pluscuamperfecto casi siempre necesita **otro momento pasado** como referencia: «cuando llegamos», «el viernes», «a las diez». Lo que pasó **antes** de ese momento va en pluscuamperfecto.', en: 'The pluperfect almost always needs another past moment as a reference point: “when we arrived”, “on Friday”, “at ten”. Whatever happened before that moment goes in the pluperfect.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Cuando llegué, Ana ya había salido.» ¿Qué pasó primero?', options: ['Ana salió.', 'Yo llegué.'], answer: 0, why: '«Había salido» marca la acción anterior: Ana salió antes de mi llegada.', en: '“Cuando llegué, Ana ya había salido.” What happened first?' },
            { prompt: '«Cuando llegué, Ana salió.» ¿Nos vimos?', options: ['Sí, probablemente un momento.', 'No, Ana ya no estaba.'], answer: 0, why: 'Con el indefinido, los hechos van en orden: llegué y después Ana salió.', en: '“Cuando llegué, Ana salió.” Did we see each other?' },
          ] },
        ] },
        { title: 'Cómo se forma · How to form it', mascot: '/brand/mascot/studying.webp', coach: 'Haber en imperfecto + participio.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PLUSCUAMPERFECTO', question: '¿Qué había pasado antes?', en: 'Imperfect of “haber” + past participle, just like English “had done”: it shows an action completed before another past moment', formula: ['había / habías / había / habíamos / habíais / habían + participio'],
            meaning: 'Se forma con el verbo **haber en imperfecto** y el **participio** del verbo principal. El participio no cambia nunca.',
            examples: [
              { es: 'Elena [[había reservado|orange]] una sala dos semanas antes.', en: 'Elena had booked a room two weeks before.' },
              { es: 'Nosotros no [[habíamos comido|orange]] nada en todo el día.', en: 'We hadn’t eaten anything all day.' },
              { es: 'Los participantes todavía no [[habían llegado|orange]].', en: 'The participants still hadn’t arrived.' },
            ] },
          { kind: 'table', title: 'Formas regulares', head: ['', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', '**había** habl**ado**', '**había** com**ido**', '**había** viv**ido**'],
            ['tú', '**habías** habl**ado**', '**habías** com**ido**', '**habías** viv**ido**'],
            ['él / ella / usted', '**había** habl**ado**', '**había** com**ido**', '**había** viv**ido**'],
            ['nosotros / nosotras', '**habíamos** habl**ado**', '**habíamos** com**ido**', '**habíamos** viv**ido**'],
            ['vosotros / vosotras', '**habíais** habl**ado**', '**habíais** com**ido**', '**habíais** viv**ido**'],
            ['ellos / ellas / ustedes', '**habían** habl**ado**', '**habían** com**ido**', '**habían** viv**ido**'],
          ], note: 'Participio regular: **-ado** para los verbos en -ar; **-ido** para los verbos en -er e -ir.' },
          { kind: 'table', title: 'Participios irregulares frecuentes', head: ['infinitivo', 'participio', 'ejemplo'], rows: [
            ['hacer', '**hecho**', 'Ya había **hecho** la cena.'],
            ['decir', '**dicho**', 'Nadie me lo había **dicho**.'],
            ['ver', '**visto**', 'Nunca había **visto** el mar.'],
            ['escribir', '**escrito**', 'Ya había **escrito** el correo.'],
            ['poner', '**puesto**', 'Habían **puesto** las sillas.'],
            ['volver', '**vuelto**', 'Todavía no había **vuelto**.'],
            ['abrir', '**abierto**', 'Alguien había **abierto** la ventana.'],
            ['romper', '**roto**', 'El perro había **roto** un vaso.'],
          ] },
          { kind: 'tip', icon: '🔒', title: 'Un bloque que no se separa', text: 'Entre **había** y el participio no va nada: «**Ya** había salido», «**No** lo había visto», nunca «había ya salido». Y el participio no cambia: «Ellas habían **llegado**», no «llegadas».', en: 'Nothing goes between “había” and the participle: put “ya” or “no” before “había”, never in the middle. And the participle never changes for gender or number.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Nosotros no ___ mesa y el restaurante estaba lleno.', options: ['habíamos reservado', 'hemos reservar', 'habíamos reservada'], answer: 0, why: '«Habíamos» + participio invariable «reservado».', en: 'We ___ (book) a table and the restaurant was full.' },
            { prompt: 'Cuando entré, alguien ya ___ la ventana.', options: ['había abrido', 'había abierto', 'abría'], answer: 1, why: '«Abrir» tiene participio irregular: «abierto».', en: 'When I came in, someone ___ (open) the window already.' },
          ] },
        ] },
        { title: 'Antes de otro momento · Before another moment', mascot: '/brand/mascot/speaking.webp', coach: '¿Ya había pasado o todavía no?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ANTERIORIDAD', question: '¿Qué había pasado cuando…?', en: 'Use it for what had (or had not yet) happened by a past reference point. “Ya” (already), “todavía no” (not yet) and “nunca” (never) often go with it', formula: ['cuando + indefinido, (ya / todavía no) + pluscuamperfecto'],
            meaning: 'Presenta una acción **terminada antes** de otro momento del pasado. Con **ya** confirmamos que había pasado; con **todavía no**, que no había pasado aún.',
            examples: [
              { es: 'Cuando [[llegaron|blue]] los participantes, Elena [[ya|teal]] [[había colocado|orange]] las sillas.', en: 'When the participants arrived, Elena had already set out the chairs.' },
              { es: 'Cuando [[sonó|blue]] el despertador, [[ya|teal]] me [[había levantado|orange]].', en: 'When the alarm went off, I had already got up.' },
              { es: '[[A las diez|blue]], el profesor [[todavía no|teal]] [[había llegado|orange]].', en: 'At ten, the teacher still hadn’t arrived.' },
              { es: '[[Antes de 2020|blue]], [[nunca|teal]] [[había viajado|orange]] sola.', en: 'Before 2020, I had never travelled alone.' },
            ],
            note: 'Con **nunca** + pluscuamperfecto contamos una experiencia nueva: «Nunca había visto la nieve **hasta ese invierno**».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Cuando llegamos, la película ya ___.', options: ['había empezado', 'empezará', 'ha empezado'], answer: 0, why: 'La película empezó antes de nuestra llegada.', en: 'When we arrived, the film ___ (start) already.' },
            { prompt: 'A las nueve, Pablo todavía no ___ de casa.', options: ['salió', 'había salido', 'saldría'], answer: 1, why: '«Todavía no» + pluscuamperfecto: a esa hora no había ocurrido la salida.', en: 'At nine, Pablo still ___ (leave) home.' },
          ] },
        ] },
        { title: 'Explicar la causa · Explaining the cause', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Por qué pasó? Por algo anterior.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CAUSA ANTERIOR', question: '¿Por qué estaba así?', en: 'To explain why a past situation was the way it was, give the earlier cause with “porque” + pluperfect', formula: ['situación pasada + porque + pluscuamperfecto'],
            meaning: 'Explica una situación del pasado con una **causa que ocurrió antes**. Es muy útil para justificar, disculparse o aclarar un problema.',
            examples: [
              { es: '[[Estaba|blue]] muy cansado porque no [[había dormido|orange]] bien.', en: 'I was very tired because I hadn’t slept well.' },
              { es: 'La sala [[estaba|blue]] libre porque otro grupo [[había cancelado|orange]].', en: 'The room was free because another group had cancelled.' },
              { es: 'No [[aprobó|blue]] el examen porque no [[había estudiado|orange]].', en: 'He didn’t pass the exam because he hadn’t studied.' },
              { es: '[[Llegamos|blue]] tarde porque [[habíamos perdido|orange]] el autobús.', en: 'We arrived late because we had missed the bus.' },
            ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Estaba enfermo porque no ___ en toda la semana.', options: ['había descansado', 'descansará', 'descanse'], answer: 0, why: 'La falta de descanso ocurrió antes del estado pasado.', en: 'He was ill because he ___ (rest) all week.' },
            { prompt: 'Lucía no pudo entrar porque ___ las llaves en la oficina.', options: ['había dejado', 'dejaría', 'ha dejado'], answer: 0, why: 'Dejó las llaves antes de intentar entrar: causa anterior.', en: 'Lucía couldn’t get in because she ___ (leave) her keys at the office.' },
          ] },
        ] },
        { title: 'Contar un descubrimiento · Telling a discovery', mascot: '/brand/mascot/kneeling.webp', coach: 'Me di cuenta después, pero había pasado antes.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'DESCUBRIMIENTO', question: '¿Qué descubriste?', en: 'After verbs of discovering (saw, realised, found out), the thing that had already happened goes in the pluperfect: you found out later, but it happened earlier', formula: ['vi / me di cuenta de / supe / me enteré de que + pluscuamperfecto'],
            meaning: 'Primero pasa algo; **después** alguien lo descubre. El descubrimiento va en indefinido y el hecho descubierto, que es anterior, va en pluscuamperfecto.',
            examples: [
              { es: 'Elena [[descubrió|blue]] que el centro [[había cambiado|orange]] el sistema.', en: 'Elena discovered that the centre had changed the system.' },
              { es: '[[Me di cuenta de|blue]] que [[había olvidado|orange]] el teléfono en casa.', en: 'I realised I had left my phone at home.' },
              { es: '[[Supimos|blue]] que Marta [[había ganado|orange]] el premio.', en: 'We found out that Marta had won the prize.' },
            ] },
          { kind: 'tip', icon: '🔍', title: 'Lo mismo con «dijo que»', text: 'Para contar lo que alguien dijo sobre algo anterior: «La recepcionista **explicó** que otro grupo **había cancelado**».', en: 'The same happens with reported speech: to report what someone said about something earlier, “explicó que…” + pluperfect.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Miré el correo y vi que la reunión ___.', options: ['se había cancelado', 'se cancelaría', 'se cancela'], answer: 0, why: 'La cancelación ocurrió antes de que yo abriera el correo.', en: 'I checked my email and saw that the meeting ___ (be cancelled).' },
            { prompt: 'Cuando volví del viaje, supe que mis vecinos ___.', options: ['se habían mudado', 'se mudarán', 'se mudan'], answer: 0, why: 'La mudanza fue antes de mi descubrimiento.', en: 'When I got back from my trip, I found out that my neighbours ___ (move).' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Indefinido o pluscuamperfecto: el orden decide.', blocks: [
          { kind: 'decide', title: 'Piensa en dos hechos pasados y responde', steps: [
            { q: '¿Cuentas los hechos en el mismo orden en que pasaron?', yes: 'Usa el **indefinido** para los dos: «[[Llegué|blue]] y después **cené**».', no: 'next' },
            { q: '¿Uno de los hechos ocurrió antes del otro y quieres volver atrás?', yes: 'Usa el **pluscuamperfecto** para el hecho anterior: «Cuando [[llegué|blue]], ya [[habían cenado|orange]]».', no: 'Si solo describes la situación de ese momento, usa el **imperfecto**: «Cuando llegué, **cenaban**».' },
          ] },
          { kind: 'table', title: 'Tres finales para la misma frase', head: ['frase', '¿qué pasó?'], rows: [
            ['Cuando llegué, **cenaron**.', 'Llegué y después cenaron.'],
            ['Cuando llegué, **cenaban**.', 'Llegué en medio de la cena.'],
            ['Cuando llegué, [[ya habían cenado|orange]].', 'La cena terminó antes de mi llegada.'],
          ], note: 'Si el orden ya está claro con «antes» o «después», en la conversación también se oye el indefinido: «Llegué después de que **cenaron**». El pluscuamperfecto hace el orden más claro.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error y dibuja la línea del tiempo de la frase antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y piensa qué pasó primero. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Cuando llegué, Ana ya salió.', right: 'Cuando llegué, Ana ya había salido.', why: 'Con «ya», la salida es anterior a la llegada: pluscuamperfecto.' },
            { wrong: 'Las chicas habían llegadas tarde.', right: 'Las chicas habían llegado tarde.', why: 'Con «haber», el participio no cambia de género ni de número.' },
            { wrong: 'Había ya terminado el informe.', right: 'Ya había terminado el informe.', why: 'No se pone nada entre «había» y el participio.' },
            { wrong: 'Nunca había vido una montaña tan alta.', right: 'Nunca había visto una montaña tan alta.', why: 'El participio de «ver» es irregular: «visto».' },
            { wrong: 'Ayer he visto que había llovido mucho.', right: 'Ayer vi que había llovido mucho.', why: '«Ayer» es un momento cerrado: el descubrimiento va en indefinido.' },
            { wrong: 'Estaba cansada porque no he dormido.', right: 'Estaba cansada porque no había dormido.', why: 'La causa es anterior a un estado pasado: pluscuamperfecto.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que cuente una llegada reciente (a casa, al trabajo, a clase) con «Cuando llegué, ya…» y «todavía no…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El pluscuamperfecto en situaciones reales', coach: 'Toca las formas marcadas.',
      steps: [
        { title: 'La reserva que no aparecía · The booking that wasn’t there', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada forma marcada y explica qué pasó antes y qué pasó después.', self: 'Lee el diálogo. Después toca cada forma marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'En la recepción del centro cultural', setting: 'Es viernes por la mañana. Elena llega al centro cultural para dar un taller, pero su nombre no está en el programa.', lines: [
            { who: 'Elena', text: 'Buenos días. Vengo a dar el taller de las diez, en la sala tres.', en: 'Good morning. I’m here to run the ten o’clock workshop, in room three.' },
            { who: 'Recepcionista', text: 'Lo siento, no veo su nombre en el programa de hoy.', en: 'I’m sorry, I can’t see your name on today’s programme.' },
            { who: 'Elena', text: '¿Cómo puede ser? [[Había reservado|orange]] la sala dos semanas antes.', en: 'How can that be? I had booked the room two weeks before.' },
            { who: 'Recepcionista', text: '¿Recibió algún correo de confirmación?', en: 'Did you get a confirmation email?' },
            { who: 'Elena', text: 'Déjeme ver… Ah, ya veo el problema: cuando [[envié|blue]] mi solicitud, el centro [[había cambiado|orange]] el sistema de reservas esa misma mañana.', en: 'Let me see… Ah, I see the problem: when I sent my request, the centre had changed the booking system that same morning.' },
            { who: 'Recepcionista', text: 'Entiendo. Su mensaje [[había quedado|orange]] sin confirmar.', en: 'I see. Your message had been left unconfirmed.' },
            { who: 'Elena', text: 'Y el lunes [[ya|teal]] [[había enviado|orange]] la lista de participantes…', en: 'And on Monday I had already sent the list of participants…' },
            { who: 'Recepcionista', text: 'Un momento… ¡Tenemos suerte! Otro grupo [[había cancelado|orange]] su taller a primera hora. La sala cinco está libre.', en: 'One moment… We’re in luck! Another group had cancelled their workshop first thing. Room five is free.' },
            { who: 'Elena', text: '¡Qué alivio! Voy a prepararla.', en: 'What a relief! I’ll go and set it up.' },
            { who: 'Recepcionista', text: 'Y la lista de participantes está aquí: un compañero la [[había guardado|orange]].', en: 'And the list of participants is here: a colleague had saved it.' },
            { who: 'Elena', text: 'Perfecto. Quiero tener todo listo antes de las diez.', en: 'Perfect. I want to have everything ready before ten.' },
          ], notes: {
            'Había reservado': 'La reserva se hizo **dos semanas antes** del viernes: es anterior al momento de la historia.',
            envié: 'El **momento de referencia**: el día en que Elena envió su solicitud.',
            'había cambiado': 'El cambio de sistema ocurrió **antes** del envío, esa misma mañana: es la causa del problema.',
            'había quedado': 'Explica el estado del mensaje con algo que pasó **antes**.',
            ya: '**Ya**: la lista estaba enviada antes de este momento.',
            'había enviado': 'El envío del lunes es **anterior** al problema del viernes.',
            'había cancelado': 'La cancelación fue **a primera hora**, antes de la llegada de Elena: por eso la sala está libre.',
            'había guardado': 'El compañero guardó la lista **antes**; ahora la pueden recuperar.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué no aparecía la reserva de Elena?', options: ['El centro había cambiado el sistema y su mensaje había quedado sin confirmar.', 'Elena no había reservado ninguna sala.', 'Otro grupo había ocupado su sala.'], answer: 0, why: '«El centro había cambiado el sistema de reservas… Su mensaje había quedado sin confirmar».', en: 'Why didn’t Elena’s booking show up?' },
            { prompt: '¿Por qué estaba libre la sala cinco?', options: ['Porque otro grupo había cancelado su taller.', 'Porque Elena la había reservado.', 'Porque nadie la usaba los viernes.'], answer: 0, why: '«Otro grupo había cancelado su taller a primera hora».', en: 'Why was room five free?' },
          ] },
        ] },
        { title: 'Una sorpresa · A surprise', blocks: [
          { kind: 'explore', title: '¿Qué pasó en tu cumpleaños?', setting: 'El lunes, Lucas le cuenta a su compañera Inés lo que pasó el sábado, el día de su cumpleaños.', lines: [
            { who: 'Inés', text: '¿Qué tal tu cumpleaños?', en: 'How was your birthday?' },
            { who: 'Lucas', text: 'Increíble. Mis amigos me [[habían preparado|orange]] una fiesta sorpresa.', en: 'Amazing. My friends had organised a surprise party for me.' },
            { who: 'Inés', text: '¿Y no sospechabas nada?', en: 'And you didn’t suspect anything?' },
            { who: 'Lucas', text: 'Nada. [[Nunca|teal]] me [[habían hecho|orange]] una fiesta así.', en: 'Nothing. Nobody had ever thrown me a party like that.' },
            { who: 'Inés', text: '¿Cómo fue?', en: 'What happened?' },
            { who: 'Lucas', text: 'Cuando [[entré|blue]] en casa, [[ya|teal]] [[habían llegado|orange]] todos.', en: 'When I walked into the house, everyone had already arrived.' },
            { who: 'Inés', text: 'Pero ¿cómo entraron?', en: 'But how did they get in?' },
            { who: 'Lucas', text: 'Mi hermana les [[había dado|orange]] una copia de la llave el viernes.', en: 'My sister had given them a copy of the key on Friday.' },
            { who: 'Inés', text: '¡Qué buena idea!', en: 'What a good idea!' },
            { who: 'Lucas', text: 'Sí. Lo único: yo estaba cansadísimo porque [[había trabajado|orange]] doce horas.', en: 'Yes. The only thing: I was exhausted because I had worked twelve hours.' },
          ], notes: {
            'habían preparado': 'Prepararon la fiesta **antes** de que Lucas llegara a casa.',
            Nunca: '**Nunca** + pluscuamperfecto: hasta ese sábado, era una experiencia nueva.',
            'habían hecho': 'Una experiencia que **no había ocurrido nunca** antes de ese día.',
            entré: 'El momento de referencia: Lucas entra en casa.',
            ya: '**Ya**: los amigos estaban allí antes de que él entrara.',
            'habían llegado': 'La llegada de los amigos es **anterior** a la de Lucas.',
            'había dado': 'El viernes, **antes** del sábado: explica cómo entraron.',
            'había trabajado': 'La **causa anterior** de su cansancio: trabajó antes de la fiesta.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué más habían preparado los amigos?». El alumno inventa dos cosas con «habían…».' },
        ] },
        { title: 'Antes, causa o descubrimiento · Before, cause or discovery', blocks: [
          { kind: 'classify', title: '¿Qué hace el pluscuamperfecto en cada frase?', categories: [
            { id: 'antes', label: 'Antes de otro momento', tone: 'blue' },
            { id: 'causa', label: 'Explica una causa', tone: 'orange' },
            { id: 'descubrir', label: 'Un descubrimiento', tone: 'teal' },
          ], items: [
            { text: 'Cuando entré en casa, ya habían llegado todos.', answer: 'antes', why: 'La llegada de los amigos fue antes de que Lucas entrara.' },
            { text: 'Estaba cansadísimo porque había trabajado doce horas.', answer: 'causa', why: '«Porque» introduce la causa anterior.' },
            { text: 'Descubrió que el centro había cambiado el sistema.', answer: 'descubrir', why: 'Elena descubre algo que había pasado antes.' },
            { text: 'La sala estaba libre porque otro grupo había cancelado.', answer: 'causa', why: 'La cancelación explica por qué la sala estaba libre.' },
            { text: 'A las diez, los participantes todavía no habían llegado.', answer: 'antes', why: 'A esa hora la llegada no había ocurrido.' },
            { text: 'Me di cuenta de que había olvidado el teléfono.', answer: 'descubrir', why: '«Me di cuenta de que» introduce el descubrimiento.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Antes de responder, pregúntate qué pasó primero.',
      steps: [
        { title: 'Elige según el contexto · Choose by context', blocks: [
          { kind: 'choice', items: [
            { context: 'El tren salió a las 8:00. Llegaste a la estación a las 8:05.', prompt: 'Cuando llegué a la estación, el tren ya ___.', options: ['salió', 'había salido', 'salía'], answer: 1, why: 'El tren salió antes de tu llegada: pluscuamperfecto.', en: 'The train left at 8:00. You got to the station at 8:05. When I got to the station, the train ___ already.' },
            { context: 'No comiste nada en todo el día.', prompt: 'A las seis tenía mucha hambre porque no ___ nada.', options: ['había comido', 'comería', 'he comido'], answer: 0, why: 'La causa es anterior al hambre de las seis.', en: 'You didn’t eat anything all day. At six I was very hungry because I ___ anything.' },
            { context: 'Buscaste tu pastel en el refrigerador.', prompt: 'Miré en el refrigerador y vi que alguien ___ mi pastel.', options: ['se comería', 'se había comido', 'se come'], answer: 1, why: 'Alguien se lo comió antes de tu descubrimiento.', en: 'You looked for your cake in the fridge. I looked in the fridge and saw that someone ___ my cake.' },
            { context: 'Primera vez en avión, a los treinta años.', prompt: 'Hasta los treinta años, nunca ___ en avión.', options: ['había viajado', 'viajaba', 'viajaré'], answer: 0, why: '«Nunca» + pluscuamperfecto: una experiencia que no había ocurrido hasta ese momento.', en: 'First time on a plane, at thirty. Until I was thirty, I never ___ (travel) by plane.' },
            { context: 'La profesora entró a las 9:00. Los alumnos llegaron a las 9:10.', prompt: 'Cuando llegaron los alumnos, la profesora ya ___ la clase.', options: ['empezó', 'empezaba', 'había empezado'], answer: 2, why: 'La clase empezó antes de la llegada de los alumnos.', en: 'The teacher came in at 9:00. The students arrived at 9:10.' },
            { context: 'Escribiste el informe el lunes. Tu jefe te lo pidió el martes.', prompt: 'Cuando mi jefe me pidió el informe, ya lo ___.', options: ['había escribido', 'había escrito', 'escribiría'], answer: 1, why: 'Participio irregular de «escribir»: «escrito».', en: 'You wrote the report on Monday. Your boss asked for it on Tuesday.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿En qué frase **no vimos** a Marta en la fiesta?', options: ['Cuando llegamos, Marta se fue.', 'Cuando llegamos, Marta ya se había ido.'], answer: 1, why: '«Ya se había ido»: se fue antes de nuestra llegada.', en: 'In which sentence did we NOT see Marta at the party?' },
            { prompt: '«Cuando llegué a casa, mi madre había cocinado.» ¿Qué encontré?', options: ['La comida ya hecha.', 'A mi madre cocinando.', 'La cocina vacía.'], answer: 0, why: 'El pluscuamperfecto indica que la acción ya estaba terminada.', en: '“Cuando llegué a casa, mi madre había cocinado.” What did I find?' },
            { prompt: '¿Qué frase dice que **la llamada fue antes** de la reunión?', options: ['Antes de la reunión, Juan había llamado al cliente.', 'Después de la reunión, Juan llamó al cliente.'], answer: 0, why: 'El pluscuamperfecto y «antes de» sitúan la llamada antes de la reunión.', en: 'Which sentence says the call came before the meeting?' },
            { prompt: '«Nunca había probado el mole hasta mi viaje a Puebla.» ¿Qué significa?', options: ['Lo probé por primera vez en ese viaje.', 'No lo probé en ese viaje.', 'Lo comía siempre antes del viaje.'], answer: 0, why: '«Nunca había… hasta…»: la experiencia empieza en ese momento.', en: '“Nunca había probado el mole hasta mi viaje a Puebla.” What does it mean?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Un mal día en el aeropuerto', lines: [
            { who: 'Sara', text: '¿Por qué no viniste a la boda de Laura?' },
            { who: 'Daniel', text: 'Me quedé sin avión. Cuando llegué al aeropuerto, ya ___ la puerta de embarque.', options: ['cerraron', 'habían cerrado', 'cerraban'], answer: 1, why: 'Cerraron la puerta antes de que Daniel llegara.' },
            { who: 'Sara', text: '¿Pero no saliste con tiempo?' },
            { who: 'Daniel', text: 'Sí, pero el taxi no llegó. Lo ___ la noche anterior, pero hubo un error.', options: ['había reservado', 'reservaría', 'he reservado'], answer: 0, why: 'La reserva fue antes del problema: pluscuamperfecto.' },
            { who: 'Sara', text: '¡Qué mala suerte!' },
            { who: 'Daniel', text: 'Y en el aeropuerto me di cuenta de que ___ la cartera en el taxi… del día anterior.', options: ['había olvidado', 'olvidaré', 'olvidaba'], answer: 0, why: 'Un descubrimiento de algo que ocurrió antes.' },
            { who: 'Sara', text: 'No me lo puedo creer. ¿Y Laura?' },
            { who: 'Daniel', text: 'Me llamó por la noche. Estaba triste porque yo le ___ que iría.', options: ['había prometido', 'prometería', 'prometo'], answer: 0, why: 'La promesa es anterior a la tristeza de esa noche.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Cuando llegó la policía, el ladrón ya escapó.', ok: false, options: ['Cuando llegó la policía, el ladrón ya había escapado.', 'Cuando llegó la policía, el ladrón ya escapaba.', 'Cuando llegó la policía, el ladrón ya ha escapado.'], answer: 0, why: 'Con «ya», la huida es anterior a la llegada: pluscuamperfecto.' },
            { sentence: 'No pude entrar porque había olvidado las llaves.', ok: true, why: 'Correcta: la causa es anterior al hecho pasado.' },
            { sentence: 'Mis padres habían vueltos de Italia el día anterior.', ok: false, options: ['Mis padres habían vuelto de Italia el día anterior.', 'Mis padres habían volvido de Italia el día anterior.', 'Mis padres habían vueltas de Italia el día anterior.'], answer: 0, why: 'El participio de «volver» es «vuelto» y no cambia con el sujeto.' },
            { sentence: 'Nunca había visto tanta gente en una plaza.', ok: true, why: 'Correcta: «nunca» + pluscuamperfecto con participio irregular «visto».' },
            { sentence: 'Supe que Marta había ya terminado la carrera.', ok: false, options: ['Supe que Marta ya había terminado la carrera.', 'Supe que Marta había terminada ya la carrera.', 'Supe que Marta ya ha terminado la carrera.'], answer: 0, why: '«Ya» va antes de «había»: no se separa el bloque.' },
            { sentence: 'Estábamos tristes porque nuestro equipo había perdido.', ok: true, why: 'Correcta: la derrota explica la tristeza y ocurrió antes.' },
          ] },
        ] },
        { title: 'Construye frases · Build sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Cuando', 'llegué', 'Ana', 'ya', 'había', 'salido'], accept: ['Cuando llegué Ana ya había salido', 'Ana ya había salido cuando llegué'], en: 'When I arrived, Ana had already left.' },
            { tiles: ['Estaba', 'cansado', 'porque', 'no', 'había', 'dormido'], accept: ['Estaba cansado porque no había dormido'], en: 'I was tired because I hadn’t slept.' },
            { tiles: ['Nunca', 'había', 'visto', 'el', 'mar'], accept: ['Nunca había visto el mar'], en: 'I had never seen the sea.' },
            { tiles: ['Vi', 'que', 'habían', 'cambiado', 'la', 'reserva'], accept: ['Vi que habían cambiado la reserva'], en: 'I saw that they had changed the booking.' },
          ] },
        ] },
        { title: 'Une las frases · Join the sentences', blocks: [
          { kind: 'rewrite', title: 'Escribe una sola frase con el pluscuamperfecto', items: [
            { prompt: 'Ana salió. Después llegué yo.', instruction: 'Empieza con «Cuando llegué…» y usa «ya».', accept: ['Cuando llegué, Ana ya había salido', 'Cuando llegué, ya había salido Ana'] },
            { prompt: 'Estaba cansado. La noche anterior no descansé.', instruction: 'Une con «porque».', accept: ['Estaba cansado porque la noche anterior no había descansado', 'Estaba cansado porque no había descansado la noche anterior'] },
            { prompt: 'El centro cambió el sistema. Después Elena lo descubrió.', instruction: 'Empieza con «Elena descubrió que…».', accept: ['Elena descubrió que el centro había cambiado el sistema'] },
            { prompt: 'La película empezó a las ocho. Nosotros llegamos a las ocho y cuarto.', instruction: 'Empieza con «Cuando llegamos…» y usa «ya».', accept: ['Cuando llegamos, la película ya había empezado', 'Cuando llegamos, ya había empezado la película'] },
            { prompt: 'Vi la nieve por primera vez en 2022.', instruction: 'Empieza con «Hasta 2022…» y usa «nunca».', accept: ['Hasta 2022 nunca había visto la nieve', 'Hasta 2022, nunca había visto la nieve', 'Hasta 2022 no había visto nunca la nieve'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La versión de recepción', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La versión de recepción · The reception’s version', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada «había / habíamos + participio» y dice qué pasó antes de qué.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad y leer la transcripción al final.' } },
          { kind: 'listen', title: 'La recepcionista del centro cultural', channel: 'NOTA DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/147.mp3',
            before: 'La recepcionista le deja una nota de voz a Elena después del taller. ¿Qué crees que le va a explicar?',
            gist: { prompt: '¿Para qué llama la recepcionista?', options: ['Para explicar qué pasó con la reserva y cómo lo solucionaron.', 'Para cancelar el próximo taller de Elena.', 'Para pedirle a Elena una nueva lista.'], answer: 0, why: '«Quería explicarte la situación del viernes» y cuenta cómo recuperaron la lista y la sala.', en: 'Why is the receptionist calling?' },
            details: [
              { prompt: '¿Qué no habían hecho en el centro cuando llegó Elena?', options: ['Revisar todos los mensajes anteriores.', 'Cambiar el sistema.', 'Preparar la sala.'], answer: 0, why: '«Ya habíamos cambiado el sistema, pero no habíamos revisado todos los mensajes anteriores».', en: 'What had the centre not done when Elena arrived?' },
              { prompt: '¿Cómo recuperaron la lista de participantes?', options: ['Un compañero la había guardado.', 'Elena la envió otra vez.', 'Estaba en el programa.'], answer: 0, why: '«Un compañero había guardado tu lista de participantes y pudimos recuperarla».', en: 'How did they get the list of participants back?' },
              { prompt: '¿Por qué quedó libre una sala?', options: ['Un grupo había cancelado su taller a primera hora.', 'El centro abrió una sala nueva.', 'Elena la había reservado.'], answer: 0, why: '«Un grupo había cancelado su taller a primera hora. Esa sala quedó libre».', en: 'Why was a room free?' },
              { prompt: '¿A quién habían avisado antes de la actividad?', options: ['Al equipo de limpieza.', 'A los participantes.', 'Al otro grupo.'], answer: 0, why: '«Antes de que empezara la actividad, ya habíamos avisado al equipo de limpieza».', en: 'Who had they told before the activity?' },
              { prompt: '¿Qué van a hacer en el futuro?', options: ['Enviar una confirmación clara después de cada reserva.', 'Volver al sistema antiguo.', 'Cerrar las reservas por correo.'], answer: 0, why: '«Para la próxima vez, enviaremos una confirmación clara después de cada reserva».', en: 'What are they going to do in future?' },
            ],
            transcript: 'Hola, Elena. Quería explicarte la situación del viernes. [[Cuando llegaste|blue]], [[ya|teal]] [[habíamos cambiado|orange]] el sistema, pero no [[habíamos revisado|orange]] todos los mensajes anteriores. Por eso tu reserva no aparecía. Un compañero [[había guardado|orange]] tu lista de participantes y pudimos recuperarla. Además, un grupo [[había cancelado|orange]] su taller a primera hora. Esa sala quedó libre y la preparamos para ti. [[Antes de que empezara la actividad|blue]], [[ya|teal]] [[habíamos avisado|orange]] al equipo de limpieza. Para la próxima vez, enviaremos una confirmación clara después de cada reserva. Gracias por mantener la calma y ayudarnos a ordenar la información.',
            reply: { teacher: 'El alumno responde a la recepcionista en voz alta, como si fuera Elena: agradece y cuenta qué había preparado ella antes de que llegaran los participantes.', self: 'Responde a la recepcionista como si fueras Elena: da las gracias y cuenta qué habías preparado antes de que llegaran los participantes.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo que había pasado antes', coach: 'Vuelve atrás en tu historia.',
      steps: [
        { title: 'Lo que había pasado antes · What had happened before', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y repregunta: «¿Y antes de eso, qué había pasado?». Comparte también tus historias.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta antes de decirla.' } },
          { kind: 'talk', cards: [
            { q: '¿Llegaste alguna vez a un lugar y encontraste algo muy diferente de lo que esperabas?', followUps: ['¿Qué había cambiado?', '¿Quién lo había cambiado?', '¿Cómo reaccionaste?'], phrases: ['Cuando llegué, [[ya|teal]] [[habían…|orange]]', 'Alguien [[había…|orange]]', 'No lo podía creer.'], hint: 'Primero di el momento de tu llegada (indefinido) y después lo que había pasado antes (pluscuamperfecto).', example: 'Cuando volví a mi barrio después de cinco años, habían cerrado la panadería de la esquina y habían abierto un gimnasio. Me puse un poco triste.', next: 'Ahora piensa en un problema que tuviste.' },
            { q: 'Cuéntame un problema en un viaje, en el trabajo o en una reunión. ¿Por qué pasó?', followUps: ['¿Qué habías preparado antes?', '¿Qué no habías comprobado?', '¿Cómo lo solucionaste?'], phrases: ['El problema fue que… [[había…|orange]]', 'Yo [[había reservado|orange]]…, pero…', 'No [[había comprobado|orange]]…'], hint: 'Explica la causa con «porque» + pluscuamperfecto.', example: 'En un viaje a Lima, el hotel no tenía mi reserva porque la agencia había puesto una fecha equivocada. Yo no había comprobado el correo.', next: 'Hablemos ahora de primeras veces.', teacher: 'Propón otra causa posible para que el alumno la acepte o la rechace con argumentos: «¿Y no habías confirmado por teléfono?».' },
            { q: '¿Qué cosa hiciste por primera vez el año pasado?', followUps: ['¿Nunca lo habías hecho antes?', '¿Por qué no lo habías hecho?', '¿Lo volverías a hacer?'], phrases: ['[[Nunca|teal]] [[había…|orange]] hasta…', 'Hasta ese día, no [[había…|orange]]', 'Fue la primera vez que…'], hint: '«Nunca había… hasta…» marca una experiencia nueva.', example: 'El año pasado hice una carrera de diez kilómetros. Nunca había corrido tanto hasta ese día. Al final, estaba feliz.', next: 'Ahora, una sorpresa.' },
            { q: '¿Te dieron alguna vez una sorpresa? ¿Qué habían preparado?', followUps: ['¿Quién lo había organizado?', '¿Sospechabas algo?', '¿Qué fue lo mejor?'], phrases: ['Mis amigos [[habían preparado|orange]]…', 'No me [[había dado cuenta|orange]] de nada.', 'Alguien les [[había dicho|orange]]…'], hint: 'Cuenta lo que descubriste y lo que otros habían hecho antes.', example: 'Para mis cuarenta años, mi pareja había invitado a mis amigos del colegio. No me había dado cuenta de nada. ¡Fue muy emocionante!', next: 'Y ahora, una noticia que te sorprendió.' },
            { q: '¿Recuerdas una noticia, personal o del mundo, que te sorprendió?', followUps: ['¿Cómo te enteraste?', '¿Qué había pasado exactamente?', '¿Qué pensaste en ese momento?'], phrases: ['Me enteré de que [[había…|orange]]', 'Leí que…', 'Me di cuenta de que…'], hint: '«Me enteré de que» o «supe que» + pluscuamperfecto.', example: 'Me enteré por una amiga de que mi profesor de la escuela había publicado una novela. Nunca lo había imaginado escritor.', next: 'Para terminar, una mirada hacia atrás.' },
            { q: '¿Qué sabías del español antes de empezar a estudiarlo? ¿Y qué no habías imaginado?', followUps: ['¿Habías viajado a algún país hispanohablante?', '¿Qué te había dicho la gente sobre el idioma?', '¿Qué te sorprendió al principio?'], phrases: ['Antes de empezar, ya [[había…|orange]]', 'No [[había imaginado|orange]] que…', 'Me [[habían dicho|orange]] que…'], hint: 'Tu punto de referencia es el día en que empezaste a estudiar.', example: 'Antes de empezar, ya había viajado a México dos veces. Me habían dicho que la gramática era difícil, pero no había imaginado que me iba a gustar tanto.', teacher: 'Cierra con una pregunta de reflexión: «¿En qué situaciones de tu vida vas a necesitar el pluscuamperfecto?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pregunta al profesor por una sorpresa o un problema y repregunta: «¿Y qué había pasado antes?».', self: 'Elige una de tus historias y cuéntala otra vez, ahora con una línea del tiempo en un papel: marca el momento de referencia y lo que había pasado antes.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un informe breve', coach: 'Cuenta el problema y sus causas anteriores.',
      steps: [
        { title: 'Un informe breve · A short report', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos la línea del tiempo del texto.', self: 'Escribe tu informe y toca «Revisar mi texto». Después comprueba: ¿el lector entiende qué pasó primero?' } },
          { kind: 'write', title: 'Un problema resuelto', situation: 'Tuviste un problema en el trabajo, en un viaje o en una actividad (una reserva, una entrega, una reunión) y al final se resolvió. Escribe un informe breve para tu equipo.', task: [
            'Marca el **momento** del problema: «El viernes, cuando llegué…».',
            'Explica **dos hechos anteriores** que lo causaron, con el pluscuamperfecto.',
            'Cuenta qué descubriste y cómo se solucionó.',
            'Propón algo para evitar el problema la próxima vez.',
          ], starters: ['El viernes, cuando llegué…', 'Vi que…', 'El problema fue que…', 'Por suerte, alguien había…', 'Cuando llegaron…, ya…', 'Propongo…'],
            words: ['ya', 'todavía no', 'nunca', 'porque', 'antes', 'me di cuenta de que', 'me enteré de que', 'por suerte', 'la próxima vez'],
            model: 'El viernes, cuando [[llegué|blue]] al centro cultural, mi reserva no aparecía en el programa. [[Había enviado|orange]] la solicitud dos semanas antes, pero luego supe que el centro [[había cambiado|orange]] el sistema y no [[había revisado|orange]] los mensajes anteriores. Por suerte, otro grupo [[había cancelado|orange]] su taller esa mañana y pudimos usar su sala. Además, un compañero de recepción [[había guardado|orange]] mi lista. Cuando llegaron los participantes, [[ya|teal]] [[había colocado|orange]] las sillas. Propongo pedir siempre una confirmación por escrito.',
            minWords: 70 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'orange', label: 'FORMA', formula: 'había / habías / había / habíamos / habíais / habían + participio', example: 'Elena había reservado la sala.', caption: 'El participio no cambia y no se separa de «había».', en: 'Form: imperfect of “haber” + participle. The participle never changes and is never separated from “había”.' },
            { tone: 'blue', label: 'ANTES DE OTRO MOMENTO', formula: 'cuando + indefinido, ya + pluscuamperfecto', example: 'Cuando llegamos, la película ya había empezado.', caption: 'Lo que pasó antes de un momento pasado.', en: 'What happened before a past moment.' },
            { tone: 'teal', label: 'CAUSA Y DESCUBRIMIENTO', formula: 'porque / supe que + pluscuamperfecto', example: 'Estaba cansado porque no había dormido.', caption: 'Explica o revela un hecho anterior.', en: 'It explains or reveals an earlier fact.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Una pregunta para elegir', text: 'Busca el **momento de referencia** en el pasado. ¿Lo que cuentas pasó **antes** de ese momento? Usa el pluscuamperfecto.', en: 'Find the reference point in the past. Did what you are telling happen before that moment? Then use the pluperfect.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Cuando entré en la cocina, alguien ya ___ los platos.', options: ['lavó', 'había lavado', 'lavaría'], answer: 1, why: 'Lavaron los platos antes de que yo entrara.' },
            { prompt: 'Estaba nerviosa porque nunca ___ en público.', options: ['había hablado', 'hablará', 'hable'], answer: 0, why: '«Nunca» + pluscuamperfecto explica la causa anterior.' },
            { prompt: 'Al llegar al hotel, vimos que nos ___ una habitación mejor.', options: ['habían dado', 'dan', 'darían'], answer: 0, why: 'Nos dieron la habitación antes de nuestro descubrimiento.' },
            { prompt: 'Ellos ya ___ la noticia cuando los llamé.', options: ['habían oídos', 'habían oído', 'han oído'], answer: 1, why: 'Participio invariable: «oído». Es anterior a mi llamada.' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Cuando llegué, cenaron», «cenaban» y «habían cenado»: ¿qué cambia? Después, dos hechos seguidos; en medio de la cena; la cena ya había terminado.' },
        ] },
      ],
    },
  ],
};
