import type { LiveLesson } from '../types';

/**
 * Lesson 395 · B1 · Infinitivo o que + subjuntivo: mismo sujeto / otro (course unit G095).
 * Consolidation of G089–G094: one decision for wishes (querer, esperar,
 * preferir, necesitar), emotions (me alegra, me molesta, tengo miedo de) and
 * valuations (es importante, es mejor). Same subject → infinitive (quiero ir,
 * espero aprobar, me alegra verte); different subject → que + present
 * subjunctive (quiero que vayas, me alegra que vengas); no specific person →
 * infinitive (es importante llegar pronto). Verbs of influence (permitir,
 * prohibir, dejar, aconsejar, recomendar) also take the infinitive with a
 * different subject named by me / te / nos (te permito salir = te permito que
 * salgas); querer, esperar, preferir and necesitar never do. Para + infinitive
 * vs para que + subjunctive appears only as a preview (G099). Typical errors:
 * *quiero que yo vaya, *quiero que ir, *te prohíbo de fumar. Decision routine:
 * who wants / feels? who does? Present subjunctive only; «me aconsejó
 * descansar» appears receptively.
 * Scene: in Guadalajara, the siblings Mariana and Rodrigo Salas organise a
 * surprise party for their parents' 35th wedding anniversary in their aunt
 * Beatriz's garden. Voice message: Mariana to her cousins (Mexican voice,
 * ustedes). Ampliación: obligar a, se prohíbe + infinitive, past main verbs.
 */
