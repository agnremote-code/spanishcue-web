import type { LiveLesson } from '../types';

/**
 * Lesson 514 · C2 · Gramaticalidad, aceptabilidad y variación real (course unit G214).
 * Builds on G180 (lesson 480: queísmo y dequeísmo) and G181 (lesson 481: leísmo, laísmo, loísmo),
 * G164 (lesson 464: registro); G217 (lesson 517) later goes deeper into leísmo in cultivated
 * varieties. C2 step: the meta-level. Four separate judgments: grammaticality (does any native
 * variety produce it? *Los niño come), acceptability (grammatical but odd in context: centre
 * embedding, wrong register), normativity (what RAE-ASALE recommend: «se admite», «se prefiere»,
 * «se desaconseja», «no se considera correcto en la norma culta») and real variation (geographic,
 * social, situational). Well-documented cases only, stated as the DPD / Nueva gramática state them:
 * haber impersonal pluralized (habían muchas personas), me se cayó (anchor: se me cayó), dequeísmo /
 * queísmo (and dudar (de) que, both valid), detrás mío, leísmo de persona masculino singular
 * (admitted), laísmo (not admitted), -stes in the preterite, más mayor (only as age), la calor,
 * andé. How to consult DPD, NGLE, Libro de estilo, FundéuRAE and the usage marks of the DLE.
 * Ampliación: hypercorrection (bacalado) and a pluricentric norm. Scene: a publishing house.
 * Beatriz Lozano (editor), Iván Soler (trainee proofreader), Ramiro Cuesta (novelist) revise
 * «El verano de las cigüeñas»: Remedios, the grandmother, speaks popular Spanish in the dialogue;
 * the author's note is formal. Escuchar: Lucía Barrera's language podcast (es-CO-SalomeNeural).
 * Escribir: Beatriz's proofreading report to Ramiro.
 */
