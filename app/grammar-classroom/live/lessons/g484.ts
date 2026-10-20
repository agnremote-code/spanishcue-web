import type { LiveLesson } from '../types';

/**
 * Lesson 484 · C1 · Cambios de orden y focalización: tema/rema (course unit G184).
 * Builds on G043 and G081 (basic order), G062 (gustar, faltar), G067 / G113 (lo que…
 * es), G163 (lesson 463: topic + clitic vs focus without clitic, «ESO te dije yo»).
 * C1 step: word order as information packaging. SVO as the neutral order of an
 * all-new sentence; topic (known) → rheme (new) and thematic progression in a text;
 * postverbal subjects with verbs of appearance / existence / lack (Llegó el tren,
 * Faltan dos sillas), presentational news (Ha llamado tu madre) and gustar-type verbs;
 * the new subject at the end in answers (¿Quién lo hizo? — Lo hizo Marta); contrastive
 * focus fronting with obligatory inversion and no clitic (POCO dinero ganas tú, ESO
 * quería decirte); clefts and pseudo-clefts (Lo que necesito es tiempo; Es tiempo lo
 * que necesito; Fue en 2010 cuando…) with the relative chosen by the focus (quien,
 * donde, cuando, como, lo que) and the agreement of «ser» (number, person, tense,
 * repeated preposition); focus adverbs (solo, incluso, hasta, precisamente, justamente,
 * también) placed before what they highlight; inversion in wh-questions and exclamatives
 * (¿Qué quiere Juan?, ¡Qué bien canta tu hermana!) with the Caribbean «¿Qué tú
 * quieres?» presented as a regional feature. Anchor «A Laura, eso no se lo contaría»
 * appears as the topic counterpart; dislocation in depth is G185. Ampliación: «es por
 * eso que» / «fue así como», «Fui yo quien lo hizo / lo hice», «lo que pasa es que».
 * Scene: director Sonia Arce and scriptwriter Julián Ortega edit the voice-over of a
 * documentary on the centenary of the Mercado Norte; archivist Laura Méndez found the
 * 1931 photos; Rafael Soto, 84, keeps the spice stall his grandmother opened.
 * Escuchar: Sonia's audio note after the test screening (es-MX-DaliaNeural, ustedes).
 * Escribir: the opening voice-over for a documentary about a place.
 */
