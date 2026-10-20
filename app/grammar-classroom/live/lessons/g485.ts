import type { LiveLesson } from '../types';

/**
 * Lesson 485 · C1 · Anteposición, dislocación y clíticos duplicados (course unit G185).
 * Builds on G163 (lesson 463: obligatory clitic with a fronted definite object, focus
 * without clitic, «a mí me») and G184 (lesson 484: topic/rheme, contrastive focus
 * fronting with inversion, clefts). Not retaught: basic doubling of indirect objects
 * and tonic pronouns, clefts, focus adverbs. C1 step: left dislocation as a topic
 * strategy, with a pause and a resumptive clitic that agrees (Las llaves, las tengo yo;
 * A tu hermano, no le digas nada); topics WITHOUT clitic because Spanish has none for
 * them (De eso, no quiero hablar; Con el casero, hablo yo; En Madrid, trabajé diez años;
 * bare nouns: Cajas, tenemos muchas); neuter «lo» resuming clauses and attributes
 * (Que vendrá, lo sé; Caro, lo es); topic markers «en cuanto a / respecto a / por lo
 * que respecta a / en lo que se refiere a» (formal) and the hanging topic, with no
 * preposition and a link inside (Mi jefe, no me fío de ese hombre; colloquial); right
 * dislocation as an afterthought (Ya lo sé, lo de la reunión; Me lo dijo ayer, tu
 * padre); the contrast with focus fronting from G184 (ESAS llaves tengo yo, no clitic;
 * with «a» + person, «le» usually stays); Río de la Plata doubling of definite personal
 * objects (Lo vi a Juan), frequent in Argentina and Uruguay, vs «Vi a Juan» in most
 * varieties. Andean invariable «lo» is deliberately left out. Ampliación: several
 * topics at once, bare-noun topics vs definite ones, register of each strategy.
 * Scene: a small translation agency moves office on Monday. Coordinator Elena Robles
 * and project manager Diego Martín sort out keys, furniture, clients and the deposit
 * with the landlord, Gonzalo Prieto. Valeria Sosa, an Argentine translator, is at the
 * hospital (a client) all day.
 * Escuchar: Valeria's voice note (es-AR-ElenaNeural, ustedes, «la llamé a Carolina»).
 * Escribir: Elena's email to the team on what is still pending before the move.
 */
