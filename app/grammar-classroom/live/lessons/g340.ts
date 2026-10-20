import type { LiveLesson } from '../types';

/**
 * Lesson 340 · A1 · Querer, poder y tener que + infinitivo (course unit G040).
 * One scene runs through the class: Laura lives in Bogotá and wants to travel
 * to Cartagena with her brother Gabriel on a long weekend (Monday is a public
 * holiday). She asks her friend Julio, who works at a travel agency, for help
 * and they negotiate the limits: Gabriel has to work on Friday until two, they
 * cannot spend much money, the boat to the islands is expensive and has to be
 * booked early. In the voice message Julio (Colombian voice, tú / ustedes)
 * gives the final details. Gabriel's boss, señora Ríos, is addressed with usted.
 * Content: quiero / puedo / tengo que + infinitivo in all persons (vosotros
 * shown as the Spain form), desire vs possibility vs obligation, negation
 * («no puedo» = impossible, «no tengo que» = not necessary), and the contrast
 * with ir a + infinitivo (class 039). Mistake: *Tengo salir → Tengo que salir.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 340,
  level: 'A1',
  title: 'Querer, poder y tener que + infinitivo',
  subtitle: 'Organizar un viaje y negociar límites: decir qué quieres, qué puedes y qué tienes que hacer con un verbo + infinitivo.',
  legend: [
    { tone: 'orange', label: 'QUERER · un deseo (want to)' },
    { tone: 'teal', label: 'PODER · es posible (can)' },
    { tone: 'blue', label: 'TENER QUE · es necesario (have to)' },
    { tone: 'violet', label: 'IR A · un plan decidido (going to)' },
  ],
  optionNotes: {
    podo: '«Podo» no existe. Con yo, la o de poder cambia a ue: **puedo**.',
    puedemos: '«Puedemos» no existe. Con nosotros, poder no cambia: **podemos**.',
    quero: '«Quero» no existe. Con yo, la e de querer cambia a ie: **quiero**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un viaje a Cartagena', coach: 'Quiero, puedo, tengo que. I want, I can, I have to.',
      steps: [
        { title: 'Laura pide ayuda · Laura asks for help', blocks: [
          { kind: 'lead', text: 'Laura vive en Bogotá. Ella y su hermano Gabriel **quieren viajar** a Cartagena el fin de semana largo. Pero hay límites: el tiempo, el dinero, el trabajo. Laura pide ayuda a su amigo Julio, que trabaja en una agencia de viajes.', en: 'Laura lives in Bogotá. She and her brother Gabriel want to travel to Cartagena on the long weekend. But there are limits: time, money, work. Laura asks her friend Julio, who works at a travel agency, for help.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases en voz alta y tu alumno las repite. Después tu alumno dice qué frase es un deseo, qué frase es posible y qué frase es necesaria.', self: 'Lee las tres frases en voz alta. ¿Qué frase es un deseo? ¿Cuál es posible? ¿Cuál es necesaria? (A wish, a possibility, an obligation?)' } },
          { kind: 'compare', title: 'Tres frases del viaje · Three sentences from the trip', columns: [
            { tone: 'orange', label: 'QUERER · want to', sentence: 'Laura [[quiere ver|orange]] el mar.', idea: 'Un deseo: le gusta la idea.', en: 'Laura wants to see the sea.' },
            { tone: 'teal', label: 'PODER · can', sentence: 'Laura [[puede salir|teal]] el viernes.', idea: 'Es posible: tiene tiempo.', en: 'Laura can leave on Friday.' },
            { tone: 'blue', label: 'TENER QUE · have to', sentence: 'Gabriel [[tiene que trabajar|blue]] el viernes.', idea: 'Es necesario: no hay otra opción.', en: 'Gabriel has to work on Friday.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Laura quiere ver el mar» es…', options: ['una obligación de Laura.', 'un problema de dinero.', 'un deseo de Laura.'], answer: 2, why: 'Quiere + ver = un deseo (want to).', en: '“Laura quiere ver el mar” is…' },
            { prompt: '«Gabriel tiene que trabajar» significa…', options: ['Para Gabriel, trabajar es necesario.', 'Gabriel tiene un trabajo nuevo.', 'Gabriel quiere trabajar.'], answer: 0, why: 'Tiene que + trabajar = es necesario, una obligación (has to).', en: '“Gabriel tiene que trabajar” means…' },
            { prompt: '«Laura puede salir el viernes» significa…', options: ['Laura no quiere salir.', 'Es una obligación.', 'Es posible para Laura.'], answer: 2, why: 'Puede + salir = es posible: tiene tiempo (can).', en: '“Laura puede salir el viernes” means…' },
          ] },
        ] },
        { title: 'La forma · The form', mascot: '/brand/mascot/standing.webp', coach: 'Un verbo conjugado + un infinitivo. One conjugated verb + an infinitive.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'VERBO + INFINITIVO', question: '¿Qué quieres, puedes o tienes que hacer?', en: 'want to · can · have to + verb', formula: ['quiero · puedo + infinitivo', 'tengo + que + infinitivo'],
            meaning: 'Dos piezas: el primer verbo **cambia con la persona** (quiero, quieres, quiere…) y el segundo es el **infinitivo** (-ar, -er, -ir), que no cambia nunca. Con **tener** hay una pieza más: la palabra **que**.',
            examples: [
              { es: 'Laura [[quiere visitar|orange]] las islas del Rosario.', en: 'Laura wants to visit the Rosario Islands.' },
              { es: 'Gabriel no [[puede salir|teal]] antes de las dos.', en: 'Gabriel cannot leave before two.' },
              { es: 'Los dos [[tienen que reservar|blue]] el hotel esta semana.', en: 'The two of them have to book the hotel this week.' },
              { es: '[[Queremos comer|orange]] pescado en la playa.', en: 'We want to eat fish on the beach.' },
            ],
            note: 'Ya conoces las formas de querer, poder y tener (clases 014, 018 y 020). Recuerda: **quiero, puedo** cambian, pero **queremos, podemos** no.' },
          { kind: 'table', title: 'Las formas · All the people', head: ['Persona', 'querer', 'poder', 'tener que', '+ infinitivo'], rows: [
            ['yo', '**quiero**', '**puedo**', '**tengo que**', 'viajar'],
            ['tú', '**quieres**', '**puedes**', '**tienes que**', 'viajar'],
            ['él · ella · usted', '**quiere**', '**puede**', '**tiene que**', 'viajar'],
            ['nosotros · nosotras', '**queremos**', '**podemos**', '**tenemos que**', 'viajar'],
            ['vosotros · vosotras (España)', 'queréis', 'podéis', 'tenéis que', 'viajar'],
            ['ellos · ellas · ustedes', '**quieren**', '**pueden**', '**tienen que**', 'viajar'],
          ], note: 'El infinitivo es igual para todas las personas: quiero viajar, queremos viajar. «Queréis, podéis, tenéis» son de España; en América se dice «ustedes quieren, pueden, tienen que».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Gabriel ___ que trabajar el viernes.', options: ['tengo', 'tienen', 'tiene'], answer: 2, why: 'Gabriel = él: tiene que.', en: 'Gabriel has to work on Friday.' },
            { prompt: 'Laura y Gabriel ___ viajar en noviembre.', options: ['queremos', 'quiere', 'quieren'], answer: 2, why: 'Dos personas = ellos: quieren.', en: 'Laura and Gabriel want to travel in November.' },
            { prompt: 'Yo puedo ___ el hotel.', options: ['pagar', 'pagas', 'pago'], answer: 0, why: 'Después de puedo va el infinitivo: pagar.', en: 'I can pay for the hotel.' },
          ] },
        ] },
        { title: 'Tres significados · Three meanings', mascot: '/brand/mascot/studying.webp', coach: '¿Deseo, posible o necesario? Wish, possible or necessary?', blocks: [
          { kind: 'lead', text: 'La acción es la misma: **salir**. Cambia el primer verbo, y cambia el significado.', en: 'The action is the same: salir (to leave). The first verb changes, and the meaning changes.' },
          { kind: 'table', title: 'Tres pares mínimos · Three minimal pairs', head: ['Frase', 'Significado', 'English'], rows: [
            ['[[Quiero salir|orange]] temprano.', 'Es mi **deseo**: me gusta la idea.', 'I want to leave early.'],
            ['[[Puedo salir|teal]] temprano.', 'Es **posible**: tengo tiempo o permiso.', 'I can leave early.'],
            ['[[Tengo que salir|blue]] temprano.', 'Es **necesario**: no hay otra opción.', 'I have to leave early.'],
          ], note: 'Muchas veces van juntos: «**Quiero** salir, pero **tengo que** estudiar». «**Quiero** ir a las islas, pero no **puedo** pagar el barco».' },
          { kind: 'decide', title: '¿Qué verbo uso? · Which verb do I use?', steps: [
            { q: '¿Es algo que deseas, que te gusta? (Is it a wish?)', yes: 'Usa **querer**: «Quiero ver el mar».', no: 'next' },
            { q: '¿Es algo necesario, una obligación? (Is it necessary?)', yes: 'Usa **tener que**: «Tengo que trabajar».', no: 'next' },
            { q: '¿Es posible: hay tiempo, dinero o permiso? (Is it possible?)', yes: 'Usa **poder**: «Puedo pagar el hotel».', no: 'Si no es posible, usa **no poder**: «No puedo pagar el barco».' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Para pedir y preguntar · To ask', text: 'Con **poder** también pides permiso o un favor: «¿**Puedo** salir a las dos?» (permission), «¿**Puedes** reservar el hotel?» (a favour). Con **querer** invitas: «¿**Quieres** venir a la playa?».', en: 'With poder you also ask for permission or a favour: “¿Puedo salir a las dos?”, “¿Puedes reservar el hotel?”. With querer you invite: “¿Quieres venir a la playa?”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Laura tiene poco dinero: no ___ pagar un hotel caro.', options: ['quiere a', 'puede', 'tiene'], answer: 1, why: 'Poco dinero = no es posible: no puede pagar.', en: 'Laura has little money: she cannot pay for an expensive hotel.' },
            { prompt: 'Para el vuelo, Gabriel ___ llevar su documento de identidad.', options: ['quiere a', 'puede a', 'tiene que'], answer: 2, why: 'Es necesario para volar: tiene que llevar.', en: 'For the flight, Gabriel has to bring his ID card.' },
            { prompt: 'Laura habla con su jefe: «¿___ salir temprano el viernes?»', options: ['Quiero a', 'Tengo', 'Puedo'], answer: 2, why: 'Para pedir permiso: ¿puedo + infinitivo?', en: 'Laura talks to her boss: “Can I leave early on Friday?”' },
          ] },
        ] },
        { title: 'Quiero, voy a, no tengo que · Want, going to, don’t have to', mascot: '/brand/mascot/speaking.webp', coach: 'Ojo con «no». Watch out for “no”.', blocks: [
          { kind: 'compare', title: 'Deseo o plan · Wish or plan', columns: [
            { tone: 'orange', label: 'QUERER · wish', sentence: 'Laura [[quiere ir|orange]] a las islas.', idea: 'Un deseo. Quizás sí, quizás no.', en: 'Laura wants to go to the islands.' },
            { tone: 'violet', label: 'IR A · plan', sentence: 'Laura [[va a ir|violet]] a las islas el sábado.', idea: 'Un plan decidido (clase 039).', en: 'Laura is going to go to the islands on Saturday.' },
          ] },
          { kind: 'compare', title: 'Tres frases con «no» · Three sentences with “no”', columns: [
            { tone: 'orange', label: 'NO QUERER', sentence: 'No [[quiero pagar|orange]] el barco.', idea: 'No es mi deseo.', en: 'I don’t want to pay for the boat.' },
            { tone: 'teal', label: 'NO PODER', sentence: 'No [[puedo pagar|teal]] el barco.', idea: 'Es imposible: no tengo dinero.', en: 'I can’t pay for the boat.' },
            { tone: 'blue', label: 'NO TENER QUE', sentence: 'No [[tengo que pagar|blue]] el barco hoy.', idea: 'No es necesario hoy: puedo pagar mañana.', en: 'I don’t have to pay for the boat today.' },
          ] },
          { kind: 'tip', icon: '🔑', title: '«No tengo que» no es «must not»', text: '**No tengo que** = no es necesario (don’t have to). Para decir que algo es imposible o no está permitido, usa **no puedo**: «En el avión no puedo llevar mucha agua».', en: '“No tengo que” means it is not necessary. To say that something is impossible or not allowed, use “no puedo”: “I can’t take much water on the plane”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El lunes es festivo: Laura ___ trabajar.', options: ['no quiere a', 'no tiene', 'no tiene que'], answer: 2, why: 'Festivo = no es necesario trabajar: no tiene que.', en: 'Monday is a public holiday: Laura doesn’t have to work.' },
            { prompt: '«Gabriel quiere ir a la playa» significa…', options: ['Es un deseo de Gabriel.', 'Es una obligación.', 'El viaje está decidido.'], answer: 0, why: 'Quiere ir = un deseo. Un plan decidido es «va a ir».', en: '“Gabriel quiere ir a la playa” means…' },
            { prompt: 'Laura no tiene dinero para el barco. Ella dice: «No ___ ir a las islas».', options: ['tengo que', 'puedo', 'voy'], answer: 1, why: 'Sin dinero es imposible: no puedo ir. «No tengo que» = no es necesario.', en: 'Laura has no money for the boat. She says: “I can’t go to the islands”.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde está el «que»? Where is the “que”?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Qué pieza falta o sobra?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca la pieza que falta o que sobra y toca para ver la corrección. (Find the missing or extra piece, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Tengo salir temprano.', right: 'Tengo que salir temprano.', why: 'Tener + **que** + infinitivo. Sin «que», «tengo» es «I have». (Without “que” there is no obligation.)' },
            { wrong: 'Quiero a viajar a Cartagena.', right: 'Quiero viajar a Cartagena.', why: 'Querer y poder van **directo** al infinitivo. La «a» es de ir a: «voy a viajar». (No “a” after querer or poder.)' },
            { wrong: 'Gabriel puede trabaja el sábado.', right: 'Gabriel puede trabajar el sábado.', why: 'El segundo verbo es el **infinitivo**: trabajar. (Only the first verb is conjugated.)' },
            { wrong: 'Nosotros puedemos pagar el hotel.', right: 'Nosotros podemos pagar el hotel.', why: 'Con nosotros, poder **no cambia**: podemos. (No o → ue with nosotros.)' },
            { wrong: 'Laura y Gabriel tiene que reservar.', right: 'Laura y Gabriel tienen que reservar.', why: 'Dos personas = ellos: **tienen** que. (Tener agrees with the person.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Tenemos que compramos agua.', 'Tenemos comprar agua.', 'Tenemos que comprar agua.'], answer: 2, why: 'Tener + que + infinitivo: tenemos que comprar.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['¿Quieres que comer pescado?', '¿Quieres a comer pescado?', '¿Quieres comer pescado?'], answer: 2, why: 'Querer + infinitivo, sin «a» y sin «que».', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Yo puede ir el sábado.', 'Yo podo ir el sábado.', 'Yo puedo ir el sábado.'], answer: 2, why: 'Yo → puedo (o → ue).', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales sobre este fin de semana: una con «quiero», una con «puedo» o «no puedo» y una con «tengo que».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la agencia de viajes', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Laura y Julio · Laura and Julio', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Julio y tu alumno es Laura. Después, tu alumno toca cada expresión marcada y dice si es un deseo, algo posible, algo necesario o un plan.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿deseo, posible, necesario o plan? (Tap each marked expression.)' } },
          { kind: 'explore', title: 'Un fin de semana largo', setting: 'Martes, seis de la tarde, en la agencia de viajes de Julio, en Bogotá. Laura quiere organizar el viaje a Cartagena. (Tuesday, 6 p.m., at Julio’s travel agency in Bogotá. Laura wants to plan the trip.)', lines: [
            { who: 'Laura', text: 'Julio, necesito ayuda. Gabriel y yo [[queremos viajar|orange]] a Cartagena el fin de semana largo.', en: 'Julio, I need help. Gabriel and I want to travel to Cartagena on the long weekend.' },
            { who: 'Julio', text: '¡Qué bien! ¿Cuándo [[pueden salir|teal]]?', en: 'Great! When can you leave?' },
            { who: 'Laura', text: 'Yo [[puedo salir|teal]] el viernes por la mañana, pero Gabriel [[tiene que trabajar|blue]] hasta las dos.', en: 'I can leave on Friday morning, but Gabriel has to work until two.' },
            { who: 'Julio', text: 'Entonces [[tienen que tomar|blue]] el vuelo de las seis de la tarde. ¿Y cuánto dinero [[pueden gastar|teal]]?', en: 'Then you have to take the six p.m. flight. And how much money can you spend?' },
            { who: 'Laura', text: 'No mucho. Solo [[podemos pagar|teal]] un hotel pequeño. ¡Pero yo [[quiero ver|orange]] las islas del Rosario!', en: 'Not much. We can only pay for a small hotel. But I want to see the Rosario Islands!' },
            { who: 'Julio', text: 'Mmm… El barco a las islas es caro. Y para el barco, [[tienen que reservar|blue]] esta semana.', en: 'Hmm… The boat to the islands is expensive. And for the boat, you have to book this week.' },
            { who: 'Laura', text: '¿Esta semana? Hoy no [[puedo decidir|teal]]: [[tengo que hablar|blue]] con Gabriel.', en: 'This week? I can’t decide today: I have to talk to Gabriel.' },
            { who: 'Julio', text: 'Claro. Una buena noticia: el domingo [[no tienen que volver|blue]]. El lunes es festivo.', en: 'Of course. Some good news: you don’t have to come back on Sunday. Monday is a public holiday.' },
            { who: 'Laura', text: '¡Perfecto! Entonces el domingo [[podemos ir|teal]] a la playa todo el día.', en: 'Perfect! Then on Sunday we can go to the beach all day.' },
            { who: 'Julio', text: 'Sí. Y el lunes por la mañana [[van a volver|violet]] a Bogotá en el vuelo de las once.', en: 'Yes. And on Monday morning you are going to fly back to Bogotá on the eleven o’clock flight.' },
            { who: 'Laura', text: 'Gracias, Julio. Esta noche hablo con Gabriel. ¡Yo [[quiero ir|orange]] a las islas!', en: 'Thanks, Julio. I’ll talk to Gabriel tonight. I want to go to the islands!' },
          ], notes: {
            'queremos viajar': 'Nosotros → **queremos** + viajar. El deseo de los dos hermanos. Con nosotros, querer no cambia.',
            'pueden salir': 'Julio pregunta con ustedes: ¿cuándo **pueden** salir? ¿Cuándo es posible?',
            'puedo salir': 'Yo → **puedo** salir. Laura tiene tiempo: es posible.',
            'tiene que trabajar': 'Gabriel = él → **tiene que** trabajar. Es una obligación: no es su deseo.',
            'tienen que tomar': 'Ustedes → **tienen que** tomar. Por el trabajo de Gabriel, no hay otra opción.',
            'pueden gastar': 'La pregunta del límite: ¿cuánto dinero **pueden** gastar? (How much can you spend?)',
            'podemos pagar': 'Nosotros → **podemos** pagar (sin cambio o → ue). El límite: solo un hotel pequeño.',
            'quiero ver': 'Yo → **quiero** ver. El gran deseo de Laura: las islas.',
            'tienen que reservar': 'Es necesario reservar pronto: **tienen que** reservar esta semana.',
            'puedo decidir': '**No puedo** decidir: hoy no es posible para Laura.',
            'tengo que hablar': 'Yo → **tengo que** hablar. Primero, una obligación: hablar con Gabriel.',
            'no tienen que volver': '**No tienen que** = no es necesario. ¡No es «no pueden»! El lunes es festivo.',
            'podemos ir': 'Ahora es posible: **podemos** ir a la playa todo el domingo.',
            'van a volver': 'Ir a + infinitivo (clase 039): un **plan** decidido, no un deseo.',
            'quiero ir': 'Al final, el deseo otra vez: **quiero** ir. Pero no sabemos si es posible.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no pueden tomar un vuelo el viernes por la mañana?', options: ['Porque el vuelo es caro.', 'Porque Gabriel tiene que trabajar hasta las dos.', 'Porque Laura no quiere salir temprano.'], answer: 1, why: '«Gabriel tiene que trabajar hasta las dos».', en: 'Why can’t they take a flight on Friday morning?' },
            { prompt: '¿Por qué Laura no decide hoy lo de las islas?', options: ['Porque no quiere ir.', 'Porque el barco no sale el sábado.', 'Porque tiene que hablar con Gabriel.'], answer: 2, why: '«Hoy no puedo decidir: tengo que hablar con Gabriel».', en: 'Why doesn’t Laura decide about the islands today?' },
            { prompt: '¿Tienen que volver el domingo?', options: ['No: el lunes es festivo.', 'Sí, por el trabajo de Gabriel.', 'Sí, a las once.'], answer: 0, why: '«El domingo no tienen que volver. El lunes es festivo».', en: 'Do they have to come back on Sunday?' },
          ] },
        ] },
        { title: 'Deseos, límites y obligaciones · Wishes, limits and obligations', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Deseo, posible o necesario?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase sobre el viaje y decide: ¿un deseo, algo posible o algo necesario? Tú lees la frase otra vez con buena entonación.', self: 'Lee cada frase sobre el viaje. ¿Es un deseo, algo posible o algo necesario? (A wish, a possibility or an obligation?)' } },
          { kind: 'classify', title: '¿Qué dice la frase? · What does the sentence say?', categories: [
            { id: 'deseo', label: 'DESEO · querer', tone: 'orange' },
            { id: 'posible', label: 'POSIBLE · poder', tone: 'teal' },
            { id: 'necesario', label: 'NECESARIO · tener que', tone: 'blue' },
          ], items: [
            { text: 'Laura quiere ver las islas del Rosario.', answer: 'deseo', why: 'Quiere ver: un deseo de Laura.' },
            { text: 'Gabriel tiene que trabajar hasta las dos.', answer: 'necesario', why: 'Tiene que trabajar: una obligación.' },
            { text: 'Laura puede salir el viernes por la mañana.', answer: 'posible', why: 'Puede salir: es posible, tiene tiempo.' },
            { text: 'Tienen que reservar el barco esta semana.', answer: 'necesario', why: 'Tienen que reservar: es necesario.' },
            { text: 'Solo pueden pagar un hotel pequeño.', answer: 'posible', why: 'Pueden pagar: el límite de lo posible.' },
            { text: 'Los dos quieren comer pescado en la playa.', answer: 'deseo', why: 'Quieren comer: un deseo.' },
            { text: 'El domingo pueden ir a la playa todo el día.', answer: 'posible', why: 'Pueden ir: es posible porque el lunes es festivo.' },
            { text: 'Laura tiene que hablar con Gabriel.', answer: 'necesario', why: 'Tiene que hablar: antes de decidir, es necesario.' },
          ] },
          { kind: 'teacher', text: 'Al final, tu alumno cambia dos frases a la negativa y explica la diferencia: «No puede salir» (imposible) / «No tiene que salir» (no es necesario).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Quiero, puedo, tengo que + infinitivo.',
      steps: [
        { title: 'La forma correcta · The right form', blocks: [
          { kind: 'choice', items: [
            { context: 'Gabriel habla con su jefa, la señora Ríos. (He asks for permission.)', prompt: 'Señora Ríos, ¿___ salir a las dos el viernes?', options: ['Puedo', 'Podo', 'Puede'], answer: 0, why: 'Gabriel pide permiso para él: yo → puedo.', en: 'Mrs Ríos, can I leave at two on Friday?' },
            { context: 'La jefa responde con usted. (Formal answer.)', prompt: 'Sí, usted ___ salir a las dos.', options: ['puede', 'pueden', 'puedes'], answer: 0, why: 'Usted usa la forma de él / ella: puede.', en: 'Yes, you can leave at two.' },
            { context: 'Laura pregunta a Gabriel. (Laura asks Gabriel.)', prompt: '¿Tú ___ ir a las islas el sábado?', options: ['quieren', 'quieres', 'quiero'], answer: 1, why: 'Laura habla con Gabriel: tú → quieres.', en: 'Do you want to go to the islands on Saturday?' },
            { context: 'Julio habla de los dos hermanos. (Julio talks about them.)', prompt: 'Laura y Gabriel ___ que reservar el hotel hoy.', options: ['tiene', 'tienen', 'tenemos'], answer: 1, why: 'Dos personas = ellos: tienen que.', en: 'Laura and Gabriel have to book the hotel today.' },
            { context: 'Laura habla de ella y de Gabriel. (Laura: we.)', prompt: 'Nosotros no ___ gastar mucho dinero.', options: ['pueden', 'podemos', 'puedemos'], answer: 1, why: 'Nosotros → podemos (sin cambio o → ue).', en: 'We cannot spend much money.' },
          ] },
        ] },
        { title: '¿Deseo, posible o necesario? · Wish, possible or necessary?', mascot: '/autoestudio/mascot/noting.webp', coach: 'Lee el contexto. Read the context.', blocks: [
          { kind: 'classify', title: 'La maleta y el viaje · The suitcase and the trip', categories: [
            { id: 'deseo', label: 'DESEO · querer', tone: 'orange' },
            { id: 'posible', label: 'POSIBLE · poder', tone: 'teal' },
            { id: 'necesario', label: 'NECESARIO · tener que', tone: 'blue' },
          ], items: [
            { text: 'Gabriel quiere comprar un sombrero en Cartagena.', answer: 'deseo', why: 'Quiere comprar: un deseo.' },
            { text: 'En el aeropuerto tienen que mostrar el documento de identidad.', answer: 'necesario', why: 'Tienen que mostrar: una obligación del aeropuerto.' },
            { text: 'Con el hotel barato, pueden pagar el barco.', answer: 'posible', why: 'Pueden pagar: ahora es posible.' },
            { text: 'Gabriel no quiere salir muy temprano.', answer: 'deseo', why: 'No quiere salir: no es su deseo.' },
            { text: 'Laura tiene que cerrar la maleta esta noche.', answer: 'necesario', why: 'Tiene que cerrar: es necesario hoy.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/kneeling.webp', coach: '¿Que, a o nada? “Que”, “a” or nothing?', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Gabriel tiene trabajar hasta las dos.', ok: false, options: ['Gabriel tiene que trabaja hasta las dos.', 'Gabriel tiene a trabajar hasta las dos.', 'Gabriel tiene que trabajar hasta las dos.'], answer: 2, why: 'Falta **que**: tiene + que + trabajar (infinitivo).' },
            { sentence: '¿Puedes reservar el hotel esta noche?', ok: true, why: 'Correcta: tú → puedes + reservar. Pides un favor con poder.' },
            { sentence: 'Laura quiere a nadar en el mar.', ok: false, options: ['Laura quiere que nadar en el mar.', 'Laura quiere nada en el mar.', 'Laura quiere nadar en el mar.'], answer: 2, why: 'Querer va directo al infinitivo: sin «a» y sin «que».' },
            { sentence: 'Nosotros podemos pagamos el hotel en Cartagena.', ok: false, options: ['Nosotros puedemos pagar el hotel en Cartagena.', 'Nosotros podemos a pagar el hotel en Cartagena.', 'Nosotros podemos pagar el hotel en Cartagena.'], answer: 2, why: 'Solo el primer verbo cambia: podemos + pagar (infinitivo).' },
            { sentence: 'El lunes es festivo: no tenemos que volver el domingo.', ok: true, why: 'Correcta: no tenemos que = no es necesario.' },
          ] },
        ] },
        { title: 'Completa los mensajes · Complete the messages', mascot: '/brand/mascot/speaking.webp', coach: 'Martes, nueve de la noche.', blocks: [
          { kind: 'chat-fill', title: 'Laura y Gabriel deciden · Laura and Gabriel decide', lines: [
            { who: 'Laura', text: 'Gabriel, el barco a las islas es caro. ¿___ ir?', options: ['Quieres a', 'Quieres', 'Tienes'], answer: 1, why: 'Laura pregunta por el deseo de Gabriel: ¿quieres + infinitivo? Sin «a».' },
            { who: 'Gabriel', text: 'Sí, pero no ___ gastar mucho. Este mes tengo poco dinero.', options: ['tengo', 'podo', 'puedo'], answer: 2, why: 'Poco dinero = un límite: no puedo gastar. «Tengo» sin «que» no funciona aquí.' },
            { who: 'Laura', text: 'Entonces yo ___ ir sola el sábado y tú vas a la playa.', options: ['tengo', 'puede', 'puedo'], answer: 2, why: 'Una solución posible para Laura: yo → puedo ir.' },
            { who: 'Gabriel', text: 'Buena idea. ¿Y el vuelo? ___ reservar esta semana.', options: ['Tenemos a', 'Tenemos', 'Tenemos que'], answer: 2, why: 'Es necesario: tenemos + que + reservar.' },
            { who: 'Laura', text: 'Sí, pero yo no ___ reservar hoy: mi tarjeta está en la oficina.', options: ['tengo que', 'quiero que', 'puedo'], answer: 2, why: 'Sin tarjeta es imposible: no puedo. «No tengo que» significa «no es necesario».' },
            { who: 'Gabriel', text: 'No hay problema. Yo reservo esta noche.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/portrait.webp', coach: 'Primero el verbo conjugado. Conjugated verb first.', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Gabriel', 'que', 'tiene', 'trabajar', 'viernes', 'el'], accept: ['Gabriel tiene que trabajar el viernes', 'El viernes Gabriel tiene que trabajar'], en: 'Gabriel has to work on Friday.' },
            { tiles: ['ver', 'Quiero', 'islas', 'las'], accept: ['Quiero ver las islas'], en: 'I want to see the islands.' },
            { tiles: ['¿Puedes', 'el', 'reservar', 'hotel?'], accept: ['¿Puedes reservar el hotel?'], en: 'Can you book the hotel?' },
            { tiles: ['podemos', 'No', 'pagar', 'un', 'hotel', 'caro'], accept: ['No podemos pagar un hotel caro'], en: 'We can’t pay for an expensive hotel.' },
          ] },
        ] },
        { title: 'Escribe la frase · Write the sentence', mascot: '/autoestudio/mascot/writing.webp', coach: 'Deseo, límite, obligación.', blocks: [
          { kind: 'rewrite', title: 'Con querer, poder o tener que · With querer, poder or tener que', items: [
            { prompt: 'Es necesario: Laura reserva el barco antes del miércoles.', instruction: 'Escribe la obligación con tener que. Empieza con «Laura».', accept: ['Laura tiene que reservar el barco antes del miércoles'] },
            { prompt: 'Es mi deseo: comer pescado en la playa.', instruction: 'Escribe el deseo con querer (yo).', accept: ['Quiero comer pescado en la playa', 'Yo quiero comer pescado en la playa'] },
            { prompt: 'Es imposible: Gabriel no sale el viernes por la mañana.', instruction: 'Escribe el límite con poder. Empieza con «Gabriel».', accept: ['Gabriel no puede salir el viernes por la mañana'] },
            { prompt: 'We can pay at the hotel.', instruction: 'Escribe la frase en español. (to pay = pagar)', accept: ['Podemos pagar en el hotel', 'Nosotros podemos pagar en el hotel'] },
          ] },
          { kind: 'teacher', text: 'Después de cada frase, tu alumno dice la versión negativa y explica qué significa: «No tiene que reservar» (no es necesario), «No puede reservar» (es imposible).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Julio', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Julio tiene noticias · Julio has news', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué llama Julio?). Segunda escucha: tu alumno levanta la mano cada vez que oye «quiere», «puede» o «tiene que» en cualquier persona. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes querer, poder o tener que. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Julio', channel: 'MENSAJE DE VOZ · DE JULIO, DE LA AGENCIA', src: '/audio/grammar-live/340.mp3',
            before: 'Julio, de la agencia, manda un mensaje de voz a Laura. ¿Qué información crees que tiene: el hotel, el barco, el vuelo? (Julio sends Laura a voice message. What information do you think he has?)',
            gist: { prompt: '¿Para qué manda Julio el mensaje? · Why does Julio send the message?', options: ['Para dar información y organizar el viaje.', 'Para cancelar el viaje.', 'Para invitar a Laura a cenar.'], answer: 0, why: '«Tengo buenas noticias para el viaje»: hotel, barco, vuelo y una pregunta.', en: 'Why does Julio send the message?' },
            details: [
              { prompt: '¿Cuándo pueden pagar el hotel?', options: ['Hoy, en la agencia.', 'En Cartagena.', 'El lunes, en Bogotá.'], answer: 1, why: '«Pueden pagar el hotel en Cartagena, no hoy».', en: 'When can they pay for the hotel?' },
              { prompt: '¿Hasta cuándo tienen que reservar el barco?', options: ['Hasta el viernes.', 'Hasta el miércoles.', 'Hasta esta noche.'], answer: 1, why: '«Tienen que reservar antes del miércoles».', en: 'By when do they have to book the boat?' },
              { prompt: '¿A qué hora tienen que estar en el aeropuerto?', options: ['A las dos.', 'A las cuatro.', 'A las seis.'], answer: 1, why: '«Tienen que estar en el aeropuerto a las cuatro, porque el vuelo sale a las seis».', en: 'What time do they have to be at the airport?' },
              { prompt: '¿Qué tiene que llevar Laura?', options: ['Agua y protector solar.', 'Dinero para el barco.', 'Un sombrero y una maleta grande.'], answer: 0, why: '«En Cartagena hace mucho calor: tienes que llevar agua y protector solar».', en: 'What does Laura have to bring?' },
            ],
            transcript: 'Hola, Laura. Soy Julio, de la agencia. Tengo buenas noticias para el viaje. Hay un hotel pequeño y barato cerca de la playa, y [[pueden pagar|teal]] el hotel en Cartagena, no hoy. Para el barco a las islas, [[tienen que reservar|blue]] antes del miércoles. ¿Gabriel no [[quiere ir|orange]]? No hay problema: tú [[puedes ir|teal]] sola el sábado. Ah, una cosa importante: el viernes [[tienen que estar|blue]] en el aeropuerto a las cuatro, porque el vuelo sale a las seis. Y en Cartagena hace mucho calor: [[tienes que llevar|blue]] agua y protector solar. ¿[[Quieres reservar|orange]] el hotel hoy? Espero tu mensaje esta tarde. ¡Chao!',
            reply: { teacher: 'Tú eres Julio. Tu alumno responde al mensaje como Laura: qué quiere reservar, qué puede pagar y qué tiene que hacer Gabriel, con querer, poder y tener que.', self: 'Responde a Julio en voz alta como Laura: «Hola, Julio. Quiero reservar… Podemos pagar… Gabriel tiene que…». (Answer Julio aloud with a wish, a possibility and an obligation.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu viaje', coach: 'Deseos y límites. Wishes and limits.',
      steps: [
        { title: 'Organiza tu viaje · Plan your trip', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la pregunta y tu alumno responde con frases completas: quiero, puedo, tengo que + infinitivo. Tú repites su frase bien dicha y haces la repregunta.', self: 'Lee la pregunta, responde en voz alta con frases completas y, si quieres, escribe tu respuesta. (Answer aloud with full sentences.)' } },
          { kind: 'talk', cards: [
            { q: '¿Adónde quieres viajar? ¿Qué quieres hacer allí? · Where do you want to travel? What do you want to do there?', followUps: ['¿Con quién quieres ir? (Who do you want to go with?)', '¿Qué quieres comer allí? (What do you want to eat there?)'], phrases: ['[[Quiero viajar|orange]] a …', '[[Quiero ver|orange]] / [[visitar|orange]] …', 'Mi amiga y yo [[queremos ir|orange]] a …'], hint: 'Quiero + infinitivo: viajar, ver, visitar, comer, conocer.', example: 'Quiero viajar a Cartagena con mi hermana. Quiero ver el mar y queremos comer pescado en la playa.', next: 'Ahora, el tiempo.' },
            { q: '¿Cuándo puedes viajar? ¿Qué tienes que hacer antes? · When can you travel? What do you have to do before?', followUps: ['¿Tienes que trabajar el viernes? (Do you have to work on Friday?)', '¿Puedes salir temprano? (Can you leave early?)'], phrases: ['[[Puedo salir|teal]] el …', '[[Tengo que trabajar|blue]] hasta las …', 'No [[puedo viajar|teal]] en …'], hint: 'Lo posible con puedo; lo necesario con tengo que.', example: 'Puedo viajar en diciembre, pero tengo que trabajar hasta el día veinte. El viernes puedo salir a las tres.', next: 'Ahora, el dinero.' },
            { q: 'Tienes poco dinero. ¿Qué puedes pagar y qué no? · You have little money. What can you pay for and what not?', followUps: ['¿Qué hotel puedes pagar? (Which hotel can you pay for?)', '¿Qué no quieres pagar? (What don’t you want to pay for?)'], phrases: ['Solo [[puedo pagar|teal]] …', 'No [[puedo gastar|teal]] mucho.', 'No [[quiero pagar|orange]] …'], hint: 'No puedo = es imposible. No quiero = no es mi deseo.', example: 'Solo puedo pagar un hotel pequeño. No puedo gastar mucho en restaurantes, pero quiero comer pescado una noche.', next: 'Ahora, una negociación.' },
            { q: 'Tu amigo quiere ir a un hotel caro. Negocia. · Your friend wants an expensive hotel. Negotiate.', followUps: ['¿Qué propones? (What do you suggest?)', '¿Qué pueden hacer con el dinero? (What can you do with the money?)'], phrases: ['Yo también [[quiero|orange]] …, pero no [[podemos pagar|teal]] …', '¿[[Podemos buscar|teal]] un hotel más barato?', 'Así [[podemos ir|teal]] a …'], hint: 'Primero el deseo, después el límite con pero, y una propuesta con ¿podemos…?', example: 'Yo también quiero un hotel bonito, pero no podemos pagar ese hotel. ¿Podemos buscar un hotel más barato? Así podemos ir a las islas.', teacher: 'Tú eres el amigo: no aceptas la primera propuesta. «Pero yo quiero una piscina…».', next: 'Ahora, antes del viaje.' },
            { q: 'Es el día antes del viaje. ¿Qué tienes que hacer? · It is the day before the trip. What do you have to do?', followUps: ['¿Qué tienes que llevar? (What do you have to bring?)', '¿A qué hora tienes que estar en el aeropuerto? (What time do you have to be at the airport?)', '¿Qué no tienes que hacer? (What don’t you have to do?)'], phrases: ['[[Tengo que comprar|blue]] …', '[[Tengo que llevar|blue]] …', 'No [[tengo que pagar|blue]] el hotel hoy.'], hint: 'Tres obligaciones con tengo que, y una cosa que no es necesaria con no tengo que.', example: 'Tengo que comprar protector solar y tengo que cerrar la maleta. Tengo que estar en el aeropuerto a las cuatro. No tengo que pagar el hotel hoy.', next: 'Para terminar, cambia de papel.' },
            { q: 'Ahora tú trabajas en la agencia. Explica a un cliente qué puede hacer y qué tiene que hacer. · Now you work at the agency. Tell a client what they can do and what they have to do.', followUps: ['¿Puede pagar en el hotel? (Can he pay at the hotel?)', '¿Qué tiene que reservar pronto? (What does he have to book soon?)'], phrases: ['Usted [[puede|teal]] …', 'Usted [[tiene que|blue]] …', '¿[[Quiere reservar|orange]] …?'], hint: 'Con un cliente, usted: puede, tiene que, ¿quiere…?', example: 'Usted puede pagar el hotel en Cartagena. Pero tiene que reservar el barco esta semana. ¿Quiere reservar hoy?', teacher: 'Tú eres el cliente y haces preguntas: «¿Puedo llevar dos maletas?».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué quieres hacer…?», «¿Qué tienes que…?») y tú respondes con tu viaje.', self: 'Ahora haz tú las preguntas en voz alta («¿Adónde quieres viajar?», «¿Qué tienes que hacer?») y responde como Gabriel. (Now ask the questions and answer as Gabriel.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para Gabriel', coach: 'Deseo, límite, obligación y una pregunta.',
      steps: [
        { title: 'El plan del viaje · The trip plan', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos el «que» de tener que y el infinitivo después del primer verbo. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien: tener **que** + infinitivo, y querer / poder sin «a». (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje para Gabriel · A message for Gabriel', situation: 'Eres Laura (o eres tú, con tu viaje). Escribe un mensaje a Gabriel con las noticias de Julio: qué quieres hacer, qué pueden pagar y qué tienen que hacer antes del viaje. (You are Laura, or yourself. Write Gabriel a message about the trip: wishes, limits and obligations.)', task: [
            'Di qué quieres hacer en el viaje con **querer**. (A wish.)',
            'Di un límite con **poder** o **no poder**: dinero, tiempo. (A limit.)',
            'Di dos cosas necesarias con **tener que**. (Two obligations.)',
            'Haz una pregunta con «¿Puedes…?» o «¿Quieres…?». (Ask a question.)',
          ], starters: ['Hola, Gabriel:', 'Yo quiero …', 'No podemos …, pero …', 'Tú tienes que …', 'Tenemos que …', '¿Puedes …?', 'Un abrazo.'],
            words: ['quiero', 'quieres', 'puedo', 'podemos', 'tengo que', 'tienes que', 'tenemos que', 'reservar', 'pagar', 'salir', 'volver', 'el barco', 'el vuelo', 'el hotel'],
            model: 'Hola, Gabriel: Julio tiene buenas noticias. Yo [[quiero ver|orange]] las islas del Rosario, pero el barco es caro. ¿Tú no [[quieres ir|orange]]? No hay problema: yo [[puedo ir|teal]] sola el sábado. Tú [[tienes que trabajar|blue]] el viernes hasta las dos, entonces [[tenemos que tomar|blue]] el vuelo de las seis. No [[podemos pagar|teal]] un hotel grande, pero hay un hotel pequeño cerca de la playa. El domingo no [[tenemos que volver|blue]]: el lunes es festivo. ¿[[Puedes reservar|teal]] el vuelo esta noche? Un abrazo, Laura.',
            minWords: 35,
            checks: [
              { label: 'Querer + infinitivo (a wish)', pattern: '(?<!\\p{L})(?:quiero|quieres|quiere|queremos|quieren)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Di un deseo: «Quiero ver las islas».' },
              { label: 'Poder + infinitivo (a possibility or a limit)', pattern: '(?<!\\p{L})(?:puedo|puedes|puede|podemos|pueden)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Di qué es posible o imposible: «No podemos pagar un hotel grande».' },
              { label: 'Tener que + infinitivo (an obligation)', pattern: '(?<!\\p{L})(?:tengo|tienes|tiene|tenemos|tienen)\\s+que\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Di qué es necesario: «Tenemos que reservar el vuelo».' },
              { label: 'Una pregunta con ¿puedes…? o ¿quieres…? (a question)', pattern: '¿[^?]*(?<!\\p{L})(?:puedes|quieres)(?!\\p{L})', tip: 'Pregunta a Gabriel: «¿Puedes reservar el vuelo?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:tengo|tienes|tiene|tenemos|tienen)\\s+(?:trabajar|salir|estudiar|reservar|pagar|comprar|llevar|volver|hablar|ir|viajar|hacer|llegar|estar|tomar)(?!\\p{L})', why: 'Falta **que**: «tengo **que** salir», «tenemos **que** reservar».' },
              { pattern: '(?<!\\p{L})(?:quiero|quieres|quiere|queremos|quieren|puedo|puedes|puede|podemos|pueden)\\s+(?:a|que)\\s+(?:trabajar|salir|reservar|pagar|comprar|llevar|volver|hablar|ir|viajar|ver|visitar|comer|nadar|tomar)(?!\\p{L})', why: 'Querer y poder van directo al infinitivo: «quiero viajar», «puedo pagar», sin «a» ni «que».' },
              { pattern: '(?<!\\p{L})(?:quero|podo|puedemos|quieremos)(?!\\p{L})', why: 'Revisa la forma: quiero, puedo, pero queremos, podemos.' },
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
            { tone: 'orange', label: 'QUERER', formula: 'quiero · quieres · quiere… + infinitivo', example: 'Quiero ver las islas.', caption: 'un deseo', en: 'want to' },
            { tone: 'teal', label: 'PODER', formula: 'puedo · puedes · puede… + infinitivo', example: 'No podemos pagar un hotel caro.', caption: 'posible / imposible, permiso', en: 'can / can’t' },
            { tone: 'blue', label: 'TENER QUE', formula: 'tengo · tienes · tiene… + que + infinitivo', example: 'Gabriel tiene que trabajar el viernes.', caption: 'necesario · no tener que = no es necesario', en: 'have to · don’t have to' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Primer verbo conjugado + **infinitivo**. Querer y poder van directo al infinitivo; tener necesita **que**. «Quiero salir, pero tengo que estudiar». Y ojo: **no puedo** = imposible; **no tengo que** = no es necesario.', en: 'Conjugated verb + infinitive. Querer and poder go straight to the infinitive; tener needs “que”. And careful: “no puedo” = impossible; “no tengo que” = not necessary.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El viernes Gabriel ___ trabajar hasta las dos.', options: ['tiene que', 'tiene', 'quiere a'], answer: 0, why: 'Una obligación: tiene + que + infinitivo.', en: 'On Friday Gabriel has to work until two.' },
            { prompt: 'A Laura le gusta mucho el mar: ___ ver las islas.', options: ['quiere', 'tiene que', 'puede a'], answer: 0, why: 'Le gusta = un deseo: quiere ver.', en: 'Laura really likes the sea: she wants to see the islands.' },
            { prompt: 'No tengo dinero: no ___ pagar el barco.', options: ['puedo', 'tengo que', 'podo'], answer: 0, why: 'Sin dinero es imposible: no puedo. «No tengo que» = no es necesario.', en: 'I have no money: I can’t pay for the boat.' },
            { prompt: '¿Ustedes ___ viajar el lunes?', options: ['podemos', 'pueden', 'puede'], answer: 1, why: 'Ustedes → pueden.', en: 'Can you all travel on Monday?' },
            { prompt: 'Mañana es festivo: no ___ ir a la oficina. ¡Qué bien!', options: ['tengo', 'quiero a', 'tengo que'], answer: 2, why: 'Festivo = no es necesario: no tengo que ir.', en: 'Tomorrow is a holiday: I don’t have to go to the office. Great!' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Otro viaje, otras personas.', blocks: [
          { kind: 'lead', text: 'Sara, una compañera de Laura, también quiere viajar: a Medellín, con su madre. Escribe una frase para cada idea.', en: 'Sara, a colleague of Laura’s, also wants to travel: to Medellín, with her mother. Write one sentence for each idea.' },
          { kind: 'rewrite', title: 'El viaje de Sara · Sara’s trip', items: [
            { prompt: 'Sara → deseo: viajar a Medellín en diciembre', instruction: 'Escribe con querer. Empieza con «Sara».', accept: ['Sara quiere viajar a Medellín en diciembre'] },
            { prompt: 'Su madre → imposible: caminar mucho', instruction: 'Escribe el límite con poder. Empieza con «Su madre».', accept: ['Su madre no puede caminar mucho'] },
            { prompt: 'Ellas → necesario: reservar un hotel en el centro', instruction: 'Escribe la obligación con tener que. Empieza con «Ellas».', accept: ['Ellas tienen que reservar un hotel en el centro'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 041 · Estar + gerundio: acción en desarrollo', text: 'Ya dices qué quieres, qué puedes y qué tienes que hacer con un verbo + infinitivo. En la clase 041 conoces otra combinación de dos verbos: **estar + gerundio**, para decir qué estás haciendo ahora mismo. «Ahora estoy reservando el hotel».', en: 'You can now say what you want, can and have to do with a verb + infinitive. In class 041 you meet another two-verb combination: estar + gerund, to say what you are doing right now. “I am booking the hotel right now”.', href: '/gramatica/estar-gerundio', label: 'Ir a la clase 041' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué quieres hacer este fin de semana? ¿Qué puedes hacer y qué tienes que hacer?». Respuesta esperada: una frase con quiero, una con puedo o no puedo y una con tengo que. Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
