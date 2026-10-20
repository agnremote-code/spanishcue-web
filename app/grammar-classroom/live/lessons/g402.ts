import type { LiveLesson } from '../types';

/**
 * Lesson 402 · B1 · Condiciones reales: si + presente y futuro (course unit G102).
 * Builds on G078 (si + presente → presente, order, si / sí, A2), G056–G057
 * (ir a / futuro), G058–G059 (imperativo), G040 / G080 (poder, tener que) and
 * G098 (cuando + subjuntivo). Content: in a real condition «si» always takes the
 * present indicative; the result changes with the intention: presente (general
 * truth, habit), futuro or ir a + infinitivo (prediction, promise), imperativo
 * (instruction), poder / tener que + infinitivo (permission, obligation). Never
 * *si + futuro or *si + presente de subjuntivo in a real condition; but «si» =
 * whether (no sé si volverá) can take the future. Order of clauses and comma;
 * si vuelvo (possible) vs cuando vuelva (certain, G098); si no vs sino.
 * Recognition only (Ampliación): en caso de que / siempre que + subjuntivo.
 * G104 (lesson 31: team meeting, plan vs rule, yo + condicional) comes later.
 * Scene: Lucía Herrera goes to Lima for ten days for work; her neighbour Raúl
 * looks after her cat, Canela, her plants and her flat. In the voice message
 * Lucía (Mexican voice, tú) calls Raúl from Lima. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 402,
  level: 'B1',
  title: 'Condiciones reales: si + presente y futuro',
  subtitle: 'Dejar instrucciones claras para cuando no estás: si pasa algo, qué pasa siempre, qué pasará, qué hacer y qué se puede hacer.',
  legend: [
    { tone: 'blue', label: 'CONDICIÓN · si + presente de indicativo (if…)' },
    { tone: 'teal', label: 'PRESENTE · verdad general o costumbre (always true)' },
    { tone: 'orange', label: 'FUTURO / IR A · predicción o promesa (will / going to)' },
    { tone: 'violet', label: 'INSTRUCCIÓN · imperativo, poder, tener que (do it / you can / you have to)' },
  ],
  optionNotes: {
    tenga: 'Después de «si» de condición no va subjuntivo: presente de indicativo («si tiene», «si tengo»).',
    vuelva: '«Vuelva» es subjuntivo: va con «cuando» (cuando vuelva), no con «si». Si + indicativo: «si vuelve».',
    pierda: 'Después de «si» de condición no va subjuntivo: «si pierdo».',
    'le des': '«Le des» es subjuntivo: solo para la instrucción negativa («no le des»). Instrucción afirmativa: «dale».',
    'le pongas': '«Le pongas» es subjuntivo: solo para la instrucción negativa («no le pongas»). Afirmativa: «ponle».',
    'te avise': 'En la consecuencia no va subjuntivo: «te aviso» o «te avisaré».',
    'tengas que': 'En la consecuencia no va subjuntivo: «tienes que».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Si pasa esto…', coach: 'Una condición, muchas consecuencias. One condition, many results.',
      steps: [
        { title: 'Una nota en la cocina · A note in the kitchen', blocks: [
          { kind: 'lead', text: 'Lucía Herrera se va mañana a Lima por trabajo: diez días. Su vecino Raúl va a cuidar a su gata, Canela, y sus plantas. Lucía le deja una nota en la cocina con cosas que **pueden pasar** y qué hacer en cada caso: «**Si** Canela no **come**, llámame». Ya conoces «si + presente» (clase 078). Hoy ves todo lo que puede ir en la otra parte de la frase.', en: 'Lucía Herrera is going to Lima for work tomorrow, for ten days. Her neighbour Raúl is going to look after her cat, Canela, and her plants. She leaves him a note in the kitchen with things that may happen and what to do in each case. You already know “si + present” (class 078). Today you see everything that can go in the other half of the sentence.' },
          { kind: 'guide', text: { teacher: 'Tú lees los ejemplos y tu alumno repite. Después tu alumno dice qué parte es la condición y en qué tiempo está su verbo.', self: 'Lee los ejemplos en voz alta. Busca la condición (la parte con «si») y mira el tiempo de su verbo. (Find the “si” part and look at its verb.)' } },
          { kind: 'concept', tone: 'blue', label: 'LA CONDICIÓN · SI + PRESENTE', question: '¿Qué puede pasar?', en: 'What may happen?', formula: ['si + presente de indicativo, consecuencia', 'consecuencia + si + presente de indicativo'],
            meaning: '«Si» presenta una condición **real o posible**: puede pasar o no. Aunque hable del futuro (mañana, el lunes), después de «si» va el **presente de indicativo**: «si Canela no **come**», «si **vuelvo** antes». Lo que cambia según tu intención es la otra parte: la consecuencia.',
            examples: [
              { es: '[[Si Canela no come|blue]], [[llámame|violet]].', en: 'If Canela doesn’t eat, call me.' },
              { es: '[[Si vuelvo antes|blue]], te [[avisaré|orange]].', en: 'If I come back earlier, I’ll let you know.' },
              { es: '[[Si oye el timbre|blue]], Canela [[se esconde|teal]] debajo de la cama.', en: 'If she hears the doorbell, Canela hides under the bed.' },
              { es: '[[Si sales|blue]], [[tienes que|violet]] cerrar con dos vueltas de llave.', en: 'If you go out, you have to double-lock the door.' },
            ],
            note: 'En inglés, «if» + presente también habla del futuro («if I come back»). En español pasa lo mismo: «si vuelvo», nunca «si volveré».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Si mañana ___ tiempo, riego las plantas del balcón.', options: ['tendré', 'tener', 'tengo'], answer: 2, why: 'Condición real: «si» + presente de indicativo, aunque hable de mañana.', en: 'If I have time tomorrow, I’ll water the balcony plants.' },
            { prompt: 'En «Si Canela no come, llámame», ¿sabe Lucía si Canela va a comer?', options: ['No: es posible, pero no es seguro.', 'Sí: Canela come siempre.', 'Sí: Canela nunca come.'], answer: 0, why: '«Si» presenta algo posible: puede pasar o no.', en: 'In “Si Canela no come, llámame”, does Lucía know whether Canela will eat?' },
          ] },
        ] },
        { title: 'Cinco consecuencias · Five kinds of result', mascot: '/brand/mascot/studying.webp', coach: '¿Qué quieres decir? What do you want to say?', blocks: [
          { kind: 'lead', text: 'La condición casi no cambia: «si + presente». La consecuencia, sí: depende de lo que quieres hacer con la frase. Mira la nota de Lucía.', en: 'The condition hardly changes: “si + present”. The result does: it depends on what you want to do with the sentence. Look at Lucía’s note.' },
          { kind: 'table', title: 'Si + presente, y después… · If + present, and then…', head: ['Qué quieres decir', 'Consecuencia', 'Ejemplo de la nota'], rows: [
            ['verdad general o costumbre (always true)', '**presente**', '[[Si oye el timbre|blue]], Canela [[se esconde|teal]].'],
            ['predicción o promesa (will)', '**futuro**', '[[Si vuelvo antes|blue]], te [[avisaré|orange]].'],
            ['predicción con señales claras (going to)', '**ir a + infinitivo**', '[[Si riegas mucho los cactus|blue]], [[se van a pudrir|orange]].'],
            ['instrucción (do it)', '**imperativo**', '[[Si Canela no come|blue]], [[llámame|violet]].'],
            ['permiso u obligación (you can / you must)', '**poder / tener que + infinitivo**', '[[Si quieres|blue]], [[puedes|violet]] usar mi bici. [[Si sales|blue]], [[tienes que|violet]] cerrar con llave.'],
          ], note: 'En la conversación, el presente también da instrucciones o promete: «Si no come, **me llamas**», «Si vuelvo antes, **te aviso**». Es muy frecuente y suena natural.' },
          { kind: 'tip', icon: '💡', title: 'Futuro o ir a · Future or going to', text: 'Para predecir, las dos formas son correctas. «Ir a» suena más cercano y conversacional, y es muy frecuente cuando ya ves las señales: «Si riegas tanto los cactus, **se van a pudrir**» (they’ll rot). El futuro suena un poco más neutro y es típico de las promesas: «Si vuelvo antes, **te avisaré**».', en: 'For predictions both are correct. “Ir a” sounds closer and more conversational, and is very common when you can already see the signs. The future sounds a bit more neutral and is typical of promises.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Si Canela oye el timbre, se esconde.» La consecuencia expresa…', options: ['algo que pasa siempre.', 'una instrucción para Raúl.', 'una promesa de Lucía.'], answer: 0, why: 'Presente en las dos partes: una costumbre de Canela, algo que pasa siempre.', en: '“Si Canela oye el timbre, se esconde.” The result expresses…' },
            { prompt: 'Lucía quiere dar una instrucción: «Si la albahaca tiene las hojas caídas, ___ agua».', options: ['le eches', 'echarle', 'échale'], answer: 2, why: 'Instrucción a Raúl: imperativo, «échale» (give it water).', en: 'Lucía wants to give an instruction: “If the basil’s leaves are drooping, give it water.”' },
          ] },
        ] },
        { title: 'Orden y coma · Order and comma', mascot: '/autoestudio/mascot/noting.webp', coach: 'Repaso rápido. A quick review.', blocks: [
          { kind: 'compare', title: 'La misma instrucción, dos órdenes · The same instruction, two orders', columns: [
            { tone: 'blue', label: 'CONDICIÓN PRIMERO', sentence: '[[Si sales|blue]], [[tienes que|violet]] cerrar con llave.', idea: 'Coma después de la condición. Es el orden típico de las notas e instrucciones.', en: 'Condition first: comma after it. Typical of notes and instructions.' },
            { tone: 'violet', label: 'CONSECUENCIA PRIMERO', sentence: '[[Tienes que|violet]] cerrar con llave [[si sales|blue]].', idea: 'Normalmente sin coma. La condición llega al final, como un detalle.', en: 'Result first: usually no comma. The condition comes at the end, like a detail.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase tiene la puntuación habitual?', options: ['Abre la puerta, si llama, el portero.', 'Si llama el portero abre la puerta.', 'Si llama el portero, abre la puerta.'], answer: 2, why: 'La condición va primero: coma después de ella.', en: 'Which sentence has the usual punctuation?' },
            { prompt: '«Llámame si Canela no come.» = …', options: ['Si Canela no come, llámame.', 'Si me llamas, Canela no come.', 'Canela no come si me llamas.'], answer: 0, why: 'Cambia el orden, pero la condición sigue siendo la parte con «si»: «si Canela no come».', en: '“Call me if Canela doesn’t eat.” = …' },
          ] },
        ] },
        { title: '¿Si o cuando? · If or when?', mascot: '/brand/mascot/seated.webp', coach: '¿Posible o seguro? Possible or certain?', blocks: [
          { kind: 'compare', title: 'Dos frases sobre la vuelta de Lucía · Two sentences about Lucía’s return', columns: [
            { tone: 'blue', label: 'SI + INDICATIVO · posible', sentence: '[[Si vuelvo antes|blue]], te [[avisaré|orange]].', idea: 'No es seguro: tal vez vuelve antes, tal vez no.', en: 'If I come back earlier, I’ll tell you. (maybe)' },
            { tone: 'orange', label: 'CUANDO + SUBJUNTIVO · seguro', sentence: 'Cuando vuelva, te [[traeré|orange]] un regalo de Lima.', idea: 'Es seguro que vuelve; solo habla del momento (clase 098).', en: 'When I come back, I’ll bring you a present from Lima. (it will happen)' },
          ] },
          { kind: 'decide', title: 'Piensa en tu frase · Think about your sentence', steps: [
            { q: '¿Es seguro que va a pasar y solo dices el momento?', yes: 'Usa **cuando + subjuntivo**: «Cuando vuelva, te traeré un regalo».', no: 'next' },
            { q: '¿Puede pasar o no?', yes: 'Usa **si + presente de indicativo**: «[[Si vuelvo antes|blue]], te aviso». Nunca «si vuelva».', no: 'Quizá no es una condición: mira el paso siguiente («no sé si…»).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía no sabe si va a terminar pronto: «___ termino pronto, iré a ver el mar».', options: ['Sino', 'Cuando', 'Si'], answer: 2, why: 'Es posible, no seguro: «si» + presente de indicativo.', en: 'Lucía doesn’t know if she’ll finish early: “If I finish early, I’ll go and see the sea.”' },
            { prompt: 'Si ___ antes del lunes, te escribo.', options: ['vuelva', 'volveré', 'vuelvo'], answer: 2, why: 'Con «si» de condición: presente de indicativo. «Vuelva» va con «cuando».', en: 'If I come back before Monday, I’ll write to you.' },
          ] },
        ] },
        { title: '«No sé si…» y «sino» · “Whether” and “but rather”', mascot: '/brand/mascot/kneeling.webp', coach: 'No todo «si» es una condición. Not every “si” is a condition.', blocks: [
          { kind: 'compare', title: 'Dos «si» diferentes · Two different “si”', columns: [
            { tone: 'blue', label: 'SI = IF · condición', sentence: '[[Si Lucía vuelve el domingo|blue]], [[iremos|orange]] a buscarla.', idea: 'Condición real: presente. Nunca «si volverá».', en: 'If Lucía comes back on Sunday, we’ll go and pick her up.' },
            { tone: 'teal', label: 'SI = WHETHER · pregunta indirecta', sentence: 'No sé **si** Lucía **volverá** el domingo.', idea: 'Es una pregunta escondida (¿volverá o no?). Aquí el futuro es correcto; también el presente: «no sé si vuelve».', en: 'I don’t know whether Lucía will come back on Sunday. Here the future is fine.' },
          ] },
          { kind: 'table', title: 'Si no / sino', head: ['Forma', 'Para qué', 'Ejemplo'], rows: [
            ['**si no** (dos palabras)', 'condición negativa (if not)', '[[Si no puedes estar|blue]], el portero [[abre|teal]] la puerta.'],
            ['**sino** (una palabra)', 'corregir después de una negación (but rather)', 'Canela no es tímida, **sino** prudente.'],
          ], note: 'Truco: en «si no», puedes quitar el «no» y la frase sigue siendo una condición («si puedes estar…»). «Sino» va después de una frase con «no» y presenta la idea correcta.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Raúl duda: «No sé si Canela ___ conmigo».', options: ['jugar', 'jugará', 'juegue'], answer: 1, why: 'Aquí «si» = whether: pregunta indirecta. El futuro es correcto.', en: 'Raúl isn’t sure: “I don’t know whether Canela will play with me.”' },
            { prompt: 'La albahaca no necesita sol directo, ___ mucha luz.', options: ['si no', 'sino', 'sí no'], answer: 1, why: 'Después de una negación corregimos la idea: «sino» (but rather).', en: 'The basil doesn’t need direct sun, but rather a lot of light.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes. These mistakes are very common.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error en cada frase y lo dice en voz alta antes de ver la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Si Canela no comerá, llámame.', right: 'Si Canela no come, llámame.', why: 'Condición real: nunca futuro después de «si». El futuro puede ir en la otra parte.' },
            { wrong: 'Si vuelva antes, te avisaré.', right: 'Si vuelvo antes, te avisaré.', why: 'Es la mezcla con «cuando vuelva». Con «si» de condición: presente de indicativo.' },
            { wrong: 'Si quieres, puedas usar mi bici.', right: 'Si quieres, puedes usar mi bici.', why: 'La consecuencia de permiso va en indicativo: «puedes».' },
            { wrong: 'Si sales, tienes cerrar con llave.', right: 'Si sales, tienes que cerrar con llave.', why: 'Obligación: «tener que» + infinitivo. No olvides el «que».' },
            { wrong: 'Canela no es tímida, si no prudente.', right: 'Canela no es tímida, sino prudente.', why: 'Aquí no hay condición: corriges una idea. «Sino», una palabra.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Si el portero tiene un paquete, déjalo en la mesa.', 'Si el portero tenga un paquete, déjalo en la mesa.', 'Si el portero tendrá un paquete, déjalo en la mesa.'], answer: 0, why: 'Condición real: «si» + presente de indicativo, «tiene».', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Tu alumno dice tres condiciones reales sobre su casa o su semana, cada una con una consecuencia distinta: una costumbre, una promesa y una instrucción.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las llaves de Lucía', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Antes del viaje · Before the trip', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía y tu alumno es Raúl. Después tu alumno toca cada expresión marcada y dice qué expresa la consecuencia.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿costumbre, predicción, promesa o instrucción? (Habit, prediction, promise or instruction?)' } },
          { kind: 'explore', title: 'Te dejo las llaves', setting: 'Viernes por la tarde, en la puerta del apartamento de Lucía. Mañana temprano sale para Lima. Raúl, su vecino, viene a buscar las llaves. Se tutean. (Friday afternoon, at Lucía’s door. She leaves for Lima early tomorrow. Raúl, her neighbour, comes to pick up the keys.)', lines: [
            { who: 'Lucía', text: 'Gracias otra vez, Raúl. Aquí tienes las llaves. En la cocina te dejo una nota con todo.', en: 'Thanks again, Raúl. Here are the keys. I’m leaving you a note in the kitchen with everything.' },
            { who: 'Raúl', text: 'Perfecto. ¿Y Canela? ¿Es difícil?', en: 'Perfect. And Canela? Is she difficult?' },
            { who: 'Lucía', text: 'No, es muy tranquila. Pero [[si oye el timbre|blue]], [[se esconde|teal]] debajo de la cama. Es normal, no te preocupes.', en: 'No, she’s very calm. But if she hears the doorbell, she hides under the bed. It’s normal, don’t worry.' },
            { who: 'Raúl', text: '¿Y cuánto come?', en: 'And how much does she eat?' },
            { who: 'Lucía', text: 'Un poco por la mañana y otro poco por la noche. [[Si no come|blue]] en todo el día, [[llámame|violet]], por favor.', en: 'A bit in the morning and a bit at night. If she doesn’t eat all day, call me, please.' },
            { who: 'Raúl', text: 'De acuerdo. ¿Y las plantas? Yo no sé mucho de plantas…', en: 'All right. And the plants? I don’t know much about plants…' },
            { who: 'Lucía', text: 'Es fácil. La albahaca, agua cada dos días. Los cactus, casi nada: [[si los riegas|blue]] mucho, [[se van a pudrir|orange]].', en: 'It’s easy. The basil, water every two days. The cacti, hardly any: if you water them a lot, they’re going to rot.' },
            { who: 'Raúl', text: 'Entendido. ¿Algo más?', en: 'Got it. Anything else?' },
            { who: 'Lucía', text: 'Sí: [[si sales|blue]], [[tienes que|violet]] cerrar con dos vueltas de llave. Ah, y [[si quieres|blue]], [[puedes|violet]] usar mi bici.', en: 'Yes: if you go out, you have to double-lock the door. Oh, and if you want, you can use my bike.' },
            { who: 'Raúl', text: '¡Genial! ¿Y cuándo vuelves? ¿El lunes 14?', en: 'Great! And when are you coming back? Monday the 14th?' },
            { who: 'Lucía', text: 'Sí, [[si todo va bien|blue]]. Pero [[si cambio|blue]] el vuelo, te [[avisaré|orange]]. Todavía no sé **si podré** cambiarlo.', en: 'Yes, if all goes well. But if I change my flight, I’ll let you know. I don’t know yet whether I’ll be able to change it.' },
            { who: 'Raúl', text: 'Tranquila. Y [[si pasa|blue]] algo aquí, te [[escribiré|orange]] enseguida.', en: 'Don’t worry. And if anything happens here, I’ll write to you straight away.' },
          ], notes: {
            'si oye el timbre': 'La condición: «si» + presente de indicativo (oír → oye). Algo que puede pasar en cualquier momento.',
            'se esconde': 'Presente en la consecuencia: una costumbre de Canela, lo que pasa **siempre** que oye el timbre.',
            'Si no come': '«Si no» = condición negativa (if not), dos palabras. Presente, aunque hable de los próximos días.',
            'llámame': 'Imperativo + pronombre (llama + me): una instrucción clara para Raúl.',
            'si los riegas': 'Condición con pronombre: «los» = los cactus. Presente de indicativo: riegas.',
            'se van a pudrir': '«Ir a» + infinitivo: una predicción con señales claras. Pudrirse = to rot. También: «se pudrirán».',
            'si sales': 'Condición: si + presente (salir → sales). Va primero, por eso hay coma.',
            'tienes que': 'Tener que + infinitivo: obligación. Lucía no da una orden directa, explica una norma de la casa.',
            'si quieres': 'Una condición muy frecuente para ofrecer algo con amabilidad: «si quieres, puedes…».',
            'puedes': 'Poder + infinitivo: permiso. Raúl puede usar la bici, pero no tiene que hacerlo.',
            'si todo va bien': 'Expresión fija para hablar de planes: «if all goes well». Presente: va.',
            'si cambio': 'Condición sobre el futuro, pero en presente: «si cambio», nunca «si cambiaré».',
            'avisaré': 'Futuro en la consecuencia: una promesa de Lucía. También es natural «te aviso».',
            'si pasa': '«Si pasa algo» = if anything happens. Presente de indicativo.',
            'escribiré': 'Futuro: una promesa de Raúl. En la conversación también es muy natural el presente: «te escribo enseguida».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué hace Canela si oye el timbre?', options: ['Va a la puerta.', 'Se esconde debajo de la cama.', 'No come en todo el día.'], answer: 1, why: '«Si oye el timbre, se esconde debajo de la cama».', en: 'What does Canela do if she hears the doorbell?' },
            { prompt: '¿Qué va a pasar si Raúl riega mucho los cactus?', options: ['Se van a pudrir.', 'Van a crecer mucho.', 'No va a pasar nada.'], answer: 0, why: '«Si los riegas mucho, se van a pudrir».', en: 'What is going to happen if Raúl waters the cacti a lot?' },
            { prompt: '¿En qué caso va a avisar Lucía a Raúl?', options: ['Si cambia el vuelo.', 'Si Canela no come.', 'Si Raúl usa la bici.'], answer: 0, why: '«Si cambio el vuelo, te avisaré». Si Canela no come, es Raúl quien llama.', en: 'In which case will Lucía let Raúl know?' },
          ] },
        ] },
        { title: '¿Qué expresa la consecuencia? · What does the result express?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de Lucía y Raúl · Sentences from Lucía and Raúl', categories: [
            { id: 'siempre', label: 'COSTUMBRE · pasa siempre (presente)', tone: 'teal' },
            { id: 'prevision', label: 'PREDICCIÓN O PROMESA · futuro, ir a', tone: 'orange' },
            { id: 'instruccion', label: 'INSTRUCCIÓN, PERMISO U OBLIGACIÓN', tone: 'violet' },
          ], items: [
            { text: 'Si oye el timbre, Canela se esconde.', answer: 'siempre', why: 'Lo que Canela hace siempre en ese caso.' },
            { text: 'Si cambio el vuelo, te avisaré.', answer: 'prevision', why: 'Futuro: una promesa de Lucía.' },
            { text: 'Si no come en todo el día, llámame.', answer: 'instruccion', why: 'Imperativo: una instrucción.' },
            { text: 'Si los riegas mucho, se van a pudrir.', answer: 'prevision', why: '«Ir a»: una predicción.' },
            { text: 'Si quieres, puedes usar mi bici.', answer: 'instruccion', why: '«Poder»: un permiso.' },
            { text: 'Si hace sol, Canela duerme en el sofá.', answer: 'siempre', why: 'Presente en las dos partes: una costumbre.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y si Raúl pierde las llaves?». Tu alumno responde como Lucía con dos consecuencias distintas: una instrucción y una predicción.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si + presente; después, lo que quieres decir. If + present; then, what you mean.',
      steps: [
        { title: 'Los primeros días · The first days', blocks: [
          { kind: 'choice', items: [
            { context: 'Raúl lee la nota de la cocina. (Raúl reads the note in the kitchen.)', prompt: 'Si la albahaca ___ las hojas caídas, necesita agua.', options: ['tendrá', 'tenga', 'tiene'], answer: 2, why: 'Condición real y verdad general sobre la planta: presente de indicativo, «tiene».', en: 'If the basil has drooping leaves, it needs water.' },
            { context: 'La nota sigue. (The note goes on.)', prompt: 'Si Canela no come por la mañana, ___ un poco de comida húmeda.', options: ['le des', 'darle', 'dale'], answer: 2, why: 'Instrucción afirmativa para Raúl: imperativo, «dale».', en: 'If Canela doesn’t eat in the morning, give her a bit of wet food.' },
            { context: 'Raúl piensa en voz alta. (Raúl thinks aloud.)', prompt: 'Si ___ la llave, no podré entrar.', options: ['pierda', 'pierdo', 'perderé'], answer: 1, why: 'Condición: presente de indicativo. El futuro va en la consecuencia: «no podré».', en: 'If I lose the key, I won’t be able to get in.' },
            { context: 'Raúl habla con el portero. (Raúl talks to the doorman.)', prompt: 'Si todo va bien, Lucía ___ el lunes 14.', options: ['volver', 'volverá', 'vuelva'], answer: 1, why: 'Consecuencia: una predicción, futuro. «Vuelva» es subjuntivo y no va aquí.', en: 'If all goes well, Lucía will come back on Monday the 14th.' },
            { context: 'Un mensaje de Lucía. (A message from Lucía.)', prompt: 'Si quieres usar la bici, ___ ponerle aire a la rueda de atrás.', options: ['tienes que', 'tengas que', 'tienes'], answer: 0, why: 'Obligación en la consecuencia: «tienes que» + infinitivo, en indicativo.', en: 'If you want to use the bike, you have to put some air in the back tyre.' },
          ] },
        ] },
        { title: '¿Qué expresa? · What does it express?', blocks: [
          { kind: 'classify', title: 'Otras frases de la semana · Other sentences from the week', categories: [
            { id: 'siempre', label: 'COSTUMBRE O VERDAD GENERAL', tone: 'teal' },
            { id: 'prevision', label: 'PREDICCIÓN O PROMESA', tone: 'orange' },
            { id: 'instruccion', label: 'INSTRUCCIÓN, PERMISO U OBLIGACIÓN', tone: 'violet' },
          ], items: [
            { text: 'Si abres la lata de atún, Canela viene corriendo.', answer: 'siempre', why: 'Lo que pasa siempre: presente.' },
            { text: 'Si no compras arena hoy, el domingo vas a tener un problema.', answer: 'prevision', why: '«Vas a tener»: una predicción.' },
            { text: 'Si sale el sol, abre la ventana del balcón.', answer: 'instruccion', why: '«Abre»: imperativo, una instrucción.' },
            { text: 'Si tengo tiempo el jueves, te llamaré.', answer: 'prevision', why: '«Te llamaré»: una promesa.' },
            { text: 'Si llega un paquete, tienes que firmar abajo.', answer: 'instruccion', why: '«Tienes que»: una obligación.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si Canela estará enferma, llévala al veterinario.', ok: false, options: ['Si Canela esté enferma, llévala al veterinario.', 'Si Canela está enferma, llévala al veterinario.', 'Si Canela estará enferma, la llevas al veterinario.'], answer: 1, why: 'Condición real: presente de indicativo, «está». Ni futuro ni subjuntivo después de «si».' },
            { sentence: 'Si riegas la albahaca cada dos días, va a crecer muy bien.', ok: true, why: 'Correcta: condición en presente y predicción con «ir a».' },
            { sentence: 'Cuando vuelvo de Lima, te traeré un regalo.', ok: false, options: ['Cuando vuelva de Lima, te traeré un regalo.', 'Si vuelva de Lima, te traeré un regalo.', 'Cuando volveré de Lima, te traeré un regalo.'], answer: 0, why: 'Es seguro que vuelve y habla del futuro: «cuando + subjuntivo» (clase 098), «cuando vuelva».' },
            { sentence: 'No sé si Lucía llamará esta noche.', ok: true, why: 'Correcta: «si» = whether (pregunta indirecta). Aquí el futuro es posible.' },
            { sentence: 'Si tengas tiempo, compra arena para Canela.', ok: false, options: ['Si tienes tiempo, compra arena para Canela.', 'Si tendrás tiempo, compra arena para Canela.', 'Si tienes tiempo, compres arena para Canela.'], answer: 0, why: 'Condición: «si tienes». La instrucción afirmativa va en imperativo: «compra».' },
            { sentence: 'El paquete no es para Raúl, si no para Lucía.', ok: false, options: ['El paquete no es para Raúl, sí no para Lucía.', 'El paquete no es para Raúl, pero para Lucía.', 'El paquete no es para Raúl, sino para Lucía.'], answer: 2, why: 'No hay condición: corriges una idea después de «no». «Sino», una palabra.' },
          ] },
        ] },
        { title: 'Mensajes con Lima · Messages with Lima', blocks: [
          { kind: 'chat-fill', title: 'Raúl y Lucía se escriben el martes · Raúl and Lucía text on Tuesday', lines: [
            { who: 'Raúl', text: 'Hola, Lucía. Todo bien por aquí. Una pregunta: el portero tiene un paquete para ti.' },
            { who: 'Lucía', text: '¡Son unos libros! Si te lo ___, déjalo en mi mesa, por favor.', options: ['da', 'dará', 'dé'], answer: 0, why: 'Condición real: presente de indicativo, «si te lo da».' },
            { who: 'Raúl', text: 'Muy bien. Otra cosa: Canela duerme toda la tarde en el sofá. ¿Es normal?' },
            { who: 'Lucía', text: 'Sí, si hace sol, siempre ___ allí, al lado de la ventana.', options: ['duerme', 'duerma', 'dormirá'], answer: 0, why: 'Una costumbre («siempre»): presente en las dos partes, «duerme».' },
            { who: 'Raúl', text: 'Ja, ja. ¿Y si mañana ___ que salir muy temprano?', options: ['tengo', 'tendré', 'tenga'], answer: 0, why: '«¿Y si…?» presenta una condición: presente de indicativo, «tengo».' },
            { who: 'Lucía', text: 'Pues ___ la comida antes de irte. Canela come cuando quiere.', options: ['le pongas', 'ponle', 'ponerle'], answer: 1, why: 'Instrucción afirmativa para esa situación: imperativo + pronombre, «ponle».' },
            { who: 'Raúl', text: 'Perfecto. ¿Y al final vuelves el lunes?' },
            { who: 'Lucía', text: 'Todavía no sé si ___ el domingo o el lunes.', options: ['volver', 'vuelva', 'volveré'], answer: 2, why: 'Aquí «si» = whether, una pregunta indirecta: el futuro es correcto («volveré»; también «vuelvo»).' },
            { who: 'Lucía', text: 'Si cambio el vuelo, ___ enseguida.', options: ['te aviso', 'te avise', 'avisarte'], answer: 0, why: 'Promesa en la consecuencia: indicativo, «te aviso» (o «te avisaré»).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Si', 'oye', 'el', 'timbre,', 'Canela', 'se', 'esconde'], accept: ['Si oye el timbre, Canela se esconde', 'Si Canela oye el timbre, se esconde'], en: 'If she hears the doorbell, Canela hides.' },
            { tiles: ['Llámame', 'si', 'Canela', 'no', 'come'], accept: ['Llámame si Canela no come'], en: 'Call me if Canela doesn’t eat.' },
            { tiles: ['Si', 'riegas', 'mucho', 'los', 'cactus,', 'se', 'van', 'a', 'pudrir'], accept: ['Si riegas mucho los cactus, se van a pudrir'], en: 'If you water the cacti a lot, they’re going to rot.' },
            { tiles: ['No', 'sé', 'si', 'podré', 'llamarte', 'mañana'], accept: ['No sé si podré llamarte mañana', 'Mañana no sé si podré llamarte'], en: 'I don’t know whether I’ll be able to call you tomorrow.' },
          ] },
        ] },
        { title: 'Escribe la nota · Write the note', blocks: [
          { kind: 'rewrite', title: 'Una condición y su consecuencia · A condition and its result', items: [
            { prompt: 'Canela no tiene agua. → instrucción: ponerle agua fresca', instruction: 'Escribe una condición con «si» y una instrucción con tú. Empieza con «Si Canela». (Condition + instruction.)', accept: ['Si Canela no tiene agua, ponle agua fresca'] },
            { prompt: 'Hay un problema con la luz. → promesa de Lucía: llamar al electricista', instruction: 'Escribe una condición y una promesa en futuro. Empieza con «Si hay». (Condition + promise in the future.)', accept: ['Si hay un problema con la luz, llamaré al electricista', 'Si hay un problema con la luz, yo llamaré al electricista', 'Si hay un problema con la luz, llamaré yo al electricista'] },
            { prompt: 'Raúl sale del apartamento. → obligación: cerrar con dos vueltas de llave', instruction: 'Escribe una condición y una obligación con «tener que». Empieza con «Si sales». (Condition + obligation.)', accept: ['Si sales, tienes que cerrar con dos vueltas de llave', 'Si sales del apartamento, tienes que cerrar con dos vueltas de llave', 'Si sales, tienes que cerrar la puerta con dos vueltas de llave', 'Si sales del apartamento, tienes que cerrar la puerta con dos vueltas de llave'] },
            { prompt: 'Canela no duerme en su cama. Duerme en el sofá.', instruction: 'Une las dos frases con «sino». Empieza con «Canela no duerme en su cama». (Join with “sino”.)', accept: ['Canela no duerme en su cama, sino en el sofá', 'Canela no duerme en su cama sino en el sofá'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice dos condiciones reales sobre su propia casa: una costumbre («Si llueve, mi perro…») y una instrucción para un invitado («Si tienes frío, …»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje desde Lima', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Lucía llama a Raúl · Lucía calls Raúl', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada «si» de condición y dice qué tipo de consecuencia sigue. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta los «si» de condición. Vas a oír «calentador» (water heater). (Listen once for the gist, then for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Lucía', channel: 'MENSAJE DE VOZ · DE LUCÍA PARA RAÚL', src: '/audio/grammar-live/402.mp3',
            before: 'Lucía lleva tres días en Lima y le deja a Raúl un mensaje de voz. ¿Qué crees que dice: noticias del viaje, nuevas instrucciones, la fecha de vuelta…? (Lucía has been in Lima for three days and leaves Raúl a voice message. What do you think she says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Lucía da dos instrucciones nuevas y habla de su vuelta.', 'Lucía cuenta que la conferencia fue un desastre.', 'Lucía pide a Raúl que lleve a Canela al veterinario.'], answer: 0, why: 'Habla de la técnica del jueves, de Canela y de la fecha de vuelta.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué pasa el jueves a las diez?', options: ['Viene una técnica a revisar el calentador.', 'Lucía vuelve a casa.', 'Llega un paquete de libros.'], answer: 0, why: '«El jueves a las diez viene una técnica a revisar el calentador».', en: 'What happens on Thursday at ten?' },
              { prompt: '¿Qué pasa si Raúl no puede estar en casa?', options: ['Lucía cancela la visita.', 'El portero le abre la puerta.', 'La técnica viene otro día.'], answer: 1, why: '«Si no puedes, no pasa nada: el portero tiene una copia de la llave y le abre él».', en: 'What happens if Raúl can’t be at home?' },
              { prompt: '¿Qué hace Canela si se aburre?', options: ['Duerme debajo de la cama.', 'No come.', 'Juega con las cortinas.'], answer: 2, why: '«Si Canela se aburre, juega con las cortinas».', en: 'What does Canela do if she gets bored?' },
              { prompt: '¿Cuándo puede volver Lucía?', options: ['El domingo, si encuentra un vuelo antes.', 'El martes, por la conferencia.', 'Seguro el domingo.'], answer: 0, why: '«Si consigo un vuelo antes, volveré el domingo». Todavía no sabe si habrá plazas.', en: 'When might Lucía come back?' },
              { prompt: '¿Qué puede hacer Raúl con la albahaca?', options: ['Cortarla para cocinar.', 'Regalarla al portero.', 'Regarla cada día.'], answer: 0, why: '«Si necesitas albahaca para cocinar, corta la que quieras».', en: 'What can Raúl do with the basil?' },
            ],
            transcript: 'Hola, Raúl, soy Lucía. Te hablo desde Lima. Aquí todo va muy bien, pero tengo muchísimo trabajo. Oye, te cuento dos cosas. Primero: el jueves a las diez viene una técnica a revisar el calentador. [[Si puedes|blue]] estar en casa, [[ábrele|violet]] la puerta, por favor. [[Si no puedes|blue]], no [[pasa|teal]] nada: el portero tiene una copia de la llave y le abre él. Segundo: ya sabes que [[si Canela se aburre|blue]], [[juega|teal]] con las cortinas. [[Si ves|blue]] su pelota roja en el armario, [[dásela|violet]]; con eso se queda tranquila toda la tarde. Ah, y otra cosa: la conferencia termina el viernes. [[Si consigo|blue]] un vuelo antes, [[volveré|orange]] el domingo. Todavía no sé si habrá plazas, pero mañana te escribo. Y [[si necesitas|blue]] albahaca para cocinar, [[corta|violet]] la que quieras. ¡Mil gracias por todo! Un abrazo.',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es Raúl y responde al mensaje con tres frases: si puede estar el jueves o no, qué hace Canela estos días y una promesa con «si».', self: 'Responde a Lucía en voz alta como Raúl: si puedes estar el jueves, cómo está Canela y una promesa con «si» («Si…, te…»). (Answer as Raúl, with a promise using “si”.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Te dejo mi casa', coach: 'Condiciones reales para tu casa. Real conditions for your home.',
      steps: [
        { title: '¿Quién cuida tu casa? · Who looks after your home?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres la persona que va a cuidar la casa de tu alumno y haces las preguntas. Tu alumno habla de su casa real (o inventada): mascotas, plantas, vecinos, aparatos. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Piensa en tu casa real o en una casa inventada. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Think of your home and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Te vas de viaje diez días. ¿Quién cuida tu casa? ¿Qué tiene que cuidar? · You are going away for ten days. Who looks after your home? What do they have to look after?', followUps: ['¿Tienes mascota o plantas? (Do you have a pet or plants?)', '¿Qué es lo más difícil de tu casa? (What is the hardest thing about your home?)'], phrases: ['[[Si me voy|blue]] de viaje, mi vecina / mi hermano…', 'Tiene que cuidar…', 'Lo más difícil es…'], hint: 'Primero presenta la situación. Después, las condiciones.', example: 'Si me voy de viaje, mi hermano cuida mi casa. Tiene que regar las plantas y darle de comer a mi perro, Lobo.', next: 'Ahora, las costumbres de tu casa.', teacher: 'Cuenta tú también quién cuida tu casa cuando viajas. Así tu alumno oye otra vez la estructura.' },
            { q: '¿Qué pasa siempre en tu casa en ciertos casos? · What always happens in your home in certain cases?', followUps: ['¿Y si alguien llama a la puerta? (And if someone knocks at the door?)', '¿Y si hace mucho frío o mucho calor? (And if it’s very cold or very hot?)'], phrases: ['[[Si oye|blue]] un ruido, mi perro [[ladra|teal]]…', '[[Si abro|blue]] la ventana, [[entra|teal]]…', '[[Si llueve|blue]], el balcón [[se moja|teal]]…'], hint: 'Costumbres y verdades generales: presente en las dos partes.', example: 'Si oye una moto, mi perro ladra mucho. Y si abro la ventana de la cocina, entra mucho ruido de la calle.', next: 'Ahora, las instrucciones.' },
            { q: 'Da tres instrucciones a la persona que cuida tu casa. · Give three instructions to the person looking after your home.', followUps: ['¿Qué tiene que hacer si sale? (What does he/she have to do when going out?)', '¿Qué puede usar? (What can he/she use?)'], phrases: ['[[Si sales|blue]], [[cierra|violet]]…', '[[Si quieres|blue]], [[puedes|violet]] usar…', '[[Si…|blue]], [[tienes que|violet]]…'], hint: 'Instrucción: imperativo. Permiso: puedes. Obligación: tienes que.', example: 'Si sales, cierra bien la ventana del baño. Si quieres, puedes usar mi coche. Y si llega una carta del banco, tienes que guardarla en el cajón.', next: 'Ahora, los avisos.' },
            { q: '¿Qué va a pasar si la persona no hace algo bien? Avísale. · What will happen if the person doesn’t do something right? Warn them.', followUps: ['¿Y con las plantas? (And with the plants?)', '¿Y con tu mascota? (And with your pet?)'], phrases: ['[[Si no…|blue]], [[va a…|orange]]', '[[Si…|blue]] mucho, [[se van a…|orange]]', '[[Si…|blue]], [[se pondrá|orange]] nervioso / triste.'], hint: 'Predicción: futuro o ir a + infinitivo en la consecuencia; «si» sigue con presente.', example: 'Si no sacas a Lobo por la tarde, va a llorar toda la noche. Y si riegas mucho las plantas del balcón, se van a poner amarillas.', next: 'Ahora, las promesas.' },
            { q: '¿Qué le prometes a la persona que cuida tu casa? · What do you promise the person looking after your home?', followUps: ['¿Le vas a traer algo? (Are you going to bring them something?)', '¿Y si vuelves antes? (And if you come back earlier?)'], phrases: ['[[Si vuelvo|blue]] antes, te [[avisaré|orange]].', '[[Si encuentro|blue]]…, te [[traeré|orange]]…', '[[Si todo va bien|blue]], [[volveré|orange]] el…'], hint: 'Promesa: futuro (o presente: «te aviso»). Nunca «si volveré».', example: 'Si todo va bien, volveré el domingo por la noche. Si vuelvo antes, te avisaré. Y si encuentro un buen café en el viaje, te traeré un paquete.', next: 'Ahora, lo que todavía no sabes.' },
            { q: '¿Qué cosas no sabes todavía de tu próximo viaje o de tu próxima semana? · What don’t you know yet about your next trip or next week?', followUps: ['¿Y qué harás en cada caso? (And what will you do in each case?)', '¿Qué no sabes de tu trabajo? (What don’t you know about your work?)'], phrases: ['No sé **si** podré…', 'Todavía no sé **si** habrá…', '[[Si…|blue]], [[iré|orange]]… [[Si no|blue]], …'], hint: '«No sé si» (whether) acepta el futuro. Pero en la condición, presente: «si hay plazas».', example: 'Todavía no sé si podré tomar vacaciones en agosto. Si hay plazas, iré a la costa con mi pareja. Si no, me quedaré en casa.', teacher: 'Reacciona con «¿Y si no…?» para provocar una segunda condición. Fíjate en la diferencia entre «no sé si podré» y «si puedo».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno cuida tu casa y hace las preguntas («¿Y si el perro no come?», «¿Puedo usar…?»), y tú respondes con condiciones.', self: 'Ahora tú cuidas una casa: haz preguntas en voz alta con «¿Y si…?» («¿Y si la gata no come?») y respóndelas como el dueño. (Now you are the house-sitter: ask “¿Y si…?” and answer.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu nota para la cocina', coach: 'Si pasa esto, haz aquello. If this happens, do that.',
      steps: [
        { title: 'Instrucciones para quien cuida tu casa · Instructions for your house-sitter', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «si»: el verbo de la condición va en presente, y la consecuencia dice lo que quieres (costumbre, aviso, instrucción, promesa). Después, tu alumno lee su nota en voz alta.', self: 'Escribe tu nota y toca «Revisar mi texto». Después, mira cada «si»: ¿presente en la condición? ¿Qué expresa la consecuencia? (Check every “si”.)' } },
          { kind: 'write', title: 'Una nota con instrucciones · A note with instructions', situation: 'Te vas de viaje una semana y una amiga o un vecino va a cuidar tu casa (mascota, plantas, correo…). Escríbele una nota para dejar en la cocina con todo lo importante. (You are going away for a week and a friend or neighbour will look after your home. Write them a note to leave in the kitchen with everything important.)', task: [
            'Saluda y da las gracias. (Say hello and thank them.)',
            'Explica una costumbre de tu mascota o de tu casa con «si + presente, presente». (Explain a habit with si + present, present.)',
            'Da dos instrucciones con «si»: una con imperativo y otra con «tienes que» o «puedes». (Give two instructions with si.)',
            'Avisa de un problema con «si…, futuro / ir a». (Warn about a problem with si + future / ir a.)',
            'Haz una promesa sobre tu vuelta y usa «no sé si…» una vez. (Make a promise about your return and use “no sé si…” once.)',
          ], starters: ['Hola, …: ¡muchas gracias por cuidar mi casa!', 'Aquí tienes lo importante.', 'Si oye…, mi perro…', 'Si sales, …', 'Si quieres, puedes…', 'Si no…, va a…', 'Todavía no sé si…', 'Si vuelvo antes, te…', '¡Un abrazo!'],
            words: ['si', 'si no', 'tienes que', 'puedes', 'va a', 'se van a', 'avisaré', 'escribiré', 'no sé si', 'sino', 'enseguida', 'cada dos días'],
            model: 'Hola, Paula: ¡muchas gracias por cuidar mi casa! Aquí tienes lo importante. Mi perro, Lobo, es muy bueno, pero [[si oye|blue]] una moto, [[ladra|teal]] mucho. No te preocupes: [[si le hablas|blue]] tranquila, [[se calma|teal]] enseguida. Sácalo dos veces al día. Las plantas del balcón necesitan agua cada tres días; [[si las riegas|blue]] más, [[se van a poner|orange]] amarillas. [[Si sales|blue]] por la noche, [[tienes que|violet]] cerrar la puerta con llave. Y [[si tienes|blue]] hambre, [[puedes|violet]] tomar lo que quieras de la cocina. Todavía no sé si volveré el domingo o el lunes. [[Si cambio|blue]] el vuelo, te [[escribiré|orange]]. ¡Un abrazo! Marta',
            minWords: 70,
            checks: [
              { label: 'Condiciones con «si» (conditions with si)', pattern: '(?<!\\p{L})si\\s+\\p{L}+', tip: 'Escribe tus condiciones con «si» + presente: «Si oye una moto…», «Si sales…».' },
              { label: 'Una obligación o un permiso: tienes que / puedes (an obligation or permission)', pattern: '(?<!\\p{L})(?:tienes\\s+que|puedes|hay\\s+que|no\\s+hace\\s+falta)(?!\\p{L})', tip: 'Añade una norma de la casa: «Si sales, tienes que…», «Si quieres, puedes…».' },
              { label: 'Un aviso o una promesa: futuro o ir a (a warning or a promise)', pattern: '(?<!\\p{L})(?:\\p{L}{2,}(?:ré|rás|rá|remos|rán)|(?:voy|vas|va|vamos|van)\\s+a\\s+\\p{L}+)(?!\\p{L})', tip: 'Avisa o promete: «Si las riegas mucho, se van a poner amarillas», «Si cambio el vuelo, te escribiré».' },
            ],
            warnings: [
              { pattern: '(?:^|[.!?¡¿,;:]\\s*|(?<!\\p{L})y\\s+)si\\s+(?:no\\s+)?(?:\\p{L}+\\s+){0,2}\\p{L}{2,}(?:ré|rás|rá|remos|rán)(?!\\p{L})', why: 'Revisa esta condición: después de «si» de condición va el **presente** («si vuelvo», no «si volveré»). Solo «no sé si…» (whether) acepta el futuro.' },
              { pattern: '(?<!\\p{L})si\\s+(?:no\\s+)?(?:tengas|tenga|puedas|pueda|quieras|quiera|vengas|venga|salgas|salga|vuelvas|vuelva|haya|estés|esté|seas|sea)(?!\\p{L})', why: 'Después de «si» de condición no va subjuntivo: **si tienes**, **si puedes**, **si hay**.' },
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
            { tone: 'blue', label: 'CONDICIÓN', formula: 'si + presente de indicativo', example: 'Si Canela no come… / Si vuelvo antes…', caption: 'algo posible; nunca «si volveré», nunca «si vuelva»', en: 'something possible; never future or subjunctive after “si”' },
            { tone: 'teal', label: 'COSTUMBRE', formula: '…, presente', example: 'Si oye el timbre, se esconde.', caption: 'lo que pasa siempre en ese caso', en: 'what always happens in that case' },
            { tone: 'orange', label: 'PREDICCIÓN O PROMESA', formula: '…, futuro / ir a + infinitivo', example: 'Si cambio el vuelo, te avisaré. Si los riegas mucho, se van a pudrir.', caption: 'lo que pasará', en: 'what will happen' },
            { tone: 'violet', label: 'INSTRUCCIÓN', formula: '…, imperativo / puedes / tienes que', example: 'Si no come, llámame. Si sales, tienes que cerrar con llave.', caption: 'lo que hay que hacer o se puede hacer', en: 'what to do, or what you may do' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'La condición casi no cambia: **si + presente de indicativo**. Tú eliges la consecuencia según lo que quieres decir: costumbre (presente), predicción o promesa (futuro, ir a), instrucción (imperativo, puedes, tienes que). Cuidado con dos trampas: «cuando vuelva» (seguro) pero «si vuelvo» (posible); y «no sé si volverá» (whether) sí acepta el futuro.', en: 'The condition hardly changes: si + present indicative. You choose the result by what you want to say: habit (present), prediction or promise (future, ir a), instruction (imperative, puedes, tienes que). Watch out for two traps: “cuando vuelva” (certain) but “si vuelvo” (possible); and “no sé si volverá” (whether) does take the future.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Si el agua ___ a cien grados, hierve.', options: ['llega', 'llegue', 'llegará'], answer: 0, why: 'Verdad general: presente en las dos partes, «llega».', en: 'If water reaches a hundred degrees, it boils.' },
            { prompt: 'Si no encuentras las llaves, ___ al portero.', options: ['preguntarle', 'pregúntale', 'le preguntes'], answer: 1, why: 'Instrucción afirmativa: imperativo, «pregúntale».', en: 'If you can’t find the keys, ask the doorman.' },
            { prompt: '¿Qué frase es correcta?', options: ['No sé si Ana vendrá a la cena.', 'Si Ana vendrá, haremos la cena en casa.', 'Si Ana venga, haremos la cena en casa.'], answer: 0, why: '«No sé si» = whether: el futuro es correcto. En una condición, «si Ana viene».', en: 'Which sentence is correct?' },
            { prompt: 'Esta bici no es de Raúl, ___ de Lucía.', options: ['pero', 'si no', 'sino'], answer: 2, why: 'Corriges una idea después de «no»: «sino».', en: 'This bike isn’t Raúl’s but Lucía’s.' },
            { prompt: '___ termine el curso, buscaré trabajo en Lima. (Es seguro que va a terminar.)', options: ['Si', 'Cuando', 'Sino'], answer: 1, why: 'Es seguro y habla del momento: «cuando + subjuntivo», «cuando termine».', en: 'When I finish the course, I’ll look for a job in Lima.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una habitación en alquiler. Now, a room to rent.', blocks: [
          { kind: 'lead', text: 'Inés, la prima de Raúl, alquila una habitación a un estudiante, Bruno. Le escribe las normas de la casa. Transforma sus notas en frases con «si».', en: 'Inés, Raúl’s cousin, rents a room to a student, Bruno. She writes him the house rules. Turn her notes into sentences with “si”.' },
          { kind: 'rewrite', title: 'Las normas de Inés · Inés’s rules', items: [
            { prompt: 'usar la lavadora → tener que tender la ropa en el patio', instruction: 'Escribe la norma con «si» y «tienes que». Empieza con «Si usas».', accept: ['Si usas la lavadora, tienes que tender la ropa en el patio'] },
            { prompt: 'el wifi no funciona → apagar y encender el router (instrucción)', instruction: 'Escribe la norma con «si» e imperativo. Empieza con «Si el wifi».', accept: ['Si el wifi no funciona, apaga y enciende el router', 'Si el wifi no funciona, apaga el router y enciéndelo'] },
            { prompt: 'invitar a amigos → poder usar la sala de estar (permiso)', instruction: 'Escribe la norma con «si» y «puedes». Empieza con «Si invitas».', accept: ['Si invitas a amigos, puedes usar la sala de estar', 'Si invitas a tus amigos, puedes usar la sala de estar', 'Si invitas a unos amigos, puedes usar la sala de estar'] },
          ] },
        ] },
        { title: 'Ampliación · En caso de que, siempre que (opcional)', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'lead', text: 'En notas formales, carteles o contratos vas a leer otras formas de condición: **en caso de que** + subjuntivo (= si, más formal: «in case / if») y **siempre que** + subjuntivo (= solo con esa condición: «as long as»). Ojo: **siempre que** + indicativo significa «cada vez que» (whenever). Por ahora, solo tienes que entenderlas.', en: 'In formal notes, signs or contracts you will read other ways to set a condition: en caso de que + subjunctive (= si, more formal: “in case / if”) and siempre que + subjunctive (= only on that condition: “as long as”). Careful: siempre que + indicative means “whenever”. For now you only need to understand them.' },
          { kind: 'choice', title: '¿Qué significa? · What does it mean?', items: [
            { prompt: '«En caso de que Canela no coma, llame a la veterinaria.» = …', options: ['Si Canela no come, llame a la veterinaria.', 'Cuando Canela come, llame a la veterinaria.', 'Aunque Canela no come, no llame a la veterinaria.'], answer: 0, why: '«En caso de que» = «si», en un registro más formal. Va con subjuntivo: «coma».', en: '“In case Canela doesn’t eat, call the vet.” = …' },
            { prompt: '«Puedes usar mi bici siempre que la dejes dentro del edificio.» = …', options: ['Cada vez que la dejas dentro, la usas.', 'Puedes usarla solo con esa condición: dejarla dentro.', 'Puedes usarla y dejarla en la calle.'], answer: 1, why: '«Siempre que» + subjuntivo (dejes) = con la condición de que, as long as.', en: '“You can use my bike as long as you leave it inside the building.” = …' },
            { prompt: '«Siempre que llueve, Canela duerme en el sofá.» = …', options: ['Solo si llueve mucho.', 'Canela nunca duerme en el sofá.', 'Cada vez que llueve, Canela duerme en el sofá.'], answer: 2, why: '«Siempre que» + indicativo (llueve) = cada vez que, whenever.', en: '“Whenever it rains, Canela sleeps on the sofa.” = …' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Solo se pide comprensión: tu alumno reformula cada frase con «si» o con «cada vez que».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 103 · Condicional simple: consejos, cortesía e hipótesis', text: 'Ya pones condiciones reales: «Si Canela no come, llámame», «Si vuelvo antes, te avisaré». En la clase 103 aprendes el condicional simple: para aconsejar sin mandar («Yo **cerraría** con llave»), para pedir con cortesía («¿**Podrías** regar las plantas?») y para imaginar («Me **gustaría** vivir en Lima»). Es el paso natural: de lo que es posible y real pasas a lo que harías tú.', en: 'You can now set real conditions: “Si Canela no come, llámame”, “Si vuelvo antes, te avisaré”. In class 103 you learn the simple conditional: to advise without ordering, to ask politely and to imagine. It is the natural next step: from what is possible and real to what you would do.', href: '/sistema-verbal/condicional-simple-indicativo', label: 'Ir a la clase 103' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué pasa en tu casa si te vas una semana?». Respuesta esperada: tres frases con «si + presente» y tres consecuencias distintas. Tarea: terminar la nota de Escribir para una persona real.' },
        ] },
      ],
    },
  ],
};
