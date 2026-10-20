import type { LiveLesson } from '../types';

/**
 * Lesson 507 · C2 · Selección fina de indicativo y subjuntivo según perspectiva (course unit G207).
 * Builds on C1 lessons 468 (mood as stance: questions, factives, entender / sentir / decir,
 * the doubt scale), 469 (non-specific relatives, lo que + mood) and 470 (concessive
 * alternations). It does not reteach them: «aunque tiene / tenga razón» is only recalled.
 * C2 step (NGLE §25): pairs where both moods are grammatical and the choice shows the
 * speaker's perspective: asserted, new information (indicative) vs background, evaluated,
 * hypothetical or requested content (subjunctive). Content: «el hecho de que» (subjunctive
 * frequent even with known facts, above all as an initial theme; indicative possible when
 * the clause is informative, e.g. «se debe al hecho de que»); preverbal «que + subjuntivo»
 * as subject (Que haya llegado tarde no significa nada); speaker commitment under negation
 * (no digo que sea / es; no es que + subj.; «no creo que + indicativo» only as a rare,
 * marked use, never asked productively); two-reading verbs taken further (comprender /
 * entender que: realise / find understandable; insistir en, avisar de, escribir que:
 * report / demand; sentir, presentir; parece que / no parece que / parece lógico que);
 * lo que + ind. / subj. (brief); como + ind. (manner known, cause) / + subj. (any manner,
 * condition: Como no entreguemos el viernes…); quizá(s), tal vez, probablemente,
 * seguramente + both moods, a lo mejor + indicative only, and adverb position.
 * Ampliación: dislocated «Que…, lo sabe todo el mundo» (indicative with a resumptive
 * pronoun), legal «se entiende que» + indicative.
 * Scene: Estudio Contraluz, a subtitling studio in Bogotá, subtitles «Marea baja», a British
 * documentary series about Margaret, who runs a fish restaurant in Cornwall, and her son
 * Owen, who wants to sell it. English does not mark mood, so every subtitle forces a
 * choice. Irene Cárdenas (project director), Darío Fuentes (translator), Valentina Ríos
 * (reviewer), Ruth Hale (the series director, writes and speaks Spanish). Escuchar: Irene's
 * talk at a subtitling workshop (es-CO-SalomeNeural, ustedes). Escribir: an email to Ruth
 * justifying three subtitles. Instructions use tú; both-mood cases are taught as meaning
 * contrasts, never as errors.
 */
