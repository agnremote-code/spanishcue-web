import type { LiveLesson } from '../types';

/**
 * Lesson 366 · A2 · Relativas especificativas con que (course unit G066).
 * One scene runs through the class: Rocío Medina has just moved into the 3.º B
 * of a building. On Monday a parcel (a present for her mother) arrived while she
 * was at work, and the delivery man left it with a neighbour. On Tuesday Rocío
 * asks Amparo, the building’s conserje, and then knocks at the 2.º A: «Busco a
 * la mujer que vive aquí». Raúl opens; Elena, who keeps the parcel, later sends
 * a voice message (Colombian voice, tú). Everyone uses tú.
 * Content: the specifying relative clause with «que», no commas, after an
 * explicit noun (persona, cosa o lugar): que + verb when the noun does the
 * action (la vecina que vive en el segundo) and que + other subject + verb when
 * someone else does it (el paquete que compré, la nota que dejó el repartidor),
 * with no lo/la and no «a» after que. «Que» never changes; the verb agrees with
 * the antecedent (los vecinos que viven). Contrast: qué (question, class 023),
 * two sentences with a repeated noun, and the English zero relative («the box I
 * bought» → la caja que compré). Mistakes: *el paquete que lo compré, *la caja
 * compré, *la vecina quien vive, *los vecinos que vive, *busco la mujer.
 * Ampliación: el que / la que / los que without the noun, and (receptively)
 * «alguien que + subjuntivo» for a person you do not know yet (class 100).
 */
