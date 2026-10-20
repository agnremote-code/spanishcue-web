import type { LiveLesson } from '../types';

/**
 * Lesson 352 · A2 · Solía + infinitivo y costumbres antiguas (course unit G052).
 * One scene runs through the class: Irene Castillo prepares a photo exhibition,
 * «Así era nuestro barrio», at the community centre of the San Lorenzo
 * neighbourhood. She interviews Rafael Ortiz (79), who had the bakery on the
 * square: he used to get up at four and walk to work; neighbours used to queue
 * for bread; children used to play football on the square. In Practicar Irene
 * also talks to Pilar Romero, the old schoolteacher. In the voice message
 * Mercedes Vidal (Mexican voice, tú with Irene) remembers the old cinema.
 * Content: soler in the imperfecto (solía, solías, solía, solíamos, solíais,
 * solían) + infinitive, no preposition; equivalent to the habitual imperfecto
 * (class 049). Contrast: habit (solía caminar) vs one occasion (un día caminé)
 * and vs now (suelo / presente). Mistakes: *usaba caminar (English «used to»),
 * *solía a caminar, *solían compraban, *suelía, *ayer solía, solía + plain
 * description. Ampliación: tener la costumbre de / acostumbrar a + infinitivo.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 352,
  level: 'A2',
  title: 'Solía + infinitivo y costumbres antiguas',
  subtitle: 'Contar las costumbres de otra época con solía + infinitivo y compararlas con un día concreto y con lo que haces ahora.',
  legend: [
    { tone: 'blue', label: 'COSTUMBRE DE ANTES · solía + infinitivo (used to: solía caminar)' },
    { tone: 'orange', label: 'UNA VEZ · indefinido: un hecho concreto (once: un día caminé)' },
    { tone: 'teal', label: 'AHORA · presente: suelo, camino (now)' },
    { tone: 'violet', label: 'MARCADORES · antes, de niño, en esa época (time words)' },
  ],
  optionNotes: {
    'suelía': '«Soler» cambia o → ue solo en el presente (suelo). En imperfecto no cambia: **solía**.',
    'suelían': '«Soler» cambia o → ue solo en el presente (suelen). En imperfecto no cambia: **solían**.',
    'usaban': '«Usar» es «to use» (usar el teléfono). Para «used to» usa **solía / solían** + infinitivo, o el imperfecto.',
    'solió': '«Soler» casi no se usa en indefinido. Para una costumbre de antes: **solía**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Costumbres de otra época', coach: 'Lo que hacías antes, muchas veces. What you used to do.',
      steps: [
        { title: 'Fotos antiguas · Old photos', blocks: [
          { kind: 'lead', text: 'Irene Castillo trabaja en el centro cultural del barrio San Lorenzo. Prepara una exposición de fotos antiguas: «Así era nuestro barrio». Hoy habla con Rafael Ortiz, de 79 años. Rafael tenía la panadería de la plaza. Mira una foto y dice: «Antes **solía caminar** al trabajo». Hoy aprendes a contar costumbres de otra época con **solía + infinitivo**.', en: 'Irene Castillo works at the San Lorenzo community centre. She is preparing an exhibition of old photos: “This is how our neighbourhood used to be”. Today she talks to Rafael Ortiz, aged 79. Rafael had the bakery on the square. He looks at a photo and says: “I used to walk to work”. Today you learn to talk about old habits with solía + infinitive.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Rafael y tu alumno repite. Después tu alumno dice qué palabra nueva aparece en la segunda frase.', self: 'Lee las dos frases en voz alta. ¿Qué palabra nueva aparece en la segunda? (Which new word appears in the second sentence?)' } },
          { kind: 'compare', title: 'Dos frases, la misma idea · Two sentences, the same idea', columns: [
            { tone: 'blue', label: 'IMPERFECTO · ya lo conoces', sentence: '[[Antes|violet]] [[caminaba|blue]] al trabajo.', idea: 'Un hábito del pasado con el imperfecto (clase 049).', en: 'I used to walk to work. (imperfect: a past habit)' },
            { tone: 'blue', label: 'SOLÍA + INFINITIVO · nuevo', sentence: '[[Antes|violet]] [[solía caminar|blue]] al trabajo.', idea: 'La misma idea. «Solía» dice claramente: era mi costumbre.', en: 'I used to walk to work. (solía says: it was my habit)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Antes solía caminar al trabajo» significa…', options: ['Antes caminé al trabajo una vez.', 'Ahora camino al trabajo todos los días.', 'Antes caminaba al trabajo normalmente.'], answer: 2, why: '«Solía caminar» es un hábito de antes: normalmente caminaba.', en: '“Antes solía caminar al trabajo” means…' },
            { prompt: 'Con «solía», Rafael habla de…', options: ['una costumbre de una época pasada.', 'un plan para mañana.', 'un hecho de ayer.'], answer: 0, why: '«Solía» presenta algo que se repetía en una época del pasado.', en: 'With “solía”, Rafael is talking about…' },
            { prompt: 'En esa época, Rafael ___ pan todas las mañanas.', options: ['hace', 'solía hacer', 'solía hizo'], answer: 1, why: '«Todas las mañanas» en una época pasada: costumbre, solía + infinitivo (hacer).', en: 'In those days, Rafael used to make bread every morning.' },
          ] },
        ] },
        { title: 'La forma · The form', mascot: '/brand/mascot/studying.webp', coach: 'Solo cambia «soler». Only soler changes.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SOLÍA + INFINITIVO', question: '¿Qué hacías normalmente antes?', en: 'What did you usually do before? (used to + verb)', formula: ['solía · solías · solía · solíamos · solíais · solían', '+ infinitivo: caminar, comer, salir…'],
            meaning: 'Conjugas solo **soler**, en imperfecto. El segundo verbo va siempre en **infinitivo** (-ar, -er, -ir), sin preposición. El sentido es: «antes hacía esto normalmente, era mi costumbre».',
            examples: [
              { es: 'De joven, Rafael [[solía caminar|blue]] al trabajo.', en: 'As a young man, Rafael used to walk to work.' },
              { es: '[[Los domingos|violet]] [[solíamos comer|blue]] en casa de mi abuela.', en: 'On Sundays we used to eat at my grandmother’s house.' },
              { es: '[[De niño|violet]], ¿[[solías jugar|blue]] en la calle?', en: 'As a child, did you use to play in the street?' },
            ],
            note: '«Soler» es un verbo especial: se usa casi solo en **presente** (suelo) y en **imperfecto** (solía). En imperfecto es regular, como comer: com**ía** → sol**ía**.' },
          { kind: 'table', title: 'Soler en imperfecto · Soler in the imperfect', head: ['Persona', 'soler', '+ infinitivo'], rows: [
            ['yo', '**solía**', 'caminar al trabajo'],
            ['tú', '**solías**', 'jugar en la calle'],
            ['él, ella, usted', '**solía**', 'abrir a las seis'],
            ['nosotros, nosotras', '**solíamos**', 'comer en casa'],
            ['vosotros, vosotras', '**solíais**', 'salir los viernes'],
            ['ellos, ellas, ustedes', '**solían**', 'comprar pan'],
          ], note: 'Siempre con tilde: sol**í**a, sol**í**amos. «Yo solía» y «Rafael solía» tienen la misma forma. Vosotros (solíais) se usa en España. (Always with an accent on the í.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mis padres ___ trabajar los sábados.', options: ['solía', 'solíamos', 'solían'], answer: 2, why: 'Mis padres = ellos: solían.', en: 'My parents used to work on Saturdays.' },
            { prompt: 'Antes nosotros ___ cenar a las diez.', options: ['solían', 'solíamos', 'solíamos a'], answer: 1, why: 'Nosotros: solíamos. Y sin preposición: solíamos cenar.', en: 'We used to have dinner at ten.' },
          ] },
        ] },
        { title: '¿Costumbre o una vez? · Habit or once?', mascot: '/brand/mascot/standing.webp', coach: 'Muchas veces o una vez. Many times or once.', blocks: [
          { kind: 'compare', title: 'Costumbre o hecho · Habit or event', columns: [
            { tone: 'blue', label: 'COSTUMBRE · solía + infinitivo', sentence: '[[En esa época|violet]], Rafael [[solía abrir|blue]] la panadería a las seis.', idea: 'Algo que se repetía, muchas veces, durante años.', en: 'In those days, Rafael used to open the bakery at six.' },
            { tone: 'orange', label: 'UNA VEZ · indefinido', sentence: '[[Un día|violet]] de 1985 [[abrió|orange]] a las nueve porque había nieve.', idea: 'Un hecho concreto, en un día concreto.', en: 'One day in 1985 he opened at nine because there was snow.' },
          ] },
          { kind: 'decide', title: '¿Solía, indefinido o imperfecto?', steps: [
            { q: '¿Hablas de algo que se repetía en una época? (antes, de niño, en esa época, los domingos, cada verano)', yes: 'Usa **solía + infinitivo** (o el imperfecto): «Antes [[solía caminar|blue]] al trabajo».', no: 'next' },
            { q: '¿Es un hecho de un momento concreto? (ayer, un día, en 2010, una vez, el sábado pasado)', yes: 'Usa el **indefinido**: «Un día [[caminé|orange]] dos horas».', no: 'next' },
            { q: '¿Describes cómo era algo o alguien? (alto, pequeño, simpático, bonito)', yes: 'Usa el **imperfecto**, sin solía: «Mi abuelo **era** alto».', no: 'Lee la frase otra vez: ¿se repetía o pasó una vez?' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Solía habla de repetición · Solía is about repetition', text: 'Para describir cómo era una persona o un lugar, usa el imperfecto normal: «Mi abuelo **era** alto», «La plaza **era** pequeña». Con «solía» dices que algo **pasaba muchas veces**: «Los domingos, la plaza **solía estar** llena de niños».', en: 'To describe what a person or a place was like, use the plain imperfect: “Mi abuelo era alto”, “La plaza era pequeña”. With “solía” you say that something happened many times: “On Sundays, the square was usually full of children”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'De niña, Irene ___ al parque con su padre los sábados.', options: ['solía ir', 'fue', 'solía a ir'], answer: 0, why: '«Los sábados», en la infancia: una costumbre. Solía ir, sin preposición.', en: 'As a girl, Irene used to go to the park with her father on Saturdays.' },
            { prompt: 'Un sábado de 1999, Irene ___ al zoo con su padre.', options: ['solía ir', 'fue', 'va'], answer: 1, why: '«Un sábado de 1999»: un día concreto, una vez. Indefinido: fue.', en: 'One Saturday in 1999, Irene went to the zoo with her father.' },
            { prompt: 'El abuelo de Irene ___ muy alto y simpático.', options: ['era', 'fue', 'solía ser'], answer: 0, why: 'Es una descripción, no una costumbre: era.', en: 'Irene’s grandfather was very tall and friendly.' },
          ] },
        ] },
        { title: 'Antes y ahora · Then and now', mascot: '/brand/mascot/speaking.webp', coach: 'Solía antes, suelo ahora. Then and now.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'AHORA · SUELO + INFINITIVO', question: '¿Y ahora qué haces normalmente?', en: 'And what do you usually do now?', formula: ['suelo · sueles · suele · solemos · soléis · suelen', '+ infinitivo'],
            meaning: 'Para una costumbre de **hoy**, usas soler en **presente**. Cambia o → ue, como poder (puedo, puedes), pero no con nosotros y vosotros: solemos, soléis. También puedes usar el presente normal: «ahora camino».',
            examples: [
              { es: '[[Antes|violet]] Irene [[solía ir|blue]] en coche; [[ahora|violet]] [[suele ir|teal]] en bicicleta.', en: 'Irene used to go by car; now she usually goes by bike.' },
              { es: '[[Ahora|violet]] Rafael [[suele dormir|teal]] hasta las ocho.', en: 'Now Rafael usually sleeps until eight.' },
              { es: '[[Antes|violet]] [[no solíamos ver|blue]] la tele; [[ahora|violet]] la [[vemos|teal]] mucho.', en: 'We didn’t use to watch TV; now we watch it a lot.' },
            ],
            note: 'En imperfecto **no** hay cambio o → ue: solía, nunca «suelía». (No ue in the imperfect.)' },
          { kind: 'table', title: 'Antes y ahora · Then and now', head: ['Antes (solía)', 'Ahora (presente)'], rows: [
            ['Rafael **solía levantarse** a las cuatro. (got up at four)', 'Ahora **se levanta** a las ocho.'],
            ['Los vecinos **solían comprar** pan cada mañana.', 'Ahora **suelen comprar** pan en el supermercado.'],
            ['**Solíamos llamar** desde el teléfono de la plaza. (public phone)', 'Ahora **solemos escribir** mensajes.'],
          ], note: 'Negativo: **no** va delante de solía: «Antes **no solía** desayunar». Con un verbo reflexivo, el pronombre va delante de solía o al final del infinitivo: «**me** solía levantar» = «solía levantar**me**». Las dos formas son correctas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Antes Irene ___ desayunar; ahora desayuna todos los días.', options: ['solía', 'no solía', 'suele'], answer: 1, why: 'Antes no tenía esa costumbre; ahora sí. Negativo: no solía.', en: 'Irene didn’t use to have breakfast; now she has breakfast every day.' },
            { prompt: 'Ahora mis vecinos ___ comprar el pan en el supermercado.', options: ['suelen', 'solían', 'suelían'], answer: 0, why: '«Ahora»: presente. Ellos: suelen.', en: 'Now my neighbours usually buy bread at the supermarket.' },
            { prompt: 'De joven, Rafael ___ a las cuatro.', options: ['se solía levantar', 'solía se levantar', 'se solía levantarse'], answer: 0, why: 'El pronombre va delante de solía (se solía levantar) o al final (solía levantarse), una sola vez.', en: 'As a young man, Rafael used to get up at four.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Ojo con «used to». Careful with “used to”.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla. Después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Antes usaba caminar al trabajo.', right: 'Antes solía caminar al trabajo.', why: '«Used to» no es «usaba». Usar = to use: «uso el teléfono». Para una costumbre de antes: solía + infinitivo.' },
            { wrong: 'Rafael solía a abrir a las seis.', right: 'Rafael solía abrir a las seis.', why: 'Soler va sin preposición: solía + infinitivo. (No «a».)' },
            { wrong: 'Los vecinos solían compraban pan.', right: 'Los vecinos solían comprar pan.', why: 'Solo se conjuga soler. El segundo verbo va en infinitivo: comprar.' },
            { wrong: 'Antes suelía cenar tarde.', right: 'Antes solía cenar tarde.', why: 'El cambio o → ue es solo del presente (suelo). Imperfecto: solía.' },
            { wrong: 'Ayer solía caminar al trabajo.', right: 'Ayer caminé al trabajo.', why: 'Ayer es un día concreto: un hecho, indefinido. Solía es para una costumbre de una época.' },
            { wrong: 'Mi abuela solía ser muy alta.', right: 'Mi abuela era muy alta.', why: 'Es una descripción, no algo que se repite: imperfecto, era.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En los años ochenta, mis tíos ___ en el campo todos los veranos.', options: ['solían pasaban', 'usaban pasar', 'solían pasar'], answer: 2, why: 'Costumbre de una época: solían + infinitivo (pasar). «Usaban» no significa «used to».', en: 'In the eighties, my uncle and aunt used to spend every summer in the countryside.' },
            { prompt: 'El lunes pasado ___ a la panadería de Rafael.', options: ['fui', 'suelo ir', 'solía ir'], answer: 0, why: '«El lunes pasado»: un día concreto, una vez. Fui.', en: 'Last Monday I went to Rafael’s bakery.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice dos costumbres de su infancia con «De niño / De niña, solía…» y una cosa que hace ahora con «Ahora suelo…». Tú preguntas: «¿Y un día especial?» para oír un indefinido.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La panadería de la plaza', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Una foto de 1978 · A photo from 1978', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rafael y tu alumno es Irene. Después tu alumno toca cada expresión marcada y dice si es una costumbre, una vez o ahora.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿costumbre, una vez o ahora? (Habit, once or now?)' } },
          { kind: 'explore', title: 'Así era la plaza', setting: 'En el centro cultural. Irene y Rafael miran una foto de 1978: la panadería y la plaza. Irene trata de usted a Rafael. (At the community centre. Irene and Rafael look at a photo from 1978: the bakery and the square.)', lines: [
            { who: 'Irene', text: 'Don Rafael, esta foto es de 1978. ¿Es su panadería?', en: 'Don Rafael, this photo is from 1978. Is it your bakery?' },
            { who: 'Rafael', text: 'Sí, ¡qué recuerdos! [[En esa época|violet]] yo [[solía levantarme|blue]] a las cuatro de la mañana.', en: 'Yes, what memories! In those days I used to get up at four in the morning.' },
            { who: 'Irene', text: '¿A las cuatro? ¿Y cómo [[solía ir|blue]] a la panadería?', en: 'At four? And how did you use to get to the bakery?' },
            { who: 'Rafael', text: '[[Solía caminar|blue]]: veinte minutos por la calle Mayor. A esa hora no había autobuses.', en: 'I used to walk: twenty minutes along Calle Mayor. There were no buses at that time.' },
            { who: 'Irene', text: '¿Y a qué hora [[solían venir|blue]] los vecinos?', en: 'And what time did the neighbours use to come?' },
            { who: 'Rafael', text: 'A partir de las siete. [[Los domingos|violet]], la cola [[llegaba|blue]] hasta la esquina.', en: 'From seven o’clock. On Sundays, the queue went all the way to the corner.' },
            { who: 'Irene', text: '¿Y qué hacían los niños?', en: 'And what did the children do?' },
            { who: 'Rafael', text: 'Los niños [[solían jugar|blue]] al fútbol en la plaza. [[Una vez|violet]], un balón [[rompió|orange]] mi escaparate.', en: 'The children used to play football on the square. Once, a ball broke my shop window.' },
            { who: 'Irene', text: '¡No! ¿Y usted qué [[hizo|orange]]?', en: 'No! And what did you do?' },
            { who: 'Rafael', text: 'Nada grave. Les [[di|orange]] un pan dulce a cada uno y [[se fueron|orange]] a jugar a otra calle.', en: 'Nothing serious. I gave each of them a sweet roll and they went to play in another street.' },
            { who: 'Irene', text: '¿Y ahora pasa por la plaza a veces?', en: 'And do you go past the square sometimes now?' },
            { who: 'Rafael', text: 'Sí, ahora [[suelo pasear|teal]] por allí por la tarde. Pero mi panadería es una farmacia.', en: 'Yes, now I usually go for a walk there in the afternoon. But my bakery is a pharmacy now.' },
          ], notes: {
            'En esa época': 'In those days. Presenta una etapa del pasado: después vienen las costumbres de esa etapa.',
            'solía levantarme': 'Una costumbre de esa época. Levantarse es reflexivo: **solía levantarme** o **me solía levantar**. Las dos formas son correctas.',
            'solía ir': 'Irene pregunta por una costumbre, con usted: **¿cómo solía ir?** (how did you use to get there?).',
            'Solía caminar': 'La frase de la clase: un hábito de muchos años. Es lo mismo que «caminaba», pero «solía» subraya la costumbre.',
            'solían venir': 'Ellos (los vecinos): **solían** + infinitivo. Pasaba cada mañana.',
            'Los domingos': 'Un marcador de repetición: cada domingo. Pide un verbo de costumbre.',
            'llegaba': 'Imperfecto de hábito (clase 049): el mismo sentido que «solía llegar». Puedes usar las dos formas.',
            'solían jugar': 'Otra costumbre: los niños jugaban allí muchas veces, durante años.',
            'Una vez': 'Once. Cambia de la costumbre a un hecho concreto: después viene un indefinido.',
            'rompió': 'Indefinido de romper: pasó **una vez**. No es una costumbre.',
            'hizo': 'Hacer en indefinido, usted: ¿qué hizo **ese día**? Irene pregunta por el hecho concreto.',
            'di': 'Dar en indefinido, yo: **di** (sin tilde). Una acción de ese día.',
            'se fueron': 'Irse en indefinido, ellos: **se fueron** (they left). Otro hecho de ese día.',
            'suelo pasear': 'Ahora: soler en **presente**, con o → ue: **suelo**. Una costumbre de hoy.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cómo solía ir Rafael a la panadería?', options: ['En autobús.', 'Caminando, veinte minutos.', 'En bicicleta.'], answer: 1, why: '«Solía caminar: veinte minutos por la calle Mayor». No había autobuses a esa hora.', en: 'How did Rafael use to get to the bakery?' },
            { prompt: '¿Qué pasó una vez?', options: ['La cola llegó hasta la esquina.', 'Rafael cerró la panadería un domingo.', 'Un balón rompió el escaparate.'], answer: 2, why: '«Una vez, un balón rompió mi escaparate». La cola es una costumbre de los domingos.', en: 'What happened once?' },
            { prompt: '¿Qué suele hacer Rafael ahora?', options: ['Jugar al fútbol en la plaza.', 'Pasear por la plaza por la tarde.', 'Abrir la farmacia.'], answer: 1, why: '«Ahora suelo pasear por allí por la tarde».', en: 'What does Rafael usually do now?' },
          ] },
        ] },
        { title: 'Los recuerdos de Rafael · Rafael’s memories', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Costumbre, una vez o ahora? · Habit, once or now?', categories: [
            { id: 'costumbre', label: 'COSTUMBRE DE ANTES · solía', tone: 'blue' },
            { id: 'vez', label: 'UNA VEZ · indefinido', tone: 'orange' },
            { id: 'ahora', label: 'AHORA · presente', tone: 'teal' },
          ], items: [
            { text: 'Rafael solía levantarse a las cuatro.', answer: 'costumbre', why: 'Pasaba cada día en esa época: solía.' },
            { text: 'Un balón rompió el escaparate.', answer: 'vez', why: 'Un hecho concreto: rompió.' },
            { text: 'Rafael suele pasear por la plaza.', answer: 'ahora', why: 'Soler en presente: una costumbre de hoy.' },
            { text: 'Los niños solían jugar al fútbol en la plaza.', answer: 'costumbre', why: 'Se repetía durante años: solían jugar.' },
            { text: 'Rafael les dio un pan dulce a los niños.', answer: 'vez', why: 'Lo hizo ese día: dio.' },
            { text: 'La panadería es una farmacia.', answer: 'ahora', why: 'La situación de hoy, en presente.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué solía hacer Rafael los domingos? ¿Y qué pasó una vez?». Tu alumno responde con una frase de costumbre (solía) y una de hecho (indefinido).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Solía + infinitivo, sin preposición.',
      steps: [
        { title: 'Los pies de foto · The captions', blocks: [
          { kind: 'choice', items: [
            { context: 'Irene escribe los textos de las fotos. (Irene writes the photo captions.)', prompt: 'En los años setenta, los vecinos ___ a la plaza por la noche con sus sillas.', options: ['solían a salir', 'suelen salir', 'solían salir'], answer: 2, why: 'Una costumbre de los años setenta: solían + infinitivo, sin «a». «Suelen» es de ahora.', en: 'In the seventies, the neighbours used to go out to the square at night with their chairs.' },
            { context: 'Foto del quiosco. (Photo of the newsstand.)', prompt: 'El señor del quiosco ___ el periódico a las casas.', options: ['solía llevar', 'solía llevaba', 'solió llevar'], answer: 0, why: 'Costumbre de antes: solía + infinitivo (llevar). «Solió» casi no se usa.', en: 'The newsstand man used to take the newspaper to people’s homes.' },
            { context: 'Foto de una fiesta. (Photo of a party.)', prompt: 'En 1982 ___ una gran fiesta en la plaza por los cien años del barrio.', options: ['había', 'hubo', 'solía haber'], answer: 1, why: 'Una fiesta en un año concreto: un hecho, hubo.', en: 'In 1982 there was a big party on the square for the neighbourhood’s 100th anniversary.' },
            { context: 'Foto de la fuente. (Photo of the fountain.)', prompt: 'De niña, mi madre ___ agua de la fuente de la plaza.', options: ['solía traer', 'suele traer', 'solía trajo'], answer: 0, why: '«De niña»: una época pasada. Solía + infinitivo: traer.', en: 'As a girl, my mother used to fetch water from the fountain on the square.' },
            { context: 'Foto de la escuela. (Photo of the school.)', prompt: 'La escuela de la calle Mayor ___ muy grande y tenía un patio con árboles.', options: ['solía ser', 'fue', 'era'], answer: 2, why: 'Es una descripción del edificio: era. No es algo que se repite.', en: 'The school on Calle Mayor was very big and had a playground with trees.' },
          ] },
        ] },
        { title: '¿Costumbre, una vez o ahora? · Habit, once or now?', blocks: [
          { kind: 'classify', title: 'Recuerdos de los vecinos · Neighbours’ memories', categories: [
            { id: 'costumbre', label: 'COSTUMBRE DE ANTES', tone: 'blue' },
            { id: 'vez', label: 'UNA VEZ', tone: 'orange' },
            { id: 'ahora', label: 'AHORA', tone: 'teal' },
          ], items: [
            { text: 'Mi padre solía leer el periódico en el bar.', answer: 'costumbre', why: 'Se repetía en una época: solía leer.' },
            { text: 'Un verano fuimos todos a la playa en tren.', answer: 'vez', why: '«Un verano», un viaje concreto: fuimos.' },
            { text: 'Ahora los niños suelen jugar en el parque nuevo.', answer: 'ahora', why: '«Ahora» + suelen: costumbre de hoy.' },
            { text: 'En esa época, las tiendas solían cerrar a mediodía.', answer: 'costumbre', why: '«En esa época» + solían: costumbre de antes.' },
            { text: 'En 1990 abrió el primer supermercado del barrio.', answer: 'vez', why: 'Un hecho en un año concreto: abrió.' },
            { text: 'Ahora casi todos compramos por internet.', answer: 'ahora', why: 'Presente: lo que hacemos hoy.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Antes usábamos ir al mercado los sábados.', ok: false, options: ['Antes solíamos a ir al mercado los sábados.', 'Antes solíamos ir al mercado los sábados.', 'Antes usábamos a ir al mercado los sábados.'], answer: 1, why: '«Used to» es solía / solíamos + infinitivo, sin «a». «Usar» es «to use».' },
            { sentence: 'Rafael solía abrir la panadería a las seis.', ok: true, why: 'Correcta: solía + infinitivo para una costumbre de antes.' },
            { sentence: 'El sábado pasado solía visitar a mi tía.', ok: false, options: ['El sábado pasado visité a mi tía.', 'El sábado pasado suelo visitar a mi tía.', 'El sábado pasado solí visitar a mi tía.'], answer: 0, why: '«El sábado pasado» es un día concreto: indefinido, visité. «Solí» no se usa.' },
            { sentence: 'De jóvenes, mis abuelos se solían ver en la plaza.', ok: true, why: 'Correcta: el pronombre puede ir delante de solían (se solían ver) o al final (solían verse).' },
            { sentence: 'En invierno, mis tíos solían venían a cenar los viernes.', ok: false, options: ['En invierno, mis tíos solían venir a cenar los viernes.', 'En invierno, mis tíos suelían venir a cenar los viernes.', 'En invierno, mis tíos solía venir a cenar los viernes.'], answer: 0, why: 'Solo se conjuga soler (ellos: solían). Venir va en infinitivo.' },
          ] },
        ] },
        { title: 'La maestra del barrio · The neighbourhood teacher', blocks: [
          { kind: 'chat-fill', title: 'Irene habla con doña Pilar Romero, la antigua maestra · Irene talks to the old schoolteacher', lines: [
            { who: 'Irene', text: 'Doña Pilar, ¿cuántos alumnos ___ tener en clase?', options: ['solían', 'solía', 'suelía'], answer: 1, why: 'Irene habla con Pilar de usted: solía tener.' },
            { who: 'Pilar', text: 'Unos treinta. Y a mediodía los niños ___ a casa a comer.', options: ['solían a ir', 'fueron', 'solían ir'], answer: 2, why: 'Pasaba cada día: solían + infinitivo, sin «a».' },
            { who: 'Irene', text: '¿Y usted también comía en casa?' },
            { who: 'Pilar', text: 'No, yo ___ en la escuela con los otros maestros.', options: ['suelo comer', 'comí', 'solía comer'], answer: 2, why: 'Una costumbre de esa época: solía comer. «Suelo» es de ahora.' },
            { who: 'Irene', text: '¿Recuerda algún día especial?' },
            { who: 'Pilar', text: 'Sí. Un invierno ___ tanto que no hubo clase durante una semana.', options: ['nevó', 'solía nevar', 'nieva'], answer: 0, why: '«Un invierno»: un hecho concreto, una vez. Nevó.' },
            { who: 'Irene', text: '¡Qué bonito! Y ahora, ¿qué ___ hacer por las tardes?', options: ['solía', 'suelía', 'suele'], answer: 2, why: '«Ahora»: soler en presente, usted: suele.' },
            { who: 'Pilar', text: 'Leo mucho y paseo con mi perro.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['solía', 'Antes', 'caminar', 'al', 'trabajo'], accept: ['Antes solía caminar al trabajo', 'Solía caminar al trabajo antes'], en: 'I used to walk to work.' },
            { tiles: ['solíamos', 'Los', 'domingos', 'comer', 'en', 'casa', 'de', 'mi', 'abuela'], accept: ['Los domingos solíamos comer en casa de mi abuela', 'Solíamos comer en casa de mi abuela los domingos'], en: 'On Sundays we used to eat at my grandmother’s house.' },
            { tiles: ['no', 'solía', 'Rafael', 'cerrar', 'los', 'lunes'], accept: ['Rafael no solía cerrar los lunes', 'Los lunes Rafael no solía cerrar'], en: 'Rafael didn’t use to close on Mondays.' },
            { tiles: ['me', 'solía', 'levantar', 'De', 'joven', 'a', 'las', 'cuatro'], accept: ['De joven me solía levantar a las cuatro', 'Me solía levantar a las cuatro de joven'], en: 'As a young man I used to get up at four.' },
          ] },
        ] },
        { title: 'Di lo mismo con solía · Say it with solía', blocks: [
          { kind: 'rewrite', title: 'Del imperfecto a solía + infinitivo · From the imperfect to solía', items: [
            { prompt: 'Antes Rafael abría la panadería a las seis.', instruction: 'Escribe la misma idea con solía + infinitivo.', accept: ['Antes Rafael solía abrir la panadería a las seis', 'Rafael antes solía abrir la panadería a las seis', 'Antes Rafael solía abrir a las seis la panadería'] },
            { prompt: 'De niños, mi hermano y yo jugábamos en la plaza.', instruction: 'Escribe la misma idea con solía + infinitivo.', accept: ['De niños, mi hermano y yo solíamos jugar en la plaza', 'De niños mi hermano y yo solíamos jugar en la plaza'] },
            { prompt: 'En verano, los vecinos cenaban en la calle.', instruction: 'Escribe la misma idea con solía + infinitivo.', accept: ['En verano, los vecinos solían cenar en la calle', 'En verano los vecinos solían cenar en la calle'] },
            { prompt: 'Antes me acostaba muy tarde.', instruction: 'Escribe la misma idea con solía + infinitivo.', accept: ['Antes solía acostarme muy tarde', 'Antes me solía acostar muy tarde'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta tres costumbres de una época de su vida (la escuela, la universidad, un trabajo antiguo) con «solía» y una cosa que pasó una vez.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Mercedes', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El cine de la plaza · The cinema on the square', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿de qué lugar habla Mercedes?). Segunda escucha: tu alumno levanta la mano con cada «solía, solíamos, solían». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las formas de «soler». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio para la exposición', channel: 'MENSAJE DE VOZ · DE MERCEDES PARA IRENE', src: '/audio/grammar-live/352.mp3',
            before: 'Mercedes Vidal, una vecina, tiene una foto antigua para la exposición. Le manda un audio a Irene. ¿De qué lugar crees que habla: el mercado, la escuela, el cine…? (Mercedes sends Irene a voice message. Which place do you think she talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Mercedes invita a Irene al cine este domingo.', 'Mercedes cuenta que no le gustaba el cine.', 'Mercedes recuerda sus domingos en el cine del barrio.'], answer: 2, why: 'Habla de la foto del cine y de lo que solía hacer allí los domingos.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Con quién solía ir Mercedes al cine?', options: ['Con su padre.', 'Con su hermana.', 'Con sus nietos.'], answer: 1, why: '«Mi hermana y yo solíamos ir todos los domingos por la tarde».', en: 'Who did Mercedes use to go to the cinema with?' },
              { prompt: '¿Qué solían comprar en el quiosco?', options: ['Palomitas.', 'Helados.', 'El periódico.'], answer: 0, why: '«Solíamos comprar palomitas en el quiosco de al lado».', en: 'What did they use to buy at the kiosk?' },
              { prompt: '¿Por qué no solía ir su padre?', options: ['Porque la entrada era cara.', 'Porque prefería escuchar el fútbol en la radio.', 'Porque trabajaba los domingos.'], answer: 1, why: '«Mi padre no solía venir: prefería escuchar el fútbol en la radio».', en: 'Why didn’t her father use to go?' },
              { prompt: '¿Qué pasó un domingo?', options: ['Se fue la luz y la gente empezó a cantar.', 'Mercedes perdió la foto.', 'El cine cerró.'], answer: 0, why: '«Un domingo se fue la luz y todo el cine empezó a cantar». Es un hecho de una vez: indefinido.', en: 'What happened one Sunday?' },
            ],
            transcript: 'Hola, Irene, soy Mercedes, de la calle Mayor. Te mando un audio para la exposición. Tengo una foto del cine de la plaza, de 1975. Mi hermana y yo [[solíamos ir|blue]] todos los domingos por la tarde. La entrada era muy barata y [[solíamos comprar|blue]] palomitas en el quiosco de al lado. La película [[solía empezar|blue]] a las cinco. Los chicos [[solían sentarse|blue]] atrás, y nosotras, adelante. Mi padre [[no solía venir|blue]]: prefería escuchar el fútbol en la radio. [[Un domingo|violet]], en mitad de la película, [[se fue|orange]] la luz y todo el cine [[empezó|orange]] a cantar. ¡Qué noche! El cine cerró en 1990. Ahora mis nietos [[suelen ver|teal]] películas en el celular. ¡Qué cambio! Mañana te llevo la foto al centro cultural. Un beso.',
            reply: { teacher: 'Tú eres Mercedes. Tu alumno es Irene y responde al audio con tres frases: da las gracias, cuenta una costumbre de su propia infancia con «solía» y propone una hora para recibir la foto.', self: 'Responde a Mercedes en voz alta como Irene: da las gracias, cuenta una costumbre de tu infancia con «solía» y di cuándo puede llevar la foto. (Answer as Irene: thank her, tell a childhood habit with solía, say when she can bring the photo.)' } },
          { kind: 'tip', icon: '🇲🇽', title: 'Celular, móvil · Phone words', text: 'Mercedes dice **celular**, como en México y en gran parte de América. En España se dice **móvil**. Las dos palabras son correctas.', en: 'Mercedes says “celular”, as in Mexico and much of Latin America. In Spain people say “móvil”. Both words are correct.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus costumbres de antes', coach: 'Antes solía… Ahora suelo… Then and now.',
      steps: [
        { title: 'Para la exposición · For the exhibition', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Irene y haces las preguntas. Tu alumno habla de sus propias costumbres de otra época (la infancia, la escuela, un trabajo antiguo). Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Piensa en una época de tu vida: la infancia, la escuela, otra ciudad. Lee la pregunta y responde en voz alta. (Think of a time in your life and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'De niño o de niña, ¿qué solías hacer los fines de semana? · As a child, what did you use to do at weekends?', followUps: ['¿Con quién solías estar? (Who did you use to spend time with?)', '¿Dónde solías jugar? (Where did you use to play?)'], phrases: ['[[De niño|violet]] / [[De niña|violet]], [[solía|blue]]…', 'Los sábados, mis hermanos y yo [[solíamos|blue]]…', 'Mis padres [[solían|blue]]…'], hint: 'Solía + infinitivo, sin «a»: «solía jugar», no «solía a jugar».', example: 'De niña, los sábados solía ir al mercado con mi abuela. Por la tarde, mis primos y yo solíamos jugar en la calle.', next: 'Ahora, la escuela o el trabajo.', teacher: 'Cuenta tú también una costumbre de tu infancia con «solía». Así tu alumno oye la forma otra vez.' },
            { q: '¿Cómo solías ir a la escuela o al trabajo antes? ¿Y ahora? · How did you use to get to school or work? And now?', followUps: ['¿Cuánto tiempo tardabas? (How long did it take you?)', '¿Qué prefieres: antes o ahora? (Which do you prefer: then or now?)'], phrases: ['[[Antes|violet]] [[solía ir|blue]] a pie / en autobús…', '[[Ahora|violet]] [[suelo ir|teal]]…', '[[Ahora|violet]] [[voy|teal]]…'], hint: 'Antes: solía. Ahora: suelo o el presente normal.', example: 'Antes solía ir a la escuela a pie: diez minutos. Ahora suelo ir al trabajo en metro.', next: 'Ahora, la familia.' },
            { q: '¿Qué solía hacer tu familia en verano o en las fiestas? · What did your family use to do in summer or on holidays?', followUps: ['¿Qué solían comer? (What did you use to eat?)', '¿Quién solía cocinar? (Who used to cook?)'], phrases: ['En verano [[solíamos|blue]] ir a…', 'Mi madre / mi padre [[solía|blue]] preparar…', 'Toda la familia [[solía|blue]] reunirse en…'], hint: 'Nosotros: solíamos. Él / ella: solía. Ellos: solían.', example: 'En verano solíamos ir a la casa de mis abuelos. Mi abuela solía preparar una sopa riquísima.', next: 'Ahora, una costumbre que ya no existe.' },
            { q: '¿Qué costumbre antigua de tu barrio o de tu ciudad no existe ahora? · Which old custom from your neighbourhood or town does not exist now?', followUps: ['¿Te gustaba? (Did you like it?)', '¿Qué hace la gente ahora? (What do people do now?)'], phrases: ['La gente [[solía|blue]]…', 'Los vecinos [[no solían|blue]]…', '[[Ahora|violet]] la gente [[suele|teal]]…'], hint: 'Compara: antes (solía / solían) y ahora (suele / suelen).', example: 'La gente solía comprar en tiendas pequeñas. Ahora suele comprar en el supermercado o por internet.', next: 'Ahora, un día diferente.' },
            { q: 'Piensa en un día especial de esa época, un día diferente. ¿Qué pasó? · Think of a special day from that time. What happened?', followUps: ['¿Qué solías hacer normalmente ese día? (What did you usually do that day?)', '¿Qué pasó de diferente? (What was different?)'], phrases: ['Normalmente [[solía|blue]]…, pero [[un día|violet]]…', '[[Una vez|violet]], [[fuimos|orange]] / [[hubo|orange]]…'], hint: 'La costumbre con solía; el día especial con el indefinido.', example: 'Los domingos solíamos comer en casa, pero un domingo fuimos todos a la playa y comimos allí.', teacher: 'Si tu alumno dice «un día solía…», tú preguntas: «¿Muchas veces o una vez?».' },
            { q: 'Ahora tú eres un vecino o una vecina del barrio. Irene pregunta: «¿Cómo era la vida aquí antes?». Cuenta cuatro costumbres y una cosa de ahora. · Now you are a neighbour: tell four old habits and one thing about now.', followUps: ['¿Qué solían hacer los niños? (What did the children use to do?)', '¿Y ahora qué suele hacer la gente? (And what do people usually do now?)'], phrases: ['[[En esa época|violet]], la gente [[solía|blue]]…', 'Yo [[solía|blue]]…', '[[Ahora|violet]] [[solemos|teal]]…'], hint: 'Cuatro frases con solía, una con suelo / presente.', example: 'En esa época, la gente solía hablar en la calle. Yo solía comprar el pan en la plaza. Los niños solían jugar fuera. Los vecinos solían cenar juntos en verano. Ahora solemos estar más en casa.', teacher: 'Tú eres Irene y reaccionas: «¿De verdad? ¿Y ahora?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Irene y hace las preguntas («¿Qué solía hacer usted de niño?», «¿Y ahora?») y tú cuentas tus costumbres de antes.', self: 'Ahora tú eres Irene: haz las preguntas en voz alta («¿Qué solía hacer usted de niño?», «¿Y ahora?») y responde como un vecino. (Now you are Irene: ask and answer.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una tarjeta para el mural', coach: 'Costumbres, un día especial, ahora. Habits, one day, now.',
      steps: [
        { title: 'El mural de recuerdos · The memory wall', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «solía»: ¿va con infinitivo, sin preposición? Después, tu alumno lee su tarjeta en voz alta.', self: 'Escribe tu tarjeta y toca «Revisar mi texto». Después, mira cada «solía»: ¿va con infinitivo? (Write your card and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mi barrio antes · My neighbourhood before', situation: 'Irene prepara un mural de recuerdos para la exposición y pide a los vecinos una tarjeta corta. Escribe tu tarjeta sobre un lugar de tu infancia o de otra época de tu vida: tu barrio, tu pueblo o tu escuela. (Irene is preparing a memory wall for the exhibition and asks neighbours for a short card. Write yours about a place from your childhood or another time in your life.)', task: [
            'Di qué lugar es y de qué época hablas. (Say which place and which time.)',
            'Cuenta tres costumbres con solía + infinitivo, con personas diferentes (yo, nosotros, ellos…). (Three habits with solía, different people.)',
            'Cuenta un día especial con el indefinido. (One special day in the indefinido.)',
            'Di cómo es ahora con el presente o con suelo. (Say what it is like now.)',
            'Firma con tu nombre. (Sign with your name.)',
          ], starters: ['Mi barrio en los años…', 'De niño / De niña, vivía en…', 'Los sábados, solíamos…', 'Mi madre solía…', 'Un día…', 'Ahora…'],
            words: ['solía', 'solías', 'solíamos', 'solían', 'no solía', 'antes', 'de niño', 'de niña', 'en esa época', 'los domingos', 'un día', 'una vez', 'ahora', 'suelo'],
            model: 'Mi barrio en los años noventa. De niña, vivía en la calle del Río, cerca del mercado. [[Los sábados|violet]], mi madre y yo [[solíamos ir|blue]] al mercado muy temprano. Mi madre [[solía comprar|blue]] fruta y pescado, y yo [[solía hablar|blue]] con todos los vendedores. Por la tarde, los niños de la calle [[solían jugar|blue]] juntos hasta la noche. [[Un sábado|violet]] de 1996 [[hubo|orange]] una fiesta enorme en el mercado por sus cincuenta años. [[Ahora|violet]] el mercado es más moderno y yo [[suelo comprar|teal]] por internet, pero algunos sábados voy con mi hija. Elena Ferrer.',
            minWords: 60,
            checks: [
              { label: 'Solía + infinitivo (a habit with solía)', pattern: '(?<!\\p{L})sol[ií](?:a|as|amos|ais|an)\\s+\\p{L}+(?:ar|er|ir)(?:me|te|se|nos|os)?(?!\\p{L})', tip: 'Cuenta una costumbre de antes: «Los sábados solíamos ir al mercado».' },
              { label: 'Un hecho en indefinido: hubo, fuimos… (one event)', pattern: '(?<!\\p{L})(?:hubo|fui|fue|fuimos|fueron|hice|hicimos|tuve|tuvimos|vi|vimos|estuve|pasó|llegó|abrió|cerró|\\p{L}{2,}é|\\p{L}{2,}ó)(?!\\p{L})', tip: 'Cuenta un día especial: «Un sábado de 1996 hubo una fiesta».' },
              { label: 'Ahora: cómo es hoy (now)', pattern: '(?<!\\p{L})(?:ahora|hoy)(?!\\p{L})', tip: 'Compara con hoy: «Ahora suelo comprar por internet».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})sol[ií](?:a|as|amos|ais|an)\\s+a\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: 'Soler va sin preposición: **solía ir**, no «solía a ir».' },
              { pattern: '(?<!\\p{L})us(?:aba|abas|ábamos|abamos|aban)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: '«Usar» es «to use». Para «used to», escribe **solía** + infinitivo.' },
              { pattern: '(?<!\\p{L})su[eé]l[ií](?:a|as|amos|ais|an)(?!\\p{L})', why: 'En imperfecto no hay ue: **solía**, no «suelía».' },
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
            { tone: 'blue', label: 'COSTUMBRE DE ANTES', formula: 'solía · solías · solíamos · solían + infinitivo', example: 'Antes solía caminar al trabajo.', caption: 'algo que se repetía en una época pasada; sin preposición', en: 'something that was repeated in a past period; no preposition' },
            { tone: 'orange', label: 'UNA VEZ · INDEFINIDO', formula: 'ayer · un día · en 1985 → caminé, hubo, fue', example: 'Un día caminé dos horas por la nieve.', caption: 'un hecho concreto, no una costumbre', en: 'a specific event, not a habit' },
            { tone: 'teal', label: 'AHORA', formula: 'suelo · sueles · suele · solemos · suelen + infinitivo', example: 'Ahora suelo ir en autobús.', caption: 'la costumbre de hoy (o ue solo en presente)', en: 'today’s habit (o → ue only in the present)' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: '«Used to» en español es **solía + infinitivo** (o el imperfecto): «Antes solía caminar» = «Antes caminaba». Nunca «usaba caminar». Solo cambia **soler**; el otro verbo va en infinitivo, sin «a». Para un día concreto, indefinido: «Ayer caminé». Para describir, imperfecto: «La plaza era pequeña».', en: '“Used to” in Spanish is solía + infinitive (or the imperfect): “Antes solía caminar” = “Antes caminaba”. Never “usaba caminar”. Only soler changes; the other verb stays in the infinitive, with no “a”. For a specific day, use the indefinido: “Ayer caminé”. To describe, use the imperfect: “La plaza era pequeña”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Cuando vivía en Lima, ___ por el malecón los domingos.', options: ['solía a pasear', 'paseé una vez', 'solía pasear'], answer: 2, why: 'Una costumbre de esa época: solía pasear, sin «a». (malecón = seafront promenade)', en: 'When I lived in Lima, I used to walk along the seafront on Sundays.' },
            { prompt: 'El 3 de mayo de 2015 ___ mi primer trabajo.', options: ['solía empecé', 'solía empezar', 'empecé'], answer: 2, why: 'Una fecha concreta, una vez: empecé.', en: 'On 3 May 2015 I started my first job.' },
            { prompt: 'Mis primos ___ pasar las vacaciones con nosotros.', options: ['solía', 'usaban', 'solían'], answer: 2, why: 'Mis primos = ellos: solían + infinitivo.', en: 'My cousins used to spend the holidays with us.' },
            { prompt: 'Antes yo no ___ desayunar, pero ahora desayuno siempre.', options: ['suelo', 'solía', 'solió'], answer: 1, why: '«Antes» + una costumbre que ya cambió: no solía.', en: 'I didn’t use to have breakfast, but now I always do.' },
            { prompt: 'Mi primera casa ___ pequeña y muy luminosa.', options: ['era', 'solía estar', 'solía ser'], answer: 0, why: 'Es una descripción de la casa: era.', en: 'My first house was small and very bright.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una oficina de 1990.', blocks: [
          { kind: 'lead', text: 'Irene prepara otra parte de la exposición: el trabajo antes de internet. Su compañero Hugo trabajó en una oficina del barrio en 1990. Escribe sus frases con solía.', en: 'Irene is preparing another part of the exhibition: work before the internet. Her colleague Hugo worked in a local office in 1990. Write his sentences with solía.' },
          { kind: 'rewrite', title: 'La oficina en 1990 · The office in 1990', items: [
            { prompt: 'Antes · nosotros · escribir cartas a mano', instruction: 'Escribe una frase en pasado con «Antes» + solía + infinitivo.', accept: ['Antes solíamos escribir cartas a mano', 'Antes nosotros solíamos escribir cartas a mano'] },
            { prompt: 'Antes · el jefe · llegar a las ocho', instruction: 'Escribe una frase en pasado con «Antes» + solía + infinitivo.', accept: ['Antes el jefe solía llegar a las ocho', 'Antes solía llegar el jefe a las ocho', 'Antes el jefe solía llegar a las 8'] },
            { prompt: 'Antes · yo · no · comer en la oficina', instruction: 'Escribe una frase en pasado con «Antes» + no solía + infinitivo.', accept: ['Antes no solía comer en la oficina', 'Antes yo no solía comer en la oficina'] },
          ] },
        ] },
        { title: 'Ampliación · Otras formas de decirlo', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: más registro. Optional: more register.', blocks: [
          { kind: 'lead', text: 'En textos más formales o escritos, también encuentras **tenía la costumbre de** + infinitivo y **acostumbraba a** + infinitivo. Significan lo mismo que «solía».', en: 'In more formal or written texts you also find “tenía la costumbre de” + infinitive (had the habit of) and “acostumbraba a” + infinitive. They mean the same as “solía”.' },
          { kind: 'tip', icon: '🌎', title: 'Con «de», con «a», sin nada · With de, with a, with nothing', text: '**Solía** + infinitivo: sin preposición. **Tenía la costumbre de** + infinitivo: con «de». **Acostumbraba a** + infinitivo: normalmente con «a»; también es correcto sin «a» («acostumbraba cenar tarde»).', en: 'Solía + infinitive: no preposition. Tenía la costumbre de + infinitive: with “de”. Acostumbraba a + infinitive: usually with “a”, though it is also correct without it.' },
          { kind: 'choice', title: 'Para estudiantes rápidos · For fast learners', items: [
            { prompt: '«Mi abuelo tenía la costumbre de leer el periódico en voz alta» significa…', options: ['Mi abuelo solía leer el periódico en voz alta.', 'Mi abuelo quería leer el periódico.', 'Mi abuelo leyó el periódico en voz alta una vez.'], answer: 0, why: '«Tener la costumbre de» = soler: un hábito de antes.', en: '“My grandfather had the habit of reading the newspaper aloud” means…' },
            { prompt: 'En el texto de la exposición: «Los vecinos ___ a reunirse en la plaza los domingos».', options: ['solían', 'usaban', 'acostumbraban'], answer: 2, why: 'Con «a» delante del infinitivo solo funciona «acostumbraban a». «Solían» va sin «a».', en: 'In the exhibition text: “The neighbours used to meet on the square on Sundays”.' },
          ] },
          { kind: 'rewrite', title: 'Más formal · More formal', items: [
            { prompt: 'Rafael solía cerrar la panadería a las ocho.', instruction: 'Escribe la misma idea con «tenía la costumbre de».', accept: ['Rafael tenía la costumbre de cerrar la panadería a las ocho'] },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional: para estudiantes rápidos o si sobra tiempo. Lo importante de la clase es «solía + infinitivo».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 053 · Marcadores temporales: ayer, antes, ya, todavía', text: 'Ya cuentas costumbres de otra época: «Antes solía caminar al trabajo», «Un día caminé dos horas». Hoy usaste mucho «antes», «un día» y «ahora». En la clase 053 trabajas con estas palabras de tiempo y con dos nuevas: **ya** y **todavía** («Ya no camino al trabajo», «Todavía vivo aquí»). Es el paso natural: ahora dices con precisión qué cambió y qué sigue igual.', en: 'You can now talk about habits from another time: “Antes solía caminar al trabajo”, “Un día caminé dos horas”. Today you used “antes”, “un día” and “ahora” a lot. In class 053 you work with these time words and two new ones: “ya” and “todavía” (“I don’t walk to work any more”, “I still live here”). It is the natural next step: now you say precisely what changed and what stayed the same.', href: '/gramatica/marcadores-temporales-ayer-antes-ya-todavia', label: 'Ir a la clase 053' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué solías hacer de niño o de niña que no haces ahora?». Respuesta esperada: «De niño solía…; ahora…». Tarea: escribir la tarjeta de Escribir sobre otro lugar de su vida.' },
        ] },
      ],
    },
  ],
};
