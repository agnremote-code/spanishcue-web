import type { LiveLesson } from '../types';

/**
 * Lesson 497 · C1 · Puntuación de incisos, aclaraciones y conectores (course unit G197).
 * Orthography, not grammar inventory: everything follows the RAE-ASALE Ortografía (2010).
 * Builds on G189 (g489, reformulation connectors) and G190 (g490, contrastive and
 * restrictive connectors): the connectors are known; here they are punctuated.
 * Content: incisos between commas (explanatory apposition vs specifying apposition: «mi
 * hermana, Paula,» / «mi hermana Paula»; comments; preview of explanatory «que», deepened
 * in G203); vocatives always isolated («Gracias, Ana.»; «Hola, Ana:» in letters); discourse
 * connectors at the start / mid-position / between two clauses (; sin embargo,) vs «pero»
 * (comma before, none after unless an inciso follows); «es decir», «o sea», «esto es», «por
 * ejemplo» between commas; comma before «etc.», no «…» after it; rayas and paréntesis for
 * stronger incisos, their spacing, the closing raya kept at the end; no comma between
 * subject and verb, even after a long subject; English contrast: no Oxford comma in simple
 * series, colon after a letter greeting, opening ¿ ¡ where the question starts. Meaning
 * changes with commas (Vamos a comer, niños). Advanced points (punto y coma, dos puntos)
 * stay for G231. Ampliación: punctuation after a closing raya, no comma after aunque /
 * porque, comma before «y» that opens a new clause after a series, rayas vs paréntesis.
 * Scene: Fundación Casa del Puente, Valdeolmos. Daniel Vidal coordinates the reading-club
 * programme «Lectores de barrio» and writes the annual report for the board (president Inés
 * Garrido); Clara Montoya, copy-editor, revises it. Escuchar: Clara's voice message to
 * Daniel (es-CO-SalomeNeural, one voice). Escribir: Daniel's email to Inés. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 497,
  level: 'C1',
  title: 'Puntuación de incisos, aclaraciones y conectores',
  subtitle: 'Puntuar con seguridad aposiciones, vocativos, conectores e incisos con rayas o paréntesis en un texto formal, sin comas que sobren.',
  legend: [
    { tone: 'blue', label: 'INCISOS ENTRE COMAS · aposiciones, aclaraciones, vocativos' },
    { tone: 'teal', label: 'CONECTORES · sin embargo, no obstante, por ejemplo, es decir, o sea, esto es' },
    { tone: 'orange', label: 'RAYAS Y PARÉNTESIS · incisos más marcados, datos, siglas' },
    { tone: 'violet', label: 'SIN COMA (O SOLO UNA) · sujeto + verbo, «y» en series, «pero», «etc.»' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Abrir y cerrar incisos', coach: 'Lo que se abre se cierra. What opens must close.',
      steps: [
        { title: 'La memoria anual · The annual report', blocks: [
          { kind: 'lead', text: 'La Fundación Casa del Puente organiza clubes de lectura en las bibliotecas de barrio de Valdeolmos. Daniel Vidal, coordinador del programa «Lectores de barrio», tiene que entregar el viernes la memoria anual al patronato. Clara Montoya, correctora de estilo, le devuelve el borrador con una nota: «Tus ideas son claras; tus comas, no tanto». Ya conoces los conectores (clases 189 y 190); hoy aprendes a **puntuarlos**, y con ellos los **incisos**: aposiciones, aclaraciones, vocativos, rayas y paréntesis. Seguimos la norma de la Ortografía de la RAE y la ASALE (2010).', en: 'A cultural foundation runs reading clubs in neighbourhood libraries. Daniel, the programme coordinator, must hand in the annual report to the board on Friday, and Clara, a copy-editor, says his ideas are clear but his commas aren’t. You already know the connectors from classes 189 and 190; today you learn to punctuate them, along with asides: appositions, clarifications, forms of address, dashes and brackets, following the official RAE-ASALE spelling rules.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres versiones en voz alta, con sus pausas. Tu alumno dice cuál se entiende mejor y qué hace cada signo.', self: 'Lee las tres versiones en voz alta. ¿Cuál se entiende a la primera? ¿Qué hacen las comas y las rayas? (Read them aloud: what do the commas and dashes do?)' } },
          { kind: 'compare', title: 'La misma frase, tres puntuaciones · One sentence, three punctuations', columns: [
            { tone: 'neutral', label: 'SIN PUNTUAR · INCORRECTA', sentence: 'El cambio sin embargo no funcionó.', idea: 'El conector queda pegado a la oración: el lector no ve dónde empieza ni dónde termina.', en: 'The connector is glued to the sentence: the reader can’t see where it begins or ends.' },
            { tone: 'teal', label: 'CONECTOR ENTRE COMAS', sentence: 'El cambio[[, sin embargo,|teal]] no funcionó.', idea: 'Las dos comas aíslan el conector: es la puntuación normal de un texto cuidado.', en: 'Two commas set the connector apart: the standard punctuation in careful writing.' },
            { tone: 'orange', label: 'INCISO CON RAYAS', sentence: 'El cambio [[—en contra de lo previsto—|orange]] no funcionó.', idea: 'Las rayas separan más que las comas y destacan el comentario del autor.', en: 'Dashes separate more than commas and highlight the writer’s comment.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Rosa Peña la directora del centro nos cedió la sala». ¿Dónde haces las pausas al leerla bien?', options: ['Antes y después de «la directora del centro».', 'Solo después de «centro».', 'Solo después de «Peña».'], answer: 0, why: '«La directora del centro» es un inciso: se abre y se cierra. Las dos pausas son las dos comas que faltan.', en: 'The phrase “la directora del centro” is an aside: it needs a pause, and a comma, on both sides.' },
            { prompt: 'Daniel termina un mensaje con «Gracias Clara». ¿Qué falta?', options: ['Nada: es correcto así.', 'Una coma: «Gracias, Clara».', 'Dos puntos: «Gracias: Clara».'], answer: 1, why: '«Clara» es un vocativo, la persona a la que habla Daniel: siempre va separado por coma.', en: 'Clara is the person being addressed, so her name is set off with a comma.' },
          ] },
        ] },
        { title: 'Incisos con comas: aposiciones y vocativos · Commas around asides', mascot: '/brand/mascot/studying.webp', coach: 'Si lo puedes quitar, va entre comas. If you can remove it, it goes between commas.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'INCISOS ENTRE COMAS', question: '¿Puedes quitar el fragmento sin que la oración pierda su sentido básico?', en: 'An aside adds information and interrupts the sentence, so it goes between two commas, or one if it opens or closes the sentence. Forgetting the second comma is the most common slip. An explanatory apposition takes commas; a specifying one, which tells you which person or thing you mean, does not. A vocative, the name of the person you are talking to, is always set off with commas, however short. In a letter, the greeting ends with a colon, not a comma.', formula: ['nombre, aposición explicativa, + resto de la oración', 'sujeto, comentario o aclaración, + verbo', 'vocativo: Ana, … · …, Ana. · …, Ana, …', 'saludo de carta o correo: Hola, Ana: · Estimada Inés:'],
            meaning: 'Un **inciso** es información añadida que interrumpe la oración: se escribe **entre dos comas**, o con una sola si abre o cierra la oración. La segunda coma no se olvida: es el error más frecuente. La **aposición explicativa** («Valdeolmos, la capital de la comarca») va entre comas; la **especificativa**, que dice de qué persona o cosa hablas («el poeta Antonio Machado»), no. El **vocativo** —el nombre de la persona a la que te diriges— se aísla siempre con comas, aunque sea muy breve. En cartas y correos, el saludo termina con **dos puntos**.',
            examples: [
              { es: 'Valdeolmos[[, la capital de la comarca,|blue]] tiene cinco bibliotecas de barrio.', en: 'Explanatory apposition: it adds information about the town and can be removed.' },
              { es: 'Los clubes de lectura[[, según los datos de mayo,|blue]] han duplicado sus socios.', en: 'An aside between subject and verb: two commas are fine, because they open and close the aside.' },
              { es: 'Buenos días[[, Inés|blue]]. Te adjunto el borrador de la memoria.', en: 'Inés is the person addressed: a vocative, always set off with a comma.' },
              { es: 'Clara Montoya[[, que corrige nuestros textos desde 2022,|blue]] ya ha leído la memoria.', en: 'An explanatory relative clause works like an aside; class 203 goes into this in depth.' },
            ], note: 'Las comas pueden cambiar el sentido: «Mi hermana**,** Paula**,** vive en Lima» indica que tienes **una sola** hermana; «Mi hermana Paula vive en Lima», que tienes **más de una** y hablas de Paula.' },
          { kind: 'tip', icon: '💡', title: 'Avance de la clase 203 · Preview', text: '«Los socios**,** que pagaron la cuota**,** votaron»: todos pagaron y todos votaron. «Los socios que pagaron la cuota votaron»: solo votaron los que pagaron. Con comas, la oración con **que** añade información sobre todos; sin comas, selecciona a una parte.', en: 'With commas, the que-clause adds information about all the members; without commas, it picks out only some of them. Class 203 develops this contrast.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Correo de Daniel a la presidenta del patronato.', prompt: '¿Qué versión es correcta?', options: ['Gracias Inés por tu paciencia.', 'Gracias, Inés, por tu paciencia.', 'Gracias, Inés por tu paciencia.'], answer: 1, why: 'El vocativo va en medio de la oración: una coma antes y otra después.', en: 'A vocative in the middle needs a comma on each side.' },
            { prompt: '¿Qué versión es correcta?', options: ['La Biblioteca del Molino, el centro más antiguo de la ciudad, abrió un club nuevo.', 'La Biblioteca del Molino, el centro más antiguo de la ciudad abrió un club nuevo.', 'La Biblioteca del Molino el centro más antiguo de la ciudad, abrió un club nuevo.'], answer: 0, why: 'La aposición explicativa se abre y se cierra. Con una sola coma, queda una coma entre sujeto y verbo o un inciso sin abrir.', en: 'The apposition must be opened and closed; a single comma leaves it half-done.' },
            { prompt: '«Mi hermana, Paula, coordina un club en Sevilla». ¿Qué entiendes?', options: ['Que tiene una sola hermana.', 'Que tiene varias hermanas.', 'Que Paula no es su hermana.'], answer: 0, why: 'Entre comas, «Paula» es una aposición explicativa: solo añade el nombre de la única hermana.', en: 'With commas, the name merely adds information: there is only one sister.' },
          ] },
        ] },
        { title: 'Conectores: siempre aislados · Punctuating connectors', mascot: '/brand/mascot/speaking.webp', coach: '¿Al principio, en medio o entre oraciones? Start, middle or between clauses?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CONECTORES Y «PERO»', question: '¿La expresión relaciona la oración con lo anterior (sin embargo, por tanto, es decir…), sin formar parte de ella?', en: 'Discourse connectors are always set off by commas: a comma after them at the start, a comma on each side in mid-position. When they link two complete clauses, a semicolon or a full stop goes before them, not a comma. Pero is a conjunction, not a connector: it takes a comma before it but none after it, unless an aside starts right there. Etc. takes a comma before it, and its own full stop closes the sentence.', formula: ['Sin embargo, + oración (al principio: coma detrás)', 'sujeto, sin embargo, + verbo (en medio: entre comas)', 'oración; sin embargo, + oración (entre dos oraciones: punto y coma o punto delante)', 'oración, pero + oración (coma delante, ninguna detrás)', '…, es decir, … · …, o sea, … · …, esto es, … · …, por ejemplo, …'],
            meaning: 'Los **conectores** (sin embargo, no obstante, por tanto, además, es decir, o sea, esto es, por ejemplo) van **siempre aislados por comas**: coma detrás si abren la oración; entre comas si van en medio. Si unen **dos oraciones completas**, delante va **punto y coma** o punto, no coma. **Pero** es una conjunción: lleva coma **delante**, pero no detrás, salvo que justo después empiece un inciso. **Etc.** lleva coma delante, y su punto sirve también de punto final.',
            examples: [
              { es: 'El cambio de horario[[, sin embargo,|teal]] no funcionó.', en: 'Mid-position, after the subject: a comma on each side.' },
              { es: 'Probamos los sábados por la tarde; [[sin embargo,|teal]] la asistencia bajó.', en: 'Two complete clauses: a semicolon before the connector, a comma after it.' },
              { es: 'Subimos la cuota[[, pero|violet]] nadie se dio de baja.', en: 'Pero: a comma before it, none after it.' },
              { es: 'La sesión dura noventa minutos[[, es decir,|teal]] una hora y media.', en: 'A reformulation inside the sentence: es decir goes between commas.' },
              { es: 'Leemos novelas, ensayos, cómics[[, etc.|violet]]', en: 'A comma before etc.; its full stop also ends the sentence, with no extra dots.' },
            ] },
          { kind: 'table', title: 'Dónde va el conector · Where the connector goes', head: ['Posición', 'Ejemplo', 'Puntuación'], rows: [
            ['al principio', '[[Sin embargo,|teal]] el cambio no funcionó.', 'coma detrás'],
            ['en medio', 'El cambio[[, sin embargo,|teal]] no funcionó.', 'entre comas'],
            ['al final (menos frecuente)', 'El cambio no funcionó[[, sin embargo|teal]].', 'coma delante'],
            ['entre dos oraciones', 'Lo intentamos; [[sin embargo,|teal]] no funcionó.', 'punto y coma o punto delante, coma detrás'],
            ['con «pero»', 'Lo intentamos[[, pero|violet]] no funcionó.', 'coma delante, ninguna detrás'],
          ], note: 'En «Pero, como sabes, no funcionó», la coma que sigue a «pero» es la que **abre el inciso** «como sabes», no la de «pero». El punto y coma con más detalle llega en la clase 231.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión es correcta?', options: ['El presupuesto, no obstante, se mantuvo.', 'El presupuesto no obstante, se mantuvo.', 'El presupuesto, no obstante se mantuvo.'], answer: 0, why: 'Conector en medio, tras el sujeto: entre dos comas, ni una más ni una menos.', en: 'A mid-position connector takes a comma on each side.' },
            { prompt: 'Dos oraciones completas unidas por «sin embargo»:', options: ['Abrimos dos clubes nuevos; sin embargo cerramos uno.', 'Abrimos dos clubes nuevos, sin embargo, cerramos uno.', 'Abrimos dos clubes nuevos; sin embargo, cerramos uno.'], answer: 2, why: 'Entre dos oraciones, delante del conector va punto y coma (o punto), y detrás, coma.', en: 'Between two clauses: a semicolon before sin embargo and a comma after it.' },
            { prompt: '¿Qué versión es correcta?', options: ['Faltaron voluntarios, pero, los clubes siguieron.', 'Faltaron voluntarios pero, los clubes siguieron.', 'Faltaron voluntarios, pero los clubes siguieron.'], answer: 2, why: '«Pero» lleva coma delante y ninguna detrás, porque no sigue ningún inciso.', en: 'Pero takes a comma before it, not after it.' },
          ] },
        ] },
        { title: 'Rayas y paréntesis · Dashes and brackets', mascot: '/autoestudio/mascot/noting.webp', coach: 'Más separación, otro signo. More distance, another mark.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'INCISOS MÁS MARCADOS', question: '¿El inciso se aleja más de la oración: un comentario que quieres destacar, un dato, una sigla?', en: 'Commas, dashes and brackets all enclose asides; what changes is how far the aside is set apart. Commas integrate it; dashes set it further apart and draw attention to it, and they are handy when the aside already contains commas; brackets hold marginal information such as dates, acronyms, figures or translations. The Spanish dash (raya) is longer than the hyphen. Opening dashes and brackets touch the next word, closing ones touch the previous word, with a space outside. The closing dash stays even when the aside ends the sentence.', formula: ['comas: inciso muy ligado a la oración · , … ,', 'rayas: inciso más separado, destacado o con comas dentro · —…—', 'paréntesis: dato marginal, fecha, sigla, cifra · (…)', 'espacios: palabra —inciso— palabra · palabra (dato) palabra'],
            meaning: 'Comas, rayas y paréntesis encierran incisos; cambia el **grado de separación**. Las **comas** lo integran; las **rayas** lo separan más y lo destacan, y son muy útiles si el inciso ya lleva comas; los **paréntesis** aíslan información marginal: fechas, siglas, cifras. La **raya** (—) es más larga que el **guion** (-). La raya y el paréntesis de apertura van **pegados a la palabra siguiente**; los de cierre, **pegados a la anterior**; por fuera, un espacio. La raya de cierre **no se omite** aunque el inciso termine la oración.',
            examples: [
              { es: 'La Fundación Casa del Puente [[(FCP)|orange]] gestiona veinte clubes.', en: 'Brackets for an acronym: marginal information the reader will need later.' },
              { es: 'Los nuevos socios [[—jubilados, estudiantes, familias—|orange]] llegaron en primavera.', en: 'The aside already contains commas, so dashes keep the sentence readable.' },
              { es: 'El informe llegó en junio [[—con un mes de retraso—|orange]].', en: 'The closing dash stays even at the end of the sentence, before the full stop.' },
              { es: 'El programa, que nació en 2015 [[(con solo tres clubes)|orange]], llega hoy a cinco barrios.', en: 'The comma that closes the main aside goes after the closing bracket.' },
            ] },
          { kind: 'decide', title: '¿Comas, rayas o paréntesis? · Which mark?', steps: [
            { q: '¿El inciso es breve y está muy ligado a lo que dices (una aposición, un comentario corto)?', yes: 'Comas: «Valdeolmos, la capital de la comarca, …».', no: 'Pasa a la siguiente pregunta.' },
            { q: '¿Lleva comas dentro o quieres destacarlo como comentario aparte?', yes: 'Rayas: «Los socios —jubilados, estudiantes, familias— …».', no: 'Pasa a la siguiente pregunta.' },
            { q: '¿Es un dato marginal: una fecha, una sigla, una cifra?', yes: 'Paréntesis: «la Fundación Casa del Puente (FCP)».', no: 'Quizá no es un inciso: intégralo en la oración, sin signos.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión tiene bien los espacios?', options: ['Los voluntarios —casi todos jubilados — dirigen los clubes.', 'Los voluntarios —casi todos jubilados— dirigen los clubes.', 'Los voluntarios — casi todos jubilados — dirigen los clubes.'], answer: 1, why: 'Las rayas van pegadas al inciso por dentro y separadas por fuera.', en: 'Dashes touch the aside on the inside and have a space on the outside.' },
            { prompt: 'Quieres añadir la sigla de la Biblioteca Pública Municipal:', options: ['la Biblioteca Pública Municipal: BPM', 'la Biblioteca Pública Municipal (BPM)', 'la Biblioteca Pública Municipal —BPM'], answer: 1, why: 'Una sigla es un dato marginal: paréntesis. Una raya sola, sin cierre, es incorrecta.', en: 'An acronym is marginal information, so it goes in brackets.' },
            { prompt: 'El inciso cierra la oración:', options: ['La memoria se entregó en junio —con un mes de retraso.', 'La memoria se entregó en junio, —con un mes de retraso—.', 'La memoria se entregó en junio —con un mes de retraso—.'], answer: 2, why: 'La raya de cierre no se omite al final; el punto va detrás. Y no hace falta coma antes de la raya.', en: 'Keep the closing dash at the end, with the full stop after it.' },
          ] },
        ] },
        { title: 'Donde no va coma · Where no comma goes', mascot: '/brand/mascot/seated.webp', coach: 'Una pausa al leer no siempre es una coma. A pause is not always a comma.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'SIN COMA', question: '¿Vas a poner una coma solo porque al leer haces una pausa?', en: 'Subject and verb are never separated by a single comma, however long the subject is: the pause you make when reading aloud is not written. Only an aside between them brings in two commas. In a simple series there is no comma before y: the Oxford comma is an English habit. And the opening ¿ ¡ go exactly where the question or exclamation begins, even mid-sentence.', formula: ['sujeto (aunque sea largo) + verbo: sin coma', 'sujeto, inciso, verbo: dos comas, nunca una', 'A, B y C: sin coma antes de «y» en una serie simple', 'parte inicial, ¿pregunta? · Ana, ¡qué alegría!'],
            meaning: 'El sujeto y el verbo **no se separan con una coma**, aunque el sujeto sea largo: la pausa que haces al leer no se escribe. Solo si entre ellos hay un inciso aparecen **dos** comas. En una serie simple **no hay coma antes de «y»** (la coma de Oxford es un hábito del inglés). Y los signos **¿ ¡** se abren justo donde empieza la pregunta o la exclamación, aunque sea en mitad de la oración.',
            examples: [
              { es: '[[Los socios que llegaron tarde a la sesión del jueves|violet]] no pudieron entrar.', en: 'A long subject, but no comma before the verb.' },
              { es: 'Este año hemos leído novelas, [[ensayos y poesía|violet]].', en: 'A simple series: no comma before y.' },
              { es: 'Si el club cierra en agosto, [[¿dónde se reúnen los socios?|violet]]', en: 'The question mark opens where the question begins, not at the start of the sentence.' },
              { es: '[[Daniel,|blue]] ¿has enviado ya la memoria?', en: 'The vocative stays outside the question, followed by a comma.' },
            ] },
          { kind: 'tip', icon: '🌎', title: 'Inglés y español · English and Spanish', text: '**Series**: en inglés es frecuente «novels, essays, and poetry»; en español, «novelas, ensayos y poesía». **Saludo**: «Dear Ana,» → «Querida Ana:» o «Hola, Ana:», y se sigue con mayúscula en la línea siguiente. **Preguntas y exclamaciones**: el español las abre también. La coma ante «y» sí aparece cuando la «y» no cierra la serie, sino que abre otra oración: «Leímos novelas, ensayos y poesía, y al final organizamos un recital».', en: 'Spanish has no Oxford comma in simple series, ends letter greetings with a colon rather than a comma, and opens questions and exclamations too. A comma before y is fine when y starts a new clause after the series rather than closing it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión es correcta?', options: ['Los voluntarios que coordinan los clubes de los barrios del norte piden más formación.', 'Los voluntarios que coordinan los clubes de los barrios del norte, piden más formación.', 'Los voluntarios, que coordinan los clubes de los barrios del norte piden más formación.'], answer: 0, why: 'Sujeto largo («los voluntarios… del norte») y verbo («piden»): sin coma entre ellos. La segunda abre un inciso que no cierra.', en: 'However long the subject, no comma before the verb.' },
            { prompt: '¿Qué versión es correcta?', options: ['Compramos sillas, lámparas, y estanterías.', 'Compramos sillas, lámparas y estanterías.', 'Compramos sillas lámparas y estanterías.'], answer: 1, why: 'Serie simple: comas entre los elementos y ninguna ante el último «y».', en: 'Simple series: no comma before the final y.' },
            { prompt: '¿Qué versión es correcta?', options: ['Si cambiamos el horario, vendrá más gente?', 'Si cambiamos el horario, ¿vendrá más gente?', 'Si cambiamos el horario ¿vendrá más gente?'], answer: 1, why: 'La pregunta empieza en «vendrá»: ahí se abre «¿». La condición antepuesta va seguida de coma.', en: 'The question starts at vendrá, so that is where ¿ goes.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Sobra o falta una coma? Missing or extra?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué falla antes de ver la corrección: ¿falta una coma, sobra una o el signo no es el adecuado?', self: 'Lee cada frase y piensa qué falla: ¿falta una coma, sobra una o el signo no es el adecuado? Después toca para ver la corrección. (Missing comma, extra comma or wrong mark?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Los alumnos que llegaron tarde, no entraron.', right: 'Los alumnos que llegaron tarde no entraron.', why: 'Coma entre sujeto y verbo. Un sujeto largo no la justifica.' },
            { wrong: 'El cambio sin embargo, no funcionó.', right: 'El cambio, sin embargo, no funcionó.', why: 'El conector en medio va entre dos comas: falta la primera.' },
            { wrong: 'Gracias Ana por tu ayuda.', right: 'Gracias, Ana, por tu ayuda.', why: 'El vocativo se aísla con comas, también detrás de «gracias», «hola» o «buenos días».' },
            { wrong: 'Valdeolmos, la capital de la comarca tiene cinco bibliotecas.', right: 'Valdeolmos, la capital de la comarca, tiene cinco bibliotecas.', why: 'Un inciso se abre y se cierra: falta la segunda coma.' },
            { wrong: 'Lo intentamos, sin embargo, no funcionó.', right: 'Lo intentamos; sin embargo, no funcionó.', why: 'Entre dos oraciones completas, delante de «sin embargo» va punto y coma o punto.' },
            { wrong: 'Hay pocos voluntarios pero, el club sigue.', right: 'Hay pocos voluntarios, pero el club sigue.', why: 'Con «pero», la coma va delante, no detrás.' },
            { wrong: 'Compramos libros, revistas, y periódicos.', right: 'Compramos libros, revistas y periódicos.', why: 'En una serie simple no hay coma ante «y»: es un calco del inglés.' },
            { wrong: 'El programa — que nació en 2015 — sigue creciendo.', right: 'El programa —que nació en 2015— sigue creciendo.', why: 'La raya va pegada al inciso por dentro; por fuera, un espacio.' },
            { wrong: 'Querida Inés, te escribo para enviarte la memoria.', right: 'Querida Inés: Te escribo para enviarte la memoria.', why: 'El saludo de una carta o un correo va con dos puntos; lo que sigue empieza con mayúscula, normalmente en otra línea.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión es correcta?', options: ['Todos los clubes del barrio de la Estación, cierran en agosto.', 'Todos los clubes, del barrio de la Estación cierran en agosto.', 'Todos los clubes del barrio de la Estación cierran en agosto.'], answer: 2, why: 'El sujeto es «todos los clubes del barrio de la Estación»: no se separa del verbo.', en: 'All the clubs in the Estación district close in August: no comma before the verb.' },
            { context: 'Saludo de un correo profesional.', prompt: '¿Qué versión es correcta?', options: ['Hola Clara: Te mando la versión final.', 'Hola, Clara: Te mando la versión final.', 'Hola, Clara, te mando la versión final.'], answer: 1, why: 'Vocativo tras «hola» con coma, y saludo de correo con dos puntos. La coma final del saludo es un calco del inglés.', en: 'Comma before the name, colon after the greeting.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dicta una frase sobre su trabajo con un vocativo, una aposición y un conector en medio, y tú la escribes en la pizarra tal como la oyes. Después revisan juntos las comas.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La corrección', coach: 'Toca cada fragmento marcado. Tap each marked fragment.',
      steps: [
        { title: 'Martes, en la fundación · Tuesday at the foundation', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Clara y tu alumno es Daniel. Después tu alumno toca cada fragmento marcado y explica por qué lleva comas, rayas o paréntesis, o por qué no lleva ninguna coma.', self: 'Lee el diálogo en voz alta, con pausas en las comas. Después toca cada fragmento marcado: ¿por qué lleva ese signo, o por qué no lleva coma? (Tap each marked fragment and explain its punctuation.)' } },
          { kind: 'explore', title: 'Una tarde de comas', setting: 'Despacho de la Fundación Casa del Puente, martes por la tarde. Clara tiene la memoria impresa, llena de notas en rojo. (Clara has marked up a printout of the report.)', lines: [
            { who: 'Clara', text: '[[Daniel,|blue]] ya he leído la memoria. El contenido es muy bueno[[, pero|violet]] las comas necesitan una tarde de trabajo.', en: 'Daniel, I’ve read the report. The content is very good, but the commas need an afternoon’s work.' },
            { who: 'Daniel', text: 'Me lo temía. ¿Por dónde empezamos?', en: 'I was afraid of that. Where do we start?' },
            { who: 'Clara', text: 'Por la primera página. Escribes: «Los clubes que abrimos en los barrios del norte, han crecido». Esa coma separa el sujeto del verbo. Fuera.', en: 'Page one. You wrote a comma between the long subject and the verb. It goes.' },
            { who: 'Daniel', text: 'De acuerdo: «[[Los clubes que abrimos en los barrios del norte han crecido|violet]]». ¿Y el párrafo del horario?', en: 'Fine: no comma there. And the paragraph about the timetable?' },
            { who: 'Clara', text: 'Ahí falta una coma. Pones «El cambio de horario sin embargo, no funcionó». El conector va entre dos: «El cambio de horario[[, sin embargo,|teal]] no funcionó».', en: 'There’s a comma missing there: the connector needs one on each side.' },
            { who: 'Daniel', text: '¿Y si quiero subrayar que fue una sorpresa? Todos pensábamos que iba a funcionar.', en: 'And what if I want to stress that it came as a surprise? We all thought it would work.' },
            { who: 'Clara', text: 'Entonces, rayas: «El cambio de horario [[—en contra de lo previsto—|orange]] no funcionó». Separan más que las comas y llaman la atención.', en: 'Then use dashes: they set the comment further apart and draw attention to it.' },
            { who: 'Daniel', text: 'Me gusta. En la página tres presento a la directora de la biblioteca: «Rosa Peña la directora del centro, nos cedió la sala».', en: 'I like it. On page three I introduce the library director with only one comma.' },
            { who: 'Clara', text: 'Le falta la primera coma: «Rosa Peña[[, la directora del centro,|blue]] nos cedió la sala». Y la sigla de la fundación, mejor entre paréntesis: «la Fundación Casa del Puente [[(FCP)|orange]]».', en: 'The first comma is missing: the apposition has to open and close. And the foundation’s acronym is better in brackets.' },
            { who: 'Daniel', text: 'En la lista de actividades, ¿pongo coma antes de la «y»? En inglés la pondría.', en: 'In the list of activities, do I put a comma before y? In English I would.' },
            { who: 'Clara', text: 'En español, no: «tertulias, [[lecturas en voz alta y visitas de autores|violet]]». Y no hace falta «etc.» si la lista está completa[[, es decir,|teal]] si no falta nada.', en: 'Not in Spanish. And you don’t need “etc.” if the list is complete, that is, if nothing is missing.' },
            { who: 'Daniel', text: '[[Gracias, Clara,|blue]] por la paciencia. Esta noche te mando la versión nueva.', en: 'Thanks for your patience, Clara. I’ll send you the new version tonight.' },
          ], notes: {
            'Daniel,': 'Vocativo al principio: el nombre de la persona a la que hablas se separa con coma, aunque la frase sea corta.',
            ', pero': '«Pero» une dos oraciones: coma delante y ninguna detrás.',
            'Los clubes que abrimos en los barrios del norte han crecido': 'Sujeto largo, con una oración de relativo dentro, y verbo sin coma entre ellos. La pausa que haces al leer no se escribe.',
            ', sin embargo,': 'Conector en medio, detrás del sujeto: va entre dos comas. Daniel había olvidado la primera.',
            '—en contra de lo previsto—': 'Rayas: separan más que las comas y destacan el comentario. Van pegadas al inciso por dentro y con espacio por fuera.',
            ', la directora del centro,': 'Aposición explicativa: añade información sobre Rosa Peña. Se abre y se cierra con coma.',
            '(FCP)': 'Paréntesis para una sigla: información marginal. Sin espacios por dentro.',
            'lecturas en voz alta y visitas de autores': 'Final de una serie simple: sin coma antes de «y». La coma de Oxford es un hábito del inglés.',
            ', es decir,': 'Reformulador en medio de la oración: entre comas, como «o sea», «esto es» o «por ejemplo».',
            'Gracias, Clara,': 'Vocativo en medio de la oración: una coma antes del nombre y otra después.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué opina Clara de la memoria?', options: ['Que el contenido es bueno, pero la puntuación necesita trabajo.', 'Que hay que reescribirla entera.', 'Que tiene errores en las cifras.'], answer: 0, why: '«El contenido es muy bueno, pero las comas necesitan una tarde de trabajo».', en: 'What does Clara think of the report?' },
            { prompt: '¿Por qué propone Clara rayas en el párrafo del horario?', options: ['Porque el inciso lleva muchas comas dentro.', 'Para destacar que el resultado fue una sorpresa.', 'Porque las comas son incorrectas en ese caso.'], answer: 1, why: 'Daniel quiere subrayar la sorpresa, y las rayas «separan más que las comas y llaman la atención».', en: 'Why does Clara suggest dashes in the timetable paragraph?' },
            { prompt: '¿Qué duda tiene Daniel sobre la lista de actividades?', options: ['Si debe usar paréntesis.', 'Si debe poner coma antes de «y», como en inglés.', 'Si debe escribir «etc.» al final.'], answer: 1, why: '«¿Pongo coma antes de la “y”? En inglés la pondría».', en: 'What is Daniel unsure about in the list of activities?' },
          ] },
        ] },
        { title: 'La versión nueva · The new version', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Daniel le manda a Clara las frases corregidas · Daniel texts Clara his corrections', lines: [
            { who: 'Daniel', text: 'Clara, el párrafo de los voluntarios. ¿Cuál dejo? ___', options: ['Los voluntarios casi todos jubilados, dirigen veinte clubes.', 'Los voluntarios, casi todos jubilados dirigen veinte clubes.', 'Los voluntarios, casi todos jubilados, dirigen veinte clubes.'], answer: 2, why: 'El inciso «casi todos jubilados» se abre y se cierra con coma; con una sola, quedaría una coma entre sujeto y verbo.' },
            { who: 'Clara', text: 'Esa. ¿Y la frase del presupuesto?' },
            { who: 'Daniel', text: '___', options: ['El presupuesto, no obstante se mantuvo igual.', 'El presupuesto no obstante se mantuvo igual.', 'El presupuesto, no obstante, se mantuvo igual.'], answer: 2, why: '«No obstante» en medio, tras el sujeto: entre dos comas.' },
            { who: 'Clara', text: 'Bien. Te falta el agradecimiento final a Inés.' },
            { who: 'Daniel', text: '___', options: ['Gracias Inés, por confiar en nosotros.', 'Gracias, Inés por confiar en nosotros.', 'Gracias, Inés, por confiar en nosotros.'], answer: 2, why: 'Vocativo en medio: coma antes y después de «Inés».' },
            { who: 'Clara', text: '¿Y cómo empiezas el correo?' },
            { who: 'Daniel', text: '___ Te envío la memoria del programa.', options: ['Estimada Inés,', 'Estimada Inés:', 'Estimada, Inés:'], answer: 1, why: 'El saludo de un correo formal va con dos puntos; la coma es un calco del inglés.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Quién revisa tus textos importantes en el trabajo?». Tu alumno responde presentando a esa persona con una aposición entre comas y añade un comentario entre rayas.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Abre, cierra y no separes sujeto y verbo. Open, close, and never split subject and verb.',
      steps: [
        { title: 'El párrafo sin puntuar · The unpunctuated paragraph', blocks: [
          { kind: 'lead', text: 'Daniel dictó al móvil el párrafo final de la memoria y salió sin puntuación: «Este año sin embargo los clubes han crecido un treinta por ciento los nuevos socios jubilados estudiantes y familias llegaron sobre todo en primavera la Biblioteca del Molino el centro más antiguo de Valdeolmos amplió su horario el programa en resumen funciona pero necesita más voluntarios señoras y señores del patronato contamos con su apoyo». Elige la versión bien puntuada de cada frase.', en: 'Daniel dictated the closing paragraph into his phone and it came out with no punctuation at all. Choose the correctly punctuated version of each sentence.' },
          { kind: 'choice', items: [
            { context: 'Frase 1.', prompt: '¿Qué versión es correcta?', options: ['Este año sin embargo, los clubes han crecido un treinta por ciento.', 'Este año, sin embargo los clubes han crecido un treinta por ciento.', 'Este año, sin embargo, los clubes han crecido un treinta por ciento.'], answer: 2, why: 'El conector va en medio, tras «este año»: entre dos comas.', en: 'This year, however, the clubs have grown by thirty per cent.' },
            { context: 'Frase 2.', prompt: '¿Qué versión es correcta?', options: ['Los nuevos socios, jubilados, estudiantes y familias llegaron sobre todo en primavera.', 'Los nuevos socios —jubilados, estudiantes y familias— llegaron sobre todo en primavera.', 'Los nuevos socios — jubilados, estudiantes y familias — llegaron sobre todo en primavera.'], answer: 1, why: 'El inciso lleva comas dentro: con rayas se lee claro. Con comas parecería una lista de cuatro elementos; y las rayas van pegadas por dentro.', en: 'The aside contains commas, so dashes avoid confusion; they touch the words inside.' },
            { context: 'Frase 3.', prompt: '¿Qué versión es correcta?', options: ['La Biblioteca del Molino el centro más antiguo de Valdeolmos, amplió su horario.', 'La Biblioteca del Molino, el centro más antiguo de Valdeolmos amplió su horario.', 'La Biblioteca del Molino, el centro más antiguo de Valdeolmos, amplió su horario.'], answer: 2, why: 'Aposición explicativa completa: coma de apertura y coma de cierre.', en: 'The apposition needs both its opening and its closing comma.' },
            { context: 'Frase 4.', prompt: '¿Qué versión es correcta?', options: ['El programa, en resumen, funciona pero, necesita más voluntarios.', 'El programa en resumen, funciona, pero necesita más voluntarios.', 'El programa, en resumen, funciona, pero necesita más voluntarios.'], answer: 2, why: '«En resumen» va entre comas en medio; «pero», con coma delante y ninguna detrás.', en: 'The connector between commas; pero with a comma before it only.' },
            { context: 'Frase 5.', prompt: '¿Qué versión es correcta?', options: ['Señoras y señores, del patronato contamos con su apoyo.', 'Señoras y señores del patronato, contamos con su apoyo.', 'Señoras y señores del patronato contamos con su apoyo.'], answer: 1, why: '«Señoras y señores del patronato» es un vocativo completo: la coma va al final de todo el grupo.', en: 'The whole form of address is the vocative, so the comma comes after it.' },
          ] },
        ] },
        { title: '¿Por qué van esas comas? · Why those commas?', blocks: [
          { kind: 'classify', title: 'Clasifica por la función de las comas · Sort by what the commas mark', categories: [
            { id: 'inciso', label: 'APOSICIÓN O ACLARACIÓN', tone: 'blue' },
            { id: 'conector', label: 'CONECTOR', tone: 'teal' },
            { id: 'vocativo', label: 'VOCATIVO', tone: 'neutral' },
          ], items: [
            { text: 'Inés, ¿tienes un minuto?', answer: 'vocativo', why: '«Inés» es la persona a la que se habla.' },
            { text: 'El club del Molino, por ejemplo, tiene lista de espera.', answer: 'conector', why: '«Por ejemplo» presenta un caso concreto: conector entre comas.' },
            { text: 'Marta Ruiz, la bibliotecaria del barrio, prepara las tertulias.', answer: 'inciso', why: 'Aposición explicativa: dice quién es Marta Ruiz.' },
            { text: 'La sala, no obstante, se queda pequeña los jueves.', answer: 'conector', why: '«No obstante» contrapone con lo anterior: conector en medio.' },
            { text: 'Los clubes, que son gratuitos, abren a las seis.', answer: 'inciso', why: 'Aclaración con «que» sobre todos los clubes: inciso explicativo.' },
          ] },
        ] },
        { title: 'El correo a los voluntarios · The email to the volunteers', blocks: [
          { kind: 'fix', title: 'Daniel escribe a los voluntarios. ¿Está bien puntuada cada frase? · Is each sentence correctly punctuated?', items: [
            { sentence: 'Los voluntarios que participaron en la feria del libro, recibirán un diploma.', ok: false, options: ['Los voluntarios que participaron en la feria del libro recibirán un diploma.', 'Los voluntarios que participaron, en la feria del libro recibirán un diploma.', 'Los voluntarios, que participaron en la feria del libro recibirán un diploma.'], answer: 0, why: 'El sujeto es largo, pero no se separa del verbo «recibirán».' },
            { sentence: 'El horario de los martes, sin embargo, cambia en enero.', ok: true, why: 'Correcta: conector en medio, entre dos comas.' },
            { sentence: 'Necesitamos ayuda en la feria, por ejemplo con las mesas, las sillas, y los carteles.', ok: false, options: ['Necesitamos ayuda en la feria, por ejemplo, con las mesas, las sillas y los carteles.', 'Necesitamos ayuda en la feria por ejemplo, con las mesas, las sillas y los carteles.', 'Necesitamos ayuda en la feria; por ejemplo con las mesas, las sillas y los carteles.'], answer: 0, why: '«Por ejemplo» va entre comas, y en la serie no hay coma ante «y».' },
            { sentence: 'Gracias Marta por organizar la tertulia de poesía.', ok: false, options: ['Gracias Marta, por organizar la tertulia de poesía.', 'Gracias, Marta, por organizar la tertulia de poesía.', 'Gracias, Marta por organizar la tertulia de poesía.'], answer: 1, why: 'Vocativo en medio de la oración: una coma antes y otra después.' },
            { sentence: 'La tertulia de mayo —la más concurrida del año— reunió a sesenta personas.', ok: true, why: 'Correcta: rayas pegadas al inciso por dentro y sin coma entre sujeto y verbo.' },
            { sentence: 'Habrá café, pastas, refrescos, etc...', ok: false, options: ['Habrá café, pastas, refrescos, etc.', 'Habrá café, pastas, refrescos, etcétera…', 'Habrá café, pastas, refrescos etc.'], answer: 0, why: 'Coma delante de «etc.», y su punto cierra la oración: sin puntos suspensivos, que repetirían la idea de «y lo demás».' },
          ] },
        ] },
        { title: 'Una coma cambia el sentido · One comma changes the meaning', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', items: [
            { context: 'Una madre en la puerta de la biblioteca.', prompt: '«Vamos a comer, niños». ¿Qué dice?', options: ['Dice que se van a comer a los niños.', 'Invita a los niños a comer.', 'Pregunta a los niños si tienen hambre.'], answer: 1, why: 'Con coma, «niños» es un vocativo: habla con ellos. Sin coma, «niños» sería lo que se van a comer.', en: 'With the comma, the children are being addressed; without it, they would be the meal.' },
            { prompt: '«No, quiero ir al club». ¿Qué significa?', options: ['La persona no quiere ir.', 'La persona duda si ir o no.', 'La persona rechaza otra cosa y sí quiere ir.'], answer: 2, why: 'El «no» responde a algo anterior; después afirma «quiero ir». Sin coma, «No quiero ir» es un rechazo.', en: 'The no answers something else; then the speaker says they do want to go.' },
            { prompt: '«Los socios, que pagaron la cuota, votaron». ¿Quién votó?', options: ['Solo los socios que pagaron.', 'Nadie: se anuló la votación.', 'Todos los socios: todos habían pagado.'], answer: 2, why: 'Con comas, la oración con «que» explica algo de todos los socios. Sin comas, seleccionaría solo a los que pagaron (clase 203).', en: 'With commas, all the members paid and all voted.' },
            { prompt: '«Mi socia, Lucía, dirige la librería». ¿Qué indican las comas?', options: ['Que Lucía no es mi socia.', 'Que tengo una sola socia.', 'Que tengo varias socias y hablo de una.'], answer: 1, why: 'Aposición explicativa: «Lucía» solo añade el nombre de la única socia. Sin comas, la distinguiría entre varias.', en: 'With commas, there is only one business partner.' },
          ] },
        ] },
        { title: 'Las últimas dudas · Last questions', blocks: [
          { kind: 'chat-fill', title: 'Daniel y Clara, por mensaje, la noche antes de la entrega · Messages the night before the deadline', lines: [
            { who: 'Daniel', text: 'Clara, ¿«etc.» lleva coma delante?' },
            { who: 'Clara', text: '___ Y detrás no pongas puntos suspensivos.', options: ['No, nunca lleva coma.', 'Solo en textos informales.', 'Sí, cuando cierra una enumeración.'], answer: 2, why: 'La norma pide coma delante de «etc.» cuando cierra una serie.' },
            { who: 'Daniel', text: 'Entendido. ¿Y cuál de estas dejo? ___', options: ['Abriremos dos clubes nuevos sin embargo todavía no tenemos sala.', 'Abriremos dos clubes nuevos, sin embargo, todavía no tenemos sala.', 'Abriremos dos clubes nuevos; sin embargo, todavía no tenemos sala.'], answer: 2, why: '«Sin embargo» une dos oraciones completas: punto y coma delante, coma detrás.' },
            { who: 'Clara', text: 'La segunda. ¿Y la frase de Rosa?' },
            { who: 'Daniel', text: '___', options: ['Rosa Peña que dirige la biblioteca desde 2019, nos cedió la sala.', 'Rosa Peña, que dirige la biblioteca desde 2019 nos cedió la sala.', 'Rosa Peña, que dirige la biblioteca desde 2019, nos cedió la sala.'], answer: 2, why: 'Aclaración con «que» sobre Rosa Peña: se abre y se cierra con coma.' },
            { who: 'Clara', text: 'Perfecta. Última: ¿cómo cierras el párrafo de las cifras?' },
            { who: 'Daniel', text: '___', options: ['En resumen, el programa crece, pero necesita más voluntarios.', 'En resumen, el programa crece pero, necesita más voluntarios.', 'En resumen el programa crece, pero, necesita más voluntarios.'], answer: 0, why: 'Coma detrás del conector inicial; «pero» con coma delante y ninguna detrás.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las piezas: las comas y las rayas ya van en ellas · The commas and dashes are on the tiles', items: [
            { tiles: ['La', 'asistencia,', 'sin', 'embargo,', 'bajó', 'en', 'verano.'], accept: ['La asistencia, sin embargo, bajó en verano.'], en: 'Attendance, however, fell in the summer.' },
            { tiles: ['Hugo', 'Lara,', 'el', 'voluntario', 'más', 'joven,', 'modera', 'el', 'club', 'juvenil.'], accept: ['Hugo Lara, el voluntario más joven, modera el club juvenil.', 'El voluntario más joven, Hugo Lara, modera el club juvenil.'], en: 'Hugo Lara, the youngest volunteer, runs the youth club.' },
            { tiles: ['El', 'club', 'del', 'Molino', '—el', 'más', 'antiguo', 'de', 'la', 'ciudad—', 'abre', 'también', 'los', 'sábados.'], accept: ['El club del Molino —el más antiguo de la ciudad— abre también los sábados.'], en: 'The Molino club, the oldest in the city, also opens on Saturdays.' },
          ] },
        ] },
        { title: 'Reescribe con incisos · Rewrite with asides', blocks: [
          { kind: 'rewrite', title: 'Escribe también las comas; la corrección automática solo compara las palabras · Write the commas too: the checker compares only the words', items: [
            { prompt: 'Sin embargo, el horario nuevo no convenció a los socios.', instruction: 'Pon «sin embargo» en medio, después del sujeto, con sus dos comas.', accept: ['El horario nuevo, sin embargo, no convenció a los socios'] },
            { prompt: 'Carmen Ibáñez donó doscientos libros. Carmen Ibáñez es profesora jubilada.', instruction: 'Una sola oración con una aposición entre comas.', accept: ['Carmen Ibáñez, profesora jubilada, donó doscientos libros', 'Carmen Ibáñez, una profesora jubilada, donó doscientos libros', 'Una profesora jubilada, Carmen Ibáñez, donó doscientos libros'] },
            { prompt: 'Los clubes se reúnen cada quince días. Se reúnen dos veces al mes.', instruction: 'Una sola oración con «es decir» entre comas.', accept: ['Los clubes se reúnen cada quince días, es decir, dos veces al mes', 'Los clubes se reúnen dos veces al mes, es decir, cada quince días'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno escribe en la pizarra tres frases sobre su ciudad: una con aposición, una con un conector en medio y una con un dato entre paréntesis. Tú solo señalas si sobra o falta alguna coma; tu alumno la corrige.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Clara', coach: 'Las pausas también puntúan. Pauses punctuate too.',
      steps: [
        { title: 'Un mensaje de voz · A voice message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo qué quiere Clara. Segunda escucha: tu alumno anota los tres errores que menciona y las pausas que oye en los incisos. Después, las preguntas.', self: 'Escucha una vez para saber qué quiere Clara y otra para anotar los tres errores y las pausas de los incisos. (Listen once for the purpose and once for the three mistakes.)' } },
          { kind: 'listen', title: 'Mensaje de voz de Clara', channel: 'MENSAJE DE VOZ · CLARA MONTOYA', src: '/audio/grammar-live/497.mp3',
            before: 'Clara le deja a Daniel un mensaje de voz con las últimas correcciones. ¿Qué errores crees que menciona? (Which mistakes do you think she mentions?)',
            gist: { prompt: '¿Para qué deja Clara el mensaje? · Why does Clara leave the message?', options: ['Para resumirle las correcciones pendientes y proponerle una reunión.', 'Para decirle que el contenido de la memoria tiene errores graves.', 'Para cancelar la entrega al patronato.'], answer: 0, why: 'Le explica tres cambios, le avisa de que hay menos tiempo y le propone verse mañana a las diez.', en: 'She sums up three changes, warns him the deadline has moved and suggests meeting.' },
            details: [
              { prompt: '¿Qué pone Clara como ejemplo de lo que está bien?', options: ['El párrafo del horario.', 'Las cifras.', 'La lista de actividades.'], answer: 1, why: '«Las cifras, por ejemplo, se entienden perfectamente».', en: 'What does Clara give as an example of what works well?' },
              { prompt: '¿Qué problema tiene la frase de los voluntarios?', options: ['Le falta un conector.', 'Debería ir entre paréntesis.', 'Una coma separa el sujeto del verbo.'], answer: 2, why: '«Esa coma después de “norte” sobra, porque separa el sujeto del verbo».', en: 'What is wrong with the sentence about the volunteers?' },
              { prompt: '¿Qué le pasa a la frase de Rosa Peña?', options: ['Le falta la segunda coma de la aposición.', 'Tiene una coma antes de «y».', 'Usa un guion en lugar de una raya.'], answer: 0, why: '«No tiene la segunda coma; sin ella, el lector no sabe dónde termina la aposición».', en: 'What is wrong with the sentence about Rosa Peña?' },
              { prompt: '¿Por qué prefiere Clara rayas en el párrafo del horario?', options: ['Porque es la norma en las memorias.', 'Porque el resultado sorprendió a todos y conviene destacarlo.', 'Porque las comas no se pueden usar con conectores.'], answer: 1, why: '«Queda mejor con rayas, porque el resultado —ya lo sabes— nos sorprendió a todos».', en: 'Why does Clara prefer dashes in the timetable paragraph?' },
              { prompt: '¿Qué noticia da Clara al final?', options: ['Que la reunión del patronato se aplaza.', 'Que Inés quiere el texto un día antes.', 'Que Inés no podrá leer el texto.'], answer: 1, why: '«Inés, la presidenta, quiere leer el texto el jueves, o sea, un día antes de lo previsto».', en: 'What news does Clara give at the end?' },
            ],
            transcript: 'Hola, Daniel. Soy Clara. Te dejo un audio porque estoy entre dos reuniones. Ya he revisado la memoria y[[, en general,|teal]] está muy bien. Las cifras[[, por ejemplo,|teal]] se entienden perfectamente. [[Ahora bien,|teal]] hay tres cosas que conviene cambiar antes de la entrega. La primera está en la página dos: escribes «Los voluntarios que coordinan los clubes del norte, piden más formación». Esa coma después de «norte» sobra, porque separa el sujeto del verbo. La segunda: la frase de Rosa Peña[[, la directora de la biblioteca,|blue]] no tiene la segunda coma; sin ella, el lector no sabe dónde termina la aposición. La tercera es de estilo: el párrafo del horario queda mejor con rayas, porque el resultado [[—ya lo sabes—|orange]] nos sorprendió a todos. Y una noticia: Inés[[, la presidenta,|blue]] quiere leer el texto el jueves[[, o sea,|teal]] un día antes de lo previsto. ¿Podemos vernos mañana a las diez? Si no te viene bien, llámame y lo cambiamos. Un abrazo.',
            reply: { teacher: 'Tu alumno es Daniel y responde a Clara con un mensaje de voz: acepta las correcciones, confirma la reunión y lee en voz alta las dos frases corregidas, con una pausa en cada coma. Tú escuchas y compruebas que las pausas coinciden con las comas.', self: 'Eres Daniel: responde a Clara en voz alta. Acepta las correcciones, confirma la reunión y lee las dos frases corregidas con una pausa en cada coma. (Reply to Clara aloud and read the corrected sentences with clear pauses.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Puntuar con la voz', coach: 'Una pausa antes y otra después. A pause before and after.',
      steps: [
        { title: 'Incisos en voz alta · Asides out loud', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Tu alumno responde marcando los incisos con la voz: pausa y entonación más baja antes y después. Si una pausa cae entre sujeto y verbo, tú repites la frase sin ella y sigues.', self: 'Responde en voz alta y marca los incisos con la voz: una pausa antes y otra después, con la entonación un poco más baja. (Mark each aside with your voice.)' } },
          { kind: 'talk', cards: [
            { q: 'Presenta a tres personas o lugares importantes de tu trabajo o tu ciudad con una aposición. · Introduce three people or places using an apposition.', followUps: ['¿Por qué son importantes para ti?', '¿A cuál conoces desde hace más tiempo?'], phrases: ['[[Nombre, aposición,|blue]] + verbo', '[[Nombre, que + verbo,|blue]] + verbo', 'el poeta Antonio Machado (sin comas: especificativa)'], hint: 'Haz una pequeña pausa antes y después de la aposición: es la coma que se oye.', example: 'Marta Ruiz, mi jefa, lleva veinte años en la empresa. La plaza Mayor, el centro de la vida del barrio, se llena los domingos. Y Luis, que es el cocinero del bar de abajo, me conoce mejor que nadie.' },
            { q: 'Cuenta un cambio en tu trabajo o en tus estudios que no salió como esperabas. · Tell about a change that didn’t work out.', followUps: ['¿Qué se hizo después?', '¿Qué aprendiste?'], phrases: ['[[…, sin embargo,|teal]] …', '[[…, por ejemplo,|teal]] …', '[[…, es decir,|teal]] …', '[[—en contra de lo previsto—|orange]]'], hint: 'Coloca el conector en medio, después del sujeto, con una pausa antes y otra después.', example: 'El año pasado cambiamos el horario de la oficina. La idea, en principio, era buena: entrar antes y salir antes. El resultado, sin embargo, fue un desastre. Muchos compañeros, por ejemplo, llevaban a sus hijos al colegio y llegaban tarde. Al final volvimos al horario anterior, es decir, perdimos tres meses.' },
            { q: 'Dictado: dicta (o grábate dictando) dos frases con incisos y nombra cada signo. · Dictate two sentences, naming each punctuation mark.', followUps: ['¿Qué signo no sabías nombrar en español?', '¿Te ha resultado difícil dictar sin equivocarte?'], phrases: ['coma · punto y seguido · punto y aparte', 'abre raya · cierra raya', 'abre paréntesis · cierra paréntesis', 'abre interrogación · cierra interrogación'], hint: 'Se dice «abre / cierra paréntesis», «abre / cierra raya». El punto puede ser «punto y seguido» o «punto y aparte».', example: 'Rosa Peña, coma, la directora del centro, coma, nos cedió la sala, punto y seguido. El club, abre raya, el más antiguo de la ciudad, cierra raya, abre también los sábados, punto y aparte.', next: 'Ahora, a explicar las reglas.' },
            { q: 'Un colega que escribe sobre todo en inglés te pregunta por qué le corriges las comas. Explícale tres diferencias. · Explain three English–Spanish differences.', followUps: ['¿Qué diferencia te parece más difícil de recordar?', '¿Hay alguna regla igual en los dos idiomas?'], phrases: ['[[novelas, ensayos y poesía|violet]] (sin coma ante «y»)', '«Querida Ana:» (dos puntos)', '[[Si no hay sala, ¿qué hacemos?|violet]]'], hint: 'Da un ejemplo para cada diferencia: la serie con «y», el saludo de las cartas y los signos de apertura.', example: 'Mira, en español no se pone coma antes de la «y» en una enumeración simple: «novelas, ensayos y poesía». Además, en una carta el saludo lleva dos puntos, no coma: «Querida Ana:». Y las preguntas se abren también, justo donde empiezan: «Si no hay sala, ¿qué hacemos?». En cambio, con «sin embargo» hacemos lo mismo que en inglés: lo aislamos con comas.' },
            { q: 'Explica qué cambia la coma en estos pares e inventa otro: «Vamos a comer, niños» / «Vamos a comer niños»; «No, quiero ir» / «No quiero ir». · Explain how the comma changes the meaning.', followUps: ['¿Conoces algún malentendido real por culpa de una coma?', '¿Pasa algo parecido en tu lengua?'], phrases: ['[[…, niños|blue]] (vocativo)', '«No, …» = respuesta negativa + afirmación', '[[Mi hermano, Luis,|blue]] … / Mi hermano Luis …'], hint: 'Explica qué función tiene la palabra con coma y sin ella: ¿vocativo, complemento, inciso?', example: 'En «Vamos a comer, niños», «niños» es un vocativo: hablo con ellos. Sin la coma, los niños son lo que vamos a comer. En «No, quiero ir», el «no» responde a otra pregunta y después digo que sí quiero ir; en «No quiero ir», me niego. Yo propongo otro par: «Mi hermano, Luis, vive en Lima», con comas, significa que solo tengo un hermano.', teacher: 'Tú propones un par nuevo («Pedro, el jefe, ha llegado» / «Pedro, el jefe ha llegado») y tu alumno explica la diferencia.' },
            { q: '¿Importa la puntuación en los mensajes del trabajo? Da tu opinión con incisos y conectores. · Does punctuation matter in work messages?', followUps: ['¿Y en los mensajes entre amigos?', '¿Alguna vez te has llevado una impresión equivocada por la puntuación de alguien?'], phrases: ['[[En mi opinión,|teal]] …', '[[…, no obstante,|teal]] …', '[[(…)|orange]] para un dato', '[[—…—|orange]] para un comentario'], hint: 'Combina un conector en medio de la oración, una aposición y un comentario entre rayas.', example: 'En mi opinión, sí importa. Un correo sin comas, por muy amable que sea, parece escrito con prisa. Mi jefe —que es muy cuidadoso— corrige hasta los mensajes internos. Los chats con amigos, no obstante, son otra cosa: ahí casi nadie se fija.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes leyendo frases con alguna pausa equivocada a propósito (entre sujeto y verbo, o sin pausa en un vocativo). Tu alumno detecta dónde fallan las comas.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas desde otra postura, cuidando las pausas de cada inciso. (Ask the questions aloud and answer from another point of view.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El correo a la presidenta', coach: 'Saludo, incisos, conectores y ni una coma de más. Every comma earns its place.',
      steps: [
        { title: 'La memoria, en un correo · The report, in an email', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el correo en voz alta con sus pausas, y revisan juntos cada coma: ¿abre o cierra un inciso, aísla un conector o separa por error sujeto y verbo?', self: 'Escribe tu correo y toca «Revisar mi texto». Después léelo en voz alta: ¿cada coma abre o cierra algo, o separa por error sujeto y verbo? (Read it aloud and check every comma.)' } },
          { kind: 'write', title: 'Mi correo · My email', situation: 'Eres Daniel (o el responsable de un proyecto de tu trabajo). Escribe a Inés Garrido, presidenta del patronato, un correo formal que resuma los resultados del año antes de la reunión del jueves. (Write a formal email to the board president summing up the year’s results.)', task: [
            'Empieza con un saludo seguido de dos puntos («Estimada Inés:») e incluye un vocativo entre comas. (Colon after the greeting, plus a vocative.)',
            'Presenta a una persona o un lugar con una aposición entre comas. (One apposition.)',
            'Usa al menos dos conectores bien puntuados: uno en medio de la oración, entre comas, y otro al principio, con coma detrás. (Two connectors, correctly punctuated.)',
            'Añade un comentario entre rayas o un dato entre paréntesis. (One aside with dashes or brackets.)',
            'Escribe un sujeto largo sin coma antes del verbo y una enumeración sin coma ante «y». (Long subject without a comma; series without an Oxford comma.)',
          ], starters: ['Estimada Inés:', 'Como sabes, Inés, …', 'Te resumo lo esencial.', '…, el centro más antiguo de…,', '…, sin embargo, …', 'Además, …', '—…—', '(…)', 'Quedo a tu disposición para cualquier duda.', 'Un saludo cordial.'],
            words: ['aposición', 'vocativo', 'sin embargo', 'no obstante', 'además', 'es decir', 'por ejemplo', 'raya', 'paréntesis', 'dos puntos'],
            model: 'Estimada Inés: Te envío la memoria anual del programa «Lectores de barrio», que presentaremos al patronato el jueves. Como sabes, Inés, el patronato quiere cifras claras, así que te resumo lo esencial. Este año el programa ha llegado a cinco barrios y veinte clubes. Los socios nuevos [[—jubilados, estudiantes y muchas familias—|orange]] llegaron sobre todo en primavera. La Biblioteca del Molino[[, el centro más antiguo de Valdeolmos,|blue]] amplió su horario de tarde. [[Además,|teal]] Rosa Peña, su directora, nos ha cedido una segunda sala. El cambio de horario de los sábados[[, sin embargo,|teal]] no funcionó: la asistencia bajó a la mitad, por lo que en enero volveremos al horario anterior. [[Los voluntarios que coordinan los clubes del norte|violet]] piden más formación[[, es decir,|teal]] talleres prácticos para moderar una tertulia. Para el próximo año proponemos tres líneas: formación, un club juvenil [[y visitas de autores locales|violet]]. El presupuesto [[(unos dieciocho mil euros)|orange]] se mantendría igual. Quedo a tu disposición para cualquier duda. Un saludo cordial. Daniel Vidal',
            minWords: 140,
            checks: [
              { label: 'Saludo con dos puntos (Estimada Inés:)', pattern: '^\\s*(?:estimad[oa]s?|querid[oa]s?|hola)[^\\n:]{0,40}:', tip: 'En un correo formal, el saludo termina con dos puntos: «Estimada Inés:».' },
              { label: 'Un conector entre comas (sin embargo, no obstante, es decir…)', pattern: ',\\s*(?:sin\\s+embargo|no\\s+obstante|por\\s+tanto|por\\s+lo\\s+tanto|además|es\\s+decir|o\\s+sea|esto\\s+es|por\\s+ejemplo|en\\s+cambio|en\\s+resumen|por\\s+otra\\s+parte)\\s*,', tip: 'Pon un conector en medio de la oración, con una coma antes y otra después.' },
              { label: 'Un inciso con rayas o paréntesis', pattern: '—[^—\\n]+—|\\([^()\\n]+\\)', tip: 'Añade un comentario entre rayas o un dato entre paréntesis, sin espacios por dentro.' },
            ],
            warnings: [
              { pattern: '^\\s*(?:estimad[oa]s?|querid[oa]s?)\\s[^:\\n]{1,40},', why: 'El saludo de un correo formal va con **dos puntos**, no con coma: «Estimada Inés:».' },
              { pattern: '(?<!\\p{L})sin\\s+embargo\\s+(?=\\p{L})', why: 'Detrás de **sin embargo** va coma: «Sin embargo, …» o «…, sin embargo, …».' },
              { pattern: '\\s-\\s', why: 'Para un inciso se usa la **raya** (—), no el guion (-), y va pegada a las palabras de dentro: «—así—».' },
              { pattern: '—\\s[^—\\n]{1,60}\\s—', why: 'Comprueba las rayas: van **pegadas** al inciso por dentro («—en contra de lo previsto—»).' },
              { pattern: 'etc\\.?\\s*(?:\\.\\.\\.|…)', why: 'Con **etc.** no se ponen puntos suspensivos: «etc.» ya significa «y lo demás».' },
              { pattern: '[^,\\s]\\s+etc(?!\\p{L})', why: 'Delante de **etc.** va coma: «libros, revistas, etc.».' },
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
            { tone: 'blue', label: 'INCISOS ENTRE COMAS', formula: 'nombre, aposición, … · …, vocativo · sujeto, inciso, verbo', example: 'Rosa Peña, la directora, nos cedió la sala.', caption: 'se abren y se cierran; el vocativo, siempre aislado', en: 'open and close them; always set off a vocative' },
            { tone: 'teal', label: 'CONECTORES', formula: 'Sin embargo, … · …, sin embargo, … · …; sin embargo, … · …, pero …', example: 'El cambio, sin embargo, no funcionó.', caption: 'aislados por comas; «pero», coma solo delante', en: 'connectors between commas; pero takes a comma only before it' },
            { tone: 'orange', label: 'RAYAS Y PARÉNTESIS', formula: 'palabra —inciso— palabra · palabra (dato) palabra', example: 'El club —el más antiguo— abre los sábados.', caption: 'pegados por dentro; la raya de cierre no se omite', en: 'touching the aside inside; never drop the closing dash' },
            { tone: 'violet', label: 'SIN COMA', formula: 'sujeto largo + verbo · A, B y C · …, etc. · Querida Ana:', example: 'Los socios que llegaron tarde no entraron.', caption: 'ni entre sujeto y verbo ni ante «y» en una serie', en: 'no comma between subject and verb, none before y in a series' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de poner una coma, pregúntate qué hace: ¿**abre o cierra** un inciso, **aísla** un conector o un vocativo, **separa** los elementos de una serie? Si solo marca una pausa entre el sujeto y el verbo, sobra. Y todo lo que se abre —comas, rayas, paréntesis— **se cierra**.', en: 'Before you add a comma, ask what it does: does it open or close an aside, set off a connector or a vocative, or separate items in a list? If it only marks a pause between subject and verb, leave it out. And whatever opens, whether commas, dashes or brackets, must close.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '¿Qué versión es correcta?', options: ['Los resultados, no obstante, fueron buenos.', 'Los resultados no obstante, fueron buenos.', 'Los resultados, no obstante fueron buenos.'], answer: 0, why: 'Conector en medio: entre dos comas.', en: 'The results, however, were good.' },
            { prompt: '¿Qué versión es correcta?', options: ['Gracias, por venir Carmen.', 'Gracias por venir, Carmen.', 'Gracias por venir Carmen.'], answer: 1, why: '«Carmen» es un vocativo al final: va precedido de coma. «Por venir» no es un inciso.', en: 'Thank you for coming, Carmen.' },
            { prompt: '¿Qué versión es correcta?', options: ['Todos los estudiantes que aprobaron el examen de junio recibieron el certificado.', 'Todos los estudiantes, que aprobaron el examen de junio recibieron el certificado.', 'Todos los estudiantes que aprobaron el examen de junio, recibieron el certificado.'], answer: 0, why: 'Sujeto largo y verbo, sin coma entre ellos.', en: 'All the students who passed the June exam received the certificate.' },
            { prompt: '¿Qué versión es correcta?', options: ['El museo —cerrado desde marzo— reabre mañana.', 'El museo — cerrado desde marzo — reabre mañana.', 'El museo -cerrado desde marzo- reabre mañana.'], answer: 0, why: 'Rayas, no guiones, pegadas al inciso por dentro.', en: 'The museum, closed since March, reopens tomorrow.' },
            { prompt: '¿Qué versión es correcta?', options: ['Necesitamos pan, queso y fruta.', 'Necesitamos pan, queso, y fruta.', 'Necesitamos, pan, queso y fruta.'], answer: 0, why: 'Serie simple: sin coma ante «y» ni entre el verbo y su complemento.', en: 'We need bread, cheese and fruit.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en un hospital. Now, in a hospital.', blocks: [
          { kind: 'lead', text: 'Marina Echeverría, responsable de comunicación de un hospital universitario, revisa el boletín interno antes de enviarlo a toda la plantilla. Elige la versión que puede publicar.', en: 'Marina, the communications officer at a university hospital, is checking the staff newsletter before it goes out. Choose the version she can publish.' },
          { kind: 'choice', title: 'El boletín del hospital · The hospital newsletter', items: [
            { prompt: '¿Qué versión es correcta?', options: ['La doctora Soto, jefa de Pediatría, presentará el nuevo protocolo.', 'La doctora Soto jefa de Pediatría, presentará el nuevo protocolo.', 'La doctora, Soto, jefa de Pediatría presentará el nuevo protocolo.'], answer: 0, why: '«La doctora Soto» no lleva comas (especificativa); «jefa de Pediatría» es una aposición explicativa: entre comas.', en: 'Dr Soto, head of Paediatrics, will present the new protocol.' },
            { prompt: '¿Qué versión es correcta?', options: ['El aparcamiento estará cerrado en agosto, por tanto recomendamos venir en autobús.', 'El aparcamiento estará cerrado en agosto; por tanto, recomendamos venir en autobús.', 'El aparcamiento estará cerrado en agosto por tanto, recomendamos venir en autobús.'], answer: 1, why: '«Por tanto» une dos oraciones: punto y coma delante y coma detrás.', en: 'The car park will be closed in August, so we recommend coming by bus.' },
            { prompt: '¿Qué versión es correcta?', options: ['El Servicio de Urgencias, (SU) amplía su plantilla.', 'El Servicio de Urgencias (SU) amplía su plantilla.', 'El Servicio de Urgencias ( SU ) amplía su plantilla.'], answer: 1, why: 'Sigla entre paréntesis, sin espacios por dentro y sin coma entre sujeto y verbo.', en: 'The Emergency Department is taking on more staff.' },
          ] },
        ] },
        { title: 'Ampliación · Puntuación fina · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Tres detalles finos. **1.** La puntuación de la oración principal va **después** de la raya o el paréntesis de cierre: «Llegó en marzo —tarde, como siempre—, así que perdió la plaza». **2.** Las conjunciones **aunque, porque, así que** no llevan coma detrás: la coma va, si hace falta, al final de la subordinada antepuesta («Aunque revisamos el texto, quedaron errores»). **3.** Sí puede ir coma ante «y» cuando la «y» no cierra la serie, sino que abre otra oración: «Compramos libros, cuadernos y lápices, y los niños lo agradecieron». Y en cuanto al estilo: las rayas **destacan** un comentario; los paréntesis lo **rebajan** a dato marginal.', en: 'For strong students or spare time. The main sentence’s punctuation goes after the closing dash or bracket. Aunque, porque and así que take no comma after them. A comma before y is fine when y starts a new clause rather than closing the list. Stylistically, dashes highlight a comment, while brackets play it down as a side note.' },
          { kind: 'choice', title: 'Detalles finos · Fine points', items: [
            { prompt: '¿Qué versión es correcta?', options: ['Llegó en marzo —tarde, como siempre—, así que perdió la plaza.', 'Llegó en marzo, —tarde, como siempre— así que perdió la plaza.', 'Llegó en marzo —tarde, como siempre,— así que perdió la plaza.'], answer: 0, why: 'La coma de la oración principal va después de la raya de cierre.', en: 'The main sentence’s comma goes after the closing dash.' },
            { prompt: '¿Qué versión es correcta?', options: ['Aunque revisamos el texto, quedaron errores.', 'Aunque revisamos el texto quedaron, errores.', 'Aunque, revisamos el texto, quedaron errores.'], answer: 0, why: '«Aunque» no lleva coma detrás; la coma cierra la subordinada antepuesta.', en: 'No comma after aunque; the comma closes the fronted clause.' },
            { prompt: '¿Qué versión es la más clara?', options: ['Compramos libros, cuadernos y lápices y los niños lo agradecieron.', 'Compramos libros, cuadernos, y lápices, y los niños lo agradecieron.', 'Compramos libros, cuadernos y lápices, y los niños lo agradecieron.'], answer: 2, why: 'La segunda «y» abre otra oración: la coma evita leer «lápices y los niños» como parte de la serie. Dentro de la serie, ninguna coma ante «y».', en: 'The comma before the second y avoids reading “the children” as part of the list.' },
            { context: 'Una periodista quiere destacar su propio comentario.', prompt: '«El alcalde, como era de esperar, no asistió». ¿Qué versión lo destaca más?', options: ['El alcalde (como era de esperar) no asistió.', 'El alcalde —como era de esperar— no asistió.', 'El alcalde, como era de esperar no asistió.'], answer: 1, why: 'Las rayas destacan el comentario; el paréntesis lo presentaría como dato marginal. La tercera no cierra el inciso.', en: 'Dashes highlight the comment; brackets would play it down.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca un párrafo de prensa en español y explica cada raya, cada paréntesis y cada coma de inciso que encuentra.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 198 · Estilo formal: impersonalidad, cortesía y precisión', text: 'Ya sabes puntuar aposiciones, vocativos, conectores e incisos según la norma de la RAE y la ASALE. La clase 198 da el siguiente paso en el texto formal: la impersonalidad, la cortesía y la precisión. Es el paso natural: después de cuidar la forma de tus frases, cuidas su tono y su registro.', en: 'You can now punctuate appositions, vocatives, connectors and asides according to the official rules. Class 198 takes formal writing a step further: impersonal constructions, politeness and precision. It is the natural next step: having polished the shape of your sentences, you now work on their tone and register.', href: '/gramatica/estilo-formal-impersonalidad-cortesia-y-precision', label: 'Ir a la clase 198' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué “Los alumnos que llegaron tarde, no entraron” es incorrecta, y “Los alumnos, como sabes, no entraron” es correcta?». Respuesta esperada: en la primera, una sola coma separa sujeto y verbo; en la segunda, dos comas abren y cierran un inciso. Tarea: el correo de Escribir.' },
        ] },
      ],
    },
  ],
};
