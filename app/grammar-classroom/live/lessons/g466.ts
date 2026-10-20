import type { LiveLesson } from '../types';

/**
 * Lesson 466 · B2 · Síntesis B2: debate, explicación y texto formal (course unit G166).
 * Closing review of B2. No new theory: the learner recombines and, above all, CHOOSES
 * between the B2 tools already taught: opinion and rebuttal (creo que + ind. / no creo
 * que, no es que… sino que + subj.; G152), concession (aunque + ind./subj., a pesar de
 * que, por mucho que; G137, G138), conditionals including mixed ones and «aunque +
 * imperfecto de subjuntivo → condicional» (G131–G135), passive and se (G148, G149),
 * relatives with preposition, cuyo, lo cual (G142–G144), reported speech and requests
 * (G146, G147), probability (G161) and connectors (G156). Register shift (conversation
 * vs acta / carta) runs through Practicar and Escribir. Ampliación: C1 previews
 * (de + infinitivo compuesto G172, habría + participio G174, concordancia G167).
 * Scene: Monteluz, a mid-sized town. The old railway station, closed in 2009 and bought
 * by the council in 2022, has two finalist projects: a library with a youth centre
 * (Elena Robles, history teacher, association «Amigos de la Estación») and a hotel
 * (Sergio Paredes, local businessman). Marta Ibarra, councillor for culture, chairs an
 * open session; Daniela Ruiz speaks for the youth council. Escuchar: Daniela's youth
 * slot on local radio (es-CO-SalomeNeural, ustedes). Escribir: a letter to the editor.
 */
