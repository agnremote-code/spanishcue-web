import type { LiveLesson } from '../types';

/**
 * Lesson 143 · A2 · Pretérito imperfecto (hablaba, comía).
 * The class describes places and lives "from inside": a small library, an old
 * office and Rosa's neighbourhood as she remembers it.
 */
export const lesson: LiveLesson = {
  id: 143,
  level: 'A2',
  title: 'Pretérito imperfecto',
  subtitle: 'Describir cómo eran las cosas antes, contar hábitos del pasado y presentar una acción que estaba en desarrollo.',
  legend: [
    { tone: 'blue', label: 'Descripción · cómo era, qué había' },
    { tone: 'teal', label: 'Hábito pasado · antes, siempre, cada viernes' },
    { tone: 'violet', label: 'Acción en desarrollo · mientras…' },
    { tone: 'orange', label: 'Un hecho que pasó (indefinido)' },
  ],
  optionNotes: {
    'jugué una vez': '«Jugué» es indefinido: un hecho terminado. Aquí se habla de un hábito.',
    'he jugado mañana': 'Perfecto y futuro a la vez: no sirve para un hábito de la infancia.',
    'Fueron': '«Fueron» es indefinido. Para la hora como fondo de la escena, usa el imperfecto: eran.',
    'Han sido': '«Han sido» es perfecto. La hora de fondo usa el imperfecto: eran.',
    fui: '«Fui» es indefinido de ir. El imperfecto es **iba**.',
    'iría': '«Iría» es condicional. El imperfecto de ir es **iba**.',
    'tomé ayer': '«Tomé ayer» cuenta un hecho de un día concreto. «Antes» pide un hábito: tomaba.',
    'tomaré': '«Tomaré» es futuro. «Antes» pide imperfecto: tomaba.',
    'fue': '«Fue» presenta algo terminado. Para describir, usa **era**.',
    'tuvo': '«Tuvo» es indefinido. Para describir cómo era un lugar, usa **tenía**.',
    'vía': 'Ver es irregular en imperfecto: **veía**.',
    'iva': 'Iba se escribe con **b**.',
    'comiba': 'Con -er e -ir la terminación es -ía: **comía**.',
    'vivaba': 'Con -ir la terminación es -ía: **vivía**.',
    'eraba': 'Ser es irregular: **era**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El pretérito imperfecto', coach: 'Una ventana al pasado.',
      steps: [
        { title: 'Cómo era', blocks: [
          { kind: 'lead', text: 'Elena recuerda la biblioteca donde estudiaba: «La sala **tenía** ventanas grandes y **estaba** tranquila». No cuenta qué pasó: **describe** cómo era. Para eso usamos el **imperfecto**.', en: 'We use the imperfect to describe the past.' },
          { kind: 'guide', text: { teacher: 'Tu alumno cierra los ojos mientras tú lees los ejemplos. Pregunta: «¿Qué ves? ¿Pasa algo o es una foto?».', self: 'Lee los ejemplos e imagina la escena, como en una foto.' } },
          { kind: 'concept', tone: 'blue', label: 'DESCRIPCIÓN', question: '¿Cómo era?', en: 'describing the past', formula: ['era / estaba / tenía / había + descripción'],
            meaning: 'El imperfecto **describe** lugares, personas, cosas y situaciones del pasado. También la **edad**, la **hora** y el **tiempo** que hacía. Es el fondo de una historia.',
            examples: [
              { es: 'La biblioteca [[era|blue]] pequeña y [[tenía|blue]] ventanas grandes.', en: 'The library was small and had big windows.' },
              { es: 'La calle [[estaba|blue]] vacía.', en: 'The street was empty.' },
              { es: 'En invierno [[hacía|blue]] frío, pero [[había|blue]] buena luz.', en: 'In winter it was cold, but there was good light.' },
              { es: '[[Eran|blue]] las diez y yo [[tenía|blue]] doce años.', en: 'It was ten o’clock and I was twelve.' },
            ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Mi primera casa ___ muy pequeña.', options: ['era', 'fue', 'es'], answer: 0, why: 'Describimos cómo era la casa: imperfecto.' },
            { prompt: '___ las diez y todos dormían.', options: ['Eran', 'Fueron', 'Han sido'], answer: 0, why: 'La hora es el fondo de la escena: eran.' },
          ] },
        ] },
        { title: 'Las formas', mascot: '/brand/mascot/studying.webp', coach: 'Solo dos terminaciones y tres irregulares.', blocks: [
          { kind: 'table', title: 'Imperfecto regular', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'habl**aba**', 'com**ía**', 'viv**ía**'],
            ['tú', 'habl**abas**', 'com**ías**', 'viv**ías**'],
            ['él / ella / usted', 'habl**aba**', 'com**ía**', 'viv**ía**'],
            ['nosotros / nosotras', 'habl**ábamos**', 'com**íamos**', 'viv**íamos**'],
            ['vosotros / vosotras', 'habl**abais**', 'com**íais**', 'viv**íais**'],
            ['ellos / ellas / ustedes', 'habl**aban**', 'com**ían**', 'viv**ían**'],
          ], note: '-ar → **-aba**. -er e -ir → **-ía** (siempre con tilde). Yo y él / ella tienen la misma forma: el contexto o el pronombre deciden.' },
          { kind: 'table', title: 'Solo tres irregulares', head: ['Infinitivo', 'yo', 'tú', 'él / ella', 'nosotros', 'ellos'], rows: [
            ['ser', '**era**', 'eras', 'era', 'éramos', 'eran'],
            ['ir', '**iba**', 'ibas', 'iba', 'íbamos', 'iban'],
            ['ver', '**veía**', 'veías', 'veía', 'veíamos', 'veían'],
          ], note: 'Todos los demás verbos son regulares en imperfecto, también tener (tenía), hacer (hacía) o poder (podía).' },
          { kind: 'tip', icon: '🎯', title: 'Nosotros lleva tilde', text: 'habl**á**bamos, **é**ramos, **í**bamos: con nosotros, la tilde va en la sílaba fuerte.', en: 'hablábamos, éramos, íbamos' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El imperfecto de **ir** (yo) es…', options: ['iba', 'fui', 'iría'], answer: 0, why: 'Ir es uno de los tres irregulares: iba.' },
            { prompt: 'Antes mis abuelos ___ en el campo.', options: ['vivían', 'vivaban', 'vivieron siempre'], answer: 0, why: 'Vivir, ellos: viv + ían.' },
            { prompt: 'De niños, mi hermano y yo ___ dibujos animados todas las tardes.', options: ['veíamos', 'víamos', 'vimos'], answer: 0, why: 'Ver es irregular: veíamos.' },
          ] },
        ] },
        { title: 'Hábitos del pasado', mascot: '/brand/mascot/speaking.webp', coach: 'Lo que hacías antes, muchas veces.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'HÁBITO PASADO', question: '¿Qué hacías antes?', en: 'past habits (used to)', formula: ['antes / de niño / siempre / todos los veranos / cada viernes + imperfecto'],
            meaning: 'Cuenta acciones que **se repetían** en una etapa del pasado. No importa cuándo terminó el hábito.',
            examples: [
              { es: 'De niño [[jugaba|teal]] al fútbol en la calle.', en: 'As a child I used to play football in the street.' },
              { es: 'Todos los veranos [[viajábamos|teal]] a la costa.', en: 'Every summer we used to travel to the coast.' },
              { es: 'Antes no [[tomaba|teal]] café.', en: 'I didn’t use to drink coffee.' },
              { es: 'Cada viernes [[comíamos|teal]] todos juntos.', en: 'Every Friday we all used to eat together.' },
            ] },
          { kind: 'compare', title: 'Antes y ahora', columns: [
            { tone: 'teal', label: 'ANTES · IMPERFECTO', sentence: 'Antes [[iba|teal]] a la biblioteca cada viernes.', idea: 'Un hábito de una etapa pasada.', en: 'I used to go' },
            { tone: 'blue', label: 'AHORA · PRESENTE', sentence: 'Ahora estudio en casa.', idea: 'El hábito de hoy.', en: 'now I study' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Cuando era niño, ___ al fútbol.', options: ['jugaba', 'jugué una vez', 'he jugado mañana'], answer: 0, why: 'Un hábito de la infancia: jugaba.' },
            { prompt: 'Antes no ___ café.', options: ['tomaba', 'tomé ayer', 'tomaré'], answer: 0, why: '«Antes» + hábito: tomaba.' },
          ] },
        ] },
        { title: 'Una acción en desarrollo', mascot: '/autoestudio/mascot/noting.webp', coach: 'Una acción vista desde dentro.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'EN DESARROLLO', question: '¿Qué estaba pasando?', en: 'an action in progress', formula: ['mientras + imperfecto', 'imperfecto + cuando + hecho (indefinido)'],
            meaning: 'Presenta una acción **en desarrollo**, sin principio ni fin. Muchas veces es el fondo de otro **hecho**, que va en indefinido.',
            examples: [
              { es: '[[Cocinaba|violet]] cuando [[llamaste|orange]].', en: 'I was cooking when you called.' },
              { es: 'Mientras [[buscaba|violet]] un libro, [[encontré|orange]] una nota.', en: 'While I was looking for a book, I found a note.' },
              { es: 'Yo [[leía|violet]] y mi compañera [[trabajaba|violet]] en la mesa de al lado.', en: 'I was reading and my classmate was working at the next table.' },
            ] },
          { kind: 'compare', title: 'El fondo y el hecho', columns: [
            { tone: 'violet', label: 'FONDO · IMPERFECTO', sentence: 'Mientras [[buscaba|violet]] un libro…', idea: 'La acción en desarrollo: la vemos desde dentro.', en: 'I was looking' },
            { tone: 'orange', label: 'HECHO · INDEFINIDO', sentence: '…[[encontré|orange]] una nota.', idea: 'Lo que pasó en ese momento: una acción completa.', en: 'I found' },
          ] },
          { kind: 'tip', icon: '🎬', title: 'Hoy, solo el fondo', text: 'En esta clase practicamos el **imperfecto**. El indefinido aparece solo para el hecho que interrumpe. La relación completa entre los dos pasados se estudia en otra clase.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Mientras buscaba un libro, encontré una nota.» ¿Qué acción estaba en desarrollo?', options: ['Buscar un libro.', 'Encontrar una nota.'], answer: 0, why: '«Buscaba»: la acción en desarrollo. «Encontré»: el hecho.' },
            { prompt: 'Yo ___ la cena cuando sonó el teléfono.', options: ['preparaba', 'preparé', 'preparo'], answer: 0, why: 'La acción en desarrollo, el fondo: preparaba.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Foto o noticia?', blocks: [
          { kind: 'decide', title: 'Hablas del pasado. Responde', steps: [
            { q: '¿Describes cómo era algo (un lugar, una persona, la hora, la edad)?', yes: 'Usa el **imperfecto**: «La sala [[era|blue]] tranquila».', no: 'next' },
            { q: '¿Es algo que se repetía en una etapa (antes, siempre, cada viernes)?', yes: 'Usa el **imperfecto**: «Antes [[iba|teal]] a la biblioteca».', no: 'next' },
            { q: '¿Es una acción en desarrollo, el fondo de otra cosa (mientras…)?', yes: 'Usa el **imperfecto**: «Mientras [[buscaba|violet]] un libro…».', no: 'Probablemente es un **hecho** terminado: usa el indefinido: «Ayer [[encontré|orange]] una nota».' },
          ] },
          { kind: 'tip', icon: '📷', title: 'Una imagen para recordar', text: 'El imperfecto es como una **foto** o un video sin principio ni fin: describe la escena. El indefinido es la **noticia**: lo que pasó.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Descripción con imperfecto.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'La casa fue pequeña y tuvo un jardín.', right: 'La casa era pequeña y tenía un jardín.', why: 'Es una descripción: imperfecto.' },
            { wrong: 'De niño iva al parque.', right: 'De niño iba al parque.', why: 'Iba se escribe con b.' },
            { wrong: 'Antes comiba mucha fruta.', right: 'Antes comía mucha fruta.', why: 'Con -er, la terminación es -ía.' },
            { wrong: 'Antes nosotros ibamos a la playa.', right: 'Antes nosotros íbamos a la playa.', why: 'Con nosotros, la tilde: íbamos.' },
            { wrong: 'Cuando tuve diez años, vivía en Cali.', right: 'Cuando tenía diez años, vivía en Cali.', why: 'La edad es descripción: tenía.' },
            { wrong: 'Cada verano fuimos a la casa de mi abuela.', right: 'Cada verano íbamos a la casa de mi abuela.', why: '«Cada verano» es un hábito: imperfecto.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres frases sobre su infancia: cómo era su casa, qué hacía cada verano y qué hacía su familia los domingos.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El imperfecto en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'El barrio de la abuela', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica si describe, cuenta un hábito o muestra una acción en desarrollo.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una entrevista para la escuela', setting: 'Lucas tiene que hacer un trabajo sobre su barrio. Le pregunta a su abuela Rosa cómo era antes.', lines: [
            { who: 'Lucas', text: 'Abuela, ¿cómo [[era|blue]] el barrio cuando eras joven?' },
            { who: 'Rosa', text: 'Uy, muy diferente. [[Era|blue]] más pequeño y [[había|blue]] muchos árboles.' },
            { who: 'Lucas', text: '¿Y [[había|blue]] tiendas?' },
            { who: 'Rosa', text: 'Solo una panadería y un mercado. [[Todos los sábados íbamos|teal]] al mercado con mi madre.' },
            { who: 'Lucas', text: '¿Y qué hacías después de la escuela?' },
            { who: 'Rosa', text: '[[Jugaba|teal]] en la calle con mis amigas. No [[teníamos|blue]] televisión.' },
            { who: 'Lucas', text: '¿En serio? ¿Y cómo conociste al abuelo?' },
            { who: 'Rosa', text: 'Una tarde, mientras [[esperaba|violet]] el autobús, él [[se acercó|orange]] y me [[preguntó|orange]] la hora.' },
            { who: 'Lucas', text: '¡Qué romántico! ¿Qué hora [[era|blue]]?' },
            { who: 'Rosa', text: '[[Eran las seis|blue]] y [[llovía|blue]] muchísimo. Yo [[tenía|blue]] diecinueve años.' },
            { who: 'Lucas', text: '¿Y el abuelo [[trabajaba|teal]] en el barrio?' },
            { who: 'Rosa', text: 'Sí, en la panadería. [[Cada mañana me guardaba|teal]] el pan más fresco.' },
          ], notes: {
            'era': 'Lucas y Rosa piden y dan una **descripción** del barrio o de la hora: ser → era.',
            'Era': 'Rosa **describe** el barrio: ser → era (irregular).',
            'había': '«**Había**» es el imperfecto de hay. Describe lo que existía en el lugar.',
            'Todos los sábados íbamos': '«Todos los sábados» marca un **hábito**. Ir → íbamos (irregular, con tilde).',
            'Jugaba': 'Un **hábito** de su infancia: lo hacía cada tarde.',
            'teníamos': '**Describe** su vida de entonces: no tenían televisión.',
            'esperaba': '«**Mientras** esperaba»: la acción en desarrollo, el fondo de la escena.',
            'se acercó': 'El **hecho** que pasa en medio de la escena: indefinido.',
            'preguntó': 'Otro **hecho** de la historia: indefinido.',
            'Eran las seis': 'La **hora** es parte de la descripción: eran.',
            'llovía': 'El **tiempo** que hacía: descripción del fondo.',
            'tenía': 'La **edad** en el pasado se describe con imperfecto: tenía diecinueve años.',
            'trabajaba': 'Un trabajo de **una etapa**, algo habitual: trabajaba.',
            'Cada mañana me guardaba': '«**Cada mañana**»: un hábito del abuelo.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Cómo era el barrio antes?', options: ['Más pequeño y con muchos árboles.', 'Grande y con muchas tiendas.', 'Igual que ahora.'], answer: 0, why: '«Era más pequeño y había muchos árboles».' },
            { prompt: '¿Qué hacía Rosa cuando el abuelo se acercó?', options: ['Esperaba el autobús.', 'Compraba pan.', 'Jugaba en la calle.'], answer: 0, why: '«Mientras esperaba el autobús, él se acercó».' },
            { prompt: '¿Qué hacía el abuelo cada mañana?', options: ['Le guardaba el pan más fresco.', 'Esperaba el autobús.', 'Iba al mercado.'], answer: 0, why: '«Cada mañana me guardaba el pan más fresco».' },
          ] },
        ] },
        { title: '¿Descripción, hábito o en desarrollo?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases', categories: [
            { id: 'desc', label: 'Descripción', tone: 'blue' },
            { id: 'habito', label: 'Hábito pasado', tone: 'teal' },
            { id: 'desarrollo', label: 'En desarrollo', tone: 'violet' },
          ], items: [
            { text: 'Había muchos árboles.', answer: 'desc', why: 'Describe el barrio.' },
            { text: 'Todos los sábados íbamos al mercado.', answer: 'habito', why: '«Todos los sábados»: se repetía.' },
            { text: 'Mientras esperaba el autobús…', answer: 'desarrollo', why: '«Mientras»: la acción en desarrollo.' },
            { text: 'Yo tenía diecinueve años.', answer: 'desc', why: 'La edad es descripción.' },
            { text: 'Jugaba en la calle después de la escuela.', answer: 'habito', why: 'Lo hacía cada tarde.' },
            { text: 'Yo leía cuando llegó mi hermana.', answer: 'desarrollo', why: 'Leer estaba en desarrollo cuando llegó.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Piensa en la escena.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Describes tu primera casa.', prompt: 'Mi primera casa ___ un balcón pequeño.', options: ['tenía', 'tuvo', 'tengo'], answer: 0, why: 'Una descripción: tenía.' },
            { context: 'Un hábito de tu infancia.', prompt: 'De niña ___ a la playa todos los veranos.', options: ['iba', 'iva', 'fui'], answer: 0, why: 'Un hábito: iba (con b).' },
            { context: 'Tus padres, cuando eran jóvenes.', prompt: 'Mis padres ___ en un pueblo pequeño.', options: ['vivían', 'vivaban', 'vivimos'], answer: 0, why: 'Ellos: viv + ían.' },
            { context: 'La escena de una historia.', prompt: '___ mucho frío esa noche.', options: ['Hacía', 'Hizo una vez', 'Hace'], answer: 0, why: 'El tiempo como fondo: hacía.' },
            { context: 'Una acción en desarrollo.', prompt: 'Mientras yo ___, mi hermano veía la tele.', options: ['estudiaba', 'estudié', 'estudio'], answer: 0, why: 'Dos acciones en desarrollo al mismo tiempo: estudiaba, veía.' },
            { context: 'Tus amigos y tú, en la escuela.', prompt: 'En la escuela nosotros ___ muy buenos amigos.', options: ['éramos', 'eramos', 'fuimos siempre'], answer: 0, why: 'Ser, nosotros: éramos, con tilde.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase cuenta un **hábito**?', options: ['Los domingos comíamos con mis tíos.', 'El domingo comimos con mis tíos.'], answer: 0, why: '«Los domingos» + imperfecto: se repetía. La otra frase es un solo domingo.' },
            { prompt: '«Leía cuando llegaste.» ¿Qué pasó primero?', options: ['Yo ya leía cuando llegaste.', 'Llegaste y después empecé a leer.'], answer: 0, why: '«Leía» es el fondo: ya estaba leyendo.' },
            { prompt: '¿Qué frase **describe** un lugar?', options: ['La sala tenía ventanas grandes.', 'Abrieron la sala a las ocho.'], answer: 0, why: '«Tenía» describe. «Abrieron» cuenta un hecho.' },
            { prompt: '«Antes iba al gimnasio.» ¿Qué entiendes?', options: ['Era un hábito; ahora probablemente no voy.', 'Fui una vez.', 'Voy a ir mañana.'], answer: 0, why: 'Antes + imperfecto: un hábito de otra etapa.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La casa fue pequeña.', ok: false, options: ['La casa era pequeña.', 'La casa es pequeña antes.', 'La casa estuvo pequeña.'], answer: 0, why: 'La descripción sin límite usa imperfecto: era.' },
            { sentence: 'Cuando era niño, vivía en Montevideo.', ok: true, why: 'Correcta: edad / etapa y descripción.' },
            { sentence: 'Antes mi madre trabajiba en un banco.', ok: false, options: ['Antes mi madre trabajaba en un banco.', 'Antes mi madre trabajía en un banco.', 'Antes mi madre trabajó siempre en un banco.'], answer: 0, why: '-ar → -aba: trabajaba.' },
            { sentence: 'Todos los veranos visitábamos a los abuelos.', ok: true, why: 'Correcta: un hábito, con tilde en visitábamos.' },
            { sentence: 'De niño yo vía muchos dibujos animados.', ok: false, options: ['De niño yo veía muchos dibujos animados.', 'De niño yo vi muchos dibujos animados siempre.', 'De niño yo veo muchos dibujos animados.'], answer: 0, why: 'Ver es irregular: veía.' },
            { sentence: 'Eran las ocho y la tienda estaba cerrada.', ok: true, why: 'Correcta: la hora y el estado describen la escena.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Fotos antiguas', lines: [
            { who: 'Marta', text: '¡Mira esta foto! Es nuestra oficina de antes.' },
            { who: 'Javier', text: '¡Qué pequeña ___!', options: ['era', 'fue', 'es'], answer: 0, why: 'Describe la oficina en el pasado: era.' },
            { who: 'Marta', text: 'Sí, y solo ___ una sala de reuniones.', options: ['había', 'hubo', 'hay'], answer: 0, why: 'Describe lo que existía: había.' },
            { who: 'Javier', text: '¿Te acuerdas? Cada viernes ___ todos juntos.', options: ['comíamos', 'comimos', 'comemos'], answer: 0, why: '«Cada viernes» es un hábito: comíamos.' },
            { who: 'Marta', text: 'Claro. Y tú siempre ___ el café para todos.', options: ['preparabas', 'preparaste', 'preparas'], answer: 0, why: '«Siempre» + hábito pasado, con tú: preparabas.' },
            { who: 'Javier', text: 'Es verdad. Y tú ___ junto a la ventana, ¿no?', options: ['trabajabas', 'trabajaste', 'trabajaban'], answer: 0, why: 'Describe dónde estaba su lugar: trabajabas.' },
            { who: 'Marta', text: 'Sí. ¡Nos ___ mucho ese lugar!', options: ['gustaba', 'gustó una vez', 'gustan'], answer: 0, why: 'Un sentimiento de una etapa: gustaba.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['iba', 'Todos los domingos', 'al parque'], accept: ['Todos los domingos iba al parque', 'Iba al parque todos los domingos'], en: 'Every Sunday I used to go to the park.' },
            { tiles: ['tenía', 'La sala', 'grandes', 'ventanas'], accept: ['La sala tenía ventanas grandes'], en: 'The room had big windows.' },
            { tiles: ['buscaba', 'Mientras', 'un libro', 'una nota', 'encontré'], accept: ['Mientras buscaba un libro encontré una nota', 'Encontré una nota mientras buscaba un libro'], en: 'While I was looking for a book, I found a note.' },
          ] },
          { kind: 'rewrite', title: 'Cuéntalo con el imperfecto', items: [
            { prompt: 'Ahora vivo en una ciudad grande.', instruction: 'Empieza con «Antes…» y habla de un pueblo.', accept: ['Antes vivía en un pueblo', 'Antes yo vivía en un pueblo', 'Antes vivía en un pueblo pequeño'] },
            { prompt: 'Voy al parque todos los domingos.', instruction: 'Cuéntalo como un hábito de tu infancia. Empieza con «De niño…» o «De niña…».', accept: ['De niño iba al parque todos los domingos', 'De niña iba al parque todos los domingos', 'De niño todos los domingos iba al parque', 'De niña todos los domingos iba al parque'] },
            { prompt: 'La biblioteca es tranquila y tiene buena luz.', instruction: 'Escríbela en pasado, como una descripción.', accept: ['La biblioteca era tranquila y tenía buena luz'] },
            { prompt: 'Somos muy amigos.', instruction: 'Empieza con «En la escuela…».', accept: ['En la escuela éramos muy amigos', 'En la escuela nosotros éramos muy amigos'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una oficina que cambió', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una oficina que cambió', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno dibuja la oficina con los detalles que oye.', self: 'Escucha una vez para la idea general. En la segunda escucha, imagina o dibuja la oficina.' } },
          { kind: 'listen', title: 'Una oficina que cambió', channel: 'NOTA DE VOZ · A UN EXCOMPAÑERO', src: '/audio/grammar-classroom/143.mp3',
            before: 'Una persona recuerda la oficina donde trabajaba antes con un compañero. ¿Cómo crees que era?',
            gist: { prompt: '¿Qué siente la persona por su oficina anterior?', options: ['Le gustaba mucho, la recuerda con cariño.', 'No le gustaba nada.', 'No la recuerda bien.'], answer: 0, why: '«Ahora entiendo por qué nos gustaba tanto ese lugar».' },
            details: [
              { prompt: '¿Cómo era la oficina?', options: ['Pequeña, con una sola sala de reuniones.', 'Grande, con muchas salas.', 'Moderna y silenciosa.'], answer: 0, why: '«Era pequeña y tenía una sola sala de reuniones».' },
              { prompt: '¿Dónde estaba la mesa del compañero?', options: ['Cerca de la ventana.', 'Junto a la puerta.', 'En la sala de reuniones.'], answer: 0, why: '«Tú tenías la mesa cerca de la ventana».' },
              { prompt: '¿Qué hacían cada viernes?', options: ['Comían todos juntos.', 'Tenían reuniones largas.', 'Trabajaban desde casa.'], answer: 0, why: '«Cada viernes comíamos todos juntos».' },
              { prompt: '¿Qué problema había por la tarde?', options: ['Mucho ruido.', 'Mucho calor.', 'Poca luz.'], answer: 0, why: '«Había mucho ruido por la tarde».' },
              { prompt: '¿Qué hacía cuando recordó las reuniones largas?', options: ['Miraba una foto.', 'Preparaba café.', 'Trabajaba en un proyecto.'], answer: 0, why: '«Mientras la miraba, recordé las reuniones largas».' },
            ],
            transcript: 'Hola, ¿recuerdas nuestra oficina anterior? [[Era|blue]] pequeña y [[tenía|blue]] una sola sala de reuniones. Yo [[trabajaba|teal]] junto a la puerta y tú [[tenías|blue]] la mesa cerca de la ventana. [[Cada viernes comíamos|teal]] todos juntos. [[Había|blue]] mucho ruido por la tarde, pero nos [[ayudábamos|teal]] con los proyectos. Ayer [[vi|orange]] una foto de esa época. Mientras la [[miraba|violet]], [[recordé|orange]] las reuniones largas y el café que [[preparaba|teal]] Marta. Ahora entiendo por qué nos [[gustaba|blue]] tanto ese lugar.',
            reply: { teacher: 'El alumno responde como el excompañero: ¿cómo recuerda él la oficina? ¿Qué hacía allí normalmente?', self: 'Responde en voz alta como el excompañero: di qué recuerdas de esa oficina y qué hacías allí normalmente.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Cómo eran las cosas', coach: 'Pinta tu pasado con palabras.',
      steps: [
        { title: 'Cómo eran las cosas', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Pide detalles para imaginar la escena y comparte también tus recuerdos.', self: 'Responde cada pregunta en voz alta. Da detalles: colores, personas, sonidos.' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo era la casa donde vivías de niño o de niña?', followUps: ['¿Cuántas habitaciones tenía?', '¿Qué había cerca?', '¿Cuál era tu lugar favorito?'], phrases: ['[[Era|blue]] grande / pequeña…', '[[Tenía|blue]] un jardín / un balcón…', 'Cerca [[había|blue]]…'], hint: 'Para describir: era, tenía, había, estaba.', example: 'Era una casa vieja y tenía un patio con plantas. Cerca había una panadería. Mi lugar favorito era la cocina de mi abuela.', next: 'Ahora piensa en tus costumbres de esa época.' },
            { q: '¿Qué hacías los fines de semana cuando eras niño o niña?', followUps: ['¿Con quién jugabas?', '¿Adónde ibas?', '¿Qué comían los domingos?'], phrases: ['Los sábados [[jugaba|teal]]…', 'Siempre [[íbamos|teal]] a…', 'Mi familia [[comía|teal]]…'], hint: 'Para hábitos: los sábados, siempre, a veces + imperfecto.', example: 'Los sábados jugaba en la calle con mis primos. Los domingos íbamos a casa de mis abuelos y comíamos todos juntos.', next: 'Hablemos de un lugar donde estudiabas o trabajabas.' },
            { q: 'Describe un lugar donde estudiabas o trabajabas antes.', followUps: ['¿Cómo era el ambiente?', '¿Quién trabajaba o estudiaba contigo?', '¿Qué hacías en la pausa?'], phrases: ['La sala [[era|blue]]…', 'Mis compañeros [[eran|blue]]…', 'En la pausa [[tomábamos|teal]]…'], hint: 'Describe el espacio, las personas y un hábito.', example: 'Estudiaba en una biblioteca pequeña. Era tranquila y tenía buena luz. En la pausa tomábamos café en la plaza.', next: 'Compara aquella época con ahora.', teacher: 'Pregunta por un detalle concreto: un olor, un sonido, una persona. Así el alumno usa más descripción.' },
            { q: '¿Qué hacías antes que ahora no haces? ¿Y al revés?', followUps: ['¿Por qué cambiaste?', '¿Qué hábito quieres recuperar?', '¿Qué era más fácil antes?'], phrases: ['Antes [[iba|teal]]…; ahora…', 'Antes no [[tomaba|teal]]…', 'Antes [[tenía|blue]] más tiempo.'], hint: 'Antes + imperfecto; ahora + presente.', example: 'Antes iba al trabajo en bicicleta; ahora voy en autobús. Antes no tomaba café y ahora tomo tres al día.', next: 'Ahora, una escena concreta.' },
            { q: 'Recuerda un momento especial: ¿qué estabas haciendo cuando pasó algo inesperado?', followUps: ['¿Dónde estabas?', '¿Qué hora era?', '¿Qué hacían las otras personas?'], phrases: ['Mientras [[cocinaba|violet]]…', '[[Eran|blue]] las…', 'Mi hermano [[leía|violet]] cuando…'], hint: 'Describe el fondo con imperfecto. Para el hecho, usa el indefinido: «llamó», «llegó».', example: 'Eran las nueve de la noche. Mientras cocinaba, mi hermano leía en el sofá. De repente llamó mi amiga con una gran noticia.', next: 'Para terminar, una persona importante.' },
            { q: '¿Cómo era una persona importante de tu infancia?', followUps: ['¿Cómo era físicamente?', '¿Qué hacía siempre?', '¿Qué te decía?'], phrases: ['[[Era|blue]] alta / simpática…', '[[Tenía|blue]] el pelo…', 'Siempre me [[contaba|teal]]…'], hint: 'Describe su aspecto y su carácter, y cuenta un hábito suyo.', example: 'Mi abuelo era alto y muy tranquilo. Tenía las manos grandes. Siempre me contaba historias de su pueblo.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te pregunta cómo era tu casa o tu escuela.', self: 'Escribe tres preguntas con «¿Cómo era…?» y «¿Qué hacías…?» y házselas a alguien mayor de tu familia esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un lugar de tu pasado', coach: 'Describe para que se pueda imaginar.',
      steps: [
        { title: 'Un lugar de tu pasado', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos que la descripción y los hábitos estén en imperfecto.', self: 'Escribe tu texto y toca «Revisar mi texto». Comprueba que los verbos de descripción y hábito están en imperfecto.' } },
          { kind: 'write', title: 'Antes estudiaba en…', situation: 'Una revista de la escuela de idiomas pide textos breves: «El lugar donde estudiaba o trabajaba». Escribe el tuyo.', task: [
            '**Describe** el lugar: cómo era, qué tenía, qué había.',
            'Cuenta **dos hábitos**: qué hacías allí normalmente.',
            'Describe a una persona que **estaba** allí.',
            'Termina con una frase sobre lo que sientes ahora.',
          ], starters: ['Antes estudiaba / trabajaba en…', 'Era un lugar…', 'Tenía…', 'Había…', 'Normalmente yo…', 'Siempre…', 'Mi compañera…'],
            words: ['era', 'tenía', 'había', 'estaba', 'iba', 'siempre', 'normalmente', 'cada mañana', 'antes', 'todos los días'],
            model: 'Antes [[estudiaba|teal]] en una biblioteca cerca de casa. La sala [[era|blue]] tranquila y [[tenía|blue]] ventanas grandes. Yo [[llevaba|teal]] mis cuadernos y [[leía|teal]] por la mañana. Mi compañera se [[sentaba|teal]] a mi lado. [[Preparábamos|teal]] los exámenes juntas y [[hablábamos|teal]] durante la pausa. El encargado [[conocía|blue]] a todos y siempre nos [[ayudaba|teal]] a encontrar libros.',
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
            { tone: 'blue', label: 'DESCRIPCIÓN', formula: 'era / tenía / había / estaba', example: 'La sala era tranquila.', caption: 'Cómo era: lugar, persona, hora, edad.', en: 'was, had, there was' },
            { tone: 'teal', label: 'HÁBITO PASADO', formula: 'antes / siempre / cada… + imperfecto', example: 'Antes iba a la biblioteca cada viernes.', caption: 'Lo que se repetía.', en: 'used to' },
            { tone: 'violet', label: 'EN DESARROLLO', formula: 'mientras + imperfecto', example: 'Mientras buscaba un libro, encontré una nota.', caption: 'El fondo de un hecho.', en: 'was doing' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Formas', text: '-ar → **-aba**; -er / -ir → **-ía**. Solo tres irregulares: **era**, **iba**, **veía**. Con nosotros, tilde: hablábamos, éramos, íbamos.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Cuando ___ diez años, vivía con mis abuelos.', options: ['tenía', 'tuve', 'tengo'], answer: 0, why: 'La edad es descripción: tenía.' },
            { prompt: 'Antes mis amigos y yo ___ al cine cada sábado.', options: ['íbamos', 'fuimos', 'ibamos'], answer: 0, why: 'Hábito, nosotros: íbamos, con tilde.' },
            { prompt: 'La calle ___ vacía y hacía frío.', options: ['estaba', 'estuvo', 'está'], answer: 0, why: 'Descripción de la escena: estaba.' },
            { prompt: 'Mientras yo ___, sonó el teléfono.', options: ['cocinaba', 'cociné', 'cocino'], answer: 0, why: 'Acción en desarrollo: cocinaba.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Describe un hábito pasado sin decir cuándo terminó». Respuesta posible: «Antes iba a la biblioteca cada viernes».' },
        ] },
      ],
    },
  ],
};
