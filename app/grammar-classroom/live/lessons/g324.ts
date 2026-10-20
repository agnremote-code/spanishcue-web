import type { LiveLesson } from '../types';

/**
 * Lesson 324 · A1 · Oraciones negativas y posición de no (course unit G024).
 * One scene runs through the class: Nuria and Pablo work together at a travel
 * agency in Guadalajara and need two hours to prepare a presentation for a
 * client. They reject three dates (Monday: Nuria has a doctor's appointment;
 * Tuesday: Pablo's day off; Wednesday: no free meeting room) and choose Thursday.
 * Content: subject + no + verb (no tengo, no trabajo, no hay, no es, no está);
 * no + puedo / quiero + infinitive (no puedo venir); short answer «No.» versus
 * complete answer «No, no + verb». Nuria, Pablo and the learner speak with tú;
 * days and clock times are glossed (they are taught later in the course).
 */
export const lesson: LiveLesson = {
  id: 324,
  level: 'A1',
  title: 'Oraciones negativas y posición de no',
  subtitle: 'Decir que no puedes, no tienes tiempo o no trabajas, con «no» antes del verbo, y responder «No» o «No, no puedo».',
  legend: [
    { tone: 'orange', label: 'NO + VERBO · no tengo, no trabajo, no hay' },
    { tone: 'violet', label: 'NO + PUEDO / QUIERO + infinitivo · no puedo venir' },
    { tone: 'blue', label: 'RESPUESTA · No. / No, no puedo.' },
    { tone: 'teal', label: 'SÍ · frase afirmativa (positive sentence)' },
  ],
  optionNotes: {
    'No, puedo.': 'Con un solo «no», la frase parece decir que sí puedes. Para negar el verbo, el segundo «no» va antes: **No, no puedo**.',
    'trabajo no.': '«No» al final no niega el verbo. Va antes: **no trabajo**.',
    'tengo no': '«No» nunca va después del verbo. Va antes: **no tengo**.',
    'hay no': '«No» va antes de hay: **no hay**.',
    'puede no': '«Puede no venir» significa otra cosa (maybe he won’t come). Para decir que no puede, «no» va antes del primer verbo: **no puede** venir.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Tres fechas, tres «no»', coach: '«No» va antes del verbo. “No” goes before the verb.',
      steps: [
        { title: 'Una presentación difícil · A hard-to-plan presentation', blocks: [
          { kind: 'lead', text: 'Nuria y Pablo trabajan en una agencia de viajes en Guadalajara, México. Necesitan **dos horas juntos** para preparar una presentación para un cliente. Proponen tres fechas… y las tres veces la respuesta es **«no»**. Hoy aprendes a decir que no: dónde va **no** en la frase y cómo responder «no» corto o completo.', en: 'Nuria and Pablo work at a travel agency in Guadalajara, Mexico. They need two hours together to prepare a presentation for a client. They suggest three dates… and all three times the answer is “no”. Today you learn to say no: where “no” goes in the sentence and how to answer “no” briefly or in full.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después, tu alumno dice dónde está la palabra «no» en cada frase: ¿antes o después del verbo?', self: 'Lee las tres frases en voz alta. Mira dónde está la palabra «no»: ¿antes o después del verbo? (Before or after the verb?)' } },
          { kind: 'compare', title: 'Sí y no · Yes and no', columns: [
            { tone: 'teal', label: 'SÍ · positive', sentence: 'Pablo: «[[Tengo|teal]] tiempo».', idea: 'Una frase afirmativa: sin «no».', en: 'Pablo: “I have time.”' },
            { tone: 'orange', label: 'NO + VERBO · negative', sentence: 'Nuria: «[[No tengo|orange]] tiempo».', idea: '«No» va justo antes del verbo.', en: 'Nuria: “I don’t have time.”' },
            { tone: 'blue', label: 'RESPUESTA · answer', sentence: '—¿Puedes el lunes? —[[No, no puedo|blue]].', idea: 'El primer «no» responde; el segundo niega el verbo.', en: '“Can you on Monday?” “No, I can’t.”' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Los días de la semana · The days of the week', text: 'Hoy vas a ver muchos días: **lunes, martes, miércoles, jueves, viernes**, sábado, domingo. «El lunes» = on Monday. Solo necesitas reconocerlos: la clase de los días y la hora llega más tarde.', en: 'Today you will see many days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. “El lunes” = on Monday. You only need to recognise them: the class on days and time comes later.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No tengo tiempo» significa…', options: ['I don’t have time.', 'I have time.', 'Do you have time?'], answer: 0, why: '«No» + tengo = I don’t have.', en: '“No tengo tiempo” means…' },
            { prompt: 'En «No tengo tiempo», ¿dónde está «no»?', options: ['Antes del verbo «tengo».', 'Después del verbo «tengo».', 'Al final de la frase.'], answer: 0, why: '«No» va justo antes del verbo: no tengo.', en: 'In “No tengo tiempo”, where is “no”?' },
            { prompt: '«No, no puedo»: ¿cuántas veces dice «no»?', options: ['Tres.', 'Dos: una responde, otra niega «puedo».', 'Una: es un error.'], answer: 1, why: 'El primer «no» es la respuesta; el segundo va antes de «puedo».', en: '“No, no puedo”: how many times does it say “no”?' },
          ] },
        ] },
        { title: 'No + verbo · No + verb', mascot: '/brand/mascot/studying.webp', coach: 'Sujeto, no, verbo. Subject, no, verb.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'NO + VERBO', question: '¿Dónde va «no»?', en: 'Where does “no” go?', formula: ['(sujeto) + no + verbo + resto', 'Yo no trabajo el martes. · Pablo no trabaja el martes.'],
            meaning: 'Para negar una frase, pones **no** justo **antes del verbo**. Si hay sujeto (yo, Pablo, la sala), «no» va entre el sujeto y el verbo. Nada más cambia: el verbo es el mismo.',
            examples: [
              { es: '[[No tengo|orange]] dinero; hoy [[no trabajo|orange]].', en: 'I don’t have money; today I’m not working.' },
              { es: 'Pablo [[no trabaja|orange]] el martes.', en: 'Pablo doesn’t work on Tuesday.' },
              { es: '[[No hay|orange]] sala libre el miércoles.', en: 'There is no free room on Wednesday.' },
              { es: 'La cafetería [[no es|orange]] un buen lugar para trabajar.', en: 'The café is not a good place to work.' },
              { es: 'Nuria [[no está|orange]] en la oficina el lunes.', en: 'Nuria is not in the office on Monday.' },
            ],
            note: 'Funciona con todos los verbos que ya conoces: ser, estar, hay, tener, hacer, venir, querer, poder… y con los verbos regulares en -ar, -er, -ir.' },
          { kind: 'table', title: 'Pares mínimos · Minimal pairs', head: ['Afirmativa (positive)', 'Negativa (negative)', 'English'], rows: [
            ['[[Tengo|teal]] tiempo.', '[[No tengo|orange]] tiempo.', 'I have time. / I don’t have time.'],
            ['El martes [[trabajo|teal]].', 'El martes [[no trabajo|orange]].', 'I work on Tuesday. / I don’t work on Tuesday.'],
            ['[[Hay|teal]] sala libre.', '[[No hay|orange]] sala libre.', 'There is a free room. / There is no free room.'],
            ['Pablo [[está|teal]] en la oficina.', 'Pablo [[no está|orange]] en la oficina.', 'Pablo is in the office. / Pablo is not in the office.'],
          ], note: 'Solo cambia una cosa: **no** antes del verbo. El orden del resto de la frase es el mismo.' },
          { kind: 'tip', icon: '💡', title: 'En español no hay «don’t»', text: 'En inglés dices «I **don’t** work». En español no hay una palabra como «do / don’t»: solo **no** + el verbo. «I don’t work» = **No trabajo**. «She doesn’t work» = **No trabaja**.', en: 'In English you say “I don’t work”. Spanish has no word like “do / don’t”: just “no” + the verb. “I don’t work” = No trabajo. “She doesn’t work” = No trabaja.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'I don’t work on Tuesday. → El martes…', options: ['no trabajo.', 'trabajo no.', 'no hago trabajar.'], answer: 0, why: '«No» + verbo: no trabajo. No hay «do».', en: 'I don’t work on Tuesday.' },
            { prompt: 'There is no room. → …', options: ['No hay sala.', 'Hay no sala.', 'Hay sala no.'], answer: 0, why: '«No» antes de «hay»: no hay sala.', en: 'There is no room.' },
            { prompt: 'Pablo is not in the office. → Pablo…', options: ['está no en la oficina.', 'no es en la oficina.', 'no está en la oficina.'], answer: 2, why: 'Sujeto + no + verbo; y un lugar va con estar: no está.', en: 'Pablo is not in the office.' },
          ] },
        ] },
        { title: 'No + puedo / quiero + infinitivo', mascot: '/brand/mascot/speaking.webp', coach: '«No» antes del primer verbo. Before the first verb.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NO + PUEDO / QUIERO', question: '¿Y con dos verbos?', en: 'And with two verbs?', formula: ['no + puedo / quiero + infinitivo (-ar, -er, -ir)', 'No puedo venir. · No quiero esperar.'],
            meaning: 'Con **puedo + infinitivo** o **quiero + infinitivo** hay dos verbos. «No» va antes del **primer verbo** (puedo, quiero), no antes del infinitivo ni al final.',
            examples: [
              { es: 'El lunes [[no puedo venir|violet]].', en: 'I can’t come on Monday.' },
              { es: 'Pablo [[no puede trabajar|violet]] el martes.', en: 'Pablo can’t work on Tuesday.' },
              { es: '[[No queremos hacer|violet]] la reunión en la cafetería.', en: 'We don’t want to have the meeting in the café.' },
              { es: '¿[[No quieres esperar|violet]] hasta el viernes?', en: 'Don’t you want to wait until Friday?' },
            ],
            note: 'El infinitivo es la forma del diccionario: trabajar, hacer, venir. Las formas puedo / puedes / puede y quiero / quieres / quiere ya las conoces de la clase 020.' },
          { kind: 'compare', title: 'Un verbo o dos · One verb or two', columns: [
            { tone: 'orange', label: 'UN VERBO', sentence: 'El jueves [[no trabajo|orange]].', idea: '«No» antes del único verbo.', en: 'I don’t work on Thursday.' },
            { tone: 'violet', label: 'DOS VERBOS', sentence: 'El jueves [[no puedo trabajar|violet]].', idea: '«No» antes del primero: puedo.', en: 'I can’t work on Thursday.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'I can’t come on Monday. → El lunes…', options: ['no puedo venir.', 'puedo no venir.', 'puedo venir no.'], answer: 0, why: '«No» antes del primer verbo: no puedo venir. («Puedo no venir» significa otra cosa: I can choose not to come.)', en: 'I can’t come on Monday.' },
            { prompt: 'Nuria doesn’t want to wait. → Nuria…', options: ['no quiere esperar.', 'quiere esperar no.', 'quiere no esperar no.'], answer: 0, why: 'No + quiere + infinitivo: no quiere esperar.', en: 'Nuria doesn’t want to wait.' },
            { prompt: '¿Dónde va «no» en «Podemos trabajar el jueves»?', options: ['Después de «jueves».', 'Antes de «podemos».', 'Antes de «trabajar».'], answer: 1, why: 'Antes del primer verbo: No podemos trabajar el jueves.', en: 'Where does “no” go in “Podemos trabajar el jueves”?' },
          ] },
        ] },
        { title: 'Responder «no» · Answering “no”', mascot: '/brand/mascot/standing.webp', coach: 'Corto o completo. Short or full.', blocks: [
          { kind: 'lead', text: 'A una pregunta de sí o no (clase 022) puedes responder **corto**, solo «No», o **completo**, con el verbo. En la respuesta completa hay **dos «no»**: el primero responde la pregunta; el segundo va antes del verbo.', en: 'You can answer a yes/no question (class 022) briefly, just “No”, or in full, with the verb. In the full answer there are two “no”s: the first one answers the question; the second one goes before the verb.' },
          { kind: 'compare', title: '—¿Puedes el lunes?', columns: [
            { tone: 'blue', label: 'CORTA · short', sentence: '—[[No|blue]].', idea: 'Correcta, pero muy seca. Mejor con «gracias» o una razón.', en: '“No.”' },
            { tone: 'blue', label: 'COMPLETA · full', sentence: '—[[No, no puedo|blue]].', idea: 'Dos «no»: respuesta + no puedo.', en: '“No, I can’t.”' },
            { tone: 'blue', label: 'CON RAZÓN · with a reason', sentence: '—[[No, no puedo|blue]]. Tengo cita médica.', idea: 'La más amable: dices por qué.', en: '“No, I can’t. I have a doctor’s appointment.”' },
            { tone: 'teal', label: 'SÍ · yes', sentence: '—[[Sí, puedo|teal]].', idea: 'Con sí, solo un sí: «Sí, puedo».', en: '“Yes, I can.”' },
          ] },
          { kind: 'decide', title: 'Respondes que no · You answer no', steps: [
            { q: '¿Respondes solo con una palabra? (Just one word?)', yes: 'Di **No.** (mejor: «No, gracias» o «No, lo siento»).', no: 'next' },
            { q: '¿Respondes con el verbo? (With the verb?)', yes: 'Dos «no»: **No, no puedo** · **No, no tengo tiempo** · **No, no trabajo**.', no: 'Usa la respuesta corta: «No».' },
          ] },
          { kind: 'tip', icon: '🔑', title: '«No, puedo» ≠ «No, no puedo»', text: 'Con un solo «no», la frase **«No, puedo»** parece decir que **sí** puedes. Si quieres decir que no puedes, necesitas el segundo «no»: **No, no puedo**.', en: 'With only one “no”, “No, puedo” sounds as if you can. If you mean you can’t, you need the second “no”: No, no puedo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Trabajas el martes? —No, ___', options: ['trabajo.', 'trabajo no.', 'no trabajo.'], answer: 2, why: 'Respuesta completa: No, no trabajo. El segundo «no» va antes del verbo.', en: '“Do you work on Tuesday?” “No, I don’t.”' },
            { prompt: '—¿Tienes tiempo hoy? Respuesta corta:', options: ['No.', 'No, tengo.', 'Tengo no.'], answer: 0, why: 'La respuesta corta es solo «No».', en: '“Do you have time today?” Short answer:' },
            { prompt: '—¿Puedes el miércoles? Nuria no puede. Dice:', options: ['No, puedo.', 'Sí, no puedo.', 'No, no puedo.'], answer: 2, why: 'Dos «no»: la respuesta y no + puedo.', en: '“Can you on Wednesday?” Nuria can’t. She says:' },
            { prompt: '—¿Puedes el jueves? Pablo puede. Dice:', options: ['Sí, no puedo.', 'No, no puedo.', 'Sí, puedo.'], answer: 2, why: 'Si puede, responde con sí: Sí, puedo.', en: '“Can you on Thursday?” Pablo can. He says:' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Busca el verbo y pon «no» antes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Dónde está el verbo?». Tu alumno dice dónde va «no» y después aparece la corrección.', self: 'Lee cada frase, busca el verbo y piensa dónde va «no». Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Tengo no tiempo el lunes.', right: 'No tengo tiempo el lunes.', why: '«No» va antes del verbo, no después. (No goes before the verb: no tengo.)' },
            { wrong: 'El martes trabajo no.', right: 'El martes no trabajo.', why: '«No» al final no niega el verbo. Va antes: no trabajo. (Not at the end.)' },
            { wrong: '—¿Puedes el miércoles? —No, puedo.', right: '—¿Puedes el miércoles? —No, no puedo.', why: 'Con un solo «no» parece que sí puedes. Necesitas el segundo «no» antes de puedo. (Two no’s.)' },
            { wrong: 'No yo trabajo el martes.', right: 'Yo no trabajo el martes.', why: '«No» va entre el sujeto y el verbo: yo no trabajo. (Subject + no + verb.)' },
            { wrong: 'Pablo puede venir no el martes.', right: 'Pablo no puede venir el martes.', why: 'Con dos verbos, «no» va antes del primero: no puede venir. (Before the first verb.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Nuria no tiene tiempo.', 'Nuria tiene no tiempo.', 'No Nuria tiene tiempo.'], answer: 0, why: 'Sujeto + no + verbo: Nuria no tiene tiempo.', en: 'Which sentence is correct?' },
            { prompt: '¿Qué frase es correcta?', options: ['Queremos no esperar no.', 'No queremos esperar.', 'Queremos esperar no.'], answer: 1, why: '«No» antes del primer verbo: no queremos esperar.', en: 'Which sentence is correct?' },
            { prompt: '—¿Hay sala el miércoles? Respuesta completa:', options: ['No, hay.', 'Hay no.', 'No, no hay.'], answer: 2, why: 'Dos «no»: la respuesta y no + hay.', en: '“Is there a room on Wednesday?” Full answer:' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres cosas que no hace hoy («Hoy no trabajo», «No tengo clase»…) y una que no puede hacer esta semana («No puedo…»). Tú respondes con una pregunta: «¿Y el jueves?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Lunes, martes, miércoles… ¿jueves?', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la agencia · At the agency', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Pablo y tu alumno es Nuria. Después, tu alumno toca cada palabra marcada y dice dónde va «no».', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada para ver por qué «no» va ahí.' } },
          { kind: 'explore', title: '¿Cuándo trabajamos juntos?', setting: 'Lunes por la mañana, en la agencia de viajes. Nuria y Pablo buscan dos horas para preparar la presentación del cliente. (Monday morning at the travel agency. Nuria and Pablo look for two hours to prepare the client presentation.)', lines: [
            { who: 'Nuria', text: 'Pablo, necesitamos dos horas para la presentación. ¿Puedes hoy por la tarde?', en: 'Pablo, we need two hours for the presentation. Can you this afternoon?' },
            { who: 'Pablo', text: 'Sí, yo puedo. ¿Y tú?', en: 'Yes, I can. And you?' },
            { who: 'Nuria', text: 'Yo hoy [[no puedo|violet]]. Tengo cita médica a las cuatro.', en: 'I can’t today. I have a doctor’s appointment at four.' },
            { who: 'Pablo', text: 'Bueno. ¿Y mañana, el martes?', en: 'OK. What about tomorrow, Tuesday?' },
            { who: 'Nuria', text: 'Yo sí. ¿Tú trabajas el martes?', en: 'I can. Do you work on Tuesday?' },
            { who: 'Pablo', text: '[[No, no trabajo|blue]]. Es mi día libre.', en: 'No, I don’t. It’s my day off.' },
            { who: 'Nuria', text: '¿El miércoles a las diez, en la sala grande?', en: 'Wednesday at ten, in the big room?' },
            { who: 'Pablo', text: 'Imposible: el miércoles [[no hay|orange]] sala. La sala grande [[no está libre|orange]]: hay reuniones todo el día.', en: 'Impossible: there’s no room on Wednesday. The big room isn’t free: there are meetings all day.' },
            { who: 'Nuria', text: '¿Y en la cafetería?', en: 'And in the café?' },
            { who: 'Pablo', text: '[[No|blue]]. Hay mucho ruido. [[No quiero trabajar|violet]] con ruido.', en: 'No. It’s very noisy. I don’t want to work with noise.' },
            { who: 'Nuria', text: '¿El jueves, entonces? El jueves [[no tengo|orange]] reuniones.', en: 'Thursday, then? I have no meetings on Thursday.' },
            { who: 'Pablo', text: 'Perfecto. El jueves a las diez, en la sala grande.', en: 'Perfect. Thursday at ten, in the big room.' },
          ], notes: {
            'no puedo': '**No** + puedo: Nuria no puede hoy. Aquí «puedo» va solo: el infinitivo (trabajar) se entiende.',
            'No, no trabajo': 'Respuesta completa: el primer **no** responde la pregunta; el segundo va antes del verbo: no trabajo.',
            'no hay': '**No hay** = there is no / there are no. «No» antes de hay.',
            'no está libre': 'Sujeto (la sala grande) + **no** + está. Un estado: estar libre.',
            'No': 'Respuesta corta: solo **No**. Después, Pablo da una razón: hay mucho ruido.',
            'No quiero trabajar': 'Dos verbos: **no** va antes del primero, quiero: no quiero trabajar.',
            'no tengo': '**No tengo** reuniones: no + tener. Por eso el jueves es posible.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Nuria no puede el lunes?', options: ['Tiene cita médica.', 'Es su día libre.', 'No hay sala.'], answer: 0, why: '«Tengo cita médica a las cuatro».', en: 'Why can’t Nuria on Monday?' },
            { prompt: '¿Por qué no es posible el martes?', options: ['Pablo no trabaja: es su día libre.', 'Nuria no trabaja.', 'La cafetería no está abierta.'], answer: 0, why: '«No, no trabajo. Es mi día libre».', en: 'Why is Tuesday not possible?' },
            { prompt: '¿Por qué no es posible el miércoles?', options: ['Nuria no quiere.', 'No hay sala libre.', 'Pablo tiene cita médica.'], answer: 1, why: '«El miércoles no hay sala».', en: 'Why is Wednesday not possible?' },
          ] },
        ] },
        { title: 'Las respuestas · The answers', blocks: [
          { kind: 'classify', title: '¿Qué tipo de respuesta? · What kind of answer?', categories: [
            { id: 'corta', label: 'NO · respuesta corta', tone: 'blue' },
            { id: 'completa', label: 'NO, NO + verbo · completa', tone: 'orange' },
            { id: 'si', label: 'SÍ · afirmativa', tone: 'teal' },
          ], items: [
            { text: '—¿Puedes hoy? —Sí, yo puedo.', answer: 'si', why: 'Pablo dice que sí: Sí, puedo.' },
            { text: '—¿Trabajas el martes? —No, no trabajo.', answer: 'completa', why: 'Dos «no» y el verbo: respuesta completa.' },
            { text: '—¿Y en la cafetería? —No.', answer: 'corta', why: 'Solo «No»: respuesta corta.' },
            { text: '—¿Tienes reuniones el jueves? —No, no tengo.', answer: 'completa', why: 'No + no tengo: completa.' },
            { text: '—¿Hay sala el jueves? —Sí, hay.', answer: 'si', why: 'Afirmativa: sí, hay.' },
            { text: '—¿Quieres café? —No, gracias.', answer: 'corta', why: '«No, gracias» no tiene verbo: es corta (y amable).' },
          ] },
          { kind: 'teacher', text: 'Leen otra vez las líneas de Pablo. Tu alumno cambia cada «no» por un «sí» y la frase cambia: «Es mi día libre» ya no tiene sentido. Así se ve que «no» cambia todo el significado.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca el verbo; «no» va antes. Find the verb.',
      steps: [
        { title: 'Elige la frase · Choose the sentence', blocks: [
          { kind: 'choice', items: [
            { context: 'Pablo habla del viernes. (Pablo talks about Friday.)', prompt: 'El viernes Pablo ___ en la oficina: trabaja desde casa.', options: ['está no', 'no es', 'no está'], answer: 2, why: 'No + verbo; un lugar va con estar: no está.', en: 'On Friday Pablo isn’t in the office: he works from home.' },
            { context: 'Nuria mira su agenda. (Nuria looks at her diary.)', prompt: 'Lo siento, el lunes ___ libre.', options: ['no soy', 'no estoy', 'estoy no'], answer: 1, why: 'No antes del verbo, y libre (free) con estar: no estoy libre.', en: 'Sorry, I’m not free on Monday.' },
            { context: 'El jefe pregunta por el proyector. (The boss asks about the projector.)', prompt: '—¿Hay proyector en la sala pequeña? —No, ___', options: ['no hay.', 'hay.', 'hay no.'], answer: 0, why: 'Respuesta completa: No, no hay.', en: '“Is there a projector in the small room?” “No, there isn’t.”' },
            { context: 'Pablo y Nuria hablan del cliente. (They talk about the client.)', prompt: 'El cliente ___ venir el miércoles.', options: ['no puede', 'puede no', 'no pode'], answer: 0, why: 'Dos verbos: no + puede + venir. Y con él, poder cambia: puede.', en: 'The client can’t come on Wednesday.' },
            { context: 'Nuria habla de la cafetería. (Nuria talks about the café.)', prompt: 'Nosotros ___ trabajar con ruido.', options: ['no quieremos', 'no queremos', 'queremos no'], answer: 1, why: 'No + queremos + infinitivo. Y con nosotros, querer no cambia: queremos.', en: 'We don’t want to work with noise.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Pablo trabaja no los martes.', ok: false, options: ['Pablo trabaja los martes no.', 'No Pablo trabaja los martes.', 'Pablo no trabaja los martes.'], answer: 2, why: 'Sujeto + no + verbo: Pablo no trabaja.' },
            { sentence: 'La sala grande no está libre el miércoles.', ok: true, why: 'Correcta: «no» justo antes de «está».' },
            { sentence: '—¿Tienes tiempo el lunes? —No, tengo.', ok: false, options: ['No, no tengo.', 'No, tengo no.', 'Tengo, no.'], answer: 0, why: 'Para negar el verbo hace falta el segundo «no»: No, no tengo.' },
            { sentence: 'Nuria quiere no esperar no hasta el viernes.', ok: false, options: ['Nuria no quiere esperar hasta el viernes.', 'Nuria quiere esperar no hasta el viernes.', 'No Nuria quiere esperar hasta el viernes.'], answer: 0, why: 'Un solo «no», antes del primer verbo: no quiere esperar.' },
            { sentence: 'Hoy no tengo reuniones.', ok: true, why: 'Correcta: no + tengo.' },
          ] },
        ] },
        { title: 'Completa el chat · Complete the chat', blocks: [
          { kind: 'chat-fill', title: 'Chat del equipo · Team chat', lines: [
            { who: 'Sergio (jefe)', text: 'Nuria, Pablo: ¿la presentación es el viernes?' },
            { who: 'Nuria', text: 'Sí, pero hoy ___ tiempo.', options: ['tenemos no', 'no tienemos', 'no tenemos'], answer: 2, why: 'No + verbo: no tenemos. Tener con nosotros: tenemos.' },
            { who: 'Sergio (jefe)', text: '¿Y el martes? ¿Pablo trabaja?' },
            { who: 'Pablo', text: '___ Es mi día libre.', options: ['No, trabajo.', 'Trabajo no.', 'No, no trabajo.'], answer: 2, why: 'Respuesta completa con dos «no»: No, no trabajo.' },
            { who: 'Sergio (jefe)', text: '¿El miércoles en la sala grande?' },
            { who: 'Nuria', text: 'El miércoles ___ sala libre.', options: ['no hay', 'hay no', 'no es'], answer: 0, why: 'Existencia negada: no hay.' },
            { who: 'Sergio (jefe)', text: '¿Y en mi oficina?' },
            { who: 'Pablo', text: 'Gracias, pero ___ trabajar en tu oficina: es muy pequeña.', options: ['no queremos', 'queremos no', 'no queremos no'], answer: 0, why: 'No + queremos + infinitivo, un solo «no».' },
            { who: 'Nuria', text: '¿El jueves a las diez? Yo ___ reuniones el jueves.', options: ['tengo no', 'no tiene', 'no tengo'], answer: 2, why: 'Yo + no + tengo.' },
            { who: 'Sergio (jefe)', text: 'Perfecto. El jueves, entonces.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['tiempo', 'No', 'tengo', 'hoy'], accept: ['No tengo tiempo hoy', 'Hoy no tengo tiempo'], en: 'I don’t have time today.' },
            { tiles: ['no', 'Pablo', 'trabaja', 'martes', 'el'], accept: ['Pablo no trabaja el martes', 'El martes Pablo no trabaja'], en: 'Pablo doesn’t work on Tuesday.' },
            { tiles: ['venir', 'no', 'El', 'puede', 'cliente', 'lunes', 'el'], accept: ['El cliente no puede venir el lunes', 'El lunes el cliente no puede venir'], en: 'The client can’t come on Monday.' },
            { tiles: ['no', 'puedo', 'No,'], accept: ['No, no puedo'], en: 'No, I can’t.' },
          ] },
        ] },
        { title: 'Escribe en negativo · Write it in the negative', blocks: [
          { kind: 'rewrite', title: 'Cambia a negativo · Make it negative', items: [
            { prompt: 'Tengo reuniones el jueves.', instruction: 'Escribe la frase en negativo. (Make it negative.)', accept: ['No tengo reuniones el jueves.', 'El jueves no tengo reuniones.'] },
            { prompt: 'Pablo puede venir a las diez.', instruction: 'Escribe la frase en negativo. (Make it negative.)', accept: ['Pablo no puede venir a las diez.', 'A las diez Pablo no puede venir.'] },
            { prompt: 'Hay proyector en la sala.', instruction: 'Escribe la frase en negativo. (Make it negative.)', accept: ['No hay proyector en la sala.', 'En la sala no hay proyector.'] },
            { prompt: '—¿Quieres trabajar en la cafetería?', instruction: 'Responde «no» con la respuesta completa. (Answer no, in full, with the verb.)', accept: ['No, no quiero.', 'No, no quiero trabajar en la cafetería.', 'No, no quiero trabajar ahí.', 'No, no quiero trabajar allí.'] },
          ] },
        ] },
        { title: '¿Sí o no? · Yes or no?', blocks: [
          { kind: 'classify', title: '¿Es posible el plan? · Is the plan possible?', categories: [
            { id: 'si', label: 'SÍ · el plan es posible', tone: 'teal' },
            { id: 'no', label: 'NO · el plan no es posible', tone: 'orange' },
          ], items: [
            { text: 'El jueves Nuria no tiene reuniones.', answer: 'si', why: '«No tiene reuniones» = está libre: el plan sí es posible.' },
            { text: 'El viernes la sala no está libre.', answer: 'no', why: 'Sin sala libre, el plan no es posible.' },
            { text: 'El miércoles por la tarde Pablo no está ocupado.', answer: 'si', why: '«No está ocupado» = está libre. Aquí «no» es una buena noticia.' },
            { text: 'El martes el cliente no puede venir.', answer: 'no', why: 'Si el cliente no puede venir, no hay presentación.' },
          ] },
          { kind: 'teacher', text: 'Atención en esta actividad: «no» no siempre significa «el plan no funciona». «No tengo reuniones» es una buena noticia. Tu alumno lee cada frase y explica por qué.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Nuria', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Nuria llama a Pablo · Nuria calls Pablo', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué día elige Nuria?). Segunda escucha: tu alumno levanta la mano cada vez que oye «no» antes de un verbo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes «no» antes de un verbo. (Count every “no” before a verb.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Nuria', channel: 'MENSAJE DE VOZ · DE NURIA PARA PABLO', src: '/audio/grammar-live/324.mp3',
            before: 'Es domingo por la noche. Nuria deja un mensaje de voz a Pablo sobre la presentación. ¿Qué crees que dice? (It is Sunday night. Nuria leaves Pablo a voice message about the presentation. What do you think she says?)',
            gist: { prompt: '¿Qué día propone Nuria? · Which day does Nuria suggest?', options: ['El viernes.', 'El jueves.', 'El lunes.'], answer: 1, why: '«Pero el jueves sí. El jueves por la mañana no tengo reuniones».', en: 'Which day does Nuria suggest?' },
            details: [
              { prompt: '¿Por qué Nuria no puede el lunes? · Why can’t Nuria on Monday?', options: ['No trabaja.', 'No hay sala.', 'Tiene cita médica.'], answer: 2, why: '«El lunes no puedo: tengo cita médica a las diez».', en: 'Why can’t Nuria on Monday?' },
              { prompt: '¿Qué pasa el miércoles? · What happens on Wednesday?', options: ['El cliente viene.', 'No hay sala libre.', 'Pablo no trabaja.'], answer: 1, why: '«El miércoles no hay sala libre».', en: 'What happens on Wednesday?' },
              { prompt: '¿A qué hora es posible el jueves? · What time is possible on Thursday?', options: ['Por la tarde.', 'A las diez o a las once.', 'Solo a las cuatro.'], answer: 1, why: '«¿Puedes a las diez? Si no puedes, a las once también está bien».', en: 'What time is possible on Thursday?' },
              { prompt: '¿Por qué no el viernes? · Why not Friday?', options: ['Nuria no trabaja.', 'La sala está ocupada.', 'Es el día de la presentación.'], answer: 2, why: '«El viernes no es buena idea: es el día de la presentación».', en: 'Why not Friday?' },
            ],
            transcript: 'Hola, Pablo, soy Nuria. Es por la presentación del cliente. El lunes [[no puedo|violet]]: tengo cita médica a las diez. El martes tú [[no trabajas|orange]], ¿verdad? Y el miércoles [[no hay|orange]] sala libre: la sala grande está ocupada todo el día. Pero el jueves sí. El jueves por la mañana [[no tengo|orange]] reuniones. ¿Puedes a las diez? Si [[no puedes|violet]] a las diez, a las once también está bien. Yo [[no quiero esperar|violet]] hasta el viernes. El viernes [[no es|orange]] buena idea: es el día de la presentación. Escríbeme, por favor. ¡Hasta mañana!',
            reply: { teacher: 'Tú eres Nuria. Tu alumno es Pablo y responde al mensaje: dice si puede o no puede el jueves a las diez, con «Sí, puedo» o «No, no puedo», y propone otra hora si no puede.', self: 'Responde a Nuria en voz alta como Pablo: «Hola, Nuria. El jueves a las diez sí puedo / no puedo…». Si no puedes, propón otra hora. (Answer Nuria aloud as Pablo.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Buscar una fecha', coach: 'Di que no… y propón otra cosa. Say no, then suggest.',
      steps: [
        { title: 'Tu semana · Your week', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres un compañero de trabajo y propones fechas. Tu alumno responde con su agenda real: «No, no puedo…», «No tengo…», y da una razón. Tú repites su frase si «no» está en un lugar raro y sigues.', self: 'Imagina que un compañero te propone fechas. Lee la pregunta, responde en voz alta con tu semana real y, si quieres, escribe tu respuesta. (Answer with your real week.)' } },
          { kind: 'talk', cards: [
            { q: '¿Puedes el lunes por la mañana? · Can you on Monday morning?', followUps: ['¿Por qué no? (Why not?)', '¿Y el lunes por la tarde? (And Monday afternoon?)'], phrases: ['[[No, no puedo|blue]].', 'El lunes [[no puedo|violet]]: tengo …', '[[Sí, puedo|teal]].'], hint: 'Respuesta completa: dos «no». Después, una razón: tengo clase, tengo cita médica, trabajo…', example: 'No, no puedo. El lunes por la mañana tengo clase de español. Por la tarde sí puedo.', next: 'Ahora, tu trabajo.', teacher: 'Si tu alumno dice «No, puedo», tú preguntas: «¿Puedes o no puedes?». Así nota que falta el segundo «no».' },
            { q: '¿Trabajas el sábado? · Do you work on Saturday?', followUps: ['¿Y el domingo? (And Sunday?)', '¿Qué día no trabajas? (Which day don’t you work?)'], phrases: ['[[No, no trabajo|blue]] el sábado.', 'El domingo [[no trabajo|orange]].', 'Mi día libre es …'], hint: 'No + trabajo. Un día libre (day off) es un día sin trabajo.', example: 'No, no trabajo el sábado. Y el domingo no trabajo: es mi día libre.', next: 'Ahora, tu tiempo hoy.' },
            { q: '¿Tienes tiempo hoy después del trabajo? · Do you have time today after work?', followUps: ['¿Y mañana? (And tomorrow?)', '¿Qué tienes hoy? (What do you have on today?)'], phrases: ['Hoy [[no tengo|orange]] tiempo.', '[[No, no tengo|blue]].', 'Mañana [[no tengo|orange]] reuniones.'], hint: 'No + tengo. Puedes responder corto («No») o completo («No, no tengo tiempo»).', example: 'No, hoy no tengo tiempo: tengo gimnasio. Pero mañana no tengo reuniones.', next: 'Ahora, el lugar.' },
            { q: '¿Quieres hacer la reunión en la cafetería? · Do you want to have the meeting in the café?', followUps: ['¿Por qué no? (Why not?)', '¿Dónde quieres trabajar? (Where do you want to work?)'], phrases: ['[[No quiero trabajar|violet]] con ruido.', '[[No|blue]], gracias.', 'En la cafetería [[no hay|orange]] …'], hint: 'Dos verbos: no + quiero + infinitivo.', example: 'No, gracias. No quiero trabajar con ruido. En la cafetería no hay mesas grandes.', next: 'Ahora, el problema de la sala.' },
            { q: 'La sala grande no está libre. ¿Qué hacemos? · The big room isn’t free. What do we do?', followUps: ['¿Hay otra sala? (Is there another room?)', '¿Podemos trabajar en tu casa? (Can we work at your place?)'], phrases: ['[[No hay|orange]] otra sala.', '[[No podemos trabajar|violet]] en …', '¿Podemos …?'], hint: 'Di qué no es posible y propón algo con «¿Podemos…?».', example: 'No hay otra sala libre. En mi casa no podemos trabajar: es pequeña. ¿Podemos usar la oficina de Sergio?', next: 'Para terminar, una fecha posible.' },
            { q: 'Rechaza dos fechas y elige una posible. · Turn down two dates and choose one that works.', followUps: ['¿A qué hora? (What time?)', '¿Dónde? (Where?)'], phrases: ['El … [[no puedo|violet]]: …', 'El … [[no hay|orange]] …', 'Pero el … sí. ¿Puedes …?'], hint: 'Dos «no» con razón y después un «sí»: «Pero el jueves sí».', example: 'El martes no puedo: tengo cita médica. El miércoles no hay sala. Pero el jueves sí. ¿Puedes a las diez?', teacher: 'Tú respondes como Pablo, una vez con «Sí, puedo» y otra con «No, no puedo», para que tu alumno proponga una segunda opción.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno propone fechas y tú respondes con «No, no puedo…» y una razón. Tu alumno busca otra fecha.', self: 'Ahora tú propones las fechas: haz las preguntas en voz alta («¿Puedes el lunes?») y responde como tu compañero, con dos «no» y una razón. (Now you ask, and answer as your colleague.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje al equipo', coach: 'No, no, sí. Two no’s and a yes.',
      steps: [
        { title: 'Tu mensaje · Your message', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos la posición de «no» en cada frase. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien dónde está cada «no». (Check where each “no” is.)' } },
          { kind: 'write', title: 'Un mensaje para Nuria y Pablo · A message for Nuria and Pablo', situation: 'Ahora trabajas con Nuria y Pablo. Necesitan un ensayo de la presentación antes del viernes. Escribe un mensaje al equipo: di qué días no puedes y propón una fecha posible. (You now work with Nuria and Pablo. You need a rehearsal of the presentation before Friday. Write to the team: say which days you can’t and suggest a date that works.)', task: [
            'Saluda a Nuria y a Pablo. (Greet them.)',
            'Rechaza dos días con «no» + verbo y una razón: «El martes no puedo: tengo…». (Turn down two days, with a reason.)',
            'Usa una vez **no puedo / no quiero + infinitivo**. (Use it once.)',
            'Propón una fecha con una pregunta: «¿Podemos el jueves?». (Suggest a date with a question.)',
          ], starters: ['Hola, Nuria y Pablo:', 'El martes no puedo: …', 'El miércoles no …', 'No quiero … / No puedo …', '¿Podemos el … a las …?', 'Un saludo.'],
            words: ['no puedo', 'no tengo', 'no trabajo', 'no hay', 'no quiero', 'cita médica', 'clase', 'reunión', 'sala libre', 'día libre', 'ensayo', '¿podemos…?'],
            model: 'Hola, Nuria y Pablo: Necesitamos un ensayo de la presentación. El martes [[no puedo|violet]]: tengo clase de inglés. El miércoles [[no trabajo|orange]] por la tarde. El jueves [[no hay|orange]] sala libre. ¿Podemos el lunes a las nueve? Yo [[no quiero hacer|violet]] el ensayo el viernes: es el día de la presentación. Un saludo, Sam.',
            minWords: 35,
            checks: [
              { label: '«No» + verbo (no puedo, no tengo, no hay…)', pattern: '(?<!\\p{L})no\\s+(?:puedo|tengo|trabajo|hay|estoy|es|quiero|podemos|tenemos)(?!\\p{L})', tip: 'Rechaza un día con «no» antes del verbo: «El martes no puedo».' },
              { label: 'No puedo / no quiero + infinitivo', pattern: '(?<!\\p{L})no\\s+(?:puedo|quiero|podemos|queremos)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Usa dos verbos: «No puedo venir», «No quiero hacer el ensayo el viernes».' },
              { label: 'Una propuesta con pregunta (¿Podemos…?)', pattern: '¿[^?]*(?:podemos|puedes|pueden|quieres|quieren)[^?]*\\?', tip: 'Propón una fecha: «¿Podemos el jueves a las diez?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:tengo|puedo|quiero|podemos|tenemos|queremos)\\s+no(?!\\p{L})', why: '¿«No» va después del verbo? Normalmente va antes: «no tengo», «no puedo», «no quiero».' },
              { pattern: '(?<!\\p{L})no\\s+(?:yo|nosotros)\\s', why: '«No» va entre el sujeto y el verbo: «Yo no puedo», no «No yo puedo».' },
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
            { tone: 'teal', label: 'SÍ', formula: 'sujeto + verbo', example: 'Tengo tiempo. · Hay sala.', caption: 'frase afirmativa', en: 'positive sentence' },
            { tone: 'orange', label: 'NO + VERBO', formula: 'sujeto + no + verbo', example: 'No tengo tiempo. · Pablo no trabaja.', caption: '«no» justo antes del verbo', en: 'no right before the verb' },
            { tone: 'violet', label: 'NO + PUEDO / QUIERO', formula: 'no + puedo / quiero + infinitivo', example: 'No puedo venir. · No quiero esperar.', caption: '«no» antes del primer verbo', en: 'no before the first verb' },
            { tone: 'blue', label: 'RESPUESTA', formula: 'No. · No, no + verbo', example: '—¿Puedes? —No. / —No, no puedo.', caption: 'corta o completa', en: 'short or full answer' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Busca el **verbo** y pon **no** justo antes. Con dos verbos, antes del **primero**. Y si respondes «no» con el verbo, di **dos «no»**: «No, no puedo».', en: 'Find the verb and put “no” right before it. With two verbs, before the first one. And if you answer “no” with the verb, say two “no”s: “No, no puedo”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Yo hoy ___ dinero para el taxi.', options: ['tengo no', 'no tiene', 'no tengo'], answer: 2, why: 'Yo + no + tengo.', en: 'Today I don’t have money for the taxi.' },
            { prompt: '—¿Trabajas el domingo? —No, ___', options: ['trabajo.', 'trabajo no.', 'no trabajo.'], answer: 2, why: 'Respuesta completa: No, no trabajo.', en: '“Do you work on Sunday?” “No, I don’t.”' },
            { prompt: 'Sergio ___ venir a la presentación.', options: ['no puede', 'puede no', 'no pode'], answer: 0, why: 'No + puede + infinitivo.', en: 'Sergio can’t come to the presentation.' },
            { prompt: '¿Qué frase es correcta?', options: ['Yo no quiero café.', 'No yo quiero café.', 'Yo quiero no café.'], answer: 0, why: 'Sujeto + no + verbo: yo no quiero.', en: 'Which sentence is correct?' },
            { prompt: '—¿Hay proyector? —No. Quieres responder con el verbo:', options: ['No, hay.', 'Hay no.', 'No, no hay.'], answer: 2, why: 'Dos «no»: No, no hay.', en: '“Is there a projector?” You want to answer with the verb:' },
          ] },
        ] },
        { title: 'Ahora fuera del trabajo · Now outside work', mascot: '/brand/mascot/walking.webp', coach: 'La misma regla, otra situación.', blocks: [
          { kind: 'lead', text: 'El sábado, una amiga te invita a muchos planes. Esta semana no es posible. Responde «no» con el verbo.', en: 'On Saturday a friend invites you to lots of plans. This week it isn’t possible. Answer “no” with the verb.' },
          { kind: 'rewrite', title: 'Responde a tu amiga · Answer your friend', items: [
            { prompt: '—¿Vienes al cine el sábado?', instruction: 'Responde «no» con la respuesta completa. (Answer no, in full.)', accept: ['No, no vengo.', 'No, no vengo al cine.', 'No, no vengo al cine el sábado.', 'No, el sábado no vengo.'] },
            { prompt: '—¿Tienes tiempo el domingo?', instruction: 'Responde «no» con la respuesta completa. (Answer no, in full.)', accept: ['No, no tengo.', 'No, no tengo tiempo.', 'No, no tengo tiempo el domingo.', 'No, el domingo no tengo tiempo.'] },
            { prompt: '—¿Puedes salir el viernes por la noche?', instruction: 'Responde «no» con la respuesta completa. (Answer no, in full.)', accept: ['No, no puedo.', 'No, no puedo salir.', 'No, no puedo salir el viernes.', 'No, no puedo salir el viernes por la noche.', 'No, el viernes no puedo.'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 025 · Conectores elementales: y, e, o, u, pero, ni', text: 'Ya sabes decir que no. Pero Nuria y Pablo unen ideas todo el tiempo: «Yo puedo, **pero** no hay sala». En la clase 025 aprendes a unir frases con **y, o, pero** y **ni**, perfecto para tus «no»: «No puedo el lunes **ni** el martes».', en: 'You can now say no. But Nuria and Pablo join ideas all the time: “I can, but there’s no room”. In class 025 you learn to join sentences with y, o, pero and ni, perfect for your “no”s: “I can’t on Monday or on Tuesday”.', href: '/conecta-la-frase', label: 'Ir a la clase 025' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Di dos cosas que no haces esta semana y una que no puedes hacer». Respuesta esperada: «No trabajo el…», «No tengo…», «No puedo…». Tarea para la próxima clase: mandar el mensaje de Escribir (o uno parecido) a un compañero real.' },
        ] },
      ],
    },
  ],
};
