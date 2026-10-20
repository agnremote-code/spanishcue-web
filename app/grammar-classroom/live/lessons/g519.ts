import type { LiveLesson } from '../types';

/**
 * Lesson 519 · C2 · Foco, presuposición y estructura informativa (course unit G219).
 * Builds on G184 (lesson 484: topic/rheme, fronted focus with inversion, clefts and their
 * agreement, focus adverbs, «es por eso que» as an Ampliación) and G185 (lesson 485:
 * dislocation). Cleft mechanics are only recalled. C2 step: what a sentence takes for granted.
 * Assertion vs presupposition and the tests that separate them (negation, question, «quizá»);
 * presupposition triggers: factive verbs (lamentar, sentir, alegrarse de + subjunctive; saber,
 * darse cuenta de, olvidar + indicative) vs non-factive (creer, decir, afirmar); change of state
 * and repetition (dejar de, seguir / seguir sin, volver a, empezar a), «ya no», «todavía»;
 * definite descriptions and nominalisations (el fracaso del plan); partial questions and loaded
 * questions («¿Cuándo va a dejar de…?»); focus particles with what they assert and presuppose
 * (también, tampoco, incluso / hasta, ni siquiera with and without «no», solo); clefts as
 * focus + presupposed relative clause (the presupposition survives «No fue Marta quien…»);
 * corrective focus: stress in place, fronting (A ANA se lo dije, no a ti), cleft, «no…, sino…».
 * Norm: «Es por eso que» (que galicado, NGLE: the most widespread and accepted variant, above
 * all in America) vs «Por eso es por lo que» / «Es por eso por lo que» in careful European use;
 * «Fue entonces cuando», «Fue allí donde» as the general recommendation for other foci.
 * Ampliación: presupposition vs implicature, accommodation, metalinguistic negation.
 * Scene: «La letra pequeña», the fact-checking slot of a local radio station in the (fictional)
 * town of Puerto Alba, the morning after the mayoral debate. Editor Irene Valcárcel, fact-checker
 * Hugo Morales and trainee Carla Ruiz review what mayor Ernesto Villa and candidate Marta Ledesma
 * asserted and, above all, what they took for granted.
 * Escuchar: Irene's radio segment (es-CO-SalomeNeural, ustedes, «Es por eso que…»).
 * Escribir: the web verification of two statements from the closing debate.
 */
