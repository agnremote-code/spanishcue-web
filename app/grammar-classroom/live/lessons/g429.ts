import type { LiveLesson } from '../types';

/**
 * Lesson 429 · B2 · Subjuntivo tras verbos de influencia en pasado (course unit G129).
 * Builds on G128 (lesson 150: imperfect subjunctive forms, -ra / -se), G118
 * (lesson 418: dijo que / pidió que + three fixed -ra chunks), G089–G092 and
 * G096 (wish, advice, emotion and requests + present subjunctive), G095
 * (same subject → infinitive) and G099 (para que). Full tense correlation is G130.
 * Scene: Bogotá, theatre company La Lámpara, the morning after the opening night
 * of «La casa del río». The actress Valeria Rincón tells her sister Natalia about
 * two months of rehearsals with a demanding director, Ernesto Salas; Lucía Prieto
 * is the producer, Diego an actor, Camilo the lighting technician.
 * In the voice message (Colombian voice, ustedes) Ernesto thanks the cast.
 * Content: past verb of influence, wish or emotion + que + imperfect subjunctive
 * (me pidió que llamara, quería que vinieras, le prohibieron que saliera, me
 * alegró que llamaras, les recomendé que fueran); para que + -ra; same subject →
 * infinitive (quería ir); infinitive with prohibir / permitir / aconsejar and the
 * causatives hacer / dejar (me hizo repetir = hizo que repitiera); decir / escribir /
 * insistir en / recordar que + indicative (information) or subjunctive (request);
 * -ra and -se both correct; present subjunctive after a past verb when the request
 * is still pending (Me pidió que lo llame mañana, NGLE §24).
 * Ampliación: formal written register (solicitó que presentasen, instó a que) and
 * «quisiera», where only -ra works. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 429,
  level: 'B2',
  title: 'Subjuntivo tras verbos de influencia en pasado',
  subtitle: 'Contar lo que alguien pidió, quería o sintió en el pasado: «Me pidió que llamara», «Me alegró que vinieras».',
  legend: [
    { tone: 'blue', label: 'Verbo o enlace que pide subjuntivo · pidió que, quería que, me alegró que, para que' },
    { tone: 'orange', label: 'Imperfecto de subjuntivo · llegáramos, vinieras, saliese (-ra / -se)' },
    { tone: 'teal', label: 'Infinitivo · quería ir, nos hizo repetir, no nos dejó salir' },
    { tone: 'violet', label: 'Presente de subjuntivo: la petición sigue pendiente · que lo llame mañana' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo que pidió, quería o sintió', coach: 'Verbo principal en pasado, subjuntivo en pasado. Past main verb, past subjunctive.',
      steps: [
        { title: 'Después del estreno · After opening night', blocks: [
          { kind: 'lead', text: 'Bogotá, compañía de teatro La Lámpara. Anoche se estrenó **«La casa del río»** y el público aplaudió de pie. Esta mañana, la actriz **Valeria Rincón** desayuna con su hermana **Natalia** y le cuenta dos meses de ensayos con un director muy exigente, **Ernesto Salas**. Hoy aprendes a contar lo que alguien **pidió, quería o sintió** en el pasado: «Nos pidió que llegáramos a las siete», «Me alegró que vinieras».', en: 'Bogotá, La Lámpara theatre company. Last night «La casa del río» opened and the audience gave it a standing ovation. This morning the actress Valeria Rincón is having breakfast with her sister Natalia and telling her about two months of rehearsals with a very demanding director, Ernesto Salas. Today you learn to report what someone asked for, wanted or felt in the past.' },
          { kind: 'guide', text: { teacher: 'Tú lees la columna de agosto y tu alumno lee la de hoy. Tu alumno dice qué verbo cambia primero y cuál cambia como consecuencia.', self: 'Lee las tres columnas en voz alta. ¿Qué verbo cambia primero y cuál cambia como consecuencia? (Which verb changes first, and which one follows?)' } },
          { kind: 'compare', title: 'En agosto y hoy · In August and today', columns: [
            { tone: 'neutral', label: 'AGOSTO · PRESENTE', sentence: 'Ernesto nos [[pide que|blue]] lleguemos a las siete.', idea: 'Verbo principal en presente → presente de subjuntivo, como en la clase 096.', en: 'Present main verb → present subjunctive: the request is described from inside the rehearsal period.' },
            { tone: 'blue', label: 'HOY · PASADO', sentence: 'Ernesto nos [[pidió que|blue]] [[llegáramos|orange]] a las siete.', idea: 'Verbo principal en pasado → imperfecto de subjuntivo. La acción pedida se mira desde aquel momento.', en: 'Past main verb → imperfect subjunctive: the requested action is seen from that past moment.' },
            { tone: 'orange', label: 'HOY · EMOCIÓN', sentence: 'A Valeria le [[alegró que|blue]] su hermana [[viniera|orange]] al estreno.', idea: 'Lo mismo con una emoción: el verbo que siente está en pasado.', en: 'Same mechanism with a feeling: the verb of emotion is in the past, so the event that caused it goes into the imperfect subjunctive.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué decide que Valeria diga «llegáramos» y no «lleguemos»?', options: ['Que «pidió» está en pasado.', 'Que la frase es negativa.', 'Que habla de un grupo.'], answer: 0, why: 'El verbo principal en pasado (pidió) arrastra al verbo de la subordinada al imperfecto de subjuntivo.', en: 'The tense of the main verb sets the tense of the subjunctive.' },
            { prompt: 'En agosto, Ernesto ___ que nadie usara el celular en la sala.', options: ['prohibió', 'prohíbe', 'prohibirá'], answer: 0, why: '«Usara» es imperfecto de subjuntivo: va con un verbo de influencia en pasado, «prohibió».', en: 'Which main verb fits an imperfect subjunctive after it?' },
          ] },
        ] },
        { title: 'Influencia, deseo y emoción · Influence, wish and feeling', mascot: '/brand/mascot/studying.webp', coach: 'Los mismos verbos de B1, ahora en pasado. The same B1 verbs, now in the past.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'VERBO EN PASADO + QUE + IMPERFECTO DE SUBJUNTIVO', question: '¿Cuándo uso «llamara», «vinieras», «saliera»?', en: 'When the main verb expresses influence (asking, ordering, forbidding, advising), wish or emotion and is in a past tense, the verb after «que» goes into the imperfect subjunctive.', formula: ['influencia: pidió, exigía, prohibió, aconsejó, recomendó, insistió en… + que + -ra', 'deseo: quería, esperaba, prefería · emoción: me alegró, le molestó, nos sorprendió… + que + -ra'],
            meaning: 'Ya sabes que la **influencia**, el **deseo** y la **emoción** piden subjuntivo (clases 089, 090, 092 y 096). Lo nuevo es el **tiempo**: si el verbo principal está en **indefinido, imperfecto o pluscuamperfecto**, el subjuntivo pasa al **imperfecto**. Las formas las estudiaste en la clase 128.',
            examples: [
              { es: 'Mi jefa [[me pidió que|blue]] la [[llamara|orange]] antes de las cinco.', en: 'My boss asked me to call her before five: a request.' },
              { es: 'De niño, mi padre [[quería que|blue]] [[estudiara|orange]] Medicina.', en: 'As a child, my father wanted me to study medicine: a wish about someone else.' },
              { es: 'A Marta le [[prohibieron que|blue]] [[saliera|orange]] del hospital antes del lunes.', en: 'Marta was not allowed to leave hospital before Monday: who forbade it does not matter.' },
              { es: '[[Me alegró que|blue]] me [[llamaras|orange]] el día de mi cumpleaños.', en: 'I was glad you called me on my birthday: a feeling about a past event.' },
            ],
            note: '«Les recomendé que fueran» y «les recomendé que fuesen» significan lo mismo: -ra y -se son dos formas del mismo tiempo.' },
          { kind: 'table', title: 'Tres familias de verbos · Three families of verbs', head: ['Familia', 'Verbos frecuentes', 'Ejemplo en pasado'], rows: [
            ['**Influencia**', 'pedir, rogar, exigir, ordenar, prohibir, permitir, aconsejar, recomendar, sugerir, insistir en', 'Les [[recomendé que|blue]] [[fueran|orange]] al estreno.'],
            ['**Deseo**', 'querer, desear, esperar, preferir, necesitar', 'Ernesto [[necesitaba que|blue]] todo [[saliera|orange]] perfecto.'],
            ['**Emoción**', 'alegrar(se), gustar, encantar, molestar, sorprender, preocupar, emocionar, dar pena / rabia', '[[Me molestó que|blue]] nadie me [[avisara|orange]].'],
          ], note: 'Con «alegrar» hay dos construcciones: «**me alegró que** vinieras» (sin preposición) y «**me alegré de que** vinieras» (verbo pronominal + de). En el registro cuidado no se omite ese «de»: «me alegré que» se considera incorrecto.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ernesto ___ que nadie hablara durante los ensayos.', options: ['exigirá', 'exigía', 'exige'], answer: 1, why: '«Hablara» necesita un verbo principal en pasado: exigía.', en: 'Ernesto demanded silence during rehearsals.' },
            { prompt: 'A Camilo le preocupó que las luces no ___ a tiempo.', options: ['funcionaran', 'funcionen', 'funcionaban'], answer: 0, why: 'Emoción en pasado (le preocupó) + otro sujeto: imperfecto de subjuntivo, funcionaran.', en: 'Camilo was worried that the lights might not work in time.' },
            { prompt: 'Diego esperaba que el público ___ los chistes del segundo acto.', options: ['entendía', 'entiende', 'entendiera'], answer: 2, why: '«Esperar que» expresa deseo; en pasado, entendiera.', en: 'Diego hoped the audience would get the jokes in the second act.' },
          ] },
        ] },
        { title: '¿Infinitivo o «que»? · Infinitive or «que»?', mascot: '/brand/mascot/standing.webp', coach: 'Mismo sujeto, infinitivo. Same subject, infinitive.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'MISMO SUJETO → INFINITIVO', question: '¿Cuándo no uso «que»?', en: 'If the person who wants or feels is the same person who acts, Spanish uses the infinitive, in the past as in the present.', formula: ['mismo sujeto: quería ir · me alegré de verte', 'otro sujeto: quería que fueras · me alegré de que vinieras'],
            meaning: 'La regla de la clase 095 sigue igual en pasado: si quien quiere o siente es **la misma persona** que hace la acción, usas **infinitivo**. «Natalia quería ir al ensayo» (Natalia quería y Natalia iba). Con otro sujeto: «Natalia quería **que** su madre **fuera** al ensayo».',
            examples: [
              { es: '[[Yo quería ir|teal]] al ensayo, pero no me dejaron.', en: 'I wanted to go to the rehearsal (I want, I go), but they didn’t let me.' },
              { es: '[[Me alegré de verte|teal]] en la tercera fila.', en: 'I was glad to see you in the third row (I am glad, I see).' },
            ] },
          { kind: 'compare', title: 'Prohibir, hacer, dejar: dos construcciones · Two patterns', columns: [
            { tone: 'teal', label: 'INFINITIVO + PRONOMBRE', sentence: 'Ernesto [[nos hizo repetir|teal]] la escena y [[no nos dejó salir|teal]] hasta las diez.', idea: 'Con hacer, dejar, prohibir, permitir, aconsejar o mandar, la persona que actúa puede aparecer como pronombre (nos) + infinitivo. Con hacer y dejar es la opción más frecuente.', en: 'With causative and permission verbs, the person who acts can be a pronoun followed by an infinitive.' },
            { tone: 'blue', label: 'QUE + SUBJUNTIVO', sentence: 'Ernesto [[hizo que|blue]] [[repitiéramos|orange]] la escena y [[no dejó que|blue]] [[saliéramos|orange]] hasta las diez.', idea: 'El mismo contenido con «que» + imperfecto de subjuntivo. Las dos versiones son correctas.', en: 'The same content with «que» + imperfect subjunctive: both versions are correct.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Pedir, querer y esperar: siempre «que» · Always «que»', text: 'Con **pedir**, **querer** o **esperar** y otro sujeto, usa «que»: «Me pidió **que saliera**». «Me pidió salir» significa otra cosa: él pidió permiso para salir.', en: 'With pedir, querer or esperar and a different subject, use «que». «Me pidió salir» means something else: he asked me for permission to go out himself.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Valeria no quería ___ sin su hermana en el público.', options: ['actuar', 'que actuaba', 'que actuara'], answer: 0, why: 'Valeria quería y Valeria actuaba: mismo sujeto, infinitivo.', en: 'Valeria didn’t want to perform without her sister in the audience.' },
            { prompt: '¿Qué frase significa «Ernesto me ordenó que me quedara»?', options: ['Ernesto me hizo quedarme.', 'Ernesto quería quedarse.', 'Ernesto me pidió quedarse.'], answer: 0, why: '«Hacer» + pronombre + infinitivo: me hizo quedarme = hizo que me quedara.', en: 'Which sentence means Ernesto made me stay?' },
            { prompt: 'La productora ___ usar el escenario los lunes.', options: ['quería que', 'nos permitió', 'nos pidió que'], answer: 1, why: '«Permitir» admite pronombre + infinitivo. Tras «que» haría falta un subjuntivo: «nos pidió que usáramos».', en: 'The producer allowed us to use the stage on Mondays.' },
          ] },
        ] },
        { title: 'Información, petición y finalidad · Information, request and purpose', mascot: '/brand/mascot/kneeling.webp', coach: '¿Informa o pide? Does it inform or ask?', blocks: [
          { kind: 'table', title: 'Verbos de doble valor · Verbs with two meanings', head: ['Verbo', 'Información → indicativo', 'Petición → subjuntivo'], rows: [
            ['**decir que**', 'Nos dijo que el estreno **era** el sábado.', 'Nos dijo que [[llegáramos|orange]] temprano.'],
            ['**escribir que**', 'Me escribió que **estaba** en el teatro.', 'Me escribió que [[fuera|orange]] al teatro.'],
            ['**insistir en que**', 'Insistió en que la obra **era** demasiado larga.', 'Insistió en que [[cortáramos|orange]] diez minutos.'],
            ['**recordar que**', 'Me recordó que el ensayo **empezaba** a las siete.', 'Me recordó que [[llevara|orange]] el vestuario.'],
          ], note: 'Con indicativo se cuenta un **dato** o una opinión; con subjuntivo, lo que alguien quería que **otra persona hiciera**. En B1 lo viste con «dijo que» (clase 118); aquí se amplía a otros verbos.' },
          { kind: 'concept', tone: 'blue', label: 'PARA QUE + IMPERFECTO DE SUBJUNTIVO', question: '¿Cómo explico el propósito de una acción pasada?', en: 'To give the purpose of a past action, use para que + imperfect subjunctive when someone else is the subject; para + infinitive when the subject is the same.', formula: ['acción en pasado + para que + -ra (otro sujeto)', 'mismo sujeto → para + infinitivo'],
            meaning: 'Conoces «para que» con presente (clase 099). Si la acción principal es **pasada**, el verbo que sigue a «para que» va en **imperfecto de subjuntivo**.',
            examples: [
              { es: 'Ernesto bajó las luces [[para que|blue]] el público [[mirara|orange]] solo la carta.', en: 'Ernesto dimmed the lights so that the audience would look only at the letter.' },
              { es: 'Ensayamos los domingos para llegar listos al estreno.', en: 'We rehearsed on Sundays to be ready for opening night: same subject, para + infinitive.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía: «Estoy en la puerta del teatro». → Lucía me escribió que ___ en la puerta del teatro.', options: ['estaba', 'estuviera', 'esté'], answer: 0, why: 'Es un dato sobre Lucía (dónde estaba), no una petición: indicativo.', en: 'Lucía wrote to tell me she was at the theatre door.' },
            { prompt: 'Lucía: «Espérame en la puerta a las seis». → Lucía me escribió que la ___ en la puerta a las seis.', options: ['esperaría', 'esperaba', 'esperara'], answer: 2, why: 'Lucía quería que yo hiciera algo: petición, esperara.', en: 'Lucía wrote asking me to wait for her at the theatre door.' },
            { prompt: 'Camilo cambió el foco ___ la cara de Valeria se viera mejor.', options: ['para que', 'por que', 'para'], answer: 0, why: 'Finalidad con otro sujeto (la cara de Valeria): para que + se viera.', en: 'Camilo moved the spotlight so that Valeria’s face could be seen better.' },
          ] },
        ] },
        { title: '-ra y -se; peticiones pendientes · -ra and -se; pending requests', mascot: '/brand/mascot/speaking.webp', coach: 'Dos formas correctas y un presente posible. Two correct forms and a possible present.', blocks: [
          { kind: 'tip', icon: '🌎', title: '-ra y -se · Two endings, one tense', text: '«Me pidió que **llamara**» y «Me pidió que **llamase**» son correctas y significan lo mismo. En todo el mundo hispánico la forma en **-ra** es la más frecuente. En la lengua hablada de América la forma en **-se** es poco común; en España se oye más, aunque también allí domina -ra. En textos escritos y formales (prensa, literatura, actas) -se aparece en todas partes.', en: 'Both endings are correct and mean the same here. The -ra form is the most frequent everywhere. In spoken Latin American Spanish -se is rare; in Spain it is heard more often, although -ra still predominates there too. In formal writing -se appears across the Spanish-speaking world.' },
          { kind: 'compare', title: 'Lo llamara / lo llame · Already done or still pending?', columns: [
            { tone: 'orange', label: 'LA ACCIÓN YA PASÓ', sentence: 'El lunes Ernesto me [[pidió que|blue]] lo [[llamara|orange]] el martes, y lo llamé.', idea: 'Petición y llamada pertenecen al pasado: solo imperfecto de subjuntivo.', en: 'Both the request and the call are in the past: only the imperfect subjunctive works.' },
            { tone: 'violet', label: 'TODAVÍA ESTÁ PENDIENTE', sentence: 'Esta mañana Ernesto me [[pidió que|blue]] lo [[llame|violet]] mañana.', idea: 'La llamada todavía no ha ocurrido: el presente es posible y muy frecuente, sobre todo en América. «Que lo llamara mañana» también es correcto.', en: 'The call has not happened yet, so the present subjunctive is possible and very common, especially in Latin America. The imperfect is also correct.' },
          ] },
          { kind: 'decide', title: '¿Imperfecto o presente de subjuntivo? · Which subjunctive?', steps: [
            { q: '¿El verbo principal está en pasado (pidió, quería, recomendó…)?', yes: 'Pasa a la pregunta siguiente.', no: 'Presente de subjuntivo: «Me pide que lo llame».' },
            { q: '¿Lo que se pidió o se quería todavía está por ocurrir, o sigue vigente, cuando tú hablas?', yes: 'Puedes usar presente («que lo llame mañana») o imperfecto («que lo llamara mañana»).', no: 'Solo imperfecto: «Me pidió que lo llamara (y lo llamé ayer)».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase NO es correcta?', options: ['En 2020 me recomendó que lea esa novela, y la leí ese verano.', 'En 2020 me recomendó que leyera esa novela.', 'En 2020 me recomendó que leyese esa novela.'], answer: 0, why: 'La lectura ya ocurrió (ese verano): no hay nada pendiente, solo vale el imperfecto (leyera / leyese).', en: 'Which sentence is NOT correct?' },
            { prompt: 'Hoy es viernes. «Ayer Lucía nos pidió que ___ el domingo al ensayo». ¿Qué es posible?', options: ['Solo «vayamos».', '«Vayamos» y «fuéramos».', 'Solo «fuéramos».'], answer: 1, why: 'El ensayo del domingo todavía no ha llegado: presente e imperfecto son correctos.', en: 'Today is Friday: which forms are possible for a rehearsal on Sunday?' },
            { prompt: '«Quería que vinieras» / «Quería que vinieses». ¿Qué diferencia hay?', options: ['La primera es de América y la segunda solo de España.', 'Ninguna de significado; -se es menos frecuente y algo más formal.', 'La segunda es incorrecta.'], answer: 1, why: 'Son variantes del mismo tiempo. No se reparten por países: -ra domina en todas partes.', en: 'What is the difference?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lee, corrige y explica. Read, correct, explain.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error. Tu alumno dice dónde está el problema y la dice bien. Después aparece la corrección.', self: 'Lee cada frase, busca el error y dila bien en voz alta. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Ernesto nos pidió que llegábamos a las siete.', right: 'Ernesto nos pidió que llegáramos a las siete.', why: 'Una petición pide subjuntivo; con «pidió», imperfecto de subjuntivo. «Llegábamos» informa de lo que hacíamos.' },
            { wrong: 'Lucía nos recomendó que reservaríamos el hotel.', right: 'Lucía nos recomendó que reserváramos el hotel.', why: 'Después de un verbo de influencia no va el condicional, sino el subjuntivo.' },
            { wrong: 'Yo quería que fuera al estreno. (yo quería, yo iba)', right: 'Yo quería ir al estreno.', why: 'Mismo sujeto: infinitivo. «Quería que fuera» habla de otra persona.' },
            { wrong: 'Me alegré que vinieras.', right: 'Me alegré de que vinieras. / Me alegró que vinieras.', why: '«Alegrarse» lleva «de»; sin «se», «me alegró que» no lo necesita.' },
            { wrong: 'El director nos hizo que repetimos la escena.', right: 'El director nos hizo repetir la escena. / El director hizo que repitiéramos la escena.', why: 'O pronombre + infinitivo, o «hizo que» + imperfecto de subjuntivo; nunca indicativo.' },
            { wrong: 'Le dije que me llamaba, pero no me llamó. (= era una petición)', right: 'Le dije que me llamara, pero no me llamó.', why: 'Si «decir» transmite una petición, va con subjuntivo.' },
            { wrong: 'Diego insistió que cambiáramos el final.', right: 'Diego insistió en que cambiáramos el final.', why: 'El verbo es «insistir en»: la preposición se mantiene delante de «que».' },
            { wrong: 'Nos prohibió que no usáramos el celular.', right: 'Nos prohibió que usáramos el celular.', why: '«Prohibir» ya es negativo: el «no» cambia el sentido.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Bajaron las luces para que el público mirara la carta.', 'Bajaron las luces para el público mirara la carta.', 'Bajaron las luces para que el público miraba la carta.'], answer: 0, why: 'Finalidad con otro sujeto en pasado: para que + mirara.', en: 'They dimmed the lights so that the audience would look at the letter.' },
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['A mi madre le sorprendió que me dieran el papel.', 'A mi madre le sorprendió que me dieron el papel.', 'A mi madre le sorprendió de que me dieran el papel.'], answer: 0, why: '«Le sorprendió que» (sin «de») + imperfecto de subjuntivo.', en: 'My mother was surprised that they gave me the part.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta tres cosas de su pasado con tres familias distintas: algo que alguien le pidió, algo que sus padres querían y algo que le alegró o le molestó.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El desayuno después del estreno', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Valeria y Natalia · Valeria and Natalia', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Natalia, tu alumno es Valeria. Después tu alumno toca cada expresión marcada y explica por qué va en subjuntivo o en infinitivo.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica por qué va en subjuntivo o en infinitivo. (Explain each marked form.)' } },
          { kind: 'explore', title: 'Domingo, diez de la mañana', setting: 'Una cafetería cerca del teatro, en Bogotá. Valeria desayuna con su hermana Natalia, que anoche estuvo en el público. (A café near the theatre in Bogotá. Valeria has breakfast with her sister, who was in the audience last night.)', lines: [
            { who: 'Natalia', text: '¡Qué estreno, Valeria! [[Me encantó que|blue]] el público se [[pusiera|orange]] de pie al final.', en: 'What an opening, Valeria! I loved it when the audience stood up at the end.' },
            { who: 'Valeria', text: 'Y a mí [[me alegró muchísimo que|blue]] [[vinieras|orange]]. Sé que te tocaba turno en el hospital.', en: 'And I was so glad you came. I know you were on shift at the hospital.' },
            { who: 'Natalia', text: 'Se lo cambié a una compañera. Oye, ¿de verdad Ernesto era tan exigente en los ensayos?', en: 'I swapped with a colleague. Hey, was Ernesto really that demanding in rehearsals?' },
            { who: 'Valeria', text: 'Muchísimo. [[Nos pedía que|blue]] [[llegáramos|orange]] a las siete en punto y [[nos prohibió usar|teal]] el celular en la sala.', en: 'Very. He’d ask us to be there at seven sharp, and he banned phones in the auditorium.' },
            { who: 'Natalia', text: '¿Y la escena de la carta? Estuviste increíble.', en: 'And the letter scene? You were amazing.' },
            { who: 'Valeria', text: 'Esa escena [[me la hizo repetir|teal]] veinte veces. [[Quería que|blue]] la [[dijera|orange]] más despacio, [[para que|blue]] el público [[oyera|orange]] cada palabra.', en: 'He made me do that scene twenty times. He wanted me to say it more slowly so the audience would catch every word.' },
            { who: 'Natalia', text: '¿Y nunca protestaste?', en: 'And you never complained?' },
            { who: 'Valeria', text: 'Una vez. Le dije que estaba agotada y él [[me dijo que|blue]] me [[fuera|orange]] a casa. Al día siguiente me trajo miel con limón para la garganta.', en: 'Once. I told him I was exhausted and he told me to go home. The next day he brought me honey and lemon for my throat.' },
            { who: 'Natalia', text: '¡Qué detalle! [[Yo quería ir|teal]] a algún ensayo, pero no se podía, ¿no?', en: 'How thoughtful! I wanted to go to a rehearsal, but it wasn’t allowed, was it?' },
            { who: 'Valeria', text: 'No. Ernesto [[no dejaba que|blue]] nadie [[entrara|orange]], ni siquiera la productora.', en: 'No. Ernesto wouldn’t let anyone in, not even the producer.' },
            { who: 'Natalia', text: '¿Y hoy qué tienen?', en: 'And what have you got today?' },
            { who: 'Valeria', text: 'Función a las siete. Esta mañana Ernesto [[me pidió que|blue]] lo [[llame|violet]] antes de las cuatro. Y el teatro nos mandó un correo muy formal: «La administración solicitó que los camerinos [[quedasen|orange]] libres antes de la medianoche».', en: 'A show at seven. This morning Ernesto asked me to call him before four. And the theatre sent us a very formal email: “The management requested that the dressing rooms be cleared before midnight.”' },
          ], notes: {
            'Me encantó que': 'Emoción en **pasado** (me encantó) + otro sujeto (el público): pide imperfecto de subjuntivo.',
            pusiera: '**Ponerse** de pie: pusieron → pusiera. Imperfecto de subjuntivo irregular, con la raíz del indefinido.',
            'me alegró muchísimo que': '«Alegrar» sin «se»: **me alegró que**, sin preposición. Con «se» sería «me alegré **de** que».',
            vinieras: 'Vinieron → **vinieras**. La que se alegra es Valeria; la que vino, Natalia: otro sujeto.',
            'Nos pedía que': 'Imperfecto de indicativo: una petición **habitual** durante los ensayos. También pide imperfecto de subjuntivo.',
            'llegáramos': 'Forma de nosotros, con tilde: **llegáramos** (o llegásemos).',
            'nos prohibió usar': '**Prohibir** + pronombre + infinitivo. Equivale a «nos prohibió que usáramos el celular».',
            'me la hizo repetir': '**Hacer** + infinitivo: Ernesto hizo que Valeria repitiera la escena. Los pronombres (me, la) van delante de «hizo».',
            'Quería que': 'Deseo en pasado con otro sujeto: Ernesto quería, Valeria decía. Por eso «que» + subjuntivo.',
            dijera: 'Dijeron → **dijera**: la irregularidad del indefinido pasa al subjuntivo.',
            'para que': 'Finalidad con otro sujeto (el público): **para que** + imperfecto de subjuntivo, porque la acción es pasada.',
            oyera: 'Oyeron → **oyera**. Lo que Ernesto buscaba con esa lentitud.',
            'me dijo que': '«Decir» con valor de **petición**: me dijo que me fuera. Compara con «le dije que estaba agotada»: ahí es información, con indicativo.',
            fuera: '**Irse**: fueron → me fuera. La misma forma sirve para «ser».',
            'Yo quería ir': 'Mismo sujeto (Natalia quería y Natalia iba): **infinitivo**, sin «que».',
            'no dejaba que': '**Dejar que** + subjuntivo, igual que «no dejaba entrar a nadie».',
            entrara: 'Con «nadie» como sujeto: **nadie entrara**.',
            'me pidió que': 'Petición en pasado, pero lo pedido todavía está **pendiente** (hoy, antes de las cuatro).',
            llame: 'Presente de subjuntivo tras un verbo en pasado: es posible porque la llamada **aún no ha ocurrido**. «Que lo llamara» también sería correcto.',
            quedasen: 'Forma en **-se**, típica de un texto escrito y formal. En la conversación, Valeria diría «quedaran».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué hizo Ernesto cuando Valeria le dijo que estaba agotada?', options: ['Le hizo repetir la escena.', 'Le dijo que se fuera a casa.', 'Le prohibió hablar en el ensayo.'], answer: 1, why: '«Él me dijo que me fuera a casa».', en: 'What did Ernesto do when Valeria said she was exhausted?' },
            { prompt: '¿Por qué Natalia no fue a ningún ensayo?', options: ['Porque Valeria no quería que fuera.', 'Porque tenía turno en el hospital.', 'Porque Ernesto no dejaba entrar a nadie.'], answer: 2, why: '«Ernesto no dejaba que nadie entrara, ni siquiera la productora».', en: 'Why didn’t Natalia go to any rehearsal?' },
            { prompt: '¿Por qué Valeria dice «lo llame» y no «lo llamara»?', options: ['Porque la llamada todavía no ha ocurrido.', 'Porque habla de algo habitual.', 'Porque «llamara» sería incorrecto.'], answer: 0, why: 'La petición sigue pendiente (antes de las cuatro): el presente es posible, aunque «llamara» también es correcto.', en: 'Why does Valeria say «lo llame»?' },
          ] },
        ] },
        { title: 'El diario de ensayos · The rehearsal diary', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Valeria escribió un diario durante los ensayos. Estas son algunas frases. ¿Qué expresa cada una: una **influencia** sobre otra persona, un **deseo**, una **emoción** o una **finalidad**?', en: 'Valeria kept a diary during rehearsals. Here are some sentences. What does each express: influence over someone, a wish, a feeling or a purpose?' },
          { kind: 'classify', title: 'Clasifica las frases · Sort the sentences', categories: [
            { id: 'influencia', label: 'INFLUENCIA · pedir, exigir, aconsejar…', tone: 'blue' },
            { id: 'deseo', label: 'DESEO · querer, esperar, preferir…', tone: 'orange' },
            { id: 'emocion', label: 'EMOCIÓN · alegrar, molestar…', tone: 'neutral' },
            { id: 'finalidad', label: 'FINALIDAD · para que', tone: 'teal' },
          ], items: [
            { text: 'El director exigió que nadie llegara tarde.', answer: 'influencia', why: '«Exigir» presiona sobre otros: verbo de influencia.' },
            { text: 'Diego esperaba que le dieran un papel más largo.', answer: 'deseo', why: '«Esperar que» expresa lo que Diego deseaba.' },
            { text: 'A Valeria le molestó que el técnico cambiara las luces sin avisar.', answer: 'emocion', why: '«Le molestó»: una reacción emocional ante un hecho.' },
            { text: 'Ensayaron los domingos para que la obra estuviera lista en marzo.', answer: 'finalidad', why: '«Para que» explica el objetivo de ensayar los domingos.' },
            { text: 'La productora prefería que el estreno fuera un sábado.', answer: 'deseo', why: '«Preferir que» es un deseo o una preferencia.' },
            { text: 'A todos nos dio pena que Diego se fuera de gira con otra compañía.', answer: 'emocion', why: '«Dar pena»: una emoción.' },
            { text: 'Ernesto le aconsejó a Valeria que tomara clases de canto.', answer: 'influencia', why: '«Aconsejar» intenta influir en lo que otra persona hace.' },
            { text: 'Bajaron la música para que se oyeran mejor las voces.', answer: 'finalidad', why: '«Para que» + oyeran: el propósito de bajar la música.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Quién quiere, pide o siente, y quién hace la acción?». Si son personas distintas y el verbo principal está en pasado: «que» + imperfecto de subjuntivo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Quién pide, quién actúa, cuándo? Who asks, who acts, when?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Diego recuerda su primera semana. (Diego remembers his first week.)', prompt: '«El primer día, Ernesto nos exigió que ___ el texto de memoria».', options: ['supiéramos', 'sabíamos', 'sepamos'], answer: 0, why: 'Exigencia en pasado, ya cumplida: imperfecto de subjuntivo (supieron → supiéramos).', en: '“On the first day, Ernesto demanded that we know the script by heart.”' },
            { context: 'Lucía, la productora, habla de las entradas. (Lucía, the producer, talks about the tickets.)', prompt: '«Me preocupó que las entradas no se ___ antes del estreno».', options: ['vendieran', 'venderían', 'vendían'], answer: 0, why: 'Emoción en pasado: me preocupó que + vendieran. El condicional no va detrás de un verbo de emoción.', en: '“I was worried the tickets wouldn’t sell before opening night.”' },
            { context: 'Natalia habla del ensayo general. (Natalia talks about the dress rehearsal.)', prompt: '«Yo quería ___ al ensayo general, pero tenía guardia».', options: ['que iba', 'que fuera', 'ir'], answer: 2, why: 'Natalia quería y Natalia iba: mismo sujeto, infinitivo.', en: '“I wanted to go to the dress rehearsal, but I was on call.”' },
            { context: 'Camilo, el técnico, explica un cambio. (Camilo, the technician, explains a change.)', prompt: '«Subí el volumen para que la música se ___ desde la última fila».', options: ['oyera', 'oía', 'oye'], answer: 0, why: 'Finalidad con otro sujeto en una acción pasada: para que + oyera.', en: '“I turned up the volume so the music could be heard from the back row.”' },
            { context: 'En la última fila no se oía bien a Diego. (Diego couldn’t be heard well from the back row.)', prompt: '«Ernesto le dijo a Diego que ___ más fuerte».', options: ['hablara', 'hablaría', 'hablaba'], answer: 0, why: 'Es una petición: decir que + subjuntivo. «Hablaba» informaría de lo que Diego hacía.', en: '“Ernesto told Diego to speak louder.”' },
          ] },
        ] },
        { title: 'Corrige las frases · Correct the sentences', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Lucía me recomendó que comprara las entradas por internet.', ok: true, why: 'Correcta: verbo de influencia en pasado + que + imperfecto de subjuntivo.' },
            { sentence: 'Durante los ensayos, Ernesto quería que llegábamos media hora antes.', ok: false, options: ['Durante los ensayos, Ernesto quería que llegáramos media hora antes.', 'Durante los ensayos, Ernesto quería llegar nosotros media hora antes.', 'Durante los ensayos, Ernesto quería que llegaríamos media hora antes.'], answer: 0, why: 'Deseo en pasado con otro sujeto: quería que + llegáramos.' },
            { sentence: 'Me alegré que Natalia viniera al estreno.', ok: false, options: ['Me alegré que Natalia venga al estreno.', 'Me alegré de que Natalia viniera al estreno.', 'Me alegré de que Natalia venía al estreno.'], answer: 1, why: '«Alegrarse de que» + imperfecto de subjuntivo.' },
            { sentence: 'El director nos hizo que repetíamos el final.', ok: false, options: ['El director nos hizo repetimos el final.', 'El director nos hizo repetir el final.', 'El director hizo que repetimos el final.'], answer: 1, why: '«Hacer» + pronombre + infinitivo (o «hizo que repitiéramos»).' },
            { sentence: 'La administración rogó que los actores no fumasen en los camerinos.', ok: true, why: 'Correcta: «fumasen» es la forma en -se, propia del registro escrito y formal.' },
            { sentence: 'Diego insistió que cambiáramos la escena final.', ok: false, options: ['Diego insistió de que cambiáramos la escena final.', 'Diego insistió en que cambiábamos la escena final.', 'Diego insistió en que cambiáramos la escena final.'], answer: 2, why: '«Insistir en que» + subjuntivo cuando se insiste en una petición.' },
          ] },
        ] },
        { title: 'Lucía y Diego hablan de la gira · Lucía and Diego discuss the tour', blocks: [
          { kind: 'chat-fill', title: 'En la oficina de producción · In the production office', lines: [
            { who: 'Lucía', text: 'Diego, ¿qué les dijo Ernesto en la reunión de ayer?' },
            { who: 'Diego', text: 'Nos pidió que ___ las fechas de la gira antes del viernes.', options: ['confirmaremos', 'confirmábamos', 'confirmáramos'], answer: 2, why: 'Petición en pasado: pidió que + confirmáramos.' },
            { who: 'Lucía', text: '¿Y qué le pareció el teatro de Medellín?' },
            { who: 'Diego', text: 'Le sorprendió que ___ tan pequeño.', options: ['fuera', 'era', 'sería'], answer: 0, why: 'Emoción en pasado (le sorprendió que): fuera.' },
            { who: 'Lucía', text: 'Ya. ¿Y quería cambiar algo?' },
            { who: 'Diego', text: 'Prefería ___ la obra a una sala más grande, pero no hay tiempo.', options: ['llevar', 'que llevara', 'que llevaba'], answer: 0, why: 'Ernesto prefería y Ernesto llevaba la obra: mismo sujeto, infinitivo.' },
            { who: 'Lucía', text: '¿Te dijo algo a ti?' },
            { who: 'Diego', text: 'Me dijo que ___ muy cansado y que se iba a casa.', options: ['estuviera', 'estaba', 'esté'], answer: 1, why: 'Información sobre Ernesto, no una petición: indicativo, estaba.' },
            { who: 'Lucía', text: 'Pobre. ¿Algo más?' },
            { who: 'Diego', text: 'Sí: te llamó esta mañana. Me pidió que le ___ hoy mismo.', options: ['contestarías', 'contestes', 'contestabas'], answer: 1, why: 'La respuesta todavía está pendiente hoy: el presente es posible («contestaras» también lo sería).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['El', 'director', 'nos', 'prohibió', 'que', 'saliéramos', 'del', 'teatro.'], accept: ['El director nos prohibió que saliéramos del teatro.'], en: 'The director forbade us to leave the theatre.' },
            { tiles: ['Me', 'alegró', 'que', 'me', 'llamaras.'], accept: ['Me alegró que me llamaras.'], en: 'I was glad you called me.' },
            { tiles: ['Ernesto', 'no', 'nos', 'dejó', 'salir', 'antes', 'de', 'las', 'diez.'], accept: ['Ernesto no nos dejó salir antes de las diez.'], en: 'Ernesto didn’t let us leave before ten.' },
          ] },
        ] },
        { title: 'Cuéntalo en pasado · Report it in the past', blocks: [
          { kind: 'rewrite', title: 'Transforma · Transform', items: [
            { prompt: 'Ernesto, en agosto: «Lleguen a las siete».', instruction: 'Cuéntalo hoy: «Ernesto nos pidió que…». (Report it today.)', accept: ['Ernesto nos pidió que llegáramos a las siete.', 'Ernesto nos pidió que llegásemos a las siete.'] },
            { prompt: 'Lucía, el mes pasado, a Diego: «No hables con la prensa antes del estreno».', instruction: 'Cuéntalo: «Lucía le prohibió a Diego que…». (Careful with «no».)', accept: ['Lucía le prohibió a Diego que hablara con la prensa antes del estreno.', 'Lucía le prohibió a Diego que hablase con la prensa antes del estreno.'] },
            { prompt: 'Los padres de Valeria vinieron al estreno. Valeria se puso muy contenta.', instruction: 'Une las dos ideas: «A Valeria le alegró que…». (Join the two ideas.)', accept: ['A Valeria le alegró que sus padres vinieran al estreno.', 'A Valeria le alegró que sus padres viniesen al estreno.'] },
            { prompt: 'Diego, hace un año: «Quiero actuar en Cali».', instruction: 'Cuéntalo: «Diego quería…». (Same subject.)', accept: ['Diego quería actuar en Cali.'] },
            { prompt: 'Ernesto: «Repitan la escena. Así el público la entiende mejor».', instruction: 'Únelo: «Ernesto nos hizo repetir la escena para que…». (Join with para que.)', accept: ['Ernesto nos hizo repetir la escena para que el público la entendiera mejor.', 'Ernesto nos hizo repetir la escena para que el público la entendiese mejor.'] },
          ] },
        ] },
        { title: '¿Ya pasó o sigue pendiente? · Done or still pending?', blocks: [
          { kind: 'classify', title: '¿Qué formas son posibles? · Which forms are possible?', categories: [
            { id: 'solo', label: 'SOLO IMPERFECTO · ya pasó', tone: 'orange' },
            { id: 'dos', label: 'IMPERFECTO O PRESENTE · sigue pendiente', tone: 'violet' },
          ], items: [
            { text: 'El mes pasado Lucía nos pidió que ___ (comprar) el vestuario, y lo compramos.', answer: 'solo', why: 'La compra ya se hizo: solo «compráramos».' },
            { text: 'Son las once. Esta mañana Ernesto me pidió que lo ___ (llamar) esta tarde.', answer: 'dos', why: 'La llamada es esta tarde: «lo llame» o «lo llamara».' },
            { text: 'En 2019 la directora quería que ___ (estrenar) en Cali.', answer: 'solo', why: 'Un deseo de 2019 que ya no está vigente: solo «estrenáramos».' },
            { text: 'Ayer Lucía nos recomendó que ___ (reservar) ya los hoteles de la gira de diciembre.', answer: 'dos', why: 'La reserva todavía está por hacer: «reservemos» o «reserváramos».' },
            { text: 'Cuando era niña, mis padres no dejaban que ___ (ver) la tele por la noche.', answer: 'solo', why: 'Una norma de la infancia: solo «viera».' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Ernesto', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El director da las gracias · The director says thank you', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno apunta qué pidió Ernesto en agosto, qué le emocionó anoche y qué avisos da. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles: qué pidió Ernesto, qué le emocionó y qué avisos da. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Ernesto', channel: 'NOTA DE VOZ · ERNESTO SALAS, AL GRUPO DE LA COMPAÑÍA', src: '/audio/grammar-live/429.mp3',
            before: 'Es domingo por la mañana. Ernesto manda un audio al grupo de la compañía. ¿Qué crees que les dice un director a sus actores el día después del estreno? (What do you think a director tells his cast the day after opening night?)',
            gist: { prompt: '¿Para qué manda Ernesto el audio?', options: ['Para pedir perdón por cancelar la función del sábado.', 'Para cambiar el horario de los ensayos.', 'Para agradecer el trabajo de los ensayos y dar dos avisos.'], answer: 2, why: 'Recuerda los ensayos, da las gracias y termina con «dos cosas prácticas».', en: 'Why does Ernesto send the message?' },
            details: [
              { prompt: '¿Qué les pidió Ernesto a los actores en agosto?', options: ['Que confiaran en él y llegaran puntuales.', 'Que trajeran a sus familias.', 'Que improvisaran más.'], answer: 0, why: '«Les pedí que confiaran en mí y les exigí que llegaran puntuales».', en: 'What did Ernesto ask the actors in August?' },
              { prompt: '¿Por qué fue tan exigente, según él?', options: ['Para que el teatro les diera más funciones.', 'Para que la obra funcionara como un solo cuerpo.', 'Para que Valeria aprendiera a cantar.'], answer: 1, why: '«Lo hice para que la obra respirara como un solo cuerpo».', en: 'Why was he so demanding, according to him?' },
              { prompt: '¿Qué le emocionó anoche?', options: ['Que el público pidiera otra función.', 'Que Lucía subiera al escenario a hablar.', 'Que todo el equipo estuviera junto en el escenario.'], answer: 2, why: '«Me emocionó que estuviéramos todos juntos en el escenario, también Camilo y el equipo técnico».', en: 'What moved him last night?' },
              { prompt: '¿Qué le pidió Lucía a Ernesto?', options: ['Que les recordara a los actores la doble función del sábado.', 'Que ensayaran el viernes.', 'Que cancelara la función del sábado.'], answer: 0, why: '«Lucía me pidió que les recuerde que el sábado hay doble función».', en: 'What did Lucía ask Ernesto to do?' },
            ],
            transcript: 'Hola a todos, habla Ernesto. Les dejo este audio porque anoche, con tanta gente en el vestíbulo, no pude hablar con cada uno. Cuando empezamos en agosto, [[les pedí que|blue]] [[confiaran|orange]] en mí y [[les exigí que|blue]] [[llegaran|orange]] puntuales todos los días. Ya sé que no fue fácil. A Valeria [[le hice repetir|teal]] la escena de la carta hasta el cansancio, y a Diego [[no lo dejé improvisar|teal]] ni una sola vez. Lo hice [[para que|blue]] la obra [[respirara|orange]] como un solo cuerpo. Anoche, cuando el público se puso de pie, [[me emocionó que|blue]] [[estuviéramos|orange]] todos juntos en el escenario, también Camilo y el equipo técnico. Y [[me encantó que|blue]] tantos de ustedes [[trajeran|orange]] a sus familias. Ahora, dos cosas prácticas. Lucía [[me pidió que|blue]] les [[recuerde|violet]] que el sábado hay doble función, a las cuatro y a las ocho. Y [[me sugirió que|blue]] [[descansen|violet]] la voz el viernes; estoy de acuerdo con ella. Gracias de corazón. Nos vemos esta noche.',
            reply: { teacher: 'Tú eres Natalia. Tu alumno, como Valeria, te cuenta lo que dijo Ernesto en el audio: «Nos dio las gracias porque…», «Lucía le pidió que…», «Le emocionó que…».', self: 'Eres Valeria. Cuéntale a Natalia en voz alta tres cosas del audio: «Ernesto nos pidió que…», «Le emocionó que…», «Lucía le pidió que…». (Report three things aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo que te pidieron y lo que sentiste', coach: 'Habla de tu pasado: peticiones, deseos y emociones. Talk about your past.',
      steps: [
        { title: 'Recuerdos con subjuntivo · Memories with the subjunctive', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las preguntas de seguimiento. Si una forma falla, tú repites la frase bien y siguen.', self: 'Lee la situación y responde en voz alta. Antes de hablar, piensa: ¿quién pide o siente, y quién hace la acción? (Read the situation and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en tu adolescencia. ¿Qué querían tus padres que hicieras? ¿Qué no te dejaban hacer? · Think of your teenage years. What did your parents want you to do, and what didn’t they let you do?', followUps: ['¿Y tú qué querías hacer? (And what did you want to do?)', '¿Hoy harías lo mismo con tus hijos o sobrinos? (Would you do the same today?)'], phrases: ['[[Mis padres querían que|blue]] [[estudiara|orange]]…', '[[No me dejaban|teal]] salir… / [[No dejaban que|blue]] [[volviera|orange]]…', '[[Yo quería|teal]]…, pero…'], hint: 'Otro sujeto: querían que + -ra. Mismo sujeto: yo quería + infinitivo.', example: 'Mis padres querían que estudiara Derecho, como mi abuelo, y no me dejaban volver a casa después de las once. Yo quería estudiar Música, así que al final llegamos a un acuerdo: hice Derecho y tomé clases de piano por las tardes.', next: 'Ahora, alguien exigente.' },
            { q: 'Un profesor, entrenador o jefe exigente: ¿qué te pedía? ¿Para qué? · A demanding teacher, coach or boss: what did they ask of you, and why?', followUps: ['¿Te parecía justo entonces? (Did it seem fair then?)', '¿Y ahora, qué piensas? (And what do you think now?)'], phrases: ['[[Nos exigía que|blue]] [[entregáramos|orange]]…', '[[Nos hacía|teal]] repetir…', '…[[para que|blue]] [[aprendiéramos|orange]]…'], hint: 'Para que + -ra cuando el sujeto cambia; para + infinitivo cuando es el mismo.', example: 'Mi entrenadora de natación nos exigía que llegáramos a las seis de la mañana y nos hacía nadar dos mil metros antes de empezar. Decía que lo hacía para que aprendiéramos a sufrir un poco. Entonces me parecía exagerado; ahora se lo agradezco.', next: 'Ahora, las emociones.' },
            { q: 'Recuerda un momento que te emocionó o te molestó: una fiesta, un viaje, un regalo. · Remember a moment that moved or annoyed you.', followUps: ['¿Qué hiciste después? (What did you do afterwards?)', '¿Se lo dijiste a esa persona? (Did you tell that person?)'], phrases: ['[[Me emocionó que|blue]]…', '[[Me molestó muchísimo que|blue]]…', '[[Me alegré de que|blue]]…'], hint: 'Emoción en pasado + otro sujeto: que + imperfecto de subjuntivo. Y «alegrarse de que», con «de».', example: 'En mi último cumpleaños me emocionó que mis amigos del colegio organizaran una cena sorpresa. En cambio, me molestó un poco que mi hermano llegara dos horas tarde, aunque al final me alegré de que viniera.', next: 'Ahora, tus consejos.' },
            { q: 'Un consejo que diste: ¿qué le recomendaste a alguien y qué pasó? · A piece of advice you gave: what did you recommend, and what happened?', followUps: ['¿Te hizo caso? (Did they listen to you?)', '¿Hoy le dirías lo mismo? (Would you say the same today?)'], phrases: ['[[Le recomendé que|blue]]…', '[[Le aconsejé que no|blue]]…', 'Al final…'], hint: 'Influencia en pasado: le recomendé / aconsejé que + -ra. Con «aconsejar» también vale «le aconsejé + infinitivo».', example: 'El año pasado una compañera dudaba entre dos trabajos. Le recomendé que eligiera el que le permitía aprender más, aunque pagaba menos, y le aconsejé que no decidiera con prisa. Lo pensó dos semanas y ahora está encantada.', next: 'Ahora, algo pendiente.' },
            { q: 'Una petición pendiente: ¿qué te pidió alguien esta semana que todavía no has hecho? · A pending request: what did someone ask you to do this week that you haven’t done yet?', followUps: ['¿Cuándo lo vas a hacer? (When will you do it?)', '¿Por qué no lo has hecho todavía? (Why haven’t you done it yet?)'], phrases: ['[[Me pidió que|blue]] lo [[llame|violet]] / lo [[llamara|orange]]…', 'Todavía no…', 'Pienso hacerlo…'], hint: 'Si lo pedido sigue pendiente, presente o imperfecto de subjuntivo: las dos formas son correctas.', example: 'El lunes mi vecina me pidió que le riegue las plantas este fin de semana, porque se va a Cartagena. Todavía no me ha dado las llaves; me dijo que me las traería el viernes.', next: 'Para terminar, las normas.' },
            { q: 'Las normas de un lugar: tu primer trabajo, una residencia, un campamento. ¿Qué te prohibían o te permitían? · The rules of a place: your first job, a hall of residence, a summer camp.', followUps: ['¿Alguna norma te parecía absurda? (Did any rule seem absurd?)', '¿La cumplías siempre? (Did you always follow it?)'], phrases: ['[[Nos prohibían que|blue]] [[usáramos|orange]]…', '[[No nos dejaban|teal]]…', '[[Nos permitían|teal]] + infinitivo…'], hint: 'Prohibir, permitir y dejar: pronombre + infinitivo o «que» + -ra.', example: 'En mi primer trabajo, en un hotel, nos prohibían que usáramos el celular delante de los clientes y no nos dejaban comer en la recepción. Eso sí, nos permitían tomar café gratis todo el día.', teacher: 'Cuando tu alumno lo dice bien, tú le das una norma nueva en presente («No se puede fumar aquí») y tu alumno la cuenta como si fuera de hace diez años: «Nos prohibían que…».' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno te pregunta qué querían tus padres, qué te prohibían y qué te emocionó en un viaje; tú respondes y tu alumno revisa si usas bien el imperfecto de subjuntivo.', self: 'Ahora cuenta en voz alta tres cosas de un viaje o de un trabajo: algo que te pidieron, algo que te prohibieron y algo que te alegró. (Tell three things aloud.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un texto para el programa de mano', coach: 'Cuenta un proceso exigente. Tell the story of a demanding process.',
      steps: [
        { title: 'Cómo preparamos la obra · How we prepared the play', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada frase: ¿quién pide o siente y quién actúa? ¿El verbo principal está en pasado? Después tu alumno lee el texto en voz alta.', self: 'Escribe tu texto y toca «Revisar mi texto». En cada frase con «que», pregúntate: ¿quién pide o siente y quién actúa? (Write your text and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Texto para el programa · Text for the programme', situation: 'La compañía La Lámpara prepara el programa de mano de la gira y pide a cada actor un texto breve para el público: «Cómo preparé mi papel». Escribe como Valeria, o cuenta tu propia experiencia con un profesor, entrenador o jefe exigente. (The company asks each actor for a short text for the audience about how they prepared. Write as Valeria, or tell your own experience with a demanding teacher, coach or boss.)', task: [
            'Cuenta dos peticiones o normas con un verbo de influencia en pasado + que + imperfecto de subjuntivo. (Two requests or rules.)',
            'Expresa una emoción con «me molestó / me sorprendió / me emocionó que…» o «me alegré de que…». (One feeling.)',
            'Explica el propósito de algo con «para que» + imperfecto de subjuntivo. (One purpose.)',
            'Usa un infinitivo con el mismo sujeto («quería…») y una construcción con hacer o dejar + infinitivo. (Same subject; hacer / dejar.)',
            'Termina con lo que piensas ahora de aquella experiencia. (End with what you think now.)',
          ], starters: ['Cuando empecé…, no imaginaba…', 'Desde el primer día nos pidió que…', 'Al principio me molestó que…', 'Quería que…', '…para que…', 'Ahora…'],
            words: ['pidió que', 'exigía que', 'me aconsejó que', 'no nos dejaba', 'me hizo repetir', 'me molestó que', 'me emocionó que', 'para que', 'quería', 'llegáramos', 'tuviera', 'estuviera'],
            model: 'Cuando Ernesto Salas me ofreció el papel de Inés, no imaginaba lo que me esperaba. Desde el primer día nos pidió que llegáramos a las siete y que dejáramos el celular en la entrada. Al principio me molestó que fuera tan estricto, pero pronto entendí por qué. Quería que cada gesto tuviera un sentido, así que me hizo repetir la escena de la carta hasta que la dije casi en un susurro. También me aconsejó que tomara clases de respiración para que mi voz llegara a la última fila sin gritar. Yo solo quería hacerlo bien, y él lo sabía. La noche del estreno, cuando el público se puso de pie, me emocionó que mi hermana estuviera allí, en la tercera fila. Ahora salimos de gira, y Ernesto ya nos ha pedido que descansemos antes de cada función. Esta vez pienso obedecer sin protestar.',
            minWords: 120,
            checks: [
              { label: 'Un verbo de influencia o deseo en pasado + que (pidió que, quería que…)', pattern: '(?<!\\p{L})(?:pidió|pidieron|pedía|pedían|quería|querían|exigió|exigía|prohibió|prohibía|aconsejó|recomendó|sugirió|rogó|permitió|insistió\\s+en|insistía\\s+en)\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Nos pidió que llegáramos a las siete».' },
              { label: 'Una emoción en pasado + que (me molestó que, me alegré de que…)', pattern: '(?<!\\p{L})(?:(?:me|te|le|nos|les)\\s+(?:alegró|molestó|sorprendió|encantó|gustó|preocupó|emocionó|dolió|dio\\s+(?:pena|rabia|miedo))|me\\s+alegré\\s+de|nos\\s+alegramos\\s+de)\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Me emocionó que mi hermana estuviera allí».' },
              { label: 'Una finalidad con «para que»', pattern: '(?<!\\p{L})para\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «… para que mi voz llegara a la última fila».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:pidió|pedía|quería|querían|exigió|exigía|prohibió|aconsejó|recomendó)\\s+que\\s+(?:no\\s+)?(?:(?:me|te|le|lo|la|nos|les|los|las|se)\\s+)?\\p{L}+(?:aba|abas|ábamos|aban|ía|ías|íamos|ían)(?!\\p{L})', why: 'Después de una petición o un deseo en pasado no va indicativo ni condicional: «nos pidió que llegáramos», «quería que viniera».' },
              { pattern: '(?<!\\p{L})(?:me\\s+alegré|te\\s+alegraste|se\\s+alegró|nos\\s+alegramos|se\\s+alegraron)\\s+que(?!\\p{L})', why: '«Alegrarse» lleva «de»: «me alegré de que vinieras» (o «me alegró que vinieras»).' },
              { pattern: '(?<!\\p{L})insisti(?:ó|eron|ía|ían)\\s+que(?!\\p{L})', why: 'El verbo es «insistir en»: «insistió en que…».' },
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
            { tone: 'blue', label: 'INFLUENCIA, DESEO, EMOCIÓN', formula: 'verbo en pasado + que + imperfecto de subjuntivo', example: 'Nos pidió que llegáramos a las siete. Me alegró que vinieras.', caption: 'el verbo principal marca el tiempo', en: 'A past verb of influence, wish or emotion takes the imperfect subjunctive after que' },
            { tone: 'teal', label: 'MISMO SUJETO', formula: 'quería ir · me alegré de verte', example: 'Yo quería ir al ensayo, pero no se podía.', caption: 'sin «que», con infinitivo', en: 'Same subject: infinitive, no que' },
            { tone: 'teal', label: 'HACER, DEJAR, PROHIBIR', formula: 'nos hizo repetir = hizo que repitiéramos', example: 'No nos dejó salir hasta las diez.', caption: 'pronombre + infinitivo o que + -ra', en: 'Causative and permission verbs: pronoun + infinitive, or que + subjunctive' },
            { tone: 'orange', label: 'DOBLE VALOR Y FINALIDAD', formula: 'dijo que estaba (dato) · dijo que viniera (petición) · para que + -ra', example: 'Bajó las luces para que el público mirara la carta.', caption: '¿informa o pide?', en: 'Decir, escribir, insistir en: indicative to inform, subjunctive to request; para que + -ra for purpose' },
            { tone: 'violet', label: '-RA / -SE Y PRESENTE', formula: 'llamara = llamase · que lo llame mañana (pendiente)', example: 'Esta mañana me pidió que lo llame antes de las cuatro.', caption: 'si sigue pendiente, también presente', en: '-ra and -se are both correct; the present subjunctive is possible if the request is still pending' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Hazte tres preguntas: **¿hay influencia, deseo o emoción?** (entonces, subjuntivo); **¿es la misma persona?** (entonces, infinitivo); **¿el verbo principal está en pasado?** (entonces, imperfecto de subjuntivo, salvo si lo pedido sigue pendiente).', en: 'Ask yourself three questions: is there influence, wish or emotion? (then subjunctive); is it the same person? (then infinitive); is the main verb in the past? (then imperfect subjunctive, unless what was asked is still pending).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mi abuela siempre quería que ___ a comer los domingos.', options: ['iríamos', 'fuéramos', 'íbamos'], answer: 1, why: 'Deseo en pasado con otro sujeto: fuéramos.', en: 'My grandmother always wanted us to come for lunch on Sundays.' },
            { prompt: 'Nos sorprendió que el museo ___ cerrado un martes.', options: ['estuviera', 'estará', 'estaba'], answer: 0, why: 'Emoción en pasado: nos sorprendió que + estuviera.', en: 'We were surprised the museum was closed on a Tuesday.' },
            { prompt: 'Cuando era joven, yo prefería ___ solo.', options: ['que viajaba', 'que viajara', 'viajar'], answer: 2, why: 'Mismo sujeto: infinitivo.', en: 'When I was young, I preferred to travel alone.' },
            { prompt: 'El médico le dijo a mi padre que ___ menos sal.', options: ['comiera', 'comería', 'comía'], answer: 0, why: 'Petición o consejo: decir que + subjuntivo.', en: 'The doctor told my father to eat less salt.' },
            { prompt: 'Les dejé las llaves ___ entraran sin mí.', options: ['para que', 'para', 'porque'], answer: 0, why: 'Finalidad con otro sujeto: para que + entraran.', en: 'I left them the keys so they could get in without me.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Escuela de cocina en Quito. La chef **Paula Andrade** fue muy estricta en el primer curso. Uno de sus alumnos, **Mario**, se lo cuenta a un amigo meses después.', en: 'A cookery school in Quito. Chef Paula Andrade was very strict on the first course. One of her students, Mario, tells a friend about it months later.' },
          { kind: 'rewrite', title: 'Mario cuenta el curso · Mario tells the story', items: [
            { prompt: 'La chef, el primer día: «No usen el celular en la cocina».', instruction: 'Mario: «La chef nos prohibió…». (Two forms are possible.)', accept: ['La chef nos prohibió que usáramos el celular en la cocina.', 'La chef nos prohibió usar el celular en la cocina.', 'La chef nos prohibió que usásemos el celular en la cocina.'] },
            { prompt: 'Mario trajo sus propios cuchillos. A la chef le gustó mucho.', instruction: 'Une las dos ideas: «A la chef le gustó que…». (Join the ideas.)', accept: ['A la chef le gustó que Mario trajera sus propios cuchillos.', 'A la chef le gustó que Mario trajese sus propios cuchillos.', 'A la chef le gustó mucho que Mario trajera sus propios cuchillos.', 'A la chef le gustó mucho que Mario trajese sus propios cuchillos.'] },
            { prompt: 'La chef: «Prueben la salsa. Así aprenden a corregir la sal».', instruction: 'Mario: «La chef nos hizo probar la salsa para que…». (Use para que.)', accept: ['La chef nos hizo probar la salsa para que aprendiéramos a corregir la sal.', 'La chef nos hizo probar la salsa para que aprendiésemos a corregir la sal.'] },
          ] },
        ] },
        { title: 'Ampliación: el registro escrito y formal · Extension: formal written register', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: actas, informes y noticias. Optional: minutes, reports and news.', blocks: [
          { kind: 'lead', text: 'En actas, informes y noticias aparecen verbos de influencia más formales: **solicitar que**, **rogar que**, **disponer que**, **instar a alguien a que**. Ahí la forma en **-se** es más frecuente que en la conversación. Una excepción: en la cortesía («**Quisiera** una mesa para dos») solo vale la forma en -ra.', en: 'Minutes, reports and news use more formal verbs of influence: solicitar que, rogar que, disponer que, instar a alguien a que. There the -se form is more frequent than in conversation. One exception: in polite requests («Quisiera una mesa para dos») only the -ra form works.' },
          { kind: 'choice', title: 'Registro formal · Formal register', items: [
            { prompt: 'Acta de una reunión: «La presidenta solicitó que los vecinos ___ sus propuestas por escrito».', options: ['presentaban', 'presentarán', 'presentasen'], answer: 2, why: 'Influencia en pasado: imperfecto de subjuntivo. En un acta, la forma en -se es muy natural (también «presentaran»).', en: 'Minutes: the chair asked residents to submit their proposals in writing.' },
            { prompt: 'Noticia: «El ministerio instó a las empresas ___ redujeran el consumo de energía».', options: ['que', 'a que', 'de que'], answer: 1, why: 'El verbo es «instar a alguien **a** que»: la preposición se mantiene.', en: 'News: the ministry urged companies to reduce energy use.' },
            { prompt: '¿Qué frase NO admite la forma en -se?', options: ['Prefería que no lo llamaran.', 'Quisiera hacer una reserva para dos.', 'Me pidió que lo acompañara.'], answer: 1, why: 'En la cortesía («quisiera») solo se usa -ra: «quisiese una reserva» no se dice.', en: 'Which sentence does NOT allow the -se form?' },
            { prompt: 'Informe: «Durante las obras del año pasado, la comisión dispuso que el teatro ___ sus puertas».', options: ['cerrase', 'cerraría', 'cerraba'], answer: 0, why: 'Una disposición ya cumplida: imperfecto de subjuntivo (cerrase / cerrara).', en: 'Report: during last year’s works, the committee ordered the theatre to close.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno reescribe en tono de acta tres normas de los ensayos de Ernesto: «La dirección dispuso que…», «Se solicitó a los actores que…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 130 · Correlación temporal: presente, pasado y futuro', text: 'Ya sabes que un verbo principal en pasado lleva el subjuntivo al imperfecto, y que el presente es posible si la petición sigue pendiente. El paso natural: ver el sistema completo, cómo se combinan los tiempos del verbo principal y del subordinado en presente, pasado y futuro: «Quiero que venga; quería que viniera; querré que venga».', en: 'You now know that a past main verb takes the imperfect subjunctive, and that the present is possible when the request is still pending. The natural next step is the whole system: how the tenses of the main and subordinate verbs combine in present, past and future.', href: '/gramatica/correlacion-temporal-presente-pasado-y-futuro', label: 'Ir a la clase 130' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “me dijo que estaba cansado” y “me dijo que descansara”, y entre “quería ir” y “quería que fueras”?». Respuesta esperada: información frente a petición; mismo sujeto frente a otro sujeto. Tarea: escribir cinco cosas que te pidieron, te prohibieron o te alegraron el año pasado.' },
        ] },
      ],
    },
  ],
};
