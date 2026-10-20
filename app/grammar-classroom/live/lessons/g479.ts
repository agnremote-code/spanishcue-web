import type { LiveLesson } from '../types';

/**
 * Lesson 479 · C1 · Relativas complejas: cuyo, el cual, lo cual (course unit G179).
 * Builds on G112 (lesson 412: quien, el que, el cual introductorio, commas), G142 (lesson 234:
 * the verb's preposition before the relative), G143 (lesson 443: basic cuyo, preposition + cuyo,
 * quesuismo) and G144 (lesson 444: , lo que / , lo cual for a whole clause). Mood in relatives is
 * G169 (lesson 469). Restrictive vs explanatory punctuation is deepened in G203 (C1).
 * Here, the C1 relative syntax of careful prose: preposition + el que / el cual / que (short
 * prepositions: el que most natural; long prepositions and locutions — según, sobre, mediante,
 * durante, sin, a raíz de, gracias a, en torno a — prefer el cual; never *sobre que); el cual without
 * preposition only in explanatory clauses (*el libro el cual leí), and its use to pick a distant or
 * ambiguous antecedent by gender and number (la hija del encargado, el cual…); cuyo with
 * prepositions inside long sentences (en cuya casa, a cuyo padre, sin cuyo esfuerzo); partitives
 * (la mayoría de las cuales, cuatro de las cuales); oral resumptive structures (que su, el chico que
 * le dije, la casa que vivía en ella) as frequent in speech but not accepted in careful writing;
 * relative adverbs (donde, cuando, como; en el que / en que / donde; *el año donde); cleft sentences
 * (Fue Leonor quien…, Fueron los obreros los que…, Es aquí donde…, Fue entonces cuando…, Fue así
 * como…) with agreement of «ser». Ampliación: «Fue con ella con quien» vs «que galicado», «es por eso
 * por lo que», «Fui yo quien lo escribió», distant antecedent.
 * Scene: Editorial Cauce, a small publisher in the fictional town of Villaseca del Río. Adriana
 * Quiroga (editor) and Gabriel Ortiz (local historian) revise his book «La Hilandera», the story of
 * a textile mill (1898–1978) whose old warehouse is now the cultural centre; Pilar Esteve, the
 * centre's archivist, prepares the exhibition. Rosario Benítez, 94, a former weaver, is his key
 * witness. Escuchar: Gabriel presents the book on a local-history podcast (es-CO-GonzaloNeural,
 * ustedes). Escribir: the exhibition panel. Everyone uses tú. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 479,
  level: 'C1',
  title: 'Relativas complejas: cuyo, el cual, lo cual',
  subtitle: 'Escribir prosa cuidada con «según el cual», «en cuya casa», «la mayoría de las cuales» y «Fue entonces cuando», sin calcos del habla.',
  legend: [
    { tone: 'blue', label: 'PREPOSICIÓN + RELATIVO · en la que, según el cual, a raíz de lo cual' },
    { tone: 'teal', label: 'EXPLICATIVA / ESPECIFICATIVA · comas, «el cual» sin preposición, antecedente claro' },
    { tone: 'violet', label: 'POSESIÓN Y PARTE · en cuya casa, cuatro de las cuales (no «que su»)' },
    { tone: 'orange', label: 'ADVERBIOS Y PERÍFRASIS · donde, cuando, como · Fue… quien, Es aquí donde' },
  ],
  optionNotes: {
    'que su': '«Que su» (quesuismo) es frecuente en la conversación espontánea, pero la norma culta lo rechaza. Para unir un poseedor con lo poseído, **cuyo / cuya…**, con la preposición delante si hace falta.',
    'donde': '«Donde» señala un lugar (Es aquí donde…). Para un momento, **en que / en el que** o, en una perífrasis, **cuando**; para un modo, **como**.',
    'lo cual': '«Lo cual» retoma una frase entera, no un nombre: para un nombre, **el cual / la cual / los cuales…**',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'De la entrevista al libro', coach: 'Lo que se dice no siempre se escribe igual. What you say is not always what you write.',
      steps: [
        { title: 'Un manuscrito que suena a grabadora · A manuscript that sounds like a recorder', blocks: [
          { kind: 'lead', text: 'Gabriel Ortiz, historiador local, ha escrito «La Hilandera», la historia de la fábrica textil en torno a la cual creció Villaseca del Río. Para escribirlo grabó horas de entrevistas con antiguos trabajadores, y se nota: hay frases que funcionan al hablar pero no en un libro. Adriana Quiroga, su editora en Editorial Cauce, revisa el texto con él. En esta clase das el paso de C1: elegir el relativo exacto tras una preposición, saber cuándo cabe «el cual», usar «cuyo» dentro de frases largas y destacar información con «Fue… quien» o «Es aquí donde».', en: 'Gabriel, a local historian, has written the history of the textile mill the town grew up around. He based it on hours of recorded interviews, and it shows: some sentences work in speech but not in a book. His editor, Adriana, is revising it with him. This class takes you to C1 relative syntax: choosing the exact relative after a preposition, knowing when «el cual» fits, using «cuyo» inside long sentences and highlighting information with cleft sentences.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno explica qué relativo usa cada una y por qué no se podría cambiar por «que» solo.', self: 'Lee las tres frases en voz alta y explica qué relativo usa cada una y por qué no valdría «que» solo. (Why wouldn’t plain «que» work?)' } },
          { kind: 'compare', title: 'Tres relativos del capítulo tres · Three relatives from chapter three', columns: [
            { tone: 'blue', label: 'PREPOSICIÓN BREVE · el que', sentence: 'La nave [[en la que|blue]] trabajaba Rosario era la de tintes.', idea: 'Con a, con, de, en, por, lo más natural es «el que»; «en la cual» sería más formal.', en: 'After short prepositions, «el que» is the everyday choice; «el cual» sounds more formal.' },
            { tone: 'blue', label: 'PREPOSICIÓN LARGA · el cual', sentence: 'Se conserva un informe [[según el cual|blue]] el fuego empezó en la caldera.', idea: 'Con según, sobre, mediante, a raíz de, gracias a…, el registro cuidado prefiere «el cual».', en: 'After longer prepositions and prepositional phrases, careful prose prefers «el cual»; with «según» it is almost the only option.' },
            { tone: 'teal', label: 'SIN PREPOSICIÓN · solo entre comas', sentence: 'El almacén, [[el cual|teal]] se restauró en 2004, es hoy el centro cultural.', idea: 'Sin preposición, «el cual» solo va en una explicativa. Al hablar diríamos «que».', en: 'Without a preposition, «el cual» only appears in a non-restrictive clause between commas; in speech you would use «que».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Por qué no se dice «un informe según que el fuego empezó…»?', options: ['Porque «según» nunca va con relativos.', 'Porque «informe» es masculino y pide «quien».', 'Porque tras «según» el relativo necesita artículo: según el cual.'], answer: 2, why: 'Tras preposiciones largas, el relativo lleva artículo; con «según», casi siempre «el cual».', en: 'Long prepositions need article + relative, and «según» almost always takes «el cual».' },
            { prompt: '«El almacén, el cual se restauró en 2004…» ¿Qué versión es más natural en una conversación?', options: ['El almacén, lo cual se restauró en 2004…', 'El almacén, que se restauró en 2004…', 'El almacén el cual se restauró en 2004…'], answer: 1, why: 'En explicativas, «que» es lo más frecuente; «el cual» es propio de textos cuidados.', en: 'In everyday speech, plain «que» is the usual choice in a non-restrictive clause.' },
          ] },
        ] },
        { title: 'Preposición + relativo · Preposition + relative', mascot: '/brand/mascot/studying.webp', coach: 'Cuanto más pesa la preposición, más «el cual». The heavier the preposition, the more «el cual».', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PREPOSICIÓN + EL QUE / EL CUAL', question: '¿Qué relativo pongo detrás de la preposición?', en: 'After a preposition you need an article: el que or el cual (both agree with the antecedent). «El cual» is stressed and can bear the weight of two-syllable prepositions and longer phrases, so careful writing prefers it there. These are preferences, not strict rules — except that a long preposition can never be followed by bare «que».', formula: ['nombre + preposición + el / la / los / las + que · cual(es) + verbo', 'a, con, de, en, por → el que (lo más natural) · el cual (formal)', 'según, sobre, mediante, durante, sin, a raíz de, gracias a, en torno a… → el cual (preferido)'],
            meaning: 'La preposición es la que pide el verbo o la idea de la frase (firmar **sobre** la mesa, crecer **en torno a** la fábrica). Va delante del relativo y casi siempre con artículo. «Que» solo, sin artículo, aparece únicamente tras algunas preposiciones breves —sobre todo «en»: el año **en que**, la forma **en que**—, nunca tras «sobre», «según» o una locución.',
            examples: [
              { es: 'La mesa [[sobre la cual|blue]] se firmó el acuerdo de 1933 está en la entrada.', en: 'The table on which the 1933 agreement was signed stands in the entrance.' },
              { es: 'Leonor abrió una escuela [[gracias a la cual|blue]] cientos de niños aprendieron a leer.', en: 'Leonor opened a school thanks to which hundreds of children learned to read.' },
              { es: 'Fue un esfuerzo colectivo [[sin el cual|blue]] la nave no se habría reconstruido.', en: 'It was a collective effort without which the building would not have been rebuilt.' },
              { es: 'La nave se quemó, [[a raíz de lo cual|blue]] la empresa anunció el cierre.', en: 'The building burned down, as a result of which the company announced its closure (lo cual = the whole event).' },
            ] },
          { kind: 'table', title: '¿El que o el cual? · Which one?', head: ['Preposición', 'el que', 'el cual', 'Ejemplo'], rows: [
            ['a, con, de, en, por', '✓ lo más natural', '✓ más formal', 'la tejedora **con la que / con la cual** hablé'],
            ['sobre, desde, hacia, durante, mediante, tras, contra', '✓ posible', '✓ preferido en textos cuidados', 'la mesa **sobre la cual** se firmó'],
            ['según', 'poco frecuente', '✓ casi siempre', 'un informe **según el cual**…'],
            ['sin', '✓ posible', '✓ muy frecuente', 'un esfuerzo **sin el cual**…'],
            ['locuciones: a raíz de, gracias a, junto a, en torno a, a pesar de', '✓ posible', '✓ preferido', 'la escuela **gracias a la cual**…'],
            ['antecedente = una frase entera', 'lo que', 'lo cual', '**a raíz de lo cual**, **tras lo cual**, **con lo cual**'],
          ], note: 'Son tendencias de uso: «la razón por la que» y «la razón por la cual» son igual de correctas. Lo que nunca es correcto es «*sobre que», «*según que» como relativo o «cual» sin artículo («*la razón por cual»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Gabriel escribe: «La colonia obrera era el barrio ___ giraba la vida del pueblo».', options: ['en torno que', 'en torno a que', 'en torno al cual'], answer: 2, why: 'Locución preposicional («girar en torno a») + artículo + relativo: en torno al cual.', en: 'The workers’ estate was the neighbourhood around which village life revolved.' },
            { prompt: '«Es la ventana ___ se veía el río.» ¿Qué opción NO es correcta?', options: ['desde la que', 'desde la cual', 'desde que'], answer: 2, why: '«Desde que» es una conjunción temporal (since); como relativo, «desde» necesita artículo.', en: 'Which option is wrong? «Desde que» means «since» (time), not «from which».' },
            { prompt: 'La caldera falló, ___ la nave de tintes ardió en pocos minutos.', options: ['tras la cual', 'tras lo cual', 'tras el cual'], answer: 1, why: 'El antecedente es todo el hecho (que la caldera fallara): lo cual.', en: 'The boiler failed, after which the dye house burned down in minutes.' },
          ] },
        ] },
        { title: 'Comas, «el cual» y el antecedente correcto · Commas, «el cual» and the right antecedent', mascot: '/brand/mascot/standing.webp', coach: '¿Seleccionas o añades? Are you selecting or adding?', blocks: [
          { kind: 'compare', title: 'La coma cambia quiénes son · The comma changes who', columns: [
            { tone: 'teal', label: 'ESPECIFICATIVA · sin comas', sentence: 'Los obreros [[que vivían en la colonia|teal]] pagaban un alquiler simbólico.', idea: 'Solo algunos obreros: la relativa selecciona a los que vivían allí. Sin preposición, solo «que».', en: 'Restrictive: only the workers who lived there paid it. Without a preposition, only «que» is possible.' },
            { tone: 'teal', label: 'EXPLICATIVA · entre comas', sentence: 'Los obreros, [[que vivían en la colonia|teal]], pagaban un alquiler simbólico.', idea: 'Todos los obreros vivían allí: la relativa añade un dato. Admite que, quienes y los cuales.', en: 'Non-restrictive: all the workers lived there; the clause just adds information. «Que», «quienes» or «los cuales» are possible.' },
          ] },
          { kind: 'table', title: 'Sin preposición, ¿qué relativo admite cada tipo? · Without a preposition', head: ['', 'que', 'quien / quienes', 'el cual / la cual…'], rows: [
            ['Especificativa', '✓', '✗ *los obreros quienes vivían…', '✗ *el libro el cual leí'],
            ['Explicativa', '✓ lo más frecuente', '✓ solo personas', '✓ formal, sobre todo escrito'],
          ], note: 'Con preposición, las dos clases admiten «el que» y «el cual»: «la tejedora con la cual hablé», «Rosario, con la cual hablé ayer, …».' },
          { kind: 'tip', icon: '🔑', title: '«El cual» elige antecedente · «El cual» picks the antecedent', text: '«Entrevisté a la hija del encargado, que vivía junto al río» es ambigua: ¿quién vivía allí? Con **la cual** hablas de la hija; con **el cual**, del encargado. Como lleva artículo y acento propio, «el cual» también puede retomar un nombre que ha quedado lejos, detrás de otros complementos.', en: '«Que» does not show gender or number, so the sentence is ambiguous. «La cual» points to the daughter, «el cual» to the foreman. Because it carries its own article and stress, «el cual» can also refer back to a noun that is several words away.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Las tejedoras, que pidieron la escuela, eran casi todas madres.» ¿Cuántas tejedoras pidieron la escuela?', options: ['Todas las tejedoras de las que se habla.', 'Solo una parte de ellas.', 'No se puede saber.'], answer: 0, why: 'Explicativa (entre comas): el dato vale para todo el grupo.', en: 'A non-restrictive clause applies to the whole group.' },
            { prompt: 'Gabriel quiere dejar claro que quien escribía cartas era el nieto: «Hablé con el nieto de Rosario, ___ escribía cartas a la fábrica».', options: ['la cual', 'lo cual', 'el cual'], answer: 2, why: '«El cual» concuerda con «el nieto» y descarta a Rosario.', en: '«El cual» agrees with «el nieto» and rules out Rosario as the antecedent.' },
            { prompt: '¿Cuál de estas frases es correcta?', options: ['Las cartas que encontré son de 1932.', 'Las cartas las cuales encontré son de 1932.', 'Las cartas quienes encontré son de 1932.'], answer: 0, why: 'Especificativa sin preposición: solo «que».', en: 'Restrictive clause without a preposition: only «que».' },
          ] },
        ] },
        { title: 'Posesión, partes y calcos del habla · Possession, parts and spoken patterns', mascot: '/brand/mascot/speaking.webp', coach: 'Lo que se oye y lo que se escribe. What you hear and what you write.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CUYO CON PREPOSICIÓN · PARTITIVOS', question: '¿Cómo encajo «cuyo» o una parte del grupo en una frase larga?', en: 'You already know «cuyo». At C1 it moves inside long sentences: the preposition goes before the whole «cuyo + noun» group, including personal «a» (a cuyo padre). To talk about part of a group, use a quantifier + «de los cuales / de las cuales» (de los que is also possible).', formula: ['preposición + cuyo / cuya / cuyos / cuyas + nombre', 'cuantificador + de + los / las cuales: la mayoría de las cuales, cuatro de los cuales, ninguno de los cuales'],
            meaning: '«Visité a Rosario. En su casa encontré cartas» → «Visité a Rosario, **en cuya casa** encontré cartas». «Doce familias; cuatro de ellas guardan telas» → «doce familias, **cuatro de las cuales** guardan telas».',
            examples: [
              { es: 'Rosario, [[en cuya casa|violet]] encontré las fotos, tiene noventa y cuatro años.', en: 'Rosario, in whose house I found the photos, is ninety-four.' },
              { es: 'Es la maestra [[a cuyo padre|violet]] entrevisté en 2019.', en: 'She is the teacher whose father I interviewed in 2019 (personal «a» before cuyo).' },
              { es: 'Trabajaban allí doscientas familias, [[la mayoría de las cuales|violet]] vivían junto al río.', en: 'Two hundred families worked there, most of whom lived by the river.' },
            ] },
          { kind: 'table', title: 'Al hablar / al escribir · Speech vs careful writing', head: ['Al hablar (frecuente, informal)', 'En un texto cuidado'], rows: [
            ['una vecina **que su** hijo trabajó allí', 'una vecina **cuyo** hijo trabajó allí'],
            ['el chico **que le** dije lo del libro', 'el chico **al que** (le) dije lo del libro'],
            ['la casa **que** vivía **en ella**', 'la casa **en la que** vivía'],
            ['un libro **que** nadie **lo** había leído', 'un libro **que** nadie había leído'],
          ], note: 'En la columna izquierda, un pronombre o un posesivo repite el antecedente (relativo «reasuntivo»). Es muy común en la conversación espontánea de todo el mundo hispánico, pero no se acepta en la escritura cuidada: la preposición va delante del relativo y el pronombre sobra. Excepción: el «le» que duplica un complemento indirecto es normal («al que le dije»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rosario dijo en la entrevista: «Era un capataz que todos le teníamos miedo». ¿Cómo lo escribe Gabriel?', options: ['Era un capataz el cual todos le teníamos miedo.', 'Era un capataz al que todos teníamos miedo.', 'Era un capataz cuyo todos teníamos miedo.'], answer: 1, why: '«Tener miedo a alguien» → al que. «Al que todos le teníamos miedo» también sería normal; lo que no cabe en un texto es «que» solo + le.', en: '«Tener miedo a» → «al que». Doubling with «le» is fine; bare «que» + «le» is not.' },
            { prompt: 'Gabriel consultó el archivo de la familia Lozano. → «La familia Lozano, ___ archivo consultó Gabriel, ha donado tres telares.»', options: ['cuyo', 'cuya', 'que su'], answer: 0, why: '«Cuyo» concuerda con «archivo» (masculino singular), no con «familia».', en: '«Cuyo» agrees with the possessed noun, «archivo».' },
            { prompt: 'Gabriel encontró treinta fotos; diez de ellas son inéditas. →', options: ['Gabriel encontró treinta fotos, de las cuales diez de ellas son inéditas.', 'Gabriel encontró treinta fotos, que diez son inéditas.', 'Gabriel encontró treinta fotos, diez de las cuales son inéditas.'], answer: 2, why: 'Partitivo: cantidad + de las cuales, sin repetir «de ellas».', en: 'Partitive: number + «de las cuales», with no extra «de ellas».' },
          ] },
        ] },
        { title: 'Donde, cuando, como y las perífrasis · Relative adverbs and cleft sentences', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Destaca lo importante. Put the key information in focus.', blocks: [
          { kind: 'table', title: 'Lugar, tiempo, modo, persona · Place, time, manner, person', head: ['Antecedente', 'Especificativa', 'Explicativa', 'Perífrasis para destacar'], rows: [
            ['lugar', 'la nave **en la que / en que / donde** se tejía', 'el almacén, **donde** hoy hay libros', '[[Es aquí donde|orange]] empezó todo.'],
            ['tiempo', 'el año **en (el) que** se quemó la nave', 'en 1932, **cuando** se quemó la nave', '[[Fue entonces cuando|orange]] decidieron…'],
            ['modo', 'la manera **en que / como** lo recuerdan', '—', '[[Fue así como|orange]] se salvó la fábrica.'],
            ['persona', 'la tejedora **que / a la que**…', 'Rosario, **que / quien**…', '[[Fue Leonor quien|orange]] abrió la escuela.'],
          ], note: 'En la norma culta, «donde» se reserva para lugares (también figurados): «*el año donde» se evita. «Cuando» con antecedente aparece sobre todo en explicativas; en especificativas se dice «el día (en) que».' },
          { kind: 'decide', title: 'Construir una perífrasis de relativo · Building a cleft sentence', steps: [
            { q: '¿Destacas a una persona o una cosa? (A person or thing?)', yes: 'Persona: **ser + persona + quien / el que** (concuerdan): «Fueron los obreros **quienes / los que** la reconstruyeron». Cosa: **el que / la que**: «Fue el incendio **el que** lo cambió todo». Nunca «*Fue Leonor que…».', no: 'next' },
            { q: '¿Destacas un lugar? (A place?)', yes: '**ser + lugar + donde**: «Es aquí donde se guardan las cartas».', no: 'next' },
            { q: '¿Destacas un momento? (A time?)', yes: '**ser + momento + cuando**: «Fue en 1932 cuando se quemó la nave».', no: 'Es un modo: **ser + así + como**: «Fue así como se salvó la fábrica». Lo habitual es que «ser» vaya en el mismo tiempo que el otro verbo y concuerde en número: «Fue**ron** los obreros…».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ las tejedoras quienes pidieron la escuela, no la dirección.', options: ['Era', 'Fueron', 'Fue'], answer: 1, why: '«Ser» concuerda con el elemento destacado, plural: fueron.', en: 'It was the weavers who asked for the school, not the management.' },
            { prompt: 'Fue en el antiguo almacén ___ Gabriel encontró el primer reglamento.', options: ['quien', 'donde', 'cuando'], answer: 1, why: 'Se destaca un lugar: donde.', en: 'It was in the old warehouse that Gabriel found the first rulebook.' },
            { prompt: '1978 es el año ___ cerró definitivamente la fábrica.', options: ['en que', 'donde', 'el cual'], answer: 0, why: 'Antecedente temporal en una especificativa: en que / en el que.', en: '1978 is the year in which the mill closed for good.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/portrait.webp', coach: 'Del oído al papel. From ear to page.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno la corrige en voz alta antes de ver la solución.', self: 'Lee cada frase, corrígela en voz alta y después toca para comprobar. (Correct each one aloud, then check.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La mesa sobre que se firmó el acuerdo está en la entrada.', right: 'La mesa sobre la cual (sobre la que) se firmó el acuerdo está en la entrada.', why: 'Tras «sobre», el relativo necesita artículo; el registro cuidado prefiere «la cual».' },
            { wrong: 'El libro el cual leí ayer es de Gabriel.', right: 'El libro que leí ayer es de Gabriel.', why: 'Especificativa sin preposición: solo «que». «El cual» sin preposición exige comas.' },
            { wrong: 'Es una tejedora que su madre también trabajó en la fábrica.', right: 'Es una tejedora cuya madre también trabajó en la fábrica.', why: 'Quesuismo: frecuente al hablar, rechazado por la norma. Poseedor + cuya + lo poseído.' },
            { wrong: '1932 fue el año donde se quemó la nave.', right: '1932 fue el año en que (en el que) se quemó la nave.', why: '«Donde» es para lugares; con un antecedente de tiempo, «en que».' },
            { wrong: 'Fue Leonor que abrió la escuela.', right: 'Fue Leonor quien (la que) abrió la escuela.', why: 'En la perífrasis, una persona destacada pide «quien» o «la que», no «que» solo.' },
            { wrong: 'Fue los obreros los que reconstruyeron la nave.', right: 'Fueron los obreros los que reconstruyeron la nave.', why: '«Ser» concuerda en número con el elemento destacado.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rosario habla de «una amiga que la casa se le inundó». ¿Versión escrita?', options: ['una amiga la cual casa se inundó', 'una amiga que su casa se inundó', 'una amiga cuya casa se inundó'], answer: 2, why: 'Posesión en un texto cuidado: cuya + nombre, sin pronombres repetidos.', en: '«A friend whose house flooded»: careful writing uses «cuya».' },
            { prompt: 'Fue así ___ la colonia consiguió agua corriente.', options: ['donde', 'como', 'que'], answer: 1, why: 'Se destaca el modo («así»): como.', en: 'That is how the estate got running water.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta un hecho de su ciudad en dos frases cortas («Hay un puente. Según la leyenda, …») y las une con un relativo con preposición. Después lo destaca con «Fue… cuando / donde / quien».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La revisión del capítulo tres', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la editorial · At the publisher’s', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Adriana y tu alumno es Gabriel. Después tu alumno toca cada expresión marcada y explica por qué es la versión del libro.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica por qué es la versión del libro. (Then tap each marked expression.)' } },
          { kind: 'explore', title: 'De la grabadora al papel', setting: 'Editorial Cauce, Villaseca del Río. Adriana Quiroga, editora, y Gabriel Ortiz, autor de «La Hilandera», revisan el capítulo tres: el incendio de 1932. Se tutean. (Editor and author go through the chapter about the 1932 fire.)', lines: [
            { who: 'Adriana', text: 'Gabriel, el capítulo me encanta, pero hay frases que suenan a entrevista grabada. Mira: «Rosario, [[que su madre|violet]] entró en la fábrica con catorce años, me enseñó las fotos».', en: 'Gabriel, I love the chapter, but some sentences sound like a recorded interview. Look: “Rosario, that her mother started at the mill at fourteen, showed me the photos.”' },
            { who: 'Gabriel', text: 'Ya, así lo dijo ella. ¿Pongo «Rosario, [[cuya madre|violet]] entró en la fábrica con catorce años…»?', en: 'Yes, that’s how she said it. Shall I put “Rosario, whose mother started at the mill at fourteen…”?' },
            { who: 'Adriana', text: 'Exacto. Y aquí: «la tejedora [[que le dieron|blue]] la medalla». Al hablar se oye mucho, pero en un libro chirría.', en: 'Exactly. And here: “the weaver that they gave her the medal”. You hear it a lot, but in a book it grates.' },
            { who: 'Gabriel', text: 'Entonces, «la tejedora [[a la que le dieron|blue]] la medalla». ¿Algo más?', en: 'So, “the weaver to whom they gave the medal”. Anything else?' },
            { who: 'Adriana', text: 'Sí: «Entrevisté a la hija del encargado, que vivía junto al río». ¿Quién vivía junto al río, ella o su padre?', en: 'Yes: “I interviewed the foreman’s daughter, who lived by the river.” Who lived there, her or her father?' },
            { who: 'Gabriel', text: 'Él, el encargado. Pues escribo «[[el cual|teal]] vivía junto al río» y se acaba la duda.', en: 'Him, the foreman. Then I’ll write «el cual vivía junto al río» and the doubt is gone.' },
            { who: 'Adriana', text: 'Perfecto. Ahora las comas: «[[Los obreros que vivían en la colonia|teal]] pagaban un alquiler simbólico». ¿Vivían allí todos?', en: 'Perfect. Now the commas: “The workers who lived on the estate paid a token rent.” Did all of them live there?' },
            { who: 'Gabriel', text: 'No. Hablé con doce familias, [[cuatro de las cuales|violet]] vivían allí; las demás venían andando desde Valdecañas. Así que sin comas.', en: 'No. I spoke to twelve families, four of which lived there; the rest walked in from Valdecañas. So, no commas.' },
            { who: 'Adriana', text: 'Bien visto. En el incendio tienes dos frases muy cortas: «Se conserva un informe. Según ese informe, el fuego empezó en la caldera».', en: 'Good point. In the fire section you have two very short sentences: “A report survives. According to that report, the fire started in the boiler.”' },
            { who: 'Gabriel', text: 'Las uno: «Se conserva un informe [[según el cual|blue]] el fuego empezó en la caldera». Y sigo: «La empresa anunció el cierre, [[a raíz de lo cual|blue]] los obreros se organizaron por turnos».', en: 'I’ll join them: “A report survives according to which the fire started in the boiler.” And then: “The company announced the closure, as a result of which the workers organised themselves in shifts.”' },
            { who: 'Adriana', text: 'Muy bien. Y el final está flojo: «Los obreros reconstruyeron la nave». Es la idea central del capítulo; destácala.', en: 'Very good. And the ending is weak: “The workers rebuilt the building.” It’s the key idea of the chapter; make it stand out.' },
            { who: 'Gabriel', text: '«[[Fueron los obreros quienes|orange]] la reconstruyeron, y [[fue entonces cuando|orange]] la fábrica pasó a ser de todos». Y cierro con el almacén: «[[Es allí donde|orange]] hoy se presentan los libros del pueblo».', en: '“It was the workers who rebuilt it, and it was then that the mill came to belong to everyone.” And I’ll close with the warehouse: “That is where the town’s books are launched today.”' },
          ], notes: {
            'que su madre': 'Quesuismo: «que» + posesivo en lugar de «cuyo». Es frecuente en la conversación espontánea, pero la norma no lo acepta en un texto.',
            'cuya madre': 'Versión escrita: cuya concuerda con «madre». Va entre comas porque Rosario ya está identificada: es una explicativa.',
            'que le dieron': 'Relativo «que» + pronombre «le» que recupera la función (a la tejedora). Muy oral; en un libro falta la preposición.',
            'a la que le dieron': '«Dar algo a alguien» → a la que. El «le» que duplica el complemento indirecto es normal; también «a quien dieron».',
            'el cual': '«El cual» concuerda en masculino con «el encargado» y descarta a la hija. Explicativa, tras coma: aquí «el cual» sin preposición es correcto.',
            'Los obreros que vivían en la colonia': 'Especificativa: sin comas, porque solo algunos obreros vivían allí. Con comas, la frase diría que vivían todos.',
            'cuatro de las cuales': 'Partitivo: número + de las cuales (familias). Es la forma escrita de «cuatro de ellas».',
            'según el cual': 'Tras «según», el relativo casi siempre es «el cual». Une dos frases cortas sin repetir «ese informe».',
            'a raíz de lo cual': 'Locución preposicional + lo cual: retoma todo el hecho (el anuncio del cierre). Muy propia de la prosa narrativa e informativa.',
            'Fueron los obreros quienes': 'Perífrasis de relativo: «ser» en plural, como «los obreros», + quienes (o «los que»). Pone el foco en quién lo hizo.',
            'fue entonces cuando': 'Perífrasis con un momento: ser + entonces + cuando. Destaca el momento del cambio.',
            'Es allí donde': 'Perífrasis con un lugar: ser + allí + donde. Cierra el capítulo con el foco en el almacén.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué hay frases poco adecuadas en el manuscrito?', options: ['Porque Gabriel copió frases tal como se dijeron en las entrevistas.', 'Porque Gabriel escribe con prisa.', 'Porque Adriana prefiere un estilo coloquial.'], answer: 0, why: '«Hay frases que suenan a entrevista grabada.» «Así lo dijo ella.»', en: 'Why are some sentences unsuitable for the book?' },
            { prompt: '¿Quién vivía junto al río?', options: ['La hija del encargado.', 'Rosario.', 'El encargado.'], answer: 2, why: '«Él, el encargado. Pues escribo “el cual vivía junto al río”.»', en: 'Who lived by the river?' },
            { prompt: '¿Qué pasó después del anuncio del cierre?', options: ['La fábrica cerró ese mismo año.', 'Los obreros se mudaron a Valdecañas.', 'Los obreros se organizaron por turnos para reconstruir la nave.'], answer: 2, why: '«A raíz de lo cual los obreros se organizaron por turnos» y «fueron los obreros quienes la reconstruyeron».', en: 'What happened after the closure was announced?' },
          ] },
        ] },
        { title: '¿Qué tipo de relativo? · What kind of relative?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la revisión · Sentences from the revision', categories: [
            { id: 'prep', label: 'PREPOSICIÓN + RELATIVO', tone: 'blue' },
            { id: 'coma', label: 'EL CUAL SIN PREPOSICIÓN / COMAS', tone: 'teal' },
            { id: 'pos', label: 'POSESIÓN O PARTE', tone: 'violet' },
            { id: 'per', label: 'PERÍFRASIS DE RELATIVO', tone: 'orange' },
          ], items: [
            { text: 'Se conserva un informe según el cual el fuego empezó en la caldera.', answer: 'prep', why: 'Preposición larga + el cual.' },
            { text: 'Entrevisté a la hija del encargado, el cual vivía junto al río.', answer: 'coma', why: '«El cual» sin preposición, en explicativa, para elegir antecedente.' },
            { text: 'Rosario, cuya madre entró en la fábrica con catorce años, me enseñó las fotos.', answer: 'pos', why: 'Cuya: posesión (la madre de Rosario).' },
            { text: 'Fueron los obreros quienes la reconstruyeron.', answer: 'per', why: 'Ser + elemento destacado + quienes.' },
            { text: 'Hablé con doce familias, cuatro de las cuales vivían allí.', answer: 'pos', why: 'Partitivo: una parte del grupo.' },
            { text: 'La empresa anunció el cierre, a raíz de lo cual los obreros se organizaron.', answer: 'prep', why: 'Locución + lo cual, que retoma un hecho entero.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cómo diría Rosario la frase del encargado en una conversación?». Respuesta esperada: «la hija del encargado, que vivía…», y si hay duda, una aclaración: «él, no ella».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca la preposición, la coma y el foco. Find the preposition, the comma and the focus.',
      steps: [
        { title: 'Las cartelas de la exposición · The exhibition captions', blocks: [
          { kind: 'choice', items: [
            { context: 'Pilar Esteve, archivera del centro cultural, redacta las cartelas. (Pilar writes the captions.)', prompt: 'Se conserva el reglamento de 1905, ___ las tejedoras no podían hablar durante el turno.', options: ['según que', 'que según', 'según el cual'], answer: 2, why: '«Según» + artículo + relativo: según el cual (prácticamente fijo).', en: 'The 1905 rulebook survives, under which weavers were not allowed to talk during their shift.' },
            { context: 'Todos los telares vinieron de Inglaterra.', prompt: 'Los telares, ___ llegaron de Inglaterra en 1898, siguen en la nave principal.', options: ['los cuales', 'cuyos', 'lo cual'], answer: 0, why: 'Explicativa (entre comas) con un nombre plural: los cuales (o que).', en: 'The looms, which arrived from England in 1898, are still in the main hall.' },
            { context: 'La escuela se pagó con dinero de los Albarracín.', prompt: 'Esta es la familia Albarracín, ___ dinero se construyó la escuela.', options: ['con cuyo', 'cuyo', 'que su'], answer: 0, why: '«Se construyó con su dinero» → con cuyo dinero: la preposición va delante.', en: 'This is the Albarracín family, with whose money the school was built.' },
            { context: 'Pilar quiere subrayar quién tuvo la iniciativa.', prompt: '___ las madres de la colonia las que organizaron la guardería.', options: ['Eran', 'Fueron', 'Fue'], answer: 1, why: 'Elemento destacado plural en un hecho pasado: fueron.', en: 'It was the mothers on the estate who set up the nursery.' },
            { context: 'Cartela de la sala de tintes.', prompt: '1932 fue el año ___ se quemó la nave de tintes.', options: ['en que', 'donde', 'cuando'], answer: 0, why: 'Antecedente temporal en especificativa: en que / en el que. «Cuando» con antecedente es propio de las explicativas.', en: '1932 was the year the dye house burned down.' },
          ] },
        ] },
        { title: '¿Cabe «el cual»? · Does «el cual» fit?', blocks: [
          { kind: 'classify', title: '¿Se puede poner «el cual / la cual…» en el hueco? · Can «el cual» go in the gap?', categories: [
            { id: 'si', label: 'SÍ · también «el cual»', tone: 'teal' },
            { id: 'no', label: 'NO · solo «que»', tone: 'blue' },
          ], items: [
            { text: 'El telar grande, ___ pesa más de una tonelada, no se puede mover.', answer: 'si', why: 'Explicativa entre comas: que o el cual.' },
            { text: 'El telar ___ pesa más de una tonelada está en la nave dos.', answer: 'no', why: 'Especificativa sin preposición: solo que.' },
            { text: 'La escalera por ___ subían los aprendices se ha restaurado.', answer: 'si', why: 'Tras preposición: por la que o por la cual.' },
            { text: 'Las fotos ___ nos dejó Rosario se expondrán en la entrada.', answer: 'no', why: 'Especificativa sin preposición: solo que.' },
            { text: 'Rosario, ___ cumplió noventa y cuatro años en mayo, vendrá a la presentación.', answer: 'si', why: 'Explicativa: que, quien o la cual (más formal).' },
            { text: 'Las cartas ___ encontramos en el desván son de 1932.', answer: 'no', why: 'Especificativa sin preposición: solo que.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Es el maestro que su hija donó los cuadernos al archivo.', ok: false, options: ['Es el maestro cuya hija donó los cuadernos al archivo.', 'Es el maestro el cual su hija donó los cuadernos al archivo.', 'Es el maestro que cuya hija donó los cuadernos al archivo.'], answer: 0, why: 'Quesuismo: en un texto, poseedor + cuya + lo poseído.' },
            { sentence: 'Las tejedoras las cuales firmaron la carta fueron despedidas.', ok: false, options: ['Las tejedoras cuyas firmaron la carta fueron despedidas.', 'Las tejedoras quienes firmaron la carta fueron despedidas.', 'Las tejedoras que firmaron la carta fueron despedidas.'], answer: 2, why: 'Especificativa (solo las que firmaron) sin preposición: solo «que».' },
            { sentence: 'Esta es la mesa sobre que se firmó el acuerdo.', ok: false, options: ['Esta es la mesa que sobre ella se firmó el acuerdo.', 'Esta es la mesa sobre la cual se firmó el acuerdo.', 'Esta es la mesa sobre cual se firmó el acuerdo.'], answer: 1, why: 'Tras «sobre», artículo + relativo; «que sobre ella» es un calco oral.' },
            { sentence: 'Fue en 1932 donde se quemó la nave.', ok: false, options: ['Fue en 1932 como se quemó la nave.', 'Fue en 1932 el cual se quemó la nave.', 'Fue en 1932 cuando se quemó la nave.'], answer: 2, why: 'Perífrasis que destaca un momento: cuando.' },
            { sentence: 'Entrevisté al hijo de la maestra, la cual había llegado a Villaseca en 1921.', ok: true, why: 'Correcta: «la cual» deja claro que quien llegó en 1921 fue la maestra, no su hijo.' },
          ] },
        ] },
        { title: 'Mensajes con Pilar · Messages with Pilar', blocks: [
          { kind: 'chat-fill', title: 'Pilar y Gabriel preparan la exposición · Pilar and Gabriel prepare the exhibition', lines: [
            { who: 'Pilar', text: 'Gabriel, ¿qué pongo en la cartela del telar inglés?' },
            { who: 'Gabriel', text: '«Telar de 1898, ___ se tejió la primera pieza de la fábrica.»', options: ['en cuyo', 'el cual', 'en el que'], answer: 2, why: '«Se tejió en el telar» → en el que (o en el cual).' },
            { who: 'Pilar', text: '¿Y la foto de grupo? Hay veinte mujeres, ___ no sabemos el nombre.', options: ['que muchas', 'de muchas de las cuales', 'cuyas muchas'], answer: 1, why: '«No sabemos el nombre de muchas de ellas» → de muchas de las cuales.' },
            { who: 'Gabriel', text: 'Pon que ___ Rosario quien identificó a casi todas.', options: ['fueron', 'eran', 'fue'], answer: 2, why: 'Elemento destacado singular (Rosario), hecho pasado: fue.' },
            { who: 'Pilar', text: 'Hecho. ¿Y la cartela de la escuela?' },
            { who: 'Gabriel', text: '«Escuela de la colonia, ___ aulas aprendieron a leer cientos de niños.»', options: ['en cuyas', 'cuyas', 'que en sus'], answer: 0, why: '«Aprendieron en sus aulas» → en cuyas aulas: preposición + cuyas.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Fue', 'entonces', 'cuando', 'los', 'obreros', 'decidieron', 'reconstruir', 'la', 'nave'], accept: ['Fue entonces cuando los obreros decidieron reconstruir la nave', 'Fue entonces cuando decidieron los obreros reconstruir la nave'], en: 'It was then that the workers decided to rebuild the building.' },
            { tiles: ['Esa', 'es', 'la', 'razón', 'por', 'la', 'cual', 'cerró', 'la', 'fábrica'], accept: ['Esa es la razón por la cual cerró la fábrica', 'Esa es la razón por la cual la fábrica cerró'], en: 'That is the reason why the mill closed.' },
            { tiles: ['Trabajaban', 'allí', 'doscientas', 'familias,', 'la', 'mayoría', 'de', 'las', 'cuales', 'vivían', 'junto', 'al', 'río'], accept: ['Trabajaban allí doscientas familias, la mayoría de las cuales vivían junto al río', 'Allí trabajaban doscientas familias, la mayoría de las cuales vivían junto al río'], en: 'Two hundred families worked there, most of whom lived by the river.' },
          ] },
        ] },
        { title: 'Une las frases · Combine the sentences', blocks: [
          { kind: 'rewrite', title: 'Dos frases, una · Two sentences into one', items: [
            { prompt: 'El edificio tiene una chimenea de ladrillo. Desde la chimenea se ve todo el valle.', instruction: 'Une las dos frases con un relativo tras «desde». Empieza con «El edificio tiene una chimenea».', accept: ['El edificio tiene una chimenea de ladrillo desde la cual se ve todo el valle', 'El edificio tiene una chimenea de ladrillo desde la que se ve todo el valle'] },
            { prompt: 'Leonor Albarracín abrió una escuela. Gracias a esa escuela, cientos de niños aprendieron a leer.', instruction: 'Une las frases con «gracias a» + relativo.', accept: ['Leonor Albarracín abrió una escuela gracias a la cual cientos de niños aprendieron a leer', 'Leonor Albarracín abrió una escuela, gracias a la cual cientos de niños aprendieron a leer', 'Leonor Albarracín abrió una escuela gracias a la que cientos de niños aprendieron a leer'] },
            { prompt: 'Visité a Rosario. En su casa encontré cartas inéditas.', instruction: 'Une las frases con la preposición + «cuyo / cuya».', accept: ['Visité a Rosario, en cuya casa encontré cartas inéditas'] },
            { prompt: 'Los obreros salvaron la fábrica.', instruction: 'Destaca «los obreros» con una perífrasis de relativo en pasado.', accept: ['Fueron los obreros quienes salvaron la fábrica', 'Fueron los obreros los que salvaron la fábrica'] },
            { prompt: 'La empresa anunció el cierre. Como consecuencia, los obreros se organizaron.', instruction: 'Une las frases con «a raíz de lo cual».', accept: ['La empresa anunció el cierre, a raíz de lo cual los obreros se organizaron'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige un edificio que conoce bien y dice tres frases sobre él: una con preposición + el cual, una con «cuyo» y una perífrasis («Es aquí donde…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Gabriel en el pódcast', coach: 'Primero la historia; después, los relativos. First the story, then the relatives.',
      steps: [
        { title: 'Memoria de ribera · Riverside memory', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: de qué trata el libro. Segunda escucha: tu alumno anota las perífrasis y los relativos con preposición. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota las perífrasis (Fue… quien) y los relativos con preposición. (Listen twice: gist, then details.)' } },
          { kind: 'listen', title: 'Gabriel Ortiz presenta «La Hilandera»', channel: 'PÓDCAST «MEMORIA DE RIBERA» · HISTORIA LOCAL', src: '/audio/grammar-live/479.mp3',
            before: 'Gabriel presenta su libro en un pódcast de historia local. ¿Qué crees que contará: datos de la fábrica, anécdotas de las entrevistas, detalles de la presentación…? (What do you think he will talk about?)',
            gist: { prompt: '¿Qué hace Gabriel en el pódcast? · What is Gabriel doing on the podcast?', options: ['Pide fotos antiguas a los oyentes para un segundo libro.', 'Resume la historia de la fábrica que cuenta su libro e invita a la presentación.', 'Explica cómo se fabrican las telas.'], answer: 1, why: 'Recorre la historia de La Hilandera y termina con la presentación del viernes.', en: 'What is the main purpose of his talk?' },
            details: [
              { prompt: '¿Dónde vivían la mayoría de las familias que trabajaban en la fábrica?', options: ['En la colonia obrera, junto al río.', 'En Valdecañas.', 'En el antiguo almacén.'], answer: 0, why: '«…doscientas familias, la mayoría de las cuales vivían en la colonia obrera, junto al río.»', en: 'Where did most of the families live?' },
              { prompt: '¿Qué hizo Leonor Albarracín?', options: ['Abrió una escuela para los niños.', 'Reconstruyó la nave de tintes.', 'Cerró la fábrica en 1978.'], answer: 0, why: '«Abrió una escuela en cuyas aulas aprendieron a leer cientos de niños.»', en: 'What did Leonor do?' },
              { prompt: '¿Qué encontró Gabriel en casa de Rosario?', options: ['Un informe del incendio.', 'Cartas y fotografías inéditas.', 'El reglamento de 1905.'], answer: 1, why: '«…en cuya casa encontré cartas y fotografías inéditas.»', en: 'What did he find at Rosario’s house?' },
              { prompt: '¿Qué opina Gabriel de la frase de Rosario sobre la fábrica?', options: ['Que quizá no es del todo justa, pero explica cómo la recuerda el pueblo.', 'Que es exactamente la verdad.', 'Que es una frase de Leonor.'], answer: 0, why: '«No sé si es del todo justa, pero explica la manera en que el pueblo recuerda aquellos años.»', en: 'What does he think of Rosario’s saying?' },
            ],
            transcript: 'Hola a todos. Soy Gabriel Ortiz y hoy les hablo de La Hilandera, la fábrica textil [[en torno a la cual|blue]] creció Villaseca del Río. Durante casi ochenta años sus naves dieron trabajo a unas doscientas familias, [[la mayoría de las cuales|violet]] vivían en la colonia obrera, junto al río. [[Fue Leonor Albarracín quien|orange]] la convirtió en algo más que una fábrica: abrió una escuela [[en cuyas aulas|violet]] aprendieron a leer cientos de niños. En 1932 se quemó la nave de tintes, [[a raíz de lo cual|blue]] muchos temieron el cierre. [[Fue entonces cuando|orange]] los propios obreros, [[sin cuyo esfuerzo|violet]] no se habría salvado nada, decidieron reconstruirla por turnos. Para escribir el libro hablé con Rosario Benítez, una antigua tejedora de noventa y cuatro años [[en cuya casa|violet]] encontré cartas y fotografías inéditas. Rosario repite una frase [[según la cual|blue]] la fábrica «no tenía dueño, tenía familia». No sé si es del todo justa, pero explica [[la manera en que|orange]] el pueblo recuerda aquellos años. La presentación será el viernes en el antiguo almacén, que hoy es el centro cultural. [[Es allí donde|orange]] empezó todo, y es allí donde quiero contarlo. Los espero.',
            reply: { teacher: 'Tú eres la presentadora del pódcast. Tu alumno es Gabriel y responde a dos preguntas tuyas sobre el libro («¿Quién fue la persona más importante?», «¿Cuál fue el momento clave?») con perífrasis de relativo. Después cambian los papeles.', self: 'Imagina que eres Gabriel y te preguntan: «¿Quién fue la persona clave?» y «¿Cuál fue el momento decisivo?». Responde en voz alta con «Fue… quien» y «Fue entonces cuando». (Answer with cleft sentences.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lugares, personas y momentos', coach: 'Habla con precisión y pon el foco. Speak precisely and set the focus.',
      steps: [
        { title: 'Historias de tu entorno · Stories from your world', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y repreguntas. Tu alumno responde con su experiencia real. Si usa una estructura oral («que su», «que le»), tú repites la frase en versión escrita y tu alumno la repite.', self: 'Responde en voz alta a cada tarjeta con tu experiencia real. Después repite una frase en versión «de libro». (Answer aloud, then say one sentence in written style.)' } },
          { kind: 'talk', cards: [
            { q: 'Describe un edificio o lugar con historia en tu ciudad. · Describe a building or place with history in your town.', followUps: ['¿Qué se hacía allí antes? (What was it used for?)', '¿Hay algún punto desde el cual se vea toda la ciudad? (A spot with a view?)', '¿Qué es hoy?'], phrases: ['un edificio [[en torno al cual|blue]]…', 'una plaza [[en cuyo centro|violet]]…', 'Es allí [[donde|orange]]…'], hint: 'Une lugar e historia con preposición + el cual o con «cuyo».', example: 'En mi ciudad hay un mercado del siglo XIX en torno al cual se organizó todo el barrio. Tiene una torre desde la cual se ve el puerto, y es allí donde se celebran hoy los conciertos de verano.', next: 'Ahora, una persona.' },
            { q: 'Habla de una persona importante en tu familia o tu barrio. · Talk about an important person in your family or neighbourhood.', followUps: ['¿Qué hizo exactamente? (What exactly did they do?)', '¿Quién más estaba en esa historia? (Who else was involved?)'], phrases: ['mi tía, [[a cuyo marido|violet]]…', 'una vecina [[gracias a la cual|blue]]…', '[[Fue ella quien|orange]]…'], hint: 'Usa una explicativa con la persona y destaca su papel con «Fue… quien».', example: 'Mi abuela, a cuyo padre nunca conocí, abrió la primera librería del barrio. Fue ella quien me enseñó a leer, y fue en su librería donde me aficioné a la poesía.', next: 'Ahora, aclara una ambigüedad.' },
            { q: 'Cuenta una anécdota con dos personas de distinto género (un amigo y su hermana, una jefa y su ayudante…) y deja claro de quién hablas. · Tell an anecdote with two people and make clear who you mean.', followUps: ['¿Y qué hizo la otra persona? (And the other one?)', '¿Cómo lo dirías en una charla rápida? (How would you say it casually?)'], phrases: ['el hermano de Laura, [[el cual|teal]]…', 'la jefa de Daniel, [[la cual|teal]]…', 'él, no ella…'], hint: 'Por escrito, «el cual / la cual» elige el antecedente; al hablar, una aclaración basta.', example: 'Ayer vi al hermano de Laura, el cual acaba de volver de Chile. En una charla diría: «Vi al hermano de Laura; él acaba de volver de Chile».', next: 'Ahora, un momento decisivo.' },
            { q: '¿Cuándo y cómo empezaste a aprender español, o a hacer tu trabajo actual? · When and how did you start learning Spanish or doing your current job?', followUps: ['¿Dónde ocurrió? (Where?)', '¿Quién te animó? (Who encouraged you?)'], phrases: ['[[Fue en|orange]]… [[cuando|orange]]…', '[[Fue así como|orange]]…', '[[Fue mi profesora quien|orange]]…'], hint: 'Destaca el momento, el lugar y la persona con tres perífrasis distintas.', example: 'Fue en 2018 cuando empecé, en un curso de verano en Salamanca. Fue allí donde conocí a una profesora increíble, y fue así como acabé estudiando Filología.', next: 'Ahora, razones y principios.', teacher: 'Comprueba la concordancia: «Fueron mis padres quienes…».' },
            { q: 'Explica una decisión importante y la razón por la cual la tomaste. · Explain an important decision and the reason why you made it.', followUps: ['¿Hubo alguna regla o idea según la cual actuaste? (A rule or idea you followed?)', '¿Qué pasó después? (What happened next?)'], phrases: ['la razón [[por la cual|blue]]…', 'una idea [[según la cual|blue]]…', '…, [[tras lo cual|blue]]…'], hint: 'Usa al menos un relativo tras una preposición larga y un «lo cual» que retome un hecho.', example: 'Dejé un trabajo estable para estudiar Historia. La razón por la cual lo hice fue una idea según la cual solo se vive una vez. Pasé dos años difíciles, tras lo cual encontré el trabajo que tengo hoy.', next: 'Por último, de la conversación al texto.' },
            { q: 'Oyes estas frases en una entrevista: «una vecina que su hijo es médico», «el chico que le presté el libro». Cuéntale a alguien lo que dijeron, en estilo cuidado. · Retell what you heard in careful style.', followUps: ['¿Por qué crees que se dicen así? (Why do people say it like that?)', '¿Las corregirías en una transcripción literal? (Would you correct them in a verbatim transcript?)'], phrases: ['una vecina [[cuyo hijo|violet]]…', 'el chico [[al que|blue]] (le) presté…'], hint: 'Cuyo para la posesión; la preposición delante del relativo y sin pronombre repetido.', example: 'Habló de una vecina cuyo hijo es médico y del chico al que le prestó el libro. En una transcripción literal no lo cambiaría: es como habla la gente.', teacher: 'Insiste en que estas formas orales no son «errores de extranjero»: son muy frecuentes entre nativos; la diferencia es de registro.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno hace las preguntas y tú respondes con una frase oral («que su», «que le») a propósito; tu alumno la reformula en estilo escrito.', self: 'Ahora responde otra vez a dos tarjetas, pero como si escribieras para un libro: frases más largas, con preposición + el cual y «cuyo». (Answer two cards again in written style.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El panel de la exposición', coach: 'Frases largas, claras y con foco. Long, clear, focused sentences.',
      steps: [
        { title: 'Un panel para el centro cultural · A panel for the cultural centre', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada relativo: ¿preposición correcta?, ¿comas?, ¿antecedente claro?', self: 'Escribe el panel y toca «Revisar mi texto». Después repasa cada relativo: preposición, comas y antecedente. (Write the panel, then check each relative.)' } },
          { kind: 'write', title: 'Historia de un lugar · The story of a place', situation: 'Pilar te pide el texto del panel de entrada de una exposición sobre La Hilandera, o sobre un edificio, una institución o una persona de tu ciudad. Lo leerán visitantes de todas las edades: tiene que ser formal, claro y bien encadenado. (Write the formal text for the entrance panel of an exhibition about the mill, or about a building, institution or person from your town.)', task: [
            'Usa al menos dos relativos con preposición, uno de ellos con una preposición larga o una locución (según el cual, gracias a la cual, a raíz de lo cual…). (Two prepositional relatives.)',
            'Incluye «cuyo / cuya…» con preposición (en cuya casa, sin cuyo apoyo…). (cuyo with a preposition.)',
            'Combina una explicativa entre comas y una especificativa, y añade un partitivo (algunos de los cuales…). (Both clause types and a partitive.)',
            'Destaca una persona, un momento o un lugar con una perífrasis de relativo (Fue… quien, Fue entonces cuando, Es aquí donde). (One cleft sentence.)',
            'Evita las estructuras orales: nada de «que su», «que le» ni pronombres repetidos. (No spoken patterns.)',
          ], starters: ['…, fundada en…, fue durante décadas…', '…, la mayoría de los cuales…', 'Fue… quien…', '…, a raíz de lo cual…', 'Se conserva… según el cual…', 'Es aquí donde…'],
            words: ['en torno al cual', 'según el cual', 'gracias a la cual', 'a raíz de lo cual', 'en cuya / sin cuyo', 'la mayoría de los cuales', 'fue entonces cuando', 'es aquí donde'],
            model: 'La Hilandera, fundada en 1898 por Ramón Albarracín, fue durante ochenta años el corazón de Villaseca del Río. En sus naves trabajaron más de doscientas familias, [[la mayoría de las cuales|violet]] vivían en la colonia obrera [[que se levantó junto al río|teal]]. [[Fue su hija, Leonor Albarracín, quien|orange]] transformó la fábrica: en 1912 abrió una escuela [[en cuyas aulas|violet]] aprendieron a leer cientos de niños. En 1932 un incendio destruyó la nave de tintes, [[a raíz de lo cual|blue]] la empresa anunció el cierre. Se conserva un informe del seguro [[según el cual|blue]] el fuego empezó en la caldera. [[Fue entonces cuando|orange]] los obreros, [[sin cuyo esfuerzo|violet]] no se habría salvado nada, decidieron reconstruirla por turnos. La fábrica cerró definitivamente en 1978. El antiguo almacén, [[el cual|teal]] se restauró en 2004, es hoy el centro cultural [[en el que|blue]] se presentan los libros del pueblo. [[Es aquí donde|orange]] se guardan las cartas y fotografías que Rosario Benítez, antigua tejedora, ha donado al archivo, muchas de las cuales se exponen por primera vez.',
            minWords: 130,
            checks: [
              { label: '«Cuyo / cuya / cuyos / cuyas» (a possessive relative)', pattern: '(?<!\\p{L})cuy[oa]s?(?!\\p{L})', tip: 'Añade una frase con preposición + cuyo: «una escuela en cuyas aulas…», «los obreros, sin cuyo esfuerzo…».' },
              { label: 'Un relativo tras preposición (a prepositional relative)', pattern: '(?<!\\p{L})(?:según|sobre|desde|durante|mediante|tras|sin|gracias\\s+a|a\\s+raíz\\s+de|en\\s+torno\\s+a|junto\\s+a|por|con|de|en|a)\\s+(?:el|la|lo|los|las)\\s+(?:cual(?:es)?|que)(?!\\p{L})', tip: 'Une dos frases con una preposición + el cual: «un informe según el cual…», «a raíz de lo cual…».' },
              { label: 'Un partitivo con «de los / las cuales» (a partitive)', pattern: '(?<!\\p{L})de\\s+(?:los|las)\\s+cuales(?!\\p{L})', tip: 'Habla de una parte del grupo: «la mayoría de las cuales», «algunos de los cuales».' },
              { label: 'Una perífrasis de relativo, probablemente (likely a cleft sentence)', pattern: '(?<!\\p{L})(?:fue|fueron|es|son|era|eran)\\s+(?:[\\p{L},]+\\s+){1,4}(?:quien(?:es)?|donde|cuando|como)(?!\\p{L})', tip: 'Destaca algo con «Fue… quien», «Fue entonces cuando» o «Es aquí donde».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:sobre|durante|mediante)\\s+que(?!\\p{L})', why: 'Tras «sobre», «durante» o «mediante», el relativo lleva artículo: **sobre la cual**, **durante el cual**.' },
              { pattern: '(?<!\\p{L})(?:el|la|los|las)\\s+\\p{L}+\\s+(?:el|la|los|las)\\s+cual(?:es)?(?!\\p{L})', why: 'Revisa: sin preposición, «el cual» solo va en una explicativa, tras coma («El almacén, el cual…»). En una especificativa, **que**.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What are you taking away today?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'PREPOSICIÓN + RELATIVO', formula: 'breve + el que (el cual, formal) · larga o locución + el cual · hecho + lo cual', example: 'Un informe según el cual el fuego empezó en la caldera.', caption: 'siempre con artículo tras sobre, según, sin, a raíz de…', en: 'After long prepositions and phrases, prefer «el cual»; never bare «que» after them' },
            { tone: 'teal', label: 'COMAS Y «EL CUAL»', formula: 'especificativa: que · explicativa: que, quien, el cual', example: 'El almacén, el cual se restauró en 2004, … / El libro que leí…', caption: '«el cual» sin preposición, solo entre comas; elige antecedente', en: 'Without a preposition «el cual» needs commas; its gender and number remove ambiguity' },
            { tone: 'violet', label: 'POSESIÓN Y PARTE', formula: 'prep. + cuyo / cuya + nombre · cantidad + de los / las cuales', example: 'Rosario, en cuya casa encontré las fotos. Doce familias, cuatro de las cuales…', caption: 'al escribir, nunca «que su» ni pronombres repetidos', en: 'Careful writing avoids «que su» and resumptive pronouns, common as they are in speech' },
            { tone: 'orange', label: 'ADVERBIOS Y PERÍFRASIS', formula: 'donde (lugar) · en que / cuando (tiempo) · como (modo) · ser + X + quien / donde / cuando / como', example: 'Fueron los obreros quienes la reconstruyeron. Fue entonces cuando…', caption: '«ser» concuerda; el relativo depende de lo que destacas', en: 'In cleft sentences «ser» agrees, and the relative matches what you highlight: person, place, time or manner' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de escribir una relativa larga, haz tres preguntas: **¿qué preposición** pide la frase original? (larga → el cual), **¿selecciono o añado?** (sin comas / con comas; «el cual» sin preposición, solo con comas) y **¿qué quiero destacar?** (Fue… quien / cuando / donde). Y cuando transcribas lo que alguien dijo, pasa «que su» y «que le» a **cuyo** y **al que**.', en: 'Before writing a long relative clause, ask three questions: which preposition does the original sentence need? (long → el cual); am I selecting or adding? (no commas / commas; «el cual» without a preposition only with commas); what do I want to highlight? (cleft sentence). And when you turn speech into writing, change «que su» and «que le» into «cuyo» and «al que».' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El ayuntamiento aprobó una norma ___ los bares deberán cerrar a la una.', options: ['según la cual', 'según que', 'la cual según'], answer: 0, why: 'Según + la cual (norma, femenino).', en: 'The council passed a rule under which bars must close at one.' },
            { prompt: 'Ese es el puente ___ pasaba el tren de mercancías.', options: ['bajo el cual', 'bajo que', 'que bajo él'], answer: 0, why: 'Preposición + artículo + relativo; «que bajo él» es un calco oral.', en: 'That is the bridge under which the goods train used to pass.' },
            { prompt: 'Conocí a un escritor ___ novelas se han traducido a doce lenguas.', options: ['cuyos', 'cuyas', 'que sus'], answer: 1, why: 'Cuyas concuerda con «novelas»; «que sus» no es normativo.', en: 'I met a writer whose novels have been translated into twelve languages.' },
            { prompt: '___ mis abuelos quienes compraron la casa del pueblo.', options: ['Es', 'Fueron', 'Fue'], answer: 1, why: 'Elemento destacado plural, hecho pasado: fueron.', en: 'It was my grandparents who bought the village house.' },
            { prompt: 'Invitamos a cuarenta personas, ___ vinieron con niños.', options: ['diez de las cuales', 'que diez', 'de las que diez de ellas'], answer: 0, why: 'Partitivo: cantidad + de las cuales.', en: 'We invited forty people, ten of whom came with children.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, la nueva biblioteca.', blocks: [
          { kind: 'lead', text: 'El ayuntamiento de otra ciudad reforma su biblioteca municipal y te pide un texto breve para la web. Tienes las notas en frases sueltas: únelas o destácalas.', en: 'Another town is refurbishing its public library and asks you for a short text for its website. Your notes are in short sentences: combine them or put them in focus.' },
          { kind: 'rewrite', title: 'La biblioteca · The library', items: [
            { prompt: 'La biblioteca tiene un patio. En el centro del patio hay un olivo centenario.', instruction: 'Une las frases con preposición + «cuyo / cuya». Empieza con «La biblioteca tiene un patio».', accept: ['La biblioteca tiene un patio en cuyo centro hay un olivo centenario'] },
            { prompt: 'El ayuntamiento aprobó un plan. Según el plan, la biblioteca abrirá también los domingos.', instruction: 'Une las frases con «según» + relativo.', accept: ['El ayuntamiento aprobó un plan según el cual la biblioteca abrirá también los domingos'] },
            { prompt: 'Los vecinos pidieron la reforma.', instruction: 'Destaca «los vecinos» con una perífrasis de relativo en pasado.', accept: ['Fueron los vecinos quienes pidieron la reforma', 'Fueron los vecinos los que pidieron la reforma'] },
          ] },
        ] },
        { title: 'Ampliación · Perífrasis con preposición y registro · Clefts with prepositions', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: perífrasis de relativo en las que el elemento destacado lleva preposición, y concordancias que dudan incluso los nativos.', en: 'For strong students or spare time: cleft sentences where the highlighted element has a preposition, and agreement points even native speakers hesitate over.' },
          { kind: 'choice', title: 'Lee y decide · Read and decide', items: [
            { prompt: 'En la prosa cuidada, ¿cuál es la opción preferida? «Fue con Rosario ___ hablé primero.»', options: ['quien', 'con quien', 'que'], answer: 1, why: 'La norma culta repite la preposición en el relativo: con quien / con la que. «Fue con Rosario que hablé» (el llamado «que galicado») es frecuente en la lengua oral de muchas zonas de América, pero se evita en la escritura cuidada.', en: 'Careful writing repeats the preposition: «Fue con Rosario con quien…». Bare «que» is common in speech in much of Latin America but avoided in careful prose.' },
            { prompt: 'En la prosa cuidada, ¿cuál es la opción preferida? «Es por eso ___ el libro se presenta en el almacén.»', options: ['el que', 'el cual', 'por lo que'], answer: 2, why: '«Es por eso por lo que…» repite la preposición. «Es por eso que…» está muy extendido, sobre todo en América, pero en textos cuidados se prefiere la primera.', en: 'Careful prose prefers «es por eso por lo que»; «es por eso que» is very widespread, especially in Latin America.' },
            { prompt: '«Fui yo quien ___ el prólogo.» ¿Qué forma es la más recomendada?', options: ['redactaron', 'redactara', 'redactó'], answer: 2, why: 'Con «quien», lo más recomendado es la tercera persona: «Fui yo quien lo redactó». La concordancia con «yo» («quien lo redacté») también se oye y se admite.', en: 'With «quien», third person is the recommended agreement; «quien lo redacté» is also heard and accepted.' },
            { prompt: 'Se conserva una carta de Leonor al director del banco, ___ pedía un préstamo para la escuela.', options: ['en el cual', 'donde su', 'en la cual'], answer: 2, why: '«La cual» concuerda con «carta», el antecedente lejano, y descarta «el director» y «el banco».', en: '«La cual» agrees with «carta», the distant antecedent, and rules out the bank and its manager.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca en un periódico tres relativos con preposición larga o una perífrasis de relativo y explica qué destacan.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 180 · Queísmo y dequeísmo: régimen y norma', text: 'Ya sabes que la preposición que pide el verbo viaja delante del relativo («el barrio en torno al cual giraba la vida») y que el habla espontánea a veces la pierde («la tejedora que le dieron»). En la clase 180 sigues con el régimen preposicional, ahora delante de «que» conjunción: «me acuerdo **de que**…» frente al queísmo («*me acuerdo que») y «pienso **que**…» frente al dequeísmo («*pienso de que»). Es el paso natural: la misma norma culta, en otro tipo de oración.', en: 'You now know that the verb’s preposition travels in front of the relative, and that casual speech sometimes drops it. In class 180 you continue with prepositions required by verbs, now before the conjunction «que»: «me acuerdo de que» versus queísmo, and «pienso que» versus dequeísmo. It is the natural next step: the same educated norm, in another type of clause.', href: '/gramatica/queismo-y-dequeismo-regimen-y-norma', label: 'Ir a la clase 180' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuál es el lugar de tu ciudad en el que más tiempo has pasado, y quién fue la persona que te lo descubrió?». Tu alumno responde con preposición + el cual y una perífrasis. Tarea: escribir el panel de Escribir sobre un lugar real de su ciudad.' },
        ] },
      ],
    },
  ],
};
