import type { LiveLesson } from '../types';

/**
 * Lesson 534 · C2 · Análisis crítico de sesgos sintácticos y presuposiciones (course unit G234).
 * Builds on G219 (lesson 519: assertion vs presupposition, triggers, loaded questions), G227
 * (lesson 527: attribution verbs, vague sources, headline grammar) and G183 (lesson 483: passive
 * and impersonal constructions chosen by information structure). Their cores are only recalled.
 * C2 step: critical discourse analysis as a reading skill, presented neutrally (no partisan
 * politics, invented examples only): how syntax distributes responsibility. Agent deletion
 * (passive without por, se, pronominal event verbs «se produjeron disparos», intransitive and
 * unaccusative verbs «murió», «desaparece», «suben los precios», «resultar + participio») vs the
 * active with the agent as subject; nominalisation hiding agent and time (la subida de precios);
 * ordering and thematisation (who is the subject and topic of the headline); presuppositions in
 * headlines and questions (anchor: «¿Cuándo dejaste de ocultar la información?»); evaluative
 * adjectives and their position (la polémica supresión vs una supresión polémica); vague
 * quantification (miles de, numerosos expertos, cada vez más, hasta un…); modality as pressure
 * (podría, al parecer, no hay alternativa, hay que); euphemism and dysphemism (reordenación,
 * reajuste / tijeretazo, hachazo); inclusive and exclusive «nosotros». Limits of the method: an
 * agentless sentence is legitimate when the agent is unknown, obvious or irrelevant, and a
 * neutral rewrite must never invent a responsible party. Ampliación: framing metaphors and the
 * agentless «se» of scientific writing.
 * Scene: the adult media-literacy workshop «Leer entre líneas» at the public library of the
 * fictional city of Montesur. Coordinator Elena Barrios and participants Óscar Nieto (retired,
 * daily newspaper reader), Lucía Ferrer (journalism student) and Daniel Ortega (translator)
 * compare how two invented papers, «Crónica de Montesur» and «Montesur Hoy», covered the same
 * council decision: closing the night tram service. Facts: approved by the city council plenary
 * on 12 February at the proposal of the municipal government; from 1 March; about 1,800 riders a
 * night; expected saving 2.4 million euros a year; the municipal company will not renew forty
 * temporary contracts; a protest outside the town hall with some pushing, one resident treated
 * for a minor bruise (who pushed whom is not known).
 * Escuchar: Elena's podcast episode (es-PE-CamilaNeural, ustedes). Escribir: the workshop's
 * weekly critical-reading note on how both papers covered the fare rise.
 */
