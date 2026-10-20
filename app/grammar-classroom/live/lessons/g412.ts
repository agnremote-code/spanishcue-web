import type { LiveLesson } from '../types';

/**
 * Lesson 412 · B1 · Relativos quien, el que, el cual introductorio (course unit G112).
 * One scene runs through the class: Inés Robles has just joined the hiking club
 * Peñas Altas. On Thursday evening she talks to Julián Pardo, the club secretary,
 * about Saturday’s excursion to Valdelagua (a fictional village) and its old
 * water mill, which don Ramiro opens for the group. Nerea Soto is the guide who
 * organized the visit; Alicia is the friend Inés travelled to Peru with; Óscar
 * is the member who wore brand-new boots last year. In the voice message Nerea
 * (Mexican voice, ustedes) gives the group the last details. Everyone uses tú.
 * Content (builds on G066/G067 and class 218 «Que y quien»): quien / quienes
 * only for people: free relative (Conozco a quien organizó la visita; Quien
 * organizó la visita es Nerea), after a preposition (la guía con quien hablé)
 * and in explanatory clauses (Nerea, quien conoce el pueblo, …), never in a
 * specifying clause without preposition (*la guía quien organizó). El que / la
 * que / los que / las que: after a preposition (la amiga con la que viajé, el
 * pueblo al que vamos) and without a noun (La que organizó la visita es Nerea;
 * Los que vinieron el año pasado…). Que alone after a preposition: only with
 * en (el día en que, la forma en que) and, in careful writing, with some
 * things (los medios con que contamos); never with people. El cual / la cual:
 * recognition in formal writing (con la cual, el molino, el cual data…),
 * never without a noun and never in a specifying clause without preposition.
 * Audit fold (row 22): specifying vs explanatory clauses — Los senderistas que
 * llevaban botas nuevas… (only some) vs Los senderistas, que llevaban botas
 * nuevas, … (all of them) — commas in writing, pauses in speech.
 * Receptive only, glossed: quien / el que + subjunctive for «whoever» (Quien
 * quiera, que venga; el que llegue tarde…: class 169), hay quien. Prepositional
 * relatives with verb-governed prepositions are deepened in class 142.
 * Anchor: Conozco a quien organizó la visita. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 412,
  level: 'B1',
  title: 'Relativos quien, el que, el cual introductorio',
  subtitle: 'Hablar de las personas y las cosas de un grupo con quien, el que y la que, y distinguir «solo algunos» de «todos» con las comas.',
  legend: [
    { tone: 'teal', label: 'QUIEN / QUIENES · solo personas (who, whoever, the one who)' },
    { tone: 'blue', label: 'EL QUE, LA QUE… · artículo + que (formal: el cual, la cual)' },
    { tone: 'violet', label: 'EXPLICATIVA · , dato extra entre comas , (todos)' },
    { tone: 'neutral', label: 'ESPECIFICATIVA · sin comas: selecciona (solo algunos)' },
  ],
  optionNotes: {
    'quién': '«Quién», con tilde, es la palabra de las preguntas: «¿Quién viene?», «No sé quién viene». El relativo **quien** no lleva tilde.',
    'Quién': '«Quién», con tilde, es la palabra de las preguntas: «¿Quién viene?», «No sé quién viene». El relativo **quien** no lleva tilde.',
    'cual': '«Cual» como relativo siempre lleva artículo: el cual, la cual, los cuales, las cuales.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Quien, el que y las comas', coach: '¿Quién es? ¿Cuál de todos? Who is it? Which one?',
      steps: [
        { title: 'Una socia nueva · A new member', blocks: [
          { kind: 'lead', text: 'Inés Robles es socia nueva del club de senderismo Peñas Altas. El sábado hay excursión a Valdelagua, un pueblo con un molino antiguo. Inés todavía no conoce a mucha gente, pero dice: «Yo ya **conozco a quien organizó la visita**: es Nerea, la guía». Hoy aprendes a hablar de personas y cosas con **quien**, **el que / la que** y, para leer textos formales, **el cual**.', en: 'Inés Robles is a new member of the Peñas Altas hiking club. On Saturday there is an outing to Valdelagua, a village with an old mill. Inés doesn’t know many people yet, but she says: “I already know the person who organized the visit: it’s Nerea, the guide.” Today you learn to talk about people and things with quien, el que / la que and, for reading formal texts, el cual.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase de Inés y tu alumno la dice con otras palabras: «Conozco a la persona que…». Después comparan las dos versiones.', self: 'Lee la frase de Inés y dila con otras palabras: «Conozco a la persona que…». (Say Inés’s sentence another way.)' } },
          { kind: 'compare', title: 'Dos maneras de decirlo · Two ways to say it', columns: [
            { tone: 'neutral', label: 'CON NOMBRE · la persona + que', sentence: 'Conozco a la persona [[que organizó la visita|neutral]].', idea: 'Ya conoces esta estructura (clase 066): el nombre y después «que».', en: 'I know the person who organized the visit.' },
            { tone: 'teal', label: 'SIN NOMBRE · quien', sentence: 'Conozco a [[quien organizó la visita|teal]].', idea: '«Quien» = «la persona que». No hay nombre antes: quien ya lo contiene.', en: 'I know who organized the visit / the person who did.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Conozco a quien organizó la visita», «quien» significa…', options: ['la persona que', 'la cosa que', '¿qué persona?'], answer: 0, why: '«Quien» se refiere siempre a personas y aquí contiene el antecedente: «la persona que».', en: 'In this sentence, “quien” means…' },
            { prompt: '¿Por qué «quien» no lleva tilde aquí?', options: ['Porque el verbo está en pasado.', 'Porque no es una pregunta: es un relativo.', 'Porque va después de «a».'], answer: 1, why: 'Con tilde, «quién» pregunta. Sin tilde, «quien» une dos ideas sobre una persona.', en: 'Why doesn’t “quien” have an accent here?' },
          ] },
        ] },
        { title: 'Quien y quienes · Who', mascot: '/brand/mascot/studying.webp', coach: 'Quien: solo personas. Only people.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'QUIEN / QUIENES', question: '¿Dónde puedo usar «quien»?', en: 'Where can I use “quien”?', formula: ['quien + verbo (sin nombre antes)', 'nombre + preposición + quien / quienes', 'nombre, quien / quienes + dato extra,'],
            meaning: '**Quien** (plural **quienes**) se refiere solo a **personas**. Tiene tres usos frecuentes: (1) **sin nombre antes**, con el sentido de «la persona que»; (2) **después de una preposición** (con, a, de, para…); (3) **entre comas**, para añadir un dato sobre alguien ya identificado (ya lo viste en la clase 218).',
            examples: [
              { es: '[[Quien|teal]] tiene las llaves del molino es don Ramiro.', en: 'The person who has the keys to the mill is don Ramiro.' },
              { es: 'Don Ramiro es el señor [[con quien|teal]] hablé por teléfono.', en: 'Don Ramiro is the man I spoke to on the phone.' },
              { es: 'Los socios [[con quienes|teal]] comparto coche viven en mi barrio.', en: 'The members I share a car with live in my neighbourhood.' },
              { es: 'Nerea, [[quien|teal]] conoce bien el pueblo, nos va a guiar.', en: 'Nerea, who knows the village well, is going to guide us.' },
            ],
            note: 'Sin preposición y sin comas, después de un nombre, **no** se usa quien: «la guía **que** organizó la visita», nunca «la guía quien organizó».' },
          { kind: 'tip', icon: '🔊', title: '«Quien quiera, que venga» · Whoever wants to, let them come', text: 'Vas a oír y leer frases como «**Quien quiera**, que venga» o «Quien llegue tarde, que tome el otro autobús». Aquí quien significa «cualquier persona que» (whoever) y va con **subjuntivo** porque no sabemos quién será. Hoy solo tienes que reconocerlo; lo trabajas a fondo en la clase 169.', en: 'You will hear and read sentences like “Quien quiera, que venga” (whoever wants to, let them come) or “Quien llegue tarde, que tome el otro autobús”. Here quien means “anyone who” and takes the subjunctive because we don’t know who it will be. Today you only need to recognize it; you work on it in depth in class 169.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ hizo las fotos de la última excursión es Óscar.', options: ['Que', 'Quien', 'Quién'], answer: 1, why: 'No hay nombre antes: «quien» = «la persona que». Sin tilde, porque no es una pregunta.', en: 'The person who took the photos on the last outing is Óscar.' },
            { prompt: 'Las amigas con ___ hago las rutas son de la universidad.', options: ['que', 'quienes', 'quien'], answer: 1, why: 'Después de preposición, con personas: quien / quienes. «Las amigas» es plural: quienes.', en: 'The friends I do the routes with are from university.' },
          ] },
        ] },
        { title: 'El que, la que, los que, las que', mascot: '/brand/mascot/standing.webp', coach: 'El artículo concuerda. The article agrees.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ARTÍCULO + QUE', question: '¿Cuándo uso «el que», «la que»…?', en: 'When do I use “el que”, “la que”…?', formula: ['nombre + preposición + el / la / los / las + que', 'el / la / los / las + que + verbo (sin nombre)'],
            meaning: 'El artículo **concuerda** con la persona o la cosa: el que, la que, los que, las que. Sirve para **personas y cosas**. (1) **Después de una preposición**: la preposición va **delante** del relativo, nunca al final como en inglés. (2) **Sin nombre**, cuando ya sabemos de qué hablamos o hablamos de personas en general.',
            examples: [
              { es: 'Alicia es la amiga [[con la que|blue]] viajé a Perú.', en: 'Alicia is the friend I travelled to Peru with.' },
              { es: 'Valdelagua es el pueblo [[al que|blue]] vamos el sábado.', en: 'Valdelagua is the village we are going to on Saturday.' },
              { es: 'Esta es la mochila [[en la que|blue]] llevo el botiquín.', en: 'This is the backpack I carry the first-aid kit in.' },
              { es: '[[La que|blue]] organizó la visita es Nerea.', en: 'The one who organized the visit is Nerea.' },
              { es: '[[Los que|blue]] vinieron el año pasado ya conocen el camino.', en: 'Those who came last year already know the way.' },
            ],
            note: 'Con personas, después de preposición tienes dos opciones correctas: «la amiga **con la que** viajé» = «la amiga **con quien** viajé». Con cosas, solo el que / la que: «la mochila **en la que**…», nunca «en quien».' },
          { kind: 'table', title: '¿Y «que» solo después de preposición? · Plain “que” after a preposition?', head: ['Caso', 'Ejemplo', '¿Funciona?'], rows: [
            ['Lo normal: preposición + artículo + que', 'la ruta **de la que** te hablé · el bastón **con el que** subí', 'Sí, siempre'],
            ['Con «en» y tiempo o manera', 'el día **en que** nos conocimos · la forma **en que** habla', 'Sí (también: en el que)'],
            ['Con algunas cosas, en textos cuidados', 'los medios **con que** contamos', 'Sí, pero es formal y poco frecuente'],
            ['Con personas', '*la amiga con que viajé → la amiga **con la que** / **con quien** viajé', 'No'],
          ], note: 'Regla práctica para B1: después de preposición, pon el artículo (con la que, al que, de los que). Así siempre aciertas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Este es el bastón ___ subí a la montaña.', options: ['con el que', 'con quien', 'que con él'], answer: 0, why: 'Una cosa después de preposición: con el que. «Quien» es solo para personas.', en: 'This is the walking pole I climbed the mountain with.' },
            { prompt: '¿Qué frase es correcta?', options: ['Es la amiga que viajé con.', 'Es la amiga con la que viajé.', 'Es la amiga con que viajé.'], answer: 1, why: 'Con personas, preposición + artículo + que (o con quien). La preposición nunca va al final.', en: 'Which sentence is correct?' },
          ] },
        ] },
        { title: '¿Solo algunos o todos? · Only some or all?', mascot: '/brand/mascot/seated.webp', coach: 'Las comas cambian el sentido. Commas change the meaning.', blocks: [
          { kind: 'compare', title: 'Sin comas o con comas · Without or with commas', columns: [
            { tone: 'neutral', label: 'ESPECIFICATIVA · sin comas', sentence: 'Los senderistas [[que llevaban botas nuevas|neutral]] terminaron con ampollas.', idea: 'Solo **algunos** llevaban botas nuevas, y solo esos terminaron con ampollas. La relativa **selecciona**.', en: 'The hikers who were wearing new boots ended up with blisters. (only those)' },
            { tone: 'violet', label: 'EXPLICATIVA · entre comas', sentence: 'Los senderistas, [[que llevaban botas nuevas|violet]], terminaron con ampollas.', idea: '**Todos** llevaban botas nuevas y todos terminaron con ampollas. La relativa **añade** un dato.', en: 'The hikers, who were all wearing new boots, ended up with blisters. (all of them)' },
          ] },
          { kind: 'table', title: '¿Qué relativo puedo usar? · Which relative can I use?', head: ['', 'Especificativa (sin comas)', 'Explicativa (con comas)'], rows: [
            ['Sin preposición', 'solo **que**: los socios [[que tienen coche|neutral]]', '**que**, **quien(es)** o **el cual**: Óscar, [[que / quien vive cerca|violet]], …'],
            ['Con preposición', '**con el que** / **con quien** / (formal) **con el cual**', 'igual: Alicia, **con quien** viajé, …'],
          ], note: 'Al hablar, la explicativa va entre dos pequeñas **pausas**, como un paréntesis. Con nombres propios y cosas únicas (Valdelagua, mis padres) la relativa suele ser explicativa: ya sabemos de quién hablamos.' },
          { kind: 'decide', title: '¿Con comas o sin comas?', steps: [
            { q: '¿La relativa sirve para saber de cuáles hablas, entre varios? (solo algunos)', yes: 'Sin comas, y sin preposición solo **que**: «Los socios que tienen coche llevan la comida».', no: 'next' },
            { q: '¿Ya sabes de quién o de qué hablas y solo añades información? (todos, uno solo, un nombre propio)', yes: 'Entre comas: **que**, **quien** (personas) o, en textos formales, **el cual**: «Nerea, quien es la guía, …».', no: 'Lee la frase sin la relativa: si cambia de quién hablas, va sin comas.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Mis compañeros, que hablan inglés, ayudaron a los turistas». ¿Cuántos compañeros hablan inglés?', options: ['Todos.', 'Solo algunos.', 'Ninguno.'], answer: 0, why: 'Entre comas: un dato extra sobre todos los compañeros.', en: '“My colleagues, who speak English, helped the tourists.” How many speak English?' },
            { prompt: 'El club tiene treinta socios y solo seis tienen coche. ¿Qué frase es correcta?', options: ['Los socios que tienen coche llevan la comida.', 'Los socios, que tienen coche, llevan la comida.', 'Los socios quienes tienen coche llevan la comida.'], answer: 0, why: 'Hablas solo de algunos: especificativa, sin comas, con «que».', en: 'The club has thirty members and only six have a car. Which sentence is right?' },
          ] },
        ] },
        { title: 'El cual y errores frecuentes · El cual and common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'El cual: para leer textos formales. For formal texts.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'EL CUAL · LA CUAL · LOS CUALES · LAS CUALES', question: '¿Qué es «el cual»?', en: 'What is “el cual”?', formula: ['nombre + preposición + el cual / la cual…', 'nombre, el cual / la cual… + dato extra,'],
            meaning: '**El cual** significa lo mismo que el que, pero es **más formal**: aparece sobre todo en textos escritos (cartas oficiales, folletos, noticias). Va **después de una preposición** o **entre comas**. Hoy solo tienes que **reconocerlo**; al hablar, lo normal es «el que».',
            examples: [
              { es: 'La cooperativa [[con la cual|blue]] colaboramos produce queso de cabra.', en: 'The cooperative we work with produces goat’s cheese. (formal)' },
              { es: 'El molino, [[el cual|blue]] data del siglo XVIII, está restaurado.', en: 'The mill, which dates from the 18th century, has been restored. (formal)' },
            ],
            note: 'El cual **nunca** va sin nombre antes («*El cual llegue primero…» → **El que** llegue primero…) ni en una especificativa sin preposición («*el molino el cual visitamos» → el molino **que** visitamos).' },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La guía quien organizó la visita es Nerea.', right: 'La guía que organizó la visita es Nerea. / Quien organizó la visita es Nerea.', why: 'Después de un nombre, sin comas y sin preposición, solo «que». «Quien» va sin nombre antes. (No “quien” right after a noun.)' },
            { wrong: 'Alicia es la amiga que viajé con a Perú.', right: 'Alicia es la amiga con la que viajé a Perú.', why: 'En español la preposición va delante del relativo, nunca al final como en inglés (the friend I travelled with).' },
            { wrong: 'Es la amiga con que viajé.', right: 'Es la amiga con la que viajé. / Es la amiga con quien viajé.', why: 'Con personas, después de preposición: artículo + que, o quien.' },
            { wrong: 'Los guías con quien trabajamos son de la zona.', right: 'Los guías con quienes trabajamos son de la zona.', why: '«Quien» tiene plural: los guías → quienes.' },
            { wrong: 'Esta es la linterna con quien leo de noche.', right: 'Esta es la linterna con la que leo de noche.', why: 'Una linterna es una cosa: «quien» es solo para personas.' },
            { wrong: 'Quién organizó la visita es Nerea.', right: 'Quien organizó la visita es Nerea.', why: 'No es una pregunta: el relativo «quien» va sin tilde.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Dónde es más probable leer «la asociación con la cual colaboramos»?', options: ['En un mensaje rápido a un amigo.', 'En una conversación en el bar.', 'En una carta oficial del club.'], answer: 2, why: '«El cual / la cual» es formal: aparece sobre todo en textos escritos y cuidados.', en: 'Where are you most likely to read this?' },
            { prompt: 'El molino ___ visitamos tiene doscientos años.', options: ['quien', 'que', 'el cual'], answer: 1, why: 'Especificativa sin preposición: solo «que». «El cual» necesita preposición o comas; «quien» es para personas.', en: 'The mill we are visiting is two hundred years old.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno presenta a dos personas de su vida con una frase cada una: una con «la persona con la que / con quien…» y otra con un dato extra entre comas. Tú preguntas: «¿Todos o solo algunos?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En el local del club', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'La reunión del jueves · Thursday’s meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Julián y tu alumno es Inés. Después tu alumno toca cada expresión marcada y explica qué relativo es y por qué.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿quien, el que, el cual? ¿Con comas o sin comas? (Tap each marked expression.)' } },
          { kind: 'explore', title: 'Antes de la excursión', setting: 'Jueves por la tarde, en el local del club Peñas Altas. Inés habla con Julián Pardo, el secretario, sobre la excursión del sábado a Valdelagua. Se tratan de tú. (Thursday evening at the club. Inés talks to Julián, the club secretary, about Saturday’s outing.)', lines: [
            { who: 'Julián', text: 'Bienvenida al club, Inés. ¿Cómo nos encontraste?', en: 'Welcome to the club, Inés. How did you find us?' },
            { who: 'Inés', text: 'Por Alicia, la amiga [[con la que|blue]] viajé a Perú el año pasado. Ella es socia desde hace años.', en: 'Through Alicia, the friend I travelled to Peru with last year. She has been a member for years.' },
            { who: 'Julián', text: '¡Alicia! Es [[quien|teal]] más kilómetros ha hecho este año.', en: 'Alicia! She’s the one who has done the most kilometres this year.' },
            { who: 'Inés', text: 'Oye, para el sábado, ¿con quién hablo? ¿[[Con el que|blue]] organiza las rutas?', en: 'Listen, about Saturday, who do I talk to? The person who organizes the routes?' },
            { who: 'Julián', text: 'Mejor con Nerea, la guía, [[que conoce el pueblo como nadie|violet]]. Ella organizó la visita al molino.', en: 'Better with Nerea, the guide, who knows the village like nobody else. She organized the visit to the mill.' },
            { who: 'Inés', text: '¡Ah, entonces ya conozco a [[quien organizó la visita|teal]]! Alicia me la presentó el martes.', en: 'Oh, then I already know the person who organized the visit! Alicia introduced her to me on Tuesday.' },
            { who: 'Julián', text: 'Perfecto. Y don Ramiro, el señor [[a quien|teal]] llamamos siempre, nos abre el molino a las once.', en: 'Great. And don Ramiro, the man we always call, opens the mill for us at eleven.' },
            { who: 'Inés', text: '¿Hay que llevar bastones? La bajada parece larga.', en: 'Do we need to bring walking poles? The way down looks long.' },
            { who: 'Julián', text: 'Si quieres. El año pasado, [[los que llevaban bastones|neutral]] bajaron sin problemas. Y Óscar, [[que estrenaba botas|violet]], terminó con ampollas.', en: 'If you like. Last year, those who had poles came down with no problems. And Óscar, who was wearing brand-new boots, ended up with blisters.' },
            { who: 'Inés', text: 'Pues yo llevo mis botas viejas, [[con las cuales|blue]] subí a Machu Picchu.', en: 'Well, I’m taking my old boots, which I climbed Machu Picchu in.' },
            { who: 'Julián', text: '«Con las cuales»… ¡qué formal! Aquí decimos «con las que». Ah, y [[quien quiera|teal]] se queda a cenar en el pueblo.', en: '“Con las cuales”… how formal! Here we say “con las que”. Oh, and whoever wants to can stay for dinner in the village.' },
          ], notes: {
            'con la que': 'Preposición + artículo + que: viajé **con** Alicia → la amiga **con la que** viajé. También: con quien.',
            'quien': '«Es quien…» = «es la persona que…». Quien sin nombre antes, solo para personas.',
            'Con el que': 'Sin nombre: «el que organiza las rutas» = la persona que las organiza. La preposición (hablar **con**) va delante.',
            'que conoce el pueblo como nadie': 'Explicativa entre comas: Nerea ya está identificada; es un dato extra. Aquí también es posible «quien».',
            'quien organizó la visita': 'La frase clave: «conozco a quien…» = conozco a la persona que… Lleva «a» porque es una persona.',
            'a quien': 'Llamar **a** alguien → el señor **a quien** llamamos. También posible: al que llamamos.',
            'los que llevaban bastones': 'Sin comas: solo **algunos** llevaban bastones, y esos bajaron bien. «Los que» sin nombre = los senderistas que…',
            'que estrenaba botas': 'Explicativa: Óscar ya está identificado. Estrenar = usar algo por primera vez (to wear something for the first time).',
            'con las cuales': 'Correcto, pero formal: suena a texto escrito. En una conversación, lo normal es «con las que».',
            'quien quiera': 'Quien + subjuntivo = cualquier persona que (whoever wants to). Solo para reconocer: lo trabajas en la clase 169.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Quién es Alicia?', options: ['La amiga con la que Inés viajó a Perú.', 'La guía que organizó la visita.', 'La secretaria del club.'], answer: 0, why: '«Alicia, la amiga con la que viajé a Perú el año pasado».', en: 'Who is Alicia?' },
            { prompt: 'El año pasado, ¿quiénes bajaron sin problemas?', options: ['Todos los senderistas.', 'Solo Óscar.', 'Solo los que llevaban bastones.'], answer: 2, why: '«Los que llevaban bastones» va sin comas: selecciona a algunos.', en: 'Last year, who came down without problems?' },
            { prompt: '¿Por qué Julián dice «¡qué formal!»?', options: ['Porque Inés habla de Machu Picchu.', 'Porque Inés usa «con las cuales» al hablar.', 'Porque Inés lo trata de usted.'], answer: 1, why: '«El cual / las cuales» es correcto, pero suena a texto escrito. Al hablar, «con las que».', en: 'Why does Julián say “how formal!”?' },
          ] },
        ] },
        { title: 'Las personas del club · The club’s people', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Inés le escribe a Alicia · Inés texts Alicia', lines: [
            { who: 'Inés', text: '¡Ya soy socia! Julián, ___ es el secretario, es muy simpático.', options: ['que', 'quién', 'cual'], answer: 0, why: 'Explicativa entre comas sobre una persona identificada: que (o quien). «Cual» necesita artículo; «quién» es interrogativo.' },
            { who: 'Alicia', text: '¡Qué bien! ¿Ya sabes ___ te va a guiar el sábado?', options: ['quién', 'quien', 'el cual'], answer: 0, why: 'Es una pregunta indirecta (¿quién te va a guiar?): quién, con tilde.' },
            { who: 'Inés', text: 'Sí, Nerea, la chica ___ me presentaste el martes.', options: ['la cual', 'que', 'quien'], answer: 1, why: 'Especificativa sin preposición (presentar a alguien): lo normal es «que». «Quien» y «la cual» no van aquí sin comas.' },
            { who: 'Alicia', text: 'Genial. ¿Y el señor ___ tiene las llaves del molino?', options: ['que', 'quien', 'el cual'], answer: 0, why: 'Identifica a un señor concreto, sin comas ni preposición: solo «que».' },
            { who: 'Inés', text: 'Don Ramiro. Es el señor con ___ habla Nerea siempre.', options: ['quien', 'que', 'cual'], answer: 0, why: 'Después de preposición, con una persona: con quien (o con el que).' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Quién es la persona con la que más hablas cada semana?». Tu alumno responde con «la persona con la que / con quien…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Quien: personas. El que: personas y cosas.',
      steps: [
        { title: 'La lista de Julián · Julián’s list', blocks: [
          { kind: 'choice', items: [
            { context: 'Julián prepara la lista de la excursión. (Julián prepares the list.)', prompt: 'Nerea es la guía ___ conoce mejor la zona.', options: ['la cual', 'que', 'quien'], answer: 1, why: 'Especificativa sin preposición: solo «que».', en: 'Nerea is the guide who knows the area best.' },
            { context: 'Julián prepara la lista. (Julián prepares the list.)', prompt: '___ trae el botiquín este sábado es Alicia.', options: ['Que', 'Quien', 'Quién'], answer: 1, why: 'Sin nombre antes: quien = la persona que. Sin tilde: no es pregunta.', en: 'The person who is bringing the first-aid kit this Saturday is Alicia.' },
            { context: 'Los coches. (The cars.)', prompt: 'Los socios con ___ comparto coche llegan a las ocho menos cuarto.', options: ['que', 'quienes', 'quien'], answer: 1, why: 'Personas, después de preposición, en plural: quienes (o con los que).', en: 'The members I share a car with arrive at a quarter to eight.' },
            { context: 'El material. (The gear.)', prompt: 'Esa es la cantimplora en ___ llevo el agua.', options: ['quien', 'el que', 'la que'], answer: 2, why: 'Una cosa femenina, después de preposición: en la que.', en: 'That is the water bottle I carry the water in.' },
            { context: 'El destino. (The destination.)', prompt: 'El pueblo ___ vamos tiene solo cien habitantes.', options: ['que', 'a quien', 'al que'], answer: 2, why: 'Ir **a** un lugar: al que (a + el que). «A quien» es solo para personas.', en: 'The village we’re going to has only a hundred inhabitants.' },
          ] },
        ] },
        { title: '¿Algunos o todos? · Some or all?', blocks: [
          { kind: 'classify', title: 'Lee las comas · Read the commas', categories: [
            { id: 'algunos', label: 'ESPECIFICATIVA · solo algunos (sin comas)', tone: 'neutral' },
            { id: 'todos', label: 'EXPLICATIVA · dato extra sobre todos (con comas)', tone: 'violet' },
          ], items: [
            { text: 'Los socios que tienen coche llevan la comida.', answer: 'algunos', why: 'Sin comas: solo los que tienen coche.' },
            { text: 'Los socios, que pagan una cuota anual, reciben el boletín.', answer: 'todos', why: 'Entre comas: todos pagan la cuota y todos reciben el boletín.' },
            { text: 'Las rutas que pasan por el río se cierran en invierno.', answer: 'algunos', why: 'Selecciona: solo las rutas del río.' },
            { text: 'Valdelagua, que tiene un molino antiguo, está a dos horas.', answer: 'todos', why: 'Un nombre propio ya está identificado: el dato es extra.' },
            { text: 'Mis padres, que viven en el campo, caminan mucho.', answer: 'todos', why: 'Solo tienes unos padres: el dato no selecciona, añade.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La señora quien nos abrió el molino es la alcaldesa.', ok: false, options: ['La señora quién nos abrió el molino es la alcaldesa.', 'La señora que nos abrió el molino es la alcaldesa.', 'La señora la cual nos abrió el molino es la alcaldesa.'], answer: 1, why: 'Especificativa sin preposición: solo «que». Ni quien ni la cual van aquí sin comas.' },
            { sentence: 'El amigo con que hice el Camino vive en Burgos.', ok: false, options: ['El amigo que hice el Camino con él vive en Burgos.', 'El amigo con el quien hice el Camino vive en Burgos.', 'El amigo con el que hice el Camino vive en Burgos.'], answer: 2, why: 'Con personas, preposición + artículo + que (o con quien). «Quien» nunca lleva artículo.' },
            { sentence: 'Quien quiera, que traiga algo de postre.', ok: true, why: 'Correcta: quien + subjuntivo = cualquier persona que (whoever wants to). Es un uso para reconocer.' },
            { sentence: 'Los guías con quien trabajamos son de la zona.', ok: false, options: ['Los guías con quienes trabajamos son de la zona.', 'Los guías con quienes que trabajamos son de la zona.', 'Los guías quienes trabajamos son de la zona.'], answer: 0, why: '«Los guías» es plural: con quienes.' },
            { sentence: 'Esa es la ruta que te hablé.', ok: false, options: ['Esa es la ruta que te hablé de ella.', 'Esa es la ruta de quien te hablé.', 'Esa es la ruta de la que te hablé.'], answer: 2, why: 'Hablar **de** algo: la preposición va delante, con artículo. «Quien» no sirve para cosas.' },
            { sentence: 'Inés, que es nueva en el club, encontró el molino en un libro antiguo.', ok: true, why: 'Correcta: explicativa entre comas sobre una persona identificada.' },
          ] },
        ] },
        { title: 'Una llamada con Nerea · A call with Nerea', blocks: [
          { kind: 'chat-fill', title: 'El viernes, Nerea llama a Inés · On Friday, Nerea calls Inés', lines: [
            { who: 'Nerea', text: 'Inés, ¿quién es la amiga con ___ viniste al club?', options: ['cual', 'la que', 'que'], answer: 1, why: 'Venir **con** alguien: con la que (o con quien).' },
            { who: 'Inés', text: 'Alicia. Es ___ me habló de ustedes.', options: ['quién', 'la cual', 'quien'], answer: 2, why: '«Es quien…» = es la persona que. «La cual» nunca va sin nombre antes.' },
            { who: 'Nerea', text: '¡Ah, Alicia, ___ siempre trae galletas para todos!', options: ['que', 'quién', 'cual'], answer: 0, why: 'Explicativa entre comas sobre una persona conocida: que (o quien).' },
            { who: 'Inés', text: 'Sí, ella. Oye, ¿tú hablaste con el señor ___ tiene las llaves?', options: ['que', 'quien', 'el cual'], answer: 0, why: 'Identifica a un señor concreto, sin comas ni preposición: solo «que».' },
            { who: 'Nerea', text: 'Sí, con don Ramiro. Es un señor a ___ conozco desde niña.', options: ['quien', 'que', 'cual'], answer: 0, why: 'Conocer **a** una persona: a quien (o al que).' },
            { who: 'Nerea', text: 'Y recuerda: ___ lleguen tarde se quedan sin autobús.', options: ['los cuales', 'los que', 'quienes que'], answer: 1, why: 'Sin nombre antes: los que (= las personas que). «Los cuales» siempre necesita un nombre antes.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Quien', 'organizó', 'la', 'visita', 'es', 'Nerea'], accept: ['Quien organizó la visita es Nerea', 'Nerea es quien organizó la visita'], en: 'The person who organized the visit is Nerea.' },
            { tiles: ['Esta', 'es', 'la', 'amiga', 'con', 'la', 'que', 'viajé'], accept: ['Esta es la amiga con la que viajé', 'La amiga con la que viajé es esta'], en: 'This is the friend I travelled with.' },
            { tiles: ['Óscar,', 'que', 'estrenaba', 'botas,', 'terminó', 'cansado'], accept: ['Óscar, que estrenaba botas, terminó cansado'], en: 'Óscar, who was wearing new boots, ended up tired.' },
            { tiles: ['El', 'pueblo', 'al', 'que', 'vamos', 'es', 'pequeño'], accept: ['El pueblo al que vamos es pequeño'], en: 'The village we are going to is small.' },
          ] },
        ] },
        { title: 'Une las frases · Join the sentences', blocks: [
          { kind: 'rewrite', title: 'Dos frases, una sola · Two sentences into one', items: [
            { prompt: 'Nerea es la guía. Hablé con ella ayer.', instruction: 'Une con preposición + relativo. Empieza con «Nerea es la guía».', accept: ['Nerea es la guía con la que hablé ayer', 'Nerea es la guía con quien hablé ayer', 'Nerea es la guía con la que ayer hablé', 'Nerea es la guía con quien ayer hablé'] },
            { prompt: 'Don Ramiro abrió el molino. Don Ramiro tiene ochenta años.', instruction: 'Escribe una explicativa entre comas. Empieza con «Don Ramiro,».', accept: ['Don Ramiro, que tiene ochenta años, abrió el molino', 'Don Ramiro, quien tiene ochenta años, abrió el molino'] },
            { prompt: 'Este es el bastón. Subí al pico con este bastón.', instruction: 'Une con preposición + relativo. Empieza con «Este es el bastón».', accept: ['Este es el bastón con el que subí al pico'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno describe a tres personas de su vida con tres estructuras distintas: «quien…», «la persona con la que…» y un dato extra entre comas.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Nerea', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Los últimos detalles · The final details', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué manda Nerea el audio?). Segunda escucha: tu alumno levanta la mano con cada «quien» y da una palmada con cada «el que / la que / los que». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Vas a oír «quien llegue tarde» y «quien quiera» (whoever arrives late, whoever wants to): solo tienes que entenderlos. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Nerea', channel: 'MENSAJE DE VOZ · GRUPO PEÑAS ALTAS', src: '/audio/grammar-live/412.mp3',
            before: 'Es viernes por la noche. Nerea, la guía, manda un audio al grupo del club. ¿Qué crees que dice: la hora, el camino, las personas, la comida…? (Nerea sends the group a voice message. What do you think she talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Nerea cancela la excursión por la lluvia.', 'Nerea pide dinero para el autobús.', 'Nerea da los últimos detalles de la excursión y presenta a algunas personas.'], answer: 2, why: 'Habla de la hora, el molino, la comida, Óscar e Inés.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué pasa con las personas que lleguen tarde?', options: ['El grupo las espera media hora.', 'No pueden ir a la excursión.', 'Tienen que tomar el autobús de las diez.'], answer: 2, why: '«Quien llegue tarde, que tome el autobús de las diez».', en: 'What happens to people who arrive late?' },
              { prompt: '¿Quién es don Ramiro?', options: ['El conductor del autobús.', 'El dueño del restaurante.', 'El señor con quien Nerea habló y que tiene las llaves.'], answer: 2, why: '«Don Ramiro, el señor con quien hablé la semana pasada: él tiene las llaves».', en: 'Who is don Ramiro?' },
              { prompt: '¿Quiénes tienen que llevar bastones?', options: ['Los que los tienen.', 'Todos los socios.', 'Solo Óscar.'], answer: 0, why: '«Los que tienen bastones, tráiganlos».', en: 'Who should bring walking poles?' },
              { prompt: '¿Por qué Nerea da las gracias a Inés?', options: ['Porque encontró el molino en un libro antiguo.', 'Porque organizó la cena.', 'Porque trae la comida.'], answer: 0, why: '«Ella encontró el molino en un libro antiguo».', en: 'Why does Nerea thank Inés?' },
            ],
            transcript: 'Hola a todos, soy Nerea, la guía de mañana. Les mando este audio con los últimos detalles. Salimos a las ocho en punto desde la plaza. [[Quien|teal]] llegue tarde, que tome el autobús de las diez: no podemos esperar. Primero subimos al molino viejo, [[que tiene más de doscientos años|violet]]. Allí nos espera don Ramiro, el señor [[con quien|teal]] hablé la semana pasada: él tiene las llaves. Después comemos en el restaurante [[del que|blue]] les hablé el jueves. [[Los que|blue]] tienen bastones, tráiganlos, porque la bajada es larga. Óscar, [[quien|teal]] terminó con ampollas el año pasado, ya tiene botas cómodas. Y una cosa más: la persona [[a la que|blue]] tenemos que agradecer esta excursión es Inés, nuestra socia nueva. Ella encontró el molino en un libro antiguo. [[Quien|teal]] quiera quedarse a la cena, que me escriba antes de las diez. ¡Nos vemos mañana y no olviden el agua!',
            reply: { teacher: 'Tú eres Nerea. Tu alumno es Inés y responde al audio con tres frases: una con «quien», una con preposición + el que / la que y una con un dato extra entre comas.', self: 'Responde a Nerea en voz alta como Inés: confirma la hora, di con quién vas en coche («la amiga con la que…») y si te quedas a la cena. (Answer as Inés.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'La cena en el pueblo', coach: 'Habla de tu gente. Talk about your people.',
      steps: [
        { title: 'Personas, lugares y cosas · People, places and things', blocks: [
          { kind: 'guide', text: { teacher: 'Es la cena después de la excursión. Tú eres Julián y haces las preguntas. Tu alumno habla de su vida real. Tú repites su frase con el relativo correcto y sigues con la repregunta.', self: 'Es la cena después de la excursión. Lee cada pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Answer aloud about your real life.)' } },
          { kind: 'talk', cards: [
            { q: '¿Quién es la persona con la que más viajas o sales? · Who is the person you travel or go out with most?', followUps: ['¿Desde cuándo la conoces? (Since when?)', '¿Adónde fueron juntos la última vez? (Where did you last go together?)'], phrases: ['La persona [[con la que|blue]] más viajo es…', 'Es la amiga [[con quien|teal]]…', 'Es alguien [[con quien|teal]] me río mucho.'], hint: 'Preposición delante: con la que / con quien. Nunca «que viajo con».', example: 'La persona con la que más viajo es mi hermana Laura. Es alguien con quien me río mucho. El año pasado fuimos juntas a Oaxaca.', next: 'Ahora, quién te enseñó algo.' },
            { q: '¿Quién te enseñó tu afición favorita? · Who taught you your favourite hobby?', followUps: ['¿Cómo te lo enseñó? (How?)', '¿Todavía lo hacen juntos? (Do you still do it together?)'], phrases: ['[[Quien|teal]] me enseñó a… fue…', '[[El que|blue]] / [[La que|blue]] me enseñó a… fue…'], hint: 'Quien o el que / la que sin nombre antes = la persona que.', example: 'Quien me enseñó a cocinar fue mi abuelo. Los domingos hacíamos pan juntos. La que me enseñó a nadar fue mi madre.', next: 'Ahora, presenta a alguien.' },
            { q: 'Presenta a una persona importante de tu vida con un dato extra entre comas. · Introduce someone with an extra detail.', followUps: ['¿Qué más puedes contar de esa persona? (What else?)', '¿Todos tus amigos la conocen? (Do all your friends know her or him?)'], phrases: ['Mi amigo Pablo, [[que vive en…|violet]], …', 'Mi jefa, [[quien|teal]] es…, …'], hint: 'La persona ya está identificada: el dato va entre pausas, como un paréntesis.', example: 'Mi amigo Pablo, que vive en Valencia, es la persona más generosa que conozco. Mi jefa, quien es muy organizada, siempre nos ayuda.', next: 'Ahora, ¿algunos o todos?' },
            { q: 'Habla de tus compañeros de trabajo o de clase: ¿algunos o todos? · Your colleagues or classmates: some or all?', followUps: ['¿Y los que no…? (And those who don’t…?)', '¿Cómo lo dices si son todos? (How do you say it if it’s all of them?)'], phrases: ['[[Los compañeros que…|neutral]] (solo algunos)', 'Mis compañeros, [[que…|violet]], … (todos)', '[[Los que|blue]] viven lejos…'], hint: 'Sin comas: solo algunos. Con comas: todos. Al hablar, haz pausas en la explicativa.', example: 'Los compañeros que viven lejos trabajan desde casa los viernes. Mis compañeros, que son muy simpáticos, me hicieron una fiesta de cumpleaños.', next: 'Ahora, un lugar.', teacher: 'Pregunta: «¿Todos viven lejos?». Tu alumno ve que sin comas solo habla de algunos.' },
            { q: '¿Cuál es el lugar al que siempre vuelves? ¿Y la cosa sin la que no viajas? · The place you always go back to? The thing you never travel without?', followUps: ['¿Qué haces allí? (What do you do there?)', '¿Por qué es tan importante? (Why is it so important?)'], phrases: ['El lugar [[al que|blue]] siempre vuelvo es…', 'Es la ciudad [[en la que|blue]]…', 'La cosa [[sin la que|blue]] no viajo es…'], hint: 'El verbo decide la preposición: volver a, vivir en, viajar sin. Y el artículo concuerda.', example: 'El lugar al que siempre vuelvo es el pueblo de mis abuelos. Es el sitio en el que pasé todos los veranos. La cosa sin la que no viajo es mi cuaderno.' },
            { q: 'Ahora tú eres Inés. Presenta a Alicia, a Nerea y a Óscar a una persona nueva del club. · Now you are Inés: introduce three people.', followUps: ['¿Y quién tiene las llaves del molino? (Who has the keys?)', '¿Quién organizó la visita? (Who organized the visit?)'], phrases: ['Alicia es la amiga [[con la que|blue]]…', 'Nerea, [[que|violet]] / [[quien|teal]] es la guía, …', '[[Quien|teal]] organizó la visita es…'], hint: 'Usa tres estructuras: preposición + la que, una explicativa y quien sin nombre.', example: 'Alicia es la amiga con la que viajé a Perú. Nerea, que es la guía, organizó la visita al molino. Y Óscar es quien terminó con ampollas el año pasado.', teacher: 'Tú eres la persona nueva y reaccionas: «¿Y quién es don Ramiro?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Julián y te pregunta por las personas de tu vida («¿Quién te enseñó…?», «¿Con quién viajas?»), y tú respondes con quien y el que.', self: 'Ahora tú haces las preguntas en voz alta («¿Con quién viajas?», «¿Quién te enseñó…?») y las respondes otra vez con otras personas. (Ask and answer again with other people.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La crónica para el boletín', coach: 'Personas, lugares, comas. People, places, commas.',
      steps: [
        { title: 'Una crónica breve · A short report', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada relativo: ¿quien o el que? ¿Con comas o sin comas? Después, tu alumno lee su texto en voz alta con pausas en las explicativas.', self: 'Escribe tu crónica y toca «Revisar mi texto». Después, mira cada relativo: ¿quien o el que? ¿Con comas o sin comas? (Write your text and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'La excursión a Valdelagua · The outing to Valdelagua', situation: 'Eres Inés (o eres tú, después de una excursión o un viaje con un grupo). Julián te pide una crónica breve para el boletín del club: cuenta la excursión y da las gracias a las personas importantes. (You are Inés, or yourself after a group trip. Julián asks you for a short report for the club newsletter: tell how the outing went and thank the key people.)', task: [
            'Di adónde fue el grupo y cuándo, con una frase con preposición + el que / la que (el pueblo al que…). (Where and when, with a preposition + el que.)',
            'Presenta a una persona con un dato extra entre comas. (Introduce someone with an extra detail between commas.)',
            'Usa «quien» sin nombre antes una vez (quien organizó…, es quien…). (Use “quien” with no noun before it.)',
            'Escribe una especificativa sin comas sobre solo algunas personas del grupo. (One clause about only some people.)',
            'Termina con un agradecimiento. (End with a thank-you.)',
          ], starters: ['El sábado fuimos a…, el pueblo al que…', 'Quien organizó la visita fue…', 'Don Ramiro, que…, nos…', 'Los que…', 'Gracias a…, con quien…', 'La persona a la que…'],
            words: ['quien', 'quienes', 'el que', 'la que', 'los que', 'con la que', 'al que', 'en el que', 'que', 'el cual'],
            model: 'El sábado fuimos a Valdelagua, el pueblo [[al que|blue]] Nerea quería llevarnos desde hacía meses. [[Quien|teal]] organizó la visita fue ella, y lo hizo muy bien. Don Ramiro, [[que tiene ochenta años|violet]], nos abrió el molino y nos contó su historia. Después comimos en una casa rural [[en la que|blue]] hacen un queso buenísimo. En la bajada, [[los que llevaban bastones|neutral]] llegaron sin problemas; los demás, más despacio. Óscar, [[quien estrenaba botas otra vez|violet]], llegó el último, pero contento. Gracias a Alicia, la amiga [[con la que|blue]] descubrí este club, y a todos los socios. ¡Hasta la próxima ruta!',
            minWords: 70,
            checks: [
              { label: 'Preposición + el que / la que o quien (a preposition + relative)', pattern: '(?<!\\p{L})(?:(?:a|con|de|en|para|por|sin|sobre)\\s+(?:(?:el|la|los|las)\\s+(?:que|cual|cuales)|quienes|quien)|(?:al|del)\\s+(?:que|cual))(?!\\p{L})', tip: 'Usa una preposición delante del relativo: «el pueblo al que fuimos», «la amiga con la que…».' },
              { label: 'Quien o quienes (only for people)', pattern: '(?<!\\p{L})quien(?:es)?(?!\\p{L})', tip: 'Escribe «quien» sin nombre antes: «Quien organizó la visita fue Nerea».' },
              { label: 'Una explicativa entre comas (an extra detail between commas)', pattern: ',\\s*(?:que|quien|quienes|(?:el|la|los|las)\\s+cual(?:es)?)\\s[^,.]+,', tip: 'Añade un dato entre comas: «Don Ramiro, que tiene ochenta años, nos abrió el molino».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:el|la|los|las)\\s+quien(?:es)?(?!\\p{L})', why: '«Quien» nunca lleva artículo: **con quien** o **con el que**, no «con el quien».' },
              { pattern: '(?<!\\p{L})(?:persona|personas|señor|señora|guía|guías|amigo|amiga|amigos|amigas|chico|chica|socio|socia|socios|socias)\\s+quien(?:es)?(?!\\p{L})', why: 'Después de un nombre, sin comas ni preposición, usa **que**: «la persona que organizó», no «la persona quien».' },
              { pattern: '(?<!\\p{L})con\\s+que\\s+(?:viajé|viajo|fui|hablé|hablo|salgo|salí)(?!\\p{L})', why: 'Con personas, pon el artículo o quien: **con la que** / **con quien** viajé.' },
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
            { tone: 'teal', label: 'QUIEN / QUIENES', formula: 'quien + verbo · prep. + quien · , quien … ,', example: 'Conozco a quien organizó la visita. / el señor con quien hablé', caption: 'solo personas; nunca justo después de un nombre sin comas', en: 'only people; never right after a noun without commas' },
            { tone: 'blue', label: 'EL QUE, LA QUE, LOS QUE, LAS QUE', formula: 'prep. + artículo + que · artículo + que + verbo', example: 'la amiga con la que viajé / Los que vinieron ya conocen el camino.', caption: 'personas y cosas; la preposición va delante', en: 'people and things; the preposition goes in front' },
            { tone: 'neutral', label: 'ESPECIFICATIVA · sin comas', formula: 'nombre + que + …', example: 'Los senderistas que llevaban botas nuevas terminaron con ampollas.', caption: 'selecciona: solo algunos', en: 'it selects: only some' },
            { tone: 'violet', label: 'EXPLICATIVA · con comas', formula: 'nombre, que / quien / el cual + …,', example: 'Los senderistas, que llevaban botas nuevas, terminaron con ampollas.', caption: 'añade un dato: todos', en: 'it adds a detail: all of them' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: '**Quien** es solo para personas y va sin nombre antes, después de preposición o entre comas. **El que / la que** sirve para todo y concuerda. La preposición siempre va **delante**: la amiga **con la que** viajé. Sin comas, seleccionas (solo algunos); con comas, añades (todos). **El cual** es formal: reconócelo al leer.', en: '“Quien” is only for people and goes with no noun before it, after a preposition or between commas. “El que / la que” works for everything and agrees. The preposition always goes in front: “la amiga con la que viajé”. Without commas you select (only some); with commas you add (all). “El cual” is formal: recognize it when you read.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mis compañeros de trabajo, ___ son muy simpáticos, me regalaron una mochila.', options: ['cual', 'quién', 'que'], answer: 2, why: 'Explicativa entre comas: que (o quienes). «Cual» necesita artículo; «quién» es interrogativo.', en: 'My colleagues, who are very nice, gave me a backpack.' },
            { prompt: '___ terminó primero la ruta fue Alicia.', options: ['Que', 'Quien', 'Quién'], answer: 1, why: 'Sin nombre antes: quien = la persona que.', en: 'The person who finished the route first was Alicia.' },
            { prompt: 'Te presento a los vecinos con ___ organizo la fiesta del barrio.', options: ['que', 'quienes', 'quien'], answer: 1, why: 'Personas en plural después de preposición: con quienes (o con los que).', en: 'Let me introduce the neighbours I organize the street party with.' },
            { prompt: 'Es la tienda ___ compré estas botas.', options: ['en la que', 'que', 'en quien'], answer: 0, why: 'Comprar **en** una tienda: en la que. «Quien» no sirve para cosas.', en: 'It’s the shop where I bought these boots.' },
            { prompt: '«Los alumnos que aprobaron el examen fueron de excursión». ¿Qué significa?', options: ['Ningún alumno fue de excursión.', 'Solo fueron los alumnos que aprobaron.', 'Todos los alumnos aprobaron y todos fueron.'], answer: 1, why: 'Sin comas: la relativa selecciona a algunos alumnos.', en: '“The students who passed the exam went on a trip.” What does it mean?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en el trabajo. Now, at work.', blocks: [
          { kind: 'lead', text: 'El lunes, Inés vuelve a su trabajo en una biblioteca. Hay una compañera nueva y Inés le presenta a la gente. Une las frases.', en: 'On Monday Inés goes back to her job at a library. There is a new colleague and Inés introduces her to everyone. Join the sentences.' },
          { kind: 'rewrite', title: 'En la biblioteca · At the library', items: [
            { prompt: 'Esta es la compañera. Comparto despacho con ella.', instruction: 'Une con preposición + relativo. Empieza con «Esta es la compañera».', accept: ['Esta es la compañera con la que comparto despacho', 'Esta es la compañera con quien comparto despacho'] },
            { prompt: 'La directora llega mañana. Ella viene de Bogotá.', instruction: 'Escribe una explicativa entre comas. Empieza con «La directora,».', accept: ['La directora, que viene de Bogotá, llega mañana', 'La directora, quien viene de Bogotá, llega mañana'] },
            { prompt: 'La persona que coordina el club de lectura es Pablo.', instruction: 'Escribe la frase sin «la persona que». Empieza con «Quien».', accept: ['Quien coordina el club de lectura es Pablo'] },
          ] },
        ] },
        { title: 'Ampliación: el cual y hay quien · Extension: el cual and hay quien', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: registro formal. Optional: formal register.', blocks: [
          { kind: 'lead', text: 'En textos formales (cartas oficiales, folletos, noticias) vas a leer **el cual / la cual / los cuales / las cuales**, sobre todo después de una preposición o entre comas. Y en la lengua de todos los días oirás **hay quien** + verbo: «Hay quien prefiere caminar solo» (some people prefer…).', en: 'In formal texts (official letters, leaflets, news) you will read “el cual / la cual / los cuales / las cuales”, mostly after a preposition or between commas. And in everyday language you’ll hear “hay quien” + verb: “Hay quien prefiere caminar solo” (some people prefer to walk alone).' },
          { kind: 'choice', title: 'Registro formal · Formal register', items: [
            { context: 'Carta del club al ayuntamiento. (Letter to the town hall.)', prompt: 'Agradecemos su apoyo, ___ esta visita no habría sido posible.', options: ['sin quien', 'sin el cual', 'sin cual'], answer: 1, why: 'Una cosa (el apoyo), después de preposición, en registro formal: sin el cual. «Cual» siempre lleva artículo.', en: 'We thank you for your support, without which this visit would not have been possible.' },
            { context: 'Folleto de Valdelagua. (Village leaflet.)', prompt: 'La cooperativa, ___ tiene más de cuarenta años, produce queso de cabra.', options: ['la cual', 'cual', 'quien'], answer: 0, why: 'Explicativa formal sobre una cosa: la cual (o que). «Quien» es solo para personas.', en: 'The cooperative, which is over forty years old, produces goat’s cheese.' },
            { context: 'En el bar, después de la ruta. (Everyday talk.)', prompt: '«Hay quien prefiere caminar solo». ¿Qué significa?', options: ['Algunas personas prefieren caminar solas.', 'Nadie prefiere caminar solo.', 'Hay una persona concreta allí.'], answer: 0, why: '«Hay quien» = hay personas que, algunas personas. No señala a nadie concreto.', en: 'What does “Hay quien prefiere caminar solo” mean?' },
          ] },
          { kind: 'rewrite', title: 'Del habla al texto formal · From speech to formal writing', items: [
            { prompt: 'Es la asociación con la que trabajamos.', instruction: 'Hazla más formal con «la cual».', accept: ['Es la asociación con la cual trabajamos'] },
            { prompt: 'Los socios con los que hablamos están de acuerdo.', instruction: 'Hazla más formal con «los cuales».', accept: ['Los socios con los cuales hablamos están de acuerdo'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Lo importante en B1 es reconocer «el cual» al leer; al hablar, «el que» es lo natural.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 113 · Lo que y lo de: referencias a ideas', text: 'Ya hablas de personas y cosas con **quien** y **el que / la que**: «Conozco a quien organizó la visita», «la amiga con la que viajé». En la clase 113 das el paso a las **ideas**: «**Lo que** me dijo Nerea», «**lo de** la cena». Es el paso natural: del artículo que concuerda (el que, la que) al neutro «lo», que no se refiere a una persona ni a una cosa, sino a una idea.', en: 'You can now talk about people and things with “quien” and “el que / la que”: “Conozco a quien organizó la visita”, “la amiga con la que viajé”. In class 113 you move on to ideas: “Lo que me dijo Nerea” (what Nerea told me), “lo de la cena” (the dinner thing). It is the natural next step: from the article that agrees (el que, la que) to neuter “lo”, which refers not to a person or a thing but to an idea.', href: '/gramatica/lo-que-y-lo-de-referencias', label: 'Ir a la clase 113' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Quién es la persona con la que hiciste tu mejor viaje?». Respuesta esperada: «La persona con la que / con quien…» y un dato extra entre comas. Tarea: escribir la crónica de Escribir sobre una salida real.' },
        ] },
      ],
    },
  ],
};
