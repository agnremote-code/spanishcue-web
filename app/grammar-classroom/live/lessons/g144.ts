import type { LiveLesson } from '../types';

/**
 * Lesson 144 · A2 · Futuro simple (hablaré, comeré).
 * An office moving to a new building runs through the class: the team
 * predicts what will change, Julia makes promises, and everyone weighs results.
 */
export const lesson: LiveLesson = {
  id: 144,
  level: 'A2',
  title: 'Futuro simple',
  subtitle: 'Hacer predicciones, prometer cosas y anunciar las consecuencias que esperas.',
  legend: [
    { tone: 'blue', label: 'Predicción · lo que crees que pasará' },
    { tone: 'teal', label: 'Promesa · un compromiso tuyo' },
    { tone: 'orange', label: 'Consecuencia prevista · si…, con…' },
  ],
  optionNotes: {
    compraba: '«Compraba» es imperfecto: habla del pasado.',
    'haya comprado': '«Haya comprado» es subjuntivo y no funciona solo en esta frase.',
    'ten-': '«Ten-» no es la raíz del futuro: tener → **tendr**é.',
    'tuv-': '«Tuv-» es la raíz del indefinido (tuve). En futuro: **tendr**-.',
    deciremos: 'Decir tiene raíz irregular en futuro: **dir**emos.',
    'dijimos mañana': '«Dijimos» es pasado y no combina con «mañana».',
    'volvía': '«Volvía» es imperfecto: habla del pasado.',
    'haya vuelto': '«Haya vuelto» es subjuntivo y no funciona solo en esta frase.',
    'teneré': 'Tener es irregular: **tendré**.',
    'haceré': 'Hacer es irregular: **haré**.',
    'saliré': 'Salir es irregular: **saldré**.',
    'poderemos': 'Poder es irregular: **podremos**.',
    'habrán': 'Con «habrá» hablamos de existencia (como «hay»): siempre en singular.',
    'ponerá': 'Poner es irregular: **pondrá**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El futuro simple', coach: 'Mira hacia adelante.',
      steps: [
        { title: 'Lo que pasará', blocks: [
          { kind: 'lead', text: 'La oficina de Julia **cambiará** de edificio el próximo mes. La directora cree que las reuniones **serán** más cortas. Para hablar de lo que esperamos del futuro, usamos el **futuro simple**.', en: 'We use the simple future for predictions.' },
          { kind: 'guide', text: { teacher: 'Lean los ejemplos y pregunta: «¿Es seguro o es lo que la persona cree?». Tu alumno hace una predicción sobre su ciudad.', self: 'Lee los ejemplos. Fíjate: muchas predicciones van con «creo que», «seguramente» o «probablemente».' } },
          { kind: 'concept', tone: 'blue', label: 'PREDICCIÓN', question: '¿Qué pasará?', en: 'predictions', formula: ['(creo que / seguramente) + verbo en futuro'],
            meaning: 'Dice **lo que creemos que pasará**: el tiempo, cambios, resultados. Es una opinión sobre el futuro.',
            examples: [
              { es: 'Mañana [[lloverá|blue]] en todo el país.', en: 'Tomorrow it will rain all over the country.' },
              { es: 'Creo que las reuniones [[serán|blue]] más cortas.', en: 'I think meetings will be shorter.' },
              { es: 'En el futuro [[trabajaremos|blue]] menos horas.', en: 'In the future we will work fewer hours.' },
              { es: 'Seguramente [[habrá|blue]] algunas dudas.', en: 'There will probably be some questions.' },
            ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Algún día ___ una casa en el campo.', options: ['compraré', 'compraba', 'haya comprado'], answer: 0, why: '«Algún día» mira al futuro: compraré.' },
            { prompt: '«Creo que el nuevo edificio tendrá más luz.» ¿Qué es?', options: ['Una predicción.', 'Un recuerdo.', 'Una rutina.'], answer: 0, why: '«Creo que» + futuro: lo que espera la persona.' },
          ] },
        ] },
        { title: 'Cómo se forma', mascot: '/brand/mascot/studying.webp', coach: 'Infinitivo completo + terminación.', blocks: [
          { kind: 'table', title: 'Futuro regular', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'hablar**é**', 'comer**é**', 'vivir**é**'],
            ['tú', 'hablar**ás**', 'comer**ás**', 'vivir**ás**'],
            ['él / ella / usted', 'hablar**á**', 'comer**á**', 'vivir**á**'],
            ['nosotros / nosotras', 'hablar**emos**', 'comer**emos**', 'vivir**emos**'],
            ['vosotros / vosotras', 'hablar**éis**', 'comer**éis**', 'vivir**éis**'],
            ['ellos / ellas / ustedes', 'hablar**án**', 'comer**án**', 'vivir**án**'],
          ], note: 'No quitas nada: **infinitivo completo + terminación**. Las terminaciones son iguales para -ar, -er e -ir. Vosotros se usa en España; en América Latina, ustedes.' },
          { kind: 'tip', icon: '🎯', title: 'Tilde', text: 'Todas las formas llevan tilde menos nosotros: hablar**é**, hablar**á**s, hablar**á**, hablar**emos**, hablar**á**n.', en: 'All forms have an accent except “nosotros”.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El próximo año mis padres ___ en otra ciudad.', options: ['vivirán', 'vivieron', 'viven ayer'], answer: 0, why: 'Ellos: vivir + án.' },
            { prompt: 'Mañana ___ la dirección nueva a todos.', options: ['enviaré', 'envié', 'enviara'], answer: 0, why: 'Yo: enviar + é.' },
          ] },
        ] },
        { title: 'Raíces irregulares', mascot: '/autoestudio/mascot/noting.webp', coach: 'Raíz nueva, mismas terminaciones.', blocks: [
          { kind: 'lead', text: 'Algunos verbos frecuentes cambian la **raíz**, pero las **terminaciones son las mismas**: -é, -ás, -á, -emos, -án.', en: 'Some verbs change the stem but keep the same endings.' },
          { kind: 'table', title: 'Irregulares frecuentes', head: ['Infinitivo', 'Raíz', 'yo', 'nosotros'], rows: [
            ['tener', '**tendr-**', 'tendré', 'tendremos'],
            ['salir', '**saldr-**', 'saldré', 'saldremos'],
            ['poner', '**pondr-**', 'pondré', 'pondremos'],
            ['venir', '**vendr-**', 'vendré', 'vendremos'],
            ['poder', '**podr-**', 'podré', 'podremos'],
            ['saber', '**sabr-**', 'sabré', 'sabremos'],
            ['hacer', '**har-**', 'haré', 'haremos'],
            ['decir', '**dir-**', 'diré', 'diremos'],
            ['haber (hay)', '**habr-**', '—', '**habrá** (hay)'],
          ], note: '«Habrá» es el futuro de **hay**: «Habrá una sala para llamadas». Siempre en singular.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'La raíz del futuro de **tener** es…', options: ['tendr-', 'ten-', 'tuv-'], answer: 0, why: 'Tener → tendr- → tendré.' },
            { prompt: 'Nosotros ___ la verdad.', options: ['diremos', 'deciremos', 'dijimos mañana'], answer: 0, why: 'Decir → dir- → diremos.' },
            { prompt: 'En la nueva oficina ___ una sala para llamadas.', options: ['habrá', 'habrán', 'hay ayer'], answer: 0, why: 'El futuro de hay: habrá, en singular.' },
          ] },
        ] },
        { title: 'Promesas y consecuencias', mascot: '/brand/mascot/speaking.webp', coach: 'Te lo prometo.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PROMESA', question: '¿Qué harás?', en: 'promises', formula: ['(te prometo que) + verbo en futuro', 'no + verbo en futuro'],
            meaning: 'Con el futuro **te comprometes**: prometes hacer algo o no hacerlo.',
            examples: [
              { es: 'Te [[llamaré|teal]] esta noche.', en: 'I’ll call you tonight.' },
              { es: '[[Enviaré|teal]] la dirección el viernes.', en: 'I’ll send the address on Friday.' },
              { es: 'Te prometo que no [[llegaré|teal]] tarde.', en: 'I promise I won’t be late.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'CONSECUENCIA PREVISTA', question: '¿Qué pasará entonces?', en: 'expected results', formula: ['si + presente, futuro', 'con + algo, futuro'],
            meaning: 'Presenta un **resultado esperado**: si pasa una cosa, pasará otra.',
            examples: [
              { es: 'Con práctica, [[mejorarás|orange]].', en: 'With practice, you’ll improve.' },
              { es: 'Si salimos a las ocho, [[llegaremos|orange]] a tiempo.', en: 'If we leave at eight, we’ll arrive on time.' },
              { es: 'Si compartimos la información, [[trabajaremos|orange]] mejor.', en: 'If we share information, we’ll work better.' },
            ] },
          { kind: 'tip', icon: '⚠', title: 'Después de «si», presente', text: 'Después de **si** no va el futuro: «Si **salimos** temprano, llegaremos a tiempo», no «si saldremos».', en: 'Present after “si”, future in the result.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Te prometo que ___ pronto.', options: ['volveré', 'volvía', 'haya vuelto'], answer: 0, why: 'Una promesa: futuro.' },
            { prompt: 'Si ___ cada día, hablarás mejor.', options: ['practicas', 'practicarás', 'practicaste'], answer: 0, why: 'Después de «si», presente: practicas.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Plan, predicción o promesa?', blocks: [
          { kind: 'decide', title: 'Quieres hablar del futuro. Responde', steps: [
            { q: '¿Es un plan ya decidido, con fecha (el sábado voy a…)?', yes: 'Lo más natural es **ir a + infinitivo**: «El sábado **voy a visitar** a mi madre». El futuro también es correcto, pero suena más formal.', no: 'next' },
            { q: '¿Te comprometes a hacer algo?', yes: 'Es una **promesa**: «[[Enviaré|teal]] la dirección el viernes».', no: 'Es una **predicción** o una **consecuencia**: «Creo que [[lloverá|blue]]» · «Si practicas, [[mejorarás|orange]]».' },
          ] },
          { kind: 'tip', icon: '🤔', title: 'Para reconocer: suposiciones de ahora', text: 'El futuro también sirve para **suponer** algo del presente: —¿Dónde está Marta? —No sé, **estará** en la entrada (= probablemente está). Hoy solo lo reconocemos.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Raíz irregular, terminación de siempre.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Mañana teneré tiempo.', right: 'Mañana tendré tiempo.', why: 'Tener es irregular: tendr-.' },
            { wrong: 'Haceremos la mudanza el lunes.', right: 'Haremos la mudanza el lunes.', why: 'Hacer es irregular: har-.' },
            { wrong: 'Si lloverá, no saldremos.', right: 'Si llueve, no saldremos.', why: 'Después de «si», presente.' },
            { wrong: 'Habrán muchas personas en la fiesta.', right: 'Habrá muchas personas en la fiesta.', why: 'Habrá (= hay) siempre en singular.' },
            { wrong: 'Nosotros hablarémos con la jefa.', right: 'Nosotros hablaremos con la jefa.', why: 'La forma de nosotros no lleva tilde.' },
            { wrong: 'Yo ayudaré con las cajas ayer.', right: 'Yo ayudaré con las cajas mañana.', why: 'El futuro va con palabras de futuro: mañana, el lunes, el próximo mes.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno una predicción para su ciudad, una promesa para esta semana y una consecuencia con «si».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El futuro en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'La mudanza de la oficina', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica si es una predicción, una promesa o una consecuencia.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Reunión de equipo', setting: 'Lunes. La directora, Julia y Pedro hablan del cambio de oficina del próximo mes.', lines: [
            { who: 'Directora', text: 'Como saben, el próximo mes [[cambiaremos|blue]] de edificio.' },
            { who: 'Pedro', text: '¿Y cómo será el nuevo lugar?' },
            { who: 'Directora', text: '[[Tendrá|blue]] más luz y todos [[trabajaremos|blue]] en la misma planta.' },
            { who: 'Pedro', text: 'Pero yo vivo lejos. Creo que [[tardaré|blue]] más en llegar.' },
            { who: 'Directora', text: 'Es verdad, algunas personas [[viajarán|blue]] más tiempo. Pero si estamos juntos, [[compartiremos|orange]] mejor la información.' },
            { who: 'Julia', text: 'Yo me encargo de la mudanza. [[Enviaré|teal]] la dirección el viernes.' },
            { who: 'Pedro', text: '¿[[Habrá|blue]] una sala para llamadas? Hablo mucho con clientes.' },
            { who: 'Directora', text: 'Sí, y con esa sala las reuniones [[serán|orange]] más cortas.' },
            { who: 'Julia', text: 'Y no se preocupen: [[los ayudaré|teal]] con las cajas el lunes.' },
            { who: 'Pedro', text: 'Gracias, Julia. Te [[diré|teal]] si necesito algo.' },
            { who: 'Directora', text: 'Perfecto. Tendremos una semana para organizar las mesas. Después [[veremos|blue]] si el cambio mejora el trabajo.' },
          ], notes: {
            'cambiaremos': 'Un cambio que la empresa **anuncia**: el futuro presenta lo que pasará.',
            'Tendrá': 'Una **predicción** sobre el edificio. Tener es irregular: tendr- + á.',
            'trabajaremos': 'Lo que **pasará** en el nuevo lugar: infinitivo + emos.',
            'tardaré': '«Creo que» + futuro: una **predicción** personal de Pedro.',
            'viajarán': 'La directora **prevé** un problema para algunas personas: ellos → viajar + án.',
            'compartiremos': 'Una **consecuencia**: «si estamos juntos» → compartiremos. Después de «si» va el presente (estamos).',
            'Enviaré': 'Una **promesa** de Julia: se compromete con una fecha.',
            'Habrá': 'El futuro de **hay**: una pregunta sobre lo que existirá en el edificio.',
            'serán': '«Con esa sala» → reuniones más cortas: una **consecuencia** prevista.',
            'los ayudaré': 'Otra **promesa** de Julia. «No se preocupen» refuerza el compromiso.',
            'diré': 'Una **promesa** de Pedro. Decir es irregular: dir- + é.',
            'veremos': 'Lo que **harán** después: comprobar el resultado.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué está preocupado Pedro?', options: ['Porque vive lejos y tardará más.', 'Porque no habrá sala para llamadas.', 'Porque no quiere ayudar.'], answer: 0, why: '«Yo vivo lejos. Creo que tardaré más en llegar».' },
            { prompt: '¿Qué promete Julia?', options: ['Enviar la dirección y ayudar con las cajas.', 'Cambiar el horario.', 'Hablar con los clientes.'], answer: 0, why: '«Enviaré la dirección el viernes» y «Los ayudaré con las cajas el lunes».' },
            { prompt: 'Según la directora, ¿qué pasará con la sala para llamadas?', options: ['Las reuniones serán más cortas.', 'Pedro viajará menos.', 'Habrá más luz.'], answer: 0, why: '«Con esa sala las reuniones serán más cortas».' },
          ] },
        ] },
        { title: '¿Predicción, promesa o consecuencia?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases', categories: [
            { id: 'prediccion', label: 'Predicción', tone: 'blue' },
            { id: 'promesa', label: 'Promesa', tone: 'teal' },
            { id: 'consecuencia', label: 'Consecuencia prevista', tone: 'orange' },
          ], items: [
            { text: 'Creo que tardaré más en llegar.', answer: 'prediccion', why: '«Creo que»: lo que Pedro espera.' },
            { text: 'Enviaré la dirección el viernes.', answer: 'promesa', why: 'Julia se compromete.' },
            { text: 'Si estamos juntos, compartiremos mejor la información.', answer: 'consecuencia', why: '«Si…»: un resultado previsto.' },
            { text: 'Mañana lloverá en el norte.', answer: 'prediccion', why: 'Una predicción del tiempo.' },
            { text: 'Te prometo que no llegaré tarde.', answer: 'promesa', why: '«Te prometo»: un compromiso.' },
            { text: 'Con práctica, mejorarás.', answer: 'consecuencia', why: '«Con práctica» → mejorarás: un resultado esperado.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Infinitivo + terminación.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Le prometes algo a tu amiga.', prompt: 'No te preocupes, te ___ esta noche.', options: ['llamaré', 'llamé', 'llamaba'], answer: 0, why: 'Una promesa: llamaré.' },
            { context: 'El pronóstico del tiempo.', prompt: 'El fin de semana ___ calor en la costa.', options: ['hará', 'hacerá', 'hizo'], answer: 0, why: 'Hacer → har- → hará.' },
            { context: 'Tu equipo y tú, mañana.', prompt: 'Mañana nosotros ___ temprano de la oficina.', options: ['saldremos', 'saliremos', 'salimos ayer'], answer: 0, why: 'Salir → saldr- → saldremos.' },
            { context: 'Una consecuencia.', prompt: 'Si estudias cada día, ___ el examen.', options: ['aprobarás', 'apruebas ayer', 'aprobabas'], answer: 0, why: 'Si + presente → futuro: aprobarás.' },
            { context: 'Planes para la fiesta.', prompt: 'En la fiesta ___ música en vivo.', options: ['habrá', 'habrán', 'hubo'], answer: 0, why: 'Futuro de hay: habrá, en singular.' },
            { context: 'Tus amigos llegan de viaje.', prompt: 'Mis amigos ___ el sábado por la tarde.', options: ['vendrán', 'venirán', 'vinieron'], answer: 0, why: 'Venir → vendr- → vendrán.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase es una **promesa**?', options: ['Te ayudaré con las cajas.', 'Creo que lloverá.'], answer: 0, why: 'Te ayudaré: un compromiso. La otra es una predicción.' },
            { prompt: '«Si salimos a las ocho, llegaremos a tiempo.» ¿Qué expresa «llegaremos»?', options: ['Una consecuencia prevista.', 'Una costumbre.', 'Un hecho pasado.'], answer: 0, why: 'Si pasa A (salir a las ocho), pasará B (llegar a tiempo).' },
            { prompt: '—¿Dónde está Marta? —Estará en la entrada. ¿Qué significa?', options: ['Probablemente está en la entrada ahora.', 'Mañana irá a la entrada.', 'Estuvo en la entrada ayer.'], answer: 0, why: 'El futuro también sirve para suponer algo del presente.' },
            { prompt: '¿Qué frase suena más natural para un plan ya decidido?', options: ['El sábado voy a visitar a mi madre.', 'El sábado visitaba a mi madre.'], answer: 0, why: 'Para planes decididos, ir a + infinitivo es lo más natural.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El martes tendremos las computadoras listas.', ok: true, why: 'Correcta: tener → tendremos.' },
            { sentence: 'Mañana poderemos terminar el informe.', ok: false, options: ['Mañana podremos terminar el informe.', 'Mañana poderemos terminar el informe ayer.', 'Mañana podíamos terminar el informe.'], answer: 0, why: 'Poder → podr- → podremos.' },
            { sentence: 'Si tendré tiempo, te llamaré.', ok: false, options: ['Si tengo tiempo, te llamaré.', 'Si tendré tiempo, te llamo.', 'Si tenía tiempo, te llamaré.'], answer: 0, why: 'Después de «si», presente: tengo.' },
            { sentence: 'Habrán dos salas nuevas.', ok: false, options: ['Habrá dos salas nuevas.', 'Habremos dos salas nuevas.', 'Habrán dos salas nuevos.'], answer: 0, why: 'Habrá, siempre en singular.' },
            { sentence: 'Te prometo que diré la verdad.', ok: true, why: 'Correcta: decir → diré.' },
            { sentence: 'Marta ponerá las fotos en la carpeta.', ok: false, options: ['Marta pondrá las fotos en la carpeta.', 'Marta ponrá las fotos en la carpeta.', 'Marta pondrán las fotos en la carpeta.'], answer: 0, why: 'Poner → pondr- → pondrá.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Organizando la mudanza', lines: [
            { who: 'Pedro', text: 'Julia, ¿cuándo ___ la dirección nueva?', options: ['enviarás', 'enviaste', 'envías ayer'], answer: 0, why: 'Pedro pregunta a Julia por el futuro: enviarás.' },
            { who: 'Julia', text: 'La ___ el viernes, como prometí.', options: ['enviaré', 'enviaba', 'enviarán'], answer: 0, why: 'Julia promete: yo enviaré.' },
            { who: 'Pedro', text: '¿Y a qué hora ___ el transporte?', options: ['llegará', 'llegarán', 'llegó'], answer: 0, why: 'El transporte = él: llegará.' },
            { who: 'Julia', text: 'A las nueve. Creo que ___ toda la mañana para llevar las cajas.', options: ['necesitaremos', 'necesitábamos', 'necesitaron'], answer: 0, why: 'Una predicción, con nosotros: necesitaremos.' },
            { who: 'Pedro', text: 'Bueno, yo ___ en la sala grande.', options: ['estaré', 'estuve', 'estaba'], answer: 0, why: 'Pedro se compromete: estaré.' },
            { who: 'Julia', text: '¡Gracias! Si todos ayudan, ___ antes del mediodía.', options: ['terminaremos', 'terminamos ayer', 'terminábamos'], answer: 0, why: 'Si + presente → futuro: terminaremos.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Te', 'esta noche', 'llamaré'], accept: ['Te llamaré esta noche', 'Esta noche te llamaré'], en: 'I’ll call you tonight.' },
            { tiles: ['habrá', 'En la oficina nueva', 'una sala para llamadas'], accept: ['En la oficina nueva habrá una sala para llamadas', 'Habrá una sala para llamadas en la oficina nueva'], en: 'There will be a room for calls in the new office.' },
            { tiles: ['practicas', 'Si', 'mejorarás', 'cada día'], accept: ['Si practicas cada día mejorarás', 'Mejorarás si practicas cada día'], en: 'If you practise every day, you’ll improve.' },
          ] },
          { kind: 'rewrite', title: 'Escríbelo en futuro', items: [
            { prompt: 'Va a llover.', instruction: 'Escribe la predicción con el futuro simple.', accept: ['Lloverá'] },
            { prompt: 'Volveré tarde.', instruction: 'Escribe la promesa en negativo.', accept: ['No volveré tarde'] },
            { prompt: 'Hoy tengo mucho trabajo.', instruction: 'Cámbialo a «mañana».', accept: ['Mañana tendré mucho trabajo', 'Mañana yo tendré mucho trabajo', 'Tendré mucho trabajo mañana'] },
            { prompt: 'Hacemos la presentación el lunes.', instruction: 'Escríbelo con el futuro simple.', accept: ['Haremos la presentación el lunes', 'El lunes haremos la presentación', 'Nosotros haremos la presentación el lunes'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El viernes antes de la mudanza', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'El viernes antes de la mudanza', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota qué pasará cada día: viernes, lunes y martes.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota qué pasará el viernes, el lunes y el martes.' } },
          { kind: 'listen', title: 'El viernes antes de la mudanza', channel: 'MENSAJE DE VOZ · AL EQUIPO', src: '/audio/grammar-classroom/144.mp3',
            before: 'Julia deja un mensaje al equipo antes de la mudanza. ¿Qué crees que promete?',
            gist: { prompt: '¿Para qué deja Julia el mensaje?', options: ['Para organizar la mudanza con el equipo.', 'Para cancelar la mudanza.', 'Para invitar al equipo a una fiesta.'], answer: 0, why: 'Explica qué pasará cada día y pide una lista de lo que falta.' },
            details: [
              { prompt: '¿Qué enviará Julia el viernes?', options: ['La dirección nueva.', 'Las computadoras.', 'Una lista de cajas.'], answer: 0, why: '«El viernes enviaré la dirección nueva, como prometí».' },
              { prompt: '¿A qué hora llegará el transporte?', options: ['A las nueve del lunes.', 'A las nueve del martes.', 'Al mediodía.'], answer: 0, why: '«El transporte llegará a las nueve del lunes».' },
              { prompt: '¿Dónde estará Marta?', options: ['En la entrada.', 'En la sala grande.', 'En casa.'], answer: 0, why: '«Marta estará en la entrada y yo ayudaré en la sala grande».' },
              { prompt: '¿Cuándo tendrán las computadoras listas?', options: ['El lunes.', 'El martes.', 'El viernes.'], answer: 1, why: '«El martes tendremos las computadoras listas».' },
              { prompt: '¿Qué pide Julia al equipo?', options: ['Una lista de lo que falta.', 'Ayuda con el transporte.', 'Llegar a las ocho.'], answer: 0, why: '«Por favor, preparen una lista de lo que falta».' },
            ],
            transcript: 'Hola, equipo. El viernes [[enviaré|teal]] la dirección nueva, como prometí. El transporte [[llegará|blue]] a las nueve del lunes. Creo que [[necesitaremos|blue]] toda la mañana para llevar las cajas. Marta [[estará|blue]] en la entrada y yo [[ayudaré|teal]] en la sala grande. El martes [[tendremos|blue]] las computadoras listas. Seguramente [[habrá|blue]] algunas dudas, pero las [[resolveremos|teal]] juntos. Por favor, preparen una lista de lo que falta para que pueda organizarlo antes del lunes.',
            reply: { teacher: 'El alumno responde a Julia: qué cosa falta en su lista y qué promete hacer él el lunes.', self: 'Responde a Julia en voz alta: di qué falta en tu lista y promete una cosa para el lunes («Yo llevaré…»).' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu futuro', coach: 'Predice, promete e imagina.',
      steps: [
        { title: 'Tu futuro', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y comparte también tus predicciones.', self: 'Responde cada pregunta en voz alta. Usa «creo que», «seguramente» y «te prometo que».' } },
          { kind: 'talk', cards: [
            { q: '¿Qué crees que cambiará en tu ciudad en los próximos años?', followUps: ['¿Habrá más transporte público?', '¿Será más cara la vida?', '¿Te gustará vivir allí?'], phrases: ['Creo que [[habrá|blue]] más…', 'Seguramente [[será|blue]]…', 'La gente [[usará|blue]]…'], hint: 'Usa «creo que» o «seguramente» + futuro.', example: 'Creo que habrá más bicicletas y menos tráfico. Seguramente la vida será más cara, pero la ciudad estará más limpia.', next: 'Ahora piensa en tu vida.' },
            { q: '¿Cómo imaginas tu rutina dentro de un año?', followUps: ['¿Dónde vivirás?', '¿Trabajarás en lo mismo?', '¿Qué cosa nueva harás?'], phrases: ['Dentro de un año [[viviré|blue]]…', '[[Trabajaré|blue]]…', '[[Tendré|blue]] más tiempo para…'], hint: 'Cuidado con los irregulares: tendré, podré, haré, saldré.', example: 'Dentro de un año viviré en el mismo apartamento, pero trabajaré desde casa dos días. Tendré más tiempo para cocinar.', next: 'Y para llegar ahí, ¿qué harás esta semana?' },
            { q: '¿Qué te prometes para esta semana?', followUps: ['¿Qué paso concreto darás?', '¿Qué no harás?', '¿Quién te ayudará?'], phrases: ['Esta semana [[haré|teal]]…', 'No [[comeré|teal]]…', 'Te prometo que [[estudiaré|teal]]…'], hint: 'Una promesa: futuro con «yo». Para prometer que no: «No + futuro».', example: 'Esta semana haré ejercicio tres veces. No miraré el teléfono antes de dormir. Te prometo que estudiaré español todos los días.', next: 'Hablemos de consecuencias.' },
            { q: 'Si estudias español todos los días, ¿qué pasará dentro de seis meses?', followUps: ['¿Qué podrás hacer?', '¿Adónde viajarás?', '¿Con quién hablarás?'], phrases: ['Si practico cada día, [[podré|orange]]…', '[[Entenderé|orange]] series sin subtítulos.', '[[Hablaré|orange]] con…'], hint: 'Si + presente, futuro: «Si practico, podré…».', example: 'Si practico cada día, podré ver series sin subtítulos. Viajaré a Colombia y hablaré con la gente sin miedo.', next: 'Ahora, un cambio en tu trabajo o tus estudios.', teacher: 'Corrige con suavidad el «si» + futuro si aparece: «Si tendré…» → «Si tengo…».' },
            { q: 'Imagina que tu clase o tu oficina cambia de lugar. ¿Qué ventajas y problemas habrá?', followUps: ['¿Cómo llegarás?', '¿Qué será mejor?', '¿Qué harás tú para ayudar?'], phrases: ['[[Será|blue]] más…', 'Creo que [[tardaré|blue]]…', 'Yo [[ayudaré|teal]] con…'], hint: 'Mezcla predicciones (será, habrá) y promesas (yo ayudaré).', example: 'El lugar nuevo será más grande, pero creo que tardaré más en llegar. Yo ayudaré con las cajas y prepararé la lista.', next: 'Para terminar, una predicción para el mundo.' },
            { q: '¿Cómo será la vida dentro de cincuenta años?', followUps: ['¿Cómo trabajaremos?', '¿Qué comeremos?', '¿Qué cosas no existirán?'], phrases: ['La gente [[trabajará|blue]]…', 'No [[habrá|blue]]…', 'Seguramente [[viviremos|blue]]…'], hint: 'Haz tres predicciones con «creo que», «seguramente» o «probablemente».', example: 'Creo que trabajaremos menos horas. Seguramente no habrá vehículos de gasolina. Probablemente viviremos más años.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te pide dos predicciones y una promesa.', self: 'Escribe dos predicciones y una promesa para esta semana y léelas en voz alta. El domingo, comprueba si se cumplieron.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un cambio próximo', coach: 'Predice y comprométete.',
      steps: [
        { title: 'Un cambio próximo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos las raíces irregulares y el «si» + presente.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien los irregulares: tendré, haré, podré.' } },
          { kind: 'write', title: 'Mensaje para tu equipo', situation: 'En tu trabajo, tu clase o tu casa habrá pronto un cambio: una mudanza, un horario nuevo, un proyecto. Escribe un mensaje a las personas implicadas.', task: [
            'Explica **qué cambiará** y cuándo.',
            'Haz **una predicción**: ¿cómo será?',
            'Haz **dos promesas**: qué harás tú.',
            'Añade una **consecuencia** con «si».',
          ], starters: ['El lunes cambiaremos…', 'Creo que…', 'Seguramente habrá…', 'Yo enviaré…', 'Te prometo que…', 'Si todos ayudamos,…'],
            words: ['será', 'habrá', 'tendremos', 'podremos', 'haré', 'enviaré', 'ayudaré', 'creo que', 'seguramente', 'si'],
            model: 'El lunes [[cambiaremos|blue]] de sala. [[Tendremos|blue]] más luz y creo que [[trabajaremos|blue]] mejor. Yo [[enviaré|teal]] la dirección el viernes y [[ayudaré|teal]] con las cajas el lunes. Marta [[estará|blue]] en la entrada. El martes las computadoras [[estarán|blue]] listas. Si todos ayudamos, [[terminaremos|orange]] pronto y [[prepararemos|teal]] juntos una lista para la próxima reunión.',
            minWords: 40 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'PREDICCIÓN', formula: '(creo que) + futuro', example: 'Mañana lloverá.', caption: 'Lo que crees que pasará.', en: 'prediction' },
            { tone: 'teal', label: 'PROMESA', formula: '(te prometo que) + futuro', example: 'Te llamaré esta noche.', caption: 'Un compromiso tuyo.', en: 'promise' },
            { tone: 'orange', label: 'CONSECUENCIA', formula: 'si + presente, futuro', example: 'Con práctica, mejorarás.', caption: 'El resultado esperado.', en: 'expected result' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Formas', text: 'Infinitivo + **-é, -ás, -á, -emos, -án**. Raíces irregulares: tendr-, saldr-, pondr-, vendr-, podr-, sabr-, har-, dir-, habr-. Después de **si**, presente.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'El año que viene mi hermana ___ en Lima.', options: ['vivirá', 'vivió', 'vivía'], answer: 0, why: 'Futuro: vivirá.' },
            { prompt: 'Mañana no ___ salir: tengo mucho trabajo.', options: ['podré', 'poderé', 'pude'], answer: 0, why: 'Poder → podr- → podré.' },
            { prompt: 'Si llueve, ___ en casa.', options: ['nos quedaremos', 'nos quedamos ayer', 'nos quedábamos'], answer: 0, why: 'Si + presente → futuro.' },
            { prompt: 'Te prometo que lo ___ hoy.', options: ['haré', 'haceré', 'hice'], answer: 0, why: 'Hacer → har- → haré.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Di una predicción y una promesa para la próxima clase». Respuesta posible: «La clase será útil. Yo enviaré mi texto mañana».' },
        ] },
      ],
    },
  ],
};