export const lesson: LiveLesson = {
  id: 484,
  level: 'C1',
  title: 'Cambios de orden y focalización: tema/rema',
  subtitle: 'Ordenar la información de lo conocido a lo nuevo y destacar lo importante: Lo hizo Marta; POCO ganas tú; Lo que necesito es tiempo.',
  legend: [
    { tone: 'blue', label: 'TEMA · lo conocido, el punto de partida (El mercado abrió… · A Laura, eso…)' },
    { tone: 'orange', label: 'REMA Y FOCO · lo nuevo al final o lo destacado delante con inversión (Llegó el tren · POCO ganas tú)' },
    { tone: 'violet', label: 'ESCINDIDAS · ser + relativo para destacar (Lo que necesito es tiempo · Fue en 2010 cuando…)' },
    { tone: 'teal', label: 'ADVERBIOS DE FOCO · solo, incluso, hasta, precisamente, justamente, también' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo conocido primero, lo nuevo al final', coach: 'El orden también comunica. Word order carries meaning too.',
      steps: [
        { title: 'La voz en off no fluye · The voice-over doesn’t flow', blocks: [
          { kind: 'lead', text: 'Sonia Arce dirige un documental sobre los cien años del Mercado Norte; Julián Ortega escribe el guion. Faltan dos semanas para el estreno y repasan la voz en off frase por frase. Los datos son correctos, pero el texto «no fluye». **Lo que falla no son los datos, sino el orden**: qué va primero, qué va al final y qué se destaca. Hoy aprendes a empaquetar la información: el **tema** (lo que ya se sabe) primero, el **rema** (lo nuevo) al final, y varias maneras de **destacar**.', en: 'Sonia Arce is directing a documentary on the hundredth anniversary of the Mercado Norte, and Julián Ortega is writing the script. Two weeks before the premiere they go through the voice-over line by line. The facts are right, but the text doesn’t flow: the problem is the order. Today you learn how Spanish packages information: the topic (what is already known) first, the rheme (what is new) last, and several ways of highlighting.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada pregunta y tu alumno elige cuál de las tres frases la responde mejor. Después explica qué información es nueva en cada una.', self: 'Lee las tres frases en voz alta. ¿A qué pregunta responde cada una? ¿Qué parte es nueva? (Which question does each sentence answer? Which part is new?)' } },
          { kind: 'compare', title: 'Los mismos datos, tres órdenes · Same facts, three orders', columns: [
            { tone: 'neutral', label: '¿QUÉ PASÓ?', sentence: 'Laura encontró las fotos de 1931 en el archivo municipal.', idea: 'Todo es nuevo: orden neutro, sujeto + verbo + objeto.', en: 'Everything is new, so Spanish uses the neutral order: subject, verb, object.' },
            { tone: 'orange', label: '¿QUIÉN LAS ENCONTRÓ?', sentence: 'Las encontró [[Laura|orange]].', idea: 'Las fotos ya son tema («las»); lo nuevo, Laura, va al final.', en: 'The photos are already known (“las”), so the new piece, Laura, goes last, where Spanish puts new information.' },
            { tone: 'violet', label: 'CORRECCIÓN', sentence: '[[Fue Laura quien|violet]] las encontró, no Julián.', idea: 'Se destaca a Laura frente a otra persona con «ser» + relativo.', en: 'A correction: “it was Laura who found them, not Julián”. A cleft sentence singles her out against someone else.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Quién encontró las fotos? ¿Qué respuesta suena más natural?', options: ['Encontró Laura las fotos de 1931 en el archivo.', 'Las encontró Laura.', 'Laura las fotos encontró.'], answer: 1, why: 'Lo conocido (las fotos) se retoma con «las» y lo nuevo, Laura, cierra la frase.', en: 'Asked “Who found the photos?”, which answer sounds most natural?' },
            { prompt: '«Fue Laura quien las encontró, no Julián». ¿Qué hace esta frase?', options: ['Pregunta quién las encontró.', 'Cuenta la noticia por primera vez.', 'Corrige a alguien que creía que había sido Julián.'], answer: 2, why: 'La escindida destaca a Laura en contraste con otra persona: sirve para corregir.', en: 'What is this sentence doing?' },
          ] },
        ] },
        { title: 'Tema y rema · Topic and rheme', mascot: '/brand/mascot/studying.webp', coach: 'Del dato conocido al dato nuevo. From known to new.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TEMA → REMA', question: '¿Qué sabe ya quien te escucha y qué le vas a decir de nuevo?', en: 'Spanish word order is flexible because it follows information, not just grammar. The topic (what you are talking about, already known) tends to come first; the rheme (the new information) tends to come last, where the main stress falls. In a text, the rheme of one sentence often becomes the topic of the next, and that chain is what makes a paragraph flow.', formula: ['tema (conocido) + rema (nuevo, al final)', '¿Quién lo hizo? → Lo hizo + QUIÉN', 'el rema de una frase → tema de la siguiente'],
            meaning: 'En español el orden es flexible porque sigue a la **información**. El **tema** (de qué hablamos, lo ya conocido) suele ir **al principio**; el **rema** (lo nuevo) suele ir **al final**, donde cae el acento principal. Por eso, para responder «¿Quién lo hizo?», lo natural es «Lo hizo **Marta**». En un texto, el rema de una frase se convierte a menudo en el tema de la siguiente: así fluye un párrafo.',
            examples: [
              { es: '[[El Mercado Norte|blue]] abrió sus puertas [[en 1925|orange]].', en: 'The market is the topic (we are looking at it on screen); the date is the new part, so it goes last.' },
              { es: 'El primer puesto lo abrió [[la abuela de Rafael|orange]]. [[Ella|blue]] vendía [[especias del puerto|orange]].', en: 'The rheme of the first sentence (the grandmother) becomes the topic of the second: a smooth chain.' },
              { es: '—¿Quién narra el documental? —Lo narra [[una actriz de radio|orange]].', en: 'The known part is taken up by “lo”; the answer, the new subject, closes the sentence.' },
            ] },
          { kind: 'table', title: 'Pregunta y respuesta natural · Question and natural answer', head: ['Pregunta · Question', 'Respuesta natural · Natural answer', 'Lo nuevo · New information'], rows: [
            ['¿Qué pasó en 1962?', 'Se quemó **medio mercado**.', 'todo: verbo + sujeto'],
            ['¿Quién abrió el primer puesto?', 'Lo abrió **la abuela de Rafael**.', 'el sujeto, al final'],
            ['¿Cuándo abrió el mercado?', 'Abrió **en 1925**.', 'la fecha, al final'],
            ['¿Qué vendía la abuela?', 'Vendía **especias**.', 'el objeto, al final'],
          ], note: 'Lo conocido se puede omitir o retomar con un pronombre: «—¿Quién abrió el primer puesto? —La abuela de Rafael» / «Lo abrió la abuela de Rafael».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El primer puesto lo abrió la abuela de Rafael. ___» ¿Qué frase continúa mejor el texto?', options: ['Especias que llegaban del puerto vendía.', 'Vendía especias que llegaban del puerto la abuela de Rafael.', 'Vendía especias que llegaban del puerto.'], answer: 2, why: 'La abuela ya es tema (sujeto omitido) y lo nuevo, las especias, va al final. Las otras adelantan lo nuevo sin motivo o repiten lo conocido al final.', en: 'Which sentence continues the text best?' },
            { prompt: '—¿Cuándo se estrena el documental? ¿Qué respuesta es la más natural?', options: ['Se estrena el 14 de noviembre.', 'Se estrena el 14 de noviembre el documental.', 'El 14 de noviembre el documental, se estrena.'], answer: 0, why: 'Lo conocido (el documental) se omite y lo nuevo, la fecha, cierra la frase.', en: 'Asked when the documentary premieres, which answer is the most natural?' },
          ] },
        ] },
        { title: 'El sujeto detrás del verbo · Subjects after the verb', mascot: '/brand/mascot/standing.webp', coach: 'Llegó el tren: el sujeto es la novedad. The subject is the news.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'VERBO + SUJETO', question: '¿El verbo presenta algo que llega, aparece, existe, falta o sobra? ¿Das una noticia?', en: 'With verbs that introduce something into the scene (llegar, aparecer, surgir, ocurrir, existir, faltar, sobrar, quedar) and when the whole sentence is news, the natural order is verb + subject: “Llegó el tren”, “Faltan dos sillas”, “Ha llamado tu madre”. With gustar-type verbs the subject (the thing liked) usually follows too. If the subject is already the topic, it goes first: “El tren llegó tarde”.', formula: ['verbo + sujeto: Llegó el tren · Faltan dos sillas', 'noticia: Ha llamado tu madre', 'gustar, interesar, preocupar: Me gusta el cine', 'si el sujeto ya es tema: El tren llegó tarde'],
            meaning: 'Con los verbos que **presentan** algo (llegar, aparecer, surgir, ocurrir, existir, faltar, sobrar, quedar) y cuando toda la frase es una **noticia**, el orden natural es **verbo + sujeto**: «Llegó el tren», «Faltan dos sillas», «Ha llamado tu madre». Con «gustar» y los verbos parecidos, el sujeto (lo que gusta) suele ir detrás. Si el sujeto ya es el tema, va delante: «El tren llegó tarde».',
            examples: [
              { es: '[[Faltan dos sillas|orange]] para el público del preestreno.', en: 'Two chairs are missing for the test-screening audience (faltar presents what is missing).' },
              { es: '[[Ha llamado Rafael|orange]]: dice que ha encontrado más fotos.', en: 'Rafael called: he says he has found more photos (news: the whole sentence is new).' },
              { es: 'En 1931 [[aparecieron los primeros puestos de flores|orange]].', en: 'In 1931 the first flower stalls appeared (aparecer introduces them into the story).' },
              { es: 'A los vecinos [[les preocupa el ruido de las obras|orange]].', en: 'The residents are worried about the building noise (preocupar works like gustar).' },
            ] },
          { kind: 'compare', title: '¿Tema o novedad? · Topic or news?', columns: [
            { tone: 'blue', label: 'EL SUJETO ES TEMA', sentence: '[[Rafael|blue]] llegó tarde a la entrevista.', idea: 'Ya hablábamos de Rafael: decimos algo nuevo sobre él.', en: 'We were already talking about Rafael; the sentence tells us something new about him.' },
            { tone: 'orange', label: 'EL SUJETO ES LA NOVEDAD', sentence: '¡[[Ha llegado Rafael|orange]]!', idea: 'Se anuncia una llegada: todo es nuevo y el sujeto va detrás.', en: 'Announcing an arrival: it’s all news, so the subject follows the verb.' },
          ] },
          { kind: 'table', title: 'Preguntas y exclamaciones · Questions and exclamations', head: ['Tipo', 'Español general', 'Evita'], rows: [
            ['pregunta con qué, quién, dónde, cuándo…', '¿Qué quiere **Julián**? ¿Dónde vive **Rafael**?', '¿Qué Julián quiere?'],
            ['exclamación con qué, cuánto, cómo…', '¡Qué bien habla **Rafael**! ¡Cuánto ha cambiado **el barrio**!', '¡Qué bien Rafael habla!'],
            ['pregunta con por qué', '¿Por qué no vino **Rafael**? / ¿Por qué **Rafael** no vino?', '(las dos son correctas)'],
          ], note: 'Tras un interrogativo o un exclamativo, el sujeto va detrás del verbo. Con «por qué» la inversión no es obligatoria.' },
          { kind: 'tip', icon: '🌎', title: '¿Qué tú quieres? · Caribbean Spanish', text: 'En el español del Caribe (Puerto Rico, República Dominicana, Cuba y otras zonas costeras) es frecuente **no invertir** cuando el sujeto es un pronombre, sobre todo **tú**: «¿Qué **tú** quieres?», «¿Dónde **tú** vives?». Es un rasgo regional, normal en esas zonas, no un error. Con un nombre («¿Qué Juan quiere?») es mucho menos habitual. En el español general: «¿Qué quieres (tú)?».', en: 'In Caribbean Spanish (Puerto Rico, the Dominican Republic, Cuba and other coastal areas) it is common not to invert when the subject is a pronoun, especially “tú”: “¿Qué tú quieres?”. It is a regional feature, normal there, not a mistake; with a full noun it is much less usual. General Spanish says “¿Qué quieres (tú)?”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Sonia entra en la sala del preestreno y cuenta los focos.', prompt: '«Vaya, ___».', options: ['dos focos faltan', 'faltan dos focos', 'falta dos focos'], answer: 1, why: '«Faltar» presenta lo que falta: verbo + sujeto, y el verbo concuerda en plural.', en: '“Oh no, two spotlights are missing.”' },
            { prompt: '—¿Qué ___ del nuevo final? —Que es demasiado largo.', options: ['piensa Laura', 'piensa a Laura', 'Laura piensa'], answer: 0, why: 'En una pregunta con «qué», en el español general el sujeto va detrás del verbo.', en: '“What does Laura think of the new ending?” “That it’s too long.”' },
          ] },
        ] },
        { title: 'Destacar: foco delante y adverbios · Highlighting: fronted focus and focus adverbs', mascot: '/brand/mascot/speaking.webp', coach: 'POCO dinero ganas tú: énfasis y verbo justo detrás. Stress, then the verb.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'FOCO CONTRASTIVO DELANTE', question: '¿Corriges, contrastas o subrayas algo y lo quieres al principio?', en: 'You met fronted focus at B2 (lesson 163: “ESO te dije yo”). At C1 you use it to correct or contrast: the highlighted element comes first with strong stress, the verb follows straight away and the subject, if expressed, goes after the verb. No pronoun picks it up. It is very expressive: frequent in conversation, used sparingly in formal writing.', formula: ['FOCO (acento fuerte) + verbo + sujeto', 'POCO dinero ganas tú · ESO quería decirte', 'sin inversión ✗: *Poco dinero tú ganas'],
            meaning: 'Ya conoces el foco delante (clase 163: «ESO te dije yo»). En C1 lo usas para **corregir** o **contrastar**: lo destacado va al principio con **acento fuerte**, el verbo va **justo detrás** y el sujeto, si aparece, **después del verbo**. No hay pronombre que lo retome. Es muy expresivo: abunda en la conversación y se usa con moderación en los textos formales.',
            examples: [
              { es: '—Rafael tiene ochenta años. —[[OCHENTA Y CUATRO tiene|orange]], y lo recuerda todo.', en: '“Rafael is eighty.” “Eighty-FOUR, and he remembers everything.” The fronted number corrects the other speaker.' },
              { es: '[[POCO dinero ganaban|orange]] los vendedores en los años cuarenta.', en: 'Little money did the stallholders make in the forties: the amount is stressed and the subject follows the verb.' },
              { es: '[[ESO quería decirte|orange]]: el final es demasiado largo.', en: 'That’s exactly what I wanted to tell you: the ending is too long.' },
            ] },
          { kind: 'compare', title: 'Tema con pausa o foco con énfasis · Topic with a pause or focus with stress', columns: [
            { tone: 'blue', label: 'TEMA + PRONOMBRE', sentence: '[[A Laura, eso|blue]] no se lo contaría.', idea: '«A Laura» y «eso» son temas conocidos, con pausa; «se» y «lo» los retoman. Lo verás a fondo en la clase 185.', en: 'Two known topics, set off by a pause and picked up by “se” and “lo”: “As for Laura, I wouldn’t tell her that.” Class 185 covers this in depth.' },
            { tone: 'orange', label: 'FOCO SIN PRONOMBRE', sentence: '[[ESO no le contaría yo|orange]] a Laura (lo demás, sí).', idea: '«Eso» se destaca frente a otras cosas: acento fuerte, sin «lo», sujeto detrás.', en: '“That” is singled out against everything else: strong stress, no “lo”, subject after the verb.' },
          ] },
          { kind: 'concept', tone: 'teal', label: 'ADVERBIOS DE FOCO', question: '¿Quieres limitar, ampliar o precisar a qué se refiere lo que dices?', en: 'Focus adverbs go right before the element they highlight, and moving them changes the meaning. “Solo” (normally written without an accent) restricts; “incluso” and “hasta” extend to something unexpected; “precisamente” and “justamente” mean “exactly that”; “también” adds. If adverb + focus comes first, the subject moves after the verb.', formula: ['solo · incluso · hasta · también · precisamente · justamente + lo destacado', 'Solo Laura vio las fotos ≠ Laura vio solo las fotos', 'Precisamente eso quería decirte (yo)'],
            meaning: 'Estos adverbios señalan el foco: van **justo delante** de lo que destacan, y si cambias su posición, cambia el sentido. «**Solo**» (normalmente sin tilde) limita; «**incluso**» y «**hasta**» amplían a algo inesperado; «**precisamente**» y «**justamente**» indican que es exactamente eso; «**también**» añade. Si el adverbio y su foco van delante, el sujeto pasa detrás del verbo.',
            examples: [
              { es: '[[Solo Laura|teal]] ha visto las fotos de 1931.', en: 'Only Laura has seen the 1931 photos: nobody else has.' },
              { es: 'Laura ha visto [[solo las fotos de 1931|teal]].', en: 'Laura has seen only the 1931 photos, not the ones from other years.' },
              { es: '[[Hasta el alcalde|teal]] vino al preestreno.', en: 'Even the mayor came to the test screening (hasta = incluso: something unexpected).' },
              { es: '[[Precisamente por eso|teal]] queremos terminar con Rafael.', en: 'That is exactly why we want to end with Rafael.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Ganaste mucho con tu primer documental? —¡Qué va! ___', options: ['POCO lo gané con aquel documental.', 'POCO gané yo con aquel documental.', 'POCO yo gané con aquel documental.'], answer: 1, why: 'Foco delante: verbo justo detrás, sujeto después del verbo y sin pronombre.', en: '“Did you make a lot from your first documentary?” “Not at all! I made very little from it.”' },
            { prompt: '¿Qué frase significa que nadie más que Laura vio las fotos?', options: ['Solo Laura vio las fotos.', 'Laura vio solo las fotos.', 'Laura solo vio las fotos.'], answer: 0, why: '«Solo» va delante de lo que limita: aquí, Laura. Las otras limitan lo que vio o lo que hizo.', en: 'Which sentence means that nobody but Laura saw the photos?' },
          ] },
        ] },
        { title: 'Oraciones escindidas · Cleft sentences', mascot: '/autoestudio/mascot/noting.webp', coach: 'Lo que necesito es tiempo. What I need is time.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'ESCINDIDAS Y PSEUDOESCINDIDAS', question: '¿Quieres destacar un elemento y presentar el resto como algo que ya se sabe o se supone?', en: 'Cleft sentences split the message in two: a relative clause presented as known or assumed (“I need something”) and the focus, linked by “ser”. The pseudo-cleft puts the focus at the end, like a rheme: “Lo que necesito es tiempo”. The cleft puts it straight after “ser”, with stronger contrast: “Es tiempo lo que necesito (not money)”. The relative depends on the focus: quien / el que for people, donde for places, cuando for time, como for manner, lo que for things and ideas.', formula: ['Lo que necesito es tiempo. (foco al final)', 'Es tiempo lo que necesito. (foco tras «ser», más contraste)', 'quien / el que · donde · cuando · como · lo que'],
            meaning: 'Las **escindidas** dividen el mensaje en dos: una parte con relativo, que se presenta como sabida o supuesta (necesito algo), y el **foco**, unido con «**ser**». La **pseudoescindida** pone el foco al final, como un rema: «Lo que necesito **es tiempo**». La **escindida** lo pone justo después de «ser», con más contraste: «**Es tiempo** lo que necesito (no dinero)». El relativo depende del foco: **quien / el que** (personas), **donde** (lugar), **cuando** (tiempo), **como** (modo), **lo que** (cosas, ideas).',
            examples: [
              { es: '[[Lo que falta es|violet]] una voz que una todas las historias.', en: 'What’s missing is one voice that ties all the stories together.' },
              { es: '[[Fue en 1962 cuando|violet]] el fuego destruyó medio mercado.', en: 'It was in 1962 that the fire destroyed half the market (time focus → cuando).' },
              { es: '[[Es Rafael quien|violet]] mejor recuerda aquellos años.', en: 'It’s Rafael who remembers those years best (person focus → quien).' },
              { es: '[[Donde se ve el cambio es|violet]] en las fotos de 1931.', en: 'Where you can see the change is in the 1931 photos (place → donde; the preposition “en” is repeated).' },
            ] },
          { kind: 'table', title: 'Cómo concuerda «ser» · How “ser” agrees', head: ['Concordancia', 'Así ✓', 'No así ✗'], rows: [
            ['número: «ser» en plural con un foco plural', 'Lo que me preocupa **son** los plazos.', 'Lo que me preocupa es los plazos.'],
            ['persona: «ser» con el pronombre', '**Fui** yo quien lo propuso.', 'Es yo quien lo propuso.'],
            ['tiempo: «ser» suele ir en el tiempo del verbo', '**Fue** en 2010 cuando lo renovaron.', 'Es en 2010 cuando lo renovaron. (poco natural)'],
            ['preposición: se repite ante el relativo', 'Es **con** Rafael **con** quien hay que hablar.', 'Es con Rafael quien hay que hablar.'],
          ], note: 'Con «yo, tú, nosotros», el verbo de la relativa puede ir en 3.ª persona o concordar con el pronombre: «Fui yo quien lo propuso» / «Fui yo quien lo propuse». Las dos son correctas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lo que el documental necesita ___ más testimonios de vendedores.', options: ['es', 'son', 'están'], answer: 1, why: 'El foco es plural (más testimonios): «ser» concuerda con él.', en: 'What the documentary needs is more accounts from stallholders.' },
            { prompt: '___ en 2010 cuando renovaron la cubierta del mercado.', options: ['Fue', 'Es', 'Estuvo'], answer: 0, why: 'El hecho es pasado: «ser» suele ir en el mismo tiempo, «fue». «Estar» no forma escindidas.', en: 'It was in 2010 that they renovated the market roof.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Orden, concordancia o relativo? Order, agreement or relative?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué falla (el orden, la concordancia de «ser» o el relativo) antes de ver la corrección.', self: 'Lee cada frase: ¿falla el orden, la concordancia de «ser» o el relativo? Decide y después mira la corrección. (What is wrong: order, agreement or the relative?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Lo que necesito es unas vacaciones.', right: 'Lo que necesito son unas vacaciones.', why: 'Con un foco plural, «ser» va en plural.' },
            { wrong: '¿Qué Julián piensa del final?', right: '¿Qué piensa Julián del final?', why: 'Tras «qué», el sujeto va detrás del verbo. «¿Qué tú piensas?» es un rasgo del Caribe con pronombres, no con nombres.' },
            { wrong: 'Poco dinero tú ganas con eso.', right: 'Poco dinero ganas tú con eso.', why: 'Con un foco delante, el verbo va justo detrás y el sujeto, después.' },
            { wrong: 'Dos sillas faltan para el público.', right: 'Faltan dos sillas para el público.', why: '«Faltar» presenta algo nuevo: verbo + sujeto.' },
            { wrong: 'Fue en ese mercado que se conocieron mis padres.', right: 'Fue en ese mercado donde se conocieron mis padres.', why: 'Con un foco de lugar, «donde». «Que» es muy frecuente al hablar en muchas zonas, sobre todo en América, pero la norma culta prefiere el relativo adecuado.' },
            { wrong: 'Es yo quien hizo la entrevista.', right: 'Fui yo quien hizo la entrevista.', why: '«Ser» concuerda con el pronombre (yo → fui / soy) y con el tiempo del hecho.' },
            { wrong: '¡Qué bien Rafael cuenta las historias!', right: '¡Qué bien cuenta Rafael las historias!', why: 'En una exclamación con «qué», el sujeto va detrás del verbo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Fueron los vecinos que quienes reconstruyeron el mercado.', 'Fueron los vecinos quienes reconstruyeron el mercado.', 'Fue los vecinos quienes reconstruyeron el mercado.'], answer: 1, why: 'Foco plural (los vecinos): «fueron» y el relativo de persona en plural, «quienes».', en: 'Which sentence is correct? (It was the residents who rebuilt the market.)' },
            { prompt: '—¿Quién ha montado el tráiler? —___', options: ['Julián ha montado el tráiler lo.', 'Ha montado el tráiler.', 'Lo ha montado Julián.'], answer: 2, why: 'Lo conocido se retoma con «lo» y lo nuevo, el sujeto, cierra la frase. «Ha montado el tráiler» no dice quién.', en: '“Who edited the trailer?” “Julián did.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno responde a tres preguntas sobre su semana («¿Quién te llamó ayer?», «¿Qué te falta en casa?», «¿Qué es lo que más te cansa?») con lo nuevo al final.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la sala de montaje', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Sonia y Julián revisan el guion · Sonia and Julián go over the script', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Sonia y tu alumno es Julián. Después tu alumno toca cada expresión marcada y explica qué se destaca y por qué va en esa posición.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿tema, rema al final, foco delante, escindida o adverbio de foco? (Tap each marked expression and name what it does.)' } },
          { kind: 'explore', title: 'El principio, el fuego y el final', setting: 'Martes por la tarde, sala de montaje. Sonia, la directora, y Julián, el guionista, revisan la voz en off del documental sobre el Mercado Norte. Se tratan de tú. (Tuesday afternoon in the editing room: the director and the scriptwriter go over the voice-over.)', lines: [
            { who: 'Sonia', text: 'Julián, ya he leído la nueva versión. [[Lo que no me convence es|violet]] el principio.', en: 'Julián, I’ve read the new version. What I’m not convinced by is the opening.' },
            { who: 'Julián', text: '¿Por qué? Empieza con un dato claro: «En 1925, el arquitecto Ramiro Gil terminó el Mercado Norte».', en: 'Why? It starts with a clear fact: “In 1925, the architect Ramiro Gil completed the Mercado Norte.”' },
            { who: 'Sonia', text: '[[Precisamente ahí está el problema|teal]]. En pantalla vemos el mercado, no al arquitecto. Mejor así: «[[El Mercado Norte abrió sus puertas en 1925|blue]]», y el arquitecto, después.', en: 'That’s exactly where the problem lies. On screen we see the market, not the architect. Better like this: “The Mercado Norte opened its doors in 1925”, and the architect later.' },
            { who: 'Julián', text: 'De acuerdo. ¿Y la parte del incendio? He puesto que [[llegaron los bomberos|orange]] en diez minutos, según el periódico de la época.', en: 'Fine. And the part about the fire? I’ve written that the fire brigade arrived within ten minutes, according to the paper at the time.' },
            { who: 'Sonia', text: 'Eso funciona. Y en las entrevistas, ¿quién cuenta lo del fuego, Rafael o su hermana?', en: 'That works. And in the interviews, who tells the story of the fire, Rafael or his sister?' },
            { who: 'Julián', text: '[[Lo cuenta Rafael|orange]]. Su hermana habla [[solo de la reapertura|teal]].', en: 'Rafael tells it. His sister only talks about the reopening.' },
            { who: 'Sonia', text: 'Perfecto. Oye, [[faltan dos fotos|orange]] en la secuencia de 1931. ¿Las tienes tú?', en: 'Perfect. Listen, two photos are missing from the 1931 sequence. Have you got them?' },
            { who: 'Julián', text: 'No, las tiene Laura. Por cierto, [[fue ella quien las encontró|violet]] en el archivo municipal, no yo. Quiero que aparezca en los créditos.', en: 'No, Laura has them. By the way, it was she who found them in the city archive, not me. I want her in the credits.' },
            { who: 'Sonia', text: 'Claro. Y además le dedicamos el documental, ¿no? Pero [[a Laura, eso no se lo contaría|blue]] todavía: que sea una sorpresa.', en: 'Of course. And we’re dedicating the film to her as well, right? But I wouldn’t tell Laura that yet: let it be a surprise.' },
            { who: 'Julián', text: '[[Eso mismo pensaba yo|orange]]. ¿Y el final? [[Hasta Rafael|teal]] dice que es demasiado largo.', en: 'That’s just what I was thinking. And the ending? Even Rafael says it’s too long.' },
            { who: 'Sonia', text: 'Tiene razón. [[Lo que necesitamos son|violet]] treinta segundos menos y una frase que se quede en la memoria.', en: 'He’s right. What we need is thirty seconds less and a line that sticks in people’s minds.' },
            { who: 'Julián', text: '[[Poco tiempo me das tú|orange]] para eso… Bueno, mañana te mando otra versión.', en: 'Not much time you’re giving me for that… Anyway, I’ll send you another version tomorrow.' },
          ], notes: {
            'Lo que no me convence es': '**Pseudoescindida**: «lo que no me convence» se presenta como algo supuesto (algo falla) y el foco, «el principio», va al final, como rema.',
            'Precisamente ahí está el problema': '**Adverbio de foco** + foco delante: «precisamente» señala exactamente ese punto, y el sujeto, «el problema», pasa detrás del verbo.',
            'El Mercado Norte abrió sus puertas en 1925': '**Tema → rema**: el mercado, que el público ya ve en pantalla, es el tema; la fecha, lo nuevo, cierra la frase.',
            'llegaron los bomberos': '**Verbo + sujeto**: «llegar» presenta a alguien en la escena. Es la novedad, por eso va detrás.',
            'Lo cuenta Rafael': '**Rema al final**: responde a «¿quién?». Lo conocido (lo del fuego) se retoma con «lo» y lo nuevo, Rafael, cierra la frase.',
            'solo de la reapertura': '**«Solo»** va delante de lo que limita: habla de la reapertura y de nada más. «Solo su hermana habla…» significaría otra cosa.',
            'faltan dos fotos': '**Verbo + sujeto** con «faltar»: presenta lo que falta. El verbo concuerda en plural con «dos fotos».',
            'fue ella quien las encontró': '**Escindida** de contraste: destaca a Laura frente a Julián. «Fue» va en pasado como «encontró»; persona → «quien».',
            'a Laura, eso no se lo contaría': 'Dos **temas** delante, con pausa, retomados por «se» y «lo». No es foco: no se corrige nada. Este esquema (dislocación) lo verás a fondo en la clase 185.',
            'Eso mismo pensaba yo': '**Foco** delante (clase 163): «eso mismo», con énfasis, sin «lo» y con el sujeto «yo» detrás del verbo.',
            'Hasta Rafael': '**«Hasta» = incluso**: amplía a alguien inesperado. Rafael sale en el documental y aun así piensa que el final es largo.',
            'Lo que necesitamos son': '**Pseudoescindida** con foco plural (treinta segundos y una frase): «ser» va en plural, «son».',
            'Poco tiempo me das tú': '**Foco** de cantidad delante, con ironía: verbo justo detrás y sujeto «tú» al final. Sin inversión («*Poco tiempo tú me das») no funciona.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué quiere Sonia cambiar la primera frase?', options: ['Porque el público ve el mercado, no al arquitecto: el mercado debe ser el tema.', 'Porque es demasiado larga.', 'Porque la fecha es incorrecta.'], answer: 0, why: '«En pantalla vemos el mercado, no al arquitecto».', en: 'Why does Sonia want to change the first line?' },
            { prompt: '¿Quién encontró las fotos de 1931?', options: ['Laura.', 'Julián.', 'Rafael.'], answer: 0, why: '«Fue ella quien las encontró en el archivo municipal, no yo».', en: 'Who found the 1931 photos?' },
            { prompt: '¿Qué no quieren contarle a Laura todavía?', options: ['Que faltan dos fotos.', 'Que el final es largo.', 'Que le van a dedicar el documental.'], answer: 2, why: '«Le dedicamos el documental… pero a Laura, eso no se lo contaría todavía».', en: 'What don’t they want to tell Laura yet?' },
          ] },
        ] },
        { title: '¿Qué hace cada frase? · What is each sentence doing?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases de la sala de montaje · More lines from the editing room', categories: [
            { id: 'presenta', label: 'SUJETO DETRÁS · presenta o responde', tone: 'orange' },
            { id: 'contraste', label: 'FOCO DELANTE · corrige o subraya', tone: 'neutral' },
            { id: 'escindida', label: 'ESCINDIDA · ser + relativo', tone: 'violet' },
          ], items: [
            { text: 'Han aparecido más cajas en el archivo.', answer: 'presenta', why: '«Aparecer» introduce algo nuevo: verbo + sujeto.' },
            { text: 'DIEZ horas de entrevista grabamos, no cinco.', answer: 'contraste', why: 'Una cantidad destacada que corrige a otra: foco delante, sin pronombre.' },
            { text: 'Fue Rafael quien eligió la música.', answer: 'escindida', why: '«Fue» + foco (Rafael) + «quien»: escindida de persona.' },
            { text: 'Nos preocupa el sonido de la sala.', answer: 'presenta', why: '«Preocupar» funciona como «gustar»: el sujeto suele ir detrás.' },
            { text: 'Lo que más emociona es la última entrevista.', answer: 'escindida', why: 'Pseudoescindida: «lo que» + verbo + «es» + foco al final.' },
            { text: 'ESO quería proponerte: un final sin música.', answer: 'contraste', why: '«Eso», con énfasis, delante y sin «lo»: foco.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno resume la conversación en tres frases que empiezan por lo conocido («El principio…», «Las fotos…», «El final…») y terminan con lo nuevo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Qué es nuevo y qué destacas? What is new, and what do you highlight?',
      steps: [
        { title: 'Responde con el orden adecuado · Answer with the right order', blocks: [
          { kind: 'choice', items: [
            { prompt: '—¿Quién ha escrito el guion? —___', options: ['Julián Ortega el guion ha escrito.', 'El guion ha escrito Julián Ortega.', 'Lo ha escrito Julián Ortega.'], answer: 2, why: 'Respuesta a «¿quién?»: lo conocido se retoma con «lo» y el sujeto nuevo va al final. «El guion ha escrito…» adelanta el objeto sin pronombre.', en: '“Who wrote the script?” “Julián Ortega did.”' },
            { prompt: '—¿A quién le gusta más el final nuevo? —___', options: ['Le gusta más a Sonia.', 'Sonia le gusta más.', 'A Sonia gusta más.'], answer: 0, why: 'Lo nuevo (a Sonia) al final, con «le» duplicado. Las otras pierden el pronombre o la preposición «a».', en: '“Who likes the new ending more?” “Sonia does.”' },
            { prompt: '—¿Qué falta para terminar el montaje? —___', options: ['Los créditos y la música faltan.', 'Falta los créditos y la música.', 'Faltan los créditos y la música.'], answer: 2, why: '«Faltar» presenta lo que falta: verbo + sujeto, en plural porque hay dos elementos.', en: '“What’s left to finish the edit?” “The credits and the music.”' },
            { context: 'Laura cree que Julián encontró las fotos. Julián la corrige.', prompt: '«No, Laura: ___».', options: ['fue tú quien las encontraste', 'fuiste tú quien las encontró', 'era tú quien las encontró'], answer: 1, why: '«Ser» concuerda con «tú» y con el tiempo del hecho: fuiste. «Quien las encontró» (3.ª persona) es lo más frecuente.', en: '“No, Laura: it was you who found them.”' },
            { context: 'Alguien dice que el mercado tiene cincuenta años.', prompt: 'Rafael: «___ tiene, el año que viene cumple ciento uno».', options: ['Cien años él los', 'CIEN años lo', 'CIEN años'], answer: 2, why: 'Foco de corrección delante: sin pronombre y con el verbo justo detrás.', en: 'Rafael: “It’s a HUNDRED years old, it turns a hundred and one next year.”' },
          ] },
        ] },
        { title: '¿Qué orden y por qué? · Which order, and why?', blocks: [
          { kind: 'classify', title: 'Frases del preestreno · Lines from the test screening', categories: [
            { id: 'presenta', label: 'SUJETO DETRÁS · presenta o responde', tone: 'orange' },
            { id: 'contraste', label: 'FOCO DELANTE · corrige o subraya', tone: 'neutral' },
            { id: 'escindida', label: 'ESCINDIDA · ser + relativo', tone: 'violet' },
          ], items: [
            { text: 'Han venido más de doscientos vecinos.', answer: 'presenta', why: 'Una noticia con «venir»: el sujeto nuevo va detrás.' },
            { text: 'Fue en la escena del fuego cuando se hizo el silencio.', answer: 'escindida', why: '«Fue» + foco de tiempo + «cuando».' },
            { text: 'MUY poco ha cambiado la plaza desde entonces.', answer: 'contraste', why: 'Cantidad destacada delante, con el verbo justo detrás.' },
            { text: 'Les ha encantado la entrevista de Rafael.', answer: 'presenta', why: '«Encantar» funciona como «gustar»: el sujeto suele ir detrás.' },
            { text: 'Es la hermana de Rafael la que más se ha emocionado.', answer: 'escindida', why: '«Es» + foco de persona + «la que».' },
            { text: 'ESO mismo me dijo una vecina a la salida.', answer: 'contraste', why: '«Eso mismo», con énfasis, delante y sin pronombre: foco.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Lo que más me sorprendió fueron las fotos de 1931.', ok: true, why: 'Correcta: foco plural (las fotos), «ser» en plural y en pasado como «sorprendió».' },
            { sentence: '¿Qué la gente recuerda del mercado antiguo?', ok: false, options: ['¿Qué es la gente que recuerda del mercado antiguo?', '¿Qué recuerdan la gente del mercado antiguo?', '¿Qué recuerda la gente del mercado antiguo?'], answer: 2, why: 'Tras «qué», el sujeto va detrás del verbo; «la gente» es singular: recuerda.' },
            { sentence: 'Fue en esta esquina que abrió el primer puesto.', ok: false, options: ['Fue en esta esquina donde abrió el primer puesto.', 'Fue en esta esquina cuando abrió el primer puesto.', 'Era esta esquina donde abrió el primer puesto.'], answer: 0, why: 'Foco de lugar → «donde». «Que» se oye mucho, sobre todo en América, pero en un registro cuidado se prefiere el relativo adecuado.' },
            { sentence: 'Muy poco tiempo tenemos nosotros para el montaje.', ok: true, why: 'Correcta: foco de cantidad delante, verbo justo detrás y sujeto al final.' },
            { sentence: 'Es ellos quienes deciden el orden de las entrevistas.', ok: false, options: ['Es ellos los que deciden el orden de las entrevistas.', 'Son ellos que deciden el orden de las entrevistas.', 'Son ellos quienes deciden el orden de las entrevistas.'], answer: 2, why: '«Ser» concuerda con el foco plural (ellos): son; persona → «quienes» o «los que».' },
            { sentence: '¡Qué bien la actriz lee el texto!', ok: false, options: ['¡Qué bien lee el texto la actriz!', '¡Qué bien leyendo la actriz el texto!', '¡Qué bien la actriz que lee el texto!'], answer: 0, why: 'En una exclamación con «qué», el sujeto va detrás del verbo.' },
          ] },
        ] },
        { title: 'Mensajes con Laura · Texts with Laura', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Julián escribe a Laura · Julián texts Laura', lines: [
            { who: 'Julián', text: 'Laura, ¿tienes tú las fotos de 1931? En la secuencia ___.', options: ['dos faltan', 'faltan dos', 'falta dos'], answer: 1, why: '«Faltar» presenta lo que falta: verbo + sujeto, en plural.' },
            { who: 'Laura', text: 'Sí, las tengo yo. ¿___ ahora?', options: ['Para qué las Sonia quiere', 'Para qué Sonia las quiere', 'Para qué las quiere Sonia'], answer: 2, why: 'En una pregunta con «para qué», el sujeto va detrás del verbo.' },
            { who: 'Julián', text: 'Para el principio. Y en los créditos pondremos que ___ en el archivo.', options: ['era tú quien las encontró', 'fuiste tú quien las encontró', 'fue tú quien las encontraste'], answer: 1, why: '«Ser» concuerda con «tú» y va en pasado: fuiste tú quien…' },
            { who: 'Laura', text: '¡Gracias! ¿Y ___ el texto nuevo?', options: ['cuándo graba la actriz', 'cuándo la actriz graba', 'cuándo graba a la actriz'], answer: 0, why: 'Pregunta con «cuándo»: verbo + sujeto. «A la actriz» la convertiría en objeto.' },
            { who: 'Julián', text: 'Mañana. ___ es que el final dura demasiado.', options: ['Que nos preocupa', 'Lo que nos preocupan', 'Lo que nos preocupa'], answer: 2, why: 'Pseudoescindida: «lo que» + verbo en singular + «es» + foco (una idea).' },
            { who: 'Laura', text: 'Ya. ___ Rafael lo piensa, y eso que sale él.', options: ['Hasta', 'Tampoco', 'Solo'], answer: 0, why: '«Hasta» = incluso: amplía a alguien inesperado. «Solo» diría que nadie más lo piensa.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Lo', 'que', 'necesitamos', 'son', 'dos', 'semanas', 'más.'], accept: ['Lo que necesitamos son dos semanas más.'], en: 'What we need is two more weeks.' },
            { tiles: ['Fue', 'en', 'esta', 'plaza', 'donde', 'abrió', 'el', 'primer', 'puesto.'], accept: ['Fue en esta plaza donde abrió el primer puesto.'], en: 'It was in this square that the first stall opened.' },
            { tiles: ['Solo', 'Laura', 'sabe', 'dónde', 'están', 'las', 'fotos.'], accept: ['Solo Laura sabe dónde están las fotos.'], en: 'Only Laura knows where the photos are.' },
          ] },
        ] },
        { title: 'Reescribe para que fluya · Rewrite so it flows', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada frase y la lee en voz alta con la entonación adecuada. Tú confirmas si el orden va de lo conocido a lo nuevo.', self: 'Reescribe y lee en voz alta: ¿empieza la frase por lo conocido y termina con lo nuevo? (Does the sentence start with the known and end with the new?)' } },
          { kind: 'rewrite', title: 'El párrafo de la voz en off · The voice-over paragraph', items: [
            { prompt: 'El mercado tenía cuarenta puestos en 1925. Una familia de Valencia abrió el primero.', instruction: 'Reescribe solo la segunda frase empezando por lo conocido: «El primero…».', accept: ['El primero lo abrió una familia de Valencia', 'El primero fue abierto por una familia de Valencia'] },
            { prompt: 'Rafael heredó el puesto de su abuela. Especias de todo el mundo vendía ella.', instruction: 'La segunda frase adelanta lo nuevo sin motivo. Reescríbela con un orden neutro.', accept: ['Ella vendía especias de todo el mundo', 'Vendía especias de todo el mundo'] },
            { prompt: 'Los vecinos reconstruyeron el mercado. No lo reconstruyó el ayuntamiento.', instruction: 'Únelo en una escindida que destaque a los vecinos: «Fueron…».', accept: ['Fueron los vecinos quienes reconstruyeron el mercado, no el ayuntamiento', 'Fueron los vecinos los que reconstruyeron el mercado, no el ayuntamiento', 'Fueron los vecinos quienes lo reconstruyeron, no el ayuntamiento', 'Fueron los vecinos los que lo reconstruyeron, no el ayuntamiento'] },
            { prompt: 'Necesitamos tiempo, no dinero.', instruction: 'Conviértelo en una pseudoescindida: «Lo que…».', accept: ['Lo que necesitamos es tiempo, no dinero', 'Lo que necesitamos es tiempo y no dinero'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta la historia de un objeto de su casa en cuatro frases encadenadas: lo nuevo de cada frase es el punto de partida de la siguiente.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Sonia', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Después del preestreno · After the test screening', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada frase en la que Sonia destaca algo (lo que…, fue… quien, hasta…) y cada sujeto que va detrás del verbo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota qué destaca Sonia y con qué estructura. (Listen for the gist, then note what Sonia highlights and how.)' } },
          { kind: 'listen', title: 'Un audio de Sonia', channel: 'NOTA DE VOZ · DE SONIA AL EQUIPO', src: '/audio/grammar-live/484.mp3',
            before: 'La noche anterior hubo un preestreno del documental con los vecinos del mercado. Sonia manda una nota de voz al equipo. ¿Qué crees que salió bien y qué salió mal? (What do you think went well, and what went wrong?)',
            gist: { prompt: '¿Para qué manda Sonia el audio? · Why does Sonia send the voice note?', options: ['Para contar cómo fue el preestreno y organizar lo que queda por hacer.', 'Para quejarse del trabajo de Julián.', 'Para cancelar el estreno por problemas técnicos.'], answer: 0, why: 'Resume qué gustó y qué no, y reparte las tareas de los próximos días.', en: 'She sums up what worked and what didn’t, and plans the next few days.' },
            details: [
              { prompt: '¿Qué fue lo que más gustó?', options: ['Las fotos de 1931.', 'La música.', 'La entrevista de Rafael.'], answer: 2, why: '«Lo que más gustó fue la entrevista de Rafael».', en: 'What did people like most?' },
              { prompt: '¿Qué problema hubo?', options: ['La imagen del principio.', 'Faltaban sillas.', 'El sonido de la segunda parte.'], answer: 2, why: '«Lo que no funcionó fue el sonido de la segunda parte».', en: 'What problem was there?' },
              { prompt: '¿Quién llega mañana a las diez?', options: ['La actriz que pone la voz en off.', 'Rafael.', 'Laura.'], answer: 0, why: '«Mañana a las diez llega la actriz para grabar la voz en off».', en: 'Who is arriving tomorrow at ten?' },
              { prompt: '¿Por qué tiene que aparecer Laura en los créditos?', options: ['Porque ha dirigido el documental.', 'Porque consiguió las fotos de 1931.', 'Porque es amiga de Rafael.'], answer: 1, why: '«Fue Laura quien consiguió las fotos de 1931».', en: 'Why does Laura have to appear in the credits?' },
            ],
            transcript: 'Hola a todos, soy Sonia. Les dejo este audio porque mañana no nos vemos hasta la tarde. Ayer fue el preestreno con los vecinos y, en general, salió muy bien. [[Lo que más gustó fue|violet]] la entrevista de Rafael: [[hasta los más jóvenes|teal]] se quedaron a escucharlo hasta el final. [[Lo que no funcionó fue|violet]] el sonido de la segunda parte, porque se oye un ruido de fondo bastante molesto, y además [[faltan dos minutos de música|orange]] en la escena del fuego. Julián, el principio nuevo está mucho mejor: primero aparece el mercado y la fecha queda al final, como hablamos. Eso sí, [[poco tiempo nos queda|orange]], así que vamos por partes. Mañana a las diez [[llega la actriz|orange]] para grabar la voz en off. [[Es el final lo que más me preocupa|violet]], porque todavía dura demasiado. Y una cosa importante: [[fue Laura quien|violet]] consiguió las fotos de 1931, así que tiene que aparecer en los créditos, y con su nombre completo. Ah, y la versión definitiva a Rafael se la llevo yo. ¡Qué contento se va a poner! Nos vemos mañana.',
            reply: { teacher: 'Tú eres Julián y respondes al audio de Sonia. Tu alumno es Sonia y contesta a tus preguntas («¿Qué es lo que más te preocupa?», «¿Quién llega mañana?») con lo nuevo al final o con una escindida.', self: 'Responde a Sonia en voz alta como Julián: dile qué vas a cambiar, qué es lo que más te preocupa a ti y quién se encarga de cada cosa. (Reply aloud as Julián, using clefts and new information last.)' } },
          { kind: 'tip', icon: '🇲🇽', title: 'Una nota de voz real · A real voice note', text: 'Fíjate en cómo Sonia organiza su audio: cada bloque empieza por lo conocido (el preestreno, el principio, Laura) y termina con lo nuevo. Usa pseudoescindidas para hacer balance («Lo que más gustó fue…», «Lo que no funcionó fue…») y una exclamación con el sujeto omitido: «¡Qué contento se va a poner!». Se dirige al equipo con **ustedes**, como en toda América.', en: 'Notice how Sonia organises her message: each block starts with what the team already knows and ends with the news. She uses pseudo-clefts to take stock (“What people liked most was…”, “What didn’t work was…”) and addresses the team as “ustedes”, as everywhere in Latin America.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo nuevo al final, lo importante destacado', coach: 'Ordena para que te sigan. Order your words so people can follow.',
      steps: [
        { title: 'Contar, corregir y destacar · Telling, correcting and highlighting', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con lo nuevo al final o con una estructura para destacar. Si el orden suena forzado, tú repites la frase con el orden natural y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta. En cada respuesta usa al menos una escindida, un foco o un sujeto detrás del verbo. (Use at least one cleft, focus or postverbal subject in each answer.)' } },
          { kind: 'talk', cards: [
            { q: '¿Quién te enseñó algo importante: a cocinar, a conducir, a trabajar en equipo? · Who taught you something important?', followUps: ['¿Qué es lo que más recuerdas de esa persona?', '¿Fue en el colegio, en casa o en el trabajo donde aprendiste más?'], phrases: ['[[Me enseñó|orange]] mi…', '[[Fue mi … quien|violet]]…', '[[Lo que más recuerdo es|violet]]…'], hint: 'Lo nuevo (la persona) al final, o destacado con «fue… quien».', example: 'A cocinar me enseñó mi abuelo, no mi madre. Fue él quien me explicó que el arroz no se toca mientras se hace. Lo que más recuerdo es su paciencia: nunca se enfadaba, ni siquiera cuando lo quemaba todo.', next: 'Ahora, corregir.' },
            { q: 'Un amigo cuenta mal una anécdota tuya delante de otras personas. Corrígelo con amabilidad. · A friend tells your story wrong: correct them.', followUps: ['¿Qué más cambió en la historia?', '¿Por qué crees que la cuenta así?'], phrases: ['[[DOS años|orange]] estuve allí, no uno.', 'No fue en…; [[fue en … cuando|violet]]…', '[[No fue … quien|violet]]…; [[fue …|violet]]'], hint: 'Corrige con un foco delante (con inversión) o con una escindida de contraste.', example: 'No, no, espera: DOS años estuve en Lima, no uno. Y no fue en el aeropuerto donde se me perdió la maleta; fue en el autobús, cuando ya casi había llegado. Y no fue mi hermano quien la encontró, fue un taxista.' },
            { q: 'Cuenta cómo ha cambiado tu barrio o tu ciudad en los últimos años. · How has your neighbourhood or town changed?', followUps: ['¿Qué ya no queda?', '¿Qué es lo que más echas de menos?'], phrases: ['[[Han abierto|orange]]…', '[[Ya no quedan|orange]]…', '[[Llegó|orange]] mucha gente…'], hint: 'Presenta lo que aparece, llega o desaparece con verbo + sujeto.', example: 'En mi barrio han abierto muchos cafés y ya no quedan casi tiendas de toda la vida. Hace cinco años llegó mucha gente joven y subieron los alquileres. Lo que más echo de menos es la ferretería de la esquina.', next: 'Ahora, prioridades.' },
            { q: '¿Qué necesitas de verdad para estar a gusto en un trabajo o en un piso? · What do you really need to feel at ease at work or at home?', followUps: ['¿Y qué es lo que no soportas?', '¿Es el sueldo lo más importante para ti?'], phrases: ['[[Lo que necesito es|violet]]…', '[[Lo que no soporto son|violet]]…', '[[Es … lo que|violet]] más valoro.'], hint: 'Pseudoescindidas para ordenar prioridades; «ser» en plural con un foco plural.', example: 'Lo que necesito es luz natural y un poco de silencio. Lo que no soporto son las reuniones sin orden del día. Y no, no es el sueldo lo que más valoro: es el equipo.' },
            { q: 'Describe una fiesta, una reunión o un evento al que fue muchísima gente o casi nadie. · Who came, and who didn’t?', followUps: ['¿Quién te sorprendió?', '¿Pasó algo que nadie esperaba?'], phrases: ['[[Hasta|teal]] mi jefe vino.', '[[Solo|teal]] vinieron…', '[[Precisamente|teal]] ese día…'], hint: 'Pon el adverbio de foco justo delante de lo que destacas.', example: 'A la boda de mi prima fue todo el mundo: hasta mi tío de Canadá vino. Precisamente ese día llovió por primera vez en tres meses. Al final de la noche solo quedábamos los primos, bailando bajo la carpa.', next: 'Ahora, en el papel de Sonia.' },
            { q: 'Eres Sonia. Presentas el documental al público antes del estreno. · You are Sonia: introduce the documentary.', followUps: ['¿Por qué empieza con Rafael?', '¿Qué es lo que más les costó?'], phrases: ['[[Lo que queríamos contar era|violet]]…', '[[Fueron los vecinos quienes|violet]]…', '[[Aparecen|orange]] en el documental…'], hint: 'Presenta el tema, deja lo nuevo al final y destaca con una o dos escindidas.', example: 'Buenas noches. Lo que queríamos contar no era la historia de un edificio, sino la de sus voces. Aparecen en el documental vendedores, clientes y vecinos de tres generaciones. Fueron ellos quienes reconstruyeron el mercado en los años sesenta, y es a ellos a quienes dedicamos esta película.', teacher: 'Tú haces de periodista y preguntas por el título, por Rafael y por el fuego. Tu alumno responde como Sonia, destacando lo importante.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error de orden a propósito («¿Qué tu hermano estudia?», «Lo que quiero es unas vacaciones»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas pensando en otra persona: tu jefe, tu pareja o un amigo. (Now ask the questions aloud and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El primer minuto de un documental', coach: 'Cada frase empieza donde terminó la anterior. Each sentence starts where the last one ended.',
      steps: [
        { title: 'La voz en off · The voice-over', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el texto en voz alta y juntos comprueban si cada frase empieza por algo conocido y termina con algo nuevo.', self: 'Escribe tu texto y toca «Revisar mi texto». Después léelo en voz alta: ¿empieza cada frase por lo conocido y termina con lo nuevo? (Read it aloud and check the flow.)' } },
          { kind: 'write', title: 'Texto para la voz en off · Voice-over script', situation: 'Eres Julián (o eres tú, con un lugar que conoces bien). Escribes el texto de la voz en off para el primer minuto de un documental sobre un lugar de tu ciudad: un mercado, una estación, un café, una plaza. Lo va a leer una actriz y lo va a escuchar un público que no conoce el lugar. (Write the opening voice-over of a documentary about a place you know, for an audience that doesn’t know it.)', task: [
            'Presenta el lugar como tema y deja lo nuevo al final de cada frase.',
            'Encadena la información: lo nuevo de una frase es el punto de partida de la siguiente.',
            'Usa al menos un sujeto detrás del verbo con un verbo de aparición o llegada (llegaron, aparecieron, queda…).',
            'Incluye una escindida o una pseudoescindida (Fue en… cuando…, Lo que… es…) con «ser» bien concordado.',
            'Usa un adverbio de foco (solo, incluso, precisamente…) justo delante de lo que destaca.',
          ], starters: ['Hay lugares que…', 'El … abrió sus puertas en…', 'Con los años llegaron…', 'Una de esas familias…', 'Fue en … cuando…', 'Lo que este documental quiere contar…', 'Precisamente por eso…'],
            words: ['abrir sus puertas', 'llegar', 'aparecer', 'quedar', 'fue… cuando', 'fueron… quienes', 'lo que… es / son', 'precisamente', 'incluso', 'solo'],
            model: 'Hay mercados que se visitan y mercados que se recuerdan. [[El Mercado Norte|blue]] abrió sus puertas en 1925, en un barrio de huertas y talleres. Con los años [[llegaron los puestos de flores, de pescado y de especias|orange]], y con ellos, familias de todo el país. Una de esas familias era la de Rafael Soto: su abuela abrió el primer puesto de especias con diecinueve años. Ese puesto sigue hoy en el mismo rincón, aunque del edificio original [[queda muy poco|orange]]. [[Fue en 1962 cuando|violet]] un incendio destruyó la mitad del mercado, y [[fueron los vecinos quienes|violet]] lo reconstruyeron, piedra a piedra, en [[solo dos años|teal]]. [[Lo que este documental quiere contar no son|violet]] las fechas, sino las voces: las de quienes venden, compran y conversan aquí cada mañana. [[Precisamente por eso|teal]] empezamos por Rafael.',
            minWords: 110,
            checks: [
              { label: 'Una escindida o pseudoescindida (ser + quien, donde, cuando, lo que…)', pattern: '(?<!\\p{L})(?:es|son|fue|fueron|era|eran)\\s+[^.;:]{1,50}?(?<!\\p{L})(?:quien|quienes|donde|cuando|como|lo que|el que|la que|los que|las que)(?!\\p{L})|(?<!\\p{L})lo\\s+que\\s+[^.;:]{1,60}?(?<!\\p{L})(?:es|son|fue|fueron|era|eran)(?!\\p{L})', tip: 'Destaca un dato con «Fue en… cuando…», «Fueron… quienes…» o «Lo que… es…».' },
              { label: 'Un verbo de aparición o llegada (llegaron, aparecieron, queda…)', pattern: '(?<!\\p{L})(?:llegó|llegaron|apareció|aparecieron|surgió|surgieron|nació|nacieron|queda|quedan|quedaba|quedaban|falta|faltan)(?!\\p{L})', tip: 'Presenta algo nuevo con verbo + sujeto: «Con los años llegaron los puestos de flores».' },
              { label: 'Un adverbio de foco', pattern: '(?<!\\p{L})(?:solo|sólo|incluso|precisamente|justamente|ni\\s+siquiera)(?!\\p{L})', tip: 'Pon «solo», «incluso» o «precisamente» justo delante de lo que destacas.' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})lo\\s+que\\s+(?:\\p{L}+\\s+){1,5}?es\\s+(?:los|las|unos|unas)(?!\\p{L})', why: 'Si el foco es plural, «ser» va en plural: «Lo que me preocupa **son** los plazos».' },
              { pattern: '(?<!\\p{L})(?:fue|es|era)\\s+en\\s+[^.,;:]{1,30}?\\s+que(?!\\p{L})', why: 'Con un foco de lugar o de tiempo, en un texto cuidado usa «**donde**» o «**cuando**»: «Fue en 1962 **cuando**…».' },
              { pattern: '(?<!\\p{L})es\\s+(?:yo|tú|nosotros|nosotras)\\s+(?:quien|quienes|el\\s+que|la\\s+que|los\\s+que|las\\s+que)(?!\\p{L})', why: '«Ser» concuerda con el pronombre: «**Soy** yo quien…», «**Fuimos** nosotros quienes…».' },
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
            { tone: 'blue', label: 'TEMA → REMA', formula: 'lo conocido primero, lo nuevo al final', example: 'El mercado abrió en 1925. —¿Quién lo hizo? —Lo hizo Marta.', caption: 'el rema de una frase, tema de la siguiente', en: 'Known information first, new information last; chaining rheme to topic makes a text flow' },
            { tone: 'orange', label: 'VERBO + SUJETO · FOCO DELANTE', formula: 'llegar, faltar, quedar, gustar… + sujeto · FOCO + verbo + sujeto', example: 'Faltan dos sillas. Ha llamado tu madre. POCO dinero ganas tú.', caption: 'nunca «*Poco dinero tú ganas»', en: 'Verbs that present something put the subject after them; a fronted contrastive focus forces the subject after the verb' },
            { tone: 'violet', label: 'ESCINDIDAS', formula: 'Lo que… + ser + FOCO · ser + FOCO + quien / donde / cuando / lo que', example: 'Lo que necesito es tiempo. Fue en 2010 cuando lo renovaron.', caption: '«ser» concuerda: son, fui, fue', en: 'Clefts single out one element; “ser” agrees in number, person and tense, and the relative matches the focus' },
            { tone: 'teal', label: 'ADVERBIOS DE FOCO', formula: 'solo / incluso / hasta / precisamente + lo destacado', example: 'Solo Laura vio las fotos. Hasta Rafael lo dice.', caption: 'si cambias el lugar, cambia el sentido', en: 'Focus adverbs go right before what they highlight; moving them changes the meaning' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de ordenar, pregúntate: ¿qué sabe ya quien me escucha? Eso va **primero**. Lo **nuevo**, al **final**. Si quieres **destacar o corregir**, tienes tres herramientas: el foco delante con el verbo justo detrás («POCO ganas tú»), una escindida («Fue Laura quien…») o un adverbio de foco («Solo Laura…»). Y en preguntas y exclamaciones, el sujeto detrás: «¿Qué quiere Juan?».', en: 'Before ordering, ask yourself what your listener already knows: that goes first, and the news goes last. To highlight or correct, you have three tools: a fronted focus with the verb straight after it, a cleft sentence, or a focus adverb. In wh-questions and exclamations, the subject follows the verb.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '—¿Quién te recomendó este libro? —___', options: ['Me lo recomendó mi profesora.', 'Mi profesora me recomendó.', 'Me recomendó mi profesora lo.'], answer: 0, why: 'Lo conocido (el libro) se retoma con «lo» y lo nuevo, el sujeto, cierra la frase.', en: '“Who recommended this book to you?” “My teacher did.”' },
            { prompt: 'Lo que más echo de menos de mi país ___ las fiestas de verano.', options: ['es', 'son', 'están'], answer: 1, why: 'Foco plural (las fiestas): «ser» en plural.', en: 'What I miss most about my country is the summer festivals.' },
            { prompt: '—Te costó cuarenta euros, ¿no? —¡Qué va! ___', options: ['OCHENTA me costó.', 'OCHENTA me lo costó.', 'Me OCHENTA costó.'], answer: 0, why: 'Foco de corrección delante, sin pronombre y con el verbo justo detrás.', en: '“It cost you forty euros, didn’t it?” “No way! It cost me EIGHTY.”' },
            { prompt: '¿Qué frase dice que nadie esperaba que viniera tu abuela?', options: ['Mi abuela vino precisamente.', 'Solo vino mi abuela.', 'Incluso vino mi abuela.'], answer: 2, why: '«Incluso» amplía a algo inesperado; «solo» limita: nadie más vino.', en: 'Which sentence says nobody expected your grandmother to come?' },
            { prompt: '___ en Lima donde conocí a mi pareja.', options: ['Fue', 'Era', 'Estuvo'], answer: 0, why: 'Escindida de lugar sobre un hecho pasado: «fue… donde».', en: 'It was in Lima that I met my partner.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un museo. Now, a museum.', blocks: [
          { kind: 'lead', text: 'Nerea prepara la audioguía de un museo de la ciencia. Sus frases son correctas, pero no siguen el orden de la visita. Reescríbelas.', en: 'Nerea is preparing the audio guide for a science museum. Her sentences are correct, but they don’t follow what the visitor sees. Rewrite them.' },
          { kind: 'rewrite', title: 'La audioguía de Nerea · Nerea’s audio guide', items: [
            { prompt: 'Un relojero de Sevilla construyó este reloj en 1890.', instruction: 'El visitante ya está mirando el reloj: empieza por él («Este reloj…»).', accept: ['Este reloj lo construyó un relojero de Sevilla en 1890', 'Este reloj lo construyó en 1890 un relojero de Sevilla', 'Este reloj fue construido por un relojero de Sevilla en 1890', 'Este reloj fue construido en 1890 por un relojero de Sevilla'] },
            { prompt: 'El museo necesita voluntarios para los fines de semana.', instruction: 'Destácalo con una pseudoescindida: «Lo que…».', accept: ['Lo que el museo necesita son voluntarios para los fines de semana', 'Lo que necesita el museo son voluntarios para los fines de semana'] },
            { prompt: 'Los primeros visitantes llegaron a las nueve.', instruction: 'Es una noticia y todo es nuevo: pon el sujeto detrás del verbo.', accept: ['Llegaron los primeros visitantes a las nueve', 'A las nueve llegaron los primeros visitantes'] },
          ] },
        ] },
        { title: 'Ampliación: escindidas en el uso real · Extension: clefts in real use', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** «**Es por eso que…**», «**Fue así que…**»: son muy frecuentes, sobre todo en América, y aparecen también en la lengua culta; en un texto muy cuidado, muchos prefieren «Por eso…», «Es por eso por lo que…» o «Fue así **como**…». **2.** «Fui yo quien **lo hizo**» y «Fui yo quien **lo hice**» son correctas las dos. **3.** «**Lo que pasa es que…**», «Lo que ocurre es que…» son pseudoescindidas fijas para presentar una explicación o una excusa. **4.** El tema con pausa y pronombre («A Laura, eso no se lo contaría») es la dislocación: la clase 185.', en: 'For strong students or spare time. 1. “Es por eso que…” and “Fue así que…” are very common, especially in Latin America, and appear in educated usage too; in very careful writing many prefer “Por eso…”, “Es por eso por lo que…” or “Fue así como…”. 2. Both “Fui yo quien lo hizo” and “Fui yo quien lo hice” are correct. 3. “Lo que pasa es que…” is a fixed pseudo-cleft that introduces an explanation or an excuse. 4. A topic with a pause and a pronoun is dislocation: class 185.' },
          { kind: 'choice', title: 'Registro y matices · Register and nuance', items: [
            { prompt: 'En el informe final para una fundación, ¿qué opción eligen muchos editores?', options: ['Por eso proponemos cambiar el final.', 'Es por eso que proponemos cambiar el final.', 'Es por eso proponemos cambiar el final.'], answer: 0, why: 'La forma simple es la más segura en un texto muy cuidado. «Es por eso que» es muy frecuente y no es un error grave; «Es por eso proponemos» no es gramatical.', en: 'In the final report for a foundation, which option do many editors choose?' },
            { prompt: '«Fui yo quien lo propuse». ¿Es correcta?', options: ['No: solo vale «Fui yo quien lo propuso».', 'No: hay que decir «Fue yo quien lo propuso».', 'Sí, y también «Fui yo quien lo propuso».'], answer: 2, why: 'El verbo de la relativa puede concordar con «yo» o ir en 3.ª persona. «Fue yo» no concuerda.', en: 'Is “Fui yo quien lo propuse” correct?' },
            { prompt: '«—¿No vienes a la cena? —Lo que pasa es que mañana madrugo». ¿Para qué sirve «lo que pasa es que»?', options: ['Para contar algo que ocurrió ayer.', 'Para hacer una pregunta indirecta.', 'Para presentar una explicación o una excusa, destacándola.'], answer: 2, why: 'Es una pseudoescindida fija: la parte nueva, la excusa, va al final.', en: 'What is “lo que pasa es que” used for?' },
            { prompt: 'En un texto cuidado: «Fue así ___ conseguimos el permiso».', options: ['cuando', 'como', 'que'], answer: 1, why: 'Foco de modo → «como». «Fue así que» se oye mucho, sobre todo en América, pero en un texto cuidado se prefiere «como».', en: 'In careful writing: “That was how we got the permit.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno busca en un texto suyo una frase con «es por eso que» o «fue así que» y propone una versión para un registro muy formal.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 185 · Anteposición, dislocación y clíticos duplicados', text: 'Ya ordenas la información de lo conocido a lo nuevo, pones el sujeto detrás cuando es la novedad y destacas con un foco, un adverbio o una escindida. En la clase 185 estudias a fondo la otra cara del orden: el **tema** que se coloca delante o al final con una pausa y se retoma con un pronombre («Ese libro, ya lo he leído»; «A Laura, eso no se lo contaría»).', en: 'You can now order information from known to new, put the subject after the verb when it is the news, and highlight with a focus, an adverb or a cleft. In class 185 you study the other side of word order in depth: the topic placed before or after the sentence with a pause and picked up by a pronoun (“That book, I’ve already read it”).', href: '/gramatica/anteposicion-dislocacion-y-cliticos-duplicados', label: 'Ir a la clase 185' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué decimos “Lo hizo Marta” para responder a “¿Quién lo hizo?”?». Respuesta esperada: porque lo nuevo va al final, y lo conocido se retoma con «lo». Tarea: el texto de Escribir sobre un lugar real de su ciudad.' },
        ] },
      ],
    },
  ],
};