export const lesson: LiveLesson = {
  id: 366,
  level: 'A2',
  title: 'Relativas especificativas con que',
  subtitle: 'Decir de qué persona o cosa hablas en una sola frase: busco a la mujer que vive aquí, el paquete que compré.',
  legend: [
    { tone: 'orange', label: 'ANTECEDENTE · la persona o cosa de la que hablas (la mujer, el paquete)' },
    { tone: 'blue', label: 'QUE + VERBO · ella o él hace la acción (que vive aquí)' },
    { tone: 'teal', label: 'QUE + OTRA PERSONA · otro hace la acción, sin lo/la (que compré)' },
    { tone: 'violet', label: 'SIN EL NOMBRE · el que, la que (the one that)' },
  ],
  optionNotes: {
    quien: 'Después de un nombre, sin comas, el relativo es **que**, también para personas: «la vecina **que** vive aquí». «Quien» tiene otros usos (clase 100).',
    'qué': '«Qué» con tilde pregunta: «¿Qué paquete?». Para unir un nombre y su dato, **que** sin tilde.',
    Que: 'Es una pregunta: el interrogativo lleva tilde, **¿Qué…?**',
    Quien: 'Delante de un nombre (¿… vecina?, ¿… llave?, ¿… libro?) la pregunta es **¿Qué…?**, con tilde. «Quién» pregunta por una persona, sin nombre detrás.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un dato para saber cuál', coach: '¿Qué persona? ¿Qué cosa? Which person? Which thing?',
      steps: [
        { title: 'Un paquete perdido · A lost parcel', blocks: [
          { kind: 'lead', text: 'Rocío Medina vive desde el domingo en un edificio nuevo, en el tercero B. El lunes llegó un paquete para ella, pero Rocío estaba en el trabajo. El repartidor lo dejó con una vecina. Hoy Rocío llama a una puerta del segundo y dice: «Hola, busco a la mujer **que** vive aquí». Hoy aprendes a unir un nombre y un dato con **que**.', en: 'Rocío Medina has lived in a new building, on the third floor, since Sunday. On Monday a parcel arrived for her, but Rocío was at work. The delivery man left it with a neighbour. Today Rocío knocks on a door on the second floor and says: “Hi, I’m looking for the woman who lives here.” Today you learn to join a noun and a piece of information with “que”.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos versiones de Rocío y tu alumno repite. Después tu alumno dice qué palabra desaparece en la segunda versión y qué palabra la une.', self: 'Lee las dos versiones en voz alta. ¿Qué palabra desaparece en la segunda? ¿Qué palabra une las dos partes? (Which word disappears? Which word joins the parts?)' } },
          { kind: 'compare', title: 'Dos frases o una · Two sentences or one', columns: [
            { tone: 'orange', label: 'DOS FRASES', sentence: 'Busco a una mujer. **La mujer** vive aquí.', idea: 'Repites «la mujer». Es correcto, pero suena lento y poco natural.', en: 'I’m looking for a woman. The woman lives here.' },
            { tone: 'blue', label: 'UNA FRASE CON QUE', sentence: 'Busco a [[la mujer|orange]] [[que vive aquí|blue]].', idea: '«Que» ocupa el lugar de «la mujer» y une las dos ideas. El dato dice qué mujer.', en: 'I’m looking for the woman who lives here.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Busco a la mujer que vive aquí», ¿quién vive aquí?', options: ['El repartidor.', 'Rocío.', 'La mujer.'], answer: 2, why: '«Que» se refiere a «la mujer»: la mujer vive aquí.', en: 'In “Busco a la mujer que vive aquí”, who lives here?' },
            { prompt: '¿Para qué sirve «que vive aquí»?', options: ['Para decir qué mujer busca Rocío.', 'Para hacer una pregunta.', 'Para dar una causa.'], answer: 0, why: 'Es un dato que identifica a la mujer: entre todas las vecinas, la de esta casa.', en: 'What is “que vive aquí” for?' },
          ] },
        ] },
        { title: 'Nombre + que + dato · Noun + que + information', mascot: '/brand/mascot/studying.webp', coach: 'Que sirve para todo. Que works for everything.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ANTECEDENTE + QUE + DATO', question: '¿Qué persona? ¿Qué cosa? ¿Qué lugar?', en: 'Which person? Which thing? Which place?', formula: ['el / la / los / las + nombre + que + verbo…', 'persona · cosa · lugar → siempre que'],
            meaning: 'La palabra antes de **que** es el **antecedente**: la persona o cosa de la que hablas. Después de **que** viene un dato necesario para saber **cuál** es. No hay comas: sin el dato, no sabes de qué persona o cosa hablamos.',
            examples: [
              { es: 'Rocío es [[la vecina|orange]] [[que llegó el domingo|blue]].', en: 'Rocío is the neighbour who arrived on Sunday.' },
              { es: '[[El ascensor|orange]] [[que está a la derecha|blue]] no funciona.', en: 'The lift on the right isn’t working.' },
              { es: '¿Conoces [[la cafetería|orange]] [[que abrió en la plaza|blue]]?', en: 'Do you know the café that opened in the square?' },
            ],
            note: 'En inglés cambias: who (personas), that / which (cosas). En español, **que** para todo.' },
          { kind: 'table', title: 'Dos frases → una frase · Two sentences → one', head: ['Dos frases', 'Una frase con que'], rows: [
            ['Necesito la llave. La llave abre el garaje. (I need the key…)', 'Necesito [[la llave|orange]] [[que abre el garaje|blue]].'],
            ['Hay una tienda. La tienda está en la esquina. (There is a shop…)', 'Hay [[una tienda|orange]] [[que está en la esquina|blue]].'],
            ['Los vecinos viven en el tercero. Los vecinos son muy jóvenes.', '[[Los vecinos|orange]] [[que viven en el tercero|blue]] son muy jóvenes.'],
          ], note: '**Que** no cambia nunca: igual con persona o cosa, masculino o femenino, singular o plural. El verbo sí cambia: concuerda con el antecedente. La vecina que **vive** · los vecinos que **viven**.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Uso la puerta ___ da a la calle.', options: ['qué', 'que', 'quien'], answer: 1, why: 'Antecedente «la puerta» + dato: que, sin tilde, también para cosas.', en: 'I use the door that opens onto the street.' },
            { prompt: 'Las ventanas que ___ al parque son grandes.', options: ['da', 'damos', 'dan'], answer: 2, why: 'El verbo concuerda con el antecedente: las ventanas (ellas) dan.', en: 'The windows that face the park are big.' },
            { prompt: 'En «la tienda que está en la esquina», el antecedente es…', options: ['la tienda', 'la esquina', 'que'], answer: 0, why: 'El dato habla de la tienda: la tienda está en la esquina.', en: 'In “la tienda que está en la esquina”, the antecedent is…' },
          ] },
        ] },
        { title: '¿Quién hace la acción? · Who does the action?', mascot: '/brand/mascot/standing.webp', coach: '¿Ella o otra persona? Her or someone else?', blocks: [
          { kind: 'compare', title: 'Dos tipos de dato · Two kinds of information', columns: [
            { tone: 'blue', label: 'QUE + VERBO', sentence: '[[La vecina|orange]] [[que recogió el paquete|blue]] es Elena.', idea: 'La vecina recogió el paquete: el antecedente hace la acción.', en: 'The neighbour who picked up the parcel is Elena.' },
            { tone: 'teal', label: 'QUE + OTRA PERSONA + VERBO', sentence: '[[El paquete|orange]] [[que compré|teal]] es un regalo.', idea: 'Yo compré el paquete: otra persona hace la acción. «Que» ya es el paquete.', en: 'The parcel I bought is a present.' },
          ] },
          { kind: 'table', title: '¿Quién hace la acción? · Who does it?', head: ['Con que', '¿Quién hace la acción?', 'En dos frases'], rows: [
            ['la llave [[que abre la entrada|blue]]', 'la llave', 'La llave abre la entrada.'],
            ['la llave [[que me dio Amparo|teal]]', 'Amparo', 'Amparo me dio la llave.'],
            ['el vecino [[que saluda a todos|blue]]', 'el vecino', 'El vecino saluda a todos.'],
            ['el vecino [[que conocí ayer|teal]]', 'yo', 'Conocí al vecino ayer.'],
          ], note: 'En el segundo tipo, la otra persona puede ir antes o después del verbo: «la llave que Amparo me dio» = «la llave que me dio Amparo». Y con personas no pones «a» después de que: «el vecino que conocí».' },
          { kind: 'tip', icon: '🔑', title: 'Sin lo, sin la · No lo, no la', text: '«Que» ya ocupa el lugar del nombre. Por eso no repites el nombre con un pronombre: «el paquete que compré», no «el paquete que **lo** compré»; «la vecina que conocí», no «la vecina que **la** conocí».', en: '“Que” already stands for the noun, so you don’t repeat it with a pronoun: “el paquete que compré”, not “el paquete que lo compré”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La silla ___ es de mi abuela.', options: ['que la tengo en el salón', 'tengo en el salón', 'que tengo en el salón'], answer: 2, why: 'Yo tengo la silla: que + tengo, sin «la». Y «que» no puede faltar.', en: 'The chair I have in the living room is my grandmother’s.' },
            { prompt: 'En «la carta que escribió Elena», ¿quién escribió?', options: ['Rocío', 'la carta', 'Elena'], answer: 2, why: 'Elena escribió la carta: otra persona hace la acción, después del verbo.', en: 'In “la carta que escribió Elena”, who wrote?' },
            { prompt: 'El señor ___ es muy amable.', options: ['que arregla el ascensor', 'que lo arregla el ascensor', 'arregla el ascensor'], answer: 0, why: 'El señor arregla el ascensor: que + verbo. Sin «lo» y sin quitar «que».', en: 'The man who repairs the lift is very kind.' },
          ] },
        ] },
        { title: 'Que, qué y el inglés · Que, qué and English', mascot: '/brand/mascot/speaking.webp', coach: 'Sin tilde y siempre presente. No accent, always there.', blocks: [
          { kind: 'compare', title: 'Tres cosas que no cambian · Three fixed points', columns: [
            { tone: 'blue', label: 'QUE · sin tilde', sentence: 'Es el paquete [[que llegó el lunes|blue]].', idea: 'Une un nombre y su dato. No pregunta nada.', en: 'It’s the parcel that arrived on Monday.' },
            { tone: 'neutral', label: 'QUÉ · con tilde (clase 023)', sentence: '¿**Qué** paquete buscas?', idea: 'Pregunta. Lleva tilde y signos ¿?', en: 'Which parcel are you looking for?' },
            { tone: 'teal', label: 'QUE · nunca desaparece', sentence: 'La caja [[que compré|teal]] es grande.', idea: 'En inglés puedes decir «the box I bought». En español, «que» siempre aparece.', en: 'The box (that) I bought is big.' },
          ] },
          { kind: 'decide', title: '¿Qué escribo? · What do I write?', steps: [
            { q: '¿Haces una pregunta? (¿… paquete?, ¿a … hora?)', yes: '**Qué**, con tilde: «¿Qué paquete buscas?».', no: 'next' },
            { q: '¿Hay un nombre antes (la vecina, el paquete) y después un dato para saber cuál?', yes: '**Que**, sin tilde y sin comas.', no: 'Mira la frase otra vez: ¿hay un antecedente?' },
            { q: '¿El antecedente hace la acción del dato?', yes: 'Que + verbo: «la vecina [[que vive aquí|blue]]».', no: 'Que + otra persona + verbo, sin lo / la: «el paquete [[que compré|teal]]».' },
          ] },
          { kind: 'tip', icon: '💡', title: '¿Y «quien»? · What about “quien”?', text: 'En este tipo de frase (nombre + dato, sin comas) usa **que**, también para personas: «la mujer **que** vive aquí», no «la mujer quien vive aquí». «Quien» tiene otros usos que ves más adelante, en la clase 100.', en: 'In this kind of sentence (noun + information, no commas) use “que”, also for people: “la mujer que vive aquí”, not “la mujer quien vive aquí”. “Quien” has other uses you will see later, in class 100.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿___ vecina recogió tu paquete?', options: ['Que', 'Qué', 'Quien'], answer: 1, why: 'Es una pregunta: qué, con tilde.', en: 'Which neighbour picked up your parcel?' },
            { prompt: 'La vecina ___ recogió mi paquete se llama Elena.', options: ['que', 'qué', 'quien'], answer: 0, why: 'Nombre + dato, sin comas: que, sin tilde.', en: 'The neighbour who picked up my parcel is called Elena.' },
            { prompt: '«The box I bought is big», en español:', options: ['La caja qué compré es grande.', 'La caja compré es grande.', 'La caja que compré es grande.'], answer: 2, why: 'En español «que» es obligatorio y no lleva tilde.', en: '“The box I bought is big”, in Spanish:' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Seis errores muy comunes. Six very common mistakes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿falta «que», sobra un pronombre, falla la tilde o el verbo? Después aparece la corrección.', self: 'Lee cada frase y busca el error: ¿falta «que», sobra un pronombre, falla la tilde o el verbo? Toca para ver la corrección. (What is wrong?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El paquete que lo compré es para mi madre.', right: 'El paquete que compré es para mi madre.', why: '«Que» ya es el paquete: no repitas «lo». (Don’t repeat the noun with lo.)' },
            { wrong: 'La caja compré ayer es muy grande.', right: 'La caja que compré ayer es muy grande.', why: 'En inglés puedes omitirlo (the box I bought), en español no: «que» siempre aparece.' },
            { wrong: 'La vecina quien vive en el segundo trabaja en casa.', right: 'La vecina que vive en el segundo trabaja en casa.', why: 'Nombre + dato sin comas: «que», también para personas.' },
            { wrong: 'Los vecinos que vive en el tercero son simpáticos.', right: 'Los vecinos que viven en el tercero son simpáticos.', why: 'El verbo concuerda con el antecedente: los vecinos viven. (The verb agrees with the noun.)' },
            { wrong: 'Busco el libro qué compré ayer.', right: 'Busco el libro que compré ayer.', why: 'No es una pregunta: «que» sin tilde.' },
            { wrong: 'Busco la mujer que vive aquí.', right: 'Busco a la mujer que vive aquí.', why: 'Rocío busca a una persona concreta: delante va «a». Pero después de «que» no: «la mujer que conocí».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Las fotos que las hice son bonitas.', 'Las fotos que hice son bonitas.', 'Las fotos hice son bonitas.'], answer: 1, why: 'Yo hice las fotos: que + hice, sin «las» y sin quitar «que».', en: 'Which sentence is correct? (The photos I took are nice.)' },
            { prompt: 'Las chicas que ___ en el quinto estudian Medicina.', options: ['vive', 'vivimos', 'viven'], answer: 2, why: 'El antecedente es «las chicas» (ellas): viven.', en: 'The girls who live on the fifth floor study medicine.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno describe a dos personas de su casa o su trabajo sin decir el nombre: «Es la persona que…». Tú adivinas quién es.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: '¿Dónde está mi paquete?', coach: 'Toca las expresiones marcadas. Tap the marked words.',
      steps: [
        { title: 'En la entrada del edificio · At the building entrance', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Amparo y Raúl, y tu alumno es Rocío. Después tu alumno toca cada dato marcado y dice quién hace la acción.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di quién hace la acción. (Who does the action?)' } },
          { kind: 'explore', title: 'Busco a la mujer que vive aquí', setting: 'Martes, seis de la tarde. Rocío habla con Amparo, la conserje del edificio. Después sube al segundo A. Todos se tratan de tú. (Tuesday, 6 p.m. Rocío talks to Amparo, the building’s caretaker. Then she goes up to 2A.)', lines: [
            { who: 'Rocío', text: 'Hola, Amparo. Busco [[el paquete|orange]] [[que llegó ayer|blue]] para mí. Es un regalo para mi madre.', en: 'Hi, Amparo. I’m looking for the parcel that arrived for me yesterday. It’s a present for my mother.' },
            { who: 'Amparo', text: 'Ah, sí. [[El repartidor|orange]] [[que vino ayer|blue]] no te encontró en casa.', en: 'Oh, yes. The delivery man who came yesterday didn’t find you at home.' },
            { who: 'Rocío', text: 'Claro, ayer trabajé hasta las ocho. ¿Y dónde lo dejó?', en: 'Of course, yesterday I worked until eight. So where did he leave it?' },
            { who: 'Amparo', text: 'Se lo dio a [[la vecina|orange]] [[que vive en el segundo A|blue]]. Ella trabaja en casa los lunes.', en: 'He gave it to the neighbour who lives in 2A. She works from home on Mondays.' },
            { who: 'Rocío', text: '¿Es [[la mujer|orange]] [[que tiene una bicicleta roja|blue]]?', en: 'Is she the woman who has a red bike?' },
            { who: 'Amparo', text: 'No, esa es Marta, del cuarto. Elena es [[la chica|orange]] [[que conociste|teal]] el lunes en el ascensor.', en: 'No, that’s Marta, from the fourth floor. Elena is the young woman you met in the lift on Monday.' },
            { who: 'Rocío', text: '¡Ah, Elena! Muy simpática. Entonces subo ahora.', en: 'Oh, Elena! Very nice. I’ll go up now, then.' },
            { who: 'Amparo', text: 'Espera, toma [[la nota|orange]] [[que dejó el repartidor|teal]]. Tiene tu nombre y el número del paquete.', en: 'Wait, take the note the delivery man left. It has your name and the parcel number.' },
            { who: 'Rocío', text: '(En el segundo A) Hola, buenas tardes. Busco a [[la mujer|orange]] [[que vive aquí|blue]]. ¿Está Elena?', en: '(At 2A) Hello, good afternoon. I’m looking for the woman who lives here. Is Elena in?' },
            { who: 'Raúl', text: 'Hola. No, vuelve a las nueve. ¿Eres [[la vecina|orange]] [[que espera un paquete|blue]]?', en: 'Hi. No, she’ll be back at nine. Are you the neighbour who’s expecting a parcel?' },
            { who: 'Rocío', text: 'Sí, soy yo. Rocío, del tercero B.', en: 'Yes, that’s me. Rocío, from 3B.' },
            { who: 'Raúl', text: 'Elena me habló de ti, pero no sé dónde está [[la caja|orange]] [[que guardó|teal]]. Ella te manda un mensaje esta noche.', en: 'Elena told me about you, but I don’t know where the box she put away is. She’ll send you a message tonight.' },
          ], notes: {
            'el paquete': 'El antecedente: Rocío no busca cualquier paquete, busca uno concreto.',
            'que llegó ayer': 'Que + verbo: el paquete llegó. El antecedente hace la acción.',
            'El repartidor': 'El antecedente: la persona de la que habla Amparo.',
            'que vino ayer': 'Que + verbo: el repartidor vino. Dice qué repartidor: el de ayer.',
            'la vecina': 'El antecedente. Hay muchas vecinas: el dato que sigue dice cuál.',
            'que vive en el segundo A': 'Que + verbo: la vecina vive allí. Sin comas: el dato es necesario.',
            'la mujer': 'El antecedente. Con una persona concreta: «busco **a** la mujer…», con «a» delante.',
            'que tiene una bicicleta roja': 'Que + verbo: la mujer tiene la bicicleta. Rocío da un dato para identificarla.',
            'la chica': 'El antecedente: Elena.',
            'que conociste': 'Que + otra persona: tú conociste a la chica. Sin «la» y sin «a» después de que.',
            'la nota': 'El antecedente: la nota con el nombre de Rocío.',
            'que dejó el repartidor': 'Que + otra persona: el repartidor dejó la nota. El sujeto va después del verbo (= que el repartidor dejó).',
            'que vive aquí': 'Que + verbo: la mujer vive aquí. Es la frase clave de la clase.',
            'que espera un paquete': 'Que + verbo: la vecina espera un paquete. Así Raúl identifica a Rocío.',
            'la caja': 'El antecedente: la caja del paquete.',
            'que guardó': 'Que + otra persona: Elena guardó la caja. No «que la guardó».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no tiene Rocío su paquete?', options: ['Porque el repartidor no vino.', 'Porque ayer trabajó hasta las ocho y no estaba en casa.', 'Porque Amparo lo tiene en su oficina.'], answer: 1, why: '«El repartidor que vino ayer no te encontró en casa». «Ayer trabajé hasta las ocho».', en: 'Why doesn’t Rocío have her parcel?' },
            { prompt: '¿Quién es Elena?', options: ['La conserje del edificio.', 'La vecina que vive en el segundo A.', 'La vecina que tiene una bicicleta roja.'], answer: 1, why: '«Se lo dio a la vecina que vive en el segundo A». La de la bicicleta es Marta.', en: 'Who is Elena?' },
            { prompt: '¿Qué le da Amparo a Rocío?', options: ['La llave del segundo A.', 'La nota que dejó el repartidor.', 'El paquete.'], answer: 1, why: '«Toma la nota que dejó el repartidor».', en: 'What does Amparo give Rocío?' },
          ] },
        ] },
        { title: '¿Quién hace la acción? · Who does the action?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Los datos del diálogo · The information in the dialogue', categories: [
            { id: 'verbo', label: 'QUE + VERBO · el antecedente hace la acción', tone: 'blue' },
            { id: 'otra', label: 'QUE + OTRA PERSONA · otro hace la acción', tone: 'teal' },
          ], items: [
            { text: 'el repartidor que vino ayer', answer: 'verbo', why: 'El repartidor vino.' },
            { text: 'la chica que conociste el lunes', answer: 'otra', why: 'Tú conociste a la chica.' },
            { text: 'la vecina que vive en el segundo A', answer: 'verbo', why: 'La vecina vive allí.' },
            { text: 'la nota que dejó el repartidor', answer: 'otra', why: 'El repartidor dejó la nota.' },
            { text: 'la vecina que espera un paquete', answer: 'verbo', why: 'La vecina espera el paquete.' },
            { text: 'la caja que guardó Elena', answer: 'otra', why: 'Elena guardó la caja.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Quién es Marta?». Tu alumno responde con un dato del diálogo: «Es la vecina que tiene una bicicleta roja» o «Es la mujer que vive en el cuarto».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Nombre + que + dato. Noun + que + information.',
      steps: [
        { title: 'Vecinos y cosas · Neighbours and things', blocks: [
          { kind: 'choice', items: [
            { context: 'Rocío habla con Amparo. (Rocío talks to Amparo.)', prompt: '¿Quién es el señor ___ lleva un perro tan grande?', options: ['que', 'qué', 'quien'], answer: 0, why: 'Antecedente «el señor» + dato: que, sin tilde. La pregunta es «¿quién?», al principio.', en: 'Who is the man with such a big dog?' },
            { context: 'Amparo ordena el correo. (Amparo sorts the post.)', prompt: 'Las cartas ___ hoy están en tu buzón.', options: ['que llegaron', 'que las llegaron', 'llegaron'], answer: 0, why: 'Las cartas llegaron: que + verbo. «Que» no puede faltar y no lleva «las».', en: 'The letters that arrived today are in your mailbox.' },
            { context: 'Rocío enseña su casa. (Rocío shows her flat.)', prompt: 'La lámpara ___ es de una tienda de mi barrio.', options: ['que compré', 'que la compré', 'compré'], answer: 0, why: 'Yo compré la lámpara: que + compré, sin «la».', en: 'The lamp I bought is from a shop in my neighbourhood.' },
            { context: 'Amparo habla de los vecinos. (Amparo talks about the neighbours.)', prompt: 'Los estudiantes que ___ en el cuarto son muy simpáticos.', options: ['vive', 'viven', 'vivo'], answer: 1, why: 'El verbo concuerda con «los estudiantes» (ellos): viven.', en: 'The students who live on the fourth floor are very nice.' },
            { context: 'Rocío tiene tres llaves. (Rocío has three keys.)', prompt: '¿___ llave abre el garaje?', options: ['Que', 'Qué', 'Quien'], answer: 1, why: 'Es una pregunta: qué, con tilde.', en: 'Which key opens the garage?' },
          ] },
        ] },
        { title: '¿Que o qué? · Que or qué?', blocks: [
          { kind: 'classify', title: '¿Une o pregunta? · Does it join or ask?', categories: [
            { id: 'rel', label: 'QUE · une un nombre y su dato', tone: 'blue' },
            { id: 'preg', label: 'QUÉ · pregunta', tone: 'neutral' },
          ], items: [
            { text: '¿___ paquete buscas?', answer: 'preg', why: 'Pregunta con signos ¿?: qué.' },
            { text: 'El paquete ___ busco es pequeño.', answer: 'rel', why: 'Antecedente «el paquete» + dato: que.' },
            { text: 'La señora ___ vive en el quinto tiene tres gatos.', answer: 'rel', why: 'Antecedente «la señora» + dato: que.' },
            { text: '¿A ___ hora viene el repartidor?', answer: 'preg', why: 'Pregunta por la hora: qué.' },
            { text: 'Es la caja ___ pesa tanto.', answer: 'rel', why: 'Antecedente «la caja» + dato: que.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El sofá que lo compré ayer es muy cómodo.', ok: false, options: ['El sofá que compré ayer es muy cómodo.', 'El sofá qué compré ayer es muy cómodo.', 'El sofá compré ayer es muy cómodo.'], answer: 0, why: 'Que + compré, sin «lo»: «que» ya es el sofá. Y «que» no puede faltar.' },
            { sentence: 'Hugo es el vecino que tiene un perro grande.', ok: true, why: 'Correcta: el vecino tiene el perro, que + verbo.' },
            { sentence: 'La mujer quien trabaja en la panadería es mi vecina.', ok: false, options: ['La mujer que trabaja en la panadería es mi vecina.', 'La mujer qué trabaja en la panadería es mi vecina.', 'La mujer trabaja en la panadería es mi vecina.'], answer: 0, why: 'Nombre + dato sin comas: «que», también para personas.' },
            { sentence: 'Las llaves tengo son del garaje.', ok: false, options: ['Las llaves que las tengo son del garaje.', 'Las llaves quien tengo son del garaje.', 'Las llaves que tengo son del garaje.'], answer: 2, why: 'En español «que» es obligatorio (the keys I have → las llaves que tengo).' },
            { sentence: 'Los chicos que vive en el quinto son estudiantes.', ok: false, options: ['Los chicos quien viven en el quinto son estudiantes.', 'Los chicos que vivo en el quinto son estudiantes.', 'Los chicos que viven en el quinto son estudiantes.'], answer: 2, why: 'El verbo concuerda con «los chicos»: viven.' },
          ] },
        ] },
        { title: 'Por fin, el paquete · The parcel at last', blocks: [
          { kind: 'chat-fill', title: 'Miércoles por la mañana, en casa de Elena · Wednesday morning, at Elena’s', lines: [
            { who: 'Elena', text: '¡Hola, Rocío! Pasa. Esta es la caja ___ llegó para ti.', options: ['qué', 'que', 'quien'], answer: 1, why: 'La caja llegó: antecedente + que, sin tilde.' },
            { who: 'Rocío', text: '¡Muchas gracias! Es el regalo ___ para mi madre.', options: ['que lo compré', 'compré', 'que compré'], answer: 2, why: 'Yo compré el regalo: que + compré, sin «lo».' },
            { who: 'Elena', text: 'De nada. ¿Y qué tal el apartamento? ¿Te gusta?' },
            { who: 'Rocío', text: 'Sí, mucho. Pero todavía no conozco a las personas ___ en el edificio.', options: ['que vive', 'quien viven', 'que viven'], answer: 2, why: 'Las personas viven: que + viven, en plural.' },
            { who: 'Elena', text: 'Mira, el señor ___ ayer en el ascensor es Hugo, del primero.', options: ['quien viste', 'que viste', 'que lo viste'], answer: 1, why: 'Tú viste al señor: que + viste, sin «lo».' },
            { who: 'Rocío', text: '¿Y la chica ___ siempre va en bicicleta?', options: ['la que', 'qué', 'que'], answer: 2, why: 'Ya está el nombre «la chica»: solo que.' },
            { who: 'Elena', text: 'Es Marta, del cuarto. Te la presento el sábado.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Busco', 'a', 'la', 'vecina', 'que', 'vive', 'en', 'el', 'segundo'], accept: ['Busco a la vecina que vive en el segundo'], en: 'I’m looking for the neighbour who lives on the second floor.' },
            { tiles: ['El', 'paquete', 'que', 'llegó', 'ayer', 'es', 'para', 'Rocío'], accept: ['El paquete que llegó ayer es para Rocío', 'Es para Rocío el paquete que llegó ayer'], en: 'The parcel that arrived yesterday is for Rocío.' },
            { tiles: ['Las', 'flores', 'que', 'compró', 'Hugo', 'son', 'preciosas'], accept: ['Las flores que compró Hugo son preciosas', 'Las flores que Hugo compró son preciosas'], en: 'The flowers Hugo bought are lovely.' },
            { tiles: ['¿Conoces', 'al', 'señor', 'que', 'tiene', 'un', 'perro', 'grande?'], accept: ['¿Conoces al señor que tiene un perro grande?'], en: 'Do you know the man who has a big dog?' },
          ] },
        ] },
        { title: 'Une las frases · Join the sentences', blocks: [
          { kind: 'rewrite', title: 'Dos frases → una con que · Two sentences → one with que', items: [
            { prompt: 'Tengo un vecino. El vecino toca la guitarra.', instruction: 'Une las frases con «que». Empieza con «Tengo».', accept: ['Tengo un vecino que toca la guitarra'] },
            { prompt: 'Rocío compró un regalo. El regalo es para su madre.', instruction: 'Une las frases con «que». Empieza con «El regalo».', accept: ['El regalo que compró Rocío es para su madre', 'El regalo que Rocío compró es para su madre'] },
            { prompt: 'Amparo me dio unas llaves ayer. Las llaves son del garaje.', instruction: 'Une las frases con «que». Empieza con «Las llaves».', accept: ['Las llaves que me dio Amparo ayer son del garaje', 'Las llaves que Amparo me dio ayer son del garaje', 'Las llaves que ayer me dio Amparo son del garaje', 'Las llaves que me dio ayer Amparo son del garaje'] },
            { prompt: 'La señora vive en el quinto. La señora tiene tres gatos.', instruction: 'Une las frases con «que». Empieza con «La señora».', accept: ['La señora que vive en el quinto tiene tres gatos'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno describe dos cosas de la sala donde está con «el / la … que…»: una que hace algo («la lámpara que está encima de la mesa») y una que compró o recibió («la taza que me regaló mi hermana»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Elena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Elena tiene el paquete · Elena has the parcel', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿dónde está el paquete?). Segunda escucha: tu alumno levanta la mano con cada «que» y dice de qué persona o cosa habla. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. En la segunda escucha, cuenta los «que»: ¿de qué persona o cosa hablan? (Count the “que”s: which person or thing?)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Elena', channel: 'MENSAJE DE VOZ · DE ELENA PARA ROCÍO', src: '/audio/grammar-live/366.mp3',
            before: 'Es martes por la noche. Elena, la vecina del segundo A, le manda un mensaje de voz a Rocío. ¿Qué crees que dice: dónde está el paquete, cuándo puede pasar Rocío…? (Elena sends Rocío a voice message. What do you think she says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Elena no sabe dónde está el paquete de Rocío.', 'Elena invita a Rocío a una fiesta en el edificio.', 'Elena tiene el paquete y le dice a Rocío cuándo puede pasar.'], answer: 2, why: '«Tengo el paquete que llegó ayer para ti» y «puedes pasar a las diez o a las once».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cómo es la caja?', options: ['Grande, pero rota.', 'Pequeña y ligera.', 'Grande y pesada.'], answer: 2, why: '«Es una caja grande que pesa bastante».', en: 'What is the box like?' },
              { prompt: '¿Cuándo puede pasar Rocío?', options: ['Esta noche, a las nueve.', 'El sábado por la tarde.', 'Mañana, a las diez o a las once.'], answer: 2, why: '«Mañana trabajo en casa toda la mañana, así que puedes pasar a las diez o a las once».', en: 'When can Rocío come by?' },
              { prompt: '¿Qué hace el repartidor si no estás en casa?', options: ['Vuelve al día siguiente.', 'Deja el paquete en la puerta de la calle.', 'Deja el paquete con la primera persona que abre la puerta.'], answer: 2, why: '«Deja el paquete con la primera persona que abre la puerta».', en: 'What does the delivery man do if you are not at home?' },
              { prompt: '¿Quién es Hugo?', options: ['El señor que vive en el primero.', 'El compañero de piso de Elena.', 'El repartidor que viene a la calle.'], answer: 0, why: '«El señor que vive en el primero, Hugo, también recoge paquetes».', en: 'Who is Hugo?' },
            ],
            transcript: 'Hola, Rocío, soy Elena, la vecina [[que vive|blue]] en el segundo A. Perdona, hoy llegué tarde del trabajo. Tengo el paquete [[que llegó|blue]] ayer para ti. Es una caja grande [[que pesa|blue]] bastante, pero no te preocupes: Raúl te la sube. Mañana trabajo en casa toda la mañana, así que puedes pasar a las diez o a las once. Ah, y un consejo: el repartidor [[que viene|blue]] a nuestra calle siempre tiene prisa. Si no estás en casa, deja el paquete con la primera persona [[que abre|blue]] la puerta. Y si un día no estoy yo, el señor [[que vive|blue]] en el primero, Hugo, también recoge paquetes. Es muy amable. Bueno, hasta mañana. ¡Un beso!',
            reply: { teacher: 'Tú eres Elena. Tu alumno es Rocío y responde al mensaje con tres frases: da las gracias, dice a qué hora pasa y pregunta por un vecino con «que» («¿Quién es la chica que…?»).', self: 'Responde a Elena en voz alta como Rocío: da las gracias, di a qué hora pasas y pregunta por un vecino con «que». (Answer as Rocío: thanks, a time, and a question with “que”.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu edificio, tu barrio', coach: '¿Cuál? Da un dato con que. Which one? Add “que”.',
      steps: [
        { title: 'Personas, cosas y lugares · People, things and places', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Tu alumno habla de su casa, su edificio y su barrio reales, o inventa. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con «que» y, si quieres, escribe tu respuesta. Habla de tu casa y tu barrio reales o inventa. (Answer aloud with “que”.)' } },
          { kind: 'talk', cards: [
            { q: 'Describe a dos vecinos o compañeros sin decir su nombre. · Describe two neighbours or colleagues without saying their names.', followUps: ['¿Qué vecino conoces mejor? (Which neighbour do you know best?)', '¿Cómo es el vecino que vive a tu lado? (What is your next-door neighbour like?)'], phrases: ['Hay [[un señor|orange]] [[que vive en…|blue]]', '[[La chica|orange]] [[que tiene…|blue]] es…', '[[Los vecinos|orange]] [[que viven en…|blue]] son…'], hint: 'Primero la persona (el antecedente), después el dato con que + verbo.', example: 'Hay un señor que vive en el primero y tiene un perro enorme. La chica que vive enfrente de mí es muy simpática.', next: 'Ahora, una persona importante.', teacher: 'Tú haces una adivinanza: «Es la persona que me abre la puerta cada mañana». Tu alumno adivina quién es.' },
            { q: 'Piensa en una persona importante en tu vida. ¿Quién es? · Think of an important person in your life. Who is it?', followUps: ['¿Cuándo conociste a esa persona? (When did you meet this person?)', '¿Qué hacen juntos? (What do you do together?)'], phrases: ['Es [[la persona|orange]] [[que más me ayuda|blue]]…', 'Es [[el amigo|orange]] [[que conocí|teal]] en…', 'Es [[la profesora|orange]] [[que tuve|teal]] en…'], hint: 'Usa los dos tipos: «la persona que me ayuda» (ella hace la acción) y «el amigo que conocí» (tú haces la acción).', example: 'Es mi amiga Sara. Es la amiga que conocí en la universidad y la persona que más me ayuda.', next: 'Ahora, cosas de tu casa.' },
            { q: 'Elige dos objetos de tu casa: uno que compraste tú y uno que te regalaron. · Choose two objects: one you bought and one you were given.', followUps: ['¿Dónde lo compraste? (Where did you buy it?)', '¿Quién te lo regaló? (Who gave it to you?)'], phrases: ['[[El sofá|orange]] [[que compré|teal]] el año pasado…', '[[La taza|orange]] [[que me regaló|teal]] mi hermano…', 'sin «lo», sin «la»'], hint: 'Que + otra persona + verbo, sin lo ni la: «el sofá que compré».', example: 'El sofá que compré el año pasado es muy cómodo. Y la taza que me regaló mi hermano es mi favorita.', next: 'Ahora, tu barrio.' },
            { q: '¿Qué sitios de tu barrio usas mucho? · Which places in your neighbourhood do you use a lot?', followUps: ['¿Cuál es la tienda que más usas? (Which shop do you use most?)', '¿Qué sitio no te gusta? (Which place don’t you like?)'], phrases: ['Voy mucho a [[la panadería|orange]] [[que está en…|blue]]', '[[El mercado|orange]] [[que visito|teal]] los sábados…', '[[El bar|orange]] [[que abrió|blue]] el mes pasado…'], hint: 'Un lugar también puede ser antecedente: «la panadería que está en la esquina».', example: 'Voy mucho a la panadería que está en la esquina. También me gusta el mercado que visito los sábados.' },
            { q: 'Tú eres Rocío. Otro día llega otro paquete y Amparo no sabe cuál buscas. Explícalo. · You are Rocío. Explain which parcel you mean.', followUps: ['¿A qué vecino se lo dio el repartidor? (Which neighbour did he give it to?)', '¿Cómo es la caja? (What is the box like?)'], phrases: ['Busco [[el paquete|orange]] [[que llegó|blue]] esta mañana.', 'Es [[la caja|orange]] [[que compré|teal]] por internet.', 'Creo que lo tiene [[el señor|orange]] [[que vive en…|blue]]'], hint: 'Da dos o tres datos con que: cuándo llegó, qué es, quién lo tiene.', example: 'Hola, Amparo. Busco el paquete que llegó esta mañana. Es la caja que compré por internet. Creo que lo tiene el señor que vive en el primero.', teacher: 'Tú eres Amparo y no entiendes a la primera: «¿Qué paquete? ¿Qué señor?». Así tu alumno añade datos con que.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Quién es la persona que…?», «¿Cuál es la tienda que más te gusta?») y tú respondes con que.', self: 'Ahora haz tú las preguntas en voz alta («¿Quién es el vecino que…?») y responde otra vez con datos nuevos. (Now ask the questions and answer again.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Mi edificio nuevo', coach: 'Personas, cosas y lugares con que. People, things and places with que.',
      steps: [
        { title: 'Un mensaje a una amiga · A message to a friend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «que»: ¿hay antecedente?, ¿quién hace la acción?, ¿sobra un lo o un la? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada «que»: ¿hay un nombre antes?, ¿sobra un lo o un la? (Check every “que”.)' } },
          { kind: 'write', title: 'Te cuento cómo es mi edificio · Let me tell you about my building', situation: 'Eres Rocío (o eres tú, en tu casa real). Escribe un mensaje a tu amiga Clara: le cuentas cómo es tu edificio nuevo, quiénes son tus vecinos y qué hay en el barrio. (You are Rocío, or yourself in your real home. Write to your friend Clara about your new building, your neighbours and the neighbourhood.)', task: [
            'Saluda y di cómo estás en tu casa nueva. (Say hello and how you feel in your new home.)',
            'Describe a dos vecinos con «el / la … que…», no solo con el nombre. (Describe two neighbours with que.)',
            'Habla de una cosa que compraste o recibiste: «el … que compré». (A thing you bought or received.)',
            'Habla de un lugar del barrio con «que». (A place in the neighbourhood with que.)',
            'Invita a tu amiga y despídete. (Invite your friend and say goodbye.)',
          ], starters: ['Hola, Clara:', 'Ya estoy en mi casa nueva y…', 'Amparo es la conserje que…', 'El señor que vive en…', 'Ayer llegó el paquete que…', 'Cerca de casa hay una … que…', '¿Vienes el sábado?', 'Un beso,'],
            words: ['que', 'el vecino que vive', 'la vecina que', 'el paquete que compré', 'la tienda que está', 'el ascensor', 'la conserje', 'el barrio', 'simpático', 'tranquilo'],
            model: 'Hola, Clara: ¿Qué tal? Ya estoy en mi casa nueva y estoy muy contenta. El edificio es antiguo, pero tiene [[un ascensor|orange]] [[que funciona|blue]] muy bien. Amparo es [[la conserje|orange]] [[que conoce|blue]] a todo el mundo. Elena es [[la vecina|orange]] [[que vive|blue]] en el segundo; ayer me dio [[el paquete|orange]] [[que compré|teal]] para mamá. Y [[el señor|orange]] [[que vive|blue]] en el primero tiene un perro enorme. Cerca de casa hay [[una panadería|orange]] [[que hace|blue]] un pan muy bueno. ¿Vienes el sábado? Te presento a los vecinos. Un beso, Rocío',
            minWords: 60,
            checks: [
              { label: 'Una persona o cosa + que (a noun + que)', pattern: '(?<!\\p{L})(?:el|la|los|las|un|una|unos|unas)\\s+\\p{L}+(?:\\s+\\p{L}+)?\\s+que(?!\\p{L})', tip: 'Identifica a alguien o algo con un dato: «la vecina que vive en el segundo».' },
              { label: 'Una cosa que hiciste tú: que compré, que tengo… (something you did)', pattern: '(?<!\\p{L})que\\s+(?:me\\s+|te\\s+)?(?:vi|tengo|uso|traje|hice|\\p{L}{2,}[éí])(?!\\p{L})', tip: 'Habla de una cosa con que + tú + verbo, sin lo ni la: «el paquete que compré», «la lámpara que tengo».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})que\\s+(?:lo|la|los|las)\\s+(?:compré|conocí|vi|tengo|traje|hice|compraste|compró|recogió|dejó|guardó)(?!\\p{L})', why: '«Que» ya ocupa el lugar del nombre: **el paquete que compré**, sin lo ni la.' },
              { pattern: '(?<!\\p{L})(?:el|la|los|las)\\s+\\p{L}+\\s+quien(?!\\p{L})', why: 'Después de un nombre, sin comas, usa **que**: «la vecina que vive aquí».' },
              { pattern: '(?<!\\p{L})(?:el|la|los|las|un|una)\\s+\\p{L}+\\s+qué(?!\\p{L})', why: 'Si no es una pregunta, **que** va sin tilde: «el paquete que llegó».' },
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
            { tone: 'blue', label: 'QUE + VERBO', formula: 'antecedente + que + verbo', example: 'Busco a la mujer que vive aquí.', caption: 'el antecedente hace la acción; el verbo concuerda con él', en: 'the noun does the action; the verb agrees with it' },
            { tone: 'teal', label: 'QUE + OTRA PERSONA', formula: 'antecedente + que + (alguien) + verbo, sin lo / la', example: 'El paquete que compré es un regalo.', caption: 'otra persona hace la acción; no repitas el nombre', en: 'someone else does the action; don’t repeat the noun' },
            { tone: 'neutral', label: 'QUE ≠ QUÉ', formula: 'que une · ¿qué? pregunta', example: '¿Qué paquete? — El paquete que llegó ayer.', caption: 'que nunca desaparece y no lleva tilde', en: 'que never disappears and has no accent' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Un nombre + **que** + un dato para saber cuál: «la vecina que vive en el segundo», «el paquete que compré». **Que** sirve para personas, cosas y lugares, no cambia nunca, no lleva tilde y no desaparece. Si otra persona hace la acción, no añadas lo ni la.', en: 'A noun + que + information to say which one: “la vecina que vive en el segundo”, “el paquete que compré”. Que works for people, things and places, never changes, has no accent and never disappears. If someone else does the action, don’t add lo or la.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El tren ___ sale a las ocho llega a Valencia a las once.', options: ['quien', 'que', 'qué'], answer: 1, why: 'Antecedente «el tren» + dato: que.', en: 'The train that leaves at eight arrives in Valencia at eleven.' },
            { prompt: '¿Te gusta la chaqueta ___?', options: ['que me la compré', 'que me compré', 'me compré'], answer: 1, why: 'Yo me compré la chaqueta: que + me compré, sin «la», y con «que».', en: 'Do you like the jacket I bought myself?' },
            { prompt: 'Los alumnos que ___ tarde esperan fuera.', options: ['llegamos', 'llegan', 'llega'], answer: 1, why: 'El verbo concuerda con «los alumnos»: llegan.', en: 'The students who arrive late wait outside.' },
            { prompt: '¿___ libro estás leyendo?', options: ['Qué', 'Que', 'Quien'], answer: 0, why: 'Es una pregunta: qué, con tilde.', en: 'Which book are you reading?' },
            { prompt: 'Ana es la compañera ___ conocí en el curso de inglés.', options: ['que', 'quien', 'a que'], answer: 0, why: 'Yo conocí a Ana: que + conocí. Sin «a» después de que.', en: 'Ana is the classmate I met on the English course.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la oficina.', blocks: [
          { kind: 'lead', text: 'Un mes después, Rocío empieza en un trabajo nuevo. Le escribe a Elena sobre su primer día. Une las frases con «que».', en: 'A month later, Rocío starts a new job. She writes to Elena about her first day. Join the sentences with “que”.' },
          { kind: 'rewrite', title: 'El primer día · The first day', items: [
            { prompt: 'Tengo un compañero. El compañero habla cuatro idiomas.', instruction: 'Une las frases con «que». Empieza con «Tengo».', accept: ['Tengo un compañero que habla cuatro idiomas'] },
            { prompt: 'Uso una impresora. La impresora es muy lenta.', instruction: 'Une las frases con «que». Empieza con «La impresora».', accept: ['La impresora que uso es muy lenta'] },
            { prompt: 'La jefa me dio unas carpetas. Las carpetas están en mi mesa.', instruction: 'Une las frases con «que». Empieza con «Las carpetas».', accept: ['Las carpetas que me dio la jefa están en mi mesa', 'Las carpetas que la jefa me dio están en mi mesa'] },
          ] },
        ] },
        { title: 'Ampliación · El que, la que', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Para ir más lejos: cuando ya sabemos de qué cosa hablamos, no repetimos el nombre. «¿Qué llave es? — [[La que|violet]] tiene la cinta roja». El artículo concuerda con el nombre que no dices: **el que, la que, los que, las que**.', en: 'To go further: when we already know what we are talking about, we don’t repeat the noun. “Which key is it? — The one with the red ribbon.” The article agrees with the noun you leave out: el que, la que, los que, las que.' },
          { kind: 'choice', title: 'Casos más difíciles · Harder cases', items: [
            { prompt: '¿Qué llave es la del garaje? — ___ tiene la cinta roja.', options: ['La que', 'El que', 'Las que'], answer: 0, why: 'Sin repetir «la llave»: la que (femenino singular).', en: 'Which key is the garage one? — The one with the red ribbon.' },
            { prompt: '¿Qué vecinos hacen ruido? — ___ viven en el quinto.', options: ['Las que', 'El que', 'Los que'], answer: 2, why: 'Sin repetir «los vecinos»: los que (masculino plural).', en: 'Which neighbours make noise? — The ones who live on the fifth floor.' },
            { prompt: 'Hay dos cajas. La grande es de Elena y ___ compré yo es la pequeña.', options: ['que', 'la que', 'el que'], answer: 1, why: 'La caja que compré → la que compré: el artículo concuerda con «caja».', en: 'There are two boxes. The big one is Elena’s and the one I bought is the small one.' },
            { prompt: '¿Qué señor es Hugo? — ___ va con el perro.', options: ['La que', 'El que', 'Los que'], answer: 1, why: 'Sin repetir «el señor»: el que (masculino singular).', en: 'Which man is Hugo? — The one with the dog.' },
            { prompt: '¿Qué frase habla de una persona concreta, que Rocío ya conoce?', options: ['Busco a la vecina que habla alemán.', 'Busco a alguien que hable alemán.'], answer: 0, why: 'Rocío conoce a esa vecina: indicativo (habla). «Alguien que hable» es una persona que todavía no conoces: usa otra forma, el subjuntivo (clase 100).', en: 'Which sentence is about a specific person Rocío already knows?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para alumnos rápidos o si sobra tiempo. «Alguien que hable» solo se reconoce hoy; se trabaja en la clase 100. Si no hay tiempo, se puede saltar sin problema.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 067 · Relativas con donde, cuando y lo que', text: 'Ya identificas personas y cosas con **que**: «la vecina que vive en el segundo», «el paquete que compré». En la clase 067 das datos sobre **lugares** y **momentos** con donde y cuando («el sitio **donde** nos conocimos») y hablas de ideas sin nombre con **lo que** («**lo que** necesito es descansar»). Es el paso natural: el mismo mecanismo, con más tipos de antecedente.', en: 'You can now identify people and things with “que”: “la vecina que vive en el segundo”, “el paquete que compré”. In class 067 you give information about places and moments with donde and cuando (“the place where we met”), and talk about ideas with no noun using lo que (“what I need is a rest”). It is the natural next step: the same mechanism, with more kinds of antecedent.', href: '/gramatica/relativas-con-donde-cuando-y-lo', label: 'Ir a la clase 067' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Quién es la persona que más ves cada día? ¿Y cuál es la cosa que más usas?». Respuesta esperada: dos frases con que, una de cada tipo. Tarea: el mensaje de Escribir sobre la casa real de tu alumno.' },
        ] },
      ],
    },
  ],
};
