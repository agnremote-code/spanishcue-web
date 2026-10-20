import type { LiveLesson } from '../types';

/**
 * Lesson 305 · A1 · Plural de sustantivos y concordancia básica.
 * Scene: Lucía (city-centre office) prepares one supplies order for two offices
 * of the same small company; Diego works at the harbour office, Marta at the centre.
 * Content: -s after a vowel, -es after a consonant, -z → -ces, small exceptions
 * (reunión → reuniones, el lunes → los lunes), and agreement inside a short noun
 * group: determiner + noun + one adjective (un lápiz rojo → dos lápices rojos).
 * Full adjective agreement is the next class (G006). Verbs other than ser / estar
 * (necesitamos, hay, preparo) are only receptive and glossed. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 305,
  level: 'A1',
  title: 'Plural de sustantivos y concordancia básica',
  subtitle: 'Pasar de uno a varios: lápiz → lápices, reloj → relojes, y escribir un pedido con grupos como «dos carpetas azules».',
  legend: [
    { tone: 'blue', label: '+S · después de vocal (after a vowel)' },
    { tone: 'teal', label: '+ES · después de consonante (after a consonant)' },
    { tone: 'orange', label: 'Z → CES · lápiz, luz' },
    { tone: 'violet', label: 'Todo el grupo en plural (the whole group agrees)' },
  ],
  optionNotes: {
    'lápizes': 'Con **z** final, el plural cambia la z por c: lápiz → lápi**ces**. «Lápizes» no existe.',
    'luzes': 'Con **z** final, el plural cambia la z por c: luz → lu**ces**. «Luzes» no existe.',
    'relojs': '«Reloj» termina en consonante (j): el plural es reloj**es**.',
    'papels': '«Papel» termina en consonante (l): el plural es papel**es**.',
    'impresoraes': '«Impresora» termina en vocal (a): solo añades **-s**: impresoras.',
    'cuadernoes': '«Cuaderno» termina en vocal (o): solo añades **-s**: cuadernos.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'De uno a varios', coach: 'Uno, dos, tres… One becomes many.',
      steps: [
        { title: 'Un pedido para dos oficinas · An order for two offices', blocks: [
          { kind: 'lead', text: 'Lucía trabaja en una empresa pequeña con **dos oficinas**: la oficina del centro y la oficina del puerto. Hoy prepara el pedido de material: lápices, cuadernos, carpetas, relojes… Para el pedido, Lucía necesita el **plural**: más de una cosa.', en: 'Lucía works at a small company with two offices: one in the city centre and one by the harbour. Today she is preparing the supplies order: pencils, notebooks, folders, clocks… For the order she needs the plural: more than one thing.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos columnas en voz alta y tu alumno repite. Después tu alumno dice qué palabras cambian de la izquierda a la derecha.', self: 'Lee las dos columnas en voz alta. ¿Qué palabras cambian de una columna a la otra? (Which words change?)' } },
          { kind: 'compare', title: 'Uno o varios · One or several', columns: [
            { tone: 'neutral', label: 'UNO · one', sentence: 'un lápiz rojo · una carpeta azul · un reloj', idea: 'Una cosa: palabras en singular.', en: 'a red pencil · a blue folder · a clock' },
            { tone: 'violet', label: 'VARIOS · several', sentence: '[[dos lápices rojos|violet]] · [[dos carpetas azules|violet]] · [[dos relojes|violet]]', idea: 'Varias cosas: el artículo, el nombre y el adjetivo cambian.', en: 'two red pencils · two blue folders · two clocks' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Los números de hoy · Today’s numbers', text: '**uno / una** (1), **dos** (2), **tres** (3), **cuatro** (4), **cinco** (5), **seis** (6), **siete** (7), **ocho** (8), **nueve** (9), **diez** (10). Desde «dos», el nombre va en plural. Los números no cambian: dos lápices, dos carpetas.', en: 'From “dos” (2) on, the noun is plural. The numbers themselves do not change: dos lápices, dos carpetas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Dos carpetas azules»: ¿cuántas carpetas?', options: ['Una.', 'No sabemos.', 'Dos: más de una.'], answer: 2, why: '«Dos» + carpeta**s**: plural, más de una.', en: '“Dos carpetas azules”: how many folders?' },
            { prompt: '«Un lápiz rojo» → «dos…»', options: ['lápices rojo', 'lápices rojos', 'lápiz rojo'], answer: 1, why: 'Con «dos» cambian el nombre y el adjetivo: lápices rojos.', en: '“A red pencil” → “two…”' },
          ] },
        ] },
        { title: 'La regla: -s o -es · The rule: -s or -es', mascot: '/brand/mascot/studying.webp', coach: 'Mira la última letra. Look at the last letter.', blocks: [
          { kind: 'lead', text: 'Para hacer el plural, mira **la última letra** del nombre. ¿Es una vocal (a, e, o)? Añades **-s**. ¿Es una consonante (l, r, n, d, j…)? Añades **-es**.', en: 'To make the plural, look at the last letter of the noun. Is it a vowel (a, e, o)? Add -s. Is it a consonant (l, r, n, d, j…)? Add -es.' },
          { kind: 'concept', tone: 'blue', label: '+S', question: '¿Termina en vocal?', en: 'Does it end in a vowel? Add -s.', formula: ['vocal + s', 'carpeta → carpetas · clase → clases'],
            meaning: 'Si el nombre termina en **a, e, o** (sin tilde), solo añades **-s**. Es el plural más frecuente.',
            examples: [
              { es: 'una [[silla|blue]] → dos [[sillas|blue]]', en: 'a chair → two chairs' },
              { es: 'un [[cuaderno|blue]] → tres [[cuadernos|blue]]', en: 'a notebook → three notebooks' },
              { es: 'una [[mesa|blue]] → cuatro [[mesas|blue]]', en: 'a table → four tables' },
              { es: 'el [[mapa|blue]] → los [[mapas|blue]]', en: 'the map → the maps' },
            ],
            note: 'Con tilde en **á, é, ó** final, también -s: sofá → sofás, café → cafés.' },
          { kind: 'concept', tone: 'teal', label: '+ES', question: '¿Termina en consonante?', en: 'Does it end in a consonant? Add -es.', formula: ['consonante + es', 'reloj → relojes · ciudad → ciudades'],
            meaning: 'Si el nombre termina en **consonante** (l, r, n, d, j…), añades **-es**. La palabra tiene una sílaba más: re-loj → re-lo-jes.',
            examples: [
              { es: 'una [[ciudad|teal]] → dos [[ciudades|teal]]', en: 'a city → two cities' },
              { es: 'un [[reloj|teal]] → dos [[relojes|teal]]', en: 'a clock → two clocks' },
              { es: 'un [[papel|teal]] → muchos [[papeles|teal]]', en: 'a sheet of paper → lots of papers' },
              { es: 'un [[ordenador|teal]] → cinco [[ordenadores|teal]]', en: 'a computer → five computers (in Latin America: computadora)' },
            ] },
          { kind: 'table', title: 'Singular → plural', head: ['Termina en… (ends in)', 'Singular', 'Plural'], rows: [
            ['vocal · a', 'la carpeta', 'las carpeta[[s|blue]]'],
            ['vocal · o', 'el bolígrafo', 'los bolígrafo[[s|blue]]'],
            ['vocal · e', 'la clase', 'las clase[[s|blue]]'],
            ['consonante · r', 'el marcador', 'los marcador[[es|teal]]'],
            ['consonante · l', 'el papel', 'los papel[[es|teal]]'],
            ['consonante · j', 'el reloj', 'los reloj[[es|teal]]'],
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'una lámpara → dos…', options: ['lámparaes', 'lámpara', 'lámparas'], answer: 2, why: 'Lámpara termina en vocal (a): + s.', en: 'a lamp → two…' },
            { prompt: 'un marcador → tres…', options: ['marcadors', 'marcador', 'marcadores'], answer: 2, why: 'Marcador termina en consonante (r): + es.', en: 'a marker → three…' },
            { prompt: 'una ciudad → dos…', options: ['ciudads', 'ciudadas', 'ciudades'], answer: 2, why: 'Ciudad termina en consonante (d): + es.', en: 'a city → two…' },
          ] },
        ] },
        { title: 'Z → CES y otros casos · Z → CES and other cases', mascot: '/brand/mascot/standing.webp', coach: 'La z se cambia por c. The z becomes c.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'Z → CES', question: '¿Termina en z?', en: 'Does it end in z? Change z to c and add -es.', formula: ['-z → -ces', 'lápiz → lápices · luz → luces'],
            meaning: 'La **z** es una consonante, así que el plural lleva **-es**. Pero en español escribimos **ce**, no «ze»: la z cambia a **c**.',
            examples: [
              { es: 'un [[lápiz|orange]] → dos [[lápices|orange]]', en: 'a pencil → two pencils' },
              { es: 'una [[luz|orange]] → tres [[luces|orange]]', en: 'a light → three lights' },
              { es: 'una [[vez|orange]] → dos [[veces|orange]]', en: 'once → twice (one time → two times)' },
            ] },
          { kind: 'table', title: 'Casos especiales frecuentes · Frequent special cases', head: ['Caso (case)', 'Singular', 'Plural', 'Nota'], rows: [
            ['-ión', 'la reunión', 'las [[reuniones|teal]]', 'La tilde desaparece. (The accent goes.)'],
            ['-ión', 'la estación', 'las [[estaciones|teal]]', 'Igual: estaciones, sin tilde.'],
            ['-s sin acento final', 'el lunes', 'los lunes', 'No cambia: solo cambia el artículo. (No change.)'],
            ['-s sin acento final', 'la crisis', 'las crisis', 'Igual: el artículo dice el número.'],
          ], note: 'Estas palabras son **excepciones**: la regla general es -s después de vocal y -es después de consonante.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'una luz → dos…', options: ['luces', 'luzes', 'luzs'], answer: 0, why: 'z → c + es: luces.', en: 'a light → two…' },
            { prompt: 'la reunión → las…', options: ['reunións', 'reuniones', 'reuniónes'], answer: 1, why: 'Consonante (n) + es, y la tilde desaparece: reuniones.', en: 'the meeting → the…' },
            { prompt: 'el lunes → los…', options: ['lunes', 'luneses', 'lunés'], answer: 0, why: '«Lunes» no cambia en plural: los lunes.', en: 'Monday → Mondays' },
          ] },
        ] },
        { title: 'Todo el grupo · The whole group', mascot: '/brand/mascot/speaking.webp', coach: 'Artículo, nombre, adjetivo: todo en plural.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONCORDANCIA', question: '¿El nombre está en plural?', en: 'Is the noun plural? Then the article and the adjective are plural too.', formula: ['el / la → los / las · un / una → unos / unas', 'artículo + nombre + adjetivo: todo en plural'],
            meaning: 'En español, las palabras del grupo **concuerdan**: si el nombre está en plural, el artículo y el adjetivo también. El adjetivo sigue la misma regla: rojo → rojos, azul → azules, gris → grises.',
            examples: [
              { es: 'el lápiz rojo → [[los lápices rojos|violet]]', en: 'the red pencil → the red pencils' },
              { es: 'una carpeta azul → [[unas carpetas azules|violet]]', en: 'a blue folder → some blue folders' },
              { es: 'la lámpara blanca → [[las lámparas blancas|violet]]', en: 'the white lamp → the white lamps' },
              { es: 'un reloj grande → [[unos relojes grandes|violet]]', en: 'a big clock → some big clocks' },
            ],
            note: 'El género no cambia: el problema → **los** problemas; la mano → **las** manos; el mapa → **los** mapas (clase 003).' },
          { kind: 'table', title: 'Los artículos en plural · Plural articles', head: ['', 'Masculino', 'Femenino'], rows: [
            ['singular · the', 'el lápiz rojo', 'la carpeta roja'],
            ['plural · the', '[[los|violet]] lápices rojos', '[[las|violet]] carpetas rojas'],
            ['singular · a', 'un reloj negro', 'una silla negra'],
            ['plural · some', '[[unos|violet]] relojes negros', '[[unas|violet]] sillas negras'],
          ], note: 'Colores de hoy: rojo (red), azul (blue), blanco (white), negro (black), verde (green), gris (grey). Tamaño: grande (big), pequeño (small). Nuevo (new), viejo (old).' },
          { kind: 'decide', title: 'Tu grupo de palabras · Your noun group', steps: [
            { q: '¿Es más de una cosa? (More than one thing?)', yes: 'next', no: 'Singular: un lápiz rojo, una carpeta azul.' },
            { q: '¿El nombre termina en vocal? (Ends in a vowel?)', yes: 'Añade **-s**: carpeta → carpetas. Después, el artículo y el adjetivo en plural.', no: 'next' },
            { q: '¿Termina en z? (Ends in z?)', yes: '**-ces**: lápiz → lápices. Y el grupo entero: los lápices rojos.', no: 'Añade **-es**: reloj → relojes. Y el grupo entero: unos relojes grandes.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ carpetas verdes', options: ['las', 'la', 'los'], answer: 0, why: 'Carpetas: femenino plural → las.', en: 'the green folders' },
            { prompt: 'unos relojes ___', options: ['grandos', 'grandes', 'grande'], answer: 1, why: 'Grande termina en vocal: + s → grandes.', en: 'some big clocks' },
            { prompt: 'los mapas ___', options: ['nuevas', 'nuevo', 'nuevos'], answer: 2, why: 'El mapa es masculino: los mapas nuevos.', en: 'the new maps' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Todo el grupo está en plural?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué palabra falla y por qué. Después aparece la corrección.', self: 'Lee cada frase, busca la palabra que falla y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'dos lápiz rojo', right: 'dos lápices rojos', why: 'Con «dos», el nombre y el adjetivo van en plural, y la z cambia a c: lápices rojos. (Noun and adjective both plural.)' },
            { wrong: 'los relojs', right: 'los relojes', why: 'Reloj termina en consonante: + es. (Consonant: add -es.)' },
            { wrong: 'las carpeta azules', right: 'las carpetas azules', why: 'Todo el grupo en plural: también el nombre. (The noun must be plural too.)' },
            { wrong: 'unas lámparas blanco', right: 'unas lámparas blancas', why: 'Lámparas es femenino plural: el adjetivo también, blancas. (The adjective agrees.)' },
            { wrong: 'tres lápizes', right: 'tres lápices', why: 'No escribimos «ze»: z → c. (Write -ces, not -zes.)' },
            { wrong: 'las mapas', right: 'los mapas', why: 'El mapa es masculino; en plural sigue masculino: los mapas. (Gender stays the same.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['cuatro cuadernos pequeños', 'cuatro cuaderno pequeño', 'cuatro cuadernos pequeño'], answer: 0, why: 'Número + nombre en plural + adjetivo en plural.', en: 'Which one is correct? (four small notebooks)' },
            { prompt: '¿Cuál es correcta?', options: ['unos luces verdes', 'unas luces verdes', 'unas luzes verdes'], answer: 1, why: 'Luz → luces (z → c); femenino: unas.', en: 'Which one is correct? (some green lights)' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno mira la mesa o la sala y dice tres grupos en plural con número y color («dos bolígrafos azules»). Tú repites cada grupo con la pronunciación correcta.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La lista del pedido', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Lucía llama a Diego · Lucía calls Diego', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía y tu alumno es Diego. Después tu alumno toca cada grupo marcado y dice la regla: -s, -es o -ces.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver la regla.' } },
          { kind: 'explore', title: 'El pedido de las dos oficinas', setting: 'Lunes por la mañana. Lucía, en la oficina del centro, llama a Diego, de la oficina del puerto, para hacer la lista del material. (Lucía calls Diego to make the supplies list.)', lines: [
            { who: 'Lucía', text: '¡Hola, Diego! ¿Estás en la oficina? Preparo el pedido de material para las [[dos oficinas|blue]].', en: 'Hi, Diego! Are you at the office? I’m preparing the supplies order for the two offices.' },
            { who: 'Diego', text: 'Sí, estoy aquí. Para el puerto: [[ocho lápices|orange]] y [[dos relojes|teal]] para la pared.', en: 'Yes, I’m here. For the harbour office: eight pencils and two clocks for the wall.' },
            { who: 'Lucía', text: '¿Ocho lápices? ¿De qué color?', en: 'Eight pencils? What colour?' },
            { who: 'Diego', text: '[[Rojos|violet]]. Y [[unas carpetas azules|violet]] para los contratos.', en: 'Red. And some blue folders for the contracts.' },
            { who: 'Lucía', text: 'Perfecto. ¿Y para la sala? ¿[[Unas lámparas|blue]]?', en: 'Perfect. And for the meeting room? Some lamps?' },
            { who: 'Diego', text: 'Sí, [[tres lámparas blancas|violet]]. Las lámparas de ahora están rotas.', en: 'Yes, three white lamps. The lamps we have now are broken.' },
            { who: 'Lucía', text: 'Muy bien. La oficina del centro necesita [[marcadores|teal]] para la pizarra y [[cuadernos|blue]].', en: 'Great. The city-centre office needs markers for the whiteboard and notebooks.' },
            { who: 'Diego', text: '¿Cuadernos grandes o pequeños?', en: 'Big notebooks or small ones?' },
            { who: 'Lucía', text: '[[Cuadernos pequeños|violet]]. Y [[dos mapas|blue]] de la ciudad para la entrada.', en: 'Small notebooks. And two city maps for the entrance.' },
            { who: 'Diego', text: '¿Y las [[luces|orange]] del pasillo? ¿Están bien?', en: 'And the lights in the corridor? Are they OK?' },
            { who: 'Lucía', text: 'Sí, las luces están bien. El pedido sale el lunes que viene.', en: 'Yes, the lights are fine. The order goes out next Monday.' },
            { who: 'Diego', text: '¡Genial! Gracias, Lucía.', en: 'Great! Thanks, Lucía.' },
          ], notes: {
            'dos oficinas': 'Ofici**na** termina en vocal: + **s** → oficinas. «Dos» pide plural.',
            'ocho lápices': 'Lápi**z** termina en z: z → c + **es** → lápi**ces**. La tilde se queda: lá-pi-ces.',
            'dos relojes': 'Relo**j** termina en consonante: + **es** → relojes.',
            'Rojos': 'Diego habla de los lápices (masculino plural): el adjetivo también, **rojos**.',
            'unas carpetas azules': 'Todo el grupo en plural: **unas** (femenino plural) + carpeta**s** + azul**es** (azul termina en consonante).',
            'Unas lámparas': 'Lámpara termina en vocal: + **s**. Femenino plural: **unas**.',
            'tres lámparas blancas': 'Número + nombre + adjetivo, todo femenino plural: lámpara**s** blanca**s**.',
            'marcadores': 'Marcado**r** termina en consonante: + **es** → marcadores.',
            'cuadernos': 'Cuadern**o** termina en vocal: + **s** → cuadernos.',
            'Cuadernos pequeños': 'Masculino plural: cuaderno**s** pequeño**s**. El adjetivo concuerda con el nombre.',
            'dos mapas': 'El mapa es masculino aunque termina en -a (clase 003): **los** mapas. Plural: + s.',
            'luces': 'Lu**z** → lu**ces**. Femenino: **las** luces.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué necesita la oficina del puerto para la pared?', options: ['Tres lámparas.', 'Dos relojes.', 'Dos mapas.'], answer: 1, why: '«Dos relojes para la pared».', en: 'What does the harbour office need for the wall?' },
            { prompt: '¿Por qué necesitan lámparas nuevas?', options: ['Las lámparas de ahora están rotas.', 'Las lámparas son pequeñas.', 'No hay sala.'], answer: 0, why: '«Las lámparas de ahora están rotas».', en: 'Why do they need new lamps?' },
            { prompt: '¿Qué no necesitan en el pedido?', options: ['Marcadores.', 'Luces para el pasillo.', 'Cuadernos.'], answer: 1, why: '«Las luces están bien».', en: 'What do they NOT need in the order?' },
          ] },
        ] },
        { title: 'Ordena el material · Sort the supplies', mascot: '/brand/mascot/kneeling.webp', coach: '¿-s, -es o -ces?', blocks: [
          { kind: 'classify', title: 'La lista de Lucía: ¿qué plural? · Which plural?', categories: [
            { id: 's', label: '+S · vocal', tone: 'blue' },
            { id: 'es', label: '+ES · consonante', tone: 'teal' },
            { id: 'ces', label: 'Z → CES', tone: 'orange' },
          ], items: [
            { text: 'oficina', answer: 's', why: 'Vocal (a): oficinas.' },
            { text: 'reloj', answer: 'es', why: 'Consonante (j): relojes.' },
            { text: 'lápiz', answer: 'ces', why: 'z → c: lápices.' },
            { text: 'carpeta', answer: 's', why: 'Vocal (a): carpetas.' },
            { text: 'marcador', answer: 'es', why: 'Consonante (r): marcadores.' },
            { text: 'luz', answer: 'ces', why: 'z → c: luces.' },
            { text: 'pasillo', answer: 's', why: 'Vocal (o): pasillos.' },
            { text: 'papel', answer: 'es', why: 'Consonante (l): papeles.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué palabras del diálogo llevan los, las, unos o unas?». Tu alumno las busca y dice el grupo completo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero la última letra, después el grupo.',
      steps: [
        { title: 'Elige el plural · Choose the plural', blocks: [
          { kind: 'choice', items: [
            { context: 'Material para la oficina del puerto.', prompt: 'una impresora → dos ___', options: ['impresoraes', 'impresora', 'impresoras'], answer: 2, why: 'Impresora termina en vocal: + s.', en: 'a printer → two printers' },
            { context: 'Para la impresora.', prompt: 'un papel → muchos ___', options: ['papeles', 'papels', 'papel'], answer: 0, why: 'Papel termina en consonante (l): + es.', en: 'a sheet of paper → lots of papers' },
            { context: 'Para el pasillo del centro.', prompt: 'una luz → tres ___', options: ['luzes', 'luz', 'luces'], answer: 2, why: 'z → c + es: luces.', en: 'a light → three lights' },
            { context: 'Cajas para el material.', prompt: 'una caja grande → dos cajas ___', options: ['grandas', 'grandes', 'grande'], answer: 1, why: 'El adjetivo también va en plural: grande + s.', en: 'a big box → two big boxes' },
            { context: 'Para la entrada.', prompt: '___ mapas de la ciudad', options: ['Las', 'El', 'Los'], answer: 2, why: 'Mapa es masculino (el mapa): plural, los mapas.', en: 'the city maps' },
          ] },
        ] },
        { title: '¿Los o las? · Los or las?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: 'El artículo en plural · The plural article', categories: [
            { id: 'los', label: 'LOS · masculino plural', tone: 'violet' },
            { id: 'las', label: 'LAS · femenino plural', tone: 'neutral' },
          ], items: [
            { text: '… lápices', answer: 'los', why: 'El lápiz → los lápices.' },
            { text: '… luces', answer: 'las', why: 'La luz → las luces.' },
            { text: '… problemas', answer: 'los', why: 'El problema (masculino, clase 003) → los problemas.' },
            { text: '… reuniones', answer: 'las', why: 'La reunión → las reuniones.' },
            { text: '… marcadores', answer: 'los', why: 'El marcador → los marcadores.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Necesitamos dos lápiz rojo.', ok: false, options: ['Necesitamos dos lápices rojo.', 'Necesitamos dos lápices rojos.', 'Necesitamos dos lápizes rojos.'], answer: 1, why: '«Dos» pide plural en el nombre y en el adjetivo; z → c: lápices rojos.' },
            { sentence: 'Los relojes blancos están en la caja.', ok: true, why: 'Correcta: los + relojes (+ es) + blancos (+ s).' },
            { sentence: 'Las carpeta azules son para Diego.', ok: false, options: ['La carpetas azules son para Diego.', 'Las carpetas azul son para Diego.', 'Las carpetas azules son para Diego.'], answer: 2, why: 'Todo el grupo en plural: las carpetas azules.' },
            { sentence: 'Unos marcadores negras.', ok: false, options: ['Unos marcador negros.', 'Unos marcadores negros.', 'Unas marcadores negras.'], answer: 1, why: 'El marcador es masculino: unos marcadores negros.' },
            { sentence: 'Las reuniones son los lunes.', ok: true, why: 'Correcta: reunión → reuniones (sin tilde); lunes no cambia.' },
          ] },
        ] },
        { title: 'Completa el chat · Complete the chat', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Marta y Lucía: material para el centro', lines: [
            { who: 'Marta', text: 'Lucía, para el centro necesitamos seis ___.', options: ['cuadernoes', 'cuadernos', 'cuaderno'], answer: 1, why: '«Seis» pide plural; cuaderno termina en vocal: + s.' },
            { who: 'Lucía', text: '¿Seis cuadernos ___?', options: ['grandos', 'grandes', 'grande'], answer: 1, why: 'El adjetivo concuerda: cuadernos grandes.' },
            { who: 'Marta', text: 'Sí. Y dos ___ para la sala.', options: ['relojes', 'relojs', 'reloj'], answer: 0, why: 'Reloj termina en consonante: + es.' },
            { who: 'Lucía', text: '¿Y ___ lápices? ¿Rojos?', options: ['los', 'las', 'el'], answer: 0, why: 'El lápiz es masculino: los lápices.' },
            { who: 'Marta', text: 'No, diez lápices ___, por favor.', options: ['negros', 'negro', 'negras'], answer: 0, why: 'Lápices es masculino plural: negros.' },
            { who: 'Lucía', text: 'Perfecto. Están en la lista.' },
          ] },
        ] },
        { title: 'Construye y escribe · Build and write', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['lápices', 'Diez', 'rojos'], accept: ['Diez lápices rojos'], en: 'Ten red pencils.' },
            { tiles: ['carpetas', 'Las', 'azules', 'están', 'en', 'la', 'mesa'], accept: ['Las carpetas azules están en la mesa', 'En la mesa están las carpetas azules'], en: 'The blue folders are on the table.' },
            { tiles: ['relojes', 'Dos', 'blancos', 'para', 'la', 'sala'], accept: ['Dos relojes blancos para la sala'], en: 'Two white clocks for the meeting room.' },
            { tiles: ['luces', 'Las', 'del', 'pasillo', 'están', 'bien'], accept: ['Las luces del pasillo están bien'], en: 'The corridor lights are fine.' },
          ] },
          { kind: 'rewrite', title: 'Pasa al plural · Make it plural', items: [
            { prompt: 'el lápiz verde', instruction: 'Escribe el grupo en plural. (Write it in the plural.)', accept: ['los lápices verdes'] },
            { prompt: 'una carpeta gris', instruction: 'Escribe el grupo en plural, con «unas». (Use “unas”.)', accept: ['unas carpetas grises'] },
            { prompt: 'la reunión pequeña', instruction: 'Escribe el grupo en plural. (Write it in the plural.)', accept: ['las reuniones pequeñas'] },
            { prompt: 'three black markers', instruction: 'Escribe el grupo en español. (marker = marcador, black = negro)', accept: ['tres marcadores negros'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Diego', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Cambios en el pedido · Changes to the order', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno escribe los números y las cosas que oye («diez lápices…»). Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, apunta los números y las cosas. (Write down the numbers and the things.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Diego', channel: 'MENSAJE DE VOZ · DIEGO, OFICINA DEL PUERTO', src: '/audio/grammar-live/305.mp3',
            before: 'Diego deja un mensaje de voz a Lucía sobre el pedido. ¿Qué cosas crees que va a decir? (Diego leaves Lucía a voice message about the order. Which things do you think he will mention?)',
            gist: { prompt: '¿Para qué llama Diego?', options: ['Para preguntar dónde está Lucía.', 'Para cancelar el pedido.', 'Para cambiar el pedido de material.'], answer: 2, why: '«Hay cambios en el pedido».', en: 'Why is Diego calling?' },
            details: [
              { prompt: '¿Cuántos lápices necesita ahora el puerto?', options: ['Diez, rojos.', 'Ocho, rojos.', 'Diez, negros.'], answer: 0, why: '«Diez lápices rojos, no ocho».', en: 'How many pencils does the harbour office need now?' },
              { prompt: '¿Cómo son los relojes?', options: ['Blancos.', 'Negros.', 'Grandes.'], answer: 0, why: '«Dos relojes blancos para la pared».', en: 'What are the clocks like?' },
              { prompt: '¿Qué necesita Marta?', options: ['Seis carpetas azules y cinco marcadores negros.', 'Cinco sillas grises.', 'Cinco carpetas azules y seis marcadores negros.'], answer: 2, why: '«Cinco carpetas azules y seis marcadores negros».', en: 'What does Marta need?' },
              { prompt: '¿Y las sillas?', options: ['Están bien: no necesitan sillas.', 'Necesitan sillas grises.', 'Están rotas.'], answer: 0, why: '«Las sillas grises están bien: no necesitamos sillas».', en: 'What about the chairs?' },
            ],
            transcript: 'Hola, Lucía. Soy Diego, de la oficina del puerto. Estoy en la sala con la lista. Hay cambios en el pedido. Para nosotros: [[diez lápices rojos|orange]], no ocho. También [[cuatro cuadernos grandes|blue]] y [[dos relojes blancos|teal]] para la pared. [[Las tres lámparas nuevas|violet]], sí, por favor: [[las lámparas viejas|violet]] están rotas. Para la oficina del centro, Marta necesita [[cinco carpetas azules|violet]] y [[seis marcadores negros|teal]]. [[Las sillas grises|violet]] están bien: no necesitamos sillas. Muchas gracias, Lucía. ¡Hasta el lunes!',
            reply: { teacher: 'Tú eres Diego. Tu alumno es Lucía y responde al mensaje: repite la lista nueva en voz alta con números y colores («Diez lápices rojos, cuatro cuadernos grandes…») y termina con «Gracias, Diego».', self: 'Responde a Diego en voz alta: repite la lista nueva con números y colores («Diez lápices rojos…») y termina con «Gracias, Diego». (Repeat the new list aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Preparar el pedido', coach: 'Número, nombre, color. Number, noun, colour.',
      steps: [
        { title: 'Hablamos del pedido · Talking about the order', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas como Lucía. Tu alumno responde con grupos en plural: número + nombre + color. Tú repites el grupo bien dicho y sigues.', self: 'Lee la pregunta, responde en voz alta con grupos en plural (número + nombre + color) y, si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: 'Mira tu mesa: ¿qué cosas ves? · Look at your desk: what things can you see?', followUps: ['¿De qué color son? (What colour are they?)', '¿Son nuevos o viejos? (New or old?)'], phrases: ['[[dos bolígrafos|blue]] azules', '[[tres lápices|orange]]', 'un cuaderno, [[unos papeles|teal]]'], hint: 'Número + nombre en plural + color: «dos bolígrafos azules».', example: 'Dos bolígrafos azules, tres lápices negros, un cuaderno pequeño y unos papeles blancos.', next: 'Ahora, el pedido del puerto.', teacher: 'Si tu alumno dice un singular con número («dos lápiz»), repites el grupo bien: «dos lápices».' },
            { q: 'Eres Diego: ¿qué necesita la oficina del puerto? · You are Diego: what does the harbour office need?', followUps: ['¿Cuántos? (How many?)', '¿Grandes o pequeños? (Big or small?)'], phrases: ['Necesitamos… (we need)', '[[ocho lápices rojos|violet]]', '[[dos relojes blancos|violet]]'], hint: '«Necesitamos» + lista. Cada cosa con número y, si quieres, un color.', example: 'Necesitamos ocho lápices rojos, dos relojes blancos y tres lámparas nuevas.', next: 'Ahora, los colores.' },
            { q: '¿De qué color son las carpetas? ¿Y los marcadores? · What colour are the folders? And the markers?', followUps: ['¿Y las sillas? (And the chairs?)', '¿Y los relojes? (And the clocks?)'], phrases: ['Las carpetas son [[azules|violet]].', 'Los marcadores son [[negros|violet]].', 'Las sillas son [[grises|violet]].'], hint: 'El color concuerda: carpetas azules, marcadores negros, sillas grises.', example: 'Las carpetas son azules y los marcadores son negros. Las sillas son grises.', next: 'Ahora, un juego rápido.' },
            { q: 'Juego: uno → dos. Tú oyes un grupo en singular y lo dices en plural. · Game: you hear a singular group and say it in the plural.', followUps: ['una luz verde → … (a green light)', 'el reloj grande → … (the big clock)', 'la reunión larga → … (the long meeting)'], phrases: ['[[dos luces verdes|violet]]', '[[los relojes grandes|violet]]', '[[las reuniones largas|violet]]'], hint: 'Primero la última letra del nombre (-s, -es, -ces); después el artículo y el adjetivo.', example: 'Una luz verde: dos luces verdes. El reloj grande: los relojes grandes. La reunión larga: las reuniones largas.', next: 'Ahora, tu clase de español.', teacher: 'Di cinco grupos más con cosas reales de la sala; tu alumno responde rápido.' },
            { q: '¿Qué necesitas para tu clase de español? · What do you need for your Spanish class?', followUps: ['¿Cuántos cuadernos? (How many notebooks?)', '¿Lápices o bolígrafos? (Pencils or pens?)'], phrases: ['Necesito… (I need)', '[[dos cuadernos|blue]] pequeños', '[[unos marcadores|teal]] de colores'], hint: '«Necesito» + tus cosas reales, en plural cuando son varias.', example: 'Necesito dos cuadernos pequeños, unos bolígrafos azules y unos marcadores de colores.', next: 'Para terminar, el pedido completo.' },
            { q: 'Ahora llama a Lucía y di el pedido completo para las dos oficinas. · Now call Lucía and read out the full order for both offices.', followUps: ['¿Y para el centro? (And for the centre?)', '¿Las luces están bien? (Are the lights OK?)'], phrases: ['Para el puerto: …', 'Para el centro: …', '[[Las sillas|blue]] están bien.'], hint: 'Dos listas cortas: puerto y centro. Número + nombre + color en cada cosa.', example: 'Hola, Lucía. Para el puerto: diez lápices rojos y dos relojes blancos. Para el centro: cinco carpetas azules y seis marcadores negros. Las sillas están bien.', teacher: 'Responde como Lucía y repite un grupo con un error a propósito («¿dos reloj?»). Tu alumno te corrige.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno es Lucía y te hace las preguntas; tú respondes con algún error para que tu alumno lo corrija.', self: 'Ahora tú eres Lucía: haz las preguntas en voz alta y responde como Diego. (Now you are Lucía: ask and answer as Diego.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El correo del pedido', coach: 'Una lista clara. A clear list.',
      steps: [
        { title: 'El correo a la papelería · The email to the stationery shop', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada grupo: número, nombre en plural y adjetivo en plural. Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Mira cada grupo: ¿todo en plural? (Check every group.)' } },
          { kind: 'write', title: 'Un pedido para dos oficinas · An order for two offices', situation: 'Eres Lucía. Escribe un correo corto a la papelería del barrio con el pedido de material para las dos oficinas. (You are Lucía. Write a short email to the local stationery shop with the supplies order for both offices.)', task: [
            'Saluda y di quién eres con «soy». (Say hello and who you are.)',
            'Escribe la lista de la oficina del centro y la lista del puerto. (One list for each office.)',
            'Usa por lo menos cinco grupos en plural: número + nombre + adjetivo. (At least five plural groups.)',
            'Incluye una palabra con -es y una con -ces. (One -es word and one -ces word.)',
            'Termina con «Gracias» y tu nombre. (Close with thanks and your name.)',
          ], starters: ['Hola:', 'Soy Lucía Morales, de la oficina del centro.', 'Aquí está el pedido para las dos oficinas.', 'Para la oficina del centro: …', 'Para la oficina del puerto: …', 'Gracias. Un saludo, Lucía.'],
            words: ['lápices', 'relojes', 'carpetas', 'cuadernos', 'marcadores', 'lámparas', 'luces', 'rojos / rojas', 'azules', 'blancos / blancas', 'negros / negras', 'grandes', 'pequeños / pequeñas', 'nuevos / nuevas'],
            model: 'Hola: Soy Lucía Morales, de la oficina del centro. Aquí está el pedido para las dos oficinas. Para la oficina del centro: [[diez lápices rojos|orange]], [[seis cuadernos pequeños|blue]] y [[cinco carpetas azules|violet]]. Para la oficina del puerto: [[dos relojes blancos|teal]], [[ocho marcadores negros|teal]] y [[tres lámparas nuevas|violet]]. Las sillas están bien. Gracias. Un saludo, Lucía.',
            minWords: 35,
            checks: [
              { label: 'Soy + quién eres (who you are)', pattern: '(?<!\\p{L})soy(?!\\p{L})', tip: 'Preséntate: «Soy Lucía Morales, de la oficina del centro».' },
              { label: 'Un número + un nombre en plural (number + plural noun)', pattern: '(?<!\\p{L})(?:dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez)\\s+\\p{L}+s(?!\\p{L})', tip: 'Escribe grupos como «dos relojes», «cinco carpetas».' },
              { label: 'Un plural en -ces (lápices, luces)', pattern: '(?<!\\p{L})(?:l[aá]pices|luces)(?!\\p{L})', tip: 'Añade lápices o luces: z → c + es.' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:l[aá]pizes|luzes|relojs|papels|marcadors)(?!\\p{L})', why: 'Revisa el plural: lápices, luces, relojes, papeles, marcadores.' },
              { pattern: '(?<!\\p{L})(?:dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez)\\s+(?:l[aá]piz|luz|reloj|papel|marcador|cuaderno|carpeta|l[aá]mpara|silla|mesa)(?!\\p{L})', why: 'Después de un número (dos, tres…), el nombre va en plural: «dos relojes», «tres carpetas».' },
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
            { tone: 'blue', label: '+S', formula: 'vocal + s', example: 'carpeta → carpetas · cuaderno → cuadernos', caption: 'después de vocal', en: 'after a vowel: add -s' },
            { tone: 'teal', label: '+ES', formula: 'consonante + es', example: 'reloj → relojes · reunión → reuniones', caption: 'después de consonante', en: 'after a consonant: add -es' },
            { tone: 'orange', label: 'Z → CES', formula: '-z → -ces', example: 'lápiz → lápices · luz → luces', caption: 'la z cambia a c', en: 'z changes to c' },
            { tone: 'violet', label: 'TODO EL GRUPO', formula: 'los / las · unos / unas + nombre + adjetivo', example: 'un lápiz rojo → dos lápices rojos', caption: 'todo concuerda', en: 'the whole group agrees' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira la **última letra**: vocal → -s; consonante → -es; z → -ces. Después, pon **todo el grupo** en plural: artículo, nombre y adjetivo. El género no cambia: el mapa → los mapas.', en: 'Look at the last letter: vowel → -s; consonant → -es; z → -ces. Then make the whole group plural: article, noun and adjective. Gender does not change: el mapa → los mapas.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Para la sala: tres ___ nuevas.', options: ['lámparas', 'lámpara', 'lámparaes'], answer: 0, why: 'Vocal + s: lámparas.', en: 'For the meeting room: three new lamps.' },
            { prompt: 'Necesitamos dos ___ para el pasillo.', options: ['relojes', 'relojs', 'reloj'], answer: 0, why: 'Consonante + es: relojes.', en: 'We need two clocks for the corridor.' },
            { prompt: 'Diez ___ verdes, por favor.', options: ['lápices', 'lápizes', 'lápiz'], answer: 0, why: 'z → c + es: lápices.', en: 'Ten green pencils, please.' },
            { prompt: '___ carpetas azules están en la mesa.', options: ['Las', 'Los', 'La'], answer: 0, why: 'Femenino plural: las carpetas.', en: 'The blue folders are on the table.' },
            { prompt: 'Unos papeles ___.', options: ['blancas', 'blancos', 'blanco'], answer: 1, why: 'El papel es masculino: unos papeles blancos.', en: 'Some white papers.' },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'rewrite', title: 'Otra situación: tu casa nueva · New situation: your new flat', items: [
            { prompt: 'una mesa pequeña', instruction: 'Necesitas dos. Escribe: «dos…». (You need two.)', accept: ['dos mesas pequeñas'] },
            { prompt: 'un sofá azul', instruction: 'Necesitas dos. Escribe: «dos…». (You need two.)', accept: ['dos sofás azules'] },
            { prompt: 'una flor roja', instruction: 'Escribe el plural con «unas». (Use “unas”.)', accept: ['unas flores rojas'] },
          ] },
          { kind: 'link', title: 'Siguiente: Clase 006 · Adjetivos calificativos y concordancia', text: 'Hoy pones en plural un grupo corto: «dos lápices rojos». En la clase 006 miras de cerca a los **adjetivos**: cómo describen las cosas y cómo concuerdan en género y número, también con dos nombres juntos.', en: 'Today you made short groups plural: “dos lápices rojos”. In class 006 you look closely at adjectives: how they describe things and how they agree in gender and number, even with two nouns together.', href: '/el-atelier-de-la-concordancia', label: 'Ir a la clase 006' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: tu alumno dice tres cosas de la sala en plural, una con -s, una con -es y una con -ces. Tarea: escribir la lista real de material para su trabajo o su casa, con cinco grupos en plural.' },
        ] },
      ],
    },
  ],
};
