import type { LiveLesson } from '../types';

/**
 * Lesson 43 · A1 · Demostrativos.
 * Ana buys office material in a small shop: things in her hand, next to the
 * shop assistant and at the back of the shop.
 */
export const lesson: LiveLesson = {
  id: 43,
  level: 'A1',
  title: 'Demostrativos',
  subtitle: 'Señalar cosas cerca, a media distancia y lejos con este, ese y aquel, y preguntar por algo desconocido con «¿Qué es esto?».',
  legend: [
    { tone: 'blue', label: 'Este, esta · cerca de mí (aquí)' },
    { tone: 'teal', label: 'Ese, esa · cerca de ti o a media distancia (ahí)' },
    { tone: 'orange', label: 'Aquel, aquella · lejos de los dos (allí)' },
    { tone: 'violet', label: 'Esto, eso, aquello · sin sustantivo' },
  ],
  optionNotes: {
    Aquello: '«Aquello» va solo, sin sustantivo. Con un sustantivo, usa «aquel» o «aquella».',
    aquello: '«Aquello» va solo, sin sustantivo. Con un sustantivo, usa «aquel» o «aquella».',
    Esto: '«Esto» va solo, sin sustantivo. Con un sustantivo, usa «este» o «esta».',
    estos: '«Estos» es el plural de «este», con un sustantivo masculino. Para algo que no conoces, usa «esto».',
    aquellos: '«Aquellos» es masculino plural. Mira el sustantivo.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Aquí, ahí y allí', coach: '¿Está cerca o lejos?',
      steps: [
        { title: 'Tres distancias', blocks: [
          { kind: 'lead', text: 'Ana está en una tienda. Tiene una libreta **en la mano**. Una carpeta está **junto al vendedor**. Unas cajas están **al fondo**. Para señalar cada cosa, Ana usa una palabra diferente.', en: 'Spanish has three distances: near me, near you, far from both.' },
          { kind: 'guide', text: { teacher: 'Pon tres objetos a distancias diferentes: uno en tu mano, uno cerca del alumno y uno lejos. Señálalos mientras leen.', self: 'Busca tres objetos: uno en tu mano, uno a un metro y uno lejos, al otro lado de la habitación. Señálalos mientras lees.' } },
          { kind: 'table', title: 'Tres distancias, tres lugares', head: ['Distancia', 'Lugar', 'Ejemplo'], rows: [
            ['cerca de mí', 'aquí', '[[esta libreta|blue]] de aquí'],
            ['cerca de ti, media', 'ahí', '[[esa carpeta|teal]] de ahí'],
            ['lejos de los dos', 'allí', '[[aquellas cajas|orange]] de allí'],
          ], note: 'La distancia depende de la persona que habla. Para el vendedor, la carpeta es «**esta** carpeta».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Tienes un teléfono en la mano. Dices: «___ teléfono es nuevo».', options: ['Este', 'Ese', 'Aquel'], answer: 0, why: 'Está en tu mano: cerca de ti, este.' },
            { prompt: 'Ves unas montañas muy lejos. Dices: «¡Qué bonitas son ___ montañas!».', options: ['estas', 'esas', 'aquellas'], answer: 2, why: 'Están muy lejos: aquellas.' },
          ] },
        ] },
        { title: 'Este, ese, aquel: las formas', mascot: '/brand/mascot/studying.webp', coach: 'Como un adjetivo: concuerda con el sustantivo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ESTE · ESTA · ESTOS · ESTAS', question: '¿Está cerca de mí?', en: 'this / these', formula: ['este + sustantivo masculino', 'esta + sustantivo femenino'],
            meaning: 'Para algo **cerca de la persona que habla** (aquí). Cambia por género y número, como un adjetivo, pero va **antes** del sustantivo.',
            examples: [
              { es: '[[este teléfono|blue]] · [[esta taza|blue]]', en: 'this phone · this cup' },
              { es: '[[estos libros|blue]] · [[estas llaves|blue]]', en: 'these books · these keys' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'ESE · ESA · ESOS · ESAS', question: '¿Está cerca de ti o un poco lejos?', en: 'that / those (near you)', formula: ['ese + masculino · esa + femenino'],
            meaning: 'Para algo **cerca de la persona que escucha**, o a **media distancia** (ahí).',
            examples: [
              { es: '[[ese café|teal]] · [[esa mochila|teal]]', en: 'that coffee · that backpack' },
              { es: '[[esos zapatos|teal]] · [[esas sillas|teal]]', en: 'those shoes · those chairs' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'AQUEL · AQUELLA · AQUELLOS · AQUELLAS', question: '¿Está lejos de los dos?', en: 'that / those (over there)', formula: ['aquel + masculino · aquella + femenino'],
            meaning: 'Para algo **lejos de las dos personas** (allí).',
            examples: [
              { es: '[[aquel edificio|orange]] · [[aquella casa|orange]]', en: 'that building · that house (over there)' },
              { es: '[[aquellos árboles|orange]] · [[aquellas montañas|orange]]', en: 'those trees · those mountains' },
            ] },
          { kind: 'table', title: 'Las doce formas', head: ['', 'cerca (aquí)', 'media (ahí)', 'lejos (allí)'], rows: [
            ['masculino', '[[este|blue]]', '[[ese|teal]]', '[[aquel|orange]]'],
            ['femenino', '[[esta|blue]]', '[[esa|teal]]', '[[aquella|orange]]'],
            ['masc. plural', '[[estos|blue]]', '[[esos|teal]]', '[[aquellos|orange]]'],
            ['fem. plural', '[[estas|blue]]', '[[esas|teal]]', '[[aquellas|orange]]'],
          ], note: 'Atención: el masculino singular termina en **-e** (este, ese) o en **-l** (aquel), no en -o.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '___ mochila de ahí es tuya.', options: ['Ese', 'Esa', 'Esos'], answer: 1, why: '«Mochila» es femenino singular, a media distancia: esa.' },
            { prompt: 'Me gustan ___ zapatos que tengo en la mano.', options: ['estos', 'estas', 'esos'], answer: 0, why: 'En la mano: cerca. «Zapatos», masculino plural: estos.' },
            { prompt: '___ edificio de allí es un hotel.', options: ['Aquella', 'Aquel', 'Aquello'], answer: 1, why: 'Lejos y masculino singular: aquel.' },
          ] },
        ] },
        { title: 'Esto, eso, aquello', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para cosas sin nombre.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'ESTO · ESO · AQUELLO', question: '¿No sabes qué es?', en: 'this / that (thing, idea)', formula: ['¿Qué es esto?', 'esto / eso / aquello + verbo'],
            meaning: 'Estas formas van **solas**, sin sustantivo. Sirven para preguntar por un **objeto que no conoces** o para hablar de una **idea** o una situación completa.',
            examples: [
              { es: '¿Qué es [[esto|violet]]?', en: 'What is this?' },
              { es: '[[Eso|violet]] es un regalo para ti.', en: 'That is a present for you.' },
              { es: '[[Esto|violet]] es muy interesante.', en: 'This is very interesting.' },
              { es: '¿Qué es [[aquello|violet]] de allí?', en: 'What is that over there?' },
            ] },
          { kind: 'compare', title: 'Con o sin sustantivo', columns: [
            { tone: 'blue', label: 'CON SUSTANTIVO', sentence: '[[Este libro|blue]] es interesante.', idea: 'Sabes qué es: un libro.', en: 'this book' },
            { tone: 'violet', label: 'SIN SUSTANTIVO', sentence: '¿Qué es [[esto|violet]]?', idea: 'No sabes qué es, o hablas de una idea.', en: 'this (thing)' },
          ] },
          { kind: 'tip', icon: '!', title: '«Esto» no tiene plural', text: 'Nunca digas «esto libro». Con un sustantivo, usa **este**: «este libro». Y «estos» no es el plural de «esto»: es el plural de «este».', en: 'esto never goes with a noun' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué es ___? No conozco este objeto.', options: ['esto', 'este', 'esta'], answer: 0, why: 'No sabes qué es: forma neutra, esto.' },
            { prompt: 'Tu profesor tiene algo raro en la mano. Preguntas: «¿Qué es ___?».', options: ['esto', 'eso', 'aquello'], answer: 1, why: 'Está cerca de la otra persona: eso.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Dos preguntas: ¿dónde está? ¿Sé qué es?', blocks: [
          { kind: 'decide', title: 'Piensa en una cosa que ves', steps: [
            { q: '¿Sabes qué es (tienes un sustantivo)?', yes: 'next', no: 'Usa **esto, eso** o **aquello**: «¿Qué es [[eso|violet]]?».' },
            { q: '¿Está cerca de ti (aquí)?', yes: 'Usa **este, esta, estos, estas**: «[[este café|blue]]».', no: 'next' },
            { q: '¿Está cerca de la otra persona o a media distancia (ahí)?', yes: 'Usa **ese, esa, esos, esas**: «[[esa silla|teal]]».', no: 'Está lejos de los dos: **aquel, aquella, aquellos, aquellas**: «[[aquel edificio|orange]]».' },
          ] },
          { kind: 'tip', icon: '💡', title: 'En la vida real', text: 'En la conversación diaria, **este** y **ese** son los más frecuentes. **Aquel** es para cosas claramente lejanas.', en: 'este and ese are the most common.' },
          { kind: 'tip', icon: '📚', title: 'Para saber más', text: 'Los demostrativos también hablan del tiempo: «**esta** semana», «**este** año» (ahora) y «en **aquella** época» (hace mucho). No es necesario aprenderlo ahora.', en: 'this week · this year · in those days' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno encuentra el error antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Quiero esto libro.', right: 'Quiero este libro.', why: 'Con un sustantivo, usa «este». «Esto» va solo.' },
            { wrong: 'Esto silla es cómoda.', right: 'Esta silla es cómoda.', why: '«Silla» es femenino: esta.' },
            { wrong: '¿Qué es este?', right: '¿Qué es esto?', why: 'Para algo que no conoces, usa la forma neutra: esto.' },
            { wrong: 'Aquel montañas son altas.', right: 'Aquellas montañas son altas.', why: '«Montañas» es femenino plural: aquellas.' },
            { wrong: 'Eso zapatos son caros.', right: 'Esos zapatos son caros.', why: '«Zapatos» es masculino plural: esos.' },
          ] },
          { kind: 'teacher', text: 'Pon un objeto en tres lugares distintos y pide al alumno que lo señale cada vez con la forma correcta.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los demostrativos en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'En la tienda de material', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Usen objetos reales para señalar. Después, el alumno toca cada expresión y explica la distancia.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y piensa: ¿dónde está la cosa?' } },
          { kind: 'explore', title: 'Dos carpetas pequeñas', setting: 'Ana compra material para su oficina. Tiene una libreta en la mano. El vendedor está detrás de la mesa.', lines: [
            { who: 'Ana', text: 'Buenos días. ¿Cuánto cuesta [[esta libreta|blue]]?', en: 'Good morning. How much is this notebook?' },
            { who: 'Vendedor', text: 'Tres dólares. Es muy buena.' },
            { who: 'Ana', text: 'Perfecto. También necesito dos carpetas pequeñas. ¿Y [[esa carpeta|teal]]?', en: 'I also need two small folders. And that folder?' },
            { who: 'Vendedor', text: '¿[[Esta|blue]]? Es pequeña. Tengo azules y rojas.' },
            { who: 'Ana', text: 'Dos azules, por favor. ¿Y [[aquellas cajas|orange]] del fondo?' },
            { who: 'Vendedor', text: 'Son para guardar papeles. Son grandes.' },
            { who: 'Ana', text: 'Mmm, no, gracias. Oiga, ¿qué es [[esto|violet]]?' },
            { who: 'Vendedor', text: 'Es un soporte para el teléfono. Es nuevo.' },
            { who: 'Ana', text: '¡Qué interesante! Y [[ese bolígrafo|teal]] negro, ¿cuánto cuesta?' },
            { who: 'Vendedor', text: 'Un dólar. [[Eso|violet]] es todo, ¿verdad?' },
          ], notes: {
            'esta libreta': 'Ana tiene la libreta **en la mano**: cerca de ella. «Libreta», femenino: **esta**.',
            'esa carpeta': 'La carpeta está **junto al vendedor**, cerca de la otra persona: **esa**.',
            Esta: 'Para el vendedor, la carpeta está cerca de **él**: por eso dice «esta». La distancia depende de quién habla.',
            'aquellas cajas': 'Las cajas están **al fondo**, lejos de los dos. Femenino plural: **aquellas**.',
            esto: 'Ana no sabe qué es el objeto: no tiene un sustantivo. Forma neutra: **esto**.',
            'ese bolígrafo': 'El bolígrafo está cerca del vendedor. Masculino singular: **ese**.',
            Eso: '«Eso» resume toda la compra, una situación: forma neutra, sin sustantivo.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Dónde están las cajas?', options: ['En la mano de Ana.', 'Al fondo de la tienda.', 'Junto al vendedor.'], answer: 1, why: '«Aquellas cajas del fondo».' },
            { prompt: '¿Por qué Ana dice «¿Qué es esto?»?', options: ['Porque no conoce el objeto.', 'Porque el objeto está lejos.', 'Porque quiere dos.'], answer: 0, why: 'No sabe el nombre: usa la forma neutra.' },
          ] },
        ] },
        { title: 'Desde la ventana', blocks: [
          { kind: 'explore', title: 'La vista desde la oficina', setting: 'Ana enseña su oficina nueva a su amigo Pablo. Están junto a la ventana.', lines: [
            { who: 'Pablo', text: '¡Qué vista! ¿Qué es [[aquel edificio|orange]] alto?' },
            { who: 'Ana', text: 'Es el museo de arte. Y [[aquellas montañas|orange]] son los Andes.' },
            { who: 'Pablo', text: '¡Increíble! ¿Y [[esa planta|teal]]? Es muy bonita.' },
            { who: 'Ana', text: 'Es un regalo de mi madre.' },
            { who: 'Pablo', text: '¿Y [[estos papeles|blue]] en mi silla?' },
            { who: 'Ana', text: 'Ay, perdón. Son mis documentos. [[Esa mesa|teal]] es para ti.' },
            { who: 'Pablo', text: 'Gracias. Oye, ¿qué es [[aquello|violet]] de allí, en la calle?' },
            { who: 'Ana', text: 'Es el mercado de los sábados. ¡[[Eso|violet]] es lo mejor del barrio!' },
          ], notes: {
            'aquel edificio': 'El edificio está **lejos** de los dos, en la ciudad: **aquel**.',
            'aquellas montañas': 'Las montañas están muy lejos. Femenino plural: **aquellas**.',
            'esa planta': 'La planta está cerca de Ana, no de Pablo: **esa**.',
            'estos papeles': 'Los papeles están en la silla de Pablo, **muy cerca de él**: **estos**.',
            'Esa mesa': 'Ana señala una mesa a cierta distancia, cerca de Pablo: **esa**.',
            aquello: 'Pablo no sabe qué es y está lejos: **aquello**.',
            Eso: '«Eso» resume una idea: el mercado y todo lo que significa.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué ves desde tu ventana?». El alumno describe tres cosas con este, ese y aquel.' },
        ] },
        { title: '¿Cerca, media o lejos?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones de las dos conversaciones', categories: [
            { id: 'cerca', label: 'Cerca de quien habla', tone: 'blue' },
            { id: 'media', label: 'Cerca de quien escucha / media', tone: 'teal' },
            { id: 'lejos', label: 'Lejos de los dos', tone: 'orange' },
          ], items: [
            { text: 'esta libreta', answer: 'cerca', why: 'En la mano de Ana.' },
            { text: 'esa carpeta', answer: 'media', why: 'Junto al vendedor.' },
            { text: 'aquellas cajas', answer: 'lejos', why: 'Al fondo de la tienda.' },
            { text: 'aquel edificio', answer: 'lejos', why: 'Lejos, en la ciudad.' },
            { text: 'estos papeles', answer: 'cerca', why: 'En la silla de Pablo, que habla.' },
            { text: 'ese bolígrafo', answer: 'media', why: 'Cerca del vendedor.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Mira dónde está y cómo es el sustantivo.',
      steps: [
        { title: 'Elige según la distancia', blocks: [
          { kind: 'choice', items: [
            { context: 'Lo tienes en la mano.', prompt: '___ teléfono es muy rápido.', options: ['Este', 'Ese', 'Aquello'], answer: 0, why: 'Cerca de ti, masculino singular: este.' },
            { context: 'Muy lejos, en el horizonte.', prompt: '___ montañas son altísimas.', options: ['Estas', 'Esos', 'Aquellas'], answer: 2, why: 'Lejos, femenino plural: aquellas.' },
            { context: 'Junto a tu amigo.', prompt: '¿Me pasas ___ llaves?', options: ['esas', 'estas', 'aquellos'], answer: 0, why: 'Cerca de la otra persona, femenino plural: esas.' },
            { context: 'En tu plato.', prompt: '___ sopa está muy rica.', options: ['Esta', 'Este', 'Esto'], answer: 0, why: 'Cerca de ti, femenino: esta.' },
            { context: 'Al otro lado de la calle.', prompt: '¿Ves ___ restaurante? Es muy bueno.', options: ['este', 'aquel', 'aquella'], answer: 1, why: 'Lejos, masculino singular: aquel.' },
            { context: 'Un objeto raro en tu mesa.', prompt: '¿Qué es ___?', options: ['este', 'esto', 'estos'], answer: 1, why: 'No sabes qué es: esto.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Quiero esta camisa.» ¿Dónde está la camisa?', options: ['Cerca de quien habla.', 'Lejos de los dos.'], answer: 0, why: '«Esta»: cerca de quien habla.' },
            { prompt: '¿Qué frase pregunta por algo **desconocido**?', options: ['¿Qué es eso?', '¿Cuánto cuesta ese libro?'], answer: 0, why: '«Eso», sin sustantivo: no sabes qué es.' },
            { prompt: '«¿Te gusta esa chaqueta?» ¿Dónde está la chaqueta probablemente?', options: ['En mi mano.', 'Cerca de la otra persona.', 'Muy lejos.'], answer: 1, why: '«Esa»: cerca de quien escucha o a media distancia.' },
            { prompt: '¿Qué frase habla de algo **muy lejos**?', options: ['Mira ese pájaro.', 'Mira aquel pájaro.'], answer: 1, why: '«Aquel»: lejos de los dos.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'En el mercado', lines: [
            { who: 'Ana', text: 'Buenos días. ¿Cuánto cuestan ___ manzanas de aquí?', options: ['estas', 'esos', 'aquellas'], answer: 0, why: 'Aquí, cerca de Ana, femenino plural: estas.' },
            { who: 'Vendedora', text: 'Dos dólares el kilo.' },
            { who: 'Ana', text: '¿Y ___ tomates de ahí, junto a usted?', options: ['estos', 'esos', 'esas'], answer: 1, why: 'Cerca de la vendedora, masculino plural: esos.' },
            { who: 'Vendedora', text: 'Un dólar. Son muy buenos.' },
            { who: 'Ana', text: 'Perfecto. ¿Y qué es ___? Nunca lo vi.', options: ['ese', 'eso', 'esa'], answer: 1, why: 'No sabe qué es: eso, sin sustantivo.' },
            { who: 'Vendedora', text: 'Es una fruta tropical. Se llama pitahaya.' },
            { who: 'Ana', text: '¡Qué bonita! ¿Y ___ flores del fondo?', options: ['aquellos', 'aquellas', 'aquella'], answer: 1, why: 'Lejos, femenino plural: aquellas.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Me gusta esto libro.', ok: false, options: ['Me gusta este libro.', 'Me gusta esta libro.', 'Me gusta estos libro.'], answer: 0, why: 'Con sustantivo masculino: este.' },
            { sentence: 'Aquellas casas son muy antiguas.', ok: true, why: 'Correcta: femenino plural, lejos.' },
            { sentence: '¿Qué es esta?', ok: false, options: ['¿Qué es esto?', '¿Qué es este?', '¿Qué son estas?'], answer: 0, why: 'Para algo desconocido: esto.' },
            { sentence: 'Ese mochila es de Pablo.', ok: false, options: ['Esa mochila es de Pablo.', 'Eso mochila es de Pablo.', 'Esos mochila es de Pablo.'], answer: 0, why: '«Mochila» es femenino: esa.' },
            { sentence: 'Estos zapatos son cómodos.', ok: true, why: 'Correcta: masculino plural, cerca.' },
            { sentence: 'Aquel montaña es muy alta.', ok: false, options: ['Aquella montaña es muy alta.', 'Aquello montaña es muy alta.', 'Aquela montaña es muy alta.'], answer: 0, why: '«Montaña» es femenino: aquella.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Quiero', 'esta', 'libreta', 'de', 'aquí'], accept: ['Quiero esta libreta de aquí'], en: 'I want this notebook here.' },
            { tiles: ['Aquellas', 'cajas', 'son', 'grandes'], accept: ['Aquellas cajas son grandes'], en: 'Those boxes over there are big.' },
            { tiles: ['¿Qué', 'es', 'eso?'], accept: ['¿Qué es eso?'], en: 'What is that?' },
            { tiles: ['Ese', 'café', 'es', 'para', 'ti'], accept: ['Ese café es para ti'], en: 'That coffee is for you.' },
          ] },
          { kind: 'rewrite', title: 'Cambia a plural', items: [
            { prompt: 'Este libro es interesante.', instruction: 'Escribe «Estos libros…».', accept: ['Estos libros son interesantes'] },
            { prompt: 'Esa silla es cómoda.', instruction: 'Escribe «Esas sillas…».', accept: ['Esas sillas son cómodas'] },
            { prompt: 'Aquel edificio es nuevo.', instruction: 'Escribe «Aquellos edificios…».', accept: ['Aquellos edificios son nuevos'] },
            { prompt: 'Esta taza es mía.', instruction: 'Escribe «Estas tazas…».', accept: ['Estas tazas son mías'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/kneeling.webp',
      title: 'Una foto de la tienda', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una foto de la tienda', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno dibuja un plano simple: la mesa, las sillas cerca y las sillas del fondo.', self: 'Escucha una vez para la idea general. Después escucha otra vez y dibuja un plano simple de la tienda. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Ana, desde la tienda', channel: 'MENSAJE DE VOZ · CON UNA FOTO', src: '/audio/grammar-classroom/43.mp3',
            before: 'Ana está en una tienda de muebles. Envía una foto a un compañero y un mensaje de voz. ¿Qué crees que quiere comprar?',
            gist: { prompt: '¿Qué quiere decidir Ana?', options: ['Qué sillas comprar para la oficina.', 'Qué regalo comprar.', 'A qué tienda ir.'], answer: 0, why: 'Compara sillas y pregunta: «¿Qué prefieres para la oficina?».' },
            details: [
              { prompt: '¿Cómo es la mesa que está cerca de Ana?', options: ['Pequeña.', 'Grande.', 'Barata.'], answer: 0, why: '«Esta mesa de aquí es pequeña».' },
              { prompt: '¿Cómo son las sillas que están junto al compañero en la foto?', options: ['Baratas.', 'Cómodas.', 'Nuevas.'], answer: 1, why: '«Esas sillas junto a ti son cómodas».' },
              { prompt: '¿Qué sillas son más baratas?', options: ['Las sillas del fondo.', 'Las sillas junto al compañero.', 'Las sillas de la entrada.'], answer: 0, why: '«…aquellas sillas del fondo son más baratas».' },
              { prompt: '¿Dónde está el objeto nuevo?', options: ['En la entrada.', 'En la mesa.', 'Al fondo.'], answer: 0, why: '«También hay algo nuevo en la entrada».' },
              { prompt: '¿Por qué Ana dice «eso» y no un sustantivo?', options: ['Porque no conoce su nombre.', 'Porque está en su mano.'], answer: 0, why: '«No conozco su nombre. ¿Sabes qué es eso?».' },
            ],
            transcript: 'Hola. Te envío una foto de la tienda. [[Esta mesa|blue]] de aquí es pequeña. [[Esas sillas|teal]] junto a ti son cómodas, pero [[aquellas sillas|orange]] del fondo son más baratas. ¿Qué prefieres para la oficina? También hay algo nuevo en la entrada. No conozco su nombre. ¿Sabes qué es [[eso|violet]]?',
            reply: { teacher: 'El alumno responde en voz alta: elige unas sillas con la forma correcta y explica por qué.', self: 'Responde al mensaje: ¿qué sillas prefieres, esas o aquellas? ¿Por qué?' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo que ves a tu alrededor', coach: 'Señala, pregunta y elige.',
      steps: [
        { title: 'Lo que ves a tu alrededor', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Usen objetos reales y la cámara si la clase es en línea. Cambia la posición de los objetos para provocar formas distintas.', self: 'Responde cada pregunta en voz alta y señala las cosas de verdad. Si estás en otro lugar, usa una foto de tu casa.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué tienes en la mano o en tu mesa ahora?', followUps: ['¿Es nuevo?', '¿Es tuyo?', '¿Para qué sirve?'], phrases: ['[[Este|blue]] teléfono es…', '[[Esta|blue]] taza es de…', '[[Estos|blue]] papeles son…'], hint: 'Si está cerca de ti, usa «este, esta, estos, estas».', example: 'Esta taza es de mi hermana. Este teléfono es nuevo y estos papeles son para mi clase.', next: 'Ahora mira un poco más lejos.' },
            { q: '¿Qué ves a un metro o dos de ti?', followUps: ['¿Te gusta?', '¿De qué color es?', '¿Lo usas mucho?'], phrases: ['[[Esa|teal]] lámpara es…', '[[Ese|teal]] sillón es…', '[[Esas|teal]] plantas son…'], hint: 'A media distancia, usa «ese, esa, esos, esas».', example: 'Esa lámpara es vieja, pero me gusta. Esas plantas son de mi madre.', next: 'Ahora, por la ventana.', teacher: 'Si la clase es en línea, señala algo de la habitación del alumno: «¿Y esa foto de ahí?».' },
            { q: '¿Qué ves por tu ventana?', followUps: ['¿Hay edificios?', '¿Hay montañas o árboles?', '¿Qué te gusta de la vista?'], phrases: ['[[Aquel|orange]] edificio es…', '[[Aquellos|orange]] árboles…', '[[Aquella|orange]] casa…'], hint: 'Lo que está lejos de ti, en la calle o en la ciudad: «aquel, aquella…».', example: 'Desde mi ventana veo aquel edificio alto y aquellos árboles del parque. Aquella casa azul es muy bonita.', next: 'Ahora, imagina una tienda.' },
            { q: 'Estás en una tienda con un amigo. ¿Qué compras?', followUps: ['¿Esta o esa?', '¿Cuánto cuesta?', '¿Qué no compras?'], phrases: ['Prefiero [[esta|blue]]…', 'No me gusta [[ese|teal]]…', '¿Cuánto cuesta [[aquel|orange]]…?'], hint: 'Compara dos cosas: «Prefiero esta camisa, no esa».', example: 'Prefiero esta camisa azul. No me gusta esa chaqueta. ¿Cuánto cuesta aquel sombrero?', next: 'Ahora, algo misterioso.' },
            { q: 'Hay un objeto raro cerca de ti. ¿Cómo preguntas qué es?', followUps: ['¿Y si está cerca de otra persona?', '¿Y si está lejos?', '¿Qué objeto raro tienes en casa?'], phrases: ['¿Qué es [[esto|violet]]?', '¿Qué es [[eso|violet]]?', '¿Qué es [[aquello|violet]]?'], hint: 'Sin sustantivo, usa «esto, eso, aquello».', example: '¿Qué es esto? Ah, es un abridor de botellas. En mi casa tengo un objeto raro: es de mi abuela y nadie sabe qué es.', next: 'Para terminar, tu lugar favorito.' },
            { q: 'Muestra una foto de un lugar que te gusta. ¿Qué hay en la foto?', followUps: ['¿Dónde está ese lugar?', '¿Quién es esa persona?', '¿Qué es aquello del fondo?'], phrases: ['[[Esta|blue]] foto es de…', '[[Esa|teal]] persona es…', '[[Aquellas|orange]] montañas son…'], hint: 'Cuando señalas una foto, el lugar dentro de la foto puede estar cerca o lejos.', example: 'Esta foto es de mi viaje a Chile. Esa persona es mi amiga Carla y aquellas montañas son los Andes.', teacher: 'La distancia es flexible en las fotos: acepta «ese» o «aquel» si el alumno lo justifica.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno señala objetos de la sala del profesor y pregunta qué son.', self: 'Esta semana, en una tienda o en casa, di en voz baja tres frases: una con «este», una con «ese» y una con «aquel».' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Elige el material', coach: 'Aclara dónde está cada cosa.',
      steps: [
        { title: 'Elige el material', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos cada demostrativo: ¿distancia y concordancia correctas?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada demostrativo: ¿la distancia es correcta? ¿Concuerda con el sustantivo?' } },
          { kind: 'write', title: 'Un mensaje con una foto', situation: 'Estás en una tienda. Un compañero tiene una foto de la tienda en su teléfono. Escríbele para elegir el material para la oficina.', task: [
            'Elige algo **cerca de ti** (este, esta…).',
            'Elige algo **cerca de tu compañero** (ese, esa…).',
            'Habla de algo **lejos** (aquel, aquella…).',
            'Pregunta por un **objeto desconocido** con «esto» o «eso».',
          ], starters: ['Quiero esta… de aquí', 'Y esos… junto a ti', 'Aquellas… del fondo son…', '¿Qué es eso…?', 'Parece un…'],
            words: ['libreta', 'carpeta', 'caja', 'silla', 'mesa', 'al fondo', 'junto a ti', 'de aquí', 'de ahí', 'de allí'],
            model: 'Quiero [[esta libreta|blue]] de aquí y [[esas dos carpetas|teal]] junto a ti. [[Aquellas cajas|orange]] del fondo son grandes para mi mesa. ¿Qué es [[eso|violet]] junto a la puerta? Parece un soporte para el teléfono.',
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
            { tone: 'blue', label: 'ESTE · ESTA', formula: 'cerca de mí · aquí', example: 'esta libreta de aquí', caption: 'Estos, estas en plural.', en: 'this' },
            { tone: 'teal', label: 'ESE · ESA', formula: 'cerca de ti, media · ahí', example: 'esa carpeta de ahí', caption: 'Esos, esas en plural.', en: 'that' },
            { tone: 'orange', label: 'AQUEL · AQUELLA', formula: 'lejos de los dos · allí', example: 'aquellas cajas de allí', caption: 'Aquellos, aquellas en plural.', en: 'that over there' },
            { tone: 'violet', label: 'ESTO · ESO · AQUELLO', formula: 'sin sustantivo', example: '¿Qué es esto?', caption: 'Para cosas desconocidas o ideas.', en: 'this / that thing' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Dos preguntas', text: '¿**Dónde** está: aquí, ahí o allí? ¿**Sabes qué es**? Si no, usa esto, eso o aquello.', en: 'Where is it? Do you know what it is?' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '___ gafas que tengo aquí son nuevas.', options: ['Esas', 'Estas', 'Estos'], answer: 1, why: 'Cerca, femenino plural: estas.' },
            { prompt: '¿Ves ___ castillo en la montaña?', options: ['este', 'aquel', 'aquella'], answer: 1, why: 'Lejos, masculino singular: aquel.' },
            { prompt: 'Tu amiga tiene algo raro en la mano. «¿Qué es ___?»', options: ['esto', 'eso', 'esa'], answer: 1, why: 'Cerca de la otra persona, sin sustantivo: eso.' },
            { prompt: '___ silla de ahí está libre.', options: ['Ese', 'Esa', 'Eso'], answer: 1, why: 'Media distancia, femenino: esa.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cómo preguntas por un objeto desconocido cerca de ti?». Respuesta: «¿Qué es esto?».' },
        ] },
      ],
    },
  ],
};
