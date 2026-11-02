import type { LiveLesson } from '../types';

/**
 * Lesson 468 · C1 · Alternancia de indicativo y subjuntivo según postura (course unit G168).
 * Builds on G093 (lesson 393: creo que / no creo que, ¿crees que…?, no es que),
 * G094 (lesson 394: the certainty–doubt scale, a lo mejor, quizás with both moods),
 * G092 (emotion + que + subjunctive), G152 (lesson 452: el hecho de que, two-value
 * verbs decir / sentir / entender in the present) and G167 (lesson 37: tense
 * agreement). It does not reteach those basics: the C1 step is to read and choose
 * the mood as a signal of the speaker's stance (aserción, distancia, valoración).
 * Content: questions and negative imperatives with opinion verbs (¿Crees que
 * cierra / cierre?, ¿No crees que es pronto?, No pienses que es / sea fácil);
 * negation that keeps the speaker's commitment (No sabía que el informe era
 * público: presupposed fact → indicative; the subjunctive variant is also heard);
 * factive verbs (saber, darse cuenta de) vs emotional factives and «el hecho de
 * que» (true but evaluated → subjunctive); verbs with two meanings (entender /
 * comprender, sentir, decir, temer(se) que); reported belief (Dicen que cierra)
 * vs evaluation (Que lo digan no significa que sea verdad); the doubt scale
 * revisited with the journalist's commitment (seguramente, a lo mejor + ind.;
 * puede que, es posible que + subj.; quizá(s), tal vez, probablemente with both
 * moods); aunque only briefly (G170 deepens it). Ampliación: no negar que + ind. /
 * subj., «yo nunca dije que fuera…», «que yo sepa».
 * Scene: the newsroom of a local digital paper, «La Plaza». A rumour says the
 * municipal government will close the Mercado Central in January because a
 * technical report found problems in the roof. Mercedes Arias (editor) argues
 * with the reporter Gonzalo Rey about the headline; Alba Medina (data journalist)
 * has read the report; Rosario Gil runs a fruit stall. Escuchar: Mercedes's
 * newsroom podcast (es-ES-ElviraNeural, ustedes). Escribir: an editor's note to
 * readers. Instructions use tú. Variable choices are never presented as errors.
 */
