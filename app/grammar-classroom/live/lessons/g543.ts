import type { LiveLesson } from '../types';

/**
 * Lesson 543 · B1 · Sustantivos contables y no contables (course unit G243, extension
 * from the PCIC coverage review of 2026-11-11; studied after G123).
 * One scene: Sara and Julián shop and cook for a dinner with six guests. In the voice
 * message Sara (Mexican voice) tells Julián what is still missing. Content: countable
 * nouns (una manzana, tres huevos) vs uncountable (agua, arroz, dinero, gente,
 * información); quantifiers that agree (mucho arroz / muchos huevos, poca sal / pocas
 * copas, cuánto / cuánta / cuántos); un poco de + uncountable vs unos pocos / algunos
 * + countable; measures and containers (un vaso de, un kilo de, un trozo de, una
 * botella de); no article for an unspecified amount (¿Hay leche? Compra pan);
 * recategorization (un café, dos aguas; mucho pollo / dos pollos); nouns that differ
 * from English (la gente es, un consejo, una noticia, un mueble, mucha información).
 * Mistakes: *la gente son, *muchas informaciones, *un poco de manzanas, *mucho huevos,
 * *cuánto personas. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 543,
  level: 'B1',
  title: 'Sustantivos contables y no contables',
  subtitle: 'Hablar de cantidades sin errores: mucho arroz, muchos huevos, un poco de sal, un vaso de agua.',
  legend: [
    { tone: 'teal', label: 'CONTABLE · se puede contar: un huevo, tres huevos (countable)' },
    { tone: 'orange', label: 'NO CONTABLE · materia o idea: arroz, agua, tiempo (uncountable)' },
    { tone: 'violet', label: 'MEDIDA · un vaso de, un kilo de, un trozo de (measure)' },
    { tone: 'blue', label: 'CAMBIO DE SENTIDO · un café, dos aguas (recategorized)' },
  ],
  optionNotes: {
    'muchas informaciones': '«Información» es no contable: **mucha información**.',
    'un poco de manzanas': 'Con contables en plural: **unas pocas manzanas** o **algunas manzanas**.',
    'La gente son': '«La gente» es singular: **la gente es**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Se puede contar?', coach: 'Tres huevos, pero no «tres arroces».',
      steps: [
        { title: 'Una cena para ocho · Dinner for eight', blocks: [
          { kind: 'lead', text: 'Sara y Julián invitaron a seis amigos a cenar. En el supermercado, Sara lee la lista: «Necesitamos **doce huevos**, **mucho arroz**, **un poco de sal** y **dos botellas de agua**». Julián pregunta: «¿**Cuántos** tomates? ¿Y **cuánta** harina?». En español, como en inglés, hay cosas que contamos y cosas que no. Hoy aprendes qué cambia en la frase con cada tipo.', en: 'Sara and Julián have invited six friends to dinner. At the supermarket, Sara reads the list: “We need twelve eggs, a lot of rice, a little salt and two bottles of water”. Julián asks: “How many tomatoes? And how much flour?”. In Spanish, as in English, there are things we count and things we do not. Today you learn what changes in the sentence with each type.' },
          { kind: 'guide', text: { teacher: 'Tu alumno lee las dos columnas y dice otras dos cosas de su cocina para cada una.', self: 'Lee las dos columnas en voz alta. Piensa en dos cosas más de tu cocina para cada una.' } },
          { kind: 'compare', title: 'Dos tipos de nombres · Two types of nouns', columns: [
            { tone: 'teal', label: 'CONTABLE', sentence: 'Necesitamos [[doce huevos|teal]].', idea: 'Unidades separadas: uno, dos, tres. Tiene plural.', en: 'We need twelve eggs.' },
            { tone: 'orange', label: 'NO CONTABLE', sentence: 'Necesitamos [[mucho arroz|orange]].', idea: 'Una materia o una idea: se mide, no se cuenta. Normalmente va en singular.', en: 'We need a lot of rice.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál de estos nombres es no contable?', options: ['tomate', 'harina', 'botella'], answer: 1, why: 'La harina es una materia: se mide en gramos o kilos.', en: 'Which of these nouns is uncountable?' },
            { prompt: '¿___ tomates compro?', options: ['Cuánto', 'Cuántos', 'Cuánta'], answer: 1, why: 'Tomates: contable, masculino plural → cuántos.', en: 'How many tomatoes shall I buy?' },
          ] },
        ] },
        { title: 'Los cuantificadores · Quantifiers', mascot: '/brand/mascot/studying.webp', coach: 'Mucho arroz, muchos huevos.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CANTIDAD', question: '¿Cómo digo «much» y «many»?', en: 'How do I say “much” and “many”?', formula: ['no contable → singular: mucho arroz, mucha sal, poco tiempo', 'contable → plural: muchos huevos, muchas copas, pocos platos', '¿cuánto / cuánta? · ¿cuántos / cuántas?'],
            meaning: 'En español no hay dos palabras distintas como «much» y «many»: **mucho, poco, bastante, demasiado, tanto, cuánto** sirven para los dos tipos. Lo que cambia es el **número**: singular con los no contables, plural con los contables. Y concuerdan en género.',
            examples: [
              { es: 'No tenemos [[mucha harina|orange]], pero hay [[muchos huevos|teal]].', en: 'We don’t have much flour, but there are a lot of eggs.' },
              { es: 'Pusiste [[demasiada sal|orange]] en la sopa.', en: 'You put too much salt in the soup.' },
              { es: '¿[[Cuántas copas|teal]] necesitamos? ¿Y [[cuánto vino|orange]]?', en: 'How many glasses do we need? And how much wine?' },
            ],
            note: '**Bastante** solo cambia en número: bastante pan, bastantes platos.' },
          { kind: 'table', title: 'Un poco de, unos pocos · A little, a few', head: ['', 'No contable', 'Contable (plural)'], rows: [
            ['cantidad pequeña (positiva)', '[[un poco de|orange]] sal', '[[unos pocos|teal]] tomates · [[algunos|teal]] tomates'],
            ['cantidad insuficiente', '[[poca|orange]] sal', '[[pocos|teal]] tomates'],
            ['cantidad grande', '[[mucha|orange]] sal', '[[muchos|teal]] tomates'],
            ['exceso', '[[demasiada|orange]] sal', '[[demasiados|teal]] tomates'],
            ['nada', 'no hay sal · [[nada de|orange]] sal', 'no hay tomates · [[ningún|teal]] tomate'],
          ], note: '«Un poco de» no cambia: un poco de agua, un poco de arroz. No se usa con plurales contables.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Añade ___ aceite a la ensalada.', options: ['un poco de', 'unos pocos', 'pocos'], answer: 0, why: 'Aceite es no contable: un poco de.', en: 'Add a little oil to the salad.' },
            { prompt: 'Solo quedan ___ limones.', options: ['un poco de', 'unos pocos', 'poca'], answer: 1, why: 'Limones es contable plural: unos pocos.', en: 'There are only a few lemons left.' },
          ] },
        ] },
        { title: 'Medir lo que no se cuenta · Measuring the uncountable', mascot: '/brand/mascot/speaking.webp', coach: 'Un vaso de agua, un trozo de queso.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'MEDIDAS Y ENVASES', question: '¿Cómo cuento el agua o el pan?', en: 'How do I count water or bread?', formula: ['un vaso / una botella / un litro + de + agua', 'un kilo / un paquete + de + arroz', 'un trozo / una loncha / una barra + de + queso, jamón, pan'],
            meaning: 'Para dar una cantidad exacta de algo no contable usas una **medida** o un **envase** + **de**, sin artículo: «un kilo **de** arroz» (no «un kilo del arroz»). La medida sí es contable: dos kilos, tres botellas.',
            examples: [
              { es: 'Compra [[dos botellas de|violet]] agua y [[un kilo de|violet]] arroz.', en: 'Buy two bottles of water and a kilo of rice.' },
              { es: '¿Me pasas [[un trozo de|violet]] queso?', en: 'Can you pass me a piece of cheese?' },
              { es: 'Falta [[una cucharada de|violet]] azúcar.', en: 'It needs a spoonful of sugar.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'SIN ARTÍCULO', question: '¿«Compra pan» o «compra el pan»?', en: '“Compra pan” or “compra el pan”?', formula: ['cantidad no precisada → sin artículo: ¿Hay leche?', 'algo concreto y conocido → con artículo: ¿Dónde está la leche?'],
            meaning: 'Cuando hablas de una cantidad **no precisada**, los no contables (y los contables en plural) van **sin artículo** después del verbo: «Compra pan», «¿Hay leche?», «No quedan huevos». Con artículo hablas de algo **concreto**: «Compra **el** pan» = el pan de siempre, el que ya sabemos.',
            examples: [
              { es: '¿Hay [[leche|orange]] en la nevera?', en: 'Is there any milk in the fridge?' },
              { es: 'No bebo [[café|orange]] por la noche.', en: 'I don’t drink coffee at night.' },
            ],
            note: 'Como sujeto antes del verbo sí llevan artículo: «**El** café me quita el sueño».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Necesitamos medio kilo ___ carne.', options: ['de', 'de la', 'del'], answer: 0, why: 'Medida + de + nombre, sin artículo.', en: 'We need half a kilo of meat.' },
            { prompt: '—¿Qué falta? —Falta ___.', options: ['un aceite', 'aceite', 'aceites'], answer: 1, why: 'Cantidad no precisada de un no contable: sin artículo.', en: '“What’s missing?” “We’re out of oil.”' },
          ] },
        ] },
        { title: 'Un café, dos aguas · One coffee, two waters', mascot: '/brand/mascot/portrait.webp', coach: 'El mismo nombre, dos sentidos.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CAMBIO DE SENTIDO', question: '¿Puedo decir «dos cafés»?', en: 'Can I say “dos cafés”?', formula: ['materia → porción o unidad: café → un café (una taza)', 'materia → tipo: vino → los vinos de la región', 'animal entero → comida: dos pollos → mucho pollo'],
            meaning: 'Muchos nombres no contables se usan como **contables** cuando significan **una porción** (un café, dos aguas, una cerveza) o **un tipo** (los quesos de la zona, un vino excelente). Y al revés: un contable se vuelve materia cuando es comida: «compré **dos pollos**» (animales enteros), pero «comí **mucho pollo**».',
            examples: [
              { es: '[[Dos cafés|blue]] y [[un agua|blue]] con gas, por favor.', en: 'Two coffees and one sparkling water, please.' },
              { es: 'En esta tienda venden [[quesos|blue]] de todo el país.', en: 'This shop sells cheeses from all over the country.' },
            ] },
          { kind: 'table', title: 'Cuidado: no es como en inglés · Careful: not like English', head: ['Español', 'Tipo', 'Ejemplo'], rows: [
            ['la gente', 'no contable, **singular**', 'La gente [[es|orange]] muy amable aquí.'],
            ['la información', 'no contable', 'Necesito [[más información|orange]].'],
            ['el dinero', 'no contable', 'No llevo [[mucho dinero|orange]].'],
            ['un consejo', '**contable**', 'Te doy [[dos consejos|teal]].'],
            ['una noticia', '**contable**', 'Tengo [[una buena noticia|teal]].'],
            ['un mueble', '**contable**', 'Compramos [[tres muebles|teal]] nuevos.'],
          ], note: '«La ropa» y «el equipaje» también son no contables: mucha ropa, poco equipaje. Para una unidad: una prenda, una maleta.' },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La gente son muy puntuales.', right: 'La gente es muy puntual.', why: '«La gente» es singular. (Singular verb and adjective.)' },
            { wrong: 'Necesito muchas informaciones.', right: 'Necesito mucha información.', why: 'No contable: singular. (Uncountable in Spanish too.)' },
            { wrong: 'Compra un poco de manzanas.', right: 'Compra unas pocas manzanas.', why: 'Contable plural: unas pocas o algunas. (A few, not a little.)' },
            { wrong: 'Hay mucho huevos en la nevera.', right: 'Hay muchos huevos en la nevera.', why: 'Contable plural: muchos. (The quantifier agrees.)' },
            { wrong: 'Te voy a dar un poco de consejo.', right: 'Te voy a dar un consejo.', why: '«Consejo» es contable: un consejo, dos consejos. (A piece of advice.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la fiesta había ___.', options: ['muchas gentes', 'mucha gente', 'muchos gente'], answer: 1, why: 'Gente: no contable, femenino singular.', en: 'There were a lot of people at the party.' },
            { prompt: 'Camarero, ___, por favor.', options: ['dos cafés', 'dos café', 'dos de café'], answer: 0, why: 'Porciones: dos cafés = dos tazas de café.', en: 'Waiter, two coffees, please.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno abre mentalmente su nevera y dice seis cosas: tres contables con número y tres no contables con medida o cuantificador.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En el supermercado', coach: 'Toca las palabras marcadas.',
      steps: [
        { title: 'La lista de la compra · The shopping list', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles. Después tu alumno toca cada expresión marcada y dice si el nombre es contable o no contable aquí.', self: 'Lee el diálogo en voz alta. Toca cada expresión marcada: ¿contable o no contable aquí?' } },
          { kind: 'explore', title: 'Sábado, seis de la tarde', setting: 'Sara y Julián recorren el supermercado con el carrito. La cena es a las nueve.', lines: [
            { who: 'Sara', text: 'A ver: para el arroz con pollo necesitamos [[mucho arroz|orange]]. Somos ocho.', en: 'Let’s see: for the chicken rice we need a lot of rice. There are eight of us.' },
            { who: 'Julián', text: 'En casa queda [[un paquete de|violet]] arroz. ¿Compro otro?', en: 'There’s one packet of rice left at home. Shall I get another?' },
            { who: 'Sara', text: 'Sí, por si acaso. Y [[dos pollos|teal]] enteros.', en: 'Yes, just in case. And two whole chickens.' },
            { who: 'Julián', text: '¿Dos? Es [[demasiado pollo|orange]], ¿no?', en: 'Two? That’s too much chicken, isn’t it?' },
            { who: 'Sara', text: 'No creas: [[la gente|orange]] come mucho en nuestras cenas.', en: 'Don’t be so sure: people eat a lot at our dinners.' },
            { who: 'Julián', text: 'Vale. ¿[[Cuántos tomates|teal]]?', en: 'OK. How many tomatoes?' },
            { who: 'Sara', text: 'Seis. Y [[un poco de|orange]] perejil. Ah, ¿hay [[aceite|orange]] en casa?', en: 'Six. And a little parsley. Oh, is there any oil at home?' },
            { who: 'Julián', text: 'Queda [[poco|orange]]. Tomo [[una botella de|violet]] aceite.', en: 'There isn’t much left. I’ll take a bottle of oil.' },
            { who: 'Sara', text: 'Perfecto. De postre, fruta: [[unas pocas|teal]] naranjas y uvas.', en: 'Perfect. For dessert, fruit: a few oranges and grapes.' },
            { who: 'Julián', text: '¿Y para beber? Carla solo toma agua.', en: 'And to drink? Carla only drinks water.' },
            { who: 'Sara', text: 'Entonces, vino y [[seis aguas|blue]] con gas. ¿Te di [[dinero|orange]]?', en: 'Then wine and six sparkling waters. Did I give you any money?' },
            { who: 'Julián', text: 'No, pero llevo la tarjeta. Te doy [[un consejo|teal]]: la próxima vez, pedimos pizza.', en: 'No, but I’ve got my card. A piece of advice: next time, let’s order pizza.' },
          ], notes: {
            'mucho arroz': '**Arroz**: no contable → mucho, en singular.',
            'un paquete de': 'Envase + **de** + nombre sin artículo. El paquete sí se cuenta.',
            'dos pollos': 'Aquí **pollo** es contable: dos animales enteros.',
            'demasiado pollo': 'Aquí **pollo** es comida, materia: no contable → demasiado, singular.',
            'la gente': 'No contable y **singular**: la gente come.',
            'Cuántos tomates': 'Contable, masculino plural → cuántos.',
            'un poco de': 'Cantidad pequeña de un no contable. No cambia de género.',
            'aceite': 'Cantidad no precisada: **sin artículo** después de «hay».',
            'poco': 'Poco (aceite): cantidad insuficiente, singular.',
            'una botella de': 'Envase + de: así contamos el aceite.',
            'unas pocas': 'Contable plural (naranjas) → unas pocas.',
            'seis aguas': '**Agua** como contable: seis botellas o vasos. Porciones.',
            'dinero': 'No contable: sin artículo cuando la cantidad no importa.',
            'un consejo': 'En español **consejo** es contable: un consejo, dos consejos.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué compran dos pollos?', options: ['Porque están de oferta.', 'Porque los invitados comen mucho.', 'Porque Julián lo pide.'], answer: 1, why: '«La gente come mucho en nuestras cenas».', en: 'Why do they buy two chickens?' },
            { prompt: '¿Cuánto aceite queda en casa?', options: ['Mucho.', 'Nada.', 'Poco.'], answer: 2, why: '«Queda poco».', en: 'How much oil is left at home?' },
            { prompt: '¿Qué consejo da Julián?', options: ['Pedir pizza la próxima vez.', 'Comprar más vino.', 'Invitar a menos gente.'], answer: 0, why: '«La próxima vez, pedimos pizza».', en: 'What advice does Julián give?' },
          ] },
        ] },
        { title: '¿Contable o no contable? · Countable or uncountable?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'En esta frase · In this sentence', categories: [
            { id: 'contable', label: 'CONTABLE', tone: 'teal' },
            { id: 'nocontable', label: 'NO CONTABLE', tone: 'orange' },
          ], items: [
            { text: 'Comí demasiado pollo.', answer: 'nocontable', why: 'Pollo como comida: materia.' },
            { text: 'En la granja hay veinte pollos.', answer: 'contable', why: 'Animales: unidades.' },
            { text: 'Tengo una noticia para ti.', answer: 'contable', why: 'Una noticia, dos noticias.' },
            { text: 'No tengo tiempo.', answer: 'nocontable', why: 'Tiempo como idea general.' },
            { text: 'Te llamé tres veces.', answer: 'contable', why: 'Veces: se cuentan.' },
            { text: 'Hay mucha gente en la cola.', answer: 'nocontable', why: 'Gente: singular, no contable.' },
            { text: 'Dos cervezas, por favor.', answer: 'contable', why: 'Porciones: dos vasos o botellas.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué compras siempre en el supermercado? ¿Cuánto?». Tu alumno responde con cuatro productos y sus cantidades.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Singular para medir, plural para contar.',
      steps: [
        { title: 'En la cocina · In the kitchen', blocks: [
          { kind: 'choice', items: [
            { context: 'Julián prueba la sopa.', prompt: 'Le falta ___ sal.', options: ['un poco de', 'unas pocas', 'pocos'], answer: 0, why: 'Sal: no contable → un poco de.', en: 'It needs a little salt.' },
            { context: 'Sara cuenta los platos.', prompt: 'No hay ___ platos para todos.', options: ['bastante', 'bastantes', 'bastanta'], answer: 1, why: 'Platos: plural → bastantes.', en: 'There aren’t enough plates for everyone.' },
            { context: 'Julián abre la nevera.', prompt: '¿___ leche queda?', options: ['Cuántas', 'Cuánto', 'Cuánta'], answer: 2, why: 'Leche: no contable, femenino → cuánta.', en: 'How much milk is left?' },
            { context: 'Sara pide ayuda.', prompt: 'Corta tres ___ pan, por favor.', options: ['trozos de', 'trozos del', 'trozo de'], answer: 0, why: 'Medida en plural + de, sin artículo.', en: 'Cut three pieces of bread, please.' },
            { context: 'Llegan los invitados.', prompt: '¡Cuánta gente! ___ muy puntual.', options: ['Son', 'Es', 'Están'], answer: 1, why: 'La gente: singular → es.', en: 'So many people! They are very punctual.' },
            { context: 'Carla trae algo.', prompt: 'Traje ___ para la cena.', options: ['un vino', 'vinos muchos', 'de vino'], answer: 0, why: 'Un vino = una botella o un tipo de vino: uso contable.', en: 'I brought a wine for dinner.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Hay demasiados sal en este plato.', ok: false, options: ['Hay demasiada sal en este plato.', 'Hay demasiadas sales en este plato.', 'Hay demasiado sal en este plato.'], answer: 0, why: 'Sal: femenino, no contable → demasiada.' },
            { sentence: 'Compré un kilo de tomates y un litro de leche.', ok: true, why: 'Correcta: medida + de + nombre.' },
            { sentence: 'El profesor nos dio muchas informaciones útiles.', ok: false, options: ['El profesor nos dio muchos información útil.', 'El profesor nos dio mucha información útil.', 'El profesor nos dio mucha informaciones útiles.'], answer: 1, why: 'Información: no contable, singular.' },
            { sentence: 'Mi abuela siempre me da buenos consejos.', ok: true, why: 'Correcta: consejo es contable.' },
            { sentence: '¿Cuánto personas vienen a la cena?', ok: false, options: ['¿Cuánta personas vienen a la cena?', '¿Cuántas personas vienen a la cena?', '¿Cuántos personas vienen a la cena?'], answer: 1, why: 'Personas: contable, femenino plural.' },
            { sentence: 'No bebo el café por la noche.', ok: false, options: ['No bebo café por la noche.', 'No bebo los cafés por la noche.', 'No bebo del café por la noche.'], answer: 0, why: 'Hábito general, cantidad no precisada: sin artículo.' },
          ] },
        ] },
        { title: 'Durante la cena · During dinner', blocks: [
          { kind: 'chat-fill', title: 'En la mesa · At the table', lines: [
            { who: 'Carla', text: '¡Qué rico! ¿Puedo tomar ___ arroz?', options: ['un poco más de', 'unos pocos más', 'pocos más'], answer: 0, why: 'Arroz: no contable → un poco (más) de.' },
            { who: 'Sara', text: 'Claro. Hay ___.', options: ['muchos', 'muchísimo', 'muchas'], answer: 1, why: 'Se refiere a «arroz»: singular.' },
            { who: 'Julián', text: '¿Alguien quiere ___ agua?', options: ['otra', 'otro', 'otras de'], answer: 0, why: 'Otra agua = otra botella o vaso. Agua es femenino.' },
            { who: 'Carla', text: 'Yo, gracias. Oye, ¿tienen ___ de la boda de Luis?', options: ['una noticia', 'noticias', 'mucha noticia'], answer: 1, why: 'Noticias en plural sin artículo: cantidad no precisada de un contable.' },
            { who: 'Sara', text: 'Sí: van a invitar a ___.', options: ['muchas gentes', 'mucha gente', 'muchos gentes'], answer: 1, why: 'Gente: no contable, femenino singular.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['mucha', 'No', 'harina', 'queda'], accept: ['No queda mucha harina'], en: 'There isn’t much flour left.' },
            { tiles: ['de', 'Compra', 'botellas', 'dos', 'agua'], accept: ['Compra dos botellas de agua'], en: 'Buy two bottles of water.' },
            { tiles: ['es', 'gente', 'La', 'amable', 'muy'], accept: ['La gente es muy amable'], en: 'People are very kind.' },
            { tiles: ['huevos', '¿Cuántos', 'necesitamos?'], accept: ['¿Cuántos huevos necesitamos?'], en: 'How many eggs do we need?' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia la cantidad', items: [
            { prompt: 'Hay mucha fruta.', instruction: 'Cambia «fruta» por «naranjas».', accept: ['Hay muchas naranjas'] },
            { prompt: 'Quiero agua.', instruction: 'Pide una cantidad exacta con «un vaso».', accept: ['Quiero un vaso de agua'] },
            { prompt: 'Las personas de aquí son simpáticas.', instruction: 'Empieza con «La gente de aquí…».', accept: ['La gente de aquí es simpática'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dicta la lista de la compra para una cena de seis personas, con cantidades exactas.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Sara', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Falta algo · Something is missing', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota qué tiene que comprar Julián y cuánto.', self: 'Escucha una vez para la idea general y otra para los detalles: ¿qué tiene que comprar Julián y cuánto?' } },
          { kind: 'listen', title: 'Un audio de Sara para Julián', channel: 'MENSAJE DE VOZ · DE SARA PARA JULIÁN', src: '/audio/grammar-live/543.mp3',
            before: 'Son las siete y media. Sara empieza a cocinar y descubre que faltan cosas. Julián está todavía en la calle. ¿Qué crees que falta?',
            gist: { prompt: '¿Cuál es la idea general?', options: ['Sara pide a Julián que compre lo que falta.', 'Sara cancela la cena.', 'Sara pide a Julián que cocine.'], answer: 0, why: '«¿Puedes pasar otra vez por el supermercado?».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué pasa con la sal?', options: ['No queda casi nada.', 'Hay demasiada.', 'Julián la tiene.'], answer: 0, why: '«Casi no queda sal».', en: 'What about the salt?' },
              { prompt: '¿Cuánto pan pide?', options: ['Un poco.', 'Dos barras.', 'Ocho trozos.'], answer: 1, why: '«Dos barras de pan».', en: 'How much bread does she ask for?' },
              { prompt: '¿Cuántos limones?', options: ['Unos pocos, tres o cuatro.', 'Un kilo.', 'Ninguno.'], answer: 0, why: '«Unos pocos limones, tres o cuatro».', en: 'How many lemons?' },
              { prompt: '¿Qué noticia da Sara?', options: ['Carla no viene.', 'Vienen dos personas más.', 'Se quemó el arroz.'], answer: 1, why: '«Tengo una noticia: Luis viene con dos amigos».', en: 'What news does Sara give?' },
            ],
            transcript: 'Julián, soy yo. Estoy empezando a cocinar y falta de todo. ¿Puedes pasar otra vez por el supermercado? Mira: casi no queda [[sal|orange]], así que trae [[un paquete|violet]]. También necesito [[dos barras de|violet]] pan y [[unos pocos|teal]] limones, tres o cuatro. Ah, y [[hielo|orange]]: no hay [[nada de|orange]] hielo. Y tengo [[una noticia|teal]]: Luis viene con dos amigos, así que somos diez. Compra [[más agua|orange]] y [[otro vino|blue]], por favor. Con el arroz no hay problema: hay [[muchísimo|orange]]. ¿Llevas [[bastante dinero|orange]]? Gracias, ¡date prisa!',
            reply: { teacher: 'Tú eres Sara. Tu alumno es Julián y responde: repite la lista con cantidades y hace una pregunta.', self: 'Responde a Sara en voz alta como Julián: repite la lista con cantidades y haz una pregunta.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Cantidades de tu vida', coach: 'Cuánto y cuántos.',
      steps: [
        { title: 'Habla de ti · Talk about yourself', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas; tu alumno responde con cuantificadores y medidas. Repite su frase con la forma correcta.', self: 'Lee cada pregunta y responde en voz alta. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué hay ahora en tu nevera? ¿Y qué falta?', followUps: ['¿Cuánto queda?', '¿Qué compras cada semana?'], phrases: ['Hay [[mucha|orange]]… y [[pocos|teal]]…', 'Queda [[un poco de|orange]]…', 'Falta… / Faltan…'], hint: 'Singular para materias, plural para unidades.', example: 'Hay mucha verdura y pocos huevos. Queda un poco de queso. Falta leche y faltan yogures.', next: 'Ahora, una receta.' },
            { q: 'Explica los ingredientes de un plato que sabes cocinar.', followUps: ['¿Para cuántas personas?', '¿Qué ingrediente no puede faltar?'], phrases: ['Necesitas [[un kilo de|violet]]…', '[[Una cucharada de|violet]]…', '[[Tres|teal]]… y [[un poco de|orange]]…'], hint: 'Medida + de + nombre sin artículo.', example: 'Para la tortilla necesitas seis huevos, medio kilo de patatas, una cebolla, bastante aceite y un poco de sal.', next: 'Ahora, tu tiempo y tu dinero.' },
            { q: '¿Tienes bastante tiempo libre? ¿En qué gastas demasiado dinero?', followUps: ['¿Cuántas horas trabajas?', '¿En qué gastas poco?'], phrases: ['Tengo [[poco tiempo|orange]]…', 'Gasto [[demasiado dinero|orange]] en…', 'Trabajo [[demasiadas horas|teal]].'], hint: 'Tiempo y dinero: no contables. Horas y euros: contables.', example: 'Tengo poco tiempo libre porque trabajo demasiadas horas. Gasto demasiado dinero en comida a domicilio y muy poco en ropa.', next: 'Ahora, tu ciudad.' },
            { q: '¿Cómo es la gente de tu ciudad? ¿Hay mucho tráfico, ruido, turismo?', followUps: ['¿Qué hay demasiado?', '¿Qué falta?'], phrases: ['[[La gente|orange]] es…', 'Hay [[demasiado|orange]] tráfico.', 'Faltan [[más parques|teal]].'], hint: 'La gente + verbo en singular.', example: 'La gente es abierta y habla mucho. Hay demasiado tráfico y bastante ruido, pero pocos turistas. Faltan más parques.', teacher: 'Corrige con cuidado «la gente son». Pregunta: «¿Y la gente de aquí cómo es?».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta «¿Cuánto…? ¿Cuántos…?» sobre tu semana y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta y responde como otra persona.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Organizar una cena', coach: 'Cantidades claras.',
      steps: [
        { title: 'Un mensaje a tu compañero de piso', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada cantidad: ¿contable o no contable?, ¿concuerda?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después revisa cada cantidad: ¿contable o no contable?, ¿concuerda?' } },
          { kind: 'write', title: '¿Puedes ir tú a comprar?', situation: 'El sábado tienes invitados a cenar y no puedes ir al supermercado. Escribe a tu compañero de piso o a tu pareja para explicarle qué tiene que comprar.', task: [
            'Di cuánta gente viene y qué vas a cocinar.',
            'Pide tres productos contables con número o cuantificador.',
            'Pide tres productos no contables con medida o envase.',
            'Di qué hay ya en casa y qué queda poco.',
            'Da un consejo y despídete.',
          ], starters: ['Hola, …:', 'El sábado viene mucha gente…', 'Necesito… kilos de…', 'Compra también…', 'En casa queda poco… / quedan pocos…', 'Un consejo: …'],
            words: ['mucha gente', 'un kilo de', 'una botella de', 'un paquete de', 'un poco de', 'unos pocos', 'bastante', 'demasiado', 'cuánto', 'un consejo'],
            model: 'Hola, Andrés: el sábado viene [[mucha gente|orange]] a cenar, somos nueve, y voy a hacer pasta con verduras. ¿Puedes ir tú a comprar? Necesito [[dos kilos de|violet]] pasta, [[una botella de|violet]] aceite y [[un trozo de|violet]] queso grande. Compra también [[ocho tomates|teal]], [[tres cebollas|teal]] y [[unos pocos|teal]] limones. En casa hay [[bastante sal|orange]], pero queda [[poco café|orange]] y quedan [[pocas servilletas|teal]]. No compres [[demasiado pan|orange]]: siempre sobra. [[Un consejo|teal]]: ve por la mañana, que por la tarde hay demasiada gente. ¡Gracias!',
            minWords: 70,
            checks: [
              { label: 'Una medida o envase + de (un kilo de, una botella de…)', pattern: '(?:^|[^\\p{L}])(?:kilos?|litros?|botellas?|paquetes?|trozos?|vasos?|barras?|latas?|cucharadas?|gramos|docenas?)\\s+de\\s+\\p{L}+', tip: 'Por ejemplo: «dos kilos de pasta».' },
              { label: 'Un cuantificador con no contable en singular (mucha gente, poco café…)', pattern: '(?:^|[^\\p{L}])(?:much[oa]|poc[oa]|demasiad[oa]|bastante|un poco de)\\s+\\p{L}+', tip: 'Por ejemplo: «queda poco café».' },
            ],
            warnings: [
              { pattern: '(?:^|[^\\p{L}])(?:la\\s+)?gente\\s+(?:son|están|tienen|vienen|comen)(?![\\p{L}])', why: '**La gente** es singular: la gente es, viene, come.' },
              { pattern: '(?:^|[^\\p{L}])informaciones(?![\\p{L}])', why: '**Información** es no contable: mucha información.' },
              { pattern: '(?:^|[^\\p{L}])un poco de\\s+(?:manzanas|tomates|huevos|limones|naranjas|cebollas|patatas)(?![\\p{L}])', why: 'Con contables en plural: **unos pocos / unas pocas** o **algunos**.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'CONTABLE', formula: 'número / muchos, pocos, cuántos + plural', example: 'Necesitamos doce huevos y unos pocos limones.', caption: 'unidades: tienen plural', en: 'units: they have a plural' },
            { tone: 'orange', label: 'NO CONTABLE', formula: 'mucho, poco, cuánto, un poco de + singular', example: 'Queda poca sal y mucha harina.', caption: 'materias e ideas; sin artículo si la cantidad no importa', en: 'substances and ideas; no article when the amount is unspecified' },
            { tone: 'violet', label: 'MEDIDA', formula: 'medida / envase + de + nombre', example: 'Dos botellas de agua y un kilo de arroz.', caption: 'sin artículo después de «de»', en: 'no article after “de”' },
            { tone: 'blue', label: 'CAMBIO DE SENTIDO', formula: 'materia → porción o tipo', example: 'Dos cafés y un agua, por favor.', caption: 'un café = una taza de café', en: 'un café = a cup of coffee' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿puedo decir «uno, dos, tres»? Si sí → plural con muchos, pocos, cuántos. Si no → singular con mucho, poco, cuánto, o una medida + de. Y recuerda las diferencias con el inglés: **la gente es**, **mucha información**, **un consejo**, **una noticia**.', en: 'Ask yourself: can I say “one, two, three”? If so → plural with muchos, pocos, cuántos. If not → singular with mucho, poco, cuánto, or a measure + de. And remember the differences from English: la gente es, mucha información, un consejo, una noticia.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda', items: [
            { prompt: '¿___ leche quieres en el café?', options: ['Cuántos', 'Cuánto', 'Cuánta'], answer: 2, why: 'Leche: no contable, femenino → cuánta.', en: 'How much milk do you want in your coffee?' },
            { prompt: 'En esta ciudad la gente ___ muy tarde.', options: ['cenan', 'cena', 'cenar'], answer: 1, why: 'La gente: verbo en singular.', en: 'In this city people have dinner very late.' },
            { prompt: 'Solo tengo ___ monedas.', options: ['un poco de', 'unas pocas', 'poca'], answer: 1, why: 'Monedas: contable plural.', en: 'I only have a few coins.' },
            { prompt: 'Tráeme ___ agua, por favor.', options: ['un vaso de', 'un vaso del', 'vaso'], answer: 0, why: 'Envase + de, sin artículo.', en: 'Bring me a glass of water, please.' },
            { prompt: 'Tengo dos ___ importantes para ti.', options: ['noticia', 'noticias', 'de noticias'], answer: 1, why: 'Noticia es contable: dos noticias.', en: 'I have two important pieces of news for you.' },
          ] },
        ] },
        { title: 'Ampliación · Plurales que cambian el sentido', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más.', blocks: [
          { kind: 'lead', text: 'Algunos nombres no contables tienen un plural con **otro sentido**: **el agua** (materia) / **las aguas** (de un río, de un mar); **el tiempo** (time, weather) / **los tiempos** (épocas: «en mis tiempos»); **el interés** / **los intereses** (del banco, o las cosas que te interesan); **la amistad** / **las amistades** (los amigos). Y en la lengua coloquial, un singular puede indicar gran cantidad: «¡Cuánto coche hay hoy!» = hay muchísimos coches.', en: 'Some uncountable nouns have a plural with a different meaning: el agua / las aguas (of a river or sea); el tiempo / los tiempos (eras); el interés / los intereses (bank interest, or the things you are interested in); la amistad / las amistades (friends). And in colloquial speech a singular can suggest a large quantity: “¡Cuánto coche hay hoy!” = there are so many cars.' },
          { kind: 'choice', title: 'Para estudiantes rápidos', items: [
            { prompt: '«En mis tiempos no había teléfonos móviles». ¿Qué significa «tiempos»?', options: ['Épocas, años de juventud.', 'Horas libres.', 'El clima.'], answer: 0, why: 'Los tiempos = las épocas.', en: '“En mis tiempos…”. What does “tiempos” mean?' },
            { prompt: '«¡Cuánto turista hay este verano!» significa…', options: ['Hay un turista muy grande.', 'Hay muchísimos turistas.', 'Hay pocos turistas.'], answer: 1, why: 'Singular coloquial con valor de gran cantidad.', en: '“¡Cuánto turista hay este verano!” means…' },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional. Pregunta final: «¿Qué había y qué no había “en tus tiempos”, cuando eras niño?».' },
        ] },
      ],
    },
  ],
};
