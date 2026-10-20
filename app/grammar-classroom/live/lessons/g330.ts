import type { LiveLesson } from '../types';

/**
 * Lesson 330 · A1 · Expresiones de frecuencia y hábito (course unit G030).
 * One scene runs through the class: Lucía and Daniel work in the same office
 * in Guadalajara, Mexico, and want to train together, but their weeks are
 * different. They compare habits and decide which days they can run or swim.
 * Content: the scale siempre · normalmente · a veces · casi nunca · nunca
 * (usually before the verb), longer expressions (todos los días, una vez /
 * dos veces por semana, los lunes) at the start or the end, nunca before the
 * verb or no + verb + nunca (*voy nunca), and frequency (los sábados, todos los
 * días) against one point in time (el sábado, este sábado, hoy, mañana).
 * Contrasts: todos los días / todo el día, vez / veces. Reflexive routine verbs
 * (me levanto) are left for class 031. Everyone speaks with tú; the audio is
 * a voice note from Lucía (one speaker, Mexican Spanish).
 */
export const lesson: LiveLesson = {
  id: 330,
  level: 'A1',
  title: 'Expresiones de frecuencia y hábito',
  subtitle: 'Decir con qué frecuencia haces algo (siempre, a veces, nunca, los lunes) y acordar días para entrenar con un compañero.',
  legend: [
    { tone: 'teal', label: 'FRECUENCIA · una palabra (siempre, normalmente, a veces)' },
    { tone: 'blue', label: 'FRECUENCIA · expresión larga (todos los días, los lunes, una vez por semana)' },
    { tone: 'orange', label: 'NUNCA · CASI NUNCA (nunca voy · no voy nunca)' },
    { tone: 'violet', label: 'TIEMPO PUNTUAL · una vez (hoy, mañana, este sábado)' },
  ],
  optionNotes: {
    'no nunca': '«No» y «nunca» juntos antes del verbo no funcionan. Elige una: «nunca nado» o «no nado nunca».',
    'nunca no': '«Nunca» antes del verbo ya niega la frase: no necesitas «no». «Nunca voy».',
    'todos días': 'Falta el artículo: **todos los días** (every day).',
    'dos vez': 'Con dos, tres, cuatro… el plural de «vez» es **veces** (z → c): dos veces.',
    'dos tiempos': '«Tiempo» es «time» del reloj o del clima. Para «two times / twice» se dice **dos veces**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cuándo entrenamos?', coach: 'Siempre, a veces, nunca. Always, sometimes, never.',
      steps: [
        { title: 'Dos compañeros · Two colleagues', blocks: [
          { kind: 'lead', text: 'Lucía y Daniel trabajan en la misma oficina, en Guadalajara. Los dos quieren hacer deporte, pero solos no es divertido. Para entrenar juntos, primero hablan de sus **hábitos**: qué hacen **siempre**, qué hacen **a veces** y qué **no hacen nunca**.', en: 'Lucía and Daniel work in the same office in Guadalajara. They both want to do sport, but alone it is no fun. To train together, they first talk about their habits: what they always do, what they sometimes do and what they never do.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después, tu alumno dice qué frase habla de todos los días, cuál de un día de la semana y cuál de cero veces.', self: 'Lee las tres frases en voz alta. Busca cuál dice «todos los días», cuál dice un día de la semana y cuál dice «cero veces».' } },
          { kind: 'compare', title: 'Tres hábitos · Three habits', columns: [
            { tone: 'teal', label: 'SIEMPRE · always', sentence: 'Lucía: «[[Siempre|teal]] desayuno temprano».', idea: 'Todos los días, sin excepción.', en: 'Lucía: “I always have breakfast early.”' },
            { tone: 'blue', label: 'LOS MARTES · on Tuesdays', sentence: 'Lucía corre [[los martes|blue]].', idea: 'Cada martes: un hábito de la semana.', en: 'Lucía runs on Tuesdays.' },
            { tone: 'orange', label: 'NUNCA · never', sentence: 'Daniel: «[[Nunca|orange]] ceno tarde».', idea: 'Cero veces.', en: 'Daniel: “I never have dinner late.”' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Siempre desayuno temprano» significa…', options: ['hoy desayuno temprano.', 'nunca desayuno.', 'todos los días desayuno temprano.'], answer: 2, why: 'Siempre = always: todos los días, sin excepción.', en: '“Siempre desayuno temprano” means…' },
            { prompt: '«Lucía corre los martes» significa…', options: ['cada martes.', 'solo este martes.', 'todos los días.'], answer: 0, why: '«Los» + día = cada semana, ese día.', en: '“Lucía corre los martes” means…' },
            { prompt: '«Nunca ceno tarde»: ¿cuántas veces?', options: ['Una vez por semana.', 'Muchas veces.', 'Cero.'], answer: 2, why: 'Nunca = never: cero veces.', en: '“Nunca ceno tarde”: how many times?' },
          ] },
        ] },
        { title: 'La escala · The scale', mascot: '/brand/mascot/studying.webp', coach: 'Del cien al cero. From 100 to 0.', blocks: [
          { kind: 'table', title: 'De siempre a nunca · From always to never', head: ['Expresión', '¿Cuántas veces?', 'English'], rows: [
            ['[[siempre|teal]]', '≈ 100 %', 'always'],
            ['[[normalmente|teal]] · generalmente', '≈ 80 %', 'usually'],
            ['[[a veces|teal]]', '≈ 40 %', 'sometimes'],
            ['[[casi nunca|orange]]', '≈ 10 %', 'hardly ever'],
            ['[[nunca|orange]]', '0 %', 'never'],
          ], note: '«A veces» son dos palabras. «Normalmente» y «generalmente» significan lo mismo.' },
          { kind: 'concept', tone: 'teal', label: 'FRECUENCIA · una palabra', question: '¿Dónde va siempre?', en: 'Where do one-word frequency expressions go?', formula: ['(sujeto) + siempre / normalmente / a veces + verbo', 'Siempre desayuno temprano. Daniel normalmente trabaja hasta tarde.'],
            meaning: 'La posición más fácil y natural: **antes del verbo**. Siempre, normalmente y a veces también pueden ir después del verbo o al final, pero hoy practicas la posición antes del verbo.',
            examples: [
              { es: '[[Siempre|teal]] desayuno temprano.', en: 'I always have breakfast early.' },
              { es: 'Daniel [[normalmente|teal]] trabaja hasta tarde.', en: 'Daniel usually works late.' },
              { es: '[[A veces|teal]] comemos juntos en la oficina.', en: 'Sometimes we eat together at the office.' },
              { es: 'Lucía corre [[siempre|teal]] en el mismo parque.', en: 'Lucía always runs in the same park.' },
            ],
            note: 'Para preguntar: «¿**Con qué frecuencia** corres?» (How often do you run?).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel ___ trabaja hasta tarde: cuatro días de cinco.', options: ['nunca', 'casi nunca', 'normalmente'], answer: 2, why: 'Cuatro de cinco días ≈ 80 %: normalmente.', en: 'Daniel usually works late: four days out of five.' },
            { prompt: '___ comemos juntos: una o dos veces por semana.', options: ['Siempre', 'Nunca', 'A veces'], answer: 2, why: 'Una o dos veces, no siempre: a veces.', en: 'Sometimes we eat together: once or twice a week.' },
            { prompt: 'Lucía corre en el mismo parque todos los días. Lucía ___ corre en el mismo parque.', options: ['siempre', 'a veces', 'casi nunca'], answer: 0, why: 'Todos los días, sin excepción: siempre, antes del verbo.', en: 'Lucía runs in the same park every day. Lucía always runs in the same park.' },
          ] },
        ] },
        { title: 'Expresiones largas · Longer expressions', mascot: '/brand/mascot/standing.webp', coach: 'Los lunes, todos los días, dos veces.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'FRECUENCIA · expresión larga', question: '¿Cada cuánto?', en: 'How often? (longer expressions)', formula: ['todos los días · todas las semanas', 'una vez / dos veces + por semana', 'los + lunes, martes… sábados, domingos'],
            meaning: 'Estas expresiones van normalmente **al principio** o **al final** de la frase. Con un día de la semana, **los** + día significa «cada semana, ese día».',
            examples: [
              { es: 'Lucía corre [[todos los días|blue]].', en: 'Lucía runs every day.' },
              { es: '[[Una vez por semana|blue]] nado en la piscina.', en: 'Once a week I swim in the pool.' },
              { es: 'Daniel va al gimnasio [[dos veces por semana|blue]].', en: 'Daniel goes to the gym twice a week.' },
              { es: '[[Los sábados|blue]] salgo a caminar con mi perro.', en: 'On Saturdays I go out walking with my dog.' },
            ],
            note: '**Una vez**, pero **dos veces** (z → c). También se dice «una vez **a la** semana»: las dos formas son correctas.' },
          { kind: 'tip', icon: '💡', title: 'Todos los días ≠ todo el día', text: '**Todos los días** = cada día (every day). **Todo el día** = de la mañana a la noche (all day long). «Trabajo todos los días» no es «trabajo todo el día».', en: '“Todos los días” = every day. “Todo el día” = all day long. “I work every day” is not “I work all day”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel va al gimnasio ___ por semana.', options: ['dos veces', 'dos vez', 'dos tiempos'], answer: 0, why: 'Plural de vez: veces. «Time» en este sentido es «vez».', en: 'Daniel goes to the gym twice a week.' },
            { prompt: 'Cada sábado, Lucía nada. Lucía nada ___.', options: ['los sábados', 'el sábado', 'sábados los'], answer: 0, why: 'Cada semana, ese día: los + día.', en: 'Every Saturday, Lucía swims.' },
            { prompt: 'De lunes a domingo, sin excepción: corro ___.', options: ['todos los días', 'todo el día', 'todos días'], answer: 0, why: 'Every day = todos los días. Todo el día = all day.', en: 'Monday to Sunday, no exceptions: I run every day.' },
          ] },
        ] },
        { title: 'Nunca voy · No voy nunca', mascot: '/brand/mascot/portrait.webp', coach: 'Nunca antes del verbo, o no + verbo + nunca.', blocks: [
          { kind: 'compare', title: 'Dos frases, el mismo significado · Two sentences, one meaning', columns: [
            { tone: 'orange', label: 'NUNCA + verbo', sentence: '[[Nunca|orange]] voy al gimnasio los domingos.', idea: 'Nunca antes del verbo: no necesitas «no».', en: 'I never go to the gym on Sundays.' },
            { tone: 'orange', label: 'NO + verbo + NUNCA', sentence: '[[No|orange]] voy al gimnasio [[nunca|orange]] los domingos.', idea: 'Nunca después del verbo: necesitas «no» antes.', en: 'I never go to the gym on Sundays.' },
          ] },
          { kind: 'lead', text: 'En inglés, una negación basta: «I never go». En español, si **nunca** va después del verbo, la frase necesita **no** antes del verbo: «No voy nunca». Es correcto y muy frecuente. Lo mismo con **casi nunca**: «Casi nunca entreno» = «No entreno casi nunca».', en: 'In English one negative is enough: “I never go”. In Spanish, if “nunca” comes after the verb, the sentence needs “no” before the verb: “No voy nunca”. It is correct and very common. The same with “casi nunca”.' },
          { kind: 'decide', title: '¿Dónde pongo nunca? · Where does nunca go?', steps: [
            { q: '¿Nunca va antes del verbo? (before the verb)', yes: 'Perfecto, sin «no»: **Nunca voy**.', no: 'next' },
            { q: '¿Nunca va después del verbo? (after the verb)', yes: 'Pon **no** antes del verbo: **No voy nunca**.', no: 'Pon nunca antes del verbo: es lo más fácil.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Nunca no ceno tarde.', 'No ceno nunca tarde.', 'Ceno nunca tarde.'], answer: 1, why: 'Nunca después del verbo: no + verbo + nunca.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['No casi nunca entreno los viernes.', 'Casi nunca entreno los viernes.', 'Entreno casi nunca los viernes.'], answer: 1, why: 'Casi nunca antes del verbo, sin «no».', en: 'Which one is correct?' },
            { prompt: '«Nunca voy» y «No voy nunca»…', options: ['son contrarias.', 'la segunda es incorrecta.', 'significan lo mismo.'], answer: 2, why: 'Las dos dicen «I never go». Cambia solo la posición.', en: '“Nunca voy” and “No voy nunca”…' },
          ] },
        ] },
        { title: '¿Hábito o una vez? · Habit or one time?', mascot: '/brand/mascot/speaking.webp', coach: 'Los sábados ≠ este sábado.', blocks: [
          { kind: 'compare', title: 'Frecuencia o tiempo puntual · Frequency or one point in time', columns: [
            { tone: 'blue', label: 'HÁBITO · se repite', sentence: '[[Los sábados|blue]] nado. [[Todos los días|blue]] corro.', idea: 'Pregunta: ¿con qué frecuencia?', en: 'On Saturdays I swim. Every day I run.' },
            { tone: 'violet', label: 'UNA VEZ · un día concreto', sentence: '[[Este sábado|violet]] no nado. [[Hoy|violet]] corro con Daniel.', idea: 'Pregunta: ¿cuándo?', en: 'This Saturday I am not swimming. Today I run with Daniel.' },
          ] },
          { kind: 'table', title: 'Tres pares mínimos · Three minimal pairs', head: ['A', 'B', '¿Qué cambia? (what changes)'], rows: [
            ['[[Nunca|orange]] voy.', '[[No|orange]] voy [[nunca|orange]].', 'Nada: el mismo significado (same meaning).'],
            ['[[Los sábados|blue]] nado.', '[[El sábado|violet]] nado.', 'A: cada sábado (every Saturday). B: un sábado (this Saturday).'],
            ['Trabajo [[todos los días|blue]].', 'Trabajo [[todo el día|violet]].', 'A: cada día (every day). B: de la mañana a la noche (all day).'],
          ], note: 'Para un día concreto: **el** lunes, **este** lunes, **hoy**, **mañana**. Para un hábito: **los** lunes, **todos los** lunes.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía tiene una cena especial solo este viernes: «___ ceno tarde».', options: ['Todos los viernes', 'Este viernes', 'Los viernes'], answer: 1, why: 'Una vez, un día concreto: este viernes.', en: 'Lucía has a special dinner only this Friday: “This Friday I have dinner late.”' },
            { prompt: '«¿Con qué frecuencia nadas?» La respuesta natural es…', options: ['Mañana.', 'Una vez por semana.', 'Este sábado.'], answer: 1, why: '¿Con qué frecuencia? → una frecuencia, no un día.', en: '“How often do you swim?” The natural answer is…' },
            { prompt: 'Daniel trabaja en la oficina cada lunes: «___ trabajo en la oficina».', options: ['El lunes', 'Hoy', 'Los lunes'], answer: 2, why: 'Cada lunes = hábito = los lunes.', en: 'Daniel works at the office every Monday.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde va nunca? Where does nunca go?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Qué falta o qué sobra?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Yo voy nunca al gimnasio.', right: 'Yo nunca voy al gimnasio. / Yo no voy nunca al gimnasio.', why: 'Nunca después del verbo necesita «no» antes. O pon nunca antes del verbo. (Never after the verb needs “no”.)' },
            { wrong: 'No nunca entreno los domingos.', right: 'Nunca entreno los domingos.', why: 'Nunca antes del verbo ya niega: no pongas «no» delante. (Never before the verb: no extra “no”.)' },
            { wrong: 'Nunca no ceno tarde.', right: 'Nunca ceno tarde.', why: 'Con nunca antes del verbo, sobra el «no». (Drop the “no”.)' },
            { wrong: 'Corro todos días.', right: 'Corro todos los días.', why: 'Falta el artículo: todos **los** días. (Every day = todos los días.)' },
            { wrong: 'Nado dos vez por semana.', right: 'Nado dos veces por semana.', why: 'Plural de vez: veces, con c. (Twice = dos veces.)' },
            { wrong: 'El lunes trabajo hasta tarde. (cada lunes)', right: 'Los lunes trabajo hasta tarde.', why: 'Un hábito con un día: los + día. «El lunes» es un lunes concreto. (Every Monday = los lunes.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Daniel corre nunca.', 'Daniel no nunca corre.', 'Daniel no corre nunca.'], answer: 2, why: 'No + verbo + nunca.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Lucía nada tres veces por semana.', 'Lucía nada tres vez por semana.', 'Lucía nada tres veces semana.'], answer: 0, why: 'Tres veces por semana.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales: algo que hace siempre, algo que hace a veces y algo que no hace nunca (de las dos maneras). Tú repites cada frase bien y tu alumno la repite.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Café en la oficina', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Lucía y Daniel hablan · Lucía and Daniel talk', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Daniel. Después, tu alumno toca cada expresión marcada y dice si es un hábito o un día concreto.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada para ver por qué se usa.' } },
          { kind: 'explore', title: '¿Entrenamos juntos?', setting: 'Lunes, nueve de la mañana. Lucía y Daniel toman un café en la cocina de la oficina y buscan días para entrenar juntos. (Monday, 9 a.m. Lucía and Daniel have a coffee in the office kitchen and look for days to train together.)', lines: [
            { who: 'Daniel', text: 'Lucía, tú haces mucho deporte, ¿verdad?', en: 'Lucía, you do a lot of sport, right?' },
            { who: 'Lucía', text: 'Sí, casi [[todos los días|blue]]. [[Los martes y los jueves|blue]] corro en el parque.', en: 'Yes, almost every day. On Tuesdays and Thursdays I run in the park.' },
            { who: 'Daniel', text: '¿Por la mañana o por la tarde?', en: 'In the morning or in the afternoon?' },
            { who: 'Lucía', text: 'Por la mañana. [[Siempre|teal]] corro temprano, antes del trabajo. ¿Y tú?', en: 'In the morning. I always run early, before work. And you?' },
            { who: 'Daniel', text: 'Yo voy al gimnasio [[a veces|teal]], [[una vez por semana|blue]] más o menos. Solo no es divertido.', en: 'I go to the gym sometimes, about once a week. Alone it is no fun.' },
            { who: 'Lucía', text: 'Entonces, ¿corremos juntos? ¿Puedes los martes?', en: 'So, shall we run together? Can you do Tuesdays?' },
            { who: 'Daniel', text: 'Los martes, sí. Los jueves [[casi nunca|orange]] puedo: trabajo hasta tarde.', en: 'Tuesdays, yes. Thursdays I can hardly ever do: I work late.' },
            { who: 'Lucía', text: 'Bueno. ¿Y el fin de semana? Yo [[normalmente|teal]] nado [[los sábados|blue]].', en: 'OK. And the weekend? I usually swim on Saturdays.' },
            { who: 'Daniel', text: '¡Los sábados, perfecto! Pero los domingos [[no entreno nunca|orange]]: es el día de mi familia.', en: 'Saturdays, perfect! But I never train on Sundays: it is my family day.' },
            { who: 'Lucía', text: 'Muy bien: martes y sábado. ¿Empezamos [[este martes|violet]]?', en: 'Great: Tuesday and Saturday. Shall we start this Tuesday?' },
            { who: 'Daniel', text: '¡Claro! [[Mañana|violet]], temprano, en el parque.', en: 'Of course! Tomorrow, early, in the park.' },
          ], notes: {
            'todos los días': 'Expresión larga de frecuencia: **todos los días** (every day). «Casi» la hace un poco menos: almost every day.',
            'Los martes y los jueves': '**Los** + día = cada semana, ese día. Es un hábito: cada martes y cada jueves.',
            'Siempre': '**Siempre** antes del verbo: siempre corro. Sin excepción, 100 %.',
            'a veces': '**A veces** (sometimes): dos palabras. Daniel no va al gimnasio todos los días.',
            'una vez por semana': '**Una vez por semana** precisa la frecuencia: once a week. Con dos: dos **veces**.',
            'casi nunca': '**Casi nunca** antes del verbo, sin «no»: casi nunca puedo (hardly ever).',
            'normalmente': '**Normalmente** antes del verbo: un hábito, casi siempre (usually).',
            'los sábados': 'Otra vez **los** + día: cada sábado. Lucía nada todos los sábados.',
            'no entreno nunca': '**No + verbo + nunca**: nunca va después del verbo, así que necesita «no» antes. = Nunca entreno.',
            'este martes': '**Este martes**: un día concreto, una sola vez. No es un hábito.',
            'Mañana': '**Mañana** (tomorrow) es tiempo puntual: hoy es lunes, mañana es este martes.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué días corre Lucía?', options: ['Los domingos.', 'Los martes y los jueves.', 'Solo los sábados.'], answer: 1, why: '«Los martes y los jueves corro en el parque».', en: 'Which days does Lucía run?' },
            { prompt: '¿Con qué frecuencia va Daniel al gimnasio?', options: ['Nunca.', 'Una vez por semana, más o menos.', 'Todos los días.'], answer: 1, why: '«A veces, una vez por semana más o menos».', en: 'How often does Daniel go to the gym?' },
            { prompt: '¿Por qué Daniel no entrena los domingos?', options: ['Es el día de su familia.', 'Trabaja hasta tarde.', 'Nada con Lucía.'], answer: 0, why: '«Los domingos no entreno nunca: es el día de mi familia».', en: 'Why does Daniel not train on Sundays?' },
          ] },
        ] },
        { title: '¿Hábito o una vez? · Habit or once?', blocks: [
          { kind: 'classify', title: 'Del diálogo · From the dialogue', categories: [
            { id: 'habito', label: 'HÁBITO · se repite', tone: 'blue' },
            { id: 'puntual', label: 'UNA VEZ · día concreto', tone: 'violet' },
          ], items: [
            { text: 'Los martes corro en el parque.', answer: 'habito', why: 'Los + día: cada martes.' },
            { text: '¿Empezamos este martes?', answer: 'puntual', why: 'Este martes: un día concreto.' },
            { text: 'Siempre corro temprano.', answer: 'habito', why: 'Siempre: se repite sin excepción.' },
            { text: 'Mañana corremos en el parque.', answer: 'puntual', why: 'Mañana: una vez, un día concreto.' },
            { text: 'Normalmente nado los sábados.', answer: 'habito', why: 'Normalmente + los sábados: costumbre.' },
            { text: 'Hoy tomamos un café en la oficina.', answer: 'puntual', why: 'Hoy: un día concreto.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Por qué Lucía dice "los martes" y después "este martes"?». Respuesta esperada: el primero es su hábito, cada semana; el segundo es un día concreto, el primer día juntos.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Cada cuánto? How often?',
      steps: [
        { title: 'Elige la expresión · Choose the expression', blocks: [
          { kind: 'choice', items: [
            { context: 'Cada martes, sin excepción. (Every Tuesday.)', prompt: 'Lucía corre ___ en el parque.', options: ['el martes', 'martes los', 'los martes'], answer: 2, why: 'Hábito con un día: los + día.', en: 'Lucía runs in the park on Tuesdays.' },
            { context: 'El agua del mar está muy fría. (The sea is very cold.)', prompt: 'Daniel ___ nada en el mar.', options: ['nunca', 'no nunca', 'nunca no'], answer: 0, why: 'Nunca antes del verbo, solo: nunca nada.', en: 'Daniel never swims in the sea.' },
            { context: 'Es su costumbre, pero hoy es diferente. (Her habit, but today is different.)', prompt: '___ desayuno en casa, pero hoy desayuno en la oficina.', options: ['Este lunes', 'Mañana', 'Normalmente'], answer: 2, why: 'Una costumbre: normalmente. Hoy es la excepción.', en: 'I usually have breakfast at home, but today I have breakfast at the office.' },
            { context: 'Cero veces. (Zero times.)', prompt: 'No cenamos ___ después de las once.', options: ['a veces', 'nunca', 'siempre'], answer: 1, why: 'No + verbo + nunca: cero veces.', en: 'We never have dinner after eleven.' },
            { context: 'Quieres saber cuántas veces. (You want to know how often.)', prompt: '¿___ vas al gimnasio? — Dos veces por semana.', options: ['Dónde', 'Con quién', 'Con qué frecuencia'], answer: 2, why: 'La respuesta es una frecuencia: ¿con qué frecuencia…?', en: 'How often do you go to the gym? — Twice a week.' },
          ] },
        ] },
        { title: '¿Mucho o poco? · Often or rarely?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases · Sort the sentences', categories: [
            { id: 'mucho', label: 'MUCHO · often', tone: 'blue' },
            { id: 'aveces', label: 'A VECES · sometimes', tone: 'teal' },
            { id: 'poco', label: 'CASI NUNCA O NUNCA · rarely / never', tone: 'orange' },
          ], items: [
            { text: 'Daniel trabaja hasta tarde todos los días.', answer: 'mucho', why: 'Todos los días: mucho.' },
            { text: 'Lucía normalmente corre antes del trabajo.', answer: 'mucho', why: 'Normalmente ≈ 80 %: mucho.' },
            { text: 'A veces comemos juntos en la oficina.', answer: 'aveces', why: 'A veces: sometimes.' },
            { text: 'Daniel no va casi nunca al gimnasio los viernes.', answer: 'poco', why: 'No + verbo + casi nunca: hardly ever.' },
            { text: 'Los domingos no entrenamos nunca.', answer: 'poco', why: 'No + verbo + nunca: never.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Yo voy nunca al parque.', ok: false, options: ['Yo nunca voy al parque.', 'Yo no nunca voy al parque.', 'Yo nunca no voy al parque.'], answer: 0, why: 'Nunca antes del verbo, sin «no». (También: «Yo no voy nunca al parque».)' },
            { sentence: 'Los sábados nado en la piscina.', ok: true, why: 'Correcta: los + día = un hábito, cada sábado.' },
            { sentence: 'Daniel come en la oficina todos días.', ok: false, options: ['Daniel come en la oficina todos los días.', 'Daniel come en la oficina todo el día.', 'Daniel come en la oficina toda día.'], answer: 0, why: 'Every day = todos los días. «Todo el día» es «all day», otro significado.' },
            { sentence: 'Lucía corre dos vez por semana.', ok: false, options: ['Lucía corre dos veces por semana.', 'Lucía corre dos vez a semana.', 'Lucía corre dos veces en semana.'], answer: 0, why: 'Plural de vez: veces. Y «por semana» (o «a la semana»).' },
            { sentence: 'No entreno casi nunca los viernes.', ok: true, why: 'Correcta: no + verbo + casi nunca. = Casi nunca entreno los viernes.' },
          ] },
        ] },
        { title: 'Completa el chat · Complete the chat', blocks: [
          { kind: 'chat-fill', title: 'Lunes por la noche · Monday night', lines: [
            { who: 'Daniel', text: 'Lucía, una pregunta: ¿___ corres? ¿Solo los martes?', options: ['con qué frecuencia', 'cuándo no', 'qué vez'], answer: 0, why: 'Daniel pregunta cuántas veces: ¿con qué frecuencia?' },
            { who: 'Lucía', text: 'Dos ___ por semana: martes y jueves.', options: ['vez', 'vezes', 'veces'], answer: 2, why: 'Con dos: veces (z → c).' },
            { who: 'Daniel', text: 'Yo ___ corro. ¡Solo voy al gimnasio!', options: ['nunca', 'no nunca', 'siempre'], answer: 0, why: 'Daniel solo va al gimnasio: nunca corre. Nunca antes del verbo, sin «no».' },
            { who: 'Lucía', text: 'Pues mañana es tu primera vez. ¿Empezamos ___?', options: ['siempre', 'este martes', 'los martes'], answer: 1, why: 'Un día concreto, una vez: este martes.' },
            { who: 'Daniel', text: '¡Sí! Pero el domingo no corro, ¿eh? Los domingos no entreno ___.', options: ['todos', 'nunca', 'a veces'], answer: 1, why: 'No + verbo + nunca: Daniel nunca entrena los domingos.' },
            { who: 'Lucía', text: 'Ja, ja. Tranquilo. ¡Hasta mañana!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['nunca', 'Daniel', 'domingos', 'entrena', 'los'], accept: ['Daniel nunca entrena los domingos', 'Los domingos Daniel nunca entrena'], en: 'Daniel never trains on Sundays.' },
            { tiles: ['no', 'nunca', 'Lucía', 'tarde', 'cena'], accept: ['Lucía no cena nunca tarde', 'Lucía no cena tarde nunca'], en: 'Lucía never has dinner late.' },
            { tiles: ['por', 'semana', 'vez', 'una', 'Nado'], accept: ['Nado una vez por semana', 'Una vez por semana nado'], en: 'I swim once a week.' },
          ] },
        ] },
        { title: 'Escríbelo · Write it', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase · Write the sentence', items: [
            { prompt: 'Voy nunca al gimnasio los domingos.', instruction: 'Corrige la frase. Puedes usar «nunca» antes del verbo o «no… nunca».', accept: ['Nunca voy al gimnasio los domingos', 'No voy nunca al gimnasio los domingos', 'No voy al gimnasio nunca los domingos', 'Los domingos nunca voy al gimnasio', 'Los domingos no voy nunca al gimnasio', 'Los domingos no voy al gimnasio nunca', 'Yo nunca voy al gimnasio los domingos', 'Yo no voy nunca al gimnasio los domingos'] },
            { prompt: 'I swim once a week.', instruction: 'Escribe la frase en español. (to swim = nadar)', accept: ['Nado una vez por semana', 'Nado una vez a la semana', 'Una vez por semana nado', 'Una vez a la semana nado', 'Yo nado una vez por semana', 'Yo nado una vez a la semana'] },
            { prompt: 'Lucía corre los martes. (every Tuesday)', instruction: 'Cambia la frase: Lucía corre solo este martes, una vez. (only this Tuesday)', accept: ['Lucía corre este martes', 'Este martes Lucía corre', 'Lucía corre el martes', 'El martes Lucía corre', 'Este martes corre Lucía'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una nota de voz de Lucía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Lucía manda una nota de voz · Lucía sends a voice note', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye una expresión de frecuencia (siempre, nunca, los martes…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las expresiones de frecuencia que oyes. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Nota de voz para Daniel', channel: 'NOTA DE VOZ · DE LUCÍA, DOMINGO POR LA NOCHE', src: '/audio/grammar-live/330.mp3',
            before: 'El domingo por la noche, Lucía manda una nota de voz a Daniel con su horario de la semana. ¿Qué crees que dice? (On Sunday night Lucía sends Daniel a voice note with her weekly schedule. What do you think she says?)',
            gist: { prompt: '¿Para qué manda Lucía la nota de voz? · Why does Lucía send it?', options: ['Para hablar del trabajo de Daniel.', 'Para proponer días para entrenar juntos.', 'Para cancelar todo el deporte.'], answer: 1, why: '«Ya tengo mi horario… ¿Quieres venir? Entonces, ¿martes, jueves y sábado?».', en: 'Why does Lucía send the voice note?' },
            details: [
              { prompt: '¿Qué hace Lucía los martes y los jueves? · Tuesdays and Thursdays?', options: ['Nada en la piscina.', 'Trabaja hasta tarde.', 'Corre en el parque, siempre temprano.'], answer: 2, why: '«Los martes y los jueves corro en el parque, siempre temprano».', en: 'What does Lucía do on Tuesdays and Thursdays?' },
              { prompt: '¿Por qué no puede los lunes? · Why not Mondays?', options: ['Va al gimnasio.', 'Trabaja hasta muy tarde.', 'Nada con su mamá.'], answer: 1, why: '«Los lunes no puedo: trabajo hasta muy tarde».', en: 'Why can she not train on Mondays?' },
              { prompt: '¿Con qué frecuencia entrena Lucía los viernes? · Fridays?', options: ['Siempre.', 'Dos veces.', 'Casi nunca.'], answer: 2, why: '«Los viernes casi nunca entreno, porque estoy muy cansada».', en: 'How often does Lucía train on Fridays?' },
              { prompt: '¿Qué pasa este sábado? · What about this Saturday?', options: ['Lucía nada con Daniel.', 'Lucía corre todo el día.', 'Lucía no puede: es el cumpleaños de su mamá.'], answer: 2, why: '«Este sábado no puedo: es el cumpleaños de mi mamá».', en: 'What happens this Saturday?' },
            ],
            transcript: 'Hola, Daniel, soy Lucía. Ya tengo mi horario de la semana. [[Los martes y los jueves|blue]] corro en el parque, [[siempre|teal]] temprano, antes del trabajo. ¿Quieres venir? [[Los lunes|blue]] no puedo: trabajo hasta muy tarde. [[Los viernes|blue]] [[casi nunca|orange]] entreno, porque estoy muy cansada. Y [[normalmente|teal]] nado [[los sábados|blue]] por la mañana. Tú [[no entrenas nunca|orange]] los domingos, ¿verdad? Es el día de tu familia. Entonces, ¿martes, jueves y sábado? Ah, pero [[este sábado|violet]] no puedo: es el cumpleaños de mi mamá. Hablamos mañana en la oficina. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es Daniel y responde a la nota de voz con tres frases: qué días puede, qué días no puede nunca y una propuesta para este fin de semana.', self: 'Responde a Lucía en voz alta como Daniel: qué días puedes, qué no haces nunca y una propuesta para este fin de semana. (Answer as Daniel: which days you can, what you never do, and a plan for this weekend.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu semana', coach: 'Habla de ti. Talk about yourself.',
      steps: [
        { title: 'Tus hábitos · Your habits', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres un compañero de trabajo que busca a alguien para entrenar. Haces las preguntas con tú y tu alumno responde con frases completas y una expresión de frecuencia. Tú repites su frase bien y sigues.', self: 'Lee la pregunta, responde en voz alta con una expresión de frecuencia y, si quieres, escribe tu respuesta. (Read the question and answer aloud with a frequency expression.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces todos los días? · What do you do every day?', followUps: ['¿Desayunas siempre en casa? (Always at home?)', '¿Trabajas todos los días o solo de lunes a viernes? (Every day?)'], phrases: ['[[Todos los días|blue]] …', '[[Siempre|teal]] desayuno …', '[[Normalmente|teal]] trabajo …'], hint: 'Una expresión de frecuencia + verbo en presente: «Siempre desayuno café».', example: 'Todos los días trabajo en la oficina. Siempre desayuno temprano, en casa, y normalmente como con mis compañeros.', next: 'Ahora, el deporte.' },
            { q: '¿Con qué frecuencia haces deporte? · How often do you do sport?', followUps: ['¿Qué deporte? (Which sport?)', '¿Solo o con amigos? (Alone or with friends?)'], phrases: ['[[Dos veces por semana|blue]] …', '[[Una vez por semana|blue]] …', '[[A veces|teal]] corro / nado / camino.'], hint: '«Una vez», pero «dos veces». Por semana o a la semana.', example: 'Hago deporte dos veces por semana. Normalmente camino en el parque, y a veces nado.', next: 'Ahora, lo que no haces.', teacher: 'Si tu alumno no hace deporte, perfecto: «Casi nunca hago deporte» también es una respuesta real.' },
            { q: '¿Qué no haces nunca? · What do you never do?', followUps: ['¿Y qué haces casi nunca? (Hardly ever?)', 'Dilo de las dos maneras. (Say it both ways.)'], phrases: ['[[Nunca|orange]] ceno …', '[[No|orange]] trabajo [[nunca|orange]] …', '[[Casi nunca|orange]] …'], hint: 'Nunca + verbo, o no + verbo + nunca. Sin «no», nunca va antes del verbo.', example: 'Nunca ceno tarde. No trabajo nunca los domingos. Y casi nunca voy al cine.', next: 'Ahora, tus días.' },
            { q: '¿Qué haces los fines de semana? · What do you do at weekends?', followUps: ['¿Y los sábados por la mañana? (Saturday mornings?)', '¿Los domingos estás en casa? (At home on Sundays?)'], phrases: ['[[Los sábados|blue]] …', '[[Los domingos|blue]] …', '[[Normalmente|teal]] salgo con …'], hint: '«Los» + día = cada semana, ese día.', example: 'Los sábados normalmente salgo con mis amigos. Los domingos como con mi familia.', next: 'Y ahora, esta semana.' },
            { q: '¿Y este sábado? ¿Es diferente? · And this Saturday? Is it different?', followUps: ['¿Qué haces hoy? (What are you doing today?)', '¿Y mañana? (And tomorrow?)'], phrases: ['[[Este sábado|violet]] …', '[[Hoy|violet]] …', 'Normalmente …, pero [[este sábado|violet]] …'], hint: 'Hábito: los sábados. Una vez: este sábado, hoy, mañana.', example: 'Normalmente nado los sábados, pero este sábado no nado: como con mi hermana.', next: 'Para terminar, organiza el entrenamiento.' },
            { q: 'Tu compañero quiere entrenar contigo. Propón días. · Your colleague wants to train with you. Suggest days.', followUps: ['¿Y por la mañana o por la tarde? (Morning or afternoon?)', '¿Empezamos esta semana? (Start this week?)', '¿Qué días no puedes nunca? (Which days never?)'], phrases: ['¿Puedes [[los martes|blue]]?', '[[Los lunes|blue]] no puedo [[nunca|orange]].', '¿Empezamos [[este jueves|violet]]?'], hint: 'Di qué días puedes, qué días no puedes nunca y propón un primer día concreto.', example: 'Los martes y los jueves puedo, siempre temprano. Los lunes no puedo nunca: trabajo hasta tarde. ¿Empezamos este jueves?', teacher: 'Respondes como Daniel y aceptas o cambias un día: «El jueves no puedo, ¿el sábado?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿con qué frecuencia…?», «¿qué no haces nunca?») y tú respondes.', self: 'Ahora tú haces las preguntas en voz alta («¿Con qué frecuencia…?», «¿Qué haces los sábados?») y respondes como Lucía. (Now ask the questions and answer as Lucía.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu mensaje para Daniel', coach: 'Tus días, claros. Your days, clear.',
      steps: [
        { title: 'Un mensaje a un compañero · A message to a colleague', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos la posición de nunca y los / el + día. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien dónde va nunca. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Respuesta a Daniel · Reply to Daniel', situation: 'Daniel, tu compañero de oficina, busca personas para entrenar juntos. Escribe un mensaje corto con tu semana y propón un día para empezar. (Daniel, your office colleague, is looking for people to train with. Write a short message about your week and suggest a day to start.)', task: [
            'Di dos hábitos con siempre, normalmente o a veces. (Two habits.)',
            'Di qué días puedes con los + día o una expresión como dos veces por semana. (Which days.)',
            'Di algo que no haces nunca: «nunca + verbo» o «no + verbo + nunca». (Something you never do.)',
            'Propón un primer día concreto con una pregunta: «¿Empezamos este…?». (Suggest a first day.)',
          ], starters: ['Hola, Daniel:', 'Normalmente …', 'Siempre …', 'Los martes …', 'Dos veces por semana …', 'Nunca … / No … nunca', '¿Empezamos este …?', 'Un abrazo.'],
            words: ['siempre', 'normalmente', 'a veces', 'casi nunca', 'nunca', 'todos los días', 'una vez por semana', 'dos veces por semana', 'los lunes', 'los sábados', 'este martes', 'temprano', 'tarde', 'correr', 'nadar', 'entrenar'],
            model: 'Hola, Daniel: ¡Gracias por la invitación! Yo [[normalmente|teal]] trabajo hasta tarde [[los lunes|blue]] y [[los miércoles|blue]], pero [[los martes|blue]] y [[los jueves|blue]] tengo la mañana libre. Corro [[dos veces por semana|blue]], [[siempre|teal]] temprano. [[Los domingos|blue]] [[no entreno nunca|orange]]: es el día de mi familia. ¿Empezamos [[este jueves|violet]] en el parque? Un abrazo, Alex',
            minWords: 35,
            checks: [
              { label: 'Una palabra de frecuencia: siempre, normalmente, a veces… (one-word frequency)', pattern: '(?<!\\p{L})(?:siempre|normalmente|generalmente|a\\s+veces)(?!\\p{L})', tip: 'Di un hábito: «Normalmente corro temprano», «A veces nado».' },
              { label: 'Una expresión larga: los martes, dos veces por semana… (a longer expression)', pattern: '(?<!\\p{L})(?:todos\\s+los\\s+d[ií]as|(?:una|dos|tres|cuatro|cinco)\\s+ve(?:z|ces)\\s+(?:por|a\\s+la)\\s+semana|los\\s+(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bados|domingos))(?!\\p{L})', tip: 'Di qué días: «Los martes puedo», «Corro dos veces por semana».' },
              { label: 'Algo que nunca haces (something you never do)', pattern: '(?<!\\p{L})nunca(?!\\p{L})', tip: '«Nunca entreno los domingos» o «No entreno nunca los domingos».' },
              { label: 'Una pregunta para proponer un día (a question)', pattern: '¿[^?]+\\?', tip: 'Propón: «¿Empezamos este jueves?».' },
            ],
            warnings: [
              { pattern: '(?<!(?<!\\p{L})no\\s+)(?<!\\p{L})(?:voy|vas|va|vamos|van|corro|corres|corre|corremos|entreno|entrenas|entrena|entrenamos|nado|trabajo|trabaja|salgo|sale|ceno|cena|desayuno|como|come|puedo|puede)\\s+(?:casi\\s+)?nunca(?!\\p{L})', why: 'Si nunca va después del verbo, pon «no» antes del verbo: «No voy nunca». O pon nunca antes: «Nunca voy».' },
              { pattern: '(?<!\\p{L})no\\s+(?:casi\\s+)?nunca(?!\\p{L})', why: '«No» y «nunca» juntos antes del verbo no funcionan: «Nunca voy» o «No voy nunca».' },
              { pattern: '(?<!\\p{L})nunca\\s+no(?!\\p{L})', why: 'Con nunca antes del verbo, sobra el «no»: «Nunca voy».' },
              { pattern: '(?<!\\p{L})todos\\s+d[ií]as(?!\\p{L})', why: 'Falta el artículo: «todos los días».' },
              { pattern: '(?<!\\p{L})(?:dos|tres|cuatro|cinco)\\s+vez(?!\\p{L})', why: 'Con dos, tres… el plural es «veces»: «dos veces por semana».' },
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
            { tone: 'teal', label: 'UNA PALABRA', formula: 'siempre · normalmente · a veces + verbo', example: 'Siempre desayuno temprano.', caption: 'antes del verbo', en: 'One word, before the verb' },
            { tone: 'blue', label: 'EXPRESIÓN LARGA', formula: 'todos los días · dos veces por semana · los lunes', example: 'Los martes corro en el parque.', caption: 'al principio o al final', en: 'Longer expressions, at the start or the end' },
            { tone: 'orange', label: 'NUNCA', formula: 'nunca + verbo · no + verbo + nunca', example: 'Nunca ceno tarde. = No ceno nunca tarde.', caption: 'nunca después del verbo necesita no', en: 'Never after the verb needs “no”' },
            { tone: 'violet', label: 'UNA VEZ', formula: 'hoy · mañana · el / este sábado', example: 'Este sábado no nado.', caption: 'un día concreto, no un hábito', en: 'One point in time, not a habit' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de hablar, piensa: ¿se repite o pasa una vez? Si se repite: **los sábados, siempre, a veces**. Si pasa una vez: **este sábado, hoy**. Y si nunca va después del verbo, pon **no** delante: «No voy nunca».', en: 'Before you speak, think: does it repeat or happen once? If it repeats: los sábados, siempre, a veces. If it happens once: este sábado, hoy. And if nunca comes after the verb, put no in front: “No voy nunca”.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Daniel ___ los domingos.', options: ['no nunca entrena', 'nunca entrena', 'entrena nunca'], answer: 1, why: 'Nunca antes del verbo, sin «no».', en: 'Daniel never trains on Sundays.' },
            { prompt: 'Lucía corre ___: es su costumbre.', options: ['los martes', 'el martes', 'este martes'], answer: 0, why: 'Costumbre con un día: los + día.', en: 'Lucía runs on Tuesdays: it is her habit.' },
            { prompt: 'Comemos juntos ___ por semana.', options: ['dos veces', 'dos vez', 'dos tiempos'], answer: 0, why: 'Twice = dos veces.', en: 'We eat together twice a week.' },
            { prompt: 'Trabajo ___: de la mañana a la noche.', options: ['todos los días', 'todos días', 'todo el día'], answer: 2, why: 'All day = todo el día.', en: 'I work all day: from morning till night.' },
            { prompt: '¿___ nadas? — Una vez por semana.', options: ['Dónde', 'Con quién', 'Con qué frecuencia'], answer: 2, why: 'La respuesta es una frecuencia.', en: 'How often do you swim? — Once a week.' },
          ] },
        ] },
        { title: 'Aplícalo · Apply it', mascot: '/autoestudio/mascot/noting.webp', coach: 'Una situación nueva. A new situation.', blocks: [
          { kind: 'rewrite', title: 'Una situación nueva · A new situation', items: [
            { prompt: 'My neighbour Marta never cooks on Fridays.', instruction: 'Escribe la frase en español. (neighbour = vecina, to cook = cocinar)', accept: ['Mi vecina Marta nunca cocina los viernes', 'Mi vecina Marta no cocina nunca los viernes', 'Los viernes mi vecina Marta nunca cocina', 'Los viernes mi vecina Marta no cocina nunca'] },
            { prompt: 'We have dinner together on Sundays.', instruction: 'Escribe la frase en español: es un hábito. (together = juntos)', accept: ['Cenamos juntos los domingos', 'Los domingos cenamos juntos', 'Nosotros cenamos juntos los domingos', 'Los domingos nosotros cenamos juntos'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 031 · Verbos reflexivos cotidianos', text: 'Ya hablas de tus hábitos: «siempre desayuno temprano», «nunca ceno tarde». Pero muchas rutinas de la mañana usan verbos con **me, te, se**: «me levanto» (I get up), «me ducho» (I shower). En la clase 031 aprendes estos verbos para contar tu rutina completa.', en: 'You can now talk about your habits: “I always have breakfast early”, “I never have dinner late”. But many morning routines use verbs with me, te, se: “me levanto” (I get up), “me ducho” (I shower). In class 031 you learn these verbs to describe your whole routine.', href: '/gramatica/verbos-reflexivos-cotidianos', label: 'Ir a la clase 031' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué haces siempre, qué haces a veces y qué no haces nunca?». Respuesta esperada con tres expresiones y nunca en una posición correcta. Tarea: mandar el mensaje de Escribir a un compañero real y traer su respuesta.' },
        ] },
      ],
    },
  ],
};
