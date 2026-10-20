import type { LiveLesson } from '../types';

/**
 * Lesson 516 · C2 · Variación regional del pasado perfecto y evidencialidad (course unit G216).
 * Builds on G045 (lesson 141: perfecto compuesto), G047 (lesson 142: indefinido), G051 (lesson 351:
 * the A2 first look at «hoy he comido / hoy comí») and G087 (lesson 147: pluscuamperfecto). Those
 * forms are not re-taught. C2 step, framed as the Nueva gramática (RAE-ASALE, §23) frames it: the
 * compound perfect as antepresente (hodiernal use, periods that include now, experience, continuity);
 * in most of Spain (central-northern peninsular norm) it covers today and «este año»; in much of
 * America and in Canarias, Galicia and Asturias the simple preterite also covers today, and the
 * compound concentrates on continuing and experiential meanings. Andean usages (areas of Bolivia,
 * Peru, Ecuador) are given only as described tendencies: the pluperfect of discovery or surprise
 * («¡Había sido tarde!» ≈ resulta que es tarde) and of unwitnessed information. The goal is
 * recognition and appropriate choice for an audience, never one «correct» variety; quoted speech
 * keeps its variety. Ampliación: news perfect, «todavía no llegó», Andean compound for remote past.
 * Scene: Editorial Puente (Madrid) prepares «Voces del mismo idioma», an anthology of oral
 * testimonies, in a Spanish and an American edition. Marta Llorente (editor, Madrid), Valeria
 * Quispe (proofreader, Cusco), Ernesto Salgado (adapter, Monterrey). Escuchar: Valeria's voice
 * message (es-PE-CamilaNeural). Escribir: a style note for the proofreading team.
 */
