import type { LiveLesson } from '../types';

/**
 * Lesson 411 · B1 · Pronombres personales y doble mención temática (course unit G111).
 * Builds on G042 (lo, la, los, las), G063 (le, les; first look at «le… a
 * Lucía»), G064 (se lo, me lo), G065 (pronoun position), G033 and G032 (a mí,
 * a ti; a mí me gusta). G122 (complex clitic order) and G163 / G185 (focus,
 * dislocation) come later. Scene: Sofía Vidal runs a small language school.
 * She comes back after two weeks at a conference and her assistant, Raúl
 * Molina, updates her on the pending jobs; Julia Navarro is the new teacher;
 * señor Ortega owes them a contract. On Saturday the school holds an open day.
 * In the voice message Julia (Mexican voice, tú with Sofía) tells Sofía about
 * her first week.
 * Content (RAE-ASALE norm): a definite direct object placed BEFORE the verb is
 * picked up by lo / la / los / las (obligatory: Las facturas las pagué; A Julia
 * la conocí); after the verb, no doubling in the general norm (Pagué las
 * facturas). An indirect object before the verb needs le / les (A Julia le
 * escribí); after the verb the doubling is optional but very frequent and
 * always present with gustar-type verbs; agreement les + plural is the norm.
 * Tonic pronouns as objects always need the clitic (me lo dijo a mí; la vi a
 * ella). Topic first = what we are talking about, often in contrast. Audit
 * fold: «lo» attribute with ser / estar / parecer (¿Es médica? Sí, lo es;
 * parece seria, pero no lo es), invariable, not with location (¿Está en casa?
 * Sí, está). Varieties only as notes: leísmo de persona (A Raúl le vi: accepted
 * in Spain for a man, singular); «la conocí a Julia» (frequent in the Río de
 * la Plata); bare nouns fronted without clitic (Café no tengo) in Ampliación.
 * Anchor: A Julia le escribí ayer. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 411,
  level: 'B1',
  title: 'Pronombres personales y doble mención temática',
  subtitle: 'Poner el tema delante y retomarlo con un pronombre (Las facturas las pagué), destacar con a mí, a ti y responder con «lo es».',
  legend: [
    { tone: 'blue', label: 'TEMA DELANTE + PRONOMBRE · Las facturas las pagué (topic first, picked up by a pronoun)' },
    { tone: 'orange', label: 'LE / LES… A + PERSONA · Le escribí a Julia (indirect object said twice)' },
    { tone: 'violet', label: 'TÓNICO + ÁTONO · a mí me, te lo dije a ti (emphasis or contrast)' },
    { tone: 'teal', label: 'LO ATRIBUTO · lo es, lo está, lo parece (= that quality)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El tema delante', coach: 'Primero el tema, después el pronombre. Topic first, then the pronoun.',
      steps: [
        { title: 'Sofía vuelve a la academia · Sofía is back', blocks: [
          { kind: 'lead', text: 'Sofía Vidal dirige una pequeña academia de idiomas. Vuelve después de dos semanas en un congreso y su asistente, Raúl Molina, le cuenta qué ha pasado. Raúl empieza muchas frases por el tema: «**Las facturas las** pagué el jueves», «**A Julia la** conocí el martes». Hoy aprendes a poner el tema delante y retomarlo con un pronombre, a destacar con «a mí, a ti» y a responder con «lo es».', en: 'Sofía Vidal runs a small language school. She is back after two weeks at a conference, and her assistant, Raúl Molina, tells her what has happened. Raúl starts many sentences with the topic: “The invoices, I paid them on Thursday”, “Julia, I met her on Tuesday”. Today you learn to put the topic first and pick it up with a pronoun, to add emphasis with “a mí, a ti”, and to answer with “lo es”.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de cada columna y tu alumno dice qué cambia: ¿de qué se habla primero?', self: 'Lee las frases en voz alta. ¿Qué cambia cuando el objeto va delante? (What changes when the object comes first?)' } },
          { kind: 'compare', title: 'La misma información, otro orden · Same information, another order', columns: [
            { tone: 'neutral', label: 'ORDEN NEUTRO · verbo + objeto', sentence: 'Raúl pagó las facturas el jueves.', idea: 'Cuenta un hecho, sin destacar nada. El objeto va detrás y no hay pronombre.', en: 'Raúl paid the invoices on Thursday.' },
            { tone: 'blue', label: 'TEMA DELANTE · objeto + pronombre + verbo', sentence: '¿Las facturas? [[Las facturas las pagué|blue]] el jueves.', idea: 'Responde a «¿y las facturas?»: el objeto es el tema y el pronombre «las» lo retoma.', en: 'The invoices? I paid them on Thursday.' },
            { tone: 'teal', label: 'LO ATRIBUTO · una cualidad', sentence: 'Julia parece seria, pero no [[lo es|teal]].', idea: '«Lo» retoma la cualidad «seria»: no es seria.', en: 'Julia seems serious, but she isn’t.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Las facturas las pagué el jueves», ¿qué hace «las»?', options: ['Habla de otras facturas.', 'Retoma «las facturas», que van delante.', 'Es un error: repite la palabra.'], answer: 1, why: 'Con el objeto delante del verbo, el pronombre lo retoma. No es un error: es obligatorio.', en: 'In “Las facturas las pagué el jueves”, what does “las” do?' },
            { prompt: '¿Qué frase responde mejor a «¿Y el informe?»', options: ['El informe lo terminé ayer.', 'Terminé ayer.', 'Lo terminé el informe ayer.'], answer: 0, why: 'El informe es el tema de la pregunta: va delante y «lo» lo retoma.', en: 'Which sentence best answers “And the report?”' },
            { prompt: 'En «Parece seria, pero no lo es», «lo» significa…', options: ['seria', 'Julia', 'el informe'], answer: 0, why: '«Lo» atributo retoma una cualidad: no es seria.', en: 'In “Parece seria, pero no lo es”, “lo” means…' },
          ] },
        ] },
        { title: 'El objeto directo delante · Direct object first', mascot: '/brand/mascot/studying.webp', coach: 'Delante: el pronombre es obligatorio. Before the verb: the pronoun is a must.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'OBJETO DIRECTO DELANTE', question: '¿Empiezas la frase por la cosa o la persona de la que hablas?', en: 'Do you start the sentence with the thing or person you are talking about? Then a pronoun must pick it up.', formula: ['objeto directo + lo · la · los · las + verbo', 'a + persona + lo · la · los · las + verbo'],
            meaning: 'Ponemos el objeto **delante** cuando es el **tema**: algo de lo que ya se habla, o algo que contrastamos con otra cosa. Entonces el pronombre **lo, la, los, las** es **obligatorio** y concuerda con el objeto en género y número. Con personas, el objeto lleva «a»: «A Julia **la** conocí». Si el objeto va **detrás** del verbo, en la norma general no se repite: «Pagué las facturas», no «Las pagué las facturas».',
            examples: [
              { es: '[[El horario nuevo ya lo tengo|blue]]; [[los libros no los tengo|blue]] todavía.', en: 'The new timetable I already have; the books I don’t have yet.' },
              { es: '[[A los profesores los veo|blue]] mañana en la reunión.', en: 'I’ll see the teachers tomorrow at the meeting.' },
              { es: '[[Esa película no la he visto|blue]], pero dicen que es buena.', en: 'I haven’t seen that film, but people say it’s good.' },
            ], note: 'Con una perífrasis, el pronombre puede ir antes o después (clase 065): «Ese correo **lo** voy a mandar hoy» = «Ese correo voy a mandar**lo** hoy».' },
          { kind: 'table', title: '¿Dónde va el objeto? · Where is the object?', head: ['Posición', 'Ejemplo', 'Pronombre'], rows: [
            ['Detrás del verbo', 'Pagué **las facturas** el jueves.', 'no se repite (norma general)'],
            ['Delante del verbo', '**Las facturas las** pagué el jueves.', 'obligatorio'],
            ['Delante, con persona', '**A Julia la** conocí el martes.', 'obligatorio, con «a»'],
            ['Delante, con «no» o «ya»', '**El contrato no lo** tengo. / **El horario ya lo** tengo.', '«no» y «ya» van entre el objeto y el pronombre'],
          ], note: 'El pronombre concuerda con el objeto: el informe → **lo**, la llave → **la**, los libros → **los**, las aulas → **las**.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La llave del aula tres ___ tiene Raúl.', options: ['la', 'lo', 'le'], answer: 0, why: '«La llave» es objeto directo, femenino singular y va delante: la.', en: 'Raúl has the key to classroom three.' },
            { prompt: '¿Qué frase sigue la norma general?', options: ['A Julia vi en la puerta.', 'Vi a Julia en la puerta.', 'La vi a Julia en la puerta.'], answer: 1, why: 'Con el objeto detrás del verbo, sin pronombre. Si lo pones delante: «A Julia la vi».', en: 'Which sentence follows the general norm?' },
          ] },
        ] },
        { title: 'La persona que recibe: le, les · The indirect object', mascot: '/brand/mascot/standing.webp', coach: 'Le… a Julia: muy normal. Saying it twice is normal.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LE / LES + A + PERSONA', question: '¿Hay una persona que recibe algo (un mensaje, un regalo, una explicación)?', en: 'Is there a person who receives something (a message, a present, an explanation)? Spanish usually names that person twice.', formula: ['a + persona + le · les + verbo', 'le · les + verbo… + a + persona'],
            meaning: 'Ya lo viste en la clase 063: con el objeto indirecto, el español dice muchas veces el pronombre **y** la persona. Con la persona **delante** del verbo, le / les es **necesario**: «A Julia **le** escribí ayer». Con la persona **detrás**, el pronombre es opcional, pero **muy frecuente**: «**Le** escribí ayer a Julia». Con gustar, encantar, interesar o doler está **siempre**: «A Raúl **le** encanta su trabajo». Y concuerda: una persona → **le**; varias → **les**.',
            examples: [
              { es: '[[A Julia le escribí|blue]] ayer para darle la bienvenida.', en: 'I wrote to Julia yesterday to welcome her.' },
              { es: '[[Les mandé el calendario a los alumnos|orange]] el viernes.', en: 'I sent the students the calendar on Friday.' },
              { es: 'A Raúl le encanta organizar; a mí, no tanto.', en: 'Raúl loves organizing; I don’t, not so much.' },
            ], note: 'En la conversación se oye mucho «le» con un plural («le di el libro a mis padres»), pero la norma recomienda la concordancia: «**les** di el libro a mis padres».' },
          { kind: 'decide', title: '¿Hace falta el pronombre? · Do you need the pronoun?', steps: [
            { q: '¿El objeto (directo o indirecto) va delante del verbo?', yes: 'Sí, siempre: «Las facturas **las** pagué», «A Julia **le** escribí».', no: 'next' },
            { q: '¿Es un pronombre tónico: a mí, a ti, a él, a ella, a usted, a nosotros…?', yes: 'Sí, siempre: «**Me** lo dijo a mí», «**La** vi a ella».', no: 'next' },
            { q: '¿Es una persona que recibe algo (objeto indirecto), o va con gustar, encantar, doler…?', yes: 'Con gustar y similares, siempre. Con otros verbos, **le / les** es muy frecuente y recomendable: «**Le** di el regalo a Julia».', no: 'Objeto directo detrás del verbo: sin pronombre en la norma general. «Vi a Julia», «Pagué las facturas».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A los profesores nuevos ___ expliqué el programa el lunes.', options: ['les', 'le', 'los'], answer: 0, why: 'Objeto indirecto plural y delante: les. «Los» sería objeto directo (explicar a los profesores, no el programa).', en: 'I explained the course programme to the new teachers on Monday.' },
            { prompt: '¿Qué frase es incorrecta?', options: ['A Julia le escribí ayer.', 'A Julia escribí ayer.', 'Le escribí ayer a Julia.'], answer: 1, why: 'Con «a Julia» delante del verbo, «le» es necesario: «A Julia le escribí ayer».', en: 'Which sentence is incorrect?' },
          ] },
        ] },
        { title: 'A mí, a ti: los tónicos · Tonic pronouns', mascot: '/brand/mascot/speaking.webp', coach: 'A mí me… siempre juntos. Always together.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'TÓNICO + ÁTONO', question: '¿Quieres destacar o contrastar a una persona: a mí, no a ti?', en: 'Do you want to highlight or contrast a person: me, not you? The tonic form never goes alone; it always comes with me, te, lo, la, le…', formula: ['me… a mí · te… a ti · nos… a nosotros', 'lo / la / le… a él · a ella · a usted · los / las / les… a ellos'],
            meaning: '«A mí, a ti, a él, a ella, a usted…» destacan a la persona o la contrastan con otra. Como objeto, **nunca van solos**: siempre con el pronombre átono, delante o detrás del verbo. «**Me** lo dijo **a mí**, no a ti». «**A ti te** vi ayer en el parque». «**La** invité **a ella**». No se dice «Vio a mí» ni «Invité a ella».',
            examples: [
              { es: 'Sofía no llamó a Raúl: [[me llamó a mí|violet]].', en: 'Sofía didn’t call Raúl: she called me.' },
              { es: '[[A ti te debo|violet]] un café, como mínimo.', en: 'I owe you a coffee, at the very least.' },
              { es: 'Conozco a su hermano, pero [[a ella no la conozco|violet]].', en: 'I know her brother, but I don’t know her.' },
            ] },
          { kind: 'tip', icon: '🇪🇸', title: 'Le vi, lo vi · A note on Spain', text: 'En muchas zonas de España se dice «**le**» con un hombre como objeto directo: «A Raúl **le** vi ayer». La RAE lo acepta solo con un hombre, en singular. No lo necesitas: «A Raúl **lo** vi ayer» es correcto en todas partes. Con una mujer, siempre **la**: «A Julia **la** vi».', en: 'In many parts of Spain people use “le” for a man as a direct object: “A Raúl le vi ayer”. The RAE accepts it only for one man. You don’t need it: “A Raúl lo vi ayer” is correct everywhere. For a woman, always “la”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Julia no se lo contó a Raúl: ___ lo contó a mí.', options: ['a mí', 'mí', 'me'], answer: 2, why: 'El tónico «a mí» ya está; falta el átono: me lo contó a mí.', en: 'Julia didn’t tell Raúl: she told me.' },
            { prompt: '¿Qué frase es correcta?', options: ['Saludé a ella primero.', 'Ella saludé primero.', 'La saludé a ella primero.'], answer: 2, why: 'Con «a ella» como objeto, el pronombre átono es obligatorio: la saludé a ella.', en: 'Which sentence is correct?' },
          ] },
        ] },
        { title: 'Lo es, lo está · «Lo» for a quality', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lo no cambia. “Lo” never changes.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'LO ATRIBUTO', question: '¿Respondes sobre una cualidad o una profesión sin repetirla?', en: 'Are you answering about a quality or a job without repeating it? “Lo” replaces it after ser, estar and parecer.', formula: ['ser · estar · parecer + cualidad → lo es · lo está · lo parece', '¿Es médica? → Sí, lo es. · ¿Están cansados? → No, no lo están.'],
            meaning: 'Con **ser, estar y parecer**, «lo» retoma un adjetivo o un nombre que dice cómo es alguien o algo. Es **invariable**: siempre **lo**, con hombre o mujer, singular o plural. Sirve para no repetir: «¿Julia es mexicana? —Sí, **lo es**». Y para contrastar apariencia y realidad: «Parece fácil, pero no **lo es**».',
            examples: [
              { es: '—¿Julia es profesora de inglés? —Sí, [[lo es|teal]], y también de francés.', en: '“Is Julia an English teacher?” “Yes, she is, and French too.”' },
              { es: 'Los alumnos parecen nerviosos, y [[lo están|teal]]: el examen es mañana.', en: 'The students look nervous, and they are: the exam is tomorrow.' },
              { es: 'El aula cuatro parece pequeña, pero no [[lo es|teal]].', en: 'Classroom four looks small, but it isn’t.' },
            ], note: 'Con un lugar no hay «lo»: «¿Sofía está en la oficina? —Sí, **está**» (o «Sí, está allí»). «Lo» solo retoma una cualidad.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Tus compañeras son puntuales? —Sí, ___ son.', options: ['lo', 'las', 'les'], answer: 0, why: '«Lo» atributo es invariable: también con «compañeras». Sí, lo son.', en: '“Are your colleagues punctual?” “Yes, they are.”' },
            { prompt: '—¿Raúl está cansado? —Un poco, sí, ___.', options: ['está', 'le está', 'lo está'], answer: 2, why: 'Retomas la cualidad «cansado»: lo está. «Sí, está» solo funciona con un lugar.', en: '“Is Raúl tired?” “A bit, yes, he is.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: '¿Falta el pronombre? Is the pronoun missing?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿falta un pronombre, sobra, o no concuerda? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿falta un pronombre, sobra, o no concuerda? Toca para ver la corrección. (Missing, extra or wrong pronoun?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Las fotocopias dejé en tu mesa.', right: 'Las fotocopias las dejé en tu mesa.', why: 'El objeto va delante: el pronombre «las» es obligatorio. (Object first: add the pronoun.)' },
            { wrong: 'A la secretaria conocí en el congreso.', right: 'A la secretaria la conocí en el congreso.', why: 'Persona delante como objeto directo: «la» es obligatorio.' },
            { wrong: 'El director felicitó a mí.', right: 'El director me felicitó a mí.', why: '«A mí» nunca va solo como objeto: me felicitó a mí. (Tonic + clitic.)' },
            { wrong: 'A mí no gusta este horario.', right: 'A mí no me gusta este horario.', why: 'Con gustar, el pronombre átono está siempre: a mí me gusta.' },
            { wrong: '—¿Son caros los cursos? —No, no los son.', right: '—¿Son caros los cursos? —No, no lo son.', why: '«Lo» atributo no cambia con el plural ni con el femenino: lo son.' },
            { wrong: 'Le expliqué las normas a los alumnos nuevos.', right: 'Les expliqué las normas a los alumnos nuevos.', why: 'Se oye mucho en la conversación, pero la norma pide concordancia: varios alumnos → les.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Ya lo leí ese libro.', 'Ese libro ya lo leí.', 'Ese libro ya leí.'], answer: 1, why: 'Objeto delante → pronombre obligatorio. Con el objeto detrás, la norma general no lo repite: «Ya leí ese libro».', en: 'Which sentence is correct?' },
            { prompt: '—¿La directora está contenta? —Sí, ___.', options: ['la está', 'le está', 'lo está'], answer: 2, why: '«Lo» atributo, invariable: también con «la directora».', en: '“Is the director happy?” “Yes, she is.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno responde a tres preguntas sobre su semana poniendo el tema delante: «¿Y la compra?», «¿Y a tu madre?», «¿Y los correos?». Ejemplo: «La compra la hice el sábado».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El lunes en la academia', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Las tareas pendientes · The pending jobs', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Sofía y tu alumno es Raúl. Después tu alumno toca cada expresión marcada y dice qué retoma el pronombre.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di qué retoma el pronombre. (Say what each pronoun picks up.)' } },
          { kind: 'explore', title: '¿Cómo va todo?', setting: 'Lunes, nueve de la mañana, en la oficina de la academia. Sofía vuelve del congreso y Raúl le cuenta cómo están las tareas pendientes. Se tratan de tú. (Monday, 9 a.m., in the school office. Sofía is back and Raúl updates her on the pending jobs.)', lines: [
            { who: 'Sofía', text: '¡Buenos días, Raúl! Ya estoy de vuelta. A ver, cuéntame: ¿y las facturas del mes?', en: 'Good morning, Raúl! I’m back. So, tell me: what about this month’s invoices?' },
            { who: 'Raúl', text: 'Tranquila: [[las facturas las pagué|blue]] el jueves, todas.', en: 'Don’t worry: I paid the invoices on Thursday, all of them.' },
            { who: 'Sofía', text: 'Perfecto. ¿Y la profesora nueva? ¿Ya la conoces?', en: 'Perfect. And the new teacher? Have you met her yet?' },
            { who: 'Raúl', text: 'Sí, [[a Julia la conocí|blue]] el martes. Parece muy seria, pero no [[lo es|teal]]: los alumnos ya la adoran.', en: 'Yes, I met Julia on Tuesday. She seems very serious, but she isn’t: the students already love her.' },
            { who: 'Sofía', text: '¡Qué bien! ¿Y el calendario de exámenes?', en: 'Great! And the exam calendar?' },
            { who: 'Raúl', text: '[[A los alumnos de B2 les mandé|blue]] el calendario el viernes. Los de B1 lo reciben hoy.', en: 'I sent the calendar to the B2 students on Friday. The B1 students get it today.' },
            { who: 'Sofía', text: '¿Y el contrato del señor Ortega? Lo necesito para la reunión del jueves.', en: 'And Mr Ortega’s contract? I need it for Thursday’s meeting.' },
            { who: 'Raúl', text: '[[Ese contrato todavía no lo tengo|blue]]. [[Le escribí al señor Ortega|orange]] ayer, pero no contesta.', en: 'I don’t have that contract yet. I wrote to Mr Ortega yesterday, but he isn’t answering.' },
            { who: 'Sofía', text: 'Vaya. Bueno, esta tarde lo llamo yo. Oye, ¿y tú? Te veo cansado.', en: 'Oh dear. Well, I’ll call him myself this afternoon. Hey, and you? You look tired.' },
            { who: 'Raúl', text: 'Un poco, sí, [[lo estoy|teal]]. Esta semana todo el mundo [[me ha preguntado a mí|violet]]: dónde está la llave, cuándo empieza el curso…', en: 'A bit, yes, I am. This week everyone has asked me: where the key is, when the course starts…' },
            { who: 'Sofía', text: 'Pues [[a ti te debo|violet]] un café, como mínimo. Y esta tarde [[le doy la bienvenida a Julia|orange]].', en: 'Well, I owe you a coffee, at the very least. And this afternoon I’ll welcome Julia.' },
            { who: 'Raúl', text: 'Trato hecho. Pero no el de la máquina, ¿eh? [[A mí no me gusta|violet]] nada.', en: 'Deal. But not the one from the machine, OK? I don’t like it at all.' },
          ], notes: {
            'las facturas las pagué': 'Objeto directo delante: es el tema de la pregunta de Sofía. «Las» lo retoma y es obligatorio. (The invoices, I paid them.)',
            'a Julia la conocí': 'Persona como objeto directo, delante del verbo: «a Julia» + «la». Sin «la» la frase es incorrecta.',
            'lo es': '«Lo» atributo: retoma «seria». No es seria. Es invariable: lo es, también con una mujer.',
            'A los alumnos de B2 les mandé': 'Objeto indirecto plural delante del verbo: «les» es necesario y concuerda con «los alumnos».',
            'Ese contrato todavía no lo tengo': 'Objeto delante, con «todavía no» entre el objeto y el pronombre. «Lo» = ese contrato.',
            'Le escribí al señor Ortega': 'Objeto indirecto detrás del verbo: «le» es opcional, pero muy frecuente y natural. (I wrote to Mr Ortega.)',
            'lo estoy': '«Lo» retoma «cansado»: sí, estoy cansado. Con estar también funciona.',
            'me ha preguntado a mí': 'Tónico «a mí» para destacar: a mí, y no a otros. El átono «me» es obligatorio.',
            'a ti te debo': '«A ti» delante para destacar a Raúl: a ti, en concreto. Siempre con «te».',
            'le doy la bienvenida a Julia': '«Le… a Julia»: el objeto indirecto dicho dos veces. Muy normal en español. (I’ll welcome Julia.)',
            'A mí no me gusta': 'Con gustar, el átono está siempre. «A mí» añade contraste: a otros sí, a mí no.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué pasó con las facturas?', options: ['Raúl las pagó el jueves.', 'Raúl todavía no las pagó.', 'Sofía las pagó desde el congreso.'], answer: 0, why: '«Las facturas las pagué el jueves, todas».', en: 'What happened to the invoices?' },
            { prompt: '¿Cómo es Julia, según Raúl?', options: ['Es muy seria con los alumnos.', 'Todavía no la conoce.', 'Parece seria, pero no lo es.'], answer: 2, why: '«Parece muy seria, pero no lo es: los alumnos ya la adoran».', en: 'What is Julia like, according to Raúl?' },
            { prompt: '¿Qué problema hay con el contrato?', options: ['Sofía no lo necesita.', 'El señor Ortega no contesta.', 'Raúl lo perdió.'], answer: 1, why: '«Le escribí al señor Ortega ayer, pero no contesta».', en: 'What is the problem with the contract?' },
          ] },
        ] },
        { title: '¿Hace falta el pronombre? · Is the pronoun needed?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: 'Más frases de la academia · More sentences from the school', categories: [
            { id: 'obl', label: 'OBLIGATORIO · objeto delante, tónico o gustar', tone: 'blue' },
            { id: 'frec', label: 'OPCIONAL, MUY FRECUENTE · le / les… a + persona', tone: 'orange' },
            { id: 'no', label: 'NO SE REPITE · objeto directo detrás (norma general)', tone: 'teal' },
          ], items: [
            { text: 'El proyector lo arregló el técnico.', answer: 'obl', why: 'Objeto directo delante: «lo» es obligatorio.' },
            { text: 'Le enseñé las aulas a Julia.', answer: 'frec', why: 'Objeto indirecto detrás: «le» es opcional, pero muy natural.' },
            { text: 'Raúl cerró la oficina a las ocho.', answer: 'no', why: 'Objeto directo detrás del verbo: no se repite.' },
            { text: 'A Sofía le encantó el congreso.', answer: 'obl', why: 'Con encantar (como gustar), el pronombre está siempre.' },
            { text: 'Les di las notas a los alumnos.', answer: 'frec', why: 'Objeto indirecto plural detrás: «les» muy frecuente; si lo usas, en plural.' },
            { text: 'Ayer vi a Julia en la biblioteca.', answer: 'no', why: 'Persona como objeto directo, detrás: «Vi a Julia», sin «la» en la norma general.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué tareas tiene pendientes Raúl?». Tu alumno responde con el tema delante: «El contrato no lo tiene, a los de B1 todavía no les ha mandado el calendario…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero, ¿dónde está el objeto? First, where is the object?',
      steps: [
        { title: 'La jornada de puertas abiertas · The open day', blocks: [
          { kind: 'choice', items: [
            { context: 'Jueves. La academia prepara una jornada de puertas abiertas. (Preparing an open day.)', prompt: 'Los carteles ___ imprimió Raúl ayer por la tarde.', options: ['las', 'los', 'les'], answer: 1, why: '«Los carteles»: objeto directo, masculino plural, delante: los.', en: 'Raúl printed the posters yesterday afternoon.' },
            { context: 'Jueves. La academia prepara una jornada de puertas abiertas.', prompt: 'A las familias de los alumnos ___ mandamos una invitación el lunes.', options: ['las', 'le', 'les'], answer: 2, why: 'Las familias reciben la invitación: objeto indirecto plural delante → les.', en: 'We sent the students’ families an invitation on Monday.' },
            { context: 'Sofía busca algo. (Sofía is looking for something.)', prompt: 'La llave de la sala de profesores, ¿___ tienes tú, Raúl?', options: ['la', 'lo', 'le'], answer: 0, why: '«La llave» es el tema y va delante: la tienes tú.', en: 'The key to the staff room: have you got it, Raúl?' },
            { context: 'Raúl, un poco molesto. (Raúl, a bit annoyed.)', prompt: 'Julia no le pidió ayuda al técnico: ___ la pidió a mí.', options: ['yo', 'me', 'mí'], answer: 1, why: 'Con «a mí» como objeto, falta el átono: me la pidió a mí.', en: 'Julia didn’t ask the technician for help: she asked me.' },
            { context: 'Antes de abrir. (Before opening.)', prompt: '—¿La directora está nerviosa? —Sí, ___ está, pero no lo dice.', options: ['lo', 'la', 'le'], answer: 0, why: '«Lo» atributo retoma «nerviosa» y no cambia con el femenino.', en: '“Is the director nervous?” “Yes, she is, but she doesn’t say so.”' },
          ] },
        ] },
        { title: '¿Objeto o cualidad? · Object or quality?', blocks: [
          { kind: 'classify', title: '¿Qué retoma «lo»? · What does “lo” pick up?', categories: [
            { id: 'obj', label: 'LO OBJETO · una cosa o una persona', tone: 'blue' },
            { id: 'atr', label: 'LO ATRIBUTO · una cualidad (ser, estar, parecer)', tone: 'teal' },
          ], items: [
            { text: 'El cartel lo diseñó Julia.', answer: 'obj', why: '«Lo» = el cartel: un objeto directo.' },
            { text: 'Raúl parece tranquilo, pero no lo está.', answer: 'atr', why: '«Lo» = tranquilo: una cualidad con estar.' },
            { text: '—¿Eres el profesor nuevo? —Sí, lo soy.', answer: 'atr', why: '«Lo» = el profesor nuevo, después de ser: atributo.' },
            { text: 'Ese libro no lo encuentro por ninguna parte.', answer: 'obj', why: '«Lo» = ese libro: lo que buscas.' },
            { text: 'Las aulas parecen nuevas, y lo son.', answer: 'atr', why: '«Lo» = nuevas. Atributo invariable: lo son, no «las son».' },
            { text: 'Al señor Ortega lo llamo esta tarde.', answer: 'obj', why: '«Lo» = al señor Ortega: persona como objeto directo, delante.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Los folletos dejé en la recepción.', ok: false, options: ['Los folletos los dejé en la recepción.', 'Los folletos les dejé en la recepción.', 'Los folletos dejé los en la recepción.'], answer: 0, why: 'Objeto directo delante: «los» obligatorio, antes del verbo conjugado.' },
            { sentence: 'A Julia le encanta la idea de la jornada.', ok: true, why: 'Correcta: con encantar, «le» y «a Julia» van juntos.' },
            { sentence: 'Raúl no ayudó a mí con las sillas.', ok: false, options: ['A mí Raúl no ayudó con las sillas.', 'Raúl no me ayudó a mí con las sillas.', 'Raúl no ayudó a me con las sillas.'], answer: 1, why: '«A mí» como objeto necesita el átono «me», delante del verbo.' },
            { sentence: '—¿Los alumnos están contentos? —Sí, los están.', ok: false, options: ['—¿Los alumnos están contentos? —Sí, lo están.', '—¿Los alumnos están contentos? —Sí, les están.', '—¿Los alumnos están contentos? —Sí, están ellos.'], answer: 0, why: '«Lo» atributo es invariable: lo están.' },
            { sentence: 'A la profesora de francés la vi en la puerta.', ok: true, why: 'Correcta: persona delante como objeto directo + «la».' },
          ] },
        ] },
        { title: 'La mañana de la jornada · The morning of the open day', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Sofía habla con Julia · Sofía talks to Julia', lines: [
            { who: 'Sofía', text: 'Julia, buenos días. ¿Todo listo para hoy?' },
            { who: 'Julia', text: 'Casi. Las presentaciones ___ terminé anoche.', options: ['les', 'lo', 'las'], answer: 2, why: '«Las presentaciones» va delante: objeto directo femenino plural → las.' },
            { who: 'Sofía', text: '¡Genial! ¿Y los regalos para los visitantes?' },
            { who: 'Julia', text: 'Los regalos ___ trae Raúl a las diez.', options: ['le', 'los', 'les'], answer: 1, why: 'Los regalos son el objeto directo (lo que trae Raúl): los.' },
            { who: 'Sofía', text: '¿Y a los profesores nuevos? ¿Ya ___ explicaste el programa del día?', options: ['los', 'le', 'les'], answer: 2, why: 'Los profesores reciben la explicación: objeto indirecto plural → les.' },
            { who: 'Julia', text: 'Sí, ___ lo expliqué el jueves, a todos.', options: ['a ellos se', 'a ellos les', 'les a ellos'], answer: 0, why: 'Les + lo → se lo (clase 064). Con «a ellos» delante: a ellos se lo expliqué.' },
            { who: 'Sofía', text: 'Perfecto. Oye, te veo un poco nerviosa.' },
            { who: 'Julia', text: 'Sí, ___ estoy. Es mi primera jornada aquí.', options: ['la', 'me', 'lo'], answer: 2, why: '«Lo» retoma «nerviosa»: lo estoy. Invariable.' },
            { who: 'Sofía', text: 'Es normal. ___ me pasaba lo mismo el primer año.', options: ['Yo', 'A mí', 'Mí'], answer: 1, why: 'Con pasar (como gustar), la persona es «a mí» + me: a mí me pasaba.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['El', 'informe', 'lo', 'terminé', 'ayer'], accept: ['El informe lo terminé ayer', 'El informe ayer lo terminé'], en: 'The report, I finished it yesterday.' },
            { tiles: ['A', 'Julia', 'le', 'encantó', 'la', 'jornada'], accept: ['A Julia le encantó la jornada', 'La jornada le encantó a Julia', 'Le encantó la jornada a Julia'], en: 'Julia loved the open day.' },
            { tiles: ['Parece', 'fácil', 'pero', 'no', 'lo', 'es'], accept: ['Parece fácil pero no lo es'], en: 'It looks easy, but it isn’t.' },
          ] },
        ] },
        { title: 'Transforma · Transform', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'rewrite', title: 'El tema delante · Topic first', items: [
            { prompt: 'Sofía revisó las cuentas el viernes.', instruction: 'Pon «las cuentas» delante del verbo. Empieza con «Las cuentas». (Put the object first.)', accept: ['Las cuentas las revisó Sofía el viernes', 'Las cuentas las revisó el viernes Sofía', 'Las cuentas Sofía las revisó el viernes'] },
            { prompt: 'Raúl dio las gracias a los voluntarios.', instruction: 'Empieza con «A los voluntarios». (Start with the people.)', accept: ['A los voluntarios les dio las gracias Raúl', 'A los voluntarios Raúl les dio las gracias'] },
            { prompt: '—¿Julia es una buena profesora? —Sí, es una buena profesora.', instruction: 'Escribe solo la respuesta sin repetir «una buena profesora». Empieza con «Sí». (Answer with lo.)', accept: ['Sí, lo es'] },
            { prompt: 'Vi a ella en la jornada.', instruction: 'Corrige la frase: añade el pronombre átono. (Add the missing clitic.)', accept: ['La vi a ella en la jornada', 'A ella la vi en la jornada'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tú dices cinco temas («¿Y el móvil?», «¿Y a tus padres?», «¿Y las llaves?»…) y tu alumno responde rápido con el tema delante y su pronombre.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Julia', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Julia escribe a Sofía · Julia messages Sofía', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye un tema delante con su pronombre («los exámenes los corregí») y da una palmada con «lo es». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en las frases que empiezan por el tema. (Listen once for the gist, once for details.)' } },
          { kind: 'listen', title: 'Mi primera semana', channel: 'AUDIO · DE JULIA PARA SOFÍA', src: '/audio/grammar-live/411.mp3',
            before: 'Es viernes por la tarde. Julia termina su primera semana en la academia y le manda un audio a Sofía. ¿Qué crees que cuenta: cómo son los alumnos, qué hizo, qué necesita…? (What do you think she talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Julia avisa de que no puede ir a la reunión.', 'Julia cuenta cómo le fue la semana y pide una cosa.', 'Julia se queja de los alumnos de la tarde.'], answer: 1, why: 'Cuenta cómo van sus grupos y sus tareas, y le pide a Sofía el libro de B1.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cómo es el grupo de los lunes?', options: ['Es muy difícil y ruidoso.', 'Julia todavía no lo conoce.', 'Parece difícil, pero no lo es: es un poco tímido.'], answer: 2, why: '«El grupo de los lunes parece difícil, pero no lo es; solo es un poco tímido».', en: 'What is the Monday group like?' },
              { prompt: '¿Qué hizo Julia con los exámenes de prueba?', options: ['Los corrigió anoche.', 'Se los dio a los alumnos.', 'Los perdió.'], answer: 0, why: '«Los exámenes de prueba los corregí anoche».', en: 'What did Julia do with the practice exams?' },
              { prompt: '¿A quién le dio las notas?', options: ['A Raúl.', 'A Sofía.', 'A los alumnos.'], answer: 0, why: '«Las notas se las di hoy a Raúl».', en: 'Who did she give the marks to?' },
              { prompt: '¿Qué le pide Julia a Sofía?', options: ['Cambiar de grupo.', 'Que le pida el libro de B1.', 'Una llave nueva del aula.'], answer: 1, why: '«El libro de B1 todavía no lo tengo: ¿me lo puedes pedir tú?». La llave se la pidió a Raúl.', en: 'What does Julia ask Sofía for?' },
            ],
            transcript: 'Hola, Sofía, soy Julia. Te mando este audio porque hoy no coincidimos en la academia. Te cuento cómo va mi primera semana. [[A los alumnos de la tarde ya los conozco|blue]] a todos: son muy simpáticos y trabajan mucho. El grupo de los lunes parece difícil, pero no [[lo es|teal]]; solo es un poco tímido. [[Los exámenes de prueba los corregí|blue]] anoche, y [[las notas se las di|blue]] hoy a Raúl. [[A él le pedí|violet]] también una llave del aula tres, porque la mía no funciona. Ah, y [[el libro de B1 todavía no lo tengo|blue]]: ¿me lo puedes pedir tú? De verdad, [[a mí me encanta|violet]] trabajar aquí. Bueno, el viernes que viene nos vemos en la reunión. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Julia. Tu alumno es Sofía y responde al audio con tres frases: qué piensa de su semana, qué va a hacer con el libro de B1 y una pregunta para Julia.', self: 'Responde a Julia en voz alta como Sofía: qué piensas de su semana, qué vas a hacer con el libro de B1 y una pregunta para ella. (Answer Julia as Sofía.)' } },
          { kind: 'tip', icon: '💡', title: 'Las notas se las di a Raúl · Two pronouns and a topic', text: 'Julia dice «**Las notas se las di** hoy a Raúl». Hay tres cosas a la vez: el tema delante (las notas), su pronombre (**las**) y la persona que recibe (le → **se**, como en la clase 064). Es muy natural: primero el tema, después el resto.', en: 'Julia says “Las notas se las di hoy a Raúl”. Three things happen at once: the topic first (the marks), its pronoun (“las”) and the person who receives them (le becomes “se”, as in class 064). It sounds very natural: topic first, then the rest.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus temas', coach: 'Empieza por el tema. Start with the topic.',
      steps: [
        { title: '¿Y eso? · What about that?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con el tema delante y su pronombre. Si olvida el pronombre, tú repites la frase con él y sigues con la repregunta.', self: 'Lee la pregunta y responde en voz alta empezando por el tema. Después, si quieres, escribe tu respuesta. (Answer aloud, starting with the topic.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces con los libros que ya leíste? ¿Y con la ropa que ya no usas? · What do you do with books you have read? And with clothes you don’t wear any more?', followUps: ['¿Y con los regalos que no te gustan? (And with presents you don’t like?)', '¿Guardas las cartas o las fotos antiguas? (Do you keep old letters or photos?)'], phrases: ['[[Los libros los|blue]] regalo / guardo / vendo…', '[[La ropa vieja la|blue]] llevo a…', '[[Las fotos no las|blue]] tiro nunca.'], hint: 'El objeto es el tema: va delante, y el pronombre lo retoma (los, la, las).', example: 'Los libros los regalo a mis amigos, pero los de cocina los guardo. La ropa vieja la llevo a una tienda de segunda mano. Las fotos no las tiro nunca.', next: 'Ahora, tu lista de tareas.' },
            { q: 'Piensa en tu lista de tareas de esta semana. ¿Qué ya hiciste y qué no? · Think of this week’s to-do list. What have you done and what haven’t you?', followUps: ['¿Y a quién tienes que llamar o escribir? (Who do you have to call or write to?)', '¿Qué tarea vas a dejar para la semana que viene? (Which job will you leave for next week?)'], phrases: ['[[La compra ya la|blue]] hice el…', '[[A mi madre todavía no la|blue]] he llamado.', '[[Ese correo lo|blue]] voy a mandar mañana.'], hint: 'Ya, todavía no y no van entre el tema y el pronombre: «La compra ya la hice».', example: 'La compra ya la hice el sábado. A mi madre todavía no la he llamado, y a mi jefa le tengo que escribir hoy. El informe lo voy a terminar el lunes.', next: 'Ahora, gustos y contrastes.' },
            { q: '¿A ti qué te gusta más: la playa o la montaña? ¿Y a tu familia o a tus amigos? · Which do you like better, the beach or the mountains? And your family or friends?', followUps: ['¿Y a quién de tu familia no le gusta viajar? (Who in your family doesn’t like travelling?)', '¿Estás de acuerdo con ellos? (Do you agree with them?)'], phrases: ['[[A mí me|violet]] gusta más…', '[[A mi hermana le|blue]] encanta…, pero [[a mí no me|violet]]…', '[[A mis padres les|blue]] gusta…'], hint: '«A mí, a ti» destacan y contrastan, pero nunca van solos: a mí me, a ti te.', example: 'A mí me gusta más la montaña. A mi hermana le encanta la playa, pero a mí no me gusta el calor. A mis padres les da igual: van adonde vamos nosotros.', next: 'Ahora, cómo eres.' },
            { q: '¿Cómo eres? ¿Eres puntual, paciente, ordenado u ordenada? ¿Pareces algo que no eres? · What are you like? Do you seem to be something you aren’t?', followUps: ['¿Y la gente de tu familia? ¿Lo es también? (And your family? Are they too?)', '¿Estás cansado o cansada hoy? (Are you tired today?)'], phrases: ['Puntual, sí, [[lo soy|teal]].', 'Parezco tranquilo, pero no [[lo soy|teal]].', 'Hoy estoy cansada, y mi hermano también [[lo está|teal]].'], hint: '«Lo» retoma la cualidad y no cambia: lo soy, lo es, lo son.', example: 'Puntual, sí, lo soy: siempre llego cinco minutos antes. Parezco muy tranquila, pero no lo soy: me pongo nerviosa enseguida. Mi hermano es muy paciente; yo no lo soy.', next: 'Para terminar, tú eres Raúl.' },
            { q: 'Ahora tú eres Raúl. Sofía vuelve del congreso y te pregunta: «¿Cómo va todo?». Cuenta cómo están cuatro tareas. · Now you are Raúl: tell Sofía how four jobs are going.', followUps: ['¿Y el contrato del señor Ortega? (And Mr Ortega’s contract?)', '¿Y tú? ¿Estás cansado? (And you? Are you tired?)'], phrases: ['[[Las facturas las|blue]] pagué…', '[[A Julia la|blue]] conocí…', '[[Le escribí al señor Ortega|orange]], pero…', 'Un poco, sí, [[lo estoy|teal]].'], hint: 'Un tema delante en cada respuesta, y una respuesta con «lo» atributo.', example: 'Las facturas las pagué el jueves. A Julia la conocí el martes: parece seria, pero no lo es. El contrato todavía no lo tengo: le escribí al señor Ortega, pero no contesta. ¿Cansado? Un poco, sí, lo estoy.', teacher: 'Tú eres Sofía y preguntas por cada tema: «¿Y las facturas?», «¿Y la profesora nueva?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta por tus cosas («¿Y tus libros viejos?», «¿Eres puntual?») y tú respondes con el tema delante y con «lo es».', self: 'Ahora haz tú las preguntas en voz alta («¿Y la compra?», «¿Eres paciente?») y respóndelas con otra situación. (Now ask and answer with another situation.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo con las novedades', coach: 'Tema, pronombre, verbo. Topic, pronoun, verb.',
      steps: [
        { title: 'Cómo va todo · How everything is going', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada tema delante: ¿tiene su pronombre? ¿Concuerda? Después, tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada frase que empieza por el objeto: ¿tiene su pronombre? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Las novedades de la semana · This week’s news', situation: 'Eres Raúl (o eres tú, en tu trabajo o tu casa). Una compañera vuelve el lunes después de unos días fuera. Escríbele un correo para contarle cómo están las tareas pendientes antes de su vuelta. (You are Raúl, or yourself. A colleague is back on Monday: email her an update on the pending jobs.)', task: [
            'Cuenta al menos tres tareas con el tema delante y su pronombre: «Las facturas las pagué…». (Three jobs, topic first.)',
            'Habla de una persona con «a + persona» delante: «A Julia la conocí…», «A los alumnos les mandé…». (A person first.)',
            'Usa «lo es / lo está / no lo es» para una cualidad. (Use “lo” for a quality.)',
            'Destaca algo con «a mí me…» o «a ti te…» y despídete. (Add emphasis and sign off.)',
          ], starters: ['Hola, Sofía:', 'Te escribo para contarte cómo va todo.', '… ya las pagué.', '… todavía no lo tengo.', 'A … la conocí…', 'Parece…, pero no lo es.', 'A mí me dijeron que…', 'Un abrazo,'],
            words: ['lo', 'la', 'los', 'las', 'le', 'les', 'a mí me', 'a ti te', 'lo es', 'lo está', 'ya', 'todavía no'],
            model: 'Hola, Sofía: Te escribo antes de tu vuelta para contarte cómo va todo. [[Las facturas de octubre ya las pagué|blue]] y [[el contrato del señor Ortega lo tienes|blue]] en tu mesa. [[A los alumnos nuevos les mandé|blue]] el horario el martes. [[A Julia la conocí|blue]] el miércoles: parece muy seria, pero no [[lo es|teal]]. Le enseñé las aulas y le di la llave de la sala de profesores. La impresora, en cambio, sigue rota: [[a mí me dijeron|violet]] que el técnico viene el lunes, pero no estoy seguro. ¿Que si estoy cansado? Un poco, sí, [[lo estoy|teal]], pero contento. Un abrazo, Raúl.',
            minWords: 80,
            checks: [
              { label: 'Un objeto delante con su pronombre (topic first)', pattern: '(?<!\\p{L})(?:el|la|los|las|este|esta|estos|estas|ese|esa|esos|esas)\\s+\\p{L}+(?:\\s+(?:de|del)\\s+\\p{L}+(?:\\s+\\p{L}+)?)?\\s+(?:ya\\s+|no\\s+|todavía\\s+no\\s+|también\\s+)?(?:lo|la|los|las)\\s+\\p{L}+', tip: 'Empieza una frase por el objeto y retómalo: «Las facturas ya las pagué».' },
              { label: 'A + persona delante + pronombre (a person first)', pattern: '(?<!\\p{L})a\\s+(?:\\p{L}+\\s+){1,3}(?:ya\\s+|no\\s+|todavía\\s+no\\s+)?(?:lo|la|los|las|le|les)\\s+\\p{L}+', tip: 'Pon a una persona delante: «A Julia la conocí», «A los alumnos les mandé…».' },
              { label: 'Lo atributo: lo es, lo está (a quality)', pattern: '(?<!\\p{L})lo\\s+(?:es|son|soy|eres|somos|está|están|estoy|estás|estamos|era|eran|estaba|estaban|parece|parecen|parezco)(?!\\p{L})(?!\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L}))', tip: 'Retoma una cualidad con «lo»: «Parece seria, pero no lo es».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:la|las|los)\\s+(?:es|son|soy|eres|somos|está|están|estoy|estás|parece|parecen)(?!\\p{L})(?!\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L}))', why: 'Para retomar una cualidad, «lo» no cambia: **lo es, lo están**, no «la es» ni «los están».' },
              { pattern: '(?<!\\p{L})a\\s+(?:mí|mi|ti)\\s+(?:no\\s+)?(?:gusta|gustan|encanta|encantan|interesa|interesan|parece|parecen|dijo|dijeron|pasa|pasó)(?!\\p{L})', why: '«A mí» y «a ti» nunca van solos: **a mí me** gusta, **a ti te** dijeron.' },
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
            { tone: 'blue', label: 'TEMA DELANTE', formula: 'objeto + lo · la · los · las / le · les + verbo', example: 'Las facturas las pagué. A Julia le escribí ayer.', caption: 'pronombre obligatorio; detrás, el objeto directo no se repite', en: 'the pronoun is a must; after the verb, the direct object is not repeated' },
            { tone: 'orange', label: 'LE / LES… A + PERSONA', formula: 'le · les + verbo… a + persona', example: 'Les mandé el calendario a los alumnos.', caption: 'opcional pero muy frecuente; siempre con gustar; plural → les', en: 'optional but very common; always with gustar; plural → les' },
            { tone: 'violet', label: 'TÓNICO + ÁTONO', formula: 'me… a mí · te… a ti · la… a ella', example: 'Me lo dijo a mí, no a ti.', caption: 'para destacar o contrastar; el tónico nunca va solo', en: 'to highlight or contrast; the tonic form never goes alone' },
            { tone: 'teal', label: 'LO ATRIBUTO', formula: 'ser · estar · parecer → lo es · lo está · lo parece', example: 'Parece seria, pero no lo es.', caption: 'retoma una cualidad; siempre «lo»', en: 'picks up a quality; always “lo”' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Si el objeto va **delante**, el pronombre lo retoma: «El informe **lo** terminé». Si va **detrás**, el objeto directo no se repite («Terminé el informe»), y el indirecto suele llevar le / les («**Le** di el informe a Sofía»). «A mí, a ti, a ella» siempre con su átono. Y para una cualidad, «**lo**» invariable: «Sí, lo es».', en: 'If the object comes first, a pronoun picks it up: “El informe lo terminé”. If it comes after the verb, the direct object is not repeated, and the indirect object usually takes le / les. “A mí, a ti, a ella” always come with their clitic. And for a quality, invariable “lo”: “Sí, lo es”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Las entradas del concierto ___ compró mi hermano.', options: ['les', 'lo', 'las'], answer: 2, why: 'Objeto directo femenino plural, delante: las.', en: 'My brother bought the concert tickets.' },
            { prompt: 'A mi abuela ___ regalamos un viaje por su cumpleaños.', options: ['le', 'la', 'lo'], answer: 0, why: 'La abuela recibe el viaje: objeto indirecto delante → le.', en: 'We gave my grandmother a trip for her birthday.' },
            { prompt: '¿Qué frase es correcta?', options: ['Vi a ti en el mercado.', 'A ti vi en el mercado.', 'Te vi a ti en el mercado.'], answer: 2, why: '«A ti» como objeto siempre con «te».', en: 'Which sentence is correct?' },
            { prompt: '—¿Tus vecinas son simpáticas? —Sí, mucho, ___.', options: ['son ellas', 'lo son', 'las son'], answer: 1, why: '«Lo» atributo invariable: lo son.', en: '“Are your neighbours friendly?” “Yes, very.”' },
            { prompt: '¿Qué frase sigue la norma general?', options: ['Lo conocí a tu primo en la boda.', 'A tu primo conocí en la boda.', 'Conocí a tu primo en la boda.'], answer: 2, why: 'Objeto directo detrás: sin pronombre. Delante: «A tu primo lo conocí».', en: 'Which sentence follows the general norm?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una mudanza. Now, a house move.', blocks: [
          { kind: 'lead', text: 'Elena y su pareja, Gonzalo, se mudan el sábado. Elena revisa la lista y le contesta a una amiga que quiere ayudar. Transforma sus frases.', en: 'Elena and her partner, Gonzalo, are moving house on Saturday. Elena goes through the list and answers a friend who wants to help. Transform her sentences.' },
          { kind: 'rewrite', title: 'La mudanza de Elena · Elena’s move', items: [
            { prompt: 'Ya metimos los libros en cajas.', instruction: 'Pon «los libros» delante. Empieza con «Los libros». (Topic first.)', accept: ['Los libros ya los metimos en cajas', 'Los libros los metimos ya en cajas'] },
            { prompt: 'Todavía no hemos llamado al casero.', instruction: 'Empieza con «Al casero». (Start with the person.)', accept: ['Al casero todavía no lo hemos llamado', 'Al casero no lo hemos llamado todavía', 'Al casero todavía no le hemos llamado'] },
            { prompt: '—¿El piso nuevo es grande? —Sí, es grande.', instruction: 'Escribe solo la respuesta con «lo». Empieza con «Sí». (Answer with lo.)', accept: ['Sí, lo es'] },
          ] },
        ] },
        { title: 'Ampliación: variedades y casos especiales · Extension: varieties and special cases', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: regiones y matices. Optional: regions and nuances.', blocks: [
          { kind: 'lead', text: 'Cuatro casos para ir más lejos. **1.** En el Río de la Plata es frecuente repetir también el objeto directo de persona detrás del verbo: «**La** conocí a Julia»; en la norma general, «Conocí a Julia». **2.** En muchas zonas de España, «**le**» para un hombre: «A Raúl le vi» (aceptado solo en singular y con hombre). **3.** Con un nombre **sin artículo** delante, normalmente no hay pronombre: «¿Café? **Café no tengo**, pero tengo té». **4.** Con «estar» + lugar no hay «lo»: «¿Está Sofía? —Sí, está».', en: 'Four cases to go further. 1. In the River Plate area, people often double a person direct object after the verb too: “La conocí a Julia”; the general norm says “Conocí a Julia”. 2. In many parts of Spain, “le” for a man: “A Raúl le vi” (accepted only for one man). 3. With a bare noun (no article) first, there is normally no pronoun: “Coffee, I haven’t got.” 4. With “estar” + place there is no “lo”.' },
          { kind: 'choice', title: 'Variedades y casos especiales · Varieties and special cases', items: [
            { context: 'En la cocina. (In the kitchen.)', prompt: '—¿Tienes azúcar? —___, pero tengo miel.', options: ['Azúcar tengo no', 'Azúcar no tengo', 'Azúcar no les tengo'], answer: 1, why: 'Con un nombre sin artículo como tema, lo natural es sin pronombre: «Azúcar no tengo». Compara: «El azúcar lo tengo en el armario».', en: '“Have you got any sugar?” “Sugar, I haven’t got, but I have honey.”' },
            { context: 'Una conversación en Buenos Aires. (A conversation in Buenos Aires.)', prompt: '«Lo conozco a tu hermano desde hace años». En la norma general, sería…', options: ['Le conozco a tu hermano desde hace años.', 'A tu hermano conozco desde hace años.', 'Conozco a tu hermano desde hace años.'], answer: 2, why: 'Con el objeto directo detrás, la norma general no lo repite. La versión con «lo» es frecuente en el Río de la Plata.', en: '“I’ve known your brother for years.” In the general norm, it would be…' },
            { context: 'Una oficina en Madrid. (An office in Madrid.)', prompt: '¿Qué frase NO acepta la norma?', options: ['A Julia le vi ayer.', 'A Raúl le vi ayer.', 'A Raúl lo vi ayer.'], answer: 0, why: 'El leísmo aceptado es solo con un hombre: «A Raúl le vi». Con una mujer, siempre «la»: «A Julia la vi».', en: 'Which sentence does the norm NOT accept?' },
            { context: 'Por teléfono. (On the phone.)', prompt: '—¿Está Sofía en la oficina? —Sí, ___.', options: ['la está', 'está', 'lo está'], answer: 1, why: '«En la oficina» es un lugar, no una cualidad: sin «lo».', en: '“Is Sofía in the office?” “Yes, she is.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno responde con un nombre sin artículo como tema («¿Tienes tiempo?» → «Tiempo no tengo, pero…») y comenta qué variedad de las cuatro ha oído más.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 112 · Relativos quien, el que, el cual introductorio', text: 'Ya organizas la información: pones el tema delante y lo retomas con un pronombre («A Julia la conocí el martes»). En la clase 112 das un paso más para hablar de personas y cosas ya mencionadas: los relativos **quien, el que, el cual** («Julia es la profesora **con la que** trabajo»). Es el paso natural: de retomar con un pronombre a unir frases con un relativo.', en: 'You can now organize information: put the topic first and pick it up with a pronoun (“A Julia la conocí el martes”). In class 112 you go one step further to talk about people and things already mentioned: the relatives quien, el que, el cual (“Julia is the teacher I work with”). It is the natural next step: from picking up with a pronoun to linking sentences with a relative.', href: '/gramatica/relativos-quien-el-que-el-cual', label: 'Ir a la clase 112' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Y los deberes de hoy? ¿Eres una persona organizada?». Respuesta esperada: «Los deberes los hago esta tarde» y «Sí, lo soy / No, no lo soy». Tarea: escribir el correo de Escribir con una situación real.' },
        ] },
      ],
    },
  ],
};
