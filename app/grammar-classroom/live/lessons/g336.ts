import type { LiveLesson } from '../types';

/**
 * Lesson 336 · A1 · Identificar y describir un objeto con varias pistas (course unit G036).
 * One scene runs through the class: Monday morning at the reception desk of a
 * language school. Carmen, the receptionist, keeps four lost objects: a big red
 * folder on the desk, a small blue folder and a small red notebook on the shelf,
 * and a big blue notebook in the box. Pablo, a student, comes for his folder and
 * for the notebook of his classmate Lorena; later Lorena leaves a voice message.
 * Content: determinante + sustantivo + adjetivo(s) + ubicación (la carpeta azul
 * pequeña que está en el estante); agreement in gender and number (roja / rojo,
 * azul / azules, grande); the short answer without the noun (la azul, el grande,
 * la que está en la mesa); es + description / está + place (classes 011–013).
 * Everyone speaks with tú; the voice message is a Mexican student (Lorena).
 */
export const lesson: LiveLesson = {
  id: 336,
  level: 'A1',
  title: 'Identificar y describir un objeto con varias pistas',
  subtitle: 'Encontrar el objeto correcto con varias pistas que concuerdan: la carpeta azul pequeña, la que está en el estante.',
  legend: [
    { tone: 'blue', label: 'El objeto: determinante + sustantivo (the thing)' },
    { tone: 'teal', label: 'Cómo es: adjetivo que concuerda (colour, size)' },
    { tone: 'orange', label: 'Dónde está: la ubicación (where it is)' },
    { tone: 'violet', label: 'Respuesta corta sin el nombre: la azul, el que está… (short answer)' },
  ],
  optionNotes: {
    azula: '«Azul» termina en consonante: no cambia con una palabra femenina. La carpeta **azul**, la mochila **azul**.',
    verda: '«Verde» termina en -e: no cambia con una palabra femenina. La bufanda **verde**.',
    grando: '«Grande» termina en -e: es igual con el y con la. El cuaderno **grande**, la carpeta **grande**.',
    'La grisa.': '«Gris» termina en consonante: no cambia en femenino. **La gris**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuatro objetos perdidos', coach: 'La carpeta azul. The blue folder.',
      steps: [
        { title: 'En recepción · At the reception desk', blocks: [
          { kind: 'lead', text: 'Es lunes por la mañana en una academia de idiomas. Carmen trabaja en **recepción**. Hay cuatro **objetos perdidos**: dos carpetas y dos cuadernos. Muchos alumnos preguntan: «¿Está aquí mi carpeta?». Pero ¿cuál es?', en: 'It is Monday morning at a language school. Carmen works at reception. There are four lost objects: two folders and two notebooks. Many students ask: “Is my folder here?” But which one is it?' },
          { kind: 'guide', text: { teacher: 'Tú lees cada fila de la tabla y tu alumno señala el objeto con el dedo en la tabla. Después, tu alumno dice cuántas cosas son rojas.', self: 'Lee la tabla en voz alta. ¿Cuántas cosas son rojas? ¿Cuántas son carpetas? (How many things are red? How many are folders?)' } },
          { kind: 'table', title: 'La mesa de objetos perdidos · The lost-and-found table', head: ['Objeto (thing)', '¿Cómo es? (what is it like?)', '¿Dónde está? (where is it?)'], rows: [
            ['[[la carpeta|blue]] (folder)', '[[roja|teal]] y [[grande|teal]]', '[[en la mesa|orange]] (on the desk)'],
            ['[[la carpeta|blue]]', '[[azul|teal]] y [[pequeña|teal]]', '[[en el estante|orange]] (on the shelf)'],
            ['[[el cuaderno|blue]] (notebook)', '[[rojo|teal]] y [[pequeño|teal]]', '[[en el estante|orange]]'],
            ['[[el cuaderno|blue]]', '[[azul|teal]] y [[grande|teal]]', '[[en la caja|orange]] (in the box)'],
          ], note: 'Una sola pista no basta: hay **dos** carpetas, **dos** cosas rojas y **dos** cosas en el estante. (One clue is not enough.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un alumno dice: «Busco una carpeta». ¿Carmen sabe cuál es?', options: ['Sí, porque hay una carpeta.', 'Sí, es el cuaderno.', 'No, porque hay dos carpetas.'], answer: 2, why: 'Hay dos carpetas: una roja y una azul. Falta otra pista.', en: 'A student says: “I’m looking for a folder.” Does Carmen know which one?' },
            { prompt: '¿Qué hay en la caja?', options: ['El cuaderno rojo.', 'La carpeta roja.', 'El cuaderno azul.'], answer: 2, why: 'En la tabla: el cuaderno azul y grande está en la caja.', en: 'What is in the box?' },
            { prompt: '¿Cuántas cosas están en el estante?', options: ['Dos.', 'Una.', 'Tres.'], answer: 0, why: 'La carpeta azul y el cuaderno rojo están en el estante.', en: 'How many things are on the shelf?' },
          ] },
        ] },
        { title: 'Pista a pista · Clue by clue', mascot: '/brand/mascot/studying.webp', coach: 'Una pista más. One more clue.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ORDEN · objeto + cómo es + dónde está', question: '¿Cómo digo exactamente qué objeto busco?', en: 'How do I say exactly which thing I am looking for?', formula: ['determinante + sustantivo: la carpeta', '+ adjetivo: la carpeta azul', '+ otro adjetivo: la carpeta azul pequeña', '+ ubicación: la carpeta azul que está en el estante'],
            meaning: 'Primero el **objeto** (con la, el, una, mi…), después **cómo es** (color, tamaño) y al final **dónde está**. En español, el color y el tamaño van normalmente **después** del nombre.',
            examples: [
              { es: 'Busco [[mi carpeta|blue]] [[azul|teal]].', en: 'I’m looking for my blue folder.' },
              { es: 'Es [[un cuaderno|blue]] [[rojo|teal]] y [[pequeño|teal]].', en: 'It is a small red notebook.' },
              { es: 'Busco la carpeta azul [[que está en el estante|orange]].', en: 'I’m looking for the blue folder that is on the shelf.' },
            ] },
          { kind: 'table', title: '¿Cuántos objetos son? · How many things match?', head: ['Pistas (clues)', 'Objetos', '¿Basta? (enough?)'], rows: [
            ['una carpeta', 'la roja y la azul', 'No'],
            ['una carpeta [[azul|teal]]', 'solo una', '**Sí**'],
            ['algo [[rojo|teal]] (something red)', 'la carpeta y el cuaderno', 'No'],
            ['algo rojo y [[pequeño|teal]]', 'el cuaderno rojo', '**Sí**'],
            ['algo [[en el estante|orange]]', 'la carpeta azul y el cuaderno rojo', 'No'],
            ['un cuaderno [[en el estante|orange]]', 'el cuaderno rojo', '**Sí**'],
          ], note: 'Cada pista elimina objetos. Cuando queda uno, ya está. (Each clue removes options.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué objeto es «algo azul y grande»?', options: ['El cuaderno azul.', 'El cuaderno rojo.', 'La carpeta azul.'], answer: 0, why: 'Hay dos cosas azules, pero solo el cuaderno azul es grande.', en: 'Which object is “something blue and big”?' },
            { prompt: '¿Cuál es el orden normal?', options: ['la carpeta azul', 'la azul carpeta', 'azul la carpeta'], answer: 0, why: 'Determinante + sustantivo + adjetivo: la carpeta azul.', en: 'What is the normal order?' },
            { prompt: '¿Qué pista basta para la carpeta roja?', options: ['Es roja.', 'Es una carpeta.', 'Está en la mesa.'], answer: 2, why: 'Solo la carpeta roja está en la mesa. «Roja» o «carpeta» no bastan: hay dos.', en: 'Which clue is enough for the red folder?' },
          ] },
        ] },
        { title: 'Roja o rojo · Red, feminine or masculine', mascot: '/brand/mascot/standing.webp', coach: 'La carpeta roja, el cuaderno rojo.', blocks: [
          { kind: 'compare', title: 'Par de contraste · Contrast pair', columns: [
            { tone: 'teal', label: 'LA · femenino', sentence: '[[La carpeta roja|teal]] está en la mesa.', idea: 'Carpeta es femenina: el adjetivo termina en **-a**.', en: 'The red folder is on the desk.' },
            { tone: 'teal', label: 'EL · masculino', sentence: '[[El cuaderno rojo|teal]] está en el estante.', idea: 'Cuaderno es masculino: el adjetivo termina en **-o**.', en: 'The red notebook is on the shelf.' },
          ] },
          { kind: 'table', title: 'El adjetivo copia al nombre · The adjective copies the noun', head: ['Adjetivo', 'el cuaderno…', 'la carpeta…', 'los cuadernos…', 'las carpetas…'], rows: [
            ['rojo (red)', '[[rojo|teal]]', '[[roja|teal]]', '[[rojos|teal]]', '[[rojas|teal]]'],
            ['pequeño (small)', 'pequeño', 'pequeña', 'pequeños', 'pequeñas'],
            ['azul (blue)', '[[azul|teal]]', '[[azul|teal]]', '[[azules|teal]]', '[[azules|teal]]'],
            ['verde (green)', 'verde', 'verde', 'verdes', 'verdes'],
            ['grande (big)', 'grande', 'grande', 'grandes', 'grandes'],
          ], note: 'Adjetivos en **-o**: cuatro formas. Adjetivos en **-e** o en consonante (azul, gris): una forma para el y la, y plural con -s / -es. Es la concordancia de la clase 006. (Adjectives in -o have four forms; in -e or a consonant, two.)' },
          { kind: 'tip', icon: '💡', title: 'El paraguas, el aula', text: 'Mira el **artículo**, no solo la última letra: **el** paraguas (umbrella) es masculino y singular: el paraguas negro. **El** aula es femenina: el aula pequeña.', en: 'Look at the article, not only the last letter: el paraguas is masculine and singular: el paraguas negro. El aula (classroom) is feminine: el aula pequeña.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Busco la mochila ___.', options: ['negro', 'negra', 'negros'], answer: 1, why: 'Mochila es femenina y singular: negra.', en: 'I’m looking for the black backpack.' },
            { prompt: 'Busco unos cuadernos ___.', options: ['azula', 'azules', 'azul'], answer: 1, why: 'Cuadernos es plural: azul + es = azules.', en: 'I’m looking for some blue notebooks.' },
            { prompt: 'Es una carpeta ___.', options: ['grandes', 'grande', 'grando'], answer: 1, why: '«Grande» termina en -e: es igual con la carpeta y con el cuaderno.', en: 'It is a big folder.' },
          ] },
        ] },
        { title: '¿Cuál? La azul · Which one? The blue one', mascot: '/brand/mascot/portrait.webp', coach: 'La azul = la carpeta azul.', blocks: [
          { kind: 'lead', text: 'Cuando la otra persona ya sabe de qué objeto hablas, no repites el nombre. Dices **el** o **la** + una pista: «¿Cuál es tu carpeta? — **La azul**». También: «**La que está** en el estante». El artículo dice qué objeto es: **la** = la carpeta, **el** = el cuaderno.', en: 'When the other person already knows what you are talking about, you don’t repeat the noun. You say el or la + one clue: “Which is your folder? — The blue one.” Also: “The one that is on the shelf.” The article tells you which thing it is: la = the folder, el = the notebook.' },
          { kind: 'table', title: 'Tres pares mínimos · Three minimal pairs', head: ['A', 'B', 'La diferencia (the difference)'], rows: [
            ['la carpeta [[roja|teal]]', 'el cuaderno [[rojo|teal]]', 'el adjetivo copia el género del nombre'],
            ['[[la roja|violet]]', '[[el rojo|violet]]', 'sin nombre: la = la carpeta, el = el cuaderno'],
            ['La carpeta [[es azul|teal]].', 'La carpeta [[está en el estante|orange]].', '**es** = cómo es · **está** = dónde está (clases 011–013)'],
          ] },
          { kind: 'decide', title: 'Antes de responder · Before you answer', steps: [
            { q: '¿La otra persona ya sabe qué tipo de objeto es? (Does the other person already know what kind of thing it is?)', yes: 'Respuesta corta: **la azul**, **el pequeño**, **la que está en la mesa**.', no: 'next' },
            { q: '¿Hay varios objetos parecidos? (Are there several similar things?)', yes: 'Nombre + dos pistas: **la carpeta azul pequeña que está en el estante**.', no: 'Nombre + una pista basta: **el cuaderno rojo**.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es tu cuaderno? — ___.', options: ['Los rojos.', 'La roja.', 'El rojo.'], answer: 2, why: 'Cuaderno es masculino y singular: el rojo.', en: 'Which is your notebook? — The red one.' },
            { prompt: '¿Cuál es tu carpeta? — La que ___ en la mesa.', options: ['es', 'hay', 'está'], answer: 2, why: 'Para la ubicación de un objeto concreto usas «está».', en: 'Which is your folder? — The one that is on the desk.' },
            { prompt: '«La que está en el estante» es…', options: ['la carpeta azul.', 'la carpeta roja.', 'el cuaderno rojo.'], answer: 0, why: 'En el estante hay una carpeta y un cuaderno. «La» = la carpeta: la azul.', en: '“The one (fem.) that is on the shelf” is…' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Concuerda? Does it agree?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Es el orden, la concordancia o es / está?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Necesito la carpeta rojo.', right: 'Necesito la carpeta roja.', why: 'Carpeta es femenina: el adjetivo también, **roja**. (The adjective agrees with the noun.)' },
            { wrong: 'Busco la azul carpeta.', right: 'Busco la carpeta azul.', why: 'El color va **después** del nombre. (Colour after the noun.)' },
            { wrong: 'Es una mochila azula.', right: 'Es una mochila azul.', why: '«Azul» no tiene forma en -a: es igual con el y con la. (Azul has one form for both genders.)' },
            { wrong: 'Los cuadernos rojo están aquí.', right: 'Los cuadernos rojos están aquí.', why: 'Plural: el adjetivo también lleva **-s**. (Plural noun, plural adjective.)' },
            { wrong: '¿Cuál? — La que es en la mesa.', right: '¿Cuál? — La que está en la mesa.', why: 'Para dónde está una cosa, **estar**. (Location → estar.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Busco la bufanda blanca.', 'Busco la bufanda blanco.', 'Busco la blanca bufanda.'], answer: 0, why: 'Orden nombre + adjetivo, y concordancia: la bufanda blanca.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['El cuaderno grande está en la caja.', 'El cuaderno grande es en la caja.', 'El grande cuaderno está en la caja.'], answer: 0, why: 'Nombre + adjetivo, y ubicación con «está».', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno elige un objeto real de la mesa o de la habitación y lo describe con tres pistas: nombre, color y dónde está. Tú adivinas cuál es.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Pablo busca su carpeta', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En recepción · At reception', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carmen y tu alumno es Pablo. Después, tu alumno toca cada palabra marcada y dice qué pista da.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver por qué se usa. (Read aloud, then tap the marks.)' } },
          { kind: 'explore', title: '¿Cuál es tu carpeta?', setting: 'Lunes, nueve de la mañana. Recepción de la academia. Pablo llega antes de su clase. (Monday, 9 a.m. The school reception. Pablo arrives before his class.)', lines: [
            { who: 'Carmen', text: 'Buenos días, Pablo. ¿Qué necesitas?', en: 'Good morning, Pablo. What do you need?' },
            { who: 'Pablo', text: 'Hola, Carmen. Busco [[mi carpeta|blue]]. No está en mi mochila.', en: 'Hi, Carmen. I’m looking for my folder. It isn’t in my backpack.' },
            { who: 'Carmen', text: 'Pues aquí hay [[dos carpetas|blue]] y dos cuadernos. ¿Cómo es tu carpeta?', en: 'Well, there are two folders and two notebooks here. What is your folder like?' },
            { who: 'Pablo', text: 'Es [[azul|teal]] y [[pequeña|teal]]. Tiene mis apuntes de clase.', en: 'It’s blue and small. It has my class notes.' },
            { who: 'Carmen', text: 'Mira: hay [[una carpeta roja|teal]] [[en la mesa|orange]] y [[una carpeta azul|teal]] [[en el estante|orange]].', en: 'Look: there is a red folder on the desk and a blue folder on the shelf.' },
            { who: 'Pablo', text: '[[La azul|violet]], por favor. [[La que está en el estante|violet]].', en: 'The blue one, please. The one on the shelf.' },
            { who: 'Carmen', text: '¿Esta? ¿[[La carpeta azul pequeña|teal]]?', en: 'This one? The small blue folder?' },
            { who: 'Pablo', text: '¡Sí, es esta! Gracias. Ah, mi compañera Lorena busca [[su cuaderno|blue]]. Es rojo.', en: 'Yes, it’s this one! Thanks. Oh, my classmate Lorena is looking for her notebook. It’s red.' },
            { who: 'Carmen', text: 'Hay [[un cuaderno rojo|teal]] y un cuaderno azul. ¿Es grande o pequeño?', en: 'There is a red notebook and a blue notebook. Is it big or small?' },
            { who: 'Pablo', text: 'Pequeño. Es [[un cuaderno rojo pequeño|teal]], con una foto de Lima.', en: 'Small. It’s a small red notebook, with a photo of Lima.' },
            { who: 'Carmen', text: 'Entonces es [[el que está en el estante|violet]]. [[El grande|violet]] es azul y está [[en la caja|orange]].', en: 'Then it’s the one on the shelf. The big one is blue and it’s in the box.' },
            { who: 'Pablo', text: 'Perfecto. Lorena está en clase: yo llevo el cuaderno. ¡Hasta luego!', en: 'Perfect. Lorena is in class: I’ll take the notebook. See you later!' },
          ], notes: {
            'mi carpeta': 'Determinante + sustantivo: **mi** carpeta. Es la primera pista, pero no basta: hay dos carpetas.',
            'dos carpetas': 'Carmen cuenta: **dos** carpetas. Por eso necesita otra pista.',
            azul: 'Color: **azul** no cambia con la carpeta (femenina). No existe «azula».',
            'pequeña': 'Tamaño: carpeta es femenina, entonces **pequeña**, con -a.',
            'una carpeta roja': 'Nombre + color: **roja** con -a, porque carpeta es femenina.',
            'en la mesa': 'Ubicación: **en** + la mesa. Es la pista de lugar.',
            'una carpeta azul': 'Nombre + color. Ahora «carpeta» + «azul» identifica solo un objeto.',
            'en el estante': 'Ubicación: en el estante (on the shelf).',
            'La azul': 'Respuesta corta: **la** = la carpeta. No repite «carpeta» porque los dos ya saben de qué hablan.',
            'La que está en el estante': '**La que está** + lugar = the one that is… Con «está», porque es una ubicación.',
            'La carpeta azul pequeña': 'Nombre + dos adjetivos: color y tamaño. Los dos concuerdan con «carpeta».',
            'su cuaderno': 'Determinante + sustantivo: **su** cuaderno = el cuaderno de Lorena.',
            'un cuaderno rojo': 'Cuaderno es masculino: **rojo**, con -o. Compara: la carpeta roja.',
            'un cuaderno rojo pequeño': 'Tres pistas que concuerdan: un cuaderno (masc.) + rojo + pequeño.',
            'el que está en el estante': '**El** = el cuaderno. En el estante también está la carpeta azul, pero «el» dice que es el cuaderno.',
            'El grande': 'Respuesta corta: **el grande** = el cuaderno grande. «Grande» es igual con el y con la.',
            'en la caja': 'Ubicación: en la caja (in the box).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cómo es la carpeta de Pablo?', options: ['Azul y pequeña.', 'Azul y grande.', 'Roja y grande.'], answer: 0, why: '«Es azul y pequeña».', en: 'What is Pablo’s folder like?' },
            { prompt: '¿Dónde está el cuaderno de Lorena?', options: ['En el estante.', 'En la caja.', 'En la mesa.'], answer: 0, why: '«Entonces es el que está en el estante».', en: 'Where is Lorena’s notebook?' },
            { prompt: '¿Qué hay en la caja?', options: ['Una carpeta azul.', 'Un cuaderno azul grande.', 'Un cuaderno rojo pequeño.'], answer: 1, why: '«El grande es azul y está en la caja».', en: 'What is in the box?' },
          ] },
        ] },
        { title: '¿Qué objeto es? · Which thing is it?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: 'Respuestas cortas · Short answers', categories: [
            { id: 'cr', label: 'la carpeta roja (mesa)', tone: 'teal' },
            { id: 'ca', label: 'la carpeta azul (estante)', tone: 'teal' },
            { id: 'kr', label: 'el cuaderno rojo (estante)', tone: 'teal' },
            { id: 'ka', label: 'el cuaderno azul (caja)', tone: 'teal' },
          ], items: [
            { text: 'La roja.', answer: 'cr', why: '«La» = una carpeta; la carpeta roja es la única carpeta roja.' },
            { text: 'El azul.', answer: 'ka', why: '«El» = un cuaderno; el cuaderno azul.' },
            { text: 'La que está en el estante.', answer: 'ca', why: 'En el estante, la única cosa femenina es la carpeta azul.' },
            { text: 'El pequeño.', answer: 'kr', why: 'Los cuadernos: el rojo es pequeño, el azul es grande.' },
            { text: 'La grande.', answer: 'cr', why: 'Las carpetas: la roja es grande, la azul es pequeña.' },
            { text: 'El que está en la caja.', answer: 'ka', why: 'En la caja está el cuaderno azul.' },
            { text: 'La pequeña.', answer: 'ca', why: 'La carpeta pequeña es la azul.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Por qué "la que está en el estante" es la carpeta y no el cuaderno?». Respuesta esperada: «la» es femenino, como carpeta.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿El o la? ¿-o, -a o igual? Which form?',
      steps: [
        { title: 'Más objetos perdidos · More lost things', blocks: [
          { kind: 'choice', items: [
            { context: 'Una alumna busca su bufanda. (scarf: la bufanda)', prompt: 'Busco una bufanda ___.', options: ['verdes', 'verde', 'verda'], answer: 1, why: '«Verde» termina en -e: no cambia con una palabra femenina. Singular: verde.', en: 'I’m looking for a green scarf.' },
            { context: 'Un alumno busca su paraguas. (umbrella: el paraguas)', prompt: 'Busco mi paraguas ___ y grande.', options: ['negra', 'negros', 'negro'], answer: 2, why: '**El** paraguas es masculino y singular (la -s es del nombre): negro.', en: 'I’m looking for my big black umbrella.' },
            { context: 'Las llaves de una profesora. (keys: las llaves)', prompt: 'Busco unas llaves ___.', options: ['pequeñas', 'pequeña', 'pequeños'], answer: 0, why: 'Llaves es femenino y plural: pequeñ**as**.', en: 'I’m looking for some small keys.' },
            { context: 'Hay una chaqueta gris y una chaqueta negra. (jacket: la chaqueta)', prompt: '¿Cuál es tu chaqueta? — ___', options: ['La grisa.', 'El gris.', 'La gris.'], answer: 2, why: 'Respuesta corta con **la** (la chaqueta). «Gris» no cambia en femenino.', en: 'Which is your jacket? — The grey one.' },
            { context: 'Hay dos mochilas: una en la silla y otra en el suelo.', prompt: 'Mi mochila es ___ que está en la silla.', options: ['el', 'las', 'la'], answer: 2, why: 'Mochila es femenina y singular: **la** que está…', en: 'My backpack is the one that is on the chair.' },
            { context: 'Un alumno busca sus guantes. (gloves: los guantes)', prompt: 'Son unos guantes ___.', options: ['blancas', 'blancos', 'blanco'], answer: 1, why: 'Guantes es masculino y plural: blanc**os**.', en: 'They are some white gloves.' },
          ] },
        ] },
        { title: '¿Qué forma de «negro»? · Which form of “negro”?', blocks: [
          { kind: 'classify', title: 'Negro, negra, negros o negras', categories: [
            { id: 'o', label: 'negro (el)', tone: 'teal' },
            { id: 'a', label: 'negra (la)', tone: 'teal' },
            { id: 'os', label: 'negros (los)', tone: 'teal' },
            { id: 'as', label: 'negras (las)', tone: 'teal' },
          ], items: [
            { text: 'el paraguas ___', answer: 'o', why: 'El paraguas: masculino singular → negro.' },
            { text: 'la mochila ___', answer: 'a', why: 'La mochila: femenino singular → negra.' },
            { text: 'las llaves ___', answer: 'as', why: 'Las llaves: femenino plural → negras.' },
            { text: 'los guantes ___', answer: 'os', why: 'Los guantes: masculino plural → negros.' },
            { text: 'las carpetas ___', answer: 'as', why: 'Las carpetas: femenino plural → negras.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Busco la carpeta rojo que está en la mesa.', ok: false, options: ['Busco la roja carpeta que está en la mesa.', 'Busco la carpeta rojos que está en la mesa.', 'Busco la carpeta roja que está en la mesa.'], answer: 2, why: 'Carpeta es femenina y singular: **roja**, después del nombre.' },
            { sentence: 'Mi cuaderno es pequeño y está en el estante.', ok: true, why: 'Correcta: pequeño concuerda con cuaderno, y la ubicación va con «está».' },
            { sentence: 'Es una azul mochila.', ok: false, options: ['Es una mochila azula.', 'Es un mochila azul.', 'Es una mochila azul.'], answer: 2, why: 'El color va después del nombre, y «azul» no cambia: una mochila **azul**.' },
            { sentence: '¿Cuál? — La que es en la caja.', ok: false, options: ['La es en la caja.', 'La que está en la caja.', 'La que estás en la caja.'], answer: 1, why: 'Ubicación de un objeto: **está**. Con la, tercera persona: está, no estás.' },
            { sentence: 'El paraguas negro está al lado de la puerta.', ok: true, why: 'Correcta: el paraguas es masculino singular, entonces negro.' },
          ] },
        ] },
        { title: 'Una llamada a recepción · A call to reception', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Diego llama a Carmen · Diego calls Carmen', lines: [
            { who: 'Diego', text: 'Hola, Carmen. Busco mi chaqueta. Es negra y ___.', options: ['grande', 'grandes', 'grando'], answer: 0, why: '«Grande» termina en -e: igual con la chaqueta. Singular: grande.' },
            { who: 'Carmen', text: 'Aquí hay dos chaquetas ___: una en la silla y otra en la caja.', options: ['negra', 'negros', 'negras'], answer: 2, why: 'Dos chaquetas: femenino plural, **negras**.' },
            { who: 'Diego', text: 'Creo que mi chaqueta es ___ que está en la silla.', options: ['lo', 'el', 'la'], answer: 2, why: 'Chaqueta es femenina: **la** que está…' },
            { who: 'Carmen', text: '¿Esta? Es pequeña y tiene un nombre: «Sara».' },
            { who: 'Diego', text: 'No, esa no. Mi chaqueta no es ___.', options: ['pequeñas', 'pequeña', 'pequeño'], answer: 1, why: 'Mi chaqueta: femenino singular, pequeñ**a**.' },
            { who: 'Carmen', text: 'Entonces es ___ en la caja. Es grande.', options: ['el que está', 'la que está', 'la que es'], answer: 1, why: 'La chaqueta → **la**; ubicación → **está**.' },
            { who: 'Diego', text: '¡Sí, es esa! Gracias, Carmen.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['carpeta', 'Busco', 'grande', 'la', 'roja'], accept: ['Busco la carpeta roja grande'], en: 'I’m looking for the big red folder.' },
            { tiles: ['rojo', 'está', 'El cuaderno', 'en el estante'], accept: ['El cuaderno rojo está en el estante', 'En el estante está el cuaderno rojo'], en: 'The red notebook is on the shelf.' },
            { tiles: ['es', 'que', 'Mi mochila', 'la', 'en la silla', 'está'], accept: ['Mi mochila es la que está en la silla'], en: 'My backpack is the one on the chair.' },
          ] },
        ] },
        { title: 'Cambia el objeto · Change the object', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase otra vez · Write it again', items: [
            { prompt: 'El cuaderno rojo es pequeño.', instruction: 'Cambia «el cuaderno» por «la carpeta». (folder)', accept: ['La carpeta roja es pequeña'] },
            { prompt: 'Busco una bufanda blanca.', instruction: 'Escribe la frase en plural: unas bufandas. (plural)', accept: ['Busco unas bufandas blancas', 'Busco dos bufandas blancas'] },
            { prompt: '¿Cuál es tu carpeta? — Mi carpeta es la carpeta azul.', instruction: 'Escribe la respuesta corta, sin repetir «carpeta». (short answer)', accept: ['La azul', 'Es la azul', 'Mi carpeta es la azul'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Lorena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Lorena busca dos cosas · Lorena is looking for two things', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada objeto con sus pistas (color, tamaño, lugar). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada objeto con su color, su tamaño y su lugar. (Listen once for the gist, then note each object and its clues.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Lorena', channel: 'MENSAJE DE VOZ · RECEPCIÓN DE LA ACADEMIA, LUNES', src: '/audio/grammar-live/336.mp3',
            before: 'Lorena tiene su cuaderno rojo, pero hoy busca otras cosas. Deja un mensaje de voz para Carmen. ¿Qué objetos crees que describe? (Lorena has her red notebook back, but she is looking for other things. What objects do you think she describes?)',
            gist: { prompt: '¿Para qué llama Lorena?', options: ['Para describir dos objetos perdidos.', 'Para cambiar de clase.', 'Para buscar su cuaderno rojo.'], answer: 0, why: '«Ahora busco otras dos cosas»: una bufanda y unas llaves. El cuaderno ya está con Pablo.', en: 'Why does Lorena call?' },
            details: [
              { prompt: '¿Cómo es la bufanda de Lorena?', options: ['Blanca y larga.', 'Verde y larga.', 'Verde y pequeña.'], answer: 1, why: '«Es una bufanda verde y larga».', en: 'What is Lorena’s scarf like?' },
              { prompt: '¿Dónde está la bufanda, probablemente?', options: ['En la mesa del aula dos.', 'En la silla que está al lado de la ventana.', 'En la caja de recepción.'], answer: 1, why: '«En el aula cuatro, en la silla que está al lado de la ventana».', en: 'Where is the scarf, probably?' },
              { prompt: '¿De quién es la bufanda verde pequeña?', options: ['De Sara.', 'De Carmen.', 'De Lorena.'], answer: 0, why: '«La bufanda verde pequeña es de mi compañera Sara».', en: 'Whose is the small green scarf?' },
              { prompt: '¿Cómo son las llaves?', options: ['Pequeñas, con un llavero amarillo.', 'Pequeñas, sin llavero.', 'Grandes, con un llavero azul.'], answer: 0, why: '«Unas llaves pequeñas con un llavero amarillo». (llavero = key ring)', en: 'What are the keys like?' },
            ],
            transcript: 'Hola, Carmen, soy Lorena, del grupo de las diez. Muchas gracias: Pablo tiene [[mi cuaderno rojo|teal]]. Ahora busco otras dos cosas. Primero, mi bufanda. Es [[una bufanda verde y larga|teal]]. Creo que está en el aula cuatro, en [[la silla que está al lado de la ventana|orange]]. [[La bufanda verde pequeña|teal]] no es mi bufanda: es de mi compañera Sara. Segundo, busco [[unas llaves pequeñas|teal]] con [[un llavero amarillo|teal]]. Son las llaves de mi casa. ¡Es importante! Mañana paso por recepción a las nueve y media. ¡Muchas gracias y hasta mañana!',
            reply: { teacher: 'Tú eres Lorena. Tu alumno es Carmen y responde: qué objetos hay en recepción y cómo son, por ejemplo «Aquí hay dos bufandas verdes: la larga y la pequeña».', self: 'Eres Carmen. Responde a Lorena en voz alta: «Hola, Lorena. Aquí hay una bufanda verde… Las llaves pequeñas están en…». (Answer as Carmen: describe what you have at reception.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Cuál es? Describe y adivina', coach: 'Nombre, cómo es, dónde está.',
      steps: [
        { title: 'Tus objetos · Your things', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Carmen, en recepción, y preguntas con tú. Tu alumno responde con frases completas: nombre + color o tamaño + lugar. Tú repites su frase bien dicha y sigues con las repreguntas.', self: 'Imagina que estás en la recepción de la academia. Lee la pregunta, responde en voz alta y después compara con el ejemplo. (Answer aloud, then compare.)' } },
          { kind: 'talk', cards: [
            { q: 'No encuentras tu mochila. ¿Cómo es? · You can’t find your backpack. What is it like?', followUps: ['¿Es grande o pequeña? (Big or small?)', '¿De qué color es? (What colour is it?)'], phrases: ['Es [[una mochila|blue]] [[negra|teal]].', 'Es [[pequeña|teal]] / [[grande|teal]].', 'Tiene [[un llavero|blue]] [[rojo|teal]].'], hint: 'Mochila es femenina: negra, pequeña, roja. Azul, verde y grande no cambian.', example: 'Es una mochila azul y pequeña. Tiene un llavero rojo.', next: 'Ahora, Carmen tiene dos mochilas.' },
            { q: 'Carmen tiene dos mochilas. ¿Cuál es la tuya? · Carmen has two backpacks. Which one is yours?', followUps: ['¿La azul o la negra? (The blue one or the black one?)', '¿La grande o la pequeña? (The big one or the small one?)'], phrases: ['[[La azul|violet]].', '[[La pequeña|violet]].', '[[La que está en la silla|violet]].'], hint: 'Respuesta corta: la + adjetivo, o la que está + lugar.', example: 'La azul. La pequeña, la que está en la silla.', next: 'Ahora, un objeto de tu casa.' },
            { q: '¿Dónde está tu teléfono ahora? ¿Y tus llaves? · Where is your phone now? And your keys?', followUps: ['¿Cómo es tu teléfono? (What is it like?)', '¿Tus llaves son grandes o pequeñas? (Big or small?)'], phrases: ['[[Mi teléfono|blue]] [[está en la mesa|orange]].', '[[Mis llaves|blue]] son [[pequeñas|teal]].', 'Están [[en mi mochila|orange]].'], hint: 'Cómo es → es / son. Dónde está → está / están.', example: 'Mi teléfono es negro y está en la mesa. Mis llaves son pequeñas y están en mi mochila.', next: 'Ahora, un juego.' },
            { q: 'Juego: piensa en un objeto de esta habitación. Da tres pistas. · Game: think of an object in this room. Give three clues.', followUps: ['¿Es grande o pequeño? (Big or small?)', '¿Está cerca de la ventana? (Near the window?)', '¿Es el libro rojo? (Is it the red book?)'], phrases: ['Es [[un objeto|blue]] [[blanco|teal]].', 'Es [[pequeño|teal]].', '[[Está al lado de|orange]]…'], hint: 'Primera pista: el color. Segunda: el tamaño. Tercera: el lugar.', example: 'Es un objeto blanco y pequeño. Está en la mesa, al lado del libro. ¿Qué es? — ¡La taza blanca!', next: 'Ahora, cambia el objeto.', teacher: 'Este es el punto de la clase: tú adivinas con una respuesta corta («¿La taza blanca? ¿La que está en la mesa?») y tu alumno confirma o da otra pista.' },
            { q: 'Ahora tú adivinas. Yo pienso en un objeto: «Es rojo y grande». ¿Qué preguntas? · Now you guess. What do you ask?', followUps: ['¿Qué otra pista necesitas? (What other clue do you need?)', '¿Cómo preguntas por el lugar? (How do you ask about the place?)'], phrases: ['¿[[Dónde está|orange]]?', '¿Es [[el libro rojo|teal]]?', '¿Es [[el que está en la mesa|violet]]?'], hint: 'Pregunta por el lugar con «¿dónde está?» y confirma con «¿es el… / es la…?».', example: '¿Dónde está? ¿En el estante? ¿Es el libro rojo? ¿El que está en el estante?', next: 'Para terminar, un objeto importante.' },
            { q: 'Describe un objeto importante para ti: ¿cómo es y dónde está ahora? · Describe a thing that is important to you.', followUps: ['¿De qué color es? (What colour?)', '¿Es nuevo o viejo? (New or old?)', '¿Dónde está ahora? (Where is it now?)'], phrases: ['[[Mi objeto importante|blue]] es…', 'Es [[un reloj|blue]] [[viejo|teal]] y [[pequeño|teal]].', '[[Está en mi casa|orange]], en…'], hint: 'Determinante + nombre + dos adjetivos + lugar.', example: 'Mi objeto importante es un reloj viejo y pequeño. Es gris. Es de mi abuelo. Está en mi casa, en la mesa de mi habitación.', teacher: 'Pregunta una vez «¿Cuál? ¿El grande?», para que tu alumno corrija con una respuesta corta: «No, el pequeño». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Carmen y pregunta «¿Cómo es tu…?», «¿Cuál es?» y «¿Dónde está?», y tú respondes con pistas.', self: 'Ahora haz tú las preguntas en voz alta («¿Cómo es?», «¿Cuál es?», «¿Dónde está?») y responde como un alumno de la academia. (Now ask the questions and answer as a student.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje a recepción', coach: 'Nombre, dos pistas y el lugar.',
      steps: [
        { title: 'Tu mensaje · Your message', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada adjetivo: ¿está después del nombre y concuerda con él? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira cada adjetivo: ¿concuerda con su nombre? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'No encuentro mi… · I can’t find my…', situation: 'Eres alumno o alumna de la academia. No encuentras un objeto. Escribes un mensaje a Carmen, en recepción, para describir el objeto y decir dónde está, probablemente. (You can’t find something at the school. Write to Carmen at reception: describe it and say where it probably is.)', task: [
            'Di qué objeto buscas, con determinante + nombre: «mi mochila», «una bufanda». (The object.)',
            'Da dos pistas de cómo es: color, tamaño… (Two clues: colour, size.)',
            'Di dónde está, probablemente: «Creo que está en…». (Where it probably is.)',
            'Separa tu objeto de otro parecido con una respuesta corta: «la pequeña», «el que está…». (Tell it apart from a similar one.)',
          ], starters: ['Hola, Carmen:', 'Soy…, del grupo de las…', 'No encuentro mi…', 'Es un / una… … y …', 'Creo que está en el aula…, en…', 'No es la… / el…: mi … es la… / el…', 'Mañana paso por recepción a las…', 'Muchas gracias.'],
            words: ['la mochila', 'la bufanda', 'la chaqueta', 'el paraguas', 'el cuaderno', 'las llaves', 'rojo / roja', 'negro / negra', 'azul', 'verde', 'gris', 'grande', 'pequeño / pequeña', 'en la silla', 'al lado de la ventana', 'la que está…'],
            model: 'Hola, Carmen: soy Ana, del grupo de las seis. No encuentro [[mi mochila|blue]]. Es [[una mochila negra|teal]] y [[pequeña|teal]], con [[un llavero rojo|teal]]. Creo que está en el aula dos, en [[la silla que está al lado de la puerta|orange]]. En el aula también hay una mochila negra grande, pero no es mi mochila: mi mochila es [[la pequeña|violet]]. Mañana paso por recepción a las cinco. Muchas gracias. Ana.',
            minWords: 35,
            checks: [
              { label: 'Un objeto con su adjetivo (determinante + nombre + adjetivo)', pattern: '(?<!\\p{L})(?:una?|la|el|mi|mis|unos|unas|los|las)\\s+\\p{L}+\\s+(?:roj|negr|blanc|amarill|azul|verde|gris|pequeñ|grande|larg)\\p{L}*', tip: 'Describe el objeto: «una mochila negra», «mi paraguas grande».' },
              { label: 'Dónde está: «está en…», «está al lado de…»', pattern: '(?<!\\p{L})está\\s+(?:en|al\\s+lado|cerca|debajo|encima)(?!\\p{L})', tip: 'Di el lugar con «está»: «Creo que está en el aula dos».' },
              { label: 'Una respuesta corta: la pequeña, el rojo, la que está…', pattern: '(?<!\\p{L})(?:el|la|los|las)\\s+(?:que\\s+está|roj[oa]s?|negr[oa]s?|blanc[oa]s?|amarill[oa]s?|azul(?:es)?|verdes?|gris(?:es)?|pequeñ[oa]s?|grandes?|larg[oa]s?)(?!\\p{L})', tip: 'Separa tu objeto de otro parecido: «mi mochila es la pequeña», «es la que está en la silla».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:la|una|mi)\\s+\\p{L}+a\\s+(?:rojo|negro|blanco|amarillo|pequeño|largo)(?!\\p{L})', why: 'Una palabra femenina en -a necesita el adjetivo en -a: «la mochila negr**a**», no «negro».' },
              { pattern: '(?<!\\p{L})(?:el|un)\\s+\\p{L}+o\\s+(?:roja|negra|blanca|amarilla|pequeña|larga)(?!\\p{L})', why: 'Una palabra masculina en -o necesita el adjetivo en -o: «el cuaderno roj**o**».' },
              { pattern: '(?<!\\p{L})(?:la|el|una|un|mi)\\s+(?:roja|rojo|negra|negro|blanca|blanco|azul|verde|amarilla|amarillo)\\s+(?:carpeta|cuaderno|mochila|bufanda|chaqueta|paraguas|libro|bolsa|llavero)(?!\\p{L})', why: 'El color va después del nombre: «la mochila negra», no «la negra mochila».' },
              { pattern: '(?<!\\p{L})(?:azula|verda|grisa|grandea)(?!\\p{L})', why: 'Azul, verde, gris y grande no cambian en femenino: «la mochila azul».' },
              { pattern: '(?<!\\p{L})que\\s+es\\s+en(?!\\p{L})', why: 'Para el lugar, «está»: «la que **está** en la silla».' },
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
            { tone: 'blue', label: 'ORDEN · objeto primero', formula: 'determinante + sustantivo + adjetivo(s) + ubicación', example: 'Busco la carpeta azul pequeña que está en el estante.', caption: 'el color y el tamaño van después del nombre', en: 'colour and size go after the noun' },
            { tone: 'teal', label: 'CONCORDANCIA · roja / rojo', formula: 'la carpeta roja · el cuaderno rojo · las llaves rojas · la mochila azul · el cuaderno grande', example: 'Es una bufanda verde y larga.', caption: '-o cambia; -e y consonante no cambian en femenino', en: '-o changes; -e and consonants don’t change for feminine' },
            { tone: 'orange', label: 'LUGAR · está', formula: 'está en la mesa · la que está en el estante', example: 'El cuaderno azul está en la caja.', caption: 'es = cómo es · está = dónde está', en: 'es = what it is like · está = where it is' },
            { tone: 'violet', label: 'RESPUESTA CORTA · el / la + pista', formula: 'la azul · el grande · la que está en la mesa', example: '¿Cuál es tu carpeta? — La azul.', caption: 'el artículo dice qué objeto es', en: 'the article tells you which thing it is' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Una pista casi nunca basta. Da **varias pistas que concuerdan** con el nombre: la carpeta **azul pequeña**, el cuaderno **rojo pequeño**. Y cuando la otra persona ya sabe de qué hablas, quita el nombre y deja el artículo: **la azul**, **el que está en la caja**.', en: 'One clue is almost never enough. Give several clues that agree with the noun: la carpeta azul pequeña, el cuaderno rojo pequeño. And when the other person already knows what you mean, drop the noun and keep the article: la azul, el que está en la caja.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Necesito la carpeta ___.', options: ['roja', 'rojas', 'rojo'], answer: 0, why: 'La carpeta: femenino singular, roja.', en: 'I need the red folder.' },
            { prompt: 'Busco unos libros ___.', options: ['azul', 'azulos', 'azules'], answer: 2, why: 'Libros es plural; azul + es = azules.', en: 'I’m looking for some blue books.' },
            { prompt: '¿Cuál es tu paraguas? — ___', options: ['La negra.', 'El negro.', 'Los negros.'], answer: 1, why: 'El paraguas: masculino singular, el negro.', en: 'Which is your umbrella? — The black one.' },
            { prompt: 'Mi bufanda es la que ___ al lado de la ventana.', options: ['es', 'está', 'hay'], answer: 1, why: 'Ubicación de un objeto concreto: está.', en: 'My scarf is the one that is next to the window.' },
            { prompt: '¿Cuál es correcta?', options: ['Es una pequeña gris chaqueta.', 'Es una chaqueta grisa y pequeña.', 'Es una chaqueta gris y pequeña.'], answer: 2, why: 'Nombre + adjetivos; gris no cambia, pequeña sí.', en: 'Which one is correct?' },
          ] },
        ] },
        { title: 'Otro lugar, otros objetos · Another place, other things', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'rewrite', title: 'Una situación nueva · A new situation', items: [
            { prompt: 'At a hotel: I’m looking for my black umbrella.', instruction: 'Escribe la frase en español. (umbrella = el paraguas)', accept: ['Busco mi paraguas negro', 'Yo busco mi paraguas negro'] },
            { prompt: 'In a café: Which cup? — The white one, the one on the table.', instruction: 'Escribe la respuesta en español. (cup = la taza, white = blanco)', accept: ['La blanca, la que está en la mesa', 'La blanca la que está en la mesa', 'Es la blanca, la que está en la mesa'] },
            { prompt: 'At home: Your red notebook is in the box. (tú)', instruction: 'Escribe la frase en español. (notebook = el cuaderno)', accept: ['Tu cuaderno rojo está en la caja'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 037 · Comparativos regulares: más, menos, tan ... como', text: 'Ya identificas un objeto con varias pistas: la carpeta azul pequeña, la que está en el estante. En la clase 037 usas los mismos adjetivos para comparar dos cosas: «la carpeta roja es más grande que la azul», «el cuaderno rojo es tan pequeño como la carpeta azul».', en: 'You can now pick out a thing with several clues: the small blue folder, the one on the shelf. In class 037 you use the same adjectives to compare two things: “the red folder is bigger than the blue one”, “the red notebook is as small as the blue folder”.', href: '/gramatica/comparativos-regulares', label: 'Ir a la clase 037' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Hay dos bolígrafos en la mesa. ¿Cuál es tu bolígrafo?». Respuesta esperada con una respuesta corta y dos pistas: «El azul, el que está al lado del libro». Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
