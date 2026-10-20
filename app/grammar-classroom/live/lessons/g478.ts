import type { LiveLesson } from '../types';

/**
 * Lesson 478 · C1 · Infinitivos dependientes y sujetos implícitos (course unit G178).
 * Builds on G095 (lesson 395: infinitive vs que + subjunctive, same / different subject,
 * te permito salir), G129 (lesson 429: influence verbs in the past, hacer / dejar + inf.),
 * G082 (lesson 382: infinitive after verbs and prepositions, al + inf.), G152 (lesson 452:
 * first look at me alegro de haberte conocido, habiendo revisado) and G172 (lesson 472:
 * de + infinitive with a postposed subject).
 * Scene: Valencia, the archive of the Fundación Amalia Roca (papers of a fictional
 * 19th-century botanist). On Monday the 1887 field notebook is missing from its box.
 * Elena Duarte (director), Marcos Ibáñez (archivist), Nadia Ferrer (visiting researcher
 * from Barranquilla), Clara Vidal (restorer) and Rafael (night guard). It was only put back
 * in the wrong, identical box. In the voice message (es-ES-ElviraNeural, usted) Elena reports
 * to the foundation's president, Pilar Lozano.
 * Content (C1, NGLE ch. 26): who is the implicit subject of a dependent infinitive (control):
 * the main subject (quiero ir, prometí ayudarte, pedí salir antes, afirma no saber nada),
 * the object with verbs of influence and causatives (te permito salir, me obligaron a firmar,
 * les prohibieron entrar, te aconsejo descansar = que descanses, me hizo repetir) and with
 * perception verbs (lo vi salir, oí llorar a alguien, oyó abrirse la puerta), the dative
 * with gustar-type verbs, a generic subject (es importante llegar pronto); otherwise
 * que + finite verb. Compound infinitive for anteriority (siento haber llegado tarde, niega
 * haberlo tocado vs recuerda cerrar; después de haber leído = después de leer) and compound
 * gerund (habiendo terminado, formal). Explicit subject after the infinitive (al llegar yo,
 * antes de salir tú, el haberlo dicho tú). Nominal infinitive (el fumar, el continuo quejarse,
 * el ir y venir; lexicalised los deberes, los amaneceres). Errors: *espero que llegar,
 * *antes de que salir, «para yo entender» (frequent in Caribbean colloquial speech, not
 * standard), *nos obligaron que, *recuerdo de haber, ambiguous «al llegar al hotel, la
 * recepcionista…». Audit gap 24 (compound infinitive and gerund at C1) is part of the core.
 * Ampliación: creo haberlo entendido (formal), pedir + infinitive, lexicalised infinitives.
 */
