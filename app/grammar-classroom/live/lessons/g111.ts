import type { LiveLesson } from '../types';

/**
 * Lesson 111 · A1 · Oraciones básicas.
 * Core: subject + verb + information, subject–verb agreement, and the three
 * basic sentence types: affirm, negate (no + verb) and ask (yes/no and wh- questions).
 * Ana and Leo organise their work week through the class.
 */
export const lesson: LiveLesson = {
  id: 111,
  level: 'A1',
  title: 'Oraciones básicas',
  subtitle: 'Construir frases completas para afirmar, negar con «no» y hacer preguntas sobre personas y horarios.',
  legend: [
    { tone: 'blue', label: 'Sujeto · quién' },
    { tone: 'teal', label: 'Verbo · la acción' },
    { tone: 'orange', label: 'No · la negación' },
    { tone: 'violet', label: 'Pregunta · ¿…?, qué, dónde, cuándo' },
  ],
  optionNotes: {
    trabaja: '«Trabaja» va con un sujeto singular: Ana, mi hermano, la gente.',
    trabajan: '«Trabajan» va con un sujeto plural: Ana y Leo, mis amigos.',
    trabajamos: '«Trabajamos» va con nosotros: Leo y yo, mi equipo y yo.',
    Dónde: '«¿Dónde?» pregunta por un lugar.',
    Cuándo: '«¿Cuándo?» pregunta por un momento.',
    Qué: '«¿Qué?» pregunta por una cosa o una acción.',
    Quién: '«¿Quién?» pregunta por una persona.',
    Cómo: '«¿Cómo?» pregunta por la manera.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'De palabras a oraciones', coach: 'Una oración necesita un verbo.',
      steps: [
        { title: 'Quién + verbo + información', blocks: [
          { kind: 'lead', text: '«Ana. Oficina. Lunes.» Son palabras, pero no es una oración. Falta **el verbo**: «Ana **trabaja** en una oficina los lunes».', en: 'A sentence needs a conjugated verb.' },
          { kind: 'guide', text: { teacher: 'Escribe tres palabras sueltas (Leo, casa, cocinar). Pide al alumno una oración completa antes de mostrar la explicación.', self: 'Antes de leer, intenta formar una oración con «Leo», «casa» y «cocinar».' } },
          { kind: 'concept', tone: 'teal', label: 'LA ORACIÓN BÁSICA', question: '¿Quién hace qué?', en: 'subject + verb + information', formula: ['sujeto + verbo + información'],
            meaning: 'El **verbo** es el centro de la oración. El **sujeto** dice quién hace la acción o de quién hablamos. Después va la **información**: dónde, cuándo, qué.',
            examples: [
              { es: '[[Ana|blue]] [[trabaja|teal]] en Madrid.', en: 'Ana works in Madrid.' },
              { es: '[[Mis amigos|blue]] [[viven|teal]] cerca.', en: 'My friends live nearby.' },
              { es: '[[Yo|blue]] [[estudio|teal]] español los martes.', en: 'I study Spanish on Tuesdays.' },
              { es: '[[Estudio|teal]] español los martes.', en: 'I study Spanish on Tuesdays.' },
            ],
            note: 'Con yo, tú y nosotros, el sujeto muchas veces **no aparece**: la terminación del verbo ya dice quién es.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué es una oración completa?', options: ['Leo, casa, por la mañana.', 'Leo trabaja en casa por la mañana.', 'Leo en casa por la mañana.'], answer: 1, why: 'Solo esta tiene un verbo conjugado: trabaja.' },
            { prompt: 'En «Mis padres viven en Lima», ¿cuál es el sujeto?', options: ['Mis padres', 'viven', 'en Lima'], answer: 0, why: '«Mis padres»: las personas que viven en Lima.' },
          ] },
        ] },
        { title: 'El verbo mira al sujeto', mascot: '/brand/mascot/studying.webp', coach: 'Singular con singular, plural con plural.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONCORDANCIA', question: '¿Uno o varios?', en: 'agreement', formula: ['sujeto singular + verbo singular', 'sujeto plural + verbo plural'],
            meaning: 'El verbo **concuerda** con el sujeto. Si el sujeto es una persona o una cosa, el verbo va en singular. Si son varias, en plural.',
            examples: [
              { es: '[[Mi hermano|blue]] [[cocina|teal]].', en: 'My brother cooks.' },
              { es: '[[Mis hermanos|blue]] [[cocinan|teal]].', en: 'My brothers cook.' },
              { es: '[[Ana y Leo|blue]] [[preparan|teal]] la reunión.', en: 'Ana and Leo prepare the meeting.' },
              { es: '[[Leo y yo|blue]] [[preparamos|teal]] la reunión.', en: 'Leo and I prepare the meeting.' },
            ] },
          { kind: 'table', title: 'Sujetos y verbos', head: ['Sujeto', 'Verbo', 'Ejemplo'], rows: [
            ['una persona o cosa', 'singular', '[[Ana|blue]] [[trabaja|teal]]. [[La reunión|blue]] [[empieza|teal]].'],
            ['dos o más personas', 'plural (ellos)', '[[Ana y Leo|blue]] [[trabajan|teal]].'],
            ['otra persona + yo', 'plural (nosotros)', '[[Leo y yo|blue]] [[trabajamos|teal]].'],
            ['otra persona + tú', 'plural (ustedes)', '[[Tú y Ana|blue]] [[trabajan|teal]].'],
          ], note: '**La gente** parece plural, pero es singular: «La gente [[trabaja|teal]] mucho».' },
          { kind: 'tip', icon: '!', title: 'También el adjetivo', text: 'Con **ser** y **estar**, el adjetivo también mira al sujeto: «Ana y Luis **son** argentin**os**». Con un grupo mixto, usamos el masculino plural.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Mis amigas ___ en casa.', options: ['trabaja', 'trabajan', 'trabajamos'], answer: 1, why: '«Mis amigas» es plural: trabajan.' },
            { prompt: 'Mi equipo y yo ___ los martes.', options: ['preparan', 'preparo', 'preparamos'], answer: 2, why: '«Mi equipo y yo» = nosotros: preparamos.' },
            { prompt: 'La gente ___ por la mañana.', options: ['trabaja', 'trabajan', 'trabajamos'], answer: 0, why: '«La gente» es singular: trabaja.' },
          ] },
        ] },
        { title: 'Negar: no + verbo', mascot: '/brand/mascot/speaking.webp', coach: '«No» va justo delante del verbo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'NEGACIÓN', question: '¿Cómo digo que no?', en: 'not', formula: ['sujeto + no + verbo + información'],
            meaning: 'Para negar, pon **no** **delante del verbo**. El resto de la oración no cambia.',
            examples: [
              { es: 'Ana [[no|orange]] trabaja los sábados.', en: 'Ana doesn’t work on Saturdays.' },
              { es: 'Leo [[no|orange]] prepara documentos por la mañana.', en: 'Leo doesn’t prepare documents in the morning.' },
              { es: '[[No|orange]] tengo tiempo hoy.', en: 'I don’t have time today.' },
            ],
            note: 'En español no hay una palabra como «don’t»: solo **no**.' },
          { kind: 'compare', title: 'Afirmar y negar', columns: [
            { tone: 'teal', label: 'AFIRMAR', sentence: 'Leo **trabaja** hoy.', idea: 'Una información positiva.', en: 'Leo works today.' },
            { tone: 'orange', label: 'NEGAR', sentence: 'Leo [[no|orange]] **trabaja** hoy.', idea: '«No» delante del verbo.', en: 'Leo doesn’t work today.' },
          ] },
          { kind: 'tip', icon: '👀', title: 'Responder con «no»', text: 'Para responder que no, puedes decir **no** dos veces: «¿Trabajas hoy? —**No**, [[no|orange]] trabajo». El primero responde; el segundo niega el verbo.', en: 'No, I don’t work.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Dónde está bien colocada la negación?', options: ['Ana trabaja no hoy.', 'Ana no trabaja hoy.', 'No Ana trabaja hoy.'], answer: 1, why: '«No» va delante del verbo.' },
            { prompt: '«¿Tienes coche?» —No, ___.', options: ['no tengo coche', 'tengo no coche', 'no coche tengo'], answer: 0, why: '«No» delante del verbo «tengo».' },
          ] },
        ] },
        { title: 'Preguntar', mascot: '/autoestudio/mascot/noting.webp', coach: 'Dos tipos de pregunta.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PREGUNTA DE SÍ O NO', question: '¿Sí o no?', en: 'yes/no question', formula: ['¿ + oración + ?', '¿ + verbo + sujeto + información + ?'],
            meaning: 'Para preguntar si algo es verdad, usa **las mismas palabras** y cambia la **entonación**: la voz sube al final. Por escrito, usa **¿** al principio y **?** al final.',
            examples: [
              { es: '[[¿Ana trabaja hoy?|violet]]', en: 'Does Ana work today?' },
              { es: '[[¿Trabaja Ana hoy?|violet]]', en: 'Does Ana work today?' },
              { es: '[[¿Tienes tiempo esta tarde?|violet]]', en: 'Do you have time this afternoon?' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'PREGUNTA CON QUÉ, DÓNDE…', question: '¿Qué información falta?', en: 'wh- question', formula: ['¿ + qué / dónde / cuándo / quién / cómo + verbo + sujeto + ?'],
            meaning: 'Para pedir **una información**, empieza con una palabra de pregunta. Después va el **verbo** y luego el sujeto.',
            examples: [
              { es: '¿[[Dónde|violet]] trabaja Ana? —En una oficina.', en: 'Where does Ana work?' },
              { es: '¿[[Cuándo|violet]] empieza la reunión? —A las seis.', en: 'When does the meeting start?' },
              { es: '¿[[Qué|violet]] prepara Leo? —Los documentos.', en: 'What is Leo preparing?' },
              { es: '¿[[Quién|violet]] tiene los documentos? —Marta.', en: 'Who has the documents?' },
            ],
            note: 'Las palabras de pregunta llevan **tilde**: qué, dónde, cuándo, quién, cómo.' },
          { kind: 'table', title: 'Una oración, tres tipos', head: ['Tipo', 'Ejemplo'], rows: [
            ['Afirmar', '[[Leo|blue]] [[trabaja|teal]] hoy.'],
            ['Negar', '[[Leo|blue]] [[no|orange]] [[trabaja|teal]] hoy.'],
            ['Preguntar sí o no', '[[¿Leo trabaja hoy?|violet]]'],
            ['Preguntar una información', '¿[[Cuándo|violet]] [[trabaja|teal]] [[Leo|blue]]?'],
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Cuál es la pregunta más natural?', options: ['¿Dónde trabaja Ana?', '¿Ana trabaja dónde?', '¿Trabaja dónde Ana?'], answer: 0, why: 'La palabra de pregunta va al principio, después el verbo.' },
            { prompt: 'La respuesta es «A las seis». ¿Cuál es la pregunta?', options: ['¿Dónde empieza la clase?', '¿Cuándo empieza la clase?', '¿Quién empieza la clase?'], answer: 1, why: '«A las seis» es un momento: ¿Cuándo?' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Qué quieres hacer con tu frase?', blocks: [
          { kind: 'decide', title: 'Piensa en lo que quieres decir', steps: [
            { q: '¿Quieres dar una información?', yes: '¿Es positiva? Afirma: «[[Ana|blue]] [[trabaja|teal]] hoy». ¿Es negativa? Pon **no** delante del verbo: «Ana [[no|orange]] trabaja hoy».', no: 'next' },
            { q: '¿Quieres saber si algo es verdad (sí o no)?', yes: 'Usa la misma oración con **¿…?**: «[[¿Ana trabaja hoy?|violet]]».', no: 'Quieres una información concreta: empieza con **qué, dónde, cuándo, quién, cómo**: «¿[[Dónde|violet]] trabaja Ana?».' },
          ] },
          { kind: 'tip', icon: '✔', title: 'Revisa siempre el verbo', text: 'En las tres oraciones, el verbo tiene que concordar con el sujeto: «Ana trabaj**a**», «Ana y Leo no trabaj**an**», «¿Dónde trabaj**an** Ana y Leo?».' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección. Pregunta: «¿Dónde está el verbo? ¿Quién es el sujeto?».', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Mis amigas trabaja en casa.', right: 'Mis amigas trabajan en casa.', why: 'Sujeto plural, verbo plural.' },
            { wrong: 'Ana trabaja no los sábados.', right: 'Ana no trabaja los sábados.', why: '«No» va delante del verbo.' },
            { wrong: 'Leo y yo preparan la reunión.', right: 'Leo y yo preparamos la reunión.', why: '«Leo y yo» = nosotros.' },
            { wrong: 'Dónde trabajas?', right: '¿Dónde trabajas?', why: 'En español, la pregunta abre con «¿».' },
            { wrong: '¿Donde vive Marta?', right: '¿Dónde vive Marta?', why: 'Las palabras de pregunta llevan tilde.' },
            { wrong: 'La gente trabajan mucho.', right: 'La gente trabaja mucho.', why: '«La gente» es singular.' },
          ] },
          { kind: 'teacher', text: 'Di una oración («Marta vive en Quito»). El alumno la niega y hace dos preguntas: una de sí o no y una con dónde.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Oraciones en situaciones reales', coach: 'Toca las palabras marcadas.',
      steps: [
        { title: 'El horario del equipo', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada marca y explica qué tipo de oración es.', self: 'Lee el diálogo. Después toca cada palabra marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Organizar la reunión', setting: 'Ana y Leo trabajan en el mismo equipo. Hoy hay una reunión importante.', lines: [
            { who: 'Ana', text: 'Hola, Leo. [[¿Trabajas esta tarde?|violet]]' },
            { who: 'Leo', text: 'Sí, trabajo a las cuatro. Por la mañana [[no|orange]] trabajo.' },
            { who: 'Ana', text: '¿[[Cuándo|violet]] empieza la reunión?' },
            { who: 'Leo', text: 'A las cinco. [[Marta y Pablo|blue]] [[llegan|teal]] a las cuatro y media.' },
            { who: 'Ana', text: '¿[[Quién|violet]] prepara los documentos?' },
            { who: 'Leo', text: '[[Tú y yo|blue]] [[preparamos|teal]] los documentos. Marta [[no|orange]] tiene tiempo.' },
            { who: 'Ana', text: 'De acuerdo. ¿[[Dónde|violet]] están las carpetas?' },
            { who: 'Leo', text: 'En mi mesa. [[La gente|blue]] del equipo [[necesita|teal]] una copia.' },
            { who: 'Ana', text: 'Perfecto. Los sábados yo [[no|orange]] trabajo, pero hoy sí.' },
            { who: 'Leo', text: '¡Entonces hasta las cuatro!' },
          ], notes: {
            '¿Trabajas esta tarde?': 'Pregunta de **sí o no**: la misma oración «Trabajas esta tarde» con ¿…?',
            'no': '**No** va delante del verbo: no trabajo, no tiene, no trabajo.',
            'Cuándo': 'Pregunta por un **momento**. La respuesta: a las cinco.',
            'Marta y Pablo': 'Sujeto **plural**: dos personas.',
            'llegan': 'Verbo en plural porque el sujeto es plural.',
            'Quién': 'Pregunta por una **persona**.',
            'Tú y yo': 'Tú y yo = **nosotros**.',
            'preparamos': 'Verbo de nosotros, como pide el sujeto «tú y yo».',
            'Dónde': 'Pregunta por un **lugar**. La respuesta: en mi mesa.',
            'La gente': '«La gente» es un sujeto **singular**, aunque son muchas personas.',
            'necesita': 'Verbo en singular porque «la gente» es singular.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Leo trabaja por la mañana?', options: ['Sí.', 'No.', 'No se sabe.'], answer: 1, why: '«Por la mañana no trabajo.»' },
            { prompt: '¿Quiénes preparan los documentos?', options: ['Marta y Pablo.', 'Ana y Leo.', 'Toda la gente del equipo.'], answer: 1, why: '«Tú y yo preparamos los documentos», dice Leo a Ana.' },
            { prompt: '¿Qué día no trabaja Ana?', options: ['Los lunes.', 'Los sábados.', 'Hoy.'], answer: 1, why: '«Los sábados yo no trabajo.»' },
          ] },
        ] },
        { title: 'Un cambio de plan', blocks: [
          { kind: 'explore', title: 'Mensajes de la tarde', setting: 'A las tres, Marta escribe a Ana.', lines: [
            { who: 'Marta', text: 'Ana, la reunión [[no|orange]] empieza a las cinco.' },
            { who: 'Ana', text: '¿[[Qué|violet]] pasa?' },
            { who: 'Marta', text: '[[El director|blue]] [[llega|teal]] tarde. Empieza a las seis.' },
            { who: 'Ana', text: '[[¿Leo sabe el cambio?|violet]]' },
            { who: 'Marta', text: '[[No|orange]], [[no|orange]] sabe nada. [[¿Tú tienes su número?|violet]]' },
            { who: 'Ana', text: 'Sí. ¿[[Dónde|violet]] es la reunión ahora?' },
            { who: 'Marta', text: 'En la sala grande. [[Los directores|blue]] [[necesitan|teal]] más espacio.' },
            { who: 'Ana', text: 'De acuerdo. Escribo a Leo ahora.' },
          ], notes: {
            'no': '**No** delante del verbo «empieza» / «sabe»: negación.',
            'Qué': 'Pregunta por una **cosa** o una situación.',
            'El director': 'Sujeto **singular**: una persona.',
            'llega': 'Verbo en singular, como el sujeto.',
            '¿Leo sabe el cambio?': 'Pregunta de **sí o no**, con el orden de una oración normal.',
            'No': 'El primer «no» **responde** a la pregunta; el segundo **niega** el verbo.',
            '¿Tú tienes su número?': 'Pregunta de **sí o no** con el sujeto «tú» para dar énfasis.',
            'Dónde': 'Pregunta por un **lugar**.',
            'Los directores': 'Sujeto **plural**.',
            'necesitan': 'Verbo en plural, como el sujeto.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué haces tú esta tarde? ¿Y qué no haces?». Después el alumno te hace una pregunta con cuándo.' },
        ] },
        { title: '¿Afirma, niega o pregunta?', blocks: [
          { kind: 'classify', title: 'Clasifica las oraciones de las dos conversaciones', categories: [
            { id: 'afirma', label: 'Afirma', tone: 'teal' },
            { id: 'niega', label: 'Niega', tone: 'orange' },
            { id: 'pregunta', label: 'Pregunta', tone: 'violet' },
          ], items: [
            { text: 'Trabajo a las cuatro.', answer: 'afirma', why: 'Una información positiva.' },
            { text: 'Marta no tiene tiempo.', answer: 'niega', why: '«No» delante del verbo.' },
            { text: '¿Quién prepara los documentos?', answer: 'pregunta', why: 'Pregunta con «quién».' },
            { text: 'El director llega tarde.', answer: 'afirma', why: 'Una información positiva.' },
            { text: 'La reunión no empieza a las cinco.', answer: 'niega', why: '«No» delante del verbo.' },
            { text: '¿Leo sabe el cambio?', answer: 'pregunta', why: 'Pregunta de sí o no.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Hablas de tus dos amigas.', prompt: 'Mis amigas ___ en casa.', options: ['trabaja', 'trabajan', 'trabajamos'], answer: 1, why: 'Sujeto plural: trabajan.' },
            { context: 'Ana y Luis son de Buenos Aires.', prompt: 'Ana y Luis ___ argentinos.', options: ['es', 'son', 'somos'], answer: 1, why: 'Dos personas: son.' },
            { context: 'Hablas de ti y de tu hermana.', prompt: 'Mi hermana y yo ___ en Bogotá.', options: ['viven', 'vivimos', 'vive'], answer: 1, why: '«Mi hermana y yo» = nosotros: vivimos.' },
            { context: 'Quieres saber el lugar.', prompt: '¿___ estudia Luis?', options: ['Dónde', 'Cuándo', 'Quién'], answer: 0, why: 'Para un lugar: ¿Dónde?' },
            { context: 'Quieres saber la persona.', prompt: '¿___ tiene las llaves?', options: ['Qué', 'Quién', 'Cómo'], answer: 1, why: 'Para una persona: ¿Quién?' },
            { context: 'Leo no va a la oficina hoy.', prompt: 'Leo ___ hoy.', options: ['trabaja no', 'no trabaja', 'no trabajan'], answer: 1, why: '«No» delante del verbo, y singular para Leo.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué oración pide una respuesta de **sí o no**?', options: ['¿Trabaja Ana hoy?', '¿Dónde trabaja Ana?'], answer: 0, why: 'Sin palabra de pregunta: se responde sí o no.' },
            { prompt: '«Ana no trabaja los lunes.» ¿Qué significa?', options: ['Los lunes Ana está libre de trabajo.', 'Ana trabaja todos los lunes.', 'Ana trabaja solo los lunes.'], answer: 0, why: '«No trabaja» niega la acción ese día.' },
            { prompt: '¿Qué oración habla de **varias** personas?', options: ['La gente trabaja aquí.', 'Mis compañeros trabajan aquí.'], answer: 1, why: 'Las dos hablan de muchas personas, pero solo «mis compañeros» es un sujeto plural (trabajan).' },
            { prompt: '«¿Cuándo empieza la clase?» ¿Qué respuesta es posible?', options: ['En la sala dos.', 'A las seis.', 'La profesora.'], answer: 1, why: '«¿Cuándo?» pide un momento.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Organizar una clase', lines: [
            { who: 'Sofía', text: 'Hola, Raúl. ¿___ tiempo el jueves?', options: ['Tienes', 'Tiene', 'Tienen'], answer: 0, why: 'Sofía habla a Raúl (tú): tienes.' },
            { who: 'Raúl', text: 'Por la mañana ___. Por la tarde sí.', options: ['no tengo', 'tengo no', 'no tienes'], answer: 0, why: '«No» delante del verbo; yo: tengo.' },
            { who: 'Sofía', text: '¿___ es mejor para ti: a las cuatro o a las seis?', options: ['Qué hora', 'Dónde', 'Quién'], answer: 0, why: 'Pregunta por una hora: ¿Qué hora…?' },
            { who: 'Raúl', text: 'A las cuatro. Mi hermano y yo ___ en casa a esa hora.', options: ['estamos', 'están', 'está'], answer: 0, why: '«Mi hermano y yo» = nosotros: estamos.' },
            { who: 'Sofía', text: 'Perfecto. ¿___ es la clase, en tu casa o en la biblioteca?', options: ['Dónde', 'Cuándo', 'Cómo'], answer: 0, why: 'Pregunta por un lugar.' },
            { who: 'Raúl', text: 'En mi casa. Los libros ___ allí.', options: ['está', 'están', 'estamos'], answer: 1, why: '«Los libros» es plural: están.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mis padres viven en Lima.', ok: true, why: 'Correcta: sujeto plural, verbo plural.' },
            { sentence: 'Mi amiga trabajan en un hotel.', ok: false, options: ['Mi amiga trabaja en un hotel.', 'Mi amiga trabajamos en un hotel.', 'Mi amiga trabajas en un hotel.'], answer: 0, why: 'Sujeto singular: trabaja.' },
            { sentence: 'Yo como no carne.', ok: false, options: ['Yo no como carne.', 'No yo como carne.', 'Yo como carne no.'], answer: 0, why: '«No» delante del verbo.' },
            { sentence: '¿Cuándo empieza la película?', ok: true, why: 'Correcta: palabra de pregunta + verbo + sujeto.' },
            { sentence: '¿Tu hermano vive dónde?', ok: false, options: ['¿Dónde vive tu hermano?', '¿Vive dónde tu hermano?', '¿Dónde tu hermano vive?'], answer: 0, why: 'La palabra de pregunta va al principio, después el verbo.' },
            { sentence: 'Carlos y yo estudian juntos.', ok: false, options: ['Carlos y yo estudiamos juntos.', 'Carlos y yo estudia juntos.', 'Carlos y yo estudio juntos.'], answer: 0, why: '«Carlos y yo» = nosotros.' },
          ] },
        ] },
        { title: 'Construye oraciones', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['trabaja', 'Ana', 'no', 'los sábados'], accept: ['Ana no trabaja los sábados', 'Los sábados Ana no trabaja'], en: 'Ana doesn’t work on Saturdays.' },
            { tiles: ['Dónde', 'Luis', 'estudia'], accept: ['Dónde estudia Luis'], en: 'Where does Luis study?' },
            { tiles: ['preparamos', 'Leo y yo', 'los documentos'], accept: ['Leo y yo preparamos los documentos'], en: 'Leo and I prepare the documents.' },
            { tiles: ['empieza', 'Cuándo', 'la reunión'], accept: ['Cuándo empieza la reunión'], en: 'When does the meeting start?' },
          ] },
          { kind: 'rewrite', title: 'Transforma la oración', items: [
            { prompt: 'Ana trabaja los lunes.', instruction: 'Niega la oración.', accept: ['Ana no trabaja los lunes', 'Los lunes Ana no trabaja'] },
            { prompt: 'Luis estudia en casa.', instruction: 'Pregunta por el lugar.', accept: ['¿Dónde estudia Luis?', 'Dónde estudia Luis'] },
            { prompt: 'Leo trabaja hoy.', instruction: 'Haz una pregunta de sí o no.', accept: ['¿Leo trabaja hoy?', '¿Trabaja Leo hoy?', '¿Trabaja hoy Leo?'] },
            { prompt: 'Mi hermano cocina los domingos.', instruction: 'Cambia el sujeto a «Mis hermanos».', accept: ['Mis hermanos cocinan los domingos'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una llamada de organización', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una llamada de organización', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota cada «no» y cada pregunta antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Leo llama a Ana', channel: 'NOTA DE VOZ · PARA ANA', src: '/audio/grammar-classroom/111.mp3',
            before: 'Leo le deja un mensaje a Ana para organizar la reunión. ¿Qué crees que cambia en el plan?',
            gist: { prompt: '¿Para qué llama Leo?', options: ['Para organizar el trabajo y corregir la hora de la reunión.', 'Para cancelar la reunión.', 'Para invitar a Ana a comer.'], answer: 0, why: 'Organiza el día y dice: «La reunión no empieza a las cinco; empieza a las seis».' },
            details: [
              { prompt: '¿Dónde trabaja Leo hoy?', options: ['En casa.', 'En la oficina.', 'En la biblioteca.'], answer: 1, why: '«Hoy no trabajo en casa. Trabajo en la oficina por la tarde.»' },
              { prompt: '¿Quiénes preparan los documentos a las tres?', options: ['Ana y Leo.', 'Marta y Leo.', 'Ana y Marta.'], answer: 1, why: '«Marta y yo preparamos los documentos a las tres», dice Leo.' },
              { prompt: '¿A qué hora empieza la reunión?', options: ['A las tres.', 'A las cinco.', 'A las seis.'], answer: 2, why: '«La reunión no empieza a las cinco; empieza a las seis.»' },
              { prompt: '¿Qué pregunta Leo sobre los documentos?', options: ['Dónde están.', 'Quién los tiene.', 'Cuándo llegan.'], answer: 0, why: '«¿Dónde están los documentos nuevos?»' },
            ],
            transcript: 'Hola, Ana. Hoy [[no|orange]] trabajo en casa. Trabajo en la oficina por la tarde. [[Marta y yo|blue]] [[preparamos|teal]] los documentos a las tres. [[¿Tú tienes tiempo a esa hora?|violet]] La reunión [[no|orange]] empieza a las cinco; empieza a las seis. ¿[[Dónde|violet]] están los documentos nuevos? Los necesito antes de la reunión.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Ana: ¿tiene tiempo a las tres? ¿Dónde están los documentos? Una frase afirmativa, una negativa y una pregunta.', self: 'Responde a Leo como si fueras Ana. Escribe o di tres frases: una afirmación, una negación con «no» y una pregunta.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu semana y tu gente', coach: 'Una pregunta por vez. Afirma, niega y pregunta.',
      steps: [
        { title: 'Tu semana y tu gente', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Pide respuestas completas, con verbo, y anima al alumno a hacerte preguntas también.', self: 'Responde cada pregunta en voz alta con oraciones completas. Usa «no» al menos una vez en cada respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué días trabajas o estudias? ¿Qué días no?', followUps: ['¿Trabajas los sábados?', '¿A qué hora empiezas?', '¿Dónde trabajas?'], phrases: ['[[Trabajo|teal]] de lunes a viernes.', 'Los sábados [[no|orange]] trabajo.', 'Empiezo a las…'], hint: 'Para negar: no + verbo. «No trabajo los domingos».', example: 'Trabajo de lunes a jueves en una oficina. Los viernes no trabajo: estudio español. Empiezo a las nueve.', next: 'Ahora, las personas de tu vida.' },
            { q: 'Presenta a dos personas importantes para ti. ¿Qué hacen?', followUps: ['¿Dónde viven?', '¿Qué hacen juntos?', '¿Qué no hacen nunca?'], phrases: ['[[Mi hermana|blue]] [[trabaja|teal]]…', '[[Mis padres|blue]] [[viven|teal]]…', '[[Mi hermana y yo|blue]] [[cocinamos|teal]]…'], hint: 'Una persona: verbo singular. Dos personas: plural. «Ella y yo»: nosotros.', example: 'Mi hermana trabaja en un hospital. Mis padres viven en el campo. Mi hermana y yo cocinamos juntas los domingos.', next: 'Ahora haz tú las preguntas.', teacher: 'Pregunta qué actividad no hacen: «¿Tus padres viajan mucho?».' },
            { q: 'Hazme tres preguntas sobre mi semana o sobre una persona que conoces.', followUps: ['¿Qué pregunta empieza con «dónde»?', '¿Y con «cuándo»?', '¿Puedes hacer una pregunta de sí o no?'], phrases: ['¿[[Dónde|violet]] trabajas?', '¿[[Cuándo|violet]] estudias?', '[[¿Tienes hijos?|violet]]'], hint: 'Palabra de pregunta + verbo + sujeto. O la misma oración con ¿…?', example: '¿Dónde trabajas? ¿Cuándo tienes vacaciones? ¿Tienes hermanos?', next: 'Hablemos de un día normal.', teacher: 'Responde con frases completas para dar un modelo. En modo autónomo, el alumno escribe las preguntas para otra persona.' },
            { q: '¿Qué haces en un día normal? ¿Qué no haces nunca?', followUps: ['¿Desayunas en casa?', '¿Cocinas por la noche?', '¿Ves la televisión?'], phrases: ['Por la mañana [[desayuno|teal]]…', '[[No|orange]] [[veo|teal]] la televisión.', '[[Nunca|orange]] [[cocino|teal]]…'], hint: '«Nunca» también niega: «Nunca cocino» = «No cocino nunca».', example: 'Por la mañana desayuno en casa y camino al trabajo. No veo la televisión por la noche: leo.', next: 'Organicemos un plan juntos.' },
            { q: 'Vamos a estudiar juntos esta semana. ¿Qué día y a qué hora tienes tiempo?', followUps: ['¿Tienes tiempo el miércoles?', '¿Dónde estudiamos?', '¿Cuánto tiempo estudiamos?'], phrases: ['El martes [[no|orange]] tengo tiempo.', '[[¿Tienes tiempo el jueves?|violet]]', '[[Nosotros|blue]] [[estudiamos|teal]] a las…'], hint: 'Afirma tu disponibilidad, niega un horario imposible y pregunta por el horario de la otra persona.', example: 'El martes no tengo tiempo. El jueves sí: a las cinco. ¿Tienes tiempo el jueves? Estudiamos en la biblioteca.', next: 'Para terminar, repite el acuerdo.' },
            { q: 'Repite el acuerdo final: ¿quién, qué, dónde y cuándo?', followUps: ['¿Quién lleva los libros?', '¿Qué estudian?', '¿Algo cambia?'], phrases: ['[[Tú y yo|blue]] [[estudiamos|teal]]…', 'La clase [[empieza|teal]] a las…', '[[No|orange]] estudiamos el…'], hint: 'Una sola oración completa con sujeto, verbo y la información.', example: 'Tú y yo estudiamos español el jueves a las cinco en la biblioteca. No estudiamos el martes.', teacher: 'Comprueba la concordancia del acuerdo final: «Tú y yo» = nosotros.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno organiza el plan y te hace las preguntas.', self: 'Escribe tres preguntas para organizar un plan con alguien («¿Tienes tiempo…?», «¿Dónde…?», «¿Cuándo…?») y úsalas esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Organiza una clase', coach: 'Afirma, niega y pregunta.',
      steps: [
        { title: 'Organiza una clase', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos la concordancia y los signos de pregunta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Comprueba los signos ¿…? y que cada verbo concuerda con su sujeto.' } },
          { kind: 'write', title: 'Un mensaje para estudiar juntos', situation: 'Quieres organizar una clase de español con un amigo. Escríbele un mensaje.', task: [
            'Di cuándo **tienes** tiempo (afirmar).',
            'Di cuándo **no** tienes tiempo (negar).',
            'Habla de otra persona: «Mi hermana y yo…» (concordancia).',
            'Haz **una pregunta** a tu amigo.',
          ], starters: ['Hola, …', 'Trabajo por la mañana, pero…', 'No tengo tiempo el…', 'Mi hermana y yo…', '¿Tienes tiempo…?', '¿Dónde…?'],
            words: ['trabajo', 'estudiamos', 'no tengo', 'empieza', 'a las cuatro', 'esta tarde', 'el jueves', 'en mi casa', '¿Cuándo…?'],
            model: '[[Trabajo|teal]] por la mañana, pero [[no|orange]] trabajo esta tarde. [[Mi hermana y yo|blue]] [[estudiamos|teal]] español a las cuatro. [[¿Tienes tiempo para una clase a esa hora?|violet]] La clase [[empieza|teal]] en mi casa. ¿[[Dónde|violet]] vives tú?',
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
            { tone: 'blue', label: 'ORACIÓN', formula: 'sujeto + verbo + información', example: 'Ana y Leo trabajan en una oficina.', caption: 'El verbo concuerda con el sujeto.', en: 'subject + verb' },
            { tone: 'orange', label: 'NEGAR', formula: 'no + verbo', example: 'Ana no trabaja hoy.', caption: '«No» justo delante del verbo.', en: 'not' },
            { tone: 'violet', label: 'PREGUNTAR', formula: '¿oración? · ¿qué / dónde / cuándo + verbo + sujeto?', example: '¿Ana trabaja hoy? ¿Dónde trabaja Ana?', caption: 'Sí o no, o una información.', en: 'questions' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres pasos', text: 'Busca el **sujeto**, pon el **verbo** que concuerda y decide: ¿afirmas, niegas con **no** o preguntas con **¿…?**?' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Mis compañeros ___ en el centro.', options: ['vive', 'viven', 'vivimos'], answer: 1, why: 'Sujeto plural: viven.' },
            { prompt: '¿Qué oración es correcta?', options: ['Leo no come carne.', 'Leo come no carne.', 'No Leo come carne.'], answer: 0, why: '«No» delante del verbo.' },
            { prompt: '¿___ vive tu familia? —En Cali.', options: ['Cuándo', 'Dónde', 'Quién'], answer: 1, why: '«En Cali» es un lugar.' },
            { prompt: 'Tú y yo ___ amigos.', options: ['son', 'somos', 'es'], answer: 1, why: '«Tú y yo» = nosotros: somos.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: convierte «Leo trabaja hoy» en negación y en pregunta. Respuesta: «Leo no trabaja hoy». «¿Leo trabaja hoy?». Pide una pregunta más con dónde o cuándo.' },
        ] },
      ],
    },
  ],
};
