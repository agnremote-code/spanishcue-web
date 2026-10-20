import type { LiveLesson } from '../types';

/**
 * Lesson 477 · C1 · Absolutas de participio y reducción de subordinadas (course unit G177).
 * Builds on G157 (lesson 457: participles and resultative verbs; its Ampliación
 * gave a first look at «una vez + participio») and on the temporal clauses of
 * G098 / G139. G176 (gerund and participle readings) runs in parallel and is not
 * assumed. Here the absolute participle is taught fully, as a tool of formal
 * written Spanish, together with the other ways of condensing a finite clause.
 * Scene: Bucaramanga (Colombia), the fictional Biblioteca Pública La Ceiba
 * reopens after fourteen months of renovation. Paula Ordóñez (communications)
 * edits the official report (memoria) drafted by the engineer Rodrigo Celis;
 * Beatriz Varela is the director. Explorar: Paula and Rodrigo revise his draft.
 * Escuchar: a local radio news item (Colombian male voice). Escribir: the
 * reopening notice for the municipal bulletin.
 * Content: participle + noun with gender/number agreement (Terminada la reunión,
 * Firmados los contratos), usually participle first; anteriority; temporal,
 * causal and conditional readings; una vez + participio (vs una vez que + verb);
 * transitive and change-of-state verbs only (llegado el momento, muerto el
 * perro, pasados tres días) vs activity verbs (*Trabajado el equipo…);
 * alternatives al / nada más (Spain; apenas in much of Latin America) / después
 * de / tras + infinitive (simple or compound) and tras + noun; reducing and
 * expanding (tense and mood come back: Una vez catalogados → Cuando se
 * cataloguen); fixed formulas (dicho esto, visto lo visto, dadas las
 * circunstancias, llegado el caso, dicho y hecho, bien mirado, visto y no
 * visto). Anchor: Una vez firmado el acuerdo, procederemos.
 * Ampliación: concessive «aun + participio», administrative «Vistos los
 * informes, …» and two proverbs. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 477,
  level: 'C1',
  title: 'Absolutas de participio y reducción de subordinadas',
  subtitle: 'Condensar «cuando se aprobó…» en «Aprobada la ley…» o «Tras la aprobación…», y saber cuándo no se puede, en textos formales.',
  legend: [
    { tone: 'violet', label: 'ABSOLUTA · participio + sustantivo, con concordancia (Firmados los contratos, …)' },
    { tone: 'teal', label: 'INFINITIVO · al, nada más, después de, tras + infinitivo' },
    { tone: 'blue', label: 'SUSTANTIVO · tras / después de + nombre (tras la firma del contrato)' },
    { tone: 'orange', label: 'SUBORDINADA CONJUGADA · cuando, como, si + verbo (cuando se aprobó…)' },
  ],
  optionNotes: {
    'Aprobando': 'El gerundio presenta la acción en curso, no terminada antes de la otra. Para «cuando ya se habían aprobado» se usa el participio, que concuerda con su sustantivo.',
    'Una vez que firmados los convenios, la universidad enviará a sus estudiantes.': '«Una vez que» va con un verbo conjugado (una vez que se firmen); «una vez» solo, con participio (una vez firmados).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Decir más con menos', coach: 'Una acción terminada, sin verbo conjugado. A finished action, no finite verb.',
      steps: [
        { title: 'Una memoria demasiado larga · A report that runs on', blocks: [
          { kind: 'lead', text: 'La **Biblioteca Pública La Ceiba**, en Bucaramanga, reabre después de catorce meses de obras. Rodrigo Celis, el ingeniero del proyecto, ha redactado la memoria final, pero cada párrafo empieza igual: «[[Cuando se aprobó|orange]] el proyecto…», «Cuando se firmó el contrato…», «Cuando se terminó la cubierta…». Paula Ordóñez, responsable de comunicación, lo corrige en una línea: «[[Aprobado el proyecto|violet]], se convocó el concurso de obras».', en: 'Formal written Spanish rarely strings together clause after clause with cuando. It condenses them: a participle agreeing with its own noun (an absolute construction), an infinitive after tras or al, or simply a noun. Today you learn to reduce clauses in these three ways, to expand them back, and to recognise when reduction does not work.' },
          { kind: 'compare', title: 'La misma información, tres formas', columns: [
            { tone: 'orange', label: 'SUBORDINADA CONJUGADA', sentence: '[[Cuando se firmó|orange]] el contrato, empezaron las obras.', idea: 'Explícita: dice el tiempo y la relación (cuando). Natural al hablar.', en: 'Fully explicit: tense, person and the link word are all there. This is the normal choice in speech.' },
            { tone: 'violet', label: 'ABSOLUTA DE PARTICIPIO', sentence: '[[Firmado el contrato|violet]], empezaron las obras.', idea: 'Compacta: el participio concuerda con «el contrato» y presenta la acción como terminada antes.', en: 'Compact and formal: the participle agrees with its noun and presents the action as completed before the main one.' },
            { tone: 'blue', label: 'GRUPO NOMINAL', sentence: '[[Tras la firma del contrato|blue]], empezaron las obras.', idea: 'La acción convertida en sustantivo: la opción más densa, típica de informes y noticias.', en: 'The action turned into a noun: the densest option, typical of reports and news writing.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué dice «Firmado el contrato, empezaron las obras» sobre el orden de los hechos?', options: ['Que las dos cosas ocurrieron a la vez.', 'Que las obras empezaron antes de firmar.', 'Que primero se firmó el contrato y después empezaron las obras.'], answer: 2, why: 'La absoluta de participio presenta una acción terminada antes que la de la oración principal.', en: 'What does the sentence tell you about the order of events?' },
            { prompt: '¿En qué texto esperarías «Aprobado el proyecto, se convocó el concurso»?', options: ['En una conversación en la cafetería.', 'En una memoria técnica o una noticia.', 'En un mensaje rápido a un amigo.'], answer: 1, why: 'Es una construcción propia de la lengua escrita y formal; al hablar se dice «cuando aprobaron el proyecto…».', en: 'Where would you expect this sentence?' },
          ] },
        ] },
        { title: 'La construcción absoluta · Form and agreement', mascot: '/brand/mascot/studying.webp', coach: 'El participio concuerda con su sustantivo. It agrees with its own noun.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PARTICIPIO + SUSTANTIVO', question: '¿Qué acción ya estaba terminada cuando ocurrió lo demás?', en: 'Which action was already over when the rest happened?', formula: ['participio + sustantivo, oración principal → Terminada la reunión, salimos.', 'una vez + participio + sustantivo → Una vez firmado el acuerdo, procederemos.', 'concordancia: firmado el acuerdo · firmada la cesión · firmados los contratos · firmadas las actas'],
            meaning: 'La construcción absoluta es un participio con **su propio sustantivo**, separada por coma de la oración principal. Presenta una acción **terminada antes** que la principal. El participio **concuerda en género y número** con ese sustantivo, que normalmente va **detrás**. Con un verbo transitivo, el sustantivo es lo que recibe la acción (el acuerdo se firmó), y el agente puede añadirse con **por**: «Aprobada la ley por el Congreso, …». Ese sustantivo no tiene que ser el sujeto de la principal. Es propia de informes, actas, noticias y textos académicos; en la conversación se prefiere «cuando…».',
            examples: [
              { es: '[[Terminada la reunión|violet]], los técnicos visitaron la obra.', en: 'The meeting was over before the visit: a typical sequence in minutes and reports.' },
              { es: '[[Revisadas las cuentas|violet]], la junta aprobó el informe anual.', en: 'Revisadas agrees with las cuentas (feminine plural), not with la junta.' },
              { es: '[[Una vez firmado el acuerdo|violet]], procederemos al traslado de la colección.', en: 'Una vez makes the time reading explicit; with a future main verb it means “once the agreement has been signed”.' },
              { es: '[[Aprobada la ley por el Congreso|violet]], el Gobierno tiene seis meses para aplicarla.', en: 'The agent can be kept with por, as in the passive.' },
            ] },
          { kind: 'table', title: '¿Qué verbos lo admiten? · Which verbs work?', head: ['Tipo de verbo', 'Ejemplo', '¿Funciona?'], rows: [
            ['transitivo: el sustantivo recibe la acción', '[[Firmado el contrato|violet]] · [[Aprobadas las cuentas|violet]]', 'sí'],
            ['intransitivo de cambio o de llegada: el sustantivo cambia de estado', '[[Llegado el momento|violet]] · [[Pasados tres días|violet]] · [[Caída la noche|violet]] · [[Muerto el perro|violet]]', 'sí'],
            ['intransitivo de actividad: trabajar, hablar, viajar, caminar', '*Trabajado el equipo toda la noche… · *Hablado la directora…', 'no: no hay un resultado que presentar'],
          ], note: '«Llegado el momento» o «muerto el perro» no son excepciones caprichosas: llegar, morir, nacer, pasar (el tiempo), caer o desaparecer expresan un cambio, y su participio sí presenta un resultado. Los verbos de actividad no; para ellos se usa tras + infinitivo: «Tras trabajar toda la noche, el equipo…».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ las actas, el secretario cerró la sesión.', options: ['Leído', 'Leídas', 'Leyendo'], answer: 1, why: 'El participio concuerda con su sustantivo, «las actas»: femenino plural.', en: 'Once the minutes had been read, the secretary closed the session.' },
            { prompt: '¿Cuál de estas absolutas NO es posible?', options: ['Pasadas dos semanas, …', 'Llegado el invierno, …', 'Viajado el alcalde, …'], answer: 2, why: 'Viajar es un verbo de actividad, sin resultado: no forma absolutas. Pasar (el tiempo) y llegar expresan un cambio y sí las forman.', en: 'Which absolute construction is not possible?' },
          ] },
        ] },
        { title: 'Tres lecturas · Time, cause, condition', mascot: '/brand/mascot/standing.webp', coach: 'El contexto decide la relación. Context decides.', blocks: [
          { kind: 'table', title: 'La absoluta no dice «cuando» ni «porque»: lo sugiere · It suggests the link', head: ['Lectura', 'Absoluta', 'Equivale a…'], rows: [
            ['temporal (la más frecuente)', '[[Terminada la mudanza|violet]], el personal ordenó las salas.', '[[Cuando terminó|orange]] la mudanza, …'],
            ['causal', '[[Cerrada la entrada principal|violet]], los lectores usan la del patio.', '[[Como está cerrada|orange]] la entrada principal, …'],
            ['condicional (sobre todo con condicional o futuro en la principal)', '[[Aprobado el presupuesto|violet]], las obras empezarían en mayo.', '[[Si se aprobara|orange]] el presupuesto, …'],
          ], note: 'Como la absoluta no tiene nexo, puede quedar ambigua. Si quieres dejar claro que hablas de tiempo, añade **una vez**: «Una vez aprobado el presupuesto, …». Con **apenas** («Apenas terminada la reunión, …») subrayas que lo segundo ocurrió enseguida.' },
          { kind: 'tip', icon: '🔑', title: 'Una vez + participio, una vez que + verbo · Two different patterns', text: '**Una vez** va directamente con el participio: «Una vez firmado el acuerdo». **Una vez que** pide un verbo conjugado, en subjuntivo si hablas del futuro: «Una vez que se firme el acuerdo, procederemos». Mezclarlas («*una vez que firmado») es un error frecuente.', en: 'Una vez is followed straight by the participle; una vez que needs a finite verb, in the subjunctive when it refers to the future. Blending the two (*una vez que firmado) is a common mistake.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'La principal está en condicional.', prompt: '¿Qué significa «Reparada la cubierta, el archivo podría abrir en enero»?', options: ['Que si se repara la cubierta, el archivo podría abrir en enero.', 'Que la cubierta se reparó en enero.', 'Que el archivo abrió en enero por la cubierta.'], answer: 0, why: 'Con un condicional en la principal, la absoluta se lee como condición: «si se repara / si se reparara…».', en: 'What does the sentence mean?' },
            { prompt: '___ que se instalen las estanterías, traeremos los libros.', options: ['Al', 'Una vez', 'Instaladas'], answer: 1, why: '«Una vez que» + verbo conjugado (aquí, subjuntivo de futuro). «Instaladas» o «al» no pueden ir seguidos de «que se instalen».', en: 'Once the shelves have been installed, we’ll bring the books.' },
          ] },
        ] },
        { title: 'Otras formas de reducir · Infinitives and nouns', mascot: '/brand/mascot/seated.webp', coach: 'Cada forma tiene su matiz. Each has its nuance.', blocks: [
          { kind: 'table', title: 'Las alternativas · The alternatives', head: ['Construcción', 'Qué aporta', 'Ejemplo'], rows: [
            ['**al** + infinitivo', 'simultaneidad o sucesión inmediata; con «no», a menudo causa', '[[Al abrir|teal]] la puerta, vimos la sala nueva. · [[Al no haber|teal]] quórum, se aplazó la votación.'],
            ['**nada más** + infinitivo', 'justo después; muy frecuente en España (en gran parte de América se dice más **apenas** + verbo conjugado)', '[[Nada más llegar|teal]], la directora revisó el archivo. · Apenas llegó, revisó el archivo.'],
            ['**después de / tras** + infinitivo', 'anterioridad; **tras** es más formal; el infinitivo compuesto (haber + participio) subraya que la acción estaba acabada', '[[Tras revisar|teal]] los planos, … · [[Después de haber firmado|teal]] el convenio, …'],
            ['**tras / después de** + sustantivo', 'la forma más compacta y formal; necesita un sustantivo derivado (firma, aprobación, cierre, llegada)', '[[Tras la aprobación de la ley|blue]], … · [[Después de la inauguración|blue]], …'],
          ], note: 'El sujeto: con **después de / tras + infinitivo**, lo normal es que coincida con el de la principal («Tras firmar el convenio, la directora dio una rueda de prensa»). Con **al + infinitivo** es frecuente un sujeto propio, detrás del verbo: «Al llegar la directora, empezó la reunión». La absoluta de participio siempre lleva su propio sustantivo.' },
          { kind: 'compare', title: 'Tres maneras de decir «inmediatamente después»', columns: [
            { tone: 'violet', label: 'ABSOLUTA', sentence: '[[Abiertas las puertas|violet]], entraron más de cien personas.', idea: 'Formal y escrita; el sujeto de la absoluta (las puertas) es distinto del de la principal.', en: 'Formal and written; the noun of the absolute need not match the main subject.' },
            { tone: 'teal', label: 'AL + INFINITIVO', sentence: '[[Al abrirse las puertas|teal]], entraron más de cien personas.', idea: 'Neutra: sirve en la crónica y en la conversación.', en: 'Neutral register: fine both in a report and in conversation.' },
            { tone: 'teal', label: 'NADA MÁS + INFINITIVO', sentence: '[[Nada más abrirse|teal]] las puertas, entraron más de cien personas.', idea: 'Subraya la inmediatez; muy habitual en España.', en: 'Stresses immediacy; especially common in Spain.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Tras ___ los planos, la arquitecta aprobó el diseño.', options: ['estudió', 'haber estudiado', 'estudiado'], answer: 1, why: 'Tras va seguido de un infinitivo (simple o compuesto) o de un sustantivo: tras estudiar / tras haber estudiado / tras el estudio de los planos.', en: 'After studying the plans, the architect approved the design.' },
            { prompt: '___ no llegar los permisos, la reapertura se retrasó una semana.', options: ['Una vez', 'Al', 'Nada más'], answer: 1, why: '«Al no + infinitivo» expresa causa: como no llegaron los permisos. «Nada más» y «una vez» no funcionan aquí.', en: 'Because the permits did not arrive, the reopening was delayed by a week.' },
          ] },
        ] },
        { title: 'Reducir y desplegar · Reduce and expand', mascot: '/autoestudio/mascot/noting.webp', coach: 'Antes de reducir, pregúntate tres cosas. Three questions first.', blocks: [
          { kind: 'decide', title: '¿Puedo convertir esta subordinada en una absoluta?', steps: [
            { q: '¿La acción de la subordinada está terminada antes de la principal?', yes: 'next', no: 'No uses el participio. Para algo en curso, durante + sustantivo o mientras + verbo: «[[Durante la instalación|blue]] de las estanterías, …».' },
            { q: '¿El verbo es transitivo (firmar, aprobar, revisar) o de cambio (llegar, pasar, morir)?', yes: 'next', no: 'Verbo de actividad: usa tras + infinitivo si el sujeto es el mismo («[[Tras trabajar|teal]] toda la noche, el equipo…») o un sustantivo («[[Tras una noche de trabajo|blue]], …»).' },
            { q: '¿Necesitas conservar quién lo hizo o una relación precisa (aunque, porque, si)?', yes: 'Mantén la subordinada, o usa un sustantivo con complemento: «[[Tras la firma del convenio por la rectora|blue]], …».', no: 'Reduce con concordancia: «[[Aprobada la reforma|violet]], …», o con «una vez» si quieres que se lea solo como tiempo.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Al desplegar, vuelven el tiempo y el modo · Expanding brings back tense and mood', text: 'La absoluta no tiene tiempo ni modo; al desplegarla tienes que elegirlos. Con pasado: «Concluidas las obras, la biblioteca reabrió» → «**Cuando concluyeron** las obras…». Con futuro, subjuntivo: «Concluidas las obras, la biblioteca reabrirá» → «**Cuando concluyan** / **se hayan concluido** las obras…». Con lectura causal: «**Como se habían agotado** los fondos…».', en: 'An absolute construction carries no tense or mood, so expanding it forces you to choose. A past main clause gives a past indicative; a future one requires the subjunctive after cuando (cuando concluyan). A causal reading becomes como + indicative.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mientras se renovaba la instalación eléctrica, los libros estaban en un depósito. ¿Cuál es la mejor reducción?', options: ['Renovando la instalación eléctrica, los libros estaban en un depósito.', 'Renovada la instalación eléctrica, los libros estaban en un depósito.', 'Durante la renovación de la instalación eléctrica, los libros estaban en un depósito.'], answer: 2, why: 'La acción estaba en curso, no terminada: no sirve el participio. Un sustantivo con «durante» conserva la simultaneidad.', en: 'Which reduction keeps the meaning?' },
            { prompt: 'Despliega: «Una vez revisados los permisos, abriremos la sala».', options: ['Cuando se revisen los permisos, abriremos la sala.', 'Cuando se revisaron los permisos, abriremos la sala.', 'Cuando se revisan los permisos, abriremos la sala.'], answer: 0, why: 'La principal es futura: después de «cuando», subjuntivo (se revisen o se hayan revisado).', en: 'Expand the absolute construction.' },
          ] },
        ] },
        { title: 'Fórmulas fijas y errores frecuentes · Set phrases and common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Algunas absolutas ya son fórmulas. Some are set phrases.', blocks: [
          { kind: 'table', title: 'Absolutas convertidas en fórmulas · Set phrases', head: ['Fórmula', 'Uso', 'Ejemplo'], rows: [
            ['[[Dicho esto|violet]] · dicho lo cual', 'cierra un punto y abre otro (having said that)', 'Los plazos se cumplieron. Dicho esto, quedan detalles pendientes.'],
            ['[[Visto lo visto|violet]]', 'a la vista de lo ocurrido (given what has happened)', 'Visto lo visto, conviene revisar el contrato.'],
            ['[[Dadas las circunstancias|violet]] · dada la hora', 'teniendo en cuenta…; concuerda: dado, dada, dados, dadas', 'Dadas las circunstancias, aplazamos la visita.'],
            ['[[Llegado el caso|violet]] · llegado el momento', 'si ocurre / cuando ocurra', 'Llegado el caso, abriremos también los domingos.'],
            ['[[Bien mirado|violet]]', 'pensándolo bien (on reflection)', 'Bien mirado, el retraso nos dio tiempo.'],
            ['[[Dicho y hecho|violet]]', 'lo que se dijo se hizo enseguida (no sooner said than done)', 'Propuso cerrar antes; dicho y hecho: a las seis ya estaba cerrado.'],
            ['[[Visto y no visto|violet]]', 'rapidísimo, en un instante (in a flash); coloquial', 'Las entradas se agotaron visto y no visto.'],
          ], note: '«Dicho esto» no cambia porque «esto» es neutro. «Dado» sí concuerda: «dadas las circunstancias», no «dado las circunstancias». Y el refrán «Muerto el perro, se acabó la rabia» es también una absoluta: si se elimina la causa, desaparece el problema.' },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Una vez firmado los contratos, empezarán las obras.', right: 'Una vez firmados los contratos, empezarán las obras.', why: 'El participio concuerda con su sustantivo: los contratos → firmados.' },
            { wrong: 'Una vez que aprobado el proyecto, se convocó el concurso.', right: 'Una vez aprobado el proyecto, … · Una vez que se aprobó el proyecto, …', why: '«Una vez» + participio; «una vez que» + verbo conjugado. No se mezclan.' },
            { wrong: 'Dado las circunstancias, se aplaza la visita.', right: 'Dadas las circunstancias, se aplaza la visita.', why: '«Dado» es un participio absoluto y concuerda con «las circunstancias».' },
            { wrong: 'Trabajado el equipo toda la noche, la sala quedó lista.', right: 'Tras trabajar toda la noche, el equipo dejó lista la sala.', why: 'Trabajar es un verbo de actividad, sin resultado: no forma absolutas. Usa tras + infinitivo.' },
            { wrong: 'Terminando la mudanza, el personal se tomó dos días libres.', right: 'Terminada la mudanza, el personal se tomó dos días libres.', why: 'Para una acción ya acabada antes de la principal, participio; el gerundio la presenta en curso.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Dados los resultados, la comisión renovó el contrato.', 'Dado los resultados, la comisión renovó el contrato.', 'Dando los resultados, la comisión renovó el contrato.'], answer: 0, why: 'Dado concuerda con «los resultados»: dados. Con gerundio cambia el sentido (la comisión daría los resultados).', en: 'Given the results, the committee renewed the contract.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tú dices una frase con «cuando» en pasado («Cuando se cerró el plazo, se publicó la lista») y tu alumno la reduce de tres maneras: con participio, con tras + infinitivo y con tras + sustantivo. Después, al revés: tú dices una absoluta y tu alumno la despliega.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Corrigiendo la memoria', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Menos «cuando» · Fewer «cuandos»', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rodrigo y tu alumno es Paula. Después tu alumno toca cada expresión marcada y dice qué subordinada conjugada sustituye.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y piensa qué frase con «cuando», «como» o «si» sustituye.' } },
          { kind: 'explore', title: 'Revisión del borrador', setting: 'Oficina de la Biblioteca Pública La Ceiba, en Bucaramanga. Paula Ordóñez revisa con Rodrigo Celis el borrador de la memoria final de las obras. (Paula goes through the engineer’s draft report with him.)', lines: [
            { who: 'Paula', text: 'Rodrigo, la memoria está completa, pero tres párrafos seguidos empiezan con «[[cuando se aprobó|orange]]», «cuando se firmó», «cuando se terminó»…', en: 'Rodrigo, the report has everything, but three paragraphs in a row begin with “when it was approved”, “when it was signed”, “when it was finished”…' },
            { who: 'Rodrigo', text: 'Es que así lo cuento yo. ¿Qué propones?', en: 'Well, that’s how I tell it. What do you suggest?' },
            { who: 'Paula', text: 'Condensar. En vez de «cuando se aprobó el proyecto», pon: «[[Aprobado el proyecto|violet]], la alcaldía convocó el concurso».', en: 'Condense it. Instead of “when the project was approved”, write: “With the project approved, the mayor’s office opened the tender.”' },
            { who: 'Rodrigo', text: 'De acuerdo. ¿Y el segundo? «Cuando se firmó el contrato, empezaron las obras».', en: 'Fine. And the second one? “When the contract was signed, work began.”' },
            { who: 'Paula', text: 'Para no repetir el participio: «[[Tras la firma del contrato|blue]], comenzaron las obras».', en: 'To avoid another participle: “After the signing of the contract, work began.”' },
            { who: 'Rodrigo', text: '¿Y puedo poner «Trabajado el equipo todo el verano, la cubierta quedó lista»?', en: 'And can I write “The team having worked all summer, the roof was finished”?' },
            { who: 'Paula', text: 'Eso no funciona: trabajar no deja un resultado que puedas presentar así. Mejor: «[[Tras trabajar|teal]] todo el verano, el equipo terminó la cubierta».', en: 'That doesn’t work: trabajar is an activity with no result you can present that way. Better: “After working all summer, the team finished the roof.”' },
            { who: 'Rodrigo', text: 'Entendido. Aquí hay otro: «Como se habían agotado los fondos, pedimos una ampliación».', en: 'Got it. Here’s another: “As the funds had run out, we requested an extension.”' },
            { who: 'Paula', text: '«[[Agotados los fondos|violet]], se solicitó una ampliación». Ojo: «agotados», en plural, por «los fondos».', en: '“The funds exhausted, an extension was requested.” Careful: agotados is plural because of los fondos.' },
            { who: 'Rodrigo', text: '¿Y el cierre? Tengo «cuando se instale el mobiliario, abriremos».', en: 'And the ending? I’ve got “when the furniture is installed, we’ll open”.' },
            { who: 'Paula', text: '«[[Una vez instalado el mobiliario|violet]], la biblioteca abrirá al público». [[Dicho esto|violet]], el resto está muy bien.', en: '“Once the furniture is installed, the library will open to the public.” That said, the rest is very good.' },
            { who: 'Rodrigo', text: 'Gracias. Se la mando a Beatriz [[al llegar|teal]] mañana; [[visto lo visto|violet]], prefiero releerla esta noche.', en: 'Thanks. I’ll send it to Beatriz when I get in tomorrow; given how this has gone, I’d rather reread it tonight.' },
          ], notes: {
            'cuando se aprobó': 'Subordinada temporal conjugada, con se impersonal o pasivo. Es correcta, pero repetida en cada párrafo hace el texto lento. Es justo lo que se puede reducir.',
            'Aprobado el proyecto': 'Absoluta de participio: **aprobado** concuerda con «el proyecto» (masculino singular). Presenta la aprobación como terminada antes de la convocatoria.',
            'Tras la firma del contrato': 'Reducción con un **sustantivo** (firma ← firmar). Muy formal y compacta; evita encadenar dos participios.',
            'Tras trabajar': 'Tras + infinitivo: la solución para un verbo de actividad, que no admite absoluta. El sujeto (el equipo) es el mismo que el de la principal.',
            'Agotados los fondos': 'Absoluta con lectura **causal** (= como se habían agotado). **Agotados** concuerda con «los fondos».',
            'Una vez instalado el mobiliario': '**Una vez** + participio: deja claro que es tiempo. La principal está en futuro y el participio no cambia; al desplegarlo, en cambio, haría falta subjuntivo: «cuando se instale».',
            'Dicho esto': 'Fórmula fija, invariable (esto es neutro): cierra lo anterior y pasa a otra idea. Equivale a «having said that».',
            'al llegar': 'Al + infinitivo: «cuando llegue». El sujeto es el mismo de la principal (Rodrigo).',
            'visto lo visto': 'Fórmula fija: «a la vista de lo que ha pasado». Rodrigo se refiere a todos los cambios que ha necesitado su borrador.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué problema tiene el borrador de Rodrigo?', options: ['Está escrito en un registro demasiado formal.', 'Le faltan datos de las obras.', 'Usa demasiadas subordinadas con «cuando» seguidas.'], answer: 2, why: 'Paula dice que la memoria está completa, pero que tres párrafos seguidos empiezan con «cuando se…».', en: 'What is wrong with Rodrigo’s draft?' },
            { prompt: '¿Por qué Paula rechaza «Trabajado el equipo todo el verano»?', options: ['Porque «trabajado» debería ir en femenino.', 'Porque trabajar es una actividad y no forma absolutas.', 'Porque falta «una vez» delante.'], answer: 1, why: 'Los verbos de actividad no tienen un resultado que el participio pueda presentar; se usa tras + infinitivo.', en: 'Why does Paula reject that sentence?' },
            { prompt: '¿Qué significa «Agotados los fondos, se solicitó una ampliación»?', options: ['Que se pidió más dinero antes de gastar el primero.', 'Que si se acababan los fondos, se pediría más.', 'Que se pidió más dinero porque se había acabado el que había.'], answer: 2, why: 'Aquí la absoluta tiene lectura causal: como se habían agotado los fondos.', en: 'What does the sentence mean?' },
          ] },
        ] },
        { title: '¿Se puede reducir? · Can it be reduced?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases del borrador de Rodrigo', categories: [
            { id: 'si', label: 'SÍ · admite una absoluta de participio', tone: 'violet' },
            { id: 'no', label: 'NO · mejor infinitivo o sustantivo', tone: 'teal' },
          ], items: [
            { text: 'Cuando se retiraron los andamios, se limpió la fachada.', answer: 'si', why: 'Retirar es transitivo y la acción terminó antes: «Retirados los andamios, …».' },
            { text: 'Mientras se pintaban las salas, el archivo siguió abierto.', answer: 'no', why: 'Acción en curso, no terminada: «Durante la pintura de las salas, …».' },
            { text: 'Después de que los obreros descansaron una semana, volvieron a la obra.', answer: 'no', why: 'Descansar es un verbo de actividad: «Tras descansar una semana, los obreros…».' },
            { text: 'Cuando llegó la temporada de lluvias, se paró la obra exterior.', answer: 'si', why: 'Llegar expresa un cambio: «Llegada la temporada de lluvias, …».' },
            { text: 'Cuando se catalogaron los mapas, se guardaron en el archivo.', answer: 'si', why: 'Transitivo y terminado: «Catalogados los mapas, …».' },
            { text: 'Después de que los técnicos hablaron con la alcaldesa, se tomó la decisión.', answer: 'no', why: 'Hablar es una actividad: «Tras la reunión con la alcaldesa, …» o «Tras hablar con la alcaldesa, los técnicos…».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué se pierde al pasar de “Como se habían agotado los fondos” a “Agotados los fondos”?». Respuesta esperada: el nexo explícito (como) y el tiempo verbal; el lector deduce la causa por el contexto.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Concordancia, verbo y matiz. Agreement, verb type, nuance.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Acta de la junta de la biblioteca.', prompt: '___ las cuentas del año, la junta pasó al segundo punto del orden del día.', options: ['Aprobado', 'Aprobando', 'Aprobadas'], answer: 2, why: 'El participio concuerda con «las cuentas» y presenta la aprobación como terminada antes del paso siguiente.', en: 'With the year’s accounts approved, the board moved on to the second item on the agenda.' },
            { context: 'Aviso de una convocatoria.', prompt: '___ el plazo de inscripción, no se admitirán más solicitudes.', options: ['Cerrando', 'Cerrado', 'Al cerrado'], answer: 1, why: 'Una vez que se cierre el plazo: absoluta de participio, masculino singular por «el plazo». «Al» va con infinitivo, no con participio.', en: 'Once the registration period has closed, no more applications will be accepted.' },
            { prompt: 'Una vez ___ las estanterías, empezaremos a colocar los libros.', options: ['montado', 'que montadas', 'montadas'], answer: 2, why: '«Una vez» + participio que concuerda con «las estanterías». «Una vez que» pediría un verbo conjugado.', en: 'Once the shelves are up, we’ll start putting the books in place.' },
            { context: 'Crónica de un diario de Madrid.', prompt: '___ anunciarse la reapertura, el teléfono de la biblioteca no paró de sonar.', options: ['Nada más', 'Una vez', 'Anunciada'], answer: 0, why: 'Nada más + infinitivo: justo después. «Una vez» y «anunciada» piden un participio con su sustantivo, no un infinitivo.', en: 'As soon as the reopening was announced, the library’s phone didn’t stop ringing.' },
            { prompt: 'Tras ___ el informe técnico, la alcaldía autorizó la reapertura.', options: ['haber revisado', 'revisando', 'revisó'], answer: 0, why: 'Tras va con infinitivo (simple o compuesto) o con sustantivo, nunca con gerundio ni con verbo conjugado.', en: 'After reviewing the technical report, the mayor’s office authorised the reopening.' },
          ] },
        ] },
        { title: '¿Qué relación sugiere? · Which link is implied?', blocks: [
          { kind: 'classify', title: 'Lee la absoluta y decide su lectura', categories: [
            { id: 'tiempo', label: 'TIEMPO · cuando…', tone: 'violet' },
            { id: 'causa', label: 'CAUSA · como…', tone: 'orange' },
            { id: 'condicion', label: 'CONDICIÓN · si…', tone: 'teal' },
          ], items: [
            { text: 'Inaugurada la sala infantil, empezaron los cuentacuentos de los sábados.', answer: 'tiempo', why: 'Una sucesión de hechos: cuando se inauguró la sala.' },
            { text: 'Agotadas las tarjetas de lector, hubo que imprimir más.', answer: 'causa', why: 'Se imprimieron más porque se habían agotado.' },
            { text: 'Instalada la calefacción, el archivo estaría protegido en invierno.', answer: 'condicion', why: 'El condicional de la principal indica hipótesis: si se instalara la calefacción.' },
            { text: 'Terminado el traslado de los fondos, el personal reorganizó los horarios.', answer: 'tiempo', why: 'Primero el traslado, después los horarios: cuando terminó.' },
            { text: 'Suspendido el servicio de préstamo por las obras, los lectores solo podían consultar los libros en sala.', answer: 'causa', why: 'Solo podían consultar en sala porque el préstamo estaba suspendido.' },
            { text: 'Aprobada la ampliación del horario, la biblioteca podría abrir los domingos.', answer: 'condicion', why: 'Con «podría», la absoluta plantea una condición: si se aprobara la ampliación.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Una vez firmado los convenios, la universidad enviará a sus estudiantes.', ok: false, options: ['Una vez que firmados los convenios, la universidad enviará a sus estudiantes.', 'Una vez firmando los convenios, la universidad enviará a sus estudiantes.', 'Una vez firmados los convenios, la universidad enviará a sus estudiantes.'], answer: 2, why: 'El participio concuerda con «los convenios»: firmados. «Una vez que» exige verbo conjugado.' },
            { sentence: 'Dado las circunstancias, la inauguración se celebrará en la terraza.', ok: false, options: ['Dando las circunstancias, la inauguración se celebrará en la terraza.', 'Dadas las circunstancias, la inauguración se celebrará en la terraza.', 'Dada las circunstancias, la inauguración se celebrará en la terraza.'], answer: 1, why: '«Dado» concuerda en género y número con su sustantivo: dadas las circunstancias.' },
            { sentence: 'Llegado el día de la reapertura, la directora estaba nerviosísima.', ok: true, why: 'Correcta: llegar es un verbo de cambio y admite la absoluta; «llegado» concuerda con «el día».' },
            { sentence: 'Trabajado el equipo toda la noche, la sala quedó lista.', ok: false, options: ['Trabajada toda la noche, el equipo dejó lista la sala.', 'Tras trabajar toda la noche, el equipo dejó lista la sala.', 'Una vez trabajado el equipo toda la noche, la sala quedó lista.'], answer: 1, why: 'Trabajar es un verbo de actividad y no forma absolutas, ni con «una vez». Tras + infinitivo, con el mismo sujeto.' },
            { sentence: 'Una vez que terminen las obras, se trasladará la colección.', ok: true, why: 'Correcta: «una vez que» + verbo conjugado, en subjuntivo porque se refiere al futuro.' },
            { sentence: 'Terminando la mudanza, el equipo celebró el fin de las obras con una comida.', ok: false, options: ['Al terminada la mudanza, el equipo celebró el fin de las obras con una comida.', 'Terminada la mudanza, el equipo celebró el fin de las obras con una comida.', 'Terminado la mudanza, el equipo celebró el fin de las obras con una comida.'], answer: 1, why: 'La mudanza ya había acabado antes de la comida: participio concordado (terminada). El gerundio la presentaría en curso.' },
          ] },
        ] },
        { title: 'La memoria, frase a frase · The report, line by line', blocks: [
          { kind: 'chat-fill', title: 'Paula le cuenta a Beatriz los cambios', lines: [
            { who: 'Beatriz', text: '¿Cómo va la memoria de las obras?' },
            { who: 'Paula', text: 'Casi lista. He cambiado el principio: «___ el proyecto por el Concejo, se convocó el concurso».', options: ['Aprobada', 'Aprobado', 'Aprobando'], answer: 1, why: 'Concuerda con «el proyecto», masculino singular; el agente va con «por el Concejo».' },
            { who: 'Beatriz', text: '¿Y lo de la cubierta? Rodrigo había escrito «cuando se terminó la cubierta».' },
            { who: 'Paula', text: 'Ahora dice: «___ la cubierta, se montó el archivo climatizado».', options: ['Terminado', 'Terminada', 'Al terminada'], answer: 1, why: 'Concuerda con «la cubierta», femenino singular.' },
            { who: 'Beatriz', text: 'Bien. ¿Y lo del dinero?' },
            { who: 'Paula', text: '«___ el presupuesto inicial, se solicitó una partida adicional».', options: ['Agotando', 'Agotados', 'Agotado'], answer: 2, why: 'Absoluta causal; concuerda con «el presupuesto», masculino singular.' },
            { who: 'Beatriz', text: '¿Y el final? Me gustaría que apareciera la fecha.' },
            { who: 'Paula', text: '«___ la inauguración, el 3 de marzo, la sala infantil abrirá todos los días».', options: ['Tras', 'Una vez', 'Después'], answer: 0, why: 'Tras + sustantivo. «Después» necesitaría «de»; «una vez» necesita un participio.' },
            { who: 'Beatriz', text: 'Perfecto. ¿Cuándo me la mandas?' },
            { who: 'Paula', text: '___ llegar a la oficina, te la envío.', options: ['Al', 'Una vez', 'Llegado'], answer: 0, why: 'Al + infinitivo: «cuando llegue». «Una vez» y «llegado» no van con infinitivo.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Una vez', 'firmados', 'los', 'contratos,', 'empezarán', 'las', 'obras'], accept: ['Una vez firmados los contratos, empezarán las obras', 'Una vez firmados los contratos, las obras empezarán'], en: 'Once the contracts are signed, work will begin.' },
            { tiles: ['Tras', 'la', 'aprobación', 'del', 'presupuesto,', 'se', 'convocó', 'el', 'concurso'], accept: ['Tras la aprobación del presupuesto, se convocó el concurso', 'Tras la aprobación del presupuesto, el concurso se convocó'], en: 'After the budget was approved, the tender was opened.' },
            { tiles: ['Llegado', 'el', 'momento,', 'la', 'alcaldía', 'tomará', 'una', 'decisión'], accept: ['Llegado el momento, la alcaldía tomará una decisión'], en: 'When the time comes, the mayor’s office will make a decision.' },
          ] },
        ] },
        { title: 'Reduce y despliega · Reduce and expand', blocks: [
          { kind: 'rewrite', title: 'En las dos direcciones', items: [
            { prompt: 'Cuando se restauraron los murales, la sala de lectura recuperó su color original.', instruction: 'Reduce con una absoluta de participio. Empieza con «Restaurados».', accept: ['Restaurados los murales, la sala de lectura recuperó su color original'] },
            { prompt: 'Cuando se clausuró la exposición, las piezas volvieron al archivo.', instruction: 'Reduce con un sustantivo. Empieza con «Tras la».', accept: ['Tras la clausura de la exposición, las piezas volvieron al archivo'] },
            { prompt: 'Una vez catalogados los periódicos antiguos, los estudiantes los digitalizarán.', instruction: 'Despliega con un verbo conjugado (ojo: es futuro). Empieza con «Cuando se».', accept: ['Cuando se cataloguen los periódicos antiguos, los estudiantes los digitalizarán', 'Cuando se hayan catalogado los periódicos antiguos, los estudiantes los digitalizarán'] },
            { prompt: 'Después de que la directora firmó el convenio, dio una rueda de prensa.', instruction: 'El sujeto es el mismo: reduce con tras + infinitivo compuesto. Empieza con «Tras haber».', accept: ['Tras haber firmado el convenio, la directora dio una rueda de prensa', 'Tras haber firmado el convenio, dio una rueda de prensa la directora'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno toma un texto real suyo (un correo de trabajo, un informe, un trabajo de clase) y busca dos subordinadas con «cuando» que se puedan reducir. Tú compruebas el tipo de verbo y la concordancia.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La noticia en la radio', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El informativo local · The local news', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada absoluta que oye y la despliega en voz alta con «cuando», «como» o «si». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada participio con su sustantivo y despliégalo con «cuando», «como» o «si».' } },
          { kind: 'listen', title: 'La Ceiba reabre sus puertas', channel: 'RADIO LOCAL · INFORMATIVO DEL MEDIODÍA · BUCARAMANGA', src: '/audio/grammar-live/477.mp3',
            before: 'La emisora local da la noticia de la reapertura de la biblioteca. ¿Qué datos crees que incluirá: fechas, dinero, horarios, problemas? (What details do you expect in a news item about the reopening?)',
            gist: { prompt: '¿De qué trata la noticia?', options: ['De la reapertura de la biblioteca tras las obras y de sus novedades.', 'Del cierre de la biblioteca por falta de presupuesto.', 'De un concurso de lectura organizado por la universidad.'], answer: 0, why: 'Anuncia que La Ceiba reabre el lunes y repasa las obras, la financiación, los horarios y la inauguración.', en: 'What is the news item about?' },
            details: [
              { prompt: '¿Por qué no se interrumpieron las obras en marzo?', options: ['Porque, agotado el presupuesto, la alcaldía aprobó una partida adicional.', 'Porque la universidad pagó la cubierta.', 'Porque los obreros trabajaron gratis.'], answer: 0, why: '«Agotado el presupuesto inicial el pasado mes de marzo, la alcaldía aprobó una partida adicional».', en: 'Why didn’t the work stop in March?' },
              { prompt: '¿Qué harán los estudiantes de historia?', options: ['Organizar la lectura colectiva.', 'Catalogar los libros infantiles.', 'Digitalizar los periódicos antiguos, tras la firma de un convenio.'], answer: 2, why: '«Tras la firma del convenio con la universidad, estudiantes de historia digitalizarán los periódicos antiguos».', en: 'What will the history students do?' },
              { prompt: '¿Qué cambia en el horario?', options: ['Abrirá ya todos los domingos.', 'Abrirá también los sábados por la tarde, y quizá los domingos más adelante.', 'Cerrará los lunes.'], answer: 1, why: '«Aprobada la ampliación, la biblioteca abrirá también los sábados por la tarde»; los domingos, «llegado el momento».', en: 'What changes in the opening hours?' },
              { prompt: '¿Qué recomienda la emisora al final?', options: ['Llegar antes de las nueve.', 'Ir en transporte público, porque el estacionamiento estará cerrado.', 'Reservar un sitio para la lectura.'], answer: 1, why: '«Dicho esto, un consejo: el estacionamiento seguirá cerrado, así que lo mejor es llegar en transporte público».', en: 'What does the station recommend at the end?' },
            ],
            transcript: 'Buenas tardes. Abrimos el informativo local con una noticia muy esperada: la Biblioteca Pública La Ceiba reabre sus puertas este lunes. [[Concluidas las obras|violet]] de reforma, que se prolongaron durante catorce meses, el edificio estrena sala infantil, terraza de lectura y un archivo climatizado para los fondos históricos. Según la directora, Beatriz Varela, el traslado de la colección fue lo más delicado. [[Una vez embalados los libros|violet]], cada caja se numeró y se registró, y [[tras reparar|teal]] la cubierta, el equipo empezó a montar el archivo. No faltaron los sobresaltos: [[agotado el presupuesto inicial|violet]] el pasado mes de marzo, la alcaldía aprobó una partida adicional, de modo que los trabajos no llegaron a interrumpirse. [[Tras la firma del convenio|blue]] con la universidad, además, estudiantes de historia digitalizarán los periódicos antiguos de la ciudad. ¿Y los horarios? [[Aprobada la ampliación|violet]], la biblioteca abrirá también los sábados por la tarde, y [[llegado el momento|violet]], se estudiará abrir los domingos. [[Al terminar|teal]] el acto de inauguración, previsto para las diez, habrá una lectura colectiva en la terraza. [[Dicho esto|violet]], un consejo: el estacionamiento seguirá cerrado, así que lo mejor es llegar en transporte público. Seguimos con más noticias.',
            reply: { teacher: 'Tú eres Beatriz Varela. Tu alumno es periodista y escribe en voz alta el titular y la entrada de la noticia para el periódico, con dos absolutas y un «tras + sustantivo».', self: 'Escribe el titular y las dos primeras líneas de la noticia para un periódico, con dos absolutas de participio y un «tras + sustantivo».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'De la conversación a la crónica', coach: 'Habla en formal: condensa. Speak formally: condense.',
      steps: [
        { title: 'Procesos, planes y valoraciones · Processes, plans, assessments', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las tarjetas. Tu alumno responde primero de manera natural y después repite la idea principal «como en un informe», con absolutas o tras + sustantivo. Tú anotas cada participio y, al final, revisan la concordancia.', self: 'Responde cada tarjeta en voz alta, primero como en una conversación y después como en un informe, condensando con absolutas o con tras + sustantivo.' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta un proceso largo que hayas vivido (una mudanza, una obra, un trámite) como si fuera una crónica. · Narrate a long process like a report.', followUps: ['¿Qué fue lo primero que se hizo?', '¿Hubo algún problema por el camino?', '¿Cómo terminó?'], phrases: ['[[Terminada|violet]] la primera fase, …', '[[Tras la firma|blue]] / [[Tras la llegada|blue]] de…, …', '[[Pasadas|violet]] dos semanas, …'], hint: 'Concuerda cada participio con su sustantivo; con verbos de actividad, usa tras + infinitivo.', example: 'El año pasado reformamos la cocina. Tras la firma del presupuesto, los obreros empezaron por el suelo. Retirados los azulejos viejos, apareció una tubería rota, así que pasadas dos semanas todavía no teníamos agua. Terminada la obra, celebramos con una cena para los vecinos.', next: 'Ahora, un plan con condiciones.' },
            { q: 'Piensa en un proyecto que depende de otra cosa (un viaje, un cambio de trabajo, un curso). ¿Qué harás una vez resuelto? · A plan that depends on something.', followUps: ['¿Qué tiene que pasar primero?', '¿Y si no sale bien?', '¿Qué harás llegado el momento?'], phrases: ['[[Una vez aprobado|violet]] / [[Una vez conseguida|violet]]…, …', '[[Llegado el momento|violet]], …', '[[Una vez que|orange]] + subjuntivo'], hint: 'Una vez + participio; una vez que + verbo conjugado (subjuntivo para el futuro).', example: 'Quiero hacer un máster en Chile. Una vez conseguida la beca, buscaré dónde vivir en Santiago, y una vez que me confirmen la plaza, dejaré el trabajo. Llegado el momento, ya decidiré si me quedo allí.', next: 'Ahora, tú eres Paula.' },
            { q: 'Eres Paula. Rodrigo insiste en escribir «Trabajado el equipo todo el verano…». Explícale por qué no funciona y propón dos alternativas. · Explain the problem to Rodrigo.', followUps: ['¿Qué verbos sí funcionan?', '¿Por qué «llegado el momento» sí es correcto?', '¿Qué alternativa prefieres y por qué?'], phrases: ['Trabajar es una actividad: no…', '[[Tras trabajar|teal]] todo el verano, …', '[[Tras un verano de trabajo|blue]], …'], hint: 'Distingue verbos transitivos y de cambio (sí) de verbos de actividad (no).', example: 'Mira, trabajar es una actividad: no deja un resultado que el participio pueda presentar, como sí pasa con firmar o con llegar. Puedes poner «Tras trabajar todo el verano, el equipo terminó la cubierta», o más compacto: «Tras un verano de trabajo, la cubierta quedó lista».', next: 'Ahora, un dictado formal.' },
            { q: 'Tu jefa te dicta un aviso en tono coloquial: «Cuando acabemos la auditoría, mandamos el informe, y si aprueban las cuentas, pagamos a los proveedores». Dilo en tono formal. · Make a spoken note formal.', followUps: ['¿Qué lectura tiene cada absoluta?', '¿Cambiarías algo por un sustantivo?', '¿Qué se pierde al condensar?'], phrases: ['[[Concluida|violet]] la auditoría, …', '[[Aprobadas|violet]] las cuentas, …', '[[Tras la auditoría|blue]], …'], hint: 'La principal en futuro; el participio concuerda con su sustantivo.', example: 'Concluida la auditoría, se enviará el informe. Aprobadas las cuentas, se procederá al pago a los proveedores. Si quiero dejar claro que la segunda es una condición, mejor: «En caso de que se aprueben las cuentas…».', next: 'Ahora, tu opinión.' },
            { q: 'Opina sobre un cambio reciente en tu ciudad o tu trabajo con fórmulas como «dicho esto», «visto lo visto», «bien mirado» o «dadas las circunstancias». · Give an opinion with set phrases.', followUps: ['¿Qué ha pasado exactamente?', '¿Cambiarías algo?', '¿Qué harías llegado el caso?'], phrases: ['[[Dicho esto|violet]], …', '[[Visto lo visto|violet]], …', '[[Bien mirado|violet]], …', '[[Dadas las circunstancias|violet]], …'], hint: '«Dicho esto» no cambia; «dadas las circunstancias» concuerda.', example: 'En mi ciudad han cerrado el centro al tráfico. Al principio me pareció exagerado. Bien mirado, ahora se respira mejor y hay más comercio. Dicho esto, el transporte público no ha mejorado, y visto lo visto, no creo que mejore pronto.', next: 'Ahora tú eres Beatriz.' },
            { q: 'Eres Beatriz Varela, la directora. Responde a la prensa el día de la reapertura: cómo fueron las obras y qué viene ahora. · You are the director at the press conference.', followUps: ['¿Qué fue lo más difícil?', '¿Cuándo abrirán los domingos?', '¿Qué pasará con los periódicos antiguos?'], phrases: ['[[Concluidas|violet]] las obras, …', '[[Tras la firma|blue]] del convenio, …', '[[Una vez digitalizados|violet]]…, …'], hint: 'Mezcla absolutas, tras + sustantivo y al + infinitivo; en formal, sin repetir «cuando».', example: 'Concluidas las obras, por fin podemos ofrecer una sala infantil y un archivo en condiciones. Lo más difícil fue el traslado: embalados los libros, había que numerar cada caja. Tras la firma del convenio con la universidad, empezaremos a digitalizar la prensa antigua y, una vez digitalizados los periódicos, se podrán consultar en línea.', teacher: 'Haz de periodista y pide cifras y fechas; tu alumno responde sin usar «cuando» más de una vez.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas un proceso con muchos «cuando» y tu alumno lo reformula en voz alta como en un informe.', self: 'Esta semana, revisa un correo formal tuyo antes de enviarlo: busca dos «cuando…» que puedas condensar y comprueba la concordancia.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La nota para el boletín', coach: 'Formal, compacto y sin repetir «cuando». Formal and compact.',
      steps: [
        { title: 'La nota de reapertura · The reopening notice', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Después revisan juntos cada absoluta: ¿el verbo lo permite? ¿Concuerda el participio? ¿Se entiende la relación (tiempo, causa, condición)?', self: 'Escribe tu nota y toca «Revisar mi texto». Después revisa cada absoluta: tipo de verbo, concordancia y relación con la principal.' } },
          { kind: 'write', title: 'Reapertura de La Ceiba', situation: 'Eres Paula Ordóñez. Escribe la nota oficial para el boletín municipal de Bucaramanga: anuncia la reapertura de la biblioteca, resume las obras y explica qué cambia para los lectores. (O escribe una nota formal sobre un proyecto que conozcas: una obra, un evento, un cambio en tu empresa.) · Write an official notice for the city bulletin, in formal, condensed Spanish.', task: [
              'Usa al menos dos absolutas de participio con concordancia correcta.',
              'Usa una vez + participio para algo que ocurrirá en el futuro.',
              'Condensa al menos una acción con tras / después de + sustantivo o infinitivo.',
              'Incluye una fórmula fija (dicho esto, dadas las circunstancias, llegado el momento…).',
            ], starters: ['Concluidas las obras de…, …', 'Aprobado el proyecto por…, …', 'Tras la firma de…, …', 'Una vez…, …', 'Llegado el momento, …'],
            words: ['concluidas', 'aprobado', 'agotado', 'tras la firma', 'al finalizar', 'una vez digitalizados', 'dadas las obras', 'llegado el momento', 'se recomienda', 'partida adicional'],
            model: '[[Concluidas las obras|violet]] de reforma, la Biblioteca Pública La Ceiba reabrirá sus puertas el próximo 3 de marzo. [[Aprobado el proyecto|violet]] por el Concejo Municipal hace dos años, los trabajos comenzaron [[tras la firma|blue]] del contrato con la constructora y se prolongaron durante catorce meses. [[Agotado el presupuesto inicial|violet]], la alcaldía aprobó una partida adicional que permitió reparar la cubierta y climatizar el archivo histórico. El edificio cuenta ahora con una sala infantil, una terraza de lectura y un horario ampliado a los sábados por la tarde. [[Al finalizar|teal]] el acto de inauguración, previsto para las diez de la mañana, se celebrará una lectura colectiva abierta a todo el público. [[Una vez digitalizados|violet]] los periódicos antiguos, tarea que asumirán estudiantes de la universidad, podrán consultarse en línea. [[Dadas las obras|violet]] pendientes en el estacionamiento, se recomienda llegar en transporte público. [[Llegado el momento|violet]], la dirección estudiará abrir también los domingos.',
            minWords: 110,
            checks: [
              { label: 'Absoluta de participio (participio + artículo al inicio de frase o tras coma)', pattern: '(?:^|[.;:,]\\s*)\\p{L}+(?:ad|id|ech|uest|ert|it)[oa]s?\\s+(?:el|la|los|las)(?!\\p{L})', tip: 'Abre una frase con participio + sustantivo: «Concluidas las obras, …».' },
              { label: 'Una vez + participio', pattern: '(?<!\\p{L})una\\s+vez\\s+\\p{L}+(?:ad|id|ech|uest|ert|it)[oa]s?(?!\\p{L})', tip: 'Para el futuro: «Una vez digitalizados los periódicos, …».' },
              { label: 'Tras / después de + sustantivo o infinitivo', pattern: '(?<!\\p{L})(?:tras|después\\s+de)\\s+\\p{L}+', tip: 'Condensa con «tras la firma del…» o «tras revisar…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})una\\s+vez\\s+que\\s+\\p{L}+(?:ad|id)[oa]s?(?!\\p{L})', why: '«Una vez que» va con verbo conjugado (una vez que se firme); con participio, solo «una vez» (una vez firmado).' },
              { pattern: '(?:^|[.;:]\\s*)dado\\s+(?:la|las|los)(?!\\p{L})', why: '«Dado» concuerda con su sustantivo: «dadas las circunstancias», «dada la situación», «dados los resultados».' },
              { pattern: '(?<!\\p{L})una\\s+vez\\s+\\p{L}+(?:ad|id)o\\s+(?:la|las|los)(?!\\p{L})', why: 'Revisa la concordancia: el participio debe concordar con su sustantivo (una vez firmados los contratos, una vez aprobada la ley).' },
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
            { tone: 'violet', label: 'ABSOLUTA DE PARTICIPIO', formula: 'participio + sustantivo, … · una vez + participio', example: 'Una vez firmado el acuerdo, procederemos.', caption: 'Acción terminada antes. Concuerda con su sustantivo. Solo verbos transitivos o de cambio.', en: 'An action completed beforehand. The participle agrees with its own noun. Only transitive or change-of-state verbs.' },
            { tone: 'teal', label: 'INFINITIVO', formula: 'al · nada más · después de · tras + infinitivo', example: 'Tras haber revisado los planos, el equipo empezó la obra.', caption: 'Para verbos de actividad y cuando el sujeto coincide; al + infinitivo admite sujeto propio.', en: 'Use it for activity verbs and when the subject is shared; al + infinitive can take its own subject.' },
            { tone: 'blue', label: 'SUSTANTIVO', formula: 'tras / después de / durante + nombre', example: 'Tras la aprobación de la ley, …', caption: 'La forma más compacta; durante sirve para acciones en curso.', en: 'The most compact option; durante covers actions still in progress.' },
            { tone: 'orange', label: 'DESPLEGAR', formula: 'cuando + indicativo (pasado) · cuando + subjuntivo (futuro) · como · si', example: 'Una vez revisados los permisos → Cuando se revisen los permisos…', caption: 'Al desplegar, elige tiempo, modo y nexo.', en: 'When expanding, you must choose the tense, the mood and the link word again.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de condensar, tres preguntas: ¿la acción está **terminada antes**? ¿El verbo es **transitivo o de cambio**? ¿Puedo perder el nexo sin que se pierda el sentido? Si las tres respuestas son sí, participio + sustantivo **con concordancia**. Si no, tras + infinitivo, un sustantivo o la subordinada de siempre.', en: 'Three questions before you condense: is the action finished beforehand, is the verb transitive or a change-of-state verb, and can the link word go without losing the meaning? Three yeses: a participle agreeing with its noun. Otherwise, tras + infinitive, a noun, or the ordinary clause.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ las presentaciones, la moderadora dio la palabra al primer ponente.', options: ['Hechas', 'Haciendo', 'Hecho'], answer: 0, why: 'Absoluta: el participio concuerda con «las presentaciones».', en: 'With the introductions made, the moderator gave the floor to the first speaker.' },
            { prompt: '¿Qué frase NO es correcta?', options: ['Pasados tres meses, nadie reclamó el paquete.', 'Caminados los turistas, el guía volvió al hotel.', 'Caída la noche, encendieron las luces del parque.'], answer: 1, why: 'Caminar es un verbo de actividad y no forma absolutas: «Tras caminar con los turistas, el guía…».', en: 'Which sentence is not correct?' },
            { prompt: 'Una vez ___ la solicitud, recibirá un correo de confirmación.', options: ['enviada', 'que enviada', 'enviar'], answer: 0, why: '«Una vez» + participio concordado con «la solicitud».', en: 'Once your application has been sent, you will receive a confirmation email.' },
            { prompt: 'Despliega: «Agotadas las entradas, se abrió una lista de espera».', options: ['Mientras se agotaban las entradas, se abrió una lista de espera.', 'Si se agotan las entradas, se abrió una lista de espera.', 'Como se habían agotado las entradas, se abrió una lista de espera.'], answer: 2, why: 'Lectura causal y anterior: como + pluscuamperfecto.', en: 'Expand the absolute construction.' },
            { prompt: 'La reunión fue tensa. ___, se llegó a un acuerdo razonable.', options: ['Dicho esto', 'Dicha esta', 'Diciendo esto'], answer: 0, why: 'Fórmula fija e invariable: «dicho esto» (esto es neutro).', en: 'The meeting was tense. That said, a reasonable agreement was reached.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el acta de una asociación. Now some minutes.', blocks: [
          { kind: 'lead', text: 'Lucía Peña es secretaria de una asociación de vecinos y tiene que pasar sus apuntes al acta oficial de la asamblea. Ayúdala a condensar.', en: 'Lucía Peña, secretary of a residents’ association, has to turn her notes into the official minutes. Help her condense each note into the formal style of minutes.' },
          { kind: 'rewrite', title: 'Los apuntes de Lucía · Lucía’s notes', items: [
            { prompt: 'Cuando se leyó el acta anterior, se aprobó por unanimidad.', instruction: 'Reduce con una absoluta. Empieza con «Leída».', accept: ['Leída el acta anterior, se aprobó por unanimidad', 'Leída el acta anterior, fue aprobada por unanimidad'] },
            { prompt: 'Como no se presentó ninguna candidatura, se prorrogó el mandato de la junta.', instruction: 'Usa al + no + infinitivo. Empieza con «Al no».', accept: ['Al no presentarse ninguna candidatura, se prorrogó el mandato de la junta', 'Al no haberse presentado ninguna candidatura, se prorrogó el mandato de la junta'] },
            { prompt: 'Cuando terminó el debate, la presidenta cerró la sesión.', instruction: 'Usa un sustantivo. Empieza con «Tras el».', accept: ['Tras el debate, la presidenta cerró la sesión', 'Tras el final del debate, la presidenta cerró la sesión', 'Tras el fin del debate, la presidenta cerró la sesión'] },
          ] },
        ] },
        { title: 'Ampliación · Concesión, lenguaje administrativo y refranes · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: el registro más formal. Optional: the most formal register.', blocks: [
          { kind: 'lead', text: 'Con **aun**, la absoluta toma valor **concesivo**: «**Aun terminadas** las obras, la biblioteca no podrá abrir sin los permisos» (aunque las obras estén terminadas). En las resoluciones administrativas y judiciales, las absolutas abren el texto: «**Vistos** los informes técnicos y **oídas** las partes, se resuelve…». Y dos refranes muy conocidos son absolutas: «**Muerto el perro**, se acabó la rabia» y «**Hecha la ley**, hecha la trampa».', en: 'With aun, the absolute construction becomes concessive (“even with the work finished…”). Administrative and legal rulings open with absolutes such as vistos los informes (“having examined the reports”). Two well-known proverbs are absolutes too: remove the cause and the problem goes away; every law has its loophole.' },
          { kind: 'choice', title: 'Elige · Choose', items: [
            { prompt: '___ aprobado el presupuesto, faltaba la firma del alcalde, así que la obra no empezó.', options: ['Tras', 'Una vez', 'Aun'], answer: 2, why: 'Hay oposición (aprobado, pero no empezó): aun + participio, concesivo. «Una vez» indicaría simple sucesión, y «tras» no va con participio.', en: 'Even with the budget approved, the mayor’s signature was missing, so work did not start.' },
            { prompt: 'Resolución municipal: «___ los informes técnicos, se autoriza la reapertura del edificio».', options: ['Visto que', 'Viendo', 'Vistos'], answer: 2, why: 'Fórmula administrativa: absoluta con «vistos», que concuerda con «los informes».', en: 'Municipal ruling: “Having examined the technical reports, the reopening of the building is authorised.”' },
          ] },
          { kind: 'rewrite', title: 'Al registro administrativo · Into administrative style', items: [
            { prompt: 'Como hemos estudiado la solicitud y hemos escuchado a los vecinos, autorizamos la terraza.', instruction: 'Empieza con «Estudiada la solicitud».', accept: ['Estudiada la solicitud y escuchados los vecinos, se autoriza la terraza', 'Estudiada la solicitud y oídos los vecinos, se autoriza la terraza', 'Estudiada la solicitud y escuchados los vecinos, autorizamos la terraza', 'Estudiada la solicitud y oídos los vecinos, autorizamos la terraza'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos que van rápido o si sobra tiempo. Extra: tu alumno busca una resolución o un acta real en internet y subraya las absolutas; después explica qué subordinada sustituye cada una.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 178 · Infinitivos dependientes y sujetos implícitos', text: 'Ya condensas subordinadas con participios, infinitivos y sustantivos: «Aprobada la ley…», «Tras firmar el convenio…», «Al llegar la directora…». En la clase 178 miras de cerca el **infinitivo**: de quién es el sujeto que no se dice («Te prometí **llamarte**»: lo hago yo; «Te permito **salir**»: lo haces tú), cuándo hace falta «que + verbo conjugado» y cómo evitar ambigüedades. Es el paso natural: hoy has visto que tras + infinitivo funciona cuando el sujeto coincide; mañana sabrás exactamente cuándo coincide.', en: 'You can now condense clauses with participles, infinitives and nouns. Class 178 focuses on the infinitive: whose is the unexpressed subject (te prometí llamarte: I call; te permito salir: you go out), when you need que + a finite verb instead, and how to avoid ambiguity. It follows naturally: today you saw that tras + infinitive works when the subjects match; next you learn exactly when they do.', href: '/gramatica/infinitivos-dependientes-y-sujetos-implicitos', label: 'Ir a la clase 178' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué se puede decir “Llegado el momento” pero no “Trabajado el equipo”?». Respuesta esperada: llegar expresa un cambio con resultado; trabajar es una actividad sin resultado. Tarea: reescribir un texto formal propio reduciendo tres subordinadas.' },
        ] },
      ],
    },
  ],
};
