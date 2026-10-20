import type { LiveLesson } from '../types';

/**
 * Lesson 367 · A2 · Relativas con donde, cuando y lo que (course unit G067).
 * One scene runs through the class: Elena Ríos and Raúl Medina have been
 * together for ten years on Saturday. Their friend Nuria Vidal, a
 * photographer, is going to take photos in the places of their story for an
 * anniversary album: the Café Aurora, where they met in 2016 (Elena was a
 * student, Raúl a waiter there); the small flat on calle Luna, where they
 * lived for three years; the park by the river, where they spent their
 * Sundays; the old bridge, where Raúl proposed in 2019. In the voice message
 * Raúl (Colombian voice) explains the plan to Nuria.
 * Content: donde = en el que / en la que / en los que / en las que after a
 * place noun; cuando after a time already named (En 2016, cuando estudiaba…),
 * and «el día (en) que» with día, año, momento (the natural choice; «el día
 * cuando» sounds odd); neuter «lo que» with no noun before it (what / the
 * thing that). Contrast with «que» (class 066): el café que abrió en 2010 /
 * el café donde nos conocimos. Typical mistakes: *el café que nos conocimos,
 * *Que más me gusta es…, *la plaza en el que. Ampliación: de donde, por donde,
 * todo lo que, lo que pasa es que (receptive). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 367,
  level: 'A2',
  title: 'Relativas con donde, cuando y lo que',
  subtitle: 'Hablar de los lugares, los momentos y las cosas importantes de tu vida: el café donde…, en 2016, cuando…, lo que más me gusta…',
  legend: [
    { tone: 'teal', label: 'LUGAR · donde, en el que, en la que (where, in which)' },
    { tone: 'orange', label: 'TIEMPO · cuando, el día que (when, the day that)' },
    { tone: 'violet', label: 'IDEA · lo que, sin nombre antes (what, the thing that)' },
    { tone: 'blue', label: 'QUE · repaso de la clase 066 (that, who)' },
  ],
  optionNotes: {
    'Qué': '«Qué» con tilde es para preguntas y exclamaciones. Aquí no hay pregunta y no hay nombre antes: **lo que**.',
    'qué': '«Qué» con tilde es para preguntas y exclamaciones. Aquí no hay pregunta y no hay nombre antes: **lo que**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lugares, momentos e ideas', coach: 'Un lugar, un momento, una idea. A place, a time, an idea.',
      steps: [
        { title: 'Diez años juntos · Ten years together', blocks: [
          { kind: 'lead', text: 'Elena y Raúl cumplen diez años juntos el sábado. Su amiga Nuria es fotógrafa y va a hacer fotos en los lugares importantes de su historia para un álbum. Elena mira una foto antigua y dice: «Este es el sitio **donde** nos conocimos». Hoy aprendes a unir dos ideas en una frase para hablar de un lugar, de un momento o de una cosa sin repetir palabras.', en: 'On Saturday it will be ten years since Elena and Raúl got together. Their friend Nuria is a photographer and is going to take photos in the important places of their story for an album. Elena looks at an old photo and says: “This is the place where we met.” Today you learn to join two ideas in one sentence to talk about a place, a time or a thing without repeating words.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase y tu alumno repite. Después tu alumno dice qué une cada palabra marcada: un lugar, un momento o una idea.', self: 'Lee cada frase en voz alta. ¿La palabra marcada habla de un lugar, de un momento o de una idea? (A place, a time or an idea?)' } },
          { kind: 'compare', title: 'Tres palabras para unir · Three linking words', columns: [
            { tone: 'teal', label: 'LUGAR · donde', sentence: 'Este es el café [[donde|teal]] nos conocimos.', idea: 'Nos conocimos **en** el café: donde = en el que.', en: 'This is the café where we met.' },
            { tone: 'orange', label: 'TIEMPO · cuando', sentence: 'En 2016, [[cuando|orange]] yo estudiaba, Raúl trabajaba aquí.', idea: 'Añade información a un momento que ya dices: en 2016.', en: 'In 2016, when I was a student, Raúl worked here.' },
            { tone: 'violet', label: 'IDEA · lo que', sentence: '[[Lo que|violet]] más me gusta es esta foto.', idea: 'No hay un nombre antes: lo que = la cosa que.', en: 'What I like most is this photo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Este es el café donde nos conocimos.» ¿Dónde se conocieron Elena y Raúl?', options: ['En casa de Nuria.', 'En el café.', 'En la universidad.'], answer: 1, why: '«Donde» une «el café» con lo que pasó allí: se conocieron en el café.', en: 'Where did Elena and Raúl meet?' },
            { prompt: 'En «Lo que más me gusta es esta foto», «lo que» significa…', options: ['where', 'what (the thing that)', 'when'], answer: 1, why: '«Lo que» habla de una cosa o una idea sin nombrarla antes: what.', en: 'In this sentence, “lo que” means…' },
          ] },
        ] },
        { title: 'Donde = en el que · Where = in which', mascot: '/brand/mascot/studying.webp', coach: 'Un lugar + donde. A place + where.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'LUGAR · DONDE', question: '¿Qué pasa en ese lugar?', en: 'What happens in that place?', formula: ['lugar + donde + verbo', 'lugar + en el que / en la que / en los que / en las que + verbo'],
            meaning: '**Donde** une un lugar con lo que pasa en ese lugar. Significa lo mismo que **en + el / la / los / las + que**. El artículo concuerda con el lugar: el café → en **el** que; la calle → en **la** que. Fíjate: «donde» no lleva tilde aquí, porque no es una pregunta.',
            examples: [
              { es: 'Nos conocimos en el café. → Es el café [[donde|teal]] nos conocimos.', en: 'We met in the café. → It’s the café where we met.' },
              { es: 'Vivimos tres años en la calle Luna. → Es la calle [[en la que|teal]] vivimos tres años.', en: 'It’s the street where we lived for three years.' },
              { es: 'Raúl trabajaba en ese café. → Es el café [[en el que|teal]] trabajaba Raúl.', en: 'It’s the café where Raúl used to work.' },
            ] },
          { kind: 'table', title: 'Donde o en + artículo + que · Two ways to say “where”', head: ['Lugar (place)', 'Con donde', 'Con en + artículo + que'], rows: [
            ['el café (masculino)', 'el café [[donde|teal]] nos conocimos', 'el café [[en el que|teal]] nos conocimos'],
            ['la plaza (femenino)', 'la plaza [[donde|teal]] tomábamos helado', 'la plaza [[en la que|teal]] tomábamos helado'],
            ['los bares (plural)', 'los bares [[donde|teal]] cenábamos', 'los bares [[en los que|teal]] cenábamos'],
            ['las calles (plural)', 'las calles [[donde|teal]] paseábamos', 'las calles [[en las que|teal]] paseábamos'],
          ], note: 'Las dos formas son correctas y significan lo mismo. «Donde» es más corta y muy frecuente en la conversación.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Esta es la plaza ___ Elena leía los domingos.', options: ['en la que', 'lo que', 'en el que'], answer: 0, why: '«La plaza» es femenino singular: en **la** que (o donde).', en: 'This is the square where Elena used to read on Sundays.' },
            { prompt: 'Es el piso ___ vivimos tres años.', options: ['cuando', 'lo que', 'donde'], answer: 2, why: 'Vivimos **en** el piso: un lugar. Donde (= en el que).', en: 'It’s the flat where we lived for three years.' },
          ] },
        ] },
        { title: 'Cuando y el día que · When and the day that', mascot: '/brand/mascot/standing.webp', coach: 'Un momento + cuando. A time + when.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'TIEMPO · CUANDO', question: '¿Qué pasaba en ese momento?', en: 'What was going on at that time?', formula: ['momento + , cuando + verbo + ,', 'el día / el año / el momento + que (o en que) + verbo'],
            meaning: '**Cuando** añade información a un momento que ya dices: un año, un mes, una estación, los domingos. Normalmente va entre comas. Con palabras como **día, año, mes, momento**, lo más natural es **que** o **en que**: «el día que nos conocimos». Ya conoces «cuando» al principio de la frase (clase 054): «Cuando llegué, llovía».',
            examples: [
              { es: 'En 2016, [[cuando|orange]] Elena estudiaba en la universidad, conoció a Raúl.', en: 'In 2016, when Elena was at university, she met Raúl.' },
              { es: 'Los domingos, [[cuando|orange]] hace sol, vamos al parque.', en: 'On Sundays, when it’s sunny, we go to the park.' },
              { es: 'Recuerdo muy bien [[el día que|orange]] nos conocimos.', en: 'I remember the day we met very well.' },
              { es: 'Fue [[el año en que|orange]] empecé a trabajar.', en: 'It was the year I started working.' },
            ] },
          { kind: 'tip', icon: '💡', title: '«El día cuando» suena raro · “El día cuando” sounds odd', text: 'En inglés dices «the day when we met». En español, después de **el día**, **el año** o **el momento**, lo normal es **que** o **en que**: «el día **que** nos conocimos», «el año **en que** nací». «Cuando» va mejor después de una fecha o una época, con coma: «En 2016, **cuando** yo estudiaba…».', en: 'In English you say “the day when we met”. In Spanish, after el día, el año or el momento, the normal choice is que or en que: “el día que nos conocimos”, “el año en que nací”. Cuando fits better after a date or a period, with a comma: “En 2016, cuando yo estudiaba…”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En 2019, ___ vivíamos en la calle Luna, compramos el primer sofá.', options: ['cuando', 'donde', 'lo que'], answer: 0, why: '«En 2019» es un momento; «cuando» añade qué pasaba en ese momento.', en: 'In 2019, when we lived on Luna Street, we bought our first sofa.' },
            { prompt: '¿Cuál es la frase más natural?', options: ['Nunca olvido el día donde llegué aquí.', 'Nunca olvido el día cuando llegué aquí.', 'Nunca olvido el día que llegué aquí.'], answer: 2, why: 'Después de «el día», lo natural es «que» (o «en que»).', en: 'Which sentence sounds most natural?' },
          ] },
        ] },
        { title: 'Lo que · What, the thing that', mascot: '/brand/mascot/speaking.webp', coach: 'Sin nombre antes: lo que. No noun before: lo que.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'IDEA · LO QUE', question: '¿Qué cosa? (sin decir su nombre)', en: 'Which thing? (without naming it)', formula: ['lo que + verbo', 'lo que más me gusta es… · lo que necesito es…'],
            meaning: '**Lo que** no tiene un nombre antes. Significa «la cosa que» o «las cosas que» (en inglés, muchas veces **what**). Es neutro: siempre **lo**. Con «lo que» al principio, el verbo «ser» va normalmente en singular: «Lo que quiero **es** un álbum sencillo».',
            examples: [
              { es: '[[Lo que|violet]] más me gusta de esta foto es tu sonrisa.', en: 'What I like most about this photo is your smile.' },
              { es: 'Esto es [[lo que|violet]] necesitamos: tiempo para nosotros.', en: 'This is what we need: time for ourselves.' },
              { es: 'Nuria siempre hace [[lo que|violet]] promete.', en: 'Nuria always does what she promises.' },
            ] },
          { kind: 'compare', title: '«What» en español · “What” in Spanish', columns: [
            { tone: 'neutral', label: 'PREGUNTA · qué (con tilde)', sentence: '¿Qué quieres para el álbum?', idea: 'Una pregunta directa: «qué» con tilde.', en: 'What do you want for the album?' },
            { tone: 'violet', label: 'NO ES PREGUNTA · lo que', sentence: '[[Lo que|violet]] quiero es un álbum sencillo.', idea: 'No preguntas: dices la cosa. Lo que, sin tilde.', en: 'What I want is a simple album.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ más me gusta del piso es la terraza.', options: ['Que', 'Qué', 'Lo que'], answer: 2, why: 'No hay pregunta y no hay nombre antes: lo que (what).', en: 'What I like most about the flat is the terrace.' },
            { prompt: '¿___ quieres hacer el sábado?', options: ['Que', 'Qué', 'Lo que'], answer: 1, why: 'Es una pregunta directa: «qué» con tilde.', en: 'What do you want to do on Saturday?' },
          ] },
        ] },
        { title: '¿Que o donde? · Que or donde?', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿El verbo necesita «en»? Does the verb need “en”?', blocks: [
          { kind: 'compare', title: 'El mismo lugar, dos frases · Same place, two sentences', columns: [
            { tone: 'blue', label: 'QUE · clase 066', sentence: 'Es el café [[que|blue]] abrió en 2010.', idea: 'El café abrió: «el café» hace la acción. Sin «en»: que.', en: 'It’s the café that opened in 2010.' },
            { tone: 'teal', label: 'DONDE · hoy', sentence: 'Es el café [[donde|teal]] nos conocimos.', idea: 'Nos conocimos **en** el café: donde o en el que.', en: 'It’s the café where we met.' },
          ] },
          { kind: 'decide', title: '¿Qué palabra uso? · Which word do I use?', steps: [
            { q: '¿Hay un nombre antes (el café, la calle, el día)?', yes: 'next', no: 'Usa **lo que**: «Lo que quiero es descansar».' },
            { q: '¿Es un lugar, y la frase sin relativo lleva «en»? (Nos conocimos **en** el café.)', yes: 'Usa **donde** o **en el / la / los / las que**: «el café donde nos conocimos».', no: 'next' },
            { q: '¿Es un momento? (2016, el verano, el día, el año)', yes: 'Con fecha o época, **cuando** entre comas: «En 2016, cuando…». Con día, año, momento: **que** o **en que**.', no: 'Usa **que** (clase 066): «el café que abrió en 2010», «la casa que compramos».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es la casa ___ compraron mis padres.', options: ['donde', 'que', 'en la que'], answer: 1, why: 'Compraron **la casa** (sin «en»): que.', en: 'It’s the house that my parents bought.' },
            { prompt: 'Es la casa ___ nació mi padre.', options: ['que', 'lo que', 'donde'], answer: 2, why: 'Mi padre nació **en** la casa: donde (o en la que).', en: 'It’s the house where my father was born.' },
            { prompt: 'No entiendo ___ pasa con la cámara.', options: ['donde', 'el que', 'lo que'], answer: 2, why: 'No hay nombre antes: «lo que pasa» (what is happening).', en: 'I don’t understand what is happening with the camera.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Mira bien el lugar. Look closely at the place.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla: ¿falta «en»?, ¿falta «lo»?, ¿no concuerda el artículo? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla. Toca para ver la corrección. (What is wrong? Tap to see the correction.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Este es el café que nos conocimos.', right: 'Este es el café donde (en el que) nos conocimos.', why: 'Nos conocimos **en** el café: el lugar necesita donde o en el que. (We met IN the café.)' },
            { wrong: 'Que más me gusta es la terraza.', right: 'Lo que más me gusta es la terraza.', why: 'Sin nombre antes, «what» es **lo que**. (No noun before: lo que.)' },
            { wrong: 'Es la plaza en el que tomábamos helado.', right: 'Es la plaza en la que tomábamos helado.', why: 'El artículo concuerda con el lugar: la plaza → en **la** que.' },
            { wrong: 'Es el piso donde alquilamos en 2018.', right: 'Es el piso que alquilamos en 2018.', why: 'Alquilamos **el piso** (sin «en»): que. (We rented the flat.)' },
            { wrong: 'Recuerdo el día cuando nos conocimos.', right: 'Recuerdo el día que (en que) nos conocimos.', why: 'Después de «el día», lo natural es que o en que. (Sounds more natural.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es el bar ___ Raúl trabajaba de camarero.', options: ['en la que', 'que', 'en el que'], answer: 2, why: 'Raúl trabajaba **en** el bar (masculino): en el que (o donde).', en: 'It’s the bar where Raúl worked as a waiter.' },
            { prompt: '___ necesito ahora es un café.', options: ['Qué', 'Lo que', 'Que'], answer: 1, why: 'No hay nombre antes y no es una pregunta: lo que.', en: 'What I need now is a coffee.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice dos frases sobre su ciudad: «El sitio donde más tiempo paso es…» y «Lo que más me gusta de mi ciudad es…». Tú preguntas: «¿Por qué donde? ¿Por qué lo que?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las fotos de Elena y Raúl', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Fotos antiguas · Old photos', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Raúl y tu alumno es Elena. Después tu alumno toca cada palabra marcada y dice si habla de un lugar, de un momento o de una idea.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿lugar, momento o idea? (Place, time or idea?)' } },
          { kind: 'explore', title: 'Nuestros lugares', setting: 'Jueves por la noche, en casa. Elena y Raúl miran fotos antiguas en el sofá y preparan la lista de lugares para Nuria. (Thursday night, at home. Elena and Raúl look at old photos on the sofa and make the list of places for Nuria.)', lines: [
            { who: 'Raúl', text: 'Mira esta foto: es el café [[donde|teal]] nos conocimos.', en: 'Look at this photo: it’s the café where we met.' },
            { who: 'Elena', text: '¡Qué jóvenes! Fue en 2016, [[cuando|orange]] yo estudiaba en la universidad y tú trabajabas allí de camarero.', en: 'So young! It was in 2016, when I was at university and you worked there as a waiter.' },
            { who: 'Raúl', text: 'Sí. Y esta es la mesa [[en la que|teal]] te sentabas siempre, al lado de la ventana.', en: 'Yes. And this is the table where you always sat, next to the window.' },
            { who: 'Elena', text: '¡Y tú siempre me traías un café [[que|blue]] yo no pedía!', en: 'And you always brought me a coffee that I hadn’t ordered!' },
            { who: 'Raúl', text: 'Bueno… era una excusa para hablar contigo.', en: 'Well… it was an excuse to talk to you.' },
            { who: 'Elena', text: '¿Y esta? Es la calle Luna, ¿no? El piso [[donde|teal]] vivimos tres años.', en: 'And this one? It’s Luna Street, isn’t it? The flat where we lived for three years.' },
            { who: 'Raúl', text: 'Sí. Era muy pequeño, pero [[lo que|violet]] más me gustaba era la terraza.', en: 'Yes. It was very small, but what I liked most was the terrace.' },
            { who: 'Elena', text: '¿Recuerdas [[el día que|orange]] llegamos con todas las cajas? Llovía muchísimo.', en: 'Do you remember the day we arrived with all the boxes? It was pouring with rain.' },
            { who: 'Raúl', text: '¡Y el ascensor no funcionaba! Bueno, para el álbum, ¿quieres algo serio, en un estudio?', en: 'And the lift wasn’t working! Well, for the album, do you want something serious, in a studio?' },
            { who: 'Elena', text: 'No, [[lo que|violet]] quiero es algo natural: fotos sin poses.', en: 'No, what I want is something natural: photos without poses.' },
            { who: 'Raúl', text: 'Perfecto. Entonces, para Nuria: el café, la calle Luna y el puente [[donde|teal]] te pedí matrimonio.', en: 'Perfect. So, for Nuria: the café, Luna Street and the bridge where I asked you to marry me.' },
            { who: 'Elena', text: '¡Y el parque del río, [[en el que|teal]] pasábamos los domingos, [[cuando|orange]] no teníamos dinero para nada más!', en: 'And the park by the river, where we spent our Sundays, when we didn’t have money for anything else!' },
          ], notes: {
            'donde': 'Lugar + **donde**: nos conocimos **en** el café, vivimos **en** el piso, le pedí matrimonio **en** el puente. Donde = en el que / en la que.',
            'cuando': '**Cuando** añade información a un momento que ya está en la frase: «en 2016», «los domingos». Va con coma.',
            'en la que': '= donde. «La mesa» es femenino: en **la** que. Te sentabas **en** la mesa.',
            'que': 'Repaso de la clase 066: «un café **que** yo no pedía». Yo no pedía **el café**: no hay «en», por eso **que** y no donde.',
            'lo que': '**Lo que** = what, la cosa que. No hay un nombre antes. Fíjate: «lo que me gustaba **era**», «lo que quiero **es**»: el verbo ser en singular.',
            'el día que': 'Con «el día», lo natural es **que** (o **en que**): «el día que llegamos». No «el día cuando».',
            'en el que': '= donde. «El parque» es masculino: en **el** que. Pasábamos los domingos **en** el parque.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué hacía Raúl en 2016?', options: ['Hacía fotos.', 'Estudiaba en la universidad.', 'Trabajaba de camarero en el café.'], answer: 2, why: '«…y tú trabajabas allí de camarero». La estudiante era Elena.', en: 'What was Raúl doing in 2016?' },
            { prompt: '¿Qué le gustaba más a Raúl del piso de la calle Luna?', options: ['La terraza.', 'El ascensor.', 'Que era pequeño.'], answer: 0, why: '«Era muy pequeño, pero lo que más me gustaba era la terraza».', en: 'What did Raúl like most about the flat on Luna Street?' },
            { prompt: '¿Qué quiere Elena para el álbum?', options: ['Fotos serias en un estudio.', 'Solo fotos del café.', 'Fotos naturales, sin poses.'], answer: 2, why: '«Lo que quiero es algo natural: fotos sin poses».', en: 'What does Elena want for the album?' },
          ] },
        ] },
        { title: '¿Lugar, momento o idea? · Place, time or idea?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: 'La lista para Nuria · The list for Nuria', categories: [
            { id: 'lugar', label: 'LUGAR · donde, en el que', tone: 'teal' },
            { id: 'tiempo', label: 'TIEMPO · cuando, el día que', tone: 'orange' },
            { id: 'idea', label: 'IDEA · lo que', tone: 'violet' },
          ], items: [
            { text: 'el café donde nos conocimos', answer: 'lugar', why: 'Un lugar: nos conocimos en el café.' },
            { text: 'en 2016, cuando Elena estudiaba', answer: 'tiempo', why: 'Información sobre un momento: 2016.' },
            { text: 'lo que más le gustaba a Raúl', answer: 'idea', why: 'Una cosa sin nombre antes: lo que.' },
            { text: 'la mesa en la que Elena se sentaba', answer: 'lugar', why: 'Un lugar: Elena se sentaba en la mesa.' },
            { text: 'el día que llegaron con las cajas', answer: 'tiempo', why: 'Un momento: el día + que.' },
            { text: 'lo que quiere Elena para el álbum', answer: 'idea', why: 'Una cosa sin nombre antes: lo que.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cuál es el sitio donde conociste a tu mejor amigo o amiga? ¿Qué año fue?». Tu alumno responde con donde y con cuando: «Fue en 2010, cuando…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Lugar, momento o idea. Place, time or idea.',
      steps: [
        { title: 'La lista de Nuria · Nuria’s list', blocks: [
          { kind: 'choice', items: [
            { context: 'Nuria prepara la sesión de fotos. (Nuria plans the photo shoot.)', prompt: 'El sábado empezamos en el café ___ se conocieron Elena y Raúl.', options: ['donde', 'lo que', 'que'], answer: 0, why: 'Se conocieron **en** el café: un lugar, donde.', en: 'On Saturday we start at the café where Elena and Raúl met.' },
            { context: 'Nuria habla de su cámara. (Nuria talks about her camera.)', prompt: 'Tengo una cámara nueva ___ hace fotos muy buenas con poca luz.', options: ['que', 'donde', 'en la que'], answer: 0, why: 'La cámara hace fotos: es el sujeto, no un lugar. Que.', en: 'I have a new camera that takes very good photos in low light.' },
            { context: 'Nuria lee las notas de Raúl. (Nuria reads Raúl’s notes.)', prompt: 'La terraza era ___ más le gustaba a Raúl del piso.', options: ['lo que', 'que', 'donde'], answer: 0, why: 'No hay nombre antes de «más le gustaba»: lo que.', en: 'The terrace was what Raúl liked most about the flat.' },
            { context: 'Elena recuerda un trabajo antiguo. (Elena remembers an old job.)', prompt: 'Esta es la librería ___ trabajé dos veranos.', options: ['en el que', 'en la que', 'que'], answer: 1, why: 'Trabajé **en** la librería (femenino): en la que.', en: 'This is the bookshop where I worked for two summers.' },
            { context: 'Raúl cuenta una historia. (Raúl tells a story.)', prompt: 'En 2018, ___ vivíamos en la calle Luna, adoptamos un gato.', options: ['cuando', 'donde', 'lo que'], answer: 0, why: '«En 2018» es un momento; «cuando» añade qué pasaba entonces.', en: 'In 2018, when we lived on Luna Street, we adopted a cat.' },
          ] },
        ] },
        { title: '¿Que o donde? · Que or donde?', blocks: [
          { kind: 'classify', title: '¿El verbo necesita «en»? · Does the verb need “en”?', categories: [
            { id: 'donde', label: 'DONDE · en el / la que (lleva «en»)', tone: 'teal' },
            { id: 'que', label: 'QUE · sin «en» (clase 066)', tone: 'blue' },
          ], items: [
            { text: 'el restaurante … cenamos el viernes', answer: 'donde', why: 'Cenamos **en** el restaurante: donde.' },
            { text: 'el restaurante … abrió en la esquina', answer: 'que', why: 'El restaurante abrió: es el sujeto. Que.' },
            { text: 'la casa … alquilamos en 2018', answer: 'que', why: 'Alquilamos **la casa**, sin «en»: que.' },
            { text: 'el pueblo … nació mi abuela', answer: 'donde', why: 'Mi abuela nació **en** el pueblo: donde.' },
            { text: 'el parque … tiene un lago', answer: 'que', why: 'El parque tiene un lago: es el sujeto. Que.' },
            { text: 'la oficina … trabaja Nuria', answer: 'donde', why: 'Nuria trabaja **en** la oficina: donde.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Este es el bar que celebramos mi cumpleaños.', ok: false, options: ['Este es el bar donde celebramos mi cumpleaños.', 'Este es el bar en la que celebramos mi cumpleaños.', 'Este es el bar lo que celebramos mi cumpleaños.'], answer: 0, why: 'Celebramos **en** el bar: donde. «En la que» no concuerda con «el bar».' },
            { sentence: 'Lo que más me gusta de mi barrio es el mercado.', ok: true, why: 'Correcta: no hay nombre antes, lo que; y «es» en singular.' },
            { sentence: 'Que necesito ahora es un café.', ok: false, options: ['Donde necesito ahora es un café.', 'Qué necesito ahora es un café.', 'Lo que necesito ahora es un café.'], answer: 2, why: '«What» sin pregunta y sin nombre antes: lo que.' },
            { sentence: 'Es la ciudad en el que nací.', ok: false, options: ['Es la ciudad en la que nací.', 'Es la ciudad que nací.', 'Es la ciudad lo que nací.'], answer: 0, why: '«La ciudad» es femenino: en **la** que. «Que» solo no sirve: nací **en** la ciudad.' },
            { sentence: 'Recuerdo el día cuando llegué a esta ciudad.', ok: false, options: ['Recuerdo el día donde llegué a esta ciudad.', 'Recuerdo el día lo que llegué a esta ciudad.', 'Recuerdo el día que llegué a esta ciudad.'], answer: 2, why: 'Con «el día», lo natural es que (o en que). «Donde» es para lugares.' },
            { sentence: 'En 2020, cuando vivíamos en Quito, aprendimos a bailar salsa.', ok: true, why: 'Correcta: «cuando» añade información a «en 2020», entre comas.' },
          ] },
        ] },
        { title: 'Mensajes con Nuria · Messages with Nuria', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Elena y Nuria se escriben · Elena and Nuria text each other', lines: [
            { who: 'Nuria', text: '¡Hola, Elena! Ya tengo la lista. ¿El café es el sitio ___ conociste a Raúl?', options: ['donde', 'lo que', 'que'], answer: 0, why: 'Conociste a Raúl **en** el café: donde.' },
            { who: 'Elena', text: 'Sí. Y la mesa ___ me sentaba está todavía allí, al lado de la ventana.', options: ['que', 'en la que', 'en el que'], answer: 1, why: 'Me sentaba **en** la mesa (femenino): en la que.' },
            { who: 'Nuria', text: '¡Qué bonito! ¿Y a qué hora vamos al puente?' },
            { who: 'Elena', text: 'Mejor por la mañana, temprano, ___ no hay mucha gente.', options: ['cuando', 'donde', 'lo que'], answer: 0, why: '«Por la mañana, temprano» es un momento; cuando añade información sobre él.' },
            { who: 'Nuria', text: 'Perfecto. ¿Y el piso de la calle Luna?' },
            { who: 'Elena', text: 'Ahora vive otra familia allí, pero el edificio tiene una puerta azul ___ es preciosa.', options: ['donde', 'que', 'en la que'], answer: 1, why: 'La puerta es preciosa: es el sujeto, no un lugar. Que.' },
            { who: 'Nuria', text: 'Muy bien. ¿Algo más?' },
            { who: 'Elena', text: 'Sí: ___ no quiero es una sesión muy seria. ¡Queremos reír!', options: ['lo que', 'qué', 'que'], answer: 0, why: 'No hay pregunta ni nombre antes: lo que (what).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['donde', 'Este', 'es', 'el', 'café', 'nos', 'conocimos'], accept: ['Este es el café donde nos conocimos'], en: 'This is the café where we met.' },
            { tiles: ['gusta', 'Lo', 'que', 'más', 'me', 'es', 'la', 'terraza'], accept: ['Lo que más me gusta es la terraza', 'La terraza es lo que más me gusta'], en: 'What I like most is the terrace.' },
            { tiles: ['la', 'que', 'Esta', 'en', 'es', 'la', 'calle', 'vivimos'], accept: ['Esta es la calle en la que vivimos'], en: 'This is the street where we live.' },
            { tiles: ['cuando', 'En 2016,', 'estudiaba', 'en', 'la', 'universidad,', 'conocí', 'a', 'Raúl'], accept: ['En 2016, cuando estudiaba en la universidad, conocí a Raúl'], en: 'In 2016, when I was at university, I met Raúl.' },
          ] },
        ] },
        { title: 'Une las frases · Join the sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'rewrite', title: 'Dos frases, una frase · Two sentences, one sentence', items: [
            { prompt: 'Esta es la plaza. Elena y Raúl tomaban helado en la plaza.', instruction: 'Une las frases con «donde». Empieza con «Esta es la plaza».', accept: ['Esta es la plaza donde Elena y Raúl tomaban helado', 'Esta es la plaza donde tomaban helado Elena y Raúl'] },
            { prompt: 'Este es el hotel. Nuria trabajó en el hotel en 2015.', instruction: 'Une las frases con «en el que». Empieza con «Este es el hotel».', accept: ['Este es el hotel en el que Nuria trabajó en 2015', 'Este es el hotel en el que trabajó Nuria en 2015', 'Este es el hotel en el que en 2015 trabajó Nuria'] },
            { prompt: 'Quiero un álbum sencillo.', instruction: 'Empieza con «Lo que quiero…».', accept: ['Lo que quiero es un álbum sencillo'] },
            { prompt: 'En 2020 vivíamos en Quito. En 2020 aprendimos a bailar salsa.', instruction: 'Une las frases con «cuando». Empieza con «En 2020,».', accept: ['En 2020, cuando vivíamos en Quito, aprendimos a bailar salsa'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno enseña una foto real del móvil (o la describe) en tres frases: un lugar con donde, un momento con cuando y una frase con «lo que más me gusta…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Raúl', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El plan del sábado · Saturday’s plan', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno dice «¡lugar!» con cada donde o en el que, y «¡momento!» con cada cuando. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en donde, en el que, cuando y lo que. Vas a oír «le pedí matrimonio» (I proposed to her). (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Raúl', channel: 'MENSAJE DE VOZ · DE RAÚL PARA NURIA', src: '/audio/grammar-live/367.mp3',
            before: 'Raúl le manda un mensaje de voz a Nuria, la fotógrafa. ¿Qué crees que dice: los lugares, la hora, cómo quieren las fotos…? (Raúl sends Nuria a voice message. What do you think he talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Raúl explica los lugares y la hora de las fotos del sábado.', 'Raúl invita a Nuria a una fiesta sorpresa para Elena.', 'Raúl cancela la sesión de fotos del sábado.'], answer: 0, why: '«Te cuento el plan para el sábado»: los lugares, la hora y el tipo de fotos.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué hacían Elena y Raúl en el parque del río?', options: ['Pasaban los domingos allí.', 'Trabajaban allí.', 'Se conocieron allí.'], answer: 0, why: '«El parque del río, en el que pasábamos los domingos».', en: 'What did Elena and Raúl do in the park by the river?' },
              { prompt: '¿Cuándo le pidió Raúl matrimonio a Elena?', options: ['En 2019, cuando vivían en la calle Luna.', 'En 2016, cuando ella estudiaba.', 'El año pasado, en el café.'], answer: 0, why: '«…le pedí matrimonio, en 2019, cuando vivíamos en la calle Luna».', en: 'When did Raúl propose to Elena?' },
              { prompt: '¿Por qué quiere Raúl empezar a las nueve?', options: ['Porque la luz es suave y no hay mucha gente.', 'Porque el café cierra a las diez.', 'Porque después tienen que trabajar.'], answer: 0, why: '«A las nueve, cuando la luz es suave y no hay mucha gente».', en: 'Why does Raúl want to start at nine?' },
              { prompt: '¿Qué es lo que más le gusta a Elena?', options: ['Los cafés antiguos.', 'Reír.', 'Las fotos serias.'], answer: 1, why: '«Lo que más le gusta a Elena es reír».', en: 'What does Elena like most?' },
            ],
            transcript: 'Hola, Nuria, soy Raúl. Te cuento el plan para el sábado. Primero vamos al Café Aurora, el sitio [[donde|teal]] Elena y yo nos conocimos. Después, el parque del río, [[en el que|teal]] pasábamos los domingos. El puente viejo también es muy importante para nosotros: es el lugar [[donde|teal]] le pedí matrimonio, en 2019, [[cuando|orange]] vivíamos en la calle Luna. Mejor empezamos temprano, a las nueve, [[cuando|orange]] la luz es suave y no hay mucha gente. Ah, y una cosa más: [[lo que|violet]] más le gusta a Elena es reír, así que [[lo que|violet]] queremos es un día divertido, sin fotos muy serias. Esta noche te mando la dirección del café. ¡Muchas gracias, Nuria! Un abrazo.',
            reply: { teacher: 'Tú eres Raúl. Tu alumno es Nuria y responde al mensaje con tres frases: confirma la hora, pregunta por un lugar más («¿Hay otro sitio donde…?») y dice lo que necesita para la sesión.', self: 'Responde a Raúl en voz alta como Nuria: confirma la hora, pregunta por otro lugar («¿Hay otro sitio donde…?») y di lo que necesitas. (Answer as Nuria: confirm the time, ask about another place, say what you need.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus lugares y tus momentos', coach: 'Habla de tu vida. Talk about your life.',
      steps: [
        { title: 'El álbum de tu vida · The album of your life', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Nuria y haces las preguntas: tu alumno prepara «su» álbum con lugares y momentos reales de su vida. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Imagina que Nuria prepara un álbum de tu vida. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Imagine Nuria makes an album of your life. Answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cuál es el sitio de tu ciudad donde más tiempo pasas? · Where in your town do you spend the most time?', followUps: ['¿Qué haces allí? (What do you do there?)', '¿Con quién vas? (Who do you go with?)'], phrases: ['El sitio [[donde|teal]] más tiempo paso es…', 'Es un café / un parque [[en el que|teal]]…'], hint: 'Un lugar + donde o en el / la que + lo que haces allí.', example: 'El sitio donde más tiempo paso es la biblioteca del barrio. Es un lugar tranquilo en el que leo y trabajo.', next: 'Ahora, tu casa de antes.', teacher: 'Responde tú primero con un lugar tuyo: así tu alumno oye el modelo con donde y en el que.' },
            { q: '¿Cómo era la casa donde vivías de niño o de niña? · What was the house where you lived as a child like?', followUps: ['¿Había una habitación especial? (Was there a special room?)', '¿Qué es lo que más recuerdas? (What do you remember most?)'], phrases: ['La casa [[donde|teal]] vivía era…', 'Había una habitación [[en la que|teal]]…', '[[Lo que|violet]] más recuerdo es…'], hint: 'Describe con el imperfecto (era, había, tenía) y une con donde y lo que.', example: 'La casa donde vivía era grande y vieja. Había una cocina en la que comíamos todos juntos. Lo que más recuerdo es el olor del pan.', next: 'Ahora, un momento importante.' },
            { q: 'Cuenta un año importante para ti: «En…, cuando…». · Talk about an important year for you.', followUps: ['¿Qué pasó ese año? (What happened that year?)', '¿Dónde vivías? (Where did you live?)'], phrases: ['En 2015, [[cuando|orange]] yo vivía en…, …', 'Fue [[el año en que|orange]]…'], hint: 'Primero el año; después «cuando» y lo que pasaba, entre comas; después el hecho.', example: 'En 2015, cuando yo vivía en Lima, empecé a estudiar fotografía. Fue el año en que conocí a mis mejores amigos.', next: 'Ahora, lo que te gusta.' },
            { q: '¿Qué es lo que más te gusta de tu barrio? ¿Y lo que menos? · What do you like most about your neighbourhood? And least?', followUps: ['¿Siempre fue así? (Was it always like that?)', '¿Qué cambiarías? (What would you change?)'], phrases: ['[[Lo que|violet]] más me gusta es…', '[[Lo que|violet]] menos me gusta es…'], hint: 'Lo que más / menos me gusta + es + una cosa (en singular).', example: 'Lo que más me gusta de mi barrio es el mercado. Lo que menos me gusta es el ruido por la noche.', teacher: '«¿Qué cambiarías?» usa el condicional: tu alumno solo tiene que entenderlo; puede responder con «Quiero más…».' },
            { q: 'Un lugar y un día especiales con otra persona: ¿dónde fue? · A special place and day with someone: where was it?', followUps: ['¿Recuerdas el día que fuiste allí por primera vez? (Do you remember the first day you went there?)', '¿Vuelves alguna vez? (Do you ever go back?)'], phrases: ['Es el sitio [[donde|teal]] conocí a…', 'Recuerdo [[el día que|orange]]…', '[[Lo que|violet]] más recuerdo de ese día es…'], hint: 'Un lugar con donde; el momento con el día que; un detalle con lo que.', example: 'Es la playa donde conocí a mi amiga Sara. Recuerdo el día que llegamos: hacía mucho viento. Lo que más recuerdo de ese día es su risa.', next: 'Ahora, tú eres Raúl.' },
            { q: 'Ahora tú eres Raúl o Elena. Nuria pregunta: «¿Qué lugares quieren para el álbum?». Presenta tres lugares. · Now you are Raúl or Elena. Present three places for the album.', followUps: ['¿Y a qué hora vamos? (And what time do we go?)', '¿Qué es lo que no quieren? (What don’t you want?)'], phrases: ['El café [[donde|teal]]…', 'El parque [[en el que|teal]]…', 'En 2019, [[cuando|orange]]…', '[[Lo que|violet]] queremos es…'], hint: 'Tres lugares con donde o en el que, un momento con cuando y una idea con lo que.', example: 'Primero, el café donde nos conocimos. Después, el piso en el que vivimos tres años. Al final, el puente donde Raúl me pidió matrimonio, en 2019, cuando vivíamos en la calle Luna. Lo que queremos es un día tranquilo.', teacher: 'Tú eres Nuria y reaccionas: «¿Y por qué ese sitio?», «¿Qué es lo que más recuerdan?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Nuria y hace las preguntas («¿Cuál es el sitio donde…?», «¿Qué es lo que más te gusta…?») y tú presentas tus lugares.', self: 'Ahora tú eres Nuria: haz las preguntas en voz alta («¿Cuál es el sitio donde…?», «¿Qué es lo que más te gusta…?») y responde como Elena. (Now you are Nuria: ask and answer as Elena.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tus lugares para el álbum', coach: 'Lugar, momento, idea. Place, time, idea.',
      steps: [
        { title: 'Un mensaje para Nuria · A message to Nuria', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada relativo: ¿lugar (donde, en el / la que), momento (cuando, el día que) o idea (lo que)? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada relativo: ¿lugar, momento o idea? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mis tres lugares · My three places', situation: 'Eres Elena (o eres tú, con los lugares importantes de tu vida). Nuria te pide un texto corto para la primera página del álbum. Escríbele un mensaje con tres lugares y por qué son importantes. (You are Elena, or yourself with the important places in your life. Nuria asks you for a short text for the first page of the album. Write her a message with three places and why they matter.)', task: [
            'Saluda a Nuria y di para qué escribes. (Greet Nuria and say why you are writing.)',
            'Presenta tres lugares con donde o con en el / la que. (Present three places with donde or en el / la que.)',
            'Sitúa un momento con «En…, cuando…» o con «el día que». (Place a moment in time.)',
            'Di una idea con «lo que»: lo que más te gusta, lo que recuerdas o lo que quieres. (Add one idea with lo que.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['Hola, Nuria:', 'Te mando mis tres lugares para el álbum.', 'El primero es el sitio donde…', 'El segundo es el piso / el parque en el que…', 'En 2016, cuando…', 'Lo que más me gusta / recuerdo es…', 'Un abrazo,'],
            words: ['donde', 'en el que', 'en la que', 'cuando', 'el día que', 'lo que', 'el sitio', 'el lugar', 'recuerdo', 'me gustaba'],
            model: 'Hola, Nuria: Te mando mis tres lugares para el álbum. El primero es el Café Aurora, el sitio [[donde|teal]] conocí a Raúl en 2016, [[cuando|orange]] yo estudiaba en la universidad. El segundo es la calle Luna: allí está el piso [[en el que|teal]] vivimos tres años. Era pequeño, pero [[lo que|violet]] más me gustaba era la terraza. Todavía recuerdo [[el día que|orange]] llegamos con las cajas. El tercero es el puente viejo, [[donde|teal]] Raúl me pidió matrimonio. Para el sábado, [[lo que|violet]] queremos es un día tranquilo y fotos naturales. ¡Muchas gracias! Un abrazo, Elena.',
            minWords: 60,
            checks: [
              { label: 'Un lugar con donde o en el / la que (a place)', pattern: '(?<!\\p{L})(?:donde|en\\s+(?:el|la|los|las)\\s+que)(?!\\p{L})', tip: 'Presenta un lugar: «el café donde conocí a Raúl», «el piso en el que vivimos».' },
              { label: 'Un momento con cuando o el día que (a time)', pattern: '(?<!\\p{L})(?:cuando|(?:día|año|momento)\\s+(?:en\\s+)?que)(?!\\p{L})', tip: 'Sitúa un momento: «En 2016, cuando yo estudiaba…», «el día que llegamos».' },
              { label: 'Una idea con lo que (what)', pattern: '(?<!\\p{L})lo\\s+que(?!\\p{L})', tip: 'Añade una idea: «Lo que más me gustaba era la terraza».' },
            ],
            warnings: [
              { pattern: '(?<!(?:^|[^\\p{L}])lo\\s)(?<!\\p{L})que\\s+más\\s+(?:me|te|le|nos|les)\\s+gusta', why: 'Sin nombre antes, «what» es **lo que**: «**Lo que** más me gusta es…».' },
              { pattern: '(?<!\\p{L})(?:el|del)\\s+día\\s+cuando(?!\\p{L})', why: 'Después de «el día», lo natural es **que** o **en que**: «el día que llegamos».' },
              { pattern: '(?<!\\p{L})(?:la\\s+(?:calle|plaza|casa|ciudad|mesa|playa))\\s+en\\s+el\\s+que(?!\\p{L})', why: 'El artículo concuerda con el lugar femenino: «la calle **en la que**…».' },
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
            { tone: 'teal', label: 'LUGAR · DONDE', formula: 'lugar + donde / en el (la, los, las) que', example: 'Es el café donde (en el que) nos conocimos.', caption: 'lo que pasa en ese lugar: la frase lleva «en»', en: 'what happens in that place: the sentence needs “en”' },
            { tone: 'orange', label: 'TIEMPO · CUANDO / EL DÍA QUE', formula: 'En 2016, cuando… · el día (en) que…', example: 'En 2016, cuando yo estudiaba, conocí a Raúl. Recuerdo el día que llegamos.', caption: 'cuando después de una fecha o época; con día o año, que', en: 'cuando after a date or period; with día or año, que' },
            { tone: 'violet', label: 'IDEA · LO QUE', formula: 'lo que + verbo (sin nombre antes)', example: 'Lo que más me gusta es la terraza.', caption: 'what, la cosa que: siempre «lo»', en: 'what, the thing that: always “lo”' },
            { tone: 'blue', label: 'QUE · SIN «EN»', formula: 'nombre + que (sujeto u objeto)', example: 'Es el café que abrió en 2010. Es el piso que alquilamos.', caption: 'el nombre hace la acción o la recibe', en: 'the noun does the action or receives it' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Haz la prueba con dos frases: «Nos conocimos **en** el café» → «el café **donde** nos conocimos». Si no hay «en» («Alquilamos el piso»), usa **que**: «el piso que alquilamos». Si no hay nombre antes, usa **lo que**: «Lo que quiero es descansar». Y para el tiempo: «En 2016, **cuando**…», pero «el día **que**…».', en: 'Test it with two sentences: “Nos conocimos en el café” → “el café donde nos conocimos”. If there is no en (“Alquilamos el piso”), use que: “el piso que alquilamos”. If there is no noun before, use lo que: “Lo que quiero es descansar”. And for time: “En 2016, cuando…”, but “el día que…”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Esta es la escuela ___ estudié de niña.', options: ['donde', 'lo que', 'que'], answer: 0, why: 'Estudié **en** la escuela: donde.', en: 'This is the school where I studied as a girl.' },
            { prompt: '___ me preocupa es el tiempo: dicen que va a llover.', options: ['Que', 'Lo que', 'Qué'], answer: 1, why: 'No hay nombre antes y no es una pregunta: lo que.', en: 'What worries me is the weather: they say it’s going to rain.' },
            { prompt: 'Es una ciudad ___ tiene muchos museos.', options: ['que', 'donde', 'en la que'], answer: 0, why: 'La ciudad tiene museos: es el sujeto. Que.', en: 'It’s a city that has a lot of museums.' },
            { prompt: 'En agosto, ___ hace mucho calor, la ciudad está vacía.', options: ['lo que', 'donde', 'cuando'], answer: 2, why: '«En agosto» es un momento; cuando añade información, entre comas.', en: 'In August, when it’s very hot, the city is empty.' },
            { prompt: 'Los bares ___ quedábamos con los amigos ya no existen.', options: ['en los que', 'en las que', 'que'], answer: 0, why: 'Quedábamos **en** los bares (masculino plural): en los que (o donde).', en: 'The bars where we used to meet our friends don’t exist any more.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/walking.webp', coach: 'Ahora, el estudio de Nuria.', blocks: [
          { kind: 'lead', text: 'Después de la sesión, Nuria enseña su estudio a una clienta nueva. Une las frases como Nuria.', en: 'After the shoot, Nuria shows her studio to a new client. Join the sentences as Nuria would.' },
          { kind: 'rewrite', title: 'El estudio de Nuria · Nuria’s studio', items: [
            { prompt: 'Esta es la sala. Hago los retratos en la sala.', instruction: 'Une las frases con «donde» o «en la que». Empieza con «Esta es la sala».', accept: ['Esta es la sala donde hago los retratos', 'Esta es la sala en la que hago los retratos'] },
            { prompt: 'Este es el ordenador. Edito las fotos en el ordenador.', instruction: 'Une las frases con «en el que». Empieza con «Este es el ordenador».', accept: ['Este es el ordenador en el que edito las fotos'] },
            { prompt: 'Me encanta la luz de este estudio.', instruction: 'Empieza con «Lo que más me gusta de este estudio…».', accept: ['Lo que más me gusta de este estudio es la luz'] },
          ] },
        ] },
        { title: 'Ampliación: de donde, por donde, todo lo que · Extension', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Un paso extra, si tienes tiempo. «Donde» puede llevar otras preposiciones: **de donde** (from where: venir de), **por donde** (through where: pasar por). Y «lo que» aparece en expresiones muy frecuentes: **todo lo que** (everything that) y **lo que pasa es que…** (the thing is…), útil para explicar un problema.', en: 'An extra step, if you have time. “Donde” can take other prepositions: de donde (from where: venir de), por donde (through where: pasar por). And “lo que” appears in very common expressions: todo lo que (everything that) and lo que pasa es que… (the thing is…), useful to explain a problem.' },
          { kind: 'choice', title: 'Otras formas · Other forms', items: [
            { prompt: 'Valparaíso es la ciudad ___ viene Nuria.', options: ['por donde', 'de donde', 'donde'], answer: 1, why: 'Venir **de** un lugar: de donde. (Nuria comes from Valparaíso.)', en: 'Valparaíso is the city Nuria comes from.' },
            { prompt: 'Este es el camino ___ pasamos cada mañana.', options: ['por donde', 'lo que', 'de donde'], answer: 0, why: 'Pasar **por** un lugar: por donde.', en: 'This is the path we go along every morning.' },
            { prompt: 'Gracias por ___ hiciste por nosotros.', options: ['todo que', 'todos que', 'todo lo que'], answer: 2, why: 'Everything that: **todo lo que**. El «lo» no desaparece.', en: 'Thank you for everything you did for us.' },
            { prompt: 'Elena: «Lo siento, Nuria. Lo que pasa es que hoy trabajo hasta tarde». ¿Qué hace Elena?', options: ['Pregunta por un lugar.', 'Explica un problema.', 'Cuenta una historia antigua.'], answer: 1, why: '«Lo que pasa es que…» presenta la explicación de un problema (the thing is…).', en: 'Elena: “Sorry, Nuria. The thing is, I’m working late today.” What is Elena doing?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para alumnos rápidos o si sobra tiempo. Aquí basta con entender de donde, por donde y todo lo que; «lo que pasa es que…» es muy útil en la conversación diaria.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 068 · Comparaciones: mejor, peor, mayor, menor', text: 'Ya describes lugares, momentos e ideas con precisión: «el café donde nos conocimos», «en 2016, cuando…», «lo que más me gusta…». En la clase 068 das el siguiente paso: comparas esos lugares y esas cosas con **mejor, peor, mayor** y **menor**: «Este café es mejor que el otro». Es el paso natural: primero describes, después comparas.', en: 'You can now describe places, times and ideas precisely: “el café donde nos conocimos”, “en 2016, cuando…”, “lo que más me gusta…”. In class 068 you take the next step: you compare those places and things with mejor, peor, mayor and menor: “Este café es mejor que el otro”. It is the natural next step: first you describe, then you compare.', href: '/expandir-y-precisar-descripciones', label: 'Ir a la clase 068' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuál es el lugar donde eres más feliz? ¿Qué es lo que más te gusta de ese lugar?». Respuesta esperada: una frase con donde y otra con lo que. Tarea: escribir el mensaje de Escribir con tres lugares reales.' },
        ] },
      ],
    },
  ],
};