export const lesson: LiveLesson = {
  id: 507,
  level: 'C2',
  title: 'Selección fina de indicativo y subjuntivo según perspectiva',
  subtitle: 'Elegir el modo cuando los dos son posibles para decidir qué afirmas, qué das por sabido, qué valoras y qué solo imaginas.',
  legend: [
    { tone: 'blue', label: 'INDICATIVO · lo afirmas, lo informas como nuevo o lo constatas' },
    { tone: 'orange', label: 'SUBJUNTIVO · no lo afirmas: fondo conocido, valoración, hipótesis o petición' },
    { tone: 'teal', label: 'PUNTO DE ELECCIÓN · el hecho de que, que inicial, quizá, como, lo que…' },
    { tone: 'violet', label: 'VERBO DE DOBLE LECTURA · entender, sentir, decir, insistir, parecer' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuando el inglés no elige', coach: 'El modo es tu punto de vista. Mood is your point of view.',
      steps: [
        { title: 'Una frase, dos subtítulos · One line, two subtitles', blocks: [
          { kind: 'lead', text: 'En el Estudio Contraluz, en Bogotá, subtitulan al español «Marea baja», una serie documental británica: Margaret lleva un restaurante de pescado en un pueblo de Cornualles y su hijo Owen quiere venderlo. En el minuto 12, Margaret le dice a Owen: «I understand you’re tired». El inglés no elige; el subtítulo, sí. Ya sabes que «aunque **tiene** razón» informa y «aunque **tenga** razón» concede sin discutir. En C2 trabajas los casos en que **los dos modos son gramaticales** y el modo revela la **perspectiva**: qué presentas como información nueva y afirmada, y qué dejas como fondo, valoración, hipótesis o petición.', en: 'At Estudio Contraluz in Bogotá, the team subtitles a British documentary series into Spanish. Margaret runs a fish restaurant in Cornwall and her son Owen wants to sell it. English does not mark mood, but Spanish has to choose. You already know the aunque contrast. At C2 you work on cases where both moods are grammatical and the mood reveals perspective: what you assert as new information, and what you leave as background, evaluation, hypothesis or request.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos versiones del subtítulo y tu alumno explica qué hace Margaret en cada una: ¿informa de algo o muestra comprensión?', self: 'Lee las dos versiones en voz alta. ¿Qué hace Margaret en cada una? (What is Margaret doing in each version?)' } },
          { kind: 'compare', title: '«I understand you’re tired» · Two Spanish readings', columns: [
            { tone: 'blue', label: 'CONSTATO UN DATO', sentence: 'Entiendo que [[estás|blue]] cansado, así que mañana abro yo.', idea: 'Margaret registra la información («me consta, me he dado cuenta») y actúa en consecuencia.', en: 'Indicative: Margaret takes note of a fact (“I gather you’re tired”) and acts on it.' },
            { tone: 'orange', label: 'LO ENCUENTRO LÓGICO', sentence: 'Entiendo que [[estés|orange]] cansado: llevas meses sin un día libre.', idea: 'El cansancio ya se sabe; Margaret no lo informa, lo justifica.', en: 'Subjunctive: the tiredness is already known; she is not reporting it but saying it is understandable.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta de C2 · The C2 question', text: 'Cuando los dos modos son posibles, no preguntes «¿qué palabra va delante?», sino **«¿estoy afirmando esto como información nueva?»**. Si sí, indicativo. Si lo doy por sabido, lo valoro, lo imagino o lo pido, subjuntivo.', en: 'When both moods are possible, don’t ask which word comes before. Ask whether you are asserting the content as new information. If so, indicative; if you take it for granted, evaluate it, imagine it or request it, subjunctive.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Owen acaba de decir que no duerme. Margaret responde, con la mano en su hombro: «Entiendo que estés cansado». ¿Qué expresa?', options: ['Comprensión: le parece lógico.', 'Que se acaba de enterar del cansancio.', 'Una duda sobre si Owen está cansado.'], answer: 0, why: 'El cansancio ya es conocido: con subjuntivo, Margaret no lo informa, lo justifica.', en: 'What does Margaret express?' },
            { prompt: '«Aunque tiene razón, no le voy a dar el gusto». ¿Qué hace el hablante con «tiene razón»?', options: ['Lo afirma como información.', 'Lo presenta como hipótesis improbable.', 'Lo deja en duda.'], answer: 0, why: '«Aunque» + indicativo afirma el contenido; con subjuntivo lo concedería sin discutirlo.', en: 'What does the speaker do with “tiene razón”?' },
          ] },
        ] },
        { title: 'Información de fondo · Background information', mascot: '/brand/mascot/studying.webp', coach: 'Lo sabido se subordina. Known facts step back.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'EL HECHO DE QUE · QUE INICIAL', question: '¿El contenido es el tema del que hablas o la información que aportas?', en: 'A “que” clause placed first as the subject, or introduced by “el hecho de que”, usually presents its content as the topic, something already on the table that you now comment on. That is why the subjunctive is normal here even with facts everyone knows. With “el hecho de que” the indicative is also possible, above all when the clause comes after the verb and adds new information (“se debe al hecho de que…”).', formula: ['Que + subjuntivo + predicado → el hecho ya se conoce y se comenta', 'El hecho de que + subjuntivo → lo más frecuente, sobre todo al principio', '… se debe al hecho de que + indicativo → información nueva, explicativa'],
            meaning: 'Una oración con **que** en posición de sujeto, al principio, presenta su contenido como **tema**: algo conocido de lo que vas a decir algo. Por eso va en **subjuntivo** aunque sea un hecho indiscutible. Con **el hecho de que** el subjuntivo también es lo más frecuente, pero el indicativo es posible, sobre todo cuando la oración va detrás y aporta la información nueva. Compara: «**Es verdad que** Owen ha vuelto» (afirmas: indicativo) / «**Que** Owen **haya vuelto** no significa nada» (lo das por sabido y lo comentas).',
            examples: [
              { es: '[[Que|teal]] Owen [[haya|orange]] vuelto al pueblo no significa que quiera quedarse.', en: 'Owen coming back to the village doesn’t mean he wants to stay. (His return is a fact, but it is the topic, not the news.)' },
              { es: '[[El hecho de que|teal]] el local [[tenga|orange]] deudas no lo hace invendible.', en: 'The fact that the restaurant has debts doesn’t make it unsellable.' },
              { es: 'El cierre se debe [[al hecho de que|teal]] los turistas ya no [[vienen|blue]] en invierno.', en: 'The closure is due to the fact that tourists no longer come in winter. (New, explanatory information: indicative is natural.)' },
            ],
            note: 'Delante del verbo principal, el subjuntivo es la opción general con «que». Con «el hecho de que», el indicativo no es un error: subraya que el hablante sostiene ese dato.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ Margaret no conteste las llamadas del banco preocupa a toda la familia.', options: ['Porque', 'Que', 'Lo que'], answer: 1, why: 'Una oración con «que» funciona como sujeto de «preocupa». Va en subjuntivo porque el hecho es el tema del que se habla.', en: 'Margaret not answering the bank’s calls worries the whole family.' },
            { prompt: '¿En qué frase es más natural el INDICATIVO?', options: ['Que la cocina ___ vieja no asusta a nadie.', 'Las pérdidas se deben al hecho de que la cocina ___ vieja y gasta mucho.', 'El hecho de que la cocina ___ vieja no asusta a los compradores.'], answer: 1, why: 'Detrás del verbo y como explicación nueva, «el hecho de que» admite con naturalidad el indicativo («es vieja»). Al principio, como tema, lo normal es el subjuntivo.', en: 'Where is the indicative most natural?' },
          ] },
        ] },
        { title: 'Verbos de doble lectura · Two-reading verbs', mascot: '/autoestudio/mascot/noting.webp', coach: 'El modo elige el verbo. Mood picks the verb’s meaning.', blocks: [
          { kind: 'table', title: 'Constatar o valorar, informar o pedir · Note or assess, report or request', head: ['Verbo', '+ INDICATIVO', '+ SUBJUNTIVO'], rows: [
            ['[[comprender / entender que|violet]]', 'Por fin comprendió que su madre no [[iba|blue]] a vender. (se dio cuenta)', 'Comprendo que no [[quiera|orange]] vender: es la casa de su vida. (me parece lógico)'],
            ['[[sentir / presentir que|violet]]', 'Owen sentía que el pueblo lo [[miraba|blue]] de otra manera. (lo percibía)', 'Siento que no [[hayas|orange]] podido venir al estreno. (lo lamento)'],
            ['[[decir / escribir / avisar de que|violet]]', 'Ruth escribió que la versión final [[llegaba|blue]] el lunes. (informa)', 'Ruth escribió que [[revisáramos|orange]] el episodio tres. (pide)'],
            ['[[insistir en que|violet]]', 'Darío insiste en que la frase [[es|blue]] irónica. (sostiene)', 'Darío insiste en que la [[traduzcamos|orange]] así. (exige)'],
            ['[[parecer que|violet]]', 'Parece que Owen ya [[tiene|blue]] comprador. (hay indicios)', 'No parece que [[tenga|orange]] prisa. / Parece lógico que [[dude|orange]].'],
          ], note: 'Con «parece que», el indicativo transmite una impresión basada en indicios; negado («no parece que») o con un adjetivo valorativo («parece lógico / mentira que»), subjuntivo. Lo mismo con «me parece que» + indicativo (opinión) frente a «no me parece que» + subjuntivo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Ruth insiste en que el título se mantenga en inglés». ¿Qué hace Ruth?', options: ['Duda de que esté en inglés.', 'Afirma que el título ya está en inglés.', 'Exige que no se traduzca.'], answer: 2, why: '«Insistir en que» + subjuntivo = exigir, pedir con fuerza. Con indicativo («se mantiene») sostendría un dato.', en: 'What is Ruth doing?' },
            { prompt: '«Por fin comprendió que nadie lo iba a ayudar». ¿Qué significa «comprendió»?', options: ['Lo lamentó.', 'Se dio cuenta.', 'Le pareció lógico.'], answer: 1, why: '«Comprender que» + indicativo = darse cuenta de un hecho. Con subjuntivo sería encontrarlo lógico.', en: 'What does “comprendió” mean here?' },
          ] },
        ] },
        { title: 'Cuánto te comprometes · How much you commit', mascot: '/brand/mascot/speaking.webp', coach: 'Negar no es dudar. Denying is not doubting.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'COMPROMISO Y NEGACIÓN', question: '¿Rechazas el contenido o rechazas la forma en que alguien lo ha dicho?', en: '“No digo que sea…” means you are not asserting the content. “No digo que es…, digo que…” corrects how your words were reported: the focus is the formulation, so the indicative appears. “No es que + subjunctive” corrects an interpretation. “No creo que + indicative” does occur in speech, but it is rare and marked; in careful usage, use the subjunctive.', formula: ['No digo que + subjuntivo → no afirmo ese contenido', 'No digo que + indicativo, digo que… → corrijo cómo se citaron mis palabras', 'No es que + subjuntivo, es que + indicativo → descarto una interpretación', 'No creo que + subjuntivo → la opción general'],
            meaning: 'Con «**no digo que**», el subjuntivo deja el contenido sin afirmar: «No digo que la traducción **sea** mala». El indicativo aparece cuando corriges una formulación que te atribuyen: «No digo que **es** mala, digo que es demasiado literal». «**No es que** + subjuntivo» descarta una explicación y la sustituye por otra. Con «**no creo que**», el subjuntivo es la opción general; en la lengua oral se oye a veces el indicativo, pero es poco frecuente y marcado: reconócelo, no lo imites en un texto cuidado.',
            examples: [
              { es: '[[No digo que|teal]] el subtítulo [[sea|orange]] incorrecto; digo que pierde la ironía.', en: 'I’m not saying the subtitle is wrong; I’m saying it loses the irony.' },
              { es: '[[No es que|teal]] Owen no [[quiera|orange]] a su madre, es que no puede más.', en: 'It’s not that Owen doesn’t love his mother; he just can’t take any more.' },
              { es: '[[No creo que|teal]] Margaret [[cambie|orange]] de opinión.', en: 'I don’t think Margaret will change her mind.' },
            ] },
          { kind: 'table', title: 'Adverbios de duda: modo y posición · Doubt adverbs: mood and position', head: ['Adverbio', 'Modo', 'Ejemplo', 'Matiz'], rows: [
            ['[[quizá(s) · tal vez|teal]]', 'indicativo o subjuntivo', 'Quizá lo [[sabía|blue]]. / Quizá lo [[supiera|orange]].', 'con indicativo, sospecha firme; con subjuntivo, más distancia'],
            ['[[probablemente · seguramente|teal]]', 'indicativo o subjuntivo', 'Seguramente [[vende|blue]] en primavera. / Probablemente [[venda|orange]] en primavera.', '«seguramente» = probablemente; el subjuntivo añade cautela'],
            ['[[a lo mejor · igual|teal]]', 'solo indicativo', 'A lo mejor [[vende|blue]] en primavera.', 'posibilidad coloquial; nunca con subjuntivo'],
            ['adverbio detrás del verbo', 'solo indicativo', 'Lo [[sabía|blue]], quizá, desde el principio.', 'el adverbio ya no rige el verbo: es un comentario'],
          ], note: '«Igual» con este valor es coloquial y frecuente sobre todo en España. Con «quizá», «tal vez» o «probablemente» delante, elegir el modo no corrige: gradúa tu compromiso.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No digo que es mala, digo que es literal». ¿Qué hace la hablante?', options: ['Duda de que la traducción sea mala.', 'Corrige la forma en que alguien ha resumido su crítica.', 'Se equivoca de modo.'], answer: 1, why: 'Con indicativo, «no digo que… digo que…» corrige una formulación que le atribuyen. No es un error.', en: 'What is the speaker doing?' },
            { prompt: 'A lo mejor Margaret ___ la oferta del comprador.', options: ['acepte', 'aceptara', 'acepta'], answer: 2, why: '«A lo mejor» va siempre con indicativo, aunque exprese posibilidad.', en: 'Maybe Margaret will accept the buyer’s offer.' },
          ] },
        ] },
        { title: 'Lo que y como · Lo que and como', mascot: '/brand/mascot/standing.webp', coach: 'Lo conocido o lo que sea. Known or whatever.', blocks: [
          { kind: 'compare', title: '«Lo que» y «como»: identificado o abierto · Identified or open', columns: [
            { tone: 'blue', label: 'LO QUE / COMO + INDICATIVO', sentence: 'Haz lo que [[quieres|blue]] de verdad. · Lo traduje como me [[dijiste|blue]]. · Como no [[llegaste|blue]], empezamos sin ti.', idea: 'Lo que quieres: eso que sé que quieres. Como me dijiste: de esa manera concreta. «Como» inicial + indicativo: causa.', en: 'Indicative: a specific, known wish or manner. Clause-initial “como” with the indicative gives a cause (“since you didn’t come…”).' },
            { tone: 'orange', label: 'LO QUE / COMO + SUBJUNTIVO', sentence: 'Haz lo que [[quieras|orange]] con el local. · Tradúcelo como te [[parezca|orange]]. · Como no [[llegues|orange]] a las diez, empezamos sin ti.', idea: 'Lo que quieras: lo que sea, me da igual. Como te parezca: de cualquier manera. «Como» + subjuntivo: condición, a menudo un aviso.', en: 'Subjunctive: whatever or however, not identified. “Como” with the subjunctive is a condition, often a warning (“if you’re not here by ten…”).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Como no entreguemos el viernes, perdemos el estreno». ¿Qué expresa «como»?', options: ['Una condición con tono de aviso.', 'La causa de algo que ya pasó.', 'La manera de entregar.'], answer: 0, why: '«Como» + subjuntivo al principio = si: condición, frecuentemente amenaza o aviso.', en: 'What does “como” express?' },
            { prompt: '«Como no entregamos el viernes, perdimos el estreno». ¿Qué expresa ahora?', options: ['Una causa.', 'Un deseo.', 'Una condición.'], answer: 0, why: '«Como» inicial + indicativo = causa (puesto que).', en: 'What does it express now?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Qué afirmas? What are you asserting?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué quería decir el hablante y por qué el modo no lo dice. Después aparece la corrección.', self: 'Lee cada frase y piensa qué quería decir el hablante. Toca para ver la corrección. (What did the speaker mean?)' } },
          { kind: 'mistakes', title: '¿Dónde falla la perspectiva? · Where does the perspective fail?', items: [
            { wrong: 'Margaret nos avisó de que no la esperábamos para cenar.', right: 'Margaret nos avisó de que no la esperáramos para cenar.', why: 'Margaret daba una instrucción, no informaba de lo que hacíamos: «avisar de que» + subjuntivo = pedir. (A request needs the subjunctive.)' },
            { wrong: 'Que Owen vende el restaurante no sorprende a nadie.', right: 'Que Owen venda el restaurante no sorprende a nadie.', why: 'Una oración con «que» al principio como sujeto presenta el hecho como tema: subjuntivo, aunque sea verdad. (Initial que-clause subject: subjunctive.)' },
            { wrong: 'No lo sepas, quizá, pero el local es tuyo.', right: 'No lo sabes, quizá, pero el local es tuyo.', why: 'Si el adverbio va detrás del verbo, ya no rige el modo: es un comentario y el verbo va en indicativo. (Adverb after the verb: indicative.)' },
            { wrong: 'Igual Owen se arrepienta mañana.', right: 'Igual Owen se arrepiente mañana.', why: '«Igual» con valor de «a lo mejor» exige indicativo. (Igual, like a lo mejor, takes the indicative.)' },
            { wrong: 'Como no llegues tarde ayer, no te habrías perdido el principio.', right: 'Si no hubieras llegado tarde ayer, no te habrías perdido el principio.', why: '«Como» condicional + subjuntivo sirve para avisos sobre el presente o el futuro; para un pasado irreal usa «si» + pluscuamperfecto de subjuntivo. (Counterfactual past: si + pluperfect subjunctive.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ruth nos ha escrito que ___ el subtítulo del minuto 40: le parece demasiado largo.', options: ['acortaremos', 'acortamos', 'acortemos'], answer: 2, why: '«Escribir que» transmite aquí una petición: subjuntivo.', en: 'Ruth has written asking us to shorten the subtitle at minute 40: she thinks it’s too long.' },
            { prompt: 'No me parece que la versión doblada ___ mejor que la subtitulada.', options: ['es', 'será', 'sea'], answer: 2, why: '«No me parece que» niega la opinión: subjuntivo. Con «me parece que» iría indicativo.', en: 'I don’t think the dubbed version is better than the subtitled one.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno elige una frase ambigua en inglés de una serie que conozca («I understand you’re angry», «Do what you want») y da las dos versiones en español con el contexto que exige cada una.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La sala de revisión', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Episodio tres · Episode three', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Valentina e Irene; tu alumno es Darío. Después tu alumno toca cada expresión marcada y explica qué perspectiva elige cada uno.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿qué perspectiva muestra el modo? (What perspective does the mood show?)' } },
          { kind: 'explore', title: '¿Dato o empatía?', setting: 'Martes por la tarde, en la sala de revisión del Estudio Contraluz, en Bogotá. Valentina Ríos (revisora), Darío Fuentes (traductor) e Irene Cárdenas (directora de proyecto) revisan los subtítulos del episodio tres de «Marea baja». (The team reviews the subtitles for episode three.)', lines: [
            { who: 'Valentina', text: 'Darío, minuto 12. Margaret dice «I understand you’re tired» y pusiste «[[Entiendo que|violet]] [[estás|blue]] cansado». ¿Seguro?', en: 'Darío, minute 12. Margaret says “I understand you’re tired” and you put the indicative. Are you sure?' },
            { who: 'Darío', text: 'Sí. Owen acaba de contarle que lleva semanas sin dormir; ella solo recoge el dato.', en: 'Yes. Owen has just told her he hasn’t slept for weeks; she’s simply registering the fact.' },
            { who: 'Valentina', text: 'Yo no lo veo así. Le pone la mano en el hombro y baja la voz. Para mí es empatía: entiendo que [[estés|orange]] cansado.', en: 'I don’t see it that way. She puts her hand on his shoulder and lowers her voice. To me it’s empathy, so subjunctive.' },
            { who: 'Irene', text: 'El inglés no elige; nosotros sí. Y aquí manda la imagen: [[el hecho de que|teal]] le [[toque|orange]] el hombro lo dice todo.', en: 'English doesn’t choose; we do. And here the image decides: the fact that she touches his shoulder says it all.' },
            { who: 'Darío', text: 'Listo, lo cambio. Pero en el minuto 15 no cedo: «I’m not saying you’re wrong» queda como «[[No digo que|teal]] te [[equivoques|orange]]».', en: 'Fine, I’ll change it. But I won’t budge on minute 15: “I’m not saying you’re wrong” stays with the subjunctive.' },
            { who: 'Valentina', text: 'De acuerdo. ¿Y «Mum said to wait»? Aquí pone «Mamá [[dijo que|violet]] [[esperaba|blue]]».', en: 'Agreed. And “Mum said to wait”? Here it says “Mum said she was waiting”.' },
            { who: 'Darío', text: '¡Uy! Eso informa de que ella esperaba. Owen quiere decir que les pidió paciencia: «Mamá dijo que [[esperáramos|orange]]».', en: 'Oops! That reports that she was waiting. Owen means she asked them to be patient: “Mum told us to wait”.' },
            { who: 'Irene', text: 'Y ojo con el minuto 20: «Maybe she knew». ¿«[[Quizá|teal]] lo [[sabía|blue]]» o «quizá lo [[supiera|orange]]»?', en: 'And watch out for minute 20: “Maybe she knew”. Indicative or subjunctive?' },
            { who: 'Valentina', text: 'Depende de cuánto lo crea Owen. Las cartas no aparecen hasta el episodio cuatro, así que todavía duda: subjuntivo.', en: 'It depends on how much Owen believes it. The letters don’t turn up until episode four, so he still has doubts: subjunctive.' },
            { who: 'Darío', text: 'Y al final Margaret le suelta «Do what you want with the restaurant». Yo puse «Haz [[lo que|teal]] [[quieras|orange]] con el restaurante».', en: 'And at the end Margaret snaps “Do what you want with the restaurant”. I went for the subjunctive.' },
            { who: 'Irene', text: 'Bien: es un «me da igual» dolido. Si supiera lo que él quiere y lo aprobara, sería «haz lo que [[quieres|blue]]». Y una cosa más: [[como|teal]] no [[entreguemos|orange]] el viernes, perdemos el estreno.', en: 'Good: it’s a hurt “I don’t care”. If she knew what he wanted and approved, it would be the indicative. One more thing: if we don’t deliver on Friday, we miss the premiere.' },
            { who: 'Darío', text: '[[Seguramente|teal]] lo [[terminamos|blue]] el jueves. [[No parece que|violet]] [[queden|orange]] más dudas.', en: 'We’ll probably finish on Thursday. There don’t seem to be any doubts left.' },
          ], notes: {
            'Entiendo que': '«Entender que» tiene dos lecturas: con indicativo, «me consta, registro el dato»; con subjuntivo, «me parece comprensible». El mismo verbo cambia de sentido con el modo.',
            'estás': 'Indicativo: la lectura de Darío. Margaret toma nota de una información nueva.',
            'estés': 'Subjuntivo: la lectura de Valentina. El cansancio ya se conoce y Margaret lo justifica.',
            'el hecho de que': '«El hecho de que» presenta un dato conocido (se ve en la imagen) como tema del comentario.',
            'toque': 'Subjuntivo tras «el hecho de que» al principio: el gesto es real, pero es el tema, no la noticia.',
            'No digo que': '«No digo que» + subjuntivo: Owen no afirma que su madre se equivoque. Es el uso general.',
            'equivoques': 'Subjuntivo: el contenido queda sin afirmar.',
            'dijo que': '«Decir que» informa con indicativo y transmite una orden o un consejo con subjuntivo.',
            'esperaba': 'Indicativo: lectura de información («dijo que ella estaba esperando»). No es lo que dice el original.',
            'esperáramos': 'Imperfecto de subjuntivo: la petición se cuenta en pasado («dijo que esperáramos»). Es la lectura correcta de «said to wait».',
            'Quizá': '«Quizá» delante del verbo admite los dos modos: el modo gradúa cuánto cree el hablante.',
            'sabía': 'Indicativo: sospecha firme, casi una conclusión.',
            'supiera': 'Subjuntivo: posibilidad abierta, más distancia. Es lo coherente con un Owen que todavía duda.',
            'lo que': '«Lo que» + subjuntivo deja el contenido sin identificar: lo que sea.',
            'quieras': 'Subjuntivo: Margaret no sabe ni quiere saber qué hará Owen. Suena a «me da igual».',
            'quieres': 'Indicativo: un deseo conocido e identificado, «eso que sé que quieres».',
            'como': '«Como» al principio + subjuntivo = condición («si no entregamos…»), con tono de aviso.',
            'entreguemos': 'Presente de subjuntivo tras «como» condicional. Con indicativo («como no entregamos») sería una causa.',
            'Seguramente': '«Seguramente» significa «probablemente», no «con total seguridad». Admite los dos modos; el indicativo muestra confianza.',
            'terminamos': 'Indicativo tras «seguramente»: presente con valor de futuro, con bastante compromiso.',
            'No parece que': '«No parece que» niega la impresión: pide subjuntivo. «Parece que» afirmativo iría con indicativo.',
            'queden': 'Subjuntivo tras «no parece que».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué cambia Darío el subtítulo del minuto 12?', options: ['Porque Owen no está cansado.', 'Porque el gesto de Margaret muestra empatía, no información.', 'Porque el indicativo es incorrecto con «entender».'], answer: 1, why: 'Irene: «Aquí manda la imagen». Los dos modos son gramaticales; el contexto elige el subjuntivo.', en: 'Why does Darío change the subtitle at minute 12?' },
            { prompt: '¿Qué error había en «Mamá dijo que esperaba»?', options: ['El tiempo verbal era futuro.', 'Convertía una petición en una información.', 'Faltaba el pronombre.'], answer: 1, why: '«Mum said to wait» es una petición; con indicativo, el subtítulo informa de lo que hacía la madre.', en: 'What was wrong with “Mamá dijo que esperaba”?' },
            { prompt: '¿Por qué eligen «quizá lo supiera»?', options: ['Porque «quizá» exige subjuntivo.', 'Porque Owen ya tiene pruebas.', 'Porque Owen todavía no tiene pruebas y duda.'], answer: 2, why: 'Las cartas aparecen en el episodio cuatro: en este momento, Owen solo sospecha.', en: 'Why do they choose “quizá lo supiera”?' },
          ] },
        ] },
        { title: 'Más subtítulos · More subtitles', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Otros minutos del episodio · Other minutes of the episode', categories: [
            { id: 'afirma', label: 'AFIRMA O INFORMA (indicativo)', tone: 'blue' },
            { id: 'noafirma', label: 'NO AFIRMA: fondo, valoración, duda o petición (subjuntivo)', tone: 'orange' },
          ], items: [
            { text: 'Owen siente que el pueblo ya no lo reconoce.', answer: 'afirma', why: '«Sentir que» + indicativo = percibir.' },
            { text: 'Margaret siente que su hijo se vaya tan lejos.', answer: 'noafirma', why: '«Sentir que» + subjuntivo = lamentar.' },
            { text: 'El pescadero insiste en que el puerto vuelve a llenarse en verano.', answer: 'afirma', why: 'Sostiene un dato: indicativo.' },
            { text: 'Que el restaurante tenga cuarenta años no le importa al comprador.', answer: 'noafirma', why: '«Que» inicial como sujeto: el hecho es el tema.' },
            { text: 'Parece que la venta se firma en marzo.', answer: 'afirma', why: '«Parece que» afirmativo: impresión basada en indicios, indicativo.' },
            { text: 'Owen le escribe a su hermana que no le cuente nada a su madre.', answer: 'noafirma', why: '«Escribir que» + subjuntivo transmite una petición.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno elige un subtítulo del diálogo y lo defiende en la versión contraria, inventando el contexto que la haría correcta («Entiendo que estás cansado» si Margaret acaba de enterarse por un vecino).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero el sentido, después el modo. Meaning first, then mood.',
      steps: [
        { title: 'Elige y justifica · Choose and justify', blocks: [
          { kind: 'choice', items: [
            { context: 'Episodio cuatro: Owen encuentra unas cartas del banco. (Owen finds letters from the bank.)', prompt: 'Ahora Owen lo tiene claro. ¿Qué subtítulo refleja su certeza?', options: ['No creo que mamá lo supiera.', 'Quizá mamá lo supiera desde hace años.', 'Quizá mamá lo sabía desde hace años.'], answer: 2, why: 'Con pruebas en la mano, «quizá» + indicativo expresa una sospecha casi confirmada. El subjuntivo mantendría la distancia.', en: 'Which subtitle reflects Owen’s certainty?' },
            { context: 'Ruth, en un correo. (Ruth, in an email.)', prompt: 'Les recuerdo que el canal ___ los archivos en formato SRT, no en otro.', options: ['quisiera', 'quiera', 'quiere'], answer: 2, why: '«Recordar que» presenta un dato que el hablante sostiene: indicativo.', en: 'Let me remind you that the channel wants the files in SRT format, not any other.' },
            { context: 'Irene, a un traductor nuevo. (Irene, to a new translator.)', prompt: '___ un subtítulo sea fiel no basta: tiene que leerse en dos segundos.', options: ['Lo que', 'Que', 'Como'], answer: 1, why: 'Oración con «que» como sujeto de «basta»: el hecho es el tema y va en subjuntivo.', en: 'A subtitle being faithful isn’t enough: it has to be readable in two seconds.' },
            { context: 'Valentina comenta una escena. (Valentina comments on a scene.)', prompt: '¿Qué versión dice que Owen PIDE algo?', options: ['Owen avisa de que no lo esperen para cenar.', 'Owen avisa de que llega tarde a la cena.', 'Owen avisa de que llegará tarde a la cena.'], answer: 0, why: '«Avisar de que» + subjuntivo transmite una instrucción. Las otras dos informan.', en: 'Which version says Owen is asking for something?' },
            { context: 'Darío, en el chat del equipo. (Darío, in the team chat.)', prompt: '___ Ruth nos manda hoy la versión final; dijo que estaba casi lista.', options: ['A lo mejor', 'Puede que', 'Es posible que'], answer: 0, why: '«Manda» está en indicativo: solo «a lo mejor» lo admite. «Puede que» y «es posible que» piden «mande».', en: 'Maybe Ruth will send us the final version today; she said it was almost ready.' },
          ] },
        ] },
        { title: '¿Qué lectura tiene el verbo? · Which reading?', blocks: [
          { kind: 'classify', title: 'Constatar o valorar / pedir · Note, or assess / request', categories: [
            { id: 'constata', label: 'PERCIBE, SE DA CUENTA, INFORMA O SOSTIENE (indicativo)', tone: 'blue' },
            { id: 'valora', label: 'VALORA, LAMENTA, PIDE O EXIGE (subjuntivo)', tone: 'orange' },
          ], items: [
            { text: 'Comprendo que Ruth prefiera esperar al montaje final.', answer: 'valora', why: 'Le parece lógico: subjuntivo.' },
            { text: 'Al ver la escena, Darío comprendió que el silencio era la respuesta.', answer: 'constata', why: 'Me di cuenta: indicativo.' },
            { text: 'Siento que el ritmo del episodio ha mejorado mucho.', answer: 'constata', why: '«Sentir» = notar, percibir.' },
            { text: 'Siento que hayamos tenido que cortar esa canción.', answer: 'valora', why: '«Sentir» = lamentar.' },
            { text: 'Valentina insiste en que respetemos el límite de caracteres.', answer: 'valora', why: '«Insistir en que» + subjuntivo = exigir.' },
            { text: 'Valentina insiste en que el límite es de cuarenta y dos caracteres.', answer: 'constata', why: 'Sostiene un dato: indicativo.' },
          ] },
        ] },
        { title: 'Revisa los subtítulos · Review the subtitles', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Tal vez Margaret tuviera razón desde el principio.', ok: true, why: 'Correcta: «tal vez» delante del verbo admite subjuntivo, con más distancia que «tenía».' },
            { sentence: 'A lo mejor el comprador se eche atrás.', ok: false, options: ['A lo mejor que el comprador se eche atrás.', 'A lo mejor el comprador se echara atrás.', 'A lo mejor el comprador se echa atrás.'], answer: 2, why: '«A lo mejor» solo admite indicativo.' },
            { sentence: 'Que Margaret ha llorado en cámara no cambia el tono del episodio.', ok: false, options: ['Que Margaret llore en cámara no cambiaba el tono del episodio.', 'Que Margaret haya llorado en cámara no cambia el tono del episodio.', 'Que Margaret habrá llorado en cámara no cambia el tono del episodio.'], answer: 1, why: 'La oración con «que» inicial es sujeto y tema: subjuntivo, «haya llorado».' },
            { sentence: 'La subida de precios se debe al hecho de que el pescado escasea.', ok: true, why: 'Correcta: detrás del verbo y como explicación nueva, «el hecho de que» admite indicativo.' },
            { sentence: 'Como no me avisaras antes, no pude cambiar el subtítulo.', ok: false, options: ['Como no me avises antes, no pude cambiar el subtítulo.', 'Como no me avisaste antes, no pude cambiar el subtítulo.', 'Como no me habrías avisado antes, no pude cambiar el subtítulo.'], answer: 1, why: 'Es una causa de algo ya pasado: «como» inicial + indicativo.' },
          ] },
        ] },
        { title: 'Videollamada con la directora · Video call with the director', blocks: [
          { kind: 'chat-fill', title: 'Irene habla con Ruth Hale · Irene talks to Ruth Hale', lines: [
            { who: 'Ruth', text: 'Irene, he visto el episodio tres. Me encanta, pero tengo una duda en el minuto 12.' },
            { who: 'Irene', text: 'Pusimos «entiendo que estés cansado». ___ Margaret le toque el hombro nos hizo elegir la empatía.', options: ['Lo que', 'Como', 'El hecho de que'], answer: 2, why: '«El hecho de que» + subjuntivo presenta el gesto como tema conocido que justifica la decisión.' },
            { who: 'Ruth', text: 'Tiene sentido. ¿Y en el minuto 20? En inglés Owen no está seguro.' },
            { who: 'Irene', text: 'Por eso pusimos «quizá lo ___»: deja la duda abierta hasta el episodio cuatro.', options: ['supiera', 'sabrá', 'sepa'], answer: 0, why: '«Quizá» + imperfecto de subjuntivo: posibilidad en pasado con distancia.' },
            { who: 'Ruth', text: 'Perfecto. Mi productor insiste en que ___ el título en inglés en todos los países.', options: ['dejemos', 'dejamos', 'dejaremos'], answer: 0, why: 'El productor lo exige: «insistir en que» + subjuntivo.' },
            { who: 'Irene', text: 'Entendido. Lo que sí le pido es que no ___ la versión antes del viernes: falta la revisión final.', options: ['publicarán', 'publiquen', 'publican'], answer: 1, why: '«Pedir que» siempre lleva subjuntivo.' },
            { who: 'Ruth', text: 'Claro. Eso sí: ___ me lo manden después del viernes, el canal no lo acepta.', options: ['como', 'si', 'porque'], answer: 0, why: '«Manden» está en subjuntivo: solo «como» condicional lo admite, con tono de aviso. «Si» pediría «si me lo mandan».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Que', 'Owen', 'dude', 'no', 'significa', 'nada'], accept: ['Que Owen dude no significa nada'], en: 'Owen having doubts doesn’t mean anything.' },
            { tiles: ['No', 'es', 'que', 'no', 'quiera', 'es', 'que', 'no', 'puede'], accept: ['No es que no quiera es que no puede'], en: 'It’s not that he doesn’t want to; he can’t.' },
            { tiles: ['Como', 'no', 'entreguemos', 'hoy', 'perdemos', 'el', 'plazo'], accept: ['Como no entreguemos hoy perdemos el plazo', 'Como hoy no entreguemos perdemos el plazo'], en: 'If we don’t deliver today, we miss the deadline.' },
          ] },
        ] },
        { title: 'Cambia el compromiso · Change the commitment', blocks: [
          { kind: 'rewrite', title: 'Mismo contenido, otra perspectiva · Same content, another perspective', items: [
            { prompt: 'Owen sabía lo de las deudas.', instruction: 'Preséntalo como una posibilidad lejana con «quizá» y subjuntivo.', accept: ['Quizá Owen supiera lo de las deudas', 'Quizás Owen supiera lo de las deudas', 'Quizá Owen supiese lo de las deudas', 'Quizás Owen supiese lo de las deudas', 'Quizá supiera Owen lo de las deudas', 'Quizás supiera Owen lo de las deudas'] },
            { prompt: 'Margaret se enfadó. Eso no significa que no quiera vender.', instruction: 'Une las ideas en una frase que empiece por «Que Margaret…».', accept: ['Que Margaret se enfadara no significa que no quiera vender', 'Que Margaret se enfadase no significa que no quiera vender', 'Que Margaret se haya enfadado no significa que no quiera vender'] },
            { prompt: 'Margaret, a Owen: «No vendas el local».', instruction: 'Cuéntalo en pasado: «Margaret le dijo a Owen que…».', accept: ['Margaret le dijo a Owen que no vendiera el local', 'Margaret le dijo a Owen que no vendiese el local'] },
            { prompt: 'A lo mejor Owen vende el restaurante.', instruction: 'Cambia «a lo mejor» por «tal vez» y marca más distancia con el modo.', accept: ['Tal vez Owen venda el restaurante', 'Tal vez venda Owen el restaurante', 'Tal vez venda el restaurante Owen'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno toma una noticia de su ciudad y la dice tres veces con distinto compromiso: como dato («Parece que…»), como posibilidad lejana («Tal vez…» + subjuntivo) y como tema que comenta («Que… no significa que…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Taller de subtitulado', coach: 'Escucha cómo se justifica cada modo. Listen to how each mood is justified.',
      steps: [
        { title: '«Cuando el inglés no elige» · “When English doesn’t choose”', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota los ejemplos de Irene y qué decide en cada uno. Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota cada ejemplo y qué modo elige Irene y por qué. (Note each example, the mood and the reason.)' } },
          { kind: 'listen', title: 'Cuando el inglés no elige', channel: 'TALLER · SUBTITULAR CON MATICES · BOGOTÁ', src: '/audio/grammar-live/507.mp3',
            before: 'Irene Cárdenas da una charla a traductores jóvenes sobre el modo en los subtítulos. ¿Qué consejos crees que va a dar? (Irene gives a talk to young translators about mood in subtitles. What advice do you think she will give?)',
            gist: { prompt: '¿Cuál es la idea principal? · What is the main idea?', options: ['Que el traductor debe decidir el modo según el contexto, porque el inglés no lo marca.', 'Que hay que traducir siempre de forma literal.', 'Que el subjuntivo es más elegante que el indicativo en los subtítulos.'], answer: 0, why: 'Irene insiste en que la imagen, el tono y la escena deciden, «no el diccionario».', en: 'What is the main idea?' },
            details: [
              { prompt: 'Según Irene, ¿cuándo se usa «entiende que está molesto»?', options: ['Cuando el personaje acaba de enterarse.', 'Nunca: es incorrecto.', 'Cuando el personaje le da la razón al otro.'], answer: 0, why: '«Si el personaje acaba de enterarse, entiende que el otro está molesto: es un dato».', en: 'When, according to Irene, is the indicative used?' },
              { prompt: '¿Qué diferencia hay entre «quizá mintió» y «quizá mintiera»?', options: ['Ninguna.', 'La primera es incorrecta.', 'La primera suena a sospecha firme; la segunda deja la puerta abierta.'], answer: 2, why: 'Irene lo dice así: «quizá mintió suena a sospecha firme; quizá mintiera deja la puerta abierta».', en: 'What is the difference between the two?' },
              { prompt: '¿Qué les pide a los traductores?', options: ['Que entreguen siempre antes del plazo.', 'Que eviten el subjuntivo.', 'Que pregunten si no tienen clara la intención.'], answer: 2, why: '«Como no tengan clara la intención, pregunten antes de entregar».', en: 'What does she ask the translators to do?' },
              { prompt: '¿Qué deben hacer si el cliente quiere una versión literal?', options: ['Cambiar de cliente.', 'Aceptar sin discutir.', 'Explicar con ejemplos que un subtítulo también toma partido.'], answer: 2, why: '«Si el cliente insiste en que lo dejemos literal, explíquenle con ejemplos que un subtítulo también toma partido».', en: 'What should they do if the client wants a literal version?' },
            ],
            transcript: 'Buenas tardes. Soy Irene Cárdenas, del Estudio Contraluz, y hoy quiero hablarles de algo que el inglés no les va a resolver: el modo. Pongamos una frase sencilla: I understand you’re upset. En español hay que decidir. Si el personaje acaba de enterarse, [[entiende que|violet]] el otro [[está|blue]] molesto: es un dato. Si le está dando la razón, entiende que [[esté|orange]] molesto: lo encuentra lógico. La imagen, el tono y la escena siguiente deciden, no el diccionario. Otro caso: Maybe he lied. [[Quizá|teal]] [[mintió|blue]] suena a sospecha firme; quizá [[mintiera|orange]] deja la puerta abierta. Y no olviden que [[a lo mejor|teal]] solo admite indicativo. [[Que|teal]] el inglés no [[marque|orange]] esa diferencia no significa que el público no la [[note|orange]]: la nota, y mucho. Por eso les pido una cosa. [[Como|teal]] no [[tengan|orange]] clara la intención, pregunten antes de entregar. Y si el cliente [[insiste en que|violet]] lo [[dejemos|orange]] literal, explíquenle con ejemplos que un subtítulo también toma partido. Un buen subtítulo no solo traduce palabras: decide qué afirma el personaje y qué solo sugiere. Muchas gracias.',
            reply: { teacher: 'Tú eres un traductor del taller que levanta la mano y dice: «Pero si el inglés no lo marca, da igual qué modo ponga, ¿no?». Tu alumno responde como Irene con dos ejemplos propios.', self: 'Responde en voz alta a un asistente que dice que, si el inglés no lo marca, da igual qué modo pongas. Usa dos ejemplos. (Answer someone who says the mood doesn’t matter if English doesn’t mark it.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu perspectiva, con precisión', coach: 'Afirma, matiza o deja abierto. Assert, qualify or leave it open.',
      steps: [
        { title: 'Decidir el matiz · Deciding the nuance', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y reaccionas como un colega exigente. Tu alumno responde con matices. Cuando el modo no dice lo que quiere decir, tú repites su frase con el otro modo y comentan qué ha cambiado.', self: 'Lee la pregunta, responde en voz alta y grábate si quieres. Después escúchate: ¿el modo dice exactamente lo que querías? (Does the mood say exactly what you meant?)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en una serie o película que hayas visto traducida o subtitulada. ¿Recuerdas una frase que se perdiera o cambiara de sentido? · A line that was lost or changed in translation?', followUps: ['¿Cómo la habrías traducido tú? (How would you have translated it?)', '¿El problema era de palabras o de tono? (Words or tone?)'], phrases: ['[[Que|teal]] la [[tradujeran|orange]] así no significa que…', '[[Quizá|teal]] el traductor no [[tuviera|orange]] / [[tenía|blue]] contexto.', '[[El hecho de que|teal]]… [[sea|orange]]…'], hint: 'Comenta el hecho como tema («que…», «el hecho de que…») y gradúa tu hipótesis con «quizá».', example: 'En una comedia británica, un personaje decía «Well, that went well» y lo subtitularon «Bueno, ha ido bien». Que lo tradujeran así no significa que el traductor fuera malo: quizá no tuviera la imagen. Pero el hecho de que se perdiera la ironía cambió toda la escena.', next: 'Ahora, empatía o dato.' },
            { q: 'Un compañero te dice que está agotado. Respóndele dos veces: primero tomando nota del dato, después mostrando comprensión. · Respond twice: noting the fact, then showing understanding.', followUps: ['¿Qué haces después en cada caso? (What do you do next?)', '¿Qué gesto acompañaría cada versión? (What gesture would go with each?)'], phrases: ['[[Entiendo que|violet]] [[estás|blue]]…, así que…', 'Entiendo que [[estés|orange]]…: llevas…', '[[Siento que|violet]]…'], hint: 'Indicativo para registrar y actuar; subjuntivo para justificar lo que el otro siente.', example: 'Vale, entiendo que estás agotado, así que mañana presento yo el informe. Y la verdad, entiendo que estés así: llevas tres semanas cubriendo dos puestos. Siento que nadie te lo haya reconocido antes.', next: 'Ahora, encargos.' },
            { q: 'Cuenta un mensaje o correo reciente en el que alguien te informaba de algo y otro en el que te pedía algo. · Report a message that informed you and one that asked you to do something.', followUps: ['¿Lo hiciste? (Did you do it?)', '¿Cómo te lo dijo exactamente? (How exactly did they say it?)'], phrases: ['Me [[escribió que|violet]]… [[llegaba|blue]]…', 'Me [[avisó de que|violet]]… [[llevara|orange]]…', '[[Insistió en que|violet]]…'], hint: 'Mismo verbo de comunicación: indicativo si informa, subjuntivo si pide.', example: 'Mi casero me escribió que el lunes venía el fontanero. Al día siguiente me avisó de que dejara la llave en portería, e insistió en que no me olvidara, porque el lunes él estaba de viaje.', next: 'Ahora, discute.' },
            { q: 'Debate: «Si alguien cambia de opinión, es que no tenía convicciones». ¿Estás de acuerdo? · Agree or disagree?', followUps: ['¿Tienes un ejemplo personal? (A personal example?)', '¿Y en política? (And in politics?)'], phrases: ['[[Que|teal]] alguien [[cambie|orange]] de opinión no significa que…', '[[No digo que|teal]]… [[sea|orange]]…, digo que…', '[[No es que|teal]]…, es que…'], hint: 'Toma el hecho como tema y niega la conclusión; corrige la interpretación con «no es que».', example: 'No estoy de acuerdo. Que alguien cambie de opinión no significa que no tenga convicciones. No digo que siempre sea una virtud; digo que a veces es honestidad. No es que no creas en nada, es que has aprendido algo nuevo.', teacher: 'Defiende tú la postura contraria con un ejemplo concreto para que tu alumno tenga que matizar.' },
            { q: '¿Cómo crees que cambiará tu profesión o tu ciudad en cinco años? Gradúa tu seguridad con distintos adverbios. · Grade how sure you are.', followUps: ['¿Qué es lo más probable? (Most likely?)', '¿Qué te parece improbable? (Unlikely?)'], phrases: ['[[Seguramente|teal]]… / [[A lo mejor|teal]]… (+ indicativo)', '[[Tal vez|teal]]… [[haya|orange]] / [[hay|blue]]…', '[[No parece que|violet]]… / [[Parece que|violet]]…'], hint: 'Indicativo cuando te comprometes; subjuntivo con «quizá», «tal vez» o «probablemente» para tomar distancia.', example: 'Seguramente trabajaremos más desde casa. A lo mejor desaparecen algunas oficinas del centro. Tal vez haya menos tráfico, aunque no parece que el alquiler vaya a bajar. Parece que la ciudad ya está cambiando.', next: 'Ahora, el estudio.' },
            { q: 'Ahora eres Irene. Ruth quiere un subtítulo literal en una escena ambigua. Explícale qué perspectiva eligió el equipo y por qué. · Explain the perspective you chose and why.', followUps: ['¿Qué pasa si insiste? (What if she insists?)', '¿Qué otra versión le ofrecerías? (What alternative would you offer?)'], phrases: ['[[El hecho de que|teal]] Margaret… [[toque|orange]]…', '[[No digo que|teal]] la versión literal [[sea|orange]] mala, pero…', '[[Como|teal]] no [[decidamos|orange]] hoy…'], hint: 'Justifica la elección con el contexto y propone una alternativa con su matiz.', example: 'Ruth, el hecho de que Margaret le toque el hombro nos hizo elegir «entiendo que estés cansado». No digo que la versión literal sea mala, pero en español obliga a elegir, y el indicativo sonaría frío. Como no decidamos hoy, el canal no tendrá los archivos el viernes.', teacher: 'Tú eres Ruth y te resistes: «Pero yo quiero que suene como en inglés». Tu alumno responde con un contraste de modo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y reacciona como un colega exigente; tú respondes y eliges el modo según tu perspectiva.', self: 'Ahora haz tú las preguntas y respóndelas desde la perspectiva contraria a la tuya. (Ask the questions and answer from the opposite perspective.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Justificar un subtítulo', coach: 'Cada modo, una razón. Each mood, a reason.',
      steps: [
        { title: 'Un correo a la directora · An email to the director', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada verbo subordinado: ¿qué perspectiva elige y la justifica el correo?', self: 'Escribe tu correo y toca «Revisar mi texto». Después mira cada verbo tras «que», «quizá» o «como»: ¿dice lo que querías? (Does each verb say what you meant?)' } },
          { kind: 'write', title: 'Correo a Ruth Hale · Email to Ruth Hale', situation: 'Eres Irene Cárdenas (o traductor de una serie, un libro o un videojuego que conozcas). La directora no entiende por qué tres frases ambiguas del original aparecen con un modo concreto en español. Escríbele un correo profesional que justifique tus decisiones. (Write a professional email to the director justifying how three ambiguous lines were rendered in Spanish.)', task: [
            'Explica al menos un caso de verbo de doble lectura (entender, sentir, decir, insistir…) y por qué elegiste ese modo. (A two-reading verb and why.)',
            'Comenta un dato conocido como tema con «el hecho de que» o «que» inicial. (Comment on a known fact as a topic.)',
            'Gradúa una hipótesis con «quizá» o «tal vez» y explica el matiz. (Grade a hypothesis.)',
            'Matiza tu postura con «no digo que…» o «no es que…». (Qualify your position.)',
            'Cierra con una propuesta concreta y un plazo. (Close with a proposal and a deadline.)',
          ], starters: ['Estimada Ruth:', 'Gracias por tus comentarios sobre el episodio…', 'En el minuto…, el original dice…', 'El hecho de que…', 'No digo que…, pero…', 'Quizá…', 'Si te parece, …'],
            words: ['entiendo que', 'insiste en que', 'el hecho de que', 'que + subjuntivo', 'no digo que', 'no es que', 'quizá', 'tal vez', 'a lo mejor', 'seguramente', 'como', 'lo que'],
            model: 'Estimada Ruth: gracias por tus comentarios sobre el episodio tres. Te explico las tres decisiones que te preocupan. En el minuto 12, Margaret dice «I understand you’re tired». Elegimos «[[entiendo que|violet]] [[estés|orange]] cansado» porque no informa de nada nuevo: justifica el cansancio de su hijo, y [[el hecho de que|teal]] le [[toque|orange]] el hombro lo confirma. En el minuto 15, «Mum said to wait» es una petición, así que pusimos «mamá dijo que [[esperáramos|orange]]»; con indicativo, Owen contaría que su madre estaba esperando. En el minuto 20, Owen todavía no ha encontrado las cartas: «[[quizá|teal]] lo [[supiera|orange]]» mantiene la duda, mientras que «quizá lo sabía» adelantaría el final. [[No digo que|teal]] la versión literal [[sea|orange]] imposible, pero en español obliga a elegir una perspectiva, y [[que|teal]] el inglés no la [[marque|orange]] no significa que no exista. Si te parece, te mando las dos versiones de cada subtítulo antes del jueves y decides tú. [[Seguramente|teal]] [[llegamos|blue]] al estreno sin problema. Un abrazo, Irene Cárdenas.',
            minWords: 140,
            checks: [
              { label: 'Un verbo de doble lectura (entender, comprender, sentir, insistir…)', pattern: '(?<!\\p{L})(?:entiendo|entiende|comprendo|comprende|siento|siente|insiste|insistió|dijo|escribió|avisó)\\s+(?:en\\s+|de\\s+)?que(?!\\p{L})', tip: 'Justifica un verbo de doble lectura: «Elegimos "entiendo que estés cansado" porque…».' },
              { label: 'Un hecho conocido como tema (el hecho de que…)', pattern: '(?<!\\p{L})el\\s+hecho\\s+de\\s+que(?!\\p{L})', tip: 'Comenta un dato conocido: «El hecho de que le toque el hombro lo confirma».' },
              { label: 'Una hipótesis graduada (quizá, tal vez…)', pattern: '(?<!\\p{L})(?:quizás?|tal\\s+vez|probablemente)(?!\\p{L})', tip: 'Gradúa una hipótesis: «quizá lo supiera» frente a «quizá lo sabía».' },
              { label: 'Un matiz de postura (no digo que, no es que)', pattern: '(?<!\\p{L})no\\s+(?:digo|es)\\s+que(?!\\p{L})', tip: 'Matiza: «No digo que la versión literal sea imposible, pero…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:a\\s+lo\\s+mejor|igual)\\s+(?:\\p{L}+\\s+){0,2}(?:sea|sean|esté|estén|haya|hayan|tenga|tengan|pueda|puedan|llegue|lleguemos|supiera|supieran|sepa|sepan)(?!\\p{L})', why: '«A lo mejor» e «igual» (= a lo mejor) van siempre con **indicativo**: «a lo mejor llegamos», no «a lo mejor lleguemos».' },
              { pattern: '(?<!\\p{L})el\\s+hecho\\s+de\\s+que\\s+(?:\\p{L}+\\s+){0,2}(?:toca|es|son|está|están|tiene|tienen)\\s+(?:\\p{L}+\\s+){0,4}(?:no\\s+)?(?:significa|implica|quiere|basta|justifica|cambia)(?!\\p{L})', why: 'Al principio de la frase, como tema que comentas, «el hecho de que» va normalmente en **subjuntivo**: «el hecho de que le toque el hombro no significa…».' },
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
            { tone: 'teal', label: 'FONDO Y TEMA', formula: 'que + subj. (inicial) · el hecho de que + subj. / ind. (informativo)', example: 'Que haya vuelto no significa nada. / Se debe al hecho de que no vienen turistas.', caption: 'lo conocido que comentas, en subjuntivo; lo nuevo que explicas, puede ir en indicativo', en: 'a known fact you comment on takes the subjunctive; new explanatory content can take the indicative' },
            { tone: 'violet', label: 'DOBLE LECTURA', formula: 'entender · comprender · sentir · decir · avisar · insistir · parecer', example: 'Entiendo que estás / estés cansado. Insiste en que es / sea así.', caption: 'constatar o informar (ind.) frente a valorar, lamentar o pedir (subj.)', en: 'noting or reporting (indicative) versus evaluating, regretting or requesting (subjunctive)' },
            { tone: 'orange', label: 'COMPROMISO', formula: 'no digo que + subj. / ind. · no es que + subj. · quizá, tal vez, probablemente + ambos · a lo mejor + ind.', example: 'Quizá lo sabía / supiera. A lo mejor lo sabe.', caption: 'el modo gradúa cuánto afirmas', en: 'mood grades how much you assert; a lo mejor and igual only take the indicative' },
            { tone: 'blue', label: 'LO QUE Y COMO', formula: 'lo que / como + ind. (identificado, causa) · + subj. (cualquiera, condición)', example: 'Haz lo que quieres / quieras. Como no llegaste / llegues…', caption: 'algo concreto y real, o abierto y posible', en: 'something specific and real, or open and possible' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Cuando los dos modos son correctos, el modo no corrige: **decide la perspectiva**. Indicativo: lo afirmas como información. Subjuntivo: lo das por sabido y lo comentas, lo valoras, lo imaginas o lo pides. Antes de elegir, mira el contexto: el gesto, lo que ya se ha dicho, lo que pasa después.', en: 'When both moods are correct, mood does not correct anything: it decides the perspective. Indicative: you assert it as information. Subjunctive: you take it as known and comment on it, evaluate it, imagine it or request it. Before choosing, look at the context: the gesture, what has already been said, what happens next.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ el vuelo salga con retraso no justifica que nadie nos informe.', options: ['Como', 'Que', 'Lo que'], answer: 1, why: '«Que» + subjuntivo como sujeto inicial: el retraso es el tema que se comenta.', en: 'The flight leaving late doesn’t justify nobody informing us.' },
            { prompt: 'Mi médica me ha dicho que ___ menos café; dice que duermo mal por eso.', options: ['tomaré', 'tomo', 'tome'], answer: 2, why: '«Decir que» transmite un consejo: subjuntivo.', en: 'My doctor told me to drink less coffee; she says that’s why I sleep badly.' },
            { prompt: 'Igual mañana ___ el sol; el pronóstico ha cambiado.', options: ['saliera', 'sale', 'salga'], answer: 1, why: '«Igual» = a lo mejor: solo indicativo.', en: 'The sun might come out tomorrow; the forecast has changed.' },
            { prompt: '«Siento que algo no va bien en el equipo». ¿Qué significa?', options: ['Noto que algo va mal.', 'Deseo que algo vaya mal.', 'Lamento que algo vaya mal.'], answer: 0, why: '«Sentir que» + indicativo = percibir.', en: 'What does it mean?' },
            { prompt: '___ no me devuelvas el libro antes del viernes, te lo cobro.', options: ['Si', 'Como', 'Porque'], answer: 1, why: 'El verbo está en subjuntivo («devuelvas»): solo «como» condicional lo admite, con tono de aviso. «Si» pediría «no me devuelves».', en: 'If you don’t give the book back before Friday, I’ll charge you for it.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Otro contexto, la misma lógica.', blocks: [
          { kind: 'lead', text: 'En la comunidad de vecinos de tu edificio se discute si instalar placas solares en el tejado. Reescribe cada frase con la perspectiva que se indica.', en: 'Your building’s residents’ association is debating whether to install solar panels on the roof. Rewrite each sentence with the perspective given.' },
          { kind: 'rewrite', title: 'La reunión de vecinos · The residents’ meeting', items: [
            { prompt: 'El presidente: «Voten antes del día 30».', instruction: 'Cuéntalo: «El presidente insistió en que…» (pasado).', accept: ['El presidente insistió en que votáramos antes del día 30', 'El presidente insistió en que votásemos antes del día 30', 'El presidente insistió en que votaran antes del día 30', 'El presidente insistió en que votasen antes del día 30'] },
            { prompt: 'La obra es cara. Eso no significa que no merezca la pena.', instruction: 'Une las ideas con «Que la obra…».', accept: ['Que la obra sea cara no significa que no merezca la pena'] },
            { prompt: 'A lo mejor los vecinos del quinto votan en contra.', instruction: 'Cambia «a lo mejor» por «quizá» y toma distancia con el modo.', accept: ['Quizá los vecinos del quinto voten en contra', 'Quizás los vecinos del quinto voten en contra'] },
          ] },
        ] },
        { title: 'Ampliación · Dislocación y lenguaje jurídico · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Dos casos de registro: si la oración con «que» se adelanta y se retoma con un pronombre ante un verbo como «saber» o «negar» («**Que Owen no quiere el restaurante, lo sabe todo el pueblo**»), el indicativo es posible, porque el hablante sí afirma el contenido. Y en textos jurídicos y contratos, «**se entiende que**» + indicativo significa «se interpreta, se considera»: «Se entiende que el cliente acepta las condiciones».', en: 'For strong students or spare time. Two register cases: when a “que” clause is moved to the front and picked up again by a pronoun before a verb like saber or negar, the indicative is possible, because the speaker does assert the content. And in legal texts and contracts, “se entiende que” + indicative means “it is understood / deemed that”.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«Que Owen no quiere el restaurante, lo sabe todo el pueblo». ¿Qué hace el hablante?', options: ['Es un error: tendría que ser «quiera».', 'Duda de que Owen no lo quiera.', 'Afirma el dato y añade que es de dominio público.'], answer: 2, why: 'Oración adelantada y retomada con «lo» ante «saber»: el indicativo muestra que el hablante afirma el contenido.', en: 'What is the speaker doing?' },
            { prompt: 'Contrato de traducción: «Si el cliente no responde en diez días, se entiende que ___ la versión».', options: ['aceptara', 'acepte', 'acepta'], answer: 2, why: '«Se entiende que» en lenguaje jurídico = se considera: indicativo.', en: 'Translation contract: if the client doesn’t respond within ten days, they are deemed to accept the version.' },
            { prompt: '«Que Owen no quiera el restaurante es comprensible». ¿Por qué aquí es más natural el subjuntivo?', options: ['Porque «comprensible» es un verbo.', 'Porque la oración es sujeto de una valoración y no se retoma con pronombre.', 'Porque Owen sí quiere el restaurante.'], answer: 1, why: 'La oración inicial es el tema que se valora: subjuntivo, la opción general.', en: 'Why is the subjunctive more natural here?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno redacta una cláusula breve de un contrato de servicios con «se entiende que» y una frase dislocada con «lo sabe todo el mundo», y explica qué afirma en cada una.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 208 · Valores discursivos del condicional de rumor', text: 'Ya eliges el modo para decidir qué afirmas y qué no. En la clase 208 das un paso más en el control del compromiso: el condicional de rumor («Según fuentes del canal, la serie **tendría** una segunda temporada») permite transmitir una información sin hacerte responsable de ella. Es el paso natural: otra herramienta para graduar lo que aseveras.', en: 'You can now choose mood to decide what you assert and what you don’t. In class 208 you go further in controlling commitment: the “rumour” conditional lets you pass on information without taking responsibility for it (“according to sources, the series would have a second season”). It is the natural next step: another tool for grading what you assert.', href: '/gramatica/valores-discursivos-del-condicional-de-rumor', label: 'Ir a la clase 208' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué frase de hoy te ha cambiado la forma de leer el subjuntivo?». Respuesta esperada: un par mínimo con su contexto. Tarea: el correo de Escribir con tres decisiones reales de traducción o de comunicación.' },
        ] },
      ],
    },
  ],
};
