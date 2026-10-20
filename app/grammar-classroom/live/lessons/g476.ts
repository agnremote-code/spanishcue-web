import type { LiveLesson } from '../types';

/**
 * Lesson 476 · C1 · Valores interpretativos del gerundio y participio (course unit G176).
 * Builds on G082 (lesson 382: gerund of manner, llegó corriendo), G157 (lesson 457:
 * resultative participles and participle-adjectives) and G172 (lesson 472: conditional
 * gerund with a future or hypothetical main clause).
 * One scene runs through the class: closing night at La Crónica del Valle, a fictional regional
 * daily in Morelia. Lucía Mendoza (style editor and head of copy) reviews the front-page story
 * by Óscar Villalobos (young reporter) on the reopening of the Mercado de la Ribera; Ramiro
 * Ortega (photo editor) brings his captions; Alicia Ruiz is the editor-in-chief. Escuchar: Lucía's
 * one-voice podcast segment «Un minuto de estilo» (es-MX-DaliaNeural, ustedes). Escribir: a short
 * local news story. Content: the adverbial gerund and how context decides its reading: internal
 * gerund (manner, means: entraron aplaudiendo, aprendió mirando) vs peripheral gerund with a comma
 * (time/simultaneity, cause, condition, concession with aun / incluso); the main clause decides
 * (viviendo en el centro: no necesito / no necesitarías / aun viviendo…); gerund subject = main
 * subject, or its own subject placed after it (estando yo presente); simple gerund = simultaneous,
 * compound habiendo + participio = anterior; perception verbs (vi a Luis paseando, ambiguity).
 * Norm: the posterior gerund (*cerró en marzo, reabriendo en septiembre → y reabrió) and the
 * «gerundio especificativo» calque (*una caja conteniendo libros → que contiene; *un decreto
 * regulando → que regula); accepted: agua hirviendo, clavo ardiendo, descriptive captions and
 * picture titles; criticised: «foto mostrando…». Predicative participle agreeing with the subject
 * with state/cause, condition or concession readings (Cansada, se fue a dormir; Bien editada,
 * habría ido en portada; Aun agotados, …); absolute participles only recognised (G177).
 * Ampliación: object reading with perception verbs, consequence gerund, legal «considerando»,
 * discourse «hablando de».
 */
