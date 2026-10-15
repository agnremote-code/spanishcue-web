import type { LiveLesson } from '../types';

/**
 * Lesson 3 · A1 · Presente con vos (Argentina).
 * Regional pedagogy: the vos forms are the content of the class and appear in
 * examples, tables and marks. Every instruction addresses the learner with tú.
 * Lucía (Córdoba) and her classmates run through every section.
 */
export const lesson: LiveLesson = {
  id: 3,
  level: 'A1',
  title: 'Presente con vos',
  subtitle: 'Entender y usar «vos» en presente para hablar de la rutina con personas de Argentina.',
  legend: [
    { tone: 'blue', label: 'Vos + verbo en -ar · -ás' },
    { tone: 'teal', label: 'Vos + verbo en -er · -és' },
    { tone: 'violet', label: 'Vos + verbo en -ir · -ís' },
    { tone: 'orange', label: 'Tú · la forma general' },
  ],
  optionNotes: {
    estudias: '«Estudias» es la forma de **tú**. Con vos, el acento va al final: estudiás.',
    trabajas: '«Trabajas» es la forma de **tú**. Con vos: trabajás.',
    hablas: '«Hablas» es la forma de **tú**. Con vos: hablás.',
    comes: '«Comes» es la forma de **tú**. Con vos: comés.',
    vives: '«Vives» es la forma de **tú**. Con vos: vivís.',
    lees: '«Lees» es la forma de **tú**. Con vos: leés.',
    'estudiáis': '«Estudiáis» es la forma de **vosotros** (España, plural). No es vos.',
    'coméis': '«Coméis» es la forma de **vosotros** (España, plural). Con vos: comés.',
    'habláis': '«Habláis» es la forma de **vosotros** (España, plural). Con vos: hablás.',
    viven: '«Viven» es plural: ellos, ellas o ustedes.',
    comen: '«Comen» es plural: ellos, ellas o ustedes.',
    trabaja: '«Trabaja» es para él, ella o usted, no para vos.',
    'estudia': '«Estudia» es para él, ella o usted, no para vos.',
    'comís': 'Comer termina en -er: con vos es **comés**, no «comís».',
    'vivés': 'Vivir termina en -ir: con vos es **vivís**, no «vivés».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El presente con vos', coach: 'Misma acción, otra forma de decir «tú».',
      steps: [
        { title: '¿Tú o vos?', blocks: [
          { kind: 'lead', text: 'En Argentina y en Uruguay, para hablar con un amigo o un compañero, se usa **vos** en lugar de **tú**. El significado es el mismo: la persona con quien hablas. Cambia la forma del verbo.', en: 'In Argentina and Uruguay, people say “vos” instead of “tú”. Same meaning, different verb form.' },
          { kind: 'guide', text: { teacher: 'Lean las dos frases en voz alta. Pregunta: «¿Qué cambia? ¿Cambia la acción?». Exagera un poco el acento final de «hablás».', self: 'Lee las dos frases en voz alta. Fíjate en la última sílaba del verbo.' } },
          { kind: 'compare', title: 'La misma pregunta, dos formas', columns: [
            { tone: 'orange', label: 'TÚ · forma general', sentence: '¿[[Tú hablas|orange]] español?', idea: 'Se usa en México, España, Colombia, Perú y muchos otros países.', en: 'Do you speak Spanish?' },
            { tone: 'blue', label: 'VOS · Argentina', sentence: '¿[[Vos hablás|blue]] español?', idea: 'Se usa en Argentina y Uruguay. El acento va al final: habl**ÁS**.', en: 'Do you speak Spanish?' },
          ] },
          { kind: 'tip', icon: '👂', title: 'Escucha la diferencia', text: '«Tú **ha**blas»: la fuerza está en la primera sílaba. «Vos habl**ás**»: la fuerza está al final, y por eso lleva tilde.', en: 'With vos, the stress moves to the end of the verb.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Vos hablás» y «tú hablas»: ¿significan lo mismo?', options: ['Sí, las dos hablan de la persona con quien hablas.', 'No, «vos» es plural.', 'No, «vos hablás» es pasado.'], answer: 0, why: 'Vos y tú son la misma persona: «you» singular. Solo cambia la forma del verbo.' },
            { prompt: '¿Dónde está la fuerza en «vos hablás»?', options: ['En la primera sílaba: HA-blas.', 'En la última sílaba: ha-BLÁS.'], answer: 1, why: 'Con vos, el acento va al final y se escribe con tilde: hablás.' },
          ] },
        ] },
        { title: 'Verbos en -ar: -ás', mascot: '/brand/mascot/studying.webp', coach: 'Hablar, trabajar, estudiar: todos igual.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'VOS + -ÁS', question: '¿Cómo se forma?', en: 'vos + -ar verbs', formula: ['vos + raíz + -ás', 'hablar → vos hablás'],
            meaning: 'Con los verbos en **-ar**, la forma de vos termina en **-ás**, con tilde. Es el **presente**: habla de la rutina y de lo que pasa en general.',
            examples: [
              { es: 'Vos [[trabajás|blue]] en casa.', en: 'You work at home.' },
              { es: '¿Vos [[estudiás|blue]] español los martes?', en: 'Do you study Spanish on Tuesdays?' },
              { es: 'Vos [[desayunás|blue]] muy temprano.', en: 'You have breakfast very early.' },
              { es: '¿[[Viajás|blue]] en autobús?', en: 'Do you travel by bus?' },
            ],
            note: 'Como con tú, el pronombre no es obligatorio: «¿[[Viajás|blue]] en autobús?» ya dice que hablas con vos.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Vos ___ en una oficina.', options: ['trabajas', 'trabajás', 'trabaja'], answer: 1, why: 'Trabajar termina en -ar: con vos, trabajás.' },
            { prompt: '¿Vos ___ con tu hermana?', options: ['hablás', 'habláis', 'hablas'], answer: 0, why: 'Hablar → vos hablás, con tilde al final.' },
          ] },
        ] },
        { title: 'Verbos en -er y en -ir: -és, -ís', mascot: '/brand/mascot/speaking.webp', coach: 'La vocal del infinitivo se queda.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VOS + -ÉS', question: '¿Y con -er?', en: 'vos + -er verbs', formula: ['vos + raíz + -és', 'comer → vos comés'],
            meaning: 'Con los verbos en **-er**, la forma de vos termina en **-és**, con tilde.',
            examples: [
              { es: 'Vos [[comés|teal]] en la oficina.', en: 'You eat at the office.' },
              { es: '¿[[Leés|teal]] el diario por la mañana?', en: 'Do you read the newspaper in the morning?' },
              { es: 'Vos [[aprendés|teal]] muy rápido.', en: 'You learn very fast.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'VOS + -ÍS', question: '¿Y con -ir?', en: 'vos + -ir verbs', formula: ['vos + raíz + -ís', 'vivir → vos vivís'],
            meaning: 'Con los verbos en **-ir**, la forma de vos termina en **-ís**, con tilde.',
            examples: [
              { es: '¿Vos [[vivís|violet]] cerca del centro?', en: 'Do you live near the centre?' },
              { es: 'Vos [[escribís|violet]] muchos mensajes.', en: 'You write a lot of messages.' },
              { es: '¿[[Abrís|violet]] la tienda a las nueve?', en: 'Do you open the shop at nine?' },
            ] },
          { kind: 'tip', icon: '🔑', title: 'El truco', text: 'Toma el infinitivo, quita la **-r**, pon una **-s** y una tilde: habla**r** → habl**ás** · come**r** → com**és** · vivi**r** → viv**ís**.', en: 'Infinitive minus -r, plus -s, with an accent.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Vos ___ en un departamento pequeño.', options: ['vivís', 'vivés', 'vives'], answer: 0, why: 'Vivir termina en -ir: vivi(r) → vivís.' },
            { prompt: '¿Vos ___ carne?', options: ['comís', 'comés', 'comes'], answer: 1, why: 'Comer termina en -er: come(r) → comés.' },
            { prompt: '¿Vos ___ libros en español?', options: ['leés', 'lees', 'leen'], answer: 0, why: 'Leer termina en -er: lee(r) → leés.' },
          ] },
        ] },
        { title: 'La tabla del presente', mascot: '/autoestudio/mascot/noting.webp', coach: 'Solo cambia una fila.', blocks: [
          { kind: 'table', title: 'Presente regular: hablar, comer, vivir', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'hablo', 'como', 'vivo'],
            ['tú', '[[hablas|orange]]', '[[comes|orange]]', '[[vives|orange]]'],
            ['**vos**', '[[hablás|blue]]', '[[comés|teal]]', '[[vivís|violet]]'],
            ['él / ella / usted', 'habla', 'come', 'vive'],
            ['nosotros / nosotras', 'hablamos', 'comemos', 'vivimos'],
            ['ellos / ellas / ustedes', 'hablan', 'comen', 'viven'],
          ], note: 'Las otras personas son iguales en todos los países. En Argentina, para hablar con varias personas, se usa **ustedes**: «¿Ustedes viven cerca?».' },
          { kind: 'tip', icon: '🧩', title: 'Vos usa «te» y «tu»', text: 'Con vos, los pronombres y los posesivos son los mismos que con tú: «¿Vos vivís con **tu** familia?» · «¿Vos **te** levantás temprano?».', en: 'Vos uses te and tu, like tú.' },
          { kind: 'tip', icon: '👀', title: 'Para reconocer', text: 'Vas a escuchar también estas formas: «vos **sos**» (ser), «vos **tenés**» (tener), «vos **querés**» (querer), «vos **podés**» (poder). Con vos, el verbo no cambia la vocal de la raíz: tú qu**ie**res → vos qu**e**rés. Hoy solo las reconocemos.', en: 'Common forms to recognise: sos, tenés, querés, podés.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué forma es de **vos**?', options: ['vivís', 'vives', 'viven'], answer: 0, why: 'Vivís termina en -ís: es la forma de vos.' },
            { prompt: 'Yo como en casa. ¿Y vos? ¿Dónde ___?', options: ['comés', 'comes', 'come'], answer: 0, why: 'La pregunta usa vos: comés.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Elige una forma y no la cambies.', blocks: [
          { kind: 'decide', title: 'Vas a hablar con una persona. Responde', steps: [
            { q: '¿Es una persona con confianza: un amigo, un compañero, alguien de tu edad?', yes: 'next', no: 'Usa **usted**: «¿Usted trabaja cerca?». Es igual en todos los países.' },
            { q: '¿La persona es de Argentina o de Uruguay, o estás allí?', yes: 'Puedes usar **vos**: «¿Vos [[trabajás|blue]] cerca?». Si prefieres tú, también te entienden.', no: 'Usa **tú**: «¿[[Tú trabajas|orange]] cerca?».' },
          ] },
          { kind: 'tip', icon: '⚠', title: 'No mezcles', text: '«Vos» va con la forma de vos y «tú» con la forma de tú. «Tú hablás» o «vos hablas» suenan mal. Elige una forma y úsala en toda la conversación.', en: 'Don’t mix tú with vos verb forms.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Mira bien el final del verbo.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno encuentra el error antes de que muestres la corrección. Lee la frase correcta en voz alta con el acento final.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Vos estudias español.', right: 'Vos estudiás español.', why: 'Con vos, la forma termina en -ás y lleva tilde.' },
            { wrong: 'Vos coméis en casa.', right: 'Vos comés en casa.', why: '«Coméis» es de vosotros, en España. Con vos: comés.' },
            { wrong: '¿Vos vivés lejos?', right: '¿Vos vivís lejos?', why: 'Vivir es un verbo en -ir: la forma de vos termina en -ís.' },
            { wrong: 'Tú trabajás mucho.', right: 'Vos trabajás mucho. / Tú trabajas mucho.', why: 'No mezcles: vos con trabajás, tú con trabajas.' },
            { wrong: '¿Vos vivís con vuestra familia?', right: '¿Vos vivís con tu familia?', why: 'Vos usa los mismos posesivos que tú: tu familia.' },
            { wrong: 'Vos viven cerca.', right: 'Vos vivís cerca.', why: '«Viven» es plural. Vos es una sola persona.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres frases sobre su rutina con «yo» y después pídele que te pregunte lo mismo con «vos»: «Yo trabajo en casa. ¿Y vos? ¿Vos trabajás en casa?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Vos en conversaciones reales', coach: 'Toca las formas marcadas.',
      steps: [
        { title: 'En la universidad', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada forma marcada y explica quién habla y por qué usa esa forma.', self: 'Lee el diálogo. Después toca cada forma marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Un compañero nuevo', setting: 'Córdoba, Argentina. Lucía conoce a Diego, un estudiante de México, en la cafetería de la universidad.', lines: [
            { who: 'Lucía', text: '¡Hola! [[Vos sos|blue]] el estudiante nuevo, ¿no?', en: 'Hi! You’re the new student, right?' },
            { who: 'Diego', text: 'Sí, soy Diego. Soy de México.' },
            { who: 'Lucía', text: 'Yo soy Lucía. ¿Y dónde [[vivís|violet]]?', en: 'And where do you live?' },
            { who: 'Diego', text: 'Vivo en el centro, cerca de la plaza. ¿[[Tú vives|orange]] lejos?' },
            { who: 'Lucía', text: 'Sí, vivo lejos. Viajo una hora en autobús. ¿Vos [[trabajás|blue]]?' },
            { who: 'Diego', text: 'Sí, trabajo en un café por la tarde.' },
            { who: 'Lucía', text: '¡Qué bien! ¿Y [[comés|teal]] ahí?' },
            { who: 'Diego', text: 'Sí, como en el café. ¿Tú también [[trabajas|orange]]?' },
            { who: 'Lucía', text: 'No, yo estudio todo el día. Y los sábados doy clases de español.' },
            { who: 'Diego', text: '¡Qué interesante! ¿Y vos [[enseñás|blue]] aquí, en la universidad?', en: 'And do you teach here, at the university?' },
            { who: 'Lucía', text: '¡Sí! ¡Ya [[hablás|blue]] como un cordobés!' },
          ], notes: {
            'Vos sos': '«Sos» es la forma de **ser** con vos. Es irregular: hoy solo la reconocemos. Con tú sería «tú eres».',
            'vivís': 'Lucía es argentina y usa vos. Vivir es un verbo en -ir: **vivís**, con tilde al final.',
            'Tú vives': 'Diego es de México y usa **tú**. Dice lo mismo que «vos vivís» con la forma general.',
            'trabajás': 'Trabajar, en -ar: con vos, **trabajás**. Lucía no repite «vos» en todas las frases, pero aquí lo usa para cambiar de tema.',
            'comés': 'Comer, en -er: con vos, **comés**. No hace falta el pronombre: la forma ya dice quién.',
            'trabajas': 'Diego sigue con **tú**: trabajas, con la fuerza en la sílaba «ba».',
            'enseñás': '¡Diego cambia a **vos**! Enseñar, en -ar: enseñás. Habla como Lucía para acercarse a ella.',
            'hablás': 'Hablar, en -ar: **hablás**. Lucía nota que Diego ya usa vos.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Quién vive lejos de la universidad?', options: ['Lucía.', 'Diego.', 'Los dos.'], answer: 0, why: 'Lucía dice: «Sí, vivo lejos. Viajo una hora en autobús».' },
            { prompt: '¿Por qué Diego usa «tú» al principio?', options: ['Porque es de México.', 'Porque Lucía es mayor.', 'Porque habla con varias personas.'], answer: 0, why: 'En México se usa tú. Al final, Diego prueba con vos: «¿Y vos enseñás…?».' },
            { prompt: '¿Dónde come Diego por la tarde?', options: ['En el café donde trabaja.', 'En la universidad.', 'En casa.'], answer: 0, why: '«Sí, como en el café».' },
          ] },
        ] },
        { title: 'Un mensaje desde Córdoba', blocks: [
          { kind: 'explore', title: 'El horario nuevo', setting: 'Viernes por la noche. Lucía escribe a Martín, su compañero de la clase de los sábados.', lines: [
            { who: 'Lucía', text: 'Hola, Martín. Te escribo por la clase de mañana.' },
            { who: 'Martín', text: '¡Hola! ¿Qué pasa?' },
            { who: 'Lucía', text: 'Tenemos un horario nuevo: la clase empieza a las diez. Vos [[trabajás|blue]] cerca de casa, ¿no?' },
            { who: 'Martín', text: 'Sí, trabajo a diez minutos. Llego bien.' },
            { who: 'Lucía', text: 'Yo vivo lejos y viajo en autobús. ¿Vos [[vivís|violet]] con tu familia?' },
            { who: 'Martín', text: 'Sí, con mis padres. ¿Por qué?' },
            { who: 'Lucía', text: 'Porque los sábados [[comés|teal]] con ellos, ¿no? La clase termina a las doce.' },
            { who: 'Martín', text: 'Sí, como con ellos a la una. No hay problema.' },
            { who: 'Lucía', text: 'Perfecto. ¿Y [[leés|teal]] el texto antes de la clase?' },
            { who: 'Martín', text: 'Sí, siempre leo los textos el viernes. ¡Hasta mañana!' },
          ], notes: {
            'trabajás': 'Lucía habla de la rutina de Martín: **trabajás**, presente de vos con un verbo en -ar.',
            'vivís': 'Una pregunta con vos y un verbo en -ir: **vivís**. Fíjate: «con **tu** familia», como con tú.',
            'comés': 'Comer, en -er: **comés**. Es un hábito de todos los sábados.',
            'leés': 'Leer, en -er: lee(r) → **leés**. Martín responde con yo: «leo».',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué responde Martín cada vez?». El alumno ve que a una pregunta con vos (vivís) se responde con yo (vivo).' },
        ] },
        { title: '¿Vos, tú o yo?', blocks: [
          { kind: 'classify', title: 'Clasifica las formas de las dos conversaciones', categories: [
            { id: 'vos', label: 'Vos', tone: 'blue' },
            { id: 'tu', label: 'Tú', tone: 'orange' },
            { id: 'yo', label: 'Yo', tone: 'teal' },
          ], items: [
            { text: 'trabajás', answer: 'vos', why: 'Termina en -ás con tilde: vos trabajás.' },
            { text: 'vives', answer: 'tu', why: 'Termina en -es sin tilde: tú vives.' },
            { text: 'como', answer: 'yo', why: 'Termina en -o: yo como.' },
            { text: 'leés', answer: 'vos', why: 'Termina en -és con tilde: vos leés.' },
            { text: 'trabajas', answer: 'tu', why: 'Termina en -as sin tilde: tú trabajas.' },
            { text: 'vivís', answer: 'vos', why: 'Termina en -ís con tilde: vos vivís.' },
            { text: 'viajo', answer: 'yo', why: 'Termina en -o: yo viajo.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Mira el final del verbo y la tilde.',
      steps: [
        { title: 'Elige la forma de vos', blocks: [
          { kind: 'choice', items: [
            { context: 'Hablas con una amiga de Buenos Aires.', prompt: 'Vos ___ español los lunes.', options: ['estudias', 'estudiás', 'estudiáis'], answer: 1, why: 'Estudiar, en -ar: vos estudiás, con tilde.' },
            { context: 'Preguntas a un compañero de Córdoba.', prompt: '¿Vos ___ cerca de la oficina?', options: ['vivís', 'vives', 'viven'], answer: 0, why: 'Vivir, en -ir: vos vivís.' },
            { context: 'Hablas de la rutina de tu amigo argentino.', prompt: 'Vos ___ en casa al mediodía.', options: ['coméis', 'comes', 'comés'], answer: 2, why: 'Comer, en -er: vos comés. «Coméis» es de vosotros.' },
            { context: 'Tu compañera siempre tiene un libro.', prompt: 'Vos ___ mucho, ¿no?', options: ['lees', 'leés', 'leen'], answer: 1, why: 'Leer, en -er: vos leés.' },
            { context: 'Un amigo de Montevideo trabaja de noche.', prompt: '¿Vos ___ los fines de semana?', options: ['trabaja', 'trabajas', 'trabajás'], answer: 2, why: 'Trabajar, en -ar: vos trabajás.' },
            { context: 'Tu compañero escribe mensajes todo el día.', prompt: 'Vos ___ muy rápido.', options: ['escribís', 'escribes', 'escriben'], answer: 0, why: 'Escribir, en -ir: vos escribís.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué describe «vos trabajás»?', options: ['El pasado de tú.', 'El presente de vos.', 'El futuro de ustedes.'], answer: 1, why: 'Trabajás es presente; la persona es vos (una persona).' },
            { prompt: '«Tú comes aquí» y «Vos comés aquí». ¿Qué cambia?', options: ['La acción.', 'El tiempo verbal.', 'Solo la forma de la persona.'], answer: 2, why: 'Las dos son presente y hablan de la misma acción; cambia solo tú / vos.' },
            { prompt: '¿Qué mensaje es para un amigo de Córdoba, con vos?', options: ['¿Vienes a la clase? ¿Estudias conmigo?', '¿Venís a la clase? ¿Estudiás conmigo?', '¿Vienen a la clase? ¿Estudian conmigo?'], answer: 1, why: 'Venís y estudiás son formas de vos. La primera es con tú; la tercera es plural.' },
            { prompt: '«Yo vivo lejos y vos vivís cerca.» ¿Quién vive cerca?', options: ['La persona que habla.', 'La persona que escucha.', 'Otra persona.'], answer: 1, why: 'Vos = la persona con quien hablas. Yo = la persona que habla.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Vos estudias en la biblioteca.', ok: false, options: ['Vos estudiás en la biblioteca.', 'Vos estudiáis en la biblioteca.', 'Vos estudia en la biblioteca.'], answer: 0, why: 'Con vos: estudiás, con tilde al final.' },
            { sentence: '¿Vos comés carne?', ok: true, why: 'Correcta: comer → vos comés.' },
            { sentence: 'Vos vivés con tu hermano.', ok: false, options: ['Vos vives con tu hermano.', 'Vos vivís con tu hermano.', 'Vos viven con tu hermano.'], answer: 1, why: 'Vivir es -ir: vos vivís.' },
            { sentence: 'Tú trabajás en un hotel.', ok: false, options: ['Tú trabajas en un hotel.', 'Tú trabajáis en un hotel.', 'Tú trabaja en un hotel.'], answer: 0, why: 'Con tú, la forma es trabajas. No mezcles tú con la forma de vos.' },
            { sentence: '¿Vos leés con tus hijos por la noche?', ok: true, why: 'Correcta: leer → vos leés, y «tus hijos», como con tú.' },
            { sentence: 'Vos habláis muy bien.', ok: false, options: ['Vos hablás muy bien.', 'Vos hablan muy bien.', 'Vos habla muy bien.'], answer: 0, why: '«Habláis» es de vosotros. Con vos: hablás.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Organizar una clase', lines: [
            { who: 'Martín', text: 'Hola, Lucía. ¿Vos ___ por la mañana?', options: ['estudiás', 'estudias', 'estudio'], answer: 0, why: 'Martín usa vos: estudiás.' },
            { who: 'Lucía', text: 'Sí, ___ de nueve a doce.', options: ['estudiás', 'estudio', 'estudia'], answer: 1, why: 'Lucía habla de ella misma: yo estudio.' },
            { who: 'Martín', text: 'Yo trabajo hasta las seis. ¿Y vos? ¿Dónde ___ al mediodía?', options: ['comes', 'comés', 'comen'], answer: 1, why: 'Vos + comer: comés.' },
            { who: 'Lucía', text: 'Como en la universidad.' },
            { who: 'Martín', text: '¿Y ___ lejos de la universidad?', options: ['vivís', 'vivo', 'vivés'], answer: 0, why: 'Pregunta a Lucía con vos: vivís.' },
            { who: 'Lucía', text: 'Sí, un poco. Prefiero una videollamada.' },
            { who: 'Martín', text: 'Perfecto. Vos ___ el enlace y yo preparo los ejercicios.', options: ['mandás', 'mandas', 'mando'], answer: 0, why: 'Mandar, en -ar, con vos: mandás.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['vivís', 'Vos', 'centro', 'en el'], accept: ['Vos vivís en el centro'], en: 'You live in the centre.' },
            { tiles: ['comés', 'en casa', 'Vos', 'los domingos'], accept: ['Vos comés en casa los domingos', 'Los domingos vos comés en casa'], en: 'You eat at home on Sundays.' },
            { tiles: ['trabajás', 'Vos', 'mucho', 'y', 'estudiás'], accept: ['Vos trabajás mucho y estudiás', 'Vos estudiás y trabajás mucho'], en: 'You work a lot and study.' },
          ] },
          { kind: 'rewrite', title: 'Pásalo a vos', items: [
            { prompt: 'Tú hablas español y comes aquí.', instruction: 'Escribe la frase con vos.', accept: ['Vos hablás español y comés aquí', 'Hablás español y comés aquí'] },
            { prompt: 'Yo vivo cerca de la oficina.', instruction: 'Pregunta a tu compañero argentino si él también vive cerca. Usa vos.', accept: ['¿Vos vivís cerca de la oficina?', 'Vos vivís cerca de la oficina', '¿Vos también vivís cerca de la oficina?', 'Vos también vivís cerca de la oficina', '¿Vivís cerca de la oficina?', '¿También vivís cerca de la oficina?'] },
            { prompt: 'Tú lees y escribes en español.', instruction: 'Escribe la frase con vos.', accept: ['Vos leés y escribís en español', 'Leés y escribís en español'] },
            { prompt: '¿Tú trabajas los sábados?', instruction: 'Escribe la pregunta con vos.', accept: ['¿Vos trabajás los sábados?', '¿Trabajás los sábados?'] },
          ] },
        ] },
        { title: 'Clasifica por terminación', blocks: [
          { kind: 'classify', title: '¿-ás, -és o -ís?', categories: [
            { id: 'ar', label: '-ás (verbos en -ar)', tone: 'blue' },
            { id: 'er', label: '-és (verbos en -er)', tone: 'teal' },
            { id: 'ir', label: '-ís (verbos en -ir)', tone: 'violet' },
          ], items: [
            { text: 'vos (cocinar)', answer: 'ar', why: 'Cocinar → vos cocinás.' },
            { text: 'vos (beber)', answer: 'er', why: 'Beber → vos bebés.' },
            { text: 'vos (abrir)', answer: 'ir', why: 'Abrir → vos abrís.' },
            { text: 'vos (correr)', answer: 'er', why: 'Correr → vos corrés.' },
            { text: 'vos (escuchar)', answer: 'ar', why: 'Escuchar → vos escuchás.' },
            { text: 'vos (subir)', answer: 'ir', why: 'Subir → vos subís.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje para Lucía', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La rutina de un compañero argentino', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota las horas y levanta la mano cada vez que oye una forma de vos.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas formas de vos escuchas.' } },
          { kind: 'listen', title: 'La rutina de un compañero argentino', channel: 'MENSAJE DE VOZ · PARA LUCÍA', src: '/audio/grammar-classroom/3.mp3',
            before: 'Un compañero le deja un mensaje de voz a Lucía para organizar una clase juntos. ¿Qué crees que le pregunta?',
            gist: { prompt: '¿Para qué es el mensaje?', options: ['Para organizar una clase con Lucía.', 'Para invitar a Lucía a comer.', 'Para cancelar la clase del sábado.'], answer: 0, why: 'Habla de horarios y dice: «podemos estudiar por videollamada… confirmamos el horario».' },
            details: [
              { prompt: '¿Hasta qué hora trabaja el compañero?', options: ['Hasta las seis.', 'Hasta las ocho.', 'Hasta las diez.'], answer: 0, why: '«Yo trabajo hasta las seis».' },
              { prompt: '¿Qué hace él después del trabajo?', options: ['Come en casa y prepara la clase.', 'Va a la universidad.', 'Estudia con Lucía.'], answer: 0, why: '«Después como en casa y preparo la clase».' },
              { prompt: '¿Por qué propone una videollamada?', options: ['Porque Lucía vive lejos.', 'Porque él trabaja en casa.', 'Porque está enfermo.'], answer: 0, why: '«Si vos vivís lejos, podemos estudiar por videollamada».' },
              { prompt: '¿A qué hora tiene tiempo él?', options: ['A las seis.', 'A las ocho.', 'A las diez.'], answer: 1, why: '«Yo tengo tiempo a las ocho».' },
              { prompt: '¿Qué forma de vos escuchas en la pregunta sobre la comida?', options: ['¿Comes…?', '¿Comés…?', '¿Coméis…?'], answer: 1, why: '«¿Comés antes de la clase?»: comer → vos comés.' },
            ],
            transcript: 'Hola, Lucía. Vos [[estudiás|blue]] por la mañana, ¿verdad? Yo trabajo hasta las seis. Después como en casa y preparo la clase. Si vos [[vivís|violet]] lejos, podemos estudiar por videollamada. ¿[[Comés|teal]] antes de la clase? Yo tengo tiempo a las ocho. El sábado hablamos otra vez y confirmamos el horario.',
            reply: { teacher: 'El profesor es el compañero argentino. El alumno responde como Lucía: dice a qué hora estudia, dónde vive y si come antes de la clase. Después le hace una pregunta con vos.', self: 'Responde como Lucía, en voz alta: ¿a qué hora estudias?, ¿vives lejos?, ¿comes antes de la clase? Termina con una pregunta con vos: «¿Y vos…?».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu rutina y la de tu compañero', coach: 'Responde con yo y pregunta con vos.',
      steps: [
        { title: 'Tu rutina y la de tu compañero', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de compañero argentino y preguntas con vos. El alumno responde con yo y después te pregunta lo mismo con vos. Sigue lo que el alumno quiere contar.', self: 'Imagina que tu compañero es de Córdoba. Lee su pregunta, responde en voz alta con yo y después hazle la misma pregunta con vos.' } },
          { kind: 'talk', cards: [
            { q: 'Tu compañero de Córdoba te pregunta: «¿Vos trabajás o estudiás?»', followUps: ['¿Dónde trabajás o estudiás?', '¿Te gusta?', '¿Trabajás en casa o en una oficina?'], phrases: ['Yo trabajo en…', 'Yo estudio…', '¿Y vos? ¿Vos [[trabajás|blue]]…?'], hint: 'Responde con yo (trabajo, estudio) y pregunta con vos (trabajás, estudiás).', example: 'Yo trabajo en un hospital y estudio español por la noche. ¿Y vos? ¿Vos trabajás?', next: 'Ahora hablemos de la mañana.', teacher: 'Responde a su pregunta con información real y simple. Así el alumno escucha también la forma de yo.' },
            { q: 'Tu compañero pregunta: «¿A qué hora desayunás?»', followUps: ['¿Qué desayunás?', '¿Desayunás en casa?', '¿Tomás café o té?'], phrases: ['Yo desayuno a las…', 'Tomo café con leche.', '¿Y vos? ¿A qué hora [[desayunás|blue]]?'], hint: 'Desayunar y tomar son verbos en -ar: vos desayunás, vos tomás.', example: 'Desayuno a las siete. Tomo café y como pan con queso. ¿Y vos? ¿A qué hora desayunás?', next: 'Ahora hablemos de tu casa y tu trabajo.' },
            { q: 'Tu compañero pregunta: «¿Vivís cerca o lejos de tu trabajo?»', followUps: ['¿Cómo viajás?', '¿Vivís solo o con tu familia?', '¿Te gusta tu barrio?'], phrases: ['Vivo cerca / lejos.', 'Viajo en autobús / en metro.', '¿Vos [[vivís|violet]] con tu familia?'], hint: 'Vivir es -ir: yo vivo, vos vivís.', example: 'Vivo lejos. Viajo cuarenta minutos en metro. Vivo con mi pareja. ¿Y vos? ¿Vivís cerca?', next: 'Hablemos de la comida.' },
            { q: 'Tu compañero pregunta: «¿Comés en casa o en el trabajo?»', followUps: ['¿A qué hora comés?', '¿Cocinás vos?', '¿Qué comés los domingos?'], phrases: ['Como en…', 'Cocino los fines de semana.', '¿Y vos? ¿Dónde [[comés|teal]]?'], hint: 'Comer es -er: yo como, vos comés.', example: 'Durante la semana como en la oficina. Los domingos cocino en casa con mi familia. ¿Y vos? ¿Dónde comés?', next: 'Ahora, el fin de semana.' },
            { q: 'Tu compañero pregunta: «¿Qué hacés los sábados?»', followUps: ['¿Leés o mirás series?', '¿Escribís a tu familia?', '¿Salís con amigos?'], phrases: ['Los sábados yo…', 'Leo / Miro series / Camino.', '¿Y vos? ¿Qué [[hacés|teal]] los sábados?'], hint: '«Hacés» es la forma de vos de hacer. Responde con yo: «Los sábados limpio la casa».', example: 'Los sábados limpio la casa y por la tarde camino en el parque. A veces leo. ¿Y vos? ¿Qué hacés los sábados?', next: 'Para terminar, organicen una clase juntos.' },
            { q: 'Ahora organizan una clase juntos. ¿Qué día y a qué hora estudian?', followUps: ['¿Qué hacen los dos igual?', '¿Qué hacen diferente?', '¿Prefieren una videollamada?'], phrases: ['Yo tengo tiempo a las…', '¿Vos [[estudiás|blue]] por la mañana?', 'Podemos estudiar el…'], hint: 'Pregunta con vos por el horario del compañero y propón un día con «podemos».', example: 'Yo tengo tiempo el martes a las ocho. ¿Vos estudiás por la noche? Podemos hacer una videollamada.', teacher: 'Tu alumno compara: «Yo trabajo hasta las cinco y vos trabajás hasta las seis».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno es el compañero argentino y te hace tres preguntas con vos.', self: 'Escribe tres preguntas con vos (-ás, -és, -ís) para un compañero argentino y léelas en voz alta.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje a un compañero argentino', coach: 'Habla de ti con yo y pregunta con vos.',
      steps: [
        { title: 'Un mensaje a un compañero argentino', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos las tildes de -ás, -és, -ís.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien las tildes de las formas de vos.' } },
          { kind: 'write', title: 'Organiza una clase', situation: 'Quieres estudiar español con un compañero de Córdoba. Escríbele un mensaje para organizar una clase.', task: [
            'Saluda y cuenta tu rutina con **yo**: trabajo, comida, horarios.',
            'Haz **dos preguntas con vos** sobre su rutina.',
            'Propón un día y una hora para la clase.',
          ], starters: ['Hola, …', 'Yo trabajo hasta…', '¿Vos estudiás…?', '¿Comés…?', '¿Vivís…?', 'Podemos hablar el…'],
            words: ['trabajo', 'estudio', 'como', 'vivo', 'trabajás', 'estudiás', 'comés', 'vivís', 'videollamada', 'horario'],
            model: 'Hola, Lucía. Yo trabajo hasta las seis. ¿Vos [[estudiás|blue]] por la tarde? ¿[[Comés|teal]] antes de la clase? Podemos hablar a las ocho. Vos [[vivís|violet]] lejos y yo prefiero una videollamada. El sábado confirmamos el horario.',
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
            { tone: 'blue', label: '-AR → -ÁS', formula: 'vos + raíz + -ás', example: 'Vos hablás español.', caption: 'hablar → hablás', en: 'you speak' },
            { tone: 'teal', label: '-ER → -ÉS', formula: 'vos + raíz + -és', example: 'Vos comés en casa.', caption: 'comer → comés', en: 'you eat' },
            { tone: 'violet', label: '-IR → -ÍS', formula: 'vos + raíz + -ís', example: 'Vos vivís lejos.', caption: 'vivir → vivís', en: 'you live' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'El truco', text: 'Infinitivo sin **-r** + **-s**, con tilde: hablá**s**, comé**s**, viví**s**. Vos y tú significan lo mismo: no los mezcles en una frase.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Vos ___ en un banco.', options: ['trabajas', 'trabajás', 'trabajáis'], answer: 1, why: 'Trabajar → vos trabajás.' },
            { prompt: '¿Vos ___ con tus padres?', options: ['vivís', 'vivés', 'vives'], answer: 0, why: 'Vivir → vos vivís.' },
            { prompt: 'Vos ___ pescado los viernes.', options: ['comes', 'comís', 'comés'], answer: 2, why: 'Comer → vos comés.' },
            { prompt: '¿Qué frase es correcta?', options: ['Tú estudiás mucho.', 'Vos estudiás mucho.', 'Vos estudias mucho.'], answer: 1, why: 'Vos con la forma de vos: estudiás.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Di con vos: tú hablas, comes y vives». Respuesta: «Vos hablás, comés y vivís». Recuerda al alumno que puede seguir usando tú: con vos, lo importante hoy es entender y responder.' },
        ] },
      ],
    },
  ],
};
