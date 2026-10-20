import type { LiveLesson } from '../types';

/**
 * Lesson 520 · C2 · Tema, rema y orden marcado en textos complejos (course unit G220).
 * Builds on G184 (lesson 484: topic/rheme inside the sentence, postverbal subjects, focus
 * fronting, clefts), G183 (lesson 483: voice chosen by the topic), G185 (lesson 485:
 * dislocation and topic markers inside the sentence) and G204 (argumentative revision).
 * Clefts and presupposition are G219; long-range anaphora is G233. C2 step: information
 * structure at TEXT level. Thematic progression (constant theme, linear progression,
 * derived themes from a hypertheme) in expository and academic paragraphs; given before
 * new across sentences; postverbal subjects to introduce new referents (Han vuelto las
 * nutrias, Surgió entonces un problema); passive / se to keep the theme as subject;
 * end weight (Sorprende que…, Se proponen tres medidas: …); marked orders of essay and
 * press: fronted attribute with inversion (Graves son las consecuencias, Distinto es el
 * caso de…, Cierto es que…), anaphoric fronting (De ello se deduce que…, A ello se suma…,
 * Prueba de ello es que…) and the topic resumed with a clitic (La solución, nadie la
 * esperaba); topic shifts signalled with en cuanto a, por lo que respecta a, respecto
 * de / a, en lo que concierne a, por su parte, and only where the thread breaks.
 * Ampliación: split rheme, verb-first headlines, register limits of marked order.
 * Scene: Clara Ferrer edits «Ribera», the outreach journal of the (fictional) Universidad
 * de Valdeluz; hydrologist Óscar Medina revises his essay on the river Sauce, covered by
 * an avenue in 1968 and reopened in 2019. Escuchar: Clara's voice note to Óscar
 * (es-ES-ElviraNeural, tú). Escribir: the closing paragraph of the essay plus a note
 * justifying one marked order.
 */
