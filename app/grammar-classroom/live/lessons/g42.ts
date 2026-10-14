import type { LiveLesson } from '../types';

/**
 * Lesson 42 · A1 · Artículos.
 * Sergio and Julia, two colleagues, meet in a new café near the office:
 * first mention with un/una, then back to the same thing with el/la.
 */
export const lesson: LiveLesson = {
  id: 42,
  level: 'A1',
  title: 'Artículos',
  subtitle: 'Presentar algo nuevo con un o una y volver a mencionarlo con el o la.',
  legend: [
    { tone: 'blue', label: 'Un, una, unos, unas · presenta algo nuevo' },
    { tone: 'teal', label: 'El, la, los, las · algo que ya sabemos cuál es' },
  ],
  optionNotes: {
    del: '«Del» es «de + el»: aquí no hay «de».',
    al: '«Al» es «a + el»: aquí no hay «a».',
    '—': 'Aquí el sustantivo necesita un artículo.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un café, el café', coach: 'Primero presentas, después señalas.',
      steps: [
        { title: 'Ocho formas, un sistema', blocks: [
          { kind: 'lead', text: 'Los artículos van **antes** del sustantivo: **el** museo, **una** entrada. Hay ocho formas. La forma depende del sustantivo: masculino o femenino, uno o varios.', en: 'Articles go before the noun and agree with it.' },
          { kind: 'guide', text: { teacher: 'Lean la tabla juntos. Señala un objeto de la sala y pide las dos formas: «una mesa, la mesa».', self: 'Lee la tabla en voz alta. Después mira un objeto cerca de ti y di las dos formas: «una mesa, la mesa».' } },
          { kind: 'table', title: 'Los artículos', head: ['', 'Algo nuevo', 'Algo conocido'], rows: [
            ['masculino, uno', '[[un|blue]] museo', '[[el|teal]] museo'],
            ['femenino, uno', '[[una|blue]] entrada', '[[la|teal]] entrada'],
            ['masculino, varios', '[[unos|blue]] cuadros', '[[los|teal]] cuadros'],
            ['femenino, varios', '[[unas|blue]] esculturas', '[[las|teal]] esculturas'],
          ], note: 'Recuerda las palabras rebeldes: [[el|teal]] mapa, [[el|teal]] día, [[la|teal]] mano, [[la|teal]] foto.' },
          { kind: 'tip', icon: '🧠', title: 'Aprende juntos', text: 'Aprende cada sustantivo con su artículo: «**la** noche», «**el** viaje», «**la** ciudad». Así sabes siempre qué forma usar.', en: 'Learn every noun with its article.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '___ cuadros del museo son bonitos.', options: ['Los', 'Las', 'El'], answer: 0, why: '«Cuadros»: masculino plural, los.' },
            { prompt: 'Necesito ___ entradas para el museo.', options: ['unos', 'unas', 'una'], answer: 1, why: '«Entradas»: femenino plural, unas.' },
          ] },
        ] },
        { title: 'Un, una: presentar algo nuevo', mascot: '/brand/mascot/studying.webp', coach: 'La persona que escucha todavía no lo conoce.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'UN · UNA · UNOS · UNAS', question: '¿Es nuevo en la conversación?', en: 'a / an / some', formula: ['primera mención', 'hay + un / una'],
            meaning: 'Usa **un, una, unos, unas** cuando presentas algo **nuevo**: la otra persona todavía no sabe cuál es. También para hablar de **uno cualquiera** de un grupo.',
            examples: [
              { es: 'Hay [[un café|blue]] cerca.', en: 'There is a café nearby.' },
              { es: 'Necesito [[una farmacia|blue]].', en: 'I need a pharmacy (any pharmacy).' },
              { es: 'Tengo [[una pregunta|blue]].', en: 'I have a question.' },
              { es: 'Veo [[unos amigos|blue]] en la terraza.', en: 'I see some friends on the terrace.' },
            ],
            note: '«Un» no siempre significa el número 1. Muchas veces solo **presenta** algo nuevo.' },
          { kind: 'tip', icon: '!', title: 'Con «hay», usa un / una', text: '«Hay» presenta cosas nuevas. Por eso dices «**Hay una** farmacia cerca», no «Hay la farmacia».', en: 'hay + un/una, never hay + el/la' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Hay ___ supermercado aquí cerca.', options: ['el', 'un', 'del'], answer: 1, why: 'Presentas un lugar nuevo, con «hay»: un supermercado.' },
            { prompt: 'Perdón, tengo ___ pregunta.', options: ['la', 'una', 'unas'], answer: 1, why: 'La pregunta es nueva: la otra persona no la conoce.' },
          ] },
        ] },
        { title: 'El, la: señalar algo conocido', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Sabemos cuál es? Entonces, el o la.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'EL · LA · LOS · LAS', question: '¿Sabemos cuál es?', en: 'the', formula: ['segunda mención', 'algo único', 'algo que los dos vemos'],
            meaning: 'Usa **el, la, los, las** cuando las dos personas **saben cuál es**: porque ya lo mencionaste, porque es **único** o porque está en la situación.',
            examples: [
              { es: 'Veo [[un café|blue]]. [[El café|teal]] está lleno.', en: 'I see a café. The café is full.' },
              { es: '¿Puedes cerrar [[la puerta|teal]]?', en: 'Can you close the door? (the door of this room)' },
              { es: '[[El sol|teal]] está muy fuerte hoy.', en: 'The sun is very strong today.' },
              { es: '¿Dónde está [[el baño|teal]]?', en: 'Where is the bathroom? (in this place)' },
            ],
            note: 'La pregunta clave no es «¿existe?», sino «**¿sabemos cuál es?**».' },
          { kind: 'compare', title: 'Primera y segunda mención', columns: [
            { tone: 'blue', label: 'PRESENTA', sentence: 'Cerca de mi casa hay [[una cafetería|blue]].', idea: 'La cafetería es nueva en la conversación.', en: 'a café' },
            { tone: 'teal', label: 'SEÑALA', sentence: '[[La cafetería|teal]] tiene una terraza.', idea: 'Ya sabemos qué cafetería es: la de antes.', en: 'the café' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Veo una casa. ___ casa es azul.', options: ['Una', 'La', 'Un'], answer: 1, why: 'Es la segunda mención: ya sabemos qué casa es.' },
            { prompt: 'Los dos ven una ventana abierta. ¿Puedes cerrar ___ ventana?', options: ['la', 'una', 'unas'], answer: 0, why: 'Los dos saben qué ventana es: la que está abierta.' },
            { prompt: '___ luna está muy bonita esta noche.', options: ['Una', 'La'], answer: 1, why: 'La luna es única: la.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Una pregunta: ¿sabemos cuál es?', blocks: [
          { kind: 'decide', title: 'Piensa en una cosa y responde', steps: [
            { q: '¿Ya hablamos de esta cosa?', yes: 'Usa **el, la, los, las**: «Hay una mesa libre. [[La mesa|teal]] está junto a la puerta».', no: 'next' },
            { q: '¿Es única o los dos la ven ahora (el sol, la puerta de esta sala)?', yes: 'Usa **el, la, los, las**: «¿Puedes abrir [[la ventana|teal]]?».', no: 'Usa **un, una, unos, unas**: «Hay [[una tienda|blue]] nueva en mi calle».' },
          ] },
          { kind: 'tip', icon: '⭐', title: 'Con un adjetivo que describe', text: 'Para decir **cómo es** alguien o algo, usa un / una: «Es [[una profesora|blue]] muy creativa», «Es [[un lugar|blue]] tranquilo».', en: 'She is a very creative teacher.' },
          { kind: 'tip', icon: '📚', title: 'Para saber más', text: 'A veces no hay artículo: «Soy profesora», «Tengo hermanos», «Bebo café». Y «de + el» = **del**, «a + el» = **al**: «la puerta **del** museo», «Voy **al** café». No es necesario aprenderlo ahora.', en: 'del = de + el · al = a + el' },
        ] },
        { title: 'Taller: la galería', mascot: '/brand/mascot/walking.webp', coach: 'Recorre la galería y elige el artículo.', blocks: [
          { kind: 'guide', text: { teacher: 'Recorran la galería juntos. En cada obra, pide al alumno que explique por qué elige un artículo determinado o indeterminado.', self: 'Recorre la galería. En cada obra, elige el artículo y explica por qué en voz alta.' } },
          { kind: 'visual', visual: 'article-gallery' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Hay la farmacia en mi calle.', right: 'Hay una farmacia en mi calle.', why: '«Hay» presenta algo nuevo: un / una.' },
            { wrong: 'Veo un perro. Un perro es grande.', right: 'Veo un perro. El perro es grande.', why: 'Segunda mención: ya sabemos qué perro es.' },
            { wrong: 'Hay una mesa libre. Una mesa está en la terraza.', right: 'Hay una mesa libre. La mesa está en la terraza.', why: 'Es la misma mesa: el / la.' },
            { wrong: 'Las mapas están en la mesa.', right: 'Los mapas están en la mesa.', why: '«Mapa» es masculino: los mapas.' },
            { wrong: 'Una sol está muy fuerte.', right: 'El sol está muy fuerte.', why: 'El sol es único, y es masculino.' },
          ] },
          { kind: 'teacher', text: 'Cuenta una mini historia («Tengo un gato…») y para después de cada frase. El alumno continúa con el o la.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los artículos en situaciones reales', coach: 'Toca los artículos marcados.',
      steps: [
        { title: 'Una cafetería nueva', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y dice si presenta algo nuevo o señala algo conocido.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿presenta algo nuevo o señala algo conocido?' } },
          { kind: 'explore', title: '¿Dónde nos vemos?', setting: 'Sergio y Julia trabajan juntos. Buscan un lugar para una reunión.', lines: [
            { who: 'Julia', text: 'Sergio, ¿dónde hacemos la reunión?', en: 'Sergio, where do we have the meeting?' },
            { who: 'Sergio', text: 'Cerca de la oficina hay [[una cafetería|blue]] nueva.', en: 'Near the office there is a new café.' },
            { who: 'Julia', text: '¿Y cómo es [[la cafetería|teal]]?' },
            { who: 'Sergio', text: 'Es pequeña, pero tiene [[una terraza|blue]] muy bonita.' },
            { who: 'Julia', text: '¡Me encanta! ¿Hay mesas en [[la terraza|teal]]?' },
            { who: 'Sergio', text: 'Sí, hay [[unas mesas|blue]] y [[unas plantas|blue]].' },
            { who: 'Julia', text: 'Perfecto. ¿Llevo [[los documentos|teal]]?' },
            { who: 'Sergio', text: 'Sí, por favor. Y [[la computadora|teal]] también.' },
            { who: 'Julia', text: 'Muy bien. Entonces, hasta luego en [[la cafetería|teal]].' },
          ], notes: {
            'una cafetería': 'Primera mención: Julia no conoce este lugar. **Una** presenta algo nuevo.',
            'la cafetería': 'Ya hablaron de esta cafetería: es la misma. **La** señala algo conocido.',
            'una terraza': 'La terraza es nueva en la conversación: **una**.',
            'la terraza': 'Segunda mención: la terraza de la cafetería. Los dos saben cuál es.',
            'unas mesas': 'Varias mesas, nuevas en la conversación: **unas**.',
            'unas plantas': 'Varias plantas, nuevas en la conversación: **unas**.',
            'los documentos': 'Los documentos de la reunión: los dos saben cuáles son.',
            'la computadora': 'La computadora de Julia, la del trabajo: los dos saben cuál es.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Dónde está la cafetería?', options: ['Cerca de la oficina.', 'Cerca de la casa de Julia.', 'En el museo.'], answer: 0, why: '«Cerca de la oficina hay una cafetería nueva».' },
            { prompt: '¿Qué hay en la terraza?', options: ['Unas mesas y unas plantas.', 'Unos documentos.', 'Una puerta azul.'], answer: 0, why: '«Hay unas mesas y unas plantas».' },
          ] },
        ] },
        { title: 'En la calle', blocks: [
          { kind: 'explore', title: '¿Hay una farmacia cerca?', setting: 'Julia necesita una farmacia. Pregunta a un señor en la calle.', lines: [
            { who: 'Julia', text: 'Perdón, ¿hay [[una farmacia|blue]] por aquí?' },
            { who: 'Señor', text: 'Sí, hay una en la calle Sol. ¿Ve [[el banco|teal]] de allí?' },
            { who: 'Julia', text: 'Sí, lo veo.' },
            { who: 'Señor', text: '[[La farmacia|teal]] está al lado del banco.' },
            { who: 'Julia', text: '¿Y hay [[un supermercado|blue]] cerca también?' },
            { who: 'Señor', text: 'Sí, hay [[unos supermercados|blue]] en la avenida.' },
            { who: 'Julia', text: 'Muchas gracias. Una última pregunta: ¿qué hora es?' },
            { who: 'Señor', text: 'Son las doce. ¡Ah, cuidado! [[La farmacia|teal]] cierra a la una.' },
          ], notes: {
            'una farmacia': 'Julia busca **cualquier** farmacia. No sabe cuál: **una**.',
            'el banco': 'Los dos ven el banco desde la calle: **el**.',
            'La farmacia': 'Ahora es una farmacia concreta, la de la calle Sol: **la**.',
            'un supermercado': 'Un supermercado cualquiera, nuevo en la conversación: **un**.',
            'unos supermercados': 'Varios supermercados que Julia no conoce: **unos**.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Hay una farmacia cerca de tu casa? ¿Dónde está la farmacia?». El alumno practica las dos menciones con un lugar real.' },
        ] },
        { title: '¿Presenta o señala?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones de las dos conversaciones', categories: [
            { id: 'nuevo', label: 'Presenta algo nuevo', tone: 'blue' },
            { id: 'conocido', label: 'Señala algo conocido', tone: 'teal' },
          ], items: [
            { text: 'Hay una cafetería nueva.', answer: 'nuevo', why: 'Primera mención, con «hay».' },
            { text: '¿Cómo es la cafetería?', answer: 'conocido', why: 'La cafetería de la que ya hablaron.' },
            { text: 'Hay unas mesas y unas plantas.', answer: 'nuevo', why: 'Cosas nuevas en la conversación.' },
            { text: '¿Ve el banco de allí?', answer: 'conocido', why: 'Los dos lo ven.' },
            { text: '¿Hay una farmacia por aquí?', answer: 'nuevo', why: 'Cualquier farmacia: Julia no sabe cuál.' },
            { text: 'La farmacia cierra a la una.', answer: 'conocido', why: 'La farmacia de la calle Sol: ya sabemos cuál.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Pregúntate siempre: ¿sabemos cuál es?',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Hablas de tu calle por primera vez.', prompt: 'En mi calle hay ___ panadería.', options: ['la', 'una', 'unas'], answer: 1, why: 'Primera mención con «hay»: una.' },
            { context: 'Ya hablaste de la panadería.', prompt: '___ panadería abre a las siete.', options: ['Una', 'La', 'Las'], answer: 1, why: 'Segunda mención: la panadería.' },
            { context: 'En la casa de un amigo.', prompt: 'Perdón, ¿dónde está ___ baño?', options: ['un', 'el', 'los'], answer: 1, why: 'En una casa, el baño es conocido para los dos.' },
            { context: 'Describes a tu profesora.', prompt: 'Ana es ___ profesora muy creativa.', options: ['una', 'la', '—'], answer: 0, why: 'Con un adjetivo que describe, usa un / una.' },
            { context: 'Un día de verano.', prompt: 'Hace calor. ___ sol está muy fuerte.', options: ['Un', 'El', 'Una'], answer: 1, why: 'El sol es único.' },
            { context: 'Vas al museo con amigos.', prompt: 'Compramos ___ entradas en internet.', options: ['las', 'unas', 'unos'], answer: 1, why: 'Entradas nuevas en la conversación, femenino plural: unas.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase habla de **una farmacia cualquiera**?', options: ['Necesito una farmacia.', 'Necesito ir a la farmacia de la esquina.'], answer: 0, why: '«Una farmacia»: cualquiera. «La farmacia de la esquina» es una concreta.' },
            { prompt: '¿Qué frase dice que la persona ya conoce el libro?', options: ['¿Tienes un libro?', '¿Tienes el libro?'], answer: 1, why: '«El libro»: los dos saben cuál es.' },
            { prompt: '«Hay un gato en el jardín. El gato es negro.» ¿Cuántos gatos hay?', options: ['Uno.', 'Dos.'], answer: 0, why: '«El gato» es el mismo gato de la primera frase.' },
            { prompt: '«¿Puedes cerrar la puerta?» ¿Qué puerta?', options: ['Cualquier puerta.', 'Una puerta que los dos conocen.'], answer: 1, why: '«La puerta»: la puerta de esta sala.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Julia busca a Sergio', lines: [
            { who: 'Julia', text: 'Sergio, ¿dónde estás? Estoy en ___ terraza de la cafetería.', options: ['una', 'la', 'unas'], answer: 1, why: 'La terraza de esta cafetería: es conocida.' },
            { who: 'Sergio', text: 'Estoy dentro. Hay ___ mesa libre al lado de la ventana.', options: ['la', 'una', 'un'], answer: 1, why: 'Primera mención con «hay»: una.' },
            { who: 'Julia', text: '¿___ mesa grande?', options: ['La', 'Una', 'Las'], answer: 0, why: 'Ya habló de esta mesa: la.' },
            { who: 'Sergio', text: 'Sí. Y tengo ___ documentos de la reunión.', options: ['unos', 'los', 'las'], answer: 1, why: 'Los documentos de la reunión: los dos saben cuáles.' },
            { who: 'Julia', text: 'Perfecto. Tengo ___ pregunta: ¿pido un café para ti?', options: ['la', 'una', 'un'], answer: 1, why: 'Una pregunta nueva: una.' },
            { who: 'Sergio', text: 'Sí, gracias. ___ café de aquí es muy bueno.', options: ['Un', 'El', 'Los'], answer: 1, why: 'El café de esta cafetería: concreto, el.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Hay el parque cerca de mi casa.', ok: false, options: ['Hay un parque cerca de mi casa.', 'Hay los parques cerca de mi casa.', 'Hay la parque cerca de mi casa.'], answer: 0, why: '«Hay» presenta algo nuevo: un parque.' },
            { sentence: 'Tengo una idea. La idea es simple.', ok: true, why: 'Correcta: primero presenta, después señala.' },
            { sentence: 'Compro un libro. Un libro es interesante.', ok: false, options: ['Compro un libro. El libro es interesante.', 'Compro el libro. Un libro es interesante.', 'Compro un libro. La libro es interesante.'], answer: 0, why: 'Segunda mención: el libro.' },
            { sentence: 'Las fotos están en la mesa.', ok: true, why: 'Correcta: «foto» es femenino.' },
            { sentence: '¿Dónde está un baño de la oficina?', ok: false, options: ['¿Dónde está el baño de la oficina?', '¿Dónde está una baño de la oficina?', '¿Dónde están unos baño de la oficina?'], answer: 0, why: 'El baño de la oficina es concreto: el.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Hay', 'una', 'mesa', 'libre', 'en', 'la', 'terraza'], accept: ['Hay una mesa libre en la terraza', 'En la terraza hay una mesa libre'], en: 'There is a free table on the terrace.' },
            { tiles: ['La', 'cafetería', 'tiene', 'una', 'puerta', 'azul'], accept: ['La cafetería tiene una puerta azul'], en: 'The café has a blue door.' },
            { tiles: ['Tengo', 'los', 'documentos', 'para', 'la', 'reunión'], accept: ['Tengo los documentos para la reunión'], en: 'I have the documents for the meeting.' },
          ] },
          { kind: 'rewrite', title: 'Escribe la segunda frase', items: [
            { prompt: 'Hay una tienda cerca. ___ tienda abre a las nueve.', instruction: 'Escribe la segunda frase completa.', accept: ['La tienda abre a las nueve'] },
            { prompt: 'Veo unas ventanas. ___ ventanas están abiertas.', instruction: 'Escribe la segunda frase completa.', accept: ['Las ventanas están abiertas'] },
            { prompt: 'Tengo un gato. ___ gato se llama Tito.', instruction: 'Escribe la segunda frase completa.', accept: ['El gato se llama Tito'] },
            { prompt: 'Veo una ventana. La ventana está abierta.', instruction: 'Cambia todo a plural.', accept: ['Veo unas ventanas. Las ventanas están abiertas', 'Veo unas ventanas Las ventanas están abiertas'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El punto de encuentro', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'El punto de encuentro', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota los lugares y los objetos con su artículo.', self: 'Escucha una vez para la idea general. Después escucha otra vez y anota los lugares y los objetos con su artículo. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Sergio, desde la cafetería', channel: 'MENSAJE DE VOZ · PARA JULIA', src: '/audio/grammar-classroom/42.mp3',
            before: 'Sergio ya está en la cafetería y le deja un mensaje a Julia. ¿Qué información necesita Julia para encontrarlo?',
            gist: { prompt: '¿Para qué es el mensaje?', options: ['Para explicar dónde está y cómo encontrarlo.', 'Para cancelar la reunión.', 'Para pedir unos documentos.'], answer: 0, why: 'Sergio describe la cafetería y la mesa: «Estoy en una cafetería cerca de la oficina».' },
            details: [
              { prompt: '¿Cómo es la puerta de la cafetería?', options: ['Azul.', 'Grande.', 'Blanca.'], answer: 0, why: '«La cafetería tiene una puerta azul».' },
              { prompt: '¿Dónde hay una mesa libre?', options: ['Dentro, al lado de la ventana.', 'En la terraza.', 'Junto a la puerta.'], answer: 1, why: '«Hay una mesa libre en la terraza».' },
              { prompt: '¿Qué hay junto a la mesa?', options: ['Una planta grande.', 'Una puerta azul.', 'Unos documentos.'], answer: 0, why: '«La mesa está junto a una planta grande».' },
              { prompt: '¿Qué tiene Sergio?', options: ['Los documentos para la reunión.', 'Un café para Julia.', 'La carta.'], answer: 0, why: '«Tengo los documentos para nuestra reunión».' },
              { prompt: '«Hay una mesa libre» y después «La mesa está junto…». ¿Por qué cambia el artículo?', options: ['Porque es la misma mesa: ya sabemos cuál es.', 'Porque son dos mesas diferentes.'], answer: 0, why: 'Primero «una mesa» la presenta; después «la mesa» habla de la misma.' },
            ],
            transcript: 'Hola, Julia. Estoy en [[una cafetería|blue]] cerca de la oficina. [[La cafetería|teal]] tiene [[una puerta|blue]] azul. Hay [[una mesa|blue]] libre en la terraza. [[La mesa|teal]] está junto a [[una planta|blue]] grande. Tengo [[los documentos|teal]] para nuestra reunión. Cuando estés aquí, buscamos juntos el café en la carta. Hasta ahora.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Julia: dice dónde está ahora y qué lleva. Pide una primera y una segunda mención.', self: 'Responde a Sergio como si fueras Julia: ¿dónde estás ahora? ¿Qué llevas? Usa «un / una» y después «el / la».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus lugares y tus cosas', coach: 'Presenta algo y después cuéntame más.',
      steps: [
        { title: 'Tus lugares y tus cosas', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Después de cada respuesta, pregunta por la misma cosa para provocar la segunda mención: «¿Y cómo es el café?».', self: 'Responde cada pregunta en voz alta con dos frases: primero presenta algo con «un / una», después habla de lo mismo con «el / la».' } },
          { kind: 'talk', cards: [
            { q: '¿Qué hay cerca de tu casa?', followUps: ['¿Cómo es ese lugar?', '¿Vas mucho?', '¿Qué más hay en tu calle?'], phrases: ['Hay [[un parque|blue]] cerca.', '[[El parque|teal]] es grande.', 'Hay [[unas tiendas|blue]].'], hint: 'Primero «Hay un / una…». Después habla del mismo lugar con «el / la».', example: 'Cerca de mi casa hay un parque y una panadería. El parque es grande y la panadería abre muy temprano.', next: 'Ahora, tu lugar favorito para tomar algo.' },
            { q: '¿Tienes una cafetería favorita?', followUps: ['¿Dónde está la cafetería?', '¿Tiene terraza?', '¿Qué pides normalmente?'], phrases: ['Hay [[una cafetería|blue]] en el centro.', '[[La cafetería|teal]] tiene…', 'Siempre pido [[un café|blue]].'], hint: 'Si ya hablaste de la cafetería, ahora es «la cafetería».', example: 'Sí, hay una cafetería pequeña en mi barrio. La cafetería tiene una terraza con plantas. Siempre pido un café con leche.', next: 'Ahora, las cosas de tu habitación.', teacher: 'Pregunta por un detalle concreto para provocar el artículo definido: «¿Y la terraza?».' },
            { q: 'Presenta tres objetos de tu habitación.', followUps: ['¿Dónde está cada objeto?', '¿De qué color son?', '¿Cuál es nuevo?'], phrases: ['Tengo [[una lámpara|blue]].', '[[La lámpara|teal]] está en la mesa.', 'Tengo [[unos libros|blue]]. [[Los libros|teal]] son…'], hint: 'Presenta con «Tengo un / una…» y después di dónde está: «El… está en…».', example: 'Tengo una lámpara, un espejo y unos libros. La lámpara está en la mesa y el espejo está en la pared.', next: 'Ahora, imagina una reunión.' },
            { q: 'Quieres ver a un amigo. ¿Dónde se encuentran?', followUps: ['¿Cómo se reconoce el lugar?', '¿Hay una mesa especial?', '¿Qué llevas?'], phrases: ['Nos vemos en [[una cafetería|blue]]…', '[[La cafetería|teal]] tiene una puerta…', 'Llevo [[los documentos|teal]].'], hint: 'Da una señal para reconocer el lugar: «La cafetería tiene una puerta roja».', example: 'Nos vemos en una cafetería en la plaza. La cafetería tiene una puerta roja y una terraza grande.', next: 'Ahora, tu clase o tu trabajo.' },
            { q: '¿Cómo es el lugar donde estudias o trabajas?', followUps: ['¿Dónde está la entrada?', '¿Hay una cocina?', '¿Dónde está tu mesa?'], phrases: ['Hay [[una sala|blue]] grande.', '[[La entrada|teal]] está…', '[[Mi mesa|teal]] está al lado de [[la ventana|teal]].'], hint: 'Las cosas únicas del lugar van con «el / la»: la entrada, la cocina, el ascensor.', example: 'Trabajo en una oficina pequeña. Hay una sala grande y una cocina. La cocina está al lado de la entrada.', next: 'Para terminar, algo especial.' },
            { q: '¿Tienes un objeto especial? Cuéntame su historia.', followUps: ['¿Quién te lo regaló?', '¿Dónde está el objeto ahora?', '¿Por qué es especial?'], phrases: ['Tengo [[un reloj|blue]] especial.', '[[El reloj|teal]] es de mi abuelo.', 'Es [[un regalo|blue]] de…'], hint: 'Presenta el objeto con «un / una» y después cuenta más con «el / la».', example: 'Tengo un reloj viejo. El reloj es de mi abuelo. Es un regalo muy especial para mí.', teacher: '«¿Quién te lo regaló?» es una fórmula: no hace falta explicar el pasado ni los pronombres.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pregunta al profesor qué hay cerca de su casa y cómo es.', self: 'Describe en voz alta el camino de tu casa a tu trabajo o clase: tres cosas que ves, primero con «un / una» y después con «el / la».' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje de encuentro', coach: 'Primero presenta, después señala.',
      steps: [
        { title: 'Un mensaje de encuentro', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos cada artículo: ¿presenta o señala?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada artículo: ¿la otra persona ya sabe cuál es?' } },
          { kind: 'write', title: 'Nos vemos en…', situation: 'Vas a ver a un amigo o a una compañera en un lugar que conoces. Escríbele un mensaje para explicar dónde.', task: [
            'Presenta **el lugar** con «un / una».',
            'Vuelve a mencionarlo con «el / la» y di **cómo es**.',
            'Presenta **una mesa** o un sitio concreto y explica **dónde está**.',
            'Di qué **llevas** a la reunión.',
          ], starters: ['Hola, …:', 'Nos vemos en un / una…', 'El / La… tiene…', 'Hay una mesa…', 'La mesa está…', 'Llevo…'],
            words: ['una cafetería', 'la terraza', 'la puerta', 'la entrada', 'una mesa libre', 'junto a', 'al lado de', 'los documentos'],
            model: 'Hola, Ana: nos vemos en [[una cafetería|blue]] cerca de tu oficina. [[La cafetería|teal]] tiene [[una terraza|blue]] pequeña. Hay [[una mesa|blue]] junto a la puerta. [[La mesa|teal]] está libre ahora. Llevo [[los documentos|teal]] para la reunión. ¡Hasta luego!',
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
            { tone: 'blue', label: 'UN · UNA · UNOS · UNAS', formula: 'primera mención · hay + un / una', example: 'Hay una cafetería cerca.', caption: 'Presenta algo nuevo o uno cualquiera.', en: 'a / some' },
            { tone: 'teal', label: 'EL · LA · LOS · LAS', formula: 'segunda mención · único · lo vemos los dos', example: 'La cafetería tiene una terraza.', caption: 'Señala algo que sabemos cuál es.', en: 'the' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Una pregunta', text: '¿La otra persona **sabe cuál es**? Sí: **el, la, los, las**. No: **un, una, unos, unas**.', en: 'Does the listener know which one?' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'En mi barrio hay ___ museo nuevo.', options: ['el', 'un', 'una'], answer: 1, why: 'Primera mención con «hay».' },
            { prompt: 'Tengo una bicicleta. ___ bicicleta es roja.', options: ['Una', 'La', 'El'], answer: 1, why: 'Segunda mención: la misma bicicleta.' },
            { prompt: '¿Puedes abrir ___ ventana, por favor? Hace calor.', options: ['una', 'la', 'unas'], answer: 1, why: 'La ventana de esta sala: los dos saben cuál.' },
            { prompt: 'Necesito ___ fotos para el pasaporte.', options: ['unos', 'unas', 'las'], answer: 1, why: 'Fotos nuevas, femenino plural: unas.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Presenta un objeto y vuelve a mencionarlo». Respuesta posible: «Tengo un libro. El libro es azul».' },
        ] },
      ],
    },
  ],
};
