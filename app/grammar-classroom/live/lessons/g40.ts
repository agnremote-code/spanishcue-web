import type { LiveLesson } from '../types';

/**
 * Lesson 40 · A1 · Sustantivos.
 * One small office (Laura, Diego) runs through the class: a box of material,
 * a stationery shop and a voice message about the order.
 */
export const lesson: LiveLesson = {
  id: 40,
  level: 'A1',
  title: 'Sustantivos',
  subtitle: 'Nombrar personas, lugares y cosas, saber si son masculinos o femeninos y pasar de uno a varios.',
  legend: [
    { tone: 'blue', label: 'Masculino · el, un, los, unos' },
    { tone: 'orange', label: 'Femenino · la, una, las, unas' },
    { tone: 'teal', label: 'Plural · -s, -es, -ces' },
    { tone: 'violet', label: 'Palabra rebelde · el día, la mano' },
  ],
  optionNotes: {
    'la mapa': '«Mapa» termina en -a, pero es masculino: el mapa.',
    'la día': '«Día» termina en -a, pero es masculino: el día.',
    'la problema': '«Problema» termina en -a, pero es masculino: el problema.',
    'el mano': '«Mano» termina en -o, pero es femenino: la mano.',
    'el foto': '«Foto» termina en -o, pero es femenino: la foto (de «la fotografía»).',
    'el canción': 'Las palabras en -ción son femeninas: la canción.',
    'el ciudad': 'Las palabras en -dad son femeninas: la ciudad.',
    luzes: 'Antes de -es, la z cambia a c: luces.',
    luzs: 'Después de consonante se agrega -es, y la z cambia a c: luces.',
    lápizes: 'Antes de -es, la z cambia a c: lápices.',
    lápizs: 'Después de consonante se agrega -es, y la z cambia a c: lápices.',
    cancións: 'Después de consonante se agrega -es: canciones.',
    canciónes: 'En plural, «canciones» no lleva tilde.',
    hotels: 'Después de consonante se agrega -es: hoteles.',
    papels: 'Después de consonante se agrega -es: papeles.',
    cafées: 'Después de vocal solo se agrega -s: cafés.',
    casaes: 'Después de vocal solo se agrega -s: casas.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Los nombres de las cosas', coach: 'Todo tiene un nombre: personas, lugares y cosas.',
      steps: [
        { title: 'Nombres para todo', blocks: [
          { kind: 'lead', text: 'Mira a tu alrededor. La **mesa**, la **ventana**, tu **teléfono**, tu **ciudad**: son sustantivos. Los sustantivos son los **nombres** de las personas, los lugares, las cosas y también las ideas.', en: 'Nouns name people, places, things and ideas.' },
          { kind: 'guide', text: { teacher: 'Antes de leer, pide al alumno tres objetos que ve ahora. Escríbelos con su artículo: «la mesa», «el libro».', self: 'Antes de leer, di en voz alta tres objetos que ves ahora. Después lee la explicación.' } },
          { kind: 'concept', tone: 'neutral', label: 'SUSTANTIVO', question: '¿Qué es?', en: 'noun', formula: ['artículo + sustantivo', 'un libro · la ciudad'],
            meaning: 'Un sustantivo **nombra** algo: una persona, un lugar, una cosa o una idea. Normalmente puede ir con **el, la, un** o **una**.',
            examples: [
              { es: 'una persona: **Sofía**, **el profesor**, **la doctora**', en: 'a person' },
              { es: 'un lugar: **la oficina**, **el parque**, **Lima**', en: 'a place' },
              { es: 'una cosa: **la mesa**, **el libro**, **la computadora**', en: 'a thing' },
              { es: 'una idea: **la paciencia**, **el amor**, **el viaje**', en: 'an idea' },
            ],
            note: 'Los nombres propios (Sofía, Lima, Argentina) van con **mayúscula** y normalmente sin artículo.' },
          { kind: 'tip', icon: '🔑', title: 'La prueba del artículo', text: '¿Puedes decir «**un** ___» o «**la** ___»? Entonces probablemente es un sustantivo: «un libro», «la ciudad». Con «rápido» o «caminar», no funciona: «un caminar» no es normal.', en: 'If it can take el/la/un/una, it is probably a noun.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Cuál es un sustantivo?', options: ['rápido', 'ciudad', 'caminar'], answer: 1, why: '«Ciudad» nombra un lugar: «la ciudad».' },
            { prompt: '¿Y aquí? ¿Cuál es un sustantivo?', options: ['grande', 'trabajar', 'ventana'], answer: 2, why: '«Ventana» nombra una cosa: «la ventana».' },
            { prompt: '«Lima es una ciudad bonita.» ¿Qué palabra es un nombre propio?', options: ['Lima', 'ciudad', 'bonita'], answer: 0, why: '«Lima» es el nombre de una ciudad concreta: va con mayúscula.' },
          ] },
        ] },
        { title: 'Masculino y femenino', mascot: '/brand/mascot/studying.webp', coach: 'Cada sustantivo tiene género: masculino o femenino.', blocks: [
          { kind: 'lead', text: 'En español, cada sustantivo es **masculino** o **femenino**, también las cosas. La terminación ayuda mucho.', en: 'Every noun is masculine or feminine, even objects.' },
          { kind: 'concept', tone: 'blue', label: 'MASCULINO', question: '¿El o la?', en: 'masculine', formula: ['-o → normalmente el / un'],
            meaning: 'Muchos sustantivos que terminan en **-o** son masculinos. Van con **el** o **un**.',
            examples: [
              { es: '[[el libro|blue]] · [[un cuaderno|blue]]', en: 'the book · a notebook' },
              { es: '[[el teléfono|blue]] · [[un vaso|blue]]', en: 'the phone · a glass' },
              { es: '[[el escritorio|blue]] de Laura', en: 'Laura’s desk' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'FEMENINO', question: '¿El o la?', en: 'feminine', formula: ['-a → normalmente la / una', '-ción, -dad → la / una'],
            meaning: 'Muchos sustantivos que terminan en **-a** son femeninos. Las palabras en **-ción** y **-dad** también son femeninas.',
            examples: [
              { es: '[[la casa|orange]] · [[una mesa|orange]]', en: 'the house · a table' },
              { es: '[[la canción|orange]] · [[una reunión|orange]]', en: 'the song · a meeting' },
              { es: '[[la ciudad|orange]] · [[una universidad|orange]]', en: 'the city · a university' },
            ] },
          { kind: 'table', title: 'Las terminaciones ayudan', head: ['Terminación', 'Género', 'Ejemplos'], rows: [
            ['-o', 'masculino', '[[el libro|blue]], [[el vaso|blue]]'],
            ['-a', 'femenino', '[[la mesa|orange]], [[la caja|orange]]'],
            ['-ción', 'femenino', '[[la canción|orange]], [[la estación|orange]]'],
            ['-dad', 'femenino', '[[la ciudad|orange]], [[la verdad|orange]]'],
            ['-e, consonante', 'los dos', '[[el café|blue]], [[la clase|orange]], [[el papel|blue]], [[la luz|orange]]'],
          ], note: 'Con **-e** o con consonante no hay regla fácil: aprende la palabra con su artículo.' },
          { kind: 'tip', icon: '🧠', title: 'Aprende la palabra con su artículo', text: 'No memorices «mesa». Memoriza «**la** mesa». Así no necesitas pensar después.', en: 'Learn every noun with its article.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '___ cuaderno es nuevo.', options: ['El', 'La'], answer: 0, why: '«Cuaderno» termina en -o: masculino, el cuaderno.' },
            { prompt: 'Tengo ___ reunión a las diez.', options: ['un', 'una'], answer: 1, why: 'Las palabras en -ción son femeninas: una reunión.' },
            { prompt: '___ ciudad es muy grande.', options: ['El', 'La'], answer: 1, why: 'Las palabras en -dad son femeninas: la ciudad.' },
          ] },
        ] },
        { title: 'Palabras rebeldes', mascot: '/autoestudio/mascot/noting.webp', coach: 'Pocas palabras, pero muy frecuentes.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PALABRAS REBELDES', question: '¿Siempre -o es masculino?', en: 'common exceptions', formula: ['el + -a: el día, el mapa, el problema', 'la + -o: la mano, la foto'],
            meaning: 'La terminación es una **tendencia**, no una regla perfecta. Algunas palabras muy frecuentes son **rebeldes**: terminan en -a y son masculinas, o terminan en -o y son femeninas.',
            examples: [
              { es: '[[El día|violet]] empieza con una reunión.', en: 'The day starts with a meeting.' },
              { es: '[[El mapa|violet]] está en la pared.', en: 'The map is on the wall.' },
              { es: 'Tengo [[un problema|violet]] con la computadora.', en: 'I have a problem with the computer.' },
              { es: '[[La foto|violet]] está en [[la mano|violet]] de Laura.', en: 'The photo is in Laura’s hand.' },
            ],
            note: '«La foto» es la forma corta de «la fotografía»: por eso es femenina.' },
          { kind: 'tip', icon: '!', title: 'Una pista', text: 'Muchas palabras en **-ma** son masculinas: [[el problema|violet]], [[el tema|violet]], [[el idioma|violet]], [[el sistema|violet]].', en: 'Many words ending in -ma are masculine.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '___ mapa de Lima está en la pared.', options: ['La', 'El'], answer: 1, why: '«Mapa» es una palabra rebelde: el mapa.' },
            { prompt: 'Me duele ___ mano.', options: ['el', 'la'], answer: 1, why: '«Mano» termina en -o, pero es femenino: la mano.' },
            { prompt: '¿Qué idioma estudias? «Idioma» es…', options: ['masculino: el idioma', 'femenino: la idioma'], answer: 0, why: 'Muchas palabras en -ma son masculinas: el idioma.' },
          ] },
        ] },
        { title: 'De uno a varios', mascot: '/brand/mascot/speaking.webp', coach: 'Mira la última letra.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PLURAL', question: '¿Uno o varios?', en: 'plural', formula: ['vocal + s', 'consonante + es', 'z → c + es'],
            meaning: 'Para hablar de **varias** cosas, mira la última letra. Después de **vocal**, agrega **-s**. Después de **consonante**, agrega **-es**. Si termina en **-z**, la z cambia a **c** y agrega **-es**.',
            examples: [
              { es: 'la casa → [[las casas|teal]] · el café → [[los cafés|teal]]', en: 'houses · coffees' },
              { es: 'el hotel → [[los hoteles|teal]] · la ciudad → [[las ciudades|teal]]', en: 'hotels · cities' },
              { es: 'la luz → [[las luces|teal]] · el lápiz → [[los lápices|teal]]', en: 'lights · pencils' },
            ] },
          { kind: 'table', title: 'El artículo también cambia', head: ['', 'Uno', 'Varios'], rows: [
            ['masculino', '[[el|blue]] libro · [[un|blue]] libro', '[[los|blue]] libros · [[unos|blue]] libros'],
            ['femenino', '[[la|orange]] casa · [[una|orange]] casa', '[[las|orange]] casas · [[unas|orange]] casas'],
          ], note: 'El género no cambia en plural: «el mapa» → «los mapas», «la mano» → «las manos».' },
          { kind: 'tip', icon: '✏️', title: 'Atención a la tilde', text: '«Canción» lleva tilde, pero «**canciones**» no. Lo mismo: «reunión» → «**reuniones**», «estación» → «**estaciones**». La sílaba fuerte no cambia; la tilde, sí.', en: 'canción → canciones: the accent mark disappears.' },
          { kind: 'tip', icon: '🔗', title: 'Todo cambia junto', text: 'Si el sustantivo va en plural, las palabras que lo acompañan también: «la casa blanca» → «**las** casa**s** blanca**s**».', en: 'Words that go with the noun change too.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Plural de «canción»', options: ['cancións', 'canciones', 'canciónes'], answer: 1, why: 'Termina en consonante: agrega -es. Y la tilde desaparece: canciones.' },
            { prompt: 'Plural de «luz»', options: ['luzes', 'luzs', 'luces'], answer: 2, why: 'La z cambia a c antes de -es: luces.' },
            { prompt: 'Plural de «el día»', options: ['las días', 'los días', 'los dias'], answer: 1, why: '«Día» es masculino también en plural, y la tilde se queda: los días.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Tres preguntas para cualquier plural.', blocks: [
          { kind: 'decide', title: 'Piensa en un sustantivo y responde', steps: [
            { q: '¿Termina en vocal (a, e, i, o, u)?', yes: 'Agrega **-s**: «la mesa» → «[[las mesas|teal]]», «el café» → «[[los cafés|teal]]».', no: 'next' },
            { q: '¿Termina en **-z**?', yes: 'Cambia z por c y agrega **-es**: «el lápiz» → «[[los lápices|teal]]».', no: 'Agrega **-es**: «el papel» → «[[los papeles|teal]]», «la reunión» → «[[las reuniones|teal]]».' },
          ] },
          { kind: 'decide', title: '¿El o la?', steps: [
            { q: '¿Es una palabra rebelde (día, mapa, problema, mano, foto)?', yes: 'Recuerda su artículo: «[[el día|violet]]», «[[la mano|violet]]».', no: 'next' },
            { q: '¿Termina en -o?', yes: 'Normalmente **el**: «[[el libro|blue]]».', no: 'Termina en -a, -ción o -dad: normalmente **la**: «[[la mesa|orange]]», «[[la ciudad|orange]]». Con otra letra, búscala en el diccionario.' },
          ] },
          { kind: 'tip', icon: '📚', title: 'Para saber más', text: 'Algunas palabras cambian de significado con el artículo: **el capital** (el dinero) y **la capital** (la ciudad principal de un país). No es necesario aprenderlas ahora.', en: 'el capital = money · la capital = capital city' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'La mapa está en la pared.', right: 'El mapa está en la pared.', why: '«Mapa» termina en -a, pero es masculino.' },
            { wrong: 'Tengo tres lápizes.', right: 'Tengo tres lápices.', why: 'La z cambia a c antes de -es.' },
            { wrong: 'Hay dos hotels en la calle.', right: 'Hay dos hoteles en la calle.', why: 'Después de consonante se agrega -es.' },
            { wrong: 'Me gustan las canciónes.', right: 'Me gustan las canciones.', why: 'En plural, «canciones» no lleva tilde.' },
            { wrong: 'Los fotos están en la caja.', right: 'Las fotos están en la caja.', why: '«Foto» es femenino: la foto, las fotos.' },
            { wrong: 'El ciudad es bonita.', right: 'La ciudad es bonita.', why: 'Las palabras en -dad son femeninas.' },
          ] },
          { kind: 'teacher', text: 'Di cinco objetos de la sala sin artículo. El alumno responde con el artículo y después con el plural: «la ventana, las ventanas».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los sustantivos en situaciones reales', coach: 'Toca las palabras marcadas.',
      steps: [
        { title: 'La caja de la oficina', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada palabra marcada y explica el artículo o el plural.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver por qué es así.' } },
          { kind: 'explore', title: 'Material nuevo', setting: 'Laura abre una caja en la oficina. Diego, su compañero, la ayuda.', lines: [
            { who: 'Diego', text: 'Laura, ¿qué hay en [[la caja|orange]]?', en: 'Laura, what is in the box?' },
            { who: 'Laura', text: 'Hay [[dos libros|teal]], [[tres lápices|teal]] y unas fotos.', en: 'There are two books, three pencils and some photos.' },
            { who: 'Diego', text: '¿Y [[el mapa|violet]]? ¿No está?' },
            { who: 'Laura', text: 'No, el mapa está en la pared.' },
            { who: 'Diego', text: 'Ah, sí. ¿Dónde pongo [[las fotos|violet]]?' },
            { who: 'Laura', text: 'En [[el escritorio|blue]], por favor. Al lado de la computadora.' },
            { who: 'Diego', text: 'Perfecto. ¿Necesitamos más material?' },
            { who: 'Laura', text: 'Sí, necesitamos [[unos cuadernos|blue]] y [[unas luces|teal]] para la sala.' },
            { who: 'Diego', text: '¿Para [[la reunión|orange]] de mañana?' },
            { who: 'Laura', text: 'Sí. Mañana hay [[dos reuniones|teal]]. ¡Es un día largo!' },
          ], notes: {
            'la caja': '«Caja» termina en -a: femenino. Por eso, **la** caja.',
            'dos libros': '«Libro» termina en vocal: solo agrega **-s**.',
            'tres lápices': '«Lápiz» termina en -z: la z cambia a **c** y agrega **-es**.',
            'el mapa': 'Una palabra rebelde: termina en -a, pero es **masculina**.',
            'las fotos': 'Otra palabra rebelde: «foto» termina en -o, pero es **femenina** (la fotografía). En plural: **las** fotos.',
            'el escritorio': '«Escritorio» termina en -o: masculino, **el** escritorio.',
            'unos cuadernos': 'Varios cuadernos, masculino: **unos**. «Cuaderno» termina en vocal: agrega -s.',
            'unas luces': '«Luz» → **luces**: la z cambia a c. Es femenino: **unas** luces.',
            'la reunión': 'Las palabras en **-ción** y **-ión** como «reunión» son femeninas.',
            'dos reuniones': '«Reunión» termina en consonante: agrega **-es**. En plural, sin tilde: reuniones.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué hay en la caja?', options: ['Libros, lápices y fotos.', 'Un mapa y una computadora.', 'Cuadernos y luces.'], answer: 0, why: '«Hay dos libros, tres lápices y unas fotos».' },
            { prompt: '¿Dónde está el mapa?', options: ['En la caja.', 'En la pared.', 'En el escritorio.'], answer: 1, why: '«El mapa está en la pared».' },
            { prompt: '¿Qué necesitan comprar?', options: ['Fotos y libros.', 'Cuadernos y luces.', 'Una mesa.'], answer: 1, why: '«Necesitamos unos cuadernos y unas luces».' },
          ] },
        ] },
        { title: 'En la papelería', blocks: [
          { kind: 'explore', title: 'Una compra rápida', setting: 'Diego va a la papelería para comprar el material.', lines: [
            { who: 'Vendedora', text: 'Buenos días. ¿Qué necesita?' },
            { who: 'Diego', text: 'Buenos días. Necesito [[unos cuadernos|blue]], por favor.' },
            { who: 'Vendedora', text: '¿Cuántos? ¿Grandes o pequeños?' },
            { who: 'Diego', text: 'Cuatro, grandes. Y [[dos lápices|teal]].' },
            { who: 'Vendedora', text: 'Aquí tiene. ¿Algo más?' },
            { who: 'Diego', text: 'Sí, ¿tiene [[luces|teal]] para una mesa?' },
            { who: 'Vendedora', text: 'Lo siento, aquí no hay luces. Hay una tienda en [[la estación|orange]].' },
            { who: 'Diego', text: 'Ah, gracias. ¿Y tiene [[un mapa|violet]] de la ciudad?' },
            { who: 'Vendedora', text: 'Sí, [[los mapas|violet]] están allí, al lado de [[las postales|teal]].' },
            { who: 'Diego', text: 'Perfecto. Uno, por favor.' },
          ], notes: {
            'unos cuadernos': 'Varios cuadernos: masculino plural, **unos**. No sabemos cuáles: por eso «unos» y no «los».',
            'dos lápices': '«Lápiz» → «lápices»: la z cambia a c antes de **-es**.',
            luces: '«Luz» → «luces». La misma regla que «lápiz»: z → c + es.',
            'la estación': '«Estación» termina en **-ción**: femenino.',
            'un mapa': '«Mapa» es masculino aunque termina en -a: **un** mapa.',
            'los mapas': 'En plural, «mapa» sigue siendo masculino: **los** mapas.',
            'las postales': '«Postal» termina en consonante (l): agrega **-es**. Es femenino: la postal, las postales.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué compras tú en una papelería?». El alumno responde con tres objetos en plural y su artículo.' },
        ] },
        { title: '¿Cómo se forma el plural?', blocks: [
          { kind: 'classify', title: 'Clasifica las palabras de las dos conversaciones', categories: [
            { id: 's', label: 'vocal + s', tone: 'teal' },
            { id: 'es', label: 'consonante + es', tone: 'teal' },
            { id: 'ces', label: 'z → ces', tone: 'teal' },
          ], items: [
            { text: 'libros', answer: 's', why: 'Libro termina en vocal (o): + s.' },
            { text: 'lápices', answer: 'ces', why: 'Lápiz termina en z: lápices.' },
            { text: 'reuniones', answer: 'es', why: 'Reunión termina en consonante (n): + es.' },
            { text: 'fotos', answer: 's', why: 'Foto termina en vocal: + s.' },
            { text: 'luces', answer: 'ces', why: 'Luz termina en z: luces.' },
            { text: 'postales', answer: 'es', why: 'Postal termina en consonante (l): + es.' },
            { text: 'mapas', answer: 's', why: 'Mapa termina en vocal: + s.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige el artículo', blocks: [
          { kind: 'choice', items: [
            { context: 'En la oficina.', prompt: '___ problema es la computadora.', options: ['El', 'La', 'Las'], answer: 0, why: '«Problema» es una palabra rebelde: el problema.' },
            { context: 'Una canción en la radio.', prompt: 'Me gusta ___ canción.', options: ['el', 'la', 'los'], answer: 1, why: 'Las palabras en -ción son femeninas: la canción.' },
            { context: 'Laura busca algo.', prompt: '¿Dónde están ___ lápices?', options: ['los', 'las', 'el'], answer: 0, why: '«Lápiz» es masculino; en plural: los lápices.' },
            { context: 'Un viaje.', prompt: 'Necesito ___ mapa de la ciudad.', options: ['una', 'un', 'unas'], answer: 1, why: '«Mapa» es masculino: un mapa.' },
            { context: 'Fotos de las vacaciones.', prompt: '___ fotos están en el teléfono.', options: ['Los', 'Las', 'La'], answer: 1, why: '«Foto» es femenino; en plural: las fotos.' },
            { context: 'Lunes por la mañana.', prompt: '___ día empieza a las ocho.', options: ['La', 'El', 'Los'], answer: 1, why: '«Día» es una palabra rebelde: el día.' },
          ] },
        ] },
        { title: '¿El o la?', blocks: [
          { kind: 'classify', title: 'Clasifica cada sustantivo', categories: [
            { id: 'm', label: 'el · masculino', tone: 'blue' },
            { id: 'f', label: 'la · femenino', tone: 'orange' },
          ], items: [
            { text: 'cuaderno', answer: 'm', why: 'Termina en -o: el cuaderno.' },
            { text: 'universidad', answer: 'f', why: 'Termina en -dad: la universidad.' },
            { text: 'tema', answer: 'm', why: 'Rebelde en -ma: el tema.' },
            { text: 'mano', answer: 'f', why: 'Rebelde: la mano.' },
            { text: 'estación', answer: 'f', why: 'Termina en -ción: la estación.' },
            { text: 'día', answer: 'm', why: 'Rebelde: el día.' },
            { text: 'ventana', answer: 'f', why: 'Termina en -a: la ventana.' },
            { text: 'teléfono', answer: 'm', why: 'Termina en -o: el teléfono.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase habla de **varias** cosas?', options: ['Hay un libro en la mesa.', 'Hay unos libros en la mesa.'], answer: 1, why: '«Unos libros»: plural, varias cosas.' },
            { prompt: '¿Qué palabra nombra **un lugar**?', options: ['la mesa', 'la oficina', 'la paciencia'], answer: 1, why: 'Una oficina es un lugar. La mesa es una cosa; la paciencia es una idea.' },
            { prompt: '¿Qué palabra nombra **una idea**?', options: ['el amor', 'el parque', 'el profesor'], answer: 0, why: 'El amor no se puede tocar: es una idea. El parque es un lugar; el profesor, una persona.' },
            { prompt: '«Las luces de la sala.» ¿Cuántas luces hay?', options: ['Una.', 'Más de una.'], answer: 1, why: '«Las luces»: plural.' },
            { prompt: '¿Qué frase habla de **una persona**?', options: ['La doctora está en la sala.', 'La reunión está en la sala.'], answer: 0, why: '«La doctora» es una persona; «la reunión» es un evento.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Laura llama a Diego', lines: [
            { who: 'Laura', text: 'Diego, ¿tienes ___ fotos para la reunión?', options: ['los', 'las', 'la'], answer: 1, why: '«Foto» es femenino: las fotos.' },
            { who: 'Diego', text: 'Sí, están en ___ caja.', options: ['la', 'el', 'las'], answer: 0, why: '«Caja» termina en -a: la caja.' },
            { who: 'Laura', text: 'Bien. ¿Y los ___? Necesito tres.', options: ['lápizes', 'lápices', 'lápizs'], answer: 1, why: 'La z cambia a c: lápices.' },
            { who: 'Diego', text: 'Están en ___ escritorio, al lado del teléfono.', options: ['el', 'la', 'los'], answer: 0, why: '«Escritorio» termina en -o: el escritorio.' },
            { who: 'Laura', text: 'Perfecto. Mañana tenemos dos ___ muy largas.', options: ['reuniónes', 'reuniones', 'reunións'], answer: 1, why: 'Consonante + es, y sin tilde: reuniones.' },
            { who: 'Diego', text: '¡Ay, no! ¡Qué ___!', options: ['problema', 'problemo', 'problemas'], answer: 0, why: '«¡Qué problema!»: la palabra es «problema», aunque es masculina.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La día es muy bonito.', ok: false, options: ['El día es muy bonito.', 'La día es muy bonita.', 'Las días es muy bonito.'], answer: 0, why: '«Día» es masculino: el día.' },
            { sentence: 'Tengo dos hotels favoritos en Lima.', ok: false, options: ['Tengo dos hotelos favoritos en Lima.', 'Tengo dos hoteles favoritos en Lima.', 'Tengo dos hotel favoritos en Lima.'], answer: 1, why: 'Consonante + es: hoteles.' },
            { sentence: 'Las canciones de la radio son buenas.', ok: true, why: 'Correcta: «canción» → «canciones», sin tilde.' },
            { sentence: 'Hay tres luzes en la sala.', ok: false, options: ['Hay tres luz en la sala.', 'Hay tres luzs en la sala.', 'Hay tres luces en la sala.'], answer: 2, why: 'z → c + es: luces.' },
            { sentence: 'El mapa está en la pared.', ok: true, why: 'Correcta: «mapa» es masculino.' },
            { sentence: 'Me duele el mano.', ok: false, options: ['Me duele la mano.', 'Me duele los manos.', 'Me duele las mano.'], answer: 0, why: '«Mano» es femenino: la mano.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Hay', 'tres', 'lápices', 'en', 'la', 'caja'], accept: ['Hay tres lápices en la caja', 'En la caja hay tres lápices'], en: 'There are three pencils in the box.' },
            { tiles: ['El', 'mapa', 'está', 'en', 'la', 'pared'], accept: ['El mapa está en la pared', 'En la pared está el mapa'], en: 'The map is on the wall.' },
            { tiles: ['Las', 'fotos', 'están', 'en', 'el', 'escritorio'], accept: ['Las fotos están en el escritorio', 'En el escritorio están las fotos'], en: 'The photos are on the desk.' },
            { tiles: ['Mañana', 'hay', 'dos', 'reuniones'], accept: ['Mañana hay dos reuniones', 'Hay dos reuniones mañana'], en: 'Tomorrow there are two meetings.' },
          ] },
          { kind: 'rewrite', title: 'Escribe en plural', items: [
            { prompt: 'una luz', instruction: 'Escribe «unas» + el plural.', accept: ['unas luces'] },
            { prompt: 'la canción', instruction: 'Escribe el plural con su artículo.', accept: ['las canciones'] },
            { prompt: 'un libro', instruction: 'Escribe «unos» + el plural.', accept: ['unos libros'] },
            { prompt: 'el problema', instruction: 'Escribe el plural con su artículo.', accept: ['los problemas'] },
            { prompt: 'El lápiz está en la mesa.', instruction: 'Cambia «el lápiz» a plural.', accept: ['Los lápices están en la mesa', 'Los lápices están sobre la mesa'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un pedido de material', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un pedido de material', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota los objetos con su número antes de responder.', self: 'Escucha una vez para la idea general. Después escucha otra vez y anota los objetos y los números. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Un mensaje para Laura', channel: 'MENSAJE DE VOZ · PARA LAURA', src: '/audio/grammar-free/40.mp3',
            before: 'Una compañera le deja un mensaje a Laura sobre la caja de material. ¿Qué objetos crees que hay en la caja?',
            gist: { prompt: '¿Para qué es el mensaje?', options: ['Para decir qué material llegó y pedir una mesa.', 'Para comprar un mapa nuevo.', 'Para cancelar una reunión.'], answer: 0, why: 'Dice qué hay en la caja y pregunta: «¿Tienes una mesa libre para todo esto?».' },
            details: [
              { prompt: '¿Cuántos cuadernos hay?', options: ['Dos.', 'Cuatro.', 'Tres.'], answer: 1, why: '«Hay cuatro cuadernos y dos lápices».' },
              { prompt: '¿Qué no hay en la caja?', options: ['Lápices.', 'Fotos.', 'Libros.'], answer: 2, why: '«…pero no hay libros».' },
              { prompt: '¿Dónde están las fotos?', options: ['En una bolsa pequeña.', 'En la pared.', 'En la mesa.'], answer: 0, why: '«Las fotos están en una bolsa pequeña».' },
              { prompt: '¿De qué ciudad es el mapa?', options: ['De Bogotá.', 'De Lima.', 'De Quito.'], answer: 1, why: '«También tengo el mapa de Lima».' },
              { prompt: '¿Dónde trabaja ahora la compañera?', options: ['En la sala de reuniones.', 'En la oficina de Laura.', 'En la papelería.'], answer: 0, why: '«Ahora trabajo en la sala de reuniones, cerca de la ventana».' },
            ],
            transcript: 'Hola, Laura. [[La caja|orange]] ya está aquí. Hay [[cuatro cuadernos|teal]] y [[dos lápices|teal]], pero no hay [[libros|teal]]. [[Las fotos|violet]] están en una bolsa pequeña. También tengo [[el mapa|violet]] de Lima. ¿Tienes [[una mesa|orange]] libre para todo esto? Ahora trabajo en la sala de [[reuniones|teal]], cerca de [[la ventana|orange]].',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Laura: dice si tiene una mesa libre y qué material necesita. Pide al menos dos plurales.', self: 'Responde al mensaje como si fueras Laura: ¿tienes una mesa libre? ¿Qué material necesitas? Usa al menos dos palabras en plural.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus cosas y tus lugares', coach: 'Una pregunta por vez. Habla de tu mundo.',
      steps: [
        { title: 'Tus cosas y tus lugares', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Si el alumno no sabe una palabra, dásela con su artículo y pide que la repita en plural.', self: 'Responde cada pregunta en voz alta. Si no sabes una palabra, búscala en el diccionario con su artículo.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué objetos hay en tu mesa ahora?', followUps: ['¿Cuántos hay?', '¿Qué objeto usas más?', '¿Hay algo que no necesitas?'], phrases: ['Hay [[un|blue]] teléfono y [[una|orange]] taza.', 'Hay [[dos libros|teal]].', 'Uso mucho [[la|orange]] computadora.'], hint: 'Empieza con «Hay…» y di cada objeto con un artículo: un, una, unos, unas.', example: 'En mi mesa hay un teléfono, una taza de café y dos cuadernos. Uso mucho el teléfono.', next: 'Ahora, lo que llevas contigo.', teacher: 'Si el alumno dice solo la palabra, pide el artículo: «¿Un o una?».' },
            { q: '¿Qué llevas en tu bolso o en tu mochila?', followUps: ['¿Llevas libros?', '¿Qué cosa no puede faltar?', '¿Hay algo raro en tu bolso?'], phrases: ['Llevo [[unas llaves|teal]].', 'Siempre llevo [[el|blue]] teléfono.', 'No llevo [[libros|teal]].'], hint: 'Para varias cosas usa «unos» o «unas»: «unas llaves», «unos papeles».', example: 'Llevo unas llaves, el teléfono, unos papeles y una botella de agua. Siempre llevo dos lápices.', next: 'Hablemos de tu lugar de trabajo o de estudio.' },
            { q: '¿Dónde trabajas o estudias? ¿Qué hay en ese lugar?', followUps: ['¿Hay ventanas?', '¿Cuántas personas hay?', '¿Qué cosa falta en ese lugar?'], phrases: ['Trabajo en [[una oficina|orange]].', 'Estudio en [[la universidad|orange]].', 'Hay [[muchas mesas|teal]] y [[tres ventanas|teal]].'], hint: 'Primero di el lugar con su artículo. Después usa «Hay…» para los objetos.', example: 'Trabajo en una oficina pequeña. Hay cuatro mesas, dos ventanas y un mapa en la pared. Falta una luz.', next: 'Ahora, los lugares de tu ciudad.' },
            { q: '¿Qué lugares de tu ciudad te gustan?', followUps: ['¿Hay un parque cerca de tu casa?', '¿Qué lugar es bonito para una foto?', '¿Cuál es tu café favorito?'], phrases: ['Me gusta [[el parque|blue]]…', 'Me gustan [[las plazas|teal]].', 'Cerca de mi casa hay [[una estación|orange]].'], hint: 'Con un lugar: «Me gusta el parque». Con varios: «Me gustan los parques».', example: 'Me gusta el parque de mi barrio y me gustan los cafés del centro. Cerca de mi casa hay una estación.', next: 'Ahora, las personas de tu día.' },
            { q: '¿Con qué personas hablas todos los días?', followUps: ['¿Tienes compañeros de trabajo o de clase?', '¿Cómo se llaman?', '¿Hablas con tus vecinos?'], phrases: ['Hablo con [[mis compañeros|teal]].', 'Hablo con [[la|orange]] profesora.', 'Mi amiga se llama…'], hint: 'Las personas también son sustantivos: el profesor, la profesora, los compañeros.', example: 'Hablo con mis compañeros de trabajo y con la vecina. Mi compañera se llama Ana.', next: 'Para terminar, tu objeto favorito.' },
            { q: '¿Cuál es tu objeto favorito? ¿Por qué?', followUps: ['¿Dónde está ahora?', '¿Es un regalo?', '¿Tienes uno o varios?'], phrases: ['Mi objeto favorito es [[el|blue]]…', 'Es [[un regalo|blue]] de…', 'Tengo [[tres|teal]]…'], hint: 'Di el objeto con «el» o «la» y una razón simple: «porque es bonito», «porque es útil».', example: 'Mi objeto favorito es la foto de mi familia. Es un regalo de mi madre. Está en la pared de mi habitación.', teacher: 'Pide al alumno que muestre el objeto si está cerca. Pregunta por el plural: «¿Tienes una o varias?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pregunta al profesor qué hay en su mesa y qué lleva en su bolso.', self: 'Escribe tres preguntas con «¿Qué hay en…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota para Laura', coach: 'Escribe con tus objetos reales.',
      steps: [
        { title: 'Una nota para Laura', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos los artículos y los plurales.', self: 'Escribe tu nota y toca «Revisar mi texto». Mira bien los artículos (el, la, los, las) y los plurales.' } },
          { kind: 'write', title: 'El material de la oficina', situation: 'Trabajas con Laura. Mañana hay una reunión y ella necesita saber qué material hay. Escríbele una nota.', task: [
            'Di qué material **tienes** y **cuántos** hay.',
            'Di **dónde está** una cosa (en la caja, en la mesa…).',
            'Di **dos cosas que faltan**.',
            'Usa al menos **tres plurales**.',
          ], starters: ['Hola, Laura:', 'Tengo…', 'Hay… en…', '… está en…', 'No tengo…', 'Necesitamos…'],
            words: ['la caja', 'el mapa', 'las fotos', 'los lápices', 'los cuadernos', 'la mesa', 'las luces', 'el escritorio', 'la reunión'],
            model: 'Hola, Laura: tengo [[dos libros|teal]] y [[tres lápices|teal]] para la oficina. [[Las fotos|violet]] están en [[la caja|orange]] y [[el mapa|violet]] está en [[el escritorio|blue]]. No tengo [[cuadernos|teal]] y no hay [[luces|teal]] para la sala. Necesitamos [[una mesa|orange]] para la reunión. ¡Gracias!',
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
            { tone: 'blue', label: 'MASCULINO', formula: '-o → el, un', example: 'el libro · un cuaderno', caption: 'Rebeldes: el día, el mapa, el problema.', en: 'masculine' },
            { tone: 'orange', label: 'FEMENINO', formula: '-a, -ción, -dad → la, una', example: 'la mesa · la canción · la ciudad', caption: 'Rebeldes: la mano, la foto.', en: 'feminine' },
            { tone: 'teal', label: 'PLURAL', formula: 'vocal + s · consonante + es · z → ces', example: 'casas · hoteles · lápices', caption: 'El artículo también cambia: los, las, unos, unas.', en: 'plural' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'El mejor truco', text: 'Aprende cada palabra **con su artículo**: «la mano», «el mapa». Para el plural, mira **la última letra**.', en: 'Learn every noun with its article.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '___ problema es pequeño.', options: ['La', 'El', 'Los'], answer: 1, why: '«Problema» es masculino.' },
            { prompt: 'Plural de «lápiz»', options: ['lápizes', 'lápices', 'lápizs'], answer: 1, why: 'z → c + es.' },
            { prompt: 'Me gustan ___ canciones de esta radio.', options: ['los', 'las', 'la'], answer: 1, why: '«Canción» es femenino: las canciones.' },
            { prompt: '¿Cuál **no** es un sustantivo?', options: ['la paciencia', 'trabajar', 'el viaje'], answer: 1, why: '«Trabajar» es un verbo: no puede ir con «el» o «la» normalmente.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Di el plural de “el lápiz” y explica el cambio». Respuesta: «Los lápices: la z cambia a c y agrega -es».' },
        ] },
      ],
    },
  ],
};
