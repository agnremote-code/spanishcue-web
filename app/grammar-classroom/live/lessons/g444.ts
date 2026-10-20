import type { LiveLesson } from '../types';

/**
 * Lesson 444 · B2 · Referentes abstractos: lo cual, lo que, aquello que (course unit G144).
 * One scene runs through the class: the siblings Elena and Raúl Duarte run Casa Robledal,
 * a rural guesthouse in the sierra de Albarracín (Teruel). A hiking group led by Gonzalo
 * has just left after a difficult weekend: the boiler broke down on Saturday morning and
 * a guest, Marta Iglesias, posted a three-star review. Explorar: Sunday night, Elena and
 * Raúl in the kitchen. Escuchar: Elena's voicemail to Raúl on Monday (es-ES-ElviraNeural).
 * Escribir: Elena's public reply to the review (usted). Everyone else uses tú.
 * Builds on G113 (class 413: lo que / lo de / lo + adjective at B1) and G112 (el cual with a
 * noun). Content: relative with a whole clause as antecedent, «…, lo que / lo cual…» (only
 * after a comma or pause; lo cual more formal, frequent in writing); never «que» alone or
 * «el cual» for a clause; lo cual is never a free relative (*Lo cual dijiste); preposition +
 * lo que / lo cual (por lo que, con lo cual = consequence; a lo que, de lo que, para lo
 * cual), and free relative with a preposition (con lo que dijo, de lo que quería hablarte);
 * lo que + indicative (known) / subjunctive (any, still open: Haz lo que quieras), todo lo
 * que, lo que sea; lo + adjective / adverb + que, emphatic, with agreement (lo cansados que
 * estaban, lo bien que canta) — deepened among other intensifiers in class 192 (C1);
 * aquello que / aquello de (distance in time, formal register: aquello que necesiten),
 * eso de que + a claim (often with doubt). Ampliación: más / menos de lo que, para lo cual,
 * exclamative «¡Con lo que…!». Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 444,
  level: 'B2',
  title: 'Referentes abstractos: lo cual, lo que, aquello que',
  subtitle: 'Comentar hechos enteros, encadenar consecuencias y hablar de ideas con lo que, lo cual, por lo que, aquello de y lo difícil que es.',
  legend: [
    { tone: 'orange', label: ', LO QUE · , LO CUAL · retoma toda la frase anterior (which, and that…)' },
    { tone: 'violet', label: 'LO QUE · sin antecedente: la cosa que (what, whatever)' },
    { tone: 'teal', label: 'AQUELLO QUE · AQUELLO DE · ESO DE QUE · ideas lejanas o citadas' },
    { tone: 'blue', label: 'LO + ADJETIVO / ADVERBIO + QUE · énfasis (how difficult it is)' },
  ],
  optionNotes: {
    'lo cual': '«Lo cual» solo retoma una frase anterior, tras una coma, y tiene su propia función en la frase que sigue («…, lo cual nos molestó»). Sin antecedente va **lo que**; para unir una consecuencia con su propio sujeto, **por lo que** o **con lo cual**.',
    'que': '«Que» solo no puede retomar una frase entera: necesita un nombre justo antes. Para toda la frase, **lo que** o **lo cual**.',
    'el cual': '«El cual» retoma un nombre masculino (el técnico, el retraso). Para una frase entera, **lo cual**.',
    'la cual': '«La cual» retoma un nombre femenino. Para un hecho entero, **lo cual**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Ideas sin nombre y frases enteras', coach: '¿A qué se refiere «lo»? What does “lo” point to?',
      steps: [
        { title: 'Un fin de semana complicado · A difficult weekend', blocks: [
          { kind: 'lead', text: 'Elena y Raúl Duarte son hermanos y llevan Casa Robledal, una casa rural en la sierra de Albarracín. Este fin de semana han tenido un grupo de veinte senderistas, y el sábado por la mañana se rompió la caldera. En la clase 113 usaste **lo que** para hablar de una cosa sin nombre. Hoy vas más lejos: **lo que** y **lo cual** también pueden retomar una frase entera, como «y eso».', en: 'Elena and Raúl Duarte are siblings who run Casa Robledal, a rural guesthouse in the sierra de Albarracín. This weekend they hosted a group of twenty hikers, and on Saturday morning the boiler broke down. In class 113 you used lo que for a thing with no name. Today you go further: lo que and lo cual can also refer back to a whole sentence, like “and that”, the way English uses “which” after a comma.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno explica a qué se refiere «lo que» en cada una: ¿a una cosa sin nombre o a todo lo que pasó antes?', self: 'Lee las dos frases en voz alta. ¿A qué se refiere «lo que» en cada una? (A thing with no name, or everything said before?)' } },
          { kind: 'compare', title: 'Dos «lo que» distintos · Two different “lo que”', columns: [
            { tone: 'violet', label: 'SIN ANTECEDENTE · la cosa que', sentence: '[[Lo que|violet]] más valoran los clientes es el silencio.', idea: 'No hay nada antes: «lo que» = la cosa que (clase 113).', en: 'What guests value most is the silence: lo que contains its own antecedent and means “the thing that”.' },
            { tone: 'orange', label: 'RETOMA UNA FRASE · y eso', sentence: 'Se rompió la caldera, [[lo que|orange]] nos dejó sin agua caliente.', idea: 'Después de la coma, «lo que» = el hecho de que se rompiera la caldera.', en: 'The boiler broke down, which left us without hot water: here lo que sums up the whole previous clause.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El grupo llegó con dos horas de retraso, lo que complicó la cena.» ¿Qué complicó la cena?', options: ['El grupo.', 'Que el grupo llegara con retraso.', 'La cena misma.'], answer: 1, why: 'Tras la coma, «lo que» retoma todo el hecho anterior: el retraso del grupo.', en: 'What complicated dinner? After the comma, lo que points back to the whole event.' },
            { prompt: 'En «Raúl preparó lo que pidieron los senderistas», «lo que» significa…', options: ['y eso', 'the thing(s) that / what', 'everything said before'], answer: 1, why: 'No hay frase antes que retomar: es «lo que» sin antecedente, la cosa que.', en: 'Raúl made what the hikers asked for.' },
          ] },
        ] },
        { title: '«…, lo que» y «…, lo cual» · Commenting on a whole fact', mascot: '/brand/mascot/studying.webp', coach: 'Primero la coma. Comma first.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ANTECEDENTE ORACIONAL · , LO QUE / , LO CUAL', question: '¿Qué consecuencia o comentario añades a lo que acabas de decir?', en: 'After a full statement, a comma plus lo que or lo cual adds a comment or a consequence about the whole fact, much like English “which” in “He was late, which annoyed us”.', formula: ['frase completa + , + lo que / lo cual + verbo (3.ª persona singular)', 'Se rompió la caldera, lo que / lo cual nos dejó sin agua caliente.'],
            meaning: 'Cuando quieres comentar **todo un hecho** (no una persona ni una cosa), usas el neutro: **lo que** o **lo cual**, siempre después de una **coma** al escribir o de una pausa al hablar. Las dos formas significan lo mismo; **lo cual** es más formal y muy frecuente por escrito, y **lo que** es la opción más habitual en la conversación. Cuando hace de sujeto, el verbo va en tercera persona del singular, como con «eso».',
            examples: [
              { es: 'El técnico no vino hasta el mediodía, [[lo cual|orange]] nos obligó a calentar agua en ollas.', en: 'The technician didn’t come until midday, which forced us to heat water in pots.' },
              { es: 'Gonzalo no se quejó en ningún momento, [[lo que|orange]] dice mucho de él.', en: 'Gonzalo didn’t complain once, which says a lot about him.' },
              { es: 'La casa está a cuarenta minutos del pueblo, [[lo cual|orange]] para algunos es una ventaja.', en: 'The house is forty minutes from the village, which some people see as an advantage.' },
            ] },
          { kind: 'table', title: 'De dos frases a una · From two sentences to one', head: ['Dos frases', 'Una frase', 'Registro (register)'], rows: [
            ['Se fue la luz. Eso nos obligó a cenar con velas.', 'Se fue la luz, [[lo que|orange]] nos obligó a cenar con velas.', 'neutro; muy frecuente al hablar'],
            ['La ruta duró nueve horas. Eso agotó a todo el grupo.', 'La ruta duró nueve horas, [[lo cual|orange]] agotó a todo el grupo.', 'más formal; muy frecuente por escrito'],
            ['Marta solo puso tres estrellas. Eso es comprensible.', 'Marta solo puso tres estrellas, [[lo cual|orange]] es comprensible.', 'comentario o valoración del hecho'],
          ], note: 'Con un **nombre** antes, el relativo concuerda con él (clase 112): «la caldera, **que / la cual** tiene veinte años». Con **un hecho entero**, siempre neutro: «…, **lo que / lo cual** nos dejó sin agua».' },
          { kind: 'decide', title: '¿Qué relativo uso tras la coma? · Which relative after the comma?', steps: [
            { q: '¿Retomas un hecho entero (todo lo que acabas de decir)?', yes: 'Usa **, lo que** o **, lo cual**: «Se rompió la caldera, lo cual nos dejó sin agua».', no: 'next' },
            { q: '¿Retomas un nombre concreto (la caldera, el técnico)?', yes: 'Usa **que** o **el cual / la cual / los cuales / las cuales**: «la caldera, que tiene veinte años».', no: 'Hablas de una cosa sin nombre y sin antecedente: **lo que** (nunca «lo cual»). «Lo que necesitamos es una caldera nueva».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Llovió toda la noche, ___ dejó los caminos llenos de barro.', options: ['lo cual', 'que', 'el cual'], answer: 0, why: 'Retomas todo el hecho (que lloviera toda la noche): neutro, **lo cual**.', en: 'It rained all night, which left the paths full of mud.' },
            { prompt: 'Cambiamos la caldera, ___ tenía veinte años.', options: ['lo que', 'lo cual', 'que'], answer: 2, why: 'Aquí retomas un nombre (la caldera tenía veinte años): **que** o «la cual», no el neutro.', en: 'We replaced the boiler, which was twenty years old.' },
          ] },
        ] },
        { title: 'Con preposición: por lo que, con lo cual… · With a preposition', mascot: '/brand/mascot/standing.webp', coach: 'La preposición va delante. The preposition goes first.', blocks: [
          { kind: 'lead', text: 'El neutro también puede llevar delante una preposición. Así encadenas consecuencias y reacciones sin empezar una frase nueva. La preposición depende del significado o del verbo que viene después (responder **a**, avisar **de**).', en: 'The neuter relative can also follow a preposition. This lets you chain consequences and reactions without starting a new sentence. The preposition depends on the meaning or on the verb that follows (responder a, avisar de).' },
          { kind: 'table', title: 'Preposición + lo que / lo cual', head: ['Forma', 'Valor (meaning)', 'Ejemplo'], rows: [
            ['[[por lo que|orange]] / [[por lo cual|orange]]', 'consecuencia: «por esa razón» (so, which is why)', 'El técnico no contestaba, por lo que llamamos a otro.'],
            ['[[con lo que|orange]] / [[con lo cual|orange]]', 'consecuencia, muy frecuente al hablar (so, which means)', 'Perdimos la llave del garaje, con lo cual tuvimos que esperar fuera.'],
            ['[[a lo que|orange]] / [[a lo cual|orange]]', 'reacción: responder, contestar a algo (to which)', 'Le ofrecimos un descuento, a lo que respondió que no hacía falta.'],
            ['[[de lo que|orange]] / [[de lo cual|orange]]', 'el verbo pide «de»: avisar de, darse cuenta de', 'Cortaron el agua del pueblo, de lo cual nadie nos avisó.'],
          ], note: 'Las dos formas son correctas en todas las filas; con «lo cual» el texto suena más formal.' },
          { kind: 'concept', tone: 'violet', label: 'SIN ANTECEDENTE · PREPOSICIÓN + LO QUE', question: '¿El verbo pide preposición y no hay antecedente?', en: 'When there is no antecedent and the verb needs a preposition (estar de acuerdo con, hablar de, pensar en), the preposition goes in front of lo que. Lo cual is impossible here.', formula: ['preposición + lo que (nunca «lo cual»)', 'estar de acuerdo con lo que… · hablar de lo que… · pensar en lo que…'],
            meaning: 'Si no retomas ninguna frase anterior, solo vale **lo que**, y la preposición del verbo va delante: «No estoy de acuerdo **con lo que** dijo». Ojo: sin coma, «**por lo que**» puede significar otra cosa: «**Por lo que** dice Marta, el problema fue el agua» = según lo que dice Marta.',
            examples: [
              { es: 'Raúl no está de acuerdo [[con lo que|violet]] dice la reseña.', en: 'Raúl doesn’t agree with what the review says.' },
              { es: 'Eso es justo [[de lo que|violet]] quería hablarte.', en: 'That’s exactly what I wanted to talk to you about.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hacía mucho viento en la cumbre, ___ el grupo volvió antes de lo previsto.', options: ['de lo que', 'lo cual', 'por lo que'], answer: 2, why: 'Consecuencia del hecho anterior: **por lo que** (por esa razón). «Lo cual» solo no funciona, porque no tiene función en «el grupo volvió».', en: 'It was very windy at the top, so the group came back earlier than planned.' },
            { prompt: 'Elena le preguntó a Gonzalo si volverían, ___ él contestó que sí.', options: ['lo que', 'con lo que', 'a lo que'], answer: 2, why: 'Contestar **a** algo: la reacción a la pregunta va con **a lo que**.', en: 'Elena asked Gonzalo whether they would come back, to which he replied yes.' },
          ] },
        ] },
        { title: 'Lo que + modo · Lo difícil que es', mascot: '/brand/mascot/speaking.webp', coach: '¿Conocido o abierto? Known or open?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'LO QUE + INDICATIVO O SUBJUNTIVO', question: '¿Sabes ya qué es, o puede ser cualquier cosa?', en: 'With indicative, lo que refers to something specific and known; with subjunctive, it means “whatever”: anything at all, not yet decided. This is the same choice you made with relatives in class 100.', formula: ['lo que + indicativo: algo concreto, conocido', 'lo que + subjuntivo: cualquier cosa, todavía abierta', 'todo lo que · lo que sea'],
            meaning: 'Con **indicativo**, «lo que» señala algo concreto: «Pidió **lo que** quería» (sabemos qué era). Con **subjuntivo**, deja la elección abierta: «Pide **lo que** quieras» (cualquier cosa). Es la misma lógica de las relativas de la clase 100. **Todo lo que** = everything that; **lo que sea** = whatever, anything.',
            examples: [
              { es: 'Para el desayuno, pide [[lo que quieras|violet]]: hay pan, fruta y huevos.', en: 'For breakfast, order whatever you like: there’s bread, fruit and eggs.' },
              { es: 'Raúl compró [[todo lo que|violet]] le pidió Gonzalo.', en: 'Raúl bought everything Gonzalo asked him for.' },
              { es: '[[Lo que|violet]] decidas sobre la caldera me parecerá bien.', en: 'Whatever you decide about the boiler will be fine with me.' },
            ] },
          { kind: 'concept', tone: 'blue', label: 'ÉNFASIS · LO + ADJETIVO / ADVERBIO + QUE', question: '¿Quieres subrayar cuánto?', en: 'Lo + adjective or adverb + que + verb stresses the degree, like English “how tired they were”. Unlike lo bueno, here the adjective agrees with the noun it describes.', formula: ['(no) saber / imaginarse / ver / sorprender + lo + adjetivo + que + verbo', 'lo + adverbio (bien, mal, mucho, tarde) + que + verbo'],
            meaning: 'Esta estructura destaca la intensidad: «No sabes **lo cansados que** estaban» = qué cansados estaban. Fíjate en la diferencia con «lo bueno» (clase 113): allí el adjetivo es neutro y no cambia; aquí **concuerda** con el nombre: lo cansad**os** que estaban los senderistas, lo bonit**a** que está la sierra. Con adverbio, no hay concordancia: lo bien que, lo mucho que. En la clase 192 lo amplías con otros intensificadores.',
            examples: [
              { es: 'No te imaginas [[lo cansados que|blue]] llegaron los senderistas.', en: 'You can’t imagine how tired the hikers were when they arrived.' },
              { es: 'Me sorprendió [[lo bien que|blue]] se lo tomaron todos.', en: 'I was surprised by how well everyone took it.' },
              { es: 'Ya verás [[lo bonita que|blue]] está la sierra en octubre.', en: 'You’ll see how lovely the sierra looks in October.' },
            ] },
          { kind: 'compare', title: '¿Lo bueno o lo buenas que…? · Neuter or agreeing?', columns: [
            { tone: 'violet', label: 'LO + ADJETIVO (clase 113)', sentence: 'Lo bueno es que la cena salió perfecta.', idea: 'Una parte del tema; el adjetivo no cambia.', en: 'The good thing is that dinner turned out perfectly: lo bueno names an aspect and never changes form.' },
            { tone: 'blue', label: 'LO + ADJETIVO + QUE (hoy)', sentence: '¡No sabes [[lo buenas que|blue]] estaban las migas!', idea: 'Intensidad; el adjetivo concuerda con «las migas».', en: 'You’ve no idea how good the migas were: here the adjective agrees with the noun because it describes it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando termines la ruta, haz ___ te apetezca: piscina, siesta o nada.', options: ['el que', 'lo que', 'lo cual'], answer: 1, why: 'Cualquier cosa, sin antecedente: **lo que** + subjuntivo (te apetezca).', en: 'When you finish the hike, do whatever you feel like: pool, nap or nothing.' },
            { prompt: 'No sabes lo ___ que estaba Elena el sábado.', options: ['preocupado', 'preocupada', 'preocupadas'], answer: 1, why: 'Con «lo + adjetivo + que» el adjetivo concuerda con el sujeto: Elena → preocupada.', en: 'You’ve no idea how worried Elena was on Saturday.' },
          ] },
        ] },
        { title: 'Aquello que, aquello de, eso de que · Distant and quoted ideas', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lejos en el tiempo o en la actitud. Distant in time or attitude.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'AQUELLO · ESO DE QUE', question: '¿La idea está lejos en el tiempo, es formal o la citas con distancia?', en: 'Aquello que / aquello de point to an idea that is distant in time or memory, or sound more formal than lo que. Eso de que + a statement quotes a claim, often with some doubt or irony.', formula: ['aquello que + verbo: aquello que nos dijo el técnico', 'aquello de + nombre / infinitivo / que + frase: aquello de cambiar la caldera', 'eso de que + frase: eso de que en la sierra siempre hace frío'],
            meaning: '**Aquello** es el neutro de la distancia: sirve para recordar algo lejano («¿Te acuerdas de **aquello de** abrir un restaurante?») y, en textos formales, sustituye a «lo que»: «Pueden solicitar **aquello que** necesiten». **Eso de que** presenta una idea que alguien dice o que se repite; a menudo el hablante no la cree del todo: «No me creo **eso de que** una mala reseña hunde un negocio». Es como «lo de» (clase 113), pero con una frase completa detrás.',
            examples: [
              { es: '[[Aquello que|teal]] nos dijo el técnico hace dos años era verdad.', en: 'What the technician told us two years ago was true.' },
              { es: 'Ya sabes, [[aquello de que|teal]] lo barato sale caro.', en: 'You know, that old saying: buy cheap, buy twice.' },
              { es: '[[Eso de que|teal]] en la sierra no hay nada que hacer es un tópico.', en: 'This idea that there’s nothing to do in the sierra is a cliché.' },
            ], note: 'Si valoras la idea con un verbo de emoción, la frase puede ir en subjuntivo, como tras «me molesta que»: «No me gusta **eso de que** nos **cobren** la limpieza aparte».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Te acuerdas de ___ de vender la casa? Menos mal que no lo hicimos.', options: ['aquella', 'aquel', 'aquello'], answer: 2, why: 'Una idea lejana sin nombre, con «de» + infinitivo: **aquello** (neutro).', en: 'Do you remember that idea of selling the house? Good thing we didn’t.' },
            { prompt: 'No me creo ___ que los clientes solo leen las malas reseñas.', options: ['lo cual', 'eso de', 'eso'], answer: 1, why: 'Citas una idea que circula, con distancia: **eso de que** + frase.', en: 'I don’t buy this idea that customers only read the bad reviews.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Mira la coma y el antecedente. Check the comma and the antecedent.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿hay antecedente?, ¿hay coma?, ¿concuerda el adjetivo? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla antes de ver la corrección. (Think about what is wrong before you look.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Lo cual me preocupa es la caldera.', right: 'Lo que me preocupa es la caldera.', why: '«Lo cual» necesita una frase antes; sin antecedente («the thing that») solo vale **lo que**.' },
            { wrong: 'Los senderistas no se quejaron, que nos ayudó mucho.', right: 'Los senderistas no se quejaron, lo que (lo cual) nos ayudó mucho.', why: '«Que» solo necesita un nombre justo antes. Aquí retomas un hecho (que no se quejaran): neutro, **lo que** o **lo cual**.' },
            { wrong: 'Llegaron tarde lo cual nos molestó.', right: 'Llegaron tarde, lo cual nos molestó.', why: '«Lo cual» y «lo que» con antecedente oracional van siempre tras coma (o pausa al hablar).' },
            { wrong: 'No sabes lo cansado que estaban los senderistas.', right: 'No sabes lo cansados que estaban los senderistas.', why: 'En «lo + adjetivo + que», el adjetivo concuerda con el nombre: los senderistas → cansados.' },
            { wrong: 'Haz lo cual quieras con la habitación.', right: 'Haz lo que quieras con la habitación.', why: '«Whatever you like» es **lo que** + subjuntivo; «lo cual» nunca va sin antecedente.' },
            { wrong: '¿Te acuerdas de aquel de abrir un restaurante?', right: '¿Te acuerdas de aquello de abrir un restaurante?', why: 'Para una idea sin nombre, el demostrativo neutro: **aquello**.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ más me gustó del fin de semana fue la cena del sábado.', options: ['Lo cual', 'Lo que', 'Aquel'], answer: 1, why: 'Sin antecedente: **lo que**. «Lo cual» necesita una frase antes.', en: 'What I liked most about the weekend was Saturday’s dinner.' },
            { prompt: 'Gonzalo se ofreció a fregar, ___ no esperábamos para nada.', options: ['la cual', 'que', 'lo cual'], answer: 2, why: 'No esperábamos el hecho entero (que se ofreciera a fregar): **lo cual**. «Que» y «la cual» necesitan un nombre antes.', en: 'Gonzalo offered to do the washing-up, which we didn’t expect at all.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta un pequeño problema reciente en tres frases encadenadas: un hecho, «…, lo que…» y «…, por lo que…». Tú preguntas: «¿Por qué no “que”?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Domingo por la noche en Casa Robledal', coach: 'Toca las formas marcadas. Tap the marked forms.',
      steps: [
        { title: 'El balance del fin de semana · Taking stock of the weekend', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Raúl. Después tu alumno toca cada forma marcada y explica a qué se refiere.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada: ¿retoma una frase, es una idea sin antecedente, una idea lejana o un énfasis?' } },
          { kind: 'explore', title: 'Después de la tormenta', setting: 'Domingo, diez de la noche, en la cocina de Casa Robledal. El grupo de Gonzalo se fue esta tarde. Elena y Raúl hacen balance. (Sunday, 10 p.m., in the kitchen at Casa Robledal. Gonzalo’s group left this afternoon. Elena and Raúl take stock.)', lines: [
            { who: 'Raúl', text: 'Bueno, ya se han ido. ¡Menudo fin de semana! El sábado se rompió la caldera, [[lo cual|orange]] nos dejó sin agua caliente justo cuando volvían de la ruta.', en: 'Well, they’ve gone. What a weekend! On Saturday the boiler broke down, which left us without hot water just as they were coming back from the hike.' },
            { who: 'Elena', text: 'Y el técnico no contestaba al teléfono, [[por lo que|orange]] tuvimos que calentar agua en ollas para veinte personas.', en: 'And the technician wasn’t answering the phone, so we had to heat water in pots for twenty people.' },
            { who: 'Raúl', text: 'No sabes [[lo nervioso que|blue]] me puse. Pensaba que se iban a ir a otro alojamiento.', en: 'You’ve no idea how stressed I got. I thought they were going to leave for somewhere else.' },
            { who: 'Elena', text: 'Pues ya viste [[lo bien que|blue]] se lo tomaron. Gonzalo dijo que en la montaña había vivido cosas peores.', en: 'Well, you saw how well they took it. Gonzalo said he’d been through worse in the mountains.' },
            { who: 'Raúl', text: 'Sí, pero Marta Iglesias ha puesto una reseña de tres estrellas, [[lo que|orange]] nos baja bastante la media.', en: 'Yes, but Marta Iglesias has posted a three-star review, which brings our average down quite a bit.' },
            { who: 'Elena', text: '¿Y qué dice? ¿Que la casa es fea?', en: 'And what does she say? That the house is ugly?' },
            { who: 'Raúl', text: 'No, que la casa es preciosa y la cena estaba buenísima, pero que el sábado no hubo agua caliente hasta las once, [[con lo cual|orange]] no pudo ducharse antes de irse.', en: 'No, that the house is lovely and dinner was delicious, but that on Saturday there was no hot water until eleven, so she couldn’t shower before leaving.' },
            { who: 'Elena', text: 'Tiene razón. ¿Te acuerdas de [[aquello de|teal]] cambiar la caldera antes del invierno? Lo dijimos hace dos años.', en: 'She has a point. Remember that plan to replace the boiler before winter? We said it two years ago.' },
            { who: 'Raúl', text: 'Y de [[aquello que|teal]] nos dijo el técnico: que tenía los días contados. No le hicimos caso.', en: 'And what the technician told us back then: that its days were numbered. We didn’t listen.' },
            { who: 'Elena', text: 'Pues contesto yo a la reseña. Le pido disculpas, le explico [[todo lo que|violet]] pasó y le ofrezco un descuento.', en: 'Right, I’ll answer the review. I’ll apologise, explain everything that happened and offer her a discount.' },
            { who: 'Raúl', text: 'Bien. Y no te creas [[eso de que|teal]] una mala reseña hunde un negocio: la gente lee también las respuestas.', en: 'Good. And don’t buy the idea that one bad review sinks a business: people read the replies too.' },
            { who: 'Elena', text: 'Ya. Tú encárgate de los presupuestos de la caldera y elige [[lo que quieras|violet]], pero que sea fiable. Y eso es justo [[de lo que|violet]] quería hablarte: vamos a necesitar un préstamo.', en: 'I know. You deal with the quotes for the boiler and choose whatever you like, as long as it’s reliable. And that’s exactly what I wanted to talk to you about: we’re going to need a loan.' },
          ], notes: {
            'lo cual': 'Tras la coma, **lo cual** retoma todo el hecho: que se rompiera la caldera. Es formal, pero también se oye al hablar, sobre todo al contar.',
            'por lo que': '**Por lo que** = por esa razón. Introduce la consecuencia del hecho anterior (el técnico no contestaba).',
            'lo nervioso que': '**Lo** + adjetivo + **que**: énfasis. «Nervioso» concuerda con Raúl, que habla de sí mismo.',
            'lo bien que': 'Con adverbio (bien) no hay concordancia: **lo bien que** se lo tomaron = how well they took it.',
            'lo que': 'Aquí **lo que** retoma el hecho de la reseña de tres estrellas, no la reseña: por eso es neutro y va tras coma.',
            'con lo cual': '**Con lo cual** = así que. Muy frecuente en la conversación, sobre todo en España, para sacar una consecuencia.',
            'aquello de': '**Aquello de** + infinitivo: un plan del pasado lejano, que los dos recuerdan. «Lo de cambiar la caldera» sería más cercano.',
            'aquello que': '**Aquello que** + verbo: algo que dijo el técnico hace tiempo. El demostrativo subraya la distancia en el tiempo.',
            'todo lo que': '**Todo lo que** + indicativo: todo lo que pasó, hechos concretos y conocidos.',
            'eso de que': '**Eso de que** + frase: Raúl cita una idea que se repite y muestra que no la cree.',
            'lo que quieras': '**Lo que** + subjuntivo: cualquier opción. Elena deja la decisión abierta, con una condición: «que sea fiable».',
            'de lo que': 'Hablar **de** algo: la preposición va delante. No hay antecedente, por eso solo vale «lo que», no «lo cual».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué tuvieron que calentar agua en ollas?', options: ['Porque el técnico no contestaba.', 'Porque los senderistas lo pidieron.', 'Porque se fue la luz.'], answer: 0, why: '«El técnico no contestaba al teléfono, por lo que tuvimos que calentar agua».', en: 'Why did they have to heat water in pots?' },
            { prompt: '¿Qué critica Marta en su reseña?', options: ['La casa y las habitaciones.', 'La cena.', 'Que no hubo agua caliente el sábado por la mañana.'], answer: 2, why: 'Dice que la casa es preciosa y la cena buenísima, pero que no hubo agua caliente hasta las once.', en: 'What does Marta criticise in her review?' },
            { prompt: '¿Qué tienen que hacer los hermanos ahora?', options: ['Abrir un restaurante.', 'Contestar la reseña y cambiar la caldera.', 'Vender la casa.'], answer: 1, why: 'Elena contesta la reseña; Raúl se encarga de los presupuestos de la caldera (y del préstamo).', en: 'What do the siblings have to do now?' },
          ] },
        ] },
        { title: '¿Una frase o un nombre? · A clause or a noun?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: 'Las notas de Elena · Elena’s notes', categories: [
            { id: 'frase', label: 'RETOMA UN HECHO · , lo que / , lo cual', tone: 'orange' },
            { id: 'nombre', label: 'RETOMA UN NOMBRE · que / el cual / la cual', tone: 'teal' },
          ], items: [
            { text: 'La caldera se rompió el sábado, ___ nos dejó sin agua caliente.', answer: 'frase', why: 'Lo que dejó sin agua fue la avería, el hecho entero: neutro.' },
            { text: 'Cambiaremos la caldera, ___ tiene ya veinte años.', answer: 'nombre', why: 'La caldera tiene veinte años: retomas un nombre femenino (que / la cual).' },
            { text: 'Marta puso tres estrellas, ___ es comprensible.', answer: 'frase', why: 'Lo comprensible es que pusiera tres estrellas: el hecho.' },
            { text: 'Llamamos a Fermín, el técnico, ___ vino al mediodía.', answer: 'nombre', why: 'Vino Fermín: retomas una persona (que / el cual / quien).' },
            { text: 'El grupo se duchó por turnos sin protestar, ___ nos ayudó mucho.', answer: 'frase', why: 'Nos ayudó la actitud del grupo, el hecho entero: neutro.' },
            { text: 'Elena leyó la reseña de Marta, ___ era bastante dura.', answer: 'nombre', why: 'La reseña era dura: retomas un nombre (que / la cual).' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué fue lo último que se rompió en tu casa y qué consecuencias tuvo?». Tu alumno responde con una frase que encadena el hecho y «…, lo que…» o «…, por lo que…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Hecho, idea, distancia o énfasis. Fact, idea, distance or emphasis.',
      steps: [
        { title: 'El cuaderno de la casa · The guesthouse logbook', blocks: [
          { kind: 'choice', items: [
            { context: 'Elena apunta lo que pasó. (Elena logs what happened.)', prompt: 'La ruta del sábado duró nueve horas, ___ los senderistas llegaron agotados.', options: ['por lo que', 'lo cual', 'lo que'], answer: 0, why: 'Hace falta un conector de consecuencia: **por lo que**. «Lo cual» o «lo que» solos no tienen función en «los senderistas llegaron agotados».', en: 'Saturday’s hike lasted nine hours, so the hikers arrived exhausted.' },
            { context: 'Sobre la cena. (About dinner.)', prompt: 'Gonzalo pidió cenar a las nueve, ___ nos venía perfecto.', options: ['lo que', 'el cual', 'que'], answer: 0, why: 'Nos venía perfecto el hecho (cenar a las nueve): neutro, **lo que** (o «lo cual»).', en: 'Gonzalo asked to have dinner at nine, which suited us perfectly.' },
            { context: 'Un cartel en el comedor. (A sign in the dining room.)', prompt: 'Puedes tomar ___ quieras de la nevera de la entrada.', options: ['el que', 'lo que', 'lo cual'], answer: 1, why: 'Cualquier cosa, sin antecedente: **lo que** + subjuntivo.', en: 'Help yourself to whatever you like from the fridge by the entrance.' },
            { context: 'Raúl, al día siguiente. (Raúl, the next day.)', prompt: 'No te imaginas lo ___ que estaban los senderistas al llegar.', options: ['cansados', 'cansadas', 'cansado'], answer: 0, why: 'El adjetivo concuerda con «los senderistas»: cansados.', en: 'You can’t imagine how tired the hikers were when they arrived.' },
            { context: 'Elena recuerda un plan. (Elena remembers a plan.)', prompt: 'Raúl siempre recuerda ___ de abrir un restaurante en la casa, aunque nunca lo hicieron.', options: ['aquella', 'aquel', 'aquello'], answer: 2, why: 'Una idea sin nombre, lejana: el neutro **aquello**.', en: 'Raúl always remembers that idea of opening a restaurant in the house, though they never did.' },
          ] },
        ] },
        { title: '¿Qué hace «lo»? · What is “lo” doing?', blocks: [
          { kind: 'classify', title: 'Tres funciones · Three functions', categories: [
            { id: 'frase', label: ', LO QUE / LO CUAL · retoma un hecho', tone: 'orange' },
            { id: 'libre', label: 'LO QUE · sin antecedente', tone: 'violet' },
            { id: 'enfasis', label: 'LO + ADJ. / ADV. + QUE · énfasis', tone: 'blue' },
          ], items: [
            { text: 'Se fue la luz a las diez, lo que nos obligó a cenar con velas.', answer: 'frase', why: 'Tras la coma, «lo que» resume el hecho de que se fuera la luz.' },
            { text: 'Lo que más valoran los clientes es el silencio.', answer: 'libre', why: 'No retoma nada: «lo que» = la cosa que.' },
            { text: 'Me sorprendió lo rápido que subieron a la cumbre.', answer: 'enfasis', why: 'Lo + adjetivo + que: qué rápido subieron.' },
            { text: 'Llovió toda la noche, con lo cual el camino estaba lleno de barro.', answer: 'frase', why: '«Con lo cual» saca una consecuencia del hecho anterior.' },
            { text: 'Gonzalo compró todo lo que necesitaba el grupo.', answer: 'libre', why: '«Todo lo que» = everything that; no hay frase que retomar.' },
            { text: 'Ya verás lo bonita que está la sierra en otoño.', answer: 'enfasis', why: 'Énfasis; «bonita» concuerda con «la sierra».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Lo cual me dijo el técnico no me tranquilizó nada.', ok: false, options: ['El cual me dijo el técnico no me tranquilizó nada.', 'Lo cual que me dijo el técnico no me tranquilizó nada.', 'Lo que me dijo el técnico no me tranquilizó nada.'], answer: 2, why: 'Sin antecedente solo vale **lo que**. «Lo cual» necesita una frase antes y una coma.' },
            { sentence: 'La reserva llegó tarde, lo cual complicó los turnos de cocina.', ok: true, why: 'Correcta: tras la coma, «lo cual» retoma el hecho (que la reserva llegara tarde).' },
            { sentence: 'Faltaban dos habitaciones, que nos obligó a llamar a otra casa rural.', ok: false, options: ['Faltaban dos habitaciones, lo que nos obligó a llamar a otra casa rural.', 'Faltaban dos habitaciones, el que nos obligó a llamar a otra casa rural.', 'Faltaban dos habitaciones, las cuales nos obligó a llamar a otra casa rural.'], answer: 0, why: 'Nos obligó la falta de habitaciones, un hecho: **lo que** (o lo cual). «Que» solo no retoma una frase.' },
            { sentence: '¡No sabes lo bueno que estaban las migas!', ok: false, options: ['¡No sabes lo bueno que estaba las migas!', '¡No sabes lo buenas que estaban las migas!', '¡No sabes las buenas que estaban las migas!'], answer: 1, why: 'En «lo + adjetivo + que» el adjetivo concuerda con «las migas»: **lo buenas que**. El «lo» no cambia.' },
            { sentence: 'Eso de que la casa está encantada es una leyenda del pueblo.', ok: true, why: 'Correcta: «eso de que» + frase cita una idea que circula, con distancia.' },
          ] },
        ] },
        { title: 'Gonzalo escribe a Elena · Gonzalo texts Elena', blocks: [
          { kind: 'chat-fill', title: 'Mensajes del martes · Tuesday’s messages', lines: [
            { who: 'Gonzalo', text: 'Hola, Elena. Quería darte las gracias. Sé que lo de la caldera fue un lío, pero no sabes ___ que lo pasamos.', options: ['lo bien', 'lo mejor', 'lo bueno'], answer: 0, why: '«Pasarlo bien» lleva un adverbio: **lo bien que** lo pasamos.' },
            { who: 'Elena', text: '¡Qué alegría! Nosotros pasamos mucha vergüenza: el grupo se quedó sin agua caliente, ___ no nos había pasado nunca.', options: ['que', 'la cual', 'lo cual'], answer: 2, why: 'Retomas el hecho entero (quedarse sin agua caliente): **lo cual**.' },
            { who: 'Gonzalo', text: 'Tranquila. Por cierto, todo el grupo se acuerda de ___ que contaste sobre el molino abandonado.', options: ['aquello', 'aquella', 'lo cual'], answer: 0, why: 'Una historia sin nombrarla, recordada: **aquello que** + verbo.' },
            { who: 'Elena', text: 'Ja, ja. Para la próxima vez, pídeme ___ necesite el grupo: habitaciones, comidas, guía…', options: ['todo que', 'lo cual', 'lo que'], answer: 2, why: 'Cualquier cosa, sin antecedente: **lo que** + subjuntivo (necesite).' },
            { who: 'Gonzalo', text: 'Genial. Queremos volver en mayo, ___ te escribo ya para reservar.', options: ['por lo que', 'lo cual', 'de lo que'], answer: 0, why: 'Consecuencia: **por lo que** (por esa razón te escribo).' },
            { who: 'Elena', text: 'Perfecto. Te guardo las fechas y te mando el presupuesto esta semana.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['caldera,', 'Se', 'nos', 'la', 'cual', 'rompió', 'lo', 'preocupó'], accept: ['Se rompió la caldera, lo cual nos preocupó'], en: 'The boiler broke down, which worried us.' },
            { tiles: ['difícil', 'No', 'lo', 'sabes', 'es', 'que', 'encontrar', 'un', 'técnico'], accept: ['No sabes lo difícil que es encontrar un técnico'], en: 'You’ve no idea how hard it is to find a technician.' },
            { tiles: ['quieras', 'Elige', 'que', 'del', 'lo', 'menú'], accept: ['Elige lo que quieras del menú', 'Elige del menú lo que quieras'], en: 'Choose whatever you like from the menu.' },
            { tiles: ['noche,', 'Llovió', 'la', 'por', 'toda', 'lo', 'que', 'cancelamos', 'la', 'ruta'], accept: ['Llovió toda la noche, por lo que cancelamos la ruta'], en: 'It rained all night, so we cancelled the hike.' },
          ] },
        ] },
        { title: 'Une y transforma · Join and transform', blocks: [
          { kind: 'rewrite', title: 'De dos frases a una · From two sentences to one', items: [
            { prompt: 'El técnico llegó a las doce. Eso nos dejó sin agua caliente toda la mañana.', instruction: 'Une las dos frases con «, lo cual».', accept: ['El técnico llegó a las doce, lo cual nos dejó sin agua caliente toda la mañana'] },
            { prompt: 'Hacía mucho viento en la cumbre. Por eso el grupo volvió antes.', instruction: 'Une las dos frases con «, por lo que».', accept: ['Hacía mucho viento en la cumbre, por lo que el grupo volvió antes'] },
            { prompt: 'Es muy difícil llegar a la casa en invierno. ¡No te lo imaginas!', instruction: 'Una sola frase. Empieza: «No te imaginas lo…».', accept: ['No te imaginas lo difícil que es llegar a la casa en invierno'] },
            { prompt: 'Puedes pedir cualquier cosa del menú.', instruction: 'Usa «lo que» + subjuntivo de «querer». Empieza: «Puedes pedir…».', accept: ['Puedes pedir lo que quieras del menú', 'Puedes pedir del menú lo que quieras'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un viaje o un evento que salió regular: tres hechos encadenados con «, lo que», «, por lo que» y «, con lo cual», y un comentario final con «No te imaginas lo… que…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Elena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Lunes por la mañana · Monday morning', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿cómo se ha resuelto lo de la reseña?). Segunda escucha: tu alumno levanta la mano con cada forma que retoma un hecho (, lo cual · , con lo que · , por lo que). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Fíjate en cómo Elena encadena hechos y consecuencias. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'El audio de Elena', channel: 'MENSAJE DE VOZ · ELENA → RAÚL', src: '/audio/grammar-live/444.mp3',
            before: 'El lunes, Raúl está en Teruel pidiendo presupuestos. Elena le deja un mensaje de voz. ¿Qué noticias crees que le da sobre la reseña y la caldera? (On Monday Raúl is in Teruel getting quotes. Elena leaves him a voice message. What news do you think she gives him about the review and the boiler?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Elena quiere cerrar la casa en invierno.', 'La reseña está resuelta y ahora hay que decidir la caldera nueva.', 'Marta ha escrito otra reseña negativa.'], answer: 1, why: 'Marta ha subido la nota tras la respuesta de Elena; ahora toca elegir la caldera y pedir el préstamo.', en: 'The review issue has been sorted out; now they need to decide on the new boiler.' },
            details: [
              { prompt: '¿Qué hizo Marta después de leer la respuesta de Elena?', options: ['Subió la nota a cuatro estrellas.', 'Pidió el dinero de vuelta.', 'Reservó para mayo.'], answer: 0, why: '«Ha subido la nota a cuatro estrellas, con lo que ya estamos otra vez en nuestra media».', en: 'What did Marta do after reading Elena’s reply?' },
              { prompt: '¿Por qué hay que cambiar la caldera antes de diciembre?', options: ['Porque la vieja no tiene arreglo.', 'Porque el banco lo exige.', 'Porque Gonzalo vuelve en diciembre.'], answer: 0, why: '«Dice que la vieja no tiene arreglo, por lo que hay que cambiarla antes de diciembre».', en: 'Why does the boiler have to be replaced before December?' },
              { prompt: '¿Por qué el presupuesto más barato no le convence a Elena?', options: ['Porque no incluye la instalación.', 'Porque la caldera es más pequeña.', 'Porque es de una empresa desconocida.'], answer: 0, why: '«El más barato no incluye la instalación, lo cual al final lo hace más caro».', en: 'Why isn’t Elena convinced by the cheapest quote?' },
              { prompt: '¿Qué le pide Elena a Raúl?', options: ['Que pase por el banco y pregunte por el préstamo.', 'Que llame a Marta.', 'Que vuelva a casa enseguida.'], answer: 0, why: '«Pasa por el banco y pregunta por lo del préstamo».', en: 'What does Elena ask Raúl to do?' },
            ],
            transcript: 'Raúl, soy yo. Te dejo un audio porque no contestas. Ya he respondido a la reseña de Marta Iglesias: le he pedido disculpas y le he explicado [[todo lo que|violet]] pasó el sábado, [[lo cual|orange]] me parecía lo justo. Y escucha esto: esta mañana me ha escrito, muy amable, y ha subido la nota a cuatro estrellas, [[con lo que|orange]] ya estamos otra vez en nuestra media. No sabes [[lo contenta que|blue]] estoy. Ahora, lo de la caldera. Ha venido el técnico y dice que la vieja no tiene arreglo, [[por lo que|orange]] hay que cambiarla antes de diciembre. Me ha mandado dos presupuestos. El más barato no incluye la instalación, [[lo cual|orange]] al final lo hace más caro. Ya sabes, [[aquello de que|teal]] lo barato sale caro. Tú, que estás en Teruel, pasa por el banco y pregunta por lo del préstamo. Y luego haz [[lo que|violet]] te parezca mejor, que confío en ti. Llámame cuando salgas. Un beso.',
            reply: { teacher: 'Tú eres Elena. Tu alumno es Raúl y responde al audio: cuenta qué le han dicho en el banco con dos consecuencias encadenadas («…, por lo que…», «…, lo cual…») y una frase con «lo + adjetivo + que».', self: 'Responde a Elena en voz alta como Raúl: cuenta qué te han dicho en el banco y qué consecuencias tiene, con «…, por lo que…» y «…, lo cual…». (Answer aloud as Raúl.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hechos, consecuencias e ideas', coach: 'Cuenta, encadena y comenta. Tell, chain and comment.',
      steps: [
        { title: 'Tus historias y tus opiniones · Your stories and opinions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales o inventadas. Cuando tu alumno encadena dos frases sueltas, tú las repites unidas con «, lo que» o «, por lo que» y sigues con la repregunta.', self: 'Lee la pregunta y responde en voz alta. Intenta unir los hechos en vez de empezar frases nuevas. (Try to join the facts instead of starting new sentences.)' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta un viaje o un fin de semana en el que todo salió mal. · Tell me about a trip or weekend when everything went wrong.', followUps: ['¿Y qué consecuencias tuvo? (And what were the consequences?)', '¿Cómo lo resolviste? (How did you solve it?)', '¿Qué aprendiste? (What did you learn?)'], phrases: ['…, [[lo que|orange]] nos obligó a…', '…, [[lo cual|orange]] fue un desastre / una suerte.', '…, [[por lo que|orange]] tuvimos que…', '…, [[con lo cual|orange]]…'], hint: 'Un hecho, una coma y el comentario o la consecuencia: lo que, lo cual, por lo que, con lo cual.', example: 'Perdimos el último tren, lo que nos obligó a dormir en la estación. Hacía mucho frío, por lo que nadie durmió, con lo cual al día siguiente estábamos destrozados.', next: 'Ahora, algo que te sorprendió.' },
            { q: '¿Qué te sorprendió (para bien o para mal) la última vez que viajaste o cambiaste de trabajo? · What surprised you last time you travelled or changed jobs?', followUps: ['¿Por qué te sorprendió? (Why did it surprise you?)', '¿Se lo contaste a alguien? (Did you tell anyone?)'], phrases: ['Me sorprendió [[lo bien que|blue]]…', 'No te imaginas [[lo caros que|blue]] están…', 'No sabes [[lo amable que|blue]] era…'], hint: 'Lo + adjetivo + que: el adjetivo concuerda con el nombre (lo caros que están los pisos). Con adverbio, no cambia (lo bien que).', example: 'Me sorprendió lo amable que era la gente en el pueblo. Y no te imaginas lo caros que estaban los restaurantes del centro.', next: 'Ahora, tus planes antiguos.' },
            { q: '¿Hay algún plan o idea antigua que nunca hiciste? · Is there an old plan or idea you never carried out?', followUps: ['¿Por qué no lo hiciste? (Why didn’t you do it?)', '¿Todavía te gustaría? (Would you still like to?)'], phrases: ['¿Te acuerdas de [[aquello de|teal]]…?', '[[Aquello que|teal]] me dijo… era verdad.', 'Al final, [[lo que|violet]] pasó fue que…'], hint: 'Aquello de + infinitivo para un plan lejano; aquello que + verbo para algo que alguien dijo hace tiempo.', example: 'Con mis amigos de la universidad siempre hablábamos de aquello de recorrer Sudamérica en moto. Al final, lo que pasó fue que todos empezamos a trabajar y nunca lo hicimos.', next: 'Ahora, los tópicos.', teacher: 'Responde tú también con «aquello de…»: tu alumno oye la estructura en otra situación.' },
            { q: '¿Qué tópico sobre tu país, tu ciudad o tu profesión no te crees? · What cliché about your country, city or job don’t you believe?', followUps: ['¿De dónde crees que viene? (Where do you think it comes from?)', '¿Hay algo de verdad? (Is there any truth in it?)'], phrases: ['No me creo [[eso de que|teal]]…', '[[Eso de que|teal]]… es un tópico.', '[[Lo que|violet]] sí es verdad es que…'], hint: 'Eso de que + frase cita la idea con distancia; después das tu opinión.', example: 'No me creo eso de que los profesores tienen muchas vacaciones. Lo que sí es verdad es que en julio trabajamos menos, pero en septiembre no paramos.', next: 'Ahora, eres el anfitrión.' },
            { q: 'Un amigo viene a tu casa una semana. Explícale con libertad qué puede hacer. · A friend is staying at your place for a week. Tell them what they can do.', followUps: ['¿Hay algo que no pueda hacer? (Is there anything they can’t do?)', '¿Qué le recomiendas? (What do you recommend?)'], phrases: ['Sírvete [[lo que quieras|violet]] de…', 'Haz [[lo que|violet]] te apetezca.', 'Pídeme [[todo lo que|violet]] necesites.'], hint: 'Lo que + subjuntivo: cualquier cosa, sin decidir todavía.', example: 'Estás en tu casa: sírvete lo que quieras de la nevera y haz lo que te apetezca por las mañanas. Pídeme todo lo que necesites, pero no toques mis plantas.', next: 'Ahora, el cliente enfadado.' },
            { q: 'Eres Elena o Raúl. Un cliente llama enfadado porque no hubo agua caliente. Explícale qué pasó y qué le ofreces. · You are Elena or Raúl. An angry guest calls about the hot water.', followUps: ['¿Y por qué no nos avisaron? (And why didn’t you tell us?)', '¿Qué van a hacer para que no pase otra vez? (What will you do so it doesn’t happen again?)', '¿Qué me ofrecen? (What do you offer me?)'], phrases: ['Se averió la caldera, [[lo cual|orange]]…', '…, [[por lo que|orange]] no pudimos…', 'Le explico [[todo lo que|violet]] pasó.', 'Puede pedirnos [[lo que|violet]] necesite.'], hint: 'Usted, tono profesional. Cuenta el hecho, encadena la consecuencia y ofrece una solución.', example: 'Tiene toda la razón y lo siento mucho. La caldera se averió el sábado temprano, lo cual nos dejó sin agua caliente, y el técnico no vino hasta el mediodía, por lo que no pudimos arreglarlo antes. Le ofrecemos un descuento en su próxima estancia.', teacher: 'Tú eres el cliente enfadado e interrumpes: «¿Y no tenían una caldera de repuesto?». Tu alumno responde sin perder la calma. Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué te sorprendió…?», «¿Qué tópico no te crees?») y tú respondes con las mismas estructuras.', self: 'Ahora haz tú las preguntas en voz alta, como si hablaras con un compañero, y responde a cada una con otra estructura de la clase. (Now ask the questions aloud.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Responder a una reseña', coach: 'Hecho, consecuencia, solución. Fact, consequence, solution.',
      steps: [
        { title: 'La respuesta de Elena · Elena’s reply', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «lo que» y «lo cual»: ¿retoma un hecho (y lleva coma) o es una idea sin antecedente? Después, tu alumno lee la respuesta en voz alta con tono profesional.', self: 'Escribe tu respuesta y toca «Revisar mi texto». Después, mira cada «lo cual»: ¿tiene una frase antes y una coma? (Check every lo cual has a clause before it and a comma.)' } },
          { kind: 'write', title: 'Respuesta pública a una reseña · A public reply to a review', situation: 'Eres Elena (o el responsable de un hotel, un restaurante o una academia). Un cliente ha publicado una reseña con una queja justa. Escribe una respuesta pública, de usted, que explique qué pasó y qué vas a hacer. (You are Elena, or the manager of a hotel, restaurant or school. A customer has posted a review with a fair complaint. Write a public reply, using usted, explaining what happened and what you will do.)', task: [
              'Da las gracias y reconoce el problema. (Thank the customer and acknowledge the problem.)',
              'Cuenta qué pasó y sus consecuencias con «, lo cual» o «, lo que» y con «por lo que» o «con lo cual». (Explain what happened and its consequences.)',
              'Muestra tu reacción con «lo + adjetivo / adverbio + que» (lo mucho que lo sentimos). (Show how you feel.)',
              'Ofrece una solución con «lo que» + subjuntivo (lo que necesite) y recuerda algo con «aquello que» o «aquello de». (Offer a solution and recall something.)',
              'Despídete de forma cordial. (Sign off politely.)',
            ], starters: ['Estimada…:', 'Muchas gracias por su reseña y por sus palabras sobre…', 'Tiene usted toda la razón: …, lo cual…', '…, por lo que…', 'No se imagina lo mucho que…', 'Ya hemos…, con lo cual…', 'Escríbanos cuando quiera y le prepararemos lo que necesite.', 'Un cordial saludo,'],
            words: ['lo cual', 'lo que', 'por lo que', 'con lo cual', 'a lo que', 'todo lo que', 'lo que necesite', 'lo mucho que', 'lo amable que', 'aquello que', 'aquello de', 'eso de que'],
            model: 'Estimada Marta: Muchas gracias por su reseña y por sus palabras sobre la casa y la cena. Tiene usted toda la razón: el sábado por la mañana se averió la caldera, [[lo cual|orange]] dejó a todo el grupo sin agua caliente hasta las once. El técnico no pudo venir antes del mediodía, [[por lo que|orange]] intentamos solucionarlo calentando agua en la cocina, algo que sabemos que no es suficiente. No se imagina [[lo mucho que|blue]] lo sentimos. Ya hemos pedido presupuestos para cambiar la caldera antes del invierno, [[con lo cual|orange]] no volverá a pasar. Como compensación, le ofrecemos un descuento del veinte por ciento en su próxima estancia: escríbanos cuando quiera y le prepararemos [[lo que|violet]] necesite. [[Aquello que|teal]] nos dijo al despedirse, que le gustaría volver en primavera, nos hizo mucha ilusión. Un cordial saludo, Elena Duarte, Casa Robledal.',
            minWords: 110,
            checks: [
              { label: 'Un hecho comentado con «, lo cual» o «, lo que»', pattern: ',\\s*lo\\s+(?:cual|que)(?!\\p{L})', tip: 'Retoma un hecho entero tras una coma: «Se averió la caldera, lo cual nos dejó sin agua».' },
              { label: 'Una consecuencia con preposición + lo que / lo cual (por lo que, con lo cual…)', pattern: '(?<!\\p{L})(?:por|con|a|de|para)\\s+lo\\s+(?:que|cual)(?!\\p{L})', tip: 'Encadena la consecuencia: «…, por lo que no pudimos…», «…, con lo cual no volverá a pasar».' },
              { label: 'Énfasis con lo + adjetivo / adverbio + que', pattern: '(?<!\\p{L})lo\\s+(?!(?:que|cual|de|del|mismo|cierto)(?!\\p{L}))\\p{L}+\\s+que(?!\\p{L})', tip: 'Muestra tu reacción: «No se imagina lo mucho que lo sentimos», «lo amable que fue su grupo».' },
              { label: 'Una idea lejana o citada con aquello (que / de) o eso de que', pattern: '(?<!\\p{L})(?:aquello\\s+(?:que|de)|eso\\s+de\\s+que)(?!\\p{L})', tip: 'Recuerda algo: «Aquello que nos dijo al despedirse…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})lo\\s+cual\\s+(?:usted\\s+)?(?:necesite|necesites|quiera|quieras|desee|desees|prefiera|prefieras|pueda|puedas)(?!\\p{L})', why: 'Sin antecedente, «whatever» es **lo que** + subjuntivo: «le prepararemos **lo que** necesite», nunca «lo cual».' },
              { pattern: '(?<!\\p{L})lo\\s+cual\\s+que(?!\\p{L})', why: '«Lo cual» ya es el relativo: no lleva «que» detrás. Escribe «…, **lo cual** nos dejó sin agua».' },
              { pattern: '(?<!\\p{L})no\\s+(?:se\\s+imagina|sabe|sabes|te\\s+imaginas)\\s+lo\\s+cual(?!\\p{L})', why: 'Para el énfasis, **lo + adjetivo / adverbio + que**: «No se imagina **lo mucho que** lo sentimos».' },
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
            { tone: 'orange', label: 'RETOMA UN HECHO', formula: 'frase + , lo que / lo cual · , por lo que · , con lo cual · , a lo que', example: 'Se rompió la caldera, lo cual nos dejó sin agua, por lo que calentamos agua en ollas.', caption: 'siempre tras coma; lo cual, más formal', en: 'comments on or draws a consequence from the whole previous clause; always after a comma' },
            { tone: 'violet', label: 'SIN ANTECEDENTE', formula: 'lo que + indicativo / subjuntivo · todo lo que · prep. + lo que', example: 'Pide lo que quieras. No estoy de acuerdo con lo que dice.', caption: 'la cosa que; nunca «lo cual»', en: 'the thing that / whatever; lo cual is impossible here' },
            { tone: 'teal', label: 'DISTANCIA', formula: 'aquello que · aquello de · eso de que + frase', example: '¿Te acuerdas de aquello de cambiar la caldera?', caption: 'ideas lejanas, formales o citadas con duda', en: 'ideas distant in time, formal, or quoted with some doubt' },
            { tone: 'blue', label: 'ÉNFASIS', formula: 'lo + adjetivo (concuerda) / adverbio + que + verbo', example: 'No sabes lo cansados que estaban. Mira lo bien que canta.', caption: 'intensidad; el adjetivo concuerda', en: 'stresses degree; unlike lo bueno, the adjective agrees with its noun' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate a qué apunta «lo». ¿A **todo lo que acabas de decir**? Coma + **lo que / lo cual** (o con preposición: por lo que, con lo cual). ¿A **nada anterior**? Solo **lo que** («Pide lo que quieras»). ¿A una idea **lejana o citada**? **Aquello que / aquello de / eso de que**. ¿Quieres **subrayar cuánto**? **Lo + adjetivo + que**, con concordancia.', en: 'Ask what “lo” points to. Everything you have just said? Comma + lo que / lo cual (or with a preposition: por lo que, con lo cual). Nothing before? Only lo que (“Pide lo que quieras”). A distant or quoted idea? Aquello que / aquello de / eso de que. Stressing how much? Lo + adjective + que, with agreement.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El tren salió con una hora de retraso, ___ llegué tarde a la entrevista.', options: ['lo cual', 'por lo que', 'lo que'], answer: 1, why: 'Consecuencia que necesita conector: **por lo que**.', en: 'The train left an hour late, so I was late for the interview.' },
            { prompt: '___ me contaste ayer no se lo he dicho a nadie.', options: ['Aquel', 'Lo que', 'Lo cual'], answer: 1, why: 'Sin antecedente: **lo que**.', en: 'I haven’t told anyone what you told me yesterday.' },
            { prompt: 'Nos han subido el alquiler sin avisar, ___ nos parece abusivo.', options: ['lo cual', 'la cual', 'que'], answer: 0, why: 'Lo abusivo es el hecho entero (la subida): **lo cual**.', en: 'They’ve put our rent up without warning, which we think is outrageous.' },
            { prompt: '¡Qué fotos! Me encanta ver lo ___ que están tus hijos.', options: ['mayormente', 'mayor', 'mayores'], answer: 2, why: 'El adjetivo concuerda con «tus hijos»: lo mayores que están.', en: 'What photos! I love seeing how grown-up your kids are.' },
            { prompt: 'No me creo ___ que el café de la tarde quita el sueño a todo el mundo.', options: ['eso', 'aquel', 'eso de'], answer: 2, why: 'Citas una idea que circula, con duda: **eso de que** + frase.', en: 'I don’t buy this idea that afternoon coffee keeps everyone awake.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una mudanza. Now, a house move.', blocks: [
          { kind: 'lead', text: 'Irene se acaba de mudar a un piso compartido y se lo cuenta a una amiga. Ayúdala a unir y destacar lo que dice.', en: 'Irene has just moved into a shared flat and is telling a friend about it. Help her join her sentences and stress what matters.' },
          { kind: 'rewrite', title: 'La mudanza de Irene · Irene’s move', items: [
            { prompt: 'Mi compañera de piso se fue sin avisar. Eso me obligó a buscar a otra persona.', instruction: 'Une las frases con «, lo que» o «, lo cual».', accept: ['Mi compañera de piso se fue sin avisar, lo que me obligó a buscar a otra persona', 'Mi compañera de piso se fue sin avisar, lo cual me obligó a buscar a otra persona'] },
            { prompt: 'El piso nuevo es muy luminoso. ¡No te lo imaginas!', instruction: 'Una sola frase. Empieza: «No te imaginas lo…».', accept: ['No te imaginas lo luminoso que es el piso nuevo'] },
            { prompt: 'El casero dijo que el piso estaba reformado. No me lo creo.', instruction: 'Una sola frase. Empieza: «No me creo eso de que…».', accept: ['No me creo eso de que el piso estaba reformado', 'No me creo eso de que el piso está reformado'] },
          ] },
        ] },
        { title: 'Ampliación: más de lo que, para lo cual, ¡con lo que…! · Extension', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Un paso extra, si tienes tiempo. «Lo que» aparece también en las comparaciones con una frase («Cuesta **más de lo que** esperábamos»), en el registro formal con finalidad («…, **para lo cual** necesitamos…») y en exclamaciones de queja: «¡**Con lo que** hemos trabajado!» = after all the work we’ve put in.', en: 'An extra step, if you have time. Lo que also appears in comparisons with a clause (“It costs more than we expected”), in formal writing to express purpose (“…, para lo cual necesitamos…”) and in exclamations of complaint: “¡Con lo que hemos trabajado!” = after all the work we’ve put in.' },
          { kind: 'choice', title: 'Otras formas · Other forms', items: [
            { prompt: 'La caldera nueva cuesta más ___ esperábamos.', options: ['de lo que', 'que lo que', 'de que'], answer: 0, why: 'Si comparas con una frase entera (esperábamos), se usa **más de lo que**.', en: 'The new boiler costs more than we expected.' },
            { prompt: 'Queremos cambiar la caldera antes de diciembre, ___ hemos pedido un préstamo.', options: ['para el cual', 'para lo cual', 'lo cual'], answer: 1, why: 'Finalidad referida a todo el hecho anterior, en registro formal: **para lo cual**.', en: 'We want to replace the boiler before December, for which we have applied for a loan.' },
            { prompt: '«¡Con lo que hemos trabajado este verano, y ahora una mala reseña!» Elena quiere decir…', options: ['Que trabajaron poco y lo merecen.', 'Que la reseña habla del trabajo del verano.', 'Que han trabajado mucho y les parece injusto.'], answer: 2, why: '«¡Con lo que…!» subraya la cantidad y expresa queja: después de tanto trabajo, no lo merecen.', en: 'What does Elena mean?' },
            { prompt: 'En un reglamento: «Los huéspedes podrán solicitar ___ consideren necesario en recepción».', options: ['el que', 'lo cual', 'aquello que'], answer: 2, why: 'En el registro formal, **aquello que** sustituye a «lo que» sin antecedente; «lo cual» nunca puede.', en: 'In a set of rules: guests may request whatever they consider necessary at reception.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para alumnos fuertes o si sobra tiempo. Tu alumno escribe dos frases sobre algo que costó más (o menos) de lo que esperaba y una queja con «¡Con lo que…!».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 145 · Antecedentes desconocidos: dondequiera que, cualquiera que', text: 'Ya retomas hechos enteros («…, lo cual nos dejó sin agua»), hablas de ideas sin nombre («Pide lo que quieras») y de ideas lejanas («aquello de…»). En la clase 145 llevas el «lo que + subjuntivo» más lejos: **cualquiera que** y **dondequiera que**, para personas y lugares que no conoces. Es el paso natural: de «haz lo que quieras» a «dondequiera que vayas» y «cualquiera que venga».', en: 'You can now refer back to whole facts (“…, lo cual nos dejó sin agua”), talk about unnamed ideas (“Pide lo que quieras”) and distant ones (“aquello de…”). In class 145 you take “lo que + subjunctive” further: cualquiera que and dondequiera que, for people and places you do not know. It is the natural next step: from “do whatever you like” to “wherever you go” and “whoever comes”.', href: '/gramatica/antecedentes-desconocidos-dondequiera-que-cualquiera-que', label: 'Ir a la clase 145' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué ha sido lo más útil de la clase?». Respuesta esperada: una frase con foco y otra encadenada («…, lo cual…»). Tarea: escribir la respuesta de Escribir a una reseña real o inventada de un lugar que conozca.' },
        ] },
      ],
    },
  ],
};
