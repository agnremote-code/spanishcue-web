import type { Module } from "../../types";

export const a1w17: Module = {
  id: "a1-17",
  level: "a1",
  week: 17,
  kind: "core",
  title: "La mochila perdida en el metro",
  subtitle: "Repaso de cómo identificar un objeto con varias pistas (la mochila negra pequeña, la que está en la caja) y de la comparación con más … que, menos … que y tan … como.",
  stop: { place: "Ciudad de Panamá", country: "Panamá" },
  minutes: 60,
  newObjectives: [
    "a1.gram.g036",
    "a1.gram.g037",
    "a1.voc.w17-objetos-comparar",
    "a1.pron.w17-vocal-final",
    "a1.lis.w17-objetos-perdidos-metro",
    "a1.read.w17-comparar-mochilas",
    "a1.wri.w17-mensaje-objeto-perdido",
    "a1.spk.w17-describir-comparar",
    "a1.fun.w17-identificar-comparar",
  ],
  reviewObjectives: ["a1.gram.g034","a1.gram.g035","a1.voc.w16-compras-ropa-cuerpo","a1.pron.w16-z-c-seseo","a1.lis.w16-pulperia-caminata","a1.read.w16-consejos-reserva","a1.wri.w16-mensaje-excursion","a1.spk.w16-lista-molestias","a1.fun.w16-organizar-compra-malestar"],
  prerequisites: ["a1-16"],
  goal: {
    canDo: "Al final de esta semana puedes describir un objeto con varias pistas hasta que la otra persona sabe cuál es, y comparar dos cosas por su tamaño, su precio o su peso.",
    canDoEn: "By the end of this week, you can describe an object with several clues until the other person knows which one it is, and compare two things by size, price or weight.",
    steps: [
      "Construye la descripción pista a pista: `la mochila` → `la mochila negra` → `la mochila negra que está en la caja`.",
      "Responde a `¿Cuál?` sin repetir el nombre: `la negra`, `el grande`, `la que está en la mesa`.",
      "Compara con `más … que` y `menos … que`.",
      "Di que dos cosas son iguales con `tan … como`.",
      "Escucha a una viajera que busca su mochila en la oficina de objetos perdidos del metro.",
      "Escribe un mensaje para describir un objeto perdido y compara dos objetos en voz alta.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases: cómo **identificar** un objeto con varias pistas (qué es, cómo es, dónde está) y cómo **comparar** dos cosas. Lo practicas en Ciudad de Panamá, en el metro y en una tienda del Casco Viejo.",
    parts: [
      {
        heading: "Pista a pista: qué es, cómo es, dónde está",
        body: [
          "Cuando hay varios objetos parecidos, una pista no basta. Sumas pistas en este orden: primero **el objeto** (_la mochila_), después **cómo es** (_negra, pequeña, de tela_) y al final **dónde está** (_que está en la caja_).",
          "El color y el tamaño van **después** del nombre y concuerdan con él: _el paraguas negro_, _la gorra blanca_, _unas llaves pequeñas_. Para el material usas **de**: _de tela_, _de cuero_, _de plástico_.",
          "Para la ubicación usas **estar**, no _ser_: _la que **está** en la caja_. Con **ser** dices cómo es: _la mochila **es** negra_.",
        ],
        support: [
          "Build the description clue by clue: what it is, what it's like (colour, size, material with _de_), where it is (_que está en…_).",
          "Colour and size go after the noun and agree with it. Location uses _estar_.",
        ],
        table: {
          caption: "Cada pista elimina objetos",
          head: ["Lo que dices", "Objetos posibles", "¿Basta?"],
          rows: [
            ["una mochila", "tres mochilas", "no"],
            ["una mochila negra", "dos mochilas negras", "no"],
            ["una mochila negra de tela", "una mochila", "sí"],
            ["la mochila que está en la caja", "una mochila", "sí"],
          ],
        },
        examples: [
          { es: "Busco un paraguas verde y grande de plástico.", en: "I'm looking for a big green plastic umbrella." },
          { es: "Es la gorra blanca que está al lado de las llaves.", en: "It's the white cap that is next to the keys." },
          { es: "Mi cartera es marrón, pequeña y de cuero.", en: "My wallet is brown, small and made of leather." },
        ],
        mistakes: [
          { wrong: "Busco la negra mochila.", right: "Busco la mochila negra.", why: "El color va **después** del nombre." },
          { wrong: "Es la mochila que es en la caja.", right: "Es la mochila que está en la caja.", why: "Para decir dónde está, **estar**." },
        ],
        tip: "Antes de describir, mira qué objetos hay y busca la pista que solo tiene tu objeto.",
      },
      {
        heading: "¿Cuál? La negra, el grande, la que está allí",
        body: [
          "Si la otra persona ya sabe de qué objeto hablas, no repites el nombre: dices **el, la, los, las** + la pista. —¿Cuál es tu mochila? —**La negra**. —¿Y tus llaves? —**Las pequeñas**.",
          "También puedes usar **el que, la que, los que, las que** + está…: _el que está en la mesa_, _las que están en la caja_. El artículo dice qué objeto es: **la** = la mochila, **el** = el paraguas.",
          "Recuerda las formas del adjetivo: en **-o**, cuatro formas (_negro, negra, negros, negras_); en **-e** o consonante, el masculino y el femenino son iguales (_grande, verde, azul, gris_).",
        ],
        support: [
          "When it's clear what you're talking about, drop the noun: _la negra_ (the black one), _el que está en la mesa_ (the one on the table).",
          "The article still agrees with the hidden noun: _la_ for _la mochila_, _el_ for _el paraguas_.",
        ],
        examples: [
          { es: "—¿Qué paraguas es tu paraguas? —El azul, el que está en la puerta.", en: "Which umbrella is your umbrella? The blue one, the one by the door." },
          { es: "Hay dos carteras. Mi cartera es la marrón.", en: "There are two wallets. My wallet is the brown one." },
          { es: "Las llaves que están en la mesa son de Sofía.", en: "The keys on the table are Sofía's." },
        ],
        mistakes: [
          { wrong: "¿Tu gorra? Es el blanco.", right: "¿Tu gorra? Es la blanca.", why: "_Gorra_ es femenino: **la blanca**." },
          { wrong: "Busco una cartera azula.", right: "Busco una cartera azul.", why: "**Azul** tiene una sola forma para el masculino y el femenino." },
        ],
      },
      {
        heading: "Más … que, menos … que",
        body: [
          "Para decir que A tiene **más** de algo que B: **más + adjetivo + que**. En inglés hay dos formas (_bigger, more expensive_); en español, siempre **más**: _más grande, más caro, más cómodo_.",
          "Para decir que A tiene **menos**: **menos + adjetivo + que**. Muchas veces es más natural el adjetivo contrario con **más**: _menos cara_ = _más barata_.",
          "El adjetivo concuerda con **A**, la primera cosa: _La mochila verde es más **cara** que el bolso_. Con un número no usas _que_, sino **de**: _cuesta **más de** cuarenta dólares_.",
        ],
        support: [
          "_Más … que_ = more … than (-er than); _menos … que_ = less … than. The adjective agrees with the first thing you compare.",
          "With a number, use _más de_: _más de cuarenta dólares_ (more than forty dollars).",
        ],
        table: {
          caption: "Dos formas de decir lo mismo",
          head: ["Con menos", "Con más + el contrario"],
          rows: [
            ["La gris es menos cara que la verde.", "La gris es más barata que la verde."],
            ["El bolso es menos grande que la maleta.", "El bolso es más pequeño que la maleta."],
            ["Esta calle es menos tranquila que el parque.", "Esta calle es más ruidosa que el parque."],
          ],
        },
        examples: [
          { es: "El metro es más rápido que el autobús.", en: "The metro is faster than the bus." },
          { es: "Las tiendas del Casco Viejo son menos baratas que el mercado.", en: "The shops in the Casco Viejo are less cheap than the market." },
        ],
        mistakes: [
          { wrong: "El metro es más rápido como el taxi.", right: "El metro es más rápido que el taxi.", why: "Con **más**, la pareja es **que**." },
          { wrong: "La maleta es más pesado que la mochila.", right: "La maleta es más pesada que la mochila.", why: "El adjetivo concuerda con la primera cosa: _la maleta_ → **pesada**." },
        ],
      },
      {
        heading: "Tan … como: iguales",
        body: [
          "Si A y B son **iguales** en algo, usas **tan + adjetivo + como**: _La gorra roja es tan barata como la azul_ (las dos cuestan cinco dólares).",
          "En negativo, **no es tan … como** es una forma muy natural de decir _menos_: _El bolso no es tan cómodo como la mochila_.",
          "Ojo con las parejas: **más … que**, **menos … que**, pero **tan … como**. Y para reconocer: **mejor** (más bueno) y **peor** (más malo) son formas especiales.",
        ],
        support: [
          "_Tan … como_ = as … as. _No es tan … como_ = not as … as.",
          "_Mejor_ = better, _peor_ = worse: just recognise them for now.",
        ],
        table: {
          caption: "Tres comparaciones con dos mochilas",
          head: ["Datos", "Comparación"],
          rows: [
            ["verde: 35 dólares · gris: 28 dólares", "La verde es más cara que la gris."],
            ["verde: 1 kilo · gris: 1 kilo", "La verde es tan ligera como la gris."],
            ["verde: 20 litros · gris: 15 litros", "La gris no es tan grande como la verde."],
          ],
        },
        examples: [
          { es: "Mi maleta es tan vieja como la maleta de mi madre.", en: "My suitcase is as old as my mother's suitcase." },
          { es: "El taxi no es tan rápido como el metro a las seis de la tarde.", en: "A taxi isn't as fast as the metro at six in the evening." },
        ],
        mistakes: [
          { wrong: "La gorra roja es tan barata que la azul.", right: "La gorra roja es tan barata como la azul.", why: "Con **tan**, la pareja es **como**." },
          { wrong: "Este café es más bueno que el otro.", right: "Este café es mejor que el otro.", why: "_Más bueno_ se oye, pero lo normal es **mejor**." },
        ],
        tip: "Antes de comparar, pregúntate: ¿son iguales? Entonces, **tan … como**. ¿Son diferentes? Entonces, **más** o **menos … que**.",
      },
    ],
  },
  grammar: {
    intro: "Primero la descripción con varias pistas; después, la comparación.",
    exercises: [
      {
        id: "g1",
        type: "choice",
        title: "Pista a pista",
        prompt: "Elige la descripción natural.",
        items: [
          { q: "En la oficina hay tres paraguas: uno negro, uno verde grande y uno verde pequeño. Buscas el verde pequeño. Dices:", options: ["Busco el paraguas verde.", "Busco el paraguas verde pequeño.", "Busco el pequeño verde paraguas."], answer: 1, why: "Hay dos verdes: necesitas otra pista, **pequeño**, después del nombre." },
          { q: "¿Qué frase dice dónde está la cartera?", options: ["La cartera es de cuero.", "La cartera que es marrón.", "La cartera que está en el cajón."], answer: 2, why: "Ubicación: **está**." },
          { q: "—¿Cuál es tu gorra? —___.", options: ["La blanca.", "El blanco.", "Las blancas."], answer: 0, why: "_Gorra_: femenino singular, **la blanca**." },
          { q: "Busco unas llaves ___ con un llavero rojo.", options: ["pequeña", "pequeños", "pequeñas"], answer: 2, why: "_Llaves_: femenino plural, **pequeñas**." },
        ],
      },
      {
        id: "g2",
        type: "gap",
        title: "El que, la que",
        prompt: "Completa con el artículo (el, la, los, las) que va con la respuesta corta.",
        items: [
          { q: "—¿Qué maleta es tu maleta? —___ roja, ___ que está al lado de la puerta.", answers: [["La"], ["la"]], why: "_Maleta_ es femenino: **la** roja, **la** que está…" },
          { q: "—¿Qué paraguas quieres? —___ grande, por favor.", answers: [["El"]], why: "_Paraguas_ es masculino: **el** grande." },
          { q: "—¿Cuáles son tus libros? —___ que están en la silla.", answers: [["Los"]], why: "_Libros_: masculino plural, **los** que están…" },
          { q: "—¿Qué gafas son de Sofía? —___ negras.", answers: [["Las"]], why: "_Gafas_: femenino plural, **las** negras." },
        ],
      },
      {
        id: "g3",
        type: "gap",
        title: "Que o como",
        prompt: "Completa con **que** o **como**.",
        items: [
          { q: "El metro es más barato ___ el taxi.", answers: [["que"]], why: "Más … **que**." },
          { q: "Mi bolso es tan viejo ___ tu maleta.", answers: [["como"]], why: "Tan … **como**." },
          { q: "Esta tienda es menos cara ___ la tienda del hotel.", answers: [["que"]], why: "Menos … **que**." },
          { q: "La gorra no es tan útil ___ el paraguas cuando llueve.", answers: [["como"]], why: "No es tan … **como**." },
        ],
      },
      {
        id: "g4",
        type: "transform",
        title: "Compara con los datos",
        prompt: "Escribe una comparación con los datos. Usa el adjetivo entre paréntesis.",
        items: [
          { source: "la maleta azul: 4 kilos · la maleta roja: 2 kilos (pesado)", instruction: "Compara la maleta azul con la roja.", answers: ["La maleta azul es más pesada que la roja.", "La maleta azul es más pesada que la maleta roja."], why: "4 kilos es más que 2: **más pesada que**." },
          { source: "el bolso: 20 dólares · la mochila: 20 dólares (caro)", instruction: "Compara el bolso con la mochila.", answers: ["El bolso es tan caro como la mochila."], why: "El mismo precio: **tan caro como**." },
          { source: "el autobús: 40 minutos · el metro: 15 minutos (rápido)", instruction: "Compara el autobús con el metro con menos.", answers: ["El autobús es menos rápido que el metro."], why: "El autobús tarda más: **menos rápido que**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Objetos que se pierden en un viaje, palabras para describirlos y adjetivos para comparar.",
    groups: [
      {
        title: "Objetos perdidos",
        items: [
          { es: "la cartera", en: "the wallet" },
          { es: "las llaves", en: "the keys" },
          { es: "el llavero", en: "the keyring" },
          { es: "el paraguas", en: "the umbrella" },
          { es: "las gafas de sol", en: "the sunglasses" },
          { es: "el cargador", en: "the charger" },
        ],
      },
      {
        title: "Cómo es: material y color",
        items: [
          { es: "de tela", en: "made of fabric" },
          { es: "de cuero", en: "made of leather" },
          { es: "de plástico", en: "made of plastic" },
          { es: "marrón", en: "brown" },
          { es: "gris", en: "grey" },
          { es: "la cremallera", en: "the zip" },
        ],
      },
      {
        title: "Para comparar",
        items: [
          { es: "caro / barato", en: "expensive / cheap" },
          { es: "pesado / ligero", en: "heavy / light" },
          { es: "cómodo / incómodo", en: "comfortable / uncomfortable" },
          { es: "rápido / lento", en: "fast / slow" },
          { es: "nuevo / viejo", en: "new / old" },
          { es: "mejor / peor", en: "better / worse" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "Los contrarios",
        prompt: "Une cada adjetivo con su contrario.",
        pairs: [
          { left: "caro", right: "barato" },
          { left: "pesado", right: "ligero" },
          { left: "rápido", right: "lento" },
          { left: "cómodo", right: "incómodo" },
          { left: "nuevo", right: "viejo" },
        ],
        why: "Con los contrarios puedes decir lo mismo de dos formas: _menos caro_ = **más barato**.",
      },
      {
        id: "v2",
        type: "context",
        title: "¿Qué objeto es?",
        prompt: "Lee la situación y elige la frase natural.",
        items: [
          { context: "Necesitas abrir la puerta de tu casa y no encuentras algo.", q: "Preguntas:", options: ["¿Dónde está mi cargador?", "¿Dónde están mis llaves?", "¿Dónde está mi paraguas?"], answer: 1, why: "Para abrir la puerta: **las llaves**." },
          { context: "Tu bolso es de color café, como el chocolate.", q: "Lo describes:", options: ["Es un bolso marrón.", "Es un bolso gris.", "Es un bolso marrona."], answer: 0, why: "**Marrón** tiene una forma para el masculino y el femenino." },
          { context: "Tu maleta nueva pesa poco: puedes subirla sola por las escaleras.", q: "Dices:", options: ["Es más pesada que la vieja.", "Es tan pesada como un coche.", "Es más ligera que la vieja."], answer: 2, why: "Pesa poco: **más ligera**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La vocal final que concuerda: negro, negra",
    explanation: [
      "En español las vocales finales se pronuncian **enteras y claras**. No se cambian por un sonido débil como en inglés. Por eso se oye bien la diferencia entre _negro_ y _negra_, o entre _el pequeño_ y _la pequeña_.",
      "Esa vocal final es la concordancia: si dices _la mochila negro_, el oído de un hispanohablante nota el error. Abre bien la boca en la **-a** y redondea los labios en la **-o**.",
      "En plural, la **-s** final también se pronuncia: _las llaves pequeñas_. En el Caribe, también en Panamá, muchas personas aspiran o pierden esa s final (_la' llave'_), pero el artículo y el contexto ayudan a entender.",
    ],
    support: [
      "Final vowels are full and clear in Spanish: don't reduce them. _Negro_ and _negra_ must sound different.",
      "In Panama and the Caribbean, final _s_ is often aspirated or dropped: listen to the article for the plural.",
    ],
    table: {
      caption: "Pares que solo cambian la vocal final",
      head: ["Masculino", "Femenino"],
      rows: [
        ["el paraguas negro", "la mochila negra"],
        ["el bolso pequeño", "la cartera pequeña"],
        ["el más barato", "la más barata"],
        ["un llavero rojo", "una gorra roja"],
      ],
    },
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Masculino o femenino?",
      prompt: "Escucha y elige la forma del adjetivo que oyes.",
      items: [
        { q: "¿Cómo termina el adjetivo que oyes?", audio: "la cartera pequeña", options: ["pequeño", "pequeña"], answer: 1 },
        { q: "¿Cómo termina el adjetivo que oyes?", audio: "es más barato", options: ["barato", "barata"], answer: 0 },
        { q: "¿Cómo termina el adjetivo que oyes?", audio: "la roja, por favor", options: ["rojo", "roja"], answer: 1 },
        { q: "¿Cómo termina el adjetivo que oyes?", audio: "el negro de cuero", options: ["negro", "negra"], answer: 0 },
        { q: "¿Singular o plural?", audio: "las llaves pequeñas", options: ["singular", "plural"], answer: 1 },
      ],
    },
    produce: [
      { text: "La mochila negra y el paraguas negro.", tip: "Abre la boca en _negra_ y redondea los labios en _negro_." },
      { text: "La cartera pequeña es más barata.", tip: "Tres palabras con **-a** final, todas claras." },
      { text: "El bolso no es tan cómodo como la mochila.", tip: "_Cómodo_ termina en -o: concuerda con _el bolso_." },
      { text: "Las llaves pequeñas están en el cajón.", tip: "La -s del plural, suave pero presente." },
    ],
    spelling: "La vocal que oyes al final es la que escribes: _rojo_ con **o**, _roja_ con **a**. Los adjetivos en **-e** (_grande, verde_) no cambian: escribe la misma forma para el y la.",
  },
  listening: {
    title: "En la oficina de objetos perdidos",
    context: "Sofía sale del metro de Ciudad de Panamá y no tiene su mochila. Va a la oficina de objetos perdidos de la estación. Allí trabaja don Eric.",
    speakers: [
      { id: "eric", name: "Don Eric", voice: "es-CU-m", role: "empleado del metro" },
      { id: "sofia", name: "Sofía", voice: "es-VE-f", role: "viajera" },
    ],
    script: [
      { speaker: "eric", text: "Buenos días. ¿En qué la puedo ayudar?" },
      { speaker: "sofia", text: "Buenos días. Busco mi mochila. Salgo del tren aquí, en esta estación, y no la tengo." },
      { speaker: "eric", text: "Hoy tenemos cuatro mochilas. ¿Cómo es su mochila?" },
      { speaker: "sofia", text: "Es negra, pequeña y de tela." },
      { speaker: "eric", text: "Hay dos negras y pequeñas. Esta es de cuero, y la otra es de tela. Es la que está en la caja, al lado de los paraguas." },
      { speaker: "sofia", text: "Mmm, no. Esa es más grande que mi mochila. Y mi mochila tiene un llavero amarillo en la cremallera." },
      { speaker: "eric", text: "¿Un llavero amarillo? Ah, entonces es la que está en la mesa, detrás de las gafas de sol. Es tan pequeña como esta, pero es más vieja." },
      { speaker: "sofia", text: "¡Sí, es esa! La negra con el llavero amarillo." },
      { speaker: "eric", text: "Necesito una pista más. ¿Qué hay dentro?" },
      { speaker: "sofia", text: "Un cargador blanco, un libro de inglés y una botella de agua azul." },
      { speaker: "eric", text: "Correcto. Es su mochila. Escriba su nombre aquí, por favor. Y cuidado: el metro de las seis está más lleno que el tren de la mañana." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: escucha todo una vez, sin buscar detalles.",
        exercise: {
          id: "l1",
          type: "choice",
          prompt: "Responde con la idea general.",
          items: [
            { q: "¿Qué busca Sofía en la oficina?", options: ["su cartera", "su mochila", "su paraguas"], answer: 1 },
            { q: "¿Encuentra Sofía lo que busca?", options: ["sí, al final", "no, no está", "sí, en el tren"], answer: 0 },
            { q: "¿Cómo encuentra don Eric el objeto?", options: ["con una foto", "con el nombre de Sofía", "con varias pistas de Sofía"], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a las pistas y a las comparaciones.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Cuántas mochilas hay hoy en la oficina?", options: ["dos", "tres", "cuatro"], answer: 2 },
            { q: "¿De qué color es el llavero de Sofía?", options: ["amarillo", "azul", "blanco"], answer: 0 },
            { q: "¿Por qué no es de Sofía la mochila de la caja?", options: ["porque es de cuero", "porque es más grande", "porque es más vieja"], answer: 1 },
            { q: "¿Dónde está la mochila de Sofía?", options: ["en la caja, al lado de los paraguas", "en el tren de la mañana", "en la mesa, detrás de las gafas de sol"], answer: 2 },
            { q: "¿Qué no hay dentro de la mochila?", options: ["un cargador blanco", "unas llaves", "un libro de inglés"], answer: 1 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en cómo describen y comparan.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué hace cada frase?",
          categories: ["describe con pistas", "identifica sin repetir el nombre", "compara con más o tan"],
          items: [
            { text: "Es negra, pequeña y de tela.", cat: 0 },
            { text: "un llavero amarillo en la cremallera", cat: 0 },
            { text: "Es la que está en la caja.", cat: 1 },
            { text: "La negra con el llavero amarillo.", cat: 1, why: "**La negra**: _la_ = la mochila, sin repetir el nombre." },
            { text: "Esa es más grande que mi mochila.", cat: 2 },
            { text: "Es tan pequeña como esta.", cat: 2 },
            { text: "el metro de las seis está más lleno que el tren de la mañana", cat: 2 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "¿Qué mochila compro para la ciudad?",
    genre: "Comentario en una tienda en línea",
    frame: "Andrés vive en Ciudad de Panamá y deja este comentario en la página de una tienda de mochilas.",
    text: [
      "Hola a todos. Tengo dos mochilas de esta tienda: la Canal, que es verde, y la Casco, que es gris. Las uso todos los días en el metro y en la bicicleta. Aquí están mis opiniones.",
      "La Canal es más grande que la Casco: tiene veinte litros y la gris solo tiene quince. Es perfecta para el ordenador y un suéter. Pero es más cara: cuesta treinta y cinco dólares, y la Casco, veintiocho.",
      "Las dos son de tela y son tan ligeras como una bolsa normal. La gris tiene un bolsillo pequeño delante, el que uso para las llaves y el cargador. La verde no tiene bolsillos fuera.",
      "¿Mi favorita? Para la oficina, la verde, porque es más cómoda. Para salir por la tarde, la gris: no es tan elegante como un bolso de cuero, pero es menos pesada que la Canal. Y un consejo: con la lluvia de Panamá, la verde es mejor, porque la tela es más gruesa.",
    ],
    glossary: [
      { es: "las uso", en: "I use them" },
      { es: "el bolsillo", en: "the pocket" },
      { es: "delante / fuera", en: "at the front / outside" },
      { es: "elegante", en: "smart, elegant" },
      { es: "un consejo", en: "a piece of advice" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee el comentario y responde.",
        items: [
          { q: "¿Cuál es la mochila más grande, según Andrés?", options: ["la Casco", "la Canal", "las dos son iguales"], answer: 1 },
          { q: "¿Cuánto cuesta la mochila gris?", options: ["veintiocho dólares", "treinta y cinco dólares", "quince dólares"], answer: 0 },
          { q: "¿En qué son iguales las dos mochilas?", options: ["en el precio", "en el tamaño", "en el peso"], answer: 2 },
          { q: "¿Qué mochila es mejor con lluvia?", options: ["la gris, porque tiene un bolsillo", "las dos son iguales", "la verde, porque la tela es más gruesa"], answer: 2 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿De qué mochila habla cada frase del comentario?",
        categories: ["la Canal (verde)", "la Casco (gris)"],
        items: [
          { text: "Tiene veinte litros.", cat: 0 },
          { text: "Tiene un bolsillo pequeño delante.", cat: 1 },
          { text: "Es más cómoda para la oficina.", cat: 0 },
          { text: "Es menos pesada.", cat: 1 },
          { text: "Cuesta treinta y cinco dólares.", cat: 0 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase del comentario para ver qué gramática hay dentro.",
      items: [
        { quote: "La Canal es más grande que la Casco", note: "**Más + adjetivo + que**: A tiene más tamaño que B." },
        { quote: "son tan ligeras como una bolsa normal", note: "**Tan … como**: son iguales. _Ligeras_ concuerda con _las dos mochilas_." },
        { quote: "el que uso para las llaves y el cargador", note: "**El que**: _el_ = el bolsillo, sin repetir el nombre." },
        { quote: "no es tan elegante como un bolso de cuero", note: "**No es tan … como** = es menos elegante. _De cuero_ dice el material." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: describe con pistas y compara.",
    exercises: [
      {
        id: "x1",
        type: "order",
        title: "Frases de la oficina",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["Busco", "una", "cartera", "marrón", "de", "cuero."], en: "I'm looking for a brown leather wallet." },
          { words: ["Es", "la", "que", "está", "detrás", "del", "cargador."], en: "It's the one behind the charger." },
          { words: ["Mi", "maleta", "es", "más", "ligera", "que", "la", "maleta", "de", "Ana."], en: "My suitcase is lighter than Ana's suitcase." },
        ],
      },
      {
        id: "x2",
        type: "error",
        title: "Corrige las descripciones",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Busco unas gafas de sol negros.", answers: ["Busco unas gafas de sol negras."], why: "_Gafas_ es femenino plural: **negras**." },
          { sentence: "Mi paraguas es el que es en la puerta.", answers: ["Mi paraguas es el que está en la puerta."], why: "Ubicación: **está**." },
          { sentence: "El taxi es más caro como el metro.", answers: ["El taxi es más caro que el metro."], why: "Más … **que**." },
          { sentence: "Esta mochila es tan cómoda que la otra.", answers: ["Esta mochila es tan cómoda como la otra."], why: "Tan … **como**." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "En la tienda del Casco Viejo",
        prompt: "Lee la situación y elige la mejor frase.",
        items: [
          { context: "Hay dos sombreros: uno cuesta quince dólares y el otro, quince también.", q: "Dices:", options: ["El blanco es más barato que el negro.", "El blanco es tan barato como el negro.", "El blanco es menos barato como el negro."], answer: 1, why: "El mismo precio: **tan … como**." },
          { context: "La vendedora te muestra tres bolsos. Tú quieres el rojo.", q: "Le dices:", options: ["El rojo, por favor.", "La roja, por favor.", "Rojo el, por favor."], answer: 0, why: "_Bolso_ es masculino: **el rojo**." },
          { context: "Quieres decir que tu bolso viejo es peor que el nuevo para la lluvia.", q: "Dices:", options: ["El nuevo es mejor para la lluvia.", "El nuevo es más mejor para la lluvia.", "El nuevo es tan mejor para la lluvia."], answer: 0, why: "**Mejor** ya significa _más bueno_: no lleva _más_." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases cortas. Después compara con el modelo.",
        items: [
          {
            prompt: "Describe un objeto de tu casa con tres pistas (qué es, cómo es, dónde está) para que otra persona lo encuentre.",
            model: "Es una taza blanca y grande, de cerámica. Es la que está en la cocina, al lado de la cafetera.",
            checklist: ["Nombre + adjetivos después", "Material con _de_", "Ubicación con _la que está_ o _el que está_"],
          },
          {
            prompt: "Compara dos medios de transporte de tu ciudad con más … que y menos … que.",
            model: "En mi ciudad el metro es más rápido que el autobús. El autobús es menos caro que el taxi.",
            checklist: ["Más / menos + adjetivo + que", "El adjetivo concuerda con la primera cosa"],
          },
          {
            prompt: "Di algo que es igual en dos personas o cosas de tu vida con tan … como.",
            model: "Mi hermana es tan alta como mi padre, y mi casa no es tan grande como la casa de mis abuelos.",
            checklist: ["Tan + adjetivo + como", "Una frase en negativo con _no es tan_"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje a la oficina de objetos perdidos de un aeropuerto.",
    context: "Pierdes un objeto en el aeropuerto de Tocumen. Escribe un mensaje en el formulario de la página web: qué es, cómo es (con tres pistas o más), dónde está probablemente y en qué es diferente de otros objetos parecidos.",
    steps: [
      "Saluda y di qué objeto buscas y desde cuándo no lo tienes.",
      "Descríbelo con tres pistas o más: color, tamaño, material y un detalle especial.",
      "Di dónde está probablemente: _creo que está en…_",
      "Compara tu objeto con otro parecido: _es más pequeño que…_, _es tan grande como…_",
      "Revisa: ¿los adjetivos van después del nombre y concuerdan? ¿Usas _que_ con más y menos y _como_ con tan?",
    ],
    useLanguage: ["Busco un / una…", "Es…, … y de…", "Tiene un… en…", "Creo que está en…", "Es más … que… / tan … como…"],
    model: [
      "Buenas tardes. Busco mi maleta pequeña: no la tengo desde las tres de la tarde. Es una maleta azul y gris, de plástico, con cuatro ruedas negras. Tiene una cinta roja en el asa. Creo que está en la cafetería de la puerta 12. Es más pequeña que una maleta normal y es tan alta como una silla. Dentro hay ropa y dos libros. Mi teléfono es el 6123-4567. Muchas gracias.",
    ],
    checklist: [
      "Describes el objeto con **tres pistas o más**.",
      "Los adjetivos van **después** del nombre y concuerdan.",
      "Usas **está** para decir dónde está.",
      "Comparas con **más / menos … que** o **tan … como**.",
    ],
    words: [40, 90],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Repite cada tarea hasta que salga sin leer.",
    tasks: [
      {
        title: "¿Cuál es?",
        prompt: "Elige un objeto de la habitación donde estás. Descríbelo con una pista, después con dos y después con tres, como en un juego de adivinanzas. Termina con «Es el que está…» o «Es la que está…».",
        prep: ["Es un / una…", "Es… y…", "Es de…", "Es el que está… / la que está…"],
        seconds: 35,
        model: "Es una cosa. Es negra. Es negra y pequeña. Es de plástico y tiene botones. Es la que está en el sofá, al lado del cojín azul: el control de la tele.",
        selfCheck: ["Pongo el adjetivo después del nombre.", "Termino con _el que está_ o _la que está_."],
      },
      {
        title: "Dos opciones",
        prompt: "Compara dos cosas que quieres comprar (dos teléfonos, dos mochilas, dos bicicletas…). Usa más … que, menos … que y tan … como, y di cuál prefieres.",
        prep: ["El… es más… que…", "La… es menos… que…", "Los dos son tan… como…", "Prefiero… porque…"],
        seconds: 45,
        model: "Quiero comprar una bicicleta. La roja es más bonita que la azul, pero es más cara: cuesta trescientos dólares. La azul es menos pesada que la roja y es tan rápida como ella. Prefiero la azul porque es más barata y más ligera.",
        selfCheck: ["Uso _que_ con más y menos, _como_ con tan.", "Las vocales finales se oyen claras."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Juega a las adivinanzas", task: "Describe un objeto de la clase con pistas, una a una. Tu profesor adivina cuál es.", phrases: ["Es un…", "Es el que está…"] },
      { move: "Encuentra el objeto", task: "Tu profesor describe un objeto de su casa. Tú preguntas hasta saber cuál es.", phrases: ["¿Es grande o pequeño?", "¿Dónde está?"] },
      { move: "Compara dos ciudades", task: "Compara tu ciudad con la ciudad de tu profesor con tres adjetivos.", phrases: ["Mi ciudad es más… que…", "No es tan… como…"] },
      { move: "Elige una opción", task: "Tu profesor da dos opciones (dos hoteles, dos restaurantes). Compáralas y elige una.", phrases: ["Es menos caro que…", "Prefiero el… porque…"] },
    ],
    bring: "Trae dos fotos de dos objetos parecidos (dos tazas, dos zapatos…) y prepara tres frases para compararlos.",
  },
  quiz: {
    items: [
      { type: "choice", q: "Hay dos carteras marrones, una de cuero y una de tela. ¿Qué pista basta para la de tela?", options: ["Es marrón.", "Es una cartera.", "Es de tela."], answer: 2, why: "Solo una cartera es **de tela**." },
      { type: "choice", q: "—¿Cuál es tu paraguas? —___", options: ["La verde.", "El verde.", "Lo verde."], answer: 1, why: "_Paraguas_ es masculino: **el verde**." },
      { type: "listen", q: "Escucha la comparación. ¿Qué cosa es más barata?", audio: "El autobús es menos caro que el taxi.", options: ["el taxi", "el autobús", "los dos cuestan lo mismo"], answer: 1 },
      { type: "gap", q: "Busco la maleta ___ que ___ en la puerta 12. (negro, estar)", answers: [["negra"], ["está"]], why: "_Maleta_ → **negra**; ubicación → **está**." },
      { type: "gap", q: "Mi mochila es tan grande ___ la mochila de Sofía, pero es más ligera ___ ella.", answers: [["como"], ["que"]], why: "Tan … **como**; más … **que**." },
      { type: "transform", source: "La gorra roja cuesta 5 dólares. La gorra azul cuesta 5 dólares.", instruction: "Escribe una frase con tan … como (barato).", answers: ["La gorra roja es tan barata como la azul.", "La gorra roja es tan barata como la gorra azul.", "La gorra azul es tan barata como la roja."], why: "El mismo precio: **tan barata como**." },
      { type: "order", words: ["El", "metro", "es", "menos", "lento", "que", "el", "autobús."] },
      { type: "error", sentence: "Busco una cartera pequeño de cuero.", answers: ["Busco una cartera pequeña de cuero."], why: "_Cartera_ es femenino: **pequeña**." },
      { type: "error", sentence: "Mi bolso nuevo es más mejor que el viejo.", answers: ["Mi bolso nuevo es mejor que el viejo."], why: "**Mejor** no lleva _más_." },
      { type: "open", prompt: "Escribe dos frases: describe tus llaves con dos pistas y compara tu teléfono con el de otra persona.", model: "Mis llaves son pequeñas y tienen un llavero verde. Mi teléfono es más viejo que el teléfono de mi hermano.", checklist: ["Dos pistas con concordancia", "Más / menos … que o tan … como"] },
    ],
  },
  complete: {
    canNow: [
      "Describir un objeto pista a pista: qué es, cómo es y dónde está.",
      "Responder a **¿Cuál?** sin repetir el nombre: _la negra_, _el que está en la mesa_.",
      "Comparar con **más … que** y **menos … que**, con el adjetivo en concordancia.",
      "Decir que dos cosas son iguales con **tan … como** y usar **no es tan … como**.",
      "Reconocer **mejor** y **peor** y usar **más de** con números.",
      "Pronunciar claras las vocales finales que marcan la concordancia.",
    ],
    review: ["La mochila negra pequeña de tela · la que está en la caja.", "Más caro que · menos pesado que · tan ligero como.", "—¿Cuál? —La gris. / El que está en la puerta."],
  },
  related: [
    { path: "/gramatica/describir-un-objeto", label: "Clase: Identificar y describir un objeto con varias pistas" },
    { path: "/gramatica/comparativos-regulares", label: "Clase: Comparativos regulares: más, menos, tan ... como" },
  ],
};
