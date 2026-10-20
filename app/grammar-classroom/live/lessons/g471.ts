import type { LiveLesson } from '../types';

/**
 * Lesson 471 · C1 · Hipótesis remotas y contrafactualidad retórica (course unit G171).
 * Builds on G102 (si + presente), G131 (si + imperfecto de subjuntivo), G132–G134 (past
 * hypotheses, condicional compuesto), G135 (mixed conditionals, lesson 435, which already
 * previews «Si lo sé, no vengo» and de + haber + participio) and G136 (como si).
 * One scene runs through the class: Nuria Calvo, production director of a summer theatre
 * festival in a mountain village near Madrid, prepares the open-air premiere in the main
 * square on a stormy Saturday. Gabriel Ortega is the technical director; Valeria Ruiz, the
 * lead actress, flies in from Mexico City with a delayed flight; Mateo (lighting), Adela
 * (volunteers) and Sergio Lama (councillor for culture, usted) appear in Practicar and
 * Escribir. In the voice message Nuria (es-ES-ElviraNeural, tú) leaves Gabriel the storm plan.
 * Content: conditional connectors with subjunctive (en caso de que, a no ser que / a menos
 * que / salvo que, siempre que / siempre y cuando, con tal de que, como + subj. as warning or
 * threat) and the mood contrasts that change meaning (siempre que, como, salvo que + ind.);
 * degrees of probability (si + presente / si + imperfecto de subjuntivo / si llegara a);
 * llegar a in conditionals; colloquial rhetorical counterfactuals in the present («Si lo sé,
 * no vengo», «Si llego a saberlo…», «Si no llega a ser por ti…»), described as conversational
 * and frequent above all in Spain; ¡Ni que + imperfecto / pluscuamperfecto de subjuntivo!;
 * yo que tú / yo en tu lugar + condicional; si no fuera por / si no hubiera sido por; -ra in
 * the main clause (quisiera, hubiera sido mejor), never -se there; de + infinitivo only as a
 * preview of G172; como si only in passing (G136). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 471,
  level: 'C1',
  title: 'Hipótesis remotas y contrafactualidad retórica',
  subtitle: 'Poner condiciones, prever imprevistos y hablar de lo improbable o de lo que no pasó, también para quejarte, advertir o aconsejar.',
  legend: [
    { tone: 'blue', label: 'CONDICIÓN CON CONECTOR · en caso de que, a no ser que, siempre y cuando + subjuntivo' },
    { tone: 'violet', label: 'HIPÓTESIS REMOTA O IRREAL · si llegara a, si no fuera por, si no hubiera sido por' },
    { tone: 'orange', label: 'USO RETÓRICO · queja, advertencia o rechazo: si lo sé, no vengo; como no llegue; ¡ni que fuera!' },
    { tone: 'teal', label: 'CONSEJO, CORTESÍA Y RESULTADO · yo que tú + condicional; quisiera; hubiera sido mejor' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Más allá del «si»', coach: '¿Cuánto crees en lo que imaginas? How likely is what you imagine?',
      steps: [
        { title: 'Estreno con tormenta · A premiere under a storm', blocks: [
          { kind: 'lead', text: 'Nuria Calvo dirige la producción del festival de teatro de verano de un pueblo de la sierra de Madrid. Esta noche se estrena la obra al aire libre, en la plaza mayor, y la previsión da tormentas. Valeria Ruiz, la actriz protagonista, viene desde Ciudad de México y su vuelo lleva retraso. Gabriel Ortega, el jefe técnico, intenta que nadie pierda los nervios. Ya dominas «si + presente» y «si + imperfecto de subjuntivo». Hoy amplías el repertorio: otros conectores condicionales, hipótesis remotas y frases contrafactuales que en la conversación sirven para quejarse, advertir o rechazar algo.', en: 'Nuria runs production for a summer theatre festival in a mountain village near Madrid. Tonight’s open-air premiere is threatened by storms, and the lead actress’s flight from Mexico City is late. You already handle the basic si-clauses; today you widen the toolkit: other conditional connectors, remote hypotheses, and counterfactual phrases that people use in conversation to complain, warn or push back.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno ordena las tres de la más probable a la menos probable, y explica qué palabra cambia la probabilidad.', self: 'Lee las tres frases en voz alta y ordénalas de la más probable a la menos probable. ¿Qué palabra cambia la probabilidad? (Rank the three from most to least likely.)' } },
          { kind: 'compare', title: 'La misma lluvia, tres grados de probabilidad · The same rain, three degrees of likelihood', columns: [
            { tone: 'blue', label: 'SI + PRESENTE · posible, real', sentence: 'Si llueve, la función pasa al polideportivo.', idea: 'Nuria cuenta con la lluvia como una posibilidad real: es un plan.', en: 'An open, realistic condition: Nuria treats rain as a genuine possibility and states the plan.' },
            { tone: 'violet', label: 'SI + IMPERFECTO DE SUBJUNTIVO · poco probable', sentence: 'Si lloviera, la función pasaría al polideportivo.', idea: 'La misma situación futura, presentada como menos probable o solo imaginada.', en: 'Same future event, but the speaker distances herself from it: less likely, or simply imagined.' },
            { tone: 'violet', label: 'SI LLEGARA A + INFINITIVO · remoto', sentence: 'Si [[llegara a llover|violet]], la función pasaría al polideportivo.', idea: '«Llegar a» subraya que sería raro o extremo: «si, en el peor de los casos…».', en: 'Llegar a pushes the event further away: “if it ever came to that”, “if, by some chance, it actually rained”.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Gabriel está casi seguro de que el camión llegará, pero prevé lo peor: «Si el camión ___ a retrasarse, montaríamos los focos viejos».', options: ['llegara', 'llegaría', 'llegue'], answer: 0, why: '«Si llegara a…» presenta el retraso como algo remoto. Tras «si» condicional no van ni el condicional (llegaría) ni el presente de subjuntivo (llegue).', en: 'Gabriel thinks the delay is very unlikely but has a backup plan.' },
            { prompt: 'Para Nuria la tormenta es muy probable: «Si ___ antes de las diez, retrasamos el comienzo».', options: ['empezara a llover', 'empieza a llover', 'empezaría a llover'], answer: 1, why: 'Lo que Nuria ve como real y probable va con si + presente, y el resultado en presente o futuro.', en: 'Nuria sees the storm as very likely: which form fits her plan?' },
          ] },
        ] },
        { title: 'Otros conectores condicionales · Other conditional connectors', mascot: '/brand/mascot/studying.webp', coach: 'Cada conector añade un matiz. Each connector adds a nuance.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONECTOR + SUBJUNTIVO', question: '¿Quieres decir algo más preciso que «si»: una previsión, una excepción, una condición imprescindible?', en: 'Si is neutral. These connectors say what kind of condition you mean: a contingency plan, an exception, a requirement, a bare minimum, or a warning. All of them take the subjunctive when they introduce a condition.', formula: ['en caso de que · a no ser que · a menos que · salvo que', 'siempre que · siempre y cuando · con tal de que · como (al principio)', '+ presente de subjuntivo (futuro posible) o imperfecto de subjuntivo (hipótesis, marco pasado)'],
            meaning: 'A diferencia de «si», estos conectores **siempre** llevan subjuntivo cuando expresan condición, también con el presente: «si llueve», pero «en caso de que **llueva**». Si la oración principal va en condicional o en pasado, el subjuntivo pasa al imperfecto: «Aceptaría siempre que me **dejaran** elegir el horario».',
            examples: [
              { es: '[[En caso de que se vaya|blue]] la luz, hay linternas debajo de cada fila.', en: 'Should the power go out, there are torches under every row: a contingency plan.' },
              { es: 'Empezamos a las diez, [[a no ser que haya|blue]] cola en la entrada.', en: 'We start at ten unless there’s a queue at the entrance: an exception.' },
              { es: 'El ayuntamiento nos presta las sillas [[siempre y cuando se las devolvamos|blue]] el lunes.', en: 'The town hall lends us the chairs provided we return them on Monday: a requirement.' },
              { es: 'Valeria actuaría en cualquier escenario [[con tal de que la dejaran|blue]] estrenar esta noche.', en: 'Valeria would act on any stage as long as they let her open tonight: the one thing that matters to her.' },
            ],
            note: '«A no ser que», «a menos que» y «salvo que» equivalen a «si no»; por eso no se añade otro «no»: «No empezamos a menos que **llegue** Valeria». Con un sustantivo o un infinitivo: «en caso de lluvia», «en caso de duda»; «con tal de llegar a tiempo» (mismo sujeto).' },
          { kind: 'table', title: 'Qué añade cada conector · What each connector adds', head: ['Conector', 'Matiz · Nuance', 'Ejemplo'], rows: [
            ['**en caso de que**', 'previsión, plan B · in case, should…', 'En caso de que falte un actor, sale el suplente.'],
            ['**a no ser que / a menos que / salvo que**', 'excepción («si no») · unless', 'La función sigue a no ser que caigan rayos.'],
            ['**siempre que / siempre y cuando**', 'condición imprescindible · provided that', 'Puedes grabar el ensayo siempre que no uses flash.'],
            ['**con tal de que** (con tal de + infinitivo)', 'lo mínimo, lo único que importa · as long as', 'Me da igual dónde actuemos, con tal de que actuemos.'],
            ['**como** + subjuntivo (al principio)', 'advertencia o amenaza · if… (warning)', 'Como suene un móvil en el segundo acto, paro la función.'],
          ], note: '«Siempre y cuando» es algo más enfático que «siempre que» y solo tiene valor condicional. «Como» condicional va casi siempre al principio de la frase.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Adela, la coordinadora de voluntarios: «Mis voluntarios se quedan hasta el final, ___ la función termine después de la una».', options: ['con tal de que', 'a no ser que', 'siempre y cuando'], answer: 1, why: 'Se quedan hasta el final excepto en un caso: que la función termine muy tarde. Es una excepción: «a no ser que» (= si no).', en: 'Adela’s volunteers will stay to the end, except in one case.' },
            { prompt: 'Sergio, el concejal: «Les abrimos el colegio en caso de que el polideportivo ___ ocupado».', options: ['estará', 'está', 'esté'], answer: 2, why: '«En caso de que» siempre lleva subjuntivo: esté. El indicativo (está, estará) no es posible aquí.', en: 'The councillor offers a fallback: which mood follows en caso de que?' },
          ] },
        ] },
        { title: 'El modo cambia el sentido · Mood changes the meaning', mascot: '/brand/mascot/standing.webp', coach: 'Indicativo o subjuntivo: otra frase. Indicative or subjunctive: another sentence.', blocks: [
          { kind: 'compare', title: '«Siempre que»: cada vez o con la condición de · Every time or provided that', columns: [
            { tone: 'neutral', label: 'SIEMPRE QUE + INDICATIVO · cada vez que', sentence: 'Siempre que llueve, se cancela el mercadillo de la plaza.', idea: 'Una costumbre: todas las veces que llueve pasa lo mismo.', en: 'With the indicative it is temporal: “whenever, every time”.' },
            { tone: 'blue', label: 'SIEMPRE QUE + SUBJUNTIVO · con la condición de que', sentence: 'Puedes ensayar en la plaza [[siempre que no haya|blue]] mercadillo.', idea: 'Una condición: solo si no hay mercadillo.', en: 'With the subjunctive it is usually a condition, “provided that”. (It can also mean “whenever” about the future: Siempre que vengas, tendrás entrada.)' },
          ] },
          { kind: 'compare', title: '«Como»: causa o advertencia · Cause or warning', columns: [
            { tone: 'neutral', label: 'COMO + INDICATIVO · causa', sentence: 'Como no llegó el técnico, ensayamos sin sonido.', idea: 'Un hecho: el técnico no llegó, y por eso ensayamos sin sonido.', en: 'With the indicative, como gives a reason: “since, because”.' },
            { tone: 'orange', label: 'COMO + SUBJUNTIVO · condición con advertencia', sentence: '[[Como no llegue|orange]] el técnico, ensayamos sin sonido.', idea: 'Algo que todavía no ha pasado, dicho como aviso o amenaza.', en: 'With the subjunctive it is a condition with a warning or threat: “if he doesn’t turn up, (watch out)…”. Very common in speech.' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Salvo que» con indicativo · Salvo que with the indicative', text: 'Con indicativo, «salvo que» no es una condición: significa «excepto el hecho de que» y presenta algo que pasó. «Todo salió bien, **salvo que** el técnico **llegó** tarde». Con subjuntivo es una excepción posible: «Todo saldrá bien, **salvo que** el técnico **llegue** tarde».', en: 'With the indicative, salvo que means “except for the fact that” and reports something real; with the subjunctive it means “unless” and introduces a possible exception.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nuria a Valeria: «___ vuelvas a desaparecer sin avisar antes de un estreno, te mando a la gira de invierno sola».', options: ['Siempre que', 'Como', 'Si'], answer: 1, why: 'Advertencia medio en broma con presente de subjuntivo: «como» + subjuntivo. «Si» no admite presente de subjuntivo y «siempre que» no suena a amenaza.', en: 'Nuria jokingly warns Valeria. Which connector takes the subjunctive here?' },
            { prompt: '«Siempre que viene al pueblo, Valeria come en el mismo restaurante». ¿Qué significa?', options: ['Quizá venga y coma allí.', 'Solo come allí si viene.', 'Cada vez que viene, come allí.'], answer: 2, why: 'Con indicativo, «siempre que» es temporal: «cada vez que». Habla de una costumbre.', en: 'What does siempre que + indicative mean here?' },
          ] },
        ] },
        { title: 'Lo remoto y lo que no pasó · The remote and what never happened', mascot: '/brand/mascot/portrait.webp', coach: 'Del registro coloquial al cuidado. From casual to careful.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'LLEGAR A EN LA CONDICIÓN', question: '¿Quieres presentar algo como muy improbable, o quejarte de algo que ya pasó?', en: 'In an if-clause, llegar a + infinitive means “if it actually came to that, if by any chance”. In the present it can also refer to the past in colloquial speech: Si llego a saberlo… = had I known.', formula: ['si + llegar a (presente o imperfecto de subjuntivo) + infinitivo', 'si llegas a ver… · si llegara a pasar… · si llego a saberlo… (coloquial, pasado)'],
            meaning: 'Con «llegar a», la condición se presenta como **poco esperable** o **extrema**. En presente, sobre el futuro, significa «si por casualidad»; en imperfecto de subjuntivo, «si, en el peor de los casos». En la conversación, «si llego a saberlo» habla del **pasado**: «si lo hubiera sabido».',
            examples: [
              { es: '[[Si llegas a ver|violet]] a Valeria antes que yo, dile que la espero en el camerino.', en: 'If you happen to see Valeria before I do, tell her I’m waiting in the dressing room.' },
              { es: '[[Si llegara a suspenderse|violet]] la función, devolveríamos el dinero de las entradas.', en: 'If the show ever had to be called off, we would refund the tickets.' },
              { es: '[[Si llego a saber|orange]] que el vuelo venía con retraso, la traigo el jueves.', en: 'Colloquial: had I known the flight would be late, I’d have brought her over on Thursday.' },
            ],
            note: 'En el registro cuidado, la misma queja se dice con «si lo hubiera sabido, la habría traído». La forma con «de» («de haberlo sabido») la estudias en la clase 172; hoy solo la reconoces.' },
          { kind: 'table', title: 'Una queja contrafactual en tres registros · A counterfactual complaint in three registers', head: ['Coloquial (presente)', 'Estándar', 'Cuidado o escrito'], rows: [
            ['[[Si lo sé, no vengo.|orange]]', 'Si lo hubiera sabido, no habría venido.', 'De haberlo sabido, no habría venido.'],
            ['[[Si llego a saberlo|orange]], no acepto.', 'Si lo hubiera sabido, no hubiera aceptado.', 'De haberlo sabido, no habría aceptado.'],
            ['[[Si no llega a ser por ti|orange]], me pierdo.', 'Si no hubiera sido por ti, me habría perdido.', 'De no haber sido por ti, me habría perdido.'],
          ], note: 'En la columna coloquial, el **presente de indicativo** de las dos partes habla de un pasado que no fue. Es propio de la conversación, sobre todo en España, y suele decirse en primera persona, como queja o en broma. No lo uses en un texto formal.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Gabriel, después de tres horas de ensayo bajo el sol: «¡Si lo sé, me traigo un sombrero!». ¿Qué quiere decir?', options: ['Que, si lo hubiera sabido, se habría traído un sombrero.', 'Que sabe dónde hay un sombrero.', 'Que mañana se traerá un sombrero.'], answer: 0, why: 'Presente con valor de pasado irreal: una queja coloquial sobre algo que ya pasó.', en: 'Gabriel complains after a long rehearsal in the sun. What does he mean?' },
            { prompt: '¿Qué versión es adecuada para el informe final del festival?', options: ['Si llego a saber el coste, no alquilo la carpa.', 'Si lo sé, no alquilo la carpa.', 'De haber conocido el coste, no habríamos alquilado la carpa.'], answer: 2, why: 'En un informe, la versión cuidada: de + haber + participio (o si + hubiera) y condicional compuesto. Las otras dos son coloquiales.', en: 'Which version suits a written report?' },
          ] },
        ] },
        { title: 'Rechazar, aconsejar, agradecer · Push back, advise, thank', mascot: '/brand/mascot/speaking.webp', coach: 'Fórmulas que usa cualquier hablante. Phrases every speaker uses.', blocks: [
          { kind: 'concept', tone: 'orange', label: '¡NI QUE + SUBJUNTIVO!', question: '¿Quieres rechazar una exigencia o una reacción exagerada con una exclamación?', en: '¡Ni que…! is an exclamation meaning “anyone would think…!”, “it’s not as if…!”: it rejects an assumption that the situation implies. It takes the imperfect subjunctive (same time) or the pluperfect (earlier).', formula: ['¡Ni que + imperfecto de subjuntivo!  (algo simultáneo)', '¡Ni que + pluscuamperfecto de subjuntivo!  (algo anterior)'],
            meaning: 'La exclamación rechaza la idea que haría lógica la situación: «¿Me pides que trabaje gratis el domingo? [[¡Ni que fuera|orange]] millonario!» (no lo soy, así que no tiene sentido). Siempre en subjuntivo pasado, aunque hablemos del presente.',
            examples: [
              { es: '¿Doce focos más? [[¡Ni que fuéramos|orange]] a montar un concierto de rock!', en: 'Twelve more spotlights? Anyone would think we were putting on a rock concert!' },
              { es: '¡Qué cara traes! [[¡Ni que hubieras visto|orange]] un fantasma en el camerino!', en: 'Look at your face! Anyone would think you’d seen a ghost in the dressing room!' },
            ],
            note: 'No confundas con «como si» (clase 136), que compara dentro de una frase: «Habla **como si fuera** la directora». «¡Ni que fuera la directora!» es una exclamación que protesta.' },
          { kind: 'table', title: 'Otras piezas de hoy · Other pieces for today', head: ['Fórmula', 'Para qué · What for', 'Ejemplo'], rows: [
            ['[[yo que tú|teal]] / [[yo en tu lugar|teal]] + condicional', 'aconsejar · if I were you', 'Yo que tú, llamaría a Valeria ahora mismo. Yo en tu lugar, no habría aceptado ese horario.'],
            ['[[si no fuera por|violet]] + sustantivo', 'agradecer o explicar el presente · if it weren’t for', 'Si no fuera por los voluntarios, no podríamos hacer el festival.'],
            ['[[si no hubiera sido por|violet]] + sustantivo', 'lo mismo sobre el pasado · if it hadn’t been for', 'Si no hubiera sido por Adela, el público no habría encontrado sus asientos.'],
            ['[[quisiera|teal]] · [[hubiera sido mejor|teal]]', '-ra en la oración principal: cortesía, lamento', 'Quisiera hablar con el concejal. Hubiera sido mejor ensayar ayer.'],
          ], note: 'Tras «yo que tú» no va verbo conjugado («*yo que tú fueras»): la fórmula ya equivale a «si yo fuera tú». En la oración principal, «quisiera» (= querría, más cortés; también «debiera», «pudiera») y «hubiera + participio» (= habría + participio) son correctos; la forma en -se no se usa ahí: «quisiera», no «quisiese».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Valeria: «¿Ensayar otra vez la escena final a medianoche? ¡Ni que ___ aprendido el texto ayer!».', options: ['había', 'hubiera', 'habría'], answer: 1, why: '¡Ni que + pluscuamperfecto de subjuntivo!: rechaza la idea de que lo aprendió ayer (algo anterior). «Habría» y «había» no van tras «ni que».', en: 'Valeria protests: anyone would think she had only learnt her lines yesterday.' },
            { prompt: 'Gabriel a Nuria: «Yo en tu lugar, ___ el estreno media hora».', options: ['retrasaría', 'retrasase', 'retrasara'], answer: 0, why: '«Yo en tu lugar» va con condicional: retrasaría. En la oración principal, la forma en -ra solo sustituye al condicional con unos pocos verbos (quisiera, debiera, pudiera) y con hubiera + participio.', en: 'Gabriel gives advice: which form follows yo en tu lugar?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Conector, modo y registro. Connector, mood and register.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: el conector, el modo o el registro. Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿el conector, el modo o el registro? Toca para ver la corrección. (Is it the connector, the mood or the register?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'En caso de que llueve, pasamos al polideportivo.', right: 'En caso de que llueva, pasamos al polideportivo.', why: 'A diferencia de «si», «en caso de que» lleva siempre subjuntivo, también cuando la situación es probable.' },
            { wrong: 'No empezamos a menos que no llegue Valeria.', right: 'No empezamos a menos que llegue Valeria.', why: '«A menos que» ya significa «si no»: el segundo «no» invierte el sentido.' },
            { wrong: 'Como no vienes al ensayo, te quedas sin papel.', right: 'Como no vengas al ensayo, te quedas sin papel.', why: 'Para advertir o amenazar, «como» lleva subjuntivo. Con indicativo, «como» expresa causa (un hecho).' },
            { wrong: 'Siempre y cuando me avisas, te guardo una entrada.', right: 'Siempre y cuando me avises, te guardo una entrada.', why: '«Siempre y cuando» solo es condicional y lleva siempre subjuntivo.' },
            { wrong: 'Si no sería por Gabriel, el estreno sería un caos.', right: 'Si no fuera por Gabriel, el estreno sería un caos.', why: 'Tras «si» condicional nunca va el condicional: si no fuera por…' },
            { wrong: '¡Ni que era la primera vez que montamos una obra!', right: '¡Ni que fuera la primera vez que montamos una obra!', why: '«¡Ni que…!» lleva imperfecto de subjuntivo, aunque hable del presente.' },
            { wrong: 'Quisiese pedirle un favor, señor concejal.', right: 'Quisiera pedirle un favor, señor concejal.', why: 'En la oración principal, la forma de cortesía es «quisiera»; la forma en -se no se usa ahí.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mateo: «Te dejo mi linterna ___ me la devuelvas antes de las once».', options: ['siempre que', 'como', 'a no ser que'], answer: 0, why: 'Es una condición imprescindible: «siempre que» + subjuntivo. «A no ser que» invertiría el sentido (te la dejo excepto si me la devuelves).', en: 'Mateo lends his torch on one condition.' },
            { prompt: '«Si no ___ por la lona que trajo Adela, se habrían mojado todos los trajes».', options: ['hubiera sido', 'sería', 'habría sido'], answer: 0, why: 'Agradecimiento sobre el pasado: si no hubiera sido por + sustantivo, con resultado en condicional compuesto. Tras «si» no va el condicional.', en: 'Thanks to Adela’s tarpaulin, the costumes stayed dry.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno pone una condición real de su trabajo con «siempre y cuando», hace una advertencia con «como» y protesta por algo con «¡Ni que…!».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Sábado por la mañana', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'En la plaza · In the square', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Gabriel y tu alumno es Nuria. Después tu alumno toca cada expresión marcada y explica si pone una condición, imagina algo remoto, se queja o aconseja.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿pone una condición, imagina algo remoto, se queja o aconseja? (Condition, remote hypothesis, complaint or advice?)' } },
          { kind: 'explore', title: 'Previsión de tormenta', setting: 'Sábado, once de la mañana. Nuria y Gabriel revisan el escenario en la plaza mayor; el estreno es a las diez de la noche. Se tratan de tú. (Saturday morning: Nuria and Gabriel check the stage in the main square; the premiere is at 10 p.m.)', lines: [
            { who: 'Gabriel', text: 'Nuria, ¿has visto la previsión? Dan un cuarenta por ciento de tormenta para esta noche.', en: 'Nuria, have you seen the forecast? There’s a forty per cent chance of a storm tonight.' },
            { who: 'Nuria', text: 'La he visto. [[En caso de que llueva|blue]], pasamos la función al polideportivo; ya lo he hablado con el concejal.', en: 'I have. If it rains, we move the show to the sports hall; I’ve already sorted it with the councillor.' },
            { who: 'Gabriel', text: '¿Y nos lo deja así, sin más?', en: 'And he’s just letting us have it, no strings attached?' },
            { who: 'Nuria', text: '[[Siempre y cuando lo dejemos|blue]] como estaba, sí. [[A no ser que haya|blue]] partido de baloncesto, claro.', en: 'As long as we leave it as we found it, yes. Unless there’s a basketball game, of course.' },
            { who: 'Gabriel', text: '¿Un partido un sábado a las diez de la noche? [[¡Ni que estuviéramos|orange]] en la final de la liga!', en: 'A game on a Saturday at ten at night? Anyone would think it was the league final!' },
            { who: 'Nuria', text: 'Tú ríete. [[Si llega a llover|violet]] en mitad del segundo acto, no sé qué hacemos con doscientas personas en la plaza.', en: 'Go on, laugh. If it actually starts raining halfway through the second act, I don’t know what we’ll do with two hundred people in the square.' },
            { who: 'Gabriel', text: 'Tranquila. Adela tiene a veinte voluntarios preparados. [[Si no fuera por|violet]] ellos, estaría más nervioso que tú.', en: 'Relax. Adela has twenty volunteers ready. If it weren’t for them, I’d be more nervous than you.' },
            { who: 'Nuria', text: 'Lo que me preocupa es Valeria: su vuelo viene con retraso. [[Como no llegue|orange]] antes de las ocho, no ensayamos con luces.', en: 'What worries me is Valeria: her flight is delayed. If she isn’t here by eight, we won’t get a lighting rehearsal.' },
            { who: 'Gabriel', text: '[[Yo que tú|teal]], la llamaría ya. Y, [[si llegara a retrasarse|violet]] más, le pediría al chófer que la esperara en la terminal.', en: 'If I were you, I’d call her now. And if she were delayed even further, I’d ask the driver to wait for her at the terminal.' },
            { who: 'Nuria', text: 'Ya la he llamado. [[Hubiera sido mejor|teal]] traerla el jueves, como decías tú. Y el técnico de sonido no llega hasta las seis… [[Si lo sé, no acepto|orange]] cambiar la fecha del estreno.', en: 'I already have. It would have been better to bring her over on Thursday, like you said. And the sound technician doesn’t arrive until six… Had I known, I’d never have agreed to move the premiere.' },
            { who: 'Gabriel', text: 'Venga, que va a salir bien. Te ayudo con lo que haga falta [[con tal de que|blue]] dejes de mirar al cielo cada cinco minutos.', en: 'Come on, it’ll be fine. I’ll help with whatever you need, as long as you stop looking at the sky every five minutes.' },
          ], notes: {
            'En caso de que llueva': 'Plan B: «en caso de que» + presente de subjuntivo. Con «si» sería «si llueve».',
            'Siempre y cuando lo dejemos': 'Condición imprescindible del concejal: siempre y cuando + subjuntivo (dejemos).',
            'A no ser que haya': 'Excepción: «a no ser que» = si no. Lleva subjuntivo: haya, no «hay».',
            '¡Ni que estuviéramos': 'Rechazo con humor: no estamos en una final, así que no habrá partido. ¡Ni que + imperfecto de subjuntivo!',
            'Si llega a llover': '«Llegar a» en presente: Nuria habla del futuro y subraya el peor caso, «si de verdad llueve».',
            'Si no fuera por': 'Si no fuera por + sustantivo o pronombre (ellos): gracias a los voluntarios, Gabriel está tranquilo ahora.',
            'Como no llegue': 'Advertencia: «como» + presente de subjuntivo, al principio de la frase. Valeria todavía no ha llegado.',
            'Yo que tú': 'Consejo: «yo que tú» = si yo fuera tú, y después condicional (llamaría).',
            'si llegara a retrasarse': 'Hipótesis remota: si llegara a + infinitivo. Gabriel no cree que pase, pero lo prevé.',
            'Hubiera sido mejor': 'Lamento con -ra en la oración principal: hubiera sido = habría sido. Es estándar.',
            'Si lo sé, no acepto': 'Contrafactual retórico coloquial: presente con sentido de «si lo hubiera sabido, no habría aceptado». Frecuente sobre todo en España.',
            'con tal de que': 'Lo mínimo que pide Gabriel: con tal de que + subjuntivo (dejes). Sujeto distinto, por eso «de que».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Con qué condición presta el concejal el polideportivo?', options: ['Que lo dejen como estaba.', 'Que la función termine antes de las doce.', 'Que paguen el alquiler.'], answer: 0, why: '«Siempre y cuando lo dejemos como estaba».', en: 'On what condition does the councillor lend the sports hall?' },
            { prompt: '¿Por qué se ríe Gabriel del partido de baloncesto?', options: ['Porque le parece muy improbable un partido a esa hora.', 'Porque el polideportivo está cerrado.', 'Porque no le gusta el baloncesto.'], answer: 0, why: '«¡Ni que estuviéramos en la final de la liga!»: rechaza la idea de un partido un sábado a las diez de la noche.', en: 'Why does Gabriel laugh at the idea of a basketball game?' },
            { prompt: '¿De qué se arrepiente Nuria?', options: ['De haber elegido la plaza.', 'De haber contratado a Valeria.', 'De no haber traído a Valeria el jueves y de haber cambiado la fecha.'], answer: 2, why: '«Hubiera sido mejor traerla el jueves» y «Si lo sé, no acepto cambiar la fecha del estreno».', en: 'What does Nuria regret?' },
          ] },
        ] },
        { title: 'Mensajes desde el aeropuerto · Messages from the airport', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Valeria y Nuria, a las cuatro de la tarde · Valeria and Nuria, at 4 p.m.', lines: [
            { who: 'Valeria', text: '¡Acabo de aterrizar! Llego al pueblo a las siete, a no ser que ___ mucho tráfico en la salida de Madrid.', options: ['haya', 'habrá', 'hay'], answer: 0, why: '«A no ser que» introduce una excepción y lleva subjuntivo: haya.' },
            { who: 'Nuria', text: '¡Por fin! ___ de que te retrases, ensayamos primero sin ti la escena del baile.', options: ['Siempre', 'En caso', 'Con tal'], answer: 1, why: 'Plan B ante un posible retraso: «en caso de que» + subjuntivo.' },
            { who: 'Valeria', text: 'Perfecto. Hago lo que haga falta con tal de ___ el ensayo con luces.', options: ['que no me pierda', 'no me perdiera', 'no perderme'], answer: 2, why: 'El sujeto es el mismo (yo hago, yo no me pierdo): con tal de + infinitivo.' },
            { who: 'Nuria', text: '¡Si llego a saber que tu vuelo venía con este retraso, te ___ un billete para el jueves!', options: ['compre', 'compro', 'compraría'], answer: 1, why: 'Fórmula coloquial: «si llego a saber…» se completa también en presente (te compro). En registro cuidado: «si lo hubiera sabido, te habría comprado…».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué condiciones pones tú para aceptar un plan de última hora?». Tu alumno responde con «siempre y cuando…» y «a no ser que…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Elige conector, modo y registro. Choose connector, mood and register.',
      steps: [
        { title: 'Antes del estreno · Before the premiere', blocks: [
          { kind: 'choice', items: [
            { context: 'Sergio, el concejal, habla con Nuria de usted. (The councillor addresses Nuria formally.)', prompt: 'Puede usar el polideportivo siempre que sus técnicos ___ antes de la una.', options: ['terminarán', 'terminen', 'terminan'], answer: 1, why: '«Siempre que» con valor de condición lleva subjuntivo: terminen. Con indicativo significaría «cada vez que».', en: 'The councillor sets a requirement for using the sports hall.' },
            { context: 'Adela habla de sus voluntarios. (Adela talks about her volunteers.)', prompt: 'Mis voluntarios harían cualquier cosa con tal de ___ la obra gratis.', options: ['que vean', 'vieran', 'ver'], answer: 2, why: 'El sujeto es el mismo (ellos harían, ellos verían): con tal de + infinitivo.', en: 'Her volunteers would do anything to see the play for free.' },
            { context: 'Gabriel deja instrucciones a un voluntario. (Gabriel leaves instructions.)', prompt: 'Si ___ a fallar el generador, usa el de reserva que está en la furgoneta.', options: ['llegue', 'llegaría', 'llegara'], answer: 2, why: 'Hipótesis remota: si llegara a + infinitivo. Tras «si» no van el presente de subjuntivo ni el condicional.', en: 'If the generator should fail, use the spare one in the van.' },
            { context: 'Mateo pide doce focos más. (Mateo asks for twelve more spotlights.)', prompt: 'Nuria: «¿Doce más? ¡Ni que ___ el presupuesto de una ópera!».', options: ['tendríamos', 'tenemos', 'tuviéramos'], answer: 2, why: '«¡Ni que…!» lleva imperfecto de subjuntivo: tuviéramos. Rechaza la idea de que el presupuesto sea enorme.', en: 'Nuria refuses: anyone would think they had an opera budget.' },
            { context: 'Valeria duda si salir a escena con fiebre. (Valeria wonders whether to perform with a temperature.)', prompt: 'Su compañera le dice: «___, iría al médico antes de la función».', options: ['Ni que tú', 'Como tú', 'Yo que tú'], answer: 2, why: 'Consejo: «yo que tú» + condicional. «Ni que» es una exclamación de rechazo y «como tú» no da un consejo.', en: 'Her colleague advises her to see a doctor first.' },
          ] },
        ] },
        { title: '¿Qué hace cada frase? · What is each sentence doing?', blocks: [
          { kind: 'classify', title: 'Clasifica según la intención · Sort by intention', categories: [
            { id: 'cond', label: 'CONDICIÓN CON CONECTOR', tone: 'blue' },
            { id: 'remota', label: 'HIPÓTESIS REMOTA O IRREAL', tone: 'violet' },
            { id: 'retorica', label: 'QUEJA, ADVERTENCIA O RECHAZO', tone: 'orange' },
            { id: 'consejo', label: 'CONSEJO O CORTESÍA', tone: 'teal' },
          ], items: [
            { text: 'Les dejamos las sillas siempre y cuando nos las devuelvan el lunes.', answer: 'cond', why: 'Condición imprescindible con «siempre y cuando».' },
            { text: 'Si llegaran a cancelar el festival, el pueblo perdería mucho dinero.', answer: 'remota', why: '«Si llegaran a…»: una posibilidad que se ve como muy lejana.' },
            { text: '¡Ni que le pagaran por quejarse!', answer: 'retorica', why: 'Exclamación que rechaza una actitud: se queja como si cobrara por ello.' },
            { text: 'Yo en tu lugar, no pondría los focos tan cerca del público.', answer: 'consejo', why: '«Yo en tu lugar» + condicional: un consejo.' },
            { text: 'Como vuelva a sonar un móvil en el segundo acto, paro la función.', answer: 'retorica', why: '«Como» + subjuntivo: advertencia o amenaza.' },
            { text: 'En caso de que falte algún voluntario, Adela tiene una lista de suplentes.', answer: 'cond', why: 'Previsión, plan B: «en caso de que» + subjuntivo.' },
            { text: 'Si no hubiera sido por la lona, se habrían mojado los trajes.', answer: 'remota', why: 'Hipótesis irreal sobre el pasado: «si no hubiera sido por» + sustantivo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mateo monta los focos a las cinco, salvo que el camión llega tarde.', ok: false, options: ['Mateo monta los focos a las cinco, salvo que el camión llegaría tarde.', 'Mateo monta los focos a las cinco, salvo que el camión no llegue tarde.', 'Mateo monta los focos a las cinco, salvo que el camión llegue tarde.'], answer: 2, why: 'Es una excepción posible: «salvo que» + subjuntivo (llegue). Con indicativo significaría «excepto el hecho de que», algo que ya pasó, y añadir «no» invierte el sentido.' },
            { sentence: 'Si llegaras a ver a Sergio, dile que necesitamos más sillas.', ok: true, why: 'Correcta: hipótesis poco probable (si llegaras a ver) y una petición en imperativo.' },
            { sentence: 'Yo que tú, habría pedido un segundo generador.', ok: true, why: 'Correcta: «yo que tú» con condicional compuesto, para un consejo sobre algo que ya no tiene remedio.' },
            { sentence: 'Te presto mi coche con tal de que me lo devuelves con el depósito lleno.', ok: false, options: ['Te presto mi coche con tal de devolvérmelo con el depósito lleno.', 'Te presto mi coche con tal de que me lo devuelvas con el depósito lleno.', 'Te presto mi coche con tal de que me lo devolverás con el depósito lleno.'], answer: 1, why: '«Con tal de que» lleva subjuntivo (devuelvas). «Con tal de + infinitivo» solo sirve si el sujeto es el mismo, y aquí no lo es.' },
            { sentence: 'Si no hubiera sido por Adela, el público no encontraría su sitio anoche.', ok: false, options: ['Si no hubiera sido por Adela, el público no encontrara su sitio anoche.', 'Si no habría sido por Adela, el público no habría encontrado su sitio anoche.', 'Si no hubiera sido por Adela, el público no habría encontrado su sitio anoche.'], answer: 2, why: '«Anoche»: el resultado es pasado, condicional compuesto (habría encontrado). Tras «si» no va el condicional.' },
            { sentence: 'Como el técnico no llegue a las seis, ensayamos sin sonido.', ok: true, why: 'Correcta: «como» + presente de subjuntivo al principio de la frase, con valor de advertencia.' },
          ] },
        ] },
        { title: 'Problemas con el camión · Trouble with the truck', blocks: [
          { kind: 'chat-fill', title: 'Gabriel y Mateo, a las seis de la tarde · Gabriel and Mateo, at 6 p.m.', lines: [
            { who: 'Mateo', text: 'He llegado, pero el camión de los focos sigue en la autopista. ___ que llegue antes de las ocho, no da tiempo a programar las luces.', options: ['Siempre', 'A no ser', 'En caso de'], answer: 1, why: 'Excepción: no da tiempo, salvo en un caso. «A no ser que» + subjuntivo.' },
            { who: 'Gabriel', text: '¿Otra vez? ¡Ni que ___ la primera gira que hacemos con esa empresa!', options: ['fuera', 'era', 'sería'], answer: 0, why: '«¡Ni que…!» lleva imperfecto de subjuntivo: fuera.' },
            { who: 'Mateo', text: 'Yo que tú, ___ ahora mismo a la empresa y pediría otro camión.', options: ['llamaría', 'llamara', 'llame'], answer: 0, why: '«Yo que tú» va con condicional, como «pediría» en la misma frase.' },
            { who: 'Gabriel', text: 'Ya. Y si no ___ por ti, esta mañana nadie habría revisado los cables.', options: ['hubiera sido', 'habría sido', 'sería'], answer: 0, why: 'Agradecimiento sobre el pasado: si no hubiera sido por + persona. Tras «si» no va el condicional.' },
            { who: 'Mateo', text: 'Tranquilo. En caso de que el camión no ___, tenemos los focos viejos del ayuntamiento.', options: ['llegue', 'llega', 'llegará'], answer: 0, why: '«En caso de que» siempre con subjuntivo: llegue.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Yo', 'que', 'tú,', 'no', 'firmaría', 'ese', 'contrato'], accept: ['Yo que tú, no firmaría ese contrato'], en: 'If I were you, I wouldn’t sign that contract.' },
            { tiles: ['Te', 'espero', 'en', 'la', 'plaza', 'siempre', 'y', 'cuando', 'no', 'llueva'], accept: ['Te espero en la plaza siempre y cuando no llueva', 'Siempre y cuando no llueva te espero en la plaza'], en: 'I’ll wait for you in the square, provided it doesn’t rain.' },
            { tiles: ['Si', 'no', 'hubiera', 'sido', 'por', 'Adela', 'nos', 'habríamos', 'perdido'], accept: ['Si no hubiera sido por Adela nos habríamos perdido', 'Nos habríamos perdido si no hubiera sido por Adela'], en: 'If it hadn’t been for Adela, we would have got lost.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Cambia la forma, no la idea · Change the form, not the idea', items: [
            { prompt: 'Si lo hubiera sabido, no habría venido.', instruction: 'Dilo como lo diría Gabriel en una conversación informal, con la fórmula coloquial en presente. Empieza: «Si lo sé…».', accept: ['Si lo sé, no vengo', 'Si lo sé no vengo'] },
            { prompt: 'Hechos: El concejal nos deja las vallas. Condición: que las devolvamos el lunes.', instruction: 'Une las dos ideas con «siempre y cuando». Empieza: «El concejal nos deja las vallas…».', accept: ['El concejal nos deja las vallas siempre y cuando las devolvamos el lunes', 'El concejal nos deja las vallas siempre y cuando se las devolvamos el lunes'] },
            { prompt: 'Te aconsejo que hables con el técnico antes del ensayo.', instruction: 'Da el mismo consejo con «yo que tú». Empieza: «Yo que tú…».', accept: ['Yo que tú, hablaría con el técnico antes del ensayo', 'Yo que tú, antes del ensayo hablaría con el técnico'] },
            { prompt: 'Si Mateo no revisa los focos, no hay función.', instruction: 'Conviértelo en una advertencia con «como». Empieza: «Como Mateo…».', accept: ['Como Mateo no revise los focos, no hay función', 'Como Mateo no revise los focos, no habrá función'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno prepara el plan B de un evento suyo con tres frases: una con «en caso de que», una con «a no ser que» y una hipótesis remota con «si llegara a…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Nuria', coach: 'Primero el plan, después los detalles. The plan first, then the details.',
      steps: [
        { title: 'Plan B · Plan B', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada condición y dice qué tipo es: plan B, excepción, requisito, advertencia o queja. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada condición: ¿plan B, excepción, requisito, advertencia o queja? (Note each condition and its type.)' } },
          { kind: 'listen', title: 'El audio de Nuria', channel: 'NOTA DE VOZ · DE NURIA PARA GABRIEL', src: '/audio/grammar-live/471.mp3',
            before: 'Son las siete y media. Nuria le deja a Gabriel un audio porque él no contesta al teléfono. ¿Qué crees que le cuenta: noticias de Valeria, el plan si llueve, alguna queja? (Nuria leaves Gabriel a voice note. What do you think she tells him?)',
            gist: { prompt: '¿Cuál es la idea principal del audio? · What is the main point?', options: ['Nuria cancela el estreno por la tormenta.', 'Nuria le explica a Gabriel el plan para la tormenta y le da las gracias.', 'Nuria se queja de que Valeria no ha llegado.'], answer: 1, why: 'Explica qué hacer si llueve antes o después del descanso y termina con «si no fuera por ti…».', en: 'She sets out the storm plan and thanks him.' },
            details: [
              { prompt: '¿Qué reconoce Nuria sobre Valeria?', options: ['Que Gabriel tenía razón: habría sido mejor traerla el jueves.', 'Que Valeria no va a llegar a tiempo.', 'Que el vuelo llegó puntual.'], answer: 0, why: '«Si llego a saber que el vuelo traía tanto retraso, la hago venir el jueves, como decías tú. Tenías razón».', en: 'What does Nuria admit about Valeria’s travel plans?' },
              { prompt: '¿Qué pasa si llueve antes del descanso?', options: ['Se cancela la función.', 'Paran la función y llevan al público al polideportivo.', 'Siguen en la plaza con paraguas.'], answer: 1, why: '«En caso de que empiece a llover antes del descanso, paramos la función y llevamos al público al polideportivo».', en: 'What happens if it rains before the interval?' },
              { prompt: '¿Cuándo no seguirían en la plaza si llueve después del descanso?', options: ['Si el público quiere irse.', 'Si llueve mucho.', 'Si Mateo ve algún peligro con los focos.'], answer: 2, why: '«Seguimos en la plaza, a no ser que Mateo vea algún peligro con los focos».', en: 'In what case would they leave the square after the interval?' },
              { prompt: '¿Qué condición pone el concejal?', options: ['Que el polideportivo quede limpio esa misma noche.', 'Que Adela esté presente.', 'Que la función termine antes de las once.'], answer: 0, why: '«Siempre y cuando quede limpio esta misma noche».', en: 'What condition does the councillor set?' },
              { prompt: '¿Qué le molesta a Nuria?', options: ['Que el generador esté en la furgoneta.', 'Que alguien deje cajas de cables en la salida de emergencia.', 'Que Gabriel no la llame.'], answer: 1, why: '«Como alguien vuelva a dejar las cajas de cables en la salida de emergencia, me enfado de verdad».', en: 'What annoys Nuria?' },
            ],
            transcript: 'Gabriel, soy Nuria. Te dejo un audio porque no contestas. Primero, la buena noticia: Valeria ya ha aterrizado y viene para el pueblo. [[Si llego a saber|orange]] que el vuelo traía tanto retraso, [[la hago venir|orange]] el jueves, como decías tú. Tenías razón, lo reconozco. Ahora, lo importante. El radar dice que la tormenta podría llegar hacia las once. [[En caso de que empiece|blue]] a llover antes del descanso, paramos la función y llevamos al público al polideportivo. Si llueve después, seguimos en la plaza, [[a no ser que Mateo vea|blue]] algún peligro con los focos. El concejal nos deja el polideportivo [[siempre y cuando quede|blue]] limpio esta misma noche, así que avisa a Adela, por favor. Otra cosa: [[como alguien vuelva|orange]] a dejar las cajas de cables en la salida de emergencia, me enfado de verdad. [[¡Ni que fuera|orange]] la primera vez que lo pedimos! Y, [[si llegara a fallar|violet]] el generador, el de reserva está en la furgoneta blanca. Bueno, [[si no fuera por ti|violet]], a estas horas ya me habría vuelto loca. Llámame en cuanto puedas.',
            reply: { teacher: 'Tú eres Nuria. Tu alumno es Gabriel y le responde con otro audio: confirma el plan, pone una condición («siempre y cuando…»), propone algo para el peor caso («si llegara a…») y le da un consejo («yo que tú…»).', self: 'Responde a Nuria como Gabriel, en voz alta: confirma el plan, pon una condición, prevé el peor caso y aconséjale algo. (Reply as Gabriel: confirm, set a condition, plan for the worst, advise.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Condiciones, quejas y consejos', coach: 'Matiza lo que dices. Fine-tune what you say.',
      steps: [
        { title: 'Situaciones reales · Real situations', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con situaciones reales. Si usa «si» donde un conector sería más preciso, tú le ofreces el conector y sigue hablando.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de hablar, decide: ¿condición, excepción, hipótesis remota, queja o consejo? (Decide the function before you speak.)' } },
          { kind: 'talk', cards: [
            { q: '¿En qué condiciones aceptarías dirigir un festival o un proyecto grande en otra ciudad? · On what terms would you take on a big project in another city?', followUps: ['¿Qué te haría decir que no? (What would make you say no?)', '¿Qué es lo mínimo que necesitarías?'], phrases: ['Lo aceptaría [[siempre y cuando|blue]] me dejaran…', 'Diría que sí, [[a no ser que|blue]] tuviera que…', 'Me daría igual el sueldo [[con tal de que|blue]]…'], hint: 'Con la principal en condicional, el subjuntivo va en imperfecto: «siempre y cuando me dejaran».', example: 'Lo aceptaría siempre y cuando me dejaran elegir a mi equipo, a no ser que tuviera que mudarme antes de septiembre. Y me daría igual el sueldo con tal de que el proyecto fuera interesante.', next: 'Ahora, un plan B.' },
            { q: 'Organizas una celebración al aire libre. Explica tu plan B para tres imprevistos. · You are organising an outdoor event: give your plan B for three problems.', followUps: ['¿Cuál es el más probable? ¿Y el más remoto?', '¿Qué no harías en ningún caso?'], phrases: ['[[En caso de que|blue]] llueva, …', 'Si falla…, …', '[[Si llegara a|violet]]…, …'], hint: 'Si + presente para lo probable; si llegara a + infinitivo para lo remoto; en caso de que + subjuntivo para las previsiones.', example: 'En caso de que llueva, la cena será en el salón. Si falla el servicio de comida, tenemos pizzas congeladas. Y si llegara a cortarse la luz, encenderíamos velas: sería hasta romántico.' },
            { q: 'Un amigo quiere dejar su trabajo para montar una compañía de teatro. ¿Qué le aconsejas? · A friend wants to quit their job to start a theatre company: advise them.', followUps: ['¿Y si ya lo hubiera dejado? (What if they had already quit?)', '¿Qué le dirías para animarlo?'], phrases: ['[[Yo que tú|teal]], …', '[[Yo en tu lugar|teal]], no …', 'Yo en tu lugar, [[habría|teal]]…'], hint: 'Yo que tú / yo en tu lugar + condicional simple (ahora) o compuesto (algo ya pasado).', example: 'Yo que tú, no dejaría el trabajo todavía. Yo en tu lugar, empezaría los fines de semana y pediría una subvención. Y, la verdad, yo habría hablado antes con tu familia.', teacher: 'Tú eres el amigo y respondes con dudas; tu alumno insiste con otro consejo.' },
            { q: 'Cuenta una vez que te arrepentiste de ir a algún sitio. Cuéntalo primero a un amigo y después en un correo formal. · Tell a friend, then write it formally.', followUps: ['¿Qué palabra delata el registro de cada versión?', '¿Volverías?'], phrases: ['[[Si lo sé, no vengo|orange]] (coloquial)', '[[Si llego a saber|orange]] que…, no voy (coloquial)', 'Si lo hubiera sabido, no habría… (estándar)'], hint: 'Con amigos, el presente retórico. En un correo, si + pluscuamperfecto de subjuntivo y condicional compuesto.', example: 'A un amigo: «Si llego a saber que el concierto empezaba con dos horas de retraso, no voy». En el correo: «Si hubiera sabido que el concierto se retrasaría dos horas, no habría comprado las entradas».' },
            { q: '¿A quién le debes algo importante en tu vida o en tu trabajo? · Who do you owe something important to?', followUps: ['¿Qué habría pasado sin esa persona?', '¿Se lo has dicho alguna vez?'], phrases: ['[[Si no fuera por|violet]] mi…, hoy no…', '[[Si no hubiera sido por|violet]]…, no habría…', 'Se lo agradeceré siempre.'], hint: 'Si no fuera por + sustantivo → condicional simple (ahora). Si no hubiera sido por → condicional compuesto (antes).', example: 'Si no hubiera sido por mi profesora de francés, no habría pedido la beca. Y si no fuera por ella, hoy no trabajaría en Lyon.' },
            { q: 'Eres Nuria. El equipo vuelve a llegar tarde y alguien pide un camerino individual. Advierte y protesta, con humor. · You’re Nuria: warn the team and push back, with humour.', followUps: ['¿Cómo lo suavizas para que nadie se ofenda?', '¿Qué te responden?'], phrases: ['[[Como|orange]] alguien vuelva a…, …', '[[¡Ni que fuera|orange]]…!', '[[¡Ni que hubiéramos|orange]]…!'], hint: '«Como» + presente de subjuntivo al principio de la frase; «¡Ni que…!» + imperfecto o pluscuamperfecto de subjuntivo.', example: 'Como alguien vuelva a llegar tarde, ensayamos hasta medianoche. ¿Un camerino individual? ¡Ni que estuviéramos en Broadway! ¡Ni que hubiéramos vendido todas las entradas!', teacher: 'Tú eres el actor que se queja; tu alumno le responde como Nuria.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («en caso de que llueve», «a menos que no venga», «si no sería por ti»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas pensando en otra persona: un compañero, un familiar. (Now ask the questions and answer about someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Después del festival', coach: 'Agradece, reconoce y propón. Thank, admit, propose.',
      steps: [
        { title: 'Un correo al concejal · An email to the councillor', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector: ¿lleva subjuntivo? ¿El registro es formal? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada conector: ¿lleva subjuntivo? ¿El registro es formal? (Check mood and register.)' } },
          { kind: 'write', title: 'Correo de agradecimiento y propuesta · Thank-you and proposal email', situation: 'El festival ha terminado. Escribe, como Nuria, un correo formal (de usted) a Sergio Lama, concejal de Cultura: le das las gracias, reconoces un error y propones condiciones para repetir el año que viene. También puedes escribirlo sobre un evento tuyo. (Write a formal email to the councillor: thank him, admit a mistake and set conditions for next year.)', task: [
            'Agradece con «si no hubiera sido por…» o «si no fuera por…». (Thank him.)',
            'Reconoce un error con «hubiera sido mejor…» o «de haberlo sabido…». (Admit a mistake.)',
            'Propón dos condiciones con dos conectores distintos: en caso de que, siempre y cuando, a no ser que, con tal de que. (Two conditions, two connectors.)',
            'Haz una petición cortés con «quisiera». (A polite request.)',
            'Mantén el registro formal: nada de «si lo sé, no vengo». (Keep it formal.)',
          ], starters: ['Estimado Sergio:', 'Le escribo, ahora que el festival ha terminado, para…', 'Si no hubiera sido por…,', 'También quiero reconocer un error.', 'Hubiera sido mejor…', 'Para el año que viene…', 'Quisiera proponerle…', 'Un cordial saludo,'],
            words: ['si no hubiera sido por', 'hubiera sido mejor', 'de haberlo previsto', 'siempre y cuando', 'en caso de que', 'a no ser que', 'quisiera', 'le agradezco', 'en nombre de', 'con antelación'],
            model: 'Estimado Sergio: Le escribo, ahora que el festival ha terminado, para darle las gracias en nombre de todo el equipo. [[Si no hubiera sido por|violet]] su ayuda, el estreno del sábado no se habría celebrado: cuando empezó la tormenta, el polideportivo nos salvó la noche. También quiero reconocer un error. [[Hubiera sido mejor|teal]] que la actriz principal llegara el jueves; de haberlo previsto, nos habríamos ahorrado muchos nervios. Para el año que viene, nos gustaría repetir en las mismas condiciones, [[siempre y cuando|blue]] el ayuntamiento pudiera cedernos de nuevo el polideportivo como alternativa. [[En caso de que|blue]] no fuera posible, alquilaríamos una carpa. Mantendríamos el horario de las diez, [[a no ser que|blue]] ustedes prefirieran adelantarlo por los vecinos. [[Quisiera|teal]], además, proponerle una reunión en septiembre para empezar a planificar con antelación. Un cordial saludo, Nuria Calvo, directora de producción',
            minWords: 140,
            checks: [
              { label: 'Un agradecimiento: si no hubiera sido por / si no fuera por', pattern: '(?<!\\p{L})(?:si\\s+no\\s+(?:hubiera|hubiese)\\s+sido\\s+por|si\\s+no\\s+(?:fuera|fuese)\\s+por|de\\s+no\\s+(?:ser|haber\\s+sido)\\s+por)(?!\\p{L})', tip: 'Agradece con «Si no hubiera sido por su ayuda, …».' },
              { label: 'Un error reconocido: hubiera sido mejor / de haber + participio', pattern: '(?<!\\p{L})(?:hubiera\\s+sido\\s+mejor|habría\\s+sido\\s+mejor|de\\s+(?:no\\s+)?haber(?:lo|la|los|las|le|les|me|te|se|nos)?\\s+\\p{L}+(?:ado|ido|to|cho|so))(?!\\p{L})', tip: 'Reconoce un error: «Hubiera sido mejor…» o «De haberlo previsto, …».' },
              { label: 'Un conector condicional (en caso de que, siempre y cuando, a no ser que…)', pattern: '(?<!\\p{L})(?:en\\s+caso\\s+de\\s+que|a\\s+no\\s+ser\\s+que|a\\s+menos\\s+que|salvo\\s+que|siempre\\s+y\\s+cuando|siempre\\s+que|con\\s+tal\\s+de\\s+que)(?!\\p{L})', tip: 'Pon condiciones con dos conectores distintos, seguidos de subjuntivo.' },
              { label: 'Una petición cortés con «quisiera»', pattern: '(?<!\\p{L})quisiera(?!\\p{L})', tip: 'Pide algo con cortesía: «Quisiera proponerle…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:en\\s+caso\\s+de\\s+que|a\\s+no\\s+ser\\s+que|a\\s+menos\\s+que|siempre\\s+y\\s+cuando|con\\s+tal\\s+de\\s+que)\\s+(?:\\p{L}+\\s+){0,2}?(?:hay|es|está|están|va|van|tiene|tienen|puede|pueden|será|habrá|podrá|tendrá)(?!\\p{L})', why: 'Estos conectores llevan **subjuntivo**: «en caso de que **haya**», «siempre y cuando **pueda**», «a no ser que **sea**».' },
              { pattern: '(?<!\\p{L})si\\s+lo\\s+sé(?!\\p{L})', why: '«Si lo sé, no vengo» es coloquial. En un correo formal: «si lo hubiera sabido» o «de haberlo sabido».' },
              { pattern: '(?:^|[.!?¡¿,;:]\\s*)si\\s+(?:no\\s+|me\\s+|te\\s+|lo\\s+|la\\s+|nos\\s+|le\\s+)*(?:habría|habríamos|habrían|sería|seríamos|tendría|tendríamos)(?!\\p{L})', why: 'Tras **si** no va el condicional: «si **hubiera** sido», «si **fuera**».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'CONECTORES + SUBJUNTIVO', formula: 'en caso de que · a no ser que · siempre y cuando · con tal de que + subjuntivo', example: 'Empezamos a las diez, a no ser que haya cola.', caption: 'previsión, excepción, requisito, mínimo', en: 'unlike si, these connectors always take the subjunctive and specify the kind of condition' },
            { tone: 'orange', label: 'EL MODO CAMBIA EL SENTIDO', formula: 'siempre que / como / salvo que + indicativo ≠ + subjuntivo', example: 'Como no llegó, ensayamos sin él. / Como no llegue, ensayamos sin él.', caption: 'indicativo: hecho; subjuntivo: condición', en: 'with the indicative they report facts (every time, because, except that); with the subjunctive they set conditions or warnings' },
            { tone: 'violet', label: 'GRADOS DE PROBABILIDAD', formula: 'si llueve → si lloviera → si llegara a llover', example: 'Si llegara a fallar el generador, usa el de reserva.', caption: 'de lo probable a lo remoto', en: 'the further from the present tense, the more remote the speaker presents the event' },
            { tone: 'orange', label: 'CONTRAFACTUAL RETÓRICO', formula: 'si lo sé, no vengo · ¡ni que fuera…! · como no vengas…', example: '¡Ni que fuera la primera vez!', caption: 'quejas, advertencias y rechazos de la conversación', en: 'conversational formulas: the present for an unreal past (mainly Spain), and exclamations that reject an assumption' },
            { tone: 'teal', label: 'CONSEJO Y CORTESÍA', formula: 'yo que tú + condicional · quisiera · hubiera sido mejor', example: 'Yo que tú, la llamaría ya.', caption: '-ra en la principal: quisiera, hubiera; nunca -se', en: 'advice formulas take the conditional; quisiera and hubiera + participle are standard in the main clause, the -se forms are not' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate tres cosas. ¿Qué **tipo de condición** es: plan B (en caso de que), excepción (a no ser que), requisito (siempre y cuando) o advertencia (como)? Entonces, **subjuntivo**. ¿Lo veo **probable o remoto**? Si + presente, si + imperfecto de subjuntivo, si llegara a. ¿Estoy en una **conversación informal o en un texto formal**? «Si lo sé, no vengo» solo con amigos; en un correo, «si lo hubiera sabido» o «de haberlo sabido».', en: 'Ask three things. What kind of condition is it? Then use the matching connector and the subjunctive. How likely do I think it is? Choose si + present, si + imperfect subjunctive or si llegara a. Am I chatting or writing formally? Keep the rhetorical present for friends.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Te dejo mi apartamento en la playa ___ me riegues las plantas.', options: ['siempre que', 'a no ser que', 'como'], answer: 0, why: 'Es un requisito: «siempre que» + subjuntivo. «A no ser que» invertiría el sentido.', en: 'I’ll lend you my beach flat as long as you water my plants.' },
            { prompt: '___ vuelvas a dejar la puerta abierta, se escapa el gato.', options: ['Siempre y cuando', 'Si', 'Como'], answer: 2, why: 'Advertencia con presente de subjuntivo: «como». «Si» no admite presente de subjuntivo, y «siempre y cuando» pondría un requisito absurdo.', en: 'If you leave the door open again, the cat will get out: a warning.' },
            { prompt: '¿Quedarme a dormir en la oficina? ¡Ni que me ___ el doble!', options: ['pagarían', 'pagaran', 'pagaban'], answer: 1, why: '«¡Ni que…!» + imperfecto de subjuntivo: pagaran.', en: 'Sleep at the office? It’s not as if they paid me double!' },
            { prompt: 'Si no ___ por el GPS, nos habríamos perdido en el bosque.', options: ['haya sido', 'habría sido', 'hubiera sido'], answer: 2, why: 'Agradecimiento sobre el pasado: si no hubiera sido por + sustantivo.', en: 'If it hadn’t been for the GPS, we’d have got lost in the forest.' },
            { prompt: 'Es casi imposible, pero ___ a ganar la lotería, me compraría una casa en la costa.', options: ['en caso de que llego', 'si llegara', 'si llegaría'], answer: 1, why: 'Hipótesis remota: si llegara a + infinitivo. Tras «si» no va el condicional, y «en caso de que» exige subjuntivo.', en: 'It’s almost impossible, but if I ever won the lottery, I’d buy a house on the coast.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una boda. Now, a wedding.', blocks: [
          { kind: 'lead', text: 'Lorena organiza la boda de su hermana en una finca, a finales de agosto. Su amigo Pablo la ayuda y le da consejos. Escribe sus frases.', en: 'Lorena is organising her sister’s wedding at a country estate in late August. Her friend Pablo helps and gives advice. Write their sentences.' },
          { kind: 'rewrite', title: 'Lorena y Pablo · Lorena and Pablo', items: [
            { prompt: 'Hechos: El restaurante acepta la reserva. Condición: que confirmemos el número de invitados antes del día 10.', instruction: 'Une con «siempre y cuando». Empieza: «El restaurante acepta la reserva…».', accept: ['El restaurante acepta la reserva siempre y cuando confirmemos el número de invitados antes del día 10', 'El restaurante acepta la reserva siempre y cuando le confirmemos el número de invitados antes del día 10'] },
            { prompt: 'Pablo: «Te aconsejo que no invites a tu antiguo jefe».', instruction: 'Da el consejo con «yo en tu lugar». Empieza: «Yo en tu lugar…».', accept: ['Yo en tu lugar, no invitaría a tu antiguo jefe', 'Yo en tu lugar, no invitaría a mi antiguo jefe', 'Yo en tu lugar, no lo invitaría'] },
            { prompt: 'En agosto aquí casi nunca llueve, pero Lorena prevé el peor caso: «Si llueve, cenamos en el salón».', instruction: 'Preséntalo como una hipótesis muy remota con «llegar a». Empieza: «Si llegara a llover…».', accept: ['Si llegara a llover, cenaríamos en el salón', 'Si llegara a llover, la cena sería en el salón', 'Si llegara a llover, haríamos la cena en el salón'] },
          ] },
        ] },
        { title: 'Ampliación · Matices y registros · Nuances and registers', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: matices de cortesía, valores del indicativo y una forma que estudiarás en la clase 172.', en: 'For strong students or spare time: politeness nuances, indicative uses and a structure you will study in class 172.' },
          { kind: 'choice', title: '¿Qué matiz? · Which nuance?', items: [
            { prompt: '«Quisiera hablar con la directora» frente a «Quiero hablar con la directora». ¿Qué cambia?', options: ['«Quisiera» habla del pasado.', '«Quisiera» es más cortés; el sentido es el mismo.', '«Quisiera» es incorrecto en la oración principal.'], answer: 1, why: '«Quisiera» en la oración principal es una forma de cortesía estándar, equivalente a «querría».', en: 'What changes between quisiera and quiero here?' },
            { prompt: '«Todo salió bien, salvo que el técnico llegó tarde». ¿Qué significa «salvo que» con indicativo?', options: ['Excepto el hecho de que (algo que pasó).', 'A no ser que (una condición).', 'Con tal de que.'], answer: 0, why: 'Con indicativo, «salvo que» presenta un hecho real como excepción, no una condición.', en: 'What does salvo que mean with the indicative?' },
            { prompt: '¿Cuál es la versión más formal de «Si no llega a ser por ti, me pierdo»?', options: ['Si no fuera por ti, me pierdo.', 'Ni que fuera por ti, me perdería.', 'De no haber sido por ti, me habría perdido.'], answer: 2, why: 'De + infinitivo compuesto (= si no hubiera sido por ti) y condicional compuesto: registro cuidado.', en: 'Which is the most formal version?' },
            { prompt: '«Habla como si fuera la directora» y «¡Ni que fuera la directora!». ¿Qué diferencia hay?', options: ['Ninguna: son intercambiables.', '«Ni que» solo se usa con el presente.', '«Como si» compara dentro de una frase; «¡Ni que…!» es una exclamación que protesta.'], answer: 2, why: '«Como si» (clase 136) introduce una comparación irreal; «¡Ni que…!» rechaza una actitud o una exigencia.', en: 'How do como si and ¡ni que…! differ?' },
            { prompt: '«De llover, la función pasaría al polideportivo». ¿A qué equivale «de llover»?', options: ['Si lloviera', 'Aunque llueva', 'Cuando llovió'], answer: 0, why: 'De + infinitivo simple equivale a si + imperfecto de subjuntivo. Lo estudias a fondo en la clase 172.', en: 'What does de llover correspond to?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno cuenta la misma queja en tres registros: «Si lo sé, no vengo», «Si lo hubiera sabido, no habría venido» y «De haberlo sabido, no habría venido».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 172 · Condicionales elípticas: de + infinitivo / gerundio', text: 'Ya pones condiciones precisas con conectores y subjuntivo, gradúas la probabilidad y reconoces los contrafactuales de la conversación. En la clase 172 condensas la condición sin verbo conjugado: «**De haberlo sabido**, habría actuado antes», «**De llover**, lo aplazamos», «**Siendo** así, acepto». Es el paso natural: la misma lógica condicional en una forma más compacta y propia del registro cuidado.', en: 'You can now set precise conditions with connectors and the subjunctive, grade probability and recognise conversational counterfactuals. In class 172 you compress the condition into a non-finite form: de + infinitive and the gerund. It is the natural next step: the same conditional logic in a more compact, careful register.', href: '/gramatica/condicionales-elipticas-de-infinitivo-gerundio', label: 'Ir a la clase 172' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué condiciones pones para aceptar un plan, y de qué te habrías librado si lo hubieras sabido antes?». Respuesta esperada: un conector con subjuntivo y una queja en dos registros. Tarea: el correo de Escribir.' },
        ] },
      ],
    },
  ],
};
