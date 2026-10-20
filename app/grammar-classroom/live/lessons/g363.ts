import type { LiveLesson } from '../types';

/**
 * Lesson 363 · A2 · Objeto indirecto: le, les, me, te, nos (course unit G063).
 * Builds on lesson 106 (G042: lo, la, los, las and a first look at le / les with
 * dar and mandar) and on lesson 362 (G062: me gusta, le duele). Here: the full
 * set me, te, le, nos, os, les with verbs of giving and communicating (dar,
 * mandar, decir, preguntar, escribir, contestar, explicar, prestar, regalar,
 * traer), the doubled «le… a Lucía» (optional but very frequent after the verb;
 * needed with the person in front and with a mí, a ti, a él, a ella, a usted),
 * the contrast lo / la (invitar, ver, llamar) vs le (decir, preguntar), and
 * leísmo described only as a Spanish regional usage (RAE accepts it with a
 * man, singular). Two pronouns together (se lo) wait for lesson 364.
 * Scene: in a public library, Marta and Rubén prepare a surprise farewell party
 * for their colleague Lucía, who is going back to Chile; Óscar and the director,
 * señor Herrera, help. In the voice message Lucía (Chilean voice, ustedes)
 * thanks the team from the airport. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 363,
  level: 'A2',
  title: 'Objeto indirecto: le, les, me, te, nos',
  subtitle: 'Decir a quién das, mandas, dices o preguntas algo con me, te, le, nos, les, y usar bien «le… a Lucía».',
  legend: [
    { tone: 'orange', label: 'LE · LES · la persona que recibe (indirect object: to him, to her, to them)' },
    { tone: 'teal', label: 'ME · TE · NOS · OS · yo, tú, nosotros, vosotros (to me, to you, to us)' },
    { tone: 'violet', label: 'A + PERSONA · le… a Lucía, a mí me… (the person, said again)' },
    { tone: 'blue', label: 'LO · LA · LOS · LAS · objeto directo, para comparar (direct object)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿A quién?', coach: '¿Quién recibe? Who receives it?',
      steps: [
        { title: 'Una fiesta sorpresa · A surprise party', blocks: [
          { kind: 'lead', text: 'Lucía trabaja en la biblioteca municipal desde hace seis años. Ahora vuelve a Chile, y sus compañeros preparan una fiesta sorpresa para el viernes. Marta lo organiza todo. Ayer **le mandó un mensaje a Lucía**: «¿Estás libre el viernes por la tarde?». Hoy aprendes a decir **a quién** das, mandas, dices o preguntas algo.', en: 'Lucía has worked at the public library for six years. Now she is going back to Chile, and her colleagues are preparing a surprise party for Friday. Marta is organising everything. Yesterday she sent Lucía a message: “Are you free on Friday afternoon?”. Today you learn to say who you give, send, tell or ask something to.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres versiones y tu alumno repite. Después tu alumno dice qué palabra es el mensaje y qué palabra es Lucía.', self: 'Lee las tres versiones en voz alta. ¿Qué palabra dice «el mensaje»? ¿Qué palabras dicen «Lucía»? (Which words refer to Lucía?)' } },
          { kind: 'compare', title: 'Tres maneras de decirlo · Three ways to say it', columns: [
            { tone: 'neutral', label: 'CON EL NOMBRE', sentence: 'Marta mandó un mensaje a Lucía.', idea: 'Correcto: «a Lucía» dice quién recibe.', en: 'Marta sent a message to Lucía.' },
            { tone: 'orange', label: 'CON EL PRONOMBRE', sentence: 'Marta [[le|orange]] mandó un mensaje.', idea: 'Ya sabemos quién es: «le» = a Lucía.', en: 'Marta sent her a message.' },
            { tone: 'violet', label: 'LAS DOS COSAS', sentence: 'Marta [[le|orange]] mandó un mensaje [[a Lucía|violet]].', idea: 'Lo más frecuente al hablar: el pronombre y la persona.', en: 'Marta sent Lucía a message. (very common)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Marta le mandó un mensaje.» ¿Qué es «le»?', options: ['el mensaje', 'a Lucía', 'Marta'], answer: 1, why: '«Le» es la persona que recibe el mensaje: Lucía.', en: '“Marta le mandó un mensaje.” What does “le” refer to?' },
            { prompt: '¿Qué frase es correcta y muy natural?', options: ['Marta mandó le un mensaje a Lucía.', 'Marta la mandó un mensaje a Lucía.', 'Marta le mandó un mensaje a Lucía.'], answer: 2, why: '«Le» va delante del verbo, y es «le» porque Lucía recibe el mensaje.', en: 'Which sentence is correct and very natural?' },
          ] },
        ] },
        { title: 'Me, te, le, nos, os, les', mascot: '/brand/mascot/studying.webp', coach: 'Una forma para cada persona. One form per person.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'OBJETO INDIRECTO', question: '¿A quién? ¿Quién recibe algo?', en: 'To whom? Who receives something?', formula: ['me · te · le · nos · os · les + verbo conjugado', 'dar, mandar, decir, preguntar, contestar, escribir, explicar, prestar, regalar, traer'],
            meaning: 'El **objeto indirecto** es la persona que **recibe** algo: un objeto, un mensaje, una respuesta, una explicación. Responde a «¿a quién?». El pronombre va **delante del verbo conjugado**: «le dije», «nos prestó», «te escribo».',
            examples: [
              { es: 'El director [[nos|teal]] prestó la sala de lectura.', en: 'The director lent us the reading room.' },
              { es: '¿[[Te|teal]] contestó Lucía?', en: 'Did Lucía answer you?' },
              { es: 'Rubén [[les|orange]] explicó el plan a los compañeros.', en: 'Rubén explained the plan to the colleagues.' },
            ],
            note: '**Le** es igual para hombre y mujer, y también para **usted**: «Señor Herrera, ¿le dejo la llave?».' },
          { kind: 'table', title: 'Las formas · The forms', head: ['Persona · Person', 'Objeto indirecto', 'Ejemplo · Example'], rows: [
            ['yo', '**me**', 'Lucía [[me|teal]] escribió. (Lucía wrote to me.)'],
            ['tú', '**te**', 'Mañana [[te|teal]] mando la lista. (I’ll send you the list tomorrow.)'],
            ['él · ella · usted', '**le**', '[[Le|orange]] pregunté la hora. (I asked him / her / you the time.)'],
            ['nosotros · nosotras', '**nos**', 'Óscar [[nos|teal]] trajo flores. (Óscar brought us flowers.)'],
            ['vosotros · vosotras (España)', '**os**', 'Marta [[os|teal]] manda la invitación. (Marta is sending you the invitation.)'],
            ['ellos · ellas · ustedes', '**les**', '[[Les|orange]] di las gracias. (I thanked them / you all.)'],
          ], note: 'Ya los usas con **gustar** y **encantar** (clases 032 y 062): «me gusta», «le duele», «les falta tiempo». Allí eran bloques fijos; hoy ves el sistema completo. **Me, te, nos, os** son iguales en objeto directo e indirecto; solo cambia la tercera persona: **lo / la** frente a **le**. En América, para «you» plural se usa **les** (ustedes); en España, **os** (vosotros) o **les** (ustedes, formal).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Marta y Rubén piden ayuda al director: «Señor Herrera, ¿___ presta la sala?»', options: ['les', 'me', 'nos'], answer: 2, why: 'Marta y Rubén (nosotros) reciben la sala: nos.', en: '“Mr Herrera, will you lend us the room?”' },
            { prompt: 'Rubén escribe a los compañeros: ___ escribí a todos ayer.', options: ['Le', 'Les', 'Los'], answer: 1, why: 'Reciben varias personas: les.', en: 'I wrote to all of them yesterday.' },
            { prompt: 'Óscar a Marta: «¿___ mandas la dirección, por favor?»', options: ['Te', 'Le', 'Me'], answer: 2, why: 'Óscar (yo) quiere recibir la dirección: me.', en: '“Can you send me the address, please?”' },
          ] },
        ] },
        { title: 'Le… a Lucía · Saying the person twice', mascot: '/brand/mascot/standing.webp', coach: 'Le… a Lucía: no es un error. It is not a mistake.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'EL PRONOMBRE Y LA PERSONA', question: '¿Por qué «le» y también «a Lucía»?', en: 'Why “le” and also “a Lucía”?', formula: ['le / les + verbo… + a + persona', 'a + persona + le / les + verbo'],
            meaning: 'En español es muy normal decir el pronombre **y** la persona en la misma frase: «Le mandé el mensaje a Lucía». No es una repetición inútil: «le» dice que alguien recibe, y «a Lucía» dice quién es. Con la persona **después** del verbo, el pronombre es opcional, pero muy frecuente. Con la persona **delante** del verbo, o con **a mí, a ti, a él, a ella, a usted, a ellos**, el pronombre es **necesario**.',
            examples: [
              { es: '[[Le|orange]] di las gracias [[a Óscar|violet]].', en: 'I thanked Óscar.' },
              { es: '[[A los compañeros|violet]] [[les|orange]] mandé la invitación ayer.', en: 'I sent the colleagues the invitation yesterday.' },
              { es: '[[Le|orange]] di el regalo [[a ella|violet]], no a su hermana.', en: 'I gave the present to her, not to her sister.' },
            ] },
          { kind: 'table', title: '¿Cuándo es necesario «le»? · When do you need “le”?', head: ['La persona…', '¿Pronombre?', 'Ejemplo'], rows: [
            ['después del verbo (after the verb)', 'opcional, muy frecuente', '([[Le|orange]]) mandé el mensaje [[a Lucía|violet]].'],
            ['delante del verbo (before the verb)', 'necesario', '[[A Lucía|violet]] [[le|orange]] mandé el mensaje.'],
            ['a mí, a ti, a él, a ella, a usted…', 'necesario', 'Lucía [[me|teal]] escribió [[a mí|violet]].'],
          ], note: 'Con **le** a veces no está claro quién es (¿él, ella, usted?). Por eso «a Óscar», «a ella» o «a usted» ayudan mucho.' },
          { kind: 'tip', icon: '💡', title: '«A mí me…» para contrastar · “A mí me…” for contrast', text: '«[[A mí|violet]] [[me|teal]] escribió, pero [[a ti|violet]] no.» «A mí» sirve para contrastar o insistir, como en «a mí me gusta». Pero «me» no desaparece: «A mí escribió» no es correcto.', en: '“She wrote to me, but not to you.” “A mí” is for contrast or emphasis, as in “a mí me gusta”. But “me” does not disappear: “A mí escribió” is wrong.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ dije la hora a Óscar esta mañana.', options: ['Lo', 'Les', 'Le'], answer: 2, why: 'Óscar, una persona, recibe la información: le. Con «a Óscar» después, el pronombre es muy frecuente.', en: 'I told Óscar the time this morning.' },
            { prompt: 'A Lucía ___ compramos un álbum de fotos.', options: ['le', 'la', '(nada)'], answer: 0, why: 'La persona va delante del verbo: el pronombre es necesario, y es «le» porque Lucía recibe el álbum.', en: 'We bought Lucía a photo album.' },
            { prompt: '¿Qué frase es correcta?', options: ['A mí dio la llave.', 'Dio la llave a mí.', 'Me dio la llave a mí.'], answer: 2, why: 'Con «a mí» el pronombre «me» es necesario.', en: 'He gave the key to me.' },
          ] },
        ] },
        { title: '¿Lo o le? · Lo or le?', mascot: '/brand/mascot/speaking.webp', coach: 'Ver a alguien o decir algo a alguien.', blocks: [
          { kind: 'compare', title: 'La misma persona, dos papeles · Same person, two roles', columns: [
            { tone: 'blue', label: 'LO · LA · la persona del verbo', sentence: 'Invité a Lucía: [[la|blue]] invité.', idea: 'Invito, veo, llamo, espero **a alguien**: lo / la.', en: 'I invited Lucía: I invited her.' },
            { tone: 'orange', label: 'LE · la persona que recibe', sentence: 'Dije la hora a Lucía: [[le|orange]] dije la hora.', idea: 'Digo, mando, pregunto **algo a alguien**: le.', en: 'I told Lucía the time: I told her the time.' },
          ] },
          { kind: 'table', title: 'Verbos frecuentes · Common verbs', head: ['lo · la · los · las', 'le · les'], rows: [
            ['ver, llamar, invitar, conocer, visitar, esperar', 'dar, mandar, decir, preguntar, contestar, escribir, explicar, prestar, regalar, traer'],
            ['A Óscar [[lo|blue]] vi en la entrada.', '[[Le|orange]] pregunté por la fiesta.'],
            ['A Marta [[la|blue]] llamo esta noche.', '[[Le|orange]] escribo un mensaje esta noche.'],
          ], note: 'Truco: si en la frase hay **una cosa** que pasa a la persona (un mensaje, la hora, un regalo), la persona es casi siempre **le / les**. Con preguntar, contestar y escribir también: «le pregunté», «le contesté», «le escribí».' },
          { kind: 'decide', title: '¿Lo / la o le?', steps: [
            { q: '¿La persona recibe algo? (un mensaje, una respuesta, un regalo: «algo a alguien»)', yes: 'Usa **le** (una persona) o **les** (varias): «Le mandé la foto».', no: 'next' },
            { q: '¿La persona es directamente lo que ves, llamas, invitas o esperas?', yes: 'Usa **lo / la / los / las**: «La invité», «Los vi».', no: 'Mira el verbo: preguntar, contestar y escribir (a alguien) van con **le**: «Le contesté».' },
          ] },
          { kind: 'tip', icon: '🇪🇸', title: '«Le vi» en España · “Le vi” in Spain', text: 'En muchas zonas de España se oye «[[le|orange]] vi» o «[[le|orange]] invité» cuando la persona es **un hombre**. Es el **leísmo**, y la RAE lo acepta en ese caso (un hombre, singular). Con una mujer o con cosas no se acepta: «la vi», «lo compré». En esta clase usamos **lo / la**, que es correcto en todas partes.', en: 'In many parts of Spain people say “le vi” or “le invité” when the person is a man. This is called leísmo, and the RAE accepts it in that case (one man). With a woman or with things it is not accepted: “la vi”, “lo compré”. In this class we use lo / la, which is correct everywhere.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía no sabe nada de la fiesta. Marta ___ llamó el lunes con una excusa.', options: ['le', 'la', 'les'], answer: 1, why: 'Llamar a alguien: la persona es el objeto directo. Lucía, mujer: la.', en: 'Marta called her on Monday with an excuse.' },
            { prompt: 'Marta ___ preguntó a Lucía: «¿Estás libre el viernes?».', options: ['le', 'la', 'lo'], answer: 0, why: 'Preguntar algo a alguien: la persona es objeto indirecto, le.', en: 'Marta asked Lucía: “Are you free on Friday?”.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Una persona o varias? One person or more?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla. Después aparece la corrección y tu alumno la lee en voz alta.', self: 'Lee cada frase y busca el error antes de ver la corrección. (Find the mistake before you look at the correction.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Le mandé la invitación a los compañeros.', right: 'Les mandé la invitación a los compañeros.', why: 'Reciben varias personas: les. En la conversación se oye a veces «le» con plural, pero la forma recomendada es «les». (Several people: les.)' },
            { wrong: 'La dije la hora a Lucía.', right: 'Le dije la hora a Lucía.', why: 'Lucía recibe la información: le. «La dije» se oye en algunas zonas del centro de España, pero no es la norma. (She receives the information: le.)' },
            { wrong: 'Mandé le un mensaje.', right: 'Le mandé un mensaje.', why: 'Con un verbo conjugado, el pronombre va delante. (The pronoun goes before a conjugated verb.)' },
            { wrong: 'Di el regalo a ella.', right: 'Le di el regalo a ella.', why: 'Con «a ella», «a él», «a usted» el pronombre es necesario. (With a ella, you need le.)' },
            { wrong: 'A Lucía mandé un mensaje.', right: 'A Lucía le mandé un mensaje.', why: 'Si la persona va delante del verbo, el pronombre es necesario. (Person first: le is needed.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A los compañeros de la tarde ___ escribí ayer.', options: ['les', 'le', 'los'], answer: 0, why: 'Varias personas, y van delante del verbo: les es necesario.', en: 'I wrote to the afternoon colleagues yesterday.' },
            { prompt: '¿Qué frase es correcta?', options: ['Le contesté enseguida.', 'La contesté enseguida a Marta.', 'Contesté le enseguida.'], answer: 0, why: 'Contestar a alguien: le, delante del verbo conjugado.', en: 'I answered her straight away.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres cosas que hizo ayer por otras personas: «Le mandé…», «Les dije…», «Me dieron…». Tú preguntas cada vez: «¿A quién?», y tu alumno responde con «a + persona».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Todo listo para el viernes', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la sala de personal · In the staff room', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rubén y tu alumno es Marta. Después tu alumno toca cada pronombre marcado y dice a quién se refiere.', self: 'Lee el diálogo en voz alta. Después toca cada pronombre marcado y di a quién se refiere. (Say who each pronoun refers to.)' } },
          { kind: 'explore', title: 'La fiesta de Lucía', setting: 'Miércoles, en la sala de personal de la biblioteca. Rubén y Marta hablan en voz baja: Lucía está en la sala de al lado. (Wednesday, in the library staff room. Rubén and Marta talk quietly: Lucía is in the next room.)', lines: [
            { who: 'Rubén', text: 'Marta, ¿cómo va la fiesta? ¿Ya [[les|orange]] mandaste la invitación [[a los compañeros|violet]]?', en: 'Marta, how is the party going? Have you sent the colleagues the invitation yet?' },
            { who: 'Marta', text: 'Sí, ayer [[les|orange]] escribí [[a todos|violet]]. Y [[a Lucía|violet]] [[le|orange]] mandé un mensaje: «¿Estás libre el viernes por la tarde?».', en: 'Yes, I wrote to everyone yesterday. And I sent Lucía a message: “Are you free on Friday afternoon?”.' },
            { who: 'Rubén', text: '¿Y qué [[te|teal]] contestó?', en: 'And what did she answer you?' },
            { who: 'Marta', text: 'Que sí. No sabe nada. ¿Y Óscar? ¿[[Lo|blue]] invitaste?', en: 'She said yes. She knows nothing. And Óscar? Did you invite him?' },
            { who: 'Rubén', text: 'Sí, [[lo|blue]] vi en la entrada y [[le|orange]] dije la hora: a las seis, en la sala de lectura.', en: 'Yes, I saw him at the entrance and told him the time: at six, in the reading room.' },
            { who: 'Marta', text: '¡Perfecto! ¿Y el regalo? [[A ella|violet]] [[le|orange]] encantan las fotos.', en: 'Perfect! And the present? She loves photos.' },
            { who: 'Rubén', text: 'Ya compré un álbum precioso. Mañana [[les|orange]] pido una foto [[a todos|violet]] para ponerla dentro.', en: 'I’ve already bought a beautiful album. Tomorrow I’ll ask everyone for a photo to put in it.' },
            { who: 'Marta', text: '¡Qué buena idea! ¿Y el señor Herrera [[nos|teal]] presta la sala?', en: 'What a good idea! And is Mr Herrera lending us the room?' },
            { who: 'Rubén', text: 'Sí, ayer [[me|teal]] dio la llave. El viernes a las cinco abrimos.', en: 'Yes, he gave me the key yesterday. On Friday we open at five.' },
            { who: 'Marta', text: 'Genial. Yo [[le|orange]] escribo la tarjeta [[a Lucía|violet]] de parte de todos. ¿[[Me|teal]] prestas tu bolígrafo verde?', en: 'Great. I’ll write the card to Lucía from all of us. Can you lend me your green pen?' },
            { who: 'Rubén', text: 'Claro, aquí tienes. Y después [[me|teal]] pasas la tarjeta [[a mí|violet]]: yo [[la|blue]] guardo con el regalo.', en: 'Sure, here you are. And then you pass the card to me: I’ll keep it with the present.' },
          ], notes: {
            'les': 'Les = a varias personas (los compañeros, todos). Va delante del verbo: les mandaste, les escribí, les pido.',
            'a los compañeros': 'La persona después del verbo. Con «les» delante, es lo más frecuente al hablar: les mandaste… a los compañeros.',
            'a todos': '«A todos» dice quiénes son: les = a todos. Es plural, por eso les y no le.',
            'a Lucía': 'A + persona: quién recibe. Delante del verbo («A Lucía le mandé») el pronombre es necesario.',
            'le': 'Le = a una persona: a Lucía, a Óscar, a ella. Igual para hombre y mujer.',
            'te': 'Te = a ti. Rubén pregunta qué respuesta recibió Marta.',
            'Lo': 'Lo, no le: invitar a alguien. Óscar es la persona del verbo (objeto directo).',
            'lo': 'Lo vi: ver a alguien. Óscar es el objeto directo. Compara: le dije la hora (Óscar recibe la información).',
            'A ella': '«A ella» delante del verbo: el pronombre le es necesario. Encantar funciona como gustar: le encantan las fotos (she loves photos).',
            'nos': 'Nos = a nosotros: a Marta, a Rubén y a sus compañeros.',
            'me': 'Me = a mí (a Rubén). El director le dio la llave a Rubén.',
            'Me': 'Me = a mí (a Marta). Prestar algo a alguien: ¿me prestas…? (Can you lend me…?)',
            'a mí': '«A mí» insiste: no a otra persona. Con «a mí», «me» es necesario: me pasas la tarjeta a mí.',
            'la': 'La = la tarjeta: es la cosa, objeto directo. No es una persona que recibe.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué le preguntó Marta a Lucía en su mensaje?', options: ['Si quería una fiesta.', 'Si estaba libre el viernes por la tarde.', 'Si le gustaban las fotos.'], answer: 1, why: '«Le mandé un mensaje: ¿Estás libre el viernes por la tarde?».', en: 'What did Marta ask Lucía in her message?' },
            { prompt: '¿Quién le dijo la hora a Óscar?', options: ['El señor Herrera.', 'Rubén.', 'Marta.'], answer: 1, why: 'Rubén: «Lo vi en la entrada y le dije la hora».', en: 'Who told Óscar the time?' },
            { prompt: '¿Qué les va a pedir Rubén a los compañeros?', options: ['Una foto para el álbum.', 'Dinero para el regalo.', 'La llave de la sala.'], answer: 0, why: '«Mañana les pido una foto a todos para ponerla dentro».', en: 'What is Rubén going to ask the colleagues for?' },
          ] },
        ] },
        { title: '¿Le / les o lo / la? · Le / les or lo / la?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Los preparativos · The preparations', categories: [
            { id: 'oi', label: 'LE · LES · la persona recibe (objeto indirecto)', tone: 'orange' },
            { id: 'od', label: 'LO · LA · LOS · LAS · la cosa o la persona del verbo (objeto directo)', tone: 'blue' },
          ], items: [
            { text: 'Óscar no sabía la hora y Rubén le dijo: «A las seis».', answer: 'oi', why: 'Óscar recibe la información: le.' },
            { text: 'El álbum es precioso: Rubén lo compró el lunes.', answer: 'od', why: 'Lo = el álbum, la cosa que compró.' },
            { text: 'Lucía leyó el mensaje y le contestó a Marta.', answer: 'oi', why: 'Contestar a alguien: le (a Marta).' },
            { text: 'La tarjeta es grande: todos la firman.', answer: 'od', why: 'La = la tarjeta, la cosa que firman.' },
            { text: 'Los compañeros no sabían nada, y Marta les escribió.', answer: 'oi', why: 'Escribir a alguien: les (a los compañeros).' },
            { text: 'A Óscar lo vio Rubén en la entrada.', answer: 'od', why: 'Ver a alguien: Óscar es el objeto directo, lo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué le regalaste tú a un compañero o a una amiga la última vez?». Tu alumno responde con «Le regalé… a…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿A quién? Una persona: le. Varias: les.',
      steps: [
        { title: 'Jueves: los últimos detalles · Thursday: the last details', blocks: [
          { kind: 'choice', items: [
            { context: 'Marta habla con el director. (Marta talks to the director.)', prompt: 'Marta ___ pregunta al señor Herrera: «¿Podemos usar las sillas azules?».', options: ['les', 'lo', 'le'], answer: 2, why: 'Preguntar algo a alguien: el señor Herrera recibe la pregunta, le.', en: 'Marta asks Mr Herrera: “Can we use the blue chairs?”.' },
            { context: 'Rubén quiere fotos para el álbum. (Rubén wants photos for the album.)', prompt: 'Rubén ___ pide una foto a cada compañero.', options: ['les', 'lo', 'le'], answer: 2, why: '«Cada compañero» es singular: una persona cada vez, le.', en: 'Rubén asks each colleague for a photo.' },
            { context: 'Los compañeros de la tarde no saben nada. (The afternoon colleagues don’t know anything.)', prompt: 'Marta ___ manda un correo con la hora.', options: ['los', 'le', 'les'], answer: 2, why: 'Varias personas reciben el correo: les.', en: 'Marta sends them an email with the time.' },
            { context: 'Óscar llama a Marta. (Óscar phones Marta.)', prompt: '«Marta, ¿___ mandas la dirección exacta de la sala?»', options: ['te', 'me', 'le'], answer: 1, why: 'Óscar (yo) quiere recibir la dirección: me.', en: '“Marta, can you send me the exact address of the room?”' },
            { context: 'Marta responde. (Marta answers.)', prompt: '«Sí, ahora ___ mando un mensaje con todo.»', options: ['me', 'lo', 'te'], answer: 2, why: 'Marta habla con Óscar (tú): te mando.', en: '“Yes, I’ll send you a message with everything now.”' },
          ] },
        ] },
        { title: '¿Quién recibe? · Who receives it?', blocks: [
          { kind: 'classify', title: 'Elige el pronombre · Choose the pronoun', categories: [
            { id: 'le', label: 'LE · una persona (él, ella, usted)', tone: 'orange' },
            { id: 'les', label: 'LES · varias personas (ellos, ellas, ustedes)', tone: 'orange' },
            { id: 'nos', label: 'NOS · nosotros, nosotras', tone: 'teal' },
          ], items: [
            { text: 'El señor Herrera ___ dio la llave a Rubén.', answer: 'le', why: 'Rubén: una persona, le.' },
            { text: 'Señora Paredes, ¿___ mando la invitación a usted también?', answer: 'le', why: 'Usted: le, aunque es «you».' },
            { text: 'Marta ___ manda la lista a Óscar y a Rubén.', answer: 'les', why: 'Óscar y Rubén: dos personas, les.' },
            { text: 'Lucía ___ contestó a todos con un corazón.', answer: 'les', why: 'A todos: varias personas, les.' },
            { text: 'El director ___ presta la sala a nosotros.', answer: 'nos', why: 'A nosotros: nos.' },
            { text: 'Óscar, ¿___ dices la hora a nosotras también?', answer: 'nos', why: 'A nosotras: nos.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Les compré un regalo a Lucía.', ok: false, options: ['Lo compré un regalo a Lucía.', 'La compré un regalo a Lucía.', 'Le compré un regalo a Lucía.'], answer: 2, why: 'Lucía es una persona que recibe: le. «Un regalo» es la cosa y no cambia el pronombre de la persona.' },
            { sentence: 'Rubén dijo la hora a él.', ok: false, options: ['Rubén dijo le la hora a él.', 'Rubén le dijo la hora a él.', 'Rubén lo dijo la hora a él.'], answer: 1, why: 'Con «a él» el pronombre es necesario, y va delante del verbo: le dijo.' },
            { sentence: 'Marta la escribió un mensaje a Lucía.', ok: false, options: ['Marta les escribió un mensaje a Lucía.', 'Marta escribió la un mensaje a Lucía.', 'Marta le escribió un mensaje a Lucía.'], answer: 2, why: 'Escribir algo a alguien: Lucía recibe el mensaje, le. «La» sería la cosa (objeto directo).' },
            { sentence: 'A Óscar lo invitamos y le dijimos la hora.', ok: true, why: 'Correcta: invitar a alguien → lo; decir algo a alguien → le.' },
            { sentence: 'Al director mandamos una foto de la fiesta.', ok: false, options: ['Al director le mandamos una foto de la fiesta.', 'Al director les mandamos una foto de la fiesta.', 'Al director lo mandamos una foto de la fiesta.'], answer: 0, why: 'La persona va delante del verbo: el pronombre es necesario. Una persona que recibe: le.' },
          ] },
        ] },
        { title: 'El lunes: Rubén habla con el director · Monday: Rubén talks to the director', blocks: [
          { kind: 'chat-fill', title: 'En el despacho del señor Herrera · In Mr Herrera’s office', lines: [
            { who: 'Rubén', text: 'Señor Herrera, ¿___ puedo hacer una pregunta?', options: ['lo', 'le', 'me'], answer: 1, why: 'Rubén habla de usted al director: usted recibe la pregunta, le.' },
            { who: 'Señor Herrera', text: 'Claro, Rubén. Dime.' },
            { who: 'Rubén', text: 'El viernes ___ damos una sorpresa a Lucía. ¿___ deja la sala de lectura?', options: ['le · Nos', 'la · Nos', 'le · Me'], answer: 0, why: 'Lucía recibe la sorpresa: le. El equipo (nosotros) recibe la sala: nos.' },
            { who: 'Señor Herrera', text: 'Sí, claro. Y el martes ___ doy la llave a ti.', options: ['te', 'le', 'ti'], answer: 0, why: 'El director habla con Rubén de tú: te doy… a ti. «Ti» solo va después de «a».' },
            { who: 'Rubén', text: 'Gracias. ¿Usted va a venir? A Lucía ___ encanta trabajar con usted.', options: ['le', 'la', 'lo'], answer: 0, why: 'Encantar funciona como gustar: a Lucía le encanta.' },
            { who: 'Señor Herrera', text: 'Por supuesto. Y ___ voy a llevar un libro de regalo.', options: ['le', 'la', 'lo'], answer: 0, why: 'Lucía recibe el libro: le. El libro es la cosa.' },
            { who: 'Señor Herrera', text: '¿Y Carmen, la de administración? ¿Ya ___ invitaste?', options: ['la', 'le', 'les'], answer: 0, why: 'Invitar a alguien: la persona es el objeto directo. Carmen, mujer: la.' },
            { who: 'Rubén', text: 'Sí, ___ vi ayer y ___ dije todo.', options: ['le · la', 'la · le', 'la · la'], answer: 1, why: 'Ver a alguien → la; decir algo a alguien → le.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Les', 'pedí', 'una', 'foto', 'a', 'los', 'compañeros'], accept: ['Les pedí una foto a los compañeros', 'A los compañeros les pedí una foto'], en: 'I asked the colleagues for a photo.' },
            { tiles: ['A', 'mí', 'me', 'dieron', 'la', 'llave'], accept: ['A mí me dieron la llave', 'Me dieron la llave a mí'], en: 'They gave the key to me.' },
            { tiles: ['El', 'director', 'nos', 'prestó', 'la', 'sala'], accept: ['El director nos prestó la sala', 'Nos prestó la sala el director'], en: 'The director lent us the room.' },
            { tiles: ['Óscar', 'le', 'trajo', 'flores', 'a', 'Lucía'], accept: ['Óscar le trajo flores a Lucía', 'A Lucía le trajo flores Óscar'], en: 'Óscar brought Lucía flowers.' },
          ] },
        ] },
        { title: 'En la fiesta · At the party', blocks: [
          { kind: 'rewrite', title: 'Escribe con el pronombre · Write it with the pronoun', items: [
            { prompt: 'Marta mandó la lista de canciones a Óscar.', instruction: 'Añade «le» y deja «a Óscar». (Add «le», keep «a Óscar».)', accept: ['Marta le mandó la lista de canciones a Óscar', 'Marta le mandó a Óscar la lista de canciones'] },
            { prompt: 'Rubén explicó el plan a los compañeros de la tarde.', instruction: 'Escribe la frase con el pronombre y sin «a los compañeros de la tarde». (Use the pronoun instead.)', accept: ['Rubén les explicó el plan'] },
            { prompt: 'Lucía / dar un abrazo / a mí (ayer)', instruction: 'Escribe la frase en indefinido. Empieza con «A mí». (Past tense, start with «A mí».)', accept: ['A mí me dio un abrazo Lucía', 'A mí Lucía me dio un abrazo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta tres cosas que hicieron otras personas por él o por ella esta semana: «Mi hermana me prestó…», «Mis amigos me mandaron…», «Mi jefe nos dio…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Lucía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Lucía da las gracias · Lucía says thank you', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿desde dónde habla Lucía y para qué?). Segunda escucha: tu alumno levanta la mano cada vez que oye me, te, le o les. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. En la segunda escucha, cuenta cuántas veces oyes me, te, le o les. (Count the pronouns the second time.)' } },
          { kind: 'listen', title: 'Un audio de Lucía para el grupo', channel: 'AUDIO · DE LUCÍA PARA EL GRUPO DE LA BIBLIOTECA', src: '/audio/grammar-live/363.mp3',
            before: 'Es sábado. Lucía está en el aeropuerto y manda un audio al grupo de sus compañeros. ¿Qué crees que les dice? (Lucía sends a voice message to her colleagues from the airport. What do you think she tells them?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Lucía da las gracias por la fiesta sorpresa y se despide.', 'Lucía invita a sus compañeros a una fiesta en Chile.', 'Lucía pide ayuda porque perdió el avión.'], answer: 0, why: 'Habla de la fiesta («no sabía nada»), da las gracias a cada persona y se despide con un abrazo.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cómo preparó Marta la sorpresa?', options: ['Le dijo la verdad el martes.', 'La llamó desde la sala.', 'Le escribió con una excusa.'], answer: 2, why: '«El martes me escribiste con una excusa y yo te creí».', en: 'How did Marta prepare the surprise?' },
              { prompt: '¿A quién le mandó Lucía fotos del álbum?', options: ['A su mamá.', 'A Rubén.', 'Al señor Herrera.'], answer: 0, why: '«Anoche le mandé fotos de todas las páginas a mi mamá».', en: 'Who did Lucía send photos of the album to?' },
              { prompt: '¿Por qué le dejó una nota al señor Herrera?', options: ['Porque le debía un libro.', 'Porque no lo vio para despedirse.', 'Porque él no fue a la fiesta.'], answer: 1, why: '«Le dejé una nota en su mesa, porque al final no lo vi para despedirme».', en: 'Why did she leave Mr Herrera a note?' },
              { prompt: '¿Qué les va a mandar Lucía mañana?', options: ['Una foto del mar.', 'Una tarjeta para todos.', 'Las flores de Óscar.'], answer: 0, why: '«Mañana, desde Valparaíso, les mando una foto del mar».', en: 'What is Lucía going to send them tomorrow?' },
            ],
            transcript: 'Hola, chicos, soy Lucía. [[Les|orange]] mando este audio desde el aeropuerto. Todavía estoy emocionada: ¡no sabía nada de la fiesta! Marta, [[a ti|violet]] [[te|teal]] debo la sorpresa: el martes [[me|teal]] escribiste con una excusa y yo [[te|teal]] creí. Rubén, el álbum es precioso. Anoche [[le|orange]] mandé fotos de todas las páginas [[a mi mamá|violet]], y [[le|orange]] encantaron. [[Al señor Herrera|violet]] [[le|orange]] dejé una nota en su mesa, porque al final no [[lo|blue]] vi para despedirme. ¿[[Le|orange]] pueden dar las gracias de mi parte? Y Óscar, tus flores vienen conmigo en el avión. Mañana, desde Valparaíso, [[les|orange]] mando una foto del mar. Y ustedes [[me|teal]] tienen que visitar, ¿eh? Un abrazo enorme a todos.',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es Marta y responde al audio con tres frases: qué le dijeron al señor Herrera, qué le mandan a Lucía y una pregunta para ella.', self: 'Responde a Lucía en voz alta como Marta: qué le dijiste al señor Herrera, qué le vas a mandar y una pregunta para ella. (Answer Lucía as Marta.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Regalos, mensajes y favores', coach: '¿A quién? Di la persona. Say who.',
      steps: [
        { title: 'Tú y las personas de tu vida · You and the people in your life', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Tu alumno responde con frases completas y con «a + persona» cuando ayuda. Tú repites su frase con el pronombre correcto y sigues con la repregunta.', self: 'Lee la pregunta y responde en voz alta con frases completas. Usa «a + persona» cuando ayuda: «Le escribo a mi hermana». (Answer aloud in full sentences.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué le regalas normalmente a un amigo o a una amiga en su cumpleaños? · What do you usually give a friend for their birthday?', followUps: ['¿Y qué te regalaron a ti el año pasado? (And what did they give you last year?)', '¿Qué regalo te gustó mucho? (Which present did you really like?)'], phrases: ['Normalmente [[le|orange]] regalo…', '[[A mi mejor amiga|violet]] [[le|orange]] regalé…', '[[A mí|violet]] [[me|teal]] regalaron…'], hint: 'La persona que recibe: le (una), les (varias), me (yo).', example: 'Normalmente le regalo un libro o algo para su casa. El año pasado a mí me regalaron una planta preciosa.', next: 'Ahora, los mensajes.', teacher: 'Cuenta tú también un regalo: «A mi hermano le regalé…». Así tu alumno oye la frase con «a + persona».' },
            { q: '¿A quién le mandas más mensajes? ¿Qué le escribes? · Who do you send the most messages to? What do you write?', followUps: ['¿Quién te escribe a ti todos los días? (Who writes to you every day?)', '¿Les mandas audios a tus amigos? (Do you send voice messages to your friends?)'], phrases: ['[[Le|orange]] mando más mensajes [[a…|violet]]', '[[Les|orange]] escribo [[a mis amigos|violet]]…', '[[Me|teal]] escribe todos los días…'], hint: 'Mandar y escribir algo a alguien: le / les.', example: 'Le mando más mensajes a mi hermana. Le mando fotos de mi día y ella me contesta con audios.', next: 'Ahora, un favor.' },
            { q: '¿Alguien te prestó algo o te dio un buen consejo este año? · Did anyone lend you something or give you good advice this year?', followUps: ['¿Qué te dijo? (What did they tell you?)', '¿Le diste las gracias? ¿Cómo? (Did you thank them? How?)'], phrases: ['Mi compañero [[me|teal]] prestó…', 'Mi madre [[me|teal]] dio un consejo…', '[[Le|orange]] di las gracias con…'], hint: 'Lo que tú recibes: me. Lo que tú das a otra persona: le.', example: 'Mi compañera me prestó su coche una semana. Le di las gracias con una cena en mi casa.', next: 'Ahora, una despedida.' },
            { q: 'Piensa en una persona que se fue a otra ciudad o a otro país. ¿Qué le dijiste? ¿Le diste algo? · Think of someone who moved away. What did you tell them? Did you give them something?', followUps: ['¿Le escribes todavía? (Do you still write to them?)', '¿Qué te manda esa persona? (What does that person send you?)'], phrases: ['[[A mi amigo…|violet]] [[le|orange]] dije…', '[[Le|orange]] regalamos…', 'Ahora [[me|teal]] manda fotos de…'], hint: 'Con la persona delante («A mi amigo…»), «le» es necesario.', example: 'A mi amiga Clara le dije: «Te voy a visitar». Le regalamos un mapa de nuestra ciudad. Ahora me manda fotos de Lisboa.', next: 'Ahora, lo o le.' },
            { q: '¿A quién llamas por teléfono y a quién le escribes mensajes? · Who do you phone and who do you text?', followUps: ['¿A quién invitas a tu cumpleaños? (Who do you invite to your birthday?)', '¿Y qué les pides a tus invitados? (And what do you ask your guests for?)'], phrases: ['[[A mi madre|violet]] [[la|blue]] llamo…', '[[A mis amigos|violet]] [[les|orange]] escribo…', '[[Los|blue]] invito y [[les|orange]] pido…'], hint: 'Llamar e invitar a alguien: lo / la. Escribir o pedir algo a alguien: le / les.', example: 'A mi madre la llamo los domingos. A mis amigos les escribo mensajes. A mi cumpleaños los invito a todos y les pido solo una cosa: buena música.', teacher: 'Si tu alumno dice «le llamo» para un hombre, es el leísmo frecuente en España, y se acepta. Si dice «le llamo» para una mujer, tú repites con «la llamo».' },
            { q: 'Tú eres Marta. Es jueves y Rubén te pregunta: «¿Ya está todo listo?». Cuenta qué hiciste y a quién. · You are Marta. Tell Rubén what you did and for whom.', followUps: ['¿Le dijiste la hora a Óscar? (Did you tell Óscar the time?)', '¿Qué le escribiste a Lucía en la tarjeta? (What did you write to Lucía on the card?)'], phrases: ['[[A los compañeros|violet]] [[les|orange]] mandé…', '[[Al señor Herrera|violet]] [[le|orange]] pedí…', '[[A Lucía|violet]] [[le|orange]] escribí…'], hint: 'Tres o cuatro frases, cada una con una persona distinta.', example: 'Sí. A los compañeros les mandé la invitación. Al señor Herrera le pedí las sillas azules. A Lucía le escribí la tarjeta. Y a ti te doy el regalo mañana.', teacher: 'Tú eres Rubén y reaccionas: «¿Y a Óscar?», «¿Y a mí?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué le regalas a…?», «¿Quién te escribe?») y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta («¿Qué le regalas a…?», «¿Quién te escribe?») y respóndelas otra vez con otra persona. (Ask the questions and answer about someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para Lucía', coach: 'Quién da, quién recibe. Who gives, who receives.',
      steps: [
        { title: 'Noticias de la biblioteca · News from the library', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada pronombre: ¿a quién se refiere? ¿Es una persona o varias? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada pronombre: ¿a quién se refiere? (Check who each pronoun refers to.)' } },
          { kind: 'write', title: 'Un correo a Valparaíso · An email to Valparaíso', situation: 'Eres un compañero o una compañera de Lucía en la biblioteca. Pasó una semana desde la fiesta. Escríbele un correo a Lucía: cuéntale qué hicieron con su nota, sus fotos o sus cosas, y pregúntale cómo está. (You are one of Lucía’s colleagues. A week has passed since the party. Write her an email: tell her what you did with her note, photos or things, and ask how she is.)', task: [
            'Saluda a Lucía y pregúntale cómo está en Chile. (Greet Lucía and ask how she is in Chile.)',
            'Cuenta dos cosas que alguien le dio, le dijo o le mandó a otra persona: usa le o les. (Two things someone gave, told or sent to someone: use le or les.)',
            'Usa una vez «a + persona» con le o les: «Al señor Herrera le…». (Use «a + person» with le or les once.)',
            'Escribe una frase con me, te o nos: «Óscar me preguntó por ti». (One sentence with me, te or nos.)',
            'Termina con una pregunta para Lucía y despídete. (End with a question for Lucía and say goodbye.)',
          ], starters: ['Querida Lucía:', '¿Qué tal en Valparaíso?', 'Al señor Herrera le…', 'Óscar me preguntó…', 'Ayer les mandé…', '¿Te gustó…?', 'Un abrazo,'],
            words: ['me', 'te', 'le', 'nos', 'les', 'a mí', 'a ti', 'dar', 'decir', 'mandar', 'preguntar', 'contestar', 'escribir', 'prestar', 'regalar'],
            model: 'Querida Lucía: ¿Qué tal en Valparaíso? Aquí todos hablamos de ti. Ayer Marta [[nos|teal]] enseñó tu foto del mar: ¡qué bonita! [[Al señor Herrera|violet]] [[le|orange]] dimos tu nota y [[le|orange]] gustó mucho. Óscar [[me|teal]] preguntó por ti y yo [[le|orange]] dije que estás muy bien. Esta semana [[les|orange]] escribí [[a los compañeros de la tarde|violet]] y [[les|orange]] pedí más fotos de la fiesta. El viernes [[te|teal]] mando un álbum digital con todas. Una pregunta: ¿[[te|teal]] gustó la tarjeta? [[La|blue]] escribimos entre todos. Un abrazo grande, Sara.',
            minWords: 60,
            checks: [
              { label: 'Le o les para la persona que recibe (le / les for the person who receives)', pattern: '(?<!\\p{L})les?(?!\\p{L})', tip: 'Cuenta qué recibió otra persona: «Al señor Herrera le dimos tu nota».' },
              { label: 'Me, te o nos (me, te or nos)', pattern: '(?<!\\p{L})(?:me|te|nos)(?!\\p{L})', tip: 'Escribe una frase con me, te o nos: «Óscar me preguntó por ti», «¿Te gustó la tarjeta?».' },
              { label: 'A + persona con le o les (a + person with le / les)', pattern: '(?:(?<!\\p{L})al?\\s+[^\\s.,;:!?¿¡]+(?:\\s+[^\\s.,;:!?¿¡]+)?\\s+les?(?!\\p{L})|(?<!\\p{L})les?\\s+(?:[^\\s.,;:!?¿¡]+\\s+){1,4}al?\\s+[^\\s.,;:!?¿¡]+)', tip: 'Di la persona y el pronombre: «Al señor Herrera le dimos…» o «Les escribí a los compañeros».' },
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
            { tone: 'orange', label: 'LE · LES', formula: 'le (una persona) · les (varias) + verbo', example: 'Le dije la hora. Les mandé la invitación.', caption: 'la persona que recibe algo; igual para hombre, mujer y usted', en: 'the person who receives something; same for a man, a woman and usted' },
            { tone: 'teal', label: 'ME · TE · NOS · OS', formula: 'me · te · nos · os + verbo', example: 'Óscar nos trajo flores. ¿Me prestas tu bolígrafo?', caption: 'yo, tú, nosotros, vosotros: las mismas formas que con gustar', en: 'I, you, we, you all (Spain): the same forms as with gustar' },
            { tone: 'violet', label: 'LE… A LUCÍA', formula: 'le + verbo… a + persona · a + persona + le + verbo', example: 'Le mandé el mensaje a Lucía. A Lucía le mandé el mensaje.', caption: 'muy frecuente; necesario con la persona delante y con a mí, a él, a ella, a usted', en: 'very common; needed with the person first and with a mí, a él, a ella, a usted' },
            { tone: 'blue', label: 'LO · LA, PARA COMPARAR', formula: 'ver, llamar, invitar, esperar a alguien → lo / la', example: 'La invité y le dije la hora.', caption: 'la persona del verbo: lo / la; la persona que recibe: le', en: 'the person who is seen, called, invited: lo / la; the person who receives: le' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregunta: **¿a quién?** Si la persona recibe algo (un mensaje, la hora, un regalo), usa **me, te, le, nos, os, les** delante del verbo: «Le mandé el mensaje». Una persona: **le**; varias: **les**. Puedes decir también la persona: «Le mandé el mensaje **a Lucía**», y si la persona va delante, «le» es necesario: «**A Lucía le** mandé el mensaje».', en: 'Ask: to whom? If the person receives something (a message, the time, a present), use me, te, le, nos, os, les before the verb: “Le mandé el mensaje”. One person: le; several: les. You can also name the person: “Le mandé el mensaje a Lucía”, and if the person comes first, “le” is needed: “A Lucía le mandé el mensaje”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mañana es el cumpleaños de mi hermana: ___ voy a regalar un libro.', options: ['les', 'la', 'le'], answer: 2, why: 'Mi hermana recibe el libro: le.', en: 'Tomorrow is my sister’s birthday: I’m going to give her a book.' },
            { prompt: 'Mis padres viven lejos, así que ___ escribo todos los domingos.', options: ['los', 'le', 'les'], answer: 2, why: 'Escribir a alguien, y son dos personas: les.', en: 'My parents live far away, so I write to them every Sunday.' },
            { prompt: 'Vi a tu hermana en el mercado y ___ saludé.', options: ['la', 'le', 'les'], answer: 0, why: 'Saludar a alguien: la persona es el objeto directo. Tu hermana: la.', en: 'I saw your sister at the market and said hello to her.' },
            { prompt: '¿___ puedes explicar este ejercicio? No lo entiendo.', options: ['Te', 'Le', 'Me'], answer: 2, why: 'Yo quiero recibir la explicación: me.', en: 'Can you explain this exercise to me? I don’t understand it.' },
            { prompt: 'A nosotros nunca ___ dicen nada.', options: ['les', 'nos', 'me'], answer: 1, why: 'A nosotros: nos. Con «a nosotros» delante, el pronombre es necesario.', en: 'They never tell us anything.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una compañera nueva.', blocks: [
          { kind: 'lead', text: 'Un mes después, llega a la biblioteca una compañera nueva: Nuria. Todos la ayudan el primer día. Escribe las frases con el pronombre.', en: 'A month later, a new colleague arrives at the library: Nuria. Everyone helps her on her first day. Write the sentences with the pronoun.' },
          { kind: 'rewrite', title: 'El primer día de Nuria · Nuria’s first day', items: [
            { prompt: 'Damos la bienvenida a Nuria.', instruction: 'Añade «le» y deja «a Nuria». (Add «le», keep «a Nuria».)', accept: ['Le damos la bienvenida a Nuria', 'A Nuria le damos la bienvenida'] },
            { prompt: 'Rubén enseña la biblioteca a Nuria y a su compañero.', instruction: 'Escribe la frase con el pronombre y sin «a Nuria y a su compañero». (Use the pronoun instead.)', accept: ['Rubén les enseña la biblioteca'] },
            { prompt: 'Nuria pregunta a Marta: «¿Dónde está la sala?». Marta lo cuenta después.', instruction: 'Escribe lo que dice Marta. Empieza con «Nuria». (Marta speaks: start with «Nuria».)', accept: ['Nuria me preguntó dónde está la sala', 'Nuria me preguntó dónde estaba la sala', 'Nuria me pregunta dónde está la sala', 'Nuria me ha preguntado dónde está la sala'] },
          ] },
        ] },
        { title: 'Ampliación · Usted, leísmo y contraste', mascot: '/autoestudio/mascot/noting.webp', coach: 'Un paso más. One step further.', blocks: [
          { kind: 'lead', text: 'Para alumnos rápidos o si queda tiempo: un correo formal, el leísmo de España y «a mí» para contrastar.', en: 'For fast learners or if there is time left: a formal email, leísmo in Spain and “a mí” for contrast.' },
          { kind: 'choice', title: 'Un poco más difícil · A bit harder', items: [
            { context: 'Un correo formal. (A formal email.)', prompt: 'Señora Paredes: ___ escribo para invitarla a la despedida de Lucía.', options: ['Le', 'La', 'Les'], answer: 0, why: 'Usted recibe el correo: le escribo. «Invitarla» es otra cosa: invitar a alguien → la (aquí va pegado al infinitivo, lo ves en la clase 065).', en: 'Mrs Paredes: I am writing to invite you to Lucía’s farewell party.' },
            { context: 'En Madrid, Rubén dice: «A Óscar le vi en la entrada».', prompt: '¿Qué pasa con esta frase?', options: ['Es leísmo con un hombre: la RAE lo acepta; en todas partes se entiende «lo vi».', 'Es un error grave: con ver nunca se usa «le».', 'Es correcta, y con una mujer también: «A Marta le vi».'], answer: 0, why: 'El leísmo con un hombre (singular) es frecuente en España y aceptado. Con una mujer no se acepta: «A Marta la vi».', en: 'In Madrid, Rubén says “A Óscar le vi en la entrada”. What about this sentence?' },
            { prompt: 'A las compañeras ___ dimos las gracias y ___ invitamos a otra fiesta.', options: ['las · les', 'les · les', 'les · las'], answer: 2, why: 'Dar las gracias a alguien → les; invitar a alguien → las (objeto directo, mujeres).', en: 'We thanked the colleagues and invited them to another party.' },
            { prompt: 'Lucía nos escribió a todos, pero ___ me escribió dos veces.', options: ['a mí', 'mí', 'yo'], answer: 0, why: '«A mí» contrasta con «a todos», y «me» se queda: a mí me escribió.', en: 'Lucía wrote to all of us, but she wrote to me twice.' },
          ] },
          { kind: 'teacher', text: 'Ampliación opcional: solo si tu alumno va rápido o queda tiempo. Si no, pasa directamente al último paso.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 064 · Dos pronombres: se lo, me lo, te la', text: 'Ya dices a quién das o mandas algo: «Le mandé el mensaje a Lucía». Pero ¿y si quieres cambiar también «el mensaje» por un pronombre? Entonces hay dos pronombres juntos, y «le» cambia: «**Se lo** mandé». En la clase 064 aprendes a combinarlos: me lo, te la, se lo. Es el paso natural: ya conoces lo / la y ahora también le / les.', en: 'You can now say who you give or send something to: “Le mandé el mensaje a Lucía”. But what if you also want to replace “el mensaje” with a pronoun? Then there are two pronouns together, and “le” changes: “Se lo mandé”. In class 064 you learn to combine them: me lo, te la, se lo. It is the natural next step: you already know lo / la, and now le / les too.', href: '/gramatica/dos-pronombres-se-lo-me-lo', label: 'Ir a la clase 064' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te regalaron en tu último cumpleaños, y quién?». Respuesta esperada: «Mi hermana me regaló…», «A mí me regalaron…». Tarea: escribir el correo de Escribir a una persona real que vive lejos.' },
        ] },
      ],
    },
  ],
};
