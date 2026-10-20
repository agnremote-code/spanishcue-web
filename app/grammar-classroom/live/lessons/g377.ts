import type { LiveLesson } from '../types';

/**
 * Lesson 377 · A2 · Conectores de secuencia y explicación (course unit G077).
 * One scene runs through the class: Inés Robles moved to a new apartment on
 * Saturday. On Monday, at the office, she tells her colleague Raúl how the day
 * went: the van arrived two hours late, the lift was not working, her brother
 * Mateo came later, it started to rain, and in the end they had pizza on the
 * floor. Later she talks to señor Paredes, the building manager (usted), and
 * writes to the moving company. In the audio Mateo (Mexican voice, tú) sends
 * Inés a voice message on Saturday morning: he is late and explains his plan.
 * Content: sequence (primero, luego / después, entonces, al final, por último)
 * and explanation: cause (porque, known from class 026; como + cause at the
 * start), consequence (por eso, así que, entonces = so) and reformulation
 * (es decir, o sea). Contrast: porque after the consequence / como before it;
 * cause → por eso / así que (direction); al final (the outcome) / por último
 * (the last item); después (alone) / después de + infinitive (class 054);
 * entonces = then / entonces = so.
 * Mistakes: *No salí como llovía, *Porque llovía, no salí (unnatural),
 * *Subimos a pie, por eso no había ascensor, *En el final, *Después de, llegó.
 * Productive demand: present, indefinido (regular + tuve, fui, hubo) and
 * imperfecto (G047–G050). Ya que, por lo tanto, en primer lugar and «es que»
 * appear only in the Ampliación, receptively and glossed.
 */
