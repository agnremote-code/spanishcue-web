import type { LiveLesson } from '../types';

/**
 * Lesson 217 · B1 · Ni… ni, sin embargo, aunque.
 * A small team chooses a place for a working meeting; Julia and her colleague Martín run through the class.
 */
export const lesson: LiveLesson = {
  id: 217,
  level: 'B1',
  title: 'Ni… ni, sin embargo y aunque',
  subtitle: 'Matizar una opinión: descartar dos problemas, reconocer una ventaja y presentar un contrapeso.',
  legend: [
    { tone: 'blue', label: 'Ni… ni · dos elementos negados' },
    { tone: 'teal', label: 'Sin embargo · un contrapeso entre dos ideas completas' },
    { tone: 'orange', label: 'Aunque · un matiz breve' },
  ],
  optionNotes: {
    'sin embargo': '«Sin embargo» une dos afirmaciones completas y marca un cambio de dirección; va con puntuación: «. Sin embargo,».',
    'Sin embargo,': '«Sin embargo» une dos afirmaciones completas y marca un cambio de dirección; va con puntuación: «. Sin embargo,».',
    'Sin embargo': '«Sin embargo» une dos afirmaciones completas y marca un cambio de dirección; va con puntuación: «. Sin embargo,».',
    aunque: '«Aunque» añade un matiz breve dentro de la misma frase: «útil, aunque cara».',
    Aunque: '«Aunque» añade un matiz breve dentro de la misma frase: «útil, aunque cara».',
    ni: '«Ni» niega elementos: «ni el lunes ni el martes».',
    Ni: '«Ni» niega elementos: «ni el lunes ni el martes».',
    y: '«Y» suma en la misma dirección; aquí la segunda idea va en contra de la primera.',
    Y: '«Y» suma en la misma dirección; aquí la segunda idea va en contra de la primera.',
    o: '«O» presenta alternativas; aquí se niegan las dos opciones.',
    'No ni': 'Si el grupo con «ni… ni» va delante del verbo, no se añade «no».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Opinar con matices', coach: 'Una opinión madura tiene matices.',
      steps: [
        { title: 'Ni… ni: negar dos elementos', blocks: [
          { kind: 'lead', text: 'El equipo de Julia necesita un lugar para una reunión de trabajo. Hay dos opciones: una sala grande cerca de la estación y una biblioteca pequeña. Para defender su propuesta, Julia descarta problemas, reconoce ventajas y añade contrapesos.' },
          { kind: 'guide', text: { teacher: 'Lee los ejemplos y tu alumno señala dónde está el verbo. Pregunta: «¿Hay "no" delante del verbo? ¿Por qué?».', self: 'Lee los ejemplos y fíjate en la posición del verbo: ¿aparece «no» o no aparece?' } },
          { kind: 'concept', tone: 'blue', label: 'NI… NI', question: '¿Descartas dos cosas a la vez?', formula: ['ni + A + ni + B + verbo', 'no + verbo + ni + A + ni + B'],
            meaning: '«Ni… ni» niega **dos elementos** del mismo tipo (dos personas, dos días, dos problemas). Si el grupo va **antes del verbo**, no se añade «no». Si va **después del verbo**, ponemos «no» delante del verbo. Las dos negaciones no se anulan: se refuerzan.',
            examples: [
              { es: '[[Ni el precio ni la distancia|blue]] son un problema.' },
              { es: 'La biblioteca no tiene [[ni proyector ni servicio de café|blue]].' },
              { es: 'No podemos reunirnos [[ni el lunes ni el martes|blue]].' },
              { es: '[[Ni Ana ni Luis|blue]] vienen hoy.' },
            ],
            note: 'Con dos sujetos singulares delante, el verbo suele ir en plural: «Ni el precio ni la distancia **son**…».' },
          { kind: 'compare', title: 'La posición decide', columns: [
            { tone: 'blue', label: 'ANTES DEL VERBO', sentence: '[[Ni el lunes ni el martes|blue]] me sirven.', idea: 'Sin «no»: «ni» ya niega.' },
            { tone: 'blue', label: 'DESPUÉS DEL VERBO', sentence: '**No** me sirven [[ni el lunes ni el martes|blue]].', idea: 'Con «no» delante del verbo.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase es correcta?', options: ['No ni el tamaño ni el precio me preocupan.', 'Ni el tamaño ni el precio me preocupan.', 'Ni el tamaño ni el precio no me preocupan.'], answer: 1, why: 'El grupo va delante del verbo: no hace falta «no».' },
            { prompt: 'El equipo ___ quiere ni la sala grande ni la cafetería.', options: ['no', 'ni', 'sin embargo'], answer: 0, why: 'El grupo va detrás del verbo: «no» delante del verbo.' },
          ] },
        ] },
        { title: 'Sin embargo: un contrapeso', mascot: '/brand/mascot/studying.webp', coach: 'Dos ideas completas, un giro claro.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SIN EMBARGO', question: '¿La segunda idea limita o corrige la primera?', formula: ['idea completa. Sin embargo, idea completa', 'idea completa; sin embargo, idea completa'],
            meaning: '«Sin embargo» conecta **dos afirmaciones completas** y anuncia que la segunda va en **otra dirección**: limita, corrige o equilibra la primera. Es más formal y más marcado que «pero». Se escribe con punto o punto y coma antes y **coma después**.',
            examples: [
              { es: 'La sala grande está cerca de la estación. [[Sin embargo|teal]], solo está disponible por la mañana.' },
              { es: 'El plan es caro. [[Sin embargo|teal]], ahorra mucho tiempo.' },
              { es: 'El curso exige mucho trabajo; [[sin embargo|teal]], los resultados llegan pronto.' },
              { es: 'Reconozco que la sala tiene ventajas. [[Sin embargo|teal]], prefiero que todos puedan participar.' },
            ] },
          { kind: 'tip', icon: '✎', title: 'También en medio', text: '«Sin embargo» puede ir dentro de la segunda idea, entre comas: «La sala es cómoda. El horario, **sin embargo**, no nos sirve». Así destacas «el horario».' },
          { kind: 'compare', title: 'Pero y sin embargo', columns: [
            { tone: 'neutral', label: 'PERO', sentence: 'La sala es cómoda, pero solo abre por la mañana.', idea: 'Une dos partes de una misma frase. Muy frecuente en la conversación.' },
            { tone: 'teal', label: 'SIN EMBARGO', sentence: 'La sala es cómoda. [[Sin embargo|teal]], solo abre por la mañana.', idea: 'Separa dos afirmaciones y da más peso al contrapeso.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué puntuación es correcta?', options: ['El proyecto es útil sin embargo necesita cambios.', 'El proyecto es útil. Sin embargo, necesita cambios.', 'El proyecto es útil, sin embargo necesita cambios.'], answer: 1, why: 'Dos afirmaciones completas: punto (o punto y coma) antes y coma después.' },
            { prompt: 'El hotel tiene buenas opiniones. ___ está lejos del centro.', options: ['Sin embargo,', 'Ni', 'Y'], answer: 0, why: 'La segunda idea limita la primera: contrapeso.' },
          ] },
        ] },
        { title: 'Aunque: un matiz breve', mascot: '/brand/mascot/speaking.webp', coach: 'Una reserva pequeña, sin cambiar de tema.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'AUNQUE', question: '¿Quieres añadir una pequeña reserva?', formula: ['valoración, aunque + matiz', 'adjetivo, aunque + adjetivo'],
            meaning: 'En este uso, «aunque» funciona como **«pero» suave**: añade un matiz breve a una valoración, dentro de la misma frase. Muchas veces lleva solo un adjetivo o una frase corta, y va **después** de la idea principal, con coma.',
            examples: [
              { es: 'La propuesta es útil, [[aunque cara|orange]].' },
              { es: 'Es una biblioteca pequeña, [[aunque cómoda|orange]].' },
              { es: 'La opción de la estación es útil, [[aunque menos flexible|orange]] con el horario.' },
              { es: 'Es una solución eficaz, [[aunque provisional|orange]].' },
            ],
            note: '«Aunque» tiene otros usos («Aunque llueva, salgo»); en esta clase solo trabajamos el matiz breve.' },
          { kind: 'tip', icon: '⚖', title: 'El orden cambia el peso', text: 'Lo que va al final pesa más. «Es útil, aunque cara» → la impresión final es **cara**. «Es cara, aunque útil» → la impresión final es **útil**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Recomiendas el libro, con una pequeña reserva. → Es un libro interesante, ___ un poco largo.', options: ['aunque', 'sin embargo', 'ni'], answer: 0, why: 'Un matiz breve dentro de la misma frase: «aunque».' },
            { prompt: '¿En qué frase la impresión final es **positiva**?', options: ['El apartamento es luminoso, aunque ruidoso.', 'El apartamento es ruidoso, aunque luminoso.'], answer: 1, why: 'Lo que va al final pesa más: «luminoso».' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Negar, equilibrar o matizar?', blocks: [
          { kind: 'table', title: 'Tres herramientas para matizar', head: ['Conector', 'Función', 'Puntuación', 'Ejemplo'], rows: [
            ['[[ni… ni|blue]]', 'negar dos elementos', 'sin comas', '[[Ni el precio ni la distancia|blue]] son un problema.'],
            ['[[sin embargo|teal]]', 'contrapeso entre dos ideas completas', '. / ; antes y , después', 'Es caro. [[Sin embargo|teal]], ahorra tiempo.'],
            ['[[aunque|orange]]', 'matiz breve en la misma frase', ', antes', 'Es útil, [[aunque cara|orange]].'],
          ] },
          { kind: 'decide', title: 'Piensa en lo que quieres decir', steps: [
            { q: '¿Quieres descartar dos cosas del mismo tipo?', yes: 'Usa **ni… ni**: «[[Ni el lunes ni el martes|blue]] me sirven».', no: 'next' },
            { q: '¿La segunda idea es una frase completa que corrige o equilibra la primera?', yes: 'Usa **sin embargo**: «La sala es cómoda. [[Sin embargo|teal]], solo abre por la mañana».', no: 'Si es una reserva corta, usa **aunque**: «Es cómoda, [[aunque pequeña|orange]]».' },
          ] },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección y explica la regla con sus palabras.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Ni el precio ni la distancia no son un problema.', right: 'Ni el precio ni la distancia son un problema.', why: 'Con «ni… ni» delante del verbo, sobra «no».' },
            { wrong: 'Me convencen ni el precio ni la duración.', right: 'No me convencen ni el precio ni la duración.', why: 'Si el grupo va detrás del verbo, necesitas «no» delante del verbo.' },
            { wrong: 'El proyecto es útil sin embargo necesita cambios.', right: 'El proyecto es útil. Sin embargo, necesita cambios.', why: '«Sin embargo» necesita puntuación: punto o punto y coma antes y coma después.' },
            { wrong: 'Es una buena idea, sin embargo cara.', right: 'Es una buena idea, aunque cara.', why: 'Para un matiz de un solo adjetivo, «aunque». «Sin embargo» necesita una idea completa.' },
            { wrong: 'No quiero viajar ni en tren o en avión.', right: 'No quiero viajar ni en tren ni en avión.', why: 'Los dos elementos negados llevan «ni».' },
            { wrong: 'La sala es grande. Sin embargo, también es barata.', right: 'La sala es grande y, además, es barata.', why: 'No hay contraste: las dos ideas van en la misma dirección.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno una opinión sobre su ciudad con los tres conectores: dos cosas que no son un problema, una ventaja y un contrapeso.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los conectores en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: '¿Sala grande o biblioteca?', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica qué matiz añade.', self: 'Lee la conversación. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Reunión de equipo', setting: 'Julia y su compañero Martín tienen que proponer un lugar para el encuentro del equipo.', lines: [
            { who: 'Martín', text: 'Yo voto por la sala grande de la estación. [[Ni el precio ni la distancia|blue]] son un problema.' },
            { who: 'Julia', text: 'Es verdad, es una buena sala. [[Sin embargo|teal]], solo está disponible por la mañana.' },
            { who: 'Martín', text: '¿Y eso qué importa?' },
            { who: 'Julia', text: 'Marta y Andrés trabajan a esa hora. No pueden venir [[ni el lunes ni el martes|blue]] por la mañana.' },
            { who: 'Martín', text: 'Ah, no lo sabía. ¿Y la biblioteca del barrio?' },
            { who: 'Julia', text: 'Es pequeña, [[aunque cómoda|orange]]. Y abre por la tarde.' },
            { who: 'Martín', text: 'Pero no tiene [[ni proyector ni servicio de café|blue]].' },
            { who: 'Julia', text: 'No necesitamos proyector: vamos a discutir documentos, no a mostrar diapositivas.' },
            { who: 'Martín', text: 'Tienes razón. La sala grande es más moderna. [[Sin embargo, la biblioteca|teal]] permite que todos participen.' },
            { who: 'Julia', text: 'Exacto. Llevamos copias impresas y un termo de café. Es una solución sencilla, [[aunque poco elegante|orange]].' },
          ], notes: {
            'Ni el precio ni la distancia': 'Martín **descarta dos problemas** a la vez. El grupo va delante del verbo («son»), así que no lleva «no».',
            'Sin embargo': 'Julia **reconoce** la ventaja y después presenta un **contrapeso**: el horario. Dos ideas completas, con punto antes y coma después.',
            'ni el lunes ni el martes': 'Dos días negados. El grupo va **detrás** del verbo, por eso aparece «no» delante: «No pueden venir…».',
            'aunque cómoda': 'Un **matiz breve**: la biblioteca es pequeña (negativo), pero cómoda. La impresión final es positiva.',
            'ni proyector ni servicio de café': 'Martín niega dos recursos; «no» va delante del verbo «tiene».',
            'Sin embargo, la biblioteca': 'Martín cambia de opinión: reconoce algo a favor de la sala y después da el argumento más importante.',
            'aunque poco elegante': 'Julia añade una pequeña **reserva** sin cambiar su opinión: la solución es buena.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Cuál es el problema de la sala grande?', options: ['El precio.', 'La distancia.', 'El horario.'], answer: 2, why: '«Sin embargo, solo está disponible por la mañana».' },
            { prompt: '¿Por qué no necesitan proyector?', options: ['Porque van a discutir documentos.', 'Porque llevan uno.', 'Porque la reunión es corta.'], answer: 0, why: '«Vamos a discutir documentos, no a mostrar diapositivas».' },
            { prompt: '¿Qué opina Martín al final?', options: ['Sigue prefiriendo la sala grande.', 'Acepta la biblioteca.', 'Propone otro lugar.'], answer: 1, why: '«Sin embargo, la biblioteca permite que todos participen».' },
          ] },
        ] },
        { title: '¿Qué hace cada conector?', blocks: [
          { kind: 'classify', title: 'Clasifica según la función', categories: [
            { id: 'negar', label: 'Niega dos elementos', tone: 'blue' },
            { id: 'contrapeso', label: 'Contrapeso entre dos ideas', tone: 'teal' },
            { id: 'matiz', label: 'Matiz breve', tone: 'orange' },
          ], items: [
            { text: 'Ni el precio ni la distancia son un problema.', answer: 'negar', why: 'Descarta dos problemas.' },
            { text: 'Es una buena sala. Sin embargo, solo abre por la mañana.', answer: 'contrapeso', why: 'Dos ideas completas; la segunda limita la primera.' },
            { text: 'Es pequeña, aunque cómoda.', answer: 'matiz', why: 'Un adjetivo que matiza la valoración.' },
            { text: 'No tiene ni proyector ni servicio de café.', answer: 'negar', why: 'Niega dos recursos.' },
            { text: 'Es una solución sencilla, aunque poco elegante.', answer: 'matiz', why: 'Una reserva breve.' },
            { text: 'La sala es moderna. Sin embargo, la biblioteca permite que todos participen.', answer: 'contrapeso', why: 'El segundo argumento pesa más.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Descartas por igual dos explicaciones.', prompt: 'El problema no es ___ el tiempo.', options: ['sin embargo', 'ni el dinero ni', 'aunque'], answer: 1, why: '«No es ni el dinero ni el tiempo»: se descartan las dos causas.' },
            { context: 'La segunda idea corrige una impresión demasiado negativa.', prompt: 'El curso exige mucho trabajo. ___ los resultados llegan pronto.', options: ['Ni', 'Sin embargo,', 'Y'], answer: 1, why: 'Dos afirmaciones completas; la segunda limita la primera.' },
            { context: 'Una cualidad final limita la valoración.', prompt: 'Es una solución eficaz, ___ provisional.', options: ['aunque', 'ni', 'sin embargo'], answer: 0, why: 'Un matiz breve con un solo adjetivo.' },
            { context: 'La persona rechaza las dos opciones de transporte.', prompt: 'No quiere viajar ___ en avión.', options: ['aunque', 'ni en tren ni', 'sin embargo'], answer: 1, why: '«No» niega el verbo; «ni… ni» coordina los dos medios descartados.' },
            { context: 'Hablas de dos compañeros que no pueden venir.', prompt: '___ Marta ni Andrés pueden venir por la mañana.', options: ['No', 'Ni', 'Sin embargo'], answer: 1, why: 'El grupo va delante del verbo: «Ni Marta ni Andrés pueden…».' },
            { context: 'Recomiendas un restaurante con una reserva.', prompt: 'La comida es excelente, ___ el servicio es lento.', options: ['ni', 'aunque', 'o'], answer: 1, why: '«Aunque» añade un matiz dentro de la misma frase.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿En qué frase la impresión final es **negativa**?', options: ['El hotel es caro, aunque muy cómodo.', 'El hotel es muy cómodo, aunque caro.'], answer: 1, why: 'Lo que va al final pesa más: «caro».' },
            { prompt: '«Ni el horario ni el precio me convencen.» ¿Qué significa?', options: ['Me convence una de las dos cosas.', 'No me convence ninguna de las dos.', 'Me convencen las dos.'], answer: 1, why: '«Ni… ni» niega los dos elementos.' },
            { prompt: '¿Qué frase reconoce una ventaja y después da un argumento más fuerte en contra?', options: ['La sala es moderna. Sin embargo, no todos pueden ir por la mañana.', 'La sala es moderna y está cerca.', 'Ni la sala ni la biblioteca están cerca.'], answer: 0, why: '«Sin embargo» introduce el contrapeso que pesa más.' },
            { prompt: '¿Qué frase **no** es correcta?', options: ['No me gustan ni el té ni el café.', 'Ni el té ni el café me gustan.', 'Ni el té ni el café no me gustan.'], answer: 2, why: 'Con el grupo delante del verbo, sobra «no».' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Elegir un curso de formación', lines: [
            { who: 'Elena', text: '¿Qué te parece el curso en línea?' },
            { who: 'Pablo', text: 'Es práctico, ___ un poco caro.', options: ['aunque', 'ni', 'sin embargo'], answer: 0, why: 'Matiz breve con un adjetivo.' },
            { who: 'Elena', text: '¿Y el presencial?' },
            { who: 'Pablo', text: 'No me convencen ___ el horario ni la ubicación.', options: ['ni', 'no', 'aunque'], answer: 0, why: '«No… ni… ni»: dos elementos negados detrás del verbo.' },
            { who: 'Elena', text: 'Pues el presencial tiene un profesor excelente. ___, entiendo tu problema con el horario.', options: ['Ni', 'Sin embargo', 'Aunque'], answer: 1, why: 'Una idea completa que equilibra la anterior.' },
            { who: 'Pablo', text: '___ el precio ni la duración son el problema principal. Es el tiempo.', options: ['No', 'Ni', 'Sin embargo'], answer: 1, why: 'Grupo delante del verbo: «Ni… ni…», sin «no».' },
            { who: 'Elena', text: 'Entonces, el curso en línea. Es caro, ___ flexible.', options: ['aunque', 'ni', 'o'], answer: 0, why: 'Matiz final positivo: «flexible» pesa más.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Ni Ana ni Luis no vienen a la reunión.', ok: false, options: ['Ni Ana ni Luis vienen a la reunión.', 'No Ana ni Luis vienen a la reunión.', 'Ni Ana o Luis vienen a la reunión.'], answer: 0, why: 'Grupo delante del verbo: sin «no».' },
            { sentence: 'El apartamento es luminoso, aunque pequeño.', ok: true, why: 'Correcta: matiz breve con un adjetivo.' },
            { sentence: 'El proyecto es interesante sin embargo es muy largo.', ok: false, options: ['El proyecto es interesante. Sin embargo, es muy largo.', 'El proyecto es interesante ni es muy largo.', 'El proyecto es interesante, sin embargo largo.'], answer: 0, why: 'Dos afirmaciones completas: punto antes y coma después de «sin embargo».' },
            { sentence: 'No tengo tiempo ni dinero para el viaje.', ok: true, why: 'Correcta: con dos elementos cortos, «no… ni» es frecuente y natural.' },
            { sentence: 'Me interesan ni el fútbol ni el tenis.', ok: false, options: ['No me interesan ni el fútbol ni el tenis.', 'Me interesan no el fútbol ni el tenis.', 'Ni me interesan el fútbol o el tenis.'], answer: 0, why: 'El grupo va detrás del verbo: necesitas «no» delante.' },
            { sentence: 'La reunión fue larga. Sin embargo, fue muy útil.', ok: true, why: 'Correcta: contrapeso entre dos ideas completas, bien puntuado.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['ni', 'Ni', 'el precio', 'la distancia', 'son un problema'], accept: ['Ni el precio ni la distancia son un problema', 'Ni la distancia ni el precio son un problema'] },
            { tiles: ['Sin embargo,', 'Es caro.', 'ahorra tiempo'], accept: ['Es caro. Sin embargo, ahorra tiempo'] },
            { tiles: ['aunque', 'La biblioteca', 'es pequeña,', 'cómoda'], accept: ['La biblioteca es pequeña, aunque cómoda'] },
          ] },
          { kind: 'rewrite', title: 'Reformula con el conector indicado', items: [
            { prompt: 'No me convence el precio y tampoco la duración.', instruction: 'Usa «ni… ni» después del verbo.', accept: ['No me convencen ni el precio ni la duración', 'No me convence ni el precio ni la duración'] },
            { prompt: 'No me sirve el lunes y no me sirve el martes.', instruction: 'Empieza con «Ni…».', accept: ['Ni el lunes ni el martes me sirven', 'Ni el lunes ni el martes me sirve'] },
            { prompt: 'El proyecto es útil, pero necesita cambios.', instruction: 'Usa «sin embargo» con dos frases.', accept: ['El proyecto es útil. Sin embargo, necesita cambios', 'El proyecto es útil; sin embargo, necesita cambios', 'El proyecto es útil sin embargo necesita cambios'] },
            { prompt: 'La propuesta es útil, pero es cara.', instruction: 'Usa «aunque» + adjetivo.', accept: ['La propuesta es útil, aunque cara', 'La propuesta es útil aunque cara'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una opinión sobre la reunión', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una opinión sobre la reunión', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota qué se descarta (ni… ni), qué contrapeso aparece y qué matiz se añade.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Martín opina sobre la biblioteca', channel: 'NOTA DE VOZ · PARA JULIA', src: '/audio/grammar-classroom/217.mp3',
            before: 'Martín le deja a Julia una nota de voz sobre el lugar de la reunión. ¿Crees que acepta la biblioteca? ¿Con qué condiciones?',
            gist: { prompt: '¿Cuál es la postura de Martín?', options: ['Acepta la biblioteca, pero quiere comprobar algo antes.', 'Rechaza la biblioteca.', 'Prefiere cancelar la reunión.'], answer: 0, why: 'No le preocupan el tamaño ni el proyector; «sin embargo, quiero comprobar si se puede hablar en la sala».' },
            details: [
              { prompt: '¿Qué dos cosas no le preocupan?', options: ['El tamaño de la biblioteca y la falta de proyector.', 'El precio y la distancia.', 'El horario y el café.'], answer: 0, why: '«Ni el tamaño de la biblioteca ni la falta de proyector me preocupan».' },
              { prompt: '¿Qué quiere comprobar?', options: ['Si hay café.', 'Si se puede hablar en la sala reservada.', 'Si la biblioteca abre el lunes.'], answer: 1, why: '«Quiero comprobar si se puede hablar en la sala reservada: algunas bibliotecas piden silencio».' },
              { prompt: '¿Qué matiz añade sobre la opción de la estación?', options: ['Que es cara.', 'Que es menos flexible con el horario.', 'Que está lejos.'], answer: 1, why: '«Es útil, aunque menos flexible con el horario».' },
              { prompt: '¿Qué días no pueden reunirse por la mañana?', options: ['El lunes y el martes.', 'El martes y el jueves.', 'El miércoles y el jueves.'], answer: 0, why: '«No podemos reunirnos ni el lunes ni el martes por la mañana».' },
              { prompt: '¿Qué horario prefiere?', options: ['El lunes por la tarde.', 'El jueves por la tarde.', 'El jueves por la mañana.'], answer: 1, why: '«Yo prefiero el jueves por la tarde».' },
            ],
            transcript: 'Hola, Julia. [[Ni el tamaño de la biblioteca ni la falta de proyector|blue]] me preocupan. Podemos llevar copias impresas. [[Sin embargo|teal]], quiero comprobar si se puede hablar en la sala reservada: algunas bibliotecas piden silencio. La opción cerca de la estación es útil, [[aunque menos flexible|orange]] con el horario. No podemos reunirnos [[ni el lunes ni el martes|blue]] por la mañana. Yo prefiero el jueves por la tarde. Si confirmamos las condiciones de la biblioteca, podemos decidir hoy. También llevaré agua para el grupo. Creo que lo importante es tener tiempo para conversar sin interrupciones.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Julia: confirma la biblioteca, descarta dos problemas con «ni… ni» y añade un matiz con «aunque».', self: 'Responde a Martín como si fueras Julia: usa «ni… ni», «sin embargo» y «aunque» al menos una vez.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Opiniones con matices', coach: 'Ni blanco ni negro: con matices.',
      steps: [
        { title: 'Opiniones con matices', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y pide siempre un matiz: «¿Y algo en contra?».', self: 'Responde cada pregunta en voz alta. Intenta dar siempre una ventaja y un contrapeso.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué piensas del lugar donde vives? ¿Es perfecto?', followUps: ['¿Qué dos cosas no son un problema para ti?', '¿Qué cambiarías?'], phrases: ['[[Ni el ruido ni el tráfico|blue]] me molestan.', 'Es un barrio tranquilo. [[Sin embargo|teal]], …', 'Es caro, [[aunque bonito|orange]].'], hint: 'Empieza con dos cosas que no te molestan y después añade un contrapeso.', example: 'Ni el ruido ni el tráfico me molestan mucho. Sin embargo, el barrio tiene pocos parques. Es caro, aunque muy cómodo.', next: 'Ahora hablemos de una decisión.', teacher: 'Si solo usa «pero», tu alumno formula la misma idea con «sin embargo» en dos frases.' },
            { q: 'Cuéntame una decisión reciente: un viaje, una compra, un curso. ¿Por qué elegiste esa opción?', followUps: ['¿Qué dos factores no influyeron?', '¿Qué desventaja tenía?'], phrases: ['No me importaban [[ni el precio ni la marca|blue]].', 'Tenía ventajas. [[Sin embargo|teal]], …', 'Fue una buena opción, [[aunque cara|orange]].'], hint: 'Separa lo que fue importante de lo que no influyó.', example: 'Compré una bicicleta usada. No me importaban ni el color ni la marca. Era una buena opción, aunque un poco vieja.', next: 'Ahora piensa en tu trabajo o tus estudios.' },
            { q: '¿Cómo es tu trabajo o tu forma de estudiar? ¿Qué te gusta y qué no?', followUps: ['¿Qué aspecto pesa más para ti?', '¿Lo recomiendas a otras personas?'], phrases: ['Mi trabajo es interesante, [[aunque estresante|orange]].', '[[Ni el horario ni el sueldo|blue]] son perfectos. [[Sin embargo|teal]], …'], hint: 'Recuerda: lo que va al final pesa más.', example: 'Mi trabajo es interesante, aunque estresante. Ni el horario ni el sueldo son perfectos. Sin embargo, aprendo mucho todos los días.', next: 'Pasemos a la tecnología.' },
            { q: '¿Qué opinas de trabajar o estudiar desde casa?', followUps: ['¿Qué ventajas tiene?', '¿Y qué contrapeso?', '¿Para quién no es una buena idea?'], phrases: ['Es cómodo. [[Sin embargo|teal]], …', 'No es [[ni mejor ni peor|blue]]: es diferente.', 'Es práctico, [[aunque solitario|orange]].'], hint: 'Reconoce una ventaja y después da tu argumento más importante con «sin embargo».', example: 'Trabajar desde casa es cómodo y ahorra tiempo. Sin embargo, a veces me siento solo. No es ni mejor ni peor: es diferente.', next: 'Ahora, una recomendación.' },
            { q: 'Un amigo te pide consejo: quiere comprar un coche o usar el transporte público. ¿Qué le dices?', followUps: ['¿Qué opción es más práctica?', '¿Qué problema tiene cada una?'], phrases: ['[[Ni el precio ni el tiempo|blue]] son el problema…', 'El coche es cómodo. [[Sin embargo|teal]], …', 'El transporte es lento, [[aunque barato|orange]].'], hint: 'Compara las dos opciones con matices y termina con tu recomendación.', example: 'El coche es cómodo. Sin embargo, en el centro es casi imposible encontrar estacionamiento. El transporte público es lento, aunque barato. Yo te recomiendo el transporte público.', next: 'Para terminar, una opinión más difícil.', teacher: 'Tu alumno defiende la opción contraria a la suya durante un minuto.' },
            { q: '¿Hay algo que antes te parecía perfecto y ahora ves con matices?', followUps: ['¿Qué cambió?', '¿Qué sigue siendo positivo?'], phrases: ['Antes pensaba que… [[Sin embargo|teal]], ahora…', 'Es bueno, [[aunque|orange]]…', 'Ya no me convencen [[ni… ni…|blue]]'], hint: 'Puedes hablar de una ciudad, una red social, una dieta, una profesión…', example: 'Antes pensaba que las redes sociales eran perfectas para estar en contacto. Sin embargo, ahora paso demasiado tiempo en ellas. Son útiles, aunque peligrosas.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno pide al profesor una opinión con matices sobre un tema y detecta los conectores que usa.', self: 'Escucha una entrevista o lee una reseña en español y anota los conectores de contraste que aparecen.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una recomendación razonada', coach: 'Defiende tu opción con matices.',
      steps: [
        { title: 'Una recomendación razonada', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después corrijan juntos lo que la revisión no ve, sobre todo la puntuación de «sin embargo».', self: 'Escribe tu texto y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Mensaje al equipo', situation: 'Tu grupo de trabajo, de estudio o de amigos tiene que elegir entre dos opciones (un lugar, una fecha, un curso, un regalo). Escribe un mensaje con tu recomendación.', task: [
            'Presenta las dos opciones y descarta **dos preocupaciones** con **ni… ni**.',
            'Reconoce una ventaja de la opción que no prefieres y presenta un contrapeso con **sin embargo**.',
            'Añade un matiz breve con **aunque**.',
            'Termina con tu recomendación concreta.',
          ], starters: ['Hola a todos:', 'Ni… ni… son un problema.', 'La primera opción tiene ventajas. Sin embargo, …', 'Es…, aunque…', 'Por eso recomiendo…'],
            words: ['ventaja', 'inconveniente', 'disponible', 'flexible', 'cómodo', 'reconozco que', 'lo importante es', 'recomiendo'],
            model: 'Hola a todos: [[Ni el tamaño de la biblioteca ni la falta de proyector|blue]] son un problema. Nuestra reunión se basa en conversar y revisar documentos impresos. La sala de la estación es moderna. [[Sin embargo|teal]], solo está disponible por la mañana. No podemos reunirnos [[ni el lunes ni el martes|blue]] por la mañana, así que recomiendo el jueves por la tarde. La biblioteca es pequeña, [[aunque cómoda|orange]], y ese horario permite que todos participen. Podemos llevar agua y copias.',
            minWords: 70 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'NI… NI', formula: 'ni A ni B + verbo · no + verbo + ni A ni B', example: 'Ni el lunes ni el martes me sirven.', caption: 'Dos elementos negados.' },
            { tone: 'teal', label: 'SIN EMBARGO', formula: 'idea. Sin embargo, idea', example: 'Es caro. Sin embargo, ahorra tiempo.', caption: 'Un contrapeso entre dos ideas completas.' },
            { tone: 'orange', label: 'AUNQUE', formula: 'valoración, aunque + matiz', example: 'Es útil, aunque cara.', caption: 'Una reserva breve; lo último pesa más.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres claves', text: '«Ni… ni» delante del verbo: sin «no». «Sin embargo»: punto antes, coma después. «Aunque» + adjetivo: el final pesa más.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '___ mi hermano ni mi hermana viven aquí.', options: ['No', 'Ni', 'Aunque'], answer: 1, why: 'Grupo delante del verbo: «Ni… ni…».' },
            { prompt: 'El examen fue difícil. ___ aprobé con buena nota.', options: ['Sin embargo,', 'Ni', 'Aunque'], answer: 0, why: 'Dos ideas completas con contrapeso.' },
            { prompt: 'Es un apartamento bonito, ___ pequeño.', options: ['sin embargo', 'ni', 'aunque'], answer: 2, why: 'Matiz breve con un adjetivo.' },
            { prompt: 'No me gustan ___ las películas de terror ni las de guerra.', options: ['ni', 'no', 'sin embargo'], answer: 0, why: '«No… ni… ni» con el grupo detrás del verbo.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Es útil, aunque cara» y «Es cara, aunque útil»: ¿qué diferencia hay? Cambia la impresión final: lo que va al final pesa más.' },
        ] },
      ],
    },
  ],
};
