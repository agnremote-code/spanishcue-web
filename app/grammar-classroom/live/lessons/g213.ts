import type { LiveLesson } from '../types';

/**
 * Lesson 213 · A2 · Antes de, después de y cuando.
 * Silvia, a translator who works from home, organizes her day: her routine runs through the class.
 */
export const lesson: LiveLesson = {
  id: 213,
  level: 'A2',
  title: 'Antes de, después de y cuando',
  subtitle: 'Ordenar las acciones de tu rutina y decir qué haces habitualmente en cada situación.',
  legend: [
    { tone: 'blue', label: 'Antes de + infinitivo · primero la otra acción' },
    { tone: 'teal', label: 'Después de + infinitivo · esta acción va primero' },
    { tone: 'orange', label: 'Cuando + presente · cada vez que pasa algo' },
  ],
  optionNotes: {
    'antes de': '«Antes de» marca la acción que pasa **después**: «Antes de salir, desayuno» (primero desayuno).',
    'Antes de': '«Antes de» marca la acción que pasa **después**: «Antes de salir, desayuno» (primero desayuno).',
    'después de': '«Después de» marca la acción que pasa **primero**: «Después de comer, camino» (primero como).',
    'Después de': '«Después de» marca la acción que pasa **primero**: «Después de comer, camino» (primero como).',
    cuando: '«Cuando» + presente presenta una situación que se repite y lo que haces cada vez.',
    Cuando: '«Cuando» + presente presenta una situación que se repite y lo que haces cada vez.',
    antes: 'Falta «de»: delante de un verbo se dice «antes **de** + infinitivo».',
    después: 'Falta «de»: delante de un verbo se dice «después **de** + infinitivo».',
    salgo: 'Después de «antes de» va el infinitivo: «salir».',
    como: 'Después de «después de» va el infinitivo: «comer».',
    comiendo: 'En español, después de una preposición va el infinitivo, no el gerundio: «antes de comer».',
    llegar: 'Después de «cuando» va un verbo conjugado: «cuando llego».',
    llegaré: 'Para una costumbre, «cuando» va con presente: «cuando llego».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Ordenar acciones', coach: '¿Qué pasa primero? ¿Qué pasa después?',
      steps: [
        { title: 'Antes de + infinitivo', blocks: [
          { kind: 'lead', text: 'Silvia es traductora y trabaja en casa. Para no perder tiempo, sigue un orden: «**Antes de** abrir el correo, reviso mi lista. **Después de** preparar un café, empiezo a trabajar. **Cuando** recibo una pregunta, la guardo para más tarde».', en: 'Before, after and when: three ways to order a routine.' },
          { kind: 'guide', text: { teacher: 'Lee cada ejemplo y pregunta: «¿Qué hace primero?». El alumno responde con «Primero…, después…».', self: 'Lee cada ejemplo y piensa: ¿qué acción pasa primero?' } },
          { kind: 'concept', tone: 'blue', label: 'ANTES DE', question: '¿Qué haces primero?', en: 'before + -ing', formula: ['antes de + infinitivo, acción en presente', 'acción en presente + antes de + infinitivo'],
            meaning: 'La acción que va con «antes de» pasa **en segundo lugar**. La otra acción pasa primero. Después de «de» va el **infinitivo**.',
            examples: [
              { es: '[[Antes de abrir|blue]] el correo, reviso la lista de tareas.', en: 'Before opening my email, I check my to-do list.' },
              { es: '[[Antes de salir|blue]], desayuno.', en: 'Before leaving, I have breakfast.' },
              { es: 'Me lavo los dientes [[antes de dormir|blue]].', en: 'I brush my teeth before going to sleep.' },
              { es: '[[Antes de comer|blue]], compruebo qué terminé.', en: 'Before lunch, I check what I have finished.' },
            ],
            note: 'Orden real: «[[Antes de salir|blue]], desayuno» = primero **desayuno**, después **salgo**.' },
          { kind: 'tip', icon: '!', title: 'Infinitivo, no gerundio', text: 'En inglés decimos «before leav**ing**». En español, después de «antes de» va siempre el **infinitivo**: «antes de **salir**», nunca «antes de saliendo».', en: 'before leaving = antes de salir' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Antes de salir, cierro las ventanas.» ¿Qué hago primero?', options: ['Salgo.', 'Cierro las ventanas.'], answer: 1, why: 'La acción con «antes de» (salir) pasa en segundo lugar.' },
            { prompt: 'Antes de ___, leo un poco.', options: ['dormir', 'duermo', 'durmiendo'], answer: 0, why: 'Después de «antes de» va el infinitivo.' },
          ] },
        ] },
        { title: 'Después de + infinitivo', mascot: '/brand/mascot/studying.webp', coach: 'Primero termina una acción. Luego viene la otra.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DESPUÉS DE', question: '¿Qué haces luego?', en: 'after + -ing', formula: ['después de + infinitivo, acción en presente', 'acción en presente + después de + infinitivo'],
            meaning: 'La acción con «después de» pasa **primero** y termina. Luego viene la otra acción. Después de «de» también va el **infinitivo**.',
            examples: [
              { es: '[[Después de preparar|teal]] un café, empiezo con el documento urgente.', en: 'After making a coffee, I start with the urgent document.' },
              { es: '[[Después de comer|teal]], camino un poco.', en: 'After lunch, I go for a short walk.' },
              { es: 'Respondo los mensajes [[después de comer|teal]].', en: 'I answer messages after lunch.' },
              { es: '[[Después de trabajar|teal]], voy al gimnasio.', en: 'After work, I go to the gym.' },
            ] },
          { kind: 'compare', title: 'Las mismas dos acciones', columns: [
            { tone: 'blue', label: 'ANTES DE', sentence: '[[Antes de ducharme|blue]], corro.', idea: 'Primero corro, después me ducho.', en: 'before' },
            { tone: 'teal', label: 'DESPUÉS DE', sentence: '[[Después de correr|teal]], me ducho.', idea: 'Mismo orden: primero corro, después me ducho.', en: 'after' },
          ] },
          { kind: 'tip', icon: '🔗', title: 'También con un nombre', text: 'Puedes usar un nombre en lugar del verbo: «antes de **la clase**», «después de **la comida**». Con un verbo, siempre infinitivo: «después de **comer**».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Después de cenar, veo una serie.» ¿Qué hago primero?', options: ['Ceno.', 'Veo una serie.'], answer: 0, why: 'La acción con «después de» (cenar) pasa primero.' },
            { prompt: 'Primero hago la compra. Luego cocino. → ___ hacer la compra, cocino.', options: ['Antes de', 'Después de', 'Cuando'], answer: 1, why: 'Hacer la compra pasa primero: «después de hacer la compra».' },
          ] },
        ] },
        { title: 'Cuando + presente', mascot: '/brand/mascot/speaking.webp', coach: 'Cada vez que pasa algo, haces algo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CUANDO', question: '¿Qué haces cada vez que pasa algo?', en: 'when / whenever', formula: ['cuando + presente, presente', 'presente + cuando + presente'],
            meaning: '«Cuando» une **dos hechos habituales**: cada vez que pasa una cosa, pasa la otra. En esta clase, los dos verbos van en **presente**.',
            examples: [
              { es: '[[Cuando recibe|orange]] una pregunta, Silvia la guarda en una carpeta.', en: 'When she gets a question, Silvia saves it in a folder.' },
              { es: '[[Cuando llego|orange]] a casa, reviso el correo.', en: 'When I get home, I check my email.' },
              { es: '[[Cuando tengo|orange]] muchas tareas, hago una pausa corta.', en: 'When I have lots of tasks, I take a short break.' },
              { es: 'Llamo a mi madre [[cuando tengo|orange]] tiempo.', en: 'I call my mum when I have time.' },
            ],
            note: 'Después de «cuando» va un verbo **conjugado** (llego, tengo), no un infinitivo.' },
          { kind: 'tip', icon: '⚑', title: 'La coma', text: 'Si la frase empieza con **antes de**, **después de** o **cuando**, pon una coma después de esa parte: «Cuando llego a casa**,** ceno».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Cuando ___ frío, tomo un té.', options: ['hacer', 'hace', 'haciendo'], answer: 1, why: 'Después de «cuando» va un verbo conjugado: «hace».' },
            { prompt: '___ tengo un examen, estudio en la biblioteca.', options: ['Antes de', 'Cuando', 'Después de'], answer: 1, why: '«Tengo» está conjugado y es una situación que se repite: «cuando».' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Mira el verbo que viene después.', blocks: [
          { kind: 'table', title: 'Tres formas de ordenar', head: ['Palabra', 'Después va…', 'Qué pasa primero', 'Ejemplo'], rows: [
            ['[[antes de|blue]]', 'infinitivo', 'la **otra** acción', '[[Antes de salir|blue]], desayuno.'],
            ['[[después de|teal]]', 'infinitivo', 'esta acción', '[[Después de comer|teal]], camino.'],
            ['[[cuando|orange]]', 'presente (conjugado)', 'las dos se repiten juntas', '[[Cuando llego|orange]], reviso el correo.'],
          ], note: 'Con «antes de» y «después de», normalmente la persona de las dos acciones es la misma: «Antes de salir, (yo) desayuno».' },
          { kind: 'decide', title: 'Piensa en dos acciones de tu día', steps: [
            { q: '¿Hablas de una situación que se repite y de lo que haces cada vez?', yes: 'Usa **cuando + presente**: «[[Cuando recibo|orange]] un mensaje, respondo después».', no: 'next' },
            { q: '¿Quieres empezar con la acción que pasa primero?', yes: 'Usa **después de + infinitivo**: «[[Después de comer|teal]], camino».', no: 'Usa **antes de + infinitivo**: «[[Antes de caminar|blue]], como».' },
          ] },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Antes de salgo, desayuno.', right: 'Antes de salir, desayuno.', why: 'Después de «antes de» va el infinitivo.' },
            { wrong: 'Después comer, camino un poco.', right: 'Después de comer, camino un poco.', why: 'Delante de un verbo falta «de»: «después de + infinitivo».' },
            { wrong: 'Antes de comiendo, me lavo las manos.', right: 'Antes de comer, me lavo las manos.', why: 'No es como en inglés (-ing): en español va el infinitivo.' },
            { wrong: 'Cuando llegar a casa, ceno.', right: 'Cuando llego a casa, ceno.', why: 'Después de «cuando» va un verbo conjugado.' },
            { wrong: 'Cuando llegaré a casa, siempre ceno.', right: 'Cuando llego a casa, siempre ceno.', why: 'Para una costumbre, «cuando» va con presente.' },
            { wrong: 'Antes de salir, desayuno. (= primero salgo)', right: 'Después de salir, desayuno. (= primero salgo)', why: 'Si sales primero, la acción de salir va con «después de».' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres acciones de su mañana y que las una de tres formas distintas. Pregunta siempre: «¿Qué haces primero?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las palabras en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'El método de Silvia', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica qué acción pasa primero.', self: 'Lee la conversación. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Un café entre colegas', setting: 'Silvia toma un café con Raúl, un amigo que también trabaja en casa y nunca termina a tiempo.', lines: [
            { who: 'Raúl', text: 'Silvia, ¿cómo organizas tu día? Yo nunca termino a tiempo.' },
            { who: 'Silvia', text: 'Tengo un orden fijo. [[Antes de abrir|blue]] el correo, reviso mi lista de tareas.' },
            { who: 'Raúl', text: '¿Y no lees los mensajes primero?' },
            { who: 'Silvia', text: 'No. [[Después de preparar|teal]] un café, empiezo con el documento más urgente.' },
            { who: 'Raúl', text: '¿Y [[cuando recibes|orange]] una pregunta de un cliente?' },
            { who: 'Silvia', text: 'La guardo en una carpeta y respondo más tarde. Así no cambio de actividad cada cinco minutos.' },
            { who: 'Raúl', text: '¿A qué hora respondes, entonces?' },
            { who: 'Silvia', text: '[[Después de comer|teal]]. Respondo todos los mensajes juntos.' },
            { who: 'Raúl', text: 'Yo miro el teléfono todo el tiempo…' },
            { who: 'Silvia', text: 'Yo también, a veces. [[Cuando tengo|orange]] muchas tareas, hago una pausa corta y vuelvo a mirar la lista.' },
            { who: 'Raúl', text: '¿Y al final del día?' },
            { who: 'Silvia', text: '[[Antes de terminar|blue]], preparo la lista del día siguiente.' },
          ], notes: {
            'Antes de abrir': 'Primero revisa la lista; **después** abre el correo. «Antes de» + infinitivo (abrir).',
            'Después de preparar': 'Primero prepara el café; **luego** empieza a trabajar.',
            'cuando recibes': 'Raúl pregunta por una situación **que se repite**: cada vez que llega una pregunta.',
            'Después de comer': 'Primero come; después responde los mensajes. Aquí la frase es corta porque responde a una pregunta.',
            'Cuando tengo': 'Una situación habitual (tener muchas tareas) y lo que hace cada vez: presente + presente.',
            'Antes de terminar': 'Primero prepara la lista; después termina el día de trabajo.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué hace Silvia antes de abrir el correo?', options: ['Prepara un café.', 'Revisa la lista de tareas.', 'Responde a los clientes.'], answer: 1, why: '«Antes de abrir el correo, reviso mi lista de tareas».' },
            { prompt: '¿Cuándo responde los mensajes?', options: ['En cuanto llegan.', 'Antes de comer.', 'Después de comer.'], answer: 2, why: '«Después de comer. Respondo todos los mensajes juntos».' },
            { prompt: '¿Qué hace cuando tiene muchas tareas?', options: ['Hace una pausa corta.', 'Trabaja hasta tarde.', 'Llama a Raúl.'], answer: 0, why: '«Cuando tengo muchas tareas, hago una pausa corta».' },
          ] },
        ] },
        { title: '¿Qué pasa primero?', blocks: [
          { kind: 'classify', title: 'En cada frase, ¿qué acción pasa primero?', categories: [
            { id: 'a', label: 'Primero pasa (1)', tone: 'teal' },
            { id: 'b', label: 'Primero pasa (2)', tone: 'blue' },
          ], items: [
            { text: 'Antes de abrir el correo (1), reviso la lista (2).', answer: 'b', why: 'Primero revisa la lista (2). «Antes de» marca lo que pasa después.' },
            { text: 'Después de preparar un café (1), empiezo a trabajar (2).', answer: 'a', why: 'Primero prepara el café (1).' },
            { text: 'Después de comer (1), respondo los mensajes (2).', answer: 'a', why: 'Primero come (1).' },
            { text: 'Antes de terminar (1), preparo la lista del día siguiente (2).', answer: 'b', why: 'Primero prepara la lista (2).' },
            { text: 'Me ducho (1) después de correr (2).', answer: 'b', why: 'Primero corre (2): la acción con «después de» va primero.' },
            { text: 'Desayuno (1) antes de salir (2).', answer: 'a', why: 'Primero desayuna (1).' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Primero me pongo la crema. Luego tomo el sol.', prompt: '___ tomar el sol, me pongo crema.', options: ['Antes de', 'Después de', 'Cuando'], answer: 0, why: 'Tomar el sol pasa en segundo lugar: «antes de».' },
            { context: 'Primero termino la clase. Luego tomo un café.', prompt: '___ la clase, tomo un café.', options: ['Antes de', 'Después de', 'Cuando'], answer: 1, why: 'La clase va primero: «después de».' },
            { context: 'Pasa todos los días: llueve y Ana lleva paraguas.', prompt: '___ llueve, Ana lleva paraguas.', options: ['Antes de', 'Después de', 'Cuando'], answer: 2, why: '«Llueve» está conjugado y es una situación que se repite.' },
            { context: 'Tu rutina de la noche.', prompt: 'Siempre leo un poco antes de ___.', options: ['dormir', 'duermo', 'durmiendo'], answer: 0, why: 'Después de «antes de» va el infinitivo.' },
            { context: 'Tu costumbre los lunes.', prompt: 'Cuando ___ a la oficina, saludo a todos.', options: ['llegar', 'llego', 'llegaré'], answer: 1, why: 'Costumbre: «cuando» + presente.' },
            { context: 'Un consejo en el gimnasio.', prompt: 'Bebe agua después ___ entrenar.', options: ['de', 'que', 'a'], answer: 0, why: '«Después de» + infinitivo: falta «de».' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que **primero leo** y **después duermo**?', options: ['Antes de leer, duermo.', 'Antes de dormir, leo.'], answer: 1, why: '«Antes de dormir, leo»: dormir pasa en segundo lugar.' },
            { prompt: '«Después de comer, camino.» = …', options: ['Camino antes de comer.', 'Como antes de caminar.', 'Camino cuando como.'], answer: 1, why: 'Primero como y después camino: «como antes de caminar».' },
            { prompt: '«Cuando estoy cansado, tomo un café.» ¿Qué significa?', options: ['Tomé un café una vez.', 'Cada vez que estoy cansado, tomo un café.', 'Primero tomo un café y después estoy cansado.'], answer: 1, why: '«Cuando» + presente: una costumbre que se repite.' },
            { prompt: '¿Qué frase tiene **un orden diferente** a las otras?', options: ['Antes de salir, cierro la puerta.', 'Cierro la puerta antes de salir.', 'Después de salir, cierro la puerta.'], answer: 2, why: 'En las dos primeras, primero cierro; en la tercera, primero salgo.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Una entrevista para una revista', lines: [
            { who: 'Periodista', text: '¿Cómo empieza su día de trabajo?' },
            { who: 'Silvia', text: '___ abrir el correo, reviso mi lista de tareas.', options: ['Después de', 'Antes de', 'Cuando'], answer: 1, why: 'Primero la lista; después el correo.' },
            { who: 'Periodista', text: '¿Y qué hace cuando un cliente escribe con urgencia?' },
            { who: 'Silvia', text: 'Cuando un mensaje ___ urgente, respondo enseguida.', options: ['ser', 'es', 'siendo'], answer: 1, why: '«Cuando» + verbo conjugado en presente.' },
            { who: 'Periodista', text: '¿Hace pausas?' },
            { who: 'Silvia', text: 'Sí. Después de ___, camino diez minutos.', options: ['como', 'comer', 'comiendo'], answer: 1, why: '«Después de» + infinitivo.' },
            { who: 'Periodista', text: '¿Y al final del día?' },
            { who: 'Silvia', text: '___ terminar el día, preparo la lista para mañana.', options: ['Antes de', 'Después de', 'Cuando'], answer: 0, why: 'Primero prepara la lista; después termina el día de trabajo.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Antes de salgo de casa, apago las luces.', ok: false, options: ['Antes de salir de casa, apago las luces.', 'Antes salir de casa, apago las luces.', 'Antes de saliendo de casa, apago las luces.'], answer: 0, why: '«Antes de» + infinitivo.' },
            { sentence: 'Después de cenar, veo una serie.', ok: true, why: 'Correcta: «después de» + infinitivo.' },
            { sentence: 'Cuando tener tiempo, leo novelas.', ok: false, options: ['Cuando de tener tiempo, leo novelas.', 'Cuando tengo tiempo, leo novelas.', 'Cuando teniendo tiempo, leo novelas.'], answer: 1, why: '«Cuando» + verbo conjugado.' },
            { sentence: 'Después trabajar, voy al gimnasio.', ok: false, options: ['Después que trabajar, voy al gimnasio.', 'Después trabajo, voy al gimnasio.', 'Después de trabajar, voy al gimnasio.'], answer: 2, why: 'Falta «de»: «después de + infinitivo».' },
            { sentence: 'Me lavo las manos antes de cocinar.', ok: true, why: 'Correcta: primero me lavo las manos, después cocino.' },
            { sentence: 'Antes de comiendo, pongo la mesa.', ok: false, options: ['Antes de comer, pongo la mesa.', 'Antes de como, pongo la mesa.', 'Antes comiendo, pongo la mesa.'], answer: 0, why: 'Nunca gerundio después de «antes de»: infinitivo.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Antes de', 'reviso', 'abrir el correo,', 'la lista'], accept: ['Antes de abrir el correo, reviso la lista'], en: 'Before opening my email, I check the list.' },
            { tiles: ['camino', 'Después de', 'comer,', 'un poco'], accept: ['Después de comer, camino un poco'], en: 'After lunch, I walk a little.' },
            { tiles: ['Cuando', 'llego a casa,', 'una ducha', 'me doy'], accept: ['Cuando llego a casa, me doy una ducha'], en: 'When I get home, I have a shower.' },
          ] },
          { kind: 'rewrite', title: 'Escribe la misma idea de otra forma', items: [
            { prompt: 'Primero desayuno. Después salgo.', instruction: 'Usa «Antes de…».', accept: ['Antes de salir, desayuno', 'Antes de salir desayuno', 'Desayuno antes de salir'] },
            { prompt: 'Primero termino el trabajo. Después voy al gimnasio.', instruction: 'Usa «Después de…».', accept: ['Después de terminar el trabajo, voy al gimnasio', 'Después de terminar el trabajo voy al gimnasio', 'Voy al gimnasio después de terminar el trabajo'] },
            { prompt: 'Cada vez que llueve, me quedo en casa.', instruction: 'Usa «Cuando…».', accept: ['Cuando llueve, me quedo en casa', 'Cuando llueve me quedo en casa', 'Me quedo en casa cuando llueve'] },
            { prompt: 'Antes de comer, me lavo las manos.', instruction: 'Usa «Después de…» con el mismo orden real.', accept: ['Después de lavarme las manos, como', 'Después de lavarme las manos como', 'Como después de lavarme las manos'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un consejo sobre el orden', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un consejo sobre el orden', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota las acciones en orden (1, 2, 3…) antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota el orden de las acciones. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Raúl prueba el método', channel: 'NOTA DE VOZ · PARA SILVIA', src: '/audio/grammar-classroom/213.mp3',
            before: 'Raúl probó el método de Silvia y le deja una nota de voz. ¿Crees que funciona? ¿Qué problema puede tener todavía?',
            gist: { prompt: '¿De qué habla Raúl?', options: ['De cómo organiza su día con el método de Silvia.', 'De un viaje de trabajo.', 'De un problema con un cliente.'], answer: 0, why: '«Probé tu forma de organizar el día… Me ayuda bastante».' },
            details: [
              { prompt: '¿Qué hace antes de empezar?', options: ['Abre el correo.', 'Prepara una lista corta.', 'Toma un café.'], answer: 1, why: '«Antes de empezar, preparo una lista corta».' },
              { prompt: '¿Cuándo abre el correo?', options: ['Después de revisar el documento principal.', 'Antes de empezar.', 'Después de comer.'], answer: 0, why: '«Después de revisar el documento principal, abro el correo».' },
              { prompt: '¿Qué hace cuando recibe muchos mensajes?', options: ['Los responde todos enseguida.', 'Elige los más urgentes.', 'Apaga el teléfono.'], answer: 1, why: '«Cuando recibo muchos mensajes, elijo los más urgentes».' },
              { prompt: '¿Cuál es su problema?', options: ['Mira el teléfono antes de terminar una tarea.', 'No tiene tiempo para comer.', 'Olvida la lista.'], answer: 0, why: '«A veces miro el teléfono antes de terminar una tarea».' },
              { prompt: '¿Qué quiere hacer con el teléfono?', options: ['Apagarlo.', 'Dejarlo en otra mesa.', 'Darlo a Silvia.'], answer: 1, why: '«Quiero dejarlo en otra mesa».' },
            ],
            transcript: 'Hola, Silvia. Probé tu forma de organizar el día. [[Antes de empezar|blue]], preparo una lista corta. [[Después de revisar|teal]] el documento principal, abro el correo. [[Cuando recibo|orange]] muchos mensajes, elijo los más urgentes y respondo [[después de comer|teal]]. Me ayuda bastante. El problema es que a veces miro el teléfono [[antes de terminar|blue]] una tarea. Quiero dejarlo en otra mesa. ¿Tú haces una pausa [[cuando acabas|orange]] un documento o sigues directamente con el siguiente?',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Silvia: ¿hace una pausa cuando acaba un documento? Debe usar «cuando» y «después de».', self: 'Responde a Raúl como si fueras Silvia: ¿haces una pausa cuando acabas un documento? Usa «cuando» y «después de».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu día, paso a paso', coach: 'Cuenta tu rutina en orden.',
      steps: [
        { title: 'Tu día, paso a paso', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar. Si el orden no está claro, pregunta: «¿Qué haces primero?».', self: 'Responde cada pregunta en voz alta, con frases completas. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces por la mañana antes de salir de casa?', followUps: ['¿Desayunas antes o después de ducharte?', '¿Miras el teléfono antes de levantarte?'], phrases: ['[[Antes de salir|blue]], …', 'Primero…, después…', '[[Después de ducharme|teal]], …'], hint: 'Ordena tres acciones. Usa «antes de» o «después de» + infinitivo.', example: 'Antes de salir, desayuno y preparo la mochila. Después de ducharme, miro el teléfono un momento.', next: 'Ahora pensemos en tu trabajo o tus estudios.', teacher: 'Si el alumno conjuga después de «antes de», repite su frase con el infinitivo, sin explicar.' },
            { q: '¿Cómo empiezas tu trabajo o tus estudios cada día?', followUps: ['¿Qué haces primero?', '¿Abres el correo enseguida?'], phrases: ['[[Antes de abrir|blue]] el correo, …', '[[Cuando llego|orange]], …', 'Empiezo con…'], hint: 'Puedes usar «cuando llego…» para describir tu costumbre.', example: 'Cuando llego a la oficina, preparo un café. Antes de abrir el correo, miro mi agenda.', next: 'Hablemos de interrupciones.' },
            { q: '¿Qué haces cuando recibes muchos mensajes o llamadas?', followUps: ['¿Respondes enseguida o después?', '¿Qué haces con el teléfono cuando estudias?'], phrases: ['[[Cuando recibo|orange]] muchos mensajes, …', 'Respondo [[después de|teal]]…', 'Apago el teléfono [[cuando|orange]]…'], hint: '«Cuando» + presente, presente: cada vez que pasa, haces algo.', example: 'Cuando recibo muchos mensajes, respondo solo los urgentes. Respondo los otros después de comer.', next: 'Ahora, las pausas.' },
            { q: '¿Qué haces después de comer o en tus pausas?', followUps: ['¿Cuánto tiempo descansas?', '¿Qué haces cuando estás muy cansado o cansada?'], phrases: ['[[Después de comer|teal]], …', '[[Cuando estoy|orange]] cansado, …', 'A veces…'], hint: 'Describe una costumbre real, aunque sea pequeña.', example: 'Después de comer, camino diez minutos. Cuando estoy muy cansada, tomo un té y escucho música.', next: 'Hablemos de la noche.' },
            { q: '¿Qué haces antes de dormir?', followUps: ['¿Usas el teléfono antes de dormir?', '¿Qué haces cuando no puedes dormir?'], phrases: ['[[Antes de dormir|blue]], …', '[[Cuando no puedo|orange]] dormir, …', 'Siempre / Nunca…'], hint: 'Fíjate: «antes de dormir» (infinitivo) y «cuando no puedo» (conjugado).', example: 'Antes de dormir, leo un poco. Cuando no puedo dormir, escucho un pódcast tranquilo.', next: 'Para terminar, un consejo para un amigo.' },
            { q: 'Un amigo nunca termina sus tareas a tiempo. ¿Qué rutina le recomiendas?', followUps: ['¿Qué debe hacer primero?', '¿Qué hace cuando se distrae?'], phrases: ['[[Antes de empezar|blue]], …', '[[Después de terminar|teal]] una tarea, …', '[[Cuando|orange]] te distraes, …'], hint: 'Da tres pasos en orden. Puedes usar «tú»: «Antes de empezar, preparas una lista».', example: 'Antes de empezar, preparas una lista. Después de terminar una tarea, haces una pausa. Cuando te distraes, dejas el teléfono en otra mesa.', teacher: 'El alumno puede usar presente con valor de consejo («preparas una lista»). No hace falta introducir el imperativo.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno pregunta al profesor qué hace antes de las clases y cuando un alumno llega tarde.', self: 'Escribe dos preguntas, una con «¿Qué haces antes de…?» y otra con «¿Qué haces cuando…?», y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu rutina para una tarea importante', coach: 'Escribe tu orden real.',
      steps: [
        { title: 'Tu rutina para una tarea importante', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después corrijan juntos lo que la revisión no ve.', self: 'Escribe tu texto y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Cómo preparo…', situation: 'Una revista pide a sus lectores un texto breve: «Cómo preparo una reunión, un examen o un viaje». Explica tu orden real.', task: [
            'Elige una tarea importante: una reunión, un examen, un viaje…',
            'Usa **antes de** y **después de** + infinitivo al menos dos veces.',
            'Explica qué haces **cuando** pasa algo habitual (un problema, una duda, un mensaje).',
            'Termina con tu consejo principal.',
          ], starters: ['Antes de preparar…, …', 'Primero…', 'Después de…, …', 'Cuando…, …', 'Mi consejo es…'],
            words: ['primero', 'luego', 'al final', 'reviso', 'compruebo', 'preparo', 'una lista', 'una pausa', 'el correo', 'los documentos'],
            model: '[[Antes de preparar|blue]] una reunión, reviso la lista de participantes. [[Después de elegir|teal]] la hora, envío un mensaje al grupo. [[Cuando alguien tiene|orange]] una pregunta, respondo por correo. [[Antes de empezar|blue]], compruebo el sonido y abro los documentos. [[Después de terminar|teal]], guardo las notas y preparo una lista de tareas para el equipo.',
            minWords: 40 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'ANTES DE', formula: 'antes de + infinitivo', example: 'Antes de salir, desayuno.', caption: 'Primero la otra acción.', en: 'before' },
            { tone: 'teal', label: 'DESPUÉS DE', formula: 'después de + infinitivo', example: 'Después de comer, camino.', caption: 'Esta acción va primero.', en: 'after' },
            { tone: 'orange', label: 'CUANDO', formula: 'cuando + presente, presente', example: 'Cuando llego, reviso el correo.', caption: 'Cada vez que pasa.', en: 'when / whenever' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Mira el verbo', text: 'Con **antes de** y **después de**: infinitivo (salir, comer). Con **cuando**: verbo conjugado (llego, tengo). Y pregúntate siempre: ¿qué pasa primero?' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Primero estudio, después veo la tele. → Veo la tele después de ___.', options: ['estudio', 'estudiar', 'estudiando'], answer: 1, why: '«Después de» + infinitivo.' },
            { prompt: '___ hace calor, voy a la playa.', options: ['Antes de', 'Cuando', 'Después de'], answer: 1, why: 'Una costumbre con verbo conjugado (hace).' },
            { prompt: '«Antes de cocinar, me lavo las manos.» ¿Qué pasa primero?', options: ['Cocino.', 'Me lavo las manos.'], answer: 1, why: 'La acción con «antes de» pasa en segundo lugar.' },
            { prompt: 'Siempre llamo a mi madre después ___ llegar a casa.', options: ['que', 'de', 'cuando'], answer: 1, why: '«Después de» + infinitivo.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Antes de salir, desayuno» y «Después de salir, desayuno»: ¿qué cambia? El orden real de las dos acciones.' },
        ] },
      ],
    },
  ],
};
