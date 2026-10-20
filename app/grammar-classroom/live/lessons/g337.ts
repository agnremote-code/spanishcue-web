import type { LiveLesson } from '../types';

/**
 * Lesson 337 · A1 · Comparativos regulares: más, menos, tan ... como (course unit G037).
 * One scene runs through the class: Clara and Julio arrive without a booking at
 * the Hotel Mirador in Cádiz. Nuria, the receptionist, has three free rooms:
 * the 12 (30 m², 90 €, street side, noisy), the 20 (20 m², 60 €, street side,
 * noisy) and the 31 (20 m², 75 €, patio side, quiet). They compare size, price
 * and noise, and choose the 31. In the voicemail Nuria offers room 40 for the
 * next night (25 m², 85 €, patio side).
 * Content: más + adjetivo + que, menos + adjetivo + que, tan + adjetivo + como,
 * «no es tan … como», agreement of the adjective with the first element.
 * Contrast: más barato que / tan barato como. Mistake: *más grande como.
 * «Más de» + number and mejor / peor appear only as glossed notes.
 * Nuria speaks Peninsular Spanish with usted / ustedes; instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 337,
  level: 'A1',
  title: 'Comparativos regulares: más, menos, tan ... como',
  subtitle: 'Comparar habitaciones de hotel por tamaño, precio y ruido con más … que, menos … que y tan … como, y elegir una.',
  legend: [
    { tone: 'blue', label: 'MÁS … QUE · A tiene más (more … than)' },
    { tone: 'orange', label: 'MENOS … QUE · A tiene menos (less … than)' },
    { tone: 'teal', label: 'TAN … COMO · A y B son iguales (as … as)' },
  ],
  optionNotes: {
    'más grande como': 'Con **más**, la pareja es **que**: más grande que. «Como» va con **tan**.',
    'más tranquila como': 'Con **más**, la pareja es **que**: más tranquila que. «Como» va con **tan**.',
    'más barato como': 'Con **más**, la pareja es **que**: más barato que. «Como» va con **tan**.',
    'más importante como': 'Con **más**, la pareja es **que**: más importante que. «Como» va con **tan**.',
    'tan grande que': 'Con **tan**, la pareja es **como**: tan grande como. «Que» va con más y menos.',
    'tan tranquila que': 'Con **tan**, la pareja es **como**: tan tranquila como. «Que» va con más y menos.',
    'tan barato que': 'Con **tan**, la pareja es **como**: tan barato como. «Que» va con más y menos.',
    'tan importante que': 'Con **tan**, la pareja es **como**: tan importante como. «Que» va con más y menos.',
    'más grande de': 'Para comparar dos cosas, usa **que**: más grande que la playa del centro. «Más de» solo va con un número: más de 80 euros.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Tres habitaciones libres', coach: 'Más, menos o igual. More, less or the same.',
      steps: [
        { title: 'Hotel Mirador · Three free rooms', blocks: [
          { kind: 'lead', text: 'Clara y Julio llegan al **Hotel Mirador**, en Cádiz, sin reserva. Nuria, la recepcionista, tiene **tres habitaciones libres**: la 12, la 20 y la 31. ¿Cuál eligen? Para decidir, comparan tres cosas: el **tamaño**, el **precio** y el **ruido**.', en: 'Clara and Julio arrive at the Hotel Mirador in Cádiz without a booking. Nuria, the receptionist, has three free rooms: 12, 20 and 31. Which one do they choose? To decide, they compare three things: size, price and noise.' },
          { kind: 'guide', text: { teacher: 'Tú lees la tabla de las habitaciones y tu alumno dice qué habitación quiere. Después leen juntos las tres frases de abajo.', self: 'Mira la tabla. ¿Qué habitación quieres tú? Después lee en voz alta las tres frases. (Look at the table, then read the three sentences aloud.)' } },
          { kind: 'table', title: 'Las tres habitaciones · The three rooms', head: ['Habitación (room)', 'Tamaño (size)', 'Precio (price per night)', 'Ruido (noise)'], rows: [
            ['**12**', '30 m² · grande (big)', '90 € · cara (expensive)', 'ruidosa (noisy): da a la calle'],
            ['**20**', '20 m²', '60 € · barata (cheap)', 'ruidosa: da a la calle'],
            ['**31**', '20 m²', '75 €', 'tranquila (quiet): da al patio'],
          ], note: '«Da a la calle» = the window faces the street. «Da al patio» = it faces the inner courtyard.' },
          { kind: 'compare', title: 'Tres maneras de comparar · Three ways to compare', columns: [
            { tone: 'blue', label: 'MÁS · more', sentence: 'La 12 es [[más grande que|blue]] la 31.', idea: '30 m² y 20 m²: la 12 tiene más.', en: 'Room 12 is bigger than room 31.' },
            { tone: 'orange', label: 'MENOS · less', sentence: 'La 31 es [[menos cara que|orange]] la 12.', idea: '75 € y 90 €: la 31 tiene menos.', en: 'Room 31 is less expensive than room 12.' },
            { tone: 'teal', label: 'TAN · the same', sentence: 'La 20 es [[tan grande como|teal]] la 31.', idea: '20 m² y 20 m²: son iguales.', en: 'Room 20 is as big as room 31.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La 12 es más grande que la 31» significa…', options: ['Room 12 is bigger than room 31.', 'Room 12 is as big as room 31.', 'Room 12 is smaller than room 31.'], answer: 0, why: 'Más + grande + que = bigger than.', en: '“La 12 es más grande que la 31” means…' },
            { prompt: '¿Qué habitación es tranquila?', options: ['La 20.', 'La 31.', 'La 12.'], answer: 1, why: 'La 31 da al patio: es tranquila. La 12 y la 20 dan a la calle.', en: 'Which room is quiet?' },
            { prompt: '«Tan grande como» dice que las dos habitaciones son…', options: ['iguales (the same).', 'diferentes (different).', 'pequeñas (small).'], answer: 0, why: 'Tan … como = as … as: el mismo tamaño.', en: '“Tan grande como” says that the two rooms are…' },
          ] },
        ] },
        { title: 'Más … que · More … than', mascot: '/brand/mascot/standing.webp', coach: 'Más + adjetivo + que.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'MÁS … QUE', question: '¿Quién tiene más?', en: 'more … than / -er than', formula: ['A + es + más + adjetivo + que + B', 'La 12 es más cara que la 20.'],
            meaning: 'Con **más … que** dices que A tiene **más** de una característica que B. El adjetivo va en medio, y la segunda parte siempre empieza con **que**.',
            examples: [
              { es: 'La 12 es [[más cara que|blue]] la 20.', en: 'Room 12 is more expensive than room 20.' },
              { es: 'La 31 es [[más tranquila que|blue]] la 12.', en: 'Room 31 is quieter than room 12.' },
              { es: 'El patio es [[más bonito que|blue]] la calle.', en: 'The courtyard is prettier than the street.' },
              { es: 'Las camas de la 12 son [[más grandes que|blue]] las camas de la 20.', en: 'The beds in 12 are bigger than the beds in 20.' },
            ],
            note: 'El adjetivo concuerda con **A**, la primera cosa: la 31 es más tranquil**a**; el patio es más bonit**o**; las camas son más grande**s**. (The adjective agrees with the first thing.)' },
          { kind: 'tip', icon: '💡', title: 'Una palabra para todo · One word for everything', text: 'En inglés dices «bigger» o «more expensive». En español es siempre igual: **más** + adjetivo. Más grande, más caro, más tranquilo.', en: 'In English you say “bigger” or “more expensive”. In Spanish it is always the same: más + adjective. Más grande, más caro, más tranquilo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La 20 es más ruidosa ___ la 31.', options: ['como', 'de', 'que'], answer: 2, why: 'Más + adjetivo + **que**.', en: 'Room 20 is noisier than room 31.' },
            { prompt: 'La 12 (30 m²) es ___ la 20 (20 m²).', options: ['más grande que', 'más grande', 'grande más que'], answer: 0, why: 'El orden es más + adjetivo + que + B.', en: 'Room 12 is bigger than room 20.' },
            { prompt: 'La recepción es más ___ que el bar.', options: ['bonito', 'bonitas', 'bonita'], answer: 2, why: 'El adjetivo concuerda con la primera cosa: la recepción → bonita.', en: 'The reception is prettier than the bar.' },
          ] },
        ] },
        { title: 'Menos … que · Less … than', mascot: '/brand/mascot/studying.webp', coach: 'Menos + adjetivo + que.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'MENOS … QUE', question: '¿Quién tiene menos?', en: 'less … than', formula: ['A + es + menos + adjetivo + que + B', 'La 31 es menos cara que la 12.'],
            meaning: '**Menos … que** es lo contrario de más … que: A tiene **menos** de esa característica. La estructura es la misma: solo cambia **más** por **menos**.',
            examples: [
              { es: 'La 20 es [[menos tranquila que|orange]] la 31.', en: 'Room 20 is less quiet than room 31.' },
              { es: 'La 31 es [[menos cara que|orange]] la 12.', en: 'Room 31 is less expensive than room 12.' },
              { es: 'La calle es [[menos bonita que|orange]] el patio.', en: 'The street is less pretty than the courtyard.' },
            ],
            note: 'Muchas veces usamos el adjetivo contrario con **más**: «menos cara» = «más barata». Los dos están bien.' },
          { kind: 'table', title: 'Dos frases, la misma idea · Two sentences, one idea', head: ['Con menos', 'Con más + el contrario', 'English'], rows: [
            ['La 31 es [[menos cara que|orange]] la 12.', 'La 31 es [[más barata que|blue]] la 12.', '31 costs less than 12.'],
            ['La 20 es [[menos grande que|orange]] la 12.', 'La 20 es [[más pequeña que|blue]] la 12.', '20 is smaller than 12.'],
            ['La 12 es [[menos tranquila que|orange]] la 31.', 'La 12 es [[más ruidosa que|blue]] la 31.', '12 is noisier than 31.'],
          ], note: 'Los pares de hoy: grande / pequeño · caro / barato · tranquilo / ruidoso.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La 20 (60 €) es ___ cara que la 31 (75 €).', options: ['menos', 'más', 'tan'], answer: 0, why: '60 € es menos que 75 €: menos cara.', en: 'Room 20 is less expensive than room 31.' },
            { prompt: '«La 31 es menos cara que la 12» = …', options: ['La 31 es tan cara como la 12.', 'La 31 es más barata que la 12.', 'La 31 es más cara que la 12.'], answer: 1, why: 'Menos cara = más barata: la misma idea.', en: '“La 31 es menos cara que la 12” = …' },
            { prompt: 'El bar es menos tranquilo ___ la terraza.', options: ['que', 'como', 'tan'], answer: 0, why: 'Menos + adjetivo + **que**, igual que con más.', en: 'The bar is less quiet than the terrace.' },
          ] },
        ] },
        { title: 'Tan … como · As … as', mascot: '/brand/mascot/portrait.webp', coach: 'Iguales: tan … como.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TAN … COMO', question: '¿Son iguales?', en: 'as … as', formula: ['A + es + tan + adjetivo + como + B', 'La 20 es tan grande como la 31.'],
            meaning: 'Con **tan … como** dices que A y B son **iguales** en esa característica. Ojo: con **tan**, la segunda parte empieza con **como**, no con que.',
            examples: [
              { es: 'La 20 es [[tan grande como|teal]] la 31.', en: 'Room 20 is as big as room 31.' },
              { es: 'La 20 es [[tan ruidosa como|teal]] la 12.', en: 'Room 20 is as noisy as room 12.' },
              { es: 'La 31 [[no es tan grande como|teal]] la 12.', en: 'Room 31 is not as big as room 12.' },
            ],
            note: '**No es tan … como** es una forma muy natural de decir «menos»: la 31 no es tan grande como la 12 = la 31 es menos grande.' },
          { kind: 'compare', title: 'Más barato que / tan barato como · Cheaper than / as cheap as', columns: [
            { tone: 'blue', label: 'DIFERENTES · different', sentence: 'El museo (5 €) es [[más barato que|blue]] el acuario (12 €).', idea: 'No cuestan lo mismo: más … que.', en: 'The museum is cheaper than the aquarium.' },
            { tone: 'teal', label: 'IGUALES · the same', sentence: 'El museo (5 €) es [[tan barato como|teal]] el castillo (5 €).', idea: 'Cuestan lo mismo: tan … como.', en: 'The museum is as cheap as the castle.' },
          ] },
          { kind: 'decide', title: 'Antes de comparar, piensa · Before you compare', steps: [
            { q: '¿A y B son iguales en esa característica? (Are they the same?)', yes: 'Usa **tan + adjetivo + como**: tan barato como.', no: 'next' },
            { q: '¿A tiene más? (Does A have more?)', yes: 'Usa **más + adjetivo + que**: más caro que.', no: 'A tiene menos: **menos + adjetivo + que**, o **no es tan … como**.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El castillo (5 €) es ___ el museo (5 €).', options: ['más barato que', 'tan barato que', 'tan barato como'], answer: 2, why: 'El mismo precio: tan + barato + como.', en: 'The castle is as cheap as the museum.' },
            { prompt: 'El acuario (12 €) es ___ el museo (5 €).', options: ['más caro que', 'tan caro como', 'menos caro que'], answer: 0, why: '12 € es más que 5 €: más caro que.', en: 'The aquarium is more expensive than the museum.' },
            { prompt: '«La 20 no es tan tranquila como la 31» significa…', options: ['Las dos son iguales.', 'La 20 es más tranquila.', 'La 31 es más tranquila.'], answer: 2, why: 'No es tan … como = menos: la 31 es más tranquila.', en: '“La 20 no es tan tranquila como la 31” means…' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Que o como? Que or como?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Que o como? ¿El adjetivo concuerda?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La 12 es más grande como la 20.', right: 'La 12 es más grande que la 20.', why: 'Con **más**, la pareja es **que**. «Como» solo va con tan. (Más … que, never más … como.)' },
            { wrong: 'La 31 es tan grande que la 20.', right: 'La 31 es tan grande como la 20.', why: 'Con **tan**, la pareja es **como**. (Tan … como = as … as.)' },
            { wrong: 'La 31 es más tranquilo que la 12.', right: 'La 31 es más tranquila que la 12.', why: 'El adjetivo concuerda con la primera cosa: la habitación 31 → tranquil**a**.' },
            { wrong: 'La 20 es más barata la 31.', right: 'La 20 es más barata que la 31.', why: 'Falta **que** antes de la segunda cosa. (You need “que” before B.)' },
            { wrong: 'La 12 es menos cara como la 31.', right: 'La 12 es menos cara que la 31.', why: 'Menos funciona como más: menos … **que**. (Y además es falso: la 12 cuesta 90 €.)' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Dos excepciones para reconocer · Two exceptions to recognise', text: 'Con un **número**, se dice **más de**: «La 12 cuesta más de 80 euros». Y **bueno / malo** tienen formas especiales: **mejor / peor** (better / worse). Las practicas en otra clase.', en: 'With a number you say “más de”: “Room 12 costs more than 80 euros”. And bueno / malo have special forms: mejor / peor (better / worse). You will practise them in another class.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['La 20 es tan ruidosa que la 12.', 'La 20 es más ruidosa como la 12.', 'La 20 es tan ruidosa como la 12.'], answer: 2, why: 'Iguales: tan + adjetivo + como.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['El patio es más tranquilo que la calle.', 'El patio es más tranquila que la calle.', 'El patio es más tranquilo la calle.'], answer: 0, why: 'El patio → tranquil**o**, y la pareja de más es que.', en: 'Which one is correct?' },
            { prompt: 'La 12 cuesta más ___ 80 euros.', options: ['como', 'de', 'que'], answer: 1, why: 'Con un número: más **de**. Es la excepción.', en: 'Room 12 costs more than 80 euros.' },
          ] },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la recepción', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la recepción · At reception', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Nuria y tu alumno es Clara y Julio. Después, tu alumno toca cada expresión marcada y dice si es más, menos o igual.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿más, menos o igual? (Tap each marked expression.)' } },
          { kind: 'explore', title: 'Tres habitaciones, una decisión', setting: 'Viernes por la tarde, en la recepción del Hotel Mirador. Clara y Julio no tienen reserva. Nuria les habla de usted. (Friday afternoon at reception. Nuria uses the formal “usted / ustedes”.)', lines: [
            { who: 'Nuria', text: 'Buenas tardes. Tenemos tres habitaciones libres: la 12, la 20 y la 31.', en: 'Good afternoon. We have three free rooms: 12, 20 and 31.' },
            { who: 'Clara', text: '¿Cuál es [[más grande|blue]]?', en: 'Which one is bigger?' },
            { who: 'Nuria', text: 'La 12. Es [[más grande que|blue]] las otras dos: tiene treinta metros. Pero también es [[más cara|blue]]: noventa euros la noche.', en: 'Room 12. It’s bigger than the other two: it has thirty square metres. But it is also more expensive: ninety euros a night.' },
            { who: 'Julio', text: '¿Y la 20 y la 31?', en: 'And 20 and 31?' },
            { who: 'Nuria', text: 'La 20 es [[tan grande como|teal]] la 31: veinte metros. La 20 cuesta sesenta euros y la 31, setenta y cinco.', en: 'Room 20 is as big as room 31: twenty square metres. Room 20 costs sixty euros and 31, seventy-five.' },
            { who: 'Clara', text: 'Entonces la 20 es [[más barata que|blue]] la 31. ¿Es tranquila?', en: 'So room 20 is cheaper than 31. Is it quiet?' },
            { who: 'Nuria', text: 'No mucho. Da a la calle: es [[tan ruidosa como|teal]] la 12. La 31 da al patio y es [[más tranquila que|blue]] las otras.', en: 'Not very. It faces the street: it’s as noisy as 12. Room 31 faces the courtyard and is quieter than the others.' },
            { who: 'Julio', text: 'Para nosotros, el silencio es importante. Y la 31 es [[menos cara que|orange]] la 12.', en: 'For us, silence is important. And 31 is less expensive than 12.' },
            { who: 'Clara', text: 'Sí. [[No es tan grande como|teal]] la 12, pero para dos noches está bien.', en: 'Yes. It’s not as big as 12, but for two nights it’s fine.' },
            { who: 'Julio', text: 'Perfecto. Queremos la 31, por favor.', en: 'Perfect. We want room 31, please.' },
            { who: 'Nuria', text: 'Muy bien. Aquí tienen la llave. Está en el tercer piso.', en: 'Very good. Here is the key. It’s on the third floor.' },
          ], notes: {
            'más grande': 'Clara compara las tres habitaciones. La segunda parte (que las otras) no hace falta: está clara. **Más grande** = bigger.',
            'más grande que': '**Más + grande + que** + las otras dos: la 12 tiene más metros. (bigger than)',
            'más cara': '**Más cara** (que las otras): 90 €. Cara, con -a, porque habla de la habitación.',
            'tan grande como': 'Veinte metros y veinte metros: iguales. **Tan + grande + como**. (as big as)',
            'más barata que': '60 € y 75 €: la 20 cuesta menos. **Más barata que** = cheaper than.',
            'tan ruidosa como': 'Las dos dan a la calle: el mismo ruido. **Tan ruidosa como** = as noisy as.',
            'más tranquila que': 'La 31 da al patio: tiene menos ruido. **Más tranquila que** = quieter than.',
            'menos cara que': '75 € y 90 €: **menos cara que** = less expensive than. También: más barata que.',
            'No es tan grande como': '**No es tan … como** = menos: la 31 tiene veinte metros y la 12, treinta. (not as big as)',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué es más cara la 12?', options: ['Es más grande: treinta metros.', 'Da al patio.', 'Tiene terraza.'], answer: 0, why: '«Es más grande que las otras dos… Pero también es más cara».', en: 'Why is room 12 more expensive?' },
            { prompt: '¿Por qué no quieren la 20?', options: ['Es ruidosa: da a la calle.', 'Es más cara que la 31.', 'Es más pequeña que la 31.'], answer: 0, why: '«Da a la calle: es tan ruidosa como la 12». Para ellos, el silencio es importante.', en: 'Why don’t they want room 20?' },
            { prompt: '¿Qué habitación eligen?', options: ['La 20.', 'La 31.', 'La 12.'], answer: 1, why: '«Queremos la 31, por favor».', en: 'Which room do they choose?' },
          ] },
        ] },
        { title: 'Las tres fichas · The three room cards', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno mira la tabla de Entender (12: 30 m², 90 €, calle · 20: 20 m², 60 €, calle · 31: 20 m², 75 €, patio) y decide: ¿más, menos o igual? Tú lees cada frase con la palabra correcta.', self: 'Usa los datos: 12 = 30 m², 90 €, calle · 20 = 20 m², 60 €, calle · 31 = 20 m², 75 €, patio. ¿Más, menos o igual? (More, less or the same?)' } },
          { kind: 'classify', title: '¿Más, menos o tan? · More, less or as?', categories: [
            { id: 'mas', label: 'MÁS … QUE · more', tone: 'blue' },
            { id: 'menos', label: 'MENOS … QUE · less', tone: 'orange' },
            { id: 'tan', label: 'TAN … COMO · the same', tone: 'teal' },
          ], items: [
            { text: 'La 12 es … cara … la 31.', answer: 'mas', why: '90 € y 75 €: la 12 es más cara que la 31.' },
            { text: 'La 20 es … cara … la 12.', answer: 'menos', why: '60 € y 90 €: la 20 es menos cara que la 12.' },
            { text: 'La 31 es … grande … la 20.', answer: 'tan', why: '20 m² y 20 m²: tan grande como.' },
            { text: 'La 12 es … ruidosa … la 20.', answer: 'tan', why: 'Las dos dan a la calle: tan ruidosa como.' },
            { text: 'La 31 es … tranquila … la 20.', answer: 'mas', why: 'Patio y calle: la 31 es más tranquila que la 20.' },
            { text: 'La 31 es … grande … la 12.', answer: 'menos', why: '20 m² y 30 m²: menos grande que (o: no es tan grande como).' },
            { text: 'La 20 es … tranquila … la 31.', answer: 'menos', why: 'La 20 da a la calle: menos tranquila que la 31.' },
            { text: 'La 12 es … grande … la 20.', answer: 'mas', why: '30 m² y 20 m²: más grande que.' },
          ] },
          { kind: 'teacher', text: 'Al final, tu alumno dice dos frases con «no es tan … como» a partir de la tabla: «La 20 no es tan tranquila como la 31», «La 31 no es tan cara como la 12».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Más, menos o tan? More, less or as?',
      steps: [
        { title: 'Elige la comparación · Choose the comparison', blocks: [
          { kind: 'choice', items: [
            { context: 'El armario de la 12: 2 metros · el armario de la 31: 1 metro. (wardrobe)', prompt: 'El armario de la 12 es ___ el armario de la 31.', options: ['más grande que', 'más grande como', 'tan grande que'], answer: 0, why: 'La 12 tiene más: más + grande + que.', en: 'The wardrobe in 12 is bigger than the wardrobe in 31.' },
            { context: 'Las dos camas miden 1,50 m. (Both beds are 1.50 m.)', prompt: 'La cama de la 20 es ___ la cama de la 31.', options: ['más grande que', 'tan grande que', 'tan grande como'], answer: 2, why: 'Iguales: tan + grande + como.', en: 'The bed in 20 is as big as the bed in 31.' },
            { context: 'Desayuno en el hotel: 10 € · en el bar de la esquina: 6 €.', prompt: 'El desayuno del bar es ___ el desayuno del hotel.', options: ['más caro que', 'tan barato como', 'más barato que'], answer: 2, why: '6 € es menos que 10 €: el bar es más barato.', en: 'Breakfast at the bar is cheaper than breakfast at the hotel.' },
            { context: 'La piscina del hotel: 8 metros · la piscina del gimnasio: 25 metros. (pool)', prompt: 'La piscina del hotel es más ___ que la piscina del gimnasio.', options: ['pequeñas', 'pequeña', 'pequeño'], answer: 1, why: 'La piscina → pequeñ**a**: el adjetivo concuerda con la primera cosa.', en: 'The hotel pool is smaller than the gym pool.' },
            { context: 'Parking del hotel: 15 € · parking de la plaza: 12 €.', prompt: 'El parking de la plaza es ___ caro que el parking del hotel.', options: ['menos', 'más', 'tan'], answer: 0, why: '12 € es menos que 15 €: menos caro que.', en: 'The car park in the square is less expensive than the hotel car park.' },
            { context: 'La 12 es muy luminosa; la 20, un poco. (bright)', prompt: 'La 20 ___ luminosa como la 12.', options: ['no es más', 'es menos', 'no es tan'], answer: 2, why: 'Con **como**, solo funciona **tan**: no es tan luminosa como.', en: 'Room 20 is not as bright as room 12.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/kneeling.webp', coach: 'Mira la pareja y el final del adjetivo.', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La 12 es más luminosa como la 20.', ok: false, options: ['La 12 es tan luminosa que la 20.', 'La 12 es más luminoso que la 20.', 'La 12 es más luminosa que la 20.'], answer: 2, why: 'Más va con **que**: más luminosa que.' },
            { sentence: 'La recepción es tan bonita como la terraza.', ok: true, why: 'Correcta: iguales, tan + bonita + como, y bonita concuerda con la recepción.' },
            { sentence: 'El patio es más tranquila que la calle.', ok: false, options: ['El patio es más tranquilo que la calle.', 'El patio es más tranquilos que la calle.', 'El patio es tan tranquila que la calle.'], answer: 0, why: 'El patio (masculino) → tranquil**o**. El adjetivo concuerda con la primera cosa.' },
            { sentence: 'Nuria es tan simpática que Clara.', ok: false, options: ['Nuria es más simpática como Clara.', 'Nuria es tan simpático como Clara.', 'Nuria es tan simpática como Clara.'], answer: 2, why: 'Con tan, la pareja es **como**: tan simpática como.' },
            { sentence: 'La cafetería es menos cara que el restaurante.', ok: true, why: 'Correcta: menos + cara + que, y cara concuerda con la cafetería.' },
            { sentence: 'Las toallas de la 12 son más grande que las toallas de la 20.', ok: false, options: ['Las toallas de la 12 son más grande como las toallas de la 20.', 'Las toallas de la 12 es más grande que las toallas de la 20.', 'Las toallas de la 12 son más grandes que las toallas de la 20.'], answer: 2, why: 'Las toallas (plural) → grande**s**, y el verbo es son.' },
            { sentence: 'El restaurante es más caro la cafetería.', ok: false, options: ['El restaurante es más cara que la cafetería.', 'El restaurante es más caro que la cafetería.', 'El restaurante es más caro como la cafetería.'], answer: 1, why: 'Falta **que** antes de la segunda cosa; caro concuerda con el restaurante.' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', mascot: '/brand/mascot/speaking.webp', coach: 'Sábado por la mañana.', blocks: [
          { kind: 'chat-fill', title: 'El sábado, en el desayuno · Saturday, at breakfast', lines: [
            { who: 'Nuria', text: '¡Buenos días! ¿Qué tal la 31?' },
            { who: 'Clara', text: 'Muy bien. Es ___ nuestra habitación de casa. No hay nada de ruido.', options: ['más tranquila que', 'más tranquila como', 'tan tranquila que'], answer: 0, why: 'La 31 tiene menos ruido: más + tranquila + que.' },
            { who: 'Julio', text: 'Hoy queremos ir a la playa. ¿Qué playa nos recomienda?' },
            { who: 'Nuria', text: 'Hay dos: la del centro y la del sur. La del sur es ___ la del centro: tiene tres kilómetros.', options: ['más grande de', 'tan grande que', 'más grande que'], answer: 2, why: 'Para comparar dos playas: más grande **que**. «Más de» es solo con números.' },
            { who: 'Clara', text: '¿Y cuál es más tranquila?' },
            { who: 'Nuria', text: 'La del centro ___ tranquila como la del sur: hay mucha gente.', options: ['es menos', 'es tan', 'no es tan'], answer: 2, why: 'Hay mucha gente, entonces tiene menos tranquilidad, y la frase sigue con como: no es tan … como.' },
            { who: 'Julio', text: '¿Y para ir a la playa del sur? ¿El taxi es caro?' },
            { who: 'Nuria', text: 'Un poco. El autobús es ___ el taxi: un euro y medio.', options: ['más barato como', 'más barato que', 'tan barato que'], answer: 1, why: 'El autobús cuesta menos: más + barato + que.' },
            { who: 'Clara', text: 'Para nosotros, el silencio es ___ la distancia. ¡Vamos a la playa del sur!', options: ['tan importante que', 'más importante como', 'más importante que'], answer: 2, why: 'El silencio tiene más importancia: más + importante + que.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/autoestudio/mascot/noting.webp', coach: 'Primero A, después más / menos / tan.', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['es', 'La', 'que', 'más', '12', 'cara', 'la', '31'], accept: ['La 12 es más cara que la 31'], en: 'Room 12 is more expensive than room 31.' },
            { tiles: ['tan', 'El', 'es', 'como', 'patio', 'bonito', 'la', 'terraza'], accept: ['El patio es tan bonito como la terraza'], en: 'The courtyard is as pretty as the terrace.' },
            { tiles: ['menos', 'La', 'ruidosa', 'es', 'que', '31', 'la', '12'], accept: ['La 31 es menos ruidosa que la 12'], en: 'Room 31 is less noisy than room 12.' },
            { tiles: ['no', 'La', 'es', 'tan', 'grande', '20', 'como', 'la', '12'], accept: ['La 20 no es tan grande como la 12'], en: 'Room 20 is not as big as room 12.' },
          ] },
        ] },
        { title: 'Escribe la comparación · Write the comparison', mascot: '/autoestudio/mascot/writing.webp', coach: 'Usa los datos. Use the data.', blocks: [
          { kind: 'rewrite', title: 'De los datos a la frase · From the data to the sentence', items: [
            { prompt: 'El desayuno: 10 € · la cena: 25 € (caro)', instruction: 'Compara con más … que. Empieza con «La cena». (dinner)', accept: ['La cena es más cara que el desayuno'] },
            { prompt: 'Nuria: simpática · Diego, el recepcionista de noche: simpático, igual', instruction: 'Compara con tan … como. Empieza con «Diego».', accept: ['Diego es tan simpático como Nuria'] },
            { prompt: 'La calle: muy ruidosa · el patio: un poco ruidoso', instruction: 'Compara con menos … que. Empieza con «El patio».', accept: ['El patio es menos ruidoso que la calle'] },
            { prompt: 'Room 31 is quieter than room 12.', instruction: 'Escribe la frase en español. (quiet = tranquilo / tranquila)', accept: ['La 31 es más tranquila que la 12', 'La habitación 31 es más tranquila que la 12', 'La habitación 31 es más tranquila que la habitación 12'] },
          ] },
          { kind: 'teacher', text: 'Después de cada frase, tu alumno dice la idea contraria: «La cena es más cara que el desayuno» → «El desayuno es más barato que la cena».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de la recepción', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Nuria deja un mensaje · Nuria leaves a message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿por qué llama Nuria?). Segunda escucha: tu alumno levanta la mano cada vez que oye más, menos o tan. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes «más», «menos» o «tan». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz del hotel', channel: 'MENSAJE DE VOZ · RECEPCIÓN DEL HOTEL MIRADOR', src: '/audio/grammar-live/337.mp3',
            before: 'Clara y Julio quieren una noche más, pero la 31 no está libre. Nuria deja un mensaje en el móvil de Clara. ¿Qué crees que ofrece? (Clara and Julio want one more night, but room 31 is not free. Nuria leaves a voice message. What do you think she offers?)',
            gist: { prompt: '¿Por qué llama Nuria? · Why does Nuria call?', options: ['Para cambiar el precio de la 31.', 'Para recomendar una playa.', 'Para ofrecer otra habitación para mañana.'], answer: 2, why: '«Mañana la 31 no está libre, pero hay otra habitación: la 40».', en: 'Why does Nuria call?' },
            details: [
              { prompt: 'La 40 y la 31: ¿cuál es más grande?', options: ['La 31.', 'Son iguales.', 'La 40: tiene veinticinco metros.'], answer: 2, why: '«La 40 es más grande que la 31: tiene veinticinco metros».', en: 'Room 40 and room 31: which one is bigger?' },
              { prompt: '¿Por qué es tranquila la 40?', options: ['Porque también da al patio.', 'Porque da a la calle.', 'Porque está en el primer piso.'], answer: 0, why: '«Es tan tranquila como la 31, porque también da al patio».', en: 'Why is room 40 quiet?' },
              { prompt: '¿Cuánto cuesta la 40?', options: ['Setenta y cinco euros.', 'Noventa euros.', 'Ochenta y cinco euros.'], answer: 2, why: '«Cuesta ochenta y cinco euros la noche»: más que la 31, menos que la 12.', en: 'How much does room 40 cost?' },
              { prompt: '¿Cuánto cuesta el desayuno mañana?', options: ['Ocho euros.', 'Diez euros.', 'Seis euros.'], answer: 0, why: '«Mañana el desayuno es más barato: ocho euros, no diez».', en: 'How much is breakfast tomorrow?' },
              { prompt: '¿Hasta qué hora pueden llamar?', options: ['Hasta las doce.', 'Hasta las diez.', 'Hasta la noche.'], answer: 0, why: '«Pueden llamar a recepción hasta las doce».', en: 'Until what time can they call?' },
            ],
            transcript: 'Buenos días, señora Ruiz. Soy Nuria, de la recepción del Hotel Mirador. Ustedes quieren una noche más, ¿verdad? Mañana la 31 no está libre, pero hay otra habitación: la 40, en el cuarto piso. La 40 es [[más grande que|blue]] la 31: tiene veinticinco metros. Y es [[tan tranquila como|teal]] la 31, porque también da al patio. Es un poco [[más cara|blue]]: cuesta ochenta y cinco euros la noche. Pero es [[menos cara que|orange]] la 12. Ah, y mañana el desayuno es [[más barato|blue]]: ocho euros, no diez. ¿Quieren la 40? Pueden llamar a recepción hasta las doce. Muchas gracias y hasta luego.',
            reply: { teacher: 'Tú eres Nuria. Tu alumno responde al mensaje como Clara: dice si quiere la 40 y por qué, con una comparación («Es más grande que la 31…»), y pregunta algo más.', self: 'Responde a Nuria en voz alta como Clara: ¿quieres la 40? Explica por qué con una comparación: «Sí, la 40 es más grande que la 31 y es tan tranquila como…». (Answer Nuria aloud with one comparison.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Elige tu habitación', coach: 'Compara y elige. Compare and choose.',
      steps: [
        { title: 'En la recepción · At reception', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Nuria, la recepcionista. Lees la pregunta y tu alumno responde con comparaciones completas. Tú repites su frase bien dicha y haces la repregunta.', self: 'Lee la pregunta, responde en voz alta con una comparación completa y, si quieres, escribe tu respuesta. (Answer aloud with a full comparison.)' } },
          { kind: 'talk', cards: [
            { q: 'La 12 o la 31: ¿cuál es más grande? ¿Y cuál es más cara? · Room 12 or 31: which is bigger? And which is more expensive?', followUps: ['¿Y cuál es más tranquila? (Which is quieter?)', '¿La 20 es tan grande como la 31? (Is 20 as big as 31?)'], phrases: ['La 12 es [[más grande que|blue]] la 31.', 'La 31 es [[menos cara que|orange]] la 12.', 'La 20 es [[tan grande como|teal]] la 31.'], hint: 'Mira la tabla: 12 = 30 m², 90 € · 20 = 20 m², 60 € · 31 = 20 m², 75 €.', example: 'La 12 es más grande que la 31, pero es más cara. La 31 es más tranquila que la 12. Y la 20 es tan grande como la 31.', next: 'Ahora, ¿qué es importante para ti?' },
            { q: '¿Qué es más importante para ti en un hotel: el precio, el tamaño o el silencio? · What matters more to you in a hotel: price, size or silence?', followUps: ['¿Por qué? (Why?)', '¿El desayuno es tan importante como la cama? (Is breakfast as important as the bed?)'], phrases: ['Para mí, el silencio es [[más importante que|blue]] el precio.', 'El precio es [[tan importante como|teal]] el tamaño.', 'Porque …'], hint: 'Elige dos cosas y compáralas con más … que o tan … como. Añade «porque».', example: 'Para mí, el silencio es más importante que el tamaño, porque me acuesto temprano. El precio es tan importante como el silencio.', next: 'Ahora, tu habitación de casa.' },
            { q: 'Compara tu habitación de casa con la 31. · Compare your bedroom at home with room 31.', followUps: ['¿Es más grande o más pequeña? (Bigger or smaller?)', '¿Es tan tranquila como la 31? (As quiet as 31?)', '¿Es más luminosa? (Brighter?)'], phrases: ['Mi habitación es [[más pequeña que|blue]] la 31.', 'Es [[menos tranquila que|orange]] la 31.', '[[No es tan luminosa como|teal]] la 31.'], hint: 'Mi habitación es + más / menos / tan + adjetivo. Recuerda: habitación → -a.', example: 'Mi habitación es más pequeña que la 31: tiene doce metros. Es menos tranquila, porque da a la calle. Pero es tan luminosa como la 31.', next: 'Ahora, dos hoteles en internet.' },
            { q: 'En internet hay dos hoteles: el Hotel Sol (70 €, en el centro, ruidoso) y el Hostal Luna (50 €, lejos del centro, tranquilo). Compara los dos. · Online there are two hotels. Compare them.', followUps: ['¿Cuál es más barato? (Which one is cheaper?)', '¿Cuál es más tranquilo? (Which one is quieter?)', '¿Cuál quieres tú? (Which one do you want?)'], phrases: ['El Hostal Luna es [[más barato que|blue]] el Hotel Sol.', 'El Hotel Sol es [[menos tranquilo que|orange]] el Hostal Luna.', 'El hostal [[no es tan céntrico como|teal]] el hotel.'], hint: 'Hotel y hostal son masculinos: barat**o**, tranquil**o**. Céntrico = in the centre.', example: 'El Hostal Luna es más barato que el Hotel Sol y es más tranquilo. Pero no es tan céntrico como el hotel. Yo quiero el hostal.', next: 'Ahora, un problema en el hotel.' },
            { q: 'Estás en la 12 y hay mucho ruido. Hablas con Nuria y pides otra habitación. · You are in room 12 and it is very noisy. Ask Nuria for another room.', followUps: ['¿Es tan grande como la 12? (Is it as big as 12?)', 'La 40 es más cara. ¿Está bien para usted? (Room 40 is more expensive. Is that OK for you?)'], phrases: ['La 12 es [[más ruidosa que|blue]] mi casa.', '¿Hay una habitación [[más tranquila|blue]]?', '¿Es [[tan grande como|teal]] la 12?'], hint: 'Primero el problema (más ruidosa que…), después la pregunta (¿hay una habitación más tranquila?).', example: 'Buenas noches. La 12 es muy ruidosa: es más ruidosa que mi casa. ¿Hay una habitación más tranquila? ¿Es tan grande como la 12?', teacher: 'Tú eres Nuria: ofreces la 40, das el precio (85 €) y comparas con la 12. Tu alumno decide.', next: 'Para terminar, tu decisión.' },
            { q: 'Elige tu habitación (12, 20, 31 o 40) y explica por qué, con tres comparaciones. · Choose your room and explain why, with three comparisons.', followUps: ['¿Qué habitación no quieres? ¿Por qué? (Which room don’t you want? Why?)', '¿Y tu compañero de viaje? ¿Quiere la misma? (Does your travel partner want the same one?)'], phrases: ['Quiero la … porque es [[más|blue]] … que …', 'Es [[menos|orange]] … que …', 'Es [[tan|teal]] … como …'], hint: 'Tres comparaciones: una con más, una con menos (o no tan) y una con tan … como.', example: 'Quiero la 40. Es más grande que la 31 y es tan tranquila como la 31. Es menos cara que la 12. No quiero la 20: es tan ruidosa como la 12.', teacher: 'Tú eliges otra habitación y das tus razones. Tu alumno compara las dos decisiones: «Tu habitación es más barata, pero la mía es más tranquila».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Nuria y presenta dos habitaciones con más, menos y tan; tú eres el cliente y eliges.', self: 'Ahora tú eres Nuria: presenta en voz alta dos habitaciones con más, menos y tan, y después elige como cliente. (Now you are the receptionist: present two rooms, then choose.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un consejo para una amiga', coach: 'Tres datos, tres comparaciones.',
      steps: [
        { title: 'Un mensaje para Sara · A message for Sara', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos que / como después de más, menos y tan, y la -o / -a del adjetivo. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien: más / menos + que, tan + como. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje para Sara · A message for Sara', situation: 'Tu amiga Sara va a Cádiz en mayo y te pregunta por el Hotel Mirador. Escríbele un mensaje: compara las habitaciones y recomienda una. (Your friend Sara is going to Cádiz in May and asks you about the Hotel Mirador. Write her a message: compare the rooms and recommend one.)', task: [
            'Saluda a Sara. (Say hello.)',
            'Compara dos o tres habitaciones por tamaño, precio y ruido. (Compare two or three rooms.)',
            'Usa **más … que**, **menos … que** (o no es tan … como) y **tan … como**. (Use the three structures.)',
            'Recomienda una habitación y di por qué. (Recommend one and say why.)',
          ], starters: ['Hola, Sara:', 'El Hotel Mirador tiene …', 'La 12 es más … que …', 'La 31 es tan … como …', 'La 20 es menos … que …', 'Te recomiendo la …', 'porque …', '¡Un abrazo!'],
            words: ['más … que', 'menos … que', 'tan … como', 'grande', 'pequeña', 'cara', 'barata', 'tranquila', 'ruidosa', 'da a la calle', 'da al patio', 'cuesta … euros', 'te recomiendo'],
            model: 'Hola, Sara: El Hotel Mirador tiene habitaciones muy diferentes. La 12 es [[más grande que|blue]] la 31, pero es más cara y más ruidosa, porque da a la calle. La 20 es [[tan ruidosa como|teal]] la 12, pero es [[menos cara que|orange]] la 31: cuesta sesenta euros. La 31 es [[tan grande como|teal]] la 20 y es [[más tranquila que|blue]] las otras dos, porque da al patio. Cuesta setenta y cinco euros. Te recomiendo la 31. ¡Un abrazo!',
            minWords: 40,
            checks: [
              { label: 'Más + adjetivo + que (more … than)', pattern: '(?<!\\p{L})más\\s+\\p{L}+\\s+que(?!\\p{L})', tip: 'Compara con más: «La 12 es más grande que la 31».' },
              { label: 'Menos + adjetivo + que, o no es tan … como (less … than)', pattern: '(?<!\\p{L})(?:menos\\s+\\p{L}+\\s+que|no\\s+(?:es|son)\\s+tan\\s+\\p{L}+\\s+como)(?!\\p{L})', tip: 'Di qué tiene menos: «La 20 es menos cara que la 31» o «La 31 no es tan grande como la 12».' },
              { label: 'Tan + adjetivo + como (as … as)', pattern: '(?<!\\p{L})tan\\s+\\p{L}+\\s+como(?!\\p{L})', tip: 'Di qué es igual: «La 31 es tan grande como la 20».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:más|menos)\\s+\\p{L}+\\s+como(?!\\p{L})', why: 'Con más y menos, la segunda parte va con **que**: «más grande que», «menos cara que».' },
              { pattern: '(?<!\\p{L})tan\\s+\\p{L}+\\s+que\\s+(?:la|el|las|los)(?!\\p{L})', why: 'Si comparas dos cosas iguales, tan va con **como**: «tan grande como la 20».' },
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
            { tone: 'blue', label: 'MÁS … QUE', formula: 'más + adjetivo + que', example: 'La 12 es más grande que la 31.', caption: 'A tiene más', en: 'more … than / -er than' },
            { tone: 'orange', label: 'MENOS … QUE', formula: 'menos + adjetivo + que · no es tan … como', example: 'La 31 es menos cara que la 12.', caption: 'A tiene menos', en: 'less … than / not as … as' },
            { tone: 'teal', label: 'TAN … COMO', formula: 'tan + adjetivo + como', example: 'La 20 es tan grande como la 31.', caption: 'A y B son iguales', en: 'as … as' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: '**Más** y **menos** van con **que**; **tan** va con **como**. El adjetivo concuerda con la primera cosa: la 31 es más tranquil**a**, el patio es más tranquil**o**.', en: 'Más and menos go with que; tan goes with como. The adjective agrees with the first thing: la 31 es más tranquila, el patio es más tranquilo.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'La 12 es más ruidosa ___ la 31.', options: ['como', 'de', 'que'], answer: 2, why: 'Más + adjetivo + que.', en: 'Room 12 is noisier than room 31.' },
            { prompt: 'La 40 es tan tranquila ___ la 31.', options: ['como', 'que', 'de'], answer: 0, why: 'Tan + adjetivo + como.', en: 'Room 40 is as quiet as room 31.' },
            { prompt: 'La 40 (85 €) es ___ cara que la 12 (90 €).', options: ['menos', 'más', 'tan'], answer: 0, why: '85 € es menos que 90 €: menos cara que.', en: 'Room 40 is less expensive than room 12.' },
            { prompt: 'La 31 y la 20 tienen veinte metros. La 31 es ___ la 20.', options: ['más grande que', 'tan grande que', 'tan grande como'], answer: 2, why: 'Iguales: tan grande como.', en: 'Room 31 is as big as room 20.' },
            { prompt: 'La cama de la 40 es más ___ que la cama de la 20.', options: ['cómoda', 'cómodo', 'cómodas'], answer: 0, why: 'La cama → cómod**a**: concuerda con la primera cosa.', en: 'The bed in room 40 is more comfortable than the bed in room 20.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Del hotel a la estación.', blocks: [
          { kind: 'lead', text: 'El lunes, Clara y Julio van de Cádiz a Sevilla. Pueden ir en tren o en autobús. Compara los dos.', en: 'On Monday, Clara and Julio go from Cádiz to Seville. They can go by train or by bus. Compare the two.' },
          { kind: 'rewrite', title: '¿Tren o autobús? · Train or bus?', items: [
            { prompt: 'El tren: 1 hora y media · el autobús: 2 horas (rápido)', instruction: 'Compara con más … que. Empieza con «El tren». (fast = rápido)', accept: ['El tren es más rápido que el autobús'] },
            { prompt: 'El tren: 20 € · el autobús: 15 € (barato)', instruction: 'Compara con más … que. Empieza con «El autobús».', accept: ['El autobús es más barato que el tren'] },
            { prompt: 'Los asientos del tren: cómodos · los asientos del autobús: cómodos, igual', instruction: 'Compara con tan … como. Empieza con «Los asientos del autobús». (comfortable = cómodo)', accept: ['Los asientos del autobús son tan cómodos como los asientos del tren', 'Los asientos del autobús son tan cómodos como los del tren'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 038 · La hora, el día y la fecha', text: 'Ya comparas habitaciones con más, menos y tan. En la clase 038 sigues de viaje: compras un billete de tren y confirmas la hora, el día y la fecha: «Son las ocho», «el martes 20 de octubre». Los números de hoy (precios y metros) te ayudan otra vez.', en: 'You can now compare rooms with más, menos and tan. In class 038 the trip goes on: you buy a train ticket and confirm the time, the day and the date: “Son las ocho”, “el martes 20 de octubre”. Today’s numbers (prices and sizes) help you again.', href: '/gramatica/la-hora-el-dia-y-la-fecha', label: 'Ir a la clase 038' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Compara tu casa con un hotel». Respuesta esperada: una frase con más … que, otra con menos … que o no es tan … como, y otra con tan … como, con el adjetivo concordado. Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
