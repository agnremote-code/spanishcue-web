import type { LiveLesson } from '../types';

/**
 * Lesson 383 · A2 · Preguntas indirectas iniciales: no sé dónde (course unit G083).
 * One scene runs through the class: Marta Rojas has just moved into apartment
 * 502 of the edificio Los Almendros, in Medellín (Colombia). She asks don
 * Héctor, the doorman (usted), about the laundry room, the technician, a
 * parcel and her neighbour; later she talks to Elena Cardona, the neighbour
 * in 503 (tú). In the voice message Elena (Colombian voice) welcomes Marta,
 * answers one question and asks two of her own.
 * Content: a question inside a sentence after no sé, no recuerdo, ¿sabes /
 * sabe…?, dime / dígame, ¿me puedes / me puede decir…?: the question word keeps
 * its accent (dónde, cuándo, qué, cuál, quién, cómo, cuánto, a qué hora, de
 * qué…) and the verb follows it; yes/no questions are joined with «si» (no
 * accent). Qué / cuál as in G023. Indicative only. Contrasts: direct vs
 * indirect question (punctuation), si (whether) vs si (condition, G078) vs sí,
 * qué (question) vs que (that) and donde / cuando relatives (G067).
 * Mistakes: *No sé donde está, *No sé que si viene, *No sé qué viene (yes/no),
 * *Dime que quieres (= tell me that you want). Ampliación: formal frames
 * (me gustaría saber si, ¿podría decirme…?), si… o no, «pregunta si / dónde».
 */