export const lesson: LiveLesson = {
  id: 520,
  level: 'C2',
  title: 'Tema, rema y orden marcado en textos complejos',
  subtitle: 'Hacer avanzar un texto de lo conocido a lo nuevo, marcar los cambios de tema y usar un orden marcado solo cuando aporta.',
  legend: [
    { tone: 'blue', label: 'TEMA Y PROGRESIÓN · lo conocido que hace avanzar el texto (El río… el río… · …un molino. El molino…)' },
    { tone: 'orange', label: 'LO NUEVO AL FINAL · sujeto pospuesto, constituyente pesado (Han vuelto las nutrias · Sorprende que…)' },
    { tone: 'violet', label: 'ORDEN MARCADO · atributo o enlace delante, tema retomado (Graves son las consecuencias · De ello se deduce…)' },
    { tone: 'teal', label: 'CAMBIO DE TEMA · en cuanto a, por lo que respecta a, respecto de / a, por su parte' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cada frase recoge el hilo de la anterior', coach: 'Un párrafo es una cadena, no una lista. A paragraph is a chain, not a list.',
      steps: [
        { title: 'Un ensayo que no avanza · An essay that doesn’t move forward', blocks: [
          { kind: 'lead', text: 'Clara Ferrer edita «Ribera», la revista de divulgación de la Universidad de Valdeluz. El hidrólogo Óscar Medina le ha enviado un ensayo sobre el río Sauce, que en 1968 quedó enterrado bajo una avenida y que se volvió a abrir en 2019. Los datos son impecables, pero Clara ha escrito en el margen: «Cada frase empieza de cero». En la clase 184 ordenaste la información **dentro de la frase**; hoy trabajas a escala de **texto**: qué retoma cada frase de la anterior, dónde colocas lo nuevo, cómo avisas de un **cambio de tema** y cuándo merece la pena un **orden marcado**.', en: 'Clara Ferrer edits the university’s outreach journal. A hydrologist has sent her an essay about a river that was buried under an avenue in 1968 and reopened in 2019. The facts are flawless, but every sentence “starts from scratch”. In class 184 you ordered information within a sentence; now you work at the level of the text: what each sentence picks up from the previous one, where the new information goes, how to signal a change of topic and when a marked word order is worth it.' },
          { kind: 'guide', text: { teacher: 'Tú lees en voz alta la primera versión y tu alumno lee la segunda. Después tu alumno señala con qué palabra empieza cada frase y de dónde viene.', self: 'Lee las dos versiones en voz alta. Fíjate en cómo empieza cada frase: ¿con algo ya dicho o con algo nuevo? (How does each sentence begin: with something already mentioned, or with something new?)' } },
          { kind: 'compare', title: 'Los mismos datos, dos párrafos · Same facts, two paragraphs', columns: [
            { tone: 'neutral', label: 'VERSIÓN 1 · A SALTOS', sentence: 'En 1968 el ayuntamiento cubrió el Sauce con una avenida. Una red de colectores recogía desde entonces sus aguas. Los vecinos olvidaron el río durante medio siglo. Fondos europeos financiaron su reapertura en 2019.', idea: 'Cada frase arranca con un elemento distinto, a menudo nuevo: el lector no sabe de qué trata el párrafo.', en: 'Each sentence opens with a different element, often a new one, so the reader never knows what the paragraph is about.' },
            { tone: 'blue', label: 'VERSIÓN 2 · CON HILO', sentence: 'El Sauce atraviesa Valdeluz de norte a sur. En 1968 [[el río|blue]] fue cubierto por una avenida y sus aguas se desviaron a [[una red de colectores|orange]]. [[Esa red|blue]] funcionó durante medio siglo, hasta que en 2019 se aprobó [[la reapertura del cauce|orange]].', idea: 'Cada frase parte de algo ya dicho y termina con lo nuevo, que pasa a ser el punto de partida de la siguiente.', en: 'Each sentence starts from something already said and ends with the new element, which then becomes the starting point of the next one.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Por qué fluye mejor la versión 2?', options: ['Porque cada frase retoma algo conocido y deja lo nuevo al final.', 'Porque tiene más datos que la versión 1.', 'Porque usa frases más cortas.'], answer: 0, why: 'Los datos son los mismos; cambia el orden: tema conocido al principio, novedad al final, y esa novedad se convierte en el tema siguiente.', en: 'Why does version 2 read more smoothly?' },
            { prompt: 'En la versión 2, ¿qué papel tiene «Esa red»?', options: ['Introduce un tema completamente nuevo.', 'Retoma el final de la frase anterior y lo convierte en tema.', 'Es el sujeto pospuesto de la frase.'], answer: 1, why: '«Una red de colectores» era lo nuevo de la frase anterior; «Esa red» lo recoge como punto de partida.', en: 'What role does “Esa red” play in version 2?' },
          ] },
        ] },
        { title: 'Tres formas de hacer avanzar un texto · Three kinds of thematic progression', mascot: '/brand/mascot/studying.webp', coach: '¿De dónde sale el tema de cada frase? Where does each topic come from?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PROGRESIÓN TEMÁTICA', question: '¿El tema de la frase nueva es el mismo de antes, el rema anterior o una parte de un tema general?', en: 'Thematic progression describes where the topic of each new sentence comes from. With a constant theme, the same topic runs through the sentences and each one adds something about it (typical of descriptions and profiles). In linear progression, the new information of one sentence becomes the topic of the next (typical of explanations of causes and processes). With derived themes, a general topic, the hypertheme, is announced and each sentence develops one of its parts (typical of classifications and of “three effects”). Real texts combine them; the problems start when a paragraph follows none.', formula: ['tema constante: T1 → R1 · T1 → R2 · T1 → R3', 'progresión lineal: T1 → R1 · R1 = T2 → R2 · R2 = T3 → R3', 'temas derivados: hipertema → T1, T2, T3 (sus partes o aspectos)'],
            meaning: 'La **progresión temática** explica de dónde sale el tema de cada frase. Con **tema constante**, el mismo tema recorre varias frases y cada una añade algo sobre él (descripciones, retratos). En la **progresión lineal**, el rema de una frase se convierte en el tema de la siguiente (explicaciones de causas y procesos). Con **temas derivados**, se anuncia un tema general, el **hipertema**, y cada frase desarrolla una de sus partes (clasificaciones, «tres efectos»). Los textos reales las combinan; el problema aparece cuando un párrafo no sigue ninguna.',
            examples: [
              { es: '[[El Sauce|blue]] nace en la sierra y recibe dos arroyos antes de llegar a Valdeluz. En la ciudad, [[el río|blue]] se ensancha y pierde velocidad.', en: 'Constant theme: the river is the topic of both sentences, named once and then picked up again.' },
              { es: 'La reapertura dejó al descubierto [[un antiguo molino|orange]]. [[El molino|blue]] conservaba [[una rueda de piedra|orange]], y [[esa rueda|blue]] es hoy el símbolo del parque.', en: 'Linear progression: each new element (mill, wheel) becomes the topic of what follows.' },
              { es: 'El proyecto tuvo [[tres efectos|blue]]. [[El primero|blue]], ecológico; [[el segundo|blue]], climático; [[el tercero|blue]], social.', en: 'Derived themes: “three effects” is the hypertheme, and each part becomes a topic in turn.' },
            ] },
          { kind: 'table', title: 'Cómo reconocerlas · How to recognise them', head: ['Progresión', 'Pista en el texto', 'Riesgo si se abusa'], rows: [
            ['tema constante', 'sujeto omitido, pronombres, sinónimos del mismo referente (**el río**, **el cauce**, **el Sauce**)', 'monotonía: lista de propiedades'],
            ['progresión lineal', 'demostrativos que recogen el final anterior (**ese molino**, **esa rueda**)', 'deriva: el texto se aleja del asunto'],
            ['temas derivados', 'anuncio con número o categoría (**tres efectos**, **los actores**) y ordinales', 'promesas incumplidas: anunciar tres y desarrollar dos'],
          ], note: 'Un buen párrafo expositivo suele abrir con un hipertema o un tema constante y usar la progresión lineal para explicar causas y consecuencias.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Las riberas se replantaron con sauces y fresnos. Esos árboles dan sombra al agua y frenan la erosión.» ¿Qué progresión es?', options: ['Progresión lineal.', 'Temas derivados.', 'Tema constante.'], answer: 0, why: 'Los árboles son el rema de la primera frase y el tema de la segunda («Esos árboles»).', en: 'Which kind of progression is this?' },
            { prompt: '«La obra afectó a dos colectivos. Los comerciantes temían perder clientes; los vecinos, el aparcamiento.» ¿Qué progresión es?', options: ['Temas derivados.', 'Tema constante.', 'Progresión lineal.'], answer: 0, why: '«Dos colectivos» es el hipertema; comerciantes y vecinos son sus partes.', en: 'Which kind of progression is this?' },
          ] },
        ] },
        { title: 'Lo conocido antes que lo nuevo · Given before new', mascot: '/brand/mascot/standing.webp', coach: 'Lo nuevo, donde cae el peso. New information goes where the weight falls.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LO NUEVO, AL FINAL', question: '¿Qué conoce ya el lector en este punto exacto del texto?', en: 'Across a text, what the reader already knows (or can infer) goes first and what is new goes last. Three tools serve this principle. First, a new subject goes after the verb, especially with verbs of appearance, existence or arrival: “Han vuelto las nutrias”, “Surgió entonces un problema”. Second, the voice is chosen so that the topic stays the subject: if the paragraph is about the river bed, “El cauce fue cubierto / se cubrió en 1968” keeps it in first position. Third, heavy constituents (clauses, long lists) go at the end, so the verb arrives early: “Sorprende que…”, “Se proponen tres medidas: …”.', formula: ['conocido o deducible (tema) → nuevo (rema)', 'sujeto nuevo detrás: Han vuelto las nutrias · Surgió entonces un problema', 'la voz al servicio del tema: El cauce fue cubierto / se cubrió en 1968', 'lo pesado al final: Sorprende que… · Se proponen tres medidas: …'],
            meaning: 'A lo largo de un texto, lo que el lector ya conoce o puede deducir va **delante** y lo nuevo, **detrás**. Tres recursos sirven a ese principio. **1.** El sujeto nuevo va **detrás del verbo**, sobre todo con verbos de aparición, existencia o llegada: «Han vuelto las nutrias», «Surgió entonces un problema». **2.** La **voz** se elige para que el tema siga siendo sujeto: si el párrafo trata del cauce, «El cauce fue cubierto / se cubrió en 1968» lo mantiene en primer lugar (clase 183). **3.** Los **constituyentes pesados** (oraciones, listas largas) van al final, para que el verbo llegue pronto: «Sorprende que…», «Se proponen tres medidas: …».',
            examples: [
              { es: 'En la primavera de 2022 [[aparecieron en la orilla norte las primeras nutrias|orange]].', en: 'The otters enter the text here, so they come after the verb, at the end, where new information belongs.' },
              { es: '[[El cauce|blue]] se cubrió en 1968 y [[se reabrió|blue]] en 2019.', en: 'The paragraph is about the river bed, so a se construction keeps it as the subject; who did it is irrelevant here.' },
              { es: '[[Sorprende que nadie midiera la temperatura del agua antes de la obra|orange]].', en: 'The heavy subject clause goes after the verb; placed first, it would keep the reader waiting for the verb.' },
            ] },
          { kind: 'compare', title: 'Misma acción, otro tema · Same action, different topic', columns: [
            { tone: 'blue', label: 'PÁRRAFO SOBRE EL AYUNTAMIENTO', sentence: '[[El ayuntamiento|blue]] amplió el alcantarillado en 1960 y cubrió el cauce en 1968.', idea: 'El tema es la política municipal: la activa mantiene al ayuntamiento como sujeto.', en: 'The topic is municipal policy, so the active voice keeps the council as the subject.' },
            { tone: 'blue', label: 'PÁRRAFO SOBRE EL RÍO', sentence: '[[El Sauce|blue]] perdió su vegetación en los años sesenta y en 1968 fue cubierto por una avenida.', idea: 'El tema es el río: la pasiva lo mantiene como sujeto y el agente deja de ser protagonista.', en: 'The topic is the river: the passive keeps it as the subject and the agent stops being the protagonist.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'El párrafo explica qué pasó al retirar el asfalto. Nadie ha mencionado aún ningún problema.', prompt: '¿Qué frase encaja mejor?', options: ['Surgió entonces un problema: el agua bajaba contaminada.', 'El problema surgió entonces: el agua bajaba contaminada.', 'Un problema surgió entonces: el agua bajaba contaminada.'], answer: 0, why: 'El problema es nuevo: va detrás del verbo y con indefinido. «El problema» presupone que ya se ha mencionado.', en: 'Which sentence fits best?' },
            { prompt: 'El párrafo trata de los molinos. ¿Qué frase mantiene mejor el tema?', options: ['En 1921, una riada fue la que destruyó dos de los molinos.', 'Dos de los molinos fueron destruidos por una riada en 1921.', 'Una riada destruyó dos de los molinos en 1921.'], answer: 1, why: 'La pasiva mantiene los molinos como sujeto y tema; la riada, nueva, queda al final.', en: 'The paragraph is about the mills. Which sentence keeps the topic best?' },
          ] },
        ] },
        { title: 'Órdenes marcados en el ensayo y la prensa · Marked orders in essays and the press', mascot: '/brand/mascot/speaking.webp', coach: 'Delante, el juicio o el enlace. Up front: the judgement or the link.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'ORDEN MARCADO', question: '¿Quieres subrayar una valoración o enlazar con lo que acabas de decir?', en: 'Essays and opinion journalism use marked orders for two jobs. One is emphasis: the attribute goes first, carries the stress and the evaluation, and the subject follows the verb, with no pause and no pronoun: “Graves son las consecuencias”. The other is linkage: a fronted element points back to the previous sentence and leaves the new content at the end: “De ello se deduce que…”, “A ello se suma…”, “Prueba de ello es que…”. A topic resumed with a clitic (“La solución, nadie la esperaba”, class 185) takes up something just told. Use them sparingly, about one per paragraph; in every sentence they sound grandiloquent.', formula: ['atributo delante + verbo + sujeto: Graves son las consecuencias', 'enlace delante: De ello se deduce que… · A ello se suma… · Prueba de ello es que…', 'tema retomado con clítico: La solución, nadie la esperaba'],
            meaning: 'El ensayo y la prensa de opinión usan órdenes marcados con dos funciones. **Énfasis**: el atributo va delante, lleva el acento y la valoración, y el sujeto pasa detrás del verbo, sin pausa ni pronombre: «**Graves son** las consecuencias». **Enlace**: un elemento antepuesto apunta a la frase anterior y deja lo nuevo al final: «**De ello se deduce** que…», «**A ello se suma**…», «**Prueba de ello es** que…». El tema retomado con clítico («**La solución, nadie la esperaba**», clase 185) recoge algo recién contado. Úsalos con medida, uno por párrafo aproximadamente: en cada frase suenan grandilocuentes.',
            examples: [
              { es: 'Durante años nadie preguntó a los vecinos. [[Graves fueron|violet]] las consecuencias de aquel silencio.', en: 'The judgement “serious” comes first and carries the stress; the subject, which refers back to the silence just described, follows the verb.' },
              { es: 'El caudal se ha duplicado desde 2019. [[De ello se deduce|violet]] que el acuífero se está recargando.', en: '“Ello” points back to the previous sentence; the conclusion, which is the new part, closes the paragraph.' },
              { es: 'Todos esperaban más protestas. [[La solución, nadie la esperaba|violet]]: los comerciantes propusieron un mercado junto al río.', en: 'The topic is set off with a pause and picked up by “la”; what follows the colon is the real news.' },
            ] },
          { kind: 'table', title: 'Fórmulas frecuentes · Common patterns', head: ['Función', 'Ejemplo', 'Qué hace'], rows: [
            ['evaluación', '**Graves son** las consecuencias de aquella decisión.', 'el juicio delante, con acento; el sujeto detrás'],
            ['contraste', '**Distinto es** el caso del tramo norte.', 'compara con lo anterior y abre lo nuevo'],
            ['concesión', '**Cierto es** que la obra se retrasó, pero…', 'concede un punto antes de matizarlo'],
            ['conclusión', '**De esto se deduce** que la canalización fue un error.', '«esto» retoma; la conclusión, al final'],
            ['adición', '**A ello se suma** el coste del mantenimiento.', 'añade un argumento; el sujeto, nuevo, detrás'],
            ['prueba', '**Prueba de ello es** que el caudal se ha recuperado.', 'la evidencia, al final'],
          ], note: 'En la anteposición enfática no hay pausa ni pronombre, y el verbo va justo detrás: «Graves son las consecuencias», no «Graves las consecuencias son». Con pausa y «lo» la estructura es otra: un tema («Graves, lo son», clase 185).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Tras describir el tramo sur, el autor pasa al tramo norte, que funciona de otra manera. ¿Qué frase enlaza mejor?', options: ['El caso del tramo norte, distinto es.', 'Es el caso del tramo norte distinto.', 'Distinto es el caso del tramo norte.'], answer: 2, why: 'El adjetivo comparativo antepuesto enlaza con lo anterior; el verbo va justo detrás y el sujeto al final.', en: 'Which sentence makes the best link to the previous paragraph?' },
            { prompt: '«A ello se suma el coste del mantenimiento.» ¿Qué retoma «ello»?', options: ['El título del ensayo.', 'El coste del mantenimiento.', 'Lo que se acaba de decir en la frase anterior.'], answer: 2, why: '«Ello» es anafórico: recoge lo dicho antes, y lo nuevo (el coste) queda al final.', en: 'What does “ello” refer back to?' },
          ] },
        ] },
        { title: 'Cambiar de tema sin perder al lector · Shifting topic without losing the reader', mascot: '/autoestudio/mascot/noting.webp', coach: 'Una bisagra, solo donde se rompe el hilo. A hinge, only where the thread breaks.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'MARCADORES DE CAMBIO DE TEMA', question: '¿Empiezas un subtema nuevo o vuelves a uno anterior?', en: 'In class 185 you used these markers inside a sentence. In a text they work as hinges between blocks: they open a new subtopic, often one of the parts of a hypertheme, or bring back one mentioned earlier. All are formal; “en cuanto a” is the most neutral. “Respecto de” and “respecto a” are both correct. “Por su parte” moves to another participant. Where the theme is constant or the progression is linear, a marker is superfluous and sounds clumsy.', formula: ['en cuanto a · por lo que respecta a · en lo que se refiere a · en lo que concierne a + subtema', '(con) respecto de / a + subtema', 'por su parte: paso a otro participante'],
            meaning: 'En la clase 185 usaste estos marcadores dentro de la frase. En el texto funcionan como **bisagras** entre bloques: abren un **subtema nuevo** (a menudo una parte del hipertema) o **recuperan** uno ya mencionado. Todos son formales; «en cuanto a» es el más neutro. «**Respecto de**» y «**respecto a**» son correctas las dos. «**Por su parte**» pasa a otro participante. Donde el tema es constante o la progresión es lineal, el marcador sobra y suena torpe.',
            examples: [
              { es: 'La fauna ha superado todas las previsiones. [[En cuanto al presupuesto|teal]], la obra costó un 30 % más de lo previsto.', en: 'A real change of subtopic, from wildlife to money: the marker tells the reader to switch.' },
              { es: 'Los técnicos defendieron el trazado original. [[Los vecinos, por su parte|teal]], pedían más zonas de sombra.', en: '“Por su parte” moves to another group of participants and sets them against the previous one.' },
            ] },
          { kind: 'decide', title: '¿Hace falta un marcador? · Do you need a marker?', steps: [
            { q: '¿El tema de la frase es el mismo que antes o sale del rema anterior?', yes: 'No hace falta marcador: el hilo ya está.', no: 'Pasa a la siguiente pregunta.' },
            { q: '¿Es una parte de un hipertema ya anunciado (los efectos, los actores)?', yes: 'Basta con el ordinal o el nombre de la parte («El segundo efecto…»); añade un marcador si el bloque anterior ha sido largo.', no: 'Pasa a la siguiente pregunta.' },
            { q: '¿Cambias a otro asunto o vuelves a uno anterior?', yes: 'Marca el cambio: «En cuanto a…», «Por lo que respecta a…», «Respecto de…».', no: 'Revisa el párrafo: quizá esa frase pertenece a otro.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El río recibe dos arroyos. ___ se ensancha al entrar en la ciudad.» ¿Qué va en el hueco?', options: ['(nada: «Después se ensancha…»)', 'En cuanto al río,', 'Por lo que respecta al río,'], answer: 0, why: 'El tema es constante: un marcador de cambio de tema sobra.', en: 'What goes in the gap?' },
            { prompt: '¿Qué frase está bien formada?', options: ['En cuanto la financiación, el 60 % procedió de fondos europeos.', 'En cuanto a la financiación, el 60 % procedió de fondos europeos.', 'Respecto la financiación, el 60 % procedió de fondos europeos.'], answer: 1, why: '«En cuanto a» introduce un tema; «en cuanto», sin «a», es temporal («en cuanto llegó»). «Respecto» necesita «de» o «a».', en: 'Which sentence is well formed?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Gramatical no siempre es cohesivo. Grammatical isn’t always cohesive.', blocks: [
          { kind: 'mistakes', title: 'Lo que Clara corrige en los márgenes · What Clara fixes in the margins', items: [
            { wrong: 'Graves las consecuencias fueron para el comercio.', right: 'Graves fueron las consecuencias para el comercio.', why: 'Con el atributo antepuesto, el verbo va justo detrás y el sujeto después. Sin esa inversión la frase no es aceptable.' },
            { wrong: 'Una caída del 40 % de su caudal registró el río en 2022.', right: 'En 2022, el río registró una caída del 40 % de su caudal.', why: 'Adelantar lo nuevo solo se justifica con un contraste explícito; aquí lo conocido (el año, el río) va primero.' },
            { wrong: 'Las nutrias crían en la orilla norte. Respecto a las nutrias, comen sobre todo cangrejo.', right: 'Las nutrias crían en la orilla norte y comen sobre todo cangrejo.', why: 'El tema es constante: el marcador de cambio de tema sobra y rompe el hilo en lugar de mantenerlo.' },
            { wrong: 'Que los comerciantes, que al principio se oponían a la obra, propusieran el mercado sorprendió.', right: 'Sorprendió que los comerciantes, que al principio se oponían a la obra, propusieran el mercado.', why: 'El sujeto oracional es pesado: va detrás del verbo para que el lector no espere tanto.' },
            { wrong: 'Graves son los costes. Distinto es el caso de la fauna. Cierto es que hubo retrasos.', right: 'Los costes fueron altos. La fauna, en cambio, se recuperó pronto. Cierto es que hubo retrasos, pero…', why: 'Un orden marcado en cada frase anula el efecto y suena grandilocuente: resérvalo para un punto del párrafo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien construida?', options: ['Preocupante sigue siendo la calidad del agua.', 'Preocupante, la calidad del agua sigue siendo.', 'Preocupante la calidad del agua sigue siendo.'], answer: 0, why: 'Atributo antepuesto + verbo + sujeto: la inversión es obligatoria.', en: 'Which sentence is well built?' },
          ] },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/seated.webp',
      title: 'La revisión del párrafo de resultados', coach: 'Escucha cómo razona una editora. Hear how an editor reasons.',
      steps: [
        { title: 'Videollamada con Óscar · A video call with Óscar', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Clara y tu alumno es Óscar. Después tu alumno toca cada expresión marcada y explica por qué está en ese lugar.', self: 'Lee el diálogo en voz alta. Toca cada expresión marcada y comprueba por qué ocupa ese lugar en la frase. (Tap each marked expression to see why it is placed there.)' } },
          { kind: 'explore', title: 'Antes de imprenta · Before it goes to print', setting: 'Videollamada. Clara Ferrer revisa con Óscar Medina el párrafo de resultados de su ensayo sobre el Sauce.', lines: [
            { who: 'Clara', text: 'Óscar, el párrafo de resultados tiene todos los datos, pero se lee como una lista. Empieza: «Un descenso de tres grados se ha medido en verano».', en: 'The results paragraph has all the facts but reads like a list. It opens with a loose figure.' },
            { who: 'Óscar', text: 'Es el dato más llamativo. Quería que fuera lo primero que viera el lector.', en: 'It’s the most striking figure; I wanted the reader to see it first.' },
            { who: 'Clara', text: 'Lo entiendo, pero el lector todavía no sabe dónde está. Prueba así: «[[En el tramo reabierto|blue]] se ha medido [[un descenso de tres grados en verano|orange]]».', en: 'The reader doesn’t yet know where we are: start with the place, which is known, and end with the news.' },
            { who: 'Óscar', text: 'De acuerdo. ¿Y lo de las nutrias? Tengo «Las nutrias han vuelto».', en: 'And the otters? I’ve got “Las nutrias han vuelto”.' },
            { who: 'Clara', text: 'Ahí no: nadie las ha mencionado antes, son noticia. «[[Han vuelto las nutrias|orange]]», con el sujeto al final. Y en la frase siguiente ya puedes empezar por ellas: «[[Su presencia|blue]] indica que el agua está limpia».', en: 'They haven’t been mentioned, so they are news and go after the verb; the next sentence can then start from them.' },
            { who: 'Óscar', text: 'Progresión lineal, como nos enseñaban en la facultad. ¿Y el salto a los costes?', en: 'Linear progression, just as we were taught at university. What about the jump to costs?' },
            { who: 'Clara', text: 'Ese es el problema grande: pasas de la fauna al dinero sin avisar. Ponle una bisagra: «[[Por lo que respecta al coste|teal]], la obra superó en un 30 % lo previsto».', en: 'That’s the big problem: you jump from wildlife to money with no warning. Add a hinge that signals the change of topic.' },
            { who: 'Óscar', text: 'Y después viene lo de los comerciantes, que es lo que más me importa.', en: 'Then comes the part about the shopkeepers, which matters most to me.' },
            { who: 'Clara', text: 'Pues refuérzalo con un orden marcado: «[[Más difícil fue|violet]] convencer a los comercios de la avenida». El comparativo enlaza con el coste y lo nuevo queda al final.', en: 'Give it weight with a fronted comparative: it links back to the cost and leaves the new point at the end.' },
            { who: 'Óscar', text: 'Me gusta. Y luego: «[[La solución, nadie la esperaba|violet]]: los propios comerciantes propusieron un mercado junto al río».', en: 'Then: “The solution, nobody expected it: the shopkeepers themselves proposed a market by the river.”' },
            { who: 'Clara', text: 'Perfecta. Pero no más de uno o dos por párrafo: si cada frase va al revés, el ensayo suena a discurso de inauguración.', en: 'Perfect, but one or two per paragraph at most: if every sentence is inverted, the essay sounds like an opening-ceremony speech.' },
          ], notes: {
            'En el tramo reabierto': 'Tema: el lugar ya es conocido (el ensayo trata de la reapertura). Va delante para situar al lector.',
            'un descenso de tres grados en verano': 'Rema: el dato nuevo cierra la frase, donde recibe el acento principal. Con «se ha medido», el verbo llega pronto.',
            'Han vuelto las nutrias': 'Sujeto nuevo detrás de un verbo de aparición o llegada: la frase entera es noticia. «Las nutrias han vuelto» presupondría que ya se ha hablado de ellas.',
            'Su presencia': 'Progresión lineal: el rema anterior (las nutrias) pasa a ser el tema de la frase siguiente.',
            'Por lo que respecta al coste': 'Marcador formal de cambio de tema: aquí sí hace falta, porque el párrafo salta de la fauna al dinero.',
            'Más difícil fue': 'Anteposición enfática del atributo, con el sujeto (una oración de infinitivo) detrás. El comparativo enlaza con lo anterior.',
            'La solución, nadie la esperaba': 'Tema retomado con pausa y clítico («la»): recoge algo esperable en el contexto (que hubiera una solución) y destaca lo inesperado.',
          } },
        ] },
        { title: '¿Qué has entendido? · What did you understand?', mascot: '/brand/mascot/studying.webp', blocks: [
          { kind: 'choice', title: 'Comprensión · Comprehension', items: [
            { prompt: '¿Por qué quiere Clara cambiar el principio del párrafo?', options: ['Porque el lector necesita primero lo conocido (el lugar) y después la novedad.', 'Porque el párrafo es demasiado largo.', 'Porque el dato de los tres grados es incorrecto.'], answer: 0, why: '«El lector todavía no sabe dónde está»: primero el tramo reabierto, después el descenso.', en: 'Why does Clara want to change the opening?' },
            { prompt: '¿Por qué «Han vuelto las nutrias» y no «Las nutrias han vuelto»?', options: ['Porque Clara quiere evitar el pretérito perfecto.', 'Porque las nutrias no se habían mencionado: son información nueva.', 'Porque «Las nutrias han vuelto» es incorrecto.'], answer: 1, why: 'Las dos son gramaticales; en este punto del texto, las nutrias son noticia y van detrás del verbo.', en: 'Why that order and not the other?' },
            { prompt: '¿Qué advierte Clara al final?', options: ['Que el ensayo debe ser más formal.', 'Que el orden marcado pierde efecto si se usa en todas las frases.', 'Que hay que poner un marcador en cada frase.'], answer: 1, why: 'Uno o dos por párrafo: si no, el texto suena grandilocuente.', en: 'What is Clara’s final warning?' },
          ] },
        ] },
        { title: 'El párrafo de la historia · The history paragraph', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Clara y tu alumno es Óscar. En cada hueco, tu alumno elige y explica qué es tema y qué es rema.', self: 'Completa la conversación. En cada hueco, decide qué es conocido y qué es nuevo en ese punto del texto. (What is known and what is new at that point?)' } },
          { kind: 'chat-fill', title: 'El barrio de los molinos · The mill quarter', lines: [
            { who: 'Óscar', text: 'Clara, el párrafo de la historia empieza así: «El Sauce dio nombre al primer barrio de Valdeluz».' },
            { who: 'Clara', text: 'Bien. ¿Y cómo sigue?' },
            { who: 'Óscar', text: '«___»', options: ['En torno a tres molinos harineros, ese barrio lo hicieron crecer.', 'Tres molinos harineros hicieron crecer ese barrio.', 'Ese barrio creció en torno a tres molinos harineros.'], answer: 2, why: 'Progresión lineal: «ese barrio» retoma el rema anterior y los molinos, nuevos, cierran la frase.' },
            { who: 'Clara', text: 'Perfecto. Y después, la riada.' },
            { who: 'Óscar', text: '«En 1921 ___ que se llevó dos de los molinos.»', options: ['una riada hubo', 'la riada hubo', 'hubo una riada'], answer: 2, why: '«Haber» presenta un elemento nuevo detrás del verbo y con indefinido.' },
            { who: 'Clara', text: 'Y luego saltas al siglo XX.' },
            { who: 'Óscar', text: '«___ la canalización, la decidió el ayuntamiento en 1968 sin consultar a nadie.»', options: ['Respecto', 'En cuanto a', 'En cuanto'], answer: 1, why: 'Cambio de tema: «en cuanto a» + subtema. «En cuanto» es temporal y «respecto» necesita «de» o «a».' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Ordenar, reconocer, revisar', coach: 'Piensa en el párrafo, no en la frase. Think paragraph, not sentence.',
      steps: [
        { title: '¿Qué progresión sigue? · Which progression?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada fragmento y lo clasifica. Tú preguntas: «¿De dónde sale el tema de la segunda frase?».', self: 'Lee cada fragmento y decide de dónde sale el tema de la segunda frase. (Where does the topic of the second sentence come from?)' } },
          { kind: 'classify', title: 'Tres progresiones · Three progressions', categories: [
            { id: 'constante', label: 'TEMA CONSTANTE', tone: 'blue' },
            { id: 'lineal', label: 'PROGRESIÓN LINEAL', tone: 'orange' },
            { id: 'derivados', label: 'TEMAS DERIVADOS', tone: 'violet' },
          ], items: [
            { text: 'El molino grande se construyó en 1820. Molió trigo durante un siglo y se abandonó tras la riada.', answer: 'constante', why: 'El molino es el tema de las dos frases (sujeto omitido en la segunda).' },
            { text: 'La riada arrasó el puente viejo. En su lugar se levantó una pasarela de hierro, y esa pasarela es hoy la entrada al parque.', answer: 'lineal', why: 'El puente da paso a la pasarela, y «esa pasarela» retoma el rema anterior.' },
            { text: 'La reapertura afectó a tres colectivos. Los comerciantes temían perder clientes; los vecinos, el aparcamiento; los regantes, el agua de sus huertas.', answer: 'derivados', why: '«Tres colectivos» es el hipertema y cada grupo es una de sus partes.' },
            { text: 'Las nutrias llegaron en 2022. Se alimentan sobre todo de cangrejo y crían en la orilla norte.', answer: 'constante', why: 'Las nutrias siguen siendo el tema; la segunda frase añade datos sobre ellas.' },
            { text: 'El caudal depende de un pequeño embalse. Ese embalse lo gestiona una comunidad de regantes.', answer: 'lineal', why: 'El embalse, rema de la primera frase, se convierte en tema de la segunda.' },
            { text: 'El parque se divide en dos zonas. La sur está abierta al baño; la norte, protegida, solo se visita con guía.', answer: 'derivados', why: 'Las dos zonas son partes del tema general, el parque.' },
          ] },
        ] },
        { title: '¿Qué frase sigue? · What comes next?', mascot: '/brand/mascot/pointing.webp', blocks: [
          { kind: 'choice', title: 'Continuar y reordenar · Continue and reorder', items: [
            { context: 'El párrafo anterior termina: «…y el proyecto se aprobó en 2019 con fondos europeos».', prompt: '¿Qué frase continúa mejor?', options: ['Unas máquinas empezaron a retirar el asfalto de la avenida en 2020.', 'Las obras empezaron un año después, con la retirada del asfalto de la avenida.', 'La retirada del asfalto de la avenida, un año después, empezaron las obras con ella.'], answer: 1, why: '«Las obras» se deduce de «el proyecto se aprobó» (es conocido) y lo nuevo queda al final. «Unas máquinas…» abre con un sujeto nuevo, y la opción que empieza por «La retirada…» deja un tema suelto mal enlazado.', en: 'Which sentence follows best?' },
            { context: '(A) Ese cangrejo había desplazado a la trucha autóctona. (B) En el tramo cubierto vivía casi solo una especie invasora: el cangrejo americano. (C) Hoy, con la vuelta de las nutrias, que se alimentan de él, su población baja. (D) La trucha, liberada de su competidor, vuelve a reproducirse aguas arriba.', prompt: '¿Qué orden da un párrafo cohesionado?', options: ['B – A – C – D', 'C – B – A – D', 'A – B – D – C'], answer: 0, why: 'B presenta al cangrejo (sujeto pospuesto); A lo retoma como tema; C sigue con él; D pasa a la trucha, ya mencionada en A.', en: 'Which order gives a cohesive paragraph?' },
            { context: 'El párrafo anterior termina: «…por eso se instalaron tres estaciones de medición».', prompt: '¿Qué frase sigue mejor?', options: ['Nitratos por encima del límite detectaron en junio esas estaciones.', 'En junio, nitratos por encima del límite fueron detectados por esas estaciones.', 'Esas estaciones detectaron en junio nitratos por encima del límite.'], answer: 2, why: 'Progresión lineal: las estaciones (rema anterior) son el tema; los nitratos, nuevos, van al final. Las otras adelantan lo nuevo y relegan lo conocido.', en: 'Which sentence follows best?' },
            { context: 'Tras dos frases sobre la fauna, el autor pasa al presupuesto.', prompt: '¿Cómo abre mejor la frase?', options: ['El presupuesto, la obra costó 14 millones, un 30 % más de lo previsto.', 'En cuanto el presupuesto, la obra costó 14 millones, un 30 % más de lo previsto.', 'En cuanto al presupuesto, la obra costó 14 millones, un 30 % más de lo previsto.'], answer: 2, why: 'Hay cambio de tema: «en cuanto a» + artículo. «En cuanto» sin «a» es temporal, y un tema suelto sin enlace no se sostiene en un ensayo.', en: 'How should the sentence open?' },
            { context: '(A) De ello se deduce que el acuífero se está recargando. (B) El caudal mínimo del Sauce se ha duplicado desde la reapertura. (C) Esa recarga explica, además, que los pozos de la vega tengan agua en agosto.', prompt: '¿Qué orden es el más cohesionado?', options: ['C – B – A', 'B – A – C', 'A – C – B'], answer: 1, why: 'B da el dato; A lo recoge con «ello» y extrae la conclusión; C retoma «la recarga» (progresión lineal).', en: 'Which order is the most cohesive?' },
          ] },
        ] },
        { title: '¿Está bien? · Is it right?', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno decide si cada frase es correcta y cohesionada en su contexto. Si no, elige la corrección y explica qué fallaba.', self: 'Decide si cada frase funciona en su contexto. Si no, elige la corrección. (Does each sentence work in its context?)' } },
          { kind: 'fix', title: 'Revisión de estilo · Style revision', items: [
            { sentence: 'Graves las consecuencias fueron para los huertos de la vega.', ok: false, options: ['Las consecuencias graves fueron para los huertos de la vega.', 'Graves fueron las consecuencias para los huertos de la vega.', 'Graves, las consecuencias fueron para los huertos de la vega.'], answer: 1, why: 'Atributo antepuesto: el verbo va justo detrás y el sujeto después, sin pausa.' },
            { sentence: 'El caudal se ha duplicado en cinco años. De ello se deduce que el cauce no debió cubrirse nunca.', ok: true, why: '«Ello» retoma la frase anterior y la conclusión, nueva, queda al final.' },
            { sentence: 'Que el ayuntamiento tardara cuarenta años en revisar la decisión y que ningún técnico la cuestionara en público sorprende.', ok: false, options: ['Sorprende que el ayuntamiento tardara cuarenta años en revisar la decisión y que ningún técnico la cuestionara en público.', 'Que el ayuntamiento tardara cuarenta años en revisar la decisión sorprende y que ningún técnico la cuestionara en público.', 'Sorprendiendo que el ayuntamiento tardara cuarenta años en revisar la decisión y que ningún técnico la cuestionara.'], answer: 0, why: 'El sujeto oracional es muy pesado: va detrás del verbo, que así llega pronto.' },
            { sentence: 'El río recibe dos arroyos. En cuanto al río, se ensancha al entrar en la ciudad.', ok: false, options: ['El río recibe dos arroyos. Por lo que respecta al río, se ensancha al entrar en la ciudad.', 'El río recibe dos arroyos. Respecto del río, se ensancha al entrar en la ciudad.', 'El río recibe dos arroyos y se ensancha al entrar en la ciudad.'], answer: 2, why: 'Tema constante: ningún marcador de cambio de tema hace falta. Las otras dos opciones repiten el error.' },
            { sentence: 'En 2022 aparecieron en la orilla norte las primeras nutrias.', ok: true, why: 'Verbo de aparición con sujeto nuevo detrás: es la forma natural de introducirlas.' },
          ] },
        ] },
        { title: 'El párrafo de la vega · The farmland paragraph', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Clara y tu alumno es Óscar. Tu alumno elige cada opción y justifica el orden.', self: 'Completa la conversación y justifica cada orden. (Complete the conversation and justify each order.)' } },
          { kind: 'chat-fill', title: 'Los regantes · The irrigators', lines: [
            { who: 'Clara', text: 'Óscar, en el párrafo de la vega te falta presentar a los regantes. Abres con «Los regantes protestaron…», pero nadie los conoce todavía.' },
            { who: 'Óscar', text: 'Entonces: «Aguas abajo de la ciudad ___».', options: ['la comunidad de regantes riega doscientas hectáreas', 'una comunidad de regantes riega doscientas hectáreas de huerta', 'riega doscientas hectáreas de huerta una comunidad de regantes'], answer: 2, why: 'El lugar es el tema; el sujeto nuevo va detrás, con indefinido, al final de la frase. Con «la» se presupone que ya se ha mencionado.' },
            { who: 'Clara', text: 'Mejor. ¿Y por qué protestaron?' },
            { who: 'Óscar', text: '«___ temían perder el agua del verano.»', options: ['Unos regantes', 'Esos regantes', 'Regantes'], answer: 1, why: 'Progresión lineal: «esos regantes» retoma el rema anterior.' },
            { who: 'Clara', text: 'Y luego el contraste con los vecinos.' },
            { who: 'Óscar', text: '«Los vecinos, ___, pedían más sombra y menos coches.»', options: ['respecto de', 'en cuanto a', 'por su parte'], answer: 2, why: '«Por su parte» pasa a otro participante dentro de la frase. «En cuanto a» y «respecto de» necesitan un complemento detrás.' },
            { who: 'Clara', text: '¿Y cómo cierras?' },
            { who: 'Óscar', text: '«___: el agua llegó a la vega como siempre y el parque ganó una zona de huertos urbanos.»', options: ['La solución nadie esperaba', 'Nadie la solución esperaba', 'La solución, nadie la esperaba'], answer: 2, why: 'Tema retomado: pausa y clítico «la». Sin el clítico, la anteposición no funciona con este objeto conocido.' },
          ] },
        ] },
        { title: 'Construye la frase · Build the sentence', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', title: 'Orden de ensayo · Essay order', items: [
            { tiles: ['Han', 'vuelto', 'las', 'garzas', 'al', 'tramo', 'urbano'], accept: ['Han vuelto las garzas al tramo urbano', 'Han vuelto al tramo urbano las garzas'], en: 'The herons are news: the subject goes after the verb.' },
            { tiles: ['Distinto', 'es', 'el', 'caso', 'de', 'la', 'orilla', 'sur.'], accept: ['Distinto es el caso de la orilla sur.'], en: 'A fronted comparative links back and opens the contrast.' },
            { tiles: ['De', 'ello', 'se', 'deduce', 'que', 'la', 'consulta', 'llegó', 'tarde.'], accept: ['De ello se deduce que la consulta llegó tarde.'], en: 'The link comes first; the conclusion closes the sentence.' },
            { tiles: ['Prueba', 'de', 'ello', 'es', 'que', 'los', 'pozos', 'tienen', 'agua.'], accept: ['Prueba de ello es que los pozos tienen agua.'], en: 'The evidence is presented at the end, as the new information.' },
          ] },
        ] },
        { title: 'Reescribe · Rewrite', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Del borrador al ensayo · From draft to essay', items: [
            { prompt: 'Los efectos fueron sorprendentes.', instruction: 'Antepón el atributo para subrayar el juicio.', accept: ['Sorprendentes fueron los efectos'] },
            { prompt: 'Una dificultad apareció entonces.', instruction: 'La dificultad es nueva: ponla detrás del verbo.', accept: ['Apareció entonces una dificultad', 'Entonces apareció una dificultad'] },
            { prompt: 'Que nadie consultara a los regantes resulta llamativo.', instruction: 'Lleva la oración subordinada, el constituyente pesado, al final.', accept: ['Resulta llamativo que nadie consultara a los regantes', 'Llamativo resulta que nadie consultara a los regantes'] },
            { prompt: 'El ayuntamiento canalizó el tramo urbano en 1968.', instruction: 'El párrafo trata del tramo urbano: mantenlo como tema y omite el agente.', accept: ['El tramo urbano fue canalizado en 1968', 'El tramo urbano se canalizó en 1968', 'En 1968 el tramo urbano fue canalizado', 'En 1968 el tramo urbano se canalizó'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno toma un párrafo propio (un informe, un correo largo) y marca con tres colores el tema de cada frase. Después dice qué progresión domina y dónde se rompe el hilo.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Clara', coach: 'Escucha las decisiones de orden. Listen for the ordering decisions.',
      steps: [
        { title: 'Los últimos cambios · The final changes', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada cambio que propone Clara y el principio que lo justifica (lo nuevo al final, cambio de tema, orden marcado).', self: 'Escucha una vez para la idea general. En la segunda, anota cada cambio que propone Clara y por qué. Vas a oír «imprenta» (the printer’s) y «nitratos» (nitrates).' } },
          { kind: 'listen', title: 'Mensaje de voz de Clara', channel: 'MENSAJE DE VOZ · REVISTA «RIBERA»', src: '/audio/grammar-live/520.mp3',
            before: 'Clara ha leído la segunda versión del ensayo y le deja un mensaje a Óscar. ¿Qué tipo de cambios crees que le pedirá: datos nuevos o cambios de orden? (New facts, or changes of order?)',
            gist: { prompt: '¿Qué hace Clara en el mensaje? · What does Clara do?', options: ['Pide más datos científicos sobre el río.', 'Elogia la nueva versión y propone cambios de orden concretos.', 'Rechaza el ensayo y pide una versión nueva.'], answer: 1, why: 'Dice que ha mejorado mucho y deja tres comentarios sobre el orden antes de imprenta.', en: 'She praises the new draft and suggests specific changes of order.' },
            details: [
              { prompt: '¿Qué elogia Clara del párrafo de la canalización?', options: ['Que tiene más datos que antes.', 'Que el río se mantiene como tema gracias a la pasiva.', 'Que el ayuntamiento aparece como responsable.'], answer: 1, why: '«El cauce fue cubierto en 1968» mantiene el hilo «sin que el ayuntamiento le robe el protagonismo».', en: 'What does she praise in the paragraph on the canalisation?' },
              { prompt: '¿Dónde quiere el dato de los nitratos?', options: ['Al final de la frase, donde el lector espera lo nuevo.', 'En una nota a pie de página.', 'Al principio del párrafo, para que impacte.'], answer: 0, why: '«Mete el dato, pero al final de la frase, que es donde el lector espera lo nuevo».', en: 'Where does she want the nitrate figure?' },
              { prompt: '¿Qué propone para pasar de las obras a los vecinos?', options: ['Un marcador de cambio de tema.', 'Eliminar el apartado de los vecinos.', 'Una pregunta retórica.'], answer: 0, why: '«Ponle una bisagra, algo como “por lo que respecta a los vecinos”».', en: 'What does she suggest for the shift from the works to the residents?' },
              { prompt: '¿Qué problema tiene la frase de las medidas?', options: ['Usa demasiados números.', 'La lista va en medio y el verbo llega tarde.', 'Faltan medidas.'], answer: 1, why: '«La lista de medidas va en medio de la frase y el verbo llega tardísimo»: el constituyente pesado debe ir al final.', en: 'What is wrong with the sentence on the measures?' },
            ],
            transcript: 'Óscar, soy Clara. Acabo de leer la segunda versión del ensayo y ha mejorado muchísimo, de verdad. El párrafo de resultados ya fluye, y en el de la canalización todo gira ahora en torno al río: con «[[el cauce fue cubierto en 1968|blue]]» mantienes el hilo sin que el ayuntamiento le robe el protagonismo. Te dejo tres cosas antes de mandarlo a imprenta. Primera: [[han llegado los análisis de octubre|orange]] y confirman lo de los nitratos. Mete el dato, pero al final de la frase, que es donde el lector espera lo nuevo. Segunda: pasas de las obras a los vecinos sin avisar. Ponle una bisagra, algo como «[[por lo que respecta a los vecinos|teal]]», y el lector te seguirá. Y para cerrar ese apartado te propongo un orden marcado, que en un ensayo se agradece: «[[Graves fueron los errores de comunicación|violet]]; [[de ellos se derivó|violet]] buena parte del rechazo inicial». Tercera: en las conclusiones, la lista de medidas va en medio de la frase y el verbo llega tardísimo. Invierte el orden: «[[se proponen tres medidas|orange]]», dos puntos, y la lista detrás. Ah, y no toques «[[la solución, nadie la esperaba|violet]]»: retoma lo que acabas de contar y le da fuerza. Llámame esta tarde y lo cerramos. Un abrazo.',
            reply: { teacher: 'Tú eres Óscar y defiendes una de tus frases originales. Tu alumno es Clara y te explica, con los términos de hoy, por qué el cambio mejora el texto.', self: 'Responde a Clara con un audio breve: acepta dos cambios, justifica cada uno con una razón de orden y discute el tercero. (Accept two changes and challenge the third.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Explicar y defender un orden', coach: 'Justifica cada decisión. Justify every choice.',
      steps: [
        { title: 'Editar en voz alta · Editing out loud', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde durante uno o dos minutos. Si una respuesta salta de tema sin avisar, tú dices «¿Y eso?» y tu alumno la reformula con un marcador.', self: 'Responde a cada tarjeta en voz alta durante uno o dos minutos. Cuida el hilo entre frases y usa al menos un recurso de dos colores distintos. (Keep the thread between sentences.)' } },
          { kind: 'talk', cards: [
            { q: 'Explícale a un colega por qué en un texto se escribe «Han vuelto las nutrias» y en otro «Las nutrias han vuelto». · Explain when each order is right.', followUps: ['¿Qué pasaría si el párrafo ya hablara de las nutrias?', '¿Se te ocurre otro verbo que funcione igual?'], phrases: ['Depende de lo que el lector ya sepa…', 'Si es noticia, [[el sujeto va detrás|orange]]…', 'Si ya es [[tema|blue]]…'], hint: 'Explica el criterio (conocido / nuevo) y da un ejemplo de cada contexto.', example: 'Depende de lo que el lector ya sepa. Si las nutrias aparecen por primera vez, son la noticia, y la noticia va detrás del verbo: «Han vuelto las nutrias». Si el párrafo ya trata de ellas y lo nuevo es otra cosa, empiezo por ellas: «Las nutrias han vuelto este invierno a la orilla norte». Pasa lo mismo con «llegar» o «surgir».' },
            { q: 'Describe un lugar que conoces bien con tema constante y luego explica un cambio que ha vivido con progresión lineal. · Describe a place, then explain a change.', followUps: ['¿Dónde cambiaste de progresión?', '¿Usaste algún sinónimo para no repetir el nombre?'], phrases: ['[[El barrio|blue]]… [[Sus calles|blue]]…', 'Eso provocó [[…|orange]]. [[Esa…|blue]]', 'Hoy…'], hint: 'Mantén el mismo tema en dos o tres frases; luego encadena causa y consecuencia.', example: 'Mi barrio está junto a la estación. Tiene calles estrechas y casi todas sus casas son de los años treinta. Hace diez años abrieron una línea de tren rápido. Esa línea atrajo a gente que trabajaba en la capital, y la llegada de esos vecinos subió los alquileres. Hoy quedan pocos de los comercios de siempre.' },
            { q: '¿Conviene reabrir ríos urbanos aunque cueste más que mantenerlos cubiertos? · Should cities uncover buried rivers?', followUps: ['¿Qué concedes a la postura contraria?', '¿Qué conclusión sacas?'], phrases: ['[[Cierto es que|violet]]…, pero…', '[[Distinto es el caso de|violet]]…', '[[De ello se deduce|violet]] que…', '[[A ello se suma|violet]]…'], hint: 'Concede un punto, contrasta con otro caso y saca una conclusión; un orden marcado en cada paso, no en cada frase.', example: 'Cierto es que la obra cuesta más que dejar el río enterrado, pero el cálculo cambia a largo plazo. Un río abierto baja la temperatura, reduce el riesgo de inundaciones y crea espacio público. A ello se suma el valor que gana el barrio. Distinto es el caso de los ríos muy contaminados, donde reabrir sin depurar sería un error. De ello se deduce que la reapertura funciona si va acompañada de depuración.' },
            { q: 'Presenta oralmente los resultados de un proyecto de tu trabajo o tus estudios con tres apartados. · Present the results of a project in three parts.', followUps: ['¿Cómo anunciaste los tres apartados?', '¿Dónde pusiste el dato más importante?'], phrases: ['El proyecto tuvo [[tres resultados|blue]]…', '[[En cuanto a|teal]]…', '[[Por lo que respecta a|teal]]…', '[[Se han detectado|orange]] + lo nuevo…'], hint: 'Anuncia un hipertema, desarrolla sus partes y marca los cambios de bloque.', example: 'El proyecto tuvo tres resultados. El primero fue técnico: se redujo a la mitad el tiempo de respuesta. En cuanto al segundo, el económico, se ahorraron unos veinte mil euros al año. Por lo que respecta al tercero, el más difícil de medir, se han detectado menos quejas de los clientes desde marzo.' },
            { q: 'Eres Óscar: defiende tu frase original «Un descenso de tres grados se ha medido en verano». Tu compañero, como Clara, responde. · Defend the original order.', followUps: ['¿En qué contexto tendría sentido tu orden?', '¿Qué ganas y qué pierdes con cada versión?'], phrases: ['Lo puse delante porque…', 'Solo funcionaría si [[hubiera contraste|violet]]…', '[[Lo nuevo, al final|orange]]…'], hint: 'Busca un contexto en el que el orden marcado sí se justificaría, por ejemplo una corrección.', example: 'Lo puse delante porque es el dato más llamativo. Pero tienes razón: sin contraste no se justifica. Tendría sentido si alguien dijera que la temperatura no ha cambiado: «Un descenso de tres grados se ha medido, no uno de medio». En el ensayo, el lector necesita primero el lugar, así que acepto tu versión.', teacher: 'Tú eres Clara y respondes a cada argumento de Óscar con un principio de hoy.' },
            { q: 'Compara dos titulares: «Vuelven las nutrias al Sauce» y «Las nutrias vuelven al Sauce». ¿Cuál elegirías y por qué? · Compare two headlines.', followUps: ['¿Qué titular presupone que ya se sabía algo?', '¿Cómo escribirías el primer párrafo de la noticia?'], phrases: ['Con el verbo delante, [[todo es noticia|orange]]…', 'El segundo hace de [[las nutrias|blue]] el tema…', 'En el primer párrafo, [[se ha confirmado|orange]]…'], hint: 'Piensa en qué sabe el lector antes de leer el titular.', example: 'Elegiría «Vuelven las nutrias al Sauce», porque con el verbo delante todo el titular es noticia. «Las nutrias vuelven al Sauce» encaja mejor si los lectores ya seguían el caso de las nutrias. El primer párrafo empezaría por el lugar: «En el tramo reabierto del Sauce se ha confirmado la presencia de una familia de nutrias».', next: 'Ahora, el cambio de papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas un proceso saltando de tema sin avisar y tu alumno lo reorganiza en voz alta con una progresión clara y un marcador en el cambio de bloque.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿cada frase retoma algo de la anterior? ¿Avisas al cambiar de tema? (Does each sentence pick up the thread?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El párrafo final del ensayo', coach: 'Ordena, enlaza y subraya una sola vez. Order, link, and stress just once.',
      steps: [
        { title: 'El cierre para «Ribera» · The closing paragraph', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el párrafo en voz alta y tú señalas el tema de cada frase: si alguna empieza de cero, tu alumno la reordena.', self: 'Escribe el párrafo y la nota, y toca «Revisar mi texto». Después subraya el tema de cada frase: ¿alguna empieza de cero? (Does any sentence start from scratch?)' } },
          { kind: 'write', title: 'Párrafo de cierre y nota a Óscar · Closing paragraph and note', situation: 'Óscar está de viaje y Clara te pide, como coeditor o coeditora de «Ribera», el párrafo final del ensayo: «Lo que el Sauce enseña a otras ciudades». Lo leerán lectores cultos no especialistas. Añade una nota breve a Óscar que justifique tu orden marcado. (Write the essay’s closing paragraph for a general educated readership, plus a short note to the author justifying your marked order.)', task: [
            'Anuncia un hipertema (por ejemplo, tres lecciones) y desarrolla sus partes con un hilo claro.',
            'Introduce al menos un dato nuevo con el sujeto detrás del verbo y lleva un constituyente pesado al final.',
            'Marca un cambio de tema con «en cuanto a», «por lo que respecta a» o «respecto de».',
            'Usa un orden marcado de énfasis (Graves fueron…, Distinto es…) y un enlace anafórico (De ello se deduce…).',
            'Termina con una nota de dos o tres líneas a Óscar que justifique uno de tus órdenes marcados.',
          ], starters: ['¿Qué puede aprender otra ciudad del caso del Sauce?', 'La primera lección es…', 'Graves fueron…', 'De ello se deduce que…', 'Por lo que respecta a…', 'Nota para Óscar:'],
            words: ['hipertema', 'han vuelto', 'quedan', 'sorprende que', 'se proponen', 'en cuanto a', 'por lo que respecta a', 'distinto es', 'cierto es que', 'de ello se deduce', 'a ello se suma', 'prueba de ello es'],
            model: '¿Qué puede aprender otra ciudad del caso del Sauce? Tres lecciones, al menos. La primera es técnica: un río enterrado no está muerto, y basta con devolverle espacio para que recupere su dinámica. La segunda es climática. En el tramo reabierto se ha medido un descenso de tres grados en las noches de verano, y ese descenso beneficia sobre todo a los barrios más densos. La tercera, quizá la más importante, es política. Durante meses se habló del río como de un problema de ingeniería y nadie preguntó a quienes vivían en su orilla. Graves fueron las consecuencias de aquel silencio: recursos judiciales, retrasos y un sobrecoste del 30 %. De ello se deduce que ninguna renaturalización funciona sin una consulta temprana. Por lo que respecta a los retos pendientes, quedan todavía dos sin resolver: la calidad del agua tras las tormentas y el mantenimiento de las riberas. Distinto es el caso de la biodiversidad, que ha superado todas las previsiones: han vuelto las nutrias, las garzas y hasta una libélula que no se veía desde los años sesenta.\n\nNota para Óscar: he antepuesto «Graves fueron las consecuencias» porque el adjetivo subraya el juicio y el sujeto retoma el silencio de la frase anterior. Así la conclusión, que es lo nuevo, queda al final del párrafo.',
            minWords: 170,
            checks: [
              { label: 'Un marcador de cambio de tema', pattern: '(?<!\\p{L})(?:en\\s+cuanto\\s+al?|por\\s+lo\\s+que\\s+(?:respecta|se\\s+refiere)\\s+al?|(?:con\\s+)?respecto\\s+(?:de|del|al?)|en\\s+lo\\s+que\\s+(?:concierne|se\\s+refiere|respecta)\\s+al?)(?!\\p{L})', tip: 'Marca el paso a otro bloque: «Por lo que respecta a los retos pendientes,…».' },
              { label: 'Un atributo antepuesto con el verbo justo detrás', pattern: '(?:^|[.;:!?¿¡]\\s*)(?:graves?|distint[oa]s?|cierto|evidente|llamativ[oa]s?|significativ[oa]s?|curios[oa]s?|preocupantes?|sorprendentes?|otr[oa]s?)\\s+(?:es|son|fue|fueron|era|eran|resulta|resultan|resultó|sigue\\s+siendo|siguen\\s+siendo)(?!\\p{L})', tip: 'Subraya un juicio: «Graves fueron las consecuencias de…».' },
              { label: 'Un enlace anafórico delante (De ello se deduce…, A ello se suma…, Prueba de ello es…)', pattern: '(?<!\\p{L})(?:(?:de|a|con|por)\\s+(?:ello|esto|eso|ahí)\\s+se\\s+(?:deduce|deducen|desprende|desprenden|deriva|derivan|derivó|suma|suman|añade|añaden|explica|explican)|prueba\\s+de\\s+(?:ello|esto|eso)\\s+es)(?!\\p{L})', tip: 'Enlaza con lo anterior: «De ello se deduce que…».' },
            ],
            warnings: [
              { pattern: '(?:^|[.;:!?]\\s*)(?:graves?|distint[oa]s?|cierto|evidente)\\s+(?:el|la|los|las)\\s+\\p{L}+\\s+(?:es|son|fue|fueron|era|eran)(?!\\p{L})', why: 'Si antepones el atributo, el verbo va justo detrás y el sujeto después: «Graves fueron las consecuencias», no «Graves las consecuencias fueron».' },
              { pattern: '(?<!\\p{L})en\\s+cuanto\\s+(?:el|la|los|las)(?!\\p{L})', why: 'Para introducir un tema se dice «en cuanto a» («en cuanto al presupuesto»); «en cuanto», sin «a», es temporal.' },
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
            { tone: 'blue', label: 'PROGRESIÓN TEMÁTICA', formula: 'tema constante · progresión lineal · temas derivados de un hipertema', example: 'La reapertura dejó al descubierto un molino. El molino conservaba una rueda…', caption: 'Cada frase parte de algo conocido: el mismo tema, el rema anterior o una parte anunciada.', en: 'Each sentence starts from something known: the same topic, the previous rheme, or an announced part.' },
            { tone: 'orange', label: 'LO NUEVO AL FINAL', formula: 'sujeto nuevo detrás · voz al servicio del tema · constituyente pesado al final', example: 'Han vuelto las nutrias. · Sorprende que nadie midiera el agua.', caption: 'Lo conocido delante; la novedad y lo largo, detrás.', en: 'Known information first; new and heavy material last.' },
            { tone: 'violet', label: 'ORDEN MARCADO', formula: 'atributo + verbo + sujeto · enlace anafórico delante · tema + clítico', example: 'Graves fueron las consecuencias. De ello se deduce que…', caption: 'Para subrayar un juicio o enlazar; uno o dos por párrafo.', en: 'To stress a judgement or forge a link; one or two per paragraph.' },
            { tone: 'teal', label: 'CAMBIO DE TEMA', formula: 'en cuanto a · por lo que respecta a · respecto de / a · por su parte', example: 'Por lo que respecta al coste, la obra superó lo previsto.', caption: 'Solo donde se rompe el hilo; con tema constante, sobra.', en: 'Only where the thread breaks; with a constant topic it is superfluous.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Ante cada frase de un párrafo, pregunta: **¿qué sabe ya el lector aquí?** Eso va delante. Lo nuevo, detrás. Si la frase no retoma nada, falta un enlace o un marcador. Y si quieres subrayar algo, hazlo **una vez**: un orden marcado en cada frase deja de marcar.', en: 'For every sentence in a paragraph, ask what the reader already knows at that point. That goes first; the new goes last. If a sentence picks up nothing, it needs a link or a marker. And stress things once: a marked order in every sentence no longer marks anything.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'Una frase termina con «un antiguo lavadero». Para seguir con progresión lineal, la siguiente empieza por…', options: ['«Ese lavadero…».', 'un marcador de cambio de tema.', 'un dato sin relación.'], answer: 0, why: 'Progresión lineal: el rema anterior pasa a ser el tema.', en: 'How does the next sentence start in linear progression?' },
            { prompt: '¿Qué frase presenta como noticia la llegada de los resultados?', options: ['Llegaron ayer los resultados de los análisis.', 'Los resultados de los análisis, llegaron ayer.', 'Los resultados de los análisis llegaron ayer.'], answer: 0, why: 'Verbo de llegada + sujeto nuevo detrás: toda la frase es noticia. Sin inversión, los resultados ya son tema y lo nuevo es «ayer»; y la coma entre sujeto y verbo es incorrecta.', en: 'Which sentence presents the results as news?' },
            { prompt: '«Cierto es que la obra se retrasó, pero…». ¿Qué hace quien escribe?', options: ['Concede un punto antes de matizarlo.', 'Corrige a alguien que lo negaba.', 'Pregunta si la obra se retrasó.'], answer: 0, why: 'El atributo antepuesto «cierto es que» concede; lo importante viene detrás de «pero».', en: 'What is the writer doing?' },
            { prompt: 'Un párrafo anuncia «tres riesgos» y dedica una frase a cada uno. ¿Qué progresión sigue?', options: ['Temas derivados.', 'Tema constante.', 'Progresión lineal.'], answer: 0, why: '«Tres riesgos» es el hipertema; cada riesgo es un tema derivado.', en: 'Which progression does it follow?' },
            { prompt: '«Respecto de» y «respecto a»…', options: ['Solo «respecto a» es correcta.', 'Solo «respecto de» es correcta.', 'Las dos son correctas.'], answer: 2, why: 'Las dos son correctas y frecuentes en registro formal, también con «con»: «con respecto a / de».', en: 'Which is correct?' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro texto, el mismo criterio. A new text, the same principle.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: el informe anual de una biblioteca municipal. Tu alumno reescribe cada frase y explica qué ha cambiado de lugar y por qué.', self: 'Ahora, el informe anual de una biblioteca municipal: reescribe cada frase según la instrucción. (A public library’s annual report.)' } },
          { kind: 'rewrite', title: 'Informe de la biblioteca · Library report', items: [
            { prompt: 'Un aumento del 20 % en los préstamos se registró en 2025.', instruction: 'Empieza por el año y deja lo nuevo al final.', accept: ['En 2025 se registró un aumento del 20 % en los préstamos', 'En 2025 se registró un aumento del 20% en los préstamos', 'En 2025 se registró un aumento del 20 por ciento en los préstamos'] },
            { prompt: 'El caso de la sala infantil es distinto.', instruction: 'Antepón el adjetivo para contrastar con el párrafo anterior.', accept: ['Distinto es el caso de la sala infantil'] },
            { prompt: 'Pasamos al horario. La biblioteca abrirá también los domingos.', instruction: 'Haz una sola frase que empiece por «Por lo que respecta al».', accept: ['Por lo que respecta al horario la biblioteca abrirá también los domingos', 'Por lo que respecta al horario la biblioteca también abrirá los domingos'] },
          ] },
        ] },
        { title: 'Ampliación · Rema dividido, titulares y registro', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1. Rema dividido.** Un rema con dos o más partes se desarrolla después parte por parte: «La obra tuvo **defensores y detractores**. Los defensores… Los detractores…». Se parece a los temas derivados, pero aquí las partes salen del rema, no de un tema general. **2. Titulares.** En la prensa son frecuentes los titulares con el verbo delante, porque todo es noticia: «Crece la preocupación por la sequía», «Vuelven las nutrias al Sauce». **3. Registro.** La anteposición enfática abunda en el ensayo, la prensa de opinión y la prosa literaria («Largo fue el camino»); en un informe técnico o un acta se reserva para las conclusiones, si acaso, y el orden neutro domina.', en: 'For strong students or spare time. A split rheme has several parts that are developed one by one; unlike derived themes, the parts come from the rheme, not from a general topic. Press headlines often put the verb first because everything in them is news. Emphatic fronting is common in essays, opinion journalism and literary prose; technical reports and minutes keep neutral order and save marked order, if anything, for the conclusions.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«El proyecto dividió a técnicos y vecinos. Los técnicos querían un cauce ancho; los vecinos, más paseo.» ¿Qué progresión es?', options: ['Tema constante.', 'Progresión lineal simple.', 'Rema dividido.'], answer: 2, why: 'El rema «técnicos y vecinos» se divide y cada parte se desarrolla en turno.', en: 'Which progression is this?' },
            { prompt: '¿Qué titular presenta todo el contenido como noticia?', options: ['La preocupación crece por la sequía.', 'Crece la preocupación por la sequía.', 'La preocupación por la sequía, crece.'], answer: 1, why: 'Verbo delante y sujeto detrás: el titular entero es información nueva.', en: 'Which headline presents everything as news?' },
            { prompt: 'Pasa a un acta técnica: «Graves son las deficiencias detectadas en el tramo norte».', options: ['Deficiencias graves son las detectadas en el tramo norte.', 'Se han detectado deficiencias graves en el tramo norte.', 'Graves, las deficiencias se han detectado en el tramo norte.'], answer: 1, why: 'El acta pide orden neutro; las deficiencias, nuevas, van detrás del verbo.', en: 'Neutral wording for technical minutes.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca un artículo de opinión, localiza dos órdenes marcados y explica qué función cumple cada uno: énfasis o enlace.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 221 · Modalización sutil: certeza, reserva e insinuación', text: 'Hoy has ordenado la información a escala de texto: qué retoma cada frase, dónde va lo nuevo, cuándo marcar un cambio de tema y cuándo vale la pena un orden marcado. En la clase 221 pasas del orden de lo que dices a cuánto te comprometes con ello: la **modalización sutil** («Cabe pensar que…», «con todas las reservas»), el otro gran recurso del ensayo y la prensa.', en: 'Today you organised information at the level of the text: what each sentence picks up, where new information goes, when to signal a change of topic and when a marked order is worth it. Class 221 moves from how you order what you say to how far you commit to it: subtle modality, the other key resource of essays and the press.', href: '/gramatica/modalizacion-sutil-certeza-reserva-e-insinuacion', label: 'Ir a la clase 221' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Las nutrias han vuelto”, “Han vuelto las nutrias” y “Las nutrias, nadie las esperaba”?». Respuesta esperada: las nutrias ya son tema; las nutrias son noticia; tema retomado con clítico que destaca lo inesperado. Tarea: el párrafo de Escribir.' },
        ] },
      ],
    },
  ],
};
