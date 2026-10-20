import type { LiveLesson } from '../types';

/**
 * Lesson 154 · C1 · Pretérito anterior (receptive).
 * Clara edits the newsletter of a cultural centre and finds an old chronicle
 * in the archive: the class reads, interprets and modernises it, never asks
 * learners to use the form in everyday speech.
 */
export const lesson: LiveLesson = {
  id: 154,
  level: 'C1',
  title: 'Pretérito anterior',
  subtitle: 'Reconocer «hubo + participio» en textos formales e históricos, interpretar la secuencia que expresa y reformularla con precisión en español actual.',
  legend: [
    { tone: 'violet', label: 'Pretérito anterior: hubo + participio' },
    { tone: 'orange', label: 'Conector de inmediatez: apenas, cuando, tan pronto como' },
    { tone: 'teal', label: 'Versión actual con pretérito indefinido' },
    { tone: 'blue', label: 'Versión actual con pluscuamperfecto: estado previo' },
  ],
  optionNotes: {
    'Ya había terminado la lectura mucho antes de entregar los documentos': 'Añade un intervalo largo que la fuente no expresa: «apenas» indica que no pasó casi nada de tiempo.',
    'Mientras terminaba la lectura, entregaba los documentos': 'El imperfecto con «mientras» presenta las dos acciones como simultáneas y en desarrollo. La fuente las presenta sucesivas y cerradas.',
    'Hubieron muchas protestas': 'Con «haber» impersonal (existencia) el verbo va siempre en singular: «hubo muchas protestas».',
    'hubieron terminados': 'El participio de los tiempos compuestos es invariable: «hubieron terminado».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un tiempo para leer, no para hablar', coach: 'Hoy aprendemos a reconocerlo y a traducirlo al español actual.',
      steps: [
        { title: 'Una forma que vas a leer · A form you will read', blocks: [
          { kind: 'lead', text: 'Clara prepara el boletín de un centro cultural. En el archivo encuentra una crónica antigua: «[[Apenas|orange]] [[hubo terminado|violet]] la lectura del informe, la secretaria entregó los documentos». ¿Qué tiempo es «hubo terminado» y qué dice exactamente sobre el orden de los hechos?', en: 'Clara is preparing a cultural centre’s newsletter and finds an old chronicle in the archive with the form «hubo terminado». What tense is it, and what exactly does it say about the order of events? In this class you learn to recognise and interpret it, not to use it when you speak.' },
          { kind: 'guide', text: { teacher: 'Aclara desde el principio que el objetivo es receptivo: el alumno debe reconocer e interpretar la forma, no usarla al hablar.', self: 'En esta clase no vas a usar esta forma al hablar: vas a aprender a reconocerla, entenderla y reformularla.' } },
          { kind: 'table', title: 'Pretérito indefinido de «haber» + participio · Preterite of «haber» + participle', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', '**hube** hablado', '**hube** comido', '**hube** vivido'],
            ['tú', '**hubiste** hablado', '**hubiste** comido', '**hubiste** vivido'],
            ['él / ella / usted', '**hubo** hablado', '**hubo** comido', '**hubo** vivido'],
            ['nosotros / nosotras', '**hubimos** hablado', '**hubimos** comido', '**hubimos** vivido'],
            ['vosotros / vosotras', '**hubisteis** hablado', '**hubisteis** comido', '**hubisteis** vivido'],
            ['ellos / ellas / ustedes', '**hubieron** hablado', '**hubieron** comido', '**hubieron** vivido'],
          ], note: 'En los textos casi siempre aparecen la tercera persona («hubo», «hubieron») y, en relatos en primera persona, «hube». El participio es invariable; los irregulares se mantienen: «hubo dicho», «hubieron puesto», «hubo vuelto».' },
          { kind: 'tip', icon: '📚', title: 'Dónde aparece hoy · Where it appears today', text: 'En novela, crónica histórica, textos jurídicos antiguos y alguna prosa periodística muy cuidada. En la conversación y en los mensajes actuales prácticamente **no se usa**.', en: 'You will find it in novels, historical chronicles, old legal texts and some very polished journalism. In conversation and in today’s messages it is practically never used, a bit like English «had no sooner…» in literary prose.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué forma pertenece al pretérito anterior?', options: ['hubieron firmado', 'habían firmado', 'hubieran firmado'], answer: 0, why: 'Indefinido de «haber» (hubieron) + participio.', en: 'Which form belongs to the pretérito anterior?' },
            { prompt: 'En «Cuando hubo hablado el rector, comenzó la votación», ¿quién habló?', options: ['El rector.', 'Los votantes.', 'No se sabe.'], answer: 0, why: '«El rector» es el sujeto de «hubo hablado», aunque vaya detrás del verbo.', en: 'In this sentence, who spoke? (The subject can come after the verb.)' },
            { prompt: '¿Qué registro tiene esta forma hoy?', options: ['Escrito, formal o literario.', 'Coloquial y frecuente.', 'Típico de los mensajes de texto.'], answer: 0, why: 'Es un tiempo de lectura: aparece en prosa formal o histórica.', en: 'What register does this form have today?' },
          ] },
        ] },
        { title: 'Anterioridad inmediata · Immediate anteriority', mascot: '/brand/mascot/studying.webp', coach: 'Una acción termina y la otra empieza casi sin pausa.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PRETÉRITO ANTERIOR', question: '¿Qué pasó justo antes?', en: 'The pretérito anterior presents an action completed immediately before another past action. It almost always appears in a time clause with a connector of immediacy (apenas, cuando, tan pronto como…), and the main action is in the preterite.', formula: ['apenas / cuando / tan pronto como / luego que / así que + hubo + participio, + indefinido'],
            meaning: 'Presenta una acción **completada inmediatamente antes** de otra acción pasada. Va casi siempre en una subordinada temporal introducida por un **conector de inmediatez**; la acción principal va en pretérito indefinido.',
            examples: [
              { es: '[[Apenas|orange]] [[hubo terminado|violet]] la lectura, la secretaria entregó los documentos.', en: 'As soon as the reading had finished, the secretary handed over the documents.' },
              { es: '[[Cuando|orange]] [[hubieron revisado|violet]] la lista, los asistentes abandonaron la sala.', en: 'When they had gone through the list, the attendees left the room.' },
              { es: '[[Tan pronto como|orange]] [[hubo hablado|violet]], comenzó la votación.', en: 'As soon as he had spoken, the vote began.' },
              { es: '[[Así que|orange]] [[hubo cenado|violet]], se retiró a su habitación.', en: 'As soon as he had had dinner, he withdrew to his room. («Así que» is temporal here, not «so».)' },
            ],
            note: '«Así que» y «luego que» tienen aquí sentido temporal (= en cuanto), no consecutivo.' },
          { kind: 'tip', icon: '⏱', title: 'Dos rasgos a la vez · Two features at once', text: 'La forma dice dos cosas: la primera acción está **completa** y la segunda llega **enseguida**. Al reformular, decide cuál de los dos rasgos quieres conservar.', en: 'The form tells you two things: the first action is complete, and the second follows straight away. When you reword it, decide which of the two features you want to keep.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Apenas hubo llegado el tren, los viajeros bajaron.» ¿Qué relación expresa?', options: ['Bajaron inmediatamente después de la llegada.', 'Bajaron mientras el tren llegaba.', 'Bajaron mucho después.'], answer: 0, why: 'Acción completa (llegar) y otra inmediata (bajar).', en: 'What relationship between the two actions does this sentence express?' },
            { prompt: 'En «Luego que hubo firmado, se marchó», «luego que» significa…', options: ['en cuanto', 'por lo tanto', 'aunque'], answer: 0, why: 'Es un conector temporal de inmediatez.', en: 'In this sentence, what does «luego que» mean?' },
          ] },
        ] },
        { title: '«Hubo» auxiliar o «hubo» impersonal · Auxiliary «hubo» or impersonal «hubo»', mascot: '/autoestudio/mascot/noting.webp', coach: 'Mira qué viene después de «hubo».', blocks: [
          { kind: 'compare', title: 'La misma palabra, dos funciones · The same word, two functions', columns: [
            { tone: 'neutral', label: 'HABER IMPERSONAL', sentence: '**Hubo** una reunión en la sala.', idea: 'Presenta la existencia de algo: después va un nombre. Siempre en singular: «hubo dos reuniones».', en: 'Impersonal haber states that something existed or happened (English «there was / there were»): a noun follows, and it is always singular.' },
            { tone: 'violet', label: 'AUXILIAR', sentence: '[[Apenas|orange]] [[hubo terminado|violet]] la lectura, salió.', idea: 'Forma un tiempo compuesto: después va un participio. Concuerda con el sujeto: «hubieron revisado».', en: 'Auxiliary: it forms a compound tense, so a participle follows, and it agrees with the subject.' },
          ] },
          { kind: 'decide', title: 'Lee la palabra que sigue a «hubo / hubieron» · Look at the word after «hubo / hubieron»', steps: [
            { q: '¿Es un participio (-ado, -ido, dicho, hecho…)?', yes: 'Es el **auxiliar** del pretérito anterior: busca el sujeto y el conector.', no: 'next' },
            { q: '¿Es un nombre o un grupo nominal (una reunión, protestas)?', yes: 'Es **haber impersonal**: indica que algo existió u ocurrió. Va en singular.', no: 'Revisa la frase: quizá es «haber de + infinitivo» («hubo de aceptar» = tuvo que aceptar).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿En qué frase «hubo» es auxiliar?', options: ['Hubo un apagón en el barrio.', 'Cuando hubo cerrado la tienda, volvió a casa.', 'Hubo muchas preguntas.'], answer: 1, why: 'Después de «hubo» va un participio: «cerrado».', en: 'In which sentence is «hubo» an auxiliary?' },
            { prompt: '¿Cuál es correcta?', options: ['Hubieron muchas protestas', 'Hubo muchas protestas'], answer: 1, why: 'El «haber» impersonal no tiene plural.', en: 'Which one is correct?' },
          ] },
        ] },
        { title: 'Modernizar sin traicionar · Modernise without betraying the source', mascot: '/brand/mascot/speaking.webp', coach: 'Elige qué rasgo quieres conservar.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VERSIÓN CON INDEFINIDO', question: '¿Quieres conservar la inmediatez?', en: 'This is the rewording most faithful to the rhythm of the original: it keeps the order and the closeness of the two actions, using a tense people use today.', formula: ['apenas / en cuanto / tan pronto como + indefinido', 'nada más + infinitivo', 'después de + infinitivo'],
            meaning: 'Es la reformulación más fiel al **ritmo** del original: mantiene el orden y la proximidad de las acciones con un tiempo actual.',
            examples: [
              { es: 'Apenas [[terminó|teal]] la lectura, la secretaria entregó los documentos.', en: 'As soon as the reading finished, the secretary handed over the documents.' },
              { es: 'En cuanto [[revisaron|teal]] la lista, los asistentes salieron.', en: 'As soon as they had checked the list, the attendees went out.' },
              { es: 'Nada más [[firmar|teal]], abandonaron la sala.', en: 'Right after signing, they left the room.' },
            ] },
          { kind: 'concept', tone: 'blue', label: 'VERSIÓN CON PLUSCUAMPERFECTO', question: '¿Quieres destacar el estado previo?', en: 'This version stresses that the first action was already complete when the second came. It is correct, but the focus changes and the sense of «straight away» is lost.', formula: ['cuando + indefinido, ya + había + participio', 'ya + había sido + participio'],
            meaning: 'Pone el foco en que la primera acción **ya estaba completa** al llegar la segunda. Es correcta, pero **cambia el foco**: se pierde la idea de «enseguida».',
            examples: [
              { es: 'Cuando salieron, ya [[habían revisado|blue]] la lista.', en: 'When they went out, they had already checked the list.' },
              { es: 'La lista ya [[había sido revisada|blue]] cuando los asistentes salieron.', en: 'The list had already been checked when the attendees went out.' },
              { es: 'Cuando entregó los documentos, la lectura ya [[había terminado|blue]].', en: 'When she handed over the documents, the reading had already finished.' },
            ] },
          { kind: 'tip', icon: '🧭', title: 'Lo que nunca debe cambiar · What must never change', text: 'Ninguna versión puede presentar las acciones como **simultáneas** («mientras revisaban, salían») ni cambiar **quién** hace cada acción. Y no añadas un intervalo largo que la fuente no indica.', en: 'No version may present the actions as simultaneous or change who does each action. And do not add a long interval that the source does not mention.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Para conservar la inmediatez de «Tan pronto como hubo hablado, comenzó la votación»:', options: ['Tan pronto como habló, comenzó la votación.', 'Mientras hablaba, comenzaba la votación.', 'Había hablado mucho antes de la votación.'], answer: 0, why: 'El indefinido con el mismo conector mantiene orden y proximidad.', en: 'Which version keeps the immediacy of the original?' },
            { prompt: '«Cuando salieron, ya habían revisado la lista.» ¿Qué destaca?', options: ['Que la revisión estaba completa antes de salir.', 'Que salieron mientras revisaban.', 'Que no revisaron la lista.'], answer: 0, why: 'El pluscuamperfecto con «ya» destaca el estado previo.', en: 'What does this version highlight?' },
          ] },
        ] },
        { title: 'Cómo elegir la reformulación · How to choose the rewording', mascot: '/brand/mascot/seated.webp', coach: 'Piensa en el lector.', blocks: [
          { kind: 'decide', title: 'Vas a reformular una frase con «hubo + participio» · You are rewording a sentence with «hubo + participle»', steps: [
            { q: '¿El texto es una cita que el lector debe ver tal cual?', yes: 'Conserva la cita entre comillas y añade una **explicación** breve en español actual.', no: 'next' },
            { q: '¿Importa sobre todo la rapidez de la secuencia?', yes: 'Usa **apenas / en cuanto + indefinido**: «Apenas [[terminó|teal]] la lectura, entregó los documentos».', no: 'Si importa que algo ya estaba hecho, usa el **pluscuamperfecto**: «Cuando salieron, ya [[habían revisado|blue]] la lista».' },
          ] },
          { kind: 'tip', icon: '✂', title: 'Revisa el contexto · Check the context', text: 'Antes de exagerar la inmediatez, lee el párrafo anterior: si la fuente describe una pausa, «enseguida» o «inmediatamente» serían una sobreinterpretación.', en: 'Before exaggerating the immediacy, read the previous paragraph: if the source describes a pause, «at once» or «immediately» would be an over-interpretation.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Errores de lectura y de reformulación.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno explica qué información cambia en cada versión incorrecta antes de que muestres la corrección.', self: 'Lee cada frase, piensa qué falla y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Hubieron muchas personas en la inauguración.', right: 'Hubo muchas personas en la inauguración.', why: 'Es «haber» impersonal, no el auxiliar: siempre en singular.' },
            { wrong: 'Apenas hube llegado a la oficina, te mando un mensaje para avisarte.', right: 'Apenas llegué a la oficina, te mandé un mensaje para avisarte.', why: 'En un mensaje actual, el pretérito anterior suena arcaico. Además, la acción principal debe ir en pasado.' },
            { wrong: 'Cuando hubieron revisados la lista, salieron.', right: 'Cuando hubieron revisado la lista, salieron.', why: 'El participio de los tiempos compuestos es invariable.' },
            { wrong: '«Apenas hubo terminado, salió» = «Mientras terminaba, salió».', right: '«Apenas hubo terminado, salió» = «Terminó y salió enseguida».', why: 'La fuente presenta acciones sucesivas, no simultáneas.' },
            { wrong: '«Cuando hubo firmado, se marchó» = «Cuando hubiera firmado, se marchó».', right: '«Cuando hubo firmado, se marchó» = «En cuanto firmó, se marchó».', why: '«Hubiera» es subjuntivo y no expresa un hecho cerrado: no confundas «hubo» con «hubiera».' },
            { wrong: '«Apenas hubo hablado, comenzó la votación» = «Había hablado mucho antes de la votación».', right: '«Apenas hubo hablado, comenzó la votación» = «En cuanto habló, comenzó la votación».', why: '«Apenas» indica inmediatez: no añadas un intervalo largo.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que localice el pretérito anterior en un texto literario que conozca y que proponga dos reformulaciones: una que mantenga la inmediatez y otra que destaque el estado previo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El pretérito anterior en textos reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'En el archivo · In the archive', blocks: [
          { kind: 'guide', text: { teacher: 'Lean la conversación con papeles. Después, el alumno toca cada expresión y explica qué conserva o cambia cada reformulación.', self: 'Lee la conversación. Antes de tocar cada expresión marcada, intenta explicar por qué aparece.' } },
          { kind: 'explore', title: 'Una crónica para el boletín · A chronicle for the newsletter', setting: 'Clara, editora del boletín del centro cultural, revisa con Hernán, el archivero, una crónica de 1924 sobre la inauguración del edificio. (The newsletter editor and the archivist review a 1924 chronicle about the opening of the building.)', lines: [
            { who: 'Hernán', text: 'Mira este fragmento: «[[Apenas|orange]] [[hubo terminado|violet]] la lectura del informe, la secretaria entregó los documentos».', en: 'Look at this passage: «As soon as the reading of the report had finished, the secretary handed over the documents».' },
            { who: 'Clara', text: 'Precioso, pero nadie escribe así hoy. ¿Qué dice exactamente?', en: 'Lovely, but nobody writes like that today. What exactly does it say?' },
            { who: 'Hernán', text: 'Que la lectura acabó y, justo después, se entregaron los documentos. Sigue: «[[Cuando|orange]] [[hubieron revisado|violet]] la lista, los asistentes abandonaron la sala».', en: 'That the reading ended and, right afterwards, the documents were handed over. It goes on: «When they had checked the list, the attendees left the room».' },
            { who: 'Clara', text: '«Hubieron» en plural… ¿no era incorrecto?', en: '«Hubieron» in the plural… wasn’t that wrong?' },
            { who: 'Hernán', text: 'Aquí no: es el auxiliar y concuerda con «los asistentes». Lo incorrecto sería «hubieron problemas»: ahí debe ser «hubo problemas».', en: 'Not here: it’s the auxiliary, and it agrees with «los asistentes». What would be wrong is «hubieron problemas»: that has to be «hubo problemas».' },
            { who: 'Clara', text: 'Entendido. Para el boletín pondría: «Apenas [[terminó|teal]] la lectura, la secretaria entregó los documentos».', en: 'Got it. For the newsletter I’d put: «As soon as the reading finished, the secretary handed over the documents».' },
            { who: 'Hernán', text: 'Bien, mantiene el ritmo. ¿Y la segunda frase?', en: 'Good, it keeps the rhythm. And the second sentence?' },
            { who: 'Clara', text: 'Dudo entre «Después de [[revisar|teal]] la lista, salieron» y «La lista ya [[había sido revisada|blue]] cuando salieron».', en: 'I can’t decide between «After checking the list, they left» and «The list had already been checked when they left».' },
            { who: 'Hernán', text: 'La segunda cambia el foco: habla del estado de la lista, no de la secuencia.', en: 'The second changes the focus: it’s about the state of the list, not the sequence.' },
            { who: 'Clara', text: 'Entonces, la primera. Y conservamos la cita original en un recuadro, con una nota.', en: 'The first one, then. And we keep the original quotation in a box, with a note.' },
          ], notes: {
            'Apenas': '**Conector de inmediatez**: anuncia que la segunda acción llegó sin pausa.',
            'hubo terminado': '**Pretérito anterior**: la lectura quedó completa inmediatamente antes de la entrega.',
            'Cuando': '«Cuando» acompaña aquí al pretérito anterior con valor de inmediatez: «en cuanto».',
            'hubieron revisado': '**Auxiliar en plural**: concuerda con el sujeto, «los asistentes». El participio no cambia.',
            'terminó': '**Versión actual** con indefinido: conserva el orden y la inmediatez gracias a «apenas».',
            'revisar': '«Después de + infinitivo» conserva el **orden** de las acciones con una construcción actual y neutra.',
            'había sido revisada': '**Pluscuamperfecto** pasivo: destaca que la lista ya estaba revisada. Es correcto, pero cambia el foco.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué ocurrió inmediatamente antes de la entrega de los documentos?', options: ['Terminó la lectura del informe.', 'Los asistentes salieron.', 'Revisaron la lista.'], answer: 0, why: '«Apenas hubo terminado la lectura del informe, la secretaria entregó los documentos».', en: 'What happened immediately before the documents were handed over?' },
            { prompt: '¿Por qué «hubieron revisado» es correcto?', options: ['Es auxiliar y concuerda con «los asistentes».', 'Es haber impersonal.', 'Es un error de la crónica.'], answer: 0, why: 'El auxiliar concuerda con el sujeto; solo el impersonal va siempre en singular.', en: 'Why is «hubieron revisado» correct?' },
            { prompt: '¿Qué versión elige Clara para la segunda frase y por qué?', options: ['«Después de revisar la lista, salieron», porque mantiene la secuencia.', '«La lista ya había sido revisada…», porque es más fiel.', 'Ninguna: copia la original.'], answer: 0, why: 'Hernán señala que la segunda cambia el foco; Clara elige la primera.', en: 'Which version does Clara choose for the second sentence, and why?' },
          ] },
        ] },
        { title: 'En una novela · In a novel', blocks: [
          { kind: 'explore', title: 'Taller de lectura · Reading workshop', setting: 'En un taller de lectura, Irene comenta con su grupo un fragmento de una novela de estilo clásico. (In a reading workshop, the group discusses a passage from a novel written in a classic style.)', lines: [
            { who: 'Irene', text: 'Escuchen: «[[Así que|orange]] [[hubo cenado|violet]], el coronel se retiró a su despacho. [[No bien|orange]] [[hubo cerrado|violet]] la puerta, oyó los pasos de su hija».', en: 'Listen: «As soon as he had dined, the colonel withdrew to his study. No sooner had he closed the door than he heard his daughter’s footsteps».' },
            { who: 'Gabriel', text: '¿«Así que» no significa «por lo tanto»?', en: 'Doesn’t «así que» mean «so, therefore»?' },
            { who: 'Irene', text: 'Aquí no. Con el pretérito anterior es temporal: «[[en cuanto|teal]] cenó».', en: 'Not here. With the pretérito anterior it is temporal: «as soon as he had dinner».' },
            { who: 'Sofía', text: '¿Y «no bien»? Nunca lo había visto.', en: 'And «no bien»? I’ve never seen it before.' },
            { who: 'Irene', text: 'Es otro conector de inmediatez, muy literario: «apenas cerró la puerta».', en: 'It’s another connector of immediacy, very literary: «as soon as he closed the door».' },
            { who: 'Gabriel', text: 'Entonces podría contarlo así: «El coronel [[cenó|teal]] y se fue a su despacho. Nada más cerrar la puerta, oyó a su hija».', en: 'So I could tell it like this: «The colonel had dinner and went to his study. Right after closing the door, he heard his daughter».' },
            { who: 'Irene', text: 'Exacto. Pierdes el tono solemne, pero conservas el orden y la rapidez.', en: 'Exactly. You lose the solemn tone, but you keep the order and the speed.' },
            { who: 'Sofía', text: 'El autor lo eligió para crear tensión, ¿no? Todo pasa muy rápido.', en: 'The author chose it to build tension, didn’t he? Everything happens very fast.' },
            { who: 'Irene', text: 'Esa es una buena lectura: el tiempo verbal ayuda al suspenso.', en: 'That’s a good reading: the tense helps the suspense.' },
          ], notes: {
            'Así que': 'Conector **temporal** de inmediatez cuando acompaña al pretérito anterior (= en cuanto). No es consecutivo.',
            'hubo cenado': '**Pretérito anterior**: la cena estaba completa justo antes de retirarse.',
            'No bien': 'Conector literario de inmediatez: «no bien» = «apenas».',
            'hubo cerrado': 'Otro **pretérito anterior**: cerrar la puerta y oír los pasos son casi seguidos.',
            'en cuanto': 'Reformulación actual del conector, con **indefinido**: mantiene la inmediatez.',
            'cenó': '**Versión actual** con indefinido. «Y se fue» mantiene el orden de las acciones.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué efecto produce el pretérito anterior en este fragmento?». Respuesta posible: distancia, solemnidad y un ritmo rápido que crea tensión.' },
        ] },
        { title: '¿Auxiliar o impersonal? · Auxiliary or impersonal?', blocks: [
          { kind: 'classify', title: 'Clasifica cada «hubo / hubieron» · Classify each «hubo / hubieron»', categories: [
            { id: 'auxiliar', label: 'Auxiliar: pretérito anterior', tone: 'violet' },
            { id: 'impersonal', label: 'Haber impersonal: existencia', tone: 'neutral' },
          ], items: [
            { text: 'Apenas hubo terminado la lectura, entregó los documentos.', answer: 'auxiliar', why: 'Después va un participio: «terminado».' },
            { text: 'Hubo una larga discusión en la asamblea.', answer: 'impersonal', why: 'Después va un nombre: «una larga discusión».' },
            { text: 'Cuando hubieron revisado la lista, salieron.', answer: 'auxiliar', why: 'Participio «revisado»; el auxiliar concuerda con el sujeto plural.' },
            { text: 'En la inauguración hubo música y discursos.', answer: 'impersonal', why: 'Presenta la existencia de música y discursos.' },
            { text: 'Así que hubo cenado, se retiró.', answer: 'auxiliar', why: 'Participio «cenado» con conector temporal.' },
            { text: 'Hubo problemas con la iluminación.', answer: 'impersonal', why: 'Va un nombre plural, pero el verbo se queda en singular.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Lee con lupa: orden, sujeto y rapidez.',
      steps: [
        { title: 'Interpreta según el contexto · Interpret according to the context', blocks: [
          { kind: 'choice', items: [
            { context: 'Crónica: «Apenas hubo terminado la lectura, la secretaria entregó los documentos».', prompt: '¿Qué relación expresa la forma?', options: ['La lectura terminó inmediatamente antes de la entrega.', 'La lectura siguió durante toda la entrega.', 'La lectura había terminado en algún momento, sin indicar cuándo.'], answer: 0, why: '«Apenas» + pretérito anterior: acción completa e inmediatamente anterior.', en: 'A chronicle. What relationship does the form express?' },
            { context: 'Novela: «Tan pronto como hubieron firmado, los ministros abandonaron el palacio».', prompt: '¿Quién firmó?', options: ['Los ministros.', 'Otras personas.', 'No se sabe.'], answer: 0, why: '«Hubieron» concuerda con el sujeto de las dos acciones: «los ministros».', en: 'A novel. Who signed?' },
            { context: 'Acta antigua: «Luego que hubo leído el acta, el presidente levantó la sesión».', prompt: '«Luego que» significa aquí…', options: ['en cuanto', 'por eso', 'más tarde, sin prisa'], answer: 0, why: 'Con el pretérito anterior, «luego que» es temporal e inmediato.', en: 'Old minutes. What does «luego que» mean here?' },
            { context: 'Biografía: «No bien hubo cumplido dieciocho años, se marchó a la capital».', prompt: '¿Cuándo se marchó?', options: ['Justo al cumplir dieciocho años.', 'Antes de cumplirlos.', 'Muchos años después.'], answer: 0, why: '«No bien» = apenas: inmediatamente después del cumpleaños.', en: 'A biography. When did he leave?' },
            { context: 'Una compañera escribe en el chat del trabajo.', prompt: '¿Qué mensaje suena natural hoy?', options: ['Apenas terminé la reunión, te llamé.', 'Apenas hube terminado la reunión, te llamé.', 'Apenas hubiera terminado la reunión, te llamé.'], answer: 0, why: 'En un mensaje cotidiano se usa el indefinido.', en: 'A colleague writes in the work chat. Which message sounds natural today?' },
            { context: 'Diario de viaje del siglo XIX: «Cuando hube llegado a la posada, solicité una habitación».', prompt: '¿Quién llegó?', options: ['El autor del diario.', 'Otro viajero.', 'El dueño de la posada.'], answer: 0, why: '«Hube» es la primera persona: el que escribe.', en: 'A 19th-century travel diary. Who arrived?' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué versión conserva **más directamente** la secuencia inmediata de «Apenas hubo terminado la lectura, entregó los documentos»?', options: ['Apenas terminó la lectura, entregó los documentos', 'Ya había terminado la lectura mucho antes de entregar los documentos', 'Mientras terminaba la lectura, entregaba los documentos'], answer: 0, why: '«Apenas terminó» mantiene la terminación y la proximidad.', en: 'Which version most directly keeps the immediate sequence of the original?' },
            { prompt: 'Compara «Hubo una reunión» y «Hubo terminado la lectura».', options: ['En ambas, «hubo» presenta la existencia de algo.', 'En la primera, «haber» es impersonal; en la segunda, es auxiliar.', 'En la primera, «hubo» es auxiliar; en la segunda, impersonal.'], answer: 1, why: '«Una reunión» es un nombre; «terminado», un participio.', en: 'Compare «Hubo una reunión» and «Hubo terminado la lectura».' },
            { prompt: '«La lista ya había sido revisada cuando los asistentes salieron» moderniza «Cuando hubieron revisado la lista, salieron». ¿Qué cambia?', options: ['Se destaca el estado previo y se pierde parte del ritmo inmediato.', 'La revisión pasa a ser futura.', 'La nueva versión dice que nadie revisó la lista.'], answer: 0, why: 'El pluscuamperfecto con «ya» destaca el estado de cumplimiento.', en: 'This modern version replaces the original sentence. What changes?' },
            { prompt: '¿Qué diferencia hay entre «cuando hubo firmado» y «cuando hubiera firmado»?', options: ['La primera cuenta un hecho; la segunda es subjuntivo, hipotética o dependiente.', 'Ninguna: son formas equivalentes.', 'La primera es futura.'], answer: 0, why: '«Hubo» es indicativo; «hubiera», subjuntivo.', en: 'What is the difference between «cuando hubo firmado» and «cuando hubiera firmado»?' },
            { prompt: '¿Qué reformulación cambia **quién** actúa en «Cuando el juez hubo leído la sentencia, el acusado se levantó»?', options: ['Cuando el acusado leyó la sentencia, se levantó.', 'En cuanto el juez leyó la sentencia, el acusado se levantó.', 'Nada más leer el juez la sentencia, el acusado se levantó.'], answer: 0, why: 'Quien lee es el juez, no el acusado.', en: 'Which rewording changes who acts in the original sentence?' },
          ] },
        ] },
        { title: 'Completa la conversación editorial · Complete the editorial conversation', blocks: [
          { kind: 'chat-fill', title: 'Clara y Hernán deciden la versión final · Choosing the final version', lines: [
            { who: 'Hernán', text: 'Para el boletín, ¿cómo dejamos «Apenas hubo terminado la lectura»?' },
            { who: 'Clara', text: 'Propongo: «Apenas ___ la lectura, la secretaria entregó los documentos».', options: ['terminó', 'terminaba', 'hubiera terminado'], answer: 0, why: 'El indefinido con «apenas» mantiene la acción cerrada y la inmediatez.' },
            { who: 'Hernán', text: 'Bien. ¿Y para «Cuando hubieron revisado la lista, salieron»?' },
            { who: 'Clara', text: 'Si queremos la secuencia: «___ revisar la lista, los asistentes salieron».', options: ['Después de', 'Mientras', 'Antes de'], answer: 0, why: '«Después de + infinitivo» mantiene el orden; «mientras» crearía simultaneidad.' },
            { who: 'Hernán', text: '¿Y si queremos destacar que la lista estaba revisada?' },
            { who: 'Clara', text: 'Entonces: «Cuando salieron, ya ___ la lista».', options: ['habían revisado', 'revisaban', 'hubieran revisado'], answer: 0, why: 'El pluscuamperfecto con «ya» destaca el estado previo.' },
            { who: 'Hernán', text: 'Al pie de la cita pondría: «En 1924 ___ una gran asistencia».', options: ['hubo', 'hubieron', 'hubo habido'], answer: 0, why: '«Haber» impersonal: siempre en singular.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Hubieron muchas protestas tras la votación.', ok: false, options: ['Hubo muchas protestas tras la votación.', 'Hubieron habido muchas protestas tras la votación.', 'Hubieran muchas protestas tras la votación.'], answer: 0, why: '«Haber» impersonal no tiene plural.' },
            { sentence: 'Apenas hubo terminado el discurso, estallaron los aplausos.', ok: true, why: 'Correcta: pretérito anterior en un texto narrativo formal.' },
            { sentence: 'Cuando hubieron firmados el acuerdo, se dieron la mano.', ok: false, options: ['Cuando hubieron firmado el acuerdo, se dieron la mano.', 'Cuando hubo firmados el acuerdo, se dieron la mano.', 'Cuando hubieran firmados el acuerdo, se dieron la mano.'], answer: 0, why: 'El participio es invariable.' },
            { sentence: 'Modernización de «Apenas hubo llegado, saludó»: «Mientras llegaba, saludaba».', ok: false, options: ['Apenas llegó, saludó.', 'Mientras llegaba, saludó.', 'Había llegado mucho antes de saludar.'], answer: 0, why: 'La fuente presenta acciones sucesivas e inmediatas, no simultáneas.' },
            { sentence: 'Modernización de «Así que hubo cenado, se retiró»: «En cuanto cenó, se retiró».', ok: true, why: 'Correcta: conserva el orden y la inmediatez.' },
            { sentence: 'Mensaje a un amigo: «Apenas hubo terminado la película, te llamé».', ok: false, options: ['Apenas terminó la película, te llamé.', 'Apenas hubiera terminado la película, te llamé.', 'Apenas había terminado la película, te llamo.'], answer: 0, why: 'En un mensaje cotidiano se usa el indefinido.' },
          ] },
        ] },
        { title: 'Reformula · Reword', blocks: [
          { kind: 'build', title: 'Ordena la versión actual · Put the modern version in order', items: [
            { tiles: ['Apenas', 'terminó', 'la', 'lectura', 'entregó', 'los', 'documentos'], accept: ['Apenas terminó la lectura entregó los documentos'], en: 'As soon as the reading finished, she handed over the documents.' },
            { tiles: ['En', 'cuanto', 'firmaron', 'abandonaron', 'la', 'sala'], accept: ['En cuanto firmaron abandonaron la sala', 'Abandonaron la sala en cuanto firmaron'], en: 'As soon as they signed, they left the room.' },
            { tiles: ['Nada', 'más', 'cenar', 'se', 'retiró'], accept: ['Nada más cenar se retiró', 'Se retiró nada más cenar'], en: 'Right after dinner, he withdrew.' },
            { tiles: ['Después', 'de', 'revisar', 'la', 'lista', 'salieron'], accept: ['Después de revisar la lista salieron', 'Salieron después de revisar la lista'], en: 'After checking the list, they went out.' },
          ] },
          { kind: 'rewrite', title: 'Moderniza para un lector actual · Modernise for today’s reader', items: [
            { prompt: 'Apenas hubo terminado la lectura del informe, la secretaria entregó los documentos.', instruction: 'Conserva «apenas» y usa el indefinido.', accept: ['Apenas terminó la lectura del informe, la secretaria entregó los documentos', 'Apenas terminó la lectura del informe la secretaria entregó los documentos'] },
            { prompt: 'Tan pronto como hubo hablado el director, comenzó la votación.', instruction: 'Usa «en cuanto».', accept: ['En cuanto habló el director, comenzó la votación', 'En cuanto el director habló, comenzó la votación', 'En cuanto habló el director comenzó la votación', 'En cuanto el director habló comenzó la votación'] },
            { prompt: 'Cuando hubieron revisado la lista, los asistentes abandonaron la sala.', instruction: 'Empieza con «Cuando salieron…» y destaca el estado previo.', accept: ['Cuando salieron, los asistentes ya habían revisado la lista', 'Cuando salieron, ya habían revisado la lista', 'Cuando salieron de la sala, los asistentes ya habían revisado la lista', 'Cuando salieron de la sala, ya habían revisado la lista'] },
            { prompt: 'Así que hubo cenado, se retiró a su despacho.', instruction: 'Usa «nada más» + infinitivo.', accept: ['Nada más cenar, se retiró a su despacho', 'Nada más cenar se retiró a su despacho', 'Se retiró a su despacho nada más cenar'] },
          ] },
        ] },
        { title: 'Clasifica las reformulaciones · Classify the rewordings', blocks: [
          { kind: 'classify', title: 'Fuente: «Cuando hubieron revisado la lista, los asistentes salieron».', categories: [
            { id: 'inmediata', label: 'Conserva la secuencia inmediata', tone: 'teal' },
            { id: 'previo', label: 'Destaca el estado previo', tone: 'blue' },
            { id: 'cambia', label: 'Cambia el sentido', tone: 'neutral' },
          ], items: [
            { text: 'En cuanto revisaron la lista, los asistentes salieron.', answer: 'inmediata', why: '«En cuanto» + indefinido mantiene la rapidez.' },
            { text: 'Cuando salieron, los asistentes ya habían revisado la lista.', answer: 'previo', why: 'El pluscuamperfecto con «ya» pone el foco en el estado.' },
            { text: 'Mientras revisaban la lista, los asistentes salían.', answer: 'cambia', why: 'Presenta las acciones como simultáneas.' },
            { text: 'Nada más revisar la lista, los asistentes salieron.', answer: 'inmediata', why: '«Nada más + infinitivo» = en cuanto.' },
            { text: 'La lista ya había sido revisada cuando salieron.', answer: 'previo', why: 'Pasiva con pluscuamperfecto: estado completo.' },
            { text: 'Los asistentes salieron y luego, días después, revisaron la lista.', answer: 'cambia', why: 'Invierte el orden y añade un intervalo.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una conversación sobre la edición', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una conversación sobre la edición · A conversation about editing', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota qué versión propone la editora para cada frase y qué riesgo quiere evitar.', self: 'Escucha una vez para la idea general. En la segunda, anota qué versión propone para cada frase. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'La editora comenta el fragmento · The editor comments on the passage', channel: 'NOTA DE VOZ · EQUIPO DEL BOLETÍN', src: '/audio/grammar-classroom/154.mp3',
            before: 'Una editora ha leído el fragmento de la crónica y envía su opinión al equipo. ¿Qué crees que propondrá: copiarlo, explicarlo o modernizarlo? (An editor has read the passage from the chronicle and sends the team her opinion. Will she suggest copying it, explaining it or modernising it?)',
            gist: { prompt: '¿Cuál es la idea central del mensaje?', options: ['Modernizar el fragmento con claridad, sin alterar lo que la fuente permite interpretar.', 'Copiar la crónica tal cual en el boletín.', 'Eliminar el fragmento porque es difícil.'], answer: 0, why: '«La versión moderna debe ser clara, pero también fiel a lo que la fuente realmente permite interpretar».', en: 'What is the central idea of the message?' },
            details: [
              { prompt: '¿Qué propone hacer con la primera frase?', options: ['Conservarla como cita breve y explicar la secuencia debajo.', 'Borrarla.', 'Usarla en el correo al equipo.'], answer: 0, why: '«Podemos conservar la primera frase como cita breve y explicar la secuencia debajo».', en: 'What does she suggest doing with the first sentence?' },
              { prompt: '¿Por qué no usaría «apenas hubo terminado» en un correo al equipo?', options: ['Porque sonaría demasiado distante.', 'Porque es incorrecto.', 'Porque cambia el orden de las acciones.'], answer: 0, why: '«No lo usaría en nuestro correo al equipo, porque sonaría demasiado distante».', en: 'Why wouldn’t she use «apenas hubo terminado» in an email to the team?' },
              { prompt: '¿Qué versión prefiere para la segunda frase?', options: ['Después de revisar la lista, los asistentes salieron.', 'Mientras revisaban la lista, salieron.', 'Cuando hubieron revisado la lista, salieron.'], answer: 0, why: '«Prefiero “después de revisar la lista, los asistentes salieron”».', en: 'Which version does she prefer for the second sentence?' },
              { prompt: '¿Qué dos errores quiere evitar?', options: ['Cambiar el orden y presentar las acciones como simultáneas.', 'Usar el indefinido y usar «apenas».', 'Citar la fuente y explicarla.'], answer: 0, why: '«Lo importante es no cambiar el orden de las acciones ni presentar la revisión como simultánea a la salida».', en: 'Which two mistakes does she want to avoid?' },
              { prompt: '¿Por qué quiere revisar el párrafo anterior?', options: ['Porque quizá hay una pausa y no conviene exagerar la inmediatez.', 'Porque falta una fecha.', 'Porque tiene errores de ortografía.'], answer: 0, why: '«Quizá allí hay una pausa más larga y no conviene exagerar la inmediatez».', en: 'Why does she want to check the previous paragraph?' },
            ],
            transcript: 'Hola, vi el fragmento del archivo. Creo que podemos conservar la primera frase como cita breve y explicar la secuencia debajo. Cuando leo «[[apenas|orange]] [[hubo terminado|violet]]», entiendo que la lectura acabó justo antes de la entrega. No lo usaría en nuestro correo al equipo, porque sonaría demasiado distante. En el boletín podemos decir «[[apenas terminó|teal]] la lectura» y mantener el ritmo. Para la segunda frase, prefiero «[[después de revisar|teal]] la lista, los asistentes salieron». Si queremos resaltar que la revisión ya estaba completa al salir, también sirve una formulación con [[había|blue]]. Lo importante es no cambiar el orden de las acciones ni presentar la revisión como simultánea a la salida. Revisemos cómo se conecta el fragmento con el párrafo anterior. Quizá allí hay una pausa más larga y no conviene exagerar la inmediatez. La versión moderna debe ser clara, pero también fiel a lo que la fuente realmente permite interpretar.',
            reply: { teacher: 'El alumno responde en voz alta como Clara: está de acuerdo o no con cada propuesta y justifica su decisión según el lector del boletín.', self: 'Responde como Clara en un mensaje breve: acepta o matiza cada propuesta y explica por qué, pensando en el lector del boletín.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Leer el pasado, contarlo hoy', coach: 'Una pregunta por vez. Interpreta y decide.',
      steps: [
        { title: 'Leer el pasado, contarlo hoy · Reading the past, telling it today', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. El alumno interpreta y reformula; no le pidas que produzca el pretérito anterior en conversación.', self: 'Responde cada pregunta en voz alta. Usa el español actual para explicar; cita el pretérito anterior solo entre comillas.' } },
          { kind: 'talk', cards: [
            { q: '¿Lees textos antiguos o novelas clásicas? ¿Qué te resulta más difícil de su lenguaje? · Do you read old texts or classic novels? What do you find hardest about their language?', followUps: ['¿Hay alguna palabra o forma que te sorprendió?', '¿Te gusta ese estilo o te cansa?', '¿Lees esos textos en tu idioma?'], phrases: ['Me cuesta…', 'Me llama la atención…', 'Suena muy…'], hint: 'Piensa en un libro concreto y en una frase que recuerdes.', example: 'Leo poca novela clásica, pero cuando lo hago me cuesta el ritmo de las frases largas. Me llamó la atención encontrar formas como «hubo dicho», que nunca había oído.', next: 'Vamos a trabajar con una frase concreta.' },
            { q: 'Explica con tus palabras: «Apenas hubo terminado el discurso, estallaron los aplausos». ¿Qué imagen te transmite? · Explain this sentence in your own words. What picture does it give you?', followUps: ['¿Cuánto tiempo pasó entre las dos acciones?', '¿Cómo lo dirías hoy?', '¿Qué efecto tiene la forma antigua?'], phrases: ['[[Apenas terminó|teal]]…', 'Justo después…', 'Transmite una sensación de…'], hint: 'Primero reconstruye la secuencia y después comenta el efecto.', example: 'El discurso terminó y, sin pausa, el público empezó a aplaudir. Hoy diría «apenas terminó el discurso». La forma antigua le da solemnidad, como si fuera un momento histórico.', next: 'Ahora piensa en tu propia vida.' },
            { q: 'Cuéntame una secuencia rápida de tu vida: algo que hiciste e, inmediatamente después, pasó otra cosa. · Tell me about a quick sequence in your life: you did something and, right after, something else happened.', followUps: ['¿Qué sentiste?', '¿Cómo lo contarías en una crónica formal?', '¿Qué conector usarías en un mensaje?'], phrases: ['[[En cuanto|teal]]…', '[[Nada más|teal]] + infinitivo…', 'No había pasado ni un minuto cuando…'], hint: 'Cuéntalo en español actual. Si quieres, compara al final cómo sonaría en una crónica.', example: 'Nada más llegar al aeropuerto, anunciaron que el vuelo estaba cancelado. En una crónica formal se diría «apenas hubo llegado», pero yo lo cuento así.', next: 'Pasemos a decisiones de edición.', teacher: 'Si el alumno intenta usar «hube» en primera persona, valora que lo reconozca y propón la versión actual.' },
            { q: 'Si tuvieras que publicar un documento antiguo para el público general, ¿lo copiarías, lo explicarías o lo reescribirías? · Publishing an old document for the general public: would you copy it, explain it or rewrite it?', followUps: ['¿Depende del lector?', '¿Qué se pierde al modernizar?', '¿Qué se gana?'], phrases: ['Conservaría… para…', 'Modernizaría con…', 'Se pierde…, pero se gana…'], hint: 'Piensa en dos lectores distintos: un estudiante de historia y un vecino del barrio.', example: 'Para un estudiante de historia conservaría la cita original con una nota. Para los vecinos, la reescribiría en español actual: se pierde el tono de la época, pero se gana claridad.', next: 'Ahora, el riesgo de cambiar el sentido.' },
            { q: '¿Alguna vez una traducción o un resumen cambió el sentido de algo que leíste? · Has a translation or summary ever changed the meaning of something you read?', followUps: ['¿Qué cambió exactamente?', '¿Quién tenía la responsabilidad?', '¿Cómo se podría haber evitado?'], phrases: ['La versión original decía…', 'En la traducción…', 'Cambiaba el orden / el foco…'], hint: 'Relaciónalo con lo que hemos visto: orden de los hechos, simultaneidad, foco.', example: 'Sí, en un resumen de prensa decían que el ministro habló mientras protestaban, pero en realidad la protesta empezó cuando él terminó. Parece un detalle, pero cambia la historia.', next: 'Para terminar, el lenguaje que desaparece.' },
            { q: '¿Crees que las formas que desaparecen del habla, como el pretérito anterior, deberían enseñarse? · Should forms that are disappearing from speech still be taught?', followUps: ['¿A quién le son útiles?', '¿Qué otras formas antiguas conoces?', '¿Pasa lo mismo en tu idioma?'], phrases: ['Me parece útil para…', 'No hace falta producirlas, pero…', 'En mi idioma también…'], hint: 'Distingue entre reconocer una forma y usarla.', example: 'Creo que hay que enseñarlas para leer, no para hablar. Sin reconocerlas, un estudiante avanzado no entiende bien una novela clásica ni un documento histórico.', teacher: 'Puede cerrarse con una comparación entre lenguas: muchas tienen tiempos literarios que no se usan al hablar.' },
          ], swap: { teacher: 'Al final, el alumno trae una frase con pretérito anterior (de un libro o de esta clase) y le pide al profesor dos reformulaciones distintas.', self: 'Busca una frase con «hubo + participio» en un texto en español y escribe dos reformulaciones: una que mantenga la inmediatez y otra que destaque el estado previo.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota editorial', coach: 'Interpreta, propón y justifica.',
      steps: [
        { title: 'Una nota editorial · An editorial note', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribirse en clase o como tarea. Usen la revisión automática y después comenten si las reformulaciones respetan el orden y el foco de la fuente.', self: 'Escribe tu nota y toca «Revisar mi texto». Después comprueba: ¿tu versión mantiene el orden de las acciones y no añade simultaneidad?' } },
          { kind: 'write', title: 'Cómo modernizar un fragmento de archivo · How to modernise an archive passage', situation: 'Trabajas en el boletín de un centro cultural. Debes explicar al equipo cómo publicar este fragmento: «Apenas hubo terminado la lectura del informe, la secretaria entregó los documentos. Cuando hubieron revisado la lista, los asistentes abandonaron la sala». (You work on a cultural centre’s newsletter and must explain to the team how to publish this passage.)', task: [
            'Explica qué **secuencia** expresa cada frase con «hubo / hubieron».',
            'Propón una **versión actual** para cada frase.',
            'Comenta qué conserva o qué cambia cada versión (inmediatez, estado previo, foco).',
            'Justifica qué **conservarías** de la fuente y para qué lector.',
          ], starters: ['La forma «hubo terminado» presenta…', 'Para el boletín propongo…', 'Esta versión mantiene…, pero…', 'Si queremos destacar…, conviene…', 'Conservaría una cita breve porque…', 'No trasladaría…'],
            words: ['secuencia', 'inmediatez', 'anterioridad', 'cita', 'registro', 'fiel', 'foco', 'lector'],
            model: 'La forma «[[hubo terminado|violet]]» presenta la lectura como completada inmediatamente antes de la entrega de documentos. Para el boletín propongo «[[apenas terminó|teal]] la lectura, la secretaria entregó los documentos», que mantiene el orden y un ritmo cercano al original. En la segunda frase, la revisión de la lista también precede a la salida. Podemos escribir «[[después de revisar|teal]] la lista, los asistentes salieron». Si interesa destacar que la lista ya estaba revisada, serviría «cuando salieron, ya [[habían revisado|blue]] la lista», aunque esa versión cambia el foco y pierde rapidez. Conservaría una cita breve en un recuadro para mostrar el registro de la crónica y añadiría una explicación. No trasladaría esas formas al correo cotidiano del equipo: sonarían distantes y artificiales.',
            minWords: 130 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'violet', label: 'PRETÉRITO ANTERIOR', formula: 'apenas / cuando + hubo + participio', example: 'Apenas hubo terminado la lectura, entregó los documentos.', caption: 'Acción completa e inmediatamente anterior. Solo para leer.', en: 'Pretérito anterior: an action completed immediately before another. For reading only.' },
            { tone: 'teal', label: 'VERSIÓN CON INMEDIATEZ', formula: 'apenas / en cuanto + indefinido · nada más + infinitivo', example: 'Apenas terminó la lectura, entregó los documentos.', caption: 'Conserva orden y rapidez.', en: 'Modern version with immediacy: it keeps both the order and the speed.' },
            { tone: 'blue', label: 'VERSIÓN CON ESTADO PREVIO', formula: 'cuando + indefinido, ya + había + participio', example: 'Cuando salieron, ya habían revisado la lista.', caption: 'Cambia el foco: lo que ya estaba hecho.', en: 'Modern version with the earlier state: the focus moves to what had already been done.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres comprobaciones al leer · Three checks when reading', text: '¿Detrás de «hubo» hay un **participio**? Es el auxiliar; si hay un nombre, es «haber» impersonal y va en singular. ¿Quién es el **sujeto**? ¿La reformulación mantiene el **orden** sin volverlo simultáneo?', en: 'Is there a participle after «hubo»? Then it is the auxiliary; if a noun follows, it is impersonal haber and stays singular. Who is the subject? Does your rewording keep the order without making the actions simultaneous?' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda · Four sentences, no help', items: [
            { prompt: '«No bien hubo amanecido, partieron.» ¿Qué significa?', options: ['Partieron en cuanto amaneció.', 'Partieron antes del amanecer.', 'Partieron mientras amanecía, sin prisa.'], answer: 0, why: '«No bien» + pretérito anterior: inmediatamente después.', en: 'What does this sentence mean?' },
            { prompt: '¿Cuál es correcta?', options: ['Hubieron muchas dudas.', 'Hubo muchas dudas.', 'Hubieron habido dudas.'], answer: 1, why: '«Haber» impersonal, siempre en singular.', en: 'Which one is correct?' },
            { prompt: 'Mejor versión actual de «Cuando hubo leído la carta, la rompió»:', options: ['En cuanto leyó la carta, la rompió.', 'Mientras leía la carta, la rompía.', 'Cuando hubiera leído la carta, la rompió.'], answer: 0, why: 'Mantiene el orden y la inmediatez con un tiempo actual.', en: 'Which is the best modern version of this sentence?' },
            { prompt: '¿Dónde es natural hoy el pretérito anterior?', options: ['En una novela de estilo clásico.', 'En un mensaje a un amigo.', 'En una conversación en el trabajo.'], answer: 0, why: 'Es una forma de la narración escrita formal o literaria.', en: 'Where does the pretérito anterior sound natural today?' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué se gana y qué se pierde al modernizar “apenas hubo terminado”?». Se gana claridad y naturalidad; se puede perder solemnidad, distancia y, si se elige mal, la inmediatez.' },
        ] },
      ],
    },
  ],
};
