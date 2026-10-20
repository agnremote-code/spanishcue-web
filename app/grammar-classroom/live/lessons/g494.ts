import type { LiveLesson } from '../types';

/**
 * Lesson 494 · C1 · Citas indirectas y distanciamiento en textos (course unit G194).
 * Builds on G118 (lesson 418, dijo que / pidió que), G146 (lesson 233, estilo indirecto:
 * statements, questions, requests, tense shifts), G147 (lesson 447, deictic shifts) and
 * G193 (lesson 493, attribution markers and the conditional of rumour: its inventory
 * is not repeated). C1 step: the mechanics of quoting in WRITTEN texts. Direct, indirect
 * and integrated quotation (como señala X, «…»; en palabras de X, «…»; X sostiene que…);
 * a quoted fragment must fit the reporter's syntax (person, tense); tense choice when
 * the reported fact is still valid (Dijo que la reunión es / era mañana); reported
 * questions (preguntó si…, quiso saber cuándo…; «preguntó que si» as oral usage);
 * orders and requests (pidió que + subjuntivo, ordenó + infinitivo / que + subjuntivo,
 * dijo que + subjuntivo = order); summarising a long speech with interpretive reporting
 * verbs and nominalisation (descartó…, advirtió del riesgo de…, negó que + subjuntivo);
 * quotation punctuation (RAE: «» first, then “ ” and ‘ ’; the period goes after the
 * closing quote; colon + capital vs que + lower case; […] for cuts; [sic]); free
 * indirect style (receptive); distancing: sostiene vs demuestra, sería (hypothesis),
 * habría (unconfirmed fact) as a recap. Ampliación: mood changes the act (dijo que
 * esperábamos / esperáramos; advirtió que había / que no llegara; insistió en que),
 * and present subjunctive after a past verb for a request still pending.
 * Scene: the digital magazine «Ciudad Abierta». Editor Irene Salvat reviews the report
 * written by Mateo Ibarra on Thursday's public meeting where councillor Elena Robles
 * presented the plan to pedestrianise the old town; urban planner Nuria Castell (author
 * of a university report) and shopkeepers' spokesman Ramón Gil also spoke.
 * Escuchar: the local radio bulletin about the meeting (es-ES-ElviraNeural, one voice).
 * Escribir: a short news report of a meeting or talk. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 494,
  level: 'C1',
  title: 'Citas indirectas y distanciamiento en textos',
  subtitle: 'Citar en un texto con precisión: comillas bien puntuadas, estilo indirecto, preguntas, peticiones, resúmenes y distancia.',
  legend: [
    { tone: 'blue', label: 'CITA DIRECTA E INTEGRADA · palabras exactas entre comillas (Como señala Castell, «…»)' },
    { tone: 'teal', label: 'ESTILO INDIRECTO · afirmaciones y tiempos (sostiene que…, dijo que es / era…)' },
    { tone: 'orange', label: 'PREGUNTAS Y PETICIONES · preguntó si…, quiso saber…, pidió que + subjuntivo' },
    { tone: 'violet', label: 'RESUMEN Y DISTANCIA · descartó…, el riesgo de…, sería / habría' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Las palabras de otros en tu texto', coach: 'Cita con precisión y sin mezclar voces. Quote precisely, without mixing voices.',
      steps: [
        { title: 'Una crónica con citas que cojean · A report with shaky quotes', blocks: [
          { kind: 'lead', text: 'Irene Salvat edita la revista digital «Ciudad Abierta». Mateo Ibarra, redactor, le ha enviado la crónica de la sesión informativa del jueves: la concejala de Movilidad, Elena Robles, presentó el plan para peatonalizar el centro histórico; intervinieron también la urbanista Nuria Castell y Ramón Gil, presidente de la asociación de comerciantes. Los datos son buenos; las citas, no siempre. Hoy aprendes **la mecánica de citar en un texto**: cuándo copiar las palabras exactas, cómo integrarlas, cómo transmitir afirmaciones, preguntas y peticiones, cómo resumir un discurso largo y cómo tomar distancia.', en: 'Irene Salvat edits the online magazine “Ciudad Abierta”. Mateo, a reporter, has sent her his piece on Thursday’s public meeting about pedestrianising the old town. His facts are solid, but his quotes are not always handled well. Today you learn the mechanics of quoting in writing: when to copy the exact words, how to weave them into your own sentence, how to report statements, questions and requests, how to boil a long speech down, and how to keep your distance from a claim.' },
          { kind: 'guide', text: { teacher: 'Tú lees las palabras originales de Robles y tu alumno lee las tres versiones. Después dice qué cambia en cada una: la voz que habla, la puntuación y los tiempos.', self: 'Lee las palabras de Robles y las tres versiones. ¿Quién «habla» en cada una, Robles o el periodista? (Who is speaking in each version: Robles or the reporter?)' } },
          { kind: 'compare', title: 'Robles: «La peatonalización no tiene vuelta atrás; es una decisión meditada».', columns: [
            { tone: 'blue', label: 'CITA DIRECTA', sentence: 'Robles afirmó: [[«La peatonalización no tiene vuelta atrás»|blue]].', idea: 'Palabras exactas: dos puntos, comillas y mayúscula. Habla Robles.', en: 'Her exact words, introduced by a colon, in quotation marks and with a capital letter. The voice is hers.' },
            { tone: 'teal', label: 'ESTILO INDIRECTO', sentence: 'Robles [[afirmó que la peatonalización no tenía vuelta atrás|teal]].', idea: 'Tu voz cuenta lo que ella dijo: «que», sin comillas, tiempos ajustados.', en: 'Your voice reports what she said: “que”, no quotation marks, and tenses adapted to your report.' },
            { tone: 'blue', label: 'CITA INTEGRADA', sentence: 'Robles defendió que se trataba de [[«una decisión meditada»|blue]].', idea: 'Tu frase, con un fragmento literal que encaja en ella.', en: 'Your sentence, with a literal fragment that fits its grammar: the most common technique in the press and in academic writing.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿En qué versión las palabras son solo de Robles, sin ninguna intervención del periodista?', options: ['En el estilo indirecto.', 'En la cita integrada.', 'En la cita directa.'], answer: 2, why: 'La cita directa reproduce el enunciado completo, tal cual, tras los dos puntos.', en: 'In which version are the words entirely Robles’s, untouched by the reporter?' },
            { prompt: '«Robles defendió que se trataba de “una decisión meditada”». ¿Qué parte es literal?', options: ['Solo «defendió que».', 'Toda la frase.', 'Solo «una decisión meditada».'], answer: 2, why: 'En la cita integrada solo es literal lo que va entre comillas; el resto es la voz del periodista.', en: 'In this integrated quote, which part is literal?' },
          ] },
        ] },
        { title: 'Integrar y puntuar una cita · Integrating and punctuating a quote', mascot: '/brand/mascot/studying.webp', coach: 'El punto, después de las comillas. The full stop goes after the closing quote.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CITA DIRECTA E INTEGRADA', question: '¿Las palabras exactas aportan algo: fuerza, precisión, un tono que no quieres perder?', en: 'Quote directly when the exact words matter. A full quote follows a colon and starts with a capital letter. Introductory phrases such as “como señala X” or “en palabras de X” are followed by a comma. An integrated fragment carries no colon and no capital, and it must fit your sentence: same person, compatible tense. If it doesn’t fit, paraphrase in indirect speech instead.', formula: ['X afirmó: «Cita completa».', 'Como señala X, «cita». · En palabras de X, «cita».', 'X afirmó que el plan era «una decisión meditada».'],
            meaning: 'Cita literalmente cuando las palabras exactas importan. La cita completa va tras **dos puntos** y empieza con **mayúscula**. Con «**como señala X**», «**en palabras de X**» o «**según escribe X**», se usa **coma**. El fragmento integrado no lleva dos puntos ni mayúscula, y debe **encajar en tu frase**: misma persona, tiempo compatible. Si no encaja, pásalo a estilo indirecto.',
            examples: [
              { es: '[[Como señala Castell en su informe, «la medida reduciría el tráfico del centro en un 40 %»|blue]].', en: 'As Castell points out in her report, “the measure would cut traffic in the centre by 40%”: comma after the introducer, lower case because the quote continues the sentence.' },
              { es: '[[En palabras de Gil, «nadie se opone al plan; nos preocupa cómo se hace»|blue]].', en: 'In Gil’s words, “nobody is against the plan; what worries us is how it’s done”.' },
              { es: 'Gil calificó el calendario de [[«precipitado»|blue]].', en: 'Gil described the timetable as “rushed”: a one-word fragment that slots into the reporter’s sentence.' },
            ] },
          { kind: 'table', title: 'Puntuación de las citas · Punctuating quotes', head: ['Caso', 'Así ✓', 'Así no ✗'], rows: [
            ['punto final: después de las comillas', 'Dijo: «No hay vuelta atrás»**.**', 'Dijo: «No hay vuelta atrás.»'],
            ['cita completa: dos puntos y mayúscula', 'Afirmó**:** «**L**a medida es firme».', 'Afirmó que: «la medida es firme».'],
            ['tras «que»: sin dos puntos ni mayúscula', 'Afirmó que la medida era «**firme**».', 'Afirmó que «La medida es firme».'],
            ['cita dentro de una cita', '«Un vecino me dijo: **“**Aquí ya no se puede vivir**”**».', '«Un vecino me dijo: «Aquí ya no se puede vivir»».'],
            ['omitir una parte', '«La medida reduciría el tráfico **[…]** en un 40 %».', '«La medida reduciría el tráfico... en un 40 %».'],
            ['error del original', '«Peatonalisar **[sic]** es vivir».', '«Peatonalizar es vivir» (corregido sin avisar).'],
          ], note: 'Orden de las comillas: « » primero, “ ” dentro y ‘ ’ en un tercer nivel. Los signos de interrogación o exclamación que pertenecen a la cita van dentro de las comillas. [sic] («así, tal cual») va justo detrás de la palabra errónea.' },
          { kind: 'tip', icon: '🌎', title: '¿Angulares o inglesas? · Which quotation marks?', text: 'La RAE recomienda usar primero las **comillas angulares** « », sobre todo en textos impresos, y es lo habitual en la prensa de España. En gran parte de América y en muchos textos digitales se usan sobre todo las **inglesas** “ ”. Las dos son correctas; lo que cuenta es la **coherencia** dentro del texto y alternarlas cuando hay una cita dentro de otra. El punto va **siempre fuera**: «…». / “…”.', en: 'The RAE recommends angle quotes « » as the first choice, especially in print, and they are standard in the Spanish press. Across much of Latin America and online, double quotes “ ” are more common. Both are correct: be consistent and alternate them for a quote within a quote. Unlike US English, the full stop always goes outside.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien puntuada?', options: ['Castell concluye: «El centro ganaría vecinos».', 'Castell concluye: «El centro ganaría vecinos.»', 'Castell concluye que: «El centro ganaría vecinos».'], answer: 0, why: 'Cita completa: dos puntos, mayúscula y el punto después de las comillas de cierre. «Que» no va seguido de dos puntos.', en: 'Which sentence is correctly punctuated?' },
            { prompt: 'Quieres citar solo el principio y el final de una frase de Castell. ¿Cómo marcas el corte?', options: ['Con puntos suspensivos entre corchetes: […]', 'No hace falta marcarlo.', 'Con tres puntos sin más: ...'], answer: 0, why: 'Los corchetes indican que el corte es tuyo, no una pausa del original.', en: 'You want to quote only the beginning and end of Castell’s sentence. How do you mark the cut?' },
          ] },
        ] },
        { title: 'Los tiempos: ¿sigue siendo verdad? · Tenses: is it still true?', mascot: '/brand/mascot/standing.webp', coach: 'Dijo que es / era mañana: las dos, con matiz. Both, with a nuance.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TIEMPOS EN EL ESTILO INDIRECTO', question: '¿Cuentas desde el presente (sostiene, afirma) o desde el pasado (dijo, anunció)? ¿El dato sigue vigente?', en: 'With a present reporting verb (sostiene, afirma, explica: typical when you discuss a text that is still “speaking”), tenses stay as they were. With a past reporting verb, tenses usually shift into the past. But if the fact is still valid and you, the writer, present it as current, you can keep the present or future. The shifted version keeps the perspective of the moment it was said: neutral in a narrative, and it can leave open whether things have changed.', formula: ['sostiene / afirma / explica que + sin cambio', 'dijo / anunció que + dato vigente → es / será (o era / sería)', 'dijo que + dato ya no vigente → era / sería'],
            meaning: 'Con un verbo introductor en **presente** (sostiene, afirma, explica: lo normal al comentar un texto, que «sigue hablando»), los tiempos no cambian. Con un verbo en **pasado**, los tiempos suelen desplazarse. Pero si el dato **sigue vigente** y tú lo presentas como actual, puedes mantener el presente o el futuro: así te comprometes con su vigencia. La versión desplazada conserva la perspectiva del momento en que se dijo: es neutra en un relato y deja abierta la posibilidad de que algo haya cambiado.',
            examples: [
              { es: 'Castell [[sostiene que la medida sería eficaz|teal]] con un buen transporte público.', en: 'Present frame: no shift. “Sería” is not a shifted tense here but a hypothesis: the measure doesn’t exist yet.' },
              { es: 'Robles [[anunció que las obras empezarán en marzo|teal]].', en: 'March is still ahead and the writer presents the date as firm.' },
              { es: 'Robles [[anunció que las obras empezarían en marzo|teal]].', en: 'Also correct: the report keeps the perspective of the meeting.' },
              { es: 'El informe [[recuerda que el transporte público reduce las emisiones|teal]].', en: 'A general truth stays in the present.' },
            ] },
          { kind: 'compare', title: 'Esta mañana, Irene dijo: «La reunión es mañana». · Same day, two choices', columns: [
            { tone: 'teal', label: 'DATO VIGENTE', sentence: 'Irene [[dijo que la reunión es mañana|teal]].', idea: 'Lo cuentas hoy y lo das por válido: tú también lo afirmas.', en: 'You report it the same day and treat it as valid: you are vouching for it too. (If Irene had said it last week, “mañana” would no longer fit.)' },
            { tone: 'teal', label: 'PERSPECTIVA DEL PASADO', sentence: 'Irene [[dijo que la reunión era mañana|teal]].', idea: 'Mantienes la perspectiva de cuando lo dijo; no garantizas que siga así.', en: 'You keep the perspective of when she said it, without guaranteeing that it still holds: “…but who knows now”.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Estilo indirecto libre · Free indirect style', text: 'En los relatos y en algunas crónicas, el narrador cuenta lo que piensa un personaje **sin verbo introductor ni comillas**, con los tiempos del relato y la perspectiva del personaje: «Robles miró la sala llena. ¿Cómo iba a convencer a los comerciantes en una sola tarde? Mañana tendría que explicarlo todo otra vez». La pregunta y el «mañana» son del personaje; «iba» y «tendría», del narrador. Basta con reconocerlo.', en: 'In fiction and in some feature writing, the narrator renders a character’s thoughts with no reporting verb and no quotation marks, using the narrative tenses but the character’s viewpoint: the question and “tomorrow” belong to Robles, while “iba” and “tendría” are the narrator’s. You only need to recognise it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'En su informe de 2025, Castell escribe: «La medida reduciría el tráfico». Lo comentas hoy en un trabajo.', prompt: 'Castell ___ que la medida reduciría el tráfico.', options: ['sostuviera', 'sostenga', 'sostiene'], answer: 2, why: 'Al comentar un texto que sigue disponible, lo normal es el presente: «sostiene», «afirma», «señala».', en: 'Discussing a published report today: Castell argues that the measure would reduce traffic.' },
            { context: 'Hace un mes, Gil dijo: «Estoy preocupado». Hoy ya apoya el plan.', prompt: '¿Qué frase es la adecuada?', options: ['Gil dijo que estaba preocupado.', 'Gil dijo que esté preocupado.', 'Gil dijo que está preocupado.'], answer: 0, why: 'El dato ya no es vigente: el pasado lo sitúa en el momento en que lo dijo.', en: 'A month ago Gil said he was worried; now he supports the plan. Which sentence fits?' },
          ] },
        ] },
        { title: 'Preguntas y peticiones · Questions and requests', mascot: '/brand/mascot/speaking.webp', coach: 'Preguntar con «si»; pedir con subjuntivo. Ask with “si”, request with the subjunctive.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'TRANSMITIR PREGUNTAS Y PETICIONES', question: '¿Lo que se dijo era una pregunta o una petición?', en: 'Yes/no questions are reported with “si”; other questions keep the question word, with its accent (qué, cuándo, cuánto, por qué). “Quiso saber” and “se preguntó” are more elegant than repeating “preguntó”. Requests and orders take the subjunctive after “que”, normally in the past subjunctive after a past verb. “Ordenar”, “prohibir” and “permitir” also take an infinitive.', formula: ['preguntó si + indicativo (sí / no)', 'preguntó / quiso saber / se preguntó + qué, cuándo, cuánto, por qué…', 'pidió (a alguien) que + subjuntivo', 'ordenó / prohibió / permitió + infinitivo o que + subjuntivo'],
            meaning: 'Las preguntas de sí o no se transmiten con **si**; las demás conservan el **interrogativo con tilde** (qué, cuándo, cuánto, por qué). «**Quiso saber**» y «**se preguntó**» evitan repetir «preguntó». Las peticiones y órdenes llevan **subjuntivo** tras «que», normalmente en imperfecto de subjuntivo si el verbo está en pasado. «Ordenar», «prohibir» y «permitir» admiten también **infinitivo**.',
            examples: [
              { es: 'Una vecina [[preguntó si podrían entrar los taxis|orange]].', en: 'A resident asked whether taxis would be allowed in (yes/no question → si).' },
              { es: 'Otro vecino [[quiso saber cuánto costaría la obra|orange]].', en: 'Another resident wanted to know how much the works would cost (question word kept, with its accent).' },
              { es: 'Robles [[pidió a los comerciantes que dieran seis meses de margen|orange]] al plan.', en: 'Robles asked the shopkeepers to give the plan six months (request → que + subjunctive).' },
              { es: 'La alcaldía [[ordenó cerrar|orange]] la calle durante la sesión.', en: 'The mayor’s office ordered the street closed during the meeting (ordenar + infinitive).' },
            ] },
          { kind: 'table', title: 'De la grabación a la crónica · From the recording to the report', head: ['Palabras originales', 'En la crónica'], rows: [
            ['«¿Habrá bancos en la plaza?»', 'Un vecino [[preguntó si habría|orange]] bancos en la plaza.'],
            ['«¿Por qué no se consultó antes a los barrios?»', 'Una vecina [[se preguntó por qué no se había consultado|orange]] antes a los barrios.'],
            ['«Den seis meses de margen al plan.»', 'Robles [[pidió que dieran|orange]] seis meses de margen al plan.'],
            ['«Esperen fuera, por favor.»', 'El conserje [[dijo que esperáramos|orange]] fuera. (decir que + subjuntivo = orden)'],
            ['«No se puede grabar dentro.»', 'La organización [[prohibió grabar|orange]] dentro.'],
          ], note: '«Preguntó que si…» es muy frecuente al hablar y está bien en la conversación; en un texto escrito cuidado se prefiere «preguntó si…».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Un comerciante: «¿Cuándo empiezan las obras?».', prompt: 'Un comerciante quiso saber ___ las obras.', options: ['cuándo empezarían', 'si cuándo empezaban', 'que empezarían'], answer: 0, why: 'Pregunta con interrogativo: se conserva «cuándo», con tilde, sin «si» ni «que».', en: 'A shopkeeper wanted to know when the works would start.' },
            { context: 'Robles a los vecinos: «Tengan paciencia».', prompt: 'Robles pidió a los vecinos que ___ paciencia.', options: ['tenían', 'tuvieran', 'tendrían'], answer: 1, why: 'Una petición: «pedir que» + subjuntivo. Con el indicativo sería una afirmación.', en: 'Robles asked the residents to be patient.' },
          ] },
        ] },
        { title: 'Resumir y tomar distancia · Summarising and keeping your distance', mascot: '/autoestudio/mascot/noting.webp', coach: 'Un verbo que interpreta, un sustantivo que condensa. A verb that interprets, a noun that condenses.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'RESUMIR UN DISCURSO', question: '¿Tienes diez minutos de intervención y una línea en tu texto?', en: 'To summarise, don’t pile up “dijo que… dijo que…”. Choose a verb that names the speech act (announced, defended, admitted, denied, ruled out, warned of, called for) and condense the content into a noun phrase: “the risk of losing customers”, “the extension of the area”. Note the mood: “negar que” and “descartar que” normally take the subjunctive; “reconocer que” and “admitir que” take the indicative.', formula: ['anunció · defendió · reconoció · admitió · subrayó · reclamó · matizó', 'descartó / negó que + subjuntivo · advirtió de + sustantivo', 'verbo + nominalización: la ampliación de…, el riesgo de…'],
            meaning: 'Para resumir, no encadenes «dijo que… dijo que…». Elige un **verbo que interprete** el acto (anunció, defendió, reconoció, admitió, descartó, advirtió de, reclamó) y condensa el contenido en un **sustantivo**: «el riesgo de perder clientes», «la ampliación de la zona». Ojo al modo: «**negar que**» y «**descartar que**» llevan normalmente subjuntivo; «reconocer que» y «admitir que», indicativo.',
            examples: [
              { es: 'Gil [[descartó una oposición frontal al plan|violet]], pero [[advirtió del riesgo de perder clientes|violet]].', en: 'Gil ruled out outright opposition to the plan but warned of the risk of losing customers: ten minutes of speech in one line.' },
              { es: 'Robles [[negó que el plan fuera improvisado|violet]] y [[reconoció que el calendario era ajustado|violet]].', en: 'Robles denied that the plan was improvised (subjunctive) and admitted that the timetable was tight (indicative).' },
            ] },
          { kind: 'compare', title: 'Distancia o compromiso · Distance or commitment', columns: [
            { tone: 'violet', label: 'TESIS AJENA', sentence: 'Castell [[sostiene que la medida sería eficaz|violet]].', idea: '«Sostiene», «afirma», «asegura»: la tesis es suya, no tuya. «Sería»: la medida aún no existe.', en: 'The claim is hers, not yours; “sería” presents the effect as a hypothesis, since the measure hasn’t been applied.' },
            { tone: 'neutral', label: 'TÚ TE COMPROMETES', sentence: 'Castell demuestra que el tráfico ha bajado en otras ciudades.', idea: '«Demuestra», «confirma», «revela»: tú aceptas que es verdad.', en: 'Verbs like “demuestra” or “confirma” commit you, the writer, to the truth of what follows.' },
            { tone: 'violet', label: 'DATO NO CONFIRMADO', sentence: 'El primer tramo [[habría costado|violet]] el doble, según un informe interno.', idea: 'Condicional de distancia (clase 193): no lo das por seguro.', en: 'The conditional of reported information (class 193): you don’t present it as certain. Some style guides prefer to name the source and avoid it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Gil habló diez minutos sobre el aparcamiento y las ventas. ¿Qué resumen es el más preciso?', options: ['Gil reclamó más plazas de aparcamiento y advirtió de una caída de las ventas.', 'Gil habló y habló del aparcamiento.', 'Gil dijo que habló del aparcamiento y dijo que habló de las ventas.'], answer: 0, why: 'Dos verbos que interpretan el acto (reclamó, advirtió de) y dos sustantivos que condensan el contenido.', en: 'Gil spoke for ten minutes about parking and sales. Which summary is most precise?' },
            { prompt: 'Quieres presentar la idea de Castell sin hacerla tuya. ¿Qué verbo eliges?', options: ['Castell confirma que la medida sería eficaz.', 'Castell sostiene que la medida sería eficaz.', 'Castell demuestra que la medida sería eficaz.'], answer: 1, why: '«Sostiene» atribuye la tesis a la autora. «Demuestra» o «confirma» te comprometen, y chocan con una hipótesis («sería»).', en: 'You want to present Castell’s idea without endorsing it. Which verb do you choose?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Voz, puntuación o modo? Voice, punctuation or mood?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué falla (mezcla de voces, puntuación, modo o registro) antes de ver la corrección.', self: 'Lee cada frase: ¿falla la voz, la puntuación, el modo o el registro? Decide y después mira la corrección. (What is wrong: voice, punctuation, mood or register?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Robles dijo que «empezaremos en marzo».', right: 'Robles dijo: «Empezaremos en marzo». / Robles anunció que empezarían en marzo.', why: 'Tras «que», el fragmento literal en 1.ª persona mezcla la voz de Robles con la del periodista. Cita entera o pasa a indirecto.' },
            { wrong: 'Afirmó: «No hay vuelta atrás.»', right: 'Afirmó: «No hay vuelta atrás».', why: 'En español, el punto va después de las comillas de cierre.' },
            { wrong: 'Afirmó que: «No hay vuelta atrás».', right: 'Afirmó que no había vuelta atrás. / Afirmó: «No hay vuelta atrás».', why: '«Que» y los dos puntos no se combinan: o estilo indirecto o cita directa.' },
            { wrong: 'Una vecina preguntó que si podrían entrar los taxis. (en la crónica)', right: 'Una vecina preguntó si podrían entrar los taxis.', why: '«Preguntó que si» es normal al hablar; en un texto escrito cuidado, «preguntó si».' },
            { wrong: 'Robles pidió a los vecinos que tenían paciencia.', right: 'Robles pidió a los vecinos que tuvieran paciencia.', why: '«Pedir que» introduce una petición: subjuntivo.' },
            { wrong: 'Gil negó que los comerciantes se oponían al plan.', right: 'Gil negó que los comerciantes se opusieran al plan.', why: '«Negar que» lleva normalmente subjuntivo.' },
            { wrong: '«La medida reduciría el tráfico... en un 40 %».', right: '«La medida reduciría el tráfico […] en un 40 %».', why: 'Un corte tuyo se marca con puntos suspensivos entre corchetes; sin corchetes parece una pausa del original.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta en una crónica escrita?', options: ['Un vecino preguntó si habría bancos.', 'Un vecino preguntó: si habría bancos.', 'Un vecino preguntó que si habría bancos.'], answer: 0, why: 'Pregunta de sí o no en un texto cuidado: «preguntó si», sin «que» y sin dos puntos.', en: 'Which sentence is right in a written report? (A resident asked whether there would be benches.)' },
            { prompt: 'Gil dijo: «Nos sentimos ignorados». ¿Qué cita integrada es correcta?', options: ['Gil dijo que «nos sentimos ignorados».', 'Gil dijo que los comerciantes se sentían «ignorados».', 'Gil dijo que: «Nos sentimos ignorados».'], answer: 1, why: 'El fragmento literal («ignorados») encaja en la frase del periodista sin cambiar de persona.', en: 'Gil said they felt ignored. Which integrated quote is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta, primero en estilo directo y luego en indirecto, algo que alguien le dijo, le preguntó y le pidió esta semana.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La crónica, con lápiz rojo', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Irene corrige a Mateo · Irene edits Mateo', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Mateo. Después tu alumno toca cada expresión marcada y explica qué técnica de cita se usa y por qué está bien o mal.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿cita directa o integrada, estilo indirecto, pregunta, petición, resumen o distancia? (Tap each marked expression and name the technique.)' } },
          { kind: 'explore', title: 'Las citas de la crónica', setting: 'Viernes por la mañana, redacción de «Ciudad Abierta». Irene, la editora, repasa en pantalla la crónica de Mateo antes de publicarla. Se tratan de tú. (Friday morning in the newsroom: the editor goes through the reporter’s draft before it goes online.)', lines: [
            { who: 'Irene', text: 'Mateo, los datos están bien; las citas, no tanto. Aquí escribes: Robles [[dijo que «empezaremos en marzo»|blue]]. ¿Quiénes empiezan, tú y yo?', en: 'Mateo, the facts are fine; the quotes, less so. Here you write that Robles said “we’ll start in March”. Who’s starting, you and me?' },
            { who: 'Mateo', text: 'Ya veo, mezclo su voz con la mía. O la cito entera, o la paso a indirecto: Robles [[anunció que empezarían en marzo|teal]] por la calle Mayor.', en: 'I see, I’m mixing her voice with mine. Either I quote her in full or I switch to indirect speech: Robles announced they would start in March on Calle Mayor.' },
            { who: 'Irene', text: 'Eso. Y para abrir tienes una cita mucho mejor: [[En palabras de Robles, «la peatonalización no tiene vuelta atrás»|blue]]. Con el punto detrás de las comillas, ¿eh?', en: 'Exactly. And you’ve got a much better quote to open with: “In Robles’s words, ‘pedestrianisation is irreversible’.” With the full stop after the closing quote, OK?' },
            { who: 'Mateo', text: 'Entendido. ¿Y el público? Puse que una vecina [[preguntó que si podrían entrar los taxis|orange]].', en: 'Got it. What about the audience? I wrote that a resident asked whether taxis would be able to get in.' },
            { who: 'Irene', text: 'Hablando se dice mucho, pero por escrito, mejor [[preguntó si podrían entrar|orange]]. La otra, [[quiso saber cuándo empezarían las obras|orange]], está perfecta.', en: 'People say it all the time, but in writing “preguntó si” is better. The other one, “wanted to know when the works would start”, is perfect.' },
            { who: 'Mateo', text: 'Lo de los comerciantes lo dejé así: Robles [[les pidió que dieran seis meses de margen al plan|orange]].', en: 'I left the bit about the shopkeepers like this: Robles asked them to give the plan six months.' },
            { who: 'Irene', text: 'Bien. Ahora, Gil: diez minutos de discurso y medio artículo tuyo. Resúmelo: [[Gil descartó una oposición frontal|violet]], pero [[advirtió del riesgo de perder clientes|violet]].', en: 'Good. Now, Gil: a ten-minute speech and half your article. Sum it up: Gil ruled out outright opposition but warned of the risk of losing customers.' },
            { who: 'Mateo', text: 'Vale. ¿Y lo de Castell? He puesto que [[sostiene que la medida sería eficaz|violet]] con un buen transporte público.', en: 'OK. And Castell? I’ve put that she argues the measure would be effective with good public transport.' },
            { who: 'Irene', text: 'Perfecto: lo afirma ella, no tú, y «sería» recuerda que la medida aún no existe. Si recortas su frase, marca el corte con [[puntos suspensivos entre corchetes|blue]]: «la medida reduciría el tráfico […] en un 40 %».', en: 'Perfect: she’s the one claiming it, not you, and “sería” reminds the reader the measure doesn’t exist yet. If you trim her sentence, mark the cut with an ellipsis in square brackets.' },
            { who: 'Mateo', text: 'Última duda: la pancarta de la entrada tenía una falta, «Peatonalisar es vivir». ¿La corrijo?', en: 'One last question: the banner at the entrance had a spelling mistake. Do I correct it?' },
            { who: 'Irene', text: 'No: la copias tal cual y avisas al lector con [[sic entre corchetes|blue]], justo detrás de la palabra: «Peatonalisar [sic] es vivir».', en: 'No: copy it as it is and warn the reader with “sic” in square brackets, right after the word.' },
            { who: 'Mateo', text: 'Hecho. Te la mando corregida antes de las doce.', en: 'Done. I’ll send it back corrected before twelve.' },
          ], notes: {
            'dijo que «empezaremos en marzo»': '**Cita integrada mal construida**: tras «que» habla el periodista, pero «empezaremos» es la 1.ª persona de Robles. Las voces se mezclan. Solución: cita completa con dos puntos o estilo indirecto.',
            'anunció que empezarían en marzo': '**Estilo indirecto** con verbo en pasado: futuro → condicional. «Empezarán» también sería correcto, porque marzo aún no ha llegado.',
            'En palabras de Robles, «la peatonalización no tiene vuelta atrás»': '**Cita introducida con «En palabras de X»** + coma. Como continúa la frase, va en minúscula; el punto final, fuera de las comillas.',
            'preguntó que si podrían entrar los taxis': '**«Preguntó que si»**: muy frecuente en la lengua oral; en un texto escrito cuidado sobra el «que».',
            'preguntó si podrían entrar': '**Pregunta de sí o no** en estilo indirecto: «si» + indicativo; futuro → condicional.',
            'quiso saber cuándo empezarían las obras': '**Pregunta con interrogativo**: se conserva «cuándo» con tilde. «Quiso saber» evita repetir «preguntó».',
            'les pidió que dieran seis meses de margen al plan': '**Petición**: «pedir que» + imperfecto de subjuntivo. «Les» anticipa a los comerciantes.',
            'Gil descartó una oposición frontal': '**Resumen con nominalización**: un verbo que interpreta (descartar) + un sustantivo que condensa la idea.',
            'advirtió del riesgo de perder clientes': '**Advertir de** + sustantivo: resume el aviso. «El riesgo de perder clientes» condensa varios minutos de discurso.',
            'sostiene que la medida sería eficaz': '**Distancia**: «sostiene» presenta la tesis como de Castell, en presente porque su informe sigue «hablando»; «sería» la presenta como hipótesis.',
            'puntos suspensivos entre corchetes': '**[…]** marca que el corte es del periodista, no una pausa del original.',
            'sic entre corchetes': '**[sic]** («así, tal cual», en latín) indica que el error está en el original y que la cita es fiel.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no sirve «Robles dijo que “empezaremos en marzo”»?', options: ['Porque marzo ya ha pasado.', 'Porque mezcla la voz del periodista con la 1.ª persona de Robles.', 'Porque Robles no dijo eso.'], answer: 1, why: '«¿Quiénes empiezan, tú y yo?»: el «nosotros» de Robles no encaja en la frase del periodista.', en: 'Why doesn’t “Robles said that ‘we’ll start in March’” work?' },
            { prompt: '¿Qué hace Mateo con la pancarta?', options: ['La copia tal cual y añade [sic].', 'La corrige.', 'La quita de la crónica.'], answer: 0, why: '«La copias tal cual y avisas al lector con sic entre corchetes».', en: 'What does Mateo do with the banner?' },
            { prompt: 'Según Irene, ¿qué expresa «sería» en la frase sobre Castell?', options: ['Que Castell se equivoca.', 'Que la medida ya funciona.', 'Que la medida todavía no existe: es una hipótesis.'], answer: 2, why: '«“Sería” recuerda que la medida aún no existe».', en: 'According to Irene, what does “sería” express in the sentence about Castell?' },
          ] },
        ] },
        { title: '¿Qué transmite cada frase? · What does each sentence report?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases de la crónica · More lines from the report', categories: [
            { id: 'afirma', label: 'AFIRMACIÓN · lo que alguien dijo que era así', tone: 'teal' },
            { id: 'pregunta', label: 'PREGUNTA · si…, qué…, cuándo…', tone: 'orange' },
            { id: 'pide', label: 'PETICIÓN U ORDEN · que + subjuntivo, infinitivo', tone: 'neutral' },
          ], items: [
            { text: 'Robles dijo que los taxis podrían entrar de noche.', answer: 'afirma', why: '«Dijo que» + indicativo (condicional): transmite una información.' },
            { text: 'Robles dijo a los técnicos que revisaran los accesos.', answer: 'pide', why: '«Decir que» + subjuntivo transmite una orden.' },
            { text: 'Un vecino quiso saber si habría bancos en la plaza.', answer: 'pregunta', why: '«Quiso saber si»: pregunta de sí o no.' },
            { text: 'Gil advirtió que las ventas ya habían bajado.', answer: 'afirma', why: '«Advertir que» + indicativo: avisa de un hecho.' },
            { text: 'Una vecina le advirtió que no se olvidara de los mayores.', answer: 'pide', why: '«Advertir que» + subjuntivo: es una petición, casi una orden.' },
            { text: 'Otra vecina se preguntó por qué no se había consultado antes a los barrios.', answer: 'pregunta', why: '«Se preguntó por qué»: pregunta con interrogativo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno explica por qué «Robles dijo que los taxis podían entrar» y «Robles dijo que los taxis pudieran entrar» transmiten actos distintos (información / permiso u orden).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Quién habla y qué hizo: afirmar, preguntar o pedir? Who speaks, and what did they do?',
      steps: [
        { title: 'Elige la forma del texto · Choose the written form', blocks: [
          { kind: 'choice', items: [
            { context: 'Jueves por la tarde. Robles: «La próxima sesión es el viernes a las seis». Mateo escribe esa misma tarde y la fecha está confirmada.', prompt: 'Robles confirmó que la próxima sesión ___ el viernes a las seis.', options: ['es', 'haya sido', 'sea'], answer: 0, why: 'El dato sigue vigente y el periodista lo da por válido: presente. «Era» también sería correcta, con la perspectiva del momento en que se dijo.', en: 'Robles confirmed that the next meeting is on Friday at six.' },
            { context: 'Un ciclista: «¿Habrá carril bici?».', prompt: 'Un ciclista ___ carril bici.', options: ['preguntó si hubiera', 'preguntó si habría', 'preguntó que habría'], answer: 1, why: 'Pregunta de sí o no: «si» + indicativo; el futuro pasa a condicional.', en: 'A cyclist asked whether there would be a cycle lane.' },
            { context: 'Robles a los técnicos: «Revisen los accesos».', prompt: 'Robles ordenó ___ los accesos.', options: ['que revisaban', 'de revisar', 'revisar'], answer: 2, why: '«Ordenar» admite infinitivo («ordenó revisar») o «que» + subjuntivo («que revisaran»), nunca indicativo ni «de».', en: 'Robles ordered the access points to be checked.' },
            { prompt: '¿Qué frase está bien puntuada?', options: ['Robles afirmó: «No hay vuelta atrás».', 'Robles afirmó: «No hay vuelta atrás.»', 'Robles afirmó que: «No hay vuelta atrás».'], answer: 0, why: 'Dos puntos, mayúscula, y el punto después de las comillas. «Que» no se combina con dos puntos.', en: 'Which sentence is correctly punctuated?' },
            { context: 'Gil: «No estamos en contra del plan, pero queremos garantías».', prompt: '¿Qué resumen es correcto?', options: ['Gil negó que los comerciantes se oponían al plan, pero exigió garantías.', 'Gil negó que los comerciantes se opusieran al plan, pero exigió garantías.', 'Gil negó a los comerciantes oponerse al plan y exigió garantías.'], answer: 1, why: '«Negar que» lleva normalmente subjuntivo; «exigió garantías» resume la segunda parte.', en: 'Gil denied that the shopkeepers opposed the plan but demanded guarantees.' },
          ] },
        ] },
        { title: '¿Qué valor tiene el condicional? · What is the conditional doing?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: 'Condicionales de la crónica · Conditionals in the report', categories: [
            { id: 'futuro', label: 'FUTURO VISTO DESDE EL PASADO · anunció que empezarían', tone: 'teal' },
            { id: 'hipotesis', label: 'HIPÓTESIS · lo que pasaría', tone: 'violet' },
            { id: 'distancia', label: 'DATO NO CONFIRMADO · habría costado, según…', tone: 'neutral' },
          ], items: [
            { text: 'Robles anunció que las obras empezarían en marzo.', answer: 'futuro', why: 'Un hecho posterior a lo que se dijo, contado desde el pasado.' },
            { text: 'Gil prometió que la asociación colaboraría con el ayuntamiento.', answer: 'futuro', why: '«Prometió que» + condicional: lo que iba a pasar después de la promesa.' },
            { text: 'Según un informe interno, el primer tramo habría costado el doble.', answer: 'distancia', why: 'El periodista no da el dato por seguro y lo atribuye a una fuente.' },
            { text: 'Según fuentes municipales, la concejala habría pedido un estudio nuevo.', answer: 'distancia', why: 'Información no confirmada: condicional compuesto de distancia.' },
            { text: 'Con más autobuses, el centro recuperaría vecinos.', answer: 'hipotesis', why: 'Una consecuencia posible si se cumple una condición.' },
            { text: 'Castell cree que una tasa de entrada no funcionaría en una ciudad tan pequeña.', answer: 'hipotesis', why: 'Una medida que no existe: se valora como hipótesis.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'guide', text: { teacher: 'Las frases son de la crónica escrita: tu alumno decide si están bien y, si no, elige la corrección y explica qué fallaba.', self: 'Son frases de una crónica escrita: decide si están bien y, si no, elige la corrección. (Written report: decide if each sentence is right.)' } },
          { kind: 'fix', items: [
            { sentence: 'Como señala Castell, «la medida reduciría el tráfico del centro en un 40 %».', ok: true, why: 'Correcta: coma tras «Como señala Castell», minúscula porque la frase continúa y punto fuera de las comillas.' },
            { sentence: 'Robles aseguró: «Empezaremos en marzo.»', ok: false, options: ['Robles aseguró que: «empezaremos en marzo».', 'Robles aseguró: «Empezaremos en marzo».', 'Robles aseguró, «Empezaremos en marzo».'], answer: 1, why: 'El punto va después de las comillas de cierre; la cita completa va tras dos puntos.' },
            { sentence: 'Una vecina preguntó que cuándo empezarían las obras.', ok: false, options: ['Una vecina preguntó cuándo empezarían las obras.', 'Una vecina preguntó si cuándo empezarían las obras.', 'Una vecina preguntó que empezarían las obras.'], answer: 0, why: '«Preguntó que cuándo» es oral; por escrito, el interrogativo va directamente tras el verbo.' },
            { sentence: 'Robles pidió a los vecinos que tenían paciencia con las obras.', ok: false, options: ['Robles pidió a los vecinos si tuvieran paciencia con las obras.', 'Robles pidió a los vecinos que tuvieran paciencia con las obras.', 'Robles pidió a los vecinos que tendrían paciencia con las obras.'], answer: 1, why: 'Petición: «pedir que» + subjuntivo.' },
            { sentence: 'Gil dijo que «estamos preocupados por las ventas».', ok: false, options: ['Gil dijo que «estábamos preocupados por las ventas».', 'Gil dijo: «estamos preocupados por las ventas.»', 'Gil dijo: «Estamos preocupados por las ventas».'], answer: 2, why: 'Tras «que», la 1.ª persona del original mezcla las voces. Cita completa: dos puntos, mayúscula, punto fuera. (También: «Gil dijo que estaban preocupados…»).' },
            { sentence: 'Castell recordó: «Un vecino me dijo: “Aquí ya no se puede vivir”».', ok: true, why: 'Correcta: cita dentro de cita con inglesas dentro de angulares, y el punto al final, fuera.' },
            { sentence: 'El cartel decía: «Peatonalisar [sic] es vivir».', ok: true, why: 'Correcta: [sic] justo detrás de la palabra errónea indica que el error es del original.' },
          ] },
        ] },
        { title: 'Mensajes con Irene · Texts with Irene', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'chat-fill', title: 'Mateo escribe a Irene · Mateo texts Irene', lines: [
            { who: 'Mateo', text: 'Irene, me acaba de llamar el gabinete de Robles. Dicen que la calle Mayor ___ cerrada desde el 3 de marzo.', options: ['estuviera', 'esté', 'estará'], answer: 2, why: 'Verbo introductor en presente («dicen que»): el futuro no cambia.' },
            { who: 'Irene', text: '¿Te han pedido algo?' },
            { who: 'Mateo', text: 'Sí, me han pedido que ___ la fecha en la crónica.', options: ['corrijo', 'corregir', 'corrija'], answer: 2, why: 'Petición con «pedir que» + subjuntivo; con el pretérito perfecto, presente de subjuntivo.' },
            { who: 'Irene', text: 'Vale. ¿Les preguntaste ___ los taxis?', options: ['que pasará con', 'qué pasará con', 'si qué pasará con'], answer: 1, why: 'Pregunta con interrogativo: «qué», con tilde, directamente tras el verbo.' },
            { who: 'Mateo', text: 'Sí. Me dijeron que los taxis ___ entrar, pero solo de noche.', options: ['pudieron', 'podrán', 'puedan'], answer: 1, why: 'Información (indicativo) aún vigente: el futuro se mantiene. «Podrían» también sería correcta.' },
            { who: 'Irene', text: 'Perfecto. Abre con la cita fuerte: En palabras de la concejala, ___', options: ['“la peatonalización no tiene vuelta atrás.”', '«la peatonalización no tiene vuelta atrás.»', '«la peatonalización no tiene vuelta atrás».'], answer: 2, why: 'El punto va después de las comillas de cierre, sean angulares o inglesas.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['La', 'concejala', 'pidió', 'a', 'los', 'comerciantes', 'que', 'tuvieran', 'paciencia.'], accept: ['La concejala pidió a los comerciantes que tuvieran paciencia.'], en: 'The councillor asked the shopkeepers to be patient.' },
            { tiles: ['Un', 'vecino', 'quiso', 'saber', 'cuándo', 'empezarían', 'las', 'obras.'], accept: ['Un vecino quiso saber cuándo empezarían las obras.'], en: 'A resident wanted to know when the works would start.' },
            { tiles: ['La', 'autora', 'sostiene', 'que', 'la', 'medida', 'sería', 'eficaz.'], accept: ['La autora sostiene que la medida sería eficaz.'], en: 'The author argues that the measure would be effective.' },
          ] },
        ] },
        { title: 'De la transcripción al resumen · From transcript to summary', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada fragmento de la grabación como si fueras quien habla; tu alumno lo escribe en estilo indirecto para la crónica del día siguiente y lo lee en voz alta.', self: 'Lee cada fragmento de la grabación y escríbelo en estilo indirecto para la crónica del día siguiente. (Turn each line of the transcript into reported speech for the next day’s report.)' } },
          { kind: 'rewrite', title: 'La grabación de la sesión · The meeting recording', items: [
            { prompt: 'Robles: «Las obras empezarán en marzo por la calle Mayor».', instruction: 'Escríbelo en estilo indirecto: «Robles anunció que…».', accept: ['Robles anunció que las obras empezarían en marzo por la calle Mayor', 'Robles anunció que las obras empezarán en marzo por la calle Mayor'] },
            { prompt: 'Un vecino: «¿Se podrá aparcar en el centro los domingos?».', instruction: 'Transmite la pregunta: «Un vecino preguntó si…».', accept: ['Un vecino preguntó si se podría aparcar en el centro los domingos', 'Un vecino preguntó si se podrá aparcar en el centro los domingos', 'Un vecino preguntó si podría aparcarse en el centro los domingos'] },
            { prompt: 'Robles, a los técnicos: «Revisen todos los accesos antes de marzo».', instruction: 'Transmite la orden: «Robles pidió a los técnicos que…».', accept: ['Robles pidió a los técnicos que revisaran todos los accesos antes de marzo', 'Robles pidió a los técnicos que revisasen todos los accesos antes de marzo', 'Robles pidió a los técnicos que revisen todos los accesos antes de marzo'] },
            { prompt: 'Gil (diez minutos): «… No vamos a oponernos al plan, que quede claro. Pero si nos quitan el aparcamiento, perderemos clientes, y eso es lo que nos preocupa…».', instruction: 'Resúmelo en una frase: «Gil descartó oponerse al plan, pero advirtió del riesgo de…».', accept: ['Gil descartó oponerse al plan, pero advirtió del riesgo de perder clientes', 'Gil descartó oponerse al plan, pero advirtió del riesgo de perder clientela', 'Gil descartó oponerse al plan, pero advirtió del riesgo de una pérdida de clientes', 'Gil descartó oponerse al plan, pero advirtió del riesgo de la pérdida de clientes'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno resume en tres líneas una conversación real de esta semana (en el trabajo, con la familia) con un verbo de resumen, una pregunta y una petición en estilo indirecto.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El boletín de la radio', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Informativo local · Local news bulletin', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada verbo introductor (anunció, aseguró, quiso saber, pidió…) y el tiempo que va detrás. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada verbo introductor y el tiempo que lo sigue. (Note each reporting verb and the tense after it.)' } },
          { kind: 'listen', title: 'Radio Ciudad · Informativo de la mañana', channel: 'RADIO LOCAL · BOLETÍN DE LAS NUEVE', src: '/audio/grammar-live/494.mp3',
            before: 'Es el boletín local de la radio, la mañana después de la sesión. ¿A quién crees que va a citar la locutora y qué va a contar de cada persona? (Who do you think the newsreader will quote, and what will she report about each person?)',
            gist: { prompt: '¿De qué informa el boletín? · What is the bulletin about?', options: ['De la inauguración de la calle Mayor ya peatonal.', 'De una protesta de los comerciantes contra la concejala.', 'De la presentación del plan de peatonalización y de las reacciones.'], answer: 2, why: 'Cuenta lo que anunció Robles, lo que preguntaron los vecinos y lo que opinan Gil y Castell.', en: 'It reports the presentation of the plan and how residents, shopkeepers and an expert reacted.' },
            details: [
              { prompt: '¿Qué aseguró Robles sobre los servicios de emergencia?', options: ['Que solo podrán entrar de noche.', 'Que tendrán acceso las veinticuatro horas.', 'Que todavía no lo saben.'], answer: 1, why: '«Robles aseguró que los servicios de emergencia tendrán acceso las veinticuatro horas».', en: 'What did Robles say about the emergency services?' },
              { prompt: '¿Qué se sabe del coste de la obra?', options: ['Que costará dos millones.', 'Que lo pagarán los comerciantes.', 'Que el ayuntamiento aún no lo ha hecho público.'], answer: 2, why: '«Una cifra que el ayuntamiento todavía no ha hecho pública».', en: 'What is known about the cost of the works?' },
              { prompt: '¿Cuál es la postura de Ramón Gil?', options: ['Apoya el plan sin condiciones.', 'No se opone al plan, pero teme perder clientes.', 'Se opone totalmente al plan.'], answer: 1, why: '«Descartó una oposición frontal al plan, pero advirtió del riesgo de perder clientes».', en: 'What is Ramón Gil’s position?' },
              { prompt: 'Según Castell, ¿con qué condición sería eficaz la medida?', options: ['Si se refuerza el transporte público.', 'Si se aplica solo los domingos.', 'Si se amplía el aparcamiento.'], answer: 0, why: '«Sería eficaz solo con un refuerzo del transporte público».', en: 'According to Castell, under what condition would the measure work?' },
            ],
            transcript: 'Buenos días. Seguimos con la información local. La concejala de Movilidad, Elena Robles, [[anunció ayer que la peatonalización del centro histórico empezará en marzo|teal]] por la calle Mayor. [[En palabras de la concejala, el plan «no tiene vuelta atrás»|blue]]. Durante la sesión informativa, varios vecinos [[preguntaron si los taxis y las ambulancias podrían seguir entrando|orange]], y Robles [[aseguró que los servicios de emergencia tendrán acceso|teal]] las veinticuatro horas. Otros [[quisieron saber cuánto costará la obra|orange]], una cifra que el ayuntamiento todavía no ha hecho pública. El presidente de la asociación de comerciantes, Ramón Gil, [[descartó una oposición frontal al plan|violet]], pero [[advirtió del riesgo de perder clientes|violet]] si desaparece el aparcamiento. Robles [[les pidió que dieran seis meses de margen|orange]] antes de juzgar los resultados. Por su parte, la urbanista Nuria Castell, autora de un informe para la universidad, [[sostiene que la medida sería eficaz|violet]] solo con un refuerzo del transporte público: según sus cálculos, el tráfico del centro [[se reduciría en un cuarenta por ciento|violet]]. Les seguiremos informando.',
            reply: { teacher: 'Tú eres Irene y preguntas qué dijo cada persona («¿Qué preguntaron los vecinos?», «¿Qué pidió Robles?»). Tu alumno responde en estilo indirecto, con un verbo de resumen distinto en cada respuesta.', self: 'Resume el boletín en voz alta en cuatro frases, una por persona o grupo, con un verbo introductor distinto en cada una. (Summarise the bulletin aloud: one sentence per person, a different reporting verb each time.)' } },
          { kind: 'tip', icon: '🔊', title: 'Citar en la radio · Quoting on air', text: 'En la radio no se ven las comillas: la locutora las anuncia con «**en palabras de la concejala**». Fíjate también en los tiempos: «anunció que… **empezará**» y «aseguró que… **tendrán**» mantienen el futuro porque esos hechos siguen por venir y la emisora los da por firmes; en cambio, «les pidió que **dieran**» usa el imperfecto de subjuntivo de una petición.', en: 'On air you can’t see quotation marks, so the newsreader signals them with “in the councillor’s words”. Notice the tenses too: “announced that it will start” and “assured that they will have access” keep the future because those events are still ahead and the station presents them as firm, while the request takes the past subjunctive.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Contar lo que otros dijeron', coach: 'Transmite con precisión y elige tu distancia. Report precisely and choose your distance.',
      steps: [
        { title: 'Reuniones, charlas y rumores · Meetings, talks and rumours', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde transmitiendo lo que dijeron otras personas. Si repite «dijo que… dijo que…», tú le propones un verbo de resumen y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta. En cada respuesta usa al menos un verbo introductor distinto de «decir». (Use at least one reporting verb other than “decir” in each answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta una reunión reciente (de trabajo, de vecinos, del colegio): quién dijo qué, qué se preguntó y qué se pidió. · Report a recent meeting.', followUps: ['¿Alguien pidió algo que te pareció exagerado?', '¿Qué pregunta quedó sin respuesta?'], phrases: ['[[Mi jefa anunció que|teal]]…', '[[Alguien quiso saber si|orange]]…', '[[Nos pidieron que|orange]] + subjuntivo'], hint: 'Afirmaciones con «que», preguntas con «si» o con interrogativo, peticiones con subjuntivo.', example: 'El lunes tuvimos reunión de equipo. Mi jefa anunció que cambiaríamos de programa de facturación en enero. Un compañero quiso saber si habría formación y ella aseguró que sí, dos sesiones. Al final nos pidió que probáramos la versión nueva antes del viernes.', next: 'Ahora, resumir.' },
            { q: 'Resume una charla, un pódcast o una entrevista que te haya interesado. · Summarise a talk or podcast.', followUps: ['¿Con qué idea no estás de acuerdo?', '¿Qué cita recuerdas casi literalmente?'], phrases: ['[[La autora sostiene que|violet]]…', '[[defendió / descartó|violet]] + sustantivo', '[[En palabras de…|blue]], «…»'], hint: 'Un verbo que interpreta y un sustantivo que condensa; una cita literal solo si las palabras importan.', example: 'Escuché un pódcast sobre el sueño. La invitada, una neuróloga, sostiene que dormimos peor por las pantallas, no por el estrés. Descartó la eficacia de las pastillas a largo plazo y defendió la importancia de los horarios fijos. En sus palabras, «el cuerpo necesita rutina más que silencio».' },
            { q: 'Alguien te cuenta un rumor sobre tu empresa o tu barrio. Transmíteselo a otra persona sin hacerlo tuyo. · Pass on a rumour without endorsing it.', followUps: ['¿Te lo crees?', '¿Cómo podrías confirmarlo?'], phrases: ['[[Un vecino asegura que|violet]]…', '[[habría…|violet]] / [[sería…|violet]]', 'No lo doy por seguro, pero…'], hint: 'Atribuye la información a su fuente y usa el condicional para no comprometerte.', example: 'Un vecino asegura que van a cerrar la piscina municipal. Al parecer, el ayuntamiento habría encontrado problemas en la estructura y la obra sería larga. Yo no lo doy por seguro: prefiero esperar a que lo publiquen.', next: 'Ahora, el tiempo justo.' },
            { q: 'Esta mañana alguien te dio un dato (una hora, una fecha, un precio). Cuéntalo hoy y otra vez dentro de un mes. · Report the same information today and in a month.', followUps: ['¿Qué cambia si el dato ya no es válido?', '¿Cuál de las dos versiones te compromete más?'], phrases: ['[[Me dijo que es|teal]]…', '[[Me dijo que era|teal]]…', 'Entonces me dijo que…'], hint: 'Hoy y vigente: presente o pasado. Dentro de un mes, si ya no vale: pasado.', example: 'Hoy: «La recepcionista me dijo que la consulta es a las cinco, así que salgo a las cuatro». Dentro de un mes: «Me dijo que la consulta era a las cinco, pero al final la cambiaron a las seis».' },
            { q: '¿Qué frase de alguien de tu familia, de un profesor o de un libro citas a menudo? Cítala y explícala. · Quote a saying you often repeat.', followUps: ['¿Cuándo la dijo y por qué?', '¿Estás de acuerdo hoy?'], phrases: ['[[Como decía mi…|blue]], «…»', '[[En palabras de…|blue]], «…»', 'Lo que quería decir es que…'], hint: 'Cita literal con «como decía X» o «en palabras de X» y después explícala con tus palabras.', example: 'Como decía mi abuela, «quien guarda, siempre tiene». Lo decía cuando alguien quería tirar algo, y no se refería solo al dinero: pensaba que casi todo puede volver a servir. Hoy le doy la razón a medias.', next: 'Ahora, en el papel de Robles.' },
            { q: 'Eres Elena Robles. Un periodista te pregunta qué te preguntaron los vecinos y qué les pediste tú. · You are Robles: answer the journalist.', followUps: ['¿Qué le respondió a Ramón Gil?', '¿Cree que el plan tendrá éxito?'], phrases: ['[[Me preguntaron si|orange]]…', '[[Les pedí que|orange]] + subjuntivo', '[[Como señala la profesora Castell|blue]]…'], hint: 'Tú transmites lo que te dijeron: preguntas con «si» o interrogativo, peticiones con subjuntivo.', example: 'Los vecinos me preguntaron sobre todo si las ambulancias podrían entrar, y les aseguré que tendrán acceso siempre. A los comerciantes les pedí que nos dieran seis meses antes de juzgar el plan. Como señala la profesora Castell, el transporte público será la clave.', teacher: 'Tú haces de periodista y vuelves sobre las palabras exactas: «¿Dijo usted que no tiene vuelta atrás?». Tu alumno responde como Robles, citándose o matizando.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú resumes con algún error a propósito («Me pidieron que esperaba», «Me preguntó que si…» en una crónica escrita). Tu alumno lo detecta y lo corrige.', self: 'Ahora graba un audio de un minuto contando una conversación real de ayer en estilo indirecto, y escúchalo buscando cada verbo introductor. (Record a one-minute summary of a real conversation and check your reporting verbs.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una crónica breve', coach: 'Voces claras, comillas en su sitio. Clear voices, quotation marks in place.',
      steps: [
        { title: 'La crónica para «Ciudad Abierta» · The report for “Ciudad Abierta”', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el texto en voz alta y juntos comprueban quién habla en cada frase y si las comillas están bien puntuadas.', self: 'Escribe tu texto y toca «Revisar mi texto». Después repasa cada cita: ¿quién habla?, ¿dónde va el punto? (Check who is speaking in each sentence and where each full stop goes.)' } },
          { kind: 'write', title: 'Crónica de una reunión o una charla · Report on a meeting or talk', situation: 'Eres Mateo (o eres tú, con una reunión, una asamblea o una charla real). Escribes la crónica definitiva para «Ciudad Abierta», que la leerán vecinos que no estuvieron allí. (Write the final news report for readers who weren’t at the meeting.)', task: [
            'Incluye al menos una cita directa o integrada, bien puntuada (punto detrás de las comillas).',
            'Transmite afirmaciones en estilo indirecto con el tiempo adecuado (dato vigente o no).',
            'Transmite una pregunta (preguntó si…, quiso saber…) y una petición (pidió que + subjuntivo).',
            'Resume una intervención larga con un verbo de resumen y un sustantivo (descartó…, advirtió del riesgo de…).',
            'Presenta una opinión ajena con distancia (sostiene que…, sería).',
          ], starters: ['El jueves, en una sesión informativa…', 'En palabras de…, «…».', 'Varios vecinos preguntaron si…', 'Otros quisieron saber…', '… pidió a … que…', '… descartó…, pero advirtió del riesgo de…', 'Por su parte, … sostiene que…'],
            words: ['anunció que', 'aseguró que', 'preguntó si', 'quiso saber', 'pidió que', 'descartó', 'advirtió de', 'sostiene que', 'como señala', 'en palabras de', '[…]', '[sic]'],
            model: 'El jueves, en una sesión informativa abierta a los vecinos, la concejala de Movilidad, Elena Robles, presentó el plan para peatonalizar el centro histórico. [[Robles anunció que las obras empezarán en marzo|teal]] por la calle Mayor y defendió la medida con firmeza: [[«La peatonalización no tiene vuelta atrás»|blue]]. Varios vecinos [[preguntaron si los taxis podrían seguir entrando|orange]] y otros [[quisieron saber cuánto costaría la obra|orange]], una cifra que el ayuntamiento todavía no ha hecho pública. Ramón Gil, presidente de la asociación de comerciantes, [[descartó una oposición frontal al plan|violet]], pero [[advirtió del riesgo de perder clientes|violet]] si desaparece el aparcamiento. Robles [[pidió a los comerciantes que dieran seis meses de margen|orange]] al plan antes de juzgarlo. Por su parte, la urbanista Nuria Castell [[sostiene que la medida sería eficaz|violet]] con un buen transporte público. [[Como señala en su informe|blue]], «la medida reduciría el tráfico […] en un 40 %».',
            minWords: 130,
            checks: [
              { label: 'Una cita entre comillas', pattern: '[«“][^»”]{3,}[»”]', tip: 'Cita unas palabras exactas: «En palabras de X, “…”».' },
              { label: 'Una pregunta transmitida (preguntó si…, quiso saber…)', pattern: '(?<!\\p{L})(?:preguntó|preguntaron|preguntaba|preguntaban)\\s+(?:si|qué|cuándo|cómo|dónde|cuánto|cuánta|cuántos|cuántas|por\\s+qué|quién|quiénes)(?!\\p{L})|(?<!\\p{L})(?:quiso|quisieron)\\s+saber(?!\\p{L})', tip: 'Transmite una pregunta: «Un vecino preguntó si…», «Otros quisieron saber cuándo…».' },
              { label: 'Una petición u orden transmitida', pattern: '(?<!\\p{L})(?:pidió|pidieron|rogó|rogaron|ordenó|ordenaron|exigió|exigieron|instó|instaron)(?!\\p{L})', tip: 'Transmite una petición: «Robles pidió a los comerciantes que dieran…».' },
            ],
            warnings: [
              { pattern: '\\.\\s*[»”]', why: 'En español el punto va **después** de las comillas de cierre: «…»**.**' },
              { pattern: '(?<!\\p{L})(?:preguntó|preguntaron)\\s+que\\s+(?:si|qué|cuándo|cómo|dónde|cuánto|por\\s+qué)(?!\\p{L})', why: 'En un texto escrito cuidado, sin «que»: «preguntó **si**…», «preguntó **cuándo**…».' },
              { pattern: '(?<!\\p{L})que\\s*:\\s*[«“]', why: '«Que» y los dos puntos no se combinan: o «afirmó que…» o «afirmó: «…»».' },
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
            { tone: 'blue', label: 'CITA DIRECTA E INTEGRADA', formula: 'X afirmó: «…». · Como señala X, «…». · fragmento que encaja', example: 'En palabras de Robles, «la peatonalización no tiene vuelta atrás».', caption: 'punto fuera; […] para cortar; [sic] para el error ajeno', en: 'Exact words in quotation marks; the fragment must fit your sentence; the full stop goes outside; […] marks your cuts and [sic] someone else’s error' },
            { tone: 'teal', label: 'AFIRMACIONES Y TIEMPOS', formula: 'sostiene que + sin cambio · dijo que + es / era', example: 'Dijo que la reunión es mañana / era mañana.', caption: 'vigente y asumido → presente; perspectiva del pasado → pasado', en: 'A present reporting verb keeps the tenses; after a past one, keep the present if you vouch that it still holds' },
            { tone: 'orange', label: 'PREGUNTAS Y PETICIONES', formula: 'preguntó si · quiso saber cuándo · pidió que + subjuntivo', example: 'Quiso saber cuándo empezarían. Pidió que tuvieran paciencia.', caption: '«preguntó que si»: oral; por escrito, «preguntó si»', en: 'Yes/no questions with “si”, others with the question word; requests and orders with the subjunctive or, with ordenar or prohibir, the infinitive' },
            { tone: 'violet', label: 'RESUMEN Y DISTANCIA', formula: 'descartó / advirtió de + sustantivo · sostiene que… sería', example: 'Gil advirtió del riesgo de perder clientes. Castell sostiene que sería eficaz.', caption: '«demuestra» te compromete; «sostiene», no', en: 'Summarise with a verb that names the speech act and a noun; keep your distance with sostiene and the conditional' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de citar, pregúntate **quién habla** en cada palabra de tu frase. Si son sus palabras exactas, entre comillas y con el punto fuera; si es tu voz, estilo indirecto, con el tiempo que corresponde a lo que tú afirmas hoy. Para resumir, un verbo que interprete; para no comprometerte, «sostiene» y el condicional.', en: 'Before quoting, ask who is speaking in every word of your sentence. Their exact words go in quotation marks with the full stop outside; your voice uses reported speech, with the tense that matches what you are claiming today. To summarise, choose a verb that interprets; to keep your distance, use “sostiene” and the conditional.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '¿Qué frase está bien puntuada?', options: ['El informe concluye: «El plan es viable.»', 'El informe concluye que: «El plan es viable».', 'El informe concluye: «El plan es viable».'], answer: 2, why: 'Dos puntos, mayúscula y punto después de las comillas.', en: 'Which sentence is correctly punctuated?' },
            { context: '«¿Cuándo se abrirá la calle?»', prompt: 'Me preguntó ___ la calle.', options: ['cuándo se abriría', 'si cuándo se abriría', 'que cuándo se abra'], answer: 0, why: 'Pregunta con interrogativo: «cuándo» directamente tras el verbo; futuro → condicional.', en: 'She asked me when the street would open.' },
            { context: 'El guardia: «No aparquen aquí».', prompt: 'El guardia nos pidió que no ___ allí.', options: ['aparcar', 'aparcáramos', 'aparcábamos'], answer: 1, why: 'Petición: «pedir que» + imperfecto de subjuntivo.', en: 'The officer asked us not to park there.' },
            { prompt: 'La autora sostiene que la reforma ___ eficaz si se aplicara en todo el país.', options: ['fue', 'haya sido', 'sería'], answer: 2, why: 'Hipótesis sobre una medida que no existe: condicional, como pide «si se aplicara».', en: 'The author argues that the reform would be effective if applied nationwide.' },
            { prompt: '¿Cómo indicas que has quitado palabras de una cita?', options: ['«El plan […] es viable».', '«El plan... es viable».', '«El plan (es) viable».'], answer: 0, why: 'Los puntos suspensivos entre corchetes marcan que el corte es tuyo.', en: 'How do you show that you have cut words from a quote?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un seminario. Now, a university seminar.', blocks: [
          { kind: 'lead', text: 'Paula Rentería prepara la reseña de un ensayo sobre ciudades sin coches para un seminario universitario. Tiene sus notas en estilo directo; pásalas al registro del texto académico.', en: 'Paula Rentería is writing a review of an essay on car-free cities for a university seminar. Her notes are in direct speech; turn them into the register of an academic text.' },
          { kind: 'rewrite', title: 'Las notas de Paula · Paula’s notes', items: [
            { prompt: 'El autor escribe: «Las ciudades sin coches son más saludables».', instruction: 'Preséntalo como tesis del autor, sin hacerla tuya: «El autor sostiene que…».', accept: ['El autor sostiene que las ciudades sin coches son más saludables', 'El autor sostiene que las ciudades sin coches serían más saludables'] },
            { prompt: 'Una estudiante preguntó en el seminario: «¿Funcionaría en una ciudad con mucha pendiente?».', instruction: 'Transmite la pregunta: «Una estudiante quiso saber si…».', accept: ['Una estudiante quiso saber si funcionaría en una ciudad con mucha pendiente'] },
            { prompt: 'La profesora, a los alumnos: «Lean el capítulo tres antes del jueves».', instruction: 'Transmite la petición: «La profesora pidió a los alumnos que…».', accept: ['La profesora pidió a los alumnos que leyeran el capítulo tres antes del jueves', 'La profesora pidió a los alumnos que leyesen el capítulo tres antes del jueves', 'La profesora pidió a los alumnos que lean el capítulo tres antes del jueves'] },
          ] },
        ] },
        { title: 'Ampliación: el modo cambia el mensaje · Extension: mood changes the message', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Algunos verbos introductores transmiten **información** con indicativo y una **petición u orden** con subjuntivo: «Dijo que **esperábamos**» (informó) / «Dijo que **esperáramos**» (lo ordenó); «Le advirtió que **había** obras» (aviso) / «Le advirtió que no **llegara** tarde» (orden); «Insistió en que la medida **era** eficaz» (afirmación) / «Insistió en que se **aplicara** ya» (exigencia). Además, tras un verbo en pasado, una petición que **sigue pendiente** admite presente de subjuntivo: «Robles pidió ayer que los vecinos **respeten** los nuevos horarios». Es frecuente en la prensa; «respetaran» también es correcto.', en: 'For strong students or spare time. Some reporting verbs pass on information with the indicative but a request or order with the subjunctive: “dijo que esperábamos” (he told us we were waiting) vs “dijo que esperáramos” (he told us to wait). The same goes for advertir and insistir en. Also, after a past verb, a request that is still pending can take the present subjunctive, common in the press; the past subjunctive is also correct.' },
          { kind: 'choice', title: 'Registro y matices · Register and nuance', items: [
            { prompt: '¿Qué frase transmite una orden?', options: ['El conserje dijo que esperáramos fuera.', 'El conserje dijo si esperábamos fuera.', 'El conserje dijo que esperábamos fuera.'], answer: 0, why: '«Decir que» + subjuntivo transmite una orden; con indicativo, una información.', en: 'Which sentence reports an order?' },
            { prompt: '«Le advirtió que no llegara tarde». ¿Qué hizo?', options: ['Le pidió, casi le ordenó, que fuera puntual.', 'Le informó de un retraso.', 'Le preguntó si llegaría tarde.'], answer: 0, why: '«Advertir que» + subjuntivo funciona como una petición o una orden.', en: 'What did she do?' },
            { prompt: '¿Qué frase expresa una exigencia?', options: ['Gil insistió en que el plan era precipitado.', 'Gil insistió en que se aplicara una moratoria.', 'Gil insistió en que las ventas habían bajado.'], answer: 1, why: '«Insistir en que» + subjuntivo = exigir; con indicativo, afirmar con insistencia.', en: 'Which sentence expresses a demand?' },
            { prompt: '«Robles pidió ayer que los vecinos respeten los nuevos horarios». ¿Es correcta?', options: ['No: debería ser «respetan».', 'Sí: la petición sigue pendiente; también vale «respetaran».', 'No: tras «pidió» solo vale el imperfecto de subjuntivo.'], answer: 1, why: 'Con una petición aún vigente, el presente de subjuntivo es posible y frecuente en la prensa.', en: 'Is this sentence correct?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno busca una noticia breve en un periódico, subraya cada verbo introductor y explica por qué el periodista eligió ese tiempo y ese modo.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 195 · Concordancia especial y sujetos pospuestos', text: 'Ya integras citas, transmites afirmaciones, preguntas y peticiones, y resumes con distancia. En tus crónicas aparecen frases como «Asistieron a la sesión un centenar de vecinos» o «La mayoría de los comerciantes apoya / apoyan el plan». En la clase 195 estudias la concordancia en esos casos difíciles: sujetos detrás del verbo, colectivos y cuantificadores.', en: 'You can now integrate quotes, report statements, questions and requests, and summarise while keeping your distance. Your reports already contain sentences like “About a hundred residents attended” or “Most shopkeepers support the plan”. Class 195 covers agreement in those tricky cases: subjects after the verb, collective nouns and quantifiers.', href: '/gramatica/concordancia-especial-y-sujetos-pospuestos', label: 'Ir a la clase 195' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué no se puede escribir “Robles dijo que «empezaremos en marzo»”?». Respuesta esperada: porque tras «que» habla el periodista y la 1.ª persona es de Robles. Tarea: la crónica de Escribir sobre una reunión o una charla real.' },
        ] },
      ],
    },
  ],
};