export const lesson: LiveLesson = {
  id: 395,
  level: 'B1',
  title: 'Infinitivo o que + subjuntivo: mismo sujeto / otro',
  subtitle: 'Decidir entre «quiero ir» y «quiero que vayas» preguntándote quién quiere y quién hace, también con emociones, valoraciones y permisos.',
  legend: [
    { tone: 'violet', label: 'INFINITIVO · mismo sujeto o nadie concreto · quiero ir, es importante ir (same person / no one specific)' },
    { tone: 'blue', label: 'OTRO SUJETO · verbo + que · quiero que, me alegra que (another person does it)' },
    { tone: 'orange', label: 'Subjuntivo · vayas, vengan (subjunctive)' },
    { tone: 'teal', label: 'INFLUENCIA + infinitivo · te permito salir (permission, ban, advice)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Quién quiere? ¿Quién hace?', coach: 'Dos preguntas deciden la forma. Two questions decide the form.',
      steps: [
        { title: 'Una fiesta sorpresa · A surprise party', blocks: [
          { kind: 'lead', text: 'En Guadalajara, **Mariana** y **Rodrigo Salas** preparan una fiesta sorpresa: sus papás cumplen 35 años de casados. Hay mucho que decidir: quién cocina, quién invita, qué permite la tía Beatriz en su jardín. En las clases 089 a 094 aprendiste muchos verbos con **que + subjuntivo**. Hoy juntas todo en una sola decisión: **¿infinitivo o que + subjuntivo?**', en: 'In Guadalajara, Mariana and Rodrigo Salas are planning a surprise party: their parents are celebrating 35 years of marriage. There is a lot to decide: who cooks, who invites people, what aunt Beatriz allows in her garden. In classes 089 to 094 you learned many verbs with que + subjunctive. Today you bring it all together in one decision: infinitive or que + subjunctive?' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Mariana. Tu alumno dice cuántas personas hay en cada una: quién quiere y quién cocina.', self: 'Lee las dos frases en voz alta. ¿Quién quiere? ¿Quién cocina? (Who wants? Who cooks?)' } },
          { kind: 'compare', title: 'Dos deseos de Mariana · Two of Mariana’s wishes', columns: [
            { tone: 'violet', label: 'MISMO SUJETO · infinitivo', sentence: '[[Quiero cocinar|violet]] el mole.', idea: 'Mariana quiere y Mariana cocina: una sola persona.', en: 'I want to cook the mole.' },
            { tone: 'blue', label: 'OTRO SUJETO · que + subjuntivo', sentence: '[[Quiero que|blue]] Rodrigo [[cocine|orange]] el mole.', idea: 'Mariana quiere, pero cocina Rodrigo: dos personas.', en: 'I want Rodrigo to cook the mole.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Quiero cocinar el mole». ¿Quién cocina?', options: ['No se sabe.', 'Mariana, la persona que quiere.', 'Rodrigo.'], answer: 1, why: 'Con infinitivo, la persona que cocina es la misma que quiere.', en: 'Who cooks?' },
            { prompt: '«Quiero que Rodrigo cocine el mole». ¿Cuántas personas hay?', options: ['Una: Rodrigo.', 'Una: Mariana.', 'Dos: Mariana quiere y Rodrigo cocina.'], answer: 2, why: 'Con «que» entra otra persona: Mariana quiere, Rodrigo cocina (subjuntivo).', en: 'How many people are there?' },
            { prompt: 'En inglés decimos «I want Rodrigo **to cook**». En español…', options: ['quiero que Rodrigo cocinar.', 'quiero que Rodrigo cocine.', 'quiero Rodrigo cocinar.'], answer: 1, why: 'Con otra persona, el español no usa infinitivo después de «querer»: que + subjuntivo.', en: 'In English: “I want Rodrigo to cook”. In Spanish…' },
          ] },
        ] },
        { title: 'Una regla para muchos verbos · One rule, many verbs', mascot: '/brand/mascot/studying.webp', coach: 'Deseo, emoción, valoración: la misma lógica.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'MISMO SUJETO / OTRO SUJETO', question: '¿La persona que quiere (o siente) es la misma que hace la acción?', en: 'Is the person who wants (or feels) the same person who does the action?', formula: ['mismo sujeto → verbo + infinitivo: Quiero ir.', 'otro sujeto → verbo + que + subjuntivo: Quiero que vayas.'],
            meaning: 'El primer verbo expresa un deseo, una preferencia, una necesidad o una emoción. Si la segunda acción la hace **la misma persona**, usamos el **infinitivo**. Si la hace **otra persona**, usamos **que + subjuntivo**: esa persona tiene su propio verbo conjugado.',
            examples: [
              { es: '[[Espero aprobar|violet]] el examen. / [[Espero que|blue]] [[apruebes|orange]] el examen.', en: 'I hope to pass the exam. / I hope you pass the exam.' },
              { es: '[[Prefiero quedarme|violet]] en casa. / [[Prefiero que|blue]] te [[quedes|orange]] en casa.', en: 'I’d rather stay at home. / I’d rather you stayed at home.' },
              { es: '[[Necesitamos descansar|violet]]. / [[Necesitamos que|blue]] los niños [[descansen|orange]].', en: 'We need to rest. / We need the children to rest.' },
            ],
            note: 'Con el infinitivo, el pronombre se une al final: «prefiero quedar**me**», «espero ver**te**». Con «que», va delante del verbo: «que **te** quedes».' },
          { kind: 'table', title: 'Las familias de las clases 089–094 · The verb families', head: ['Familia', 'Mismo sujeto → infinitivo', 'Otro sujeto → que + subjuntivo'], rows: [
            ['Deseo (089) · querer, esperar', 'Quiero [[ir|violet]] al concierto.', 'Quiero que [[vayas|orange]] al concierto.'],
            ['Preferencia · preferir', 'Prefiero [[pagar|violet]] yo.', 'Prefiero que [[pagues|orange]] tú.'],
            ['Necesidad · necesitar', 'Necesito [[hablar|violet]] con la tía.', 'Necesito que [[hables|orange]] con la tía.'],
            ['Emoción (092) · me alegra, me molesta', 'Me alegra [[verte|violet]].', 'Me alegra que [[vengas|orange]].'],
            ['Miedo · tener miedo de', 'Tengo miedo de [[llegar|violet]] tarde.', 'Tengo miedo de que [[llegues|orange]] tarde.'],
          ], note: 'Con **creer** y **pensar** (clase 093) es distinto: «No creo que pueda ir» es normal aunque la persona sea la misma. Hoy trabajamos los verbos de deseo, emoción y valoración.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rodrigo necesita ___ las fotos viejas. (Rodrigo las busca.)', options: ['que busca', 'buscar', 'que busque'], answer: 1, why: 'Rodrigo necesita y Rodrigo busca: mismo sujeto, infinitivo.', en: 'Rodrigo needs to look for the old photos.' },
            { prompt: 'Mariana necesita que Rodrigo ___ las fotos viejas.', options: ['busca', 'buscar', 'busque'], answer: 2, why: 'Mariana necesita, Rodrigo busca: otro sujeto, que + subjuntivo.', en: 'Mariana needs Rodrigo to look for the old photos.' },
            { prompt: 'Tengo miedo de que mamá ___ algo.', options: ['sospechar', 'sospeche', 'sospecha'], answer: 1, why: 'Yo tengo miedo, mamá sospecha: dos personas, subjuntivo.', en: 'I’m afraid Mum will suspect something.' },
          ] },
        ] },
        { title: 'Emociones y valoraciones · Feelings and judgements', mascot: '/brand/mascot/standing.webp', coach: 'Me alegra: ¿quién se alegra? Who feels it?', blocks: [
          { kind: 'lead', text: 'Con verbos como **alegrar**, **molestar** o **encantar**, la persona que siente está en el pronombre: **me**, **te**, **le**. Esa es la persona que comparas con la segunda acción. Con las valoraciones (**es importante**, **es mejor**), no hay persona en el primer verbo: si hablas en general, infinitivo; si hay una persona concreta, que + subjuntivo.', en: 'With verbs like alegrar, molestar or encantar, the person who feels is in the pronoun: me, te, le. That is the person you compare with the second action. With judgements (es importante, es mejor) there is no person in the first verb: speaking in general, use the infinitive; with a specific person, que + subjunctive.' },
          { kind: 'table', title: '¿Quién siente? ¿Quién hace? · Who feels? Who does it?', head: ['Frase', 'Siente / valora', 'Hace la acción'], rows: [
            ['**Me** alegra [[ver|violet]] a mis primos.', 'yo', 'yo → infinitivo'],
            ['**Me** alegra que mis primos [[vengan|orange]].', 'yo', 'mis primos → subjuntivo'],
            ['A papá **le** molesta [[esperar|violet]].', 'papá', 'papá → infinitivo'],
            ['A papá **le** molesta que los invitados [[lleguen|orange]] tarde.', 'papá', 'los invitados → subjuntivo'],
            ['Es importante [[llegar|violet]] puntual.', 'nadie concreto', 'todos, en general → infinitivo'],
            ['Es importante que [[lleguen|orange]] puntuales.', 'nadie concreto', 'ustedes → subjuntivo'],
          ], note: 'También existe **alegrarse de**: «Me alegro de verte» / «Me alegro de que vengas». La regla es la misma.' },
          { kind: 'tip', icon: '💡', title: '«Es mejor que yo…» sí es correcto · “Es mejor que yo…” is fine', text: 'Con «quiero» no dices «quiero que yo cocine», porque el que quiere eres tú. Pero con **es mejor**, **es importante** o **es necesario** el primer verbo no tiene persona, así que «**Es mejor que yo cocine**» es perfectamente correcto.', en: 'With “quiero” you don’t say “quiero que yo cocine”, because you are the one who wants. But “es mejor”, “es importante” and “es necesario” have no person, so “Es mejor que yo cocine” is perfectly correct.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A mamá le encanta ___. (Mamá baila.)', options: ['que baila', 'bailar', 'que baile'], answer: 1, why: 'Mamá siente y mamá baila: mismo sujeto, infinitivo.', en: 'Mum loves dancing.' },
            { prompt: 'Me molesta que mi hermano ___ con el celular en la mesa.', options: ['juega', 'jugar', 'juegue'], answer: 2, why: 'Yo siento la molestia, mi hermano juega: subjuntivo.', en: 'It annoys me that my brother plays on his phone at the table.' },
            { prompt: 'Es mejor ___ las invitaciones por mensaje. (Un consejo general.)', options: ['que mandas', 'de mandar', 'mandar'], answer: 2, why: 'Sin persona concreta: es mejor + infinitivo.', en: 'It’s better to send the invitations by text.' },
          ] },
        ] },
        { title: 'Permitir, prohibir, dejar · Allow, forbid, let', mascot: '/brand/mascot/kneeling.webp', coach: 'Algunos verbos aceptan las dos formas.', blocks: [
          { kind: 'compare', title: 'Otro sujeto, dos comportamientos · Another subject, two patterns', columns: [
            { tone: 'blue', label: 'QUERER · solo que + subjuntivo', sentence: 'La tía [[quiere que|blue]] [[pongamos|orange]] música.', idea: 'Con querer, esperar, preferir y necesitar, otra persona = siempre «que».', en: 'Our aunt wants us to play music.' },
            { tone: 'teal', label: 'DEJAR · infinitivo o que', sentence: 'La tía [[nos deja poner|teal]] música. = La tía nos deja que [[pongamos|orange]] música.', idea: 'El pronombre «nos» ya dice quién pone la música.', en: 'Our aunt lets us play music.' },
          ] },
          { kind: 'concept', tone: 'teal', label: 'VERBOS DE INFLUENCIA', question: '¿Qué verbos aceptan infinitivo con otro sujeto?', en: 'Which verbs take an infinitive with another subject?', formula: ['me · te · le · nos · les + permitir · prohibir · dejar · aconsejar · recomendar + infinitivo', 'Te permito salir. = Te permito que salgas.'],
            meaning: 'Con estos verbos alguien **permite**, **prohíbe** o **aconseja** una acción a otra persona. Esa persona aparece en el pronombre (te, le, nos), y por eso el infinitivo es claro. En la conversación, las dos formas son frecuentes.',
            examples: [
              { es: 'El médico [[le prohíbe comer|teal]] dulces a papá.', en: 'The doctor forbids Dad to eat sweets.' },
              { es: 'Mis papás no [[me dejan usar|teal]] su coche.', en: 'My parents don’t let me use their car.' },
              { es: 'Te [[permito salir|teal]] / Te permito que [[salgas|orange]], pero vuelve antes de las doce.', en: 'I’ll let you go out, but be back before twelve.' },
              { es: 'El médico [[me aconsejó descansar|teal]] una semana.', en: 'The doctor advised me to rest for a week. (past: the infinitive is the easy option)' },
            ],
            note: '**Ojo**: «Te quiero ver» es correcto, pero significa «yo quiero verte» (mismo sujeto). Con **querer**, **esperar**, **preferir**, **necesitar** y **decir** (orden, clase 090) no hay infinitivo con otra persona: quiero **que vengas**, te digo **que vengas**.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase NO es correcta? · Which one is NOT correct?', options: ['Te dejo salir esta noche.', 'Te quiero salir esta noche.', 'Te permito salir esta noche.'], answer: 1, why: 'Con «querer» y otra persona solo vale «quiero que salgas». «Permitir» y «dejar» aceptan el infinitivo.', en: 'Which one is NOT correct?' },
            { prompt: 'El salón ___ usar velas en las mesas.', options: ['nos prohíbe de', 'nos prohíbe que', 'nos prohíbe'], answer: 2, why: 'Prohibir + infinitivo, sin preposición. Con «que» haría falta subjuntivo: que usemos.', en: 'The venue forbids us to use candles on the tables.' },
            { prompt: '«El médico me aconsejó descansar». ¿Quién descansa?', options: ['Los dos.', 'Yo, el paciente.', 'El médico.'], answer: 1, why: '«Me» dice a quién aconseja el médico: esa persona descansa.', en: 'Who rests?' },
          ] },
        ] },
        { title: 'La rutina de decisión · The decision routine', mascot: '/brand/mascot/speaking.webp', coach: 'Tres preguntas, siempre en este orden.', blocks: [
          { kind: 'decide', title: 'Antes de escribir el segundo verbo · Before the second verb', steps: [
            { q: '¿Hay una persona concreta que hace la segunda acción? (Is a specific person doing it?)', yes: 'next', no: 'Infinitivo: «Es importante llegar puntual», «Es mejor mandar un mensaje».' },
            { q: '¿Es la misma persona que quiere, siente o valora? (The same person who wants or feels?)', yes: 'Infinitivo: «Quiero ir», «Me alegra verte», «Espero aprobar».', no: 'next' },
            { q: '¿El primer verbo es permitir, prohibir, dejar, aconsejar o recomendar, con te / le / nos? (A verb of influence?)', yes: 'Las dos formas: «Te permito salir» o «Te permito que salgas».', no: 'Que + subjuntivo: «Quiero que vayas», «Me alegra que vengas».' },
          ] },
          { kind: 'compare', title: 'Un avance: para / para que · A preview', columns: [
            { tone: 'violet', label: 'PARA + infinitivo', sentence: 'Rodrigo lleva las fotos [[para hacer|violet]] un video.', idea: 'Rodrigo lleva las fotos y Rodrigo hace el video.', en: 'Rodrigo brings the photos to make a video.' },
            { tone: 'blue', label: 'PARA QUE + subjuntivo', sentence: 'Rodrigo lleva las fotos [[para que|blue]] todos las [[vean|orange]].', idea: 'Rodrigo las lleva, pero las ven los invitados.', en: 'Rodrigo brings the photos so that everyone can see them.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La misma pregunta con «para» · Same question with “para”', text: 'La finalidad sigue la misma lógica: misma persona, **para + infinitivo**; otra persona, **para que + subjuntivo**. Hoy solo lo reconoces: lo trabajas a fondo en la **clase 099**.', en: 'Purpose follows the same logic: same person, para + infinitive; another person, para que + subjunctive. Today you only recognise it: you work on it in class 099.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mariana quiere ___ temprano. (Mariana llega.)', options: ['que llega', 'llegar', 'que llegue'], answer: 1, why: 'Una sola persona: infinitivo.', en: 'Mariana wants to arrive early.' },
            { prompt: 'La tía nos deja ___ las sillas de su casa.', options: ['de usar', 'que usamos', 'usar'], answer: 2, why: 'Dejar + infinitivo: «nos» dice quién las usa. Con «que» sería «que usemos».', en: 'Our aunt lets us use the chairs from her house.' },
            { prompt: '«Mariana manda un audio para que todos sepan la hora». ¿Quién sabe la hora?', options: ['Los primos, los invitados.', 'Solo Mariana.', 'Nadie todavía.'], answer: 0, why: 'Mariana manda el audio y los primos saben la hora: otra persona, por eso «para que» + subjuntivo (avance de la clase 099).', en: '“Mariana sends a voice message so that everyone knows the time.” Who knows the time?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Una persona o dos? One person or two?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error. Tu alumno dice cuántas personas hay y la dice bien. Después aparece la corrección.', self: 'Lee cada frase, cuenta las personas y dila bien en voz alta. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Quiero que yo vaya a la fiesta.', right: 'Quiero ir a la fiesta.', why: 'Yo quiero y yo voy: mismo sujeto, infinitivo. (Same person → infinitive.)' },
            { wrong: 'Quiero que ir a la fiesta.', right: 'Quiero ir a la fiesta. / Quiero que vayas a la fiesta.', why: '«Que» necesita un verbo conjugado; el infinitivo va sin «que». (No “que” before an infinitive.)' },
            { wrong: 'Quiero tú vengas a la fiesta.', right: 'Quiero que vengas a la fiesta.', why: 'Con otra persona, «que» es obligatorio. (Que is not optional.)' },
            { wrong: 'Me alegra que estoy aquí con ustedes.', right: 'Me alegra estar aquí con ustedes.', why: 'Yo me alegro y yo estoy: infinitivo. (Same person.)' },
            { wrong: 'Espero que me llamas mañana.', right: 'Espero que me llames mañana.', why: 'Otra persona después de «espero que»: subjuntivo. (Subjunctive after espero que.)' },
            { wrong: 'El médico te prohíbe de fumar.', right: 'El médico te prohíbe fumar.', why: 'Prohibir y permitir van sin «de». (No preposition.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta? · Which one is correct?', options: ['Preferimos celebrar en casa.', 'Preferimos que nosotros celebremos en casa.', 'Preferimos que celebrar en casa.'], answer: 0, why: 'Nosotros preferimos y nosotros celebramos: infinitivo.', en: 'We’d rather celebrate at home.' },
            { prompt: '¿Qué frase es correcta? · Which one is correct?', options: ['Necesito que me ayudas con las mesas.', 'Necesito que me ayudes con las mesas.', 'Necesito tú ayudarme con las mesas.'], answer: 1, why: 'Yo necesito, tú ayudas: que + subjuntivo (ayudes).', en: 'I need you to help me with the tables.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice un deseo para sí mismo (quiero + infinitivo), un deseo para otra persona (quiero que…) y una regla de su casa con «me dejan» o «no me dejan».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Una videollamada entre hermanos', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Mariana y Rodrigo · Mariana and Rodrigo', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Mariana. Después tu alumno toca cada expresión marcada y dice si hay una persona o dos.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿una persona o dos?' } },
          { kind: 'explore', title: 'Planes para el sábado 14', setting: 'Domingo en la noche. Mariana, en Guadalajara, habla por videollamada con su hermano Rodrigo, que vive en Monterrey. Falta un mes para el aniversario. (Sunday evening. Mariana, in Guadalajara, video-calls her brother Rodrigo, who lives in Monterrey. The anniversary is a month away.)', lines: [
            { who: 'Rodrigo', text: 'Mari, falta un mes para el aniversario de papá y mamá. ¿Qué tienes en mente?', en: 'Mari, it’s a month until Mum and Dad’s anniversary. What do you have in mind?' },
            { who: 'Mariana', text: 'Una fiesta sorpresa. [[Quiero organizarla|violet]] en el jardín de la tía Beatriz, y [[quiero que|blue]] tú [[hables|orange]] con ella esta semana.', en: 'A surprise party. I want to organise it in aunt Beatriz’s garden, and I want you to talk to her this week.' },
            { who: 'Rodrigo', text: 'Va, mañana la llamo. Pero yo no cocino, ¿eh? [[Prefiero que|blue]] [[contratemos|orange]] a alguien.', en: 'OK, I’ll call her tomorrow. But I’m not cooking, all right? I’d rather we hired someone.' },
            { who: 'Mariana', text: 'De acuerdo. Yo [[espero encontrar|violet]] un mariachi a buen precio. Y sobre todo, [[espero que|blue]] mamá no [[sospeche|orange]] nada.', en: 'Fine. I hope to find a mariachi band at a good price. And above all, I hope Mum doesn’t suspect anything.' },
            { who: 'Rodrigo', text: 'Difícil: mamá se entera de todo. Oye, la tía no [[nos deja poner|teal]] música después de las once, por los vecinos.', en: 'Tricky: Mum finds out about everything. Listen, our aunt doesn’t let us play music after eleven, because of the neighbours.' },
            { who: 'Mariana', text: 'Entonces empezamos temprano. Otra cosa: el médico le [[prohíbe comer|teal]] dulces a papá, así que el pastel va a ser sin azúcar.', en: 'Then we start early. Another thing: the doctor won’t let Dad eat sweets, so the cake will be sugar-free.' },
            { who: 'Rodrigo', text: '¿Sin azúcar? Pobre papá… Bueno, [[me alegra que|blue]] por fin se [[cuide|orange]].', en: 'Sugar-free? Poor Dad… Well, I’m glad he’s finally taking care of himself.' },
            { who: 'Mariana', text: 'A mí también. ¿Y cuándo llegas?', en: 'Me too. And when are you arriving?' },
            { who: 'Rodrigo', text: 'El viernes en la noche. Y llevo las fotos viejas de la familia [[para hacer|violet]] un video.', en: 'Friday night. And I’m bringing the old family photos to make a video.' },
            { who: 'Mariana', text: '¡Qué buena idea! [[Me alegra poder verte|violet]] más días. Y lleva también las fotos impresas [[para que|blue]] los invitados las [[vean|orange]].', en: 'What a good idea! I’m glad I’ll be able to see you for more days. And bring the printed photos too, so the guests can see them.' },
            { who: 'Rodrigo', text: 'Hecho. Una última cosa: [[es importante que|blue]] nadie les [[diga|orange]] nada. ¿Les escribes a los primos?', en: 'Done. One last thing: it’s important that nobody tells them anything. Will you write to the cousins?' },
            { who: 'Mariana', text: 'Sí, mañana les mando un audio. Y les voy a [[pedir que|blue]] [[lleguen|orange]] a las siete en punto.', en: 'Yes, tomorrow I’ll send them a voice message. And I’m going to ask them to arrive at seven sharp.' },
          ], notes: {
            'Quiero organizarla': '**Mismo sujeto**: Mariana quiere y Mariana organiza. Infinitivo con el pronombre unido: organizar + la (la fiesta).',
            'quiero que': '**Otro sujeto**: Mariana quiere, pero habla Rodrigo. Por eso «que» + subjuntivo.',
            hables: 'Subjuntivo de **hablar** para tú. «Tú» aparece porque Mariana hace un contraste: yo organizo, tú hablas con la tía.',
            'Prefiero que': 'Rodrigo prefiere y «nosotros» contratamos: otra persona (un grupo), «que» + subjuntivo.',
            contratemos: 'Subjuntivo de **contratar** para nosotros: contratemos.',
            'espero encontrar': '**Mismo sujeto**: Mariana espera y Mariana encuentra. Infinitivo.',
            'espero que': '**Otro sujeto**: Mariana espera, mamá sospecha. «Que» + subjuntivo.',
            sospeche: 'Subjuntivo de **sospechar** (to suspect) para ella.',
            'nos deja poner': '**Dejar + infinitivo** con otro sujeto: la tía deja, nosotros ponemos. También: «nos deja que pongamos».',
            'prohíbe comer': '**Prohibir + infinitivo**: el médico prohíbe, papá come (le… a papá). Sin «de». Ojo al acento: prohíbe.',
            'me alegra que': 'Emoción con **otro sujeto**: yo me alegro, papá se cuida. «Que» + subjuntivo.',
            cuide: 'Subjuntivo de **cuidarse**: que se cuide. El pronombre «se» va delante.',
            'para hacer': '**Para + infinitivo**: Rodrigo lleva las fotos y Rodrigo hace el video (avance de la clase 099).',
            'Me alegra poder verte': '**Mismo sujeto**: Mariana se alegra y Mariana ve a Rodrigo. Infinitivo: poder + ver + te.',
            'para que': '**Para que + subjuntivo**: Rodrigo lleva las fotos, los invitados las ven. Otra persona (avance de la clase 099).',
            vean: 'Subjuntivo de **ver**: vea, veas, vean.',
            'es importante que': 'Valoración con un sujeto propio («nadie»): «que» + subjuntivo. Sin sujeto, en general, sería «es importante no decir nada».',
            diga: 'Subjuntivo de **decir**: digo → dig- → diga.',
            'pedir que': '**Pedir que** + subjuntivo (clase 090): Mariana pide, los primos llegan. En la conversación, con pedir lo normal es «que».',
            lleguen: 'Subjuntivo de **llegar**: g → gu delante de e (llegue, lleguen).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué prefiere Rodrigo para la comida?', options: ['Cocinar él solo.', 'Que cocine Mariana.', 'Contratar a alguien.'], answer: 2, why: '«Yo no cocino… Prefiero que contratemos a alguien».', en: 'What does Rodrigo prefer for the food?' },
            { prompt: '¿Por qué el pastel va a ser sin azúcar?', options: ['Porque el médico le prohíbe los dulces a papá.', 'Porque a mamá no le gusta el azúcar.', 'Porque es más barato.'], answer: 0, why: '«El médico le prohíbe comer dulces a papá».', en: 'Why will the cake be sugar-free?' },
            { prompt: '«La tía no nos deja poner música después de las once». ¿Quién pone la música?', options: ['La familia y los invitados.', 'La tía Beatriz.', 'Los vecinos.'], answer: 0, why: '«Nos» dice quién pone la música: nosotros. La tía solo da (o no da) permiso.', en: 'Who plays the music?' },
          ] },
        ] },
        { title: 'Las notas de Mariana · Mariana’s notes', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Después de la llamada, Mariana escribe notas en su celular. Clasifica cada nota: ¿una persona (infinitivo), otra persona (que + subjuntivo) o un verbo de influencia con infinitivo?', en: 'After the call, Mariana writes notes on her phone. Sort each note: one person (infinitive), another person (que + subjunctive) or a verb of influence with the infinitive?' },
          { kind: 'classify', title: 'Clasifica las notas · Sort the notes', categories: [
            { id: 'mismo', label: 'MISMO SUJETO · infinitivo', tone: 'violet' },
            { id: 'otro', label: 'OTRO SUJETO · que + subjuntivo', tone: 'blue' },
            { id: 'influencia', label: 'INFLUENCIA · otro sujeto + infinitivo', tone: 'teal' },
          ], items: [
            { text: 'Quiero mandar las invitaciones el lunes.', answer: 'mismo', why: 'Yo quiero, yo mando: infinitivo.' },
            { text: 'Necesito que Rodrigo hable con la tía.', answer: 'otro', why: 'Yo necesito, Rodrigo habla: que + subjuntivo.' },
            { text: 'La tía no nos deja poner música después de las once.', answer: 'influencia', why: 'La tía deja, nosotros ponemos: dejar + infinitivo.' },
            { text: 'Espero que mamá no sospeche nada.', answer: 'otro', why: 'Yo espero, mamá sospecha: subjuntivo.' },
            { text: 'El médico le prohíbe comer dulces a papá.', answer: 'influencia', why: 'El médico prohíbe, papá come: prohibir + infinitivo.' },
            { text: 'Me alegra poder ver a Rodrigo más días.', answer: 'mismo', why: 'Yo me alegro, yo veo: infinitivo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil para cada nota: «¿Quién quiere o siente? ¿Quién hace?». Si es la misma persona, infinitivo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Una persona o dos? One person or two?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Mariana reparte tareas. (Mariana hands out jobs.)', prompt: '«Rodrigo, ___ tú las invitaciones».', options: ['quiero que diseñes', 'quiero diseñar', 'quiero que diseñas'], answer: 0, why: 'Mariana quiere, Rodrigo diseña: que + subjuntivo (diseñes).', en: '“Rodrigo, I want you to design the invitations.”' },
            { context: 'Rodrigo habla de su viaje. (Rodrigo talks about his trip.)', prompt: '«Yo ___ el viernes temprano, antes del tráfico».', options: ['quiero que salgo', 'quiero salir', 'quiero que salga'], answer: 1, why: 'Rodrigo quiere y Rodrigo sale: infinitivo.', en: '“I want to leave early on Friday, before the traffic.”' },
            { context: 'Los gustos de papá. (Dad’s tastes.)', prompt: 'A papá le molesta que los invitados ___ tarde.', options: ['lleguen', 'llegan', 'llegar'], answer: 0, why: 'Papá siente la molestia, los invitados llegan: subjuntivo.', en: 'It annoys Dad when guests arrive late.' },
            { context: 'Las reglas del jardín. (The garden rules.)', prompt: 'La tía no nos permite ___ el coche en el jardín.', options: ['estacionar', 'de estacionar', 'que estacionamos'], answer: 0, why: 'Permitir + infinitivo, sin «de». Con «que» sería «que estacionemos».', en: 'Our aunt doesn’t let us park the car in the garden.' },
            { context: 'Mariana organiza las compras. (Mariana plans the shopping.)', prompt: '«Rodrigo, es mejor que tú ___ el pastel: la pastelería está cerca de tu hotel».', options: ['compres', 'compras', 'comprar'], answer: 0, why: 'Valoración con una persona concreta (tú): que + subjuntivo.', en: '“Rodrigo, it’s better if you buy the cake: the bakery is near your hotel.”' },
            { context: 'La tía Beatriz habla de la fiesta. (Aunt Beatriz talks about the party.)', prompt: '«Tengo miedo de ___ demasiado y no poder bailar».', options: ['que coma', 'que como', 'comer'], answer: 2, why: 'La tía tiene miedo y la tía come: mismo sujeto, infinitivo.', en: '“I’m afraid of eating too much and not being able to dance.”' },
          ] },
        ] },
        { title: '¿Qué forma acepta? · Which form works?', blocks: [
          { kind: 'lead', text: 'Mira el primer verbo y quién hace la segunda acción. ¿La frase va con infinitivo, con que + subjuntivo o acepta las dos formas?', en: 'Look at the first verb and at who does the second action. Does the sentence take the infinitive, que + subjunctive, or both?' },
          { kind: 'classify', title: 'Infinitivo, que o las dos · Infinitive, que or both', categories: [
            { id: 'inf', label: 'Solo infinitivo', tone: 'violet' },
            { id: 'que', label: 'Solo que + subjuntivo', tone: 'blue' },
            { id: 'dos', label: 'Las dos formas', tone: 'teal' },
          ], items: [
            { text: 'Mariana espera… (Mariana termina la lista hoy.)', answer: 'inf', why: 'La misma persona: «Mariana espera terminar la lista hoy».' },
            { text: 'Mariana espera… (Los primos llegan a tiempo.)', answer: 'que', why: 'Otra persona con esperar: «espera que los primos lleguen a tiempo».' },
            { text: 'La tía nos permite… (Nosotros usamos su jardín.)', answer: 'dos', why: 'Permitir: «nos permite usar su jardín» o «nos permite que usemos su jardín».' },
            { text: 'Rodrigo prefiere… (Mariana compra las flores.)', answer: 'que', why: 'Preferir no acepta infinitivo con otra persona: «prefiere que Mariana compre las flores».' },
            { text: 'A papá le da vergüenza (is embarrassed)… (Papá baila en público.)', answer: 'inf', why: 'Papá siente y papá baila: «le da vergüenza bailar en público».' },
            { text: 'El salón nos prohíbe… (Nosotros encendemos velas.)', answer: 'dos', why: 'Prohibir: «nos prohíbe encender velas» o «nos prohíbe que encendamos velas».' },
          ] },
        ] },
        { title: 'Corrige las frases · Correct the sentences', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Quiero que yo lleve el pastel.', ok: false, options: ['Quiero que llevo el pastel.', 'Quiero de llevar el pastel.', 'Quiero llevar el pastel.'], answer: 2, why: 'Yo quiero, yo llevo: mismo sujeto, infinitivo.' },
            { sentence: 'Mariana espera que los mariachis lleguen a tiempo.', ok: true, why: 'Correcta: Mariana espera, los mariachis llegan; que + subjuntivo.' },
            { sentence: 'Mis papás quieren que celebrar en casa.', ok: false, options: ['Mis papás quieren que celebran en casa.', 'Mis papás quieren de celebrar en casa.', 'Mis papás quieren celebrar en casa.'], answer: 2, why: 'Los papás quieren y celebran: infinitivo, sin «que».' },
            { sentence: 'Te quiero ayudar con las sillas.', ok: true, why: 'Correcta: yo quiero y yo te ayudo. «Te» es a quién ayudo, no quién ayuda. = «Quiero ayudarte».' },
            { sentence: 'La tía nos prohíbe de usar velas.', ok: false, options: ['La tía nos prohíbe que usamos velas.', 'La tía nos prohíbe usar velas.', 'La tía nos prohíbe que usar velas.'], answer: 1, why: 'Prohibir + infinitivo sin «de» (o «que usemos»).' },
          ] },
        ] },
        { title: 'Rodrigo llama a la tía · Rodrigo calls his aunt', blocks: [
          { kind: 'chat-fill', title: 'Una llamada a la tía Beatriz · A call to aunt Beatriz', lines: [
            { who: 'Rodrigo', text: 'Tía, ¿cómo estás? Te llamo por la fiesta de mis papás.' },
            { who: 'Beatriz', text: '¡Ay, Rodrigo! Mariana ya me contó todo. Yo ___ ayudar en lo que necesiten.', options: ['quiero que', 'quiero de', 'quiero'], answer: 2, why: 'La tía quiere y la tía ayuda: quiero + infinitivo.' },
            { who: 'Rodrigo', text: 'Gracias, tía. Entonces, ¿nos ___ usar el jardín el sábado?', options: ['dejes', 'dejar', 'dejas'], answer: 2, why: 'Una pregunta normal en presente de indicativo: ¿nos dejas usar…? (dejar + infinitivo).' },
            { who: 'Beatriz', text: 'Claro que sí. Pero ___ que terminen la música a las once, por los vecinos.', options: ['necesite', 'necesito', 'necesito de'], answer: 1, why: 'La tía necesita, ustedes terminan: necesito que + subjuntivo.' },
            { who: 'Rodrigo', text: 'Sin problema. Y mamá no sabe nada: espero que no se ___ antes del sábado.', options: ['entere', 'entera', 'enterar'], answer: 0, why: 'Rodrigo espera, mamá se entera: subjuntivo (se entere).' },
            { who: 'Beatriz', text: 'Tranquilo, no digo nada. Me alegra mucho ___ la fiesta en mi casa.', options: ['hacer', 'que hago', 'que haga'], answer: 0, why: 'La tía se alegra y la tía hace la fiesta en su casa: infinitivo.' },
            { who: 'Rodrigo', text: '¡Gracias, tía! Nos vemos el sábado.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['mamá', 'Espero', 'nada.', 'sospeche', 'que', 'no'], accept: ['Espero que mamá no sospeche nada.'], en: 'I hope Mum doesn’t suspect anything.' },
            { tiles: ['deja', 'su', 'La', 'usar', 'nos', 'jardín.', 'tía'], accept: ['La tía nos deja usar su jardín.'], en: 'Our aunt lets us use her garden.' },
            { tiles: ['vengas', 'Me', 'desde', 'que', 'alegra', 'Monterrey.'], accept: ['Me alegra que vengas desde Monterrey.'], en: 'I’m glad you’re coming from Monterrey.' },
          ] },
        ] },
        { title: 'Une las ideas · Join the ideas', blocks: [
          { kind: 'rewrite', title: 'Una frase con infinitivo o con que · One sentence', items: [
            { prompt: 'Quiero algo: tú hablas con la tía hoy.', instruction: 'Una frase que empieza con «Quiero…». (One sentence starting with “Quiero…”.)', accept: ['Quiero que hables con la tía hoy.', 'Quiero que tú hables con la tía hoy.'] },
            { prompt: 'Espero algo: yo termino la lista hoy.', instruction: 'Una frase que empieza con «Espero…».', accept: ['Espero terminar la lista hoy.'] },
            { prompt: 'Me alegra algo: los primos vienen a la fiesta.', instruction: 'Una frase que empieza con «Me alegra…».', accept: ['Me alegra que los primos vengan a la fiesta.'] },
            { prompt: 'Prefiero algo: nosotros contratamos a un cocinero.', instruction: 'Una frase que empieza con «Prefiero…».', accept: ['Prefiero que contratemos a un cocinero.', 'Prefiero que nosotros contratemos a un cocinero.'] },
            { prompt: 'La tía nos permite que pongamos música hasta las once.', instruction: 'Di lo mismo con infinitivo. (Say the same with the infinitive.)', accept: ['La tía nos permite poner música hasta las once.', 'La tía nos permite poner música hasta las 11.'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio para los primos', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Mariana manda un audio · Mariana sends a voice message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye «que» después de querer, preferir o es importante. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. ¿Cuántas veces oyes «que» + subjuntivo? (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio para los primos', channel: 'MENSAJE DE VOZ · MARIANA, AL GRUPO DE LOS PRIMOS', src: '/audio/grammar-live/395.mp3',
            before: 'Mariana manda un audio al grupo de sus primos. ¿Qué información crees que necesitan los primos para la fiesta sorpresa? (Mariana sends a voice message to her cousins’ group. What information do you think they need for the surprise party?)',
            gist: { prompt: '¿Para qué manda Mariana el audio?', options: ['Para pedirles dinero para el mariachi.', 'Para invitar a los primos y explicarles cómo va a ser la fiesta.', 'Para cancelar la fiesta del sábado.'], answer: 1, why: 'Los invita a la fiesta sorpresa y explica la hora, las reglas y qué traer.', en: 'Why does Mariana send the message?' },
            details: [
              { prompt: '¿A qué hora tienen que llegar los primos?', options: ['A las siete.', 'A las siete y media.', 'A las seis.'], answer: 0, why: '«La fiesta es… a las siete. Es muy importante que lleguen puntuales».', en: 'What time do the cousins have to arrive?' },
              { prompt: '«Yo espero tener todo listo a las seis». ¿Quién va a preparar todo?', options: ['Mariana.', 'Los primos.', 'La tía Beatriz.'], answer: 0, why: 'Espero + infinitivo: la misma persona que espera (Mariana) tiene todo listo.', en: 'Who is going to get everything ready?' },
              { prompt: '¿Por qué van a empezar temprano?', options: ['Porque el jardín cierra a las once.', 'Porque la tía no los deja poner música después de las once.', 'Porque papá se cansa pronto.'], answer: 1, why: '«La tía no nos deja poner música después de las once, así que vamos a empezar temprano».', en: 'Why are they starting early?' },
              { prompt: '¿Qué prefiere Mariana que traigan?', options: ['Un pastel de chocolate.', 'Bebidas para todos.', 'Fruta o algo salado.'], answer: 2, why: '«Prefiero que traigan fruta o algo salado», porque papá no puede comer azúcar.', en: 'What would Mariana like them to bring?' },
            ],
            transcript: '¡Hola, primos! Soy Mariana. Les mando este audio porque el sábado 14 papá y mamá cumplen treinta y cinco años de casados, y Rodrigo y yo [[queremos hacerles|violet]] una fiesta sorpresa. Claro, [[queremos que|blue]] todos ustedes [[estén|orange]] ahí. La fiesta es en el jardín de la tía Beatriz, a las siete. [[Es muy importante que|blue]] [[lleguen|orange]] puntuales, porque mis papás llegan a las siete y media. Yo [[espero tener|violet]] todo listo a las seis. La tía no [[nos deja poner|teal]] música después de las once, así que vamos a empezar temprano. Ah, y a papá el médico le [[prohíbe comer|teal]] azúcar: si van a traer algo, [[prefiero que|blue]] [[traigan|orange]] fruta o algo salado. Y por favor, que nadie les diga nada. [[Me alegra mucho organizar|violet]] esto con ustedes, pero si mamá se entera antes, ¡me muero! Un abrazo.',
            reply: { teacher: 'Tú eres Mariana. Tu alumno responde como uno de los primos: confirma que va, dice qué espera hacer él mismo y qué quiere que haga Mariana.', self: 'Responde en voz alta como uno de los primos: «¡Claro que voy! Espero llegar… Quiero que me digas…». (Answer aloud as one of the cousins.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu celebración', coach: 'Habla de lo que haces tú y de lo que hacen otros.',
      steps: [
        { title: 'Organizas una celebración · You organise a celebration', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas como un familiar curioso. Tu alumno organiza una celebración para una persona importante en su vida. Si mezcla las formas, tú preguntas «¿quién lo hace?» y tu alumno corrige.', self: 'Lee la pregunta y responde en voz alta. Antes de cada verbo, piensa: ¿lo hago yo o lo hace otra persona? (Before each verb: do I do it, or someone else?)' } },
          { kind: 'talk', cards: [
            { q: 'Vas a organizar una celebración para una persona especial. ¿Qué quieres hacer tú? · You are organising a celebration for someone special. What do you want to do yourself?', followUps: ['¿Dónde prefieres celebrarlo? (Where would you rather hold it?)', '¿Qué esperas tener listo antes? (What do you hope to have ready?)'], phrases: ['[[Quiero organizar|violet]]…', '[[Prefiero hacerlo|violet]] en…', '[[Espero tener|violet]]…'], hint: 'Tú quieres y tú haces: infinitivo.', example: 'Quiero organizar una cena para mi hermana. Prefiero hacerla en mi casa y espero tener todo listo a las ocho.', next: 'Ahora, las otras personas.' },
            { q: '¿Qué quieres o necesitas que hagan los demás? · What do you want or need the others to do?', followUps: ['¿Quién te ayuda con la comida? (Who helps with the food?)', '¿Qué prefieres que no hagan? (What would you rather they didn’t do?)'], phrases: ['[[Quiero que|blue]] mi hermano [[traiga|orange]]…', '[[Necesito que|blue]] alguien me [[ayude|orange]]…', '[[Prefiero que|blue]] los invitados no…'], hint: 'Otra persona hace la acción: que + subjuntivo.', example: 'Quiero que mi hermano traiga la música y necesito que alguien me ayude con las sillas. Prefiero que los invitados no traigan regalos caros.', next: 'Ahora, tus deseos.' },
            { q: '¿Qué esperas para ti y qué esperas para la persona festejada? · What do you hope for yourself and for the guest of honour?', followUps: ['¿Y si algo sale mal? (And if something goes wrong?)', '¿Qué deseo tienes para el futuro de esa persona? (What do you wish for that person’s future?)'], phrases: ['[[Espero poder|violet]]…', '[[Espero que|blue]] le [[guste|orange]]…', 'Ojalá que no [[llueva|orange]].'], hint: 'Un deseo para ti (espero + infinitivo) y otro para otra persona (espero que…).', example: 'Espero poder sorprenderla de verdad. Espero que le guste la comida y, sobre todo, ojalá que no llueva.', next: 'Ahora, tus emociones.' },
            { q: '¿Qué te alegra y qué te preocupa de esa celebración? · What makes you happy and what worries you about it?', followUps: ['¿Qué te molesta en las fiestas? (What annoys you at parties?)', '¿Tienes miedo de algo? (Are you afraid of anything?)'], phrases: ['[[Me alegra ver|violet]] a…', '[[Me preocupa que|blue]] mi tío [[llegue|orange]]…', 'Tengo miedo de [[olvidar|violet]]…'], hint: 'Si sientes tú y lo haces tú: infinitivo. Si sientes tú y lo hace otra persona: que + subjuntivo.', example: 'Me alegra ver a toda la familia junta. Pero me preocupa que mi tío llegue tarde, como siempre, y tengo miedo de olvidar el pastel.', next: 'Ahora, las reglas del lugar.' },
            { q: '¿Qué te dejan hacer y qué no en ese lugar (tu casa, un salón, tu edificio)? · What are you allowed to do there, and what not?', followUps: ['¿Te permiten poner música? (Can you play music?)', '¿Qué está prohibido? (What is forbidden?)'], phrases: ['No [[nos dejan poner|teal]] música después de…', 'El dueño [[nos permite usar|teal]]…', 'En mi edificio [[se prohíbe fumar|violet]]…'], hint: 'Dejar, permitir, prohibir + infinitivo. Sin «de».', example: 'En mi edificio no nos dejan poner música después de las diez, pero el dueño nos permite usar la terraza. Además, se prohíbe fumar en todo el edificio.', next: 'Para terminar, para qué haces cada cosa.' },
            { q: '¿Para qué preparas cada cosa? · Why are you preparing each thing?', followUps: ['¿Para qué mandas un mensaje al grupo? (Why do you text the group?)', '¿Para qué compras flores? (Why do you buy flowers?)'], phrases: ['Compro flores [[para decorar|violet]]…', 'Mando un mensaje [[para que|blue]] todos [[sepan|orange]]…'], hint: 'Para + infinitivo: lo haces tú. Para que + subjuntivo: lo hace otra persona (clase 099).', example: 'Compro flores para decorar la mesa. Mando un mensaje al grupo para que todos sepan la hora y la dirección.', teacher: 'Este «para que» es un avance: si aparece un error, tú repites la frase bien y siguen. Se trabaja a fondo en la clase 099.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú organizas una celebración y tu alumno hace las preguntas. Después tu alumno cuenta tus planes: «Quieres organizar…», «Quieres que tu hermana…».', self: 'Ahora piensa en una fiesta de otra persona (un amigo, tu jefa). Di tres frases sobre sus planes: «Mi amigo quiere…», «Quiere que yo…». (Talk about someone else’s plans.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje a la tía Beatriz', coach: 'Una persona o dos: decide en cada frase.',
      steps: [
        { title: 'Gracias y planes · Thanks and plans', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo después de querer, esperar, necesitar o me alegra: ¿una persona o dos? Después tu alumno lee el mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». En cada deseo o emoción, pregúntate: ¿lo hago yo o lo hace otra persona? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje a la tía · A message to the aunt', situation: 'Eres Mariana o Rodrigo. Escribe a la tía Beatriz para darle las gracias por el jardín y organizar el sábado. También puedes escribir a un familiar sobre una celebración tuya. (You are Mariana or Rodrigo. Write to aunt Beatriz to thank her for the garden and organise Saturday. Or write to a relative about a celebration of your own.)', task: [
            'Da las gracias y di qué quieres o esperas hacer tú: infinitivo. (Thank her and say what you want or hope to do yourself.)',
            'Di dos cosas que quieres, prefieres o necesitas que hagan otras personas: que + subjuntivo. (Two things you want others to do.)',
            'Expresa una emoción con «me alegra»: + infinitivo o + que. (Express a feeling with “me alegra”.)',
            'Menciona una regla con dejar, permitir o prohibir + infinitivo. (Mention a rule with dejar, permitir or prohibir.)',
          ], starters: ['Querida tía Beatriz:', 'Muchas gracias por…', 'Yo espero llegar…', 'Necesito que me…', 'Rodrigo prefiere que…', 'Me alegra mucho…', 'Ya sé que los vecinos no te dejan…', 'Un abrazo muy fuerte,'],
            words: ['quiero que', 'necesito que', 'prefiero que', 'espero', 'me alegra', 'nos deja', 'nos permite', 'ayudes', 'elijas', 'contratemos', 'podamos', 'lleguen'],
            model: 'Querida tía Beatriz: Muchas gracias por prestarnos tu jardín para la fiesta. Me alegra mucho celebrar el aniversario de mis papás en tu casa. Yo espero llegar el sábado a las cuatro para decorar todo. Necesito que me ayudes con las mesas y quiero que tú elijas las flores, porque tienes muy buen gusto. Rodrigo prefiere que contratemos a un cocinero, así que tú no vas a cocinar nada. Ya sé que los vecinos no te dejan poner música después de las once: vamos a terminar a tiempo, te lo prometo. Me alegra que podamos estar todos juntos. Un abrazo muy fuerte, Mariana',
            minWords: 80,
            checks: [
              { label: 'Un deseo tuyo con infinitivo (quiero ir, espero llegar…)', pattern: '(?<!\\p{L})(?:quiero|queremos|espero|esperamos|prefiero|preferimos|necesito|necesitamos)\\s+(?:no\\s+)?\\p{L}+(?:ar|er|ir)(?:me|te|le|la|lo|nos|les|las|los)?(?!\\p{L})', tip: 'Escribe, por ejemplo: «Yo espero llegar el sábado a las cuatro».' },
              { label: 'Un deseo para otra persona con «que» (quiero que, necesito que…)', pattern: '(?<!\\p{L})(?:quiero|queremos|espero|esperamos|prefiero|prefiere|preferimos|necesito|necesitamos)\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Necesito que me ayudes con las mesas».' },
              { label: 'Una emoción con «me alegra» o «me alegro»', pattern: '(?<!\\p{L})(?:me|nos)\\s+(?:alegra|alegro|alegramos)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Me alegra que podamos estar todos juntos».' },
              { label: 'Una regla con dejar, permitir o prohibir', pattern: '(?<!\\p{L})(?:deja|dejan|permite|permiten|prohíbe|prohíben|prohibe|prohiben)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Los vecinos no te dejan poner música después de las once».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:quiero|espero|prefiero|necesito)\\s+que\\s+yo(?!\\p{L})', why: 'Si la persona que quiere es la misma que hace la acción, usa el infinitivo: «quiero llevar», no «quiero que yo lleve».' },
              { pattern: '(?<!\\p{L})(?:quiero|queremos|espero|esperamos|prefiero|preferimos|necesito|necesitamos)\\s+que\\s+(?:ir|venir|llegar|traer|hacer|tener|poner|estar|ayudar|cocinar|llevar|comprar|decorar|celebrar)(?!\\p{L})', why: 'Después de «que» va un verbo conjugado en subjuntivo (que vengas, que traigan). Sin «que», infinitivo: «quiero llegar».' },
              { pattern: '(?<!\\p{L})(?:prohíb|prohib|permit)\\p{L}*\\s+de\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: 'Permitir y prohibir van sin «de»: «nos permite usar», «te prohíbe fumar».' },
              { pattern: '(?<!\\p{L})me\\s+alegra\\s+que\\s+(?:estoy|puedo|tengo|voy)(?!\\p{L})', why: 'Si tú te alegras y tú haces la acción, usa el infinitivo: «me alegra estar aquí», «me alegra poder ir».' },
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
            { tone: 'violet', label: 'MISMO SUJETO', formula: 'querer · esperar · preferir · necesitar · me alegra… + infinitivo', example: 'Espero llegar temprano.', caption: 'yo espero, yo llego', en: 'Same person: infinitive' },
            { tone: 'blue', label: 'OTRO SUJETO', formula: 'querer · esperar · me alegra… + que + subjuntivo', example: 'Espero que llegues temprano.', caption: 'yo espero, tú llegas', en: 'Another person: que + subjunctive' },
            { tone: 'violet', label: 'NADIE CONCRETO', formula: 'es importante · es mejor · se prohíbe + infinitivo', example: 'Es importante llegar temprano.', caption: 'en general, para todos', en: 'No specific person: infinitive' },
            { tone: 'teal', label: 'INFLUENCIA', formula: 'me · te · nos + permitir · prohibir · dejar · aconsejar + infinitivo', example: 'La tía nos deja poner música.', caption: 'también: que pongamos', en: 'Verbs of influence: infinitive or que + subjunctive' },
            { tone: 'blue', label: 'AVANCE · PARA', formula: 'para + infinitivo / para que + subjuntivo', example: 'Llevo fotos para hacer un video / para que las vean.', caption: 'misma lógica (clase 099)', en: 'Preview: purpose follows the same logic' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: **¿quién quiere o siente? ¿quién hace?** La misma persona: **infinitivo**. Otra persona: **que + subjuntivo**. Y con **permitir, prohibir, dejar, aconsejar**, el pronombre (te, nos) ya señala a la otra persona: el infinitivo también vale.', en: 'Ask yourself: who wants or feels? Who does it? Same person: infinitive. Another person: que + subjunctive. And with permitir, prohibir, dejar, aconsejar, the pronoun (te, nos) already points to the other person, so the infinitive works too.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Necesito ___ con alguien de la oficina. (Yo hablo.)', options: ['que hablo', 'hablar', 'que hable'], answer: 1, why: 'Yo necesito, yo hablo: infinitivo.' },
            { prompt: 'Mis amigos quieren que yo ___ en la boda.', options: ['canto', 'cantar', 'cante'], answer: 2, why: 'Mis amigos quieren, yo canto: otra persona, subjuntivo. Aquí «que yo» es correcto.' },
            { prompt: 'Me preocupa que mi abuela ___ sola.', options: ['vivir', 'viva', 'vive'], answer: 1, why: 'Yo me preocupo, mi abuela vive: subjuntivo.' },
            { prompt: 'En esta biblioteca no te dejan ___ por teléfono.', options: ['hablar', 'que hablas', 'de hablar'], answer: 0, why: 'Dejar + infinitivo, sin «de». Con «que» sería «que hables».' },
            { prompt: 'Es importante que tu hermano ___ más agua.', options: ['bebe', 'beber', 'beba'], answer: 2, why: 'Valoración con una persona concreta: que + subjuntivo.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Después de la fiesta, Rodrigo vuelve a Monterrey. Vive en un departamento con su compañero Iván, y el dueño tiene reglas. Rodrigo se lo cuenta a Mariana.', en: 'After the party, Rodrigo goes back to Monterrey. He shares a flat with Iván, and the landlord has rules. Rodrigo tells Mariana about them.' },
          { kind: 'rewrite', title: 'Rodrigo cuenta su vida · Rodrigo talks about his life', items: [
            { prompt: 'El dueño: «No fumen en el departamento».', instruction: 'Con infinitivo: «El dueño nos prohíbe…». (Use the infinitive.)', accept: ['El dueño nos prohíbe fumar en el departamento.'] },
            { prompt: 'Iván a Rodrigo: «Quiero que limpies la cocina los lunes».', instruction: 'Cuéntalo: «Iván quiere que yo…». (Report it.)', accept: ['Iván quiere que yo limpie la cocina los lunes.'] },
            { prompt: 'Rodrigo: «Quiero algo: yo pinto mi cuarto de azul».', instruction: 'Una frase con «Quiero…».', accept: ['Quiero pintar mi cuarto de azul.'] },
            { prompt: 'El dueño nos permite que tengamos un gato.', instruction: 'Di lo mismo con infinitivo.', accept: ['El dueño nos permite tener un gato.'] },
          ] },
        ] },
        { title: 'Ampliación: más verbos y registros · Extension: more verbs and registers', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: casos más difíciles.', blocks: [
          { kind: 'lead', text: 'Tres casos más. **Obligar** lleva **a**: «te obligan **a** llevar casco» / «**a que** lleves casco». En carteles y normas, sin persona, **se prohíbe / se permite + infinitivo**. Y con un primer verbo en pasado, el infinitivo es la opción fácil: «me aconsejó **descansar**» (la forma con «que» usa otro tiempo del subjuntivo, que verás en B2).', en: 'Three more cases. “Obligar” takes “a”: te obligan a llevar casco / a que lleves casco. On signs and rules, with no person, se prohíbe / se permite + infinitive. And with a first verb in the past, the infinitive is the easy option: “me aconsejó descansar” (the “que” form uses another subjunctive tense, which you will see at B2).' },
          { kind: 'choice', title: 'Casos difíciles · Harder cases', items: [
            { context: 'Una obra en construcción. (A building site.)', prompt: '«Aquí te obligan ___ casco».', options: ['llevar', 'de llevar', 'a llevar'], answer: 2, why: 'Obligar + a + infinitivo (o «a que lleves»).', en: '“Here they make you wear a helmet.”' },
            { context: 'Un cartel en un hotel. (A hotel sign.)', prompt: '«Se prohíbe ___ en las habitaciones».', options: ['fumar', 'que fume', 'de fumar'], answer: 0, why: 'Norma general, sin persona: se prohíbe + infinitivo.', en: '“Smoking is forbidden in the rooms.”' },
            { context: 'Rodrigo habla de su visita al médico. (Rodrigo talks about his visit to the doctor.)', prompt: '«El médico me aconsejó ___ unos días».', options: ['descansar', 'de descansar', 'que descanso'], answer: 0, why: 'Aconsejar + infinitivo: «me» dice quién descansa. Sin «de»; y nunca indicativo después de «aconsejar que».', en: '“The doctor advised me to rest for a few days.”' },
            { context: 'La tía Beatriz, después de la fiesta. (Aunt Beatriz after the party.)', prompt: '«Me alegro de ___ a toda la familia junta».', options: ['que vea', 'ver', 'que veo'], answer: 1, why: 'Yo me alegro, yo veo: alegrarse de + infinitivo.', en: '“I’m happy to see the whole family together.”' },
            { context: 'Mariana organiza la limpieza. (Mariana organises the clean-up.)', prompt: '«Necesito que alguien me ___ con las sillas».', options: ['ayude', 'ayuda', 'ayudar'], answer: 0, why: 'Necesitar no acepta infinitivo con otra persona: necesito que alguien me ayude.', en: '“I need someone to help me with the chairs.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno escribe tres normas para su casa o su trabajo con «Se prohíbe…», «Nos dejan…» y «Quiero que todos…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 096 · Imperativo y peticiones indirectas con subjuntivo', text: 'Ya decides entre **infinitivo** y **que + subjuntivo** según quién hace la acción. El paso natural: pasar una petición de una persona a otra, como un mensajero: «**Dile que venga**», «**Pídeles que esperen aquí**». Siempre hay otra persona, así que el subjuntivo aparece en cada frase.', en: 'You can now choose between the infinitive and que + subjunctive depending on who does the action. The natural next step: passing a request from one person to another, like a messenger: “Tell him to come”, “Ask them to wait here”. There is always another person, so the subjunctive appears in every sentence.', href: '/gramatica/imperativo-y-peticiones-indirectas-con-subjuntivo', label: 'Ir a la clase 096' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué decimos “quiero ir” pero “quiero que vayas”?». Respuesta esperada: en la primera hay una persona; en la segunda, dos. Tarea: seis frases sobre la próxima celebración de la familia, tres con infinitivo y tres con que + subjuntivo.' },
        ] },
      ],
    },
  ],
};