export const lesson: LiveLesson = {
  id: 534,
  level: 'C2',
  title: 'Análisis crítico de sesgos sintácticos y presuposiciones',
  subtitle: 'Leer cómo la sintaxis reparte la responsabilidad, detectar sesgos y presuposiciones, y reescribir un texto de forma neutral y exacta.',
  legend: [
    { tone: 'blue', label: 'AGENTE EXPLÍCITO · El pleno suprime el tranvía nocturno (who decides is the subject)' },
    { tone: 'orange', label: 'AGENTE BORRADO · se suprime, fue suprimido, desaparece, la supresión de… (the doer vanishes)' },
    { tone: 'violet', label: 'VALORACIÓN Y VAGUEDAD · la polémica medida, miles de, reajuste, hachazo, podría (evaluation slipped in)' },
    { tone: 'teal', label: 'PRESUPOSICIÓN Y NOSOTROS · ¿Hasta cuándo…?, todos tenemos que…, hemos garantizado (what is assumed, who is included)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Quién hace qué, y quién lo cuenta?', coach: 'La sintaxis también opina. Syntax has opinions too.',
      steps: [
        { title: 'Un hecho, dos titulares · One event, two headlines', blocks: [
          { kind: 'lead', text: 'Biblioteca Central de Montesur, martes por la tarde. En el taller «Leer entre líneas», Elena Barrios reparte dos periódicos del mismo día. El 12 de febrero, el pleno del Ayuntamiento aprobó, a propuesta del gobierno municipal, **suprimir el tranvía nocturno** desde el 1 de marzo. Lo usan unos 1.800 viajeros por noche y el ahorro previsto es de 2,4 millones de euros al año. Los datos son los mismos; los titulares, no. Hoy aprendes a leer **cómo la sintaxis reparte la responsabilidad**: quién aparece como sujeto, quién desaparece y qué se cuela sin argumentarse.', en: 'At an adult media-literacy workshop, the coordinator hands out two papers from the same day. The council has voted to close the night tram service. The facts are identical; the headlines are not. Today you learn to read how grammar distributes responsibility: who is made the subject, who disappears, and what gets slipped in without being argued.' },
          { kind: 'guide', text: { teacher: 'Tú lees los tres titulares en voz alta. Tu alumno dice en cada uno quién decide, qué palabra valora y qué dato falta.', self: 'Lee los tres titulares. En cada uno: ¿quién decide?, ¿qué palabra valora?, ¿qué dato falta? (Who decides, which word evaluates, what is missing?)' } },
          { kind: 'compare', title: 'El mismo pleno, tres titulares · The same vote, three headlines', columns: [
            { tone: 'orange', label: '«CRÓNICA DE MONTESUR»', sentence: '[[Se reajusta|orange]] el servicio nocturno del tranvía para garantizar su sostenibilidad', idea: 'Nadie decide: el «se» borra al agente, y «reajustar» suena a mantenimiento, no a cierre.', en: 'Nobody seems to decide anything: the impersonal se removes the agent, and “readjust” sounds like routine maintenance rather than closure. The purpose clause adds a justification as if it were a fact.' },
            { tone: 'violet', label: '«MONTESUR HOY»', sentence: 'El gobierno municipal [[deja sin tranvía nocturno a miles de vecinos|violet]]', idea: 'Hay responsable, pero «dejar sin» presenta a los vecinos como víctimas y «miles» infla el dato.', en: 'There is a responsible party, but “leaves… without” casts residents as victims and “thousands” inflates the real figure. It also skips the plenary vote.' },
            { tone: 'blue', label: 'VERSIÓN NEUTRA', sentence: '[[El pleno suprime|blue]] el tranvía nocturno desde el 1 de marzo para ahorrar 2,4 millones al año', idea: 'Quién, qué, cuándo y para qué, con el verbo exacto y la cifra oficial.', en: 'Who, what, when and why, with the precise verb and the official figure. The reader is left to judge for themselves.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué hace el «se» de «Se reajusta el servicio nocturno»?', options: ['Nada especial: es la forma obligatoria de los titulares.', 'Presenta la decisión sin nadie que la tome.', 'Indica que el servicio se ajusta solo, sin intervención humana.'], answer: 1, why: 'Es un se pasivo sin agente: la decisión existe, pero quien la tomó queda fuera de la frase.', en: 'The decision is there; the decision-maker is not.' },
            { prompt: '¿Por qué «miles de vecinos» no es un dato neutro?', options: ['Porque los titulares no admiten números.', 'Porque «vecinos» es una palabra coloquial.', 'Porque es una cantidad vaga que agranda los 1.800 viajeros por noche.'], answer: 2, why: 'La cuantificación vaga no se puede comprobar y aquí empuja hacia arriba: 1.800 viajeros no son «miles de vecinos».', en: 'Vague quantities cannot be checked, and this one pushes the number up.' },
          ] },
        ] },
        { title: 'Quién aparece y quién desaparece · Who shows up and who vanishes', mascot: '/brand/mascot/studying.webp', coach: 'De más a menos responsable. From most to least responsible.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LA ESCALA DE LA RESPONSABILIDAD', question: '¿El agente es sujeto, complemento, se deduce o ha desaparecido?', en: 'In lesson 483 you chose between active, passive and impersonal forms according to topic and register. Critical reading asks a different question: how much responsibility does each form assign? The active makes the agent the subject; the passive with “por” demotes it; the passive without “por” and passive or impersonal se remove it but still imply someone; event verbs like “producirse” and intransitive verbs like “morir”, “desaparecer” or “subir” remove even the idea that someone acted. The facts stay the same; the share of blame changes.', formula: ['activa: El pleno suprime el servicio → agente = sujeto', 'pasiva con por: El servicio es suprimido por el pleno → agente secundario', 'pasiva sin por / se: Se suprime el servicio → alguien lo hizo, pero no se dice', 'verbo intransitivo o de acontecimiento: El servicio desaparece · Se produjeron disparos → nadie actuó'],
            meaning: 'En la clase 483 elegiste entre activa, pasiva e impersonal según el tema y el registro. La lectura crítica hace otra pregunta: **¿cuánta responsabilidad atribuye cada forma?** La **activa** pone al agente de sujeto; la **pasiva con «por»** lo deja en segundo plano; la **pasiva sin «por»** y el **se** lo eliminan, aunque el lector aún supone que alguien actuó; los **verbos de acontecimiento** (producirse, registrarse) y los **intransitivos** (morir, desaparecer, subir) borran incluso esa idea. Los hechos son los mismos; el reparto de la culpa, no.',
            examples: [
              { es: '[[La policía disparó|blue]] contra los manifestantes. / [[Se produjeron disparos|orange]] durante la protesta.', en: 'Classic example from critical discourse analysis: the first names who fired; the second turns the shooting into something that simply happened.' },
              { es: '[[Murió|orange]] un manifestante. / Un manifestante [[fue abatido|orange]].', en: '“Murió” has no agent at all, as with an illness; “fue abatido” (was shot down) implies someone acted but does not say who.' },
              { es: '[[Suben|orange]] los precios del alquiler. / [[Los propietarios suben|blue]] los alquileres.', en: 'With an intransitive “subir”, prices rise like the tide; with the transitive verb, someone raises them.' },
              { es: 'Una vecina [[resultó herida|orange]] en la concentración.', en: '“Resultar + participle” reports the outcome without the cause: legitimate when nobody knows what happened, a bias when the cause is known and left out.' },
            ] },
          { kind: 'table', title: 'Cinco maneras de contar lo mismo · Five ways to tell the same thing', head: ['Forma · Form', 'Ejemplo · Example', 'Responsable · Responsible party'], rows: [
            ['activa', '[[La empresa municipal no renovará|blue]] cuarenta contratos temporales.', 'la empresa, sujeto y tema'],
            ['pasiva con «por»', 'Cuarenta contratos [[no serán renovados por|orange]] la empresa.', 'la empresa, en segundo plano'],
            ['pasiva refleja / se', '[[No se renovarán|orange]] cuarenta contratos.', 'alguien, sin nombre'],
            ['verbo intransitivo', 'Cuarenta contratos [[vencen|orange]] en marzo y [[no continúan|orange]].', 'nadie: parece un proceso natural'],
            ['nominalización', '[[La no renovación de|orange]] cuarenta contratos inquieta a la plantilla.', 'nadie, y además sin tiempo verbal'],
          ], note: 'Ninguna de estas formas es incorrecta. Lo que se analiza es **qué deja ver** cada una y si esa elección encaja con lo que se sabe.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase atribuye MENOS responsabilidad a alguien?', options: ['La piscina del barrio norte cerró sus puertas.', 'El Ayuntamiento cerró la piscina del barrio norte.', 'La piscina del barrio norte fue cerrada.'], answer: 0, why: 'Con «cerrar» intransitivo la piscina parece cerrar sola; la pasiva sin agente al menos deja suponer que alguien la cerró.', en: 'Which version makes it look as if nobody did anything?' },
            { prompt: '«Se registraron incidentes al final del partido». ¿Qué falta?', options: ['El sujeto gramatical.', 'Quién protagonizó los incidentes y qué ocurrió exactamente.', 'Nada: es la fórmula completa.'], answer: 1, why: 'El sujeto gramatical existe («incidentes»), pero el verbo de acontecimiento y el sustantivo vago esconden a los protagonistas y los hechos.', en: 'The grammar is complete; the information is not.' },
          ] },
        ] },
        { title: 'Nominalizar y ordenar · Nominalising and ordering', mascot: '/brand/mascot/standing.webp', coach: 'El primero de la frase es el protagonista. The first in the sentence is the protagonist.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'NOMINALIZACIÓN: EL HECHO SIN DUEÑO', question: '¿El verbo se ha convertido en un sustantivo que ya nadie conjuga?', en: 'A nominalisation turns an action into a thing: “la subida de precios”, “la supresión del servicio”. The agent, the tense and often the reason all disappear, and, as you saw in lesson 519, the definite article presents the event as an established fact. Nominalisations are normal in headlines and reports; critical reading simply asks who is behind them.', formula: ['subir los precios → la subida de precios', 'suprimir el servicio → la supresión del servicio', 'sin agente · sin tiempo · presentado como hecho'],
            meaning: 'La **nominalización** convierte una acción en una cosa: «**la subida de precios**», «**la supresión del servicio**». Desaparecen el agente, el tiempo y a menudo la causa, y, como viste en la clase 519, el artículo definido presenta el hecho como **ya establecido**. Es normal en titulares e informes; la lectura crítica solo pregunta **quién hay detrás**.',
            examples: [
              { es: '[[La supresión del tranvía nocturno|orange]] afectará a los turnos de madrugada.', en: 'The closure becomes the subject; who decided it is nowhere to be seen.' },
              { es: '[[El encarecimiento de la vivienda|orange]] expulsa a los jóvenes del centro.', en: 'Housing “becomes more expensive” by itself; neither owners, banks nor policy appear.' },
            ] },
          { kind: 'compare', title: '¿Quién es el tema? · Who is the topic?', columns: [
            { tone: 'blue', label: 'TEMA: QUIEN DECIDE', sentence: '[[El gobierno municipal|blue]] propone y el pleno aprueba el cierre del servicio nocturno.', idea: 'La frase trata de quien decide: el lector lo juzga a él.', en: 'The sentence is about the decision-maker, so that is who the reader evaluates.' },
            { tone: 'violet', label: 'TEMA: QUIEN LO SUFRE', sentence: '[[Unos 1.800 viajeros nocturnos|violet]] se quedan sin tranvía desde el 1 de marzo.', idea: 'La frase trata de los afectados: el foco está en la pérdida y quien decide no aparece.', en: 'The sentence is about those affected: the loss is in focus and the decision-maker drops out, even though the figure is exact.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'El orden también elige · Word order chooses too', text: 'En español, lo que va **primero** suele ser el tema: aquello de lo que trata la frase. Un titular que empieza por los afectados («Los usuarios pierden…») y otro que empieza por la institución («El Ayuntamiento suprime…») pueden ser igual de exactos y, aun así, **orientar la lectura** de forma distinta. No es manipulación en sí: es una elección que conviene **ver**.', en: 'What comes first is usually the topic. A headline that starts with those affected and one that starts with the institution can be equally accurate and still steer the reader differently. That is not manipulation in itself; it is a choice worth noticing.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La congelación de salarios se prolongará otro año». ¿Qué ha desaparecido de la frase?', options: ['Quién congela los salarios.', 'El sujeto gramatical.', 'El tiempo verbal.'], answer: 0, why: '«La congelación» tiene sujeto y el verbo tiene tiempo, pero quien congela los salarios no aparece en ningún sitio.', en: 'The sentence is complete; the employer is missing.' },
            { prompt: 'Dos titulares exactos: «La empresa cierra la fábrica» / «Doscientos empleados pierden su trabajo». ¿Qué cambia?', options: ['El segundo es falso.', 'El tema: el primero trata de quien cierra; el segundo, de los afectados.', 'Solo el número de palabras.'], answer: 1, why: 'Los dos pueden ser verdad. Cambia quién es el protagonista de la frase y, con ello, hacia dónde mira el lector.', en: 'Both can be true; what changes is whose story it is.' },
          ] },
        ] },
        { title: 'Lo que se cuela · What slips in', mascot: '/brand/mascot/speaking.webp', coach: 'Una palabra puede traer un juicio entero. One word can carry a whole verdict.', blocks: [
          { kind: 'table', title: 'Valoración sin argumentos · Evaluation without argument', head: ['Recurso · Device', 'Ejemplo · Example', 'Qué hace · What it does'], rows: [
            ['presuposición en el titular', '[[El fracaso del nuevo horario|teal]] obliga a replantear las líneas.', 'da por hecho el fracaso (clase 519)'],
            ['pregunta cargada', '[[¿Cuándo dejaste de ocultar|teal]] la información?', 'presupone que se ocultaba; solo pregunta cuándo'],
            ['adjetivo antepuesto', '[[La polémica supresión|violet]] del servicio…', 'presenta la polémica como algo sabido, sin discutirlo'],
            ['adjetivo pospuesto', 'Una supresión [[polémica|violet]]…', 'la valoración se ve más: clasifica y se puede discutir'],
            ['cuantificación vaga', '[[Numerosos expertos|violet]] · [[cada vez más|violet]] usuarios · descuentos de [[hasta|violet]] un 50 %', 'parece un dato, pero no se puede comprobar'],
          ], note: '«Hasta un 50 %» indica el **máximo**: puede que casi todo baje un 5 %. «Cada vez más» afirma una tendencia sin cifras ni periodo.' },
          { kind: 'concept', tone: 'violet', label: 'EL ADJETIVO Y SU SITIO', question: '¿El adjetivo se discute o se da por hecho?', en: 'Placed before the noun, an evaluative adjective tends to be read as a known, defining feature (an epithet): “la polémica supresión” takes the controversy for granted and tucks it inside the noun phrase, where it is hardly ever challenged. Placed after the noun, the adjective classifies the noun more openly, so the evaluation is easier to see. In a straight news item, the neutral choice is usually no evaluative adjective at all: give the fact that would justify it (“criticised by the residents’ federation”).', formula: ['la polémica supresión → la polémica se da por sabida', 'una supresión polémica → la valoración se ve y se discute', 'noticia neutra → el dato: «criticada por la federación vecinal»'],
            meaning: 'Antepuesto, el adjetivo valorativo tiende a leerse como una cualidad **ya sabida** (epíteto): «la **polémica** supresión» da la polémica por hecha y la esconde dentro del sintagma, donde casi nadie la discute. Pospuesto, el adjetivo **clasifica** de forma más visible y la valoración se percibe mejor. En una noticia, lo neutro suele ser **no usar el adjetivo** y dar el dato que lo justificaría: «criticada por la federación vecinal».',
            examples: [
              { es: 'La [[esperada|violet]] reforma del mercado abre en mayo.', en: 'Who was waiting? The epithet assumes general expectation.' },
              { es: 'La reforma del mercado, [[pedida por los comerciantes desde 2022|blue]], abre en mayo.', en: 'The same idea with its source and date: now it can be checked.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La tan criticada gestión del alcalde…». ¿Qué hace el adjetivo antepuesto?', options: ['Da por hecho que la gestión ha recibido muchas críticas, sin decir de quién.', 'Indica que el periodista cita a un crítico concreto.', 'Nada: es una fórmula de cortesía.'], answer: 0, why: 'El epíteto presenta la crítica como algo sabido; ni la fuente ni la cantidad se pueden comprobar.', en: 'The criticism is assumed, not reported.' },
            { prompt: 'Anuncio: «Ahorra hasta un 40 % en tu factura». ¿Qué garantiza?', options: ['Que todos ahorran un 40 %.', 'Que el ahorro medio es del 40 %.', 'Solo que nadie ahorra más de un 40 %.'], answer: 2, why: '«Hasta» marca el techo, no lo habitual: el ahorro real puede ser mucho menor.', en: '“Up to” sets a ceiling, not a typical result.' },
          ] },
        ] },
        { title: 'Modalidad, eufemismos y «nosotros» · Modality, euphemism and “we”', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Quién está dentro del «nosotros»? Who is inside the “we”?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'MODALIDAD: INSINUAR Y OBLIGAR', question: '¿La frase afirma, insinúa o presenta una decisión como inevitable?', en: 'Epistemic modality lets a text suggest without asserting: “podría”, “al parecer”, “no se descarta que” put an idea in the reader’s mind while committing nobody to it. Deontic modality works the other way: “hay que”, “es necesario”, “no hay alternativa” present a choice as a necessity, and the impersonal form hides who decided it was necessary and who will pay for it.', formula: ['insinuar: podría · al parecer · no se descarta que + subj.', 'obligar: hay que · es necesario · no hay alternativa', 'pregunta crítica: ¿quién lo afirma? ¿quién decide que es necesario?'],
            meaning: 'La modalidad **epistémica** permite sugerir sin afirmar: «**podría**», «**al parecer**», «**no se descarta que**» dejan la idea en la cabeza del lector sin que nadie se comprometa. La **deóntica** hace lo contrario: «**hay que**», «**es necesario**», «**no hay alternativa**» presentan una elección como una necesidad, y la forma impersonal oculta quién decidió que era necesaria y quién la paga.',
            examples: [
              { es: 'El servicio nocturno [[podría|violet]] volver en verano.', en: 'Nobody promises anything: the conditional keeps everyone off the hook.' },
              { es: '[[No hay alternativa|violet]]: [[hay que|violet]] reducir el gasto.', en: 'A political choice dressed as a fact of nature; alternatives exist, they were simply not chosen.' },
            ] },
          { kind: 'table', title: 'Eufemismo y disfemismo · Euphemism and dysphemism', head: ['Hecho · Fact', 'Eufemismo (suaviza)', 'Disfemismo (endurece)', 'Término exacto'], rows: [
            ['se elimina un servicio', '[[reordenación, reajuste|violet]]', '[[hachazo, tijeretazo|violet]]', 'supresión, cierre'],
            ['se reduce el gasto', '[[ajuste, optimización de recursos|violet]]', '[[recorte salvaje|violet]]', 'recorte, reducción de X millones'],
            ['sube el precio', '[[actualización de tarifas|violet]]', '[[sablazo|violet]]', 'subida del 10 %'],
            ['salen trabajadores', '[[reestructuración de plantilla|violet]]', '[[despidos masivos|violet]] (si no lo son)', 'cuarenta contratos no renovados'],
          ], note: 'Los dos lados del debate los usan: el eufemismo suele venir de quien decide; el disfemismo, de quien se opone. La versión neutra nombra **el hecho y la cifra**.' },
          { kind: 'compare', title: 'Dos «nosotros» · Two kinds of “we”', columns: [
            { tone: 'teal', label: 'INCLUSIVO', sentence: '[[Todos tenemos que|teal]] hacer un esfuerzo.', idea: 'Incluye al público: reparte el sacrificio entre todos, aunque lo paguen unos pocos.', en: 'Inclusive “we” takes in the audience: the burden is shared out rhetorically, even if only some will actually bear it.' },
            { tone: 'teal', label: 'EXCLUSIVO', sentence: '[[Hemos garantizado|teal]] el servicio de día.', idea: 'Solo el gobierno: se queda con el mérito.', en: 'Exclusive “we” means only the speaker’s group, which keeps the credit for itself.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No se descarta que la empresa haya ocultado datos». ¿Qué afirma el periódico?', options: ['Que la empresa ocultó datos.', 'Nada comprobable: insinúa sin comprometerse.', 'Que la empresa no ocultó datos.'], answer: 1, why: 'La modalidad epistémica (y el subjuntivo que pide «no se descarta que») deja la sospecha sin asumir la afirmación.', en: 'The suspicion is planted; nobody has claimed anything.' },
            { prompt: 'En un correo de la dirección: «Todos debemos adaptarnos a la nueva jornada». ¿Qué hace ese «nosotros»?', options: ['Incluye a la plantilla para repartir una decisión que tomó la dirección.', 'Indica que la dirección también cambia de jornada.', 'Es exclusivo: se refiere solo a la dirección.'], answer: 0, why: 'Es inclusivo: convierte una decisión de la dirección en un deber compartido.', en: 'An inclusive “we” turns management’s decision into everyone’s duty.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Leer con sospecha no es leer con prejuicio. Suspicion is not prejudice.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada error y tu alumno explica qué falla antes de ver la corrección: ¿la gramática, el análisis o la reescritura?', self: 'Lee cada error y decide qué falla antes de mirar la corrección: ¿la gramática, el análisis o la reescritura? (Grammar, analysis or rewriting?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Análisis: «Fue detenido un sospechoso». Toda pasiva sin agente es manipulación.', right: 'Si el agente es evidente (la policía detiene), desconocido o irrelevante, omitirlo es normal.', why: 'Se analiza si la omisión esconde algo que se sabe y que importa, no la forma en sí.' },
            { wrong: 'Reescritura neutra: «Los agentes empujaron a una vecina». (Nadie sabe quién empujó.)', right: '«Hubo empujones durante la concentración y una vecina fue atendida por una contusión leve».', why: 'Una versión neutra no inventa responsables: si el agente no se conoce, se dice lo que se sabe.' },
            { wrong: 'Se despidieron a doce empleados.', right: 'Se despidió a doce empleados. / Doce empleados fueron despedidos.', why: 'Con «a» + personas el se es impersonal y el verbo va en singular (clase 483).' },
            { wrong: 'Análisis: «La versión neutra es la que no tiene adjetivos».', right: 'También sesgan el verbo (dejar sin), el orden, la cifra y la modalidad.', why: 'Quitar adjetivos no basta: el sesgo sintáctico no está solo en las palabras valorativas.' },
            { wrong: 'Reescritura: «El alcalde cierra el tranvía nocturno». (Lo aprobó el pleno.)', right: '«El pleno aprueba suprimir el tranvía nocturno a propuesta del gobierno municipal».', why: 'Personalizar en una figura conocida es otra forma de sesgo: el agente debe ser el real.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Se sabe que un camión chocó contra la marquesina. ¿Qué titular es más exacto?', options: ['Se produce un accidente en la avenida del Puerto.', 'Un camión choca contra una marquesina en la avenida del Puerto.', 'Destrozada una marquesina en la avenida del Puerto.'], answer: 1, why: 'Si se conoce la causa, el sujeto agente es lo exacto; las otras dos la borran sin motivo.', en: 'When the cause is known, leaving it out is a bias.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno elige una noticia neutra del día (tráfico, tiempo, deporte) y cuenta el mismo hecho dos veces, una «suavizando» y otra «endureciendo». Tú identificas qué recursos ha usado.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El taller «Leer entre líneas»', coach: 'Toca cada marca: ¿quién responde de qué? Tap each mark: who answers for what?',
      steps: [
        { title: 'Dos entradillas en la mesa · Two leads on the table', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Óscar, Lucía y Daniel. Después tu alumno toca cada expresión marcada y explica qué hace.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿borra al agente, valora, presupone o incluye a alguien? (What does each one do?)' } },
          { kind: 'explore', title: '«¿Aprobado por quién?»', setting: 'Biblioteca Central de Montesur, sala de talleres. Elena Barrios ha proyectado las entradillas de «Crónica de Montesur» y «Montesur Hoy» sobre la supresión del tranvía nocturno. Óscar, Lucía y Daniel tienen delante el acta del pleno.', lines: [
            { who: 'Elena', text: 'Óscar, empieza tú con la entradilla de «Crónica de Montesur».', en: 'Óscar, you start with the lead from “Crónica de Montesur”.' },
            { who: 'Óscar', text: '«[[Se ha aprobado|orange]] [[la reordenación|violet]] del servicio nocturno, una medida que, según [[numerosos expertos|violet]], [[resultaba inevitable|violet]]».', en: '“The reorganisation of the night service has been approved, a measure which, according to numerous experts, was unavoidable.”' },
            { who: 'Lucía', text: '¿Aprobado por quién? Ahí no aparecen ni el gobierno municipal ni el pleno. Y en el acta está clarísimo.', en: 'Approved by whom? Neither the municipal government nor the council appears. And the minutes make it crystal clear.' },
            { who: 'Daniel', text: 'Además, «reordenación» suena a cambiar horarios. Ni siquiera dice que el servicio desaparece. Y los expertos, sin nombre ni número, hacen de fuente sin serlo.', en: 'Besides, “reorganisation” sounds like changing timetables. It doesn’t even say the service is being scrapped. And the experts, with no names or numbers, act as a source without being one.' },
            { who: 'Elena', text: 'Bien visto. Ahora, la de «Montesur Hoy».', en: 'Well spotted. Now the one from “Montesur Hoy”.' },
            { who: 'Óscar', text: '«[[La polémica supresión|violet]] del tranvía nocturno [[deja tirados|violet]] a [[miles de vecinos|violet]]. [[¿Hasta cuándo seguirá|teal]] el gobierno municipal dando la espalda a los barrios?».', en: '“The controversial closure of the night tram leaves thousands of residents stranded. How much longer will the municipal government keep turning its back on the neighbourhoods?”' },
            { who: 'Lucía', text: 'Esta sí tiene culpable, pero la pregunta da por hecho que el gobierno les da la espalda a los barrios, y eso es justo lo que habría que demostrar.', en: 'This one does have a culprit, but the question takes it for granted that the government is turning its back on the neighbourhoods, which is exactly what would need proving.' },
            { who: 'Elena', text: 'Las dos citan a la concejala de Movilidad, Pilar Serrano: «[[Todos tenemos que|teal]] hacer un esfuerzo».', en: 'Both quote the councillor for transport, Pilar Serrano: “We all have to make an effort.”' },
            { who: 'Óscar', text: '¿Todos? Yo no uso el tranvía de noche. El esfuerzo lo hacen los que trabajan de madrugada.', en: 'All of us? I don’t use the tram at night. The effort falls on the people who work the early-morning shifts.' },
            { who: 'Daniel', text: 'Y en el comunicado del Ayuntamiento pone: «[[Hemos garantizado|teal]] el servicio de día». Ese «nosotros» ya no incluye a los vecinos.', en: 'And the council’s press release says: “We have guaranteed the daytime service.” That “we” no longer includes the residents.' },
            { who: 'Elena', text: 'Un «nosotros» reparte el sacrificio y el otro se queda con el mérito. Lucía, ¿cómo lo titularías tú?', en: 'One “we” shares out the sacrifice and the other keeps the credit. Lucía, how would you headline it?' },
            { who: 'Lucía', text: '«[[El pleno suprime|blue]] el tranvía nocturno desde el 1 de marzo: afecta a unos 1.800 viajeros y ahorrará 2,4 millones al año».', en: '“Council votes to scrap night tram from 1 March: it affects about 1,800 riders and will save 2.4 million a year.”' },
          ], notes: {
            'Se ha aprobado': '**Pasiva refleja sin agente**: sabemos que alguien aprobó la medida, pero la frase no dice quién, aunque el periódico lo sabía (está en el acta).',
            'la reordenación': '**Eufemismo** y **nominalización** a la vez: suaviza un cierre y lo convierte en una cosa sin agente ni tiempo.',
            'numerosos expertos': '**Cuantificación vaga** usada como fuente: ni cuántos ni quiénes. Compara con la clase 527: una fuente se puede localizar; esta, no.',
            'resultaba inevitable': '**Modalidad deóntica** disfrazada de hecho: presenta como necesaria una decisión que se tomó entre varias opciones.',
            'La polémica supresión': '**Adjetivo antepuesto**: la polémica se da por sabida y queda dentro del sintagma, donde no se argumenta.',
            'deja tirados': '**Disfemismo** coloquial: «dejar tirado» presenta a los vecinos como abandonados. Es una valoración, no un hecho.',
            'miles de vecinos': '**Cuantificación vaga** que infla el dato: son unos 1.800 viajeros por noche, y no todos tienen por qué ser vecinos.',
            '¿Hasta cuándo seguirá': '**Pregunta cargada**: «seguir» y «hasta cuándo» dan por hecho que el gobierno ya da la espalda a los barrios (clase 519).',
            'Todos tenemos que': '**Nosotros inclusivo** con modalidad deóntica: reparte entre todos un esfuerzo que solo hacen algunos.',
            'Hemos garantizado': '**Nosotros exclusivo**: solo el gobierno municipal, que se atribuye el mérito.',
            'El pleno suprime': '**Activa con el agente real** de sujeto, verbo exacto y presente de titular: quien decide aparece y la medida se nombra sin adornos.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Qué critica Lucía de la primera entradilla?', options: ['Que usa el presente.', 'Que no dice quién aprobó la medida, aunque está en el acta.', 'Que cita demasiadas fuentes.'], answer: 1, why: '«¿Aprobado por quién? Ahí no aparecen ni el gobierno municipal ni el pleno».', en: 'What is missing from the first lead?' },
            { prompt: '¿Por qué protesta Óscar contra «Todos tenemos que hacer un esfuerzo»?', options: ['Porque el esfuerzo recae en quienes trabajan de madrugada, no en todos.', 'Porque la concejala no dijo esa frase.', 'Porque él usa mucho el tranvía nocturno.'], answer: 0, why: '«El esfuerzo lo hacen los que trabajan de madrugada»: el «nosotros» inclusivo reparte algo que no se reparte.', en: 'Who really bears the effort?' },
            { prompt: '¿Qué tiene el titular de Lucía que no tienen los otros dos?', options: ['El agente real, el verbo exacto y las cifras oficiales.', 'Un adjetivo más preciso.', 'Una pregunta al lector.'], answer: 0, why: 'Nombra al pleno, usa «suprime» y da los 1.800 viajeros y los 2,4 millones.', en: 'What makes her headline neutral?' },
          ] },
        ] },
        { title: '¿Quién es responsable? · Who is responsible?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase del dosier y dice en voz alta quién responde de lo que pasa: alguien con nombre, nadie, o un «todos» difuso.', self: 'Lee cada frase del dosier y decide quién responde de lo que pasa. (Named, erased, or a vague “everyone”?)' } },
          { kind: 'classify', title: 'El dosier del taller · The workshop file', categories: [
            { id: 'explicito', label: 'RESPONSABLE CON NOMBRE', tone: 'blue' },
            { id: 'borrado', label: 'RESPONSABLE BORRADO', tone: 'orange' },
            { id: 'difuso', label: 'RESPONSABLE DIFUSO (todos, hay que…)', tone: 'teal' },
          ], items: [
            { text: 'El pleno aprobó la supresión con los votos del gobierno municipal.', answer: 'explicito', why: 'Activa con agente concreto de sujeto: el pleno, y se precisa con qué votos.' },
            { text: 'La empresa municipal no renovará cuarenta contratos temporales.', answer: 'explicito', why: 'La empresa es el sujeto de un verbo exacto.' },
            { text: 'Desaparece el tranvía nocturno.', answer: 'borrado', why: '«Desaparecer» es intransitivo: el servicio parece esfumarse solo.' },
            { text: 'Se han eliminado tres paradas provisionales.', answer: 'borrado', why: 'Pasiva refleja sin agente: alguien las eliminó, pero no se dice quién.' },
            { text: 'Hay que asumir que los recursos son limitados.', answer: 'difuso', why: '«Hay que» obliga a todos y a nadie: no dice quién decide ni quién asume.' },
            { text: 'Entre todos tenemos que sacar adelante la ciudad.', answer: 'difuso', why: 'Nosotros inclusivo: la responsabilidad se reparte hasta disolverse.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Leer, señalar, reescribir', coach: 'Primero quién, después cómo. First who, then how.',
      steps: [
        { title: 'Titulares enfrentados · Competing headlines', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees los dos titulares de cada pregunta y tu alumno dice qué cambia antes de mirar las opciones.', self: 'Lee los dos titulares y di qué cambia antes de mirar las opciones. (Say what changes before you look.)' } },
          { kind: 'choice', title: 'Un hecho, dos versiones · One event, two versions', items: [
            { prompt: '«Suben las tarifas del tranvía» / «El Ayuntamiento sube un 10 % el billete del tranvía». ¿Qué hace el primero?', options: ['Presenta la subida como un fenómeno natural, sin quien la decide.', 'Usa una pasiva con agente.', 'Da más información que el segundo.'], answer: 0, why: '«Subir» intransitivo convierte una decisión en algo que pasa solo; el segundo nombra al agente y la cifra.', en: 'Prices “rise” by themselves in the first headline.' },
            { prompt: '«¿Por qué oculta el Ayuntamiento el informe de uso del tranvía?». ¿Qué tendría que comprobar un lector?', options: ['Solo los motivos del Ayuntamiento.', 'Cuántas páginas tiene el informe.', 'Si de verdad existe ese informe y si se está ocultando.'], answer: 2, why: 'La pregunta presupone el informe y su ocultación; solo deja abierto el porqué.', en: 'What does the question take for granted?' },
            { prompt: '«Según muchos usuarios, el servicio era imprescindible». ¿Cuál es el problema principal?', options: ['Una cantidad vaga hace de fuente: no sabemos cuántos ni quiénes.', 'Que el verbo está en imperfecto.', 'Que «imprescindible» está mal escrito.'], answer: 0, why: '«Muchos usuarios» no se puede verificar; una noticia daría la fuente: una encuesta, una asociación, una cifra.', en: 'Vague quantity posing as a source.' },
            { prompt: '«Una reforma valiente para el transporte» / «Una reforma del transporte que la oposición considera insuficiente». ¿Qué diferencia hay?', options: ['La segunda es incorrecta porque usa subjuntivo.', 'Ninguna: las dos opinan igual.', 'La primera valora sin atribuir; la segunda atribuye la valoración a alguien.'], answer: 2, why: '«Valiente» es la opinión del medio; «que la oposición considera insuficiente» dice de quién es la crítica.', en: 'Whose evaluation is it?' },
          ] },
        ] },
        { title: 'Nombra el recurso · Name the device', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: '¿Qué recurso actúa? · Which device is at work?', categories: [
            { id: 'agente', label: 'AGENTE BORRADO', tone: 'orange' },
            { id: 'nominal', label: 'NOMINALIZACIÓN', tone: 'orange' },
            { id: 'vaga', label: 'CUANTIFICACIÓN VAGA', tone: 'violet' },
            { id: 'eufemismo', label: 'EUFEMISMO O DISFEMISMO', tone: 'violet' },
          ], items: [
            { text: 'Se cerrarán dos cocheras en abril.', answer: 'agente', why: 'Pasiva refleja: alguien cerrará las cocheras, pero no se nombra.' },
            { text: 'El servicio de madrugada termina el último día de febrero.', answer: 'agente', why: '«Terminar» intransitivo: el servicio acaba como si nadie lo decidiera.' },
            { text: 'La congelación de las contrataciones preocupa a la plantilla.', answer: 'nominal', why: '«La congelación» resume una decisión sin decir quién congela ni desde cuándo.' },
            { text: 'La retirada de las paradas provisionales empezará el lunes.', answer: 'nominal', why: 'La acción de retirar se ha vuelto un sustantivo; el agente desaparece.' },
            { text: 'Cada vez más vecinos se oponen a la medida.', answer: 'vaga', why: 'Tendencia sin cifra ni periodo: no se puede comprobar.' },
            { text: 'Un número importante de comerciantes teme perder clientes.', answer: 'vaga', why: '«Un número importante» suena a dato, pero no dice cuántos.' },
            { text: 'El gobierno habla de «optimizar recursos» para referirse al cierre.', answer: 'eufemismo', why: 'Eufemismo: un cierre presentado como mejora técnica.' },
            { text: 'La federación vecinal llama «tijeretazo» a la medida.', answer: 'eufemismo', why: 'Disfemismo: endurece la reducción para movilizar al lector.' },
          ] },
        ] },
        { title: '¿Correcta y neutral? · Accurate and neutral?', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno decide si cada frase de una noticia es gramaticalmente correcta y neutral. Si no lo es, elige la versión que lo resuelve y explica por qué.', self: 'Decide si cada frase de noticia es correcta y neutral. Si no, elige la mejor versión. (Grammar and neutrality.)' } },
          { kind: 'fix', title: 'Revisión de la noticia · Reviewing the news item', items: [
            { sentence: 'Se despidieron a doce empleados de la cafetería municipal.', ok: false, options: ['Se despidieron doce empleados a la cafetería municipal.', 'Se les despidieron a doce empleados de la cafetería municipal.', 'Se despidió a doce empleados de la cafetería municipal.'], answer: 2, why: 'Con «a» + personas el se es impersonal y el verbo va en singular. «Se despidieron doce empleados», sin «a», se leería además como «se dijeron adiós».' },
            { sentence: 'El servicio fue suprimido por el pleno municipal el 12 de febrero.', ok: true, why: 'Pasiva con agente: correcta y neutral, porque el servicio es el tema y el agente aparece.' },
            { sentence: 'La polémica subida del billete entra en vigor hoy.', ok: false, options: ['La tan polémica subida del billete entra en vigor hoy.', 'La subida polémica del billete entra hoy en vigor, sin duda.', 'La subida del billete, de 1,50 a 1,65 euros, entra en vigor hoy.'], answer: 2, why: 'En una noticia, el epíteto «polémica» valora sin atribuir; lo neutro es dar el dato.' },
            { sentence: 'Resultaron heridos leves dos agentes y una vecina durante la concentración.', ok: true, why: 'Concordancia correcta en plural. Si no se sabe qué causó las heridas, «resultar + participio» informa sin inventar culpables.' },
            { sentence: 'Según numerosos expertos, la medida era necesaria.', ok: false, options: ['Según dos economistas de la Universidad de Montesur, la medida era necesaria.', 'Según numerosísimos expertos, la medida era necesaria.', 'Según expertos, la medida era sin duda necesaria.'], answer: 0, why: 'La fuente debe poder localizarse: quiénes y cuántos. Intensificar o quitar el cuantificador no lo arregla.' },
          ] },
        ] },
        { title: 'Reescribir la entradilla · Rewriting the lead', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo: tú eres Elena y tu alumno es Lucía, que elige en cada hueco la opción exacta y neutral.', self: 'Completa la entradilla de Lucía: en cada hueco, la opción exacta y neutral. (The precise, neutral option.)' } },
          { kind: 'chat-fill', title: 'La entradilla de Lucía · Lucía’s lead', lines: [
            { who: 'Elena', text: 'Empieza por quién decide.' },
            { who: 'Lucía', text: '«___ aprobó el 12 de febrero suprimir el servicio nocturno del tranvía desde el 1 de marzo…»', options: ['Finalmente, y como se esperaba,', 'Se', 'El pleno del Ayuntamiento'], answer: 2, why: 'El agente real, de sujeto. «Se aprobó» lo borraría y «como se esperaba» añade una valoración que nadie ha atribuido.' },
            { who: 'Elena', text: 'Bien. ¿A cuántas personas afecta?' },
            { who: 'Lucía', text: '«…una decisión que afecta a ___.»', options: ['unos 1.800 viajeros por noche', 'miles de vecinos', 'muchísima gente'], answer: 0, why: 'La cifra oficial; «miles» la infla y «muchísima gente» no se puede comprobar.' },
            { who: 'Elena', text: '¿Y el motivo? Atribúyelo.' },
            { who: 'Lucía', text: '«___, la medida permitirá ahorrar 2,4 millones de euros al año.»', options: ['Como todos sabemos', 'Según numerosos expertos', 'Según el gobierno municipal'], answer: 2, why: 'El ahorro es una previsión del gobierno municipal: se atribuye a su fuente. Los «expertos» son vagos y el «nosotros» inclusivo lo da por hecho.' },
            { who: 'Elena', text: 'Última frase: la concentración. Recuerda que nadie sabe quién empujó.' },
            { who: 'Lucía', text: '«Durante la concentración posterior, ___.»', options: ['hubo empujones y una vecina fue atendida por una contusión leve', 'los agentes agredieron a una vecina', 'se produjo una brutal represión'], answer: 0, why: 'Cuenta lo que se sabe sin inventar un agente y sin disfemismos.' },
          ] },
        ] },
        { title: 'Construye la versión neutra · Build the neutral version', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['El pleno', 'suprime', 'el tranvía nocturno', 'desde el 1 de marzo.'], accept: ['El pleno suprime el tranvía nocturno desde el 1 de marzo.'], en: 'Council scraps the night tram from 1 March: active, real agent, exact verb.' },
            { tiles: ['¿Quién', 'decidió', 'suprimir', 'el servicio', 'nocturno?'], accept: ['¿Quién decidió suprimir el servicio nocturno?'], en: 'Who decided to scrap the night service? The critical reader’s first question.' },
            { tiles: ['La empresa municipal', 'no renovará', 'cuarenta', 'contratos temporales.'], accept: ['La empresa municipal no renovará cuarenta contratos temporales.'], en: 'The municipal company will not renew forty temporary contracts: neither “restructuring” nor “mass layoffs”.' },
          ] },
        ] },
        { title: 'Reescribe con neutralidad · Rewrite neutrally', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno escribe cada versión y después la lee en voz alta diciendo qué recurso ha desactivado.', self: 'Escribe cada versión y di en voz alta qué recurso has desactivado. (Say which device you removed.)' } },
          { kind: 'rewrite', title: 'Del sesgo al dato · From bias to fact', items: [
            { prompt: 'Se ha decidido subir el billete quince céntimos. (Lo decidió el gobierno municipal.)', instruction: 'Reescribe en activa con el agente de sujeto. Empieza por «El gobierno municipal».', accept: ['El gobierno municipal ha decidido subir el billete quince céntimos', 'El gobierno municipal decidió subir el billete quince céntimos', 'El gobierno municipal decide subir el billete quince céntimos'] },
            { prompt: 'El Ayuntamiento anuncia un reajuste del servicio nocturno. (El servicio desaparece.)', instruction: 'Sustituye el eufemismo por el verbo exacto «suprimir» y mantén el sujeto.', accept: ['El Ayuntamiento suprime el servicio nocturno', 'El Ayuntamiento anuncia que suprime el servicio nocturno', 'El Ayuntamiento anuncia que suprimirá el servicio nocturno', 'El Ayuntamiento suprimirá el servicio nocturno', 'El Ayuntamiento anuncia la supresión del servicio nocturno'] },
            { prompt: 'Miles de vecinos se quedan sin tranvía nocturno. (Dato oficial: unos 1.800 viajeros por noche.)', instruction: 'Sustituye la cantidad vaga por el dato. Empieza por «Unos 1.800 viajeros».', accept: ['Unos 1.800 viajeros por noche se quedan sin tranvía nocturno', 'Unos 1800 viajeros por noche se quedan sin tranvía nocturno', 'Unos 1.800 viajeros se quedan sin tranvía nocturno', 'Unos 1800 viajeros se quedan sin tranvía nocturno', 'Unos 1.800 viajeros por noche se quedan sin tranvía', 'Unos 1800 viajeros por noche se quedan sin tranvía'] },
            { prompt: '¿Cuándo dejaste de ocultar la información?', instruction: 'Desactiva la pregunta cargada: conviértela en una pregunta de sí o no que empiece por «¿Has ocultado».', accept: ['¿Has ocultado la información?', '¿Has ocultado información?', '¿Has ocultado alguna vez la información?', '¿Has ocultado alguna vez información?'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El pódcast del taller', coach: 'Escucha quién hace qué. Listen for who does what.',
      steps: [
        { title: '«Leer entre líneas», episodio 12 · Episode 12', blocks: [
          { kind: 'guide', text: { teacher: 'Escuchan el audio una vez para la idea general y otra para los detalles. Tu alumno anota cada recurso que Elena comenta y quién queda fuera del foco.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada recurso que comenta Elena. (Note each device she discusses.)' } },
          { kind: 'listen', title: 'Dos periódicos, un pleno', channel: 'PÓDCAST · LEER ENTRE LÍNEAS · BIBLIOTECA DE MONTESUR', src: '/audio/grammar-live/534.mp3',
            before: 'Elena compara en su pódcast cómo contaron dos periódicos el cierre del tranvía nocturno. ¿Crees que defenderá a uno de los dos o criticará a ambos? (Will she side with one paper or criticise both?)',
            gist: { prompt: '¿Qué hace Elena en el episodio? · What does Elena do?', options: ['Defiende la decisión del Ayuntamiento.', 'Muestra los recursos de los dos periódicos y propone un titular neutro.', 'Explica por qué «Montesur Hoy» es el periódico más fiable.'], answer: 1, why: 'Analiza el «se» y el eufemismo de uno, el «miles» y la pregunta del otro, y propone su propio titular.', en: 'She criticises both papers and offers a neutral alternative.' },
            details: [
              { prompt: 'Según Elena, ¿qué hace el «se» de «Se reajusta el servicio nocturno»?', options: ['Hace que nadie decida nada.', 'Indica que el servicio mejora.', 'Señala que lo decidió el pleno.'], answer: 0, why: '«Con ese "se", nadie decide nada».', en: 'What does the impersonal se do?' },
              { prompt: '¿Qué le reprocha a «Montesur Hoy»?', options: ['Que no nombra a ningún responsable.', 'Que usa demasiadas cifras.', 'Que redondea hacia arriba y presenta la valoración como hecho.'], answer: 2, why: '«Redondea hacia arriba: los datos oficiales hablan de mil ochocientos viajeros».', en: 'What is wrong with the second paper?' },
              { prompt: '¿Qué pregunta hace Elena sobre «todos tenemos que arrimar el hombro»?', options: ['Si arrimar el hombro es una expresión correcta.', 'Si la concejala lo dijo de verdad.', 'Si son todos o solo quienes usan el tranvía de noche.'], answer: 2, why: '«¿Todos, o los que usan el tranvía de noche?».', en: 'Who is really included in “we all”?' },
              { prompt: 'Según Elena, ¿qué es leer críticamente?', options: ['Preguntarse quién hace qué y quién queda fuera del foco.', 'Desconfiar de todo lo que se publica.', 'Preferir siempre la versión más dura.'], answer: 0, why: '«No es desconfiar de todo: es preguntarse quién hace qué y quién queda fuera del foco».', en: 'Her definition of critical reading.' },
            ],
            transcript: 'Hola, bienvenidos a «Leer entre líneas», el pódcast del taller de la Biblioteca de Montesur. Soy Elena Barrios. Esta semana dos periódicos contaron el mismo pleno. «Crónica de Montesur» tituló: «[[Se reajusta|orange]] el servicio nocturno del tranvía». «Montesur Hoy» prefirió: «El gobierno municipal deja sin tranvía nocturno a [[miles de vecinos|violet]]». Fíjense en el primero: con ese «se», nadie decide nada, y «reajustar» suena a mantenimiento, no a cierre. Es un [[eufemismo|violet]] de manual: el servicio, sencillamente, se suprime. El segundo sí pone un responsable, pero redondea hacia arriba, porque los datos oficiales hablan de mil ochocientos viajeros por noche, y además pregunta [[hasta cuándo seguirá|teal]] el gobierno dando la espalda a los barrios, como si eso ya estuviera demostrado. Y no es solo cosa de titulares. En el pleno, la concejala dijo que «[[todos tenemos que|teal]] arrimar el hombro». ¿Todos, o los que usan el tranvía de noche? Por su parte, la federación vecinal habló del «[[hachazo|violet]] al transporte», que endurece tanto como el otro suaviza. Mi propuesta de titular: «[[El pleno suprime|blue]] el tranvía nocturno para ahorrar dos millones cuatrocientos mil euros al año». Quién, qué y para qué. Leer críticamente no es desconfiar de todo: es preguntarse, en cada frase, quién hace qué y quién queda fuera del foco. Hasta la semana que viene.',
            reply: { teacher: 'Tú eres el director de «Crónica de Montesur» y llamas al pódcast para defender tu titular. Tu alumno es Elena y responde separando lo que el titular dice de lo que oculta, sin acusar a nadie de mentir.', self: 'Responde en voz alta como Elena a una oyente que pregunta: «¿Entonces los dos periódicos mienten?». Distingue entre mentir y elegir cómo contar. (Lying vs choosing how to tell it.)' } },
          { kind: 'tip', icon: '🎧', title: 'La voz de Elena · Elena’s voice', text: 'Elena habla a sus oyentes de **ustedes** («Fíjense en el primero»), la forma general para dirigirse a un grupo en América; en España, ante un público, «ustedes» marca un registro formal, y en uno más cercano se oye también «vosotros» («Fijaos…»). Observa que su crítica no toma partido: señala recursos en los **dos** periódicos y en las **dos** partes del debate.', en: 'Elena addresses her listeners as “ustedes”, the general plural of address in Latin America; in Spain it signals a formal register, and a more casual host might say “vosotros” (“Fijaos…”). Notice that her criticism takes no side: she points out devices in both papers and on both sides of the debate.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Leer en voz alta, leer con lupa', coach: 'Señala el recurso y propone la versión neutra. Name the device, offer the neutral version.',
      steps: [
        { title: 'Casos para el taller · Cases for the workshop', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde durante uno o dos minutos. Si tu alumno cae en un sesgo al reformular, tú lo señalas y tu alumno lo corrige.', self: 'Responde a cada tarjeta en voz alta durante uno o dos minutos. Antes de reformular, pregúntate quién hace qué. (Ask yourself who does what.)' } },
          { kind: 'talk', cards: [
            { q: 'Dos titulares sobre un hecho inventado: «Cierra la piscina del barrio norte» y «El Ayuntamiento deja a cientos de niños sin piscina». Analízalos y propone uno neutro. · Analyse both and offer a neutral one.', followUps: ['¿Qué dato necesitarías para escribir el tuyo?', '¿Cuál de los dos te parece más injusto, y por qué?', '¿Qué cambiaría si empezaras por los niños?'], phrases: ['El primero [[borra al agente|orange]] con un verbo intransitivo…', 'El segundo [[valora|violet]] con «deja sin» y una cifra vaga…', 'Yo titularía: «[[El Ayuntamiento cierra|blue]]…»'], hint: 'Primero quién aparece y quién no; después las palabras que valoran; al final, tu titular con agente y dato.', example: 'En el primero la piscina cierra sola: el verbo intransitivo borra a quien lo decide. El segundo sí tiene responsable, pero «deja sin» y «cientos de niños» buscan indignar. Yo titularía: «El Ayuntamiento cierra la piscina del barrio norte durante seis meses por obras», si ese es el motivo oficial.' },
            { q: 'Eres Lucía. Cuenta en una frase la concentración ante el Ayuntamiento sin inventar quién empujó a quién. · Report the protest without inventing who pushed whom.', followUps: ['¿Y si un vídeo mostrara después quién empujó?', '¿Qué fuente citarías para la contusión?'], phrases: ['[[Hubo|orange]] empujones…', 'una vecina [[fue atendida|orange]] por…', '[[según|blue]] los servicios sanitarios…'], hint: 'Aquí la ausencia de agente es honesta: no se sabe. Atribuye lo que sí se sabe.', example: 'Durante la concentración hubo empujones entre algunos asistentes y los agentes, y una vecina fue atendida por una contusión leve, según los servicios sanitarios municipales. Si después un vídeo mostrara quién empujó, lo diría con el agente y citando el vídeo.' },
            { q: '¿Todo eufemismo es manipulación? Piensa en «fallecer», «persona mayor» o «dar de baja». · Is every euphemism manipulative?', followUps: ['¿Dónde está la frontera entre cortesía y ocultación?', '¿Hay disfemismos que te parezcan legítimos?', 'Pon un ejemplo de tu trabajo o de tu ciudad.'], phrases: ['[[Depende de si|violet]] oculta un dato o solo suaviza…', 'Lo que importa [[es quién|blue]] sale beneficiado…', 'No es lo mismo cortesía que…'], hint: 'Distingue entre suavizar por respeto y suavizar para que no se vea un hecho o un responsable.', example: 'No todo eufemismo manipula. Decir «falleció» en vez de «murió» es cortesía: no esconde nada. En cambio, llamar «reordenación» a un cierre oculta el hecho principal. Para mí, la frontera está en si el lector sigue sabiendo qué ha pasado y quién lo ha decidido.' },
            { q: 'Recuerda un correo de una empresa o institución (sin nombres) con un «nosotros» inclusivo o exclusivo. ¿Qué hacía? · Analyse a “we” from a work email.', followUps: ['¿Te sentiste incluido o utilizado?', '¿Cómo lo habrías redactado tú?'], phrases: ['[[Todos debemos|teal]]…', '[[Hemos decidido|teal]]… → ¿quiénes?', 'La dirección [[ha decidido|blue]]…'], hint: 'Pregunta siempre quién está dentro del «nosotros» y quién decidió.', example: 'Una vez me llegó un correo que decía «Todos debemos reducir el gasto en viajes». Lo había decidido la dirección, pero el «todos» lo presentaba como un esfuerzo común. Yo habría escrito: «La dirección ha decidido reducir el presupuesto de viajes un 20 %», que es más claro y más honesto.' },
            { q: '¿Es posible un periodismo totalmente neutral, si cada verbo y cada orden son una elección? · Can journalism ever be fully neutral?', followUps: ['¿Qué distingue un sesgo de una línea editorial declarada?', '¿Qué le pedirías a un medio para fiarte de él?', '¿Neutral y exacto son lo mismo?'], phrases: ['[[Aunque|blue]] toda elección orienta…', 'Lo que sí se puede exigir [[es que|blue]]…', '[[No se trata de|violet]]…, [[sino de|violet]]…'], hint: 'Separa neutralidad absoluta (imposible) de exactitud y transparencia (exigibles).', example: 'Creo que la neutralidad total no existe: hasta el orden de un titular elige un protagonista. Pero no se trata de renunciar a ella, sino de exigir exactitud: el agente real, la cifra comprobable y la valoración atribuida a alguien. Un medio puede tener línea editorial si no la disfraza de dato.' },
            { q: 'Anuncios: «hasta un 50 %», «cada vez más familias», «el preferido de los expertos». Analiza uno inventado y reescríbelo con honestidad. · Rewrite a vague ad honestly.', followUps: ['¿Seguiría vendiendo igual?', '¿Qué dato tendría que dar la marca?'], phrases: ['[[Hasta|violet]] marca solo el máximo…', '«[[Cada vez más|violet]]» no dice cuántos ni desde cuándo…', 'Una versión honesta sería…'], hint: 'Convierte cada cantidad vaga en una cifra con fuente y periodo.', example: 'Un anuncio inventado: «Cada vez más familias ahorran hasta un 50 % con nuestra tarifa». «Cada vez más» no tiene cifra y «hasta» es solo el techo. Una versión honesta sería: «En 2025, 3.000 clientes ahorraron de media un 12 %; el ahorro máximo fue del 50 %». Vende menos, pero se puede comprobar.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno inventa un titular sesgado sobre la clase de hoy y tú lo reescribes en voz alta; tu alumno comprueba si has eliminado todos los recursos.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿has usado tú algún eufemismo, «todos» o cantidad vaga sin darte cuenta? (Did you slip in a bias yourself?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La nota semanal del taller', coach: 'Señala, explica, reescribe. Point out, explain, rewrite.',
      steps: [
        { title: 'Tu nota de lectura crítica · Your critical-reading note', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee la nota en voz alta y tú compruebas si cada recurso señalado tiene su explicación y si el titular propuesto es exacto.', self: 'Escribe la nota y toca «Revisar mi texto». Después léela: ¿cada recurso tiene su explicación?, ¿tu titular nombra al responsable y da la cifra? (Does your headline name who and give the figure?)' } },
          { kind: 'write', title: 'Nota de lectura crítica · Critical-reading note', situation: 'Elena te pide la nota semanal del blog del taller sobre cómo contaron los dos periódicos la subida del billete. «Crónica de Montesur»: «Actualización de tarifas en el tranvía a partir de marzo». «Montesur Hoy»: «Nuevo sablazo a los usuarios: el tranvía, cada vez más caro». Datos: el pleno aprobó el 12 de febrero, a propuesta del gobierno municipal, subir el billete sencillo de 1,50 a 1,65 euros (un 10 %) desde el 1 de marzo; el abono mensual no cambia. (Write the workshop blog’s note comparing how two papers reported the fare rise.)', task: [
            'Señala al menos dos recursos en cada titular y explica qué hacen (agente, nominalización, eufemismo, cuantificación…).',
            'Di quién es el responsable real según los datos.',
            'Propón un titular neutro con agente, verbo exacto y cifra.',
            'Cierra con una frase sobre por qué tu titular es más exacto, sin acusar de mentir a ninguno de los dos medios.',
          ], starters: ['Los dos periódicos cuentan el mismo hecho, pero…', 'En el primer titular, la nominalización…', 'El segundo sí…, pero…', 'Según el acta, quien decide es…', 'Mi propuesta de titular:…'],
            words: ['agente', 'nominalización', 'eufemismo', 'disfemismo', 'cuantificación vaga', 'da por hecho', 'el pleno', 'a propuesta de', 'el abono mensual', 'un 10 %', 'exacto', 'neutral'],
            model: 'Los dos periódicos cuentan la misma subida, pero ninguno la cuenta entera. En «Crónica de Montesur», «actualización de tarifas» es un eufemismo y, además, una nominalización: la subida se convierte en un trámite sin agente, sin cifra y sin nadie que la decida. «Montesur Hoy» elige el camino contrario. «Sablazo» es un disfemismo que da por hecho el abuso, «nuevo» presupone que ya hubo otros y «cada vez más caro» es una cuantificación vaga: no dice cuánto ni desde cuándo. Tampoco aparece el responsable: el sablazo parece no tener autor. Según el acta, quien decide es el pleno, que aprobó el 12 de febrero, a propuesta del gobierno municipal, subir el billete sencillo de 1,50 a 1,65 euros. Ninguno de los dos menciona que el abono mensual no cambia, un dato que interesa a muchos usuarios habituales. Mi propuesta de titular: «El pleno sube un 10 % el billete sencillo del tranvía desde el 1 de marzo». No es más amable ni más duro que los otros dos: simplemente nombra a quien decide y da la cifra, para que cada lector la valore.',
            minWords: 150,
            checks: [
              { label: 'Nombras recursos (eufemismo, nominalización, agente, cuantificación…)', pattern: '(?<!\\p{L})(?:eufemismos?|disfemismos?|nominalizaci[oó]n(?:es)?|agentes?|impersonal|pasiva|cuantificaci[oó]n)(?!\\p{L})', tip: 'Ponle nombre al recurso: «es un eufemismo», «una nominalización sin agente».' },
              { label: 'Nombras al responsable real (el pleno, el gobierno municipal)', pattern: '(?<!\\p{L})(?:el\\s+pleno|gobierno\\s+municipal|ayuntamiento)(?!\\p{L})', tip: 'Di quién decide según los datos: «Según el acta, quien decide es el pleno».' },
              { label: 'Das una cifra exacta', pattern: '\\d', tip: 'Sustituye la vaguedad por el dato: «de 1,50 a 1,65 euros», «un 10 %».' },
              { label: 'Propones un titular', pattern: '(?<!\\p{L})titular(?!\\p{L})', tip: 'Termina con tu propuesta: «Mi propuesta de titular: …».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})se\\s+(?:despidieron|detuvieron|contrataron|desalojaron|atendieron|sancionaron)\\s+a(?!\\p{L})', why: 'Con «a» + personas el se es impersonal: «se despidió a…», en singular.' },
              { pattern: '(?<!\\p{L})(?:miente|mienten|mintió|mintieron|manipulador(?:es)?)(?!\\p{L})', why: 'La tarea pide no acusar de mentir: describe qué hace cada recurso, no la intención del medio.' },
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
            { tone: 'blue', label: 'AGENTE EXPLÍCITO', formula: 'activa: agente = sujeto · pasiva con «por»: agente en segundo plano', example: 'El pleno suprime el tranvía nocturno.', caption: 'Quien decide aparece y responde.', en: 'The active makes the decision-maker visible and accountable; the passive with “por” keeps them, but in the background.' },
            { tone: 'orange', label: 'AGENTE BORRADO', formula: 'se · pasiva sin «por» · producirse, registrarse · morir, desaparecer, subir · resultar + participio · nominalización', example: 'Se reajusta el servicio. · La supresión del servicio…', caption: 'Legítimo si el agente se desconoce o es obvio; sesgo si se sabe y se calla.', en: 'Agentless forms are fine when the agent is unknown or obvious; they become bias when the agent is known and left out.' },
            { tone: 'violet', label: 'VALORACIÓN Y VAGUEDAD', formula: 'adjetivo antepuesto · miles de, numerosos, cada vez más, hasta · podría, al parecer · hay que, no hay alternativa · eufemismo / disfemismo', example: 'La polémica supresión deja tirados a miles de vecinos.', caption: 'La opinión entra sin argumentarse.', en: 'Evaluation enters without argument: through adjective position, unverifiable quantities, modality and loaded vocabulary on either side.' },
            { tone: 'teal', label: 'PRESUPOSICIÓN Y NOSOTROS', formula: '¿Hasta cuándo…? · ¿Cuándo dejaste de…? · el fracaso de… · nosotros inclusivo / exclusivo', example: 'Todos tenemos que hacer un esfuerzo. · Hemos garantizado el servicio.', caption: 'Lo que se da por hecho y quién queda dentro.', en: 'What is taken for granted, and who is placed inside or outside the “we”.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres preguntas · Three questions', text: 'Ante cualquier texto: **¿quién hace qué?** (¿está el agente, o ha desaparecido?), **¿qué se da por hecho?** (presuposiciones, adjetivos, cifras vagas) y **¿quién está dentro del «nosotros»?** Para reescribir con neutralidad: **agente real, verbo exacto, cifra con fuente**, y nunca un responsable inventado.', en: 'For any text, ask who does what, what is taken for granted, and who is inside the “we”. To rewrite neutrally: the real agent, the precise verb, a sourced figure, and never an invented culprit.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: '¿Qué frase atribuye la responsabilidad con más claridad?', options: ['La compañía eléctrica cortó la luz en el barrio.', 'El barrio se quedó sin luz.', 'Se produjeron cortes de luz en el barrio.'], answer: 0, why: 'Activa con el agente de sujeto; las otras presentan el corte como algo que ocurrió solo.', en: 'Which one names who did it?' },
            { prompt: '«El despilfarro de la etapa anterior obliga a recortar». ¿Qué recursos actúan?', options: ['Un nosotros exclusivo.', 'Una cuantificación vaga.', 'Nominalización con presuposición y modalidad deóntica.'], answer: 2, why: '«El despilfarro» se da por hecho sin agente concreto, y «obliga a» presenta el recorte como inevitable.', en: 'A nominal presupposition plus “forces us to”.' },
            { prompt: '¿Cuál es correcta?', options: ['Se les detuvieron a tres personas.', 'Se detuvieron a tres personas.', 'Se detuvo a tres personas.'], answer: 2, why: 'Se impersonal con «a» + personas: verbo en singular.', en: 'Impersonal se with a personal object.' },
            { prompt: 'Nadie sabe qué causó el incendio del almacén. ¿Qué titular es el adecuado?', options: ['Un incendio destruye un almacén en el polígono sur.', 'El dueño quema su almacén en el polígono sur.', 'Arde en extrañas circunstancias un almacén del polígono sur.'], answer: 0, why: 'Sin agente conocido, lo honesto es no inventarlo; «en extrañas circunstancias» insinúa sin datos.', en: 'Do not invent a cause, and do not hint at one.' },
            { prompt: 'El director dice en una reunión: «Hemos superado los objetivos del año». Solo trabajó en ello el equipo de ventas. ¿Qué tipo de «nosotros» puede ser problemático?', options: ['Ninguno: «nosotros» siempre incluye a todos.', 'Un nosotros exclusivo de la dirección, que se atribuye el mérito del equipo.', 'Un nosotros de modestia, sin efecto.'], answer: 1, why: 'Si «hemos» se refiere a la dirección, se queda con un mérito ajeno; el contexto decide quién está dentro.', en: 'Who gets the credit in that “we”?' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro escenario, la misma lupa. New setting, same magnifying glass.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: el comunicado de una universidad y un correo a los vecinos de un edificio. Tu alumno elige y explica qué recurso ha detectado o evitado.', self: 'Ahora, en el comunicado de una universidad y en el correo de una comunidad de vecinos: elige la mejor opción y explica por qué. (A university notice and a residents’ email.)' } },
          { kind: 'choice', title: 'Universidad y comunidad · University and building', items: [
            { prompt: 'Comunicado: «Se ha considerado oportuno aplazar las becas de verano». Quieres saber quién lo decidió. ¿Qué preguntas?', options: ['«¿Por qué se ha considerado oportuno?»', '«¿Qué órgano decidió aplazarlas, y cuándo?»', '«¿Cuándo dejaron de pensar en los estudiantes?»'], answer: 1, why: 'La pregunta recupera el agente borrado sin cargarla; la tercera es una pregunta cargada.', en: 'Recover the agent without a loaded question.' },
            { prompt: 'La junta de una comunidad de vecinos escribe: «Hay que asumir una cuota extraordinaria de 300 euros». ¿Qué versión es más transparente?', options: ['«La junta propone una cuota extraordinaria de 300 euros por vivienda, que se votará el día 10».', '«Todos tenemos que arrimar el hombro con 300 euros».', '«Se impone una cuota extraordinaria».'], answer: 0, why: 'Nombra a quien propone, da la cifra exacta y dice cómo se decide.', en: 'Who proposes, how much, and how it will be decided.' },
            { prompt: '«La reducción del horario de la biblioteca afectará a cientos de estudiantes». Dato: 420 estudiantes la usan por la tarde. ¿Qué cambias primero?', options: ['Solo el verbo «afectará».', 'La cuantificación vaga y la nominalización: quién reduce el horario y a cuántos afecta.', 'Nada: es una frase neutral.'], answer: 1, why: 'Hay dos recursos: «la reducción» sin agente y «cientos» en lugar de 420.', en: 'Two devices to fix: the agentless noun and the vague figure.' },
          ] },
        ] },
        { title: 'Ampliación · Metáforas de marco y el «se» de la ciencia', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1. Metáforas de marco.** Además de la sintaxis, el léxico enmarca: «una **avalancha** de solicitudes», «una **sangría** de empleo» o «una **ola** de protestas» convierten hechos humanos en fenómenos naturales o en catástrofes, sin agente y con una valoración incorporada. **2. El «se» de la ciencia.** En un artículo científico, «**Se observó** una reducción del 12 %» no oculta a nadie: el agente (el equipo investigador) es evidente y la norma del género lo omite. El mismo «se» que sesga una noticia es **neutro** en un informe de laboratorio. El análisis crítico siempre mira el **género** y lo que el lector necesita saber.', en: 'For strong students or spare time. 1. Vocabulary frames too: “an avalanche of applications”, “a haemorrhage of jobs”, “a wave of protests” turn human actions into natural disasters, with no agent and a built-in evaluation. 2. In scientific writing, “se observó…” hides nobody: the research team is obvious and the genre leaves it out. The same se that biases a news item is neutral in a lab report, so critical analysis always considers the genre.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«Una avalancha de turistas colapsa el casco antiguo». ¿Qué hace la metáfora?', options: ['Nada: es un uso literal de «avalancha».', 'Da una cifra exacta de visitantes.', 'Presenta a los turistas como una catástrofe natural, sin agente y con valoración negativa.'], answer: 2, why: 'La metáfora enmarca: personas que deciden viajar se convierten en un fenómeno imparable y amenazante.', en: 'How does the metaphor frame the visitors?' },
            { prompt: 'Artículo de una revista médica: «Se administró el fármaco a 200 pacientes». ¿Es un sesgo de agente borrado?', options: ['Sí: toda pasiva refleja es sospechosa.', 'No: el agente es evidente y el género lo omite por norma.', 'Sí: debería decir qué médico lo administró.'], answer: 1, why: 'En el registro científico la omisión del agente es convencional y no oculta información relevante.', en: 'Genre matters: here the agent is obvious.' },
            { prompt: '¿Qué titular evita el marco catastrófico sin perder información?', options: ['La ciudad, desbordada por las protestas.', 'Una ola de protestas sacude la ciudad.', 'Unas 3.000 personas se manifiestan en el centro contra el cierre del tranvía.'], answer: 2, why: 'Da agentes (las personas que se manifiestan), cifra, lugar y motivo, sin metáforas de catástrofe.', en: 'Agents, figure, place and reason, with no disaster metaphor.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca una noticia del día (sin temas de partido), señala una metáfora de marco y un agente borrado, y decide si el género justifica la omisión.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 235 · Producción y revisión de ensayo argumentativo C2', text: 'Hoy has leído con lupa cómo un texto reparte la responsabilidad y cuela valoraciones sin argumentarlas. En la clase 235 pasas al otro lado: escribes y revisas tu propio **ensayo argumentativo**, donde cada valoración tiene que estar argumentada, cada concesión, bien construida («Es cierto que…, no obstante…») y cada afirmación, atribuida.', en: 'Today you read closely how a text distributes responsibility and slips in evaluation without argument. Class 235 takes you to the other side: you write and revise your own argumentative essay, where every evaluation must be argued, every concession well built and every claim attributed.', href: '/gramatica/produccion-y-revision-de-ensayo-argumentativo', label: 'Ir a la clase 235' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “El pleno suprime el tranvía”, “Se suprime el tranvía” y “Desaparece el tranvía”?». Respuesta esperada: la primera nombra al responsable; la segunda lo borra, aunque se supone que alguien decidió; la tercera elimina incluso la idea de una decisión. Tarea: la nota de Escribir.' },
        ] },
      ],
    },
  ],
};
