import type { LiveLesson } from '../types';

/**
 * Lesson 436 · B2 · Como si + imperfecto / pluscuamperfecto subjuntivo (course unit G136).
 * Builds on G128 (imperfecto de subjuntivo), G130 (correlación) and G133 (pluscuamperfecto
 * de subjuntivo). One scene runs through the class: Irene Salas directs a small theatre
 * company in Bogotá; in two weeks they open «Primer día», a comedy about Clara's first day
 * at an office. Marcos Rueda plays don Ernesto, the boss; Lucía Peña plays Clara; Daniel
 * Ortega and the stage manager Rosa Méndez complete the company.
 * Explorar: a rehearsal (Irene, Marcos, Lucía). Escuchar: Irene's voice note to the cast
 * (es-CO-SalomeNeural, ustedes). Escribir: Irene's notes after the dress rehearsal.
 * Content: como si + imperfecto de subjuntivo = imagined situation at the same time as the
 * main verb (Habla como si fuera el jefe); como si + pluscuamperfecto = imagined earlier
 * action (Me miró como si hubiera visto un fantasma); the main verb's tense does not change
 * this (habla / habló / hablará como si supiera); never present or perfect subjunctive,
 * indicative or conditional after «como si». ¡Ni que + imperfecto / pluscuamperfecto de
 * subjuntivo! as a colloquial exclamation. Recognition: igual que si, lo mismo que si,
 * como si nada, hacer como si. Contrast: como + indicativo for a real, known manner
 * (Hazlo como te dije). Ampliación: como si fuera a + infinitivo; independent ¡Como si…!
 * Comparative unreal clauses in general are left for G141.
 */
