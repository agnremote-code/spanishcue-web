import type { LiveLesson } from '../types';

/**
 * Lesson 323 · A1 · Interrogativos con tilde: qué, quién, cuál, cuánto (course unit G023).
 * One scene runs through the class: the information desk of the Museo de los
 * Colores, a (fictional) museum in Puebla, Mexico. Sofía Herrera organises a
 * visit for a group from her office and asks Paola, the receptionist, about
 * opening hours, price, address and number of people; Raúl is the guide.
 * Content: qué, quién / quiénes, cuál / cuáles, dónde, cuándo, cómo and
 * cuánto / cuánta / cuántos / cuántas (agreement), always with a written accent
 * in questions; qué vs cuál as a general tendency (qué + noun, cuál + ser or a
 * choice among known options). Receptive only: «no sé qué…» and que / cuando /
 * donde / como without an accent. Paola and Sofía speak with usted / ustedes;
 * the museum's phone line is a recorded announcement (one speaker).
 */
export const lesson: LiveLesson = {
  id: 323,
  level: 'A1',
  title: 'Interrogativos con tilde: qué, quién, cuál, cuánto',
  subtitle: 'Hacer preguntas concretas en un museo (horario, precio, dirección, personas) con la palabra interrogativa correcta y con tilde.',
  legend: [
    { tone: 'blue', label: 'QUÉ · CUÁL · qué cosa, cuál de varias (what / which)' },
    { tone: 'violet', label: 'QUIÉN · QUIÉNES · personas (who)' },
    { tone: 'teal', label: 'DÓNDE · CUÁNDO · CÓMO · lugar, momento, modo (where / when / how)' },
    { tone: 'orange', label: 'CUÁNTO · CUÁNTA · CUÁNTOS · CUÁNTAS · cantidad (how much / how many)' },
  ],
  optionNotes: {
    Que: '«Que» sin tilde no pregunta: une dos ideas («dice que abre a las diez») o une una frase a un nombre («la sala que tiene las fotos»). Para preguntar: «qué».',
    que: '«Que» sin tilde no pregunta: une dos ideas («dice que abre a las diez») o une una frase a un nombre («la sala que tiene las fotos»). Para preguntar: «qué».',
    qué: '«Qué» con tilde pregunta («¿a qué hora…?») o exclama («¡qué bonito!»). Si solo une dos ideas, sin pregunta, se escribe «que».',
    Cuanto: '«Cuanto» sin tilde no pregunta. Para preguntar por un precio o una cantidad: «cuánto».',
    Como: '«Como» sin tilde no pregunta (as / like). Para preguntar por el modo: «cómo».',
    Cuántos: '«Cuántos» va con un sustantivo masculino plural: cuántos días, cuántos niños.',
    Cuántas: '«Cuántas» va con un sustantivo femenino plural: cuántas personas, cuántas salas.',
    Cuánta: '«Cuánta» va con un sustantivo femenino singular: cuánta gente.',
    Quién: '«Quién» pregunta por una persona. Para varias personas: «quiénes».',
    Quiénes: '«Quiénes» pregunta por varias personas. Para una sola: «quién».',
    Cuál: '«Cuál» pregunta por una opción entre varias o va con «es»: ¿cuál es la dirección? Delante de un nombre, lo general es «qué». Para varias cosas: «cuáles».',
    Cuáles: '«Cuáles» es plural: ¿cuáles son las salas nuevas? Con un nombre en singular: «cuál».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Preguntas en el museo', coach: 'Hoy preguntamos bien. Today we ask good questions.',
      steps: [
        { title: 'En el mostrador · At the information desk', blocks: [
          { kind: 'lead', text: 'Sofía organiza una visita al **Museo de los Colores**, en Puebla, con doce compañeros de su oficina. Va al mostrador de información con muchas preguntas: el **horario**, el **precio**, la **dirección**, las **personas**. Para cada pregunta necesita una palabra especial, y siempre **con tilde**.', en: 'Sofía is organising a visit to the Museo de los Colores in Puebla with twelve colleagues from her office. She goes to the information desk with lots of questions: opening hours, price, address, people. Each question needs a special word, always with a written accent.' },
          { kind: 'guide', text: { teacher: 'Tú lees las cuatro preguntas en voz alta y tu alumno las repite. Después, tu alumno dice en inglés qué pregunta cada una.', self: 'Lee las cuatro preguntas en voz alta. Mira la palabra marcada al principio: ¿qué información pide? (Read the four questions aloud. Look at the first marked word.)' } },
          { kind: 'compare', title: 'Las preguntas de Sofía · Sofía’s questions', columns: [
            { tone: 'teal', label: 'CUÁNDO · when', sentence: '¿[[Cuándo|teal]] abre el museo?', idea: 'El horario: un momento.', en: 'When does the museum open?' },
            { tone: 'orange', label: 'CUÁNTO · how much', sentence: '¿[[Cuánto|orange]] cuesta la entrada?', idea: 'El precio: una cantidad.', en: 'How much is the ticket?' },
            { tone: 'blue', label: 'CUÁL · which / what', sentence: '¿[[Cuál|blue]] es la dirección?', idea: 'Un dato concreto.', en: 'What is the address?' },
            { tone: 'orange', label: 'CUÁNTAS · how many', sentence: '¿[[Cuántas personas|orange]] pueden entrar?', idea: 'El número de personas.', en: 'How many people can go in?' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Primero la palabra, después el verbo', text: 'La palabra interrogativa va **al principio**, después del signo **¿**, y luego el verbo: ¿**Cuándo abre** el museo? Ya conoces los signos ¿ ? de la clase 022.', en: 'The question word goes first, right after “¿”, and then the verb: “¿Cuándo abre el museo?”. You already know the ¿ ? signs from class 022.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«¿Cuánto cuesta la entrada?» pregunta por…', options: ['el lugar', 'el precio', 'la hora'], answer: 1, why: 'Cuánto + costar = el precio (how much).', en: '“¿Cuánto cuesta la entrada?” asks about…' },
            { prompt: 'Sofía quiere saber el momento. ¿Qué palabra usa?', options: ['¿Quién…?', '¿Cuándo…?', '¿Dónde…?'], answer: 1, why: 'Un momento: cuándo (when).', en: 'Sofía wants to know the time. Which word does she use?' },
            { prompt: '¿Qué tienen todas estas palabras en una pregunta?', options: ['Una tilde: qué, cuál, cuánto…', 'Una letra mayúscula siempre.', 'Nada especial.'], answer: 0, why: 'En la pregunta, todas llevan tilde.', en: 'What do all these words have in a question?' },
          ] },
        ] },
        { title: 'Las palabras para preguntar · Question words', mascot: '/brand/mascot/studying.webp', coach: 'Una palabra para cada información.', blocks: [
          { kind: 'lead', text: 'Cada palabra interrogativa pide **un tipo de información**: una cosa, una persona, un lugar, un momento, un modo o una cantidad. Elige la palabra según la respuesta que esperas.', en: 'Each question word asks for one type of information: a thing, a person, a place, a time, a way or an amount. Choose the word for the answer you expect.' },
          { kind: 'table', title: 'Los interrogativos · Question words', head: ['Palabra', 'Pregunta por… (asks about)', 'En el museo', 'English'], rows: [
            ['[[qué|blue]]', 'una cosa, una acción, una información', '¿Qué hay en la sala dos?', 'what'],
            ['[[cuál · cuáles|blue]]', 'una opción entre varias · un dato con «es»', '¿Cuál es el horario?', 'which / what'],
            ['[[quién · quiénes|violet]]', 'una persona · varias personas', '¿Quién es el guía?', 'who'],
            ['[[dónde|teal]]', 'un lugar', '¿Dónde está la cafetería?', 'where'],
            ['[[cuándo|teal]]', 'un momento', '¿Cuándo cierra el museo?', 'when'],
            ['[[cómo|teal]]', 'el modo, la manera', '¿Cómo llego al museo?', 'how'],
            ['[[cuánto · cuánta · cuántos · cuántas|orange]]', 'una cantidad, un precio', '¿Cuántas salas hay?', 'how much / how many'],
          ], note: 'Con preposición, la preposición va **delante**: ¿**A qué** hora abre? ¿**Con quién** vienes? ¿**De dónde** eres? ¿**Para cuántas** personas?' },
          { kind: 'tip', icon: '🔊', title: '¿Por qué la tilde? · Why the accent?', text: 'En una pregunta, estas palabras suenan **fuertes** y la tilde lo marca. Sin tilde, «que», «cuando», «donde» o «como» son **otras palabras** que no preguntan. La tilde no es decoración: cambia la palabra.', en: 'In a question these words are stressed, and the accent shows it. Without the accent, “que”, “cuando”, “donde” or “como” are different words that do not ask anything. The accent is not decoration: it changes the word.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—Está en la calle Reforma. ¿Cuál es la pregunta?', options: ['¿Quién está el museo?', '¿Cuándo está el museo?', '¿Dónde está el museo?'], answer: 2, why: 'La respuesta es un lugar: dónde.', en: '—It is on Reforma Street. What is the question?' },
            { prompt: '—Raúl, el guía. ¿Cuál es la pregunta?', options: ['¿Qué es el guía?', '¿Cuánto es el guía?', '¿Quién es el guía?'], answer: 2, why: 'La respuesta es una persona: quién.', en: '—Raúl, the guide. What is the question?' },
            { prompt: '¿___ hora abre la tienda?', options: ['Qué a', 'Qué', 'A qué'], answer: 2, why: 'La preposición va delante: ¿a qué hora?', en: 'At what time does the shop open?' },
          ] },
        ] },
        { title: 'Cuánto cambia · Cuánto agrees', mascot: '/autoestudio/mascot/noting.webp', coach: 'Cuánto mira al nombre. Cuánto looks at the noun.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CUÁNTO', question: '¿Cuánto? ¿Cuántas?', en: 'How much? How many?', formula: ['¿cuánto + verbo? → ¿Cuánto cuesta?', '¿cuánto / cuánta / cuántos / cuántas + nombre?'],
            meaning: 'Con un verbo solo, **cuánto** no cambia: ¿cuánto cuesta?, ¿cuánto pagamos? Delante de un nombre, **concuerda** con él como un adjetivo: masculino o femenino, singular o plural.',
            examples: [
              { es: '¿[[Cuánto|orange]] cuesta la entrada?', en: 'How much is the ticket?' },
              { es: '¿[[Cuánto tiempo|orange]] dura la visita?', en: 'How long does the tour last?' },
              { es: '¿[[Cuánta gente|orange]] hay hoy?', en: 'How many people are there today?' },
              { es: '¿[[Cuántos días|orange]] abre el museo?', en: 'How many days does the museum open?' },
              { es: '¿[[Cuántas personas|orange]] vienen?', en: 'How many people are coming?' },
            ],
            note: '**Gente** es singular y femenino: cuánt**a** gente. Lo mismo pasa con quién → **quiénes** y cuál → **cuáles**: ¿Quiénes son los guías? ¿Cuáles son las salas nuevas? Qué, dónde, cuándo y cómo **no cambian**.' },
          { kind: 'table', title: 'Cuánto + nombre · Cuánto + noun', head: ['', 'masculino', 'femenino'], rows: [
            ['singular', '[[cuánto|orange]] tiempo · cuánto dinero', '[[cuánta|orange]] gente · cuánta agua'],
            ['plural', '[[cuántos|orange]] días · cuántos niños', '[[cuántas|orange]] personas · cuántas salas'],
          ], note: 'Mira la terminación del nombre: d**ías** → cuánt**os**; person**as** → cuánt**as**. Cuidado: «el día» es masculino.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿___ salas tiene el museo?', options: ['Cuántos', 'Cuántas', 'Cuánta'], answer: 1, why: 'Salas: femenino plural → cuántas.', en: 'How many rooms does the museum have?' },
            { prompt: '¿___ estudiantes vienen?', options: ['Cuánto', 'Cuántas', 'Cuántos'], answer: 2, why: 'Estudiantes (un grupo mixto): masculino plural → cuántos.', en: 'How many students are coming?' },
            { prompt: '¿___ cuesta el catálogo?', options: ['Cuánto', 'Cuántos', 'Cuanto'], answer: 0, why: 'Con el verbo costar, cuánto no cambia, y lleva tilde.', en: 'How much is the catalogue?' },
          ] },
        ] },
        { title: '¿Qué o cuál? · What or which?', mascot: '/brand/mascot/speaking.webp', coach: 'Una tendencia útil. A useful tendency.', blocks: [
          { kind: 'compare', title: 'Qué y cuál · What and which', columns: [
            { tone: 'blue', label: 'QUÉ + nombre', sentence: '¿[[Qué|blue]] sala es la más bonita? · ¿[[Qué|blue]] días abre?', idea: 'Delante de un nombre: qué.', en: 'Which room is the nicest? · Which days does it open?' },
            { tone: 'neutral', label: 'CUÁL + es / son', sentence: '¿[[Cuál|blue]] es el precio? · ¿[[Cuáles|blue]] son las salas nuevas?', idea: 'Con «es / son» y un dato concreto: cuál.', en: 'What is the price? · Which are the new rooms?' },
            { tone: 'teal', label: 'CUÁL · una opción', sentence: 'Hay dos visitas. ¿[[Cuál|blue]] prefiere?', idea: 'Elegir entre opciones que ya conoces.', en: 'There are two tours. Which one do you prefer?' },
          ] },
          { kind: 'decide', title: '¿Qué o cuál? Responde · Answer', steps: [
            { q: 'Justo después, ¿hay un nombre? (¿___ sala?, ¿___ día?)', yes: 'Usa **qué**: ¿qué sala?, ¿qué día?', no: 'next' },
            { q: '¿Sigue «es / son» y pides un dato concreto? (la dirección, el precio, el nombre)', yes: 'Usa **cuál / cuáles**: ¿cuál es la dirección?', no: 'next' },
            { q: '¿Eliges entre opciones que ya conoces? (la visita corta o la completa)', yes: 'Usa **cuál**: ¿cuál prefiere?', no: 'Usa **qué** para una cosa o una información en general: ¿qué quiere?, ¿qué hay?' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Una tendencia, no una ley · A tendency, not a law', text: 'Es la regla general y la más útil para empezar. En algunas zonas de América también se oye «¿cuál sala?» en la conversación. Y cuidado: «¿**Qué** es…?» pide una definición: «¿Qué es un museo?».', en: 'This is the general rule and the most useful one to start with. In some parts of Latin America you also hear “¿cuál sala?” in conversation. And careful: “¿Qué es…?” asks for a definition: “What is a museum?”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿___ es el teléfono del museo?', options: ['Cuál', 'Quién', 'Qué'], answer: 0, why: 'Un dato concreto con «es»: cuál.', en: 'What is the museum’s phone number?' },
            { prompt: '¿___ días hay visitas guiadas?', options: ['Qué', 'Cuál', 'Cuáles'], answer: 0, why: 'Delante del nombre «días»: qué.', en: 'Which days are there guided tours?' },
            { prompt: 'Hay un mapa grande y un mapa pequeño. ¿___ quiere?', options: ['Cuál', 'Qué', 'Cuánto'], answer: 0, why: 'Dos opciones conocidas: cuál.', en: 'There is a big map and a small map. Which one do you want?' },
            { prompt: '«¿Qué es una audioguía?» pide…', options: ['un lugar', 'el precio', 'una definición'], answer: 2, why: '«¿Qué es…?» pide qué significa una cosa.', en: '“¿Qué es una audioguía?” asks for…' },
          ] },
        ] },
        { title: '¿Con tilde o sin tilde? · Accent or no accent?', mascot: '/brand/mascot/kneeling.webp', coach: 'Con tilde, pregunta. With an accent, it asks.', blocks: [
          { kind: 'lead', text: 'Muchas palabras interrogativas tienen una «gemela» **sin tilde** que no pregunta: une dos ideas dentro de una frase. Hoy solo las reconoces: no las tienes que usar.', en: 'Many question words have a “twin” without an accent that does not ask anything: it joins two ideas in a sentence. Today you only need to recognise them.' },
          { kind: 'table', title: 'Pares · Pairs', head: ['Pregunta (con tilde)', 'Sin tilde: no pregunta', 'English'], rows: [
            ['¿[[Qué|blue]] quiere ver?', 'La sala **que** quiere ver está cerrada hoy.', 'What do you want to see? · The room (that) you want to see is closed today.'],
            ['¿[[Cuándo|teal]] abre la tienda?', '**Cuando** abre la tienda, hay mucha gente.', 'When does the shop open? · When the shop opens, there are lots of people.'],
            ['¿[[Dónde|teal]] está Raúl?', 'Raúl está **donde** empieza la visita.', 'Where is Raúl? · Raúl is where the tour starts.'],
            ['¿[[Cómo|teal]] paga usted?', '**Como** es domingo, la entrada es gratis.', 'How are you paying? · As it is Sunday, entry is free.'],
          ], note: 'Paola dice **que** el museo cierra a las seis (says **that**…): aquí no hay pregunta, así que no hay tilde.' },
          { kind: 'tip', icon: '💡', title: 'La tilde también aparece sin «¿ ?»', text: 'Hay preguntas dentro de otra frase: «No sé **qué** sala es» (I don’t know which room it is), «¿Sabe **dónde** está la tienda?» (Do you know where the shop is?). Y en exclamaciones: «¡**Qué** bonito!». Hoy solo las reconoces.', en: 'Some questions sit inside another sentence: “No sé qué sala es”, “¿Sabe dónde está la tienda?”. Exclamations too: “¡Qué bonito!” (How beautiful!). Today you only need to recognise them.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El cartel dice ___ el museo cierra a las seis.', options: ['que', 'qué'], answer: 0, why: 'Aquí no hay pregunta: «dice que» (says that), sin tilde.', en: 'The sign says that the museum closes at six.' },
            { prompt: '¿___ hay en la sala tres?', options: ['Que', 'Qué'], answer: 1, why: 'Es una pregunta: qué, con tilde.', en: 'What is there in room three?' },
            { prompt: '«No sé dónde está la tienda». ¿Por qué «dónde» lleva tilde?', options: ['Es una pregunta dentro de la frase (where).', 'Porque va después de «sé».', 'Es un error.'], answer: 0, why: 'Es una pregunta indirecta: también lleva tilde.', en: '“No sé dónde está la tienda.” Why does “dónde” have an accent?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Pregunta? Entonces, tilde.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Qué información pide?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: '¿Que cuesta ochenta pesos?', right: '¿Qué cuesta ochenta pesos?', why: 'Es una pregunta: qué, con tilde. (What costs 80 pesos? —The catalogue.) Para el precio de una cosa: «¿Cuánto cuesta?».' },
            { wrong: '¿Cuántos personas vienen?', right: '¿Cuántas personas vienen?', why: '«Personas» es femenino plural: cuántas.' },
            { wrong: '¿Qué es la dirección del museo?', right: '¿Cuál es la dirección del museo?', why: 'Un dato concreto con «es»: cuál. «¿Qué es…?» pide una definición.' },
            { wrong: '¿Quién son los guías?', right: '¿Quiénes son los guías?', why: 'Varias personas: quiénes.' },
            { wrong: '¿Cuándo el museo abre?', right: '¿Cuándo abre el museo?', why: 'Después de la palabra interrogativa va normalmente el verbo; el sujeto, después.' },
            { wrong: 'Cuánto cuesta la entrada?', right: '¿Cuánto cuesta la entrada?', why: 'En español, la pregunta abre con ¿ (clase 022).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['¿Quién es la guía?', '¿Quien es la guía?', '¿Quiénes es la guía?'], answer: 0, why: 'Una persona: quién, con tilde.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['¿Donde está la cafetería?', '¿Dónde está la cafetería?', '¿Dónde la cafetería está?'], answer: 1, why: 'Dónde con tilde y después el verbo.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno hace tres preguntas reales sobre un museo de su ciudad, una con cuándo, una con cuánto y una con cuál. Tú respondes con información sencilla.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En el mostrador del museo', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Sofía pregunta · Sofía asks', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Paola, la recepcionista. Después, tu alumno toca cada palabra marcada y dice qué información pide.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver qué información pide.' } },
          { kind: 'explore', title: 'Una visita en grupo · A group visit', setting: 'Jueves por la mañana, en el mostrador de información del Museo de los Colores, en Puebla. Sofía habla con Paola, la recepcionista. (Thursday morning at the museum’s information desk.)', lines: [
            { who: 'Paola', text: '¡Buenos días! ¿[[Qué|blue]] necesita?', en: 'Good morning! What do you need?' },
            { who: 'Sofía', text: 'Buenos días. Somos un grupo de mi oficina y queremos visitar el museo. ¿[[Cuándo|teal]] abre?', en: 'Good morning. We are a group from my office and we want to visit the museum. When does it open?' },
            { who: 'Paola', text: 'De martes a domingo, de diez de la mañana a seis de la tarde.', en: 'Tuesday to Sunday, from ten in the morning to six in the evening.' },
            { who: 'Sofía', text: '¿Y [[cuánto|orange]] cuesta la entrada?', en: 'And how much is the ticket?' },
            { who: 'Paola', text: 'Ochenta pesos por persona. ¿[[Cuántas personas|orange]] son?', en: 'Eighty pesos per person. How many people are you?' },
            { who: 'Sofía', text: 'Somos doce. ¿[[Qué días|blue]] hay visitas guiadas?', en: 'There are twelve of us. Which days are there guided tours?' },
            { who: 'Paola', text: 'Los sábados y los domingos. Hay una visita corta y una visita completa. ¿[[Cuál|blue]] prefieren?', en: 'On Saturdays and Sundays. There is a short tour and a full tour. Which one do you prefer?' },
            { who: 'Sofía', text: 'La completa. ¿[[Quién|violet]] es el guía?', en: 'The full one. Who is the guide?' },
            { who: 'Paola', text: 'Raúl. Es muy simpático. ¿[[Cuál es|blue]] su nombre, para la reserva?', en: 'Raúl. He is very nice. What is your name, for the booking?' },
            { who: 'Sofía', text: 'Sofía Herrera. ¿Y [[dónde|teal]] está la entrada para grupos?', en: 'Sofía Herrera. And where is the entrance for groups?' },
            { who: 'Paola', text: 'Aquí, a la derecha. La visita empieza a las once. ¡Hasta el sábado!', en: 'Here, on the right. The tour starts at eleven. See you on Saturday!' },
            { who: 'Sofía', text: '¡[[Qué bien|blue]]! Muchas gracias.', en: 'Great! Thank you very much.' },
          ], notes: {
            'Qué': 'Paola pregunta por una cosa en general: **qué** (what). Con tilde, porque pregunta.',
            'Cuándo': 'Sofía pregunta por el momento: **cuándo** (when). La respuesta es un horario.',
            'cuánto': '**Cuánto** + costar = el precio. Con el verbo solo, cuánto no cambia.',
            'Cuántas personas': '**Cuántas** concuerda con «personas»: femenino plural. Es la frase clave de la clase.',
            'Qué días': '**Qué** + nombre (días): delante de un nombre, lo general es qué.',
            'Cuál': 'Dos opciones conocidas (la corta o la completa): **cuál**. Paola habla con ustedes: prefier**en**.',
            'Quién': 'Una persona: **quién**. Para varias personas sería «quiénes».',
            'Cuál es': '**Cuál es** + un dato concreto: el nombre, la dirección, el teléfono.',
            'dónde': 'Un lugar: **dónde**. Después, el verbo: ¿dónde **está** la entrada?',
            'Qué bien': 'No es una pregunta: es una **exclamación** (great!). También lleva tilde: ¡qué bien!, ¡qué bonito!',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuántas personas son en el grupo de Sofía?', options: ['Ochenta.', 'Ocho.', 'Doce.'], answer: 2, why: '«Somos doce».', en: 'How many people are in Sofía’s group?' },
            { prompt: '¿Qué días hay visitas guiadas?', options: ['Los sábados y los domingos.', 'De martes a domingo.', 'Los lunes.'], answer: 0, why: '«Los sábados y los domingos».', en: 'Which days are there guided tours?' },
            { prompt: '¿Qué visita prefiere Sofía?', options: ['La completa.', 'La corta.', 'Ninguna.'], answer: 0, why: '«La completa».', en: 'Which tour does Sofía prefer?' },
          ] },
        ] },
        { title: '¿Qué pregunta? · What is the question about?', mascot: '/brand/mascot/portrait.webp', coach: 'Una palabra, una información.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada pregunta de los otros visitantes y la clasifica. Tú preguntas: «¿Y la respuesta?», y tu alumno inventa una respuesta corta.', self: 'Lee cada pregunta de otros visitantes y elige qué información pide.' } },
          { kind: 'classify', title: 'Otros visitantes preguntan · Other visitors ask', categories: [
            { id: 'cosa', label: 'QUÉ · CUÁL · una cosa / una opción', tone: 'blue' },
            { id: 'persona', label: 'QUIÉN · una persona', tone: 'violet' },
            { id: 'lugar', label: 'DÓNDE · CUÁNDO · CÓMO', tone: 'teal' },
            { id: 'cantidad', label: 'CUÁNTO · una cantidad', tone: 'orange' },
          ], items: [
            { text: '¿Cuánto cuesta el estacionamiento?', answer: 'cantidad', why: 'Un precio: cuánto.' },
            { text: '¿Quién vende las entradas?', answer: 'persona', why: 'Una persona: quién.' },
            { text: '¿Dónde están los baños?', answer: 'lugar', why: 'Un lugar: dónde.' },
            { text: '¿Qué hay en la sala azul?', answer: 'cosa', why: 'Una cosa: qué.' },
            { text: '¿Cuánto tiempo dura la visita corta?', answer: 'cantidad', why: 'Una cantidad de tiempo: cuánto tiempo.' },
            { text: '¿Cómo llego a la catedral desde aquí?', answer: 'lugar', why: 'El modo, la manera: cómo.' },
            { text: '¿Cuál es el mapa en inglés?', answer: 'cosa', why: 'Una opción entre varios mapas: cuál.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Por qué Paola dice "cuántas personas" y no "cuántos personas"?». Respuesta esperada: porque «personas» es femenino plural.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Qué información pides? What are you asking for?',
      steps: [
        { title: 'Elige la palabra · Choose the word', blocks: [
          { kind: 'choice', items: [
            { context: 'Quieres saber el precio de la audioguía. (You want the price of the audio guide.)', prompt: '¿___ cuesta la audioguía?', options: ['Cuántas', 'Cuanto', 'Cuánto'], answer: 2, why: 'Precio + costar: cuánto, con tilde. Sin tilde, «cuanto» no pregunta.', en: 'How much is the audio guide?' },
            { context: 'Quieres el horario de la cafetería. (You want the café’s opening hours.)', prompt: '¿___ es el horario de la cafetería?', options: ['Qué', 'Quién', 'Cuál'], answer: 2, why: 'Un dato concreto con «es»: cuál. «¿Qué es el horario?» pregunta qué significa la palabra.', en: 'What are the café’s opening hours?' },
            { context: 'Buscas las fotos antiguas. (You are looking for the old photos.)', prompt: '¿___ sala tiene las fotos antiguas?', options: ['Cuáles', 'Quién', 'Qué'], answer: 2, why: 'Delante del nombre «sala»: qué. (En algunas zonas de América se oye «¿cuál sala?», pero lo general es «qué».)', en: 'Which room has the old photos?' },
            { context: 'Hay dos guías el sábado. (There are two guides on Saturday.)', prompt: '¿___ son los guías del sábado?', options: ['Quiénes', 'Cuál', 'Quién'], answer: 0, why: 'Personas, en plural: quiénes son.', en: 'Who are Saturday’s guides?' },
            { context: 'Quieres saber el momento de la visita. (You want to know the time of the tour.)', prompt: '¿___ empieza la visita guiada? —A las once.', options: ['Dónde', 'Cuánto', 'Cuándo'], answer: 2, why: 'La respuesta es un momento: cuándo.', en: 'When does the guided tour start? —At eleven.' },
          ] },
        ] },
        { title: 'Cuánto, cuánta, cuántos, cuántas', mascot: '/autoestudio/mascot/noting.webp', coach: 'Mira el nombre. Look at the noun.', blocks: [
          { kind: 'classify', title: '¿Qué forma? · Which form?', categories: [
            { id: 'o', label: 'cuánto', tone: 'orange' },
            { id: 'a', label: 'cuánta', tone: 'orange' },
            { id: 'os', label: 'cuántos', tone: 'orange' },
            { id: 'as', label: 'cuántas', tone: 'orange' },
          ], items: [
            { text: '¿… dinero necesito para la tienda?', answer: 'o', why: 'Dinero: masculino singular → cuánto.' },
            { text: '¿… gente viene el domingo?', answer: 'a', why: 'Gente: femenino singular → cuánta.' },
            { text: '¿… entradas quiere?', answer: 'as', why: 'Entradas: femenino plural → cuántas.' },
            { text: '¿… niños hay en el grupo?', answer: 'os', why: 'Niños: masculino plural → cuántos.' },
            { text: '¿… cuadros hay en la sala roja?', answer: 'os', why: 'Cuadros: masculino plural → cuántos.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: '¿Que hay en la sala tres?', ok: false, options: ['¿Quién hay en la sala tres?', '¿Cuál hay en la sala tres?', '¿Qué hay en la sala tres?'], answer: 2, why: 'Es una pregunta por una cosa: qué, con tilde.' },
            { sentence: '¿Cuántos personas vienen con usted?', ok: false, options: ['¿Cuántos persona viene con usted?', '¿Cuántas personas vienen con usted?', '¿Cuánta personas vienen con usted?'], answer: 1, why: 'Personas: femenino plural → cuántas.' },
            { sentence: 'El guía dice que la visita dura una hora.', ok: true, why: 'Correcta: aquí «que» no pregunta; une dos ideas (says that…), sin tilde.' },
            { sentence: '¿Qué es su número de teléfono?', ok: false, options: ['¿Cuáles es su número de teléfono?', '¿Cuál es su número de teléfono?', '¿Quién es su número de teléfono?'], answer: 1, why: 'Un dato concreto con «es»: cuál es.' },
            { sentence: '¿Quién son las personas de la taquilla?', ok: false, options: ['¿Quiénes es las personas de la taquilla?', '¿Quién es las personas de la taquilla?', '¿Quiénes son las personas de la taquilla?'], answer: 2, why: 'Varias personas: quiénes, y el verbo en plural: son.' },
            { sentence: '¿Dónde está la tienda del museo?', ok: true, why: 'Correcta: un lugar, dónde con tilde, y después el verbo.' },
          ] },
        ] },
        { title: 'Completa la llamada · Complete the call', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Viernes: Sofía llama al museo · Friday: Sofía calls the museum', lines: [
            { who: 'Paola', text: 'Museo de los Colores, buenas tardes.' },
            { who: 'Sofía', text: 'Hola, soy Sofía Herrera. Tengo una reserva para mañana. ¿A ___ hora empieza la visita?', options: ['cuál', 'qué', 'que'], answer: 1, why: '«¿A qué hora…?»: qué con tilde, delante del nombre «hora».' },
            { who: 'Paola', text: 'A las once. ¿___ personas vienen al final?', options: ['Cuántos', 'Cuánta', 'Cuántas'], answer: 2, why: 'Personas: femenino plural → cuántas.' },
            { who: 'Sofía', text: 'Ahora somos catorce. Una pregunta: ¿___ es la persona de contacto mañana?', options: ['Quiénes', 'Quién', 'Qué'], answer: 1, why: 'Una persona: quién es.' },
            { who: 'Paola', text: 'Raúl, el guía. ¿Algo más?' },
            { who: 'Sofía', text: 'Sí. ¿___ pagamos, en efectivo o con tarjeta?', options: ['Cuándo', 'Como', 'Cómo'], answer: 2, why: 'El modo de pagar: cómo, con tilde.' },
            { who: 'Paola', text: 'Con tarjeta o en efectivo: las dos opciones están bien. ¡Hasta mañana!' },
          ] },
        ] },
        { title: 'Construye preguntas · Build questions', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['hay', '¿Cuántas', 'el', 'salas', 'en', 'museo?'], accept: ['¿Cuántas salas hay en el museo?'], en: 'How many rooms are there in the museum?' },
            { tiles: ['da', 'la', '¿Quién', 'guiada?', 'visita'], accept: ['¿Quién da la visita guiada?'], en: 'Who gives the guided tour?' },
            { tiles: ['hora', '¿A', 'cierra', 'qué', 'cafetería?', 'la'], accept: ['¿A qué hora cierra la cafetería?'], en: 'What time does the café close?' },
            { tiles: ['la', 'es', '¿Cuál', 'grupos?', 'entrada', 'para'], accept: ['¿Cuál es la entrada para grupos?'], en: 'Which is the entrance for groups?' },
          ] },
        ] },
        { title: 'La pregunta para la respuesta · The question for the answer', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Escribe la pregunta · Write the question', items: [
            { prompt: '—La entrada cuesta ochenta pesos.', instruction: 'Escribe la pregunta, con ¿ ? y tilde. (Write the question.)', accept: ['¿Cuánto cuesta la entrada?', '¿Cuánto cuesta?', '¿Cuánto es la entrada?'] },
            { prompt: '—El museo está en la calle Reforma.', instruction: 'Escribe la pregunta, con ¿ ? y tilde. (Write the question.)', accept: ['¿Dónde está el museo?', '¿Dónde está?', '¿Cuál es la dirección del museo?', '¿Cuál es la dirección?'] },
            { prompt: '—Somos quince personas.', instruction: 'Escribe la pregunta para el grupo (ustedes). (Ask the group.)', accept: ['¿Cuántas personas son?', '¿Cuántas personas son ustedes?', '¿Cuántos son?', '¿Cuántos son ustedes?', '¿Cuántas son?', '¿Cuántas personas vienen?', '¿Cuántos vienen?'] },
            { prompt: '—El guía de hoy es Raúl.', instruction: 'Escribe la pregunta, con ¿ ? y tilde. (Write the question.)', accept: ['¿Quién es el guía de hoy?', '¿Quién es el guía?', '¿Quién es el guía hoy?'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La línea de información del museo', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Preguntas frecuentes · Frequently asked questions', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué es este audio?). Segunda escucha: tu alumno levanta la mano cada vez que oye una palabra interrogativa. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las palabras interrogativas que oyes. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Museo de los Colores · línea de información', channel: 'MENSAJE GRABADO · LÍNEA DE INFORMACIÓN DEL MUSEO', src: '/audio/grammar-live/323.mp3',
            before: 'Sofía llama al museo un lunes y escucha un mensaje grabado. ¿Qué preguntas crees que responde? (Sofía calls the museum on a Monday and hears a recorded message. Which questions do you think it answers?)',
            gist: { prompt: '¿Qué es el audio? · What is the audio?', options: ['Un mensaje de Sofía para Paola.', 'Un mensaje grabado del museo con preguntas frecuentes.', 'Una visita guiada.'], answer: 1, why: '«Gracias por llamar al Museo de los Colores. Estas son las preguntas frecuentes».', en: 'What is the audio?' },
            details: [
              { prompt: '¿Qué día está cerrado el museo? · Which day is it closed?', options: ['El lunes.', 'El sábado.', 'El domingo.'], answer: 0, why: '«Los lunes está cerrado».', en: 'Which day is the museum closed?' },
              { prompt: '¿Cuánto cuesta la entrada para estudiantes? · Student price?', options: ['Ochenta pesos.', 'Es gratis.', 'Cuarenta pesos.'], answer: 2, why: '«Ochenta pesos, y para estudiantes, cuarenta».', en: 'How much is a student ticket?' },
              { prompt: '¿Cuándo hay visitas guiadas? · When are the guided tours?', options: ['Todos los días a las diez.', 'Los lunes.', 'Los sábados y los domingos, a las once.'], answer: 2, why: '«Los sábados y los domingos, a las once».', en: 'When are there guided tours?' },
              { prompt: '¿Cuántas personas pueden ir en un grupo? · Group size?', options: ['Veinte como máximo.', 'Dieciocho.', 'Doce.'], answer: 0, why: '«Veinte como máximo». (Dieciocho es el número de la calle.)', en: 'How many people can go in a group?' },
              { prompt: '¿Quién da las visitas guiadas? · Who gives the tours?', options: ['Paola.', 'Sofía.', 'Raúl.'], answer: 2, why: '«Raúl, nuestro guía».', en: 'Who gives the guided tours?' },
            ],
            transcript: 'Hola, buenos días. Gracias por llamar al Museo de los Colores, en Puebla. Estas son las preguntas frecuentes. ¿[[Cuándo|teal]] abre el museo? De martes a domingo, de diez de la mañana a seis de la tarde. Los lunes está cerrado. ¿[[Cuánto|orange]] cuesta la entrada? Ochenta pesos, y para estudiantes, cuarenta. Los domingos, la entrada es gratis. ¿[[Dónde|teal]] está el museo? En la calle Reforma, número dieciocho, cerca de la catedral. ¿[[Qué días|blue]] hay visitas guiadas? Los sábados y los domingos, a las once. ¿[[Cuántas personas|orange]] pueden ir en un grupo? Veinte como máximo. ¿[[Quién|violet]] da las visitas? Raúl, nuestro guía. Gracias por su llamada.',
            reply: { teacher: 'Tú eres Paola y contestas el teléfono el martes. Tu alumno llama y hace tres preguntas nuevas que el mensaje no responde (por ejemplo: ¿cuánto tiempo dura la visita?, ¿dónde está la cafetería?, ¿cuál es la sala más grande?).', self: 'El martes llamas otra vez. Di en voz alta tres preguntas nuevas para Paola, con tres palabras diferentes: cuánto tiempo, dónde, cuál… (Ask three new questions aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú preguntas en el museo', coach: 'Hoy preguntas tú. Today you ask.',
      steps: [
        { title: 'En el mostrador · At the desk', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Paola, en el mostrador del museo. Tu alumno hace las preguntas con la palabra interrogativa correcta y tú respondes con datos sencillos. Si falta una tilde en la pronunciación o el orden no es claro, tú repites la pregunta bien y sigues.', self: 'Imagina que estás en el mostrador del museo. Lee la situación, haz las preguntas en voz alta y, si quieres, escríbelas. (Read the situation and ask the questions aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Quieres saber el horario del museo. Pregunta. · Ask about the opening hours.', followUps: ['¿Y los lunes? Pregunta por los lunes. (Ask about Mondays.)', 'Pregunta a qué hora cierra la tienda. (Ask when the shop closes.)'], phrases: ['¿[[Cuándo|teal]] abre el museo?', '¿[[Qué días|blue]] abre?', '¿A [[qué|blue]] hora cierra?'], hint: 'Cuándo para el momento. Qué + nombre: qué días, qué hora.', example: 'Buenos días. ¿Cuándo abre el museo? ¿Qué días abre? ¿Y a qué hora cierra la tienda?', next: 'Ahora, el precio.' },
            { q: 'Pregunta el precio de la entrada y de la audioguía. · Ask the price of the ticket and the audio guide.', followUps: ['Eres estudiante: pregunta por el precio para estudiantes. (Ask the student price.)', 'Pregunta cómo pagas. (Ask how to pay.)'], phrases: ['¿[[Cuánto|orange]] cuesta la entrada?', '¿[[Cuánto|orange]] cuesta la audioguía?', '¿[[Cómo|teal]] pago, con tarjeta?'], hint: 'Cuánto + cuesta: cuánto no cambia. Cuidado con la tilde.', example: '¿Cuánto cuesta la entrada? ¿Y la audioguía? Soy estudiante: ¿cuánto cuesta para estudiantes? ¿Cómo pago?', next: 'Ahora, tu grupo.' },
            { q: 'Vienes con un grupo. Paola pregunta y tú preguntas también. · You come with a group: ask about group size.', followUps: ['¿Cuántas personas son ustedes? (Answer Paola.)', 'Pregunta cuántos niños pueden entrar gratis. (Ask how many children go free.)'], phrases: ['Somos …', '¿[[Cuántas personas|orange]] pueden ir en un grupo?', '¿[[Cuánto tiempo|orange]] dura la visita?'], hint: 'Cuánto concuerda con el nombre: cuántas personas, cuántos niños, cuánto tiempo.', example: 'Somos diez. ¿Cuántas personas pueden ir en un grupo? ¿Cuánto tiempo dura la visita?', next: 'Ahora, la visita guiada.', teacher: 'Este es el punto de la clase. Si tu alumno dice «cuántos personas», tú repites con la forma correcta: «¿Cuántas personas? Veinte».' },
            { q: 'Hay dos visitas guiadas: corta y completa. Pregunta. · There are two tours: ask about them.', followUps: ['Pregunta quién es el guía. (Ask who the guide is.)', 'Pregunta qué hay en la visita completa. (Ask what the full tour includes.)'], phrases: ['¿[[Cuál|blue]] es mejor para un grupo?', '¿[[Quién|violet]] es el guía?', '¿[[Qué|blue]] salas visitamos?'], hint: 'Cuál para elegir entre dos opciones. Qué + nombre: qué salas.', example: 'Hay dos visitas, ¿no? ¿Cuál es mejor para un grupo? ¿Quién es el guía? ¿Qué salas visitamos?', next: 'Ahora, cómo llegar.' },
            { q: 'Pregunta la dirección y cómo llegar desde el centro. · Ask the address and how to get there.', followUps: ['Pregunta dónde está la entrada para grupos. (Ask where the group entrance is.)', 'Pregunta cuál es el teléfono del museo. (Ask the phone number.)'], phrases: ['¿[[Cuál es|blue]] la dirección?', '¿[[Dónde|teal]] está la entrada para grupos?', '¿[[Cómo|teal]] llego desde el centro?'], hint: 'Cuál es + un dato. Dónde para un lugar. Cómo para la manera.', example: '¿Cuál es la dirección exacta? ¿Cómo llego desde el centro? ¿Y dónde está la entrada para grupos?', next: 'Para terminar, tu museo.' },
            { q: '¿Cuál es tu museo favorito? Responde y después pregunta tú. · What is your favourite museum? Answer, then ask back.', followUps: ['¿Dónde está? ¿Qué hay? (Where is it? What is there?)', '¿Cuánto cuesta la entrada? (How much is it?)', '¿Con quién vas? (Who do you go with?)'], phrases: ['Mi museo favorito es …', 'Está en …', '¿Y tú? ¿[[Cuál|blue]] es tu museo favorito?'], hint: 'Responde con frases cortas. Termina con una pregunta: «¿Y tú? ¿Cuál…?».', example: 'Mi museo favorito es el museo de arte de mi ciudad. Está en el centro y la entrada es gratis. Voy con mi hermana. ¿Y tú? ¿Cuál es tu museo favorito?', teacher: 'Responde tú también con información real y sencilla. Después tu alumno te hace dos preguntas más sobre tu museo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es la recepcionista o el recepcionista del museo y tú haces las preguntas, con algún error de tilde o de concordancia para que tu alumno lo corrija.', self: 'Ahora tú eres Paola: lee en voz alta las preguntas de Sofía en el diálogo de Explorar y responde con otros datos. (Now you are Paola: answer Sofía’s questions with new information.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo al museo', coach: 'Preguntas claras, con tilde. Clear questions, with accents.',
      steps: [
        { title: 'Un correo al museo · An email to the museum', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos las tildes y la concordancia de cuánto. Después, tu alumno lee su correo en voz alta y tú respondes como Paola.', self: 'Escribe tu correo y toca «Revisar mi texto». Mira bien las tildes y cuántos / cuántas. (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Información para una visita · Information for a visit', situation: 'Quieres visitar el Museo de los Colores con un grupo de amigos o compañeros. Escribe un correo corto a Paola, del mostrador de información, para pedir los datos que necesitas. (You want to visit the museum with a group. Write a short email to Paola at the information desk asking for what you need.)', task: [
            'Saluda y di quién eres y cuántas personas son. (Greet her, say who you are and how many you are.)',
            'Haz al menos cuatro preguntas con palabras diferentes: cuándo, cuánto, dónde, quién… (At least four questions, different words.)',
            'Una pregunta con **cuántos** o **cuántas** + nombre. (One with cuántos / cuántas + noun.)',
            'Una pregunta con **cuál**: un dato o una opción. (One with cuál.)',
            'Despídete: «Muchas gracias. Un saludo». (Sign off.)',
          ], starters: ['Hola, Paola:', 'Me llamo … y …', 'Somos … personas.', '¿Qué días …?', '¿Cuánto cuesta …?', '¿Cuál es …?', 'Muchas gracias. Un saludo,'],
            words: ['qué', 'cuál', 'quién', 'dónde', 'cuándo', 'cómo', 'cuánto', 'cuántas personas', 'cuántos niños', 'la entrada', 'la visita guiada', 'el horario', 'la dirección', 'el guía'],
            model: 'Hola, Paola: Me llamo Alex y trabajo en una escuela de idiomas. Somos nueve personas y queremos visitar el museo el sábado. ¿[[Qué días|blue]] hay visitas guiadas? ¿[[Cuánto|orange]] cuesta la entrada para un grupo? Hay dos visitas, ¿no? ¿[[Cuál|blue]] es mejor para nosotros? ¿[[Cuántas personas|orange]] pueden ir en la visita completa? ¿Y [[quién|violet]] es el guía? Muchas gracias. Un saludo, Alex',
            minWords: 35,
            checks: [
              { label: 'Preguntas con ¿ ? (question marks)', pattern: '¿[^?]+\\?', tip: 'Abre y cierra cada pregunta: «¿Cuándo abre el museo?».' },
              { label: 'Palabras interrogativas con tilde (accented question words)', pattern: '(?<!\\p{L})(?:qué|quién|quiénes|cuál|cuáles|dónde|cuándo|cómo|cuánto|cuánta|cuántos|cuántas)(?!\\p{L})', tip: 'Escribe la tilde: qué, cuál, dónde, cuánto…' },
              { label: 'Cuántos / cuántas + nombre (how many + noun)', pattern: '(?<!\\p{L})cuánt[oa]s\\s+\\p{L}+', tip: 'Pregunta por un número: «¿Cuántas personas…?», «¿Cuántos niños…?».' },
              { label: 'Una pregunta con cuál (one question with cuál)', pattern: '(?<!\\p{L})cuál(?:es)?(?!\\p{L})', tip: 'Pide un dato o elige: «¿Cuál es el horario?», «¿Cuál es mejor?».' },
            ],
            warnings: [
              { pattern: '¿\\s*(?:y\\s+)?(?:(?:a|de|con|para|en)\\s+)?(?:que|quien|quienes|cual|cuales|donde|cuando|como|cuanto|cuanta|cuantos|cuantas)(?!\\p{L})', why: 'En una pregunta, la palabra interrogativa lleva tilde: «¿qué…?», «¿dónde…?», «¿cuánto…?».' },
              { pattern: '(?<!\\p{L})cuántos\\s+(?:personas|entradas|salas|visitas)(?!\\p{L})', why: 'Con un nombre femenino plural: «cuántas personas», «cuántas entradas».' },
              { pattern: '(?<!\\p{L})cuántas\\s+(?:días|niños|estudiantes|cuadros)(?!\\p{L})', why: 'Con un nombre masculino plural: «cuántos días», «cuántos niños».' },
              { pattern: '¿\\s*qué\\s+es\\s+(?:la|el|su)\\s+(?:dirección|precio|horario|teléfono|correo|nombre)(?!\\p{L})', why: 'Para un dato concreto con «es», mejor «cuál»: «¿Cuál es la dirección?».' },
              { pattern: '¿\\s*quién\\s+son(?!\\p{L})', why: 'Varias personas: «¿Quiénes son…?».' },
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
            { tone: 'blue', label: 'QUÉ · CUÁL', formula: 'qué + nombre · cuál + es / una opción', example: '¿Qué días abre? · ¿Cuál es la dirección?', caption: 'una cosa, un dato, una opción', en: 'what / which' },
            { tone: 'violet', label: 'QUIÉN · QUIÉNES', formula: 'quién + es · quiénes + son', example: '¿Quién es el guía? · ¿Quiénes son?', caption: 'una persona o varias', en: 'who' },
            { tone: 'teal', label: 'DÓNDE · CUÁNDO · CÓMO', formula: 'palabra + verbo', example: '¿Dónde está la entrada? · ¿Cuándo abre?', caption: 'lugar, momento, modo', en: 'where / when / how' },
            { tone: 'orange', label: 'CUÁNTO', formula: 'cuánto + verbo · cuánto/a/os/as + nombre', example: '¿Cuánto cuesta? · ¿Cuántas personas vienen?', caption: 'una cantidad, un precio', en: 'how much / how many' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Si **pregunta**, lleva **tilde**: qué, quién, cuál, dónde, cuándo, cómo, cuánto. **Cuánto** concuerda con el nombre (cuántas personas). Y como tendencia general: **qué** + nombre, **cuál** + es o para elegir.', en: 'If it asks, it has an accent. “Cuánto” agrees with the noun (cuántas personas). And as a general tendency: “qué” + noun, “cuál” + es or to choose.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco preguntas, sin ayuda · Five questions, no help', items: [
            { prompt: '¿___ cuesta el mapa del museo?', options: ['Cuánto', 'Cuanto', 'Cuántos'], answer: 0, why: 'Precio + costar: cuánto, con tilde.' },
            { prompt: '¿___ personas hay en la visita de hoy?', options: ['Cuántos', 'Cuánta', 'Cuántas'], answer: 2, why: 'Personas: femenino plural → cuántas.' },
            { prompt: '¿___ es el correo del museo?', options: ['Qué', 'Quién', 'Cuál'], answer: 2, why: 'Un dato concreto con «es»: cuál.' },
            { prompt: '¿___ son las dos personas de la recepción?', options: ['Quiénes', 'Cuál', 'Quién'], answer: 0, why: 'Varias personas: quiénes.' },
            { prompt: 'Paola dice ___ la tienda cierra a las siete.', options: ['cuándo', 'que', 'qué'], answer: 1, why: 'No hay pregunta: «dice que», sin tilde.' },
          ] },
        ] },
        { title: 'Ahora en otro lugar · Now somewhere else', mascot: '/brand/mascot/walking.webp', coach: 'Las mismas palabras, otro lugar.', blocks: [
          { kind: 'lead', text: 'El sábado, después del museo, Sofía y su grupo van a la oficina de turismo de Puebla. Haz sus preguntas.', en: 'On Saturday, after the museum, Sofía and her group go to the Puebla tourist office. Ask their questions.' },
          { kind: 'rewrite', title: 'En la oficina de turismo · At the tourist office', items: [
            { prompt: 'Where is the bus station?', instruction: 'Escribe la pregunta en español. (bus station = la estación de autobuses)', accept: ['¿Dónde está la estación de autobuses?', '¿Dónde está la estación?'] },
            { prompt: 'How much is the city tour?', instruction: 'Escribe la pregunta en español. (city tour = el tour por la ciudad)', accept: ['¿Cuánto cuesta el tour por la ciudad?', '¿Cuánto cuesta el tour?', '¿Cuánto es el tour por la ciudad?', '¿Cuánto es el tour?'] },
            { prompt: 'How many days does the festival last?', instruction: 'Escribe la pregunta en español. (to last = durar · el festival)', accept: ['¿Cuántos días dura el festival?'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 024 · Oraciones negativas y posición de no', text: 'Ya sabes preguntar por el horario, el precio, el lugar y las personas. Pero a veces la respuesta es «no»: «No, los lunes **no** abre». En la clase 024 aprendes a decir frases negativas y dónde va **no** en la frase.', en: 'You can now ask about opening hours, prices, places and people. But sometimes the answer is “no”: “No, it does not open on Mondays”. In class 024 you learn to make negative sentences and where “no” goes in the sentence.', href: '/gramatica/oraciones-negativas', label: 'Ir a la clase 024' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Haz tres preguntas sobre un lugar de tu ciudad: una con cuándo, una con cuánto / cuántas y una con cuál». Tarea para la próxima clase: mandar el correo de Escribir (o uno parecido) a un museo o lugar real y traer la respuesta.' },
        ] },
      ],
    },
  ],
};
