import type { LiveLesson } from '../types';

/**
 * Lesson 483 · C1 · Pasiva y estructuras impersonales con foco discursivo (course unit G183).
 * Builds on G148 (lesson 232: ser + participio, se pasivo, se impersonal in notices) and
 * G149 (lesson 449: choosing among active, ser passive, se pasivo and se impersonal by
 * text type). Formation is NOT re-taught. C1 step: choosing the construction by
 * information structure and register. Content: tema (known) first, rema (new) last; the
 * voice is chosen so that the topic stays the subject across sentences («El pabellón…
 * fue diseñado por… Se espera que…»); «por + agente» only when the agent is news;
 * overuse of the ser passive as an English calque in news and notices (fue anunciado
 * por…, es requerido, es esperado que); the full range of agentless resources: se, 3rd
 * person plural (Dicen que…, Llaman a la puerta: excludes the speaker, may be one person),
 * uno/una (includes the speaker; the only option with pronominal verbs: uno se acostumbra),
 * generic tú (te piden…), la gente, hay que / se debe / es necesario + infinitive,
 * nominalisation (la apertura de…), estar + participio (result, not event); and the
 * ambiguity of se with people (se presentaron, se trasladaron, se mataron: reflexive,
 * reciprocal or passive?) solved with se + a or ser + participio. Ampliación: academic
 * register (se analiza / analizamos / este estudio analiza) and «está siendo + participio».
 * Word order without changing voice is left for G184 (lesson 484).
 * Scene: the communications office of the fictional Hospital General de Valle Alto
 * (Mexico). Head of communications Lorena Navarro edits the press release of Rodrigo
 * Salas, a new press officer who used to translate English press releases; researcher
 * Dra. Beatriz Ríos joins in. Escuchar: Arturo Medina's local radio bulletin
 * (es-MX-JorgeNeural). Escribir: a press release on a new rehabilitation unit.
 */
