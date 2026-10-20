import type { LiveLesson } from '../types';

/**
 * Lesson 219 · B2 · Si + imperfecto de subjuntivo.
 * One neighbourhood library (Elena, Julián, Rosa) runs through the class:
 * a real plan (si + presente) against imagined scenarios (si + imperfecto de
 * subjuntivo + condicional). The past counterfactual is only a reference.
 */
export const lesson: LiveLesson = {
  id: 219,
  level: 'B2',
  title: 'Si + imperfecto de subjuntivo',
  subtitle: 'Distinguir un plan posible de una situación imaginada y negociar opciones con «si tuviera…, haría…».',
  legend: [
    { tone: 'blue', label: 'Si + presente · una condición abierta, posible' },
    { tone: 'violet', label: 'Si + imperfecto de subjuntivo → condicional · una hipótesis' },
  ],
  optionNotes: {
    tendría: 'Después de «si» condicional no va el condicional. La condición hipotética va en imperfecto de subjuntivo: «si tuviera».',
    'Si tendría más flexibilidad': 'Después de «si» condicional no va el condicional: «si tuviera».',
    podría: 'Después de «si» no va el condicional. Para una hipótesis: «si pudiera».',
    sería: 'Después de «si» no va el condicional. Para una hipótesis: «si fuera».',
    tenga: 'El presente de subjuntivo no va después de «si» condicional. Usa el presente (posible) o el imperfecto de subjuntivo (hipótesis).',
    'Si tenga más flexibilidad': 'El presente de subjuntivo no va después de «si» condicional.',
    pueda: 'El presente de subjuntivo no va después de «si» condicional: «si puedo» o «si pudiera».',
    tuviera: 'El imperfecto de subjuntivo va en la condición, después de «si». La consecuencia va en condicional.',
    recorriera: 'El imperfecto de subjuntivo va en la condición, no en la consecuencia: aquí se necesita «recorrería».',
    recorro: 'El presente presenta la consecuencia como real. Con «si tuviera», la consecuencia también es imaginada: «recorrería».',
    organizaríamos: 'El condicional presenta una consecuencia imaginada. Con «si conseguimos» (condición abierta), la consecuencia es real: «organizaremos» u «organizamos».',
    conseguiremos: 'Después de «si» condicional no va el futuro. La condición abierta va en presente: «si conseguimos».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo posible y lo imaginado', coach: 'Una misma idea puede ser un plan o un sueño.',
      steps: [
        { title: 'Dos condiciones, dos mundos', blocks: [
          { kind: 'lead', text: 'La biblioteca del barrio abre solo por la mañana. Elena quiere cambiarlo y en la reunión de vecinos dice dos frases muy distintas. Las dos empiezan con **si**, pero no hablan del mismo mundo.', en: 'The neighbourhood library only opens in the morning. Elena wants to change that, and at the residents’ meeting she says two very different sentences. Both start with «si» (if), but they are not talking about the same world: one is a real plan, the other an imagined situation.' },
          { kind: 'guide', text: { teacher: 'Lean las dos frases en voz alta. Antes de explicar nada, pregunta: «¿Cuál de las dos cosas puede pasar este mes? ¿Cuál es un deseo?».', self: 'Lee las dos frases y piensa: ¿cuál es un plan que puede pasar pronto y cuál es una situación imaginada?' } },
          { kind: 'compare', title: 'Mismo «si», distinta distancia', columns: [
            { tone: 'blue', label: 'CONDICIÓN ABIERTA', sentence: '[[Si conseguimos voluntarios, organizaremos|blue]] una tarde de prueba.', idea: 'Es posible. Están buscando voluntarios ahora. Si llegan, el plan se hace.', en: 'Open condition: it can happen. They are looking for volunteers right now; if they find them, the plan goes ahead (like English “if we get…, we’ll…”).' },
            { tone: 'violet', label: 'HIPÓTESIS', sentence: '[[Si la biblioteca abriera|violet]] todas las tardes, más personas [[podrían|violet]] usarla.', idea: 'Es una situación imaginada, distinta de la actual. Elena no promete nada: piensa en las consecuencias.', en: 'Hypothesis: an imagined situation, different from the present one. Elena promises nothing; she is thinking through the consequences (like English “if it opened…, people could…”).' },
          ] },
          { kind: 'tip', icon: '🔭', title: 'La distancia la decide quien habla', text: 'No depende solo de la realidad: depende de **cómo la ve el hablante**. Si ves la condición como probable, usa **si + presente**. Si la imaginas lejos, difícil o contraria a lo actual, usa **si + imperfecto de subjuntivo**.', en: 'The speaker decides the distance. It is not only about reality but about how the speaker sees it. If you see the condition as likely, use si + present. If you picture it as remote, difficult or contrary to the present, use si + imperfect subjunctive.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase presenta un plan que **puede ocurrir pronto**?', options: ['Si me dan el viernes libre, voy a la playa.', 'Si me dieran el viernes libre, iría a la playa.'], answer: 0, why: 'Si + presente: la condición está abierta y el plan es real.', en: 'Which sentence presents a plan that could happen soon?' },
            { prompt: '¿Qué frase **imagina** una situación distinta de la actual?', options: ['Si tengo tiempo, te ayudo.', 'Si tuviera tiempo, te ayudaría.'], answer: 1, why: '«Tuviera… ayudaría»: el hablante ve la condición como lejana; probablemente ahora no tiene tiempo.', en: 'Which sentence imagines a situation different from the present one?' },
          ] },
        ] },
        { title: 'Si + presente: una condición abierta · Open conditions', mascot: '/brand/mascot/studying.webp', coach: 'Lo que puede pasar, en presente.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONDICIÓN ABIERTA', question: '¿Es algo posible y cercano?', en: 'This presents the condition as possible: the speaker thinks it can be met and plans a real consequence. After «si» comes the present indicative, never the future, exactly as in English “if we find volunteers” (not “if we will find”).', formula: ['si + presente → futuro / presente / imperativo'],
            meaning: 'Presenta la condición como **posible**: el hablante cree que puede cumplirse y organiza una consecuencia **real**. Después de «si» va el **presente de indicativo**, nunca el futuro.',
            examples: [
              { es: '[[Si conseguimos cuatro voluntarios|blue]], [[organizaremos|blue]] una tarde de prueba.', en: 'If we get four volunteers, we’ll organise a trial afternoon.' },
              { es: '[[Si consigo el permiso|blue]], [[trabajo|blue]] desde otro país en enero.', en: 'If I get permission, I’m working from another country in January.' },
              { es: '[[Si llueve el sábado|blue]], la reunión [[es|blue]] dentro.', en: 'If it rains on Saturday, the meeting is indoors.' },
              { es: '[[Si te interesa|blue]], [[escríbeme|blue]] y te paso la encuesta.', en: 'If you’re interested, write to me and I’ll send you the survey.' },
            ],
            note: 'La consecuencia puede ir en futuro, en presente (más inmediato) o en imperativo (una instrucción).' },
          { kind: 'tip', icon: '!', title: 'Nunca futuro después de «si»', text: '«Si **conseguiremos** voluntarios…» es incorrecto. El futuro va en la consecuencia: «Si **conseguimos** voluntarios, **organizaremos** la tarde».', en: 'Never the future after «si». «Si conseguiremos voluntarios…» is wrong. The future goes in the consequence, not in the condition.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Si ___ el presupuesto este mes, compraremos sillas nuevas.', options: ['aprueban', 'aprobarán', 'aprobaran'], answer: 0, why: 'Es una posibilidad real de este mes: si + presente.', en: 'The budget may really be approved this month, and then they will buy new chairs.' },
            { prompt: 'Si el autobús llega tarde, ___ la reunión diez minutos.', options: ['retrasamos', 'retrasáramos', 'retrasaría'], answer: 0, why: 'Condición abierta y consecuencia real e inmediata: presente.', en: 'A real, immediate consequence: what do we do if the bus is late?' },
          ] },
        ] },
        { title: 'Si + imperfecto de subjuntivo: una hipótesis · Hypotheses', mascot: '/brand/mascot/speaking.webp', coach: 'Imaginar también es negociar.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'HIPÓTESIS', question: '¿Es algo imaginado, lejano o distinto de lo actual?', en: 'The imperfect subjunctive moves the condition away from the real world, and the conditional places the consequence inside that imagined world. It is how you dream, make a cautious proposal or explore options before deciding, like English “if I had…, I would…”.', formula: ['si + imperfecto de subjuntivo → condicional simple'],
            meaning: 'El **imperfecto de subjuntivo** aleja la condición del mundo actual. El **condicional simple** presenta la consecuencia dentro de ese mundo imaginado. Sirve para soñar, para proponer con prudencia y para explorar opciones antes de decidir.',
            examples: [
              { es: '[[Si consiguiera el permiso|violet]], [[trabajaría|violet]] desde otro país.', en: 'If I got permission, I’d work from another country.' },
              { es: '[[Si la biblioteca abriera|violet]] por la tarde, más vecinos [[podrían|violet]] venir.', en: 'If the library opened in the afternoon, more neighbours could come.' },
              { es: '[[Si tuviéramos|violet]] más recursos, [[abriríamos|violet]] también los domingos.', en: 'If we had more resources, we’d open on Sundays too.' },
              { es: '[[Si fuera|violet]] tú, [[empezaría|violet]] por un cambio pequeño.', en: 'If I were you, I’d start with a small change.' },
            ],
            note: 'Esta lección trata hipótesis sobre el **presente o el futuro**. Para el pasado imposible existe otra estructura: «Si **hubiera sabido**, **habría venido**».' },
          { kind: 'table', title: 'Cómo se forma: desde el pretérito de «ellos»', head: ['Verbo', 'Pretérito (ellos)', 'Imperfecto de subjuntivo', 'Condicional'], rows: [
            ['hablar', 'habla**ron**', 'habla**ra**', 'hablar**ía**'],
            ['abrir', 'abrie**ron**', 'abrie**ra**', 'abrir**ía**'],
            ['conseguir', 'consiguie**ron**', 'consiguie**ra**', 'conseguir**ía**'],
            ['tener', 'tuvie**ron**', 'tuvie**ra**', '**tendr**ía'],
            ['poder', 'pudie**ron**', 'pudie**ra**', '**podr**ía'],
            ['hacer', 'hicie**ron**', 'hicie**ra**', '**har**ía'],
            ['ser / ir', 'fue**ron**', 'fue**ra**', 'ser**ía** / ir**ía**'],
            ['haber', 'hubie**ron**', 'hubie**ra**', '**habr**ía'],
          ], note: 'Quita **-ron** al pretérito de «ellos» y añade **-ra**. Por eso los irregulares del pretérito (tuvieron, pudieron, hicieron) son irregulares también aquí. El condicional se forma con el infinitivo + -ía; sus irregulares son otros (tendr-, podr-, har-, habr-).' },
          { kind: 'table', title: 'Las personas: tener', head: ['Persona', 'Imperfecto de subjuntivo', 'Condicional'], rows: [
            ['yo', 'tuvier**a**', 'tendrí**a**'],
            ['tú', 'tuvier**as**', 'tendrí**as**'],
            ['él, ella, usted', 'tuvier**a**', 'tendrí**a**'],
            ['nosotros, nosotras', 'tuvié**ramos**', 'tendrí**amos**'],
            ['vosotros, vosotras', 'tuvier**ais**', 'tendrí**ais**'],
            ['ellos, ellas, ustedes', 'tuvier**an**', 'tendrí**an**'],
          ], note: 'La forma de «nosotros» lleva tilde: tuviéramos, abriéramos, fuéramos. También existe la forma en **-se** (tuviese, abriese): significa lo mismo y es más frecuente en la escritura.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Si ___ más tiempo libre, aprendería a tocar la guitarra.', options: ['tuviera', 'tendría', 'tenga'], answer: 0, why: 'La condición hipotética va en imperfecto de subjuntivo.', en: 'An imagined condition: more free time, which the speaker doesn’t have.' },
            { prompt: 'Si viviéramos más cerca, te ___ más a menudo.', options: ['visitaríamos', 'visitáramos', 'visitamos'], answer: 0, why: 'La consecuencia de una hipótesis va en condicional.', en: 'The consequence of an imagined situation: living closer and visiting more often.' },
            { prompt: 'Si mis padres ___ aquí, conocerían a mis amigos.', options: ['estuvieran', 'estarían', 'estén'], answer: 0, why: 'Estar → estuvieron → estuvieran.', en: 'Her parents are not here; she imagines it. Build the form from «estuvieron».' },
          ] },
        ] },
        { title: 'El orden es flexible · The order is flexible', mascot: '/autoestudio/mascot/noting.webp', coach: 'Cambia el orden, no los tiempos.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'ORDEN FLEXIBLE', question: '¿Qué quieres destacar primero?', en: 'You can start with the consequence to put it in the spotlight. The tenses do not change: the condition still follows «si». With «si» at the start, use a comma between the two parts; in the middle, usually no comma.', formula: ['si + condición, consecuencia', 'consecuencia + si + condición'],
            meaning: 'Puedes empezar por la consecuencia. **Los tiempos no cambian**: la condición sigue después de «si». Se pone primero lo que quieres destacar. Cuando «si» va al principio, usa una coma entre las dos partes; cuando va en medio, normalmente no.',
            examples: [
              { es: '[[Trabajaría|violet]] desde otro país [[si consiguiera|violet]] el permiso.', en: 'I’d work from another country if I got permission.' },
              { es: 'Más vecinos [[podrían|violet]] venir [[si la biblioteca abriera|violet]] por la tarde.', en: 'More neighbours could come if the library opened in the afternoon.' },
              { es: '[[Trabajarían|violet]] con más tranquilidad [[si conocieran|violet]] la demanda.', en: 'They’d work more calmly if they knew the demand.' },
              { es: '[[Organizaremos|blue]] la tarde de prueba [[si conseguimos|blue]] voluntarios.', en: 'We’ll organise the trial afternoon if we get volunteers.' },
            ] },
          { kind: 'tip', icon: '🤝', title: 'Para negociar', text: 'La hipótesis suaviza las propuestas: «**Aceptaría** el puesto **si tuviera** más flexibilidad» suena más abierto que «Quiero más flexibilidad». Es muy útil en reuniones y entrevistas.', en: 'For negotiating. A hypothesis softens a proposal: «Aceptaría el puesto si tuviera más flexibilidad» sounds more open than «Quiero más flexibilidad». It is very useful in meetings and interviews.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Si tuviéramos más presupuesto, contrataríamos a otra persona.» ¿Cuál es la misma idea con el orden cambiado?', options: ['Contrataríamos a otra persona si tuviéramos más presupuesto.', 'Tuviéramos más presupuesto si contrataríamos a otra persona.', 'Contratáramos a otra persona si tendríamos más presupuesto.'], answer: 0, why: 'La condición sigue después de «si» y en imperfecto de subjuntivo; solo cambia el orden.', en: '“If we had more budget, we’d hire someone else.” Which option is the same idea in the other order?' },
            { prompt: 'Aceptaría la oferta si ___ teletrabajar dos días.', options: ['pudiera', 'podría', 'puedo'], answer: 0, why: 'Después de «si», imperfecto de subjuntivo, aunque la condición vaya al final.', en: 'The condition comes at the end here, but it is still a condition after «si».' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Una pregunta decide la forma.', blocks: [
          { kind: 'decide', title: 'Piensa en una condición y responde', steps: [
            { q: '¿Ves la condición como posible, cercana o en preparación?', yes: 'Usa **si + presente**: «[[Si conseguimos voluntarios|blue]], organizaremos una tarde de prueba».', no: 'next' },
            { q: '¿Hablas del presente o del futuro (no de algo que ya pasó)?', yes: 'Usa **si + imperfecto de subjuntivo → condicional**: «[[Si tuviéramos más recursos, abriríamos|violet]] los domingos».', no: 'Es un pasado imposible: «Si hubiera sabido, habría venido». Lo verás en otra lección.' },
          ] },
          { kind: 'compare', title: 'El mismo tema, dos actitudes', columns: [
            { tone: 'blue', label: 'LO VEO POSIBLE', sentence: '[[Si gano|blue]] el concurso, [[viajaré|blue]] a Japón.', idea: 'Participo y tengo opciones reales. Hago planes.', en: 'I see it as possible: I’m taking part and have a real chance, so I make plans.' },
            { tone: 'violet', label: 'LO VEO LEJANO', sentence: '[[Si ganara|violet]] la lotería, [[viajaría|violet]] por todo el mundo.', idea: 'Es poco probable. Imagino y disfruto la idea.', en: 'I see it as remote: it is unlikely, so I just imagine it and enjoy the idea.' },
          ] },
          { kind: 'tip', icon: '⚖', title: 'No mezcles los dos mundos', text: 'La condición y la consecuencia se quedan en el mismo mundo: **presente → futuro/presente** o **imperfecto de subjuntivo → condicional**. «Si viviera cerca, **voy** caminando» mezcla una hipótesis con una consecuencia real.', en: 'Don’t mix the two worlds. Condition and consequence stay in the same world: present → future/present, or imperfect subjunctive → conditional. «Si viviera cerca, voy caminando» mixes an imagined condition with a real consequence.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores aparecen incluso en niveles altos.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error y lo explica con sus palabras antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección y la explicación.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Si tendría más tiempo, aprendería otro idioma.', right: 'Si tuviera más tiempo, aprendería otro idioma.', why: 'Después de «si» condicional nunca va el condicional. La condición va en imperfecto de subjuntivo.' },
            { wrong: 'Si viviera cerca, voy caminando todos los días.', right: 'Si viviera cerca, iría caminando todos los días.', why: 'Las dos partes deben estar en el mismo mundo: hipótesis → condicional.' },
            { wrong: 'Si tenga dinero, compraré una bicicleta.', right: 'Si tengo dinero, compraré una bicicleta.', why: 'El presente de subjuntivo no va después de «si». Para una condición abierta, presente de indicativo.' },
            { wrong: 'Si conseguiremos voluntarios, abriremos por la tarde.', right: 'Si conseguimos voluntarios, abriremos por la tarde.', why: 'El futuro no va después de «si»: la condición abierta va en presente.' },
            { wrong: 'Si tendríamos más espacio, haríamos talleres.', right: 'Si tuviéramos más espacio, haríamos talleres.', why: 'Mismo error con «nosotros»: tuviéramos (con tilde), no tendríamos.' },
            { wrong: 'Si hacería buen tiempo, saldríamos al parque.', right: 'Si hiciera buen tiempo, saldríamos al parque.', why: 'Hacer → hicieron → hiciera. El condicional va solo en la consecuencia.' },
          ] },
          { kind: 'teacher', text: 'Pide dos frases sobre el mismo tema: una que el alumno ve posible y otra que imagina. Pregunta: «¿Por qué elegiste presente aquí y subjuntivo allí?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Negociar posibilidades', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'La reunión de vecinos · The residents’ meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después el alumno toca cada expresión y explica si es un plan posible o una hipótesis.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una biblioteca con otro horario', setting: 'Elena, Julián y Rosa hablan sobre ampliar el horario de la biblioteca del barrio, que hoy abre solo por la mañana.', lines: [
            { who: 'Elena', text: 'Tengo una propuesta concreta: [[si conseguimos voluntarios este mes|blue]], organizaremos una tarde de prueba.', en: 'I have a concrete proposal: if we get volunteers this month, we’ll organise a trial afternoon.' },
            { who: 'Julián', text: 'Me parece bien. Pero yo pienso en algo más grande. [[Si la biblioteca abriera todas las tardes|violet]], la usaría mucha más gente.', en: 'Sounds good. But I’m thinking bigger. If the library opened every afternoon, far more people would use it.' },
            { who: 'Rosa', text: '¿Y los domingos? Yo [[vendría con mis hijos|violet]] si abriera los domingos.', en: 'What about Sundays? I’d come with my kids if it opened on Sundays.' },
            { who: 'Elena', text: 'Me encantaría, pero hoy no hay personal ni para las tardes. [[Si tuviéramos recursos limitados|violet]], yo empezaría por un cambio pequeño.', en: 'I’d love that, but right now there aren’t even staff for the afternoons. If we had limited resources, I’d start with a small change.' },
            { who: 'Julián', text: 'Es que ya tenemos recursos limitados.', en: 'But we already do have limited resources.' },
            { who: 'Elena', text: 'Exacto. Por eso propongo la tarde de prueba. [[Si funciona|blue]], la repetimos cada semana.', en: 'Exactly. That’s why I’m proposing the trial afternoon. If it works, we’ll repeat it every week.' },
            { who: 'Rosa', text: 'De acuerdo. Pero no sabemos cuántas personas vendrían.', en: 'Fine. But we don’t know how many people would come.' },
            { who: 'Julián', text: 'Es verdad. [[Trabajaríamos con más tranquilidad si conociéramos la demanda|violet]].', en: 'True. We’d work more calmly if we knew the demand.' },
            { who: 'Elena', text: 'Entonces hagamos una encuesta. [[Si la mandamos hoy|blue]], el viernes tenemos los resultados.', en: 'Then let’s do a survey. If we send it today, we’ll have the results on Friday.' },
            { who: 'Rosa', text: 'Perfecto. Y en la encuesta preguntamos qué actividades [[harían|violet]] los vecinos si hubiera una sala abierta por la noche.', en: 'Perfect. And in the survey we ask what activities residents would do if there were a room open in the evening.' },
          ], notes: {
            'si conseguimos voluntarios este mes': '**Si + presente**: Elena ve la condición como posible; ya están buscando voluntarios. La consecuencia es un plan real: «organizaremos».',
            'Si la biblioteca abriera todas las tardes': 'Julián imagina una situación distinta de la actual. **Abriera** (imperfecto de subjuntivo) y **usaría** (condicional): una hipótesis, no una promesa.',
            'vendría con mis hijos': 'La consecuencia va primero porque es lo que Rosa quiere destacar. El orden cambia, los tiempos no: **vendría… si abriera**.',
            'Si tuviéramos recursos limitados': 'Elena habla en hipótesis para proponer con prudencia: «si estuviéramos en esa situación, yo haría esto». Suaviza la propuesta.',
            'Si funciona': 'Vuelve el mundo real: la tarde de prueba va a ocurrir. **Si + presente → presente** (la repetimos): una consecuencia práctica.',
            'Trabajaríamos con más tranquilidad si conociéramos la demanda': 'Hoy no conocen la demanda: por eso **conociéramos**. La consecuencia, que es lo importante, va primero.',
            'Si la mandamos hoy': 'Una acción concreta y posible: **si + presente**, con la consecuencia en presente (tenemos) para un resultado seguro.',
            'harían': 'Rosa pregunta por un escenario imaginado («si hubiera una sala»): la consecuencia va en condicional.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué propuesta de la reunión es un plan real?', options: ['La tarde de prueba.', 'Abrir todas las tardes.', 'Abrir los domingos.'], answer: 0, why: '«Si conseguimos voluntarios este mes, organizaremos una tarde de prueba»: si + presente, un plan real.', en: 'Which proposal from the meeting is a real plan?' },
            { prompt: '¿Por qué deciden hacer una encuesta?', options: ['Porque no saben cuántas personas usarían el nuevo horario.', 'Porque ya tienen voluntarios.', 'Porque la biblioteca va a cerrar.'], answer: 0, why: '«Trabajaríamos con más tranquilidad si conociéramos la demanda».', en: 'Why do they decide to do a survey?' },
          ] },
        ] },
        { title: 'Negociar un horario · Negotiating a schedule', mascot: '/brand/mascot/speaking.webp', coach: 'La hipótesis también sirve para negociar.', blocks: [
          { kind: 'explore', title: 'Una conversación con la jefa', setting: 'Daniel trabaja en una agencia de viajes. Quiere teletrabajar algunos días y habla con su jefa, Marta.', lines: [
            { who: 'Daniel', text: 'Marta, ¿tienes cinco minutos? Quería hablar de mi horario.', en: 'Marta, have you got five minutes? I wanted to talk about my schedule.' },
            { who: 'Marta', text: 'Claro. ¿Qué te preocupa?', en: 'Sure. What’s on your mind?' },
            { who: 'Daniel', text: 'Tardo una hora y media en llegar. [[Si pudiera teletrabajar dos días|violet]], [[rendiría|violet]] mucho más.', en: 'It takes me an hour and a half to get here. If I could work from home two days, I’d get much more done.' },
            { who: 'Marta', text: 'Lo entiendo, pero los martes tenemos reunión con clientes.', en: 'I understand, but on Tuesdays we meet with clients.' },
            { who: 'Daniel', text: 'Lo sé. [[Si te parece bien|blue]], vengo siempre los martes y teletrabajo los jueves y viernes.', en: 'I know. If that’s OK with you, I’ll always come in on Tuesdays and work from home on Thursdays and Fridays.' },
            { who: 'Marta', text: 'Hmm. [[Yo lo aceptaría si el equipo estuviera de acuerdo|violet]]. Tendría que preguntar a los demás.', en: 'Hmm. I’d accept it if the team agreed. I’d have to ask the others.' },
            { who: 'Daniel', text: 'Es justo. [[Si el equipo dice que sí|blue]], ¿empezamos el mes que viene?', en: 'That’s fair. If the team says yes, shall we start next month?' },
            { who: 'Marta', text: 'De acuerdo. Y [[si no funciona|blue]], volvemos al horario de antes.', en: 'All right. And if it doesn’t work, we go back to the old schedule.' },
            { who: 'Daniel', text: '¡Perfecto! Gracias por escucharme.', en: 'Perfect! Thanks for hearing me out.' },
          ], notes: {
            'Si pudiera teletrabajar dos días': 'Daniel todavía no tiene permiso: presenta su idea como **hipótesis**. Así su petición suena prudente y abierta.',
            'rendiría': 'La consecuencia imaginada va en **condicional**: es el argumento de Daniel.',
            'Si te parece bien': 'Daniel pasa a una propuesta concreta. **Si + presente**: la condición depende de Marta y es posible.',
            'Yo lo aceptaría si el equipo estuviera de acuerdo': 'Marta no promete: pone una condición lejana todavía. **Aceptaría** va primero porque es su respuesta a Daniel.',
            'Si el equipo dice que sí': 'La negociación avanza y la condición se vuelve real y cercana: **si + presente**.',
            'si no funciona': 'Una condición abierta para el futuro: el plan B es real. **Si + presente → presente**.',
          } },
          { kind: 'teacher', text: 'Fíjense en cómo la conversación pasa de la hipótesis («si pudiera») al plan real («si el equipo dice que sí») cuando las dos personas se acercan a un acuerdo. Pregunta: «¿En qué momento cambia?».' },
        ] },
        { title: '¿Plan o hipótesis? · Plan or hypothesis?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'real', label: 'Condición abierta, posible', tone: 'blue' },
            { id: 'hipotesis', label: 'Hipótesis, imaginada', tone: 'violet' },
          ], items: [
            { text: 'Si conseguimos voluntarios este mes, organizaremos una tarde de prueba.', answer: 'real', why: 'Si + presente → futuro: un plan en preparación.' },
            { text: 'Si la biblioteca abriera todas las tardes, la usaría mucha más gente.', answer: 'hipotesis', why: 'Abriera → usaría: una situación imaginada.' },
            { text: 'Si funciona, la repetimos cada semana.', answer: 'real', why: 'Si + presente → presente: una consecuencia práctica.' },
            { text: 'Si pudiera teletrabajar dos días, rendiría mucho más.', answer: 'hipotesis', why: 'Pudiera → rendiría: Daniel todavía no tiene permiso.' },
            { text: 'Si el equipo dice que sí, ¿empezamos el mes que viene?', answer: 'real', why: 'Si + presente: la condición ya es cercana.' },
            { text: 'Trabajaríamos con más tranquilidad si conociéramos la demanda.', answer: 'hipotesis', why: 'Orden invertido: trabajaríamos… si conociéramos.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto · Choose from the context', blocks: [
          { kind: 'choice', items: [
            { context: 'El vuelo todavía puede bajar de precio esta semana.', prompt: 'Viajo el sábado si el precio ___.', options: ['baja', 'bajara', 'bajaría'], answer: 0, why: 'La bajada es una posibilidad real: si + presente.', en: 'The flight may still get cheaper this week: a real possibility.' },
            { context: 'Imaginas vivir en una ciudad donde hoy no vives.', prompt: 'Si viviera allí, ___ menos el auto.', options: ['usaría', 'uso', 'usara'], answer: 0, why: 'Viviera crea un escenario imaginado; la consecuencia va en condicional.', en: 'You imagine living in a city where you don’t live now.' },
            { context: 'No tienes vacaciones, pero sueñas con un viaje.', prompt: 'Si tuviera una semana libre, ___ todo el norte del país.', options: ['recorrería', 'recorro', 'recorriera'], answer: 0, why: 'Con «si tuviera», la consecuencia imaginada va en condicional.', en: 'You have no holiday, but you dream of a trip around the north.' },
            { context: 'Una oferta de trabajo que todavía no aceptas.', prompt: '___, aceptaría el puesto.', options: ['Si tuviera más flexibilidad', 'Si tendría más flexibilidad', 'Si tenga más flexibilidad'], answer: 0, why: 'Tuviera marca la hipótesis; aceptaría expresa su consecuencia.', en: 'A job offer you haven’t accepted yet: state your condition.' },
            { context: 'Ya pediste el presupuesto y la respuesta llega mañana.', prompt: 'Si nos dan el dinero, ___ las obras en marzo.', options: ['empezaremos', 'empezaríamos', 'empezáramos'], answer: 0, why: 'Condición abierta y cercana → consecuencia real en futuro.', en: 'You have already applied for the funding and the answer comes tomorrow.' },
            { context: 'Un amigo te pide consejo sobre un trabajo que no le gusta.', prompt: 'Yo, en tu lugar, ___ con mi jefe antes de renunciar.', options: ['hablaría', 'hablara', 'hablo'], answer: 0, why: '«En tu lugar» es una hipótesis (si yo fuera tú): condicional.', en: 'A friend asks for advice about a job he doesn’t like. «En tu lugar» means “in your place”.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿En qué frase el hablante **cree más probable** que haya voluntarios?', options: ['Si hay voluntarios, abriremos por la tarde.', 'Si hubiera voluntarios, abriríamos por la tarde.'], answer: 0, why: 'Si + presente presenta la condición como abierta y posible.', en: 'In which sentence does the speaker think volunteers are more likely?' },
            { prompt: '«Si tuviera auto, te llevaría al aeropuerto.» ¿Qué entiendes?', options: ['Probablemente no tiene auto.', 'Va a comprar un auto mañana.', 'Te va a llevar seguro.'], answer: 0, why: 'La hipótesis presenta una situación distinta de la actual.', en: '“If I had a car, I’d take you to the airport.” What do you understand?' },
            { prompt: '¿Qué frase es una **propuesta prudente** en una reunión?', options: ['Yo empezaría por un cambio pequeño.', 'Empezamos por un cambio pequeño.', 'Si empezamos, cambiamos.'], answer: 0, why: 'El condicional suaviza: es una propuesta, no una orden.', en: 'Which sentence is a cautious proposal in a meeting?' },
            { prompt: '«Trabajaría desde casa si pudiera» y «Si pudiera, trabajaría desde casa»: ¿cambia el significado?', options: ['No, solo cambia lo que se destaca primero.', 'Sí, la primera es real y la segunda imaginada.', 'Sí, la primera habla del pasado.'], answer: 0, why: 'El orden es flexible; la relación entre condición y consecuencia no cambia.', en: 'Does the meaning change when you swap the order of the two parts?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Planear un viaje con una amiga', lines: [
            { who: 'Lucía', text: '¿Vamos a la sierra en noviembre? ___ los pasajes esta semana, son baratos.', options: ['Si compramos', 'Si compráramos', 'Si compraremos'], answer: 0, why: 'Es un plan real y posible: si + presente.' },
            { who: 'Andrea', text: 'Me encantaría, pero no sé si tengo días libres.' },
            { who: 'Lucía', text: 'Pregúntale a tu jefe. Si te ___ el viernes, salimos el jueves por la noche.', options: ['da', 'diera', 'daría'], answer: 0, why: 'Condición abierta que depende de una respuesta próxima.' },
            { who: 'Andrea', text: 'Ojalá. Si ___ más vacaciones este año, iría contigo a todas partes.', options: ['tuviera', 'tendría', 'tengo'], answer: 0, why: 'Andrea imagina una situación distinta: no tiene más vacaciones.' },
            { who: 'Lucía', text: 'Y si no puedes en noviembre, ¿qué ___ en diciembre?', options: ['te parecería', 'te pareciera', 'te parezca'], answer: 0, why: 'Lucía propone con prudencia una alternativa: condicional.' },
            { who: 'Andrea', text: 'Diciembre ___ perfecto si no fuera tan caro.', options: ['sería', 'fuera', 'es'], answer: 0, why: 'Consecuencia de una hipótesis (si no fuera tan caro): condicional.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si tendría más tiempo, aprendería otro idioma.', ok: false, options: ['Si tuviera más tiempo, aprendería otro idioma.', 'Si tenga más tiempo, aprendería otro idioma.', 'Si tendría más tiempo, aprendiera otro idioma.'], answer: 0, why: 'La condición va en imperfecto de subjuntivo; el condicional, solo en la consecuencia.' },
            { sentence: 'Si viviera cerca, voy caminando todos los días.', ok: false, options: ['Si viviera cerca, iría caminando todos los días.', 'Si viviría cerca, iría caminando todos los días.', 'Si viviera cerca, fuera caminando todos los días.'], answer: 0, why: 'Hipótesis → condicional: las dos partes en el mismo mundo.' },
            { sentence: 'Si consigo el permiso, trabajo desde otro país en enero.', ok: true, why: 'Correcta: condición abierta (si + presente) y consecuencia real en presente.' },
            { sentence: 'Si conseguiremos cuatro voluntarios, abriremos el jueves.', ok: false, options: ['Si conseguimos cuatro voluntarios, abriremos el jueves.', 'Si consiguiéramos cuatro voluntarios, abriremos el jueves.', 'Si conseguiremos cuatro voluntarios, abriríamos el jueves.'], answer: 0, why: 'El futuro no va después de «si»: si + presente.' },
            { sentence: 'Abriríamos los domingos si hubiera más personal.', ok: true, why: 'Correcta: orden invertido, con condicional e imperfecto de subjuntivo.' },
            { sentence: 'Si hacería sol, comeríamos en la terraza.', ok: false, options: ['Si hiciera sol, comeríamos en la terraza.', 'Si haga sol, comeríamos en la terraza.', 'Si hacería sol, comiéramos en la terraza.'], answer: 0, why: 'Hacer → hicieron → hiciera.' },
          ] },
        ] },
        { title: 'Construye y transforma · Build and transform', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Si', 'tuviera', 'más', 'espacio', 'haría', 'talleres'], accept: ['Si tuviera más espacio haría talleres', 'Haría talleres si tuviera más espacio'], en: 'If I had more space, I’d run workshops.' },
            { tiles: ['Aceptaría', 'el', 'puesto', 'si', 'pudiera', 'teletrabajar'], accept: ['Aceptaría el puesto si pudiera teletrabajar', 'Si pudiera teletrabajar aceptaría el puesto'], en: 'I’d take the job if I could work from home.' },
            { tiles: ['Si', 'llueve', 'la', 'reunión', 'será', 'dentro'], accept: ['Si llueve la reunión será dentro', 'La reunión será dentro si llueve'], en: 'If it rains, the meeting will be indoors.' },
            { tiles: ['Si', 'fuera', 'tú', 'hablaría', 'con', 'ella'], accept: ['Si fuera tú hablaría con ella', 'Hablaría con ella si fuera tú'], en: 'If I were you, I’d talk to her.' },
          ] },
          { kind: 'rewrite', title: 'De plan real a hipótesis', items: [
            { prompt: 'Si tengo tiempo, estudio por la tarde.', instruction: 'Convierte el plan en una hipótesis.', accept: ['Si tuviera tiempo, estudiaría por la tarde', 'Si tuviese tiempo, estudiaría por la tarde', 'Estudiaría por la tarde si tuviera tiempo', 'Estudiaría por la tarde si tuviese tiempo'] },
            { prompt: 'Si la biblioteca abre por la tarde, iremos más vecinos.', instruction: 'Convierte el plan en una hipótesis.', accept: ['Si la biblioteca abriera por la tarde, iríamos más vecinos', 'Si la biblioteca abriese por la tarde, iríamos más vecinos', 'Iríamos más vecinos si la biblioteca abriera por la tarde', 'Iríamos más vecinos si la biblioteca abriese por la tarde'] },
            { prompt: 'Si tuviéramos más presupuesto, contrataríamos a otra persona.', instruction: 'Empieza por la consecuencia.', accept: ['Contrataríamos a otra persona si tuviéramos más presupuesto', 'Contrataríamos a otra persona si tuviésemos más presupuesto'] },
            { prompt: 'Si puedo, te ayudo con la mudanza.', instruction: 'Convierte el plan en una hipótesis.', accept: ['Si pudiera, te ayudaría con la mudanza', 'Si pudiese, te ayudaría con la mudanza', 'Te ayudaría con la mudanza si pudiera', 'Te ayudaría con la mudanza si pudiese'] },
          ] },
        ] },
        { title: 'Negocia tú · Your turn to negotiate', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora elige la forma que mejor sirve a tu propuesta.', blocks: [
          { kind: 'choice', items: [
            { context: 'Quieres proponer algo a tu equipo sin imponerlo.', prompt: '¿Cuál suena más prudente?', options: ['Si les parece, podríamos probar un mes.', 'Probamos un mes.', 'Hay que probar un mes.'], answer: 0, why: 'El condicional («podríamos») presenta la idea como una opción para negociar.', en: 'You want to suggest something to your team without imposing it. Which sounds more tactful?' },
            { context: 'Un cliente pide un descuento. Tú puedes darlo solo con una condición.', prompt: 'Te ___ un diez por ciento si pagas hoy.', options: ['hago', 'hiciera', 'haga'], answer: 0, why: 'Es una oferta real y concreta: condición abierta con consecuencia en presente.', en: 'A client asks for a discount. You can give it, but only on one condition: a real, concrete offer.' },
            { context: 'Explicas por qué no aceptas una oferta.', prompt: 'La aceptaría si el sueldo ___ un poco más alto.', options: ['fuera', 'sería', 'es'], answer: 0, why: 'Condición hipotética después de «si»: imperfecto de subjuntivo.', en: 'You explain why you are not accepting an offer: the salary is not high enough.' },
            { context: 'Tu compañera duda entre dos opciones y te pregunta.', prompt: 'Si fuera tú, ___ la opción más pequeña.', options: ['elegiría', 'elija', 'eligiera'], answer: 0, why: 'Consejo como hipótesis: si fuera tú → condicional.', en: 'A colleague can’t decide between two options and asks you. Give advice as if you were her.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una opinión después de la reunión', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un mensaje para Elena', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota qué condiciones son reales y cuáles imaginadas antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en cada «si»: ¿plan o hipótesis?' } },
          { kind: 'listen', title: 'Una vecina responde a Elena', channel: 'MENSAJE DE VOZ · DESPUÉS DE LA REUNIÓN', src: '/audio/grammar-classroom/219.mp3',
            before: 'Después de la reunión, una vecina le manda un mensaje a Elena con su opinión sobre el nuevo horario. ¿Qué opción crees que va a preferir: la tarde o el domingo?',
            gist: { prompt: '¿Qué opina la vecina sobre el plan?', options: ['Apoya empezar con una tarde de prueba.', 'Quiere abrir todos los domingos ya.', 'Piensa que la encuesta no sirve.'], answer: 0, why: '«Me parece bien empezar con una tarde de prueba».', en: 'What does the neighbour think of the plan?' },
            details: [
              { prompt: '¿Qué condición real permitiría la prueba?', options: ['Conseguir cuatro voluntarios.', 'Cambiar todo el horario.', 'Abrir una sala por la noche.'], answer: 0, why: '«Si conseguimos cuatro voluntarios, podremos organizarla».', en: 'What real condition would make the trial possible?' },
              { prompt: '¿Por qué participaría más si la biblioteca abriera después de las seis?', options: ['Porque sale tarde del trabajo.', 'Porque los domingos viaja.', 'Porque vive lejos.'], answer: 0, why: '«Yo participaría más si la biblioteca abriera después de las seis, porque salgo tarde del trabajo».', en: 'Why would she take part more if the library opened after six?' },
              { prompt: 'Si tuviera que elegir, ¿qué preferiría?', options: ['La tarde.', 'El domingo.', 'No elegiría.'], answer: 0, why: '«Si tuviera que elegir entre una tarde y un domingo, preferiría la tarde».', en: 'If she had to choose, what would she prefer?' },
              { prompt: '¿Cómo ve la opción de abrir los domingos?', options: ['Posible, pero más distante.', 'Imposible.', 'La mejor opción.'], answer: 0, why: '«No digo que abrir los domingos sea imposible, pero ahora lo veo más distante».', en: 'How does she see the idea of opening on Sundays?' },
              { prompt: '¿Qué propone añadir a la encuesta?', options: ['Qué actividades harían los vecinos si hubiera una sala por la noche.', 'Cuántos voluntarios hay.', 'A qué hora salen del trabajo.'], answer: 0, why: '«Sería útil preguntar qué actividades harían los vecinos si hubiera una sala disponible por la noche».', en: 'What does she suggest adding to the survey?' },
            ],
            transcript: 'Hola, Elena. Me parece bien empezar con una tarde de prueba. [[Si conseguimos cuatro voluntarios, podremos|blue]] organizarla sin cambiar todo el horario. Yo [[participaría más si la biblioteca abriera|violet]] después de las seis, porque salgo tarde del trabajo. [[Si tuviera que elegir|violet]] entre una tarde y un domingo, [[preferiría|violet]] la tarde. Así más compañeros [[podrían|violet]] venir al salir de la oficina. No digo que abrir los domingos sea imposible, pero ahora lo veo más distante. La encuesta nos ayudará a comparar las necesidades. También sería útil preguntar qué actividades [[harían los vecinos si hubiera|violet]] una sala disponible por la noche. Con esas respuestas podemos pasar de las ideas imaginadas a un plan que realmente podamos probar.',
            reply: { teacher: 'El alumno responde al mensaje como si fuera Elena: una condición real para la tarde de prueba y una hipótesis sobre los domingos.', self: 'Responde al mensaje como si fueras Elena. Usa una condición real («Si conseguimos…») y una hipótesis («Si tuviéramos…, …ría»).' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Si pudieras cambiar algo…', coach: 'Del plan posible al mundo imaginado.',
      steps: [
        { title: 'Si pudieras cambiar algo…', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte también tus propias hipótesis.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta después.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué cambiarías en tu espacio de trabajo o de estudio si pudieras?', followUps: ['¿Por qué ese cambio y no otro?', '¿Hay algo que sí puedes cambiar esta semana?', '¿Quién tendría que estar de acuerdo?'], phrases: ['[[Si pudiera|violet]], cambiaría…', '[[Me gustaría|violet]] tener…', '[[Si consigo|blue]]…, este mes…'], hint: 'Primero imagina (si pudiera…, cambiaría…). Después busca un cambio pequeño y real (si consigo…, voy a…).', example: 'Si pudiera, cambiaría la luz de mi oficina: es muy fría. Pero si consigo una lámpara pequeña este fin de semana, ya trabajo mejor el lunes.', next: 'Ahora pensemos en tu horario.', teacher: 'Si el alumno solo usa hipótesis, pregunta: «¿Y qué puedes hacer de verdad?». Así aparece el contraste.' },
            { q: 'Si tu día tuviera dos horas más, ¿qué harías con ellas?', followUps: ['¿Las usarías para ti o para otras personas?', '¿Qué dejarías de hacer si no tuvieras esas horas?', '¿Hay una forma real de conseguir parte de ese tiempo?'], phrases: ['[[Si tuviera|violet]] dos horas más, [[dedicaría|violet]]…', 'Seguramente [[haría|violet]]…', 'En realidad, [[si me levanto|blue]] antes…'], hint: 'Mantén las dos partes en el mismo mundo: si tuviera… → haría, iría, estudiaría.', example: 'Si tuviera dos horas más, haría deporte y leería novelas. En realidad, si me levanto media hora antes, puedo caminar un poco.', next: 'Hablemos de tu barrio o tu ciudad.' },
            { q: '¿Qué servicio le falta a tu barrio? ¿Qué pasaría si existiera?', followUps: ['¿Quién lo usaría más?', '¿Cómo se podría financiar?', '¿Ves posible ese cambio en los próximos años?'], phrases: ['[[Si hubiera|violet]] un/una…, los vecinos [[podrían|violet]]…', '[[Más gente vendría si|violet]]…', 'Lo veo posible / lejano porque…'], hint: 'Usa «si hubiera» para algo que no existe: «Si hubiera un mercado, compraríamos fruta fresca».', example: 'A mi barrio le falta un parque. Si hubiera un parque, los niños podrían jugar fuera y los mayores tendrían un lugar para pasear. Lo veo lejano, porque no hay terreno libre.', next: 'Ahora imagina que tienes que negociar.' },
            { q: 'Imagina que te ofrecen un trabajo nuevo. ¿Qué condiciones pondrías para aceptarlo?', followUps: ['¿Qué es lo más importante para ti?', '¿Qué no aceptarías nunca?', '¿Cómo se lo dirías a la empresa con prudencia?'], phrases: ['[[Aceptaría si|violet]]…', '[[No lo aceptaría si|violet]]…', '[[Me interesaría más si|violet]]…'], hint: 'Empezar por la consecuencia suena natural en una negociación: «Aceptaría si pudiera teletrabajar».', example: 'Aceptaría si pudiera teletrabajar dos días y si el sueldo fuera un poco más alto. No lo aceptaría si tuviera que viajar todas las semanas.', next: 'Pasemos a los consejos.', teacher: 'Haz de empresa y negocia con tu alumno: «Te daríamos el teletrabajo si empezaras en enero». Tu alumno responde con una contrapropuesta.' },
            { q: 'Un amigo quiere dejar su trabajo para viajar un año. ¿Qué le aconsejarías?', followUps: ['¿Tú lo harías?', '¿Qué necesitarías para hacerlo?', '¿Qué pasaría con tu vida si lo hicieras?'], phrases: ['[[Si fuera|violet]] él, [[ahorraría|violet]]…', 'Yo, en su lugar, [[hablaría|violet]]…', '[[Si tiene|blue]] ahorros, que…'], hint: '«Si fuera tú / él» y «yo, en tu lugar» son formas muy naturales de dar consejos.', example: 'Si fuera él, ahorraría un año más antes de irme. Yo no lo haría ahora, pero si tuviera menos responsabilidades, me iría a Sudamérica seis meses.', next: 'Para terminar, una pregunta para soñar.' },
            { q: 'Si pudieras vivir un año en cualquier lugar del mundo, ¿dónde vivirías y cómo sería tu vida?', followUps: ['¿Qué echarías de menos?', '¿Qué harías los fines de semana?', '¿Qué parte de ese sueño podrías hacer realidad?'], phrases: ['[[Viviría|violet]] en…', '[[Si viviera|violet]] allí, [[aprendería|violet]]…', '[[Si ahorro|blue]]…, el año que viene…'], hint: 'Termina con un plan real: ¿qué paso pequeño puedes dar de verdad?', example: 'Viviría en Lisboa. Si viviera allí, aprendería portugués y caminaría por la ciudad todos los días. Echaría de menos a mi familia. Si ahorro este año, el verano que viene paso dos semanas allí.', teacher: 'Cierra la conversación preguntando qué parte del sueño es un plan real: el alumno pasa de la hipótesis a «si + presente».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le hace al profesor dos o tres de estas preguntas y repregunta.', self: 'Escribe dos preguntas con «¿Qué harías si…?» y házselas a alguien esta semana. Anota sus respuestas.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una propuesta para tu barrio', coach: 'Separa lo que puedes hacer ya de lo que imaginas.',
      steps: [
        { title: 'Una propuesta para tu barrio', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos si cada condición está en el mundo correcto.', self: 'Escribe tu propuesta y toca «Revisar mi texto». Comprueba que cada «si» va con la consecuencia del mismo mundo.' } },
          { kind: 'write', title: 'Propón un cambio para un espacio común', situation: 'Tu barrio, tu edificio o tu lugar de trabajo tiene un espacio común que podría funcionar mejor: una biblioteca, un patio, una sala, un parque. Escribe una propuesta breve para el grupo de vecinos o de compañeros.', task: [
            'Describe el espacio y el problema actual.',
            'Propón **un plan real y pequeño** con «si + presente».',
            'Imagina **dos situaciones** más ambiciosas con «si + imperfecto de subjuntivo → condicional».',
            'Usa al menos una vez el orden invertido y termina con un paso concreto.',
          ], starters: ['Les escribo para proponer…', 'Ahora mismo…', 'Si conseguimos…, organizaremos…', 'Si tuviéramos…, podríamos…', 'Más personas vendrían si…', 'Para empezar, propongo…'],
            words: ['una prueba', 'voluntarios', 'presupuesto', 'recursos', 'encuesta', 'horario', 'participar', 'convendría', 'de momento'],
            model: 'Hola a todos. El patio del edificio está casi siempre vacío porque no tiene sombra ni bancos. [[Si conseguimos dos voluntarios este mes, organizaremos|blue]] una mañana de limpieza y pondremos algunas plantas. Es un primer paso fácil. [[Si tuviéramos un pequeño presupuesto, compraríamos|violet]] bancos y un toldo, y el patio [[sería|violet]] un lugar agradable para leer o charlar. También [[podríamos organizar|violet]] cenas en verano [[si los vecinos estuvieran|violet]] de acuerdo. De momento, propongo una encuesta: [[si la mandamos|blue]] el lunes, el viernes sabremos qué prefiere cada uno.',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial · The essentials', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'CONDICIÓN ABIERTA', formula: 'si + presente → futuro / presente', example: 'Si consigo tiempo, estudio.', caption: 'Lo veo posible. Es un plan real.', en: 'I see it as possible: a real plan (“if I find time, I study”).' },
            { tone: 'violet', label: 'HIPÓTESIS', formula: 'si + imperfecto de subjuntivo → condicional', example: 'Si tuviera más tiempo, estudiaría.', caption: 'Lo imagino. Es distinto de lo actual.', en: 'I imagine it: different from the present (“if I had more time, I’d study”).' },
            { tone: 'violet', label: 'ORDEN FLEXIBLE', formula: 'condicional + si + imperfecto de subjuntivo', example: 'Estudiaría más si tuviera tiempo.', caption: 'Destaca la consecuencia. Los tiempos no cambian.', en: 'The consequence goes first to stand out; the tenses stay the same.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La regla de oro', text: 'Después de **si** nunca va el **condicional** ni el **futuro** ni el **presente de subjuntivo**. Presente para lo posible; imperfecto de subjuntivo para lo imaginado.', en: 'The golden rule. After «si» you never use the conditional, the future or the present subjunctive. Present for what is possible; imperfect subjunctive for what is imagined.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Si ___ más paciencia, aprendería a tocar el piano.', options: ['tuviera', 'tendría', 'tenga'], answer: 0, why: 'Hipótesis: imperfecto de subjuntivo después de «si».', en: 'An imagined condition: more patience, which the speaker lacks.' },
            { prompt: 'Si mañana hace buen tiempo, ___ en bicicleta.', options: ['iremos', 'iríamos', 'fuéramos'], answer: 0, why: 'Condición abierta → consecuencia real en futuro.', en: 'A real plan for tomorrow if the weather is good.' },
            { prompt: 'Mis abuelos ___ más felices si vivieran cerca del mar.', options: ['serían', 'fueran', 'son'], answer: 0, why: 'Consecuencia de una hipótesis: condicional.', en: 'The consequence of an imagined situation: the grandparents living by the sea.' },
            { prompt: 'Te llamaría si ___ tu número.', options: ['supiera', 'sabría', 'sé'], answer: 0, why: 'Orden invertido: la condición sigue en imperfecto de subjuntivo (saber → supieron → supiera).', en: 'The condition comes second here: build it from «supieron».' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Si consigo tiempo, estudio» y «Si tuviera más tiempo, estudiaría»: ¿qué diferencia hay? En la primera el hablante lo ve posible; en la segunda imagina una situación distinta de la actual.' },
        ] },
      ],
    },
  ],
};