export const lesson: LiveLesson = {
  id: 377,
  level: 'A2',
  title: 'Conectores de secuencia y explicación',
  subtitle: 'Contar en orden lo que pasó y explicar por qué: «Primero llegó la furgoneta; como no había ascensor, subimos a pie».',
  legend: [
    { tone: 'blue', label: 'ORDEN · primero, luego, después, entonces, al final, por último (sequence)' },
    { tone: 'teal', label: 'CAUSA · porque, como (the reason)' },
    { tone: 'orange', label: 'CONSECUENCIA · por eso, así que, entonces (the result)' },
    { tone: 'violet', label: 'EXPLICACIÓN · es decir, o sea (in other words)' },
  ],
  optionNotes: {
    como: '«Como» (causa) va al principio, antes de la consecuencia: «Como llovía, no salí». Después de la consecuencia, usa «porque».',
    Porque: '«Porque» normalmente va después de la consecuencia: «No salí porque llovía». Al principio de la frase, lo natural es «Como».',
    'por eso': '«Por eso» presenta la consecuencia: primero va la causa, después «por eso» + el resultado.',
    'Por eso': '«Por eso» presenta la consecuencia: primero va la causa, después «por eso» + el resultado.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Ordenar y explicar', coach: '¿En qué orden? ¿Por qué? In what order? Why?',
      steps: [
        { title: 'El día de la mudanza · Moving day', blocks: [
          { kind: 'lead', text: 'Es lunes. Inés Robles llega a la oficina muy cansada: el sábado cambió de casa. Su compañero Raúl le pregunta qué tal la mudanza, e Inés cuenta: «**Primero**, la furgoneta llegó tarde. **Como** el ascensor no funcionaba, subimos todo a pie. **Al final**, cenamos pizza en el suelo. Hoy me duele la espalda, **por eso** tomo tanto café». Hoy aprendes las palabras que **ordenan** una historia y las que **explican** por qué pasan las cosas.', en: 'It’s Monday. Inés Robles arrives at the office very tired: she moved house on Saturday. Her colleague Raúl asks how the move went, and Inés tells him. Today you learn the words that put a story in order and the words that explain why things happen.' },
          { kind: 'guide', text: { teacher: 'Tú lees la historia de Inés y tu alumno repite cada palabra marcada. Después tu alumno cuenta el orden de los hechos con sus palabras: «Primero…, luego…».', self: 'Lee la historia en voz alta. Después cuenta el orden de los hechos con tus palabras: «Primero…, luego…». (Read aloud, then retell the order.)' } },
          { kind: 'concept', tone: 'blue', label: 'ORDEN · SECUENCIA', question: '¿Qué pasó primero? ¿Y después?', en: 'What happened first? And then?', formula: ['primero → luego / después → entonces → al final / por último', 'conector (+ coma) + frase con verbo conjugado'],
            meaning: 'Estas palabras **ordenan** las acciones de una historia, de un plan o de unas instrucciones. Normalmente van al principio de la frase y después va un verbo conjugado: «Luego **llegó** mi hermano».',
            examples: [
              { es: '[[Primero|blue]], la furgoneta llegó tarde.', en: 'First, the van arrived late.' },
              { es: '[[Luego|blue]] llegó mi hermano Mateo.', en: 'Then my brother Mateo arrived.' },
              { es: '[[Después|blue]], subimos el sofá entre cuatro personas.', en: 'After that, four of us carried the sofa upstairs.' },
              { es: 'Estábamos en la calle y [[entonces|blue]] empezó a llover.', en: 'We were in the street and then (at that moment) it started to rain.' },
              { es: '[[Al final|blue]], cenamos pizza en el suelo.', en: 'In the end, we had pizza on the floor.' },
            ],
            note: '**Luego** y **después** significan lo mismo aquí (then, after that): puedes alternarlos para no repetir.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Primero, la furgoneta llegó tarde. Luego llegó Mateo.» ¿Qué pasó antes?', options: ['Llegó la furgoneta.', 'Llegó Mateo.', 'Las dos cosas a la vez.'], answer: 0, why: '«Primero» marca el hecho número uno; «luego», el siguiente.', en: 'Which happened first?' },
            { prompt: '«___, cenamos pizza en el suelo.» Inés cuenta cómo terminó el día.', options: ['Primero', 'Al final', 'Como'], answer: 1, why: '«Al final» presenta cómo terminó la historia: in the end.', en: '“___, we had pizza on the floor.” Inés says how the day ended.' },
          ] },
        ] },
        { title: 'Al final, por último, después · In the end, lastly, after that', mascot: '/brand/mascot/studying.webp', coach: 'El resultado o el último paso. The outcome or the last step.', blocks: [
          { kind: 'compare', title: 'Dos maneras de terminar · Two ways to finish', columns: [
            { tone: 'blue', label: 'POR ÚLTIMO · el último paso', sentence: 'Primero, se cierra la caja; luego, se pone cinta y, [[por último|blue]], se escribe «cocina».', idea: 'El último elemento de una lista: instrucciones, un plan, varias acciones en orden.', en: 'Lastly: the last item in a list (instructions, a plan, steps).' },
            { tone: 'blue', label: 'AL FINAL · el resultado', sentence: 'Hubo muchos problemas, pero [[al final|blue]] todo salió bien.', idea: 'Cómo terminó la historia, muchas veces después de problemas o de un cambio de plan.', en: 'In the end: how things turned out, often after problems or a change of plan.' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Después» y «después de» · “Después” and “después de”', text: 'Ya conoces «**después de** + infinitivo» (clase 054): «Después de comer, subimos las cajas». **Sin «de»**, «después» va solo y después viene una frase completa: «Comimos. **Después**, subimos las cajas». Lo mismo con «al final de» + un nombre: «**al final de** la calle», «**al final del** día».', en: 'You already know “después de” + infinitive (class 054). Without “de”, “después” stands alone and a full sentence follows: “Comimos. Después, subimos las cajas.” The same goes for “al final de” + a noun: at the end of the street, at the end of the day.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Para cerrar una caja: primero, la llenas; luego, pones cinta; ___, escribes qué hay dentro.', options: ['por último', 'como', 'es decir'], answer: 0, why: 'Es el último paso de unas instrucciones: «por último».', en: 'To close a box: first you fill it; then you tape it; lastly, you write what’s inside.' },
            { prompt: 'Queríamos ir en coche, pero el coche no arrancó. ___, fuimos en autobús.', options: ['Como', 'Al final', 'Primero'], answer: 1, why: 'Hubo un problema y un cambio de plan: el resultado va con «al final».', en: 'We wanted to go by car, but the car didn’t start. In the end, we went by bus.' },
            { prompt: 'Mateo comió y ___ subió las últimas cajas.', options: ['como', 'después', 'después de'], answer: 1, why: 'Después va una frase completa (subió…): «después», sin «de».', en: 'Mateo ate and then carried the last boxes up.' },
          ] },
        ] },
        { title: 'La causa: porque y como · The reason: porque and como', mascot: '/brand/mascot/speaking.webp', coach: '¿La razón va antes o después? Does the reason come first or second?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CAUSA · PORQUE Y COMO', question: '¿Por qué pasó?', en: 'Why did it happen?', formula: ['consecuencia + porque + causa', 'Como + causa, consecuencia'],
            meaning: 'Ya conoces **porque** (clase 026): presenta la razón y normalmente va **después** de la consecuencia. **Como** también presenta la razón, pero va **al principio** de la frase; después de la causa va una coma y la consecuencia.',
            examples: [
              { es: 'Subimos todo a pie [[porque|teal]] el ascensor no funcionaba.', en: 'We carried everything up on foot because the lift wasn’t working.' },
              { es: '[[Como|teal]] el ascensor no funcionaba, subimos todo a pie.', en: 'As the lift wasn’t working, we carried everything up on foot.' },
              { es: 'Mateo llegó tarde [[porque|teal]] su coche no arrancó.', en: 'Mateo arrived late because his car didn’t start.' },
              { es: '[[Como|teal]] Mateo no tenía coche, fue en autobús.', en: 'As Mateo didn’t have a car, he went by bus.' },
            ],
            note: '«Como» tiene otros usos: «como siempre» (as always), «yo como pasta» (I eat). Es causa cuando va al principio y presenta la razón de lo que viene después.' },
          { kind: 'tip', icon: '🔑', title: 'Because… al principio · “Because…” at the start', text: 'En inglés puedes empezar con «Because the lift wasn’t working, …». En español, al principio de la frase lo natural es **como**: «**Como** el ascensor no funcionaba, subimos a pie». Y «como» causal **no** va después: no se dice «Subimos a pie como no funcionaba».', en: 'In English you can start with “Because…”. In Spanish, at the start of the sentence the natural choice is “como”. And causal “como” does not go after the result.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ no tenía coche, Mateo fue en autobús.', options: ['Así que', 'Como', 'Porque'], answer: 1, why: 'La causa va al principio de la frase: «Como…», coma, y la consecuencia.', en: 'As he didn’t have a car, Mateo went by bus.' },
            { prompt: 'Mateo fue en autobús ___ no tenía coche.', options: ['como', 'por eso', 'porque'], answer: 2, why: 'Primero la consecuencia (fue en autobús), después la razón: «porque».', en: 'Mateo went by bus because he didn’t have a car.' },
          ] },
        ] },
        { title: 'La consecuencia: por eso, así que · The result: por eso, así que', mascot: '/brand/mascot/standing.webp', coach: 'Primero la causa, después el resultado. Cause first, result second.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONSECUENCIA · POR ESO, ASÍ QUE', question: '¿Y qué pasó por eso?', en: 'And what happened as a result?', formula: ['causa + , por eso + consecuencia', 'causa + , así que + consecuencia'],
            meaning: 'Aquí el orden es al revés: primero dices **la causa** y después **el resultado**. «Por eso» puede empezar también una frase nueva: «Me duele la espalda. **Por eso** tomo café». «Así que» es muy frecuente en la conversación.',
            examples: [
              { es: 'Me duele la espalda, [[por eso|orange]] tomo tanto café.', en: 'My back hurts, that’s why I’m drinking so much coffee.' },
              { es: 'Empezó a llover, [[así que|orange]] subimos las cajas muy rápido.', en: 'It started to rain, so we carried the boxes up very fast.' },
              { es: 'La furgoneta llegó tarde. [[Por eso|orange]] Inés esperó dos horas en la calle.', en: 'The van arrived late. That’s why Inés waited two hours in the street.' },
            ] },
          { kind: 'table', title: 'Un hecho, cuatro conectores · One fact, four connectors', head: ['Conector', 'Orden', 'Ejemplo'], rows: [
            ['[[porque|teal]]', 'consecuencia + porque + causa', 'Subimos a pie **porque** no había ascensor.'],
            ['[[como|teal]]', 'Como + causa, consecuencia', '**Como** no había ascensor, subimos a pie.'],
            ['[[por eso|orange]]', 'causa, por eso + consecuencia', 'No había ascensor, **por eso** subimos a pie.'],
            ['[[así que|orange]]', 'causa, así que + consecuencia', 'No había ascensor, **así que** subimos a pie.'],
          ], note: 'Las cuatro frases cuentan lo mismo. Cambia el orden de las ideas: la causa primero (como, por eso, así que) o la consecuencia primero (porque).' },
          { kind: 'decide', title: '¿Qué conector uso? · Which connector?', steps: [
            { q: '¿Ya dijiste lo que pasó y ahora das la razón? (Did you say what happened, and now you give the reason?)', yes: 'Usa **porque**: «Subimos a pie porque no había ascensor».', no: 'next' },
            { q: '¿Empiezas la frase con la razón? (Do you start with the reason?)', yes: 'Usa **como** + razón + coma: «Como no había ascensor, subimos a pie».', no: 'next' },
            { q: '¿Ya dijiste la razón y ahora das el resultado? (Did you give the reason, and now the result?)', yes: 'Usa **por eso** o **así que**: «No había ascensor, así que subimos a pie».', no: 'Si dices la misma idea con otras palabras, usa **es decir** u **o sea** (siguiente paso).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El ascensor no funcionaba, ___ subimos por la escalera.', options: ['porque', 'como', 'así que'], answer: 2, why: 'Primero la causa (no funcionaba), después el resultado: «así que».', en: 'The lift wasn’t working, so we went up the stairs.' },
            { prompt: 'Hoy estoy cansada. ___ tomo tanto café.', options: ['Por eso', 'Porque', 'Como'], answer: 0, why: 'La causa ya está en la frase anterior; ahora va el resultado: «Por eso».', en: 'I’m tired today. That’s why I’m drinking so much coffee.' },
          ] },
        ] },
        { title: 'Es decir, o sea, entonces · In other words, so', mascot: '/brand/mascot/seated.webp', coach: 'Decirlo más claro. Say it more clearly.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'EXPLICACIÓN · ES DECIR, O SEA', question: '¿Qué quieres decir exactamente?', en: 'What do you mean exactly?', formula: ['idea + , es decir, + la misma idea más clara', 'idea + , o sea, + la misma idea más clara'],
            meaning: 'Con «es decir» y «o sea» repites una idea **con otras palabras** para aclararla o dar un dato concreto. «O sea» es más **coloquial**: es muy frecuente al hablar. «Es decir» sirve al hablar y al escribir.',
            examples: [
              { es: 'La furgoneta llegó a las once, [[es decir|violet]], con dos horas de retraso.', en: 'The van arrived at eleven, that is, two hours late.' },
              { es: 'Vivo en el quinto piso, [[o sea|violet]], muchas escaleras.', en: 'I live on the fifth floor, I mean, lots of stairs.' },
              { es: 'La mudanza es el sábado 14, [[es decir|violet]], este sábado.', en: 'The move is on Saturday the 14th, in other words, this Saturday.' },
            ] },
          { kind: 'compare', title: 'Entonces: dos usos · Entonces: two uses', columns: [
            { tone: 'blue', label: 'ENTONCES · orden (then)', sentence: 'Estábamos cansados y [[entonces|blue]] empezó a llover.', idea: 'En una historia: en ese momento, a continuación.', en: 'Then, at that moment: the next thing in a story.' },
            { tone: 'orange', label: 'ENTONCES · consecuencia (so)', sentence: '—El ascensor no funciona. —[[Entonces|orange]] subimos a pie.', idea: 'En una conversación: sacas una conclusión de lo que dice la otra persona.', en: 'So: you draw a conclusion from what the other person says.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La reunión es el lunes 21, ___, el próximo lunes.', options: ['por eso', 'porque', 'es decir'], answer: 2, why: 'Repites la fecha con otras palabras para aclararla: «es decir».', en: 'The meeting is on Monday the 21st, that is, next Monday.' },
            { prompt: '—No tengo las llaves del apartamento nuevo. —___ te espero en el café de la esquina.', options: ['Primero', 'Como', 'Entonces'], answer: 2, why: 'Una conclusión de lo que dice la otra persona: «entonces» (so).', en: '“I don’t have the keys to the new apartment.” “Then I’ll wait for you at the café on the corner.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Causa o consecuencia? Cause or result?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿dónde está la causa y dónde el resultado? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿dónde está la causa y dónde está el resultado? Toca para ver la corrección. (Where is the cause, where is the result?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'No subimos en ascensor como no funcionaba.', right: 'Como no funcionaba, no subimos en ascensor. / No subimos en ascensor porque no funcionaba.', why: '«Como» causal va al principio. Después de la consecuencia, usa «porque». (Causal como comes first.)' },
            { wrong: 'Porque el ascensor no funcionaba, subimos a pie.', right: 'Como el ascensor no funcionaba, subimos a pie.', why: 'Es una traducción de «Because…». Al principio de la frase, lo natural es «como». (Start with como, not porque.)' },
            { wrong: 'Subimos a pie, por eso no había ascensor.', right: 'No había ascensor, por eso subimos a pie.', why: '«Por eso» presenta el resultado, no la causa. Primero la causa, después «por eso». (Por eso introduces the result.)' },
            { wrong: 'En el final, todo salió bien.', right: 'Al final, todo salió bien.', why: 'Es una traducción de «in the end». En español se dice «al final». (In the end = al final.)' },
            { wrong: 'Después de, llegó Mateo.', right: 'Después, llegó Mateo.', why: '«Después de» necesita un infinitivo o un nombre («después de comer»). Solo, sin «de»: «después». (Después de needs a verb or a noun.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Estaba cansada, porque me acosté temprano.', 'Como estaba cansada, me acosté temprano.', 'Me acosté temprano como estaba cansada.'], answer: 1, why: '«Como» + causa al principio, después el resultado. La frase con «porque» cambia el sentido: dice que acostarse temprano es la causa del cansancio.', en: 'Which sentence is correct?' },
            { prompt: '¿Qué frase es correcta?', options: ['En el final, todo salió bien.', 'Al final, todo salió bien.', 'Después de, todo salió bien.'], answer: 1, why: '«Al final» (in the end). «En el final» y «Después de,» no funcionan solos.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno explica algo real de hoy con dos frases: una con «como» y otra con «por eso» («Como hoy hace frío, llevo abrigo» / «Hoy hace frío, por eso llevo abrigo»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Inés cuenta la mudanza', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Un lunes en la oficina · A Monday at the office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Raúl y tu alumno es Inés. Después tu alumno toca cada palabra marcada y dice qué hace: ¿ordena, da la causa, da el resultado o explica?', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di qué hace: ¿orden, causa, consecuencia o explicación?' } },
          { kind: 'explore', title: '¿Qué tal la mudanza?', setting: 'Lunes, nueve de la mañana, en la cocina de la oficina. Raúl e Inés son compañeros y amigos; se hablan de tú. (Monday, 9 a.m., in the office kitchen. Raúl and Inés are colleagues and friends.)', lines: [
            { who: 'Raúl', text: '¡Hola, Inés! ¿Qué tal la mudanza del sábado?', en: 'Hi, Inés! How was the move on Saturday?' },
            { who: 'Inés', text: 'Uf, fue un día larguísimo. [[Primero|blue]], la furgoneta llegó a las once, [[es decir|violet]], con dos horas de retraso.', en: 'Phew, it was a really long day. First, the van arrived at eleven, that is, two hours late.' },
            { who: 'Raúl', text: '¿Dos horas? ¿Y por qué?', en: 'Two hours? Why?' },
            { who: 'Inés', text: 'No sé, nadie me explicó nada. Y [[como|teal]] el ascensor no funcionaba, los chicos de la mudanza subieron todo por la escalera.', en: 'I don’t know, nobody explained anything. And as the lift wasn’t working, the movers carried everything up the stairs.' },
            { who: 'Raúl', text: '¡Qué horror! Tú vives en el quinto piso, ¿no?', en: 'How awful! You live on the fifth floor, don’t you?' },
            { who: 'Inés', text: 'Sí, [[o sea|violet]], cien escalones con cajas. [[Luego|blue]] llegó mi hermano Mateo y subimos el sofá entre cuatro.', en: 'Yes, I mean, a hundred steps with boxes. Then my brother Mateo arrived and four of us carried the sofa up.' },
            { who: 'Raúl', text: '¿Y no llovió el sábado por la tarde?', en: 'And didn’t it rain on Saturday afternoon?' },
            { who: 'Inés', text: '¡Sí! Estábamos muy cansados y [[entonces|blue]] empezó a llover, [[así que|orange]] subimos las últimas cajas muy rápido.', en: 'Yes! We were really tired and then it started to rain, so we carried the last boxes up very fast.' },
            { who: 'Raúl', text: '¿Y cómo terminó el día?', en: 'And how did the day end?' },
            { who: 'Inés', text: '[[Al final|blue]], a las nueve, cenamos pizza en el suelo. Fue divertido. Pero hoy me duele la espalda, [[por eso|orange]] tomo tanto café.', en: 'In the end, at nine, we had pizza on the floor. It was fun. But my back hurts today, that’s why I’m drinking so much coffee.' },
            { who: 'Raúl', text: '[[Entonces|orange]] hoy no vienes al gimnasio conmigo, ¿no?', en: 'So you’re not coming to the gym with me today, are you?' },
            { who: 'Inés', text: 'No, hoy no puedo [[porque|teal]] tengo que abrir cajas: [[primero|blue]], las de la cocina; [[después|blue]], las del dormitorio y, [[por último|blue]], las del salón.', en: 'No, I can’t today because I have to unpack boxes: first the kitchen ones, then the bedroom ones and, lastly, the living-room ones.' },
          ], notes: {
            'Primero': 'El primer hecho de la historia. Después vienen «luego», «entonces», «al final».',
            'es decir': 'Inés repite «a las once» con otras palabras más claras: «con dos horas de retraso».',
            'como': 'Causa al principio de su frase, antes de la consecuencia (subieron todo por la escalera). Aquí va después de «Y», pero sigue antes del resultado.',
            'o sea': 'Más coloquial que «es decir». Inés explica qué significa el quinto piso: cien escalones.',
            'Luego': 'El siguiente hecho: then. Significa lo mismo que «después».',
            'entonces': 'Orden: en ese momento (then). Algo nuevo pasa en la historia.',
            'así que': 'Consecuencia: empezó a llover (causa) → subieron rápido (resultado).',
            'Al final': 'Cómo terminó el día, después de muchos problemas: in the end.',
            'por eso': 'Consecuencia: le duele la espalda (causa) → toma café (resultado).',
            'Entonces': 'Consecuencia (so): Raúl saca una conclusión de lo que dice Inés.',
            'porque': 'Causa después de la consecuencia: no puede ir al gimnasio → porque tiene que abrir cajas.',
            'primero': 'Aquí ordena un plan, no una historia: el orden de las cajas.',
            'después': 'Solo, sin «de»: el segundo paso del plan. Igual que «luego».',
            'por último': 'El último elemento de la lista: las cajas del salón. Lastly.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿A qué hora llegó la furgoneta?', options: ['Por la tarde, con la lluvia.', 'A las nueve, a su hora.', 'A las once, con dos horas de retraso.'], answer: 2, why: '«La furgoneta llegó a las once, es decir, con dos horas de retraso».', en: 'What time did the van arrive?' },
            { prompt: '¿Por qué subieron todo por la escalera?', options: ['Porque llovía mucho.', 'Porque el ascensor no funcionaba.', 'Porque Inés vive en un primer piso.'], answer: 1, why: '«Como el ascensor no funcionaba, los chicos subieron todo por la escalera».', en: 'Why did they carry everything up the stairs?' },
            { prompt: '¿Por qué toma Inés tanto café hoy?', options: ['Porque le duele la espalda.', 'Porque tiene que ir al gimnasio.', 'Porque no cenó.'], answer: 0, why: '«Hoy me duele la espalda, por eso tomo tanto café».', en: 'Why is Inés drinking so much coffee today?' },
          ] },
        ] },
        { title: '¿Qué hace cada conector? · What does each connector do?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las frases de Inés y Raúl · Inés and Raúl’s sentences', categories: [
            { id: 'orden', label: 'ORDEN · sequence', tone: 'blue' },
            { id: 'causa', label: 'CAUSA · reason', tone: 'teal' },
            { id: 'consecuencia', label: 'CONSECUENCIA · result', tone: 'orange' },
            { id: 'explicacion', label: 'EXPLICACIÓN · in other words', tone: 'violet' },
          ], items: [
            { text: 'Primero, la furgoneta llegó a las once.', answer: 'orden', why: '«Primero» marca el primer hecho.' },
            { text: 'Como el ascensor no funcionaba, …', answer: 'causa', why: '«Como» presenta la razón al principio.' },
            { text: '…, o sea, cien escalones con cajas.', answer: 'explicacion', why: '«O sea» repite la idea con otras palabras.' },
            { text: '…, así que subimos las últimas cajas muy rápido.', answer: 'consecuencia', why: '«Así que» presenta el resultado de la lluvia.' },
            { text: '… y entonces empezó a llover.', answer: 'orden', why: 'Aquí «entonces» es «en ese momento»: el siguiente hecho.' },
            { text: 'Entonces hoy no vienes al gimnasio, ¿no?', answer: 'consecuencia', why: 'Aquí «entonces» es «so»: Raúl saca una conclusión.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y tú? ¿Cuál fue tu última mudanza o tu último día complicado?». Tu alumno responde con dos frases: una con «primero» y otra con «como».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Orden, causa, resultado. Order, reason, result.',
      steps: [
        { title: 'El apartamento nuevo · The new apartment', blocks: [
          { kind: 'choice', items: [
            { context: 'Inés explica a Raúl cómo monta una estantería. (Inés explains how she puts a bookcase together.)', prompt: '___, abro la caja y leo las instrucciones; luego, busco las piezas.', options: ['Por eso', 'Primero', 'Al final'], answer: 1, why: 'Es el primer paso de la lista: «primero».', en: 'First, I open the box and read the instructions; then I look for the parts.' },
            { context: 'La cocina nueva. (The new kitchen.)', prompt: '___ la cocina es pequeña, Inés compra una mesa para dos personas.', options: ['Así que', 'Como', 'Por eso'], answer: 1, why: 'La causa va al principio de la frase: «Como…», coma, resultado.', en: 'As the kitchen is small, Inés buys a table for two.' },
            { context: 'El barrio nuevo. (The new neighbourhood.)', prompt: 'El apartamento está cerca de la oficina, ___ Inés ya va al trabajo a pie.', options: ['porque', 'como', 'así que'], answer: 2, why: 'Primero la causa (está cerca), después el resultado: «así que».', en: 'The apartment is close to the office, so Inés now walks to work.' },
            { context: 'El salón. (The living room.)', prompt: 'Inés quería pintar el salón de azul, pero la pintura azul era muy cara. ___, lo pintó de blanco.', options: ['Como', 'Al final', 'Primero'], answer: 1, why: 'Un cambio de plan y el resultado: «al final».', en: 'Inés wanted to paint the living room blue, but blue paint was very expensive. In the end, she painted it white.' },
            { context: 'Una fiesta para los amigos. (A party for her friends.)', prompt: 'La fiesta es el sábado 28, ___, dentro de dos semanas.', options: ['por eso', 'como', 'es decir'], answer: 2, why: 'Repites la fecha con otras palabras: «es decir».', en: 'The party is on Saturday the 28th, that is, in two weeks.' },
          ] },
        ] },
        { title: '¿Qué hace el conector? · What does the connector do?', blocks: [
          { kind: 'classify', title: 'Frases nuevas · New sentences', categories: [
            { id: 'orden', label: 'ORDEN · sequence', tone: 'blue' },
            { id: 'causa', label: 'CAUSA · reason', tone: 'teal' },
            { id: 'consecuencia', label: 'CONSECUENCIA · result', tone: 'orange' },
            { id: 'explicacion', label: 'EXPLICACIÓN · in other words', tone: 'violet' },
          ], items: [
            { text: 'Llegué a casa y entonces sonó el teléfono.', answer: 'orden', why: '«Entonces» = en ese momento: el siguiente hecho.' },
            { text: '—El ascensor no funciona. —Entonces subimos a pie.', answer: 'consecuencia', why: '«Entonces» = so: una conclusión de lo que dice la otra persona.' },
            { text: 'Como hacía frío, cerramos las ventanas.', answer: 'causa', why: '«Como» + la razón al principio.' },
            { text: 'Llegamos a las diez, es decir, una hora tarde.', answer: 'explicacion', why: '«Es decir» aclara qué significa «a las diez».' },
            { text: 'Por último, apagamos las luces y cerramos la puerta.', answer: 'orden', why: '«Por último» presenta la última acción.' },
            { text: 'Estaba cansada, así que me acosté temprano.', answer: 'consecuencia', why: '«Así que» presenta el resultado del cansancio.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Como la panadería estaba cerrada, compramos el pan en el supermercado.', ok: true, why: 'Correcta: «como» + causa al principio, coma, y el resultado.' },
            { sentence: 'Compramos el pan en el supermercado como la panadería estaba cerrada.', ok: false, options: ['Compramos el pan en el supermercado porque la panadería estaba cerrada.', 'Compramos el pan en el supermercado, así que la panadería estaba cerrada.', 'Compramos el pan en el supermercado por eso la panadería estaba cerrada.'], answer: 0, why: 'La razón va después: «porque». «Como» causal solo va al principio; «así que» y «por eso» presentan el resultado, no la causa.' },
            { sentence: 'Hacía mucho calor, porque abrimos todas las ventanas.', ok: false, options: ['Hacía mucho calor, por eso abrimos todas las ventanas.', 'Hacía mucho calor, como abrimos todas las ventanas.', 'Porque hacía mucho calor, por eso abrimos todas las ventanas.'], answer: 0, why: 'El calor es la causa y abrir las ventanas es el resultado: «por eso». Un solo conector basta.' },
            { sentence: 'En el final, encontramos un taxi.', ok: false, options: ['En final, encontramos un taxi.', 'Al final, encontramos un taxi.', 'Por el final, encontramos un taxi.'], answer: 1, why: '«In the end» en español es «al final».' },
            { sentence: 'Después de, Mateo fue a comprar la cena.', ok: false, options: ['Después, Mateo fue a comprar la cena.', 'Después que, Mateo fue a comprar la cena.', 'Después de Mateo fue a comprar la cena.'], answer: 0, why: 'Solo, sin infinitivo ni nombre detrás: «después».' },
          ] },
        ] },
        { title: 'El ascensor · The lift', blocks: [
          { kind: 'chat-fill', title: 'Martes: Inés habla con el señor Paredes, el encargado del edificio · Tuesday: Inés talks to the building manager', lines: [
            { who: 'Inés', text: 'Buenos días, señor Paredes. ¿Por qué no funcionaba el ascensor el sábado?' },
            { who: 'Señor Paredes', text: '___ el viernes hubo una tormenta muy fuerte, el motor tuvo un problema.', options: ['Entonces', 'Como', 'Por eso'], answer: 1, why: 'La causa (la tormenta) va al principio, antes del resultado: «Como».' },
            { who: 'Inés', text: '¿Y qué hizo usted?' },
            { who: 'Señor Paredes', text: '___, llamé al técnico. Luego, puse un cartel en la puerta del ascensor.', options: ['Primero', 'Por último', 'Así que'], answer: 0, why: 'Es la primera acción; la segunda va con «luego». «Por último» no puede ir antes de «luego».' },
            { who: 'Señor Paredes', text: 'El técnico vino el lunes, ___, ayer.', options: ['por eso', 'porque', 'es decir'], answer: 2, why: 'Hoy es martes: «el lunes» y «ayer» son lo mismo. Repites con otras palabras: «es decir».' },
            { who: 'Inés', text: 'Yo no vi el cartel, ___ esperé el ascensor diez minutos.', options: ['porque', 'como', 'así que'], answer: 2, why: 'No vio el cartel (causa) → esperó diez minutos (resultado): «así que».' },
            { who: 'Inés', text: '¿Y ahora funciona bien?' },
            { who: 'Señor Paredes', text: 'Sí, ya funciona ___ el técnico cambió una pieza del motor.', options: ['por eso', 'así que', 'porque'], answer: 2, why: 'Primero el resultado (ya funciona), después la razón: «porque».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Como', 'no', 'había', 'ascensor,', 'subimos', 'a', 'pie'], accept: ['Como no había ascensor, subimos a pie'], en: 'As there was no lift, we walked up.' },
            { tiles: ['Primero', 'llegó', 'la', 'furgoneta', 'y', 'luego', 'llegó', 'Mateo'], accept: ['Primero llegó la furgoneta y luego llegó Mateo', 'Primero la furgoneta llegó y luego llegó Mateo', 'Primero la furgoneta llegó y luego Mateo llegó', 'Primero llegó la furgoneta y luego Mateo llegó'], en: 'First the van arrived and then Mateo arrived.' },
            { tiles: ['Estaba', 'muy', 'cansada,', 'por', 'eso', 'me', 'acosté', 'temprano'], accept: ['Estaba muy cansada, por eso me acosté temprano'], en: 'I was very tired, so I went to bed early.' },
            { tiles: ['Llegamos', 'a', 'las', 'diez,', 'es', 'decir,', 'muy', 'tarde'], accept: ['Llegamos a las diez, es decir, muy tarde'], en: 'We arrived at ten, that is, very late.' },
          ] },
        ] },
        { title: 'Une las frases · Join the sentences', blocks: [
          { kind: 'rewrite', title: 'Un conector para dos frases · One connector, two sentences', items: [
            { prompt: 'Mateo no tenía coche. Fue en autobús.', instruction: 'Une las frases con «como». Empieza con «Como».', accept: ['Como Mateo no tenía coche, fue en autobús', 'Como no tenía coche, Mateo fue en autobús'] },
            { prompt: 'La pizzería estaba cerrada. Cenamos en casa.', instruction: 'Une las frases con «por eso».', accept: ['La pizzería estaba cerrada, por eso cenamos en casa', 'La pizzería estaba cerrada. Por eso cenamos en casa'] },
            { prompt: 'Las cajas pesan mucho. Inés pide ayuda a Raúl.', instruction: 'Une las frases con «así que».', accept: ['Las cajas pesan mucho, así que Inés pide ayuda a Raúl', 'Las cajas pesan mucho, así que Inés le pide ayuda a Raúl'] },
            { prompt: 'Hoy va a llover. Raúl lleva paraguas.', instruction: 'Une las frases con «porque». Empieza con «Raúl».', accept: ['Raúl lleva paraguas porque hoy va a llover', 'Raúl lleva paraguas porque va a llover hoy'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta su última semana en cuatro frases: «Primero…», «Luego…», una causa con «como» y un resultado con «así que».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Mateo', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Mateo llega tarde · Mateo is running late', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada palabra de orden (primero, luego…) y da una palmada con cada causa o consecuencia (porque, por eso…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en el orden del plan de Mateo y en sus razones. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Mateo', channel: 'MENSAJE DE VOZ · DE MATEO PARA INÉS', src: '/audio/grammar-live/377.mp3',
            before: 'Es sábado, las diez de la mañana. Inés espera la furgoneta en la calle y recibe un audio de su hermano Mateo. ¿Qué crees que dice? ¿Llega a tiempo? (Inés gets a voice message from her brother. What do you think he says? Is he on time?)',
            gist: { prompt: '¿Cuál es la idea general?', options: ['Mateo pregunta la dirección de la casa nueva.', 'Mateo dice que llega tarde y explica su plan.', 'Mateo no puede ir a la mudanza.'], answer: 1, why: '«Voy a llegar tarde a la mudanza» y después: «Mi plan es este…».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Por qué llega tarde Mateo?', options: ['Porque el coche no arranca.', 'Porque tiene que trabajar.', 'Porque perdió el autobús.'], answer: 0, why: '«Es que el coche no arranca, o sea, hoy voy en autobús».', en: 'Why is Mateo late?' },
              { prompt: '¿Qué hace Mateo primero?', options: ['Compra cinta para las cajas.', 'Va a la casa antigua.', 'Pide la cena.'], answer: 0, why: '«Primero paso por la tienda de la esquina y compro cinta para las cajas».', en: 'What does Mateo do first?' },
              { prompt: '¿Adónde va Mateo luego?', options: ['A la casa antigua de Inés.', 'A la casa nueva, en la calle Olmo.', 'A la tienda de la esquina.'], answer: 1, why: '«Luego voy directamente a tu casa nueva, es decir, a la calle Olmo».', en: 'Where does Mateo go after that?' },
              { prompt: '¿Por qué no tiene que comprar nada Inés?', options: ['Porque Mateo pide la cena para todos.', 'Porque ya hay comida en la casa nueva.', 'Porque cenan en un restaurante.'], answer: 0, why: '«Por último, yo pido la cena: pizza para todos, así que no compres nada».', en: 'Why doesn’t Inés need to buy anything?' },
            ],
            transcript: 'Hola, Inés, soy Mateo. Perdona, voy a llegar tarde a la mudanza. Es que el coche no arranca, [[o sea|violet]], hoy voy en autobús. Los sábados hay menos autobuses, [[por eso|orange]] llego más o menos a las doce. Mi plan es este: [[primero|blue]] paso por la tienda de la esquina y compro cinta para las cajas, [[porque|teal]] tú no tienes, ¿verdad? [[Luego|blue]] voy directamente a tu casa nueva, [[es decir|violet]], a la calle Olmo, no a la antigua. Y [[por último|blue]], yo pido la cena: pizza para todos, [[así que|orange]] no compres nada, ¿de acuerdo? Ah, otra cosa: ¿el ascensor funciona? Mándame un mensaje. ¡Ánimo, hermanita! Hasta luego.',
            reply: { teacher: 'Tú eres Mateo. Tu alumno es Inés y responde al audio con tres frases: qué pasó primero esa mañana, cómo está el ascensor y qué hace ella ahora (con «así que» o «por eso»).', self: 'Responde a Mateo en voz alta como Inés: qué pasó primero esa mañana, cómo está el ascensor y qué haces tú ahora, con «así que» o «por eso». (Answer as Inés.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu día complicado', coach: 'En orden y con razones. In order, with reasons.',
      steps: [
        { title: '¿Qué pasó? ¿Por qué? · What happened? Why?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Raúl y haces las preguntas. Tu alumno cuenta un día complicado, real o inventado (una mudanza, un viaje, un examen, un primer día de trabajo). Tú repites su frase con el conector correcto y sigues con la repregunta.', self: 'Piensa en un día complicado, real o inventado: una mudanza, un viaje, un primer día de trabajo. Lee la pregunta y responde en voz alta. (Think of a complicated day and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Recuerdas un día complicado: una mudanza, un viaje, un examen? ¿Qué pasó primero? · Do you remember a complicated day? What happened first?', followUps: ['¿Cuándo fue? (When was it?)', '¿Con quién estabas? (Who were you with?)'], phrases: ['El año pasado tuve un día muy…', '[[Primero|blue]], …', 'Yo estaba en…'], hint: 'Primero el contexto (cuándo, dónde) y después el primer hecho con «primero».', example: 'El año pasado tuve un día muy complicado: mi primer día en un trabajo nuevo. Primero, perdí el autobús.', next: 'Ahora, ¿y luego?', teacher: 'Cuenta tú también un día complicado corto. Así tu alumno oye otra vez «primero» y «luego».' },
            { q: '¿Y luego? Cuenta dos o tres cosas más, en orden. · And then? Tell two or three more things, in order.', followUps: ['¿Y después? (And after that?)', '¿Qué pasó entonces? (What happened then?)'], phrases: ['[[Luego|blue]] / [[Después|blue]], …', 'Y [[entonces|blue]]…'], hint: '«Luego» y «después» significan lo mismo: altérnalos para no repetir.', example: 'Luego, tomé un taxi, pero había mucho tráfico. Después, llegué a la oficina y entonces mi jefa me llamó.', next: 'Ahora, las razones.' },
            { q: '¿Por qué pasó? Da una razón con «porque» y otra con «como». · Why did it happen? Give one reason with “porque” and another with “como”.', followUps: ['¿Fue culpa tuya? (Was it your fault?)', '¿Pasa eso a menudo? (Does that happen often?)'], phrases: ['…[[porque|teal]]…', '[[Como|teal]]…, …'], hint: '«Porque» va después de lo que pasó; «como», al principio, antes de lo que pasó.', example: 'Perdí el autobús porque me desperté tarde. Como había mucho tráfico, el taxi tardó cuarenta minutos.', next: 'Ahora, las consecuencias.' },
            { q: '¿Y qué hiciste entonces? Di las consecuencias. · And what did you do then? Say what happened as a result.', followUps: ['¿Llamaste a alguien? (Did you call anyone?)', '¿Cambiaste de plan? (Did you change your plans?)'], phrases: ['…, [[por eso|orange]]…', '…, [[así que|orange]]…'], hint: 'Primero la causa; después «por eso» o «así que» + el resultado.', example: 'No tenía mi tarjeta para entrar, así que esperé en la puerta. Llegué tarde a la reunión, por eso hablé con mi jefa después.', next: 'Ahora, el final.' },
            { q: '¿Cómo terminó el día? · How did the day end?', followUps: ['¿Fue un buen día al final? (Was it a good day in the end?)', '¿Qué hiciste por la noche? (What did you do in the evening?)'], phrases: ['[[Al final|blue]], …', 'Fue un día…'], hint: '«Al final» presenta el resultado, después de los problemas.', example: 'Al final, todo salió bien: mi jefa fue muy amable y comí con mis compañeros nuevos.', next: 'Ahora, explica mejor.' },
            { q: 'Raúl no entiende bien una parte de tu historia. Explícala con otras palabras. · Raúl doesn’t quite understand part of your story. Explain it in other words.', followUps: ['¿Qué quieres decir? (What do you mean?)', '¿Cuánto tiempo, exactamente? (How long, exactly?)'], phrases: ['…, [[es decir|violet]], …', '…, [[o sea|violet]], …'], hint: '«Es decir» y «o sea» repiten la idea más clara. «O sea» es más coloquial.', example: 'Llegué a las diez y media, es decir, con una hora de retraso. Pero mi jefa es muy tranquila, o sea, no fue un problema.', teacher: 'Pregunta tú «¿Qué quieres decir?» después de una frase poco clara. Tu alumno responde con «es decir» u «o sea».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Raúl y hace las preguntas («¿Qué pasó primero?», «¿Por qué?», «¿Y al final?») y tú cuentas un día complicado.', self: 'Ahora tú eres Raúl: haz las preguntas en voz alta («¿Qué pasó primero?», «¿Por qué?», «¿Y al final?») y responde como Inés. (Now you are Raúl: ask and answer as Inés.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo con orden y razones', coach: 'Qué pasó, en qué orden y por qué. What, in what order, and why.',
      steps: [
        { title: 'Un correo a la empresa · An email to the company', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector: ¿ordena, da la causa, da el resultado o explica? Después, tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada conector: ¿orden, causa, consecuencia o explicación? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Lo que pasó en la mudanza · What happened on moving day', situation: 'Eres Inés. Escribe un correo a la empresa de mudanzas: cuenta en orden qué pasó el sábado y explica las causas y las consecuencias. También puedes escribir a un amigo sobre un día complicado tuyo. (You are Inés. Write an email to the moving company: tell them in order what happened on Saturday and explain causes and results. You can also write to a friend about a complicated day of your own.)', task: [
            'Saluda y di de qué escribes. (Say hello and what you are writing about.)',
            'Cuenta tres o cuatro hechos en orden con «primero», «luego / después» y «al final». (Tell three or four events in order.)',
            'Explica una causa con «porque» o «como». (Give a reason with porque or como.)',
            'Di una consecuencia con «por eso» o «así que». (Give a result with por eso or así que.)',
            'Aclara un dato con «es decir» y despídete. (Clarify a detail with es decir and say goodbye.)',
          ], starters: ['Buenos días:', 'Les escribo sobre…', 'Primero, …', 'Como…, …', 'Luego, …', '…, así que…', 'Al final, …', 'Un saludo,'],
            words: ['primero', 'luego', 'después', 'entonces', 'al final', 'por último', 'porque', 'como', 'por eso', 'así que', 'es decir', 'o sea'],
            model: 'Buenos días: Les escribo sobre mi mudanza del sábado 14. [[Primero|blue]], la furgoneta llegó a las once, [[es decir|violet]], con dos horas de retraso. Yo esperé en la calle todo ese tiempo, [[porque|teal]] nadie contestó al teléfono. [[Como|teal]] el ascensor del edificio no funcionaba, los chicos subieron todo por la escalera. [[Luego|blue]], a las cinco, empezó a llover, [[así que|orange]] subimos las últimas cajas muy rápido. [[Al final|blue]], todo llegó bien al apartamento nuevo y los chicos trabajaron muy bien, pero el retraso fue un problema. [[Por eso|orange]] les pido una explicación. Un saludo, Inés Robles',
            minWords: 70,
            checks: [
              { label: 'Orden: primero, luego, después, al final… (sequence words)', pattern: '(?<!\\p{L})(?:primero|luego|después|despues|entonces|al\\s+final|por\\s+último|por\\s+ultimo)(?!\\p{L})', tip: 'Ordena los hechos: «Primero, la furgoneta llegó tarde. Luego…».' },
              { label: 'Una causa con porque o como (a reason)', pattern: '(?<!\\p{L})(?:porque|como)(?!\\p{L})', tip: 'Explica por qué: «… porque nadie contestó» o «Como el ascensor no funcionaba, …».' },
              { label: 'Una consecuencia con por eso o así que (a result)', pattern: '(?<!\\p{L})(?:por\\s+eso|así\\s+que|asi\\s+que)(?!\\p{L})', tip: 'Di el resultado: «Empezó a llover, así que subimos rápido».' },
              { label: 'Una aclaración con es decir u o sea (in other words)', pattern: '(?<!\\p{L})(?:es\\s+decir|o\\s+sea)(?!\\p{L})', tip: 'Aclara un dato: «Llegó a las once, es decir, con dos horas de retraso».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})en\\s+el\\s+final(?!\\p{L})', why: '«In the end» en español es **al final**: «Al final, todo salió bien».' },
              { pattern: '(?<!\\p{L})despu[eé]s\\s+de\\s*[,.;]', why: 'Sin infinitivo ni nombre detrás, se dice **después**, sin «de»: «Después, subimos las cajas».' },
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
            { tone: 'blue', label: 'ORDEN', formula: 'primero → luego / después → entonces → al final / por último', example: 'Primero llegó la furgoneta; luego, Mateo; al final, la pizza.', caption: 'ordenar una historia, un plan o unas instrucciones', en: 'putting a story, a plan or instructions in order' },
            { tone: 'teal', label: 'CAUSA', formula: 'consecuencia + porque + causa · Como + causa, consecuencia', example: 'Como no había ascensor, subimos a pie.', caption: '«como» siempre al principio; «porque», normalmente después', en: '“como” always first; “porque” usually second' },
            { tone: 'orange', label: 'CONSECUENCIA', formula: 'causa, por eso / así que + consecuencia', example: 'Me duele la espalda, por eso tomo café.', caption: 'primero la causa, después el resultado', en: 'cause first, then the result' },
            { tone: 'violet', label: 'EXPLICACIÓN', formula: 'es decir · o sea (más coloquial)', example: 'Llegó a las once, es decir, con dos horas de retraso.', caption: 'la misma idea con otras palabras', en: 'the same idea in other words' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿qué va primero, la **causa** o el **resultado**? Causa primero: **como**…, o …, **por eso / así que**… Resultado primero: … **porque**… Y para terminar: **al final** es el resultado de la historia; **por último**, el último paso de una lista.', en: 'Ask yourself: what comes first, the cause or the result? Cause first: como…, or …, por eso / así que… Result first: … porque… And to finish: “al final” is how the story turned out; “por último” is the last step in a list.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ llovía mucho, nos quedamos en casa.', options: ['Por eso', 'Como', 'Porque'], answer: 1, why: 'La causa va al principio de la frase: «Como».', en: 'As it was raining hard, we stayed at home.' },
            { prompt: 'El museo cierra los lunes, ___ vamos el martes.', options: ['porque', 'como', 'así que'], answer: 2, why: 'Causa (cierra los lunes) → resultado (vamos el martes): «así que».', en: 'The museum is closed on Mondays, so we’re going on Tuesday.' },
            { prompt: 'Para hacer té: primero, calientas el agua; luego, pones el té y, ___, esperas tres minutos.', options: ['porque', 'es decir', 'por último'], answer: 2, why: 'El último paso de unas instrucciones: «por último».', en: 'To make tea: first you heat the water; then you add the tea and, lastly, you wait three minutes.' },
            { prompt: 'Durante una hora buscamos un restaurante abierto y ___ cenamos en un bar.', options: ['al final', 'primero', 'porque'], answer: 0, why: 'Después de un problema, el resultado: «al final».', en: 'For an hour we looked for a restaurant that was open, and in the end we had dinner in a bar.' },
            { prompt: 'Mi hermana vive en Quito, ___, en la capital de Ecuador.', options: ['por eso', 'como', 'es decir'], answer: 2, why: 'Aclaras qué es Quito con otras palabras: «es decir».', en: 'My sister lives in Quito, that is, in the capital of Ecuador.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el sábado de Raúl.', blocks: [
          { kind: 'lead', text: 'El sábado, Raúl fue a la boda de una amiga en otra ciudad, pero el día empezó mal. Une sus frases con el conector indicado.', en: 'On Saturday, Raúl went to a friend’s wedding in another city, but the day started badly. Join his sentences with the connector given.' },
          { kind: 'rewrite', title: 'La boda de Raúl · Raúl’s wedding day', items: [
            { prompt: 'Raúl perdió el tren. Llegó tarde a la boda.', instruction: 'Une las frases con «como». Empieza con «Como».', accept: ['Como Raúl perdió el tren, llegó tarde a la boda', 'Como perdió el tren, Raúl llegó tarde a la boda'] },
            { prompt: 'En la estación no había taxis. Raúl fue a pie.', instruction: 'Une las frases con «así que».', accept: ['En la estación no había taxis, así que Raúl fue a pie', 'No había taxis en la estación, así que Raúl fue a pie'] },
            { prompt: 'Raúl fue a pie. En la estación no había taxis.', instruction: 'Une las frases con «porque». Empieza con «Raúl».', accept: ['Raúl fue a pie porque en la estación no había taxis', 'Raúl fue a pie porque no había taxis en la estación'] },
          ] },
        ] },
        { title: 'Ampliación: conectores formales y «es que» · Extension: formal connectors and “es que”', mascot: '/brand/mascot/portrait.webp', coach: 'Para textos formales y para disculparte. For formal texts and for excuses.', blocks: [
          { kind: 'tip', icon: '✍', title: 'Hablar y escribir · Speaking and writing', text: 'En textos formales vas a leer otros conectores: **en primer lugar**, **en segundo lugar**, **finalmente** (orden); **ya que** (= porque); **por lo tanto** (= por eso). Y al hablar, para dar una excusa, es muy frecuente **es que**: «—¿Por qué no viniste? —**Es que** tuve mucho trabajo». En un correo formal, mejor «es decir» que «o sea».', en: 'In formal texts you will read other connectors: en primer lugar, en segundo lugar, finalmente (first, second, finally); ya que (since); por lo tanto (therefore). And in speech, to give an excuse, “es que” is very common: “Why didn’t you come?” “Well, I had a lot of work.” In a formal email, “es decir” is better than “o sea”.' },
          { kind: 'choice', title: 'Más allá · Going further', items: [
            { prompt: 'Inés escribe a la empresa (registro formal): «La furgoneta llegó a las once, ___, con dos horas de retraso».', options: ['es decir', 'o sea', 'así que'], answer: 0, why: '«Es decir» y «o sea» se entienden, pero en un correo formal «es decir» es más adecuado; «o sea» es coloquial.', en: 'Which connector fits a formal email best?' },
            { prompt: '«No pudimos usar el ascensor, ya que no funcionaba.» «Ya que» significa…', options: ['así que', 'luego', 'porque'], answer: 2, why: '«Ya que» presenta la causa, como «porque»; es más formal.', en: '“Ya que” means…' },
            { prompt: '«El ascensor no funcionaba; por lo tanto, subimos a pie.» «Por lo tanto» presenta…', options: ['una causa, como «porque»', 'un orden, como «luego»', 'una consecuencia, como «por eso»'], answer: 2, why: '«Por lo tanto» es una versión formal de «por eso»: presenta el resultado.', en: '“Por lo tanto” introduces…' },
            { prompt: '—¿Por qué no viniste ayer a la reunión? —___ tuve un problema con el coche.', options: ['Es que', 'Así que', 'Por eso'], answer: 0, why: '«Es que» presenta una excusa o una explicación al responder; es muy coloquial.', en: '“Why didn’t you come to the meeting yesterday?” “Well, I had a problem with the car.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. Aquí basta con entender «ya que», «por lo tanto» y «en primer lugar»; su uso activo llega en B1.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 078 · Si + presente: condiciones reales', text: 'Ya cuentas una historia en orden y explicas por qué pasan las cosas: «Como no había ascensor, subimos a pie», «Empezó a llover, así que subimos rápido». En la clase 078 das un paso más: hablas de **condiciones** reales y de lo que pasa si se cumplen: «**Si** llueve, subimos las cajas rápido». Es el paso natural: de la causa de un hecho real a la condición de un hecho posible.', en: 'You can now tell a story in order and explain why things happen. In class 078 you go one step further: you talk about real conditions and what happens if they are met: “Si llueve, subimos las cajas rápido” (If it rains, we carry the boxes up quickly). It is the natural next step: from the cause of a real fact to the condition for a possible one.', href: '/si-pasa-esto', label: 'Ir a la clase 078' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué hiciste ayer después del trabajo o de las clases? Cuéntalo en orden y di por qué». Respuesta esperada: tres hechos con «primero», «luego» y «al final», y una razón con «como» o «porque». Tarea: escribir el correo de Escribir sobre un día complicado real.' },
        ] },
      ],
    },
  ],
};