export const lesson: LiveLesson = {
  id: 483,
  level: 'C1',
  title: 'Pasiva y estructuras impersonales con foco discursivo',
  subtitle: 'Elegir activa, pasiva, se u otra impersonal según qué es tema y qué es novedad, y según el registro del texto.',
  legend: [
    { tone: 'blue', label: 'ACTIVA · el sujeto hace la acción: la dirección anunció, abrirá (the subject is the doer)' },
    { tone: 'teal', label: 'SER / ESTAR + PARTICIPIO · fue diseñado por…, está terminada (passive event / resulting state)' },
    { tone: 'orange', label: 'SE · se espera que, se trasladó a los pacientes (passive or impersonal se)' },
    { tone: 'violet', label: 'OTRAS IMPERSONALES · dicen que, uno, tú genérico, hay que, la apertura de… (other ways to leave out the doer)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿De qué habla tu texto?', coach: 'Primero el tema, después la novedad. Topic first, news last.',
      steps: [
        { title: 'Un comunicado que suena a traducción · A press release that reads like a translation', blocks: [
          { kind: 'lead', text: 'Valle Alto, México. En la oficina de comunicación del **Hospital General**, la jefa, **Lorena Navarro**, revisa el primer comunicado de **Rodrigo Salas**, que acaba de llegar de una agencia donde traducía notas de prensa del inglés. La noticia es buena: el lunes abre el nuevo pabellón de urgencias. Pero el texto de Rodrigo está lleno de pasivas con «ser» y salta de un sujeto a otro. Las formas ya las conoces; hoy aprendes a **elegir** entre ellas.', en: 'Valle Alto, Mexico. In the hospital’s communications office, the head of department is editing the first press release by a new press officer who used to translate English press releases. The news is good, but his text is full of ser passives and keeps jumping from one subject to another. You already know the forms; today is about choosing between them.' },
          { kind: 'guide', text: { teacher: 'Tú lees el borrador de Rodrigo en voz alta; tu alumno lee la versión de Lorena. Después tu alumno dice cuál se entiende mejor y por qué.', self: 'Lee las dos versiones en voz alta. ¿Cuál se entiende a la primera? ¿Por qué? (Which one is clearer straight away?)' } },
          { kind: 'compare', title: 'El mismo párrafo, dos versiones · The same paragraph, two versions', columns: [
            { tone: 'teal', label: 'BORRADOR DE RODRIGO', sentence: '[[Fue anunciado|teal]] por la dirección que el nuevo pabellón [[será abierto|teal]] el lunes. Cuarenta camas [[fueron instaladas|teal]] por técnicos y [[es esperado|teal]] que las esperas [[sean reducidas|teal]].', idea: 'Cinco pasivas seguidas; un agente que no informa («por técnicos»); «es esperado que» es un calco.', en: 'Five passives in a row, an agent that adds nothing and a calque of “it is expected that”. It is understandable, but it reads like a translation.' },
            { tone: 'blue', label: 'VERSIÓN DE LORENA', sentence: 'El nuevo pabellón de urgencias [[abrirá|blue]] sus puertas el lunes. [[Contará|blue]] con cuarenta camas y [[se espera que|orange]] reduzca a la mitad los tiempos de espera.', idea: 'El pabellón es el tema y sigue siendo el sujeto; la novedad va al final.', en: 'The new wing is the topic and stays the subject; each sentence ends with the new information.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué hace mejor la versión de Lorena?', options: ['Mantiene el pabellón como sujeto y deja lo nuevo al final.', 'Usa solo verbos en presente.', 'Elimina toda la información sobre las camas.'], answer: 0, why: 'El lector sabe de qué se habla (el pabellón) y recibe la información nueva al final de cada frase.', en: 'Lorena keeps one topic as the subject and puts the news at the end of each sentence.' },
            { prompt: '¿Por qué sobra «por técnicos»?', options: ['Porque es evidente que las camas las instalan técnicos: no es información.', 'Porque con ser no se puede poner agente.', 'Porque «técnicos» debería ir en singular.'], answer: 0, why: 'El agente con «por» solo se menciona cuando aporta algo que el lector no da por supuesto.', en: 'A por-phrase agent is only worth including when it tells the reader something new.' },
          ] },
        ] },
        { title: 'Tema y rema · Known information and new information', mascot: '/brand/mascot/studying.webp', coach: 'Lo conocido delante, lo nuevo al final. Known first, new last.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TEMA → REMA', question: '¿Qué sabe ya el lector y qué le vas a contar de nuevo?', en: 'In a neutral Spanish sentence, what the reader already knows (the topic, tema) comes first and the new information (rema) comes last, where it receives the main stress. Choosing between active and passive is often a way of putting the topic in subject position, so that the text keeps talking about the same thing.', formula: ['tema (ya conocido) → rema (información nueva)', 'se elige la voz para que el tema sea el sujeto'],
            meaning: 'Una frase neutra empieza por lo que el lector ya sabe y termina con lo nuevo. Si tu texto habla del **pabellón**, el pabellón debe ser el sujeto: con la **activa** si el pabellón «hace» algo (abre, cuenta con), con la **pasiva con ser** si recibe la acción y quieres decir quién la hizo (**fue diseñado por**…), con **se** si el agente no importa (**se espera que**…).',
            examples: [
              { es: '¿Quién diseñó el pabellón? → El pabellón [[fue diseñado por|teal]] un equipo de arquitectas de la universidad.', en: 'The wing is already known; the designers are the news, so they go last, after por.' },
              { es: '¿Qué diseñó ese equipo de arquitectas? → [[Diseñaron|blue]] el nuevo pabellón de urgencias.', en: 'Now the architects are the topic: active voice, with the building as the new information.' },
              { es: 'El pabellón [[abrirá|blue]] el lunes; [[fue financiado|teal]] por el gobierno estatal y [[se espera que|orange]] atienda a doscientas personas al día.', en: 'Three verbs, three different constructions, one constant topic: the wing.' },
            ],
            note: 'El español también puede cambiar el orden sin cambiar la voz («Lo diseñó un equipo de la universidad»). Ese recurso es el tema de la clase 184.' },
          { kind: 'compare', title: '¿Salta o se mantiene? · Jumping topic or steady topic', columns: [
            { tone: 'neutral', label: 'EL TEMA SALTA', sentence: 'El pabellón abrirá el lunes. Un equipo de la universidad diseñó el edificio. El gobierno estatal pagó las obras.', idea: 'Tres sujetos distintos: el lector tiene que reorganizar la información en cada frase.', en: 'Three different subjects in three sentences: grammatical, but the reader has to reorganise the information each time.' },
            { tone: 'teal', label: 'EL TEMA SE MANTIENE', sentence: 'El pabellón abrirá el lunes. [[Fue diseñado|teal]] por un equipo de la universidad y [[financiado|teal]] por el gobierno estatal.', idea: 'El pabellón sigue siendo el sujeto (y no hace falta repetirlo); los agentes son la novedad.', en: 'The wing stays the subject and does not even need repeating; the agents are the new information, so the passive with por is justified.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'El texto anterior habla de un tomógrafo nuevo. (The previous sentence is about a new CT scanner.)', prompt: '¿Qué frase continúa mejor?', options: ['El tomógrafo fue donado por una fundación local.', 'Fue una fundación donando el tomógrafo.', 'Una fundación local donó el tomógrafo.'], answer: 0, why: 'El tomógrafo ya es el tema: la pasiva lo mantiene como sujeto y deja a la fundación, la novedad, al final.', en: 'The scanner is already the topic, so the passive keeps it as subject and leaves the donor, the news, at the end.' },
            { context: 'El texto anterior habla de la Fundación Alba. (The previous sentence is about the Alba Foundation.)', prompt: '¿Qué frase continúa mejor?', options: ['Al hospital fue donado un tomógrafo por ella.', 'El año pasado donó un tomógrafo al hospital.', 'Un tomógrafo fue donado por ella al hospital.'], answer: 1, why: 'Si el tema es la fundación, la activa la mantiene como sujeto (aquí, implícito). La pasiva pondría el tema al final.', en: 'Now the foundation is the topic, so the active keeps it as the (implicit) subject.' },
          ] },
        ] },
        { title: '«Por + agente» y el calco del inglés · The agent and the English calque', mascot: '/brand/mascot/speaking.webp', coach: '¿El agente es noticia? Is the doer news?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'POR + AGENTE: SOLO SI INFORMA', question: '¿El lector necesita saber quién lo hizo, o ya lo supone?', en: 'Most Spanish passives have no agent. Include a por-phrase only when the doer is new and relevant information; if it is obvious (doctors operate, councils approve budgets), leave it out and use the space for something useful.', formula: ['agente nuevo y relevante → ser + participio + por…', 'agente evidente o irrelevante → sin «por» (ser + participio, se o activa)'],
            meaning: 'La mayoría de las pasivas del español **no llevan agente**. «La operación fue realizada **por cirujanos**» no dice nada que el lector no sepa; «La operación fue realizada **por un robot quirúrgico**» sí. Si el agente es evidente, el espacio se aprovecha para otra información: «La operación **duró cuatro horas** y fue un éxito».',
            examples: [
              { es: 'La sala de pediatría [[fue financiada por|teal]] una colecta de los vecinos.', en: 'Informative agent: nobody would have guessed it.' },
              { es: 'Los primeros pacientes [[fueron atendidos|teal]] en menos de veinte minutos.', en: 'No agent: of course doctors and nurses did it. The time is the news.' },
            ] },
          { kind: 'tip', icon: '🌎', title: 'Pasivas traducidas · Translated passives', text: 'La pasiva con ser es correcta y tiene su sitio: noticias de sucesos («fue detenido»), textos de historia, informes. Pero muchos libros de estilo periodístico advierten contra su **abuso**, frecuente en noticias traducidas del inglés. Señales de alarma: cadenas de «fue + participio»; «**fue anunciado por** la dirección que…» (mejor: **la dirección anunció que**…); «**es requerido**», «**es recomendado**» (mejor: **se requiere**, **hay que**, **se recomienda**); «**es esperado que**» (en español: **se espera que**).', en: 'The ser passive is correct and has its place, but many newspaper style guides warn against overusing it, as often happens in news translated from English. Warning signs: chains of passives, “it was announced by…”, “is required / is recommended”, and “it is expected that”, which Spanish says with se.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nota de prensa: «___ que el hospital contratará a cincuenta enfermeras».', options: ['Fue anunciado por el director', 'Es anunciado', 'El director anunció'], answer: 2, why: 'Con un verbo de lengua y una oración con «que», la activa es lo natural en español; «fue anunciado por… que» es un calco.', en: 'With verbs like anunciar + que-clause, Spanish uses the active; the passive version is a calque.' },
            { prompt: '¿Qué frase tiene un agente que sí informa?', options: ['Los análisis fueron hechos por el laboratorio del hospital.', 'El presupuesto fue aprobado por el consejo de administración.', 'El nuevo protocolo fue redactado por los propios pacientes.'], answer: 2, why: 'Que los pacientes redacten un protocolo es inesperado: eso es noticia. Que el consejo apruebe o el laboratorio analice es lo esperable.', en: 'Patients writing a protocol is unexpected, so the agent is worth mentioning.' },
          ] },
        ] },
        { title: 'Sin agente: el abanico completo · Leaving out the doer: the full range', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Quién queda dentro? Who is included?', blocks: [
          { kind: 'table', title: 'Recursos para no nombrar al agente · Ways of not naming the doer', head: ['Recurso', 'Quién queda incluido', 'Registro', 'Ejemplo'], rows: [
            ['**se** pasivo / impersonal', 'cualquiera, sin precisar', 'todos', '[[Se espera que|orange]] las esperas bajen.'],
            ['**3.ª persona plural**', 'otros; nunca el hablante. Puede ser una sola persona', 'conversación, crónica', '[[Dicen que|violet]] el estacionamiento se queda chico. · [[Llaman|violet]] a la puerta.'],
            ['**uno / una**', 'cualquiera, **incluido yo**', 'conversación, ensayo', '[[Uno|violet]] nunca sabe cuándo va a necesitar urgencias.'],
            ['**tú** genérico', 'cualquiera; implica al oyente', 'conversación', 'Cuando [[vas|violet]] a urgencias, [[te piden|violet]] una identificación.'],
            ['**la gente**', 'los demás en general', 'coloquial', '[[La gente|violet]] está contenta con el pabellón.'],
            ['**hay que / se debe / es necesario** + inf.', 'obligación general', 'de neutro a formal', '[[Hay que|violet]] llegar quince minutos antes.'],
            ['**nominalización**', 'el hecho, sin verbo ni agente', 'administrativo, académico, titulares', '[[La apertura de|violet]] la sala está prevista para marzo.'],
            ['**estar** + participio', 'nadie: es el resultado', 'todos', 'La sala ya [[está terminada|teal]].'],
          ], note: '«Llaman a la puerta» puede ser una sola persona; «dicen que» presenta un rumor sin fuente. «La gente» concuerda en singular: «la gente **está**», no «*están».' },
          { kind: 'tip', icon: '💡', title: '«Uno se acostumbra» · When se is impossible', text: 'Con verbos pronominales (acostumbrarse, cansarse, equivocarse) el se impersonal no funciona: no existe «*se se acostumbra». Para generalizar se usa **uno / una**: «**Uno se acostumbra** a las guardias». Una mujer que habla de sí misma puede decir **una**: «Al final, **una se cansa**».', en: 'With pronominal verbs, impersonal se is impossible, since Spanish cannot stack two se. Uno or una is the way to generalise, and it usually includes the speaker; a woman speaking from her own experience often says una.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Una enfermera habla de su experiencia: «En el turno de noche, ___ se cansa más de lo que cree».', options: ['la gente', 'se', 'una'], answer: 2, why: 'Verbo pronominal (cansarse): no admite se impersonal. «Una» generaliza incluyéndose ella; «la gente» la dejaría fuera.', en: 'A pronominal verb rules out se; una generalises and includes the speaker herself.' },
            { prompt: '«Llaman a la puerta». ¿Cuántas personas llaman?', options: ['Solo el hablante.', 'Pueden ser una o varias: no se sabe ni importa.', 'Necesariamente varias.'], answer: 1, why: 'La 3.ª persona plural impersonal no indica número: oculta al agente y siempre excluye al hablante.', en: 'An impersonal 3rd person plural says nothing about number; it just hides the doer and leaves out the speaker.' },
          ] },
        ] },
        { title: 'Se con personas: ¿quién hizo qué? · Se with people: who did what?', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Lo hicieron ellos o se lo hicieron? Did they do it, or was it done to them?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LA AMBIGÜEDAD DE SE', question: 'Si el sujeto son personas, ¿se entiende pasiva o reflexiva?', en: 'With people as the subject, a plural passive se is easily read as reflexive (“they moved themselves”) or reciprocal (“each other”). That is why careful Spanish uses impersonal se + a, or the ser passive, when people receive the action. In the press, “se mataron” is the classic trap: in everyday speech matarse often means “to die in an accident”.', formula: ['personas + se + verbo plural → lectura reflexiva o recíproca', 'para decir que alguien se lo hizo: se + verbo singular + a… · ser + participio'],
            meaning: 'Con personas, el **se** plural se lee casi siempre como **reflexivo** (a sí mismos) o **recíproco** (unos a otros): «Los candidatos **se presentaron**» = se presentaron ellos. Si quieres decir que alguien los presentó: «**Se presentó a** los candidatos» o «Los candidatos **fueron presentados**». En la prensa, «Dos jóvenes **se mataron** en la carretera» puede leerse como accidente (en el habla, *matarse* = morir en un accidente), como suicidio o como pelea entre ellos: por eso se escribe «**murieron**» o «**fueron asesinados**».',
            examples: [
              { es: 'Los pacientes [[se trasladaron|blue]] solos a la sala de espera.', en: 'Reflexive: they moved themselves.' },
              { es: 'El domingo [[se trasladó a|orange]] los pacientes al nuevo pabellón.', en: 'Impersonal se + a: someone moved them. No ambiguity.' },
              { es: 'Los dos cirujanos [[se felicitaron|blue]] al terminar.', en: 'Reciprocal: they congratulated each other.' },
              { es: 'Los pacientes [[fueron trasladados|teal]] en ambulancia.', en: 'Ser passive: the clearest choice in a news report.' },
            ] },
          { kind: 'decide', title: '¿Cómo lo digo sin ambigüedad? · How do I say it unambiguously?', steps: [
            { q: '¿Los que reciben la acción son personas concretas?', yes: 'next', no: 'Se pasivo sin problema: «Se instalaron cuarenta camas».' },
            { q: '¿Lo hacen ellos mismos (a sí mismos o entre ellos)?', yes: 'Reflexivo o recíproco: «Los residentes **se presentaron** al director».', no: 'next' },
            { q: '¿Quieres un registro formal o necesitas nombrar al agente?', yes: '**Ser + participio** (+ por si informa): «Los pacientes **fueron trasladados** por Protección Civil».', no: '**Se + singular + a**: «**Se trasladó a** los pacientes».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Quieres decir que el hospital evaluó a los aspirantes. ¿Qué frase no es ambigua?', options: ['Se evaluó a los aspirantes durante dos días.', 'Se evaluaron los aspirantes durante dos días.', 'Los aspirantes se evaluaron durante dos días.'], answer: 0, why: 'Con «a» + personas no hay lectura reflexiva: alguien los evaluó. Con «se evaluaron», plural, puede entenderse que se evaluaron ellos mismos.', en: 'Impersonal se + a removes the reflexive reading; the plural versions could mean they assessed themselves.' },
            { prompt: '«Dos ciclistas se mataron en la carretera federal». ¿Por qué es un mal titular?', options: ['Porque «matarse» no existe.', 'Porque falta el verbo «ser».', 'Porque no sabemos si fue un accidente, un suicidio o una pelea.'], answer: 2, why: '«Se mataron» admite varias lecturas; en prensa se prefiere «murieron» (accidente) o una pasiva que diga qué pasó.', en: 'Se mataron is ambiguous; news writing prefers murieron or a passive that states what happened.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Frequent mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Elige con criterio. Choose deliberately.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el problema; tu alumno dice qué falla (calco, agente inútil, ambigüedad, tema perdido) antes de ver la corrección.', self: 'Lee cada frase y di qué falla: ¿calco, agente inútil, ambigüedad o tema perdido? Después mira la corrección.' } },
          { kind: 'mistakes', title: '¿Qué falla? · What goes wrong?', items: [
            { wrong: 'Es esperado que el pabellón reduzca las esperas.', right: 'Se espera que el pabellón reduzca las esperas.', why: 'Calco de «it is expected that». En español la construcción fija es «se espera que» (o «está previsto que»).' },
            { wrong: 'Es requerido presentar una identificación.', right: 'Hay que presentar una identificación. / Se requiere una identificación.', why: 'Calco de «is required». Para una obligación general: hay que, es necesario, se debe, se requiere.' },
            { wrong: 'Los heridos se trasladaron al hospital.', right: 'Se trasladó a los heridos al hospital. / Los heridos fueron trasladados al hospital.', why: 'Con personas, el se plural se entiende como «fueron ellos solos». Se + a o ser + participio eliminan la duda.' },
            { wrong: 'Cuando se se equivoca, se aprende.', right: 'Cuando uno se equivoca, aprende.', why: 'No se pueden juntar dos se. Con verbos pronominales se generaliza con uno / una.' },
            { wrong: 'La gente están preocupados por el estacionamiento.', right: 'La gente está preocupada por el estacionamiento.', why: '«La gente» es un sustantivo singular femenino: verbo y adjetivo concuerdan en singular.' },
            { wrong: 'La operación fue realizada por médicos del hospital.', right: 'La operación duró cuatro horas y fue un éxito.', why: 'El agente es evidente: no informa. Si no aporta nada, se omite y se dice algo útil.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Aviso en la sala de espera: «___ apagar el celular en esta área».', options: ['Es requerido', 'Se ruega', 'Son requeridos'], answer: 1, why: '«Es requerido» es un calco del inglés; en un aviso, «se ruega» (o «hay que»; en México también «favor de») es lo natural.', en: 'Es requerido is an English calque; a Spanish notice says se ruega, hay que or, in Mexico, favor de.' },
            { prompt: '¿Qué frase está bien?', options: ['La gente del barrio están contentos.', 'La gente del barrio está contenta.', 'La gente del barrio se están contentos.'], answer: 1, why: '«La gente» concuerda en singular: está contenta.', en: 'La gente takes singular agreement.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta en tres frases una novedad de su lugar de trabajo o estudio, manteniendo el mismo tema como sujeto, y dice si el agente merece aparecer.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Corregir el comunicado', coach: 'Toca las formas marcadas. Tap the marked forms.',
      steps: [
        { title: 'La revisión · The edit', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lorena y la doctora Ríos; tu alumno es Rodrigo. Después tu alumno toca cada forma marcada y explica por qué Lorena o la doctora la prefieren.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y explica por qué es mejor que la versión de Rodrigo.' } },
          { kind: 'explore', title: 'Media hora antes de enviar', setting: 'Viernes, once de la mañana. Lorena y Rodrigo revisan el comunicado en la pantalla; la doctora Beatriz Ríos, que coordina el traslado de pacientes, entra a la oficina.', lines: [
            { who: 'Lorena', text: 'Rodrigo, el comunicado está completo, pero empieza así: «[[Fue anunciado por la dirección|teal]] que…». Suena a traducción.', en: 'Rodrigo, the press release has everything, but it starts with “It was announced by the management that…”. It sounds translated.' },
            { who: 'Rodrigo', text: 'Es que el modelo que me pasaron estaba en inglés y lo copié casi palabra por palabra.', en: 'The template I was given was in English and I copied it almost word for word.' },
            { who: 'Lorena', text: 'Se nota. Si la noticia es el pabellón, que sea el sujeto desde la primera línea: «El nuevo pabellón de urgencias [[abrirá|blue]] sus puertas el lunes».', en: 'It shows. If the story is the new wing, make it the subject from the first line.' },
            { who: 'Rodrigo', text: '¿Y lo de los arquitectos? Puse «El proyecto fue diseñado por arquitectos».', en: 'And the architects? I wrote “The project was designed by architects”.' },
            { who: 'Lorena', text: '«Por arquitectos» no le dice nada a nadie. Pero que lo hiciera el equipo de la universidad, eso sí es noticia: «[[Fue diseñado por|teal]] un equipo de arquitectas de la Universidad de Valle Alto».', en: '“By architects” tells nobody anything. But the fact that the university team did it is news.' },
            { who: 'Beatriz', text: 'Perdón que interrumpa. ¿Van a contar lo del traslado? Aquí dice «Los pacientes se trasladarán el domingo».', en: 'Sorry to interrupt. Are you going to mention the transfer? It says here that the patients “se trasladarán” on Sunday.' },
            { who: 'Rodrigo', text: 'Sí, ¿qué tiene de malo?', en: 'Yes, what’s wrong with that?' },
            { who: 'Beatriz', text: 'Que parece que se van a cambiar de cama ellos solos. Pon «[[se trasladará a|orange]] los pacientes» o «los pacientes [[serán trasladados|teal]]».', en: 'It sounds as if they’re going to move beds by themselves. Use impersonal se with a, or the ser passive.' },
            { who: 'Lorena', text: 'Tiene razón. Y en el aviso para las familias, nada de «es requerida una identificación»: «[[Hay que|violet]] presentar una identificación oficial».', en: 'She’s right. And in the notice for families, no “is required”: use hay que.' },
            { who: 'Rodrigo', text: '¿Y la sala de pediatría? Todavía [[no está terminada|teal]].', en: 'What about the paediatric ward? It isn’t finished yet.' },
            { who: 'Lorena', text: 'Entonces: «[[La apertura de|violet]] la sala de pediatría está prevista para marzo». Y para cerrar, «[[se espera que|orange]] el pabellón reduzca a la mitad los tiempos de espera».', en: 'Then: “the opening of the paediatric ward is scheduled for March”. And to finish, “the wing is expected to halve waiting times”.' },
            { who: 'Rodrigo', text: 'Ahora entiendo lo que me decían en la agencia: «[[Uno|violet]] traduce tan rápido que no se da cuenta de que el español va por otro lado».', en: 'Now I get what they used to tell me at the agency: you translate so fast that you don’t notice Spanish works differently.' },
          ], notes: {
            'Fue anunciado por la dirección': '**Calco del inglés**: pasiva con ser + agente + «que…». Con verbos de lengua, la activa es lo natural: «La dirección anunció que…».',
            'abrirá': '**Activa con el tema como sujeto**: el pabellón «hace» algo (abre sus puertas). No hace falta agente.',
            'Fue diseñado por': '**Ser + participio + por** justificado: el pabellón sigue siendo el tema y el agente, inesperado, es la novedad al final.',
            'se trasladará a': '**Se impersonal + a**: alguien trasladará a los pacientes. Singular fijo, sin lectura reflexiva.',
            'serán trasladados': '**Ser + participio** con personas: evita la ambigüedad de «se trasladarán» (¿ellos solos?).',
            'Hay que': '**Obligación impersonal** neutra y clara, en lugar del calco «es requerido».',
            'no está terminada': '**Estar + participio**: el resultado (el estado de la sala), no la acción de terminarla.',
            'La apertura de': '**Nominalización**: el hecho sin verbo ni agente, típica de textos administrativos. «Está prevista» concuerda con «la apertura».',
            'se espera que': '**Se impersonal + que**: la forma española de «it is expected that». Pide subjuntivo: reduzca.',
            'Uno': '**Uno genérico**: generaliza incluyendo al hablante; con un verbo pronominal (darse cuenta) es la única opción natural.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Rodrigo escribió tantas pasivas con ser?', options: ['Porque Lorena se lo pidió.', 'Porque copió un modelo en inglés casi palabra por palabra.', 'Porque así lo exige el hospital.'], answer: 1, why: 'Rodrigo: «el modelo que me pasaron estaba en inglés y lo copié casi palabra por palabra».', en: 'Why did Rodrigo write so many ser passives?' },
            { prompt: '¿Qué problema ve la doctora Ríos en «los pacientes se trasladarán»?', options: ['Que el traslado será el lunes, no el domingo.', 'Que parece que los pacientes se van a mover solos.', 'Que el verbo debería ir en singular.'], answer: 1, why: 'Con personas, el se plural se lee como reflexivo: «parece que se van a cambiar de cama ellos solos».', en: 'What problem does the doctor see in the phrase about the transfer?' },
            { prompt: '¿Qué agente decide mantener Lorena?', options: ['El equipo de arquitectas de la universidad.', 'Ninguno: los elimina todos.', 'La dirección del hospital.'], answer: 0, why: 'Es información nueva e inesperada; «por arquitectos», en cambio, no informa.', en: 'Which agent does Lorena keep, and why?' },
          ] },
        ] },
        { title: 'El folleto para las familias · The leaflet for families', mascot: '/brand/mascot/seated.webp', coach: 'Mismo hospital, otro registro. Same hospital, another register.', blocks: [
          { kind: 'chat-fill', title: 'Mensajes entre Rodrigo y la doctora · Messages between Rodrigo and the doctor', lines: [
            { who: 'Rodrigo', text: 'Doctora, en el folleto quiero decir que el personal informará a los familiares en recepción. ¿Pongo «Los familiares ___ en recepción»?', options: ['se informarán por el personal', 'serán informados', 'se informarán'], answer: 1, why: '«Se informarán» se lee como «ellos mismos preguntarán». Si quieres decir que el personal les informa, la pasiva con ser no es ambigua; «se… por el personal» no se usa.' },
            { who: 'Beatriz', text: 'Sí. Y donde dice «A las visitas ___ que usen cubrebocas», ponlo en singular.', options: ['les se pide', 'se les pide', 'se les piden'], answer: 1, why: 'Se impersonal + les (a las visitas): el orden es se les y el verbo va en singular. (Cubrebocas: face mask, in Mexico.)' },
            { who: 'Rodrigo', text: 'Perfecto. ¿Y la sala de espera nueva? ¿Pongo que ya funciona?' },
            { who: 'Beatriz', text: 'Pon que la sala de espera ya ___, con sillas y bebederos.', options: ['está terminada', 'fue terminando', 'es terminada'], answer: 0, why: 'Hablas del estado actual, el resultado: estar + participio.' },
            { who: 'Rodrigo', text: 'Y en el chat de familias, más cercano: «___ que el estacionamiento se queda chico, pero lo van a ampliar».', options: ['Es dicho', 'Se dicen', 'Dicen'], answer: 2, why: 'En un registro cercano, la 3.ª persona plural presenta un comentario sin fuente: «dicen que».' },
            { who: 'Beatriz', text: 'Exacto. Así se entiende a la primera.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno explica qué cambia entre el comunicado de prensa y el chat con las familias (pasiva con ser y nominalización frente a «dicen que» y tú genérico).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Tema, agente, ambigüedad, registro. Topic, doer, ambiguity, register.',
      steps: [
        { title: 'La mejor continuación · The best next sentence', blocks: [
          { kind: 'choice', items: [
            { context: 'Nota de prensa: «El Hospital General estrenó ayer un mastógrafo de última generación». (Press release: the hospital launched a new mammography machine yesterday.)', prompt: 'Elige la frase siguiente:', options: ['La Fundación Alba ha donado esto y permitirá hacer cuarenta estudios al día.', 'Fue donado por la Fundación Alba el equipo, que permitirá cuarenta estudios.', 'El equipo fue donado por la Fundación Alba y permitirá hacer cuarenta estudios al día.'], answer: 2, why: 'El equipo ya es el tema: como sujeto de la pasiva enlaza con la frase anterior, y el donante, la novedad, va detrás de «por».', en: 'The machine is the known topic; the passive keeps it as subject and puts the donor, the news, last.' },
            { context: 'En la cafetería, entre compañeros. (In the cafeteria, between colleagues.)', prompt: '«¿Ya viste? ___ el estacionamiento de visitas».', options: ['Fue cerrado', 'Cerraron', 'Ha sido cerrado por la dirección'], answer: 1, why: 'En la conversación, la 3.ª plural impersonal es lo natural; la pasiva con ser suena a noticia leída.', en: 'In conversation the impersonal 3rd person plural is natural; the ser passive sounds like a news report.' },
            { context: 'Cartel en la puerta de consulta externa. (Sign on the outpatient clinic door.)', prompt: '«Para pasar a consulta ___ presentar el carnet de citas».', options: ['es requerido', 'son requeridos', 'hay que'], answer: 2, why: '«Es requerido» es un calco; para una obligación general, «hay que» (o «es necesario», más formal).', en: 'Hay que expresses a general obligation; es requerido is a calque.' },
            { context: 'Resumen de un artículo científico. (Abstract of a research paper.)', prompt: '«___ de los datos mostró una reducción del 30 % en los tiempos de espera».', options: ['El análisis', 'Uno analizó', 'Analizaron'], answer: 0, why: 'El registro académico prefiere la nominalización como sujeto: condensa el proceso sin nombrar a nadie.', en: 'Academic writing favours a nominalisation as subject: the process without a doer.' },
            { context: 'Una amiga le pregunta a Lorena por su trabajo; Lorena habla de su propia experiencia. (A friend asks Lorena about her job.)', prompt: '«¿Es duro trabajar en un hospital?» — «Al principio sí, pero ___ se acostumbra».', options: ['se', 'la gente', 'una'], answer: 2, why: 'Acostumbrarse es pronominal: no admite se impersonal. «Una» generaliza e incluye a Lorena; «la gente» la dejaría fuera.', en: 'Pronominal verb, and Lorena includes herself: una.' },
          ] },
        ] },
        { title: '¿Lo hicieron ellos o se lo hicieron? · Did they do it, or was it done to them?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué entiendes? · What do you understand?', categories: [
            { id: 'refl', label: 'Lo hacen ellos mismos (reflexivo o recíproco)', tone: 'blue' },
            { id: 'imp', label: 'Alguien se lo hace (se impersonal o pasivo)', tone: 'orange' },
          ], items: [
            { text: 'Se vacunó a todo el personal en una semana.', answer: 'imp', why: 'Se + a + personas: alguien los vacunó.' },
            { text: 'Los dos cirujanos se felicitaron después de la operación.', answer: 'refl', why: 'Recíproco: se felicitaron el uno al otro.' },
            { text: 'Se contrató a cuarenta enfermeras para el pabellón.', answer: 'imp', why: 'Se + a: el hospital las contrató.' },
            { text: 'Las enfermeras del turno de noche se organizaron solas.', answer: 'refl', why: '«Solas» obliga a la lectura reflexiva: se organizaron ellas mismas.' },
            { text: 'Los residentes se presentaron al director el primer día.', answer: 'refl', why: 'Se presentaron ellos mismos ante el director.' },
            { text: 'Se instalaron dos quirófanos en la planta baja.', answer: 'imp', why: 'Cosas: se pasivo, el verbo concuerda con «dos quirófanos». No hay lectura reflexiva posible.' },
          ] },
        ] },
        { title: 'Antes de enviar · Before sending', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Fue anunciado por el director que las visitas serán restringidas.', ok: false, options: ['Se fue anunciado por el director que las visitas serán restringidas.', 'El director anunció que se restringirán las visitas.', 'Fue anunciado que por el director se restringirán las visitas.'], answer: 1, why: 'Verbo de lengua + que: la activa es lo natural; además, «se restringirán» evita la segunda pasiva.' },
            { sentence: 'Se evaluaron los aspirantes a jefe de servicio durante dos días.', ok: false, options: ['Se evaluaba los aspirantes a jefe de servicio durante dos días.', 'Se evaluó a los aspirantes a jefe de servicio durante dos días.', 'Se evaluaron a los aspirantes a jefe de servicio durante dos días.'], answer: 1, why: 'Personas concretas: el se plural sugiere autoevaluación. Se impersonal + a, en singular.' },
            { sentence: 'Cuando se se equivoca en un diagnóstico, se aprende mucho.', ok: false, options: ['Cuando uno se equivoca en un diagnóstico, aprende mucho.', 'Cuando se equivocan en un diagnóstico, se aprenden mucho.', 'Cuando se equivoca uno en un diagnóstico, se aprenden mucho.'], answer: 0, why: 'Dos se no pueden ir juntos: con un verbo pronominal se generaliza con uno.' },
            { sentence: 'El pabellón, diseñado por un equipo de la universidad, ya está terminado.', ok: true, why: 'Correcta: participio con agente informativo y estar + participio para el resultado.' },
            { sentence: 'Los heridos del accidente se trasladaron al Hospital General.', ok: false, options: ['Se trasladaron a los heridos del accidente al Hospital General.', 'Los heridos del accidente fueron trasladados al Hospital General.', 'Los heridos del accidente se trasladó al Hospital General.'], answer: 1, why: 'Con personas, el se plural parece «fueron ellos solos». La pasiva con ser deja claro que alguien los trasladó.' },
          ] },
        ] },
        { title: 'En la comida · Over lunch', blocks: [
          { kind: 'chat-fill', title: 'Lorena y Rodrigo, en confianza · Lorena and Rodrigo, informally', lines: [
            { who: 'Rodrigo', text: 'En la agencia todo era rapidísimo: ___ un texto en inglés a las nueve y a las diez ya tenía que estar publicado.', options: ['se te mandaban', 'eras mandado', 'te mandaban'], answer: 2, why: 'Tú genérico (te) + 3.ª plural impersonal (mandaban): cualquier traductor de la agencia, en registro coloquial.' },
            { who: 'Lorena', text: 'Aquí es distinto. Cuando ___ equivoca en un dato, la dirección llama en cinco minutos.', options: ['se', 'uno se', 'se se'], answer: 1, why: 'Equivocarse es pronominal: «se se» es imposible, y «se equivoca» solo se entendería como «él / ella». Uno generaliza.' },
            { who: 'Rodrigo', text: '¿Y quién llama?' },
            { who: 'Lorena', text: 'A veces ni sé quién es. ___ a la oficina y preguntan por el comunicado.', options: ['Es llamado', 'Se llaman', 'Llaman'], answer: 2, why: '3.ª plural impersonal: oculta al agente, aunque sea una sola persona.' },
            { who: 'Rodrigo', text: '¿Y qué dice la gente del pabellón?' },
            { who: 'Lorena', text: '___ contenta, aunque se queja del estacionamiento.', options: ['Uno está', 'La gente está', 'La gente están'], answer: 1, why: '«La gente» concuerda en singular; «uno» incluiría a Lorena, que no habla de sí misma.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Se', 'espera', 'que', 'el', 'pabellón', 'reduzca', 'las', 'esperas.'], accept: ['Se espera que el pabellón reduzca las esperas.'], en: 'The wing is expected to cut waiting times: the natural Spanish for “it is expected that”.' },
            { tiles: ['Uno', 'nunca', 'sabe', 'cuándo', 'va', 'a', 'necesitar', 'una', 'ambulancia.'], accept: ['Uno nunca sabe cuándo va a necesitar una ambulancia.', 'Nunca sabe uno cuándo va a necesitar una ambulancia.'], en: 'You never know when you might need an ambulance: generic uno, which includes the speaker.' },
            { tiles: ['La', 'sala', 'de', 'pediatría', 'fue', 'financiada', 'por', 'una', 'colecta', 'vecinal.'], accept: ['La sala de pediatría fue financiada por una colecta vecinal.'], en: 'The paediatric ward was paid for by a neighbourhood fundraiser: an agent worth mentioning.' },
          ] },
        ] },
        { title: 'Reescribe el párrafo · Rewrite the paragraph', blocks: [
          { kind: 'rewrite', title: 'Del borrador al comunicado · From draft to press release', items: [
            { prompt: 'El hospital estrenó ayer un quirófano nuevo. Una fundación local financió el quirófano.', instruction: 'Mantén el quirófano como tema en la segunda frase: pasiva con ser y agente. (Keep the operating theatre as the topic: ser passive with agent.)', accept: ['El hospital estrenó ayer un quirófano nuevo. Fue financiado por una fundación local.', 'El hospital estrenó ayer un quirófano nuevo. El quirófano fue financiado por una fundación local.', 'El hospital estrenó ayer un quirófano nuevo, que fue financiado por una fundación local.', 'El hospital estrenó ayer un quirófano nuevo, financiado por una fundación local.'] },
            { prompt: 'Es requerido lavarse las manos. Es recomendado no traer flores.', instruction: 'Quita los calcos del inglés: usa «hay que» y «se recomienda». (Remove the English calques.)', accept: ['Hay que lavarse las manos. Se recomienda no traer flores.', 'Hay que lavarse las manos y se recomienda no traer flores.'] },
            { prompt: 'Los pacientes se trasladaron al nuevo pabellón el domingo.', instruction: 'Evita la lectura «se movieron solos»: se impersonal con «a». (Avoid the reflexive reading.)', accept: ['Se trasladó a los pacientes al nuevo pabellón el domingo.', 'El domingo se trasladó a los pacientes al nuevo pabellón.', 'Se trasladó a los pacientes el domingo al nuevo pabellón.'] },
            { prompt: 'Abrirán la sala de pediatría en marzo.', instruction: 'Escríbelo para un informe administrativo, con una nominalización: «La apertura…». (Use a nominalisation.)', accept: ['La apertura de la sala de pediatría está prevista para marzo.', 'La apertura de la sala de pediatría será en marzo.', 'La apertura de la sala de pediatría se prevé para marzo.', 'La apertura de la sala de pediatría está programada para marzo.', 'La apertura de la sala de pediatría tendrá lugar en marzo.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno toma un párrafo de una noticia traducida (de una web o de su propio trabajo), cuenta las pasivas con ser y decide cuáles se quedan, cuáles pasan a activa y cuáles a se.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Valle Alto al día', coach: 'Primero la idea general, luego los detalles. First the gist, then the details.',
      steps: [
        { title: 'El boletín de la mañana · The morning bulletin', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota qué construcciones usa el locutor para no nombrar al agente y en qué momento sí lo nombra. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cuándo el locutor nombra al agente y cuándo lo omite.' } },
          { kind: 'listen', title: 'Valle Alto al día', channel: 'RADIO VALLE ALTO · BOLETÍN DE LA MAÑANA · ARTURO MEDINA', src: '/audio/grammar-live/483.mp3',
            before: 'Un locutor de la radio local da la noticia del nuevo pabellón. ¿Qué crees que les interesa saber a los oyentes: quién lo hizo, cuándo abre o qué tienen que hacer ellos? (A local radio host reports on the new wing. What do you think listeners want to know?)',
            gist: { prompt: '¿De qué trata la noticia?', options: ['De una protesta por el cierre del hospital.', 'De una campaña de vacunación en el mercado.', 'De la apertura del nuevo pabellón de urgencias y lo que cambia para los pacientes.'], answer: 2, why: 'El locutor informa de la inauguración, el traslado de pacientes y las novedades para quien vaya a urgencias.', en: 'What is the news item about?' },
            details: [
              { prompt: '¿Quién diseñó el edificio?', options: ['La dirección del hospital.', 'Un equipo de arquitectas de la universidad estatal.', 'Unos técnicos de la capital.'], answer: 1, why: '«El edificio fue diseñado por un equipo de arquitectas de la universidad estatal»: un agente que sí informa.', en: 'Who designed the building?' },
              { prompt: '¿Qué pasó durante la madrugada?', options: ['Se cortó la luz en el hospital.', 'Se cerró la entrada de la avenida.', 'Se trasladó a los primeros pacientes.'], answer: 2, why: '«Durante la madrugada se trasladó a los primeros dieciocho pacientes, sin incidentes».', en: 'What happened during the night?' },
              { prompt: '¿Cuándo abrirá la sala de pediatría?', options: ['El lunes.', 'En marzo.', 'Ya está abierta.'], answer: 1, why: '«Su apertura está prevista para marzo»: todavía no está terminada.', en: 'When will the paediatric ward open?' },
              { prompt: '¿Qué tiene que llevar quien vaya a urgencias?', options: ['Una identificación oficial.', 'La orden del médico.', 'El carnet de citas.'], answer: 0, why: '«Hay que llevar una identificación oficial».', en: 'What do people going to the emergency department have to bring?' },
            ],
            transcript: 'Muy buenos días, les habla Arturo Medina y esto es Valle Alto al Día. Arrancamos con salud. El nuevo pabellón de urgencias del Hospital General [[fue inaugurado|teal]] ayer por la tarde, después de dos años de obras. El edificio [[fue diseñado por|teal]] un equipo de arquitectas de la universidad estatal y cuenta con cuarenta camas y dos quirófanos. Durante la madrugada [[se trasladó a|orange]] los primeros dieciocho pacientes, sin incidentes. Según la dirección, el área de observación ya funciona, pero la sala de pediatría todavía no está lista: [[su apertura|violet]] está prevista para marzo. ¿Qué cambia para ustedes? Pues que la entrada de urgencias ya no es por la avenida principal, sino por la calle de los Fresnos, y que [[hay que|violet]] llevar una identificación oficial. Como nos decía esta mañana una señora en la fila: «[[Uno|violet]] nunca sabe cuándo le va a tocar, así que más vale saber dónde está la puerta». [[Se espera que|orange]] el pabellón reduzca a la mitad los tiempos de espera. Eso sí, [[dicen que|violet]] el estacionamiento se queda chico; la dirección promete una solución antes de fin de año. Seguiremos informando. Y ahora, el clima.',
            reply: { teacher: 'Tú eres un vecino que no escuchó la radio. Tu alumno te cuenta la noticia como en una conversación, con «dicen que», «te piden», «hay que» y «uno», sin pasivas con ser.', self: 'Cuéntale la noticia en voz alta a un vecino, como en una conversación: «Abrieron el pabellón…», «Dicen que…», «Te piden…», «Hay que…».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Elegir el foco al hablar', coach: '¿De qué hablas y con quién? What are you talking about, and to whom?',
      steps: [
        { title: 'Del comunicado a la sobremesa · From the press release to the dinner table', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las de seguimiento. Si tu alumno encadena pasivas con ser o deja un se ambiguo, tú repites su frase con otra construcción y siguen.', self: 'Lee la situación y responde en voz alta. Antes de hablar, piensa: ¿cuál es el tema? ¿Importa el agente? ¿Con quién hablo?' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta un cambio reciente en un servicio público de tu ciudad (un hospital, el transporte, una biblioteca): primero a un amigo, después como primer párrafo de una noticia. · Tell a recent change in a public service, first to a friend, then as a news lead.', followUps: ['¿Mantienes el mismo tema como sujeto en la noticia? (Same topic as subject?)', '¿Qué agente merece aparecer y cuál no? (Which doer is worth naming?)', '¿Qué cambia entre las dos versiones? (What changes?)'], phrases: ['¿Ya viste que [[abrieron|violet]]…?', 'El nuevo… [[fue inaugurado|teal]]…', '… [[fue diseñado por|teal]]…', '[[Se espera que|orange]]…'], hint: 'Con el amigo, 3.ª plural; en la noticia, un solo tema como sujeto y «por» solo si informa.', example: 'A un amigo: «¿Ya viste que por fin abrieron la biblioteca del parque?». En la noticia: «La nueva biblioteca del parque abrió ayer sus puertas. Fue diseñada por estudiantes de arquitectura del barrio y cuenta con una sala infantil. Se espera que reciba a trescientos lectores por semana».' },
            { q: '¿Qué es lo más difícil de tu trabajo o de tus estudios? Generaliza a partir de tu experiencia. · What is the hardest part of your job or studies? Generalise from experience.', followUps: ['¿Te incluyes en lo que dices? (Do you include yourself?)', '¿Qué dice la gente de tu profesión? (What do people say about it?)', '¿Uno se acostumbra? (Do you get used to it?)'], phrases: ['[[Uno|violet]] / [[una|violet]] se acostumbra, pero…', 'Cuando [[empiezas|violet]], [[te piden|violet]]…', '[[La gente|violet]] cree que…', '[[Dicen que|violet]]…'], hint: 'Uno / una te incluye; la gente te deja fuera; tú genérico implica al oyente.', example: 'Lo más difícil son los horarios. Cuando empiezas, te piden que estés disponible a cualquier hora, y uno al principio dice que sí a todo. La gente cree que es un trabajo tranquilo, pero no. Al final una se acostumbra, aunque cansa.' },
            { q: 'Alguien acaba de llegar a tu ciudad. Explícale cómo funciona un trámite (sacar cita médica, abrir una cuenta, renovar un documento). · Explain how a procedure works to a newcomer.', followUps: ['¿Qué hay que llevar? (What do you need to bring?)', '¿Qué te piden en la ventanilla? (What do they ask for?)', '¿Qué se recomienda evitar? (What should you avoid?)'], phrases: ['Primero [[hay que|violet]]…', 'En la ventanilla [[te piden|violet]]…', '[[Se recomienda|orange]]…', 'Si no, [[te mandan|violet]] de vuelta a casa.'], hint: 'Hay que para la obligación; tú genérico y 3.ª plural para la experiencia.', example: 'Para sacar cita en el centro de salud, primero hay que registrarse en la página web. Luego vas con tu identificación y un comprobante de domicilio, y en la ventanilla te piden la CURP. Se recomienda ir temprano, porque si llegas después de las diez, te mandan a casa.', teacher: 'La CURP es el documento de identidad de población en México; tu alumno puede usar el documento equivalente de su país.' },
            { q: 'Tú eres Lorena. Lee en voz alta este borrador y corrígelo sobre la marcha: «Fue informado por la dirección que nuevos horarios serán implementados. Es recomendado que los pacientes lleguen temprano». · Fix this translated draft aloud.', followUps: ['¿Qué calcos encuentras? (Which calques?)', '¿Cuál es el tema? (What is the topic?)', '¿Hace falta algún agente? (Is any doer needed?)'], phrases: ['[[La dirección informó|blue]] que…', '[[Se aplicarán|orange]]…', '[[Se recomienda|orange]] llegar…', '[[Hay que|violet]]…'], hint: 'Verbo de lengua + que → activa; «es recomendado» → se recomienda.', example: 'Yo diría: «La dirección informó que a partir del lunes se aplicarán nuevos horarios de consulta. Se recomienda llegar quince minutos antes». Quito las dos pasivas y el calco «es recomendado».' },
            { q: 'Lee estos titulares y explica qué entiendes: «Se presentaron los nuevos residentes», «Dos ciclistas se mataron en la carretera», «Se trasladaron los detenidos». ¿Cómo los reescribirías? · What do these headlines mean? How would you rewrite them?', followUps: ['¿Qué lecturas tiene cada uno? (What readings?)', '¿Cuál es peligroso en la prensa? (Which one is risky?)', '¿Pasa algo parecido en tu lengua? (Same in your language?)'], phrases: ['Puede entenderse como…', 'Yo pondría «[[se presentó a|orange]]…»', '… [[fueron trasladados|teal]]…', 'Mejor «murieron», porque…'], hint: 'Con personas, se plural = reflexivo o recíproco; se + a o ser + participio lo aclaran.', example: '«Se presentaron los residentes» parece que se presentaron ellos mismos; si alguien los presentó, pondría «Se presentó a los nuevos residentes». «Se mataron» puede ser un accidente, un suicidio o una pelea: mejor «Mueren dos ciclistas en un accidente». Y «Los detenidos fueron trasladados al penal», para que no parezca que se fueron solos.', next: 'En la clase 184 verás cómo el orden de palabras, sin cambiar la voz, también reparte tema y rema.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno es el jefe de comunicación y tú le lees tres frases con un calco, un agente inútil y un se ambiguo; tu alumno las corrige y explica cada decisión.', self: 'Ahora eres el jefe de comunicación: escribe tres frases con un calco, un agente inútil y un se ambiguo, y corrígelas en voz alta explicando cada decisión.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un comunicado sin calcos', coach: 'Un tema, un hilo, ningún calco. One topic, one thread, no calques.',
      steps: [
        { title: 'Tu comunicado · Your press release', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo: ¿mantiene el tema? ¿El agente informa? ¿Hay algún calco o algún se ambiguo? Después tu alumno lee el comunicado como si fuera la radio.', self: 'Escribe tu comunicado y toca «Revisar mi texto». Después revisa cada verbo: ¿mantiene el tema? ¿El agente informa? ¿Hay algún calco o algún se ambiguo?' } },
          { kind: 'write', title: 'Comunicado de prensa · Press release', situation: 'Lorena te pide el comunicado para los medios locales sobre la nueva unidad de rehabilitación del hospital (o sobre un servicio nuevo de tu ciudad), dirigido a periodistas y pacientes. (Lorena asks you for the press release on the hospital’s new rehabilitation unit, or on a new service in your own city, for local media and patients.)', task: [
            'Mantén la unidad o el servicio como tema y, siempre que puedas, como sujeto. (Keep the unit as the topic and subject.)',
            'Usa una pasiva con ser con un agente que informe de verdad. (One ser passive with an informative agent.)',
            'Usa «se espera que» u otra construcción con se. (Use se espera que or another se construction.)',
            'Da una indicación práctica con «hay que», «es necesario» o «se debe». (One practical instruction.)',
            'Incluye una nominalización (la apertura, la puesta en marcha…) y un estar + participio. (One nominalisation and one estar + participle.)',
          ], starters: ['La nueva unidad de… empezará a funcionar…', 'El espacio fue diseñado por…', 'Las obras están terminadas desde…', 'Con la apertura de…, se espera que…', 'Para…, hay que…'], words: ['fue diseñado por', 'fue financiada por', 'cuenta con', 'están terminadas', 'se capacitó al personal', 'se espera que', 'la apertura', 'la puesta en marcha', 'hay que', 'es necesario'],
            model: 'El Hospital General de Valle Alto abre su nueva unidad de rehabilitación. La nueva unidad empezará a funcionar el lunes 3 de noviembre. El espacio, de seiscientos metros cuadrados, fue diseñado por el equipo de fisioterapia del propio hospital junto con la Facultad de Medicina, y cuenta con un gimnasio terapéutico, una alberca de hidroterapia y seis consultorios. Las obras están terminadas desde septiembre; durante octubre se revisó el equipo y se capacitó al personal. Con la apertura de la unidad, se espera que el tiempo para iniciar un tratamiento baje de seis a dos semanas. Los pacientes que ya tienen cita no necesitan hacer ningún trámite: se les llamará por teléfono para confirmar el nuevo horario. Quienes acudan por primera vez deben presentar la orden de su médico, y es necesario llegar quince minutos antes. Para más información, hay que comunicarse con la oficina de atención al paciente.',
            minWords: 130,
            checks: [
              { label: 'Una pasiva con ser + participio (fue diseñado, fue financiada…)', pattern: '(?<!\\p{L})(?:fue|fueron|ha\\s+sido|han\\s+sido|será|serán)\\s+\\p{L}+(?:ad|id|iert|uest|ech|ich|ist|it)(?:o|a|os|as)(?!\\p{L})', tip: 'Escribe, por ejemplo: «El espacio fue diseñado por el equipo de fisioterapia».' },
              { label: 'Una construcción con se (se espera que, se prevé que, se capacitó…)', pattern: '(?<!\\p{L})se\\s+(?:espera|prevé|calcula|estima|recomienda|revisó|revisaron|capacitó|instaló|instalaron|les|requiere)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Se espera que la unidad atienda a cien pacientes al día».' },
              { label: 'Una indicación práctica (hay que, es necesario, se debe…)', pattern: '(?<!\\p{L})(?:hay\\s+que|es\\s+necesario|se\\s+deben?|es\\s+imprescindible)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Hay que presentar la orden del médico».' },
              { label: 'Una nominalización (la apertura, la puesta en marcha, la ampliación…)', pattern: '(?<!\\p{L})(?:la|su)\\s+(?:apertura|reapertura|inauguración|puesta\\s+en\\s+marcha|ampliación|remodelación|construcción|instalación|incorporación)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Con la apertura de la unidad…».' },
              { label: 'Un estar + participio (está terminada, están instalados…)', pattern: '(?<!\\p{L})(?:está|están|estará|estarán|estaba|estaban)\\s+(?:ya\\s+)?\\p{L}+(?:ad|id)(?:o|a|os|as)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Las obras ya están terminadas».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:es|son|fue|fueron)\\s+(?:esperad|requerid|recomendad)(?:o|a|os|as)(?!\\p{L})', why: 'Parece un calco del inglés: en español, «se espera que», «se requiere», «hay que», «se recomienda».' },
              { pattern: '(?<!\\p{L})se\\s+se(?!\\p{L})', why: 'No se pueden juntar dos se: con un verbo pronominal, generaliza con «uno» o «una».' },
              { pattern: '(?<!\\p{L})(?:está|están|estaba|estaban)\\s+siendo(?!\\p{L})', why: '«Está siendo + participio» es gramatical, pero muchos libros de estilo prefieren «se está + gerundio» o la activa.' },
              { pattern: '(?<!\\p{L})(?:los|las)\\s+pacientes\\s+se\\s+(?:trasladarán|trasladaron|atenderán|atendieron|vacunarán|vacunaron)(?!\\p{L})', why: 'Con personas, el se plural puede leerse como reflexivo: mejor «se trasladará a los pacientes» o «los pacientes serán trasladados».' },
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
            { tone: 'blue', label: 'TEMA → REMA', formula: 'lo conocido delante, lo nuevo al final; la voz mantiene el tema como sujeto', example: 'El pabellón abrirá el lunes y fue diseñado por un equipo de la universidad.', caption: 'un tema, un hilo', en: 'Known information first, new information last; choose the voice that keeps the topic as subject across sentences.' },
            { tone: 'teal', label: 'SER / ESTAR + PARTICIPIO', formula: 'ser + participio (+ por solo si informa) · estar + participio = resultado', example: 'Fue financiada por una colecta vecinal. · La sala ya está terminada.', caption: 'sin cadenas ni calcos', en: 'The ser passive is legitimate, but only add por when the doer is news, and avoid chains of passives; estar + participle describes the result.' },
            { tone: 'orange', label: 'SE', formula: 'se espera que… · con personas: se + singular + a', example: 'Se trasladó a los pacientes.', caption: 'evita el se plural ambiguo', en: 'Se is the default for leaving out the doer; with people, use se + a or the ser passive to avoid a reflexive reading.' },
            { tone: 'violet', label: 'OTRAS IMPERSONALES', formula: '3.ª plural · uno / una · tú genérico · la gente · hay que · nominalización', example: 'Dicen que… · Uno se acostumbra. · Te piden… · La apertura de…', caption: 'según quién queda incluido y el registro', en: 'Choose by who is included (the speaker, the listener, others) and by register, from chat to official reports.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de elegir, tres preguntas: **¿de qué habla mi texto?** (eso va de sujeto); **¿el agente es noticia?** (si no, sin «por»); **¿con quién hablo?** (dicen que, uno, tú en la conversación; se, ser + participio, nominalización en la prensa y los informes). Y una alarma: si suena a traducción, probablemente lo es.', en: 'Three questions: what is my text about (make it the subject)? Is the doer news (if not, drop por)? Who am I talking to (choose the register)? And one alarm bell: if it sounds translated, it probably is.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Noticia sobre un puente nuevo: «El puente une los dos barrios desde ayer. ___».', options: ['Una empresa de Monterrey lo construyó.', 'Fue construido en solo nueve meses.', 'Fue construido por obreros.'], answer: 1, why: 'Mantiene el puente como sujeto y aporta un dato nuevo; «por obreros» es un agente que no informa.', en: 'The bridge stays the subject and the new information is the time; “by workers” adds nothing.' },
            { prompt: 'Cartel en un museo: «___ fotografiar las obras sin flash».', options: ['Es permitido', 'Son permitidos', 'Se permite'], answer: 2, why: '«Es permitido» es un calco; con infinitivo, se impersonal en singular.', en: 'Museum sign: “Photography without flash is allowed.”' },
            { prompt: '«Para el estudio ___ a ochenta voluntarios».', options: ['se seleccionó', 'se seleccionaron', 'fueron seleccionado'], answer: 0, why: 'Personas con «a»: se impersonal, singular, sin lectura reflexiva.', en: '“Eighty volunteers were selected for the study.”' },
            { prompt: 'Un médico habla de su experiencia: «Con los años, ___ aprende a no llevarse el trabajo a casa».', options: ['la gente', 'uno', 'se'], answer: 1, why: 'Generaliza incluyéndose; además, «llevarse» es pronominal y «se» chocaría con él.', en: 'A doctor speaking from experience: “Over the years, you learn not to take work home.”' },
            { prompt: 'Informe municipal: «___ del nuevo mercado está prevista para enero».', options: ['Es inaugurado', 'La inauguración', 'Inaugurarán'], answer: 1, why: 'Nominalización como sujeto, propia del registro administrativo; «está prevista» concuerda con ella.', en: 'Council report: “The opening of the new market is planned for January.”' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Zaragoza, España. **Lucía Cano** trabaja en la oficina de prensa de un ayuntamiento y recibe tres frases de un becario que necesitan otra construcción.', en: 'Zaragoza, Spain. Lucía Cano works in a city council press office and receives three sentences from an intern that need a different construction.' },
          { kind: 'rewrite', title: 'La nota del ayuntamiento · The council’s press note', items: [
            { prompt: 'Fue decidido por el ayuntamiento que la piscina municipal cerrará en agosto.', instruction: 'Quita el calco: activa con el ayuntamiento como sujeto. (Active voice.)', accept: ['El ayuntamiento decidió que la piscina municipal cerrará en agosto.', 'El ayuntamiento decidió que la piscina municipal cerraría en agosto.', 'El ayuntamiento ha decidido que la piscina municipal cerrará en agosto.'] },
            { prompt: 'La biblioteca reabre el lunes. Una arquitecta del barrio reformó la biblioteca.', instruction: 'Mantén la biblioteca como tema en la segunda frase. (Keep the library as the topic.)', accept: ['La biblioteca reabre el lunes. Fue reformada por una arquitecta del barrio.', 'La biblioteca reabre el lunes. La biblioteca fue reformada por una arquitecta del barrio.', 'La biblioteca reabre el lunes, reformada por una arquitecta del barrio.', 'La biblioteca, reformada por una arquitecta del barrio, reabre el lunes.'] },
            { prompt: 'Se evaluaron los aspirantes a socorrista el sábado.', instruction: 'Evita la lectura reflexiva: se + a. (Use se + a.)', accept: ['Se evaluó a los aspirantes a socorrista el sábado.', 'El sábado se evaluó a los aspirantes a socorrista.'] },
          ] },
        ] },
        { title: 'Ampliación: el registro académico · Extension: academic register', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: quién «habla» en un artículo. Optional: who speaks in a research paper.', blocks: [
          { kind: 'lead', text: 'En un artículo académico hay tres maneras habituales de presentar lo que hace el investigador: **se** («En este trabajo **se analizan** los tiempos de espera»), el **plural de modestia** («**Analizamos** los tiempos de espera», aunque firme una sola persona) y un **sujeto inanimado** («**Este estudio analiza**…»), muy extendido aunque algunos manuales lo consideran calco del inglés. Para procesos en curso, **«está siendo + participio»** es gramatical, pero muchos libros de estilo prefieren **«se está + gerundio»**: «**Se está ampliando** el estacionamiento».', en: 'Academic Spanish presents the researcher’s actions with se, with the “modest” we (even with a single author) or with an inanimate subject (“this study analyses”), which is widespread though some manuals see it as influenced by English. For ongoing processes, “está siendo + participle” is grammatical, but many style guides prefer se + progressive.' },
          { kind: 'choice', title: 'Elige la forma · Choose the form', items: [
            { prompt: 'Resumen de una tesis de una sola autora, registro tradicional: «En este trabajo ___ la relación entre esperas y satisfacción».', options: ['se analiza', 'uno analiza', 'es analizada'], answer: 0, why: 'Se pasivo: el registro académico tradicional evita el yo; «uno» es coloquial y la pasiva con ser en presente suena forzada.', en: 'Traditional academic style: se, not the ser passive in the present nor colloquial uno.' },
            { prompt: 'Noticia: «El estacionamiento ___ desde el lunes».', options: ['se están ampliando a', 'se está ampliando', 'está siendo ampliados'], answer: 1, why: 'Proceso en curso: «se está ampliando» es la opción que recomiendan muchos libros de estilo; «está siendo ampliados», además, falla en la concordancia.', en: 'For an ongoing process, se + progressive is the safest choice.' },
            { prompt: '¿Qué frase usa el plural de modestia?', options: ['Se observó una mejora del 30 %.', 'Este estudio observa una mejora del 30 %.', 'Observamos una mejora del 30 %.'], answer: 2, why: 'El autor habla en plural, aunque firme solo, para no ponerse en primer plano.', en: 'The author says “we” even when writing alone, to avoid foregrounding themselves.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno reescribe el resumen de un trabajo suyo (o de una noticia científica) de tres maneras: con se, con plural de modestia y con sujeto inanimado, y dice cuál le parece más adecuada para su campo.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 184 · Cambios de orden y focalización: tema/rema', text: 'Hoy has elegido la **voz** para que el tema sea el sujeto y la novedad vaya al final. El paso natural: conseguir lo mismo **cambiando el orden** sin cambiar la voz, y aprender a destacar un elemento: «**Lo diseñó** un equipo de la universidad», «**A Laura**, eso no se lo contaría».', en: 'Today you chose the voice to keep the topic as subject and the news at the end. The natural next step is doing the same by changing word order without changing the voice, and learning to put one element in the spotlight.', href: '/gramatica/cambios-de-orden-y-focalizacion-tema', label: 'Ir a la clase 184' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué Lorena mantuvo “fue diseñado por un equipo de arquitectas” pero borró “fue anunciado por la dirección”?». Respuesta esperada: el primero mantiene el tema y su agente es noticia; el segundo es un calco con un verbo de lengua, donde la activa es lo natural.' },
        ] },
      ],
    },
  ],
};
