import type { LiveLesson } from '../types';

/**
 * Lesson 421 · B1 · Diferencia entre ser + participio y estar + participio (course unit G121).
 * Builds on G119 (se pasivo: «se construyó en 1890») and G120 (estar + participio
 * for resulting states: «la puerta está cerrada»), and on the past tenses of
 * G086–G087. The productive B2 class on the periphrastic passive is G148 (lesson 232).
 * Scene: Valdemora, a mid-sized town. The old railway station (built in 1890,
 * closed in 1985, restored 2024–2026) reopens this week as the Museo de la
 * Ciudad. Nuria Salas coordinates the museum; Raúl Ibáñez, a reporter from the
 * local radio, interviews her. In the listening (one voice, Spanish accent)
 * Raúl reads a short radio news item about the opening.
 * Content: ser + participle = an action or process (passive; typical of news,
 * history and formal writing; with a date or «por» + agent: «La estación fue
 * construida en 1890 por el ingeniero Ramón Gil») vs estar + participle = the
 * state that results («Hoy la estación está restaurada»); same participle,
 * different meaning (la puerta fue abierta / estaba abierta); tense choice
 * (fue inaugurado ayer vs ya está abierto; estuvo cerrado cuarenta años);
 * participle agreement in both. In speech the active or the pasiva refleja
 * (G119) is more frequent than the passive with ser. Following the coverage
 * audit, ser + participle is RECEPTIVE here (recognise, interpret, choose,
 * reformulate into active / se / estar); its free production is G148.
 * Ampliación: ha sido / será / es + participle (receptive) and register; one
 * line on adjectives that change meaning with ser/estar (G237). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 421,
  level: 'B1',
  title: 'Diferencia entre ser + participio y estar + participio',
  subtitle: 'Distinguir lo que pasó («fue construida en 1890») del estado actual («está restaurada») y describir cómo están las cosas.',
  legend: [
    { tone: 'orange', label: 'SER + participio · la acción, lo que pasó (the action: fue construida)' },
    { tone: 'blue', label: 'ESTAR + participio · el estado, el resultado (the state: está restaurada)' },
    { tone: 'teal', label: 'PISTAS · fecha, por + agente, ahora, ya (clues: when, by whom, now)' },
    { tone: 'neutral', label: 'CONVERSACIÓN · se / activa (in speech: se construyó, lo construyó)' },
  ],
  optionNotes: {
    'está construido': 'Con una fecha («en el siglo XII», «en 1890») hablas del momento de la acción: **fue construido**. «Está» describe cómo está ahora.',
    'Es cerrada': '«Ser cerrada» no describe cómo está algo ahora. Para el estado actual: **está cerrada**.',
    'fueron inaugurado': 'El participio concuerda con el sujeto plural femenino: **fueron inauguradas**.',
    'fueron reparado': 'El participio concuerda con el sujeto plural: **fueron reparados**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo que pasó y cómo está', coach: 'Una acción o un estado. An action or a state.',
      steps: [
        { title: 'La placa de la estación · The plaque at the station', blocks: [
          { kind: 'lead', text: 'En Valdemora, la antigua estación de tren abre esta semana como **Museo de la Ciudad**. En la entrada hay una placa: «Esta estación **fue construida** en 1890. **Fue restaurada** entre 2024 y 2026». Y hoy, cuando entras, ves el resultado: la estación **está restaurada** y las salas **están abiertas**. Hoy aprendes a separar lo que **pasó** de cómo **está** algo.', en: 'In Valdemora, the old railway station opens this week as the City Museum. At the entrance there is a plaque: “This station was built in 1890. It was restored between 2024 and 2026.” And today, when you go in, you see the result: the station is restored and the rooms are open. Today you learn to separate what happened from how something is.' },
          { kind: 'guide', text: { teacher: 'Tú lees la placa y tu alumno lee la frase de hoy. Después tu alumno dice cuál habla de una acción con fecha y cuál describe lo que vemos ahora.', self: 'Lee las dos frases en voz alta. ¿Cuál cuenta una acción con fecha? ¿Cuál describe lo que ves ahora? (Which one tells an action with a date? Which one describes what you see now?)' } },
          { kind: 'compare', title: 'El mismo participio, dos ideas · Same participle, two ideas', columns: [
            { tone: 'orange', label: 'SER + participio · la acción', sentence: 'La estación [[fue restaurada|orange]] [[entre 2024 y 2026|teal]].', idea: 'Cuenta qué pasó: alguien hizo una acción en un momento del pasado.', en: 'The station was restored between 2024 and 2026. (an action: someone restored it)' },
            { tone: 'blue', label: 'ESTAR + participio · el estado', sentence: '[[Hoy|teal]] la estación [[está restaurada|blue]].', idea: 'Describe cómo está ahora: el resultado de esa acción.', en: 'Today the station is restored. (the result we can see now)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La estación fue construida en 1890» habla de…', options: ['una acción del pasado, con fecha.', 'una costumbre de la ciudad.', 'cómo está la estación hoy.'], answer: 0, why: '«Fue construida» + fecha: cuenta la acción, lo que pasó en 1890.', en: '“La estación fue construida en 1890” is about…' },
            { prompt: '«Las salas están abiertas» habla de…', options: ['quién abrió las salas.', 'el estado de las salas ahora.', 'el momento en que alguien abrió las salas.'], answer: 1, why: '«Están abiertas» describe cómo están las salas en este momento.', en: '“Las salas están abiertas” is about…' },
          ] },
        ] },
        { title: 'Dos fórmulas · Two patterns', mascot: '/brand/mascot/studying.webp', coach: '¿Qué pasó? o ¿cómo está? What happened, or how is it?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'SER + PARTICIPIO · LA ACCIÓN', question: '¿Qué pasó? ¿Cuándo? ¿Quién lo hizo?', en: 'What happened? When? Who did it?', formula: ['fue / fueron + participio (+ por + agente)', 'la estación fue construida · los trenes fueron retirados'],
            meaning: 'Es la **voz pasiva**: lo importante es la cosa que recibe la acción, no quien la hace. Puedes añadir **cuándo** («en 1890») y **quién** con **por** («por el ingeniero Ramón Gil»). El participio concuerda con el sujeto: construid**a**, retirad**os**. Es típica de las noticias, los libros de historia, las placas y los textos formales.',
            examples: [
              { es: 'La estación [[fue construida|orange]] [[en 1890|teal]] [[por el ingeniero Ramón Gil|teal]].', en: 'The station was built in 1890 by the engineer Ramón Gil.' },
              { es: 'Los últimos trenes [[fueron retirados|orange]] [[en 1985|teal]].', en: 'The last trains were withdrawn in 1985.' },
              { es: 'El mural del vestíbulo [[fue pintado|orange]] [[por Elena Ruiz|teal]], una pintora de la ciudad.', en: 'The mural in the hall was painted by Elena Ruiz, a local painter.' },
            ],
            note: 'Hoy la necesitas **entender** y reconocer, sobre todo en textos escritos. La usarás con más libertad en la clase 148 (B2).' },
          { kind: 'concept', tone: 'blue', label: 'ESTAR + PARTICIPIO · EL ESTADO', question: '¿Cómo está ahora? ¿Cómo estaba?', en: 'How is it now? How was it?', formula: ['está / están / estaba + participio', 'la estación está restaurada · las salas están abiertas'],
            meaning: 'Ya lo conoces (clase 120): describe el **estado** que queda después de una acción. Alguien restauró la estación; el resultado es que **está restaurada**. El participio también concuerda: abiert**as**, cerrad**o**.',
            examples: [
              { es: '[[Ahora|teal]] la estación [[está restaurada|blue]] y las salas [[están abiertas|blue]].', en: 'Now the station is restored and the rooms are open.' },
              { es: 'En 2023 el edificio [[estaba abandonado|blue]].', en: 'In 2023 the building was abandoned.' },
              { es: 'La plaza de la estación [[está cerrada|blue]] por obras.', en: 'The station square is closed for works.' },
            ] },
          { kind: 'table', title: 'Un verbo, dos frases · One verb, two sentences', head: ['Verbo', 'SER · la acción (what happened)', 'ESTAR · el estado (how it is/was)'], rows: [
            ['abrir → abierto', 'La puerta **fue abierta** a las seis por la alcaldesa. (was opened)', 'Cuando llegamos, la puerta **estaba abierta**. (was open)'],
            ['cerrar → cerrado', 'La estación **fue cerrada** en 1985. (was closed down)', 'La estación **estuvo cerrada** cuarenta años. (was closed for forty years)'],
            ['pintar → pintado', 'El mural **fue pintado** en 1950. (was painted)', 'La fachada **está pintada** de verde. (is painted green)'],
            ['reparar → reparado', 'El reloj **fue reparado** el mes pasado. (was repaired)', 'Ahora el reloj **está reparado**: funciona. (is repaired)'],
          ], note: 'Con **estar** también puedes usar el indefinido para un estado con límites: «**estuvo cerrada** cuarenta años» (de 1985 a 2025). Es un estado, no una acción.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El mural ___ en 1950.', options: ['fue pintado', 'es pintado', 'está pintado'], answer: 0, why: 'La fecha señala el momento de la acción: fue pintado.', en: 'The mural was painted in 1950.' },
            { prompt: 'Ahora las salas ___.', options: ['fueron abiertas', 'son abiertas', 'están abiertas'], answer: 2, why: '«Ahora» + cómo están: estar + participio, están abiertas.', en: 'The rooms are open now.' },
          ] },
        ] },
        { title: '¿Ser o estar? · Ser or estar?', mascot: '/brand/mascot/standing.webp', coach: 'Busca las pistas. Look for the clues.', blocks: [
          { kind: 'decide', title: '¿Ser + participio o estar + participio?', steps: [
            { q: '¿Hay una fecha o un momento de la acción (en 1890, ayer, a las seis) o un agente con «por» (por la alcaldesa)?', yes: 'Es la **acción**: ser + participio. «La puerta **fue abierta** a las seis por la alcaldesa».', no: 'next' },
            { q: '¿Describes cómo está o cómo estaba algo (ahora, hoy, ya, cuando llegamos)?', yes: 'Es el **estado**: estar + participio. «Ya **está abierta**», «**estaba abierta** cuando llegamos».', no: 'next' },
            { q: '¿Hablas de cuánto tiempo duró un estado (cuarenta años, todo el invierno)?', yes: 'Estar en indefinido: «**estuvo cerrada** cuarenta años».', no: 'Pregúntate: ¿quiero contar qué pasó o describir cómo está?' },
          ] },
          { kind: 'compare', title: 'El tiempo verbal también ayuda · The tense helps too', columns: [
            { tone: 'orange', label: 'ACCIÓN · fue + participio', sentence: 'El museo [[fue inaugurado|orange]] [[ayer|teal]].', idea: 'Un hecho de un momento concreto: la inauguración.', en: 'The museum was opened yesterday. (the opening ceremony)' },
            { tone: 'blue', label: 'ESTADO · está + participio', sentence: 'El museo [[ya|teal]] [[está abierto|blue]].', idea: 'El resultado ahora: puedes visitarlo.', en: 'The museum is already open. (you can visit it now)' },
            { tone: 'blue', label: 'ESTADO CON LÍMITES · estuvo', sentence: 'El edificio [[estuvo cerrado|blue]] [[cuarenta años|teal]].', idea: 'Un estado que duró un tiempo y terminó.', en: 'The building was closed for forty years.' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Está inaugurado en 1995» no funciona', text: 'Con una fecha hablas de la acción: «El museo **fue inaugurado** en 1995». «Está inaugurado» es posible, pero poco frecuente: para decir que ya funciona, lo natural es «el museo **ya está abierto**».', en: 'With a date you are talking about the action: “El museo fue inaugurado en 1995”. “Está inaugurado” is possible but rare: to say it is already working, the natural choice is “el museo ya está abierto”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La exposición ___ ayer por la alcaldesa.', options: ['está inaugurada', 'estaba inaugurada', 'fue inaugurada'], answer: 2, why: '«Ayer» y «por la alcaldesa»: la acción, con su momento y su agente. Fue inaugurada.', en: 'The exhibition was opened yesterday by the mayor.' },
            { prompt: 'Cuando llegamos a las diez, la taquilla ya ___.', options: ['era abierta', 'fue abierta', 'estaba abierta'], answer: 2, why: 'Cómo estaba la taquilla en ese momento: estado, estaba abierta.', en: 'When we arrived at ten, the ticket office was already open.' },
            { prompt: 'La estación ___ casi cuarenta años, de 1985 a 2025.', options: ['está cerrada', 'estuvo cerrada', 'fue cerrada'], answer: 1, why: 'Un estado que duró un tiempo con límites: estuvo cerrada.', en: 'The station was closed for almost forty years, from 1985 to 2025.' },
          ] },
        ] },
        { title: 'En las noticias y en la calle · In the news and in the street', mascot: '/brand/mascot/speaking.webp', coach: 'Escrito o hablado. Written or spoken.', blocks: [
          { kind: 'compare', title: 'El mismo hecho, tres maneras · The same fact, three ways', columns: [
            { tone: 'orange', label: 'NOTICIA · ser + participio', sentence: 'La estación [[fue construida|orange]] en 1890 [[por Ramón Gil|teal]].', idea: 'Texto escrito o formal: placas, noticias, libros de historia.', en: 'The station was built in 1890 by Ramón Gil. (written, formal)' },
            { tone: 'neutral', label: 'CONVERSACIÓN · se / activa', sentence: 'Se construyó en 1890. / La construyó Ramón Gil.', idea: 'Hablando, es más frecuente «se» (clase 119) o la frase activa.', en: 'It was built in 1890. / Ramón Gil built it. (more usual in speech)' },
            { tone: 'blue', label: 'ESTADO · estar + participio', sentence: 'Ahora [[está restaurada|blue]] y es preciosa.', idea: 'En cualquier registro: cómo está.', en: 'Now it is restored and it is beautiful. (any register)' },
          ] },
          { kind: 'tip', icon: '🔑', title: '¿Y si quiero decir quién? · And if I want to say who?', text: 'En la conversación, «se construyó» normalmente no lleva agente: no decimos «se construyó por Ramón Gil». Si quieres nombrar a la persona, usa la frase activa: «La **construyó** Ramón Gil». La pasiva con **ser + por** suena a texto escrito: es correcta, pero en una charla con amigos es menos frecuente.', en: 'In conversation, “se construyó” does not normally take an agent: we do not say “se construyó por Ramón Gil”. If you want to name the person, use the active sentence: “La construyó Ramón Gil”. The passive with ser + por sounds written: it is correct, but in a chat with friends it is less common.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un amigo te pregunta por la estación. ¿Qué respuesta suena más natural en una conversación?', options: ['«La construyó Ramón Gil, un ingeniero de aquí».', '«Se construyó por Ramón Gil».', '«La estación fue construida por Ramón Gil».'], answer: 0, why: 'Hablando, para decir quién lo hizo, lo natural es la activa. «Se construyó por…» no se usa.', en: 'A friend asks you about the station. Which answer sounds most natural in conversation?' },
            { prompt: '¿Dónde esperas leer «El puente fue inaugurado en 1912»?', options: ['En una placa o en un libro de historia.', 'En una lista de la compra.', 'En un mensaje a tu hermana.'], answer: 0, why: 'Ser + participio con fecha es típico de textos de historia, placas y noticias.', en: 'Where would you expect to read “El puente fue inaugurado en 1912”?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Acción o estado? Action or state?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿es una acción o un estado? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿acción o estado? Toca para ver la corrección. (Action or state?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El puente está construido en 1890.', right: 'El puente fue construido en 1890.', why: 'La fecha señala el momento de la acción: ser + participio. (A date points to the action: fue construido.)' },
            { wrong: 'Lo siento, hoy el museo es cerrado.', right: 'Lo siento, hoy el museo está cerrado.', why: 'Describes cómo está hoy: estar + participio. (How it is today: está cerrado.)' },
            { wrong: 'Las salas fueron restaurado por un equipo de Valdemora.', right: 'Las salas fueron restauradas por un equipo de Valdemora.', why: 'El participio concuerda con el sujeto: las salas → restauradas. (The participle agrees: restauradas.)' },
            { wrong: 'La puerta estaba abierta por la alcaldesa a las seis.', right: 'La puerta fue abierta por la alcaldesa a las seis.', why: 'Hora + agente con «por»: es la acción, ser + participio. (Time + agent: the action.)' },
            { wrong: 'El mural se pintó por Elena Ruiz.', right: 'El mural lo pintó Elena Ruiz. / El mural fue pintado por Elena Ruiz.', why: '«Se» + verbo no lleva agente con «por». Hablando: activa; en un texto: ser + participio. (No “por” agent with “se”.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Los bancos del andén ___ por un carpintero del barrio.', options: ['fueron reparado', 'están reparados', 'fueron reparados'], answer: 2, why: 'Agente con «por»: la acción, ser + participio, y concordancia en plural: fueron reparados.', en: 'The benches on the platform were repaired by a local carpenter.' },
            { prompt: 'No puedes entrar en la sala 3: ___.', options: ['fue cerrada', 'está cerrada', 'es cerrada'], answer: 1, why: 'Cómo está la sala ahora: está cerrada.', en: 'You can’t go into room 3: it’s closed.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno piensa en un edificio de su ciudad y dice una frase de estado con estar («Ahora está…»). Tú le das la frase de historia con ser («Fue construido en…») y tu alumno la explica con palabras de conversación («Lo construyeron en…» / «Se construyó en…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Una entrevista en la radio', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Radio Valdemora · Valdemora Radio', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Raúl, el periodista, y tu alumno es Nuria. Después tu alumno toca cada expresión marcada y dice si es una acción o un estado.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿acción o estado? (Action or state?)' } },
          { kind: 'explore', title: 'Una estación con historia', setting: 'Dos días antes de la inauguración, en el vestíbulo de la antigua estación. Raúl Ibáñez, periodista de Radio Valdemora, entrevista a Nuria Salas, la coordinadora del museo. Se tratan de tú. (Two days before the opening, in the hall of the old station. A local radio reporter interviews the museum coordinator.)', lines: [
            { who: 'Raúl', text: 'Nuria, para empezar, un poco de historia. ¿Cuándo [[fue construida|orange]] la estación?', en: 'Nuria, to start, a bit of history. When was the station built?' },
            { who: 'Nuria', text: 'En 1890. [[Fue construida|orange]] [[por un ingeniero de aquí|teal]], Ramón Gil. Lo dice la placa de la entrada.', en: 'In 1890. It was built by a local engineer, Ramón Gil. The plaque at the entrance says so.' },
            { who: 'Raúl', text: 'Y luego llegaron los años malos…', en: 'And then the bad years came…' },
            { who: 'Nuria', text: 'Sí. Los últimos trenes [[fueron retirados|orange]] en 1985, y el edificio [[estuvo cerrado|blue]] casi cuarenta años.', en: 'Yes. The last trains were withdrawn in 1985, and the building was closed for almost forty years.' },
            { who: 'Raúl', text: 'Yo recuerdo que de niño entraba a jugar. Las ventanas [[estaban rotas|blue]] y todo [[estaba cubierto|blue]] de polvo.', en: 'I remember going in to play as a kid. The windows were broken and everything was covered in dust.' },
            { who: 'Nuria', text: 'Pues ahora [[está restaurada|blue]] del todo. Mira el mural: [[fue pintado|orange]] en 1950 y [[fue limpiado|orange]] centímetro a centímetro.', en: 'Well, now it is completely restored. Look at the mural: it was painted in 1950 and it was cleaned inch by inch.' },
            { who: 'Raúl', text: 'Es precioso. ¿Y las salas? ¿Ya [[están terminadas|blue]]?', en: 'It’s beautiful. And the rooms? Are they finished yet?' },
            { who: 'Nuria', text: 'Casi. Las tres primeras [[están montadas|blue]]; en la cuarta todavía faltan las luces.', en: 'Almost. The first three are set up; in the fourth we still need the lights.' },
            { who: 'Raúl', text: '¿Y quién abre la puerta el sábado?', en: 'And who is opening the door on Saturday?' },
            { who: 'Nuria', text: 'La alcaldesa, a las seis. El domingo la noticia dirá: «La puerta [[fue abierta|orange]] [[por la alcaldesa|teal]]». Pero yo prefiero otra frase: «A las seis y un minuto, la puerta ya [[estaba abierta|blue]] para todos».', en: 'The mayor, at six. On Sunday the news will say: “The door was opened by the mayor.” But I prefer another sentence: “At one minute past six, the door was already open to everyone.”' },
          ], notes: {
            'fue construida': 'Ser + participio: la acción de construir, con fecha (1890). Concuerda con «la estación»: construid**a**.',
            'Fue construida': 'La misma acción, ahora con el agente: **por** + quien la hizo. Es la frase de la placa, de estilo escrito.',
            'por un ingeniero de aquí': '**Por** + agente: quién hizo la acción. Va con ser + participio.',
            'fueron retirados': 'Ser en plural + participio en plural: los trenes → fueron retirad**os**. Una acción de 1985.',
            'estuvo cerrado': 'Estar en indefinido + participio: un **estado** que duró casi cuarenta años y terminó. No es la acción de cerrar.',
            'estaban rotas': 'Estado en el pasado: cómo estaban las ventanas. Romper → **roto** (participio irregular).',
            'estaba cubierto': 'Estado en el pasado: cubrir → **cubierto** (irregular). «Cubierto de polvo» = covered in dust.',
            'está restaurada': 'El resultado ahora: alguien la restauró y hoy **está restaurada**.',
            'fue pintado': 'La acción de pintar, en 1950. Hoy podríamos decir: «el mural está restaurado».',
            'fue limpiado': 'Otra acción, parte de la restauración. En una conversación también se oye «lo limpiaron».',
            'están terminadas': 'Raúl pregunta por el estado: ¿cómo están las salas ahora? Estar + participio.',
            'están montadas': 'Montar una exposición = to set up. Estado actual: están montadas, listas.',
            'fue abierta': 'Frase de noticia: la acción de abrir, con su agente. Es correcta, pero suena escrita.',
            'por la alcaldesa': 'El agente con **por**: quién abrió la puerta.',
            'estaba abierta': 'El estado un minuto después: cómo estaba la puerta. Mismo participio, otro significado.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cómo estaba la estación cuando Raúl era niño?', options: ['Estaba cerrada con llave y nadie entraba.', 'Estaba restaurada y llena de gente.', 'Tenía las ventanas rotas y mucho polvo.'], answer: 2, why: '«Las ventanas estaban rotas y todo estaba cubierto de polvo». Raúl entraba a jugar.', en: 'What was the station like when Raúl was a child?' },
            { prompt: '¿Qué falta en la cuarta sala?', options: ['El mural.', 'Las ventanas.', 'Las luces.'], answer: 2, why: '«En la cuarta todavía faltan las luces».', en: 'What is still missing in the fourth room?' },
            { prompt: '¿Por qué Nuria prefiere «la puerta ya estaba abierta para todos»?', options: ['Porque la alcaldesa no abre la puerta.', 'Porque «fue abierta» es incorrecto.', 'Porque quiere hablar del resultado: el museo abierto para la gente.'], answer: 2, why: 'Las dos frases son correctas; Nuria prefiere describir el estado, no el acto oficial.', en: 'Why does Nuria prefer “la puerta ya estaba abierta para todos”?' },
          ] },
        ] },
        { title: '¿Acción o estado? · Action or state?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la entrevista · Sentences from the interview', categories: [
            { id: 'accion', label: 'ACCIÓN · ser + participio (what happened)', tone: 'orange' },
            { id: 'estado', label: 'ESTADO · estar + participio (how it is/was)', tone: 'blue' },
          ], items: [
            { text: 'Los últimos trenes fueron retirados en 1985.', answer: 'accion', why: 'Una acción con fecha: fueron retirados.' },
            { text: 'Las ventanas estaban rotas.', answer: 'estado', why: 'Describe cómo estaban las ventanas.' },
            { text: 'El mural fue pintado en 1950.', answer: 'accion', why: 'La acción de pintar, en un año concreto.' },
            { text: 'Las tres primeras salas están montadas.', answer: 'estado', why: 'El resultado ahora: están listas.' },
            { text: 'La estación fue construida por Ramón Gil.', answer: 'accion', why: '«Por» + agente: quién hizo la acción.' },
            { text: 'Ahora la estación está restaurada.', answer: 'estado', why: '«Ahora» + cómo está: estado.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué le pasó a la estación en 1985? ¿Y cómo está ahora?». Tu alumno responde con una frase de conversación para la acción («Cerraron la estación» / «Se cerró») y una de estado («Ahora está restaurada»).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Acción: fue. Estado: está. Action: fue. State: está.',
      steps: [
        { title: 'Los carteles del museo · The museum signs', blocks: [
          { kind: 'choice', items: [
            { context: 'Cartel de la sala 1. (Sign in room 1.)', prompt: 'Estos bancos ___ en 1910 para la sala de espera.', options: ['están fabricados', 'son fabricados', 'fueron fabricados'], answer: 2, why: 'Con la fecha cuentas la acción: fueron fabricados.', en: 'These benches were made in 1910 for the waiting room.' },
            { context: 'Aviso en la puerta del ascensor. (Notice on the lift door.)', prompt: 'El ascensor ___. Usen la escalera, por favor.', options: ['es estropeado', 'fue estropeado', 'está estropeado'], answer: 2, why: 'Cómo está el ascensor ahora: estado, está estropeado (it’s out of order).', en: 'The lift is out of order. Please use the stairs.' },
            { context: 'Cartel junto al reloj. (Sign next to the clock.)', prompt: 'Este reloj ___ en Suiza en 1889 y llegó a Valdemora en 1891.', options: ['fue fabricado', 'estaba fabricado', 'está fabricado'], answer: 0, why: 'Lugar y momento de la acción: fue fabricado.', en: 'This clock was made in Switzerland in 1889 and arrived in Valdemora in 1891.' },
            { context: 'Nuria escribe al equipo. (Nuria writes to the team.)', prompt: 'Las invitaciones ya ___: están en la caja azul.', options: ['están impresas', 'son impresas', 'estuvieron impresas'], answer: 0, why: '«Ya» + el resultado que puedes ver ahora: están impresas.', en: 'The invitations are already printed: they’re in the blue box.' },
            { context: 'Del libro de historia de la ciudad. (From the town’s history book.)', prompt: 'El 3 de mayo de 1936 la estación ___ por un incendio.', options: ['fue dañada', 'está dañada', 'es dañada'], answer: 0, why: 'Una acción en un día concreto, con la causa con «por»: fue dañada.', en: 'On 3 May 1936 the station was damaged by a fire.' },
          ] },
        ] },
        { title: '¿Acción o estado? · Action or state?', blocks: [
          { kind: 'classify', title: 'Frases sobre Valdemora · Sentences about Valdemora', categories: [
            { id: 'accion', label: 'ACCIÓN · ser + participio', tone: 'orange' },
            { id: 'estado', label: 'ESTADO · estar + participio', tone: 'blue' },
          ], items: [
            { text: 'El puente viejo fue reconstruido en 1950.', answer: 'accion', why: 'Acción con fecha: fue reconstruido.' },
            { text: 'La biblioteca está cerrada los domingos.', answer: 'estado', why: 'Cómo está la biblioteca ese día: estado.' },
            { text: 'Las calles del centro fueron renovadas por el ayuntamiento.', answer: 'accion', why: '«Por el ayuntamiento»: agente de la acción.' },
            { text: 'Cuando llegué, las luces del andén estaban encendidas.', answer: 'estado', why: 'Cómo estaban las luces en ese momento.' },
            { text: 'La fachada está pintada de verde.', answer: 'estado', why: 'Describe cómo está ahora la fachada: el resultado.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El mercado de Valdemora está inaugurado en 1975.', ok: false, options: ['El mercado de Valdemora fue inaugurado en 1975.', 'El mercado de Valdemora es inaugurado en 1975.', 'El mercado de Valdemora estaba inaugurado en 1975.'], answer: 0, why: 'Con fecha hablas de la acción: fue inaugurado.' },
            { sentence: 'Perdone, ¿la sala 4 ya está abierta?', ok: true, why: 'Correcta: la visitante pregunta por el estado de la sala ahora.' },
            { sentence: 'Los carteles fueron escrito por los alumnos de un instituto.', ok: false, options: ['Los carteles fue escrito por los alumnos de un instituto.', 'Los carteles fueron escritos por los alumnos de un instituto.', 'Los carteles están escrito por los alumnos de un instituto.'], answer: 1, why: 'Ser y el participio concuerdan con «los carteles»: fueron escritos (escribir → escrito, irregular).' },
            { sentence: 'Hoy no hay visitas: el museo es cerrado por una avería.', ok: false, options: ['Hoy no hay visitas: el museo está cerrada por una avería.', 'Hoy no hay visitas: el museo estaba cerrado por una avería.', 'Hoy no hay visitas: el museo está cerrado por una avería.'], answer: 2, why: '«Hoy» + cómo está el museo: está cerrado. Aquí «por» da la causa, no un agente.' },
            { sentence: 'La estación estuvo abandonada muchos años.', ok: true, why: 'Correcta: un estado que duró un tiempo con límites, estar en indefinido.' },
          ] },
        ] },
        { title: 'Visitantes en el museo · Visitors at the museum', blocks: [
          { kind: 'chat-fill', title: 'Nuria habla con una visitante · Nuria talks to a visitor', lines: [
            { who: 'Visitante', text: 'Perdone, ¿la cafetería ___?', options: ['fue abierta', 'está abierta', 'es abierta'], answer: 1, why: 'Pregunta por el estado ahora: está abierta.' },
            { who: 'Nuria', text: 'Todavía no, lo siento. ___ hasta las once.', options: ['Está cerrada', 'Fue cerrada', 'Es cerrada'], answer: 0, why: 'El estado de la cafetería hasta una hora: está cerrada.' },
            { who: 'Visitante', text: '¡Qué mural tan bonito! ¿Es antiguo?' },
            { who: 'Nuria', text: 'Sí, ___ en 1950 por Elena Ruiz.', options: ['estaba pintado', 'está pintado', 'fue pintado'], answer: 2, why: 'Fecha + agente: la acción de pintar, fue pintado.' },
            { who: 'Visitante', text: 'Pues parece nuevo. Los colores ___ muy bien conservados.', options: ['son', 'están', 'fueron'], answer: 1, why: 'Describe cómo están los colores ahora: estado, están conservados (well preserved).' },
            { who: 'Nuria', text: 'Es que ___ el año pasado por un equipo de restauradores.', options: ['fue limpiado', 'está limpiado', 'estaba limpiado'], answer: 0, why: '«El año pasado» + «por un equipo»: la acción, fue limpiado.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Las', 'salas', 'están', 'abiertas', 'hasta', 'las', 'ocho'], accept: ['Las salas están abiertas hasta las ocho'], en: 'The rooms are open until eight.' },
            { tiles: ['ventanas', 'estaban', 'Las', 'rotas', 'en', '2023'], accept: ['Las ventanas estaban rotas en 2023', 'En 2023 las ventanas estaban rotas'], en: 'In 2023 the windows were broken.' },
            { tiles: ['estuvo', 'El', 'edificio', 'cerrado', 'cuarenta', 'años'], accept: ['El edificio estuvo cerrado cuarenta años'], en: 'The building was closed for forty years.' },
            { tiles: ['ya', 'La', 'cuarta', 'sala', 'está', 'terminada'], accept: ['La cuarta sala ya está terminada', 'La cuarta sala está terminada ya', 'Ya está terminada la cuarta sala'], en: 'The fourth room is already finished.' },
          ] },
        ] },
        { title: 'Del texto escrito a la conversación · From writing to speech', blocks: [
          { kind: 'rewrite', title: 'Cuéntalo de otra manera · Say it another way', items: [
            { prompt: 'El museo fue restaurado. (→ ¿cómo está ahora?)', instruction: 'Describe el resultado ahora con estar. Empieza con «Ahora el museo».', accept: ['Ahora el museo está restaurado'] },
            { prompt: 'Las ventanas fueron reparadas. (→ ¿cómo están ahora?)', instruction: 'Describe el resultado ahora con estar. Empieza con «Ahora las ventanas».', accept: ['Ahora las ventanas están reparadas', 'Ahora las ventanas están arregladas'] },
            { prompt: 'El reloj fue reparado por un relojero de Valdemora.', instruction: 'Dilo como en una conversación, con la frase activa en indefinido. Empieza con «Un relojero».', accept: ['Un relojero de Valdemora reparó el reloj', 'Un relojero de Valdemora lo reparó'] },
            { prompt: 'La estación fue construida en 1890.', instruction: 'Dilo con «se» (clase 119). Empieza con «La estación».', accept: ['La estación se construyó en 1890'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige un objeto de la clase o de casa y dice dos frases: una de estado con estar («La ventana está abierta») y una de historia en conversación («La compré el año pasado»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La noticia en la radio', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Radio Valdemora informa · Valdemora Radio reports', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada acción con ser (fue inaugurado…) y da una palmada con cada estado con estar (está cerrado…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Separa las acciones (fue + participio) y los estados (está + participio). (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'La noticia de la inauguración', channel: 'RADIO VALDEMORA · NOTICIAS LOCALES', src: '/audio/grammar-live/421.mp3',
            before: 'Es el domingo por la mañana. Raúl lee en la radio la noticia de la inauguración del sábado. ¿Qué crees que cuenta: la historia del edificio, cómo está ahora, algún problema…? (Raúl reads the news about Saturday’s opening on the radio. What do you think he talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['El museo no pudo abrir por un problema con el reloj.', 'El museo se inauguró ayer con mucho público y hay información práctica para visitarlo.', 'La alcaldesa explica la historia de los trenes de Valdemora.'], answer: 1, why: 'Cuenta la inauguración («más de trescientas personas»), cómo está el museo y da consejos para visitarlo.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Quién abrió la puerta principal?', options: ['Nuria Salas.', 'La alcaldesa.', 'Raúl Ibáñez.'], answer: 1, why: '«La puerta principal fue abierta a las seis por la alcaldesa».', en: 'Who opened the main door?' },
              { prompt: '¿Qué pasa con el reloj de la estación?', options: ['Fue reparado, pero esta mañana estaba parado otra vez.', 'Fue robado durante la fiesta.', 'Está perfecto desde 1891.'], answer: 0, why: '«Fue reparado el mes pasado, pero esta mañana estaba parado otra vez».', en: 'What is going on with the station clock?' },
              { prompt: '¿Qué está todavía cerrado?', options: ['La cafetería.', 'La plaza de la estación.', 'La cuarta sala.'], answer: 1, why: '«La plaza de la estación todavía está cerrada por obras».', en: 'What is still closed?' },
              { prompt: '¿Cómo recomienda ir al museo?', options: ['En coche, por la plaza.', 'A pie o en autobús.', 'En tren.'], answer: 1, why: '«Es mejor ir a pie o en autobús».', en: 'How does he recommend getting to the museum?' },
            ],
            transcript: 'Buenos días, son las nueve y esto es Radio Valdemora. Ayer por la tarde [[fue inaugurado|orange]] el Museo de la Ciudad, en la antigua estación de tren. El edificio [[fue construido|orange]] en 1890 y [[estuvo cerrado|blue]] casi cuarenta años. La puerta principal [[fue abierta|orange]] a las seis por la alcaldesa, y más de trescientas personas entraron en la primera hora. Las cuatro salas ya [[están terminadas|blue]], y el mural del vestíbulo tiene otra vez sus colores originales. Un pequeño detalle: el famoso reloj de la estación [[fue reparado|orange]] el mes pasado, pero esta mañana [[estaba parado|blue]] otra vez. Los técnicos vuelven el lunes. La entrada es gratuita durante todo el mes. Eso sí, la plaza de la estación todavía [[está cerrada|blue]] por obras, así que es mejor ir a pie o en autobús. Seguimos con más noticias después de la música.',
            reply: { teacher: 'Tú eres Raúl y llamas a tu alumno, que estuvo en la inauguración. Tu alumno cuenta en tres frases cómo estaba el museo, qué le gustó y un problema que vio.', self: 'Imagina que estuviste en la inauguración. Responde en voz alta a Raúl: cómo estaba el museo, qué te gustó y un problema que viste. (Answer Raúl aloud: how the museum was, what you liked and a problem you saw.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lugares con historia', coach: 'Cómo está ahora y qué pasó. How it is now and what happened.',
      steps: [
        { title: 'Tu ciudad, ayer y hoy · Your town, then and now', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas como Raúl. Tu alumno habla de lugares reales de su ciudad o de Valdemora. Para los estados usa estar + participio; para la historia, frases de conversación (lo construyeron, se construyó). Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Piensa en lugares reales de tu ciudad. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Think of real places in your town and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Hay en tu ciudad un edificio antiguo especial? ¿Cómo está ahora? · Is there a special old building in your town? What state is it in now?', followUps: ['¿Está abierto al público? (Is it open to the public?)', '¿Está bien conservado o un poco abandonado? (Is it well preserved or a bit neglected?)'], phrases: ['Ahora [[está restaurado|blue]] / [[está abandonado|blue]].', 'Los fines de semana [[está abierto|blue]].', 'La fachada [[está pintada|blue]] de…'], hint: 'Describe el estado con estar + participio, y haz concordar el participio: el edificio está restaurado, la iglesia está restaurada.', example: 'En mi ciudad hay un teatro muy antiguo. Ahora está restaurado y los fines de semana está abierto. La fachada está pintada de blanco.', next: 'Ahora, su historia.', teacher: 'Cuenta tú también un edificio: «En mi barrio hay un mercado que está cerrado desde hace dos años».' },
            { q: 'En la placa de tu edificio pone: «Fue construido en 18… por…». Explícaselo a un amigo, como en una conversación. · The plaque says “Fue construido en… por…”. Explain it to a friend in conversation.', followUps: ['¿Y quién lo construyó? (And who built it?)', '¿Para qué se construyó? (What was it built for?)'], phrases: ['[[Se construyó|neutral]] en…', 'Lo construyó / Lo diseñó…', 'Al principio era un…'], hint: 'La placa usa ser + participio (estilo escrito). Hablando, usa «se construyó» o la activa: «lo construyó…».', example: 'Se construyó en 1902. Lo diseñó un arquitecto de Barcelona y al principio era un mercado.', next: 'Ahora, antes y ahora.' },
            { q: '¿Recuerdas un lugar que estuvo cerrado o en obras mucho tiempo? ¿Cómo estaba antes? ¿Cómo está ahora? · A place that was closed or under works for a long time: how was it then, how is it now?', followUps: ['¿Cuánto tiempo estuvo cerrado? (How long was it closed?)', '¿Te gusta cómo está ahora? (Do you like how it is now?)'], phrases: ['[[Estuvo cerrado|blue]] dos años.', 'Antes [[estaba abandonado|blue]] / sucio.', 'Ahora [[está renovado|blue]] y…'], hint: 'Un estado con límites: estuvo cerrado dos años. Antes: estaba. Ahora: está.', example: 'La piscina de mi barrio estuvo cerrada dos años. Antes estaba muy vieja y las paredes estaban rotas. Ahora está renovada y siempre está llena.', next: 'Ahora, en el museo.' },
            { q: 'Eres guía en el museo de Valdemora. Un visitante pregunta: «¿La sala 4 está abierta? ¿Y el ascensor funciona?». Contesta y explica cómo están las cosas. · You are the museum guide. Answer the visitor.', followUps: ['¿Y la cafetería? (And the café?)', '¿Las fotos están permitidas? (Are photos allowed?)'], phrases: ['Sí, ya [[está abierta|blue]].', 'Lo siento, el ascensor [[está estropeado|blue]].', 'Las fotos [[están permitidas|blue]], pero sin flash.'], hint: 'Todas son preguntas por el estado ahora: está / están + participio.', example: 'Sí, la sala 4 ya está abierta. Lo siento, el ascensor está estropeado: la escalera está a la derecha. Las fotos están permitidas, pero sin flash.', next: 'Ahora, una noticia de tu barrio.' },
            { q: 'Lees en el periódico: «El mercado fue cerrado ayer por el ayuntamiento». Cuéntaselo a tu vecina con tus palabras. · Tell your neighbour this news item in your own words.', followUps: ['¿Por qué lo cerraron? (Why did they close it?)', '¿Hasta cuándo va a estar cerrado? (Until when will it be closed?)'], phrases: ['Ayer el ayuntamiento [[cerró|neutral]] el mercado.', 'Ahora [[está cerrado|blue]] por…', 'Va a [[estar cerrado|blue]] hasta…'], hint: 'La noticia usa ser + participio. Para tu vecina: la activa (el ayuntamiento cerró…) y el estado con estar (ahora está cerrado).', example: '¿Sabes que ayer el ayuntamiento cerró el mercado? Ahora está cerrado por obras y va a estar cerrado hasta junio.', teacher: 'Tú reaccionas como la vecina: «¿Y dónde compramos ahora?». Tu alumno sigue la conversación.' },
            { q: 'Son las nueve de la noche. Eres Nuria y cierras el museo. Antes de salir, revisas todo. ¿Cómo está cada cosa? · You are closing the museum. Check that everything is in order.', followUps: ['¿Las ventanas están cerradas? (Are the windows closed?)', '¿La alarma está puesta? (Is the alarm on?)'], phrases: ['Las luces [[están apagadas|blue]].', 'Las puertas [[están cerradas|blue]] con llave.', 'La alarma [[está puesta|blue]].'], hint: 'Estados con estar + participio, con concordancia: las luces apagadas, la alarma puesta.', example: 'Las luces están apagadas, las ventanas están cerradas y la puerta principal está cerrada con llave. La alarma está puesta. ¡Todo listo!', teacher: 'Tú preguntas por cosas concretas («¿Y el ordenador de la taquilla?») y tu alumno responde con estar + participio.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Raúl y te pregunta por un lugar de tu ciudad («¿Cómo está ahora? ¿Cuándo se construyó?») y tú respondes.', self: 'Ahora tú eres Raúl: haz las preguntas en voz alta («¿Cómo está ahora?», «¿Cuándo se construyó?») y responde tú. (Now you are Raúl: ask and answer.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una visita recomendada', coach: 'La historia y el estado actual. The history and the current state.',
      steps: [
        { title: 'Un correo a una amiga · An email to a friend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada participio: ¿es una acción (ser) o un estado (estar)? ¿Concuerda con su sujeto? Después, tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada participio: ¿acción o estado? ¿Concuerda? (Check every participle: action or state? Does it agree?)' } },
          { kind: 'write', title: 'Te recomiendo una visita · I recommend a visit', situation: 'Una amiga, Carla, viene a tu ciudad (o a Valdemora) el sábado y te pregunta qué puede visitar. Escríbele un correo para recomendarle un lugar con historia: cuenta un poco qué pasó allí y, sobre todo, cómo está ahora y qué tiene que saber antes de ir. (A friend is visiting on Saturday. Recommend a place with a history: tell her briefly what happened there and, above all, what state it is in now and what she needs to know.)', task: [
            'Saluda y di qué lugar le recomiendas. (Say hello and name the place.)',
            'Cuenta dos datos de su historia: puedes copiar una frase de la placa con fue + participio o usar «se construyó» / la activa. (Two facts from its history.)',
            'Describe cómo está ahora con tres frases de estar + participio, con la concordancia correcta. (Three sentences with estar + participle.)',
            'Da un aviso práctico: algo que está cerrado, estropeado o reservado. (A practical warning.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['¡Hola, Carla!', 'Te recomiendo…', 'En la placa pone que fue construido/a en…', 'Se construyó en… / Lo construyó…', 'Ahora está…', 'Las salas están…', 'Eso sí, … está cerrado/a', 'Un abrazo,'],
            words: ['está restaurado/a', 'están abiertas', 'está cerrado/a', 'está estropeado', 'estuvo cerrado', 'estaba abandonado', 'fue construido/a', 'se construyó', 'por obras', 'ahora', 'ya', 'todavía'],
            model: '¡Hola, Carla! Te recomiendo el nuevo Museo de la Ciudad, en la antigua estación de tren. En la placa de la entrada pone que la estación [[fue construida|orange]] en 1890. Los últimos trenes pasaron en 1985 y el edificio [[estuvo cerrado|blue]] casi cuarenta años: cuando yo era pequeña, [[estaba abandonado|blue]]. Ahora [[está restaurado|blue]] del todo y es precioso. Las cuatro salas [[están abiertas|blue]] de diez a ocho y la entrada es gratis este mes. No te pierdas el mural del vestíbulo: lo pintó una pintora de aquí en 1950. Eso sí, el ascensor [[está estropeado|blue]] y la plaza de la estación todavía [[está cerrada|blue]] por obras, así que ve a pie o en autobús. ¡Ya me contarás! Un abrazo, Sara.',
            minWords: 80,
            checks: [
              { label: 'Estar + participio para el estado (estar + participle for the state)', pattern: '(?<!\\p{L})(?:está|están|estaba|estaban|estuvo|estuvieron)\\s+(?:\\p{L}+(?:ad|id)[oa]s?|abiert[oa]s?|cubiert[oa]s?|rot[oa]s?|puest[oa]s?|hech[oa]s?|escrit[oa]s?|impres[oa]s?)(?!\\p{L})', tip: 'Describe cómo está el lugar: «Ahora está restaurado», «Las salas están abiertas».' },
              { label: 'Un aviso con cerrado, estropeado o reservado (a practical warning)', pattern: '(?<!\\p{L})(?:cerrad|estropead|reservad|ocupad|prohibid)[oa]s?(?!\\p{L})', tip: 'Avisa a tu amiga: «La plaza está cerrada por obras», «El ascensor está estropeado».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:está|están|estaba|estaban)\\s+\\p{L}+(?:ad|id)[oa]s?\\s+en\\s+(?:el\\s+año\\s+)?\\d{4}(?!\\d)', why: 'Con una fecha hablas de la acción: «**fue construida en 1890**», o en conversación «se construyó en 1890».' },
              { pattern: '(?<!\\p{L})(?:es|son)\\s+(?:cerrad|abiert)[oa]s?(?!\\p{L})', why: 'Si describes si un lugar está abierto o cerrado ahora, usa estar: **está cerrado**, **están abiertas**.' },
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
            { tone: 'orange', label: 'SER + PARTICIPIO · ACCIÓN', formula: 'fue / fueron + participio (+ en 1890, + por + agente)', example: 'La estación fue construida en 1890 por Ramón Gil.', caption: 'lo que pasó; típico de noticias, placas y libros de historia', en: 'what happened; typical of news, plaques and history books' },
            { tone: 'blue', label: 'ESTAR + PARTICIPIO · ESTADO', formula: 'está / estaba / estuvo + participio', example: 'Ahora está restaurada. Estuvo cerrada cuarenta años.', caption: 'cómo está o estaba algo: el resultado', en: 'how something is or was: the result' },
            { tone: 'teal', label: 'PISTAS', formula: 'fecha, por + agente → ser · ahora, ya, cuando llegué → estar', example: 'La puerta fue abierta a las seis. / A las seis y uno ya estaba abierta.', caption: 'mismo participio, otro significado', en: 'same participle, different meaning' },
            { tone: 'neutral', label: 'EN LA CONVERSACIÓN', formula: 'se construyó · la construyó Ramón Gil', example: 'Se construyó en 1890. La construyó un ingeniero de aquí.', caption: 'hablando, más frecuente que ser + participio', en: 'in speech, more common than ser + participle' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿cuento **qué pasó** o describo **cómo está**? Acción, con fecha o con «por» + agente: **ser** («fue construida en 1890»). Resultado, ahora o en un momento del pasado: **estar** («está restaurada», «estaba abierta»). En los dos casos el participio concuerda. Y hablando, para la acción, prefiere «se construyó» o la activa.', en: 'Ask yourself: am I telling what happened, or describing how something is? An action, with a date or “por” + agent: ser (“fue construida en 1890”). The result, now or at a past moment: estar (“está restaurada”, “estaba abierta”). In both cases the participle agrees. And in speech, for the action, prefer “se construyó” or the active.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Este castillo ___ en el siglo XII.', options: ['fue construido', 'es construido', 'está construido'], answer: 0, why: 'Fecha de la acción: fue construido.', en: 'This castle was built in the 12th century.' },
            { prompt: 'No podemos pasar por aquí: la calle ___ por obras.', options: ['es cortada', 'está cortada', 'fue cortada'], answer: 1, why: 'Cómo está la calle ahora: está cortada (closed off).', en: 'We can’t get through here: the street is closed for works.' },
            { prompt: 'Cuando llegó la policía, la ventana ya ___.', options: ['está rota', 'estaba rota', 'fue rota'], answer: 1, why: 'Cómo estaba la ventana en ese momento: estaba rota.', en: 'When the police arrived, the window was already broken.' },
            { prompt: 'Las nuevas bibliotecas ___ ayer por la ministra.', options: ['fueron inaugurado', 'fueron inauguradas', 'están inauguradas'], answer: 1, why: 'Ayer + agente con «por»: acción. Y concordancia en plural femenino: fueron inauguradas.', en: 'The new libraries were opened yesterday by the minister.' },
            { prompt: 'El teatro ___ dos años por reformas y ahora está otra vez abierto.', options: ['estuvo cerrado', 'está cerrado', 'fue cerrado'], answer: 0, why: 'Un estado que duró dos años y terminó: estuvo cerrado.', en: 'The theatre was closed for two years for refurbishment and now it is open again.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una biblioteca.', blocks: [
          { kind: 'lead', text: 'En el pueblo de al lado, la biblioteca vieja también tiene una placa. Tu amiga no entiende las frases «de libro». Explícale cada una con palabras de conversación o con el estado de ahora.', en: 'In the next village, the old library also has a plaque. Your friend does not understand the “bookish” sentences. Explain each one in conversational words or with the state it is in now.' },
          { kind: 'rewrite', title: 'La placa de la biblioteca · The library plaque', items: [
            { prompt: 'La biblioteca fue fundada en 1921.', instruction: 'Dilo con «se» en indefinido. Empieza con «La biblioteca».', accept: ['La biblioteca se fundó en 1921'] },
            { prompt: 'La biblioteca fue renovada en 2022. (→ ¿cómo está ahora?)', instruction: 'Describe el resultado con estar. Empieza con «Ahora la biblioteca».', accept: ['Ahora la biblioteca está renovada'] },
            { prompt: 'Los libros antiguos fueron donados por una familia del pueblo.', instruction: 'Dilo con la activa en indefinido. Empieza con «Una familia».', accept: ['Una familia del pueblo donó los libros antiguos', 'Una familia del pueblo los donó'] },
          ] },
        ] },
        { title: 'Ampliación: otros tiempos y el registro · Extension: other tenses and register', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: más textos reales. Optional: more real texts.', blocks: [
          { kind: 'lead', text: 'En las noticias, ser + participio no aparece solo en indefinido. Vas a leer **ha sido restaurado** (perfecto: una acción reciente), **será inaugurada** (futuro: una acción que va a pasar) y **es visitado** (presente: algo habitual). Solo tienes que **entenderlos**. Una nota más: algunos adjetivos cambian de significado con ser y estar (**ser listo** = clever / **estar listo** = ready; también malo, rico, aburrido): los verás en la clase 237.', en: 'In the news, ser + participle does not only appear in the indefinido. You will read “ha sido restaurado” (present perfect: a recent action), “será inaugurada” (future: an action that will happen) and “es visitado” (present: something habitual). You only need to understand them. One more note: some adjectives change meaning with ser and estar (ser listo = clever / estar listo = ready; also malo, rico, aburrido): you will see them in class 237.' },
          { kind: 'choice', title: 'Lee la noticia · Read the news', items: [
            { prompt: '«La nueva sala será inaugurada el próximo lunes». ¿Qué significa?', options: ['La sala va a abrir el lunes, con un acto oficial.', 'La sala estuvo cerrada el lunes.', 'La sala ya está abierta.'], answer: 0, why: '«Será inaugurada»: ser en futuro + participio, una acción que todavía no ha pasado.', en: '“La nueva sala será inaugurada el próximo lunes.” What does it mean?' },
            { prompt: '«El museo es visitado por miles de turistas cada verano». ¿Qué significa?', options: ['Los turistas visitaron el museo una vez.', 'Muchos turistas visitan el museo todos los veranos.', 'El museo está lleno de turistas ahora mismo.'], answer: 1, why: '«Es visitado» + «cada verano»: una acción habitual, en presente. Hablando: «Lo visitan miles de turistas».', en: '“El museo es visitado por miles de turistas cada verano.” What does it mean?' },
            { prompt: 'Para un mensaje a tu hermano, ¿qué versión es más natural?', options: ['«El reloj fue reparado por un técnico».', '«Ya han arreglado el reloj y funciona».', '«El reloj ha sido reparado por un técnico».'], answer: 1, why: 'En un mensaje personal, la activa y el estado son lo natural. Las otras dos son correctas, pero suenan a noticia.', en: 'For a message to your brother, which version is more natural?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno busca una noticia breve de su ciudad, encuentra una frase con ser + participio y la cuenta como en una conversación.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Extensión: Clase 237 · Ser y estar con adjetivos que cambian de significado', text: 'Antes de seguir, una clase de extensión sobre otra cara de *ser* y *estar*: adjetivos que cambian de significado según el verbo. No es lo mismo «Ana **es lista**» que «Ana **está lista**», ni «El pastel **es rico**» que «El pastel **está rico**».', en: 'Before moving on, an extension class on another side of ser and estar: adjectives whose meaning changes with the verb. “Ana es lista” (she is clever) is not the same as “Ana está lista” (she is ready).', href: '/gramatica/ser-y-estar-con-adjetivos-que-cambian-de-significado', label: 'Ir a la clase 237' },
          { kind: 'link', title: 'Siguiente: Clase 122 · Orden de pronombres y clíticos más complejo', text: 'Hoy has visto que, hablando, la activa suele sonar más natural que la pasiva: «**La** construyó Ramón Gil», «**Lo** pintó Elena Ruiz». En esas frases los pronombres hacen mucho trabajo. En la clase 122 los combinas y los colocas bien: «Te **lo** explico», «Ya **se lo** he dicho», «Quiero enseñár**selo**». Es el paso natural para contar lo que pasó con frases ágiles de conversación.', en: 'Today you saw that, in speech, the active usually sounds more natural than the passive: “La construyó Ramón Gil”, “Lo pintó Elena Ruiz”. Pronouns do a lot of work in those sentences. In class 122 you combine them and put them in the right place: “Te lo explico”, “Ya se lo he dicho”, “Quiero enseñárselo”. It is the natural next step to tell what happened with smooth, conversational sentences.', href: '/gramatica/orden-de-pronombres-y-cliticos-mas', label: 'Ir a la clase 122' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué lugar de tu ciudad está cerrado o en obras ahora? ¿Qué pasó?». Respuesta esperada: una frase de estado con estar y una de acción en conversación (lo cerraron, se cerró). Tarea: escribir el correo de Escribir sobre un lugar real.' },
        ] },
      ],
    },
  ],
};
