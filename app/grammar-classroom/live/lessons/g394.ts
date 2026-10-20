import type { LiveLesson } from '../types';

/**
 * Lesson 394 · B1 · Duda, posibilidad y certeza en enunciados (course unit G094).
 * Builds on G088 (present subjunctive forms), G091 (es verdad / está claro /
 * es evidente que + indicative) and G093 (creo que / no creo que). Content: a
 * scale from certainty to doubt. Certainty + indicative (seguro que, estoy
 * seguro/a de que, es evidente que, está claro que); a lo mejor + indicative
 * only; quizás / quizá / tal vez / probablemente / posiblemente + indicative or
 * subjunctive when they come before the verb (both correct; the subjunctive
 * usually sounds more doubtful; no rigid rule), indicative when the adverb
 * comes after the verb; es posible / es probable que, puede (ser) que + subjunctive;
 * dudo que, no estoy seguro/a de que, no es seguro que + subjunctive.
 * Ampliación: seguramente (= probably, not «surely»), lo más probable es que,
 * colloquial igual (= a lo mejor), and one line of recognition of the future of
 * probability (estará en el tren), which is taught in B2 (G161).
 * Scene: the open-air book fair in the Plaza Mayor of a town, next Sunday.
 * Irene Salas, the organiser, talks to Rodrigo Peña, a new volunteer (tú). In
 * the voice message Irene (Mexican voice, ustedes) briefs all the volunteers.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 394,
  level: 'B1',
  title: 'Duda, posibilidad y certeza en enunciados',
  subtitle: 'Graduar la certeza, de «seguro que llueve» a «dudo que llueva», con a lo mejor, quizás y es posible que.',
  legend: [
    { tone: 'orange', label: 'CERTEZA · seguro que / estoy seguro de que + indicativo (you are sure)' },
    { tone: 'blue', label: 'A LO MEJOR + indicativo (maybe: always indicative)' },
    { tone: 'violet', label: 'QUIZÁS / TAL VEZ / PROBABLEMENTE + indicativo o subjuntivo (both are correct)' },
    { tone: 'teal', label: 'POSIBILIDAD Y DUDA · es posible que / puede que / dudo que + subjuntivo' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Seguro o solo posible?', coach: '¿Lo sabes o lo imaginas? Do you know it or are you guessing?',
      steps: [
        { title: 'Un domingo con nubes · A cloudy Sunday', blocks: [
          { kind: 'lead', text: 'Irene Salas organiza la Feria del Libro de la Plaza Mayor, el domingo. Rodrigo Peña es voluntario por primera vez y tiene muchas preguntas: ¿llueve?, ¿viene la autora invitada?, ¿cuánta gente va a venir? Irene no lo sabe todo. A veces está segura: «**Seguro que hace** sol por la mañana». A veces solo ve una posibilidad: «**Es posible que llueva** por la tarde». Hoy aprendes a decir si estás seguro o no, y qué modo va con cada expresión.', en: 'Irene Salas organises the Book Fair in the main square on Sunday. Rodrigo Peña is volunteering for the first time and has lots of questions: will it rain? Is the guest author coming? How many people will come? Irene doesn’t know everything. Sometimes she is sure: “It’ll definitely be sunny in the morning.” Sometimes she only sees a possibility: “It may rain in the afternoon.” Today you learn to say how sure you are and which mood goes with each expression.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Irene y tu alumno repite. Después tu alumno dice en cuál Irene está segura y en cuál solo ve una posibilidad.', self: 'Lee las dos frases en voz alta. ¿En cuál Irene está segura? ¿En cuál solo ve una posibilidad? (Which one is certain, which one is only possible?)' } },
          { kind: 'compare', title: 'Dos frases de Irene · Two sentences from Irene', columns: [
            { tone: 'orange', label: 'CERTEZA + indicativo', sentence: '[[Seguro que hace|orange]] sol por la mañana.', idea: 'Irene lo presenta como un hecho: está segura. Por eso, indicativo: hace.', en: 'It’ll definitely be sunny in the morning. (she is sure)' },
            { tone: 'teal', label: 'POSIBILIDAD + subjuntivo', sentence: '[[Es posible que llueva|teal]] por la tarde.', idea: 'Irene no afirma nada: solo ve una posibilidad. Después de «es posible que», subjuntivo: llueva.', en: 'It may rain in the afternoon. (only a possibility)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Seguro que hace sol», Irene…', options: ['pregunta por el tiempo.', 'está segura de que hace sol.', 'duda mucho.'], answer: 1, why: '«Seguro que» presenta algo como cierto. Por eso el verbo va en indicativo: hace.', en: 'In “Seguro que hace sol”, Irene…' },
            { prompt: 'En «Es posible que llueva», el verbo «llueva» está en…', options: ['indicativo.', 'subjuntivo, porque es solo una posibilidad.', 'infinitivo.'], answer: 1, why: '«Es posible que» no afirma: presenta una posibilidad. Por eso, subjuntivo: llueva (llover → llueve → llueva).', en: 'In “Es posible que llueva”, the verb “llueva” is in…' },
          ] },
        ] },
        { title: 'Seguro y a lo mejor: indicativo · Sure and maybe: indicative', mascot: '/brand/mascot/studying.webp', coach: 'Seguro que, a lo mejor: indicativo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CERTEZA + QUE + INDICATIVO', question: '¿Estás seguro? ¿Es evidente?', en: 'Are you sure? Is it obvious?', formula: ['seguro que + indicativo', 'estoy seguro / segura de que + indicativo', 'es evidente / está claro + que + indicativo'],
            meaning: 'Con estas expresiones presentas algo como **cierto**. El verbo va en **indicativo**, como en una frase normal. «Seguro que» es muy frecuente en la conversación: también sirve para una suposición fuerte («Seguro que Pilar ya lo sabe» = I bet Pilar already knows).',
            examples: [
              { es: '[[Seguro que Pilar trae|orange]] los libros infantiles.', en: 'I’m sure Pilar is bringing the children’s books.' },
              { es: '[[Estoy segura de que la feria va|orange]] a ser un éxito este año.', en: 'I’m sure the fair is going to be a success this year.' },
              { es: '[[Está claro que la plaza es|orange]] pequeña para tantas carpas.', en: 'Clearly the square is small for so many tents.' },
            ],
            note: 'Ojo a la preposición: **estar seguro de algo** → «estoy seguro **de que**…». En la conversación de muchas zonas se oye «estoy seguro que», pero en un texto cuidado escribe «de que».' },
          { kind: 'concept', tone: 'blue', label: 'A LO MEJOR + INDICATIVO', question: '¿Es una posibilidad, en la conversación?', en: 'Is it a possibility, in everyday conversation?', formula: ['a lo mejor + indicativo', 'nunca: a lo mejor + subjuntivo'],
            meaning: '**A lo mejor** significa «quizás» (maybe), pero tiene una regla fija: siempre va con **indicativo**. Es muy frecuente en la conversación, en España y en América.',
            examples: [
              { es: '[[A lo mejor montamos|blue]] las carpas el sábado.', en: 'Maybe we’ll put the tents up on Saturday.' },
              { es: '[[A lo mejor Mateo no puede|blue]] venir por la mañana.', en: 'Maybe Mateo can’t come in the morning.' },
            ] },
          { kind: 'table', title: 'La escala · The scale (de más seguro a menos seguro)', head: ['Seguridad', 'Expresión', 'Modo', 'Ejemplo'], rows: [
            ['100 % (sure)', 'seguro que · estoy seguro de que · está claro que', 'indicativo', '[[Seguro que viene|orange]].'],
            ['80 % (I think so)', 'creo que (clase 093)', 'indicativo', 'Creo que viene.'],
            ['50 % (maybe)', 'a lo mejor', 'indicativo', '[[A lo mejor viene|blue]].'],
            ['50 % (maybe)', 'quizás · tal vez · probablemente', 'indicativo o subjuntivo', '[[Quizás viene|violet]]. / [[Quizás venga|violet]].'],
            ['50 % o menos (it may)', 'es posible que · es probable que · puede que', 'subjuntivo', '[[Puede que venga|teal]].'],
            ['20 % (I doubt it)', 'dudo que · no estoy seguro de que · no creo que', 'subjuntivo', '[[Dudo que venga|teal]].'],
          ], note: 'Los porcentajes son orientativos: lo importante es la dirección, de la certeza a la duda. «Probable» está un poco más arriba que «posible».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A lo mejor Elena ___ en el tren de las ocho.', options: ['venga', 'venir', 'viene'], answer: 2, why: '«A lo mejor» va siempre con indicativo: viene.', en: 'Maybe Elena is coming on the eight o’clock train.' },
            { prompt: 'Estoy seguro de que los niños ___ el cuentacuentos.', options: ['disfrutan', 'disfrutar', 'disfruten'], answer: 0, why: '«Estoy seguro de que» presenta algo como cierto: indicativo, disfrutan.', en: 'I’m sure the children enjoy the storytelling.' },
          ] },
        ] },
        { title: 'Posibilidad y duda: que + subjuntivo · Possibility and doubt: que + subjunctive', mascot: '/brand/mascot/standing.webp', coach: 'Posible, probable, dudo: subjuntivo.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'POSIBILIDAD Y DUDA + QUE + SUBJUNTIVO', question: '¿Es solo posible? ¿Lo dudas?', en: 'Is it only possible? Do you doubt it?', formula: ['es posible / es probable + que + subjuntivo', 'puede que / puede ser que + subjuntivo', 'dudo que · no estoy seguro de que · no es seguro que + subjuntivo'],
            meaning: 'Aquí no afirmas: presentas algo como **posible**, **probable** o **dudoso**. El verbo después de «que» va en **presente de subjuntivo** (las formas de la clase 088). Es la misma lógica que «no creo que venga» (clase 093): sin certeza, subjuntivo.',
            examples: [
              { es: '[[Es probable que vengan|teal]] más de quinientas personas.', en: 'More than five hundred people will probably come.' },
              { es: '[[Puede que Elena llegue|teal]] un poco tarde.', en: 'Elena may arrive a bit late.' },
              { es: '[[Dudo que el ayuntamiento nos dé|teal]] más carpas.', en: 'I doubt the town hall will give us more tents.' },
              { es: '[[No estoy segura de que el micrófono funcione|teal]].', en: 'I’m not sure the microphone works.' },
            ],
            note: '**Puede que** y **puede ser que** significan lo mismo que «es posible que». Son muy frecuentes en la conversación.' },
          { kind: 'table', title: 'Seguro o no seguro · Sure or not sure', head: ['CERTEZA (indicativo)', 'SIN CERTEZA (subjuntivo)'], rows: [
            ['[[Estoy segura de que viene|orange]]. (I’m sure she’s coming.)', '[[No estoy segura de que venga|teal]]. (I’m not sure she’s coming.)'],
            ['[[Está claro que llueve|orange]]. (It’s clearly raining.)', '[[No está claro que llueva|teal]]. (It isn’t clear it will rain.)'],
            ['[[Seguro que hay|orange]] sitio. (There’s bound to be room.)', '[[Es posible que no haya|teal]] sitio. (There may be no room.)'],
          ], note: 'Con «no» delante, la certeza se convierte en duda, y el verbo pasa a subjuntivo, como en «no creo que».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es probable que el domingo ___ mucha gente.', options: ['hay', 'haya', 'haber'], answer: 1, why: '«Es probable que» presenta una probabilidad, no un hecho: subjuntivo, haya.', en: 'There will probably be a lot of people on Sunday.' },
            { prompt: 'Dudo que Rodrigo ___ montar una carpa solo.', options: ['pueda', 'puede', 'poder'], answer: 0, why: '«Dudo que» expresa duda: subjuntivo, pueda.', en: 'I doubt Rodrigo can put up a tent on his own.' },
            { prompt: 'Puede que ___ que cambiar el programa.', options: ['tengamos', 'tenemos', 'tener'], answer: 0, why: '«Puede que» = es posible que: subjuntivo, tengamos (tengo → teng- → tengamos).', en: 'We may have to change the programme.' },
          ] },
        ] },
        { title: 'Quizás, tal vez, probablemente · Perhaps, maybe, probably', mascot: '/brand/mascot/speaking.webp', coach: 'Antes del verbo: los dos modos. Before the verb: both moods.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'QUIZÁS · TAL VEZ · PROBABLEMENTE · POSIBLEMENTE', question: '¿El adverbio va antes del verbo?', en: 'Does the adverb come before the verb?', formula: ['quizás / quizá / tal vez / probablemente / posiblemente + indicativo', 'quizás / quizá / tal vez / probablemente / posiblemente + subjuntivo', 'verbo + quizás… → solo indicativo'],
            meaning: 'Con estos adverbios, **las dos opciones son correctas** cuando van delante del verbo: «Quizás llueve» y «Quizás llueva». Muchas veces el subjuntivo hace sonar la duda un poco **mayor**, y el indicativo la acerca a lo que crees probable. No es una regla fija: muchos hablantes usan los dos casi igual. Pero si el adverbio va **después** del verbo, solo indicativo: «Llueve, quizás, por la tarde». **Quizás** y **quizá** son las dos correctas.',
            examples: [
              { es: '[[Quizás cambiamos|violet]] el orden de las actividades.', en: 'Maybe we’ll change the order of the activities. (a real option)' },
              { es: '[[Tal vez haga|violet]] demasiado viento para las carpas.', en: 'Perhaps it’ll be too windy for the tents. (more doubt)' },
              { es: '[[Probablemente Pilar tiene|violet]] razón.', en: 'Pilar is probably right.' },
              { es: 'Elena [[llega, probablemente|violet]], a las doce.', en: 'Elena will probably arrive at twelve. (adverb after the verb: indicative)' },
            ] },
          { kind: 'decide', title: '¿Indicativo o subjuntivo?', steps: [
            { q: '¿Estás seguro? (seguro que, estoy seguro de que, está claro que, es evidente que)', yes: 'Usa el **indicativo**: «Seguro que viene».', no: 'next' },
            { q: '¿Usas «a lo mejor»?', yes: 'Siempre **indicativo**: «A lo mejor viene».', no: 'next' },
            { q: '¿Usas quizás, tal vez, probablemente o posiblemente delante del verbo?', yes: 'Los dos modos son correctos: «Quizás viene» / «Quizás venga» (más duda). Si el adverbio va detrás del verbo, indicativo.', no: 'next' },
            { q: '¿Usas es posible que, es probable que, puede que, dudo que o no estoy seguro de que?', yes: 'Usa el **subjuntivo**: «Es posible que venga», «Dudo que venga».', no: 'Lee la frase otra vez: ¿estás seguro o no?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Quizás vienen» y «Quizás vengan»…', options: ['son correctas las dos; la segunda suena un poco más dudosa.', 'solo la primera es correcta.', 'solo la segunda es correcta.'], answer: 0, why: 'Con «quizás» delante del verbo, los dos modos son posibles. El subjuntivo suele marcar más duda.', en: '“Quizás vienen” and “Quizás vengan”…' },
            { prompt: 'Rodrigo ___, tal vez, con su hermana.', options: ['viene', 'venir', 'venga'], answer: 0, why: '«Tal vez» va después del verbo: solo indicativo, viene.', en: 'Rodrigo is coming with his sister, maybe.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Certeza, posibilidad o duda?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿certeza, posibilidad o duda? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿certeza, posibilidad o duda? Toca para ver la corrección. (Certainty, possibility or doubt?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'A lo mejor llueva el domingo.', right: 'A lo mejor llueve el domingo.', why: '«A lo mejor» va siempre con indicativo, aunque significa «quizás». (A lo mejor never takes the subjunctive.)' },
            { wrong: 'Es posible que Elena llega tarde.', right: 'Es posible que Elena llegue tarde.', why: '«Es posible que» no afirma: subjuntivo, llegue (llegar → llegue). (Possibility: subjunctive.)' },
            { wrong: 'Seguro que Pilar tenga los libros.', right: 'Seguro que Pilar tiene los libros.', why: '«Seguro que» presenta algo como cierto: indicativo, tiene. (Certainty: indicative.)' },
            { wrong: 'Dudo que el micrófono funciona.', right: 'Dudo que el micrófono funcione.', why: '«Dudo que» expresa duda: subjuntivo, funcione.' },
            { wrong: 'Venga quizás mucha gente.', right: 'Viene quizás mucha gente. / Quizás venga mucha gente.', why: 'Con el adverbio detrás del verbo, solo indicativo. El subjuntivo solo es posible con «quizás» delante.' },
            { wrong: 'No estoy segura que funcione.', right: 'No estoy segura de que funcione.', why: '«Estar seguro **de** algo»: en un texto cuidado, «de que».' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Una pregunta, un modo · One question, one mood', text: 'Pregúntate: ¿lo **afirmo** o solo lo **imagino**? Si lo afirmas (seguro que, está claro que), indicativo. Si es posible, probable o dudoso (es posible que, puede que, dudo que), subjuntivo. Dos casos especiales: **a lo mejor**, siempre indicativo; **quizás / tal vez** delante del verbo, los dos.', en: 'Ask yourself: am I stating it or only imagining it? If you state it, indicative. If it is possible, probable or doubtful, subjunctive. Two special cases: “a lo mejor” always takes the indicative; “quizás / tal vez” before the verb takes either.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es evidente que Irene ___ mucha experiencia.', options: ['tenga', 'tener', 'tiene'], answer: 2, why: '«Es evidente que» afirma: indicativo, tiene.', en: 'It’s obvious that Irene has a lot of experience.' },
            { prompt: 'No estoy seguro de que las mesas ___ en la plaza.', options: ['quepan', 'caber', 'caben'], answer: 0, why: '«No estoy seguro de que» expresa duda: subjuntivo. Caber → quepo → quepan.', en: 'I’m not sure the tables will fit in the square.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre el próximo fin de semana: una segura («Seguro que…»), una posible («A lo mejor…» o «Es posible que…») y una dudosa («Dudo que…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Dos días antes de la feria', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la plaza · In the square', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Rodrigo. Después tu alumno toca cada expresión marcada y dice: ¿certeza, posibilidad o duda? ¿Indicativo o subjuntivo?', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿certeza, posibilidad o duda? (Certainty, possibility or doubt?)' } },
          { kind: 'explore', title: '¿Y si llueve?', setting: 'Viernes por la tarde, en la Plaza Mayor. Irene, la organizadora, y Rodrigo, voluntario nuevo, revisan los planes para el domingo. Se tratan de tú. (Friday afternoon in the main square. Irene, the organiser, and Rodrigo, a new volunteer, go over the plans for Sunday.)', lines: [
            { who: 'Rodrigo', text: 'Irene, ¿has visto el pronóstico? Dicen que el domingo hay tormenta.', en: 'Irene, have you seen the forecast? They say there’s a storm on Sunday.' },
            { who: 'Irene', text: 'Sí, lo he visto. [[Es posible que llueva|teal]] por la tarde, pero por la mañana [[seguro que hace|orange]] buen tiempo.', en: 'Yes, I’ve seen it. It may rain in the afternoon, but in the morning the weather will definitely be good.' },
            { who: 'Rodrigo', text: '¿Y las carpas? ¿Cuándo las montamos?', en: 'And the tents? When do we put them up?' },
            { who: 'Irene', text: '[[A lo mejor las montamos|blue]] el sábado por la tarde. Depende del ayuntamiento: mañana te confirmo.', en: 'Maybe we’ll put them up on Saturday afternoon. It depends on the town hall: I’ll confirm tomorrow.' },
            { who: 'Rodrigo', text: 'Vale. ¿Y Elena Mora? ¿Viene seguro?', en: 'OK. And Elena Mora? Is she definitely coming?' },
            { who: 'Irene', text: '[[Estoy segura de que viene|orange]], pero viene en tren y hay obras en la vía. [[Puede que llegue|teal]] un poco tarde.', en: 'I’m sure she’s coming, but she’s coming by train and there are works on the line. She may arrive a bit late.' },
            { who: 'Rodrigo', text: 'Entonces [[quizás tengamos|violet]] que cambiar el orden de las actividades, ¿no?', en: 'Then maybe we’ll have to change the order of the activities, right?' },
            { who: 'Irene', text: 'Sí. [[Tal vez empezamos|violet]] con el cuentacuentos para niños, y después, la presentación de Elena.', en: 'Yes. Maybe we start with the children’s storytelling, and then Elena’s book presentation.' },
            { who: 'Rodrigo', text: '¿Y cuánta gente esperas? ¿Mil personas?', en: 'And how many people are you expecting? A thousand?' },
            { who: 'Irene', text: 'Uf, [[dudo que vengan|teal]] mil. El año pasado vinieron unas cuatrocientas. Pero [[es probable que este año sean|teal]] más: hay más librerías.', en: 'Phew, I doubt a thousand will come. Last year about four hundred came. But there will probably be more this year: there are more bookshops.' },
            { who: 'Rodrigo', text: 'Otra cosa: Pilar dice que el micrófono no funciona bien.', en: 'Another thing: Pilar says the microphone doesn’t work properly.' },
            { who: 'Irene', text: '[[Probablemente Pilar tiene|violet]] razón: es viejo. Lo pruebo mañana. Bueno, [[está claro que va|orange]] a ser un domingo largo.', en: 'Pilar is probably right: it’s old. I’ll test it tomorrow. Well, it’s clearly going to be a long Sunday.' },
          ], notes: {
            'Es posible que llueva': 'Posibilidad: **es posible que** + subjuntivo. Llover → llueve → llueva.',
            'seguro que hace': 'Certeza: **seguro que** + indicativo. Irene presenta el buen tiempo como un hecho.',
            'A lo mejor las montamos': '**A lo mejor** = quizás, pero siempre con indicativo: montamos. El presente sirve aquí para el futuro.',
            'Estoy segura de que viene': 'Certeza: **estar seguro/a de que** + indicativo. Irene es mujer: segura. Y no olvides el «de».',
            'Puede que llegue': '**Puede que** = es posible que: subjuntivo. Llegar → llegue (g → gu delante de e).',
            'quizás tengamos': '**Quizás** delante del verbo: aquí con subjuntivo (tengamos), con bastante duda. «Quizás tenemos» también es correcto.',
            'Tal vez empezamos': '**Tal vez** con indicativo: Irene ve esta opción como bastante real. «Tal vez empecemos» también es correcto, con un poco más de duda.',
            'dudo que vengan': 'Duda: **dudo que** + subjuntivo. Venir → vengo → vengan.',
            'es probable que este año sean': 'Probabilidad: **es probable que** + subjuntivo. Ser → sean (irregular).',
            'Probablemente Pilar tiene': '**Probablemente** delante del verbo, con indicativo: Irene cree que Pilar tiene razón. «Probablemente Pilar tenga razón» también es correcto.',
            'está claro que va': 'Certeza: **está claro que** + indicativo (clase 091). Va a ser: ir a + infinitivo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué tiempo espera Irene el domingo?', options: ['Buen tiempo por la mañana y posible lluvia por la tarde.', 'Sol todo el día, seguro.', 'Lluvia todo el día.'], answer: 0, why: '«Es posible que llueva por la tarde, pero por la mañana seguro que hace buen tiempo».', en: 'What weather does Irene expect on Sunday?' },
            { prompt: '¿Por qué puede llegar tarde Elena Mora?', options: ['Porque hay obras en la vía del tren.', 'Porque no quiere venir.', 'Porque viene en coche.'], answer: 0, why: '«Viene en tren y hay obras en la vía. Puede que llegue un poco tarde».', en: 'Why might Elena Mora arrive late?' },
            { prompt: '¿Cuánta gente cree Irene que va a venir?', options: ['Probablemente más de cuatrocientas, pero no mil.', 'Mil personas, seguro.', 'Menos que el año pasado.'], answer: 0, why: '«Dudo que vengan mil… es probable que este año sean más» (más de las cuatrocientas del año pasado).', en: 'How many people does Irene think will come?' },
          ] },
        ] },
        { title: '¿Está segura Irene? · How sure is Irene?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las frases de Irene · Irene’s sentences', categories: [
            { id: 'cierto', label: 'CERTEZA · indicativo', tone: 'orange' },
            { id: 'quizas', label: 'QUIZÁS / A LO MEJOR · posibilidad con adverbio', tone: 'violet' },
            { id: 'duda', label: 'POSIBLE / DUDOSO · que + subjuntivo', tone: 'teal' },
          ], items: [
            { text: 'Por la mañana seguro que hace buen tiempo.', answer: 'cierto', why: '«Seguro que» + indicativo: Irene está segura.' },
            { text: 'Puede que Elena llegue un poco tarde.', answer: 'duda', why: '«Puede que» + subjuntivo: solo es una posibilidad.' },
            { text: 'A lo mejor montamos las carpas el sábado.', answer: 'quizas', why: '«A lo mejor»: posibilidad, siempre con indicativo.' },
            { text: 'Dudo que vengan mil personas.', answer: 'duda', why: '«Dudo que» + subjuntivo: Irene no lo cree.' },
            { text: 'Tal vez empezamos con el cuentacuentos.', answer: 'quizas', why: '«Tal vez» delante del verbo: aquí con indicativo, pero el subjuntivo también es posible.' },
            { text: 'Está claro que va a ser un domingo largo.', answer: 'cierto', why: '«Está claro que» + indicativo: certeza.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué es seguro sobre la feria? ¿Qué es solo posible?». Tu alumno responde con una certeza y una posibilidad, sin mirar el diálogo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Seguro: indicativo. Posible o dudoso: subjuntivo.',
      steps: [
        { title: 'Preparativos · Preparations', blocks: [
          { kind: 'choice', items: [
            { context: 'Rodrigo mira el cielo el sábado. (Rodrigo looks at the sky on Saturday.)', prompt: 'Mira esas nubes: es posible que ___ esta noche.', options: ['llover', 'llueve', 'llueva'], answer: 2, why: '«Es posible que» presenta una posibilidad: subjuntivo, llueva.', en: 'Look at those clouds: it may rain tonight.' },
            { context: 'Irene habla de Pilar, la librera. (Irene talks about Pilar, the bookseller.)', prompt: 'Pilar es muy organizada. Seguro que ya ___ todo preparado.', options: ['tenga', 'tener', 'tiene'], answer: 2, why: '«Seguro que» presenta algo como cierto: indicativo, tiene.', en: 'Pilar is very organised. I bet she already has everything ready.' },
            { context: 'Nadie encuentra a Mateo. (Nobody can find Mateo.)', prompt: 'No sé dónde está Mateo. A lo mejor ___ en la biblioteca.', options: ['está', 'esté', 'estar'], answer: 0, why: '«A lo mejor» va siempre con indicativo: está.', en: 'I don’t know where Mateo is. Maybe he’s at the library.' },
            { context: 'Irene piensa en el cuentacuentos. (Irene thinks about the storytelling.)', prompt: 'Dudo que los niños ___ quietos dos horas.', options: ['están', 'estar', 'estén'], answer: 2, why: '«Dudo que» expresa duda: subjuntivo, estén.', en: 'I doubt the children will sit still for two hours.' },
            { context: 'Rodrigo explica el horario. (Rodrigo explains the schedule.)', prompt: 'Elena ___ tarde, probablemente, por las obras.', options: ['llegue', 'llegar', 'llega'], answer: 2, why: '«Probablemente» va detrás del verbo: solo indicativo, llega.', en: 'Elena will probably arrive late, because of the works.' },
          ] },
        ] },
        { title: '¿Qué modo va? · Which mood?', blocks: [
          { kind: 'classify', title: 'Decide el modo · Decide the mood', categories: [
            { id: 'ind', label: 'SOLO INDICATIVO', tone: 'orange' },
            { id: 'subj', label: 'SOLO SUBJUNTIVO', tone: 'teal' },
            { id: 'dos', label: 'LOS DOS SON CORRECTOS', tone: 'violet' },
          ], items: [
            { text: 'Estoy segura de que Mateo ___ el concurso de dibujo. (ganar)', answer: 'ind', why: 'Certeza: gana.' },
            { text: 'Puede ser que ___ sillas para el público. (faltar)', answer: 'subj', why: '«Puede ser que» = es posible que: falten.' },
            { text: 'Tal vez ___ más voluntarios. (necesitar, nosotros)', answer: 'dos', why: '«Tal vez» delante del verbo: necesitamos o necesitemos (más duda).' },
            { text: 'A lo mejor ___ la radio local. (venir)', answer: 'ind', why: '«A lo mejor» + indicativo siempre: viene.' },
            { text: 'No estoy seguro de que la carpa ___ el viento. (resistir)', answer: 'subj', why: 'Duda: resista.' },
            { text: 'Quizás ___ una hora antes. (abrir, nosotros)', answer: 'dos', why: '«Quizás» delante del verbo: abrimos o abramos.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'A lo mejor Elena traiga a su editor.', ok: false, options: ['A lo mejor Elena traer a su editor.', 'A lo mejor Elena trae a su editor.', 'A lo mejor que Elena traiga a su editor.'], answer: 1, why: '«A lo mejor» va siempre con indicativo: trae. Y sin «que».' },
            { sentence: 'Es probable que el ayuntamiento nos da permiso.', ok: false, options: ['Es probable que el ayuntamiento darnos permiso.', 'Es probable el ayuntamiento nos da permiso.', 'Es probable que el ayuntamiento nos dé permiso.'], answer: 2, why: '«Es probable que» + subjuntivo: dé (con tilde, para distinguirlo de la preposición «de»).' },
            { sentence: 'Quizás Pilar venda todos los libros.', ok: true, why: 'Correcta: «quizás» delante del verbo admite subjuntivo. «Quizás Pilar vende todos los libros» también es correcta.' },
            { sentence: 'Seguro que los niños se diviertan mucho.', ok: false, options: ['Seguro que los niños divertirse mucho.', 'Seguro de los niños se divierten mucho.', 'Seguro que los niños se divierten mucho.'], answer: 2, why: '«Seguro que» presenta algo como cierto: indicativo, se divierten.' },
            { sentence: 'No es seguro que el micrófono funcione mañana.', ok: true, why: 'Correcta: con «no», la certeza se convierte en duda: subjuntivo, funcione.' },
          ] },
        ] },
        { title: 'El chat de voluntarios · The volunteers’ chat', blocks: [
          { kind: 'chat-fill', title: 'Sábado por la mañana, en el chat de la feria · Saturday morning, in the fair chat', lines: [
            { who: 'Mateo', text: 'Buenos días. ¿Montamos las carpas a las diez?' },
            { who: 'Irene', text: 'Sí. Y es posible que el ayuntamiento nos ___ dos carpas más.', options: ['preste', 'prestar', 'presta'], answer: 0, why: '«Es posible que» + subjuntivo: preste.' },
            { who: 'Pilar', text: '¡Genial! Yo llevo los libros infantiles. Seguro que ___ muy bien.', options: ['se venden', 'se vendan', 'venderse'], answer: 0, why: '«Seguro que» + indicativo: se venden.' },
            { who: 'Mateo', text: 'Yo no sé si puedo ir mañana por la mañana. A lo mejor ___ que trabajar.', options: ['tener', 'tengo', 'tenga'], answer: 1, why: '«A lo mejor» + indicativo: tengo.' },
            { who: 'Irene', text: 'Tranquilo, Mateo. Dudo que ___ problema: somos muchos.', options: ['haya', 'hay', 'haber'], answer: 0, why: '«Dudo que» + subjuntivo: haya (de «hay»).' },
            { who: 'Rodrigo', text: 'Yo no estoy seguro de que las cajas de libros ___ en mi coche.', options: ['caben', 'caber', 'quepan'], answer: 2, why: '«No estoy seguro de que» expresa duda: subjuntivo. Caber → quepo → quepan.' },
            { who: 'Pilar', text: 'No te preocupes, Rodrigo: yo tengo una furgoneta.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Puede', 'que', 'el', 'tren', 'llegue', 'tarde'], accept: ['Puede que el tren llegue tarde', 'Puede que llegue tarde el tren'], en: 'The train may arrive late.' },
            { tiles: ['A', 'lo', 'mejor', 'cerramos', 'antes', 'por', 'la', 'lluvia'], accept: ['A lo mejor cerramos antes por la lluvia', 'Por la lluvia a lo mejor cerramos antes', 'A lo mejor por la lluvia cerramos antes'], en: 'Maybe we’ll close early because of the rain.' },
            { tiles: ['Dudo', 'que', 'el', 'ayuntamiento', 'nos', 'dé', 'más', 'sillas'], accept: ['Dudo que el ayuntamiento nos dé más sillas'], en: 'I doubt the town hall will give us more chairs.' },
            { tiles: ['Estoy', 'segura', 'de', 'que', 'Pilar', 'trae', 'los', 'carteles'], accept: ['Estoy segura de que Pilar trae los carteles'], en: 'I’m sure Pilar is bringing the posters.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Más o menos seguro · More or less sure', items: [
            { prompt: 'Hace viento el domingo. (→ Es probable que)', instruction: 'Presenta el hecho como probable. Empieza con «Es probable que».', accept: ['Es probable que haga viento el domingo', 'Es probable que el domingo haga viento'] },
            { prompt: 'Elena firma libros después de la presentación. (→ A lo mejor)', instruction: 'Presenta el hecho como una posibilidad. Empieza con «A lo mejor».', accept: ['A lo mejor Elena firma libros después de la presentación'] },
            { prompt: 'Viene mucha gente por la tarde. (→ Dudo que)', instruction: 'Expresa tu duda. Empieza con «Dudo que».', accept: ['Dudo que venga mucha gente por la tarde', 'Dudo que por la tarde venga mucha gente'] },
            { prompt: 'Pilar tiene razón. (→ Seguro que)', instruction: 'Presenta el hecho como seguro. Empieza con «Seguro que».', accept: ['Seguro que Pilar tiene razón'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno habla de tres planes reales de su semana: uno seguro («Seguro que…»), uno posible («A lo mejor…», «Puede que…») y uno dudoso («Dudo que…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Irene', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Irene habla a los voluntarios · Irene talks to the volunteers', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada certeza (seguro que…) y da una palmada con cada posibilidad o duda (es probable que, puede que, dudo que…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Separa las certezas (seguro que…) de las posibilidades y dudas (puede que, dudo que…). Irene es mexicana y habla a todo el equipo con «ustedes». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de Irene', channel: 'MENSAJE DE VOZ · CHAT DE VOLUNTARIOS DE LA FERIA', src: '/audio/grammar-live/394.mp3',
            before: 'Es sábado por la noche. Irene manda un mensaje de voz a todos los voluntarios sobre el domingo. ¿Qué crees que dice: el tiempo, la autora, la hora…? (Irene sends a voice message to all the volunteers. What do you think she says?)',
            gist: { prompt: '¿Para qué manda Irene el mensaje?', options: ['Para cancelar la feria por la lluvia.', 'Para presentar a la autora invitada.', 'Para explicar los cambios y lo que es seguro o posible del domingo.'], answer: 2, why: 'Habla del tiempo, del tren de Elena, del sonido y de la hora: «Les dejo un mensaje rápido sobre mañana».', en: 'Why does Irene send the message?' },
            details: [
              { prompt: '¿A qué hora cierran la feria y por qué?', options: ['A las cuatro y media, porque es probable que llueva a partir de las cinco.', 'A las cinco, porque se va la autora.', 'A las ocho, porque sale el tren.'], answer: 0, why: '«Es probable que llueva a partir de las cinco, así que vamos a cerrar a las cuatro y media».', en: 'What time are they closing the fair, and why?' },
              { prompt: '¿Con qué actividad empiezan?', options: ['Con la presentación de Elena.', 'Con el cuentacuentos, a las once.', 'Con la firma de libros.'], answer: 1, why: '«Por eso empezamos con el cuentacuentos a las once».', en: 'Which activity do they start with?' },
              { prompt: '¿Qué problema hay con el sonido?', options: ['Pilar no puede venir.', 'Irene duda que el altavoz pequeño aguante (lasts) todo el día.', 'El micrófono no funciona.'], answer: 1, why: '«El micrófono ya funciona, pero dudo que el altavoz pequeño aguante todo el día».', en: 'What is the problem with the sound?' },
              { prompt: '¿A qué hora tienen que estar los voluntarios en la plaza?', options: ['A las nueve en punto.', 'A las once.', 'A las ocho y media.'], answer: 0, why: '«Necesito a todos a las nueve en punto en la plaza».', en: 'What time do the volunteers have to be in the square?' },
            ],
            transcript: 'Hola a todos, soy Irene. Les dejo un mensaje rápido sobre mañana. Primero, el tiempo: [[es probable que llueva|teal]] a partir de las cinco, así que vamos a cerrar la feria a las cuatro y media. Por la mañana [[seguro que hace|orange]] sol, así que traigan gorra. Segundo, Elena Mora viene en el tren de las ocho, pero [[puede que llegue|teal]] tarde por las obras en la vía. Por eso empezamos con el cuentacuentos a las once. [[A lo mejor Elena llega|blue]] a tiempo, pero es mejor tener un plan. Tercero, el sonido: Pilar ya probó el micrófono y funciona, pero [[dudo que el altavoz pequeño aguante|teal]] todo el día. [[Quizás alquilemos|violet]] otro más grande. Y una última cosa: [[estoy segura de que va|orange]] a venir mucha gente, así que necesito a todos a las nueve en punto en la plaza. ¡Gracias, equipo, y hasta mañana!',
            reply: { teacher: 'Tú eres Irene. Tu alumno es Rodrigo y responde al mensaje con tres frases: una certeza («Seguro que…»), una posibilidad («A lo mejor…» o «Es posible que…») y una duda («Dudo que…»).', self: 'Responde a Irene en voz alta como Rodrigo: una certeza, una posibilidad y una duda. (Answer as Rodrigo: one certainty, one possibility, one doubt.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Seguro o quizás?', coach: '¿Seguro, posible o dudoso? Say how sure you are.',
      steps: [
        { title: 'Del sí al no · From yes to no', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con su experiencia real. Cuando falla el modo, tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Usa las frases de apoyo. (Read, answer aloud, use the support phrases.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué planes tienes para el fin de semana? ¿Qué es seguro y qué es solo posible? · What are your plans for the weekend? What is certain and what is only possible?', followUps: ['¿Qué es probable que hagas el domingo? (What will you probably do on Sunday?)', '¿Qué es posible que no puedas hacer? (What might you not be able to do?)'], phrases: ['[[Seguro que|orange]] + indicativo…', '[[A lo mejor|blue]] + indicativo…', '[[Es posible que|teal]] + subjuntivo…'], hint: 'Seguro que y a lo mejor: indicativo. Es posible que: subjuntivo.', example: 'El sábado seguro que voy al mercado con mi madre. A lo mejor vamos al cine por la tarde, y es posible que el domingo visite a unos amigos.', next: 'Ahora, el tiempo.' },
            { q: '¿Qué tiempo va a hacer mañana donde vives? ¿Estás seguro? · What will the weather be like tomorrow where you live? Are you sure?', followUps: ['¿Es probable que llueva esta semana? (Is it likely to rain this week?)', '¿Qué haces si hace mal tiempo? (What do you do if the weather is bad?)'], phrases: ['[[Estoy seguro / segura de que|orange]]…', '[[Es probable que|teal]] haga / llueva…', '[[Dudo que|teal]] haga…'], hint: 'Hacer → haga; llover → llueva; nevar → nieve.', example: 'Estoy segura de que mañana hace calor, porque estamos en julio. Es probable que llueva el jueves, pero dudo que haga frío.', next: 'Ahora, el futuro.' },
            { q: '¿Cómo va a ser tu ciudad dentro de diez años? · What will your city be like in ten years?', followUps: ['¿Es posible que haya más bicicletas? (Is it possible there will be more bikes?)', '¿Qué cosas dudas que cambien? (What do you doubt will change?)'], phrases: ['[[Probablemente|violet]] hay / haya…', '[[Puede que|teal]]…', '[[Dudo que|teal]]…', '[[Está claro que|orange]]…'], hint: 'Probablemente, delante del verbo: los dos modos. Puede que y dudo que: subjuntivo.', example: 'Está claro que la ciudad va a crecer. Probablemente haya más bicicletas y puede que el centro sea peatonal. Pero dudo que los pisos sean más baratos.', next: 'Ahora, una situación.' },
            { q: 'Una amiga no llega a la cena y no contesta el teléfono. ¿Qué puede pasar? · A friend hasn’t arrived for dinner and isn’t answering her phone. What might be going on?', followUps: ['¿Qué es lo más probable? (What is most likely?)', '¿Qué explicación te parece poco probable? (Which explanation seems unlikely?)'], phrases: ['[[A lo mejor|blue]] está en el metro…', '[[Quizás|violet]]…', '[[Puede que|teal]] tenga…', '[[Seguro que|orange]] viene…'], hint: 'Imagina tres explicaciones: una con a lo mejor, una con quizás y una con puede que.', example: 'A lo mejor está en el metro y no tiene cobertura. Quizás trabaja hasta tarde. Puede que tenga el móvil sin batería. Seguro que viene en un rato.', teacher: 'Tú eres la amiga y por fin llegas. Tu alumno te cuenta qué imaginaba.' },
            { q: 'Lees un rumor en internet: «El año que viene no hay vacaciones de verano». ¿Qué opinas? · You read an online rumour: “Next year there are no summer holidays.” What do you think?', followUps: ['¿Qué noticias no crees nunca? (What news do you never believe?)', '¿Estás seguro de que es falso? (Are you sure it’s false?)'], phrases: ['[[Dudo que|teal]] sea verdad…', '[[No estoy seguro de que|teal]]…', '[[Es evidente que|orange]] es…'], hint: 'Duda y no estoy seguro de que: subjuntivo. Es evidente que: indicativo.', example: 'Dudo que sea verdad. Es evidente que es una broma. No estoy seguro de que la persona que lo escribió sepa mucho del tema.' },
            { q: 'Ahora tú eres Irene. Son las once y Elena Mora todavía no ha llegado. Un voluntario está nervioso. ¿Qué le dices? · Now you are Irene. It’s eleven and Elena Mora hasn’t arrived yet. A volunteer is nervous. What do you tell him?', followUps: ['¿Qué es posible que pase con el tren? (What might be happening with the train?)', '¿Qué es seguro? (What is certain?)'], phrases: ['[[Estoy segura de que|orange]] viene…', '[[Es posible que|teal]] el tren…', '[[Tal vez|violet]] empezamos / empecemos…'], hint: 'Mezcla todo: certeza, posibilidad y duda.', example: 'Tranquilo. Estoy segura de que viene. Es posible que el tren vaya despacio por las obras. Tal vez empezamos la presentación a las doce y media, y dudo que la gente se vaya: hay muchos libros para ver.', teacher: 'Después, cambian los papeles: tú eres Irene y tu alumno es el voluntario nervioso.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Es posible que…?», «¿Estás seguro de que…?») y tú respondes. Tu alumno escucha si usas el modo correcto.', self: 'Ahora haz tú las preguntas en voz alta («¿Es posible que…?», «¿Estás seguro de que…?») y responde como otra persona. (Now ask the questions aloud and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una invitación con dudas', coach: 'Lo seguro, lo posible y lo dudoso. The sure, the possible, the doubtful.',
      steps: [
        { title: 'Un mensaje a una amiga · A message to a friend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada expresión: ¿certeza (indicativo), a lo mejor (indicativo), quizás (los dos) o posibilidad y duda (subjuntivo)? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada expresión: ¿certeza, posibilidad o duda? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Invitación a un plan · Invitation to a plan', situation: 'Eres Rodrigo (o tú mismo). Escribe un mensaje a una amiga para invitarla a la Feria del Libro del domingo (o a otro plan real: un concierto, una excursión, una fiesta). Explica qué es seguro, qué es posible y qué dudas. (You are Rodrigo, or yourself. Write a message to a friend inviting her to Sunday’s book fair or another real plan. Say what is certain, what is possible and what you doubt.)', task: [
            'Saluda e invita a tu amiga: qué plan es, cuándo y dónde. (Greet her and invite her: what, when, where.)',
            'Escribe dos certezas con «seguro que», «estoy seguro/a de que» o «está claro que» + indicativo. (Two certainties with indicative.)',
            'Escribe dos posibilidades: una con «a lo mejor» o «quizás / tal vez», y otra con «es posible que» o «puede que» + subjuntivo. (Two possibilities.)',
            'Escribe una duda con «dudo que» o «no estoy seguro/a de que» + subjuntivo. (One doubt with subjunctive.)',
            'Despídete y pide una respuesta. (Say goodbye and ask for an answer.)',
          ], starters: ['¡Hola, …!', '¿Te vienes el domingo a…?', 'Seguro que…', 'Estoy seguro / segura de que…', 'A lo mejor…', 'Es posible que…', 'Dudo que…', 'Dime algo, ¿vale?'],
            words: ['seguro que', 'estoy seguro de que', 'está claro que', 'a lo mejor', 'quizás', 'tal vez', 'probablemente', 'es posible que', 'es probable que', 'puede que', 'dudo que', 'no estoy seguro de que'],
            model: '¡Hola, Clara! ¿Te vienes el domingo a la Feria del Libro de la Plaza Mayor? Soy voluntario y estoy allí todo el día. [[Seguro que te gusta|orange]]: hay más de veinte librerías y muchas actividades. [[Estoy seguro de que encuentras|orange]] algún libro para ti. Viene Elena Mora, la autora de esa novela que te encanta, pero [[es posible que llegue|teal]] un poco tarde, porque hay obras en la vía del tren. [[A lo mejor firma|blue]] libros después de la presentación. Por la tarde [[es probable que llueva|teal]], así que trae paraguas. [[Dudo que haya|teal]] mucho tiempo para hablar, pero podemos tomar un café a mediodía. Dime algo, ¿vale? Un abrazo, Rodrigo.',
            minWords: 80,
            checks: [
              { label: 'Una certeza (certainty)', pattern: '(?<!\\p{L})(?:seguro\\s+que|segur[oa]s?\\s+de\\s+que|está\\s+claro\\s+que|es\\s+evidente\\s+que)(?!\\p{L})', tip: 'Di algo seguro con indicativo: «Seguro que te gusta», «Estoy seguro de que viene».' },
              { label: 'Una posibilidad con adverbio (a lo mejor, quizás, tal vez)', pattern: '(?<!\\p{L})(?:a\\s+lo\\s+mejor|quizás?|tal\\s+vez|probablemente|posiblemente)(?!\\p{L})', tip: 'Añade una posibilidad: «A lo mejor firma libros», «Quizás llueve / llueva».' },
              { label: 'Posibilidad o duda + que (possibility or doubt + que)', pattern: '(?<!\\p{L})(?:es\\s+(?:muy\\s+)?(?:posible|probable)\\s+que|puede\\s+(?:ser\\s+)?que|dudo\\s+que|no\\s+estoy\\s+segur[oa]\\s+de\\s+que|no\\s+es\\s+seguro\\s+que)(?!\\p{L})', tip: 'Añade una posibilidad o una duda con subjuntivo: «Es posible que llegue tarde», «Dudo que haya tiempo».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})a\\s+lo\\s+mejor\\s+(?:no\\s+)?(?:llueva|venga|vengas|llegue|haya|sea|esté|pueda|puedas|tenga|tengas|vaya|vayas|haga)(?!\\p{L})', why: '«A lo mejor» va siempre con indicativo: **a lo mejor llueve**, **a lo mejor viene**.' },
              { pattern: '(?<!\\p{L})(?:es\\s+posible|es\\s+probable|puede|dudo)\\s+que\\s+(?:no\\s+)?(?:llueve|viene|vienes|llega|hay|está|puede|puedes|tiene|tienes|va|hace)(?!\\p{L})', why: 'Después de «es posible que», «es probable que», «puede que» y «dudo que» va el subjuntivo: **es posible que llueva**, **dudo que haya**.' },
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
            { tone: 'orange', label: 'CERTEZA · INDICATIVO', formula: 'seguro que · estoy seguro/a de que · está claro que · es evidente que + indicativo', example: 'Seguro que hace sol por la mañana.', caption: 'lo presentas como cierto', en: 'you present it as true' },
            { tone: 'blue', label: 'A LO MEJOR · INDICATIVO', formula: 'a lo mejor + indicativo (siempre)', example: 'A lo mejor montamos las carpas el sábado.', caption: 'una posibilidad, en la conversación', en: 'a possibility, in conversation' },
            { tone: 'violet', label: 'QUIZÁS · TAL VEZ · PROBABLEMENTE', formula: 'delante del verbo: indicativo o subjuntivo · detrás: indicativo', example: 'Quizás tengamos / tenemos que cambiar el programa.', caption: 'los dos son correctos; el subjuntivo suele marcar más duda', en: 'both are correct; the subjunctive usually adds doubt' },
            { tone: 'teal', label: 'POSIBILIDAD Y DUDA · SUBJUNTIVO', formula: 'es posible / probable que · puede que · dudo que · no estoy seguro de que + subjuntivo', example: 'Dudo que vengan mil personas.', caption: 'no lo afirmas: es posible, probable o dudoso', en: 'you don’t state it: it is possible, probable or doubtful' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿lo **afirmo** o no? «Seguro que **llueve**»: lo afirmas (indicativo). «Es posible que **llueva**», «Dudo que **llueva**»: no lo afirmas (subjuntivo). Y recuerda los dos casos especiales: «A lo mejor **llueve**» (siempre indicativo) y «Quizás **llueve** / **llueva**» (los dos).', en: 'Ask yourself: am I stating it or not? “Seguro que llueve”: you state it (indicative). “Es posible que llueva”, “Dudo que llueva”: you don’t (subjunctive). And remember the two special cases: “A lo mejor llueve” (always indicative) and “Quizás llueve / llueva” (both).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Es probable que mañana ___ frío.', options: ['hace', 'haga', 'hacer'], answer: 1, why: '«Es probable que» + subjuntivo: haga.', en: 'It will probably be cold tomorrow.' },
            { prompt: 'A lo mejor ___ al cine esta noche.', options: ['ir', 'vamos', 'vayamos'], answer: 1, why: '«A lo mejor» + indicativo siempre: vamos.', en: 'Maybe we’ll go to the cinema tonight.' },
            { prompt: 'Estoy seguro de que tu hermana ___ razón.', options: ['tenga', 'tener', 'tiene'], answer: 2, why: '«Estoy seguro de que» + indicativo: tiene.', en: 'I’m sure your sister is right.' },
            { prompt: 'No estoy segura de que el restaurante ___ abierto los lunes.', options: ['esté', 'estar', 'está'], answer: 0, why: '«No estoy segura de que» expresa duda: subjuntivo, esté.', en: 'I’m not sure the restaurant is open on Mondays.' },
            { prompt: 'Puede que ___ un poco tarde a la reunión.', options: ['llegue', 'llego', 'llegar'], answer: 0, why: '«Puede que» = es posible que: subjuntivo, llegue.', en: 'I may be a bit late for the meeting.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la oficina.', blocks: [
          { kind: 'lead', text: 'Sara, la hermana de Irene, prepara una reunión importante con unos clientes en su oficina. No está segura de nada. Transforma sus frases.', en: 'Sara, Irene’s sister, is preparing an important meeting with some clients at her office. She isn’t sure of anything. Transform her sentences.' },
          { kind: 'rewrite', title: 'Antes de la reunión · Before the meeting', items: [
            { prompt: 'Los clientes llegan tarde. (→ Es probable que)', instruction: 'Presenta el hecho como probable. Empieza con «Es probable que».', accept: ['Es probable que los clientes lleguen tarde'] },
            { prompt: 'La reunión dura dos horas. (→ A lo mejor)', instruction: 'Presenta el hecho como una posibilidad. Empieza con «A lo mejor».', accept: ['A lo mejor la reunión dura dos horas'] },
            { prompt: 'El proyector funciona. (→ No estoy segura de que)', instruction: 'Expresa tu duda. Empieza con «No estoy segura de que».', accept: ['No estoy segura de que el proyector funcione'] },
          ] },
        ] },
        { title: 'Ampliación · Seguramente, lo más probable, igual (opcional)', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'lead', text: 'Tres expresiones más. **Seguramente** no significa «surely» (100 %): significa «probablemente», y funciona igual (indicativo o subjuntivo delante del verbo). **Lo más probable es que** va con subjuntivo: «Lo más probable es que llueva». En la conversación, sobre todo en España, se oye **igual** = a lo mejor, con indicativo: «Igual llueve». Y un adelanto para reconocer: «**Estará** en el tren» = probablemente está en el tren (futuro de probabilidad, clase 161, nivel B2).', en: 'Three more expressions. “Seguramente” does not mean “surely” (100%): it means “probably”, and works the same way. “Lo más probable es que” takes the subjunctive. In conversation, especially in Spain, “igual” = a lo mejor, with the indicative. And a preview to recognise: “Estará en el tren” = she’s probably on the train (the future of probability, class 161, level B2).' },
          { kind: 'choice', title: 'Más matices · More nuances', items: [
            { prompt: '«Seguramente Elena llega a las doce» significa…', options: ['Elena no llega a las doce.', 'Es bastante probable que Elena llegue a las doce.', 'Es seguro al cien por cien que Elena llega a las doce.'], answer: 1, why: '«Seguramente» = probablemente, no «con total seguridad». Es un falso amigo de «surely».', en: '“Seguramente Elena llega a las doce” means…' },
            { prompt: 'Lo más probable es que la feria ___ a las cuatro y media.', options: ['termine', 'termina', 'terminar'], answer: 0, why: '«Lo más probable es que» presenta una probabilidad: subjuntivo, termine.', en: 'Most likely the fair will end at half past four.' },
            { prompt: 'Mateo no contesta. Igual ___ dormido.', options: ['estar', 'está', 'esté'], answer: 1, why: '«Igual» (coloquial) = a lo mejor, y funciona igual: indicativo, está.', en: 'Mateo isn’t answering. Maybe he’s asleep.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Extra: tu alumno cuenta qué pasa probablemente ahora en casa de un amigo con «seguramente», «lo más probable es que» e «igual».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 095 · Infinitivo o que + subjuntivo: mismo sujeto / otro', text: 'Ya eliges el modo según tu grado de seguridad: «Seguro que llueve», «Es posible que llueva». En la clase 095 aprendes otra decisión importante: cuándo usar el infinitivo y cuándo «que» + subjuntivo, según quién hace la acción: «Quiero salir» (yo) / «Quiero que salgas» (tú). Es el paso natural: ya conoces muchas expresiones con «que» + subjuntivo, y ahora ves cuándo no hace falta el «que».', en: 'You can now choose the mood by how sure you are: “Seguro que llueve”, “Es posible que llueva”. In class 095 you learn another important decision: when to use the infinitive and when “que” + subjunctive, depending on who does the action: “Quiero salir” (I) / “Quiero que salgas” (you). It is the natural next step: you already know many expressions with “que” + subjunctive, and now you see when you don’t need “que”.', href: '/gramatica/infinitivo-o-que-subjuntivo-mismo-sujeto', label: 'Ir a la clase 095' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué es seguro sobre tu próxima clase de español? ¿Qué es posible? ¿Qué dudas?». Respuesta esperada: una certeza con indicativo, una posibilidad y una duda con subjuntivo. Tarea: escribir el mensaje de Escribir para un plan real.' },
        ] },
      ],
    },
  ],
};