export const lesson: LiveLesson = {
  id: 436,
  level: 'B2',
  title: 'Como si + imperfecto / pluscuamperfecto subjuntivo',
  subtitle: 'Describir cómo actúa alguien comparándolo con algo imaginado: «como si fuera el jefe», «como si hubiera visto un fantasma».',
  legend: [
    { tone: 'blue', label: 'COMO SI + IMPERFECTO DE SUBJUNTIVO · imaginado, al mismo tiempo (fuera, tuviera)' },
    { tone: 'violet', label: 'COMO SI + PLUSCUAMPERFECTO · imaginado, anterior (hubiera visto)' },
    { tone: 'orange', label: '¡NI QUE…! · exclamación coloquial (¡Ni que fuera millonario!)' },
    { tone: 'teal', label: 'COMO + INDICATIVO · manera real y conocida (como te dije)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Comparar con algo imaginado', coach: 'No es real: es como si lo fuera. It isn’t real, it’s as if it were.',
      steps: [
        { title: 'Dos semanas antes del estreno · Two weeks before opening night', blocks: [
          { kind: 'lead', text: 'Irene Salas dirige una compañía de teatro pequeña en Bogotá. En dos semanas estrenan «Primer día», una comedia sobre el primer día de trabajo de Clara en una oficina. Marcos Rueda hace de don Ernesto, el jefe, y Lucía Peña hace de Clara. En los ensayos, Irene da indicaciones así: «Habla **como si fueras** el dueño de la empresa», «Entra **como si hubieras discutido** con alguien». Hoy aprendes a comparar una manera de actuar con algo imaginado: **como si** + imperfecto o pluscuamperfecto de subjuntivo.', en: 'Irene Salas runs a small theatre company in Bogotá. In two weeks they open “Primer día”, a comedy about Clara’s first day at an office. In rehearsals Irene gives directions like “Talk as if you owned the company” or “Come in as if you’d had an argument with someone”. Today you learn to compare the way someone behaves with an imagined situation: como si + imperfect or pluperfect subjunctive.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno dice qué es real y qué es imaginado en cada una.', self: 'Lee las dos frases en voz alta. ¿Qué es real y qué es imaginado? (What is real and what is imagined?)' } },
          { kind: 'compare', title: 'Dos comparaciones imaginadas · Two imagined comparisons', columns: [
            { tone: 'blue', label: 'AL MISMO TIEMPO · imperfecto', sentence: 'En el ensayo, Marcos habla [[como si fuera|blue]] el director de la compañía.', idea: 'Marcos no es el director. Lo imaginado (ser el director) ocurre al mismo tiempo que «habla».', en: 'Marcos isn’t the director: the comparison is imaginary and refers to the same moment as “habla”.' },
            { tone: 'violet', label: 'ANTES · pluscuamperfecto', sentence: 'Lucía entró en la sala [[como si hubiera visto|violet]] un fantasma.', idea: 'No vio ningún fantasma. Lo imaginado (ver el fantasma) es anterior a «entró».', en: 'Lucía saw no ghost: the imagined event would have happened before she came in.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Marcos todavía no sabe bien el texto, pero lo dice como si lo ___ de memoria.', options: ['sabe', 'sepa', 'supiera'], answer: 2, why: 'Comparación imaginada y simultánea a «dice»: como si + imperfecto de subjuntivo, supiera. Tras «como si» no van «sabe» ni «sepa».', en: 'Marcos doesn’t know his lines yet, but he says them as if he knew them by heart.' },
            { prompt: '«Lucía entró como si hubiera visto un fantasma». ¿Vio Lucía un fantasma?', options: ['Sí, lo vio justo antes de entrar.', 'Todavía no, lo verá después.', 'No: es una comparación imaginada.'], answer: 2, why: '«Como si» presenta algo irreal o no comprobado; solo describe cómo entró.', en: 'Did Lucía actually see a ghost?' },
          ] },
        ] },
        { title: 'Al mismo tiempo o antes · At the same time or before', mascot: '/brand/mascot/studying.webp', coach: '¿Simultáneo o anterior? Simultaneous or earlier?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'COMO SI + IMPERFECTO DE SUBJUNTIVO', question: '¿Lo imaginado ocurre al mismo tiempo que la acción principal?', en: 'Use the imperfect subjunctive when the imagined situation holds at the same time as the main action: it describes a state or a manner, not an earlier event.', formula: ['verbo principal + como si', '+ IMPERFECTO DE SUBJUNTIVO (fuera, tuviera, supiera)'],
            meaning: 'Comparas lo que ves con una situación **irreal o no comprobada** que imaginas **en ese mismo momento**.',
            examples: [
              { es: 'Don Ernesto firma papeles [[como si tuviera|blue]] mucha prisa.', en: 'Don Ernesto signs papers as if he were in a great hurry.' },
              { es: 'Clara mira la oficina [[como si fuera|blue]] un laberinto.', en: 'Clara looks at the office as if it were a maze.' },
              { es: 'Marcos se mueve por el escenario [[como si estuviera|blue]] en su casa.', en: 'Marcos moves around the stage as if he were at home.' },
              { es: 'Rosa nos cuida [[como si fuéramos|blue]] sus hijos.', en: 'Rosa looks after us as if we were her children.' },
            ],
            note: 'La forma en -se también es correcta: «como si **fuese**», «como si **tuviese**». En la lengua oral, sobre todo en América, domina la forma en -ra.' },
          { kind: 'concept', tone: 'violet', label: 'COMO SI + PLUSCUAMPERFECTO DE SUBJUNTIVO', question: '¿Lo imaginado habría ocurrido antes?', en: 'Use the pluperfect subjunctive when the imagined event would have happened before the main action: it explains a result you can see now or saw then.', formula: ['verbo principal + como si', '+ HUBIERA / HUBIESE + PARTICIPIO'],
            meaning: 'Imaginas una **causa anterior** que explicaría lo que ves: el cansancio, la cara, la reacción.',
            examples: [
              { es: 'Lucía llegó sin aire, [[como si hubiera corrido|violet]] desde su casa.', en: 'Lucía arrived out of breath, as if she had run all the way from home.' },
              { es: 'Daniel bosteza [[como si no hubiera dormido|violet]] en toda la noche.', en: 'Daniel keeps yawning as if he hadn’t slept all night.' },
              { es: 'Marcos habla de la obra [[como si la hubiera escrito|violet]] él.', en: 'Marcos talks about the play as if he had written it himself.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel tiene la ropa llena de polvo, como si ___ todo el decorado él solo.', options: ['hubiera montado', 'montara', 'haya montado'], answer: 0, why: 'El polvo es el resultado de algo imaginado anterior: como si + pluscuamperfecto, hubiera montado. «Haya montado» (perfecto) no va tras «como si».', en: 'Daniel’s clothes are covered in dust, as if he had built the whole set on his own.' },
            { prompt: 'Rosa organiza el camerino como si ___ un cuartel militar.', options: ['hubiera sido', 'sería', 'fuera'], answer: 2, why: 'La comparación describe cómo lo organiza ahora, al mismo tiempo: imperfecto de subjuntivo, fuera.', en: 'Rosa runs the dressing room as if it were an army barracks.' },
            { prompt: 'Irene sonríe como si ya ___ el éxito del estreno.', options: ['conocería', 'conociera', 'conoce'], answer: 1, why: 'Simultáneo a «sonríe»: como si + imperfecto, conociera. Ni indicativo ni condicional tras «como si».', en: 'Irene smiles as if she already knew the opening would be a success.' },
          ] },
        ] },
        { title: 'El verbo principal no decide · The main verb doesn’t decide', mascot: '/brand/mascot/standing.webp', coach: 'Solo dos tiempos. Only two tenses.', blocks: [
          { kind: 'table', title: 'Cualquier verbo principal, los mismos dos tiempos · Any main verb, the same two tenses', head: ['Verbo principal', 'Simultáneo · imperfecto', 'Anterior · pluscuamperfecto'], rows: [
            ['Presente · habla', 'Habla como si lo **supiera** todo.', 'Habla como si lo **hubiera leído** todo.'],
            ['Pasado · habló / hablaba', 'Habló como si lo **supiera** todo.', 'Habló como si lo **hubiera leído** todo.'],
            ['Futuro · hablará', 'Mañana hablará como si lo **supiera** todo.', 'Mañana hablará como si lo **hubiera leído** todo.'],
            ['Imperativo · habla (tú)', 'Habla como si lo **supieras** todo.', 'Habla como si lo **hubieras leído** todo.'],
          ], note: 'A diferencia de «quiero que venga / quería que viniera» (clase 130), aquí no hay correlación: tras «como si» solo van el **imperfecto** y el **pluscuamperfecto de subjuntivo**. Nunca presente ni perfecto de subjuntivo, ni indicativo, ni condicional.' },
          { kind: 'tip', icon: '💡', title: 'Lo que decide es el momento de lo imaginado · What decides is the timing', text: 'Pregúntate: lo imaginado, ¿ocurre **a la vez** que la acción principal (imperfecto) o habría ocurrido **antes** (pluscuamperfecto)? Por eso, con un verbo en presente también usas «hubiera»: «Me mira **como si le hubiera hecho** algo».', en: 'Ask yourself whether the imagined situation holds at the same time as the main action (imperfect) or would have happened before it (pluperfect). That is why even a present-tense main verb takes “hubiera”: “He looks at me as if I had done something to him”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El viernes saludaremos al público como si lo ___ de toda la vida.', options: ['conociéramos', 'conozcamos', 'conoceremos'], answer: 0, why: 'Aunque el verbo principal esté en futuro, tras «como si» va el imperfecto de subjuntivo: conociéramos.', en: 'On Friday we’ll greet the audience as if we had known them all our lives.' },
            { prompt: 'Marcos me mira como si yo le ___ algo antes del ensayo.', options: ['hubiera dicho', 'haya dicho', 'había dicho'], answer: 0, why: 'Verbo principal en presente, pero lo imaginado es anterior: pluscuamperfecto, hubiera dicho. «Haya dicho» (perfecto de subjuntivo) no va tras «como si».', en: 'Marcos looks at me as if I had said something to him before rehearsal.' },
          ] },
        ] },
        { title: 'Como, como si, ni que · Three neighbours', mascot: '/brand/mascot/speaking.webp', coach: '¿Real o imaginado? Real or imagined?', blocks: [
          { kind: 'compare', title: 'Real, imaginado, protesta · Real, imagined, protest', columns: [
            { tone: 'teal', label: 'MANERA REAL · como + indicativo', sentence: 'Marcos, entra [[como te dije|teal]] ayer.', idea: 'La manera existe y se conoce: Irene ya se la explicó.', en: 'A real, known manner: Irene already told him how to do it. Como + indicative.' },
            { tone: 'blue', label: 'MANERA IMAGINADA · como si + subjuntivo', sentence: 'Marcos, entra [[como si fuera|blue]] un lunes cualquiera.', idea: 'No es un lunes cualquiera: es una comparación imaginada.', en: 'An imagined manner: it’s not an ordinary Monday in the play, but he should act as if it were.' },
            { tone: 'orange', label: 'PROTESTA · ¡ni que…!', sentence: '¡[[Ni que fuera|orange]] tan difícil!', idea: 'Exclamación coloquial: rechazas una reacción exagerada.', en: 'A colloquial exclamation rejecting a reaction as over the top: “It’s not as if it were that hard!”' },
          ] },
          { kind: 'concept', tone: 'orange', label: '¡NI QUE + SUBJUNTIVO!', question: '¿Quieres protestar porque alguien exagera?', en: 'A colloquial exclamation, used on its own, that rejects someone’s behaviour: “You act as if…, but that’s not the case”. Same tenses as como si.', formula: ['¡Ni que + imperfecto de subjuntivo!', '¡Ni que + pluscuamperfecto de subjuntivo!'],
            meaning: 'Va sola, como reacción, sin verbo principal. Significa «te comportas como si…, pero no es así». Es **coloquial** y muy frecuente en España y en muchos países de América; no la uses en un texto formal.',
            examples: [
              { es: '¡[[Ni que fuera|orange]] millonario!', en: 'Anyone would think he was a millionaire!' },
              { es: '—No me grites. ¡[[Ni que fueras|orange]] mi jefe!', en: 'Don’t shout at me. You’re not my boss!' },
              { es: '¿Por qué esa cara? ¡[[Ni que hubieras visto|orange]] un fantasma!', en: 'Why that face? Anyone would think you’d seen a ghost!' },
            ] },
          { kind: 'tip', icon: '🔎', title: 'Para reconocer · To recognise', text: '**Igual que si** y **lo mismo que si** funcionan como «como si»: «Nos trató **igual que si** fuéramos desconocidos». **Como si nada** es una expresión fija: «Llegó tarde y se sentó **como si nada**». **Hacer como si** significa fingir: «Hice **como si** no lo hubiera visto».', en: '“Igual que si” and “lo mismo que si” work like “como si” (just as if). “Como si nada” is a set phrase: as if nothing had happened. “Hacer como si” means to pretend: “I pretended I hadn’t seen him”.' },
          { kind: 'decide', title: '¿Como, como si o ni que?', steps: [
            { q: '¿Hablas de una manera real y conocida (como lo ensayamos, como te dije)?', yes: '**Como + indicativo**: «Hazlo como te dije».', no: 'next' },
            { q: '¿Es una exclamación suelta para protestar por una exageración?', yes: '**¡Ni que + subjuntivo!** (coloquial): «¡Ni que fueras mi jefe!».', no: 'next' },
            { q: '¿Lo imaginado habría ocurrido antes que la acción principal?', yes: '**Como si + pluscuamperfecto**: «como si hubiera visto un fantasma».', no: '**Como si + imperfecto**: «como si fuera el jefe».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía, coloca las sillas ___ las colocó Rosa en el último ensayo.', options: ['como si', 'ni que', 'como'], answer: 2, why: 'Rosa ya las colocó: es una manera real y conocida → como + indicativo.', en: 'Lucía, set the chairs the way Rosa set them at the last rehearsal.' },
            { prompt: 'Marcos se queja porque su camerino es pequeño. Lucía: «¡Ni que ___ una estrella de cine!».', options: ['fueras', 'eres', 'seas'], answer: 0, why: '«¡Ni que…!» pide imperfecto (o pluscuamperfecto) de subjuntivo: fueras.', en: 'It’s not as if you were a film star!' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Solo dos tiempos tras «como si». Only two tenses.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla antes de ver la corrección.', self: 'Lee cada frase, piensa qué falla y toca para ver la corrección. (Spot the mistake before you look.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Marcos habla como si es el jefe.', right: 'Marcos habla como si fuera el jefe.', why: 'Tras «como si» nunca va el indicativo: imperfecto de subjuntivo. (Never the indicative after como si.)' },
            { wrong: 'Habla como si sea el jefe.', right: 'Habla como si fuera el jefe.', why: 'Aunque «habla» esté en presente, «como si» no admite el presente de subjuntivo.' },
            { wrong: 'Me mira como si le haya hecho algo.', right: 'Me mira como si le hubiera hecho algo.', why: 'Para lo imaginado anterior, pluscuamperfecto, también con un verbo principal en presente. El perfecto de subjuntivo no va tras «como si».' },
            { wrong: 'Actúa como si sería el protagonista.', right: 'Actúa como si fuera el protagonista.', why: 'Igual que tras «si» condicional, tras «como si» no va el condicional.' },
            { wrong: 'Entró como si vio un fantasma.', right: 'Entró como si hubiera visto un fantasma.', why: 'Lo imaginado es anterior a «entró» y no es real: pluscuamperfecto de subjuntivo, no indefinido.' },
            { wrong: 'Hazlo como si te dije ayer.', right: 'Hazlo como te dije ayer.', why: 'Es una manera real y conocida: «como» + indicativo, sin «si».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El técnico de luces llegó una hora tarde y saludó como si no ___ nada.', options: ['habría pasado', 'hubiera pasado', 'haya pasado'], answer: 1, why: 'Lo imaginado (no ha pasado nada) es anterior al saludo: pluscuamperfecto. Ni perfecto de subjuntivo ni condicional compuesto.', en: 'The lighting technician turned up an hour late and said hello as if nothing had happened.' },
            { prompt: '¿Qué frase es correcta?', options: ['Daniel baila como si tiene veinte años.', 'Daniel baila como si tendría veinte años.', 'Daniel baila como si tuviera veinte años.'], answer: 2, why: 'Comparación imaginada y simultánea: como si + imperfecto de subjuntivo, tuviera.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno describe a alguien famoso de su familia o de su trabajo con «Habla como si…» y explica qué hay de real y de imaginado en la comparación.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El ensayo del martes', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'En la sala de ensayo · In the rehearsal room', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno hace de Marcos y de Lucía. Después tu alumno toca cada expresión marcada y dice si lo imaginado es simultáneo o anterior.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿lo imaginado es simultáneo o anterior? (Is the imagined situation simultaneous or earlier?)' } },
          { kind: 'explore', title: 'Otra vez desde la entrada', setting: 'Martes por la tarde, en una sala pequeña de Bogotá. Irene detiene el ensayo de la escena en la que Clara conoce a don Ernesto. Se tratan de tú. (Tuesday afternoon: Irene stops the rehearsal of the scene where Clara meets her boss.)', lines: [
            { who: 'Irene', text: 'Paremos un momento. Marcos, don Ernesto es el jefe, pero lo estás haciendo [[como si fuera|blue]] el villano de una telenovela.', en: 'Let’s stop for a moment. Marcos, don Ernesto is the boss, but you’re playing him as if he were a soap-opera villain.' },
            { who: 'Marcos', text: '¿Exagero? Yo quería que pareciera duro.', en: 'Am I overdoing it? I wanted him to come across as tough.' },
            { who: 'Irene', text: 'Duro sí, ridículo no. Háblale a Clara [[como si no tuvieras|blue]] tiempo para ella: miras el reloj, firmas papeles…', en: 'Tough, yes; ridiculous, no. Talk to Clara as if you had no time for her: you check your watch, you sign papers…' },
            { who: 'Lucía', text: '¿Y yo? Hace un rato me dijiste que entraba [[como si hubiera corrido|violet]] una maratón.', en: 'And me? A while ago you said I came in as if I’d run a marathon.' },
            { who: 'Irene', text: 'Exacto. Clara está nerviosa, pero no viene corriendo. Entra [[como entraste|teal]] en el primer ensayo: despacio, mirando a todos lados.', en: 'Exactly. Clara is nervous, but she isn’t rushing in. Come in the way you did at the first rehearsal: slowly, looking all around.' },
            { who: 'Lucía', text: 'Ah, sí, [[como si buscara|blue]] a alguien conocido.', en: 'Oh, right, as if she were looking for someone she knew.' },
            { who: 'Marcos', text: 'Oye, Irene, ¿y por qué Clara me mira [[como si le hubiera hecho|violet]] algo? Si es su primer día.', en: 'Hey, Irene, and why does Clara look at me as if I’d done something to her? It’s her first day.' },
            { who: 'Irene', text: 'Porque en la escena anterior don Ernesto le cambia el escritorio sin avisar. Ella lo mira [[igual que si la hubiera insultado|violet]].', en: 'Because in the previous scene don Ernesto moves her desk without warning. She looks at him just as if he had insulted her.' },
            { who: 'Marcos', text: 'Bueno, tampoco es para tanto. [[¡Ni que la hubiera despedido!|orange]]', en: 'Well, it’s no big deal. It’s not as if I’d fired her!' },
            { who: 'Irene', text: 'Ja, ja, guárdate esa frase para la función. Otra vez desde la entrada. Marcos, tú sigue firmando papeles [[como si nada|blue]] cuando ella salude.', en: 'Ha ha, save that line for the show. Again from the entrance. Marcos, you keep signing papers as if nothing were going on when she says hello.' },
            { who: 'Lucía', text: 'Listo. Y si me equivoco con el texto, sigo [[como si no hubiera pasado|violet]] nada, ¿no?', en: 'OK. And if I get a line wrong, I carry on as if nothing had happened, right?' },
            { who: 'Irene', text: 'Eso es. En el estreno nadie va a notar nada. ¡Desde el principio!', en: 'That’s it. On opening night nobody will notice a thing. From the beginning!' },
          ], notes: {
            'como si fuera': 'Comparación imaginada y simultánea: don Ernesto no es un villano. Imperfecto de subjuntivo.',
            'como si no tuvieras': 'Imperativo («háblale») + como si + imperfecto: el verbo principal no cambia el tiempo tras «como si».',
            'como si hubiera corrido': 'Lo imaginado (correr una maratón) sería anterior a «entraba»: pluscuamperfecto de subjuntivo.',
            'como entraste': 'Manera real y conocida (así entró en el primer ensayo): «como» + indicativo, sin «si».',
            'como si buscara': 'Frase elíptica: «(Entra) como si buscara…». Simultáneo: imperfecto de subjuntivo.',
            'como si le hubiera hecho': 'Verbo principal en presente («me mira»), pero lo imaginado es anterior: pluscuamperfecto, nunca «haya hecho».',
            'igual que si la hubiera insultado': '«Igual que si» funciona como «como si»: mismo modo, mismos tiempos. Aquí, algo imaginado anterior.',
            '¡Ni que la hubiera despedido!': 'Exclamación coloquial: protesta porque la reacción le parece exagerada. Con «ni que» también va el pluscuamperfecto para algo anterior.',
            'como si nada': 'Expresión fija: con total normalidad, sin reaccionar.',
            'como si no hubiera pasado': '«Como si no hubiera pasado nada»: lo imaginado (no ha habido ningún error) es anterior a «sigo».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué problema ve Irene en el trabajo de Marcos?', options: ['Exagera: hace de don Ernesto como si fuera un villano.', 'No sabe el texto de memoria.', 'Habla demasiado bajo.'], answer: 0, why: '«Lo estás haciendo como si fuera el villano de una telenovela».', en: 'What problem does Irene see in Marcos’s acting?' },
            { prompt: '¿Cómo tiene que entrar Lucía?', options: ['Corriendo, muy nerviosa.', 'Despacio, como en el primer ensayo, mirando a todos lados.', 'Sin mirar a nadie.'], answer: 1, why: '«Entra como entraste en el primer ensayo: despacio, mirando a todos lados».', en: 'How should Lucía come in?' },
            { prompt: '¿Por qué Clara mira mal a don Ernesto?', options: ['Porque le cambió el escritorio sin avisar.', 'Porque llega tarde.', 'Porque la ha despedido.'], answer: 0, why: '«En la escena anterior don Ernesto le cambia el escritorio sin avisar».', en: 'Why does Clara give don Ernesto a dirty look?' },
          ] },
        ] },
        { title: 'Rosa y la escenografía · Rosa and the set', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Después del ensayo · After rehearsal', lines: [
            { who: 'Rosa', text: 'Irene, Marcos movió el escritorio como si ___ suyo. Ahora no cabe la puerta.', options: ['fuera', 'es', 'sea'], answer: 0, why: 'Comparación imaginada y simultánea: como si + imperfecto de subjuntivo, fuera.' },
            { who: 'Irene', text: 'Déjalo ___ estaba el lunes, con la puerta libre.', options: ['como si', 'ni que', 'como'], answer: 2, why: 'Una posición real y conocida: «como» + indicativo.' },
            { who: 'Rosa', text: 'Bueno. ¿Y viste a Daniel? Tenía la cara roja, como si ___ todo el día al sol.', options: ['estaría', 'hubiera estado', 'haya estado'], answer: 1, why: 'La cara roja sería el resultado de algo anterior: pluscuamperfecto, hubiera estado.' },
            { who: 'Irene', text: 'Es que ayer fue a la piscina. ¡Ni que ___ de vacaciones!', options: ['está', 'esté', 'estuviera'], answer: 2, why: '«¡Ni que…!» + imperfecto de subjuntivo: estuviera. Protesta coloquial.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Conoces a alguien que hable como si lo supiera todo? ¿Cómo reaccionas?». Tu alumno responde con «como si» y, si quiere, con un «¡Ni que…!».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Simultáneo, anterior o real? Simultaneous, earlier or real?',
      steps: [
        { title: 'Indicaciones de la directora · The director’s notes', blocks: [
          { kind: 'choice', items: [
            { context: 'Irene a Daniel, en la escena del teléfono. (Irene to Daniel.)', prompt: 'Cuando suene el teléfono, contesta como si ___ una mala noticia.', options: ['esperaras', 'esperas', 'esperarías'], answer: 0, why: 'Imperativo + como si + imperfecto de subjuntivo: esperaras. Ni indicativo ni condicional.', en: 'When the phone rings, answer as if you were expecting bad news.' },
            { context: 'Rosa habla de Lucía. (Rosa about Lucía.)', prompt: 'Lucía conoce el texto tan bien que lo recita como si lo ___ ella.', options: ['habría escrito', 'hubiera escrito', 'haya escrito'], answer: 1, why: 'Lo imaginado (escribirlo) sería anterior a «recita»: pluscuamperfecto de subjuntivo.', en: 'Lucía knows the script so well she recites it as if she had written it herself.' },
            { context: 'Irene a Marcos. (Irene to Marcos.)', prompt: 'Sirve el café ___ te enseñó Rosa: despacio y sin ruido.', options: ['ni que', 'como si', 'como'], answer: 2, why: 'Rosa ya se lo enseñó: manera real y conocida → como + indicativo.', en: 'Pour the coffee the way Rosa showed you: slowly and quietly.' },
            { context: 'Lucía, en el chat del elenco. (Lucía in the cast chat.)', prompt: 'Daniel se queja de que su escena es corta. ¡Ni que ___ el protagonista!', options: ['fuera', 'sea', 'es'], answer: 0, why: '«¡Ni que…!» exige imperfecto de subjuntivo: fuera. Es una protesta coloquial.', en: 'Daniel complains his scene is short. It’s not as if he were the lead!' },
            { context: 'Irene recuerda su primera obra. (Irene remembers her first play.)', prompt: 'Aquel día, el público aplaudió como si ___ la mejor obra del año.', options: ['hubiera visto', 'ha visto', 'viera'], answer: 0, why: 'El aplauso llega al final: lo imaginado (ver la mejor obra del año) sería anterior a «aplaudió». Pluscuamperfecto.', en: 'That day the audience clapped as if they had just seen the best play of the year.' },
          ] },
        ] },
        { title: '¿Qué pide cada frase? · What does each sentence need?', blocks: [
          { kind: 'classify', title: 'Simultáneo, anterior o real · Simultaneous, earlier or real', categories: [
            { id: 'simultaneo', label: 'COMO SI + IMPERFECTO (fuera)', tone: 'blue' },
            { id: 'anterior', label: 'COMO SI + PLUSCUAMPERFECTO (hubiera sido)', tone: 'violet' },
            { id: 'real', label: 'COMO + INDICATIVO (como dije)', tone: 'teal' },
          ], items: [
            { text: 'Clara mira la oficina como si… (ser un museo)', answer: 'simultaneo', why: 'Una comparación al mismo tiempo que «mira»: como si fuera.' },
            { text: 'Don Ernesto está agotado, como si… (no dormir en toda la noche)', answer: 'anterior', why: 'El cansancio vendría de algo anterior: como si no hubiera dormido.' },
            { text: 'Coloca las tazas… (las colocó Rosa ayer)', answer: 'real', why: 'Una manera real y conocida: como las colocó Rosa.' },
            { text: 'Clara sale de la oficina llorando, como si… (recibir una mala noticia)', answer: 'anterior', why: 'La noticia sería anterior al llanto: como si hubiera recibido.' },
            { text: 'Marcos firma los papeles como si… (tener mucha prisa)', answer: 'simultaneo', why: 'La prisa imaginada es simultánea: como si tuviera.' },
            { text: 'Repite el saludo… (lo hiciste en el ensayo del lunes)', answer: 'real', why: 'Ya lo hizo así: como lo hiciste el lunes.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Marcos da órdenes como si es el dueño del teatro.', ok: false, options: ['Marcos da órdenes como si fuera el dueño del teatro.', 'Marcos da órdenes como si sería el dueño del teatro.', 'Marcos da órdenes como si sea el dueño del teatro.'], answer: 0, why: 'Tras «como si» solo imperfecto o pluscuamperfecto de subjuntivo: fuera.' },
            { sentence: 'Lucía salió del camerino como si hubiera visto un fantasma.', ok: true, why: 'Correcta: lo imaginado es anterior a «salió» → pluscuamperfecto de subjuntivo.' },
            { sentence: 'Me miras como si te haya dicho algo terrible.', ok: false, options: ['Me miras como si te habría dicho algo terrible.', 'Me miras como si te hubiera dicho algo terrible.', 'Me miras como si te he dicho algo terrible.'], answer: 1, why: 'Algo imaginado anterior: pluscuamperfecto, también con «miras» en presente. El perfecto de subjuntivo no va tras «como si».' },
            { sentence: 'Haz la escena como si te expliqué ayer.', ok: false, options: ['Haz la escena como si te explicara ayer.', 'Haz la escena como si te explicaría ayer.', 'Haz la escena como te expliqué ayer.'], answer: 2, why: 'La explicación existió: manera real → «como» + indicativo, sin «si».' },
            { sentence: 'Mañana ensayaremos como si el teatro estuviera lleno.', ok: true, why: 'Correcta: con un verbo principal en futuro, «como si» sigue pidiendo imperfecto de subjuntivo.' },
            { sentence: '¡Ni que seas el director!', ok: false, options: ['¡Ni que eres el director!', '¡Ni que fueras el director!', '¡Ni que serías el director!'], answer: 1, why: '«¡Ni que…!» va con imperfecto (o pluscuamperfecto) de subjuntivo: fueras.' },
          ] },
        ] },
        { title: 'El chat del elenco · The cast chat', blocks: [
          { kind: 'chat-fill', title: 'Martes, 22:15', lines: [
            { who: 'Daniel', text: '¿Vieron a Irene hoy? Nos miraba como si ___ algo grave.', options: ['hubiéramos hecho', 'habíamos hecho', 'hayamos hecho'], answer: 0, why: 'Lo imaginado (hacer algo grave) sería anterior a «miraba»: pluscuamperfecto de subjuntivo.' },
            { who: 'Lucía', text: 'Es que Marcos llegó media hora tarde y se sentó como si ___ el primero.', options: ['haya llegado', 'habría llegado', 'hubiera llegado'], answer: 2, why: 'Llegar es anterior a sentarse: como si + pluscuamperfecto, hubiera llegado.' },
            { who: 'Marcos', text: 'Perdón, el tráfico estaba imposible. ¡Ni que ___ un crimen!', options: ['fuera', 'es', 'será'], answer: 0, why: 'Protesta coloquial: ¡Ni que + imperfecto de subjuntivo!, fuera.' },
            { who: 'Lucía', text: 'Tampoco exageres. Irene solo quiere que lo hagamos ___ lo planeamos.', options: ['como si', 'ni que', 'como'], answer: 2, why: 'El plan existe y se conoce: «como» + indicativo.' },
            { who: 'Daniel', text: 'Mañana llegamos a las seis y ensayamos como si ___ el día del estreno.', options: ['sea', 'fuera', 'es'], answer: 1, why: 'Comparación imaginada y simultánea: como si + imperfecto, fuera.' },
            { who: 'Marcos', text: 'Trato hecho. Y tú, Lucía, no me mires como si ___ un monstruo.', options: ['fuera', 'soy', 'sea'], answer: 0, why: 'Simultáneo a «mires»: como si + imperfecto de subjuntivo, fuera (yo).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Habla', 'como', 'si', 'lo', 'supiera', 'todo'], accept: ['Habla como si lo supiera todo', 'Habla como si todo lo supiera'], en: 'He talks as if he knew everything.' },
            { tiles: ['Me', 'miró', 'como', 'si', 'hubiera', 'visto', 'un', 'fantasma'], accept: ['Me miró como si hubiera visto un fantasma'], en: 'She looked at me as if she had seen a ghost.' },
            { tiles: ['¡Ni', 'que', 'fuera', 'millonario!'], accept: ['¡Ni que fuera millonario!'], en: 'Anyone would think he was a millionaire!' },
          ] },
        ] },
        { title: 'Une las ideas · Join the ideas', blocks: [
          { kind: 'rewrite', title: 'Realidad → comparación imaginada · Fact → imagined comparison', items: [
            { prompt: 'Marcos no es el director, pero da órdenes a todos.', instruction: 'Une las ideas con «como si». Empieza: «Marcos da órdenes a todos…».', accept: ['Marcos da órdenes a todos como si fuera el director', 'Marcos da órdenes a todos como si fuese el director'] },
            { prompt: 'Lucía no ha visto un fantasma, pero tiene la cara blanca.', instruction: 'Empieza: «Lucía tiene la cara blanca…».', accept: ['Lucía tiene la cara blanca como si hubiera visto un fantasma', 'Lucía tiene la cara blanca como si hubiese visto un fantasma'] },
            { prompt: 'Daniel tiene cincuenta años (no tiene veinte), pero salta por el escenario.', instruction: 'Empieza: «Daniel salta por el escenario…».', accept: ['Daniel salta por el escenario como si tuviera veinte años', 'Daniel salta por el escenario como si tuviese veinte años'] },
            { prompt: 'El técnico le habla a Rosa con malos modos, pero no es el jefe.', instruction: 'Eres Rosa. Reacciona con una exclamación coloquial. Empieza: «¡Ni que…».', accept: ['¡Ni que fueras el jefe!', '¡Ni que fueses el jefe!'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno describe a un compañero de trabajo o de clase con dos frases: una con «como si» + imperfecto y otra con «como si» + pluscuamperfecto.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Las notas de Irene', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Un audio para el elenco · A voice note for the cast', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada «como si» y dice si lo imaginado es simultáneo o anterior. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada «como si» y piensa: ¿simultáneo o anterior? Irene habla a todo el grupo con «ustedes», como en toda América. (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Las notas de Irene', channel: 'AUDIO DE WHATSAPP · DE IRENE PARA EL ELENCO', src: '/audio/grammar-live/436.mp3',
            before: 'Es miércoles por la noche. Irene manda un audio al grupo del elenco después del ensayo. ¿Qué crees que dice: qué salió bien, qué tienen que cambiar, a qué hora empiezan mañana…? (Irene sends the cast a voice note after rehearsal. What do you think she says?)',
            gist: { prompt: '¿Para qué manda Irene el audio? · Why does Irene send the voice note?', options: ['Para cancelar el estreno.', 'Para dar sus notas sobre el ensayo y recordar el horario de mañana.', 'Para presentar a una actriz nueva.'], answer: 1, why: '«Les mando las notas del ensayo de hoy» y «Mañana empezamos a las seis en punto».', en: 'She gives her notes on the rehearsal and reminds them of tomorrow’s schedule.' },
            details: [
              { prompt: '¿Qué dice Irene del trabajo de Lucía?', options: ['Que respondía como si de verdad necesitara el trabajo.', 'Que entraba como si llegara a una fiesta.', 'Que no sabía el texto.'], answer: 0, why: '«Respondías como si de verdad necesitaras ese trabajo».', en: 'What does Irene say about Lucía’s acting?' },
              { prompt: '¿Qué tiene que cambiar Marcos?', options: ['Tiene que entrar como si hubiera discutido con alguien, no como si llegara a una fiesta.', 'Tiene que cambiar el escritorio de sitio.', 'Tiene que hablar más alto.'], answer: 0, why: '«Todavía entras como si llegaras a una fiesta… tienes que entrar como si hubieras discutido con alguien en el pasillo».', en: 'What does Marcos need to change?' },
              { prompt: '¿Qué tienen que hacer todos cuando se apaga la luz?', options: ['Seguir hablando.', 'Quedarse quietos hasta la señal de Rosa.', 'Salir del escenario.'], answer: 1, why: '«Sigan quietos, como si no pasara nada, hasta que Rosa dé la señal».', en: 'What must everyone do when the lights go out?' },
              { prompt: '¿Qué le dice Irene a Daniel sobre la escena del ascensor?', options: ['Que la ensaye el lunes.', 'Que no la cambie: funciona como la ensayaron.', 'Que la haga más rápida.'], answer: 1, why: '«La hiciste como la ensayamos el lunes, y funciona. No la cambies».', en: 'What does Irene tell Daniel about the lift scene?' },
            ],
            transcript: 'Hola a todos, soy Irene. Les mando las notas del ensayo de hoy, porque salieron corriendo [[como si se hubiera incendiado|violet]] el teatro. Primero, lo bueno: Lucía, en la escena de la entrevista estuviste perfecta. Respondías [[como si de verdad necesitaras|blue]] ese trabajo, y eso el público lo nota. Marcos, tú todavía entras [[como si llegaras|blue]] a una fiesta. Recuerda que tu personaje acaba de recibir una mala noticia: tienes que entrar [[como si hubieras discutido|violet]] con alguien en el pasillo. Y, por favor, no le grites tanto a Lucía. ¡[[Ni que fueras|orange]] su papá! Daniel, la escena del ascensor la hiciste [[como la ensayamos|teal]] el lunes, y funciona. No la cambies. Una cosa para todos: cuando se apaga la luz, sigan quietos, [[como si no pasara|blue]] nada, hasta que Rosa dé la señal. Mañana empezamos a las seis en punto. Y no lleguen [[como si no hubieran dormido|violet]] en una semana, que el estreno es el viernes. Un abrazo y gracias por el trabajo de hoy.',
            reply: { teacher: 'Tú eres Irene. Tu alumno es Marcos y le contesta con otro audio: acepta la nota, explica cómo va a entrar mañana («Voy a entrar como si…») y protesta un poco con un «¡Ni que…!».', self: 'Contesta como Marcos, en voz alta: acepta la nota de Irene, explica cómo vas a entrar mañana («Voy a entrar como si…») y protesta un poco con un «¡Ni que…!». (Reply to Irene as Marcos.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Como si…', coach: 'Describe, imagina, protesta. Describe, imagine, protest.',
      steps: [
        { title: 'Personas, escenas y reacciones · People, scenes and reactions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con ejemplos reales o inventados. Si aparece «como si es» o «como si haya», tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta. Antes de cada «como si», decide: ¿simultáneo o anterior? (Before each como si, decide: simultaneous or earlier?)' } },
          { kind: 'talk', cards: [
            { q: '¿Conoces a alguien que hable o actúe como si lo supiera todo, o como si fuera el jefe? Descríbelo. · Do you know someone who acts as if they knew everything?', followUps: ['¿Cómo reacciona la gente?', '¿Y tú, alguna vez actúas así? (Do you ever act like that?)'], phrases: ['Habla [[como si fuera|blue]]…', 'Opina de todo [[como si supiera|blue]]…', 'Nos trata [[como si fuéramos|blue]]…'], hint: 'Lo que hace ahora, normalmente: como si + imperfecto de subjuntivo.', example: 'Un compañero de mi oficina habla de economía como si fuera ministro. Opina de todo como si supiera más que nadie, y nos trata como si fuéramos sus alumnos.', next: 'Ahora, eres director o directora.' },
            { q: 'Eres Irene. Da tres indicaciones a un actor para una escena: alguien recibe una carta. · You are Irene: give an actor three directions.', followUps: ['¿Y cómo tiene que salir de escena?', '¿Qué no quieres que haga?'], phrases: ['Ábrela [[como si tuvieras|blue]] miedo…', 'Léela [[como si fuera|blue]]…', 'Sal [[como si hubieras recibido|violet]]…', 'Hazlo [[como lo ensayamos|teal]]…'], hint: 'Imperativo + como si: el tiempo sigue siendo imperfecto o pluscuamperfecto.', example: 'Abre la carta como si tuvieras miedo de lo que dice. Léela en voz baja, como si fuera un secreto. Y al final sal de escena como si hubieras recibido la mejor noticia de tu vida.', teacher: 'Tú haces de actor y lo interpretas exagerando. Tu alumno corrige: «No, no, como si…».' },
            { q: 'Recuerda una vez que alguien te miró o te habló como si hubieras hecho algo malo. ¿Qué pasó? · Someone looked at you as if you had done something wrong.', followUps: ['¿Lo habías hecho de verdad?', '¿Cómo reaccionaste?'], phrases: ['Me miró [[como si hubiera roto|violet]]…', 'Me habló [[como si yo tuviera|blue]] la culpa…', 'Hice [[como si nada|blue]]…'], hint: 'Algo imaginado anterior: como si + pluscuamperfecto.', example: 'En un supermercado, el guardia me miró como si hubiera robado algo, porque la alarma sonó al salir. Yo no había hecho nada, así que le enseñé el ticket e hice como si nada.' },
            { q: 'Un amigo exagera: se queja de todo. Reacciona con «¡Ni que…!» a tres quejas. · React to a friend’s exaggerated complaints.', followUps: ['¿En qué situaciones no usarías «ni que»?', '¿Cómo lo dirías con más cortesía?'], phrases: ['¡[[Ni que fuera|orange]]…!', '¡[[Ni que fueras|orange]]…!', '¡[[Ni que hubieras|orange]]…!'], hint: 'Es coloquial: con amigos y familia, no en un correo formal.', example: '—Tengo que caminar diez minutos hasta el metro. —¡Ni que fuera una maratón! —Hoy he trabajado ocho horas. —¡Ni que hubieras cargado ladrillos!', teacher: 'Tú haces de amigo quejica con quejas cada vez más pequeñas. Tu alumno responde rápido con «¡Ni que…!».' },
            { q: '¿Haces algo exactamente como te lo enseñaron (una receta, un deporte)? ¿Y alguna vez haces como si supieras algo que no sabes? · Real manner vs pretending.', followUps: ['¿Quién te lo enseñó?', '¿Te descubrieron alguna vez?'], phrases: ['Lo preparo [[como me enseñó|teal]]…', 'Hago [[como si entendiera|blue]]…', 'Asiento [[como si lo hubiera leído|violet]]…'], hint: 'Manera real → como + indicativo; fingir → hacer como si + subjuntivo.', example: 'Hago las arepas como me enseñó mi abuela, sin cambiar nada. Pero en las reuniones de trabajo a veces hago como si entendiera todo y asiento como si hubiera leído el informe.' },
            { q: 'Describe una foto o una escena de película: ¿cómo están las personas? Imagina por qué. · Describe a photo or film scene.', followUps: ['¿Qué crees que pasó antes?', '¿Qué va a pasar después?'], phrases: ['Parece cansado, [[como si hubiera trabajado|violet]]…', 'Sonríe [[como si estuviera|blue]]…', 'Mira a la cámara [[como si quisiera|blue]]…'], hint: 'Estado actual → imperfecto; causa imaginada anterior → pluscuamperfecto.', example: 'En la foto hay un hombre sentado en un banco. Parece agotado, como si hubiera caminado todo el día. Mira a la cámara como si quisiera decir algo, pero sonríe como si estuviera tranquilo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno da indicaciones de actuación y tú las interpretas; a veces usas a propósito «como si es» o «como si haya» y tu alumno te corrige.', self: 'Ahora hazte las preguntas a ti mismo con otro ejemplo distinto y respóndelas en voz alta. (Ask yourself the questions again with a different example.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Notas después del ensayo general', coach: 'Describe con precisión. Describe precisely.',
      steps: [
        { title: 'Las notas de la directora · The director’s notes', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada «como si»: ¿simultáneo o anterior? Y cada «como»: ¿es una manera real?', self: 'Escribe tu texto y toca «Revisar mi texto». Después comprueba cada «como si»: ¿simultáneo o anterior? (Check every como si.)' } },
          { kind: 'write', title: 'Notas para el elenco · Notes for the cast', situation: 'Eres Irene (o el responsable de un equipo después de una presentación, un partido o un evento). Escribes un mensaje al grupo con tus notas: describes cómo actuó cada persona, qué funciona y qué hay que cambiar. (You are Irene, or a team leader after a show, a match or an event. Write to the group describing how each person did, what works and what must change.)', task: [
            'Saluda al grupo y di cómo salió el ensayo general o el evento. (Greet the group and say how it went.)',
            'Describe a dos o tres personas con «como si» + imperfecto de subjuntivo.',
            'Usa al menos una vez «como si» + pluscuamperfecto para una causa imaginada anterior.',
            'Da una indicación con «como» + indicativo: una manera real y conocida (como lo ensayamos…).',
            'Si el tono es informal, añade un «¡Ni que…!» y cierra con una despedida.',
          ], starters: ['Querido elenco:', 'El ensayo general salió…', 'Entras como si…', 'Hablas como si…', 'Reaccionas como si hubieras…', 'Háganlo como lo ensayamos…', '¡Ni que fuera…!', 'Un abrazo,'],
            words: ['como si fuera', 'como si tuviera', 'como si estuviera', 'como si hubiera', 'como si no hubiera', 'como lo ensayamos', 'como te dije', 'ni que', 'igual que si'],
            model: 'Querido elenco: El ensayo general de ayer salió mucho mejor de lo que esperaba. Lucía, entras en la oficina [[como si fuera|blue]] de verdad tu primer día: con miedo, pero con ganas. Marcos, por fin hablas [[como si no tuvieras|blue]] tiempo para nadie, y el público se ríe en el momento justo. Daniel, en la escena del ascensor reaccionas [[como si hubieras oído|violet]] un ruido extraño, y funciona muy bien. Solo una cosa: el saludo final háganlo [[como lo ensayamos|teal]] el lunes, todos juntos y sin prisa. Y Marcos, no te preocupes tanto por la escena del café. ¡[[Ni que fuera|orange]] una tragedia griega! Mañana descansen, coman bien y lleguen el viernes a las seis, [[como si fuera|blue]] un ensayo más. Un abrazo, Irene.',
            minWords: 110,
            checks: [
              { label: '«Como si» + imperfecto de subjuntivo (como si fuera, como si tuviera…)', pattern: '(?<!\\p{L})como\\s+si\\s+(?:\\p{L}+\\s+){0,2}?(?!hubi)\\p{L}+(?:ara|aras|áramos|aran|iera|ieras|iéramos|ieran|uera|ueras|uéramos|ueran|ase|ases|ásemos|asen|iese|ieses|iésemos|iesen)(?!\\p{L})', tip: 'Describe a alguien con una comparación imaginada: «Hablas como si fueras el jefe», «como si tuvieras prisa».' },
              { label: '«Como si» + pluscuamperfecto (como si hubiera visto…)', pattern: '(?<!\\p{L})como\\s+si\\s+(?:\\p{L}+\\s+){0,2}?hubi(?:era|eras|éramos|eran|ese|eses|ésemos|esen)\\s+\\p{L}+', tip: 'Añade una causa imaginada anterior: «Reaccionas como si hubieras oído un ruido».' },
              { label: '«Como» + manera real (como lo ensayamos, como te dije…)', pattern: '(?<!\\p{L})como\\s+(?!si(?!\\p{L}))(?:\\p{L}+\\s+)?(?:ensayamos|dije|dijimos|hicimos|hiciste|practicamos|quedamos|enseñé|explicó|expliqué)(?!\\p{L})', tip: 'Da una indicación con una manera real: «Háganlo como lo ensayamos el lunes».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})como\\s+si\\s+(?:no\\s+)?(?:\\p{L}+\\s+)?(?:es|eres|soy|son|sea|seas|sean|está|estás|esté|estés|tiene|tienes|tenga|tengas|haya|hayas|hayan|sería|serías|habría|habrías|tendría|estaría)(?!\\p{L})', why: 'Tras **como si** solo van el imperfecto o el pluscuamperfecto de subjuntivo: «como si **fuera**», «como si **hubiera** visto». Nunca presente, indicativo ni condicional.' },
              { pattern: '(?<!\\p{L})ni\\s+que\\s+(?:es|eres|sea|seas|sería|serías)(?!\\p{L})', why: '**¡Ni que…!** pide imperfecto de subjuntivo: «¡Ni que **fuera** millonario!».' },
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
            { tone: 'blue', label: 'SIMULTÁNEO', formula: 'como si + imperfecto de subjuntivo', example: 'Habla como si fuera el jefe.', caption: 'lo imaginado ocurre a la vez', en: 'an imagined situation at the same time as the main action' },
            { tone: 'violet', label: 'ANTERIOR', formula: 'como si + hubiera / hubiese + participio', example: 'Me miró como si hubiera visto un fantasma.', caption: 'lo imaginado habría ocurrido antes', en: 'an imagined event before the main action, even after a present verb' },
            { tone: 'orange', label: 'PROTESTA COLOQUIAL', formula: '¡Ni que + imperfecto / pluscuamperfecto de subjuntivo!', example: '¡Ni que fuera millonario!', caption: 'rechazas una exageración', en: 'a colloquial exclamation rejecting an overreaction; avoid it in formal writing' },
            { tone: 'teal', label: 'MANERA REAL', formula: 'como + indicativo', example: 'Hazlo como te dije.', caption: 'una manera conocida, sin «si»', en: 'a real, known manner takes como + indicative' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Tras **como si** solo hay dos tiempos, sea cual sea el verbo principal: **imperfecto** si lo imaginado ocurre a la vez («habla / habló / hablará como si **supiera**») y **pluscuamperfecto** si habría ocurrido antes («como si **hubiera visto**»). Nunca «como si es», «como si sea» ni «como si haya». Si la manera es real, «como» + indicativo.', en: 'After como si there are only two tenses, whatever the main verb: the imperfect for something imagined at the same time, the pluperfect for something imagined before. Never the indicative, the present or perfect subjunctive, or the conditional. For a real manner, use como + indicative.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mi vecino aparca como si la calle ___ suya.', options: ['fuera', 'es', 'sea'], answer: 0, why: 'Comparación imaginada y simultánea: como si + imperfecto de subjuntivo.', en: 'My neighbour parks as if the street were his.' },
            { prompt: 'Llegó a la reunión empapado, como si ___ una hora bajo la lluvia.', options: ['hubiera caminado', 'haya caminado', 'caminaría'], answer: 0, why: 'Causa imaginada anterior a «llegó»: pluscuamperfecto de subjuntivo.', en: 'He arrived at the meeting soaked, as if he had walked in the rain for an hour.' },
            { prompt: 'Prepara el arroz ___ dice la receta, sin cambiar nada.', options: ['ni que', 'como si', 'como'], answer: 2, why: 'La receta existe: manera real → como + indicativo.', en: 'Make the rice the way the recipe says, without changing anything.' },
            { prompt: '—Mi hermano no me deja su bici ni un minuto. —¡Ni que ___ de oro!', options: ['será', 'es', 'fuera'], answer: 2, why: 'Protesta coloquial: ¡Ni que + imperfecto de subjuntivo!', en: 'It’s not as if it were made of gold!' },
            { prompt: 'Durante años, mi jefe me trató como si ___ nuevo en la empresa.', options: ['era', 'sea', 'fuera'], answer: 2, why: 'El verbo principal en pasado no cambia nada: como si + imperfecto de subjuntivo.', en: 'For years my boss treated me as if I were new at the company.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una comida familiar. Now, a family lunch.', blocks: [
          { kind: 'lead', text: 'Domingo, comida en casa de la familia de Sara. Transforma cada observación en una comparación con «como si» o en una protesta con «¡Ni que…!».', en: 'Sunday lunch at Sara’s family home. Turn each observation into a comparison with como si or a protest with ¡Ni que…!' },
          { kind: 'rewrite', title: 'La comida del domingo · Sunday lunch', items: [
            { prompt: 'La suegra de Sara no es la dueña de esta casa, pero da órdenes en la cocina.', instruction: 'Empieza: «La suegra de Sara da órdenes en la cocina…».', accept: ['La suegra de Sara da órdenes en la cocina como si fuera la dueña de esta casa', 'La suegra de Sara da órdenes en la cocina como si fuese la dueña de esta casa', 'La suegra de Sara da órdenes en la cocina como si fuera la dueña de la casa', 'La suegra de Sara da órdenes en la cocina como si fuese la dueña de la casa'] },
            { prompt: 'Los niños sí han comido hoy, pero devoran la comida.', instruction: 'Empieza: «Los niños devoran la comida como si no…».', accept: ['Los niños devoran la comida como si no hubieran comido en todo el día', 'Los niños devoran la comida como si no hubiesen comido en todo el día', 'Los niños devoran la comida como si no hubieran comido', 'Los niños devoran la comida como si no hubiesen comido', 'Los niños devoran la comida como si no hubieran comido hoy', 'Los niños devoran la comida como si no hubiesen comido hoy'] },
            { prompt: 'El primo de Sara dice que no puede poner la mesa porque está muy ocupado. No es ministro.', instruction: 'Eres Sara. Protesta. Empieza: «¡Ni que…».', accept: ['¡Ni que fueras ministro!', '¡Ni que fueses ministro!'] },
          ] },
        ] },
        { title: 'Ampliación · Más usos de «como si» · More uses', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: «como si» con una acción futura, «¡Como si…!» como exclamación independiente, «igual que si» y el registro.', en: 'For strong students or spare time: como si with a future idea, “¡Como si…!” on its own as an ironic exclamation, igual que si, and register.' },
          { kind: 'choice', title: 'Usos menos frecuentes · Less common uses', items: [
            { prompt: 'Se despidió de nosotros como si no ___ a volver nunca.', options: ['va', 'vaya', 'fuera'], answer: 2, why: 'Para una acción imaginada posterior se usa «como si + fuera a + infinitivo»: como si no fuera a volver.', en: 'He said goodbye as if he were never coming back.' },
            { prompt: '—Este fin de semana me ayudas con la mudanza, ¿no? —¡Como si yo no ___ nada que hacer!', options: ['tuviera', 'tenga', 'tengo'], answer: 0, why: '«¡Como si…!» sola, sin verbo principal, es una protesta irónica: «hablas como si yo no tuviera nada que hacer». Mismo subjuntivo.', en: 'As if I had nothing else to do!' },
            { prompt: '«Nos recibieron igual que si fuéramos de la familia». ¿Qué significa?', options: ['Nos recibieron como si fuéramos de la familia, aunque no lo somos.', 'Nos recibieron peor que a la familia.', 'Somos de la familia y nos recibieron así.'], answer: 0, why: '«Igual que si» y «lo mismo que si» equivalen a «como si»: comparación irreal.', en: 'They welcomed us just as if we were family.' },
            { prompt: 'Escribes la crítica de una obra para una revista. ¿Qué frase es adecuada?', options: ['«¡Ni que fuera una obra maestra!»', '«El protagonista habla como si cada frase fuera la última».', '«¡Como si yo tuviera tiempo!»'], answer: 1, why: '«¡Ni que…!» y «¡Como si…!» sueltas son coloquiales; en un texto formal, «como si» dentro de la oración.', en: 'Which sentence suits a review in a magazine?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno responde a tres peticiones absurdas con «¡Como si…!» y explica la ironía.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 137 · Concesión: aunque + indicativo / subjuntivo', text: 'Ya comparas con algo imaginado: «como si fuera», «como si hubiera visto». En la clase 137, «aunque» también te obliga a elegir modo: indicativo para un dato que das por cierto («aunque llueve, salgo») y subjuntivo para uno que no confirmas o que no te importa («aunque llueva, saldré»). Es el paso natural: sigues decidiendo entre realidad e hipótesis, ahora para expresar obstáculos.', en: 'You can now compare with something imagined. In class 137, “aunque” also makes you choose the mood: indicative for a fact you accept, subjunctive for one you don’t confirm or that doesn’t matter to you. It’s the natural next step: you keep choosing between fact and hypothesis, now to talk about obstacles.', href: '/aunque-cambie-el-dato', label: 'Ir a la clase 137' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Describe a alguien que conoces con un “como si” simultáneo y otro anterior». Tarea: las notas de Escribir sobre un evento real.' },
        ] },
      ],
    },
  ],
};
