import type { LiveLesson } from '../types';

/**
 * Lesson 343 · A1 · Oraciones simples: orden, afirmación y pregunta (course unit G043).
 * One scene runs through the class: Monday morning at a small design company.
 * Marta, the coordinator, finds a note from her boss Elena (away on a trip)
 * about Friday's lunch with clients at the office, but the note has a coffee
 * stain: the team must clarify who does what and when. Ana buys the bread
 * today, Diego calls the restaurant on Wednesday, Lucía prepares the drinks
 * (not the room), Marta prepares the room on Thursday, and Raúl, who does not
 * work on Thursdays, buys the flowers on Friday morning. In the voice message
 * Elena (Colombian voice, tú) explains the note. Content: subject + verb +
 * complements; the time phrase moves without changing the meaning or the
 * agreement; yes / no questions with the same order, intonation and ¿?;
 * qué / quién / cuándo / dónde + verb + subject; «no» right before the verb
 * (and before lo / la). Everything stays in the present; instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 343,
  level: 'A1',
  title: 'Oraciones simples: orden, afirmación y pregunta',
  subtitle: 'Decir quién hace qué y cuándo, preguntar con qué, quién o cuándo y negar con «no» antes del verbo, sin perder el sentido.',
  legend: [
    { tone: 'blue', label: 'SUJETO · quién hace la acción (who)' },
    { tone: 'teal', label: 'VERBO · la acción (the action)' },
    { tone: 'orange', label: 'PREGUNTA · qué, quién, cuándo… (question)' },
    { tone: 'violet', label: 'NO · la negación (not)' },
  ],
  optionNotes: {
    'trabaja no': '«No» va **antes** del verbo: «no trabaja».',
    'no trabajan': '«Trabajan» es para ellos o ellas. Para una sola persona: «no trabaj**a**».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Quién hace qué, y cuándo?', coach: 'Quién, qué, cuándo. Who, what, when.',
      steps: [
        { title: 'La nota · The note', blocks: [
          { kind: 'lead', text: 'Es lunes por la mañana en una pequeña empresa de diseño. Marta, la coordinadora, encuentra una nota de su jefa, Elena: «Ana compra pan hoy». El viernes hay una comida con clientes en la oficina y el equipo necesita saber **quién** hace **qué** y **cuándo**.', en: 'It is Monday morning at a small design company. Marta, the coordinator, finds a note from her boss, Elena: “Ana buys bread today”. On Friday there is a lunch with clients at the office, and the team needs to know who does what and when.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después tu alumno dice cuál da una información, cuál pregunta y cuál dice «no».', self: 'Lee las tres frases en voz alta. ¿Cuál da una información, cuál pregunta y cuál dice «no»? (Which one informs, which one asks, which one says no?)' } },
          { kind: 'compare', title: 'Tres frases de la oficina · Three sentences from the office', columns: [
            { tone: 'teal', label: 'AFIRMACIÓN · a statement', sentence: '[[Ana|blue]] [[compra|teal]] pan hoy.', idea: 'Da una información.', en: 'Ana buys bread today.' },
            { tone: 'orange', label: 'PREGUNTA · a question', sentence: '¿[[Qué|orange]] [[compra|teal]] [[Ana|blue]]?', idea: 'Busca una información.', en: 'What does Ana buy?' },
            { tone: 'violet', label: 'NEGACIÓN · a negative', sentence: '[[Ana|blue]] [[no|violet]] [[compra|teal]] queso.', idea: 'Dice que algo no es así.', en: 'Ana does not buy cheese.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Ana compra pan hoy» es…', options: ['una negación.', 'una afirmación: da una información.', 'una pregunta.'], answer: 1, why: 'No tiene ¿? ni «no»: es una afirmación.', en: '“Ana compra pan hoy” is…' },
            { prompt: '«¿Qué compra Ana?» pregunta por…', options: ['la cosa: pan.', 'la persona: Ana.', 'el día: hoy.'], answer: 0, why: '**Qué** pregunta por la cosa. La respuesta es «pan».', en: '“¿Qué compra Ana?” asks about…' },
            { prompt: 'En «Ana no compra queso», «no» va…', options: ['antes del verbo.', 'después del verbo.', 'al final.'], answer: 0, why: '«No» va justo antes del verbo: no compra.', en: 'In “Ana no compra queso”, “no” goes…' },
          ] },
        ] },
        { title: 'El orden básico · Basic word order', mascot: '/brand/mascot/studying.webp', coach: 'Primero quién, después la acción.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ORDEN BÁSICO', question: '¿Quién hace qué, y cuándo?', en: 'Who does what, and when?', formula: ['sujeto + verbo + qué + cuándo / dónde', 'Ana + compra + pan + hoy'],
            meaning: 'La frase normal tiene este orden: primero **quién** (el sujeto), después el **verbo** y después **qué** y **cuándo** o **dónde**. Muchas veces el sujeto no aparece: el verbo ya dice quién es («Compro pan»).',
            examples: [
              { es: '[[Ana|blue]] [[compra|teal]] pan hoy.', en: 'Ana buys bread today.' },
              { es: '[[Elena|blue]] [[está|teal]] de viaje esta semana.', en: 'Elena is away on a trip this week.' },
              { es: '[[Marta y Elena|blue]] [[trabajan|teal]] en una empresa de diseño.', en: 'Marta and Elena work at a design company.' },
              { es: '[[Compro|teal]] el café los lunes. (yo)', en: 'I buy the coffee on Mondays.' },
            ],
            note: 'El **cuándo** se mueve con libertad: «Ana compra pan **hoy**» = «**Hoy** Ana compra pan». El significado no cambia y el verbo sigue igual: concuerda con el sujeto, no con «hoy».' },
          { kind: 'table', title: 'Cada pieza responde a una pregunta · Each piece answers a question', head: ['¿Quién? (who)', '¿Qué hace? (action)', '¿Qué? (what)', '¿Cuándo? ¿Dónde? (when, where)'], rows: [
            ['[[Ana|blue]]', '[[compra|teal]]', 'pan', 'hoy'],
            ['[[Diego|blue]]', '[[llama|teal]]', 'al restaurante', 'el miércoles'],
            ['[[Los clientes|blue]]', '[[llegan|teal]]', '—', 'el viernes, a la oficina'],
          ], note: 'Primero la persona, después la acción. Las otras piezas van después; el **cuándo** también puede ir al principio.' },
          { kind: 'compare', title: 'Lo que se mueve y lo que no · What moves and what does not', columns: [
            { tone: 'blue', label: 'MISMO SIGNIFICADO · same meaning', sentence: '[[Ana|blue]] [[compra|teal]] pan hoy. = Hoy [[Ana|blue]] [[compra|teal]] pan.', idea: 'El cuándo va al principio o al final.', en: 'Ana buys bread today. = Today Ana buys bread.' },
            { tone: 'teal', label: 'OTRO SIGNIFICADO · different meaning', sentence: '[[Ana|blue]] [[llama|teal]] a Diego. ≠ [[Diego|blue]] [[llama|teal]] a Ana.', idea: 'Con dos personas, el orden cambia quién hace la acción.', en: 'Ana calls Diego. ≠ Diego calls Ana.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'La persona con «a»', text: 'En «Ana llama **a** Diego», Ana hace la acción y Diego la recibe. La persona después de **a** recibe la llamada.', en: 'In “Ana llama a Diego”, Ana does the action and Diego receives it. The person after “a” receives the call.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Hoy Ana compra pan» significa…', options: ['lo mismo que «Ana compra pan hoy».', 'que Ana compra pan mañana.', 'que Ana no compra pan.'], answer: 0, why: 'El cuándo se mueve, pero el significado no cambia.', en: '“Hoy Ana compra pan” means…' },
            { prompt: '«Diego llama a Ana»: ¿quién llama?', options: ['Ana.', 'Los dos.', 'Diego.'], answer: 2, why: 'La persona antes del verbo hace la acción: Diego.', en: '“Diego llama a Ana”: who is calling?' },
            { prompt: 'Hoy Elena y Ana ___ el café.', options: ['prepara', 'preparamos', 'preparan'], answer: 2, why: 'Elena y Ana = ellas → preparan. «Hoy» no cambia el verbo.', en: 'Today Elena and Ana make the coffee.' },
          ] },
        ] },
        { title: 'Preguntas · Questions', mascot: '/brand/mascot/speaking.webp', coach: '¿Sí o no? ¿O qué, quién, cuándo?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PREGUNTAS', question: '¿Sí o no? ¿O una información?', en: 'Yes / no, or a piece of information?', formula: ['¿ + frase normal + ? → ¿Ana compra pan hoy?', '¿ + qué / quién / cuándo + verbo + sujeto ? → ¿Qué compra Ana?'],
            meaning: 'Para una pregunta de **sí / no**, puedes usar el mismo orden de la afirmación: cambian la voz (sube al final ↗) y los signos **¿ ?**. Para buscar una información, la palabra de pregunta va primero y el **verbo va justo después**.',
            examples: [
              { es: '¿[[Ana|blue]] [[compra|teal]] pan hoy? — Sí.', en: 'Is Ana buying bread today? — Yes.' },
              { es: '¿[[Compra|teal]] [[Ana|blue]] pan hoy? — Sí.', en: 'The same question: the verb can also go first.' },
              { es: '¿[[Qué|orange]] [[compra|teal]] [[Ana|blue]]? — Pan.', en: 'What does Ana buy? — Bread.' },
              { es: '¿[[Quién|orange]] [[compra|teal]] pan? — Ana.', en: 'Who buys bread? — Ana.' },
              { es: '¿[[Cuándo|orange]] [[compra|teal]] [[Ana|blue]] pan? — Hoy.', en: 'When does Ana buy bread? — Today.' },
            ],
            note: 'Con **quién** el verbo va en singular: «¿Quién compra pan?». Si esperas varias personas, también puedes decir «¿Quiénes compran pan?».' },
          { kind: 'compare', title: 'Una palabra cambia la pregunta · One word changes the question', columns: [
            { tone: 'blue', label: '¿QUIÉN? · who', sentence: '¿[[Quién|orange]] compra pan?', idea: 'Preguntas por la persona. Respuesta: Ana.', en: 'Who buys bread?' },
            { tone: 'orange', label: '¿QUÉ? · what', sentence: '¿[[Qué|orange]] compra Ana?', idea: 'Preguntas por la cosa. Respuesta: pan.', en: 'What does Ana buy?' },
            { tone: 'teal', label: '¿CUÁNDO? · when', sentence: '¿[[Cuándo|orange]] compra Ana pan?', idea: 'Preguntas por el día o el momento. Respuesta: hoy.', en: 'When does Ana buy bread?' },
          ] },
          { kind: 'tip', icon: '🔊', title: 'La voz sube · The voice goes up', text: 'En una pregunta de sí / no, la voz **sube** al final: «¿Ana compra pan hoy? ↗». En una afirmación, la voz **baja**: «Ana compra pan hoy. ↘». Por escrito, el español usa dos signos: **¿** al principio y **?** al final.', en: 'In a yes / no question, your voice goes up at the end. In a statement, it goes down. In writing, Spanish uses two marks: ¿ at the start and ? at the end.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Marta quiere saber la persona. ¿Qué pregunta?', options: ['¿Quién compra pan?', '¿Qué compra pan?', '¿Cuándo compra pan?'], answer: 0, why: 'La persona: ¿quién?', en: 'Marta wants to know the person. What does she ask?' },
            { prompt: '¿Cuál es correcta?', options: ['¿Cuándo compra Ana pan?', '¿Cuándo Ana compra pan?', 'Cuándo compra Ana pan?'], answer: 0, why: 'Palabra de pregunta + verbo justo después, y dos signos: ¿Cuándo compra Ana pan?', en: 'Which one is correct?' },
            { prompt: '«¿Ana compra pan hoy?» Respuesta posible:', options: ['Ana.', 'Sí, compra pan hoy.', 'Pan.'], answer: 1, why: 'Es una pregunta de sí / no: se responde con sí o no.', en: '“¿Ana compra pan hoy?” A possible answer:' },
          ] },
        ] },
        { title: 'La negación · Saying no', mascot: '/brand/mascot/standing.webp', coach: 'No, justo antes del verbo.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NO + VERBO', question: '¿Dónde va «no»?', en: 'Where does “no” go?', formula: ['sujeto + no + verbo + …', 'Ana + no + compra + queso'],
            meaning: 'Para negar, **no** va justo **antes del verbo**, nunca después. Si hay **lo, la, los, las**, «no» va antes de esa palabra: no + lo + verbo.',
            examples: [
              { es: '[[Ana|blue]] [[no|violet]] [[compra|teal]] queso.', en: 'Ana does not buy cheese.' },
              { es: 'Hoy [[Elena|blue]] [[no|violet]] [[trabaja|teal]] en la oficina: está de viaje.', en: 'Today Elena is not working at the office: she is away.' },
              { es: '¿El queso? [[Ana|blue]] [[no|violet]] lo [[compra|teal]].', en: 'The cheese? Ana does not buy it.' },
              { es: '—¿Ana compra queso? —[[No|violet]], [[no|violet]] [[compra|teal]] queso.', en: '“Is Ana buying cheese?” “No, she isn’t buying cheese.”' },
            ],
            note: 'En «No, no compra queso», el primer **no** es la respuesta y el segundo niega el verbo. Sin verbo, «no» va solo: «¿El jueves? No».' },
          { kind: 'decide', title: 'Antes de hablar · Before you speak', steps: [
            { q: '¿Buscas una información: quién, qué, cuándo, dónde? (Are you asking for information?)', yes: 'La palabra de pregunta va primero y el verbo después: «¿Qué compra Ana?».', no: 'next' },
            { q: '¿Esperas un sí o un no? (Do you expect yes or no?)', yes: 'Usa la frase normal con **¿ ?** y la voz arriba: «¿Ana compra pan?».', no: 'next' },
            { q: '¿Dices que algo no es así? (Are you saying something is not so?)', yes: 'Pon **no** justo antes del verbo: «Ana no compra queso».', no: 'Es una afirmación: quién + verbo + qué + cuándo. «Ana compra pan hoy».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elena ___ esta semana.', options: ['no trabajan', 'no trabaja', 'trabaja no'], answer: 1, why: '«No» antes del verbo; Elena es una persona: no trabaja.', en: 'Elena is not working this week.' },
            { prompt: '¿El pan? Ana ___ mañana: lo compra hoy.', options: ['no compra lo', 'lo no compra', 'no lo compra'], answer: 2, why: 'No + lo + verbo: no lo compra.', en: 'The bread? Ana is not buying it tomorrow: she is buying it today.' },
            { prompt: '—¿Elena está en la oficina? —No, ___.', options: ['está no', 'no es', 'no está'], answer: 2, why: '«No» antes del verbo; para un lugar, estar: no está.', en: '“Is Elena at the office?” “No, she isn’t.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde va el verbo? ¿Dónde va «no»?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué pieza está mal: el orden, «no», el verbo o los signos. Después aparece la corrección.', self: 'Lee cada frase, busca qué pieza está mal (el orden, «no», el verbo o los signos) y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Ana compra no queso.', right: 'Ana no compra queso.', why: '«No» va justo antes del verbo, no después. (“No” goes right before the verb.)' },
            { wrong: '¿Qué Ana compra?', right: '¿Qué compra Ana?', why: 'Después de qué, quién o cuándo va el verbo. En inglés hay «does» («What does Ana buy?»); en español, no.' },
            { wrong: '¿Quién compran el pan?', right: '¿Quién compra el pan?', why: 'Con **quién**, el verbo va en singular: ¿quién compra?' },
            { wrong: 'Hoy Ana y Diego trabaja en la oficina.', right: 'Hoy Ana y Diego trabajan en la oficina.', why: 'El verbo concuerda con el sujeto (Ana y Diego = ellos), no con «hoy».' },
            { wrong: 'Ana compra pan hoy?', right: '¿Ana compra pan hoy?', why: 'Por escrito, la pregunta lleva dos signos: ¿ al principio y ? al final.' },
            { wrong: 'Ana no compra lo.', right: 'Ana no lo compra.', why: '«Lo» va antes del verbo, y «no» va antes de «lo»: no lo compra.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Diego llama no hoy.', 'No Diego llama hoy.', 'Diego no llama hoy.'], answer: 2, why: '«No» justo antes del verbo: no llama.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['¿Dónde Marta trabaja?', '¿Dónde trabajan Marta?', '¿Dónde trabaja Marta?'], answer: 2, why: 'Dónde + verbo + sujeto, y Marta es una persona: trabaja.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una afirmación sobre su día («Hoy trabajo en casa»), la convierte en pregunta de sí / no y después en negación. Tú repites cada frase con la voz correcta (↘ / ↗).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La nota con café', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'La reunión del lunes · The Monday meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marta y tu alumno es Diego, Ana y Lucía. Después tu alumno toca cada expresión marcada y dice si es pregunta, negación o afirmación.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿pregunta, negación o afirmación? (Question, negative or statement?)' } },
          { kind: 'explore', title: '¿Quién hace qué?', setting: 'Lunes, nueve de la mañana. Marta tiene la nota de Elena en la mano, pero una mancha de café tapa algunas palabras. (Monday, 9 am. Marta has Elena’s note, but a coffee stain covers some words.)', lines: [
            { who: 'Marta', text: 'Buenos días, equipo. Hay una nota de Elena, pero tiene una mancha de café. [[¿Quién llama|orange]] al restaurante el miércoles?', en: 'Good morning, team. There is a note from Elena, but it has a coffee stain. Who is calling the restaurant on Wednesday?' },
            { who: 'Diego', text: 'Yo. [[Elena no está|violet]] esta semana, entonces [[yo llamo|blue]] al restaurante.', en: 'Me. Elena isn’t here this week, so I’m calling the restaurant.' },
            { who: 'Marta', text: 'Gracias, Diego. Ana, ¿[[compras|teal]] tú el pan hoy?', en: 'Thanks, Diego. Ana, are you buying the bread today?' },
            { who: 'Ana', text: 'Sí, [[hoy compro|teal]] el pan. Pero el queso [[no lo compro|violet]].', en: 'Yes, I’m buying the bread today. But I’m not buying the cheese.' },
            { who: 'Lucía', text: 'La nota dice: «Lucía [[no prepara|violet]] la sala». Entonces, ¿[[qué preparo|orange]] yo?', en: 'The note says: “Lucía does not prepare the room”. So what do I prepare?' },
            { who: 'Marta', text: '[[Tú preparas|blue]] las bebidas, Lucía. Yo preparo la sala el jueves.', en: 'You prepare the drinks, Lucía. I prepare the room on Thursday.' },
            { who: 'Lucía', text: 'Perfecto. ¿Y las flores? ¿[[Cuándo compra Raúl|orange]] las flores?', en: 'Perfect. And the flowers? When is Raúl buying the flowers?' },
            { who: 'Marta', text: 'No está claro. ¿[[Raúl compra|blue]] las flores el jueves o el viernes?', en: 'It isn’t clear. Is Raúl buying the flowers on Thursday or on Friday?' },
            { who: 'Diego', text: '[[El jueves no|violet]]. Raúl no trabaja los jueves.', en: 'Not on Thursday. Raúl doesn’t work on Thursdays.' },
            { who: 'Marta', text: 'Entonces las compra el viernes por la mañana. ¿[[Quién habla|orange]] hoy con Raúl?', en: 'Then he buys them on Friday morning. Who is talking to Raúl today?' },
            { who: 'Ana', text: '[[Yo hablo|blue]] con él a las once. ¡Hasta luego!', en: 'I’ll talk to him at eleven. See you later!' },
          ], notes: {
            '¿Quién llama': 'Marta busca **la persona**: ¿quién? + verbo en singular (llama). La respuesta es una persona: «Yo».',
            'Elena no está': 'Negación: **no** justo antes del verbo. Elena no está en la oficina: está de viaje.',
            'yo llamo': 'Afirmación con el orden básico: **sujeto + verbo** + al restaurante. Diego usa «yo» para marcar que es él, no otra persona.',
            'compras': 'Pregunta de sí / no. Aquí el verbo va primero: «¿Compras tú el pan hoy?». También es correcto «¿Tú compras el pan hoy?». La voz sube al final.',
            'hoy compro': 'El **cuándo** va al principio: «Hoy compro el pan» = «Compro el pan hoy». No hay sujeto: «compro» ya dice «yo».',
            'no lo compro': '**No + lo + verbo**. «Lo» es el queso; «no» va antes de «lo».',
            'no prepara': 'La nota niega: **no** antes del verbo. Lucía no prepara la sala.',
            'qué preparo': 'Lucía pregunta por **la cosa**: ¿qué? + verbo justo después (preparo) y el sujeto al final (yo).',
            'Tú preparas': 'Marta responde con el orden básico: sujeto + verbo + qué. Usa «tú» para contrastar con «yo preparo».',
            'Cuándo compra Raúl': 'Pregunta por **el momento**: ¿cuándo? + verbo + sujeto. Nunca «¿Cuándo Raúl compra…?».',
            'Raúl compra': 'Pregunta de sí / no con el **mismo orden** de la afirmación: Raúl compra… Solo cambian la voz y los signos ¿ ?.',
            'El jueves no': 'Respuesta corta **sin verbo**: entonces «no» va solo, al final. Con verbo, «no» va antes: «Raúl no trabaja».',
            'Quién habla': 'Otra vez **¿quién?** + verbo en singular: ¿quién habla? La respuesta: «Yo».',
            'Yo hablo': 'Sujeto + verbo: «Yo hablo con él». Ana responde a la pregunta «¿Quién?» con una persona: yo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Quién llama al restaurante?', options: ['Elena.', 'Ana.', 'Diego.'], answer: 2, why: '«Yo. Elena no está esta semana, entonces yo llamo al restaurante».', en: 'Who is calling the restaurant?' },
            { prompt: '¿Qué prepara Marta el jueves?', options: ['La sala.', 'Las bebidas.', 'El pan.'], answer: 0, why: '«Yo preparo la sala el jueves».', en: 'What does Marta prepare on Thursday?' },
            { prompt: '¿Quién habla hoy con Raúl?', options: ['Ana.', 'Marta.', 'Diego.'], answer: 0, why: '«Yo hablo con él a las once», dice Ana.', en: 'Who is talking to Raúl today?' },
          ] },
        ] },
        { title: '¿Quién, qué o cuándo? · Who, what or when?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'La nota, pieza por pieza · The note, piece by piece', categories: [
            { id: 'quien', label: '¿QUIÉN? · la persona', tone: 'blue' },
            { id: 'que', label: '¿QUÉ? · la cosa', tone: 'teal' },
            { id: 'cuando', label: '¿CUÁNDO? · el momento', tone: 'orange' },
          ], items: [
            { text: '**Diego** llama al restaurante el miércoles.', answer: 'quien', why: 'Diego hace la acción: responde a ¿quién?' },
            { text: 'Diego llama al restaurante **el miércoles**.', answer: 'cuando', why: 'El día: responde a ¿cuándo?' },
            { text: 'Lucía prepara **las bebidas**.', answer: 'que', why: 'La cosa que prepara: responde a ¿qué?' },
            { text: '**Marta** prepara la sala el jueves.', answer: 'quien', why: 'Marta hace la acción: responde a ¿quién?' },
            { text: 'Raúl compra **las flores**.', answer: 'que', why: 'La cosa que compra: responde a ¿qué?' },
            { text: 'Raúl compra las flores **el viernes por la mañana**.', answer: 'cuando', why: 'El momento: responde a ¿cuándo?' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tú dices una pieza («las bebidas», «el jueves», «Ana») y tu alumno hace la pregunta completa: «¿Qué prepara Lucía?», «¿Cuándo prepara Marta la sala?», «¿Quién compra el pan?».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Afirmación, pregunta o negación? Statement, question or negative?',
      steps: [
        { title: 'Elige la frase · Choose the sentence', blocks: [
          { kind: 'choice', items: [
            { context: 'Marta quiere saber la persona. (Marta wants to know the person.)', prompt: '¿Qué pregunta Marta?', options: ['¿Qué compra las flores?', '¿Quién compran las flores?', '¿Quién compra las flores?'], answer: 2, why: 'Para la persona, ¿quién? + verbo en singular: compra.', en: 'What does Marta ask?' },
            { context: 'Marta quiere saber la cosa. (Marta wants to know the thing.)', prompt: '¿Qué pregunta Marta?', options: ['¿Quién lleva Ana a la oficina?', '¿Qué lleva Ana a la oficina?', '¿Qué Ana lleva a la oficina?'], answer: 1, why: 'Para la cosa, ¿qué? + verbo justo después + sujeto: ¿Qué lleva Ana…?', en: 'What does Marta ask?' },
            { context: 'La respuesta es «el miércoles». (The answer is “on Wednesday”.)', prompt: '¿___ llama Diego al restaurante?', options: ['Quién', 'Dónde', 'Cuándo'], answer: 2, why: 'Un día responde a ¿cuándo?', en: 'When does Diego call the restaurant?' },
            { context: 'El cuándo va primero. (The time phrase goes first.)', prompt: 'El viernes Raúl y Ana ___ temprano a la oficina.', options: ['llegamos', 'llegan', 'llega'], answer: 1, why: 'Raúl y Ana = ellos → llegan. «El viernes» no cambia el verbo.', en: 'On Friday Raúl and Ana arrive early at the office.' },
            { context: 'Marta pregunta por Raúl. (Marta asks about Raúl.)', prompt: '—¿Raúl trabaja los jueves? —No, ___.', options: ['trabaja no los jueves', 'los jueves trabaja no', 'no trabaja los jueves'], answer: 2, why: '«No» justo antes del verbo: no trabaja.', en: '“Does Raúl work on Thursdays?” “No, he doesn’t work on Thursdays.”' },
          ] },
        ] },
        { title: '¿Qué tipo de frase? · What kind of sentence?', blocks: [
          { kind: 'classify', title: 'Cuatro tipos · Four kinds', categories: [
            { id: 'afirmacion', label: 'AFIRMACIÓN · statement', tone: 'teal' },
            { id: 'sino', label: 'PREGUNTA SÍ / NO · yes / no', tone: 'blue' },
            { id: 'qu', label: 'PREGUNTA CON QUÉ, QUIÉN… · wh-question', tone: 'orange' },
            { id: 'negacion', label: 'NEGACIÓN · negative', tone: 'violet' },
          ], items: [
            { text: 'Los clientes llegan a la una.', answer: 'afirmacion', why: 'Sin ¿ ? y sin «no»: da una información.' },
            { text: '¿Los clientes llegan a la una?', answer: 'sino', why: 'Las mismas palabras con ¿ ?: se responde sí o no.' },
            { text: '¿A qué hora llegan los clientes?', answer: 'qu', why: 'Empieza con «a qué hora»: busca una información.' },
            { text: 'Los clientes no llegan a las doce.', answer: 'negacion', why: '«No» antes del verbo: niega.' },
            { text: '¿Marta prepara la sala el jueves?', answer: 'sino', why: 'Orden normal con ¿ ?: la respuesta es sí o no.' },
            { text: '¿Dónde está la sala de reuniones?', answer: 'qu', why: 'Empieza con «dónde»: busca un lugar.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Diego llama no al restaurante el lunes.', ok: false, options: ['Diego llama al no restaurante el lunes.', 'Diego no llama al restaurante el lunes.', 'No Diego llama al restaurante el lunes.'], answer: 1, why: '«No» va justo antes del verbo: no llama.' },
            { sentence: '¿Qué Lucía prepara para el viernes?', ok: false, options: ['¿Qué prepara Lucía para el viernes?', '¿Qué preparan Lucía para el viernes?', '¿Qué prepara para Lucía el viernes?'], answer: 0, why: 'Después de qué va el verbo y después el sujeto: ¿Qué prepara Lucía…?' },
            { sentence: 'El viernes por la mañana Raúl compra las flores.', ok: true, why: 'Correcta: el cuándo va al principio y el verbo concuerda con Raúl.' },
            { sentence: '¿Quién abren la puerta a los clientes?', ok: false, options: ['¿Quiénes abre la puerta a los clientes?', '¿Quién abre la puerta a los clientes?', '¿Quién la puerta abre a los clientes?'], answer: 1, why: 'Con quién, el verbo en singular y justo después: ¿Quién abre…?' },
            { sentence: '¿Las flores? Raúl no las compra el jueves.', ok: true, why: 'Correcta: no + las + verbo. «Las» son las flores.' },
          ] },
        ] },
        { title: 'Ana y Marta hablan · Ana and Marta talk', blocks: [
          { kind: 'chat-fill', title: 'Lunes, al mediodía · Monday, at noon', lines: [
            { who: 'Marta', text: 'Ana, ¿___ el pan hoy o mañana?', options: ['compras', 'compra', 'compro'], answer: 0, why: 'Marta habla con Ana (tú): compras. Es una pregunta con el orden normal.' },
            { who: 'Ana', text: 'Hoy. Pero en la panadería de la esquina ___ pan integral.', options: ['no está', 'no hay', 'hay no'], answer: 1, why: '«No» va antes del verbo: no hay. Para decir que algo existe o no existe, usamos «hay».' },
            { who: 'Marta', text: 'Bueno. ¿Y ___ compras entonces?', options: ['cuándo', 'qué', 'quién'], answer: 1, why: 'Marta pregunta por la cosa: ¿qué compras?' },
            { who: 'Ana', text: 'Pan blanco y un pastel. Oye, ¿___ llegan los clientes el viernes?', options: ['quién', 'qué', 'a qué hora'], answer: 2, why: 'Ana pregunta por la hora: ¿a qué hora llegan…?' },
            { who: 'Marta', text: 'A la una. ¿Y las flores? Raúl ___ los jueves.', options: ['no trabajan', 'no trabaja', 'trabaja no'], answer: 1, why: '«No» antes del verbo, y Raúl es una persona: no trabaja.' },
            { who: 'Ana', text: 'Entonces las compra el viernes. ¡Perfecto!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['flores', 'Raúl', 'compra', 'el', 'viernes'], accept: ['Raúl compra flores el viernes', 'El viernes Raúl compra flores', 'Raúl el viernes compra flores'], en: 'Raúl buys flowers on Friday.' },
            { tiles: ['comen', '¿Dónde', 'clientes?', 'los'], accept: ['¿Dónde comen los clientes?'], en: 'Where do the clients eat?' },
            { tiles: ['no', 'Diego', 'el', 'trabaja', 'lunes'], accept: ['Diego no trabaja el lunes', 'El lunes Diego no trabaja'], en: 'Diego does not work on Monday.' },
            { tiles: ['Lucía?', 'prepara', '¿Qué'], accept: ['¿Qué prepara Lucía?'], en: 'What does Lucía prepare?' },
          ] },
        ] },
        { title: 'Transforma la frase · Change the sentence', blocks: [
          { kind: 'rewrite', title: 'De afirmación a pregunta o negación · From statement to question or negative', items: [
            { prompt: 'Diego llama al restaurante el miércoles.', instruction: 'Escribe la pregunta para saber la persona (who). Empieza con «¿Quién».', accept: ['¿Quién llama al restaurante el miércoles?', '¿Quién llama al restaurante?', '¿Quién llama el miércoles al restaurante?'] },
            { prompt: 'Ana compra queso para la comida.', instruction: 'Escribe la frase en negativo. (Make it negative.)', accept: ['Ana no compra queso para la comida', 'No, Ana no compra queso para la comida'] },
            { prompt: 'Marta prepara la sala el jueves.', instruction: 'Escribe la pregunta para saber el día (when). Empieza con «¿Cuándo».', accept: ['¿Cuándo prepara Marta la sala?', '¿Cuándo prepara la sala Marta?'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice una frase real sobre su semana («El martes tengo clase») y la convierte en tres: pregunta de sí / no, pregunta con «¿cuándo?» y negación.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Elena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Elena explica la nota · Elena explains the note', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué llama Elena?). Segunda escucha: tu alumno levanta la mano cada vez que oye «no» antes de un verbo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes «no» antes de un verbo. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Elena', channel: 'MENSAJE DE VOZ · DE ELENA PARA MARTA', src: '/audio/grammar-live/343.mp3',
            before: 'Elena está de viaje y manda un mensaje de voz a Marta sobre la nota. ¿Qué crees que dice? (Elena is away and sends Marta a voice message about the note. What do you think she says?)',
            gist: { prompt: '¿Para qué llama Elena? · Why does Elena call?', options: ['Para cambiar el día de la comida.', 'Para invitar a Marta al aeropuerto.', 'Para explicar la nota.'], answer: 2, why: '«Perdón: la nota tiene una mancha de café. Te explico».', en: 'Why does Elena call?' },
            details: [
              { prompt: '¿Cuándo compra Ana el pan?', options: ['Hoy.', 'Mañana.', 'El viernes.'], answer: 0, why: '«Ana compra el pan hoy, no mañana».', en: 'When does Ana buy the bread?' },
              { prompt: '¿Qué prepara Lucía?', options: ['Las flores.', 'Las bebidas.', 'La sala.'], answer: 1, why: '«Lucía no prepara la sala; ella prepara las bebidas».', en: 'What does Lucía prepare?' },
              { prompt: '¿Por qué compra Raúl las flores el viernes?', options: ['Porque no trabaja los jueves.', 'Porque está de viaje.', 'Porque el jueves llama al restaurante.'], answer: 0, why: '«Raúl no trabaja los jueves, entonces compra las flores el viernes».', en: 'Why does Raúl buy the flowers on Friday?' },
              { prompt: '¿Cuántos clientes llegan el viernes?', options: ['Siete.', 'Dos.', 'Seis.'], answer: 2, why: '«Son seis personas».', en: 'How many clients arrive on Friday?' },
              { prompt: '¿Qué pregunta Elena al final?', options: ['¿Quién abre la puerta?', '¿Quién compra el pan?', '¿Dónde está la oficina?'], answer: 0, why: '«Una pregunta: ¿quién abre la puerta?».', en: 'What does Elena ask at the end?' },
            ],
            transcript: 'Hola, Marta. Soy Elena. Estoy en el aeropuerto. Perdón: la nota tiene una mancha de café. Te explico. [[Ana compra|blue]] el pan hoy, no mañana. El miércoles [[Diego llama|blue]] al restaurante. Lucía [[no prepara|violet]] la sala; ella prepara las bebidas. [[Tú preparas|blue]] la sala el jueves. ¿Y Raúl? Raúl [[no trabaja|violet]] los jueves, entonces compra las flores el viernes por la mañana. Los clientes llegan el viernes a la una. Son seis personas. Una pregunta: ¿[[quién abre|orange]] la puerta? ¿[[Puedes|teal]] tú, Marta? Gracias. Hasta el viernes.',
            reply: { teacher: 'Tú eres Elena. Tu alumno es Marta y responde al mensaje con tres frases: una confirmación («Sí, yo abro la puerta»), una negación y una pregunta para Elena con «¿cuándo?» o «¿dónde?».', self: 'Responde a Elena en voz alta como Marta: confirma una cosa, di una cosa con «no» y haz una pregunta («¿Cuándo llegas tú?»). (Answer as Marta: confirm, say one thing with “no”, and ask a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Aclarar quién hace qué', coach: 'Pregunta y responde. Ask and answer.',
      steps: [
        { title: '¿Quién hace qué? · Who does what?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres un compañero de la oficina y haces las preguntas. Tu alumno responde con frases completas y también pregunta. Tú repites su frase con el orden correcto y la voz correcta (↘ / ↗) y sigues con la repregunta.', self: 'Lee la situación, responde en voz alta con frases completas y, si quieres, escribe tu respuesta. Cuida la voz: ↘ en la afirmación, ↗ en la pregunta de sí / no. (Answer aloud; mind your intonation.)' } },
          { kind: 'talk', cards: [
            { q: 'La nota dice: «… llama al restaurante». No sabes quién. Pregunta. · The note does not say who. Ask.', followUps: ['¿Y cuándo llama? (And when?)', '¿Y quién habla con los clientes? (And who talks to the clients?)'], phrases: ['¿[[Quién|orange]] llama al restaurante?', '¿[[Cuándo|orange]] llama Diego?', '[[Diego|blue]] [[llama|teal]] el miércoles.'], hint: 'Palabra de pregunta + verbo justo después: «¿Quién llama…?».', example: '¿Quién llama al restaurante? ¿Diego? ¿Y cuándo llama? ¿El miércoles?', next: 'Ahora, una información falsa.', teacher: 'Responde tú con frases completas («Diego llama el miércoles») para que tu alumno oiga el orden básico.' },
            { q: 'Un compañero dice: «Lucía prepara la sala». No es verdad. Corrige. · It is not true. Correct it.', followUps: ['¿Y qué prepara Lucía? (What does she prepare?)', '¿Y quién prepara la sala? (Who does?)'], phrases: ['[[No|violet]], Lucía [[no prepara|violet]] la sala.', 'Prepara las bebidas.', '[[Marta|blue]] [[prepara|teal]] la sala el jueves.'], hint: '«No» justo antes del verbo. Después, la información correcta.', example: 'No, Lucía no prepara la sala. Prepara las bebidas. Marta prepara la sala el jueves.', next: 'Ahora, tu semana.' },
            { q: '¿Qué haces esta semana en tu trabajo o en tus estudios? · What do you do this week at work or school?', followUps: ['¿Qué no haces esta semana? (What don’t you do?)', '¿Y el viernes? (And on Friday?)'], phrases: ['El lunes [[trabajo|teal]] en casa.', 'El miércoles [[no tengo|violet]] clase.', 'Hoy [[llamo|teal]] a un cliente.'], hint: 'Quién + verbo + qué + cuándo. El cuándo puede ir al principio: «El lunes trabajo…».', example: 'El lunes trabajo en casa. El miércoles no tengo clase. El viernes como con mis compañeros.', next: 'Ahora, tú preguntas.' },
            { q: 'Haz tres preguntas a tu compañero sobre su semana. · Ask your partner three questions about their week.', followUps: ['¿Qué día no trabajas? (Which day don’t you work?)', '¿Y tu jefe o tu profesor? (And your boss or teacher?)'], phrases: ['¿[[Dónde|orange]] trabajas?', '¿[[Qué|orange]] haces el lunes?', '¿[[Trabajas|teal]] el sábado?'], hint: 'Una pregunta de sí / no y dos con qué, dónde o cuándo. El verbo va justo después de la palabra de pregunta.', example: '¿Dónde trabajas? ¿Qué haces el lunes? ¿Trabajas el sábado?', next: 'Ahora, la voz.' },
            { q: 'Di cada frase dos veces: primero afirmación ↘, después pregunta ↗. · Say each sentence as a statement, then as a question.', followUps: ['¿Y en negativo? (And as a negative?)', '¿Cómo es la pregunta con «¿cuándo?»? (And with “when”?)'], phrases: ['Ana compra pan hoy. ↘', '¿Ana compra pan hoy? ↗', 'Ana [[no|violet]] compra pan hoy.'], hint: 'Las mismas palabras: solo cambia la voz. En negativo, «no» antes del verbo.', example: 'Diego llama hoy. ↘ ¿Diego llama hoy? ↗ Diego no llama hoy. ¿Cuándo llama Diego?', next: 'Para terminar, tu propia comida de equipo.', teacher: 'Tú dices una frase con voz de afirmación o de pregunta y tu alumno dice qué es. Después cambian.' },
            { q: 'Organiza una comida con tu equipo o tu clase: di quién hace qué y cuándo, una cosa que alguien no hace y una pregunta. · Organise a team lunch.', followUps: ['¿Quién compra las bebidas? (Who buys the drinks?)', '¿Dónde comen? (Where do you eat?)', '¿A qué hora empieza? (What time does it start?)'], phrases: ['[[Ana|blue]] [[compra|teal]] el pan el jueves.', 'Yo [[no cocino|violet]]: compro las bebidas.', '¿[[Quién|orange]] trae la música?'], hint: 'Tres frases con quién + verbo + qué + cuándo, una con «no» y una pregunta.', example: 'Mi compañera Sara compra el pan el jueves. Yo no cocino: compro las bebidas. Comemos el viernes en la sala. ¿Quién trae la música?', teacher: 'Responde a la pregunta final de tu alumno y haz tú una repregunta con «¿cuándo?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es el compañero que hace las preguntas («¿Quién…?», «¿Cuándo…?», «¿… el viernes?») y tú respondes, a veces con «no».', self: 'Ahora tú haces las preguntas de las tarjetas en voz alta y respondes como Marta. (Now you ask the questions and answer as Marta.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje claro para el equipo', coach: 'Quién, qué y cuándo. Clear and short.',
      steps: [
        { title: 'Escribe al equipo · Write to the team', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos el orden (quién + verbo + qué + cuándo), la posición de «no» y los signos ¿ ?. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien el orden, «no» antes del verbo y los dos signos ¿ ?. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje para el grupo del equipo · A message for the team group', situation: 'Eres Marta. La nota de Elena no está clara. Escribe un mensaje al grupo del equipo con la información correcta para la comida del viernes. (You are Marta. Elena’s note is not clear. Write a message to the team group with the correct information for Friday’s lunch.)', task: [
            'Saluda al equipo y explica el problema de la nota. (Say hello and explain the problem.)',
            'Di quién hace qué y cuándo: tres tareas con el orden básico. (Who does what and when: three tasks.)',
            'Escribe una negación con **no** antes del verbo. (One negative.)',
            'Haz dos preguntas al equipo: una con **qué, quién, cuándo** o **dónde**. Usa ¿ ?. (Two questions.)',
          ], starters: ['Hola, equipo:', 'La nota de Elena no está clara.', 'Hoy … compra …', 'El miércoles … llama …', '… no prepara …', '¿Quién …?', '¿… el viernes?', 'Gracias.'],
            words: ['quién', 'qué', 'cuándo', 'dónde', 'no', 'hoy', 'mañana', 'el miércoles', 'el jueves', 'el viernes', 'compra', 'prepara', 'llama', 'abre'],
            model: 'Hola, equipo: Elena está de viaje y su nota no está clara. Aquí está la información. Hoy [[Ana|blue]] [[compra|teal]] el pan. El miércoles [[Diego|blue]] [[llama|teal]] al restaurante. Lucía [[no prepara|violet]] la sala: prepara las bebidas. Yo preparo la sala el jueves. Raúl [[no trabaja|violet]] los jueves, entonces compra las flores el viernes por la mañana. Dos preguntas: ¿[[quién|orange]] abre la puerta a los clientes? ¿Diego tiene el número del restaurante? Gracias. Marta',
            minWords: 40,
            checks: [
              { label: 'Cuándo: hoy, mañana, el jueves… (when)', pattern: '(?<!\\p{L})(?:hoy|mañana|el\\s+(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo))(?!\\p{L})', tip: 'Di cuándo: «Hoy Ana compra el pan», «El miércoles Diego llama…».' },
              { label: 'No + verbo (a negative)', pattern: '(?<!\\p{L})no\\s+(?:l[oa]s?\\s+)?\\p{L}+(?:o|as|a|amos|an|es|e|en)(?!\\p{L})', tip: 'Escribe una negación con «no» antes del verbo: «Lucía no prepara la sala».' },
              { label: 'Una pregunta con qué, quién, cuándo o dónde (a wh-question)', pattern: '¿\\s*(?:a\\s+qu[eé]\\s+hora|qu[eé]|qui[eé]n(?:es)?|cu[aá]ndo|d[oó]nde)(?!\\p{L})', tip: 'Pregunta al equipo: «¿Quién abre la puerta?».' },
              { label: 'Los dos signos ¿ ? (both question marks)', pattern: '¿[^¿?]+\\?', tip: 'La pregunta lleva dos signos: «¿… ?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:compr|prepar|llam|trabaj|lleg|habl|limpi|cocin)(?:o|as|a|amos|an)\\s+no\\s+\\p{L}', why: '«No» va **antes** del verbo: «no compra», no «compra no».' },
              { pattern: '¿\\s*(?:qu[eé]|cu[aá]ndo|d[oó]nde)\\s+(?:Ana|Diego|Luc[ií]a|Ra[uú]l|Marta|Elena)\\s+\\p{L}+', why: 'Después de qué, cuándo o dónde va el **verbo**: «¿Qué compra Ana?», no «¿Qué Ana compra?».' },
              { pattern: '(?<!\\p{L})qui[eé]n\\s+(?:compran|preparan|llaman|trabajan|llegan|abren|hablan)(?!\\p{L})', why: 'Con **quién**, el verbo va en singular: «¿Quién compra…?».' },
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
            { tone: 'blue', label: 'AFIRMACIÓN', formula: 'sujeto + verbo + qué + cuándo', example: 'Ana compra pan hoy. = Hoy Ana compra pan.', caption: 'el cuándo se mueve; el sentido, no', en: 'statement: the time phrase can move, the meaning stays' },
            { tone: 'orange', label: 'PREGUNTA', formula: '¿frase normal? ↗ · ¿qué / quién / cuándo + verbo + sujeto?', example: '¿Ana compra pan? · ¿Qué compra Ana?', caption: 'sí / no, o una información', en: 'question: yes / no, or a piece of information' },
            { tone: 'violet', label: 'NEGACIÓN', formula: 'sujeto + no + (lo / la) + verbo', example: 'Ana no compra queso. Ana no lo compra.', caption: '«no» justo antes del verbo', en: 'negative: “no” right before the verb' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Primero **quién**, después el **verbo**. En la pregunta con qué, quién o cuándo, el **verbo va justo después** de la palabra de pregunta. Y **no** va siempre antes del verbo: «Ana no compra pan», nunca «compra no».', en: 'First who, then the verb. In a question with qué, quién or cuándo, the verb comes right after the question word. And “no” always goes before the verb: “Ana no compra pan”, never “compra no”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Diego ___ el martes.', options: ['no trabajan', 'no trabaja', 'trabaja no'], answer: 1, why: '«No» antes del verbo; Diego es una persona: no trabaja.', en: 'Diego does not work on Tuesday.' },
            { prompt: '¿___ cierra la oficina? — Marta.', options: ['Cuándo', 'Quién', 'Qué'], answer: 1, why: 'La respuesta es una persona: ¿quién?', en: 'Who closes the office? — Marta.' },
            { prompt: '¿Qué ___ para la comida?', options: ['prepara Lucía', 'Lucía prepara', 'preparan Lucía'], answer: 0, why: 'Qué + verbo + sujeto: ¿Qué prepara Lucía?', en: 'What is Lucía preparing for the lunch?' },
            { prompt: 'El viernes los clientes ___ a la una.', options: ['llega', 'llego', 'llegan'], answer: 2, why: 'Los clientes = ellos → llegan. «El viernes» no cambia el verbo.', en: 'On Friday the clients arrive at one.' },
            { prompt: '¿Cuál está bien escrita?', options: ['Elena llega el viernes?', '¿Elena llega el viernes.', '¿Elena llega el viernes?'], answer: 2, why: 'La pregunta lleva dos signos: ¿ al principio y ? al final.', en: 'Which one is written correctly?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'De la oficina a la casa.', blocks: [
          { kind: 'lead', text: 'Es sábado. En la nevera de Lucía hay una nota: «Mi hermano cocina el domingo». Sara, su compañera de piso, no entiende bien la nota y hace preguntas. Escribe las frases de Sara.', en: 'It is Saturday. On Lucía’s fridge there is a note: “My brother cooks on Sunday”. Sara, her flatmate, does not quite understand the note and asks questions. Write Sara’s sentences.' },
          { kind: 'rewrite', title: 'La nota de la nevera · The fridge note', items: [
            { prompt: 'Mi hermano cocina el domingo.', instruction: 'Sara pregunta por la persona (who). Empieza con «¿Quién».', accept: ['¿Quién cocina el domingo?'] },
            { prompt: 'Mi hermano cocina el domingo.', instruction: 'Sara pregunta por el día (when). Empieza con «¿Cuándo».', accept: ['¿Cuándo cocina tu hermano?', '¿Cuándo cocina el hermano de Lucía?'] },
            { prompt: 'Mi hermano cocina el domingo.', instruction: 'Sara hace una pregunta de sí / no a Lucía. (yes / no question, with «tu hermano»)', accept: ['¿Tu hermano cocina el domingo?', '¿Cocina tu hermano el domingo?', '¿Cocina el domingo tu hermano?', '¿El domingo cocina tu hermano?'] },
            { prompt: 'Mi hermano limpia la cocina.', instruction: 'Lucía dice que no es verdad. Escribe la frase en negativo.', accept: ['Mi hermano no limpia la cocina', 'No, mi hermano no limpia la cocina'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 044 · Microproducción A1: describir y pedir información', text: 'Ya ordenas una frase, preguntas con qué, quién o cuándo y niegas con «no». En la clase 044 juntas todo lo de A1 —ser, estar, hay, artículos, posesivos— para **describir** un lugar y **pedir información** útil: «¿Dónde está tu habitación?». Es el paso natural: usar estas frases en una conversación completa.', en: 'You can now order a sentence, ask with qué, quién or cuándo, and say no with “no”. In class 044 you put all of A1 together (ser, estar, hay, articles, possessives) to describe a place and ask for useful information: “¿Dónde está tu habitación?”. It is the natural next step: using these sentences in a complete conversation.', href: '/gramatica/microproduccion-a1', label: 'Ir a la clase 044' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: tu alumno dice una frase sobre su mañana y la transforma en tres: «¿… ?» (sí / no), «¿Cuándo…?» y negación. Tarea: escribir una nota real para su casa o su trabajo con quién hace qué y cuándo, y dos preguntas.' },
        ] },
      ],
    },
  ],
};