export const lesson: LiveLesson = {
  id: 476,
  level: 'C1',
  title: 'Valores interpretativos del gerundio y participio',
  subtitle: 'Interpretar gerundios y participios según el contexto (modo, causa, condición, concesión) y evitar los usos que la norma desaconseja.',
  legend: [
    { tone: 'teal', label: 'GERUNDIO ADVERBIAL · entraron aplaudiendo, paseando por el centro, aun sabiéndolo' },
    { tone: 'blue', label: 'SUJETO PROPIO O ANTERIORIDAD · estando yo presente, habiendo visto' },
    { tone: 'violet', label: 'PARTICIPIO PREDICATIVO · cansada, preocupado por el cierre' },
    { tone: 'orange', label: 'LA ALTERNATIVA RECOMENDADA · y reabrió, que contiene' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un gerundio, varias lecturas', coach: 'El gerundio no dice la relación: la dice el contexto. Context tells you what the gerund means.',
      steps: [
        { title: 'Noche de cierre · Closing night', blocks: [
          { kind: 'lead', text: 'Son las nueve de la noche en la redacción de **La Crónica del Valle**, un diario regional de Morelia. Óscar Villalobos, reportero joven, firma su primera portada: la reapertura del Mercado de la Ribera tras seis meses de obras. Lucía Mendoza, la editora de estilo, revisa su texto línea a línea. Casi todas sus correcciones tienen que ver con **gerundios**: algunos dicen cómo, otros cuándo o por qué, y dos de ellos la norma los desaconseja. Hoy aprendes a leer esos valores y a decidir cuándo el gerundio es la mejor opción.', en: 'It’s closing night at a regional newspaper. A young reporter has his first front page, and the style editor’s corrections are mostly about gerunds: some express manner, others time or cause, and two of them are uses that the norm advises against. You’ll learn to read those meanings and decide when a gerund is the best choice.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de la crónica y tu alumno dice qué pregunta contesta cada gerundio: ¿cómo?, ¿cuándo? o ¿por qué?', self: 'Lee las tres frases en voz alta. ¿Qué pregunta contesta cada gerundio: ¿cómo?, ¿cuándo? o ¿por qué? (Which question does each gerund answer?)' } },
          { kind: 'compare', title: 'Tres gerundios de la crónica · Three gerunds from the story', columns: [
            { tone: 'teal', label: 'MODO · ¿CÓMO?', sentence: 'Los vecinos [[entraron aplaudiendo|teal]].', idea: 'Dice cómo entraron. Va detrás del verbo, sin coma.', en: 'Manner: the gerund sits right after the verb and describes how the action was done.' },
            { tone: 'teal', label: 'TIEMPO · ¿CUÁNDO?', sentence: '[[Paseando por los pasillos|teal]], la alcaldesa saludó a los comerciantes.', idea: 'Dos acciones a la vez: = mientras paseaba.', en: 'Time: placed first and followed by a comma, it frames the main event as happening at the same time.' },
            { tone: 'teal', label: 'CAUSA · ¿POR QUÉ?', sentence: '[[Siendo sábado|teal]], el mercado se llenó desde las ocho.', idea: 'Explica el hecho: = como era sábado.', en: 'Cause: the gerund gives the reason for a real fact, much like «como» + a finite verb.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Siendo sábado, el mercado se llenó desde las ocho». ¿Qué significa «siendo sábado»?', options: ['Si era sábado', 'Como era sábado', 'Aunque era sábado'], answer: 1, why: 'El resultado es un hecho real y pasado, y el gerundio lo explica: es una causa (= como era sábado).', en: 'A gerund in front of a real, past fact usually reads as its cause.' },
            { prompt: '¿Qué gerundio dice CÓMO se hizo algo?', options: ['Paseando por los pasillos, la alcaldesa saludó a los comerciantes.', 'Los vecinos entraron aplaudiendo.', 'Siendo sábado, el mercado se llenó.'], answer: 1, why: 'El gerundio pegado al verbo, sin coma, suele expresar el modo: entraron así, aplaudiendo.', en: 'Which gerund tells you HOW something was done?' },
          ] },
        ] },
        { title: 'Siete lecturas · Seven readings', mascot: '/brand/mascot/studying.webp', coach: '¿Pegado al verbo o delante con coma? Next to the verb, or in front with a comma?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'GERUNDIO INTERNO Y GERUNDIO PERIFÉRICO', question: '¿El gerundio va pegado al verbo o delante de la oración, separado por una coma?', en: 'A gerund inside the predicate, with no pause, usually answers “how?” or “by what means?”. A gerund placed in front and set off by a comma builds a frame for the whole sentence: when, why, under what condition, or despite what. The gerund has no tense or person of its own, so the context decides.', formula: ['verbo + gerundio (sin coma)  → modo o medio: entró corriendo, aprendió escuchando', 'gerundio + coma + oración  → marco: tiempo, causa, condición, concesión'],
            meaning: 'Dentro del predicado, sin pausa, el gerundio contesta casi siempre a **¿cómo?** o **¿de qué manera lo consiguió?** Delante de la oración y separado por coma, crea un **marco**: cuándo, por qué, con qué condición o a pesar de qué. El gerundio no tiene tiempo ni persona: su sujeto suele ser el de la oración principal y su valor depende del contexto.',
            examples: [
              { es: 'Ramiro [[consiguió la foto subiéndose|teal]] a una escalera.', en: 'Ramiro got the shot by climbing a ladder: means, how he managed it.' },
              { es: 'Óscar [[contestó sonriendo|teal]] a las preguntas de la directora.', en: 'Óscar answered the editor’s questions with a smile: manner.' },
              { es: '[[Saliendo del ayuntamiento|teal]], Óscar recibió la llamada de Lucía.', en: 'As he was leaving the town hall, Óscar got Lucía’s call: a time frame.' },
              { es: '[[Hablando claro|teal]], nos entenderemos mejor.', en: 'If we speak plainly, we’ll understand each other better: a condition, because the result lies in the future.' },
            ],
            note: 'Los pronombres van pegados al gerundio y este lleva tilde: **subiéndose**, **sabiéndolo**, **diciéndoselo**.' },
          { kind: 'table', title: 'Siete lecturas del gerundio · Seven readings of the gerund', head: ['Valor', 'Ejemplo', 'Con verbo conjugado'], rows: [
            ['**Modo**', 'Óscar llegó corriendo a la redacción.', 'llegó así: corriendo'],
            ['**Medio**', 'Ramiro aprendió fotografía mirando a los veteranos.', 'aprendió gracias a que miraba a los veteranos'],
            ['**Simultaneidad**', 'Paseando por el centro, Lucía vio a Luis.', 'mientras paseaba por el centro'],
            ['**Anterioridad** (compuesto)', 'Habiendo cerrado la portada, la directora se fue a casa.', 'después de cerrar la portada'],
            ['**Causa**', 'Siendo tan tarde, Lucía dejó la revisión para mañana.', 'como era tan tarde'],
            ['**Condición**', 'Hablando claro, nos entenderemos mejor.', 'si hablamos claro'],
            ['**Concesión** (aun / incluso)', 'Aun sabiéndolo, la fuente no quiso confirmar el dato.', 'aunque lo sabía'],
          ], note: 'El gerundio simple indica algo **simultáneo** o inmediatamente anterior («Tomando el bolso, salió»). Para algo claramente anterior se usa el compuesto: **habiendo** + participio.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Óscar consiguió la entrevista insistiendo durante semanas». ¿Qué valor tiene el gerundio?', options: ['Medio: así la consiguió', 'Concesión', 'Condición'], answer: 0, why: 'Va pegado al verbo y explica de qué manera lo logró: insistiendo. Es el medio.', en: 'Óscar got the interview by insisting for weeks: what is the gerund doing?' },
            { prompt: '¿En qué frase el gerundio crea un marco de tiempo?', options: ['La directora aprendió el oficio corrigiendo.', 'Bajando las escaleras, la directora recordó el titular.', 'La directora bajó las escaleras corriendo.'], answer: 1, why: 'Delante, con coma y con un hecho pasado: = mientras bajaba las escaleras. Los otros dos son modo y medio.', en: 'Which gerund sets a time frame?' },
          ] },
        ] },
        { title: 'El verbo principal decide · The main clause decides', mascot: '/brand/mascot/standing.webp', coach: 'Causa, condición o concesión. Cause, condition or concession.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CAUSA, CONDICIÓN O CONCESIÓN', question: '¿El resultado es un hecho, una hipótesis o algo que ocurre a pesar del gerundio?', en: 'The same front gerund can be read in three ways. Before a real fact it gives the cause; before a future, conditional or command it sets a condition (you saw this in class 172); with aun or incluso it becomes concessive: “even though”.', formula: ['gerundio + hecho real  → causa: viviendo en el centro, no necesito coche', 'gerundio + futuro / condicional / imperativo  → condición: viviendo en el centro, no necesitarías coche', 'aun / incluso + gerundio  → concesión: aun viviendo en el centro, usa el coche para todo'],
            meaning: 'Es el mismo gerundio y son tres relaciones distintas: la decide la **oración principal**. Con un hecho real, causa; con un resultado futuro o hipotético, condición; con **aun** o **incluso** delante, concesión: algo que podría impedir el resultado y no lo impide.',
            examples: [
              { es: '[[Viviendo en el centro|teal]], Lucía no necesita coche.', en: 'Since she lives downtown, Lucía doesn’t need a car: cause.' },
              { es: '[[Viviendo en el centro|teal]], Óscar no necesitaría coche.', en: 'If he lived downtown, Óscar wouldn’t need a car: condition, signalled by the conditional.' },
              { es: '[[Aun viviendo en el centro|teal]], Ramiro usa el coche para todo.', en: 'Even though he lives downtown, Ramiro drives everywhere: concession.' },
              { es: '[[Incluso cobrando menos|teal]], Óscar prefiere el periodismo local.', en: 'Even earning less, Óscar prefers local journalism: incluso works like aun.' },
            ],
            note: '**Aun** sin tilde significa «incluso»: «Aun sabiéndolo, calló». **Aún** con tilde significa «todavía»: «Aún está escribiendo». En negativo se usa **ni aun** o **ni siquiera** + gerundio: «Ni siquiera insistiendo consiguió la cita».' },
          { kind: 'compare', title: '¿Quién pasea? · Who is walking?', columns: [
            { tone: 'teal', label: 'GERUNDIO DELANTE', sentence: '[[Paseando por el centro|teal]], vi a Luis.', idea: 'Paseaba yo: el gerundio comparte el sujeto de la oración principal.', en: 'In front, the gerund takes the subject of the main clause: I was the one walking.' },
            { tone: 'neutral', label: 'GERUNDIO DETRÁS DEL OBJETO', sentence: 'Vi a Luis paseando por el centro.', idea: 'Lo normal es entender que paseaba Luis: con «ver», «oír», «encontrar», el gerundio se refiere al objeto.', en: 'After a perception verb and its object, the usual reading is that Luis was walking; if you mean yourself, move the gerund to the front.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Ahorrando un poco cada mes, podrás comprarte la cámara». ¿Qué valor tiene el gerundio?', options: ['Concesión: aunque ahorras', 'Condición: si ahorras', 'Causa: como ahorras'], answer: 1, why: 'El resultado es futuro (podrás): el gerundio equivale a «si ahorras».', en: 'A future result turns the gerund into a condition.' },
            { prompt: '«Aun ganando poco, Ramiro adora su trabajo». ¿Qué significa?', options: ['Como gana poco, lo adora.', 'Todavía gana poco, pero lo adora.', 'Aunque gana poco, lo adora.'], answer: 2, why: '«Aun» sin tilde + gerundio = concesión (aunque gana poco). «Todavía» sería «aún», con tilde, y no forma una concesión.', en: 'Aun without an accent means “even”: a concession.' },
          ] },
        ] },
        { title: 'Quién y cuándo · Subject and time', mascot: '/brand/mascot/speaking.webp', coach: 'Sujeto detrás; compuesto para lo anterior. Subject after; compound for what came before.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SUJETO PROPIO Y GERUNDIO COMPUESTO', question: '¿El gerundio tiene un sujeto distinto? ¿Su acción es claramente anterior?', en: 'Without an expressed subject, the gerund shares the subject of the main clause. If it has its own subject, that subject goes after the gerund, never before it. For a clearly earlier action, use the compound gerund: habiendo + past participle.', formula: ['gerundio + SUJETO  → estando yo presente, nadie protestó', 'habiendo + participio  → anterioridad: habiendo leído el informe, firmó'],
            meaning: 'Si el gerundio tiene **otro sujeto**, este va **detrás**: «Estando yo presente…», «Faltando diez minutos…». Si no lo tiene, el lector entiende que su sujeto es el de la oración principal; si no lo es, la frase falla. El gerundio **compuesto** (habiendo + participio) presenta una acción ya terminada antes de la principal; suele añadir un matiz de causa.',
            examples: [
              { es: '[[Estando yo presente|blue]], nadie se atrevió a criticar el titular.', en: 'With me there, nobody dared criticise the headline: the gerund has its own subject, placed after it.' },
              { es: '[[Faltando diez minutos|blue]] para el cierre, entró una noticia de última hora.', en: 'With ten minutes to go before the deadline, a breaking story came in.' },
              { es: '[[Habiendo leído|blue]] las tres versiones, Lucía eligió la más breve.', en: 'Having read all three versions, Lucía chose the shortest one: a finished, earlier action.' },
              { es: '[[Habiéndolo consultado|blue]] con la directora, Óscar cambió el titular.', en: 'Having checked with the editor-in-chief, Óscar changed the headline.' },
            ],
            note: 'El pronombre va pegado a «habiendo»: **habiéndolo** consultado, no «lo habiendo consultado».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elige la versión correcta en la lengua estándar.', options: ['Estando yo de viaje, cerraron la sección de cultura.', 'Estado yo de viaje, cerraron la sección de cultura.', 'Yo estando de viaje, cerraron la sección de cultura.'], answer: 0, why: 'El sujeto propio del gerundio va detrás: estando yo. «Estado» es un participio y no forma este marco.', en: 'While I was away, they shut down the culture section: where does the subject go?' },
            { prompt: '___ el texto tres veces, Óscar lo envió tranquilo.', options: ['Revisado', 'Habiendo revisando', 'Habiendo revisado'], answer: 2, why: 'La revisión es anterior al envío: gerundio compuesto, habiendo + participio (revisado).', en: 'Having checked the text three times, Óscar sent it off calmly.' },
          ] },
        ] },
        { title: 'Lo que la norma desaconseja · What the norm advises against', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Ni después ni como adjetivo. Not for “afterwards”, not as an adjective.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'POSTERIORIDAD Y GERUNDIO ESPECIFICATIVO', question: '¿El gerundio cuenta algo posterior o describe a un sustantivo como si fuera un adjetivo?', en: 'Two uses are common in the press and in official texts, but the RAE advises against them. The gerund should not report an event that happens clearly later (use y + finite verb), and it should not describe a noun the way a relative clause does (use que + finite verb). The second is often a calque of English -ing.', formula: ['✗ cerró en marzo, reabriendo en septiembre  → ✓ cerró en marzo [y reabrió] en septiembre', '✗ una caja conteniendo libros  → ✓ una caja [que contiene] libros'],
            meaning: 'Según la norma, el gerundio expresa simultaneidad o anterioridad, no un hecho **claramente posterior**: para eso, **y** + verbo conjugado u otra oración. Tampoco debe funcionar como un adjetivo que clasifica al sustantivo: para eso, una **relativa** con «que». Es el llamado gerundio especificativo, frecuente en anuncios y textos administrativos.',
            examples: [
              { es: '✗ El autobús se averió a mediodía, llegando a Pátzcuaro cinco horas después. → ✓ …[[y llegó|orange]] a Pátzcuaro cinco horas después.', en: 'Five hours separate the two events: a gerund can’t carry that later event, so use y + verb.' },
              { es: '✗ Recibimos una caja conteniendo libros antiguos. → ✓ …una caja [[que contenía|orange]] libros antiguos.', en: 'The gerund is classifying the box, which is the job of a relative clause.' },
              { es: '✗ El ayuntamiento publicó un decreto regulando los horarios. → ✓ …un decreto [[que regula|orange]] los horarios.', en: 'Typical of official prose and advised against: «que regula».' },
              { es: '✗ Se busca fotógrafo teniendo experiencia en prensa. → ✓ Se busca fotógrafo [[que tenga|orange]] experiencia en prensa.', en: 'In job ads, the relative clause takes the subjunctive because the person is not yet identified.' },
            ],
            note: 'Cuando la segunda acción es inmediata o es efecto directo de la primera («Salió dando un portazo»; «La tormenta derribó un árbol, cortando la carretera») muchos gramáticos lo admiten. En un texto cuidado, si hay duda, **y** + verbo conjugado siempre es correcto.' },
          { kind: 'table', title: 'Excepciones y casos límite · Exceptions and borderline cases', head: ['Caso', 'Ejemplo', 'Valoración'], rows: [
            ['**hirviendo**, **ardiendo**', 'agua hirviendo; agarrarse a un clavo ardiendo', 'Admitidos: funcionan como adjetivos. Son los dos casos clásicos.'],
            ['Pies de foto y títulos', '«Comerciantes celebrando la reapertura»; «Mujer leyendo una carta»', 'Admitidos: describen lo que se ve en la imagen.'],
            ['Verbos de percepción o representación + objeto', 'La foto muestra a la alcaldesa cortando la cinta.', 'Correcto: el gerundio se refiere al objeto de ver, oír, mostrar, pintar…'],
            ['Gerundio que clasifica a un sustantivo', '«una foto mostrando el mercado»; «un decreto reglamentando…»', 'Frecuentes, pero desaconsejados: **que muestra**, **que regula**.'],
          ] },
          { kind: 'decide', title: '¿Puedo usar el gerundio? · Can I use the gerund?', steps: [
            { q: '¿La acción del gerundio es simultánea a la principal o anterior a ella?', yes: 'next', no: 'Si es claramente posterior, usa «y» + verbo conjugado: «cerró en marzo y reabrió en septiembre».' },
            { q: '¿El gerundio acompaña a un verbo o a toda la oración, y no clasifica a un sustantivo?', yes: 'next', no: 'Usa una relativa: «una caja que contiene libros». Excepciones: hirviendo, ardiendo y los pies de foto descriptivos.' },
            { q: '¿Su sujeto es el de la oración principal, o está expreso detrás del gerundio?', yes: 'Adelante: el gerundio es correcto.', no: 'Usa un verbo conjugado: «Como Sofía era nueva, el director le presentó a todo el equipo».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta según la norma?', options: ['Se busca diseñador teniendo experiencia en prensa.', 'Pie de foto: «Vecinos haciendo cola ante el mercado».', 'Recibimos un paquete conteniendo las acreditaciones.'], answer: 1, why: 'Los pies de foto que describen la escena admiten el gerundio. Las otras dos son gerundios especificativos: que contenía, que tenga.', en: 'Which sentence follows the norm?' },
            { prompt: '«El mercado cerró en marzo, reabriendo en septiembre». ¿Por qué se corrige?', options: ['Porque un gerundio nunca puede ir después de una coma.', 'Porque «reabrir» no tiene gerundio.', 'Porque el gerundio presenta un hecho seis meses posterior.'], answer: 2, why: 'Es un gerundio de posterioridad: la reapertura ocurre mucho después del cierre. Se dice «y reabrió en septiembre».', en: 'Why does this sentence need correcting?' },
          ] },
        ] },
        { title: 'El participio y los errores frecuentes · The participle and common mistakes', mascot: '/brand/mascot/portrait.webp', coach: 'Concuerda con el sujeto. It agrees with the subject.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PARTICIPIO PREDICATIVO', question: '¿Un participio, delante y con coma, describe al sujeto y explica algo de la oración?', en: 'A participle (or adjective) set off at the start describes the subject and agrees with it. Like the gerund, it is read through context: a state that explains the action (often cause), a condition, or with aun / aunque a concession.', formula: ['participio concordado + coma + oración: Cansada, Lucía se fue a dormir', 'cansada (Lucía) · cansados (los fotógrafos) · cansadas (las correctoras)'],
            meaning: 'El participio **concuerda en género y número con el sujeto** de la oración principal y presenta un estado. Según el contexto, ese estado se lee como **causa** (cansada = como estaba cansada), **condición** (bien editada = si hubiera estado bien editada) o, con **aun** o **aunque**, **concesión**.',
            examples: [
              { es: '[[Cansada|violet]], Lucía se fue a dormir.', en: 'Tired, Lucía went to bed: her state explains why.' },
              { es: '[[Preocupado por el titular|violet]], Óscar llamó a la directora.', en: 'Worried about the headline, Óscar called the editor-in-chief: a cause.' },
              { es: '[[Bien editada|violet]], la crónica habría ido en portada.', en: 'Properly edited, the story would have made the front page: a condition, shown by the conditional perfect.' },
              { es: '[[Aun agotados|violet]], los fotógrafos se quedaron hasta el final.', en: 'Exhausted as they were, the photographers stayed until the end: a concession.' },
            ],
            note: 'En «**Terminada la reunión**, nos marchamos» el participio tiene su propio sustantivo (la reunión): es una construcción absoluta, que estudias en la clase 177. Con la postura se usa el participio, no el gerundio: **sentado**, **apoyado**, **tumbado**.' },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El mercado cerró por obras en marzo, reabriendo en septiembre.', right: 'El mercado cerró por obras en marzo y reabrió en septiembre.', why: 'Gerundio de posterioridad: seis meses después no es simultáneo. Se usa «y» + verbo conjugado.' },
            { wrong: 'Llegó un sobre conteniendo las bases del concurso.', right: 'Llegó un sobre que contenía las bases del concurso.', why: 'Gerundio especificativo, calco del inglés: el gerundio no clasifica sustantivos. Se usa una relativa.' },
            { wrong: 'Yo estando presente, nadie protestó.', right: 'Estando yo presente, nadie protestó.', why: 'El sujeto propio del gerundio va detrás de él.' },
            { wrong: 'Siendo nueva en el periódico, el director le presentó a todo el equipo a Sofía.', right: 'Como Sofía era nueva en el periódico, el director le presentó a todo el equipo.', why: 'El gerundio se lee con el sujeto principal: así, el nuevo sería el director. Con sujetos distintos, verbo conjugado.' },
            { wrong: 'Aún sabiéndolo, el concejal no dijo nada.', right: 'Aun sabiéndolo, el concejal no dijo nada.', why: 'En la concesión, «aun» (= incluso) no lleva tilde. «Aún» significa «todavía».' },
            { wrong: 'Cansado, Lucía se fue a dormir.', right: 'Cansada, Lucía se fue a dormir.', why: 'El participio predicativo concuerda con el sujeto: Lucía, femenino singular.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___, la directora decidió cambiar la portada.', options: ['Convencido', 'Convenciendo', 'Convencida'], answer: 2, why: 'Participio predicativo concordado con el sujeto (la directora): convencida. «Convenciendo» pediría un objeto: ¿a quién convence?', en: 'Convinced, the editor-in-chief decided to change the front page.' },
            { prompt: '«Emocionados, los comerciantes abrieron sus puestos». ¿Qué expresa «emocionados»?', options: ['Una acción posterior a la apertura', 'El estado de los comerciantes al abrir', 'Una condición para abrir'], answer: 1, why: 'El participio describe cómo estaban los comerciantes mientras abrían: un estado que acompaña a la acción.', en: 'What does the participle tell you here?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una frase propia con «viviendo / trabajando…» y la lee tres veces cambiando la oración principal: causa, condición y concesión (con «aun»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La crónica de Óscar', coach: 'Toca cada forma marcada. Tap each marked form.',
      steps: [
        { title: 'Cuarenta minutos para el cierre · Forty minutes to deadline', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía y tu alumno es Óscar (y Ramiro). Después tu alumno toca cada forma marcada y la explica con un verbo conjugado.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y explícala con un verbo conjugado. (Tap each marked form and rephrase it with a finite verb.)' } },
          { kind: 'explore', title: 'Primera portada', setting: 'Jueves, nueve de la noche, en la redacción de La Crónica del Valle. Faltan cuarenta minutos para el cierre. Lucía revisa la crónica de Óscar sobre la reapertura del mercado. Se tratan de tú. (Thursday, 9 p.m., forty minutes before the paper goes to press.)', lines: [
            { who: 'Óscar', text: 'Lucía, ¿ya tienes mi crónica? Es mi primera portada y estoy hecho un manojo de nervios.', en: 'Lucía, have you got my story? It’s my first front page and I’m a bundle of nerves.' },
            { who: 'Lucía', text: 'La estoy leyendo. Empiezo por lo bueno: «Los vecinos [[entraron aplaudiendo|teal]]». Se ve la escena.', en: 'I’m reading it. Let me start with the good part: “Residents came in applauding.” You can picture it.' },
            { who: 'Óscar', text: '¿Y el primer párrafo? «El mercado cerró por obras en marzo, reabriendo ayer sus puertas».', en: 'And the first paragraph? “The market closed for works in March, reopening its doors yesterday.”' },
            { who: 'Lucía', text: 'Ahí no. Entre una cosa y otra pasan seis meses, y el gerundio no cuenta lo que viene después. Pon «cerró por obras en marzo [[y reabrió|orange]] ayer sus puertas».', en: 'Not there. Six months pass between the two events, and a gerund can’t report what comes later. Write “closed in March and reopened yesterday”.' },
            { who: 'Óscar', text: 'De acuerdo. ¿Y lo de la alcaldesa? «[[Paseando por los pasillos|teal]], saludó a los comerciantes».', en: 'OK. And the bit about the mayor? “Walking through the aisles, she greeted the stallholders.”' },
            { who: 'Lucía', text: 'Perfecto: las dos cosas pasan a la vez. Lo que cambiaría es «un puesto vendiendo flores»: mejor «[[un puesto que vende|orange]] flores».', en: 'Perfect: both things happen at once. What I’d change is “a stall selling flowers”: better with a relative clause, «que vende».' },
            { who: 'Ramiro', text: 'Lucía, perdona. Pie de foto de portada: «[[Comerciantes celebrando|teal]] la reapertura». ¿Lo dejo así?', en: 'Sorry, Lucía. Front-page caption: “Stallholders celebrating the reopening.” Shall I leave it?' },
            { who: 'Lucía', text: 'Déjalo: en un pie de foto que describe la escena, el gerundio está admitido. Lo que no pondría nunca es «Foto mostrando el mercado».', en: 'Leave it: in a caption that describes the scene, the gerund is accepted. What I’d never write is “Photo showing the market”.' },
            { who: 'Ramiro', text: 'Lo suponía, pero, [[habiendo visto|blue]] tus correcciones de la semana pasada, prefería preguntar.', en: 'I thought so, but having seen your corrections last week, I’d rather ask.' },
            { who: 'Óscar', text: 'Yo igual. [[Aun sabiendo|teal]] que lo vas a revisar tú, tengo miedo de equivocarme.', en: 'Same here. Even knowing you’ll check it, I’m scared of getting it wrong.' },
            { who: 'Lucía', text: 'Tranquilo. [[Estando yo de guardia|blue]], no se escapa ni una errata. Eso sí, a las diez me voy: [[agotada|violet]] como estoy, ya no veo ni las comas.', en: 'Relax. With me on duty, not a single typo gets through. Mind you, I’m off at ten: worn out as I am, I can’t even see the commas any more.' },
            { who: 'Óscar', text: 'Entonces le doy un último repaso. [[Trabajando rápido|teal]], te la mando en diez minutos.', en: 'Then I’ll give it one last read. If I work fast, you’ll have it in ten minutes.' },
          ], notes: {
            'entraron aplaudiendo': 'Gerundio interno, sin coma: modo. Dice cómo entraron los vecinos.',
            'y reabrió': 'La alternativa al gerundio de posterioridad: «y» + verbo conjugado, porque la reapertura ocurre seis meses después del cierre.',
            'Paseando por los pasillos': 'Gerundio delante, con coma, y hecho pasado: simultaneidad (= mientras paseaba). Su sujeto es el de «saludó»: la alcaldesa.',
            'un puesto que vende': 'La relativa sustituye al gerundio especificativo «un puesto vendiendo»: el gerundio no clasifica sustantivos.',
            'Comerciantes celebrando': 'Pie de foto descriptivo: uno de los casos en que el gerundio junto a un sustantivo está admitido.',
            'habiendo visto': 'Gerundio compuesto: acción anterior (ya vio las correcciones), con matiz de causa.',
            'Aun sabiendo': 'Aun (sin tilde) + gerundio: concesión = aunque sé. El sujeto, yo, es el mismo que el de «tengo miedo».',
            'Estando yo de guardia': 'Gerundio con sujeto propio, colocado detrás: «yo». Valor de condición o causa: mientras yo esté de guardia.',
            'agotada': 'Participio predicativo concordado con Lucía. «Agotada como estoy» es una fórmula causal muy natural: como estoy tan agotada.',
            'Trabajando rápido': 'Gerundio con resultado futuro (en el presente «te la mando»): condición, = si trabajo rápido.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué corrige Lucía el primer párrafo?', options: ['Porque la frase es demasiado larga.', 'Porque el gerundio cuenta algo que ocurrió seis meses después.', 'Porque falta el nombre del mercado.'], answer: 1, why: '«Entre una cosa y otra pasan seis meses, y el gerundio no cuenta lo que viene después».', en: 'Why does Lucía correct the first paragraph?' },
            { prompt: '¿Qué decide Lucía sobre el pie de foto de Ramiro?', options: ['Lo quita de la portada.', 'Lo deja, porque describe la escena.', 'Lo cambia por «Foto mostrando el mercado».'], answer: 1, why: '«Déjalo: en un pie de foto que describe la escena, el gerundio está admitido».', en: 'What does Lucía decide about Ramiro’s caption?' },
            { prompt: '¿Por qué se va Lucía a las diez?', options: ['Porque está agotada.', 'Porque Óscar se queda de guardia.', 'Porque la imprenta cierra a las diez.'], answer: 0, why: '«Agotada como estoy, ya no veo ni las comas».', en: 'Why is Lucía leaving at ten?' },
          ] },
        ] },
        { title: 'Los pies de foto · The captions', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Óscar, Lucía y Ramiro terminan la página · Finishing the page', lines: [
            { who: 'Óscar', text: '«La alcaldesa recorrió el mercado ___ con los comerciantes». ¿Así?', options: ['conversada', 'conversando', 'conversó'], answer: 1, why: 'Gerundio interno de modo y simultaneidad: recorrió el mercado mientras conversaba.' },
            { who: 'Lucía', text: 'Bien. Y no pongas «un cartel anunciando las ofertas»: mejor «un cartel ___ las ofertas».', options: ['anunciado', 'anunciando', 'que anuncia'], answer: 2, why: 'El gerundio no clasifica sustantivos: se usa una relativa, que anuncia.' },
            { who: 'Ramiro', text: 'Segunda foto: «La alcaldesa ___ un ramo de flores de manos de una comerciante».', options: ['recibiendo', 'recibida', 'que recibió'], answer: 0, why: 'Pie de foto que describe la escena: el gerundio está admitido.' },
            { who: 'Óscar', text: 'Y el cierre de la crónica: «___ el mercado tantos meses cerrado, los vecinos llenaron los pasillos».', options: ['Habiendo estado', 'Estado', 'Estuvo'], answer: 0, why: 'Gerundio compuesto con sujeto propio detrás (el mercado): acción anterior con matiz de causa.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno describe en voz alta una foto que tiene en el teléfono con un pie de foto en gerundio y explica por qué ahí está admitido.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Lee el contexto antes de decidir. Read the context before you decide.',
      steps: [
        { title: 'La edición del viernes · Friday’s edition', blocks: [
          { kind: 'choice', items: [
            { context: 'Óscar resume una entrevista. (Óscar sums up an interview.)', prompt: 'La entrevistada contestó ___, sin mirar sus notas.', options: ['sonreída', 'que sonreía', 'sonriendo'], answer: 2, why: 'Gerundio interno de modo: contestó así, sonriendo. «Que sonreía» necesitaría un sustantivo al que referirse.', en: 'The interviewee answered with a smile, without looking at her notes.' },
            { context: 'La reunión de portada fue tensa. (The front-page meeting was tense.)', prompt: '___ la directora en la reunión, nadie se atrevió a criticar la portada.', options: ['Estando', 'Estaba', 'Estado'], answer: 0, why: 'Gerundio con sujeto propio detrás (la directora): marco de causa o tiempo.', en: 'With the editor-in-chief at the meeting, nobody dared to criticise the front page.' },
            { context: 'Un portal digital publicó un bulo. (A website published a hoax.)', prompt: 'Aun ___ que la noticia era falsa, el portal la publicó.', options: ['sabiendo', 'sabía', 'sabido'], answer: 0, why: '«Aun» + gerundio forma la concesión: aunque sabía. Detrás de «aun» concesivo no va un verbo conjugado.', en: 'Even though it knew the story was false, the website published it.' },
            { context: 'Lucía mira el calendario. (Lucía looks at the schedule.)', prompt: '«Dedicándole una hora más, Óscar terminaría el reportaje». ¿Qué valor tiene el gerundio?', options: ['Condición', 'Causa', 'Modo'], answer: 0, why: 'El resultado es hipotético (terminaría): = si le dedicara una hora más.', en: 'If he spent one more hour on it, Óscar would finish the feature.' },
            { context: 'Una rectificación. (A correction.)', prompt: 'El periódico publicó la entrevista el lunes ___ el miércoles una rectificación.', options: ['publicando', 'publicado', 'y publicó'], answer: 2, why: 'La rectificación es dos días posterior: «y» + verbo conjugado, no gerundio de posterioridad.', en: 'The paper ran the interview on Monday and printed a correction on Wednesday.' },
          ] },
        ] },
        { title: '¿Qué valor tiene? · What does it mean?', blocks: [
          { kind: 'classify', title: 'Clasifica cada gerundio · Classify each gerund', categories: [
            { id: 'modo', label: 'MODO O MEDIO · ¿cómo?', tone: 'teal' },
            { id: 'tiempo', label: 'TIEMPO · cuándo, antes', tone: 'blue' },
            { id: 'causa', label: 'CAUSA · como…', tone: 'violet' },
            { id: 'condicion', label: 'CONDICIÓN · si…', tone: 'orange' },
            { id: 'concesion', label: 'CONCESIÓN · aunque…', tone: 'neutral' },
          ], items: [
            { text: 'Óscar aprendió el oficio corrigiendo textos ajenos.', answer: 'modo', why: 'Gerundio interno: el medio por el que aprendió.' },
            { text: 'Saliendo de la imprenta, Ramiro se encontró con la directora.', answer: 'tiempo', why: 'Delante, con un hecho pasado: = cuando salía de la imprenta.' },
            { text: 'Habiendo entregado la crónica, Óscar se fue a cenar.', answer: 'tiempo', why: 'Gerundio compuesto: = después de entregar la crónica.' },
            { text: 'Conociendo bien el mercado, Óscar sabía a quién entrevistar.', answer: 'causa', why: 'Explica un hecho real: = como conocía bien el mercado.' },
            { text: 'Leyendo el texto en voz alta, notarás los gerundios dudosos.', answer: 'condicion', why: 'Resultado futuro (notarás): = si lees el texto en voz alta.' },
            { text: 'Incluso trabajando de noche, el equipo no llegó al cierre.', answer: 'concesion', why: '«Incluso» + gerundio: = aunque trabajó de noche.' },
            { text: 'Ramiro entró en la redacción hablando por teléfono.', answer: 'modo', why: 'Gerundio interno, sin coma: cómo entró.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La alcaldesa inauguró el puente en mayo, cerrándose al tráfico en agosto por unas grietas.', ok: false, options: ['La alcaldesa inauguró el puente en mayo, habiéndose cerrado al tráfico en agosto por unas grietas.', 'La alcaldesa inauguró el puente en mayo, cerrado al tráfico en agosto por unas grietas.', 'La alcaldesa inauguró en mayo el puente, que se cerró al tráfico en agosto por unas grietas.'], answer: 2, why: 'Gerundio de posterioridad: el cierre es tres meses posterior. Una relativa (o «y en agosto se cerró») cuenta bien la sucesión.' },
            { sentence: 'El ayuntamiento aprobó una ordenanza regulando el ruido nocturno.', ok: false, options: ['El ayuntamiento aprobó una ordenanza regulada el ruido nocturno.', 'El ayuntamiento aprobó una ordenanza que regula el ruido nocturno.', 'El ayuntamiento aprobó una ordenanza, regulándose el ruido nocturno.'], answer: 1, why: 'Gerundio especificativo, típico de los textos administrativos: se sustituye por una relativa, que regula.' },
            { sentence: 'Yo estando de guardia, entró la noticia del apagón.', ok: false, options: ['Estando yo de guardia, entró la noticia del apagón.', 'Estado yo de guardia, entró la noticia del apagón.', 'Yo estado de guardia, entró la noticia del apagón.'], answer: 0, why: 'El sujeto propio del gerundio va detrás: estando yo.' },
            { sentence: 'Los fotógrafos esperaban sentados a la puerta del ayuntamiento.', ok: true, why: 'Correcta: para la postura se usa el participio (sentados), concordado con el sujeto.' },
            { sentence: 'En la cocina de la redacción siempre hay agua hirviendo para el café.', ok: true, why: 'Correcta: «agua hirviendo» es una de las excepciones admitidas; «hirviendo» funciona como adjetivo.' },
            { sentence: 'Siendo nueva en el periódico, el director le explicó a Sofía cómo funciona el cierre.', ok: false, options: ['Siendo nueva en el periódico, al director le explicó Sofía cómo funciona el cierre.', 'Sido nueva en el periódico, el director le explicó a Sofía cómo funciona el cierre.', 'Como Sofía era nueva en el periódico, el director le explicó cómo funciona el cierre.'], answer: 2, why: 'El gerundio toma el sujeto de la oración principal (el director). Como la nueva es Sofía, se usa un verbo conjugado.' },
          ] },
        ] },
        { title: 'El grupo de la redacción · The newsroom chat', blocks: [
          { kind: 'chat-fill', title: 'Viernes, diez de la mañana · Friday, 10 a.m.', lines: [
            { who: 'Alicia', text: '___ tan buena la crónica del mercado, la subimos a portada también en la web.', options: ['Sido', 'Ser', 'Siendo'], answer: 2, why: 'Gerundio de causa ante un hecho real: = como es tan buena.' },
            { who: 'Óscar', text: '¡Gracias! Aun ___ agotado, anoche la repasé otra vez.', options: ['estado', 'estando', 'estar'], answer: 1, why: '«Aun» + gerundio: concesión, = aunque estaba agotado.' },
            { who: 'Lucía', text: 'Ramiro, en la galería cambia «Imagen mostrando la fachada» por «Imagen ___ la fachada».', options: ['que muestra', 'mostrada', 'mostrando'], answer: 0, why: 'Fuera de los pies de foto descriptivos, el gerundio no clasifica sustantivos: que muestra.' },
            { who: 'Alicia', text: 'Óscar, el lunes cubres la sesión del cabildo. ___ las intervenciones, tendrás la crónica en una hora.', options: ['Grabando', 'Grabado', 'Grabar'], answer: 0, why: 'Gerundio con resultado futuro (tendrás): condición, = si grabas las intervenciones.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Aun', 'sabiéndolo', 'la', 'concejala', 'no', 'dijo', 'nada'], accept: ['Aun sabiéndolo la concejala no dijo nada', 'La concejala no dijo nada aun sabiéndolo'], en: 'Even though she knew, the councillor said nothing.' },
            { tiles: ['Los', 'vecinos', 'entraron', 'en', 'el', 'mercado', 'cantando'], accept: ['Los vecinos entraron en el mercado cantando', 'Los vecinos entraron cantando en el mercado'], en: 'The residents came into the market singing.' },
            { tiles: ['Estando', 'yo', 'presente', 'nadie', 'criticó', 'la', 'portada'], accept: ['Estando yo presente nadie criticó la portada', 'Nadie criticó la portada estando yo presente'], en: 'With me there, nobody criticised the front page.' },
          ] },
        ] },
        { title: 'Del gerundio al verbo conjugado · Gerund and finite verb', blocks: [
          { kind: 'rewrite', title: 'Transforma · Transform', items: [
            { prompt: 'Como era festivo, el mercado abrió a las diez.', instruction: 'Usa un gerundio de causa. Empieza: «Siendo…».', accept: ['Siendo festivo, el mercado abrió a las diez'] },
            { prompt: 'Aunque conocía los datos, el concejal no los comentó.', instruction: 'Usa «aun» o «incluso» + gerundio.', accept: ['Aun conociendo los datos, el concejal no los comentó', 'Incluso conociendo los datos, el concejal no los comentó'] },
            { prompt: 'El periódico cambió de diseño en 2019, ganando un premio dos años después.', instruction: 'Corrige el gerundio de posterioridad con «y» + verbo conjugado.', accept: ['El periódico cambió de diseño en 2019 y ganó un premio dos años después', 'El periódico cambió de diseño en 2019 y dos años después ganó un premio'] },
            { prompt: 'Recibimos un sobre conteniendo las fotos del archivo.', instruction: 'Corrige el gerundio especificativo con una relativa.', accept: ['Recibimos un sobre que contenía las fotos del archivo', 'Recibimos un sobre que contiene las fotos del archivo'] },
            { prompt: 'Mientras revisaba las cifras, Lucía encontró el error.', instruction: 'Usa un gerundio de tiempo. Empieza con el gerundio.', accept: ['Revisando las cifras, Lucía encontró el error'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige tres frases de una noticia real que haya leído esta semana y dice si sus gerundios son correctos y qué valor tienen.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un minuto de estilo', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'El pódcast del periódico · The paper’s podcast', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada gerundio y dice si Lucía lo presenta como correcto o como un uso que conviene evitar. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada gerundio: ¿Lucía lo presenta como correcto o como un uso que conviene evitar? (Note each gerund: correct, or one to avoid?)' } },
          { kind: 'listen', title: 'Un minuto de estilo', channel: 'PÓDCAST · LA CRÓNICA DEL VALLE', src: '/audio/grammar-live/476.mp3',
            before: 'Lucía graba cada jueves una sección breve sobre dudas de redacción para el pódcast del periódico. Hoy habla del gerundio. ¿Qué crees que va a decir: qué usos recomienda y cuáles corrige? (Lucía records a weekly style tip for the paper’s podcast. What will she recommend, and what will she correct?)',
            gist: { prompt: '¿Cuál es la idea principal de la sección? · What is the main idea?', options: ['El gerundio es incorrecto y es mejor no usarlo en prensa.', 'Los pies de foto deben escribirse siempre sin verbo.', 'El gerundio tiene muchas lecturas, pero hay dos usos que conviene evitar.'], answer: 2, why: 'Lucía explica tres valores correctos (modo, causa, concesión) y después dos usos desaconsejados: posterioridad y gerundio especificativo.', en: 'Several valid readings, plus two uses to avoid.' },
            details: [
              { prompt: '¿Qué valor tiene «siendo festivo» en el ejemplo de Lucía?', options: ['Condición', 'Concesión', 'Causa'], answer: 2, why: '«Doy una causa: como era festivo».', en: 'What does «siendo festivo» express in Lucía’s example?' },
              { prompt: '¿Qué significa «Aun lloviendo, la gente hizo cola desde las ocho»?', options: ['Como llovía, la gente hizo cola.', 'Todavía llovía cuando la gente se fue.', 'Llovía, pero la gente hizo cola igualmente.'], answer: 2, why: '«Presento un obstáculo que no impidió nada»: es una concesión.', en: 'What does the concessive example mean?' },
              { prompt: '¿Por qué no funciona «cerró en marzo, reabriendo en septiembre»?', options: ['Porque el gerundio cuenta algo que ocurrió mucho después.', 'Porque «reabriendo» funciona como adjetivo.', 'Porque falta una coma.'], answer: 0, why: '«El gerundio no debe contar algo que ocurrió seis meses después».', en: 'Why is the market sentence wrong?' },
              { prompt: '¿Qué casos acepta Lucía como excepción?', options: ['«Una caja conteniendo documentos».', 'Todos los gerundios de los textos administrativos.', '«Agua hirviendo», «un clavo ardiendo» y los pies de foto descriptivos.'], answer: 2, why: '«Sí: “agua hirviendo”, “un clavo ardiendo” y los pies de foto que describen la escena».', en: 'Which exceptions does Lucía accept?' },
              { prompt: '¿Qué consejo final da Lucía?', options: ['Leer el texto en voz alta antes de entregarlo.', 'Eliminar todos los gerundios de la crónica.', 'Escribir frases más largas.'], answer: 0, why: '«Antes de entregarlo, léanlo en voz alta. Leyéndolo así, encontrarán casi todos los gerundios dudosos».', en: 'What is Lucía’s final tip?' },
            ],
            transcript: 'Bienvenidos a «Un minuto de estilo», el espacio de corrección de La Crónica del Valle. Hoy hablamos del gerundio, una forma pequeña con muchas lecturas. Si escribo «Los vecinos [[entraron aplaudiendo|teal]]», digo cómo entraron. Si escribo «[[Siendo festivo|teal]], el mercado abrió a las diez», doy una causa: como era festivo. Y en «[[Aun lloviendo|teal]], la gente hizo cola desde las ocho», presento un obstáculo que no impidió nada. Ahora, dos usos que conviene evitar. El primero, el gerundio de posterioridad. «El mercado cerró en marzo, reabriendo en septiembre» no funciona: el gerundio no debe contar algo que ocurrió seis meses después. Escriban «cerró en marzo [[y reabrió|orange]] en septiembre». El segundo, el gerundio que hace de adjetivo. «Recibimos una caja conteniendo documentos» es un calco del inglés; lo natural es «una caja [[que contenía|orange]] documentos». ¿Hay excepciones? Sí: «agua hirviendo», «un clavo ardiendo» y los pies de foto que describen la escena, como «Comerciantes celebrando la reapertura». Y un último consejo, válido para cualquier texto: antes de entregarlo, léanlo en voz alta. [[Leyéndolo así|teal]], encontrarán casi todos los gerundios dudosos. Nos escuchamos el próximo jueves.',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es un oyente del pódcast y deja un mensaje de voz: cuenta un gerundio dudoso que ha visto en un anuncio o una noticia, explica qué valor tiene o por qué falla y propone una versión mejor.', self: 'Responde a Lucía en voz alta como oyente: cuenta un gerundio dudoso que hayas visto, explica qué valor tiene o por qué falla y propón una versión mejor. (Reply as a listener with a gerund you’ve spotted.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Cómo, cuándo, por qué y a pesar de qué', coach: 'Elige el valor y deja que el contexto lo marque. Choose the meaning and let the context show it.',
      steps: [
        { title: 'Seis situaciones · Six situations', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales. Si usa un gerundio de posterioridad o con un sujeto confuso, tú preguntas «¿cuándo?» o «¿quién?» y tu alumno reformula.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de usar un gerundio, comprueba que su acción no es posterior y que su sujeto está claro. (Check timing and subject before using a gerund.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo aprendiste algo que hoy haces bien: un idioma, un oficio, una afición? · How did you learn something you’re good at?', followUps: ['¿Qué método no te funcionó?', '¿Cómo se lo enseñarías a otra persona?'], phrases: ['Mejoré mucho [[escuchando|teal]] / [[practicando|teal]]…', 'Lo conseguí [[equivocándome|teal]] mucho…', '[[Habiendo probado|blue]] varios métodos, …'], hint: 'Gerundio interno de medio (mejoré practicando) y compuesto para lo anterior.', example: 'Empecé a cocinar mirando a mi abuela y mejoré equivocándome mucho. Habiendo probado varios cursos en línea, creo que nada sustituye a practicar con alguien al lado.', next: 'Ahora, un encuentro inesperado.' },
            { q: 'Cuenta un encuentro inesperado: alguien a quien viste por casualidad. · Tell us about an unexpected encounter.', followUps: ['¿Quién te vio primero?', '¿Qué estaba haciendo esa persona?'], phrases: ['[[Paseando por…|teal]], me encontré con…', 'Lo vi [[esperando|teal]] el autobús…', '[[Estando yo|blue]] en…, apareció…'], hint: 'Gerundio delante para tu acción (paseando por…, vi); detrás del objeto para la acción del otro (lo vi esperando).', example: 'Paseando por el centro de Guanajuato, me encontré con una compañera de la universidad. La vi primero yo: estaba sentada en una terraza, leyendo el periódico. Estando tan lejos de casa, no me lo podía creer.' },
            { q: '¿Hay algo que sigues haciendo aunque sabes que no te conviene? · Something you keep doing even though you know better?', followUps: ['¿Por qué no lo dejas?', '¿Qué haría falta para cambiarlo?'], phrases: ['[[Aun sabiendo|teal]] que…, sigo…', '[[Incluso durmiendo|teal]] poco, …', '[[Cansado / Cansada|violet]], …'], hint: 'Concesión con aun / incluso + gerundio; participio concordado contigo.', example: 'Aun sabiendo que no debería, sigo mirando el teléfono en la cama. Incluso durmiendo cinco horas, al día siguiente lo repito. Cansada, me prometo cambiar, pero dura poco.' },
            { q: 'Da tres consejos a alguien que empieza en tu trabajo o en tus estudios. · Three tips for a newcomer.', followUps: ['¿Qué error cometiste tú al empezar?', '¿Qué consejo te dieron a ti?'], phrases: ['[[Preguntando|teal]] mucho, aprenderás…', '[[Llegando|teal]] temprano, …', 'Siendo nuevo / nueva, …'], hint: 'Gerundio + futuro o imperativo = condición; gerundio + hecho = causa.', example: 'Preguntando mucho al principio, aprenderás el doble de rápido. Llegando un poco antes, tendrás tiempo para organizarte. Y, siendo nuevo, tienes derecho a preguntarlo todo: aprovéchalo.', teacher: 'Tú preguntas «¿y si no lo hace?» y tu alumno responde con «sin + infinitivo» (clase 172) o con un gerundio.' },
            { q: 'Haz de editor o editora: corrige estas frases y explica por qué. · Be the editor: fix and explain. «Se graduó en 2015, trabajando después en una agencia». «Vendo casa teniendo jardín».', followUps: ['¿Qué gerundio dejarías?', '¿Dónde ves estos errores en tu vida diaria?'], phrases: ['Es un gerundio [[de posterioridad|orange]]: mejor «[[y trabajó|orange]]…».', 'Es un gerundio especificativo: mejor «[[que tiene|orange]]…».', 'Aquí el gerundio es correcto porque…'], hint: 'Posterior → y + verbo; adjetivo → que + verbo.', example: 'La primera es un gerundio de posterioridad: «Se graduó en 2015 y después trabajó en una agencia». La segunda es un gerundio especificativo: «Vendo casa que tiene jardín», o mejor «Vendo casa con jardín».' },
            { q: 'Describe una foto importante para ti: primero con un pie de foto, después contando la historia. · Describe a photo that matters to you.', followUps: ['¿Quién la hizo?', '¿Qué pasó justo después?'], phrases: ['Pie de foto: «Mi familia [[celebrando|teal]]…»', '[[Emocionados|violet]], …', '[[Habiendo esperado|blue]] tanto, …'], hint: 'Pie de foto con gerundio descriptivo; en la historia, participio predicativo y gerundio compuesto.', example: 'Pie de foto: «Mi familia celebrando la graduación de mi hermana». Emocionados, mis padres no dejaban de hacer fotos. Habiendo esperado tanto ese día, mi hermana no podía dejar de sonreír.', teacher: 'Tú preguntas «¿y qué pasó después?»: tu alumno lo cuenta con «y» + verbo conjugado, no con gerundio.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito (un gerundio de posterioridad, «una caja conteniendo», «aún» con tilde en una concesión). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas pensando en otra persona: un compañero, un familiar. (Now ask the questions aloud and answer about someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una noticia breve', coach: 'Gerundios precisos, sin calcos. Precise gerunds, no calques.',
      steps: [
        { title: 'Para la sección local · For the local section', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada gerundio: ¿qué valor tiene? ¿Su acción es posterior? ¿Su sujeto está claro? Después tu alumno lee la noticia en voz alta.', self: 'Escribe tu noticia y toca «Revisar mi texto». Después repasa cada gerundio: ¿qué valor tiene? ¿Su acción es posterior? ¿Su sujeto está claro? (Check each gerund’s meaning, timing and subject.)' } },
          { kind: 'write', title: 'Noticia breve · Short news story', situation: 'Colaboras con la edición digital de La Crónica del Valle. Escribe una noticia breve sobre algo que ha pasado en tu barrio o tu ciudad: una reapertura, una fiesta, una obra, un concierto. Termina con un pie de foto. (Write a short local news story for the paper’s website, ending with a photo caption.)', task: [
            'Usa al menos tres gerundios con valores distintos: modo o medio, tiempo, causa o condición. (Three gerunds, three meanings.)',
            'Incluye una concesión con «aun» o «incluso» + gerundio.',
            'Empieza una frase con un participio predicativo concordado con el sujeto (Emocionada, la directora…).',
            'No uses gerundios de posterioridad ni especificativos: «y» + verbo, «que» + verbo.',
            'Termina con un pie de foto descriptivo con gerundio («Pie de foto: …»).',
          ], starters: ['La biblioteca del barrio de… reabrió ayer…', 'Decenas de vecinos esperaban…', 'Tratándose de…,', 'Aun lloviendo,', 'Emocionada,', '…y consiguieron que…', 'Pie de foto:'],
            words: ['tras meses de obras', 'desde primera hora', 'tratándose de', 'aun', 'incluso', 'emocionado / emocionada', 'que abre', 'y consiguieron', 'según la directora', 'pie de foto'],
            model: 'La biblioteca municipal del barrio de San Juan reabrió ayer sus puertas tras ocho meses de reformas. Decenas de vecinos [[esperaban charlando|teal]] en la entrada desde primera hora, y muchos niños [[entraron corriendo|teal]] hacia la nueva sala infantil. [[Tratándose de un sábado|teal]], la directora, Marta Robledo, organizó una lectura de cuentos a las once. [[Aun lloviendo|teal]], la plaza se llenó por la tarde para el concierto de la banda municipal. [[Emocionada|violet]], la directora agradeció el apoyo del barrio: los vecinos recogieron firmas durante dos años [[y consiguieron|orange]] que el ayuntamiento aprobara la obra. La biblioteca cuenta ahora con una sala de estudio [[que abre|orange]] hasta las diez de la noche y con cuatro mil libros nuevos. [[Manteniendo|teal]] ese horario, según la directora, podrá atender a muchos más estudiantes en época de exámenes. Pie de foto: Vecinos [[haciendo cola|teal]] ante la nueva entrada de la biblioteca.',
            minWords: 130,
            checks: [
              { label: 'Gerundios (comprueba que tengan valores distintos)', pattern: '(?<!\\p{L})(?!cuando(?!\\p{L}))\\p{L}+(?:[aá]ndo|i[eé]ndo|y[eé]ndo)(?:me|te|se|lo|la|los|las|le|les|nos)*(?!\\p{L})', tip: 'Usa gerundios de modo, tiempo, causa o condición: «entraron corriendo», «Tratándose de un sábado, …».' },
              { label: 'Concesión con aun / incluso + gerundio', pattern: '(?<!\\p{L})(?:aun|incluso)\\s+\\p{L}+(?:[aá]ndo|i[eé]ndo|y[eé]ndo)(?:me|te|se|lo|la|los|las|le|les|nos)*(?!\\p{L})', tip: 'Añade una concesión: «Aun lloviendo, la plaza se llenó». Recuerda: «aun» sin tilde.' },
              { label: 'Participio al principio de una frase, con coma', pattern: '(?:^|[.!?:]\\s+)\\p{L}+(?:ado|ada|ados|adas|ido|ida|idos|idas)\\s*,', tip: 'Empieza una frase con un participio concordado: «Emocionada, la directora agradeció…».' },
              { label: 'Pie de foto', pattern: '(?<!\\p{L})pie\\s+de\\s+foto(?!\\p{L})', tip: 'Termina con «Pie de foto:» y una descripción con gerundio: «Vecinos haciendo cola…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})\\p{L}+\\s+conteniendo(?!\\p{L})', why: '«Conteniendo» detrás de un sustantivo es un gerundio especificativo: usa «que contiene» o «que contenía».' },
              { pattern: '(?<!\\p{L})(?!cuando(?!\\p{L}))\\p{L}+(?:ando|iendo|yendo)(?:se|lo|la|los|las|le|les)?\\s+(?:\\p{L}+\\s+){0,3}?(?:días|semanas|meses|años|horas)\\s+(?:después|más\\s+tarde)(?!\\p{L})', why: 'Parece un gerundio de posterioridad («…, reabriendo meses después»): usa «y» + verbo conjugado.' },
              { pattern: '(?<!\\p{L})aún\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L})', why: 'En la concesión, «aun» (= incluso) va sin tilde: «aun lloviendo».' },
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
            { tone: 'teal', label: 'GERUNDIO INTERNO', formula: 'verbo + gerundio, sin coma → modo o medio', example: 'Los vecinos entraron aplaudiendo. · Aprendió escuchando la radio.', caption: 'contesta a ¿cómo?', en: 'inside the predicate, the gerund tells you how or by what means' },
            { tone: 'teal', label: 'GERUNDIO PERIFÉRICO', formula: 'gerundio + coma + oración → tiempo, causa, condición, concesión', example: 'Viviendo en el centro, no necesito / necesitaría coche. · Aun sabiéndolo, calló.', caption: 'la oración principal decide; aun / incluso = concesión', en: 'in front, the gerund frames the sentence; the main clause decides between cause and condition, and aun or incluso make it concessive' },
            { tone: 'blue', label: 'SUJETO Y TIEMPO', formula: 'gerundio + sujeto propio · habiendo + participio', example: 'Estando yo presente, nadie protestó. · Habiendo leído el informe, firmó.', caption: 'sujeto detrás; compuesto = anterior', en: 'a gerund’s own subject goes after it; the compound gerund marks an earlier action' },
            { tone: 'orange', label: 'LO QUE SE EVITA', formula: 'posterioridad → y + verbo · especificativo → que + verbo', example: 'Cerró en marzo y reabrió en septiembre. · Una caja que contiene libros.', caption: 'excepciones: hirviendo, ardiendo, pies de foto', en: 'don’t use a gerund for a clearly later event or to classify a noun' },
            { tone: 'violet', label: 'PARTICIPIO PREDICATIVO', formula: 'participio concordado + coma + oración', example: 'Cansada, Lucía se fue a dormir.', caption: 'estado, causa, condición o concesión', en: 'a fronted participle agrees with the subject and is read through context, like the gerund' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Ante cada gerundio, tres preguntas. ¿**Cuándo** ocurre: a la vez, antes o después? (Si es después, «y» + verbo.) ¿**A qué** se refiere: a un verbo o a un sustantivo? (Si clasifica un sustantivo, «que» + verbo.) ¿**Quién** lo hace: el sujeto principal u otro detrás del gerundio? Si las tres respuestas son claras, el contexto hará el resto.', en: 'Ask three questions about every gerund. When does it happen: at the same time, before or after? Does it modify a verb or a noun? Who performs it? If all three answers are clear, context will do the rest.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ en el centro, no necesitarías coche.', options: ['Vivido', 'Aun viviendo', 'Viviendo'], answer: 2, why: 'Resultado hipotético (necesitarías): gerundio condicional, = si vivieras. Con «aun» sería una concesión, que no encaja con el sentido.', en: 'If you lived downtown, you wouldn’t need a car.' },
            { prompt: 'Busco un apartamento ___ terraza.', options: ['tenido', 'teniendo', 'que tenga'], answer: 2, why: 'El gerundio no clasifica sustantivos: relativa, y en subjuntivo porque el apartamento no está identificado.', en: 'I’m looking for an apartment with a terrace.' },
            { prompt: 'El tren salió con retraso ___ a Mérida a medianoche.', options: ['llegando', 'y llegó', 'llegado'], answer: 1, why: 'La llegada es horas posterior a la salida: «y» + verbo conjugado.', en: 'The train left late and reached Mérida at midnight.' },
            { prompt: '___ tras el cierre, Lucía se fue directamente a casa.', options: ['Agotado', 'Agotada', 'Agotando'], answer: 1, why: 'Participio predicativo concordado con el sujeto (Lucía): agotada.', en: 'Exhausted after the deadline, Lucía went straight home.' },
            { prompt: '¿Qué frase es correcta según la norma?', options: ['Me mandaron una caja conteniendo libros.', 'Llegó al hotel a las diez, cenando dos horas después.', 'Salió de la reunión dando un portazo.'], answer: 2, why: '«Dando un portazo» es simultáneo: dice cómo salió. Las otras son un gerundio de posterioridad y uno especificativo.', en: 'Which sentence follows the norm?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en un museo. Now, in a museum.', blocks: [
          { kind: 'lead', text: 'Clara Fuentes prepara las cartelas de una exposición sobre un pintor del siglo XIX. Corrige o transforma sus frases.', en: 'Clara Fuentes is writing the wall labels for an exhibition on a 19th-century painter. Correct or transform her sentences.' },
          { kind: 'rewrite', title: 'Las cartelas de la exposición · The exhibition labels', items: [
            { prompt: 'El pintor terminó el cuadro en 1890, vendiéndolo diez años después.', instruction: 'Corrige el gerundio de posterioridad con «y».', accept: ['El pintor terminó el cuadro en 1890 y lo vendió diez años después', 'El pintor terminó el cuadro en 1890 y diez años después lo vendió'] },
            { prompt: 'La sala exhibe una vitrina conteniendo cartas del pintor.', instruction: 'Usa una relativa.', accept: ['La sala exhibe una vitrina que contiene cartas del pintor'] },
            { prompt: 'Aunque estaba enfermo, el pintor siguió trabajando.', instruction: 'Usa «aun» + gerundio o «aun» + participio/adjetivo.', accept: ['Aun estando enfermo, el pintor siguió trabajando', 'Incluso estando enfermo, el pintor siguió trabajando', 'Aun enfermo, el pintor siguió trabajando'] },
          ] },
        ] },
        { title: 'Ampliación · Casos límite y usos fijos · Borderline cases', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: ambigüedad con verbos de percepción, el gerundio de consecuencia, el lenguaje jurídico y los gerundios que organizan el discurso.', en: 'For strong students or spare time: ambiguity with perception verbs, the consequence gerund, legal language and gerunds that organise discourse.' },
          { kind: 'choice', title: '¿Qué ocurre aquí? · What’s going on here?', items: [
            { prompt: '«Vi a Luis paseando por el centro». ¿Quién paseaba?', options: ['Los dos, necesariamente.', 'Lo normal es entender que Luis, aunque la frase admite otra lectura.', 'Seguro que yo.'], answer: 1, why: 'Con verbos de percepción, el gerundio detrás del objeto se refiere normalmente al objeto. Si paseabas tú, di «Paseando por el centro, vi a Luis».', en: 'With perception verbs, the gerund after the object usually describes the object.' },
            { prompt: '«La tormenta derribó un árbol, cortando la carretera durante horas». ¿Cómo lo valoras?', options: ['Expresa una consecuencia inmediata: muchos lo admiten, pero en un texto cuidado «y cortó» es más seguro.', 'Es una concesión.', 'Es un gerundio especificativo y siempre es incorrecto.'], answer: 0, why: 'Cuando la segunda acción es efecto directo e inmediato de la primera, el gerundio es frecuente y muchos gramáticos lo aceptan; «y» + verbo nunca falla.', en: 'Consequence gerunds are a grey area: widely used, but y + verb is the safe choice.' },
            { prompt: '«Considerando que el plazo ha vencido, el tribunal desestima el recurso». ¿Qué valor tiene el gerundio?', options: ['Concesión: aunque ha vencido', 'Condición: si vence el plazo', 'Causa: como el plazo ha vencido'], answer: 2, why: 'En el lenguaje jurídico y administrativo, «considerando que» introduce la razón de una decisión.', en: 'In legal language, «considerando que» introduces the grounds for a decision.' },
            { prompt: '«Hablando de plazos, ¿cuándo entregas el reportaje?». ¿Qué hace «hablando de»?', options: ['Es un gerundio de posterioridad.', 'Introduce un tema relacionado: es un uso discursivo fijo.', 'Es un gerundio de modo.'], answer: 1, why: '«Hablando de…» (como «a propósito de…») enlaza con lo que se acaba de decir; no depende del sujeto de la oración.', en: '«Hablando de…» works like “speaking of…”: a fixed discourse link.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca un texto oficial o un anuncio con un gerundio y decide si es correcto, de consecuencia o especificativo.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 177 · Absolutas de participio y reducción de subordinadas', text: 'Ya sabes leer el gerundio y el participio según el contexto y evitar los usos que la norma desaconseja. En la clase 177 das el paso siguiente: el participio con su propio sustantivo («Terminada la reunión, nos marchamos»; «Una vez firmado el acuerdo, procederemos») y cómo reducir subordinadas en textos formales. Es la misma lógica de hoy, con un sujeto propio.', en: 'You can now read gerunds and participles through context and avoid the uses the norm advises against. Class 177 goes one step further: participles with their own noun (absolute constructions) and how to shorten subordinate clauses in formal writing. It applies today’s logic to participles with their own subject.', href: '/gramatica/absolutas-de-participio-y-reduccion-de', label: 'Ir a la clase 177' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cómo aprendiste a hacer tu trabajo?». Respuesta esperada: un gerundio de medio, uno de concesión con «aun» y, al contar lo que vino después, «y» + verbo, no gerundio. Tarea: la noticia de Escribir.' },
        ] },
      ],
    },
  ],
};
