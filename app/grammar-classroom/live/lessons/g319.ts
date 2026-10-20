import type { LiveLesson } from '../types';

/**
 * Lesson 319 · A1 · Presente irregular: hacer, poner, salir, venir (course unit G019).
 * One scene runs through the class: four friends (Carla, Diego, Paula and
 * Marcos) prepare a Saturday dinner at Carla’s place and split the tasks.
 * Content: the yo form in -go (hago, pongo, salgo, vengo; traigo only as a
 * bonus), the rest of the present regular as in class 017, and venir with
 * -ie- (vienes, viene, vienen) like tener (class 018). Contrast: «Vengo del
 * mercado» / «Voy al mercado», with del / al as fixed chunks (contractions
 * come later). Everyone speaks with tú / ustedes; vosotros is marked as Spain
 * and vos (hacés, ponés, salís, venís) appears only in a variety note.
 * Carla (es-CO-SalomeNeural) leaves the voice message in Escuchar.
 */
export const lesson: LiveLesson = {
  id: 319,
  level: 'A1',
  title: 'Presente irregular: hacer, poner, salir, venir',
  subtitle: 'Repartir las tareas de una cena y decir qué haces, qué pones, a qué hora sales y de dónde vienes.',
  legend: [
    { tone: 'blue', label: 'YO en -go · hago, pongo, salgo, vengo (the “yo” form)' },
    { tone: 'teal', label: 'Las otras personas · regulares (the other persons)' },
    { tone: 'orange', label: 'VENIR con -ie- · vienes, viene, vienen' },
    { tone: 'violet', label: 'VENGO DE / VOY A · de dónde y adónde (from / to)' },
  ],
  optionNotes: {
    pono: 'Poner es especial con yo: **pongo**. «Pono» no existe.',
    poneo: 'Poner es especial con yo: **pongo**. «Poneo» no existe.',
    haco: 'Hacer es especial con yo: **hago**. «Haco» no existe.',
    hazo: 'Hacer es especial con yo: **hago**. «Hazo» no existe.',
    salo: 'Salir es especial con yo: **salgo**. («Salo» es de otro verbo, salar: to salt.)',
    Salo: 'Salir es especial con yo: **salgo**. («Salo» es de otro verbo, salar: to salt.)',
    veno: 'Venir es especial con yo: **vengo**. «Veno» no existe.',
    vene: 'Con él, ella o usted, venir lleva -ie-: **viene**.',
    Vene: 'Con él, ella o usted, venir lleva -ie-: **viene**.',
    venen: 'Con ellos, ellas o ustedes, venir lleva -ie-: **vienen**.',
    vienemos: 'Con nosotros, venir no cambia: **venimos**.',
    ponges: 'El -go es solo para yo. Con tú, poner es regular: **pones**.',
    salgen: 'El -go es solo para yo. Con ellos, salir es regular: **salen**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'La cena del sábado', coach: 'Cuatro amigos, una cena. Four friends, one dinner.',
      steps: [
        { title: 'La cena del sábado · Saturday’s dinner', blocks: [
          { kind: 'lead', text: 'Carla, Diego, Paula y Marcos son amigos. El sábado hay una cena en casa de Carla y cada persona tiene una tarea. Para repartir las tareas necesitas cuatro verbos muy frecuentes: **hacer**, **poner**, **salir** y **venir**.', en: 'Carla, Diego, Paula and Marcos are friends. On Saturday there is a dinner at Carla’s place and everyone has a task. To share out the tasks you need four very common verbs: hacer, poner, salir and venir.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada ejemplo y tu alumno repite. Después, tu alumno dice qué significa cada verbo en inglés.', self: 'Lee los ejemplos en voz alta. Fíjate en la forma de yo: ¿cómo termina? (Read aloud. How does the “yo” form end?)' } },
          { kind: 'concept', tone: 'blue', label: 'CUATRO VERBOS · FOUR VERBS', question: '¿Quién hace qué?', en: 'Who does what?', formula: ['hacer = do / make · poner = put / set', 'salir = leave / go out · venir = come'],
            meaning: 'Son verbos de todos los días: **hacer** la comida, **poner** la mesa, **salir** de casa, **venir** a la cena. Con **yo**, los cuatro terminan en **-go**.',
            examples: [
              { es: 'Yo [[hago|blue]] la comida.', en: 'I make the food.' },
              { es: 'Diego [[pone|teal]] la música.', en: 'Diego puts the music on.' },
              { es: 'Marcos [[sale|teal]] del trabajo a las siete.', en: 'Marcos leaves work at seven.' },
              { es: 'Paula [[viene|orange]] a las siete.', en: 'Paula comes at seven.' },
              { es: 'Hoy [[hago|blue]] compras y [[salgo|blue]] temprano.', en: 'Today I go shopping and leave early.' },
            ],
            note: 'Ojo: «poner la mesa» = to set the table. «Hacer la comida» = to make the food.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Pongo la mesa» significa…', options: ['I set the table.', 'I make the table.', 'I leave the table.'], answer: 0, why: 'Poner la mesa = to set the table.', en: '“Pongo la mesa” means…' },
            { prompt: '«Marcos sale del trabajo» significa…', options: ['Marcos comes to work.', 'Marcos does his work.', 'Marcos leaves work.'], answer: 2, why: 'Salir de = to leave a place.', en: '“Marcos sale del trabajo” means…' },
            { prompt: '¿Cómo termina la forma de yo de estos verbos?', options: ['En -go: hago, salgo.', 'En -o normal: haco, salo.', 'En -oy: hagoy.'], answer: 0, why: 'Hacer → hago, salir → salgo: la forma de yo termina en -go.', en: 'How does the “yo” form of these verbs end?' },
          ] },
        ] },
        { title: 'Yo: -go · The “yo” form', mascot: '/brand/mascot/studying.webp', coach: 'Solo yo cambia. Only “yo” changes.', blocks: [
          { kind: 'lead', text: 'En la clase 017 aprendiste el presente regular: hablo, comes, vivimos. Hacer, poner y salir son **regulares en todas las personas menos yo**. Con yo terminan en **-go**.', en: 'In class 017 you learned the regular present. Hacer, poner and salir are regular in every person except “yo”. With “yo” they end in -go.' },
          { kind: 'table', title: 'Hacer, poner, salir · presente', head: ['Persona', 'hacer (do / make)', 'poner (put)', 'salir (leave)'], rows: [
            ['yo', '[[hago|blue]]', '[[pongo|blue]]', '[[salgo|blue]]'],
            ['tú', '[[haces|teal]]', '[[pones|teal]]', '[[sales|teal]]'],
            ['él / ella / usted', '[[hace|teal]]', '[[pone|teal]]', '[[sale|teal]]'],
            ['nosotros / nosotras', '[[hacemos|teal]]', '[[ponemos|teal]]', '[[salimos|teal]]'],
            ['vosotros / vosotras (España)', '[[hacéis|teal]]', '[[ponéis|teal]]', '[[salís|teal]]'],
            ['ellos / ellas / ustedes', '[[hacen|teal]]', '[[ponen|teal]]', '[[salen|teal]]'],
          ], note: '**Vosotros** se usa en España. En América Latina, para varias personas: **ustedes** hacen, ponen, salen.' },
          { kind: 'tip', icon: '🔑', title: 'Una sola forma especial · Just one special form', text: 'Aprende **hago, pongo, salgo**. Para tú, él, nosotros y ellos, usa las terminaciones regulares: hac**es**, pon**e**, sal**imos**, hac**en**.', en: 'Learn hago, pongo, salgo. For the other persons, use the regular endings.' },
          { kind: 'tip', icon: '💡', title: 'Bonus: traer (to bring)', text: 'Traer funciona igual: yo **traigo**, tú traes, él trae. «Yo **traigo** el pan». Hoy solo lo reconoces.', en: 'Traer works the same way: yo traigo, tú traes. Today you only need to recognise it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Yo ___ el postre para la cena.', options: ['hago', 'hace', 'haco'], answer: 0, why: 'Hacer con yo: hago.', en: 'I make the dessert for the dinner.' },
            { prompt: 'Tú ___ los platos en la mesa.', options: ['ponges', 'pones', 'pongo'], answer: 1, why: 'Con tú, poner es regular: pon + es. El -go es solo para yo.', en: 'You put the plates on the table.' },
            { prompt: 'Diego y Paula ___ de casa a las seis.', options: ['salgo', 'salen', 'salgen'], answer: 1, why: 'Ellos: regular, sal + en. Solo yo lleva -go.', en: 'Diego and Paula leave home at six.' },
          ] },
        ] },
        { title: 'Venir: dos cambios · Venir: two changes', mascot: '/autoestudio/mascot/noting.webp', coach: 'Como tener. Just like tener.', blocks: [
          { kind: 'lead', text: 'Venir tiene **dos cambios**, igual que tener (clase 018): con yo, **-go** (vengo); con tú, él y ellos, **-ie-** (vienes, viene, vienen). Con nosotros y vosotros es regular: venimos, venís.', en: 'Venir has two changes, just like tener (class 018): -go with “yo”, and -ie- with tú, él and ellos. With nosotros and vosotros it is regular.' },
          { kind: 'table', title: 'Tener y venir · Two twins', head: ['Persona', 'tener (clase 018)', 'venir (come)'], rows: [
            ['yo', 'ten**go**', '[[vengo|blue]]'],
            ['tú', 't**ie**nes', '[[vienes|orange]]'],
            ['él / ella / usted', 't**ie**ne', '[[viene|orange]]'],
            ['nosotros / nosotras', 'tenemos', '[[venimos|teal]]'],
            ['vosotros / vosotras (España)', 'tenéis', '[[venís|teal]]'],
            ['ellos / ellas / ustedes', 't**ie**nen', '[[vienen|orange]]'],
          ], note: 'Si sabes «tengo, tienes, tenemos», ya sabes «vengo, vienes, venimos». **Nosotros no cambia**: venimos, no «vienemos».' },
          { kind: 'tip', icon: '🌎', title: 'Variedades: vos y vosotros · Varieties', text: 'En Argentina, Uruguay y partes de Centroamérica se dice **vos**: vos hacés, vos ponés, vos salís, vos venís. En España, para varias personas, **vosotros**: hacéis, ponéis, salís, venís. Tú puedes usar **tú** y **ustedes**: te entienden en todas partes.', en: 'In Argentina, Uruguay and parts of Central America people say “vos”: hacés, ponés, salís, venís. In Spain, for several people, “vosotros”. You use tú and ustedes: everyone understands you.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Carla, ¿tú ___ a la cena el sábado?', options: ['vengo', 'vienes', 'venes'], answer: 1, why: 'Con tú, venir lleva -ie-: vienes.', en: 'Carla, are you coming to the dinner on Saturday?' },
            { prompt: 'Nosotros ___ a las siete.', options: ['vienen', 'venimos', 'vienemos'], answer: 1, why: 'Con nosotros, venir es regular: venimos.', en: 'We are coming at seven.' },
            { prompt: 'Yo ___ en autobús.', options: ['vengo', 'veno', 'viene'], answer: 0, why: 'Con yo, venir termina en -go: vengo.', en: 'I am coming by bus.' },
          ] },
        ] },
        { title: '¿Vengo o voy? · Coming or going?', mascot: '/brand/mascot/speaking.webp', coach: 'De dónde o adónde. From where or to where.', blocks: [
          { kind: 'compare', title: 'Venir de / ir a · From / to', columns: [
            { tone: 'violet', label: 'VENGO DE · origen (from)', sentence: '[[Vengo del mercado|violet]]. Tengo el pan.', idea: 'Llegas aquí y dices de dónde: el mercado es el origen.', en: 'I’m coming from the market. I have the bread.' },
            { tone: 'violet', label: 'VOY A · destino (to)', sentence: '[[Voy al mercado|violet]]. ¿Necesitas algo?', idea: 'Sales de aquí hacia otro lugar: el mercado es el destino.', en: 'I’m going to the market. Do you need anything?' },
          ] },
          { kind: 'decide', title: '¿Vengo de… o voy a…? · Which one?', steps: [
            { q: '¿Dices de dónde llegas? (Do you say where you are coming from?)', yes: 'Usa **vengo de**: «Vengo del trabajo», «Vengo de la panadería».', no: 'next' },
            { q: '¿Dices adónde vas ahora o después? (Do you say where you are going?)', yes: 'Usa **voy a** (clase 018): «Voy al mercado», «Voy a la panadería».', no: 'Para un horario de salida, usa **salgo de**: «Salgo de casa a las seis».' },
          ] },
          { kind: 'table', title: 'Pares mínimos · Minimal pairs', head: ['A', 'B', 'La diferencia (the difference)'], rows: [
            ['[[Pongo|blue]] la mesa.', '[[Pones|teal]] la mesa.', 'yo / tú (I / you)'],
            ['[[Vengo|blue]] a las siete.', '[[Viene|orange]] a las siete.', 'yo / él (I / he)'],
            ['[[Vengo del mercado|violet]].', '[[Voy al mercado|violet]].', 'origen / destino (from / to)'],
            ['[[Hago|blue]] la comida.', '[[Pongo|blue]] la comida en la mesa.', 'preparar / colocar (make / put)'],
          ], note: '**del** = de + el · **al** = a + el. Hoy los usas como bloques: del mercado, al mercado, del trabajo. Con «la» no cambian: de la panadería, a la panadería.' },
          { kind: 'tip', icon: '💡', title: '«I’m coming!»', text: 'Cuando alguien te llama y vas hacia esa persona, en español se dice **«¡Voy!»** o **«¡Ya voy!»**.', en: 'When someone calls you and you go towards them, Spanish says “¡Voy!” (I’m coming!).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Carla llega a casa con las bolsas: «___ del mercado».', options: ['Vienes', 'Vengo', 'Voy'], answer: 1, why: 'Dice de dónde llega: vengo de (del) mercado.', en: 'Carla gets home with the bags: “I’m coming from the market”.' },
            { prompt: 'Diego sale de casa: «Ahora ___ al mercado».', options: ['voy', 'vengo', 'vas'], answer: 0, why: 'Dice adónde va: voy a (al) mercado.', en: 'Diego leaves home: “Now I’m going to the market”.' },
            { prompt: '«Marcos viene ___ trabajo.»', options: ['al', 'del', 'de el'], answer: 1, why: 'De + el = del. Y es el origen, no el destino.', en: '“Marcos is coming from work.”' },
          ] },
        ] },
        { title: 'Más formas especiales: conozco, doy, sé · More special “yo” forms', mascot: '/brand/mascot/portrait.webp', coach: 'Otros verbos, otro yo. Other verbs, another “yo”.', blocks: [
          { kind: 'lead', text: 'En la cena hay más verbos con un **yo** especial. Marcos dice: «Yo [[conduzco|blue]]: llevo a Paula». Carla dice: «Yo [[conozco|blue]] un buen restaurante, pero [[sé|blue]] cocinar: la cena es en casa». Como con hago, pongo, salgo, casi siempre cambia **solo yo**.', en: 'At the dinner there are more verbs with a special “yo” form. Marcos says: “I’m driving: I’ll take Paula”. Carla says: “I know a good restaurant, but I know how to cook: dinner is at my place”. As with hago, pongo, salgo, it is almost always only “yo” that changes.' },
          { kind: 'table', title: 'Yo en -zco, -uyo, doy, sé · present', head: ['Persona', 'conocer (know)', 'conducir (drive)', 'construir (build)', 'dar (give)', 'saber (know)'], rows: [
            ['yo', '[[conozco|blue]]', '[[conduzco|blue]]', '[[construyo|blue]]', '[[doy|blue]]', '[[sé|blue]]'],
            ['tú', '[[conoces|teal]]', '[[conduces|teal]]', '**construyes**', '[[das|teal]]', '[[sabes|teal]]'],
            ['él / ella / usted', '[[conoce|teal]]', '[[conduce|teal]]', '**construye**', '[[da|teal]]', '[[sabe|teal]]'],
            ['nosotros / nosotras', '[[conocemos|teal]]', '[[conducimos|teal]]', '[[construimos|teal]]', '[[damos|teal]]', '[[sabemos|teal]]'],
            ['vosotros / vosotras (España)', '[[conocéis|teal]]', '[[conducís|teal]]', '[[construís|teal]]', '[[dais|teal]]', '[[sabéis|teal]]'],
            ['ellos / ellas / ustedes', '[[conocen|teal]]', '[[conducen|teal]]', '**construyen**', '[[dan|teal]]', '[[saben|teal]]'],
          ], note: 'Igual que conducir: **traducir** → traduzco (translate). Igual que construir: **incluir** → incluyo, incluye (include). En los verbos en -uir aparece una **y** en yo, tú, él y ellos; nosotros y vosotros no cambian: construimos, incluimos.' },
          { kind: 'compare', title: 'Saber o conocer · Two verbs for “to know”', columns: [
            { tone: 'blue', label: 'SABER · un dato, una habilidad', sentence: 'No [[sé|blue]] dónde vive Carla. ¿[[Sabes|teal]] cocinar?', idea: 'Información (dónde, qué, a qué hora) o saber + infinitivo: una habilidad.', en: 'I don’t know where Carla lives. Do you know how to cook? (a fact, a skill)' },
            { tone: 'blue', label: 'CONOCER · personas, lugares, cosas', sentence: '[[Conozco|blue]] a Marcos. ¿[[Conoces|teal]] este barrio?', idea: 'Algo o alguien que has visto, visitado o tratado. Con personas: conocer **a**.', en: 'I know Marcos. Do you know this neighbourhood? (people, places, things you are familiar with)' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Una pregunta para elegir · One question to choose', text: '¿Es una persona, una ciudad, un restaurante? → **conocer**. ¿Es un dato (dónde, cuándo, qué) o «saber + infinitivo» (sé nadar, sé cocinar)? → **saber**.', en: 'Is it a person, a city, a restaurant? → conocer. Is it a fact (where, when, what) or “saber + infinitive” (I can swim, I know how to cook)? → saber.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Yo ___ a Diego desde la universidad.', options: ['sé', 'conoco', 'conozco'], answer: 2, why: 'Una persona: conocer. Con yo: conozco (-zco).', en: 'I have known Diego since university.' },
            { prompt: 'Yo ___ el coche: llevo a Paula a la cena.', options: ['conduzco', 'conduco', 'conduces'], answer: 0, why: 'Conducir con yo: conduzco.', en: 'I’m driving the car: I’ll take Paula to the dinner.' },
            { prompt: 'Ahora te ___ la dirección de Carla.', options: ['do', 'doy', 'da'], answer: 1, why: 'Dar con yo: doy.', en: 'I’ll give you Carla’s address now.' },
            { prompt: '¿Tú ___ cocinar arroz?', options: ['conoces', 'sabes', 'sé'], answer: 1, why: 'Saber + infinitivo = una habilidad. Con tú: sabes.', en: 'Do you know how to cook rice?' },
            { prompt: 'Paula no ___ el barrio de Carla: es su primera visita.', options: ['conozco', 'sabe', 'conoce'], answer: 2, why: 'Un lugar: conocer. Paula (ella): conoce.', en: 'Paula doesn’t know Carla’s neighbourhood: it’s her first visit.' },
            { prompt: 'No ___ a qué hora viene Marcos.', options: ['sé', 'conozco', 'sabo'], answer: 0, why: 'Un dato (a qué hora): saber. Con yo: sé.', en: 'I don’t know what time Marcos is coming.' },
            { prompt: 'El menú ___ una ensalada y un postre.', options: ['incluie', 'incluye', 'incluyo'], answer: 1, why: 'El menú = él: incluye, con y.', en: 'The menu includes a salad and a dessert.' },
            { prompt: 'Yo ___ la receta del inglés al español.', options: ['traduzco', 'traduco', 'traduce'], answer: 0, why: 'Traducir con yo: traduzco, como conduzco.', en: 'I translate the recipe from English into Spanish.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Yo o él? ¿De o a? I or he? From or to?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice dónde está el problema: ¿la forma de yo, el -ie- o la dirección? Después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Yo pono la mesa.', right: 'Yo pongo la mesa.', why: 'Poner con yo lleva -go: pongo. (“Pono” does not exist.)' },
            { wrong: 'Salo de casa a las seis.', right: 'Salgo de casa a las seis.', why: 'Salir con yo: salgo. (Salir → salgo.)' },
            { wrong: 'Marcos vene a las siete y media.', right: 'Marcos viene a las siete y media.', why: 'Venir con él lleva -ie-: viene, como tiene.' },
            { wrong: 'Nosotros vienemos juntos.', right: 'Nosotros venimos juntos.', why: 'Con nosotros, venir es regular: venimos, como tenemos.' },
            { wrong: 'Voy del mercado con el pan.', right: 'Vengo del mercado con el pan.', why: 'De + lugar = origen: vengo de. «Voy» va con a: voy al mercado.' },
            { wrong: 'Yo hago la mesa.', right: 'Yo pongo la mesa.', why: 'En español la mesa se pone: poner la mesa (to set the table).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Paula y Diego vienemos juntos.', 'Paula y Diego vienen juntos.', 'Paula y Diego venen juntos.'], answer: 1, why: 'Ellos: vienen, con -ie-.', en: 'Which sentence is correct?' },
            { prompt: '¿Qué frase es correcta?', options: ['Hago las bebidas en la nevera.', 'Pongo las bebidas en la nevera.', 'Pono las bebidas en la nevera.'], answer: 1, why: 'Poner con yo: pongo. Y las bebidas se ponen en la nevera.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice cuatro frases reales con yo: «Hago…», «Pongo…», «Salgo de casa a las…», «Vengo de…». Tú repites cada frase bien pronunciada.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El chat del grupo', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'El grupo «Cena del sábado» · The group chat', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el chat con papeles: tú eres Carla y tu alumno lee a Diego, Paula y Marcos. Después, tu alumno toca cada palabra marcada y explica la forma.', self: 'Lee el chat en voz alta. Después toca cada palabra marcada para ver por qué se usa. (Read aloud, then tap the marked words.)' } },
          { kind: 'explore', title: 'Cena del sábado', setting: 'Jueves por la noche. Carla escribe al grupo de chat para organizar la cena del sábado en su casa. (Thursday night. Carla writes to the group chat to organise Saturday’s dinner at her place.)', lines: [
            { who: 'Carla', text: '¡Hola, chicos! El sábado es la cena en mi casa. Yo [[hago|blue]] la comida.', en: 'Hi, guys! Saturday is the dinner at my place. I’m making the food.' },
            { who: 'Diego', text: '¡Genial! Yo [[pongo|blue]] la música.', en: 'Great! I’ll put the music on.' },
            { who: 'Paula', text: 'Y yo [[hago|blue]] el postre. Marcos [[pone|teal]] la mesa, ¿no?', en: 'And I’m making the dessert. Marcos is setting the table, right?' },
            { who: 'Marcos', text: 'Sí, claro. Pero el sábado [[salgo|blue]] del trabajo a las siete.', en: 'Yes, sure. But on Saturday I leave work at seven.' },
            { who: 'Carla', text: 'No pasa nada. ¿A qué hora [[vienes|orange]]?', en: 'No problem. What time are you coming?' },
            { who: 'Marcos', text: '[[Vengo del trabajo|violet]] directamente. Llego a las siete y media.', en: 'I’m coming straight from work. I’ll arrive at half past seven.' },
            { who: 'Carla', text: 'Perfecto. Diego y Paula, ustedes [[vienen|orange]] a las siete, ¿no?', en: 'Perfect. Diego and Paula, you’re coming at seven, right?' },
            { who: 'Paula', text: 'Sí. Diego y yo [[salimos|teal]] de casa a las seis y media.', en: 'Yes. Diego and I leave home at half past six.' },
            { who: 'Diego', text: 'Carla, ¿tú [[haces|teal]] las compras?', en: 'Carla, are you doing the shopping?' },
            { who: 'Carla', text: 'Sí, el sábado por la mañana [[voy al mercado|violet]].', en: 'Yes, on Saturday morning I’m going to the market.' },
            { who: 'Carla', text: '(Sábado, 12:00) [[Vengo del mercado|violet]] con dos bolsas grandes. ¡Tengo todo!', en: '(Saturday, 12:00) I’m coming back from the market with two big bags. I have everything!' },
          ], notes: {
            'hago': 'Hacer con **yo**: **hago**. Carla hace la comida y Paula hace el postre.',
            'pongo': 'Poner con **yo**: **pongo**. Poner la música = to put the music on.',
            'pone': 'Marcos = él. Poner es regular con él: **pone** (pon + e). Poner la mesa = to set the table.',
            'salgo': 'Salir con **yo**: **salgo**. Salir de / del + lugar = to leave a place.',
            'vienes': 'Venir con **tú** lleva -ie-: **vienes**, como tienes.',
            'Vengo del trabajo': '**Vengo** (yo, -go) + **del** (de + el) + lugar: el trabajo es el origen, de dónde viene Marcos.',
            'vienen': 'Diego y Paula = **ustedes**: **vienen**, con -ie-. En España: vosotros venís.',
            'salimos': 'Diego y yo = **nosotros**: salimos. Regular, sin -go.',
            'haces': 'Hacer con **tú** es regular: **haces**. Hacer las compras = to do the shopping.',
            'voy al mercado': '**Voy a** + lugar (clase 018): el mercado es el destino. A + el = **al**.',
            'Vengo del mercado': 'Ahora Carla llega con las bolsas: el mercado es el **origen**. Vengo de + el = **vengo del**.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Quién hace el postre?', options: ['Marcos.', 'Paula.', 'Carla.'], answer: 1, why: '«Y yo hago el postre», dice Paula.', en: 'Who is making the dessert?' },
            { prompt: '¿Por qué Marcos llega a las siete y media?', options: ['Hace la comida.', 'Sale del trabajo a las siete.', 'Va al mercado.'], answer: 1, why: '«El sábado salgo del trabajo a las siete».', en: 'Why does Marcos arrive at half past seven?' },
            { prompt: 'En el último mensaje, ¿de dónde viene Carla?', options: ['Del trabajo.', 'De casa de Paula.', 'Del mercado.'], answer: 2, why: '«Vengo del mercado con dos bolsas grandes».', en: 'In the last message, where is Carla coming from?' },
          ] },
        ] },
        { title: 'Las formas del chat · The forms in the chat', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué tipo de forma es? · What kind of form is it?', categories: [
            { id: 'go', label: 'YO en -go', tone: 'blue' },
            { id: 'reg', label: 'Regular (otras personas)', tone: 'teal' },
            { id: 'ie', label: 'VENIR con -ie-', tone: 'orange' },
          ], items: [
            { text: 'hago', answer: 'go', why: 'Hacer, yo: hago.' },
            { text: 'pone', answer: 'reg', why: 'Poner, él: pone, regular.' },
            { text: 'vienes', answer: 'ie', why: 'Venir, tú: vienes, con -ie-.' },
            { text: 'salgo', answer: 'go', why: 'Salir, yo: salgo.' },
            { text: 'salimos', answer: 'reg', why: 'Salir, nosotros: salimos, regular.' },
            { text: 'vienen', answer: 'ie', why: 'Venir, ustedes: vienen, con -ie-.' },
            { text: 'haces', answer: 'reg', why: 'Hacer, tú: haces, regular.' },
            { text: 'vengo', answer: 'go', why: 'Venir, yo: vengo, con -go.' },
          ] },
          { kind: 'teacher', text: 'Pregunta rápida: «¿Quién hace qué en la cena?». Tu alumno responde con frases completas: «Carla hace la comida, Diego pone la música…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Yo, tú, él? ¿De o a? Who? From or to?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Carla habla de ella. (Carla talks about herself.)', prompt: 'Yo ___ una tortilla para la cena.', options: ['hago', 'haco', 'hace'], answer: 0, why: 'Hacer con yo: hago.', en: 'I’m making an omelette for the dinner.' },
            { context: 'Hablas con Marcos. (You talk to Marcos.)', prompt: '¿A qué hora ___ del trabajo?', options: ['salgo', 'sale', 'sales'], answer: 2, why: 'Hablas con él (tú): sales, regular.', en: 'What time do you leave work?' },
            { context: 'Diego habla de dos amigos. (Diego talks about two friends.)', prompt: 'Paula y Marcos ___ a las siete.', options: ['venimos', 'vienen', 'venen'], answer: 1, why: 'Ellos: vienen, con -ie-.', en: 'Paula and Marcos are coming at seven.' },
            { context: 'Diego dice qué hace él. (Diego says what he does.)', prompt: 'Yo ___ los vasos en la mesa.', options: ['pones', 'pongo', 'pono'], answer: 1, why: 'Poner con yo: pongo.', en: 'I put the glasses on the table.' },
            { context: 'Carla llega con las bolsas. (Carla arrives with the bags.)', prompt: '___ del mercado. ¡Tengo todo!', options: ['Vienes', 'Vengo', 'Voy'], answer: 1, why: 'Del mercado = origen, y habla Carla (yo): vengo. «Voy» va con a: voy al mercado.', en: 'I’m coming from the market. I have everything!' },
          ] },
        ] },
        { title: '¿Está bien? · Is it right?', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Yo pono las servilletas en la mesa.', ok: false, options: ['Yo pone las servilletas en la mesa.', 'Yo poneo las servilletas en la mesa.', 'Yo pongo las servilletas en la mesa.'], answer: 2, why: 'Poner con yo lleva -go: pongo.' },
            { sentence: 'Marcos viene del trabajo a las siete y media.', ok: true, why: 'Correcta: él viene (con -ie-) y del trabajo es el origen.' },
            { sentence: 'Paula y Diego venen juntos.', ok: false, options: ['Paula y Diego vienen juntos.', 'Paula y Diego viene juntos.', 'Paula y Diego vengo juntos.'], answer: 0, why: 'Ellos: vienen, con -ie- y terminación -en.' },
            { sentence: 'Nosotros vienemos a las siete.', ok: false, options: ['Nosotros vienen a las siete.', 'Nosotros vengo a las siete.', 'Nosotros venimos a las siete.'], answer: 2, why: 'Con nosotros, venir no lleva -ie-: venimos.' },
            { sentence: 'Mañana voy del mercado a las diez.', ok: false, options: ['Mañana voy al mercado a las diez.', 'Mañana voy a el mercado a las diez.', 'Mañana voy de el mercado a las diez.'], answer: 0, why: 'Mañana es el destino: voy a + el = voy al. «A el» y «de el» no se usan: al, del.' },
          ] },
        ] },
        { title: 'El sábado por la tarde · Saturday afternoon', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Mensajes antes de la cena', lines: [
            { who: 'Diego', text: 'Carla, ¿necesitas algo? Paula y yo ___ de casa en diez minutos.', options: ['salgo', 'salen', 'salimos'], answer: 2, why: 'Paula y yo = nosotros: salimos, regular.' },
            { who: 'Carla', text: 'Sí: ¿compran hielo, por favor? Yo ___ las bebidas en la nevera ahora.', options: ['pone', 'pongo', 'pono'], answer: 1, why: 'Carla habla de ella (yo): pongo.' },
            { who: 'Paula', text: '¡Claro! ¿Y Marcos? ¿___ a las siete y media?', options: ['Viene', 'Vene', 'Vienes'], answer: 0, why: 'Paula habla de Marcos (él): viene. «Vienes» es para hablar con él.' },
            { who: 'Marcos', text: '¡Estoy aquí! Sí, sí. ___ del trabajo ahora mismo.', options: ['Salo', 'Sale', 'Salgo'], answer: 2, why: 'Marcos habla de él mismo (yo): salgo.' },
            { who: 'Carla', text: '¡Perfecto! Y yo ___ la ensalada ahora. ¡Hasta luego!', options: ['hago', 'haco', 'hace'], answer: 0, why: 'Carla (yo): hago.' },
            { who: 'Paula', text: '¡Hasta luego! Llegamos a las siete.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['la', 'Pongo', 'mesa', 'siete', 'a', 'las'], accept: ['Pongo la mesa a las siete', 'A las siete pongo la mesa'], en: 'I set the table at seven.' },
            { tiles: ['del', 'Vengo', 'mercado'], accept: ['Vengo del mercado'], en: 'I’m coming from the market.' },
            { tiles: ['salgo', 'Hoy', 'temprano', 'de', 'casa'], accept: ['Hoy salgo de casa temprano', 'Hoy salgo temprano de casa', 'Salgo de casa temprano hoy'], en: 'Today I leave home early.' },
            { tiles: ['vienen', 'Paula', 'y', 'Diego', 'a', 'siete', 'las'], accept: ['Paula y Diego vienen a las siete', 'Diego y Paula vienen a las siete', 'A las siete vienen Paula y Diego', 'A las siete vienen Diego y Paula'], en: 'Paula and Diego are coming at seven.' },
          ] },
        ] },
        { title: 'Ahora tú · Now you', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Cambia la persona · Change the person', items: [
            { prompt: 'Diego pone la música.', instruction: 'Ahora lo haces tú: escribe la frase con yo. (Now you do it: write it with “yo”.)', accept: ['Yo pongo la música', 'Pongo la música', 'Pongo yo la música'] },
            { prompt: 'Marcos sale del trabajo a las siete.', instruction: 'Escribe la frase con yo. (Write it with “yo”.)', accept: ['Yo salgo del trabajo a las siete', 'Salgo del trabajo a las siete', 'A las siete salgo del trabajo', 'Yo salgo a las siete del trabajo', 'Salgo a las siete del trabajo'] },
            { prompt: 'Paula hace el postre.', instruction: 'Escribe la frase con yo. (Write it with “yo”.)', accept: ['Yo hago el postre', 'Hago el postre', 'Hago yo el postre'] },
            { prompt: 'Yo vengo a las ocho.', instruction: 'Escribe la frase con ellos. (Write it with “ellos”: they.)', accept: ['Ellos vienen a las ocho', 'Vienen a las ocho', 'Ellos vienen a las 8', 'Vienen a las 8'] },
          ] },
        ] },
        { title: '¿Vengo o voy? · Coming or going?', mascot: '/brand/mascot/walking.webp', blocks: [
          { kind: 'classify', title: '¿Qué verbo completa la frase? · Which verb completes it?', categories: [
            { id: 'vengo', label: 'VENGO · de dónde llego (from)', tone: 'violet' },
            { id: 'voy', label: 'VOY · adónde voy (to)', tone: 'teal' },
          ], items: [
            { text: '… del mercado: aquí tengo el pan.', answer: 'vengo', why: 'Del mercado = origen: vengo del mercado.' },
            { text: '… al mercado: ¿necesitas algo?', answer: 'voy', why: 'Al mercado = destino: voy al mercado.' },
            { text: '… de la panadería con dos bolsas.', answer: 'vengo', why: 'De la panadería = origen: vengo de la panadería.' },
            { text: '… a la panadería ahora mismo.', answer: 'voy', why: 'A la panadería = destino: voy a la panadería.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Carla', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un cambio para mañana · A change for tomorrow', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye una forma en -go (hago, pongo, salgo). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las formas en -go: hago, pongo, salgo. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Audio de Carla en el grupo', channel: 'MENSAJE DE VOZ · GRUPO «CENA DEL SÁBADO»', src: '/audio/grammar-live/319.mp3',
            before: 'Es viernes por la noche. Carla manda un audio al grupo. ¿Qué crees que dice? (It’s Friday night. Carla sends a voice message to the group. What do you think she says?)',
            gist: { prompt: '¿Para qué es el audio?', options: ['Carla cancela la cena.', 'Carla invita a una persona nueva.', 'Carla cambia una tarea y repite el plan de la cena.'], answer: 2, why: '«Un cambio para mañana»: Diego pone la mesa, y Carla repite quién hace qué.', en: 'What is the voice message for?' },
            details: [
              { prompt: '¿Por qué hay un cambio?', options: ['Carla sale del trabajo tarde.', 'Marcos viene tarde, a las siete y media.', 'Paula no viene.'], answer: 1, why: '«Marcos viene directamente del trabajo, a las siete y media, un poco tarde».', en: 'Why is there a change?' },
              { prompt: '¿Quién pone la mesa ahora?', options: ['Paula.', 'Diego.', 'Marcos.'], answer: 1, why: '«Entonces, Diego, tú pones la mesa, ¿sí?».', en: 'Who is setting the table now?' },
              { prompt: '¿Qué hace Carla para comer?', options: ['Una tortilla.', 'El postre.', 'Arroz con pollo y una ensalada.'], answer: 2, why: '«Yo hago la comida: arroz con pollo y una ensalada».', en: 'What is Carla making to eat?' },
              { prompt: '¿Qué hace Carla por la mañana?', options: ['Va al trabajo.', 'Sale temprano y hace las compras en el mercado.', 'Pone la mesa.'], answer: 1, why: '«Por la mañana salgo temprano y hago las compras en el mercado».', en: 'What does Carla do in the morning?' },
              { prompt: '¿A qué hora vienen Diego y Paula?', options: ['A las siete.', 'A las siete y media.', 'A las seis.'], answer: 0, why: '«Diego y Paula, ustedes vienen a las siete, ¿no?».', en: 'What time are Diego and Paula coming?' },
            ],
            transcript: 'Hola, chicos. Soy Carla. Un cambio para mañana. Marcos [[viene|orange]] directamente del trabajo, a las siete y media, un poco tarde. Entonces, Diego, tú [[pones|teal]] la mesa, ¿sí? Paula [[hace|teal]] el postre, como siempre. Diego y Paula, ustedes [[vienen|orange]] a las siete, ¿no? Yo [[hago|blue]] la comida: arroz con pollo y una ensalada. Por la mañana [[salgo|blue]] temprano y [[hago|blue]] las compras en el mercado. Por la tarde [[pongo|blue]] las bebidas en la nevera. Si hay un problema, escriben en el grupo. ¡Hasta mañana!',
            reply: { teacher: 'Tú eres Carla. Tu alumno responde al audio como Diego: «Hola, Carla. Sí, yo pongo la mesa. Paula y yo salimos de casa a las…». Termina con una pregunta: «¿Necesitas algo del mercado?».', self: 'Responde a Carla en voz alta como Diego: «Sí, yo pongo la mesa… Salimos de casa a las…». Termina con una pregunta. (Reply aloud as Diego and end with a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu cena', coach: 'Ahora organizas tú. Now you organise it.',
      steps: [
        { title: 'Tu cena con amigos · Your dinner with friends', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres un amigo del grupo y haces las preguntas. Tu alumno responde con yo: hago, pongo, salgo, vengo. Tú repites su frase bien dicha y sigues con una repregunta.', self: 'Imagina que organizas una cena con amigos. Lee la pregunta y responde en voz alta con yo. (Read the question and answer aloud with “yo”.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces tú para la cena? · What do you make for the dinner?', followUps: ['¿Haces la comida o el postre? (The food or the dessert?)', '¿Qué haces muy bien? (What do you make really well?)'], phrases: ['Yo [[hago|blue]] la comida / el postre.', '[[Hago|blue]] una ensalada / una tortilla.', 'También [[hago|blue]] las compras.'], hint: '«Hago» + lo que preparas. Recuerda: hacer → hago.', example: 'Yo hago el postre: un pastel de chocolate. También hago las compras el sábado por la mañana.', next: 'Ahora, la mesa.' },
            { q: '¿Qué pones en la mesa? · What do you put on the table?', followUps: ['¿Pones flores o velas? (Flowers or candles?)', '¿Quién pone la música? (Who puts the music on?)'], phrases: ['[[Pongo|blue]] los platos y los vasos.', '[[Pongo|blue]] flores / la música.', 'Mi amigo [[pone|teal]] …'], hint: '«Pongo» + cosas. Para otra persona: pone.', example: 'Pongo los platos, los vasos y unas flores. Mi amiga Ana pone la música.', next: 'Ahora, los horarios.' },
            { q: '¿A qué hora sales de casa o del trabajo el sábado? · What time do you leave home or work on Saturday?', followUps: ['¿Sales temprano o tarde? (Early or late?)', '¿Sales solo o sola, o con alguien? (Alone or with someone?)'], phrases: ['[[Salgo|blue]] de casa a las …', '[[Salgo|blue]] del trabajo a las …', 'Mi pareja y yo [[salimos|teal]] a las …'], hint: '«Salgo de / del» + lugar + «a las» + hora.', example: 'El sábado no trabajo. Salgo de casa a las seis y media con mi hermano.', next: 'Ahora, de dónde vienes.' },
            { q: '¿De dónde vienes y cómo vienes? · Where are you coming from, and how?', followUps: ['¿Vienes en autobús, en metro o a pie? (By bus, metro or on foot?)', '¿Vienes con alguien? (Are you coming with someone?)'], phrases: ['[[Vengo del trabajo|violet]] / de casa.', '[[Vengo|blue]] en autobús / a pie.', 'Mi hermano [[viene|orange]] conmigo.'], hint: '«Vengo de» + lugar. Para otra persona: viene, con -ie-.', example: 'Vengo de casa, en metro. Mi hermano viene conmigo y mis primas vienen más tarde.', next: 'Ahora, las compras.' },
            { q: '¿Vas al mercado o al supermercado? · Do you go to the market or to the supermarket?', followUps: ['¿Cuándo vas? (When do you go?)', '¿Con qué vienes del mercado? (What do you come back with?)'], phrases: ['[[Voy al mercado|violet]] el sábado.', '[[Vengo del mercado|violet]] con pan y fruta.', '[[Hago|blue]] las compras por la mañana.'], hint: '«Voy al» = destino. «Vengo del» = origen.', example: 'Voy al mercado el sábado por la mañana. Vengo del mercado con pan, fruta y queso.', next: 'Para terminar, reparte las tareas.' },
            { q: 'Ahora organiza tu cena: reparte las tareas entre tres amigos. · Now organise your dinner: share out the tasks among three friends.', followUps: ['¿Quién viene a qué hora? (Who is coming at what time?)', '¿Y tú qué haces? (And what do you do?)'], phrases: ['Yo [[hago|blue]] … y [[pongo|blue]] …', 'Ana [[hace|teal]] … · Luis [[pone|teal]] …', 'Ellos [[vienen|orange]] a las …'], hint: 'Una tarea para cada persona, y una hora para cada persona.', example: 'Yo hago la comida y pongo la mesa. Ana hace el postre y Luis pone la música. Ana y Luis vienen a las siete; mi hermano viene a las ocho.', teacher: 'Responde como un amigo que quiere cambiar su tarea: «Yo no hago el postre. ¿Pongo la música?». Tu alumno reorganiza.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno organiza y te pregunta «¿Qué haces tú? ¿A qué hora sales? ¿Vienes en autobús?», y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta («¿Qué haces? ¿A qué hora sales? ¿De dónde vienes?») y responde como uno de tus amigos. (Now ask the questions and answer as a friend.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El mensaje al grupo', coach: 'Una tarea para cada persona. One task each.',
      steps: [
        { title: 'Un mensaje para el grupo · A message to the group', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos las formas de yo (hago, pongo, salgo) y viene / vienen. Después, tu alumno lee el mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien las formas de yo y viene / vienen. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'La comida del domingo · Sunday lunch', situation: 'Organizas una comida en tu casa el domingo con tres amigos. Escribe un mensaje al grupo de chat para repartir las tareas. (You are organising a lunch at your place on Sunday with three friends. Write a message to the group chat to share out the tasks.)', task: [
            'Di qué haces tú con **hago** y qué pones con **pongo**. (What you make and what you put out.)',
            'Di a qué hora sales de casa con **salgo**. (When you leave home.)',
            'Da una tarea a cada amigo: hace, pone… (Give each friend a task.)',
            'Di quién viene a qué hora con **viene / vienen** y pregunta «¿Vienes…?». (Who is coming when; ask a question.)',
          ], starters: ['Hola, chicos: el domingo es la comida en mi casa.', 'Yo hago …', 'Yo pongo …', 'Por la mañana salgo …', '… tú haces …, ¿sí?', '… viene a la una.', '¿Vienes …?', '¡Hasta el domingo!'],
            words: ['hago', 'pongo', 'salgo', 'vengo', 'haces', 'hace', 'pone', 'viene', 'vienen', 'la mesa', 'la música', 'el postre', 'las compras', 'al mercado', 'del trabajo'],
            model: 'Hola, chicos: el domingo es la comida en mi casa. Yo [[hago|blue]] la paella y [[pongo|blue]] la mesa. Por la mañana [[salgo|blue]] temprano y [[voy al mercado|violet]]. Lucas, tú [[haces|teal]] el postre, ¿sí? Sara [[pone|teal]] la música. Lucas y Sara [[vienen|orange]] a la una. Nora, tú sales del trabajo a las dos, ¿no? ¿[[Vienes|orange]] directamente? ¡Hasta el domingo!',
            minWords: 35,
            checks: [
              { label: 'Hago · lo que haces tú (what you make)', pattern: '(?<!\\p{L})hago(?!\\p{L})', tip: 'Di qué haces: «Yo hago la comida».' },
              { label: 'Pongo · lo que pones tú (what you put out)', pattern: '(?<!\\p{L})pongo(?!\\p{L})', tip: 'Di qué pones: «Pongo la mesa».' },
              { label: 'Salgo · cuándo sales (when you leave)', pattern: '(?<!\\p{L})salgo(?!\\p{L})', tip: 'Di cuándo sales: «Salgo de casa a las diez».' },
              { label: 'Venir · quién viene (who is coming)', pattern: '(?<!\\p{L})(?:vengo|vienes|viene|vienen|venimos)(?!\\p{L})', tip: 'Di quién viene: «Sara viene a la una», «¿Vienes?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:pono|poneo|haco|hazo|veno)(?!\\p{L})', why: 'Con yo, estos verbos terminan en -go: pongo, hago, vengo.' },
              { pattern: '(?<!\\p{L})(?:vene|venen)(?!\\p{L})', why: 'Venir con él o ellos lleva -ie-: viene, vienen.' },
              { pattern: '(?<!\\p{L})vienemos(?!\\p{L})', why: 'Con nosotros, venir no cambia: venimos.' },
              { pattern: '(?<!\\p{L})voy\\s+del(?!\\p{L})', why: '«Voy» va con a: voy al mercado. Para el origen: vengo del mercado.' },
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
            { tone: 'blue', label: 'YO EN -GO', formula: 'hago · pongo · salgo · vengo', example: 'Hago la comida y pongo la mesa.', caption: 'solo la forma de yo', en: 'only the “yo” form ends in -go' },
            { tone: 'teal', label: 'LAS OTRAS PERSONAS', formula: 'haces · pone · salimos · hacen', example: 'Diego pone la música. Salimos a las seis.', caption: 'regulares, como en la clase 017', en: 'the other persons are regular' },
            { tone: 'orange', label: 'VENIR CON -IE-', formula: 'vienes · viene · vienen (pero venimos)', example: 'Marcos viene a las siete y media.', caption: 'como tener: tienes, tiene, tienen', en: 'venir changes like tener' },
            { tone: 'violet', label: 'VENGO DE / VOY A', formula: 'vengo del + lugar · voy al + lugar', example: 'Vengo del mercado. / Voy al mercado.', caption: 'origen / destino', en: 'from / to' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Con **yo**, piensa en **-go**: hago, pongo, salgo, vengo (y tengo). Con las otras personas, terminaciones regulares, y en venir, **-ie-** menos con nosotros.', en: 'With “yo”, think -go. With the other persons, regular endings; venir adds -ie- except with nosotros.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Yo ___ la mesa y tú ___ la música.', options: ['pongo / pones', 'pono / pones', 'pongo / ponges'], answer: 0, why: 'Yo: pongo (-go). Tú: pones (regular).' },
            { prompt: 'Mis primos ___ a la cena a las ocho.', options: ['vienen', 'venen', 'vienemos'], answer: 0, why: 'Ellos: vienen, con -ie-.' },
            { prompt: 'Yo, los sábados, ___ de casa temprano.', options: ['salgo', 'salo', 'sale'], answer: 0, why: 'Hablo de mí (yo): salgo. «Sale» es para él o ella.' },
            { prompt: 'Ana llega con el pan: «___ de la panadería».', options: ['Vengo', 'Voy', 'Viene'], answer: 0, why: 'Ana habla de ella y dice el origen: vengo de.' },
            { prompt: 'Nosotros ___ las compras y después ___ juntos.', options: ['hacemos / vienemos', 'hacemos / venimos', 'hacen / vienen'], answer: 1, why: 'Nosotros: hacemos, venimos. Regulares, sin -go y sin -ie-.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'rewrite', title: 'Un lunes de trabajo · A Monday at work', items: [
            { prompt: 'Sara sale de casa a las ocho y hace un café.', instruction: 'Ahora eres tú: escribe la frase con yo. (Now it’s you: write it with “yo”.)', accept: ['Yo salgo de casa a las ocho y hago un café', 'Salgo de casa a las ocho y hago un café', 'Yo salgo de casa a las 8 y hago un café', 'Salgo de casa a las 8 y hago un café'] },
            { prompt: 'Sara pone el teléfono en la mesa.', instruction: 'Escribe la frase con yo. (Write it with “yo”.)', accept: ['Yo pongo el teléfono en la mesa', 'Pongo el teléfono en la mesa'] },
            { prompt: 'Sara viene a la oficina en autobús.', instruction: 'Escribe la frase con tú. (Write it with “tú”.)', accept: ['Tú vienes a la oficina en autobús', 'Vienes a la oficina en autobús'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 020 · Presente con cambio vocálico: querer, poder, pedir', text: 'Ya conoces el cambio de vienes, viene, vienen. En la clase 020 ves que muchos verbos cambian la vocal así: qu**ie**ro, p**ue**do, p**i**do. Con ellos puedes decir qué quieres, qué puedes hacer y qué pides en la cena.', en: 'You already know the change in vienes, viene, vienen. In class 020 you see that many verbs change their vowel like this: quiero, puedo, pido. With them you can say what you want, what you can do and what you order at dinner.', href: '/gramatica/presente-con-cambio-vocalico', label: 'Ir a la clase 020' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué haces el sábado? ¿A qué hora sales? ¿De dónde vienes?». Respuesta esperada con hago, salgo y vengo de. Tarea: mandar el mensaje de Escribir a un grupo real de amigos.' },
        ] },
      ],
    },
  ],
};