export const lesson: LiveLesson = {
  id: 478,
  level: 'C1',
  title: 'Infinitivos dependientes y sujetos implícitos',
  subtitle: 'Elegir entre infinitivo y «que» + verbo conjugado según quién hace la acción, y situar hechos anteriores con haber y habiendo.',
  legend: [
    { tone: 'blue', label: 'MISMO SUJETO O GENÉRICO · quiero revisar, antes de cerrar, el ir y venir' },
    { tone: 'teal', label: 'LO HACE EL COMPLEMENTO · te permito salir, lo vi salir, me obligaron a firmar' },
    { tone: 'orange', label: 'OTRO SUJETO · que + verbo conjugado, al llegar yo' },
    { tone: 'violet', label: 'ANTERIORIDAD · haber / habiendo + participio' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Quién hace la acción del infinitivo?', coach: 'El infinitivo no dice la persona: la frase sí. The infinitive hides the person; the sentence shows it.',
      steps: [
        { title: 'Un lunes raro en el archivo · A strange Monday at the archive', blocks: [
          { kind: 'lead', text: 'Valencia, archivo de la Fundación Amalia Roca. El cuaderno de campo de 1887 de la botánica no está en su caja. Elena Duarte, la directora, reconstruye lo que pasó con Marcos Ibáñez, el archivero, y con Nadia Ferrer, una investigadora de Barranquilla. En sus frases hay muchos infinitivos sin persona: «quiero revisar», «te permito entrar», «lo vi salir», «siento haber llegado tarde». Hoy aprendes a saber **quién hace cada acción** y a elegir entre infinitivo y «que» + verbo conjugado.', en: 'A notebook has gone missing from a foundation’s archive in Valencia. The people reconstructing what happened use many infinitives with no visible person. Today you learn to work out who performs each infinitive, and when Spanish needs «que» and a conjugated verb instead.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice, en cada una, quién va a revisar las cajas.', self: 'Lee las tres frases en voz alta y di, en cada una, quién va a revisar las cajas. (Say who is going to check the boxes in each sentence.)' } },
          { kind: 'compare', title: 'Tres frases, tres sujetos · Three sentences, three subjects', columns: [
            { tone: 'blue', label: 'MISMO SUJETO', sentence: 'Marcos quiere [[revisar|blue]] las cajas.', idea: 'Marcos quiere y Marcos revisa: un solo sujeto, infinitivo.', en: 'One subject for both verbs: Spanish uses the infinitive, exactly like English “wants to check”.' },
            { tone: 'orange', label: 'OTRO SUJETO', sentence: 'Elena quiere que Marcos [[revise|orange]] las cajas.', idea: 'Elena quiere, Marcos revisa: dos sujetos, «que» + subjuntivo.', en: 'Two subjects: Spanish cannot say «quiere Marcos revisar»; it needs que + subjunctive (English “wants Marcos to check”).' },
            { tone: 'teal', label: 'LO HACE EL COMPLEMENTO', sentence: 'Elena le [[permite revisar|teal]] las cajas.', idea: 'Elena permite, Marcos (le) revisa: con verbos de influencia, el infinitivo es posible con otro sujeto.', en: 'Verbs of permission, prohibition and obligation let the infinitive take the object (le = Marcos) as its subject.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nadia necesita ___ el cuaderno original para su tesis.', options: ['consultar', 'que consulte', 'consultando'], answer: 0, why: 'Nadia necesita y Nadia consulta: mismo sujeto → infinitivo.', en: 'Nadia needs to consult the original notebook for her thesis.' },
            { prompt: 'Elena prefiere que Nadia ___ con las fotocopias de momento.', options: ['trabaje', 'trabaja', 'trabajar'], answer: 0, why: 'Elena prefiere, Nadia trabaja: sujetos distintos → «que» + presente de subjuntivo.', en: 'For now, Elena would rather Nadia worked with the photocopies.' },
          ] },
        ] },
        { title: 'El sujeto implícito · The implicit subject', mascot: '/brand/mascot/studying.webp', coach: 'Mira el verbo principal. Look at the main verb.', blocks: [
          { kind: 'concept', tone: 'teal', label: '¿QUIÉN HACE LA ACCIÓN?', question: '¿Quién es el sujeto de un infinitivo que no lo dice?', en: 'The main verb decides who performs the infinitive. With wanting, trying, promising or claiming verbs it is the main subject; with verbs of influence, causatives and perception it is the object; with gustar-type verbs it is the dative; after an impersonal expression it is “anyone”. If none of these fits, use que + a conjugated verb.', formula: ['querer, intentar, prometer, afirmar, negar… + inf. → el SUJETO: Prometí ayudarte (yo ayudo)', 'permitir, prohibir, obligar a, aconsejar, hacer, dejar… + inf. → el COMPLEMENTO: Te permito salir (tú sales)', 'ver, oír, sentir, notar + inf. → el COMPLEMENTO: Lo vi salir (él sale)', 'me cuesta, te conviene, le encanta + inf. → el DATIVO · es importante + inf. → cualquiera'],
            meaning: 'El infinitivo no tiene persona, pero casi nunca es ambiguo: **el verbo principal** decide quién hace la acción. Con querer, prometer o intentar la hace el **sujeto**; con los verbos de **influencia** (permitir, prohibir, obligar, aconsejar), los **causativos** (hacer, dejar) y los de **percepción** (ver, oír), la hace el **complemento** (me, te, lo, le, a + persona). Si ninguna de estas opciones encaja, se usa **que + verbo conjugado**.',
            examples: [
              { es: 'Le [[prometí volver|blue]] el jueves. · Le [[permití volver|teal]] el jueves.', en: 'Same pattern, opposite readings: with prometer I come back; with permitir he or she comes back.' },
              { es: 'A Clara le [[aconsejé esperar|teal]] = Le aconsejé que [[esperara|orange]].', en: 'With advice verbs both options are correct and mean the same; the que-clause sounds a little more explicit.' },
              { es: 'Nos [[obligaron a firmar|teal]] el registro. · Les [[prohibieron entrar|teal]] sin guantes.', en: 'The person who is obliged or forbidden is the one who signs or enters.' },
              { es: '[[Me cuesta entender|blue]] lo que pasó. · [[Es importante revisar|blue]] cada caja.', en: 'With costar, the dative (me) is the one who understands; after an impersonal phrase, the subject is anyone.' },
            ],
            note: 'Querer, esperar, preferir, desear y necesitar **no** admiten infinitivo con otro sujeto: «Quiero que vengas», nunca «*Te quiero venir». Con **pedir**, el infinitivo se entiende normalmente referido al sujeto: «Pedí salir antes» = pedí permiso para salir yo. Para pedir a otra persona que haga algo, lo claro es «Te pedí que me ayudaras».' },
          { kind: 'table', title: 'Grupos de verbos · Verb groups', head: ['Verbo principal', 'Sujeto del infinitivo', 'Ejemplo'], rows: [
            ['querer, preferir, esperar, intentar, prometer, decidir', 'el sujeto (o «que» + subjuntivo con otro sujeto)', 'Marcos **promete revisar** todo. · Quiero **que revises** todo.'],
            ['afirmar, negar, asegurar, creer, reconocer (registro cuidado)', 'el sujeto', 'Clara **asegura no saber** nada. (= asegura que no sabe nada)'],
            ['permitir, prohibir, impedir, aconsejar, recomendar', 'el complemento indirecto (me, te, le…)', 'Te **aconsejo descansar**. = Te aconsejo que descanses.'],
            ['obligar a, ayudar a, invitar a, animar a', 'el complemento directo (me, te, lo, la…)', 'Nos **obligaron a firmar**. = Nos obligaron a que firmáramos.'],
            ['hacer, dejar (causativos)', 'el complemento', 'Elena **me hizo repetir** el inventario. · **Déjame pensar**.'],
            ['ver, oír, sentir, notar, mirar (percepción)', 'el complemento', '**La vi salir.** · **Oí llorar** a alguien.'],
          ], note: 'En los cuatro últimos grupos, el complemento hace dos papeles: es el objeto del verbo principal y el sujeto del infinitivo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Le prometí devolver la llave». ¿Quién devuelve la llave?', options: ['La otra persona', 'Yo', 'No se sabe'], answer: 1, why: 'Con «prometer», el infinitivo se refiere al sujeto: yo prometo y yo devuelvo.', en: 'Who is going to return the key?' },
            { prompt: '«Le permití devolver la llave el lunes». ¿Quién devuelve la llave?', options: ['No se sabe', 'La otra persona', 'Yo'], answer: 1, why: 'Con «permitir», el infinitivo se refiere al complemento (le): la otra persona la devuelve.', en: 'Same structure, different verb: who returns the key now?' },
          ] },
        ] },
        { title: 'Ver, oír, sentir + infinitivo · Perception verbs', mascot: '/brand/mascot/standing.webp', coach: 'Lo que viste, sin «que». What you saw, without «que».', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PERCEPCIÓN + INFINITIVO', question: '¿Cómo cuento lo que vi u oí hacer a otra persona?', en: 'After ver, oír, sentir or notar, the person or thing you perceive is the object of the main verb and the subject of the infinitive. The infinitive presents the whole event; the gerund shows it in progress; que + indicative reports a fact you noticed or found out.', formula: ['ver / oír + infinitivo + (a) persona: Vi salir a Clara · Vi a Clara salir', 'pronombre: La vi salir · Lo oí llegar', 'cosa: Oí abrirse la puerta · Sentí temblar el suelo'],
            meaning: 'Lo que se percibe es el **complemento** de ver u oír y, a la vez, el **sujeto** del infinitivo. La persona lleva «a» y puede ir antes o después del infinitivo: «Vi **a Clara** salir» / «Vi salir **a Clara**». Con pronombre: «**La** vi salir».',
            examples: [
              { es: 'Rafael [[oyó llorar|teal]] a alguien en la escalera.', en: 'Rafael heard someone crying on the stairs: the infinitive presents the event as something he perceived.' },
              { es: 'Marcos [[la vio salir|teal]] del taller con una carpeta.', en: 'Marcos saw her come out of the workshop with a folder: la is both the object of ver and the subject of salir.' },
              { es: 'De madrugada, el vigilante [[oyó abrirse|teal]] la puerta del depósito.', en: 'In the small hours the guard heard the store door open: with things, the pronominal infinitive (abrirse) is common.' },
            ],
            note: 'No se pone «que» delante del infinitivo: «*Vi que salir». Si quieres un verbo conjugado, cambia el sentido: «Vi que Clara salía» = me di cuenta de que salía.' },
          { kind: 'table', title: 'Infinitivo, gerundio o «que» · Three ways to report a perception', head: ['Forma', 'Ejemplo', 'Qué presenta'], rows: [
            ['ver + **infinitivo**', 'Vi a Clara **cerrar** el armario.', 'el hecho completo (I saw her close it)'],
            ['ver + **gerundio**', 'Vi a Clara **cerrando** el armario.', 'el hecho en curso, en ese momento (closing it)'],
            ['ver **que** + indicativo', 'Vi **que** el armario **estaba** cerrado.', 'un dato que comprobé (I noticed that…)'],
          ], note: 'Con «oír» y «escuchar», «que» + indicativo suele significar «me enteré»: «Oí que habían cerrado el archivo» = me dijeron que lo habían cerrado.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Desde la ventana, Elena ___ a los restauradores.', options: ['vio llegar', 'vio llegando que', 'vio que llegar'], answer: 0, why: 'Percepción + infinitivo sin «que»: vio llegar a los restauradores.', en: 'From the window, Elena saw the restorers arrive.' },
            { prompt: '«Oí que Rafael cerraba la puerta» frente a «Oí a Rafael cerrar la puerta». ¿Qué cuenta la segunda?', options: ['El ruido que oí directamente', 'Una intención de Rafael', 'Que alguien me lo contó'], answer: 0, why: 'Percepción + infinitivo cuenta lo que oíste tú mismo. «Oí que…» puede significar también que te enteraste por otros.', en: 'Which meaning does the infinitive version express?' },
          ] },
        ] },
        { title: 'Antes de la acción principal: haber y habiendo · Anteriority', mascot: '/brand/mascot/speaking.webp', coach: 'Lo terminado va con haber. Finished actions take haber.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'INFINITIVO Y GERUNDIO COMPUESTOS', question: '¿La acción del infinitivo o del gerundio ocurrió antes que la del verbo principal?', en: 'The simple infinitive and gerund are simultaneous with the main verb or later than it. To present an action as already completed, use haber + participle (infinitive) or habiendo + participle (gerund). Pronouns attach to haber or habiendo.', formula: ['haber + participio: siento haber llegado tarde · niega haberlo tocado', 'por / sin / tras / después de + haber + participio', 'habiendo + participio, …  (formal): Habiendo revisado el registro, Elena…'],
            meaning: 'El infinitivo simple presenta la acción **a la vez** o **después**: «Recuerda **cerrar** el armario» (luego). El compuesto la presenta **terminada antes**: «Recuerda **haber cerrado** el armario» (ya lo hizo). Lo mismo con el gerundio: «**Revisando** el registro» (mientras) / «**Habiendo revisado** el registro» (después de revisarlo). Los pronombres van pegados: **haberlo**, **habiéndola**.',
            examples: [
              { es: '[[Siento haber llegado|violet]] tarde: el tranvía se paró en el puente.', en: 'Sorry for being late: the lateness is already over. «Siento llegar tarde» is what you say as you walk in.' },
              { es: 'Clara [[niega haberlo sacado|violet]] del taller. · Clara jura no [[sacarlo|blue]] nunca del taller.', en: 'Denying a past act needs the compound form; the simple one turns it into a habit or a promise.' },
              { es: 'Despidieron al conserje [[por haber mentido|violet]] en el informe.', en: 'The porter was dismissed for having lied: por + compound infinitive gives an earlier cause.' },
              { es: '[[Habiendo terminado|violet]] el inventario, Elena convocó una reunión.', en: 'Having finished the inventory, Elena called a meeting: typical of reports and formal narration.' },
            ],
            note: 'Con «después de» y «tras», que ya indican anterioridad, el infinitivo simple es lo más frecuente y significa lo mismo: «Después de **leer** el informe» = «Después de **haber leído** el informe». El compuesto subraya que la acción quedó terminada.' },
          { kind: 'table', title: 'Simple o compuesto · Simple or compound', head: ['Simple: a la vez o después', 'Compuesto: antes'], rows: [
            ['Recuerda **cerrar** la sala. (remember to close)', 'Recuerda **haber cerrado** la sala. (remembers closing)'],
            ['Niega **tocar** los originales. (habitualmente)', 'Niega **haber tocado** los originales. (aquella vez)'],
            ['Se fue **sin firmar**. (al irse no firmó)', 'Se fue **sin haber firmado** el registro. (no lo había firmado antes)'],
            ['**Revisando** el registro, Elena encontró el error. (mientras)', '**Habiendo revisado** el registro, Elena descartó a los visitantes. (después)'],
          ], note: 'El gerundio compuesto es propio de la lengua escrita y formal. En la conversación se dice «Después de revisar…», «Cuando revisó…» o «Como ya había revisado…».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rafael reconoce no ___ la hora de entrada el sábado.', options: ['que anotó', 'anotar', 'haber anotado'], answer: 2, why: 'Reconoce ahora algo que no hizo antes (el sábado): infinitivo compuesto.', en: 'Rafael admits he didn’t write down the time of entry on Saturday.' },
            { prompt: '___ el contrato, la restauradora empezó a trabajar.', options: ['Habiendo firmando', 'Habiendo firmado', 'Firmado habiendo'], answer: 1, why: 'Gerundio compuesto: habiendo + participio. Primero firmó, después empezó.', en: 'Having signed the contract, the restorer started work.' },
          ] },
        ] },
        { title: 'Sujeto expreso e infinitivo como sustantivo · Explicit subject and nominal infinitive', mascot: '/brand/mascot/portrait.webp', coach: 'El sujeto, detrás. The subject goes after.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'INFINITIVO CON SUJETO EXPRESO', question: '¿Y si el sujeto del infinitivo no coincide con ninguno de la frase?', en: 'After a preposition (al, antes de, por, sin…) the infinitive can carry its own subject, placed after the verb. It is correct and common with al + infinitive; with antes de or para, que + subjunctive is usually more natural.', formula: ['al + infinitivo + SUJETO: Al llegar yo, ya se habían ido.', 'antes de / después de + infinitivo + SUJETO: Antes de llegar tú, ya lo habíamos decidido.', 'el + infinitivo + SUJETO: El haberlo encontrado tú tan pronto nos salvó.'],
            meaning: 'En la lengua estándar, el sujeto propio del infinitivo va **detrás** del verbo: «Al entrar **la directora**, todos se callaron». Con «antes de» y «para», lo más frecuente con otro sujeto es **que + subjuntivo**: «antes de que llegaras», «para que lo entiendas».',
            examples: [
              { es: '[[Al abrir Marcos|orange]] la caja, vimos que estaba vacía.', en: 'When Marcos opened the box, we saw it was empty: the infinitive has its own subject, placed after it.' },
              { es: '[[Antes de llegar tú|orange]], ya habíamos llamado al vigilante. = Antes de que llegaras…', en: 'Before you arrived, we had already called the guard. Both versions are correct; the que-version is the more frequent one.' },
              { es: '[[El haberlo dicho tú|orange]] delante de todos fue un acierto.', en: 'Your having said it in front of everyone was the right move: a nominal infinitive clause with its own subject.' },
            ],
            note: 'Cuidado con el sujeto implícito: «Al entrar en la sala, el vigilante nos saludó» se entiende como «cuando **el vigilante** entró». Si entramos nosotros: «Al entrar nosotros…» o «Cuando entramos…».' },
          { kind: 'table', title: 'El infinitivo como sustantivo · The infinitive as a noun', head: ['Uso', 'Ejemplo', 'Comentario'], rows: [
            ['sujeto, sin artículo', '**Fumar** perjudica la salud.', 'la opción neutra'],
            ['con artículo «el»', '**El fumar** perjudica la salud. · **El tener que** madrugar me agota.', 'presenta la acción como un tema; frecuente y correcto'],
            ['con adjetivo o posesivo', '**El continuo quejarse** de Marcos. · **Su ir y venir** por los pasillos.', 'más nominal; registro cuidado o expresivo'],
            ['lexicalizado (sustantivo pleno, con plural)', '**los deberes**, **el amanecer** / **los amaneceres**, **los andares**', 'ya es un sustantivo del diccionario'],
          ], note: 'El infinitivo con artículo sigue siendo verbo: admite complementos y negación («el no saber nada», «el haberlo dicho tú»). Con un adjetivo delante («el continuo quejarse») se acerca más al sustantivo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elige la versión estándar: ___, la sala ya estaba cerrada.', options: ['Al yo llegar', 'Al llegar yo', 'Al que llegué'], answer: 1, why: 'El sujeto expreso del infinitivo va detrás: al llegar yo.', en: 'When I arrived, the room was already closed.' },
            { prompt: '«Me molesta el continuo sonar del teléfono». ¿Qué es «el continuo sonar»?', options: ['Un gerundio', 'Un infinitivo usado como sustantivo', 'Un error: falta «que»'], answer: 1, why: 'Es un infinitivo nominal: lleva artículo y adjetivo, como un sustantivo, y sigue expresando una acción.', en: 'The constant ringing of the phone bothers me: what kind of form is it?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Que + infinitivo: nunca. Que + infinitive: never.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: el sujeto, la forma o el registro. Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿el sujeto, la forma o el registro? Toca para ver la corrección. (Is it the subject, the form or the register?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Espero que llegar a tiempo a la reunión.', right: 'Espero llegar a tiempo a la reunión.', why: '«Que» nunca introduce un infinitivo. Mismo sujeto (yo espero, yo llego): solo infinitivo.' },
            { wrong: 'Antes de que salir, apaga el deshumidificador.', right: 'Antes de salir, apaga el deshumidificador.', why: '«Antes de que» pide subjuntivo; con el mismo sujeto basta «antes de» + infinitivo.' },
            { wrong: 'Quiero que yo revise el inventario.', right: 'Quiero revisar yo mismo el inventario.', why: 'Mismo sujeto: infinitivo. Para insistir en la persona, «yo mismo» detrás del infinitivo.' },
            { wrong: 'Nos obligaron que firmáramos el registro.', right: 'Nos obligaron a firmar el registro. (o: a que firmáramos)', why: '«Obligar» lleva «a», con infinitivo o con «que» + subjuntivo.' },
            { wrong: 'Clara niega tocar el cuaderno el jueves.', right: 'Clara niega haber tocado el cuaderno el jueves.', why: 'Se niega un hecho anterior y concreto: infinitivo compuesto.' },
            { wrong: 'Recuerdo de haber visto la caja abierta.', right: 'Recuerdo haber visto la caja abierta. (o: Me acuerdo de haber visto…)', why: '«Recordar» no lleva «de»; «acordarse» sí.' },
            { wrong: 'Explícamelo otra vez para yo entenderlo. (texto formal)', right: 'Explícamelo otra vez para que yo lo entienda.', why: '«Para yo entender» es frecuente en el habla coloquial del Caribe (Puerto Rico, República Dominicana, Cuba, Venezuela, la costa colombiana) y se oye en otras zonas, pero no es la forma estándar: con otro sujeto, «para que» + subjuntivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta en la lengua estándar?', options: ['Te aconsejo que descansar un poco.', 'Te aconsejo de descansar un poco.', 'Te aconsejo descansar un poco.'], answer: 2, why: '«Aconsejar» + infinitivo, sin preposición; el complemento (te) es quien descansa. También: «Te aconsejo que descanses».', en: 'I advise you to rest a little.' },
            { prompt: 'Nadia escribe un correo formal: «Les envío el plano ___». ¿Qué opción es la más adecuada?', options: ['para orientarse ustedes', 'para que se orienten', 'para ustedes orientarse'], answer: 1, why: 'Yo envío, ustedes se orientan: sujetos distintos. En un texto formal, «para que» + subjuntivo.', en: 'I am sending you the map so that you can find your way.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice dos frases sobre su infancia con «mis padres me dejaban / me obligaban a + infinitivo» y una disculpa real con «siento haber…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La caja vacía', coach: 'Toca cada forma marcada. Tap each marked form.',
      steps: [
        { title: 'En la sala de consulta · In the reading room', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Marcos (y después Nadia). Luego tu alumno toca cada forma marcada y dice quién hace la acción del infinitivo.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y di quién hace la acción del infinitivo. (Tap each marked form and say who performs the action.)' } },
          { kind: 'explore', title: 'El cuaderno de 1887', setting: 'Lunes, nueve y cuarto, en la sala de consulta del archivo. Marcos acaba de abrir la caja del cuaderno de campo y está vacía. Nadia, investigadora de Barranquilla, llega tarde. Se tratan de tú. (Monday, 9:15, in the archive reading room.)', lines: [
            { who: 'Nadia', text: 'Buenos días. [[Siento haber llegado|violet]] tarde: el tranvía se quedó parado en el puente. ¿Qué pasa? Hay un silencio rarísimo.', en: 'Morning. Sorry I’m late: the tram got stuck on the bridge. What’s going on? It’s strangely quiet.' },
            { who: 'Elena', text: 'El cuaderno de 1887 no está en su caja. Marcos acaba de abrirla y está vacía.', en: 'The 1887 notebook isn’t in its box. Marcos has just opened it and it’s empty.' },
            { who: 'Marcos', text: 'Y yo [[recuerdo haber cerrado|violet]] el armario el viernes a las siete, [[antes de apagar|blue]] las luces. Elena, tú [[me viste cerrarlo|teal]].', en: 'And I remember locking the cupboard on Friday at seven, before switching off the lights. Elena, you saw me lock it.' },
            { who: 'Elena', text: 'Te vi, sí. Lo raro es otra cosa: Rafael, el vigilante, dice que el sábado [[oyó abrirse|teal]] la puerta del depósito.', en: 'I did. The odd thing is something else: Rafael, the guard, says he heard the store door open on Saturday.' },
            { who: 'Nadia', text: '¿El sábado? Pero si los fines de semana [[no dejan entrar|teal]] a nadie.', en: 'On Saturday? But they don’t let anyone in at weekends.' },
            { who: 'Marcos', text: 'A nadie sin autorización. Pero este sábado el patronato [[les permitió trabajar|teal]] a los restauradores, y con [[el ir y venir|blue]] de cajas para la exposición, cualquiera sabe.', en: 'Not without authorisation. But this Saturday the board let the restorers work, and with boxes coming and going for the exhibition, who knows.' },
            { who: 'Elena', text: 'Por eso, Nadia, [[prefiero que no comentes|orange]] nada todavía con los demás investigadores.', en: 'That’s why, Nadia, I’d rather you didn’t mention anything to the other researchers yet.' },
            { who: 'Nadia', text: 'Claro, no diré nada. Pero, [[para yo entenderlo|orange]] bien: ¿alguien sacó el cuaderno del depósito la semana pasada?', en: 'Of course, I won’t say a word. But just so I understand: did anyone take the notebook out of the store last week?' },
            { who: 'Marcos', text: 'Pues… sí. El jueves Clara, la restauradora, [[me pidió que le dejara|orange]] fotografiar unas páginas en el taller.', en: 'Well… yes. On Thursday Clara, the restorer, asked me to let her photograph a few pages in the workshop.' },
            { who: 'Elena', text: '¿Y [[se lo dejaste llevar|teal]] sin anotarlo en el registro?', en: 'And you let her take it without writing it in the log?' },
            { who: 'Marcos', text: 'Solo una hora, y me lo devolvió esa misma tarde. [[Habiéndola visto dejarlo|violet]] en el armario, no volví a mirar.', en: 'Only for an hour, and she brought it back that same afternoon. Having seen her put it in the cupboard, I didn’t check again.' },
            { who: 'Elena', text: 'Pues ya sabemos por dónde empezar. Nadia, acompáñame al taller. Marcos, [[necesito que revises|orange]] las fotos de Clara y el registro del sábado.', en: 'Well, now we know where to start. Nadia, come with me to the workshop. Marcos, I need you to go through Clara’s photos and Saturday’s log.' },
          ], notes: {
            'Siento haber llegado': 'Infinitivo compuesto: el retraso ya ha terminado cuando Nadia se disculpa. Mismo sujeto: Nadia siente y Nadia llegó tarde.',
            'recuerdo haber cerrado': 'Recordar + infinitivo compuesto = me acuerdo de algo que hice antes. Compara: «recuerda cerrar» (hazlo después).',
            'antes de apagar': 'Antes de + infinitivo: mismo sujeto (Marcos cierra y Marcos apaga), sin «que».',
            'me viste cerrarlo': 'Percepción + infinitivo: «me» es el complemento de «viste» y el sujeto de «cerrar». «Lo» (el armario) va pegado al infinitivo.',
            'oyó abrirse': 'Percepción + infinitivo con una cosa: la puerta se abre. El infinitivo pronominal (abrirse) es lo normal aquí.',
            'no dejan entrar': 'Dejar (causativo) + infinitivo: «a nadie» es quien no entra. El sujeto de «dejan» es impersonal (ellos, la fundación).',
            'les permitió trabajar': 'Verbo de influencia + infinitivo: el complemento (les = a los restauradores) es quien trabaja. = les permitió que trabajaran.',
            'el ir y venir': 'Infinitivo nominal, con artículo: el movimiento constante de cajas. Expresión muy frecuente.',
            'prefiero que no comentes': 'Elena prefiere, Nadia comenta: sujetos distintos y verbo de preferencia → «que» + subjuntivo. Aquí el infinitivo no es posible.',
            'para yo entenderlo': 'Nadia es de Barranquilla: en el habla coloquial del Caribe es frecuente «para + sujeto + infinitivo». Es una muestra regional auténtica; en la lengua estándar, sobre todo escrita, se dice «para que yo lo entienda».',
            'me pidió que le dejara': 'Clara pide a Marcos que él haga algo: con «pedir» y otra persona, lo claro es «que» + subjuntivo (en pasado, imperfecto). Dentro, «dejar + fotografiar»: «le» (Clara) es quien fotografía.',
            'se lo dejaste llevar': 'Dejar + infinitivo con dos pronombres: se (= le, a Clara, que lleva) + lo (el cuaderno). Con «dejar» y «hacer», los pronombres suben al verbo principal.',
            'Habiéndola visto dejarlo': 'Gerundio compuesto (anterior a «no volví a mirar») + percepción con infinitivo: la (Clara) es quien deja; lo (el cuaderno) es lo que deja.',
            'necesito que revises': '«Necesitar» no admite infinitivo con otro sujeto: Elena necesita, Marcos revisa → «que» + subjuntivo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué llega tarde Nadia?', options: ['Porque se le olvidó la cita.', 'Porque el tranvía se quedó parado.', 'Porque estaba en el taller.'], answer: 1, why: '«Siento haber llegado tarde: el tranvía se quedó parado en el puente».', en: 'Why is Nadia late?' },
            { prompt: '¿Quién estuvo en el archivo el sábado?', options: ['Nadia y Elena.', 'Nadie: el archivo estaba cerrado.', 'Los restauradores, con permiso del patronato.'], answer: 2, why: '«Este sábado el patronato les permitió trabajar a los restauradores».', en: 'Who was in the archive on Saturday?' },
            { prompt: '¿Qué error reconoce Marcos?', options: ['Haber llegado tarde el viernes.', 'Haber perdido la llave del armario.', 'Haber dejado salir el cuaderno sin anotarlo y no haber vuelto a mirar.'], answer: 2, why: 'Elena le pregunta si se lo dejó llevar «sin anotarlo en el registro» y él admite que «no volvió a mirar».', en: 'What mistake does Marcos admit?' },
          ] },
        ] },
        { title: '¿Quién lo hace? · Who does it?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'El sujeto del verbo dependiente · The subject of the dependent verb', categories: [
            { id: 'sujeto', label: 'EL SUJETO DE LA PRINCIPAL · infinitivo', tone: 'blue' },
            { id: 'complemento', label: 'EL COMPLEMENTO (me, te, le, a + persona) · infinitivo', tone: 'teal' },
            { id: 'que', label: 'OTRO SUJETO · «que» + verbo conjugado', tone: 'orange' },
          ], items: [
            { text: 'Recuerdo haber cerrado el armario.', answer: 'sujeto', why: 'Marcos recuerda y Marcos cerró.' },
            { text: 'Tú me viste cerrarlo.', answer: 'complemento', why: 'Percepción: «me» (Marcos) es quien cierra.' },
            { text: 'El patronato les permitió trabajar.', answer: 'complemento', why: 'Influencia: «les» (los restauradores) son quienes trabajan.' },
            { text: 'Prefiero que no comentes nada.', answer: 'que', why: '«Preferir» no admite infinitivo con otro sujeto: «que» + subjuntivo.' },
            { text: 'Siento haber llegado tarde.', answer: 'sujeto', why: 'Nadia siente y Nadia llegó tarde.' },
            { text: 'Necesito que revises las fotos.', answer: 'que', why: 'Elena necesita, Marcos revisa: «que» + subjuntivo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno cuenta qué le dejaban hacer y qué le prohibían en un lugar de trabajo o de estudio que conoce.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero, ¿quién lo hace? Después, ¿cuándo? First who, then when.',
      steps: [
        { title: 'En el taller de restauración · In the restoration workshop', blocks: [
          { kind: 'choice', items: [
            { context: 'Clara Vidal explica qué hizo el jueves. (Clara explains what she did on Thursday.)', prompt: 'Quería ___ las páginas antes de montar la exposición.', options: ['que fotografiara', 'fotografiar', 'fotografiando'], answer: 1, why: 'Clara quería y Clara fotografía: mismo sujeto → infinitivo. «Que fotografiara» exigiría otro sujeto.', en: 'I wanted to photograph the pages before setting up the exhibition.' },
            { context: 'Las normas del archivo. (The archive rules.)', prompt: 'El patronato nos obliga ___ cada salida de documentos.', options: ['que firmemos', 'firmar', 'a firmar'], answer: 2, why: '«Obligar a» + infinitivo: el complemento (nos) es quien firma. Sin «a» no es correcto.', en: 'The board makes us sign for every document that leaves the store.' },
            { context: 'Clara habla de lo que pasó la semana pasada. (Clara talks about last week.)', prompt: 'Clara asegura no ___ el cuaderno del taller en toda la semana.', options: ['que sacó', 'haber sacado', 'sacar'], answer: 1, why: 'Asegura ahora algo sobre un periodo ya terminado: infinitivo compuesto. «Asegura no sacar» sería una costumbre o una promesa.', en: 'Clara insists she didn’t take the notebook out of the workshop all week.' },
            { context: 'Rafael cuenta lo que pasó el sábado. (Rafael on Saturday.)', prompt: 'Rafael asegura que ___ subir por la escalera de servicio.', options: ['oyó a alguien', 'oyó alguien', 'oyó que alguien'], answer: 0, why: 'Percepción + infinitivo; la persona percibida lleva «a»: oyó a alguien subir. «Que» no puede ir con infinitivo.', en: 'Rafael says he heard someone go up the service stairs.' },
            { context: 'Elena entra en el taller. (Elena walks into the workshop.)', prompt: 'Al ___ Elena al taller, Clara ya tenía las fotos en la pantalla.', options: ['que llegó', 'llegó', 'llegar'], answer: 2, why: 'Al + infinitivo con sujeto expreso detrás: al llegar Elena = cuando llegó Elena.', en: 'When Elena got to the workshop, Clara already had the photos on screen.' },
          ] },
        ] },
        { title: '¿A la vez o antes? · At the same time, or before?', blocks: [
          { kind: 'classify', title: 'Relación temporal con el verbo principal · Time relation to the main verb', categories: [
            { id: 'simul', label: 'A LA VEZ O DESPUÉS · infinitivo o gerundio simple', tone: 'blue' },
            { id: 'ant', label: 'ANTES · haber / habiendo + participio', tone: 'violet' },
          ], items: [
            { text: 'Clara niega haber sacado el cuaderno del taller.', answer: 'ant', why: 'Niega ahora un hecho anterior: compuesto.' },
            { text: 'Habiendo revisado el registro, Elena descartó a los visitantes.', answer: 'ant', why: 'Primero revisó y después descartó: gerundio compuesto.' },
            { text: 'Al abrir la caja, Nadia notó un olor a humedad.', answer: 'simul', why: 'Al + infinitivo: en el mismo momento.' },
            { text: 'Rafael se disculpó por no haber anotado la hora.', answer: 'ant', why: 'La falta (no anotar) fue antes que la disculpa.' },
            { text: 'Trabajando con guantes, Clara protege el papel.', answer: 'simul', why: 'Gerundio simple: mientras trabaja.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Espero que encontrar el cuaderno antes de la inauguración.', ok: false, options: ['Espero que encontrando el cuaderno antes de la inauguración.', 'Espero de encontrar el cuaderno antes de la inauguración.', 'Espero encontrar el cuaderno antes de la inauguración.'], answer: 2, why: 'Mismo sujeto (yo espero, yo encuentro): infinitivo sin «que» y sin «de».' },
            { sentence: 'Antes de que salir del depósito, Marcos apaga siempre el deshumidificador.', ok: false, options: ['Antes que salir del depósito, Marcos apaga siempre el deshumidificador.', 'Antes de salir del depósito, Marcos apaga siempre el deshumidificador.', 'Antes de que sale del depósito, Marcos apaga siempre el deshumidificador.'], answer: 1, why: 'Mismo sujeto: «antes de» + infinitivo. «Que» nunca va con infinitivo.' },
            { sentence: 'La directora nos prohibió tocar los documentos sin guantes.', ok: true, why: 'Correcta: con «prohibir», el complemento (nos) es quien no toca.' },
            { sentence: 'Recuerdo de haber visto la caja en su sitio el viernes.', ok: false, options: ['Recuerdo que haber visto la caja en su sitio el viernes.', 'Recuerdo haber visto la caja en su sitio el viernes.', 'Me recuerdo haber visto la caja en su sitio el viernes.'], answer: 1, why: '«Recordar» no lleva «de» («acordarse de» sí). Hecho anterior: infinitivo compuesto.' },
            { sentence: 'Le prometí a Clara de ayudarla con el inventario.', ok: false, options: ['Le prometí a Clara ayudándola con el inventario.', 'Le prometí a Clara que la ayude con el inventario.', 'Le prometí a Clara ayudarla con el inventario.'], answer: 2, why: '«Prometer» + infinitivo, sin «de»: yo prometo y yo ayudo.' },
            { sentence: 'Nadia vio a Clara salir del taller con una carpeta.', ok: true, why: 'Correcta: percepción + infinitivo; «a Clara» es quien sale.' },
          ] },
        ] },
        { title: 'El grupo del archivo · The archive team chat', blocks: [
          { kind: 'chat-fill', title: 'Lunes, una de la tarde · Monday, 1 p.m.', lines: [
            { who: 'Elena', text: 'Clara dice que el jueves Marcos le dejó ___ el cuaderno al taller.', options: ['llevar', 'que llevar', 'llevando'], answer: 0, why: 'Dejar + infinitivo: «le» (Clara) es quien lleva el cuaderno.' },
            { who: 'Marcos', text: 'Sí, lo siento. Debería ___ la caja el viernes.', options: ['abierto', 'haber abierto', 'abrir'], answer: 1, why: 'Debería + infinitivo compuesto: algo que convenía hacer en el pasado y no se hizo.' },
            { who: 'Nadia', text: 'Clara insiste en que ___ juntas las fotos del jueves.', options: ['revisamos', 'revisar', 'revisemos'], answer: 2, why: 'Clara insiste, nosotras revisamos: sujetos distintos y petición → «que» + subjuntivo.' },
            { who: 'Elena', text: 'Rafael, ¿a qué hora ___ cerrarse la puerta del depósito?', options: ['oíste', 'oíste de', 'oíste que'], answer: 0, why: 'Percepción + infinitivo, sin «que» ni preposición: oíste cerrarse la puerta.' },
            { who: 'Rafael', text: 'Sobre las once. Y siento no ___ antes: pensé que era el equipo de restauración.', options: ['haber avisado', 'avisar', 'que avisé'], answer: 0, why: 'La falta de aviso es anterior a la disculpa: infinitivo compuesto.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Elena', 'nos', 'hizo', 'firmar', 'el', 'registro', 'a', 'todos'], accept: ['Elena nos hizo firmar el registro a todos', 'Elena nos hizo firmar a todos el registro', 'A todos nos hizo firmar el registro Elena'], en: 'Elena made all of us sign the log.' },
            { tiles: ['Nadia', 'afirma', 'no', 'haber', 'visto', 'a', 'nadie', 'en', 'el', 'depósito'], accept: ['Nadia afirma no haber visto a nadie en el depósito'], en: 'Nadia states that she did not see anyone in the store.' },
            { tiles: ['Habiendo', 'revisado', 'las', 'fotos,', 'Clara', 'encontró', 'la', 'pista'], accept: ['Habiendo revisado las fotos, Clara encontró la pista'], en: 'Having gone through the photos, Clara found the clue.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Otra forma de decirlo · Another way to say it', items: [
            { prompt: 'Elena: «Les prohíbo que entren en el depósito sin mí».', instruction: 'Usa prohibir + infinitivo. Empieza: «Les prohíbo…».', accept: ['Les prohíbo entrar en el depósito sin mí'] },
            { prompt: 'Rafael vio que Clara salía del taller a las ocho.', instruction: 'Usa ver + infinitivo (el hecho completo). Empieza: «Rafael…».', accept: ['Rafael vio salir a Clara del taller a las ocho', 'Rafael vio a Clara salir del taller a las ocho', 'Rafael la vio salir del taller a las ocho', 'Rafael vio salir del taller a Clara a las ocho'] },
            { prompt: 'Marcos: «No abrí la caja el viernes y lo siento».', instruction: 'Una frase con infinitivo compuesto. Empieza: «Siento…».', accept: ['Siento no haber abierto la caja el viernes', 'Siento no haberla abierto el viernes'] },
            { prompt: 'Cuando entró la directora, todos dejaron de hablar.', instruction: 'Usa «al» + infinitivo con el sujeto expreso.', accept: ['Al entrar la directora, todos dejaron de hablar', 'Todos dejaron de hablar al entrar la directora'] },
            { prompt: 'Elena terminó el inventario y después escribió el informe.', instruction: 'Registro formal: empieza con «Habiendo…».', accept: ['Habiendo terminado el inventario, Elena escribió el informe'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un pequeño incidente real (algo perdido, un malentendido) con un verbo de percepción + infinitivo, un verbo de influencia + infinitivo y una disculpa con «siento haber / no haber…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El mensaje de Elena', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Para la presidenta de la fundación · For the foundation’s president', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada infinitivo o gerundio y dice quién hace la acción y si es anterior. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada infinitivo o gerundio y di quién hace la acción. Elena habla de «usted» a la presidenta. (Elena addresses the president as «usted».)' } },
          { kind: 'listen', title: 'El mensaje de Elena', channel: 'MENSAJE DE VOZ · DE ELENA DUARTE PARA PILAR LOZANO', src: '/audio/grammar-live/478.mp3',
            before: 'Es martes por la mañana. Elena deja un mensaje de voz a la presidenta de la fundación. ¿Qué crees que le cuenta: dónde estaba el cuaderno, quién tuvo la culpa, qué va a cambiar? (Elena leaves the foundation’s president a voice message. What do you think she tells her?)',
            gist: { prompt: '¿Cuál es la idea principal del mensaje? · What is the main idea?', options: ['El cuaderno apareció: fue un error de cajas y Elena cambiará el protocolo.', 'Alguien robó el cuaderno y Elena ha llamado a la policía.', 'Elena dimite por lo que ha pasado.'], answer: 0, why: 'Cuenta que el cuaderno ha aparecido en otra caja, explica qué pasó y anuncia un protocolo nuevo.', en: 'The notebook turned up in the wrong box, and the procedure will change.' },
            details: [
              { prompt: '¿Dónde estaba el cuaderno?', options: ['En el taller de restauración.', 'En la caja del herbario.', 'En el despacho de Elena.'], answer: 1, why: '«Lo devolvió esa misma tarde, pero en otra caja, la del herbario, que es idéntica».', en: 'Where was the notebook?' },
              { prompt: '¿Cómo lo encontró Nadia?', options: ['Revisando las fotos del jueves, vio la etiqueta de la caja.', 'Se lo dijo Rafael.', 'Abrió todas las cajas del armario.'], answer: 0, why: '«Habiendo revisado con Marcos las fotos del jueves, se fijó en la etiqueta de la caja».', en: 'How did Nadia find it?' },
              { prompt: '¿Qué oyó Rafael el sábado?', options: ['A alguien llorar en la escalera.', 'Una alarma.', 'Una puerta que se cerraba.'], answer: 2, why: '«Rafael oyó cerrarse una puerta, sí, pero era el equipo de restauración».', en: 'What did Rafael hear on Saturday?' },
              { prompt: '¿Qué cambia en el protocolo?', options: ['Nadie podrá entrar en el depósito.', 'Todo el personal tendrá que firmar cada salida de documentos.', 'Los restauradores no podrán trabajar los sábados.'], answer: 1, why: '«Obligaremos a todo el personal a firmar cada salida de documentos».', en: 'What changes in the procedure?' },
            ],
            transcript: 'Buenos días, señora Lozano, le habla Elena Duarte, del archivo. [[Siento no haberla llamado|violet]] ayer, pero prefería tener toda la información antes de molestarla. Primero, la buena noticia: el cuaderno de campo de Amalia Roca ha aparecido y está en perfecto estado. Le resumo lo que pasó. El jueves, la restauradora [[le pidió a Marcos que le dejara|orange]] fotografiar algunas páginas, y él [[se lo dejó llevar|teal]] al taller durante una hora. Ella lo devolvió esa misma tarde, pero en otra caja, la del herbario, que es idéntica. [[Al abrir Marcos|orange]] la caja el lunes y verla vacía, pensamos lo peor. Fue Nadia Ferrer, la investigadora de Barranquilla, quien dio con él: [[habiendo revisado|violet]] con Marcos las fotos del jueves, se fijó en la etiqueta de la caja. En cuanto al ruido del sábado, Rafael [[oyó cerrarse|teal]] una puerta, sí, pero era el equipo de restauración, que tenía permiso para trabajar ese fin de semana. Nadie actuó con mala intención. Aun así, voy a cambiar el protocolo: a partir de ahora [[obligaremos a todo el personal a firmar|teal]] cada salida de documentos. Mañana le mando el informe por escrito; [[prefiero que lo lea|orange]] con calma antes de la reunión del patronato. Muchas gracias por su paciencia.',
            reply: { teacher: 'Tú eres Elena. Tu alumno es Pilar Lozano y responde con otro mensaje de voz, de usted: agradece la información, dice qué le parece el protocolo y pide algo concreto («le pido que…», «le aconsejo…»).', self: 'Responde a Elena como Pilar Lozano, en voz alta y de usted: agradece la información, opina sobre el protocolo y pide algo concreto («le pido que…», «le aconsejo…»). (Reply as the president.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo que vi, lo que me dejaban, lo que siento', coach: 'Habla de ti con precisión. Talk about yourself precisely.',
      steps: [
        { title: 'Seis situaciones · Six situations', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales. Si una frase deja dudas sobre quién hace la acción, tú preguntas «¿quién?» y tu alumno la reformula.', self: 'Lee cada pregunta y responde en voz alta con experiencias reales. En cada frase, comprueba quién hace la acción del infinitivo. (Check who performs each infinitive.)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en algo que hiciste, o que no hiciste, y que todavía lamentas un poco. Discúlpate. · Apologise for something you did or didn’t do.', followUps: ['¿Qué pasó después?', '¿Qué harías hoy de otra manera?'], phrases: ['[[Siento haber…|violet]]', '[[Siento no haber…|violet]]', 'Reconozco [[no haber…|violet]]'], hint: 'La falta es anterior a la disculpa: haber + participio, con el pronombre pegado (haberte, haberla).', example: 'Siento no haberte llamado el día de tu cumpleaños: se me pasó por completo. Y siento haberte contestado tan mal la semana pasada. Reconozco no haber estado muy atento últimamente.', next: 'Ahora, algo que viste.' },
            { q: 'Cuenta algo curioso que viste u oíste en la calle, en el transporte o en el trabajo. · Tell something curious you saw or heard.', followUps: ['¿Qué hiciste tú?', '¿Lo viste empezar o ya estaba pasando?'], phrases: ['[[Vi a alguien + infinitivo|teal]]…', '[[Oí + infinitivo + a alguien|teal]]…', '[[Lo / la vi + infinitivo|teal]]…'], hint: 'Percepción + infinitivo para el hecho completo; gerundio si lo viste en curso.', example: 'El otro día, en el autobús, vi a un señor mayor sacar un violín de la funda. Al principio nadie le hacía caso, pero cuando empezó a tocar oí reír a una niña y vi a varias personas grabarlo. Al bajar yo, todavía estaba tocando.', next: 'Ahora, las normas de tu infancia.' },
            { q: '¿Qué te dejaban hacer y qué te prohibían de pequeño? ¿Y en tu primer trabajo? · What were you allowed and not allowed to do as a child, or in your first job?', followUps: ['¿Alguna norma te parecía injusta?', '¿Qué normas pondrías tú hoy?'], phrases: ['[[Mis padres me dejaban + infinitivo|teal]]', '[[Me prohibían + infinitivo|teal]]', '[[Me obligaban a + infinitivo|teal]]', '[[Querían que + subjuntivo|orange]]'], hint: 'Con dejar, prohibir y obligar a, el complemento (me) hace la acción. Con querer, otro sujeto pide «que».', example: 'Mis padres me dejaban volver tarde los sábados, pero me prohibían ver la tele entre semana. En mi primer trabajo nos obligaban a llevar uniforme y querían que llegáramos media hora antes.' },
            { q: 'Eres responsable de un equipo o de una casa compartida. ¿Qué has prometido hacer tú y qué permites hacer a los demás? · What have you promised to do, and what do you let others do?', followUps: ['¿Qué no permites nunca?', '¿Alguien te ha pedido algo difícil?'], phrases: ['[[He prometido + infinitivo|blue]]', '[[Les permito + infinitivo|teal]]', '[[No dejo que + subjuntivo|orange]]'], hint: 'Prometer: lo haces tú. Permitir y dejar: lo hacen los demás. Con «que», el verbo va en subjuntivo.', example: 'He prometido limpiar la cocina los domingos. A mis compañeros de piso les permito usar mi bicicleta, pero no dejo que nadie entre en mi habitación sin llamar.', teacher: 'Tú preguntas «¿y quién limpia?», «¿y quién entra?» para comprobar el sujeto de cada infinitivo.' },
            { q: '¿Qué costumbre de otras personas te molesta o te encanta? Descríbela con un infinitivo como sustantivo. · Describe a habit using a nominal infinitive.', followUps: ['¿Y tú tienes alguna costumbre parecida?', '¿Qué es lo que más te cansa de tu semana?'], phrases: ['[[El continuo + infinitivo|blue]]', '[[El ir y venir de…|blue]]', '[[El tener que + infinitivo|blue]]'], hint: 'El + infinitivo presenta una acción como tema; con adjetivo («continuo», «constante») suena más expresivo.', example: 'No soporto el continuo quejarse de algunos compañeros los lunes. En cambio, me encanta el ir y venir de un mercado un sábado por la mañana. Y lo que más me cansa es el tener que madrugar.' },
            { q: 'Resume un problema que se resolvió en tu trabajo o en tus estudios, como en un informe oral: qué pasó antes y qué se decidió. · Summarise a resolved problem in a formal style.', followUps: ['¿Quién tomó la decisión?', '¿Qué se aprendió?'], phrases: ['[[Habiendo + participio|violet]]…', '[[Tras haber + participio|violet]]…', '[[Al + infinitivo + sujeto|orange]]…'], hint: 'Registro formal: gerundio compuesto para lo anterior, al + infinitivo con el sujeto detrás.', example: 'Habiendo detectado un error en las facturas de marzo, el departamento revisó todas las del trimestre. Tras haber hablado con los clientes afectados, se decidió devolver la diferencia. Al conocer el director el problema, encargó un protocolo nuevo.', teacher: 'Tú escuchas y después pides la misma historia en registro informal, sin «habiendo».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («espero que llegar», «recuerdo de haber», «al yo llegar»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas pensando en otra persona: un compañero, un familiar. (Now ask the questions aloud and answer about someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El informe de Marcos', coach: 'Precisión: quién hizo qué y cuándo. Precision: who did what, and when.',
      steps: [
        { title: 'Informe del incidente · Incident report', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada infinitivo y gerundio: ¿quién hace la acción? ¿Es anterior? Después tu alumno lee el informe en voz alta.', self: 'Escribe tu informe y toca «Revisar mi texto». Después repasa cada infinitivo y gerundio: ¿quién hace la acción? ¿Es anterior? (Check who performs each infinitive and whether it is earlier.)' } },
          { kind: 'write', title: 'Informe del incidente · Incident report', situation: 'Eres Marcos Ibáñez, el archivero. Escribe a Elena, la directora, un informe breve y cuidado sobre lo que pasó con el cuaderno: qué hiciste, qué viste, qué reconoces y qué propones. Tienes confianza con ella, pero el texto quedará en el expediente. (You are Marcos: write a careful report to the director about the incident.)', task: [
            'Discúlpate o reconoce algo con un infinitivo compuesto (siento no haber…, reconozco haber…).',
            'Cuenta lo que viste u oíste con un verbo de percepción + infinitivo.',
            'Usa un verbo de influencia o causativo + infinitivo (permitir, dejar, obligar a…).',
            'Usa un gerundio compuesto (habiendo + participio) y comprueba que el sujeto de cada infinitivo está claro.',
          ], starters: ['Estimada Elena:', 'Te escribo para dejar constancia de…', 'Ante todo, siento no haber…', 'El jueves, Clara me pidió que…', 'Habiéndola visto…', 'Para evitar que vuelva a pasar, propongo…', 'Un saludo,'],
            words: ['dejar constancia', 'reconozco haber', 'le permití', 'la vi entrar', 'la oí cerrar', 'habiendo comprobado', 'di por hecho', 'obligar a', 'sin haber', 'el registro'],
            model: 'Estimada Elena: Te escribo para dejar constancia de lo ocurrido con el cuaderno de campo de Amalia Roca. Ante todo, [[siento no haber comprobado|violet]] el contenido de la caja el viernes. El jueves, Clara Vidal me pidió que le dejara fotografiar algunas páginas en el taller, y [[le permití llevárselo|teal]] durante una hora sin anotarlo en el registro. Hacia las cuatro [[la vi entrar|teal]] en el depósito con el cuaderno y, poco después, [[la oí cerrar|teal]] el armario. [[Habiéndola visto|violet]] devolverlo, di por hecho que estaba en su caja; sin embargo, lo había guardado en la del herbario, que es idéntica. [[Reconozco haberme fiado|violet]] demasiado de la rutina. Para evitar que vuelva a pasar, propongo dos medidas: [[obligar a firmar|teal]] el registro a quien saque cualquier documento y no dejar salir nada del depósito sin dos firmas. Por último, quiero agradecer a Nadia Ferrer su ayuda: [[sin haber revisado|violet]] ella las fotos, todavía estaríamos buscando. Un saludo, Marcos Ibáñez',
            minWords: 120,
            checks: [
              { label: 'Infinitivo compuesto (haber + participio)', pattern: '(?<!\\p{L})haber(?:lo|la|los|las|le|les|me|te|se|nos)*\\s+\\p{L}+(?:ado|ido|to|cho|so)(?!\\p{L})', tip: 'Reconoce o lamenta algo anterior: «Siento no haber comprobado…», «Reconozco haberme fiado…».' },
              { label: 'Gerundio compuesto (habiendo + participio)', pattern: '(?<!\\p{L})habi[eé]ndo(?:lo|la|los|las|le|les|me|te|se|nos)*\\s+\\p{L}+(?:ado|ido|to|cho|so)(?!\\p{L})', tip: 'Añade una acción anterior en registro cuidado: «Habiéndola visto devolverlo, …».' },
              { label: 'Percepción + infinitivo (vi entrar, oí cerrar)', pattern: '(?<!\\p{L})(?:vi|vio|vimos|vieron|oí|oyó|oímos|oyeron|escuché|escuchó|noté|notó|sentí|sintió)\\s+(?:a\\s+\\p{L}+\\s+)?\\p{L}+(?:ar|er|ir|ír)(?:se|lo|la|los|las)?(?!\\p{L})', tip: 'Cuenta lo que viste u oíste sin «que»: «la vi entrar», «oí cerrarse la puerta».' },
              { label: 'Influencia o causativo + infinitivo', pattern: '(?<!\\p{L})(?:permit|prohib|prohíb|oblig|dej|aconsej|recomend)\\p{L}*\\s+(?:a\\s+)?\\p{L}+(?:ar|er|ir)(?:se|lo|la|los|las|le|les)*(?!\\p{L})', tip: 'Di qué permitiste o qué propones obligar a hacer: «le permití llevárselo», «obligar a firmar».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:espero|esperamos|quiero|queremos|prefiero|preferimos|antes\\s+de|después\\s+de|para)\\s+que\\s+(?:no\\s+)?\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: '«Que» no va con infinitivo: «espero **llegar**», «antes de **salir**», o bien «que» + verbo conjugado.' },
              { pattern: '(?<!\\p{L})para\\s+(?:yo|tú|él|ella|usted|nosotros|nosotras|ellos|ellas|ustedes)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: '«Para yo entender» es coloquial y regional; en un informe, «para que yo entienda».' },
              { pattern: '(?<!\\p{L})recuerdo\\s+de\\s+haber(?!\\p{L})', why: '«Recordar» no lleva «de»: «recuerdo haber…» o «me acuerdo de haber…».' },
              { pattern: '(?<!\\p{L})(?:obligaron|obligó|obligar|obligamos|obliga)\\s+(?:\\p{L}+\\s+)?que(?!\\p{L})', why: '«Obligar» lleva «a»: «obligar **a** firmar» u «obligar **a que** firmen».' },
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
            { tone: 'blue', label: 'MISMO SUJETO', formula: 'querer, prometer, intentar, negar… + infinitivo', example: 'Prometí ayudarte. · Clara asegura no saber nada.', caption: 'si cambia el sujeto: que + verbo conjugado (quiero que vengas)', en: 'with wanting, promising and claiming verbs, the main subject performs the infinitive; another subject needs que' },
            { tone: 'teal', label: 'LO HACE EL COMPLEMENTO', formula: 'permitir, prohibir, obligar a, hacer, dejar, ver, oír + infinitivo', example: 'Te permito salir. · Nos obligaron a firmar. · La vi salir.', caption: 'el complemento es a la vez sujeto del infinitivo', en: 'with influence, causative and perception verbs, the object is also the subject of the infinitive' },
            { tone: 'orange', label: 'SUJETO EXPRESO', formula: 'al / antes de + infinitivo + sujeto', example: 'Al llegar yo, ya se habían ido.', caption: 'el sujeto, detrás; con antes de y para, mejor que + subjuntivo', en: 'an infinitive’s own subject goes after it; «para yo entender» is regional and colloquial' },
            { tone: 'violet', label: 'ANTERIORIDAD', formula: 'haber + participio · habiendo + participio', example: 'Siento haber llegado tarde. · Habiendo terminado el informe, salió.', caption: 'simple = a la vez o después; compuesto = antes', en: 'the compound forms present the action as completed before the main verb; habiendo is formal' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Ante cada infinitivo, dos preguntas. **¿Quién lo hace?** El verbo principal lo decide: el sujeto (prometer), el complemento (permitir, ver) o nadie en concreto (es importante); si no encaja, «que» + verbo conjugado. **¿Cuándo?** A la vez o después, infinitivo simple; antes, **haber + participio**.', en: 'For every infinitive ask two questions. Who does it? The main verb decides: the subject, the object, or anyone; if none fits, use que + a conjugated verb. When? Simultaneous or later takes the simple form; earlier takes haber + participle.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Los vecinos negaron ___ ruido aquella noche.', options: ['haber hecho', 'que haber hecho', 'de haber hecho'], answer: 0, why: 'Negar + infinitivo compuesto: un hecho anterior y concreto (aquella noche), sin preposición ni «que».', en: 'The neighbours denied making any noise that night.' },
            { prompt: 'Mis padres nunca me dejaron ___ solo de vacaciones.', options: ['que ir', 'a ir', 'ir'], answer: 2, why: 'Dejar + infinitivo, sin «que» ni preposición: el complemento (me) es quien va.', en: 'My parents never let me go on holiday on my own.' },
            { prompt: 'Desde el balcón vimos ___ el desfile.', options: ['pasado', 'pasar', 'que pasar'], answer: 1, why: 'Percepción + infinitivo: el desfile es lo que pasa.', en: 'From the balcony we watched the parade go by.' },
            { prompt: 'Ana: «Espero ___ la tesis antes del verano; luego empiezo a trabajar».', options: ['haber terminado', 'de terminar', 'que yo termine'], answer: 0, why: 'Mismo sujeto (Ana espera, Ana termina) y acción terminada antes de un momento futuro: infinitivo compuesto.', en: 'I hope to have finished my thesis before the summer.' },
            { prompt: 'Al ___ los invitados, empezó la música.', options: ['llegar', 'llegaron', 'llegando'], answer: 0, why: 'Al + infinitivo con el sujeto (los invitados) detrás: cuando llegaron los invitados.', en: 'When the guests arrived, the music started.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una excursión escolar. Now, a school trip.', blocks: [
          { kind: 'lead', text: 'Lucía Pardo, profesora de secundaria, escribe las notas de una excursión con sus alumnos al jardín botánico. Hazlas más compactas.', en: 'Lucía Pardo, a secondary-school teacher, is writing up notes on a class trip to the botanical garden. Make them more compact.' },
          { kind: 'rewrite', title: 'Las notas de Lucía · Lucía’s notes', items: [
            { prompt: 'Dejé que los alumnos usaran el teléfono durante una hora.', instruction: 'Usa dejar + infinitivo. Empieza: «Dejé…» o «Les dejé…».', accept: ['Dejé a los alumnos usar el teléfono durante una hora', 'Les dejé usar el teléfono durante una hora', 'Dejé usar el teléfono a los alumnos durante una hora'] },
            { prompt: 'Cuando terminaron la visita, los alumnos comieron en el parque.', instruction: 'Usa un infinitivo o un gerundio compuesto.', accept: ['Después de haber terminado la visita, los alumnos comieron en el parque', 'Habiendo terminado la visita, los alumnos comieron en el parque', 'Tras haber terminado la visita, los alumnos comieron en el parque'] },
            { prompt: 'Oí que un alumno cantaba en el autobús.', instruction: 'Usa oír + infinitivo. Empieza: «Oí…».', accept: ['Oí cantar a un alumno en el autobús', 'Oí a un alumno cantar en el autobús', 'Oí cantar en el autobús a un alumno'] },
          ] },
        ] },
        { title: 'Ampliación · Registro, «pedir» y ambigüedades · Register and ambiguity', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: el infinitivo en la prosa formal, un verbo que engaña y frases que se pueden malinterpretar.', en: 'For strong students or spare time: the infinitive in formal prose, a verb that misleads, and sentences that can be misread.' },
          { kind: 'choice', title: '¿Qué pasa aquí? · What is going on here?', items: [
            { prompt: '«Creo haber entendido el problema». ¿Cómo suena?', options: ['Coloquial y regional.', 'Correcta y cuidada; en la conversación se dice más «creo que lo he entendido».', 'Incorrecta: «creer» siempre va con «que».'], answer: 1, why: 'Con creer, afirmar, negar o asegurar y el mismo sujeto, el infinitivo es correcto y propio del registro cuidado o periodístico.', en: '“I believe I have understood the problem”: a correct, formal choice.' },
            { prompt: '«Le pedí salir antes». ¿Quién sale antes?', options: ['Yo: pedí permiso para salir', 'Los dos juntos', 'La otra persona'], answer: 0, why: 'Con «pedir», el infinitivo se entiende normalmente referido al sujeto. Si quiero que salga la otra persona: «Le pedí que saliera antes».', en: 'Who is leaving early?' },
            { prompt: '«Al bajar del tren, el revisor nos pidió los billetes». ¿Por qué puede confundir?', options: ['Porque se entiende que quien baja es el revisor; más claro: «Al bajar nosotros…» o «Cuando bajamos…».', 'Porque «al» no admite infinitivo.', 'Porque falta «que».'], answer: 0, why: 'El sujeto implícito de «al + infinitivo» tiende a leerse como el de la oración principal.', en: 'Why might this sentence be misread?' },
            { prompt: '«Los amaneceres en el desierto son espectaculares». ¿Qué es «amaneceres»?', options: ['Un infinitivo lexicalizado: ya es un sustantivo y admite plural.', 'Un error de concordancia.', 'Un gerundio.'], answer: 0, why: 'Algunos infinitivos se han convertido en sustantivos plenos: el amanecer, los deberes, los andares.', en: 'Some infinitives have become full nouns and can be plural.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno escribe una frase con «al + infinitivo» que resulte ambigua y la corrige de dos maneras.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 179 · Relativas complejas: cuyo, el cual, lo cual', text: 'Ya sabes quién hace cada acción en una frase con infinitivos y cómo situar lo anterior con haber y habiendo. En la clase 179 sigues construyendo frases largas y precisas, ahora con relativos: «cuyo», «el cual», «lo cual». Es el paso natural para escribir informes y textos cuidados sin perder claridad.', en: 'You can now tell who performs each infinitive and place earlier actions with haber and habiendo. Class 179 keeps building long, precise sentences, this time with relative pronouns: cuyo, el cual, lo cual. It is the natural next step for writing reports and careful texts that stay clear.', href: '/gramatica/relativas-complejas-cuyo-el-cual-lo', label: 'Ir a la clase 179' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te prohibían de pequeño y qué sientes no haber hecho todavía?». Respuesta esperada: «me prohibían + infinitivo» y «siento no haber + participio». Tarea: el informe de Escribir.' },
        ] },
      ],
    },
  ],
};
