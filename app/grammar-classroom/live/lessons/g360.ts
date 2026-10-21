import type { LiveLesson } from '../types';

/**
 * Lesson 360 · A2 · Pronombres reflexivos: rutinas y cambios de estado (course unit G060).
 * Builds on class 031 (me levanto, te duchas in the present) and the past tenses
 * of classes 045–050. One scene runs through the class: Nuria Campos, a graphic
 * designer in Mexico City, had a job interview yesterday at nine thirty. The
 * night before she couldn't sleep, the alarm didn't ring, she woke up late,
 * got nervous on the metro and calmed down thanks to the receptionist. Her
 * flatmate Valeria comes back from a work trip and asks; tomorrow Nuria has a
 * second interview. In the voice message her brother Iván (Mexican voice, tú)
 * tells his own first interview and gives advice.
 * Content: (1) me/te/se/nos before the conjugated verb in the indefinido,
 * imperfecto and perfecto (me desperté, me levantaba, me he levantado);
 * (2) the pronoun attached to infinitive, gerund and affirmative imperative
 * (voy a acostarme = me voy a acostar, estoy vistiéndome, levántate / no te
 * levantes), with the person kept (vamos a acostarnos); (3) pronominal verbs of
 * change of state: ponerse nervioso (preview of class 061), preocuparse,
 * tranquilizarse, enojarse / enfadarse, aburrirse, cansarse, asustarse, relajarse.
 * Contrasts: se puso nerviosa (change) / estaba nerviosa (state); Nuria se
 * tranquilizó / la recepcionista tranquilizó a Nuria; me dormí / dormí.
 * Mistakes: *he me levantado, *voy a me acostar, *me despierté, *Nuria preocupó,
 * *me estaba nerviosa. Instructions use tú; Ampliación: the same verbs with usted.
 */
