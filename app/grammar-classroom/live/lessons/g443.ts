import type { LiveLesson } from '../types';

/**
 * Lesson 443 · B2 · Cuyo/a/os/as y relativos de posesión (course unit G143).
 * Builds on G066/G067 (que, donde), G112 (lesson 412: quien, el que, el cual
 * introductorio) and G142 (lesson 234: relatives with prepositions, «el que»
 * after the preposition the verb asks for). Complex relatives are G179 (C1).
 * Scene: Valdelirio, a fictional town in Mexico, prepares the tenth Festival de
 * las Letras. Lorena Vidal, the coordinator, writes the printed programme and the
 * press release; Héctor Molina, a volunteer, runs the festival's social media and
 * records a radio spot. Guests: the novelist Amparo Ledesma, the poet Rubén
 * Echeverría, the illustrator Nuria Palacios and the publisher Marea Alta.
 * In the radio piece Rocío Mendoza (Mexican voice, ustedes) presents the programme.
 * Content: cuyo / cuya / cuyos / cuyas + noun links a possessor with what it
 * possesses (people and things: «whose», «of which»); it agrees with the possessed
 * noun, never with the possessor (la autora cuyos libros…); no article after it;
 * preposition + cuyo (el pueblo en cuya plaza…, la editorial para cuyo catálogo…,
 * el poeta de cuyo libro…, a cuya hija); explanatory clauses with commas (Amparo,
 * cuya última novela…). Register: cuyo is typical of writing and formal speech; in
 * conversation people split the sentence and use «su», or say «del que / de la que
 * + noun», «con + noun», «que tiene…». «Que su» (quesuismo) is frequent in informal
 * speech in many areas but the RAE-ASALE norm rejects it (DPD, «cuyo»). Never
 * «cuyo» as an interrogative: ¿De quién es…? / No sé de quién es. «Del cual / de
 * la cual» as a formal variant of «del que». Ampliación: «en cuyo caso», agreement
 * with the first of two coordinated nouns (cuyo nombre y apellidos), no «cuyo»
 * without the idea of possession. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 443,
  level: 'B2',
  title: 'Cuyo/a/os/as y relativos de posesión',
  subtitle: 'Unir un nombre con lo que le pertenece en textos cuidados («la autora cuyos libros adoro») y reformularlo con naturalidad al hablar.',
  legend: [
    { tone: 'blue', label: 'Cuyo / cuya / cuyos / cuyas + nombre · concuerda con lo poseído' },
    { tone: 'orange', label: 'Preposición + cuyo · en cuya plaza, para cuyo catálogo' },
    { tone: 'teal', label: 'Alternativas habituales al hablar · su, del que / de la que, con, que tiene' },
    { tone: 'violet', label: 'Registro escrito formal · del cual / de la cual, en cuyo caso' },
  ],
  optionNotes: {
    'que su': '«Que su» (el llamado quesuismo) se oye en la conversación informal, pero la norma lo rechaza. En un texto cuidado: «cuyo / cuya…».',
    'que sus': '«Que sus» (quesuismo) no es normativo. En un texto cuidado: «cuyos / cuyas…».',
    '¿Cuyo es': '«Cuyo» no es interrogativo en el español actual. Para preguntar por el dueño: «¿De quién es…?».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un nombre y lo que le pertenece', coach: '«Cuyo» mira hacia delante. «Cuyo» looks forward.',
      steps: [
        { title: 'El programa del festival · The festival programme', blocks: [
          { kind: 'lead', text: 'Valdelirio, un pueblo de México, prepara la décima edición de su **Festival de las Letras**. **Lorena Vidal**, la coordinadora, escribe el programa impreso; **Héctor Molina**, voluntario, se ocupa de las redes y de un anuncio para la radio. En el programa, Lorena necesita frases que presenten a cada invitado y, en la misma frase, algo suyo: sus libros, su pueblo, su editorial. Hoy aprendes **cuyo**: «Conocí a una autora **cuyos libros** adoro».', en: 'Valdelirio, a town in Mexico, is preparing the tenth edition of its literature festival. Lorena, the coordinator, writes the printed programme; Héctor, a volunteer, handles social media and a radio spot. Lorena needs sentences that introduce each guest and, in the same breath, something that belongs to them. Today you learn «cuyo», the Spanish «whose».' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases separadas y tu alumno lee la frase unida. Tu alumno dice qué palabra desaparece y qué palabra ocupa su lugar.', self: 'Lee las dos columnas en voz alta. ¿Qué palabra desaparece al unir las frases y cuál ocupa su lugar? (Which word disappears, and which replaces it?)' } },
          { kind: 'compare', title: 'De dos frases a una · From two sentences to one', columns: [
            { tone: 'teal', label: 'DOS FRASES', sentence: 'Amparo Ledesma es una autora. Adoro [[sus libros|teal]].', idea: 'Dos frases independientes; «sus» indica de quién son los libros.', en: 'Two separate sentences: the possessive «sus» says whose books they are. Perfectly natural, especially in speech.' },
            { tone: 'blue', label: 'UNA FRASE CON «CUYO»', sentence: 'Amparo Ledesma es una autora [[cuyos libros|blue]] adoro.', idea: '«Cuyos» une las dos ideas y sustituye a «sus»: es un relativo y un posesivo a la vez.', en: '«Cuyos» links the two ideas and takes the place of «sus»: it is a relative and a possessive at the same time, like English «whose».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rubén es un poeta. Su primer libro se agotó en un mes. → Rubén es un poeta ___ primer libro se agotó en un mes.', options: ['que su', 'quien', 'cuyo'], answer: 2, why: '«Cuyo» sustituye a «su» y une las dos frases: «un poeta cuyo primer libro…».', en: 'Rubén is a poet whose first book sold out in a month.' },
            { prompt: '¿Qué idea expresa siempre «cuyo»?', options: ['Posesión o pertenencia.', 'Un momento.', 'Un lugar.'], answer: 0, why: '«Cuyo» relaciona a un poseedor (la autora) con algo que le pertenece o se relaciona con ella (sus libros, su padre, su pueblo).', en: 'What idea does «cuyo» always express?' },
          ] },
        ] },
        { title: 'Concuerda con lo poseído · It agrees with what is possessed', mascot: '/brand/mascot/studying.webp', coach: 'Mira el nombre que viene detrás. Look at the noun that follows.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CUYO / CUYA / CUYOS / CUYAS', question: '¿Con qué palabra concuerda «cuyo»?', en: '«Cuyo» agrees in gender and number with the noun that follows it (the thing possessed), never with the possessor. English «whose» never changes, so this is the point to watch.', formula: ['poseedor + cuyo / cuya / cuyos / cuyas + lo poseído + verbo', 'la concordancia la decide lo poseído, no el poseedor'],
            meaning: '«Cuyo» funciona como «su», pero también une frases. Por eso concuerda como un adjetivo con el **nombre que va detrás**: «una autora **cuyo** padre», «un poeta **cuyas** novelas». El poseedor puede ser masculino o femenino, singular o plural: no influye. Sirve para **personas y cosas**.',
            examples: [
              { es: 'Es una autora [[cuyo padre|blue]] era impresor.', en: 'Feminine possessor, masculine possessed noun: «cuyo» follows «padre».' },
              { es: 'Es un pueblo [[cuyas calles|blue]] se llenan de libros en octubre.', en: 'A town whose streets fill with books in October: possession also works with places and things.' },
              { es: 'Son dos ilustradoras [[cuyo estudio|blue]] está junto a la biblioteca.', en: 'Plural possessor, singular possessed noun: «cuyo», not «cuyos».' },
              { es: 'Admiro a los poetas [[cuya obra|blue]] cabe en un solo libro.', en: 'Masculine plural possessor, feminine singular noun: «cuya».' },
            ],
            note: 'Detrás de «cuyo» nunca va artículo: «cuyos libros», nunca «cuyos los libros».' },
          { kind: 'table', title: 'El poseedor no decide · The possessor does not decide', head: ['Poseedor', '+ nombre masculino', '+ nombre femenino'], rows: [
            ['el poeta', '[[cuyo libro|blue]] · [[cuyos libros|blue]]', '[[cuya novela|blue]] · [[cuyas novelas|blue]]'],
            ['la autora', '[[cuyo hijo|blue]] · [[cuyos hijos|blue]]', '[[cuya editorial|blue]] · [[cuyas ideas|blue]]'],
            ['los vecinos', '[[cuyo perro|blue]] · [[cuyos perros|blue]]', '[[cuya casa|blue]] · [[cuyas casas|blue]]'],
          ], note: 'Lee cada fila: el poseedor no cambia nada; lo que cambia es el nombre de la derecha.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nuria es una ilustradora ___ dibujos conocen todos los niños del pueblo.', options: ['cuya', 'cuyas', 'cuyos'], answer: 2, why: 'Concuerda con «dibujos» (masculino plural), no con «ilustradora».', en: 'Nuria is an illustrator whose drawings every child in town knows.' },
            { prompt: 'Rubén es un poeta ___ voz reconoce todo el pueblo en la radio.', options: ['cuyo', 'cuya', 'cuyos'], answer: 1, why: '«Voz» es femenino singular: «cuya voz», aunque Rubén sea un hombre.', en: 'Rubén is a poet whose voice the whole town recognises on the radio.' },
            { prompt: 'Las hermanas Ruiz, ___ librería abrió en 1980, venderán libros en la plaza.', options: ['cuya', 'cuyo', 'cuyas'], answer: 0, why: 'Hay varias poseedoras, pero una sola librería: «cuya librería».', en: 'The Ruiz sisters, whose bookshop opened in 1980, will sell books in the square.' },
          ] },
        ] },
        { title: 'Preposición + cuyo · Preposition + cuyo', mascot: '/brand/mascot/kneeling.webp', coach: 'La preposición va delante, como en la clase 142. The preposition goes first.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PREPOSICIÓN + CUYO + NOMBRE', question: '¿Qué pasa si la frase original lleva una preposición?', en: 'If the original sentence has a preposition (in the square, for the project, about the book), it moves to the front of the whole «cuyo + noun» group, just as with «en el que» or «con quien».', formula: ['nombre + preposición + cuyo / cuya… + nombre + verbo', 'la feria se celebra en la plaza del pueblo → el pueblo en cuya plaza se celebra la feria'],
            meaning: 'Ya sabes que en español la preposición no se queda al final (clase 142). Con «cuyo» pasa lo mismo: la preposición que pide el verbo (**hablar de**, **trabajar para**, **conocer a**, **contar con**) se coloca **delante de «cuyo»**, y el grupo entero va al principio de la relativa.',
            examples: [
              { es: 'Valdelirio es el pueblo [[en cuya plaza|orange]] se celebra la feria.', en: 'Valdelirio is the town in whose square the fair is held: the fair is held IN the square.' },
              { es: 'Marea Alta es la editorial [[para cuyo catálogo|orange]] trabaja Nuria.', en: 'Nuria works FOR the publisher’s catalogue.' },
              { es: 'Es la autora [[de cuyas novelas|orange]] hablamos ayer.', en: 'We talked ABOUT her novels yesterday.' },
              { es: 'Es el editor [[a cuya hija|orange]] conocí en Monterrey.', en: 'Personal «a»: I met his daughter, so «a cuya hija».' },
            ] },
          { kind: 'table', title: 'De la frase original a la relativa · From the original sentence to the relative clause', head: ['Frase original', 'Con preposición + cuyo'], rows: [
            ['Contamos con la ayuda **de Nuria**.', 'Nuria, [[con cuya ayuda|orange]] contamos, hizo el cartel.'],
            ['Pasé mi infancia en la imprenta **de mi padre**.', 'Mi padre, [[en cuya imprenta|orange]] pasé mi infancia, era muy lector.'],
            ['Se agotaron tres ediciones **de su primer libro**.', 'Es el poeta [[de cuyo primer libro|orange]] se agotaron tres ediciones.'],
          ], note: 'Busca primero la preposición en la frase original. Después, «cuyo» concuerda con el nombre que va detrás (ayuda → cuya; libro → cuyo).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Héctor aprendió a leer con los profesores de esa escuela. → Es la escuela ___ profesores aprendió a leer.', options: ['con cuyos', 'cuyos', 'con cuyas'], answer: 0, why: '«Aprender con alguien» → «con» delante; «cuyos» concuerda con «profesores».', en: 'It is the school with whose teachers he learned to read.' },
            { prompt: 'Es el pueblo ___ calles pasea cada tarde.', options: ['por cuyas', 'por cuyos', 'cuyas'], answer: 0, why: '«Pasear por las calles» → «por cuyas calles». Sin la preposición, la frase queda incompleta.', en: 'It is the town through whose streets he walks every afternoon.' },
            { prompt: 'Amparo es la autora ___ última novela hablaron en la radio.', options: ['de cuya', 'de cuyo', 'cuya'], answer: 0, why: '«Hablar de la novela» → «de» delante; «cuya» concuerda con «novela».', en: 'Amparo is the author whose latest novel they talked about on the radio.' },
          ] },
        ] },
        { title: 'Escribir y hablar · Writing and speaking', mascot: '/brand/mascot/speaking.webp', coach: '«Cuyo» es de texto cuidado. «Cuyo» belongs to careful texts.', blocks: [
          { kind: 'compare', title: 'Tres maneras de decirlo · Three ways to say it', columns: [
            { tone: 'blue', label: 'ESCRITO Y FORMAL', sentence: 'Rubén Echeverría, [[cuyo primer libro|blue]] se agotó en un mes, abrirá el festival.', idea: 'Programas, prensa, informes, discursos: «cuyo» es lo esperado.', en: 'Programmes, press, reports, speeches: «cuyo» is what readers expect. Commas mark an explanatory clause, as in English.' },
            { tone: 'teal', label: 'CONVERSACIÓN', sentence: 'Abre el festival Rubén Echeverría. [[Su primer libro|teal]] se agotó en un mes.', idea: 'Al hablar, lo más frecuente es hacer dos frases y usar «su». «Cuyo» casi no se oye en la conversación diaria.', en: 'In everyday conversation «cuyo» is rare: people usually split the idea into two sentences with «su».' },
            { tone: 'neutral', label: 'NO NORMATIVO', sentence: 'Abre el festival Rubén, **que su** primer libro se agotó en un mes.', idea: '«Que su» (el llamado **quesuismo**) se oye en el habla informal de muchas zonas, pero la norma lo rechaza.', en: '«Que su» is heard in informal speech in many places, but the norm rejects it: avoid it, especially in writing.' },
          ] },
          { kind: 'table', title: 'Alternativas correctas al hablar · Correct spoken alternatives', head: ['Con «cuyo» (texto cuidado)', 'Alternativa habitual (conversación)'], rows: [
            ['una autora [[cuyas novelas|blue]] conozco bien', 'una autora [[de la que|teal]] conozco bien las novelas'],
            ['una casa [[cuyo jardín|blue]] es enorme', 'una casa [[con|teal]] un jardín enorme'],
            ['un poeta [[cuyo hermano|blue]] es actor', 'un poeta [[que tiene|teal]] un hermano actor'],
            ['el pueblo [[en cuya plaza|orange]] se celebra la feria', 'Es un pueblo precioso. La feria se celebra en [[su plaza|teal]].'],
          ], note: 'Con «del que / de la que», lo poseído va detrás del verbo y con artículo: «de la que conozco **las** novelas». No añadas «sus»: «de la que conozco sus novelas» repite la posesión.' },
          { kind: 'tip', icon: '📘', title: 'Qué dice la norma · What the norm says', text: 'La RAE y la ASALE (Nueva gramática y Diccionario panhispánico de dudas) recomiendan evitar **«que su»** en lugar de «cuyo»: «el vecino **que su** perro ladra» se considera incorrecto en la lengua cuidada. Al hablar tienes muchas opciones correctas; al escribir un texto formal, usa **cuyo**.', en: 'The Spanish Royal Academy and the Association of Academies advise against «que su» instead of «cuyo». It is common in casual speech, but it sounds careless in public or written language. Speaking, you have plenty of correct options; in formal writing, use «cuyo».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Héctor escribe a un amigo por mensaje: «Mañana viene una autora ___ ya leí todas las novelas».', options: ['cuya', 'de la que', 'que sus'], answer: 1, why: 'En un mensaje informal es natural «de la que + verbo + las novelas». «Cuyas novelas ya leí todas» sería raro, y «que sus» no es normativo.', en: 'Héctor texts a friend: tomorrow an author is coming whose novels I have all read.' },
            { prompt: '¿Qué frase es la más adecuada para el programa impreso?', options: ['Nuria Palacios, que sus dibujos ilustran el cartel, dará un taller.', 'Nuria Palacios, de la que sus dibujos ilustran el cartel, dará un taller.', 'Nuria Palacios, cuyos dibujos ilustran el cartel, dará un taller.'], answer: 2, why: 'Texto impreso y formal: «cuyos dibujos». Las otras dos repiten o sustituyen mal la posesión.', en: 'Which sentence suits the printed programme best?' },
            { prompt: 'En una charla con amigos: «Vivo en una casa ___ un patio enorme».', options: ['que su', 'cuyo', 'con'], answer: 2, why: '«Con + nombre» es la forma más natural en la conversación: «una casa con un patio enorme».', en: 'Chatting with friends: I live in a house with a huge patio.' },
          ] },
        ] },
        { title: '¿Cuyo, de quién o del cual? · Cuyo, de quién or del cual?', mascot: '/autoestudio/mascot/noting.webp', coach: '«Cuyo» no pregunta. «Cuyo» never asks.', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase · Think about your sentence', steps: [
            { q: '¿Preguntas por el dueño, directa o indirectamente? (Are you asking who owns something?)', yes: 'Usa «de quién»: «¿De quién es este cartel?», «No sé de quién es». Nunca «cuyo».', no: 'Pasa a la pregunta siguiente.' },
            { q: '¿Unes un nombre con algo suyo (su, sus)? (Are you linking a noun to something of its own?)', yes: 'Pasa a la pregunta siguiente.', no: 'Usa otro relativo: que, quien, el que, donde…' },
            { q: '¿Es un texto escrito o formal? (Is it a written or formal text?)', yes: '«Cuyo / cuya…» concordando con lo poseído, o «del cual / de la cual» en un registro muy formal.', no: 'Dos frases con «su», «del que / de la que», «con» o «que tiene»; «cuyo» también es correcto, pero suena formal.' },
          ] },
          { kind: 'compare', title: 'Del que y del cual · Del que and del cual', columns: [
            { tone: 'teal', label: 'NEUTRO', sentence: 'La biblioteca guarda un manuscrito [[del que|teal]] solo se conservan dos copias.', idea: 'Sirve al hablar y al escribir.', en: 'Neutral: fine in speech and in writing.' },
            { tone: 'violet', label: 'FORMAL ESCRITO', sentence: 'La biblioteca guarda un manuscrito [[del cual|violet]] solo se conservan dos copias.', idea: 'Variante formal (clase 112): notas de prensa, informes, textos académicos.', en: 'A formal written variant you met in class 112: press releases, reports, academic texts. In conversation it sounds stiff.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la oficina del festival: «¿___ es esta bufanda? Alguien la dejó en la silla».', options: ['¿De cuál es', '¿Cuyo es', '¿De quién es'], answer: 2, why: 'Para preguntar por el dueño se usa «de quién». «Cuyo» no es interrogativo.', en: 'Whose scarf is this? Someone left it on the chair.' },
            { prompt: 'Lorena: «No sé ___ es el coche que está delante de la biblioteca».', options: ['cuyo', 'de quién', 'que su'], answer: 1, why: 'Pregunta indirecta sobre el dueño: «no sé de quién es».', en: 'Lorena: I don’t know whose car that is in front of the library.' },
            { prompt: 'Nota de prensa: «Se expondrá una carta de 1910, ___ se desconoce el destinatario».', options: ['de la cual', 'cuya', 'del que'], answer: 0, why: '«De la cual» concuerda con «carta» y encaja en una nota de prensa. «Del que» tendría el género equivocado; «cuya destinatario», también.', en: 'Press release: a 1910 letter will be shown, whose addressee is unknown.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lee, corrige y explica. Read, correct, explain.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error. Tu alumno dice dónde está el problema y la dice bien. Después aparece la corrección.', self: 'Lee cada frase, busca el error y dila bien en voz alta. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Amparo es una autora cuya libros adoro.', right: 'Amparo es una autora cuyos libros adoro.', why: '«Cuyo» concuerda con lo poseído (libros), no con el poseedor (autora).' },
            { wrong: 'Es un poeta cuyos los poemas se leen en las escuelas.', right: 'Es un poeta cuyos poemas se leen en las escuelas.', why: 'Detrás de «cuyo» no va artículo: ya cumple esa función.' },
            { wrong: 'Es el pueblo cuya plaza se celebra la feria.', right: 'Es el pueblo en cuya plaza se celebra la feria.', why: 'La feria se celebra **en** la plaza: la preposición va delante de «cuya».' },
            { wrong: 'En el programa: «Nuria, que sus dibujos conocen todos, dará un taller».', right: 'En el programa: «Nuria, cuyos dibujos conocen todos, dará un taller».', why: '«Que sus» (quesuismo) no es normativo; en un texto escrito, «cuyos».' },
            { wrong: 'Es una autora cuyas sus novelas tienen mucho éxito.', right: 'Es una autora cuyas novelas tienen mucho éxito.', why: '«Cuyas» ya expresa la posesión: «sus» la repite.' },
            { wrong: '¿Cuyo es este libro?', right: '¿De quién es este libro?', why: '«Cuyo» no sirve para preguntar; para preguntar por el dueño, «de quién».' },
            { wrong: 'Tengo una amiga cuya trabaja en la editorial.', right: 'Tengo una amiga que trabaja en la editorial.', why: 'Aquí no hay posesión: «cuyo» siempre va seguido de un nombre (lo poseído).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Es la librería cuyo el dueño organiza el festival.', 'Es la librería cuyo dueño organiza el festival.', 'Es la librería cuya dueño organiza el festival.'], answer: 1, why: '«Dueño» es masculino singular: «cuyo dueño», sin artículo.', en: 'It is the bookshop whose owner organises the festival.' },
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Son los vecinos cuyos hijos invitamos al taller.', 'Son los vecinos que sus hijos invitamos al taller.', 'Son los vecinos a cuyos hijos invitamos al taller.'], answer: 2, why: '«Invitar a alguien» → «a cuyos hijos»: la «a» personal va delante; «cuyos» concuerda con «hijos».', en: 'They are the neighbours whose children we invited to the workshop.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno presenta en una frase formal a una persona que admira con «cuyo» y después dice lo mismo como lo diría a un amigo, sin «cuyo».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la oficina del festival', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Lorena y Héctor revisan el programa · Lorena and Héctor check the programme', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lorena, tu alumno es Héctor. Después tu alumno toca cada expresión marcada y explica la concordancia o el registro.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica la concordancia o el registro. (Explain agreement or register for each marked form.)' } },
          { kind: 'explore', title: 'Jueves, dos días antes del festival', setting: 'La oficina del festival, en la biblioteca de Valdelirio. Héctor ha leído el borrador del programa impreso y comenta los textos con Lorena. (The festival office in the town library. Héctor has read the draft programme and discusses it with Lorena.)', lines: [
            { who: 'Héctor', text: 'Lorena, ya leí el borrador. Me encanta cómo presentas a Amparo: «una novelista [[cuyas historias|blue]] se leen en medio mundo».', en: 'Lorena, I’ve read the draft. I love how you introduce Amparo: “a novelist whose stories are read all over the world.”' },
            { who: 'Lorena', text: 'Gracias. Es un texto impreso y quería un tono cuidado. ¿Y en las redes cómo lo pondrías tú?', en: 'Thanks. It’s a printed text and I wanted a careful tone. How would you put it on social media?' },
            { who: 'Héctor', text: 'Más directo: «Viene Amparo Ledesma, una autora [[de la que|teal]] ya he leído todas las novelas».', en: 'More direct: “Amparo Ledesma is coming, an author I’ve read every single novel by.”' },
            { who: 'Lorena', text: 'Perfecto para las redes. ¿Y la ficha de Rubén? Puse: «el poeta [[de cuyo primer libro|orange]] se agotaron tres ediciones».', en: 'Perfect for social media. And Rubén’s profile? I wrote: “the poet of whose first book three editions sold out.”' },
            { who: 'Héctor', text: 'Se entiende, pero en la radio yo diría: «Viene Rubén, **que su** primer libro se agotó tres veces».', en: 'It’s clear, but on the radio I’d say: “Rubén’s coming, that his first book sold out three times.”' },
            { who: 'Lorena', text: 'Eso se oye mucho, pero no es normativo y en la radio suena descuidado. Si no quieres «cuyo», haz dos frases: «Viene Rubén Echeverría. [[Su primer libro|teal]] se agotó tres veces».', en: 'You hear that a lot, but it isn’t standard, and on air it sounds sloppy. If you don’t want «cuyo», use two sentences: “Rubén Echeverría is coming. His first book sold out three times.”' },
            { who: 'Héctor', text: 'De acuerdo, dos frases. ¿Y la editorial? Escribiste «Marea Alta, [[para cuyo catálogo|orange]] trabaja Nuria».', en: 'OK, two sentences. And the publisher? You wrote “Marea Alta, for whose catalogue Nuria works.”' },
            { who: 'Lorena', text: 'Sí, Nuria ilustra todos sus libros infantiles. ¿Te parece raro?', en: 'Yes, Nuria illustrates all their children’s books. Does it sound odd to you?' },
            { who: 'Héctor', text: 'Un poco. ¿No sería «para cuya catálogo», porque «editorial» es femenino?', en: 'A little. Shouldn’t it be «cuya», since «editorial» is feminine?' },
            { who: 'Lorena', text: 'No, «cuyo» mira hacia delante: concuerda con «catálogo». Igual que en «la plaza de la Fuente, [[en cuyos portales|orange]] pondremos las librerías».', en: 'No, «cuyo» looks forward: it agrees with «catálogo». Same as in “the Plaza de la Fuente, under whose arcades we’ll set up the bookstalls.”' },
            { who: 'Héctor', text: 'Entendido. Última duda: en la nota de prensa pusiste «un manuscrito [[del cual|violet]] solo se conservan dos copias». ¿Es lo mismo?', en: 'Got it. Last question: in the press release you wrote “a manuscript of which only two copies survive.” Is that the same thing?' },
            { who: 'Lorena', text: 'Es como «[[del que|teal]]», pero más formal. En una nota de prensa queda bien; en un mensaje a un amigo sonaría rarísimo.', en: 'It’s like «del que», only more formal. It works in a press release; in a message to a friend it would sound really odd.' },
          ], notes: {
            'cuyas historias': '«Cuyas» concuerda con **historias** (femenino plural), no con Amparo. Registro cuidado, propio de un programa impreso.',
            'de la que': 'Alternativa oral: «de la que» + verbo + lo poseído **con artículo** (todas las novelas). Sin «sus».',
            'de cuyo primer libro': '«Se agotaron tres ediciones **de** su primer libro» → la preposición «de» va delante; «cuyo» concuerda con «libro».',
            'Su primer libro': 'La solución más natural al hablar: **dos frases** y el posesivo «su». Es correcta y clara.',
            'para cuyo catálogo': '«Trabajar **para** el catálogo» → «para cuyo catálogo». «Cuyo» es masculino por «catálogo», aunque «editorial» sea femenino.',
            'en cuyos portales': '«Pondremos las librerías **en** los portales de la plaza» → «en cuyos portales». Masculino plural por «portales».',
            'del cual': 'Variante **formal** de «del que». Se refiere a «manuscrito»: «se conservan dos copias del manuscrito».',
            'del que': 'Equivale a «del cual», pero sirve en cualquier registro.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué le propone Lorena a Héctor para la radio si no quiere usar «cuyo»?', options: ['Usar siempre «del cual».', 'Usar «que su».', 'Hacer dos frases con «su».'], answer: 2, why: '«Si no quieres “cuyo”, haz dos frases: “Viene Rubén Echeverría. Su primer libro se agotó tres veces”».', en: 'What does Lorena suggest for the radio if Héctor doesn’t want to use «cuyo»?' },
            { prompt: '¿Por qué Lorena escribe «para cuyo catálogo»?', options: ['Porque «cuyo» concuerda con «catálogo».', 'Porque Nuria es la dueña.', 'Porque Marea Alta es una empresa.'], answer: 0, why: '«Cuyo mira hacia delante: concuerda con “catálogo”».', en: 'Why does Lorena write «para cuyo catálogo»?' },
            { prompt: '¿Qué opina Lorena de «del cual»?', options: ['Que es un error.', 'Que es formal: bien en una nota de prensa, raro en un mensaje.', 'Que es la forma más natural al hablar.'], answer: 1, why: '«En una nota de prensa queda bien; en un mensaje a un amigo sonaría rarísimo».', en: 'What does Lorena think of «del cual»?' },
          ] },
        ] },
        { title: '¿Para el programa, para las redes o para nada? · Programme, social media or neither?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Héctor ha reunido frases de varios borradores. ¿Cuáles son **correctas y formales**, cuáles son **correctas y coloquiales** y cuáles **no son normativas**?', en: 'Héctor has collected sentences from several drafts. Which are correct and formal, which are correct and conversational, and which are not standard Spanish?' },
          { kind: 'classify', title: 'Clasifica las frases · Sort the sentences', categories: [
            { id: 'formal', label: 'CORRECTA · FORMAL', tone: 'blue' },
            { id: 'coloquial', label: 'CORRECTA · COLOQUIAL', tone: 'teal' },
            { id: 'no', label: 'NO NORMATIVA', tone: 'neutral' },
          ], items: [
            { text: 'La biblioteca, cuya sala principal acaba de reformarse, acogerá los talleres.', answer: 'formal', why: '«Cuya sala»: concordancia correcta, tono de programa.' },
            { text: 'La biblioteca tiene una sala nueva. Ahí van a ser los talleres.', answer: 'coloquial', why: 'Dos frases sencillas: lo normal en una conversación.' },
            { text: 'El taller es en la biblioteca, que su sala acaban de arreglar.', answer: 'no', why: '«Que su»: quesuismo. Mejor «cuya sala» o dos frases.' },
            { text: 'Rubén es un poeta del que todos conocen algún verso.', answer: 'coloquial', why: '«Del que» + verbo + lo poseído: correcto y natural al hablar.' },
            { text: 'Se proyectará un documental de 1970 sobre el pueblo, en cuyas calles se rodó.', answer: 'formal', why: '«Se rodó en las calles» → «en cuyas calles». Registro escrito.' },
            { text: 'Es una autora cuyas sus novelas se leen en medio mundo.', answer: 'no', why: '«Cuyas sus»: la posesión aparece dos veces.' },
            { text: 'Marea Alta es una editorial pequeña, con un catálogo muy cuidado.', answer: 'coloquial', why: '«Con + nombre»: alternativa sencilla y natural.' },
            { text: 'El festival recuerda a un poeta local, del cual se conservan cartas inéditas.', answer: 'formal', why: '«Del cual»: variante formal, propia de una nota de prensa.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Dónde lo leerías o lo oirías?». La misma información puede ser perfecta en un programa y rígida en un mensaje; «que su» no es adecuado en ningún texto cuidado.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Qué nombre va detrás? ¿Hay preposición? What noun follows? Is there a preposition?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Ficha de una invitada. (A guest’s profile.)', prompt: '«Inés Carrasco, ___ crónicas de viaje publica cada semana un diario de Guadalajara, firmará libros el sábado».', options: ['cuya', 'cuyos', 'cuyas'], answer: 2, why: 'Concuerda con «crónicas» (femenino plural).', en: '“Inés Carrasco, whose travel pieces a Guadalajara paper runs every week, will sign books on Saturday.”' },
            { context: 'Texto sobre el lugar del festival. (About the venue.)', prompt: '«La antigua estación, ___ andenes se instalará el mercado de libros usados, abrirá a las diez».', options: ['en cuyos', 'en cuyas', 'cuyos'], answer: 0, why: 'El mercado se instalará **en** los andenes: «en cuyos andenes».', en: '“The old station, on whose platforms the second-hand book market will be set up, opens at ten.”' },
            { context: 'Agradecimientos del programa. (Acknowledgements.)', prompt: '«Gracias a la familia Ortega, ___ apoyo este festival no existiría».', options: ['sin cuyo', 'sin cuya', 'cuyo'], answer: 0, why: '«Sin el apoyo» → «sin cuyo apoyo»: preposición delante y masculino por «apoyo».', en: '“Thanks to the Ortega family, without whose support this festival would not exist.”' },
            { context: 'Héctor, en un audio a un amigo. (Héctor, in a voice note to a friend.)', prompt: '«Mañana conozco a Amparo, la escritora ___ te presté la novela».', options: ['cuyos', 'de la que', 'que su'], answer: 1, why: 'Conversación: «de la que te presté la novela» es correcto y natural. «Que su» no es normativo.', en: '“Tomorrow I’m meeting Amparo, the writer whose novel I lent you.”' },
            { context: 'Pregunta en el puesto de información. (At the information desk.)', prompt: '«Perdone, ¿sabe ___ es esta mochila?».', options: ['de quién', 'cuyo', 'cuya'], answer: 0, why: 'Pregunta indirecta por el dueño: «de quién». «Cuyo» no pregunta.', en: '“Excuse me, do you know whose backpack this is?”' },
          ] },
        ] },
        { title: 'La grabación del anuncio · Recording the radio spot', blocks: [
          { kind: 'chat-fill', title: 'Héctor y Lorena preparan el anuncio · Preparing the radio spot', lines: [
            { who: 'Héctor', text: 'Voy a grabar el anuncio para la radio. ¿Empiezo así? «Llega el festival, ___ programa ya está en la web».', options: ['cuyo', 'cuya', 'que su'], answer: 0, why: 'Concuerda con «programa» (masculino singular). En un anuncio grabado, «cuyo» funciona bien.' },
            { who: 'Lorena', text: 'Sí. Después nombra a Nuria, la ilustradora ___ dibujos hicimos el cartel.', options: ['con cuyos', 'cuyas', 'de cuyos'], answer: 0, why: '«Hicimos el cartel **con** sus dibujos» → «con cuyos dibujos».' },
            { who: 'Héctor', text: '¿Y menciono a los Ortega? No me acuerdo de ___ era la idea de la feria.', options: ['cuyo', 'quién', 'cuya'], answer: 1, why: 'Pregunta indirecta por el dueño de la idea: «de quién». «Cuyo» no pregunta.' },
            { who: 'Lorena', text: 'De don Aurelio Ortega, ___ nieta ahora dirige la librería.', options: ['que su', 'cuya', 'cuyo'], answer: 1, why: '«Nieta» es femenino: «cuya nieta», aunque don Aurelio sea un hombre.' },
            { who: 'Héctor', text: 'Perfecto. ¿Y digo dónde son los talleres?' },
            { who: 'Lorena', text: 'Sí: en la biblioteca, ___ sala nueva caben cien personas.', options: ['en cuya', 'en cuyo', 'cuya'], answer: 0, why: '«Caben cien personas **en** la sala» → «en cuya sala».' },
          ] },
        ] },
        { title: 'Corrige las frases · Correct the sentences', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Valdelirio es un pueblo cuyos habitantes leen más que la media del país.', ok: true, why: 'Correcta: «cuyos» concuerda con «habitantes».' },
            { sentence: 'Amparo, cuya novelas se traducen a once idiomas, llega el sábado.', ok: false, options: ['Amparo, cuyas novelas se traducen a once idiomas, llega el sábado.', 'Amparo, que sus novelas se traducen a once idiomas, llega el sábado.', 'Amparo, cuyas las novelas se traducen a once idiomas, llega el sábado.'], answer: 0, why: '«Novelas» es femenino plural: «cuyas novelas», sin artículo.' },
            { sentence: 'Es la editorial cuyo catálogo trabaja Nuria.', ok: false, options: ['Es la editorial cuya catálogo trabaja Nuria.', 'Es la editorial para cuyo catálogo trabaja Nuria.', 'Es la editorial que para su catálogo trabaja Nuria.'], answer: 1, why: '«Trabajar **para** el catálogo»: falta la preposición delante de «cuyo».' },
            { sentence: 'Rubén Echeverría, de cuyo primer libro se agotaron tres ediciones, cerrará el festival.', ok: true, why: 'Correcta: «se agotaron tres ediciones **de** su primer libro» → «de cuyo primer libro».' },
            { sentence: '¿Cuya es esta chamarra que dejaron en el auditorio?', ok: false, options: ['¿Cuyo es esta chamarra que dejaron en el auditorio?', '¿De quién es esta chamarra que dejaron en el auditorio?', '¿De cuya es esta chamarra que dejaron en el auditorio?'], answer: 1, why: 'Para preguntar por el dueño: «de quién». «Chamarra» es la chaqueta en México.' },
            { sentence: 'Agradecemos a los vecinos, sin que su ayuda no habría festival.', ok: false, options: ['Agradecemos a los vecinos, cuya ayuda no habría festival.', 'Agradecemos a los vecinos, sin cuya ayuda no habría festival.', 'Agradecemos a los vecinos, sin cuyos ayuda no habría festival.'], answer: 1, why: '«Sin su ayuda» → «sin cuya ayuda»: preposición delante, femenino por «ayuda».' },
          ] },
        ] },
        { title: '¿Qué forma falta? · Which form is missing?', mascot: '/brand/mascot/kneeling.webp', coach: 'Solo mira el nombre de detrás. Only look at the noun after the gap.', blocks: [
          { kind: 'classify', title: 'Clasifica por la forma · Sort by form', categories: [
            { id: 'cuyo', label: 'CUYO', tone: 'blue' },
            { id: 'cuya', label: 'CUYA', tone: 'blue' },
            { id: 'cuyos', label: 'CUYOS', tone: 'blue' },
            { id: 'cuyas', label: 'CUYAS', tone: 'blue' },
          ], items: [
            { text: 'Las organizadoras, ___ trabajo nadie ve, llegan a las seis de la mañana.', answer: 'cuyo', why: '«Trabajo»: masculino singular, aunque las poseedoras sean varias mujeres.' },
            { text: 'Un actor ___ abuela nació en Valdelirio leerá un cuento.', answer: 'cuya', why: '«Abuela»: femenino singular.' },
            { text: 'La librería Ortega, ___ estantes son de 1952, abre también el domingo.', answer: 'cuyos', why: '«Estantes»: masculino plural.' },
            { text: 'El poeta, de ___ cartas se conservan pocas, vivió aquí diez años.', answer: 'cuyas', why: '«Cartas»: femenino plural; «de» lo pide «se conservan pocas cartas de él».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Es', 'una', 'novelista', 'cuyos', 'personajes', 'parecen', 'reales.'], accept: ['Es una novelista cuyos personajes parecen reales.'], en: 'She is a novelist whose characters seem real.' },
            { tiles: ['Visitamos', 'el', 'pueblo', 'en', 'cuya', 'plaza', 'leyó', 'Rubén.'], accept: ['Visitamos el pueblo en cuya plaza leyó Rubén.'], en: 'We visited the town in whose square Rubén gave a reading.' },
            { tiles: ['Es', 'un', 'autor', 'del', 'que', 'conozco', 'todos', 'los', 'libros.'], accept: ['Es un autor del que conozco todos los libros.'], en: 'He is an author I know every book by: the spoken alternative.' },
          ] },
        ] },
        { title: 'Une las frases · Join the sentences', mascot: '/autoestudio/mascot/writing.webp', coach: 'Cambia «su» por «cuyo». Swap «su» for «cuyo».', blocks: [
          { kind: 'rewrite', title: 'Transforma · Transform', items: [
            { prompt: 'Nuria Palacios es una ilustradora. Sus libros se usan en muchas escuelas.', instruction: 'Una frase: «Nuria Palacios es una ilustradora cuyos…». (One sentence.)', accept: ['Nuria Palacios es una ilustradora cuyos libros se usan en muchas escuelas.'] },
            { prompt: 'Valdelirio es un pueblo. En su plaza se celebra la feria del libro.', instruction: 'Una frase con preposición + cuyo. (Preposition + cuyo.)', accept: ['Valdelirio es un pueblo en cuya plaza se celebra la feria del libro.', 'Valdelirio es el pueblo en cuya plaza se celebra la feria del libro.'] },
            { prompt: 'Héctor, en la radio: «Viene Amparo, que su última novela ganó un premio».', instruction: 'Corrígelo para el programa impreso con «cuyo». (Make it standard.)', accept: ['Viene Amparo, cuya última novela ganó un premio.'] },
            { prompt: 'Marea Alta es una editorial pequeña. Nuria trabaja para su catálogo.', instruction: 'Una frase: «Marea Alta es una editorial pequeña para…». (Keep the preposition.)', accept: ['Marea Alta es una editorial pequeña para cuyo catálogo trabaja Nuria.'] },
            { prompt: 'Programa: «Rubén, cuyo hermano es actor, leerá sus poemas».', instruction: 'Dilo como en una conversación, con «que tiene». (Spoken version.)', accept: ['Rubén, que tiene un hermano actor, leerá sus poemas.', 'Rubén, que tiene un hermano que es actor, leerá sus poemas.'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La radio del pueblo', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El programa en la radio · The programme on the radio', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno apunta cada invitado y lo que se dice de él. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles: quién viene y qué se dice de cada invitado. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'La tarde cultural', channel: 'RADIO VALDELIRIO · «LA TARDE CULTURAL», CON ROCÍO MENDOZA', src: '/audio/grammar-live/443.mp3',
            before: 'Es viernes por la tarde. La radio del pueblo presenta el festival. ¿Qué información crees que dará la locutora? (What information do you think the presenter will give?)',
            gist: { prompt: '¿De qué trata el programa?', options: ['De los invitados y las actividades del festival.', 'De la historia de la biblioteca.', 'De un premio que ganó una novelista.'], answer: 0, why: 'Rocío presenta el programa del fin de semana: invitados, lugares y horarios.', en: 'What is the radio piece about?' },
            details: [
              { prompt: '¿Qué habrá en los portales de la plaza de la Fuente?', options: ['Un taller infantil.', 'Veinte librerías.', 'La lectura de Rubén.'], answer: 1, why: '«La plaza de la Fuente, en cuyos portales se instalarán veinte librerías».', en: 'What will there be under the arcades of the square?' },
              { prompt: '¿Qué se dice del primer libro de Rubén Echeverría?', options: ['Que se tradujo al inglés.', 'Que lo ilustró Nuria.', 'Que se agotaron tres ediciones en un año.'], answer: 2, why: '«De cuyo primer libro se agotaron tres ediciones en un año».', en: 'What do we learn about Rubén’s first book?' },
              { prompt: '¿Por qué conocen tantos niños del pueblo a Nuria Palacios?', options: ['Porque trabaja en la radio.', 'Porque aprendieron a leer con sus dibujos.', 'Porque es maestra en la escuela.'], answer: 1, why: '«Con cuyos dibujos aprendieron a leer muchos niños del pueblo».', en: 'Why do so many local children know Nuria?' },
              { prompt: '¿Qué relación tiene la editorial Marea Alta con Valdelirio?', options: ['Su fundador nació en el pueblo.', 'Tiene su sede en la biblioteca.', 'Organiza el festival.'], answer: 0, why: '«Marea Alta, cuyo fundador nació aquí, en Valdelirio».', en: 'What links the publisher to Valdelirio?' },
            ],
            transcript: 'Buenas tardes y bienvenidos a «La tarde cultural» de Radio Valdelirio. Les habla Rocío Mendoza. Este fin de semana llega la décima edición del Festival de las Letras, [[cuyo programa|blue]] ya pueden consultar en la página del municipio. El sábado a las diez abre la feria del libro en la plaza de la Fuente, [[en cuyos portales|orange]] se instalarán veinte librerías. A las doce, Amparo Ledesma, una novelista [[cuyas historias|blue]] se leen en medio mundo, presentará su nuevo libro. Por la tarde llega el poeta Rubén Echeverría, [[de cuyo primer libro|orange]] se agotaron tres ediciones en un año. El domingo es el día de los más pequeños: la ilustradora Nuria Palacios, [[con cuyos dibujos|orange]] aprendieron a leer muchos niños del pueblo, dará un taller en la biblioteca. Y una sorpresa: la editorial Marea Alta, [[cuyo fundador|blue]] nació aquí, en Valdelirio, regalará un libro a cada niño que participe. Les recuerdo que todas las actividades son gratuitas. Si llueve, nos vamos al auditorio municipal. Nos vemos en la plaza.',
            reply: { teacher: 'Tú eres un vecino que no oyó la radio. Tu alumno, como Héctor, te cuenta a quién vas a ver el fin de semana, primero con dos frases y «su», y después con una frase con «cuyo», como en el programa.', self: 'Cuenta en voz alta a un amigo tres cosas del programa: primero como en una conversación («Viene Rubén. Su primer libro…») y después como en el programa («Rubén, cuyo primer libro…»). (Retell it in both registers.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Presentar, definir, recomendar', coach: 'Formal con «cuyo», natural sin él. Formal with «cuyo», natural without it.',
      steps: [
        { title: 'Personas, lugares y obras · People, places and works', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las preguntas de seguimiento. En las tarjetas formales, tu alumno usa «cuyo»; en las informales, una alternativa. Si una forma falla, tú repites la frase bien y siguen.', self: 'Lee la situación y responde en voz alta. Antes de hablar, decide: ¿es una situación formal (cuyo) o informal (su, del que, con, que tiene)? (Decide the register before you speak.)' } },
          { kind: 'talk', cards: [
            { q: 'Vas a presentar en público a un escritor, músico o artista que admiras. Haz la presentación formal. · You are introducing an author, musician or artist you admire to an audience.', followUps: ['¿Qué obra suya recomendarías para empezar? (Which work would you recommend first?)', '¿Cuándo lo descubriste? (When did you discover them?)'], phrases: ['Hoy nos acompaña…, [[cuyas canciones|blue]]…', '…[[de cuya obra|orange]] se ha dicho…', '…[[cuyo último libro|blue]]…'], hint: '«Cuyo» concuerda con lo poseído: «cuyas canciones», «cuyo disco». Pon comas en la explicativa.', example: 'Esta noche nos acompaña Julia Fuentes, una cantante cuyas canciones hemos escuchado todos en la radio y cuyo último disco se grabó en una iglesia de su pueblo. De su obra se ha dicho mucho, pero yo prefiero que la escuchen.', next: 'Ahora, un lugar.' },
            { q: 'Describe para una guía de viajes un pueblo o un barrio que conoces bien. · Describe a town or neighbourhood you know well for a travel guide.', followUps: ['¿Qué no hay que perderse? (What shouldn’t visitors miss?)', '¿Cuál es la mejor época para ir? (When is the best time to go?)'], phrases: ['…es un pueblo [[en cuyas calles|orange]]…', '…[[cuya plaza|blue]]…', '…[[desde cuyo mirador|orange]]…'], hint: 'Busca la preposición en la frase original: «se ve el mar desde el mirador» → «desde cuyo mirador se ve el mar».', example: 'Cuetzalan es un pueblo de la sierra de Puebla en cuyas calles empinadas se mezclan el náhuatl y el español. Tiene una plaza cuya iglesia se ve desde muy lejos, y un mercado de domingo cuyos colores no se olvidan.', next: 'Ahora, con un amigo.' },
            { q: 'Ahora recomiéndale a un amigo un libro, una serie o una película, de manera informal. · Now recommend a book, series or film to a friend, casually.', followUps: ['¿Por qué crees que le va a gustar? (Why will they like it?)', '¿Se la contarías? (Would you tell them the plot?)'], phrases: ['Es una serie [[de la que|teal]] me encantó el final…', 'Es una peli [[con|teal]] una protagonista increíble…', '[[Su director|teal]] también hizo…'], hint: 'Sin «cuyo»: dos frases con «su», «del que / de la que», «con» o «que tiene». Nunca «que su».', example: 'Tienes que ver «La casa de las tías». Es una serie de la que me encantó todo, sobre todo el final. Tiene una protagonista que te rompe el corazón, y su directora también hizo aquella película del faro que vimos juntos.', next: 'Ahora, adivinanzas.' },
            { q: 'Juego de definiciones: define un país, una ciudad o un objeto con «cuyo» y tu compañero lo adivina. · Definitions game: define a country, city or object with «cuyo».', followUps: ['¿Puedes dar una pista más? (Another clue?)', '¿Y ahora otro, más difícil? (Now a harder one?)'], phrases: ['Es un país [[cuya capital|blue]]…', 'Es un objeto [[cuyas teclas|blue]]…', 'Es una ciudad [[por cuyo centro|orange]] pasa…'], hint: 'Piensa en una parte o en algo que le pertenece: capital, bandera, río, teclas, pantalla.', example: 'Es un país cuyo nombre es también el de una línea imaginaria del planeta y cuya capital está a unos dos mil ochocientos metros de altura. ¿Lo sabes?', next: 'Ahora, tu entorno.' },
            { q: 'Habla de una persona de tu entorno con algo especial: un vecino, una compañera, un pariente. Primero informal, después como en una carta formal. · Someone around you with something special about them.', followUps: ['¿Cómo lo conociste? (How did you meet?)', '¿Qué cambia entre las dos versiones? (What changes between the two versions?)'], phrases: ['Tengo un vecino [[que tiene|teal]]…', '[[Su hija|teal]]…', 'Mi vecino, [[cuya hija|blue]]…'], hint: 'Informal: «que tiene», «su». Formal: «cuyo». Comprueba que no dices «que su».', example: 'Tengo una vecina que tiene una colección de cuatrocientas plantas; su balcón parece una selva. En una carta formal diría: «Mi vecina, cuyo balcón alberga una colección de cuatrocientas plantas, propone crear un huerto comunitario».', next: 'Para terminar, el trabajo.' },
            { q: 'Presenta en una reunión de trabajo una empresa, una ONG o un proyecto con el que colaboras. · Present an organisation or project you work with at a meeting.', followUps: ['¿Qué papel tienes tú? (What is your role?)', '¿Qué resultados han tenido? (What results have they had?)'], phrases: ['…[[para cuyo proyecto|orange]] trabajo…', '…[[cuya sede|blue]] está en…', '…[[con cuyo equipo|orange]]…'], hint: 'Registro formal: «cuyo» con su preposición cuando el verbo la pide (trabajar para, colaborar con).', example: 'Les presento Agua Viva, una asociación cuya sede está en Mérida y para cuyo proyecto de bibliotecas rurales trabajo desde 2022. Con su equipo hemos abierto once bibliotecas, en cuyas salas leen cada semana más de trescientos niños.', teacher: 'Cuando tu alumno lo dice bien, tú le pides la misma información en versión de mensaje a un amigo: dos frases, «su», «con», «que tiene».' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno te pide que presentes a tu escritor favorito en tono formal y después en tono informal; tu alumno revisa si «cuyo» concuerda con lo poseído y si evitas «que su».', self: 'Ahora presenta en voz alta a tu escritor o artista favorito dos veces: en un acto público (con «cuyo») y en un mensaje de voz a un amigo (sin «cuyo»). (Do it in both registers.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Las fichas del programa', coach: 'Un texto impreso pide registro cuidado. Print calls for a careful register.',
      steps: [
        { title: 'Fichas de los invitados · Guest profiles', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «cuyo»: ¿con qué nombre concuerda? ¿Hace falta preposición? Después tu alumno lee el texto en voz alta, como en un acto público.', self: 'Escribe tu texto y toca «Revisar mi texto». En cada «cuyo», pregúntate: ¿con qué nombre concuerda? ¿Falta una preposición? (Write and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Fichas para el programa · Profiles for the programme', situation: 'Lorena te pide las fichas de dos invitados para el programa impreso del festival: el público las leerá antes de cada acto. Escribe sobre Amparo y Rubén, o sobre dos personas reales o inventadas (escritores, músicos, artistas) que invitarías a un festival de tu ciudad. (Write two short guest profiles for a printed festival programme: Amparo and Rubén, or two people you would invite.)', task: [
            'Presenta a cada invitado con al menos un «cuyo / cuya / cuyos / cuyas» bien concordado. (At least one «cuyo» per guest.)',
            'Usa una vez preposición + cuyo («en cuya…», «de cuyo…», «con cuyos…»). (Preposition + cuyo once.)',
            'Incluye una oración explicativa entre comas. (One explanatory clause between commas.)',
            'Di dónde y cuándo será cada acto. (Where and when each event will be.)',
            'Mantén un registro cuidado: sin «que su». (Keep a careful register.)',
          ], starters: ['… (ciudad, año) es una novelista cuyas…', 'Creció en…, en cuya…', 'Su último libro, cuyo protagonista…', '… presentará… en…', 'El domingo…'],
            words: ['cuyo', 'cuya', 'cuyos', 'cuyas', 'en cuya', 'de cuyo', 'con cuyos', 'para cuyo', 'presentará', 'firmará', 'leerá', 'obra', 'trayectoria'],
            model: 'Amparo Ledesma (Puebla, 1971) es una novelista cuyas historias se leen hoy en once idiomas. Creció entre libros: su padre era un impresor en cuya imprenta pasó toda su infancia. Su última novela, cuyo protagonista es un cartero que lee las cartas que reparte, fue una de las más vendidas del año pasado. La presentará el sábado a las doce en la plaza de la Fuente, en cuyos portales la esperarán sus lectores. Rubén Echeverría (Oaxaca, 1990) es un poeta joven de cuyo primer libro se agotaron tres ediciones en un solo año. Trabaja con la editorial Marea Alta, para cuyo catálogo prepara ahora una antología de poesía mexicana. El sábado a las seis leerá sus poemas en la biblioteca, y después conversará con el público sobre el oficio de escribir.',
            minWords: 110,
            checks: [
              { label: 'Al menos un «cuyo / cuya / cuyos / cuyas»', pattern: '(?<!\\p{L})cuy[oa]s?(?!\\p{L})', tip: 'Escribe, por ejemplo: «una novelista cuyas historias se leen en once idiomas».' },
              { label: 'Preposición + cuyo (en cuya, de cuyo, con cuyos…)', pattern: '(?<!\\p{L})(?:a|ante|bajo|con|de|desde|en|entre|hacia|hasta|para|por|sin|sobre|tras)\\s+cuy[oa]s?(?!\\p{L})', tip: 'Escribe, por ejemplo: «la plaza de la Fuente, en cuyos portales…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})que\\s+sus?(?!\\p{L})', why: 'Si «que su» significa «cuyo», en un texto cuidado escribe «cuyo / cuya…». (Si «su» pertenece a otro verbo, como en «dice que su padre…», no hay problema.)' },
              { pattern: '(?<!\\p{L})cuy[oa]s?\\s+(?:el|la|los|las|su|sus)(?!\\p{L})', why: 'Detrás de «cuyo» no va artículo ni posesivo: «cuyas novelas», no «cuyas las novelas» ni «cuyas sus novelas».' },
              { pattern: '¿\\s*cuy[oa]s?(?!\\p{L})', why: '«Cuyo» no sirve para preguntar: «¿De quién es…?».' },
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
            { tone: 'blue', label: 'CONCORDANCIA', formula: 'poseedor + cuyo / cuya / cuyos / cuyas + lo poseído', example: 'Conocí a una autora cuyos libros adoro.', caption: 'concuerda con lo que va detrás', en: '«Cuyo» agrees with the possessed noun that follows it, never with the possessor; no article after it' },
            { tone: 'orange', label: 'CON PREPOSICIÓN', formula: 'en cuya plaza · para cuyo catálogo · de cuyo libro', example: 'Es el pueblo en cuya plaza se celebra la feria.', caption: 'la preposición va delante', en: 'The preposition the verb needs goes in front of the «cuyo» group' },
            { tone: 'teal', label: 'AL HABLAR', formula: 'dos frases con su · del que / de la que · con · que tiene', example: 'Viene Rubén. Su primer libro se agotó en un mes.', caption: 'nunca «que su»', en: 'In conversation people rephrase; «que su» is common but non-standard' },
            { tone: 'violet', label: 'FORMAL Y PREGUNTAS', formula: 'del cual / de la cual (formal) · ¿de quién es? (pregunta)', example: 'Un manuscrito del cual se conservan dos copias. ¿De quién es esto?', caption: '«cuyo» no pregunta', en: '«Del cual» is a formal variant of «del que»; to ask who owns something, use «de quién»' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de escribir «cuyo», mira **el nombre que va detrás** (eso decide cuyo / cuya / cuyos / cuyas), busca **la preposición** de la frase original y piensa en **el registro**: en un texto cuidado, «cuyo»; en una charla, una frase más sencilla.', en: 'Before you write «cuyo», look at the noun that follows (it decides the form), find the preposition in the original sentence, and think about register: «cuyo» in careful texts, something simpler in conversation.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Es un restaurante ___ cocinera ganó un premio nacional.', options: ['cuyo', 'cuya', 'cuyos'], answer: 1, why: 'Concuerda con «cocinera»: cuya.', en: 'It is a restaurant whose chef won a national award.' },
            { prompt: 'Conocí a un pintor ___ obras se exponen en tres museos.', options: ['cuyas', 'cuyos', 'que sus'], answer: 0, why: '«Obras»: femenino plural. «Que sus» no es normativo.', en: 'I met a painter whose works are shown in three museums.' },
            { prompt: 'Es la profesora ___ consejos aprobé el examen.', options: ['cuyos', 'gracias a cuyos', 'gracias a cuyas'], answer: 1, why: '«Aprobé gracias a sus consejos» → «gracias a cuyos consejos».', en: 'She is the teacher thanks to whose advice I passed the exam.' },
            { prompt: '—¿___ son estas llaves? —Creo que de Marta.', options: ['¿De quién', '¿Cuyos', '¿Cuyas'], answer: 0, why: 'Pregunta por el dueño: «de quién».', en: 'Whose keys are these? — I think they’re Marta’s.' },
            { prompt: 'Informe: «La comisión revisó el contrato, ___ cláusulas se modificarán dos».', options: ['del cual', 'de cuyas', 'que sus'], answer: 1, why: '«Se modificarán dos de sus cláusulas» → «de cuyas cláusulas se modificarán dos».', en: 'Report: the committee reviewed the contract, two of whose clauses will be amended.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Museo regional de Zacatecas. **Gabriela Sosa**, conservadora, redacta las cartelas de una sala nueva. Tiene las ideas en frases sueltas y necesita unirlas en un texto cuidado.', en: 'A regional museum in Zacatecas. Gabriela Sosa, a curator, is writing the labels for a new room. She has her ideas in separate sentences and needs to join them in careful written Spanish.' },
          { kind: 'rewrite', title: 'Las cartelas del museo · The museum labels', items: [
            { prompt: 'Esta es una mesa de 1890. Sus patas imitan raíces de árbol.', instruction: 'Una frase: «Esta es una mesa de 1890 cuyas…». (One sentence.)', accept: ['Esta es una mesa de 1890 cuyas patas imitan raíces de árbol.'] },
            { prompt: 'El retrato es de Elena Ríos. Su hija donó el cuadro al museo.', instruction: 'Una frase: «El retrato es de Elena Ríos, cuya…». (Explanatory clause.)', accept: ['El retrato es de Elena Ríos, cuya hija donó el cuadro al museo.'] },
            { prompt: 'La sala está dedicada a un platero. En su taller se hicieron estas piezas.', instruction: 'Una frase con preposición + cuyo: «… a un platero en…». (Keep «en».)', accept: ['La sala está dedicada a un platero en cuyo taller se hicieron estas piezas.'] },
          ] },
        ] },
        { title: 'Ampliación: fórmulas y casos del registro formal · Extension: formal formulas and cases', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: contratos, avisos y textos académicos. Optional: contracts, notices, academic texts.', blocks: [
          { kind: 'lead', text: 'Tres usos más del registro escrito. **En cuyo caso** es una fórmula fija que significa «y en ese caso»: «Puede llover, [[en cuyo caso|violet]] el acto será en el auditorio». Si «cuyo» va delante de **dos nombres coordinados**, concuerda con el primero: «la persona **cuyo nombre y apellidos** figuran en el contrato». Y fuera de fórmulas fijas como esa, **«cuyo» siempre expresa posesión o pertenencia**: no se dice «Llamé a la editorial, cuya editorial no contestó», sino «Llamé a la editorial, **la cual** (o **que**) no contestó».', en: 'Three more uses in written Spanish. «En cuyo caso» is a fixed formula meaning «in which case». Before two coordinated nouns, «cuyo» agrees with the first one. And outside fixed formulas like that one, «cuyo» always expresses possession or belonging; when there is no possession, use another relative (el cual, que).' },
          { kind: 'choice', title: 'Registro formal · Formal register', items: [
            { prompt: 'Aviso: «La entrada es libre hasta completar el aforo, ___ se cerrarán las puertas».', options: ['en cuya caso', 'cuyo caso', 'en cuyo caso'], answer: 2, why: 'Fórmula fija: «en cuyo caso» (= y en ese caso). «Cuyo» concuerda con «caso».', en: 'Notice: entry is free until the venue is full, in which case the doors will close.' },
            { prompt: 'Contrato: «El autor, ___ derechos y obligaciones se recogen en el anexo, firma este documento».', options: ['cuyos', 'que sus', 'cuyas'], answer: 0, why: 'Con dos nombres coordinados, «cuyo» concuerda con el primero: «cuyos derechos y obligaciones».', en: 'Contract: the author, whose rights and obligations are set out in the annex, signs this document.' },
            { prompt: '¿Qué frase es correcta?', options: ['Enviamos el programa a la prensa, cuya lo publicó el lunes.', 'Enviamos el programa a la prensa, cuyo programa se publicó el lunes.', 'Enviamos el programa a la prensa, que lo publicó el lunes.'], answer: 2, why: 'No hay posesión: la prensa publicó el programa. «Cuyo programa» repite el nombre y no expresa pertenencia.', en: 'Which sentence is correct?' },
            { prompt: 'Texto académico: «Se analizan tres novelas, ___ autoras nacieron en la misma década».', options: ['cuyas', 'de las cuales', 'cuyos'], answer: 0, why: '«Sus autoras nacieron…» → «cuyas autoras». «De las cuales» exigiría otro orden: «las autoras de las cuales».', en: 'Academic text: three novels are analysed, whose authors were born in the same decade.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno redacta un aviso del festival con «en cuyo caso» y una frase de contrato con «cuyo» delante de dos nombres coordinados.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 144 · Referentes abstractos: lo cual, lo que, aquello que', text: 'Ya sabes unir un nombre con lo que le pertenece con «cuyo», y conoces «del cual» como variante formal. El paso natural: relativos que no se refieren a un nombre, sino a una idea entera: «Llegó tarde, **lo cual** molestó al equipo».', en: 'You can now link a noun to what belongs to it with «cuyo», and you know «del cual» as a formal variant. The natural next step is relatives that refer not to a noun but to a whole idea: «lo cual», «lo que», «aquello que».', href: '/gramatica/referentes-abstractos-lo-cual-lo-que', label: 'Ir a la clase 144' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué se dice “una autora cuyos libros” y no “cuya libros”? ¿Cómo lo dirías en una charla con amigos?». Respuesta esperada: concuerda con lo poseído; al hablar, dos frases con «su» o «de la que + verbo + los libros». Tarea: escribir tres definiciones de personas o lugares de tu ciudad con «cuyo».' },
        ] },
      ],
    },
  ],
};
