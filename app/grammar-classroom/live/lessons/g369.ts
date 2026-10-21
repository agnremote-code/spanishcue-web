import type { LiveLesson } from '../types';

/**
 * Lesson 369 · A2 · Superlativos relativos y absolutos frecuentes (course unit G069).
 * One scene runs through the class: Sofía Rivas is a local guide in Puerto
 * Alba, a small (fictional) city by the sea. She shows the old town to two
 * visitors, Irene Campos and Marcos Gil: the clock tower in the square, the
 * narrowest street, the café with the empanadas, and in the evening dinner at
 * Casa Lola. In the voice message Sofía (Mexican voice, ustedes to the group)
 * tells them tomorrow's plan. Who speaks: Sofía, Irene, Marcos, a waiter.
 * Content: superlativo relativo (el/la/los/las + nombre + más/menos + adjetivo
 * + de: la calle más estrecha del barrio; without the noun: la más antigua),
 * the irregular forms el mejor / el peor (before the noun) and el mayor / el
 * menor (age), superlativo absoluto in -ísimo (altísimo, buenísima,
 * riquísimo, facilísimo, amabilísimo, muchísimo) with its spelling changes,
 * and, from the coverage audit (row 7), exclamations for strong reactions:
 * ¡Qué alto!, ¡Qué vista tan/más bonita!, ¡Qué alta es la torre!
 * Contrast: comparativo (G037, G068: más alta que la iglesia) / relativo (el
 * más alto de la ciudad) / absoluto (altísima). Mistakes: *el más mejor,
 * *muy buenísimo, *la más antigua que el barrio, *los mejor mercados,
 * *Es calle más estrecha, *¡Que bonito! Ampliación: uno de los + plural,
 * superlativo + que + he + participio, regional «bien rico». Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 369,
  level: 'A2',
  title: 'Superlativos relativos y absolutos frecuentes',
  subtitle: 'Enseñar tu ciudad y reaccionar: el edificio más alto, el mejor café del barrio, una vista bonitísima, ¡qué alto!',
  legend: [
    { tone: 'orange', label: 'RELATIVO · el número uno de un grupo (the most / the least … in)' },
    { tone: 'violet', label: 'IRREGULARES · el mejor, el peor, el mayor, el menor (the best, the worst, the oldest…)' },
    { tone: 'teal', label: 'ABSOLUTO · -ísimo: muy, muy (altísimo, buenísima)' },
    { tone: 'blue', label: 'EXCLAMACIÓN · ¡Qué…! (a strong reaction)' },
  ],
  optionNotes: {
    'muy buenísimo': '**-ísimo** ya significa «muy»: buenísimo, sin «muy».',
    'el más mejor': '**Mejor** ya contiene la idea de «más»: el mejor, nunca «el más mejor».',
    'Que rica': 'En una exclamación, **qué** lleva tilde: ¡Qué rica!',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El número uno y el «muy, muy»', coach: 'De un grupo o sin grupo. From a group, or no group.',
      steps: [
        { title: 'Un paseo por Puerto Alba · A walk around Puerto Alba', blocks: [
          { kind: 'lead', text: 'Sofía Rivas es guía en Puerto Alba, una ciudad pequeña junto al mar. Hoy enseña el casco antiguo a dos visitantes, Irene y Marcos. En la plaza hay una torre de cincuenta metros. Sofía dice: «Es **el edificio más alto** de la ciudad». E Irene responde: «¡Es **altísima**!». Hoy aprendes a decir que algo es el número uno de un grupo, y que algo es muy, muy alto, bueno o bonito.', en: 'Sofía Rivas is a guide in Puerto Alba, a small city by the sea. Today she is showing the old town to two visitors, Irene and Marcos. In the square there is a fifty-metre tower. Sofía says: “It is the tallest building in the city”. And Irene answers: “It is really, really tall!”. Today you learn to say that something is number one in a group, and that something is very, very tall, good or pretty.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases sobre la torre y tu alumno repite. Después tu alumno dice qué frase compara dos cosas, qué frase habla de un grupo y qué frase no compara con nada.', self: 'Lee las tres frases en voz alta. ¿Cuál compara dos cosas? ¿Cuál habla de un grupo? ¿Cuál no compara? (Which one compares two things, which one a group, which one nothing?)' } },
          { kind: 'compare', title: 'Tres frases sobre la torre · Three sentences about the tower', columns: [
            { tone: 'neutral', label: 'COMPARATIVO · ya lo sabes', sentence: 'La torre es más alta que la iglesia.', idea: 'Dos cosas: una tiene más. (Clases 037 y 068.)', en: 'The tower is taller than the church. (two things)' },
            { tone: 'orange', label: 'SUPERLATIVO RELATIVO', sentence: 'La torre es [[el edificio más alto de la ciudad|orange]].', idea: 'Un grupo (los edificios de la ciudad): la torre es el número uno.', en: 'The tower is the tallest building in the city. (number one in a group)' },
            { tone: 'teal', label: 'SUPERLATIVO ABSOLUTO', sentence: 'La torre es [[altísima|teal]].', idea: 'Sin grupo, sin comparar: muy, muy alta.', en: 'The tower is really, really tall. (no comparison)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La torre es el edificio más alto de la ciudad» significa…', options: ['La torre es alta, pero hay edificios más altos.', 'La torre es más alta que todos los edificios de la ciudad.', 'La torre es un poco más alta que la iglesia.'], answer: 1, why: 'El superlativo relativo pone la torre en el número uno del grupo «edificios de la ciudad».', en: '“The tower is the tallest building in the city” means…' },
            { prompt: '«La torre es altísima» significa…', options: ['Es más alta que la iglesia.', 'Es la más alta de la ciudad.', 'Es muy, muy alta.'], answer: 2, why: '-ísimo no compara con nada: solo dice que es muy, muy alta.', en: '“La torre es altísima” means…' },
          ] },
        ] },
        { title: 'El número uno del grupo · Number one in the group', mascot: '/brand/mascot/studying.webp', coach: 'El / la… más… de. The most … in.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'SUPERLATIVO RELATIVO', question: '¿Cuál es el número uno de un grupo?', en: 'Which one is number one in a group?', formula: ['el / la / los / las + nombre + más / menos + adjetivo + de + grupo', 'la calle más estrecha del barrio'],
            meaning: 'Usas **el, la, los, las** (siempre el artículo definido), después el nombre, después **más** o **menos** + adjetivo, y el grupo va con **de**: de la ciudad, del barrio, de la costa. El artículo y el adjetivo concuerdan con el nombre.',
            examples: [
              { es: 'La calle del Agua es [[la calle más estrecha del casco antiguo|orange]].', en: 'Calle del Agua is the narrowest street in the old town.' },
              { es: 'Estos son [[los barrios más tranquilos de la ciudad|orange]].', en: 'These are the quietest neighbourhoods in the city.' },
              { es: 'La playa Norte es [[la playa menos conocida de la costa|orange]].', en: 'Playa Norte is the least known beach on the coast.' },
            ],
            note: 'Si ya sabes de qué hablas, no repites el nombre: «Hay tres calles y esta es **la más estrecha**». Y si el grupo está claro, puedes no decirlo: «Es el restaurante más famoso».' },
          { kind: 'table', title: 'Concordancia · Agreement', head: ['Nombre', 'Superlativo relativo', 'English'], rows: [
            ['el edificio', '**el** edificio más alt**o** de la ciudad', 'the tallest building in the city'],
            ['la calle', '**la** calle más estrech**a** del barrio', 'the narrowest street in the neighbourhood'],
            ['los mercados', '**los** mercados más antigu**os** de la región', 'the oldest markets in the region'],
            ['las playas', '**las** playas menos tranquil**as** de la costa', 'the least quiet beaches on the coast'],
          ], note: 'En inglés dices «in the city». En español, el grupo va con **de**: «de la ciudad», «del barrio». Nunca con «que».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El mercado de San Juan es ___ mercado más antiguo de la ciudad.', options: ['más', 'un', 'el'], answer: 2, why: 'El superlativo relativo necesita el artículo definido: el mercado más antiguo.', en: 'The San Juan market is the oldest market in the city.' },
            { prompt: 'Es la plaza más grande ___ casco antiguo.', options: ['como el', 'que el', 'del'], answer: 2, why: 'El grupo va con de: de + el = del casco antiguo.', en: 'It is the biggest square in the old town.' },
          ] },
        ] },
        { title: 'Mejor, peor, mayor, menor · Best, worst, oldest, youngest', mascot: '/brand/mascot/standing.webp', coach: 'El mejor, sin «más». The best, without más.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'IRREGULARES', question: '¿Cuál es el mejor? ¿Quién es el mayor?', en: 'Which one is the best? Who is the oldest?', formula: ['el / la mejor, peor + nombre + de', 'los / las mejores, peores + nombre + de', 'el / la mayor, menor + de (la edad)'],
            meaning: 'Ya conoces **mejor, peor, mayor, menor** para comparar dos cosas (clase 068). Con el artículo, son superlativos: el número uno del grupo. **Mejor** y **peor** van normalmente **delante** del nombre: el mejor café, la peor hora. No cambian con el género, solo con el número: el mejor, la mejor, los mejores, las mejores.',
            examples: [
              { es: 'Este es [[el mejor café del barrio|violet]].', en: 'This is the best coffee in the neighbourhood.' },
              { es: 'A las dos hace muchísimo calor: es [[la peor hora del día|violet]] para subir a la torre.', en: 'At two o’clock it is boiling hot: it is the worst time of day to climb the tower.' },
              { es: 'Marcos tiene sesenta y dos años: es [[el mayor del grupo|violet]].', en: 'Marcos is sixty-two: he is the oldest in the group.' },
            ],
            note: 'Para la edad de las personas: **el mayor** (the oldest), **el menor** (the youngest). Para el tamaño de las cosas, en la conversación lo normal es «el más grande», «el más pequeño»; «el mayor puerto del país» es más formal.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Para Sofía, Casa Lola es ___ restaurante del puerto.', options: ['el más mejor', 'el mejor', 'mejor'], answer: 1, why: 'Mejor ya tiene la idea de «más». Con el artículo: el mejor restaurante.', en: 'For Sofía, Casa Lola is the best restaurant in the port.' },
            { prompt: 'Irene tiene veinticinco años y sus hermanas, treinta y treinta y dos. Irene es ___ de las tres.', options: ['la peor', 'la mayor', 'la menor'], answer: 2, why: 'Irene tiene menos años que sus hermanas: es la menor (the youngest).', en: 'Irene is twenty-five and her sisters are thirty and thirty-two. Irene is the youngest of the three.' },
          ] },
        ] },
        { title: 'Muy, muy: -ísimo · Very, very: -ísimo', mascot: '/brand/mascot/speaking.webp', coach: 'Altísimo = muy, muy alto.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SUPERLATIVO ABSOLUTO', question: '¿Es muy, muy alto? ¿Muy, muy bueno?', en: 'Is it very, very tall? Very, very good?', formula: ['adjetivo sin la vocal final + -ísimo / -ísima / -ísimos / -ísimas', 'alto → altísimo · buena → buenísima · caros → carísimos'],
            meaning: 'Con el superlativo absoluto no comparas con nada: dices que algo tiene una cualidad en un grado muy alto. **-ísimo** es como «muy», pero más fuerte y más expresivo. Concuerda como un adjetivo y es muy frecuente en la conversación.',
            examples: [
              { es: 'Las empanadas están [[buenísimas|teal]].', en: 'The empanadas are really, really good.' },
              { es: 'El camino al puerto es [[facilísimo|teal]].', en: 'The way to the port is super easy.' },
              { es: 'Hoy hay [[muchísima|teal]] gente en la plaza.', en: 'Today there are loads of people in the square.' },
            ] },
          { kind: 'table', title: 'Cómo se forma · How it is formed', head: ['Adjetivo', '-ísimo', 'Qué cambia (what changes)'], rows: [
            ['alto, grande, caro', 'alt**ísimo**, grand**ísimo**, car**ísimo**', 'pierde la vocal final (drops the last vowel)'],
            ['fácil, difícil', 'facil**ísimo**, dificil**ísimo**', 'consonante + -ísimo; la tilde va solo en la í'],
            ['rico, poco', 'ri**qu**ísimo, po**qu**ísimo', 'c → qu, para mantener el sonido /k/'],
            ['largo', 'lar**gu**ísimo', 'g → gu, para mantener el sonido /g/'],
            ['amable', 'ama**bilísimo**', '-ble → -bilísimo'],
            ['mucho', 'much**ísimo**, much**ísima** gente', 'también con cantidades: muchísimas gracias'],
          ], note: 'Con la comida que pruebas ahora, normalmente usas **estar**: «El café **está** riquísimo». Para hablar de algo en general, **ser**: «El café de aquí **es** buenísimo».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La calle del Agua es muy, muy larga: es ___.', options: ['larguísima', 'larguísimo', 'largísima'], answer: 0, why: 'Larga → larguísima: g → gu para mantener el sonido, y concuerda con «la calle».', en: 'Calle del Agua is very, very long.' },
            { prompt: 'El jugo de mango está ___.', options: ['ricísimo', 'muy riquísimo', 'riquísimo'], answer: 2, why: 'Rico → riquísimo (c → qu). Y sin «muy»: -ísimo ya significa «muy».', en: 'The mango juice is delicious.' },
          ] },
        ] },
        { title: '¡Qué bonito! · How beautiful!', mascot: '/brand/mascot/portrait.webp', coach: 'Qué, con tilde. Qué with an accent.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'EXCLAMACIÓN', question: '¿Cómo reacciono cuando algo me impresiona?', en: 'How do I react when something impresses me?', formula: ['¡Qué + adjetivo!', '¡Qué + nombre + tan / más + adjetivo!', '¡Qué + adjetivo + es / está + sujeto!'],
            meaning: 'Para una reacción fuerte y espontánea, usas **¡Qué…!**. **Qué** lleva tilde, y los signos van al principio (¡) y al final (!). El adjetivo concuerda con la cosa de la que hablas. En «¡Qué vista **más** bonita!», «más» no compara: significa lo mismo que «tan».',
            examples: [
              { es: '[[¡Qué alta!|blue]] (la torre)', en: 'How tall! (the tower)' },
              { es: '[[¡Qué vista tan bonita!|blue]] = [[¡Qué vista más bonita!|blue]]', en: 'What a beautiful view!' },
              { es: '[[¡Qué rico está el café!|blue]]', en: 'This coffee is so good!' },
            ] },
          { kind: 'decide', title: '¿Qué estructura necesitas? · Which structure do you need?', steps: [
            { q: '¿Comparas dos cosas? (la torre y la iglesia)', yes: 'Usa el **comparativo**: «La torre es más alta que la iglesia».', no: 'next' },
            { q: '¿Dices que algo es el número uno de un grupo? (de la ciudad, del barrio)', yes: 'Usa el **superlativo relativo**: «Es el edificio más alto de la ciudad», «el mejor café del barrio».', no: 'next' },
            { q: '¿Solo dices que algo es muy, muy…, sin grupo?', yes: 'Usa **-ísimo**: «Es altísima». Si es una reacción espontánea: «¡Qué alta!».', no: 'Lee la frase otra vez: ¿hay dos cosas, un grupo o ninguna comparación?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Irene ve la playa desde la torre. Dice: «___»', options: ['¡Qué playa tan bonito!', '¡Qué playa tan bonita!', '¡Que playa tan bonita!'], answer: 1, why: 'Qué con tilde, y bonita concuerda con «playa».', en: 'Irene sees the beach from the tower. She says: “What a beautiful beach!”' },
            { prompt: 'Sofía compara dos cafés: «El café de la plaza es ___ el café del puerto».', options: ['el más barato de', 'baratísimo que', 'más barato que'], answer: 2, why: 'Dos cosas: comparativo, más barato que. El superlativo es para un grupo.', en: 'Sofía compares two cafés: “The café on the square is cheaper than the one at the port”.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde está el error? Where is the mistake?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla. Después aparece la corrección y tu alumno la lee en voz alta.', self: 'Lee cada frase y busca el error. Toca para ver la corrección y léela en voz alta. (Find the mistake, then read the correction aloud.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Es el más mejor café del barrio.', right: 'Es el mejor café del barrio.', why: '«Mejor» ya significa «más bueno»: no lleva «más». (Mejor already means “more good”.)' },
            { wrong: 'Las empanadas están muy buenísimas.', right: 'Las empanadas están buenísimas.', why: '-ísimo ya significa «muy». Usa una de las dos: muy buenas o buenísimas. (Not both.)' },
            { wrong: 'Es la calle más antigua que el barrio.', right: 'Es la calle más antigua del barrio.', why: 'El grupo va con de: del barrio. «Que» es para comparar dos cosas. (The group goes with de.)' },
            { wrong: 'Puerto Alba tiene los mejor mercados de la costa.', right: 'Puerto Alba tiene los mejores mercados de la costa.', why: 'Mejor tiene plural: los mejores mercados. (Plural: mejores.)' },
            { wrong: 'Es calle más estrecha del barrio.', right: 'Es la calle más estrecha del barrio.', why: 'El superlativo relativo necesita el artículo: la calle más estrecha. (It needs the article.)' },
            { wrong: '¡Que bonito es el puerto!', right: '¡Qué bonito es el puerto!', why: 'En las exclamaciones, qué lleva tilde. (Qué has a written accent in exclamations.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Este es ___ hotel de la ciudad.', options: ['el más peor', 'el peor', 'peor'], answer: 1, why: 'Peor ya tiene la idea de «más malo»: el peor hotel, sin «más».', en: 'This is the worst hotel in the city.' },
            { prompt: 'La sopa está ___.', options: ['la más buenísima', 'muy buenísima', 'buenísima'], answer: 2, why: '-ísimo va solo, sin «muy» y sin artículo: buenísima.', en: 'The soup is really, really good.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre su ciudad: una con «el / la más… de», una con «el mejor» o «el peor» y una con -ísimo. Tú reaccionas con «¡Qué…!».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la Torre del Reloj', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Arriba de la torre · At the top of the tower', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Sofía y tu alumno es Irene y Marcos. Después tu alumno toca cada expresión marcada y dice si es un superlativo relativo, -ísimo o una exclamación.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di qué es: ¿el número uno de un grupo, -ísimo o una exclamación? (Group, -ísimo or exclamation?)' } },
          { kind: 'explore', title: 'La mejor vista de Puerto Alba', setting: 'Una mañana de sol, en la plaza de Puerto Alba. Sofía, la guía, enseña la Torre del Reloj a Irene y a Marcos. Se tratan de tú. (A sunny morning in the main square. Sofía, the guide, shows Irene and Marcos the clock tower.)', lines: [
            { who: 'Sofía', text: 'Esta es la Torre del Reloj. Tiene cincuenta metros: es [[el edificio más alto de la ciudad|orange]].', en: 'This is the Clock Tower. It is fifty metres tall: it is the tallest building in the city.' },
            { who: 'Irene', text: '[[¡Qué alta!|blue]] ¿Se puede subir?', en: 'How tall! Can you go up?' },
            { who: 'Sofía', text: 'Sí, pero hay ciento veinte escalones. Es [[la parte más difícil del paseo|orange]].', en: 'Yes, but there are a hundred and twenty steps. It is the hardest part of the walk.' },
            { who: 'Marcos', text: 'No pasa nada. Soy [[el mayor del grupo|violet]], pero estoy en forma.', en: 'No problem. I am the oldest in the group, but I am fit.' },
            { who: 'Irene', text: '(Arriba) [[¡Qué vista tan bonita!|blue]] Desde aquí se ve todo el puerto.', en: '(At the top) What a beautiful view! You can see the whole port from here.' },
            { who: 'Sofía', text: 'Para mí, es [[el mejor lugar de Puerto Alba|violet]] para hacer fotos.', en: 'For me, it is the best place in Puerto Alba to take photos.' },
            { who: 'Marcos', text: '¿Y aquella calle tan estrecha, al lado de la iglesia?', en: 'And that very narrow street, next to the church?' },
            { who: 'Sofía', text: 'Es la calle del Agua, [[la más estrecha del casco antiguo|orange]]. Solo mide un metro de ancho.', en: 'It is Calle del Agua, the narrowest in the old town. It is only one metre wide.' },
            { who: 'Irene', text: 'Tengo hambre. ¿Dónde comemos algo típico?', en: 'I’m hungry. Where can we eat something typical?' },
            { who: 'Sofía', text: 'En el café de la plaza. Las empanadas de queso están [[buenísimas|teal]] y son [[baratísimas|teal]].', en: 'At the café on the square. The cheese empanadas are really good and really cheap.' },
            { who: 'Marcos', text: 'Perfecto. Ayer tomé [[el peor café del viaje|violet]]: estaba [[malísimo|teal]].', en: 'Perfect. Yesterday I had the worst coffee of the trip: it was awful.' },
            { who: 'Sofía', text: 'Aquí no, te lo prometo. Es [[el café menos turístico de la plaza|orange]] y [[el más rico|orange]].', en: 'Not here, I promise. It is the least touristy café on the square, and the tastiest.' },
          ], notes: {
            'el edificio más alto de la ciudad': 'Superlativo relativo: **el** + nombre + **más** + adjetivo + **de** + grupo. El grupo son los edificios de la ciudad.',
            '¡Qué alta!': 'Exclamación: **¡Qué + adjetivo!** Alta concuerda con «la torre». Qué lleva tilde.',
            'la parte más difícil del paseo': 'Superlativo relativo en femenino: **la** parte más difícil. Del = de + el paseo.',
            'el mayor del grupo': 'Mayor con artículo: **el mayor** = the oldest. Para la edad de las personas.',
            '¡Qué vista tan bonita!': 'Exclamación con nombre: **¡Qué + nombre + tan + adjetivo!** También: ¡Qué vista más bonita!',
            'el mejor lugar de Puerto Alba': 'Mejor va **delante** del nombre: el mejor lugar. Nunca «el más mejor».',
            'la más estrecha del casco antiguo': 'Sin el nombre: ya sabemos que hablamos de calles. **La más estrecha** = la calle más estrecha.',
            'buenísimas': 'Buenas → **buenísimas**: muy, muy buenas. Con estar, porque es la comida que se prueba.',
            'baratísimas': 'Baratas → **baratísimas**: muy, muy baratas. Concuerda con «las empanadas».',
            'el peor café del viaje': 'Peor con artículo: el número uno… de los cafés malos. **El peor** café del viaje.',
            'malísimo': 'Malo → **malísimo**: muy, muy malo. Sin «muy» delante.',
            'el café menos turístico de la plaza': 'Con **menos**: el número uno por abajo. Es el café con menos turistas de la plaza.',
            'el más rico': 'Sin repetir el nombre: el (café) más rico de la plaza. Rico = tasty, cuando hablas de comida.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué es especial en la Torre del Reloj?', options: ['Es el edificio menos visitado de la ciudad.', 'Es el edificio más antiguo de la ciudad.', 'Es el edificio más alto de la ciudad.'], answer: 2, why: '«Tiene cincuenta metros: es el edificio más alto de la ciudad».', en: 'What is special about the Clock Tower?' },
            { prompt: '¿Quién es el mayor del grupo?', options: ['Sofía.', 'Irene.', 'Marcos.'], answer: 2, why: 'Marcos dice: «Soy el mayor del grupo, pero estoy en forma».', en: 'Who is the oldest in the group?' },
            { prompt: '¿Por qué Sofía recomienda el café de la plaza?', options: ['Porque tiene empanadas buenísimas y es el menos turístico.', 'Porque es el café más famoso de la ciudad.', 'Porque es el más barato del puerto.'], answer: 0, why: '«Las empanadas están buenísimas» y «es el café menos turístico de la plaza».', en: 'Why does Sofía recommend the café on the square?' },
          ] },
        ] },
        { title: '¿Grupo, -ísimo o exclamación? · Group, -ísimo or exclamation?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases del paseo · Sentences from the walk', categories: [
            { id: 'relativo', label: 'RELATIVO · el número uno de un grupo', tone: 'orange' },
            { id: 'absoluto', label: 'ABSOLUTO · -ísimo', tone: 'teal' },
            { id: 'exclamacion', label: 'EXCLAMACIÓN · ¡Qué…!', tone: 'blue' },
          ], items: [
            { text: 'Es la parte más difícil del paseo.', answer: 'relativo', why: 'El número uno de un grupo: las partes del paseo.' },
            { text: 'Las empanadas son baratísimas.', answer: 'absoluto', why: 'Muy, muy baratas, sin grupo: -ísimo.' },
            { text: '¡Qué vista tan bonita!', answer: 'exclamacion', why: 'Una reacción espontánea con ¡Qué…!' },
            { text: 'Marcos es el mayor del grupo.', answer: 'relativo', why: 'El mayor del grupo: el número uno por la edad.' },
            { text: 'Ayer el café estaba malísimo.', answer: 'absoluto', why: 'Muy, muy malo: -ísimo, sin grupo.' },
            { text: '¡Qué alta!', answer: 'exclamacion', why: 'Una reacción al ver la torre: ¡Qué + adjetivo!' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cuál es el edificio más alto de tu ciudad? ¿Es altísimo?». Tu alumno responde con un superlativo relativo y uno absoluto.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'El más… de, el mejor, -ísimo, ¡qué…!',
      steps: [
        { title: 'La web de Sofía · Sofía’s website', blocks: [
          { kind: 'choice', items: [
            { context: 'Sofía escribe la página de sus paseos. (Sofía writes her tours page.)', prompt: 'La calle del Agua es ___ calle más estrecha de Puerto Alba.', options: ['una', 'el', 'la'], answer: 2, why: 'El superlativo relativo necesita el artículo definido, y concuerda con «calle»: la.', en: 'Calle del Agua is the narrowest street in Puerto Alba.' },
            { context: 'Sofía escribe la página de sus paseos. (Sofía writes her tours page.)', prompt: 'El mercado de San Juan es el más antiguo ___ la ciudad.', options: ['como', 'de', 'que'], answer: 1, why: 'El grupo va con de: de la ciudad. Que y como son para comparar dos cosas.', en: 'The San Juan market is the oldest in the city.' },
            { context: 'Sobre la comida del barrio. (About the food in the area.)', prompt: 'Las empanadas de la plaza son ___ de la ciudad.', options: ['las mejores', 'las más mejores', 'los mejores'], answer: 0, why: 'Las empanadas: artículo femenino plural. Mejores, sin «más».', en: 'The empanadas on the square are the best in the city.' },
            { context: 'Marcos tiene 62 años; Irene, 25; Sofía, 34. (Ages in the group.)', prompt: 'Marcos es ___ del grupo.', options: ['el mayor', 'el menor', 'mayor que'], answer: 0, why: 'Tiene más años que todos: el mayor. «Mayor que» compara solo dos personas.', en: 'Marcos is the oldest in the group.' },
            { context: 'Irene prueba el flan del café. (Irene tries the café’s flan.)', prompt: '¡Prueba el flan! Está ___.', options: ['buenísimo', 'el más bueno', 'muy buenísimo'], answer: 0, why: 'No hay grupo: solo «muy, muy bueno». -ísimo, sin «muy».', en: 'Try the flan! It is really, really good.' },
          ] },
        ] },
        { title: '¿Dos cosas, un grupo o ninguna? · Two things, a group or none?', blocks: [
          { kind: 'classify', title: 'Comparativo o superlativo · Comparative or superlative', categories: [
            { id: 'comparativo', label: 'COMPARATIVO · dos cosas (más… que)', tone: 'neutral' },
            { id: 'relativo', label: 'RELATIVO · el número uno de un grupo', tone: 'orange' },
            { id: 'absoluto', label: 'ABSOLUTO · -ísimo, sin comparar', tone: 'teal' },
          ], items: [
            { text: 'La torre es más alta que la iglesia.', answer: 'comparativo', why: 'Dos cosas: más alta que.' },
            { text: 'Es la torre más alta de la región.', answer: 'relativo', why: 'El número uno de un grupo: de la región.' },
            { text: 'La subida es dificilísima.', answer: 'absoluto', why: 'Muy, muy difícil, sin comparar.' },
            { text: 'Irene es la menor de tres hermanas.', answer: 'relativo', why: 'La menor de un grupo: tres hermanas.' },
            { text: 'Este café es mejor que el de ayer.', answer: 'comparativo', why: 'Dos cafés: mejor que.' },
            { text: 'Hoy el puerto está tranquilísimo.', answer: 'absoluto', why: 'Muy, muy tranquilo: -ísimo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Es el más mejor restaurante del puerto.', ok: false, options: ['Es el mejor restaurante del puerto.', 'Es el más bueno restaurante del puerto.', 'Es el mejor restaurante que el puerto.'], answer: 0, why: 'Mejor ya contiene «más», y va delante del nombre: el mejor restaurante del puerto.' },
            { sentence: 'La playa Norte es la menos conocida de la costa.', ok: true, why: 'Correcta: la (playa) menos conocida + de la costa.' },
            { sentence: 'Las vistas desde el faro son muy bonitísimas.', ok: false, options: ['Las vistas desde el faro son muy bonitísimos.', 'Las vistas desde el faro son bonitísimas.', 'Las vistas desde el faro son más bonitísimas.'], answer: 1, why: '-ísimo ya significa «muy»: bonitísimas, sin «muy» ni «más».' },
            { sentence: '¡Que rica está la sopa!', ok: false, options: ['¡Qué rica está la sopa!', '¡Qué rico está la sopa!', '¡Qué riquísimo está la sopa!'], answer: 0, why: 'Qué lleva tilde, y rica concuerda con «la sopa».' },
            { sentence: 'Puerto Alba tiene los mejor mercados de la costa.', ok: false, options: ['Puerto Alba tiene los mejores mercados de la costa.', 'Puerto Alba tiene los más mejores mercados de la costa.', 'Puerto Alba tiene los mercados mejor de la costa.'], answer: 0, why: 'Con un nombre en plural, mejor también va en plural: los mejores mercados.' },
            { sentence: 'Esta es la calle más antigua que el barrio.', ok: false, options: ['Esta es la calle más antigua como el barrio.', 'Esta es calle más antigua del barrio.', 'Esta es la calle más antigua del barrio.'], answer: 2, why: 'El grupo va con de (del barrio), y el artículo la no puede faltar.' },
          ] },
        ] },
        { title: 'Cena en El Ancla · Dinner at El Ancla', blocks: [
          { kind: 'chat-fill', title: 'Por la noche, en el restaurante · In the evening, at the restaurant', lines: [
            { who: 'Camarero', text: 'Buenas noches. Les recomiendo la dorada: es ___ de la carta.', options: ['el plato más fresco que', 'el más plato fresco', 'el plato más fresco'], answer: 2, why: 'El + nombre + más + adjetivo + de: el plato más fresco de la carta.' },
            { who: 'Marcos', text: 'Perfecto, tres doradas. ¿Y el vino de la casa?' },
            { who: 'Camarero', text: 'Es ___: lo hacen aquí, en la región.', options: ['muy buenísimo', 'buenísimo', 'el más mejor'], answer: 1, why: 'No hay grupo: muy, muy bueno. Buenísimo, sin «muy».' },
            { who: 'Irene', text: '¡___ está la dorada!', options: ['Qué rico', 'Qué rica', 'Que rica'], answer: 1, why: 'Exclamación: qué con tilde, y rica concuerda con «la dorada».' },
            { who: 'Marcos', text: 'Sí, es ___ del viaje.', options: ['la comida mejor que', 'la mejor comida', 'la más mejor comida'], answer: 1, why: 'El número uno de las comidas del viaje: la mejor comida, con mejor delante del nombre.' },
            { who: 'Sofía', text: 'Y el flan de aquí es ___ en todo el puerto.', options: ['muy famosísimo', 'el más famoso que', 'famosísimo'], answer: 2, why: 'Famoso → famosísimo: muy, muy famoso, sin «muy».' },
            { who: 'Camarero', text: 'Aquí tienen la cuenta. ¿Todo bien?' },
            { who: 'Marcos', text: 'Todo perfecto. Es ___ restaurante de Puerto Alba.', options: ['mejor', 'el más mejor', 'el mejor'], answer: 2, why: 'Superlativo: el mejor restaurante, con artículo y sin «más».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['el', 'edificio', 'Es', 'más', 'alto', 'de', 'la', 'ciudad'], accept: ['Es el edificio más alto de la ciudad'], en: 'It is the tallest building in the city.' },
            { tiles: ['aquí', 'Las', 'empanadas', 'están', 'buenísimas'], accept: ['Las empanadas están buenísimas aquí', 'Aquí las empanadas están buenísimas', 'Las empanadas aquí están buenísimas'], en: 'The empanadas here are really good.' },
            { tiles: ['tan', '¡Qué', 'bonita!', 'vista'], accept: ['¡Qué vista tan bonita!'], en: 'What a beautiful view!' },
            { tiles: ['menor', 'Irene', 'es', 'la', 'de', 'tres', 'hermanas'], accept: ['Irene es la menor de tres hermanas'], en: 'Irene is the youngest of three sisters.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Más fuerte, el número uno, ¡qué…! · Stronger, number one, what a…!', items: [
            { prompt: 'La playa es muy limpia.', instruction: 'Escribe la misma idea con -ísimo, sin «muy».', accept: ['La playa es limpísima', 'La playa está limpísima'] },
            { prompt: 'El museo del Mar es muy pequeño. No hay museos más pequeños en la ciudad.', instruction: 'Escribe una frase con el superlativo relativo. Empieza con «El museo del Mar es el…».', accept: ['El museo del Mar es el más pequeño de la ciudad', 'El museo del Mar es el museo más pequeño de la ciudad'] },
            { prompt: 'El taxi al aeropuerto es muy caro.', instruction: 'Reacciona con una exclamación: «¡Qué… es…!».', accept: ['¡Qué caro es el taxi al aeropuerto!'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige tres lugares de su barrio y dice una frase de cada uno: el más…, el mejor / el peor y -ísimo. Tú reaccionas con «¡Qué…!».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Sofía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El plan de mañana · Tomorrow’s plan', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué cuenta Sofía?). Segunda escucha: tu alumno levanta la mano con cada «el más… de» o «el mejor» y da una palmada con cada -ísimo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Busca los superlativos: el más… de, el mejor, -ísimo. Vas a oír «lleven» (bring, para ustedes): solo tienes que entenderlo. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Sofía para el grupo', channel: 'MENSAJE DE VOZ · DE SOFÍA PARA EL GRUPO', src: '/audio/grammar-live/369.mp3',
            before: 'Por la noche, Sofía manda un audio a Irene y a Marcos con el plan del día siguiente. ¿Qué lugares crees que van a visitar: un mercado, una playa, un restaurante…? (What places do you think they will visit tomorrow?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Sofía cancela el paseo de mañana por el calor.', 'Sofía cuenta el plan de mañana y recomienda los mejores lugares.', 'Sofía cuenta qué hicieron hoy en la torre.'], answer: 1, why: '«Les cuento el plan para mañana»: el mercado, el cerro del Faro y Casa Lola.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Dónde y a qué hora se ven mañana?', options: ['Al mediodía, en el cerro.', 'A las nueve, en la plaza.', 'A las diez, en el mercado.'], answer: 1, why: '«Nos vemos a las nueve en la plaza y vamos juntos al mercado».', en: 'Where and when do they meet tomorrow?' },
              { prompt: '¿Qué es especial en el mercado de San Juan?', options: ['Es el mercado más grande de la costa.', 'Es el mercado más barato del barrio.', 'Es el mercado más antiguo de la ciudad.'], answer: 2, why: '«El mercado de San Juan, el mercado más antiguo de la ciudad».', en: 'What is special about the San Juan market?' },
              { prompt: '¿Por qué suben al cerro del Faro?', options: ['Porque es el camino más corto al puerto.', 'Porque tiene la vista más bonita de Puerto Alba.', 'Porque allí está el mejor restaurante.'], answer: 1, why: '«Desde arriba se ve toda la bahía: es la vista más bonita de Puerto Alba».', en: 'Why are they going up the hill?' },
              { prompt: '¿Qué dice Sofía de Casa Lola?', options: ['Es carísimo, pero muy bueno.', 'No es el más famoso, pero su pescado es el mejor de la costa.', 'Es el restaurante más famoso de la ciudad.'], answer: 1, why: '«No es el restaurante más famoso, pero su pescado es el mejor de la costa».', en: 'What does Sofía say about Casa Lola?' },
              { prompt: '¿Por qué tienen que llevar agua y gorra?', options: ['Porque en el mercado no venden agua.', 'Porque va a hacer muchísimo calor.', 'Porque el camino es larguísimo.'], answer: 1, why: '«Lleven agua y gorra, porque mañana va a hacer muchísimo calor».', en: 'Why do they need to bring water and a cap?' },
            ],
            transcript: 'Hola a todos, soy Sofía, su guía. Gracias por el paseo de hoy. Les cuento el plan para mañana. Nos vemos a las nueve en la plaza y vamos juntos al mercado de San Juan, [[el mercado más antiguo de la ciudad|orange]]. Allí venden [[la mejor fruta del barrio|violet]] y el jugo de mango está [[riquísimo|teal]]. Después subimos al cerro del Faro. El camino es corto, pero un poco difícil. Desde arriba se ve toda la bahía: es [[la vista más bonita de Puerto Alba|orange]]. [[¡Qué bonita es al mediodía!|blue]] Por la tarde, si quieren, comemos en Casa Lola. No es [[el restaurante más famoso|orange]], pero su pescado es [[el mejor de la costa|violet]]. Lleven agua y gorra, porque mañana va a hacer [[muchísimo calor|teal]]. ¡Hasta mañana!',
            reply: { teacher: 'Tú eres Sofía. Tu alumno es Irene y responde al audio con tres frases: una reacción con «¡Qué…!», qué lugar le parece el mejor del plan y una pregunta para Sofía.', self: 'Responde a Sofía en voz alta como Irene: una reacción con «¡Qué…!», qué lugar del plan te parece el mejor y una pregunta. (Answer Sofía as Irene: a reaction, the best place, a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú eres el guía', coach: 'Lo mejor de tu ciudad. The best of your city.',
      steps: [
        { title: 'Enseña tu ciudad · Show your city', blocks: [
          { kind: 'guide', text: { teacher: 'Sofía quiere visitar la ciudad de tu alumno. Tú eres Sofía y haces las preguntas; tu alumno es el guía y responde con superlativos. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Sofía quiere visitar tu ciudad. Lee cada pregunta, responde en voz alta como guía y, si quieres, escribe tu respuesta. (Sofía wants to visit your city: answer as the guide.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cuál es el edificio más alto o más famoso de tu ciudad? · What is the tallest or most famous building in your city?', followUps: ['¿Se puede subir? (Can you go up?)', '¿Es muy antiguo? (Is it very old?)'], phrases: ['[[El edificio más alto de mi ciudad|orange]] es…', 'Es [[altísimo|teal]] / [[famosísimo|teal]]…', 'No es [[el más bonito|orange]], pero…'], hint: 'El / la + nombre + más + adjetivo + de mi ciudad.', example: 'El edificio más alto de mi ciudad es una torre de oficinas. Es altísima, pero no es el edificio más bonito: para mí, el más bonito es el teatro.', next: 'Ahora, la comida.' },
            { q: '¿Cuál es el mejor lugar de tu ciudad para comer algo típico? · What is the best place in your city to eat something typical?', followUps: ['¿Qué plato está buenísimo? (Which dish is really good?)', '¿Es caro o baratísimo? (Is it expensive or really cheap?)'], phrases: ['[[El mejor lugar para comer|violet]] es…', 'El / la … está [[riquísimo|teal]].', 'Es [[baratísimo|teal]] / [[carísimo|teal]].'], hint: 'El mejor + nombre, y un plato con -ísimo.', example: 'El mejor lugar para comer algo típico es el mercado del centro. La sopa de pescado está riquísima y es baratísima.', next: 'Ahora, los barrios.' },
            { q: '¿Cuál es el barrio más tranquilo de tu ciudad? ¿Y el más ruidoso? · What is the quietest neighbourhood in your city? And the noisiest?', followUps: ['¿Dónde vives tú? (Where do you live?)', '¿Cuál es el peor barrio para dormir? (Which is the worst area to sleep in?)'], phrases: ['[[El barrio más tranquilo|orange]] es…', '[[El más ruidoso|orange]] es…, porque…', '[[El peor barrio|violet]] para…'], hint: 'Puedes no repetir el nombre: «el más ruidoso».', example: 'El barrio más tranquilo es el barrio del río. El más ruidoso es el centro, porque hay muchísimos bares. Es el peor barrio para dormir.', next: 'Ahora, las personas.' },
            { q: 'En tu familia o en tu grupo de amigos, ¿quién es el mayor? ¿Y el menor? · In your family or group of friends, who is the oldest? And the youngest?', followUps: ['¿Cuántos años tiene? (How old is he or she?)', '¿Quién es el más divertido? (Who is the funniest?)'], phrases: ['[[El mayor|violet]] / [[La mayor|violet]] es…', '[[El menor|violet]] / [[La menor|violet]] es…', '[[El más divertido|orange]] de la familia es…'], hint: 'El mayor / la mayor para la edad. Para otras cualidades: el más… de.', example: 'En mi familia, la mayor es mi abuela: tiene noventa años. El menor es mi sobrino. Y el más divertido de la familia es mi tío Raúl.', next: 'Ahora, reacciona.' },
            { q: 'Sofía te enseña fotos de Puerto Alba: la torre, el mercado, la playa. Reacciona con «¡Qué…!» y haz una pregunta. · React to Sofía’s photos and ask a question.', followUps: ['¿Cuál es tu foto favorita? (Which is your favourite photo?)', '¿Cuál es el lugar más bonito, para ti? (Which is the prettiest place, for you?)'], phrases: ['[[¡Qué bonito!|blue]] / [[¡Qué alta!|blue]]', '[[¡Qué playa tan bonita!|blue]]', '¿Es [[la playa más tranquila|orange]] de…?'], hint: '¡Qué + adjetivo! o ¡Qué + nombre + tan + adjetivo! Y después, una pregunta con superlativo.', example: '¡Qué torre tan alta! ¡Y qué playa más bonita! ¿Es la playa más tranquila de Puerto Alba?', teacher: 'Tú enseñas fotos reales en tu móvil (un paisaje, un plato, un edificio) y tu alumno reacciona a cada una con «¡Qué…!».' },
            { q: 'Ahora recomienda a Sofía tres lugares de tu ciudad: el mejor, el más bonito y uno -ísimo. · Recommend three places in your city to Sofía.', followUps: ['¿Por qué es el mejor? (Why is it the best?)', '¿Cuál no recomiendas? (Which one do you not recommend?)'], phrases: ['Te recomiendo [[el mejor|violet]]…', '[[El lugar más bonito|orange]] de mi ciudad es…', 'Es [[tranquilísimo|teal]] / [[baratísimo|teal]].'], hint: 'Tres frases, tres estructuras: el mejor, el más… de, -ísimo.', example: 'Te recomiendo el mejor café de mi barrio, el café del parque. El lugar más bonito de mi ciudad es el puente viejo. Y el jardín botánico es tranquilísimo.', teacher: 'Tú eres Sofía y reaccionas a cada recomendación: «¡Qué bien!», «¿Es el más caro?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú eres el guía de tu ciudad y tu alumno hace las preguntas («¿Cuál es el mejor…?», «¿Cuál es el más…?») y reacciona con «¡Qué…!».', self: 'Ahora tú eres Sofía: haz las preguntas en voz alta («¿Cuál es el mejor…?», «¿Cuál es el más…?») y responde con otra ciudad que conoces. (Now ask the questions, and answer about another city.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Lugares favoritos', coach: 'Lo mejor de tu ciudad, por escrito. The best of your city, in writing.',
      steps: [
        { title: 'Un mensaje para Sofía · A message for Sofía', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada superlativo: ¿lleva artículo? ¿El grupo va con «de»? ¿-ísimo concuerda? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada superlativo: artículo, «de» y concordancia. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Tres lugares de mi ciudad · Three places in my city', situation: 'Sofía prepara en su web una sección: «Los lugares favoritos de nuestros visitantes». Te pide un mensaje corto con tres lugares de tu ciudad que recomiendas. (Sofía is making a section on her website, “Our visitors’ favourite places”. She asks you for a short message recommending three places in your city.)', task: [
            'Saluda a Sofía y presenta tu ciudad en una frase. (Greet Sofía and introduce your city.)',
            'Recomienda un lugar con un superlativo relativo: el / la… más… de. (One place with “the most … in”.)',
            'Recomienda un lugar con el mejor, la mejor o los mejores. (One place with “the best”.)',
            'Usa dos adjetivos con -ísimo y una exclamación con «¡Qué…!». (Two -ísimo adjectives and one exclamation.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['Hola, Sofía:', 'Vivo en una ciudad…', 'Te recomiendo…', 'Es el / la… más… de…', 'Tiene el mejor / la mejor…', 'Está riquísimo / Es baratísimo…', '¡Qué…!', 'Un abrazo,'],
            words: ['el más… de', 'la menos… de', 'el mejor', 'la mejor', 'los mejores', 'el peor', 'buenísimo', 'riquísimo', 'baratísimo', 'tranquilísimo', 'altísimo', '¡Qué bonito!', '¡Qué… tan…!'],
            model: 'Hola, Sofía: Vivo en una ciudad pequeña del norte, con un río y muchos parques. Te recomiendo tres lugares. Primero, el mercado central: es [[el mercado más grande de la región|orange]] y la fruta está [[riquísima|teal]]. Segundo, la torre de San Pedro, [[el edificio más antiguo del centro|orange]]. Desde arriba se ve todo el río. [[¡Qué vista tan bonita!|blue]] Tercero, el café Luna, en mi barrio. No es [[el más famoso|orange]], pero tiene [[el mejor chocolate de la ciudad|violet]] y es [[baratísimo|teal]]. ¡Ven a visitarnos! Un abrazo, Clara.',
            minWords: 60,
            checks: [
              { label: 'Un superlativo relativo: el / la… más… (the most …)', pattern: '(?<!\\p{L})(?:el|la|los|las)\\s+(?:\\p{L}+\\s+)?(?:más|mas|menos)\\s+\\p{L}+', tip: 'Pon un lugar en el número uno de un grupo: «Es el mercado más grande de la región».' },
              { label: 'El mejor, la mejor, los mejores (the best)', pattern: '(?<!\\p{L})(?:el|la|los|las)\\s+(?:mejor|mejores|peor|peores)(?!\\p{L})', tip: 'Usa mejor con artículo: «Tiene el mejor chocolate de la ciudad».' },
              { label: 'Un adjetivo con -ísimo (very, very)', pattern: '\\p{L}{2,}[íi]sim[oa]s?(?!\\p{L})', tip: 'Muy, muy: «La fruta está riquísima», «Es baratísimo».' },
              { label: 'Una exclamación con ¡Qué…! (an exclamation)', pattern: '¡\\s*qu[ée](?!\\p{L})', tip: 'Reacciona: «¡Qué vista tan bonita!». Abre con ¡ y escribe qué con tilde.' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:más|mas)\\s+(?:mejor|mejores|peor|peores)(?!\\p{L})', why: '**Mejor** y **peor** ya contienen «más»: el mejor, nunca «el más mejor».' },
              { pattern: '(?<!\\p{L})muy\\s+\\p{L}+[íi]sim[oa]s?(?!\\p{L})', why: '**-ísimo** ya significa «muy»: buenísimo, sin «muy».' },
              { pattern: '¡\\s*que(?!\\p{L})', why: 'En una exclamación, **qué** lleva tilde: ¡Qué bonito!' },
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
            { tone: 'orange', label: 'RELATIVO', formula: 'el / la / los / las + nombre + más / menos + adjetivo + de', example: 'Es la calle más estrecha del barrio.', caption: 'el número uno de un grupo; el grupo va con de', en: 'number one in a group; the group goes with de' },
            { tone: 'violet', label: 'IRREGULARES', formula: 'el mejor · el peor · el mayor · el menor', example: 'Tiene el mejor café de la ciudad. Marcos es el mayor del grupo.', caption: 'sin «más»; mejor y peor, delante del nombre', en: 'no “más”; mejor and peor go before the noun' },
            { tone: 'teal', label: 'ABSOLUTO', formula: 'adjetivo + -ísimo / -ísima / -ísimos / -ísimas', example: 'Las empanadas están buenísimas y son baratísimas.', caption: 'muy, muy, sin comparar y sin «muy»', en: 'very, very: no comparison and no “muy”' },
            { tone: 'blue', label: 'EXCLAMACIÓN', formula: '¡Qué + adjetivo! · ¡Qué + nombre + tan / más + adjetivo!', example: '¡Qué alta! ¡Qué vista tan bonita!', caption: 'una reacción fuerte; qué con tilde', en: 'a strong reaction; qué with an accent' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿dos cosas, un grupo o ninguna comparación? Dos cosas: «más alta **que** la iglesia». Un grupo: «**el** edificio más alto **de** la ciudad», «**el mejor** café del barrio». Sin comparar: «alt**ísima**», «¡**Qué** alta!». Y nunca dobles la idea: ni «el más mejor» ni «muy buenísimo».', en: 'Ask yourself: two things, a group, or no comparison? Two things: “más alta que la iglesia”. A group: “el edificio más alto de la ciudad”, “el mejor café del barrio”. No comparison: “altísima”, “¡Qué alta!”. And never say it twice: not “el más mejor” and not “muy buenísimo”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Abril es ___ mes para visitar la costa: no hace calor y no llueve.', options: ['el más mejor', 'mejor que', 'el mejor'], answer: 2, why: 'El número uno de los meses: el mejor mes, sin «más».', en: 'April is the best month to visit the coast: it is not hot and it does not rain.' },
            { prompt: 'Agosto es el mes ___ caluroso del año.', options: ['muy', 'más', 'tan'], answer: 1, why: 'Superlativo relativo: el mes más caluroso del año.', en: 'August is the hottest month of the year.' },
            { prompt: '¡Gracias por el regalo! Es ___.', options: ['el más bonito que', 'muy bonitísimo', 'bonitísimo'], answer: 2, why: 'Sin grupo: muy, muy bonito. Bonitísimo, sin «muy».', en: 'Thanks for the present! It is really lovely.' },
            { prompt: 'Es el lago más grande ___ país.', options: ['como el', 'del', 'que el'], answer: 1, why: 'El grupo va con de: de + el = del país.', en: 'It is the biggest lake in the country.' },
            { prompt: 'Tus amigos te enseñan fotos de su viaje. Dices: «___»', options: ['¡Qué fotos tan bonitas!', '¡Qué tan bonitas fotos!', '¡Qué fotos tan bonitos!'], answer: 0, why: '¡Qué + nombre + tan + adjetivo!, y bonitas concuerda con «fotos».', en: 'Your friends show you photos of their trip. You say: “What lovely photos!”' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, la ciudad de Clara.', blocks: [
          { kind: 'lead', text: 'Clara vive en otra ciudad y escribe notas para la web de Sofía. Sus notas son correctas, pero un poco planas. Transforma cada nota con la estructura que se pide.', en: 'Clara lives in another city and writes notes for Sofía’s website. Her notes are correct, but a bit flat. Transform each note with the structure you are asked for.' },
          { kind: 'rewrite', title: 'Las notas de Clara · Clara’s notes', items: [
            { prompt: 'En mi ciudad, todos los parques son más pequeños que el parque Central.', instruction: 'Escribe la idea con un superlativo relativo. Empieza con «El parque Central es el…».', accept: ['El parque Central es el más grande de mi ciudad', 'El parque Central es el parque más grande de mi ciudad', 'El parque Central es el más grande de la ciudad', 'El parque Central es el parque más grande de la ciudad'] },
            { prompt: 'El pan de la panadería Sol es muy bueno.', instruction: 'Escribe la misma idea con -ísimo, sin «muy».', accept: ['El pan de la panadería Sol es buenísimo', 'El pan de la panadería Sol está buenísimo'] },
            { prompt: 'Todos los restaurantes de mi barrio son mejores que La Esquina.', instruction: 'Escribe la idea con «el peor». Empieza con «La Esquina es…».', accept: ['La Esquina es el peor restaurante de mi barrio', 'La Esquina es el peor de mi barrio', 'La Esquina es el peor restaurante del barrio', 'La Esquina es el peor del barrio'] },
          ] },
        ] },
        { title: 'Ampliación · Uno de los mejores y el mejor que he probado', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Dos estructuras muy frecuentes. Primera: **uno de los / una de las + nombre en plural + más + adjetivo + de**: «Es una de las ciudades más bonitas de la costa» (no es la número uno, pero está en el grupo de las mejores). Segunda: superlativo + **que** + pretérito perfecto, para tu experiencia: «Es el mejor café **que he probado**».', en: 'Two very common structures. First: “uno de los / una de las” + plural noun + más + adjective + de: “It is one of the most beautiful cities on the coast” (not number one, but in the top group). Second: superlative + que + present perfect, for your own experience: “It is the best coffee I have ever had”.' },
          { kind: 'tip', icon: '🌎', title: 'Otras maneras de intensificar · Other ways to intensify', text: 'En México y en otras zonas de América es frecuente **bien** + adjetivo con el sentido de «muy»: «La sopa está **bien rica**». En la conversación informal de muchos países también oyes **súper**: «súper barato». Son coloquiales; -ísimo funciona en todas partes. Y con el perfecto: en muchas zonas de América también se dice «el mejor café que **probé**» (clase 051).', en: 'In Mexico and other parts of Latin America, “bien” + adjective often means “very”: “La sopa está bien rica”. In informal speech in many countries you also hear “súper”: “súper barato”. These are colloquial; -ísimo works everywhere. And with the perfect: in many parts of Latin America people also say “el mejor café que probé” (class 051).' },
          { kind: 'choice', title: 'Para estudiantes rápidos · For fast learners', items: [
            { prompt: 'Puerto Alba es una de las ciudades ___ de la costa.', options: ['bonitísimas', 'más bonitas', 'más bonita'], answer: 1, why: 'Después de «una de las» el nombre y el adjetivo van en plural: las ciudades más bonitas.', en: 'Puerto Alba is one of the most beautiful cities on the coast.' },
            { prompt: 'Es la mejor dorada que ___ en mi vida.', options: ['he comido', 'como', 'comía'], answer: 0, why: 'Tu experiencia hasta hoy: que + pretérito perfecto, he comido.', en: 'It is the best sea bream I have ever eaten.' },
          ] },
          { kind: 'rewrite', title: 'Un paso más · One step further', items: [
            { prompt: 'La catedral es muy antigua. En la región hay otras iglesias muy antiguas.', instruction: 'Escribe una frase con «una de las». Empieza con «La catedral es una de las…».', accept: ['La catedral es una de las iglesias más antiguas de la región'] },
            { prompt: 'Nunca he visto una playa tan bonita como esta.', instruction: 'Escribe la idea con un superlativo + que + he visto. Empieza con «Es la playa…».', accept: ['Es la playa más bonita que he visto', 'Es la playa más bonita que he visto en mi vida', 'Es la playa más bonita que he visto nunca'] },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional: para estudiantes rápidos o si queda tiempo. Pregunta final: «¿Cuál es la mejor comida que has probado en un viaje?». Respuesta esperada: «La mejor comida que he probado es…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Extensión: Clase 240 · Diminutivos, aumentativos y valor afectivo', text: 'Antes de seguir, una clase de extensión sobre palabras como «un **cafecito**», «un **momentito**» o «un **golazo**»: qué expresan los diminutivos y los aumentativos además del tamaño.', en: 'Before moving on, an extension class on words like “un cafecito”, “un momentito” or “un golazo”: what diminutives and augmentatives express besides size.', href: '/gramatica/diminutivos-aumentativos-y-valor-afectivo', label: 'Ir a la clase 240' },
          { kind: 'link', title: 'Siguiente: Clase 070 · Cuantificadores algo, nada, alguien, nadie', text: 'Ya sabes decir qué es el número uno de un grupo («el edificio más alto de la ciudad», «el mejor café del barrio») y reaccionar con fuerza («¡Qué alta!», «buenísimo»). En la clase 070 aprendes a hablar de cosas y personas sin nombrarlas: «¿Hay **algo** típico para comer?», «No hay **nadie** en la torre». Es el paso natural: después de hablar de cantidad y grado, hablas de existencia: algo o nada, alguien o nadie.', en: 'You can now say what is number one in a group (“el edificio más alto de la ciudad”, “el mejor café del barrio”) and react strongly (“¡Qué alta!”, “buenísimo”). In class 070 you learn to talk about things and people without naming them: “Is there anything typical to eat?”, “There is nobody in the tower”. It is the natural next step: after quantity and degree, you talk about existence: something or nothing, someone or no one.', href: '/gramatica/cuantificadores-algo-nada-alguien-nadie', label: 'Ir a la clase 070' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuál es el lugar más bonito que conoces? ¿Por qué?». Respuesta esperada: un superlativo relativo, un -ísimo y una exclamación. Tarea: escribir el mensaje de Escribir sobre la ciudad real de tu alumno.' },
        ] },
      ],
    },
  ],
};