export const lesson: LiveLesson = {
  id: 519,
  level: 'C2',
  title: 'Foco, presuposición y estructura informativa',
  subtitle: 'Detectar lo que un discurso da por hecho, desmontar preguntas cargadas y corregir con precisión con escindidas y partículas de foco.',
  legend: [
    { tone: 'orange', label: 'PRESUPOSICIÓN · lo que la frase da por hecho (lamento que…, volver a, ya no, el fracaso de…)' },
    { tone: 'blue', label: 'AFIRMACIÓN · lo que se dice y se pone en discusión' },
    { tone: 'violet', label: 'ESCINDIDAS Y FOCO CORRECTIVO · Fue Marta quien… · A ANA se lo dije' },
    { tone: 'teal', label: 'PARTÍCULAS DE FOCO · también, tampoco, incluso, ni siquiera, solo' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo que se dice y lo que se da por hecho', coach: 'Toda frase lleva equipaje. Every sentence carries baggage.',
      steps: [
        { title: 'La mañana después del debate · The morning after the debate', blocks: [
          { kind: 'lead', text: 'Anoche se celebró en Puerto Alba el debate entre el alcalde, **Ernesto Villa**, y la candidata **Marta Ledesma**. Esta mañana, en «La letra pequeña», la sección de verificación de la radio local, Irene Valcárcel, Hugo Morales y la becaria Carla Ruiz revisan las frases. Pronto descubren que lo más discutible no es siempre **lo que se afirma**, sino **lo que se da por hecho**: «Lamento que la oposición haya vuelto a bloquear el presupuesto» afirma una queja, pero presupone dos datos sin someterlos a debate.', en: 'Last night Puerto Alba held its mayoral debate. This morning the station’s fact-checking team goes through the statements and soon finds that the most questionable part is often not what is asserted but what is taken for granted. A sentence can slip in facts without ever putting them up for discussion.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases del debate y tu alumno dice qué hay que comprobar en cada una, además de lo que se afirma abiertamente.', self: 'Lee las tres frases del debate. ¿Qué tendrías que comprobar en cada una, además de lo que se dice abiertamente? (What would you need to check, beyond what is openly stated?)' } },
          { kind: 'compare', title: 'Tres frases, tres equipajes · Three sentences, three kinds of baggage', columns: [
            { tone: 'orange', label: 'EL ALCALDE', sentence: '[[Lamento que|orange]] la oposición [[haya vuelto a|orange]] bloquear el presupuesto.', idea: 'Da por hecho que la oposición lo bloqueó y que ya lo había hecho antes.', en: 'The mayor takes two things for granted: that the opposition blocked the budget, and that it had done so before. Neither is up for debate in his sentence.' },
            { tone: 'violet', label: 'TAMBIÉN EL ALCALDE', sentence: '[[Fui yo quien|violet]] propuso el autobús nocturno.', idea: 'Da por hecho que alguien lo propuso y afirma que fue él (y nadie más).', en: 'The cleft presents “someone proposed the night bus” as known and puts all the weight on who did: him, and only him.' },
            { tone: 'orange', label: 'LA CANDIDATA', sentence: '[[¿Cuándo va a dejar|orange]] el alcalde [[de|orange]] prometer lo que no cumple?', idea: 'No pregunta si promete sin cumplir: lo da por supuesto y solo pregunta cuándo dejará de hacerlo.', en: 'A loaded question: it does not ask whether he breaks promises, it assumes he does and only asks when he will stop.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Para verificar «Lamento que la oposición haya vuelto a bloquear el presupuesto», ¿qué tiene que comprobar Hugo?', options: ['Solo si el presupuesto es bueno.', 'Que la oposición votó en contra y que no era la primera vez.', 'Solo si el alcalde lo lamenta de verdad.'], answer: 1, why: '«Lamentar que» da por hecho el bloqueo y «volver a», un bloqueo anterior: son datos presupuestos que se pueden comprobar.', en: 'The mayor’s regret cannot be checked; the two facts his sentence takes for granted can.' },
            { prompt: 'Si el alcalde contesta «Pronto» a la pregunta de Ledesma, ¿qué ocurre?', options: ['No dice nada sobre sus promesas.', 'Acepta, sin querer, que promete lo que no cumple.', 'Niega que prometa sin cumplir.'], answer: 1, why: 'Responder a «¿cuándo?» acepta la premisa. Para rechazarla hay que atacar la presuposición: «Su pregunta da por hecho algo falso».', en: 'Answering “when” accepts the premise of the question.' },
          ] },
        ] },
        { title: 'Afirmación y presuposición · Assertion and presupposition', mascot: '/brand/mascot/studying.webp', coach: 'Niega la frase: lo que queda en pie, estaba presupuesto. Negate it: what survives was presupposed.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'LA PRUEBA DE LA NEGACIÓN', question: '¿Qué sigue siendo verdad si niegas la frase, la conviertes en pregunta o le añades «quizá»?', en: 'The assertion is what a sentence puts forward as new and open to discussion; the presupposition is what it takes for granted so that it can make sense at all. The classic test: negate the sentence, turn it into a question or add “quizá”. The assertion changes; the presupposition stays standing. That is why presuppositions are so effective in political and advertising language: they are not argued for, so they are harder to challenge.', formula: ['afirmación = lo que se pone en discusión', 'presuposición = lo que se da por hecho', 'prueba: negación · pregunta · «quizá» → la presuposición sigue en pie'],
            meaning: 'La **afirmación** es lo que la frase propone como nuevo y discutible. La **presuposición** es lo que la frase **da por hecho** para tener sentido. La prueba clásica: **niega** la frase, conviértela en **pregunta** o añade «**quizá**». La afirmación cambia; la presuposición **sigue en pie**. Por eso las presuposiciones son tan eficaces en política y en publicidad: no se argumentan, y por eso cuesta más discutirlas.',
            examples: [
              { es: 'El concejal [[ha dejado de|orange]] asistir a los plenos.', en: 'Asserts that he no longer attends; presupposes that he used to.' },
              { es: 'El concejal [[no ha dejado de|orange]] asistir a los plenos.', en: 'The negation changes the assertion (he still attends), but “he used to attend” is still taken for granted.' },
              { es: '¿[[Ha dejado|orange]] el concejal [[de|orange]] asistir a los plenos?', en: 'The question asks only about the change; that he attended before is still assumed.' },
              { es: 'Quizá el concejal [[haya dejado de|orange]] asistir a los plenos.', en: 'Even with “quizá” (and the subjunctive it allows), the earlier attendance is not in doubt.' },
            ] },
          { kind: 'table', title: 'La prueba, paso a paso · The test, step by step', head: ['Frase · Sentence', 'Negación o pregunta · Negation or question', 'Sigue en pie · Still standing'], rows: [
            ['La alcaldesa **se ha dado cuenta de** que el puente no cabe en el presupuesto.', 'La alcaldesa **no se ha dado cuenta de** que…', 'el puente no cabe en el presupuesto'],
            ['Los vecinos **siguen sin** agua caliente.', '¿Siguen los vecinos sin agua caliente?', 'antes no tenían agua caliente'],
            ['**El retraso de las obras** preocupa a los comerciantes.', '**El retraso de las obras** no preocupa a los comerciantes.', 'hay un retraso'],
            ['**Fue el Ayuntamiento quien** cerró la biblioteca.', '**No fue el Ayuntamiento quien** cerró la biblioteca.', 'alguien cerró la biblioteca'],
          ], note: 'Para negar una presuposición no basta con negar la frase: hay que decirlo de forma explícita. «No he dejado de mentir: **nunca he mentido**».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El portavoz no ha vuelto a mencionar la auditoría». ¿Qué se da por hecho?', options: ['Que el portavoz mencionó la auditoría al menos una vez.', 'Que no hay ninguna auditoría.', 'Que el portavoz ha hablado hoy de la auditoría.'], answer: 0, why: '«Volver a» presupone una vez anterior; la negación solo afecta a la repetición, no a la primera mención.', en: 'What is presupposed even though the sentence is negative?' },
            { prompt: '¿Cuál de estas frases NO presupone que el contrato existe?', options: ['El contrato con la constructora caduca en mayo.', 'La concejala lamenta que el contrato sea tan caro.', 'Algunos vecinos creen que hay un contrato secreto.'], answer: 2, why: '«Creer» no es factivo: la existencia del contrato queda en boca de los vecinos. La descripción definida («el contrato») y «lamentar que» sí lo dan por hecho.', en: 'Which sentence leaves the existence of the contract open?' },
          ] },
        ] },
        { title: 'Los activadores · Presupposition triggers', mascot: '/brand/mascot/standing.webp', coach: 'Ciertas palabras traen la presuposición consigo. Some words bring it with them.', blocks: [
          { kind: 'table', title: 'Activadores frecuentes · Common triggers', head: ['Activador · Trigger', 'Ejemplo · Example', 'Da por hecho · Takes for granted'], rows: [
            ['verbos factivos: **lamentar, sentir, alegrarse de, sorprender** + subjuntivo', '[[Sentimos que|orange]] el servicio se haya interrumpido.', 'el servicio se interrumpió'],
            ['verbos factivos: **saber, darse cuenta de, olvidar, reconocer** + indicativo', 'El alcalde [[olvidó|orange]] que las obras estaban paradas.', 'las obras estaban paradas'],
            ['cambio de estado: **dejar de, empezar a, seguir, seguir sin**', 'La fábrica [[sigue sin|orange]] pagar las multas.', 'antes tampoco las pagaba'],
            ['repetición: **volver a, otra vez, de nuevo**', 'El concejal [[ha vuelto a|orange]] faltar al pleno.', 'ya había faltado antes'],
            ['adverbios de fase: **ya no, todavía, todavía no**', '[[Ya no|orange]] tendrás que hacer cola.', 'antes había que hacer cola'],
            ['descripciones definidas y nominalizaciones', '[[El despilfarro del anterior gobierno|orange]] nos obliga a recortar.', 'hubo despilfarro'],
            ['preguntas parciales (qué, por qué, cuándo…)', '[[¿Por qué ha ocultado|orange]] usted el informe?', 'el informe se ocultó'],
          ], note: 'El subjuntivo de «lamento que…» no hace dudoso el hecho: con los factivos de sentimiento, el subjuntivo marca la **valoración** de un hecho que se da por cierto.' },
          { kind: 'compare', title: 'Factivo o no factivo · Factive or not', columns: [
            { tone: 'orange', label: 'FACTIVO', sentence: 'La consejera [[no sabía|orange]] que el informe estaba manipulado.', idea: 'Aun negado, «saber» deja en pie el hecho: el informe estaba manipulado.', en: 'Even under negation, “saber” commits the speaker to the fact: the report was doctored, she just didn’t know.' },
            { tone: 'blue', label: 'NO FACTIVO', sentence: 'La consejera [[no cree|blue]] que el informe esté manipulado.', idea: '«Creer» no compromete a quien habla con el hecho: queda abierto.', en: '“Creer” commits nobody to the fact: whether the report was doctored is left open.' },
          ] },
          { kind: 'concept', tone: 'orange', label: 'PREGUNTAS CARGADAS', question: '¿La pregunta da por hecho justo lo que habría que demostrar?', en: 'A loaded question packs a disputed claim into its presupposition, so any direct answer accepts it: “When did you stop…?”, “Why do you hide…?”, “How much more will you raise…?”. The defence is not to answer the question asked but to name and reject what it takes for granted.', formula: ['¿Cuándo dejó usted de…? → presupone que lo hacía', '¿Por qué esconde…? → presupone que esconde', 'defensa: «Su pregunta da por hecho que…, y eso es falso»'],
            meaning: 'Una **pregunta cargada** mete una afirmación discutible en su presuposición. Cualquier respuesta directa la acepta: a «¿Cuándo dejó usted de engañar a los vecinos?» no se puede contestar ni «ayer» ni «todavía no» sin admitir el engaño. La defensa es **nombrar y rechazar la presuposición**.',
            examples: [
              { es: '[[¿Cuánto más piensa subir|orange]] el precio del agua?', en: 'Assumes the price has gone up and will go up again; it only asks how much.' },
              { es: '[[¿Por qué ha abandonado|orange]] el Gobierno a los pequeños comercios?', en: 'Assumes an abandonment that would need proving.' },
              { es: 'Su pregunta [[da por hecho|blue]] que hemos subido el agua, y no es así: el precio no ha cambiado desde 2022.', en: 'The answer names the presupposition and rejects it before anything else.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Anuncio de una aseguradora: «¿Todavía pagas de más por tu seguro?». ¿Qué presupone?', options: ['Que pagas de más y que ya va siendo hora de dejar de hacerlo.', 'Que no tienes seguro.', 'Que antes pagabas menos.'], answer: 0, why: '«Pagar de más» se da por hecho, y «todavía» presenta esa situación como algo que ya debería haber terminado.', en: 'The ad assumes you overpay and that you should have stopped by now.' },
            { prompt: '«Lamentamos que la línea 4 haya dejado de funcionar». ¿Por qué va en subjuntivo?', options: ['Porque la empresa duda de que haya dejado de funcionar.', 'Porque «lamentar» valora un hecho; el subjuntivo no lo pone en duda.', 'Porque es una frase de cortesía sin información.'], answer: 1, why: 'Con los factivos de sentimiento el hecho se da por cierto y, aun así, va en subjuntivo.', en: 'Subjunctive here does not mean doubt.' },
          ] },
        ] },
        { title: 'Partículas de foco · Focus particles', mascot: '/brand/mascot/speaking.webp', coach: 'Una palabrita, una presuposición nueva. One small word, one new presupposition.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'QUÉ AFIRMAN Y QUÉ PRESUPONEN', question: '¿A qué elemento afecta la partícula, y qué da por hecho sobre los demás?', en: 'Focus particles add their own presuppositions about the alternatives. “También” assumes someone else did it; “tampoco”, that someone else did not. “Incluso / hasta” assume others did it and that this one was the least expected. “Ni siquiera” is the negative end of the scale: not even the minimum happened. “Solo” takes the fact for granted and asserts that nobody or nothing else is included. Their scope depends on position and, in speech, on stress.', formula: ['también / tampoco → hay otro', 'incluso / hasta → hay otros, y este era el menos esperable', 'ni siquiera → no se cumple ni lo mínimo', 'solo → nadie o nada más'],
            meaning: 'Las partículas de foco añaden presuposiciones sobre las **alternativas**. «**También**» da por hecho que otro lo hizo; «**tampoco**», que otro no lo hizo. «**Incluso**» y «**hasta**», que otros lo hicieron y que este era **el menos esperable**. «**Ni siquiera**» es el extremo negativo de la escala: **no se cumple ni lo mínimo**. «**Solo**» da por hecho lo dicho y afirma que **nada ni nadie más** está incluido. Su alcance depende de la posición y, al hablar, del acento.',
            examples: [
              { es: '[[Incluso|teal]] la oposición votó a favor.', en: 'Others voted for it, and the opposition was the least likely to.' },
              { es: '[[Ni siquiera|teal]] el alcalde ha leído el informe de tráfico.', en: 'He was the one most expected to have read it. Before the verb, “ni siquiera” needs no “no”.' },
              { es: 'El alcalde [[no|teal]] ha leído [[ni siquiera|teal]] el resumen.', en: 'After the verb, “ni siquiera” needs “no” before it: he did not read even the summary, the minimum.' },
              { es: 'Ledesma votó a favor y Villa [[también|teal]].', en: 'Villa did too: “también” takes it for granted that someone else (Ledesma) voted for it.' },
            ] },
          { kind: 'table', title: 'Alcance y posición · Scope and position', head: ['Frase · Sentence', 'Afirma · Asserts', 'Da por hecho · Presupposes'], rows: [
            ['[[Solo|teal]] la concejala votó en contra.', 'nadie más votó en contra', 'la concejala votó en contra'],
            ['La concejala votó en contra [[solo|teal]] de los recortes.', 'no votó en contra de nada más', 'votó en contra de los recortes'],
            ['[[Tampoco|teal]] Villa contestó. / Villa no contestó [[tampoco|teal]].', 'Villa no contestó', 'otra persona no contestó'],
            ['[[Hasta|teal]] los taxistas apoyan el carril bus.', 'los taxistas lo apoyan', 'otros lo apoyan; los taxistas eran los menos esperables'],
          ], note: '«Ni siquiera», «tampoco» y «nadie» siguen la misma regla: **delante del verbo**, sin «no» (Ni siquiera Villa lo sabía); **detrás**, con «no» (Villa no lo sabía ni siquiera, Villa no contestó tampoco).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Anuncio de campaña: «Hasta los comerciantes del centro apoyan nuestro plan». ¿Qué insinúa además?', options: ['Que los comerciantes eran el grupo menos probable y que otros ya lo apoyaban.', 'Que solo lo apoyan los comerciantes.', 'Que los comerciantes lo apoyaron hace tiempo.'], answer: 0, why: '«Hasta» (= incluso) presupone otros apoyos y sitúa a los comerciantes en el extremo de la escala.', en: '“Even the shopkeepers”: what does the particle add?' },
            { prompt: '¿Cuál es correcta?', options: ['Respondió ni siquiera al correo.', 'Ni siquiera no respondió al correo.', 'No respondió ni siquiera al correo.'], answer: 2, why: 'Detrás del verbo, «ni siquiera» necesita «no» delante del verbo; delante del verbo, lo excluye.', en: 'Which one follows the negation rule?' },
          ] },
        ] },
        { title: 'Escindidas y foco correctivo · Clefts and corrective focus', mascot: '/autoestudio/mascot/noting.webp', coach: 'Fue Marta quien hizo la propuesta. It was Marta who made the proposal.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'FOCO + PRESUPOSICIÓN', question: '¿Quieres corregir quién, cuándo, dónde o qué, sin discutir el resto?', en: 'In lesson 484 you learnt how clefts are built. At C2 what matters is how they divide the work: the relative clause is presupposed (someone made the proposal) and the focus after “ser” is asserted, usually as the only one. That makes clefts ideal for correcting a single piece of information. Negating a cleft keeps the presupposition: “No fue Marta quien hizo la propuesta” still says someone did.', formula: ['Fue + FOCO + quien / el que / cuando / donde / como + resto presupuesto', 'Fue Marta quien hizo la propuesta → alguien la hizo (y fue Marta, solo ella)', 'No fue Marta quien… → alguien la hizo, pero no Marta'],
            meaning: 'En la clase 184 viste cómo se construyen las escindidas. En C2 importa cómo **reparten el trabajo**: la relativa es **presupuesta** (alguien hizo la propuesta) y el foco, tras «ser», es lo **afirmado**, normalmente como **único** (Marta y nadie más). Por eso son ideales para **corregir un solo dato** sin tocar el resto. Y al negarlas, la presuposición sigue en pie: «**No fue Marta quien** hizo la propuesta» sigue diciendo que alguien la hizo.',
            examples: [
              { es: '[[Fue Marta quien|violet]] hizo la propuesta, no el alcalde.', en: 'It was Marta who made the proposal, not the mayor: the person is corrected, the proposal itself is not in question.' },
              { es: '[[Fue en 2023 cuando|violet]] se aprobó el carril bus.', en: 'It was in 2023 that the bus lane was approved: the date is what is being corrected.' },
              { es: '[[Es aquí donde|violet]] el anuncio exagera.', en: 'This is where the ad exaggerates: “aquí” is an adverb, so no preposition is repeated.' },
              { es: '[[Lo que no dice|violet]] el folleto [[es|violet]] cuánto costará.', en: 'What the leaflet doesn’t say is how much it will cost: a pseudo-cleft that highlights an omission.' },
            ] },
          { kind: 'table', title: 'Cuatro maneras de corregir · Four ways to correct', head: ['Recurso', 'Ejemplo', 'Cuándo · When'], rows: [
            ['acento en su sitio', 'Se lo dije a [[ANA|violet]], no a ti.', 'conversación; el acento lo hace todo'],
            ['foco antepuesto', '[[A ANA|violet]] se lo dije, no a ti.', 'conversación expresiva; el verbo va justo detrás'],
            ['escindida', '[[Fue a Ana a quien|violet]] se lo dije.', 'oral y escrito; se repite la preposición'],
            ['no…, sino…', 'No se lo dije a ti, **sino** a Ana.', 'oral y escrito; corrige con «sino», no con «pero»'],
          ], note: 'Recuerda la concordancia: «**Fueron** los vecinos **quienes** lo pidieron», «Lo que nos falta **son** dos semanas», «Es **con** Rafael **con** quien hay que hablar».' },
          { kind: 'tip', icon: '🌎', title: '«Es por eso que…» · A question of norm and region', text: 'En «Es por eso que…» el «que» ocupa el lugar de «por lo que»: la NGLE lo llama **«que galicado»** y señala que **«es por eso que»** es su variante más extendida y mejor aceptada, sobre todo en **América**, donde aparece también en textos cuidados. En el uso cuidado de **España** se prefiere «**Por eso es por lo que…**», «**Es por eso por lo que…**» o, más sencillo, «**Por eso…**». Con otros focos («Fue entonces que…», «Fue allí que…») la recomendación general en registro culto es el relativo propio: «Fue entonces **cuando**», «Fue allí **donde**».', en: 'In “Es por eso que…”, “que” stands where the norm has “por lo que”. The Academies’ grammar calls this the “Gallicism que” and notes that “es por eso que” is its most widespread and most accepted form, above all in Latin America, where it also appears in careful writing. Careful European usage prefers “Por eso es por lo que…”, “Es por eso por lo que…” or just “Por eso…”. With other foci, the general recommendation in formal registers is the matching relative: “Fue entonces cuando”, “Fue allí donde”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No fue la concejala quien filtró el informe». ¿Qué sigue dando por hecho la frase?', options: ['Que alguien filtró el informe.', 'Que el informe no existe.', 'Que la concejala filtró otro informe.'], answer: 0, why: 'La negación afecta al foco (la concejala); la relativa presupuesta, «alguien lo filtró», sigue en pie.', en: 'Negating a cleft leaves its presupposition intact.' },
            { prompt: 'Un periódico de Madrid, en un editorial muy cuidado: «___ pedimos una rectificación».', options: ['Es por eso por lo que', 'Es por eso por que', 'Es por eso lo que'], answer: 0, why: 'En el uso cuidado de España se prefiere «Es por eso por lo que» (o «Por eso…»). Las otras dos no son formas aceptadas.', en: 'Which form fits careful European usage?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: '¿Forma, alcance o estrategia? Form, scope or strategy?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: la forma, el alcance o la estrategia.', self: 'Lee cada frase y decide qué falla antes de mirar la corrección: ¿la forma, el alcance o la estrategia? (Form, scope or strategy?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Lamento que la empresa no ha pagado las facturas.', right: 'Lamento que la empresa no haya pagado las facturas.', why: '«Lamentar que» da el hecho por cierto, pero exige subjuntivo: valora, no informa.' },
            { wrong: 'Es con la directora quien tienes que hablar.', right: 'Es con la directora con quien tienes que hablar.', why: 'Si el foco lleva preposición, la escindida la repite ante el relativo.' },
            { wrong: 'Lo que pedimos es dos cosas: transparencia y plazos.', right: 'Lo que pedimos son dos cosas: transparencia y plazos.', why: 'Con un foco plural, «ser» concuerda en plural.' },
            { wrong: 'La consejera ha leído ni siquiera el resumen.', right: 'La consejera no ha leído ni siquiera el resumen.', why: '«Ni siquiera» detrás del verbo exige «no» delante; delante del verbo, no lo lleva.' },
            { wrong: '—¿Cuándo dejó de mentir a los vecinos? —Hace años que ya no miento.', right: '—¿Cuándo dejó de mentir a los vecinos? —Nunca les he mentido: su pregunta da por hecho algo falso.', why: 'Error de estrategia: «ya no miento» acepta la presuposición. Hay que rechazarla de forma explícita.' },
            { wrong: 'Fue el 3 de mayo que se firmó el acuerdo. (informe oficial de un organismo español)', right: 'Fue el 3 de mayo cuando se firmó el acuerdo.', why: 'Con foco temporal, el registro culto general prefiere «cuando». El «que» es frecuente en algunas variedades americanas, pero se evita en textos cuidados.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Una periodista pregunta: «¿Por qué ha cerrado usted el centro de salud del barrio?». El centro sigue abierto. ¿Qué respuesta es más eficaz?', options: ['«Lo cerramos por falta de presupuesto».', '«Su pregunta da por hecho algo que no ha ocurrido: el centro sigue abierto».', '«No lo sé».'], answer: 1, why: 'La pregunta presupone el cierre. Solo la respuesta que lo nombra y lo niega evita aceptarlo.', en: 'Which answer refuses the premise instead of accepting it?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno inventa una pregunta cargada sobre un tema neutro (el tráfico, el café de la oficina) y tú la desmontas en voz alta. Después cambian los papeles.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La redacción de «La letra pequeña»', coach: 'Toca cada marca: ¿qué se da por hecho? Tap each mark: what is assumed?',
      steps: [
        { title: 'Revisando el debate · Going through the debate', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Hugo y Carla. Después tu alumno toca cada expresión marcada y explica qué da por hecho o qué destaca.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿qué da por hecho, qué afirma o qué destaca? (What does each one assume, assert or highlight?)' } },
          { kind: 'explore', title: '«No lo que dijeron, sino lo que dieron por hecho»', setting: 'Radio Puerto Alba, nueve de la mañana. Irene Valcárcel prepara la sección de verificación con Hugo Morales y la becaria Carla Ruiz. Tienen la transcripción del debate y las actas municipales.', lines: [
            { who: 'Hugo', text: 'Empiezo por el alcalde: «[[Lamento que|orange]] la oposición [[haya vuelto a|orange]] bloquear el presupuesto».', en: 'I’ll start with the mayor: “I regret that the opposition has blocked the budget yet again.”' },
            { who: 'Carla', text: '¿Y qué hay que verificar? Que votaron en contra es verdad.', en: 'What is there to check? It’s true they voted against it.' },
            { who: 'Irene', text: 'Eso es lo que se ve. Pero «volver a» da por hecho que ya lo habían bloqueado antes. [[Lo que tenemos que comprobar es|violet]] si hubo una vez anterior.', en: 'That’s the visible part. But “volver a” takes it for granted that they had blocked it before. What we need to check is whether there was an earlier time.' },
            { who: 'Hugo', text: 'No la hubo: es la primera vez en cuatro años. Segunda frase: «[[Fui yo quien propuso|violet]] el autobús nocturno».', en: 'There wasn’t: it’s the first time in four years. Second statement: “I was the one who proposed the night bus.”' },
            { who: 'Carla', text: 'Eso es falso, ¿no? [[Fue Marta Ledesma quien|violet]] lo presentó en el pleno de marzo.', en: 'That’s false, isn’t it? It was Marta Ledesma who tabled it at the March council meeting.' },
            { who: 'Irene', text: 'Exacto, y lo contaremos con el foco en la persona. El alcalde no lo propuso: [[lo APROBÓ|violet]], un año después, que no es lo mismo.', en: 'Exactly, and we’ll tell it with the focus on the person. The mayor didn’t propose it: he APPROVED it, a year later, which isn’t the same thing.' },
            { who: 'Hugo', text: 'Ledesma tampoco se libra. Le preguntó: «[[¿Cuándo va a dejar de|orange]] prometer lo que no cumple?».', en: 'Ledesma doesn’t get off lightly either. She asked him: “When are you going to stop promising what you don’t deliver?”' },
            { who: 'Carla', text: 'Y él contestó «Este año no he prometido nada nuevo». ¡[[Ni siquiera|teal]] rechazó la premisa!', en: 'And he answered “I haven’t promised anything new this year.” He didn’t even reject the premise!' },
            { who: 'Irene', text: 'Ahí está la trampa: conteste lo que conteste, acepta que promete sin cumplir. ¿Y el anuncio de Villa? «[[Incluso|teal]] los comerciantes del centro apoyan el plan».', en: 'That’s the trap: whatever he answers, he accepts that he breaks promises. And Villa’s ad? “Even the shopkeepers in the centre back the plan.”' },
            { who: 'Hugo', text: '[[Solo|teal]] lo apoya la asociación de la calle Mayor; las otras dos, no.', en: 'Only the high-street association backs it; the other two don’t.' },
            { who: 'Carla', text: 'Y el alcalde aseguró que [[ya no|orange]] hay lista de espera en las guarderías municipales. Eso lo verifico yo.', en: 'And the mayor claimed there is no longer a waiting list for the council nurseries. I’ll check that one.' },
            { who: 'Irene', text: 'Perfecto. Y cuidado con Ledesma cuando habla de [[la subida del transporte|orange]]: de momento es solo una propuesta.', en: 'Perfect. And watch Ledesma when she talks about “the public transport price rise”: for now it’s only a proposal.' },
          ], notes: {
            'Lamento que': '**Verbo factivo** de sentimiento: da por hecho que la oposición bloqueó el presupuesto. Va con **subjuntivo** (haya vuelto), pero el hecho no se pone en duda.',
            'haya vuelto a': '**Volver a** presupone una vez anterior. Es lo que Hugo tiene que comprobar, y resulta falso.',
            'Lo que tenemos que comprobar es': '**Pseudoescindida**: la relativa (hay algo que comprobar) se da por sabida y el foco va al final: «si hubo una vez anterior».',
            'Fui yo quien propuso': '**Escindida** con foco en «yo»: presupone que alguien propuso el autobús y afirma que fue él, y nadie más. «Fui» concuerda con «yo»; con «quien», el verbo de la relativa puede ir en 3.ª persona (propuso) o concordar con «yo» (propuse).',
            'Fue Marta Ledesma quien': '**Escindida correctiva**: mantiene la presuposición (alguien lo propuso) y corrige solo el foco: la persona.',
            'lo APROBÓ': '**Foco correctivo** con acento: el contraste es entre dos verbos, proponer y aprobar. Se marca con el acento, sin cambiar el orden.',
            '¿Cuándo va a dejar de': '**Pregunta cargada**: «dejar de» presupone que el alcalde promete sin cumplir, y la pregunta solo deja abierto el cuándo.',
            'Ni siquiera': '**Ni siquiera** delante del verbo, sin «no»: rechazar la premisa era lo mínimo que se esperaba, y no lo hizo.',
            'Incluso': '**Incluso** presupone que otros apoyan el plan y que los comerciantes eran los menos esperables. Así el anuncio sugiere un apoyo casi general.',
            'Solo': '**Solo** delante del sujeto: la asociación lo apoya (presupuesto) y nadie más (afirmado). Desmonta el «incluso» del anuncio.',
            'ya no': '**Ya no** presupone que antes había lista de espera y afirma que ahora no hay. Carla verificará la afirmación, no la presuposición.',
            'la subida del transporte': '**Descripción definida**: presenta la subida como un hecho. Si solo es una propuesta, la expresión la da por hecha sin argumentarlo.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Por qué es engañosa la frase del alcalde sobre el presupuesto?', options: ['Porque es la primera vez que la oposición lo bloquea, y «volver a» sugiere lo contrario.', 'Porque el alcalde no lamenta nada.', 'Porque la oposición votó a favor.'], answer: 0, why: 'Hugo lo comprueba: «es la primera vez en cuatro años». La presuposición de «volver a» es falsa.', en: 'Which presupposition turns out to be false?' },
            { prompt: '¿Qué hizo el alcalde con el autobús nocturno?', options: ['Lo propuso en el pleno de marzo.', 'Lo rechazó.', 'Lo aprobó un año después de que Ledesma lo propusiera.'], answer: 2, why: 'Irene: «El alcalde no lo propuso: lo aprobó, un año después».', en: 'What was the mayor’s actual role?' },
            { prompt: '¿Qué error cometió el alcalde al responder a Ledesma?', options: ['No respondió.', 'Admitió que había prometido algo nuevo.', 'Respondió dentro de la premisa en lugar de rechazarla.'], answer: 2, why: '«Este año no he prometido nada nuevo» no niega que prometa sin cumplir: acepta la presuposición.', en: 'Why was his answer a mistake?' },
          ] },
        ] },
        { title: '¿Lo afirma o lo da por hecho? · Asserted or assumed?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno decide si cada contenido se afirma o se presupone en la frase original, y aplica la prueba de la negación en voz alta.', self: 'Para cada contenido, decide si la frase original lo afirma o lo da por hecho. Usa la prueba de la negación. (Use the negation test.)' } },
          { kind: 'classify', title: 'Afirmado o presupuesto · Asserted or presupposed', categories: [
            { id: 'afirma', label: 'LO AFIRMA', tone: 'blue' },
            { id: 'presupone', label: 'LO DA POR HECHO', tone: 'orange' },
          ], items: [
            { text: '«Lamento que la oposición haya bloqueado el presupuesto» → la oposición bloqueó el presupuesto', answer: 'presupone', why: '«Lamentar» es factivo: el bloqueo sigue en pie aunque digas «No lamento que…».' },
            { text: '«Fui yo quien propuso el autobús» → alguien propuso el autobús', answer: 'presupone', why: 'Es la relativa de la escindida; también sigue en pie con «No fui yo quien…».' },
            { text: '«Fui yo quien propuso el autobús» → esa persona fue el alcalde', answer: 'afirma', why: 'Es el foco: lo que la escindida pone en discusión, y lo que la negación cambia.' },
            { text: '«¿Cuándo va a dejar de prometer lo que no cumple?» → el alcalde promete lo que no cumple', answer: 'presupone', why: '«Dejar de» lo da por hecho; la pregunta solo pide el momento.' },
            { text: '«Incluso los comerciantes apoyan el plan» → los comerciantes apoyan el plan', answer: 'afirma', why: 'Es lo que se dice abiertamente; «No es verdad que incluso los comerciantes…» lo niega.' },
            { text: '«Incluso los comerciantes apoyan el plan» → otros grupos también lo apoyan', answer: 'presupone', why: 'Lo aporta «incluso»: se da por hecho que hay otros apoyos.' },
            { text: '«Ya no hay lista de espera» → ahora no hay lista de espera', answer: 'afirma', why: 'Es la información nueva que Carla va a verificar.' },
            { text: '«Ya no hay lista de espera» → antes había lista de espera', answer: 'presupone', why: '«Ya no» da por hecho la situación anterior; «¿Ya no hay lista?» la mantiene.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'La letra pequeña, frase a frase', coach: 'Busca el equipaje y corrige con precisión. Find the baggage, correct precisely.',
      steps: [
        { title: '¿Qué da por hecho? · What does it take for granted?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase de anuncio o de discurso político y tu alumno dice qué presupone antes de mirar las opciones.', self: 'Lee cada frase y di qué presupone antes de mirar las opciones. (Say the presupposition before looking at the options.)' } },
          { kind: 'choice', title: 'Publicidad y política · Advertising and politics', items: [
            { prompt: 'Anuncio de un gimnasio: «Vuelve a ponerte tus vaqueros favoritos».', options: ['Que antes te los ponías y ahora ya no te quedan bien.', 'Que nunca has tenido vaqueros.', 'Que el gimnasio vende ropa.'], answer: 0, why: '«Volver a» presupone que antes lo hacías, y el anuncio deja que el oyente complete por qué dejó de hacerlo.', en: 'A gym ad: “Fit back into your favourite jeans”.' },
            { prompt: '«La consejera no sabía que el contrato se había adjudicado sin concurso». ¿Qué se da por hecho?', options: ['Nada: la frase es negativa.', 'Que la consejera adjudicó el contrato.', 'Que el contrato se adjudicó sin concurso.'], answer: 2, why: '«Saber» es factivo: aun negado, deja en pie lo que sigue a «que».', en: 'What does “didn’t know that…” still commit the speaker to?' },
            { prompt: '«La consejera no cree que el contrato se adjudicara sin concurso». ¿Da quien habla por hecho la adjudicación sin concurso?', options: ['No: «creer» no es factivo y el hecho queda abierto.', 'Sí, porque el subjuntivo lo presupone.', 'Sí, porque está en pasado.'], answer: 0, why: '«Creer» no compromete con el hecho. El subjuntivo aquí lo pide la negación de «creer», no una presuposición.', en: 'Compare with the previous sentence.' },
            { prompt: 'Folleto de un banco: «Descubre por qué miles de familias ya confían en nosotros».', options: ['Que te explican cómo abrir una cuenta.', 'Que miles de familias confían en el banco; «ya», además, sugiere que tú vas con retraso.', 'Que antes las familias no confiaban.'], answer: 1, why: 'La interrogativa indirecta «por qué…» da por hecho su contenido (las familias confían); «ya» añade la idea de que los demás se te han adelantado.', en: 'A bank leaflet: “Find out why thousands of families already trust us”.' },
          ] },
        ] },
        { title: 'Clasifica los activadores · Sort the triggers', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: '¿Qué activa la presuposición? · What triggers it?', categories: [
            { id: 'factivo', label: 'VERBO FACTIVO', tone: 'orange' },
            { id: 'cambio', label: 'CAMBIO, REPETICIÓN O FASE', tone: 'orange' },
            { id: 'descripcion', label: 'DESCRIPCIÓN DEFINIDA', tone: 'neutral' },
            { id: 'pregunta', label: 'PREGUNTA CARGADA', tone: 'neutral' },
          ], items: [
            { text: 'Nos alegra que hayas elegido nuestra tienda.', answer: 'factivo', why: '«Alegrarse de que» da por hecho la elección, con subjuntivo de valoración.' },
            { text: 'El ministro se dio cuenta tarde de que el puente no cabía en el presupuesto.', answer: 'factivo', why: '«Darse cuenta de que» presupone lo que sigue: el puente no cabía.' },
            { text: 'Deja de pagar de más por la luz.', answer: 'cambio', why: '«Dejar de» presupone que ahora pagas de más.' },
            { text: 'El concejal sigue sin explicar los gastos del viaje.', answer: 'cambio', why: '«Seguir sin» presupone que antes tampoco los había explicado.' },
            { text: 'El despilfarro de la anterior directiva nos obliga a ahorrar.', answer: 'descripcion', why: 'El sintagma definido presenta el despilfarro como un hecho, sin argumentarlo.' },
            { text: 'Los errores del último mandato no se repetirán.', answer: 'descripcion', why: '«Los errores del último mandato» da por hecho que los hubo.' },
            { text: '¿Por qué esconde el Gobierno las cifras del paro juvenil?', answer: 'pregunta', why: 'La pregunta solo pide la causa; que el Gobierno esconde las cifras se da por hecho.' },
            { text: '¿A quién piensa culpar del retraso esta vez?', answer: 'pregunta', why: 'Presupone que piensa culpar a alguien, y «esta vez», que ya lo ha hecho antes.' },
          ] },
        ] },
        { title: '¿Está bien? · Is it right?', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', title: 'Forma y alcance · Form and scope', items: [
            { sentence: 'Ni siquiera no ha contestado a mi correo.', ok: false, options: ['Ni siquiera no contestó a mi correo.', 'Ni siquiera ha contestado a mi correo.', 'No ni siquiera ha contestado a mi correo.'], answer: 1, why: 'Delante del verbo, «ni siquiera» ya es negativo: no lleva «no».' },
            { sentence: 'Lamentamos que el servicio ha estado interrumpido toda la mañana.', ok: false, options: ['Lamentamos que el servicio estaría interrumpido toda la mañana.', 'Lamentamos que el servicio haya estado interrumpido toda la mañana.', 'Lamentamos que el servicio está interrumpido toda la mañana.'], answer: 1, why: '«Lamentar que» exige subjuntivo aunque el hecho se dé por cierto.' },
            { sentence: 'Fue en la rueda de prensa donde el alcalde lo reconoció.', ok: true, why: 'Foco de lugar → «donde», y «fue» en pasado como «reconoció».' },
            { sentence: 'Es a la portavoz quien hay que preguntar.', ok: false, options: ['Es a la portavoz a quien hay que preguntar.', 'Es a la portavoz la que hay que preguntar.', 'Es a la portavoz que hay que preguntar.'], answer: 0, why: 'El foco lleva «a», y la escindida repite la preposición ante el relativo.' },
            { sentence: 'Lo que la campaña necesita es tres semanas más.', ok: false, options: ['Los que la campaña necesita son tres semanas más.', 'Lo que la campaña necesitan es tres semanas más.', 'Lo que la campaña necesita son tres semanas más.'], answer: 2, why: 'Con un foco plural, «ser» va en plural; el relativo sigue siendo «lo que».' },
            { sentence: 'Me di cuenta de que el anuncio no decía el precio final.', ok: true, why: '«Darse cuenta de que» lleva indicativo y conserva «de».' },
          ] },
        ] },
        { title: 'En antena · On air', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Leen la llamada de un oyente: tú eres el oyente y tu alumno es Hugo, que corrige sin repetir lo que ya está claro.', self: 'Completa las respuestas de Hugo a un oyente. Corrige solo el dato erróneo. (Correct only the wrong piece.)' } },
          { kind: 'chat-fill', title: 'Un oyente llama · A listener calls in', lines: [
            { who: 'Oyente', text: 'Yo leí que el alcalde propuso el autobús nocturno.' },
            { who: 'Hugo', text: 'No, ___ lo propuso.', options: ['fue Marta Ledesma quien', 'fue Marta Ledesma que', 'fue Marta Ledesma la cual'], answer: 0, why: 'Con un foco de persona, la escindida usa «quien» o «la que». «La cual» no se usa en escindidas, y «que» solo, con un foco de persona, es un uso que la norma general recomienda evitar.' },
            { who: 'Oyente', text: 'Pero el alcalde lo puso en marcha, ¿no?' },
            { who: 'Hugo', text: 'Sí: ___ empezó a funcionar, un año después.', options: ['fue en 2024 donde', 'fue en 2024 cuando', 'es en 2024 cuando'], answer: 1, why: 'Foco de tiempo → «cuando», y «ser» en pasado, como «empezó».' },
            { who: 'Oyente', text: 'Entonces, ¿funciona también los domingos?' },
            { who: 'Hugo', text: 'No, los domingos ___ funciona; está previsto para el verano.', options: ['tampoco no', 'todavía no', 'ya no'], answer: 1, why: '«Todavía no» presupone que se espera que funcione; «ya no» supondría que antes funcionaba los domingos.' },
            { who: 'Oyente', text: '¿Y el plan de vivienda? El alcalde dice que lo apoyan incluso los bancos.' },
            { who: 'Hugo', text: 'Lo apoya un banco; ___ la asociación de inquilinos lo ha estudiado todavía.', options: ['también', 'incluso', 'ni siquiera'], answer: 2, why: 'La asociación de inquilinos era la primera que debía estudiarlo: «ni siquiera», delante del verbo y sin «no».' },
          ] },
        ] },
        { title: 'Construye el foco · Build the focus', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['Fueron', 'los vecinos', 'quienes', 'pidieron', 'el cambio.'], accept: ['Fueron los vecinos quienes pidieron el cambio.'], en: 'It was the residents who asked for the change (plural focus, plural “ser”).' },
            { tiles: ['Lo que', 'no dice', 'el anuncio', 'es', 'el precio', 'final.'], accept: ['Lo que no dice el anuncio es el precio final.', 'Lo que el anuncio no dice es el precio final.'], en: 'What the ad doesn’t tell you is the final price.' },
            { tiles: ['Por eso', 'es', 'por lo que', 'pedimos', 'una rectificación.'], accept: ['Por eso es por lo que pedimos una rectificación.', 'Es por eso por lo que pedimos una rectificación.'], en: 'That is why we are asking for a correction (the form preferred in careful European usage).' },
          ] },
        ] },
        { title: 'Corrige el malentendido · Correct the misunderstanding', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno escribe la corrección y después la dice en voz alta con el acento en el foco.', self: 'Escribe la corrección y léela en voz alta con el acento en lo que corriges. (Stress the corrected element.)' } },
          { kind: 'rewrite', title: 'Escindidas para corregir · Clefts that correct', items: [
            { prompt: 'Un oyente cree que el alcalde presentó la propuesta. La presentó Marta Ledesma.', instruction: 'Corrige con una escindida que empiece por «Fue Marta Ledesma».', accept: ['Fue Marta Ledesma quien presentó la propuesta', 'Fue Marta Ledesma quien la presentó', 'Fue Marta Ledesma la que presentó la propuesta', 'Fue Marta Ledesma la que la presentó', 'Fue Marta Ledesma quien presentó la propuesta no el alcalde', 'Fue Marta Ledesma la que presentó la propuesta no el alcalde'] },
            { prompt: 'Todos creen que al equipo le falta dinero. En realidad, le falta tiempo.', instruction: 'Corrige con una pseudoescindida que empiece por «Lo que nos falta».', accept: ['Lo que nos falta es tiempo', 'Lo que nos falta es el tiempo', 'Lo que nos falta es tiempo no dinero', 'Lo que nos falta es el tiempo no el dinero', 'Lo que nos falta no es dinero sino tiempo', 'Lo que nos falta no es el dinero sino el tiempo'] },
            { prompt: 'El periódico dice que el puente se aprobó en 2023. Se aprobó en 2022.', instruction: 'Corrige con una escindida de tiempo que empiece por «Fue en 2022».', accept: ['Fue en 2022 cuando se aprobó el puente', 'Fue en 2022 cuando se aprobó', 'Fue en 2022 cuando el puente se aprobó', 'Fue en 2022 cuando se aprobó el puente no en 2023', 'Fue en 2022 cuando se aprobó no en 2023'] },
            { prompt: '¿Cuándo dejó usted de financiar las bibliotecas?', instruction: 'Desactiva la pregunta cargada: hazla de sí o no, empezando por «¿Ha reducido usted» y con «la financiación de las bibliotecas».', accept: ['¿Ha reducido usted la financiación de las bibliotecas?'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La sección de Irene', coach: 'Escucha lo que se presupone. Listen for what is assumed.',
      steps: [
        { title: '«La letra pequeña», en antena · On air', blocks: [
          { kind: 'guide', text: { teacher: 'Escuchan el audio una vez para la idea general y otra para los detalles. Tu alumno anota cada frase del debate y qué tenía de engañoso.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada frase del debate y qué tenía de engañoso. (Note each statement and what was misleading.)' } },
          { kind: 'listen', title: 'Lo que dieron por hecho', channel: 'RADIO PUERTO ALBA · LA LETRA PEQUEÑA', src: '/audio/grammar-live/519.mp3',
            before: 'Irene repasa en la radio el debate de anoche. ¿Crees que hablará más de lo que afirmaron los candidatos o de lo que dieron por hecho? (Will she focus on what was asserted or on what was assumed?)',
            gist: { prompt: '¿Qué hace Irene en su sección? · What does Irene do?', options: ['Explica quién ganó el debate.', 'Resume las propuestas de los dos candidatos.', 'Verifica sobre todo lo que los candidatos dieron por hecho en sus frases.'], answer: 2, why: 'Lo anuncia al principio: «revisamos no lo que dijeron los candidatos, sino lo que dieron por hecho».', en: 'She checks the presuppositions, not just the claims.' },
            details: [
              { prompt: '¿Por qué no se sostiene el «volver a» del alcalde?', options: ['Porque el presupuesto no se ha votado.', 'Porque es la primera vez que la oposición vota en contra.', 'Porque la oposición votó a favor.'], answer: 1, why: '«La oposición votó en contra, es verdad, pero es la primera vez».', en: 'Why is “yet again” misleading?' },
              { prompt: '¿Quién propuso el autobús nocturno, y cuándo?', options: ['El alcalde, en marzo de 2023.', 'Marta Ledesma, hace un año.', 'Marta Ledesma, en marzo de 2023.'], answer: 2, why: '«Fue Marta Ledesma quien lo propuso, en marzo de 2023; el alcalde lo aprobó un año después».', en: 'Who proposed the night bus, and when?' },
              { prompt: 'Según Irene, ¿cuál era la mejor respuesta a la pregunta de Ledesma?', options: ['No contestar.', 'Prometer que no volverá a ocurrir.', 'Discutir la premisa de la pregunta.'], answer: 2, why: '«La mejor respuesta no es “ya no lo haré”, sino discutir la premisa».', en: 'What answer does Irene recommend?' },
              { prompt: '¿Qué encontraron sobre el apoyo de los comerciantes?', options: ['Que ningún comerciante apoya el plan.', 'El apoyo de las tres asociaciones.', 'El apoyo de una asociación, no de todo el comercio.'], answer: 2, why: '«Encontramos el apoyo de una asociación, no de todo el comercio».', en: 'How much shopkeeper support did they find?' },
              { prompt: '¿Cuántas familias siguen esperando plaza en las guarderías?', options: ['Ninguna.', 'Doce.', 'Cuarenta y dos.'], answer: 2, why: '«Quedan cuarenta y dos familias esperando».', en: 'How many families are still waiting?' },
            ],
            transcript: 'Buenas tardes, esto es «La letra pequeña» y les habla Irene Valcárcel. Anoche hubo debate en Puerto Alba, y hoy revisamos no lo que dijeron los candidatos, sino lo que dieron por hecho. Empecemos por el alcalde Villa: «[[Lamento que la oposición haya vuelto a bloquear|orange]] el presupuesto». La oposición votó en contra, es verdad, pero es la primera vez: el «volver a» no se sostiene. Segunda frase: «[[Fui yo quien propuso|violet]] el autobús nocturno». Revisamos las actas y no: [[fue Marta Ledesma quien|violet]] lo propuso, en marzo de 2023; el alcalde lo aprobó un año después. Ahora, la candidata Ledesma. Le preguntó al alcalde: «[[¿Cuándo va a dejar de|orange]] prometer lo que no cumple?». Es una pregunta cargada: no pide la información, la da por supuesta. [[Es por eso que|violet]] la mejor respuesta no es «ya no lo haré», sino discutir la premisa. Su anuncio de campaña, además, asegura que [[incluso|teal]] los comerciantes del centro apoyan el plan. Encontramos el apoyo de una asociación, no de todo el comercio. Por último, el alcalde afirmó que [[ya no|orange]] hay lista de espera en las guarderías. [[Ni siquiera|teal]] su propia concejalía lo confirma: quedan cuarenta y dos familias esperando. Mi consejo para el próximo debate: escuchen lo que se afirma, pero sobre todo lo que se da por hecho. Hasta mañana.',
            reply: { teacher: 'Tú eres el jefe de prensa del alcalde y llamas a la radio para protestar. Tu alumno es Irene y defiende cada verificación, separando lo que el alcalde afirmó de lo que dio por hecho.', self: 'Responde en voz alta como Irene a un oyente que pregunta: «¿Entonces el alcalde mintió?». Distingue lo afirmado de lo presupuesto. (Separate assertion from presupposition.)' } },
          { kind: 'tip', icon: '🌎', title: '«Es por eso que» en la voz de Irene · Irene’s “Es por eso que”', text: 'Irene es colombiana y dice «**Es por eso que** la mejor respuesta…». Es la variante del «que galicado» más extendida y aceptada, y en muchos países americanos se oye también en la radio y en textos cuidados. En el uso cuidado de España, la misma idea se diría «Por eso, la mejor respuesta…» o «Es por eso por lo que…».', en: 'Irene is Colombian and says “Es por eso que…”, the most widespread and accepted form of this construction, heard on the radio and in careful writing in many Latin American countries. Careful European usage would prefer “Por eso…” or “Es por eso por lo que…”.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Desmontar y corregir', coach: 'Nombra la premisa y corrige solo lo que falla. Name the premise, fix only what is wrong.',
      steps: [
        { title: 'Debates, anuncios y malentendidos · Debates, ads and misunderstandings', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde durante uno o dos minutos. Si acepta una premisa sin darse cuenta, tú repites la pregunta y tu alumno la desmonta.', self: 'Responde a cada tarjeta en voz alta durante uno o dos minutos. Antes de contestar, pregúntate qué da por hecho la pregunta. (Ask yourself what each question assumes.)' } },
          { kind: 'talk', cards: [
            { q: 'Eres el alcalde Villa. Responde a «¿Cuándo va a dejar de prometer lo que no cumple?» sin aceptar la premisa. · Answer the loaded question without accepting it.', followUps: ['¿Qué promesa concreta citarías como cumplida?', '¿Cómo lo dirías sin sonar a la defensiva?', '¿Le devolverías una pregunta cargada a Ledesma?'], phrases: ['Su pregunta [[da por hecho|orange]] que…', 'Eso no es así: [[lo que|violet]] hemos hecho [[es|violet]]…', '[[Fue|violet]] este equipo [[el que|violet]]…'], hint: 'Primero nombra la presuposición y niégala; después da un dato.', example: 'Su pregunta da por hecho que incumplo mis promesas, y eso no es así. Prometí la piscina del barrio norte y fue este equipo el que la abrió en junio. Lo que sí reconozco es que el carril bici va con retraso, y lo explicaré.' },
            { q: 'Recuerda un anuncio (sin decir la marca) y explica qué da por hecho. · Analyse an ad you remember.', followUps: ['¿Funciona precisamente por esa presuposición?', '¿Qué no dice el anuncio?'], phrases: ['El anuncio [[presupone|orange]] que…', '«[[Vuelve a|orange]]…» / «[[Deja de|orange]]…» / «¿[[Todavía|orange]]…?»', '[[Lo que no dice|violet]] [[es|violet]]…'], hint: 'Busca un activador (volver a, dejar de, todavía, ya) y explica la escena que el anuncio hace imaginar.', example: 'Había un anuncio de colchones que decía «Vuelve a dormir como antes». Presupone que antes dormías bien y que ahora no, y te hace sentir que el problema es tu colchón. Lo que no dice es que el insomnio puede tener otras causas.' },
            { q: 'Eres Hugo. Tu jefa ha felicitado a Carla por una verificación que hiciste tú. Corrígelo con elegancia. · Correct a misunderstanding politely.', followUps: ['¿Y si la jefa insiste?', '¿Cómo reconocerías la parte de Carla?'], phrases: ['[[Fui yo quien|violet]]…', '[[Lo que hizo|violet]] Carla [[fue|violet]]…', 'No…, [[sino|violet]]…'], hint: 'Corrige solo el dato erróneo con una escindida y reconoce lo que sí es verdad.', example: 'Gracias, pero hay un pequeño error: fui yo quien revisó las actas del pleno. Lo que hizo Carla fue verificar las listas de espera, y lo hizo muy bien. No es por quitarle mérito, sino para que el registro de la sección sea exacto.' },
            { q: '¿Deberían los periodistas evitar las preguntas cargadas, o a veces son legítimas? · Are loaded questions ever fair?', followUps: ['¿Y si la presuposición está demostrada?', '¿Qué diferencia hay entre una pregunta dura y una pregunta trampa?', 'Pon un ejemplo de cada una.'], phrases: ['[[Si|blue]] la presuposición está demostrada…', '[[Ni siquiera|teal]]…', '[[Lo que|violet]] importa [[es|violet]]…'], hint: 'Distingue entre presuponer algo probado y colar algo discutible.', example: 'Creo que una pregunta como «¿Por qué no ha cumplido el plazo?» es legítima si el retraso está demostrado: es dura, pero no es una trampa. Lo que no es aceptable es presuponer algo que nadie ha probado. Ni siquiera un buen entrevistador debería usar la pregunta para colar una acusación.' },
            { q: 'Cuenta algo sorprendente de tu trabajo o de tu ciudad con «incluso», «ni siquiera» y «solo». · Tell something surprising using focus particles.', followUps: ['¿Qué cambiaría si movieras «solo» de sitio?', '¿Qué das por hecho con «incluso»?'], phrases: ['[[Incluso|teal]]…', '[[Ni siquiera|teal]]…', '[[Solo|teal]]…', '[[Tampoco|teal]]…'], hint: 'Cada partícula debe ir justo delante de lo que destaca.', example: 'En mi oficina cambiaron el sistema informático sin avisar. Incluso el director se enteró por correo, y ni siquiera el técnico sabía la contraseña nueva. Solo una persona, la recepcionista, había leído las instrucciones.' },
            { q: 'Eres Marta Ledesma: reformula tu frase sobre «la subida del transporte» para que sea exacta. · Make your own claim honest.', followUps: ['¿Pierde fuerza la frase?', '¿Cómo mantienes la crítica sin presuponer nada falso?'], phrases: ['[[No es que|violet]]…, [[sino que|violet]]…', 'El gobierno [[propone|blue]]…', '[[Lo que|violet]] denuncio [[es|violet]]…'], hint: 'Convierte la descripción definida en una afirmación que se pueda discutir.', example: 'Rectifico: no es que el transporte haya subido, sino que el gobierno propone subirlo un quince por ciento en enero. Lo que denuncio es esa propuesta, que todavía estamos a tiempo de frenar.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno te hace dos preguntas cargadas sobre tu fin de semana y tú intentas desmontarlas.', self: 'Graba tus respuestas a dos tarjetas y escúchalas: ¿has aceptado alguna premisa sin querer? (Did you accept a premise without noticing?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La verificación para la web', coach: 'Separa lo afirmado de lo presupuesto. Separate the claim from the assumption.',
      steps: [
        { title: 'Tu verificación · Your fact-check', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee la verificación en voz alta y tú señalas cada presuposición que ha detectado.', self: 'Escribe la verificación y toca «Revisar mi texto». Después léela en voz alta: ¿se distingue con claridad lo afirmado de lo presupuesto? (Is the distinction clear?)' } },
          { kind: 'write', title: 'Nota de verificación · Fact-check note', situation: 'Irene te pide la verificación de dos frases del debate de cierre para la web de Radio Puerto Alba. Ledesma dijo: «Lamento que el alcalde siga sin cumplir su promesa de las bicicletas públicas». Villa dijo: «Fue este gobierno el que abrió el centro de mayores». Datos: las bicicletas funcionan desde junio, con la mitad de las estaciones prometidas; las obras del centro empezaron con el gobierno anterior y el de Villa las terminó. (Write the fact-check of two closing-debate statements for the station’s website.)', task: [
            'Explica en cada frase qué se afirma y qué se da por hecho.',
            'Verifica cada presuposición con los datos y da un veredicto (verdadera, engañosa, verdad a medias…).',
            'Corrige al menos un dato con una escindida o una pseudoescindida.',
            'Usa al menos una partícula de foco con su presuposición clara (solo, incluso, ni siquiera, tampoco).',
            'Cierra con una frase para los oyentes sobre lo que se presupone en los discursos.',
          ], starters: ['Dos frases del debate merecen una lectura atenta:…', 'La frase presupone…', 'Lo que no dice la frase es…', 'Fue el gobierno anterior el que…', 'Veredicto:…'],
            words: ['presupone', 'da por hecho', 'afirma', 'seguir sin', 'fue… el que', 'lo que… es', 'solo', 'ni siquiera', 'en exclusiva', 'veredicto', 'engañosa', 'verdad a medias'],
            model: 'Dos frases del debate de cierre merecen una lectura atenta, no por lo que afirman, sino por lo que dan por hecho. Marta Ledesma dijo: «Lamento que el alcalde siga sin cumplir su promesa de las bicicletas públicas». La frase presupone dos cosas: que hubo una promesa y que sigue sin cumplirse. La primera es cierta: figura en el programa de 2023. La segunda, solo a medias: el servicio funciona desde junio, aunque con la mitad de las estaciones previstas. Veredicto: engañosa. Ernesto Villa aseguró: «Fue este gobierno el que abrió el centro de mayores». La escindida da por hecho que alguien lo abrió, lo cual nadie discute, y atribuye el mérito en exclusiva al equipo actual. Pero las obras empezaron con el gobierno anterior: lo que hizo el equipo de Villa fue terminarlas. Veredicto: verdad a medias. Ni siquiera las frases verdaderas son siempre inocentes. Lo que se presupone también informa, y a veces es lo que más pesa.',
            minWords: 140,
            checks: [
              { label: 'Nombras la presuposición (presupone, da por hecho, da por supuesto…)', pattern: '(?<!\\p{L})(?:presupone|presuponen|presupuesto|presupuesta|presuposición|da\\s+por\\s+(?:hecho|supuesto|sentado)|dan\\s+por\\s+(?:hecho|supuesto|sentado))(?!\\p{L})', tip: 'Di qué da por hecho cada frase: «La frase presupone que…».' },
              { label: 'Una escindida o pseudoescindida (fue… el que / quien, lo que… es / fue)', pattern: '(?<!\\p{L})(?:(?:fue|fueron|es|son)\\s+(?:\\p{L}+\\s+){1,6}(?:quien|quienes|el\\s+que|la\\s+que|los\\s+que|las\\s+que|cuando|donde)|lo\\s+que\\s+(?:\\p{L}+\\s+){1,6}(?:es|fue|son|fueron))(?!\\p{L})', tip: 'Corrige un dato con el foco claro: «Fue el gobierno anterior el que…».' },
              { label: 'Una partícula de foco (solo, incluso, ni siquiera, tampoco)', pattern: '(?<!\\p{L})(?:solo|sólo|incluso|ni\\s+siquiera|tampoco)(?!\\p{L})', tip: 'Precisa el alcance: «solo a medias», «ni siquiera…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:ni\\s+siquiera|tampoco)\\s+no(?!\\p{L})', why: 'Delante del verbo, «ni siquiera» y «tampoco» ya niegan: no añadas «no».' },
              { pattern: '(?<!\\p{L})lament(?:o|a|amos|an)\\s+que\\s+(?:\\p{L}+\\s+){0,4}(?:ha|han|hemos)(?!\\p{L})', why: '«Lamentar que» va con subjuntivo: «lamento que haya…», no «que ha…».' },
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
            { tone: 'blue', label: 'AFIRMAR Y PRESUPONER', formula: 'niega o pregunta: lo que queda en pie, se presupone', example: 'El concejal no ha dejado de faltar → antes faltaba.', caption: 'La afirmación se discute; la presuposición se da por hecha.', en: 'The assertion is up for discussion; the presupposition survives negation and questions.' },
            { tone: 'orange', label: 'ACTIVADORES', formula: 'lamentar que + subj. · saber / darse cuenta de + indic. · dejar de · seguir sin · volver a · ya no · todavía · el + nombre · ¿por qué / cuándo…?', example: '¿Cuándo va a dejar de prometer lo que no cumple?', caption: 'Las preguntas cargadas se desmontan nombrando la premisa.', en: 'Triggers smuggle content in; loaded questions are defused by naming the premise.' },
            { tone: 'teal', label: 'PARTÍCULAS DE FOCO', formula: 'también / tampoco · incluso / hasta · ni siquiera (sin «no» delante del verbo) · solo', example: 'Ni siquiera el alcalde lo sabía. / El alcalde no lo sabía ni siquiera.', caption: 'Cada una presupone algo sobre las alternativas.', en: 'Each particle presupposes something about the alternatives, and its position sets its scope.' },
            { tone: 'violet', label: 'ESCINDIDAS Y CORRECCIÓN', formula: 'Fue + foco + quien / cuando / donde · Lo que… es · no…, sino… · Es por eso que (América) / Es por eso por lo que (España, uso cuidado)', example: 'Fue Marta quien hizo la propuesta, no el alcalde.', caption: 'La relativa se presupone; el foco se afirma como único.', en: 'The relative clause is presupposed; the focus is asserted, usually as the only one, which makes clefts ideal for corrections.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Ante cualquier frase de un discurso, pregunta: **¿qué tendría que ser verdad para que esto tenga sentido?** Eso es lo presupuesto. Si es falso, no discutas la frase: **discute la premisa**. Y para corregir, cambia **solo el foco**.', en: 'For any statement, ask what would have to be true for it to make sense: that is the presupposition. If it is false, argue with the premise, not the sentence. And when you correct, change only the focus.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: '«La directora no se ha dado cuenta de que faltan dos firmas». ¿Qué se da por hecho?', options: ['Que faltan dos firmas.', 'Nada: la frase es negativa.', 'Que la directora firmó.'], answer: 0, why: '«Darse cuenta de» es factivo: la negación no afecta a lo que sigue a «que».', en: 'What survives the negation?' },
            { prompt: 'Lamento que no ___ a la reunión de ayer.', options: ['pudiste venir', 'podrías venir', 'pudieras venir'], answer: 2, why: '«Lamentar que» + subjuntivo («pudieras» o «hayas podido»), aunque el hecho se da por cierto.', en: 'I’m sorry you couldn’t come to yesterday’s meeting.' },
            { prompt: '¿Cuál es correcta?', options: ['Es de presupuestos de lo que vamos a hablar.', 'Es de presupuestos que vamos a hablar de.', 'Es presupuestos de lo que vamos a hablar.'], answer: 0, why: 'El foco lleva «de», y la escindida repite la preposición ante el relativo.', en: 'Which cleft repeats the preposition correctly?' },
            { prompt: '«Hasta mi abuela usa ya esta aplicación». ¿Qué presupone?', options: ['Que su abuela no usa el móvil.', 'Que la aplicación es para mayores.', 'Que otros la usan y que la abuela era la menos esperable.'], answer: 2, why: '«Hasta» = incluso: presupone otros usuarios y sitúa a la abuela en el extremo de la escala.', en: '“Even my grandmother already uses this app.”' },
            { prompt: 'Te preguntan: «¿Por qué escondiste el informe?». No lo escondiste. ¿Qué respondes?', options: ['«No lo escondí: tu pregunta da por hecho algo que no pasó».', '«Ya no lo escondo».', '«Porque no estaba terminado».'], answer: 0, why: 'Las otras respuestas aceptan la presuposición. Hay que rechazarla de forma explícita.', en: 'Which answer rejects the premise?' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro escenario, la misma mirada. New setting, same lens.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: una entrevista de trabajo y la reunión de un equipo. Tu alumno elige y explica qué presuposición ha detectado o evitado.', self: 'Ahora, en una entrevista de trabajo y en la reunión de un equipo: elige la mejor opción y explica por qué. (A job interview and a team meeting.)' } },
          { kind: 'choice', title: 'Entrevista y reunión · Interview and meeting', items: [
            { prompt: 'En una entrevista te preguntan: «¿Por qué dura usted tan poco en los trabajos?». Has estado cinco años en tu último puesto.', options: ['«Porque busco nuevos retos».', '«Ya no me pasa».', '«Su pregunta da por hecho algo que no es exacto: en mi último puesto estuve cinco años».'], answer: 2, why: 'Las otras dos aceptan la presuposición («duro poco»). La tercera la nombra y la corrige con un dato.', en: 'A job interview: reject the premise without sounding rude.' },
            { prompt: 'Tu jefe cree que el error del informe es de Lucía. Fue de Pablo. ¿Qué dices?', options: ['«Incluso Pablo cometió el error».', '«Fue Pablo quien cometió el error, no Lucía».', '«Fue Pablo que cometió el error, no Lucía».'], answer: 1, why: 'La escindida con «quien» mantiene lo presupuesto (hubo un error) y corrige solo la persona.', en: 'Correct only who made the mistake.' },
            { prompt: 'Nadie del equipo leyó el informe, y la coordinadora, que debía leerlo, tampoco. ¿Qué frase lo resume mejor?', options: ['Ni siquiera la coordinadora leyó el informe.', 'La coordinadora también leyó el informe.', 'Incluso la coordinadora leyó el informe.'], answer: 0, why: '«Ni siquiera» marca que no se cumplió ni lo más esperable; delante del verbo no lleva «no».', en: 'Not even the person who was supposed to read it did.' },
          ] },
        ] },
        { title: 'Ampliación · Presuposición, implicatura y negación metalingüística', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1. Presuposición e implicatura.** «Por fin, un banco que te escucha» presupone que había una espera («por fin»), pero solo **insinúa** que los demás bancos no escuchan: es una **implicatura**, y se puede cancelar sin contradicción («…como tantos otros»). La presuposición, en cambio, resiste la negación. **2. Acomodación.** Cuando una presuposición es nueva para el oyente, este suele aceptarla sin darse cuenta para seguir la conversación: por eso funcionan las preguntas cargadas. **3. Negación metalingüística.** «No he dejado de fumar: **nunca he fumado**» no niega el contenido, sino la manera de plantearlo; necesita una continuación que lo deje claro y, al hablar, un acento especial.', en: 'For strong students or spare time. 1. A presupposition survives negation; an implicature is only suggested and can be cancelled without contradiction. 2. Accommodation: listeners tend to accept a new presupposition silently to keep the conversation going, which is why loaded questions work. 3. Metalinguistic negation rejects the way something is framed rather than its content, and needs an explicit follow-up.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: 'Anuncio: «Un banco que te escucha». Si añadiera «…como muchos otros, pero con mejores condiciones», ¿habría contradicción?', options: ['Sí: la segunda parte negaría una presuposición.', 'No: «los demás bancos no escuchan» solo se insinuaba (implicatura), y se puede cancelar.', 'Sí: un anuncio no puede matizar lo que acaba de decir.'], answer: 1, why: 'Lo que se cancela es una insinuación, no algo presupuesto: por eso no hay contradicción.', en: 'Can the suggestion be withdrawn without contradiction?' },
            { prompt: '«No es que el alcalde haya vuelto a mentir: es que nunca dijo la verdad». ¿Qué hace la primera parte?', options: ['Niega que el alcalde mienta.', 'Afirma que el alcalde nunca mintió.', 'Rechaza la manera de plantearlo para decir algo más fuerte.'], answer: 2, why: 'Es negación metalingüística: no defiende al alcalde, rechaza el marco «volver a» para endurecer la crítica.', en: 'A metalinguistic negation that makes the criticism stronger.' },
            { prompt: 'Un vecino acepta sin pensar «el fracaso del plan de vivienda» y pasa a hablar de soluciones. ¿Qué ha ocurrido?', options: ['Ha acomodado una presuposición: la ha aceptado sin discutirla.', 'Ha cancelado una implicatura.', 'Ha hecho una pregunta cargada.'], answer: 0, why: 'Al seguir la conversación, el oyente da por buena la presuposición de la descripción definida.', en: 'The listener accepted the assumption silently.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca un titular o un anuncio real, subraya sus presuposiciones y escribe una versión que las convierta en afirmaciones discutibles.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 220 · Tema, rema y orden marcado en textos complejos', text: 'Hoy has visto qué da por hecho una frase y cómo se pone el foco en un solo dato. En la clase 220 llevas esa mirada al **texto completo**: cómo se encadenan tema y rema de párrafo en párrafo y cuándo un orden marcado («La solución, nadie la esperaba») da fuerza y cohesión a un texto complejo.', en: 'Today you saw what a sentence takes for granted and how to put the focus on a single piece of information. Class 220 brings that lens to whole texts: how topic and rheme are chained from paragraph to paragraph, and when a marked order gives a complex text force and cohesion.', href: '/gramatica/tema-rema-y-orden-marcado-en', label: 'Ir a la clase 220' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Marta hizo la propuesta”, “Fue Marta quien hizo la propuesta” y “No fue Marta quien hizo la propuesta”?». Respuesta esperada: la primera informa; la segunda da por hecho que alguien la hizo y destaca a Marta como única; la tercera mantiene esa presuposición y niega solo el foco. Tarea: la verificación de Escribir.' },
        ] },
      ],
    },
  ],
};