export const lesson: LiveLesson = {
  id: 485,
  level: 'C1',
  title: 'Anteposición, dislocación y clíticos duplicados',
  subtitle: 'Poner un tema delante o al final y retomarlo con el pronombre justo, o sin él: Las llaves, las tengo yo; De eso, no hablo.',
  legend: [
    { tone: 'blue', label: 'TEMA DELANTE · con pausa; un pronombre lo retoma si es objeto (Las llaves, las tengo yo · De eso, no hablo)' },
    { tone: 'teal', label: 'TEMA PRESENTADO · en cuanto a, respecto a, tema suelto (Mi jefe, no me fío de él)' },
    { tone: 'violet', label: 'TEMA AL FINAL · aclaración tras una pausa (Ya lo sé, lo de la reunión)' },
    { tone: 'orange', label: 'FOCO DELANTE · acento fuerte, sin pronombre (ESAS llaves tengo yo)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'De qué hablamos y qué decimos de ello', coach: 'Primero el tema, luego el comentario. First the topic, then what you say about it.',
      steps: [
        { title: 'Una mudanza con mil cabos sueltos · A move with loose ends everywhere', blocks: [
          { kind: 'lead', text: 'La agencia de traducción de Elena Robles se muda el lunes. Es viernes y la oficina está llena de cajas. Diego Martín, el jefe de proyectos, le pregunta por todo: las llaves, la impresora, los clientes, la fianza del casero. Elena contesta como contestamos todos cuando hay muchos temas abiertos: **primero nombra el tema y después dice algo de él**. «¿Y las llaves? —**Las llaves, las tengo yo**». Hoy aprendes a colocar un tema delante o al final de la frase y a decidir si un pronombre lo retoma o no.', en: 'Elena Robles’s translation agency moves on Monday. It is Friday and the office is full of boxes. Diego asks her about everything, and she answers the way we all do when many topics are open: she names the topic first and then comments on it (“The keys? I’ve got them”). Today you learn to place a topic at the start or end of a sentence and to decide whether a pronoun picks it up.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada pregunta de Diego y tu alumno elige la respuesta de Elena. Después explica qué diferencia hay entre las tres frases.', self: 'Lee las tres frases en voz alta, con la pausa donde está la coma. ¿Qué pregunta responde cada una? (Read them aloud with a pause at the comma: which question does each one answer?)' } },
          { kind: 'compare', title: 'Las mismas llaves, tres maneras · Same keys, three ways', columns: [
            { tone: 'neutral', label: 'NEUTRO · ¿Quién tiene qué?', sentence: 'Yo tengo las llaves del local nuevo.', idea: 'Todo es información nueva, sin nada destacado.', en: 'Plain statement: everything is new and nothing is singled out.' },
            { tone: 'blue', label: 'TEMA · ¿Y las llaves?', sentence: '[[Las llaves, las tengo|blue]] yo.', idea: 'Las llaves ya están en la conversación: van delante, con pausa, y «las» las retoma.', en: 'The keys are already under discussion, so they open the sentence after a pause and “las” picks them up again.' },
            { tone: 'orange', label: 'FOCO · ¿Tienes las del portal?', sentence: 'No: [[LAS DEL GARAJE tengo|orange]] yo.', idea: 'Se destaca un elemento frente a otro: acento fuerte, sin pronombre y sujeto detrás.', en: 'A correction: one set of keys is contrasted with another, stressed, with no pronoun and the subject after the verb (lesson 184).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Y la impresora vieja? ¿Qué respuesta suena más natural?', options: ['La impresora, le vendemos.', 'La impresora, la vendemos.', 'La impresora, vendemos.'], answer: 1, why: 'La impresora es el tema (ya se habla de ella): va delante y «la», femenino singular, la retoma.', en: '“What about the old printer?” Which answer sounds most natural?' },
            { prompt: '«No: LAS DEL GARAJE tengo yo». ¿Qué hace esta frase?', options: ['Pregunta quién tiene las llaves.', 'Presenta las llaves por primera vez.', 'Corrige: tiene unas llaves y no otras.'], answer: 2, why: 'Es un foco de contraste: acento fuerte, sin pronombre. Corrige lo que pensaba el otro.', en: 'What is this sentence doing?' },
          ] },
        ] },
        { title: 'La dislocación a la izquierda · Left dislocation', mascot: '/brand/mascot/studying.webp', coach: 'Tema, pausa, pronombre. Topic, pause, pronoun.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TEMA DELANTE + PRONOMBRE', question: '¿Quieres anunciar de qué hablas antes de decir nada sobre ello?', en: 'Left dislocation moves a known element to the front as the topic, followed by a pause (often a comma in writing). If that element is a direct or indirect object, an unstressed pronoun that agrees with it picks it up inside the sentence, and with a definite direct object that pronoun is compulsory: “Ese libro lo leí”, never “*Ese libro leí” (unless it is a stressed focus). A whole clause or an attribute is picked up by neuter “lo”. The personal “a” stays: “A Valeria, la llamo yo”.', formula: ['TEMA + pausa + pronombre + verbo', 'complemento directo → lo, la, los, las · indirecto → le, les', 'oración o atributo → lo (neutro)'],
            meaning: 'La **dislocación a la izquierda** coloca delante un elemento **conocido** como tema, seguido de una **pausa** (en la escritura, a menudo una coma). Si ese elemento es un complemento directo o indirecto, un **pronombre átono** que concuerda con él lo **retoma** dentro de la frase. Con un complemento directo definido, el pronombre es **obligatorio**: «Ese libro **lo** leí», nunca «*Ese libro leí» (salvo como foco, con acento fuerte). Una oración entera o un atributo se retoman con **lo neutro**. La «a» de persona se mantiene: «**A** Valeria, **la** llamo yo».',
            examples: [
              { es: '[[Ese contrato, lo|blue]] firmamos en 2014.', en: 'That contract: we signed it in 2014. The pronoun is required with a fronted definite object.' },
              { es: '[[A los clientes, les|blue]] mandamos la dirección nueva el lunes.', en: 'The clients: we’ll send them the new address on Monday (indirect object → les).' },
              { es: '[[Que el local nuevo es más pequeño, ya lo|blue]] saben todos.', en: 'That the new premises are smaller, everyone knows already: neuter “lo” takes up the whole clause.' },
              { es: '[[Caro, lo|blue]] es; pero está al lado del metro.', en: 'Expensive, it certainly is; but it’s next to the metro (neuter “lo” takes up an attribute).' },
            ] },
          { kind: 'table', title: '¿Qué pronombre retoma el tema? · Which pronoun picks up the topic?', head: ['Lo que va delante · Fronted element', 'Pronombre', 'Ejemplo'], rows: [
            ['complemento directo de cosa', '**lo, la, los, las**', 'Las cajas grandes, **las** dejamos en el pasillo.'],
            ['complemento directo de persona (con «a»)', '**lo, la, los, las**', 'A Valeria, **la** llamo yo esta tarde.'],
            ['complemento indirecto (con «a»)', '**le, les** (se ante lo, la…)', 'A Diego, **se lo** expliqué ayer.'],
            ['una oración (que…, si…, lo de…)', '**lo** neutro', 'Si llegamos a tiempo, no **lo** sé.'],
            ['un atributo (adjetivo, sustantivo)', '**lo** neutro', 'Puntual, no **lo** es nunca.'],
          ], note: 'Con un complemento directo de persona masculino singular, en España también se acepta «le»: «A Diego, le vi ayer» (leísmo admitido; lo viste en la clase 181). En el español general, «lo».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Los muebles de la sala de reuniones, ___ regalamos a una escuela».', options: ['los', 'lo', 'les'], answer: 0, why: 'Complemento directo masculino plural delante: «los». «Les» es para el indirecto; «lo» no concuerda.', en: 'The meeting-room furniture: we’re giving it to a school.' },
            { prompt: '«Que nos mudábamos en octubre, ya ___ sabía el casero».', options: ['lo', 'la', 'le'], answer: 0, why: 'Lo que va delante es una oración entera («que nos mudábamos…»): la retoma «lo» neutro.', en: 'That we were moving in October, the landlord already knew.' },
          ] },
        ] },
        { title: 'Cuándo no hay pronombre · When there is no pronoun', mascot: '/brand/mascot/standing.webp', coach: 'De eso, no hablo: sin pronombre. No pronoun here.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TEMA SIN PRONOMBRE', question: '¿Lo que pones delante lleva preposición (de, con, en, para…) o es un nombre sin artículo?', en: 'Spanish has no unstressed pronoun for most prepositional phrases (unlike French “en” and “y” or Italian “ne” and “ci”), so a fronted topic with “de”, “con”, “en”, “para” or “por” is simply left without one: “De eso, no quiero hablar”; “En Madrid, trabajé diez años”. A bare noun (no article) is normally not picked up by a pronoun either: “Cajas, tenemos muchas”. Only the personal or dative “a” brings a clitic with it.', formula: ['de / con / en / para / por + tema → sin pronombre', 'De eso, no quiero hablar · En Madrid, trabajé diez años', 'nombre sin artículo → normalmente sin pronombre'],
            meaning: 'El español no tiene pronombre átono para la mayoría de los complementos con preposición (no hay un equivalente de «en» o «y» del francés, ni de «ne» o «ci» del italiano). Por eso, un tema con **de, con, en, para, por** va delante **sin pronombre**: «**De eso**, no quiero hablar», «**En Madrid**, trabajé diez años». Un **nombre sin artículo** tampoco suele retomarse: «**Cajas**, tenemos muchas». Solo la «**a**» del objeto directo de persona o del indirecto arrastra un pronombre.',
            examples: [
              { es: '[[De la fianza, no|blue]] quiero hablar hasta el lunes.', en: 'About the deposit, I don’t want to talk until Monday (no pronoun: “hablar de”).' },
              { es: '[[Con el casero, ya|blue]] he hablado yo.', en: 'As for the landlord, I’ve already spoken to him myself (“hablar con”: no pronoun).' },
              { es: '[[En este local, pasamos|blue]] doce años.', en: 'In these premises, we spent twelve years (a place: no pronoun).' },
              { es: '[[Cajas, tenemos|blue]] muchas; lo que nos falta es cinta.', en: 'Boxes, we’ve got plenty; what we’re short of is tape (bare noun: no pronoun).' },
            ] },
          { kind: 'compare', title: 'Tema con pronombre o foco sin él · Topic with a pronoun or focus without one', columns: [
            { tone: 'blue', label: 'TEMA · pausa + pronombre', sentence: '[[Esas llaves, las tengo|blue]] yo.', idea: 'Se habla de esas llaves; entonación normal, pausa tras el tema.', en: 'We are talking about those keys: normal intonation, a pause after the topic and a pronoun.' },
            { tone: 'orange', label: 'FOCO · acento + sin pronombre', sentence: '[[ESAS llaves tengo|orange]] yo, no las otras.', idea: 'Se corrige: acento fuerte en «esas», sin pausa, sin «las», sujeto detrás.', en: 'A correction: heavy stress on “esas”, no pause, no “las”, subject after the verb. With “a” + person (A ELENA le di las llaves), “le” often stays even in focus.' },
          ] },
          { kind: 'decide', title: '¿Pronombre o no? · Pronoun or not?', steps: [
            { q: '¿Lo dices con acento fuerte para corregir o contrastar?', yes: 'Foco: sin pronombre de objeto directo y con el sujeto detrás («ESAS llaves tengo yo»).', no: 'Es un tema: sigue.' },
            { q: '¿Lleva una preposición distinta de la «a» del objeto (de, con, en, para, por…)?', yes: 'Sin pronombre: «De eso, no hablo», «Con Gonzalo, hablo yo».', no: 'Sigue.' },
            { q: '¿Es un objeto directo o indirecto definido (con artículo, demostrativo, posesivo o nombre propio)?', yes: 'Pronombre obligatorio: lo, la, los, las, le, les.', no: 'Oración o atributo → «lo» neutro. Nombre sin artículo → normalmente sin pronombre.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«___, no he vuelto a saber nada».', options: ['A la antigua secretaria, le', 'De la antigua secretaria', 'La antigua secretaria, la'], answer: 1, why: '«Saber de alguien» lleva «de»: el tema va con su preposición y sin pronombre.', en: 'About our former secretary, I haven’t heard anything since.' },
            { prompt: '«En el barrio nuevo, ___ de todo».', options: ['lo hay', 'hay', 'allí lo hay'], answer: 1, why: 'Un lugar con «en» va delante sin pronombre. «Lo hay» retomaría un objeto que no existe.', en: 'In the new neighbourhood, there’s everything.' },
          ] },
        ] },
        { title: 'En cuanto a… y el tema suelto · “As for…” and the hanging topic', mascot: '/brand/mascot/speaking.webp', coach: 'Anunciar el tema con una etiqueta. Announce the topic with a label.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TEMA PRESENTADO', question: '¿Cambias de tema o abres un punto nuevo de una lista?', en: '“En cuanto a”, “respecto a / con respecto a”, “por lo que respecta a” and “en lo que se refiere a” announce a new topic, typical of meetings, emails and reports. Because they introduce the topic from outside the sentence, the sentence itself carries its own pronoun or preposition: “En cuanto a la editorial, no le digas nada”. In conversation, the topic can also be set out on its own, with no preposition, and linked by a pronoun or a word inside: “Mi jefe, no me fío de ese hombre”. That “hanging topic” is colloquial; in writing, use the full preposition or “en cuanto a”.', formula: ['en cuanto a / respecto a / por lo que respecta a + tema, + frase completa', 'tema suelto (sin preposición), + frase con su propio enlace', 'Mi jefe, no me fío de ese hombre (coloquial)'],
            meaning: '«**En cuanto a**», «**respecto a / con respecto a**», «**por lo que respecta a**» y «**en lo que se refiere a**» anuncian un tema nuevo: son típicos de reuniones, correos e informes. Como presentan el tema desde fuera, la frase lleva **su propio** pronombre o preposición: «En cuanto a la editorial, no **le** digas nada». En la conversación, el tema también puede ir **suelto**, sin preposición, y unirse a la frase con un pronombre o una palabra que lo recoge: «**Mi jefe**, no me fío **de ese hombre**». Es el **tema suelto** (o tópico colgante): coloquial; en un texto cuidado, usa la preposición completa o «en cuanto a».',
            examples: [
              { es: '[[En cuanto a los plazos|teal]], los mantenemos sin cambios.', en: 'As far as deadlines are concerned, we are keeping them as they are.' },
              { es: '[[Por lo que respecta al hospital|teal]], Valeria ya ha hablado con ellos.', en: 'As regards the hospital, Valeria has already spoken to them (formal).' },
              { es: '[[El casero|teal]], no me fío ni un pelo de él.', en: 'The landlord… I don’t trust him an inch: a hanging topic, picked up by “de él”.' },
              { es: '[[Mi hermana|teal]], a esa no la convence nadie.', en: 'My sister, nobody can talk her round: the link is “a esa… la” (colloquial).' },
            ] },
          { kind: 'tip', icon: '💡', title: 'Registro · Register', text: 'Para un correo o un informe: «**En cuanto a / Respecto a** la mudanza, …». En una reunión, también «**Por lo que respecta a**…». Para hablar con amigos: «**La mudanza**, ni me hables». El tema suelto, en cambio, no es buena idea en un texto formal: «La editorial, hay que llamarla» suena hablado; mejor «A la editorial hay que llamarla» o «En cuanto a la editorial, hay que llamarla».', en: 'In emails and reports, “en cuanto a / respecto a” announce the topic; in meetings, also “por lo que respecta a”. Among friends, a bare topic works (“The move? Don’t even mention it”). Avoid the hanging topic in formal writing: keep the preposition or use “en cuanto a”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En un informe: «___ los gastos de la mudanza, los asumirá la empresa».', options: ['En cuanto a', 'De', 'Para'], answer: 0, why: '«En cuanto a» presenta el tema en un registro formal; dentro, «los» retoma «los gastos».', en: 'In a report: “As for the moving costs, the company will cover them.”' },
            { prompt: '«Mi vecino, no me fío ___». ¿Qué completa este tema suelto?', options: ['nada', 'de él', 'lo'], answer: 1, why: 'El tema suelto no lleva preposición delante, así que la frase necesita un enlace: «de él» (fiarse de alguien).', en: '“My neighbour, I don’t trust him.” What completes this hanging topic?' },
          ] },
        ] },
        { title: 'El tema al final y el «lo» de Buenos Aires · Afterthought topics and Río de la Plata «lo»', mascot: '/autoestudio/mascot/noting.webp', coach: 'Ya lo sé, lo de la reunión. I know, about the meeting.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'DISLOCACIÓN A LA DERECHA', question: '¿Dices primero la frase y después aclaras de qué hablabas?', en: 'In speech, the topic can also come at the end, after a pause, as an afterthought that makes clear what you meant. The pronoun appears first and the noun phrase comes later: “Ya lo sé, lo de la reunión”. A right-dislocated object must be announced by its pronoun (“Ya lo hemos firmado, el contrato”); a right-dislocated subject needs no pronoun, because the verb already agrees with it (“Me lo dijo ayer, tu padre”). It is very common in conversation and rare in formal writing.', formula: ['frase con pronombre + pausa + tema', 'Ya lo sé, lo de la reunión', 'sujeto al final: Me lo dijo ayer, tu padre'],
            meaning: 'En la conversación, el tema también puede ir **al final**, tras una pausa, como **aclaración**: primero aparece el pronombre y después lo que retoma. «Ya **lo** sé, **lo de la reunión**». Un objeto al final **necesita** su pronombre delante («Ya **lo** hemos firmado, **el contrato**»); un **sujeto** al final no lo necesita, porque el verbo ya concuerda con él («Me lo dijo ayer, **tu padre**»). Es muy frecuente al hablar y poco habitual en textos formales.',
            examples: [
              { es: '[[Ya lo sé, lo de la reunión|violet]]: me lo ha dicho Diego.', en: 'I know, about the meeting: Diego told me.' },
              { es: '[[Me lo dijo ayer, tu padre|violet]]: que te mudas a Valencia.', en: 'Your father told me yesterday: that you’re moving to Valencia. The subject comes at the end, with no pronoun for it.' },
              { es: '[[No le hemos dicho nada, a la editorial|violet]].', en: 'We haven’t said anything to the publisher yet: “le” anticipates “a la editorial”.' },
            ] },
          { kind: 'tip', icon: '🇦🇷', title: '«Lo vi a Juan» · Río de la Plata Spanish', text: 'En el Río de la Plata (Argentina y Uruguay) es muy frecuente duplicar el complemento directo de **persona** con «a», **sin pausa**, también en el habla culta: «**Lo** vi **a Juan**», «**La** llamé **a Carolina**», «**La** conozco **a tu hermana**». No es una dislocación ni un error: es un rasgo de esa variedad. En la mayoría de las variedades se dice «Vi a Juan», «Llamé a Carolina». Con un pronombre tónico, en cambio, el doblado es obligatorio en todas partes: «**Lo** vi **a él**».', en: 'In River Plate Spanish (Argentina and Uruguay) doubling a definite personal direct object with “a” is very common, with no pause and in educated speech too: “Lo vi a Juan”. It is a regional feature, not a mistake. Most varieties say “Vi a Juan”. With a stressed pronoun, doubling is compulsory everywhere: “Lo vi a él”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—El contrato del local nuevo, ¿quién lo tiene? —___, el contrato.', options: ['Lo tengo yo', 'La tengo yo', 'Tengo yo'], answer: 0, why: 'Objeto al final: el pronombre lo anuncia antes y concuerda con «el contrato» (masculino): «lo».', en: '“Who has the contract for the new premises?” “I have it, the contract.”' },
            { prompt: 'Una traductora de Montevideo dice: «Ayer la vi a Lucía en el centro». ¿Qué es?', options: ['Una dislocación con pausa.', 'Un error de concordancia.', 'Un rasgo frecuente del Río de la Plata.'], answer: 2, why: 'Duplicar el objeto directo de persona con «a» es habitual en Argentina y Uruguay; no hay pausa, así que no es una dislocación.', en: 'A translator from Montevideo says “Ayer la vi a Lucía en el centro”. What is it?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Falta, sobra o no concuerda? Missing, extra or wrong form?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice si al pronombre le pasa algo: falta, sobra o no concuerda. Después miran la corrección.', self: 'Lee cada frase: ¿falta el pronombre, sobra o no concuerda? Decide antes de mirar la corrección. (Is the pronoun missing, extra or the wrong form?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Ese informe terminé anoche.', right: 'Ese informe lo terminé anoche.', why: 'Objeto directo definido delante como tema: el pronombre es obligatorio. Sin él, solo funciona como foco con acento fuerte («ESE informe terminé, no el otro»).' },
            { wrong: 'De la fianza, no lo quiero hablar.', right: 'De la fianza, no quiero hablar.', why: '«Hablar de algo»: un tema con «de» no se retoma con pronombre.' },
            { wrong: 'A tu hermano, no digas nada.', right: 'A tu hermano, no le digas nada.', why: 'Un complemento indirecto delante se retoma con «le».' },
            { wrong: 'Que vendría tarde, ya la sabía.', right: 'Que vendría tarde, ya lo sabía.', why: 'Una oración se retoma con «lo» neutro, nunca con «la».' },
            { wrong: 'Las cajas del archivo, lo dejé en el almacén.', right: 'Las cajas del archivo, las dejé en el almacén.', why: 'El pronombre concuerda con el tema: femenino plural, «las».' },
            { wrong: 'En Madrid, lo trabajé diez años.', right: 'En Madrid, trabajé diez años.', why: 'Un lugar con «en» no tiene pronombre átono en español.' },
            { wrong: 'A la editorial, la mandamos el contrato ayer.', right: 'A la editorial, le mandamos el contrato ayer.', why: 'La editorial recibe el contrato: es complemento indirecto y se retoma con «le», no con «la» (laísmo, clase 181).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['La mesa de la entrada, regalamos a Diego.', 'La mesa de la entrada, le regalamos a Diego.', 'La mesa de la entrada, la regalamos a Diego.'], answer: 2, why: 'Objeto directo femenino definido delante: «la». Sin pronombre falta; «le» es para el indirecto.', en: 'Which sentence is correct? (The table at the entrance: we gave it to Diego.)' },
            { prompt: '¿Qué frase es correcta?', options: ['Con los de mudanzas, hablo yo.', 'Con los de mudanzas, los hablo yo.', 'Con los de mudanzas, les hablo yo.'], answer: 0, why: '«Hablar con alguien»: un tema con «con» va sin pronombre.', en: 'Which is correct? (The removal people: I’ll talk to them.)' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno responde a tres preguntas sobre su casa («¿Y tus libros?», «¿Y el coche?», «¿Y tus vecinos?») poniendo el tema delante y retomándolo con el pronombre adecuado, o sin él si lleva preposición.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Viernes, entre cajas', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Elena y Diego repasan la mudanza · Elena and Diego go over the move', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Diego. Después tu alumno toca cada expresión marcada y explica si hay pronombre y por qué.', self: 'Lee el diálogo en voz alta, con pausas en las comas. Después toca cada expresión marcada: ¿tema delante, tema presentado, tema al final o foco? (Tap each marked expression and say what it is.)' } },
          { kind: 'explore', title: 'Las llaves, la impresora y el casero', setting: 'Viernes por la tarde, en la oficina vieja, llena de cajas. Elena, la coordinadora, y Diego, el jefe de proyectos, repasan lo que queda antes de la mudanza del lunes. Se tratan de tú. (Friday afternoon in the old office, among boxes.)', lines: [
            { who: 'Diego', text: 'Elena, antes de que se me olvide: ¿quién tiene las llaves del local nuevo?', en: 'Elena, before I forget: who has the keys to the new premises?' },
            { who: 'Elena', text: '[[Las llaves, las tengo yo|blue]]. Me las dio ayer Gonzalo, el casero.', en: 'The keys? I’ve got them. Gonzalo, the landlord, gave them to me yesterday.' },
            { who: 'Diego', text: '¿Y las del almacén? ¿También las tienes tú?', en: 'And the storeroom ones? Have you got those as well?' },
            { who: 'Elena', text: 'No, no. [[LAS DEL GARAJE tengo yo|orange]]. [[Las del almacén, las tiene Valeria|blue]].', en: 'No, no. It’s the GARAGE keys I’ve got. The storeroom ones, Valeria has.' },
            { who: 'Diego', text: 'Vale. ¿Y la impresora vieja? Pesa una tonelada.', en: 'OK. And the old printer? It weighs a ton.' },
            { who: 'Elena', text: '[[La impresora, la vendemos|blue]]. Hay un estudiante interesado. [[Cajas, tenemos|blue]] de sobra, eso sí.', en: 'The printer, we’re selling. There’s a student who’s interested. Boxes, we’ve got more than enough.' },
            { who: 'Diego', text: 'Por cierto, Gonzalo me ha vuelto a escribir por lo de la fianza.', en: 'By the way, Gonzalo has written to me again about the deposit.' },
            { who: 'Elena', text: 'Uf. [[De la fianza, mejor no hablar|blue]] hasta el lunes. [[Ese hombre, no me fío de él|teal]] ni un pelo.', en: 'Ugh. About the deposit, better not to say anything until Monday. That man, I don’t trust him an inch.' },
            { who: 'Diego', text: 'Otra cosa: el hospital quiere el informe el miércoles, no el viernes.', en: 'Another thing: the hospital wants the report on Wednesday, not Friday.' },
            { who: 'Elena', text: '[[Ya lo sé, lo del hospital|violet]]. [[Que va a ser una semana dura, lo|blue]] sabemos todos.', en: 'I know, about the hospital. That it’s going to be a tough week, we all know.' },
            { who: 'Diego', text: '¿Escribo a los clientes con la dirección nueva?', en: 'Shall I email the clients with the new address?' },
            { who: 'Elena', text: 'Sí, pero [[a la editorial, no le digas nada|blue]] todavía: la llamo yo. [[En cuanto a los demás|teal]], con un correo corto basta.', en: 'Yes, but don’t say anything to the publisher yet: I’ll call them myself. As for the rest, a short email will do.' },
          ], notes: {
            'Las llaves, las tengo yo': '**Tema delante + pronombre**: Diego acaba de preguntar por las llaves; Elena las pone delante, hace una pausa y «las» las retoma. Lo nuevo, «yo», va al final.',
            'LAS DEL GARAJE tengo yo': '**Foco** de corrección (clase 184): Diego cree que tiene las del almacén. Acento fuerte, sin pronombre y con el sujeto «yo» detrás del verbo.',
            'Las del almacén, las tiene Valeria': '**Tema delante + pronombre** justo después del foco: aquí ya no se corrige, se habla de las llaves del almacén, y «las» las retoma.',
            'La impresora, la vendemos': '**Tema delante + pronombre**: objeto directo definido, femenino singular. Sin «la» la frase no funcionaría como tema.',
            'Cajas, tenemos': '**Nombre sin artículo** delante: normalmente no se retoma con pronombre («Cajas, tenemos de sobra»). Compara: «Las cajas, las tenemos en el pasillo».',
            'De la fianza, mejor no hablar': '**Tema con «de»** (hablar de algo): va delante sin pronombre, porque el español no tiene un átono para «de + algo».',
            'Ese hombre, no me fío de él': '**Tema suelto**: «ese hombre» va delante sin preposición, y «de él» lo enlaza con «fiarse de». Es coloquial; por escrito, «De ese hombre no me fío».',
            'Ya lo sé, lo del hospital': '**Tema al final**: primero el pronombre («lo»), después la aclaración «lo del hospital», tras una pausa.',
            'Que va a ser una semana dura, lo': 'Una **oración entera** delante como tema, retomada por **lo neutro**: «lo sabemos todos».',
            'a la editorial, no le digas nada': '**Indirecto delante**, con su «a», retomado por «le». Sin «le» la frase quedaría coja.',
            'En cuanto a los demás': '**Tema presentado** con «en cuanto a»: Elena pasa al último punto de su lista, como en una reunión.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Quién tiene las llaves del almacén?', options: ['Gonzalo.', 'Elena.', 'Valeria.'], answer: 2, why: '«Las del almacén, las tiene Valeria».', en: 'Who has the storeroom keys?' },
            { prompt: '¿Qué van a hacer con la impresora vieja?', options: ['Llevarla al local nuevo.', 'Regalarla a Gonzalo.', 'Venderla.'], answer: 2, why: '«La impresora, la vendemos. Hay un estudiante interesado».', en: 'What are they doing with the old printer?' },
            { prompt: '¿Por qué no debe Diego escribir a la editorial?', options: ['Porque Elena quiere llamarla ella.', 'Porque la editorial ya lo sabe.', 'Porque es un cliente nuevo.'], answer: 0, why: '«A la editorial, no le digas nada todavía: la llamo yo».', en: 'Why shouldn’t Diego email the publisher?' },
          ] },
        ] },
        { title: '¿Con pronombre o sin él? · With a pronoun or without?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases de la oficina · More lines from the office', categories: [
            { id: 'con', label: 'TEMA + PRONOMBRE · lo, la, le…', tone: 'blue' },
            { id: 'sin', label: 'TEMA SIN PRONOMBRE · preposición, lugar, nombre sin artículo', tone: 'teal' },
            { id: 'final', label: 'TEMA AL FINAL · aclaración', tone: 'violet' },
          ], items: [
            { text: 'Las plantas, las cuida Diego.', answer: 'con', why: 'Objeto directo definido delante: «las» lo retoma.' },
            { text: 'Para el hospital, trabajamos desde 2019.', answer: 'sin', why: 'Tema con «para»: no hay pronombre que lo retome.' },
            { text: 'Ya las he guardado, las facturas.', answer: 'final', why: '«Las» anuncia el objeto, que aparece al final tras una pausa.' },
            { text: 'A la becaria, le dejamos la mesa de la ventana.', answer: 'con', why: 'Indirecto delante con su «a», retomado por «le».' },
            { text: 'Tiempo, no tenemos mucho.', answer: 'sin', why: 'Nombre sin artículo delante: normalmente sin pronombre.' },
            { text: 'Nos lo dijo esta mañana, la coordinadora del hospital.', answer: 'final', why: 'Sujeto al final como aclaración: el verbo ya concuerda con él.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno resume la conversación en cuatro frases, cada una con un tema delante («Las llaves…», «La impresora…», «De la fianza…», «A la editorial…»).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Tema o foco? ¿Pronombre o no? Topic or focus? Pronoun or not?',
      steps: [
        { title: 'Elige la respuesta · Choose the answer', blocks: [
          { kind: 'choice', items: [
            { prompt: '—¿Y el proyector de la sala? —___ lo llevo yo en mi coche.', options: ['El proyector,', 'Del proyector,', 'Al proyector,'], answer: 0, why: 'Objeto directo de cosa delante: sin preposición y retomado por «lo».', en: '“And the projector?” “The projector, I’ll take in my car.”' },
            { prompt: '—¿Y las facturas? —___ hablamos el lunes con calma.', options: ['Las facturas, las', 'De las facturas,', 'A las facturas, les'], answer: 1, why: '«Hablar de algo»: el tema conserva la «de» y no lleva pronombre.', en: '“What about the invoices?” “We’ll talk about the invoices on Monday.”' },
            { prompt: '—¿Sabes que Rosa se jubila en diciembre? —Sí, sí, ___.', options: ['ya le sé, lo de Rosa', 'ya lo sé, lo de Rosa', 'ya la sé, lo de Rosa'], answer: 1, why: 'Tema al final: «lo» neutro anuncia «lo de Rosa», que es una idea, no una persona ni una cosa femenina.', en: '“Did you know Rosa is retiring in December?” “Yes, I know, about Rosa.”' },
            { context: 'Diego cree que tienes las llaves del portal. Lo corriges.', prompt: '«No, ___, no las del portal».', options: ['LAS DEL BUZÓN yo tengo', 'LAS DEL BUZÓN tengo yo', 'LAS DEL BUZÓN las tengo yo'], answer: 1, why: 'Foco de corrección: sin pronombre de objeto y con el sujeto detrás del verbo.', en: '“No, it’s the MAILBOX keys I’ve got, not the street-door ones.”' },
            { prompt: '«Que el local nuevo tiene menos luz, ya ___ sabíamos cuando firmamos».', options: ['los', 'la', 'lo'], answer: 2, why: 'La oración entera («que el local nuevo…») se retoma con «lo» neutro.', en: 'That the new premises get less light, we knew when we signed.' },
          ] },
        ] },
        { title: '¿Qué estrategia es? · Which strategy is it?', blocks: [
          { kind: 'classify', title: 'Frases del lunes · Monday’s lines', categories: [
            { id: 'con', label: 'TEMA + PRONOMBRE', tone: 'blue' },
            { id: 'sin', label: 'TEMA SIN PRONOMBRE', tone: 'teal' },
            { id: 'foco', label: 'FOCO · acento, sin pronombre', tone: 'orange' },
          ], items: [
            { text: 'El contrato nuevo, lo firmamos el martes.', answer: 'con', why: 'Objeto directo definido delante: «lo» obligatorio.' },
            { text: 'Con la editorial, hablo yo mañana.', answer: 'sin', why: '«Hablar con»: tema con preposición, sin pronombre.' },
            { text: 'DOS semanas nos dieron, no tres.', answer: 'foco', why: 'Cantidad destacada que corrige: acento fuerte y sin pronombre.' },
            { text: 'A los traductores externos, les pagamos el viernes.', answer: 'con', why: 'Indirecto delante, retomado por «les».' },
            { text: 'En la oficina vieja, dejamos solo las estanterías.', answer: 'sin', why: 'Un lugar con «en»: no hay pronombre.' },
            { text: 'ESE escritorio quiero yo, el de la ventana.', answer: 'foco', why: '«Ese», con énfasis, frente a otros escritorios: sin «lo» y con el sujeto detrás.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El sofá de la entrada, lo regalamos a una vecina.', ok: true, why: 'Correcta: objeto directo masculino delante, retomado por «lo».' },
            { sentence: 'De los muebles viejos, no los quiero hablar.', ok: false, options: ['De los muebles viejos, no quiero hablarlos.', 'Los muebles viejos, no quiero hablar.', 'De los muebles viejos, no quiero hablar.'], answer: 2, why: '«Hablar de»: el tema lleva «de» y va sin pronombre. Quitar la preposición tampoco sirve.' },
            { sentence: 'El informe del hospital ya terminé ayer.', ok: false, options: ['El informe del hospital ya le terminé ayer.', 'El informe del hospital ya lo terminé ayer.', 'Del informe del hospital ya terminé ayer.'], answer: 1, why: 'Objeto directo definido delante (no es un foco): «lo» es obligatorio.' },
            { sentence: 'A la nueva becaria, todavía no le hemos dado las llaves.', ok: true, why: 'Correcta: indirecto delante, con su «a», retomado por «le».' },
            { sentence: 'Que la mudanza costaría más, ya la sabíamos.', ok: false, options: ['Que la mudanza costaría más, ya les sabíamos.', 'Que la mudanza costaría más, ya sabíamos.', 'Que la mudanza costaría más, ya lo sabíamos.'], answer: 2, why: 'La oración se retoma con «lo» neutro. Sin pronombre, el tema queda suelto.' },
            { sentence: 'En la sala grande, las pondremos las estanterías.', ok: false, options: ['La sala grande, pondremos las estanterías.', 'En la sala grande, pondremos las estanterías.', 'En la sala grande, le pondremos las estanterías.'], answer: 1, why: 'Un lugar con «en» va delante sin pronombre, y «las estanterías» va detrás del verbo, así que no se duplica.' },
          ] },
        ] },
        { title: 'Mensajes con Valeria · Texts with Valeria', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Elena escribe a Valeria · Elena texts Valeria', lines: [
            { who: 'Elena', text: 'Valeria, ¿tienes tú el glosario de la editorial?' },
            { who: 'Valeria', text: 'No. ___ lo tiene Diego; yo tengo el del hospital.', options: ['Del de la editorial,', 'El de la editorial,', 'Al de la editorial,'], answer: 1, why: 'Objeto directo de cosa delante: sin preposición y retomado por «lo».' },
            { who: 'Elena', text: 'Vale. ¿Y Carolina, la de la editorial? ¿Hablaste con ella?' },
            { who: 'Valeria', text: 'Sí, ayer ___ llamé a Carolina. Está tranquila.', options: ['la', 'le', 'se'], answer: 0, why: 'Valeria es argentina: duplica el objeto directo de persona con «la», como es frecuente en el Río de la Plata. En otras variedades, «Ayer llamé a Carolina».' },
            { who: 'Elena', text: 'Genial. ___, ni una palabra a Gonzalo hasta el lunes.', options: ['De la fianza', 'La fianza, la', 'La fianza'], answer: 0, why: '«Una palabra de algo»: el tema conserva su «de» y va sin pronombre.' },
            { who: 'Valeria', text: 'Tranquila. ___, no me fío de él desde lo de la calefacción.', options: ['A ese hombre', 'Ese hombre', 'De ese hombre'], answer: 1, why: 'Tema suelto: sin preposición, porque «de él» ya lo enlaza. «De ese hombre… de él» repetiría la preposición.' },
            { who: 'Elena', text: 'Ya lo sé, ___. Hasta el lunes.', options: ['de la calefacción', 'la de la calefacción', 'lo de la calefacción'], answer: 2, why: 'Tema al final retomado por el «lo» neutro de «ya lo sé»: «lo de la calefacción».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Las', 'facturas,', 'las', 'firmo', 'yo', 'mañana.'], accept: ['Las facturas, las firmo yo mañana.'], en: 'The invoices, I’ll sign tomorrow.' },
            { tiles: ['A', 'los', 'proveedores,', 'les', 'escribimos', 'el', 'lunes.'], accept: ['A los proveedores, les escribimos el lunes.'], en: 'The suppliers, we’ll write to on Monday.' },
            { tiles: ['Ya', 'lo', 'sé,', 'lo', 'de', 'la', 'fianza.'], accept: ['Ya lo sé, lo de la fianza.'], en: 'I know, about the deposit.' },
          ] },
        ] },
        { title: 'Tema o foco · Topic or focus', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno transforma cada frase neutra y la lee en voz alta: con pausa si es tema, con acento fuerte si es foco. Tú confirmas la entonación.', self: 'Transforma cada frase y léela en voz alta: pausa tras el tema, acento fuerte en el foco. (Pause after a topic; stress a focus.)' } },
          { kind: 'rewrite', title: 'De neutro a tema o foco · From neutral to topic or focus', items: [
            { prompt: 'Diego tiene las llaves del almacén.', instruction: 'Pon «las llaves del almacén» delante como tema.', accept: ['Las llaves del almacén, las tiene Diego', 'Las llaves del almacén, Diego las tiene'] },
            { prompt: 'No quiero hablar de la fianza.', instruction: 'Pon «de la fianza» delante como tema.', accept: ['De la fianza, no quiero hablar', 'De la fianza, yo no quiero hablar'] },
            { prompt: 'Diego tiene esas cajas, no las otras.', instruction: 'Corrige con un foco delante: «ESAS cajas…».', accept: ['Esas cajas tiene Diego, no las otras', 'Esas cajas tiene Diego'] },
            { prompt: 'Ya sé que llegarán tarde.', instruction: 'Pon «que llegarán tarde» delante como tema y retómalo con un pronombre.', accept: ['Que llegarán tarde, ya lo sé', 'Que llegarán tarde, lo sé', 'Que llegarán tarde, lo sé ya'] },
            { prompt: 'Ya hemos firmado el contrato.', instruction: 'Pon «el contrato» al final, tras una pausa, como aclaración.', accept: ['Ya lo hemos firmado, el contrato', 'Lo hemos firmado ya, el contrato'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige tres objetos de su casa y dice qué hará con ellos si se muda, poniéndolos delante como tema («La bici, la vendo»; «De los libros, no me separo»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Valeria', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Desde el hospital · From the hospital', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada tema que Valeria pone delante o al final y si lo retoma con pronombre. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada tema que Valeria pone delante o al final. (Listen for the gist, then note each topic and its pronoun.)' } },
          { kind: 'listen', title: 'Un audio de Valeria', channel: 'NOTA DE VOZ · DE VALERIA A ELENA Y DIEGO', src: '/audio/grammar-live/485.mp3',
            before: 'Valeria, traductora de la agencia, pasa el día en el hospital y no puede ir a la reunión de las cinco. Manda una nota de voz a Elena y a Diego. ¿De qué temas crees que va a hablar? (Which topics do you think she will mention?)',
            gist: { prompt: '¿Para qué manda Valeria el audio? · Why does Valeria send the voice note?', options: ['Para decir que deja la agencia.', 'Para quejarse del hospital.', 'Para ponerlos al día de sus tareas y pedirles dos cosas antes de la mudanza.'], answer: 2, why: 'Repasa los textos, la editorial y las facturas, pide que manden el glosario y que no hablen de la fianza.', en: 'She runs through her tasks and asks them to send the glossary and keep quiet about the deposit.' },
            details: [
              { prompt: '¿Qué hará Valeria el lunes?', options: ['Ayudar con la mudanza.', 'Ir al hospital.', 'Trabajar desde casa.'], answer: 2, why: '«No pasa nada, ese día trabajo desde casa».', en: 'What will Valeria do on Monday?' },
              { prompt: '¿Qué les pide que manden a la editorial?', options: ['Las facturas.', 'La dirección nueva.', 'El glosario nuevo.'], answer: 2, why: '«El glosario nuevo, no lo tiene todavía: ¿se lo pueden mandar ustedes hoy?».', en: 'What does she ask them to send the publisher?' },
              { prompt: '¿Dónde están las facturas de septiembre?', options: ['En el almacén.', 'En su casa.', 'Escaneadas en la carpeta compartida.'], answer: 2, why: '«Las facturas de septiembre, las firmé ayer y están escaneadas en la carpeta compartida».', en: 'Where are the September invoices?' },
              { prompt: '¿Qué no deben hacer con el casero?', options: ['Darle las llaves.', 'Hablarle de la fianza.', 'Invitarlo a la oficina nueva.'], answer: 1, why: '«Al casero, por favor, no le digan nada de la fianza hasta que yo hable con el abogado».', en: 'What mustn’t they do with the landlord?' },
            ],
            transcript: 'Hola, Elena; hola, Diego. Les mando este audio porque hoy estoy todo el día en el hospital con los intérpretes y no llego a la reunión de las cinco. Primero, lo de internet: [[ya lo sé, que el lunes no va a haber conexión en la oficina nueva|violet]]; Diego me avisó. No pasa nada, ese día trabajo desde casa. [[Los textos del hospital, los termino yo|blue]] antes del jueves, así que [[de eso no se preocupen|blue]]. [[En cuanto a la editorial|teal]], ayer la llamé a Carolina y le expliqué lo del retraso. Se lo tomó bastante bien, la verdad. Eso sí, [[el glosario nuevo, no lo tiene|blue]] todavía: ¿se lo pueden mandar ustedes hoy? Otra cosa: [[las facturas de septiembre, las firmé|blue]] ayer y están escaneadas en la carpeta compartida. Y [[al casero, por favor, no le digan nada|blue]] de la fianza hasta que yo hable con el abogado. [[Ese hombre, yo no me fío de él|teal]] para nada, y menos después de lo de la calefacción. Bueno, chicos, los extraño. [[Me encantó, la foto del local vacío|violet]]: parece otro lugar. Nos vemos el lunes por la tarde, o el martes. Un beso grande.',
            reply: { teacher: 'Tú eres Diego y respondes al audio de Valeria con dudas («¿Y el glosario?», «¿Y las facturas de octubre?»). Tu alumno es Elena y contesta poniendo el tema delante con el pronombre adecuado.', self: 'Responde a Valeria en voz alta como Elena: dile qué haces con el glosario, con la editorial y con el casero, poniendo cada tema delante. (Reply as Elena, putting each topic first.)' } },
          { kind: 'tip', icon: '🇦🇷', title: 'Una voz del Río de la Plata · A River Plate voice', text: 'Valeria es de Buenos Aires. Fíjate en «ayer **la** llamé **a Carolina**»: duplica el objeto directo de persona, algo muy frecuente en Argentina y Uruguay; en otras zonas, «ayer llamé a Carolina». También dice «**los** extraño» (= los echo de menos) y se dirige a sus compañeros con **ustedes**. Organiza todo el audio por temas: cada bloque empieza por el tema («Los textos del hospital…», «En cuanto a la editorial…») y después dice qué pasa con él.', en: 'Valeria is from Buenos Aires. Notice “la llamé a Carolina”: doubling a personal direct object is very common in Argentina and Uruguay, while other areas say “llamé a Carolina”. “Los extraño” means “I miss you all”. Her whole message is organised by topics: each block names the topic first and then comments on it.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar por temas', coach: 'Nombra el tema y comenta. Name the topic, then comment.',
      steps: [
        { title: 'Temas de tu vida · Topics from your life', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde nombrando primero el tema y retomándolo con el pronombre justo, o sin él. Si falta un pronombre, tú repites la frase corregida con la pausa marcada y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta. En cada respuesta pon al menos dos temas delante o al final. (Put at least two topics first or last in each answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Te mudas a otra ciudad mañana. ¿Qué te llevas, qué vendes y qué regalas? · You’re moving tomorrow: what do you take, sell or give away?', followUps: ['¿Y de qué te costaría más separarte?', '¿Hay algo que tirarías sin pensarlo?'], phrases: ['[[Los libros, me los llevo|blue]] todos.', '[[La tele, la|blue]] vendería.', '[[De mi bici, no|blue]] me separo.'], hint: 'Objeto con artículo → pronombre; con «de» → sin pronombre.', example: 'Los libros, me los llevo todos, aunque pesen. La tele, la vendería: casi no la veo. Las plantas, se las regalo a mi vecina. Y de mi bici, no me separo ni loco.', next: 'Ahora, temas delicados.' },
            { q: '¿De qué temas prefieres no hablar en una comida familiar o de trabajo? · Which topics do you avoid at a family or work lunch?', followUps: ['¿Y de qué te encanta hablar?', '¿Quién saca siempre esos temas?'], phrases: ['[[De política, prefiero no|blue]] hablar.', '[[Con mi cuñado, nunca|blue]]…', '[[Mi tío, a ese|teal]]…'], hint: 'Temas con «de» o «con»: sin pronombre. Un tema suelto, solo en la conversación.', example: 'De política, prefiero no hablar en las comidas; de fútbol, tampoco. Con mi cuñado, nunca discuto de dinero. Mi tío, a ese no hay quien lo calle cuando empieza con sus viajes.' },
            { q: 'Un compañero se equivoca de dato en una reunión. Corrígelo y después sigue hablando del tema. · Correct a colleague, then carry on.', followUps: ['¿Y qué dijiste después?', '¿Cómo reaccionó?'], phrases: ['[[TRES semanas|orange]] tenemos, no dos.', '[[Ese presupuesto, lo|blue]] aprobamos en junio.'], hint: 'Primero foco (sin pronombre, con acento); después tema (con pausa y pronombre).', example: 'Perdona, TRES semanas tenemos, no dos. Y el presupuesto, lo aprobamos en junio, no en julio. Las cifras, te las mando ahora por correo.', next: 'Ahora, reaccionar.' },
            { q: 'Alguien te cuenta una noticia que ya sabías. Reacciona y aclara de qué hablas. · React to news you already knew.', followUps: ['¿Quién te lo contó?', '¿Qué opinas tú?'], phrases: ['[[Ya lo sé, lo de|violet]]…', '[[Me lo contó ayer|violet]], mi…', '[[Que …, lo|blue]] sabe todo el mundo.'], hint: 'El tema al final, tras una pausa; o una oración delante con «lo».', example: 'Ya lo sé, lo de la nueva directora. Me lo contó ayer mi compañera de mesa. Que viene de una empresa muy grande, lo sabe todo el mundo; lo que nadie sabe es si va a cambiar los horarios.' },
            { q: '¿En quién confías de verdad y en quién no? Habla de personas de tu entorno (sin nombres reales). · Who do you trust, and who not?', followUps: ['¿Por qué no te fías?', '¿Siempre ha sido así?'], phrases: ['[[Mi vecina, de ella|teal]] me fío completamente.', '[[A mi hermano, le|blue]] cuento todo.', '[[En mi jefe, no|blue]] confío.'], hint: 'Con «a» → «le»; con «en» o «de» → sin pronombre; tema suelto → enlace dentro.', example: 'A mi hermano, le cuento todo desde pequeños. Mi vecina, de ella me fío completamente: tiene mis llaves. En cambio, en el administrador del edificio, no confío nada.', next: 'Ahora, como Elena.' },
            { q: 'Eres Elena. Abres la primera reunión en la oficina nueva y repasas los puntos pendientes. · You are Elena: run through the pending points.', followUps: ['¿Y la fianza?', '¿Qué pasa con el hospital?'], phrases: ['[[En cuanto a|teal]]…', '[[Por lo que respecta a|teal]]…', '[[Las llaves, las|blue]]…'], hint: 'Registro de reunión: «en cuanto a», «por lo que respecta a» y temas delante con su pronombre.', example: 'Buenos días a todos. En cuanto a internet, ya funciona desde esta mañana. Las llaves nuevas, las tiene cada uno en su mesa. Por lo que respecta a los clientes, ya están avisados, y a la editorial, la llamé yo el martes. De la fianza, les informaré cuando hable con el abogado.', teacher: 'Tú haces de Diego e interrumpes con preguntas («¿Y la impresora?», «¿Y el informe del hospital?»). Tu alumno responde como Elena con un tema delante cada vez.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («Ese libro leí ayer», «De eso no lo quiero hablar»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas como otra persona: tu jefe, tu pareja o un amigo. (Now ask the questions aloud and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo punto por punto', coach: 'Cada párrafo, un tema. One paragraph, one topic.',
      steps: [
        { title: 'Lo que queda antes de la mudanza · What’s left before the move', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el correo en voz alta y juntos comprueban cada tema: ¿lleva pronombre?, ¿debería llevarlo?', self: 'Escribe tu correo y toca «Revisar mi texto». Después léelo en voz alta: ¿cada tema delante lleva el pronombre justo, o ninguno si tiene preposición? (Check every fronted topic.)' } },
          { kind: 'write', title: 'Correo al equipo · Email to the team', situation: 'Eres Elena (o eres tú, en una mudanza, un cambio de trabajo o la organización de un viaje de grupo). Escribes un correo al equipo para repasar, punto por punto, lo que queda pendiente y quién se encarga de cada cosa. (Write an email to your team going through the pending points one by one.)', task: [
            'Organiza el correo por temas: cada punto empieza nombrando el tema.',
            'Pon al menos tres temas delante retomados con su pronombre (lo, la, los, las, le, les).',
            'Incluye un tema con preposición sin pronombre (De…, Con…, En…).',
            'Presenta un punto con «en cuanto a», «respecto a» o «por lo que respecta a».',
            'Retoma una oración entera con «lo» neutro (Que…, ya lo sabemos).',
          ], starters: ['Hola, equipo: les resumo…', 'Las llaves del…, las tengo…', 'En cuanto a los clientes,…', 'A la editorial, …', 'De la fianza,…', 'Que la primera semana…, lo sabemos…'],
            words: ['en cuanto a', 'respecto a', 'por lo que respecta a', 'lo sabemos', 'encargarse de', 'quedar pendiente', 'de momento', 'sin embargo'],
            model: 'Hola, equipo: les resumo cómo queda todo antes del lunes. [[Las llaves del local nuevo, las tengo yo|blue]]; quien las necesite el fin de semana, que me escriba. [[La impresora vieja, la vendimos|blue]] ayer, así que la primera semana imprimiremos en la copistería de la esquina. [[En cuanto a los clientes|teal]], ya están avisados casi todos. [[A la editorial, sin embargo, no le hemos dicho nada|blue]] todavía: prefiero llamarla yo el martes. [[De la fianza, de momento, mejor no hablar|blue]] con el casero; la está revisando nuestro abogado. [[Por lo que respecta a los plazos|teal]], [[el informe del hospital lo entrega|blue]] Valeria el miércoles, como estaba previsto. [[Que la primera semana va a ser caótica, lo sabemos|blue]] todos, pero con un poco de paciencia saldrá bien. Gracias por el esfuerzo de estos días. Un abrazo, Elena',
            minWords: 120,
            checks: [
              { label: 'Un tema presentado (en cuanto a, respecto a, por lo que respecta a…)', pattern: '(?<!\\p{L})(?:en\\s+cuanto\\s+a|(?:con\\s+)?respecto\\s+a|por\\s+lo\\s+que\\s+respecta\\s+a|en\\s+lo\\s+que\\s+(?:se\\s+refiere|respecta)\\s+a)(?!\\p{L})', tip: 'Abre un punto con «En cuanto a…» o «Por lo que respecta a…».' },
              { label: 'Un tema delante, con coma, retomado por un pronombre', pattern: '(?<!\\p{L})(?:el|la|los|las|a\\s+(?:la|las|los|el)|al)\\s+[^.,;:]{1,40},\\s+(?:\\p{L}+\\s+){0,3}?(?:lo|la|los|las|le|les)\\s+\\p{L}+', tip: 'Pon un tema delante y retómalo: «Las llaves, las tengo yo».' },
              { label: 'Una oración retomada con «lo» neutro', pattern: '(?<!\\p{L})que\\s+[^.;:]{3,70},\\s+(?:ya\\s+|no\\s+|todos\\s+)?lo\\s+(?:sé|sabe|sabemos|saben|sabía|sabíamos|sabían|imaginábamos|suponíamos)(?!\\p{L})', tip: 'Prueba con «Que…, ya lo sabemos».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})de\\s+(?:eso|esto|ello|la\\s+fianza|los\\s+plazos)\\s*,\\s*(?:no\\s+|mejor\\s+no\\s+)?(?:lo|la|los|las)\\s+(?:quiero|queremos|vamos|podemos|hablamos|hablaremos|hablar)', why: 'Un tema con «de» no se retoma con pronombre: «De eso, no quiero hablar».' },
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
            { tone: 'blue', label: 'TEMA DELANTE', formula: 'objeto + pausa + lo, la, los, las, le, les · oración o atributo + lo', example: 'Las llaves, las tengo yo. A tu hermano, no le digas nada. Que vendrá, lo sé.', caption: 'con «de, con, en…» o sin artículo: sin pronombre', en: 'A fronted known object is picked up by an agreeing pronoun (compulsory with definite direct objects); prepositional and bare topics take none' },
            { tone: 'teal', label: 'TEMA PRESENTADO', formula: 'en cuanto a / respecto a / por lo que respecta a + tema · tema suelto + enlace', example: 'En cuanto a los plazos, los mantenemos. Mi jefe, no me fío de ese hombre.', caption: 'formal / coloquial', en: 'Topic markers announce a new point in formal registers; the hanging topic is colloquial and needs a link inside the sentence' },
            { tone: 'violet', label: 'TEMA AL FINAL', formula: 'frase con pronombre + pausa + tema', example: 'Ya lo sé, lo de la reunión. Me lo dijo ayer, tu padre.', caption: 'aclaración, típica al hablar', en: 'An afterthought topic: the pronoun comes first and the noun phrase follows a pause' },
            { tone: 'orange', label: 'FOCO DELANTE', formula: 'FOCO (acento) + verbo + sujeto, sin pronombre', example: 'ESAS llaves tengo yo, no las otras.', caption: 'corrige o contrasta', en: 'A stressed contrastive focus takes no direct-object pronoun and puts the subject after the verb' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate tres cosas. ¿**Corrijo** algo con acento fuerte? Entonces es foco: **sin pronombre**. ¿Es un **objeto** conocido (con artículo, demostrativo o nombre)? Entonces es tema: **pausa + pronombre** que concuerda. ¿Lleva **de, con, en, para**…? Entonces va **sin pronombre**. Y recuerda: «Lo vi a Juan» es normal en el Río de la Plata; en la mayoría de las variedades, «Vi a Juan».', en: 'Ask yourself three things. Am I correcting something with heavy stress? Then it’s a focus: no pronoun. Is it a known object with an article, demonstrative or name? Then it’s a topic: pause plus an agreeing pronoun. Does it carry de, con, en, para…? Then no pronoun. “Lo vi a Juan” is normal in the River Plate area; most varieties say “Vi a Juan”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '«Esa película, ya ___ he visto dos veces».', options: ['la', 'le', '—'], answer: 0, why: 'Objeto directo definido delante: «la» es obligatorio.', en: 'That film, I’ve already seen twice.' },
            { prompt: '«___, no me acuerdo de nada».', options: ['De la fiesta', 'A la fiesta, le', 'La fiesta, la'], answer: 0, why: '«Acordarse de algo»: el tema conserva «de» y va sin pronombre.', en: 'About the party, I don’t remember a thing.' },
            { prompt: '«A tus padres, ¿ya ___ has contado lo del viaje?».', options: ['les', 'lo', 'los'], answer: 0, why: 'Indirecto plural delante: «les».', en: 'Your parents: have you told them about the trip yet?' },
            { prompt: '—¿Es simpática tu jefa? —Simpática, ___ es; paciente, no tanto.', options: ['lo', 'le', 'la'], answer: 0, why: 'Un atributo se retoma con «lo» neutro, aunque se refiera a una mujer.', en: '“Is your boss nice?” “Nice, she is; patient, not so much.”' },
            { prompt: '—¿Compraste el pan integral? —No: ___, no el integral.', options: ['EL DE MAÍZ compré', 'EL DE MAÍZ lo compré', 'EL DE MAÍZ yo compré'], answer: 0, why: 'Foco de corrección: sin pronombre y con el verbo justo detrás.', en: '“Did you buy the wholemeal bread?” “No: it was the CORN bread I bought, not the wholemeal.”' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una boda. Now, a wedding.', blocks: [
          { kind: 'lead', text: 'Inés organiza la boda de su hermana y repasa la lista con el padre de la novia. Sus frases son neutras; él prefiere hablar por temas. Reescríbelas.', en: 'Inés is organising her sister’s wedding and goes through the list with the bride’s father. Her sentences are neutral; he prefers to talk topic by topic. Rewrite them.' },
          { kind: 'rewrite', title: 'La lista de la boda · The wedding list', items: [
            { prompt: 'La tía Carmen trae las flores.', instruction: 'Pon «las flores» delante como tema.', accept: ['Las flores, las trae la tía Carmen', 'Las flores, la tía Carmen las trae'] },
            { prompt: 'No le hemos mandado la invitación al primo Raúl.', instruction: 'Pon «al primo Raúl» delante como tema.', accept: ['Al primo Raúl, no le hemos mandado la invitación'] },
            { prompt: 'Ya sé que va a llover.', instruction: 'Pon «que va a llover» delante y retómalo con un pronombre.', accept: ['Que va a llover, ya lo sé', 'Que va a llover, lo sé'] },
          ] },
        ] },
        { title: 'Ampliación: varios temas y registro · Extension: several topics and register', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** Puede haber **varios temas** seguidos, cada uno con su pronombre: «**A mi hermano, el coche**, no **se lo** presto». **2.** **Con artículo o sin él**: «**El** dinero, no **lo** tengo» (ese dinero concreto) frente a «Dinero, no tengo» (nada de dinero). **3.** **Registro**: la dislocación a la izquierda con pronombre es normal en todos los registros; el tema al final y el tema suelto son propios de la conversación; en un informe, «en cuanto a» o el orden neutro. **4.** Un tema con «a» que **no** es objeto (un lugar) no lleva pronombre: «**A Lima**, vuelvo cada verano».', en: 'For strong students or spare time. 1. Several topics can be stacked, each with its own pronoun: “My brother, the car: I don’t lend it to him”. 2. With an article the topic is specific and takes a pronoun; without one it is generic and usually takes none. 3. Left dislocation with a pronoun fits any register; afterthought and hanging topics belong to speech; reports prefer “en cuanto a” or neutral order. 4. An “a” that marks a place, not an object, brings no pronoun.' },
          { kind: 'choice', title: 'Registro y matices · Register and nuance', items: [
            { prompt: '«A mi hermana, el piso, no ___ alquilaría nunca».', options: ['le lo', 'la lo', 'se lo'], answer: 2, why: 'Dos temas: «a mi hermana» (indirecto) y «el piso» (directo). «Le» + «lo» se convierte en «se lo».', en: 'My sister, the flat: I’d never rent it to her.' },
            { prompt: '—¿Tienes paciencia con los niños? —___', options: ['Paciencia, no la tengo mucha.', 'La paciencia, no tengo mucha.', 'Paciencia, no tengo mucha.'], answer: 2, why: 'Nombre sin artículo delante: normalmente sin pronombre. Con artículo, el pronombre sería obligatorio.', en: '“Are you patient with children?” “Patience, I haven’t got much.”' },
            { prompt: 'En un informe para la dirección, ¿qué opción es la más adecuada?', options: ['El presupuesto, no me fío de esas cifras.', 'Ya lo hemos revisado, el presupuesto.', 'En cuanto al presupuesto, lo hemos revisado.'], answer: 2, why: '«En cuanto a» es la opción formal; el tema suelto y el tema al final son coloquiales.', en: 'In a report for management, which option is most suitable?' },
            { prompt: '«A Lima, ___ cada verano».', options: ['la vuelvo', 'le vuelvo', 'vuelvo'], answer: 2, why: 'Aquí «a» indica dirección («volver a un lugar»), no un objeto: no hay pronombre.', en: '“Lima, I go back to every summer.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno toma el correo de Escribir y lo convierte en un mensaje de voz informal, con un tema al final y un tema suelto.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 186 · Ambigüedad sintáctica y dos interpretaciones', text: 'Ya pones un tema delante o al final y decides si lo retoma un pronombre, y distingues un tema de un foco. La posición y los pronombres deciden qué se entiende. En la clase 186 vas un paso más allá: frases que, por su orden o por lo que retoma un pronombre, pueden significar dos cosas, y cómo deshacer esa ambigüedad.', en: 'You can now place a topic at the start or end, decide whether a pronoun picks it up, and tell a topic from a focus. Position and pronouns shape what the listener understands. Class 186 takes the next step: sentences that can mean two things because of their order or what a pronoun refers to, and how to remove that ambiguity.', href: '/cuando-una-frase-puede-significar-dos-cosas', label: 'Ir a la clase 186' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué decimos “Ese libro lo leí” pero “De ese libro no hablo”?». Respuesta esperada: el objeto directo definido delante se retoma con un pronombre; un tema con «de» no tiene pronombre átono. Tarea: el correo de Escribir.' },
        ] },
      ],
    },
  ],
};