export const lesson: LiveLesson = {
  id: 360,
  level: 'A2',
  title: 'Pronombres reflexivos: rutinas y cambios de estado',
  subtitle: 'Contar una mañana difícil y cómo te sentiste: me desperté tarde, me puse nerviosa, me tranquilicé y voy a acostarme temprano.',
  legend: [
    { tone: 'blue', label: 'ANTES DEL VERBO · me, te, se, nos + verbo conjugado (me desperté, me he levantado)' },
    { tone: 'teal', label: 'PEGADO AL FINAL · infinitivo, gerundio, orden afirmativa (acostarme, vistiéndome, levántate)' },
    { tone: 'violet', label: 'CAMBIO DE ESTADO · algo cambia en la persona (se puso nerviosa, me tranquilicé)' },
    { tone: 'orange', label: 'SIN «SE» · otra persona recibe la acción, o solo un estado (tranquilizó a Nuria, estaba nerviosa)' },
  ],
  optionNotes: {
    'me despierté': 'En indefinido, despertarse no cambia la raíz: **me desperté**. El cambio e → ie es del presente (me despierto).',
    'se acuestó': 'En indefinido, acostarse no cambia la raíz: **se acostó**. El cambio o → ue es del presente (se acuesta).',
    'se acuestaron': 'En indefinido, acostarse no cambia la raíz: **se acostaron**. El cambio o → ue es del presente (se acuestan).',
    'se vestió': 'Vestirse cambia e → i con él, ella y usted en indefinido, como pedir (pidió): **se vistió**.',
    'he me levantado': 'El pronombre va antes de todo el verbo, también antes de haber: **me he levantado**.',
    'voy a me levantar': 'El pronombre no va en medio: **me voy a levantar** o **voy a levantarme**.',
    'tranquilízese': 'Es la forma de usted. Iván habla con su hermana de tú: **tranquilízate**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Una mañana difícil', coach: 'Me desperté tarde. I woke up late.',
      steps: [
        { title: 'La entrevista de Nuria · Nuria’s interview', blocks: [
          { kind: 'lead', text: 'Nuria Campos es diseñadora gráfica y vive en Ciudad de México con su amiga Valeria. Ayer tuvo una entrevista de trabajo muy importante, a las nueve y media. Pero la mañana empezó mal: **se despertó tarde** y en el metro **se puso nerviosa**. Hoy aprendes a contar la rutina en pasado y los cambios en una persona con me, te, se y nos.', en: 'Nuria Campos is a graphic designer and lives in Mexico City with her friend Valeria. Yesterday she had a very important job interview, at half past nine. But the morning started badly: she woke up late and got nervous on the metro. Today you learn to tell a routine in the past and the changes in a person with me, te, se and nos.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Nuria y tu alumno repite. Después tu alumno dice cuál habla de un cambio dentro de Nuria.', self: 'Lee en voz alta las tres frases de Nuria. ¿Cuál habla de un cambio dentro de ella? (Which one is about a change inside her?)' } },
          { kind: 'compare', title: 'Tres frases de Nuria · Three sentences from Nuria', columns: [
            { tone: 'blue', label: 'RUTINA EN PASADO · past routine', sentence: '«[[Me desperté|blue]] a las ocho y diez».', idea: 'Una acción de la rutina, ya terminada. El pronombre va antes del verbo.', en: '“I woke up at ten past eight.”' },
            { tone: 'violet', label: 'CAMBIO DE ESTADO · a change', sentence: '«En el metro [[me puse nerviosa|violet]]».', idea: 'Antes estaba tranquila; en ese momento, algo cambió dentro de ella.', en: '“On the metro I got nervous.”' },
            { tone: 'teal', label: 'PLAN · pronombre al final', sentence: '«Esta noche voy a [[acostarme|teal]] temprano».', idea: 'Con un infinitivo, el pronombre puede ir pegado al final.', en: '“Tonight I’m going to go to bed early.”' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Me desperté a las ocho y diez» habla de…', options: ['una acción de la rutina, terminada.', 'un plan para mañana.', 'lo que Nuria hace todos los días.'], answer: 0, why: '«Desperté» es indefinido: una acción de ayer, terminada.', en: '“Me desperté a las ocho y diez” is about…' },
            { prompt: '«Me puse nerviosa» significa…', options: ['I put on a jacket.', 'I was nervous all day.', 'I got nervous (at that moment).'], answer: 2, why: 'Ponerse nerviosa = empezar a estar nerviosa: un cambio en un momento.', en: '“Me puse nerviosa” means…' },
            { prompt: 'En «voy a acostarme», ¿dónde está el pronombre?', options: ['Entre «voy» y «a».', 'Pegado al final del infinitivo.', 'Antes de «voy».'], answer: 1, why: 'Acostar + me = acostarme: el pronombre va pegado al infinitivo.', en: 'In “voy a acostarme”, where is the pronoun?' },
          ] },
        ] },
        { title: 'La rutina en pasado · Routines in the past', mascot: '/brand/mascot/studying.webp', coach: 'Me desperté, me levantaba, me he levantado.', blocks: [
          { kind: 'lead', text: 'Ya conoces «me levanto, te duchas, se viste» (clase 031) y los pasados (clases 045–050). Hoy los juntas. El pronombre **no cambia de sitio** con el tiempo verbal: va antes del verbo conjugado. Con el perfecto, va antes de **he, has, ha**.', en: 'You already know “me levanto, te duchas, se viste” (class 031) and the past tenses (classes 045–050). Today you put them together. The pronoun does not move when the tense changes: it goes before the conjugated verb. With the present perfect, it goes before he, has, ha.' },
          { kind: 'table', title: 'Indefinido · lo que pasó ayer (what happened yesterday)', head: ['Persona', 'despertarse (wake up)', 'acostarse (go to bed)', 'vestirse (get dressed)', 'ponerse (put on · get)'], rows: [
            ['yo', '[[me desperté|blue]]', '[[me acosté|blue]]', '[[me vestí|blue]]', '[[me puse|blue]]'],
            ['tú', 'te despertaste', 'te acostaste', 'te vestiste', 'te pusiste'],
            ['él · ella · usted', '[[se despertó|blue]]', '[[se acostó|blue]]', '[[se vistió|blue]]', '[[se puso|blue]]'],
            ['nosotros · nosotras', 'nos despertamos', 'nos acostamos', 'nos vestimos', 'nos pusimos'],
            ['ellos · ellas · ustedes', 'se despertaron', 'se acostaron', 'se vistieron', 'se pusieron'],
          ], note: 'En indefinido, despertarse y acostarse **no cambian la raíz**: me desperté, me acosté (no «despierté», no «acuesté»). Vestirse cambia e → i solo con él, ella, usted, ellos y ustedes: se vistió, se vistieron. Ponerse es irregular: me puse, se puso. (No stem change in the indefinido; vestirse changes only in the third person; ponerse is irregular.)' },
          { kind: 'concept', tone: 'blue', label: 'ANTES DEL VERBO CONJUGADO', question: '¿Dónde va el pronombre en pasado?', en: 'Where does the pronoun go in the past?', formula: ['me + desperté · me + levantaba', 'me + he + levantado (antes de haber)'],
            meaning: 'En el indefinido, el imperfecto y el perfecto, el pronombre va **separado y antes** del verbo conjugado. En el perfecto, nada va entre **he** y el participio: me he levantado.',
            examples: [
              { es: 'Ayer Nuria [[se levantó|blue]] corriendo.', en: 'Yesterday Nuria got up in a rush.' },
              { es: 'De estudiante, [[me levantaba|blue]] a las diez.', en: 'As a student, I used to get up at ten.' },
              { es: 'Hoy [[me he despertado|blue]] a las seis.', en: 'Today I woke up at six.' },
            ],
            note: '🌎 Para hoy, en México y en gran parte de América es más frecuente «hoy me desperté»; en España, «hoy me he despertado» (clase 051).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Anoche Valeria ___ a las doce.', options: ['acostó', 'se acostó', 'se acuestó'], answer: 1, why: 'Ella + acostarse en indefinido: se acostó, sin cambio de raíz.', en: 'Last night Valeria went to bed at twelve.' },
            { prompt: 'Hoy ___ muy temprano.', options: ['he levantado me', 'me he levantado', 'he me levantado'], answer: 1, why: 'El pronombre va antes de haber: me he levantado.', en: 'Today I got up very early.' },
            { prompt: 'Cuando era estudiante, Nuria siempre ___ a las diez.', options: ['se levantaba', 'se levantó', 'levantaba'], answer: 0, why: 'Un hábito del pasado (siempre): imperfecto, con se antes del verbo.', en: 'When she was a student, Nuria always got up at ten.' },
          ] },
        ] },
        { title: 'Dos verbos y órdenes · Two verbs and instructions', mascot: '/brand/mascot/standing.webp', coach: 'Me voy a acostar = voy a acostarme.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PEGADO AL FINAL', question: '¿Y con dos verbos o con una orden?', en: 'And with two verbs, or with an instruction?', formula: ['me voy a acostar = voy a acostarme', 'me estoy vistiendo = estoy vistiéndome', 'levántate · no te levantes'],
            meaning: 'Con **ir a, querer, poder, tener que + infinitivo** y con **estar + gerundio** hay dos sitios: antes del verbo conjugado o pegado al final. Las dos frases dicen lo mismo. **Nunca en medio.** Con la orden afirmativa, el pronombre va siempre pegado (levántate); con la negativa, antes (no te levantes).',
            examples: [
              { es: '[[Me voy a acostar|blue]] temprano. = Voy a [[acostarme|teal]] temprano.', en: 'I’m going to go to bed early.' },
              { es: '[[Me estoy vistiendo|blue]]. = Estoy [[vistiéndome|teal]].', en: 'I’m getting dressed.' },
              { es: '[[Tranquilízate|teal]], Nuria. [[No te preocupes|blue]].', en: 'Calm down, Nuria. Don’t worry.' },
            ],
            note: 'Con el pronombre pegado, a veces hace falta tilde para guardar el acento: vist**ie**ndo → vist**ié**ndome, lev**a**nta → lev**á**ntate. Con el infinitivo, no: acostarme, ponerme.' },
          { kind: 'table', title: 'El pronombre pegado también cambia con la persona · It still changes with the person', head: ['Persona', 'Antes del verbo conjugado', 'Pegado al infinitivo'], rows: [
            ['yo', '[[me voy a acostar|blue]]', 'voy a [[acostarme|teal]]'],
            ['tú', 'te vas a acostar', 'vas a [[acostarte|teal]]'],
            ['él · ella · usted', 'se va a acostar', 'va a [[acostarse|teal]]'],
            ['nosotros · nosotras', 'nos vamos a acostar', 'vamos a [[acostarnos|teal]]'],
            ['ellos · ellas · ustedes', 'se van a acostar', 'van a [[acostarse|teal]]'],
          ], note: 'El diccionario dice «acostar**se**», pero en la frase el pronombre es el de la persona: vamos a acostar**nos**, no «vamos a acostarse».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mañana ___ a las seis.', options: ['voy a levantarme', 'voy me a levantar', 'voy a me levantar'], answer: 0, why: 'Pegado al infinitivo: voy a levantarme. También es correcto «me voy a levantar».', en: 'Tomorrow I’m going to get up at six.' },
            { prompt: 'Nosotros tenemos que ___ temprano.', options: ['acostarse', 'acostarme', 'acostarnos'], answer: 2, why: 'Nosotros: el pronombre pegado es nos. Acostarnos.', en: 'We have to go to bed early.' },
            { prompt: 'Valeria ve a Nuria muy nerviosa y le dice: «¡___!»', options: ['Te tranquilizas', 'Tranquiliza te', 'Tranquilízate'], answer: 2, why: 'Orden afirmativa con tú: el pronombre va pegado y la palabra lleva tilde.', en: 'Valeria sees Nuria very nervous and says to her: “Calm down!”' },
          ] },
        ] },
        { title: 'Cambios de estado · Changes of state', mascot: '/brand/mascot/portrait.webp', coach: '¿Qué cambió dentro de la persona?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CAMBIO DE ESTADO', question: '¿Qué cambió en la persona?', en: 'What changed in the person?', formula: ['me puse nerviosa · se preocupó · nos aburrimos', 'preocuparse · tranquilizarse · enojarse · aburrirse · cansarse · asustarse'],
            meaning: 'Algunos verbos con se no hablan de la rutina: dicen que una persona **empieza a sentir algo** o **cambia de estado**. Con el indefinido cuentas el momento del cambio. **Ponerse + adjetivo** (nervioso, contento) es muy frecuente; en la clase 061 lo ves con más detalle.',
            examples: [
              { es: 'En el metro, Nuria [[se puso nerviosa|violet]].', en: 'On the metro, Nuria got nervous.' },
              { es: 'Valeria [[se preocupó|violet]] por el silencio de Nuria.', en: 'Valeria got worried because Nuria didn’t answer.' },
              { es: 'Después de la llamada, [[me tranquilicé|violet]].', en: 'After the phone call, I calmed down.' },
            ] },
          { kind: 'table', title: 'Verbos de cambio frecuentes · Common change verbs', head: ['Verbo', 'English', 'En pasado'], rows: [
            ['ponerse nervioso/a, contento/a', 'get nervous, get happy', 'Me [[puse|violet]] muy nerviosa.'],
            ['preocuparse (por)', 'get worried, worry', 'Se [[preocupó|violet]] por la hora.'],
            ['tranquilizarse · relajarse', 'calm down · relax', 'Me [[tranquilicé|violet]] (z → c ante e).'],
            ['enojarse · enfadarse', 'get angry', 'El jefe no se [[enojó|violet]].'],
            ['aburrirse', 'get bored', 'Nos [[aburrimos|violet]] en la reunión.'],
            ['cansarse · asustarse', 'get tired · get scared', 'Me [[asusté|violet]] con el ruido.'],
          ], note: '🌎 «Enojarse» es la forma más frecuente en México y en gran parte de América; en España se dice sobre todo «enfadarse». Las dos son correctas.' },
          { kind: 'compare', title: '¿Estado o cambio? · State or change?', columns: [
            { tone: 'orange', label: 'ESTADO · estar + adjetivo', sentence: 'A las nueve, Nuria [[estaba nerviosa|orange]].', idea: 'Describe cómo estaba: la escena (imperfecto, clase 050). Sin se.', en: 'At nine, Nuria was nervous.' },
            { tone: 'violet', label: 'CAMBIO · verbo con se', sentence: 'De repente, Nuria [[se puso nerviosa|violet]].', idea: 'Cuenta el momento del cambio: un hecho de la historia.', en: 'Suddenly, Nuria got nervous.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando vio la hora, Nuria ___ mucho.', options: ['preocupó', 'se preocupa', 'se preocupó'], answer: 2, why: 'Un cambio en un momento (cuando vio la hora): se preocupó.', en: 'When she saw the time, Nuria got very worried.' },
            { prompt: 'Toda la mañana Nuria ___ cansada.', options: ['se estaba', 'se puso', 'estaba'], answer: 2, why: 'Describe cómo estaba toda la mañana: estado, estar sin se.', en: 'All morning Nuria was tired.' },
            { prompt: 'En la reunión, los clientes ___ y miraron el teléfono.', options: ['se aburrieron', 'aburrieron', 'se aburren'], answer: 0, why: 'Un cambio en la historia, en pasado: se aburrieron.', en: 'In the meeting, the clients got bored and looked at their phones.' },
          ] },
        ] },
        { title: '¿Con se o sin se? · With or without se?', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Quién recibe la acción?', blocks: [
          { kind: 'table', title: 'Pares mínimos · Minimal pairs', head: ['Con se: la misma persona', 'Sin se: otra persona, o sin cambio', 'English'], rows: [
            ['Nuria [[se despertó|blue]] tarde.', 'Valeria [[despertó a Nuria|orange]].', 'Nuria woke up late / Valeria woke Nuria up.'],
            ['Nuria [[se tranquilizó|violet]].', 'La recepcionista [[tranquilizó a Nuria|orange]].', 'Nuria calmed down / The receptionist calmed Nuria down.'],
            ['Los niños [[se asustaron|violet]].', 'El perro [[asustó a los niños|orange]].', 'The children got scared / The dog scared the children.'],
            ['Anoche [[me dormí|blue]] a la una.', 'Anoche [[dormí|orange]] cinco horas.', 'I fell asleep at one / I slept five hours.'],
          ], note: 'Con otra persona, el verbo va sin se y con **a**: despertó **a** Nuria. Dormirse es el momento de empezar a dormir; dormir es el tiempo que duermes.' },
          { kind: 'tip', icon: '💡', title: '«Te despiertas» o «te despierto»', text: '«Te» no siempre es reflexivo. «**Te despiertas** a las seis» = tú misma abres los ojos. «Yo **te despierto** a las seis» = Valeria hace la acción y Nuria la recibe. Mira el verbo: si la persona del verbo y el pronombre son la misma persona, es reflexivo.', en: '“Te” is not always reflexive. “Te despiertas a las seis” = you wake up yourself. “Yo te despierto a las seis” = Valeria does the action and Nuria receives it. Look at the verb: if the verb’s person and the pronoun are the same person, it is reflexive.' },
          { kind: 'decide', title: 'Antes de hablar, piensa · Before you speak', steps: [
            { q: '¿La acción o el cambio queda en la misma persona? (Does it stay in the same person?)', yes: 'Usa **me, te, se, nos**: me desperté, se puso nerviosa.', no: 'next' },
            { q: '¿Otra persona o cosa recibe la acción? (Does someone or something else receive it?)', yes: 'Sin se, con **a** + persona: despertó a Nuria, asustó a los niños.', no: 'next' },
            { q: '¿Solo describes cómo estaba alguien? (Are you only describing a state?)', yes: '**Estar** + adjetivo, sin se: estaba nerviosa.', no: 'Lee otra vez: ¿quién cambia y quién recibe la acción?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Valeria ___ a Nuria a las seis.', options: ['se despierta', 'despertó', 'se despertó'], answer: 1, why: 'Nuria recibe la acción (a Nuria): despertó, sin se.', en: 'Valeria woke Nuria up at six.' },
            { prompt: 'Con el ruido del metro, Nuria ___.', options: ['se asustó', 'asustó', 'se asusta'], answer: 0, why: 'El cambio queda en Nuria, en un momento del pasado: se asustó.', en: 'With the noise of the metro, Nuria got scared.' },
            { prompt: 'Nuria: «La noche antes ___ solo cinco horas».', options: ['dormí', 'me dormí', 'me dormía'], answer: 0, why: 'Cinco horas es el tiempo que duerme, no el momento de empezar: dormir, sin me.', en: 'Nuria: “The night before I only slept five hours.”' },
          ] },
          { kind: 'concept', tone: 'blue', label: 'SE RECÍPROCO · each other', question: '¿Quién hace la acción a quién?', en: 'Who does the action to whom?', formula: ['nos · os · se + verbo en plural', 'A → B y B → A'],
            meaning: 'Con un sujeto plural, **nos, os, se** también pueden significar «each other»: cada persona hace la acción a la otra. «Nuria y Valeria **se ayudan**» = Nuria ayuda a Valeria y Valeria ayuda a Nuria. El verbo va siempre en plural.',
            examples: [
              { es: 'Nuria y Valeria [[se ayudan|blue]] mucho en casa.', en: 'Nuria and Valeria help each other a lot at home.' },
              { es: 'Nuria e Iván [[se escriben|blue]] todos los días.', en: 'Nuria and Iván write to each other every day.' },
              { es: 'Valeria y yo [[nos conocimos|blue]] en la universidad.', en: 'Valeria and I met at university.' },
              { es: 'Los padres de Nuria [[se quieren|blue]] mucho.', en: 'Nuria’s parents love each other very much.' },
            ],
            note: 'Con ustedes también es **se**: «¿Ustedes se llaman mucho?». En España, con vosotros: **os** («¿Os llamáis mucho?»).' },
          { kind: 'compare', title: '¿Cada una a sí misma o una a la otra? · Themselves or each other?', columns: [
            { tone: 'blue', label: 'REFLEXIVO · cada una a sí misma', sentence: 'Nuria y Valeria [[se miran|blue]] en el espejo antes de salir.', idea: 'Cada una mira su propia imagen: dos acciones separadas.', en: 'Nuria and Valeria look at themselves in the mirror before going out.' },
            { tone: 'blue', label: 'RECÍPROCO · una a la otra', sentence: 'Nuria y Valeria [[se miran|blue]] la una a la otra y sonríen.', idea: 'Nuria mira a Valeria y Valeria mira a Nuria.', en: 'Nuria and Valeria look at each other and smile.' },
          ] },
          { kind: 'tip', icon: '💡', title: '«El uno al otro» lo aclara · It makes it clear', text: 'A veces «se miran» puede ser reflexivo o recíproco. Para decir claramente «each other», añade **el uno al otro** (dos hombres, o un hombre y una mujer) o **la una a la otra** (dos mujeres); con más personas, **los unos a los otros**. También se dice **mutuamente**: «Se ayudan mutuamente». Para «themselves»: **a sí mismos / a sí mismas**.', en: 'Sometimes “se miran” can mean “they look at themselves” or “they look at each other”. To say “each other” clearly, add “el uno al otro” (two men, or a man and a woman) or “la una a la otra” (two women); with more people, “los unos a los otros”. You can also say “mutuamente”. For “themselves”: “a sí mismos / a sí mismas”.' },
          { kind: 'choice', title: 'Comprueba: se recíproco · Check: each other', items: [
            { prompt: 'Nuria y su hermano Iván ___ mensajes todos los días.', options: ['se escribe', 'se escriben', 'escriben se'], answer: 1, why: 'Recíproco: Nuria escribe a Iván e Iván a Nuria. Se + verbo en plural.', en: 'Nuria and her brother Iván send each other messages every day.' },
            { prompt: 'Valeria y yo ___ en la universidad hace cinco años.', options: ['nos conocimos', 'se conocieron', 'me conocí'], answer: 0, why: 'Valeria y yo = nosotras: nos conocimos.', en: 'Valeria and I met at university five years ago.' },
            { prompt: '«Nuria y Valeria se ayudan la una a la otra» significa…', options: ['Cada una se ayuda a sí misma.', 'Otra persona las ayuda.', 'Nuria ayuda a Valeria y Valeria ayuda a Nuria.'], answer: 2, why: '«La una a la otra» marca la acción recíproca: A → B y B → A.', en: '“Nuria y Valeria se ayudan la una a la otra” means…' },
            { prompt: 'Nuria y Valeria se abrazan ___: ¡la entrevista salió bien!', options: ['la una a la otra', 'el uno al otro', 'a sí mismas'], answer: 0, why: 'Dos mujeres que se abrazan entre ellas: la una a la otra.', en: 'Nuria and Valeria hug each other: the interview went well!' },
            { prompt: 'Iván y su novia ___ mucho.', options: ['se quiere', 'les quieren', 'se quieren'], answer: 2, why: 'Sujeto plural y acción recíproca: se quieren.', en: 'Iván and his girlfriend love each other very much.' },
            { prompt: 'Al final de la entrevista, Nuria y el director ___ la mano.', options: ['dieron', 'se dieron', 'se dio'], answer: 1, why: 'Cada uno da la mano al otro: se dieron la mano, en plural.', en: 'At the end of the interview, Nuria and the director shook hands.' },
            { prompt: 'Nuria y el director se saludaron ___.', options: ['la una a la otra', 'el uno al otro', 'a sí mismos'], answer: 1, why: 'Un hombre y una mujer: el uno al otro (masculino para el grupo mixto).', en: 'Nuria and the director greeted each other.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde está el pronombre? Where is the pronoun?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla: ¿falta el pronombre, sobra, o está en otro sitio? Después aparece la corrección.', self: 'Lee cada frase y busca el error: ¿falta el pronombre, sobra o está en otro sitio? Toca para ver la corrección. (Missing, extra or in the wrong place?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Esta mañana he me levantado a las seis.', right: 'Esta mañana me he levantado a las seis.', why: 'El pronombre va antes de haber: me he levantado. Nada va entre he y el participio. (Pronoun before he.)' },
            { wrong: 'Esta noche voy a me acostar temprano.', right: 'Esta noche me voy a acostar temprano. / Voy a acostarme temprano.', why: 'Dos sitios posibles: antes de voy o pegado al infinitivo. Nunca en medio. (Never in the middle.)' },
            { wrong: 'Ayer me despierté a las ocho.', right: 'Ayer me desperté a las ocho.', why: 'El cambio e → ie es del presente (me despierto). En indefinido: me desperté. (No stem change here.)' },
            { wrong: 'Cuando vio la hora, Nuria preocupó.', right: 'Cuando vio la hora, Nuria se preocupó.', why: 'El cambio queda en Nuria: preocuparse necesita se. (The change is in Nuria: se.)' },
            { wrong: 'Antes de la entrevista me estaba muy nerviosa.', right: 'Antes de la entrevista estaba muy nerviosa.', why: 'Estar + adjetivo describe un estado y no lleva me. Para el cambio: me puse nerviosa. (Estar takes no me.)' },
            { wrong: 'Valeria se despertó a Nuria.', right: 'Valeria despertó a Nuria.', why: 'Nuria recibe la acción: el verbo va sin se. (Someone else receives it: no se.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Vamos a acostarse tarde.', 'Vamos nos a acostar tarde.', 'Vamos a acostarnos tarde.'], answer: 2, why: 'Nosotros: pronombre nos, pegado al infinitivo.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Nuria se estaba nerviosa en el metro.', 'Nuria se puso nerviosa en el metro.', 'Nuria puso nerviosa en el metro.'], answer: 1, why: 'El cambio: ponerse nerviosa, con se. Estar no lleva se.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta su mañana de hoy en tres frases (me desperté, me levanté, me vestí) y un cambio de esta semana (me puse nervioso/a, me aburrí, me enojé). Tú repites cada frase bien y tu alumno la repite.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Valeria vuelve a casa', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: '¿Qué tal la entrevista? · How was the interview?', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Valeria y tu alumno es Nuria. Después tu alumno toca cada palabra marcada y dice: ¿rutina, cambio u otra persona?', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di: ¿rutina, cambio u otra persona? (Routine, change or someone else?)' } },
          { kind: 'explore', title: 'Un día loco', setting: 'Jueves por la noche, en el departamento de Nuria y Valeria, en Ciudad de México. Valeria vuelve de un viaje de trabajo y pregunta por la entrevista de ayer. (Thursday night, in Nuria and Valeria’s apartment in Mexico City. Valeria is back from a work trip and asks about yesterday’s interview.)', lines: [
            { who: 'Valeria', text: '¡Ya llegué! ¿Qué tal la entrevista de ayer? No contestaste mis mensajes y [[me preocupé|violet]] un poco.', en: 'I’m back! How was yesterday’s interview? You didn’t answer my messages and I got a bit worried.' },
            { who: 'Nuria', text: 'Perdón, ¡fue un día loco! La noche anterior no podía dormir y [[me dormí|blue]] a la una. Y la alarma no sonó.', en: 'Sorry, it was a crazy day! The night before I couldn’t sleep and I fell asleep at one. And the alarm didn’t go off.' },
            { who: 'Valeria', text: '¡No! ¿Y a qué hora [[te despertaste|blue]]?', en: 'No! And what time did you wake up?' },
            { who: 'Nuria', text: 'A las ocho y diez, ¡y la entrevista era a las nueve y media! [[Me levanté|blue]] corriendo, [[me duché|blue]] en cinco minutos y [[me vestí|blue]] sin desayunar.', en: 'At ten past eight, and the interview was at half past nine! I jumped out of bed, showered in five minutes and got dressed without having breakfast.' },
            { who: 'Valeria', text: '¿Y llegaste a tiempo?', en: 'And did you get there on time?' },
            { who: 'Nuria', text: 'Casi no. En el metro, el tren paró diez minutos en un túnel y [[me puse muy nerviosa|violet]].', en: 'Almost not. On the metro, the train stopped for ten minutes in a tunnel and I got really nervous.' },
            { who: 'Valeria', text: '¡Ay, pobre! ¿Y qué hiciste?', en: 'Oh, poor you! And what did you do?' },
            { who: 'Nuria', text: 'Llamé al estudio y la recepcionista [[me tranquilizó|orange]]: «No se preocupe, la esperamos». Llegué a las nueve y media en punto.', en: 'I called the studio and the receptionist calmed me down: “Don’t worry, we’ll wait for you.” I arrived at half past nine on the dot.' },
            { who: 'Valeria', text: '¿Y la entrevista? ¿Qué tal?', en: 'And the interview? How did it go?' },
            { who: 'Nuria', text: 'Al principio [[estaba nerviosa|orange]], pero el señor Lozano fue muy simpático y poco a poco [[me relajé|violet]]. ¡Mañana tengo la segunda entrevista, a las ocho!', en: 'At first I was nervous, but Mr Lozano was very nice and little by little I relaxed. Tomorrow I have the second interview, at eight!' },
            { who: 'Valeria', text: '¡Felicidades! Entonces esta noche [[no te acuestes|blue]] tarde, ¿eh?', en: 'Congratulations! So tonight don’t go to bed late, OK?' },
            { who: 'Nuria', text: 'No, [[voy a acostarme|teal]] a las diez. Y si la alarma no suena, ¿[[me despiertas|orange]] a las seis?', en: 'No, I’m going to go to bed at ten. And if the alarm doesn’t go off, will you wake me up at six?' },
          ], notes: {
            'me preocupé': 'Preocuparse en indefinido: un **cambio** en Valeria. No tenía noticias y empezó a estar preocupada.',
            'me dormí': 'Dormirse = empezar a dormir (fall asleep), en un momento: a la una. Compara: «no podía dormir» (dormir, sin se).',
            'te despertaste': 'Valeria habla con Nuria (tú): **te** + despertaste. En indefinido, sin cambio de raíz.',
            'Me levanté': 'Rutina en pasado: me + levanté, antes del verbo. «Corriendo» = deprisa.',
            'me duché': 'Ducharse con yo, en indefinido: **me duché**. Otra acción de la rutina, en orden.',
            'me vestí': 'Vestirse con yo: **me vestí** (con ella sería se vistió).',
            'me puse muy nerviosa': 'Ponerse + adjetivo: el **momento del cambio**. «Muy» va antes del adjetivo. En la clase 061 ves más cambios con ponerse.',
            'me tranquilizó': '¡Cuidado! Aquí la recepcionista hace la acción y Nuria la recibe: no es reflexivo. Compara: «me tranquilicé» (yo misma).',
            'estaba nerviosa': 'Estar + adjetivo: el **estado**, la escena. Sin se. Compara: «me puse nerviosa» (el cambio).',
            'me relajé': 'Relajarse: otro cambio, ahora positivo. «Poco a poco» (little by little) muestra el proceso.',
            'no te acuestes': 'Orden negativa con tú (clase 059): el pronombre va **antes** del verbo. En afirmativa sería «acuéstate».',
            'voy a acostarme': 'Ir a + infinitivo: el pronombre va pegado al final. También es correcto «me voy a acostar».',
            'me despiertas': 'Nuria pide un favor: Valeria hace la acción (tú despiertas) y Nuria la recibe (me). No es reflexivo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué se despertó tarde Nuria?', options: ['Porque el metro paró en un túnel.', 'Porque se durmió muy tarde y la alarma no sonó.', 'Porque Valeria no la despertó.'], answer: 1, why: '«No podía dormir y me dormí a la una. Y la alarma no sonó».', en: 'Why did Nuria wake up late?' },
            { prompt: '¿Quién tranquilizó a Nuria?', options: ['La recepcionista del estudio.', 'Valeria, por teléfono.', 'El señor Lozano, en el metro.'], answer: 0, why: '«Llamé al estudio y la recepcionista me tranquilizó».', en: 'Who calmed Nuria down?' },
            { prompt: '¿Qué va a hacer Nuria esta noche?', options: ['Acostarse a las diez.', 'Despertar a Valeria a las seis.', 'Ir a la segunda entrevista.'], answer: 0, why: '«Voy a acostarme a las diez». La entrevista es mañana a las ocho.', en: 'What is Nuria going to do tonight?' },
          ] },
        ] },
        { title: '¿Rutina, cambio u otra persona? · Routine, change or someone else?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases del diálogo · Sentences from the dialogue', categories: [
            { id: 'rutina', label: 'RUTINA · me + verbo (routine)', tone: 'blue' },
            { id: 'cambio', label: 'CAMBIO · algo cambia en la persona (change)', tone: 'violet' },
            { id: 'otra', label: 'OTRA PERSONA · alguien hace la acción a Nuria (someone else)', tone: 'orange' },
          ], items: [
            { text: 'Me duché en cinco minutos.', answer: 'rutina', why: 'Una acción de la rutina, sobre ella misma: me duché.' },
            { text: 'Me puse muy nerviosa.', answer: 'cambio', why: 'Antes estaba tranquila; en el metro cambió: me puse nerviosa.' },
            { text: 'La recepcionista me tranquilizó.', answer: 'otra', why: 'La recepcionista hace la acción y Nuria la recibe.' },
            { text: 'Poco a poco me relajé.', answer: 'cambio', why: 'Un cambio en Nuria: de nerviosa a tranquila.' },
            { text: '¿Me despiertas a las seis?', answer: 'otra', why: 'Valeria despierta a Nuria: «me» recibe la acción de otra persona.' },
            { text: 'Me vestí sin desayunar.', answer: 'rutina', why: 'Rutina de la mañana, en pasado: me vestí.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y tú? ¿Cuándo fue la última vez que te despertaste tarde? ¿Qué hiciste?». Tu alumno responde con dos acciones de rutina y un cambio: «Me levanté corriendo… y me puse nervioso».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Antes, pegado o sin se? Before, attached or none?',
      steps: [
        { title: 'El viaje de Valeria · Valeria’s trip', blocks: [
          { kind: 'choice', items: [
            { context: 'Valeria cuenta su viaje de trabajo a Monterrey. (Valeria tells about her work trip.)', prompt: 'En el hotel, ___ a las seis y media.', options: ['me despierté', 'desperté', 'me desperté'], answer: 2, why: 'Yo + despertarse en indefinido: me desperté, sin cambio de raíz.', en: 'At the hotel, I woke up at half past six.' },
            { context: 'Valeria cuenta su viaje de trabajo a Monterrey.', prompt: 'El primer día, mi jefa y su equipo ___ muy tarde.', options: ['se acuestaron', 'nos acostamos', 'se acostaron'], answer: 2, why: 'Ellos + acostarse en indefinido: se acostaron.', en: 'On the first day, my boss and her team went to bed very late.' },
            { context: 'Valeria habla de su jefa de Monterrey.', prompt: 'Para la presentación, la jefa ___ con un traje azul.', options: ['se vestió', 'vistió', 'se vistió'], answer: 2, why: 'Ella + vestirse en indefinido: e → i, se vistió.', en: 'For the presentation, the boss got dressed in a blue suit.' },
            { context: 'Valeria recuerda la universidad.', prompt: 'Antes, en la universidad, yo siempre ___ tarde.', options: ['me acosté', 'acostaba', 'me acostaba'], answer: 2, why: 'Un hábito del pasado (antes, siempre): imperfecto, me acostaba.', en: 'Before, at university, I always went to bed late.' },
            { context: 'Valeria habla de mañana.', prompt: 'Mañana no trabajo, así que no tengo que ___ temprano.', options: ['levantarse', 'me levantar', 'levantarme'], answer: 2, why: 'Tener que + infinitivo, con yo: levantarme, pegado.', en: 'I’m not working tomorrow, so I don’t have to get up early.' },
          ] },
        ] },
        { title: '¿Con se o sin se? · With or without se?', blocks: [
          { kind: 'classify', title: '¿Qué falta en el hueco? · What goes in the gap?', categories: [
            { id: 'con', label: 'CON SE · la misma persona cambia o actúa (same person)', tone: 'violet' },
            { id: 'sin', label: 'SIN SE · otra persona recibe, o solo un estado (no se)', tone: 'orange' },
          ], items: [
            { text: 'La jefa de Valeria ___ (enojar) por el retraso del avión.', answer: 'con', why: 'El cambio queda en la jefa: se enojó.' },
            { text: 'El retraso del avión ___ (enojar) a la jefa.', answer: 'sin', why: 'El retraso causa el cambio en otra persona (a la jefa): enojó, sin se.' },
            { text: 'Valeria ___ (despertar) a su compañera a las siete.', answer: 'sin', why: 'La compañera recibe la acción: despertó a su compañera.' },
            { text: 'Iván ___ (aburrir) mucho en la reunión.', answer: 'con', why: 'El cambio queda en Iván: se aburrió.' },
            { text: 'A las nueve, Nuria ___ (estar) muy tranquila.', answer: 'sin', why: 'Estar + adjetivo es un estado: estaba, sin se.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Esta mañana he me levantado a las seis.', ok: false, options: ['Esta mañana he levantado me a las seis.', 'Esta mañana me he levantada a las seis.', 'Esta mañana me he levantado a las seis.'], answer: 2, why: 'El pronombre va antes de haber, y el participio no cambia: me he levantado.' },
            { sentence: 'Vamos a acostarnos temprano.', ok: true, why: 'Correcta: nosotros, pronombre nos pegado al infinitivo.' },
            { sentence: 'Iván estaba duchándose cuando sonó el teléfono.', ok: true, why: 'Correcta: pronombre pegado al gerundio, con tilde. También: «se estaba duchando».' },
            { sentence: 'Cuando vio la hora, Valeria preocupó mucho.', ok: false, options: ['Cuando vio la hora, Valeria se preocupó mucho.', 'Cuando vio la hora, Valeria se preocupa mucho.', 'Cuando vio la hora, Valeria preocupaba mucho.'], answer: 0, why: 'Un cambio en Valeria en un momento: se preocupó, con se.' },
            { sentence: 'Valeria se despertó a Nuria a las seis.', ok: false, options: ['Valeria se despertó Nuria a las seis.', 'Valeria despertó se a Nuria a las seis.', 'Valeria despertó a Nuria a las seis.'], answer: 2, why: 'Nuria recibe la acción: despertó a Nuria, sin se.' },
          ] },
        ] },
        { title: 'La noche antes · The night before', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Mensajes con Iván · Messages with Iván', lines: [
            { who: 'Iván', text: 'Nuria, mamá me contó lo de ayer. ¿A qué hora ___ por fin?', options: ['se levantó', 'te levantaste', 'te levantas'], answer: 1, why: 'Iván habla con su hermana (tú) de ayer: te levantaste.' },
            { who: 'Nuria', text: '___ a las ocho y diez. ¡Un desastre!', options: ['Me levanté', 'Levanté', 'Me levanto'], answer: 0, why: 'Yo, ayer: me levanté. Sin «me», falta qué levantas.' },
            { who: 'Iván', text: '¿Y mañana? ¿A qué hora ___?', options: ['vas a te levantar', 'vas a levantarte', 'vas a levantarse'], answer: 1, why: 'Tú: el pronombre pegado es te. Vas a levantarte.' },
            { who: 'Nuria', text: 'A las seis. Y esta noche ___ a las diez.', options: ['me voy a acostar', 'voy me a acostar', 'me voy a acuestar'], answer: 0, why: 'El pronombre antes de voy; el infinitivo no cambia: acostar.' },
            { who: 'Iván', text: 'Muy bien. Y si mañana estás nerviosa, respira y ___.', options: ['tranquilízese', 'tranquiliza te', 'tranquilízate'], answer: 2, why: 'Orden afirmativa con tú: tranquilízate, pegado y con tilde.' },
            { who: 'Nuria', text: '¡Gracias! Ayer ___ mucho en el metro, pero hoy estoy tranquila.', options: ['asusté', 'me asusto', 'me asusté'], answer: 2, why: 'Un cambio ayer, en Nuria: me asusté (indefinido, con me).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Nuria', 'se', 'puso', 'nerviosa', 'en', 'el', 'metro'], accept: ['Nuria se puso nerviosa en el metro', 'En el metro Nuria se puso nerviosa', 'En el metro se puso nerviosa Nuria'], en: 'Nuria got nervous on the metro.' },
            { tiles: ['Voy', 'a', 'acostarme', 'temprano', 'esta', 'noche'], accept: ['Voy a acostarme temprano esta noche', 'Esta noche voy a acostarme temprano'], en: 'I’m going to go to bed early tonight.' },
            { tiles: ['Me', 'estoy', 'vistiendo', 'para', 'la', 'entrevista'], accept: ['Me estoy vistiendo para la entrevista'], en: 'I’m getting dressed for the interview.' },
            { tiles: ['No', 'te', 'preocupes', 'por', 'la', 'alarma'], accept: ['No te preocupes por la alarma'], en: 'Don’t worry about the alarm.' },
          ] },
        ] },
        { title: 'Cambia la frase · Change the sentence', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase nueva · Write the new sentence', items: [
            { prompt: 'Me voy a acostar a las diez.', instruction: 'Escribe la misma frase con el pronombre pegado al infinitivo. (Attach the pronoun.)', accept: ['Voy a acostarme a las diez', 'A las diez voy a acostarme'] },
            { prompt: 'Valeria está vistiéndose.', instruction: 'Escribe la misma frase con el pronombre antes de «está». (Pronoun before está.)', accept: ['Valeria se está vistiendo'] },
            { prompt: 'Nuria se tranquiliza.', instruction: 'Escribe la frase en indefinido. Empieza con «Ayer». (Past, start with Ayer.)', accept: ['Ayer Nuria se tranquilizó', 'Ayer se tranquilizó Nuria'] },
            { prompt: 'Nuria, tienes que levantarte.', instruction: 'Escribe la orden afirmativa con tú: «Nuria» + el verbo con el pronombre pegado. (An instruction.)', accept: ['Nuria levántate', 'Levántate Nuria'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta una mañana real de esta semana en cuatro frases: dos de rutina (me desperté, me vestí), un cambio (me puse nervioso/a, me aburrí) y un plan (voy a acostarme…).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Iván', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El consejo de un hermano · A brother’s advice', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué llama Iván?). Segunda escucha: tu alumno levanta la mano con cada verbo con me, te o se. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Busca los verbos con me, te o se. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Iván', channel: 'MENSAJE DE VOZ · DE IVÁN PARA NURIA, JUEVES 21:40', src: '/audio/grammar-live/360.mp3',
            before: 'Iván, el hermano de Nuria, le manda un mensaje de voz la noche antes de la segunda entrevista. ¿Qué crees que le dice: una historia, un consejo, una broma…? (Iván sends Nuria a voice message the night before her second interview. What do you think he says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Iván cuenta su primera entrevista y le da consejos a Nuria para mañana.', 'Iván está enojado porque Nuria no contestó sus mensajes.', 'Iván pide ayuda a Nuria para una entrevista.'], answer: 0, why: 'Cuenta qué le pasó en su primera entrevista y dice: «mi consejo…».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué le pasó a Iván en su primera entrevista?', options: ['Llegó tarde.', 'Se durmió en el metro.', 'Dijo su nombre dos veces.'], answer: 2, why: '«Me puse tan nervioso que dije mi nombre dos veces».', en: 'What happened to Iván in his first interview?' },
              { prompt: '¿Cómo se tranquilizó Iván?', options: ['Salió a caminar.', 'La señora se rio, él también se rio y se tranquilizó.', 'Respiró y habló despacio.'], answer: 1, why: '«La señora se rio, yo también me reí y entonces me tranquilicé». Respirar es su consejo para mañana.', en: 'How did Iván calm down?' },
              { prompt: '¿Qué consejo le da para esta noche?', options: ['Acostarse temprano y no preocuparse por la alarma.', 'Poner dos alarmas.', 'Llamarlo a las seis.'], answer: 0, why: '«Esta noche acuéstate temprano y no te preocupes por la alarma».', en: 'What advice does he give her for tonight?' },
              { prompt: '¿Qué va a hacer Iván mañana a las seis y media?', options: ['Llamar a Nuria.', 'Ir a una entrevista.', 'Despertar a Valeria.'], answer: 0, why: '«Yo te llamo a las seis y media, por si acaso».', en: 'What is Iván going to do tomorrow at half past six?' },
            ],
            transcript: 'Hola, Nuria, soy Iván. Mamá me contó lo de ayer: la alarma no sonó y [[te despertaste|blue]] tarde. ¡Qué mala suerte! Pero llegaste a tiempo y mañana tienes la segunda entrevista. ¡Felicidades! Mira, en mi primera entrevista [[me puse|violet]] tan nervioso que dije mi nombre dos veces. La señora de la entrevista [[se rio|blue]], yo también [[me reí|blue]] y entonces [[me tranquilicé|violet]]. Al final me dieron el trabajo. Bueno, mi consejo: esta noche [[acuéstate|teal]] temprano y [[no te preocupes|blue]] por la alarma. Yo te llamo a las seis y media, por si acaso. Y mañana, si [[te pones|violet]] nerviosa, respira y habla despacio. ¡Mucha suerte, hermanita! Luego me cuentas.',
            reply: { teacher: 'Tú eres Iván. Tu alumno es Nuria y responde al mensaje con tres frases: qué va a hacer esta noche (voy a acostarme…), cómo se siente ahora y una pregunta para Iván.', self: 'Responde a Iván en voz alta como Nuria: qué vas a hacer esta noche (voy a acostarme…), cómo te sientes y una pregunta para él. (Answer as Nuria: tonight’s plan, how you feel, a question.)' } },
          { kind: 'tip', icon: '🔊', title: 'Se rio, me reí', text: 'Reírse (to laugh) también va con pronombre: me reí, se rio, nos reímos. Hoy se escribe «rio», sin tilde. Y fíjate en «Yo te llamo»: Iván hace la acción y Nuria la recibe, como «me dieron el trabajo» (they gave me the job).', en: 'Reírse (to laugh) also takes a pronoun: me reí, se rio, nos reímos. Today “rio” is written without an accent. And notice “Yo te llamo”: Iván does the action and Nuria receives it, like “me dieron el trabajo” (they gave me the job).' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu día importante', coach: 'Tu mañana, tus nervios, tu plan. Your morning, your nerves, your plan.',
      steps: [
        { title: 'Un día importante · An important day', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas como Valeria. Tu alumno habla de un día importante real: un examen, una entrevista, un primer día de trabajo, un viaje. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Piensa en un día importante real: un examen, una entrevista, un primer día de trabajo. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Think of a real important day and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Recuerdas un día importante: un examen, una entrevista, un primer día de trabajo? ¿Cómo empezó tu mañana? · Do you remember an important day? How did your morning start?', followUps: ['¿A qué hora te despertaste? (What time did you wake up?)', '¿Desayunaste o saliste corriendo? (Did you have breakfast or rush out?)'], phrases: ['Ese día [[me desperté|blue]] a las…', '[[Me levanté|blue]], [[me duché|blue]] y…', '[[Me vestí|blue]] con…'], hint: 'Rutina en pasado: el pronombre va antes del verbo. Me desperté, me vestí.', example: 'El día de mi examen final me desperté a las seis. Me levanté, me duché y me vestí con ropa cómoda. No desayuné mucho.', next: 'Ahora, los nervios.', teacher: 'Cuenta tú también tu mañana de un día importante en tres frases. Así tu alumno oye otra vez las formas de yo.' },
            { q: '¿Te pusiste nervioso o nerviosa ese día? ¿Cuándo? · Did you get nervous that day? When?', followUps: ['¿Qué pasó en ese momento? (What happened at that moment?)', '¿Cómo te tranquilizaste? (How did you calm down?)'], phrases: ['[[Me puse muy nervioso/a|violet]] cuando…', 'Al principio [[estaba nervioso/a|orange]], pero…', 'Después [[me tranquilicé|violet]] / [[me relajé|violet]].'], hint: 'El momento del cambio: se + indefinido (me puse, me tranquilicé). El estado: estaba, sin se.', example: 'Me puse muy nerviosa cuando empezó el examen. Al principio no podía pensar, pero después respiré y me tranquilicé.', next: 'Ahora, otros cambios.' },
            { q: '¿Cuándo fue la última vez que te aburriste o te enojaste? ¿Qué pasó? · When did you last get bored or angry? What happened?', followUps: ['¿Dónde estabas? (Where were you?)', '¿Te enojaste mucho o un poco? (Did you get very angry or a little?)'], phrases: ['La semana pasada [[me aburrí|violet]] en…', '[[Me enojé|violet]] / [[Me enfadé|violet]] porque…', 'Mi amigo también [[se enojó|violet]].'], hint: 'Enojarse (gran parte de América) y enfadarse (España) dicen lo mismo. Con yo: me enojé, me enfadé.', example: 'El sábado me aburrí mucho en una fiesta: no conocía a nadie. Y el lunes me enojé porque el autobús no llegó.', next: 'Ahora, cómo te tranquilizas.' },
            { q: '¿Qué haces para tranquilizarte antes de un día importante? · What do you do to calm down before an important day?', followUps: ['¿A qué hora te acuestas la noche antes? (What time do you go to bed the night before?)', '¿Te duermes rápido? (Do you fall asleep quickly?)'], phrases: ['Para [[tranquilizarme|teal]], …', 'La noche antes [[me acuesto|blue]] temprano.', 'Intento no [[ponerme|teal]] nervioso / nerviosa.'], hint: 'Después de para, intento (I try) o quiero, el pronombre va pegado al infinitivo: tranquilizarme, ponerme.', example: 'Para tranquilizarme, salgo a caminar media hora. La noche antes me acuesto temprano, pero a veces me duermo muy tarde.', next: 'Ahora, un plan.' },
            { q: '¿Tienes algo importante pronto? ¿Qué vas a hacer esa mañana? · Do you have something important soon? What are you going to do that morning?', followUps: ['¿A qué hora vas a levantarte? (What time are you going to get up?)', '¿Qué ropa vas a ponerte? (What clothes are you going to put on?)'], phrases: ['[[Voy a levantarme|teal]] / [[Me voy a levantar|blue]] a las…', '[[Voy a ponerme|teal]]…', 'No [[voy a preocuparme|teal]] por…'], hint: 'Con ir a + infinitivo: antes de voy o pegado al infinitivo. Nunca en medio.', example: 'El viernes tengo una presentación. Voy a levantarme a las seis y me voy a poner mi camisa azul. No voy a preocuparme: ya estoy preparado.', next: 'Ahora, tus consejos.' },
            { q: 'Tu amigo tiene una entrevista mañana y está muy nervioso. Dale tres consejos. · Your friend has an interview tomorrow and is very nervous. Give him three tips.', followUps: ['¿Qué no debe hacer esta noche? (What shouldn’t he do tonight?)', '¿Y mañana por la mañana? (And tomorrow morning?)'], phrases: ['[[Acuéstate|teal]] temprano.', '[[Tranquilízate|teal]] y respira.', '[[No te preocupes|blue]] / [[No te acuestes|blue]] tarde.'], hint: 'Orden afirmativa: el pronombre va pegado (acuéstate). Orden negativa: antes (no te preocupes).', example: 'Acuéstate temprano y no te preocupes. Mañana levántate con tiempo y desayuna bien. Si te pones nervioso, respira y habla despacio.', teacher: 'Tú eres el amigo nervioso y reaccionas: «¿Y si no me duermo?», «¿Y si me pongo rojo?». Tu alumno responde con otra orden.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿A qué hora te despertaste?», «¿Te pusiste nervioso?») y tú cuentas un día importante.', self: 'Ahora haz tú las preguntas en voz alta («¿A qué hora te despertaste?», «¿Te pusiste nervioso?») y responde como Nuria. (Now ask the questions and answer as Nuria.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Te cuento mi día', coach: 'Rutina, cambio, plan. Routine, change, plan.',
      steps: [
        { title: 'Un mensaje a un amigo · A message to a friend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada pronombre: ¿está antes del verbo, pegado o no hace falta? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada pronombre: ¿antes, pegado o sin se? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un día con nervios · A nervous day', situation: 'Escribes un mensaje a un amigo o una amiga que vive en otra ciudad. Le cuentas un día importante reciente (un examen, una entrevista, un primer día) y tu plan para la próxima vez. (You write to a friend in another city about a recent important day and your plan for next time.)', task: [
            'Saluda y di qué día importante tuviste. (Say hello and what the important day was.)',
            'Cuenta tu mañana con tres verbos con me en pasado: me desperté, me duché… (Your morning: three past verbs with me.)',
            'Cuenta un cambio de estado y cómo terminó: me puse nervioso/a, me tranquilicé… (A change of state.)',
            'Escribe un plan con el pronombre pegado al infinitivo: voy a acostarme… (A plan with an attached pronoun.)',
            'Haz una pregunta a tu amigo y despídete. (Ask a question and say goodbye.)',
          ], starters: ['¡Hola, …!', 'Te cuento mi día de…', 'Ese día me desperté a las…', 'En el autobús / en el metro me puse…', 'Al final me tranquilicé…', 'La próxima vez voy a…', '¿Y tú?', 'Un abrazo,'],
            words: ['me desperté', 'me levanté', 'me duché', 'me vestí', 'me dormí', 'me puse nervioso/a', 'me preocupé', 'me tranquilicé', 'me relajé', 'estaba', 'voy a acostarme', 'voy a levantarme'],
            model: '¡Hola, Iván! Te cuento mi día de ayer. Tenía el examen de inglés a las nueve. La noche anterior no podía dormir y [[me dormí|blue]] a las doce y media. Por la mañana [[me desperté|blue]] a las siete, [[me duché|blue]] y [[me vestí|blue]] rápido. En el autobús [[me puse|violet]] muy nervioso, porque había mucho tráfico. Llegué a las nueve menos cinco y, en el examen, poco a poco [[me tranquilicé|violet]]. ¡Creo que me fue bien! La próxima vez voy a [[acostarme|teal]] más temprano. ¿Y tú? ¿Cómo estás? Un abrazo, Pablo.',
            minWords: 70,
            checks: [
              { label: 'Rutina en pasado: me desperté, me vestí… (a past routine verb with its pronoun)', pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:despert|levant|duch|acost)(?:[eé]|aste|[oó]|amos|aron)(?!\\p{L})|(?<!\\p{L})(?:me|te|se|nos)\\s+(?:vest[ií]|vestiste|visti[oó]|vestimos|vistieron|dorm[ií]|dormiste|durmi[oó]|dormimos|durmieron)(?!\\p{L})', tip: 'Cuenta tu mañana en pasado: «Me desperté a las siete», «Me vestí rápido».' },
              { label: 'Un verbo de cambio con su pronombre: me puse, me tranquilicé… (a change verb)', pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:pus\\p{L}*|preocup\\p{L}*|enoj\\p{L}*|enfad\\p{L}*|tranquili\\p{L}*|relaj\\p{L}*|asust\\p{L}*|aburr\\p{L}*|cans\\p{L}*)(?!\\p{L})', tip: 'Cuenta un cambio: «Me puse muy nervioso», «Poco a poco me tranquilicé».' },
              { label: 'Un pronombre pegado al infinitivo: acostarme, levantarme… (an attached pronoun)', pattern: '(?<!\\p{L})\\p{L}{2,}(?:arme|erme|irme)(?!\\p{L})', tip: 'Escribe tu plan: «La próxima vez voy a acostarme más temprano».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:he|has|ha|hemos|han)\\s+(?:me|te|se|nos)\\s+\\p{L}+(?:ado|ido)(?!\\p{L})', why: 'Con el perfecto, el pronombre va antes de haber: **me he levantado**, no «he me levantado».' },
              { pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|van)\\s+a\\s+(?:me|te|se|nos)\\s+\\p{L}+r(?!\\p{L})', why: 'El pronombre no va en medio: **me voy a acostar** o **voy a acostarme**.' },
              { pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:estaba|estabas|estábamos|estaban)\\s+(?:muy\\s+)?nervios[oa]s?(?!\\p{L})', why: 'Estar + adjetivo no lleva pronombre: **estaba nervioso**. Para el cambio: **me puse nervioso**.' },
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
            { tone: 'blue', label: 'ANTES DEL VERBO CONJUGADO', formula: 'me desperté · me levantaba · me he levantado', example: 'Ayer me desperté tarde y me vestí sin desayunar.', caption: 'en todos los tiempos; también antes de haber', en: 'in every tense; also before haber' },
            { tone: 'teal', label: 'PEGADO AL FINAL', formula: 'voy a acostarme · estoy vistiéndome · levántate', example: 'Me voy a acostar = Voy a acostarme. No te levantes.', caption: 'infinitivo, gerundio, orden afirmativa; nunca en medio', en: 'infinitive, gerund, affirmative instruction; never in the middle' },
            { tone: 'violet', label: 'CAMBIO DE ESTADO', formula: 'me puse nerviosa · se preocupó · me tranquilicé', example: 'En el metro me puse nerviosa, pero después me tranquilicé.', caption: 'el momento en que algo cambia en la persona', en: 'the moment when something changes in the person' },
            { tone: 'orange', label: 'SIN SE', formula: 'despertó a Nuria · estaba nerviosa · dormí cinco horas', example: 'La recepcionista tranquilizó a Nuria.', caption: 'otra persona recibe la acción, o solo un estado', en: 'someone else receives the action, or just a state' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregunta primero: **¿la acción o el cambio queda en la misma persona?** Si sí, usa me, te, se, nos: antes del verbo conjugado (me desperté, me he levantado) o pegado al infinitivo, al gerundio o a la orden afirmativa (voy a acostarme, levántate). Si otra persona recibe la acción, o solo describes con estar, no hay se: despertó a Nuria, estaba nerviosa.', en: 'Ask first: does the action or the change stay in the same person? If yes, use me, te, se, nos: before the conjugated verb (me desperté, me he levantado) or attached to the infinitive, gerund or affirmative instruction (voy a acostarme, levántate). If someone else receives the action, or you only describe with estar, there is no se: despertó a Nuria, estaba nerviosa.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El lunes, Marina ___ tarde y perdió el autobús.', options: ['se despierta', 'se despertó', 'despertó'], answer: 1, why: 'Marina abre los ojos ella misma, el lunes (pasado): se despertó.', en: 'On Monday, Marina woke up late and missed the bus.' },
            { prompt: 'Ahora no puedo salir: ___.', options: ['me estoy duchando', 'estoy me duchando', 'me estoy duchándome'], answer: 0, why: 'Un solo pronombre, antes de estoy o pegado al gerundio (estoy duchándome). Nunca en medio, nunca dos.', en: 'I can’t go out now: I’m having a shower.' },
            { prompt: 'Cuando vio el precio, mi padre ___ un poco.', options: ['enojó', 'se enoja', 'se enojó'], answer: 2, why: 'Un cambio en tu padre, en un momento del pasado: se enojó.', en: 'When he saw the price, my father got a bit angry.' },
            { prompt: 'Mañana tenemos que ___ a las cinco.', options: ['levantarse', 'nos levantar', 'levantarnos'], answer: 2, why: 'Nosotros: el pronombre pegado es nos. Levantarnos.', en: 'Tomorrow we have to get up at five.' },
            { prompt: 'Anoche un ruido muy fuerte ___ a los niños.', options: ['asustó', 'se asustó', 'se asustaron'], answer: 0, why: 'El ruido causa el cambio en otras personas (a los niños): asustó, sin se.', en: 'Last night a very loud noise scared the children.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el primer día de Marina.', blocks: [
          { kind: 'lead', text: 'Marina, una amiga de Nuria, empezó ayer en un trabajo nuevo, en una oficina. Cuenta su primer día con las reglas de hoy.', en: 'Marina, a friend of Nuria’s, started a new job in an office yesterday. Tell her first day with today’s rules.' },
          { kind: 'rewrite', title: 'El primer día de Marina · Marina’s first day', items: [
            { prompt: 'Marina se pone nerviosa.', instruction: 'Escribe la frase en indefinido y empieza con «Ayer Marina». (Past, start with Ayer Marina.)', accept: ['Ayer Marina se puso nerviosa'] },
            { prompt: 'Una compañera tranquilizó a Marina.', instruction: 'Ahora cuenta el cambio en Marina, con se. Empieza con «Marina». (Tell the change in Marina.)', accept: ['Marina se tranquilizó'] },
            { prompt: 'Marina quiere acostarse temprano.', instruction: 'Escribe la misma frase con el pronombre antes de «quiere». (Pronoun before quiere.)', accept: ['Marina se quiere acostar temprano'] },
          ] },
        ] },
        { title: 'Ampliación · Con usted, en la entrevista', mascot: '/brand/mascot/speaking.webp', coach: 'Opcional: el mismo pronombre con usted.', blocks: [
          { kind: 'lead', text: 'Opcional. En la entrevista, la recepcionista y el señor Lozano hablan de **usted** con Nuria. Con usted, el pronombre es **se**: «No se preocupe», «Siéntese», «¿A qué hora se levanta usted?». Con ustedes, también: «Siéntense».', en: 'Optional. At the interview, the receptionist and Mr Lozano speak to Nuria with usted. With usted, the pronoun is se: “No se preocupe”, “Siéntese” (sit down), “¿A qué hora se levanta usted?”. With ustedes too: “Siéntense”.' },
          { kind: 'choice', title: 'Con usted · Formal', items: [
            { prompt: 'La recepcionista, por teléfono: «___, la esperamos».', options: ['No te preocupes', 'No se preocupa', 'No se preocupe'], answer: 2, why: 'Orden negativa con usted: se antes del verbo, preocupe. «No se preocupa» es presente: describe, no pide.', en: 'The receptionist, on the phone: “Don’t worry, we’ll wait for you.”' },
            { prompt: 'El señor Lozano: «Pase y ___, por favor».', options: ['siéntese', 'siéntate', 'se sienta'], answer: 0, why: 'Orden afirmativa con usted: se pegado al final, con tilde. «Siéntate» es de tú.', en: 'Mr Lozano: “Come in and sit down, please.”' },
            { prompt: 'El señor Lozano: «¿Usted ___ nerviosa cuando habla en público?»', options: ['se pone', 'te pones', 'pone'], answer: 0, why: 'Con usted, el pronombre es se: se pone. «Te pones» es de tú.', en: 'Mr Lozano: “Do you get nervous when you speak in public?”' },
            { prompt: 'El señor Lozano a dos candidatas: «Por favor, ___ aquí».', options: ['siéntense', 'siéntensen', 'siéntese'], answer: 0, why: 'Ustedes: siéntense, con se pegado y sin otra n al final. «Siéntese» es para una sola persona.', en: 'Mr Lozano to two candidates: “Please sit down here.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Tu alumno hace de entrevistador y saluda a un candidato con tres frases de usted: «Pase», «Siéntese», «No se preocupe».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 061 · Verbos de cambio básicos: ponerse, quedarse', text: 'Ya cuentas tu rutina en pasado y los cambios en una persona: «me puse nerviosa», «me tranquilicé». En la clase 061 miras de cerca dos verbos de cambio muy frecuentes: **ponerse** (se puso triste, se puso roja) y **quedarse** (se quedó callada, se quedó sorprendido). Es el paso natural: ya sabes dónde va el pronombre; ahora aprendes qué cambio expresa cada verbo.', en: 'You can now tell your routine in the past and the changes in a person: “me puse nerviosa”, “me tranquilicé”. In class 061 you look closely at two very common change verbs: ponerse (se puso triste, se puso roja) and quedarse (se quedó callada, se quedó sorprendido). It is the natural next step: you already know where the pronoun goes; now you learn which change each verb expresses.', href: '/gramatica/verbos-de-cambio-basicos-ponerse-quedarse', label: 'Ir a la clase 061' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuándo fue la última vez que te pusiste nervioso o nerviosa? ¿Qué hiciste para tranquilizarte?». Respuesta esperada: un cambio con se en indefinido y un infinitivo con el pronombre pegado. Tarea: escribir el mensaje de Escribir sobre un día real.' },
        ] },
      ],
    },
  ],
};
