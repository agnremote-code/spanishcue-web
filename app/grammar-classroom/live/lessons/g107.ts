import type { LiveLesson } from '../types';

/**
 * Lesson 107 · A1 · Modo y tiempo verbal.
 * Core: find the conjugated verb, read its person from the ending, read the
 * time from the context (now / routine). Requests (imperative) and wishes
 * (subjunctive) are only recognised, never produced.
 * The class group (Ana, Luis, Marta and their teacher) runs through every section.
 */
export const lesson: LiveLesson = {
  id: 107,
  level: 'A1',
  title: 'Modo y tiempo verbal',
  subtitle: 'Mirar un verbo y saber quién hace la acción, cuándo la hace y si la frase informa, pide o desea algo.',
  legend: [
    { tone: 'blue', label: 'Persona · la terminación del verbo' },
    { tone: 'teal', label: 'Tiempo · ahora, hoy, cada día' },
    { tone: 'orange', label: 'Pedir · una petición (solo reconocer)' },
    { tone: 'violet', label: 'Desear · una esperanza (solo reconocer)' },
  ],
  optionNotes: {
    Yo: '«Yo» va con la terminación **-o**: estudio, leo, escribo.',
    Tú: '«Tú» va con la terminación **-as** o **-es**: estudias, lees, escribes.',
    Nosotros: '«Nosotros» va con la terminación **-amos, -emos, -imos**: estudiamos, leemos, escribimos.',
    Ellos: '«Ellos» va con la terminación **-an** o **-en**: estudian, leen, escriben.',
    'Una orden': 'Una petición o una orden pide algo a otra persona: «Abre el libro». Esta frase no pide nada.',
    'Un pasado terminado': 'Esta forma es de presente. El pasado tiene otras formas que vas a aprender más adelante.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Leer un verbo', coach: 'Un verbo dice mucho: quién, cuándo y para qué.',
      steps: [
        { title: 'El verbo conjugado', blocks: [
          { kind: 'lead', text: 'El profesor recibe un mensaje de Ana: «**Estudio** español ahora». Con una sola palabra, «estudio», ya sabemos **quién** estudia.', en: 'One verb form tells you who does the action.' },
          { kind: 'guide', text: { teacher: 'Escribe «estudiar» y «estudio». Pregunta: «¿Cuál dice quién hace la acción?». Después muestra el concepto.', self: 'Compara «estudiar» y «estudio». ¿Cuál dice quién hace la acción?' } },
          { kind: 'concept', tone: 'blue', label: 'INFINITIVO → FORMA CONJUGADA', question: '¿Quién hace la acción?', en: 'to study → I study', formula: ['estudi**ar** → estudi**o**', 'raíz + terminación'],
            meaning: 'El **infinitivo** (estudiar, leer, escribir) es el nombre del verbo: no dice quién. La **forma conjugada** cambia la terminación y dice **la persona**.',
            examples: [
              { es: 'estudiar → Yo [[estudio|blue]] español.', en: 'I study Spanish.' },
              { es: 'trabajar → Nosotros [[trabajamos|blue]] por la mañana.', en: 'We work in the morning.' },
              { es: 'leer → Ana [[lee|blue]] el mensaje.', en: 'Ana reads the message.' },
              { es: 'escribir → Tú [[escribes|blue]] mucho.', en: 'You write a lot.' },
            ],
            note: 'En el diccionario buscas el infinitivo: para «leo», busca **leer**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué palabra es un **infinitivo**?', options: ['estudio', 'trabajar', 'leemos'], answer: 1, why: '«Trabajar» termina en -ar y no dice quién: es el infinitivo.' },
            { prompt: '«Escribo un mensaje.» ¿Cuál es el infinitivo?', options: ['escribo', 'escribir', 'escribes'], answer: 1, why: 'escribo → escribir.' },
          ] },
        ] },
        { title: 'La persona está en la terminación', mascot: '/brand/mascot/studying.webp', coach: 'Mira el final del verbo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PERSONA', question: '¿Quién?', en: 'who', formula: ['-o = yo', '-as / -es = tú', '-amos / -emos / -imos = nosotros'],
            meaning: 'Cada persona tiene su **terminación**. Por eso en español casi nunca decimos «yo» o «tú»: el verbo ya lo dice.',
            examples: [
              { es: '[[Leo|blue]] el mensaje. (yo)', en: 'I read the message.' },
              { es: '[[Preparas|blue]] el libro en casa. (tú)', en: 'You prepare the book at home.' },
              { es: '[[Estudiamos|blue]] a las seis. (nosotros)', en: 'We study at six.' },
              { es: 'Luis y Marta [[trabajan|blue]] mucho. (ellos)', en: 'Luis and Marta work a lot.' },
            ] },
          { kind: 'table', title: 'Presente: verbos regulares', head: ['Persona', 'estudiar', 'leer', 'escribir'], rows: [
            ['yo', 'estudi[[o|blue]]', 'le[[o|blue]]', 'escrib[[o|blue]]'],
            ['tú', 'estudi[[as|blue]]', 'le[[es|blue]]', 'escrib[[es|blue]]'],
            ['él, ella, usted', 'estudi[[a|blue]]', 'le[[e|blue]]', 'escrib[[e|blue]]'],
            ['nosotros, nosotras', 'estudi[[amos|blue]]', 'le[[emos|blue]]', 'escrib[[imos|blue]]'],
            ['vosotros, vosotras', 'estudi[[áis|blue]]', 'le[[éis|blue]]', 'escrib[[ís|blue]]'],
            ['ellos, ellas, ustedes', 'estudi[[an|blue]]', 'le[[en|blue]]', 'escrib[[en|blue]]'],
          ], note: '«Vosotros» se usa en España; en América se dice «ustedes». En esta clase no necesitas aprender todas las formas: solo **reconocer** la persona.' },
          { kind: 'tip', icon: '👀', title: 'El sujeto es opcional', text: '«**Yo** estudio español» y «Estudio español» significan lo mismo. Usamos «yo» o «tú» solo para dar énfasis o para contrastar: «**Yo** trabajo y **tú** estudias».', en: 'Spanish often drops the subject pronoun.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Trabajamos ahora.» ¿Quién trabaja?', options: ['Yo', 'Nosotros', 'Ellos'], answer: 1, why: 'La terminación **-amos** es de nosotros.' },
            { prompt: '«Lees mucho.» ¿Quién lee?', options: ['Yo', 'Tú', 'Ellos'], answer: 1, why: 'La terminación **-es** es de tú.' },
            { prompt: '«Escriben un mensaje.» ¿Quién escribe?', options: ['Tú', 'Nosotros', 'Ellos'], answer: 2, why: 'La terminación **-en** es de ellos, ellas o ustedes.' },
          ] },
        ] },
        { title: 'El tiempo: ahora o normalmente', mascot: '/brand/mascot/speaking.webp', coach: 'Las palabras de tiempo ayudan.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TIEMPO · PRESENTE', question: '¿Cuándo?', en: 'when', formula: ['presente + ahora / hoy', 'presente + cada día / los lunes / normalmente'],
            meaning: 'El **tiempo** del verbo dice **cuándo** pasa la acción: pasado, presente o futuro. Hoy trabajamos con el **presente**. El presente sirve para dos cosas: lo que pasa **ahora** y lo que haces **normalmente**. Las palabras de tiempo lo aclaran.',
            examples: [
              { es: '[[Ahora|teal]] trabajo en casa.', en: 'Right now I’m working at home.' },
              { es: 'Trabajo en casa [[los lunes|teal]].', en: 'I work at home on Mondays.' },
              { es: '[[Hoy|teal]] estudiamos a las seis.', en: 'Today we study at six.' },
              { es: 'Leo el periódico [[cada mañana|teal]].', en: 'I read the newspaper every morning.' },
            ] },
          { kind: 'compare', title: 'El mismo verbo, dos momentos', columns: [
            { tone: 'teal', label: 'AHORA', sentence: '[[Ahora|teal]] **leo** el mensaje.', idea: 'Una acción de este momento.', en: 'I’m reading the message now.' },
            { tone: 'teal', label: 'NORMALMENTE', sentence: '**Leo** mensajes [[cada día|teal]].', idea: 'Una rutina, algo habitual.', en: 'I read messages every day.' },
          ] },
          { kind: 'tip', icon: '!', title: 'Un presente, dos traducciones', text: 'En inglés dices «I read» o «I’m reading». En español, «leo» sirve para las dos ideas.', en: 'leo = I read / I’m reading' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Leo el mensaje ahora» expresa…', options: ['Una acción actual', 'Un pasado terminado', 'Una orden'], answer: 0, why: '«Leo» es presente y «ahora» lo sitúa en este momento.' },
            { prompt: '¿Qué frase informa de una **rutina**?', options: ['Ahora preparo la cena.', 'Estudio cada lunes.', 'Hoy leo un libro.'], answer: 1, why: '«Cada lunes» indica algo habitual.' },
          ] },
        ] },
        { title: 'El modo: informar, pedir o desear', mascot: '/autoestudio/mascot/noting.webp', coach: 'Hoy informamos. Pedir y desear, solo reconocer.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'MODO · LA INTENCIÓN', question: '¿Para qué es la frase?', en: 'mood: inform · ask · wish', formula: ['informar → estudio, trabajas', 'pedir → abre, lee', 'desear → espero que + otra forma'],
            meaning: 'El **modo** del verbo muestra la **intención** de la frase. Con el presente de todos los días **informamos**: decimos qué pasa. Hay otros modos para **pedir** algo o para **expresar una esperanza**. Hoy solo los vas a **reconocer**.',
            examples: [
              { es: 'Estudio español. → informa', en: 'I study Spanish.' },
              { es: '[[Abre|orange]] el libro, por favor. → pide', en: 'Open the book, please.' },
              { es: '[[Espero que|violet]] la clase [[sea|violet]] interesante. → desea', en: 'I hope the class is interesting.' },
            ] },
          { kind: 'compare', title: 'Tres mensajes del curso', columns: [
            { tone: 'blue', label: 'INFORMAR', sentence: 'Ana: «[[Estudio|blue]] español ahora».', idea: 'Dice una actividad. Es lo que practicamos hoy.', en: 'informs' },
            { tone: 'orange', label: 'PEDIR', sentence: 'Profesor: «[[Abre|orange]] el libro, por favor».', idea: 'Pide una acción a otra persona.', en: 'asks' },
            { tone: 'violet', label: 'DESEAR', sentence: 'Marta: «[[Espero que|violet]] la clase [[sea|violet]] interesante».', idea: 'Expresa una esperanza, no un hecho.', en: 'wishes' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Hoy, solo informar', text: 'No necesitas formar peticiones ni deseos todavía. Cuando escuches «abre», «lee» o «espero que…», piensa: **esta frase pide** o **esta frase desea**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Abre el libro, por favor» sirve para…', options: ['Informar de una experiencia', 'Pedir una acción', 'Describir una rutina propia'], answer: 1, why: 'Es una petición: el profesor pide algo.' },
            { prompt: '¿Qué frase **informa**?', options: ['Lee la página diez.', 'Trabajamos por la mañana.', 'Espero que venga.'], answer: 1, why: '«Trabajamos por la mañana» dice una actividad: informa.' },
          ] },
        ] },
        { title: 'Cómo leer un verbo', mascot: '/brand/mascot/seated.webp', coach: 'Tres preguntas para cada verbo.', blocks: [
          { kind: 'decide', title: 'Elige un verbo de una frase y responde', steps: [
            { q: '¿La frase pide algo a otra persona (abre, lee, escribe)?', yes: 'Es una **petición**: «[[Abre|orange]] el libro». Solo la reconoces.', no: 'next' },
            { q: '¿Empieza con «espero que…» u otra palabra de deseo?', yes: 'Es un **deseo**: «[[Espero que|violet]] la clase [[sea|violet]] útil». Solo lo reconoces.', no: 'next' },
            { q: 'La frase informa. ¿Qué terminación tiene el verbo y qué palabra de tiempo hay?', yes: 'La terminación da **la persona** (-amos = nosotros) y la palabra de tiempo dice **cuándo**: «[[Estudiamos|blue]] [[ahora|teal]]».', no: 'Si no hay palabra de tiempo, el contexto ayuda: «Trabajo en un banco» es algo habitual.' },
          ] },
          { kind: 'table', title: 'Ejemplo: «Estudiamos ahora»', head: ['Pregunta', 'Respuesta'], rows: [
            ['¿Infinitivo?', 'estudiar'],
            ['¿Persona?', '[[nosotros|blue]] (-amos)'],
            ['¿Tiempo?', 'presente, [[ahora|teal]]'],
            ['¿Intención?', 'informa de una actividad actual'],
          ] },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección. Pregunta: «¿Quién hace la acción? ¿Qué terminación necesita?».', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Yo estudiar español.', right: 'Yo estudio español.', why: 'Con una persona, el verbo va conjugado, no en infinitivo.' },
            { wrong: 'Nosotros estudia a las seis.', right: 'Nosotros estudiamos a las seis.', why: 'Nosotros necesita la terminación -amos.' },
            { wrong: 'Tú trabaja en casa.', right: 'Tú trabajas en casa.', why: 'Tú necesita la terminación -as.' },
            { wrong: 'Ana y yo leen el mensaje.', right: 'Ana y yo leemos el mensaje.', why: '«Ana y yo» = nosotros: leemos.' },
            { wrong: 'Ahora estoy leo el mensaje.', right: 'Ahora leo el mensaje.', why: 'No necesitas «estoy»: el presente «leo» ya expresa una acción de ahora.' },
          ] },
          { kind: 'teacher', text: 'Di un verbo conjugado («escribimos», «lees», «trabajan») y pide al alumno: infinitivo, persona y una frase con una palabra de tiempo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los verbos en situaciones reales', coach: 'Toca los verbos y las palabras marcadas.',
      steps: [
        { title: 'Mensajes del grupo de español', blocks: [
          { kind: 'guide', text: { teacher: 'Lean los mensajes con papeles. Después, el alumno toca cada marca y dice persona, tiempo o intención.', self: 'Lee los mensajes. Después toca cada palabra marcada para descubrir qué información da.' } },
          { kind: 'explore', title: 'Chat del curso de español', setting: 'Es lunes por la tarde. El grupo de español organiza la clase.', lines: [
            { who: 'Profesor', text: 'Hola a todos. ¿Quién viene a clase hoy?' },
            { who: 'Ana', text: 'Yo. [[Ahora|teal]] [[estudio|blue]] en la biblioteca.' },
            { who: 'Luis', text: 'Marta y yo [[trabajamos|blue]] [[por la mañana|teal]], pero a las seis estamos libres.' },
            { who: 'Marta', text: 'Sí, vamos. [[Espero que|violet]] la clase [[sea|violet]] interesante.' },
            { who: 'Profesor', text: '¡Seguro! Ana, ¿[[preparas|blue]] el libro en casa?' },
            { who: 'Ana', text: 'Sí, lo [[preparo|blue]] [[cada lunes|teal]].' },
            { who: 'Profesor', text: 'Perfecto. Para hoy: [[abre|orange]] el libro en la página diez, por favor.' },
            { who: 'Luis', text: '¿Y nosotros? ¿Qué [[leemos|blue]]?' },
            { who: 'Profesor', text: 'Ustedes [[leen|blue]] el texto de la página once.' },
            { who: 'Marta', text: '¡Gracias! Hasta las seis.' },
          ], notes: {
            'Ahora': 'Palabra de **tiempo**: la acción pasa en este momento.',
            'estudio': 'Terminación **-o**: yo. Presente: Ana **informa** de lo que hace ahora.',
            'trabajamos': 'Terminación **-amos**: nosotros (Marta y Luis). Informa de una rutina.',
            'por la mañana': 'Palabra de **tiempo**: dice cuándo trabajan normalmente.',
            'Espero que': '«Espero que» expresa un **deseo**. Solo reconocer: no necesitas formarlo hoy.',
            'sea': 'Forma de **deseo** del verbo ser. Solo reconocer: la frase no informa, desea.',
            'preparas': 'Terminación **-as**: tú. El profesor pregunta a Ana.',
            'preparo': 'Terminación **-o**: yo. Ana responde sobre su rutina.',
            'cada lunes': 'Palabra de **tiempo**: algo habitual, una rutina.',
            'abre': 'Una **petición**: el profesor pide una acción. Solo reconocer.',
            'leemos': 'Terminación **-emos**: nosotros. Luis pregunta por su grupo.',
            'leen': 'Terminación **-en**: ustedes. El profesor responde al grupo.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Quiénes trabajan por la mañana?', options: ['Ana y el profesor.', 'Luis y Marta.', 'Solo Luis.'], answer: 1, why: '«Marta y yo trabajamos por la mañana»: lo dice Luis.' },
            { prompt: '¿Qué mensaje expresa una esperanza?', options: ['El de Marta.', 'El de Ana.', 'El de Luis.'], answer: 0, why: '«Espero que la clase sea interesante.»' },
            { prompt: '¿Qué pide el profesor?', options: ['Abrir el libro en la página diez.', 'Estudiar en la biblioteca.', 'Llegar a las cinco.'], answer: 0, why: '«Abre el libro en la página diez, por favor.»' },
          ] },
        ] },
        { title: 'Un día de Luis', blocks: [
          { kind: 'explore', title: 'Hoy y normalmente', setting: 'Luis habla con su compañera de trabajo, Rosa, en la cafetería.', lines: [
            { who: 'Rosa', text: '¿Qué haces aquí [[hoy|teal]]? Normalmente [[trabajas|blue]] en casa.' },
            { who: 'Luis', text: 'Sí, [[los lunes|teal]] [[trabajo|blue]] en casa. Pero hoy tengo una reunión.' },
            { who: 'Rosa', text: 'Ah, ¿y la reunión es [[ahora|teal]]?' },
            { who: 'Luis', text: 'A las doce. Mi jefa siempre dice: «[[Llega|orange]] temprano».' },
            { who: 'Rosa', text: '¡Ja! ¿Y por la tarde?' },
            { who: 'Luis', text: 'Por la tarde Marta y yo [[estudiamos|blue]] español.' },
            { who: 'Rosa', text: '¡Qué bien! [[Espero que|violet]] te [[vaya|violet]] bien.' },
            { who: 'Luis', text: 'Gracias. Y tú, ¿[[comes|blue]] aquí [[cada día|teal]]?' },
          ], notes: {
            'hoy': 'Palabra de **tiempo**: un día concreto, diferente de lo normal.',
            'trabajas': 'Terminación **-as**: tú. Una rutina de Luis.',
            'los lunes': 'Palabra de **tiempo**: algo que se repite cada semana.',
            'trabajo': 'Terminación **-o**: yo. Presente con valor de rutina.',
            'ahora': 'Palabra de **tiempo**: Rosa pregunta por este momento.',
            'Llega': 'Una **petición** de la jefa. Solo reconocer.',
            'estudiamos': 'Terminación **-amos**: nosotros (Marta y Luis).',
            'Espero que': 'Un **deseo**: Rosa no informa, desea algo bueno. Solo reconocer.',
            'vaya': 'Forma de **deseo** del verbo ir. Solo reconocer.',
            'comes': 'Terminación **-es**: tú. Luis pregunta por una rutina de Rosa.',
            'cada día': 'Palabra de **tiempo**: una rutina.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué haces tú los lunes? ¿Y hoy?». El alumno responde con dos frases en presente y con palabras de tiempo.' },
        ] },
        { title: '¿Informa, pide o desea?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'informa', label: 'Informa', tone: 'blue' },
            { id: 'pide', label: 'Pide', tone: 'orange' },
            { id: 'desea', label: 'Desea', tone: 'violet' },
          ], items: [
            { text: 'Ahora estudio en la biblioteca.', answer: 'informa', why: 'Dice lo que hace Ana: informa.' },
            { text: 'Abre el libro en la página diez.', answer: 'pide', why: 'El profesor pide una acción.' },
            { text: 'Espero que la clase sea interesante.', answer: 'desea', why: 'Marta expresa una esperanza.' },
            { text: 'Los lunes trabajo en casa.', answer: 'informa', why: 'Una rutina: informa.' },
            { text: 'Llega temprano.', answer: 'pide', why: 'La jefa pide algo.' },
            { text: 'Espero que te vaya bien.', answer: 'desea', why: 'Rosa expresa un deseo.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: '¿Quién hace la acción?', blocks: [
          { kind: 'choice', items: [
            { context: 'Un mensaje en el chat del curso.', prompt: '«Preparamos la presentación.» ¿Quién la prepara?', options: ['Yo', 'Nosotros', 'Ellos'], answer: 1, why: '**-amos** = nosotros.', en: 'We prepare the presentation.' },
            { context: 'Ana habla de su hermano y su hermana.', prompt: '«Viven en Quito.» ¿Quién vive en Quito?', options: ['Tú', 'Nosotros', 'Ellos'], answer: 2, why: '**-en** = ellos, ellas o ustedes.' },
            { context: 'Una amiga te pregunta.', prompt: '«¿Hablas inglés?» ¿A quién pregunta?', options: ['A ti', 'A ella', 'A nosotros'], answer: 0, why: '**-as** = tú.' },
            { context: 'Completa con la forma de «nosotros».', prompt: 'Luis y yo ___ en una oficina.', options: ['trabaja', 'trabajamos', 'trabajan'], answer: 1, why: '«Luis y yo» = nosotros: trabajamos.' },
            { context: 'Completa con la forma de «tú».', prompt: 'Tú ___ el libro en casa.', options: ['preparas', 'preparo', 'preparan'], answer: 0, why: 'Tú: -as, preparas.' },
            { context: 'Completa con la forma de «yo».', prompt: 'Cada mañana ___ el periódico.', options: ['lee', 'leo', 'leemos'], answer: 1, why: 'Sin sujeto, pero piensas en ti: leo.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase habla de **este momento**?', options: ['Ahora trabajo en casa.', 'Trabajo en casa los lunes.'], answer: 0, why: '«Ahora» = este momento. «Los lunes» = una rutina.' },
            { prompt: '¿Qué frase **pide** algo?', options: ['Lees la página diez.', 'Lee la página diez, por favor.'], answer: 1, why: '«Lee…, por favor» es una petición. «Lees la página diez» informa.' },
            { prompt: '¿Qué frase **informa** de tu horario?', options: ['Estudio hoy a las seis.', 'Espero que la clase sea útil.'], answer: 0, why: '«Estudio hoy a las seis» dice un hecho; la otra expresa un deseo.' },
            { prompt: '«Escribimos» y «escribo»: ¿qué cambia?', options: ['La persona.', 'El tiempo.', 'La intención.'], answer: 0, why: 'Las dos son presente e informan. Cambia la persona: nosotros / yo.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Un compañero nuevo en el curso', lines: [
            { who: 'Pablo', text: 'Hola, soy nuevo. ¿A qué hora ___ la clase?', options: ['empieza', 'empiezo', 'empezar'], answer: 0, why: '«La clase» = ella: empieza.' },
            { who: 'Ana', text: 'A las seis. Nosotros ___ los lunes y los miércoles.', options: ['estudian', 'estudiamos', 'estudias'], answer: 1, why: 'Nosotros: -amos, estudiamos.' },
            { who: 'Pablo', text: '¿Y tú ___ por la mañana?', options: ['trabajas', 'trabajo', 'trabajar'], answer: 0, why: 'Tú: -as, trabajas.' },
            { who: 'Ana', text: 'Sí, ___ en una tienda.', options: ['trabaja', 'trabajo', 'trabajamos'], answer: 1, why: 'Ana habla de sí misma, yo: trabajo.' },
            { who: 'Pablo', text: 'El profesor escribe: «Abre la página diez». ¿Qué significa?' },
            { who: 'Ana', text: 'Es una ___: tienes que abrir el libro.', options: ['información', 'petición', 'esperanza'], answer: 1, why: '«Abre» pide una acción: es una petición.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Nosotros leemos el mensaje.', ok: true, why: 'Correcta: nosotros + -emos.' },
            { sentence: 'Yo trabajar en casa.', ok: false, options: ['Yo trabajo en casa.', 'Yo trabajas en casa.', 'Yo trabaja en casa.'], answer: 0, why: 'Yo: -o, trabajo.' },
            { sentence: 'Marta y Luis estudia español.', ok: false, options: ['Marta y Luis estudian español.', 'Marta y Luis estudiamos español.', 'Marta y Luis estudias español.'], answer: 0, why: 'Dos personas = ellos: estudian.' },
            { sentence: 'Tú escribes muy bien.', ok: true, why: 'Correcta: tú + -es.' },
            { sentence: 'Mi hermana y yo vivimos en Lima.', ok: true, why: 'Correcta: «mi hermana y yo» = nosotros, vivimos.' },
            { sentence: 'Tú prepara la cena cada noche.', ok: false, options: ['Tú preparas la cena cada noche.', 'Tú preparo la cena cada noche.', 'Tú preparamos la cena cada noche.'], answer: 0, why: 'Tú: -as, preparas.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['estudiamos', 'Hoy', 'español', 'a las seis'], accept: ['Hoy estudiamos español a las seis', 'Estudiamos español hoy a las seis', 'Hoy a las seis estudiamos español'], en: 'Today we study Spanish at six.' },
            { tiles: ['trabajo', 'Ahora', 'en casa'], accept: ['Ahora trabajo en casa', 'Trabajo en casa ahora'], en: 'Right now I’m working at home.' },
            { tiles: ['preparas', 'Tú', 'el libro', 'en casa'], accept: ['Tú preparas el libro en casa'], en: 'You prepare the book at home.' },
            { tiles: ['leen', 'Ellos', 'cada día', 'el periódico'], accept: ['Ellos leen el periódico cada día', 'Cada día ellos leen el periódico'], en: 'They read the newspaper every day.' },
          ] },
          { kind: 'rewrite', title: 'Cambia la persona', items: [
            { prompt: 'Yo estudio español ahora.', instruction: 'Cambia el sujeto a «nosotros».', accept: ['Nosotros estudiamos español ahora', 'Estudiamos español ahora'] },
            { prompt: 'Yo trabajo en casa cada mañana.', instruction: 'Cambia el sujeto a «tú».', accept: ['Tú trabajas en casa cada mañana', 'Trabajas en casa cada mañana'] },
            { prompt: 'Ana lee el mensaje.', instruction: 'Cambia el sujeto a «Ana y Luis».', accept: ['Ana y Luis leen el mensaje'] },
            { prompt: 'Nosotros escribimos un correo.', instruction: 'Cambia el sujeto a «yo».', accept: ['Yo escribo un correo', 'Escribo un correo'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El plan de hoy', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'El plan de hoy', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota los verbos y quién hace cada acción antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Un mensaje para Ana', channel: 'NOTA DE VOZ · PARA ANA', src: '/audio/grammar-classroom/107.mp3',
            before: 'Una compañera le manda a Ana el plan del día. ¿Qué informaciones crees que va a dar?',
            gist: { prompt: '¿De qué habla el mensaje?', options: ['Del plan de hoy y de los mensajes del profesor.', 'De un viaje.', 'De un problema en el trabajo.'], answer: 0, why: 'Habla de la clase de hoy («Hoy estudiamos español a las seis») y de los mensajes del profesor.' },
            details: [
              { prompt: '¿A qué hora estudian?', options: ['A las cinco.', 'A las seis.', 'A las diez.'], answer: 1, why: '«Hoy estudiamos español a las seis.»' },
              { prompt: '¿Qué hace Ana en casa?', options: ['Trabaja.', 'Prepara el libro.', 'Escribe un mensaje.'], answer: 1, why: '«Tú preparas el libro en casa.»' },
              { prompt: '«Abre la página diez» es…', options: ['Una petición.', 'Una esperanza.', 'Una información.'], answer: 0, why: '«Abre la página diez». Es una petición.' },
              { prompt: '«Espero que la clase sea útil» es…', options: ['Una petición.', 'Una esperanza.', 'Una rutina.'], answer: 1, why: '«Espero que la clase sea útil». Es una esperanza.' },
              { prompt: '¿Qué verbos usan para contar su día?', options: ['Abre y espero.', 'Trabajo, preparas y estudiamos.', 'Escribe y dice.'], answer: 1, why: '«Para contar nuestro día decimos: trabajo, preparas y estudiamos.»' },
            ],
            transcript: 'Hola, Ana. [[Hoy|teal]] [[estudiamos|blue]] español a las seis. Yo [[trabajo|blue]] [[ahora|teal]] y tú [[preparas|blue]] el libro en casa. El profesor escribe un mensaje: «[[Abre|orange]] la página diez». Es una petición. También dice: «[[Espero que|violet]] la clase [[sea|violet]] útil». Es una esperanza. Para contar nuestro día decimos: trabajo, preparas y estudiamos.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Ana: ¿qué hace ahora? ¿Qué hace el grupo hoy? Solo frases que informan, en presente.', self: 'Responde al mensaje como si fueras Ana: di qué haces tú ahora y qué hace el grupo hoy. Usa tres personas diferentes: yo, tú y nosotros.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu día y tu semana', coach: 'Una pregunta por vez. Informa con el presente.',
      steps: [
        { title: 'Tu día y tu semana', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Escucha los verbos del alumno: si la terminación no es correcta, repite la frase bien, sin interrumpir.', self: 'Responde cada pregunta en voz alta, con frases cortas en presente. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces ahora, en este momento?', followUps: ['¿Dónde estás?', '¿Estudias o trabajas hoy?', '¿Qué haces después?'], phrases: ['[[Ahora|teal]] [[estudio|blue]]…', '[[Hoy|teal]] [[trabajo|blue]] en…', 'Después [[leo|blue]]…'], hint: 'Para este momento, usa el presente con «ahora».', example: 'Ahora estudio español en mi casa. Hoy no trabajo. Después leo un libro.', next: 'Y normalmente, ¿qué haces?' },
            { q: '¿Qué haces normalmente por la mañana?', followUps: ['¿A qué hora desayunas?', '¿Trabajas o estudias por la mañana?', '¿Qué haces los fines de semana?'], phrases: ['[[Cada mañana|teal]]…', '[[Los lunes|teal]] [[trabajo|blue]]…', 'Normalmente [[desayuno|blue]] a las…'], hint: 'Para la rutina, usa palabras como «cada mañana», «los lunes», «normalmente».', example: 'Normalmente desayuno a las siete. Los lunes trabajo en la oficina y los viernes trabajo en casa.', next: 'Ahora hablemos de tu familia o tus amigos.' },
            { q: '¿Qué hacen las personas de tu casa durante el día?', followUps: ['¿Dónde trabaja tu pareja o tu amigo?', '¿Qué hacen juntos?', '¿Qué hacen los fines de semana?'], phrases: ['Mi hermano [[trabaja|blue]]…', 'Mis padres [[viven|blue]]…', 'Juntos [[cocinamos|blue]]…'], hint: 'Cambia la terminación: él trabaja, ellos trabajan, nosotros trabajamos.', example: 'Mi pareja trabaja en un hospital. Mis hijos estudian en el colegio. Los domingos cocinamos juntos.', next: 'Hablemos de tu clase de español.' },
            { q: '¿Cómo es tu clase de español? ¿Qué hacen tú y tu profesor?', followUps: ['¿Qué día estudias?', '¿Qué lees o escribes en clase?', '¿Qué te pide tu profesor?'], phrases: ['[[Estudiamos|blue]] los…', 'Mi profesor [[escribe|blue]]…', 'Mi profesor dice: «[[Lee|orange]]…». Es una petición.'], hint: 'Para contar lo que pide el profesor, repite su frase y di: «Es una petición».', example: 'Estudiamos los martes. Leemos textos y hablamos mucho. Mi profesora dice: «Repite, por favor». Es una petición.', next: 'Ahora, tus deseos.', teacher: 'El alumno solo reconoce las peticiones y los deseos: no le pidas formarlos.' },
            { q: 'Escucha esta frase: «Espero que tengas un buen día». ¿Informa, pide o desea? ¿Y qué le dices tú a un amigo por la mañana?', followUps: ['¿Qué frase informa de tu día?', '¿Qué frase dices para pedir algo amable?', '¿Conoces otra frase de deseo en español?'], phrases: ['Esa frase [[desea|violet]] algo.', 'Esta frase informa: [[trabajo|blue]] hoy.', '¡Buen día!'], hint: 'No necesitas formar un deseo nuevo: solo reconoce la intención y responde con una frase que informa.', example: 'Esa frase expresa un deseo. Yo le digo a mi amigo: «¡Buen día! Hoy trabajo hasta las cinco».', next: 'Para terminar, una semana ideal.' },
            { q: '¿Cómo es tu semana ideal? Cuéntala en presente.', followUps: ['¿Qué haces el lunes?', '¿Con quién comes?', '¿Qué no haces nunca en tu semana ideal?'], phrases: ['El lunes [[viajo|blue]]…', 'Mis amigos y yo [[comemos|blue]]…', 'No [[trabajo|blue]] nunca los viernes.'], hint: 'Usa varias personas: yo, nosotros, ellos.', example: 'El lunes duermo mucho. El martes mis amigos y yo comemos en la playa. Los viernes no trabajo nunca.', teacher: 'Al final, pregunta por un verbo de su respuesta: «¿Persona? ¿Tiempo? ¿Intención?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te hace dos preguntas con «¿Qué haces…?» y «¿Qué hacen…?».', self: 'Escribe tres preguntas en presente con tú, ustedes y él, y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu horario de hoy', coach: 'Informa con el presente.',
      steps: [
        { title: 'Tu horario de hoy', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos la terminación de cada verbo.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Comprueba que cada verbo tiene la terminación de su persona.' } },
          { kind: 'write', title: 'Un mensaje para el grupo', situation: 'Tu grupo de español organiza el día. Escribe un mensaje con tu horario y el horario del grupo.', task: [
            'Di qué haces **tú** hoy (yo).',
            'Di qué hace **otra persona** (tú, él o ella).',
            'Di qué hace **el grupo** (nosotros).',
            'Añade **palabras de tiempo**: ahora, hoy, a las seis, cada lunes.',
          ], starters: ['Hola a todos:', 'Hoy trabajo…', 'Ahora leo…', 'Tú preparas…', 'Nosotros estudiamos…', 'Cada lunes…'],
            words: ['trabajo', 'estudio', 'preparas', 'escribe', 'leemos', 'ahora', 'hoy', 'por la mañana', 'a las seis'],
            model: '[[Hoy|teal]] [[trabajo|blue]] por la mañana. Tú [[preparas|blue]] el libro en casa. Nosotros [[estudiamos|blue]] español a las seis. El profesor [[escribe|blue]] los mensajes del curso. [[Ahora|teal]] [[leo|blue]] la página diez y [[preparo|blue]] mis preguntas para la clase.',
            minWords: 30 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'PERSONA', formula: '-o yo · -as/-es tú · -amos/-emos/-imos nosotros', example: 'Estudiamos español.', caption: 'La terminación dice quién.', en: 'person' },
            { tone: 'teal', label: 'TIEMPO', formula: 'presente + ahora / cada día', example: 'Ahora trabajo. Trabajo los lunes.', caption: 'Ahora o normalmente: el contexto lo dice.', en: 'tense' },
            { tone: 'orange', label: 'MODO', formula: 'informar · pedir · desear', example: 'Estudio. / Abre el libro. / Espero que…', caption: 'Hoy produces solo información.', en: 'mood' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres preguntas para cada verbo', text: '¿**Quién**? Mira la terminación. ¿**Cuándo**? Mira las palabras de tiempo. ¿**Para qué**? Informa, pide o desea.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '«Escribimos un correo.» ¿Quién escribe?', options: ['Yo', 'Nosotros', 'Ellos'], answer: 1, why: '-imos = nosotros.' },
            { prompt: 'Mis padres ___ en el centro.', options: ['vive', 'viven', 'vivimos'], answer: 1, why: 'Mis padres = ellos: viven.' },
            { prompt: '«Trabajo en casa los viernes» expresa…', options: ['Una rutina', 'Una petición', 'Un deseo'], answer: 0, why: '«Los viernes»: algo habitual.' },
            { prompt: '«Cierra la puerta, por favor» sirve para…', options: ['Informar', 'Pedir', 'Desear'], answer: 1, why: 'Pide una acción a otra persona.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: en «estudiamos ahora», identifica persona, tiempo e intención. Respuesta: nosotros; presente; informa de una actividad actual.' },
        ] },
      ],
    },
  ],
};