export const lesson: LiveLesson = {
  id: 468,
  level: 'C1',
  title: 'Alternancia de indicativo y subjuntivo según postura',
  subtitle: 'Elegir indicativo o subjuntivo para mostrar si afirmas, dudas, informas de lo que dicen otros o valoras un hecho.',
  legend: [
    { tone: 'blue', label: 'INDICATIVO · afirmo, informo o doy el dato por cierto' },
    { tone: 'orange', label: 'SUBJUNTIVO · no afirmo: dudo, niego, veo posible o valoro un hecho' },
    { tone: 'teal', label: 'MARCADORES · creer, saber, puede que, quizás, el hecho de que…' },
    { tone: 'violet', label: 'DOBLE SENTIDO · entender, sentir, decir, temer que' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El modo dice dónde estás tú', coach: 'El modo muestra tu postura. Mood shows where you stand.',
      steps: [
        { title: 'Un titular en el aire · A headline up in the air', blocks: [
          { kind: 'lead', text: 'En la redacción de «La Plaza», un periódico digital local, corre un rumor: el gobierno municipal va a cerrar el Mercado Central en enero porque un informe técnico ha encontrado problemas en el techo. Gonzalo Rey quiere publicarlo ya; Mercedes Arias, la jefa de redacción, no lo tiene tan claro. Ya conoces las reglas básicas (creo que / no creo que, puede que, quizás). En C1 das otro paso: el modo no depende solo de la palabra que va delante, sino de tu **postura**: ¿lo afirmas, lo pones en duda, lo cuentas porque otros lo dicen o lo das por sabido y lo valoras?', en: 'In the newsroom of “La Plaza”, a local online paper, there is a rumour: the city government will close the Central Market in January because a technical report found problems with the roof. Gonzalo Rey wants to publish it right away; Mercedes Arias, the editor, is not so sure. You already know the basic rules. At C1 you go further: the mood depends not only on the word before it but on your stance. Are you asserting it, questioning it, passing on what others say, or taking it as given and reacting to it?' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno explica qué piensa cada hablante sobre el cierre: ¿lo afirma, no lo afirma o lo valora?', self: 'Lee las tres frases en voz alta. ¿Qué piensa cada hablante sobre el cierre? (What does each speaker think about the closure?)' } },
          { kind: 'compare', title: 'Un mismo cierre, tres posturas · One closure, three stances', columns: [
            { tone: 'blue', label: 'AFIRMO', sentence: 'Gonzalo: «Creo que el mercado [[cierra|blue]] en enero».', idea: 'Presenta el cierre como verdadero: es su opinión, la asume.', en: 'Gonzalo presents the closure as true: he is committing to it.' },
            { tone: 'orange', label: 'NO AFIRMO', sentence: 'Mercedes: «No está claro que [[cierre|orange]] en enero».', idea: 'Mercedes no se compromete: el cierre queda en duda.', en: 'Mercedes does not commit herself: the closure is left open to doubt.' },
            { tone: 'orange', label: 'VALORO UN HECHO', sentence: 'Una vendedora: «Me indigna que lo [[cierren|orange]] sin preguntarnos».', idea: 'Para ella el cierre es un hecho, pero no informa de él: reacciona.', en: 'For her the closure is a fact, but she is not reporting it, she is reacting to it. Subjunctive does not mean “false”.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Me indigna que lo cierren». ¿La vendedora duda del cierre?', options: ['No: lo da por hecho y lo valora.', 'Sí: el subjuntivo indica que es falso.', 'Sí: no sabe si va a pasar.'], answer: 0, why: 'Con verbos de emoción el subjuntivo no niega el hecho: el hablante lo da por sabido y reacciona ante él.', en: 'Does the stallholder doubt the closure?' },
            { prompt: '¿Quién se compromete más con la noticia?', options: ['«Puede que cierre».', '«No está claro que cierre».', '«Creo que cierra».'], answer: 2, why: '«Creo que» + indicativo asevera: el hablante asume la verdad de lo que dice. Las otras dos no afirman.', en: 'Who commits more to the news?' },
          ] },
        ] },
        { title: 'Preguntar y advertir · Asking and warning', mascot: '/brand/mascot/studying.webp', coach: 'La pregunta también tiene postura. Questions have a stance too.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PREGUNTAS E IMPERATIVOS NEGATIVOS', question: '¿Preguntas sin más, buscas que te den la razón o rechazas una idea?', en: 'In questions and negative commands with opinion verbs both moods can appear. The indicative is the neutral choice in questions; the subjunctive lets your doubt show. With “¿No crees que…?” you are really giving your own opinion and asking for agreement. With “No pienses / No creas que…” you reject an idea you attribute to the listener.', formula: ['¿Crees que + indicativo? → pregunta abierta', '¿Crees que + subjuntivo? → dejas ver que lo dudas', '¿No crees que + indicativo? → opinas y buscas acuerdo', 'No pienses / No creas que + indicativo o subjuntivo'],
            meaning: 'En las preguntas con verbos de opinión, el **indicativo** es la opción más general: preguntas sin tomar partido. Con **subjuntivo**, la pregunta deja ver tu duda; este uso es especialmente frecuente en México y en otras zonas de América. «¿**No** crees que…?» no niega nada: es tu opinión disfrazada de pregunta, y por eso va con indicativo. En el imperativo negativo («no pienses que…») los dos modos son correctos.',
            examples: [
              { es: '¿Crees que el gobierno [[cierra|blue]] el mercado? / ¿Crees que lo [[cierre|orange]]?', en: 'Do you think they’ll close it? (open question) / Do you really think they’ll close it? (you doubt it)' },
              { es: '¿No crees que [[es|blue]] pronto para publicarlo?', en: 'Don’t you think it’s too early to publish it? (= I think it is.)' },
              { es: 'No pienses que te lo [[digo|blue]] por fastidiar.', en: 'Don’t think I’m saying this to annoy you. (I reject the idea you might have.)' },
              { es: 'No creas que [[sea|orange]] tan fácil confirmar una fuente.', en: 'Don’t imagine it’s that easy to confirm a source.' },
            ],
            note: 'Con indicativo, «no pienses que…» suena a respuesta a lo que el otro está pensando de verdad; con subjuntivo, es una negación más general. Ninguna de las dos es un error.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mercedes pregunta: «¿No crees que es un poco pronto?». ¿Qué piensa ella?', options: ['Que no es pronto.', 'Que es pronto: pide que Gonzalo le dé la razón.', 'No lo sabe y pregunta de forma neutra.'], answer: 1, why: '«¿No crees que + indicativo?» es una opinión presentada como pregunta para buscar acuerdo.', en: 'What does Mercedes think?' },
            { prompt: 'Una lectora pregunta: «¿Crees que lo cierren?». ¿Qué deja ver?', options: ['Que está segura del cierre.', 'Que duda del cierre.', 'Que ha cometido un error de modo.'], answer: 1, why: 'En la pregunta, el subjuntivo deja ver la duda de quien pregunta. Es una opción correcta, muy frecuente en México.', en: 'What does the reader’s question reveal?' },
          ] },
        ] },
        { title: 'Negar sin dudar: hechos que se dan por sabidos · Presupposed facts', mascot: '/brand/mascot/speaking.webp', coach: 'Un hecho sigue siendo un hecho. A fact stays a fact.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'VERBOS FACTIVOS', question: '¿El contenido es un hecho que tú das por cierto?', en: 'With verbs like saber, darse cuenta de, enterarse de or olvidar, the content is a fact the speaker takes for granted. Negating the verb does not negate the fact (“I didn’t know the report was public” still means it is public), so the indicative is the normal choice. With emotion verbs and “el hecho de que”, the fact is also true, but you are evaluating it, so the subjunctive is used.', formula: ['saber · darse cuenta de · enterarse de · olvidar + que + indicativo', 'no sabía que + indicativo → el dato es cierto (y nuevo para ti)', 'me sorprende / me molesta / el hecho de que + subjuntivo → hecho valorado'],
            meaning: 'Con **saber**, **darse cuenta de**, **enterarse de**, **olvidar** o **recordar**, el contenido es un hecho que el hablante da por cierto. Aunque niegues el verbo, el hecho sigue en pie: «No sabía que el informe **era** público» = el informe es público y tú no lo sabías. En la lengua hablada también se oye «no sabía que fuera público», con un matiz de sorpresa o de menor compromiso. Con los verbos de **emoción** y con **el hecho de que** (clase 152) el hecho también es cierto, pero no lo informas: lo **valoras**, y va en subjuntivo.',
            examples: [
              { es: 'No sabía que el informe ya [[era|blue]] público.', en: 'I didn’t know the report was already public. (It is.)' },
              { es: 'No me di cuenta de que la grabadora [[estaba|blue]] apagada.', en: 'I didn’t notice the recorder was off. (It was.)' },
              { es: 'Me sorprende que nadie lo [[haya|orange]] leído antes.', en: 'I’m surprised nobody read it earlier. (A fact, evaluated.)' },
              { es: '[[El hecho de que|teal]] el informe [[sea|orange]] público no cambia nada todavía.', en: 'The fact that the report is public doesn’t change anything yet.' },
            ] },
          { kind: 'table', title: 'Negación: ¿niega el contenido o no? · Does the negation reach the content?', head: ['La negación NO toca el contenido (indicativo)', 'La negación SÍ toca el contenido (subjuntivo)'], rows: [
            ['No sabía que Alba [[había|blue]] leído el informe. (Lo ha leído.)', 'No creo que Alba [[haya|orange]] leído el informe. (Lo dudo.)'],
            ['No me enteré de que la rueda de prensa [[era|blue]] hoy.', 'No es seguro que la rueda de prensa [[sea|orange]] hoy.'],
            ['No olvides que el titular [[tiene|blue]] que ser exacto.', 'No digo que el titular [[sea|orange]] falso.'],
          ], note: 'Pregunta clave: después de la frase, ¿el hablante sigue dando el contenido por cierto? Si sí, indicativo; si lo deja en el aire, subjuntivo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No sabía que Alba había leído el informe». ¿Lo ha leído?', options: ['Sí.', 'No.', 'No se sabe.'], answer: 0, why: '«Saber» presupone el hecho: la negación afecta a tu conocimiento, no al hecho.', en: 'Has Alba read the report?' },
            { prompt: 'Elige la frase en la que el hablante NO se compromete con el contenido.', options: ['No digo que esté grabando.', 'No me di cuenta de que estaba grabando.', 'Me enteré de que estaba grabando.'], answer: 0, why: '«No digo que» + subjuntivo deja el contenido en el aire. Las otras dos presentan el hecho como cierto.', en: 'Choose the sentence where the speaker does not commit to the content.' },
          ] },
        ] },
        { title: 'Un verbo, dos sentidos · One verb, two meanings', mascot: '/autoestudio/mascot/noting.webp', coach: 'Cambia el modo, cambia el verbo. Change the mood, change the verb.', blocks: [
          { kind: 'table', title: 'Constatar o valorar · Noting or evaluating', head: ['Verbo', '+ INDICATIVO: constato, percibo, informo', '+ SUBJUNTIVO: valoro, lamento, pido'], rows: [
            ['[[entender / comprender que|violet]]', 'Entiendo que el informe ya [[es|blue]] público. (lo he sabido, me consta)', 'Entiendo que los vendedores [[estén|orange]] preocupados. (me parece lógico)'],
            ['[[sentir que|violet]]', 'Siento que los lectores [[desconfían|blue]] de nosotros. (lo noto)', 'Siento que los lectores [[desconfíen|orange]] de nosotros. (lo lamento)'],
            ['[[decir que|violet]]', 'Los vendedores dicen que el techo [[tiene|blue]] goteras. (informan)', 'Mercedes dice que [[llamemos|orange]] a la concejala. (pide)'],
            ['[[temer(se) que|violet]]', 'Me temo que no [[llegamos|blue]] a la edición de mañana. (anuncio algo malo, con cortesía)', 'Temo que los clientes [[dejen|orange]] de venir. (tengo miedo de que pase)'],
          ], note: 'En la clase 152 viste decir, sentir y entender. Aquí lo nuevo es **temer(se)** y, sobre todo, usar el contraste para matizar: «entiendo que» + indicativo resume o confirma una información; + subjuntivo muestra empatía. «Me temo que» suele ir con indicativo.' },
          { kind: 'compare', title: 'Informar de una creencia o valorarla · Reporting a belief or evaluating it', columns: [
            { tone: 'blue', label: 'TRANSMITO LO QUE DICEN', sentence: 'Dicen que el mercado [[cierra|blue]] en enero.', idea: 'Repites una afirmación ajena tal como se afirma. No dices si tú la crees.', en: 'You pass on someone else’s claim as a claim. It does not say whether you believe it.' },
            { tone: 'orange', label: 'VALORO LO QUE DICEN', sentence: 'Que lo [[digan|orange]] no significa que [[sea|orange]] verdad.', idea: 'La oración con «que» al principio se valora, y «no significa que» niega la conclusión.', en: 'A “que” clause at the start is being evaluated, and “no significa que” denies the conclusion: both in the subjunctive.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Entiendo que estés molesto». ¿Qué significa?', options: ['Me han dicho que estás molesto.', 'Comprendo tu enfado, me parece lógico.', 'Te pido que estés molesto.'], answer: 1, why: '«Entender que» + subjuntivo = encontrar comprensible algo. Con indicativo sería «me consta, me han dicho».', en: 'What does it mean?' },
            { prompt: '«Siento que el equipo está dividido». ¿Qué significa?', options: ['Lamento que el equipo esté dividido.', 'Quiero que el equipo se divida.', 'Noto que el equipo está dividido.'], answer: 2, why: '«Sentir que» + indicativo = percibir, notar. Para lamentarlo: «siento que esté dividido».', en: 'What does it mean?' },
          ] },
        ] },
        { title: 'Cuánto te comprometes · How much you commit', mascot: '/brand/mascot/standing.webp', coach: 'Del dato a la hipótesis. From fact to hypothesis.', blocks: [
          { kind: 'table', title: 'La escala, vista desde la redacción · The scale, seen from the newsroom', head: ['Compromiso', 'Expresión', 'Modo', 'En el titular'], rows: [
            ['Alto', 'seguro que · seguramente · está claro que', 'indicativo', '[[Seguramente|teal]] [[cierra|blue]] por fases.'],
            ['Medio', 'a lo mejor · igual (coloquial)', 'indicativo', '[[A lo mejor|teal]] [[cierra|blue]] en primavera.'],
            ['Medio o bajo', 'quizá(s) · tal vez · probablemente · posiblemente', 'indicativo o subjuntivo', '[[Quizás|teal]] [[cierra|blue]] / [[cierre|orange]] en primavera.'],
            ['Bajo', 'puede que · es posible que · es probable que', 'subjuntivo', '[[Puede que|teal]] [[cierre|orange]] en primavera.'],
            ['Duda o rechazo', 'no creo que · dudo que · no es seguro que', 'subjuntivo', '[[No es seguro que|teal]] [[cierre|orange]] en enero.'],
          ], note: 'Con quizás, tal vez o probablemente **delante** del verbo, los dos modos son correctos: el subjuntivo suele marcar más distancia. Si el adverbio va **detrás**, indicativo: «Cierra, probablemente, en primavera». «Seguramente» significa «probablemente», no «con seguridad», y suele ir con indicativo.' },
          { kind: 'compare', title: 'Aunque, en dos palabras · Aunque, briefly', columns: [
            { tone: 'blue', label: 'AUNQUE + INDICATIVO', sentence: 'Aunque el informe [[es|blue]] preocupante, no hay fecha.', idea: 'Afirmas el dato y lo presentas como información.', en: 'You assert the fact as information: “although the report is worrying…”.' },
            { tone: 'orange', label: 'AUNQUE + SUBJUNTIVO', sentence: 'Aunque el informe [[sea|orange]] preocupante, no vamos a alarmar a nadie.', idea: 'Concedes el dato sin discutirlo: no es lo importante. Lo verás a fondo en la clase 170.', en: 'You grant the point without debating it: it is not what matters. Class 170 goes deeper.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase transmite MÁS distancia del hablante?', options: ['Seguramente cierra en primavera.', 'Probablemente cierre en primavera.', 'Probablemente cierra en primavera.'], answer: 1, why: 'Con «probablemente» delante, el subjuntivo suele marcar más distancia. «Seguramente» + indicativo es lo más seguro de las tres.', en: 'Which sentence shows the most distance on the speaker’s part?' },
            { prompt: 'A lo mejor la concejala ___ hoy mismo.', options: ['respondiera', 'responda', 'responde'], answer: 2, why: '«A lo mejor» va siempre con indicativo, aunque exprese posibilidad.', en: 'Maybe the councillor will reply today.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Afirmas o no afirmas? Asserting or not?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué postura tiene el hablante y por qué el modo no encaja. Después aparece la corrección.', self: 'Lee cada frase y piensa qué quiere decir el hablante. Toca para ver la corrección. (What does the speaker mean?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Me sorprende que el informe es público.', right: 'Me sorprende que el informe sea público.', why: 'Es un hecho, pero lo valoras con un verbo de emoción: subjuntivo. «Es un hecho, luego indicativo» es una trampa frecuente. (An evaluated fact takes the subjunctive.)' },
            { wrong: 'A lo mejor el gobierno lo anuncie mañana.', right: 'A lo mejor el gobierno lo anuncia mañana.', why: '«A lo mejor» expresa duda, pero va siempre con indicativo. (A lo mejor always takes the indicative.)' },
            { wrong: 'Entiendo que la rueda de prensa sea a las diez, ¿verdad?', right: 'Entiendo que la rueda de prensa es a las diez, ¿verdad?', why: 'Quieres confirmar un dato: «entender que» = me consta, con indicativo. Con subjuntivo dirías que te parece comprensible, y aquí no tiene sentido. (Confirming information: indicative.)' },
            { wrong: 'Es evidente que el techo necesite una reparación.', right: 'Es evidente que el techo necesita una reparación.', why: '«Es evidente que» afirma con total compromiso: indicativo. Con «no es evidente que» pasaría a subjuntivo.' },
            { wrong: 'Puede que la concejala tiene más datos.', right: 'Puede que la concejala tenga más datos.', why: '«Puede que» presenta una posibilidad, no una afirmación: subjuntivo. (Possibility: subjunctive.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Me parece lamentable que algunos medios ___ el rumor como un hecho.', options: ['han publicado', 'publican', 'hayan publicado'], answer: 2, why: 'Valoras un hecho ya ocurrido: subjuntivo, «hayan publicado».', en: 'I find it regrettable that some media outlets published the rumour as fact.' },
            { prompt: 'Está claro que el techo ___ problemas.', options: ['tiene', 'tuviera', 'tenga'], answer: 0, why: '«Está claro que» asevera: indicativo.', en: 'It’s clear the roof has problems.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno comenta una noticia real de su ciudad con tres frases de postura distinta: una que afirma («Creo que…»), una que no se compromete («Puede que…») y una que valora («Me preocupa que…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión del titular', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la redacción · In the newsroom', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Mercedes y tu alumno es Gonzalo; Alba la leen entre los dos. Después tu alumno toca cada expresión marcada y explica qué postura muestra.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿el hablante afirma, duda, informa o valora? (Does the speaker assert, doubt, report or react?)' } },
          { kind: 'explore', title: '¿Lo subimos?', setting: 'Lunes por la mañana, en la redacción de «La Plaza». Gonzalo Rey, redactor, Mercedes Arias, jefa de redacción, y Alba Medina, periodista de datos, discuten el titular sobre el Mercado Central. (Monday morning in the newsroom. Three journalists argue about the headline on the Central Market.)', lines: [
            { who: 'Gonzalo', text: 'Mercedes, ya tengo titular: «El Mercado Central cierra en enero». ¿Lo subimos a la web?', en: 'Mercedes, I’ve got the headline: “Central Market closes in January”. Shall we put it on the website?' },
            { who: 'Mercedes', text: 'Un momento. [[¿No crees que|teal]] [[es|blue]] un poco pronto? Nadie lo ha confirmado.', en: 'Hold on. Don’t you think it’s a bit early? Nobody has confirmed it.' },
            { who: 'Gonzalo', text: 'Lo dicen los propios vendedores: [[dicen que|teal]] el informe técnico [[recomienda|blue]] cerrar el edificio.', en: 'The stallholders themselves are saying it: they say the technical report recommends closing the building.' },
            { who: 'Alba', text: 'Yo he leído el informe, y [[no dice que|teal]] [[haya|orange]] que cerrar en enero. Habla de reparar el techo «en los próximos meses».', en: 'I’ve read the report, and it doesn’t say it has to close in January. It talks about repairing the roof “in the coming months”.' },
            { who: 'Gonzalo', text: 'Ya, pero [[seguramente|teal]] lo [[cierran|blue]] antes del verano. Nadie arregla un techo con los puestos abiertos.', en: 'Sure, but they’ll probably close it before summer. Nobody fixes a roof with the stalls open.' },
            { who: 'Mercedes', text: '[[Puede que|teal]] [[tengas|orange]] razón. Pero mientras no lo confirmen, es una hipótesis, no un titular.', en: 'You may be right. But until they confirm it, it’s a hypothesis, not a headline.' },
            { who: 'Alba', text: '[[Comprendo que|violet]] los vendedores [[estén|orange]] nerviosos. Y por lo que me dijo ayer una concejala, [[entiendo que|violet]] ya [[buscan|blue]] un local provisional.', en: 'I understand why the stallholders are nervous. And from what a councillor told me yesterday, I gather they are already looking for temporary premises.' },
            { who: 'Gonzalo', text: 'Entonces el cierre es seguro, ¿no?', en: 'So the closure is certain, right?' },
            { who: 'Mercedes', text: 'No necesariamente. [[El hecho de que|teal]] [[busquen|orange]] un local no significa que [[vayan|orange]] a cerrar en enero. [[Quizás|teal]] lo [[hagan|orange]] por fases.', en: 'Not necessarily. The fact that they’re looking for premises doesn’t mean they’ll close in January. Perhaps they’ll do it in stages.' },
            { who: 'Gonzalo', text: 'Vale. [[No pienses que|teal]] [[busco|blue]] un titular fácil, ¿eh? [[No sabía que|teal]] Alba [[tenía|blue]] el informe.', en: 'Okay. Don’t think I’m after an easy headline, eh? I didn’t know Alba had the report.' },
            { who: 'Mercedes', text: 'Ya lo sé, tranquilo. Titulamos «El gobierno municipal estudia cerrar el Mercado Central», y en el texto separamos lo que sabemos de lo que [[es posible que|teal]] [[pase|orange]].', en: 'I know, don’t worry. We’ll run “City government considering closing the Central Market”, and in the text we separate what we know from what may happen.' },
            { who: 'Alba', text: '[[A lo mejor|teal]] [[conseguimos|blue]] hoy una respuesta oficial. Llamo a la concejala.', en: 'Maybe we’ll get an official answer today. I’ll call the councillor.' },
          ], notes: {
            '¿No crees que': 'Pregunta negativa: Mercedes no pregunta de verdad, **opina** («creo que es pronto») y busca acuerdo. Por eso, indicativo.',
            'es': 'Indicativo tras «¿no crees que…?»: es la opinión de Mercedes.',
            'dicen que': 'Discurso referido: Gonzalo **transmite** lo que afirman otros. La afirmación ajena va en indicativo, sin decir si él la comprueba.',
            'recomienda': 'Indicativo: así lo afirman los vendedores.',
            'no dice que': '«Decir» negado: Alba niega que el informe lo afirme. El contenido queda sin aseverar.',
            'haya': 'Subjuntivo (haber que → haya que): nadie asevera esa obligación.',
            'seguramente': '**Seguramente** = probablemente (no «con seguridad»). Suele ir con indicativo: Gonzalo se compromete bastante.',
            'cierran': 'Indicativo tras «seguramente»: presente con valor de futuro próximo.',
            'Puede que': '«Puede que» presenta una posibilidad: Mercedes concede sin comprometerse.',
            'tengas': 'Subjuntivo obligatorio tras «puede que».',
            'Comprendo que': '«Comprender que» + subjuntivo: Alba no informa de los nervios, los **encuentra lógicos**.',
            'estén': 'Subjuntivo: valoración empática de un hecho.',
            'entiendo que': '«Entender que» + indicativo = **me consta**, lo deduzco de lo que me dijeron. Compara con «comprendo que estén»: el mismo tipo de verbo cambia de significado con el modo.',
            'buscan': 'Indicativo: Alba presenta el dato como información.',
            'El hecho de que': '«El hecho de que» al principio presenta un hecho que se valora o se discute (clase 152): lo normal es el subjuntivo.',
            'busquen': 'Subjuntivo tras «el hecho de que»: el hecho es cierto, pero se evalúa.',
            'vayan': 'Subjuntivo tras «no significa que»: Mercedes niega la conclusión.',
            'Quizás': '«Quizás» delante del verbo admite los dos modos. Con subjuntivo, Mercedes marca más distancia: es solo una posibilidad.',
            'hagan': 'Subjuntivo tras «quizás»: hipótesis abierta. «Quizás lo hacen por fases» también sería correcto, con más compromiso.',
            'No pienses que': 'Imperativo negativo con verbo de opinión: Gonzalo rechaza una idea que atribuye a Mercedes. Admite los dos modos.',
            'busco': 'Indicativo tras «no pienses que»: responde a lo que cree que Mercedes está pensando. «No pienses que busque…» también es posible.',
            'No sabía que': '«Saber» presupone el hecho: Alba sí tenía el informe. La negación afecta a lo que Gonzalo sabía.',
            'tenía': 'Indicativo: el dato es cierto. En la lengua hablada también se oye «no sabía que lo tuviera», con un matiz de sorpresa.',
            'es posible que': '«Es posible que» + subjuntivo: lo que puede pasar no se afirma. Ese es el corazón del titular prudente.',
            'pase': 'Subjuntivo: un hecho solo posible.',
            'A lo mejor': '«A lo mejor» expresa posibilidad, pero va siempre con indicativo.',
            'conseguimos': 'Indicativo tras «a lo mejor»: presente con valor de futuro.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué dice exactamente el informe técnico, según Alba?', options: ['Que hay que reparar el techo en los próximos meses.', 'Que el mercado cierra en enero.', 'Que el edificio no tiene problemas.'], answer: 0, why: 'Alba: «No dice que haya que cerrar en enero. Habla de reparar el techo en los próximos meses».', en: 'What exactly does the report say, according to Alba?' },
            { prompt: '¿Por qué Mercedes no quiere el primer titular?', options: ['Porque el mercado no va a cerrar.', 'Porque no le gusta el estilo de Gonzalo.', 'Porque presenta como un hecho algo que nadie ha confirmado.'], answer: 2, why: '«Mientras no lo confirmen, es una hipótesis, no un titular».', en: 'Why doesn’t Mercedes want the first headline?' },
            { prompt: '¿Qué sabe Alba por una concejala?', options: ['Que el gobierno busca un local provisional.', 'Que el cierre es en enero.', 'Que no habrá obras.'], answer: 0, why: '«Por lo que me dijo ayer una concejala, entiendo que ya buscan un local provisional».', en: 'What does Alba know from a councillor?' },
          ] },
        ] },
        { title: '¿Qué hace cada hablante? · What is each speaker doing?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la reunión · Sentences from the meeting', categories: [
            { id: 'afirma', label: 'AFIRMA O INFORMA (indicativo)', tone: 'blue' },
            { id: 'noafirma', label: 'NO AFIRMA: duda, niega, ve posible (subjuntivo)', tone: 'orange' },
            { id: 'valora', label: 'DA EL HECHO POR SABIDO Y LO VALORA (subjuntivo)', tone: 'violet' },
          ], items: [
            { text: 'Dicen que el informe recomienda cerrar el edificio.', answer: 'afirma', why: 'Transmite una afirmación ajena como información.' },
            { text: 'El informe no dice que haya que cerrar en enero.', answer: 'noafirma', why: 'Niega que el informe afirme esa obligación.' },
            { text: 'Comprendo que los vendedores estén nerviosos.', answer: 'valora', why: 'Los nervios son un hecho; Alba los encuentra lógicos.' },
            { text: 'Entiendo que ya buscan un local provisional.', answer: 'afirma', why: '«Entender que» + indicativo = me consta: es información.' },
            { text: 'Puede que tengas razón.', answer: 'noafirma', why: 'Posibilidad: Mercedes no se compromete.' },
            { text: 'El hecho de que busquen un local no cambia nada.', answer: 'valora', why: 'El hecho es cierto, pero se discute su alcance.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «Si fueras Mercedes, ¿qué titular pondrías?». Tu alumno propone dos titulares con distinto grado de compromiso («El mercado cerrará…» / «Es posible que el mercado cierre…») y explica cuál publicaría.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero la postura, después el modo. Stance first, then mood.',
      steps: [
        { title: 'Correos y mensajes · Emails and messages', blocks: [
          { kind: 'choice', items: [
            { context: 'La concejala responde a Alba por correo. (The councillor emails Alba back.)', prompt: 'Le confirmo que el informe ___ público desde ayer, aunque todavía no hay ninguna decisión.', options: ['es', 'sea', 'fuera'], answer: 0, why: '«Confirmar que» asevera: indicativo.', en: 'I can confirm that the report has been public since yesterday, although there is still no decision.' },
            { context: 'Gonzalo, en el chat de la redacción. (Gonzalo, in the newsroom chat.)', prompt: '___ el gobierno da una rueda de prensa esta tarde. ¿Alguien sabe algo?', options: ['Puede que', 'A lo mejor', 'Es posible que'], answer: 1, why: 'El verbo «da» está en indicativo: solo «a lo mejor» lo admite. Con «puede que» o «es posible que» haría falta «dé».', en: 'Maybe the government is holding a press conference this afternoon. Does anyone know anything?' },
            { context: 'Alba comenta el caso con Mercedes. (Alba discusses it with Mercedes.)', prompt: '¿Qué versión muestra MÁS duda?', options: ['Seguramente tiene razón Gonzalo.', 'Quizás tenga razón Gonzalo.', 'Quizás tiene razón Gonzalo.'], answer: 1, why: 'Las dos con «quizás» son correctas; el subjuntivo suele marcar más distancia. «Seguramente» es la más segura.', en: 'Which version shows the most doubt?' },
            { context: 'Gonzalo explica un problema técnico. (Gonzalo explains a technical problem.)', prompt: 'No me di cuenta de que la grabadora ___ apagada hasta el final de la entrevista.', options: ['estará', 'estaba', 'esté'], answer: 1, why: '«Darse cuenta de» presenta un hecho cierto del pasado: estaba apagada.', en: 'I didn’t notice the recorder was off until the end of the interview.' },
            { context: 'Una vendedora, en una entrevista. (A stallholder, in an interview.)', prompt: 'Me duele que la gente ___ que el mercado ya no sirve para nada.', options: ['pensar', 'piense', 'piensa'], answer: 1, why: 'Verbo de emoción: el hecho se valora, subjuntivo.', en: 'It hurts me that people think the market is no longer any use.' },
          ] },
        ] },
        { title: '¿Constatar o valorar? · Noting or evaluating?', blocks: [
          { kind: 'classify', title: 'Mismo verbo, otro sentido · Same verb, another meaning', categories: [
            { id: 'constata', label: 'CONSTATA: percibo, me consta, anuncio (indicativo)', tone: 'blue' },
            { id: 'valora', label: 'VALORA: me parece lógico, lo lamento (subjuntivo)', tone: 'orange' },
          ], items: [
            { text: 'Entiendo que la reunión es a las diez.', answer: 'constata', why: 'Me consta, me lo han dicho: indicativo.' },
            { text: 'Entiendo que estés harto de esperar.', answer: 'valora', why: 'Me parece comprensible: subjuntivo.' },
            { text: 'Siento que el ambiente está tenso.', answer: 'constata', why: '«Sentir» = notar, percibir.' },
            { text: 'Siento que hayas tenido que esperar tanto.', answer: 'valora', why: '«Sentir» = lamentar.' },
            { text: 'Me temo que no quedan entradas.', answer: 'constata', why: '«Me temo que» anuncia algo negativo con cortesía.' },
            { text: 'Comprendo que prefieras no opinar.', answer: 'valora', why: 'Me parece lógico: subjuntivo.' },
          ] },
        ] },
        { title: 'Revisa el borrador · Check the draft', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Tal vez el techo aguante otro invierno.', ok: true, why: 'Correcta: con «tal vez» delante del verbo, el subjuntivo es posible y marca distancia.' },
            { sentence: 'Igual el mercado cierre solo por las tardes.', ok: false, options: ['Igual que el mercado cierre solo por las tardes.', 'Igual el mercado cerrase solo por las tardes.', 'Igual el mercado cierra solo por las tardes.'], answer: 2, why: '«Igual» coloquial = a lo mejor: va con indicativo, como «a lo mejor».' },
            { sentence: 'Es probable que el gobierno anuncia algo esta semana.', ok: false, options: ['Es probable que el gobierno anuncie algo esta semana.', 'Es probable que el gobierno anunciará algo esta semana.', 'Es probable que el gobierno anunciara algo esta semana.'], answer: 0, why: '«Es probable que» + presente de subjuntivo para algo futuro.' },
            { sentence: 'No sabía que Alba hablaba con la concejala.', ok: true, why: 'Correcta: «saber» presupone el hecho; la negación no lo pone en duda.' },
            { sentence: 'Seguro que la concejala nos llame esta tarde.', ok: false, options: ['Es seguro que la concejala nos llame esta tarde.', 'Seguro que la concejala nos llamara esta tarde.', 'Seguro que la concejala nos llama esta tarde.'], answer: 2, why: '«Seguro que» expresa certeza: indicativo.' },
          ] },
        ] },
        { title: 'La entrevista · The interview', blocks: [
          { kind: 'chat-fill', title: 'Gonzalo entrevista a Rosario Gil, frutera del mercado · Gonzalo interviews a fruit seller', lines: [
            { who: 'Gonzalo', text: 'Señora Gil, gracias por atenderme. ¿Qué comentan los vendedores?' },
            { who: 'Rosario', text: 'Dicen que el techo ___ goteras desde hace años.', options: ['tiene', 'tuviera', 'tenga'], answer: 0, why: 'Rosario transmite lo que afirman otros: indicativo.' },
            { who: 'Gonzalo', text: '¿Y usted teme que el mercado cierre?' },
            { who: 'Rosario', text: 'Mire, ___ cierren unos meses, pero que nos dejen sin puesto, eso no lo acepto.', options: ['puede que', 'a lo mejor', 'seguramente'], answer: 0, why: '«Cierren» está en subjuntivo: solo «puede que» lo pide. Con «a lo mejor» o «seguramente» diríamos «cierran».' },
            { who: 'Gonzalo', text: 'El gobierno dice que busca un local provisional.' },
            { who: 'Rosario', text: 'Sí, ya lo sé. Pero me indigna que nadie nos ___ preguntado nada.', options: ['ha', 'haya', 'había'], answer: 1, why: 'Verbo de emoción: el hecho se valora, subjuntivo «haya preguntado».' },
            { who: 'Rosario', text: 'A lo mejor con su artículo nos ___ esta vez.', options: ['escuchen', 'escucharan', 'escuchan'], answer: 2, why: '«A lo mejor» + indicativo.' },
            { who: 'Gonzalo', text: 'Le prometo que en el artículo ___ claro qué es rumor y qué es dato.', options: ['quedara', 'quede', 'quedará'], answer: 2, why: '«Prometer que» asevera un compromiso: indicativo (futuro).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'sabía', 'que', 'el', 'informe', 'era', 'público'], accept: ['No sabía que el informe era público'], en: 'I didn’t know the report was public. (It is.)' },
            { tiles: ['Comprendo', 'que', 'los', 'vendedores', 'estén', 'preocupados'], accept: ['Comprendo que los vendedores estén preocupados', 'Comprendo que estén preocupados los vendedores'], en: 'I understand why the stallholders are worried.' },
            { tiles: ['Puede', 'que', 'el', 'mercado', 'cierre', 'en', 'primavera'], accept: ['Puede que el mercado cierre en primavera', 'Puede que cierre el mercado en primavera', 'Puede que en primavera cierre el mercado', 'Puede que en primavera el mercado cierre', 'En primavera puede que cierre el mercado', 'En primavera puede que el mercado cierre'], en: 'The market may close in spring.' },
            { tiles: ['A', 'lo', 'mejor', 'la', 'concejala', 'nos', 'llama', 'hoy'], accept: ['A lo mejor la concejala nos llama hoy', 'A lo mejor hoy nos llama la concejala', 'A lo mejor nos llama hoy la concejala', 'A lo mejor nos llama la concejala hoy', 'Hoy a lo mejor nos llama la concejala', 'Hoy a lo mejor la concejala nos llama'], en: 'Maybe the councillor will call us today.' },
          ] },
        ] },
        { title: 'Cambia la postura · Change the stance', blocks: [
          { kind: 'rewrite', title: 'Mismo contenido, otra postura · Same content, another stance', items: [
            { prompt: 'El mercado cierra en primavera.', instruction: 'Preséntalo solo como una posibilidad con «puede que».', accept: ['Puede que el mercado cierre en primavera', 'Puede que cierre el mercado en primavera', 'Puede que en primavera cierre el mercado', 'Puede que en primavera el mercado cierre'] },
            { prompt: 'Los vendedores protestan. Eso no significa que tienen razón.', instruction: 'Une las ideas en una frase que empiece por «Que los vendedores…».', accept: ['Que los vendedores protesten no significa que tengan razón'] },
            { prompt: 'Creo que el informe exagera.', instruction: 'Conviértelo en una pregunta para que te den la razón: «¿No crees que…?».', accept: ['¿No crees que el informe exagera?'] },
            { prompt: 'Los vendedores están nerviosos. (Te parece normal.)', instruction: 'Empieza con «Entiendo que…».', accept: ['Entiendo que los vendedores estén nerviosos', 'Entiendo que estén nerviosos los vendedores'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige un rumor real o inventado de su barrio y lo dice de cuatro maneras: lo transmite («Dicen que…»), lo pone en duda («No creo que…»), lo ve posible («Puede que…») y lo valora («Me preocupa que…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El pódcast de la redacción', coach: 'Escucha la postura, no solo el dato. Listen for the stance, not just the facts.',
      steps: [
        { title: '«La letra pequeña» · “The small print”', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota qué presenta Mercedes como dato, qué como posibilidad y qué como valoración. Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, separa lo que Mercedes presenta como dato, como posibilidad y como valoración. (Facts, possibilities, evaluations.)' } },
          { kind: 'listen', title: 'La letra pequeña', channel: 'PÓDCAST · LA PLAZA · LA LETRA PEQUEÑA', src: '/audio/grammar-free/468.mp3',
            before: 'Mercedes graba el pódcast semanal del periódico y habla del Mercado Central. ¿Qué crees que va a presentar como seguro y qué como posible? (Mercedes records the paper’s weekly podcast about the market. What will she present as certain and what as possible?)',
            gist: { prompt: '¿Cuál es la idea principal? · What is the main idea?', options: ['Anunciar que el mercado cierra en enero.', 'Separar lo que se sabe de lo que solo es posible, y pedir prudencia.', 'Criticar a los vendedores por difundir rumores.'], answer: 1, why: 'Mercedes ordena «lo que sabemos», «lo que no sabemos» y su opinión, y advierte contra los rumores.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué presenta Mercedes como un dato seguro?', options: ['Que el cierre es cuestión de semanas.', 'Que el informe es público y habla de una reparación importante.', 'Que las obras empiezan en primavera.'], answer: 1, why: '«El informe técnico es público desde el lunes y dice que el techo necesita una reparación importante».', en: 'What does Mercedes present as a solid fact?' },
              { prompt: '¿Qué piensa la concejala?', options: ['Que el mercado no tiene problemas.', 'Que se decide todo esta semana.', 'Que no se decidirá nada antes de la primavera.'], answer: 2, why: '«La concejala no cree que se decida nada antes de la primavera».', en: 'What does the councillor think?' },
              { prompt: '¿Qué lamenta Mercedes?', options: ['Que los vendedores estén preocupados.', 'Que algunos medios hayan publicado un rumor como un hecho.', 'Que el gobierno no responda.'], answer: 1, why: '«Siento que algunos medios hayan publicado como un hecho lo que era un rumor». Los nervios de los vendedores, en cambio, los comprende.', en: 'What does Mercedes regret?' },
              { prompt: '¿Qué promete a los oyentes?', options: ['Publicar el informe completo.', 'Contar la decisión en cuanto la haya.', 'Entrevistar a la concejala.'], answer: 1, why: '«Cuando haya una decisión, la tendrán aquí».', en: 'What does she promise the listeners?' },
            ],
            transcript: 'Buenas tardes y bienvenidos a La letra pequeña, el pódcast de la redacción. Soy Mercedes Arias. Esta semana todo el mundo nos pregunta lo mismo: ¿cierra o no cierra el Mercado Central? Vamos por partes. Lo que sabemos: el informe técnico es público desde el lunes y dice que el techo necesita una reparación importante. Lo que no sabemos: cuándo empezarán las obras. Hay vendedores que [[dicen que|teal]] el cierre [[es|blue]] cuestión de semanas; la concejala de Comercio, en cambio, [[no cree que|teal]] se [[decida|orange]] nada antes de la primavera. ¿Mi opinión? [[Puede que|teal]] el mercado [[cierre|orange]] unos meses, y [[seguramente|teal]] lo [[hará|blue]] por fases, pero hoy por hoy es una hipótesis. Y aquí va la letra pequeña. [[Comprendo que|violet]] los vendedores [[estén|orange]] preocupados, y [[siento que|violet]] algunos medios [[hayan|orange]] publicado como un hecho lo que era un rumor. [[El hecho de que|teal]] un rumor se [[repita|orange]] mucho no significa que [[sea|orange]] verdad. Así que [[no piensen que|teal]] les [[ocultamos|blue]] nada: cuando haya una decisión, la tendrán aquí, contada con calma. Nos escuchamos la semana que viene.',
            reply: { teacher: 'Tú eres una oyente que escribe al pódcast convencida de que el mercado cierra en enero. Tu alumno responde como Mercedes con tres frases: un dato, una posibilidad y una valoración.', self: 'Responde en voz alta a un oyente que asegura que el mercado cierra en enero: da un dato, una posibilidad y una valoración. (Reply with a fact, a possibility and an evaluation.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu postura, con matices', coach: 'Afirma, duda o valora. Assert, doubt or react.',
      steps: [
        { title: 'Rumores, noticias y opiniones · Rumours, news and opinions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y reaccionas como un colega de redacción algo escéptico. Tu alumno responde con matices. Cuando el modo no encaja con lo que quiere decir, tú repites la frase con el otro modo y entre los dos comentan qué ha cambiado.', self: 'Lee la pregunta, responde en voz alta y graba tu respuesta si quieres. Después escúchala: ¿el modo dice lo que querías decir? (Does the mood say what you meant?)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué rumor has oído últimamente en tu ciudad, tu trabajo o tu edificio? · What rumour have you heard lately?', followUps: ['¿Quién lo dice? (Who says so?)', '¿Tú te lo crees? (Do you believe it?)', '¿Qué pruebas hay? (What evidence is there?)'], phrases: ['[[Dicen que|teal]]… / Se comenta que… (+ indicativo)', 'Yo [[no creo que|teal]]… (+ subjuntivo)', '[[Puede que|teal]]…, pero…'], hint: 'Primero transmite el rumor (indicativo); después da tu postura (subjuntivo si no lo afirmas).', example: 'En mi oficina dicen que la empresa se muda a las afueras. Yo no creo que pase este año: el contrato del local dura hasta diciembre. Puede que lo estén pensando, pero de momento nadie ha dicho nada oficial.', next: 'Ahora, pregunta tú.', teacher: 'Reacciona con «¿Y tú crees que…?» y deja que tu alumno elija el modo según su postura.' },
            { q: 'Pregúntale a tu compañero qué piensa de un cambio que se discute en tu entorno. Haz una pregunta neutra y otra que busque su acuerdo. · Ask a neutral question and one that looks for agreement.', followUps: ['¿Y si te dice que no? (What if they say no?)', '¿Cómo insistirías con cortesía? (How would you insist politely?)'], phrases: ['¿Crees que… [[funciona|blue]]? (neutra)', '[[¿No crees que|teal]]… [[es|blue]] mejor…? (buscas acuerdo)', '[[No pienses que|teal]]…'], hint: '«¿No crees que…?» va con indicativo: es tu opinión en forma de pregunta.', example: '¿Crees que la semana de cuatro días funciona en una empresa pequeña? ¿No crees que es más fácil probarla primero en verano? Y no pienses que lo digo por trabajar menos.', next: 'Ahora, empatía.' },
            { q: 'Un compañero está molesto porque publicaron su artículo con un titular que él no eligió. Responde mostrando comprensión y, después, informa de un dato. · Show understanding, then pass on a fact.', followUps: ['¿Qué le recomiendas? (What do you advise?)', '¿Te ha pasado algo parecido? (Has something similar happened to you?)'], phrases: ['[[Entiendo que|violet]]… [[estés|orange]]…', 'Por lo que me han dicho, [[entiendo que|violet]]… [[es|blue]]…', '[[Me temo que|violet]]…'], hint: 'Mismo verbo, dos sentidos: subjuntivo para la empatía, indicativo para el dato.', example: 'Entiendo que estés enfadado: es tu artículo. Por lo que me han dicho, entiendo que el titular lo cambiaron a última hora. Me temo que ya no se puede corregir en papel, pero sí en la web.', next: 'Ahora, un debate.' },
            { q: 'Debate: «Si mucha gente repite algo, probablemente es verdad». ¿Estás de acuerdo? · Agree or disagree?', followUps: ['¿Tienes un ejemplo? (An example?)', '¿Y en las redes sociales? (And on social media?)'], phrases: ['[[El hecho de que|teal]]… no significa que…', '[[Que|teal]] lo [[digan|orange]] muchos no quiere decir que…', 'Es verdad que… [[es|blue]]…, pero…'], hint: 'Valora el hecho y niega la conclusión: los dos verbos en subjuntivo.', example: 'No estoy de acuerdo. El hecho de que mucha gente repita un dato no significa que sea cierto. Es verdad que a veces los rumores aciertan, pero que lo digan muchos no quiere decir que alguien lo haya comprobado.', teacher: 'Defiende tú la postura contraria con ejemplos concretos para que tu alumno tenga que matizar.' },
            { q: '¿Cómo crees que será tu barrio o tu ciudad dentro de diez años? Gradúa tu seguridad. · Grade how sure you are.', followUps: ['¿Qué es lo más seguro? (What is the safest bet?)', '¿Qué te parece improbable? (What seems unlikely to you?)'], phrases: ['[[Seguramente|teal]]… / [[A lo mejor|teal]]… (+ indicativo)', '[[Quizás|teal]]… [[haya|orange]] / [[hay|blue]]…', '[[Es posible que|teal]]… / Dudo que…'], hint: 'Ordena tus ideas de más seguro a menos seguro y cambia el modo cuando cambie tu compromiso.', example: 'Seguramente habrá menos coches en el centro. A lo mejor abren más carriles bici. Quizás haya también más gente mayor viviendo sola, y es posible que eso cambie los comercios. Dudo que el alquiler baje, la verdad.', next: 'Ahora, el titular.' },
            { q: 'Ahora tú eres Mercedes. Gonzalo insiste en su titular. Explícale qué se sabe, qué se dice y qué es solo posible. · Explain what is known, what is said and what is only possible.', followUps: ['¿Qué titular propones? (What headline do you suggest?)', '¿Qué harías si mañana se confirma? (What if it is confirmed tomorrow?)'], phrases: ['Sabemos que… / [[No sabía que|teal]]…', 'Los vendedores [[dicen que|teal]]…, pero el informe no dice que…', '[[Es posible que|teal]]…, así que…'], hint: 'Indicativo para lo que sabes y para lo que otros afirman; subjuntivo para lo que no se afirma.', example: 'Gonzalo, sabemos que el informe pide reparar el techo. Los vendedores dicen que el mercado cierra en enero, pero el informe no dice que haya que cerrarlo. Es posible que lo cierren por fases, así que titulamos «El gobierno estudia cerrar el mercado».', teacher: 'Tú eres Gonzalo y te resistes: «¡Pero todo el mundo lo dice!». Tu alumno responde con «que lo diga todo el mundo no significa que…».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y reacciona con escepticismo; tú respondes y eliges el modo según tu postura.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas desde la postura contraria a la tuya. (Ask the questions and answer from the opposite stance.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Nota de la redacción', coach: 'Dato, rumor, posibilidad, valoración. Fact, rumour, possibility, evaluation.',
      steps: [
        { title: 'Una nota para los lectores · A note to readers', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada verbo subordinado: ¿qué postura muestra? ¿Afirma, transmite, duda o valora?', self: 'Escribe tu nota y toca «Revisar mi texto». Después mira cada verbo después de «que»: ¿muestra la postura que querías? (Does each verb show the stance you meant?)' } },
          { kind: 'write', title: 'Nota de la redacción · Editor’s note', situation: 'Eres Mercedes Arias (o el responsable de un medio, una asociación o un centro educativo). Muchos lectores preguntan por un rumor (el cierre del mercado u otro de tu elección). Escribe una nota pública para tus lectores que separe con claridad lo que se sabe, lo que se dice y lo que es posible, y que muestre tu valoración. (Write a public note to your readers separating what is known, what is being said and what is possible, with your own evaluation.)', task: [
            'Presenta el tema y al menos un dato comprobado (indicativo). (State the topic and at least one verified fact.)',
            'Transmite lo que dicen otros con «dicen que» o «según…». (Report what others say.)',
            'Expresa dos grados de posibilidad, uno con indicativo y otro con subjuntivo. (Two degrees of possibility, one in each mood.)',
            'Valora la situación con «comprendo que», «el hecho de que» o un verbo de emoción. (Give your own assessment.)',
            'Cierra con un compromiso hacia los lectores. (Close with a commitment to your readers.)',
          ], starters: ['Estos días muchos lectores nos preguntan si…', 'Esto es lo que sabemos:…', 'Algunos vecinos dicen que…, pero…', 'Es posible que… / Seguramente…', 'Comprendo que…', 'El hecho de que… no significa que…', 'No piensen que…'],
            words: ['dicen que', 'según', 'seguramente', 'a lo mejor', 'puede que', 'es posible que', 'quizás', 'comprendo que', 'el hecho de que', 'no significa que', 'me temo que', 'no sabíamos que'],
            model: 'Estos días muchos lectores nos preguntan si el Mercado Central va a cerrar. Esto es lo que sabemos: el informe técnico, público desde el lunes, dice que el techo [[necesita|blue]] una reparación importante. Algunos vendedores [[dicen que|teal]] el cierre [[es|blue]] inminente, pero el gobierno municipal no ha confirmado ninguna fecha. [[Es posible que|teal]] las obras [[empiecen|orange]] en primavera y [[seguramente|teal]] se [[harán|blue]] por fases; [[a lo mejor|teal]] el gobierno [[da|blue]] más detalles esta semana. [[Comprendo que|violet]] muchos vecinos [[estén|orange]] preocupados: el mercado es parte de la vida del barrio. Sin embargo, [[el hecho de que|teal]] un rumor [[circule|orange]] mucho no significa que [[sea|orange]] cierto. [[No piensen que|teal]] les [[ocultamos|blue]] información: en cuanto haya una decisión oficial, la publicaremos aquí. Mercedes Arias, jefa de redacción.',
            minWords: 110,
            checks: [
              { label: 'Transmites lo que dicen otros (reported claim)', pattern: '(?<!\\p{L})(?:dicen\\s+que|se\\s+dice\\s+que|se\\s+comenta\\s+que|según)(?!\\p{L})', tip: 'Transmite el rumor: «Algunos vecinos dicen que el cierre es inminente».' },
              { label: 'Una posibilidad que pide subjuntivo (puede que, es posible que…)', pattern: '(?<!\\p{L})(?:puede\\s+(?:ser\\s+)?que|es\\s+posible\\s+que|es\\s+probable\\s+que|no\\s+creo\\s+que|dudo\\s+que)(?!\\p{L})', tip: 'Añade una posibilidad sin comprometerte: «Es posible que las obras empiecen en primavera».' },
              { label: 'Una posibilidad con indicativo (seguramente, a lo mejor, igual)', pattern: '(?<!\\p{L})(?:seguramente|a\\s+lo\\s+mejor|igual|seguro\\s+que)(?!\\p{L})', tip: 'Añade un grado más alto de compromiso: «Seguramente se harán por fases».' },
              { label: 'Una valoración (comprendo que, el hecho de que, me preocupa que…)', pattern: '(?<!\\p{L})(?:comprendo\\s+que|entiendo\\s+que|el\\s+hecho\\s+de\\s+que|me\\s+(?:preocupa|sorprende|molesta|parece\\s+\\p{L}+)\\s+que|siento\\s+que|lamento\\s+que)(?!\\p{L})', tip: 'Valora la situación: «Comprendo que muchos vecinos estén preocupados».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})a\\s+lo\\s+mejor\\s+(?:\\p{L}+\\s+){0,2}(?:sea|sean|esté|estén|haya|hayan|tenga|tengan|pueda|puedan|vaya|vayan|cierre|cierren|dé|den)(?!\\p{L})', why: '«A lo mejor» va siempre con **indicativo**: «a lo mejor cierra», no «a lo mejor cierre».' },
              { pattern: '(?<!\\p{L})(?:puede\\s+que|es\\s+posible\\s+que|es\\s+probable\\s+que)\\s+(?:\\p{L}+\\s+){0,2}(?:es|son|está|están|hay|tiene|tienen|cierra|cierran)(?!\\p{L})', why: '«Puede que», «es posible que» y «es probable que» piden **subjuntivo**: «puede que cierre», «es posible que haya».' },
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
            { tone: 'blue', label: 'AFIRMO O INFORMO', formula: 'creo que · sé que · dicen que · seguramente · a lo mejor + indicativo', example: 'Dicen que el mercado cierra. A lo mejor cierra en primavera.', caption: 'el hablante asevera o transmite una afirmación', en: 'the speaker asserts something or passes on someone else’s claim' },
            { tone: 'blue', label: 'HECHO PRESUPUESTO', formula: 'no sabía que · no me di cuenta de que + indicativo', example: 'No sabía que el informe era público.', caption: 'la negación no toca el hecho', en: 'negating saber or darse cuenta does not deny the fact' },
            { tone: 'orange', label: 'NO AFIRMO O VALORO', formula: 'no creo que · puede que · me sorprende que · el hecho de que + subjuntivo', example: 'Puede que cierre. Me sorprende que nadie lo haya leído.', caption: 'duda, posibilidad o hecho valorado', en: 'doubt, possibility, or a fact you react to rather than report' },
            { tone: 'violet', label: 'DOBLE SENTIDO', formula: 'entiendo que es / esté · siento que está / esté · me temo que · temo que', example: 'Entiendo que estés nervioso. / Entiendo que la reunión es a las diez.', caption: 'el modo elige el significado del verbo', en: 'the mood selects the meaning of the verb: noting vs sympathising or regretting' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de elegir el modo, pregúntate: **¿qué hago con este contenido?** Si lo afirmo, lo transmito o lo doy por sabido, **indicativo**. Si lo dudo, lo niego, lo veo solo posible o reacciono ante él, **subjuntivo**. Y donde los dos modos son posibles (¿crees que…?, quizás, no pienses que…), el modo no corrige: **matiza tu postura**.', en: 'Before choosing the mood, ask yourself what you are doing with the content. Asserting it, passing it on or taking it as given: indicative. Doubting it, denying it, seeing it as merely possible or reacting to it: subjunctive. Where both moods are possible, the choice is not right or wrong: it fine-tunes your stance.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ el autobús llega tarde otra vez; ya son las nueve y cuarto.', options: ['Puede que', 'Seguro que', 'Es posible que'], answer: 1, why: '«Llega» está en indicativo y el contexto da certeza: «seguro que».', en: 'I bet the bus is late again; it’s already quarter past nine.' },
            { prompt: 'Me acabo de enterar de que tu hermano ___ en la ciudad.', options: ['está', 'esté', 'estar'], answer: 0, why: '«Enterarse de» presenta un hecho cierto: indicativo.', en: 'I’ve just found out your brother is in town.' },
            { prompt: 'Lamento que ___ que esperar tanto en la consulta.', options: ['hayas tenido', 'tienes', 'has tenido'], answer: 0, why: '«Lamentar» valora un hecho: subjuntivo, «hayas tenido».', en: 'I’m sorry you had to wait so long at the doctor’s.' },
            { prompt: 'Mi hermana me ha dicho que ___ un paraguas, que va a llover.', options: ['llevo', 'llevar', 'lleve'], answer: 2, why: '«Decir que» + subjuntivo transmite un consejo o una petición: «que lleve un paraguas».', en: 'My sister told me to take an umbrella because it’s going to rain.' },
            { prompt: 'Que un vídeo tenga un millón de visitas no significa que ___ verdad.', options: ['será', 'es', 'sea'], answer: 2, why: '«No significa que» niega la conclusión: subjuntivo.', en: 'A video having a million views doesn’t mean it’s true.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Otro rumor, otra postura.', blocks: [
          { kind: 'lead', text: 'En la academia de idiomas de tu barrio corre otro rumor: la academia se muda a otro edificio. Escribe cada frase con la postura que se indica.', en: 'Another rumour is going round the language school in your neighbourhood: it is moving to another building. Rewrite each sentence with the stance given.' },
          { kind: 'rewrite', title: 'La academia · The language school', items: [
            { prompt: 'La academia se muda. (Tú no lo crees.)', instruction: 'Empieza con «No creo que…».', accept: ['No creo que la academia se mude'] },
            { prompt: 'Los profesores están cansados. (Te parece comprensible.)', instruction: 'Empieza con «Comprendo que…».', accept: ['Comprendo que los profesores estén cansados', 'Comprendo que estén cansados los profesores'] },
            { prompt: 'Quizás cambian el horario.', instruction: 'Cambia «quizás» por «a lo mejor».', accept: ['A lo mejor cambian el horario'] },
          ] },
        ] },
        { title: 'Ampliación · Negar, matizar, desmentir · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Tres usos de registro más cuidado: **no niego que** admite los dos modos (con indicativo, reconoces el contenido con más claridad); **yo nunca dije que + subjuntivo** desmiente que afirmaras algo; y la fórmula fija **que yo sepa** (as far as I know), siempre en subjuntivo.', en: 'For strong students or spare time. Three uses typical of more careful speech: “no niego que” takes either mood (the indicative concedes the point more openly); “yo nunca dije que + subjunctive” denies that you ever claimed something; and the fixed phrase “que yo sepa” (as far as I know) is always in the subjunctive.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«No niego que tiene razón» frente a «No niego que tenga razón». ¿Cuál reconoce con más claridad que el otro tiene razón?', options: ['La primera.', 'La segunda.', 'Ninguna: las dos niegan que tenga razón.'], answer: 0, why: 'Con indicativo, el hablante asume el contenido; con subjuntivo lo admite como posible sin comprometerse tanto.', en: 'Which one more clearly admits the other person is right?' },
            { prompt: 'Gonzalo se defiende: «Yo nunca dije que el cierre fuera seguro». ¿Qué hace?', options: ['Desmiente haber presentado el cierre como seguro.', 'Afirma que el cierre es seguro.', 'Pide que el cierre sea seguro.'], answer: 0, why: '«Nunca dije que» + subjuntivo: el contenido no se asevera; Gonzalo rechaza que se le atribuya esa afirmación.', en: 'Gonzalo defends himself: “I never said the closure was certain.” What is he doing?' },
            { prompt: '«___, nadie ha confirmado la fecha». (As far as I know)', options: ['Que yo sepa', 'Lo que sepa', 'Que yo sé'], answer: 0, why: '«Que yo sepa» es una fórmula fija con subjuntivo que limita tu compromiso a lo que conoces.', en: 'As far as I know, nobody has confirmed the date.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno desmiente algo que le atribuyen («Yo nunca dije que…») y reconoce un argumento del otro con «no niego que…», eligiendo el modo según cuánto concede.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 169 · Subjuntivo en relativas no específicas y genéricas', text: 'Ya usas el modo para mostrar tu postura ante un contenido: lo afirmas, lo transmites, lo dudas o lo valoras. En la clase 169 aplicas la misma lógica a las oraciones de relativo: «Buscamos un local que **tiene** patio» (ese local existe y lo conoces) frente a «Buscamos un local que **tenga** patio» (cualquiera que cumpla la condición). Es el paso natural: el modo sigue diciendo qué das por real y qué no.', en: 'You now use mood to show your stance towards what you say: asserting it, passing it on, doubting it or evaluating it. In class 169 you apply the same logic to relative clauses: “Buscamos un local que tiene patio” (a specific place you know exists) versus “Buscamos un local que tenga patio” (any place that meets the condition). It is the natural next step: mood keeps showing what you take as real and what you do not.', href: '/gramatica/subjuntivo-en-relativas-no-especificas-y', label: 'Ir a la clase 169' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué noticia has leído esta semana que te pareció más rumor que dato?». Respuesta esperada: transmitir la noticia con indicativo y dar la postura propia con subjuntivo. Tarea: la nota de Escribir sobre un rumor real.' },
        ] },
      ],
    },
  ],
};