export const lesson: LiveLesson = {
  id: 383,
  level: 'A2',
  title: 'Preguntas indirectas iniciales: no sé dónde',
  subtitle: 'Pedir información con cortesía y decir lo que no sabes: «¿Me puede decir dónde está…?», «No sé si viene», «Dime qué quieres».',
  legend: [
    { tone: 'violet', label: 'LA FRASE DE ENTRADA · no sé, ¿sabes…?, dime, ¿me puede decir…? (the frame)' },
    { tone: 'blue', label: 'PALABRA INTERROGATIVA · dónde, cuándo, qué, cuál… con tilde (question word)' },
    { tone: 'orange', label: 'SI · para preguntas de sí o no (if / whether)' },
  ],
  optionNotes: {
    donde: '«Donde» sin tilde no pregunta: señala un lugar («la calle donde vivo»). En una pregunta, aunque esté dentro de otra frase: «dónde».',
    sí: '«Sí» con tilde significa yes. Para meter una pregunta de sí o no dentro de otra frase: «si», sin tilde.',
    cuanto: '«Cuanto» sin tilde no pregunta. Para preguntar por un precio o una cantidad, también dentro de otra frase: «cuánto».',
    'a que hora': 'Aquí hay una pregunta (¿a qué hora…?): «qué» lleva tilde también dentro de otra frase.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Preguntas dentro de una frase', coach: 'Una pregunta dentro de otra frase. A question inside a sentence.',
      steps: [
        { title: 'En la portería · At the front desk', blocks: [
          { kind: 'lead', text: 'Marta Rojas acaba de llegar a Medellín. Vive en el edificio **Los Almendros**, apartamento 502, y tiene muchas preguntas para don Héctor, el portero. A veces pregunta directamente: «¿Dónde está la lavandería?». Pero muchas veces mete la pregunta **dentro de otra frase**: «¿Me puede decir dónde está la lavandería?», «No sé dónde está». Son las **preguntas indirectas**.', en: 'Marta Rojas has just arrived in Medellín. She lives in the Los Almendros building, apartment 502, and has lots of questions for Héctor, the doorman. Sometimes she asks directly: “Where is the laundry room?”. But often she puts the question inside another sentence: “Can you tell me where the laundry room is?”, “I don’t know where it is.” These are indirect questions.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases en voz alta y tu alumno las repite. Después, tu alumno dice qué parte es igual en las tres.', self: 'Lee las tres frases en voz alta. ¿Qué parte es igual en las tres? (What part is the same in all three?)' } },
          { kind: 'compare', title: 'Tres maneras de preguntar · Three ways to ask', columns: [
            { tone: 'blue', label: 'PREGUNTA DIRECTA', sentence: '¿[[Dónde|blue]] está la lavandería?', idea: 'La pregunta sola, con ¿ ?.', en: 'Where is the laundry room?' },
            { tone: 'violet', label: 'PEDIR CON CORTESÍA', sentence: '¿[[Me puede decir|violet]] [[dónde|blue]] está la lavandería?', idea: 'La misma pregunta, más amable.', en: 'Can you tell me where the laundry room is?' },
            { tone: 'violet', label: 'DECIR QUE NO SABES', sentence: '[[No sé|violet]] [[dónde|blue]] está la lavandería.', idea: 'No es una pregunta: no lleva ¿ ?.', en: 'I don’t know where the laundry room is.' },
          ] },
          { kind: 'tip', icon: '🔑', title: '«Dónde» no cambia · “Dónde” stays the same', text: 'La palabra interrogativa sigue igual, **con tilde**, y el verbo va justo después: dónde **está** la lavandería. Solo añades una frase al principio: «no sé», «¿me puede decir…?».', en: 'The question word stays the same, with its accent, and the verb comes right after it: “dónde está la lavandería”. You only add a phrase at the start: “no sé”, “¿me puede decir…?”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«¿Me puede decir dónde está la lavandería?» es…', options: ['una pregunta sobre el portero', 'una pregunta más amable', 'una orden'], answer: 1, why: 'Es la misma pregunta («¿dónde está?») dentro de una frase amable.', en: '“¿Me puede decir dónde está la lavandería?” is…' },
            { prompt: '«No sé dónde está» significa…', options: ['Where is it?', 'I know where it is.', 'I don’t know where it is.'], answer: 2, why: '«No sé» + la pregunta: I don’t know where…', en: '“No sé dónde está” means…' },
            { prompt: 'En «No sé dónde está», ¿«dónde» lleva tilde?', options: ['Solo en la pregunta directa.', 'Sí: es una pregunta dentro de la frase.', 'No: ya no hay ¿ ?.'], answer: 1, why: 'Dentro de otra frase, la palabra interrogativa conserva la tilde.', en: 'In “No sé dónde está”, does “dónde” have an accent?' },
          ] },
        ] },
        { title: 'Cómo se forma · How it is built', mascot: '/brand/mascot/studying.webp', coach: 'Entrada + pregunta. Frame + question.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'LA PREGUNTA INDIRECTA', question: '¿Sabes dónde vive Elena?', en: 'Do you know where Elena lives?', formula: ['frase de entrada + palabra interrogativa + verbo + resto', 'No sé + dónde + vive + Elena.'],
            meaning: 'Primero va una frase de entrada: «no sé», «no recuerdo», «¿sabes…?», «dime», «¿me puedes decir…?». Después, la pregunta **como es**: la palabra interrogativa con tilde y el **verbo en indicativo**, casi siempre justo después.',
            examples: [
              { es: '[[No sé|violet]] [[dónde|blue]] vive Elena.', en: 'I don’t know where Elena lives.' },
              { es: '¿[[Sabes|violet]] [[cuándo|blue]] abre el banco?', en: 'Do you know when the bank opens?' },
              { es: '[[Dime|violet]] [[qué|blue]] quieres para cenar.', en: 'Tell me what you want for dinner.' },
              { es: '[[No recuerdo|violet]] [[cómo|blue]] se llama el portero de la noche.', en: 'I don’t remember what the night doorman is called.' },
            ],
            note: 'Cuidado con el inglés: en «where Elena **lives**» el verbo va al final. En español, lo natural es el verbo justo después: «dónde **vive** Elena».' },
          { kind: 'table', title: 'Frases de entrada · Frames', head: ['Tú', 'Usted', 'English'], rows: [
            ['[[No sé|violet]]… · [[No recuerdo|violet]]…', '(igual)', 'I don’t know… · I don’t remember…'],
            ['¿[[Sabes|violet]]…?', '¿[[Sabe|violet]]…?', 'Do you know…?'],
            ['[[Dime|violet]]…', '[[Dígame|violet]]…', 'Tell me…'],
            ['¿[[Me puedes decir|violet]]…?', '¿[[Me puede decir|violet]]…? · ¿Podría decirme…?', 'Can you tell me…? · Could you tell me…?'],
          ], note: '**Puntuación:** los signos ¿ ? van solo si **toda la frase** pregunta: «¿Sabes dónde está?». «No sé dónde está» y «Dime qué quieres» terminan en punto.' },
          { kind: 'tip', icon: '💡', title: 'Más amable · More polite', text: '«¿Dónde está el baño?» es correcto. Pero con una persona desconocida, «¿**Me puede decir** dónde está el baño?» o «¿**Sabe** dónde está el baño?» suena más suave. Para responder sin el dato: «No, **no lo sé**».', en: '“¿Dónde está el baño?” is correct. But with a stranger, “Can you tell me where the bathroom is?” or “Do you know where the bathroom is?” sounds softer. To answer without the information: “No, no lo sé” (No, I don’t know).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elige la frase correcta.', options: ['¿No sé dónde trabaja Elena?', 'No sé donde trabaja Elena.', 'No sé dónde trabaja Elena.'], answer: 2, why: '«No sé» no pregunta: punto final. Y «dónde» conserva la tilde.', en: 'Choose the correct sentence.' },
            { prompt: 'Con usted: «___ cuándo viene el técnico?»', options: ['Dime', '¿Sabes', '¿Sabe'], answer: 2, why: 'Con usted: ¿sabe…? Con tú: ¿sabes…?', en: 'With usted: “Do you know when the technician is coming?”' },
            { prompt: '¿Cuál es el orden más natural?', options: ['¿Sabes a qué hora abre el banco?', '¿Sabes el banco a qué hora abre?', '¿Sabes a qué hora el banco abre?'], answer: 0, why: 'Lo natural: la palabra interrogativa y, justo después, el verbo: a qué hora abre.', en: 'Which is the most natural order?' },
          ] },
        ] },
        { title: '¿Sí o no? Entonces, si · Yes or no? Then si', mascot: '/autoestudio/mascot/noting.webp', coach: 'Sin palabra interrogativa: si. No question word: si.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'SI', question: '¿Sabe si hay ascensor?', en: 'Do you know if there is a lift?', formula: ['¿Hay ascensor? → ¿Sabe + si + hay ascensor?', 'frase de entrada + si + verbo + resto'],
            meaning: 'Algunas preguntas no tienen palabra interrogativa: la respuesta es **sí o no** («¿Hay ascensor?» —Sí). Dentro de otra frase, estas preguntas se unen con **si**, sin tilde (if / whether).',
            examples: [
              { es: '¿Viene el técnico? → [[No sé|violet]] [[si|orange]] viene el técnico.', en: 'Is the technician coming? → I don’t know if the technician is coming.' },
              { es: '¿Hay que pagar? → ¿[[Sabe|violet]] [[si|orange]] hay que pagar?', en: 'Do you have to pay? → Do you know if you have to pay?' },
              { es: '¿Funciona la secadora? → [[Dime|violet]] [[si|orange]] funciona la secadora.', en: 'Does the dryer work? → Tell me if the dryer works.' },
            ],
            note: 'No añadas «que»: «No sé si viene», no «no sé que si viene».' },
          { kind: 'compare', title: 'Tres palabras parecidas · Three similar words', columns: [
            { tone: 'orange', label: 'SI · pregunta (whether)', sentence: 'No sé [[si|orange]] hay ascensor.', idea: 'Una pregunta de sí o no dentro de la frase.', en: 'I don’t know if there is a lift.' },
            { tone: 'neutral', label: 'SI · condición (if), clase 078', sentence: 'Si llueve, no salgo.', idea: 'Una condición: si pasa A, pasa B.', en: 'If it rains, I don’t go out.' },
            { tone: 'neutral', label: 'SÍ · yes', sentence: '—¿Hay ascensor? —Sí, hay dos.', idea: 'La respuesta. Con tilde.', en: '—Is there a lift? —Yes, there are two.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Tienen gimnasio? → No sé ___ tienen gimnasio.', options: ['qué', 'si', 'sí'], answer: 1, why: 'Pregunta de sí o no: si, sin tilde.', en: 'Do they have a gym? → I don’t know if they have a gym.' },
            { prompt: '¿Qué «si» es una pregunta indirecta?', options: ['No recuerdo si cierran a las ocho.', 'Si llueve, no hay mercado.', 'Si tienes tiempo, te llamo.'], answer: 0, why: 'Después de «no recuerdo», «si» mete una pregunta (¿cierran a las ocho?). En las otras dos es una condición.', en: 'Which “si” introduces an indirect question?' },
            { prompt: '—¿Sabes si hay ascensor? —___, hay uno.', options: ['Qué', 'Si', 'Sí'], answer: 2, why: 'La respuesta afirmativa es «sí», con tilde (yes).', en: '—Do you know if there is a lift? —Yes, there is one.' },
          ] },
        ] },
        { title: 'Qué, cuál y las preposiciones · Qué, cuál and prepositions', mascot: '/brand/mascot/speaking.webp', coach: 'Todo igual que en la pregunta. Everything as in the question.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'QUÉ · CUÁL · A QUÉ HORA…', question: '¿Sabes cuál es su número?', en: 'Do you know what his number is?', formula: ['¿Qué quieres? → Dime qué quieres.', '¿A qué hora abre? → No sé a qué hora abre.'],
            meaning: 'Todo lo que aprendiste en la clase 023 sigue igual: **qué** + nombre, **cuál** + ser o para elegir, **cuánto / cuánta / cuántos / cuántas** con concordancia, y la preposición **delante**: a qué hora, con quién, de dónde.',
            examples: [
              { es: '[[No sé|violet]] [[qué|blue]] autobús va al centro.', en: 'I don’t know which bus goes to the city centre.' },
              { es: '¿[[Sabes|violet]] [[cuál|blue]] es el número de Elena?', en: 'Do you know what Elena’s number is?' },
              { es: 'Hay dos llaves y [[no sé|violet]] [[cuál|blue]] es la del garaje.', en: 'There are two keys and I don’t know which one is for the garage.' },
              { es: '[[No sé|violet]] [[con quién|blue]] vive Elena.', en: 'I don’t know who Elena lives with.' },
              { es: '¿[[Me puedes decir|violet]] [[cuánto|blue]] cuesta la lavandería?', en: 'Can you tell me how much the laundry room costs?' },
            ],
            note: 'Con preposición, la preposición va delante, como en la pregunta: «¿**Con quién** vive?» → «No sé **con quién** vive» (no «no sé quién vive con»).' },
          { kind: 'decide', title: '¿Si o palabra interrogativa? · Si or a question word?', steps: [
            { q: 'Piensa en la pregunta directa. ¿Empieza con una palabra interrogativa? (¿Dónde…?, ¿A qué hora…?, ¿Cuál…?)', yes: 'Usa **la misma palabra, con tilde**: «No sé **a qué hora** abre».', no: 'next' },
            { q: '¿La respuesta es «sí» o «no»? (¿Hay ascensor? ¿Viene hoy?)', yes: 'Usa **si**, sin tilde: «No sé **si** viene hoy».', no: 'Vuelve a mirar la pregunta: siempre es una de las dos.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿De dónde es Elena? → No sé ___ es Elena.', options: ['de donde', 'dónde', 'de dónde'], answer: 2, why: 'La preposición va delante, y «dónde» con tilde: de dónde.', en: 'Where is Elena from? → I don’t know where Elena is from.' },
            { prompt: 'Hay dos lavadoras. ¿Sabes ___ funciona?', options: ['qué', 'cuál', 'quién'], answer: 1, why: 'Elegir entre opciones conocidas: cuál.', en: 'There are two washing machines. Do you know which one works?' },
            { prompt: '¿Cuántos apartamentos hay? → No sé ___ apartamentos hay.', options: ['cuanto', 'cuántos', 'cuántas'], answer: 1, why: '«Apartamentos» es masculino plural: cuántos, con tilde.', en: 'How many apartments are there? → I don’t know how many apartments there are.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Pregunta dentro, tilde dentro.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno busca el problema antes de ver la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'No sé donde está el banco.', right: 'No sé dónde está el banco.', why: 'Es una pregunta (¿dónde está?) dentro de otra frase: «dónde» conserva la tilde.' },
            { wrong: 'No sé qué viene el técnico.', right: 'No sé si viene el técnico.', why: '«¿Viene el técnico?» se responde con sí o no: no tiene palabra interrogativa. Se une con «si».' },
            { wrong: 'No sé que si hay ascensor.', right: 'No sé si hay ascensor.', why: 'Después de «no sé» va directamente «si» o la palabra interrogativa. No añadas «que».' },
            { wrong: 'Dime que quieres.', right: 'Dime qué quieres.', why: 'Sin tilde, «dime que quieres» significa «tell me that you want (it)». Para preguntar «what»: qué, con tilde.' },
            { wrong: '¿No sé cuándo abre la farmacia?', right: 'No sé cuándo abre la farmacia.', why: '«No sé…» no pregunta: es una afirmación. Los signos ¿ ? van solo si toda la frase pregunta: «¿Sabes cuándo abre?».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Abren los domingos? → No sé ___ abren los domingos.', options: ['qué', 'si', 'que si'], answer: 1, why: 'Pregunta de sí o no: si, sin «que».', en: 'Do they open on Sundays? → I don’t know if they open on Sundays.' },
            { prompt: '¿Qué frase pregunta «what do you need»?', options: ['Dime qué necesitas.', 'Dime si necesitas.', 'Dime que necesitas.'], answer: 0, why: '«Qué» con tilde pregunta. «Dime que necesitas» = tell me that you need (it).', en: 'Which sentence asks “what do you need”?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres cosas que no sabe de su barrio o de su trabajo: una con «dónde», una con «a qué hora» y una con «si». Ejemplo: «No sé si la biblioteca abre los sábados».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Marta y don Héctor', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Las preguntas de Marta · Marta’s questions', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres don Héctor y tu alumno es Marta. Después tu alumno toca cada palabra marcada y explica por qué está allí.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿es la frase de entrada, una palabra interrogativa o «si»? (Tap each marked word.)' } },
          { kind: 'explore', title: 'Primer día en Los Almendros', setting: 'Por la mañana, en la portería del edificio Los Almendros, en Medellín. Marta, la nueva vecina del 502, habla con don Héctor, el portero. Los dos usan usted. (In the morning, at the front desk of the Los Almendros building in Medellín. Marta, the new tenant in 502, talks to Héctor, the doorman.)', lines: [
            { who: 'Marta', text: 'Buenos días, don Héctor. Perdone, ¿[[me puede decir|violet]] [[dónde|blue]] está la lavandería del edificio?', en: 'Good morning, Héctor. Excuse me, can you tell me where the building’s laundry room is?' },
            { who: 'Don Héctor', text: 'Claro, señora Marta. Está en el sótano, al lado del garaje. Abre a las siete de la mañana.', en: 'Of course, Marta. It’s in the basement, next to the garage. It opens at seven in the morning.' },
            { who: 'Marta', text: 'Perfecto. ¿Y [[sabe|violet]] [[si|orange]] hay que pagar con monedas?', en: 'Perfect. And do you know if you have to pay with coins?' },
            { who: 'Don Héctor', text: 'Sí, con monedas de mil. Pero ojo: [[no sé|violet]] [[si|orange]] funciona la secadora. Ayer no funcionaba.', en: 'Yes, with thousand-peso coins. But careful: I don’t know if the dryer works. Yesterday it wasn’t working.' },
            { who: 'Marta', text: 'Vaya. ¿Y [[sabe|violet]] [[cuándo|blue]] viene el técnico?', en: 'Oh dear. And do you know when the technician is coming?' },
            { who: 'Don Héctor', text: 'Esta semana, pero [[no sé|violet]] [[qué|blue]] día. Le pregunto a la administradora y le aviso.', en: 'This week, but I don’t know which day. I’ll ask the building manager and let you know.' },
            { who: 'Marta', text: 'Muchas gracias. Otra cosa: espero un paquete. [[Dígame|violet]] [[cuál|blue]] es el mejor horario para recibirlo.', en: 'Thank you very much. Another thing: I’m expecting a parcel. Tell me what the best time to receive it is.' },
            { who: 'Don Héctor', text: 'Yo estoy aquí de siete a tres; después está mi compañero Julián. ¿Y usted sabe [[a qué hora|blue]] llega el paquete?', en: 'I’m here from seven to three; after that my colleague Julián is here. And do you know what time the parcel arrives?' },
            { who: 'Marta', text: 'No, [[no lo sé|violet]]. La tienda solo dice «entre el lunes y el miércoles».', en: 'No, I don’t know. The shop only says “between Monday and Wednesday”.' },
            { who: 'Don Héctor', text: 'No se preocupe. Si llega por la tarde, Julián lo recibe y se lo guarda.', en: 'Don’t worry. If it arrives in the afternoon, Julián will take it and keep it for you.' },
            { who: 'Marta', text: 'Muy amable. Una última pregunta: [[no sé|violet]] [[quién|blue]] vive en el 503. Ayer una señora muy simpática me saludó en el ascensor.', en: 'Very kind. One last question: I don’t know who lives in 503. Yesterday a very friendly woman said hello to me in the lift.' },
            { who: 'Don Héctor', text: '¡Es Elena Cardona, seguro! Ella le puede explicar [[cómo|blue]] funciona todo en el edificio.', en: 'That must be Elena Cardona! She can explain to you how everything works in the building.' },
          ], notes: {
            'me puede decir': 'Frase de entrada amable, con usted: **¿me puede decir…?** Después va la pregunta como es: dónde está.',
            'dónde': 'La palabra interrogativa conserva la tilde dentro de la frase. Después, el verbo: dónde **está**.',
            'sabe': '¿**Sabe**…? (usted) / ¿**Sabes**…? (tú): Do you know…? Toda la frase pregunta, así que lleva ¿ ?.',
            'si': 'Pregunta de sí o no (¿hay que pagar?, ¿funciona?): se une con **si**, sin tilde.',
            'no sé': 'No es una pregunta: quien habla dice que no tiene el dato. Por eso no lleva ¿ ?.',
            'cuándo': '¿Cuándo viene? → sabe **cuándo** viene. Con tilde: es una pregunta.',
            'qué': 'Qué + nombre (qué día), como en la pregunta directa: ¿qué día viene?',
            'Dígame': 'Imperativo de **decir** con usted (con tú: **dime**). Después, la pregunta: cuál es…',
            'cuál': 'Cuál + **es**: un dato concreto, como en «¿cuál es el mejor horario?».',
            'a qué hora': 'La preposición va delante, igual que en la pregunta directa: ¿**a qué hora** llega?',
            'no lo sé': 'Respuesta corta: **lo** reemplaza toda la pregunta (no sé a qué hora llega).',
            'quién': 'Una persona: **quién**, con tilde, también dentro de la frase.',
            'cómo': 'Después de **explicar** también puede ir una pregunta indirecta: cómo funciona todo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Dónde está la lavandería?', options: ['En el sótano, al lado del garaje.', 'En la portería.', 'En el apartamento 503.'], answer: 0, why: '«Está en el sótano, al lado del garaje».', en: 'Where is the laundry room?' },
            { prompt: '¿Qué no sabe don Héctor?', options: ['Qué día viene el técnico.', 'Dónde está la lavandería.', 'Si hay que pagar con monedas.'], answer: 0, why: '«Esta semana, pero no sé qué día».', en: 'What doesn’t Héctor know?' },
            { prompt: '¿Quién puede explicarle a Marta cómo funciona el edificio?', options: ['Elena, la vecina del 503.', 'Julián, el otro portero.', 'La administradora.'], answer: 0, why: '«Ella le puede explicar cómo funciona todo en el edificio».', en: 'Who can explain to Marta how the building works?' },
          ] },
        ] },
        { title: '¿Si o palabra interrogativa? · Si or a question word?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'lead', text: 'Marta escribe en su libreta las preguntas para Elena. Mira cada pregunta directa: dentro de «No sé…», ¿va con **si** o con una **palabra interrogativa**?', en: 'Marta writes the questions for Elena in her notebook. Look at each direct question: inside “No sé…”, does it go with “si” or with a question word?' },
          { kind: 'classify', title: 'La libreta de Marta · Marta’s notebook', categories: [
            { id: 'si', label: 'SI · pregunta de sí o no', tone: 'orange' },
            { id: 'palabra', label: 'PALABRA INTERROGATIVA · dónde, qué, cuál…', tone: 'blue' },
          ], items: [
            { text: '¿Hay gimnasio en el edificio?', answer: 'si', why: 'Respuesta sí o no → No sé si hay gimnasio.' },
            { text: '¿Dónde se deja la basura?', answer: 'palabra', why: 'Empieza con «dónde» → No sé dónde se deja la basura.' },
            { text: '¿Se pueden tener perros?', answer: 'si', why: 'Respuesta sí o no → No sé si se pueden tener perros.' },
            { text: '¿Cuál es el número de la administradora?', answer: 'palabra', why: 'Empieza con «cuál» → No sé cuál es el número.' },
            { text: '¿Cierra la portería por la noche?', answer: 'si', why: 'Respuesta sí o no → No sé si cierra la portería.' },
            { text: '¿A qué hora pasa el camión de la basura?', answer: 'palabra', why: 'Empieza con «a qué hora» → No sé a qué hora pasa.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno elige dos preguntas de la libreta y se las hace a ti con «¿Sabes…?». Tú respondes con datos de tu edificio o con «No, no lo sé».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Palabra con tilde o si. A question word with an accent, or si.',
      steps: [
        { title: 'La primera semana · The first week', blocks: [
          { kind: 'choice', items: [
            { context: 'Marta busca dinero en efectivo. (Marta needs cash.)', prompt: '¿Sabe ___ está el cajero automático más cercano?', options: ['dónde', 'donde', 'si'], answer: 0, why: 'La pregunta es «¿dónde está?»: dónde, con tilde.', en: 'Do you know where the nearest cash machine is?' },
            { context: 'Por la noche, en la portería. (At night, at the front desk.)', prompt: 'No sé ___ el edificio tiene portero por la noche.', options: ['qué', 'si', 'sí'], answer: 1, why: '¿Tiene portero? Respuesta sí o no: si, sin tilde.', en: 'I don’t know if the building has a doorman at night.' },
            { context: 'Marta habla con Elena. (Marta talks to Elena.)', prompt: '¿Sabes ___ se llama el portero de la noche?', options: ['cómo', 'qué', 'cuál'], answer: 0, why: 'La pregunta directa es «¿cómo se llama?»: la misma palabra, cómo.', en: 'Do you know what the night doorman is called?' },
            { context: 'Marta tiene dos llaves. (Marta has two keys.)', prompt: 'No sé ___ es la llave del garaje.', options: ['qué', 'quién', 'cuál'], answer: 2, why: 'Elegir una entre dos llaves: cuál.', en: 'I don’t know which one is the garage key.' },
            { context: 'Marta quiere ir a un gimnasio. (Marta wants to join a gym.)', prompt: '¿Me puedes decir ___ cuesta el gimnasio del barrio?', options: ['cuánto', 'cuanto', 'qué'], answer: 0, why: 'El precio: ¿cuánto cuesta? → cuánto, con tilde.', en: 'Can you tell me how much the local gym costs?' },
          ] },
        ] },
        { title: '¿Con tilde o sin tilde? · Accent or no accent?', blocks: [
          { kind: 'classify', title: '¿Pregunta o no? · Question or not?', categories: [
            { id: 'con', label: 'CON TILDE · hay una pregunta (qué, dónde, cuándo…)', tone: 'blue' },
            { id: 'sin', label: 'SIN TILDE · no hay pregunta (que, donde, cuando…)', tone: 'neutral' },
          ], items: [
            { text: 'Don Héctor dice ___ la secadora ya funciona. (que / qué)', answer: 'sin', why: '«Dice que…» = says that…: no hay pregunta. Que, sin tilde.' },
            { text: 'Elena no recuerda ___ dejó las llaves. (donde / dónde)', answer: 'con', why: '¿Dónde dejó las llaves? Es una pregunta: dónde.' },
            { text: 'Vivo en la calle ___ está el banco. (donde / dónde)', answer: 'sin', why: '«La calle donde…» señala un lugar (clase 067): no hay pregunta.' },
            { text: '¿Sabes ___ viene el técnico? (cuando / cuándo)', answer: 'con', why: '¿Cuándo viene? Es una pregunta: cuándo.' },
            { text: '___ llega un paquete, Julián lo recibe. (Cuando / Cuándo)', answer: 'sin', why: '«Cuando llega…» = when (time clause): no pregunta. Sin tilde.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'No sé donde está la farmacia.', ok: false, options: ['No sé dónde está la farmacia.', 'No sé que dónde está la farmacia.', '¿No sé dónde está la farmacia?'], answer: 0, why: 'Pregunta dentro de la frase: dónde, con tilde, sin «que» y sin ¿ ?.' },
            { sentence: '¿Sabes si el gimnasio abre los domingos?', ok: true, why: 'Correcta: «¿Abre los domingos?» es de sí o no → si. Y toda la frase pregunta: ¿ ?.' },
            { sentence: 'Don Héctor no sabe qué viene el técnico hoy.', ok: false, options: ['Don Héctor no sabe sí viene el técnico hoy.', 'Don Héctor no sabe si viene el técnico hoy.', 'Don Héctor no sabe que si viene el técnico hoy.'], answer: 1, why: '«¿Viene el técnico hoy?» se responde con sí o no: si, sin tilde y sin «que».' },
            { sentence: 'Marta no recuerda cuál es la clave del wifi.', ok: true, why: 'Correcta: «¿Cuál es la clave?» → no recuerda cuál es la clave.' },
            { sentence: '¿Me puede decir que a qué hora pasa el camión de la basura?', ok: false, options: ['¿Me puede decir a que hora pasa el camión de la basura?', '¿Me puede decir si a qué hora pasa el camión de la basura?', '¿Me puede decir a qué hora pasa el camión de la basura?'], answer: 2, why: 'Después de «¿me puede decir…?» va directamente la pregunta: a qué hora, con tilde y sin «que».' },
            { sentence: 'Dime que necesitas y te ayudo.', ok: false, options: ['Dime qué necesitas y te ayudo.', 'Dime si qué necesitas y te ayudo.', '¿Dime qué necesitas y te ayudo?'], answer: 0, why: 'Aquí se pregunta «what do you need?»: qué, con tilde. Es una orden amable, no una pregunta: sin ¿ ?.' },
          ] },
        ] },
        { title: 'En el ascensor · In the lift', blocks: [
          { kind: 'chat-fill', title: 'Marta y Elena se encuentran · Marta and Elena meet', lines: [
            { who: 'Marta', text: '¡Hola, Elena! ¿Ya sabes ___ empieza la reunión de vecinos?', options: ['que a qué hora', 'a qué hora', 'a que hora'], answer: 1, why: 'La pregunta es «¿a qué hora empieza?»: preposición delante y qué con tilde.' },
            { who: 'Elena', text: 'Sí, a las siete. Pero no sé ___ viene la administradora.', options: ['qué', 'si', 'sí'], answer: 1, why: '«¿Viene la administradora?» es de sí o no: si, sin tilde.' },
            { who: 'Marta', text: '¿Y sabes ___ vamos a hablar?', options: ['de que', 'qué', 'de qué'], answer: 2, why: 'Hablar **de** algo: ¿de qué vamos a hablar? La preposición va delante.' },
            { who: 'Elena', text: 'Del ascensor y del jardín, creo. Oye, ¿sabes ___ es el teléfono de Julián?', options: ['qué', 'quién', 'cuál'], answer: 2, why: 'Un dato concreto con «es»: cuál es el teléfono.' },
            { who: 'Marta', text: 'No, no lo sé. Pregúntale a don Héctor.' },
            { who: 'Elena', text: 'Bueno. ¿Y el café en mi casa? ___ qué día tienes libre.', options: ['Dime si', 'Dime', 'Dime que'], answer: 1, why: '«Dime» + la pregunta (¿qué día tienes libre?), sin «que» ni «si».' },
            { who: 'Marta', text: 'El sábado por la tarde. ¿Te parece bien?' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'sé', 'dónde', 'está', 'la', 'farmacia.'], accept: ['No sé dónde está la farmacia.'], en: 'I don’t know where the pharmacy is.' },
            { tiles: ['¿Sabes', 'si', 'hay', 'ascensor?'], accept: ['¿Sabes si hay ascensor?'], en: 'Do you know if there is a lift?' },
            { tiles: ['Dime', 'qué', 'día', 'tienes', 'libre.'], accept: ['Dime qué día tienes libre.'], en: 'Tell me which day you are free.' },
            { tiles: ['¿Me', 'puede', 'decir', 'a', 'qué', 'hora', 'abre', 'el', 'banco?'], accept: ['¿Me puede decir a qué hora abre el banco?'], en: 'Can you tell me what time the bank opens?' },
          ] },
        ] },
        { title: 'Pregunta con cortesía · Ask politely', blocks: [
          { kind: 'rewrite', title: 'De pregunta directa a indirecta · From direct to indirect', items: [
            { prompt: '¿Dónde está la parada del autobús?', instruction: 'Empieza con «No sé». (Start with “No sé”.)', accept: ['No sé dónde está la parada del autobús'] },
            { prompt: '¿Viene hoy el técnico?', instruction: 'Empieza con «¿Sabes…?». (Start with “¿Sabes…?”.)', accept: ['Sabes si viene hoy el técnico', 'Sabes si el técnico viene hoy', 'Sabes si hoy viene el técnico', 'Sabes si viene el técnico hoy'] },
            { prompt: '¿Qué necesitas?', instruction: 'Empieza con «Dime». (Start with “Dime”.)', accept: ['Dime qué necesitas'] },
            { prompt: '¿Cuál es el apartamento de Elena?', instruction: 'Con usted. Empieza con «¿Me puede decir…?». (Formal; start with “¿Me puede decir…?”.)', accept: ['Me puede decir cuál es el apartamento de Elena'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno piensa en un lugar nuevo (un hotel, una oficina, un barrio) y hace tres preguntas indirectas: una con «¿Me puede decir…?», una con «¿Sabe si…?» y una con «No sé…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Elena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'La vecina del 503 · The neighbour in 503', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué manda Elena el audio?). Segunda escucha: tu alumno levanta la mano con cada pregunta dentro de una frase (no recuerdo a qué hora, ¿sabes si…?). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en las preguntas dentro de una frase: «no recuerdo a qué hora…», «¿sabes si…?». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Elena', channel: 'MENSAJE DE VOZ · DE ELENA PARA MARTA', src: '/audio/grammar-live/383.mp3',
            before: 'Elena, la vecina del 503, le manda un audio a Marta. ¿Qué crees que dice: una bienvenida, información del barrio, preguntas…? (Elena sends Marta a voice message. What do you think she says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Elena se queja del ruido del apartamento de Marta.', 'Elena explica cómo funciona la lavandería.', 'Elena da la bienvenida, responde una pregunta y hace dos preguntas a Marta.'], answer: 2, why: 'Dice «¡Bienvenida!», responde dónde hay un supermercado y pregunta por el calentador y por un día libre.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Dónde hay un supermercado?', options: ['Al lado de la portería.', 'En el centro.', 'En la esquina.'], answer: 2, why: '«Hay uno en la esquina».', en: 'Where is there a supermarket?' },
              { prompt: '¿Qué no sabe Elena de la reunión del viernes?', options: ['Si viene la administradora.', 'Dónde es.', 'A qué hora empieza.'], answer: 2, why: '«Todavía no sé a qué hora empieza».', en: 'What doesn’t Elena know about Friday’s meeting?' },
              { prompt: '¿Qué le pregunta Elena a Marta?', options: ['Si su apartamento tiene un calentador nuevo.', 'Dónde está la lavandería.', 'Cuánto cuesta su apartamento.'], answer: 0, why: '«¿Sabes si tu apartamento tiene calentador nuevo?».', en: 'What does Elena ask Marta?' },
              { prompt: '¿Por qué quiere saber Elena qué día tiene libre Marta?', options: ['Para ir juntas a la reunión.', 'Para llamar al técnico.', 'Para invitarla a un café.'], answer: 2, why: '«Dime qué día tienes libre: quiero invitarte a un café».', en: 'Why does Elena want to know which day Marta is free?' },
            ],
            transcript: 'Hola, Marta, soy Elena, tu vecina del 503. Don Héctor me dio tu número. ¡Bienvenida al edificio! Me preguntaste [[dónde|blue]] hay un supermercado cerca: hay uno en la esquina, pero [[no recuerdo|violet]] [[a qué hora|blue]] cierra. Creo que a las nueve. Otra cosa: el viernes hay una reunión de vecinos en la portería. Todavía [[no sé|violet]] [[a qué hora|blue]] empieza; mañana te digo. Y una pregunta para ti: ¿[[sabes|violet]] [[si|orange]] tu apartamento tiene calentador nuevo? El mío no funciona bien y [[no sé|violet]] [[a quién|blue]] tengo que llamar. Ah, y [[dime|violet]] [[qué|blue]] día tienes libre: quiero invitarte a un café en mi casa. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Elena. Tu alumno es Marta y responde al audio: le dice qué día tiene libre, si su calentador es nuevo o si no lo sabe, y hace una pregunta indirecta a Elena («¿Sabes si…?», «Dime dónde…»).', self: 'Responde a Elena en voz alta como Marta: qué día tienes libre, si tu calentador es nuevo (o «no lo sé») y una pregunta para ella con «¿Sabes si…?». (Answer as Marta, with one indirect question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'En un lugar nuevo', coach: 'Pregunta con cortesía. Ask politely.',
      steps: [
        { title: 'Un lugar nuevo · A new place', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres el portero o un vecino del edificio. Tu alumno acaba de llegar a un edificio o a un barrio nuevo (real o inventado) y pregunta. Si tu alumno hace una pregunta directa, tú la repites en forma indirecta y sigues con la repregunta.', self: 'Imagina que acabas de llegar a un edificio o a un barrio nuevo. Lee la tarjeta, haz las preguntas en voz alta y responde tú también. (Imagine you have just moved somewhere new.)' } },
          { kind: 'talk', cards: [
            { q: 'Acabas de llegar. Pregunta al portero por tres lugares del barrio. · You have just arrived. Ask the doorman about three places in the area.', followUps: ['¿Y está lejos? (Is it far?)', '¿Cómo llego? (How do I get there?)'], phrases: ['¿[[Me puede decir|violet]] [[dónde|blue]] hay…?', '¿[[Sabe|violet]] [[dónde|blue]] está…?', 'Perdone, ¿[[me puede decir|violet]] [[cómo|blue]] llego a…?'], hint: 'Frase de entrada + dónde / cómo, con tilde. Con el portero, usted.', example: 'Perdone, ¿me puede decir dónde hay una farmacia? ¿Y sabe dónde está la parada del autobús? Ah, y ¿me puede decir cómo llego al centro?', next: 'Ahora, los horarios.', teacher: 'Tú respondes con datos sencillos y dejas un dato sin saber: «Eso no lo sé». Así tu alumno oye «no lo sé».' },
            { q: 'Pregunta por los horarios: el banco, el supermercado, la lavandería. · Ask about opening hours.', followUps: ['¿Y los domingos? (And on Sundays?)', '¿Hasta qué hora? (Until what time?)'], phrases: ['¿[[Sabe|violet]] [[a qué hora|blue]] abre / cierra…?', '¿[[Me puede decir|violet]] [[qué|blue]] días…?', '¿[[Sabe|violet]] [[hasta qué hora|blue]]…?'], hint: 'La preposición va delante: a qué hora, hasta qué hora.', example: '¿Sabe a qué hora abre el banco? ¿Y me puede decir qué días abre la lavandería?', next: 'Ahora, preguntas de sí o no.' },
            { q: 'Pregunta tres cosas de sí o no sobre el edificio: mascotas, bicicletas, ascensor, gimnasio… · Ask three yes/no questions about the building.', followUps: ['¿Y hay que pagar? (Do you have to pay?)', '¿Y para las visitas? (And for visitors?)'], phrases: ['¿[[Sabe|violet]] [[si|orange]] se pueden tener…?', '¿[[Me puede decir|violet]] [[si|orange]] hay…?', '¿[[Sabe|violet]] [[si|orange]] hay que…?'], hint: 'Sin palabra interrogativa: si, sin tilde y sin «que».', example: '¿Sabe si se pueden tener perros? ¿Me puede decir si hay gimnasio? ¿Y sabe si hay que pagar el garaje aparte?', next: 'Ahora, tú no sabes.' },
            { q: 'Ahora un turista te pregunta por tu ciudad, y tú no sabes todo. Responde con «No sé…». · A tourist asks about your city and you don’t know everything.', followUps: ['¿Y quién lo sabe? (Who knows?)', '¿Dónde puedo preguntar? (Where can I ask?)'], phrases: ['[[No sé|violet]] [[si|orange]]…, pero…', '[[No recuerdo|violet]] [[cuánto|blue]] cuesta…', 'Lo siento, [[no lo sé|violet]].'], hint: 'Di qué no sabes con «no sé» + la pregunta, y ofrece una alternativa.', example: 'No sé si el museo abre los lunes, pero en la oficina de turismo lo saben. Y no recuerdo cuánto cuesta la entrada; creo que es barata.', next: 'Ahora, una vecina.', teacher: 'Tú haces las preguntas del turista con frases directas («¿El museo abre los lunes?») y tu alumno responde con «No sé si…».' },
            { q: 'Hablas con una vecina simpática. Pídele datos con «¿Sabes…?» y «Dime…». · You talk to a friendly neighbour (tú).', followUps: ['¿Y cuál me recomiendas? (Which one do you recommend?)', '¿Con quién vives? (Who do you live with?)'], phrases: ['¿[[Sabes|violet]] [[quién|blue]]…?', '¿[[Sabes|violet]] [[cuál|blue]] es…?', '[[Dime|violet]] [[qué|blue]]…'], hint: 'Con una vecina, tú: ¿sabes…?, dime… Cuál para elegir, qué + nombre.', example: '¿Sabes quién vive en el 401? ¿Y sabes cuál es la mejor panadería del barrio? Dime qué día te va bien para un café.', next: 'Ahora, tu vida real.' },
            { q: '¿Qué cosas no sabes todavía de tu barrio, de tu trabajo o de tu ciudad? · What don’t you know yet about your area, work or city?', followUps: ['¿A quién puedes preguntar? (Who can you ask?)', '¿Cómo vas a preguntar? (How will you ask?)'], phrases: ['[[No sé|violet]] [[dónde|blue]]…', '[[No sé|violet]] [[si|orange]]…', 'Voy a preguntar [[si|orange]]…'], hint: 'Tres frases reales: una con «dónde» o «cuándo», una con «si» y una con «qué» o «cuál».', example: 'No sé dónde hay una buena tienda de bicicletas. No sé si la biblioteca abre en agosto. Y no sé qué autobús va directo al aeropuerto.', teacher: 'Tú respondes a sus dudas reales si las sabes; si no, contestas: «No lo sé, pero…».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú llegas a un lugar nuevo y haces las preguntas («¿Me puede decir dónde…?», «¿Sabe si…?»), y tu alumno responde como portero o vecino.', self: 'Ahora cambia de papel: eres el portero. Responde en voz alta a tus propias preguntas y usa «no lo sé» una vez. (Now answer as the doorman.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje a la administradora', coach: 'Preguntas amables por escrito. Polite questions in writing.',
      steps: [
        { title: 'Pedir información · Asking for information', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada pregunta: ¿palabra interrogativa con tilde o «si»? ¿Lleva ¿ ? o no? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada pregunta: ¿tilde o «si»? ¿Lleva ¿ ? o punto? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un correo para la administración · An email to the building manager', situation: 'Eres Marta (o eres tú, en un edificio nuevo). Escribes un correo a la señora Patricia Ospina, la administradora del edificio, para pedir información. Usas usted. (You are Marta, or yourself in a new building. Write an email to Patricia Ospina, the building manager, asking for information. Use usted.)', task: [
            'Saluda y di quién eres y en qué apartamento vives. (Say hello, who you are and your apartment.)',
            'Haz dos preguntas indirectas con palabra interrogativa: dónde, cuándo, a qué hora, qué, cuál… (Two indirect questions with a question word.)',
            'Haz una pregunta indirecta de sí o no con «si». (One yes/no indirect question with “si”.)',
            'Usa una frase de entrada amable: ¿me puede decir…?, ¿podría decirme…?, ¿sabe…? (Use a polite frame.)',
            'Da las gracias y despídete. (Say thank you and goodbye.)',
          ], starters: ['Buenos días, señora Ospina:', 'Soy… , la nueva vecina / el nuevo vecino del…', 'Le escribo porque tengo algunas preguntas.', '¿Me puede decir…?', 'Además, no sé si…', 'Muchas gracias. Un saludo,'],
            words: ['no sé', 'no recuerdo', '¿me puede decir…?', '¿podría decirme…?', '¿sabe…?', 'dígame', 'si', 'dónde', 'cuándo', 'a qué hora', 'qué', 'cuál'],
            model: 'Buenos días, señora Ospina: Soy Marta Rojas, la nueva vecina del apartamento 502. Le escribo porque tengo algunas preguntas. ¿[[Me puede decir|violet]] [[cuándo|blue]] tengo que pagar la cuota del edificio? Además, [[no sé|violet]] [[si|orange]] se pueden dejar bicicletas en el garaje. Don Héctor no sabe [[a qué hora|blue]] empieza la reunión del viernes: ¿[[podría decirme|violet]] la hora exacta? Y, por favor, [[dígame|violet]] [[qué|blue]] documentos necesita de mí. Muchas gracias. Un saludo, Marta Rojas.',
            minWords: 50,
            checks: [
              { label: 'Una palabra interrogativa con tilde (a question word with its accent)', pattern: '(?<!\\p{L})(?:qué|dónde|cuándo|cuál|cuáles|quién|quiénes|cómo|cuánto|cuánta|cuántos|cuántas)(?!\\p{L})', tip: 'Mete una pregunta con tilde: «¿Me puede decir cuándo…?», «No sé dónde…».' },
              { label: 'La palabra «si» (for a yes/no question)', pattern: '(?<!\\p{L})si(?!\\p{L})', tip: 'Añade una pregunta de sí o no: «No sé si se pueden dejar bicicletas…».' },
              { label: 'Una frase de entrada (a frame: no sé, ¿me puede decir…?, ¿sabe…?)', pattern: '(?<!\\p{L})(?:no\\s+s[eé]|no\\s+recuerdo|me\\s+puede\\s+decir|me\\s+podr[ií]a\\s+decir|podr[ií]a\\s+decirme|sabe|d[ií]game)(?!\\p{L})', tip: 'Empieza la pregunta con una frase amable: «¿Me puede decir…?», «¿Sabe…?», «No sé…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:s[eé]|sabe|sabes|recuerdo|decir|decirme|d[ií]game|dime)\\s+(?:donde|cuando|cuanto|cual|quien)(?!\\p{L})', why: 'Si hay una pregunta dentro de la frase, la palabra interrogativa lleva tilde: **no sé dónde**, **¿sabe cuándo…?**' },
              { pattern: '(?<!\\p{L})(?:s[eé]|sabe|sabes|recuerdo|decir|decirme|d[ií]game|dime)\\s+que\\s+(?:si|qu[eé]|d[oó]nde|cu[aá]ndo|a\\s+qu[eé])(?!\\p{L})', why: 'Después de «no sé», «¿me puede decir…?» o «dígame» va directamente la pregunta, sin «que»: **no sé si…**, **dígame dónde…**' },
              { pattern: '(?<!\\p{L})(?:s[eé]|sabe|sabes|recuerdo|decirme)\\s+sí(?!\\p{L})', why: 'Para una pregunta de sí o no dentro de la frase: **si**, sin tilde. «Sí» con tilde significa yes.' },
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
            { tone: 'violet', label: 'FRASE DE ENTRADA', formula: 'no sé · no recuerdo · ¿sabes / sabe…? · dime / dígame · ¿me puedes / me puede decir…?', example: '¿Me puede decir dónde está la lavandería?', caption: 'abre la pregunta; ¿ ? solo si toda la frase pregunta', en: 'introduces the question; ¿ ? only if the whole sentence asks' },
            { tone: 'blue', label: 'PALABRA INTERROGATIVA', formula: 'dónde · cuándo · qué · cuál · quién · cómo · cuánto · a qué hora…', example: 'No sé a qué hora empieza la reunión.', caption: 'la misma palabra, con tilde, y el verbo después', en: 'the same word, with its accent, then the verb' },
            { tone: 'orange', label: 'SI · SÍ O NO', formula: '¿Viene? → no sé si viene', example: '¿Sabe si hay que pagar con monedas?', caption: 'preguntas de sí o no: si, sin tilde y sin «que»', en: 'yes/no questions: si, no accent, no “que”' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Piensa en la pregunta directa. Si empieza con una palabra interrogativa, la **conservas con tilde**: ¿Dónde está? → No sé **dónde** está. Si se responde con sí o no, usas **si**: ¿Viene? → No sé **si** viene. Nunca «que si» ni «que dónde». Y el verbo, en indicativo.', en: 'Think of the direct question. If it starts with a question word, keep it with its accent: “¿Dónde está?” → “No sé dónde está”. If the answer is yes or no, use “si”: “¿Viene?” → “No sé si viene”. Never “que si” or “que dónde”. And the verb stays in the indicative.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Perdone, ¿sabe ___ sale el próximo autobús a Bogotá?', options: ['a qué hora', 'a que hora', 'si a qué hora'], answer: 0, why: '¿A qué hora sale? → la preposición delante y qué con tilde.', en: 'Excuse me, do you know what time the next bus to Bogotá leaves?' },
            { prompt: 'No sé ___ mi hermana viene a cenar esta noche.', options: ['sí', 'qué', 'si'], answer: 2, why: '¿Viene a cenar? Sí o no: si.', en: 'I don’t know if my sister is coming to dinner tonight.' },
            { prompt: 'Hay tres camisetas. Dime ___ te gusta más.', options: ['qué', 'cuáles', 'cuál'], answer: 2, why: 'Elegir una entre varias: cuál.', en: 'There are three T-shirts. Tell me which one you like best.' },
            { prompt: '¿Me puedes decir ___ vas al concierto?', options: ['con quién', 'con quien', 'quién'], answer: 0, why: '¿Con quién vas? → preposición delante y quién con tilde.', en: 'Can you tell me who you are going to the concert with?' },
            { prompt: 'Elige la frase correcta.', options: ['No recuerdo dónde dejé el paraguas.', '¿No recuerdo dónde dejé el paraguas?', 'No recuerdo donde dejé el paraguas.'], answer: 0, why: '«No recuerdo» no pregunta (punto final) y «dónde» conserva la tilde.', en: 'Choose the correct sentence.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la estación.', blocks: [
          { kind: 'lead', text: 'Un mes después, Marta va de viaje y llega a la estación de autobuses de Cali. No conoce nada. Transforma sus preguntas directas en preguntas amables para la persona de información.', en: 'A month later, Marta goes on a trip and arrives at the bus station in Cali. She doesn’t know anything there. Turn her direct questions into polite questions for the information desk.' },
          { kind: 'rewrite', title: 'En la estación · At the station', items: [
            { prompt: '¿Dónde se compran los billetes?', instruction: 'Empieza con «¿Me puede decir…?». (Start with “¿Me puede decir…?”.)', accept: ['Me puede decir dónde se compran los billetes'] },
            { prompt: '¿Hay wifi en la sala de espera?', instruction: 'Empieza con «¿Sabe…?». (Start with “¿Sabe…?”.)', accept: ['Sabe si hay wifi en la sala de espera'] },
            { prompt: '¿Cuánto cuesta el billete a Medellín?', instruction: 'Empieza con «Dígame». (Start with “Dígame”.)', accept: ['Dígame cuánto cuesta el billete a Medellín'] },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Billete, boleto, pasaje', text: 'En España se dice **billete**; en muchos países de América se dice **boleto** o **pasaje**. La gramática de la pregunta es la misma: «¿Me puede decir cuánto cuesta el pasaje?».', en: 'In Spain people say “billete”; in many Latin American countries, “boleto” or “pasaje”. The grammar of the question is the same.' },
        ] },
        { title: 'Ampliación: preguntas más formales · Extension: more formal questions', mascot: '/brand/mascot/portrait.webp', coach: 'Para correos y oficinas. For emails and offices.', blocks: [
          { kind: 'tip', icon: '✍', title: 'Tres recursos más · Three more tools', text: 'En un correo o en una oficina: «**Me gustaría saber** si hay plazas libres», «¿**Podría decirme** cuándo abre la oficina?». Para una duda completa, añade **o no**: «No sé si viene **o no**». Y para contar la pregunta de otra persona en presente: «Elena **pregunta si** hay reunión», «Héctor **pregunta dónde** está el paquete».', en: 'In an email or an office: “I would like to know if there are places available”, “Could you tell me when the office opens?”. For a real doubt, add “o no”: “I don’t know whether he is coming or not.” And to report someone else’s question in the present: “Elena asks if there is a meeting”, “Héctor asks where the parcel is.”' },
          { kind: 'rewrite', title: 'Más formal · More formal', items: [
            { prompt: '¿Hay plazas en el curso de inglés?', instruction: 'Para un correo. Empieza con «Me gustaría saber». (Start with “Me gustaría saber”.)', accept: ['Me gustaría saber si hay plazas en el curso de inglés'] },
            { prompt: '¿Cuándo abre la oficina de correos?', instruction: 'Empieza con «¿Podría decirme…?». (Start with “¿Podría decirme…?”.)', accept: ['Podría decirme cuándo abre la oficina de correos'] },
            { prompt: 'Elena: «¿Viene la administradora?»', instruction: 'Cuenta la pregunta en presente. Empieza con «Elena pregunta». (Report it: “Elena pregunta…”.)', accept: ['Elena pregunta si viene la administradora', 'Elena pregunta si la administradora viene'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. Contar preguntas en pasado («Me preguntó si…») y los cambios de tiempo verbal se estudian en el estilo indirecto (nivel B).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 084 · Expresar duración y frecuencia en pasado', text: 'Ya pides información con cortesía y dices lo que no sabes: «¿Me puede decir a qué hora abre?», «No sé si viene». Con estas preguntas también hablas del pasado: «¿Sabes cuánto tiempo vivió en Cali?», «No recuerdo cuántas veces fui». En la clase 084 aprendes a responder: «Estuve tres días», «Iba cada verano». Es el paso natural: ya sabes preguntar «cuánto tiempo» y «con qué frecuencia»; ahora lo cuentas en pasado.', en: 'You can now ask for information politely and say what you don’t know: “Can you tell me what time it opens?”, “I don’t know if he is coming.” These questions also work for the past: “Do you know how long she lived in Cali?”, “I don’t remember how many times I went.” In class 084 you learn to answer: “I was there for three days”, “I used to go every summer.” It is the natural next step: you know how to ask “how long” and “how often”; now you tell it in the past.', href: '/gramatica/expresar-duracion-y-frecuencia-en-pasado', label: 'Ir a la clase 084' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué cosa no sabes todavía de esta semana?». Respuesta esperada: una frase con «no sé si…» y otra con «no sé dónde / cuándo / qué…». Tarea: escribir el correo de Escribir para un lugar real (un gimnasio, una academia, una oficina).' },
        ] },
      ],
    },
  ],
};
