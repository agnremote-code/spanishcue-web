import type { LiveLesson } from '../types';

/**
 * Lesson 307 · A1 · Posición habitual del adjetivo y sentido básico.
 * The neutral order noun + adjective (colour, origin, shape, size), a few
 * frequent adjectives placed before the noun to give an opinion (gran, buen,
 * mal) and four very frequent pairs whose meaning changes with the position
 * (grande / gran, viejo, nuevo, único; pobre only to recognise).
 * Scene: Irene Salas, an estate agent, and her colleague Pablo rewrite the
 * listings of two apartments (calle Olivo and calle Río). Irene leaves the
 * voice message; instructions address the learner with tú.
 */
export const lesson: LiveLesson = {
  id: 307,
  level: 'A1',
  title: 'Posición habitual del adjetivo y sentido básico',
  subtitle: 'Describir una casa con el adjetivo en su sitio y entender cuándo «gran», «viejo» o «único» cambian el sentido.',
  legend: [
    { tone: 'blue', label: 'DESPUÉS DEL NOMBRE · describe: tamaño, color, origen (after the noun)' },
    { tone: 'orange', label: 'ANTES DEL NOMBRE · valora o cambia el sentido (before the noun)' },
    { tone: 'teal', label: 'DESPUÉS DE ES / ESTÁ · sentido básico (after the verb)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Antes o después del nombre?', coach: 'Primero el nombre, después el adjetivo. Noun first, then adjective.',
      steps: [
        { title: 'Dos fichas · Two listings', blocks: [
          { kind: 'lead', text: 'Irene Salas es agente inmobiliaria. Hoy reescribe con su compañero Pablo las fichas de dos apartamentos: uno en la calle Olivo y otro en la calle Río. Para describir bien una casa, necesitas saber **dónde va el adjetivo**.', en: 'Irene Salas is an estate agent. Today she and her colleague Pablo are rewriting the listings for two apartments: one on calle Olivo and one on calle Río. To describe a home well, you need to know where the adjective goes.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases en voz alta y tu alumno dice qué palabra va antes del nombre en cada una. Todavía sin regla: solo mirar el orden.', self: 'Lee las dos frases en voz alta. Mira dónde está el adjetivo: ¿antes o después de «apartamento»? (Look where the adjective is.)' } },
          { kind: 'compare', title: 'La misma casa, dos frases · Same home, two sentences', columns: [
            { tone: 'blue', label: 'DESPUÉS · describe', sentence: 'Es [[un apartamento grande|blue]], con [[una cocina blanca|blue]].', idea: 'Información: tamaño y color.', en: 'It is a big apartment, with a white kitchen.' },
            { tone: 'orange', label: 'ANTES · valora', sentence: 'Es [[un gran apartamento|orange]] en [[un buen barrio|orange]].', idea: 'La opinión de Irene: excelente.', en: 'It is a great apartment in a good neighbourhood.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «una cocina blanca», el adjetivo va…', options: ['después del nombre.', 'antes del nombre.'], answer: 0, why: 'Cocina (nombre) + blanca (adjetivo): el orden normal en español.', en: 'In “una cocina blanca”, the adjective goes…' },
            { prompt: '«Un gran apartamento» da sobre todo…', options: ['una medida exacta en metros.', 'una opinión: excelente.'], answer: 1, why: 'Gran, antes del nombre, valora: great, impressive.', en: '“Un gran apartamento” mainly gives…' },
          ] },
        ] },
        { title: 'Lo normal: nombre + adjetivo · The usual order', mascot: '/brand/mascot/studying.webp', coach: 'Al revés que en inglés. The opposite of English.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DESPUÉS DEL NOMBRE', question: '¿Cómo es? ¿De qué tipo es?', en: 'Noun + adjective: the neutral order', formula: ['artículo + nombre + adjetivo', 'una cocina blanca · un balcón pequeño'],
            meaning: 'En una descripción normal, el adjetivo va **después** del nombre. Dice qué tipo de cosa es y la separa de otras: no cualquier cocina, una cocina **blanca**. En inglés es al revés: a white kitchen → una cocina blanca.',
            examples: [
              { es: 'Es [[un dormitorio pequeño|blue]].', en: 'It is a small bedroom.' },
              { es: 'La ficha tiene [[una foto bonita|blue]].', en: 'The listing has a nice photo.' },
              { es: 'Es [[una calle tranquila|blue]].', en: 'It is a quiet street.' },
              { es: 'El dueño es [[un señor colombiano|blue]].', en: 'The owner is a Colombian man.' },
              { es: 'Son [[dos ventanas grandes|blue]].', en: 'They are two big windows.' },
            ],
            note: 'La concordancia de la clase 006 no cambia: una calle tranquil**a**, dos ventanas grand**es**.' },
          { kind: 'table', title: 'Siempre después, en una descripción normal · Always after', head: ['Tipo (type)', 'Ejemplo', 'English'], rows: [
            ['Color', 'una puerta [[azul|blue]] · un sofá [[gris|blue]]', 'a blue door · a grey sofa'],
            ['Nacionalidad', 'un vecino [[argentino|blue]] · una dueña [[chilena|blue]]', 'an Argentine neighbour · a Chilean owner'],
            ['Forma (shape)', 'una mesa [[redonda|blue]] · un salón [[cuadrado|blue]]', 'a round table · a square living room'],
            ['Tipo de cosa', 'una calle [[peatonal|blue]] · un baño [[completo|blue]]', 'a pedestrian street · a full bathroom'],
          ], note: 'Truco: si el adjetivo **separa un tipo de otros** (blanca, no negra; chilena, no peruana), va después.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Una ficha para la web: «Salón con ___».', options: ['una alfombra verde', 'una verde alfombra'], answer: 0, why: 'Color: después del nombre.', en: 'A listing for the website: “Living room with a green rug”.' },
            { prompt: 'Irene habla de la dueña: «Es ___».', options: ['una señora peruana', 'una peruana señora'], answer: 0, why: 'Nacionalidad: siempre después del nombre.', en: 'Irene talks about the owner: “She is a Peruvian lady”.' },
            { prompt: '«a round table» en español es…', options: ['un mesa redondo', 'una mesa redonda', 'una redonda mesa'], answer: 1, why: 'Forma después del nombre, y mesa es femenino: una mesa redonda.', en: '“A round table” in Spanish is…' },
          ] },
        ] },
        { title: 'Antes del nombre: valorar · Before the noun: an opinion', mascot: '/brand/mascot/speaking.webp', coach: 'Gran, buen, mal: tu opinión. Your opinion.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ANTES DEL NOMBRE', question: '¿Qué te parece?', en: 'Adjective + noun: an opinion, a highlight', formula: ['artículo + adjetivo + nombre', 'un buen barrio · una gran oportunidad'],
            meaning: 'Unos pocos adjetivos muy frecuentes (**bueno, malo, grande**) van muchas veces **antes** del nombre. Así no clasificas: **valoras**. Es muy típico en anuncios: «¡Una gran oportunidad!».',
            examples: [
              { es: 'Es [[un buen precio|orange]].', en: 'It is a good price.' },
              { es: 'Es [[una gran terraza|orange]].', en: 'It is a great terrace.' },
              { es: 'Hoy es [[un mal día|orange]] para visitar casas: llueve.', en: 'Today is a bad day to visit homes: it is raining.' },
              { es: 'Es [[una buena zona|orange]] para vivir.', en: 'It is a good area to live in.' },
            ],
            note: 'Con colores, nacionalidades o formas no se hace: en una descripción normal, «una azul puerta» es un error.' },
          { kind: 'table', title: 'Formas cortas antes del nombre · Short forms', head: ['Adjetivo', 'Antes del nombre', 'Ejemplo'], rows: [
            ['bueno', '**buen** + nombre masculino singular', 'un [[buen|orange]] precio · una [[buena|orange]] zona'],
            ['malo', '**mal** + nombre masculino singular', 'un [[mal|orange]] momento · una [[mala|orange]] noticia'],
            ['grande', '**gran** + nombre singular (masculino y femenino)', 'un [[gran|orange]] salón · una [[gran|orange]] cocina'],
          ], note: 'Después del nombre, la forma completa: un precio **bueno**, un salón **grande**. En plural no hay forma corta: [[grandes|orange]] ventanas, [[buenos|orange]] vecinos.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es ___ para una familia.', options: ['un apartamento buen', 'un buen apartamento', 'un bueno apartamento'], answer: 1, why: 'Antes de un nombre masculino singular: buen. «Buen» nunca va después.', en: 'It is a good apartment for a family.' },
            { prompt: '¡Es ___!', options: ['una gran cocina', 'una grande cocina', 'una cocina gran'], answer: 0, why: 'Antes de un nombre singular, grande → gran, también con femenino.', en: 'It is a great kitchen!' },
            { prompt: 'Es ___ para vender: el edificio está en obras.', options: ['un mal momento', 'un malo momento'], answer: 0, why: 'Antes de un nombre masculino singular: mal.', en: 'It is a bad time to sell: the building is under renovation.' },
          ] },
        ] },
        { title: 'Mismo adjetivo, otro sentido · Same adjective, new meaning', mascot: '/brand/mascot/standing.webp', coach: 'Cuatro parejas, nada más. Just four pairs.', blocks: [
          { kind: 'lead', text: 'Con unos pocos adjetivos, la posición **cambia el sentido**. Después del nombre, el sentido básico. Antes del nombre, otro sentido. Hoy aprendes cuatro parejas muy frecuentes.', en: 'With a few adjectives, the position changes the meaning. After the noun, the basic meaning. Before the noun, another meaning. Today you learn four very frequent pairs.' },
          { kind: 'table', title: 'Cuatro parejas · Four pairs', head: ['Después: sentido básico', 'Antes: otro sentido'], rows: [
            ['un apartamento [[grande|blue]] · big', 'un [[gran|orange]] apartamento · great, impressive'],
            ['un amigo [[viejo|blue]] · an elderly friend', 'un [[viejo|orange]] amigo · a friend for many years'],
            ['un apartamento [[nuevo|blue]] · brand-new', 'un [[nuevo|orange]] apartamento · another, a different one'],
            ['un apartamento [[único|blue]] · unique, special', 'el [[único|orange]] apartamento · the only one'],
          ], note: 'Solo para reconocer: un barrio **pobre** (no money) / ¡**pobre** Pablo! (poor thing). Y con es / está, el adjetivo va después del verbo y tiene el sentido básico: «El salón [[es grande|teal]]», «La cocina [[es nueva|teal]]».' },
          { kind: 'compare', title: '¿Amigo viejo o viejo amigo? · Elderly or long-time?', columns: [
            { tone: 'blue', label: 'AMIGO VIEJO · edad', sentence: 'Don Ramón es un señor de 85 años: es [[un amigo viejo|blue]].', idea: 'Habla de la edad.', en: 'Don Ramón is 85: he is an elderly friend.' },
            { tone: 'orange', label: 'VIEJA AMIGA · años de amistad', sentence: 'Ana tiene 32 años, pero es [[una vieja amiga|orange]] de Irene: amigas del colegio.', idea: 'Habla de muchos años de amistad, no de la edad.', en: 'Ana is 32, but she is an old friend of Irene: friends from school.' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Viejo» con personas · “Viejo” for people', text: 'Para hablar de la edad de una persona, «viejo» puede sonar fuerte. Es más amable decir **mayor**: «un señor mayor». «Un viejo amigo», en cambio, siempre es algo bonito.', en: 'To talk about a person’s age, “viejo” can sound harsh. “Mayor” is kinder: “un señor mayor”. “Un viejo amigo”, on the other hand, is always something nice.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Es el único apartamento con terraza» significa…', options: ['No hay otro con terraza.', 'Es un apartamento muy especial.'], answer: 0, why: 'El único + nombre = the only one.', en: '“Es el único apartamento con terraza” means…' },
            { prompt: '«Un apartamento nuevo» es…', options: ['recién construido (brand-new).', 'otro apartamento, diferente.'], answer: 0, why: 'Nuevo después del nombre: el sentido básico, brand-new.', en: '“Un apartamento nuevo” is…' },
            { prompt: 'Irene y Carlos son amigos desde hace veinte años. Carlos es…', options: ['un amigo viejo.', 'un viejo amigo.'], answer: 1, why: 'Muchos años de amistad: viejo antes del nombre.', en: 'Irene and Carlos have been friends for twenty years. Carlos is…' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Describe o valora? Describe or give an opinion?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Describe o valora?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Es una blanca cocina.', right: 'Es una cocina blanca.', why: 'En una descripción normal, el color va después del nombre. (Colours go after the noun.)' },
            { wrong: 'El dueño es un uruguayo señor.', right: 'El dueño es un señor uruguayo.', why: 'La nacionalidad va siempre después del nombre. (Nationality goes after.)' },
            { wrong: 'Es un grande salón.', right: 'Es un gran salón. / Es un salón grande.', why: 'Antes de un nombre singular: gran. Después: grande. (Before: gran; after: grande.)' },
            { wrong: 'Está en un bueno barrio.', right: 'Está en un buen barrio.', why: 'Antes de un nombre masculino singular: buen. (Before a masculine singular noun: buen.)' },
            { wrong: 'Es el apartamento único con terraza.', right: 'Es el único apartamento con terraza.', why: 'Para decir «the only one», único va antes: el único apartamento.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien?', options: ['Es un sofá gris.', 'Es un gris sofá.'], answer: 0, why: 'Color: después del nombre.', en: 'Which sentence is right?' },
            { prompt: '¿Qué frase está bien?', options: ['Es un gran balcón.', 'Es un grande balcón.'], answer: 0, why: 'Antes del nombre singular: gran.', en: 'Which sentence is right?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno describe una cosa de la sala con un color («una silla negra») y valora otra con gran o buen («una gran ventana»). Tú repites la frase con el orden correcto.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la agencia', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Las fotos de los apartamentos · The photos', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene. Después, tu alumno toca cada expresión marcada y dice si describe o valora.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada para ver por qué el adjetivo va antes o después.' } },
          { kind: 'explore', title: 'Dos apartamentos, dos fichas', setting: 'Lunes por la mañana en la agencia. Irene y Pablo miran las fotos de los dos apartamentos en el ordenador. (Monday morning at the agency. Irene and Pablo look at the photos of the two apartments.)', lines: [
            { who: 'Irene', text: 'Pablo, mira las fotos de la calle Olivo. Es [[un gran apartamento|orange]].', en: 'Pablo, look at the photos of calle Olivo. It is a great apartment.' },
            { who: 'Pablo', text: 'Sí, y es [[un apartamento grande|blue]]: noventa metros.', en: 'Yes, and it is a big apartment: ninety square metres.' },
            { who: 'Irene', text: 'Exacto. Con [[un salón luminoso|blue]] y [[una cocina blanca|blue]].', en: 'Exactly. With a bright living room and a white kitchen.' },
            { who: 'Pablo', text: '¿Y el edificio? ¿Es nuevo?', en: 'And the building? Is it new?' },
            { who: 'Irene', text: 'No, es [[un edificio viejo|blue]], de 1950. Pero la cocina [[es nueva|teal]].', en: 'No, it is an old building, from 1950. But the kitchen is new.' },
            { who: 'Pablo', text: '¿Y el dueño? ¿Es un cliente de la agencia?', en: 'And the owner? Is he a client of the agency?' },
            { who: 'Irene', text: 'Es don Ramón, [[un viejo amigo|orange]] de mi familia.', en: 'It is don Ramón, an old friend of my family.' },
            { who: 'Pablo', text: '¿Y el apartamento de la calle Río?', en: 'And the apartment on calle Río?' },
            { who: 'Irene', text: 'Es [[un apartamento nuevo|blue]], pequeño, pero es [[el único apartamento|orange]] del edificio con terraza.', en: 'It is a brand-new apartment, small, but it is the only apartment in the building with a terrace.' },
            { who: 'Pablo', text: 'Entonces es [[un apartamento único|blue]]. ¡Y está en [[un buen barrio|orange]]!', en: 'So it is a unique apartment. And it is in a good neighbourhood!' },
            { who: 'Irene', text: 'Perfecto. Ahora, las dos fichas: el adjetivo normal, después del nombre.', en: 'Perfect. Now, the two listings: the normal adjective, after the noun.' },
          ], notes: {
            'un gran apartamento': '**Gran** antes del nombre: Irene valora. Significa great, impressive. Es su opinión.',
            'un apartamento grande': '**Grande** después del nombre: el tamaño, noventa metros. Es información, no opinión.',
            'un salón luminoso': 'Describe el salón: tiene mucha luz. Adjetivo **después** del nombre.',
            'una cocina blanca': 'Color: siempre **después** del nombre en una descripción. Cocina es femenino: blanc**a**.',
            'un edificio viejo': '**Viejo** después del nombre: la edad del edificio, de 1950.',
            'es nueva': 'Después de **es**, el adjetivo tiene el sentido básico: la cocina es de este año (brand-new).',
            'un viejo amigo': '**Viejo** antes del nombre: un amigo de muchos años. No habla de la edad de don Ramón.',
            'un apartamento nuevo': '**Nuevo** después del nombre: recién construido, brand-new.',
            'el único apartamento': '**El único** + nombre: no hay otro con terraza. The only one.',
            'un apartamento único': '**Único** después del nombre: especial, diferente. Unique.',
            'un buen barrio': '**Buen** antes de un nombre masculino singular: Pablo valora el barrio.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuántos metros tiene el apartamento de la calle Olivo?', options: ['Noventa.', 'Cincuenta.', 'Ciento cincuenta.'], answer: 0, why: '«Es un apartamento grande: noventa metros».', en: 'How many square metres is the calle Olivo apartment?' },
            { prompt: '¿Quién es don Ramón?', options: ['Un cliente nuevo de la agencia.', 'El compañero de Pablo.', 'El dueño, un amigo de muchos años de la familia de Irene.'], answer: 2, why: '«Es don Ramón, un viejo amigo de mi familia».', en: 'Who is don Ramón?' },
            { prompt: '¿Por qué es especial el apartamento de la calle Río?', options: ['Es de 1950.', 'Es el único del edificio con terraza.', 'Es muy grande.'], answer: 1, why: '«Es el único apartamento del edificio con terraza».', en: 'Why is the calle Río apartment special?' },
          ] },
        ] },
        { title: 'La primera ficha · The first listing', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Describe o valora? Describe or rate?', blocks: [
          { kind: 'chat-fill', title: 'Pablo lee su ficha de la calle Olivo', lines: [
            { who: 'Pablo', text: 'Primera frase: «Calle Olivo, 8: ___ de noventa metros».', options: ['un apartamento gran', 'un apartamento grande', 'un grande apartamento'], answer: 1, why: 'Noventa metros es información: tamaño, después del nombre, forma completa.' },
            { who: 'Irene', text: 'Muy bien. ¿Y la cocina?' },
            { who: 'Pablo', text: '«Con ___ y un balcón».', options: ['una cocina blanco', 'una cocina blanca', 'una blanca cocina'], answer: 1, why: 'Color después del nombre, en femenino: cocina blanca.' },
            { who: 'Irene', text: 'Y ahora algo especial: el jardín.' },
            { who: 'Pablo', text: '«Es ___ de la calle con jardín».', options: ['un único apartamento', 'el único apartamento', 'el apartamento único'], answer: 1, why: 'No hay otro con jardín: el único + nombre (the only one).' },
            { who: 'Irene', text: 'Y al final, el precio: doscientos mil euros.' },
            { who: 'Pablo', text: '«¡___!»', options: ['Un precio gran', 'Un gran precio', 'Un grande precio'], answer: 1, why: 'Pablo valora el precio: gran antes del nombre singular.' },
            { who: 'Irene', text: 'Perfecto, Pablo. ¡Una ficha excelente!' },
          ] },
          { kind: 'teacher', text: 'Pregunta: «¿Por qué Pablo escribe "un apartamento grande" y después "un gran precio"?». Respuesta: el primero es información (noventa metros); el segundo es una opinión.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Describe o valora? Describe or give an opinion?',
      steps: [
        { title: 'Elige el orden · Choose the order', blocks: [
          { kind: 'choice', items: [
            { context: 'La ficha describe el sofá. (The listing describes the sofa.)', prompt: 'Salón con ___.', options: ['un sofá azula', 'un sofá azul', 'un azul sofá'], answer: 1, why: 'Color después del nombre. «Azul» tiene una sola forma: un sofá azul, una mesa azul.', en: 'Living room with a blue sofa.' },
            { context: 'Irene está muy contenta con una oferta. (Irene is very happy with an offer.)', prompt: '¡Es ___!', options: ['una gran oferta', 'una grande oferta', 'una oferta gran'], answer: 0, why: 'Valoración antes del nombre: gran. «Gran» nunca va después.', en: 'It is a great offer!' },
            { context: 'Doscientos mil euros en el centro. (200,000 euros in the centre.)', prompt: 'Es ___ para el barrio.', options: ['un buen precio', 'un bueno precio', 'un precio buen'], answer: 0, why: 'Antes de un nombre masculino singular: buen. Después iría la forma completa: un precio bueno.', en: 'It is a good price for the neighbourhood.' },
            { context: 'Pablo habla de la dueña de la calle Río. (Pablo talks about the owner.)', prompt: 'La dueña es ___.', options: ['una mexicana señora', 'una señora mexicana'], answer: 1, why: 'Nacionalidad: siempre después del nombre.', en: 'The owner is a Mexican lady.' },
            { context: 'No hay otro apartamento con garaje en la calle. (No other apartment on the street has a garage.)', prompt: 'Es ___ con garaje.', options: ['el apartamento único', 'una única apartamento', 'el único apartamento'], answer: 2, why: 'The only one: el único + nombre. «Un apartamento único» significa special.', en: 'It is the only apartment with a garage.' },
          ] },
        ] },
        { title: '¿Qué significa? · What does it mean?', blocks: [
          { kind: 'classify', title: 'Sentido básico u otro sentido · Basic or other meaning', categories: [
            { id: 'basico', label: 'Describe: big, elderly, brand-new, unique', tone: 'blue' },
            { id: 'otro', label: 'Otro sentido: great, long-time, another, the only', tone: 'orange' },
          ], items: [
            { text: 'una terraza grande', answer: 'basico', why: 'Grande después del nombre: el tamaño (a big terrace).' },
            { text: 'una gran vista', answer: 'otro', why: 'Gran antes del nombre: valoración (a great view).' },
            { text: 'un vecino viejo', answer: 'basico', why: 'Viejo después del nombre: la edad (an elderly neighbour).' },
            { text: 'una vieja amiga de Irene', answer: 'otro', why: 'Viejo antes del nombre: amistad de muchos años (a long-time friend).' },
            { text: 'el único baño', answer: 'otro', why: 'Único antes del nombre: no hay otro (the only bathroom).' },
            { text: 'un nuevo cliente', answer: 'otro', why: 'Nuevo antes del nombre: otro cliente, uno más (another client).' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Es un dormitorio con una roja alfombra.', ok: false, options: ['Es un dormitorio con un roja alfombra.', 'Es un dormitorio con una alfombra roja.', 'Es un dormitorio con una alfombra rojo.'], answer: 1, why: 'Color después del nombre, y en femenino: una alfombra roja.' },
            { sentence: 'Es un gran precio para el centro.', ok: true, why: 'Correcta: gran antes del nombre singular, para valorar.' },
            { sentence: 'La calle Olivo es una grande calle.', ok: false, options: ['La calle Olivo es una calle gran.', 'La calle Olivo es una grandes calle.', 'La calle Olivo es una calle grande.'], answer: 2, why: 'Después del nombre, grande: una calle grande. («Una gran calle» también existe, pero «una grande calle», no.)' },
            { sentence: 'Don Ramón es un viejo amigo de Irene.', ok: true, why: 'Correcta: un amigo de muchos años.' },
            { sentence: 'Es un edificio con un bueno ascensor.', ok: false, options: ['Es un edificio con un buena ascensor.', 'Es un edificio con un ascensor buen.', 'Es un edificio con un buen ascensor.'], answer: 2, why: 'Antes de un nombre masculino singular: buen. «Buen» nunca va después.' },
            { sentence: 'La dueña es una brasileña arquitecta.', ok: false, options: ['La dueña es una arquitecta brasileño.', 'La dueña es brasileña una arquitecta.', 'La dueña es una arquitecta brasileña.'], answer: 2, why: 'Nacionalidad después del nombre, en femenino: una arquitecta brasileña.' },
          ] },
        ] },
        { title: 'Pablo enseña el apartamento · Pablo shows the apartment', blocks: [
          { kind: 'chat-fill', title: 'Una clienta en la calle Río', lines: [
            { who: 'Sara', text: 'Hola, Pablo. ¿Cómo es el apartamento?' },
            { who: 'Pablo', text: 'Es ___, de 2024.', options: ['un apartamento nuevo', 'un nuevo apartamento', 'un apartamento nueva'], answer: 0, why: 'De 2024: recién construido (brand-new). Nuevo después del nombre.' },
            { who: 'Sara', text: '¿Y el salón?' },
            { who: 'Pablo', text: 'Es pequeño, con ___.', options: ['una pared verdes', 'una pared verde', 'una verde pared'], answer: 1, why: 'Color después del nombre; pared es singular: verde.' },
            { who: 'Sara', text: '¿Y la terraza? ¿Es común?' },
            { who: 'Pablo', text: 'No, es ___ con terraza del edificio.', options: ['un único apartamento', 'el único apartamento', 'el apartamento único'], answer: 1, why: 'No hay otro con terraza: el único + nombre.' },
            { who: 'Sara', text: '¿Y el barrio?' },
            { who: 'Pablo', text: 'Es ___: tranquilo y con parques.', options: ['un barrio buen', 'un buen barrio', 'un bueno barrio'], answer: 1, why: 'Pablo valora el barrio: buen antes del nombre masculino singular.' },
            { who: 'Sara', text: '¿Y la dueña?' },
            { who: 'Pablo', text: 'Es Ana, ___ de Irene. Son amigas del colegio.', options: ['una amiga vieja', 'una vieja amigo', 'una vieja amiga'], answer: 2, why: 'Amigas del colegio: muchos años de amistad, viejo antes del nombre. «Una amiga vieja» habla de la edad.' },
            { who: 'Sara', text: 'Perfecto. ¿Visitamos el apartamento mañana?' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['luminoso', 'Es', 'salón', 'un'], accept: ['Es un salón luminoso'], en: 'It is a bright living room.' },
            { tiles: ['gran', 'una', 'Es', 'terraza'], accept: ['Es una gran terraza'], en: 'It is a great terrace.' },
            { tiles: ['el', 'Es', 'único', 'balcón', 'con', 'apartamento'], accept: ['Es el único apartamento con balcón'], en: 'It is the only apartment with a balcony.' },
          ] },
        ] },
        { title: 'Escríbelo · Write it', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Cambia o traduce · Change or translate', items: [
            { prompt: 'Es una casa grande.', instruction: 'Valora la casa: pon el adjetivo antes del nombre. (Give your opinion: adjective before the noun.)', accept: ['Es una gran casa', 'Una gran casa'] },
            { prompt: 'a white bathroom', instruction: 'Escribe en español: artículo + nombre + adjetivo. (bathroom = baño)', accept: ['un baño blanco', 'Es un baño blanco', 'el baño blanco'] },
            { prompt: 'Ana y Irene: amigas desde el colegio.', instruction: 'Escribe una frase con «Ana es» + vieja + amiga. (Ana is a long-time friend.)', accept: ['Ana es una vieja amiga', 'Ana es una vieja amiga de Irene'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Irene', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Irene deja un mensaje · Irene leaves a message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué llama Irene?). Segunda escucha: tu alumno levanta la mano cada vez que oye un adjetivo antes del nombre. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta los adjetivos que van antes del nombre. (Count the adjectives before the noun.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Irene', channel: 'MENSAJE DE VOZ · DE IRENE PARA PABLO', src: '/audio/grammar-live/307.mp3',
            before: 'Irene está fuera de la agencia y le manda un mensaje de voz a Pablo. ¿Qué crees que dice de los dos apartamentos? (Irene is out of the office and sends Pablo a voice message. What do you think she says about the two apartments?)',
            gist: { prompt: '¿Para qué llama Irene?', options: ['Para dar ideas para las fichas de los apartamentos.', 'Para comprar un apartamento.', 'Para cancelar una visita.'], answer: 0, why: '«Una idea para las fichas de hoy».', en: 'Why is Irene calling?' },
            details: [
              { prompt: '¿Cómo es el salón de la calle Olivo?', options: ['Pequeño.', 'Blanco.', 'Luminoso.'], answer: 2, why: '«Con un salón luminoso y una cocina blanca».', en: 'What is the living room on calle Olivo like?' },
              { prompt: '¿Qué dice Irene del precio?', options: ['Es un mal precio.', 'No dice nada.', 'Es muy bueno: una gran oportunidad.'], answer: 2, why: '«Es una gran oportunidad: el precio es muy bueno».', en: 'What does Irene say about the price?' },
              { prompt: '¿Qué tiene de especial el apartamento de la calle Río?', options: ['Es el único con jardín.', 'Es el único con terraza del edificio.', 'Es muy grande.'], answer: 1, why: '«Es el único apartamento con terraza del edificio».', en: 'What is special about the calle Río apartment?' },
              { prompt: '¿Quién es don Ramón?', options: ['Un señor de 90 años.', 'El jefe de Irene.', 'El dueño de la calle Olivo, un amigo de muchos años.'], answer: 2, why: '«Don Ramón, el dueño de la calle Olivo, es un viejo amigo de mi familia».', en: 'Who is don Ramón?' },
            ],
            transcript: 'Hola, Pablo, soy Irene. Una idea para las fichas de hoy. El apartamento de la calle Olivo es [[un apartamento grande|blue]], con [[un salón luminoso|blue]] y [[una cocina blanca|blue]]. Es [[un edificio viejo|blue]], pero el apartamento está muy bien. Escribe también que es [[una gran oportunidad|orange]]: el precio [[es muy bueno|teal]]. El apartamento de la calle Río es pequeño, pero es [[el único apartamento|orange]] con terraza del edificio. Ah, y don Ramón, el dueño de la calle Olivo, es [[un viejo amigo|orange]] de mi familia: mañana a las diez está en la oficina. ¡Gracias y hasta luego!',
            reply: { teacher: 'Tú eres Irene. Tu alumno responde al mensaje como Pablo: dos frases sobre la calle Olivo y una sobre la calle Río, con un adjetivo después del nombre y uno antes.', self: 'Responde a Irene en voz alta como Pablo: «Hola, Irene. El apartamento de la calle Olivo es…». Usa un adjetivo después del nombre y uno antes. (Answer Irene aloud as Pablo.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu casa, tu ficha', coach: 'Describe y valora. Describe, then give your opinion.',
      steps: [
        { title: 'Hablamos de casas · Talking about homes', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Irene, la agente, y preguntas por la casa de tu alumno. Tu alumno responde con frases cortas: nombre + adjetivo para describir, gran o buen para valorar. Tú repites su frase con el orden correcto y sigues.', self: 'Imagina que Irene te pregunta por tu casa. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Read the question and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo es tu casa o tu apartamento? · What is your home like?', followUps: ['¿Es grande o pequeño? (Big or small?)', '¿Es un edificio nuevo o viejo? (A new or old building?)'], phrases: ['Es [[un apartamento pequeño|blue]].', 'Es [[una casa grande|blue]].', 'Es [[un edificio viejo|blue]] / [[nuevo|blue]].'], hint: 'Artículo + nombre + adjetivo: un apartamento pequeño, una casa grande.', example: 'Es un apartamento pequeño, en un edificio viejo. Pero la cocina es nueva.', next: 'Ahora, tu habitación favorita.', teacher: 'Si tu alumno dice «un pequeño apartamento», no es un error: es una valoración (cozy). Pregunta si quiere describir o valorar.' },
            { q: '¿Cómo es tu habitación favorita? · What is your favourite room like?', followUps: ['¿De qué color es? (What colour is it?)', '¿Cómo es el sofá, la mesa, la cama? (The sofa, table, bed?)'], phrases: ['Es [[un salón luminoso|blue]].', 'Con [[un sofá gris|blue]] y [[una mesa redonda|blue]].', 'Con [[una ventana grande|blue]].'], hint: 'Colores y formas siempre después: un sofá gris, una mesa redonda.', example: 'Es el salón. Es un salón luminoso, con un sofá azul y una mesa redonda.', next: 'Ahora, tu barrio.' },
            { q: '¿Cómo es tu barrio? ¿Es un buen barrio? · What is your neighbourhood like?', followUps: ['¿Es una calle tranquila? (A quiet street?)', '¿Es una buena zona para vivir? (A good area to live in?)'], phrases: ['Es [[un buen barrio|orange]].', 'Es [[una calle tranquila|blue]].', 'Es [[una buena zona|orange]] para vivir.'], hint: 'Para valorar, buen / buena antes del nombre. Para describir, después.', example: 'Es un buen barrio. Es una calle tranquila, con un parque grande.', next: 'Ahora, tus amigos.' },
            { q: '¿Quién es un viejo amigo o una vieja amiga para ti? · Who is a long-time friend for you?', followUps: ['¿Desde cuándo son amigos? (Since when?)', '¿De dónde es? (Where is he / she from?)'], phrases: ['Ana es [[una vieja amiga|orange]].', 'Somos amigos del colegio.', 'Es [[un chico colombiano|blue]].'], hint: '«Un viejo amigo» = muchos años de amistad, no la edad. La nacionalidad, después del nombre.', example: 'Marcos es un viejo amigo. Somos amigos del colegio. Es un chico chileno.', next: 'Ahora, algo especial.' },
            { q: '¿Qué cosa de tu casa es única? · What is unique in your home?', followUps: ['¿Es la única habitación con balcón? (The only room with a balcony?)', '¿Es una cosa única o normal? (Unique or normal?)'], phrases: ['Es [[la única habitación|orange]] con balcón.', 'Es [[una lámpara única|blue]].', 'Es [[un gran balcón|orange]].'], hint: 'El único / la única + nombre = the only one. Nombre + único = special.', example: 'Mi dormitorio es la única habitación con balcón. Y en el salón, una lámpara única, de mi abuela.', next: 'Para terminar, eres agente.' },
            { q: 'Ahora tú eres agente: presenta el apartamento de la calle Olivo o el de la calle Río. · Now you are the agent: present one of the two apartments.', followUps: ['¿Es caro? (Is it expensive?)', '¿Por qué es especial? (Why is it special?)'], phrases: ['Es [[un apartamento grande|blue]] / [[pequeño|blue]].', 'Es [[una gran oportunidad|orange]].', 'Es [[el único apartamento|orange]] con…'], hint: 'Tres frases: describe (después), valora (gran, buen) y algo único.', example: 'Es un apartamento pequeño y nuevo, en un buen barrio. Es el único apartamento con terraza. ¡Es una gran oportunidad!', teacher: 'Tú eres el cliente y haces dos preguntas más. Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Irene y te pregunta por tu casa, tu barrio y tu habitación favorita.', self: 'Ahora tú eres Irene: haz las preguntas en voz alta y responde como un cliente. (Now you are Irene: ask the questions and answer as a client.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu ficha para la agencia', coach: 'Describe, valora y destaca. Describe, rate and highlight.',
      steps: [
        { title: 'Una ficha para la web · A listing for the website', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos el orden: color y tamaño después del nombre; gran y buen antes. Después, tu alumno lee su ficha en voz alta.', self: 'Escribe tu ficha y toca «Revisar mi texto». Mira bien dónde va cada adjetivo. (Write your listing and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'La ficha de tu casa · Your home’s listing', situation: 'Irene te pide la ficha de tu casa (real o imaginaria) para la web de la agencia. Escribe un texto corto para los clientes. (Irene asks you for a listing of your home, real or imaginary, for the agency website. Write a short text for clients.)', task: [
            'Describe tres cosas con nombre + adjetivo: tamaño, color, forma. (Three things described after the noun.)',
            'Valora una cosa con **gran** o **buen** antes del nombre. (Give your opinion with gran or buen.)',
            'Destaca algo con **único / única**. (Highlight something with único.)',
            'Di dónde está con «Está en…». (Say where it is.)',
          ], starters: ['Apartamento en la calle …', 'Es un apartamento …', 'Está en un buen barrio, cerca de …', 'El salón es …, con …', 'Es el único apartamento con …', '¡Una gran oportunidad!'],
            words: ['grande', 'gran', 'pequeño', 'luminoso', 'tranquilo', 'buen', 'nuevo', 'viejo', 'único', 'blanco', 'gris', 'azul', 'redondo', 'salón', 'cocina', 'balcón', 'barrio'],
            model: 'Apartamento en la calle Luna. Es [[un apartamento pequeño|blue]], pero muy bonito. Está en [[un buen barrio|orange]], cerca de la estación. Es [[un edificio viejo|blue]], pero la cocina [[es nueva|teal]] y el baño es blanco. El salón es luminoso, con [[una ventana grande|blue]] y [[un sofá gris|blue]]. Es [[el único apartamento|orange]] con balcón de la calle. ¡[[Una gran oportunidad|orange]]!',
            minWords: 35,
            checks: [
              { label: 'Gran o buen antes del nombre (an opinion)', pattern: '(?<!\\p{L})(?:gran|buen|buena)\\s+\\p{L}+', tip: 'Valora algo: «un buen barrio», «una gran oportunidad».' },
              { label: 'Un color (after the noun)', pattern: '(?<!\\p{L})(?:blanc[oa]s?|gris(?:es)?|azul(?:es)?|verdes?|roj[oa]s?|negr[oa]s?|amarill[oa]s?)(?!\\p{L})', tip: 'Describe una cosa con un color: «un sofá gris», «una cocina blanca».' },
              { label: 'Único o única (something special)', pattern: '(?<!\\p{L})[uú]nic[oa]s?(?!\\p{L})', tip: 'Destaca algo: «Es el único apartamento con balcón».' },
              { label: 'Está en… (where it is)', pattern: '(?<!\\p{L})est[aá]\\s+en(?!\\p{L})', tip: 'Di dónde está: «Está en un buen barrio».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:grande|bueno)\\s+(?:apartamento|piso|sal[oó]n|barrio|precio|balc[oó]n|edificio|dormitorio|ba[nñ]o|jard[ií]n|ascensor)(?!\\p{L})', why: 'Antes de un nombre singular, la forma corta: «un gran salón», «un buen barrio». Después: «un salón grande».' },
              { pattern: '(?<!\\p{L})(?:un|una|el|la)\\s+(?:blanc[oa]|gris|azul|verde|roj[oa]|negr[oa]|amarill[oa])\\s+(?:cocina|puerta|sof[aá]|sal[oó]n|pared|ventana|ba[nñ]o|edificio|mesa|alfombra|silla|cama)(?!\\p{L})', why: 'En una descripción normal, el color va después del nombre: «una cocina blanca».' },
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
            { tone: 'blue', label: 'DESPUÉS · DESCRIBE', formula: 'nombre + adjetivo', example: 'una cocina blanca · un señor chileno', caption: 'Lo normal: color, origen, forma, tamaño.', en: 'After the noun: the neutral order to describe.' },
            { tone: 'orange', label: 'ANTES · VALORA', formula: 'gran · buen · mal + nombre singular', example: 'una gran oportunidad · un buen barrio', caption: 'Tu opinión, con forma corta.', en: 'Before the noun: your opinion, with a short form.' },
            { tone: 'orange', label: 'OTRO SENTIDO', formula: 'viejo amigo · el único · nuevo + nombre', example: 'un viejo amigo ≠ un amigo viejo', caption: 'Cuatro parejas: grande, viejo, nuevo, único.', en: 'Same adjective, another meaning before the noun.' },
            { tone: 'teal', label: 'DESPUÉS DE ES', formula: 'es / está + adjetivo', example: 'El salón es grande.', caption: 'Siempre el sentido básico.', en: 'After “es”: always the basic meaning.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Si describes, el adjetivo va **después**: una cocina blanca. Antes, solo para **valorar** (gran, buen) o con un sentido especial: un viejo amigo, el único apartamento.', en: 'If you describe, the adjective goes after: una cocina blanca. Before the noun only to give an opinion (gran, buen) or with a special meaning: un viejo amigo, el único apartamento.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'En la foto: ___.', options: ['una negra mesa', 'una mesa negro', 'una mesa negra'], answer: 2, why: 'Color después del nombre, en femenino.' },
            { prompt: '¡Es ___ idea, Pablo!', options: ['una gran', 'una grande', 'un gran'], answer: 0, why: 'Antes de un nombre singular: gran. Idea es femenino: una.' },
            { prompt: 'Es ___ para vivir: tranquilo y seguro.', options: ['un lugar buen', 'un buen lugar', 'un bueno lugar'], answer: 1, why: 'Antes de un nombre masculino singular: buen.' },
            { prompt: 'Carmen y yo somos amigas desde 1999. Carmen es ___.', options: ['una vieja amiga', 'una amiga vieja'], answer: 0, why: 'Muchos años de amistad: viejo antes del nombre.' },
            { prompt: 'No hay otra casa con piscina en la calle: es ___ con piscina.', options: ['una única casa', 'la única casa', 'la casa única'], answer: 1, why: 'The only one: la única + nombre.' },
          ] },
        ] },
        { title: 'Otra ficha · Another listing', mascot: '/autoestudio/mascot/noting.webp', coach: 'La misma regla, otro lugar. Same rule, new place.', blocks: [
          { kind: 'lead', text: 'La agencia también vende un hotel pequeño en la playa. Escribe tres trozos de su ficha.', en: 'The agency is also selling a small hotel on the beach. Write three pieces of its listing.' },
          { kind: 'rewrite', title: 'La ficha del hotel · The hotel listing', items: [
            { prompt: 'a blue swimming pool (swimming pool = piscina)', instruction: 'Escribe en español: artículo + nombre + adjetivo.', accept: ['una piscina azul', 'Es una piscina azul', 'con una piscina azul'] },
            { prompt: 'a great view (view = vista)', instruction: 'Valora la vista: adjetivo antes del nombre.', accept: ['una gran vista', 'Es una gran vista', 'con una gran vista'] },
            { prompt: 'the only hotel on the beach (on the beach = en la playa)', instruction: 'Escribe en español con «único».', accept: ['el único hotel en la playa', 'Es el único hotel en la playa', 'el único hotel de la playa', 'Es el único hotel de la playa'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 008 · Demostrativos: este, ese, aquel', text: 'Ya puedes describir y valorar un apartamento. Ahora necesitas señalar: **este** apartamento, **ese** balcón, **aquel** edificio. En la clase 008 aprendes a decir qué cosa es, cerca o lejos de ti, con la misma concordancia de hoy.', en: 'You can now describe and rate an apartment. Next you need to point: this apartment, that balcony, that building over there. In class 008 you learn to say which thing you mean, near or far from you, with the same agreement as today.', href: '/el-observatorio-de-las-distancias', label: 'Ir a la clase 008' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre un amigo viejo y un viejo amigo?». Respuesta esperada: la edad / muchos años de amistad. Tarea: escribir la ficha de una casa de la familia o de un amigo.' },
        ] },
      ],
    },
  ],
};
