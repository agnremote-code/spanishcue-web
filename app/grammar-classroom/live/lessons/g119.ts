import type { LiveLesson } from '../types';

/**
 * Lesson 119 · C1 · Aspecto y perífrasis.
 * A photographic archive takes shape: Julia coordinates, Andrés and Marta
 * review folders; their progress report runs through every section.
 */
export const lesson: LiveLesson = {
  id: 119,
  level: 'C1',
  title: 'Aspecto y perífrasis',
  subtitle: 'Mostrar cómo avanza una acción: proceso gradual, proceso que viene de antes, estado resultante y progreso acumulado.',
  legend: [
    { tone: 'blue', label: 'Ir + gerundio · avance gradual' },
    { tone: 'teal', label: 'Venir + gerundio · proceso que llega hasta ahora' },
    { tone: 'orange', label: 'Estar + participio · estado resultante' },
    { tone: 'violet', label: 'Tener / llevar / dejar + participio · resultado acumulado' },
  ],
  optionNotes: {
    'revisado': 'Con «haber», el participio no cambia. Con tener, llevar, dejar o estar, concuerda con el nombre.',
    'revisadas': 'Concuerda en femenino plural: correcto con tener, llevar, dejar o estar; no con «haber».',
    'es': 'Para un estado resultante, se usa «estar»: la puerta está cerrada.',
    'Estado': 'Un estado describe cómo está algo ahora, sin contar la acción ni quién la hizo.',
    'Proceso': 'Un proceso muestra la acción por dentro, mientras avanza.',
    'Acumulación': 'La acumulación cuantifica cuánto se ha hecho hasta ahora.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'La acción vista desde dentro', coach: 'No solo qué pasó: cómo avanza, qué deja y cuánto llevamos.',
      steps: [
        { title: 'Ir + gerundio: el avance gradual', blocks: [
          { kind: 'lead', text: 'Una asociación organiza su archivo fotográfico. Julia, la coordinadora, escribe: «**Vamos entendiendo** la historia de cada colección. El equipo **viene revisando** las carpetas desde agosto. **Llevamos revisadas** cuatrocientas imágenes y la sala **está ordenada**». Cuatro maneras de mirar el mismo trabajo.' },
          { kind: 'guide', text: { teacher: 'Antes de la teoría, pregunta: «¿Qué dice cada frase sobre el trabajo: que avanza, que viene de antes, cuánto se ha hecho o cómo está ahora?».', self: 'Antes de seguir, piensa qué dice cada frase de Julia: ¿avance, continuidad desde antes, cantidad o estado actual?' } },
          { kind: 'concept', tone: 'blue', label: 'IR + GERUNDIO', question: '¿Cómo avanza?',
            formula: ['ir (voy, vas, va…) + gerundio'],
            meaning: 'Presenta una acción que **avanza poco a poco**, por etapas. Suele combinarse con expresiones de progresión: **poco a poco**, **cada vez más**, **a medida que**. No indica movimiento físico.',
            examples: [
              { es: '[[Vamos entendiendo|blue]] mejor la historia de cada colección.' },
              { es: 'A medida que comparan documentos, [[van descubriendo|blue]] errores.' },
              { es: 'El público [[fue llenando|blue]] la sala durante la tarde.' },
              { es: '[[Iré enviando|blue]] los archivos según los tenga.' },
            ],
            note: '«Voy entendiendo» ≠ «Entiendo»: la perífrasis muestra el proceso por dentro, todavía incompleto.' },
          { kind: 'table', title: 'Perífrasis de gerundio para el proceso', head: ['Perífrasis', 'Perspectiva', 'Ejemplo'], rows: [
            ['[[ir|blue]] + gerundio', 'avance gradual, por etapas', 'Voy entendiendo el problema.'],
            ['[[venir|teal]] + gerundio', 'proceso que empezó antes y llega hasta ahora', 'La situación viene mejorando.'],
            ['andar + gerundio', 'actividad repetida, dispersa; a menudo con valoración', 'Anda diciendo que se va.'],
            ['llevar + tiempo + gerundio', 'duración de un proceso hasta ahora', 'Llevamos tres meses revisando.'],
          ], note: 'Recuerda los gerundios irregulares: **yendo, leyendo, diciendo, durmiendo, pidiendo, viniendo**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El equipo comprende cada vez mejor la colección. ¿Qué frase enfoca ese avance gradual?', options: ['El equipo va entendiendo la historia de la colección.', 'El equipo acabó por entender la historia de la colección.', 'El equipo tiene comprendida la historia de la colección.'], answer: 0, why: 'Ir + gerundio presenta el avance gradual. «Acabar por» enfoca el desenlace; «tener + participio», un resultado disponible.' },
            { prompt: '«Iré enviando los archivos» significa…', options: ['Que los enviaré poco a poco, por partes.', 'Que voy a ir a algún lugar a enviarlos.', 'Que ya los envié todos.'], answer: 0, why: '«Ir + gerundio» en futuro: el envío avanzará por etapas.' },
          ] },
        ] },
        { title: 'Venir + gerundio: el proceso que llega hasta ahora', mascot: '/brand/mascot/studying.webp', coach: 'Empezó antes y sigue hasta este momento.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VENIR + GERUNDIO', question: '¿Desde cuándo?',
            formula: ['venir (vengo, vienes, viene…) + gerundio', 'frecuente con: desde, desde hace, en los últimos…'],
            meaning: 'Conecta un proceso que **empezó en un tramo anterior** con el **momento de referencia** (normalmente, ahora). A menudo se usa para hechos repetidos o persistentes y para justificar una situación presente.',
            examples: [
              { es: 'El equipo [[viene revisando|teal]] las carpetas desde agosto.' },
              { es: 'La situación [[viene mejorando|teal]] en los últimos meses.' },
              { es: 'Te [[vengo diciendo|teal]] desde hace semanas que falta un dato.' },
              { es: 'Los precios [[venían subiendo|teal]] antes de la crisis.' },
            ],
            note: '«Te vengo diciendo» añade un matiz de insistencia: lo he dicho varias veces y hasta ahora.' },
          { kind: 'compare', title: 'Ir y venir: dos miradas al proceso', columns: [
            { tone: 'blue', label: 'IR + GERUNDIO', sentence: 'Vamos [[entendiendo|blue]] las fechas.', idea: 'Mira **hacia delante**: el avance progresa por etapas.' },
            { tone: 'teal', label: 'VENIR + GERUNDIO', sentence: 'Venimos [[comparando|teal]] catálogos desde agosto.', idea: 'Mira **hacia atrás**: el proceso viene de antes y llega hasta hoy.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Viene revisando las carpetas desde agosto» presenta…', options: ['una revisión futura sin empezar.', 'un proceso anterior conectado con ahora.', 'solo un resultado completo, sin proceso.'], answer: 1, why: 'Venir + gerundio conecta el proceso iniciado antes con el momento de referencia.' },
            { prompt: 'Las ventas suben desde enero y siguen subiendo. ¿Qué frase lo expresa mejor?', options: ['Las ventas vienen subiendo desde enero.', 'Las ventas van a subir desde enero.', 'Las ventas están subidas desde enero.'], answer: 0, why: 'Un proceso iniciado en enero que llega hasta hoy.' },
          ] },
        ] },
        { title: 'Estar + participio: el estado resultante', mascot: '/brand/mascot/speaking.webp', coach: 'La acción termina; el estado permanece.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ESTAR + PARTICIPIO', question: '¿Cómo está ahora?',
            formula: ['acción: han + participio (invariable)', 'estado: estar + participio (concordado)'],
            meaning: '«Han ordenado la sala» cuenta una **acción** (con agentes implícitos). «La sala **está ordenada**» describe el **estado** que resultó. El participio **concuerda** con el nombre, y el estado **no dice** quién actuó ni cuándo.',
            examples: [
              { es: 'Cerraron la puerta. → La puerta [[está cerrada|orange]].' },
              { es: 'Organizaron los archivos. → Los archivos [[están organizados|orange]].' },
              { es: 'Han resuelto el problema. → El problema [[está resuelto|orange]].' },
              { es: 'Clasificaron las fotos. → Las fotos [[están clasificadas|orange]].' },
            ] },
          { kind: 'tip', icon: '⚠', title: 'Un estado no es un balance completo', text: 'Decir que las fotos **están clasificadas** no significa que se hayan **comprobado** todos sus datos. Un informe honesto separa la acción realizada, el estado disponible y lo que todavía falta.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué informa «La sala está ordenada» por sí sola?', options: ['Quién ordenó y cuánto tardó.', 'Un estado disponible, sin identificar al agente.', 'Que nadie la ordenó.'], answer: 1, why: 'Estar + participio enfoca el estado; para contar el evento y el agente se necesita otra formulación.' },
            { prompt: 'El equipo organizó las carpetas. Descríbelo como estado: Las carpetas ___.', options: ['están organizadas', 'son organizadas', 'han organizadas'], answer: 0, why: 'Estar + participio concordado (femenino plural).' },
          ] },
        ] },
        { title: 'Tener, llevar, dejar + participio', mascot: '/autoestudio/mascot/noting.webp', coach: 'Resultados que se acumulan y quedan disponibles.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'TENER · LLEVAR · DEJAR + PARTICIPIO', question: '¿Qué resultado queda?',
            formula: ['tener + participio → resultado disponible', 'llevar + cantidad + participio → progreso acumulado', 'dejar + participio → estado que produce una acción'],
            meaning: 'Estas perífrasis conservan la **huella** de una acción. **Tener** presenta un resultado listo o bajo control; **llevar** cuantifica cuánto se ha hecho **hasta ahora** (y sugiere que el proceso continúa); **dejar** enfoca el estado en que una acción deja algo. En las tres, el participio **concuerda** con el objeto.',
            examples: [
              { es: '[[Tengo preparada|violet]] una lista de dudas.' },
              { es: '[[Llevamos revisadas|violet]] cuatrocientas imágenes.' },
              { es: 'La última sesión [[dejó resueltos|violet]] varios problemas de nombres.' },
              { es: '[[Llevo leídos|violet]] cuatro capítulos del informe.' },
            ] },
          { kind: 'table', title: 'Haber frente a tener y llevar: la concordancia', head: ['Construcción', 'Participio', 'Ejemplo'], rows: [
            ['haber + participio', 'invariable', 'He **revisado** cincuenta fotos.'],
            ['tener + participio', 'concuerda con el objeto', 'Tengo **revisadas** cincuenta fotos.'],
            ['llevar + participio', 'concuerda con el objeto', 'Llevo **revisadas** cincuenta fotos.'],
            ['dejar + participio', 'concuerda con el objeto', 'Marta dejó **resueltas** las dudas.'],
            ['estar + participio', 'concuerda con el sujeto', 'Las fotos están **revisadas**.'],
          ], note: '«Llevo revisadas cincuenta» implica que sigo revisando; «He revisado cincuenta» solo informa de lo hecho.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'En «Llevo revisadas cincuenta fotos», «revisadas» expresa…', options: ['un participio invariable porque aparece «llevar».', 'un hábito sin cantidad acumulada.', 'un resultado acumulado que concuerda con «fotos».'], answer: 2, why: 'Llevar + participio cuantifica el progreso y el participio concuerda con fotos.' },
            { prompt: 'Tengo ___ la presentación para mañana.', options: ['preparado', 'preparada', 'preparados'], answer: 1, why: 'Tener + participio: concuerda con «la presentación».' },
            { prompt: 'He ___ las tres cartas.', options: ['escrito', 'escritas', 'escrita'], answer: 0, why: 'Con «haber», el participio es invariable.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Qué quieres que vea tu lector?', blocks: [
          { kind: 'decide', title: 'Antes de redactar un informe de avance, decide qué perspectiva necesitas', steps: [
            { q: '¿El proceso progresa por etapas, hacia delante?', yes: 'Usa **ir + gerundio**: «[[Vamos entendiendo|blue]] las fechas».', no: 'next' },
            { q: '¿El proceso empezó antes y llega hasta ahora?', yes: 'Usa **venir + gerundio**: «[[Venimos comparando|teal]] catálogos desde agosto».', no: 'next' },
            { q: '¿Quieres cuantificar lo hecho o presentar un resultado listo?', yes: 'Usa **llevar** (cantidad) o **tener** (disponible): «[[Llevo revisadas|violet]] cincuenta fotos», «[[Tengo preparada|violet]] la tabla».', no: 'Describe el **estado**: «La sala [[está ordenada|orange]]».' },
          ] },
          { kind: 'tip', icon: '📊', title: 'Un informe sin trampas', text: 'Combina perspectivas sin confundirlas: «**Llevo revisadas** cincuenta fotos, pero solo treinta **están clasificadas** definitivamente». Cada perífrasis responde a una pregunta distinta del lector.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Concordancia y perspectiva: aquí fallan hasta los nativos.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que identifique si el problema es de concordancia, de auxiliar o de perspectiva antes de mostrar la corrección.', self: 'Lee cada frase y decide: ¿falla la concordancia, el auxiliar o la perspectiva? Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Llevo revisado cincuenta fotos.', right: 'Llevo revisadas cincuenta fotos.', why: 'Con «llevar», el participio concuerda con el objeto.' },
            { wrong: 'He revisadas todas las carpetas.', right: 'He revisado todas las carpetas.', why: 'Con «haber», el participio es invariable.' },
            { wrong: 'La puerta es cerrada.', right: 'La puerta está cerrada.', why: 'Un estado resultante se expresa con «estar».' },
            { wrong: 'Marta dejó resuelto las dudas.', right: 'Marta dejó resueltas las dudas.', why: 'Con «dejar», el participio concuerda: dudas → resueltas.' },
            { wrong: 'Voy a entendiendo mejor el tema.', right: 'Voy entendiendo mejor el tema.', why: '«Ir + gerundio» no lleva «a». «Ir a + infinitivo» es otra perífrasis (futuro).' },
            { wrong: 'Las fotos están clasificadas, así que el archivo está completo.', right: 'Las fotos están clasificadas, pero faltan datos por comprobar.', why: 'Un estado parcial no equivale a un trabajo terminado.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno un minibalance oral de un proyecto suyo con las cuatro perspectivas: algo que va mejorando, algo que viene haciendo, algo que tiene listo y cuánto lleva hecho.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El avance en contexto', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Reunión en el archivo', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica qué perspectiva aporta y, si hay participio, con qué concuerda.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Balance del mes', setting: 'Julia coordina el archivo fotográfico de la asociación. Se reúne con Andrés y Marta.', lines: [
            { who: 'Julia', text: 'Bueno, ¿cómo vamos con el archivo?' },
            { who: 'Andrés', text: 'Bien. [[Venimos comparando|teal]] catálogos desde agosto y [[vamos entendiendo|blue]] mejor las fechas.' },
            { who: 'Julia', text: '¿Cuántas imágenes llevan?' },
            { who: 'Andrés', text: 'Yo [[llevo revisadas|violet]] cincuenta de la carpeta nueva.' },
            { who: 'Julia', text: '¿Y están todas clasificadas?' },
            { who: 'Andrés', text: 'No, solo treinta [[están clasificadas|orange]] de forma definitiva.' },
            { who: 'Marta', text: 'Yo [[tengo preparada|violet]] una tabla con las diferencias entre catálogos.' },
            { who: 'Julia', text: '¡Genial! ¿Y los nombres duplicados?' },
            { who: 'Marta', text: 'La sesión del martes [[dejó resueltas|violet]] casi todas las dudas.' },
            { who: 'Julia', text: 'Entonces, ¿podemos decir que el archivo está terminado?' },
            { who: 'Andrés', text: 'Todavía no. La sala [[está ordenada|orange]], pero faltan datos de algunos lugares.' },
            { who: 'Julia', text: 'De acuerdo. Mejor terminar lo pendiente antes de seguir abriendo carpetas.' },
          ], notes: {
            'Venimos comparando': '**Venir + gerundio**: el proceso empezó en agosto y llega hasta hoy.',
            'vamos entendiendo': '**Ir + gerundio**: la comprensión avanza poco a poco, por etapas.',
            'llevo revisadas': '**Llevar + participio**: cuantifica lo hecho hasta ahora. «Revisadas» concuerda con «imágenes».',
            'están clasificadas': '**Estar + participio**: el estado de treinta imágenes. No es lo mismo que «revisadas».',
            'tengo preparada': '**Tener + participio**: un resultado disponible. «Preparada» concuerda con «tabla».',
            'dejó resueltas': '**Dejar + participio**: el estado que produjo la sesión. «Resueltas» concuerda con «dudas».',
            'está ordenada': '**Estado** de la sala. No basta para decir que el archivo esté completo.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Cuántas fotos están clasificadas de forma definitiva?', options: ['Cincuenta.', 'Treinta.', 'Cuatrocientas.'], answer: 1, why: '«Solo treinta están clasificadas de forma definitiva».' },
            { prompt: '¿Por qué el archivo no está terminado?', options: ['Faltan datos de algunos lugares.', 'La sala no está ordenada.', 'Marta no tiene la tabla.'], answer: 0, why: '«La sala está ordenada, pero faltan datos de algunos lugares».' },
          ] },
        ] },
        { title: 'Una reforma en casa', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'explore', title: 'La obra en casa de Elena', setting: 'Elena le enseña a su amigo Óscar cómo va la reforma de su casa.', lines: [
            { who: 'Óscar', text: '¡Cuánto ha cambiado esto! ¿Cuándo empezaron?' },
            { who: 'Elena', text: 'En marzo. [[Venimos trabajando|teal]] los fines de semana desde entonces.' },
            { who: 'Óscar', text: 'La cocina [[va quedando|blue]] muy bonita.' },
            { who: 'Elena', text: 'Sí, poco a poco. Ya [[llevamos pintadas|violet]] tres habitaciones.' },
            { who: 'Óscar', text: '¿Y el baño?' },
            { who: 'Elena', text: 'El baño [[está terminado|orange]]. El técnico [[dejó instalada|violet]] la ducha el lunes.' },
            { who: 'Óscar', text: '¿Y los muebles de la cocina?' },
            { who: 'Elena', text: '[[Tengo elegidos|violet]] los armarios, pero todavía no los he comprado.' },
            { who: 'Óscar', text: 'Mi hermano [[anda buscando|blue]] una casa para reformar. Le diré que te llame.' },
          ], notes: {
            'Venimos trabajando': '**Venir + gerundio**: el trabajo empezó en marzo y llega hasta ahora.',
            'va quedando': '**Ir + gerundio**: el resultado mejora poco a poco.',
            'llevamos pintadas': '**Llevar + participio**: tres habitaciones hechas hasta ahora; la obra continúa. Concuerda con «habitaciones».',
            'está terminado': '**Estado resultante** del baño.',
            'dejó instalada': '**Dejar + participio**: el estado en que el técnico dejó la ducha.',
            'Tengo elegidos': '**Tener + participio**: una decisión disponible, aunque la compra no se ha hecho. Concuerda con «armarios».',
            'anda buscando': '**Andar + gerundio**: una actividad que se repite de forma dispersa, sin un plan fijo.',
          } },
          { kind: 'teacher', text: 'Pregunta al alumno por un proyecto real en marcha (una mudanza, un curso, una obra) y pide un balance con al menos tres de las perífrasis.' },
        ] },
        { title: '¿Proceso, estado o acumulación?', blocks: [
          { kind: 'classify', title: 'Clasifica según la perspectiva', categories: [
            { id: 'proceso', label: 'Proceso en marcha', tone: 'blue' },
            { id: 'estado', label: 'Estado resultante', tone: 'orange' },
            { id: 'acumulado', label: 'Resultado acumulado o disponible', tone: 'violet' },
          ], items: [
            { text: 'Vamos entendiendo mejor las fechas.', answer: 'proceso', why: 'Ir + gerundio: avance gradual.' },
            { text: 'La sala está ordenada.', answer: 'estado', why: 'Estar + participio: estado.' },
            { text: 'Llevo revisadas cincuenta fotos.', answer: 'acumulado', why: 'Llevar + participio: cantidad acumulada.' },
            { text: 'Venimos trabajando los fines de semana.', answer: 'proceso', why: 'Venir + gerundio: proceso que llega hasta ahora.' },
            { text: 'El baño está terminado.', answer: 'estado', why: 'Estar + participio.' },
            { text: 'Tengo elegidos los armarios.', answer: 'acumulado', why: 'Tener + participio: resultado disponible.' },
            { text: 'La sesión dejó resueltas las dudas.', answer: 'acumulado', why: 'Dejar + participio: la huella de una acción.' },
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
            { context: 'Tu español mejora poco a poco, semana a semana.', prompt: '___ mejorando mi pronunciación.', options: ['Voy', 'Llevo', 'Tengo'], answer: 0, why: 'Avance gradual: ir + gerundio.' },
            { context: 'Desde hace meses, tu vecino hace ruido por la noche, y sigue.', prompt: 'Mi vecino ___ haciendo ruido desde hace meses.', options: ['viene', 'va a', 'tiene'], answer: 0, why: 'Proceso que empezó antes y llega hasta hoy: venir + gerundio.' },
            { context: 'Has leído cuatro capítulos y sigues leyendo.', prompt: 'Llevo ___ cuatro capítulos.', options: ['leído', 'leídos', 'leídas'], answer: 1, why: 'Llevar + participio concordado: capítulos → leídos.' },
            { context: 'La presentación está lista para mañana.', prompt: 'Tengo ___ la presentación.', options: ['terminado', 'terminada', 'terminando'], answer: 1, why: 'Tener + participio: concuerda con «presentación».' },
            { context: 'Alguien cerró la tienda. Describes cómo la ves ahora.', prompt: 'La tienda ___ cerrada.', options: ['es', 'está', 'ha'], answer: 1, why: 'Estado resultante: estar + participio.' },
            { context: 'Informas solo de lo que hiciste, sin sugerir que sigues.', prompt: '___ revisado veinte fotos.', options: ['He', 'Llevo', 'Tengo'], answer: 0, why: '«He revisado» informa de lo hecho; «llevo» sugeriría que el proceso continúa (y pediría «revisadas»).' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Llevo revisadas veinte fotos» frente a «Las fotos están revisadas». ¿Qué diferencia hay?', options: ['La primera cuantifica mi avance; la segunda describe el estado del conjunto.', 'Son equivalentes.', 'La primera es un estado; la segunda, un proceso.'], answer: 0, why: '«Llevar» cuantifica lo acumulado; «estar» describe el estado.' },
            { prompt: '«Han limpiado la habitación» y «La habitación está limpia». ¿Qué informa solo la primera?', options: ['Que hubo una acción realizada por alguien.', 'Cómo está la habitación ahora.', 'Que la habitación sigue sucia.'], answer: 0, why: 'La primera cuenta el evento; la segunda, el estado resultante.' },
            { prompt: '«Vamos entendiendo» y «Venimos entendiendo». ¿Cuál mira hacia atrás, hacia un tramo anterior?', options: ['Venimos entendiendo.', 'Vamos entendiendo.'], answer: 0, why: 'Venir conecta el proceso anterior con ahora; ir mira el avance hacia delante.' },
            { prompt: '«Tengo elegidos los armarios, pero no los he comprado.» ¿Es coherente?', options: ['Sí: la elección está disponible; la compra es otra acción.', 'No: si los tienes elegidos, los compraste.'], answer: 0, why: '«Tener + participio» presenta el resultado de elegir, no de comprar.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Mensajes del equipo', lines: [
            { who: 'Julia', text: 'Andrés, ¿cómo va la revisión?' },
            { who: 'Andrés', text: 'Bien. ___ revisadas sesenta fotos.', options: ['Llevo', 'He', 'Estoy'], answer: 0, why: '«Llevo revisadas»: cantidad acumulada con participio concordado.' },
            { who: 'Julia', text: '¿Y Marta?' },
            { who: 'Andrés', text: 'Tiene ___ la tabla de diferencias.', options: ['preparado', 'preparada', 'preparando'], answer: 1, why: 'Tener + participio: tabla → preparada.' },
            { who: 'Julia', text: '¿La sala ya ___ ordenada?', options: ['está', 'es', 'ha'], answer: 0, why: 'Estado resultante: estar.' },
            { who: 'Andrés', text: 'Sí. Y ___ entendiendo poco a poco la historia de cada colección.', options: ['vamos', 'llevamos', 'tenemos'], answer: 0, why: 'Avance gradual: ir + gerundio.' },
            { who: 'Julia', text: 'Perfecto. Me lo ___ diciendo desde hace semanas: hay que ir más despacio.', options: ['vienes', 'tienes', 'llevas'], answer: 0, why: '«Venir diciendo»: lo has dicho repetidamente hasta ahora.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Tengo hecho los ejercicios.', ok: false, options: ['Tengo hechos los ejercicios.', 'He hechos los ejercicios.', 'Tengo hacer los ejercicios.'], answer: 0, why: 'Tener + participio concordado: ejercicios → hechos.' },
            { sentence: 'Los precios vienen subiendo desde enero.', ok: true, why: 'Correcta: venir + gerundio.' },
            { sentence: 'He escritas tres cartas.', ok: false, options: ['He escrito tres cartas.', 'He escrita tres cartas.', 'Estoy escrito tres cartas.'], answer: 0, why: 'Con «haber», participio invariable.' },
            { sentence: 'La ventana es abierta.', ok: false, options: ['La ventana está abierta.', 'La ventana ha abierta.', 'La ventana lleva abierta.'], answer: 0, why: 'Estado resultante: estar + participio.' },
            { sentence: 'Llevamos pintadas tres habitaciones.', ok: true, why: 'Correcta: llevar + participio concordado.' },
            { sentence: 'Voy a mejorando poco a poco.', ok: false, options: ['Voy mejorando poco a poco.', 'Voy a mejoro poco a poco.', 'Vengo a mejorando poco a poco.'], answer: 0, why: 'Ir + gerundio, sin «a».' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Llevo', 'revisadas', 'cincuenta', 'fotos'], accept: ['Llevo revisadas cincuenta fotos'] },
            { tiles: ['El', 'equipo', 'viene', 'revisando', 'las', 'carpetas', 'desde', 'agosto'], accept: ['El equipo viene revisando las carpetas desde agosto', 'Desde agosto el equipo viene revisando las carpetas'] },
            { tiles: ['Tengo', 'preparada', 'una', 'lista', 'de', 'dudas'], accept: ['Tengo preparada una lista de dudas'] },
            { tiles: ['Vamos', 'entendiendo', 'mejor', 'las', 'fechas'], accept: ['Vamos entendiendo mejor las fechas'] },
          ] },
        ] },
        { title: 'Escribe la misma idea de otra forma', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'El equipo organizó las carpetas.', instruction: 'Describe el estado resultante con «estar».', accept: ['Las carpetas están organizadas'] },
            { prompt: 'Ya revisé veinte imágenes (y sigo).', instruction: 'Usa «llevar» + participio.', accept: ['Llevo revisadas veinte imágenes', 'Ya llevo revisadas veinte imágenes'] },
            { prompt: 'Preparé una tabla y la tengo lista.', instruction: 'Usa «tener» + participio.', accept: ['Tengo preparada una tabla', 'Tengo una tabla preparada', 'Tengo preparada la tabla'] },
            { prompt: 'Cada día comprendo un poco más el problema.', instruction: 'Usa «ir» + gerundio.', accept: ['Voy comprendiendo el problema', 'Voy entendiendo el problema', 'Cada día voy comprendiendo un poco más el problema', 'Voy comprendiendo cada día un poco más el problema'] },
            { prompt: 'La sesión resolvió las dudas y quedaron así.', instruction: 'Usa «dejar» + participio.', accept: ['La sesión dejó resueltas las dudas'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una actualización desde el archivo', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una actualización desde el archivo', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno separa en tres columnas: proceso, estado y cantidad acumulada.', self: 'Escucha una vez para la idea general. En la segunda, anota en tres columnas: proceso, estado y cantidad acumulada. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Andrés informa a Julia', channel: 'NOTA DE VOZ · ARCHIVO FOTOGRÁFICO', src: '/audio/grammar-classroom/119.mp3',
            before: 'Andrés deja una nota de voz a Julia con el avance de la semana. ¿Crees que va a decir que el archivo está terminado?',
            gist: { prompt: '¿Qué propone Andrés?', options: ['Dedicar la próxima sesión a confirmar datos pendientes antes de abrir más carpetas.', 'Abrir todas las carpetas nuevas cuanto antes.', 'Dar el archivo por terminado.'], answer: 0, why: '«Propongo dedicar la próxima sesión a los datos pendientes en lugar de seguir abriendo carpetas».' },
            details: [
              { prompt: '¿Desde cuándo compara catálogos el equipo?', options: ['Desde agosto.', 'Desde esta semana.', 'Desde el viernes.'], answer: 0, why: '«El equipo viene comparando catálogos desde agosto».' },
              { prompt: '¿Qué dos cifras distingue?', options: ['Cincuenta revisadas y treinta clasificadas definitivamente.', 'Treinta revisadas y cincuenta clasificadas.', 'Cincuenta carpetas y treinta lugares.'], answer: 0, why: '«Llevo revisadas cincuenta fotos…, pero solo treinta están clasificadas de forma definitiva».' },
              { prompt: '¿Qué dejó resuelto Marta?', options: ['Las dudas sobre los nombres.', 'Los dos lugares.', 'La tabla.'], answer: 0, why: '«Marta dejó resueltas las dudas sobre los nombres».' },
              { prompt: '¿Qué falta confirmar?', options: ['Dos lugares.', 'Las fechas.', 'Los nombres.'], answer: 0, why: '«Todavía falta confirmar dos lugares».' },
              { prompt: '«La sala está ordenada.» ¿Qué advierte Andrés sobre esa frase?', options: ['Que no significa que el archivo esté completo.', 'Que la sala no está lista.', 'Que nadie la ordenó.'], answer: 0, why: '«Eso facilita el trabajo, pero no significa que el archivo esté completo».' },
            ],
            transcript: 'Hola, Julia. Esta semana [[vamos entendiendo|blue]] mejor las fechas de las primeras exposiciones. El equipo [[viene comparando|teal]] catálogos desde agosto y ahora [[tenemos preparada|violet]] una tabla con las diferencias. [[Llevo revisadas|violet]] cincuenta fotos de la carpeta nueva, pero solo treinta [[están clasificadas|orange]] de forma definitiva. No quiero que el informe presente ambas cifras como equivalentes. Marta [[dejó resueltas|violet]] las dudas sobre los nombres, aunque todavía falta confirmar dos lugares. La sala [[está ordenada|orange]] y podemos recibir a las personas que traerán información. Eso facilita el trabajo, pero no significa que el archivo esté completo. Propongo dedicar la próxima sesión a los datos pendientes en lugar de seguir abriendo carpetas. Así lo acumulado se convierte en un resultado fiable y no solo en una cifra grande. Enviaré la tabla esta tarde y marcaré claramente qué está comprobado, qué seguimos revisando y qué queda preparado para la entrevista del viernes. Gracias por coordinarlo.',
            reply: { teacher: 'El alumno responde como Julia: acepta la propuesta y resume el estado del archivo distinguiendo proceso, estado y cantidad acumulada.', self: 'Responde a Andrés como si fueras Julia. Resume el avance con al menos tres perífrasis distintas y decide qué hacer en la próxima sesión.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus proyectos en marcha', coach: 'Cuenta cómo avanzan, no solo qué hiciste.',
      steps: [
        { title: 'Tus proyectos en marcha', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Cuando el alumno dé una cifra o un estado, interprétalo como trabajo terminado para que tenga que precisar el alcance.', self: 'Responde cada pregunta en voz alta, como en una conversación. Después revisa: ¿concuerdan tus participios con tener, llevar y dejar?' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo describirías un proyecto tuyo que mejora poco a poco?', followUps: ['¿Desde cuándo trabajas en él?', '¿Qué parte avanza más rápido?', '¿Qué te falta?'], phrases: ['[[Voy mejorando|blue]]…', '[[Vengo trabajando|teal]] en esto desde…', 'Poco a poco [[va tomando forma|blue]].'], hint: 'Combina ir + gerundio (avance) y venir + gerundio (desde cuándo).', example: 'Vengo trabajando en una novela desde hace dos años. Al principio no sabía hacia dónde iba, pero poco a poco va tomando forma. Voy entendiendo mejor a los personajes.', next: 'Hablemos de cifras.' },
            { q: 'Piensa en algo que estás haciendo y que se puede contar: libros, kilómetros, clases. ¿Cuánto llevas?', followUps: ['¿Cuál es tu objetivo?', '¿Es mucho o poco para ti?', '¿Qué significa realmente esa cifra?'], phrases: ['[[Llevo leídos|violet]]… libros este año.', '[[Llevamos hechas|violet]]…', 'Mi objetivo es…'], hint: 'Cuidado con la concordancia: llevo leídos (libros), llevo corridas (carreras).', example: 'Este año llevo leídos doce libros; mi objetivo son veinte. También llevo corridos unos trescientos kilómetros, aunque la cifra engaña: casi todo fue en verano.', next: 'Ahora, lo que tienes listo.', teacher: 'Si el alumno dice «llevo leído doce libros», repite con énfasis: «¿Llevas leídos…?».' },
            { q: '¿Qué tienes ya preparado para la semana que viene o para tus próximas vacaciones?', followUps: ['¿Qué te falta por preparar?', '¿Eres de los que lo tienen todo organizado?', '¿Qué dejaste resuelto antes de salir de vacaciones la última vez?'], phrases: ['[[Tengo reservado|violet]] el hotel…', '[[Tengo compradas|violet]] las entradas…', 'Antes de irme, [[dejé resueltas|violet]]…'], hint: 'Con «tener» presentas lo que ya está disponible; con «dejar», cómo quedó algo después de una acción.', example: 'Tengo reservado el hotel y compradas las entradas del museo, pero todavía no tengo decidida la ruta. Antes de irme, siempre dejo resueltas las facturas.', next: 'Ahora, estados y acciones.' },
            { q: 'Piensa en tu casa o tu lugar de trabajo ahora mismo. ¿Cómo está? ¿Qué se hizo para que esté así?', followUps: ['¿Quién lo hizo?', '¿Está todo terminado?', '¿Qué estado te gustaría cambiar?'], phrases: ['La cocina [[está ordenada|orange]], porque…', 'Mi escritorio [[está lleno de|orange]]…', 'Lo ordené yo / Lo ordenaron…'], hint: 'Distingue el estado (está ordenada) de la acción (la ordené yo ayer).', example: 'Mi escritorio está ordenado porque lo ordené ayer, pero el armario sigue lleno de cajas. La pared está pintada desde la primavera; la pintamos mi pareja y yo.', next: 'Hablemos de cambios lentos.' },
            { q: '¿Qué viene cambiando en tu ciudad o en tu profesión en los últimos años?', followUps: ['¿Te parece un cambio positivo?', '¿Va a más o va a menos?', '¿Cómo te afecta a ti?'], phrases: ['[[Viene creciendo|teal]]…', 'Cada vez [[van desapareciendo|blue]]…', 'Los precios [[vienen subiendo|teal]]…'], hint: 'Usa venir + gerundio para la tendencia y ir + gerundio para lo que avanza ahora.', example: 'En mi ciudad vienen subiendo mucho los alquileres desde la pandemia. Las tiendas pequeñas van desapareciendo y las cadenas van ocupando el centro.', next: 'Para terminar, un balance personal.' },
            { q: 'Haz un balance honesto de tu español: ¿qué vas dominando, qué llevas aprendido y qué todavía no está consolidado?', followUps: ['¿Desde cuándo vienes estudiando?', '¿Qué tienes ya automatizado?', '¿Qué cifra te sirve para medir tu avance?'], phrases: ['[[Voy dominando|blue]]…', '[[Llevo estudiadas|violet]]…', 'Todavía no [[está consolidado|orange]]…'], hint: 'Usa las cuatro perspectivas y no presentes una cifra como si fuera dominio completo.', example: 'Vengo estudiando español desde hace seis años. Voy dominando el subjuntivo, y tengo bastante automatizados los tiempos del pasado. Llevo leídas varias novelas, pero el registro formal todavía no está consolidado.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno pregunta al profesor por un proyecto suyo y le pide precisiones: «¿Cuánto llevas hecho? ¿Qué tienes listo? ¿Está terminado?».', self: 'Escribe un balance de cinco líneas de un proyecto personal usando ir, venir, estar, tener y llevar. Revisa la concordancia de cada participio.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un informe de avance', coach: 'Proceso, estado y cifra: cada cosa en su lugar.',
      steps: [
        { title: 'Un informe de avance', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después comprueben juntos que el informe no presenta un avance parcial como si fuera completo.', self: 'Escribe tu informe y toca «Revisar mi texto». Después comprueba la concordancia de cada participio con tener, llevar, dejar y estar.' } },
          { kind: 'write', title: 'Informe para tu equipo', situation: 'Coordinas un proyecto (un archivo, una mudanza, un curso, una investigación o una obra) y escribes un informe de avance para tu equipo o tu responsable.', task: [
            'Describe un **proceso gradual** (ir + gerundio) y uno que **viene de antes** (venir + gerundio).',
            'Cuantifica lo hecho con **llevar** + participio y presenta un resultado disponible con **tener** + participio.',
            'Describe un **estado** con estar + participio y aclara qué **no** significa ese estado.',
            'Propón el siguiente paso y justifica por qué conviene antes que seguir acumulando.',
          ], starters: ['El equipo viene… desde…', 'Poco a poco vamos…', 'Llevamos… y tenemos…', '…está…, pero eso no significa que…', 'Propongo…, porque…'],
            words: ['a medida que', 'desde', 'poco a poco', 'de forma definitiva', 'pendiente', 'fiable', 'sin embargo', 'por ahora'],
            model: 'El equipo [[viene revisando|teal]] el archivo desde agosto y [[va entendiendo|blue]] mejor la historia de las colecciones. [[Tenemos preparada|violet]] una tabla con las diferencias entre catálogos y [[llevamos revisadas|violet]] cuatrocientas fotografías. Sin embargo, solo una parte [[está clasificada|orange]] definitivamente. La última sesión [[dejó resueltas|violet]] las dudas sobre los nombres, pero faltan datos de algunos lugares. La sala [[está ordenada|orange]] para recibir a los colaboradores. Propongo dedicar la próxima sesión a confirmar lo pendiente antes de abrir nuevas carpetas. Así el informe distinguirá cantidad revisada, resultado disponible y trabajo todavía en proceso, sin presentar un avance parcial como si el archivo estuviera completo.',
            minWords: 130 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'IR + GERUNDIO', formula: 'voy / vamos + gerundio', example: 'Vamos entendiendo las fechas.', caption: 'Avance gradual, hacia delante.' },
            { tone: 'teal', label: 'VENIR + GERUNDIO', formula: 'vengo / viene + gerundio', example: 'Viene revisando desde agosto.', caption: 'Proceso que llega hasta ahora.' },
            { tone: 'orange', label: 'ESTAR + PARTICIPIO', formula: 'está + participio concordado', example: 'La sala está ordenada.', caption: 'Estado, sin agente ni balance.' },
            { tone: 'violet', label: 'TENER · LLEVAR · DEJAR', formula: '+ participio concordado', example: 'Llevo revisadas cincuenta fotos.', caption: 'Huella acumulada o disponible.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La prueba de la concordancia', text: 'Con **haber**, el participio no cambia: «he revisado las fotos». Con **tener, llevar, dejar y estar**, concuerda: «llevo revisad**as** las fotos», «las fotos están revisad**as**».' },
        ] },
        { title: 'Desafío final', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Llevamos ___ veinte entrevistas.', options: ['hecho', 'hechas', 'haciendo de'], answer: 1, why: 'Llevar + participio concordado: entrevistas → hechas.' },
            { prompt: 'Desde hace años, la empresa ___ perdiendo clientes.', options: ['viene', 'tiene', 'deja'], answer: 0, why: 'Proceso anterior que llega hasta ahora: venir + gerundio.' },
            { prompt: 'Ya ___ terminado el informe.', options: ['he', 'llevo', 'estoy'], answer: 0, why: '«Terminado» invariable solo encaja con «haber»: «he terminado el informe».' },
            { prompt: '«Las fotos están clasificadas.» ¿Qué no dice esta frase?', options: ['Quién las clasificó ni si se comprobaron sus datos.', 'Cómo están las fotos ahora.'], answer: 0, why: 'Estar + participio describe el estado, no el agente ni el balance completo.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Llevo revisadas veinte fotos» frente a «Las fotos están revisadas». Respuesta esperada: la primera cuantifica mi avance (y sugiere que sigo); la segunda describe el estado del conjunto. Pide al alumno que lo aplique a un proyecto propio.' },
        ] },
      ],
    },
  ],
};
