import type { LiveLesson } from '../types';

/**
 * Lesson 540 · A2 · Diminutivos, aumentativos y valor afectivo (course unit G240,
 * extension from the coverage audit, row 31; studied after G069).
 * One scene runs through the class: La Espiga, a small neighbourhood bakery-café
 * run by Rosa Medina. Her nephew Bruno starts working there today. Regulars:
 * doña Pilar (an older lady with her little dog) and Hugo (a neighbour with a
 * very big dog). In the voice message Rosa (Colombian voice, tú to Bruno) leaves
 * him instructions for his first Saturday alone. Who speaks: Rosa, Bruno,
 * doña Pilar, Hugo, and later a customer, Lidia.
 * Content: diminutives -ito/-ita, -cito/-ecito (cafecito, pobrecito, panecito),
 * -illo as a less general diminutive (una cosilla); spelling changes (poco →
 * poquito, luz → lucecita, taza → tacita, amigo → amiguito); values: size,
 * affection, politeness/softening (un momentito, un cafecito); augmentatives
 * -ón / -azo (-ote receptively): un problemón, un fiestón, un perrazo, un exitazo,
 * un golpazo; pejorative -ucho (un hotelucho, un cuartucho); lexicalized words
 * that are no longer diminutives or augmentatives (bolsillo, ventanilla, cajón,
 * sillón, cucharón). Contrast with G069: calentito (pleasantly warm) /
 * calentísimo (very, very hot). Mistakes: *un pocito, *luzecita, *una problemita,
 * *la sillona, *el bolsito del pantalón, *una casucha preciosa. Ampliación:
 * other diminutive suffixes (-ín, -ico; usage varies by area, no regions named),
 * ironic diminutives (¡Vaya nochecita!) and diminutives in formal writing.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 540,
  level: 'A2',
  title: 'Diminutivos, aumentativos y valor afectivo',
  subtitle: 'Hablar con cariño y con cortesía, y exagerar con gracia: un cafecito, un momentito, un exitazo, un perrazo.',
  legend: [
    { tone: 'teal', label: 'DIMINUTIVO · -ito, -cito, -illo: pequeño, cariño, cortesía (small, affection, politeness)' },
    { tone: 'orange', label: 'AUMENTATIVO · -ón, -azo: grande, fuerte, fantástico (big, strong, great)' },
    { tone: 'blue', label: 'DESPECTIVO · -ucho: feo o de mala calidad (ugly, poor quality)' },
    { tone: 'violet', label: 'PALABRA PROPIA · bolsillo, cajón: ya no es diminutivo ni aumentativo (a word of its own)' },
  ],
  optionNotes: {
    'un pocito': 'Poco → **poquito**: la c cambia a qu para mantener el sonido /k/.',
    'una problemita': '«Problema» es masculino, y el diminutivo mantiene el género: **un problemita**.',
    'la sillona': '**El sillón** (armchair) es una palabra propia y masculina; «sillona» no existe.',
    'tazita': 'Delante de i, la z se escribe c: taza → **tacita**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Pequeño, cariñoso o enorme?', coach: 'Una terminación cambia el tono. An ending changes the tone.',
      steps: [
        { title: 'Primer día en La Espiga · First day at La Espiga', blocks: [
          { kind: 'lead', text: 'Rosa Medina tiene una panadería-café en su barrio: La Espiga. Hoy su sobrino Bruno empieza a trabajar allí. Rosa le explica: «Con los clientes, siempre amable: “**Un momentito**, por favor”, “¿Quiere **un cafecito**?”». Y al ver entrar a un vecino con su perro, Bruno dice: «¡Qué **perrazo**!». Hoy aprendes a cambiar el tono de una palabra con una terminación: más pequeña, más cariñosa, más amable o más grande.', en: 'Rosa Medina runs a bakery-café in her neighbourhood: La Espiga. Today her nephew Bruno starts working there. Rosa explains: “With customers, always friendly: ‘Just a moment, please’, ‘Would you like a nice coffee?’”. And when a neighbour comes in with his dog, Bruno says: “What a huge dog!”. Today you learn to change the tone of a word with an ending: smaller, more affectionate, more polite, or bigger.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después tu alumno dice en qué frase la palabra es pequeña, en cuál es amable y en cuál es enorme.', self: 'Lee las tres frases en voz alta. ¿Qué es pequeño, qué es amable y qué es enorme? (Which one is small, which one is polite, which one is huge?)' } },
          { kind: 'compare', title: 'Tres frases de La Espiga · Three sentences from La Espiga', columns: [
            { tone: 'teal', label: 'DIMINUTIVO · tamaño', sentence: 'En el rincón hay una [[mesita|teal]] para dos.', idea: 'Mesa + -ita: una mesa pequeña, y además simpática.', en: 'In the corner there is a little table for two. (small size)' },
            { tone: 'teal', label: 'DIMINUTIVO · cortesía', sentence: '[[Un momentito|teal]], por favor.', idea: 'No es un momento pequeño: es una forma amable de pedir.', en: 'Just a moment, please. (polite, not about size)' },
            { tone: 'orange', label: 'AUMENTATIVO', sentence: 'Hugo tiene [[un perrazo|orange]].', idea: 'Perro + -azo: un perro muy grande.', en: 'Hugo has a huge dog. (big size)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rosa dice a un cliente: «Un momentito, por favor». ¿Qué quiere decir?', options: ['Usted es muy pequeño.', 'Espere un poco, por favor (con amabilidad).', 'Solo tengo un segundo para usted.'], answer: 1, why: 'El diminutivo aquí no habla de tamaño: hace la petición más amable.', en: 'Rosa tells a customer: “Un momentito, por favor”. What does she mean?' },
            { prompt: '«Hugo tiene un perrazo» significa…', options: ['Hugo tiene un perro feo.', 'Hugo tiene un perro pequeño.', 'Hugo tiene un perro muy grande.'], answer: 2, why: '-azo es un aumentativo: perro muy grande.', en: '“Hugo tiene un perrazo” means…' },
          ] },
        ] },
        { title: 'Cómo se forma el diminutivo · How the diminutive is formed', mascot: '/brand/mascot/studying.webp', coach: 'Casa → casita. Café → cafecito.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DIMINUTIVO', question: '¿Cómo hago una palabra «pequeña» o cariñosa?', en: 'How do I make a word “small” or affectionate?', formula: ['-o / -a → -ito / -ita: casa → casita', '-e, -n, -r → -cito / -cita: café → cafecito', 'una sílaba → -ecito / -ecita: pan → panecito'],
            meaning: 'La terminación más general es **-ito / -ita**. Si la palabra termina en -o o -a, quitas la vocal: perr**o** → perr**ito**. Con otras consonantes añades -ito: pastel → pastel**ito**. Muchas palabras en -e, -n, -r llevan **-cito**, y las de una sílaba, **-ecito**. El diminutivo concuerda como un adjetivo y **mantiene el género** de la palabra.',
            examples: [
              { es: 'Doña Pilar pide [[un cafecito|teal]] con leche.', en: 'Doña Pilar asks for a (nice little) coffee with milk.' },
              { es: 'En la vitrina hay [[pastelitos|teal]] de crema.', en: 'In the display case there are little cream cakes.' },
              { es: 'Rosa enciende una [[lucecita|teal]] en la vitrina.', en: 'Rosa switches on a little light in the display case.' },
            ],
            note: 'Hay variación: **panecito** y **pancito**, **florecita** y **florcita**, **pueblecito** y **pueblito**. Todas existen; su uso varía según la zona.' },
          { kind: 'table', title: 'Cambios de ortografía · Spelling changes', head: ['Palabra', 'Diminutivo', 'Qué cambia (what changes)'], rows: [
            ['poco, chico, cerca', 'po**qu**ito, chi**qu**ito, cer**qu**ita', 'c → qu, para mantener el sonido /k/'],
            ['amigo, lago', 'ami**gu**ito, la**gu**ito', 'g → gu, para mantener el sonido /g/'],
            ['taza, pedazo', 'ta**c**ita, peda**c**ito', 'z → c delante de i'],
            ['luz, voz', 'lu**c**ecita, vo**c**ecita', 'z → c delante de e'],
            ['pobre, café, joven', 'pobre**cito**, cafe**cito**, joven**cito**', '-e, -n: + -cito'],
            ['el problema', '**un** problem**ita**', 'el género no cambia (masculino, aunque termine en -a)'],
          ], note: 'También con algunos adverbios, sobre todo en la conversación: cerquita, despacito, tempranito.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Solo quiero ___ de azúcar, gracias.', options: ['un pocito', 'un poquito', 'un pocazo'], answer: 1, why: 'Poco → poquito: c → qu para mantener el sonido /k/.', en: 'I only want a little bit of sugar, thanks.' },
            { prompt: 'Doña Pilar quiere el té en una taza pequeña: «Una ___, por favor».', options: ['tacita', 'tazona', 'tazita'], answer: 0, why: 'Delante de i, la z se escribe c: taza → tacita.', en: 'Doña Pilar wants her tea in a small cup: “A little cup, please”.' },
          ] },
        ] },
        { title: 'Pequeño, cariño, cortesía · Small, affection, politeness', mascot: '/brand/mascot/speaking.webp', coach: 'No siempre es pequeño. It is not always small.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VALOR DEL DIMINUTIVO', question: '¿Para qué uso el diminutivo?', en: 'What do I use the diminutive for?', formula: ['tamaño: una mesita, unas cucharitas', 'cariño: mi abuelita, mi perrita', 'cortesía: un momentito, un cafecito, un favorcito'],
            meaning: 'El diminutivo puede hablar de **tamaño** (algo pequeño), de **cariño** (personas, animales y cosas que quieres) o de **cortesía**: hace una petición más suave y amable. En «¿Me esperas un minutito?», el minuto no es más corto: la pregunta es más amable. **-illo / -illa** también es diminutivo (una cosilla, un trabajillo) y a veces quita importancia; **-ito** es el más general, y la frecuencia de -illo varía según la zona.',
            examples: [
              { es: 'Mi [[abuelita|teal]] viene todos los domingos a La Espiga.', en: 'My (dear) grandma comes to La Espiga every Sunday.' },
              { es: '¿Me haces [[un favorcito|teal]]? Pásame las servilletas.', en: 'Can you do me a little favour? Pass me the napkins.' },
              { es: 'Tengo [[una cosilla|teal]] que preguntarte.', en: 'I have a little something to ask you.' },
            ] },
          { kind: 'compare', title: 'Calentito o calentísimo · Nicely warm or very hot', columns: [
            { tone: 'neutral', label: '-ÍSIMO · clase 069', sentence: 'El café está calentísimo.', idea: 'Muy, muy caliente: ¡cuidado!', en: 'The coffee is very, very hot: careful!' },
            { tone: 'teal', label: '-ITO · hoy', sentence: 'El café está [[calentito|teal]].', idea: 'Caliente y agradable, como te gusta.', en: 'The coffee is nice and warm, just how you like it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Bruno, a un cliente con prisa: «¿Me espera ___? Termino este pedido».', options: ['un minuto pequeño', 'un minutito', 'un minutazo'], answer: 1, why: 'Diminutivo de cortesía: un minutito suaviza la petición.', en: 'Bruno, to a customer in a hurry: “Could you wait a moment? I’m finishing this order”.' },
            { prompt: 'Hace frío y doña Pilar dice: «¡Qué rica esta sopa ___!».', options: ['calentaza', 'calentísima', 'calentita'], answer: 2, why: 'Calentita = caliente y agradable. Calentísima sería «muy, muy caliente».', en: 'It is cold and doña Pilar says: “This nice warm soup is delicious!”' },
          ] },
        ] },
        { title: 'Grande y feo: -ón, -azo, -ucho · Big and ugly', mascot: '/brand/mascot/standing.webp', coach: 'Un perrazo, un hotelucho.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'AUMENTATIVO Y DESPECTIVO', question: '¿Cómo digo que algo es enorme, fantástico o de mala calidad?', en: 'How do I say that something is huge, great, or poor quality?', formula: ['-ón / -ona: un problemón, un notición, una casona', '-azo / -aza: un perrazo, un exitazo, un golpazo', '-ucho / -ucha: un hotelucho, un cuartucho (despectivo)'],
            meaning: 'El **aumentativo** hace la cosa más grande o más intensa: **-ón** (un problemón = un problema muy grande) y **-azo** (un perrazo, un exitazo = un éxito enorme). -azo también puede ser **un golpe**: un golpazo, un portazo (el golpe de una puerta). A veces la palabra con -ón pasa a masculino: la fiesta → **un fiestón**, la noticia → **un notición**. **-ucho** es **despectivo**: algo feo, viejo o de mala calidad. Todas son frecuentes en la conversación informal.',
            examples: [
              { es: 'El pastel de chocolate fue [[un exitazo|orange]]: se vendió todo.', en: 'The chocolate cake was a huge hit: it all sold out.' },
              { es: 'Se rompió la máquina del café. ¡Qué [[problemón|orange]]!', en: 'The coffee machine broke. What a big problem!' },
              { es: 'Antes, Bruno vivía en [[un cuartucho|blue]] sin ventana.', en: 'Before, Bruno lived in a poky little room with no window.' },
            ],
            note: 'También oyes **-ote / -ota**: grandote, un librote. Con personas, el aumentativo y el despectivo pueden ofender: úsalos con cuidado.' },
          { kind: 'table', title: 'Tres valores · Three values', head: ['Palabra', 'Forma', 'Significado (meaning)'], rows: [
            ['la casa', 'una cas**ita** · una cas**ona** · una cas**ucha**', 'pequeña y bonita · grande (y antigua) · fea y pobre'],
            ['el hotel', 'un hotel**ito** · un hotel**ucho**', 'pequeño y agradable · feo, sucio, de mala calidad'],
            ['el gol', 'un gol**azo**', 'un gol fantástico'],
            ['el éxito', 'un exit**azo**', 'un éxito enorme'],
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hugo cuenta: «El hotel de mis vacaciones era viejo, sucio y oscuro: ___».', options: ['un hotelazo', 'un hotelito', 'un hotelucho'], answer: 2, why: 'Viejo, sucio, oscuro: valor despectivo, -ucho.', en: 'Hugo says: “My holiday hotel was old, dirty and dark: a real dump”.' },
            { prompt: 'Toda la calle compra el pastel nuevo. Es ___.', options: ['un exitazo', 'un exitito', 'un éxito pequeño'], answer: 0, why: 'Un éxito enorme: aumentativo -azo.', en: 'The whole street buys the new cake. It is a huge hit.' },
          ] },
        ] },
        { title: 'Palabras con vida propia · Words of their own', mascot: '/brand/mascot/portrait.webp', coach: 'Un bolsillo no es un bolso pequeño.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PALABRAS LEXICALIZADAS', question: '¿Bolsillo es un bolso pequeño?', en: 'Is a “bolsillo” a small bag?', formula: ['bolso → bolsillo (pocket)', 'caja → el cajón (drawer)', 'silla → el sillón (armchair)'],
            meaning: 'Algunas palabras nacieron como diminutivos o aumentativos, pero hoy son **palabras propias**, con su significado en el diccionario. **El bolsillo** es la parte del pantalón donde llevas las llaves; un bolso pequeño es **un bolsito**. **El cajón** es la parte de una mesa o de un mueble que abres para guardar cosas (drawer); no es una caja grande. Fíjate en el género: la caja → **el** cajón, la silla → **el** sillón.',
            examples: [
              { es: 'Bruno guarda los tickets en [[el cajón|violet]] del mostrador.', en: 'Bruno keeps the receipts in the counter drawer.' },
              { es: 'El pan para llevar se vende en [[la ventanilla|violet]].', en: 'Takeaway bread is sold at the hatch.' },
              { es: 'Rosa sirve la sopa con [[el cucharón|violet]].', en: 'Rosa serves the soup with the ladle.' },
            ] },
          { kind: 'table', title: 'No te confundas · Don’t mix them up', head: ['Palabra propia', 'English', 'Pequeño o grande (small or big)'], rows: [
            ['[[el bolsillo|violet]]', 'pocket', 'un bolso pequeño = un [[bolsito|teal]]'],
            ['[[la ventanilla|violet]]', 'car or bus window; ticket window', 'una ventana pequeña = una [[ventanita|teal]]'],
            ['[[el cajón|violet]]', 'drawer', 'una caja pequeña = una [[cajita|teal]]'],
            ['[[el sillón|violet]]', 'armchair', 'una silla pequeña = una [[sillita|teal]]'],
            ['[[el cucharón|violet]]', 'ladle', 'una cuchara pequeña = una [[cucharita|teal]]'],
          ] },
          { kind: 'decide', title: '¿Qué forma necesitas? · Which form do you need?', steps: [
            { q: '¿Es una palabra con significado propio (bolsillo = pocket, cajón = drawer)?', yes: 'Úsala como una palabra normal: no significa «pequeño» ni «grande».', no: 'next' },
            { q: '¿Hablas de algo pequeño, de alguien que quieres, o pides algo con amabilidad?', yes: 'Usa el **diminutivo**: una mesita, mi perrita, un momentito.', no: 'next' },
            { q: '¿Es algo enorme, muy intenso o fantástico?', yes: 'Usa el **aumentativo**: un perrazo, un problemón, un exitazo.', no: '¿Es feo o de mala calidad? Entonces -ucho: un hotelucho. Si no, usa la palabra normal.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Bruno busca las llaves. Rosa: «Están en ___ de tu pantalón».', options: ['la bolsilla', 'el bolsito', 'el bolsillo'], answer: 2, why: 'Bolsillo = pocket. Un bolsito es un bolso pequeño.', en: 'Bruno is looking for the keys. Rosa: “They are in your trouser pocket”.' },
            { prompt: 'Hugo se sienta en ___ del rincón: es grande y cómodo.', options: ['el sillón', 'la sillona', 'la sillita'], answer: 0, why: 'El sillón (armchair) es masculino y es una palabra propia; «sillona» no existe.', en: 'Hugo sits in the armchair in the corner: it is big and comfortable.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde está el error? Where is the mistake?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla. Después aparece la corrección y tu alumno la lee en voz alta.', self: 'Lee cada frase y busca el error. Toca para ver la corrección y léela en voz alta. (Find the mistake, then read the correction aloud.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Solo quiero un pocito de leche.', right: 'Solo quiero un poquito de leche.', why: 'Poco → poquito: c → qu para mantener el sonido /k/. (Spelling keeps the sound.)' },
            { wrong: 'Enciende la luzecita de la vitrina.', right: 'Enciende la lucecita de la vitrina.', why: 'Delante de e o i, la z se escribe c: luz → lucecita. (z becomes c before e, i.)' },
            { wrong: 'Tengo una problemita con la máquina.', right: 'Tengo un problemita con la máquina.', why: 'Problema es masculino, y el diminutivo mantiene el género. (Same gender as the base word.)' },
            { wrong: 'Siéntate en la sillona del rincón.', right: 'Siéntate en el sillón del rincón.', why: 'Sillón es una palabra propia y masculina: el sillón. (Armchair: a word of its own.)' },
            { wrong: 'Llevo las llaves en el bolsito del pantalón.', right: 'Llevo las llaves en el bolsillo del pantalón.', why: 'Pocket = bolsillo. Un bolsito es un bolso pequeño. (A bolsito is a small bag.)' },
            { wrong: 'Doña Pilar vive en una casucha preciosa.', right: 'Doña Pilar vive en una casita preciosa.', why: '-ucha es despectivo (fea, pobre); para el cariño, -ita. (-ucha sounds negative.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Bruno rompió una taza: «Perdón, ___ con la bandeja».', options: ['un problemito', 'una problemita', 'un problemita'], answer: 2, why: 'El problema → un problemita: masculino, y la -a final se mantiene.', en: 'Bruno broke a cup: “Sorry, a little problem with the tray”.' },
            { prompt: 'Rosa: «Bruno, ¿me das ___ de pan para la perrita de doña Pilar?».', options: ['un pedacito', 'un pedazote', 'un pedazito'], answer: 0, why: 'Pedazo → pedacito: z → c delante de i. Y es para una perrita: pequeño.', en: 'Rosa: “Bruno, can you give me a little piece of bread for doña Pilar’s little dog?”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre su casa o su barrio: una con un diminutivo de tamaño o cariño, una con un diminutivo de cortesía y una con un aumentativo. Tú reaccionas: «¡Qué casita tan bonita!», «¡Qué perrazo!».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Una mañana en La Espiga', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'El primer cliente · The first customer', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rosa y doña Pilar, tu alumno es Bruno y Hugo. Después tu alumno toca cada palabra marcada y dice qué valor tiene: pequeño, cariño, cortesía, grande, despectivo o palabra propia.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di qué valor tiene: ¿pequeño, cariño, cortesía, grande, despectivo o palabra propia? (What value does each one have?)' } },
          { kind: 'explore', title: 'El primer día de Bruno', setting: 'Las ocho de la mañana en La Espiga. Rosa enseña a Bruno a atender a los clientes. Entran doña Pilar, con su perrita, y Hugo, un vecino, con su perro Toro. (Eight in the morning at La Espiga. Rosa shows Bruno how to serve customers.)', lines: [
            { who: 'Rosa', text: 'Buenos días, Bruno. Abre [[la ventanilla|violet]]: ya hay gente esperando.', en: 'Good morning, Bruno. Open the hatch: there are people waiting already.' },
            { who: 'Doña Pilar', text: 'Buenos días, Rosa. ¿Me das [[un cafecito|teal]] con leche, por favor?', en: 'Good morning, Rosa. Could I have a nice coffee with milk, please?' },
            { who: 'Rosa', text: 'Claro, doña Pilar. [[Un momentito|teal]]: hoy Bruno empieza a trabajar aquí.', en: 'Of course, doña Pilar. Just a moment: Bruno starts working here today.' },
            { who: 'Bruno', text: 'Aquí tiene su café, señora. Está [[calentito|teal]].', en: 'Here is your coffee, madam. It’s nice and warm.' },
            { who: 'Doña Pilar', text: 'Gracias, joven. Y para [[mi perrita|teal]], [[un pedacito|teal]] de pan, si es posible.', en: 'Thank you, young man. And for my little dog, a little piece of bread, if possible.' },
            { who: 'Hugo', text: 'Hola a todos. ¿Puedo entrar con Toro? Es [[un perrazo|orange]], pero es muy tranquilo.', en: 'Hi, everyone. Can I come in with Toro? He’s a huge dog, but he’s very calm.' },
            { who: 'Rosa', text: 'Sí, claro, Hugo. Siéntate en [[el sillón|violet]] del rincón. ¿Qué quieres tomar?', en: 'Yes, of course, Hugo. Sit in the armchair in the corner. What would you like?' },
            { who: 'Hugo', text: 'El pastel de chocolate. En el barrio dicen que es [[un exitazo|orange]].', en: 'The chocolate cake. People in the neighbourhood say it’s a huge hit.' },
            { who: 'Doña Pilar', text: '(Bruno deja caer una bandeja.) ¡Qué [[golpazo|orange]]! ¿Estás bien, Bruno?', en: '(Bruno drops a tray.) What a crash! Are you OK, Bruno?' },
            { who: 'Bruno', text: 'Sí, sí, no es nada: solo [[un problemita|teal]] con las tazas.', en: 'Yes, yes, it’s nothing: just a little problem with the cups.' },
            { who: 'Doña Pilar', text: '[[Pobrecito|teal]]. Tranquilo, hijo: el primer día siempre es difícil.', en: 'Poor thing. Don’t worry, dear: the first day is always hard.' },
            { who: 'Rosa', text: 'Ánimo, Bruno. El dinero, en [[el cajón|violet]], no en [[el bolsillo|violet]]. Y piensa: antes trabajabas en [[un hotelucho|blue]]; aquí estás mucho mejor.', en: 'Cheer up, Bruno. The money goes in the drawer, not in your pocket. And remember: you used to work in a dump of a hotel; you are much better off here.' },
          ], notes: {
            'la ventanilla': 'Palabra propia: **la ventanilla** es la ventana pequeña de una tienda, un banco o un vehículo, por donde se atiende o se mira. No es «diminutivo» de ventana.',
            'un cafecito': 'Café (-é) + **-cito**. Cortesía y cariño: no pide un café más pequeño, sino que lo pide de forma amable.',
            'Un momentito': 'Diminutivo de **cortesía**: Rosa pide paciencia con amabilidad. No es un momento más corto.',
            'calentito': 'Caliente → **calentito**: caliente y agradable. Compara: calentísimo = muy, muy caliente.',
            'mi perrita': 'Perra → **perrita**: cariño. Doña Pilar habla de su animal con afecto (y además es pequeña).',
            'un pedacito': 'Pedazo → **pedacito**: z → c delante de i. Un trozo pequeño.',
            'un perrazo': 'Perro + **-azo**: un perro muy grande. Aumentativo.',
            'el sillón': 'Palabra propia: **el sillón** = armchair. Masculino, aunque viene de «la silla».',
            'un exitazo': 'Éxito + **-azo**: un éxito enorme. Es coloquial y positivo.',
            'golpazo': 'Golpe + **-azo**: un golpe fuerte y ruidoso. -azo también expresa golpes: un portazo.',
            'un problemita': 'El problema → **un problemita**: mantiene el género masculino. Bruno quita importancia al accidente.',
            'Pobrecito': 'Pobre (-e) + **-cito**: cariño y compasión. Doña Pilar consuela a Bruno.',
            'el cajón': 'Palabra propia: **el cajón** = drawer. Masculino, aunque viene de «la caja».',
            'el bolsillo': 'Palabra propia: **el bolsillo** = pocket. Un bolso pequeño es un bolsito.',
            'un hotelucho': 'Hotel + **-ucho**: despectivo. Un hotel feo y de mala calidad.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué pide doña Pilar para su perrita?', options: ['Un poquito de leche.', 'Un pedacito de pan.', 'Un pastelito de crema.'], answer: 1, why: '«Y para mi perrita, un pedacito de pan, si es posible».', en: 'What does doña Pilar ask for for her little dog?' },
            { prompt: '¿Cómo es Toro, el perro de Hugo?', options: ['Pequeño y nervioso.', 'Muy grande, pero tranquilo.', 'Feo y viejo.'], answer: 1, why: '«Es un perrazo, pero es muy tranquilo».', en: 'What is Toro, Hugo’s dog, like?' },
            { prompt: '¿Qué le pasa a Bruno?', options: ['Se le olvida el café de doña Pilar.', 'Deja caer una bandeja con tazas.', 'Pierde el dinero del cajón.'], answer: 1, why: '«¡Qué golpazo!» y «solo un problemita con las tazas».', en: 'What happens to Bruno?' },
          ] },
        ] },
        { title: '¿Qué valor tiene? · What value does it have?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Palabras de la mañana · Words from the morning', categories: [
            { id: 'diminutivo', label: 'DIMINUTIVO · pequeño, cariño, cortesía', tone: 'teal' },
            { id: 'aumentativo', label: 'AUMENTATIVO · grande, fuerte', tone: 'orange' },
            { id: 'despectivo', label: 'DESPECTIVO · feo, malo', tone: 'blue' },
            { id: 'propia', label: 'PALABRA PROPIA · bolsillo, cajón', tone: 'violet' },
          ], items: [
            { text: 'Un momentito, doña Pilar.', answer: 'diminutivo', why: 'Cortesía: una petición amable.' },
            { text: 'Toro es un perrazo.', answer: 'aumentativo', why: 'Un perro muy grande: -azo.' },
            { text: 'Siéntate en el sillón.', answer: 'propia', why: 'Sillón = armchair: palabra propia, no «silla grande».' },
            { text: 'Antes trabajabas en un hotelucho.', answer: 'despectivo', why: 'Un hotel feo y malo: -ucho.' },
            { text: 'El dinero, en el cajón.', answer: 'propia', why: 'Cajón = drawer: palabra propia.' },
            { text: 'Pobrecito, es su primer día.', answer: 'diminutivo', why: 'Cariño y compasión: pobre → pobrecito.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué llevas hoy en los bolsillos? ¿Y qué guardas en el cajón de tu mesa?». Tu alumno responde con dos frases completas.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '-ito, -cito, -ón, -azo, -ucho… y palabras propias.',
      steps: [
        { title: 'Detrás del mostrador · Behind the counter', blocks: [
          { kind: 'choice', items: [
            { context: 'Un cliente pone azúcar en su café. (A customer adds sugar to his coffee.)', prompt: '—¿Mucho? —No, no, solo ___.', options: ['un pocito', 'un poquito', 'un pocazo'], answer: 1, why: 'Poco → poquito: c → qu.', en: '“A lot?” “No, no, just a little.”' },
            { context: 'Doña Pilar habla de Leo, el hijo de cinco años de su vecina. (Doña Pilar talks about her neighbour’s five-year-old son.)', prompt: '«Leo es mi ___ favorito».', options: ['amigito', 'amiguito', 'amigucho'], answer: 1, why: 'Amigo → amiguito: g → gu para mantener el sonido /g/. Y es cariño, no desprecio.', en: '“Leo is my favourite little friend.”' },
            { context: 'Bruno ordena el mostrador. (Bruno tidies the counter.)', prompt: 'Guarda los tickets en ___ del mostrador.', options: ['la cajona', 'la cajaza', 'el cajón'], answer: 2, why: 'Cajón = drawer: palabra propia, masculina.', en: 'He puts the receipts in the counter drawer.' },
            { context: 'Doña Pilar habla con su perrita. (Doña Pilar talks to her little dog.)', prompt: '«Ven aquí, mi ___».', options: ['perrucha', 'perrita', 'perraza'], answer: 1, why: 'Cariño: -ita. Perraza = muy grande; perrucha sería despectivo.', en: '“Come here, my little doggie.”' },
            { context: 'Una clienta quiere una taza pequeña. (A customer wants a small cup.)', prompt: '«¿Me sirves el té en una ___?»', options: ['tacita', 'tazona', 'tazita'], answer: 0, why: 'Taza → tacita: z → c delante de i.', en: '“Could you serve my tea in a little cup?”' },
          ] },
        ] },
        { title: '¿Qué valor tiene? · What value does it have?', blocks: [
          { kind: 'classify', title: 'Tamaño, cariño, cortesía o intensidad · Size, affection, politeness or intensity', categories: [
            { id: 'tamano', label: 'TAMAÑO · pequeño', tone: 'teal' },
            { id: 'carino', label: 'CARIÑO', tone: 'teal' },
            { id: 'cortesia', label: 'CORTESÍA · más amable', tone: 'teal' },
            { id: 'grande', label: 'GRANDE O INTENSO · -ón, -azo', tone: 'orange' },
          ], items: [
            { text: 'La mesita del rincón solo tiene sitio para una taza.', answer: 'tamano', why: 'Solo cabe una taza: la mesa es pequeña.' },
            { text: '¿Me esperas un minutito? Termino esta cuenta.', answer: 'cortesia', why: 'Una petición amable; el minuto no es más corto.' },
            { text: 'Gracias por todo, abuelita. Te quiero mucho.', answer: 'carino', why: 'Afecto por una persona querida.' },
            { text: 'Hugo tiene un perrazo de cuarenta kilos.', answer: 'grande', why: 'Cuarenta kilos: un perro muy grande.' },
            { text: '¿Me haces un favorcito? Pásame la sal.', answer: 'cortesia', why: 'Diminutivo que suaviza una petición.' },
            { text: 'El pastel nuevo fue un exitazo.', answer: 'grande', why: 'Un éxito enorme: -azo.' },
            { text: 'Las cucharitas de postre están en esa caja.', answer: 'tamano', why: 'Cucharas pequeñas, para el postre.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Pon las llaves en la cajón de la mesa.', ok: false, options: ['Pon las llaves en la cajona de la mesa.', 'Pon las llaves en el cajón de la mesa.', 'Pon las llaves en el cajona de la mesa.'], answer: 1, why: 'Cajón es masculino: el cajón, aunque viene de «la caja».' },
            { sentence: 'Un cliente pide un cafecito con leche.', ok: true, why: 'Correcta: café → cafecito (-é + -cito).' },
            { sentence: 'Solo quiero un pocito de leche.', ok: false, options: ['Solo quiero un pocazo de leche.', 'Solo quiero una poquita de leche.', 'Solo quiero un poquito de leche.'], answer: 2, why: 'Poco → poquito: c → qu para mantener el sonido /k/. Y «un poquito de», en masculino.' },
            { sentence: 'Bruno encendió una luzecita en la vitrina.', ok: false, options: ['Bruno encendió un lucecito en la vitrina.', 'Bruno encendió una lucecita en la vitrina.', 'Bruno encendió una luzita en la vitrina.'], answer: 1, why: 'Luz → lucecita: z → c delante de e, y femenino como «la luz».' },
            { sentence: 'Doña Pilar vive en una casucha preciosa con jardín.', ok: false, options: ['Doña Pilar vive en una casucha preciosísima con jardín.', 'Doña Pilar vive en un casucho precioso con jardín.', 'Doña Pilar vive en una casita preciosa con jardín.'], answer: 2, why: '-ucha es despectivo y no combina con «preciosa». Para el cariño: casita.' },
            { sentence: 'Siempre llevo el teléfono en el bolsito del pantalón.', ok: false, options: ['Siempre llevo el teléfono en la bolsilla del pantalón.', 'Siempre llevo el teléfono en el bolsón del pantalón.', 'Siempre llevo el teléfono en el bolsillo del pantalón.'], answer: 2, why: 'Pocket = el bolsillo. Un bolsito es un bolso pequeño.' },
          ] },
        ] },
        { title: 'El sábado en La Espiga · Saturday at La Espiga', blocks: [
          { kind: 'chat-fill', title: 'Bruno atiende solo · Bruno serves on his own', lines: [
            { who: 'Lidia', text: 'Hola, buenos días. ¿Tienen algo para desayunar rápido?' },
            { who: 'Bruno', text: 'Sí, claro. ¿Quiere ___ con leche? Está recién hecho.', options: ['un cafeíto', 'un cafecito', 'una cafecita'], answer: 1, why: 'Café (-é) + -cito, y masculino como «el café»: un cafecito.' },
            { who: 'Lidia', text: 'Sí, gracias. Y algo dulce, pero pequeño.' },
            { who: 'Bruno', text: 'Tenemos estos ___ de crema.', options: ['pastelitos', 'pastelones', 'pastelazos'], answer: 0, why: 'Algo pequeño: diminutivo. Pastel termina en -l: pastel + -ito.' },
            { who: 'Hugo', text: '(Entra.) Bruno, el pastel de chocolate es ___: toda la calle habla de él.', options: ['un exitazo', 'un exitito', 'un éxito pequeñito'], answer: 0, why: 'Toda la calle habla de él: un éxito enorme, -azo.' },
            { who: 'Bruno', text: 'Gracias, Hugo. Siéntate en ___ del rincón: es el más cómodo.', options: ['la sillona', 'la sillita', 'el sillón'], answer: 2, why: 'Sillón = armchair, masculino: «el más cómodo» concuerda con él.' },
            { who: 'Lidia', text: 'Perdone, ¿dónde pago?' },
            { who: 'Bruno', text: 'Aquí, en la caja. ___, por favor: termino con este cliente.', options: ['Un momentote', 'Un momentucho', 'Un momentito'], answer: 2, why: 'Cortesía: un momentito pide paciencia con amabilidad.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['un', '¿Me', 'momentito?', 'esperas'], accept: ['¿Me esperas un momentito?'], en: 'Can you wait a moment for me?' },
            { tiles: ['en', 'Las', 'llaves', 'están', 'cajón', 'el'], accept: ['Las llaves están en el cajón', 'En el cajón están las llaves'], en: 'The keys are in the drawer.' },
            { tiles: ['un', 'fue', 'exitazo', 'pastel', 'El'], accept: ['El pastel fue un exitazo'], en: 'The cake was a huge hit.' },
            { tiles: ['de', 'un', 'Quiero', 'poquito', 'azúcar'], accept: ['Quiero un poquito de azúcar'], en: 'I want a little bit of sugar.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia el tono · Change the tone', items: [
            { prompt: 'Quiero un café pequeño, por favor.', instruction: 'Usa un diminutivo en lugar de «café pequeño».', accept: ['Quiero un cafecito, por favor'] },
            { prompt: 'Hugo tiene un perro muy grande.', instruction: 'Usa un aumentativo en -azo en lugar de «perro muy grande».', accept: ['Hugo tiene un perrazo'] },
            { prompt: 'Espera un momento.', instruction: 'Haz la petición más amable con un diminutivo.', accept: ['Espera un momentito', 'Espera un momentito, por favor'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno describe la cafetería o el bar de su barrio con tres palabras de hoy: un diminutivo, un aumentativo y una palabra propia (sillón, cajón, ventanilla…).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Rosa', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Instrucciones para el sábado · Instructions for Saturday', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿por qué manda Rosa este audio?). Segunda escucha: tu alumno levanta la mano con cada diminutivo y da una palmada con cada aumentativo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Busca los diminutivos (-ito) y los aumentativos (-azo, -ote). (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Rosa para Bruno', channel: 'MENSAJE DE VOZ · DE ROSA PARA BRUNO', src: '/audio/grammar-live/540.mp3',
            before: 'El sábado Bruno abre la panadería solo por primera vez. Rosa le manda un audio la noche antes. ¿Qué crees que le explica: las llaves, los clientes, los pasteles…? (What do you think Rosa explains to him?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Rosa explica a Bruno qué hacer mañana, cuando abre solo.', 'Rosa cierra la panadería el sábado.', 'Rosa se enfada con Bruno por el golpazo.'], answer: 0, why: '«Mañana abres tú solo, así que te dejo unas notas».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿A qué hora tiene que llegar Bruno?', options: ['A las ocho.', 'A las siete en punto.', 'A las siete menos cuarto.'], answer: 2, why: '«Llega un poquito antes, a las siete menos cuarto».', en: 'What time does Bruno have to arrive?' },
              { prompt: '¿Dónde están las llaves?', options: ['En el bolsillo de Rosa.', 'En la ventanilla.', 'En el cajón de la mesa de la entrada.'], answer: 2, why: '«Las llaves están en el cajón de la mesa de la entrada».', en: 'Where are the keys?' },
              { prompt: '¿Qué pide siempre doña Pilar?', options: ['Un pastelito de crema.', 'Un té en una tacita.', 'Un cafecito con leche y un pedacito de pan.'], answer: 2, why: '«Pide su cafecito con leche y un pedacito de pan para su perra».', en: 'What does doña Pilar always order?' },
              { prompt: '¿Qué tiene que hacer Bruno con el pastel de chocolate?', options: ['No hacerlo, porque nadie lo compra.', 'Hacer uno pequeñito.', 'Hacer dos, uno muy grande para la vitrina.'], answer: 2, why: '«Fue un exitazo: haz dos, y uno grandote para la vitrina».', en: 'What does Bruno have to do with the chocolate cake?' },
              { prompt: '¿Qué dice Rosa del golpazo de la bandeja?', options: ['Que fue un problemón.', 'Que Bruno tiene que pagar las tazas.', 'Que no piense más en él: es normal el primer día.'], answer: 2, why: '«No pienses más en el golpazo de la bandeja: todos rompemos algo el primer día».', en: 'What does Rosa say about the crash with the tray?' },
            ],
            transcript: 'Hola, Bruno, soy Rosa. Mañana abres tú solo, así que te dejo unas notas. Llega [[un poquito|teal]] antes, a las siete menos cuarto. Las llaves están en [[el cajón|violet]] de la mesa de la entrada. Primero enciende el horno y prepara el pan para [[la ventanilla|violet]]. Doña Pilar viene siempre a las ocho: pide [[su cafecito|teal]] con leche y [[un pedacito|teal]] de pan para su perra. Si hay mucha gente, di «[[un momentito|teal]], por favor» con una sonrisa. ¡Ah! El pastel de chocolate fue [[un exitazo|orange]]: haz dos, y uno [[grandote|orange]] para la vitrina. Y no pienses más en el [[golpazo|orange]] de la bandeja: todos rompemos algo el primer día. Si tienes cualquier duda, llámame. ¡Suerte!',
            reply: { teacher: 'Tú eres Rosa. Tu alumno es Bruno y responde al audio con tres frases: da las gracias, repite una instrucción con un diminutivo y hace una pregunta.', self: 'Responde a Rosa en voz alta como Bruno: da las gracias, repite una instrucción con un diminutivo y haz una pregunta. (Answer Rosa as Bruno: thanks, one instruction, one question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Con cariño y con gracia', coach: 'Pequeño, amable, enorme. Small, polite, huge.',
      steps: [
        { title: 'Habla de tu mundo · Talk about your world', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Rosa y haces las preguntas; tu alumno responde con diminutivos, aumentativos y palabras propias. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Read each question and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Trabajas en La Espiga y hay cola. Atiende a un cliente con amabilidad. · You work at La Espiga and there is a queue: serve a customer politely.', followUps: ['¿Qué le ofreces? (What do you offer?)', '¿Qué le dices si tiene que esperar? (What do you say if they have to wait?)'], phrases: ['[[Un momentito|teal]], por favor.', '¿Quiere [[un cafecito|teal]]?', '¿Con [[un poquito|teal]] de leche?'], hint: 'Diminutivos de cortesía: un momentito, un minutito, un cafecito.', example: 'Buenos días. Un momentito, por favor: enseguida estoy con usted. ¿Quiere un cafecito? ¿Con un poquito de leche?', next: 'Ahora, un lugar que quieres.' },
            { q: 'Describe un lugar pequeño que te gusta mucho: un café, tu habitación, la casa de tu abuela. · Describe a small place you love.', followUps: ['¿Qué hay dentro? (What is inside?)', '¿Por qué te gusta? (Why do you like it?)'], phrases: ['Es [[una casita|teal]] / [[un cuartito|teal]]…', 'Tiene [[una mesita|teal]] / [[un jardincito|teal]]…', 'Me encanta porque…'], hint: 'Diminutivos de tamaño y de cariño: -ito, -cito.', example: 'Me encanta la casa de mi abuela. Es una casita blanca con un jardincito. En la cocina hay una mesita junto a la ventana y allí tomamos café.', next: 'Ahora, algo enorme.' },
            { q: 'Cuenta algo grande o fantástico: una fiesta, un partido, una noticia. · Tell about something big or fantastic.', followUps: ['¿Cuándo fue? (When was it?)', '¿Quién estaba? (Who was there?)'], phrases: ['Fue [[un fiestón|orange]] / [[un exitazo|orange]].', '¡Qué [[notición|orange]]!', 'Fue [[un golazo|orange]] / [[un partidazo|orange]].'], hint: 'Aumentativos -ón y -azo. Recuerda: la fiesta → un fiestón (masculino).', example: 'El sábado fue el cumpleaños de mi hermano y fue un fiestón: vinieron cuarenta personas. Y mi primo nos dio un notición: ¡se casa en junio!', next: 'Ahora, tus cosas.' },
            { q: '¿Qué llevas en los bolsillos? ¿Qué guardas en el cajón de tu mesa? · What do you carry in your pockets? What do you keep in your desk drawer?', followUps: ['¿Tienes un sillón favorito? (Do you have a favourite armchair?)', '¿Qué hay en tu bolso o mochila? (What is in your bag?)'], phrases: ['En [[el bolsillo|violet]] llevo…', 'En [[el cajón|violet]] guardo…', 'Mi sitio favorito es [[el sillón|violet]] de…'], hint: 'Palabras propias: bolsillo (pocket), cajón (drawer), sillón (armchair).', example: 'En el bolsillo llevo las llaves y el teléfono. En el cajón de mi mesa guardo bolígrafos y papeles viejos. Y mi sitio favorito es el sillón del salón.', next: 'Ahora, con cariño.' },
            { q: '¿Usas diminutivos con tu familia, tus amigos o tu mascota? ¿Con quién? · Do you use diminutives with your family, friends or pet?', followUps: ['¿Hay diminutivos en tu idioma? (Are there diminutives in your language?)', '¿Alguien te llama con un diminutivo? (Does anyone call you by a diminutive?)'], phrases: ['A mi abuela le digo [[abuelita|teal]].', 'Mi gata es [[pequeñita|teal]]…', 'En mi idioma, …'], hint: 'Diminutivos de cariño: abuelita, hermanito, mi perrito.', example: 'Sí, a mi abuela le digo abuelita y a mi hermano pequeño, hermanito. Mi gata es pequeñita y le hablo siempre con diminutivos. En inglés no usamos tantos.', teacher: 'Pregunta de cultura: cómo funcionan los diminutivos o las palabras de cariño en la lengua de tu alumno.' },
            { q: 'Cuenta tu peor alojamiento: un hotel, un apartamento, una habitación. · Tell about the worst place you have stayed.', followUps: ['¿Qué tenía de malo? (What was wrong with it?)', '¿Y el mejor? (And the best one?)'], phrases: ['Pasé tres noches en [[un hotelucho|blue]]…', 'Era [[un cuartucho|blue]] oscuro…', 'Después encontré [[una casita|teal]]…'], hint: '-ucho para lo feo o malo; -ito para lo bonito.', example: 'En mi primer viaje pasé tres noches en un hotelucho al lado de la estación. La habitación era un cuartucho sin ventana. Después encontramos una casita preciosa cerca del mar.', teacher: 'Tú reaccionas con «¡Pobrecito!» o «¡Pobrecita!» y una pregunta. Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Rosa y hace las preguntas; tú respondes con diminutivos y aumentativos, y tu alumno dice qué valor tiene cada uno.', self: 'Ahora haz tú las preguntas en voz alta y responde como otra persona: un amigo o un familiar. (Now ask the questions and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una invitación', coach: 'Escribe con cariño. Write warmly.',
      steps: [
        { title: 'Un mensaje para un amigo · A message to a friend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada diminutivo y aumentativo: ¿ortografía (qu, c)? ¿género? ¿el valor es el correcto? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, revisa la ortografía (poquito, tacita) y el género (un problemita). (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Te invito a un cafecito · Let’s have a coffee', situation: 'Quieres invitar a un amigo o una amiga a desayunar el sábado en tu café favorito (La Espiga u otro). Escríbele un mensaje con cariño. (You want to invite a friend to breakfast on Saturday at your favourite café. Write them a warm message.)', task: [
            'Invita con un diminutivo de cortesía: un ratito, un cafecito. (Invite them politely.)',
            'Describe el lugar con dos diminutivos de tamaño o cariño. (Describe the place.)',
            'Recomienda algo con un aumentativo en -azo o -ón. (Recommend something with an augmentative.)',
            'Usa una palabra propia: bolsillo, cajón, sillón o ventanilla. (Use one of these words.)',
            'Propón una hora y despídete. (Suggest a time and say goodbye.)',
          ], starters: ['¡Hola, …!', '¿Tienes un ratito el sábado?', 'Te invito a un cafecito en…', 'Es un lugar pequeñito, con…', 'Tienes que probar…: es un exitazo.', '¿Nos vemos a las…?', 'Un besito,'],
            words: ['un ratito', 'un cafecito', 'un poquito', 'una mesita', 'pequeñito', 'calentito', 'un exitazo', 'un fiestón', 'grandote', 'el sillón', 'el bolsillo', 'la ventanilla'],
            model: '¡Hola, Marta! ¿Tienes [[un ratito|teal]] el sábado? Te invito a [[un cafecito|teal]] en La Espiga, la panadería de mi barrio. Es un lugar [[pequeñito|teal]], con cinco [[mesitas|teal]] y [[un sillón|violet]] enorme junto a la ventana. La dueña, Rosa, es muy simpática. Tienes que probar el pastel de chocolate: es [[un exitazo|orange]] y siempre se termina antes de las doce. Ah, y lleva [[un poquito|teal]] de dinero en efectivo en [[el bolsillo|violet]]: los sábados no aceptan tarjeta. ¿Nos vemos a las diez? [[Un besito|teal]], Lidia.',
            minWords: 60,
            checks: [
              { label: 'Un diminutivo de cortesía: un ratito, un cafecito… (a polite diminutive)', pattern: '(?<!\\p{L})una?\\s+(?:ratito|momentito|minutito|cafecito|poquito|favorcito|segundito|tecito|desayunito)(?!\\p{L})', tip: 'Invita con amabilidad: «¿Tienes un ratito?», «Te invito a un cafecito».' },
              { label: 'Una palabra propia: bolsillo, cajón, sillón, ventanilla (a word of its own)', pattern: '(?<!\\p{L})(?:bolsillos?|caj[oó]n|cajones|sill[oó]n|sillones|ventanillas?)(?!\\p{L})', tip: 'Por ejemplo: «Lleva un poquito de dinero en el bolsillo».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})pocit[oa]s?(?!\\p{L})', why: 'Si quieres decir «a little», es **poquito**: c → qu.' },
              { pattern: '\\p{L}z(?:ec)?it[oa]s?(?!\\p{L})', why: 'Delante de e o i, la z se escribe **c**: taza → tacita, luz → lucecita, pedazo → pedacito.' },
              { pattern: '(?<!\\p{L})(?:una|la)\\s+problemita', why: '**El problema** es masculino: un problemita.' },
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
            { tone: 'teal', label: 'DIMINUTIVO', formula: '-ito / -ita · -cito · -ecito (-illo)', example: 'Un momentito, por favor. ¿Quiere un cafecito?', caption: 'pequeño, cariño o cortesía; mismo género; poco → poquito', en: 'small, affection or politeness; same gender; poco → poquito' },
            { tone: 'orange', label: 'AUMENTATIVO', formula: '-ón / -ona · -azo / -aza', example: 'Hugo tiene un perrazo. El pastel fue un exitazo.', caption: 'grande, intenso o fantástico; -azo también es un golpe', en: 'big, intense or great; -azo can also be a blow' },
            { tone: 'blue', label: 'DESPECTIVO', formula: '-ucho / -ucha', example: 'Antes vivía en un cuartucho.', caption: 'feo, viejo, de mala calidad', en: 'ugly, old, poor quality' },
            { tone: 'violet', label: 'PALABRA PROPIA', formula: 'bolsillo · ventanilla · cajón · sillón · cucharón', example: 'Las llaves están en el cajón.', caption: 'ya no significa «pequeño» ni «grande»', en: 'no longer means “small” or “big”' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate qué quieres decir: ¿pequeño o con cariño? → **-ito** (una mesita, mi perrita). ¿Más amable? → **-ito** también (un momentito). ¿Enorme o fantástico? → **-ón / -azo** (un perrazo, un exitazo). ¿Feo? → **-ucho**. Y recuerda: el bolsillo, el cajón y el sillón son palabras propias.', en: 'Ask yourself what you mean: small or affectionate? → -ito (una mesita, mi perrita). More polite? → -ito as well (un momentito). Huge or great? → -ón / -azo (un perrazo, un exitazo). Ugly? → -ucho. And remember: bolsillo, cajón and sillón are words of their own.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Hace frío. Quiero un té ___.', options: ['calentito', 'calentazo', 'calentucho'], answer: 0, why: 'Caliente y agradable: diminutivo, calentito.', en: 'It is cold. I want a nice warm tea.' },
            { prompt: 'Siempre llevo el teléfono en ___ del abrigo.', options: ['la bolsilla', 'el bolsito', 'el bolsillo'], answer: 2, why: 'Pocket = el bolsillo. Un bolsito es un bolso pequeño.', en: 'I always carry my phone in my coat pocket.' },
            { prompt: 'Dormimos en ___: sucio, oscuro y caro.', options: ['un hotelazo', 'un hotelito', 'un hotelucho'], answer: 2, why: 'Sucio, oscuro y caro: despectivo, -ucho.', en: 'We slept in a dump of a hotel: dirty, dark and expensive.' },
            { prompt: 'Mi vecina marcó un gol fantástico desde el centro del campo: ¡___!', options: ['un golito', 'un golazo', 'un golucho'], answer: 1, why: 'Un gol fantástico: aumentativo, -azo.', en: 'My neighbour scored a fantastic goal from the halfway line: what a goal!' },
            { prompt: 'Solo quiero ___ de tarta, gracias.', options: ['un pedacito', 'un pedazote', 'un pedazito'], answer: 0, why: 'Pedazo → pedacito: z → c delante de i; y «solo» pide algo pequeño.', en: 'I only want a small piece of cake, thanks.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, los mensajes de Lidia.', blocks: [
          { kind: 'lead', text: 'Lidia, la clienta del sábado, prepara una fiesta en su casa y escribe mensajes a sus amigos. Sus mensajes son correctos, pero un poco fríos. Transforma cada mensaje con la forma que se pide.', en: 'Lidia, Saturday’s customer, is getting a party ready at her place and writes messages to her friends. Her messages are correct, but a bit cold. Transform each message with the form you are asked for.' },
          { kind: 'rewrite', title: 'Los mensajes de Lidia · Lidia’s messages', items: [
            { prompt: 'Te espero en mi casa pequeña.', instruction: 'Usa un diminutivo en lugar de «casa pequeña».', accept: ['Te espero en mi casita'] },
            { prompt: 'La fiesta del año pasado fue una fiesta enorme y fantástica.', instruction: 'Usa el aumentativo de «fiesta» (¡cuidado con el género!). Empieza con «La fiesta del año pasado fue…».', accept: ['La fiesta del año pasado fue un fiestón'] },
            { prompt: '¿Puedes traer un poco de hielo?', instruction: 'Haz la petición más amable con «poco» en diminutivo.', accept: ['¿Puedes traer un poquito de hielo?'] },
          ] },
        ] },
        { title: 'Ampliación · Otros diminutivos, ironía y registro', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Tres ideas para ir más lejos. Primera: además de -ito e -illo, existen otros diminutivos, como **-ín** (chiquitín, pequeñín) o **-ico** (un ratico, un momentico); su uso varía según la zona. Segunda: el diminutivo puede ser **irónico**: «¡Vaya nochecita!» = una noche malísima. Tercera: en un texto **formal**, el diminutivo puede sonar poco serio o condescendiente: «Hay un **pequeño** error en su factura», mejor que «un errorcito».', en: 'Three ideas to go further. First: besides -ito and -illo there are other diminutives, such as -ín (chiquitín, pequeñín) or -ico (un ratico, un momentico); their use varies from area to area. Second: a diminutive can be ironic: “¡Vaya nochecita!” = what an awful night. Third: in formal writing, a diminutive can sound unserious or condescending: “There is a small error in your invoice” is better than “un errorcito”.' },
          { kind: 'tip', icon: '🌎', title: 'Escucha y entiende · Listen and understand', text: 'Vas a oír diminutivos distintos según el país, la región y hasta la familia. No necesitas usarlos todos: **-ito** se entiende y funciona en todas partes. Cuando oigas uno nuevo, piensa en la palabra base: ratico = rato, chiquitín = chico.', en: 'You will hear different diminutives depending on the country, the region and even the family. You don’t need to use them all: -ito is understood and works everywhere. When you hear a new one, think of the base word: ratico = rato, chiquitín = chico.' },
          { kind: 'choice', title: 'Para estudiantes rápidos · For fast learners', items: [
            { prompt: 'Bruno no durmió nada por el ruido de la calle. Por la mañana dice: «¡Vaya nochecita!». ¿Qué quiere decir?', options: ['Fue una noche muy mala.', 'Fue una noche tranquila.', 'Fue una noche corta y bonita.'], answer: 0, why: 'Diminutivo irónico: dice lo contrario de «pequeño y bonito».', en: 'Bruno didn’t sleep at all because of the street noise. In the morning he says: “¡Vaya nochecita!”. What does he mean?' },
            { prompt: 'Rosa escribe un correo formal a un proveedor. ¿Qué frase es más adecuada?', options: ['Hay un errorcito en su factura.', 'Hay un errorazo en su factura.', 'Hay un pequeño error en su factura.'], answer: 2, why: 'En un correo formal, «pequeño» es neutro; el diminutivo puede sonar poco serio.', en: 'Rosa writes a formal email to a supplier. Which sentence is more appropriate?' },
          ] },
          { kind: 'rewrite', title: 'Un paso más · One step further', items: [
            { prompt: '(Correo formal a un cliente) Le mando un informito con los precios.', instruction: 'Quita el diminutivo: en un correo formal puede sonar poco serio.', accept: ['Le mando un informe con los precios', 'Le envío un informe con los precios'] },
            { prompt: 'Ayer Bruno cerró la puerta con mucha fuerza y un ruido enorme.', instruction: 'Escribe la idea con «dar un portazo» en indefinido. Empieza con «Ayer Bruno…».', accept: ['Ayer Bruno dio un portazo'] },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional: para estudiantes rápidos o si queda tiempo. Pregunta final: «¿Qué diminutivo o palabra de cariño has oído en tus viajes o en series?». Tu alumno dice la palabra y su base.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 070 · Cuantificadores algo, nada, alguien, nadie', text: 'Ya cambias el tono de las palabras: «un momentito», «un poquito», «un exitazo». En la clase 070 aprendes palabras para hablar de cosas y personas sin nombrarlas, muy útiles en una cafetería: «¿Quieres **algo** más?», «No, **nada** más, gracias», «¿Hay **alguien** en la cola?». Es el paso natural: después de hablar de cantidad y tamaño con diminutivos y aumentativos, hablas de existencia: algo o nada, alguien o nadie.', en: 'You can now change the tone of words: “un momentito”, “un poquito”, “un exitazo”. In class 070 you learn words to talk about things and people without naming them, very useful in a café: “Anything else?”, “No, nothing else, thanks”, “Is there anyone in the queue?”. It is the natural next step: after talking about amount and size with diminutives and augmentatives, you talk about existence: something or nothing, someone or no one.', href: '/gramatica/cuantificadores-algo-nada-alguien-nadie', label: 'Ir a la clase 070' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuál es tu cafetería o tu rincón favorito? Descríbelo con cariño». Respuesta esperada: dos diminutivos bien formados y, si sale natural, un aumentativo. Tarea: escribir el mensaje de Escribir para un amigo real.' },
        ] },
      ],
    },
  ],
};
