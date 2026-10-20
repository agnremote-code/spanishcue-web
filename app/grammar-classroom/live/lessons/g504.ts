import type { LiveLesson } from '../types';

/**
 * Lesson 504 · C1 · Revisión argumentativa C1: coherencia, cohesión y matiz (course unit G204).
 * Synthesis and review of the C1 argumentation block. No new structures: the learner REVISES a
 * full argumentative text with tools already taught: concession and counter-argument (G190,
 * lesson 490: concedo que…, aun así, no obstante, con todo), reformulation (G189, lesson 489: es
 * decir, dicho de otro modo, en definitiva), attenuation (G191, lesson 491) and intensification
 * (G192, lesson 492), attribution and distance (G193 / G194, lessons 493 and 494: según, al
 * parecer, conditional of rumour), mood by stance (G168, lesson 468: es evidente que + ind. / no
 * está demostrado que + subj.), information order (G184, lesson 484), de ahí que (G165) and the
 * punctuation of connectors (G197). Focus: thesis and paragraph plan; referential cohesion
 * (synonyms, hyperonyms, encapsulators «esta medida», «dicho problema», ello, ellipsis; «el
 * mismo» as a pronoun discouraged by the RAE); connector overuse and choice by nuance; register
 * consistency (no «o sea», «un montón», generic tú); hedging vs over-claiming vs over-hedging.
 * The 250–300 word text takes the DELE C1 writing task type as a reference, without claiming
 * official alignment. Ampliación: academic register (si bien, no es menos cierto que, cabe
 * objetar que) and evaluative encapsulators (este despropósito vs esta medida).
 * Scene: Raúl Ortega, head of people at the Cooperativa Sierramar (a furniture cooperative with
 * 180 workers), writes an op-ed for the regional paper «El Correo de Sierramar» proposing that
 * medium-sized firms try a four-day week. Beatriz Salcedo, copy editor and writing-workshop
 * teacher, revises his draft. Escuchar: Beatriz's voice note on the second draft
 * (es-CO-SalomeNeural, one voice). Escribir: the learner's revised op-ed. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 504,
  level: 'C1',
  title: 'Revisión argumentativa C1: coherencia, cohesión y matiz',
  subtitle: 'Revisar un texto argumentativo completo: tesis clara, párrafos con plan, referencias sin repeticiones y afirmaciones bien medidas.',
  legend: [
    { tone: 'blue', label: 'COHERENCIA Y COHESIÓN · tesis, encapsuladores (esta medida, dicha propuesta), ello' },
    { tone: 'teal', label: 'CONECTORES · concedo que… aun así, no obstante, con todo, de ahí que' },
    { tone: 'orange', label: 'MATIZ · atenuar (todo indica que, en buena parte) e intensificar con medida' },
    { tone: 'violet', label: 'VOCES Y REFORMULACIÓN · según, al parecer, es decir, en definitiva' },
  ],
  optionNotes: {
    'Además': '«Además» suma un argumento más del mismo tipo; no contrapone, no reformula y no cierra. Encadenado, hace que todos los argumentos parezcan iguales.',
    'Es decir': '«Es decir» repite la misma idea con otras palabras; no introduce una objeción, una consecuencia ni un argumento nuevo.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Tener razón y, además, convencer', coach: 'Hoy no aprendes formas nuevas: revisas. Today you revise, not learn new forms.',
      steps: [
        { title: 'El borrador de Raúl · Raúl’s draft', blocks: [
          { kind: 'lead', text: 'Raúl Ortega es responsable de personas en la Cooperativa Sierramar, una fábrica de muebles con 180 trabajadores. «El Correo de Sierramar», el periódico regional, le ha pedido una tribuna de opinión: Raúl defiende que las empresas medianas de la comarca prueben la **semana laboral de cuatro días**. Beatriz Salcedo, correctora y profesora de un taller de escritura, lee el borrador y le escribe: «Tienes razón, pero tu texto todavía no te la da». Hoy no aprendes estructuras nuevas: **revisas** un texto argumentativo completo con lo que ya sabes de C1 (conceder, reformular, atenuar, intensificar, atribuir, elegir el modo según tu postura y puntuar los conectores).', en: 'Raúl, head of people at a furniture cooperative, is writing an op-ed for the regional paper in favour of trying a four-day week. Beatriz, a copy editor, tells him: “You’re right, but your text doesn’t prove it yet.” No new structures today: you revise a whole argumentative text with the C1 tools you already have.' },
          { kind: 'guide', text: { teacher: 'Tú lees en voz alta las dos versiones. Tu alumno dice qué ha cambiado y por qué la segunda convence más, sin mirar todavía las explicaciones.', self: 'Lee las dos versiones en voz alta y anota tres diferencias antes de leer las explicaciones. (Spot three differences before reading the notes.)' } },
          { kind: 'compare', title: 'Antes y después · Before and after', columns: [
            { tone: 'orange', label: 'BORRADOR', sentence: 'Está demostrado que la semana de cuatro días es la mejor opción. Además, la semana de cuatro días mejora la salud. O sea, todo son ventajas.', idea: 'Afirma lo que no puede probar, repite el mismo sintagma, encadena conectores sin relación clara y cae en el registro coloquial.', en: 'It claims more than it can prove, repeats the same phrase, piles up connectors and slips into casual speech.' },
            { tone: 'blue', label: 'REVISIÓN', sentence: 'Todo indica que [[esta medida|blue]] reduce el cansancio de la plantilla. [[Concedo que|teal]] tiene costes al principio; [[aun así|teal]], merece la pena probarla.', idea: 'Mide la afirmación, retoma el tema con un encapsulador y reconoce la objeción antes de mantener la postura.', en: 'It sizes the claim to the evidence, refers back with a summarising noun and grants the objection before holding its ground.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Por qué convence más la revisión?', options: ['Porque es más corta.', 'Porque usa palabras más difíciles.', 'Porque mide lo que afirma y reconoce la objeción sin abandonar su postura.'], answer: 2, why: 'Lo que convence no es la dificultad del vocabulario, sino la precisión: afirma solo lo que puede sostener y responde a la objeción.', en: 'Why is the revision more persuasive? Precision, not vocabulary.' },
            { prompt: '«Concedo ese punto; aun así, mantengo la propuesta.» ¿Qué hace el hablante?', options: ['Cambia de opinión.', 'Acepta un argumento contrario y mantiene su conclusión.', 'Explica la misma idea con otras palabras.'], answer: 1, why: '«Concedo» acepta el punto; «aun así» dice que ese punto no basta para cambiar la conclusión.', en: 'The speaker grants the point but says it isn’t enough to change their conclusion.' },
          ] },
        ] },
        { title: 'Coherencia: una tesis, un plan · Coherence', mascot: '/brand/mascot/studying.webp', coach: '¿Qué defiendes y por dónde vas? What’s your point, and how will you get there?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'COHERENCIA · EL PLAN DEL TEXTO', question: '¿Sabe el lector, después de dos frases, qué defiendes y hacia dónde vas?', en: 'Coherence is about the plan. The thesis comes early, in one clear sentence. Each paragraph develops one main idea, announced in its first sentence. Arguments follow an order the reader can see. The strongest objection is acknowledged and answered. The conclusion restates the thesis in new words and opens a way forward; it doesn’t copy the introduction.', formula: ['introducción: contexto breve + tesis clara (una o dos frases)', 'cada párrafo = una idea principal, anunciada en su primera frase', 'argumentos con un orden visible (del más sólido al complementario, o al revés)', 'concesión + refutación: la objeción más fuerte, reconocida y respondida', 'conclusión: reformula la tesis (no la copia) y propone o abre'],
            meaning: 'La **coherencia** es el plan del texto. La **tesis** aparece pronto y en una sola frase clara. Cada **párrafo** desarrolla una idea, que su primera frase anuncia. Los argumentos siguen un orden que el lector puede ver. La objeción más fuerte se reconoce y se responde. La **conclusión** reformula la tesis con otras palabras y propone algo: no repite la introducción.',
            examples: [
              { es: 'Las empresas medianas de la comarca [[deberían probar|orange]] la semana de cuatro días durante un año.', en: 'A thesis: one sentence, one clear position; the conditional makes it a proposal, not an order.' },
              { es: 'El primer argumento es de salud: el cansancio también tiene un coste económico.', en: 'A topic sentence: the reader knows what this paragraph is about before reading it.' },
              { es: '[[En definitiva|violet]], no se trata de trabajar menos, sino de trabajar mejor.', en: 'A conclusion that restates the thesis in new words instead of copying it.' },
            ] },
          { kind: 'table', title: 'Un texto de 250–300 palabras · A 250–300 word text', head: ['Parte', 'Función', 'Extensión orientativa'], rows: [
            ['Introducción', 'situar el tema y presentar la **tesis**', '40–60 palabras'],
            ['Argumentos (uno o dos párrafos)', 'una idea por párrafo, con datos o ejemplos atribuidos', '80–110 palabras'],
            ['Concesión y refutación', 'reconocer la objeción más fuerte y responderla', '50–70 palabras'],
            ['Conclusión', 'reformular la tesis y proponer', '40–60 palabras'],
          ], note: 'Es un formato frecuente en las tareas de escritura de nivel C1, por ejemplo en el DELE C1. Aquí lo usamos como referencia de trabajo, no como modelo oficial de examen.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál funciona mejor como tesis de una tribuna?', options: ['Hoy en día se habla mucho de la jornada laboral.', 'Las empresas medianas deberían probar la semana de cuatro días durante un año.', 'La semana de cuatro días tiene ventajas e inconvenientes, como todo.'], answer: 1, why: 'Una tesis toma postura y se puede defender. Las otras dos son contexto o una obviedad que no compromete a nada.', en: 'Which works best as the thesis of an op-ed? A thesis takes a position that can be argued.' },
            { prompt: '¿Qué debe hacer la conclusión?', options: ['Copiar la primera frase para que quede clara.', 'Añadir un argumento nuevo que no ha aparecido antes.', 'Reformular la tesis con otras palabras y proponer un paso concreto.'], answer: 2, why: 'La conclusión cierra lo argumentado: si copia la tesis, suena mecánica; si añade un argumento nuevo, ese argumento queda sin desarrollar.', en: 'What should the conclusion do? Restate and propose, not copy or open new arguments.' },
          ] },
        ] },
        { title: 'Cohesión: referirse sin repetir · Referring back', mascot: '/brand/mascot/speaking.webp', coach: 'Una idea, varios nombres. One idea, several names.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'COHESIÓN · REFERIRSE SIN REPETIR', question: '¿Cómo vuelves a una idea ya dicha sin repetir las mismas palabras?', en: 'An encapsulator is a general noun with a demonstrative (esta medida, este problema) that sums up everything said before, a sentence or a whole paragraph, and makes it the topic of the next sentence. The noun you pick also interprets: “this measure”, “this risk” and “this opportunity” are not neutral. Dicho / dicha without an article is formal and written. Ello is formal and refers to a whole idea, never to a person.', formula: ['sinónimo o hiperónimo: la semana de cuatro días → la jornada reducida → la medida', 'encapsulador: este / esta + nombre general (esta medida, este problema, esta situación)', 'dicho / dicha + nombre, sin artículo (formal): dicha propuesta, dichos datos', 'pronombre: lo, la, esto, lo cual · ello (formal: «Ello exige…», «por ello»)', 'elipsis: no repites lo que se entiende («Unas empresas mejoraron; otras, no»)'],
            meaning: 'Un **encapsulador** resume en un nombre todo lo dicho antes (una frase o un párrafo entero) y lo convierte en el tema de la frase siguiente. El nombre que eliges también **interpreta**: «esta medida», «este riesgo» o «esta oportunidad» no son neutros. **Dicho / dicha** sin artículo es formal y escrito; **ello** es formal y se refiere a una idea completa, nunca a una persona.',
            examples: [
              { es: 'Las bajas por estrés crecieron un 15 % en dos años. [[Este problema|blue]] ya preocupa a la dirección.', en: '“This problem” sums up the whole previous sentence and labels it as a problem.' },
              { es: 'El comité presentó un calendario por turnos. [[Dicha propuesta|blue]] se votará en la asamblea de marzo.', en: '“Dicha” is formal written Spanish and takes no article.' },
              { es: 'La planta no puede parar un día entero. [[Ello exige|blue]] reorganizar los turnos.', en: '“Ello” picks up the whole idea, not a single noun: formal register.' },
              { es: 'Algunas empresas mejoraron su productividad; otras, no.', en: 'Ellipsis: the verb and object are understood, so they are not repeated.' },
            ] },
          { kind: 'table', title: 'Cadenas de referencia · Reference chains', head: ['Primera mención', 'Después', 'Registro'], rows: [
            ['la semana laboral de cuatro días', '[[esta medida|blue]] · la jornada reducida · el nuevo modelo', 'neutro'],
            ['las bajas crecieron un 15 %', '[[este problema|blue]] · dicho aumento · ello', 'neutro → formal'],
            ['la planta de producción y la oficina', 'esta última (= la oficina) · la primera (= la planta)', 'formal, escrito'],
          ], note: 'Evita **el mismo / la misma** como pronombre («la implantación de la misma»): la RAE lo desaconseja porque es pesado e innecesario. Basta con un posesivo, un pronombre o nada: «**su** implantación».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La cooperativa redujo la jornada en 2025. ___ mejoró el ambiente de trabajo.', options: ['La misma', 'Esta decisión', 'La dicha decisión'], answer: 1, why: 'Un encapsulador con demostrativo resume la frase anterior. «La misma» como pronombre se desaconseja, y «dicha» no lleva artículo.', en: 'The cooperative cut working hours in 2025. This decision improved the atmosphere at work.' },
            { prompt: 'Los turnos de la planta no se pueden cambiar sin un acuerdo. Por ___, la propuesta incluye una negociación.', options: ['la misma', 'ello', 'él'], answer: 1, why: '«Ello» retoma una idea completa (que no se pueden cambiar sin acuerdo). «Él» se refiere a una persona o a un nombre masculino concreto.', en: 'The shifts can’t be changed without an agreement. For that reason, the proposal includes a negotiation.' },
          ] },
        ] },
        { title: 'Conectores: menos y mejor · Fewer, sharper connectors', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Qué relación hay, exactamente? What exactly is the link?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CONECTORES · ELEGIR POR EL MATIZ', question: '¿Qué relación exacta hay entre las dos ideas, y hace falta marcarla?', en: 'A connector names the relationship between two ideas. Pick one that doesn’t fit (por tanto where nothing follows) and the reader loses the thread; repeat the same one (además… además…) and every argument seems to weigh the same. Use few, varied and exact connectors: sometimes paragraph order and a good encapsulator already do the job. Aun así and con todo don’t contrast two facts: they grant what was said and keep your conclusion.', formula: ['añadir: además, asimismo (formal) · ordenar: en primer lugar…, por otra parte…', 'contraponer: sin embargo, no obstante (formal), en cambio (dos realidades)', 'conceder y mantener: concedo que / es cierto que…; aun así, con todo, así y todo', 'reformular: es decir, dicho de otro modo · concluir: en definitiva, en suma', 'consecuencia: por tanto, por consiguiente · de ahí que + subjuntivo'],
            meaning: 'Un conector dice **qué relación** hay entre dos ideas. Si eliges uno que no corresponde («por tanto» donde no hay consecuencia), el lector pierde el hilo; si repites siempre el mismo («Además… Además…»), todos los argumentos parecen iguales. Usa pocos, variados y **exactos**: a veces el orden de los párrafos y un buen encapsulador ya hacen ese trabajo. **Aun así** y **con todo** no contraponen dos hechos: reconocen lo dicho y **mantienen** tu conclusión.',
            examples: [
              { es: '[[Concedo|teal]] ese punto; [[aun así|teal]], mantengo la propuesta.', en: 'I grant that point; even so, I stand by the proposal.' },
              { es: 'La transición tiene un coste inicial; [[no obstante|teal]], se recupera en menos de dos años.', en: 'Formal contrast: the second fact limits the weight of the first.' },
              { es: 'La jornada baja a 32 horas; [[es decir|violet]], cuatro días de ocho horas con el mismo sueldo.', en: 'Reformulation: the same idea, made concrete.' },
              { es: 'Las bajas se redujeron un 20 %; [[de ahí que|teal]] la dirección quiera ampliar la prueba.', en: 'A consequence presented as explained by the previous fact: subjunctive after de ahí que.' },
            ] },
          { kind: 'table', title: 'Puntuación de los conectores · Punctuation (class 197)', head: ['Posición', 'Ejemplo', 'Regla'], rows: [
            ['al principio de la oración', '. [[Sin embargo|teal]], … · ; [[no obstante|teal]], …', 'punto o punto y coma delante, coma detrás'],
            ['en medio de la oración', 'La medida, [[sin embargo|teal]], tiene costes.', 'entre comas'],
            ['[[de ahí que|teal]] · [[es decir|violet]]', '…; de ahí que + subj. · …; es decir, …', '«de ahí que» no lleva coma detrás'],
          ], note: '**Aun así** se escribe sin tilde en «aun» (= incluso). Una coma sola no une dos oraciones completas: «La obra fue cara, sin embargo se terminó» es un error frecuente.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La planta es un caso difícil. ___, dos cooperativas de la comarca ya lo han resuelto con turnos.', options: ['Con todo', 'Por consiguiente', 'Es decir'], answer: 0, why: 'Reconoces la dificultad y mantienes que es posible: «con todo». No es una consecuencia ni una reformulación.', en: 'The plant is a difficult case. Even so, two local cooperatives have already solved it with shifts.' },
            { prompt: '¿Qué versión está bien puntuada?', options: ['La medida es cara, no obstante compensa.', 'La medida es cara; no obstante compensa, a largo plazo.', 'La medida es cara; no obstante, compensa.'], answer: 2, why: 'Entre dos oraciones completas: punto y coma delante del conector y coma detrás.', en: 'Which version is correctly punctuated?' },
          ] },
        ] },
        { title: 'Matiz y registro · Hedging and register', mascot: '/brand/mascot/seated.webp', coach: 'Afirma lo que puedes defender. Claim what you can defend.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'MATIZ · NI EXAGERAR NI ESCONDERSE', question: '¿Afirmas exactamente lo que puedes defender, y en el registro del texto?', en: 'A C1 text persuades because it sizes its claims. A proven fact goes in the indicative, without detours; what is likely or debatable is hedged or attributed to its source; what you deny or question takes the subjunctive. Hedging everything is as bad as hedging nothing. And keep one register: an op-ed has no room for o sea, un montón or generic “you” (si trabajas cuatro días…); use quien trabaja…, se, or la plantilla.', formula: ['sobreafirmar: está demostrado que, todo el mundo sabe que, siempre, nadie… → fácil de rebatir', 'medir: todo indica que + ind. · los datos sugieren que + ind. · en buena parte · al menos en…', 'el modo según la postura: es evidente que + ind. · no está demostrado que + subj. · es probable que + subj.', 'esconderse: quizá + en cierto modo + hasta cierto punto… todo junto → no dices nada', 'atribuir: según X, a juicio de X, al parecer · intensificar solo lo que puedes probar'],
            meaning: 'Un texto C1 convence porque **mide** lo que afirma. Un hecho comprobado va en indicativo y sin rodeos («es evidente que **tiene** costes»); lo probable o discutible se atenúa o se atribuye a su fuente; lo que niegas o pones en duda pide subjuntivo («no está demostrado que **suba**»). Atenuar todo es tan malo como no atenuar nada. Y el **registro** es uno solo: en una tribuna sobran «o sea», «un montón» o el «tú» genérico («si trabajas cuatro días…»); usa «quien trabaja…», «se» o «la plantilla».',
            examples: [
              { es: '[[Todo indica que|orange]] la medida reduce el absentismo, [[al menos|orange]] en empresas de este tamaño.', en: 'A measured claim: strong, but limited to what the evidence covers.' },
              { es: 'No está demostrado que la productividad suba en todos los sectores.', en: 'Questioning a claim: the subjunctive marks that you don’t assert it.' },
              { es: '[[Según|violet]] el Observatorio, las bajas se redujeron en torno a un 20 %.', en: 'Attribution: the figure belongs to the source, not to you.' },
              { es: 'Quien trabaja cuatro días llega al lunes más descansado.', en: 'Generic subject in formal register, instead of the casual “si trabajas…”.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien medida para una tribuna?', options: ['Nadie puede negar que es la única solución posible.', 'Quizá, en cierto modo, podría ser algo positivo, hasta cierto punto.', 'Los datos sugieren que la medida reduce el cansancio, al menos en oficinas.'], answer: 2, why: 'Afirma con fuerza, pero dentro de lo que los datos permiten. «Nadie puede negar» sobreafirma; la frase con «quizá» se esconde detrás de varios atenuadores.', en: 'Which sentence is pitched right for an op-ed?' },
            { prompt: 'No está claro que la medida ___ igual en todos los puestos.', options: ['funcionará', 'funciona', 'funcione'], answer: 2, why: 'Pones en duda la afirmación: «no está claro que» pide subjuntivo.', en: 'It isn’t clear that the measure works equally well in every job.' },
          ] },
        ] },
        { title: 'Errores frecuentes y cuatro pasadas · Mistakes and four passes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Revisar es releer con una pregunta. Revising is rereading with a question.', blocks: [
          { kind: 'mistakes', title: 'Lo que más se corrige en C1 · What gets corrected most at C1', items: [
            { wrong: 'Se presentó el plan al comité y la aprobación del mismo llegó en mayo.', right: 'Se presentó el plan al comité y su aprobación llegó en mayo.', why: '«El mismo» como pronombre es pesado y la norma lo desaconseja: un posesivo basta.' },
            { wrong: 'El dicho problema no es nuevo.', right: 'Dicho problema no es nuevo. / Este problema no es nuevo.', why: '«Dicho» con este valor no lleva artículo.' },
            { wrong: 'Además, mejora la salud. Además, atrae talento. Además, reduce costes.', right: 'Mejora la salud y atrae talento; además, reduce costes.', why: 'El mismo conector repetido no ordena nada. Agrupa y deja el conector para el argumento que de verdad se suma.' },
            { wrong: 'Es evidente que la medida tenga costes.', right: 'Es evidente que la medida tiene costes.', why: '«Es evidente que» afirma: indicativo. El subjuntivo aparece al negar: «no es evidente que tenga…».' },
            { wrong: 'La obra fue cara, sin embargo se terminó a tiempo.', right: 'La obra fue cara; sin embargo, se terminó a tiempo.', why: 'Dos oraciones completas: punto y coma (o punto) delante del conector y coma detrás.' },
            { wrong: 'En conclusión, como he dicho antes, la semana de cuatro días es la mejor opción.', right: 'En definitiva, merece la pena probar este modelo antes de decidir.', why: 'La conclusión no copia la tesis ni la exagera: la reformula y propone.' },
          ] },
          { kind: 'decide', title: 'Cuatro pasadas de revisión · Four revision passes', steps: [
            { q: '¿Se entiende tu tesis en las dos primeras frases?', yes: 'Pasa a los párrafos.', no: 'Escríbela arriba, en una sola frase con un verbo de propuesta o de opinión.' },
            { q: '¿Cada párrafo tiene una sola idea, anunciada en su primera frase?', yes: 'Pasa a la cohesión.', no: 'Divide, reordena o elimina lo que no sostiene la tesis.' },
            { q: '¿Repites un mismo nombre o un mismo conector más de dos veces?', yes: 'Cámbialo por un encapsulador, un pronombre o nada; deja solo los conectores que marcan una relación exacta.', no: 'Pasa al matiz.' },
            { q: '¿Hay afirmaciones que nadie podría comprobar, o palabras de otro registro?', yes: 'Atenúalas o atribúyelas a su fuente; sustituye lo coloquial.', no: 'Revisa la puntuación de los conectores: el texto está listo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la primera pasada solo miras una cosa. ¿Cuál?', options: ['Si la tesis se entiende pronto.', 'Si las comas están bien.', 'Si hay sinónimos suficientes.'], answer: 0, why: 'Se revisa de lo grande a lo pequeño: primero el plan, al final la puntuación.', en: 'Revise from big to small: plan first, punctuation last.' },
          ] },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El borrador, en la mesa', coach: 'Escucha cómo revisa una correctora. Listen to an editor at work.',
      steps: [
        { title: 'La videollamada · The video call', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Beatriz y tu alumno es Raúl. Después tu alumno toca las expresiones marcadas y explica para qué sirve cada una.', self: 'Lee el diálogo en voz alta y toca las expresiones marcadas. (Read aloud and tap each marked expression.)' } },
          { kind: 'explore', title: 'Raúl y Beatriz revisan la tribuna', setting: 'Videollamada, martes por la tarde. Beatriz tiene abierto el borrador de Raúl, lleno de comentarios en el margen.', lines: [
            { who: 'Beatriz', text: 'Raúl, he leído tu tribuna con calma. La idea me gusta, pero no sé qué defiendes hasta el tercer párrafo. ¿Por qué no empiezas por ahí?', en: 'I like the idea, but I don’t know what you’re arguing until the third paragraph. Why not start there?' },
            { who: 'Raúl', text: 'Quería crear un poco de intriga, la verdad. Vale, abro con la tesis: «Las empresas medianas de la comarca [[deberían probar|orange]] la semana de cuatro días». ¿Así?', en: 'I wanted a bit of suspense, to be honest. OK, I’ll open with the thesis. Like that?' },
            { who: 'Beatriz', text: 'Así. Otra cosa: escribes «la semana de cuatro días» once veces. Una vez presentada, puedes decir [[esta medida|blue]], [[dicho modelo|blue]] o, simplemente, «la propuesta».', en: 'Exactly. Also, you write “the four-day week” eleven times. Once you’ve introduced it, you can call it “this measure”, “that model” or just “the proposal”.' },
            { who: 'Raúl', text: 'Ya, pero me daba miedo que no se entendiera. ¿Y si pongo «la misma»?', en: 'Yes, but I was afraid it wouldn’t be clear. What if I use “la misma”?' },
            { who: 'Beatriz', text: 'Mejor no: suena a informe administrativo. Usa un posesivo, un pronombre o, si te refieres a toda una idea, algo como «[[Ello exige|blue]] reorganizar los turnos».', en: 'Better not: it sounds like an official report. Use a possessive, a pronoun or, for a whole idea, something like “This requires reorganising the shifts”.' },
            { who: 'Raúl', text: 'Entendido. ¿Y el párrafo de producción? En la planta dicen que es imposible parar un día entero.', en: 'Got it. And the production paragraph? People at the plant say it’s impossible to stop for a whole day.' },
            { who: 'Beatriz', text: 'Ese puede ser tu mejor párrafo. No escondas la objeción: reconócela y responde. Algo así: «[[Concedo que|teal]] en la planta es más complicado; [[aun así|teal]], los turnos rotativos lo resuelven».', en: 'That could be your best paragraph. Don’t hide the objection: acknowledge it and answer it.' },
            { who: 'Raúl', text: '[[O sea|violet]], que darle la razón al otro no me quita fuerza.', en: 'So agreeing with the other side doesn’t weaken me.' },
            { who: 'Beatriz', text: 'Al contrario: te da credibilidad. Lo que sí te la quita es esto: «[[Está demostrado que|orange]] todas las empresas ganan productividad». ¿Todas? ¿Demostrado por quién?', en: 'Quite the opposite: it makes you credible. What does undermine you is this. All of them? Proven by whom?' },
            { who: 'Raúl', text: 'Por el informe del Observatorio del Trabajo… que, bueno, estudió cuarenta empresas.', en: 'By the Labour Observatory report… which, well, looked at forty companies.' },
            { who: 'Beatriz', text: 'Pues dilo así: «[[Según|violet]] el Observatorio, la productividad no bajó en ninguna de las cuarenta empresas estudiadas y mejoró [[en buena parte de ellas|orange]]». Es menos espectacular, pero nadie te lo puede discutir.', en: 'Then say exactly that. It’s less spectacular, but nobody can argue with it.' },
            { who: 'Raúl', text: 'Me convences. Y quito los cuatro «además» seguidos del segundo párrafo. [[En definitiva|violet]]: menos adornos y más argumentos.', en: 'You’ve convinced me. And I’ll cut the four “además” in a row in the second paragraph. In short: fewer frills, more arguments.' },
          ], notes: {
            'deberían probar': 'Tesis como **propuesta**: el condicional de «deber» suena firme pero no impositivo. Es más adecuado en una tribuna que «tienen que probar».',
            'esta medida': '**Encapsulador**: demostrativo + nombre general. Resume «la semana de cuatro días» y la presenta como una decisión que se puede tomar.',
            'dicho modelo': '**Dicho** + nombre, sin artículo: referencia formal y escrita a algo ya mencionado.',
            'Ello exige': '**Ello** retoma una idea completa (que la planta no puede parar), no un nombre concreto. Es formal; en la conversación se diría «eso».',
            'Concedo que': '**Conceder que** + indicativo: aceptas como verdadero el argumento contrario. Es el primer movimiento de la concesión (clase 190).',
            'aun así': '**Aun así** (sin tilde en «aun»): el argumento concedido no basta para cambiar la conclusión. Va tras punto y coma y con coma detrás.',
            'O sea': '**O sea** reformula y saca una conclusión en la conversación. Es perfecto aquí, entre colegas; en la tribuna sería un cambio de registro.',
            'Está demostrado que': '**Sobreafirmación**: presenta como prueba lo que es un indicio. Con «todas» se convierte en una frase fácil de rebatir.',
            'Según': '**Según** + fuente atribuye el dato: la responsabilidad de la cifra es del informe, no del autor (clase 193).',
            'en buena parte de ellas': '**Atenuación por alcance**: limita la afirmación a lo que dicen los datos. «Ellas» = las empresas: cohesión con pronombre.',
            'En definitiva': '**En definitiva** recapitula y cierra; es el conector de conclusión que Raúl usará al final de su texto (clase 189).',
          } },
        ] },
        { title: '¿Qué ha decidido Raúl? · What has Raúl decided?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Cuál es el primer problema que señala Beatriz?', options: ['El texto es demasiado corto.', 'Raúl no cita ninguna fuente.', 'La tesis aparece demasiado tarde.'], answer: 2, why: '«No sé qué defiendes hasta el tercer párrafo»: es un problema de coherencia.', en: 'What is the first problem Beatriz points out?' },
            { prompt: '¿Por qué quiere Beatriz conservar el párrafo de producción?', options: ['Porque reconocer la objeción y responderla da credibilidad.', 'Porque en la planta están de acuerdo con Raúl.', 'Porque es el más largo.'], answer: 0, why: 'Dice que «darle la razón al otro» no quita fuerza: «Al contrario: te da credibilidad».', en: 'Why does Beatriz want to keep the production paragraph?' },
            { prompt: '¿Qué cambia en la frase sobre la productividad?', options: ['Raúl la cambia por una opinión personal.', 'Raúl atribuye el dato al informe y limita su alcance.', 'Raúl la elimina.'], answer: 1, why: '«Según el Observatorio…» y «en buena parte de ellas»: atribución y atenuación.', en: 'What changes in the productivity sentence?' },
          ] },
        ] },
        { title: 'Los comentarios del margen · The margin comments', mascot: '/autoestudio/mascot/noting.webp', coach: 'Cada comentario, su problema. Each comment, its problem.', blocks: [
          { kind: 'classify', title: '¿Qué tipo de problema señala cada fragmento? · What kind of problem?', categories: [
            { id: 'coherencia', label: 'COHERENCIA · plan y tesis', tone: 'blue' },
            { id: 'cohesion', label: 'COHESIÓN · referencias', tone: 'violet' },
            { id: 'conectores', label: 'CONECTORES', tone: 'teal' },
            { id: 'matiz', label: 'MATIZ Y REGISTRO', tone: 'orange' },
          ], items: [
            { text: 'El primer párrafo habla del trabajo en general y no dice qué se propone.', answer: 'coherencia', why: 'Falta la tesis: es un problema del plan del texto.' },
            { text: 'Las bajas subieron. Las bajas preocupan a la dirección. Las bajas cuestan dinero.', answer: 'cohesion', why: 'El mismo sintagma tres veces: falta un encapsulador («este problema») o un pronombre.' },
            { text: 'La cooperativa redujo la jornada; sin embargo, el absentismo disminuyó.', answer: 'conectores', why: 'No hay contraste: el absentismo baja como se esperaba. «Sin embargo» no corresponde; sería «y» o «de hecho».' },
            { text: 'Todo el mundo sabe que es la mejor opción.', answer: 'matiz', why: 'Sobreafirmación: nadie puede comprobar lo que sabe «todo el mundo».' },
            { text: 'El argumento de la salud aparece en el segundo párrafo y vuelve, mezclado con otro, en el cuarto.', answer: 'coherencia', why: 'Una idea repartida en dos párrafos: el plan no está claro.' },
            { text: 'La implantación de la misma requiere tiempo.', answer: 'cohesion', why: '«La misma» como pronombre: mejor «su implantación».' },
            { text: 'Si trabajas cuatro días, estás más descansado, o sea, rindes más.', answer: 'matiz', why: '«Tú» genérico y «o sea»: registro coloquial en un texto formal.' },
            { text: 'Además, ahorra energía. Además, atrae talento. Además, mejora la conciliación.', answer: 'conectores', why: 'El mismo conector encadenado: todos los argumentos parecen iguales.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Revisar párrafo a párrafo', coach: 'Diagnostica, decide, corrige. Diagnose, decide, fix.',
      steps: [
        { title: 'Diagnóstico del primer borrador · Diagnosing the first draft', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada párrafo del primer borrador de Raúl. Tu alumno dice cuál es el problema principal antes de ver las opciones.', self: 'Lee cada párrafo del primer borrador y di cuál es su problema principal antes de mirar las opciones. (Name the main problem before looking at the options.)' } },
          { kind: 'choice', items: [
            { context: 'Párrafo 1: «Hoy en día el trabajo está cambiando mucho. Las nuevas tecnologías y los jóvenes han cambiado la forma de trabajar. Hay muchos debates sobre el tema y algunos países han hecho pruebas.»', prompt: '¿Cuál es el problema principal?', options: ['No presenta la tesis: el lector no sabe qué defiende el autor.', 'Usa conectores demasiado formales.', 'Abusa de la atenuación.'], answer: 0, why: 'Todo es contexto general; no hay ninguna postura. La tesis debería aparecer en la primera o la segunda frase.', en: 'Paragraph 1 is all background: there is no position.' },
            { context: 'Párrafo 2: «La semana de cuatro días mejora la salud. Además, la semana de cuatro días reduce las bajas. Además, la semana de cuatro días atrae talento.»', prompt: '¿Cuál es el problema principal?', options: ['Usa el subjuntivo donde no corresponde.', 'Repite el mismo sintagma y encadena «además»: faltan referencias y jerarquía.', 'No tiene ningún argumento.'], answer: 1, why: 'Los argumentos existen, pero suenan como una lista: falta cohesión (esta medida, ello) y un orden que diga cuál pesa más.', en: 'Paragraph 2 repeats the same phrase and stacks “además”.' },
            { context: 'Párrafo 3: «Algunos dicen que en la producción no se puede. Pero eso no es verdad. Es una excusa de los que no quieren cambiar.»', prompt: '¿Cuál es el problema principal?', options: ['Le falta un conector de conclusión.', 'Descarta la objeción sin concederla y ataca a quien la hace.', 'Cita demasiadas fuentes.'], answer: 1, why: 'En lugar de reconocer la dificultad y responder («Concedo que…; aun así…»), la niega y descalifica al otro: pierde credibilidad.', en: 'Paragraph 3 dismisses the objection and attacks the people who raise it.' },
            { context: 'Párrafo 4: «En conclusión, está demostrado que la semana de cuatro días es la mejor opción, o sea, que todos salimos ganando.»', prompt: '¿Cuál es el problema principal?', options: ['La conclusión es demasiado prudente.', 'No usa ningún conector.', 'Sobreafirma y rompe el registro formal.'], answer: 2, why: '«Está demostrado» y «la mejor opción» exageran; «o sea» es coloquial. Además, repite la tesis en lugar de reformularla.', en: 'Paragraph 4 over-claims and slips into casual register.' },
          ] },
        ] },
        { title: '¿Exagera, mide o se esconde? · Over-claim, measured, or hiding?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', categories: [
            { id: 'exagera', label: 'SOBREAFIRMA', tone: 'orange' },
            { id: 'mide', label: 'MIDE BIEN', tone: 'teal' },
            { id: 'esconde', label: 'SE ESCONDE', tone: 'violet' },
          ], items: [
            { text: 'Es indiscutible que nadie quiere volver a trabajar cinco días.', answer: 'exagera', why: '«Es indiscutible» y «nadie»: afirma lo que no puede comprobar.' },
            { text: 'Todo indica que la medida reduce el absentismo, al menos en empresas de este tamaño.', answer: 'mide', why: 'Afirma con fuerza y limita el alcance a lo que cubren los datos.' },
            { text: 'Quizá, en cierto modo, podría decirse que la medida sería, hasta cierto punto, algo positiva.', answer: 'esconde', why: 'Cinco atenuadores en una frase: el lector no sabe qué piensa el autor.' },
            { text: 'Los datos sugieren que la productividad no baja; no demuestran, en cambio, que suba en todos los sectores.', answer: 'mide', why: 'Distingue lo que los datos permiten decir de lo que no permiten.' },
            { text: 'Cualquier persona sensata ve que es la única solución.', answer: 'exagera', why: 'Descalifica a quien piensa distinto y presenta una opción como la única.' },
            { text: 'No sé, a lo mejor sí, o a lo mejor no; depende de muchas cosas.', answer: 'esconde', why: 'No toma postura y, además, el registro es coloquial.' },
          ] },
        ] },
        { title: 'Corrige el segundo borrador · Fix the second draft', mascot: '/brand/mascot/pointing.webp', coach: '¿Está bien? Si no, elige la corrección. Right? If not, pick the fix.', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La cooperativa probó la jornada de 32 horas en 2025. La misma redujo las bajas un 20 %.', ok: false, options: ['La cooperativa probó la jornada de 32 horas en 2025. Esta experiencia redujo las bajas un 20 %.', 'La cooperativa probó la jornada de 32 horas en 2025. La misma, redujo las bajas un 20 %.', 'La cooperativa probó la jornada de 32 horas en 2025. La cual redujo las bajas un 20 %.'], answer: 0, why: 'Un encapsulador con demostrativo («esta experiencia») retoma toda la frase anterior. «La misma» como pronombre se desaconseja, y «La cual» después de punto suena forzado y arcaico.' },
            { sentence: 'Las bajas por estrés crecieron un 15 %. Dicho problema no es nuevo: ya se planteó en 2019.', ok: true, why: '«Dicho problema», sin artículo, retoma de forma formal la frase anterior.' },
            { sentence: 'El turno de tarde es más corto. Sin embargo la producción no ha bajado.', ok: false, options: ['El turno de tarde es más corto, sin embargo la producción no ha bajado.', 'El turno de tarde es más corto. Sin embargo: la producción no ha bajado.', 'El turno de tarde es más corto. Sin embargo, la producción no ha bajado.'], answer: 2, why: 'Conector al principio de la oración: coma detrás. Una coma sola entre dos oraciones completas no basta, y los dos puntos no corresponden.' },
            { sentence: 'Es evidente que la transición tenga costes al principio.', ok: false, options: ['Es evidente que la transición tiene costes al principio.', 'Es evidente que la transición tuviera costes al principio.', 'Es evidente de que la transición tiene costes al principio.'], answer: 0, why: '«Es evidente que» afirma un hecho: indicativo. «Es evidente de que» es dequeísmo (clase 180).' },
            { sentence: 'Como dice el informe, la gente está súper contenta con la semana corta.', ok: false, options: ['Según el informe, la plantilla está un montón de contenta con la semana corta.', 'Según el informe, la gente está súper contenta con la semana corta.', 'Según el informe, la plantilla valora muy positivamente la semana corta.'], answer: 2, why: 'La atribución con «según» es correcta, pero «súper contenta» y «un montón» son coloquiales. En una tribuna: «valora muy positivamente».' },
            { sentence: 'Concedo que la transición exige una inversión inicial; aun así, el ahorro llega en el segundo año.', ok: true, why: 'Concesión completa: «concedo que» + indicativo, punto y coma, «aun así» con coma detrás y la conclusión que se mantiene.' },
          ] },
        ] },
        { title: 'El conector exacto · The exact connector', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'chat-fill', title: 'Raúl y Beatriz, por mensajes · Raúl and Beatriz, by text', lines: [
            { who: 'Raúl', text: 'Primera duda. «La medida tiene un coste inicial. ___, se recupera en menos de dos años.»', options: ['Es decir', 'Por tanto', 'No obstante'], answer: 2, why: 'El segundo hecho limita el peso del primero: contraste formal, «no obstante». No es una consecuencia ni una reformulación.' },
            { who: 'Beatriz', text: 'Bien. Y en el párrafo de la planta: «Concedo ese punto; ___, mantengo la propuesta.»', options: ['aun así', 'es decir', 'por consiguiente'], answer: 0, why: 'Concedes y mantienes tu conclusión: «aun así». «Por consiguiente» diría que mantienes la propuesta precisamente porque has concedido el punto.' },
            { who: 'Raúl', text: '¿Y para explicar las 32 horas? «La jornada baja a 32 horas; ___, cuatro días de ocho horas con el mismo sueldo.»', options: ['con todo', 'en cambio', 'es decir'], answer: 2, why: 'La segunda parte dice lo mismo de forma concreta: reformulación, «es decir».' },
            { who: 'Beatriz', text: 'Perfecto. Lo de las bajas: «Se redujeron un 20 %; ___ que la dirección quiera ampliar la prueba.»', options: ['por eso', 'así', 'de ahí'], answer: 2, why: 'Con el subjuntivo «quiera» solo encaja «de ahí que», consecuencia formal. «Así que» iría con indicativo («así que la dirección quiere…»), y «por eso» no forma conector con «que» en esta posición.' },
            { who: 'Raúl', text: 'Último: la conclusión. «___, no se trata de trabajar menos, sino de trabajar mejor.»', options: ['En definitiva', 'Sin embargo', 'Además'], answer: 0, why: 'Cierras recapitulando: «en definitiva». «Sin embargo» contrapondría y «además» sumaría un argumento.' },
            { who: 'Beatriz', text: 'Eso es. Con estos cambios, el texto respira.' },
          ] },
        ] },
        { title: 'Construye las frases clave · Build the key sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', items: [
            { tiles: ['Concedo', 'ese', 'punto;', 'aun', 'así,', 'mantengo', 'la', 'propuesta.'], accept: ['Concedo ese punto; aun así, mantengo la propuesta.'], en: 'I grant that point; even so, I stand by the proposal.' },
            { tiles: ['Dicha', 'medida', 'no', 'pretende', 'reducir', 'la', 'producción,', 'sino', 'el', 'desgaste.'], accept: ['Dicha medida no pretende reducir la producción, sino el desgaste.'], en: 'The measure is not meant to cut production, but wear and tear.' },
            { tiles: ['Todo', 'indica', 'que', 'la', 'prueba', 'ha', 'funcionado,', 'al', 'menos', 'en', 'oficinas.'], accept: ['Todo indica que la prueba ha funcionado, al menos en oficinas.'], en: 'Everything suggests the trial has worked, at least in offices.' },
          ] },
        ] },
        { title: 'Reescribe como un corrector · Rewrite like an editor', mascot: '/autoestudio/mascot/writing.webp', coach: 'Misma idea, mejor dicha. Same idea, better put.', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'La cooperativa redujo la jornada. La reducción de la jornada mejoró el clima laboral.', instruction: 'Escribe solo la segunda oración, sin repetir: empieza con un encapsulador (esta…, este…, dicha…).', accept: ['Esta medida mejoró el clima laboral', 'Esta reducción mejoró el clima laboral', 'Esta decisión mejoró el clima laboral', 'Esta iniciativa mejoró el clima laboral', 'Este cambio mejoró el clima laboral', 'Dicha medida mejoró el clima laboral', 'Dicha reducción mejoró el clima laboral', 'Dicha decisión mejoró el clima laboral', 'Dicho cambio mejoró el clima laboral'] },
            { prompt: 'Está demostrado que la semana de cuatro días funciona en todas las empresas.', instruction: 'Mide la afirmación: empieza con «Todo indica que» y cambia «todas las empresas» por «muchas empresas».', accept: ['Todo indica que la semana de cuatro días funciona en muchas empresas'] },
            { prompt: 'Es verdad que en la planta es más difícil. Pero yo sigo pensando lo mismo.', instruction: 'Una sola oración formal: «Concedo que…; aun así, mantengo mi postura».', accept: ['Concedo que en la planta es más difícil; aun así, mantengo mi postura', 'Concedo que es más difícil en la planta; aun así, mantengo mi postura'] },
            { prompt: 'El informe dice que la productividad sube. Yo no lo tengo tan claro.', instruction: 'Una sola oración: «Según el informe, …» con el condicional de rumor («subiría») y termina con «aunque los datos son limitados».', accept: ['Según el informe, la productividad subiría, aunque los datos son limitados'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La nota de voz de Beatriz', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Un mensaje antes de enviar · A voice note before sending', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota las tres correcciones de Beatriz y a qué parte del texto afecta cada una (coherencia, cohesión, matiz).', self: 'Escucha una vez para la idea general. En la segunda escucha, anota las tres correcciones y a qué parte del texto afecta cada una. (Note the three corrections and what each one affects.)' } },
          { kind: 'listen', title: 'Segunda versión', channel: 'NOTA DE VOZ · BEATRIZ SALCEDO', src: '/audio/grammar-live/504.mp3',
            before: 'Raúl le ha mandado a Beatriz la segunda versión. ¿Crees que ella le pedirá cambios grandes o pequeños? (Raúl sent Beatriz his second draft. Will she ask for big or small changes?)',
            gist: { prompt: '¿Qué hace Beatriz en el mensaje? · What does Beatriz do in the message?', options: ['Valora la mejora y propone tres cambios concretos antes de enviarlo.', 'Le explica cómo se publica una tribuna en el periódico.', 'Le dice a Raúl que reescriba el texto desde cero.'], answer: 0, why: 'Empieza diciendo que ha mejorado muchísimo y comenta «tres cosas antes de que la mandes».', en: 'She praises the improvement and suggests three specific changes before he sends it.' },
            details: [
              { prompt: '¿Qué problema queda en la conclusión?', options: ['Es demasiado larga.', 'Repite la tesis casi palabra por palabra.', 'No tiene ningún conector.'], answer: 1, why: '«La repites casi palabra por palabra; mejor reformúlala».', en: 'What problem remains in the conclusion?' },
              { prompt: '¿Qué propone Beatriz en lugar de «la implantación de la misma»?', options: ['«Dicha implantación».', '«Su implantación».', '«La implantación de ella».'], answer: 1, why: '«Ahí basta con “su implantación”»: un posesivo sustituye a «la misma».', en: 'What does she suggest instead of “la implantación de la misma”?' },
              { prompt: '¿Por qué le gusta el párrafo de la planta?', options: ['Porque cita al Observatorio.', 'Porque no menciona la objeción.', 'Porque concede la dificultad y aun así mantiene la propuesta.'], answer: 2, why: '«Concedes que allí es más difícil y, aun así, mantienes la propuesta con turnos rotativos».', en: 'Why does she like the plant paragraph?' },
              { prompt: '¿Qué le pide sobre la frase «nadie en su sano juicio puede oponerse»?', options: ['Que la ponga al principio.', 'Que la atribuya al Observatorio.', 'Que la cambie por algo más medido.'], answer: 2, why: 'Es «demasiado rotunda» y ofende a quien piensa distinto; propone «todo indica que merece la pena probarla».', en: 'What does she ask him to do with the “nobody in their right mind” sentence?' },
              { prompt: '¿Qué tiene que añadir Raúl al dato del 20 %?', options: ['La fuente.', 'Una pregunta retórica.', 'Un ejemplo personal.'], answer: 0, why: '«Di de dónde sale: “según el informe del Observatorio…”».', en: 'What must Raúl add to the 20% figure?' },
            ],
            transcript: 'Hola, Raúl, soy Beatriz. Acabo de leer la segunda versión y, de verdad, ha mejorado muchísimo. Te comento tres cosas antes de que la mandes al periódico. Primero, la estructura: la tesis ya está en el primer párrafo, que es donde tiene que estar. Eso sí, en la conclusión la repites casi palabra por palabra; mejor reformúlala, algo como «[[en definitiva|violet]], se trata de probar antes de decidir». Segundo, la cohesión. Has quitado casi todas las repeticiones, y [[esta medida|blue]], [[dicha propuesta|blue]] o [[este modelo|blue]] funcionan muy bien. Pero en el tercer párrafo escribes «la implantación de la misma»; ahí basta con «su implantación». Tercero, el matiz. El párrafo de la planta es el mejor del texto: [[concedes que|teal]] allí es más difícil y, [[aun así|teal]], mantienes la propuesta con turnos rotativos. Eso convence. En cambio, la frase final, «nadie en su sano juicio puede oponerse», es demasiado rotunda y, además, ofende a quien piensa distinto. Prueba con algo como «[[todo indica que|orange]] merece la pena probarla». Y el dato del 20 %: di de dónde sale, «[[según|violet]] el informe del Observatorio…». Con eso, para mí, está lista. Mándamela esta noche y le doy una última lectura. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Beatriz. Tu alumno es Raúl y te responde con otra nota de voz: acepta dos correcciones, discute una («Concedo que…; aun así…») y reformula en voz alta la frase final.', self: 'Responde a Beatriz en voz alta con una nota de voz: acepta dos correcciones, discute una con «Concedo que…; aun así…» y di cómo quedaría la frase final. (Reply aloud: accept two changes, push back on one.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Defender y revisar en voz alta', coach: 'Tesis, concesión, matiz, fuente. Thesis, concession, nuance, source.',
      steps: [
        { title: 'El debate en la radio regional · The regional radio debate', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de moderador y de oponente. Tu alumno defiende su postura sobre la semana de cuatro días (a favor o en contra) tarjeta por tarjeta. Cuando exagera o repite, tú le preguntas «¿Seguro? ¿Según quién?» y tu alumno matiza.', self: 'Elige una postura y responde en voz alta, tarjeta por tarjeta. Grábate y escucha: ¿exageras, repites o cambias de registro? (Record yourself and check.)' } },
          { kind: 'talk', cards: [
            { q: 'Presenta tu tesis en una frase y anuncia tus dos argumentos. · State your thesis in one sentence and announce your two arguments.', followUps: ['¿Cuál de los dos pesa más?', '¿Por qué una prueba y no una ley?'], phrases: ['[[deberían|orange]] + infinitivo', 'En primer lugar…; en segundo lugar…', 'No propongo…, sino…'], hint: 'Una frase para la postura, otra para el plan.', example: 'Las empresas medianas deberían probar la semana de cuatro días durante un año. No propongo una ley, sino una prueba. En primer lugar, por la salud de la plantilla; en segundo lugar, porque nos ayudaría a retener a los jóvenes.' },
            { q: 'Un encargado de producción dice: «En la planta eso es imposible». Concédele el punto y mantén tu postura. · Concede the objection and hold your position.', followUps: ['¿Y si los turnos no gustan a la plantilla?', '¿Conoces algún caso en que haya funcionado?'], phrases: ['[[Concedo que|teal]]…', '[[aun así|teal]] · [[con todo|teal]]', 'Es cierto que…; ahora bien,…'], hint: 'Primero aceptas de verdad la dificultad; después explicas por qué no basta para cambiar tu conclusión.', example: 'Concedo que en la planta es más difícil que en la oficina: las máquinas no pueden parar un día entero. Aun así, mantengo la propuesta, porque con turnos rotativos la planta funciona cinco días y cada persona descansa tres.', next: 'Ahora, la misma idea dicha de otra manera.' },
            { q: 'Un oyente no entiende qué significa «32 horas con el mismo sueldo». Reformúlalo de dos maneras. · Rephrase it two ways.', followUps: ['¿Y qué pasa con las horas extra?', '¿Cómo lo explicarías a alguien de otro sector?'], phrases: ['[[es decir|violet]]…', '[[dicho de otro modo|violet]]…', 'o sea… (solo en la conversación)'], hint: 'La reformulación no añade información nueva: hace concreta la misma idea.', example: 'Se trabajan 32 horas a la semana; es decir, cuatro días de ocho horas. Dicho de otro modo: un día libre más cada semana, sin cobrar menos.' },
            { q: 'Tu oponente exagera: «La semana de cuatro días lo arregla todo». Mide su frase sin quitarle toda la razón. · Hedge an over-claim.', followUps: ['¿En qué sectores tienes más dudas?', '¿Qué haría falta para estar seguros?'], phrases: ['[[todo indica que|orange]]…', '[[en buena parte|orange]]…', 'no está demostrado que + subjuntivo', 'al menos en…'], hint: 'Afirma lo que los datos permiten y pon en subjuntivo lo que no está probado.', example: 'Yo no diría tanto. Todo indica que reduce el cansancio, al menos en oficinas, pero no está demostrado que mejore la productividad en todos los sectores.', next: 'Ahora, las voces de otros.' },
            { q: 'Cuenta qué dice el informe del Observatorio, pero deja claro qué es dato y qué es opinión tuya. · Report a source and separate data from opinion.', followUps: ['¿Te fías de ese informe? ¿Por qué?', '¿Qué datos echas de menos?'], phrases: ['[[según|violet]] el informe…', '[[al parecer|violet]]…', 'a mi juicio…', 'el informe sugiere que…'], hint: 'Los datos van con su fuente; tu valoración, con una marca de opinión.', example: 'Según el informe, la productividad no bajó en ninguna de las cuarenta empresas, y las bajas se redujeron en torno a un 20 %. A mi juicio, eso basta para hacer una prueba, aunque no para cambiar la ley.' },
            { q: 'Corrector por un día: escucha un párrafo débil y di en voz alta qué cambiarías y por qué. · Peer-review a weak paragraph aloud.', followUps: ['¿Qué cambiarías primero?', '¿Cómo quedaría la primera frase?'], phrases: ['Yo empezaría por…', 'Aquí repites…; mejor [[esta medida|blue]]…', 'Esta frase es demasiado rotunda; yo diría…'], hint: 'Primero el diagnóstico (coherencia, cohesión, conectores, matiz); después, la versión nueva.', example: 'Yo empezaría por la tesis, porque no aparece hasta el final. Después, repites «el teletrabajo» cuatro veces: mejor «esta modalidad» o «dicho sistema». Y «todo el mundo prefiere trabajar en casa» es demasiado rotundo; yo diría que, según la encuesta, muchas personas lo prefieren.', teacher: 'Tú lees en voz alta este párrafo: «El teletrabajo es lo mejor. El teletrabajo ahorra tiempo. Además el teletrabajo ahorra dinero. Todo el mundo prefiere trabajar en casa, o sea, que hay que hacerlo ya». Tu alumno lo revisa en voz alta.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno modera y tú defiendes la postura contraria con exageraciones y repeticiones a propósito («está demostrado», «todo el mundo»). Tu alumno las detecta y te pide que las matices.', self: 'Ahora defiende la postura contraria (mantener la semana de cinco días) con las mismas tarjetas. (Now argue the other side with the same cards.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu tribuna, revisada', coach: 'Escribe, revisa en cuatro pasadas, entrega. Write, revise in four passes, submit.',
      steps: [
        { title: 'Una tribuna para «El Correo de Sierramar» · An op-ed for the regional paper', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Al terminar, revisan juntos el texto con las cuatro pasadas de Entender: primero la tesis y los párrafos, después las referencias, luego los conectores y por último el matiz y el registro.', self: 'Escribe tu tribuna y toca «Revisar mi texto». Después haz las cuatro pasadas de Entender, de lo grande a lo pequeño. (Then do the four revision passes, big to small.)' } },
          { kind: 'write', title: 'Tribuna de opinión · Opinion piece', situation: '«El Correo de Sierramar» abre un debate: «¿Debe la comarca probar la semana laboral de cuatro días?». Escribes una tribuna de 250–300 palabras para los lectores del periódico, a favor o en contra, y la entregas ya revisada. Si prefieres otro tema con dos posturas claras (el teletrabajo, los móviles en clase), puedes cambiarlo. (Write a 250–300 word op-ed for the regional paper, for or against, and hand it in revised.)', task: [
            'Tesis clara en el primer párrafo; un párrafo por idea; una conclusión que reformula la tesis (en definitiva, en suma) sin copiarla.',
            'Al menos dos encapsuladores o referencias (esta medida, dicha propuesta, ello) y ninguna repetición innecesaria, sin «el mismo / la misma» como pronombre.',
            'Un párrafo de concesión y refutación: concedo que / es cierto que…; aun así, no obstante o con todo.',
            'Una fuente atribuida (según…, a juicio de…) y al menos una afirmación medida (todo indica que, los datos sugieren, al menos…), sin «está demostrado» cuando no lo está.',
            'Registro formal y estable, con los conectores bien puntuados.',
          ], starters: ['Las empresas de nuestra comarca deberían…', 'No propongo…, sino…', 'En primer lugar, según…', 'Concedo que…; aun así, …', 'Los datos disponibles sugieren que…', 'Dicha solución…', 'En definitiva, …'],
            words: ['esta medida', 'dicho modelo', 'ello', 'concedo que', 'aun así', 'no obstante', 'con todo', 'según', 'todo indica que', 'al menos', 'no está demostrado que', 'es decir', 'de ahí que', 'en definitiva'],
            model: 'Las empresas medianas de nuestra comarca [[deberían probar|orange]], durante al menos un año, la semana laboral de cuatro días. No propongo una revolución, sino un experimento ordenado: treinta y dos horas semanales, el mismo salario y una evaluación pública de los resultados. Los argumentos a favor son sólidos. En primer lugar, [[según|violet]] el informe del Observatorio del Trabajo de Sierramar, las cuarenta empresas que aplicaron [[este modelo|blue]] redujeron las bajas por estrés en torno a un 20 %. En segundo lugar, una jornada más corta ayuda a retener a los profesionales jóvenes, que hoy se marchan a la capital en busca de mejores condiciones. Ambos datos apuntan en la misma dirección: el cansancio sale caro, y no solo a quien lo sufre. [[Concedo que|teal]] la medida no es igual de sencilla en todos los puestos. En una planta de producción, por ejemplo, no se pueden parar las máquinas un día entero. [[Aun así|teal]], mantengo la propuesta: los turnos rotativos permiten que la planta funcione cinco días mientras cada trabajador descansa tres. [[Dicha solución|blue]] ya se aplica, de hecho, en dos cooperativas de la comarca. Tampoco conviene exagerar. Los datos disponibles no demuestran que la productividad suba en todos los sectores; [[sugieren|orange]], más bien, que no baja, lo cual ya es mucho. [[De ahí que|teal]] hable de una prueba y no de una ley. [[En definitiva|violet]], no se trata de trabajar menos, sino de trabajar mejor. Si tras un año los resultados no acompañan, se vuelve al modelo anterior; si acompañan, habremos ganado tiempo, salud y, [[probablemente|orange]], también talento. Merece la pena intentarlo.',
            minWords: 250,
            checks: [
              { label: 'Una concesión (concedo que, es cierto que, reconozco que, si bien…)', pattern: '(?<!\\p{L})(?:concedo|concedemos|reconozco|reconocemos|admito|admitimos|es\\s+cierto|es\\s+verdad|si\\s+bien)(?!\\p{L})', tip: 'Reconoce la objeción más fuerte: «Concedo que la medida no es igual de sencilla en todos los puestos».' },
              { label: 'Un conector que mantiene tu postura (aun así, no obstante, con todo…)', pattern: '(?<!\\p{L})(?:aun\\s+así|no\\s+obstante|con\\s+todo|así\\s+y\\s+todo|sin\\s+embargo|ahora\\s+bien)(?!\\p{L})', tip: 'Después de conceder, mantén tu conclusión: «; aun así, mantengo la propuesta».' },
              { label: 'Un encapsulador (esta medida, dicha propuesta, este problema…)', pattern: '(?<!\\p{L})(?:est[ae]s?|dich[oa]s?|tal(?:es)?)\\s+(?:medidas?|propuestas?|modelos?|problemas?|planteamientos?|iniciativas?|cambios?|reducci[oó]n|enfoques?|ideas?|objeci[oó]n|argumentos?|experiencias?|datos?|cifras?|soluci[oó]n|situaci[oó]n|sistemas?|decisi[oó]n|prueba|jornada|modalidad)(?!\\p{L})', tip: 'Retoma lo dicho sin repetir: «Esta medida…», «Dicha solución…».' },
              { label: 'Una fuente atribuida (según, a juicio de, al parecer…)', pattern: '(?<!\\p{L})(?:según|de\\s+acuerdo\\s+con|a\\s+juicio\\s+de|en\\s+palabras\\s+de|al\\s+parecer)(?!\\p{L})', tip: 'Di de dónde sale el dato: «Según el informe del Observatorio, …».' },
              { label: 'Una afirmación medida (todo indica que, sugieren, al menos, probablemente…)', pattern: '(?<!\\p{L})(?:todo\\s+indica|sugiere|sugieren|al\\s+menos|en\\s+buena\\s+parte|en\\s+cierta\\s+medida|hasta\\s+cierto\\s+punto|probablemente|es\\s+probable|cabe\\s+pensar|parece)(?!\\p{L})', tip: 'Ajusta la fuerza a los datos: «Todo indica que…, al menos en…».' },
              { label: 'Un conector de conclusión o de reformulación (en definitiva, en suma, es decir…)', pattern: '(?<!\\p{L})(?:en\\s+definitiva|en\\s+suma|en\\s+resumen|en\\s+conclusión|dicho\\s+de\\s+otro\\s+modo|es\\s+decir)(?!\\p{L})', tip: 'Cierra reformulando la tesis: «En definitiva, no se trata de… sino de…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:o\\s+sea|un\\s+montón|súper)(?!\\p{L})', why: 'Registro coloquial: en una tribuna, usa «es decir», «muchos / mucho» o «muy».' },
              { pattern: '(?<!(?<!\\p{L})no\\s+)(?<!\\p{L})(?:está\\s+demostrado\\s+que|todo\\s+el\\s+mundo\\s+sabe|es\\s+indiscutible|nadie\\s+puede\\s+negar)(?!\\p{L})', why: 'Sobreafirmación: si no puedes probarlo, mídelo («todo indica que…») o atribúyelo a su fuente.' },
              { pattern: '(?<!\\p{L})(?:de|a|por|con|en|sobre)\\s+(?:el|la|los|las)\\s+mism[oa]s?(?=\\s*[.,;:)]|$)', why: '«El mismo / la misma» como pronombre: usa un posesivo, un pronombre o nada («su implantación»).' },
              { pattern: '(?<!(?<!\\p{L})no\\s+)(?<!\\p{L})es\\s+(?:evidente|obvio|indudable|innegable)\\s+que\\s+(?:\\p{L}+\\s+){0,3}?(?:sea|sean|tenga|tengan|haya|pueda|puedan|funcione|funcionen|suba|suban|baje|bajen)(?!\\p{L})', why: '**Es evidente que** afirma: indicativo («es evidente que **tiene** costes»).' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Revisar para convencer', coach: '¿Qué miras primero cuando revisas? What do you check first?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'COHERENCIA', formula: 'tesis arriba · un párrafo = una idea · conclusión que reformula', example: 'Las empresas medianas deberían probar la semana de cuatro días. … En definitiva, se trata de probar antes de decidir.', caption: 'el plan del texto', en: 'the reader knows your position after two sentences and can follow the plan' },
            { tone: 'blue', label: 'COHESIÓN', formula: 'esta medida · dicho problema (sin artículo) · ello · posesivo · elipsis', example: 'Las bajas crecieron un 15 %. Este problema ya preocupa a la dirección.', caption: 'referirse sin repetir y sin «el mismo»', en: 'refer back with summarising nouns, pronouns or nothing at all, never with “el mismo” as a pronoun' },
            { tone: 'teal', label: 'CONECTORES', formula: 'pocos y exactos · concedo que…; aun así, … · ; no obstante, · de ahí que + subj.', example: 'Concedo ese punto; aun así, mantengo la propuesta.', caption: 'la relación exacta, bien puntuada', en: 'each connector names one exact relationship; grant and hold with aun así or con todo' },
            { tone: 'orange', label: 'MATIZ Y REGISTRO', formula: 'es evidente que + ind. · no está demostrado que + subj. · todo indica que · según X', example: 'Todo indica que la medida reduce el absentismo, al menos en oficinas.', caption: 'ni exagerar ni esconderse, en un solo registro', en: 'size every claim to the evidence, attribute what isn’t yours, and keep one register' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Revisar no es buscar faltas: es releer el texto **con una pregunta cada vez**, de lo grande a lo pequeño. ¿Se ve la tesis? ¿Cada párrafo tiene su idea? ¿Repito? ¿Cada conector dice la relación exacta? ¿Afirmo solo lo que puedo defender? Un texto C1 no convence por sus palabras difíciles, sino porque nunca dice ni más ni menos de lo que puede sostener.', en: 'Revising isn’t hunting for typos: it’s rereading with one question at a time, from big to small. A C1 text doesn’t persuade through difficult words, but because it never says more, or less, than it can back up.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco decisiones, sin ayuda · Five decisions, no help', items: [
            { prompt: 'El ayuntamiento cerró el centro al tráfico en mayo. ___ ha reducido el ruido un 30 %.', options: ['La misma', 'Dicha', 'Esta medida'], answer: 2, why: 'Encapsulador con demostrativo y nombre. «Dicha» necesita un nombre detrás, y «la misma» como pronombre se desaconseja.', en: 'The council closed the centre to traffic in May. This measure has cut noise by 30%.' },
            { prompt: 'Reconozco que el carril bici resta plazas de aparcamiento. ___, creo que compensa.', options: ['Aun así', 'Es decir', 'Por consiguiente'], answer: 0, why: 'Concedes y mantienes tu conclusión: «aun así».', en: 'I admit the cycle lane takes away parking spaces. Even so, I think it’s worth it.' },
            { prompt: '¿Qué frase encaja en un texto argumentativo formal?', options: ['O sea, que el carril bici está genial.', 'Los datos disponibles sugieren que el carril bici ha reducido el tráfico en el centro.', 'Todo el mundo sabe que los carriles bici no sirven para nada.'], answer: 1, why: 'Afirmación medida y en registro formal. «Todo el mundo sabe» sobreafirma; «o sea» y «genial» son coloquiales.', en: 'Which sentence fits a formal argumentative text?' },
            { prompt: 'No está demostrado que la medida ___ al comercio del centro.', options: ['perjudique', 'perjudicará', 'perjudica'], answer: 0, why: 'Pones en duda la afirmación: subjuntivo.', en: 'It hasn’t been shown that the measure harms shops in the centre.' },
            { prompt: '¿Qué versión está bien puntuada?', options: ['La obra fue cara, no obstante se terminó a tiempo.', 'La obra fue cara; no obstante se terminó, a tiempo.', 'La obra fue cara; no obstante, se terminó a tiempo.'], answer: 2, why: 'Entre dos oraciones: punto y coma delante del conector y coma detrás.', en: 'Which version is correctly punctuated?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una carta vecinal. Now, a residents’ letter.', blocks: [
          { kind: 'lead', text: 'Lucía Varela, secretaria de la asociación vecinal del barrio de La Alameda, escribe una carta al ayuntamiento sobre el nuevo carril bici de la avenida. Su borrador repite, exagera y no concede nada. Revisa tres frases.', en: 'Lucía, secretary of a residents’ association, is writing to the council about the new cycle lane. Her draft repeats itself, over-claims and concedes nothing. Revise three sentences.' },
          { kind: 'rewrite', title: 'El borrador de Lucía · Lucía’s draft', items: [
            { prompt: 'El ayuntamiento ha creado un carril bici en la avenida. El carril bici de la avenida ha reducido el tráfico.', instruction: 'Escribe solo la segunda oración, sin repetir: empieza con un encapsulador (este…, esta…, dicho…).', accept: ['Este carril ha reducido el tráfico', 'Esta medida ha reducido el tráfico', 'Esta obra ha reducido el tráfico', 'Esta iniciativa ha reducido el tráfico', 'Este cambio ha reducido el tráfico', 'Dicho carril ha reducido el tráfico', 'Dicha medida ha reducido el tráfico', 'Dicha obra ha reducido el tráfico', 'Dicha iniciativa ha reducido el tráfico'] },
            { prompt: 'Es verdad que se han perdido plazas de aparcamiento. Pero nosotros seguimos apoyando el carril.', instruction: 'Una sola oración: empieza con «Concedemos que…» y usa «aun así».', accept: ['Concedemos que se han perdido plazas de aparcamiento; aun así, seguimos apoyando el carril'] },
            { prompt: 'Todo el mundo sabe que el carril bici es la solución a todos los problemas del barrio.', instruction: 'Mide la afirmación: empieza con «Todo indica que el carril bici…» y di solo que «ha mejorado la calidad del aire».', accept: ['Todo indica que el carril bici ha mejorado la calidad del aire', 'Todo indica que el carril bici ha mejorado la calidad del aire del barrio', 'Todo indica que el carril bici ha mejorado la calidad del aire en el barrio'] },
          ] },
        ] },
        { title: 'Ampliación · Registro académico y encapsuladores valorativos · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. En textos académicos o muy formales, la concesión se hace con **si bien** + indicativo («**Si bien** la medida tiene costes, merece la pena probarla»), y el contrapeso con **no es menos cierto que** («Es cierto que la planta es un caso difícil; **no es menos cierto que** dos cooperativas ya lo han resuelto»). **Cabe objetar que** anticipa una objeción de forma impersonal. Además, el encapsulador puede **valorar**: «esta medida» es neutro, pero «este despropósito» o «semejante ocurrencia» ya toman partido. En una tribuna se pueden usar si el texto justifica esa valoración; en un informe neutral, no.', en: 'For strong students or spare time. In academic or very formal texts, si bien + indicative concedes, no es menos cierto que (“it is no less true that”) adds a counterweight, and cabe objetar que (“one might object that”) anticipates an objection impersonally. Summarising nouns can also judge: “this measure” is neutral, but “this absurdity” takes sides. Fine in an op-ed that justifies it; not in a neutral report.' },
          { kind: 'choice', title: 'Reconocer · Recognise', items: [
            { prompt: '«Si bien la medida tiene costes, merece la pena probarla.» ¿Qué hace «si bien»?', options: ['Pone una condición, como «si».', 'Concede un hecho en registro formal, como «aunque» + indicativo.', 'Intensifica: significa «muy bien».'], answer: 1, why: '«Si bien» es concesivo y formal; va con indicativo porque el hecho se da por cierto.', en: 'What does “si bien” do here?' },
            { prompt: '«Es cierto que la planta es un caso difícil; no es menos cierto que dos cooperativas ya lo han resuelto.» ¿Qué aporta la segunda parte?', options: ['Un hecho igual de verdadero que contrapesa el primero.', 'Una reformulación del primer hecho.', 'Una duda sobre el primer hecho.'], answer: 0, why: '«No es menos cierto que» = «también es verdad que»: equilibra la concesión con un dato a favor.', en: 'What does the second half add?' },
            { prompt: 'Un informe técnico, neutral, resume la propuesta. ¿Qué encapsulador corresponde?', options: ['este despropósito', 'esta propuesta', 'semejante ocurrencia'], answer: 1, why: 'En un texto neutral, el encapsulador no valora: «esta propuesta». Los otros dos toman partido.', en: 'A neutral technical report: which summarising noun fits?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno reescribe el párrafo de concesión de su tribuna en registro académico, con «si bien» y «no es menos cierto que».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 205 · Futuro perfecto de subjuntivo: reconocimiento histórico', text: 'Has cerrado el bloque argumentativo de C1: ya revisas un texto completo y decides qué decir, cómo referirte a ello y con cuánta fuerza afirmarlo. El paso siguiente abre C2 con la otra cara de la precisión: leer textos formales antiguos o jurídicos. En la clase 205 aprendes a reconocer el futuro perfecto de subjuntivo («si para entonces no se hubiere presentado reclamación…»), una forma que no vas a escribir, pero que sí vas a encontrar.', en: 'You have finished the C1 argumentation block: you can revise a whole text and decide what to say, how to refer back to it and how strongly to claim it. The next step opens C2 with the other side of precision: reading old or legal formal texts. In class 205 you learn to recognise the future perfect subjunctive, a form you won’t write but will come across.', href: '/sistema-verbal/futuro-perfecto-subjuntivo', label: 'Ir a la clase 205' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Concedo ese punto; aun así, mantengo la propuesta” y “Concedo ese punto; por tanto, mantengo la propuesta”?». Respuesta esperada: con «aun así» la concesión no basta para cambiar la conclusión; con «por tanto», la concesión sería la causa de mantenerla, lo cual no tiene sentido. Tarea: la tribuna revisada, entregada junto con el primer borrador para comparar.' },
        ] },
      ],
    },
  ],
};
