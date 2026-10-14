import type { LiveLesson } from '../types';

/**
 * Lesson 214 · A2 · Si + presente.
 * Ana and Luis plan a Saturday at a book market: the same plan runs through every section.
 */
export const lesson: LiveLesson = {
  id: 214,
  level: 'A2',
  title: 'Si + presente',
  subtitle: 'Hacer planes con alternativas y acordar qué hacer en cada caso.',
  legend: [
    { tone: 'blue', label: 'Si + presente · la condición' },
    { tone: 'teal', label: 'Presente · lo que hacemos en ese caso' },
    { tone: 'orange', label: 'Sí · respuesta afirmativa' },
  ],
  optionNotes: {
    si: '«Si», sin tilde, abre una condición: «si llueve…».',
    Si: '«Si», sin tilde, abre una condición: «si llueve…».',
    sí: '«Sí», con tilde, es la respuesta afirmativa: «Sí, vamos».',
    Sí: '«Sí», con tilde, es la respuesta afirmativa: «Sí, vamos».',
    cuando: '«Cuando» dice que algo pasa siempre o seguro. Para algo posible, usa «si».',
    Cuando: '«Cuando» dice que algo pasa siempre o seguro. Para algo posible, usa «si».',
    lloverá: 'Después de «si» no usamos futuro: «si llueve».',
    llueva: 'Después de «si» no usamos esa forma: con una condición real, presente: «si llueve».',
    llover: 'Después de «si» va un verbo conjugado: «si llueve».',
    tendré: 'Después de «si» no usamos futuro: «si tengo».',
    porque: '«Porque» da una razón; aquí hablamos de algo que puede pasar o no.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Si pasa esto, hacemos esto', coach: 'Un plan con alternativas.',
      steps: [
        { title: 'Si + presente, presente', blocks: [
          { kind: 'lead', text: 'El sábado, Ana y Luis quieren visitar un mercado de libros. No saben qué tiempo va a hacer. Por eso hacen un plan con alternativas: «**Si hace buen tiempo**, caminamos. **Si llueve**, tomamos el autobús».', en: 'A plan with options: if this happens, we do that.' },
          { kind: 'guide', text: { teacher: 'Lee los ejemplos y pregunta: «¿Sabemos si va a llover?». La respuesta es no: por eso usamos «si».', self: 'Lee los ejemplos. Fíjate: no sabemos si la condición va a pasar.' } },
          { kind: 'concept', tone: 'blue', label: 'SI + PRESENTE', question: '¿Qué hacemos en ese caso?', en: 'if + present', formula: ['si + presente, presente'],
            meaning: '«Si» presenta una **condición posible**: puede pasar o no. La otra parte dice **qué hacemos** en ese caso. Los dos verbos van en **presente**.',
            examples: [
              { es: '[[Si llueve|blue]], [[tomamos|teal]] el autobús.', en: 'If it rains, we take the bus.' },
              { es: '[[Si hace buen tiempo|blue]], [[caminamos|teal]] desde la estación.', en: 'If the weather is good, we walk from the station.' },
              { es: '[[Si el tren llega tarde|blue]], te [[aviso|teal]] por mensaje.', en: 'If the train is late, I’ll let you know.' },
              { es: '[[Si tengo tiempo|blue]], te [[llamo|teal]] después.', en: 'If I have time, I’ll call you later.' },
            ],
            note: 'En inglés, la consecuencia va muchas veces en futuro («I’ll call you»). En español, para planes y acuerdos, el presente es muy natural: «te llamo».' },
          { kind: 'tip', icon: '!', title: 'Nunca futuro después de «si»', text: 'Después de «si» va el **presente**: «si llueve», no «si lloverá».', en: 'if it rains = si llueve (never «si lloverá»).' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Si ___ frío, llevamos un abrigo.', options: ['hará', 'hace', 'hacer'], answer: 1, why: 'Después de «si» va el presente: «hace».' },
            { prompt: '«Si hay mesa libre, comemos allí.» ¿Saben si hay mesa?', options: ['Sí, seguro.', 'No, es posible, pero no seguro.'], answer: 1, why: '«Si» presenta algo posible, no seguro.' },
          ] },
        ] },
        { title: 'El orden puede cambiar', mascot: '/brand/mascot/studying.webp', coach: 'Primero la condición o primero lo que hacemos.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CONSECUENCIA PRIMERO', question: '¿Qué pasa si empiezo con la acción?', en: 'the order can change', formula: ['presente + si + presente'],
            meaning: 'Puedes poner primero **lo que hacemos** y después la condición. El significado no cambia: «si» sigue marcando la condición.',
            examples: [
              { es: '[[Tomamos|teal]] el autobús [[si llueve|blue]].', en: 'We take the bus if it rains.' },
              { es: '[[Comemos|teal]] en una cafetería [[si encontramos|blue]] una mesa libre.', en: 'We eat at a café if we find a free table.' },
              { es: 'Ana [[lleva|teal]] una bolsa [[si compra|blue]] libros grandes.', en: 'Ana takes a bag if she buys big books.' },
            ] },
          { kind: 'compare', title: 'La misma idea, otro orden', columns: [
            { tone: 'blue', label: 'CONDICIÓN PRIMERO', sentence: '[[Si llueve|blue]], tomamos el autobús.', idea: 'Con coma después de la condición.', en: 'comma' },
            { tone: 'teal', label: 'ACCIÓN PRIMERO', sentence: 'Tomamos el autobús [[si llueve|blue]].', idea: 'Normalmente sin coma.', en: 'no comma' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Caminamos si hace sol.» ¿Cuál es la condición?', options: ['Caminamos.', 'Hace sol.'], answer: 1, why: 'La condición es la parte que va con «si».' },
            { prompt: 'Si terminas a las ocho, salimos a las nueve. = …', options: ['Terminas a las ocho si salimos a las nueve.', 'Salimos a las nueve si terminas a las ocho.'], answer: 1, why: 'Cambia el orden, pero «si» sigue con la condición: «si terminas a las ocho».' },
          ] },
        ] },
        { title: 'Si o sí', mascot: '/autoestudio/mascot/noting.webp', coach: 'Una tilde cambia todo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'SI / SÍ', question: '¿Condición o respuesta?', en: 'if / yes', formula: ['si (sin tilde) = condición', 'sí (con tilde) = respuesta afirmativa'],
            meaning: '**Si**, sin tilde, abre una condición. **Sí**, con tilde, responde «yes» o confirma. Muchas veces aparecen juntas en la misma respuesta.',
            examples: [
              { es: '[[Sí|orange]], voy [[si tengo tiempo|blue]].', en: 'Yes, I’ll go if I have time.' },
              { es: '—¿Vamos temprano? —[[Sí|orange]], salimos a las nueve [[si terminas|blue]] a las ocho.', en: 'Yes, we leave at nine if you finish at eight.' },
              { es: '[[Sí|orange]], te ayudo [[si me esperas|blue]] un momento.', en: 'Yes, I’ll help you if you wait for me a moment.' },
            ] },
          { kind: 'tip', icon: '🔊', title: 'Escucha la diferencia', text: 'En la frase hablada, **sí** tiene más fuerza y suele ir sola, con una pausa: «**Sí**, voy». **Si** se une a la condición: «si tengo tiempo».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '—¿Vienes al mercado? —___, vengo.', options: ['Si', 'Sí'], answer: 1, why: 'Es la respuesta afirmativa: «sí», con tilde.' },
            { prompt: 'Vengo ___ no llueve.', options: ['si', 'sí'], answer: 0, why: 'Es la condición: «si», sin tilde.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Seguro o posible?', blocks: [
          { kind: 'table', title: 'Tres formas de una frase', head: ['Estructura', 'Para qué', 'Ejemplo'], rows: [
            ['[[si|blue]] + presente, presente', 'condición primero', '[[Si llueve|blue]], [[tomamos|teal]] el autobús.'],
            ['presente + [[si|blue]] + presente', 'acción primero', '[[Tomamos|teal]] el autobús [[si llueve|blue]].'],
            ['[[sí|orange]], … [[si|blue]]…', 'aceptar con una condición', '[[Sí|orange]], vamos [[si hay tiempo|blue]].'],
          ] },
          { kind: 'compare', title: '¿Si o cuando?', columns: [
            { tone: 'blue', label: 'SI', sentence: '[[Si llueve|blue]], tomamos el autobús.', idea: 'Es posible: no sabemos si va a llover.', en: 'if (maybe)' },
            { tone: 'teal', label: 'CUANDO', sentence: 'Cuando llueve, tomamos el autobús.', idea: 'Es una costumbre: llueve a veces y siempre hacemos eso.', en: 'when (always)' },
          ] },
          { kind: 'decide', title: 'Piensa en tu frase', steps: [
            { q: '¿Respondes «yes» o confirmas?', yes: 'Escribe **sí**, con tilde: «[[Sí|orange]], voy».', no: 'next' },
            { q: '¿Hablas de algo posible, que no sabes si va a pasar?', yes: 'Usa **si + presente**: «[[Si hay sitio|blue]], comemos allí».', no: 'Si es una costumbre que se repite siempre, usa **cuando**: «Cuando llego, ceno».' },
          ] },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Si lloverá, tomamos el autobús.', right: 'Si llueve, tomamos el autobús.', why: 'Después de «si» no va futuro: presente.' },
            { wrong: 'Sí llueve, tomamos el autobús.', right: 'Si llueve, tomamos el autobús.', why: 'Es una condición: «si», sin tilde.' },
            { wrong: 'Si, voy contigo.', right: 'Sí, voy contigo.', why: 'Es una respuesta afirmativa: «sí», con tilde.' },
            { wrong: 'Si tener tiempo, te llamo.', right: 'Si tengo tiempo, te llamo.', why: 'Después de «si» va un verbo conjugado.' },
            { wrong: 'Si llueva, nos quedamos en casa.', right: 'Si llueve, nos quedamos en casa.', why: 'Para una condición real, presente: «llueve».' },
          ] },
          { kind: 'teacher', text: 'Pide tres condiciones reales para el próximo fin de semana del alumno y escríbelas en la pizarra en los dos órdenes.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La gramática en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'El plan del sábado', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica por qué se usó.', self: 'Lee la conversación. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una llamada el viernes', setting: 'Ana y Luis organizan su visita al mercado de libros del sábado.', lines: [
            { who: 'Luis', text: 'Ana, ¿vamos temprano al mercado?' },
            { who: 'Ana', text: '[[Sí|orange]], salimos a las nueve [[si terminas|blue]] de trabajar a las ocho.' },
            { who: 'Luis', text: 'Termino a las ocho, seguro. ¿Y cómo vamos?' },
            { who: 'Ana', text: '[[Si hace buen tiempo|blue]], caminamos desde la estación.' },
            { who: 'Luis', text: 'Pero dicen que va a llover…' },
            { who: 'Ana', text: 'Bueno, [[si llueve|blue]], tomamos el autobús. Hay uno cada diez minutos.' },
            { who: 'Luis', text: '¿Comemos allí?' },
            { who: 'Ana', text: '[[Comemos en la cafetería si encontramos|teal]] una mesa libre. Siempre está muy llena.' },
            { who: 'Luis', text: '¿Y [[si no encontramos|blue]] mesa?' },
            { who: 'Ana', text: 'Compramos unos sándwiches y comemos en el parque.' },
            { who: 'Luis', text: '¡Perfecto! Yo llevo una bolsa grande [[si compro|blue]] muchos libros.' },
            { who: 'Ana', text: '¡Seguro que compras muchos!' },
          ], notes: {
            'Sí': 'Ana **responde «yes»** a la pregunta: «sí», con tilde.',
            'si terminas': 'Una **condición**: el plan de salir a las nueve depende de la hora en que Luis termina.',
            'Si hace buen tiempo': 'No saben qué tiempo va a hacer: es una **condición posible**. Verbo en presente.',
            'si llueve': 'La **alternativa** del plan: si pasa otra cosa, hacen otra cosa.',
            'Comemos en la cafetería si encontramos': 'Aquí va **primero la acción** y después la condición. Sin coma.',
            'si no encontramos': 'Luis pregunta por la alternativa: una condición negativa también usa presente.',
            'si compro': 'La bolsa grande es para un caso posible: comprar muchos libros.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Cómo van al mercado si llueve?', options: ['Caminando.', 'En autobús.', 'En taxi.'], answer: 1, why: '«Si llueve, tomamos el autobús».' },
            { prompt: '¿Qué hacen si no encuentran mesa en la cafetería?', options: ['Vuelven a casa.', 'Comen en el parque.', 'Esperan una hora.'], answer: 1, why: '«Compramos unos sándwiches y comemos en el parque».' },
            { prompt: '¿A qué hora salen?', options: ['A las ocho.', 'A las nueve.', 'A las diez.'], answer: 1, why: '«Salimos a las nueve si terminas de trabajar a las ocho» y Luis termina a las ocho.' },
          ] },
        ] },
        { title: 'Condición y acción', blocks: [
          { kind: 'classify', title: '¿Es la condición o lo que hacen?', categories: [
            { id: 'cond', label: 'Condición (si…)', tone: 'blue' },
            { id: 'accion', label: 'Lo que hacen', tone: 'teal' },
          ], items: [
            { text: 'si hace buen tiempo', answer: 'cond', why: 'Va con «si»: puede pasar o no.' },
            { text: 'caminamos desde la estación', answer: 'accion', why: 'Lo que hacen en ese caso.' },
            { text: 'tomamos el autobús', answer: 'accion', why: 'La alternativa si llueve.' },
            { text: 'si encontramos una mesa libre', answer: 'cond', why: 'Es posible, pero no seguro.' },
            { text: 'comemos en el parque', answer: 'accion', why: 'Lo que hacen si no hay mesa.' },
            { text: 'si compro muchos libros', answer: 'cond', why: 'La condición para llevar la bolsa.' },
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
            { context: 'Puede llover durante el paseo.', prompt: 'Si ___, llevamos paraguas.', options: ['llueve', 'lloverá', 'llover'], answer: 0, why: 'Después de «si», presente.' },
            { context: 'El tren puede llegar tarde.', prompt: 'Si el tren llega tarde, te ___ por mensaje.', options: ['aviso', 'avisar', 'avisando'], answer: 0, why: 'La consecuencia, en presente: «te aviso».' },
            { context: 'Tienes cuarenta minutos o no: depende.', prompt: 'Caminamos ___ tenemos cuarenta minutos.', options: ['sí', 'si', 'porque'], answer: 1, why: 'La condición, sin tilde: «si tenemos…».' },
            { context: 'Aceptas el plan.', prompt: '—¿Vamos al parque? —___, vamos.', options: ['Si', 'Sí', 'Cuando'], answer: 1, why: 'Respuesta afirmativa: «sí», con tilde.' },
            { context: 'Es una costumbre: pasa todos los días.', prompt: '___ llego a casa, me quito los zapatos.', options: ['Si', 'Cuando', 'Sí'], answer: 1, why: 'Es seguro y se repite: «cuando».' },
            { context: 'No sabes si vas a tener hambre.', prompt: 'Si ___ hambre, comemos algo en la estación.', options: ['tendremos', 'tener', 'tenemos'], answer: 2, why: 'Después de «si», presente: «tenemos».' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que **no es seguro** que haga sol?', options: ['Cuando hace sol, vamos a la playa.', 'Si hace sol, vamos a la playa.'], answer: 1, why: '«Si» presenta algo posible; «cuando», una costumbre.' },
            { prompt: '«Te llamo si salgo pronto.» ¿Qué significa?', options: ['Salgo pronto y te llamo seguro.', 'Te llamo solo en el caso de salir pronto.', 'Te llamo porque salgo pronto.'], answer: 1, why: 'La llamada depende de la condición.' },
            { prompt: '¿Qué frase tiene el **mismo significado** que «Si hay sitio, nos sentamos»?', options: ['Nos sentamos si hay sitio.', 'Hay sitio si nos sentamos.', 'Sí, hay sitio y nos sentamos.'], answer: 0, why: 'Cambia el orden, pero la condición sigue siendo «hay sitio».' },
            { prompt: '«Sí, voy si tengo tiempo.» ¿La persona va seguro?', options: ['Sí, seguro.', 'Va solo si tiene tiempo.', 'No va.'], answer: 1, why: 'Acepta («sí»), pero con una condición («si tengo tiempo»).' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Un picnic con amigos', lines: [
            { who: 'Carla', text: '¿Hacemos un picnic el domingo?' },
            { who: 'Diego', text: '¡___! Me encanta la idea.', options: ['Si', 'Sí'], answer: 1, why: 'Respuesta afirmativa, con tilde.' },
            { who: 'Carla', text: 'Si ___ sol, vamos al lago.', options: ['hace', 'hará', 'hacer'], answer: 0, why: '«Si» + presente.' },
            { who: 'Diego', text: '¿Y si llueve?' },
            { who: 'Carla', text: 'Si llueve, ___ en mi casa.', options: ['comer', 'comemos', 'comiendo'], answer: 1, why: 'La consecuencia, en presente.' },
            { who: 'Diego', text: 'Yo llevo la guitarra ___ quieres.', options: ['sí', 'si', 'cuando'], answer: 1, why: 'Condición: «si quieres».' },
            { who: 'Carla', text: '¡Perfecto! Y yo preparo una tortilla si ___ tiempo el sábado.', options: ['tengo', 'tendré', 'tener'], answer: 0, why: '«Si» + presente.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si lloverá mañana, no salimos.', ok: false, options: ['Si llueve mañana, no salimos.', 'Si llover mañana, no salimos.', 'Sí llueve mañana, no salimos.'], answer: 0, why: '«Si» + presente, aunque hablamos de mañana.' },
            { sentence: 'Si tienes frío, cierro la ventana.', ok: true, why: 'Correcta: «si» + presente, presente.' },
            { sentence: 'Si, vamos al cine si hay entradas.', ok: false, options: ['Sí, vamos al cine sí hay entradas.', 'Sí, vamos al cine si hay entradas.', 'Si, vamos al cine sí hay entradas.'], answer: 1, why: 'La respuesta lleva tilde (sí); la condición, no (si).' },
            { sentence: 'Comemos en casa si el restaurante está cerrado.', ok: true, why: 'Correcta: primero la acción, después la condición.' },
            { sentence: 'Si estar cansado, me acuesto temprano.', ok: false, options: ['Si estoy cansado, me acuesto temprano.', 'Si estaré cansado, me acuesto temprano.', 'Sí estoy cansado, me acuesto temprano.'], answer: 0, why: '«Si» + verbo conjugado en presente.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Si', 'llueve,', 'el autobús', 'tomamos'], accept: ['Si llueve, tomamos el autobús'], en: 'If it rains, we take the bus.' },
            { tiles: ['te llamo', 'si', 'salgo', 'pronto'], accept: ['te llamo si salgo pronto'], en: 'I’ll call you if I leave early.' },
            { tiles: ['Sí,', 'voy', 'si', 'tengo tiempo'], accept: ['Sí, voy si tengo tiempo'], en: 'Yes, I’ll go if I have time.' },
          ] },
          { kind: 'rewrite', title: 'Escribe la misma idea de otra forma', items: [
            { prompt: 'Si llueve, tomamos el autobús.', instruction: 'Empieza con «Tomamos…».', accept: ['Tomamos el autobús si llueve'] },
            { prompt: 'Comemos en la cafetería si hay una mesa libre.', instruction: 'Empieza con «Si…».', accept: ['Si hay una mesa libre, comemos en la cafetería', 'Si hay una mesa libre comemos en la cafetería'] },
            { prompt: 'Puede hacer frío. En ese caso, llevo un abrigo.', instruction: 'Une las ideas con «si».', accept: ['Si hace frío, llevo un abrigo', 'Si hace frío llevo un abrigo', 'Llevo un abrigo si hace frío'] },
            { prompt: '¿Vienes? → Respondes que sí, con la condición «tengo tiempo».', instruction: 'Escribe la respuesta: «Sí, voy…».', accept: ['Sí, voy si tengo tiempo', 'Sí voy si tengo tiempo'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El sábado por la mañana', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'El sábado por la mañana', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada condición y lo que van a hacer.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada «si…». Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Luis confirma el plan', channel: 'NOTA DE VOZ · PARA ANA', src: '/audio/grammar-classroom/214.mp3',
            before: 'Luis le deja una nota de voz a Ana para confirmar el plan del sábado. ¿Qué alternativas crees que propone?',
            gist: { prompt: '¿Para qué es el mensaje?', options: ['Para confirmar el plan del sábado con alternativas.', 'Para cancelar la visita al mercado.', 'Para cambiar el día.'], answer: 0, why: '«Podemos salir a las nueve» y propone qué hacer en cada caso.' },
            details: [
              { prompt: '¿Por qué pueden salir a las nueve?', options: ['Porque Luis termina de trabajar a las ocho.', 'Porque el mercado abre a las nueve.', 'Porque el autobús sale a las nueve.'], answer: 0, why: '«Termino de trabajar a las ocho, así que podemos salir a las nueve».' },
              { prompt: '¿Qué hacen si el autobús llega pronto?', options: ['Caminan al mercado.', 'Esperan en la cafetería de la estación.', 'Compran libros.'], answer: 1, why: '«Si el autobús llega pronto, esperamos en la cafetería de la estación».' },
              { prompt: '¿Y si no hay sitio en la cafetería?', options: ['Compran un café para llevar.', 'Vuelven a casa.', 'Esperan en la puerta.'], answer: 0, why: '«Si no hay sitio, compramos un café para llevar».' },
              { prompt: '¿Qué hacen si el mercado está muy lleno?', options: ['Se van a casa.', 'Dan un paseo y vuelven más tarde.', 'Comen primero.'], answer: 1, why: '«Si el mercado está muy lleno, damos un paseo primero y volvemos más tarde».' },
              { prompt: '¿Dónde se encuentran?', options: ['En la cafetería.', 'Junto a la puerta principal.', 'En la parada del autobús.'], answer: 1, why: '«Nos vemos junto a la puerta principal».' },
            ],
            transcript: 'Hola, Ana. Termino de trabajar a las ocho, así que podemos salir a las nueve. [[Si el autobús llega pronto|blue]], [[esperamos|teal]] en la cafetería de la estación. [[Si no hay sitio|blue]], [[compramos|teal]] un café para llevar. [[Llevo|teal]] mi bolsa [[si encuentro|blue]] un libro interesante. ¿Tú quieres comer allí? [[Sí|orange]], yo también. [[Si el mercado está muy lleno|blue]], [[damos|teal]] un paseo primero y volvemos más tarde. Nos vemos junto a la puerta principal.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Ana: acepta el plan con «sí» y añade una condición nueva con «si».', self: 'Responde a Luis como si fueras Ana: di «sí» al plan y añade una condición nueva con «si».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Planes con alternativas', coach: 'Siempre hay un plan B.',
      steps: [
        { title: 'Planes con alternativas', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y cambia las condiciones para obligarlo a adaptar el plan.', self: 'Responde cada pregunta en voz alta, con frases completas. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces normalmente si llueve el fin de semana?', followUps: ['¿Y si hace mucho calor?', '¿Prefieres quedarte en casa o salir igual?'], phrases: ['[[Si llueve|blue]], [[me quedo|teal]] en casa.', '[[Veo|teal]] una película [[si hace frío|blue]].', 'Normalmente…'], hint: 'Una condición con «si» y lo que haces, los dos en presente.', example: 'Si llueve, me quedo en casa y leo. Si hace mucho calor, voy a la piscina con mis hijos.', next: 'Ahora hablemos de imprevistos.', teacher: 'Cambia la condición: «¿Y si llueve toda la semana?».' },
            { q: '¿Qué haces si llegas tarde a una cita o a una clase?', followUps: ['¿Avisas siempre?', '¿Qué haces si otra persona llega tarde?'], phrases: ['[[Si llego tarde|blue]], [[aviso|teal]] por mensaje.', '[[Si la otra persona no llega|blue]], [[espero|teal]]…'], hint: 'Piensa en lo que haces de verdad, no en lo ideal.', example: 'Si llego tarde, aviso por mensaje. Si la otra persona no llega, espero quince minutos y después la llamo.', next: 'Hablemos de comida.' },
            { q: '¿Qué comes si tienes muy poco tiempo?', followUps: ['¿Cocinas o compras algo?', '¿Y si tienes mucho tiempo?'], phrases: ['[[Si tengo poco tiempo|blue]], [[como|teal]]…', '[[Cocino|teal]] [[si tengo tiempo|blue]].'], hint: 'Compara dos situaciones con dos frases con «si».', example: 'Si tengo poco tiempo, como un sándwich. Si tengo tiempo, cocino arroz con verduras.', next: 'Ahora, ¡vamos a planear juntos!' },
            { q: 'Planeamos una salida el sábado. ¿Qué hacemos si hace buen tiempo? ¿Y si llueve?', followUps: ['¿Cómo vamos?', '¿Qué hacemos si el lugar está lleno?', '¿A qué hora salimos?'], phrases: ['[[Si hace buen tiempo|blue]], [[vamos|teal]]…', '[[Si llueve|blue]], …', '[[Sí|orange]], [[si|blue]] quieres…'], hint: 'Propón un plan A y un plan B. Acepta las ideas del otro con «Sí, …».', example: 'Si hace buen tiempo, vamos al parque en bicicleta. Si llueve, vamos al museo. Si el museo está lleno, tomamos un café y volvemos después.', next: 'Ahora piensa en las vacaciones.', teacher: 'Haz de compañero: acepta con «sí» y cambia una condición cada vez.' },
            { q: '¿Qué haces si tienes unos días de vacaciones?', followUps: ['¿Viajas o descansas?', '¿Qué haces si no tienes mucho dinero?'], phrases: ['[[Si tengo|blue]] días libres, [[viajo|teal]]…', '[[Si no tengo|blue]] dinero, …'], hint: 'Una condición positiva y otra negativa (si no…).', example: 'Si tengo unos días libres, visito a mis padres. Si no tengo mucho dinero, hago excursiones cerca de mi ciudad.', next: 'Para terminar, una pregunta sobre el español.' },
            { q: '¿Qué haces si no entiendes algo en español?', followUps: ['¿Preguntas o buscas en el diccionario?', '¿Qué haces si alguien habla muy rápido?'], phrases: ['[[Si no entiendo|blue]] una palabra, [[pregunto|teal]].', '[[Pido|teal]] ayuda [[si|blue]]…'], hint: 'Da dos estrategias reales.', example: 'Si no entiendo una palabra, pregunto. Si alguien habla muy rápido, le digo: «Más despacio, por favor».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno pregunta al profesor «¿Qué haces si…?» con dos situaciones nuevas.', self: 'Escribe dos preguntas con «¿Qué haces si…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un plan con alternativas', coach: 'Escribe un plan real.',
      steps: [
        { title: 'Un plan con alternativas', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después corrijan juntos lo que la revisión no ve.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Plan para el sábado', situation: 'Un amigo te pregunta: «¿Hacemos algo el sábado?». Respóndele con un plan que tiene alternativas.', task: [
            'Empieza aceptando con **sí**.',
            'Escribe **tres condiciones** reales con **si** + presente (el tiempo, el transporte, la comida…).',
            'Usa los dos órdenes: «Si…, …» y «… si…».',
            'Termina con el lugar y la hora de encuentro.',
          ], starters: ['¡Sí! Podemos…', 'Si hace buen tiempo, …', 'Si llueve, …', '… si hay…', 'Nos vemos…'],
            words: ['caminar', 'tomar el autobús', 'una mesa libre', 'lleno', 'temprano', 'más tarde', 'llevar', 'la estación', 'el parque'],
            model: '[[Sí|orange]], podemos salir a las nueve. [[Si hace buen tiempo|blue]], [[caminamos|teal]] hasta el mercado. [[Tomamos|teal]] el autobús [[si llueve|blue]]. [[Si hay una mesa libre|blue]], [[comemos|teal]] en la cafetería. [[Si el mercado está lleno|blue]], [[damos|teal]] un paseo y volvemos después. Nos vemos en la estación.',
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
            { tone: 'blue', label: 'SI PRIMERO', formula: 'si + presente, presente', example: 'Si llueve, tomamos el autobús.', caption: 'Condición posible y lo que hacemos.', en: 'if + present' },
            { tone: 'teal', label: 'ACCIÓN PRIMERO', formula: 'presente + si + presente', example: 'Tomamos el autobús si llueve.', caption: 'Mismo significado, sin coma.', en: 'the order can change' },
            { tone: 'orange', label: 'SI / SÍ', formula: 'si = condición · sí = respuesta', example: 'Sí, voy si tengo tiempo.', caption: 'La tilde cambia el significado.', en: 'if / yes' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Dos reglas', text: 'Después de **si**, siempre **presente** (nunca futuro). Y **sí** con tilde solo cuando respondes o confirmas.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Si ___ tarde, te espero en la estación.', options: ['llegarás', 'llegas', 'llegar'], answer: 1, why: '«Si» + presente.' },
            { prompt: '—¿Vienes? —___, claro.', options: ['Si', 'Sí'], answer: 1, why: 'Respuesta afirmativa.' },
            { prompt: 'Compro pan ___ la panadería está abierta.', options: ['si', 'sí', 'porque si'], answer: 0, why: 'Una condición: «si», sin tilde.' },
            { prompt: '«Si tengo tiempo, te ayudo.» ¿Qué frase significa lo mismo?', options: ['Te ayudo si tengo tiempo.', 'Tengo tiempo si te ayudo.', 'Sí, tengo tiempo y te ayudo.'], answer: 0, why: 'Mismo significado: solo cambia el orden.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Si llueve, tomamos el autobús» y «Cuando llueve, tomamos el autobús»: ¿qué diferencia hay? La primera es un plan para un caso posible; la segunda, una costumbre.' },
        ] },
      ],
    },
  ],
};