export const lesson: LiveLesson = {
  id: 466,
  level: 'B2',
  title: 'Síntesis B2: debate, explicación y texto formal',
  subtitle: 'Debatir, conceder, imaginar, informar y citar en un mismo tema, eligiendo la estructura B2 adecuada en cada momento.',
  legend: [
    { tone: 'blue', label: 'OPINAR Y CONCEDER · no creo que, no es que, aunque, por mucho que' },
    { tone: 'teal', label: 'IMAGINAR · si + subjuntivo, condicionales mixtas' },
    { tone: 'orange', label: 'INFORMAR Y PRECISAR · pasiva, se, relativos, conectores' },
    { tone: 'violet', label: 'CITAR Y SUPONER · estilo indirecto, probabilidad' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Tu caja de herramientas B2', coach: 'No hay teoría nueva: hoy eliges. No new rules today: you choose.',
      steps: [
        { title: 'Una estación, dos proyectos · One station, two projects', blocks: [
          { kind: 'lead', text: 'En Monteluz, la antigua estación de tren lleva cerrada desde 2009. El ayuntamiento la compró hace dos años y ahora hay dos proyectos finalistas: una **biblioteca con centro juvenil** y un **hotel**. Esta es la clase de síntesis de B2: no aprendes reglas nuevas, sino a **elegir** entre las que ya tienes para debatir, explicar y escribir un texto formal sobre un mismo tema.', en: 'In Monteluz, the old railway station has been closed since 2009. The council bought it two years ago and two projects have made the shortlist: a library with a youth centre, and a hotel. This is the B2 review class: you learn no new rules; instead, you practise choosing among the tools you already have to debate, explain and write a formal text on a single topic.' },
          { kind: 'guide', text: { teacher: 'Tú lees la columna «Para…» de cada fila y tu alumno lee el ejemplo de Monteluz y dice qué forma es la clave.', self: 'Lee cada fila y subraya mentalmente la forma clave de cada ejemplo. (Spot the key form in each example.)' } },
          { kind: 'table', title: 'Lo que B2 te permite hacer · What B2 lets you do', head: ['Para…', 'Herramienta', 'En el debate de Monteluz'], rows: [
            ['opinar y rebatir', 'creo que + indicativo · no creo que / no es que + subjuntivo', '[[No creo que|blue]] la ciudad **necesite** otro hotel.'],
            ['conceder', 'aunque / a pesar de que + ind. o subj. · por mucho que + subj.', '[[Aunque|blue]] el proyecto **sea** caro, merece la pena.'],
            ['imaginar otro resultado', 'si + imperf. o pluscuamp. de subjuntivo → condicional', '[[Si se hubiera restaurado|teal]] a tiempo, hoy [[no estaría|teal]] en ruinas.'],
            ['informar sin protagonista', 'ser + participio · se pasivo · se impersonal', 'La estación [[fue cerrada|orange]] en 2009; [[se han presentado|orange]] tres proyectos.'],
            ['precisar y enlazar', 'preposición + el que · cuyo · lo cual · sin embargo, ahora bien', 'Una asociación [[cuyos socios|orange]] son vecinos del barrio.'],
            ['citar y suponer', 'dijo que + cambio de tiempo · pidió que + subj. · futuro y condicional de probabilidad', 'Marta [[dijo que|violet]] la decisión **se tomaría** en junio. [[Habrá|violet]] cien personas.'],
          ], note: 'En un debate real las herramientas se mezclan: una misma intervención puede conceder, imaginar y citar a la vez. Por eso hoy los ejercicios te obligan a **decidir** qué estructura necesitas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La estación fue cerrada en 2009». ¿Qué hace esta frase?', options: ['Concede un argumento al otro lado.', 'Imagina un pasado distinto.', 'Informa de un hecho sin destacar quién lo hizo.'], answer: 2, why: 'Ser + participio: el foco está en el edificio y en el hecho, no en quién lo cerró.', en: 'A passive sentence: the focus is the building and the event, not who closed it.' },
            { prompt: '¿Qué frase cita las palabras de otra persona?', options: ['Habrá cien personas en la sala.', 'Marta dijo que la decisión se tomaría en junio.', 'No creo que la ciudad necesite otro hotel.'], answer: 1, why: '«Dijo que» + condicional transmite lo que dijo Marta. La primera supone; la tercera opina.', en: 'Which sentence reports what someone else said?' },
          ] },
        ] },
        { title: 'Opinar y conceder · Giving opinions and conceding', mascot: '/brand/mascot/studying.webp', coach: 'Afirmas → indicativo. Niegas o no importa → subjuntivo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'OPINIÓN, OBJECIÓN, CONCESIÓN', question: '¿Afirmas algo como verdadero o lo niegas, lo valoras o le quitas importancia?', en: 'One reminder covers the whole area. If you assert something as true (creo que, es verdad que, aunque + new fact), use the indicative. If you deny it, reject it as the real reason, evaluate it, or play it down, use the subjunctive. “Por mucho que” is almost always followed by the subjunctive, especially for something that hasn’t happened.', formula: ['creo / me parece / es verdad que + indicativo', 'no creo que · no me parece que · no es que… sino que + subjuntivo', 'es lógico / es una pena que + subjuntivo', 'aunque / a pesar de que + indicativo (lo afirmas) o subjuntivo (no importa)', 'por mucho que / por más que + subjuntivo'],
            meaning: 'Una sola idea organiza esta zona: si **afirmas** algo como verdadero, indicativo; si lo **niegas**, lo **descartas** como causa, lo **valoras** o le **quitas importancia**, subjuntivo.',
            examples: [
              { es: 'Creo que la biblioteca **atraerá** a mucha gente, pero [[no creo que|blue]] **abra** antes de 2028.', en: 'I believe the library will attract lots of people, but I don’t think it will open before 2028: assertion vs denial.' },
              { es: '[[No es que|blue]] **esté** en contra del hotel, sino que **prefiero** un espacio público.', en: 'It’s not that I’m against the hotel; it’s that I prefer a public space. The rejected reason takes the subjunctive, the real one the indicative.' },
              { es: '[[Por mucho que|blue]] **insistan**, no voy a cambiar de opinión.', en: 'However much they insist, I’m not going to change my mind.' },
            ] },
          { kind: 'compare', title: 'Aunque: dos intenciones · Aunque: two intentions', columns: [
            { tone: 'neutral', label: 'AUNQUE + INDICATIVO', sentence: 'Aunque el edificio **es** antiguo, está en buen estado.', idea: 'Das el dato como información: quizá el otro no lo sabía.', en: 'You present the fact as information the listener may not have.' },
            { tone: 'blue', label: 'AUNQUE + SUBJUNTIVO', sentence: '[[Aunque|blue]] el edificio **sea** antiguo, hay que salvarlo.', idea: 'El dato es conocido o posible y no cambia tu conclusión.', en: 'The fact is known or merely possible, and it doesn’t change your conclusion: you play it down.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No creo que el hotel ___ tantos empleos.', options: ['creará', 'cree', 'crea'], answer: 1, why: '«No creo que» niega la opinión: subjuntivo de «crear» = cree.', en: 'I don’t think the hotel will create so many jobs.' },
            { prompt: 'No es que no ___ el turismo, sino que la ciudad necesita otra cosa.', options: ['quiera', 'querría', 'quiero'], answer: 0, why: '«No es que» descarta una causa: subjuntivo. Después de «sino que» va lo que afirmas, en indicativo.', en: 'It’s not that I don’t want tourism; it’s that the town needs something else.' },
          ] },
        ] },
        { title: 'Imaginar otro resultado · Imagining another outcome', mascot: '/brand/mascot/speaking.webp', coach: '¿Cuándo es la condición? ¿Cuándo es el resultado?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CONDICIONES IRREALES', question: '¿La condición es del presente o del pasado? ¿Y el resultado?', en: 'Choose each half separately. The condition: imperfect subjunctive for the present (si tuviéramos), pluperfect subjunctive for the past (si hubiéramos tenido). The result: simple conditional for now (estaría), conditional perfect for then (habría estado). Mixing them is normal when a past cause has a present effect.', formula: ['si + imperfecto de subjuntivo → condicional simple (presente irreal)', 'si + pluscuamperfecto de subjuntivo → condicional compuesto (pasado irreal)', 'si + pluscuamperfecto de subjuntivo → condicional simple (causa pasada, efecto hoy)', 'aunque + imperfecto de subjuntivo → condicional (concesión hipotética)'],
            meaning: 'Decide **cada mitad por separado**: la condición puede ser del presente o del pasado, y el resultado también. Si una causa pasada tiene un efecto hoy, mezclas los tiempos: es una **condicional mixta**.',
            examples: [
              { es: 'Si **tuviéramos** el dinero, [[abriríamos|teal]] la biblioteca este mismo año.', en: 'If we had the money, we would open the library this very year (present, unreal).' },
              { es: '[[Si se hubiera restaurado|teal]] en 2010, **se habría ahorrado** mucho dinero.', en: 'If it had been restored in 2010, a lot of money would have been saved (past, unreal).' },
              { es: '[[Si se hubiera restaurado|teal]] en 2010, hoy [[no estaría|teal]] en ruinas.', en: 'If it had been restored in 2010, it wouldn’t be in ruins today (past cause, present effect).' },
              { es: 'Aunque **hubiera** un retraso en las obras, la biblioteca **abriría** en primavera.', en: 'Even if the works were delayed, the library would still open in spring: a hypothetical concession.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Nadie arregló el tejado hace diez años y ahora entra agua.', prompt: 'Si alguien lo hubiera arreglado, ahora no ___ agua.', options: ['entraría', 'entrara', 'habría entrado'], answer: 0, why: 'Causa pasada, efecto presente («ahora»): condicional simple.', en: 'If someone had fixed it, water wouldn’t be getting in now.' },
            { prompt: 'Si el ayuntamiento ___ más presupuesto, contrataría a dos bibliotecarios.', options: ['tendría', 'tenga', 'tuviera'], answer: 2, why: 'Presente irreal: si + imperfecto de subjuntivo. Nunca condicional después de «si».', en: 'If the council had a bigger budget, it would hire two librarians.' },
          ] },
        ] },
        { title: 'Informar y precisar · Reporting facts precisely', mascot: '/autoestudio/mascot/noting.webp', coach: 'Sin protagonista y sin repetir. No agent, no repetition.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PASIVA, SE Y RELATIVOS', question: '¿Importa quién lo hizo? ¿Cómo unes dos ideas sin repetir?', en: 'Formal texts hide the agent when it is unknown, obvious or irrelevant. Ser + participle (the participle agrees) is typical of reports and minutes; passive se agrees with the noun; impersonal se stays singular, especially before personal “a”. Relatives make the text dense and precise: preposition + el que / el cual, cuyo (agreeing with what is owned) and lo cual for a whole idea.', formula: ['ser + participio (concuerda): las propuestas fueron presentadas', 'se pasivo (concuerda con el nombre): se presentaron tres proyectos', 'se impersonal (singular): se escuchó a todos los vecinos', 'preposición + el / la / los / las que (o cual): la sala en la que…', 'cuyo / cuya / cuyos / cuyas + nombre poseído · lo cual / lo que = una idea entera'],
            meaning: 'En un texto formal, el protagonista desaparece cuando no se conoce, es obvio o no importa. Y los relativos te dejan **unir ideas sin repetir**, con precisión.',
            examples: [
              { es: 'El proyecto [[fue presentado|orange]] por la asociación en marzo.', en: 'The project was submitted by the association in March: typical of minutes and news.' },
              { es: 'Es un edificio [[cuya fachada|orange]] está protegida, [[lo cual|orange]] encarece la obra.', en: 'It is a building whose façade is listed, which makes the work more expensive.' },
              { es: 'La sala [[en la que|orange]] se reúne el consejo de la juventud es diminuta.', en: 'The room where the youth council meets is tiny.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la sesión ___ todas las propuestas.', options: ['se escucharon', 'fueron escuchado', 'se escuchó'], answer: 0, why: 'Se pasivo: el verbo concuerda con «propuestas» (plural).', en: 'All the proposals were heard at the session.' },
            { prompt: 'Habló un vecino ___ abuela vendía billetes en la estación.', options: ['que su', 'cuya', 'cuyo'], answer: 1, why: '«Cuyo» concuerda con lo poseído (abuela), no con el poseedor. «Que su» se oye, pero la norma no lo acepta.', en: 'A resident spoke whose grandmother used to sell tickets at the station.' },
          ] },
        ] },
        { title: 'Citar y suponer · Reporting and guessing', mascot: '/brand/mascot/seated.webp', coach: 'Lo que dijo otro, lo que supones tú.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'ESTILO INDIRECTO Y PROBABILIDAD', question: '¿Repites lo que dijo otro o supones algo que no sabes?', en: 'Reporting in the past moves tenses back (será → sería, he hablado → había hablado) and recalculates words like hoy or aquí from your own time and place; a reported request takes the subjunctive (pidió que + imperfect subjunctive). To guess, move the verb one tense forward: hay → habrá (now), ha llegado → habrá llegado (just now), había → habría (back then).', formula: ['dijo: «se tomará» → dijo que se tomaría', 'pidió: «tengan paciencia» → pidió que tuviéramos paciencia', 'hoy → ese día · aquí → allí · mañana → al día siguiente', 'probabilidad: habrá (ahora) · habrá llegado (acaba de pasar) · habría (en el pasado)'],
            meaning: 'Para **transmitir** en pasado, los tiempos retroceden y las peticiones pasan a subjuntivo. Para **suponer**, el verbo avanza un tiempo: lo que dirías si lo supieras, un paso hacia delante.',
            examples: [
              { es: 'Marta [[aseguró que|violet]] la comisión **estudiaría** los dos proyectos.', en: 'Marta assured everyone that the committee would study both projects.' },
              { es: 'Nos [[pidió que|violet]] **enviáramos** las propuestas por escrito.', en: 'She asked us to send in our proposals in writing.' },
              { es: 'Ya [[habrán llegado|violet]] las primeras propuestas; ayer [[habría|violet]] unas treinta.', en: 'The first proposals will have arrived by now; yesterday there must have been about thirty.' },
            ] },
          { kind: 'tip', icon: '💡', title: 'Conectores para debatir · Connectors for debating', text: '**Sin embargo / no obstante**: contraste formal. **Ahora bien**: aceptas y pones una condición. **En cambio**: comparas dos posturas. **Por lo tanto**: sacas una conclusión. **Es decir**: aclaras. Puntuación: «Es caro. **Sin embargo**, es necesario» o «Es caro; **sin embargo**, es necesario». Nunca «pero sin embargo».', en: 'Sin embargo / no obstante mark formal contrast; ahora bien accepts a point and adds a condition; en cambio sets two positions side by side; por lo tanto draws a conclusion; es decir clarifies. Use a full stop or semicolon before and a comma after, and never “pero sin embargo”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Sergio, el jueves: «Abriremos el hotel en dos años». → Sergio dijo que ___ el hotel en dos años.', options: ['abrirían', 'abran', 'abrieran'], answer: 0, why: 'Transmitir en pasado un futuro: abriremos → abrirían. Es una afirmación, no una petición: no hay subjuntivo.', en: 'Sergio said they would open the hotel in two years.' },
            { context: 'La sesión de marzo terminó tarde, pero nadie miró el reloj.', prompt: '___ las diez cuando se fue el último vecino.', options: ['Serían', 'Serán', 'Fueran'], answer: 0, why: 'Suposición sobre una hora del pasado («se fue»): eran → serían.', en: 'It must have been about ten when the last resident left.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Primero decide, después conjuga. Decide first, then conjugate.', blocks: [
          { kind: 'decide', title: '¿Qué estructura necesitas? · Which structure do you need?', steps: [
            { q: '¿Niegas una opinión o descartas una causa?', yes: 'no creo que / no es que + subjuntivo', no: 'Si la afirmas: creo que + indicativo.' },
            { q: '¿Imaginas algo que no es o no fue verdad?', yes: 'si + imperfecto o pluscuamperfecto de subjuntivo, y condicional en la otra mitad', no: 'Condición real: si + presente.' },
            { q: '¿El protagonista no importa?', yes: 'ser + participio (formal) o se + verbo que concuerda', no: 'Frase activa con sujeto.' },
            { q: '¿Repites lo que otro dijo o pidió en el pasado?', yes: 'dijo que + tiempo retrocedido · pidió que + imperfecto de subjuntivo', no: '¿Lo supones? Futuro o condicional de probabilidad.' },
          ] },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'No creo que la biblioteca es cara.', right: 'No creo que la biblioteca sea cara.', why: 'Opinión negada: subjuntivo.' },
            { wrong: 'Si se habría restaurado antes, hoy no estaría en ruinas.', right: 'Si se hubiera restaurado antes, hoy no estaría en ruinas.', why: 'Después de «si» nunca va condicional: pluscuamperfecto de subjuntivo.' },
            { wrong: 'Se presentó tres proyectos.', right: 'Se presentaron tres proyectos.', why: 'Se pasivo: el verbo concuerda con «proyectos». Se oye en muchas zonas, pero la norma recomienda la concordancia.' },
            { wrong: 'Es una asociación cuyo presidenta es Elena.', right: 'Es una asociación cuya presidenta es Elena.', why: '«Cuyo» concuerda con lo poseído (presidenta).' },
            { wrong: 'Nos pidió que enviamos las propuestas.', right: 'Nos pidió que enviáramos las propuestas.', why: 'Una petición transmitida lleva subjuntivo; en pasado, imperfecto de subjuntivo.' },
            { wrong: 'Es un proyecto que nadie confía.', right: 'Es un proyecto en el que nadie confía.', why: '«Confiar en»: la preposición va delante del relativo.' },
            { wrong: 'Es caro, pero sin embargo es necesario.', right: 'Es caro. Sin embargo, es necesario.', why: '«Sin embargo» ya marca el contraste: no se suma a «pero».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es una decisión ___ depende el futuro del barrio.', options: ['que', 'de la que', 'la que'], answer: 1, why: '«Depender de»: de + la que.', en: 'It’s a decision on which the future of the neighbourhood depends.' },
            { prompt: 'Las firmas ___ entregadas ayer en el registro.', options: ['fue', 'se fueron', 'fueron'], answer: 2, why: 'Ser + participio concuerda con «firmas»: fueron entregadas.', en: 'The signatures were handed in at the registry yesterday.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno elige un tema polémico de su ciudad y dice una frase de cada fila del mapa inicial.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La sesión abierta', coach: 'Toca cada forma marcada. Tap each marked form.',
      steps: [
        { title: 'En el salón de plenos · At the council chamber', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marta y Sergio; tu alumno es Elena y Daniela. Después tu alumno toca cada forma marcada y dice para qué sirve: opinar, conceder, imaginar, informar, citar o suponer.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y di para qué sirve. (Tap each marked form and say what it does.)' } },
          { kind: 'explore', title: '¿Biblioteca u hotel?', setting: 'Jueves, siete de la tarde. El salón de plenos del ayuntamiento de Monteluz está lleno. La concejala de Cultura, Marta Ibarra, modera la sesión abierta sobre la antigua estación. (An open public session at the town hall.)', lines: [
            { who: 'Marta', text: 'Buenas tardes. Como saben, la estación [[fue cerrada|orange]] en 2009 y el ayuntamiento la compró hace dos años. Desde entonces [[se han presentado|orange]] tres proyectos; hoy debatimos los dos finalistas. Señora Robles, tiene la palabra.', en: 'Good evening. As you know, the station was closed in 2009 and the council bought it two years ago. Since then three projects have been submitted; today we are debating the two finalists. Ms Robles, you have the floor.' },
            { who: 'Elena', text: 'Gracias. Seré breve: [[no creo que Monteluz necesite|blue]] otro hotel. Necesita un lugar [[en el que|orange]] los jóvenes puedan estudiar y reunirse.', en: 'Thank you. I’ll be brief: I don’t think Monteluz needs another hotel. It needs a place where young people can study and meet.' },
            { who: 'Sergio', text: 'Con todo respeto, [[no es que|blue]] esté en contra de la biblioteca, sino que el ayuntamiento no tiene dinero para mantenerla. [[Si se hubiera restaurado|teal]] el edificio hace quince años, [[hoy no estaría|teal]] en ruinas.', en: 'With all due respect, it’s not that I’m against the library; it’s that the council has no money to run it. If the building had been restored fifteen years ago, it wouldn’t be in ruins today.' },
            { who: 'Daniela', text: 'Pero [[por mucho que el hotel traiga|blue]] turistas, a los jóvenes no nos resuelve nada. En el consejo de la juventud somos cuarenta y no tenemos ni una sala.', en: 'But however many tourists the hotel brings, it doesn’t solve anything for young people. There are forty of us on the youth council and we don’t have a single room.' },
            { who: 'Elena', text: 'Y no estamos solos: nuestra asociación, [[cuyos socios|orange]] son casi todos vecinos del barrio, ha recogido dos mil firmas.', en: 'And we’re not alone: our association, whose members are nearly all local residents, has collected two thousand signatures.' },
            { who: 'Sergio', text: 'Dos mil firmas no pagan una obra. [[Aunque la biblioteca sea|blue]] una idea preciosa, alguien tendrá que pagar la calefacción. Mi proyecto, en cambio, crea treinta empleos.', en: 'Two thousand signatures don’t pay for building work. Lovely as the library idea may be, someone will have to pay the heating bill. My project, on the other hand, creates thirty jobs.' },
            { who: 'Daniela', text: 'En marzo, la concejala [[nos prometió que escucharía|violet]] a los jóvenes antes de decidir. Solo [[le pedimos que lo cumpla|violet]].', en: 'In March the councillor promised us she would listen to young people before deciding. All we’re asking is that she keeps her word.' },
            { who: 'Marta', text: 'Y lo cumpliré. [[Ahora bien|orange]], les recuerdo que, según el informe técnico, la reforma completa costaría unos dos millones y medio.', en: 'And I will. That said, let me remind you that, according to the technical report, the full refurbishment would cost about two and a half million.' },
            { who: 'Elena', text: 'Lo sabemos. Por eso proponemos hacerla por fases, [[lo cual|orange]] reduce a la mitad el gasto del primer año.', en: 'We know. That’s why we’re proposing to do it in phases, which halves the cost in the first year.' },
            { who: 'Sergio', text: '[[Será más barato|violet]] al principio, pero a la larga cuesta lo mismo.', en: 'It may be cheaper at first, but in the long run it costs the same.' },
            { who: 'Marta', text: 'Muy bien. Las dos propuestas [[serán estudiadas|orange]] por la comisión técnica y la decisión [[se anunciará|orange]] en junio. Gracias a todos por venir.', en: 'Very well. Both proposals will be examined by the technical committee and the decision will be announced in June. Thank you all for coming.' },
            { who: 'Daniela', text: '(En voz baja, a Elena.) [[Habrá|violet]] más de cien personas, ¿no? Esto no lo esperaban.', en: '(Quietly, to Elena.) There must be over a hundred people here, right? They didn’t expect this.' },
          ], notes: {
            'fue cerrada': 'Pasiva con **ser + participio**, típica del registro formal: importa el hecho, no quién cerró la estación. El participio concuerda con «estación».',
            'se han presentado': '**Se pasivo** en plural porque concuerda con «tres proyectos». Quién los presentó no importa aquí.',
            'no creo que Monteluz necesite': 'Opinión negada: **no creo que + subjuntivo**. Con «creo que» diría «necesita».',
            'en el que': 'Relativo con preposición: «estudiar **en** un lugar» → un lugar **en el que**… El subjuntivo «puedan» indica que ese lugar todavía no existe.',
            'no es que': '**No es que + subjuntivo** (esté) descarta una causa; **sino que + indicativo** (no tiene) da la verdadera.',
            'Si se hubiera restaurado': 'Condición sobre el **pasado** que no se cumplió: si + pluscuamperfecto de subjuntivo, aquí con se pasivo.',
            'hoy no estaría': 'Resultado en el **presente** («hoy»): condicional simple. Es una condicional **mixta**: causa pasada, efecto actual.',
            'por mucho que el hotel traiga': '**Por mucho que + subjuntivo**: el hotel aún no existe, así que es una concesión hipotética e intensiva.',
            'cuyos socios': '**Cuyos** concuerda con «socios» (lo poseído), no con «asociación». Es una explicativa, entre comas.',
            'Aunque la biblioteca sea': '**Aunque + subjuntivo**: Sergio acepta la idea y le quita importancia frente a su argumento.',
            'nos prometió que escucharía': 'Estilo indirecto en pasado: «Escucharé» → **prometió que escucharía**.',
            'le pedimos que lo cumpla': 'Petición en **presente** (la hacen ahora): pedir que + **presente** de subjuntivo. En pasado sería «le pedimos que lo cumpliera».',
            'Ahora bien': 'Conector: Marta acepta lo dicho y añade una condición o un límite. Muy frecuente en debates.',
            'lo cual': '**Lo cual** remite a toda la idea anterior (hacerla por fases), no a un nombre concreto.',
            'Será más barato': '**Futuro concesivo**: Sergio no duda; acepta el dato y lo contrarresta con «pero».',
            'serán estudiadas': 'Pasiva en futuro: **serán + participio**, concordando con «propuestas». Registro institucional.',
            'se anunciará': 'Se pasivo en singular, concordando con «la decisión».',
            'Habrá': 'Futuro de **probabilidad** sobre el presente: probablemente hay más de cien personas.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no apoya Sergio la biblioteca, según él mismo?', options: ['Porque no le gustan las bibliotecas.', 'Porque el ayuntamiento no puede pagar su mantenimiento.', 'Porque los jóvenes no la usarían.'], answer: 1, why: '«No es que esté en contra…, sino que el ayuntamiento no tiene dinero para mantenerla».', en: 'Why doesn’t Sergio support the library, in his own words?' },
            { prompt: '¿Qué le recuerda Daniela a la concejala?', options: ['Que el consejo de la juventud ya tiene sala.', 'Que el hotel creará cuarenta empleos.', 'Que en marzo prometió escuchar a los jóvenes.'], answer: 2, why: '«La concejala nos prometió que escucharía a los jóvenes».', en: 'What does Daniela remind the councillor of?' },
            { prompt: '¿Cómo responde Elena al problema del coste?', options: ['Propone hacer la obra por fases.', 'Dice que la obra es gratuita.', 'Pide que la pague Sergio.'], answer: 0, why: '«Proponemos hacerla por fases, lo cual reduce a la mitad el gasto».', en: 'How does Elena respond to the cost problem?' },
          ] },
        ] },
        { title: '¿Qué hace cada frase? · What does each sentence do?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Después de la sesión · After the session', categories: [
            { id: 'opinar', label: 'OPINAR O CONCEDER', tone: 'blue' },
            { id: 'imaginar', label: 'IMAGINAR', tone: 'teal' },
            { id: 'informar', label: 'INFORMAR O PRECISAR', tone: 'orange' },
            { id: 'citar', label: 'CITAR O SUPONER', tone: 'violet' },
          ], items: [
            { text: 'No me parece que el hotel sea la mejor opción.', answer: 'opinar', why: 'Opinión negada con subjuntivo.' },
            { text: 'Si tuviéramos una sala, organizaríamos talleres cada semana.', answer: 'imaginar', why: 'Presente irreal: si + imperfecto de subjuntivo → condicional.' },
            { text: 'El informe fue encargado a una arquitecta independiente.', answer: 'informar', why: 'Pasiva con ser + participio: el hecho, sin protagonista.' },
            { text: 'Sergio dijo que su empresa se haría cargo de las obras.', answer: 'citar', why: 'Estilo indirecto: «se hará cargo» → se haría cargo.' },
            { text: 'A pesar de que el presupuesto es limitado, la biblioteca es prioritaria.', answer: 'opinar', why: 'Concesión: se acepta un dato y se mantiene la postura.' },
            { text: 'La comisión ya tendrá los dos proyectos sobre la mesa.', answer: 'citar', why: 'Futuro de probabilidad: probablemente ya los tiene.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Quién ha argumentado mejor y por qué?». Tu alumno responde con una concesión y una opinión negada.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Cada hueco pide una decisión. Every gap is a decision.',
      steps: [
        { title: 'Elige la estructura · Choose the structure', blocks: [
          { kind: 'choice', items: [
            { context: 'Sergio defiende su proyecto con convicción.', prompt: 'Creo que un hotel ___ empleo estable para el barrio.', options: ['creará', 'cree', 'creara'], answer: 0, why: '«Creo que» afirma una opinión: indicativo. «Cree» sería el subjuntivo que pide «no creo que».', en: 'I believe a hotel will create stable jobs for the area.' },
            { context: 'El hotel todavía no existe.', prompt: 'Por mucho que el hotel ___ turistas, el barrio seguirá sin biblioteca.', options: ['traerá', 'trae', 'traiga'], answer: 2, why: 'Concesión intensiva sobre algo hipotético: por mucho que + subjuntivo.', en: 'However many tourists the hotel brings, the neighbourhood will still have no library.' },
            { context: 'Hoy la estación está en ruinas porque nadie la restauró en 2010.', prompt: 'Si alguien la ___ en 2010, hoy sería un edificio útil.', options: ['habría restaurado', 'hubiera restaurado', 'restaurara'], answer: 1, why: 'Condición pasada no cumplida: pluscuamperfecto de subjuntivo. El efecto es de hoy: condicional simple.', en: 'If someone had restored it in 2010, it would be a useful building today.' },
            { prompt: 'En la sesión ___ más de cuarenta preguntas.', options: ['se hicieron', 'se hizo', 'fueron hecho'], answer: 0, why: 'Se pasivo: concuerda con «preguntas». «Se hizo cuarenta preguntas» se oye, pero la norma recomienda el plural.', en: 'More than forty questions were asked at the session.' },
            { prompt: 'Intervino una vecina ___ padre fue jefe de estación.', options: ['cuya', 'cuyo', 'que su'], answer: 1, why: '«Cuyo» concuerda con «padre», lo poseído. «Que su» es frecuente en la conversación, pero la norma lo rechaza.', en: 'A resident spoke whose father had been the stationmaster.' },
            { prompt: 'La concejala pidió a los asistentes que ___ el turno de palabra.', options: ['respetaran', 'respetarían', 'respetaban'], answer: 0, why: 'Petición transmitida en pasado: pidió que + imperfecto de subjuntivo.', en: 'The councillor asked the audience to wait their turn to speak.' },
            { context: 'Marta oye ruido de sillas en la sala de al lado.', prompt: '___ preparando la sala para la próxima reunión.', options: ['Estén', 'Estarán', 'Estarían'], answer: 1, why: 'Suposición sobre el presente: están → estarán.', en: 'They must be setting up the room for the next meeting.' },
          ] },
        ] },
        { title: '¿Acta o conversación? · Minutes or conversation?', blocks: [
          { kind: 'classify', title: 'El registro · Register', categories: [
            { id: 'formal', label: 'TEXTO FORMAL · acta, informe, carta', tone: 'orange' },
            { id: 'oral', label: 'CONVERSACIÓN · chat, café', tone: 'blue' },
          ], items: [
            { text: 'La propuesta fue aprobada por unanimidad.', answer: 'formal', why: 'Ser + participio con complemento: típico de actas y noticias.' },
            { text: 'Al final la aprobaron todos, ¿eh?', answer: 'oral', why: 'Tercera persona plural impersonal y pregunta de confirmación: conversación.' },
            { text: 'Se ruega a los asistentes que respeten el turno de palabra.', answer: 'formal', why: '«Se ruega que + subjuntivo» es una fórmula de avisos oficiales.' },
            { text: 'Por favor, de uno en uno, que no se oye nada.', answer: 'oral', why: '«Que» causal coloquial y petición directa.' },
            { text: 'Es un edificio cuya fachada está protegida.', answer: 'formal', why: '«Cuyo» es propio de la escritura y del habla cuidada.' },
            { text: 'Es ese edificio que tiene la fachada protegida.', answer: 'oral', why: 'En la conversación se evita «cuyo» con «que tiene…».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'No es que el hotel es mala idea, sino que el barrio necesita otra cosa.', ok: false, options: ['No es que el hotel sea mala idea, sino que el barrio necesite otra cosa.', 'No es que el hotel sea mala idea, sino que el barrio necesita otra cosa.', 'No es que el hotel fuera mala idea, sino que el barrio necesitaría otra cosa.'], answer: 1, why: '«No es que» + subjuntivo (lo que descartas); «sino que» + indicativo (lo que afirmas).' },
            { sentence: 'Si el ayuntamiento habría comprado la estación antes, hoy estaría restaurada.', ok: false, options: ['Si el ayuntamiento hubiera comprado la estación antes, hoy estaría restaurada.', 'Si el ayuntamiento comprara la estación antes, hoy estaría restaurada.', 'Si el ayuntamiento hubiera comprado la estación antes, hoy esté restaurada.'], answer: 0, why: 'Después de «si», pluscuamperfecto de subjuntivo; el efecto de hoy, en condicional simple.' },
            { sentence: 'Se escuchó a todos los vecinos que pidieron la palabra.', ok: true, why: 'Correcta: se impersonal con «a» de persona, siempre en singular.' },
            { sentence: 'Las propuestas fueron presentado en marzo.', ok: false, options: ['Las propuestas fue presentada en marzo.', 'Las propuestas fueron presentadas en marzo.', 'Las propuestas se fueron presentadas en marzo.'], answer: 1, why: 'En la pasiva con ser, el participio concuerda con el sujeto: presentadas.' },
            { sentence: 'Elena nos pidió que firmamos la propuesta antes del viernes.', ok: false, options: ['Elena nos pidió firmamos la propuesta antes del viernes.', 'Elena nos pidió que firmáramos la propuesta antes del viernes.', 'Elena nos pidió que firmaríamos la propuesta antes del viernes.'], answer: 1, why: 'Petición transmitida en pasado: imperfecto de subjuntivo.' },
            { sentence: 'Es una propuesta que todos estamos de acuerdo.', ok: false, options: ['Es una propuesta de la que todos estamos de acuerdo.', 'Es una propuesta con la que todos estamos de acuerdo.', 'Es una propuesta que todos estamos de acuerdo con ella.'], answer: 1, why: '«Estar de acuerdo con algo»: la preposición «con» va delante del relativo.' },
          ] },
        ] },
        { title: 'El chat de la asociación · The association’s group chat', blocks: [
          { kind: 'chat-fill', title: 'Chat de la asociación · The association’s chat', lines: [
            { who: 'Elena', text: '¡Gracias por venir anoche! ___ unas ciento veinte personas, ¿no?', options: ['Hubiera', 'Habrá', 'Habría'], answer: 2, why: 'La sesión fue anoche: suposición sobre el pasado, había → habría.' },
            { who: 'Daniela', text: 'Por lo menos. Y no creo que la comisión ___ lo que dijo la sala.', options: ['ignora', 'ignorará', 'ignore'], answer: 2, why: 'Opinión negada: no creo que + subjuntivo.' },
            { who: 'Elena', text: 'Ojalá. Si hubiéramos llevado los planos, anoche ___ más fácil explicar las fases.', options: ['habría sido', 'sería', 'fuera'], answer: 0, why: 'Condición y resultado en el pasado (la sesión ya pasó): condicional compuesto.' },
            { who: 'Daniela', text: 'Para la próxima. Mañana mando el resumen a la radio ___ colaboro.', options: ['en la que', 'la que', 'que'], answer: 0, why: '«Colaborar en una radio»: en + la que.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'es', 'que', 'estemos', 'en', 'contra,', 'sino', 'que', 'faltan', 'datos.'], accept: ['No es que estemos en contra, sino que faltan datos.'], en: 'It’s not that we’re against it; it’s that there isn’t enough data.' },
            { tiles: ['Si', 'se', 'hubiera', 'restaurado', 'antes,', 'hoy', 'no', 'estaría', 'en', 'ruinas.'], accept: ['Si se hubiera restaurado antes, hoy no estaría en ruinas.'], en: 'If it had been restored earlier, it wouldn’t be in ruins today.' },
            { tiles: ['Es', 'un', 'edificio', 'cuya', 'fachada', 'está', 'protegida'], accept: ['Es un edificio cuya fachada está protegida'], en: 'It’s a building whose façade is listed.' },
          ] },
        ] },
        { title: 'Reformula para el acta · Rephrase for the minutes', blocks: [
          { kind: 'rewrite', title: 'Del habla al texto formal · From speech to formal text', items: [
            { prompt: 'El ayuntamiento compró la estación en 2022.', instruction: 'Pasiva con ser + participio. Empieza con «La estación…».', accept: ['La estación fue comprada por el ayuntamiento en 2022', 'La estación fue comprada en 2022 por el ayuntamiento'] },
            { prompt: 'Sergio: «Mi empresa invertirá tres millones».', instruction: 'Estilo indirecto en pasado. Empieza con «Sergio dijo que…».', accept: ['Sergio dijo que su empresa invertiría tres millones', 'Sergio dijo que su empresa iba a invertir tres millones'] },
            { prompt: 'La biblioteca quizá sea cara. Aun así, la apoyamos.', instruction: 'Une las dos ideas con «aunque» al principio.', accept: ['Aunque la biblioteca sea cara, la apoyamos', 'Aunque sea cara, apoyamos la biblioteca'] },
            { prompt: 'Probablemente Sergio ya ha hablado con la concejala.', instruction: 'Sin «probablemente»: usa el futuro compuesto.', accept: ['Sergio ya habrá hablado con la concejala', 'Sergio habrá hablado ya con la concejala', 'Ya habrá hablado Sergio con la concejala'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta en tres frases una decisión polémica de su trabajo o de su barrio: una con pasiva, una con concesión y una con «si».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Monteluz Joven', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Un programa de radio · A radio slot', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota una frase que cita, una que supone, una que imagina y una que concede. Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota una frase que cita, una que supone, una que imagina y una que concede. (Listen once for the gist, then note one example of each tool.)' } },
          { kind: 'listen', title: 'Monteluz Joven', channel: 'RADIO MONTELUZ · SECCIÓN «MONTELUZ JOVEN»', src: '/audio/grammar-live/466.mp3',
            before: 'Dos días después de la sesión, Daniela presenta su sección semanal en la radio local. ¿Crees que será neutral o dará su opinión? (Two days after the session, Daniela hosts her weekly radio slot. Will she stay neutral or give her opinion?)',
            gist: { prompt: '¿Qué hace Daniela en el programa? · What does Daniela do on the show?', options: ['Entrevista a la concejala de Cultura.', 'Resume la sesión, da su opinión y anima a participar.', 'Anuncia que el hotel ya está aprobado.'], answer: 1, why: 'Cuenta lo que pasó, dice que no cree que el empleo lo sea todo y pide a los oyentes que participen.', en: 'She sums up the session, gives her view and encourages listeners to take part.' },
            details: [
              { prompt: '¿Cuántas personas fueron a la sesión, según Daniela?', options: ['Unas ciento veinte, más o menos.', 'Menos de cincuenta.', 'Exactamente cien.'], answer: 0, why: '«Habría unas ciento veinte personas»: es una suposición, no un número exacto.', en: 'How many people attended, according to Daniela?' },
              { prompt: '¿Qué piensa Daniela del argumento del empleo?', options: ['Que pesa, pero no lo es todo.', 'Que es falso.', 'Que es lo único importante.'], answer: 0, why: '«Es verdad que el dato pesa. Sin embargo, no creo que el empleo lo sea todo».', en: 'What does Daniela think of the jobs argument?' },
              { prompt: '¿Qué pidió la concejala a los asistentes?', options: ['Que firmaran contra el hotel.', 'Que llamaran a la radio.', 'Que tuvieran paciencia.'], answer: 2, why: '«Nos pidió que tuviéramos paciencia».', en: 'What did the councillor ask the audience to do?' },
              { prompt: '¿Qué pueden hacer los oyentes hasta el día treinta?', options: ['Visitar la estación por dentro.', 'Enviar propuestas por escrito.', 'Votar en el ayuntamiento.'], answer: 1, why: '«Se pueden enviar propuestas por escrito hasta el día treinta».', en: 'What can listeners do until the thirtieth?' },
            ],
            transcript: 'Buenas tardes y bienvenidos a «Monteluz Joven». Hoy les cuento qué pasó el jueves en el ayuntamiento, porque muchos de ustedes no pudieron venir. [[Habría|violet]] unas ciento veinte personas en el salón de plenos, algo que no se veía desde hacía años. Se debatían dos proyectos para la antigua estación, que [[fue cerrada|orange]] en 2009: una biblioteca con centro juvenil y un hotel. El empresario Sergio Paredes [[dijo que|violet]] su proyecto [[crearía|violet]] treinta empleos, y es verdad que el dato pesa. Sin embargo, [[no creo que|blue]] el empleo lo [[sea|blue]] todo. [[Aunque el hotel se construyera|blue]] mañana, los jóvenes [[seguiríamos|blue]] sin un lugar donde estudiar. Y [[si la estación se hubiera restaurado|teal]] a tiempo, hoy no [[estaríamos|teal]] hablando de ruinas. La concejala Ibarra [[nos pidió que tuviéramos|violet]] paciencia y [[aseguró que|violet]] la decisión [[se anunciaría|violet]] en junio. Mientras tanto, [[se pueden enviar|orange]] propuestas por escrito hasta el día treinta. Así que ya saben: escriban, firmen y, sobre todo, vengan a la próxima sesión. Esto ha sido «Monteluz Joven». Hasta el martes.',
            reply: { teacher: 'Tú eres Sergio y llamas a la radio para responder a Daniela. Tu alumno es Daniela: concede uno de tus argumentos y lo rebate con «ahora bien» o «sin embargo».', self: 'Imagina que llamas al programa. Responde a Daniela en voz alta: cita una de sus frases («Daniela dijo que…»), concede algo y da tu opinión. (Call in and reply to Daniela aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Debate estructurado', coach: 'Postura, concesión, hipótesis, datos, citas.',
      steps: [
        { title: 'El pleno de Monteluz · The Monteluz debate', blocks: [
          { kind: 'guide', text: { teacher: 'Tú defiendes el proyecto contrario al de tu alumno. Cada tarjeta es un turno del debate. Si tu alumno elige una estructura que no corresponde, tú repites la frase corregida y sigues con la repregunta.', self: 'Elige un proyecto y defiéndelo en voz alta, tarjeta por tarjeta. En cada respuesta usa al menos dos herramientas distintas. (Pick a side and use at least two tools per answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Abre el debate: ¿biblioteca u hotel? Da tu postura y rechaza la contraria. · Open the debate: state your position and reject the other one.', followUps: ['¿Cuál es tu argumento más fuerte?', '¿Qué es lo que no te convence del otro proyecto?'], phrases: ['Creo que… + indicativo', '[[No creo que|blue]]… + subjuntivo', '[[No es que|blue]]…, sino que…'], hint: 'Afirmas con indicativo; niegas o descartas con subjuntivo.', example: 'Creo que la estación debe seguir siendo pública. No es que el turismo me parezca malo, sino que Monteluz ya tiene tres hoteles y ninguna sala de estudio. No creo que otro hotel cambie la vida del barrio.' },
            { q: 'Tu rival dice que su proyecto crea treinta empleos. Concédele algo y objeta. · Your opponent says their project creates thirty jobs: concede and object.', followUps: ['¿Y si los empleos fueran temporales?', '¿Qué tipo de empleo crearía tu proyecto?'], phrases: ['[[Aunque|blue]]… + subjuntivo', '[[Por mucho que|blue]]…', '[[Ahora bien|orange]]…', '[[Será|violet]]…, pero…'], hint: 'Primero aceptas el dato, después lo relativizas con un conector.', example: 'Aunque el hotel cree treinta empleos, serán sobre todo de temporada. Será un buen negocio, pero por mucho que traiga turistas, los vecinos no ganarán un espacio común. Ahora bien, si el hotel incluyera una sala pública, lo pensaría.', next: 'Ahora, el pasado que no fue.' },
            { q: '¿Qué habría pasado si la estación se hubiera restaurado en 2010? ¿Cómo sería hoy el barrio? · What if the station had been restored in 2010?', followUps: ['¿Quién tuvo la culpa de esperar tanto?', '¿Qué harías tú si fueras alcalde o alcaldesa?'], phrases: ['[[Si se hubiera…|teal]], hoy + condicional', '[[Si se hubiera…|teal]], + habría + participio', '[[Si tuviéramos|teal]]…, + condicional'], hint: 'Decide cada mitad: ¿la condición es pasada? ¿El efecto es de hoy o de entonces?', example: 'Si se hubiera restaurado en 2010, se habría ahorrado mucho dinero y hoy el barrio tendría un centro cultural. Si yo fuera alcaldesa, empezaría la obra este mismo año, aunque fuera por fases.' },
            { q: 'Explica la historia del edificio a alguien que acaba de llegar a Monteluz, con tono de guía o de informe. · Explain the building’s history formally to a newcomer.', followUps: ['¿Por qué se cerró?', '¿Qué proyectos se han presentado?'], phrases: ['[[fue construida / fue cerrada|orange]]…', '[[se han presentado|orange]]…', 'un edificio [[cuyo / cuya|orange]]…', '[[en el que|orange]] / [[lo cual|orange]]…'], hint: 'Pasiva y se cuando el protagonista no importa; relativos para no repetir.', example: 'La estación fue construida en 1912 y fue cerrada en 2009, cuando se suprimió la línea. Es un edificio cuya fachada está protegida, lo cual impide derribarlo. El ayuntamiento la compró en 2022 y desde entonces se han presentado tres proyectos, de los cuales quedan dos.', next: 'Ahora, lo que dijeron los demás.' },
            { q: 'Un vecino no pudo ir a la sesión. Cuéntale qué dijo y pidió cada uno, y supón cómo terminará todo. · Tell a neighbour who missed it what was said, and guess how it will end.', followUps: ['¿Qué prometió la concejala?', '¿Qué crees que decidirá la comisión?'], phrases: ['[[dijo que|violet]] + condicional', '[[pidió que|violet]] + imperfecto de subjuntivo', '[[Habría|violet]]… · [[Habrá|violet]]…'], hint: 'Estilo indirecto en pasado; para lo que no sabes, futuro o condicional de probabilidad.', example: 'Habría más de cien personas. Sergio dijo que su hotel crearía treinta empleos, y Elena respondió que la obra se podía hacer por fases. La concejala nos pidió que tuviéramos paciencia y dijo que la decisión se anunciaría en junio. La comisión ya habrá empezado a leer los informes.' },
            { q: 'Piensa en un edificio o un espacio sin uso en tu ciudad. ¿Qué harías con él? Defiéndelo ante el pleno. · A disused building in your town: what would you do with it?', followUps: ['¿Quién se opondría y por qué?', '¿Cómo lo pagarías?'], phrases: ['[[Si se convirtiera|teal]] en…', '[[Aunque|blue]]…', '[[Por lo tanto|orange]]…', '[[No creo que|blue]]…'], hint: 'Combina al menos cuatro herramientas: opinión, concesión, hipótesis y un conector de conclusión.', example: 'En mi ciudad hay un antiguo cine, cerrado desde hace diez años. Si se convirtiera en un centro de música, los jóvenes tendrían dónde ensayar. Aunque la reforma sea cara, no creo que haya una inversión más útil. Por lo tanto, propongo que el ayuntamiento lo compre.', teacher: 'Tú haces de concejal escéptico y respondes a cada argumento con una objeción. Tu alumno concede y rebate.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno modera el debate y tú defiendes una postura con algún error a propósito («No creo que es caro», «Se presentó tres proyectos»). Tu alumno lo detecta y lo corrige.', self: 'Ahora defiende la postura contraria en voz alta con las mismas tarjetas. (Now argue for the other side.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Carta al director', coach: 'Hechos, postura, concesión, conclusión.',
      steps: [
        { title: 'Una carta al periódico local · A letter to the local paper', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos el texto con el mapa de Entender: ¿qué herramienta usa cada frase? Después tu alumno lee la carta en voz alta como si la leyera en el pleno.', self: 'Escribe tu carta y toca «Revisar mi texto». Después repasa cada frase con el mapa de Entender: ¿qué herramienta usa? (Check each sentence against the map.)' } },
          { kind: 'write', title: 'Carta al director · Letter to the editor', situation: 'Eres vecino o vecina de Monteluz (o de tu ciudad, con un espacio real). Escribes una carta al director de «El Diario de Monteluz» para defender tu postura sobre la antigua estación antes de que se tome la decisión. (Write a letter to the editor of the local paper defending your position before the decision is made.)', task: [
            'Presenta los hechos de forma objetiva, con al menos una pasiva o una construcción con «se».',
            'Da tu opinión y rechaza la contraria con «no creo que» o «no es que… sino que».',
            'Concede un argumento del otro lado (aunque, a pesar de que, por mucho que) y responde con un conector (sin embargo, ahora bien, por lo tanto).',
            'Incluye una hipótesis con «si» y una relativa precisa (con preposición, «cuyo» o «lo cual»).',
            'Cita lo que dijo alguien en la sesión (dijo que…, prometió que…) y despídete con una fórmula formal.',
          ], starters: ['Señor director:', 'Le escribo como vecina del barrio…', 'La antigua estación fue…', 'No es que…, sino que…', 'Aunque…', 'Si…', 'Por todo ello, …', 'Atentamente,'],
            words: ['fue cerrada', 'se han presentado', 'no creo que', 'no es que… sino que', 'aunque', 'por mucho que', 'si se hubiera…', 'cuyo / cuya', 'en el que', 'lo cual', 'sin embargo', 'por lo tanto', 'dijo que', 'prometió que'],
            model: 'Señor director: Le escribo como vecina del barrio de la Estación, donde vivo desde hace veinte años. Como saben sus lectores, la antigua estación, [[cuya fachada|orange]] está protegida, [[fue cerrada|orange]] en 2009 y comprada por el ayuntamiento en 2022. Desde entonces [[se han presentado|orange]] tres proyectos, y en junio se elegirá uno de los dos finalistas: una biblioteca con centro juvenil o un hotel. [[No es que|blue]] me oponga al turismo, sino que creo que la estación debe seguir siendo un espacio público. [[Aunque|blue]] el proyecto hotelero tenga ventajas evidentes, [[no creo que|blue]] compense la pérdida del único edificio del barrio [[en el que|orange]] los jóvenes podrían reunirse. Por mucho que se hable de rentabilidad, una ciudad también se mide por sus servicios. Es cierto que la reforma costaría unos dos millones y medio. [[Sin embargo|orange]], la asociación propone hacerla por fases, [[lo cual|orange]] reduciría a la mitad el gasto del primer año. [[Si el edificio se hubiera restaurado|teal]] a tiempo, hoy no [[estaríamos|teal]] discutiendo sobre ruinas; no repitamos el error. En la sesión del jueves, la concejala de Cultura [[prometió que|violet]] escucharía a todos los vecinos antes de decidir. [[Por lo tanto|orange]], pido a los responsables que tengan en cuenta las dos mil firmas recogidas. Atentamente, Lucía Gómez.',
            minWords: 170,
            checks: [
              { label: 'Una opinión negada o una objeción (no creo que, no es que…)', pattern: '(?<!\\p{L})(?:no\\s+creo\\s+que|no\\s+me\\s+parece\\s+que|no\\s+pienso\\s+que|no\\s+es\\s+que|dudo\\s+que)(?!\\p{L})', tip: 'Rechaza la postura contraria: «No creo que otro hotel sea necesario».' },
              { label: 'Una concesión (aunque, a pesar de que, por mucho que…)', pattern: '(?<!\\p{L})(?:aunque|a\\s+pesar\\s+de\\s+que|por\\s+mucho\\s+que|por\\s+más\\s+que|pese\\s+a\\s+que|si\\s+bien)(?!\\p{L})', tip: 'Concede algo al otro lado: «Aunque el hotel cree empleo, …».' },
              { label: 'Una hipótesis con «si» + imperfecto o pluscuamperfecto de subjuntivo', pattern: '(?<!\\p{L})si\\s+(?:\\p{L}+\\s+){0,4}?(?:hubiera|hubieran|hubiéramos|hubiese|hubiesen|fuera|fueran|tuviera|tuvieran|tuviéramos|\\p{L}+(?:ara|aran|áramos|iera|ieran|iéramos))(?!\\p{L})', tip: 'Imagina otro resultado: «Si se hubiera restaurado a tiempo, hoy…».' },
              { label: 'Una pasiva con ser + participio o una construcción con «se»', pattern: '(?<!\\p{L})(?:fue|fueron|ha\\s+sido|han\\s+sido|será|serán)\\s+\\p{L}+(?:ad|id|iert|ech|uest|ist)[oa]s?(?!\\p{L})|(?<!\\p{L})se\\s+(?:ha|han)\\s+\\p{L}+(?:ado|ido)(?!\\p{L})', tip: 'Informa sin protagonista: «La estación fue cerrada en 2009», «Se han presentado tres proyectos».' },
              { label: 'Un relativo preciso (cuyo, preposición + el que / el cual, lo cual)', pattern: '(?<!\\p{L})(?:cuy[oa]s?|(?:en|con|de|a|por|para|sobre|sin)\\s+(?:el|la|los|las)\\s+(?:que|cual|cuales)|lo\\s+cual)(?!\\p{L})', tip: 'Une ideas sin repetir: «un edificio cuya fachada…», «lo cual reduciría el gasto».' },
              { label: 'Una cita en estilo indirecto (dijo que, prometió que, aseguró que…)', pattern: '(?<!\\p{L})(?:dijo|aseguró|explicó|afirmó|prometió|pidió|recordó|anunció)\\s+(?:\\p{L}+\\s+){0,3}?que(?!\\p{L})', tip: 'Cita a alguien de la sesión: «La concejala prometió que escucharía…».' },
              { label: 'Un conector formal (sin embargo, no obstante, ahora bien, por lo tanto…)', pattern: '(?<!\\p{L})(?:sin\\s+embargo|no\\s+obstante|ahora\\s+bien|por\\s+lo\\s+tanto|por\\s+tanto|en\\s+cambio|por\\s+consiguiente)(?!\\p{L})', tip: 'Organiza el argumento: «Sin embargo, …», «Por lo tanto, …».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})no\\s+(?:creo|pienso|me\\s+parece)\\s+que\\s+(?:\\p{L}+\\s+){0,2}?(?:es|son|está|están|tiene|tienen|hay|va|van|puede|pueden|necesita|necesitan|debe|deben)(?!\\p{L})', why: 'Después de **no creo que** va subjuntivo: «no creo que **sea**», «no creo que **haya**».' },
              { pattern: '(?<!\\p{L})no\\s+es\\s+que\\s+(?:\\p{L}+\\s+){0,2}?(?:es|está|estoy|estamos|tiene|tengo|hay|quiero|queremos|opongo)(?!\\p{L})', why: '**No es que** pide subjuntivo: «no es que me **oponga**, sino que…».' },
              { pattern: '(?<!\\p{L})si\\s+(?:\\p{L}+\\s+){0,3}?(?:habría|habrían|habríamos|sería|serían|tendría|tendrían|podría|podrían|estaría|estarían)(?!\\p{L})', why: 'Después de **si** no va condicional: «si **se hubiera** restaurado», «si **tuviéramos** dinero».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial de B2', coach: '¿Qué te llevas de B2? What do you take away from B2?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'OPINAR Y CONCEDER', formula: 'afirmo → indicativo · niego, descarto, no importa → subjuntivo', example: 'No es que esté en contra, sino que no hay dinero. Aunque sea caro, merece la pena.', caption: 'no creo que, no es que, aunque, por mucho que', en: 'assert with the indicative; deny, rule out or play down with the subjunctive' },
            { tone: 'teal', label: 'IMAGINAR', formula: 'si + imperf. / pluscuamp. de subj. → condicional simple / compuesto', example: 'Si se hubiera restaurado a tiempo, hoy no estaría en ruinas.', caption: 'cada mitad, su tiempo', en: 'choose the time of the condition and the time of the result separately; mixed conditionals are normal' },
            { tone: 'orange', label: 'INFORMAR Y PRECISAR', formula: 'ser + participio · se que concuerda · cuyo · prep. + el que · lo cual', example: 'Se han presentado tres proyectos para un edificio cuya fachada está protegida.', caption: 'el registro formal', en: 'hide the agent and join ideas precisely: the backbone of formal writing' },
            { tone: 'violet', label: 'CITAR Y SUPONER', formula: 'dijo que + tiempo retrocedido · pidió que + subj. · habrá / habría', example: 'Prometió que escucharía a los jóvenes. Habría unas ciento veinte personas.', caption: 'la voz de otros y tus conjeturas', en: 'report what others said or asked, and guess what you don’t know' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'En B2 ya no basta con conjugar bien: hay que **elegir**. Antes de cada frase, pregúntate qué quieres hacer: ¿afirmar o rechazar? ¿Conceder? ¿Imaginar? ¿Informar sin protagonista? ¿Citar o suponer? La intención decide la estructura, y la estructura decide el modo y el tiempo.', en: 'At B2, conjugating correctly is no longer enough: you have to choose. Before each sentence, ask yourself what you want to do. The intention decides the structure, and the structure decides the mood and tense.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'No me parece que la propuesta ___ suficientemente clara.', options: ['será', 'es', 'sea'], answer: 2, why: 'Opinión negada: subjuntivo.', en: 'I don’t think the proposal is clear enough.' },
            { prompt: 'Si nos hubieran avisado antes, ahora ___ preparados.', options: ['habríamos estado', 'estaríamos', 'estuviéramos'], answer: 1, why: 'Causa pasada, efecto presente («ahora»): condicional simple.', en: 'If they had told us earlier, we would be ready now.' },
            { prompt: 'El nuevo reglamento ___ aprobado ayer por el consejo.', options: ['fue', 'se fue', 'era'], answer: 0, why: 'Pasiva con ser + participio para un hecho puntual del pasado: fue aprobado.', en: 'The new regulations were approved by the board yesterday.' },
            { prompt: 'El director nos pidió que ___ los informes antes del viernes.', options: ['entregáramos', 'entregaríamos', 'entregamos'], answer: 0, why: 'Petición transmitida en pasado: imperfecto de subjuntivo.', en: 'The director asked us to hand in the reports before Friday.' },
            { prompt: 'Es una ciudad ___ calles se inundan cada otoño.', options: ['cuyas', 'cuyos', 'que sus'], answer: 0, why: '«Cuyas» concuerda con «calles».', en: 'It’s a town whose streets flood every autumn.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en un colegio. Now, at a school.', blocks: [
          { kind: 'lead', text: 'El consejo escolar de un colegio debate si se prohíbe el móvil durante toda la jornada. Rosa, la secretaria, tiene que pasar al acta lo que se dijo. Transforma sus notas.', en: 'A school board is debating whether to ban mobile phones for the whole school day. Rosa, the secretary, has to turn what was said into formal minutes. Transform her notes.' },
          { kind: 'rewrite', title: 'Las notas de Rosa · Rosa’s notes', items: [
            { prompt: 'El director: «Presentaré el reglamento en la próxima reunión».', instruction: 'Estilo indirecto en pasado. Empieza con «El director dijo que…».', accept: ['El director dijo que presentaría el reglamento en la próxima reunión', 'El director dijo que presentaría el reglamento en la reunión siguiente'] },
            { prompt: 'Los profesores aprobaron la propuesta por mayoría.', instruction: 'Pasiva con ser + participio. Empieza con «La propuesta…».', accept: ['La propuesta fue aprobada por mayoría por los profesores', 'La propuesta fue aprobada por los profesores por mayoría'] },
            { prompt: 'Una madre: «Creo que la prohibición funciona».', instruction: 'Niega la opinión. Empieza con «No creo que…».', accept: ['No creo que la prohibición funcione'] },
          ] },
        ] },
        { title: 'Ampliación · Lo que añadirá C1 · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. En C1 tus herramientas se vuelven más finas: **de + infinitivo compuesto** sustituye a una condición pasada («**De haberlo sabido**, habríamos traído los planos» = si lo hubiéramos sabido); **habría + participio** supone algo anterior a otro pasado («Cuando llegó la concejala, Sergio ya **habría hablado** con ella»); y la **concordancia de tiempos** se vuelve más compleja: «Nos **ha pedido** que **enviemos** las propuestas» frente a «Nos **pidió** que **enviáramos** las propuestas» (y verás cuándo se dice también «pidió que enviemos»).', en: 'For strong students or spare time. At C1 your tools get sharper: “de + perfect infinitive” replaces a past condition; “habría + past participle” guesses about something earlier than another past moment; and tense agreement in the subjunctive gets more complex (ha pedido que enviemos vs pidió que enviáramos).' },
          { kind: 'choice', title: 'Reconocer · Recognise', items: [
            { prompt: '«De haberlo sabido, habríamos traído los planos». ¿Qué significa?', options: ['Si lo hubiéramos sabido, habríamos traído los planos.', 'Cuando lo sepamos, traeremos los planos.', 'Como lo sabíamos, trajimos los planos.'], answer: 0, why: 'De + infinitivo compuesto = si + pluscuamperfecto de subjuntivo.', en: 'What does it mean?' },
            { prompt: '«Cuando empezó la sesión, Sergio ya habría hablado con la concejala». ¿Qué expresa?', options: ['Una condición que no se cumplió.', 'Una orden para el futuro.', 'Una suposición: probablemente ya había hablado con ella.'], answer: 2, why: 'Habría + participio de probabilidad = probablemente + pluscuamperfecto.', en: 'What does it express?' },
            { prompt: '«Nos ha pedido que enviemos las propuestas» / «Nos pidió que enviáramos las propuestas». ¿Qué cambia?', options: ['La primera es una orden y la segunda, una suposición.', 'La segunda frase es incorrecta.', 'El tiempo del verbo principal arrastra el del subjuntivo: presente con «ha pedido», pasado con «pidió».'], answer: 2, why: 'Es la concordancia de tiempos: el verbo principal orienta el tiempo del subjuntivo. En C1 verás también los casos en que se mezclan.', en: 'What changes between the two sentences?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno reformula dos condiciones del debate con «de + infinitivo compuesto».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 167 · Concordancia temporal del subjuntivo en contextos complejos', text: 'Has cerrado B2: ya debates, concedes, imaginas, informas y citas eligiendo la estructura adecuada. El primer paso de C1 retoma algo que hoy has visto muchas veces: qué tiempo del subjuntivo va después de «pidió que», «no creo que» o «aunque» cuando el verbo principal está en pasado, en presente o en condicional. En la clase 167 aprendes a controlar esa concordancia en frases largas y complejas.', en: 'You have finished B2: you can debate, concede, imagine, report facts and quote others while choosing the right structure. The first step of C1 picks up something you have seen many times today: which subjunctive tense follows “pidió que”, “no creo que” or “aunque” when the main verb is past, present or conditional. In class 167 you learn to control that agreement in long, complex sentences.', href: '/subjuntivo-pais-maravillas', label: 'Ir a la clase 167' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Aunque es caro” y “Aunque sea caro”?». Respuesta esperada: la primera da el dato como información; la segunda lo acepta y le quita importancia. Tarea: la carta al director sobre un espacio real de su ciudad.' },
        ] },
      ],
    },
  ],
};