export const lesson: LiveLesson = {
  id: 516,
  level: 'C2',
  title: 'Variación regional del pasado perfecto y evidencialidad',
  subtitle: 'Reconocer la variedad de un texto por sus pasados, adaptarlo a un público de España o de América e interpretar los matices evidenciales andinos.',
  legend: [
    { tone: 'blue', label: 'PERFECTO COMPUESTO · he terminado (antepresente: hoy, este año, experiencia, continuidad)' },
    { tone: 'orange', label: 'PERFECTO SIMPLE · terminé (tiempo cerrado; en gran parte de América, también hoy)' },
    { tone: 'violet', label: 'VALOR EVIDENCIAL O MIRATIVO · ¡había sido tarde! (discovery, unwitnessed information)' },
    { tone: 'teal', label: 'MARCO TEMPORAL · hoy, esta mañana, este año, hasta hoy (time frame)' },
  ],
  optionNotes: {
    'había sido': 'En el español general es un pasado anterior a otro pasado. Con valor de descubrimiento («¡Había sido tarde!») es una tendencia descrita en el español andino.',
    'habíamos hecho': 'Pluscuamperfecto: sitúa el hecho antes de otro pasado. Aquí no hay ningún pasado de referencia.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un mismo día, tres maneras de contarlo', coach: 'Ninguna variedad es la correcta. No variety is “the” correct one.',
      steps: [
        { title: 'Tres voces, un mismo día · Three voices, one day', blocks: [
          { kind: 'lead', text: 'Editorial Puente, en Madrid, prepara «Voces del mismo idioma», una antología de testimonios orales grabados en once países. Habrá **dos ediciones**: una para España y otra para América. El mismo lunes llegan tres mensajes sobre el último audio. Los tres hablan de algo ocurrido hoy, y los tres son español culto. Lo que cambia es la **variedad** y, en el tercero, **cómo sabe** quien habla lo que dice.', en: 'A Madrid publisher is preparing an anthology of oral testimonies in two editions, one for Spain and one for the Americas. Three messages about the same event arrive on the same day. All three are educated Spanish: what changes is the regional variety and, in the third one, how the speaker came to know what she says.' },
          { kind: 'guide', text: { teacher: 'Tú lees los tres mensajes. Tu alumno dice qué tiene de distinto cada uno y qué pistas da sobre quien escribe.', self: 'Lee los tres mensajes en voz alta. ¿Qué tienen de distinto? ¿Qué pistas dan sobre quien los escribe? (What clues does each one give?)' } },
          { kind: 'compare', title: 'El último audio · The last recording', columns: [
            { tone: 'blue', label: 'MARTA · Madrid', sentence: '[[Hoy|teal]] [[ha llegado|blue]] el último audio.', idea: 'Compuesto para un hecho de hoy: lo habitual en la mayor parte de España.', en: 'Compound perfect for something that happened today, the usual choice in most of Spain.' },
            { tone: 'orange', label: 'ERNESTO · Monterrey', sentence: '[[Hoy|teal]] [[llegó|orange]] el último audio.', idea: 'Simple para un hecho de hoy: lo habitual en México y en gran parte de América.', en: 'Simple preterite for the same event today, the usual choice in Mexico and much of Latin America.' },
            { tone: 'violet', label: 'VALERIA · Cusco', sentence: '¡El último audio [[había sido|violet]] de una hora!', idea: 'No es un pasado anterior: Valeria acaba de descubrirlo y le sorprende.', en: 'Not a “past before the past”: she has just found out how long it is, and it surprises her.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué mensaje sobre el audio de hoy es incorrecto?', options: ['Ninguno: son dos normas cultas.', 'El de Ernesto: «hoy llegó».', 'El de Marta: «hoy ha llegado».'], answer: 0, why: 'Para un hecho de hoy, el compuesto predomina en la mayor parte de España y el simple en gran parte de América. Las dos son normas cultas.', en: 'Both choices for “today” are educated norms; the difference is regional, not a matter of correctness.' },
            { prompt: '¿Qué quiere decir Valeria con «¡había sido de una hora!»?', options: ['Que antes duraba una hora y ahora menos.', 'Que lo acaba de comprobar y no lo esperaba.', 'Que la grabación se hizo antes que las demás.'], answer: 1, why: 'Es un pluscuamperfecto de descubrimiento o sorpresa (valor mirativo), descrito en el español andino: ‘resulta que dura una hora’.', en: 'In Andean Spanish, this pluperfect can mark a fresh discovery: “it turns out it’s an hour long”.' },
          ] },
        ] },
        { title: 'El antepresente y sus fronteras · The present perfect and its boundaries', mascot: '/brand/mascot/studying.webp', coach: '¿Incluye el ahora? Does the period include now?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PERFECTO COMPUESTO · ANTEPRESENTE', question: '¿El hecho está en un periodo que llega hasta ahora?', en: 'The academic grammar describes the compound perfect as an “antepresente”: a past event seen from a period that includes the moment of speaking. It has several readings: experience up to now, a state that continues, a present result, a recent or same-day event. Regions do not differ on the form; they differ on how far that “period including now” stretches, above all whether “today” counts.', formula: ['he · has · ha · hemos · habéis · han + participio', 'experiencia: ¿Has estado alguna vez en Cusco?', 'continuidad: Siempre he trabajado con autores jóvenes.', 'resultado o hecho reciente: Se ha perdido el archivo. · Ha llamado el traductor.'],
            meaning: 'Todas las variedades comparten el compuesto para la **experiencia** y la **continuidad**. La frontera regional está en los hechos **de hoy** (uso hodiernal) y de periodos como **esta semana** o **este año**: ahí la norma centro-norte peninsular prefiere el compuesto, y gran parte de América, el simple.',
            examples: [
              { es: '[[Esta mañana|teal]] [[ha llamado|blue]] el traductor de la edición portuguesa.', en: 'Same-day event with the compound: the usual pattern in most of Spain.' },
              { es: '[[Esta mañana|teal]] [[llamó|orange]] el traductor de la edición portuguesa.', en: 'Same-day event with the simple preterite: the usual pattern in much of Latin America.' },
              { es: 'Doña Eulalia [[siempre ha vivido|blue]] en el mismo barrio.', en: 'A state that continues up to now: compound in every variety.' },
            ] },
          { kind: 'table', title: '¿Qué forma es la habitual? · Which form is usual?', head: ['Situación', 'Mayor parte de España (norma centro-norte)', 'Gran parte de América · Canarias · Galicia y Asturias'], rows: [
            ['[[hoy|teal]], [[esta mañana|teal]], hace un rato (uso hodiernal)', 'Esta mañana [[han llegado|blue]] las pruebas.', 'Esta mañana [[llegaron|orange]] las pruebas.'],
            ['[[esta semana|teal]], [[este año|teal]] (periodo que incluye el ahora)', 'Este año la editorial [[ha publicado|blue]] seis libros.', 'Este año la editorial [[publicó|orange]] seis libros (también: ha publicado).'],
            ['ayer, el lunes pasado, en 2019 (tiempo cerrado)', 'Ayer [[llegaron|orange]] las pruebas.', 'Ayer [[llegaron|orange]] las pruebas.'],
            ['experiencia [[hasta ahora|teal]]', '¿[[Has estado|blue]] alguna vez en Cusco?', '¿[[Has estado|blue]] alguna vez en Cusco? · ¿Alguna vez [[estuviste|orange]] en Cusco?'],
            ['situación que sigue [[hasta hoy|teal]]', 'Siempre [[he trabajado|blue]] con autores jóvenes.', 'Siempre [[he trabajado|blue]] con autores jóvenes.'],
          ], note: 'Son **preferencias de uso**, no fronteras cerradas: dentro de cada zona hay variación, y las dos formas se entienden en todas partes. Con un tiempo cerrado (ayer, en 2019), la norma culta general es el simple.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Este año la editorial publicó seis libros». ¿Qué indica sobre quien lo escribe?', options: ['Que el año ya ha terminado.', 'Que no domina el compuesto.', 'Que probablemente no sigue la norma centro-norte peninsular.'], answer: 2, why: 'Con «este año», el simple es la opción más frecuente en gran parte de América y en Canarias, Galicia y Asturias. No delata ningún error ni que el año haya terminado.', en: 'With “este año”, the simple preterite points to a variety outside central-northern Spain, not to a mistake.' },
            { prompt: '¿En qué caso coinciden todas las variedades?', options: ['«Este año hemos editado poco».', '«Siempre he trabajado con autores jóvenes».', '«Hoy he recibido las pruebas».'], answer: 1, why: 'Una situación que sigue hasta hoy se expresa con compuesto en todas las variedades. Los hechos de hoy y de este año son justamente la zona de variación.', en: 'Continuity up to now takes the compound everywhere; “today” and “this year” are where varieties differ.' },
          ] },
        ] },
        { title: 'Elegir según el público · Choosing for the audience', mascot: '/brand/mascot/speaking.webp', coach: 'Adapta lo tuyo, respeta lo ajeno. Adapt your text, respect theirs.', blocks: [
          { kind: 'decide', title: '¿Compuesto o simple en un texto para otros? · Which form for a given readership?', steps: [
            { q: '¿Estás citando palabras de otra persona (testimonio, entrevista, diálogo)?', yes: '**Respeta su variedad**. Si un uso puede despistar al lector, añade una nota; no lo «corrijas».', no: 'Sigue con la siguiente pregunta.' },
            { q: '¿El hecho está en un tiempo cerrado (ayer, el año pasado, en 2019)?', yes: '**Simple** en las dos ediciones: «Ayer llegaron las pruebas».', no: 'Sigue.' },
            { q: '¿Es experiencia o algo que continúa hasta ahora?', yes: '**Compuesto** en las dos ediciones: «Siempre hemos querido…», «Nunca hemos reunido…».', no: 'Es un hecho de hoy o de un periodo con el ahora: **compuesto** para la mayoría de lectores de España, **simple** para la mayoría de lectores de América.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'No es «España contra América» · Not Spain versus Latin America', text: 'La propia **Nueva gramática** describe áreas, no países enteros: en **Canarias** y en **Galicia y Asturias** el simple es frecuente para hoy, como en gran parte de América; y en algunas zonas americanas, sobre todo **andinas**, el compuesto tiene usos más amplios que en España. Por eso conviene hablar de «la mayor parte de España» o «gran parte de América», y nunca de una forma «correcta».', en: 'The academic grammar maps areas, not whole countries: the Canary Islands, Galicia and Asturias pattern with much of Latin America for “today”, while some Andean areas use the compound even more widely than Spain. Speak of “most of Spain” or “much of Latin America”, never of one correct form.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En un testimonio, un hombre de Caracas dice: «Hoy me levanté a las cinco». ¿Qué hace la edición española?', options: ['Lo cambia por «me he levantado».', 'Lo cambia por «me había levantado».', 'Lo mantiene: son sus palabras.'], answer: 2, why: 'Es una cita: se respeta la variedad del hablante. La adaptación solo afecta a los textos de la editorial.', en: 'Quoted speech keeps the speaker’s variety; only the publisher’s own text is adapted.' },
            { prompt: 'Contraportada para la edición española: «Este año el equipo ___ once países».', options: ['recorrió', 'había recorrido', 'ha recorrido'], answer: 2, why: 'Texto propio de la editorial, periodo que incluye el ahora, público de la mayor parte de España: compuesto. «Recorrió» sería lo natural en la edición americana.', en: 'The publisher’s own blurb, a period including now, readers in Spain: the compound is the natural fit.' },
          ] },
        ] },
        { title: 'Evidencialidad: cómo lo sé · Evidentiality: how I know', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Visto, contado o descubierto? Seen, heard or discovered?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'VALORES EVIDENCIALES Y MIRATIVOS', question: '¿Lo vio quien habla, lo supo por otros o lo acaba de descubrir?', en: 'Evidentiality is how a speaker signals the source of information (seen, heard from others, inferred); mirativity signals that something is newly discovered or surprising. General Spanish does this with words: “por lo visto”, “resulta que”, “¡pero si…!”. In Andean Spanish, the academic grammar and other descriptions report a tendency for the pluperfect to carry these meanings. Treat it as a described tendency in some areas, not a rule for every Andean speaker.', formula: ['descubrimiento o sorpresa: ¡Había sido tarde! ≈ ‘resulta que es tarde’', 'información no presenciada: Había llovido anoche ≈ ‘por lo visto llovió anoche’', 'el mismo hablante usa también el pluscuamperfecto general: Cuando llegué, ya habían cerrado.'],
            meaning: 'En el español general, la fuente del dato y la sorpresa se expresan con **recursos léxicos**: «por lo visto», «al parecer», «resulta que», «¡pero si…!». En el **español andino** (zonas de Bolivia, el Perú y el Ecuador, por ejemplo) se ha descrito además un **pluscuamperfecto** con valor de descubrimiento y de información no presenciada. Las descripciones mencionan también usos del compuesto ligados a lo sabido de oídas; aquí solo los reconoces.',
            examples: [
              { es: '¡[[Había sido|violet]] tarde! Ya están cerrando el archivo.', en: 'Andean discovery: “Oh, it’s late! They’re already closing the archive.”' },
              { es: '¡Usted [[había sido|violet]] la nieta de doña Eulalia!', en: 'Andean discovery: “So you’re doña Eulalia’s granddaughter!” (I’ve just realised).' },
              { es: 'Mi tío [[había viajado|violet]] a Lima sin avisar a nadie.', en: 'Andean unwitnessed reading: “It seems my uncle went to Lima without telling anyone” (I learnt it later).' },
            ],
            note: 'Ojo: «Cuando llegué, ya habían cerrado» es el pluscuamperfecto **general** (un pasado anterior a otro). Decide el contexto: si no hay otro pasado de referencia y hay sorpresa, piensa en el valor mirativo.' },
          { kind: 'compare', title: 'La misma sorpresa, dos recursos · Same surprise, two resources', columns: [
            { tone: 'neutral', label: 'ESPAÑOL GENERAL', sentence: '¡Pero si ya es tardísimo! · ¡Ah, eras tú la nieta!', idea: 'Exclamativa con «pero si» o imperfecto de sorpresa.', en: 'General Spanish uses “¡pero si…!” or an imperfect of surprise (“¡Ah, eras tú!”).' },
            { tone: 'violet', label: 'TENDENCIA ANDINA', sentence: '¡[[Había sido|violet]] tarde! · ¡Usted [[había sido|violet]] la nieta!', idea: 'Pluscuamperfecto de descubrimiento.', en: 'Some Andean varieties use the pluperfect for the same moment of discovery.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Una señora de La Paz abre la puerta y dice: «¡Había sido usted el nuevo vecino!». ¿Qué expresa?', options: ['Que ya no es su vecino.', 'Que lo acaba de descubrir.', 'Que el vecino se mudó hace tiempo.'], answer: 1, why: 'Pluscuamperfecto mirativo: ‘resulta que usted es el nuevo vecino’. No sitúa nada en un pasado anterior.', en: 'A discovery in the present, not a past-before-the-past.' },
            { prompt: '«Cuando llegamos al archivo, ya habían cerrado». ¿Qué valor tiene «habían cerrado»?', options: ['Pasado anterior a otro pasado, como en todas las variedades.', 'Información no presenciada.', 'Descubrimiento andino.'], answer: 0, why: 'Hay un pasado de referencia («cuando llegamos») y el cierre es anterior: pluscuamperfecto general.', en: 'There is a reference point in the past, so this is the ordinary pluperfect.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Forma, norma o juicio? Form, norm or judgement?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué falla antes de ver la corrección: ¿la forma, la norma general o el juicio sobre la variedad?', self: 'Lee cada frase y decide qué falla: ¿la forma, la norma general o el juicio sobre la variedad? Después toca para ver la corrección. (Form, norm or judgement?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Corrector: «En el testimonio de Monterrey, cambio “hoy fui al mercado” por “hoy he ido”».', right: 'Se mantiene «hoy fui al mercado»: es la norma del hablante.', why: 'En una cita se respeta la variedad. Además, el simple para hoy es norma culta en gran parte de América.' },
            { wrong: 'Nota al pie: «“¡Había sido tarde!”: indica que se hizo tarde antes de otro hecho pasado».', right: 'Nota al pie: «En el español andino, este pluscuamperfecto puede expresar descubrimiento: ‘resulta que es tarde’».', why: 'Sin pasado de referencia y con sorpresa, el valor es mirativo, no de anterioridad.' },
            { wrong: 'Edición española: «Ayer la autora ha presentado el libro en Sevilla».', right: 'Edición española: «Ayer la autora presentó el libro en Sevilla».', why: 'Con «ayer», tiempo cerrado, la norma culta general es el simple, también en España.' },
            { wrong: 'Manual: «En América no se usa el pretérito perfecto compuesto».', right: 'En gran parte de América, el compuesto se concentra en la experiencia y en lo que continúa hasta ahora.', why: '«Siempre he vivido aquí» o «Nunca he estado en Roma» son frecuentes en toda América.' },
            { wrong: 'Edición americana: «Este año hemos recorrido once países» es incorrecto y hay que cambiarlo.', right: 'Es correcto y se entiende; «este año recorrimos» solo resulta más natural para muchos lectores americanos.', why: 'Adaptar es elegir lo más natural para el público, no corregir un error.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un hablante de Asturias dice: «Hoy comí con mis padres». ¿Qué dices?', options: ['Que es un error: en España se dice «he comido».', 'Que es una opción frecuente en su zona.', 'Que solo es posible si habla de ayer.'], answer: 1, why: 'La Nueva gramática describe el simple para hoy en Galicia y Asturias, como en Canarias y gran parte de América.', en: 'Asturias is one of the Spanish areas where the simple preterite is common for “today”.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta tres cosas de su día con su variedad y luego las repite «para la otra edición». Comentan juntos qué frase no cambia (la de experiencia o continuidad).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Dos ediciones, muchas voces', coach: 'Toca cada marca: ¿variedad o valor? Tap each mark.',
      steps: [
        { title: 'Videollamada a tres · A three-way video call', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marta y tu alumno lee a Valeria y a Ernesto. Después tu alumno toca cada expresión marcada y explica si señala una variedad, un valor general o un valor evidencial.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿señala una variedad, un valor común o un valor evidencial? (Regional choice, shared meaning, or evidential?)' } },
          { kind: 'explore', title: '«Adaptamos lo nuestro»', setting: 'Lunes, tres de la tarde en Madrid y primera hora de la mañana en Cusco y en Monterrey. Marta Llorente, editora de la antología, revisa por videollamada con Valeria Quispe, correctora, y Ernesto Salgado, adaptador, los cambios que un corrector externo ha propuesto en los testimonios.', lines: [
            { who: 'Marta', text: 'Buenas tardes desde Madrid. [[Esta mañana|teal]] [[he leído|blue]] las notas de los dos y tengo un par de dudas antes de cerrar las ediciones.', en: 'Good afternoon from Madrid. I read both your notes this morning and I have a couple of questions before we close the editions.' },
            { who: 'Ernesto', text: 'Aquí todavía es temprano, pero [[hoy|teal]] a primera hora ya [[revisé|orange]] el testimonio de don Ramiro. ¿Empezamos por ahí?', en: 'It’s still early here, but I already went through don Ramiro’s testimony first thing today. Shall we start there?' },
            { who: 'Marta', text: 'Sí. El corrector externo [[ha cambiado|blue]] su «hoy [[fui|orange]] al mercado» por «hoy he ido». ¿Lo dejamos así?', en: 'Yes. The external proofreader changed his “hoy fui al mercado” to “hoy he ido”. Do we keep that?' },
            { who: 'Ernesto', text: 'No, por favor. Así habla él y así hablamos en Monterrey: para lo de hoy, lo normal es el simple. En un testimonio se respeta la voz de quien habla.', en: 'Please don’t. That’s how he speaks, and how we speak in Monterrey: for today, the simple form is normal. A testimony respects the speaker’s voice.' },
            { who: 'Valeria', text: 'Con doña Eulalia pasa algo parecido. Ella cuenta: «Cuando llegué a la plaza, ¡[[había sido|violet]] día de feria!».', en: 'Something similar happens with doña Eulalia. She says: “When I got to the square, it turned out to be market day!”' },
            { who: 'Marta', text: 'Ese también lo marcó el corrector: propone «era día de feria». Yo lo había entendido como un pasado anterior a su llegada.', en: 'He flagged that one too and suggests “era día de feria”. I had read it as a past before her arrival.' },
            { who: 'Valeria', text: 'No es eso. En el español de la sierra, ese «había sido» [[es de descubrimiento|violet]]: ella no sabía que había feria y se encuentra con ella. Lo [[he oído|blue]] toda la vida.', en: 'That’s not it. In highland Spanish, that “había sido” marks a discovery: she didn’t know there was a market and suddenly finds it. I’ve heard it all my life.' },
            { who: 'Marta', text: 'Entonces lo dejamos tal cual y, en la edición española, añadimos una nota breve al pie.', en: 'Then we keep it as it is and add a short footnote in the Spanish edition.' },
            { who: 'Valeria', text: 'Eso. Lo que sí conviene adaptar son los textos de la editorial. En la presentación pone: «[[Este año|teal]] [[hemos recorrido|blue]] once países».', en: 'Exactly. What we should adapt are the publisher’s own texts. The introduction says: “This year we’ve travelled to eleven countries.”' },
            { who: 'Ernesto', text: 'Para la edición americana, yo pondría «este año [[recorrimos|orange]] once países». Pero «[[nunca hemos reunido|blue]] tantas voces» lo dejaría igual: es experiencia [[hasta hoy|teal]].', en: 'For the American edition I’d write “este año recorrimos”. But I’d keep “we have never brought together so many voices”: it’s experience up to today.' },
            { who: 'Marta', text: 'Me parece bien: adaptamos lo nuestro y respetamos lo suyo. Valeria, ¿me mandas la lista de notas? Ernesto, tú te encargas de la contraportada.', en: 'Sounds right: we adapt our text and respect theirs. Valeria, can you send me the list of notes? Ernesto, you take the back cover.' },
          ], notes: {
            'Esta mañana': 'Marco temporal de hoy (uso hodiernal): en la mayor parte de España se combina sobre todo con el compuesto.',
            'he leído': 'Compuesto hodiernal en boca de una madrileña: lo habitual en la norma centro-norte peninsular para un hecho de hoy.',
            'hoy': 'El marco que separa las variedades: en gran parte de América, un hecho de hoy va en simple; en la mayor parte de España, en compuesto.',
            'revisé': 'Simple hodiernal en boca de un hablante de Monterrey: norma culta en México y en gran parte de América.',
            'ha cambiado': 'Compuesto de hecho reciente con resultado presente: el cambio está hecho y ahora se discute.',
            'fui': 'La forma original del testimonio. Corregirla sería imponer otra variedad a la voz del hablante.',
            'había sido': 'Pluscuamperfecto con valor de descubrimiento (mirativo), descrito en el español andino: ‘resulta que era día de feria’. No expresa anterioridad.',
            'es de descubrimiento': 'La explicación de Valeria: el valor no es temporal sino mirativo, información nueva e inesperada para quien habla.',
            'he oído': 'Compuesto de continuidad o experiencia hasta ahora («toda la vida»): común a todas las variedades.',
            'Este año': 'Periodo que incluye el ahora: compuesto en la mayor parte de España; en gran parte de América es frecuente el simple.',
            'hemos recorrido': 'Compuesto con «este año»: natural para el lector de la mayor parte de España.',
            'recorrimos': 'Simple con «este año»: la opción más natural para muchos lectores americanos. No corrige un error: adapta.',
            'nunca hemos reunido': 'Compuesto de experiencia: se mantiene en las dos ediciones.',
            'hasta hoy': 'Señal de continuidad: por eso el compuesto no varía entre ediciones.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Por qué rechaza Ernesto el cambio del corrector externo?', options: ['Porque don Ramiro habla de ayer.', 'Porque «he ido» es incorrecto.', 'Porque en un testimonio se respeta la variedad de quien habla.'], answer: 2, why: 'Ernesto lo dice claro: «En un testimonio se respeta la voz de quien habla». «He ido» no es incorrecto; es otra variedad.', en: 'The change imposes another variety on a quoted speaker.' },
            { prompt: '¿Qué significa el «había sido» de doña Eulalia?', options: ['Que encontró la feria sin esperarla.', 'Que la feria ya no existe.', 'Que la feria fue antes de que ella llegara.'], answer: 0, why: 'Valor de descubrimiento: ‘resulta que era día de feria’. Marta lo había leído como anterioridad.', en: 'It marks surprise at a discovery, not anteriority.' },
            { prompt: '¿Por qué «nunca hemos reunido tantas voces» no cambia en la edición americana?', options: ['Porque expresa experiencia hasta hoy.', 'Porque Ernesto no la ha leído.', 'Porque el simple no existe con «nunca».'], answer: 0, why: 'La experiencia hasta ahora va en compuesto en todas las variedades (aunque «nunca» con simple también existe en América).', en: 'Experience up to now is shared ground for the compound.' },
          ] },
        ] },
        { title: 'Contraportada y solapa · Back cover and flap', mascot: '/brand/mascot/kneeling.webp', coach: '¿Qué edición? ¿Qué valor? Which edition? Which meaning?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees las líneas de Ernesto y tu alumno las de Marta y Valeria. En cada hueco, tu alumno elige y dice qué ha decidido: edición, marco temporal o valor.', self: 'Completa la conversación. En cada hueco piensa: ¿para qué edición es, qué marco temporal hay y qué valor tiene? (Which edition, time frame and meaning?)' } },
          { kind: 'chat-fill', title: 'Los textos de la editorial · The publisher’s texts', lines: [
            { who: 'Ernesto', text: 'Contraportada americana: «En 2025, el equipo ___ a cuarenta personas en once países».', options: ['había sido', 'ha grabado', 'grabó'], answer: 2, why: '«En 2025» es un tiempo cerrado: simple en las dos ediciones.' },
            { who: 'Marta', text: 'Y para la española: «Este año, la editorial ___ la colección con este volumen».', options: ['ha inaugurado', 'inauguraría', 'había inaugurado'], answer: 0, why: 'Periodo que incluye el ahora, lectores de la mayor parte de España: compuesto.' },
            { who: 'Ernesto', text: 'En la americana dejaría: «Este año, la editorial ___ la colección con este volumen».', options: ['inauguró', 'había inaugurado', 'inaugurara'], answer: 0, why: 'Con «este año», el simple es lo más natural para muchos lectores americanos.' },
            { who: 'Valeria', text: 'Solapa, para las dos: «La autora ___ en Cusco toda su vida y sigue allí».', options: ['vivió', 'había vivido', 'ha vivido'], answer: 2, why: 'Continúa hasta hoy («y sigue allí»): compuesto en todas las variedades. «Vivió» daría a entender que ya no vive allí.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Reconocer, elegir y adaptar', coach: 'Primero la pista, después el público. Clue first, then audience.',
      steps: [
        { title: '¿Qué pista da cada frase? · What clue does each sentence give?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase y decide qué pista da sobre la variedad. Tú preguntas: «¿Qué marco temporal hay? ¿Hay sorpresa?».', self: 'Lee cada frase y clasifícala por la pista que da. Pregúntate: ¿qué marco temporal hay? ¿Hay sorpresa? (What time frame? Any surprise?)' } },
          { kind: 'classify', title: 'Pistas de variedad · Variety clues', categories: [
            { id: 'centro', label: 'COMPUESTO PARA HOY · pista de la mayor parte de España', tone: 'blue' },
            { id: 'simple', label: 'SIMPLE PARA HOY · pista de gran parte de América, Canarias, Galicia o Asturias', tone: 'orange' },
            { id: 'andino', label: 'VALOR MIRATIVO · pista andina', tone: 'violet' },
            { id: 'comun', label: 'COMÚN A TODAS · no delata la variedad', tone: 'teal' },
          ], items: [
            { text: 'Esta tarde he quedado con mis primas y hemos merendado en el centro.', answer: 'centro', why: 'Compuesto para hechos de hoy: lo habitual en la norma centro-norte peninsular.' },
            { text: '¿Ya viste el correo que mandó la jefa hoy en la mañana?', answer: 'simple', why: 'Simple para hoy; «hoy en la mañana» también es frecuente en América.' },
            { text: '¡Tu sobrino había sido muy buen cantante! Yo no sabía.', answer: 'andino', why: 'Pluscuamperfecto de descubrimiento: ‘resulta que canta muy bien’.' },
            { text: 'El año pasado vendimos la casa del pueblo.', answer: 'comun', why: 'Tiempo cerrado con simple: norma general en todas las variedades.' },
            { text: 'Siempre he querido aprender quechua.', answer: 'comun', why: 'Continuidad hasta hoy: compuesto en todas las variedades.' },
            { text: 'Hoy desayuné en la calle porque me levanté tardísimo.', answer: 'simple', why: 'Hechos de hoy en simple: pista de gran parte de América o de Canarias, Galicia y Asturias.' },
            { text: '¡Había sido lejos tu casa! Casi una hora caminando.', answer: 'andino', why: 'Sin pasado de referencia y con sorpresa: valor mirativo, ‘resulta que tu casa está lejos’.' },
            { text: 'Hoy hemos comido en casa de mi suegra.', answer: 'centro', why: 'Compuesto hodiernal: lo habitual en la mayor parte de España.' },
          ] },
        ] },
        { title: 'Elige para el lector · Choose for the reader', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Elige · Choose', items: [
            { prompt: 'Nota de prensa para medios de España: «Esta semana la editorial ___ dos presentaciones en Madrid».', options: ['había organizado', 'ha organizado', 'organizó'], answer: 1, why: 'Periodo que incluye el ahora y público de la mayor parte de España: compuesto. «Organizó» sería lo natural para medios de gran parte de América.', en: 'A press release for Spanish media about this week.' },
            { prompt: 'Nota para la prensa mexicana: «Hoy la autora ___ el premio de la feria del libro». ¿Qué es lo más natural?', options: ['había recibido', 'recibió', 'ha recibido'], answer: 1, why: 'Para un hecho de hoy, el simple es lo habitual en México. «Ha recibido» no es incorrecto, pero suena menos natural allí.', en: 'Same-day news for Mexican readers.' },
            { prompt: '«Mi abuela ___ en este barrio desde 1960 y no piensa mudarse».', options: ['había vivido', 'vivió', 'ha vivido'], answer: 2, why: 'Situación que continúa hasta hoy: compuesto en todas las variedades. «Vivió» la daría por terminada.', en: 'A situation that is still going on.' },
            { prompt: 'Un señor de La Paz ve la cuenta y dice: «¡Había sido caro este restaurante!». ¿Qué quiere decir?', options: ['Que acaba de descubrir que es caro.', 'Que antes era caro y ahora no.', 'Que fue caro en una visita anterior.'], answer: 0, why: 'Valor mirativo descrito en el español andino: ‘resulta que es caro’.', en: 'An Andean discovery reading.' },
            { prompt: 'Un corrector cambia «Hoy almorcé con mi madre» en el testimonio de una mujer de Bogotá por «Hoy he almorzado». ¿Qué haces?', options: ['Lo apruebas: significan cosas distintas.', 'Lo deshaces: en una cita se respeta la variedad.', 'Lo apruebas: «almorcé» no va con «hoy».'], answer: 1, why: 'El simple para hoy es norma culta en Colombia, y además es una cita.', en: 'A quotation from a Colombian speaker.' },
          ] },
        ] },
        { title: 'Revisa las pruebas · Check the proofs', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases de las pruebas de imprenta. Tu alumno decide si cada una está bien y, si no, elige la corrección y explica qué criterio aplica.', self: 'Son frases de las pruebas de imprenta. ¿Están bien? Si no, elige la corrección. (Is each one right? If not, pick the fix.)' } },
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: 'Edición española: «Ayer la autora ha firmado ejemplares en la feria de Valencia».', ok: false, options: ['Edición española: «Ayer la autora había firmado ejemplares en la feria de Valencia».', 'Edición española: «Ayer la autora firmó ejemplares en la feria de Valencia».', 'Edición española: «Ayer la autora firmaba ejemplares en la feria de Valencia».'], answer: 1, why: 'Con «ayer», la norma culta general es el simple, también en España.' },
            { sentence: 'Testimonio de un hombre de Caracas: «Hoy salí temprano a buscar el pan».', ok: true, why: 'Simple para hoy: norma del hablante. En una cita se mantiene.' },
            { sentence: 'Nota al pie: «“¡Había sido tarde!”: indica que se hizo tarde antes de otro hecho pasado».', ok: false, options: ['Nota al pie: «“¡Había sido tarde!”: equivale a “habrá sido tarde”».', 'Nota al pie: «“¡Había sido tarde!”: es un error del hablante».', 'Nota al pie: «“¡Había sido tarde!”: en el español andino puede expresar que quien habla se da cuenta de que es tarde».'], answer: 2, why: 'Sin pasado de referencia y con sorpresa, es el valor mirativo descrito en el español andino.' },
            { sentence: 'Correo de Marta: «Esta mañana hemos recibido las pruebas de imprenta».', ok: true, why: 'Compuesto hodiernal en boca de una madrileña: lo habitual en su variedad.' },
            { sentence: 'Introducción: «En América no se usa nunca el pretérito perfecto compuesto».', ok: false, options: ['Introducción: «En América el compuesto solo se usa en la lengua escrita».', 'Introducción: «En América el compuesto se usa solo con ayer».', 'Introducción: «En gran parte de América, el compuesto se concentra en la experiencia y en lo que continúa hasta hoy».'], answer: 2, why: 'Es falso que no se use: «Siempre he vivido aquí» es frecuente en toda América.' },
          ] },
        ] },
        { title: 'Pies de foto · Photo captions', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Ernesto y Valeria revisan las fotos · Checking the captions', lines: [
            { who: 'Valeria', text: 'Pie de foto: «La autora, en la plaza donde ___ su primera entrevista hace cinco años».', options: ['hizo', 'había sido', 'ha hecho'], answer: 0, why: '«Hace cinco años» es un tiempo cerrado: simple en las dos ediciones.' },
            { who: 'Ernesto', text: 'En la americana, el agradecimiento final: «Hoy ___ la última grabación y queremos dar las gracias…».', options: ['hacíamos', 'hicimos', 'habíamos hecho'], answer: 1, why: 'Hecho de hoy, lectores americanos: simple. En la edición española iría «hemos hecho».' },
            { who: 'Valeria', text: 'La cita de doña Eulalia va tal cual: al ver la foto dijo «¡Ay, ___ bonita la plaza!», porque no la recordaba así.', options: ['fue', 'ha sido', 'había sido'], answer: 2, why: 'Es su pluscuamperfecto de descubrimiento: en una cita se copia como lo dijo.' },
            { who: 'Ernesto', text: 'Y el cierre, para las dos: «Desde que empezamos, ___ más de cien horas de grabación».', options: ['habíamos reunido', 'reuniríamos', 'hemos reunido'], answer: 2, why: '«Desde que empezamos» abre un periodo que llega hasta hoy: compuesto en las dos ediciones.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['Hoy', 'temprano', 'terminé', 'la', 'última', 'entrevista.'], accept: ['Hoy temprano terminé la última entrevista.'], en: 'I finished the last interview early today (simple preterite for today: much of Latin America).' },
            { tiles: ['Esta', 'semana', 'hemos', 'revisado', 'todos', 'los', 'testimonios.'], accept: ['Esta semana hemos revisado todos los testimonios.'], en: 'We have reviewed all the testimonies this week (compound for a period including now: most of Spain).' },
            { tiles: ['¡Había', 'sido', 'tu', 'hermana', 'la', 'nueva', 'directora!'], accept: ['¡Había sido tu hermana la nueva directora!'], en: 'So your sister is the new director! (Andean pluperfect of discovery).' },
          ] },
        ] },
        { title: 'Adapta para cada edición · Adapt for each edition', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada frase según la instrucción y explica qué ha cambiado y qué no. Atención: una frase no necesita cambios.', self: 'Reescribe cada frase según la instrucción. Atención: una de ellas no cambia. (One of them stays the same.)' } },
          { kind: 'rewrite', title: 'Reescribe · Rewrite', items: [
            { prompt: 'Este año hemos publicado tres antologías.', instruction: 'Adáptala para la edición americana (simple con «este año»).', accept: ['Este año publicamos tres antologías'] },
            { prompt: 'Hoy hablé con la imprenta y confirmaron la fecha.', instruction: 'Adáptala para la edición española (compuesto en los dos verbos).', accept: ['Hoy he hablado con la imprenta y han confirmado la fecha', 'Hoy he hablado con la imprenta y me han confirmado la fecha'] },
            { prompt: '¡Había sido tarde!', instruction: 'Explícala en español general para un lector que no conoce este uso. Empieza por «Resulta que».', accept: ['Resulta que es tarde', 'Resulta que ya es tarde', 'Resulta que era tarde', 'Resulta que ya era tarde'] },
            { prompt: 'Esta mañana recibimos las pruebas.', instruction: 'Adáptala para la edición española.', accept: ['Esta mañana hemos recibido las pruebas'] },
            { prompt: 'Siempre he admirado a la gente que cuenta historias.', instruction: 'Escríbela como quedaría en la edición americana.', accept: ['Siempre he admirado a la gente que cuenta historias'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno toma un párrafo real (prensa, redes, una novela) y señala qué pasados delatan la variedad y cuáles no.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Valeria', coach: 'Escucha la variedad y el valor. Listen for variety and meaning.',
      steps: [
        { title: 'Un mensaje desde Cusco · A voice message from Cusco', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada pasado y dice si señala la variedad de Valeria, un valor común o un valor de descubrimiento.', self: 'Escucha una vez para la idea general. En la segunda, anota cada pasado y decide qué indica. Vas a oír «notas al pie» (footnotes), «solapa» (book flap) y «ahorita» (right now).' } },
          { kind: 'listen', title: 'Mensaje de voz de Valeria', channel: 'MENSAJE DE VOZ · VALERIA QUISPE · CUSCO', src: '/audio/grammar-live/516.mp3',
            before: 'Valeria le manda a Marta un audio con las últimas correcciones. ¿Qué crees que va a mantener y qué va a cambiar? (What will she keep, and what will she change?)',
            gist: { prompt: '¿Qué hace Valeria en el mensaje? · What does Valeria do?', options: ['Explica qué ha dejado como estaba, qué conviene adaptar y por qué.', 'Anuncia que la grabación de doña Eulalia se ha perdido.', 'Pide que se corrijan los testimonios andinos.'], answer: 0, why: 'Mantiene el «había sido» de doña Eulalia con una nota, acepta adaptar «este año recorrimos» y corrige «ayer ha llegado».', en: 'She reports what she kept, what should be adapted, and why.' },
            details: [
              { prompt: '«La grabación había sido de una hora entera». ¿Qué quiere decir Valeria?', options: ['Que lo ha descubierto al escucharla y no lo esperaba.', 'Que antes duraba una hora y ahora menos.', 'Que la grabaron antes que las otras.'], answer: 0, why: 'Ella misma lo explica: «yo pensaba que duraba veinte minutos». Es su propio pluscuamperfecto de descubrimiento.', en: 'Her own Andean pluperfect of discovery.' },
              { prompt: '¿Qué ha hecho con el «¡Había sido tan alta!» de doña Eulalia?', options: ['Lo ha cambiado por «era tan alta».', 'Lo ha quitado del libro.', 'Lo ha dejado tal cual, con una nota breve.'], answer: 2, why: '«Lo he dejado tal cual, con una nota breve».', en: 'She kept the quotation and added a short note.' },
              { prompt: '¿Por qué «siempre hemos querido escuchar» no cambia en la edición americana?', options: ['Porque es una cita.', 'Porque es algo que sigue hasta hoy.', 'Porque Ernesto no la ha leído.'], answer: 1, why: '«Es algo que sigue hasta hoy»: continuidad, compuesto en las dos ediciones.', en: 'Continuity up to now keeps the compound everywhere.' },
              { prompt: '¿Qué propone para «ayer ha llegado la autora a Madrid»?', options: ['Dejarlo, porque es la solapa.', 'Cambiarlo por «había llegado».', 'Cambiarlo por «ayer llegó», lo general con «ayer».'], answer: 2, why: '«Para la edición española yo pondría “ayer llegó”; con ayer, es lo general».', en: 'With “ayer”, the simple preterite is the general norm.' },
            ],
            transcript: 'Hola, Marta, soy Valeria. Te dejo un audio porque ahorita estoy sin cámara. Ya [[he terminado|blue]] las notas al pie y te las [[he mandado|blue]] por correo [[esta mañana|teal]]. Te cuento dos cosas. Primero: [[he vuelto|blue]] a escuchar la grabación de doña Eulalia, y la grabación [[había sido|violet]] de una hora entera; yo pensaba que duraba veinte minutos. Hay un «había sido» suyo que conviene explicar. Cuando cuenta que vio a su hermana después de diez años, dice: «¡[[Había sido|violet]] tan alta!». No quiere decir que antes fuera alta, sino que en ese momento se da cuenta y se sorprende. Lo he dejado tal cual, con una nota breve. Segundo: Ernesto me [[escribió|orange]] [[hoy|teal]] temprano. Para la edición americana prefiere «este año [[recorrimos|orange]] once países», y estoy de acuerdo. Pero en «[[siempre hemos querido|blue]] escuchar a la gente mayor», el compuesto se queda en las dos ediciones, porque es algo que sigue hasta hoy. Ah, y en la solapa alguien escribió «ayer ha llegado la autora a Madrid». Para la edición española yo pondría «ayer llegó»; con ayer, es lo general. Me dices qué te parece. Un abrazo.',
            reply: { teacher: 'Tú eres Marta y respondes al audio. Tu alumno es Valeria y te explica por teléfono los tres criterios que ha aplicado: qué se respeta, qué se adapta y qué se corrige.', self: 'Responde a Valeria en voz alta en tres frases: qué te parece la nota, qué adaptas y qué corriges. (Keep, adapt, correct.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar de la variación sin juzgarla', coach: 'Describe, compara, decide. Describe, compare, decide.',
      steps: [
        { title: 'Variedades, públicos y voces · Varieties, audiences and voices', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con argumentos y ejemplos. Si tu alumno presenta una variedad como «la correcta», tú preguntas «¿Para qué público?» y tu alumno matiza.', self: 'Lee cada pregunta y responde en voz alta durante uno o dos minutos. Usa ejemplos reales y evita hablar de «la forma correcta». (Avoid “the correct form”.)' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta tu día de hoy dos veces: a una colega de Madrid y a un cliente de Ciudad de México. · Tell your day twice, for two audiences.', followUps: ['¿Qué frases has cambiado y cuáles no?', '¿Te sale natural alguna de las dos versiones?', '¿Cambiarías algo más que los pasados?'], phrases: ['Esta mañana [[he tenido|blue]]… / [[tuve|orange]]…', 'Hoy [[he hablado|blue]]… / [[hablé|orange]]…', 'Nunca [[he trabajado|blue]]…'], hint: 'Cambia los hechos de hoy; deja igual la experiencia y lo que continúa.', example: 'A Lucía, en Madrid: «Esta mañana he tenido dos reuniones y he cerrado el presupuesto». A Gerardo, en México: «Esta mañana tuve dos reuniones y cerré el presupuesto». En las dos versiones digo igual: «Nunca he trabajado tan a gusto con un equipo».' },
            { q: '¿Debe un editor «unificar» los pasados de los testimonios para que el libro suene homogéneo? Toma partido. · Should an editor standardise the testimonies?', followUps: ['¿Qué se pierde si se unifica?', '¿Dónde está el límite entre adaptar y corregir?', '¿Y si el lector no entiende un uso?'], phrases: ['Una cosa es adaptar y otra muy distinta…', 'En una cita…', 'Bastaría con una nota que…'], hint: 'Distingue el texto de la editorial y la voz de los testimonios.', example: 'Yo no lo unificaría. Una cosa es adaptar los textos de la editorial a cada público y otra muy distinta corregir cómo habla alguien. Si doña Eulalia dice «había sido día de feria», eso es parte de su voz. Bastaría con una nota breve para el lector que no conoce ese uso.' },
            { q: 'Explícale a un corrector que nunca ha oído el español andino qué significa «¡Había sido tarde!» y por qué no debe corregirlo. · Explain the Andean pluperfect.', followUps: ['¿Con qué recurso del español general lo compararías?', '¿Cómo sabes que no es un pasado anterior?'], phrases: ['[[Había sido|violet]] = resulta que…', 'No hay otro pasado de referencia…', 'Es un valor de descubrimiento…'], hint: 'Da el contexto, una paráfrasis con «resulta que» y una prueba (no hay pasado de referencia).', example: 'Mira, aquí no hay ningún pasado de referencia: la persona mira el reloj y dice «¡Había sido tarde!». Es como decir «¡Anda, pero si ya es tarde!» o «resulta que es tarde». Se ha descrito en el español andino como un valor de descubrimiento. Si lo cambias por «era tarde», le quitas la sorpresa y su manera de hablar.' },
            { q: 'Si enseñaras español a extranjeros, ¿enseñarías «hoy he comido», «hoy comí» o las dos? · Which would you teach?', followUps: ['¿Depende de dónde vivan tus alumnos?', '¿Qué error sí corregirías?'], phrases: ['Depende del público…', 'Lo importante es que reconozcan…', 'Lo que sí corregiría es…'], hint: 'Une la elección al público y separa variedad y error: «he comí» no existe y «ayer he comido» no es la norma general.', example: 'Depende del público. Si mis alumnos viven en Madrid, les enseñaría a producir «hoy he comido», pero también a reconocer «hoy comí», porque van a oírlo en series y a compañeros. Lo que sí corregiría es mezclar las formas, como «he comí», o usar el compuesto con «ayer», que no es la norma general.' },
            { q: '¿Hay en tu lengua (o en otra que conozcas) una manera de marcar «lo vi», «me lo contaron» o «¡vaya, no lo sabía!»? Compárala con el español. · Compare evidentiality across languages.', followUps: ['¿Es gramatical o léxica?', '¿Qué recurso del español se le parece más?'], phrases: ['En mi lengua se dice…', 'En español general usaríamos «por lo visto», «al parecer»…', 'Se parece a [[había sido|violet]]…'], hint: 'Distingue fuente del dato (evidencialidad) y sorpresa (miratividad).', example: 'En inglés lo hacemos con palabras: «apparently», «it turns out». Es parecido al español general, que usa «por lo visto» o «resulta que». Por lo que he leído, el quechua sí lo marca en la gramática, y eso ayuda a entender por qué en el español andino se ha descrito un pluscuamperfecto con valor de descubrimiento.', next: 'Ahora, la entrevista.' },
            { q: 'Eres Marta: presentas la antología en una entrevista de radio, primero en Madrid y después en Lima. · Present the book on two radio shows.', followUps: ['¿Qué frases cambian entre una entrevista y otra?', '¿Cómo explicas que el libro respete las voces?'], phrases: ['Este año [[hemos recorrido|blue]] / [[recorrimos|orange]]…', 'Nunca [[hemos reunido|blue]]…', 'Cada testimonio conserva…'], hint: 'Adapta los hechos de este año y de hoy; mantén la experiencia y explica el criterio del libro.', example: 'En Madrid: «Este año hemos recorrido once países y hoy hemos cerrado la última edición». En Lima: «Este año recorrimos once países y hoy cerramos la última edición». En las dos digo: «Nunca hemos reunido tantas voces, y cada testimonio conserva la manera de hablar de quien lo cuenta».', teacher: 'Tú haces de locutor en Lima y preguntas por qué el libro no «corrige» a doña Eulalia. Tu alumno responde con el criterio de la editorial.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas tu día con una variedad y tu alumno te lo repite «para la otra edición», sin tocar lo que no debe cambiar.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿has adaptado solo lo que dependía del público? (Did you adapt only what depends on the audience?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La nota de estilo', coach: 'Criterios claros para otros. Clear criteria for others.',
      steps: [
        { title: 'Criterios para el equipo · Criteria for the team', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos el texto: ¿separa variedad y error? ¿Da ejemplos? ¿Habla de tendencias, no de reglas universales?', self: 'Escribe la nota y toca «Revisar mi texto». Después comprueba que separas variedad y error, que das ejemplos y que hablas de tendencias. (Check: variety vs error, examples, tendencies.)' } },
          { kind: 'write', title: 'Nota de estilo de la antología · The anthology’s style note', situation: 'Eres Marta Llorente (o editas un libro con voces de varios países). Escribes la nota de estilo interna para el equipo de corrección de «Voces del mismo idioma»: cómo tratar los pasados en los testimonios y en los textos de la editorial. (An internal style note for the proofreading team.)', task: [
            'Explica la diferencia entre adaptar los textos de la editorial y respetar las citas.',
            'Da un criterio para el compuesto y el simple con hoy o este año en cada edición, con un ejemplo.',
            'Señala qué no cambia nunca (experiencia, continuidad, tiempos cerrados).',
            'Explica el valor de descubrimiento del pluscuamperfecto andino y cómo anotarlo, hablando de tendencias.',
            'Termina con un caso que sí es un error y debe corregirse.',
          ], starters: ['Esta nota recoge los criterios…', 'En los testimonios…', 'En los textos de la editorial…', 'Lo que no cambia en ninguna edición…', 'En algunos testimonios andinos…', 'Sí debe corregirse…'],
            words: ['pretérito perfecto compuesto', 'pretérito perfecto simple', 'edición española', 'edición americana', 'cita', 'variedad', 'pluscuamperfecto', 'valor de descubrimiento', 'nota al pie', 'norma general'],
            model: 'Esta nota recoge los criterios sobre los tiempos del pasado en «Voces del mismo idioma». En los testimonios no se corrige la variedad de nadie: si don Ramiro dice «hoy fui al mercado», así se queda, porque el simple para hoy es norma culta en gran parte de América. En los textos de la editorial, en cambio, adaptamos al lector. Para hechos de hoy o de periodos como «este año», la edición española usará el pretérito perfecto compuesto («este año hemos recorrido once países») y la americana, el simple («este año recorrimos once países»). No cambian nunca la experiencia y la continuidad («nunca hemos reunido tantas voces», «siempre ha vivido en Cusco») ni los tiempos cerrados, que van en simple en las dos ediciones. En algunos testimonios andinos aparece un pluscuamperfecto con valor de descubrimiento: «¡Había sido día de feria!» significa ‘resulta que era día de feria’. Es una tendencia descrita en el español andino, no un error: se mantiene y, si puede despistar, se explica en una nota al pie. Sí debe corregirse, en nuestros textos, el compuesto con «ayer»: «ayer ha llegado la autora» pasa a «ayer llegó», que es la norma general.',
            minWords: 150,
            checks: [
              { label: 'Un compuesto con hoy o este año (he/ha/hemos/han + participio)', pattern: '(?<!\\p{L})(?:he|has|ha|hemos|han)\\s+\\p{L}+(?:ado|ido|to|cho|so)(?!\\p{L})', tip: 'Da un ejemplo para la edición española: «este año hemos recorrido…».' },
              { label: 'Una mención a las dos ediciones o públicos', pattern: '(?<!\\p{L})(?:edición\\s+(?:española|americana)|lectores?\\s+(?:de\\s+)?(?:España|América))(?!\\p{L})', tip: 'Di qué forma usa cada edición.' },
              { label: 'El pluscuamperfecto de descubrimiento (había sido…)', pattern: '(?<!\\p{L})(?:había\\s+sido|pluscuamperfecto|descubrimiento)(?!\\p{L})', tip: 'Explica el valor de «¡Había sido…!» en el español andino.' },
              { label: 'El criterio de las citas o testimonios', pattern: '(?<!\\p{L})(?:testimonios?|citas?)(?!\\p{L})', tip: 'Di qué se hace con las palabras de los hablantes.' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:la\\s+forma\\s+correcta|español\\s+correcto)(?!\\p{L})', why: 'Evita presentar una variedad como «la correcta»: habla de norma, público o tendencia.' },
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
            { tone: 'blue', label: 'COMPUESTO · ANTEPRESENTE', formula: 'hoy, este año → compuesto (mayor parte de España) · experiencia y continuidad → compuesto (todas)', example: 'Esta mañana han llegado las pruebas. · Siempre he trabajado con autores jóvenes.', caption: 'La zona de variación es el «hoy» y el periodo que incluye el ahora.', en: 'Every variety uses the compound for experience and continuity; the regional difference lies in “today” and periods that include now.' },
            { tone: 'orange', label: 'SIMPLE', formula: 'tiempo cerrado → simple (todas) · hoy, este año → simple (gran parte de América, Canarias, Galicia y Asturias)', example: 'Ayer llegaron las pruebas. · Esta mañana llegaron las pruebas.', caption: 'Con «ayer», la norma general; con «hoy», norma culta de muchas zonas.', en: 'With “ayer” it is the general norm; with “hoy” it is the educated norm in many areas.' },
            { tone: 'violet', label: 'VALOR EVIDENCIAL O MIRATIVO', formula: '¡Había sido + …! ≈ resulta que… (tendencia andina descrita)', example: '¡Había sido tarde! ≈ Resulta que es tarde.', caption: 'Sin pasado de referencia y con sorpresa: descubrimiento.', en: 'A described Andean tendency: the pluperfect marks discovery or unwitnessed information, not anteriority.' },
            { tone: 'teal', label: 'CRITERIO EDITORIAL', formula: 'cita → se respeta · texto propio → se adapta · error → se corrige', example: '«Hoy fui al mercado» (cita) · «Este año recorrimos» (edición americana) · «Ayer llegó» (no «ayer ha llegado»).', caption: 'Variedad no es error.', en: 'Respect quoted speech, adapt your own text to the audience, correct only real departures from the general norm.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres preguntas · Three questions', text: 'Ante un pasado, pregunta: **¿de quién es el texto?** (cita o texto propio), **¿qué marco temporal tiene?** (hoy, este año, ayer, hasta ahora) y **¿hay sorpresa sin pasado de referencia?** (valor de descubrimiento). Con esas tres respuestas sabes si adaptar, mantener o anotar.', en: 'Ask whose text it is, what time frame it has, and whether there is surprise with no past reference point. Those three answers tell you whether to adapt, keep or annotate.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'Folleto para una librería de Bilbao: «Esta semana ___ la nueva antología».', options: ['llegaba', 'ha llegado', 'había llegado'], answer: 1, why: 'Periodo que incluye el ahora, público de la mayor parte de España: compuesto.', en: 'A leaflet for a bookshop in Spain.' },
            { prompt: 'Folleto para una librería de Guadalajara (México): «Hoy ___ la nueva antología».', options: ['llegaba', 'había llegado', 'llegó'], answer: 2, why: 'Hecho de hoy, público mexicano: simple.', en: 'The same news for Mexican readers.' },
            { prompt: '«Mi padre ___ en la misma imprenta toda su vida y sigue allí».', options: ['había trabajado', 'ha trabajado', 'trabajó'], answer: 1, why: 'Continuidad hasta hoy: compuesto en todas las variedades.', en: 'Still working there.' },
            { prompt: 'Una mujer de Cochabamba abre el paquete: «¡Había sido de mi hermana el regalo!». ¿Qué expresa?', options: ['Que el regalo fue de su hermana hace años.', 'Que acaba de descubrir que es de su hermana.', 'Que su hermana se lo regaló antes que otro.'], answer: 1, why: 'Valor de descubrimiento descrito en el español andino: ‘resulta que es de mi hermana’.', en: 'An Andean discovery reading.' },
            { prompt: 'Texto de la editorial, edición española: «Ayer la autora ___ en la radio».', options: ['había hablado', 'ha hablado', 'habló'], answer: 2, why: 'Con «ayer», tiempo cerrado: simple, la norma general también en España.', en: 'A closed time frame in the publisher’s own text.' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro texto, el mismo criterio. New text, same criterion.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: subtítulos de un documental que se estrena en España y en México. Tu alumno adapta cada línea y explica qué ha cambiado.', self: 'Ahora, subtítulos de un documental para dos públicos: adapta cada línea según la instrucción. (Documentary subtitles for two audiences.)' } },
          { kind: 'rewrite', title: 'Subtítulos para dos públicos · Subtitles for two audiences', items: [
            { prompt: 'Narradora: Hoy los pescadores han salido antes del amanecer.', instruction: 'Adapta la narración para el público mexicano.', accept: ['Hoy los pescadores salieron antes del amanecer'] },
            { prompt: 'Narradora: Este año la pesca ha sido escasa.', instruction: 'Adapta la narración para el público mexicano.', accept: ['Este año la pesca fue escasa'] },
            { prompt: 'Pescador (entrevista grabada en Galicia): Hoy salí a las cuatro.', instruction: 'Escríbelo como debe aparecer en el subtítulo para España.', accept: ['Hoy salí a las cuatro'] },
          ] },
        ] },
        { title: 'Ampliación · Noticias, «todavía no» y el compuesto andino', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Tres matices. **1.** En la prensa de España es frecuente el compuesto para una noticia reciente: «**Ha fallecido** esta madrugada el poeta…»; en la prensa de gran parte de América es frecuente el simple: «**Falleció** esta madrugada…». **2.** Con «todavía no», el compuesto es general («Todavía no **ha llegado**»), pero en varias variedades americanas también se oye «Todavía no **llegó**», con el mismo sentido de expectativa. **3.** Algunas descripciones del español andino registran el compuesto también para hechos lejanos («Mi abuelo **ha nacido** en Puno»), donde la norma general usa el simple. Aquí solo se trata de **reconocerlo**.', en: 'For strong students or spare time. Spanish newspapers often use the compound for recent news, while the press in much of Latin America favours the simple form. With “todavía no”, the compound is general, but several American varieties also say “todavía no llegó”. Some descriptions of Andean Spanish report the compound even for remote events (“mi abuelo ha nacido en Puno”), where the general norm uses the simple form: recognise it, do not copy it into your own text.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: 'Titular de un diario de Lima: «Falleció esta madrugada el poeta del puerto». ¿Qué dices?', options: ['Solo es correcto si murió ayer.', 'Es un error: tiene que ser «ha fallecido».', 'Es la opción frecuente en gran parte de la prensa americana.'], answer: 2, why: 'Para una noticia de hoy, el simple es lo frecuente en gran parte de América; el compuesto, en la prensa de España.', en: 'The simple form is usual for same-day news in much of the Latin American press.' },
            { prompt: 'En un testimonio andino: «Mi abuelo ha nacido en Puno en 1931». En la edición española…', options: ['Se corrige a «nació».', 'Se cambia a «había nacido».', 'Se mantiene: es una cita, y se ha descrito como uso andino.'], answer: 2, why: 'Es la voz del hablante. En un texto propio de la editorial, la norma general pediría «nació».', en: 'Quoted speech stays; your own text would use “nació”.' },
            { prompt: '«Todavía no llegó el autobús», dice una mujer de Montevideo. ¿Qué expresa?', options: ['Que ya no se espera el autobús.', 'Que se espera el autobús y aún no ha llegado.', 'Que el autobús llegó y se fue.'], answer: 1, why: 'El mismo sentido de expectativa que «todavía no ha llegado», con el simple frecuente en varias variedades americanas.', en: 'Same expectation meaning as “todavía no ha llegado”.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca dos titulares de hoy sobre la misma noticia, uno de un diario de España y otro de un diario americano, y compara los pasados.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 217 · Leísmo y régimen pronominal en variedades cultas', text: 'Hoy has visto que una misma forma verbal se reparte de manera distinta según la zona, y que adaptar a un público no es corregir a nadie. En la clase 217 aplicas ese mismo criterio a los pronombres: el leísmo y otros usos de «le», «lo» y «la» en variedades cultas, qué acepta la norma y cómo elegir según el público.', en: 'Today you saw that one verb form is distributed differently across regions, and that adapting to an audience is not correcting anyone. Class 217 applies the same criterion to pronouns: leísmo and other uses of “le”, “lo” and “la” in educated varieties, what the norm accepts, and how to choose for an audience.', href: '/gramatica/leismo-y-regimen-pronominal-en-variedades', label: 'Ir a la clase 217' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Hoy ha llegado el audio”, “Hoy llegó el audio” y “¡El audio había sido de una hora!”?». Respuesta esperada: compuesto hodiernal (mayor parte de España); simple hodiernal (gran parte de América, Canarias, Galicia y Asturias); pluscuamperfecto de descubrimiento (tendencia andina). Tarea: la nota de estilo de Escribir.' },
        ] },
      ],
    },
  ],
};
