import type { LiveLesson } from '../types';

/**
 * Lesson 115 · B1 · Soler, seguir, volver a y dejar de.
 * Raúl rebuilds his Spanish routine after a change of job; his story runs
 * through every section.
 */
export const lesson: LiveLesson = {
  id: 115,
  level: 'B1',
  title: 'Seguir, volver y dejar de hacer algo',
  subtitle: 'Hablar de hábitos, de lo que continúa, de lo que retomas y de lo que abandonas con soler, seguir, volver a y dejar de.',
  legend: [
    { tone: 'blue', label: 'Soler + infinitivo · un hábito' },
    { tone: 'teal', label: 'Seguir + gerundio · continúa' },
    { tone: 'orange', label: 'Volver a + infinitivo · otra vez' },
    { tone: 'violet', label: 'Dejar de + infinitivo · ya no' },
  ],
  optionNotes: {
    'suelo': '«Soler» habla de un hábito: algo que haces normalmente.',
    'sigo': '«Seguir» va con gerundio y dice que la acción no se interrumpió.',
    'vuelvo a': '«Volver a» dice que retomas algo que habías dejado o que lo repites.',
    'dejé de': '«Dejar de» dice que una actividad terminó: ya no la haces.',
    'Sigo aprender.': 'Después de «seguir» va gerundio (-ando, -iendo), no infinitivo.',
    'Sigo a aprender.': '«Seguir» no lleva preposición: sigo aprendiendo.',
    'Volví tomar café.': '«Volver» necesita «a» antes del infinitivo: volví a tomar.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuatro verbos para contar cambios', coach: 'Una rutina cambia: algo sigue, algo vuelve, algo termina.',
      steps: [
        { title: 'Soler + infinitivo · Habits', blocks: [
          { kind: 'lead', text: 'Raúl estudia español. Cambió de trabajo y su rutina cambió también. Para contarlo necesita cuatro herramientas: **soler**, **seguir**, **volver a** y **dejar de**. Empezamos por los hábitos.', en: 'Raúl is learning Spanish. He changed jobs and his routine changed too. To talk about it he needs four tools: soler, seguir, volver a and dejar de. We start with habits.' },
          { kind: 'guide', text: { teacher: 'Pregunta antes de la teoría: «¿Qué haces normalmente los domingos?». Anota la respuesta y después reformúlala con «suelo».', self: 'Piensa en algo que haces normalmente los domingos. Después lee la explicación y di tu frase con «suelo».' } },
          { kind: 'concept', tone: 'blue', label: 'SOLER + INFINITIVO', question: '¿Qué haces normalmente?', en: '“Soler” + infinitive describes what you usually do: present “suelo” for a current habit, imperfect “solía” for a habit from a past stage of life (like “I used to”)',
            formula: ['suelo / sueles / suele… + infinitivo', 'solía / solías… + infinitivo'],
            meaning: 'Presenta una **costumbre**. Con el presente (**suelo**) hablamos de un hábito actual. Con el imperfecto (**solía**) hablamos de un hábito de una etapa pasada.',
            examples: [
              { es: '[[Suelo cocinar|blue]] los domingos.', en: 'I usually cook on Sundays.' },
              { es: 'Raúl [[suele reservar|blue]] veinte minutos después de comer.', en: 'Raúl usually sets aside twenty minutes after lunch.' },
              { es: 'Antes [[solía salir|blue]] más con mis amigos.', en: 'I used to go out more with my friends.' },
              { es: 'De niños, [[solíamos pasar|blue]] el verano en el pueblo.', en: 'As children, we used to spend the summer in the village.' },
            ],
            note: '«Suelo cocinar» = normalmente cocino. Es lo mismo que decir «normalmente», «casi siempre» o «por lo general».' },
          { kind: 'table', title: 'El verbo soler', head: ['Persona', 'Presente (ahora)', 'Imperfecto (antes)'], rows: [
            ['yo', '[[suelo|blue]]', '[[solía|blue]]'],
            ['tú', '[[sueles|blue]]', '[[solías|blue]]'],
            ['él, ella, usted', '[[suele|blue]]', '[[solía|blue]]'],
            ['nosotros, nosotras', '[[solemos|blue]]', '[[solíamos|blue]]'],
            ['ellos, ellas, ustedes', '[[suelen|blue]]', '[[solían|blue]]'],
          ], note: 'Cambia **o → ue** en el presente (como «volver»), excepto en «solemos». «Soler» casi solo se usa en presente e imperfecto: no decimos «soleré».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Antes era habitual; ahora no. ¿Qué frase encaja?', options: ['Solía nadar todas las semanas.', 'Suelo nadar todas las semanas.', 'Soleré nadar todas las semanas.'], answer: 0, why: '«Solía» presenta un hábito de una etapa pasada.', en: 'It used to be a habit; now it isn’t. Which sentence fits?' },
            { prompt: 'Mi hermana ___ desayunar fruta.', options: ['suele', 'sole', 'suelo'], answer: 0, why: 'Ella → suele (o → ue).', en: 'My sister ___ (usually) has fruit for breakfast.' },
            { prompt: '«Suelo leer antes de dormir» significa…', options: ['Normalmente leo antes de dormir.', 'Leí una vez antes de dormir.', 'Voy a leer esta noche.'], answer: 0, why: '«Soler» expresa costumbre: normalmente.', en: '“Suelo leer antes de dormir” means…' },
          ] },
        ] },
        { title: 'Seguir + gerundio · Still doing it', mascot: '/brand/mascot/studying.webp', coach: 'Empezó antes y no se ha interrumpido.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SEGUIR + GERUNDIO', question: '¿Todavía lo haces?', en: '“Seguir” + gerund says an action started earlier and is still going on, without a break, like English “still + -ing”',
            formula: ['sigo / sigues / sigue… + gerundio (-ando, -iendo)'],
            meaning: 'La acción **empezó antes** y **continúa** ahora: no se interrumpió. Después de «seguir» va **gerundio**, nunca infinitivo. También se usa «continuar» + gerundio con el mismo sentido.',
            examples: [
              { es: '[[Sigo viviendo|teal]] en la misma ciudad.', en: 'I still live in the same city.' },
              { es: 'Raúl [[sigue usando|teal]] su cuaderno antiguo.', en: 'Raúl is still using his old notebook.' },
              { es: '¿[[Sigues trabajando|teal]] en el hospital?', en: 'Are you still working at the hospital?' },
              { es: 'Raúl [[continúa hablando|teal]] con una compañera los viernes.', en: 'Raúl still talks to a colleague on Fridays.' },
            ],
            note: 'Para decir que algo **todavía no** pasa: **seguir sin + infinitivo**. «[[Sigo sin entender|teal]] el subjuntivo» = todavía no lo entiendo.' },
          { kind: 'table', title: 'El gerundio y el verbo seguir', head: ['Infinitivo', 'Gerundio', 'Ejemplo con seguir'], rows: [
            ['trabaj**ar**', 'trabaj**ando**', 'Sigo trabajando.'],
            ['aprend**er**', 'aprend**iendo**', 'Sigues aprendiendo.'],
            ['viv**ir**', 'viv**iendo**', 'Sigue viviendo allí.'],
            ['leer, oír, ir', '**leyendo, oyendo, yendo**', 'Seguimos leyendo.'],
            ['dormir, pedir, decir', '**durmiendo, pidiendo, diciendo**', 'Siguen durmiendo.'],
          ], note: 'Presente de **seguir**: sigo, sigues, sigue, seguimos, siguen (e → i). Primero aprende los regulares; los irregulares cambian la vocal (o → u, e → i) o usan **-yendo**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Todavía continúa. ¿Qué eliges?', options: ['Sigo aprender.', 'Sigo a aprender.', 'Sigo aprendiendo.'], answer: 2, why: '«Seguir» va con gerundio: aprendiendo.', en: 'It is still going on. What do you choose?' },
            { prompt: 'Mis padres siguen ___ en el mismo barrio.', options: ['viviendo', 'vivir', 'a vivir'], answer: 0, why: 'Seguir + gerundio: viviendo.', en: 'My parents are still ___ (living) in the same neighbourhood.' },
            { prompt: '«Sigo sin tener coche» significa…', options: ['Todavía no tengo coche.', 'Ya no tengo coche.', 'Vuelvo a tener coche.'], answer: 0, why: 'Seguir sin + infinitivo: la situación de no tenerlo continúa.', en: '“Sigo sin tener coche” means…' },
          ] },
        ] },
        { title: 'Volver a + infinitivo · Doing it again', mascot: '/brand/mascot/speaking.webp', coach: 'Lo hacías, paraste… y otra vez.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'VOLVER A + INFINITIVO', question: '¿Lo haces otra vez?', en: '“Volver a” + infinitive means you pick something up again after a pause, or do it once more: “again”',
            formula: ['vuelvo / vuelves / vuelve… + a + infinitivo'],
            meaning: '**Retomas** algo que habías dejado, o **repites** una acción. La preposición **a** es obligatoria. Equivale a «otra vez» o «de nuevo».',
            examples: [
              { es: 'Raúl [[vuelve a practicar|orange]] español.', en: 'Raúl is practising Spanish again.' },
              { es: 'Después de la lesión, [[volví a correr|orange]].', en: 'After the injury, I started running again.' },
              { es: '¿Puedes [[volver a explicar|orange]] el ejercicio?', en: 'Can you explain the exercise again?' },
              { es: 'Este año [[he vuelto a leer|orange]] novelas.', en: 'This year I’ve started reading novels again.' },
            ],
            note: '«Vuelvo a ir al gimnasio» = antes iba, lo dejé y ahora voy otra vez.' },
          { kind: 'compare', title: '¿Continúa o se retoma?', columns: [
            { tone: 'teal', label: 'SEGUIR + GERUNDIO', sentence: '[[Sigo leyendo|teal]] novelas.', idea: 'Nunca dejé de leerlas. La actividad continúa sin pausa.', en: 'I never stopped reading them: the activity goes on without a pause.' },
            { tone: 'orange', label: 'VOLVER A + INFINITIVO', sentence: '[[Vuelvo a leer|orange]] novelas.', idea: 'Hubo una pausa. Ahora las leo otra vez.', en: 'There was a pause. Now I read them again.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'La persona retoma el gimnasio. ¿Qué versión es natural?', options: ['Vuelve de ir al gimnasio.', 'Vuelve a ir al gimnasio.', 'Vuelve yendo al gimnasio.'], answer: 1, why: 'Volver a + infinitivo: retoma la actividad.', en: 'The person takes up the gym again. Which version sounds natural?' },
            { prompt: 'Dejé de tocar la guitarra en 2020. Este año ___ tocarla.', options: ['sigo', 'volví a', 'suelo'], answer: 1, why: 'Hubo una pausa y ahora la retomo: volver a.', en: 'I stopped playing the guitar in 2020. This year I ___ playing it.' },
          ] },
        ] },
        { title: 'Dejar de + infinitivo · Stopping', mascot: '/autoestudio/mascot/noting.webp', coach: 'Antes sí. Ahora ya no.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'DEJAR DE + INFINITIVO', question: '¿Ya no lo haces?', en: '“Dejar de” + infinitive means an activity stops or ends: you did it before and you don’t any more, like “stop doing” or “no longer”',
            formula: ['dejo / dejé / he dejado… + de + infinitivo'],
            meaning: 'Una actividad **se interrumpe** o **termina**: antes la hacías y ahora ya no. La preposición **de** es obligatoria.',
            examples: [
              { es: 'Raúl [[dejó de estudiar|violet]] cuando cambió de trabajo.', en: 'Raúl stopped studying when he changed jobs.' },
              { es: '[[He dejado de memorizar|violet]] listas largas.', en: 'I’ve stopped memorising long lists.' },
              { es: 'Mi padre [[dejó de fumar|violet]] hace diez años.', en: 'My father stopped smoking ten years ago.' },
              { es: '¡[[Deja de mirar|violet]] el teléfono!', en: 'Stop looking at your phone!' },
            ],
            note: '«Dejar de» + infinitivo es como «ya no»: «Dejé de comer carne» = ya no como carne.' },
          { kind: 'tip', icon: '!', title: 'Cada verbo con su conexión', text: '**volver a** + infinitivo · **dejar de** + infinitivo · **soler** + infinitivo (sin preposición) · **seguir** + gerundio (sin preposición). La preposición forma parte del verbo: si la cambias o la quitas, la frase se rompe.', en: 'Each verb has its own link word: volver a + infinitive, dejar de + infinitive, soler + infinitive (no preposition), seguir + gerund (no preposition). The preposition is part of the verb: change it or drop it and the sentence breaks.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'La acción terminó voluntariamente. ¿Qué dices?', options: ['Sigo tomando café.', 'Dejé de tomar café.', 'Volví tomar café.'], answer: 1, why: 'Dejar de + infinitivo marca que la actividad terminó.', en: 'The person chose to stop. What do you say?' },
            { prompt: 'Mi hermano dejó ___ jugar al fútbol.', options: ['a', 'de', 'en'], answer: 1, why: 'Dejar **de** + infinitivo.', en: 'My brother stopped ___ playing football.' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Piensa en la historia de la actividad.', blocks: [
          { kind: 'decide', title: 'Piensa en una actividad de tu vida y responde', steps: [
            { q: '¿Hablas de algo que haces (o hacías) normalmente, como costumbre?', yes: 'Usa **soler**: «[[Suelo caminar|blue]] por la tarde» · «Antes [[solía caminar|blue]] más».', no: 'next' },
            { q: '¿La actividad terminó y ahora ya no la haces?', yes: 'Usa **dejar de**: «[[Dejé de fumar|violet]]».', no: 'next' },
            { q: '¿Hubo una pausa y ahora la haces otra vez?', yes: 'Usa **volver a**: «[[Volví a nadar|orange]]».', no: 'Si nunca se interrumpió, usa **seguir** + gerundio: «[[Sigo nadando|teal]]».' },
          ] },
          { kind: 'tip', icon: '⏳', title: 'Una historia completa', text: 'Las cuatro estructuras cuentan juntas una historia: «Antes [[solía correr|blue]]. En 2023 [[dejé de correr|violet]] por una lesión. Este año [[he vuelto a correr|orange]] y [[sigo corriendo|teal]] tres veces por semana».', en: 'The four structures tell a whole story together: a past habit, a stop because of an injury, a restart this year and an activity that is still going on.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección. Pregunta siempre: «¿Qué conexión pide este verbo: a, de, nada o gerundio?».', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Sigo estudiar español.', right: 'Sigo estudiando español.', why: '«Seguir» va con gerundio, no con infinitivo.' },
            { wrong: 'Volví nadar este verano.', right: 'Volví a nadar este verano.', why: '«Volver» necesita «a» antes del infinitivo.' },
            { wrong: 'Dejé fumar hace dos años.', right: 'Dejé de fumar hace dos años.', why: '«Dejar» necesita «de» antes del infinitivo.' },
            { wrong: 'Solo cocinar los domingos.', right: 'Suelo cocinar los domingos.', why: '«Soler» cambia o → ue: suelo. «Solo» es otra palabra.' },
            { wrong: 'Suelo a leer por la noche.', right: 'Suelo leer por la noche.', why: '«Soler» no lleva preposición.' },
            { wrong: 'Sigo a trabajar en el banco.', right: 'Sigo trabajando en el banco.', why: '«Seguir» no lleva preposición y va con gerundio.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno cuatro frases verdaderas sobre su vida, una con cada estructura. Pregunta por cada una: «¿Hubo pausa? ¿Sigue? ¿Terminó?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Rutinas que cambian', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Una rutina nueva · A new routine', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión marcada y explica la historia de esa actividad: ¿sigue, vuelve o terminó?', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Primera clase después de la pausa', setting: 'Raúl vuelve a su clase de español después de unos meses. Habla con Inés, su profesora.', lines: [
            { who: 'Inés', text: '¡Raúl, qué alegría! ¿Cómo estás?', en: 'Raúl, how lovely to see you! How are you?' },
            { who: 'Raúl', text: 'Bien, gracias. Cambié de trabajo y [[dejé de estudiar|violet]] unos meses, pero aquí estoy.', en: 'Fine, thanks. I changed jobs and stopped studying for a few months, but here I am.' },
            { who: 'Inés', text: 'Me alegra mucho que [[vuelvas a venir|orange]]. ¿Cómo es tu rutina ahora?', en: 'I’m really glad you’re coming again. What’s your routine like now?' },
            { who: 'Raúl', text: 'Antes [[solía leer|blue]] por la mañana, pero ahora no tengo tiempo.', en: 'I used to read in the morning, but now I don’t have time.' },
            { who: 'Inés', text: '¿Y cuándo estudias?', en: 'And when do you study?' },
            { who: 'Raúl', text: '[[Suelo reservar|blue]] veinte minutos después de comer.', en: 'I usually set aside twenty minutes after lunch.' },
            { who: 'Inés', text: '¿[[Sigues usando|teal]] el cuaderno de vocabulario?', en: 'Are you still using the vocabulary notebook?' },
            { who: 'Raúl', text: 'Sí, es el mismo de siempre. Y [[sigo hablando|teal]] con Clara los viernes.', en: 'Yes, it’s the same one as always. And I still talk to Clara on Fridays.' },
            { who: 'Inés', text: '¡Muy bien! ¿Y las listas de palabras?', en: 'Very good! And the word lists?' },
            { who: 'Raúl', text: '[[He dejado de memorizar|violet]] listas largas. Ahora escribo mensajes sobre mi día.', en: 'I’ve stopped memorising long lists. Now I write messages about my day.' },
            { who: 'Inés', text: 'Me parece una idea excelente. ¿Y qué tal la motivación?', en: 'I think that’s an excellent idea. And how’s your motivation?' },
            { who: 'Raúl', text: '[[Vuelvo a disfrutar|orange]] las clases. Veo avances pequeños.', en: 'I’m enjoying the classes again. I can see small progress.' },
          ], notes: {
            'dejé de estudiar': 'La actividad **se interrumpió**: con el trabajo nuevo, Raúl ya no estudiaba.',
            'vuelvas a venir': 'Raúl **retoma** las clases después de una pausa. Fíjate: «me alegra que» pide subjuntivo, pero la estructura es la misma: volver a + infinitivo.',
            'solía leer': 'Un **hábito de una etapa pasada**: antes leía por la mañana; ahora, no.',
            'Suelo reservar': 'Un **hábito actual**: normalmente reserva veinte minutos.',
            'Sigues usando': 'Inés pregunta si la actividad **continúa sin pausa**: seguir + gerundio.',
            'sigo hablando': 'Hablar con Clara **nunca se interrumpió**.',
            'He dejado de memorizar': 'Una actividad que **terminó**: ya no memoriza listas.',
            'Vuelvo a disfrutar': 'Antes disfrutaba, después no, y ahora **otra vez** sí.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué actividad no se interrumpió nunca?', options: ['Leer por la mañana.', 'Hablar con Clara los viernes.', 'Memorizar listas largas.'], answer: 1, why: '«Sigo hablando con Clara los viernes»: seguir + gerundio.', en: 'Which activity never stopped?' },
            { prompt: '¿Qué actividad abandonó Raúl?', options: ['Memorizar listas largas.', 'Usar el cuaderno.', 'Escribir mensajes.'], answer: 0, why: '«He dejado de memorizar listas largas».', en: 'Which activity did Raúl give up?' },
          ] },
        ] },
        { title: 'Reencuentro de antiguos compañeros · Old classmates meet again', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'explore', title: 'Diez años después', setting: 'Carmen y Javier estudiaron juntos en la universidad. Se encuentran en la cena de antiguos alumnos.', lines: [
            { who: 'Carmen', text: '¡Javier! ¿[[Sigues viviendo|teal]] en Valencia?', en: 'Javier! Are you still living in Valencia?' },
            { who: 'Javier', text: 'No, me fui a Monterrey hace tres años. ¿Y tú?', en: 'No, I moved to Monterrey three years ago. What about you?' },
            { who: 'Carmen', text: 'Yo sí, en el mismo barrio. ¿Todavía juegas al baloncesto?', en: 'I am, in the same neighbourhood. Do you still play basketball?' },
            { who: 'Javier', text: 'No, [[dejé de jugar|violet]] por una lesión en la rodilla.', en: 'No, I stopped playing because of a knee injury.' },
            { who: 'Carmen', text: '¡Qué pena! Tú [[solías entrenar|blue]] todos los días.', en: 'What a shame! You used to train every day.' },
            { who: 'Javier', text: 'Sí, pero ahora nado. Y este año [[he vuelto a tocar|orange]] la guitarra.', en: 'Yes, but now I swim. And this year I’ve started playing the guitar again.' },
            { who: 'Carmen', text: '¿En serio? ¿Y [[sigues sin cantar|teal]] en público?', en: 'Really? And you still don’t sing in public?' },
            { who: 'Javier', text: 'Ja, ja. Sí, eso no cambia.', en: 'Ha ha. No, that hasn’t changed.' },
            { who: 'Carmen', text: 'Yo [[suelo venir|blue]] a estas cenas todos los años.', en: 'I usually come to these dinners every year.' },
            { who: 'Javier', text: 'Pues yo voy a [[volver a venir|orange]] el año que viene, seguro.', en: 'Well, I’m going to come again next year, for sure.' },
          ], notes: {
            'Sigues viviendo': 'Carmen pregunta si la situación **continúa**. Javier responde que no: ya se mudó.',
            'dejé de jugar': 'El baloncesto **terminó** por una lesión.',
            'solías entrenar': 'Un **hábito del pasado**, de la época de la universidad.',
            'he vuelto a tocar': 'Javier tocaba la guitarra, paró, y este año la **retoma**.',
            'sigues sin cantar': '**Seguir sin + infinitivo**: la situación de no cantar en público continúa.',
            'suelo venir': 'Un **hábito actual**: Carmen viene todos los años.',
            'volver a venir': 'Javier promete **repetir** la experiencia el año que viene.',
          } },
          { kind: 'teacher', text: 'Pide al alumno que imagine que se encuentra con un compañero de la escuela y le haga tres preguntas con «¿Sigues…?» y «¿Todavía…?».' },
        ] },
        { title: '¿Qué pasó con cada actividad? · What happened to each activity?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'sigue', label: 'Continúa', tone: 'teal' },
            { id: 'vuelve', label: 'Se retoma', tone: 'orange' },
            { id: 'termina', label: 'Terminó', tone: 'violet' },
          ], items: [
            { text: 'Sigo hablando con Clara los viernes.', answer: 'sigue', why: 'Seguir + gerundio: nunca se interrumpió.' },
            { text: 'Dejé de jugar al baloncesto.', answer: 'termina', why: 'Dejar de: ya no juega.' },
            { text: 'He vuelto a tocar la guitarra.', answer: 'vuelve', why: 'Volver a: la retoma después de una pausa.' },
            { text: 'He dejado de memorizar listas largas.', answer: 'termina', why: 'Dejar de: ya no lo hace.' },
            { text: 'Vuelvo a disfrutar las clases.', answer: 'vuelve', why: 'Volver a: otra vez disfruta.' },
            { text: '¿Sigues usando el cuaderno?', answer: 'sigue', why: 'Seguir + gerundio: la actividad continúa.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto · Choose by context', blocks: [
          { kind: 'choice', items: [
            { context: 'Corro todos los domingos desde hace años. Es mi costumbre.', prompt: '___ correr los domingos.', options: ['Suelo', 'Vuelvo a', 'Dejo de'], answer: 0, why: 'Una costumbre actual: soler.', en: 'I have run every Sunday for years. It’s my habit. ___ (run) on Sundays.' },
            { context: 'Trabajo en el banco desde 2019 y todavía estoy allí.', prompt: 'Sigo ___ en el banco.', options: ['trabajar', 'trabajando', 'a trabajar'], answer: 1, why: 'Continúa sin pausa: seguir + gerundio.', en: 'I have worked at the bank since 2019 and I’m still there. I’m still ___ at the bank.' },
            { context: 'Fumaba mucho. En 2022 lo dejé y no fumo más.', prompt: 'En 2022 ___ fumar.', options: ['dejé de', 'volví a', 'solía'], answer: 0, why: 'La actividad terminó: dejar de.', en: 'I used to smoke a lot. In 2022 I quit and I don’t smoke any more.' },
            { context: 'No fui al cine en toda la pandemia. Ahora voy otra vez.', prompt: 'Ahora ___ ir al cine.', options: ['sigo', 'dejo de', 'vuelvo a'], answer: 2, why: 'Hubo una pausa y lo retomo: volver a.', en: 'I didn’t go to the cinema during the whole pandemic. Now I go again.' },
            { context: 'De niña, Ana pasaba los veranos con sus abuelos.', prompt: 'De niña, Ana ___ pasar los veranos con sus abuelos.', options: ['suele', 'solía', 'sigue'], answer: 1, why: 'Hábito de una etapa pasada: solía.', en: 'As a girl, Ana spent her summers with her grandparents.' },
            { context: 'Todavía no entiendo el subjuntivo.', prompt: 'Sigo ___ entender el subjuntivo.', options: ['sin', 'de', 'a'], answer: 0, why: 'Seguir sin + infinitivo: todavía no.', en: 'I still don’t understand the subjunctive.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que **hubo una pausa**?', options: ['Sigo nadando.', 'Vuelvo a nadar.'], answer: 1, why: 'Volver a: dejé de nadar un tiempo y ahora nado otra vez.', en: 'Which sentence says there was a pause?' },
            { prompt: '«Dejé de comer carne» significa…', options: ['Ya no como carne.', 'Como carne otra vez.', 'Normalmente como carne.'], answer: 0, why: 'Dejar de: la actividad terminó.', en: '“Dejé de comer carne” means…' },
            { prompt: '«Solía ir al gimnasio.» ¿Voy ahora?', options: ['Probablemente no: era un hábito del pasado.', 'Sí, voy normalmente.', 'Sí, voy otra vez.'], answer: 0, why: '«Solía» presenta una costumbre de otra etapa.', en: '“Solía ir al gimnasio.” Do I go now?' },
            { prompt: '¿Qué frase dice que **todavía no** tengo trabajo?', options: ['Sigo sin trabajo.', 'Dejé de trabajar.', 'Vuelvo a trabajar.'], answer: 0, why: 'Seguir sin: la situación de no tener trabajo continúa.', en: 'Which sentence says I still don’t have a job?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Un mensaje a la profesora', lines: [
            { who: 'Inés', text: 'Hola, Raúl. ¿Cómo va tu semana?' },
            { who: 'Raúl', text: 'Tengo mucho trabajo, pero sigo ___ un poco cada día.', options: ['estudiar', 'estudiando', 'a estudiar'], answer: 1, why: 'Seguir + gerundio: no ha dejado de estudiar.' },
            { who: 'Inés', text: '¡Bien! ¿Cuándo estudias?' },
            { who: 'Raúl', text: '___ escribir un mensaje después de comer.', options: ['Suelo', 'Suelo a', 'Sigo'], answer: 0, why: 'Hábito actual: suelo + infinitivo, sin preposición.' },
            { who: 'Inés', text: '¿Y los audios?' },
            { who: 'Raúl', text: 'Vuelvo ___ escucharlos en el autobús.', options: ['de', 'a', 'en'], answer: 1, why: 'Volver a + infinitivo.' },
            { who: 'Raúl', text: 'Y dejé ___ preparar textos muy largos: me quitaban toda la tarde.', options: ['de', 'a', 'sin'], answer: 0, why: 'Dejar de + infinitivo.' },
            { who: 'Inés', text: 'Perfecto. Antes ___ escribir una página entera, ¿no?', options: ['solías', 'sueles', 'sigues'], answer: 0, why: 'Hábito de la etapa anterior: solías.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Sigo vivir con mis padres.', ok: false, options: ['Sigo viviendo con mis padres.', 'Sigo a vivir con mis padres.', 'Sigo de vivir con mis padres.'], answer: 0, why: 'Seguir + gerundio.' },
            { sentence: 'Mi abuela suele caminar por la mañana.', ok: true, why: 'Correcta: soler + infinitivo, sin preposición.' },
            { sentence: 'Volví estudiar después de la pausa.', ok: false, options: ['Volví a estudiar después de la pausa.', 'Volví de estudiar después de la pausa.', 'Volví estudiando después de la pausa.'], answer: 0, why: 'Volver a + infinitivo.' },
            { sentence: 'Dejamos a ver la televisión por la noche.', ok: false, options: ['Dejamos de ver la televisión por la noche.', 'Dejamos ver la televisión por la noche.', 'Dejamos viendo la televisión por la noche.'], answer: 0, why: 'Dejar de + infinitivo.' },
            { sentence: 'Antes solíamos cenar juntos los viernes.', ok: true, why: 'Correcta: hábito de una etapa pasada.' },
            { sentence: 'Mis hijos siguen durmiendo.', ok: true, why: 'Correcta: gerundio irregular de dormir (o → u).' },
          ] },
        ] },
        { title: 'Construye frases · Build sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Sigo', 'estudiando', 'español', 'los', 'sábados'], accept: ['Sigo estudiando español los sábados', 'Los sábados sigo estudiando español'], en: 'I’m still studying Spanish on Saturdays.' },
            { tiles: ['Mi', 'padre', 'dejó', 'de', 'fumar', 'hace', 'años'], accept: ['Mi padre dejó de fumar hace años', 'Hace años mi padre dejó de fumar'], en: 'My father stopped smoking years ago.' },
            { tiles: ['Este', 'año', 'he', 'vuelto', 'a', 'nadar'], accept: ['Este año he vuelto a nadar', 'He vuelto a nadar este año'], en: 'This year I’ve started swimming again.' },
            { tiles: ['Solíamos', 'pasar', 'el', 'verano', 'en', 'la', 'playa'], accept: ['Solíamos pasar el verano en la playa', 'En la playa solíamos pasar el verano'], en: 'We used to spend the summer at the beach.' },
          ] },
        ] },
        { title: 'Escribe la misma idea de otra forma · Say it another way', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'Normalmente cocino los domingos.', instruction: 'Usa «soler».', accept: ['Suelo cocinar los domingos', 'Los domingos suelo cocinar'] },
            { prompt: 'Todavía vivo en el mismo barrio.', instruction: 'Usa «seguir».', accept: ['Sigo viviendo en el mismo barrio', 'Yo sigo viviendo en el mismo barrio'] },
            { prompt: 'Ya no tomo café.', instruction: 'Usa «dejar de» en pretérito (yo).', accept: ['Dejé de tomar café', 'He dejado de tomar café'] },
            { prompt: 'Este año toco la guitarra otra vez.', instruction: 'Usa «volver a» en presente.', accept: ['Este año vuelvo a tocar la guitarra', 'Vuelvo a tocar la guitarra este año'] },
            { prompt: 'Antes, normalmente íbamos al cine los viernes.', instruction: 'Usa «soler» en imperfecto.', accept: ['Antes solíamos ir al cine los viernes', 'Solíamos ir al cine los viernes', 'Antes, los viernes solíamos ir al cine'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una semana con poco tiempo', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una semana con poco tiempo · A week with little time', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada actividad y si continúa, se retoma o terminó.', self: 'Escucha una vez para la idea general. En la segunda, anota cada actividad: ¿sigue, vuelve o terminó? Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Raúl escribe a su profesora', channel: 'NOTA DE VOZ · PARA INÉS', src: '/audio/grammar-classroom/115.mp3',
            before: 'Raúl tiene una semana muy ocupada y le deja una nota de voz a su profesora. ¿Crees que va a dejar las clases?',
            gist: { prompt: '¿Qué quiere Raúl?', options: ['Mantener una rutina corta y revisar sus errores con la profesora.', 'Dejar las clases hasta el mes que viene.', 'Cambiar de método esta semana.'], answer: 0, why: '«Me gustaría mantener esa actividad» y «prefiero dar tiempo a esta rutina».', en: 'What does Raúl want?' },
            details: [
              { prompt: '¿Qué suele hacer después de comer?', options: ['Escribir un mensaje.', 'Escuchar el audio.', 'Hablar con su compañera.'], answer: 0, why: '«Suelo escribir un mensaje después de comer».', en: 'What does he usually do after lunch?' },
              { prompt: '¿Cuándo vuelve a escuchar el audio de la clase?', options: ['Cuando viaja.', 'Los viernes.', 'Por la noche.'], answer: 0, why: '«Vuelvo a escuchar el audio de la clase cuando viajo».', en: 'When does he listen to the class audio again?' },
              { prompt: '¿Por qué dejó de preparar textos largos?', options: ['Le quitaban toda la tarde.', 'Su profesora no los corregía.', 'Prefiere hablar.'], answer: 0, why: '«He dejado de preparar textos demasiado largos porque me quitaban toda la tarde».', en: 'Why did he stop preparing long texts?' },
              { prompt: '¿Cuánto tiempo hablaban antes con su compañera?', options: ['Quince minutos.', 'Una hora.', 'Toda la tarde.'], answer: 1, why: '«Antes solíamos conversar una hora».', en: 'How long did they use to talk with his classmate before?' },
              { prompt: '¿Para qué quiere revisar los mismos errores durante dos clases?', options: ['Para comprobar si deja de repetirlos.', 'Para tener menos deberes.', 'Para cambiar de método.'], answer: 0, why: '«Así puedo comprobar si dejo de repetirlos».', en: 'Why does he want to go over the same mistakes for two classes?' },
            ],
            transcript: 'Hola, profe. Esta semana tengo mucho trabajo, pero [[sigo estudiando|teal]] un poco. [[Suelo escribir|blue]] un mensaje después de comer y [[vuelvo a escuchar|orange]] el audio de la clase cuando viajo. [[He dejado de preparar|violet]] textos demasiado largos porque me quitaban toda la tarde. Mi compañera [[sigue hablando|teal]] conmigo los viernes, aunque ahora solo tenemos quince minutos. Antes [[solíamos conversar|blue]] una hora. Me gustaría mantener esa actividad. ¿Podemos revisar los mismos errores durante dos clases? Así puedo comprobar si [[dejo de repetirlos|violet]]. No quiero cambiar de método cada semana; prefiero dar tiempo a esta rutina.',
            reply: { teacher: 'El alumno responde como si fuera la profesora: acepta la propuesta y da un consejo con «seguir», «volver a» o «dejar de».', self: 'Responde a Raúl como si fueras su profesora. Usa al menos dos de las cuatro estructuras: por ejemplo, «Sigue escribiendo…» o «Deja de preocuparte…».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus hábitos y tus cambios', coach: 'Cuenta la historia de tus hábitos.',
      steps: [
        { title: 'Tus hábitos y tus cambios · Your habits and changes', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte tu experiencia. Corrige solo las conexiones (a, de, gerundio).', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta y revisa las conexiones: a, de o gerundio.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué sueles hacer un día normal entre semana?', followUps: ['¿Y los fines de semana?', '¿Siempre fue así?', '¿Qué hábito te gustaría tener?'], phrases: ['[[Suelo levantarme|blue]] a las…', 'Por la tarde [[suelo|blue]]…', 'Los fines de semana [[solemos|blue]]…'], hint: 'Con «soler» no hace falta «normalmente»: el verbo ya lo dice.', example: 'Suelo levantarme a las siete y caminar al trabajo. Por la tarde suelo ir al supermercado. Los fines de semana mi familia y yo solemos comer juntos.', next: 'Ahora miremos hacia atrás.' },
            { q: '¿Qué solías hacer hace diez años que ya no haces?', followUps: ['¿Por qué dejaste de hacerlo?', '¿Lo extrañas?', '¿Te gustaría volver a hacerlo?'], phrases: ['Antes [[solía|blue]]…', '[[Dejé de|violet]]… cuando…', 'Ya no…'], hint: 'Usa «solía» para el hábito antiguo y «dejé de» para el momento del cambio.', example: 'Hace diez años solía salir todos los viernes. Dejé de salir tanto cuando nació mi hija. A veces lo extraño, pero ahora prefiero dormir.', next: 'Hablemos de algo que retomaste.', teacher: 'Si el alumno dice «dejé salir», repite la frase con la corrección y una pequeña pausa en «de».' },
            { q: '¿Hay algo que has vuelto a hacer después de mucho tiempo?', followUps: ['¿Por qué lo dejaste?', '¿Qué te hizo volver?', '¿Es igual que antes?'], phrases: ['[[He vuelto a|orange]]…', '[[Volví a|orange]]… el año pasado.', 'Lo había dejado porque…'], hint: 'Cuenta la historia completa: lo hacías, paraste, y ahora otra vez.', example: 'Este año he vuelto a tocar el piano. Lo dejé cuando empecé la universidad. Volví a tocar porque encontré el piano de mi abuela.', next: 'Ahora, lo que nunca cambió.' },
            { q: '¿Qué actividad sigues haciendo desde hace mucho tiempo?', followUps: ['¿Desde cuándo?', '¿Por qué no lo dejaste nunca?', '¿Cambió algo en la forma de hacerlo?'], phrases: ['[[Sigo jugando|teal]]…', 'Todavía…', '[[Sigo sin|teal]]…'], hint: 'Seguir + gerundio: «sigo leyendo», «sigo yendo», «sigo viviendo».', example: 'Sigo jugando al fútbol con mis amigos de la escuela. Jugamos los jueves desde hace quince años. Seguimos siendo malos, ¡pero nos divertimos!', next: 'Pensemos en hábitos que quieres cambiar.' },
            { q: '¿Qué hábito quieres dejar y cuál quieres empezar este año?', followUps: ['¿Qué es lo más difícil?', '¿Ya lo intentaste antes?', '¿Cómo vas a saber si funciona?'], phrases: ['Quiero [[dejar de|violet]]…', 'Me gustaría [[volver a|orange]]…', 'Si [[sigo|teal]]…'], hint: 'Después de «quiero» o «me gustaría», la perífrasis va en infinitivo: «quiero dejar de mirar el teléfono».', example: 'Quiero dejar de mirar el teléfono antes de dormir. Me gustaría volver a leer por la noche, como antes. Si sigo mirando el teléfono, duermo mal.', next: 'Para terminar, el español.' },
            { q: '¿Cómo es tu rutina de español ahora? ¿Qué mantienes, qué cambiaste y qué quieres retomar?', followUps: ['¿Qué método dejaste?', '¿Qué sigue funcionando?', '¿Qué harías con solo diez minutos al día?'], phrases: ['[[Suelo practicar|blue]]…', '[[Sigo usando|teal]]…', '[[He dejado de|violet]]…', 'Quiero [[volver a|orange]]…'], hint: 'Usa las cuatro estructuras en tu respuesta.', example: 'Suelo practicar con una aplicación por la mañana. Sigo usando mi cuaderno de verbos. He dejado de traducir todo al inglés. Quiero volver a ver series en español.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le hace al profesor tres preguntas con «¿Sigues…?», «¿Has vuelto a…?» y «¿Por qué dejaste de…?».', self: 'Escribe tres preguntas con «¿Sigues…?», «¿Has vuelto a…?» y «¿Por qué dejaste de…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El balance de tu rutina', coach: 'Cuenta qué sigue, qué vuelve y qué terminó.',
      steps: [
        { title: 'El balance de tu rutina · Taking stock of your routine', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos las conexiones: a, de, gerundio o nada.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Un mensaje a tu profesor', situation: 'Tu profesor te pide un balance de tu rutina de estudio (o de deporte, o de trabajo) de los últimos meses.', task: [
            'Cuenta un **hábito** actual y uno de antes (**suelo**, **solía**).',
            'Di qué actividad **retomaste** (**volver a**).',
            'Di qué actividad **abandonaste** y por qué (**dejar de**).',
            'Di qué actividad **continúa** (**seguir** + gerundio) y qué quieres hacer el mes que viene.',
          ], starters: ['Antes solía…', 'Ahora suelo…', 'He vuelto a…', 'Dejé de… porque…', 'Sigo…', 'El mes que viene quiero…'],
            words: ['ya no', 'otra vez', 'todavía', 'desde entonces', 'normalmente', 'mantener', 'retomar', 'abandonar'],
            model: 'Antes [[solía estudiar|blue]] una hora cada tarde, pero [[dejé de hacerlo|violet]] cuando cambié de trabajo. Ahora [[suelo escribir|blue]] un mensaje después de comer. [[He vuelto a escuchar|orange]] los audios durante el viaje y [[sigo conversando|teal]] con una compañera los viernes. [[He dejado de memorizar|violet]] listas largas porque me quitaban mucho tiempo. Quiero mantener esta rutina durante un mes y revisar contigo si [[sigo repitiendo|teal]] los mismos errores.',
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
            { tone: 'blue', label: 'SOLER', formula: 'suelo / solía + infinitivo', example: 'Suelo cocinar los domingos.', caption: 'Un hábito, ahora o antes.', en: 'A habit, now (suelo) or in the past (solía).' },
            { tone: 'teal', label: 'SEGUIR', formula: 'sigo + gerundio', example: 'Sigo viviendo en el mismo barrio.', caption: 'Continúa sin pausa.', en: 'It goes on without a break.' },
            { tone: 'orange', label: 'VOLVER A', formula: 'vuelvo a + infinitivo', example: 'He vuelto a nadar.', caption: 'Otra vez, después de una pausa.', en: 'Again, after a pause.' },
            { tone: 'violet', label: 'DEJAR DE', formula: 'dejo de + infinitivo', example: 'Dejé de fumar.', caption: 'Ya no.', en: 'No longer.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Las conexiones', text: '**soler** + infinitivo · **seguir** + gerundio · **volver a** + infinitivo · **dejar de** + infinitivo. Si dudas entre «seguir» y «volver a», pregúntate: ¿hubo una pausa?', en: 'The links: soler + infinitive · seguir + gerund · volver a + infinitive · dejar de + infinitive. If you hesitate between “seguir” and “volver a”, ask yourself: was there a pause?' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Después de la operación, mi madre ___ caminar sin bastón.', options: ['volvió a', 'siguió', 'solía'], answer: 0, why: 'Hubo una pausa y lo retoma: volver a.' },
            { prompt: 'Los niños siguen ___ en el parque.', options: ['jugar', 'jugando', 'a jugar'], answer: 1, why: 'Seguir + gerundio.' },
            { prompt: 'De joven, mi abuelo ___ trabajar en el campo.', options: ['suele', 'solía', 'deja de'], answer: 1, why: 'Hábito de una etapa pasada: solía.' },
            { prompt: 'Para dormir mejor, dejé ___ tomar café por la tarde.', options: ['a', 'de', 'sin'], answer: 1, why: 'Dejar de + infinitivo.' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Sigo leyendo» y «Vuelvo a leer»: ¿qué diferencia hay? La primera no tuvo pausa; la segunda retoma la lectura después de una pausa. Pide un ejemplo de cada una sobre la vida del alumno.' },
        ] },
      ],
    },
  ],
};
