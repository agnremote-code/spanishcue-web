import type { LiveLesson } from '../types';

/**
 * Lesson 350 · A2 · Indefinido e imperfecto: evento y contexto (course unit G050).
 * One scene runs through the class: Carmen Ortega, a witness, tells the local
 * police officer Lucía Prado about a small street accident she saw yesterday
 * morning from the bus stop: it was half past eight, it was raining a little,
 * there was a lot of traffic; a young man, Diego, was cycling along the street,
 * a taxi suddenly came out of a garage, Diego braked hard and fell on the wet
 * road (only a hurt knee). Carmen ran to help and called emergency services.
 * Later the taxi driver, señor Vega, gives his version. In the voice message
 * Diego (Mexican voice, usted with Carmen) thanks her and tells his side.
 * Content: imperfecto for the scene (era/eran, había, estaba, hacía, llovía,
 * iba, tenía) and indefinido for the events (hubo, salió, frenó, paró,
 * llegó, sonó). Productive demand is limited to regular preterites, the G048
 * irregulars (fui, hice, tuve, estuve, pude, dije) and hubo; se cayó / me caí /
 * vio appear only receptively, glossed.
 * Anchor: Dormía cuando sonó el teléfono. Contrast: Llovía cuando
 * salí / Ayer llovió todo el día (a long but closed period). Mistake: *Ayer era
 * un accidente → Ayer hubo un accidente. «Cuando» does not decide the tense:
 * the learner decides background or next event. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 350,
  level: 'A2',
  title: 'Indefinido e imperfecto: evento y contexto',
  subtitle: 'Contar un incidente que viste: primero la escena con era, había y estaba, después los hechos con hubo, salió y llegó.',
  legend: [
    { tone: 'blue', label: 'CONTEXTO · imperfecto: la escena (background: era, había, estaba…)' },
    { tone: 'orange', label: 'EVENTO · indefinido: lo que pasó (events: hubo, salió, llegó…)' },
    { tone: 'teal', label: 'MARCADORES · cuando, de repente, todo el día (time words)' },
  ],
  optionNotes: {
    'Fueron': 'La hora en una historia es el **fondo**: siempre «eran las ocho», «era la una». No «fueron».',
    'estuvo · pude': 'La furgoneta ya estaba allí (fondo) y el taxista no podía ver la calle en ese momento: **estaba · podía**.',
    'Estuvo · tuvo': 'Así estaba el chico cuando llegó el taxista: es una descripción. **Estaba · tenía**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'La escena y los hechos', coach: 'Primero la escena, después los hechos. Scene first, then events.',
      steps: [
        { title: 'Una llamada temprano · An early call', blocks: [
          { kind: 'lead', text: 'Carmen Ortega vive en la calle Colón. Ayer vio un pequeño accidente desde la parada del autobús. Esta mañana, Carmen **dormía** cuando **sonó** el teléfono: era la agente Prado, de la policía local. Quería hablar del accidente. Hoy aprendes a contar una historia con dos pasados: la **escena** y los **hechos**.', en: 'Carmen Ortega lives on Colón Street. Yesterday she saw a small accident from the bus stop. This morning Carmen was sleeping when the phone rang: it was Officer Prado, from the local police. She wanted to talk about the accident. Today you learn to tell a story with two past tenses: the scene and the events.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos partes de la frase de Carmen y tu alumno repite. Después tu alumno dice qué parte es la escena y qué parte es el hecho nuevo.', self: 'Lee las dos partes de la frase en voz alta. ¿Qué parte es la escena? ¿Qué parte es el hecho nuevo? (Which part is the scene, which part is the new event?)' } },
          { kind: 'compare', title: 'Una frase, dos pasados · One sentence, two past tenses', columns: [
            { tone: 'blue', label: 'CONTEXTO · imperfecto', sentence: 'Carmen [[dormía|blue]]…', idea: 'La escena: qué pasaba en ese momento. No vemos el principio ni el final.', en: 'Carmen was sleeping… (the background: what was going on)' },
            { tone: 'orange', label: 'EVENTO · indefinido', sentence: '…[[cuando|teal]] [[sonó|orange]] el teléfono.', idea: 'El hecho: algo pasa y la historia avanza.', en: '…when the phone rang. (the event: the story moves on)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Carmen dormía» habla de…', options: ['Un hecho nuevo de la historia.', 'Lo que Carmen hace todos los días ahora.', 'La escena: qué pasaba en ese momento.'], answer: 2, why: '«Dormía» es imperfecto: describe la situación cuando pasó algo.', en: '“Carmen dormía” is about…' },
            { prompt: '«Sonó el teléfono» habla de…', options: ['Un hecho que interrumpe la escena.', 'Un hábito del pasado.', 'La descripción del lugar.'], answer: 0, why: '«Sonó» es indefinido: un hecho que pasa en un momento y cambia la escena.', en: '“Sonó el teléfono” is about…' },
            { prompt: 'Después, Carmen ___ el teléfono y habló con la agente.', options: ['contestaba', 'contestó', 'contesta'], answer: 1, why: 'Primero contestó, después habló: dos hechos en orden, indefinido.', en: 'Then Carmen answered the phone and talked to the officer.' },
          ] },
        ] },
        { title: 'Dos funciones · Two jobs', mascot: '/brand/mascot/studying.webp', coach: 'Fondo o hecho. Background or event.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONTEXTO · IMPERFECTO', question: '¿Cómo era la escena? ¿Qué pasaba?', en: 'What was the scene like? What was going on?', formula: ['era · había · estaba · hacía · llovía · iba', 'la hora, el tiempo, el lugar, cómo estaba alguien'],
            meaning: 'Con el **imperfecto** pintas el fondo de la historia: la hora, el tiempo, el lugar, las personas y lo que estaba pasando. Ya conoces las formas (clase 049): -aba, -ía, y era, iba.',
            examples: [
              { es: '[[Eran|blue]] las ocho y media de la mañana.', en: 'It was half past eight in the morning.' },
              { es: '[[Llovía|blue]] un poco y [[había|blue]] mucho tráfico.', en: 'It was raining a little and there was a lot of traffic.' },
              { es: 'Un chico [[iba|blue]] en bicicleta por la calle.', en: 'A young man was cycling along the street.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'EVENTO · INDEFINIDO', question: '¿Qué pasó? ¿Y después?', en: 'What happened? And then?', formula: ['hubo · salió · frenó · paró · llegó', 'los hechos, uno detrás de otro'],
            meaning: 'Con el **indefinido** cuentas los hechos: cosas que pasaron, completas, y que hacen avanzar la historia. Ya conoces las formas (clases 047 y 048).',
            examples: [
              { es: '[[De repente|teal]], un taxi [[salió|orange]] de un garaje.', en: 'Suddenly, a taxi came out of a garage.' },
              { es: 'El chico [[frenó|orange]] y [[se cayó|orange]].', en: 'The young man braked and fell.' },
              { es: 'Carmen [[llamó|orange]] a emergencias.', en: 'Carmen called emergency services.' },
            ],
            note: 'En la historia también lees **se cayó** (he fell, de caerse): solo tienes que entenderlo; hoy no lo necesitas usar.' },
          { kind: 'table', title: 'El mismo verbo, dos pasados · Same verb, two past tenses', head: ['Infinitivo', 'CONTEXTO (imperfecto)', 'EVENTO (indefinido)'], rows: [
            ['haber (there is)', '**había** mucha gente', '**hubo** un accidente'],
            ['ser (to be)', '**era** temprano, **eran** las ocho', '**fue** un susto (it was a scare)'],
            ['estar (to be)', 'el suelo **estaba** mojado', '**estuvo** una hora en la parada'],
            ['llover (to rain)', '**llovía** un poco', '**llovió** todo el día'],
            ['ir (to go)', '**iba** en bicicleta', '**fue** al hospital'],
            ['sonar (to ring)', 'la radio **sonaba**', 'el teléfono **sonó**'],
          ], note: 'No hay verbos «de imperfecto» y verbos «de indefinido»: casi todos los verbos tienen las dos formas. Tú decides: ¿fondo o hecho?' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Haber, contexto: «___ mucha gente en la parada».', options: ['Era', 'Había', 'Hubo'], answer: 1, why: 'La gente ya estaba allí: es la escena. Haber en imperfecto: había.', en: 'There were a lot of people at the stop.' },
            { prompt: 'Salir, evento: «Un taxi ___ de un garaje».', options: ['sale', 'salió', 'salía'], answer: 1, why: 'Es el hecho nuevo de la historia: salió.', en: 'A taxi came out of a garage.' },
          ] },
        ] },
        { title: 'Tres pares · Three pairs', mascot: '/brand/mascot/standing.webp', coach: 'Abierto o cerrado. Open or closed.', blocks: [
          { kind: 'table', title: 'Pares mínimos · Minimal pairs', head: ['CONTEXTO · abierto, el fondo', 'EVENTO · cerrado, completo'], rows: [
            ['[[Llovía|blue]] cuando salí de casa. (It was raining when I left home.)', 'Ayer [[llovió|orange]] todo el día. (Yesterday it rained all day.)'],
            ['[[Había|blue]] mucho tráfico en la calle. (There was a lot of traffic.)', '[[Hubo|orange]] un accidente en la esquina. (There was an accident on the corner.)'],
            ['El taxi [[estaba|blue]] en el garaje. (The taxi was in the garage.)', 'El taxi [[salió|orange]] del garaje. (The taxi came out of the garage.)'],
          ], note: '«Todo el día» es mucho tiempo, pero es un período **cerrado**: tiene principio y final. Por eso: «Ayer llovió todo el día». No es largo o corto: es **fondo abierto** o **hecho completo**.' },
          { kind: 'decide', title: '¿Imperfecto o indefinido?', steps: [
            { q: '¿Describes la escena en ese momento? (la hora, el tiempo, el lugar, cómo estaba alguien, qué estaba pasando)', yes: 'Usa el **imperfecto**: «Eran las ocho. Llovía».', no: 'next' },
            { q: '¿Cuentas un hecho completo, o el siguiente hecho de la historia? (¿Y después?)', yes: 'Usa el **indefinido**: «Un taxi salió del garaje».', no: 'next' },
            { q: '¿Hablas de un período con límites? (todo el día, dos horas, de ocho a diez)', yes: 'Usa el **indefinido**: «Ayer llovió todo el día».', no: 'Lee la frase otra vez y piensa: ¿es el fondo o es un hecho?' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Cuando» no decide · “Cuando” does not decide', text: 'Mira estas dos frases: «Cuando llegó la ambulancia, Diego **estaba** sentado» (así era la escena) y «Cuando llegó la ambulancia, Diego **se levantó**» (el siguiente hecho). Las dos son correctas. La palabra «cuando» no decide el tiempo: lo decide lo que quieres contar.', en: 'Look at these two sentences: “When the ambulance arrived, Diego was sitting down” (the scene) and “When the ambulance arrived, Diego stood up” (the next event). Both are correct. The word “cuando” does not choose the tense: what you want to say does.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El sábado ___ toda la tarde y no salí de casa.', options: ['llueve', 'llovía', 'llovió'], answer: 2, why: '«Toda la tarde»: un período cerrado, con principio y final. Indefinido: llovió.', en: 'On Saturday it rained all afternoon and I didn’t leave the house.' },
            { prompt: '___ cuando Carmen salió de casa, por eso llevó paraguas.', options: ['Llovió', 'Llovía', 'Llueve'], answer: 1, why: 'La lluvia es el fondo en el momento de salir: llovía.', en: 'It was raining when Carmen left home, so she took an umbrella.' },
            { prompt: 'Cuando llegó la ambulancia, Diego ___ sentado en el suelo.', options: ['está', 'estaba', 'estuvo'], answer: 1, why: 'Así era la escena en ese momento: estaba.', en: 'When the ambulance arrived, Diego was sitting on the ground.' },
          ] },
        ] },
        { title: 'Había, hubo, era · There was, it was', mascot: '/brand/mascot/speaking.webp', coach: 'Hubo un accidente. There was an accident.', blocks: [
          { kind: 'compare', title: 'Tres palabras para «there was» y «it was»', columns: [
            { tone: 'blue', label: 'HABÍA · la escena', sentence: '[[Había|blue]] mucha gente en la parada.', idea: 'Algo que ya estaba allí: describe.', en: 'There were a lot of people at the stop.' },
            { tone: 'orange', label: 'HUBO · el hecho', sentence: 'Ayer [[hubo|orange]] un accidente en mi calle.', idea: 'Algo que pasó, ocurrió: cuenta.', en: 'Yesterday there was an accident on my street.' },
            { tone: 'blue', label: 'ERA · descripción y hora', sentence: '[[Era|blue]] temprano. [[Eran|blue]] las ocho y media.', idea: 'Ser: la hora o cómo era algo.', en: 'It was early. It was half past eight.' },
          ] },
          { kind: 'tip', icon: '🔑', title: '«Ayer era un accidente» no funciona', text: 'Un accidente, una tormenta, una fiesta, un apagón: son cosas que **pasan**. Para decir que pasaron, usa haber en indefinido: «Ayer **hubo** un accidente». «Era» es el verbo ser: sirve para la hora («eran las ocho») o para describir («el chico era joven»).', en: 'An accident, a storm, a party, a power cut: these are things that happen. To say they happened, use haber in the indefinido: “Ayer hubo un accidente”. “Era” is the verb ser: use it for the time (“eran las ocho”) or to describe (“el chico era joven”).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ayer ___ un accidente en la calle Colón.', options: ['era', 'hubo', 'estaba'], answer: 1, why: 'Un accidente pasa, ocurre: hubo (haber, indefinido).', en: 'Yesterday there was an accident on Colón Street.' },
            { prompt: 'Cuando salí, ___ mucho tráfico en la calle.', options: ['era', 'había', 'hubo'], answer: 1, why: 'El tráfico ya estaba allí cuando salí: es la escena. Había.', en: 'When I went out, there was a lot of traffic in the street.' },
            { prompt: 'El chico ___ joven, de unos veinte años.', options: ['hubo', 'había', 'era'], answer: 2, why: 'Describes a una persona: ser en imperfecto, era.', en: 'He was young, about twenty years old.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Fondo o hecho? Background or event?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿es la escena o es un hecho? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿es la escena o es un hecho? Toca para ver la corrección. (Is it the scene or an event?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Ayer era un accidente en mi calle.', right: 'Ayer hubo un accidente en mi calle.', why: 'Un accidente pasa: haber en indefinido, hubo. «Era» (ser) es para la hora o para describir. (An accident happens: hubo.)' },
            { wrong: 'Dormí cuando sonó el teléfono.', right: 'Dormía cuando sonó el teléfono.', why: 'Dormir es el fondo: la acción estaba en marcha cuando sonó el teléfono. (I was sleeping when the phone rang.)' },
            { wrong: 'Fueron las ocho y media cuando pasó.', right: 'Eran las ocho y media cuando pasó.', why: 'La hora en una historia es siempre el fondo: eran, era. (The time is background: eran.)' },
            { wrong: 'Yo esperaba el autobús y de repente un taxi salía del garaje.', right: 'Yo esperaba el autobús y de repente un taxi salió del garaje.', why: '«De repente» presenta un hecho nuevo, completo: indefinido, salió. (Suddenly + a new event: salió.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ las nueve cuando llegó la agente.', options: ['Hubo', 'Fueron', 'Eran'], answer: 2, why: 'La hora es el fondo de la escena: eran las nueve.', en: 'It was nine o’clock when the officer arrived.' },
            { prompt: 'Carmen leía el periódico y de repente ___ un ruido fuerte.', options: ['escuchó', 'escuchaba', 'escucha'], answer: 0, why: '«De repente» + un hecho nuevo que interrumpe: escuchó (escuchar, indefinido).', en: 'Carmen was reading the newspaper and suddenly she heard a loud noise.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta un momento real con la frase «Yo… cuando…»: «Yo cocinaba cuando llegó mi hermano». Tú preguntas: «¿Qué parte es la escena? ¿Qué parte es el hecho?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La declaración de Carmen', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la comisaría · At the police station', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres la agente Prado y tu alumno es Carmen. Después tu alumno toca cada palabra marcada y dice si es escena o hecho.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di: ¿escena o hecho? (Scene or event?)' } },
          { kind: 'explore', title: 'Lo vi todo', setting: 'Hoy, en la comisaría del barrio. La agente Lucía Prado habla con Carmen, la testigo del accidente de ayer. Las dos usan usted. (Today, at the local police station. Officer Lucía Prado talks to Carmen, the witness of yesterday’s accident.)', lines: [
            { who: 'Agente Prado', text: 'Buenos días, señora Ortega. Ayer por la mañana [[hubo|orange]] un accidente en su calle. ¿Usted lo vio?', en: 'Good morning, Mrs Ortega. Yesterday morning there was an accident on your street. Did you see it?' },
            { who: 'Carmen', text: 'Sí, lo vi todo. [[Eran|blue]] las ocho y media. Yo [[esperaba|blue]] el autobús en la parada.', en: 'Yes, I saw it all. It was half past eight. I was waiting for the bus at the stop.' },
            { who: 'Agente Prado', text: '¿Qué tiempo [[hacía|blue]]?', en: 'What was the weather like?' },
            { who: 'Carmen', text: '[[Llovía|blue]] un poco y [[había|blue]] mucho tráfico. El suelo [[estaba|blue]] mojado.', en: 'It was raining a little and there was a lot of traffic. The road was wet.' },
            { who: 'Agente Prado', text: 'Entiendo. ¿Y qué [[pasó|orange]]?', en: 'I see. And what happened?' },
            { who: 'Carmen', text: 'Un chico [[iba|blue]] en bicicleta por la calle. [[De repente|teal]], un taxi [[salió|orange]] de un garaje.', en: 'A young man was cycling along the street. Suddenly, a taxi came out of a garage.' },
            { who: 'Agente Prado', text: '¿El taxi chocó con la bicicleta?', en: 'Did the taxi hit the bicycle?' },
            { who: 'Carmen', text: 'No. El chico [[frenó|orange]] muy fuerte, pero con el suelo mojado [[se cayó|orange]].', en: 'No. The young man braked very hard, but with the wet road he fell.' },
            { who: 'Agente Prado', text: '¿Y usted qué [[hizo|orange]]?', en: 'And what did you do?' },
            { who: 'Carmen', text: '[[Fui|orange]] corriendo a ayudar al chico y [[llamé|orange]] a emergencias. El taxista también [[paró|orange]].', en: 'I ran to help the young man and called emergency services. The taxi driver stopped too.' },
            { who: 'Agente Prado', text: '¿Cómo [[estaba|blue]] el chico?', en: 'How was the young man?' },
            { who: 'Carmen', text: '[[Tenía|blue]] la rodilla mal, pero [[estaba|blue]] tranquilo. [[Cuando|teal]] [[llegó|orange]] la ambulancia, ya [[hablaba|blue]] por teléfono con su hermana.', en: 'His knee was hurt, but he was calm. When the ambulance arrived, he was already talking on the phone with his sister.' },
          ], notes: {
            'hubo': 'Haber en indefinido: **hubo**. El accidente pasó, es un hecho. No «era un accidente».',
            'Eran': 'La hora es el fondo de la escena: **eran** las ocho y media. Siempre imperfecto.',
            'esperaba': 'Imperfecto: la acción estaba en marcha cuando pasó el accidente. Carmen no cuenta el principio ni el final.',
            'hacía': 'Hacer, para el tiempo (weather). En imperfecto porque describe la escena: ¿qué tiempo hacía?',
            'Llovía': 'La lluvia es el fondo: **llovía** en ese momento. Compara: «Ayer llovió todo el día» (un período cerrado).',
            'había': 'Haber en imperfecto: **había** mucho tráfico. El tráfico ya estaba allí: describe.',
            'estaba': 'Estar en imperfecto: cómo estaba algo o alguien en ese momento (el suelo, el chico).',
            'pasó': 'La pregunta por los hechos: **¿qué pasó?** Pide un indefinido en la respuesta.',
            'iba': 'Ir en imperfecto: **iba** en bicicleta. El chico estaba en movimiento: es la escena.',
            'De repente': 'Suddenly. Presenta un hecho nuevo que rompe la escena. Casi siempre va con indefinido.',
            'salió': 'Indefinido: el hecho que cambia todo. Un momento, completo.',
            'frenó': 'Indefinido: el siguiente hecho. Frenar = to brake.',
            'se cayó': 'Caerse (to fall) en indefinido: **se cayó**, con y. Otro hecho de la historia.',
            'hizo': 'Hacer en indefinido, usted: **¿qué hizo?** La agente pide las acciones de Carmen.',
            'Fui': 'Ir en indefinido, yo: **fui** corriendo (I ran over). Un hecho, no la escena.',
            'llamé': 'Llamar en indefinido, yo: **llamé**. Un hecho, después de ayudar al chico.',
            'paró': 'Parar (to stop) en indefinido: el taxista paró. Otro hecho, en orden.',
            'Tenía': 'Tener en imperfecto: describe cómo estaba el chico (his knee was hurt).',
            'Cuando': '«Cuando» une el hecho (llegó la ambulancia) y la escena en ese momento (ya hablaba por teléfono).',
            'llegó': 'Llegar en indefinido: la ambulancia llegó, un hecho en un momento.',
            'hablaba': 'Imperfecto: la acción estaba en marcha cuando llegó la ambulancia.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Dónde estaba Carmen a las ocho y media?', options: ['En la comisaría.', 'En un taxi.', 'En la parada del autobús.'], answer: 2, why: '«Yo esperaba el autobús en la parada».', en: 'Where was Carmen at half past eight?' },
            { prompt: '¿Por qué se cayó el chico?', options: ['Porque el taxi chocó con la bicicleta.', 'Porque frenó muy fuerte y el suelo estaba mojado.', 'Porque iba muy rápido.'], answer: 1, why: '«El chico frenó muy fuerte, pero con el suelo mojado se cayó». El taxi no chocó con él.', en: 'Why did the young man fall?' },
            { prompt: '¿Qué hacía el chico cuando llegó la ambulancia?', options: ['Estaba en el suelo, muy nervioso.', 'Hablaba con el taxista.', 'Hablaba por teléfono con su hermana.'], answer: 2, why: '«Cuando llegó la ambulancia, ya hablaba por teléfono con su hermana».', en: 'What was the young man doing when the ambulance arrived?' },
          ] },
        ] },
        { title: '¿Escena o hecho? · Scene or event?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'La historia de Carmen · Carmen’s story', categories: [
            { id: 'contexto', label: 'CONTEXTO · la escena (imperfecto)', tone: 'blue' },
            { id: 'evento', label: 'EVENTO · lo que pasó (indefinido)', tone: 'orange' },
          ], items: [
            { text: 'Eran las ocho y media.', answer: 'contexto', why: 'La hora: el fondo de la historia.' },
            { text: 'Un taxi salió de un garaje.', answer: 'evento', why: 'Un hecho nuevo, completo: salió.' },
            { text: 'El suelo estaba mojado.', answer: 'contexto', why: 'Describe cómo estaba la calle.' },
            { text: 'Carmen llamó a emergencias.', answer: 'evento', why: 'Una acción completa, en orden: llamó.' },
            { text: 'Un chico iba en bicicleta.', answer: 'contexto', why: 'Una acción en marcha: la escena.' },
            { text: 'El taxista paró.', answer: 'evento', why: 'Otro hecho de la historia: paró.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué tiempo hacía? ¿Y qué pasó después?». Tu alumno responde con una frase de escena y una frase de hecho: «Llovía un poco. Un taxi salió de un garaje».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Escena: -aba, -ía. Hechos: -ó, -é.',
      steps: [
        { title: 'El informe de la agente · The officer’s report', blocks: [
          { kind: 'choice', items: [
            { context: 'La agente escribe el informe. (The officer writes her report.)', prompt: 'A las ocho y media ___ mucho tráfico en la calle Colón.', options: ['fue', 'había', 'hubo'], answer: 1, why: 'El tráfico es la escena en ese momento: había.', en: 'At half past eight there was a lot of traffic on Colón Street.' },
            { context: 'La agente escribe el informe. (The officer writes her report.)', prompt: 'A las ocho y treinta y cinco ___ un accidente en la esquina.', options: ['hubo', 'era', 'había'], answer: 0, why: 'El accidente pasó en un momento concreto: hubo.', en: 'At eight thirty-five there was an accident on the corner.' },
            { context: 'La agente describe al ciclista. (She describes the cyclist.)', prompt: 'El ciclista ___ un casco azul y una chaqueta negra.', options: ['llevaba', 'lleva', 'llevó'], answer: 0, why: 'Lo que llevaba puesto describe a la persona: imperfecto.', en: 'The cyclist was wearing a blue helmet and a black jacket.' },
            { context: 'La versión del taxista. (The taxi driver’s version.)', prompt: 'El taxista ___ del coche y ayudó al chico.', options: ['bajaba', 'baja', 'bajó'], answer: 2, why: 'Dos hechos en orden: bajó y después ayudó.', en: 'The taxi driver got out of the car and helped the young man.' },
            { context: 'Al final de la mañana. (At the end of the morning.)', prompt: 'Diego ___ dos horas en el hospital y después volvió a casa.', options: ['está', 'estaba', 'estuvo'], answer: 2, why: '«Dos horas»: un período cerrado, con final. Estuvo.', en: 'Diego was at the hospital for two hours and then went back home.' },
          ] },
        ] },
        { title: '¿Escena o hecho? · Scene or event?', blocks: [
          { kind: 'classify', title: 'Frases del informe · Sentences from the report', categories: [
            { id: 'contexto', label: 'CONTEXTO · la escena', tone: 'blue' },
            { id: 'evento', label: 'EVENTO · lo que pasó', tone: 'orange' },
          ], items: [
            { text: 'La calle estaba oscura.', answer: 'contexto', why: 'Describe la calle: estaba.' },
            { text: 'El taxista llamó a la policía.', answer: 'evento', why: 'Una acción completa: llamó.' },
            { text: 'Hacía frío.', answer: 'contexto', why: 'El tiempo es el fondo: hacía.' },
            { text: 'Carmen escribió su número de teléfono.', answer: 'evento', why: 'Un hecho completo: escribió.' },
            { text: 'Diego tenía prisa.', answer: 'contexto', why: 'Cómo estaba Diego en ese momento: tenía.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Ayer era un accidente cerca de mi casa.', ok: false, options: ['Ayer hubo un accidente cerca de mi casa.', 'Ayer había un accidente cerca de mi casa.', 'Ayer estuvo un accidente cerca de mi casa.'], answer: 0, why: 'Para contar que un accidente pasó: hubo. «Había» describe una escena que ya estaba allí.' },
            { sentence: 'Eran las ocho y media cuando Diego frenó.', ok: true, why: 'Correcta: la hora es el fondo (eran) y frenar es el hecho (frenó).' },
            { sentence: 'Diego iba por la calle y de repente un taxi salía del garaje.', ok: false, options: ['Diego fue por la calle y de repente un taxi salió del garaje.', 'Diego iba por la calle y de repente un taxi salió del garaje.', 'Diego iba por la calle y de repente un taxi sale del garaje.'], answer: 1, why: '«Iba» es la escena; «de repente» trae un hecho nuevo: salió.' },
            { sentence: 'El martes llovió toda la mañana.', ok: true, why: 'Correcta: «toda la mañana» es un período cerrado, con principio y final.' },
            { sentence: 'Carmen estuvo en la parada cuando pasó el accidente.', ok: false, options: ['Carmen estaba en la parada cuando pasó el accidente.', 'Carmen está en la parada cuando pasó el accidente.', 'Carmen estaba en la parada cuando pasaba el accidente.'], answer: 0, why: 'Dónde estaba Carmen es la escena (estaba); el accidente es el hecho (pasó).' },
          ] },
        ] },
        { title: 'La versión del taxista · The taxi driver’s version', blocks: [
          { kind: 'chat-fill', title: 'La agente habla con el señor Vega · The officer talks to Mr Vega', lines: [
            { who: 'Agente Prado', text: 'Señor Vega, ¿adónde ___ cuando salió del garaje?', options: ['va', 'fue', 'iba'], answer: 2, why: 'Su viaje estaba en marcha cuando salió del garaje: iba.' },
            { who: 'Señor Vega', text: '___ al aeropuerto. Tenía un cliente a las nueve.', options: ['Fui', 'Voy', 'Iba'], answer: 2, why: 'Responde con la misma escena: iba. No llegó al aeropuerto en ese momento.' },
            { who: 'Agente Prado', text: '¿Y no miró la calle antes de salir?' },
            { who: 'Señor Vega', text: 'No. Una furgoneta ___ delante del garaje y no ___ ver bien la calle.', options: ['está · puedo', 'estuvo · pude', 'estaba · podía'], answer: 2, why: 'La furgoneta ya estaba allí y él no podía ver: es la escena. Estaba · podía.' },
            { who: 'Señor Vega', text: 'Cuando ___ el ruido, paré enseguida.', options: ['escuché', 'escuchaba', 'escucho'], answer: 0, why: 'El ruido es un hecho de un momento: escuché. Después, paré.' },
            { who: 'Agente Prado', text: '¿Y cómo estaba el chico?' },
            { who: 'Señor Vega', text: '___ en el suelo, pero no ___ nada grave.', options: ['Estaba · tenía', 'Estuvo · tuvo', 'Está · tiene'], answer: 0, why: 'Así estaba el chico cuando el taxista bajó: descripción, estaba · tenía.' },
            { who: 'Señor Vega', text: 'Le ___ perdón y esperé con él.', options: ['pedí', 'pedía', 'pido'], answer: 0, why: 'Dos hechos en orden: pedí perdón y después esperé.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['cuando', 'Llovía', 'Carmen', 'salió', 'de', 'casa'], accept: ['Llovía cuando Carmen salió de casa', 'Cuando Carmen salió de casa llovía'], en: 'It was raining when Carmen left home.' },
            { tiles: ['hubo', 'Ayer', 'un', 'accidente', 'en', 'la', 'esquina'], accept: ['Ayer hubo un accidente en la esquina', 'Hubo un accidente en la esquina ayer'], en: 'Yesterday there was an accident on the corner.' },
            { tiles: ['las', 'Eran', 'siete', 'cuando', 'sonó', 'el', 'teléfono'], accept: ['Eran las siete cuando sonó el teléfono', 'Cuando sonó el teléfono eran las siete'], en: 'It was seven o’clock when the phone rang.' },
            { tiles: ['iba', 'Diego', 'al', 'trabajo', 'cuando', 'salió', 'el', 'taxi'], accept: ['Diego iba al trabajo cuando salió el taxi', 'Diego iba al trabajo cuando el taxi salió', 'Cuando salió el taxi Diego iba al trabajo', 'Cuando el taxi salió Diego iba al trabajo'], en: 'Diego was going to work when the taxi came out.' },
          ] },
        ] },
        { title: 'Une las frases · Join the sentences', blocks: [
          { kind: 'rewrite', title: 'Escena + hecho con «cuando» · Scene + event with “cuando”', items: [
            { prompt: 'Carmen espera el autobús. Diego frena. (→ ayer)', instruction: 'Une las dos frases en pasado con «cuando». Empieza con «Carmen».', accept: ['Carmen esperaba el autobús cuando Diego frenó', 'Carmen esperaba el autobús cuando frenó Diego'] },
            { prompt: 'Hace frío. La ambulancia llega. (→ ayer)', instruction: 'Une las dos frases en pasado con «cuando». Empieza con «Hacía».', accept: ['Hacía frío cuando llegó la ambulancia', 'Hacía frío cuando la ambulancia llegó'] },
            { prompt: 'Diego habla por teléfono. La agente llega. (→ ayer)', instruction: 'Une las dos frases en pasado con «cuando». Empieza con «Diego».', accept: ['Diego hablaba por teléfono cuando llegó la agente', 'Diego hablaba por teléfono cuando la agente llegó'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un pequeño problema real de esta semana en tres frases: una de escena (hora, tiempo o lugar) y dos de hechos.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Diego', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Diego da las gracias · Diego says thank you', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿cómo está Diego?). Segunda escucha: tu alumno levanta la mano con cada verbo de escena (iba, llovía…) y da una palmada con cada hecho (salió, frené…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Separa los verbos de escena y los verbos de hechos. Vas a oír «me caí» (I fell): solo tienes que entenderlo. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Diego', channel: 'MENSAJE DE VOZ · DE DIEGO PARA CARMEN', src: '/audio/grammar-free/350.mp3',
            before: 'Diego, el chico de la bicicleta, tiene el número de Carmen. Le manda un mensaje de voz. ¿Qué crees que cuenta: cómo está, adónde iba, qué pasó…? (Diego sends Carmen a voice message. What do you think he talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Diego pide a Carmen hablar con la agente.', 'Diego da las gracias, cuenta su versión y dice que está bien.', 'Diego está enfermo y no puede trabajar más.'], answer: 1, why: '«Muchas gracias por su ayuda», cuenta qué pasó y dice «estoy bien».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Adónde iba Diego?', options: ['Al aeropuerto.', 'Al hospital.', 'A su primer día en un trabajo nuevo.'], answer: 2, why: '«Yo iba a mi primer día en un trabajo nuevo».', en: 'Where was Diego going?' },
              { prompt: '¿Cómo era la escena?', options: ['Llovía y no había mucha luz.', 'Hacía sol y no había tráfico.', 'Era de noche y hacía frío.'], answer: 0, why: '«Llovía y no había mucha luz en la calle».', en: 'What was the scene like?' },
              { prompt: '¿Qué tiene Diego ahora?', options: ['Un golpe en la rodilla.', 'La pierna rota.', 'Nada, solo un poco de miedo.'], answer: 0, why: '«Nada grave: solo un golpe en la rodilla».', en: 'What is wrong with Diego now?' },
              { prompt: '¿Qué quiere hacer Diego la semana que viene?', options: ['Volver a la comisaría.', 'Invitar a Carmen a un café.', 'Empezar el trabajo.'], answer: 1, why: '«¿Puedo invitarla a un café la semana que viene?». Empieza el trabajo el lunes.', en: 'What does Diego want to do next week?' },
            ],
            transcript: 'Hola, señora Carmen, soy Diego, el chico de la bicicleta. Tengo su número gracias a la agente Prado. Muchas gracias por su ayuda de ayer. Le cuento un poco: yo [[iba|blue]] a mi primer día en un trabajo nuevo y [[tenía|blue]] mucha prisa. [[Llovía|blue]] y no [[había|blue]] mucha luz en la calle. [[Cuando|teal]] el taxi [[salió|orange]] del garaje, [[frené|orange]] muy fuerte y [[me caí|orange]]. En el hospital, nada grave: solo un golpe en la rodilla. Y mi nuevo jefe [[fue|orange]] muy amable: empiezo el lunes. Hoy estoy en casa con la pierna en alto, pero estoy bien. ¿Puedo invitarla a un café la semana que viene? Muchas gracias otra vez. Un saludo.',
            reply: { teacher: 'Tú eres Diego. Tu alumno es Carmen y responde al mensaje con tres frases: cómo estaba Diego cuando ella llegó, qué hizo ella y una respuesta a la invitación.', self: 'Responde a Diego en voz alta como Carmen: cómo estabas tú cuando viste el accidente, qué hiciste y si aceptas el café. (Answer as Carmen: how you were, what you did, and the coffee invitation.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú eres testigo', coach: 'La escena y los hechos. The scene and the events.',
      steps: [
        { title: '¿Qué viste? · What did you see?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres la agente Prado y haces las preguntas. Tu alumno cuenta un pequeño incidente real o inventado (una caída, un perro suelto, un apagón, una avería). Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Piensa en un pequeño incidente real o inventado: una caída, un apagón, una avería. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Think of a small incident and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Hubo alguna vez un pequeño accidente o un incidente cerca de ti? ¿Cuándo fue? · Was there ever a small accident or incident near you? When was it?', followUps: ['¿Dónde estabas? (Where were you?)', '¿Qué hacías en ese momento? (What were you doing at that moment?)'], phrases: ['El año pasado [[hubo|orange]] un accidente en…', 'Yo [[estaba|blue]] en…', 'Yo [[esperaba|blue]] / [[iba|blue]]…'], hint: 'Primero el hecho general (hubo, pasó). Después la escena: dónde estabas, qué hacías.', example: 'El año pasado hubo un pequeño accidente en el centro. Yo estaba en una cafetería y esperaba a una amiga.', next: 'Ahora, la escena.', teacher: 'Cuenta tú también un incidente corto: «Una vez hubo…». Así tu alumno oye otra vez la escena y los hechos.' },
            { q: '¿Qué hora era? ¿Qué tiempo hacía? ¿Había mucha gente? · What time was it? What was the weather like? Were there many people?', followUps: ['¿Cómo estaba la calle? (What was the street like?)', '¿Cómo te sentías? (How did you feel?)'], phrases: ['[[Eran|blue]] las… / [[Era|blue]] la una.', '[[Hacía|blue]] sol / frío. [[Llovía|blue]].', '[[Había|blue]] mucha / poca gente.'], hint: 'La escena va en imperfecto: eran, hacía, llovía, había, estaba.', example: 'Eran las seis de la tarde. Hacía mucho calor y había mucha gente en la calle.', next: 'Ahora, los hechos.' },
            { q: '¿Qué pasó? Cuenta tres hechos en orden. · What happened? Tell three events in order.', followUps: ['¿Y después? (And then?)', '¿Fue muy rápido? (Was it very fast?)'], phrases: ['[[De repente|teal]], un coche / una moto [[salió|orange]]…', 'La persona [[frenó|orange]] / [[paró|orange]].', 'Después, [[llegó|orange]]…'], hint: 'Los hechos van en indefinido: uno detrás de otro, con de repente, después, entonces.', example: 'De repente, una moto salió de un garaje. Un señor frenó muy fuerte y paró a un metro. Después llegó la policía.', next: 'Ahora, lo que hiciste tú.' },
            { q: '¿Qué hiciste tú? ¿Y las otras personas? · What did you do? And the other people?', followUps: ['¿Llamaste a alguien? (Did you call anyone?)', '¿Alguien te hizo preguntas? (Did anyone ask you questions?)'], phrases: ['Yo [[fui|orange]] a ayudar…', '[[Llamé|orange]] a emergencias / a la policía.', 'Otra persona [[paró|orange]] y…'], hint: 'Tus acciones también son hechos: fui, llamé, ayudé, esperé.', example: 'Yo fui a ayudar al señor y llamé a emergencias. Una chica paró y le ofreció agua.', next: 'Ahora, el final.' },
            { q: '¿Cómo estaban las personas cuando llegó la ayuda? · How were the people when help arrived?', followUps: ['¿Estaba nervioso o tranquilo? (Was he nervous or calm?)', '¿Tenía algo grave? (Was it something serious?)'], phrases: ['[[Cuando|teal]] [[llegó|orange]] la ambulancia, el señor [[estaba|blue]]…', 'No [[tenía|blue]] nada grave.', 'Al final, [[fue|orange]] solo un susto.'], hint: 'Cuando + hecho (llegó), y la escena en ese momento (estaba, tenía).', example: 'Cuando llegó la ambulancia, el señor estaba tranquilo. No tenía nada grave. Al final fue solo un susto.', teacher: 'Pregunta también: «¿Y qué hizo el señor cuando llegó la ambulancia?». Tu alumno ve que con «cuando» también puede venir un hecho.' },
            { q: 'Ahora tú eres Carmen. La agente Prado pregunta: «¿Qué pasó ayer?». Cuenta la escena y los hechos en seis frases. · Now you are Carmen. Tell the scene and the events.', followUps: ['¿Qué hizo el taxista? (What did the taxi driver do?)', '¿Cómo estaba Diego al final? (How was Diego at the end?)'], phrases: ['[[Eran|blue]]… [[Llovía|blue]]… Yo [[esperaba|blue]]…', '[[De repente|teal]], un taxi [[salió|orange]]…', 'El chico [[frenó|orange]] muy fuerte…'], hint: 'Tres frases de escena y tres de hechos, en orden.', example: 'Eran las ocho y media. Llovía y había mucho tráfico. Yo esperaba el autobús. De repente, un taxi salió de un garaje. Un chico frenó muy fuerte. Yo llamé a emergencias.', teacher: 'Tú eres la agente y reaccionas: «¿Y qué tiempo hacía?», «¿Y después?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es la agente y hace las preguntas («¿Dónde estaba usted?», «¿Qué tiempo hacía?», «¿Qué pasó?») y tú cuentas un incidente.', self: 'Ahora tú eres la agente: haz las preguntas en voz alta («¿Dónde estaba usted?», «¿Qué pasó?») y responde como Carmen. (Now you are the officer: ask and answer as Carmen.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La declaración por escrito', coach: 'Escena, hechos, en orden. Scene, events, in order.',
      steps: [
        { title: 'Un correo para la agente · An email to the officer', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo: ¿es la escena (imperfecto) o un hecho (indefinido)? Después, tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada verbo: ¿escena o hecho? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'La declaración de un testigo · A witness statement', situation: 'Eres Carmen (o eres tú, testigo de otro pequeño incidente). La agente Prado necesita tu declaración por escrito. Escríbele un correo: describe la escena y cuenta los hechos en orden. (You are Carmen, or yourself as the witness of another small incident. Officer Prado needs your written statement. Write her an email: describe the scene and tell the events in order.)', task: [
            'Saluda y di de qué incidente escribes y cuándo pasó. (Say hello, which incident and when it happened.)',
            'Describe la escena con dos o tres verbos en imperfecto: la hora, el tiempo, dónde estabas, qué hacías. (Describe the scene in the imperfect.)',
            'Cuenta tres hechos en orden con el indefinido. (Tell three events in order in the indefinido.)',
            'Usa «cuando» o «de repente» una vez. (Use “cuando” or “de repente” once.)',
            'Despídete y deja tu teléfono. (Say goodbye and leave your phone number.)',
          ], starters: ['Estimada agente Prado:', 'Le escribo sobre el accidente de…', 'Eran las…', 'Yo estaba en… / Yo esperaba…', 'De repente, …', 'Cuando…', 'Mi teléfono es el…', 'Atentamente,'],
            words: ['era', 'eran', 'había', 'hacía', 'llovía', 'estaba', 'iba', 'hubo', 'salió', 'frenó', 'paró', 'llegó', 'llamé', 'de repente', 'cuando'],
            model: 'Estimada agente Prado: Le escribo sobre el accidente de ayer en la calle Colón. [[Eran|blue]] las ocho y media de la mañana. [[Llovía|blue]] un poco y [[había|blue]] mucho tráfico. Yo [[esperaba|blue]] el autobús en la parada y un chico [[iba|blue]] en bicicleta por la calle. [[De repente|teal]], un taxi [[salió|orange]] de un garaje. El chico [[frenó|orange]] muy fuerte y [[terminó|orange]] en el suelo. Yo [[fui|orange]] a ayudarlo y [[llamé|orange]] a emergencias. [[Cuando|teal]] [[llegó|orange]] la ambulancia, el chico ya [[estaba|blue]] tranquilo. Mi teléfono es el 555 123 456. Atentamente, Carmen Ortega.',
            minWords: 60,
            checks: [
              { label: 'La escena en imperfecto: era, había, estaba… (the scene in the imperfect)', pattern: '(?<!\\p{L})(?:era|eran|había|habia|hacía|hacia|estaba|estaban|llovía|llovia|tenía|tenia|iba|iban|\\p{L}{2,}aban?)(?!\\p{L})', tip: 'Describe la escena: «Eran las ocho», «Llovía», «Yo estaba en la parada».' },
              { label: 'Un hecho en indefinido: hubo, salió, llamé… (an event in the indefinido)', pattern: '(?<!\\p{L})(?:hubo|vi|fui|fue|hice|tuve|estuve|pude|dije|salí|corrí|llamé|llegué|esperé|ayudé|frené|paré|me\\s+caí|\\p{L}{2,}ó)(?!\\p{L})', tip: 'Cuenta qué pasó: «Un taxi salió de un garaje», «Llamé a emergencias».' },
              { label: 'Cuando o de repente (a link word)', pattern: '(?<!\\p{L})(?:cuando|de\\s+repente)(?!\\p{L})', tip: 'Une la escena y el hecho: «De repente, un taxi salió…», «Cuando llegó la ambulancia…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})fueron\\s+las(?!\\p{L})', why: 'La hora en una historia es el fondo: **eran las ocho**, no «fueron las ocho».' },
              { pattern: '(?<!\\p{L})era\\s+un\\s+accidente(?!\\p{L})', why: 'Para contar que un accidente pasó, usa haber: **hubo un accidente**.' },
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
            { tone: 'blue', label: 'CONTEXTO · IMPERFECTO', formula: 'era · había · estaba · hacía · llovía · iba', example: 'Eran las ocho y media y llovía un poco.', caption: 'la escena: hora, tiempo, lugar, qué pasaba', en: 'the scene: time, weather, place, what was going on' },
            { tone: 'orange', label: 'EVENTO · INDEFINIDO', formula: 'hubo · salió · frenó · paró · llegó', example: 'De repente, un taxi salió del garaje y el chico frenó.', caption: 'los hechos que hacen avanzar la historia', en: 'the events that move the story on' },
            { tone: 'teal', label: 'PERÍODO CERRADO', formula: 'todo el día · dos horas · de ocho a diez → indefinido', example: 'Llovía cuando salí. / Ayer llovió todo el día.', caption: 'largo, pero con final: indefinido', en: 'long, but with an end: indefinido' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'En una historia hay dos capas. La **escena** (imperfecto): «Eran las ocho, llovía, yo esperaba el autobús». Los **hechos** (indefinido): «De repente, un taxi salió y el chico frenó». Un accidente pasa: «**hubo** un accidente», nunca «era un accidente». Y «cuando» no decide: decides tú.', en: 'A story has two layers. The scene (imperfect): “Eran las ocho, llovía, yo esperaba el autobús”. The events (indefinido): “De repente, un taxi salió y el chico frenó”. An accident happens: “hubo un accidente”, never “era un accidente”. And “cuando” does not decide: you do.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Anoche ___ una tormenta muy fuerte en la ciudad.', options: ['era', 'estaba', 'hubo'], answer: 2, why: 'Una tormenta pasa, ocurre: hubo.', en: 'Last night there was a very strong storm in the city.' },
            { prompt: 'Mientras yo ___ la cena, sonó el timbre.', options: ['preparo', 'preparé', 'preparaba'], answer: 2, why: '«Mientras» + la acción en marcha: preparaba. El timbre es el hecho: sonó.', en: 'While I was making dinner, the doorbell rang.' },
            { prompt: '___ las once de la noche y la calle estaba vacía.', options: ['Son', 'Eran', 'Fueron'], answer: 1, why: 'La hora es el fondo de la escena: eran.', en: 'It was eleven at night and the street was empty.' },
            { prompt: 'El domingo ___ todo el día, así que no salimos.', options: ['llueve', 'llovía', 'llovió'], answer: 2, why: '«Todo el día» es un período cerrado: llovió.', en: 'On Sunday it rained all day, so we didn’t go out.' },
            { prompt: 'Cuando llegó el técnico, el ascensor ya ___.', options: ['funciona', 'funcionaba', 'funcionó'], answer: 1, why: 'Así estaba la situación cuando llegó el técnico: funcionaba (it was already working).', en: 'When the technician arrived, the lift was already working.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un apagón.', blocks: [
          { kind: 'lead', text: 'Una semana después, hay un apagón en la biblioteca del barrio. Carmen estaba allí. Une las frases y cuenta lo que pasó: escena + hecho.', en: 'A week later, there is a power cut in the local library. Carmen was there. Join the sentences and tell what happened: scene + event.' },
          { kind: 'rewrite', title: 'El apagón · The power cut', items: [
            { prompt: 'Carmen lee en la biblioteca. Se apaga la luz.', instruction: 'Une las frases en pasado con «cuando». Empieza con «Carmen».', accept: ['Carmen leía en la biblioteca cuando se apagó la luz'] },
            { prompt: 'Son las seis. Hay un apagón.', instruction: 'Une las frases en pasado con «cuando». Empieza con «Eran».', accept: ['Eran las seis cuando hubo un apagón'] },
            { prompt: 'Todos estudian. Suena la alarma.', instruction: 'Une las frases en pasado con «cuando». Empieza con «Todos».', accept: ['Todos estudiaban cuando sonó la alarma', 'Todos estudiaban cuando la alarma sonó'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 051 · Perfecto e indefinido: variación regional', text: 'Ya cuentas una historia con escena y hechos: «Llovía cuando salí», «Hubo un accidente». En la clase 051 miras otro contraste del pasado: «Hoy **he hablado** con Ana» y «Hoy **hablé** con Ana». Las dos formas son correctas: depende de la región. Es el paso natural: ahora que eliges bien entre fondo y hecho, aprendes cómo hablan del pasado reciente en España y en América.', en: 'You can now tell a story with a scene and events: “Llovía cuando salí”, “Hubo un accidente”. In class 051 you look at another past-tense contrast: “Hoy he hablado con Ana” and “Hoy hablé con Ana”. Both are correct: it depends on the region. It is the natural next step: now that you choose well between background and event, you learn how people talk about the recent past in Spain and in Latin America.', href: '/gramatica/perfecto-e-indefinido-variacion', label: 'Ir a la clase 051' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué pasó la última vez que sonó tu teléfono en un mal momento? ¿Qué hacías?». Respuesta esperada: una frase de escena y una de hecho con «cuando». Tarea: escribir la declaración de Escribir sobre un incidente real.' },
        ] },
      ],
    },
  ],
};
