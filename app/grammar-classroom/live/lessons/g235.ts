import type { LiveLesson } from '../types';

/**
 * Lesson 235 · B2 · Tan, tanto y así que.
 * A community repair workshop gets more demand than expected; the team
 * evaluates what happened. Intensity of a quality (tan), of a quantity
 * (tanto + noun, agreeing), of an action (verb + tanto) and a plain
 * consequence between facts (así que), kept apart from cause and purpose.
 */
export const lesson: LiveLesson = {
  id: 235,
  level: 'B2',
  title: 'Tan, tanto y así que',
  subtitle: 'Explicar consecuencias ligadas a una intensidad o a un hecho con «tan… que», «tanto… que» y «así que», y distinguirlas de la causa y la finalidad.',
  legend: [
    { tone: 'blue', label: 'Tan + adjetivo / adverbio + que · una cualidad intensa' },
    { tone: 'teal', label: 'Tanto/a/os/as + nombre + que · una cantidad' },
    { tone: 'orange', label: 'Verbo + tanto + que · una acción intensa' },
    { tone: 'violet', label: 'Así que · la consecuencia de un hecho' },
  ],
  optionNotes: {
    tan: '«Tan» va delante de un adjetivo o un adverbio (tan pequeña, tan deprisa). Delante de un nombre se usa «tanto/a/os/as»; después de un verbo, «tanto».',
    Tan: '«Tan» va delante de un adjetivo o un adverbio. Delante de un nombre se usa «tanto/a/os/as»; después de un verbo, «tanto».',
    tanto: '«Tanto» va después de un verbo (trabajamos tanto) o delante de un nombre masculino singular (tanto ruido). Revisa qué palabra recibe la intensidad.',
    tantas: '«Tantas» acompaña a un nombre femenino plural (tantas solicitudes). Aquí no hay un nombre así.',
    tantos: '«Tantos» acompaña a un nombre masculino plural (tantos objetos). Revisa qué palabra recibe la intensidad.',
    tanta: '«Tanta» acompaña a un nombre femenino singular (tanta gente). Revisa qué palabra recibe la intensidad.',
    'porque llegaron más personas': '«Porque» introduce la causa, no la consecuencia.',
    'para recibir al grupo': '«Para + infinitivo» expresa la finalidad, no la consecuencia.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Explicar qué pasó como resultado', coach: 'La intensidad tiene consecuencias.',
      steps: [
        { title: 'Un taller con demasiada demanda', blocks: [
          { kind: 'lead', text: 'Un centro cultural prepara un taller de reparación para doce personas. Pero se apuntan muchas más. La coordinadora explica lo que pasó con tres frases distintas.' },
          { kind: 'guide', text: { teacher: 'Lean las tres frases. Pregunta: «¿Qué palabra es intensa en cada frase: una cualidad, una cantidad o ninguna?».', self: 'Lee las tres frases. ¿Qué se intensifica en cada una: una cualidad, una cantidad o nada?' } },
          { kind: 'compare', title: 'Tres formas de llegar al resultado', columns: [
            { tone: 'teal', label: 'UNA CANTIDAD', sentence: 'Recibimos [[tantas solicitudes que|teal]] abrimos una segunda sesión.', idea: 'El número de solicitudes fue tan alto que produjo un resultado.' },
            { tone: 'blue', label: 'UNA CUALIDAD', sentence: 'La sala era [[tan pequeña que|blue]] no cabían dos grupos.', idea: 'El grado de una cualidad (pequeña) explica el resultado.' },
            { tone: 'violet', label: 'UN HECHO', sentence: 'La sala estaba ocupada, [[así que|violet]] cambiamos el horario.', idea: 'Un hecho y su consecuencia, sin hablar de intensidad.' },
          ] },
          { kind: 'tip', icon: '🎯', title: 'La consecuencia va después de «que»', text: 'Con **tan… que** y **tanto… que**, la primera parte dice **cuánto** (la intensidad) y la parte de «que» dice **qué pasó** (el resultado). Con **así que**, solo hay un hecho y su consecuencia.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'En «Había tanto ruido que salimos», ¿qué parte es el resultado?', options: ['Salimos.', 'Había ruido.', 'Tanto.'], answer: 0, why: 'Lo que va después de «que» es la consecuencia.' },
            { prompt: '¿Qué frase **no** habla de intensidad?', options: ['Llovía, así que nos quedamos en casa.', 'Llovía tanto que nos quedamos en casa.'], answer: 0, why: '«Así que» une un hecho y su consecuencia, sin grado.' },
          ] },
        ] },
        { title: 'Tan + adjetivo o adverbio', mascot: '/brand/mascot/studying.webp', coach: 'Tan no cambia nunca.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TAN… QUE', question: '¿Una cualidad o una manera es tan intensa que produce un resultado?', formula: ['tan + adjetivo + que + resultado', 'tan + adverbio + que + resultado'],
            meaning: '**Tan** intensifica un **adjetivo** (pequeña, claras) o un **adverbio** (deprisa, despacio, bien). Presenta un grado suficiente para explicar el resultado. **Tan es invariable**: no cambia de género ni de número.',
            examples: [
              { es: 'La sala era [[tan pequeña que|blue]] cambiamos de lugar.' },
              { es: 'Las instrucciones eran [[tan claras que|blue]] nadie pidió ayuda.' },
              { es: 'Hablaban [[tan deprisa que|blue]] no entendíamos nada.' },
              { es: 'Algunos objetos eran [[tan grandes que|blue]] ocupaban una mesa completa.' },
            ],
            note: 'Con adverbios de manera, igual: «Lo explicó **tan bien** que todos lo entendieron».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Las instrucciones eran ___ claras que nadie pidió ayuda.', options: ['tan', 'tantas', 'tanto'], answer: 0, why: '«Tan» delante del adjetivo «claras»; no cambia.' },
            { prompt: 'El voluntario explicaba ___ despacio que todos lo seguían.', options: ['tan', 'tanto', 'tantos'], answer: 0, why: '«Despacio» es un adverbio: «tan».' },
          ] },
        ] },
        { title: 'Tanto: con nombres y con verbos', mascot: '/brand/mascot/speaking.webp', coach: 'Con nombres concuerda; con verbos, no.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TANTO/A/OS/AS + NOMBRE', question: '¿Una cantidad es tan grande que produce un resultado?', formula: ['tanto / tanta / tantos / tantas + nombre + que + resultado'],
            meaning: 'Delante de un **nombre**, «tanto» funciona como un adjetivo: **concuerda** en género y número con el nombre.',
            examples: [
              { es: 'Recibimos [[tantas solicitudes que|teal]] abrimos otra sesión.' },
              { es: 'Había [[tanto ruido que|teal]] salimos de la sala.' },
              { es: 'Vino [[tanta gente que|teal]] faltaron sillas.' },
              { es: 'Trajeron [[tantos objetos que|teal]] no cabían en las mesas.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'VERBO + TANTO', question: '¿Una acción es tan intensa que produce un resultado?', formula: ['verbo + tanto + que + resultado'],
            meaning: 'Después de un **verbo**, «tanto» es **invariable**: siempre «tanto».',
            examples: [
              { es: 'Trabajamos [[tanto que|orange]] terminamos el mismo día.' },
              { es: 'Llovió [[tanto que|orange]] se suspendió el mercado.' },
              { es: 'Las niñas se rieron [[tanto que|orange]] lloraban.' },
              { es: 'Me gustó [[tanto que|orange]] volví al día siguiente.' },
            ] },
          { kind: 'table', title: 'Las formas en resumen', head: ['Lo que se intensifica', 'Forma', 'Ejemplo'], rows: [
            ['adjetivo / adverbio', '**tan** (invariable)', 'era [[tan pequeña|blue]] · hablaba [[tan deprisa|blue]]'],
            ['nombre masculino singular', '**tanto**', '[[tanto ruido|teal]]'],
            ['nombre femenino singular', '**tanta**', '[[tanta gente|teal]]'],
            ['nombre masculino plural', '**tantos**', '[[tantos objetos|teal]]'],
            ['nombre femenino plural', '**tantas**', '[[tantas solicitudes|teal]]'],
            ['verbo', '**tanto** (invariable)', 'trabajamos [[tanto|orange]]'],
          ], note: 'Nunca «tan» delante de un nombre: «tantas solicitudes», no «tan solicitudes».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Recibimos ___ solicitudes que abrimos otra sesión.', options: ['tantas', 'tan', 'tanto'], answer: 0, why: '«Solicitudes»: femenino plural.' },
            { prompt: 'Trabajamos ___ que terminamos antes.', options: ['tanto', 'tan', 'tantos'], answer: 0, why: 'Después del verbo: «tanto», invariable.' },
            { prompt: 'Había ___ gente en la sala que abrimos las ventanas.', options: ['tanta', 'tanto', 'tan'], answer: 0, why: '«Gente»: femenino singular.' },
          ] },
        ] },
        { title: 'Así que: la consecuencia de un hecho', mascot: '/autoestudio/mascot/noting.webp', coach: 'Un hecho, una coma y «así que».', blocks: [
          { kind: 'concept', tone: 'violet', label: 'ASÍ QUE', question: '¿Quieres decir qué pasó como resultado de un hecho?', formula: ['hecho, así que + consecuencia'],
            meaning: '**Así que** une una situación y su **resultado**, sin expresar intensidad. Normalmente va después de una coma.',
            examples: [
              { es: 'La sala estaba ocupada, [[así que|violet]] cambiamos el horario.' },
              { es: 'Faltaban herramientas, [[así que|violet]] compartimos las mesas.' },
              { es: 'Separamos las sesiones, [[así que|violet]] nadie se quedó sin plaza.' },
              { es: 'Compartimos los soportes, [[así que|violet]] algunas reparaciones terminaron tarde.' },
            ] },
          { kind: 'compare', title: 'Causa, consecuencia y finalidad', columns: [
            { tone: 'neutral', label: 'CAUSA', sentence: 'Cambiamos de sala **porque** había ruido.', idea: '«Porque» dice por qué pasó.' },
            { tone: 'violet', label: 'CONSECUENCIA', sentence: 'Había ruido, [[así que|violet]] cambiamos de sala.', idea: '«Así que» dice qué pasó después, como resultado.' },
            { tone: 'neutral', label: 'FINALIDAD', sentence: 'Cambiamos de sala **para** trabajar tranquilos.', idea: '«Para» dice qué queríamos conseguir.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Elige la consecuencia: faltaban sillas, ___.', options: ['así que usamos otra sala', 'porque llegaron más personas', 'para recibir al grupo'], answer: 0, why: '«Así que» introduce el resultado de la falta de sillas.' },
            { prompt: '¿Qué frase expresa la **causa**?', options: ['Llegamos tarde porque había tráfico.', 'Había tráfico, así que llegamos tarde.'], answer: 0, why: '«Porque» introduce la causa; «así que», la consecuencia.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Qué palabra recibe la intensidad?', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase y responde', steps: [
            { q: '¿Quieres expresar un grado o una cantidad intensa?', yes: 'next', no: 'Usa **así que** para unir el hecho y su consecuencia: «La sala estaba ocupada, [[así que|violet]] cambiamos el horario».' },
            { q: '¿La intensidad cae sobre un nombre?', yes: 'Usa **tanto/a/os/as** y haz la concordancia: «[[tantas solicitudes que|teal]]…».', no: 'Si es un adjetivo o un adverbio, **tan**: «[[tan pequeña que|blue]]…». Si es un verbo, **tanto** después del verbo: «trabajamos [[tanto que|orange]]…».' },
          ] },
          { kind: 'compare', title: 'Una situación, tres focos', columns: [
            { tone: 'blue', label: 'CUALIDAD', sentence: 'La sala era [[tan pequeña que|blue]] salimos.', idea: 'El foco está en cómo era la sala.' },
            { tone: 'teal', label: 'CANTIDAD', sentence: 'Había [[tantas personas que|teal]] salimos.', idea: 'El foco está en cuánta gente había.' },
            { tone: 'violet', label: 'HECHO', sentence: 'La sala estaba llena, [[así que|violet]] salimos.', idea: 'El foco está en la consecuencia, sin grado.' },
          ] },
          { kind: 'tip', icon: '⚖', title: 'No exageres la relación', text: 'Usa estas estructuras para explicar resultados reales, no para culpar a una sola causa. En la evaluación del taller, el equipo reconoce que influyeron **varias cosas**: el espacio, el tipo de objetos y la claridad de las explicaciones.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Tan, tanto, tantas: ¿cuál toca?', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que diga qué palabra recibe la intensidad (adjetivo, nombre o verbo) antes de mostrar la corrección.', self: 'Para cada frase, busca la palabra que recibe la intensidad. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Recibimos tan solicitudes que abrimos otra sesión.', right: 'Recibimos tantas solicitudes que abrimos otra sesión.', why: 'Delante de un nombre, «tanto/a/os/as», con concordancia.' },
            { wrong: 'Las salas eran tantas pequeñas que no cabíamos.', right: 'Las salas eran tan pequeñas que no cabíamos.', why: 'Delante de un adjetivo, «tan», invariable.' },
            { wrong: 'Había tanto gente que faltaron sillas.', right: 'Había tanta gente que faltaron sillas.', why: '«Gente» es femenino singular: «tanta».' },
            { wrong: 'Trabajamos tan que terminamos el mismo día.', right: 'Trabajamos tanto que terminamos el mismo día.', why: 'Después de un verbo, «tanto».' },
            { wrong: 'Llovía mucho, así que por eso no salimos.', right: 'Llovía mucho, así que no salimos.', why: '«Así que» ya introduce la consecuencia: no hace falta «por eso».' },
            { wrong: 'Cambiamos de sala así que había ruido.', right: 'Cambiamos de sala porque había ruido. / Había ruido, así que cambiamos de sala.', why: '«Así que» introduce la consecuencia, no la causa.' },
          ] },
          { kind: 'teacher', text: 'Da una situación («El tren llegó tarde») y pide tres frases: con tan, con tanto/a/os/as y con así que. Pregunta qué foco tiene cada una.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Un taller con más demanda de la prevista', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'La reunión de evaluación', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después el alumno toca cada expresión y dice qué recibe la intensidad o cuál es el hecho.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Después del primer taller', setting: 'En el centro cultural, la coordinadora, Beatriz, evalúa el taller de reparación con dos voluntarios, Joaquín y Silvia.', lines: [
            { who: 'Beatriz', text: 'Bueno, ¿cómo fue el taller? Recibimos [[tantas solicitudes que|teal]] tuvimos que abrir una segunda sesión.' },
            { who: 'Joaquín', text: 'Fue un éxito, pero la sala era [[tan pequeña que|blue]] no podíamos trabajar con dos grupos a la vez.' },
            { who: 'Silvia', text: 'Y algunas personas trajeron objetos [[tan grandes que|blue]] ocupaban una mesa completa.' },
            { who: 'Beatriz', text: '¿Y qué hicimos con los dos grupos?' },
            { who: 'Joaquín', text: 'Separamos las sesiones por horario, [[así que|violet]] nadie se quedó sin plaza.' },
            { who: 'Silvia', text: 'Hay otra cosa. Al principio explicábamos los pasos [[tan deprisa que|blue]] varias personas se perdían.' },
            { who: 'Beatriz', text: '¿Y qué hicieron?' },
            { who: 'Silvia', text: 'Redujimos el ritmo y preparamos instrucciones con fotos. Trabajamos [[tanto que|orange]] terminamos el documento ese mismo día.' },
            { who: 'Joaquín', text: 'Entonces, ¿el problema fue que vino demasiada gente?' },
            { who: 'Beatriz', text: 'No solo. Influyeron el espacio, los objetos y las explicaciones. El próximo taller tendrá menos plazas por sesión, [[así que vamos a ofrecer|violet]] más fechas.' },
          ], notes: {
            'tantas solicitudes que': '«Solicitudes» es un nombre femenino plural: **tantas**. El resultado: abrir otra sesión.',
            'tan pequeña que': '«Pequeña» es un adjetivo: **tan**. El grado de la cualidad explica el resultado.',
            'tan grandes que': '«Tan» no cambia aunque «grandes» sea plural.',
            'así que': 'Un **hecho** (separar las sesiones) y su **consecuencia** (nadie se quedó sin plaza). Sin intensidad.',
            'tan deprisa que': '«Deprisa» es un adverbio: **tan**.',
            'tanto que': 'Después del verbo «trabajar»: **tanto**, invariable.',
            'así que vamos a ofrecer': 'La consecuencia de tener menos plazas por sesión: ofrecer más fechas.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué abrieron una segunda sesión?', options: ['Porque recibieron muchas solicitudes.', 'Porque la sala estaba ocupada.', 'Porque faltaban voluntarios.'], answer: 0, why: '«Recibimos tantas solicitudes que tuvimos que abrir una segunda sesión».' },
            { prompt: '¿Qué ayudó a entender los pasos?', options: ['Explicar más despacio y preparar instrucciones con fotos.', 'Reducir el grupo a la mitad.', 'Cambiar de sala.'], answer: 0, why: '«Redujimos el ritmo y preparamos instrucciones con fotos».' },
          ] },
        ] },
        { title: 'Un día complicado', mascot: '/brand/mascot/speaking.webp', coach: 'Intensidad y consecuencias en la vida diaria.', blocks: [
          { kind: 'explore', title: 'Llegar tarde a una entrevista', setting: 'Mariela le cuenta a su hermano cómo fue su día.', lines: [
            { who: 'Hernán', text: '¿Qué tal la entrevista?' },
            { who: 'Mariela', text: 'Uf, un desastre al principio. Había [[tanto tráfico que|teal]] llegué veinte minutos tarde.' },
            { who: 'Hernán', text: '¿Y no avisaste?' },
            { who: 'Mariela', text: 'Mi teléfono no tenía batería, [[así que|violet]] no pude llamar.' },
            { who: 'Hernán', text: '¿Y qué te dijeron?' },
            { who: 'Mariela', text: 'La entrevistadora fue [[tan amable que|blue]] me tranquilicé enseguida.' },
            { who: 'Hernán', text: '¿Y después?' },
            { who: 'Mariela', text: 'Me hizo [[tantas preguntas que|teal]] la entrevista duró una hora. Hablé [[tanto que|orange]] terminé sin voz.' },
            { who: 'Hernán', text: '¡Pero eso es buena señal!' },
            { who: 'Mariela', text: 'Eso espero. Me dijeron que me llaman el viernes, [[así que|violet]] voy a tener el teléfono cargado todo el día.' },
          ], notes: {
            'tanto tráfico que': '«Tráfico» es masculino singular: **tanto**.',
            'así que': 'Un hecho (el teléfono sin batería, la llamada del viernes) y su **consecuencia**.',
            'tan amable que': '«Amable» es un adjetivo: **tan**.',
            'tantas preguntas que': '«Preguntas» es femenino plural: **tantas**.',
            'tanto que': 'Después del verbo «hablar»: **tanto**.',
          } },
          { kind: 'teacher', text: 'Pide al alumno que cuente un día complicado como Mariela, con al menos una frase con tan, una con tanto/a/os/as y una con así que.' },
        ] },
        { title: '¿Qué recibe la intensidad?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones de las dos conversaciones', categories: [
            { id: 'tan', label: 'Tan + adjetivo / adverbio', tone: 'blue' },
            { id: 'nombre', label: 'Tanto/a/os/as + nombre', tone: 'teal' },
            { id: 'verbo', label: 'Verbo + tanto', tone: 'orange' },
            { id: 'asi', label: 'Así que', tone: 'violet' },
          ], items: [
            { text: 'Recibimos tantas solicitudes que abrimos otra sesión.', answer: 'nombre', why: '«Solicitudes» es un nombre.' },
            { text: 'La sala era tan pequeña que no cabían dos grupos.', answer: 'tan', why: '«Pequeña» es un adjetivo.' },
            { text: 'Trabajamos tanto que terminamos ese mismo día.', answer: 'verbo', why: '«Tanto» después del verbo.' },
            { text: 'Mi teléfono no tenía batería, así que no pude llamar.', answer: 'asi', why: 'Un hecho y su consecuencia, sin intensidad.' },
            { text: 'Había tanto tráfico que llegué tarde.', answer: 'nombre', why: '«Tráfico» es un nombre.' },
            { text: 'Explicábamos tan deprisa que varias personas se perdían.', answer: 'tan', why: '«Deprisa» es un adverbio.' },
            { text: 'Hablé tanto que terminé sin voz.', answer: 'verbo', why: '«Tanto» después del verbo «hablar».' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca la palabra que recibe la intensidad.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { prompt: 'El concierto fue ___ bueno que repitieron la gira.', options: ['tan', 'tanto', 'tantos'], answer: 0, why: '«Bueno» es un adjetivo: «tan».' },
            { prompt: 'Compramos ___ comida que sobró la mitad.', options: ['tanta', 'tanto', 'tan'], answer: 0, why: '«Comida»: femenino singular.' },
            { prompt: 'Mi hermano estudió ___ que aprobó con la mejor nota.', options: ['tanto', 'tan', 'tantos'], answer: 0, why: 'Después del verbo: «tanto».' },
            { prompt: 'Había ___ autos en la calle que no pudimos estacionar.', options: ['tantos', 'tanto', 'tan'], answer: 0, why: '«Autos»: masculino plural.' },
            { prompt: 'El autobús iba ___ lento que llegamos tarde.', options: ['tan', 'tanto', 'tanta'], answer: 0, why: '«Lento» es un adjetivo: «tan».' },
            { context: 'Elige la consecuencia, no la causa ni la finalidad.', prompt: 'El museo estaba cerrado, ___.', options: ['así que fuimos al parque', 'porque era lunes', 'para descansar'], answer: 0, why: '«Así que» introduce el resultado.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase pone el foco en **la cantidad** de personas?', options: ['Había tantas personas que salimos.', 'La sala era tan pequeña que salimos.', 'La sala estaba llena, así que salimos.'], answer: 0, why: '«Tantas personas»: el foco está en el número.' },
            { prompt: '«Había ruido, así que cambiamos de sala» / «Había tanto ruido que cambiamos de sala». ¿Qué añade la segunda?', options: ['La intensidad: el ruido era muy fuerte.', 'La causa.', 'Nada, son idénticas.'], answer: 0, why: '«Tanto… que» presenta el grado del ruido como la razón del resultado.' },
            { prompt: '¿Qué frase expresa **finalidad**?', options: ['Salimos temprano para evitar el tráfico.', 'Había tanto tráfico que salimos temprano.', 'Había tráfico, así que salimos temprano.'], answer: 0, why: '«Para + infinitivo»: lo que queremos conseguir.' },
            { prompt: '«Hablaba tan bajo que nadie lo oía.» ¿Qué recibe la intensidad?', options: ['La manera de hablar (bajo).', 'La cantidad de palabras.', 'Las personas.'], answer: 0, why: '«Bajo» funciona aquí como adverbio: «tan».' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Una mudanza agotadora', lines: [
            { who: 'Carla', text: '¿Qué tal la mudanza?' },
            { who: 'Iván', text: 'Agotadora. Teníamos ___ cajas que necesitamos dos viajes.', options: ['tantas', 'tantos', 'tan'], answer: 0, why: '«Cajas»: femenino plural.' },
            { who: 'Carla', text: '¿Y el sofá?' },
            { who: 'Iván', text: 'Era ___ grande que no pasaba por la puerta.', options: ['tan', 'tanto', 'tantas'], answer: 0, why: '«Grande» es un adjetivo.' },
            { who: 'Carla', text: '¿Y qué hicieron?' },
            { who: 'Iván', text: 'El ascensor no funcionaba, ___ lo subimos por la ventana con una cuerda.', options: ['así que', 'porque', 'para que'], answer: 0, why: 'La consecuencia de un hecho.' },
            { who: 'Carla', text: '¡Qué locura!' },
            { who: 'Iván', text: 'Sí. Al final trabajamos ___ que nos dormimos en el suelo.', options: ['tanto', 'tan', 'tantos'], answer: 0, why: 'Después del verbo: «tanto».' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Había tan gente que no pudimos entrar.', ok: false, options: ['Había tanta gente que no pudimos entrar.', 'Había tanto gente que no pudimos entrar.', 'Había tantas gente que no pudimos entrar.'], answer: 0, why: '«Gente»: femenino singular, «tanta».' },
            { sentence: 'Las calles estaban tan mojadas que resbalamos.', ok: true, why: 'Correcta: «tan» delante del adjetivo, invariable.' },
            { sentence: 'Comimos tan que no pudimos cenar.', ok: false, options: ['Comimos tanto que no pudimos cenar.', 'Comimos tantos que no pudimos cenar.', 'Comimos tanta que no pudimos cenar.'], answer: 0, why: 'Después del verbo: «tanto».' },
            { sentence: 'Tenía tantas tareas que no salió el fin de semana.', ok: true, why: 'Correcta: «tareas», femenino plural.' },
            { sentence: 'Los libros eran tantos caros que no compré ninguno.', ok: false, options: ['Los libros eran tan caros que no compré ninguno.', 'Los libros eran tanto caros que no compré ninguno.', 'Los libros eran tantas caros que no compré ninguno.'], answer: 0, why: 'Delante de un adjetivo: «tan», invariable.' },
            { sentence: 'Me quedé en casa así que estaba enfermo.', ok: false, options: ['Estaba enfermo, así que me quedé en casa.', 'Me quedé en casa, así que estaba enfermo.', 'Así que estaba enfermo, me quedé en casa.'], answer: 0, why: '«Así que» introduce la consecuencia (quedarse en casa), no la causa.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['La', 'sala', 'era', 'tan', 'pequeña', 'que', 'salimos'], accept: ['La sala era tan pequeña que salimos'] },
            { tiles: ['Había', 'tanto', 'ruido', 'que', 'no', 'oíamos', 'nada'], accept: ['Había tanto ruido que no oíamos nada'] },
            { tiles: ['Trabajamos', 'tanto', 'que', 'terminamos', 'antes'], accept: ['Trabajamos tanto que terminamos antes'] },
            { tiles: ['Faltaban', 'sillas', 'así', 'que', 'usamos', 'otra', 'sala'], accept: ['Faltaban sillas así que usamos otra sala'] },
          ] },
        ] },
        { title: 'Une las ideas', mascot: '/brand/mascot/kneeling.webp', coach: 'Dos frases, un resultado.', blocks: [
          { kind: 'rewrite', title: 'Une las dos frases', items: [
            { prompt: 'La explicación fue muy rápida. Varias personas no la entendieron.', instruction: 'Usa «tan… que».', accept: ['La explicación fue tan rápida que varias personas no la entendieron'] },
            { prompt: 'Recibimos muchísimos correos. No pudimos contestar todos.', instruction: 'Usa «tantos… que».', accept: ['Recibimos tantos correos que no pudimos contestar todos', 'Recibimos tantos correos que no pudimos contestarlos todos'] },
            { prompt: 'Caminé muchísimo. Me dolían las piernas.', instruction: 'Usa «tanto que».', accept: ['Caminé tanto que me dolían las piernas'] },
            { prompt: 'El restaurante estaba cerrado. Cenamos en casa.', instruction: 'Usa «así que».', accept: ['El restaurante estaba cerrado, así que cenamos en casa'] },
            { prompt: 'Había mucha niebla. Cancelaron el vuelo.', instruction: 'Usa «tanta… que».', accept: ['Había tanta niebla que cancelaron el vuelo'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Evaluación del segundo taller', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un mensaje de Beatriz', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada resultado y qué lo produjo.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada resultado y qué lo produjo.' } },
          { kind: 'listen', title: 'Beatriz evalúa la segunda sesión', channel: 'MENSAJE DE VOZ · AL EQUIPO', src: '/audio/grammar-classroom/235.mp3',
            before: 'Beatriz deja un mensaje al equipo con los comentarios de la segunda sesión del taller. ¿Crees que todo salió bien esta vez?',
            gist: { prompt: '¿Qué propone Beatriz al final?', options: ['Preguntar antes qué objeto traerá cada participante.', 'Reducir el grupo.', 'Comprar más herramientas.'], answer: 0, why: '«Para la próxima fecha vamos a preguntar antes qué objeto traerá cada participante».' },
            details: [
              { prompt: '¿Qué pasó gracias a las instrucciones?', options: ['Casi todos empezaron a trabajar sin pedir ayuda.', 'Terminaron antes de la hora.', 'Vino más gente.'], answer: 0, why: '«Las instrucciones fueron tan claras que casi todos empezaron a trabajar sin pedir ayuda».' },
              { prompt: '¿Por qué faltaron soportes?', options: ['Porque trajeron muchas bicicletas.', 'Porque vino mucha gente.', 'Porque se rompieron.'], answer: 0, why: '«Trajeron tantas bicicletas que nos faltaron soportes».' },
              { prompt: '¿Qué consecuencia tuvo compartir los soportes?', options: ['Algunas reparaciones terminaron más tarde.', 'Algunas personas se fueron.', 'Se rompieron dos bicicletas.'], answer: 0, why: '«Compartimos los soportes, así que algunas reparaciones terminaron más tarde».' },
              { prompt: '¿Quién pudo seguir los pasos de la voluntaria?', options: ['Incluso la persona que llegó a mitad de la sesión.', 'Solo los expertos.', 'Nadie.'], answer: 0, why: '«Explicó los pasos tan despacio que pudo seguirlos incluso la persona que llegó a mitad de la sesión».' },
              { prompt: '¿Qué pasará con el presupuesto?', options: ['Sigue siendo el mismo.', 'Va a subir.', 'Se reduce a la mitad.'], answer: 0, why: '«El presupuesto sigue siendo el mismo».' },
            ],
            transcript: 'Hola, equipo. Ya tenemos los comentarios de la segunda sesión. Esta vez las instrucciones fueron [[tan claras que|blue]] casi todos empezaron a trabajar sin pedir ayuda. Sin embargo, trajeron [[tantas bicicletas que|teal]] nos faltaron soportes. No fue un problema de número de personas: el grupo era pequeño, pero había varios objetos del mismo tipo. Compartimos los soportes, [[así que|violet]] algunas reparaciones terminaron más tarde. Una voluntaria explicó los pasos [[tan despacio que|blue]] pudo seguirlos incluso la persona que llegó a mitad de la sesión. Para la próxima fecha vamos a preguntar antes qué objeto traerá cada participante. Así podremos calcular mejor los materiales. No hace falta comprar de todo: necesitamos conocer la demanda y distribuir las herramientas que ya tenemos. El presupuesto sigue siendo el mismo.',
            reply: { teacher: 'El alumno responde a Beatriz como si fuera un voluntario: da su opinión con una frase con tan, una con tanto/a/os/as y una con así que.', self: 'Responde a Beatriz como si fueras del equipo. Usa al menos una frase con «tan… que», una con «tanto… que» y una con «así que».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Causas y consecuencias', coach: 'Cuenta qué pasó y por qué.',
      steps: [
        { title: 'Causas y consecuencias', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y repregunta: «¿Y qué pasó entonces?».', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta después.' } },
          { kind: 'talk', cards: [
            { q: 'Recuerda una situación en la que una cantidad o una intensidad te obligó a cambiar un plan.', followUps: ['¿Qué plan tenías?', '¿Qué hiciste al final?', '¿Fue mejor o peor?'], phrases: ['Había [[tanta gente que|teal]]…', 'Hacía [[tanto calor que|teal]]…', 'Era [[tan caro que|blue]]…'], hint: 'Decide qué recibe la intensidad: un nombre (tanto/a), un adjetivo (tan) o un verbo (tanto).', example: 'El verano pasado fuimos a la playa, pero había tanta gente que no encontramos sitio. Hacía tanto calor que nos fuimos a un museo. Al final fue un día muy bonito.', next: 'Ahora, una experiencia muy buena.' },
            { q: '¿Cuál fue la mejor comida, el mejor concierto o el mejor viaje de tu vida? ¿Qué efecto tuvo en ti?', followUps: ['¿Con quién estabas?', '¿Lo repetirías?', '¿Se lo recomendaste a alguien?'], phrases: ['Fue [[tan bueno que|blue]]…', 'Me gustó [[tanto que|orange]]…', 'Me emocioné [[tanto que|orange]]…'], hint: 'Con verbos como gustar, reír, trabajar, «tanto» va después.', example: 'El mejor concierto fue uno de jazz en una sala pequeña. Me gustó tanto que compré todos los discos del grupo. Fue tan especial que todavía lo recuerdo.', next: 'Ahora, un día complicado.' },
            { q: 'Cuéntame un día complicado: ¿qué salió mal y qué pasó como consecuencia?', followUps: ['¿Qué hiciste para solucionarlo?', '¿Alguien te ayudó?', '¿Qué aprendiste?'], phrases: ['…, [[así que|violet]]…', 'Estaba [[tan cansado que|blue]]…', 'Tenía [[tantas cosas que|teal]]…'], hint: 'Une los hechos con «así que» para contar la secuencia: pasó esto, así que…', example: 'Un lunes el autobús no pasó, así que llegué tarde a una reunión. Estaba tan nervioso que olvidé la presentación en casa. Tenía tantas cosas en la cabeza que no podía pensar.', next: 'Hablemos de tu trabajo o tus estudios.', teacher: 'Si el alumno solo usa «así que», pídele que repita una frase añadiendo intensidad con tan o tanto.' },
            { q: '¿Qué cosa de tu trabajo, tus estudios o tu ciudad te parece exagerada? ¿Qué consecuencias tiene?', followUps: ['¿Siempre fue así?', '¿Qué se podría hacer?', '¿Te afecta mucho?'], phrases: ['Hay [[tanto tráfico que|teal]]…', 'Los alquileres son [[tan caros que|blue]]…', 'Trabajamos [[tanto que|orange]]…'], hint: 'Explica el resultado, pero recuerda que a veces hay más de una causa.', example: 'En mi ciudad los alquileres son tan caros que muchos jóvenes viven con sus padres hasta los treinta. Hay tantos turistas en el centro que los vecinos se van a otros barrios.', next: 'Ahora, una diferencia importante.' },
            { q: 'Piensa en un cambio que hiciste: ¿por qué lo hiciste, para qué y qué pasó como consecuencia?', followUps: ['¿Cuál fue la causa principal?', '¿Conseguiste tu objetivo?', '¿Hubo consecuencias inesperadas?'], phrases: ['Lo hice porque…', 'Lo hice para…', '…, [[así que|violet]] ahora…'], hint: 'Separa las tres ideas: causa (porque), finalidad (para) y consecuencia (así que).', example: 'Dejé el auto porque gastaba demasiado en gasolina. Lo hice también para hacer más ejercicio. Ahora voy en bicicleta a todas partes, así que estoy en mejor forma.', next: 'Para terminar, una evaluación.' },
            { q: 'Evalúa una actividad en la que participaste (un taller, una fiesta, un curso). ¿Qué funcionó y qué no?', followUps: ['¿Qué mejorarías?', '¿Fue un problema de cantidad, de espacio o de organización?', '¿Repetirías la experiencia?'], phrases: ['Fue [[tan…|blue]] que…', 'Había [[tantos…|teal]] que…', '…, [[así que|violet]] la próxima vez…'], hint: 'Termina con una mejora que responda al problema: «…, así que la próxima vez…».', example: 'El curso de cocina fue tan divertido que me apunté al siguiente. Pero había tantas personas por grupo que no podíamos cocinar todos. La sala era pequeña, así que la próxima vez haría grupos más reducidos.', teacher: 'Pide al alumno que diga si su análisis culpa a una sola causa o reconoce varias, como hizo el equipo del taller.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor cuenta una anécdota y el alumno pregunta «¿Y qué pasó?», «¿Tanto?», «¿Tan…?».', self: 'Esta semana, cuenta a alguien una anécdota con al menos una frase con «tan… que», una con «tanto… que» y una con «así que».' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Evaluar una actividad', coach: 'Resultados, dificultades y una mejora.',
      steps: [
        { title: 'Evaluar una actividad', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos la forma de tan / tanto en cada frase y si la mejora responde al problema.', self: 'Escribe tu evaluación y toca «Revisar mi texto». Después comprueba la forma de «tan» y «tanto» en cada frase.' } },
          { kind: 'write', title: 'Una evaluación breve', situation: 'Participaste en la organización de una actividad (un taller, una reunión, una fiesta, un viaje de grupo). Escribe una evaluación breve para el equipo.', task: [
            'Explica un **resultado positivo** con «tan… que» o «tanto… que».',
            'Explica una **dificultad** con «tanto/a/os/as + nombre + que».',
            'Añade una **consecuencia** con «así que».',
            'Propón una **mejora** basada en esos datos, sin culpar a una sola causa.',
          ], starters: ['La actividad tuvo…', '… eran tan … que…', 'Sin embargo, había tantos/as … que…', '…, así que…', 'Para la próxima vez propongo…', 'No creo que el problema sea…'],
            words: ['la demanda', 'los materiales', 'las plazas', 'el espacio', 'la organización', 'sin embargo', 'además', 'propongo', 'el problema principal'],
            model: 'El taller tuvo una buena respuesta. Las instrucciones eran [[tan claras que|blue]] la mayoría pudo empezar sin ayuda. Sin embargo, llegaron [[tantas bicicletas que|teal]] no teníamos suficientes soportes para repararlas al mismo tiempo. Compartimos el material, [[así que|violet]] algunas personas terminaron más tarde de lo previsto. Para la próxima sesión propongo preguntar antes qué objeto traerá cada participante. Esa información nos permitirá distribuir mejor las herramientas y organizar turnos. No creo que debamos reducir el grupo todavía: el problema principal fue el tipo de objetos y no la cantidad de asistentes.',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'TAN… QUE', formula: 'tan + adjetivo / adverbio + que', example: 'La sala era tan pequeña que salimos.', caption: 'Una cualidad intensa. Invariable.' },
            { tone: 'teal', label: 'TANTO/A/OS/AS… QUE', formula: 'tanto/a/os/as + nombre + que', example: 'Había tantas personas que salimos.', caption: 'Una cantidad. Concuerda con el nombre.' },
            { tone: 'orange', label: 'VERBO + TANTO QUE', formula: 'verbo + tanto + que', example: 'Trabajamos tanto que terminamos antes.', caption: 'Una acción intensa. Invariable.' },
            { tone: 'violet', label: 'ASÍ QUE', formula: 'hecho, así que + consecuencia', example: 'La sala estaba llena, así que salimos.', caption: 'Un hecho y su resultado, sin intensidad.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Una pregunta', text: '¿Qué recibe la intensidad? Un **adjetivo** o **adverbio**: tan. Un **nombre**: tanto/a/os/as. Un **verbo**: tanto. **Nada**: así que.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'El examen era ___ difícil que nadie terminó a tiempo.', options: ['tan', 'tanto', 'tanta'], answer: 0, why: 'Delante de un adjetivo: «tan».' },
            { prompt: 'Había ___ nieve que cerraron la carretera.', options: ['tanta', 'tanto', 'tan'], answer: 0, why: '«Nieve»: femenino singular.' },
            { prompt: 'Se rieron ___ que les dolía la barriga.', options: ['tanto', 'tan', 'tantos'], answer: 0, why: 'Después del verbo: «tanto».' },
            { prompt: 'No quedaban entradas, ___ vimos la película en casa.', options: ['así que', 'porque', 'para que'], answer: 0, why: '«Así que» introduce la consecuencia.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: completa tres frases sobre la misma situación: «La sala era tan pequeña que salimos», «Había tantas personas que salimos», «La sala estaba llena, así que salimos». Pregunta qué enfoca cada una: la cualidad, la cantidad o la consecuencia de un hecho.' },
        ] },
      ],
    },
  ],
};
