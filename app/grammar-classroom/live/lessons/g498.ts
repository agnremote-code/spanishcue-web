import type { LiveLesson } from '../types';

/**
 * Lesson 498 · C1 · Estilo formal: impersonalidad, cortesía y precisión (course unit G198).
 * Builds on G183 (lesson 483: choosing active / ser passive / se / other impersonals by topic
 * and register), G164 (lesson 464: the politeness scale, quería / le agradecería que, se ruega),
 * G176 (lesson 476: gerund of posteriority) and G188 (lesson 488: nominal style). Those cores
 * are NOT re-taught. C1 step: writing a whole formal text (institutional email, minutes,
 * report) that is impersonal, courteous AND precise. Content: impersonal evaluation and
 * recommendation (se recomienda que / es conveniente que / conviene que / es necesario que +
 * subjunctive; + infinitive when nobody in particular; se ruega + inf. / se ruega a… que +
 * subj.) vs assertion (cabe señalar / destacar / recordar que, es evidente que, consta que +
 * indicative); administrative «procede + inf.» (= corresponde) vs the empty verb «proceder a +
 * noun»; limits of nominal style (anchor: «Se recomienda que se proceda a la revisión» →
 * «Se recomienda revisar…»); plural of modesty / institutional we (consideramos); keeping
 * usted / ustedes consistent (verb, su, le / les, se lo; no tú leaks; American «se los» noted,
 * ustedes as the only plural in Latin America vs vosotros / ustedes in most of Spain);
 * not stacking softeners; precision: cosa, hacer, tema, poner, lo de → exact verbs and nouns;
 * «a nivel de» only with real levels (DPD); «en base a» → con base en / sobre la base de /
 * basándose en (DPD); gerund of posteriority as a reminder. Ampliación: minutes and covering
 * letters (se acuerda + inf., se levanta la sesión, adjunto agreeing, se ruega + inf. singular).
 * Scene: Bogotá (Colombia), the fictional Corporación Cultural Altamira prepares its
 * neighbourhood book fair. Coordinator Natalia Restrepo and director Mercedes Ospina revise the
 * minutes and emails of Felipe Guzmán, a new assistant who writes as he talks. Escuchar:
 * Mercedes's recorded message to members and volunteers (es-CO-SalomeNeural). Escribir:
 * Felipe's colloquial email to Liliana Mejía, manager of the sports hall, rewritten formally.
 */
