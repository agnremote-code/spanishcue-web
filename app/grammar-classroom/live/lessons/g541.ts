import type { LiveLesson } from '../types';

/**
 * Lesson 541 · A2 · Posesivos tónicos: mío, tuyo, suyo (course unit G241, extension
 * from the PCIC coverage review of 2026-11-11; studied after G071).
 * One scene: the end of a shared weekend in a mountain cabin. Four friends (Inés,
 * Marcos, Paula and Leo) pack and sort out whose things are whose. In the voice
 * message Inés (Mexican voice) tells Paula what was left behind in the cabin.
 * Content: forms mío/tuyo/suyo/nuestro with gender and number; ser + possessive
 * (es mío); article + possessive (el mío) to avoid repeating the noun; un amigo
 * mío; suyo = de él, de ella, de usted, de ellos (clarify with de + pronoun).
 * Mistakes: *es mi, *la mía maleta, *un mi amigo, *el mío es más grande que tu,
 * *son míos (for feminine nouns). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 541,
  level: 'A2',
  title: 'Posesivos tónicos: mío, tuyo, suyo',
  subtitle: 'Decir de quién es cada cosa sin repetir la palabra: es mío, la tuya, un amigo nuestro.',
  legend: [
    { tone: 'teal', label: 'SER + POSESIVO · es mío, son tuyas (it is mine, they are yours)' },
    { tone: 'orange', label: 'ARTÍCULO + POSESIVO · el mío, la tuya (mine, yours: no noun)' },
    { tone: 'violet', label: 'NOMBRE + POSESIVO · un amigo mío (a friend of mine)' },
    { tone: 'blue', label: 'ANTES DEL NOMBRE · mi, tu, su (my, your, his/her)' },
  ],
  optionNotes: {
    'es mi': 'Sin nombre detrás no se usa «mi»: se dice **es mío** o **es mía**.',
    'la mía maleta': 'Delante del nombre va la forma corta: **mi maleta**. «La mía» va sola, sin nombre.',
    'un mi amigo': '«Un» y «mi» no van juntos: **un amigo mío**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿De quién es?', coach: 'Mi mochila → es mía. My backpack → it is mine.',
      steps: [
        { title: 'Domingo en la cabaña · Sunday at the cabin', blocks: [
          { kind: 'lead', text: 'Inés, Marcos, Paula y Leo pasaron el fin de semana en una cabaña en la montaña. Es domingo por la tarde y hay que hacer las maletas, pero todo está mezclado. Marcos levanta un cargador: «¿De quién es esto?». Inés responde: «**Es mío**. **El tuyo** está en la cocina». Hoy aprendes a decir de quién es cada cosa sin repetir la palabra.', en: 'Inés, Marcos, Paula and Leo spent the weekend in a mountain cabin. It is Sunday afternoon and it is time to pack, but everything is mixed up. Marcos holds up a charger: “Whose is this?”. Inés answers: “It’s mine. Yours is in the kitchen”. Today you learn to say whose each thing is without repeating the word.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después tu alumno dice en qué frase aparece el nombre (cargador, mochila) y en cuál no.', self: 'Lee las tres frases en voz alta. ¿En cuál aparece el nombre y en cuál no? (In which one do you see the noun?)' } },
          { kind: 'compare', title: 'Tres formas de decir de quién es · Three ways to say whose it is', columns: [
            { tone: 'blue', label: 'ANTES DEL NOMBRE', sentence: 'Es [[mi|blue]] cargador.', idea: 'Mi + nombre: la forma que ya conoces.', en: 'It is my charger.' },
            { tone: 'teal', label: 'SER + POSESIVO', sentence: 'Este cargador es [[mío|teal]].', idea: 'Después de ser, sin nombre detrás: mío.', en: 'This charger is mine.' },
            { tone: 'orange', label: 'ARTÍCULO + POSESIVO', sentence: '[[El tuyo|orange]] está en la cocina.', idea: 'El tuyo = tu cargador. No repites la palabra.', en: 'Yours is in the kitchen.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El tuyo está en la cocina». ¿Qué es «el tuyo»?', options: ['Tu cargador.', 'Mi cargador.', 'La cocina de Marcos.'], answer: 0, why: 'El tuyo = tu cargador: el artículo y el posesivo sustituyen al nombre.', en: '“El tuyo está en la cocina”. What is “el tuyo”?' },
            { prompt: '—¿De quién es este cargador? —___', options: ['Es mi.', 'Es mío.', 'Es el mi.'], answer: 1, why: 'Sin nombre detrás, la forma es mío. «Mi» necesita un nombre: mi cargador.', en: '“Whose charger is this?” “It’s mine.”' },
          ] },
        ] },
        { title: 'Las formas · The forms', mascot: '/brand/mascot/studying.webp', coach: 'Mío, mía, míos, mías.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SER + POSESIVO', question: '¿Cómo digo «it’s mine»?', en: 'How do I say “it’s mine”?', formula: ['ser + mío / mía / míos / mías', 'ser + tuyo / tuya / tuyos / tuyas', 'ser + suyo · nuestro (+ -a, -os, -as)'],
            meaning: 'Estos posesivos **concuerdan con la cosa**, no con la persona: una chica dice «el libro es **mío**» y un chico dice «la mochila es **mía**». Para preguntar usas **¿De quién es…?** o **¿De quién son…?**',
            examples: [
              { es: '—¿De quién es esta toalla? —Es [[mía|teal]].', en: '“Whose towel is this?” “It’s mine.”' },
              { es: 'Las botas rojas son [[tuyas|teal]], ¿verdad?', en: 'The red boots are yours, right?' },
              { es: 'Esos calcetines no son [[míos|teal]].', en: 'Those socks aren’t mine.' },
            ],
            note: '**Nuestro, nuestra, nuestros, nuestras** tienen la misma forma antes y después del nombre: nuestra cabaña · la cabaña es nuestra.' },
          { kind: 'table', title: 'Antes y después · Before and after', head: ['Persona', 'Antes del nombre', 'Después de ser / con artículo'], rows: [
            ['yo', '[[mi|blue]] libro · [[mis|blue]] llaves', '[[mío|teal]], [[mía|teal]], [[míos|teal]], [[mías|teal]]'],
            ['tú', '[[tu|blue]] libro · [[tus|blue]] llaves', '[[tuyo|teal]], [[tuya|teal]], [[tuyos|teal]], [[tuyas|teal]]'],
            ['él, ella, usted', '[[su|blue]] libro · [[sus|blue]] llaves', '[[suyo|teal]], [[suya|teal]], [[suyos|teal]], [[suyas|teal]]'],
            ['nosotros', '[[nuestro|blue]] libro · [[nuestras|blue]] llaves', '[[nuestro|teal]], [[nuestra|teal]], [[nuestros|teal]], [[nuestras|teal]]'],
            ['ellos, ellas, ustedes', '[[su|blue]] libro · [[sus|blue]] llaves', '[[suyo|teal]], [[suya|teal]], [[suyos|teal]], [[suyas|teal]]'],
          ], note: 'Mío, mía, míos y mías llevan tilde siempre. Tuyo y suyo, nunca.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Paula: «Esas gafas de sol son ___».', options: ['mío', 'mías', 'míos'], answer: 1, why: 'Las gafas: femenino plural → mías. No importa quién habla.', en: 'Paula: “Those sunglasses are mine.”' },
            { prompt: 'Leo, a Marcos: «¿Este abrigo es ___?».', options: ['tuyo', 'tu', 'tuya'], answer: 0, why: 'El abrigo: masculino singular → tuyo. «Tu» necesita un nombre detrás.', en: 'Leo, to Marcos: “Is this coat yours?”' },
          ] },
        ] },
        { title: 'El mío, la tuya · Mine, yours', mascot: '/brand/mascot/speaking.webp', coach: 'No repitas la palabra. Don’t repeat the word.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ARTÍCULO + POSESIVO', question: '¿Cómo evito repetir el nombre?', en: 'How do I avoid repeating the noun?', formula: ['el mío · la mía · los míos · las mías', 'el tuyo · la tuya · los tuyos · las tuyas', 'el suyo · el nuestro (+ -a, -os, -as)'],
            meaning: 'Cuando ya sabemos de qué cosa hablamos, usas **artículo + posesivo** y no repites el nombre: «Mi mochila es azul y **la tuya** es verde» (la tuya = tu mochila). El artículo y el posesivo concuerdan con la cosa.',
            examples: [
              { es: 'Mi saco de dormir es muy fino. [[El tuyo|orange]] es mejor.', en: 'My sleeping bag is very thin. Yours is better.' },
              { es: 'Tus botas están secas, pero [[las mías|orange]] están mojadas.', en: 'Your boots are dry, but mine are wet.' },
              { es: 'Nuestro coche es pequeño. Vamos en [[el suyo|orange]].', en: 'Our car is small. Let’s go in theirs.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'NOMBRE + POSESIVO', question: '¿Cómo digo «a friend of mine»?', en: 'How do I say “a friend of mine”?', formula: ['un / una + nombre + mío, tuyo, suyo…', 'un amigo mío · una prima suya · unos vecinos nuestros'],
            meaning: 'Con **un, una, unos, unas** (y con dos, tres, algunos…) el posesivo va **después** del nombre: «**un amigo mío**» = uno de mis amigos. No se dice «un mi amigo».',
            examples: [
              { es: 'La cabaña es de [[una tía mía|violet]].', en: 'The cabin belongs to an aunt of mine.' },
              { es: 'Leo vino con [[dos amigos suyos|violet]].', en: 'Leo came with two friends of his.' },
            ] },
          { kind: 'tip', icon: '💡', title: '¿Suyo de quién? · Whose is “suyo”?', text: '**Suyo** puede ser de él, de ella, de usted, de ellos, de ellas o de ustedes. Si no está claro, dilo con **de + persona**: «Esta toalla es **de Paula**», «¿Es **de usted**?».', en: 'Suyo can mean his, hers, yours (formal) or theirs. If it is not clear, say it with de + person: “This towel is Paula’s”, “Is it yours, sir/madam?”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mi maleta pesa mucho. ¿Y ___?', options: ['la tuya', 'el tuyo', 'tu'], answer: 0, why: 'La maleta: femenino singular → la tuya.', en: 'My suitcase is really heavy. And yours?' },
            { prompt: 'Ayer conocí a ___ en el pueblo.', options: ['un mi amigo', 'un amigo mío', 'un mío amigo'], answer: 1, why: 'Con «un», el posesivo va después del nombre: un amigo mío.', en: 'Yesterday I met a friend of mine in the village.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde está el error? Where is the mistake?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla. Después aparece la corrección y tu alumno la lee en voz alta.', self: 'Lee cada frase y busca el error. Toca para ver la corrección y léela en voz alta. (Find the mistake, then read the correction aloud.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Este cargador es mi.', right: 'Este cargador es mío.', why: 'Sin nombre detrás: mío. (Mi needs a noun after it.)' },
            { wrong: 'La mía maleta es la roja.', right: 'Mi maleta es la roja.', why: 'Delante del nombre va la forma corta: mi. (Short form before the noun.)' },
            { wrong: 'Vino con un su primo.', right: 'Vino con un primo suyo.', why: 'Con «un», el posesivo va después: un primo suyo. (A cousin of his.)' },
            { wrong: 'Las llaves son míos.', right: 'Las llaves son mías.', why: 'Concuerda con la cosa: las llaves → mías. (Agreement with the thing.)' },
            { wrong: 'Mi mochila es más grande que tu.', right: 'Mi mochila es más grande que la tuya.', why: 'Sin nombre: la tuya. (Yours = la tuya.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Son tus guantes? —No, ___ son negros.', options: ['los míos', 'mis', 'míos los'], answer: 0, why: 'Los guantes → los míos: artículo + posesivo, sin repetir el nombre.', en: '“Are these your gloves?” “No, mine are black.”' },
            { prompt: 'Señora, ¿este paraguas es ___?', options: ['su', 'suyo', 'tuya'], answer: 1, why: 'Con usted: suyo. El paraguas es masculino singular.', en: 'Madam, is this umbrella yours?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: toma tres objetos de la mesa (uno tuyo, uno de tu alumno, uno de otra persona) y pregunta «¿De quién es?». Tu alumno responde con «Es mío / tuyo / de…» y añade «El mío es…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Hacer las maletas', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Todo mezclado · All mixed up', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Inés y Paula, tu alumno es Marcos y Leo. Después tu alumno toca cada palabra marcada y dice a qué cosa se refiere.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿de qué cosa habla? (What thing does each one refer to?)' } },
          { kind: 'explore', title: 'Domingo, cinco de la tarde', setting: 'El salón de la cabaña. Hay ropa, mochilas y cargadores por todas partes. (The cabin living room. Clothes, backpacks and chargers everywhere.)', lines: [
            { who: 'Marcos', text: '¿De quién es esta toalla azul?', en: 'Whose is this blue towel?' },
            { who: 'Paula', text: '[[Es mía|teal]]. Gracias. ¿Y este cargador? ¿[[Es tuyo|teal]], Leo?', en: 'It’s mine. Thanks. And this charger? Is it yours, Leo?' },
            { who: 'Leo', text: 'No, [[el mío|orange]] es blanco. Ese es de Inés, creo.', en: 'No, mine is white. That one is Inés’s, I think.' },
            { who: 'Inés', text: 'Sí, [[es mío|teal]]. Marcos, ¿viste mis botas?', en: 'Yes, it’s mine. Marcos, have you seen my boots?' },
            { who: 'Marcos', text: 'Hay unas botas en la entrada, pero no sé si son [[las tuyas|orange]] o [[las mías|orange]]: son iguales.', en: 'There are some boots by the door, but I don’t know if they are yours or mine: they are the same.' },
            { who: 'Inés', text: '[[Las mías|orange]] tienen los cordones rojos.', en: 'Mine have red laces.' },
            { who: 'Paula', text: 'Oigan, ¿y esta chaqueta gris? No es [[nuestra|teal]], ¿no?', en: 'Hey, what about this grey jacket? It isn’t ours, is it?' },
            { who: 'Leo', text: 'Es de Dani, [[un amigo mío|violet]] que vino el sábado. Yo se la llevo.', en: 'It belongs to Dani, a friend of mine who came on Saturday. I’ll take it to him.' },
            { who: 'Marcos', text: 'Perfecto. ¿Y las llaves de la cabaña? ¿Son de tu tía, Inés?', en: 'Perfect. And the cabin keys? Are they your aunt’s, Inés?' },
            { who: 'Inés', text: 'Sí, [[son suyas|teal]]. Las dejo debajo de la maceta, como siempre.', en: 'Yes, they’re hers. I’ll leave them under the flowerpot, as usual.' },
          ], notes: {
            'Es mía': 'La toalla → **mía** (femenino singular). Después de ser, sin nombre.',
            'Es tuyo': 'El cargador → **tuyo** (masculino singular).',
            'el mío': 'El mío = **mi cargador**. Artículo + posesivo para no repetir «cargador».',
            'es mío': 'Inés es una chica, pero dice **mío** porque el cargador es masculino.',
            'las tuyas': 'Las tuyas = **tus botas**. Femenino plural, como «las botas».',
            'las mías': 'Las mías = **mis botas**.',
            'Las mías': 'Las mías = **mis botas**. Inés explica cómo son.',
            'nuestra': 'La chaqueta → **nuestra**: de nosotros cuatro.',
            'un amigo mío': 'Un + nombre + posesivo: **uno de mis amigos**.',
            'son suyas': 'Las llaves → **suyas** = de ella, de la tía de Inés.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿De quién es el cargador?', options: ['De Leo.', 'De Inés.', 'De Marcos.'], answer: 1, why: 'Inés dice: «Sí, es mío».', en: 'Whose is the charger?' },
            { prompt: '¿Cómo son las botas de Inés?', options: ['Tienen los cordones rojos.', 'Son blancas.', 'Son más grandes que las de Marcos.'], answer: 0, why: '«Las mías tienen los cordones rojos».', en: 'What are Inés’s boots like?' },
            { prompt: '¿De quién es la chaqueta gris?', options: ['De Paula.', 'De la tía de Inés.', 'De Dani, un amigo de Leo.'], answer: 2, why: '«Es de Dani, un amigo mío».', en: 'Whose is the grey jacket?' },
          ] },
        ] },
        { title: '¿Qué forma es? · Which form is it?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Tres estructuras · Three structures', categories: [
            { id: 'ser', label: 'SER + POSESIVO', tone: 'teal' },
            { id: 'articulo', label: 'ARTÍCULO + POSESIVO', tone: 'orange' },
            { id: 'nombre', label: 'NOMBRE + POSESIVO', tone: 'violet' },
          ], items: [
            { text: 'Esta toalla es mía.', answer: 'ser', why: 'Ser + mía.' },
            { text: 'El mío es blanco.', answer: 'articulo', why: 'El mío = mi cargador.' },
            { text: 'Vino un amigo mío.', answer: 'nombre', why: 'Un + amigo + mío.' },
            { text: 'Las llaves son suyas.', answer: 'ser', why: 'Ser + suyas.' },
            { text: 'Prefiero la tuya.', answer: 'articulo', why: 'La tuya sustituye a un nombre femenino.' },
            { text: 'Es una idea nuestra.', answer: 'nombre', why: 'Una + idea + nuestra.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Tu teléfono es como el mío?». Tu alumno compara dos objetos suyos con los tuyos: «El mío es…, el tuyo es…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Mío, tuyo, suyo, nuestro.',
      steps: [
        { title: 'En la cabaña · At the cabin', blocks: [
          { kind: 'choice', items: [
            { context: 'Paula encuentra un libro. (Paula finds a book.)', prompt: '—¿Es tu libro, Leo? —Sí, es ___.', options: ['mi', 'mío', 'mía'], answer: 1, why: 'El libro → mío.', en: '“Is this your book, Leo?” “Yes, it’s mine.”' },
            { context: 'Hay dos tazas en la mesa. (There are two mugs on the table.)', prompt: 'Esta taza es mía. ¿Dónde está ___?', options: ['la tuya', 'el tuyo', 'tu'], answer: 0, why: 'La taza → la tuya.', en: 'This mug is mine. Where is yours?' },
            { context: 'Inés habla de la dueña de la cabaña. (Inés talks about the owner.)', prompt: 'La cabaña es de ___.', options: ['una mi tía', 'una tía mía', 'una mía tía'], answer: 1, why: 'Una + nombre + posesivo: una tía mía.', en: 'The cabin belongs to an aunt of mine.' },
            { context: 'Marcos ve unos guantes. (Marcos sees some gloves.)', prompt: 'Estos guantes no son ___. ¿Son de Leo?', options: ['míos', 'mías', 'mis'], answer: 0, why: 'Los guantes → míos.', en: 'These gloves aren’t mine. Are they Leo’s?' },
            { context: 'Los cuatro miran las fotos. (The four of them look at the photos.)', prompt: 'Sus fotos son bonitas, pero ___ son mejores.', options: ['nuestras', 'las nuestras', 'la nuestra'], answer: 1, why: 'Las fotos → las nuestras, con artículo porque no hay nombre ni ser.', en: 'Their photos are nice, but ours are better.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Esa mochila verde es mi.', ok: false, options: ['Esa mochila verde es mío.', 'Esa mochila verde es mía.', 'Esa mochila verde es la mi.'], answer: 1, why: 'La mochila → mía.' },
            { sentence: 'Tus zapatos están aquí y los míos están en el coche.', ok: true, why: 'Correcta: los míos = mis zapatos.' },
            { sentence: 'Ayer hablé con un mi vecino.', ok: false, options: ['Ayer hablé con un vecino mío.', 'Ayer hablé con un mío vecino.', 'Ayer hablé con uno mi vecino.'], answer: 0, why: 'Con «un», el posesivo va después del nombre.' },
            { sentence: 'El coche de Paula es rojo y el nuestro es gris.', ok: true, why: 'Correcta: el nuestro = nuestro coche.' },
            { sentence: 'Mi habitación es más pequeña que tu.', ok: false, options: ['Mi habitación es más pequeña que tuya.', 'Mi habitación es más pequeña que el tuyo.', 'Mi habitación es más pequeña que la tuya.'], answer: 2, why: 'La habitación → la tuya.' },
          ] },
        ] },
        { title: 'En el coche · In the car', blocks: [
          { kind: 'chat-fill', title: 'De vuelta a casa · On the way home', lines: [
            { who: 'Leo', text: '¿Alguien tiene mi botella de agua?' },
            { who: 'Paula', text: 'Aquí hay una. ¿Es ___?', options: ['tuyo', 'tuya', 'tu'], answer: 1, why: 'La botella → tuya.' },
            { who: 'Leo', text: 'No, ___ es de metal.', options: ['la mía', 'el mío', 'mi'], answer: 0, why: 'La botella → la mía.' },
            { who: 'Marcos', text: 'Entonces es de Inés. Inés, ¿esta botella es ___?', options: ['suya', 'tuyo', 'tuya'], answer: 2, why: 'Marcos habla con Inés de tú: tuya.' },
            { who: 'Inés', text: 'Sí, gracias. Oye, ¿de quién son estas gafas?' },
            { who: 'Paula', text: 'Son de Dani, ___ de Leo.', options: ['un amigo suyo', 'un su amigo', 'un suyo amigo'], answer: 0, why: 'Un amigo suyo. Aquí «de Leo» aclara de quién.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['mías', 'botas', 'Estas', 'son'], accept: ['Estas botas son mías'], en: 'These boots are mine.' },
            { tiles: ['está', 'El', 'cocina', 'tuyo', 'la', 'en'], accept: ['El tuyo está en la cocina'], en: 'Yours is in the kitchen.' },
            { tiles: ['amiga', 'una', 'Es', 'nuestra'], accept: ['Es una amiga nuestra'], en: 'She is a friend of ours.' },
            { tiles: ['quién', '¿De', 'llaves?', 'estas', 'son'], accept: ['¿De quién son estas llaves?'], en: 'Whose are these keys?' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'No repitas el nombre · Don’t repeat the noun', items: [
            { prompt: 'Mi maleta es roja y tu maleta es negra.', instruction: 'Cambia «tu maleta» por artículo + posesivo.', accept: ['Mi maleta es roja y la tuya es negra'] },
            { prompt: 'Es mi cargador.', instruction: 'Empieza con «Este cargador es…».', accept: ['Este cargador es mío'] },
            { prompt: 'Vino uno de mis primos.', instruction: 'Usa «un primo» + posesivo. Empieza con «Vino…».', accept: ['Vino un primo mío'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno compara tres cosas suyas con las de un amigo o familiar: «Mi casa es…, la suya es…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Inés', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Cosas olvidadas · Things left behind', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota de quién es cada cosa. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles: ¿de quién es cada cosa? (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Inés para Paula', channel: 'MENSAJE DE VOZ · DE INÉS PARA PAULA', src: '/audio/grammar-live/541.mp3',
            before: 'El lunes, la tía de Inés llama: en la cabaña quedaron varias cosas. Inés manda un audio a Paula. ¿Qué cosas crees que olvidaron? (What do you think they left behind?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Inés quiere saber de quién son las cosas que quedaron en la cabaña.', 'Inés invita a Paula a volver a la cabaña.', 'La tía de Inés está enfadada.'], answer: 0, why: '«Mi tía encontró varias cosas y no sé de quién son».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿De quién es la bufanda verde?', options: ['De Inés.', 'De Paula, cree Inés.', 'De Marcos.'], answer: 1, why: '«Creo que es tuya».', en: 'Whose is the green scarf?' },
              { prompt: '¿De quién son los auriculares?', options: ['De Leo.', 'De Inés.', 'De Paula.'], answer: 0, why: '«Los míos los tengo aquí… seguro que son de Leo».', en: 'Whose are the headphones?' },
              { prompt: '¿Qué pasa con el libro?', options: ['Es de la tía.', 'No es de Inés; pregunta si es de Marcos.', 'Es de Inés.'], answer: 1, why: '«Mío no es. ¿Será de Marcos?».', en: 'What about the book?' },
              { prompt: '¿Cuándo trae las cosas la tía?', options: ['El viernes.', 'Mañana.', 'El próximo mes.'], answer: 0, why: '«Mi tía viene el viernes y lo trae todo».', en: 'When does the aunt bring the things?' },
            ],
            transcript: 'Hola, Paula, soy Inés. Me llamó mi tía: encontró varias cosas en la cabaña y no sé de quién son. Hay una bufanda verde; creo que [[es tuya|teal]], ¿no? También hay unos auriculares negros. [[Los míos|orange]] los tengo aquí, así que seguro que son de Leo. Y hay un libro de cocina. [[Mío|teal]] no es. ¿Será de Marcos? Ah, y un paraguas pequeño: ese sí [[es mío|teal]]. Mi tía viene el viernes y lo trae todo. Por cierto, dice que [[unos vecinos suyos|violet]] alquilan una cabaña más grande. ¿Vamos otra vez el mes que viene? Un beso.',
            reply: { teacher: 'Tú eres Inés. Tu alumno es Paula y responde al audio: dice qué cosa es suya, cuál no, y propone una fecha.', self: 'Responde a Inés en voz alta como Paula: di qué cosa es tuya, cuál no, y propón una fecha. (Answer as Paula: what is yours, what is not, and suggest a date.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo mío y lo tuyo', coach: 'Compara tus cosas. Compare your things.',
      steps: [
        { title: 'Habla de tus cosas · Talk about your things', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con posesivos. Repite su frase con la forma correcta y sigue con la repregunta.', self: 'Lee cada pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Read each question and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Mira tu mesa. ¿Qué cosas son tuyas y cuáles no? · Look at your desk. Which things are yours and which are not?', followUps: ['¿De quién es lo demás? (Whose is the rest?)', '¿Prestas tus cosas? (Do you lend your things?)'], phrases: ['Este… es [[mío|teal]].', 'Esta… no es [[mía|teal]]: es de…', 'Estos… son [[nuestros|teal]].'], hint: 'Ser + mío, mía, míos, mías.', example: 'El ordenador es mío, pero esta taza no es mía: es de mi hermana. Los libros son nuestros.', next: 'Ahora, compara.' },
            { q: 'Compara tu teléfono, tu casa o tu ciudad con los de un amigo. · Compare your phone, home or city with a friend’s.', followUps: ['¿Cuál prefieres? (Which do you prefer?)', '¿Por qué? (Why?)'], phrases: ['[[El mío|orange]] es…', '[[La suya|orange]] es más…', 'Prefiero [[el suyo|orange]] porque…'], hint: 'Artículo + posesivo: el mío, la suya.', example: 'Mi teléfono es viejo. El suyo es nuevo y tiene mejor cámara, pero el mío es más pequeño y me gusta más.', next: 'Ahora, tu gente.' },
            { q: 'Habla de un amigo tuyo o de una compañera tuya. · Talk about a friend or colleague of yours.', followUps: ['¿Cómo lo conociste? (How did you meet?)', '¿Qué hacen juntos? (What do you do together?)'], phrases: ['[[Un amigo mío|violet]] vive en…', '[[Una compañera mía|violet]] es…', 'Es [[un vecino nuestro|violet]].'], hint: 'Un / una + nombre + mío.', example: 'Un amigo mío vive en Lima. Lo conocí en la universidad. Hablamos todos los domingos.', next: 'Ahora, un problema.' },
            { q: 'En un restaurante, alguien toma tu abrigo por error. ¿Qué dices? · Someone takes your coat by mistake. What do you say?', followUps: ['¿Cómo es el tuyo? (What is yours like?)', '¿Cómo lo dices con usted? (How do you say it formally?)'], phrases: ['Perdone, creo que ese abrigo es [[mío|teal]].', '[[El suyo|orange]] es aquel.', '[[El mío|orange]] tiene…'], hint: 'Con usted: suyo, el suyo.', example: 'Perdone, creo que ese abrigo es mío. El mío tiene un botón roto. ¿El suyo no es aquel gris?', teacher: 'Haz tú de la otra persona: «¿Seguro? Yo creo que es mío».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta «¿De quién es…?» sobre objetos de la clase y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta y responde como otra persona. (Now ask the questions and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Objetos perdidos', coach: 'Di de quién es cada cosa. Say whose each thing is.',
      steps: [
        { title: 'Un mensaje al grupo · A message to the group', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos la concordancia de cada posesivo con la cosa.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después revisa la concordancia: la bufanda → mía. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: '¿De quién es esto? · Whose is this?', situation: 'Después de una fiesta o un viaje, en tu casa quedaron cosas de tus amigos. Escribe un mensaje al grupo. (After a party or a trip, some of your friends’ things were left at your place. Write a message to the group.)', task: [
            'Di qué cosas encontraste. (Say what you found.)',
            'Di cuál es tuya y cuál no. (Say which is yours and which is not.)',
            'Pregunta de quién es otra cosa. (Ask whose another thing is.)',
            'Compara dos cosas con el mío / la tuya. (Compare two things.)',
            'Di cuándo pueden pasar a buscarlas. (Say when they can pick them up.)',
          ], starters: ['¡Hola a todos!', 'En mi casa quedaron…', 'El… es mío, pero…', '¿De quién es…?', 'Creo que es tuyo, …', 'La mía es…, así que…', 'Pueden pasar el…'],
            words: ['mío', 'mía', 'tuyo', 'tuya', 'suyo', 'el mío', 'la tuya', 'los suyos', 'un amigo mío', '¿de quién es?'],
            model: '¡Hola a todos! En mi casa quedaron varias cosas de la fiesta. Hay un paraguas negro: [[es mío|teal]], tranquilos. También hay una chaqueta azul que no [[es mía|teal]]. Laura, ¿[[es tuya|teal]]? [[La tuya|orange]] era azul, creo. Hay dos cargadores: uno es de Pablo y el otro no sé. ¿De quién es? [[El mío|orange]] está en mi habitación. Y hay unas gafas de [[un amigo tuyo|violet]], Sergio. Pueden pasar el sábado por la mañana. ¡Un abrazo!',
            minWords: 50,
            checks: [
              { label: 'Ser + posesivo: es mío, es tuya… (it is mine, it is yours)', pattern: '(?:^|[^\\p{L}])(?:es|son|era|eran)\\s+(?:m[ií][oa]s?|tuy[oa]s?|suy[oa]s?|nuestr[oa]s?)(?![\\p{L}])', tip: 'Por ejemplo: «El paraguas es mío».' },
              { label: 'Artículo + posesivo: el mío, la tuya… (mine, yours)', pattern: '(?:^|[^\\p{L}])(?:el|la|los|las)\\s+(?:m[ií][oa]s?|tuy[oa]s?|suy[oa]s?|nuestr[oa]s?)(?![\\p{L}])', tip: 'Por ejemplo: «La tuya era azul».' },
            ],
            warnings: [
              { pattern: '(?:^|[^\\p{L}])(?:es|son)\\s+mi(?:s)?(?=[\\s.,;!?]*$|[.,;!?])', why: 'Sin nombre detrás: **mío / mía**, no «mi».' },
              { pattern: '(?:^|[^\\p{L}])una?\\s+(?:mi|tu|su)\\s+\\p{L}+', why: 'Con «un / una», el posesivo va después: **un amigo mío**.' },
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
            { tone: 'teal', label: 'SER + POSESIVO', formula: 'ser + mío / tuyo / suyo / nuestro', example: 'Esta toalla es mía.', caption: 'concuerda con la cosa, no con la persona', en: 'agrees with the thing, not with the person' },
            { tone: 'orange', label: 'ARTÍCULO + POSESIVO', formula: 'el mío · la tuya · los suyos', example: 'Mi mochila es azul y la tuya es verde.', caption: 'para no repetir el nombre', en: 'to avoid repeating the noun' },
            { tone: 'violet', label: 'NOMBRE + POSESIVO', formula: 'un / una + nombre + mío', example: 'Es un amigo mío.', caption: 'uno de mis amigos', en: 'one of my friends' },
            { tone: 'blue', label: 'ANTES DEL NOMBRE', formula: 'mi · tu · su · nuestro + nombre', example: 'Es mi cargador.', caption: 'la forma corta necesita un nombre', en: 'the short form needs a noun' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: '¿Hay un nombre detrás? → **mi, tu, su**. ¿No hay nombre? → **mío, tuyo, suyo**, con artículo si no va después de ser: «Es mío», «El mío es blanco». Y siempre mira la cosa: la mochila → mía.', en: 'Is there a noun after it? → mi, tu, su. No noun? → mío, tuyo, suyo, with an article unless it follows ser: “Es mío”, “El mío es blanco”. And always look at the thing: la mochila → mía.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '—¿De quién son estas llaves? —Son ___.', options: ['mías', 'míos', 'mis'], answer: 0, why: 'Las llaves → mías.', en: '“Whose are these keys?” “They’re mine.”' },
            { prompt: 'Tu café está caliente, pero ___ está frío.', options: ['mi', 'la mía', 'el mío'], answer: 2, why: 'El café → el mío.', en: 'Your coffee is hot, but mine is cold.' },
            { prompt: 'Te presento a Carla, ___.', options: ['una mi compañera', 'una compañera mía', 'una mía compañera'], answer: 1, why: 'Una + nombre + mía.', en: 'This is Carla, a colleague of mine.' },
            { prompt: 'Señor, ¿este maletín es ___?', options: ['tuyo', 'suyo', 'su'], answer: 1, why: 'Con usted: suyo.', en: 'Sir, is this briefcase yours?' },
            { prompt: 'Su casa es grande, pero ___ tiene jardín.', options: ['la nuestra', 'nuestro', 'el nuestro'], answer: 0, why: 'La casa → la nuestra.', en: 'Their house is big, but ours has a garden.' },
          ] },
        ] },
        { title: 'Ampliación · Lo mío y expresiones', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Dos ideas para ir más lejos. Primera: **lo mío, lo tuyo** hablan de «mis cosas» o «mi tema» en general: «Lo mío es la cocina» = es lo que hago bien. Segunda: hay expresiones fijas con estos posesivos: **¡Dios mío!**, **amor mío**, **hija mía**, **a mi lado / al lado mío** (las dos se oyen; en textos cuidados se prefiere «a mi lado»).', en: 'Two ideas to go further. First: lo mío, lo tuyo refer to “my things” or “my thing” in general: “Lo mío es la cocina” = cooking is what I’m good at. Second: there are set expressions with these possessives: ¡Dios mío!, amor mío, hija mía, a mi lado / al lado mío (both are heard; careful writing prefers “a mi lado”).' },
          { kind: 'choice', title: 'Para estudiantes rápidos · For fast learners', items: [
            { prompt: '«Lo mío es el baile». ¿Qué quiere decir?', options: ['El baile es lo que me gusta y hago bien.', 'Tengo un baile en casa.', 'Ese baile es de mi propiedad.'], answer: 0, why: 'Lo mío = mi tema, lo que se me da bien.', en: '“Lo mío es el baile”. What does it mean?' },
            { prompt: '¿Qué frase es más adecuada en un texto cuidado?', options: ['Siéntate a mi lado.', 'Siéntate al lado mi.', 'Siéntate a lado mío mi.'], answer: 0, why: '«A mi lado» es la forma recomendada en textos cuidados.', en: 'Which sentence fits careful writing best?' },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional. Pregunta final: «¿Qué es lo tuyo: la cocina, los idiomas, el deporte?». Tu alumno responde con «Lo mío es…» y una razón.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 072 · Doble negación: nadie, nada, nunca', text: 'Ya dices de quién es cada cosa: «es mío», «la tuya», «un amigo nuestro». La clase 072 retoma la ruta del curso: «Doble negación: nadie, nada, nunca».', en: 'You can now say whose each thing is: “es mío”, “la tuya”, “un amigo nuestro”. Class 072 returns to the main route of the course: “Doble negación: nadie, nada, nunca”.', href: '/gramatica/doble-negacion-nadie-nada-nunca', label: 'Ir a la clase 072' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: tu alumno resume en tres frases lo que se lleva de la clase y da un ejemplo propio de cada punto. Tarea: terminar o reescribir el texto de Escribir.' },
        ] },
      ],
    },
  ],
};
