import type { LiveLesson } from '../types';

/**
 * Lesson 417 · B1 · Conectores argumentativos: además, incluso, en cambio (course unit G117).
 * One scene runs through the class: the town council wants to close calle Mayor
 * to private cars for a six-month trial. At the residents' meeting (asamblea de
 * vecinos) Silvia Mora, president of the residents' association, chairs; Héctor
 * Ríos, a teacher and father, is in favour; Nuria Campos, who owns the bookshop on
 * the street, has doubts. Later she chats with Raúl, the baker, and in the voice
 * message (Mexican voice, ustedes) Nuria tells the neighbours how the meeting with
 * the shopkeepers went.
 * Content: adding arguments (además, también, encima: colloquial, usually a
 * complaint; es más), intensifying (incluso, hasta, ni siquiera), contrasting two
 * things (en cambio, mientras que, por el contrario), correcting with no… sino /
 * no… sino que versus pero (coverage-audit fold: No es caro, sino barato; No lo
 * compró, sino que lo alquiló; Es caro, pero bueno), ordering (en primer lugar,
 * por último) as a light recap, and punctuation. Builds on G114 (lesson 217:
 * pero, sin embargo, aunque, ni… ni) without repeating it: en cambio compares two
 * things, sin embargo goes against an expectation. Ampliación: no solo… sino
 * (que) también and the formal por el contrario. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 417,
  level: 'B1',
  title: 'Conectores argumentativos: además, incluso, en cambio',
  subtitle: 'Defender una opinión en una reunión: sumar argumentos, destacar lo inesperado, comparar dos posturas y corregir una idea falsa.',
  legend: [
    { tone: 'blue', label: 'SUMAR · además, también, encima, es más (adding)' },
    { tone: 'teal', label: 'INTENSIFICAR · incluso, hasta, ni siquiera (even, not even)' },
    { tone: 'orange', label: 'CONTRASTAR DOS COSAS · en cambio, mientras que, por el contrario' },
    { tone: 'violet', label: 'CORREGIR O MATIZAR · no… sino, sino que / pero' },
  ],
  optionNotes: {
    'sino': '«Sino» va siempre después de una negación y sustituye lo negado por una palabra o un grupo: «No es caro, sino barato». Si sigue un verbo conjugado: «sino que».',
    'sino que': '«Sino que» va después de una negación y presenta un verbo conjugado que sustituye al primero: «No lo compró, sino que lo alquiló».',
    'pero': '«Pero» no sustituye nada: las dos ideas son verdad y la segunda pone un límite o un contrapeso: «Es caro, pero bueno».',
    'en cambio': '«En cambio» compara dos personas o cosas diferentes: «Héctor va a pie; Nuria, en cambio, va en furgoneta».',
    'ni siquiera': '«Ni siquiera» (not even) va en frases negativas: «Nadie protestó, ni siquiera Nuria».',
    'incluso': '«Incluso» (even) destaca el caso más inesperado en una frase afirmativa: «Vinieron todos, incluso el alcalde».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Argumentar en una asamblea', coach: 'Un buen argumento tiene conectores. Good arguments need connectors.',
      steps: [
        { title: 'La asamblea del jueves · Thursday’s residents’ meeting', blocks: [
          { kind: 'lead', text: 'El ayuntamiento quiere cerrar la calle Mayor a los coches durante seis meses, como prueba. El jueves hay asamblea de vecinos en el centro cívico. Héctor Ríos, profesor y padre de dos niños, está a favor. Nuria Campos, dueña de la librería de la calle, tiene dudas. Para defender una opinión no bastan «y» y «pero»: hoy aprendes conectores para **sumar** argumentos, **destacar** lo inesperado, **comparar** dos cosas y **corregir** una idea.', en: 'The town council wants to close calle Mayor to cars for six months, as a trial. On Thursday there is a residents’ meeting at the community centre. Héctor Ríos, a teacher and father of two, is in favour. Nuria Campos, who owns the bookshop on the street, has doubts. To defend an opinion, “and” and “but” are not enough: today you learn connectors to add arguments, highlight the unexpected, compare two things and correct an idea.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase y tu alumno dice qué hace el conector marcado: ¿suma, destaca o compara?', self: 'Lee las tres frases en voz alta. ¿Qué hace cada conector: suma, destaca o compara? (Does it add, highlight or compare?)' } },
          { kind: 'compare', title: 'Tres trabajos diferentes · Three different jobs', columns: [
            { tone: 'blue', label: 'SUMAR', sentence: 'La calle tendrá menos ruido; [[además|blue]], será más segura.', idea: 'Añades otro argumento en la misma dirección.', en: 'The street will be quieter; besides, it will be safer. (another argument, same direction)' },
            { tone: 'teal', label: 'INTENSIFICAR', sentence: 'Todo mi edificio está a favor, [[incluso|teal]] el señor Gil, que usa el coche a diario.', idea: 'Destacas el caso que menos esperas.', en: 'My whole building is in favour, even Mr Gil, who drives every day. (the least expected case)' },
            { tone: 'orange', label: 'CONTRASTAR DOS COSAS', sentence: 'Héctor va al trabajo a pie; Nuria, [[en cambio|orange]], necesita la furgoneta.', idea: 'Pones dos personas o cosas una al lado de la otra y marcas la diferencia.', en: 'Héctor walks to work; Nuria, on the other hand, needs her van. (two different people side by side)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Será más segura; además, será más bonita», «además»…', options: ['suma un argumento más.', 'presenta un problema.', 'compara dos calles.'], answer: 0, why: 'Las dos ideas van en la misma dirección (a favor): «además» suma.', en: 'In this sentence, “además”…' },
            { prompt: 'En «Vinieron todos, incluso la concejala», «incluso» destaca…', options: ['a la persona que menos esperabas.', 'a la última persona que llegó.', 'a la persona más importante del barrio.'], answer: 0, why: '«Incluso» (even) marca el caso más inesperado de la lista.', en: 'In “Everyone came, even the councillor”, “incluso” highlights…' },
            { prompt: '«Mi calle es ruidosa; la tuya, en cambio, es tranquila.» ¿Qué hace «en cambio»?', options: ['Corrige un error.', 'Añade otra ventaja.', 'Compara dos calles distintas.'], answer: 2, why: 'Pone dos cosas una al lado de la otra y marca la diferencia.', en: 'My street is noisy; yours, on the other hand, is quiet. What does “en cambio” do?' },
          ] },
        ] },
        { title: 'Sumar argumentos · Adding arguments', mascot: '/brand/mascot/studying.webp', coach: 'Una razón más. One more reason.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SUMAR', question: '¿Tienes otra razón en la misma dirección?', en: 'Do you have another reason that points the same way?', formula: ['idea 1. / ; **Además**, idea 2', 'también · encima (coloquial) · es más'],
            meaning: '**Además** suma un argumento nuevo, a menudo más importante; va al principio de la segunda idea, con coma. **También** suma un elemento del mismo tipo y suele ir junto al verbo. **Encima** es coloquial: suma algo más, casi siempre negativo (una queja). **Es más** suma un argumento todavía más fuerte que el anterior.',
            examples: [
              { es: 'Sin coches, la calle tendrá menos ruido. [[Además|blue]], el aire estará más limpio.', en: 'Without cars, the street will be quieter. Besides, the air will be cleaner.' },
              { es: 'Los niños [[también|blue]] podrán ir en bici al colegio.', en: 'The children will also be able to cycle to school.' },
              { es: 'Ya hay pocas plazas de estacionamiento y, [[encima|blue]], quieren quitar veinte.', en: 'There are already few parking spaces and, on top of that, they want to remove twenty.' },
              { es: 'La prueba no me molesta; [[es más|blue]], me parece necesaria.', en: 'The trial doesn’t bother me; in fact, I think it’s necessary.' },
            ] },
          { kind: 'table', title: 'Cuatro formas de sumar · Four ways to add', head: ['Conector', 'Qué añade · What it adds', 'Registro · Register'], rows: [
            ['**además**', 'otro argumento, a menudo más importante · another, often stronger, point', 'oral y escrito · neutral'],
            ['**también**', 'otro elemento del mismo tipo · one more of the same kind', 'oral y escrito · neutral'],
            ['**encima**', 'algo más que molesta o sorprende · on top of that (complaints)', 'coloquial · informal'],
            ['**es más**', 'un argumento más fuerte que el anterior · in fact, what’s more', 'oral y escrito · neutral'],
          ], note: 'Con un nombre o un infinitivo, usa **además de**: «**Además de** barata, la prueba es corta», «**Además de** cerrar la calle, van a poner bancos».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El autobús llegó tarde y, ___, iba lleno. (una queja)', options: ['sino', 'encima', 'en cambio'], answer: 1, why: 'Otro problema que se suma, en tono de queja: «encima».', en: 'The bus was late and, on top of that, it was full.' },
            { prompt: 'No me parece mala idea; ___, creo que es urgente.', options: ['es más', 'en cambio', 'ni siquiera'], answer: 0, why: 'La segunda idea es más fuerte que la primera: «es más».', en: 'I don’t think it’s a bad idea; in fact, I think it’s urgent.' },
            { prompt: '___ cerrar la calle, el ayuntamiento va a plantar árboles.', options: ['También', 'Además', 'Además de'], answer: 2, why: 'Delante de un infinitivo o un nombre: «además de».', en: 'As well as closing the street, the council is going to plant trees.' },
          ] },
        ] },
        { title: 'Incluso, hasta, ni siquiera · Even, not even', mascot: '/brand/mascot/speaking.webp', coach: 'El caso que nadie espera. The case nobody expects.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'INTENSIFICAR', question: '¿Cuál es el caso más sorprendente?', en: 'What is the most surprising case?', formula: ['**incluso** / **hasta** + el elemento inesperado', '**ni siquiera** + elemento (frase negativa)'],
            meaning: 'Con **incluso** y **hasta** pones en la frase el caso que menos esperas: es el punto más alto de una escala. **Hasta**, con este sentido, es igual que incluso, un poco más coloquial. **Ni siquiera** es la versión negativa (not even).',
            examples: [
              { es: 'Vinieron muchos vecinos, [[incluso|teal]] la concejala de Movilidad.', en: 'Lots of residents came, even the transport councillor.' },
              { es: '[[Hasta|teal]] mi abuela, que tiene ochenta años, va a ir a la asamblea.', en: 'Even my grandmother, who is eighty, is going to the meeting.' },
              { es: 'Nadie habló del ruido, [[ni siquiera|teal]] Héctor.', en: 'Nobody talked about the noise, not even Héctor.' },
            ] },
          { kind: 'compare', title: 'Afirmativa o negativa · Positive or negative', columns: [
            { tone: 'teal', label: 'INCLUSO · frase afirmativa', sentence: 'Todos leyeron el proyecto, [[incluso|teal]] Nuria.', idea: 'Lo esperable es que Nuria no lo lea… y lo leyó.', en: 'Everybody read the project, even Nuria.' },
            { tone: 'teal', label: 'NI SIQUIERA · frase negativa', sentence: 'Nadie leyó el proyecto, [[ni siquiera|teal]] Silvia.', idea: 'Lo esperable es que Silvia lo lea… y no lo leyó.', en: 'Nobody read the project, not even Silvia.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Dónde va «ni siquiera» · Where “ni siquiera” goes', text: 'Delante del verbo, sin «no»: «**Ni siquiera** llamó». Detrás del verbo, con «no»: «**No** llamó **ni siquiera** una vez». Funciona como «nadie» o «nunca». Y ojo con **hasta**: «Trabajo hasta las ocho» es un límite (until); «Hasta los niños lo saben» es «incluso» (even).', en: 'Before the verb, without “no”: “Ni siquiera llamó” (he didn’t even call). After the verb, with “no”: “No llamó ni siquiera una vez”. It works like “nadie” or “nunca”. And watch out for “hasta”: “until” as a limit, or “even” when it means “incluso”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Estaba tan cansada que ___ cenó.', options: ['hasta', 'incluso', 'ni siquiera'], answer: 2, why: 'La frase es negativa (no cenó): «ni siquiera», delante del verbo y sin «no».', en: 'She was so tired that she didn’t even have dinner.' },
            { prompt: 'En «Hasta el panadero está a favor», «hasta» significa…', options: ['until', 'even', 'also'], answer: 1, why: 'Aquí «hasta» = «incluso»: destaca a la persona menos esperada.', en: 'In “Even the baker is in favour”, “hasta” means…' },
            { prompt: '¿Qué frase es correcta?', options: ['Ni siquiera vino Héctor.', 'Incluso no vino Héctor.', 'Ni siquiera no vino Héctor.'], answer: 0, why: '«Ni siquiera» delante del verbo ya es negativo: no lleva «no».', en: 'Which sentence is correct? (Not even Héctor came.)' },
          ] },
        ] },
        { title: 'Comparar dos cosas · Comparing two things', mascot: '/brand/mascot/standing.webp', coach: 'Esto, y en cambio aquello. This, and on the other hand that.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONTRASTAR DOS COSAS', question: '¿Comparas dos personas, lugares o grupos?', en: 'Are you comparing two people, places or groups?', formula: ['A…; B, **en cambio**, …', 'A…, **mientras que** B…', 'no A; **por el contrario**, B (más formal)'],
            meaning: 'Con **en cambio** y **mientras que** pones dos cosas una al lado de la otra y señalas la diferencia; las dos partes son verdad. **En cambio** une dos frases (va entre comas o detrás de punto y coma); **mientras que** une dos partes dentro de la misma frase, con coma delante. **Por el contrario** es más formal y dice que la segunda idea es justo lo opuesto de la primera.',
            examples: [
              { es: 'Héctor va al trabajo a pie; Nuria, [[en cambio|orange]], necesita la furgoneta para el reparto.', en: 'Héctor walks to work; Nuria, on the other hand, needs her van for deliveries.' },
              { es: 'Los padres quieren más zonas de juego, [[mientras que|orange]] los comerciantes piden zonas de carga.', en: 'Parents want more play areas, whereas shopkeepers are asking for loading zones.' },
              { es: 'El ruido no ha bajado; [[por el contrario|orange]], ha subido con las obras.', en: 'The noise hasn’t gone down; on the contrary, it has gone up with the roadworks.' },
            ] },
          { kind: 'compare', title: 'En cambio no es sin embargo (clase 114) · Not the same', columns: [
            { tone: 'orange', label: 'EN CAMBIO · dos cosas diferentes', sentence: 'Mi calle es ruidosa; la tuya, [[en cambio|orange]], es tranquila.', idea: 'Comparas dos calles. No hay sorpresa: son distintas.', en: 'My street is noisy; yours, on the other hand, is quiet.' },
            { tone: 'neutral', label: 'SIN EMBARGO · contra lo esperado', sentence: 'Mi calle es ruidosa. Sin embargo, me gusta vivir aquí.', idea: 'Una sola cosa: lo esperable sería no querer vivir allí.', en: 'My street is noisy. However, I like living here.' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Mientras que» y «mientras»', text: 'Para comparar, la forma más clara es **mientras que**: «Yo prefiero el campo, mientras que mi hermana prefiere la ciudad». **Mientras**, sin «que», indica sobre todo tiempo: «Leo el periódico mientras desayuno» (al mismo tiempo).', en: 'To compare, the clearest form is “mientras que” (whereas). “Mientras” without “que” mainly expresses time: “while”, at the same time.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Los restaurantes están contentos con la prueba; la frutería, ___, tiene dudas.', options: ['en cambio', 'además', 'incluso'], answer: 0, why: 'Dos negocios con opiniones diferentes, una al lado de la otra: «en cambio».', en: 'The restaurants are happy with the trial; the greengrocer’s, on the other hand, has doubts.' },
            { prompt: 'La calle es muy bonita. ___, nadie quiere vivir en ella: es demasiado ruidosa.', options: ['Además', 'En cambio', 'Sin embargo'], answer: 2, why: 'No comparas dos cosas: es la misma calle y el resultado va contra lo esperado. «Sin embargo» (clase 114).', en: 'The street is very pretty. However, nobody wants to live on it: it’s too noisy.' },
            { prompt: 'Yo vivo en el centro, ___ mis padres viven en un pueblo.', options: ['sino que', 'es más', 'mientras que'], answer: 2, why: 'Comparas dos lugares dentro de una sola frase: «mientras que».', en: 'I live in the centre, whereas my parents live in a village.' },
          ] },
        ] },
        { title: 'No… sino, sino que, pero · Correcting or limiting', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Sino corrige; pero suma un límite. Sino corrects; pero adds a limit.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CORREGIR · NO… SINO', question: '¿La primera idea es falsa y la segunda la sustituye?', en: 'Is the first idea false, and does the second one replace it?', formula: ['no + A, **sino** + B (palabra o grupo)', 'no + verbo…, **sino que** + verbo conjugado', 'A, **pero** B → A y B son verdad'],
            meaning: 'Con **sino** corriges: la primera parte va con «no» y la segunda ocupa su lugar. Si después viene un verbo conjugado, usa **sino que**. Con **pero** no sustituyes nada: las dos partes son verdad y la segunda pone un límite o un contrapeso (clase 114).',
            examples: [
              { es: 'No es una calle cerrada, [[sino|violet]] una calle para peatones.', en: 'It isn’t a closed street, but a pedestrian street.' },
              { es: 'El ayuntamiento no quita el estacionamiento, [[sino que|violet]] lo traslada a la estación.', en: 'The council isn’t removing the car park; instead, it’s moving it to the station.' },
              { es: 'La idea es buena, [[pero|violet]] llega tarde.', en: 'The idea is good, but it comes late.' },
            ] },
          { kind: 'table', title: 'Tres estructuras · Three structures', head: ['Estructura', 'Qué dices · What you say', 'Ejemplo'], rows: [
            ['no A, **sino** B', 'A es falso; B es lo correcto · not A but B', 'No es caro, **sino** barato.'],
            ['no + verbo, **sino que** + verbo', 'corriges la acción completa · not this action, that one', 'No lo compró, **sino que** lo alquiló.'],
            ['A, **pero** B', 'A y B son verdad · both are true', 'Es caro, **pero** bueno.'],
            ['no A, **pero** B', 'A es falso y B es verdad, sin sustituir · no replacement', 'No es barato, **pero** es muy bueno.'],
          ], note: '**Sino** (una palabra) corrige. **Si no** (dos palabras) es una condición: «**Si no** llueve, vamos andando». Delante de sino, sino que y pero, normalmente hay coma.' },
          { kind: 'decide', title: '¿Sino, sino que o pero?', steps: [
            { q: '¿Las dos ideas son verdad a la vez? (la segunda solo pone un límite)', yes: 'Usa **pero**: «Es caro, pero bueno».', no: 'next' },
            { q: '¿Corriges algo negado y después viene un verbo conjugado?', yes: 'Usa **sino que**: «No lo compró, sino que lo alquiló».', no: 'next' },
            { q: '¿Corriges una palabra o un grupo sin verbo conjugado?', yes: 'Usa **sino**: «No es caro, sino barato».', no: 'Revisa la frase: con «sino» siempre hay un «no» antes.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La reunión no es el martes, ___ el jueves.', options: ['sino que', 'pero', 'sino'], answer: 2, why: 'Corriges un dato (el martes → el jueves) sin verbo conjugado: «sino».', en: 'The meeting isn’t on Tuesday, but on Thursday.' },
            { prompt: 'Nuria no cerró la librería, ___ la trasladó a otra calle.', options: ['pero', 'sino que', 'sino'], answer: 1, why: 'Corriges la acción y viene un verbo conjugado (trasladó): «sino que».', en: 'Nuria didn’t close the bookshop; instead, she moved it to another street.' },
            { prompt: 'El local es pequeño, ___ tiene mucha luz.', options: ['sino', 'sino que', 'pero'], answer: 2, why: 'No hay negación y las dos ideas son verdad: «pero».', en: 'The premises are small, but they get a lot of light.' },
          ] },
        ] },
        { title: 'Ordenar, puntuar, evitar errores · Order, punctuation, mistakes', mascot: '/autoestudio/mascot/noting.webp', coach: 'Primero, después, por último. First, then, finally.', blocks: [
          { kind: 'table', title: 'Ordenar y puntuar · Ordering and punctuation', head: ['Conectores', 'Puntuación habitual · Usual punctuation', 'Ejemplo'], rows: [
            ['**En primer lugar · en segundo lugar · por último** (también: por un lado… por otro)', 'al principio de la idea, con coma detrás', '**En primer lugar**, hay menos ruido. **Por último**, hay más terrazas.'],
            ['**además · es más · por el contrario**', 'detrás de punto o punto y coma, con coma detrás', 'Es barato; **además**, está cerca.'],
            ['**en cambio**', 'entre comas, a menudo dentro de la segunda frase', 'Mi calle es ruidosa; la tuya, **en cambio**, es tranquila.'],
            ['**mientras que · sino · sino que · pero**', 'coma delante', 'No lo compró, **sino que** lo alquiló.'],
            ['**incluso · hasta · ni siquiera**', 'justo delante del elemento que destacas', 'Vinieron todos, **incluso** la concejala.'],
          ] },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'No es caro, pero barato.', right: 'No es caro, sino barato.', why: '«Barato» sustituye a «caro»: es una corrección, así que va «sino». (Not A but B: sino.)' },
            { wrong: 'No lo compró, sino lo alquiló.', right: 'No lo compró, sino que lo alquiló.', why: 'Después viene un verbo conjugado (alquiló): «sino que». (Before a conjugated verb: sino que.)' },
            { wrong: 'Es una idea buena, sino cara.', right: 'Es una idea buena, pero cara.', why: 'No hay negación y las dos cosas son verdad: «pero». «Sino» necesita un «no» antes.' },
            { wrong: 'Incluso no leyó el proyecto.', right: 'Ni siquiera leyó el proyecto.', why: 'En frase negativa, «not even» es «ni siquiera», sin «no» delante del verbo.' },
            { wrong: 'Es caro; en cambio, lo voy a comprar.', right: 'Es caro; sin embargo, lo voy a comprar.', why: 'No comparas dos cosas: actúas contra lo esperado. Eso es «sin embargo» (clase 114).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien puntuada?', options: ['La plaza es grande además, tiene árboles.', 'La plaza es grande; además, tiene árboles.', 'La plaza es grande; además tiene, árboles.'], answer: 1, why: '«Además» empieza la segunda idea: punto y coma (o punto) delante y coma detrás.', en: 'Which sentence is correctly punctuated? (The square is big; besides, it has trees.)' },
            { prompt: 'Héctor presenta su último argumento: «___, la prueba solo dura seis meses».', options: ['Por último', 'Es más', 'En primer lugar'], answer: 0, why: 'Es el final de una lista de argumentos: «por último».', en: 'Héctor presents his last argument: “Finally, the trial only lasts six months.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno da su opinión sobre su propia calle con un conector de cada color: una ventaja con «además», un caso con «incluso» y una comparación con «en cambio».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La asamblea de vecinos', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En el centro cívico · At the community centre', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Silvia y Héctor; tu alumno es Nuria. Después tu alumno toca cada conector marcado y dice qué hace: suma, destaca, compara o corrige.', self: 'Lee el diálogo en voz alta. Después toca cada conector marcado y di qué hace: ¿suma, destaca, compara o corrige? (Add, highlight, compare or correct?)' } },
          { kind: 'explore', title: '¿Una calle sin coches?', setting: 'Jueves por la tarde, en el centro cívico del barrio. Silvia Mora, presidenta de la asociación de vecinos, dirige la asamblea. Hablan Héctor Ríos y Nuria Campos. (Thursday evening, at the local community centre. Silvia Mora, president of the residents’ association, chairs the meeting.)', lines: [
            { who: 'Silvia', text: 'Buenas tardes. Hoy hablamos de la prueba de la calle Mayor: seis meses sin coches. **En primer lugar**, escuchamos a Héctor; **después**, a Nuria.', en: 'Good evening. Today we’re talking about the calle Mayor trial: six months without cars. First, we’ll hear from Héctor; then, from Nuria.' },
            { who: 'Héctor', text: 'Gracias. Yo estoy a favor. Sin coches, la calle tendrá menos ruido; [[además|blue]], será más segura para los niños.', en: 'Thank you. I’m in favour. Without cars, the street will be quieter; besides, it will be safer for children.' },
            { who: 'Héctor', text: 'He hablado con muchos vecinos y casi todos están de acuerdo, [[incluso|teal]] el señor Gil, que usa el coche a diario.', en: 'I’ve talked to many residents and almost all of them agree, even Mr Gil, who drives every day.' },
            { who: 'Silvia', text: 'Gracias, Héctor. Nuria, tú tienes la librería en la calle Mayor. ¿Qué opinas?', en: 'Thank you, Héctor. Nuria, you have the bookshop on calle Mayor. What do you think?' },
            { who: 'Nuria', text: 'La idea me parece interesante, [[pero|violet]] tengo dudas. Muchos clientes vienen en coche y, [[encima|blue]], ahora hay obras en la avenida.', en: 'I find the idea interesting, but I have doubts. Many customers come by car and, on top of that, there are roadworks on the avenue right now.' },
            { who: 'Nuria', text: 'Y no es solo mi caso. Los vecinos jóvenes van andando a todas partes; los mayores, [[en cambio|orange]], necesitan el taxi en la puerta.', en: 'And it’s not just me. Young residents walk everywhere; older people, on the other hand, need the taxi at the door.' },
            { who: 'Héctor', text: 'Entiendo. Pero el proyecto no cierra la calle a todos, [[sino|violet]] solo a los coches particulares. Los taxis y las ambulancias pueden pasar.', en: 'I understand. But the project doesn’t close the street to everyone, only to private cars. Taxis and ambulances can get through.' },
            { who: 'Nuria', text: '¿Y el estacionamiento de la calle? ¿Lo van a quitar?', en: 'And the parking on the street? Are they going to remove it?' },
            { who: 'Silvia', text: 'El ayuntamiento no lo quita, [[sino que|violet]] lo traslada al estacionamiento de la estación, a cinco minutos. [[Es más|blue]], los vecinos van a pagar la mitad.', en: 'The council isn’t removing it; it’s moving it to the station car park, five minutes away. What’s more, residents will pay half price.' },
            { who: 'Nuria', text: 'Bueno, eso es una buena noticia. Lo malo es que a los comerciantes [[ni siquiera|teal]] nos han preguntado.', en: 'Well, that’s good news. The bad thing is that they haven’t even asked us shopkeepers.' },
            { who: 'Héctor', text: 'Tienes razón. Los padres hemos tenido tres reuniones con el ayuntamiento, [[mientras que|orange]] los comercios no han tenido ninguna.', en: 'You’re right. We parents have had three meetings with the council, whereas the shops haven’t had a single one.' },
            { who: 'Silvia', text: '**Por último**, una propuesta: hacemos una reunión solo con los comercios. [[Hasta|teal]] la concejala ha dicho que quiere venir.', en: 'Finally, a proposal: we hold a meeting just with the shops. Even the councillor has said she wants to come.' },
          ], notes: {
            'además': 'Suma un segundo argumento a favor, en la misma dirección. Va detrás de punto y coma, con coma detrás.',
            'incluso': '«Even»: destaca el caso que menos esperas. Lo normal es que el señor Gil, que usa el coche, esté en contra.',
            'pero': 'Las dos ideas son verdad: le parece interesante y tiene dudas. «Pero» pone un límite; no corrige nada.',
            'encima': 'Coloquial: suma otro problema, en tono de queja (on top of that). Fíjate en las comas: «y, encima, …».',
            'en cambio': 'Compara dos grupos diferentes (los jóvenes / los mayores). Va entre comas, dentro de la segunda frase.',
            'sino': 'Corrige: no a todos → solo a los coches particulares. Hay un «no» antes y ningún verbo conjugado después.',
            'sino que': 'Corrige la acción completa: no lo quita → lo traslada. Después viene un verbo conjugado, por eso «sino que».',
            'Es más': 'Suma un argumento todavía más fuerte: no solo lo trasladan, también es más barato.',
            'ni siquiera': '«Not even»: frase negativa. Va delante del verbo, así que no lleva «no».',
            'mientras que': 'Compara dos grupos dentro de una sola frase: los padres (tres reuniones) / los comercios (ninguna). Coma delante.',
            'Hasta': 'Aquí «hasta» = «incluso» (even): la concejala es la persona menos esperada en una reunión de barrio. No es «until».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué dos argumentos da Héctor a favor de la prueba?', options: ['Más estacionamiento y menos obras.', 'Menos ruido y más seguridad para los niños.', 'Más clientes y más terrazas.'], answer: 1, why: '«La calle tendrá menos ruido; además, será más segura para los niños».', en: 'What two arguments does Héctor give in favour of the trial?' },
            { prompt: '¿Por qué tiene dudas Nuria?', options: ['Porque muchos clientes vienen en coche y hay obras en la avenida.', 'Porque el estacionamiento de la estación es muy caro.', 'Porque no le gustan los niños en la calle.'], answer: 0, why: '«Muchos clientes vienen en coche y, encima, ahora hay obras en la avenida».', en: 'Why does Nuria have doubts?' },
            { prompt: '¿Qué pasa con el estacionamiento de la calle?', options: ['Lo trasladan a la estación y los vecinos pagan la mitad.', 'Lo quitan y no hay otro.', 'No cambia nada.'], answer: 0, why: '«No lo quita, sino que lo traslada… Es más, los vecinos van a pagar la mitad».', en: 'What happens to the parking on the street?' },
          ] },
        ] },
        { title: '¿Qué hace cada conector? · What does each connector do?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases de la asamblea · More sentences from the meeting', categories: [
            { id: 'sumar', label: 'SUMAR', tone: 'blue' },
            { id: 'intensificar', label: 'INTENSIFICAR', tone: 'teal' },
            { id: 'contrastar', label: 'CONTRASTAR DOS COSAS', tone: 'orange' },
            { id: 'corregir', label: 'CORREGIR (sino)', tone: 'violet' },
          ], items: [
            { text: 'Habrá más bancos y, además, una fuente nueva.', answer: 'sumar', why: 'Otra mejora en la misma dirección: «además».' },
            { text: 'Votaron todos, incluso los vecinos más mayores.', answer: 'intensificar', why: '«Incluso» destaca el grupo menos esperado.' },
            { text: 'La plaza tiene sombra; la calle, en cambio, no tiene ni un árbol.', answer: 'contrastar', why: 'Compara dos lugares diferentes.' },
            { text: 'La prueba no dura un año, sino seis meses.', answer: 'corregir', why: '«Sino» sustituye un dato falso por el correcto.' },
            { text: 'Nadie se quejó del horario, ni siquiera Nuria.', answer: 'intensificar', why: '«Ni siquiera»: el caso menos esperado en una frase negativa.' },
            { text: 'Unos quieren más terrazas, mientras que otros prefieren más silencio.', answer: 'contrastar', why: '«Mientras que» compara dos grupos en la misma frase.' },
            { text: 'Ya hay poco espacio y, encima, quieren poner contenedores.', answer: 'sumar', why: '«Encima» suma otro problema, en tono de queja.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y tú qué opinas de una calle sin coches?». Tu alumno responde con dos argumentos unidos por «además» y una comparación con «en cambio».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Sumas, destacas, comparas o corriges? Add, highlight, compare or correct?',
      steps: [
        { title: 'El acta de la asamblea · The meeting minutes', blocks: [
          { kind: 'choice', items: [
            { context: 'Silvia escribe el acta de la asamblea. (Silvia writes up the minutes.)', prompt: 'La prueba durará seis meses; ___, será gratis para los vecinos.', options: ['además', 'en cambio', 'sino'], answer: 0, why: 'Dos datos a favor, en la misma dirección: «además».', en: 'The trial will last six months; besides, it will be free for residents.' },
            { context: 'Silvia escribe el acta de la asamblea. (Silvia writes up the minutes.)', prompt: 'Muchos vecinos apoyan la idea, ___ algunos que tienen coche.', options: ['incluso', 'en cambio', 'ni siquiera'], answer: 0, why: 'El grupo menos esperado, en una frase afirmativa: «incluso».', en: 'Many residents support the idea, even some who own a car.' },
            { context: 'Las opiniones de los comercios. (The shops’ opinions.)', prompt: 'Los restaurantes quieren más terrazas, ___ la farmacia pide una zona de carga.', options: ['además', 'mientras que', 'sino que'], answer: 1, why: 'Compara dos negocios con deseos distintos dentro de una frase: «mientras que».', en: 'The restaurants want more terraces, whereas the chemist’s is asking for a loading zone.' },
            { context: 'Una corrección en el acta. (A correction in the minutes.)', prompt: 'La próxima reunión no es en la biblioteca, ___ en el centro cívico.', options: ['sino', 'pero', 'sino que'], answer: 0, why: 'Corriges un lugar, sin verbo conjugado después: «sino».', en: 'The next meeting isn’t in the library, but at the community centre.' },
            { context: 'El resultado de la votación. (The result of the vote.)', prompt: 'Nadie votó en contra, ___ el señor Gil.', options: ['también', 'incluso', 'ni siquiera'], answer: 2, why: 'La frase es negativa (nadie): «ni siquiera».', en: 'Nobody voted against, not even Mr Gil.' },
          ] },
        ] },
        { title: '¿Sino o pero? · Sino or pero?', blocks: [
          { kind: 'classify', title: '¿Corrige o pone un límite? · Does it correct or limit?', categories: [
            { id: 'sino', label: 'SINO · la segunda idea sustituye a la primera', tone: 'violet' },
            { id: 'pero', label: 'PERO · las dos ideas son verdad', tone: 'neutral' },
          ], items: [
            { text: 'No vive en el centro, ___ en las afueras.', answer: 'sino', why: 'Las afueras sustituyen al centro: corrección.' },
            { text: 'La calle es estrecha, ___ muy bonita.', answer: 'pero', why: 'No hay negación; es estrecha y es bonita.' },
            { text: 'No queremos menos tiendas, ___ más tiendas.', answer: 'sino', why: '«Más» sustituye a «menos»: corrección.' },
            { text: 'No conozco a la concejala, ___ he leído su propuesta.', answer: 'pero', why: 'Hay un «no», pero no corriges nada: las dos cosas son verdad.' },
            { text: 'El plan no es perfecto, ___ es un buen comienzo.', answer: 'pero', why: 'No es perfecto y es un buen comienzo: las dos ideas son verdad.' },
            { text: 'No lo propuso Héctor, ___ Silvia.', answer: 'sino', why: 'Silvia sustituye a Héctor: corrección.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El ayuntamiento no cierra la calle, sino la convierte en zona peatonal.', ok: false, options: ['El ayuntamiento no cierra la calle, sino que la convierte en zona peatonal.', 'El ayuntamiento no cierra la calle, pero la convierte en zona peatonal.', 'El ayuntamiento no cierra la calle, si no que la convierte en zona peatonal.'], answer: 0, why: 'Corriges la acción y viene un verbo conjugado (convierte): «sino que», en una palabra.' },
            { sentence: 'Mi calle tiene mucho tráfico; la de Nuria, en cambio, es muy tranquila.', ok: true, why: 'Correcta: compara dos calles diferentes y «en cambio» va entre comas.' },
            { sentence: 'Llegué tarde a la asamblea y, encima, sin las llaves del local.', ok: true, why: 'Correcta: «encima» suma otro problema, en tono de queja.' },
            { sentence: 'Incluso no vino la concejala.', ok: false, options: ['Ni siquiera vino la concejala.', 'Incluso vino no la concejala.', 'Hasta no vino la concejala.'], answer: 0, why: 'En frase negativa, «not even» es «ni siquiera»; delante del verbo, sin «no».' },
            { sentence: 'La propuesta es buena; en cambio, voy a votar en contra.', ok: false, options: ['La propuesta es buena; además, voy a votar en contra.', 'La propuesta es buena, sino que voy a votar en contra.', 'La propuesta es buena; sin embargo, voy a votar en contra.'], answer: 2, why: 'No comparas dos cosas: votas contra lo esperado. Eso es «sin embargo» (clase 114).' },
          ] },
        ] },
        { title: 'Nuria y Raúl · Nuria and Raúl', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Chat entre comerciantes · A chat between shopkeepers', lines: [
            { who: 'Raúl (panadería)', text: 'Nuria, ¿fuiste ayer a la reunión con el ayuntamiento? Yo no pude ir.' },
            { who: 'Nuria', text: 'Sí. La concejala no vino sola, ___ con dos técnicos.', options: ['sino', 'pero', 'sino que'], answer: 0, why: 'Corriges «sola» con «con dos técnicos», sin verbo conjugado: «sino».' },
            { who: 'Raúl (panadería)', text: '¿Y qué dijeron de la carga y descarga?' },
            { who: 'Nuria', text: 'Que no la prohíben, ___ la limitan a una hora por la mañana.', options: ['pero', 'sino', 'sino que'], answer: 2, why: 'Corriges la acción y sigue un verbo conjugado (limitan): «sino que».' },
            { who: 'Raúl (panadería)', text: 'Una hora es poco. Recibo la harina a las siete y, ___, el camión siempre llega tarde.', options: ['encima', 'en cambio', 'incluso'], answer: 0, why: 'Suma otro problema, en tono de queja: «encima».' },
            { who: 'Nuria', text: 'Ya. La frutería tiene el mismo problema; la farmacia, ___, recibe los pedidos en una furgoneta pequeña.', options: ['en cambio', 'además', 'ni siquiera'], answer: 0, why: 'Compara dos negocios en situaciones diferentes: «en cambio».' },
            { who: 'Raúl (panadería)', text: '¿Y los demás comerciantes qué piensan?' },
            { who: 'Nuria', text: 'Hay de todo. ___ don Rafael, el de la ferretería, que siempre se queja, dijo que la idea es buena.', options: ['Ni siquiera', 'Hasta', 'Además'], answer: 1, why: 'Destaca a la persona menos esperada, en una frase afirmativa: «hasta» (= incluso).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['La', 'calle', 'es', 'tranquila;', 'además,', 'está', 'limpia.'], accept: ['La calle es tranquila; además, está limpia.'], en: 'The street is quiet; besides, it’s clean.' },
            { tiles: ['Nuria', 'no', 'vendió', 'el', 'local,', 'sino', 'que', 'lo', 'alquiló.'], accept: ['Nuria no vendió el local, sino que lo alquiló.'], en: 'Nuria didn’t sell the premises; she rented them out instead.' },
            { tiles: ['Nadie', 'protestó,', 'ni', 'siquiera', 'Raúl.'], accept: ['Nadie protestó, ni siquiera Raúl.'], en: 'Nobody complained, not even Raúl.' },
            { tiles: ['Héctor', 'va', 'a', 'pie,', 'mientras', 'que', 'Nuria', 'usa', 'la', 'furgoneta.'], accept: ['Héctor va a pie, mientras que Nuria usa la furgoneta.'], en: 'Héctor walks, whereas Nuria uses the van.' },
          ] },
        ] },
        { title: 'Une las ideas · Join the ideas', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Con el conector indicado · With the given connector', items: [
            { prompt: 'El banco nuevo es cómodo. Tiene sombra.', instruction: 'Une las dos ideas con «además». Empieza con «El banco nuevo».', accept: ['El banco nuevo es cómodo; además, tiene sombra', 'El banco nuevo es cómodo y, además, tiene sombra', 'El banco nuevo es cómodo y además tiene sombra'] },
            { prompt: 'La calle Mayor tiene mucha luz. La calle del Río es oscura.', instruction: 'Compara las dos calles con «en cambio». Empieza con «La calle Mayor».', accept: ['La calle Mayor tiene mucha luz; la calle del Río, en cambio, es oscura', 'La calle Mayor tiene mucha luz; en cambio, la calle del Río es oscura', 'La calle Mayor tiene mucha luz; la del Río, en cambio, es oscura', 'La calle Mayor tiene mucha luz; en cambio, la del Río es oscura'] },
            { prompt: 'La concejala no canceló la reunión. La cambió al viernes.', instruction: 'Une las frases con «sino que». Empieza con «La concejala».', accept: ['La concejala no canceló la reunión, sino que la cambió al viernes'] },
            { prompt: 'Nadie leyó el informe. Silvia tampoco lo leyó.', instruction: 'Une las frases con «ni siquiera». Empieza con «Nadie».', accept: ['Nadie leyó el informe, ni siquiera Silvia'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno compara dos lugares que conoce bien (dos barrios, dos oficinas, dos ciudades) en tres frases: una con «además», una con «en cambio» o «mientras que» y una con «no… sino».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Nuria', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Nuria cuenta la reunión · Nuria reports on the meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué piensa ahora Nuria de la prueba?). Segunda escucha: tu alumno levanta la mano con cada conector que oye (además, incluso, en cambio, sino que…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Apunta cada conector que oyes: además, incluso, en cambio, sino que… (Listen once for the gist, then note every connector you hear.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Nuria', channel: 'MENSAJE DE VOZ · GRUPO DE VECINOS DE LA CALLE MAYOR', src: '/audio/grammar-live/417.mp3',
            before: 'Una semana después, Nuria manda un mensaje de voz al grupo de vecinos. Acaba de tener la reunión con el ayuntamiento y los comercios. ¿Crees que ahora está a favor o en contra de la prueba? (A week later, Nuria sends a voice message to the residents’ group. Do you think she is now for or against the trial?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Nuria dice que los comercios van a votar en contra de la prueba.', 'Nuria cancela la fiesta del sábado porque la reunión fue mal.', 'Nuria cuenta la reunión y ahora apoya la prueba, aunque tiene una queja.'], answer: 2, why: 'Cuenta cómo fue la reunión, dice «vale la pena intentarlo» y se queja del estacionamiento.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Quién fue a la reunión?', options: ['Los padres del colegio.', 'Solo la concejala y Nuria.', 'Casi todos los comerciantes, incluso don Rafael.'], answer: 2, why: '«Fuimos casi todos, incluso don Rafael, el de la ferretería».', en: 'Who went to the meeting?' },
              { prompt: '¿Qué cambia en el plan?', options: ['La prueba ya no dura seis meses.', 'Habrá una hora de carga y descarga por la mañana.', 'La calle va a estar cerrada solo los fines de semana.'], answer: 1, why: '«No va a estar cerrada todo el día, sino que habrá una hora de carga y descarga por la mañana».', en: 'What changes in the plan?' },
              { prompt: '¿Qué negocio todavía tiene dudas?', options: ['La frutería.', 'Los restaurantes.', 'La librería.'], answer: 0, why: '«Los restaurantes están muy contentos; la frutería, en cambio, todavía tiene dudas».', en: 'Which shop still has doubts?' },
              { prompt: '¿De qué se queja Nuria?', options: ['Del precio de la fiesta del sábado.', 'De la concejala, que no contestó las preguntas.', 'Del estacionamiento: cierra a las nueve y los domingos está cerrado.'], answer: 2, why: '«El estacionamiento de la estación cierra a las nueve y, encima, los domingos está cerrado».', en: 'What does Nuria complain about?' },
            ],
            transcript: 'Hola, vecinos, soy Nuria, la de la librería. Les cuento cómo fue ayer la reunión de los comercios con el ayuntamiento. Fuimos casi todos, [[incluso|teal]] don Rafael, el de la ferretería, que nunca va a ninguna reunión. La concejala nos explicó el plan con calma y, [[además|blue]], contestó todas nuestras preguntas. Lo más importante: la calle no va a estar cerrada todo el día, [[sino que|violet]] habrá una hora de carga y descarga por la mañana. Para mí, eso es clave. Los restaurantes están muy contentos; la frutería, [[en cambio|orange]], todavía tiene dudas. Y una queja: el estacionamiento de la estación cierra a las nueve y, [[encima|blue]], los domingos está cerrado. Hace un mes [[ni siquiera|teal]] nos llamaban, [[mientras que|orange]] ahora nos piden opinión. No es una solución perfecta, [[sino|violet]] una prueba, y vale la pena intentarlo. Por último, el sábado hay una fiesta de inauguración en la calle. ¡Los espero a todos!',
            reply: { teacher: 'Tú eres Nuria. Tu alumno es un vecino y responde al mensaje con tres frases: una con «además», una con «en cambio» y una con «no… sino».', self: 'Responde a Nuria en voz alta como un vecino: tu opinión de la prueba con «además», una comparación con «en cambio» y una corrección con «no… sino». (Answer as a neighbour using the three connectors.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu barrio, tus argumentos', coach: 'Suma, destaca, compara, corrige. Add, highlight, compare, correct.',
      steps: [
        { title: 'Opina sobre tu barrio · Give your opinion on your area', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Silvia y diriges la conversación. Tu alumno habla de su barrio o de su ciudad. Tú repites su frase con el conector correcto cuando hace falta y sigues con la repregunta.', self: 'Piensa en tu barrio o en tu ciudad. Lee la pregunta, responde en voz alta con los conectores de la tarjeta y, si quieres, escribe tu respuesta. (Think of your area and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Te gustaría una calle sin coches en tu barrio? Da dos argumentos. · Would you like a car-free street in your area? Give two arguments.', followUps: ['¿Qué calle elegirías? (Which street would you choose?)', '¿Quién estaría en contra? (Who would be against it?)'], phrases: ['Sí, porque… [[Además|blue]], …', 'No me parece mala idea; [[es más|blue]], …', 'Habría menos ruido y [[también|blue]]…'], hint: 'Dos argumentos en la misma dirección: el segundo con «además» o, si es más fuerte, con «es más».', example: 'Sí, me gustaría. La calle de mi colegio tiene mucho tráfico. Además, los niños salen todos a la misma hora. Es más, creo que sería más seguro para todos.', next: 'Ahora, dos lugares.', teacher: 'Si tu alumno solo usa «y», le das la frase con «además» y la repite.' },
            { q: 'Compara dos zonas de tu ciudad: el centro y tu barrio, o dos barrios que conoces. · Compare two parts of your town.', followUps: ['¿Dónde prefieres vivir? (Where would you rather live?)', '¿Cuál es más caro? (Which is more expensive?)'], phrases: ['El centro es… ; mi barrio, [[en cambio|orange]], …', '…, [[mientras que|orange]] en mi barrio…'], hint: 'Dos lugares diferentes: «en cambio» entre comas o «mientras que» con coma delante.', example: 'El centro es bonito, pero tiene mucho ruido; mi barrio, en cambio, es muy tranquilo. En el centro hay muchos turistas, mientras que en mi barrio casi todos somos vecinos de siempre.', next: 'Ahora, algo sorprendente.' },
            { q: '¿Hay algo que hace todo el mundo en tu ciudad? ¿Algo que nadie hace? · Something everybody does, or nobody does?', followUps: ['¿Quién es la persona más sorprendente? (Who is the most surprising person?)', '¿Por qué crees que pasa? (Why do you think that happens?)'], phrases: ['Todo el mundo…, [[incluso|teal]]…', '[[Hasta|teal]] mi abuelo…', 'Nadie…, [[ni siquiera|teal]]…'], hint: 'Incluso y hasta en frases afirmativas; ni siquiera en frases negativas.', example: 'En mi ciudad todo el mundo va en bicicleta, incluso los profesores de la universidad. Hasta mi abuelo, que tiene setenta y cinco años, va al mercado en bici. Nadie usa el coche para distancias cortas, ni siquiera cuando llueve.', next: 'Ahora, una idea falsa.' },
            { q: 'Muchas personas tienen una idea falsa de tu ciudad o de tu país. Corrígela. · Correct a false idea about your town or country.', followUps: ['¿De dónde viene esa idea? (Where does that idea come from?)', '¿Qué deberían visitar? (What should people visit?)'], phrases: ['No es…, [[sino|violet]]…', 'La gente no…, [[sino que|violet]]…', 'Es…, [[pero|violet]]…'], hint: 'Sino para corregir una palabra; sino que si sigue un verbo conjugado; pero si las dos ideas son verdad.', example: 'Mucha gente cree que mi ciudad es fría, pero no es fría, sino húmeda. Y la gente no se queda en casa en invierno, sino que sale mucho a los bares. Es una ciudad pequeña, pero tiene mucha vida.', next: 'Ahora, una queja.' },
            { q: 'Cuenta un problema de tu barrio que te molesta mucho. · Tell a problem in your area that really bothers you.', followUps: ['¿Desde cuándo pasa? (Since when?)', '¿Qué solución propones? (What solution do you suggest?)'], phrases: ['Hay poco…, y [[encima|blue]]…', '[[Ni siquiera|teal]] hay…', 'El ayuntamiento no…, [[sino que|violet]]…'], hint: 'Encima es coloquial y perfecto para una queja: suma otro problema.', example: 'En mi barrio hay pocos contenedores y, encima, los vacían solo dos veces por semana. Ni siquiera hay papeleras en el parque. El ayuntamiento no resuelve el problema, sino que pone multas.', next: 'Por último, tu discurso.', teacher: 'Reacciona como Silvia: «¿Y qué propones?». Tu alumno responde con dos ideas unidas por «además».' },
            { q: 'Eres Héctor o Nuria en la asamblea. Defiende tu postura en un minuto, con orden. · Defend your position in one minute, in order.', followUps: ['¿Y qué dices del estacionamiento? (What about parking?)', '¿Qué propones para los comercios? (What do you suggest for the shops?)'], phrases: ['**En primer lugar**, … [[además|blue]], …', '**En segundo lugar**, … ; …, [[en cambio|orange]], …', '**Por último**, no… [[sino|violet]]…'], hint: 'Ordena tres argumentos: en primer lugar, en segundo lugar, por último. Usa un conector de cada color.', example: 'En primer lugar, la calle tendrá menos ruido; además, será más segura. En segundo lugar, los jóvenes van a pie; los mayores, en cambio, necesitan el taxi, y los taxis pueden pasar. Por último, no es un cambio para siempre, sino una prueba de seis meses.', teacher: 'Tú defiendes la postura contraria y tu alumno responde a tus argumentos. Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Silvia, dirige la asamblea y hace las preguntas; tú das tu opinión sobre tu barrio con los conectores de la clase.', self: 'Ahora tú diriges la asamblea: haz las preguntas en voz alta y responde como Nuria, que tiene dudas. (Now you chair the meeting: ask the questions and answer as Nuria.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu opinión por escrito', coach: 'Ordena, suma, compara. Order, add, compare.',
      steps: [
        { title: 'Un mensaje al ayuntamiento · A message to the town council', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada conector: ¿suma, destaca, compara o corrige? ¿Tiene la puntuación correcta? Al final, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada conector: ¿qué hace? ¿Tiene comas? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Buzón de participación · Public feedback box', situation: 'El ayuntamiento abre un buzón en su web para conocer la opinión de los vecinos sobre la prueba de la calle Mayor (o sobre un cambio en tu calle). Escribe tu mensaje: da tu opinión con argumentos ordenados y haz una propuesta. (The council opens an online feedback box about the calle Mayor trial, or about a change in your street. Write your message: give your opinion with ordered arguments and make a proposal.)', task: [
            'Preséntate y di tu opinión general. (Introduce yourself and give your overall opinion.)',
            'Ordena dos o tres argumentos con «en primer lugar… por último» y suma uno con «además» o «es más». (Order your arguments and add one with “además”.)',
            'Destaca un caso con «incluso», «hasta» o «ni siquiera». (Highlight a case.)',
            'Compara dos grupos o lugares con «en cambio» o «mientras que». (Compare two groups or places.)',
            'Corrige una idea con «no… sino» o «no… sino que» y termina con una propuesta. (Correct an idea and end with a proposal.)',
          ], starters: ['Buenos días:', 'Soy vecina / vecino de…', 'En primer lugar, …', 'Además, …', '…; en cambio, …', 'El problema no es…, sino…', 'Por último, …', 'Un saludo,'],
            words: ['además', 'es más', 'encima', 'incluso', 'hasta', 'ni siquiera', 'en cambio', 'mientras que', 'sino', 'sino que', 'pero', 'en primer lugar', 'por último'],
            model: 'Buenos días: Soy vecina de la calle Mayor y quiero dar mi opinión sobre la prueba. **En primer lugar**, creo que es una buena idea. Sin coches, la calle tiene menos ruido; [[además|blue]], los niños pueden jugar sin peligro. [[Incluso|teal]] mi vecino del tercero, que antes estaba en contra, ahora pasea por la tarde. **En segundo lugar**, el problema no es la calle, [[sino|violet]] el estacionamiento: abre tarde y, [[encima|blue]], es caro. Los restaurantes están contentos; algunas tiendas, [[en cambio|orange]], venden menos. Hace un año el ayuntamiento [[ni siquiera|teal]] nos preguntaba. **Por último**, propongo dos cosas: abrir el estacionamiento a las siete y hacer una tarjeta de descuento para los clientes de los comercios. Un saludo, Laura Pinto.',
            minWords: 90,
            checks: [
              { label: 'Un conector para sumar: además, es más, encima (adding)', pattern: '(?<!\\p{L})(?:además|ademas|es\\s+más|es\\s+mas|encima)(?!\\p{L})', tip: 'Suma un argumento: «Tiene menos ruido; además, es más segura».' },
              { label: 'Incluso, hasta o ni siquiera (highlighting)', pattern: '(?<!\\p{L})(?:incluso|hasta|ni\\s+siquiera)(?!\\p{L})', tip: 'Destaca el caso menos esperado: «Incluso mi vecino, que estaba en contra, pasea por la tarde».' },
              { label: 'En cambio o mientras que (comparing two things)', pattern: '(?<!\\p{L})(?:en\\s+cambio|mientras\\s+que|por\\s+el\\s+contrario)(?!\\p{L})', tip: 'Compara dos grupos: «Los restaurantes están contentos; algunas tiendas, en cambio, venden menos».' },
              { label: 'Sino o sino que (correcting)', pattern: '(?<!\\p{L})sino(?!\\p{L})', tip: 'Corrige una idea: «El problema no es la calle, sino el estacionamiento».' },
              { label: 'Ordenar: en primer lugar, por último… (ordering)', pattern: '(?<!\\p{L})(?:en\\s+primer\\s+lugar|por\\s+último|por\\s+ultimo|en\\s+segundo\\s+lugar|por\\s+un\\s+lado|finalmente)(?!\\p{L})', tip: 'Ordena tus argumentos: «En primer lugar, … Por último, …».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})incluso\\s+no(?!\\p{L})', why: 'En frase negativa, «not even» es **ni siquiera**: «Ni siquiera nos preguntaban».' },
              { pattern: '(?<!\\p{L})si\\s+no\\s+que(?!\\p{L})', why: 'Para corregir se escribe en una palabra: **sino que**. «Si no» es una condición.' },
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
            { tone: 'blue', label: 'SUMAR', formula: 'además · también · encima (coloquial) · es más', example: 'Tiene menos ruido; además, es más segura.', caption: 'otro argumento en la misma dirección', en: 'another argument in the same direction' },
            { tone: 'teal', label: 'INTENSIFICAR', formula: 'incluso · hasta · ni siquiera (negativa)', example: 'Vinieron todos, incluso don Rafael. / Nadie protestó, ni siquiera Nuria.', caption: 'el caso que menos esperas', en: 'the case you least expect' },
            { tone: 'orange', label: 'CONTRASTAR DOS COSAS', formula: 'en cambio · mientras que · por el contrario', example: 'Los jóvenes van a pie; los mayores, en cambio, necesitan el taxi.', caption: 'dos cosas distintas; no es «sin embargo»', en: 'two different things; not the same as “sin embargo”' },
            { tone: 'violet', label: 'CORREGIR O MATIZAR', formula: 'no A, sino B · no + verbo, sino que + verbo · A, pero B', example: 'No es caro, sino barato. / No lo compró, sino que lo alquiló. / Es caro, pero bueno.', caption: 'sino sustituye; pero suma un límite', en: 'sino replaces; pero adds a limit' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de elegir el conector, pregúntate qué haces: ¿**sumas** (además), ¿**destacas** lo inesperado (incluso, ni siquiera), ¿**comparas** dos cosas (en cambio, mientras que) o ¿**corriges** algo negado (sino, sino que)? Y puntúa: «; además,», «, en cambio,», «, sino que».', en: 'Before choosing the connector, ask yourself what you are doing: adding (además), highlighting the unexpected (incluso, ni siquiera), comparing two things (en cambio, mientras que) or correcting something negated (sino, sino que)? And punctuate: “; además,”, “, en cambio,”, “, sino que”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El piso es muy luminoso; ___, tiene una terraza enorme.', options: ['además', 'en cambio', 'sino'], answer: 0, why: 'Otra ventaja en la misma dirección: «además».', en: 'The flat is very bright; besides, it has a huge terrace.' },
            { prompt: 'Mi hermano duerme ocho horas, ___ yo duermo seis.', options: ['sino que', 'mientras que', 'incluso'], answer: 1, why: 'Comparas a dos personas dentro de una frase: «mientras que».', en: 'My brother sleeps eight hours, whereas I sleep six.' },
            { prompt: 'No llamé a Ana, ___ le mandé un mensaje.', options: ['sino que', 'sino', 'pero'], answer: 0, why: 'Corriges la acción y sigue un verbo conjugado (mandé): «sino que».', en: 'I didn’t call Ana; I sent her a message instead.' },
            { prompt: 'Estaba tan nervioso que ___ desayunó.', options: ['ni siquiera', 'incluso', 'hasta'], answer: 0, why: 'Frase negativa (no desayunó): «ni siquiera», sin «no».', en: 'He was so nervous that he didn’t even have breakfast.' },
            { prompt: 'El restaurante es caro, ___ la comida es excelente.', options: ['pero', 'sino que', 'sino'], answer: 0, why: 'No hay negación y las dos ideas son verdad: «pero».', en: 'The restaurant is expensive, but the food is excellent.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un campamento de verano.', blocks: [
          { kind: 'lead', text: 'Silvia y su pareja eligen un campamento de verano para sus hijos. Comparan dos opciones: el campamento del lago y el de la montaña. Une las ideas con el conector indicado.', en: 'Silvia and her partner are choosing a summer camp for their children. They compare two options: the lake camp and the mountain camp. Join the ideas with the given connector.' },
          { kind: 'rewrite', title: 'Dos campamentos · Two camps', items: [
            { prompt: 'El campamento del lago tiene piscina. Tiene clases de inglés.', instruction: 'Une las ideas con «además». Empieza con «El campamento del lago».', accept: ['El campamento del lago tiene piscina; además, tiene clases de inglés', 'El campamento del lago tiene piscina y, además, tiene clases de inglés', 'El campamento del lago tiene piscina y además tiene clases de inglés'] },
            { prompt: 'El campamento del lago cuesta 300 euros. El de la montaña cuesta 450 euros.', instruction: 'Compara con «mientras que». Empieza con «El campamento del lago».', accept: ['El campamento del lago cuesta 300 euros, mientras que el de la montaña cuesta 450 euros', 'El campamento del lago cuesta 300 euros, mientras que el de la montaña cuesta 450', 'El campamento del lago cuesta 300 euros, mientras que el campamento de la montaña cuesta 450 euros'] },
            { prompt: 'Los niños no van una semana. Van dos semanas.', instruction: 'Corrige con «sino», sin repetir el verbo. Empieza con «Los niños».', accept: ['Los niños no van una semana, sino dos', 'Los niños no van una semana, sino dos semanas'] },
          ] },
        ] },
        { title: 'Ampliación · No solo… sino también', mascot: '/brand/mascot/portrait.webp', coach: 'Para ir un poco más lejos. To go a bit further.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'AMPLIACIÓN · NO SOLO… SINO TAMBIÉN', question: '¿Quieres sumar y dar más peso a la segunda idea?', en: 'Do you want to add, giving more weight to the second idea?', formula: ['no solo A, **sino también** B', 'no solo + verbo…, **sino que también** + verbo conjugado'],
            meaning: 'Aquí «sino» no corrige: **suma**. La primera idea es verdad y la segunda, también; la segunda pesa más. Con verbo conjugado: **sino que también**. Y en textos formales, **por el contrario** presenta lo opuesto a una idea negada.',
            examples: [
              { es: 'La prueba no solo reduce el ruido, [[sino que también|violet]] ayuda al comercio.', en: 'The trial not only reduces noise, but also helps local shops.' },
              { es: 'Vinieron no solo los vecinos, [[sino también|violet]] los comerciantes.', en: 'Not just the residents came, but the shopkeepers too.' },
              { es: 'El tráfico no ha disminuido; [[por el contrario|orange]], ha aumentado un diez por ciento.', en: 'Traffic has not decreased; on the contrary, it has risen by ten per cent.' },
            ] },
          { kind: 'rewrite', title: 'Suma con más fuerza · Add with more force', items: [
            { prompt: 'La calle es más segura. También es más bonita.', instruction: 'Usa «no solo… sino que también» o «no solo… sino también». Empieza con «La calle no solo».', accept: ['La calle no solo es más segura, sino que también es más bonita', 'La calle no solo es más segura, sino también más bonita'] },
            { prompt: 'Vinieron los vecinos. También vinieron los comerciantes.', instruction: 'Usa «no solo… sino también». Empieza con «No solo».', accept: ['No solo vinieron los vecinos, sino también los comerciantes', 'No solo vinieron los vecinos, sino que también vinieron los comerciantes'] },
          ] },
          { kind: 'choice', title: 'Registro formal · Formal register', items: [
            { context: 'Un informe oficial del ayuntamiento. (An official council report.)', prompt: 'Las ventas de la calle no han bajado; ___, han subido un cinco por ciento.', options: ['en cambio', 'por el contrario', 'encima'], answer: 1, why: 'Presenta lo opuesto a la idea negada, en un texto formal: «por el contrario». «Encima» es coloquial y «en cambio» compara dos cosas distintas.', en: 'Sales on the street have not fallen; on the contrary, they have risen by five per cent.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Si no hay tiempo, se pasa directamente al siguiente paso.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 118 · Discurso referido introductorio: dijo que / pidió que', text: 'Ya defiendes una opinión con argumentos ordenados: «además», «incluso», «en cambio», «no… sino». Después de una asamblea, lo normal es contar a otras personas lo que dijo cada uno: «La concejala **dijo que** la prueba duraría seis meses», «Nuria nos **pidió que**…». En la clase 118 aprendes a contar las palabras de otros: es el paso natural después de debatir.', en: 'You can now defend an opinion with ordered arguments: “además”, “incluso”, “en cambio”, “no… sino”. After a meeting, the natural thing is to tell others what each person said: “The councillor said that the trial would last six months”, “Nuria asked us to…”. In class 118 you learn to report other people’s words: the natural step after a debate.', href: '/gramatica/discurso-referido-introductorio-dijo-que-pidio', label: 'Ir a la clase 118' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué cambiarías en tu calle? Da dos argumentos y corrige una idea falsa». Respuesta esperada: «además» + «no… sino». Tarea: escribir el mensaje de Escribir sobre un cambio real en su barrio.' },
        ] },
      ],
    },
  ],
};
