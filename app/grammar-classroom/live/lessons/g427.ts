import type { LiveLesson } from '../types';

/**
 * Lesson 427 · B1 · Argumentación y toma de decisiones B1 (course unit G127).
 * The B1 closing and integration class: no new grammar, a review that recycles.
 * Scene: the town council gives the municipal library Las Palmeras extra money,
 * enough for one project only. Marta Lozano, the director, chairs the team
 * meeting: Diego Paredes wants a digital workshop for older people (laptops +
 * classes, the most expensive option), Carmen Vega wants to renovate the
 * children's room and Rubén Soto wants to open on Saturday afternoons. In the
 * voice message Carmen (Colombian voice, ustedes) cannot attend Friday's vote and
 * explains her final position; in Escribir the learner sends Marta a short
 * written proposal before the vote.
 * Content: the structure of an argument (tesis, argumentos, contraargumento,
 * conclusión); mood choice in context: creo que / me parece que / está claro
 * que / es verdad que + indicative vs no creo que / no me parece que + subjunctive
 * (G093), es importante / mejor que + subjunctive vs + infinitive (G091),
 * propongo / sugiero que + subjunctive (G090); causal, consecutive and
 * argumentative connectors (G115–G117: como, ya que, así que, por eso, además,
 * incluso, en cambio, no… sino); concession with aunque + indicative and es
 * verdad que…, pero (G101); real conditions si + presente (G102); the
 * conditional to soften a choice (yo elegiría, G103); turn-taking and polite
 * disagreement formulas. Ampliación: formal register for a written proposal
 * (dado que, no obstante, por consiguiente) and aunque + subjuntivo as a
 * recognition preview only (G137, B2). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 427,
  level: 'B1',
  title: 'Argumentación y toma de decisiones B1',
  subtitle: 'Defender una propuesta en una reunión y decidir en grupo: opinar con el modo correcto, razonar, conceder, discrepar y proponer.',
  legend: [
    { tone: 'blue', label: 'OPINAR Y VALORAR · creo que / no creo que, es importante que (mood)' },
    { tone: 'teal', label: 'RAZONAR · como, ya que, así que, por eso, además, incluso' },
    { tone: 'orange', label: 'CONCEDER Y DISCREPAR · aunque, es verdad que… pero, en cambio, no… sino' },
    { tone: 'violet', label: 'PROPONER Y CONDICIONAR · propongo que, si + presente, yo elegiría' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Decidir en equipo', coach: 'Una buena decisión necesita buenos argumentos. A good decision needs good arguments.',
      steps: [
        { title: 'La reunión del lunes · Monday’s team meeting', blocks: [
          { kind: 'lead', text: 'El ayuntamiento da a la biblioteca municipal Las Palmeras un dinero extra este año, pero solo alcanza para un proyecto. Marta Lozano, la directora, reúne al equipo. Diego Paredes quiere un taller digital para personas mayores; Carmen Vega, renovar la sala infantil; Rubén Soto, abrir los sábados por la tarde. Hoy no hay gramática nueva: **juntas** lo que ya sabes (opinar, valorar, razonar, conceder, proponer) para defender una idea y decidir en grupo.', en: 'The town council is giving the Las Palmeras public library some extra money this year, but it is only enough for one project. Marta Lozano, the director, calls a team meeting. Diego Paredes wants a digital workshop for older people; Carmen Vega wants to renovate the children’s room; Rubén Soto wants to open on Saturday afternoons. There is no new grammar today: you combine what you already know (giving opinions, judging, reasoning, conceding, proposing) to defend an idea and make a group decision.' },
          { kind: 'guide', text: { teacher: 'Tú lees las cuatro frases de Diego y tu alumno dice qué parte del argumento es cada una: tesis, argumento, contraargumento o conclusión.', self: 'Lee las cuatro frases de Diego en voz alta. ¿Qué parte del argumento es cada una? (Thesis, argument, counterargument or conclusion?)' } },
          { kind: 'compare', title: 'Las cuatro partes de un argumento · The four parts of an argument', columns: [
            { tone: 'blue', label: '1 · TESIS', sentence: 'Yo [[creo que|blue]] el taller digital es la mejor opción.', idea: 'Dices qué defiendes, al principio y con claridad.', en: 'I think the digital workshop is the best option. (what you defend, stated first)' },
            { tone: 'teal', label: '2 · ARGUMENTOS', sentence: 'Muchos mayores no saben hacer trámites en línea; [[además|teal]], vienen a la biblioteca casi a diario.', idea: 'Das razones y las unes con conectores.', en: 'Many older people can’t do official paperwork online; besides, they come to the library almost every day.' },
            { tone: 'orange', label: '3 · CONTRAARGUMENTO', sentence: '[[Es verdad que|orange]] es el proyecto más caro, [[pero|orange]] llega a más personas.', idea: 'Reconoces lo que dice el otro lado y respondes.', en: 'It’s true that it’s the most expensive project, but it reaches more people.' },
            { tone: 'violet', label: '4 · CONCLUSIÓN', sentence: '[[Por eso|teal]], [[propongo que|violet]] elijamos el taller.', idea: 'Cierras con una propuesta clara.', en: 'That’s why I propose that we choose the workshop.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Diego dice: «Es verdad que cuesta mucho, pero los portátiles duran años». Aquí Diego…', options: ['presenta su tesis.', 'cierra con una propuesta.', 'responde a un contraargumento.'], answer: 2, why: 'Reconoce el punto débil (cuesta mucho) y responde con «pero»: es el contraargumento.', en: 'Diego says: “It’s true that it costs a lot, but laptops last for years.” Here Diego…' },
            { prompt: '¿Dónde va normalmente la tesis?', options: ['Al principio: primero dices qué defiendes.', 'Solo al final, después de la propuesta.', 'Escondida entre los argumentos.'], answer: 0, why: 'En un debate, quien escucha necesita saber desde el principio qué defiendes.', en: 'Where does the thesis usually go?' },
            { prompt: '«Por eso, propongo que votemos el viernes.» Esta frase es…', options: ['un argumento a favor del taller.', 'una forma de interrumpir.', 'una conclusión con una propuesta.'], answer: 2, why: '«Por eso» saca la consecuencia de todo lo anterior y «propongo que» cierra con una acción.', en: '“That’s why I propose that we vote on Friday.” This sentence is…' },
          ] },
        ] },
        { title: 'Opinar y valorar: el modo · Opinions and judgements: the mood', mascot: '/brand/mascot/studying.webp', coach: '¿Afirmas o no? Are you asserting or not?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'OPINAR Y VALORAR', question: '¿Afirmas algo, o lo niegas, lo valoras o lo pides?', en: 'Are you asserting something, or are you denying it, judging it or asking for it?', formula: ['creo que · me parece que · está claro que · es verdad que + **indicativo**', 'no creo que · no me parece que · no está claro que + **subjuntivo**', 'es importante / necesario / mejor que · me parece bien que + **subjuntivo**'],
            meaning: 'Cuando **afirmas** tu opinión o un hecho, usas indicativo: lo presentas como verdad (clases 91 y 93). Cuando **niegas** una opinión, ya no afirmas nada: subjuntivo. Cuando **valoras** algo (es importante, es mejor, me parece bien), el verbo que sigue va en subjuntivo, también en frases afirmativas. Y si valoras en general, sin una persona concreta, usas infinitivo: «Es importante escuchar a todos».',
            examples: [
              { es: '[[Creo que|blue]] el taller **es** útil para mucha gente.', en: 'I think the workshop is useful for a lot of people.' },
              { es: '[[No creo que|blue]] la sala infantil **necesite** tantos cambios.', en: 'I don’t think the children’s room needs so many changes.' },
              { es: '[[Es importante que|blue]] los mayores **aprendan** a pedir una cita médica en línea.', en: 'It’s important for older people to learn how to book a doctor’s appointment online.' },
              { es: '[[Está claro que|blue]] el dinero no **alcanza** para todo.', en: 'It’s clear that the money isn’t enough for everything.' },
            ] },
          { kind: 'table', title: 'Afirmar o no afirmar · Asserting or not', head: ['Expresión', 'Modo · Mood', 'Ejemplo de la reunión'], rows: [
            ['creo que · pienso que · me parece que', 'indicativo', 'Me parece que Rubén **tiene** razón.'],
            ['no creo que · no pienso que · no me parece que', 'subjuntivo', 'No me parece que **sea** urgente.'],
            ['está claro que · es verdad que · es evidente que', 'indicativo', 'Es verdad que los sábados **viene** poca gente.'],
            ['no está claro que · no es verdad que', 'subjuntivo', 'No está claro que los estudiantes **vengan** los sábados.'],
            ['es importante / necesario / mejor que · me parece bien que', 'subjuntivo', 'Es mejor que **decidamos** hoy.'],
            ['es importante / necesario / mejor + infinitivo', 'infinitivo · in general', 'Es necesario **escuchar** a todos.'],
          ], note: 'En las preguntas, lo normal es el indicativo: «¿Crees que **es** buena idea?» (clase 93). Y ojo: «Creo que no» + indicativo también afirma: «Creo que no **hay** dinero para dos proyectos».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No creo que diez portátiles ___ suficientes.', options: ['ser', 'sean', 'son'], answer: 1, why: '«No creo que» niega la opinión: no afirmas nada, así que el verbo va en subjuntivo.', en: 'I don’t think ten laptops are enough.' },
            { prompt: 'Está claro que los niños ___ un espacio mejor.', options: ['necesitar', 'necesitan', 'necesiten'], answer: 1, why: '«Está claro que» presenta un hecho como verdad: indicativo.', en: 'It’s clear that the children need a better space.' },
            { prompt: 'Me parece bien que Rubén ___ los horarios de los sábados.', options: ['revisa', 'revisar', 'revise'], answer: 2, why: '«Me parece bien que» valora lo que hace otra persona: subjuntivo. «Me parece que» (sin «bien») sí llevaría indicativo.', en: 'I think it’s a good idea for Rubén to check the Saturday timetable.' },
          ] },
        ] },
        { title: 'Razonar: causa, consecuencia y suma · Reasoning', mascot: '/brand/mascot/speaking.webp', coach: 'Una relación, un conector. One relation, one connector.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'RAZONAR', question: '¿Das una causa, sacas una consecuencia o sumas otro argumento?', en: 'Are you giving a cause, drawing a consequence or adding another argument?', formula: ['**Como** + causa, resultado (siempre al principio)', 'resultado, **ya que / puesto que / porque** + causa', 'causa, **así que / por eso / por lo tanto** + resultado', '**además** (suma) · **incluso** (el caso más fuerte)'],
            meaning: '**Como** presenta la causa y va siempre al principio de la frase. **Ya que** y **puesto que** presentan una causa conocida y son algo más formales que **porque** (clase 115). **Así que** y **por eso** sacan la consecuencia; **por lo tanto** es más formal (clase 116). **Además** suma otro argumento en la misma dirección e **incluso** destaca el caso más inesperado (clase 117).',
            examples: [
              { es: '[[Como|teal]] el dinero solo alcanza para un proyecto, tenemos que elegir.', en: 'As the money is only enough for one project, we have to choose.' },
              { es: 'Los estudiantes no tienen dónde estudiar, [[ya que|teal]] los sábados cerramos a las dos.', en: 'Students have nowhere to study, since we close at two on Saturdays.' },
              { es: 'La sala de estudio está vacía por la tarde, [[así que|teal]] podemos usarla para el taller.', en: 'The study room is empty in the afternoon, so we can use it for the workshop.' },
              { es: 'Los portátiles servirán a los mayores e [[incluso|teal]] a los estudiantes.', en: 'The laptops will be useful for older people and even for students.' },
            ] },
          { kind: 'tip', icon: '💡', title: 'Un conector por relación · One connector per relation', text: '«Como…, así que…» repite la misma relación dos veces: elige uno. «**Como** hay poco dinero, tenemos que elegir» o «Hay poco dinero, **así que** tenemos que elegir». Y delante de una palabra que empieza por «i-», «y» se convierte en «e»: «los mayores **e** incluso los estudiantes».', en: '“Como…, así que…” expresses the same relation twice: pick one. And before a word beginning with an “i” sound, “y” becomes “e”: “e incluso”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ Rubén trabaja los sábados por la mañana, conoce bien a los usuarios de ese día.', options: ['Así que', 'Porque', 'Como'], answer: 2, why: 'La causa va al principio de la frase: «como». «Porque» normalmente va después del resultado y «así que» introduce una consecuencia.', en: 'As Rubén works on Saturday mornings, he knows that day’s users well.' },
            { prompt: 'Los portátiles también pueden servir a los estudiantes; ___, la wifi de la biblioteca es muy buena.', options: ['así que', 'además', 'en cambio'], answer: 1, why: 'Otro argumento a favor, en la misma dirección: «además».', en: 'The laptops can be useful for students too; besides, the library’s wifi is very good.' },
            { prompt: 'Nadie usa la sala de estudio por la tarde, ___ podríamos usarla para el taller.', options: ['así que', 'ya que', 'como'], answer: 0, why: 'De la primera idea sacas una consecuencia: «así que». «Ya que» y «como» presentan una causa.', en: 'Nobody uses the study room in the afternoon, so we could use it for the workshop.' },
          ] },
        ] },
        { title: 'Conceder y discrepar con cortesía · Conceding and disagreeing politely', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Primero reconoces, después respondes. First acknowledge, then answer.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONCEDER Y DISCREPAR', question: '¿Reconoces lo que dice el otro antes de responder?', en: 'Do you acknowledge what the other person says before you answer?', formula: ['**Aunque** + indicativo, idea principal (clase 101)', '**Es verdad que / Tienes razón en que** + indicativo, **pero**…', 'A…; B, **en cambio**, … · no A, **sino** B'],
            meaning: 'Para discrepar con cortesía, primero **concedes**: reconoces la parte de verdad del otro con «aunque», «es verdad que» o «tienes razón en que» + indicativo, porque es un hecho que aceptas. Después das tu argumento, que pesa más. Con **en cambio** comparas dos opciones y con **no… sino** corriges una idea. Así tu desacuerdo no suena a ataque.',
            examples: [
              { es: '[[Aunque|orange]] es el proyecto más caro, yo lo elegiría por su utilidad.', en: 'Although it’s the most expensive project, I’d choose it because it’s so useful.' },
              { es: '[[Tienes razón en que|orange]] la sala infantil está vieja, [[pero|orange]] todavía se puede usar.', en: 'You’re right that the children’s room is old, but it can still be used.' },
              { es: 'El taller dura todo el año; la renovación, [[en cambio|orange]], se termina en dos semanas.', en: 'The workshop runs all year; the renovation, on the other hand, is finished in two weeks.' },
              { es: 'El problema no es el dinero, [[sino|orange]] el personal de los sábados.', en: 'The problem isn’t the money, but the staff for Saturdays.' },
            ] },
          { kind: 'table', title: 'Tomar la palabra y discrepar · Taking the floor and disagreeing', head: ['Para…', 'Expresiones', 'English'], rows: [
            ['pedir la palabra', '¿Puedo decir algo? · Si me permites, …', 'Can I say something? · If I may, …'],
            ['no perder el turno', 'Perdona, déjame terminar. · Un momento, ya acabo.', 'Sorry, let me finish. · One moment, I’m nearly done.'],
            ['interrumpir con cortesía', 'Perdona que te interrumpa, pero…', 'Sorry to interrupt, but…'],
            ['discrepar en parte', 'Estoy de acuerdo contigo en parte. · Entiendo lo que dices, pero…', 'I partly agree with you. · I see what you mean, but…'],
            ['discrepar del todo', 'Yo no lo veo así. · No estoy de acuerdo con eso.', 'I don’t see it that way. · I don’t agree with that.'],
            ['dar la palabra', '¿Tú qué opinas, Carmen? · Te escucho.', 'What do you think, Carmen? · Go ahead, I’m listening.'],
          ], note: '«Perdona que te interrumpa» lleva subjuntivo, como las reacciones de la clase 92 («me molesta que…»). Úsala como fórmula fija.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Aunque es el proyecto más caro, ___ lo elegiría.', options: ['yo', 'pero yo', 'así que yo'], answer: 0, why: '«Aunque» ya marca la concesión: la segunda parte no lleva «pero» ni «así que».', en: 'Although it’s the most expensive project, I would choose it.' },
            { prompt: '«Tienes razón en que el taller es útil, pero…» ¿Qué hace quien habla?', options: ['Cambia de tema.', 'Concede una parte y después discrepa.', 'Está totalmente de acuerdo.'], answer: 1, why: 'Reconoce una parte de verdad (es útil) y con «pero» presenta su argumento.', en: '“You’re right that the workshop is useful, but…” What is the speaker doing?' },
            { prompt: 'Carmen está hablando y Diego quiere decir algo. ¿Qué es más cortés?', options: ['Perdona que te interrumpa, pero…', '¡Calla, que ahora hablo yo!', 'No, no, no. Eso no.'], answer: 0, why: 'Una fórmula de cortesía antes de interrumpir; las otras suenan agresivas en una reunión.', en: 'Carmen is speaking and Diego wants to say something. What is more polite?' },
          ] },
        ] },
        { title: 'Proponer y poner condiciones · Proposing and setting conditions', mascot: '/brand/mascot/walking.webp', coach: 'Una propuesta clara y sus consecuencias. A clear proposal and its consequences.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PROPONER Y CONDICIONAR', question: '¿Propones algo al grupo o dices qué pasará con una opción?', en: 'Are you proposing something to the group, or saying what will happen with an option?', formula: ['**propongo / sugiero / recomiendo que** + subjuntivo (clase 90)', '**si** + presente → futuro · presente · imperativo (clase 102)', 'yo **elegiría** · **sería** mejor · **podríamos** + infinitivo (clase 103)'],
            meaning: 'Cuando propones que otra persona o el grupo haga algo, el verbo va en **subjuntivo**: «Propongo que votemos». Para mostrar las consecuencias de una opción real, usas **si + presente**, nunca si + futuro ni si + presente de subjuntivo. Y el **condicional** suaviza tu elección o tu propuesta: «yo elegiría», «podríamos empezar en enero».',
            examples: [
              { es: '[[Propongo que|violet]] **votemos** el viernes.', en: 'I propose that we vote on Friday.' },
              { es: '[[Si elegimos|violet]] el taller, tendremos que comprar diez portátiles.', en: 'If we choose the workshop, we’ll have to buy ten laptops.' },
              { es: '[[Si no decidimos|violet]] antes de fin de mes, perdemos el dinero.', en: 'If we don’t decide before the end of the month, we lose the money.' },
              { es: 'Yo [[elegiría|violet]] el taller, pero [[podríamos|violet]] hacer cuentacuentos con voluntarios.', en: 'I’d choose the workshop, but we could do storytelling sessions with volunteers.' },
            ] },
          { kind: 'decide', title: '¿Indicativo, subjuntivo o infinitivo? · Which form?', steps: [
            { q: '¿Afirmas tu opinión o un hecho (creo que, me parece que, está claro que, es verdad que, aunque)?', yes: 'Indicativo: «Creo que **es** útil». «Aunque **es** caro, …».', no: 'next' },
            { q: '¿Niegas una opinión, valoras algo de otra persona o propones que alguien haga algo (no creo que, es importante que, propongo que)?', yes: 'Subjuntivo: «No creo que **sea** urgente». «Propongo que **votemos**».', no: 'next' },
            { q: '¿Valoras en general, sin una persona concreta?', yes: 'Infinitivo: «Es importante **escuchar** a todos».', no: 'Si es una condición real con «si», usa presente de indicativo: «Si **elegimos** el taller, …».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Si ___ el taller, Diego dará las primeras clases.', options: ['elegiremos', 'elijamos', 'elegimos'], answer: 2, why: 'Condición real: «si» + presente de indicativo. Nunca si + futuro ni si + presente de subjuntivo.', en: 'If we choose the workshop, Diego will teach the first classes.' },
            { prompt: 'Sugiero que cada uno ___ su propuesta por escrito.', options: ['enviar', 'envíe', 'envía'], answer: 1, why: 'Propones que otras personas hagan algo: «sugiero que» + subjuntivo.', en: 'I suggest that everyone send their proposal in writing.' },
            { prompt: 'Una idea general, sin personas concretas: «Es necesario ___ a todo el equipo».', options: ['que escucha', 'escuchamos', 'escuchar'], answer: 2, why: 'Sin un sujeto concreto, la valoración va con infinitivo.', en: 'A general idea: “It’s necessary to listen to the whole team.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Errores que se oyen mucho. Mistakes you hear a lot.', blocks: [
          { kind: 'mistakes', title: 'Cuidado con estas frases · Watch out', items: [
            { wrong: 'No creo que el taller es caro.', right: 'No creo que el taller **sea** caro.', why: 'La opinión negada no afirma nada: subjuntivo (clase 93).' },
            { wrong: 'Creo que sea una buena idea.', right: 'Creo que **es** una buena idea.', why: 'Con «creo que» afirmas tu opinión: indicativo.' },
            { wrong: 'Es importante que los niños tienen un espacio propio.', right: 'Es importante que los niños **tengan** un espacio propio.', why: 'Las valoraciones con «que» y otra persona piden subjuntivo (clase 91).' },
            { wrong: 'Si elegiremos el taller, compraremos portátiles.', right: 'Si **elegimos** el taller, compraremos portátiles.', why: 'En la condición real, «si» va con presente; el futuro va en la otra parte (clase 102).' },
            { wrong: 'Aunque es caro, pero lo elegiría.', right: 'Aunque es caro, lo elegiría.', why: '«Aunque» ya marca la concesión: no se añade «pero» (clase 101).' },
            { wrong: 'Como hay poco dinero, así que tenemos que elegir.', right: 'Como hay poco dinero, tenemos que elegir.', why: 'Dos conectores para la misma relación: elige «como» o «así que», no los dos.' },
            { wrong: 'Pienso de que es útil.', right: 'Pienso que es útil. / Estoy seguro **de** que es útil.', why: '«Pensar» va sin «de» (piensas algo). «Estar seguro» sí lleva «de» (estás seguro de algo); en el registro cuidado se prefiere «estoy seguro de que».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['No creo que el taller sea demasiado caro.', 'No creo que el taller es demasiado caro.', 'No creo que el taller ser demasiado caro.'], answer: 0, why: 'Opinión negada → subjuntivo: «sea».', en: 'Which sentence is correct? (I don’t think the workshop is too expensive.)' },
            { prompt: '¿Qué frase es correcta?', options: ['Como hay poco dinero, debemos elegir bien.', 'Como hay poco dinero, así que debemos elegir bien.', 'Hay poco dinero, como debemos elegir bien.'], answer: 0, why: '«Como» va al principio con la causa y basta un solo conector.', en: 'Which sentence is correct? (As there’s little money, we must choose carefully.)' },
            { prompt: '¿Qué frase es correcta?', options: ['Creo de que funcionará.', 'Estoy segura de que funcionará.', 'Pienso de que funcionará.'], answer: 1, why: '«Estar seguro/a de algo» → «de que». «Pensar» y «creer» van sin «de».', en: 'Which sentence is correct? (I’m sure it will work.)' },
          ] },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/portrait.webp',
      title: 'La reunión del equipo', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la sala de reuniones · In the meeting room', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marta y Diego; tu alumno es Carmen y Rubén. Después tu alumno toca cada expresión marcada y explica la elección: ¿por qué indicativo o subjuntivo? ¿Qué hace el conector?', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿por qué ese modo? ¿Qué hace ese conector? (Why that mood? What does that connector do?)' } },
          { kind: 'explore', title: '¿Un proyecto para todos?', setting: 'Lunes por la mañana, antes de abrir. Marta Lozano, directora de la biblioteca Las Palmeras, dirige la reunión. Hablan Diego Paredes, Carmen Vega y Rubén Soto. (Monday morning, before opening time. Marta Lozano, the library director, chairs the meeting.)', lines: [
            { who: 'Marta', text: 'Bueno, empezamos. [[Como|teal]] el dinero solo alcanza para un proyecto, hoy tenemos que elegir uno. Diego, ¿empiezas tú?', en: 'Right, let’s start. As the money is only enough for one project, today we have to choose one. Diego, will you start?' },
            { who: 'Diego', text: 'Sí. Yo [[creo que|blue]] el taller digital es la mejor opción. Muchos mayores no saben pedir una cita médica en línea; [[además|teal]], vienen a la biblioteca casi todos los días.', en: 'Yes. I think the digital workshop is the best option. Many older people don’t know how to book a doctor’s appointment online; besides, they come to the library almost every day.' },
            { who: 'Carmen', text: '**¿Puedo decir algo?** [[Tienes razón en que|orange]] es un problema real, [[pero|orange]] el taller se lleva casi todo el dinero.', en: 'Can I say something? You’re right that it’s a real problem, but the workshop takes almost all the money.' },
            { who: 'Diego', text: '**Perdona, déjame terminar.** [[Aunque|orange]] es el proyecto más caro, yo lo [[elegiría|violet]]: los portátiles duran años e [[incluso|teal]] los estudiantes pueden usarlos.', en: 'Sorry, let me finish. Although it’s the most expensive project, I’d choose it: laptops last for years and even students can use them.' },
            { who: 'Marta', text: 'Gracias, Diego. Carmen, ¿tú qué opinas?', en: 'Thank you, Diego. Carmen, what do you think?' },
            { who: 'Carmen', text: '**Yo no lo veo así.** [[No creo que vengan|blue]] tantos mayores cada semana. En la sala infantil, [[en cambio|orange]], hay treinta niños cada tarde, [[así que|teal]] necesitamos estanterías nuevas y más espacio.', en: 'I don’t see it that way. I don’t think that many older people will come every week. In the children’s room, on the other hand, there are thirty children every afternoon, so we need new shelves and more space.' },
            { who: 'Rubén', text: '**Si me permites…** Para mí, el problema no son las salas, [[sino|orange]] los horarios. Los estudiantes no tienen dónde estudiar, [[ya que|teal]] los sábados cerramos a las dos.', en: 'If I may… For me, the problem isn’t the rooms but the opening hours. Students have nowhere to study, since we close at two on Saturdays.' },
            { who: 'Marta', text: 'Es un buen punto, pero abrir los sábados significa pagar horas extra todo el año.', en: 'That’s a good point, but opening on Saturdays means paying overtime all year round.' },
            { who: 'Diego', text: 'Una idea: [[si elegimos|violet]] el taller, yo puedo dar las clases los sábados por la tarde, y así la biblioteca abre esa tarde.', en: 'Here’s an idea: if we choose the workshop, I can teach the classes on Saturday afternoons, and that way the library is open that afternoon.' },
            { who: 'Carmen', text: 'Estoy de acuerdo contigo en parte. Pero [[es importante que|blue]] los niños también [[tengan|blue]] algo este año.', en: 'I partly agree with you. But it’s important that the children get something this year too.' },
            { who: 'Rubén', text: '¿Y si organizamos cuentacuentos con voluntarios? Es barato y a los niños les encanta.', en: 'What if we organise storytelling sessions with volunteers? It’s cheap and the children love it.' },
            { who: 'Marta', text: 'Me parece bien. Entonces [[propongo que|violet]] cada uno [[escriba|violet]] una propuesta corta y la votamos el viernes.', en: 'Sounds good. So I propose that everyone writes a short proposal and we vote on it on Friday.' },
          ], notes: {
            'Como': 'Presenta la causa al principio de la frase (clase 115): primero la razón, después lo que hay que hacer.',
            'creo que': 'Diego afirma su opinión, su tesis: indicativo («es la mejor opción»).',
            'además': 'Suma un segundo argumento en la misma dirección. Va después de punto y coma, con coma detrás.',
            'Tienes razón en que': 'Carmen concede una parte de verdad antes de discrepar. Lleva indicativo porque acepta el hecho («es un problema real»).',
            'pero': 'Después de conceder, «pero» presenta el argumento que pesa más para Carmen: el dinero.',
            'Aunque': 'Concesión con indicativo: Diego reconoce un hecho real (es el más caro) y mantiene su elección (clase 101). No hay «pero» después.',
            'elegiría': 'Condicional: suaviza la elección y la presenta como una opinión, no como una orden (clase 103).',
            'incluso': '«Even»: destaca el caso que menos esperas; el taller es para mayores, pero también sirve a los estudiantes. Fíjate: «e incluso», no «y incluso».',
            'No creo que vengan': 'Opinión negada: Carmen no afirma nada sobre el futuro, así que usa subjuntivo (vengan), no «vienen» ni «vendrán».',
            'en cambio': 'Compara dos grupos: los mayores (pocos, según Carmen) y los niños (treinta cada tarde).',
            'así que': 'Saca la consecuencia: hay muchos niños → necesitan estanterías y espacio.',
            'sino': 'Corrige una idea: no son las salas → son los horarios. Antes hay un «no».',
            'ya que': 'Presenta la causa, conocida por todos, después del resultado. Es un poco más formal que «porque».',
            'si elegimos': 'Condición real: «si» + presente. La consecuencia va en presente con «poder» («puedo dar las clases»).',
            'es importante que': 'Valoración con otra persona (los niños): el verbo siguiente va en subjuntivo.',
            'tengan': 'Presente de subjuntivo de «tener», después de «es importante que».',
            'propongo que': 'Marta propone que otras personas hagan algo: «proponer que» + subjuntivo, como «sugerir que» (clase 90).',
            'escriba': 'Presente de subjuntivo de «escribir». Fíjate: después, «la votamos el viernes» va en presente de indicativo, porque es un plan, no depende de «propongo que».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué tiene que elegir el equipo?', options: ['Porque el dinero solo alcanza para un proyecto.', 'Porque el ayuntamiento quiere cerrar la biblioteca.', 'Porque Marta no quiere hacer ningún proyecto.'], answer: 0, why: '«Como el dinero solo alcanza para un proyecto, hoy tenemos que elegir uno».', en: 'Why does the team have to choose?' },
            { prompt: '¿Qué argumento da Carmen contra el taller?', options: ['No cree que vengan tantos mayores cada semana.', 'Cree que los portátiles se rompen enseguida.', 'Dice que Diego no sabe dar clases.'], answer: 0, why: '«No creo que vengan tantos mayores cada semana».', en: 'What argument does Carmen give against the workshop?' },
            { prompt: '¿Qué ofrece Diego para responder a la idea de Rubén?', options: ['Dar las clases del taller los sábados por la tarde.', 'Pagar él las horas extra de los sábados.', 'Cerrar la sala infantil los sábados.'], answer: 0, why: '«Si elegimos el taller, yo puedo dar las clases los sábados por la tarde, y así la biblioteca abre esa tarde».', en: 'What does Diego offer in response to Rubén’s idea?' },
          ] },
        ] },
        { title: '¿Qué hace cada frase? · What does each sentence do?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: 'Más frases de la reunión · More sentences from the meeting', categories: [
            { id: 'opinar', label: 'Opinar o valorar', tone: 'blue' },
            { id: 'razonar', label: 'Dar una causa o una consecuencia', tone: 'teal' },
            { id: 'conceder', label: 'Conceder o discrepar', tone: 'orange' },
            { id: 'proponer', label: 'Proponer o poner una condición', tone: 'violet' },
          ], items: [
            { text: 'Me parece que Rubén tiene razón.', answer: 'opinar', why: 'Una opinión afirmada, con indicativo.' },
            { text: 'Es necesario que alguien abra los sábados.', answer: 'opinar', why: 'Una valoración con otra persona: subjuntivo (abra).' },
            { text: 'Como los niños vienen por la tarde, la sala está llena a esa hora.', answer: 'razonar', why: '«Como» presenta la causa al principio.' },
            { text: 'Es verdad que los portátiles son caros, pero duran años.', answer: 'conceder', why: 'Reconoce un punto débil y responde con «pero».' },
            { text: 'Si votamos el viernes, sabremos el resultado antes de fin de mes.', answer: 'proponer', why: 'Condición real: «si» + presente y consecuencia en futuro.' },
            { text: 'Sugiero que preguntemos a los usuarios.', answer: 'proponer', why: 'Una propuesta para el grupo: «sugiero que» + subjuntivo.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'El modo y el conector en contexto', coach: 'Primero piensa qué haces; después, la forma. First think what you’re doing, then pick the form.',
      steps: [
        { title: 'Indicativo o subjuntivo · Indicative or subjunctive', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase en voz alta con la forma elegida y dice qué hace quien habla: ¿afirma, niega, valora o propone?', self: 'Antes de elegir, pregúntate: ¿quien habla afirma, niega, valora o propone? (Is the speaker asserting, denying, judging or proposing?)' } },
          { kind: 'choice', title: 'Frases del equipo · Sentences from the team', items: [
            { prompt: 'Rubén: «Creo que muchos estudiantes ___ los sábados si abrimos».', options: ['vendrán', 'vengan', 'venir'], answer: 0, why: '«Creo que» afirma la opinión: indicativo. Futuro, porque es una predicción.', en: 'Rubén: “I think lots of students will come on Saturdays if we open.”' },
            { prompt: 'Carmen: «No me parece que el taller ___ lo más urgente este año».', options: ['es', 'será', 'sea'], answer: 2, why: '«No me parece que» niega la opinión: subjuntivo.', en: 'Carmen: “I don’t think the workshop is the most urgent thing this year.”' },
            { prompt: 'Marta: «Está claro que no ___ dinero para los tres proyectos».', options: ['haber', 'hay', 'haya'], answer: 1, why: '«Está claro que» presenta un hecho como verdad: indicativo.', en: 'Marta: “It’s clear there isn’t money for all three projects.”' },
            { prompt: 'Diego: «Es fundamental que los mayores ___ a usar la banca en línea con seguridad».', options: ['aprendan', 'aprenden', 'aprender'], answer: 0, why: 'Valoración con otra persona (los mayores): subjuntivo. Sin «los mayores» sería «es fundamental aprender».', en: 'Diego: “It’s essential that older people learn to use online banking safely.”' },
            { prompt: 'Carmen: «Es verdad que la sala ___ bastante bien, pero las estanterías están rotas».', options: ['funcione', 'funcionar', 'funciona'], answer: 2, why: '«Es verdad que» concede un hecho que aceptas: indicativo.', en: 'Carmen: “It’s true that the room works quite well, but the shelves are broken.”' },
          ] },
        ] },
        { title: '¿Qué forma pide? · Which form does it need?', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'classify', title: 'Indicativo, subjuntivo o infinitivo', categories: [
            { id: 'ind', label: 'Indicativo · afirmo o pongo una condición real', tone: 'neutral' },
            { id: 'subj', label: 'Subjuntivo · niego, valoro o propongo', tone: 'blue' },
            { id: 'inf', label: 'Infinitivo · valoro en general', tone: 'violet' },
          ], items: [
            { text: 'Pienso que la votación ___ (ser) justa.', answer: 'ind', why: '«Pienso que» afirma una opinión: es justa.' },
            { text: 'No estoy segura de que el ayuntamiento nos ___ (dar) más dinero.', answer: 'subj', why: 'Certeza negada: no afirmas nada → dé.' },
            { text: 'Aunque el taller ___ (costar) mucho, ayuda a mucha gente.', answer: 'ind', why: 'Aunque + indicativo: aceptas un hecho real → cuesta.' },
            { text: 'Les recomiendo que ___ (leer) las tres propuestas antes del viernes.', answer: 'subj', why: 'Una recomendación para otras personas → lean.' },
            { text: 'Es importante ___ (escuchar) todas las opiniones.', answer: 'inf', why: 'Valoración general, sin una persona concreta → escuchar.' },
          ] },
        ] },
        { title: '¿Está bien? · Is it right?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'No creo que los niños necesitan más espacio.', ok: false, options: ['No creo que los niños necesitarán más espacio.', 'No creo los niños necesiten más espacio.', 'No creo que los niños necesiten más espacio.'], answer: 2, why: 'Opinión negada → subjuntivo (necesiten), y el «que» no se puede quitar.' },
            { sentence: 'Aunque la sala es pequeña, pero los niños están contentos.', ok: false, options: ['Aunque la sala es pequeña, así que los niños están contentos.', 'Aunque la sala sea pequeña, pero los niños están contentos.', 'Aunque la sala es pequeña, los niños están contentos.'], answer: 2, why: '«Aunque» ya marca la concesión: sin «pero» y sin «así que».' },
            { sentence: 'Si elegiremos la sala infantil, compraremos estanterías nuevas.', ok: false, options: ['Si elijamos la sala infantil, compraremos estanterías nuevas.', 'Si elegiríamos la sala infantil, compraremos estanterías nuevas.', 'Si elegimos la sala infantil, compraremos estanterías nuevas.'], answer: 2, why: 'Condición real: «si» + presente de indicativo; el futuro va en la consecuencia.' },
            { sentence: 'Como los sábados cerramos a las dos, los estudiantes van a otra biblioteca.', ok: true, why: 'Correcta: «como» con la causa al principio, y un solo conector.' },
            { sentence: 'Propongo que Rubén hace un horario de prueba.', ok: false, options: ['Propongo que Rubén haga un horario de prueba.', 'Propongo que Rubén hacer un horario de prueba.', 'Propongo de que Rubén haga un horario de prueba.'], answer: 0, why: 'Propones que otra persona haga algo: subjuntivo (haga), y sin «de».' },
          ] },
        ] },
        { title: 'Carmen y Rubén · Carmen and Rubén', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Chat después de la reunión · A chat after the meeting', lines: [
            { who: 'Rubén', text: 'Carmen, ¿qué vas a votar el viernes?' },
            { who: 'Carmen', text: 'Todavía no lo sé. No creo que el taller ___ mala idea, pero me preocupan los niños.', options: ['sea', 'es', 'ser'], answer: 0, why: '«No creo que» niega la opinión: subjuntivo.' },
            { who: 'Rubén', text: 'Te entiendo. ___ hay cuentacuentos con voluntarios, los niños también tendrán algo.', options: ['Así que', 'Si', 'Aunque'], answer: 1, why: 'Los cuentacuentos todavía no están decididos: es una condición real, «si» + presente.' },
            { who: 'Carmen', text: 'Sí, y los voluntarios no cobran, ___ casi todo el dinero puede ir al taller.', options: ['ya que', 'aunque', 'así que'], answer: 2, why: 'Sacas una consecuencia: no cobran → el dinero puede ir al taller.' },
            { who: 'Rubén', text: 'Exacto. Y si Diego da las clases los sábados, la biblioteca abre esa tarde. ___, los estudiantes también ganan.', options: ['En cambio', 'Aunque', 'Por eso'], answer: 2, why: 'Consecuencia de la frase anterior: «por eso». «En cambio» compararía dos cosas distintas.' },
            { who: 'Carmen', text: 'Bueno, ___ es el proyecto más caro, creo que voy a votar por el taller.', options: ['como', 'si', 'aunque'], answer: 2, why: 'Concedes un hecho real (es el más caro) y mantienes tu decisión: «aunque» + indicativo.' },
            { who: 'Rubén', text: '¡Genial! Es importante que mañana se lo ___ a Diego.', options: ['decir', 'digas', 'dices'], answer: 1, why: 'Valoración con otra persona (tú): «es importante que» + subjuntivo.' },
            { who: 'Carmen', text: 'Mejor se lo digo el viernes, en la votación.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'creo', 'que', 'sea', 'la', 'mejor', 'opción.'], accept: ['No creo que sea la mejor opción.'], en: 'I don’t think it’s the best option.' },
            { tiles: ['Aunque', 'es', 'caro,', 'yo', 'lo', 'elegiría.'], accept: ['Aunque es caro, yo lo elegiría.'], en: 'Although it’s expensive, I would choose it.' },
            { tiles: ['Si', 'votamos', 'hoy,', 'empezaremos', 'en', 'enero.'], accept: ['Si votamos hoy, empezaremos en enero.'], en: 'If we vote today, we’ll start in January.' },
            { tiles: ['Es', 'importante', 'que', 'todos', 'den', 'su', 'opinión.'], accept: ['Es importante que todos den su opinión.'], en: 'It’s important that everyone gives their opinion.' },
          ] },
        ] },
        { title: 'Transforma las ideas · Transform the ideas', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Con la estructura indicada · With the given structure', items: [
            { prompt: 'Creo que la sala infantil es lo más urgente.', instruction: 'Niega la opinión. Empieza con «No creo que».', accept: ['No creo que la sala infantil sea lo más urgente'] },
            { prompt: 'El dinero no alcanza para dos proyectos. Tenemos que elegir uno.', instruction: 'Une las ideas con «como» al principio.', accept: ['Como el dinero no alcanza para dos proyectos, tenemos que elegir uno', 'Como el dinero no alcanza para dos proyectos, tenemos que elegir solo uno'] },
            { prompt: 'El taller es caro. Yo lo elegiría por su utilidad.', instruction: 'Une las ideas con «aunque» al principio.', accept: ['Aunque el taller es caro, yo lo elegiría por su utilidad', 'Aunque el taller es caro, lo elegiría por su utilidad', 'Aunque es caro, yo elegiría el taller por su utilidad'] },
            { prompt: 'Votamos el viernes.', instruction: 'Conviértelo en una propuesta. Empieza con «Propongo que».', accept: ['Propongo que votemos el viernes'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige uno de los tres proyectos y lo defiende en tres frases: una opinión con «creo que», una opinión negada sobre otro proyecto con «no creo que» y una propuesta con «propongo que».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Carmen', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Carmen no puede ir a la votación · Carmen can’t make the vote', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué vota Carmen?). Segunda escucha: tu alumno levanta la mano cada vez que oye una parte del argumento: tesis, argumento, contraargumento, propuesta. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Apunta las partes del argumento de Carmen: tesis, argumentos, contraargumento y propuesta. (Note the parts of her argument.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Carmen', channel: 'MENSAJE DE VOZ · GRUPO DEL EQUIPO DE LA BIBLIOTECA', src: '/audio/grammar-live/427.mp3',
            before: 'Carmen no puede ir a la votación del viernes y manda un mensaje de voz al grupo del equipo. ¿Crees que sigue defendiendo la sala infantil o que ha cambiado de opinión? (Carmen can’t go to Friday’s vote and sends a voice message to the team group. Do you think she is still defending the children’s room, or has she changed her mind?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Carmen vota por el taller y pide que la sala infantil sea la prioridad del año que viene.', 'Carmen pide cancelar la votación del viernes.', 'Carmen sigue defendiendo la renovación de la sala infantil.'], answer: 0, why: '«Voy a votar por el taller digital… propongo que el año que viene sea nuestra prioridad».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Por qué no va a estar Carmen el viernes?', options: ['Tiene un curso fuera de la biblioteca.', 'Está de vacaciones.', 'Tiene que cuidar a su nieto.'], answer: 0, why: '«Como el viernes tengo un curso fuera de la biblioteca…».', en: 'Why won’t Carmen be there on Friday?' },
              { prompt: '¿Qué la hizo cambiar de opinión?', options: ['Los niños de la sala infantil le dieron la idea.', 'Una señora le pidió ayuda para pedir una cita médica en línea.', 'Diego le enseñó los portátiles nuevos.'], answer: 1, why: '«Una señora con su nieto… me pidió ayuda para pedir una cita médica en línea. Ahí lo vi claro».', en: 'What made her change her mind?' },
              { prompt: '¿Qué concede Carmen sobre el taller?', options: ['Que los portátiles duran poco.', 'Que es el proyecto más caro.', 'Que los mayores no van a venir.'], answer: 1, why: '«Es verdad que es el proyecto más caro, pero creo que es el más útil».', en: 'What does Carmen concede about the workshop?' },
              { prompt: '¿Qué pide al final?', options: ['Más dinero para la sala infantil este año.', 'Que alguien vote por ella.', 'Ayuda para organizar los cuentacuentos con voluntarios.'], answer: 2, why: '«Si alguien quiere ayudarme a organizarlos, que me escriba».', en: 'What does she ask for at the end?' },
            ],
            transcript: 'Hola, equipo, soy Carmen. [[Como|teal]] el viernes tengo un curso fuera de la biblioteca, les dejo mi opinión en este mensaje. Lo pensé mucho y voy a votar por el taller digital. [[Es verdad que|orange]] es el proyecto más caro, [[pero|orange]] [[creo que|blue]] es el más útil. Ayer vino a la sala infantil una señora con su nieto y me pidió ayuda para pedir una cita médica en línea. Ahí lo vi claro. [[Además|teal]], los portátiles van a servir también a los estudiantes. Eso sí, [[no creo que|blue]] la sala infantil pueda esperar mucho más, [[así que|teal]] [[propongo que|violet]] el año que viene sea nuestra prioridad. Y [[es importante que|blue]] los cuentacuentos con voluntarios empiecen pronto. [[Si alguien quiere|violet]] ayudarme a organizarlos, que me escriba. Gracias por escucharme, y ¡suerte con la votación!',
            reply: { teacher: 'Tú eres Carmen. Tu alumno es Diego y responde al mensaje: agradece el voto, concede una parte («es verdad que…») y acepta o discute la propuesta para el año que viene.', self: 'Responde a Carmen en voz alta como si fueras Diego: agradece su voto, concede algo con «es verdad que…, pero…» y di qué te parece su propuesta con «me parece bien que» + subjuntivo. (Answer as Diego.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu turno en la reunión', coach: 'Tesis, argumentos, contraargumento, propuesta. Thesis, arguments, counterargument, proposal.',
      steps: [
        { title: 'Defiende tu propuesta · Defend your proposal', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Marta y diriges la reunión: das la palabra, interrumpes a veces y defiendes la opción contraria. Tu alumno responde con las expresiones de la tarjeta. Cuando falta el modo correcto, tú repites su frase bien y tu alumno la repite.', self: 'Lee la pregunta, responde en voz alta con las expresiones de la tarjeta y, si quieres, escribe tu respuesta. Después compara con el ejemplo. (Answer aloud, then compare with the model.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué proyecto elegirías tú para la biblioteca? Di tu tesis y dos argumentos. · Which project would you choose? Give your thesis and two arguments.', followUps: ['¿A quién ayudaría más? (Who would it help most?)', '¿Por qué no los otros dos? (Why not the other two?)'], phrases: ['Yo [[elegiría|violet]]…, [[ya que|teal]]…', '[[Creo que|blue]]…; [[además|teal]], …', '[[Como|teal]]…, …'], hint: 'Tesis al principio; dos argumentos unidos con un conector de causa y uno de suma.', example: 'Yo elegiría abrir los sábados, ya que muchos estudiantes no tienen un lugar tranquilo en casa. Creo que es lo más justo; además, el sábado por la tarde no hay otra biblioteca abierta en el barrio.', next: 'Ahora, alguien no está de acuerdo.' },
            { q: 'Un compañero dice: «Abrir los sábados es tirar el dinero». Discrepa con cortesía. · A colleague says opening on Saturdays is throwing money away. Disagree politely.', followUps: ['¿Cuánta gente vendría? (How many people would come?)', '¿Qué dirías a Marta, que paga las horas extra? (What would you tell Marta?)'], phrases: ['Entiendo lo que dices, [[pero|orange]]…', '[[No creo que|blue]] + subjuntivo…', 'Yo no lo veo así: …'], hint: 'Primero muestras que escuchas; después niegas su idea con «no creo que» + subjuntivo.', example: 'Entiendo lo que dices, pero yo no lo veo así. No creo que sea tirar el dinero: en época de exámenes la sala de estudio se llena. Y no creo que haya muchas alternativas en el barrio.', next: 'Ahora, tu punto débil.', teacher: 'Si tu alumno dice «no creo que es», repites la frase con «sea» y la dice otra vez.' },
            { q: 'Toda propuesta tiene un punto débil. Reconoce el de tu proyecto y responde. · Every proposal has a weak point. Admit yours and answer it.', followUps: ['¿Cómo lo resolverías? (How would you solve it?)', '¿Es un problema grave? (Is it a serious problem?)'], phrases: ['[[Aunque|orange]] + indicativo, …', '[[Es verdad que|orange]]…, [[pero|orange]]…', '[[Tienes razón en que|orange]]…'], hint: 'Concedes con indicativo (es un hecho que aceptas) y no repites «pero» después de «aunque».', example: 'Es verdad que abrir los sábados cuesta dinero todo el año, pero no hace falta abrir todos los sábados. Aunque al principio vendrá poca gente, en época de exámenes la sala estará llena.', next: 'Ahora, las condiciones.' },
            { q: '¿Qué condiciones pones para que tu proyecto funcione? · What conditions would make your project work?', followUps: ['¿Quién se encarga? (Who is in charge?)', '¿Qué pasa si no funciona? (What if it doesn’t work?)'], phrases: ['[[Es importante que|blue]] + subjuntivo', '[[Propongo que|violet]] + subjuntivo', 'Es necesario + infinitivo'], hint: 'Con otra persona, subjuntivo («es importante que Rubén organice…»); en general, infinitivo («es necesario organizar…»).', example: 'Es importante que la biblioteca anuncie el horario en las redes y en los institutos. Propongo que Rubén y yo hagamos los sábados por turnos. Y es necesario revisar el plan después de tres meses.', next: 'Ahora, las consecuencias.' },
            { q: '¿Qué pasará si el equipo elige el taller? ¿Y si elige la sala infantil? · What will happen with each choice?', followUps: ['¿Qué opción tiene más riesgos? (Which option is riskier?)', '¿Y si no eligen nada? (And if they choose nothing?)'], phrases: ['[[Si elegimos|violet]]…, + futuro', '…; [[en cambio|orange]], si…', '…, [[así que|teal]]…'], hint: '«Si» + presente, nunca si + futuro. La consecuencia, en futuro o en presente.', example: 'Si elegimos el taller, los mayores aprenderán a hacer trámites solos. En cambio, si elegimos la sala infantil, el cambio será muy visible, pero llegará a menos gente. Las dos son buenas, así que la decisión no es fácil.', next: 'Por último, tu propia decisión.' },
            { q: 'Piensa en tu trabajo, tu escuela o tu comunidad: hay dinero para un solo proyecto. Defiende tu opción en un minuto. · Think of your workplace, school or community: one project only. Defend your option in one minute.', followUps: ['¿Quién estaría en contra? (Who would be against it?)', '¿Qué le responderías? (What would you answer?)', '¿Cómo votarían? (How would people vote?)'], phrases: ['**En primer lugar**, … [[además|teal]]…', '[[Es verdad que|orange]]…, [[pero|orange]]…', '[[Por eso|teal]], [[propongo que|violet]]…'], hint: 'Tesis → dos argumentos → contraargumento → conclusión con propuesta. Un conector de cada color.', example: 'En mi empresa yo elegiría una sala de descanso. En primer lugar, comemos en la mesa de trabajo; además, no hay ningún sitio tranquilo para hablar. Es verdad que perderíamos una sala de reuniones, pero casi nunca la usamos. Por eso, propongo que la transformemos este año.', teacher: 'Tú defiendes la postura contraria e interrumpes una vez con «Perdona que te interrumpa, pero…». Tu alumno responde con «Déjame terminar» y sigue con su argumento.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Marta, dirige la reunión, da la palabra y propone la votación; tú defiendes un proyecto y cometes un error de modo que tu alumno corrige.', self: 'Ahora tú diriges la reunión: haz las preguntas en voz alta y responde como Carmen, que al principio no está de acuerdo. (Now you chair the meeting and answer as Carmen.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu propuesta por escrito', coach: 'Un argumento completo en pocas líneas. A complete argument in a few lines.',
      steps: [
        { title: 'Un correo para la votación · An email before the vote', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos las cuatro partes del argumento y cada verbo después de «que»: ¿afirma, niega, valora o propone? Al final, tu alumno lee su propuesta en voz alta, como en la votación.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada verbo después de «que»: ¿indicativo o subjuntivo? ¿Por qué? (Check every verb after “que”.)' } },
          { kind: 'write', title: 'Propuesta para el viernes · Proposal for Friday', situation: 'Marta pide a cada miembro del equipo una propuesta corta antes de la votación del viernes. Escríbele un correo: defiende uno de los tres proyectos (o un proyecto para tu trabajo o tu comunidad) con un argumento completo. (Marta asks each team member for a short proposal before Friday’s vote. Write her an email defending one of the three projects, or a project for your own workplace or community, with a complete argument.)', task: [
            'Empieza con tu tesis: qué proyecto eliges y tu opinión con «creo que» o «me parece que». (Start with your thesis.)',
            'Da dos argumentos: una causa (como, ya que, puesto que) y una suma (además, incluso). (Give two arguments.)',
            'Reconoce un contraargumento con «aunque» o «es verdad que…, pero…» y responde. (Answer a counterargument.)',
            'Rechaza o matiza otra opción con «no creo que» o valora con «es importante que» + subjuntivo. (Use the subjunctive where needed.)',
            'Termina con una consecuencia (si…, así que, por eso) y una propuesta con «propongo que». (End with a proposal.)',
          ], starters: ['Hola, Marta:', 'Te mando mi propuesta para el viernes.', 'Yo elegiría…', 'Creo que…, ya que…', 'Es verdad que…, pero…', 'No creo que…', 'Si elegimos…,', 'Por eso, propongo que…', 'Un saludo,'],
            words: ['creo que', 'no creo que', 'es importante que', 'ya que', 'como', 'además', 'incluso', 'aunque', 'es verdad que', 'pero', 'en cambio', 'así que', 'por eso', 'si', 'propongo que'],
            model: 'Hola, Marta: Te mando mi propuesta para el viernes. **Yo elegiría** el taller digital para mayores. [[Creo que|blue]] es el proyecto más útil, [[ya que|teal]] muchos usuarios no saben pedir una cita médica ni hacer trámites en línea. [[Además|teal]], los portátiles durarán años e [[incluso|teal]] los estudiantes podrán usarlos. [[Es verdad que|orange]] es la opción más cara, [[pero|orange]] llega a más gente. La sala infantil necesita cambios, pero [[no creo que|blue]] sea urgente: las estanterías todavía se pueden arreglar. Eso sí, [[es importante que|blue]] los niños tengan actividades nuevas este año, [[así que|teal]] los cuentacuentos con voluntarios son una buena solución. [[Si elegimos|violet]] el taller, Diego podrá dar clases los sábados y la biblioteca abrirá esa tarde. [[Por eso|teal]], [[propongo que|violet]] votemos por el taller. Un saludo, Elisa.',
            minWords: 100,
            checks: [
              { label: 'Tu tesis con una opinión: creo que, me parece que (thesis)', pattern: '(?<!\\p{L})(?:creo|pienso|opino|me\\s+parece)\\s+que(?!\\p{L})|(?<!\\p{L})en\\s+mi\\s+opini[oó]n(?!\\p{L})', tip: 'Di qué defiendes al principio: «Creo que el taller es el proyecto más útil».' },
              { label: 'Una causa: como, ya que, puesto que, porque (cause)', pattern: '(?<!\\p{L})(?:como|ya\\s+que|puesto\\s+que|porque|dado\\s+que)(?!\\p{L})', tip: 'Justifica tu opinión: «…, ya que muchos usuarios no saben hacer trámites en línea».' },
              { label: 'Un contraargumento: aunque, es verdad que (concession)', pattern: '(?<!\\p{L})(?:aunque|es\\s+verdad\\s+que|es\\s+cierto\\s+que|tienes\\s+raz[oó]n\\s+en\\s+que|a\\s+pesar\\s+de)(?!\\p{L})', tip: 'Reconoce el punto débil: «Es verdad que es la opción más cara, pero llega a más gente».' },
              { label: 'Una expresión que pide subjuntivo: no creo que, es importante que… (subjunctive trigger)', pattern: '(?<!\\p{L})(?:no\\s+creo|no\\s+pienso|no\\s+me\\s+parece|es\\s+(?:importante|necesario|mejor|fundamental)|me\\s+parece\\s+bien)\\s+que(?!\\p{L})', tip: 'Niega o valora: «No creo que sea urgente», «Es importante que los niños tengan…».' },
              { label: 'Una consecuencia o condición: si, así que, por eso (consequence)', pattern: '(?<!\\p{L})(?:si|as[ií]\\s+que|por\\s+eso|por\\s+lo\\s+tanto)(?!\\p{L})', tip: 'Muestra qué pasará: «Si elegimos el taller, Diego podrá dar clases los sábados».' },
              { label: 'Una propuesta: propongo que, sugiero que (proposal)', pattern: '(?<!\\p{L})(?:propongo|sugiero|recomiendo)\\s+que(?!\\p{L})', tip: 'Cierra con una acción: «Por eso, propongo que votemos por el taller».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})no\\s+(?:creo|pienso)\\s+que\\s+(?:es|son|está|están|hay|tiene|tienen|va|van|puede|pueden|necesita|necesitan)(?!\\p{L})', why: 'Después de «no creo que» va subjuntivo: «no creo que **sea**», «no creo que **haya**», «no creo que **pueda**».' },
              { pattern: '(?<!\\p{L})aunque\\s[^.;:]*,\\s*pero(?!\\p{L})', why: '«Aunque» ya marca la concesión: no añadas «pero» en la otra parte.' },
              { pattern: '(?<!\\p{L})si\\s+(?:elegiremos|votaremos|abriremos|haremos|tendremos|compraremos|decidiremos)(?!\\p{L})', why: 'En una condición real, «si» va con presente: «si **elegimos**», no «si elegiremos».' },
              { pattern: '(?<!\\p{L})como\\s[^.;:]*,\\s*as[ií]\\s+que(?!\\p{L})', why: '«Como…, así que…» repite la misma relación: usa solo uno de los dos conectores.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What are you taking away today?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'OPINAR Y VALORAR', formula: 'creo que + indicativo · no creo que / es importante que + subjuntivo', example: 'Creo que es útil. / No creo que sea urgente.', caption: 'afirmas → indicativo; niegas o valoras → subjuntivo', en: 'assert → indicative; deny or judge → subjunctive' },
            { tone: 'teal', label: 'RAZONAR', formula: 'como (al principio) · ya que · así que · por eso · además · incluso', example: 'Como hay poco dinero, tenemos que elegir.', caption: 'una relación, un conector', en: 'one relation, one connector' },
            { tone: 'orange', label: 'CONCEDER Y DISCREPAR', formula: 'aunque + indicativo · es verdad que…, pero… · en cambio · no… sino', example: 'Aunque es caro, yo lo elegiría.', caption: 'reconoces al otro y después respondes', en: 'acknowledge the other side, then answer' },
            { tone: 'violet', label: 'PROPONER Y CONDICIONAR', formula: 'propongo que + subjuntivo · si + presente · yo elegiría', example: 'Si elegimos el taller, propongo que empecemos en enero.', caption: 'propuesta clara, consecuencias reales', en: 'a clear proposal, real consequences' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de elegir la forma, pregúntate qué haces. Si **afirmas** (creo que, es verdad que, aunque): indicativo. Si **niegas, valoras o propones** (no creo que, es importante que, propongo que): subjuntivo. Con **si** de condición real: presente. Y un argumento completo tiene cuatro partes: tesis, argumentos, contraargumento y conclusión.', en: 'Before choosing the form, ask yourself what you are doing. Asserting (creo que, es verdad que, aunque): indicative. Denying, judging or proposing (no creo que, es importante que, propongo que): subjunctive. With a real-condition “si”: present. And a complete argument has four parts: thesis, arguments, counterargument and conclusion.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'No pienso que la reunión ___ muy larga.', options: ['es', 'será', 'sea'], answer: 2, why: 'Opinión negada → subjuntivo.', en: 'I don’t think the meeting will be very long.' },
            { prompt: 'Me parece que Marta ___ la mejor solución.', options: ['tener', 'tiene', 'tenga'], answer: 1, why: '«Me parece que» afirma una opinión → indicativo.', en: 'I think Marta has the best solution.' },
            { prompt: '___ el local es pequeño, vamos a hacer la fiesta allí.', options: ['Así que', 'Ya que', 'Aunque'], answer: 2, why: 'Reconoces un obstáculo real y mantienes la decisión: «aunque» + indicativo.', en: 'Although the venue is small, we’re going to have the party there.' },
            { prompt: 'El presupuesto es limitado, ___ tenemos que elegir.', options: ['ya que', 'aunque', 'así que'], answer: 2, why: 'Consecuencia de la primera idea: «así que».', en: 'The budget is limited, so we have to choose.' },
            { prompt: 'Si ___ hoy, el proyecto empieza en enero.', options: ['decidimos', 'decidiremos', 'decidamos'], answer: 0, why: 'Condición real: «si» + presente de indicativo.', en: 'If we decide today, the project starts in January.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/walking.webp', coach: 'Ahora, en casa. Now, at home.', blocks: [
          { kind: 'lead', text: 'Cuatro compañeros de piso tienen un dinero común y deben decidir: ¿un sofá nuevo o una lavadora? Escribe sus frases con la estructura indicada.', en: 'Four flatmates have some shared money and must decide: a new sofa or a washing machine? Write their sentences with the given structure.' },
          { kind: 'rewrite', title: 'Sofá o lavadora · Sofa or washing machine', items: [
            { prompt: 'Creo que la lavadora es más urgente.', instruction: 'Niega la opinión. Empieza con «No creo que».', accept: ['No creo que la lavadora sea más urgente'] },
            { prompt: 'El sofá está roto. Tenemos que comprar uno nuevo.', instruction: 'Une las ideas con «así que».', accept: ['El sofá está roto, así que tenemos que comprar uno nuevo'] },
            { prompt: 'La lavadora es cara. Es más importante.', instruction: 'Une las ideas con «aunque» al principio.', accept: ['Aunque la lavadora es cara, es más importante', 'Aunque es cara, la lavadora es más importante'] },
            { prompt: 'Compramos el sofá en las rebajas.', instruction: 'Conviértelo en una propuesta. Empieza con «Propongo que».', accept: ['Propongo que compremos el sofá en las rebajas'] },
          ] },
        ] },
        { title: 'Ampliación · Del debate al texto formal', mascot: '/brand/mascot/portrait.webp', coach: 'Para ir un poco más lejos. To go a bit further.', blocks: [
          { kind: 'lead', text: 'Si la biblioteca envía su propuesta por escrito al ayuntamiento, el registro sube. **Dado que** (= ya que) presenta la causa; **no obstante** (= sin embargo) introduce un contraste; **por consiguiente** (= por lo tanto) saca la consecuencia; **en nuestra opinión** presenta la tesis de un grupo. Y un avance de B2: «**aunque** + subjuntivo» dice que algo no cambia la decisión, pase lo que pase.', en: 'If the library sends its proposal to the council in writing, the register goes up. “Dado que” (given that) gives the cause; “no obstante” (nevertheless) introduces a contrast; “por consiguiente” (consequently) draws the conclusion; “en nuestra opinión” states a group’s thesis. And a B2 preview: “aunque” + subjunctive means “even if”: whatever happens, the decision does not change.' },
          { kind: 'choice', title: 'Registro formal · Formal register', items: [
            { context: 'Carta oficial al ayuntamiento. (An official letter to the council.)', prompt: '___ el presupuesto es limitado, solicitamos un solo proyecto.', options: ['Dado que', 'Así que', 'Encima'], answer: 0, why: 'Causa al principio, en registro formal: «dado que». «Así que» introduce una consecuencia y «encima» es coloquial.', en: 'Given that the budget is limited, we are applying for a single project.' },
            { context: 'Carta oficial al ayuntamiento. (An official letter to the council.)', prompt: 'El taller tiene un coste alto. ___, ofrece un servicio a más de cien personas.', options: ['No obstante', 'Además de', 'Sino'], answer: 0, why: 'Contraste formal entre dos frases: «no obstante» (= sin embargo).', en: 'The workshop has a high cost. Nevertheless, it provides a service to more than a hundred people.' },
            { prompt: 'Solo para reconocer (B2): «Aunque el ayuntamiento no nos dé más dinero, abriremos los sábados». ¿Qué significa?', options: ['El ayuntamiento nos ha dado más dinero para los sábados.', 'Da igual si el ayuntamiento nos da más dinero o no: abriremos.', 'Solo abriremos si el ayuntamiento nos da más dinero.'], answer: 1, why: 'Con subjuntivo, «aunque» significa «even if»: la condición no cambia la decisión. Lo estudiarás en B2.', en: 'Recognition only: “Even if the council doesn’t give us more money, we’ll open on Saturdays.” What does it mean?' },
          ] },
          { kind: 'rewrite', title: 'Sube el registro · Raise the register', items: [
            { prompt: 'Creo que el taller es la mejor opción. Por eso lo proponemos.', instruction: 'Reescríbelo para la carta oficial: empieza con «En nuestra opinión» y usa «por consiguiente».', accept: ['En nuestra opinión, el taller es la mejor opción; por consiguiente, lo proponemos', 'En nuestra opinión, el taller es la mejor opción y, por consiguiente, lo proponemos'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Si no hay tiempo, se pasa directamente al siguiente paso. «Aunque» + subjuntivo solo se reconoce aquí; no se practica.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 128 · Imperfecto de subjuntivo: formas -ra y -se', text: 'Ya defiendes una propuesta en grupo: afirmas con indicativo, niegas, valoras y propones con presente de subjuntivo, y razonas con conectores. Pero después de la votación querrás contar lo que pasó: «Marta **propuso que votáramos** el viernes», «Carmen **no creía que vinieran** tantos mayores». Esas formas son el imperfecto de subjuntivo. En la clase 128 aprendes a formarlas (-ra y -se) para llevar al pasado todo lo que sabes.', en: 'You can now defend a proposal in a group: you assert with the indicative, deny, judge and propose with the present subjunctive, and reason with connectors. But after the vote you’ll want to tell people what happened: “Marta proposed that we vote on Friday”, “Carmen didn’t think so many older people would come.” Those forms are the imperfect subjunctive. In class 128 you learn to form them (-ra and -se) so you can take everything you know into the past.', href: '/sistema-verbal/preterito-imperfecto-subjuntivo', label: 'Ir a la clase 128' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué proyecto elegirías para tu barrio? Defiéndelo en cuatro frases: tesis, argumento, contraargumento y propuesta». Respuesta esperada: «creo que» + indicativo, «aunque» o «es verdad que…, pero», «propongo que» + subjuntivo. Tarea: escribir el correo de Escribir sobre un proyecto real.' },
        ] },
      ],
    },
  ],
};
