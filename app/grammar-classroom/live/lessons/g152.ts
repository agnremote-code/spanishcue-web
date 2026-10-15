import type { LiveLesson } from '../types';

/**
 * Lesson 152 · B2 · Condicional compuesto.
 * One team (Julia, Rodrigo and the coordinator Inés) reviews a late catalog in
 * every section: what they expected, what happened and what could have been.
 */
export const lesson: LiveLesson = {
  id: 152,
  level: 'B2',
  title: 'Condicional compuesto',
  subtitle: 'Explicar lo que habría ocurrido con otras decisiones, lo que se esperaba tener terminado y lo que alguien habría podido hacer.',
  legend: [
    { tone: 'blue', label: 'Resultado irreal en el pasado' },
    { tone: 'violet', label: 'Condición pasada: si + hubiera' },
    { tone: 'teal', label: 'Futuro terminado visto desde el pasado' },
    { tone: 'orange', label: 'Reproche atenuado: habría podido / debido' },
  ],
  optionNotes: {
    'si habría sabido': 'Después de «si» no va el condicional compuesto: la condición pasada se expresa con «si + hubiera + participio».',
    'Si habría sabido': 'Después de «si» no va el condicional compuesto: la condición pasada se expresa con «si + hubiera + participio».',
    'habremos terminado': '«Habremos terminado» mira el futuro desde hoy. Si el cálculo se hizo en el pasado, el verbo pasa a «habríamos terminado».',
    'habremos cerrado': '«Habremos cerrado» mira el futuro desde hoy. Si el cálculo se hizo en el pasado, el verbo pasa a «habríamos cerrado».',
    'habíamos terminado': 'El pluscuamperfecto cuenta algo que sí pasó antes de otro hecho. Aquí el resultado es imaginado o previsto.',
    'habíamos tenido': 'El pluscuamperfecto cuenta algo que sí pasó antes de otro hecho. Aquí el resultado es imaginado.',
    'tendríamos': 'El condicional simple habla de un resultado presente o general. El resultado imaginado está en el pasado: «habríamos tenido».',
    'enviaría': 'El condicional simple habla de lo que harías ahora o en general. Para el pasado imaginado: «habría enviado».',
    'habría hacido': 'El participio de «hacer» es irregular: «hecho».',
    'habrían llegados': 'Con «haber», el participio no cambia: «habrían llegado», sin plural.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo que habría ocurrido', coach: 'Una forma, tres maneras de mirar el pasado.',
      steps: [
        { title: 'La forma: habría + participio', blocks: [
          { kind: 'lead', text: 'El equipo de Julia entregó un catálogo **dos días tarde**. En la reunión de revisión nadie puede cambiar lo que pasó, pero todos hablan de lo que **habría ocurrido** con otras decisiones. Para eso usan el **condicional compuesto**.' },
          { kind: 'guide', text: { teacher: 'Lean la tabla en voz alta por columnas. Tu alumno dice qué parte cambia (haber) y qué parte no cambia (el participio).', self: 'Lee la tabla y fíjate en qué parte cambia con la persona y qué parte se queda igual.' } },
          { kind: 'table', title: 'Condicional de «haber» + participio', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', '**habría** hablado', '**habría** comido', '**habría** vivido'],
            ['tú', '**habrías** hablado', '**habrías** comido', '**habrías** vivido'],
            ['él / ella / usted', '**habría** hablado', '**habría** comido', '**habría** vivido'],
            ['nosotros / nosotras', '**habríamos** hablado', '**habríamos** comido', '**habríamos** vivido'],
            ['vosotros / vosotras', '**habríais** hablado', '**habríais** comido', '**habríais** vivido'],
            ['ellos / ellas / ustedes', '**habrían** hablado', '**habrían** comido', '**habrían** vivido'],
          ], note: 'Solo cambia «haber». El participio (-ado / -ido) es **invariable**: no cambia con el género ni con el número.' },
          { kind: 'table', title: 'Participios irregulares frecuentes', head: ['Infinitivo', 'Participio', 'Ejemplo'], rows: [
            ['hacer', '**hecho**', 'Lo habría hecho antes.'],
            ['decir', '**dicho**', 'Te lo habría dicho.'],
            ['ver', '**visto**', 'Lo habríamos visto a tiempo.'],
            ['poner', '**puesto**', 'Habrían puesto otra fecha.'],
            ['escribir', '**escrito**', 'Habría escrito un correo.'],
            ['volver · abrir · romper · resolver', '**vuelto · abierto · roto · resuelto**', 'Lo habríamos resuelto juntos.'],
          ], note: 'Los compuestos mantienen la irregularidad: «deshecho», «previsto», «propuesto», «descubierto».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Nosotros no lo ___ sin tu ayuda.', options: ['habríamos sabido', 'habríamos sabidos', 'habremos sabido'], answer: 0, why: '«Habríamos» + participio invariable: «sabido».' },
            { prompt: 'Con más tiempo, ellos ___ un informe más completo.', options: ['habrían hecho', 'habrían hacido', 'habían hecho'], answer: 0, why: '«Hacer» tiene participio irregular: «hecho».' },
            { prompt: '¿Qué parte de «habrían llegado» cambia con la persona?', options: ['«habrían»', '«llegado»', 'Las dos'], answer: 0, why: 'Solo se conjuga «haber»; el participio no cambia.' },
          ] },
        ] },
        { title: 'Un resultado que no ocurrió', mascot: '/brand/mascot/studying.webp', coach: 'Imaginamos otro final para algo que ya pasó.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'RESULTADO IRREAL', question: '¿Qué habría pasado?', formula: ['si + hubiera + participio, habría + participio', 'con / sin + nombre, habría + participio'],
            meaning: 'Presenta una **consecuencia pasada que no se produjo**. La condición tampoco se cumplió: por eso el resultado es imaginado. La condición puede ir con «si + hubiera» o con un complemento como «con más tiempo» o «sin tu ayuda».',
            examples: [
              { es: '[[Si hubiera recibido|violet]] las fotos a tiempo, [[habría enviado|blue]] una versión preliminar.' },
              { es: 'Sin tu ayuda, no lo [[habría conseguido|blue]].' },
              { es: 'Con un aviso temprano, [[habríamos tenido|blue]] más margen.' },
              { es: 'Yo [[habría elegido|blue]] otra imprenta.' },
            ],
            note: 'La condición también puede quedar implícita: «Yo habría elegido otra imprenta» = si hubiera decidido yo.' },
          { kind: 'tip', icon: '!', title: 'El «si» nunca lleva condicional', text: 'La condición va con **si + hubiera / hubiese + participio**; el resultado, con **habría + participio**. «Si **habría** sabido» es un error muy frecuente.' },
          { kind: 'tip', icon: '🔁', title: 'Otras formas que vas a oír', text: 'En el resultado también es correcto «**hubiera** enviado»: «Si lo hubiera sabido, te lo **hubiera** dicho». Y con modales: «**Podría haber** avisado» = «**Habría podido** avisar».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Si hubiéramos salido antes, no ___ el tren.', options: ['habríamos perdido', 'perderíamos', 'habíamos perdido'], answer: 0, why: 'Condición pasada no cumplida + resultado pasado imaginado: «habríamos perdido».' },
            { prompt: '___ a la reunión, habría votado en contra.', options: ['Si habría ido', 'Si hubiera ido', 'Si iría'], answer: 1, why: 'La condición pasada va con «si + hubiera + participio».' },
            { prompt: '«Sin el mapa, nos habríamos perdido.» ¿Se perdieron?', options: ['No: tenían el mapa.', 'Sí: no tenían mapa.', 'No se sabe.'], answer: 0, why: 'El resultado es irreal porque la condición (no tener mapa) no se dio.' },
          ] },
        ] },
        { title: 'Un futuro visto desde el pasado', mascot: '/autoestudio/mascot/noting.webp', coach: 'Lo que alguien esperaba tener terminado.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'FUTURO DESDE EL PASADO', question: '¿Qué esperabas tener terminado?', formula: ['verbo de pensamiento en pasado + que + (para + fecha) + habría + participio'],
            meaning: 'Desde un **momento pasado**, mira una acción que estaría **terminada** antes de un punto posterior. Es el futuro compuesto («habremos terminado») trasladado al pasado.',
            examples: [
              { es: 'En enero, la coordinadora calculó que para marzo [[habrían revisado|teal]] todas las imágenes.' },
              { es: 'Pensé que para el viernes ya [[habría terminado|teal]] el informe.' },
              { es: 'Nos dijeron que a las seis [[habrían cerrado|teal]] la oficina.' },
              { es: 'Creíamos que en diciembre ya [[habríamos pagado|teal]] la deuda.' },
            ] },
          { kind: 'compare', title: 'El mismo cálculo, otro punto de referencia', columns: [
            { tone: 'neutral', label: 'DESDE HOY', sentence: 'Creo que para marzo **habremos cerrado** el catálogo.', idea: 'El cálculo se hace ahora: futuro compuesto.' },
            { tone: 'teal', label: 'DESDE EL PASADO', sentence: 'Creía que para marzo [[habríamos cerrado|teal]] el catálogo.', idea: 'El cálculo se hizo antes: condicional compuesto.' },
          ] },
          { kind: 'tip', icon: '📅', title: 'Busca la fecha límite', text: 'Este uso suele llevar «**para** + fecha», «**antes de**» o «**ya**». La frase no dice si el plan se cumplió: muchas veces lo que sigue lo desmiente («…pero entregamos tarde»).' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'En septiembre pensaba que para Navidad ya ___ la casa.', options: ['habré vendido', 'habría vendido', 'había vendido'], answer: 1, why: 'El cálculo es pasado («pensaba») y mira una acción terminada antes de Navidad.' },
            { prompt: '«Me aseguraron que a las cinco habrían terminado.» ¿Qué expresa?', options: ['Una previsión hecha en el pasado.', 'Un resultado imposible.', 'Una crítica.'], answer: 0, why: 'Reproduce lo que se esperaba desde un momento pasado.' },
          ] },
        ] },
        { title: 'Lo que alguien habría podido hacer', mascot: '/brand/mascot/speaking.webp', coach: 'Criticar sin acusar.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'REPROCHE ATENUADO', question: '¿Qué se esperaba de alguien?', formula: ['habría + podido / debido + infinitivo', 'habría sido mejor / útil + infinitivo'],
            meaning: 'Presenta la **alternativa esperable** que no se hizo. Señala un fallo, pero con suavidad: describe una posibilidad en lugar de dar una orden imposible sobre el pasado.',
            examples: [
              { es: '[[Habrías podido avisar|orange]] antes de la demora.' },
              { es: 'Reconozco que [[habría podido consultar|orange]] al equipo.' },
              { es: '[[Habría sido útil|orange]] enviar una muestra el lunes.' },
              { es: '[[Habríamos debido revisar|orange]] el presupuesto.' },
            ],
            note: 'En primera persona, el mismo recurso sirve para **reconocer** un error propio sin dramatizar.' },
          { kind: 'compare', title: 'Tres maneras de decir lo mismo', columns: [
            { tone: 'neutral', label: 'DIRECTO', sentence: '**Tenías que** avisar.', idea: 'Suena a acusación.' },
            { tone: 'orange', label: 'ATENUADO', sentence: '[[Habrías podido avisar|orange]].', idea: 'Señala la alternativa con cortesía.' },
            { tone: 'neutral', label: 'MÁS SUAVE', sentence: 'Quizá **habría sido mejor** avisar.', idea: 'Despersonaliza la crítica.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase critica con más tacto a un compañero?', options: ['Tenías que llamar al cliente.', 'Habrías podido llamar al cliente.', 'Llamarás al cliente.'], answer: 1, why: '«Habrías podido + infinitivo» presenta la alternativa sin acusar.' },
            { prompt: 'Para reconocer un error propio: «___ revisar los datos dos veces».', options: ['Habría debido', 'Habré debido', 'Debería revisar'], answer: 0, why: '«Habría debido + infinitivo» reconoce lo que se esperaba en el pasado.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Primero pregunta: ¿pasó o no pasó?', blocks: [
          { kind: 'decide', title: 'Piensa en una frase con «habría» y responde', steps: [
            { q: '¿Hablas de una consecuencia que no se produjo porque una condición no se cumplió?', yes: 'Es un **resultado irreal**: «Si hubiera llovido, [[habríamos cancelado|blue]] la cena».', no: 'next' },
            { q: '¿Repites lo que alguien esperaba tener terminado antes de una fecha?', yes: 'Es un **futuro desde el pasado**: «Pensé que para junio [[habría terminado|teal]]».', no: 'next' },
            { q: '¿Señalas lo que alguien podía o debía haber hecho?', yes: 'Es un **reproche atenuado**: «[[Habrías podido preguntar|orange]]».', no: 'Revisa la frase: quizá necesitas otro tiempo, como el pretérito («terminé») o el pluscuamperfecto («había terminado»).' },
          ] },
          { kind: 'tip', icon: '🔍', title: 'Como referencia: la conjetura sobre el pasado', text: 'También vas a oír «habría» para **suponer** algo anterior a otro momento pasado: «No contestó. **Habría salido** ya» (= probablemente ya había salido). Hoy no la practicamos: basta con reconocerla.' },
          { kind: 'tip', icon: '⚖', title: 'No lo confundas con el pluscuamperfecto', text: '«**Había** enviado el correo» cuenta un hecho real. «**Habría** enviado el correo» imagina, prevé o critica: el hecho no se confirma.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Errores típicos incluso en B2.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno dice en voz alta la versión correcta antes de que la muestres y explica la regla con sus palabras.', self: 'Lee cada frase, encuentra el error y di la versión correcta antes de tocar.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Si habría sabido la verdad, te habría llamado.', right: 'Si hubiera sabido la verdad, te habría llamado.', why: 'Después de «si» va «hubiera + participio», nunca el condicional.' },
            { wrong: 'Habría ido si podría.', right: 'Habría ido si hubiera podido.', why: 'Las dos partes se desplazan al pasado: la condición también.' },
            { wrong: 'Ellas habrían llegadas antes.', right: 'Ellas habrían llegado antes.', why: 'Con «haber», el participio es invariable.' },
            { wrong: 'Lo habríamos hacido mejor con más tiempo.', right: 'Lo habríamos hecho mejor con más tiempo.', why: 'El participio de «hacer» es irregular: «hecho».' },
            { wrong: 'En enero pensé que para marzo habremos terminado.', right: 'En enero pensé que para marzo habríamos terminado.', why: 'Si el cálculo es pasado, el futuro compuesto pasa a condicional compuesto.' },
            { wrong: 'Habrías podido avisarme ayer, entonces avísame.', right: 'Habrías podido avisarme ayer. La próxima vez, avísame antes.', why: 'El reproche mira el pasado; lo que pides para el futuro va aparte.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres frases sobre una misma decisión de su vida: un resultado irreal, lo que esperaba tener hecho y lo que habría podido hacer distinto.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El condicional compuesto en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'La reunión de revisión', blocks: [
          { kind: 'guide', text: { teacher: 'Lean la reunión con papeles. Después, el alumno toca cada expresión y explica qué uso tiene: resultado irreal, previsión pasada o reproche.', self: 'Lee la reunión. Después toca cada expresión marcada y decide qué uso tiene antes de leer la nota.' } },
          { kind: 'explore', title: 'Un catálogo con dos días de retraso', setting: 'Inés, la coordinadora, reúne a Julia y a Rodrigo para analizar la entrega tardía.', lines: [
            { who: 'Inés', text: 'Bueno, el catálogo salió, pero con dos días de retraso. Quiero entender qué pasó, no buscar culpables.' },
            { who: 'Inés', text: 'En enero calculé que para marzo [[habríamos cerrado|teal]] los textos y las imágenes.' },
            { who: 'Julia', text: 'Las fotos llegaron tarde. [[Si las hubiera recibido|violet]] el lunes, [[habría enviado|blue]] una versión preliminar.' },
            { who: 'Rodrigo', text: 'Eso es culpa mía. [[Habría podido avisar|orange]] de la demora mucho antes.' },
            { who: 'Inés', text: '¿Por qué no lo hiciste?' },
            { who: 'Rodrigo', text: 'Quería llegar con la solución completa. Pensé que el miércoles ya [[habría resuelto|teal]] el problema con el fotógrafo.' },
            { who: 'Julia', text: 'Con un aviso el lunes, yo [[habría adelantado|blue]] la revisión de los textos.' },
            { who: 'Inés', text: 'Y nosotras [[habríamos tenido|blue]] menos presión el último día.' },
            { who: 'Rodrigo', text: 'Lo sé. [[Habría sido mejor|orange]] mandar lo que tenía, aunque estuviera incompleto.' },
            { who: 'Inés', text: 'Entonces, desde ahora: avances parciales cada viernes y aviso en cuanto algo se retrase.' },
          ], notes: {
            'habríamos cerrado': 'Inés repite su **cálculo de enero**: mira desde el pasado una acción que estaría terminada en marzo. No se cumplió.',
            'Si las hubiera recibido': 'La **condición pasada no cumplida**: las fotos no llegaron el lunes. Va con «si + hubiera + participio».',
            'habría enviado': 'El **resultado irreal** de esa condición: Julia no envió la versión porque no tenía las fotos.',
            'Habría podido avisar': 'Rodrigo **reconoce su error** con suavidad: presenta la alternativa esperable que no hizo.',
            'habría resuelto': 'Lo que Rodrigo **esperaba tener terminado** el miércoles. Es una previsión desde el pasado.',
            'habría adelantado': 'Otro **resultado irreal**: la condición está en «con un aviso el lunes».',
            'habríamos tenido': '**Resultado irreal** con la misma condición implícita: si Rodrigo hubiera avisado.',
            'Habría sido mejor': 'Una **crítica atenuada** e impersonal: valora la alternativa que no se eligió.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué esperaba Inés en enero?', options: ['Tener cerrado el catálogo para marzo.', 'Recibir las fotos el lunes.', 'Hacer una reunión cada viernes.'], answer: 0, why: '«En enero calculé que para marzo habríamos cerrado los textos y las imágenes».' },
            { prompt: '¿Julia envió una versión preliminar?', options: ['No, porque las fotos llegaron tarde.', 'Sí, el lunes.', 'Sí, pero incompleta.'], answer: 0, why: '«Habría enviado» es un resultado irreal: la condición (recibir las fotos el lunes) no se cumplió.' },
            { prompt: '¿Cómo habla Rodrigo de su error?', options: ['Lo reconoce con una alternativa: «Habría podido avisar».', 'Culpa al fotógrafo.', 'Dice que no hubo error.'], answer: 0, why: '«Eso es culpa mía. Habría podido avisar de la demora mucho antes».' },
          ] },
        ] },
        { title: 'Un viaje que salió de otra manera', blocks: [
          { kind: 'explore', title: 'El vuelo perdido', setting: 'Marta y su hermano Diego vuelven de un viaje. Perdieron el vuelo de ida y tuvieron que cambiar los planes.', lines: [
            { who: 'Marta', text: 'Todavía me da rabia. [[Si hubiéramos salido|violet]] media hora antes, no [[habríamos perdido|blue]] el avión.' },
            { who: 'Diego', text: 'El taxista me aseguró que a las ocho ya [[habríamos llegado|teal]] al aeropuerto.' },
            { who: 'Marta', text: 'Sí, pero había obras en la autopista. [[Habrías podido mirar|orange]] el tráfico antes de pedir el taxi.' },
            { who: 'Diego', text: 'Tienes razón. Aunque, sin ese retraso, no [[habríamos conocido|blue]] a Laura en el hotel del aeropuerto.' },
            { who: 'Marta', text: 'Es verdad. Y ella nos recomendó el pueblo de la costa.' },
            { who: 'Diego', text: 'Con el plan original, [[habríamos pasado|blue]] tres días en la ciudad, sin playa.' },
            { who: 'Marta', text: 'Al final fue mejor viaje. Pero la próxima vez salimos con tiempo.' },
            { who: 'Diego', text: 'Prometido.' },
          ], notes: {
            'Si hubiéramos salido': 'La **condición pasada** que no se cumplió: salieron tarde.',
            'habríamos perdido': '**Resultado irreal**: con la condición cumplida, no habrían perdido el avión. En realidad lo perdieron.',
            'habríamos llegado': 'La **previsión** del taxista desde el pasado: estarían en el aeropuerto antes de las ocho.',
            'Habrías podido mirar': 'Marta **critica con suavidad** a su hermano: señala lo que podía haber hecho.',
            'habríamos conocido': '**Resultado irreal** en negativo: «sin ese retraso» es la condición. En realidad sí conocieron a Laura.',
            'habríamos pasado': '**Resultado irreal**: «con el plan original» funciona como condición.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué habría pasado en tu último viaje sin un imprevisto?». El alumno responde con una condición y un resultado.' },
        ] },
        { title: '¿Qué uso es?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'irreal', label: 'Resultado irreal', tone: 'blue' },
            { id: 'prevision', label: 'Previsión desde el pasado', tone: 'teal' },
            { id: 'reproche', label: 'Reproche atenuado', tone: 'orange' },
          ], items: [
            { text: 'Habría enviado una versión preliminar.', answer: 'irreal', why: 'Depende de una condición no cumplida: recibir las fotos el lunes.' },
            { text: 'Calculé que para marzo habríamos cerrado los textos.', answer: 'prevision', why: 'Un cálculo hecho en enero sobre una acción terminada en marzo.' },
            { text: 'Habrías podido mirar el tráfico.', answer: 'reproche', why: '«Habrías podido + infinitivo»: la alternativa esperable.' },
            { text: 'Me aseguró que a las ocho ya habríamos llegado.', answer: 'prevision', why: 'Repite lo que el taxista preveía desde el pasado.' },
            { text: 'Sin ese retraso, no habríamos conocido a Laura.', answer: 'irreal', why: '«Sin ese retraso» es una condición que no se dio.' },
            { text: 'Habría sido mejor mandar lo que tenía.', answer: 'reproche', why: 'Valora con suavidad la opción que no se eligió.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Lee el contexto: ¿pasó o no pasó?',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'No sabía que la reunión era hoy y no fui.', prompt: 'Si lo hubiera sabido, ___ a la reunión.', options: ['habría ido', 'iría', 'había ido'], answer: 0, why: 'Resultado pasado imaginado: «habría + participio».' },
            { context: 'En febrero el equipo hizo un cálculo optimista.', prompt: 'Pensábamos que para abril ya ___ el proyecto.', options: ['habremos terminado', 'habríamos terminado', 'habíamos terminado'], answer: 1, why: 'Previsión desde el pasado: el futuro compuesto pasa a condicional compuesto.' },
            { context: 'Tu compañera no reservó la sala y la reunión se canceló.', prompt: '___ reservar la sala con más antelación.', options: ['Habrías podido', 'Podrás', 'Habías podido'], answer: 0, why: 'Reproche atenuado: «habrías podido + infinitivo».' },
            { context: 'No llevamos paraguas y llovió toda la tarde.', prompt: 'Con un paraguas, no nos ___ tanto.', options: ['mojaríamos', 'habríamos mojado', 'hubiéramos mojados'], answer: 1, why: 'Resultado pasado imaginado. El participio es invariable.' },
            { context: 'Un amigo te cuenta que no se presentó a una entrevista.', prompt: 'Yo, en tu lugar, ___ a la entrevista.', options: ['me habría presentado', 'me había presentado', 'me habré presentado'], answer: 0, why: '«En tu lugar» es una condición imaginada sobre un hecho pasado.' },
            { context: 'Al final llegaste tarde porque había mucho tráfico.', prompt: 'Sin tráfico, ___ a tiempo.', options: ['habrías llegado', 'llegabas', 'habrás llegado'], answer: 0, why: 'La condición («sin tráfico») no se dio: resultado irreal pasado.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que el correo **sí se envió**?', options: ['Había enviado el correo antes de la reunión.', 'Habría enviado el correo antes de la reunión.'], answer: 0, why: 'El pluscuamperfecto cuenta un hecho real. «Habría enviado» lo imagina.' },
            { prompt: '«Pensé que para junio habría terminado la tesis.» ¿Qué significa?', options: ['En el pasado, esperaba tenerla terminada en junio.', 'Terminé la tesis en junio.', 'Nunca empecé la tesis.'], answer: 0, why: 'Previsión desde el pasado; la frase no confirma si se cumplió.' },
            { prompt: '¿Qué frase es una crítica atenuada?', options: ['Habrías podido llamarme.', 'Me habrías llamado si hubieras tenido mi número.'], answer: 0, why: '«Habrías podido + infinitivo» señala lo esperable. La otra explica un resultado irreal.' },
            { prompt: '«Sin tu consejo, habría aceptado ese trabajo.» ¿Aceptó el trabajo?', options: ['No, porque recibió el consejo.', 'Sí, lo aceptó.', 'Todavía no lo sabe.'], answer: 0, why: 'El resultado es irreal: el consejo existió y cambió la decisión.' },
            { prompt: '¿Cuál expresa lo mismo que «Habría podido ayudarte»?', options: ['Podría haberte ayudado.', 'Podré ayudarte.', 'Te había ayudado.'], answer: 0, why: '«Podría haber + participio» y «habría podido + infinitivo» son equivalentes.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Un mensaje a un cliente', lines: [
            { who: 'Cliente', text: 'El pedido me llegó con una semana de retraso. ¿Qué pasó?' },
            { who: 'Andrea', text: 'Lo siento mucho. Cuando lo confirmamos, pensamos que para el lunes ya lo ___.', options: ['habríamos enviado', 'habremos enviado', 'habíamos enviado'], answer: 0, why: 'Previsión hecha en el pasado sobre una acción terminada antes del lunes.' },
            { who: 'Cliente', text: '¿Y por qué no me avisaron?' },
            { who: 'Andrea', text: 'Tiene razón: ___ avisarle en cuanto supimos del problema.', options: ['habríamos debido', 'habremos debido', 'debimos de'], answer: 0, why: 'Reconocer un error propio con «habríamos debido + infinitivo».' },
            { who: 'Andrea', text: 'Si el proveedor ___ a tiempo, el paquete habría salido el viernes.', options: ['habría respondido', 'hubiera respondido', 'respondería'], answer: 1, why: 'La condición pasada va con «si + hubiera + participio».' },
            { who: 'Cliente', text: 'Bueno, era un regalo de cumpleaños y llegó tarde.' },
            { who: 'Andrea', text: 'Con un aviso a tiempo, usted ___ otra opción. Le ofrecemos un descuento en su próxima compra.', options: ['habría buscado', 'buscaría', 'había buscado'], answer: 0, why: 'Resultado irreal pasado: el cliente no buscó otra opción porque no sabía nada.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si habría estudiado más, habría aprobado.', ok: false, options: ['Si hubiera estudiado más, habría aprobado.', 'Si estudiaría más, habría aprobado.', 'Si habría estudiado más, aprobaría.'], answer: 0, why: 'La condición pasada va con «si + hubiera».' },
            { sentence: 'Sin tu ayuda, no lo habría conseguido.', ok: true, why: 'Correcta: condición implícita («sin tu ayuda») y resultado irreal.' },
            { sentence: 'Creí que a las nueve habremos terminado.', ok: false, options: ['Creí que a las nueve habríamos terminado.', 'Creí que a las nueve hemos terminado.', 'Creí que a las nueve terminaremos.'], answer: 0, why: 'Con un verbo de pensamiento en pasado, el futuro compuesto pasa a condicional compuesto.' },
            { sentence: 'Los vecinos habrían protestados si lo hubieran sabido.', ok: false, options: ['Los vecinos habrían protestado si lo hubieran sabido.', 'Los vecinos habrían protestados si lo habrían sabido.', 'Los vecinos habían protestado si lo hubieran sabido.'], answer: 0, why: 'El participio con «haber» no lleva plural.' },
            { sentence: 'Habrías podido decírmelo antes.', ok: true, why: 'Correcta: reproche atenuado con el pronombre unido al infinitivo.' },
            { sentence: 'Con más tiempo, habríamos escribido un informe mejor.', ok: false, options: ['Con más tiempo, habríamos escrito un informe mejor.', 'Con más tiempo, habremos escrito un informe mejor.', 'Con más tiempo, escribiríamos un informe mejor ayer.'], answer: 0, why: 'El participio de «escribir» es irregular: «escrito».' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['habría', 'Si', 'lo', 'hubiera', 'sabido', 'te', 'llamado'], accept: ['Si lo hubiera sabido te habría llamado', 'Te habría llamado si lo hubiera sabido'] },
            { tiles: ['para', 'Pensé', 'que', 'junio', 'habría', 'terminado'], accept: ['Pensé que para junio habría terminado'] },
            { tiles: ['podido', 'Habrías', 'avisar', 'antes'], accept: ['Habrías podido avisar antes'] },
            { tiles: ['tu', 'Sin', 'ayuda', 'no', 'habríamos', 'lo', 'conseguido'], accept: ['Sin tu ayuda no lo habríamos conseguido', 'No lo habríamos conseguido sin tu ayuda'] },
          ] },
          { kind: 'rewrite', title: 'Pasa la idea al pasado o atenúala', items: [
            { prompt: 'Iría si pudiera.', instruction: 'Pásala a un pasado que no ocurrió.', accept: ['Habría ido si hubiera podido', 'Habría ido si hubiese podido', 'Si hubiera podido habría ido', 'Si hubiese podido habría ido', 'Hubiera ido si hubiera podido'] },
            { prompt: 'Tenías que avisar.', instruction: 'Atenúa el reproche con el condicional compuesto.', accept: ['Habrías podido avisar', 'Habrías debido avisar', 'Habría sido mejor avisar'] },
            { prompt: 'Creo que para mayo habremos cerrado el acuerdo.', instruction: 'Empieza con «Creía que…».', accept: ['Creía que para mayo habríamos cerrado el acuerdo'] },
            { prompt: 'No me ayudaste, por eso no terminé a tiempo.', instruction: 'Empieza con «Con tu ayuda…».', accept: ['Con tu ayuda habría terminado a tiempo', 'Con tu ayuda hubiera terminado a tiempo'] },
          ] },
        ] },
        { title: 'Clasifica por el sentido', blocks: [
          { kind: 'classify', title: '¿Qué uso tiene cada frase?', categories: [
            { id: 'irreal', label: 'Resultado irreal', tone: 'blue' },
            { id: 'prevision', label: 'Previsión desde el pasado', tone: 'teal' },
            { id: 'reproche', label: 'Reproche atenuado', tone: 'orange' },
          ], items: [
            { text: 'Si hubiera nevado, habrían cerrado la escuela.', answer: 'irreal', why: 'Condición no cumplida y resultado imaginado.' },
            { text: 'Nos prometieron que para el verano habrían arreglado la calle.', answer: 'prevision', why: 'Una promesa pasada sobre una acción terminada antes del verano.' },
            { text: 'Habrías debido consultar a tu médico.', answer: 'reproche', why: '«Habrías debido + infinitivo»: lo que se esperaba.' },
            { text: 'Con otro entrenador, el equipo habría ganado la liga.', answer: 'irreal', why: '«Con otro entrenador» es una condición que no se dio.' },
            { text: 'Supuse que a esa hora ya habrías cenado.', answer: 'prevision', why: 'Desde el pasado, imagino una acción terminada antes de una hora.' },
            { text: 'Habría sido más justo repartir las tareas.', answer: 'reproche', why: 'Valoración suave de una alternativa que no se eligió.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una explicación de la demora', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una explicación de la demora', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada «habría» y decide si es previsión, resultado irreal o reconocimiento de un error.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota cada «habría» y su uso. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Rodrigo le escribe a Julia', channel: 'NOTA DE VOZ · PARA JULIA', src: '/audio/grammar-classroom/152.mp3',
            before: 'Después de la entrega tardía del catálogo, un compañero le deja un mensaje a Julia. ¿Qué crees que va a decirle?',
            gist: { prompt: '¿Cuál es el propósito principal del mensaje?', options: ['Reconocer un error y proponer otra forma de trabajar.', 'Pedirle a Julia que termine el catálogo.', 'Quejarse del trabajo del fotógrafo.'], answer: 0, why: 'Reconoce que «habría podido avisarte antes» y propone acordar «cuándo avisar y qué información compartir».' },
            details: [
              { prompt: '¿Qué pensaba tener terminado para marzo?', options: ['El catálogo.', 'Las fotos.', 'La revisión de los textos.'], answer: 0, why: '«Pensé que para marzo habríamos cerrado el catálogo».' },
              { prompt: '¿Con qué no contaba?', options: ['Con que las fotos necesitaran otra revisión.', 'Con que Julia se fuera de vacaciones.', 'Con que el catálogo saliera mal.'], answer: 0, why: '«No conté con que las fotos necesitaran otra revisión».' },
              { prompt: '¿Por qué esperó hasta el último día?', options: ['Quería dar una solución completa.', 'No sabía que había un problema.', 'Julia le pidió esperar.'], answer: 0, why: '«Esperé hasta el último día porque quería dar una solución completa».' },
              { prompt: '¿Qué hará en el próximo trabajo?', options: ['Enviar una muestra aunque falten imágenes.', 'Esperar a tener todas las fotos.', 'Cambiar de fotógrafo.'], answer: 0, why: '«Para el próximo trabajo enviaré una muestra aunque falten imágenes».' },
              { prompt: 'En «con una comunicación más temprana habríamos tenido menos presión», ¿tuvieron presión?', options: ['Sí: la comunicación temprana no existió.', 'No: se comunicaron a tiempo.', 'No se sabe.'], answer: 0, why: 'Es un resultado irreal: la condición («una comunicación más temprana») no se cumplió.' },
            ],
            transcript: 'Hola, Julia. Cuando empezamos, pensé que [[para marzo habríamos cerrado|teal]] el catálogo. No conté con que las fotos necesitaran otra revisión. [[Habría enviado|blue]] un avance [[si hubiera sabido|violet]] que tu parte dependía de ese material. También reconozco que [[habría podido avisarte|orange]] antes. Esperé hasta el último día porque quería dar una solución completa, y esa espera te dejó sin margen. No quiero repetir ese proceso. Para el próximo trabajo enviaré una muestra aunque falten imágenes. Así podrás revisar los textos y saber qué sigue pendiente. El catálogo salió bien, pero con una comunicación más temprana [[habríamos tenido|blue]] menos presión al final. Me gustaría que acordáramos cuándo avisar y qué información compartir durante la preparación.',
            reply: { teacher: 'El alumno responde en voz alta como Julia: acepta o matiza la disculpa, dice qué habría necesitado y propone un acuerdo concreto.', self: 'Responde como Julia en un mensaje breve: di qué habrías hecho con más información y propón un acuerdo. Usa «habría» al menos dos veces.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Otras decisiones, otros resultados', coach: 'Una pregunta por vez. Mira hacia atrás sin culpas.',
      steps: [
        { title: 'Otras decisiones, otros resultados', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Escucha la historia del alumno, repregunta y comparte también alguna decisión tuya.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta antes de decirla.' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en un proyecto, en el trabajo o en los estudios, que no salió como esperabas. ¿Qué pensabas tener terminado y para cuándo?', followUps: ['¿Qué pasó en realidad?', '¿Quién más dependía de ese plazo?', '¿Fue un cálculo realista?'], phrases: ['Pensé que para… [[habría terminado|teal]]…', 'Calculamos que en… ya [[habríamos entregado|teal]]…', 'Al final…'], hint: 'Separa la expectativa («pensé que para mayo habría terminado») del resultado real («terminé en julio»).', example: 'Cuando empecé la tesis, pensé que para diciembre ya habría escrito todos los capítulos. Al final, terminé en abril porque cambié el tema a mitad de camino.', next: 'Ahora imaginemos otro final para esa historia.', teacher: 'Si el alumno no tiene un ejemplo laboral, sirve una mudanza, una reforma o un viaje.' },
            { q: '¿Qué habría cambiado si hubieras tomado otra decisión en ese proyecto?', followUps: ['¿Qué información te faltaba?', '¿Qué habría pasado con más tiempo o más ayuda?', '¿Habría sido mejor el resultado o solo distinto?'], phrases: ['[[Si hubiera sabido|violet]]…, [[habría…|blue]]', 'Con más…, [[habríamos…|blue]]', 'Sin…, no [[habría…|blue]]'], hint: 'Une una condición pasada no cumplida con un resultado: «Si hubiera pedido ayuda, habría terminado antes».', example: 'Si hubiera hablado antes con mi directora, habría elegido un tema más concreto. Con un plan más claro, habría tenido menos estrés.', next: 'Pasemos a algo más delicado: las críticas.' },
            { q: 'Cuando alguien se equivoca en algo que te afecta, ¿cómo se lo dices?', followUps: ['¿Prefieres ser directo o suave?', '¿Cambia según la persona?', '¿Qué frase te molesta escuchar cuando el error es tuyo?'], phrases: ['[[Habrías podido…|orange]]', '[[Habría sido mejor…|orange]]', 'Quizá [[habríamos debido…|orange]]'], hint: 'Compara «Tenías que avisarme» con «Habrías podido avisarme»: la segunda señala lo mismo, con más tacto.', example: 'Depende. Con mis amigos soy directa, pero en el trabajo prefiero decir «habría sido mejor avisar antes». Así la persona no se pone a la defensiva.', next: 'Ahora mira el error desde el otro lado.' },
            { q: 'Cuéntame un error tuyo que reconociste. ¿Qué habrías podido hacer de otra manera?', followUps: ['¿Cómo reaccionó la otra persona?', '¿Qué aprendiste?', '¿Lo harías igual hoy?'], phrases: ['Reconozco que [[habría podido…|orange]]', '[[Habría debido…|orange]]', 'La próxima vez…'], hint: 'Reconoce el error con el condicional compuesto y termina con un compromiso en futuro.', example: 'Una vez olvidé el cumpleaños de mi mejor amigo. Habría podido poner una alarma en el teléfono, pero confié en mi memoria. La próxima vez no me pasa.', next: 'Ahora, pensemos en decisiones grandes.' },
            { q: 'Si miras los últimos diez años, ¿qué decisión cambió más tu vida? ¿Cómo habría sido tu vida sin ella?', followUps: ['¿Dónde estarías ahora?', '¿Qué personas no habrías conocido?', '¿Te arrepientes de algo?'], phrases: ['Sin esa decisión, [[habría…|blue]]', 'Si no [[hubiera…|violet]], no [[habría conocido…|blue]]', 'Probablemente [[habría seguido…|blue]]'], hint: 'Fíjate en que puedes combinar un resultado pasado («habría seguido») con uno presente («ahora estaría…»).', example: 'Mudarme a otra ciudad. Si no me hubiera mudado, no habría conocido a mi pareja y probablemente habría seguido en un trabajo que no me gustaba.', next: 'Para terminar, una mirada a la historia.' },
            { q: '¿Qué acontecimiento histórico o noticia reciente habría terminado de otra manera con una decisión distinta?', followUps: ['¿Quién habría podido actuar antes?', '¿Qué consecuencias habría tenido?', '¿Crees que era previsible?'], phrases: ['Si el gobierno [[hubiera…|violet]], [[habría…|blue]]', 'Las autoridades [[habrían podido…|orange]]', 'Nadie pensó que para… [[habría…|teal]]'], hint: 'Elige un tema que conozcas bien. No hace falta una opinión fuerte: puedes presentar dos alternativas.', example: 'Creo que, con un sistema de alerta temprana, la inundación del año pasado habría causado menos daños. Las autoridades habrían podido evacuar algunos barrios antes.', teacher: 'Si el tema se vuelve sensible, propón un ejemplo neutro: un partido, un invento o una elección deportiva.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le hace al profesor dos preguntas con «¿Qué habría pasado si…?».', self: 'Escribe dos preguntas con «¿Qué habrías hecho si…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una revisión sin culpables', coach: 'Analiza, reconoce y propone.',
      steps: [
        { title: 'Una revisión sin culpables', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribirse en clase o como tarea. Usen la revisión automática y después comenten juntos si el tono es constructivo.', self: 'Escribe tu texto y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo. Después léelo en voz alta: ¿suena constructivo?' } },
          { kind: 'write', title: 'Revisión de una entrega tardía', situation: 'Un trabajo tuyo, de tu equipo o de tus estudios se entregó tarde. Escribe una breve revisión para el grupo, sin buscar culpables.', task: [
            'Explica qué esperaban tener terminado y **para cuándo**.',
            'Cuenta qué pasó en realidad.',
            'Presenta **dos alternativas** que habrían cambiado el resultado, una con «si + hubiera».',
            'Reconoce algo que **habrías podido** hacer mejor y termina con un acuerdo concreto para el futuro.',
          ], starters: ['Al empezar el proyecto, pensé que para…', 'En realidad…', 'Si hubiéramos…, habríamos…', 'Con más…, habríamos…', 'Reconozco que habría podido…', 'Para la próxima entrega propongo…'],
            words: ['plazo', 'demora', 'avance parcial', 'imprevisto', 'margen', 'previsible', 'habría sido útil', 'en cuanto'],
            model: 'Al empezar el proyecto, pensé que [[para marzo habríamos cerrado|teal]] el catálogo. En realidad, las fotos necesitaron otra revisión y entregamos dos días tarde. [[Habría enviado|blue]] una muestra [[si hubiera sabido|violet]] que los textos dependían de ese material. Además, con una reunión semanal [[habríamos detectado|blue]] el problema mucho antes. Reconozco que [[habría podido avisar|orange]] de la demora en cuanto apareció: esperar una solución completa nos dejó sin margen. Propongo compartir un avance parcial cada viernes y avisar el mismo día en que una tarea se retrase. Así el equipo podrá adaptar su trabajo sin esperar al último momento.',
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
            { tone: 'blue', label: 'RESULTADO IRREAL', formula: 'si + hubiera + participio, habría + participio', example: 'Si hubiera recibido las fotos, habría enviado un avance.', caption: 'Un final que no ocurrió.' },
            { tone: 'teal', label: 'FUTURO DESDE EL PASADO', formula: 'pensé que + para + fecha + habría + participio', example: 'Pensé que para marzo habríamos cerrado el catálogo.', caption: 'Lo que se esperaba tener terminado.' },
            { tone: 'orange', label: 'REPROCHE ATENUADO', formula: 'habría + podido / debido + infinitivo', example: 'Habrías podido avisar antes.', caption: 'La alternativa esperable, con tacto.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres comprobaciones', text: '¿Hay «si»? Entonces la condición va con **hubiera**, no con habría. ¿El cálculo es pasado? **Habría**, no habré. ¿Y el participio? **Invariable** y, a veces, irregular: hecho, dicho, visto, puesto, escrito, vuelto.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Si me hubieras llamado, te ___ a buscar.', options: ['habría ido', 'iría', 'había ido'], answer: 0, why: 'Resultado irreal pasado.' },
            { prompt: 'Nos dijeron que a las diez ya ___ el problema.', options: ['habrán resuelto', 'habrían resuelto', 'habrían resolvido'], answer: 1, why: 'Previsión desde el pasado con participio irregular: «resuelto».' },
            { prompt: 'Para criticar con tacto: «___ consultar al equipo».', options: ['Tenías que', 'Habrías podido', 'Habrás podido'], answer: 1, why: '«Habrías podido + infinitivo» atenúa el reproche.' },
            { prompt: '___ más tiempo, habríamos visitado el museo.', options: ['Si habríamos tenido', 'Si hubiéramos tenido', 'Si tendríamos'], answer: 1, why: 'La condición pasada va con «si + hubiera».' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Había enviado el informe» y «Habría enviado el informe»: ¿cuál cuenta un hecho y cuál lo imagina? Pide un ejemplo personal de cada una.' },
        ] },
      ],
    },
  ],
};