export const lesson: LiveLesson = {
  id: 514,
  level: 'C2',
  title: 'Gramaticalidad, aceptabilidad y variación real',
  subtitle: 'Distinguir error, variante y norma, consultar las obras académicas y decidir qué forma conviene a cada texto y registro.',
  legend: [
    { tone: 'neutral', label: 'AGRAMATICAL · los persona (no native variety says it)' },
    { tone: 'orange', label: 'NO NORMATIVA · habían muchas personas, me se cayó (real usage the cultivated norm rejects)' },
    { tone: 'violet', label: 'SEGÚN REGISTRO O ZONA · detrás mío, le vi, más mayor (depends on context)' },
    { tone: 'teal', label: 'NORMA CULTA · había, se me cayó, detrás de mí (safe in any formal text)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Error, variante o norma?', coach: 'No todo lo que no es norma es un error. Not every non-standard form is a mistake.',
      steps: [
        { title: 'El manuscrito en rojo · The manuscript in red', blocks: [
          { kind: 'lead', text: 'Una editorial pequeña. Iván Soler, corrector en prácticas, devuelve el manuscrito de «El verano de las cigüeñas», la novela de Ramiro Cuesta, lleno de marcas rojas. Ha tachado frases de Remedios, la abuela de la novela: «[[Me se cayó|orange]] la jarra», «[[Habían muchas personas|orange]] en la feria». Y también frases de la nota del autor. Beatriz Lozano, la editora, le pregunta: «¿Todo esto es lo mismo?». Hoy aprendes a responder con precisión: **qué es agramatical, qué es inadecuado, qué es no normativo y qué es variación legítima**.', en: 'A small publishing house. A trainee proofreader has marked in red the grandmother’s lines and parts of the author’s note. The editor asks whether all of it is the same kind of problem. Today you learn to tell apart what is ungrammatical, what is inappropriate in context, what the norm rejects and what is legitimate variation.' },
          { kind: 'guide', text: { teacher: 'Tú lees las cuatro frases. Tu alumno dice, antes de leer la explicación, si alguien las diría de verdad y dónde.', self: 'Lee las cuatro frases en voz alta. Antes de leer la explicación, decide: ¿alguien las dice de verdad? ¿Dónde y cuándo? (Would anyone really say this? Where?)' } },
          { kind: 'compare', title: 'Cuatro juicios distintos · Four different judgments', columns: [
            { tone: 'neutral', label: 'AGRAMATICAL', sentence: '[[Los niño come|neutral]] en la cocina.', idea: 'Ninguna variedad del español la produce: rompe la concordancia del sistema.', en: 'No native variety produces it. It breaks the grammar itself; only a learner or a slip would.' },
            { tone: 'blue', label: 'GRAMATICAL, PERO INADECUADA', sentence: 'A tu hermano, por WhatsApp: «Le ruego tenga a bien confirmar su asistencia a la cena».', idea: 'La gramática es impecable; el registro no encaja con la situación.', en: 'Perfect grammar, wrong situation: the register clashes with the context, so it sounds odd or ironic.' },
            { tone: 'orange', label: 'NO NORMATIVA', sentence: '[[Habían muchas personas|orange]] en la feria.', idea: 'La dicen muchísimos hablantes con total naturalidad, pero la norma culta recomienda «había».', en: 'Real, systematic usage in many communities, but the cultivated norm recommends another form.' },
            { tone: 'violet', label: 'SEGÚN REGISTRO', sentence: 'Venía [[detrás mío|violet]] desde la plaza.', idea: 'Frecuente en la lengua oral de muchas zonas; en un texto cuidado se prefiere «detrás de mí».', en: 'Normal in everyday speech in many places; careful writing prefers another option.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Por qué «Habían muchas personas» no se clasifica como agramatical?', options: ['Porque solo es un error de ortografía.', 'Porque la norma académica la acepta en todos los registros.', 'Porque es una forma sistemática en la gramática de muchos hablantes nativos.'], answer: 2, why: 'Agramatical es lo que ninguna variedad produce. Esta forma es sistemática en muchas comunidades; lo que ocurre es que la norma culta no la recomienda.', en: 'Ungrammatical means no native variety produces it; this form is systematic usage that the norm does not recommend.' },
            { prompt: 'El mensaje «Le ruego tenga a bien confirmar su asistencia», enviado a tu hermano, ¿qué problema tiene?', options: ['Es agramatical.', 'Es gramatical, pero inadecuado al contexto.', 'Es una forma no normativa.'], answer: 1, why: 'No hay error de gramática ni de norma: falla la adecuación al registro.', en: 'The problem is register, not grammar or the norm.' },
          ] },
        ] },
        { title: 'Cuatro preguntas, no una · Four questions, not one', mascot: '/brand/mascot/studying.webp', coach: '¿Quién lo dice, dónde y para qué? Who says it, where, and what for?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'GRAMATICALIDAD · ACEPTABILIDAD · NORMA · VARIACIÓN', question: '¿Qué estás juzgando exactamente cuando dices que algo «está mal»?', en: '“Wrong” mixes four judgments. Grammaticality: does the form belong to the system of some native variety? Acceptability: does a speaker find it natural in this context (it may be grammatical yet hard to process, absurd or in the wrong register)? Normativity: what the Academies recommend for cultivated, especially formal, use. Variation: who uses it, where and in what situation. A form can be grammatical for millions of speakers and still be non-standard.', formula: ['gramaticalidad → ¿pertenece al sistema de alguna variedad nativa?', 'aceptabilidad → ¿suena natural aquí, para este oyente y en esta situación?', 'norma culta → ¿qué recomiendan las Academias (RAE-ASALE) para el uso cuidado?', 'variación → geográfica (dónde) · social (quién) · situacional (cuándo y para qué)'],
            meaning: 'Decir «está mal» mezcla cuatro juicios. Una forma puede ser **gramatical** en la variedad de quien la usa y, a la vez, **no normativa**; puede ser **normativa** y resultar **inadecuada** en una situación concreta. El buen corrector no pregunta solo «¿es correcto?», sino **«¿es adecuado para este texto?»**.',
            examples: [
              { es: '[[Se me cayó|teal]] la jarra. / [[Me se cayó|orange]] la jarra.', en: 'The second is common in popular speech; the norm keeps «se» before «me» and calls the other order vulgar.' },
              { es: 'El corrector que la editora que Ramiro conoce contrató revisó el texto.', en: 'Grammatical but barely acceptable: two clauses embedded one inside the other overload memory.' },
              { es: '[[A mi abuelo le recuerdo|violet]] sentado a la puerta.', en: 'Leísmo with a male person in the singular: frequent above all in Spain and admitted by the norm.' },
            ],
            note: 'Usa el asterisco (*) solo para lo **agramatical**. Para lo no normativo, los lingüistas y las obras académicas hablan de usos que «se desaconsejan» o que «no se consideran correctos en la norma culta».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El corrector que la editora que Ramiro conoce contrató revisó el texto». ¿Qué le pasa?', options: ['Es agramatical: le falta un verbo.', 'Es gramatical, pero cuesta procesarla: su aceptabilidad es baja.', 'Es no normativa: la RAE la desaconseja.'], answer: 1, why: 'Todos los elementos encajan; el problema es la memoria del oyente ante dos relativas incrustadas. Mejor: «Ramiro conoce a la editora que contrató al corrector que revisó el texto».', en: 'Every piece fits; the difficulty is processing, not grammar.' },
          ] },
        ] },
        { title: 'Casos bien documentados · Well-documented cases', mascot: '/autoestudio/mascot/noting.webp', coach: 'Lo que dicen las obras académicas, ni más ni menos. What the reference works say, no more.', blocks: [
          { kind: 'table', title: 'Diez formas que se discuten · Ten disputed forms', head: ['Forma real', 'Qué dice la norma (DPD, NGLE)', 'Dónde o cuándo se oye', 'En un texto formal'], rows: [
            ['[[habían muchas personas|orange]] · [[hubieron problemas|orange]]', 'se recomienda mantener «haber» impersonal en singular', 'muy extendido en América y en zonas de España, también entre hablantes cultos', '[[había muchas personas|teal]] · [[hubo problemas|teal]]'],
            ['[[me se cayó|orange]] · te se olvidó', 'se considera vulgar: el orden normativo es «se» + me / te', 'habla popular', '[[se me cayó|teal]] · se te olvidó'],
            ['[[pienso de que|orange]] (dequeísmo) · [[estoy seguro que|orange]] (queísmo)', 'ninguno de los dos se considera correcto en la lengua culta', 'lengua oral de muchas zonas', 'pienso que · estoy seguro de que'],
            ['[[detrás mío|violet]] · delante suyo', 'se recomienda «detrás de mí»; el posesivo femenino (detrás mía) se rechaza aún más', 'lengua oral espontánea de muchas zonas', '[[detrás de mí|teal]] · delante de él'],
            ['[[le vi|violet]] (a Juan)', 'se admite: leísmo de persona, masculino, singular', 'frecuente sobre todo en España', 'le vi o lo vi'],
            ['[[la dije que|orange]] viniera (laísmo)', 'no se admite en la norma culta', 'sobre todo en zonas del centro de España', 'le dije que viniera'],
            ['[[dijistes|orange]] · cantastes', 'no se considera correcto: la 2.ª persona del indefinido no lleva -s', 'habla popular', 'dijiste · cantaste'],
            ['[[más mayor|violet]]', 'válido si «mayor» se refiere a la edad (‘de edad avanzada’, ‘adulto’); no como comparativo de «grande»', 'habla general', 'Mi padre está ya más mayor ✓ · una sala más mayor que esta ✗'],
            ['[[la calor|orange]]', '«calor» es masculino; el femenino, normal en la lengua antigua, hoy se considera popular', 'habla popular y rural de algunas zonas', '[[el calor|teal]]'],
            ['[[andé|orange]] · andaste', 'no se considera correcto: el indefinido es irregular', 'habla popular', '[[anduve|teal]] · anduviste'],
          ], note: 'DPD = «Diccionario panhispánico de dudas» (RAE y ASALE). NGLE = «Nueva gramática de la lengua española» (RAE y ASALE). Cuando la norma admite dos formas («le vi» / «lo vi»; «dudo que» / «dudo de que»), las dos son correctas: no hay nada que corregir.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué afirmación sobre «habían muchas personas» se ajusta a las obras académicas?', options: ['Ya se considera la forma preferida en América.', 'Solo se oye entre hablantes sin estudios.', 'Está muy extendida, también entre hablantes cultos, pero se recomienda el singular en el uso cuidado.'], answer: 2, why: 'La NGLE y el DPD describen su gran extensión, incluso en hablantes cultos, y recomiendan mantener el singular.', en: 'Widespread, even among educated speakers, yet the recommendation is still the singular.' },
            { prompt: '«Cuando seas más mayor lo entenderás». ¿Qué dice la norma?', options: ['Es válido: «mayor» se refiere a la edad.', 'No es correcto: «mayor» ya es comparativo.', 'Solo es válido en América.'], answer: 0, why: 'Con el sentido de edad («adulto», «de edad avanzada»), «más mayor» se admite. Lo que no se admite es «más mayor» como comparativo de «grande».', en: 'With the meaning of age, “más mayor” is admitted.' },
          ] },
        ] },
        { title: 'Cómo consultar · How to check', mascot: '/brand/mascot/seated.webp', coach: 'Lee la etiqueta, no solo el veredicto. Read the label, not just the verdict.', blocks: [
          { kind: 'table', title: 'Las obras de referencia · The reference works', head: ['Obra', 'Qué te da', 'Cuándo la usas'], rows: [
            ['**DPD** · Diccionario panhispánico de dudas', 'respuestas concretas con recomendación', 'una duda puntual: busca la palabra clave (haber, detrás, leísmo)'],
            ['**NGLE** · Nueva gramática', 'descripción del sistema y de su variación por zonas y registros', 'entender **por qué** existe una forma y **dónde** se usa'],
            ['**Libro de estilo de la lengua española** (RAE)', 'criterios para textos cuidados, también digitales', 'redactar o corregir un texto formal'],
            ['**FundéuRAE**', 'recomendaciones breves sobre dudas actuales, sobre todo de los medios', 'una duda reciente o de prensa'],
            ['**DLE** · Diccionario de la lengua española', 'marcas de uso: coloq., vulg., rur. y marcas de países', 'saber en qué registro o zona vive una palabra'],
          ], note: 'Aprende a leer la escala: «es válido / se admite» → «se prefiere / se recomienda» → «se desaconseja / debe evitarse» → «no se considera correcto en la norma culta» → «vulgar». No es lo mismo «se prefiere» que «es incorrecto».' },
          { kind: 'decide', title: '¿Corrijo o no? · Do I correct it?', steps: [
            { q: '¿Algún hablante nativo lo produce de forma sistemática?', yes: 'Es una **variante real**. Sigue con la siguiente pregunta.', no: 'Es **agramatical**: un lapsus o un error de aprendiz. Se corrige siempre.' },
            { q: '¿La norma culta lo admite?', yes: 'Es **estándar**. Si hay dos formas admitidas, elige por registro o por coherencia; no corrijas.', no: 'Sigue con la última pregunta.' },
            { q: '¿El texto reproduce la voz de alguien (diálogo, cita, entrevista) o es deliberadamente coloquial?', yes: 'Puede **mantenerse** como rasgo de su variedad: corregirlo falsearía la voz.', no: 'En un texto formal, **se revisa** y se sustituye por la forma normativa.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Una entrada dice: «se prefiere la forma X». ¿Qué significa para la forma alternativa?', options: ['Que es agramatical.', 'Que es menos recomendable en el uso cuidado, pero no se califica de incorrecta.', 'Que está prohibida en todos los registros.'], answer: 1, why: '«Se prefiere» marca una preferencia, no una condena. «No se considera correcto» es mucho más fuerte.', en: '“Preferred” expresses a preference, not a ban.' },
            { prompt: 'Quieres saber en qué zonas se usa la concordancia de «haber». ¿Dónde lo buscas primero?', options: ['En la Nueva gramática, que describe la variación.', 'En un diccionario bilingüe.', 'En el DLE, en la entrada «persona».'], answer: 0, why: 'La NGLE describe la distribución geográfica y social de las variantes; el DPD da la recomendación.', en: 'Distribution and variation are described in the academic grammar.' },
          ] },
        ] },
        { title: 'La misma forma, dos textos · One form, two texts', mascot: '/brand/mascot/speaking.webp', coach: 'Adecuado para qué. Appropriate for what?', blocks: [
          { kind: 'compare', title: 'Diálogo y nota del autor · Dialogue and author’s note', columns: [
            { tone: 'orange', label: 'DIÁLOGO DE REMEDIOS', sentence: '—¡Ay, hija, [[con la calor|orange]] que hace [[andé|orange]] hasta el pozo y [[me se cayó|orange]] el cántaro!', idea: 'Se mantiene: el autor construye al personaje con su habla. Corregirla sería falsear su voz.', en: 'Kept: dialogue represents how a character really speaks; “correcting” it would erase who she is.' },
            { tone: 'teal', label: 'NOTA DEL AUTOR', sentence: 'Con [[el calor|teal]] de agosto, mi abuela [[anduvo|teal]] hasta el pozo y [[se le cayó|teal]] el cántaro.', idea: 'Se revisa: es la voz del autor en un texto formal publicado.', en: 'Revised: here the author speaks in his own voice in a formal published text, so the cultivated norm applies.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Adecuación, no solo corrección · Appropriateness, not just correctness', text: 'Pregunta siempre **quién habla y para quién**. La norma culta es el punto de referencia para el texto formal, no una regla para todas las voces. Un buen corrector **revisa la narración y respeta el diálogo**.', en: 'Always ask who is speaking and to whom. The cultivated norm is the reference for formal writing, not a rule for every voice: a good proofreader revises the narration and respects the dialogue.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Una periodista transcribe una entrevista para un reportaje sobre el habla de un pueblo. El entrevistado dice «andé». ¿Qué hace?', options: ['Lo elimina porque es agramatical.', 'Lo cambia a «anduve» sin avisar.', 'Lo mantiene entre comillas: es el objeto del reportaje.'], answer: 2, why: 'En un reportaje sobre el habla, la forma real es el dato. No es agramatical: es una variante no normativa.', en: 'In a report about local speech, the real form is the evidence.' },
          ] },
        ] },
        { title: 'Errores de juicio · Errors of judgment', mascot: '/brand/mascot/standing-crossed.webp', coach: 'El error también puede estar en el corrector. The proofreader can be wrong too.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada juicio equivocado de Iván y tu alumno explica qué falla antes de ver la corrección.', self: 'Lee cada juicio de Iván y decide qué falla antes de ver la corrección. (What is wrong with the judgment?)' } },
          { kind: 'mistakes', title: 'Lo que Iván dijo · What Iván said', items: [
            { wrong: '«Habían muchas personas» es agramatical.', right: '«Habían muchas personas» es una variante muy extendida que la norma culta no recomienda.', why: 'Es sistemática para muchos hablantes: interpretan «personas» como sujeto. No es agramatical; es no normativa.' },
            { wrong: '«A mi abuelo le recuerdo» es un leísmo incorrecto.', right: '«A mi abuelo le recuerdo» se admite (y también «lo recuerdo»).', why: 'El leísmo de persona masculino singular está admitido por la norma.' },
            { wrong: '«Dudo de que llegue» lleva un «de» de más: es dequeísmo.', right: '«Dudo de que llegue» y «Dudo que llegue» son correctas.', why: '«Dudar» admite las dos construcciones. Antes de corregir, consulta el régimen del verbo.' },
            { wrong: '«Más mayor» nunca es correcto.', right: '«Mi padre ya está más mayor» es válido; «una sala más mayor que esta» no.', why: 'Se admite con el sentido de edad; no como comparativo de «grande».' },
            { wrong: 'En los diálogos de la abuela hay que poner «se me cayó».', right: 'En los diálogos de la abuela se mantiene «me se cayó».', why: 'La norma culta guía el texto formal del autor; el diálogo reproduce la voz del personaje.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Iván quiere corregir «La dije que viniera» en la nota del autor. ¿Tiene razón?', options: ['No: es agramatical y no hace falta explicarlo.', 'Sí: el laísmo no se admite en la norma culta; lo normativo es «le dije».', 'No: el laísmo se admite como el leísmo.'], answer: 1, why: 'A diferencia del leísmo de persona masculino singular, el laísmo no se admite en la norma culta. En la voz del autor, «Le dije que viniera».', en: 'Unlike that type of leísmo, laísmo is not admitted.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno elige una forma de la tabla y la explica con los cuatro juicios: gramaticalidad, aceptabilidad, norma y variación.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión de corrección', coach: 'Toca cada marca: ¿error, variante o norma? Tap each mark.',
      steps: [
        { title: 'En la editorial · At the publisher’s', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Beatriz y tu alumno es Iván; el papel de Ramiro lo leen por turnos. Después tu alumno toca cada expresión marcada y la clasifica.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y clasifícala: ¿agramatical, no normativa, según registro o norma culta? (Classify each marked form.)' } },
          { kind: 'explore', title: '«Si la corriges, deja de ser ella»', setting: 'Martes por la mañana. Beatriz Lozano, editora, se reúne con Iván Soler, corrector en prácticas, y con el autor, Ramiro Cuesta, para revisar las pruebas de «El verano de las cigüeñas».', lines: [
            { who: 'Iván', text: 'He marcado todo lo incorrecto. En la página doce, la abuela dice «[[Me se cayó|orange]] la jarra»; en la catorce, «[[Habían muchas personas|orange]] en la feria».', en: 'I’ve marked everything that’s wrong. On page twelve the grandmother says “me se cayó”; on page fourteen, “habían muchas personas”.' },
            { who: 'Beatriz', text: '¿Y quién habla en esas páginas? Remedios, una mujer de ochenta años que dejó la escuela a los nueve. Si la corriges, deja de ser ella.', en: 'And who is speaking on those pages? Remedios, an eighty-year-old who left school at nine. If you correct her, she stops being herself.' },
            { who: 'Ramiro', text: 'Exacto. Mi abuela decía «[[con la calor|orange]]» y «[[andé|orange]] hasta el pozo». No es un descuido mío: es su voz.', en: 'Exactly. My grandmother said “con la calor” and “andé hasta el pozo”. That isn’t carelessness on my part: it’s her voice.' },
            { who: 'Iván', text: 'Pero son errores, ¿no? El diccionario de dudas los rechaza.', en: 'But they’re mistakes, aren’t they? The dictionary of doubts rejects them.' },
            { who: 'Beatriz', text: 'Los rechaza [[en la norma culta|teal]], que no es lo mismo. En la gramática de Remedios, «habían muchas personas» funciona perfectamente; lo que nadie diría es «[[los persona|neutral]]».', en: 'It rejects them for the cultivated norm, which isn’t the same thing. In Remedios’s grammar, “habían muchas personas” works perfectly; what nobody would ever say is “los persona”.' },
            { who: 'Iván', text: 'Vale, en los diálogos los dejo. ¿Y en la nota del autor? Ramiro escribe: «[[Pienso de que|orange]] esta novela le debe todo a mi abuela».', en: 'OK, I’ll leave them in the dialogue. And the author’s note? Ramiro writes “pienso de que this novel owes everything to my grandmother”.' },
            { who: 'Beatriz', text: 'Ahí sí: es la voz de Ramiro en un texto formal. [[Pienso que|teal]], sin «de».', en: 'That one, yes: it’s Ramiro’s own voice in a formal text. “Pienso que”, without “de”.' },
            { who: 'Ramiro', text: 'Lo acepto. Pero no me toques «[[A mi abuelo le recuerdo|violet]] sentado a la puerta», que me gusta cómo suena.', en: 'Fair enough. But don’t touch “a mi abuelo le recuerdo sentado a la puerta”; I like the way it sounds.' },
            { who: 'Beatriz', text: 'No pensaba tocarlo: ese leísmo [[se admite|teal]]. Y «[[cuando fui más mayor|violet]]» también vale, porque «mayor» se refiere a la edad.', en: 'I wasn’t going to: that kind of leísmo is admitted. And “cuando fui más mayor” is fine too, because “mayor” refers to age.' },
            { who: 'Iván', text: '¿Y «iba [[detrás mío|violet]]», en la página tres de la nota?', en: 'And “iba detrás mío” on page three of the note?' },
            { who: 'Beatriz', text: 'Es muy frecuente en la lengua oral, pero en un texto cuidado [[se prefiere|teal]] «detrás de mí». En la nota lo cambiamos; si lo dice Remedios, se queda.', en: 'It’s very common in speech, but careful writing prefers “detrás de mí”. We change it in the note; if Remedios says it, it stays.' },
          ], notes: {
            'Me se cayó': 'Orden de pronombres **no normativo**: el DPD lo considera vulgar. La forma culta es «se me cayó». Aquí caracteriza el habla popular del personaje.',
            'Habían muchas personas': '«Haber» impersonal concordado con el complemento. Muy extendido en América y en zonas de España; la norma culta recomienda «había».',
            'con la calor': '«Calor» en femenino: propio del habla popular y rural de algunas zonas. En la norma, «el calor».',
            'andé': 'Indefinido regularizado de «andar». No normativo: la forma culta es «anduve». Es rasgo de habla popular, no un lapsus del autor.',
            'en la norma culta': 'La clave del argumento de Beatriz: el DPD juzga el uso cuidado, no la gramática interna de cada variedad.',
            'los persona': '**Agramatical**: ninguna variedad del español rompe así la concordancia entre artículo y nombre.',
            'Pienso de que': '**Dequeísmo**: «pensar» no lleva «de» ante una subordinada con «que». No se considera correcto en la lengua culta.',
            'Pienso que': 'La forma normativa, adecuada a la voz del autor en un texto formal.',
            'A mi abuelo le recuerdo': '**Leísmo** de persona, masculino y singular: se admite en la norma culta. También sería correcto «lo recuerdo».',
            'se admite': 'Etiqueta normativa: la forma es correcta, aunque exista otra («lo»). No hay nada que corregir.',
            'cuando fui más mayor': '«Más mayor» con el sentido de edad: admitido. No sería válido como comparativo de «grande».',
            'detrás mío': 'Adverbio + posesivo: muy frecuente en la lengua oral de muchas zonas; en un texto cuidado se recomienda «detrás de mí».',
            'se prefiere': 'Etiqueta de preferencia, no de condena: orienta la elección en el registro formal.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Por qué no corrige Beatriz las frases de Remedios?', options: ['Porque las formas son normativas.', 'Porque el diálogo reproduce la voz del personaje.', 'Porque el autor se niega a cambiarlas.'], answer: 1, why: '«Si la corriges, deja de ser ella»: en el diálogo, la variedad del personaje es parte de la obra.', en: 'Why does the editor leave the grandmother’s lines alone?' },
            { prompt: '¿Qué distingue Beatriz cuando dice «los rechaza en la norma culta, que no es lo mismo»?', options: ['Lo normativo de lo gramatical.', 'Lo oral de lo escrito.', 'El español de España del de América.'], answer: 0, why: 'Que el DPD desaconseje una forma no la convierte en agramatical: «los persona» sí lo sería.', en: 'What distinction does she draw?' },
            { prompt: '¿Qué cambio de la nota del autor acepta Ramiro sin discutir?', options: ['«le recuerdo» por «lo recuerdo».', '«pienso de que» por «pienso que».', '«detrás mío» por «detrás de mí».'], answer: 1, why: 'Dice «Lo acepto» al dequeísmo; en cambio, defiende «le recuerdo», que además se admite.', en: 'Which change does the author accept straight away?' },
          ] },
        ] },
        { title: 'Revisar o mantener · Revise or keep', mascot: '/brand/mascot/kneeling.webp', coach: '¿Quién habla aquí? Who is speaking here?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno clasifica cada frase del manuscrito y dice quién habla en ella.', self: 'Clasifica cada frase del manuscrito. Fíjate en quién habla: Remedios o el autor. (Who is speaking: the character or the author?)' } },
          { kind: 'classify', title: 'Las pruebas de imprenta · The proofs', categories: [
            { id: 'mantener', label: 'MANTENER: VOZ DEL PERSONAJE', tone: 'orange' },
            { id: 'revisar', label: 'REVISAR: TEXTO FORMAL', tone: 'teal' },
            { id: 'valida', label: 'VÁLIDA EN CUALQUIER TEXTO', tone: 'violet' },
          ], items: [
            { text: 'Remedios: «¿Ya llegastes, hijo?».', answer: 'mantener', why: 'Desinencia -stes, no normativa, pero es el habla del personaje.' },
            { text: 'Nota del autor: «Hubieron veranos en que no llovió nunca».', answer: 'revisar', why: 'Voz del autor en un texto formal: «Hubo veranos…».' },
            { text: 'Nota del autor: «Dudo que mi abuela leyera nunca una novela».', answer: 'valida', why: '«Dudar que» y «dudar de que» son correctas.' },
            { text: 'Remedios: «Con la calor no se puede ni respirar».', answer: 'mantener', why: 'Femenino popular de «calor»: caracteriza al personaje.' },
            { text: 'Nota del autor: «Estoy seguro que la reconocerán».', answer: 'revisar', why: 'Queísmo en un texto formal: «Estoy seguro de que…».' },
            { text: 'Nota del autor: «A mi padre le vi llorar al leer el primer capítulo».', answer: 'valida', why: 'Leísmo de persona masculino singular: admitido.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Juzgar con precisión', coach: 'Error, variante, norma o registro. Mistake, variant, norm or register.',
      steps: [
        { title: 'En la escala · On the scale', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase y la sitúa en la escala. Tú preguntas: «¿Quién la diría y dónde?».', self: 'Lee cada frase y sitúala en la escala. Pregúntate quién la diría y dónde. (Who would say it, and where?)' } },
          { kind: 'classify', title: 'Cinco casillas · Five boxes', categories: [
            { id: 'agram', label: 'AGRAMATICAL', tone: 'neutral' },
            { id: 'inadec', label: 'GRAMATICAL, PERO INADECUADA', tone: 'blue' },
            { id: 'nonorm', label: 'NO NORMATIVA', tone: 'orange' },
            { id: 'registro', label: 'SEGÚN REGISTRO', tone: 'violet' },
            { id: 'norma', label: 'NORMA CULTA', tone: 'teal' },
          ], items: [
            { text: 'Las editora revisaron el capítulo.', answer: 'agram', why: 'Rompe la concordancia del artículo con el nombre: ninguna variedad lo produce.' },
            { text: 'En el bar, a un amigo: «Procedo a efectuar el abono de las consumiciones».', answer: 'inadec', why: 'Gramatical, pero el registro administrativo choca con la situación.' },
            { text: 'Ayer andé tres kilómetros sin parar.', answer: 'nonorm', why: 'Indefinido regularizado: la forma culta es «anduve».' },
            { text: 'La dije a Marta que trajera las pruebas.', answer: 'nonorm', why: 'Laísmo: no se admite en la norma culta («Le dije»).' },
            { text: 'Se sentó delante mío en la presentación.', answer: 'registro', why: 'Frecuente en la lengua oral; en un texto cuidado, «delante de mí».' },
            { text: 'A Ramiro le vi en la feria del libro.', answer: 'norma', why: 'Leísmo de persona masculino singular: admitido.' },
            { text: 'Se me olvidaron las pruebas en el tren.', answer: 'norma', why: 'Orden normativo: «se» antes de «me».' },
          ] },
        ] },
        { title: 'Lo que dice la norma · What the norm says', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Elige · Choose', items: [
            { prompt: '¿Qué forma es la normativa en un informe?', options: ['Hubieran dos reclamaciones esta semana.', 'Hubieron dos reclamaciones esta semana.', 'Hubo dos reclamaciones esta semana.'], answer: 2, why: '«Haber» impersonal va en singular en la norma culta, en cualquier tiempo y modo: «hubo», «hubiera».', en: 'Impersonal “haber” in a formal report.' },
            { prompt: '¿Cuál de estas etiquetas expresa el juicio más fuerte?', options: ['no se considera correcto en la norma culta', 'se prefiere', 'se desaconseja'], answer: 0, why: 'La escala va de la preferencia («se prefiere») a la recomendación en contra («se desaconseja») y al rechazo («no se considera correcto»).', en: 'Which label is the strongest?' },
            { prompt: '¿Qué uso de «más mayor» NO se admite?', options: ['Mi abuela está más mayor desde el invierno.', 'Este problema es más mayor que el anterior.', 'Ya eres más mayor y puedes ir solo.'], answer: 1, why: 'Como comparativo de «grande», «mayor» no admite «más». Con el sentido de edad, sí.', en: 'Which use is not admitted?' },
            { prompt: '«Delante suya» en lugar de «delante de ella»: ¿qué dice la norma?', options: ['Se rechaza aún más que el posesivo masculino.', 'Es igual de aceptable que «delante de ella».', 'Es la forma recomendada en textos formales.'], answer: 0, why: 'El posesivo tras adverbio ya se evita en el uso cuidado; en femenino («suya», «mía») se rechaza con más fuerza.', en: 'What about the feminine possessive after an adverb?' },
            { prompt: 'Quieres saber si una palabra lleva en el diccionario una marca como «coloq.» o «rur.». ¿Qué consultas?', options: ['Un manual de ortografía.', 'El DLE, que incluye marcas de uso y de países.', 'Solo la FundéuRAE.'], answer: 1, why: 'El DLE recoge las marcas de uso (coloq., vulg., rur.) y las geográficas.', en: 'Where do usage marks appear?' },
          ] },
        ] },
        { title: 'La nota del autor · The author’s note', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases de la nota del autor, un texto formal. Tu alumno decide si cada una puede publicarse así y, si no, elige la corrección.', self: 'Son frases de la nota del autor, un texto formal. ¿Pueden publicarse así? Si no, elige la corrección. (Can it be published as it is?)' } },
          { kind: 'fix', title: '¿Se publica así? · Publish as it is?', items: [
            { sentence: 'Estoy seguro que los lectores reconocerán a Remedios.', ok: false, options: ['Estoy de seguro que los lectores reconocerán a Remedios.', 'Estoy seguro de que los lectores reconocerán a Remedios.', 'Estoy seguro de los lectores que reconocerán a Remedios.'], answer: 1, why: 'Queísmo: «estar seguro» rige «de» («estar seguro de algo»).' },
            { sentence: 'Hubieron muchas tardes en que la escuché contar historias.', ok: false, options: ['Hubieran muchas tardes en que la escuché contar historias.', 'Habían muchas tardes en que la escuché contar historias.', 'Hubo muchas tardes en que la escuché contar historias.'], answer: 2, why: '«Haber» impersonal en singular, en cualquier tiempo: «hubo», no «hubieron» ni «habían».' },
            { sentence: 'A mi padre le debo también muchas palabras del libro.', ok: true, why: 'Aquí no hay leísmo: «le» es complemento indirecto (deber algo a alguien). Es la forma normal.' },
            { sentence: 'Mi madre, que ya está más mayor, leyó el primer borrador.', ok: true, why: '«Más mayor» con el sentido de edad se admite.' },
            { sentence: 'La calor de agosto entraba por las rendijas de la puerta.', ok: false, options: ['Lo calor de agosto entraba por las rendijas de la puerta.', 'La calor de agosto entraba por las rendijas de la puerta, como decía mi abuela.', 'El calor de agosto entraba por las rendijas de la puerta.'], answer: 2, why: 'En la voz del autor, la norma: «calor» es masculino.' },
          ] },
        ] },
        { title: 'Iván pregunta · Iván asks', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Narración, diálogo y contracubierta · Narration, dialogue and back cover', lines: [
            { who: 'Iván', text: 'En la narración, el narrador dice: «Aquella tarde ___ más gente que nunca en la plaza». ¿Qué pongo?', options: ['hubieron', 'habían', 'había'], answer: 2, why: 'El narrador escribe en registro formal: «haber» impersonal en singular.' },
            { who: 'Beatriz', text: 'Eso. ¿Y la frase de Remedios de la página doce? Déjala como la escribió Ramiro.' },
            { who: 'Iván', text: 'Entonces queda así: «¡Ay, que ___ cayó la jarra!».', options: ['se me se', 'me se', 'se me'], answer: 1, why: 'Es el diálogo de Remedios, que dice «me se cayó» en la página doce: se respeta la forma que eligió el autor para su voz. «Se me» sería normativo, pero borraría el rasgo.' },
            { who: 'Beatriz', text: 'Sí. Ahora la nota de prensa: el autor no habla, hablamos nosotros.' },
            { who: 'Iván', text: '«Ramiro Cuesta ___ su abuela es el modelo del personaje».', options: ['explica de que', 'explica que', 'explica a que'], answer: 1, why: '«Explicar algo»: la subordinada es complemento directo y no lleva preposición. «Explica de que» sería dequeísmo.' },
            { who: 'Beatriz', text: 'Perfecto. Y la contracubierta, con mucho cuidado, que es lo primero que se lee.' },
            { who: 'Iván', text: '«Una novela sobre la memoria que dejamos ___».', options: ['detrás nuestro', 'detrás de nosotros', 'detrás nuestra'], answer: 1, why: 'Texto cuidado: adverbio + «de» + pronombre. «Detrás nuestra», con posesivo femenino, es la opción más censurada.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena la versión normativa · Build the standard version', items: [
            { tiles: ['Había', 'muchas', 'personas', 'en', 'la', 'feria.'], accept: ['Había muchas personas en la feria.'], en: 'There were a lot of people at the fair (impersonal “haber” stays singular).' },
            { tiles: ['Se', 'me', 'cayó', 'la', 'jarra', 'de', 'agua.'], accept: ['Se me cayó la jarra de agua.'], en: 'I dropped the water jug (“se” comes before “me”).' },
            { tiles: ['Estoy', 'seguro', 'de', 'que', 'lo', 'entenderán.'], accept: ['Estoy seguro de que lo entenderán.'], en: 'I’m sure they will understand it (“estar seguro de algo” keeps its “de”).' },
          ] },
        ] },
        { title: 'Del habla al texto formal · From speech to formal text', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno pasa cada frase al registro formal y explica qué ha cambiado y por qué.', self: 'Pasa cada frase oral al registro formal de un informe y explica qué cambias. (Make it fit a formal report.)' } },
          { kind: 'rewrite', title: 'Para el informe · For the report', items: [
            { prompt: 'Me se olvidaron las pruebas en la editorial.', instruction: 'Escribe la versión normativa.', accept: ['Se me olvidaron las pruebas en la editorial'] },
            { prompt: 'Habían varios errores en la página doce.', instruction: 'Escribe la versión normativa.', accept: ['Había varios errores en la página doce', 'En la página doce había varios errores'] },
            { prompt: 'Me acuerdo que mi abuela cantaba mientras cosía.', instruction: 'Corrige el queísmo (o usa «recordar»).', accept: ['Me acuerdo de que mi abuela cantaba mientras cosía', 'Recuerdo que mi abuela cantaba mientras cosía'] },
            { prompt: 'La dije a la traductora que esperara.', instruction: 'Corrige el laísmo.', accept: ['Le dije a la traductora que esperara', 'Le dije a la traductora que esperase'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno escribe una frase de su propia habla que la norma culta no recomienda y la reformula para un correo formal.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Dudas con lengua', coach: '¿Qué juicio hace la presentadora? What judgment does the host make?',
      steps: [
        { title: 'Un pódcast sobre el idioma · A language podcast', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo el consejo general. Segunda escucha: tu alumno anota cada forma que se comenta y qué juicio recibe.', self: 'Escucha una vez para el consejo general. En la segunda, anota cada forma que se comenta y qué juicio recibe: ¿agramatical, no normativa, según registro? (Note each form and its verdict.)' } },
          { kind: 'listen', title: 'Dudas con lengua', channel: 'PÓDCAST · DUDAS CON LENGUA', src: '/audio/grammar-live/514.mp3',
            before: 'Una oyente pregunta si debe corregir a sus compañeros cuando dicen «habían muchas personas». ¿Qué crees que le van a responder? (Should she correct her colleagues?)',
            gist: { prompt: '¿Qué aconseja la presentadora? · What does the host advise?', options: ['Adaptar la forma al contexto: en la conversación no hace falta corregir; en un texto formal, la forma normativa.', 'Usar siempre la forma más frecuente.', 'Corregir a los compañeros siempre que se equivoquen.'], answer: 0, why: '«En una conversación en el pasillo, nadie tiene que corregir a nadie; en un informe […] conviene el singular».', en: 'She separates conversation from formal writing.' },
            details: [
              { prompt: '¿Por qué dice que «habían muchas personas» no es agramatical?', options: ['Porque la RAE ya la acepta.', 'Porque la usan con naturalidad muchísimos hablantes y responde a una lógica.', 'Porque solo se usa en América.'], answer: 1, why: '«La usan con total naturalidad millones de hablantes […] y responde a una lógica clara».', en: 'Why is it not ungrammatical?' },
              { prompt: '¿Qué lógica tiene esa concordancia, según ella?', options: ['Se interpreta «personas» como sujeto.', 'Se confunde «haber» con «tener».', 'Se imita al inglés.'], answer: 0, why: '«Se interpreta “personas” como sujeto».', en: 'What is the logic behind the plural?' },
              { prompt: '¿Qué dice de «detrás mío»?', options: ['Que es agramatical.', 'Que es frecuente en el habla espontánea, pero en un texto cuidado se prefiere «detrás de mí».', 'Que es la única forma correcta.'], answer: 1, why: 'Lo sitúa en el habla espontánea y recomienda «detrás de mí» en un texto cuidado.', en: 'What does she say about “detrás mío”?' },
              { prompt: '¿Dónde recomienda consultar las dudas?', options: ['En las redes sociales.', 'En el diccionario de dudas o en la FundéuRAE.', 'En un traductor automático.'], answer: 1, why: '«Si dudas, consulta el diccionario de dudas o la FundéuRAE».', en: 'Where should you check?' },
            ],
            transcript: 'Bienvenidos a «Dudas con lengua». Soy Lucía Barrera y hoy respondo a Marisol, que trabaja en una oficina de atención al público. Nos cuenta que sus compañeros dicen «[[habían muchas personas|orange]]» y que no sabe si corregirlos. Vamos por partes. Esa frase no es agramatical: la usan con total naturalidad millones de hablantes, en buena parte de América y en algunas zonas de España, y responde a una lógica clara: se interpreta «personas» como sujeto. Ahora bien, la norma culta, tanto el Diccionario panhispánico de dudas como la Nueva gramática, recomienda mantener «haber» impersonal en singular: «[[había muchas personas|teal]]», «[[hubo problemas|teal]]». Así que, en una conversación en el pasillo, nadie tiene que corregir a nadie; en un informe o en un correo a la dirección, conviene el singular. Otro caso que nos llega mucho: «[[detrás mío|violet]]». Es muy frecuente en el habla espontánea de muchos lugares, pero en un texto cuidado se prefiere «[[detrás de mí|teal]]». En cambio, «[[me se cayó|orange]]» se asocia al habla popular y conviene evitarlo siempre que el registro sea formal. Mi consejo, Marisol: antes de decir «está mal», pregúntate dónde, quién y para qué. Y si dudas, consulta el diccionario de dudas o la FundéuRAE. Hasta la próxima semana.',
            reply: { teacher: 'Tú eres Marisol y llamas al pódcast con otra duda: un compañero escribió «hubieron quejas» en un informe. Tu alumno es Lucía y te responde con los cuatro juicios.', self: 'Responde en voz alta a Marisol con tus palabras, en tres frases: qué es la forma, qué dice la norma y qué debe hacer en un informe. (What it is, what the norm says, what to do.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Norma, uso y respeto', coach: 'Argumenta sin dogmas. Argue without dogma.',
      steps: [
        { title: 'Debatir con matices · A nuanced debate', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con argumentos. Si dice «está mal» sin matizar, tú preguntas «¿Mal según qué y para quién?» y tu alumno reformula.', self: 'Lee cada pregunta y responde en voz alta durante uno o dos minutos. Evita «está mal» sin matices: di qué juicio haces. (Say which judgment you are making.)' } },
          { kind: 'talk', cards: [
            { q: 'Iván dice: «Lo correcto es lo correcto: hay que corregirlo todo, también los diálogos». ¿Qué le respondes? · Answer the trainee.', followUps: ['¿Hay algún caso en que sí corregirías un diálogo?', '¿Qué perdería la novela si se normalizara el habla de Remedios?'], phrases: ['Una cosa es…, y otra…', 'La norma culta orienta [[el texto formal|teal]], no…', 'Si la corriges, el personaje…'], hint: 'Separa la voz del autor de la voz de los personajes y usa los cuatro juicios.', example: 'Entiendo la idea, pero una cosa es el texto del autor y otra la voz de un personaje. La norma culta orienta la narración y la nota del autor; en el diálogo, «me se cayó» o «la calor» no son descuidos, sino el retrato de cómo habla Remedios. Solo corregiría un diálogo si hubiera un error tipográfico o una forma que el personaje no usaría nunca.' },
            { q: 'Eres Beatriz: explícale a Ramiro por qué cambias «detrás mío» en la nota del autor, pero no en el diálogo. · Explain the decision.', followUps: ['¿Qué obra citarías?', '¿Y si Ramiro insiste en mantenerlo?'], phrases: ['[[Se prefiere|teal]]…', 'En la lengua oral es muy frecuente…', 'Según el Diccionario panhispánico de dudas…'], hint: 'Usa la etiqueta exacta: preferencia, no condena.', example: 'Mira, Ramiro, «detrás mío» es muy frecuente en la lengua oral y nadie lo encuentra raro en una conversación. Pero las obras académicas recomiendan «detrás de mí» en los textos cuidados, y la nota del autor lo es. En el diálogo de Remedios, en cambio, lo dejamos: ahí hablas tú a través de ella, no como autor.' },
            { q: '¿Qué formas de tu propia variedad, o de tu lengua materna, se consideran no normativas? ¿Las usas? ¿Dónde? · Your own variety.', followUps: ['¿Te han corregido alguna vez? ¿Cómo te sentiste?', '¿Cambias de forma según con quién hablas?', '¿Hay alguna forma que ya no te parece «incorrecta»?'], phrases: ['En mi zona se dice…', 'En casa digo…, pero en el trabajo…', 'Se considera…, aunque…'], hint: 'Habla de variación situacional: cuándo cambias y por qué.', example: 'En mi ciudad mucha gente dice «hubieron problemas», y yo lo digo con mis amigos sin pensarlo. Pero en un informe del trabajo escribo «hubo problemas», porque sé que es la forma recomendada. No me siento falso: simplemente ajusto el registro, como cuando me pongo ropa distinta para una boda.' },
            { q: 'Un compañero dice «me se olvidó» en una reunión con clientes. ¿Lo corriges? ¿Cuándo, cómo y si hace falta? · Would you correct a colleague?', followUps: ['¿Es distinto si te pide que revises un texto suyo?', '¿Qué efecto tiene corregir en público?'], phrases: ['No me corresponde…', 'Si me lo pidiera…', 'Con mucho tacto, le diría que…'], hint: 'Piensa en la aceptabilidad social y en la relación, no solo en la norma.', example: 'En la reunión, no: corregir en público humilla y no aporta nada a la conversación. Si después me pidiera que revisara un correo o una presentación, le diría con tacto que en un texto formal es mejor «se me olvidó», y le explicaría que no es un error de gramática, sino una forma que la norma considera popular.' },
            { q: '¿Deberían las Academias aceptar lo que dice la mayoría, como «habían muchas personas»? Toma partido y concede algo al otro lado. · Should usage decide the norm?', followUps: ['¿Qué ganaríamos y qué perderíamos?', '¿Conoces algún uso que antes se censuraba y hoy se admite?', '¿Quién debería decidir la norma?'], phrases: ['Es cierto que…, pero…', 'La norma no es…, sino…', 'Hoy en día [[se admite|teal]]…'], hint: 'Distingue describir el uso (la gramática lo hace) y recomendar un estándar común.', example: 'Es cierto que la norma acaba siguiendo el uso culto: el leísmo de persona masculino, por ejemplo, se admite. Pero creo que mantener «había» en el registro formal tiene sentido, porque ofrece un estándar común a todos los países. Lo importante es que la gramática describa la variación sin desprecio y que la recomendación se limite al uso cuidado.', next: 'Ahora, la última tarjeta.' },
            { q: 'Eres profesor de español: un alumno extranjero oye «habían muchas personas» en su trabajo y pregunta si debe decirlo. ¿Qué le aconsejas? · Advise a learner.', followUps: ['¿Y si quiere integrarse en ese ambiente?', '¿Qué forma le pedirías en un examen?'], phrases: ['Depende de…', 'En un examen o en un texto formal…', 'Si lo oyes, no es un error de comprensión…'], hint: 'Combina norma, registro y objetivos del alumno.', example: 'Le diría que lo que oye es real y que no debe pensar que sus compañeros hablan mal. Pero, como aprendiz, le conviene dominar primero la forma recomendada, «había muchas personas», porque es la que se espera en un examen, en una entrevista o en un texto. Después podrá decidir cómo habla con sus compañeros.', teacher: 'Tú haces de alumno extranjero e insistes: «Pero si todos lo dicen…». Tu alumno matiza sin descalificar a nadie.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú dices frases con formas no normativas y tu alumno decide, para cada una, si la corregiría en un diálogo, en un correo informal y en un informe.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿has dicho qué tipo de juicio haces o solo «está mal»? (Did you name the judgment?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El informe de corrección', coach: 'Decide, justifica y respeta. Decide, justify, respect.',
      steps: [
        { title: 'Informe para el autor · Report for the author', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos el texto: ¿cada cambio tiene una razón? ¿Se respeta la voz de los personajes?', self: 'Escribe el informe y toca «Revisar mi texto». Después comprueba que cada cambio tiene una razón y que no corriges las voces de los personajes. (Every change needs a reason.)' } },
          { kind: 'write', title: 'Informe de corrección · Proofreading report', situation: 'Eres Beatriz Lozano. Escribes a Ramiro Cuesta para explicarle qué formas vais a revisar en la nota del autor y cuáles mantenéis en los diálogos de su novela. (Write to the author: what you will change, what you will keep, and why.)', task: [
            'Explica el criterio general: voz de los personajes frente a texto formal del autor.',
            'Enumera al menos dos formas que mantienes en los diálogos y di por qué.',
            'Propón al menos tres cambios en la nota del autor, con la forma normativa y una razón.',
            'Cita al menos una obra de referencia (DPD, Nueva gramática, FundéuRAE…) con su etiqueta exacta.',
            'Menciona al menos una forma que no corriges porque la norma la admite.',
          ], starters: ['Te envío el informe de corrección…', 'El criterio que hemos seguido es…', 'En los diálogos mantenemos…', 'En la nota del autor proponemos…', 'No tocamos…, porque…', 'Si alguna decisión te parece discutible…'],
            words: ['norma culta', 'variante', 'no normativo', 'se admite', 'se prefiere', 'se desaconseja', 'registro', 'voz del personaje', 'dequeísmo', 'haber impersonal'],
            model: 'Querido Ramiro: Te envío el informe de corrección de «El verano de las cigüeñas». El criterio que hemos seguido Iván y yo es sencillo: en los diálogos respetamos la voz de cada personaje; en la narración y en la nota del autor aplicamos la norma culta. Por eso, en las intervenciones de Remedios mantenemos «me se cayó», «la calor», «andé» y «habían muchas personas»: son rasgos del habla popular que construyen al personaje, no descuidos tuyos. En la nota del autor, en cambio, proponemos estos cambios. «Pienso de que» pasa a «pienso que», porque el dequeísmo no se considera correcto en la lengua culta. «Hubieron muchas tardes» pasa a «hubo muchas tardes», ya que tanto el Diccionario panhispánico de dudas como la Nueva gramática recomiendan mantener en singular el «haber» impersonal. Y «detrás mío» pasa a «detrás de mí», la forma que se prefiere en los textos cuidados. No tocamos «A mi abuelo le recuerdo», porque el leísmo de persona masculino singular se admite, ni «cuando fui más mayor», ya que ahí «mayor» se refiere a la edad. Si alguna decisión te parece discutible, la comentamos el jueves en la editorial. Un abrazo, Beatriz',
            minWords: 160,
            checks: [
              { label: 'Una obra de referencia (DPD, Nueva gramática, FundéuRAE, Libro de estilo…)', pattern: '(?<!\\p{L})(?:DPD|NGLE|Diccionario\\s+panhisp[aá]nico|Nueva\\s+gram[aá]tica|Fund[eé]u(?:RAE)?|Libro\\s+de\\s+estilo|RAE)(?!\\p{L})', tip: 'Cita la obra: «según el Diccionario panhispánico de dudas…».' },
              { label: 'Una mención a los diálogos o a la voz del personaje', pattern: '(?<!\\p{L})(?:di[aá]logos?|voz|personajes?)(?!\\p{L})', tip: 'Explica qué haces con la voz de Remedios en los diálogos.' },
              { label: 'Una forma normativa propuesta (había, hubo, se me, detrás de mí, pienso que…)', pattern: '(?<!\\p{L})(?:hab[ií]a|hubo|se\\s+me|detr[aá]s\\s+de\\s+m[ií]|pienso\\s+que|anduve|el\\s+calor)(?!\\p{L})', tip: 'Da la forma normativa que propones para la nota del autor.' },
              { label: 'Una forma admitida que no corriges (se admite, le recuerdo, más mayor…)', pattern: '(?<!\\p{L})(?:se\\s+admite|admitid[oa]|no\\s+tocamos|se\\s+acepta)(?!\\p{L})', tip: 'Señala algo que no cambias porque la norma lo admite.' },
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
            { tone: 'neutral', label: 'AGRAMATICAL', formula: 'ninguna variedad nativa lo produce', example: 'Los niño come.', caption: 'Error de aprendiz o lapsus: se corrige siempre.', en: 'Outside the grammar of every native variety: a learner’s error or a slip, always corrected.' },
            { tone: 'orange', label: 'NO NORMATIVA', formula: 'real y sistemática, pero la norma culta no la recomienda', example: 'Habían muchas personas · me se cayó · pienso de que · la dije · andé', caption: 'Se revisa en el texto formal; puede mantenerse en una voz ajena.', en: 'Real, systematic usage that the norm does not recommend: revise it in formal writing, keep it in someone else’s voice.' },
            { tone: 'violet', label: 'SEGÚN REGISTRO O ZONA', formula: 'admitida, o frecuente y solo evitada en el uso cuidado', example: 'detrás mío (oral) · le vi (admitido) · está más mayor (edad)', caption: 'Lee bien la etiqueta: «se prefiere» no es «incorrecto».', en: 'Admitted, or common and only avoided in careful use: read the label precisely, since “preferred” is not “incorrect”.' },
            { tone: 'teal', label: 'NORMA CULTA', formula: 'la referencia común para textos formales', example: 'Había muchas personas · se me cayó · detrás de mí · anduve', caption: 'Segura en cualquier texto formal de cualquier país.', en: 'The shared reference for formal writing, safe in any country.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Antes de decir «está mal», pregunta **¿mal según qué y para quién?** ¿Lo dice algún hablante nativo? ¿Qué dice la norma, con qué etiqueta? ¿Quién habla en este texto y para quién?', en: 'Before saying “that’s wrong”, ask: wrong by what standard, and for whom? Does any native speaker say it? What exactly does the norm say, with which label? Who is speaking in this text, and to whom?' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'En un acta oficial: «Ayer ___ dos incidencias en el almacén».', options: ['hubieron', 'hubo', 'habían'], answer: 1, why: '«Haber» impersonal en singular en un texto formal.', en: 'An official record: impersonal “haber”.' },
            { prompt: '«Mis nietos ya están más mayores». ¿Qué juicio es el correcto?', options: ['Es no normativo en cualquier sentido.', 'Es válido: «mayor» se refiere a la edad.', 'Es agramatical.'], answer: 1, why: 'Con el sentido de edad, «más mayor» se admite.', en: 'Age meaning of “mayor”.' },
            { prompt: '«Me alegro que hayas venido». En un discurso formal, ¿qué haces?', options: ['Lo cambias a «Me alegro de de que hayas venido».', 'Lo dejas: «alegrarse» no lleva preposición.', 'Lo cambias a «Me alegro de que hayas venido».'], answer: 2, why: 'Queísmo: «alegrarse de algo». Otra opción normativa: «Me alegra que hayas venido».', en: 'A formal speech: “alegrarse de algo”.' },
            { prompt: '¿Qué frase es agramatical (y no solo no normativa)?', options: ['Se me rompieron los vasos.', 'Me se rompió el vaso.', 'Se me rompió los vaso.'], answer: 2, why: '«Los vaso» rompe la concordancia entre artículo y nombre: ninguna variedad lo produce. «Me se rompió» es no normativa, pero real.', en: 'Which one breaks the grammar, not just the norm?' },
            { prompt: 'Un novelista hace decir a un personaje «¿Qué dijistes?». ¿Qué debe hacer la correctora?', options: ['Corregirlo: es agramatical.', 'Mantenerlo si es coherente con el personaje; en la narración, «dijiste».', 'Cambiarlo a «dijisteis».'], answer: 1, why: 'Es una forma no normativa, pero real: en un diálogo puede caracterizar al personaje.', en: 'A character’s line in a novel.' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Del diálogo a la voz del narrador. From dialogue to narration.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: el narrador cuenta en estilo indirecto lo que dijo Remedios. Tu alumno reescribe cada frase en la voz del narrador, con la norma culta.', self: 'El narrador cuenta lo que dijo Remedios. Reescribe cada frase en su voz, que sigue la norma culta. (Narrator’s voice: standard forms.)' } },
          { kind: 'rewrite', title: 'Lo que contó Remedios · What Remedios said', items: [
            { prompt: 'Remedios: «Habían muchas personas en la feria».', instruction: 'Empieza por «Remedios contó que».', accept: ['Remedios contó que había muchas personas en la feria', 'Remedios contó que en la feria había muchas personas'] },
            { prompt: 'Remedios: «Me se cayó el cántaro en el pozo».', instruction: 'Empieza por «Remedios contó que» (ojo: ahora es «a ella»).', accept: ['Remedios contó que se le cayó el cántaro en el pozo', 'Remedios contó que se le había caído el cántaro en el pozo'] },
            { prompt: 'Remedios: «Andé hasta el río con la calor».', instruction: 'Empieza por «Remedios contó que».', accept: ['Remedios contó que anduvo hasta el río con el calor', 'Remedios contó que había andado hasta el río con el calor'] },
          ] },
        ] },
        { title: 'Ampliación · Ultracorrección y norma policéntrica', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1. Ultracorrección.** Quien quiere evitar una forma estigmatizada a veces produce otra no normativa: por miedo a pronunciar «-ao» por «-ado», alguien dice «bacalado» por «bacalao». Es un caso clásico de ultracorrección. **2. Norma policéntrica.** La norma culta no tiene una sola capital: lo culto en México, Bogotá, Madrid o Buenos Aires no es idéntico. «Ustedes» como plural de confianza es la norma en América, igual que «vosotros» en la mayor parte de España; ninguna de las dos es «más correcta».', en: 'For strong students or spare time. Hypercorrection: trying to avoid a stigmatized form, a speaker produces another non-standard one (“bacalado” instead of “bacalao”, out of fear of dropping the d in “-ado”). The norm is pluricentric: educated usage in Mexico, Bogotá, Madrid or Buenos Aires is not identical, and “ustedes” as the familiar plural in Latin America is as standard as “vosotros” in most of Spain.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: 'Alguien dice «Fui a comer bacalado» para hablar «bien». ¿Qué fenómeno es?', options: ['Agramaticalidad sintáctica.', 'Ultracorrección: evita una forma que cree incorrecta y produce otra.', 'Variante admitida por la norma.'], answer: 1, why: '«Bacalao» es la forma correcta; añadir la «d» es corregir de más.', en: 'Correcting too much creates a new error.' },
            { prompt: 'Una editorial de Bogotá corrige «ustedes saben» por «vosotros sabéis» en una novela colombiana. ¿Qué opinas?', options: ['Es un error de criterio: «ustedes» es la norma culta en América.', 'Da igual: son formas no normativas.', 'Bien hecho: «vosotros» es la forma culta.'], answer: 0, why: 'La norma es policéntrica: «ustedes» como plural de confianza es lo normal y culto en América.', en: 'The norm has more than one centre.' },
            { prompt: '¿Qué afirmación describe mejor la norma culta del español?', options: ['Es lo que dice la mayoría de los hablantes.', 'Es la forma de hablar de Madrid.', 'Es un conjunto de usos cultos compartidos, con variantes cultas propias de cada zona.'], answer: 2, why: 'Las Academias describen una norma panhispánica con variantes cultas regionales; no coincide ni con una ciudad ni con la mayoría.', en: 'How is the standard actually defined?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca en el DPD una forma que haya oído hace poco y explica qué etiqueta tiene y qué haría con ella en un diálogo y en un informe.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 215 · Voseo, tuteo y ustedeo: cambios pragmáticos de registro', text: 'Hoy has aprendido a separar error, variante y norma, y a elegir la forma según el texto y la situación. En la clase 215 aplicas esa mirada a las formas de tratamiento: el voseo, el tuteo y el ustedeo son usos legítimos de distintas zonas, y cambiar de una a otra dice mucho sobre la relación entre las personas.', en: 'Today you learned to separate mistakes, variants and the norm, and to choose a form to fit the text and the situation. Class 215 applies that view to forms of address: voseo, tuteo and ustedeo are each legitimate in different regions, and switching between them says a lot about the relationship between speakers.', href: '/gramatica/voseo-tuteo-y-ustedeo-cambios-pragmaticos', label: 'Ir a la clase 215' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Los niño come”, “Habían muchas personas” y “Iba detrás mío”?». Respuesta esperada: agramatical; no normativa pero real y sistemática; frecuente en la lengua oral y evitada en el texto cuidado. Tarea: el informe de corrección de Escribir sobre un texto real con diálogos.' },
        ] },
      ],
    },
  ],
};