export const lesson: LiveLesson = {
  id: 498,
  level: 'C1',
  title: 'Estilo formal: impersonalidad, cortesía y precisión',
  subtitle: 'Redactar correos, actas e informes formales: impersonales con el modo justo, usted coherente y palabras exactas.',
  legend: [
    { tone: 'blue', label: 'IMPERSONALIDAD · se recomienda que, es conveniente que, cabe señalar que, procede (recommending or stating without an “I”)' },
    { tone: 'teal', label: 'CORTESÍA Y DISTANCIA · usted / ustedes + su, le, se lo · le agradeceríamos que · consideramos (courtesy, consistent person)' },
    { tone: 'orange', label: 'PRECISIÓN · la palabra exacta: el presupuesto, presentar, con base en (the exact word)' },
    { tone: 'violet', label: 'LO QUE SE EVITA · proceder a la revisión, a nivel de, en base a, el tema de, gerundio posterior (what to avoid)' },
  ],
  optionNotes: {
    'En base a': 'El DPD (RAE) desaconseja «en base a»: usa «con base en», «sobre la base de», «basándose en», «a partir de» o «según».',
    'A nivel de': '«A nivel de» solo funciona cuando hay niveles reales (a nivel del mar, a nivel de ministros). Para «en cuanto a» o «en el ámbito de», di eso.',
    'en base a': 'El DPD (RAE) desaconseja «en base a»: usa «con base en», «sobre la base de», «basándose en», «a partir de» o «según».',
    'a nivel de': '«A nivel de» solo funciona cuando hay niveles reales (a nivel del mar, a nivel de ministros). Para «en cuanto a» o «en el ámbito de», di eso.',
    'Es recomendado que': 'Calco del inglés «it is recommended that». En español: «se recomienda que» + subjuntivo.',
    'se los': 'Con un solo objeto (el plano, el contrato) y una sola persona (usted), la forma es «se lo». «Se los» indicaría varios objetos o, en el habla de muchas zonas de América, varios destinatarios.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Escribir como institución', coach: 'Sin yo, con cortesía y con la palabra exacta. No “I”, polite, precise.',
      steps: [
        { title: 'Un correo que suena a chat · An email that reads like a chat', blocks: [
          { kind: 'lead', text: 'Bogotá. La **Corporación Cultural Altamira** organiza cada año la Feria del Libro de Barrio. **Felipe Guzmán**, asistente recién llegado, redacta bien… cuando escribe a sus amigos. Su primer correo a la administradora del polideportivo, **Liliana Mejía**, y su primera acta del comité llegan a la mesa de la coordinadora, **Natalia Restrepo**. Ya conoces las formas impersonales y la escala de la cortesía; hoy las combinas para escribir un **texto formal completo**: sin «yo», con el usted bien sostenido y sin palabras comodín.', en: 'Bogotá. A cultural association is organising its neighbourhood book fair. Felipe, a new assistant, writes well when he messages friends, but his first email to the manager of a sports hall and his first set of minutes land on the coordinator’s desk. You already know the impersonal forms and the politeness scale; today you combine them to write a whole formal text: impersonal, consistently courteous and precise.' },
          { kind: 'guide', text: { teacher: 'Tú lees el borrador de Felipe; tu alumno lee la versión de Natalia. Después tu alumno señala tres cambios y dice para qué sirve cada uno.', self: 'Lee las dos versiones en voz alta y localiza tres cambios. ¿Qué consigue cada uno? (Find three changes and say what each one achieves.)' } },
          { kind: 'compare', title: 'El mismo correo, dos versiones · The same email, two versions', columns: [
            { tone: 'violet', label: 'BORRADOR DE FELIPE', sentence: 'Hola, Liliana, te escribo por [[lo del|violet]] polideportivo. Necesitamos [[poner|violet]] cuarenta mesas y ver [[el tema del|violet]] sonido. [[En base a|violet]] lo que me digas, hacemos el contrato.', idea: 'Tuteo con una desconocida, palabras comodín (lo de, poner, el tema) y una locución desaconsejada.', en: 'Informal tú with someone he has never met, vague catch-all words and a phrase the RAE advises against. Perfectly clear in a chat; too casual and too vague for an institutional email.' },
            { tone: 'teal', label: 'VERSIÓN DE NATALIA', sentence: 'Estimada señora Mejía: [[Le|teal]] escribo para solicitar la reserva del polideportivo. [[Necesitaríamos|teal]] cuarenta mesas y un [[equipo de sonido|orange]]. [[Con base en|orange]] [[su|teal]] respuesta, prepararemos el contrato.', idea: 'Usted sostenido (le, su), condicional de cortesía y sustantivos exactos.', en: 'Usted kept up throughout (le, su), a polite conditional and exact nouns: the reader knows precisely what is being asked for.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué problema tiene «ver el tema del sonido»?', options: ['Es incorrecto usar «tema» en español.', 'Debería ir en plural: «los temas».', 'No dice qué se necesita: ¿un equipo, una revisión, un técnico?'], answer: 2, why: '«Tema» no es incorrecto, pero aquí es una palabra comodín: el lector no sabe qué se pide. «Un equipo de sonido» lo dice.', en: '“Tema” is a real word, but here it is a vague catch-all: the reader cannot tell what is actually being requested.' },
            { prompt: '¿Por qué Natalia cambia «te escribo» por «le escribo»?', options: ['Porque es un primer contacto profesional con alguien que no conocen: usted marca distancia y respeto.', 'Porque «te» es incorrecto en un correo.', 'Porque Liliana Mejía es mayor que Felipe.'], answer: 0, why: 'No es una cuestión de corrección sino de registro: en un primer correo institucional, usted es la opción segura.', en: 'It is a matter of register, not correctness: in a first institutional email, usted is the safe choice.' },
          ] },
        ] },
        { title: 'Recomendar y afirmar sin «yo» · Recommending and stating without “I”', mascot: '/brand/mascot/studying.webp', coach: '¿Valoras o informas? Evaluating or stating a fact?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'IMPERSONALES DEL TEXTO FORMAL', question: '¿Recomiendas o valoras algo, o afirmas un hecho?', en: 'Formal Spanish avoids “I think we should…”. To recommend or evaluate, it uses impersonal expressions followed by the subjunctive when there is a specific subject, or by the infinitive when nobody in particular is meant. To state or highlight a fact, it uses cabe señalar / destacar que or es evidente que, followed by the indicative. Procede + infinitive is administrative: “it is appropriate / in order to”.', formula: ['se recomienda / es conveniente / conviene / es necesario + que + SUBJUNTIVO (sujeto concreto)', 'se recomienda / es conveniente / conviene / es necesario + INFINITIVO (nadie en particular)', 'cabe señalar / destacar / recordar que · es evidente que · consta que + INDICATIVO', 'se ruega + infinitivo · se ruega a… que + subjuntivo · procede + infinitivo'],
            meaning: 'Para **recomendar, valorar o pedir**, el texto formal usa una expresión impersonal y **subjuntivo** si hay un sujeto concreto («Se recomienda que **los expositores lleguen**…») o **infinitivo** si vale para cualquiera («Se recomienda **llegar** temprano»). Para **afirmar o subrayar un hecho**, **cabe señalar / destacar que** + **indicativo**: no se valora, se informa. **Procede** + infinitivo (= corresponde, es lo adecuado) es propio de actas y documentos administrativos.',
            examples: [
              { es: '[[Se recomienda que|blue]] los expositores lleguen a las ocho.', en: 'A recommendation with a specific subject: subjunctive.' },
              { es: '[[Es conveniente|blue]] reservar el espacio con un mes de antelación.', en: 'Valid for anyone: infinitive, no que.' },
              { es: '[[Cabe destacar que|blue]] la asistencia creció un veinte por ciento.', en: 'A fact being highlighted, not evaluated: indicative.' },
              { es: 'La solicitud llegó fuera de plazo; por tanto, no [[procede|blue]] admitirla.', en: 'Administrative style: “it is not in order to accept it”.' },
              { es: '[[Se ruega a|blue]] los asistentes que confirmen su participación.', en: 'Se ruega + a + person + que + subjunctive; with a bare infinitive: “Se ruega confirmar la asistencia”.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Informe: «Cabe señalar que el auditorio solo ___ doscientas sillas».', options: ['tiene', 'tuviera', 'tenga'], answer: 0, why: '«Cabe señalar que» presenta un hecho: indicativo.', en: 'Cabe señalar que introduces a fact, so the indicative follows.' },
            { prompt: 'Informe: «Conviene que el comité ___ el presupuesto antes del viernes».', options: ['apruebe', 'aprueba', 'aprobando'], answer: 0, why: '«Conviene que» valora lo que debería ocurrir: subjuntivo.', en: 'Conviene que evaluates what should happen, so the subjunctive follows.' },
          ] },
        ] },
        { title: 'El estilo nominal y sus límites · Nominal style and its limits', mascot: '/brand/mascot/speaking.webp', coach: '¿El verbo dice algo? Does the verb carry meaning?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'VERBOS VACÍOS', question: '¿Ese verbo aporta significado o solo alarga la frase?', en: 'Formal texts love nouns, but verbs like proceder a, realizar, efectuar or llevar a cabo often add length and nothing else: “proceder a la revisión de” simply means “revisar”. Spanish style guides criticise this padding. Keep the noun only when it carries extra information (an external review) or in fixed formulas of minutes.', formula: ['proceder a la revisión de → revisar', 'realizar una evaluación → evaluar · efectuar el pago → pagar', 'hacer entrega de → entregar · llevar a cabo una reunión → reunirse', 'se recomienda que se proceda a la revisión → se recomienda revisar'],
            meaning: 'El estilo formal prefiere los sustantivos, pero **un verbo vacío + sustantivo** muchas veces solo alarga: «**Se recomienda que se proceda a la revisión** del contrato» dice lo mismo que «**Se recomienda revisar** el contrato». Los libros de estilo critican este relleno. El sustantivo se justifica cuando **añade información** («una **revisión externa** del contrato») o en fórmulas fijas de las actas («**Se procede a la votación**»).',
            examples: [
              { es: 'Se recomienda que [[se proceda a la revisión|violet]] del contrato. → [[Se recomienda revisar|blue]] el contrato.', en: 'Same meaning, half the words.' },
              { es: 'La directora [[hizo entrega de|violet]] los diplomas. → La directora [[entregó|orange]] los diplomas.', en: 'The simple verb is clearer and more direct.' },
              { es: 'Se encargó una [[evaluación externa|orange]] de la feria.', en: 'Here the noun is justified: “external” is information a bare verb could not carry so neatly.' },
            ] },
          { kind: 'compare', title: '«Procede» no es «proceder a» · Two different uses', columns: [
            { tone: 'blue', label: 'PROCEDE + INFINITIVO', sentence: 'Si el polideportivo no confirma, [[procede|blue]] buscar otro espacio.', idea: '= corresponde, es lo adecuado. Impersonal, útil en actas e informes.', en: 'It means “it is appropriate to”. An impersonal resource with real meaning: keep it.' },
            { tone: 'violet', label: 'PROCEDER A + SUSTANTIVO', sentence: 'El comité [[procedió a la búsqueda|violet]] de otro espacio.', idea: '= empezó a hacer. Casi siempre sobra: «El comité buscó otro espacio».', en: 'It means “went on to do”. Usually padding: just use the verb.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión es más precisa y económica?', options: ['Se procedió a realizar una encuesta.', 'Se encuestó a los visitantes de la feria.', 'Se llevó a cabo la realización de una encuesta.'], answer: 1, why: 'Un solo verbo con significado y el dato concreto (a quién). Las otras dos amontonan verbos vacíos.', en: 'One meaningful verb plus the concrete detail; the others pile up empty verbs.' },
            { prompt: 'Acta: «Como la solicitud está incompleta, no ___ tramitarla».', options: ['procede a', 'procede', 'se procede de'], answer: 1, why: '«No procede + infinitivo» = no es adecuado. «Proceder a» significaría «empezar a», y aquí no se empieza nada.', en: 'No procede + infinitive means “it is not in order to”.' },
          ] },
        ] },
        { title: 'Usted, nosotros y la cortesía coherente · Usted, “we” and consistent courtesy', mascot: '/autoestudio/mascot/noting.webp', coach: 'Elige una persona y mantenla. Choose a person and keep it.', blocks: [
          { kind: 'table', title: 'Usted y ustedes de principio a fin · Usted and ustedes from start to finish', head: ['', 'usted', 'ustedes'], rows: [
            ['verbo', 'usted **sabe**, **puede**, **confirme**', 'ustedes **saben**, **pueden**, **confirmen**'],
            ['posesivo', '[[su|teal]] propuesta · la propuesta [[suya|teal]] (o «de usted»)', '[[su|teal]] propuesta · la propuesta de ustedes'],
            ['complemento indirecto', '[[le|teal]] escribo · [[le|teal]] agradecería', '[[les|teal]] escribo · [[les|teal]] agradeceríamos'],
            ['con lo / la / los / las', '[[se lo|teal]] envío (le + lo → se lo)', '[[se lo|teal]] envío · en el habla de muchas zonas de América: «se los envío»'],
          ], note: 'El error típico no es elegir usted o tú, sino **mezclarlos**: «Le escribo para pedir**te**…». Si «su» resulta ambiguo (¿de usted o de él?), se aclara: «el informe **de usted**». En la escritura formal se prefiere «se lo envío» aunque los destinatarios sean varias personas.' },
          { kind: 'concept', tone: 'teal', label: 'PLURAL DE MODESTIA Y CORTESÍA SIN EXCESOS', question: '¿Quién habla en el texto y cuánta distancia necesitas?', en: 'Institutional texts speak as “we” even when one person writes them (plural of modesty or institutional we): consideramos, proponemos. Keep it consistent; do not jump between creo and consideramos. Courtesy tenses (desearía, quería pedirle, le agradeceríamos que + imperfect subjunctive) are already familiar; at C1 the point is to use one well-placed formula, not to stack them.', formula: ['consideramos / proponemos / estimamos (aunque escriba una persona)', 'desearía · quería pedirle · le agradeceríamos que + imperfecto de subjuntivo', 'una fórmula bien puesta > cinco atenuadores seguidos'],
            meaning: 'Quien escribe en nombre de una institución habla en **plural** («**Consideramos** que la fecha es adecuada»), aunque firme una sola persona: es el **plural de modestia** o institucional. Y no se cambia a mitad de texto («creo… consideramos…»). La cortesía ya la conoces; en C1 se trata de **dosificarla**: «Quería preguntarle si sería posible que pudiera…» acumula tres atenuadores; «**¿Podría** enviarnos el plano?» o «**Le agradeceríamos que** nos enviara el plano» bastan.',
            examples: [
              { es: '[[Consideramos|teal]] que el cambio de fecha beneficia a ambas partes.', en: 'Institutional we: the association speaks, not Felipe.' },
              { es: '[[Quería pedirle|teal]] una copia del reglamento del polideportivo.', en: 'The polite imperfect: refers to now, adds distance.' },
              { es: '[[Le agradeceríamos que|teal]] nos confirmara la reserva antes del viernes.', en: 'Conditional + imperfect subjunctive: the classic formal request, used once.' },
            ] },
          { kind: 'tip', icon: '🌎', title: 'Ustedes a los dos lados del Atlántico · Ustedes on both sides of the Atlantic', text: 'En América (y en Canarias y parte de Andalucía) **ustedes** es el único plural: sirve para amigos y para desconocidos, así que la formalidad la marcan el saludo, el léxico y los tiempos de cortesía. En la mayor parte de España, en cambio, **vosotros** (os escribo, vuestra propuesta) es el plural de confianza y **ustedes** el formal: un correo a otra institución va con ustedes.', en: 'In Latin America (and the Canary Islands and part of Andalusia) ustedes is the only plural, for friends and strangers alike, so formality comes from greetings, vocabulary and polite tenses. In most of Spain vosotros is the informal plural and ustedes the formal one, so an email to another institution uses ustedes.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase mantiene el usted sin errores?', options: ['Le escribo para pedirle que nos envíe su propuesta.', 'Le escribo para pedirte que nos envíe tu propuesta.', 'Le escribo para pedirle que nos envíes su propuesta.'], answer: 0, why: 'Le, pedirle, envíe, su: todo en tercera persona, coherente con usted.', en: 'Every form is third person, consistent with usted.' },
            { prompt: 'La señora Mejía pide el plano del montaje. Respuesta formal:', options: ['Con gusto le lo enviamos.', 'Con gusto se lo enviamos.', 'Con gusto te lo enviamos.'], answer: 1, why: 'Le + lo se convierte en se lo; «te» rompería el usted.', en: 'Le + lo becomes se lo; te would break the usted.' },
          ] },
        ] },
        { title: 'Precisión: la palabra exacta · Precision: the exact word', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Qué cosa? ¿Qué tema? Which thing? Which issue?', blocks: [
          { kind: 'table', title: 'Palabras comodín y alternativas · Catch-all words and alternatives', head: ['Comodín', 'En un texto formal', 'Ejemplo'], rows: [
            ['**cosa**', 'aspecto, punto, medida, asunto, problema, elemento', 'Se discutieron tres [[medidas|orange]] de seguridad.'],
            ['**hacer**', 'redactar / elaborar (un informe), celebrar (una reunión), impartir (un taller), tomar (una decisión)', 'Se [[impartieron|orange]] cuatro talleres de escritura.'],
            ['**tema** / **lo de**', 'el presupuesto, la falta de sillas, las fallas del sonido…: nombra el asunto', '[[La falta de sillas|orange]] generó quejas.'],
            ['**poner**', 'instalar, colocar, fijar (una fecha), presentar (una queja), incluir (en el acta)', 'Se [[instalaron|orange]] cien sillas más.'],
            ['**a nivel de**', 'solo con niveles reales; si no: en cuanto a, en el ámbito de, entre…', '[[En cuanto al|orange]] aforo, el espacio es insuficiente.'],
            ['**en base a**', 'con base en, sobre la base de, basándose en, a partir de, según', '[[Sobre la base de|orange]] las encuestas, se amplió el horario.'],
          ], note: 'El DPD (RAE) desaconseja «en base a» y el uso de «a nivel de» sin idea de niveles («a nivel de presupuesto»); «a nivel del mar» o «una reunión a nivel de ministros» son correctos. «Con base en» es muy frecuente en América; «sobre la base de», en España; ambas son correctas.' },
          { kind: 'tip', icon: '💡', title: 'Recuerda: el gerundio de posterioridad · Reminder: the “later event” gerund', text: 'Ya lo viste en la clase 176: en un acta o un informe, el gerundio no debe contar un hecho **posterior** al del verbo principal. ✗ «La feria se inauguró en 2019, recibiendo un premio en 2022» → ✓ «La feria se inauguró en 2019 **y recibió** un premio en 2022». La NGLE es más tolerante cuando el segundo hecho sigue inmediatamente al primero y se entiende como su consecuencia, pero en un texto formal «y» + verbo conjugado es la opción segura.', en: 'As you saw in lesson 176, a gerund should not report an event that happens later than the main verb. The Academy grammar is more tolerant when the second event follows immediately as a consequence, but in a formal text “y” + finite verb is always safe.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Informe: «___ las encuestas, se amplió el horario de la feria».', options: ['A nivel de', 'Con base en', 'En base a'], answer: 1, why: '«Con base en» es la forma recomendada; «en base a» está desaconsejada y «a nivel de» no tiene sentido aquí.', en: 'Con base en is the recommended form here.' },
            { prompt: '¿Qué frase es más precisa para un acta?', options: ['Se puso una cosa ante la alcaldía local.', 'Se hizo lo de la alcaldía local.', 'Se presentó una queja ante la alcaldía local.'], answer: 2, why: '«Presentar una queja» es la combinación exacta; «poner una cosa» y «hacer lo de» no informan.', en: 'Presentar una queja is the exact collocation.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Frequent mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Repasa antes de enviar. Check before you send.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el problema; tu alumno dice qué falla (modo, verbo vacío, persona, comodín, locución desaconsejada) antes de ver la corrección.', self: 'Lee cada frase y di qué falla antes de mirar la corrección: ¿modo, verbo vacío, persona, comodín o locución desaconsejada?' } },
          { kind: 'mistakes', title: '¿Qué falla? · What goes wrong?', items: [
            { wrong: 'Se recomienda que los voluntarios llevan el carné.', right: 'Se recomienda que los voluntarios lleven el carné.', why: 'Recomendar es influir: «se recomienda que» pide subjuntivo.' },
            { wrong: 'Cabe señalar que la asistencia haya aumentado.', right: 'Cabe señalar que la asistencia ha aumentado.', why: '«Cabe señalar que» afirma un hecho: indicativo.' },
            { wrong: 'Se procedió a la realización de la revisión del contrato.', right: 'Se revisó el contrato.', why: 'Dos verbos vacíos y dos sustantivos para decir «revisar».' },
            { wrong: 'Estimada señora Mejía: le escribo para pedirte el plano.', right: 'Estimada señora Mejía: le escribo para pedirle el plano.', why: 'Mezcla de usted (le escribo) y tú (pedirte): hay que mantener una persona.' },
            { wrong: 'A nivel de presupuesto, la feria costó más.', right: 'La feria costó más de lo presupuestado.', why: 'No hay niveles: «a nivel de» es aquí un relleno impreciso.' },
            { wrong: 'En base a las encuestas, se cambió el horario.', right: 'Con base en / Sobre la base de las encuestas, se cambió el horario.', why: 'El DPD desaconseja «en base a».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien escrita?', options: ['Creo que el plan es viable y consideramos que conviene aprobarlo.', 'Consideramos que el plan es viable y que conviene aprobarlo.', 'Consideramos que el plan es viable, aprobándose al día siguiente.'], answer: 1, why: 'Plural institucional coherente y sin gerundio de posterioridad.', en: 'Consistent institutional we and no “later event” gerund.' },
            { prompt: 'Correo formal: «Quería preguntarle si sería posible que pudiera enviarnos el plano». ¿Qué le pasa?', options: ['Es incorrecto usar el imperfecto «quería» en presente.', 'Debería usar tú porque es más claro.', 'Acumula atenuadores: basta «¿Podría enviarnos el plano?».'], answer: 2, why: 'Es gramatical, pero amontona cortesía; una sola fórmula es más clara y igual de educada.', en: 'Grammatical but overloaded with softeners; one formula is clearer and just as polite.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno toma un correo real que haya escrito (o uno inventado) y busca en él una palabra comodín, una posible mezcla de tú y usted y un verbo vacío.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Revisar el acta y el correo', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'La revisión del martes · Tuesday’s edit', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Natalia y la directora; tu alumno es Felipe. Después tu alumno toca cada expresión marcada y explica por qué se mantiene o se corrige.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica por qué se mantiene o se corrige.' } },
          { kind: 'explore', title: 'Antes de enviar el acta', setting: 'Martes, nueve de la mañana, en la oficina de la Corporación. Natalia y Felipe revisan el acta del comité de la feria y el correo para la administradora del polideportivo. La directora, Mercedes Ospina, pasa a firmar.', lines: [
            { who: 'Natalia', text: 'Felipe, el acta está casi lista, pero aquí pusiste: «Se habló del tema de la plata». En un acta eso no dice nada.', en: 'Felipe, the minutes are almost ready, but here you wrote “people talked about the money thing”. In official minutes that says nothing.' },
            { who: 'Felipe', text: '¿Y qué pongo? Fue eso: hablamos de la plata.', en: 'So what do I write? That’s what happened: we talked about money.' },
            { who: 'Natalia', text: 'Pon exactamente qué se hizo: «Se revisó [[el presupuesto|orange]] de la feria y se aprobó un aumento del diez por ciento».', en: 'Write exactly what was done: the budget was reviewed and a ten per cent increase was approved.' },
            { who: 'Felipe', text: 'Listo. Y en las conclusiones me esmeré: «Se recomienda que se [[proceda a la revisión|violet]] del contrato».', en: 'OK. And I made a real effort with the conclusions: “It is recommended that the contract be subjected to review.”' },
            { who: 'Natalia', text: 'Es correcto, pero pesado: «proceder» no añade nada. Mejor: «[[Se recomienda que|blue]] la dirección revise el contrato antes del viernes». Así queda claro quién y cuándo.', en: 'It’s correct, but heavy: proceder adds nothing. Better to say the management should review the contract before Friday. That way it’s clear who and when.' },
            { who: 'Mercedes', text: 'Buenos días. ¿Es el acta? Agreguen el problema del aforo: [[cabe señalar que|blue]] el año pasado vinieron más de trescientas personas y el auditorio tiene doscientas sillas.', en: 'Good morning. Is that the minutes? Add the capacity problem: it is worth noting that over three hundred people came last year and the hall has two hundred seats.' },
            { who: 'Felipe', text: 'Lo puse más abajo, doctora: «[[A nivel de aforo|violet]], el auditorio se queda corto».', en: 'I put it further down: “Capacity-wise, the hall falls short.”' },
            { who: 'Mercedes', text: 'Ahí no hay ningún nivel, Felipe. Escriba «El aforo del auditorio es insuficiente». Y si el polideportivo no confirma antes del viernes, [[procede|blue]] buscar otro espacio.', en: 'There’s no “level” there, Felipe. Write that the hall’s capacity is insufficient. And if the sports hall doesn’t confirm by Friday, the proper step is to look for another venue.' },
            { who: 'Natalia', text: 'Hablando del polideportivo: Felipe le había escrito a la administradora «Hola, Liliana, te escribo por lo del polideportivo».', en: 'Speaking of the sports hall: Felipe had written to the manager “Hi Liliana, I’m writing about the sports hall thing.”' },
            { who: 'Mercedes', text: 'Demasiado familiar para un primer contacto. «Estimada señora Mejía: Le escribo en nombre de la Corporación…», y para pedir, «[[Le agradeceríamos que|teal]] nos confirmara la reserva».', en: 'Too familiar for a first contact. Start formally, and to make the request, use “we would be grateful if you could confirm the booking”.' },
            { who: 'Felipe', text: '¿Y al final pongo «creo que la fecha nos conviene a todos»?', en: 'And at the end, do I write “I think the date suits everyone”?' },
            { who: 'Natalia', text: 'Escribes en nombre de la Corporación: «[[Consideramos|teal]] que la fecha conviene a ambas partes». Y nada de «[[en base a|violet]]»: «[[Con base en|orange]] su respuesta, prepararemos el contrato y [[se lo|teal]] enviaremos».', en: 'You’re writing on behalf of the association, so use “we consider”. And no “en base a”: on the basis of her reply, we’ll draw up the contract and send it to her.' },
          ], notes: {
            'el presupuesto': '**Precisión**: sustituye a «el tema de la plata». Nombra el asunto exacto y el registro adecuado («plata», coloquial en gran parte de América, no va en un acta).',
            'proceda a la revisión': '**Verbo vacío**: «proceder a la revisión» = revisar. Es la frase ancla de la clase: correcta, pero hinchada.',
            'Se recomienda que': '**Impersonal de recomendación + subjuntivo** (revise), con sujeto concreto: la dirección. Además añade quién y cuándo.',
            'cabe señalar que': '**Impersonal para afirmar un hecho**: va con indicativo (vinieron, tiene). No valora, subraya.',
            'A nivel de aforo': '**Uso desaconsejado**: no hay niveles. Se dice «El aforo es insuficiente» o «En cuanto al aforo…».',
            'procede': '**Procede + infinitivo** = corresponde, es lo adecuado. Recurso impersonal con significado propio, típico de actas.',
            'Le agradeceríamos que': '**Fórmula de cortesía** (condicional + imperfecto de subjuntivo: confirmara) con usted. Una sola, bien colocada.',
            'Consideramos': '**Plural institucional o de modestia**: escribe Felipe, pero habla la Corporación. Sustituye a «creo».',
            'en base a': '**Locución desaconsejada** por el DPD. Alternativas: con base en, sobre la base de, a partir de, según.',
            'Con base en': '**Alternativa recomendada** a «en base a», muy frecuente en Colombia y en gran parte de América.',
            'se lo': '**Le + lo → se lo**: el contrato (lo) a la señora Mejía (le). Mantiene la tercera persona del usted.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Natalia corrige «Se habló del tema de la plata»?', options: ['Porque en un acta no se puede hablar de dinero.', 'Porque es vaga y coloquial: no dice qué se revisó ni qué se decidió.', 'Porque «se habló» es una pasiva incorrecta.'], answer: 1, why: 'Natalia pide «exactamente qué se hizo»: se revisó el presupuesto y se aprobó un aumento.', en: 'Why does Natalia correct that sentence?' },
            { prompt: '¿Qué gana la versión de Natalia frente a «se proceda a la revisión»?', options: ['Es más corta y dice quién debe revisar y cuándo.', 'Es más formal porque usa más sustantivos.', 'Evita el subjuntivo.'], answer: 0, why: '«Así queda claro quién y cuándo»: la dirección, antes del viernes.', en: 'What does Natalia’s version gain?' },
            { prompt: '¿Por qué Felipe debe escribir «consideramos» y no «creo»?', options: ['Porque son varios los que firman el correo.', 'Porque escribe en nombre de la Corporación.', 'Porque «creo» es incorrecto en un correo.'], answer: 1, why: 'Plural institucional: aunque escriba Felipe, habla la institución.', en: 'Why “consideramos” rather than “creo”?' },
          ] },
        ] },
        { title: 'El resto del acta · The rest of the minutes', mascot: '/brand/mascot/seated.webp', coach: '¿Se queda o se corrige? Keep it or fix it?', blocks: [
          { kind: 'classify', title: 'Frases del acta de Felipe · Sentences from Felipe’s minutes', categories: [
            { id: 'ok', label: 'Adecuada para un acta', tone: 'teal' },
            { id: 'fix', label: 'Hay que corregirla', tone: 'violet' },
          ], items: [
            { text: 'Se aprobó un aumento del diez por ciento en el presupuesto.', answer: 'ok', why: 'Impersonal, precisa y con el dato concreto.' },
            { text: 'Se habló de varias cosas de la seguridad.', answer: 'fix', why: '«Varias cosas» no informa: «Se acordaron tres medidas de seguridad».' },
            { text: 'Cabe señalar que el año pasado asistieron más de trescientas personas.', answer: 'ok', why: 'Afirma un hecho con indicativo: correcto y formal.' },
            { text: 'En base a lo hablado, se hará el contrato.', answer: 'fix', why: '«En base a» está desaconsejada y «lo hablado / hará» es vago: «Con base en lo acordado, se redactará el contrato».' },
            { text: 'Se acordó solicitar el polideportivo del barrio.', answer: 'ok', why: '«Se acuerda / se acordó + infinitivo» es la fórmula propia de las actas.' },
            { text: 'La feria empezó en 2019, ganando un premio en 2022.', answer: 'fix', why: 'Gerundio de posterioridad: «empezó en 2019 y ganó un premio en 2022».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno compara cómo habla la directora con Felipe (usted, «escriba») y cómo le habla Natalia (tú). En Colombia es frecuente que una jefa use usted con un empleado joven sin que suene frío.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Modo, persona, palabra exacta. Mood, person, exact word.',
      steps: [
        { title: 'Recomendar e informar · Recommending and informing', blocks: [
          { kind: 'choice', items: [
            { context: 'Informe para el comité. (Report for the committee.)', prompt: '«___ los expositores lleguen una hora antes del montaje».', options: ['Se recomienda que', 'Es recomendado que', 'Se recomienda'], answer: 0, why: 'Hay un sujeto concreto (los expositores): «se recomienda que» + subjuntivo. «Es recomendado que» es un calco.', en: 'A specific subject after the verb needs que + subjunctive.' },
            { context: 'Resolución de la Corporación. (Formal decision.)', prompt: '«La solicitud llegó fuera de plazo; no ___ concederla».', options: ['procede', 'conviene a', 'cabe que'], answer: 0, why: '«No procede + infinitivo»: no corresponde. «Cabe que» y «conviene a» no admiten aquí el infinitivo.', en: 'No procede + infinitive: “it is not in order to”.' },
            { context: 'Correo al comité. (Email to the committee.)', prompt: '«Es conveniente que la directora ___ el contrato antes del lunes».', options: ['firma', 'firmando', 'firme'], answer: 2, why: '«Es conveniente que» valora: subjuntivo.', en: 'An evaluative expression with que takes the subjunctive.' },
            { context: 'Boletín para los socios. (Members’ newsletter.)', prompt: '«Cabe recordar que la inscripción ___ gratuita para los socios».', options: ['siendo', 'es', 'sea'], answer: 1, why: '«Cabe recordar que» presenta un hecho: indicativo.', en: 'Recalling a fact: indicative.' },
          ] },
        ] },
        { title: '¿Indicativo o subjuntivo? · Indicative or subjunctive?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué modo pide el hueco? · Which mood does the gap need?', categories: [
            { id: 'ind', label: 'Indicativo: se afirma un hecho', tone: 'blue' },
            { id: 'subj', label: 'Subjuntivo: se recomienda, se valora o se pide', tone: 'teal' },
          ], items: [
            { text: 'Cabe señalar que el polideportivo … (tener) acceso para sillas de ruedas.', answer: 'ind', why: 'Se subraya un hecho: tiene.' },
            { text: 'Se recomienda que los voluntarios … (llevar) su carné.', answer: 'subj', why: 'Recomendación con sujeto concreto: lleven.' },
            { text: 'Es evidente que la asistencia … (aumentar) cada año.', answer: 'ind', why: '«Es evidente que» afirma: aumenta.' },
            { text: 'Conviene que el comité … (aprobar) el presupuesto hoy.', answer: 'subj', why: 'Valoración de lo deseable: apruebe.' },
            { text: 'Se ruega a los asistentes que … (apagar) los teléfonos.', answer: 'subj', why: 'Petición: apaguen.' },
            { text: 'Consta en el acta que la directora … (votar) a favor.', answer: 'ind', why: '«Consta que» da fe de un hecho: votó.' },
          ] },
        ] },
        { title: 'Detecta la palabra imprecisa · Spot the vague word', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'El informe de la feria · The fair report', items: [
            { context: 'Informe: «Durante la feria se hicieron cuatro talleres de escritura».', prompt: '¿Qué cambiarías?', options: ['talleres → cosas', 'cuatro → varios', 'se hicieron → se impartieron'], answer: 2, why: '«Hacer» es el comodín: los talleres se imparten (o se ofrecen). «Varios» y «cosas» quitan precisión.', en: 'Hacer is the catch-all here; impartir is the exact verb for workshops.' },
            { context: 'Informe: «El tema de las sillas generó quejas».', prompt: '¿Qué cambiarías?', options: ['generó → hizo', 'quejas → cosas', 'El tema de las sillas → La falta de sillas'], answer: 2, why: '«El tema de» no dice cuál era el problema; «la falta de sillas», sí.', en: 'Name the actual problem instead of “the chairs thing”.' },
            { context: 'Informe: «Pusimos una queja ante la alcaldía local por el ruido».', prompt: '¿Qué cambiarías?', options: ['Pusimos → Presentamos', 'alcaldía local → sitio', 'ruido → tema'], answer: 0, why: 'La combinación exacta es «presentar una queja».', en: 'Presentar una queja is the precise collocation.' },
            { context: 'Informe: «A nivel de voluntarios, este año fuimos más».', prompt: '¿Cómo lo reescribirías?', options: ['A nivel de los voluntarios, fuimos más.', 'Este año participaron más voluntarios.', 'A nivel voluntario, este año fuimos más.'], answer: 1, why: 'Sin niveles reales, «a nivel de» sobra: el sujeto exacto (voluntarios) y un verbo preciso (participar).', en: 'Drop the filler and make the volunteers the subject.' },
          ] },
        ] },
        { title: 'Antes de enviar · Before sending', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Le escribo para pedirte que confirmes la reserva.', ok: false, options: ['Le escribo para pedirle que confirme la reserva.', 'Te escribo para pedirle que confirme la reserva.', 'Le escribo para pedirle que confirmes la reserva.'], answer: 0, why: 'Usted de principio a fin: le, pedirle, confirme.' },
            { sentence: 'Cabe destacar que la asistencia aumente un veinte por ciento.', ok: false, options: ['Cabe destacando que la asistencia aumentó un veinte por ciento.', 'Cabe destacar que la asistencia aumentó un veinte por ciento.', 'Cabe destacar de que la asistencia aumentó un veinte por ciento.'], answer: 1, why: 'Se subraya un hecho: indicativo. «De que» sería dequeísmo.' },
            { sentence: 'La feria se inauguró en 2019, recibiendo un premio municipal en 2022.', ok: false, options: ['La feria se inauguró en 2019 y recibió un premio municipal en 2022.', 'La feria se inauguró en 2019, habiendo recibido un premio municipal en 2022.', 'La feria se inauguró en 2019, recibido un premio municipal en 2022.'], answer: 0, why: 'El premio es tres años posterior: «y» + verbo conjugado. «Habiendo recibido» indicaría anterioridad.' },
            { sentence: 'Se ruega a los expositores que retiren sus mesas antes de las seis.', ok: true, why: 'Correcta: se ruega + a + personas + que + subjuntivo.' },
            { sentence: 'Se procedió a la entrega de los diplomas a los ganadores.', ok: false, options: ['Se hizo lo de los diplomas a los ganadores.', 'Se procedió a entregar la entrega de los diplomas.', 'Se entregaron los diplomas a los ganadores.'], answer: 2, why: 'Verbo vacío: «proceder a la entrega» = entregar. La frase gana claridad.' },
          ] },
        ] },
        { title: 'El correo, línea a línea · The email, line by line', blocks: [
          { kind: 'chat-fill', title: 'Felipe y Natalia redactan juntos · Felipe and Natalia draft together', lines: [
            { who: 'Felipe', text: '¿Así empiezo? «Estimada señora Mejía: ___ escribo en nombre de la Corporación Cultural Altamira».', options: ['Les', 'Le', 'Te'], answer: 1, why: 'Una destinataria tratada de usted: le escribo.' },
            { who: 'Natalia', text: 'Sí. Para pedirle los micrófonos: «___ que nos prestara dos micrófonos inalámbricos».', options: ['Le agradeceríamos', 'Te agradeceríamos', 'Le agradecemos'], answer: 0, why: 'Condicional + imperfecto de subjuntivo (prestara) con usted. «Le agradecemos que nos prestara» no encaja: el presente pediría «preste».' },
            { who: 'Felipe', text: 'Si nos pide el plano del montaje, respondo: «Con mucho gusto ___ enviamos».', options: ['le lo', 'se los', 'se lo'], answer: 2, why: 'Le + lo → se lo: un plano, una destinataria.' },
            { who: 'Natalia', text: 'Y para cerrar, nada de «quedo atento a tu respuesta». Escribe: «Quedamos a la espera de ___ respuesta».', options: ['su', 'tu', 'vuestra'], answer: 0, why: 'Posesivo de usted: su. Además, «quedamos» mantiene el plural institucional.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Cabe', 'señalar', 'que', 'el', 'plazo', 'vence', 'el', 'viernes.'], accept: ['Cabe señalar que el plazo vence el viernes.'], en: 'It should be noted that the deadline is Friday: a fact, so the indicative.' },
            { tiles: ['Le', 'agradeceríamos', 'que', 'nos', 'enviara', 'el', 'contrato', 'firmado.'], accept: ['Le agradeceríamos que nos enviara el contrato firmado.'], en: 'We would be grateful if you could send us the signed contract.' },
            { tiles: ['Consideramos', 'conveniente', 'que', 'la', 'feria', 'se', 'celebre', 'en', 'noviembre.'], accept: ['Consideramos conveniente que la feria se celebre en noviembre.', 'Consideramos conveniente que se celebre la feria en noviembre.'], en: 'We consider it advisable for the fair to be held in November: institutional we plus subjunctive.' },
          ] },
        ] },
        { title: 'Del chat al correo formal · From chat to formal email', blocks: [
          { kind: 'rewrite', title: 'Reescribe el borrador de Felipe · Rewrite Felipe’s draft', items: [
            { prompt: 'Te escribo para pedirte el reglamento del polideportivo.', instruction: 'Pasa la frase a usted. (Switch to usted.)', accept: ['Le escribo para pedirle el reglamento del polideportivo.', 'Le escribo para solicitarle el reglamento del polideportivo.'] },
            { prompt: '¿Me puedes mandar las facturas?', instruction: 'Usa «le agradecería que» + imperfecto de subjuntivo. (Use le agradecería que.)', accept: ['Le agradecería que me mandara las facturas.', 'Le agradecería que me mandase las facturas.', 'Le agradecería que me enviara las facturas.', 'Le agradecería que me enviase las facturas.', 'Le agradecería que me remitiera las facturas.', 'Le agradecería que me remitiese las facturas.'] },
            { prompt: 'Hay que ver el tema del sonido.', instruction: 'Usa «se recomienda que» con «la empresa» como sujeto, el verbo «revisar» y «el sistema de sonido». (Use se recomienda que.)', accept: ['Se recomienda que la empresa revise el sistema de sonido.', 'Se recomienda que el sistema de sonido lo revise la empresa.'] },
            { prompt: 'Vamos a proceder a la entrega de los diplomas.', instruction: 'Quita el verbo vacío y mantén «vamos a». (Remove the empty verb.)', accept: ['Vamos a entregar los diplomas.', 'A continuación vamos a entregar los diplomas.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno escribe en un chat informal una petición real (a un compañero) y la convierte en un correo formal de tres líneas a alguien que no conoce.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Mensaje de la directora', coach: 'Primero la idea general, luego los detalles. First the gist, then the details.',
      steps: [
        { title: 'Un cambio de sede · A change of venue', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota las expresiones con las que la directora recomienda, pide o subraya algo sin decir «yo quiero». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cómo la directora recomienda, pide o subraya algo sin decir «yo quiero».' } },
          { kind: 'listen', title: 'Mensaje para socios y voluntarios', channel: 'CORPORACIÓN CULTURAL ALTAMIRA · MENSAJE DE LA DIRECCIÓN · MERCEDES OSPINA', src: '/audio/grammar-live/498.mp3',
            before: 'La directora envía un mensaje grabado a los socios y voluntarios de la feria. ¿Qué crees que va a anunciar y qué les va a pedir? (The director sends a recorded message to members and volunteers. What do you think she will announce and ask for?)',
            gist: { prompt: '¿Cuál es el objetivo principal del mensaje?', options: ['Cancelar la feria de este año.', 'Pedir dinero a los socios para el auditorio.', 'Anunciar el cambio de sede y de fecha de la feria y dar instrucciones prácticas.'], answer: 2, why: 'Anuncia el traslado al polideportivo, la nueva fecha y lo que deben hacer expositores y voluntarios.', en: 'What is the main purpose of the message?' },
            details: [
              { prompt: '¿Por qué se cambia de sede?', options: ['Porque el auditorio está en obras.', 'Porque el polideportivo es más barato.', 'Porque el año pasado el auditorio se quedó pequeño.'], answer: 2, why: '«La asistencia superó las trescientas personas y el auditorio Los Cerezos se quedó pequeño».', en: 'Why is the venue changing?' },
              { prompt: '¿Qué se pide a los expositores antes del día 5?', options: ['Que traigan sus propias mesas.', 'Que confirmen su participación mediante un formulario.', 'Que paguen la inscripción.'], answer: 1, why: '«Se les ruega que confirmen su participación antes del día 5 mediante el formulario».', en: 'What are exhibitors asked to do before the 5th?' },
              { prompt: '¿A qué hora conviene que lleguen los expositores?', options: ['A las nueve y media.', 'A las ocho.', 'A las siete.'], answer: 1, why: '«Es conveniente que lleguen a las ocho», porque el montaje debe terminar a las nueve y media.', en: 'What time should exhibitors arrive?' },
              { prompt: '¿Qué deben hacer los voluntarios que no puedan asistir?', options: ['Escribir directamente a la directora.', 'Comunicarlo cuanto antes.', 'Buscar a otra persona.'], answer: 1, why: '«Les agradeceríamos que… si no pueden asistir, lo comuniquen cuanto antes».', en: 'What should volunteers who cannot come do?' },
            ],
            transcript: 'Buenas tardes. Les habla Mercedes Ospina, directora de la Corporación Cultural Altamira. Me dirijo a ustedes, socios y voluntarios de la Feria del Libro de Barrio, para informarles de un cambio importante. Como saben, el año pasado la asistencia superó las trescientas personas y el auditorio Los Cerezos se quedó pequeño. Por ese motivo, el comité ha decidido trasladar la feria al polideportivo del barrio. [[Cabe destacar que|blue]] el nuevo espacio tiene capacidad para quinientas personas y acceso para sillas de ruedas. La feria se celebrará, por tanto, el sábado catorce de noviembre, una semana más tarde de lo previsto. [[Consideramos|teal]] que el cambio nos beneficia a todos, aunque somos conscientes de las molestias que pueda ocasionarles. A los expositores [[se les ruega que|blue]] confirmen su participación antes del día cinco mediante el formulario que recibirán por correo. [[Es conveniente que|blue]] lleguen a las ocho de la mañana, porque el montaje debe terminar a las nueve y media. A los voluntarios [[les agradeceríamos que|teal]] revisaran su turno en la planilla compartida y, si no pueden asistir, que lo comuniquen cuanto antes. [[Se recomienda que|blue]] todos traigan su carné de la Corporación. Para cualquier duda, pueden escribir a Natalia Restrepo, que coordina la logística. [[Quería|teal]], por último, agradecerles su paciencia y su compromiso. Muchas gracias, y nos vemos en la feria.',
            reply: { teacher: 'Tú eres un voluntario que no escuchó el mensaje. Tu alumno te lo resume por escrito en un correo breve y formal, con usted, una expresión impersonal y sin palabras comodín.', self: 'Resume el mensaje en un correo formal de cuatro o cinco líneas para un voluntario que no lo escuchó: usa usted, una expresión impersonal y ninguna palabra comodín.' } },
          { kind: 'tip', icon: '🔊', title: 'Formal y cercano a la vez · Formal yet warm', text: 'Fíjate en que la directora combina recursos impersonales (**cabe destacar que**, **se recomienda que**) con un **nosotros** institucional y un cierre cálido («**Quería**, por último, agradecerles…»). El estilo formal no es frío: es preciso y respetuoso.', en: 'The director mixes impersonal resources with an institutional “we” and a warm closing. Formal style is not cold; it is precise and respectful.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar y redactar con registro', coach: '¿Quién lee y qué necesita saber? Who reads it and what do they need?',
      steps: [
        { title: 'En la reunión del comité · At the committee meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las de seguimiento. Si tu alumno usa una palabra comodín o mezcla tú y usted, tú preguntas «¿qué cosa exactamente?» o «¿tú o usted?» y tu alumno reformula.', self: 'Lee la situación y responde en voz alta. Antes de hablar, decide: ¿usted o tú? ¿Recomiendo o afirmo? ¿Qué palabra exacta necesito?' } },
          { kind: 'talk', cards: [
            { q: 'Tienes que pedirle algo por correo a alguien que no conoces (la secretaría de una universidad, el administrador de un edificio, una empresa). Dicta el correo en voz alta. · Dictate a formal email to someone you don’t know.', followUps: ['¿Cómo saludas y cómo te despides? (Greeting and closing?)', '¿Qué fórmula de cortesía usas, y solo una? (Which single polite formula?)', '¿Mantienes el usted hasta el final? (Usted throughout?)'], phrases: ['Estimado señor… / Estimada señora…:', '[[Le|teal]] escribo para solicitar…', '[[Le agradecería que|teal]]…', 'Quedo a la espera de [[su|teal]] respuesta.'], hint: 'Saludo, motivo en la primera línea, una sola fórmula de cortesía y usted coherente.', example: 'Estimada señora Rojas: Le escribo para solicitar una copia de mi certificado de notas. Lo necesito para una beca cuyo plazo vence el día 30. Le agradecería que me indicara si puedo recogerlo en persona o si me lo pueden enviar por correo. Quedo a la espera de su respuesta. Cordialmente, Laura Pineda.' },
            { q: 'Presentas las conclusiones de un informe (sobre tu trabajo, tu barrio o tus estudios) y das tres recomendaciones sin decir «yo creo». · Present three recommendations without “I think”.', followUps: ['¿Qué recomendación es la más urgente? (The most urgent?)', '¿Qué dato subrayas con «cabe señalar»? (Which fact do you highlight?)', '¿Qué no procede hacer? (What is not appropriate?)'], phrases: ['[[Se recomienda que|blue]]…', '[[Es conveniente|blue]]…', '[[Cabe señalar que|blue]]…', 'No [[procede|blue]]…'], hint: 'Recomendación con sujeto → que + subjuntivo; hecho → cabe señalar que + indicativo.', example: 'Cabe señalar que el sesenta por ciento de los usuarios usa la biblioteca por la tarde. Por eso, se recomienda que el horario se amplíe hasta las ocho. Es conveniente, además, reforzar el personal los sábados. En cambio, no procede cerrar la sala infantil, que es la más utilizada.' },
            { q: 'Haz de editor o editora: mejora en voz alta este fragmento. «A nivel de redes hicimos varias cosas. El tema del presupuesto se puso difícil. En base a eso, se procedió a la reducción de los gastos». · Edit this paragraph aloud.', followUps: ['¿Qué palabras son comodín? (Catch-all words?)', '¿Qué dato exacto falta? (What data is missing?)', '¿Qué verbo vacío quitas? (Which empty verb goes?)'], phrases: ['En las [[redes sociales|orange]] se publicaron…', 'El presupuesto [[resultó insuficiente|orange]]…', '[[Con base en|orange]] / [[Sobre la base de|orange]]…', 'se redujeron los gastos'], hint: 'Cambia cada comodín por un dato o un verbo exacto; quita «a nivel de», «en base a» y «proceder a».', example: 'En las redes sociales se publicaron doce piezas sobre la feria. Sin embargo, el presupuesto resultó insuficiente para pagar la publicidad impresa. Sobre la base de esos datos, se redujeron los gastos de impresión en un treinta por ciento.' },
            { q: 'Eres Natalia. Felipe te pregunta por qué en el acta escribe «consideramos» si la escribe él solo, y por qué la directora le habla de usted. Explícaselo. · Explain the institutional we and usted to Felipe.', followUps: ['¿Cuándo usarías «considero»? (When would you use the singular?)', '¿En tu país, los jefes usan usted con los empleados? (In your country?)', '¿Qué pasaría si mezclara «creo» y «consideramos»? (Mixing them?)'], phrases: ['Porque hablas en nombre de…', 'Es el [[plural de modestia|teal]]…', 'En Colombia es frecuente que…', 'Lo importante es mantener…'], hint: 'Plural institucional = habla la institución; usted puede ser distancia o simple costumbre regional.', example: 'Porque en el acta no hablas tú: habla la Corporación, así que usamos el plural, «consideramos». Usarías «considero» en una carta personal o en un texto que firmas como experto. Lo que hace la directora es costumbre: en Colombia muchos jefes tratan de usted a todo el mundo, también a los jóvenes. Lo importante es no mezclar: si empiezas con «consideramos», no pases a «creo».' },
            { q: '¿Cómo es un correo formal en tu lengua o en tu país? Compáralo con el español: saludo, tratamiento, despedida, «nosotros» institucional. · Compare formal emails in your language with Spanish.', followUps: ['¿Existe una distinción como tú / usted? (Is there a tú / usted distinction?)', '¿Qué fórmula de tu lengua no se puede traducir literalmente? (Which formula can’t be translated literally?)', '¿Qué te resulta más difícil del registro formal en español? (What’s hardest?)'], phrases: ['En mi lengua se empieza con…', 'En español, en cambio, [[se suele|blue]]…', 'Una diferencia importante es…', 'Me cuesta no usar…'], hint: 'Compara con ejemplos concretos y usa al menos una expresión impersonal.', example: 'En inglés se empieza con «Dear» para casi todo, y no hay usted. En español, en cambio, se suele elegir entre «Estimado» y «Hola», y luego hay que mantener el usted. Una diferencia importante es «Looking forward to hearing from you»: en español es «Quedo a la espera de su respuesta». Me cuesta no usar «en base a», porque lo oigo mucho.', next: 'En la clase 199 verás el registro opuesto: las estructuras expresivas y las frases suspendidas de la conversación coloquial.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno es Natalia y tú eres Felipe. Tú dictas tres frases con un comodín, una mezcla de tú y usted y un «en base a»; tu alumno las corrige y explica cada cambio.', self: 'Ahora eres Natalia: escribe tres frases con un comodín, una mezcla de tú y usted y un «en base a», y corrígelas en voz alta explicando cada cambio.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Del chat al correo formal', coach: 'Usted, una fórmula, palabras exactas. Usted, one formula, exact words.',
      steps: [
        { title: 'Tu correo · Your email', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos: ¿se mantiene el usted? ¿Hay una sola fórmula de cortesía? ¿Queda alguna palabra comodín? Después tu alumno lee el correo en voz alta como si lo leyera la señora Mejía.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repásalo: ¿mantienes el usted? ¿Hay una sola fórmula de cortesía? ¿Queda alguna palabra comodín?' } },
          { kind: 'write', title: 'Correo a la administradora · Email to the manager', situation: 'Natalia te pasa el borrador de Felipe para que lo conviertas en un correo formal a Liliana Mejía, administradora del polideportivo, a quien nadie de la Corporación conoce: «Hola, Liliana, ¿qué tal? Te escribo por lo del polideportivo. La idea es hacer la feria ahí el sábado 14 de noviembre. Necesitamos poner como cuarenta mesas y lo del sonido. ¿Me confirmas? En base a eso hacemos el contrato. ¡Gracias!». (Turn Felipe’s chatty draft into a formal email to the sports hall manager, whom nobody at the association knows.)', task: [
            'Saluda con una fórmula formal y mantén el usted (le, su, se lo) hasta el final. (Formal greeting, usted throughout.)',
            'Explica el motivo y los datos exactos: fecha, horario, número de mesas, equipo necesario. (Exact details.)',
            'Usa una expresión impersonal: cabe señalar que, es conveniente que, se recomienda que… (One impersonal expression.)',
            'Haz la petición con una sola fórmula de cortesía (le agradeceríamos que, desearíamos, ¿podría…?). (One polite formula.)',
            'Sustituye «lo de», «poner», «hacer» y «en base a» por palabras exactas, y despídete formalmente. (No catch-all words.)',
          ], starters: ['Estimada señora Mejía:', 'Le escribo en nombre de…', 'Cabe señalar que…', 'Le agradeceríamos que…', 'Quedamos a la espera de su respuesta.'], words: ['solicitar la reserva', 'con motivo de', 'mesas plegables', 'equipo de sonido', 'micrófonos inalámbricos', 'con antelación', 'con base en', 'sobre la base de', 'confirmación', 'Cordialmente'],
            model: 'Estimada señora Mejía:\n\nLe escribo en nombre de la Corporación Cultural Altamira para solicitar la reserva del polideportivo del barrio el sábado 14 de noviembre, de siete de la mañana a seis de la tarde, con motivo de nuestra Feria del Libro de Barrio. Cabe señalar que esperamos unas cuatrocientas personas a lo largo del día.\n\nPara el montaje necesitaríamos cuarenta mesas plegables y un equipo de sonido con dos micrófonos inalámbricos. Si el polideportivo no dispone de alguno de estos elementos, le agradeceríamos que nos lo indicara, para alquilarlo con antelación. Asimismo, consideramos conveniente que una persona de su equipo esté presente durante el montaje.\n\nCon base en su confirmación, prepararemos el contrato y se lo enviaremos firmado por nuestra directora, la doctora Mercedes Ospina.\n\nQuedamos a la espera de su respuesta.\n\nCordialmente,\n\nFelipe Guzmán\nAsistente de comunicación\nCorporación Cultural Altamira',
            minWords: 110,
            checks: [
              { label: 'Un saludo formal (Estimada señora…, Estimado señor…)', pattern: '(?<!\\p{L})(?:estimad[oa]s?|distinguid[oa]s?|apreciad[oa]s?)(?!\\p{L})', tip: 'Empieza, por ejemplo, con «Estimada señora Mejía:».' },
              { label: 'Usted: le, su o usted', pattern: '(?<!\\p{L})(?:le|su|sus|usted)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Le escribo para solicitar…».' },
              { label: 'Una expresión impersonal (cabe señalar que, es conveniente que, se recomienda que…)', pattern: '(?<!\\p{L})(?:cabe\\s+(?:señalar|destacar|recordar|mencionar|añadir)|(?:es|resulta|consideramos)\\s+(?:conveniente|necesario|imprescindible|preferible)|se\\s+(?:recomienda|ruega|agradecerá)|conviene|procede)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Cabe señalar que esperamos unas cuatrocientas personas».' },
              { label: 'Una fórmula de cortesía (le agradeceríamos que, desearíamos, ¿podría…?)', pattern: '(?<!\\p{L})(?:agradecer[íi]a(?:mos)?|desear[íi]a(?:mos)?|quisiera(?:mos)?|quer[íi]a(?:mos)?|podr[íi]a|necesitar[íi]a(?:mos)?)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Le agradeceríamos que nos confirmara la reserva».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})en\\s+base\\s+a(?!\\p{L})', why: 'El DPD desaconseja «en base a»: usa «con base en», «sobre la base de» o «a partir de».' },
              { pattern: '(?<!\\p{L})a\\s+nivel\\s+de(?!\\p{L})', why: '¿Hay niveles reales? Si no, usa «en cuanto a» o reformula.' },
              { pattern: '(?<!\\p{L})(?:te|tu|tus|ti|contigo)(?!\\p{L})', why: 'Parece una forma de tú: en este correo, mantén el usted (le, su, se lo).' },
              { pattern: '(?<!\\p{L})(?:cosa|cosas|el\\s+tema\\s+de|lo\\s+de)(?!\\p{L})', why: 'Palabra comodín: nombra el asunto exacto (el equipo de sonido, la reserva, el contrato).' },
              { pattern: '(?<!\\p{L})proced(?:er|ió|e|a)\\s+a\\s+(?:la|el|los|las)(?!\\p{L})', why: '«Proceder a + sustantivo» suele ser un verbo vacío: usa el verbo simple (revisar, entregar, firmar).' },
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
            { tone: 'blue', label: 'IMPERSONALIDAD', formula: 'se recomienda / conviene / es conveniente que + subjuntivo · cabe señalar que + indicativo · procede + inf.', example: 'Se recomienda que la dirección revise el contrato. · Cabe señalar que el plazo vence el viernes.', caption: 'valorar ≠ afirmar', en: 'Recommending or evaluating takes the subjunctive (or an infinitive for anyone); stating or highlighting a fact takes the indicative.' },
            { tone: 'teal', label: 'CORTESÍA Y PERSONA', formula: 'usted / ustedes + su, le, se lo · consideramos · una fórmula: le agradeceríamos que…', example: 'Le agradeceríamos que nos confirmara la reserva; con base en su respuesta, se lo enviaremos.', caption: 'una persona, de principio a fin', en: 'Keep one person throughout, speak as “we” for an institution, and use one well-placed polite formula rather than a pile of softeners.' },
            { tone: 'orange', label: 'PRECISIÓN', formula: 'cosa, hacer, tema, poner, lo de → la palabra exacta', example: 'Se impartieron cuatro talleres. · La falta de sillas generó quejas.', caption: 'nombra el asunto', en: 'Replace catch-all words with the exact verb or noun, so the reader knows exactly what happened or what is being asked.' },
            { tone: 'violet', label: 'LO QUE SE EVITA', formula: 'proceder a + sust. · a nivel de (sin niveles) · en base a · gerundio posterior', example: 'Se revisó el contrato. · Con base en las encuestas… · Se inauguró en 2019 y recibió un premio en 2022.', caption: 'formal no es hinchado', en: 'Formal does not mean padded: drop empty verbs, “a nivel de” without real levels, “en base a” and gerunds for later events.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de enviar un texto formal, tres preguntas: **¿valoro o afirmo?** (subjuntivo o indicativo tras la expresión impersonal); **¿quién habla y a quién?** (nosotros institucional, usted coherente, una sola fórmula de cortesía); **¿cada palabra dice algo concreto?** (fuera comodines, verbos vacíos, «a nivel de» y «en base a»).', en: 'Three questions before sending: am I evaluating or stating (subjunctive or indicative)? Who is speaking to whom (institutional we, consistent usted, one polite formula)? Does every word say something concrete (no catch-all words, empty verbs or discouraged phrases)?' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '«___ que el informe se entregue antes del día 15».', options: ['Es conveniente', 'Es evidente', 'Cabe señalar'], answer: 0, why: 'El verbo en subjuntivo (entregue) pide una expresión de valoración: es conveniente que.', en: '“It would be advisable for the report to be handed in before the 15th.”' },
            { prompt: 'Correo a un proveedor que no conoces: «Le agradecería que me ___ la factura».', options: ['enviara', 'envías', 'enviaría'], answer: 0, why: 'Condicional de cortesía + imperfecto de subjuntivo, con usted.', en: '“I would be grateful if you could send me the invoice.”' },
            { prompt: '¿Qué versión es la más precisa?', options: ['Se procedió a realizar una encuesta.', 'Se encuestó a los visitantes.', 'Se hizo lo de la encuesta.'], answer: 1, why: 'Un verbo con significado y el dato exacto; sin verbos vacíos ni comodines.', en: '“The visitors were surveyed.”' },
            { prompt: '«La programación se diseñó ___ las propuestas de los vecinos».', options: ['con base en', 'en base a', 'a nivel de'], answer: 0, why: '«Con base en» (o «sobre la base de») es la forma recomendada.', en: '“The programme was designed on the basis of residents’ proposals.”' },
            { prompt: '«La biblioteca cerró en enero por obras ___ en junio».', options: ['reabierta', 'reabriendo', 'y reabrió'], answer: 2, why: 'La reapertura es cinco meses posterior: «y» + verbo conjugado, no gerundio.', en: '“The library closed in January for works and reopened in June.”' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Sevilla, España. **Rocío Vidal**, secretaria de un departamento universitario, revisa tres frases que un becario quiere enviar a los directores de otros departamentos, a quienes no conoce. En España, con desconocidos, el plural formal es **ustedes**.', en: 'Seville, Spain. A university department secretary checks three sentences an intern wants to send to heads of other departments he doesn’t know. In Spain, the formal plural for strangers is ustedes, not vosotros.' },
          { kind: 'rewrite', title: 'El correo del departamento · The department email', items: [
            { prompt: 'Os escribo para informaros de que la reunión será el jueves.', instruction: 'Pasa a ustedes. (Switch to formal ustedes.)', accept: ['Les escribo para informarles de que la reunión será el jueves.', 'Les escribo para informarles que la reunión será el jueves.'] },
            { prompt: 'Se procedió a la revisión de las actas.', instruction: 'Quita el verbo vacío. (Remove the empty verb.)', accept: ['Se revisaron las actas.', 'Las actas se revisaron.', 'Se revisaron las actas anteriores.'] },
            { prompt: 'En base a los resultados, se recomienda ampliar el plazo.', instruction: 'Sustituye la locución desaconsejada. (Replace the discouraged phrase.)', accept: ['Con base en los resultados, se recomienda ampliar el plazo.', 'Sobre la base de los resultados, se recomienda ampliar el plazo.', 'Basándose en los resultados, se recomienda ampliar el plazo.', 'A partir de los resultados, se recomienda ampliar el plazo.', 'Según los resultados, se recomienda ampliar el plazo.', 'De acuerdo con los resultados, se recomienda ampliar el plazo.'] },
          ] },
        ] },
        { title: 'Ampliación: actas y cartas de remisión · Extension: minutes and covering letters', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: fórmulas fijas. Optional: fixed formulas.', blocks: [
          { kind: 'lead', text: 'Las actas y los correos administrativos tienen fórmulas fijas. En el acta: «**Se acuerda** + infinitivo» («Se acuerda trasladar la feria»), «**Se procede a la votación**» (aquí sí, fórmula consagrada), «**Se levanta la sesión** a las 11:40». Al enviar documentos, **adjunto** es un adjetivo y concuerda: «Le envío **adjuntas** las facturas», «**Adjunto** le remito el informe». Y **se ruega** con infinitivo va siempre en singular: «Se ruega apagar los teléfonos».', en: 'Minutes and administrative emails have fixed formulas: se acuerda + infinitive for decisions, se procede a la votación as an established formula, se levanta la sesión to close. Adjunto is an adjective and agrees with what is attached; se ruega + infinitive is always singular.' },
          { kind: 'choice', title: 'Elige la forma · Choose the form', items: [
            { prompt: 'Correo: «Le envío ___ las dos facturas del alquiler».', options: ['adjuntas', 'en adjunto', 'adjunto'], answer: 0, why: '«Adjunto» es adjetivo: concuerda con «las facturas». «En adjunto» no es una locución recomendada.', en: 'Adjunto agrees with the noun: adjuntas las facturas.' },
            { prompt: 'Acta: ¿qué frase registra una decisión?', options: ['Se acuerda trasladar la feria al polideportivo.', 'Se habló de trasladar la feria al polideportivo.', 'Se procedió a hablar del traslado de la feria.'], answer: 0, why: '«Se acuerda + infinitivo» es la fórmula de las actas para dejar constancia de una decisión.', en: 'Se acuerda + infinitive records a decision.' },
            { prompt: 'Cartel en la sala: «___ apagar los teléfonos durante la sesión».', options: ['Se ruegan', 'Se le ruegan', 'Se ruega'], answer: 2, why: 'Con infinitivo, «se ruega» va en singular: el infinitivo no tiene plural.', en: 'With an infinitive, se ruega stays singular.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno redacta el acta de una reunión real (de trabajo, de vecinos, de clase) en cinco líneas, con «se acuerda», «cabe señalar que» y «se levanta la sesión».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 199 · Estilo coloquial: estructuras expresivas y suspensión', text: 'Hoy has escrito con la máxima distancia: impersonal, cortés y preciso. El paso natural es el **extremo opuesto**: cómo se intensifica, se deja una frase en suspenso o se cuenta algo con emoción en la conversación coloquial («Con lo tarde que era, va y se pone a llamar»). Conocer los dos polos te permite moverte con soltura entre ellos.', en: 'Today you wrote with maximum distance: impersonal, polite and precise. The natural next step is the opposite end: how colloquial conversation intensifies, leaves sentences hanging and tells stories with feeling. Knowing both ends lets you move freely between them.', href: '/gramatica/estilo-coloquial-estructuras-expresivas-y-suspension', label: 'Ir a la clase 199' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué la directora usó “procede buscar otro espacio” pero Natalia corrigió “se proceda a la revisión”?». Respuesta esperada: «procede + infinitivo» significa «corresponde» y aporta sentido; «proceder a la revisión» es un verbo vacío que equivale a «revisar».' },
        ] },
      ],
    },
  ],
};
