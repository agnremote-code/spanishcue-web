import type { LiveLesson } from '../types';

/**
 * Lesson 333 · A1 · Pronombres tónicos tras preposición (course unit G033).
 * One scene runs through the class: Carmen coordinates a small team in an
 * office and organizes the team dinner on Friday. She hands out invitations,
 * tasks and the Secret Santa («amigo invisible») papers to Diego, Nuria, Pablo
 * and Rosa, the new colleague.
 * Content: preposition + pronoun: para mí, para ti (only yo → mí and tú → ti
 * change), para él / ella / usted / nosotros / ustedes / ellos (same as the
 * subject); the special forms conmigo and contigo. Contrast: mí (pronoun) /
 * mi (possessive, class 009), él / el, yo-tú as subject / mí-ti after a
 * preposition. «A mí me encanta» reuses class 032. «Entre tú y yo» appears
 * only as a marked exception in the closing tip.
 * Everyone speaks with tú / ustedes; the voice message is Carmen (Mexico).
 */
export const lesson: LiveLesson = {
  id: 333,
  level: 'A1',
  title: 'Pronombres tónicos tras preposición',
  subtitle: 'Repartir invitaciones, tareas y regalos con para mí, para ti, con ella, conmigo y contigo, sin decir «para yo».',
  legend: [
    { tone: 'blue', label: 'MÍ · TI: yo y tú cambian después de preposición (me, you)' },
    { tone: 'violet', label: 'CONMIGO · CONTIGO: formas especiales con «con» (with me, with you)' },
    { tone: 'teal', label: 'ÉL · ELLA · NOSOTROS · USTEDES…: igual que el sujeto (same as the subject)' },
    { tone: 'orange', label: 'MI · TU + nombre: posesivo, no es el pronombre (my, your)' },
  ],
  optionNotes: {
    yo: '«Yo» es el sujeto: yo traigo el pastel. Después de para, sin, de o a, la forma es **mí**.',
    tú: '«Tú» es el sujeto: tú traes la música. Después de una preposición, la forma es **ti**.',
    tí: '«Ti» nunca lleva tilde. Solo **mí** lleva tilde, para no confundirlo con «mi» (posesivo).',
    mi: '«Mi» sin tilde es posesivo y va con un nombre: mi mesa, mi regalo. Solo, después de una preposición: **mí**.',
    me: '«Me» va antes del verbo (me levanto, me gusta). Después de una preposición: **mí**.',
    te: '«Te» va antes del verbo (te levantas, te gusta). Después de una preposición: **ti**.',
    nos: '«Nos» va antes del verbo (nos levantamos, nos gusta). Después de una preposición: **nosotros / nosotras**.',
    el: '«El» sin tilde es el artículo: el regalo. El pronombre (he, him) lleva tilde: **para él**.',
    lo: '«Lo» va antes de un verbo (lo ves en la clase 042). Después de una preposición: **él**.',
    la: '«La» no va después de una preposición. Para una mujer: **para ella**.',
    su: '«Su» es posesivo y necesita un nombre: su invitación. Solo, después de una preposición: **él / ella**.',
    'con mí': '«Con mí» no existe. Con + yo es una sola palabra: **conmigo**.',
    'con yo': '«Con yo» no existe. Con + yo es una sola palabra: **conmigo**.',
    'con ti': '«Con ti» no existe. Con + tú es una sola palabra: **contigo**.',
    'con tú': '«Con tú» no existe. Con + tú es una sola palabra: **contigo**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Esto es para ti', coach: 'Para mí, para ti. For me, for you.',
      steps: [
        { title: 'Carmen reparte sobres · Carmen hands out envelopes', blocks: [
          { kind: 'lead', text: 'Carmen coordina un equipo pequeño en una oficina. El viernes hay una **cena del equipo**. Hoy Carmen tiene una caja con invitaciones, tareas y los papeles del amigo invisible, y lo reparte todo.', en: 'Carmen runs a small team in an office. On Friday there is a team dinner. Today Carmen has a box with invitations, tasks and the Secret Santa papers, and she hands everything out.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Carmen y tu alumno repite. Después, tu alumno dice para quién es cada sobre.', self: 'Lee en voz alta las tres frases. ¿Para quién es cada sobre? (Who is each envelope for?)' } },
          { kind: 'compare', title: 'Tres sobres · Three envelopes', columns: [
            { tone: 'blue', label: 'ME · Carmen', sentence: '«Este sobre es [[para mí|blue]]».', idea: 'Carmen habla de ella misma.', en: '“This envelope is for me.”' },
            { tone: 'blue', label: 'YOU · Diego', sentence: '«Diego, este es [[para ti|blue]]».', idea: 'Carmen habla con Diego.', en: '“Diego, this one is for you.”' },
            { tone: 'teal', label: 'HER · Nuria', sentence: '«Y este es [[para ella|teal]]».', idea: 'Carmen habla de Nuria.', en: '“And this one is for her.”' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Esto es para mí» significa…', options: ['This is for you.', 'This is mine.', 'This is for me.'], answer: 2, why: 'Para mí = for me.', en: '“Esto es para mí” means…' },
            { prompt: 'Carmen da un sobre a Diego: «Diego, esto es para ___».', options: ['ella', 'mí', 'ti'], answer: 2, why: 'Carmen habla con Diego (tú): **para ti**.', en: 'Carmen gives Diego an envelope: “Diego, this is for you.”' },
            { prompt: 'Después de «para», ¿qué forma usamos en lugar de «yo»?', options: ['mí', 'yo', 'me'], answer: 0, why: 'Yo → **mí** después de una preposición: para mí.', en: 'After “para”, which form do we use instead of “yo”?' },
          ] },
        ] },
        { title: 'Preposición + pronombre · Preposition + pronoun', mascot: '/brand/mascot/studying.webp', coach: 'Solo cambian yo y tú. Only yo and tú change.', blocks: [
          { kind: 'lead', text: 'Después de una **preposición** (para, sin, de, a, en, con…) usamos estos pronombres. La regla es simple: **yo → mí** y **tú → ti**. Los otros pronombres son iguales que el sujeto: él, ella, usted, nosotros, ustedes, ellos.', en: 'After a preposition (para, sin, de, a, en, con…) we use these pronouns. The rule is simple: yo → mí and tú → ti. The other pronouns are the same as the subject: él, ella, usted, nosotros, ustedes, ellos.' },
          { kind: 'table', title: 'Sujeto y pronombre tras preposición · Subject and pronoun after a preposition', head: ['Sujeto', 'Tras preposición', 'Ejemplo', 'English'], rows: [
            ['yo', '[[mí|blue]]', 'El sobre es [[para mí|blue]].', 'for me'],
            ['tú', '[[ti|blue]]', 'No hay fiesta [[sin ti|blue]].', 'without you'],
            ['él · ella · usted', '[[él · ella · usted|teal]]', 'La invitación es [[para él|teal]].', 'for him'],
            ['nosotros · nosotras', '[[nosotros · nosotras|teal]]', 'Rosa cena [[con nosotros|teal]].', 'with us'],
            ['vosotros · vosotras (España)', '[[vosotros · vosotras|teal]]', 'El pastel es [[para vosotros|teal]].', 'for you (all)'],
            ['ellos · ellas · ustedes', '[[ellos · ellas · ustedes|teal]]', 'Las luces son [[para ustedes|teal]].', 'for you (all)'],
          ], note: '**Mí** lleva tilde; **ti** no lleva tilde. **Él** (he, him) lleva tilde; el artículo **el** no. (mí has an accent, ti never does.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La caja es para Pablo = La caja es para ___.', options: ['ti', 'él', 'ella'], answer: 1, why: 'Pablo = él. Con él, el pronombre no cambia: **para él**.', en: 'The box is for Pablo = The box is for him.' },
            { prompt: 'Las flores son para Rosa y Nuria = Las flores son para ___.', options: ['ellas', 'nosotras', 'ellos'], answer: 0, why: 'Rosa y Nuria = ellas: **para ellas**.', en: 'The flowers are for Rosa and Nuria = for them.' },
            { prompt: '¿Qué pronombres cambian después de una preposición?', options: ['Ningún pronombre.', 'Solo yo y tú: mí, ti.', 'Todos los pronombres.'], answer: 1, why: 'Solo yo → mí y tú → ti. Los demás son iguales que el sujeto.', en: 'Which pronouns change after a preposition?' },
          ] },
        ] },
        { title: 'Conmigo y contigo · With me, with you', mascot: '/brand/mascot/standing.webp', coach: 'Con + yo = conmigo. With me.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CON · formas especiales', question: '¿Cómo digo «with me» y «with you»?', en: 'How do I say “with me” and “with you”?', formula: ['con + yo → conmigo', 'con + tú → contigo', 'con + él, ella, nosotros… → con él, con ella, con nosotros'],
            meaning: 'Con la preposición **con**, yo y tú forman **una sola palabra**: conmigo, contigo. Nunca «con mí» ni «con ti». Con las otras personas, todo es normal: con ella, con ustedes.',
            examples: [
              { es: 'Nuria, ¿vienes [[conmigo|violet]] a la tienda?', en: 'Nuria, are you coming to the shop with me?' },
              { es: 'Sí, Diego, voy [[contigo|violet]].', en: 'Yes, Diego, I’m going with you.' },
              { es: 'Rosa trabaja [[con ella|teal]] en la oficina.', en: 'Rosa works with her in the office.' },
            ] },
          { kind: 'tip', icon: '💡', title: 'Una palabra, no dos · One word, not two', text: 'Escribe **conmigo** y **contigo** juntos, sin espacio. Pero «con él», «con ella» y «con nosotros» van separados.', en: 'Write conmigo and contigo as one word, with no space. But “con él”, “con ella” and “con nosotros” are two words.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Diego, ¿vienes ___ a la cena? (with me)', options: ['conmigo', 'con mí', 'contigo'], answer: 0, why: 'Con + yo = **conmigo**.', en: 'Diego, are you coming to the dinner with me?' },
            { prompt: 'Sí, Nuria, voy ___. (with you)', options: ['con ti', 'contigo', 'con tú'], answer: 1, why: 'Con + tú = **contigo**.', en: 'Yes, Nuria, I’m going with you.' },
            { prompt: 'Nuria va a la tienda con ___. (with him)', options: ['lo', 'su', 'él'], answer: 2, why: 'Con + él: no cambia, **con él**.', en: 'Nuria goes to the shop with him.' },
          ] },
        ] },
        { title: '¿Mí o mi? ¿Yo o mí? · Nearby forms', mascot: '/brand/mascot/portrait.webp', coach: '¿Hay un nombre después? Is there a noun after it?', blocks: [
          { kind: 'compare', title: 'Mí y mi no son la misma palabra · Mí and mi are different words', columns: [
            { tone: 'blue', label: 'MÍ · pronombre (me)', sentence: 'La invitación es [[para mí|blue]].', idea: 'Va solo, después de la preposición. Lleva tilde.', en: 'The invitation is for me.' },
            { tone: 'orange', label: 'MI · posesivo (my)', sentence: 'Es [[mi invitación|orange]].', idea: 'Va con un nombre: mi invitación. Sin tilde.', en: 'It’s my invitation.' },
          ] },
          { kind: 'table', title: 'Tres pares mínimos · Three minimal pairs', head: ['Sujeto o posesivo', 'Tras preposición', 'English'], rows: [
            ['[[Yo|orange]] traigo el pastel.', 'El pastel es [[para mí|blue]].', 'I bring the cake / The cake is for me.'],
            ['[[Tú|orange]] vas a la tienda.', 'Diego va [[contigo|violet]].', 'You go to the shop / Diego goes with you.'],
            ['Es [[tu regalo|orange]].', 'El regalo es [[para ti|blue]].', 'It’s your present / The present is for you.'],
          ], note: 'Yo y tú van **antes del verbo** (sujeto). Mí, ti, conmigo y contigo van **después de una preposición**.' },
          { kind: 'decide', title: 'Antes de escribir, piensa · Before you write', steps: [
            { q: '¿Hay una preposición justo antes (para, sin, de, a, con…)? (Is there a preposition just before?)', yes: 'next', no: 'Es el sujeto: **yo, tú**. O un posesivo con nombre: **mi, tu** + nombre.' },
            { q: '¿La preposición es «con» y la persona es yo o tú? (Is it “con” + me / you?)', yes: 'Una palabra: **conmigo, contigo**.', no: 'Usa **mí, ti**, o él, ella, nosotros… igual que el sujeto.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es ___ mesa. (my)', options: ['yo', 'mí', 'mi'], answer: 2, why: 'Hay un nombre después (mesa): posesivo **mi**, sin tilde.', en: 'It’s my desk.' },
            { prompt: 'La invitación es para ___. (me)', options: ['me', 'mi', 'mí'], answer: 2, why: 'Después de «para», sin nombre: **mí**, con tilde.', en: 'The invitation is for me.' },
            { prompt: '___ traigo el pastel y el pastel es para ti.', options: ['Yo', 'Me', 'Mí'], answer: 0, why: 'Antes del verbo va el sujeto: **yo** traigo.', en: 'I bring the cake and the cake is for you.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Qué hay antes? What comes before?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Hay una preposición antes?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Esto es para yo.', right: 'Esto es para mí.', why: 'Después de «para», yo cambia a **mí**. «Yo» va antes del verbo. (After a preposition: mí.)' },
            { wrong: '¿Vienes con mí?', right: '¿Vienes conmigo?', why: 'Con + yo es una sola palabra: **conmigo**. (One word.)' },
            { wrong: 'Voy con ti.', right: 'Voy contigo.', why: 'Con + tú es una sola palabra: **contigo**. (One word.)' },
            { wrong: 'El sobre es para tí.', right: 'El sobre es para ti.', why: '**Ti** nunca lleva tilde. Solo mí lleva tilde, porque existe «mi» (posesivo). (ti: no accent.)' },
            { wrong: 'La invitación es para el.', right: 'La invitación es para él.', why: 'El pronombre **él** (him) lleva tilde. «El» sin tilde es el artículo: el sobre. (él = him.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Este sobre es para ti.', 'Este sobre es para tu.', 'Este sobre es para tí.'], answer: 0, why: '**Para ti**, sin tilde. «Tu» es posesivo y necesita un nombre.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['¿Comes conmigo hoy?', '¿Comes con mí hoy?', '¿Comes con yo hoy?'], answer: 0, why: 'Con + yo: **conmigo**.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tú das objetos reales de la mesa (un lápiz, un papel, un libro) y dices «Esto es para ti». Tu alumno responde «¿Para mí? ¡Gracias!» y después da otro objeto: «Y esto es para ti».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las invitaciones de Carmen', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la oficina · At the office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carmen y tu alumno es Diego y Nuria. Después, tu alumno toca cada palabra marcada y dice qué pronombre es.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver por qué se usa. (Read aloud, then tap the marks.)' } },
          { kind: 'explore', title: '¿Es para mí?', setting: 'Martes por la mañana, en la oficina. Carmen abre una caja con sobres. Diego y Nuria están en sus mesas. Pablo hoy trabaja en casa. (Tuesday morning at the office. Carmen opens a box of envelopes. Diego and Nuria are at their desks. Pablo is working from home today.)', lines: [
            { who: 'Carmen', text: '¡Buenos días, equipo! Aquí tengo las invitaciones para la cena del viernes. Diego, esta es [[para ti|blue]].', en: 'Good morning, team! Here I have the invitations for Friday’s dinner. Diego, this one is for you.' },
            { who: 'Diego', text: 'Gracias, Carmen. ¿Y esta otra? ¿También es [[para mí|blue]]?', en: 'Thanks, Carmen. And this other one? Is it for me too?' },
            { who: 'Carmen', text: 'No, esa es para Pablo. Hoy trabaja en casa, pero la invitación es [[para él|teal]] y para su pareja.', en: 'No, that one is for Pablo. He’s working from home today, but the invitation is for him and his partner.' },
            { who: 'Nuria', text: '¿Y yo? ¿No hay invitación [[para mí|blue]]?', en: 'And me? Isn’t there an invitation for me?' },
            { who: 'Carmen', text: '¡Claro que sí! Aquí está [[tu invitación|orange]], Nuria. [[Sin ti|blue]] no hay fiesta: tú traes la música.', en: 'Of course! Here’s your invitation, Nuria. Without you there’s no party: you’re bringing the music.' },
            { who: 'Nuria', text: '¡Genial! Diego, el jueves compro las luces. ¿Vienes [[conmigo|violet]] a la tienda?', en: 'Great! Diego, on Thursday I’m buying the lights. Are you coming to the shop with me?' },
            { who: 'Diego', text: 'Sí, voy [[contigo|violet]]. Y también compramos el regalo para Rosa, la compañera nueva, ¿no?', en: 'Yes, I’ll go with you. And we’re also buying the present for Rosa, the new colleague, right?' },
            { who: 'Carmen', text: 'Sí, por favor. [[Para ella|teal]] es la primera cena [[con nosotros|teal]].', en: 'Yes, please. For her it’s the first dinner with us.' },
            { who: 'Nuria', text: '[[A mí|blue]] me encanta comprar regalos. ¿Un libro [[para ella|teal]]?', en: 'I love buying presents. A book for her?' },
            { who: 'Diego', text: 'Buena idea. Carmen, ¿tú vienes [[con nosotros|teal]] el jueves?', en: 'Good idea. Carmen, are you coming with us on Thursday?' },
            { who: 'Carmen', text: 'No, el jueves no puedo: van [[sin mí|blue]]. Pero el viernes ceno [[con ustedes|teal]], ¡claro!', en: 'No, I can’t on Thursday: you’re going without me. But on Friday I’m having dinner with you, of course!' },
            { who: 'Nuria', text: 'Perfecto. Entonces, Diego, el jueves a las seis, tú y yo en la tienda.', en: 'Perfect. So, Diego, Thursday at six, you and me at the shop.' },
          ], notes: {
            'para ti': 'Carmen habla con Diego (tú). Después de «para», tú cambia a **ti**, sin tilde.',
            'para mí': 'Diego habla de él mismo (yo). Después de «para», yo cambia a **mí**, con tilde.',
            'para él': 'Pablo = él. Con él, el pronombre no cambia. **Él** lleva tilde: no es el artículo «el».',
            'tu invitación': '**Tu** sin tilde es posesivo (your) y va con un nombre. Compara: la invitación es para ti.',
            'Sin ti': '«Sin» también es preposición: **sin ti** (without you). Igual que para ti.',
            'conmigo': 'Con + yo = **conmigo**, una sola palabra. Nunca «con mí».',
            'contigo': 'Con + tú = **contigo**, una sola palabra. Nunca «con ti».',
            'Para ella': 'Rosa = ella. Con ella, el pronombre no cambia: **para ella**.',
            'con nosotros': 'El equipo = nosotros. Con nosotros no hay forma especial: **con nosotros**, dos palabras.',
            'A mí': 'Como en la clase 032: **a mí** me encanta. «A» es preposición, entonces: mí, con tilde.',
            'para ella': 'El libro es un regalo para Rosa: **para ella**.',
            'sin mí': 'Carmen habla de ella misma: **sin mí**. Yo → mí, también después de «sin».',
            'con ustedes': 'Carmen habla con Diego y Nuria: **con ustedes**. Igual que el sujeto.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Para quién es la segunda invitación?', options: ['Para Pablo y su pareja.', 'Para Rosa.', 'Para Diego.'], answer: 0, why: '«Esa es para Pablo… la invitación es para él y para su pareja».', en: 'Who is the second invitation for?' },
            { prompt: '¿Con quién va Nuria a la tienda el jueves?', options: ['Con Rosa.', 'Con Diego.', 'Con Carmen.'], answer: 1, why: 'Nuria: «¿Vienes conmigo?». Diego: «Sí, voy contigo».', en: 'Who is Nuria going to the shop with on Thursday?' },
            { prompt: '¿Va Carmen a la tienda el jueves?', options: ['Sí, pero sin Nuria.', 'Sí, va con ellos.', 'No: Diego y Nuria van sin ella.'], answer: 2, why: 'Carmen: «El jueves no puedo: van sin mí».', en: 'Is Carmen going to the shop on Thursday?' },
          ] },
        ] },
        { title: '¿Qué pronombre es? · Which pronoun is it?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: 'Frases del diálogo · Sentences from the dialogue', categories: [
            { id: 'miti', label: 'mí · ti (yo y tú cambian)', tone: 'blue' },
            { id: 'con', label: 'conmigo · contigo', tone: 'violet' },
            { id: 'igual', label: 'igual que el sujeto (él, ella, nosotros…)', tone: 'teal' },
          ], items: [
            { text: 'Diego, esta invitación es para ti.', answer: 'miti', why: 'Tú → **ti** después de «para».' },
            { text: 'Sí, voy contigo.', answer: 'con', why: 'Con + tú = **contigo**.' },
            { text: 'La invitación es para él.', answer: 'igual', why: 'Él no cambia: **para él**.' },
            { text: 'El jueves van sin mí.', answer: 'miti', why: 'Yo → **mí** después de «sin».' },
            { text: '¿Vienes conmigo a la tienda?', answer: 'con', why: 'Con + yo = **conmigo**.' },
            { text: 'El viernes ceno con ustedes.', answer: 'igual', why: 'Ustedes no cambia: **con ustedes**.' },
            { text: 'Es la primera cena con nosotros.', answer: 'igual', why: 'Nosotros no cambia y va en dos palabras: **con nosotros**.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Por qué Carmen dice "tu invitación" sin tilde y "para ti"?». Respuesta esperada: «tu» va con un nombre (posesivo); «ti» va después de «para».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Hay preposición? ¿Es con? Preposition? Is it con?',
      steps: [
        { title: 'La forma correcta · The right form', blocks: [
          { kind: 'choice', items: [
            { context: 'Carmen da una caja a Pablo. (Carmen gives Pablo a box.)', prompt: 'Pablo, esta caja es para ___.', options: ['ti', 'tí', 'tú'], answer: 0, why: 'Después de «para», tú → **ti**, sin tilde.', en: 'Pablo, this box is for you.' },
            { context: 'Carmen habla de Pablo. (Carmen talks about Pablo.)', prompt: 'Pablo no está, pero la tarea es para ___.', options: ['el', 'lo', 'él'], answer: 2, why: 'Pablo = él: **para él**, con tilde. «El» sin tilde es el artículo.', en: 'Pablo isn’t here, but the task is for him.' },
            { context: 'Rosa habla con Nuria. (Rosa talks to Nuria.)', prompt: 'Nuria, ¿comes ___ hoy?', options: ['con mí', 'conmigo', 'con yo'], answer: 1, why: 'Con + yo: **conmigo**, una sola palabra.', en: 'Nuria, are you having lunch with me today?' },
            { context: 'Nuria responde a Rosa. (Nuria answers Rosa.)', prompt: '¡Sí! Como ___ a la una.', options: ['con tú', 'con ti', 'contigo'], answer: 2, why: 'Con + tú: **contigo**.', en: 'Yes! I’ll have lunch with you at one.' },
            { context: 'Carmen habla de ella misma. (Carmen talks about herself.)', prompt: 'El jueves Diego y Nuria van a la tienda sin ___.', options: ['mi', 'mí', 'yo'], answer: 1, why: 'Yo → **mí** después de «sin». Sin nombre después: con tilde.', en: 'On Thursday Diego and Nuria go to the shop without me.' },
            { context: 'Nuria habla de ella y de Diego. (Nuria talks about herself and Diego.)', prompt: 'Carmen, ¿vienes con ___ a la tienda?', options: ['nos', 'nosotros', 'mí'], answer: 1, why: 'Diego y yo = nosotros. No cambia: **con nosotros**. «Nos» va antes del verbo.', en: 'Carmen, are you coming to the shop with us?' },
          ] },
        ] },
        { title: '¿Qué forma falta? · Which form is missing?', blocks: [
          { kind: 'classify', title: 'Mí, ti, conmigo o contigo', categories: [
            { id: 'mi', label: 'mí', tone: 'blue' },
            { id: 'ti', label: 'ti', tone: 'blue' },
            { id: 'conmigo', label: 'conmigo', tone: 'violet' },
            { id: 'contigo', label: 'contigo', tone: 'violet' },
          ], items: [
            { text: 'Pablo, la caja grande es para ___.', answer: 'ti', why: 'Hablas con Pablo (tú) después de «para»: **ti**.' },
            { text: 'Diego: «Nuria, ¿vienes ___ el jueves?»', answer: 'conmigo', why: 'Diego invita a Nuria a ir con él: con + yo = **conmigo**.' },
            { text: 'Nuria: «Sí, Diego, voy ___».', answer: 'contigo', why: 'Nuria habla con Diego: con + tú = **contigo**.' },
            { text: 'Carmen: «Esta invitación tiene mi nombre: es para ___».', answer: 'mi', why: 'Carmen habla de ella misma: para **mí**.' },
            { text: 'Rosa: «¿Hacen la fiesta sin ___? ¡No, por favor!»', answer: 'mi', why: 'Rosa habla de ella misma después de «sin»: **mí**.' },
            { text: 'Diego: «Pablo, a ___ te gusta el chocolate, ¿no?»', answer: 'ti', why: 'Como en la clase 032: **a ti** te gusta.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Esta invitación es para yo.', ok: false, options: ['Esta invitación es para mi.', 'Esta invitación es para mí.', 'Esta invitación es para me.'], answer: 1, why: 'Después de «para», yo → **mí**, con tilde. «Mi» sin tilde necesita un nombre.' },
            { sentence: 'Nuria, Diego va contigo a la tienda.', ok: true, why: 'Correcta: hablas con Nuria, y con + tú = contigo.' },
            { sentence: 'Rosa, ¿cenas con mí el viernes?', ok: false, options: ['Rosa, ¿cenas con yo el viernes?', 'Rosa, ¿cenas conmí el viernes?', 'Rosa, ¿cenas conmigo el viernes?'], answer: 2, why: 'Con + yo: **conmigo**. «Conmí» no existe.' },
            { sentence: 'Diego, el regalo es para tí.', ok: false, options: ['Diego, el regalo es para tu.', 'Diego, el regalo es para ti.', 'Diego, el regalo es para te.'], answer: 1, why: '**Ti** nunca lleva tilde. «Tu» es posesivo; «te» va antes del verbo.' },
            { sentence: 'Pablo no viene hoy: el sobre es para el.', ok: false, options: ['Pablo no viene hoy: el sobre es para su.', 'Pablo no viene hoy: el sobre es para él.', 'Pablo no viene hoy: el sobre es para lo.'], answer: 1, why: 'El pronombre lleva tilde: **para él**. «El» sin tilde es el artículo.' },
          ] },
        ] },
        { title: 'El grupo del equipo · The team chat', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Mensajes del miércoles · Wednesday messages', lines: [
            { who: 'Nuria', text: 'Diego, ¿vienes ___ a la tienda mañana a las seis?', options: ['conmigo', 'con mí', 'contigo'], answer: 0, why: 'Nuria habla de ella misma: con + yo = **conmigo**.' },
            { who: 'Diego', text: 'Sí, claro, voy ___. ¿Llevo la lista?', options: ['con ti', 'contigo', 'con tú'], answer: 1, why: 'Diego habla con Nuria: con + tú = **contigo**.' },
            { who: 'Nuria', text: 'Sí. Y el regalo de Rosa: ¿un libro o flores para ___?', options: ['la', 'su', 'ella'], answer: 2, why: 'Rosa = ella. Después de «para»: **para ella**.' },
            { who: 'Diego', text: 'Un libro. A ___ me encantan las novelas, y a Rosa también.', options: ['mi', 'yo', 'mí'], answer: 2, why: 'Como en la clase 032: **a mí** me encantan. «A» es preposición.' },
            { who: 'Carmen', text: 'Gracias, chicos. Mañana no puedo: compran el regalo sin ___.', options: ['mí', 'me', 'yo'], answer: 0, why: 'Carmen habla de ella misma después de «sin»: **mí**.' },
            { who: 'Nuria', text: '¡No pasa nada, Carmen! El viernes vemos el regalo todos juntos.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['conmigo', '¿Vienes', 'a la tienda?'], accept: ['¿Vienes conmigo a la tienda?'], en: 'Are you coming to the shop with me?' },
            { tiles: ['para ella', 'un libro', 'Compramos'], accept: ['Compramos un libro para ella', 'Para ella compramos un libro'], en: 'We’re buying a book for her.' },
            { tiles: ['no hay', 'Sin ti', 'fiesta'], accept: ['Sin ti no hay fiesta', 'No hay fiesta sin ti'], en: 'Without you there’s no party.' },
          ] },
        ] },
        { title: 'Cambia la persona · Change the person', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase con un pronombre · Write it with a pronoun', items: [
            { prompt: 'La invitación es para Nuria.', instruction: 'Cambia «Nuria» por un pronombre. (for her)', accept: ['La invitación es para ella', 'Es para ella'] },
            { prompt: 'Yo voy a la tienda con Diego.', instruction: 'Empieza con «Diego va a la tienda…». Tú sigues hablando. (Diego goes to the shop with me)', accept: ['Diego va a la tienda conmigo', 'Va a la tienda conmigo', 'Él va a la tienda conmigo'] },
            { prompt: 'Rosa trabaja con Carmen y Pablo.', instruction: 'Cambia «Carmen y Pablo» por un pronombre. (with them)', accept: ['Rosa trabaja con ellos', 'Trabaja con ellos', 'Ella trabaja con ellos'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Carmen', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Las tareas del viernes · Friday’s tasks', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye una preposición con mí, ti, él, ustedes, conmigo o contigo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las formas como «para ti», «sin mí» o «conmigo». (Listen once for the gist, then for details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Carmen', channel: 'MENSAJE DE VOZ · GRUPO DEL EQUIPO, MIÉRCOLES POR LA NOCHE', src: '/audio/grammar-live/333.mp3',
            before: 'Miércoles por la noche. Carmen manda un mensaje de voz al grupo del equipo. ¿De qué crees que habla? (Carmen sends a voice message to the team group. What do you think it is about?)',
            gist: { prompt: '¿Para qué manda Carmen este mensaje?', options: ['Para cambiar el día de la cena.', 'Para organizar la cena: invitaciones y tareas.', 'Para presentar a Rosa al equipo.'], answer: 1, why: '«Un mensaje rápido sobre la cena del viernes»: habla de las invitaciones y de las tareas.', en: 'Why does Carmen send this message?' },
            details: [
              { prompt: '¿Dónde están las invitaciones?', options: ['En casa de Pablo.', 'En la tienda.', 'En la caja azul, en la mesa de Carmen.'], answer: 2, why: '«Las invitaciones están en la caja azul, en mi mesa».', en: 'Where are the invitations?' },
              { prompt: '¿Con quién trae Rosa el pastel?', options: ['Con Diego.', 'Con Carmen.', 'Con Nuria.'], answer: 0, why: '«Rosa, el viernes tú traes el pastel con Diego: vas con él a la pastelería».', en: 'Who is Rosa bringing the cake with?' },
              { prompt: '¿Quién compra las luces el jueves?', options: ['Carmen y Pablo.', 'Rosa y Diego.', 'Nuria y Diego, sin Carmen.'], answer: 2, why: '«Nuria y Diego compran las luces sin mí».', en: 'Who is buying the lights on Thursday?' },
              { prompt: '¿Con quién va Nuria en el coche el viernes?', options: ['Con Carmen.', 'Con Pablo.', 'Con Rosa.'], answer: 0, why: '«Nuria, ¿vienes conmigo en el coche?»: habla Carmen.', en: 'Who is Nuria going in the car with on Friday?' },
            ],
            transcript: 'Hola, equipo, soy Carmen. Un mensaje rápido sobre la cena del viernes. Las invitaciones están en la caja azul, en mi mesa. Pablo, hay una invitación [[para ti|blue]] y otra para tu pareja. Rosa, el viernes tú traes el pastel con Diego: vas [[con él|teal]] a la pastelería por la mañana. El jueves yo no puedo ir a la tienda, entonces Nuria y Diego compran las luces [[sin mí|blue]]. ¡Pero el viernes ceno [[con ustedes|teal]], claro! Nuria, ¿vienes [[conmigo|violet]] en el coche? Hay sitio para dos personas más. Y el amigo invisible es un secreto: el nombre del papel es solo [[para ti|blue]]. Hasta mañana.',
            reply: { teacher: 'Tú eres Carmen. Tu alumno es Nuria y responde al mensaje: si va con Carmen en el coche y qué compra el jueves, y con quién.', self: 'Eres Nuria. Responde a Carmen en voz alta: «Gracias, Carmen. Sí, voy contigo en el coche. El jueves compro las luces con…». (Answer as Nuria: the car and Thursday’s shopping.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu fiesta, tu equipo', coach: '¿Para quién? ¿Con quién? For whom? With whom?',
      steps: [
        { title: 'Organizas una cena · You organize a dinner', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres un compañero o una compañera del equipo y preguntas con tú. Tu alumno organiza una cena real o imaginada y responde con para mí, para ti, con él, conmigo y contigo. Tú repites su frase bien dicha y sigues con las repreguntas.', self: 'Imagina que organizas una cena con tu equipo, tu clase o tu familia. Lee la pregunta, responde en voz alta y después compara con el ejemplo. (Answer aloud, then compare.)' } },
          { kind: 'talk', cards: [
            { q: 'Tienes cinco invitaciones para una cena. ¿Para quién son? · You have five invitations for a dinner. Who are they for?', followUps: ['¿Hay una invitación para ti también? (Is there one for you too?)', '¿Y para la pareja de un amigo? (And for a friend’s partner?)'], phrases: ['Una es [[para mí|blue]].', 'Otra es [[para él|teal]] / [[para ella|teal]].', 'Dos son [[para ellos|teal]].'], hint: 'Yo → para mí. Tu amigo → para él. Tu amiga → para ella.', example: 'Una invitación es para mí, claro. Otra es para mi hermano y otra para su pareja: una para él y otra para ella. Las dos últimas son para mis amigas Sara y Julia: para ellas.', next: 'Ahora, las compras.' },
            { q: 'Necesitas comprar comida y bebidas. ¿Quién va contigo? · You need to buy food and drinks. Who goes with you?', followUps: ['¿Vas sola o solo? (Do you go alone?)', '¿Y quién va con tu amigo? (And who goes with your friend?)'], phrases: ['Mi amiga va [[conmigo|violet]].', 'Voy [[con él|teal]] / [[con ella|teal]].', 'Pablo va [[contigo|violet]], ¿no?'], hint: 'Con + yo = conmigo. Con + tú = contigo. Con él, con ella: dos palabras.', example: 'Mi amiga Julia va conmigo al supermercado el sábado. Yo compro la comida con ella, y mi hermano compra las bebidas con su pareja.', next: 'Ahora, los regalos.', teacher: 'Este es el punto de la clase: si tu alumno dice «con mí», tú repites la frase bien: «Ah, ¿Julia va contigo?».' },
            { q: 'En el equipo hacen un amigo invisible. ¿Qué regalo es bueno para ti? · There’s a Secret Santa. What present is good for you?', followUps: ['¿Y qué regalo es bueno para tu mejor amigo? (And for your best friend?)', '¿A ti te gustan los libros? (Do you like books?)'], phrases: ['[[Para mí|blue]], un libro o…', '[[A mí|blue]] me encanta…', '[[Para él|teal]], algo de música.'], hint: 'Para mí… / A mí me gusta… (clase 032).', example: 'Para mí, un buen regalo es un libro de viajes. A mí me encanta leer. Para mi mejor amigo, algo de música: él escucha jazz todos los días.' },
            { q: 'Un compañero no puede venir a la cena. ¿Hacen la cena sin él? · A colleague can’t come to the dinner. Do you have the dinner without him?', followUps: ['¿Cambian el día? (Do you change the day?)', '¿Qué escribes en el mensaje? (What do you write to him?)'], phrases: ['Sí, la cena es [[sin él|teal]].', 'No, [[sin ti|blue]] no hay cena.', 'Cenamos [[con él|teal]] otro día.'], hint: 'Hablas de él: sin él. Hablas con él: sin ti.', example: 'No, sin él no hacemos la cena. Escribo a Marcos: «Marcos, sin ti no hay cena. ¿Cenamos el sábado?».', next: 'Ahora, tú no puedes ir.' },
            { q: 'Tú no puedes ir a comprar las luces. ¿Qué dices al equipo? · You can’t go and buy the lights. What do you tell the team?', followUps: ['¿Quién compra las luces sin ti? (Who buys them without you?)', '¿Y el día de la cena, vas con ellos? (On the day, do you go with them?)'], phrases: ['Lo siento, van [[sin mí|blue]].', 'El viernes ceno [[con ustedes|teal]].', '¿Quién va [[con ella|teal]]?'], hint: 'Hablas de ti: sin mí. Hablas con el grupo: con ustedes.', example: 'Lo siento, el jueves trabajo hasta tarde: van sin mí. Sara va con Julia. Pero el viernes ceno con ustedes, claro.', next: 'Para terminar, un regalo para ti.' },
            { q: 'Un compañero te da un regalo. ¿Qué dices? ¿Y tienes algo para él? · A colleague gives you a present. What do you say? Do you have something for him?', followUps: ['¿Es para ti o para tu familia? (Is it for you or for your family?)', '¿Qué regalo tienes tú para él? (What present do you have for him?)'], phrases: ['¿Es [[para mí|blue]]? ¡Muchas gracias!', 'Y esto es [[para ti|blue]].', 'Es un regalo [[de mi familia|orange]] y [[de mí|blue]].'], hint: 'Recibes: ¿para mí? Das: para ti. Mi + nombre (mi familia); de mí, sin nombre.', example: '¿Es para mí? ¡Muchas gracias! Y esto es para ti: es un pastel de chocolate, de mi familia y de mí.', teacher: 'Haz una vez la pregunta «¿Y este regalo es para tu hermano?», para que tu alumno conteste «No, es para ti» o «Sí, es para él». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno reparte invitaciones y tareas con «Esto es para ti», «¿Vienes conmigo?» y «Va con él», y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta («¿Quién va contigo?», «¿Para quién es?») y responde como un compañero del equipo. (Now ask the questions and answer as a teammate.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje al equipo', coach: 'Invitaciones, tareas y regalos. Who gets what?',
      steps: [
        { title: 'Tu mensaje · Your message', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada preposición: ¿después va mí, ti, conmigo, contigo o un pronombre igual que el sujeto? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira cada preposición: ¿qué pronombre va después? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'La cena del viernes · Friday’s dinner', situation: 'Organizas una cena con tu equipo de trabajo o de clase. Escribes un mensaje al grupo para repartir invitaciones, tareas y regalos. (You organize a dinner with your team at work or school. You write a message to the group to hand out invitations, tasks and presents.)', task: [
            'Di para quién son dos invitaciones o dos regalos: para ti, para él, para ella… (Who two invitations or presents are for.)',
            'Invita a una persona a ir contigo: «¿Vienes conmigo…?». (Ask someone to go with you.)',
            'Explica una tarea con «con» + otra persona: con él, con ella, con nosotros… (A task with another person.)',
            'Escribe una frase sobre ti con «sin mí» o «para mí». (A sentence about yourself.)',
          ], starters: ['Hola, equipo:', 'El viernes es la cena de…', 'Hay una invitación para ti y otra para…', '¿Vienes conmigo a…?', '… compra las bebidas con él / con ella.', 'El jueves no puedo: hacen la reunión sin mí.', '¿Quién trae…?', 'Un abrazo.'],
            words: ['para mí', 'para ti', 'para él / ella', 'con nosotros', 'con ustedes', 'conmigo', 'contigo', 'sin mí', 'la invitación', 'el regalo', 'el amigo invisible', 'traer / comprar'],
            model: 'Hola, equipo: el viernes es la cena de fin de año. Las invitaciones están en mi mesa. Lucía, hay una invitación [[para ti|blue]] y otra para tu pareja. Marcos no viene a la oficina esta semana, pero su invitación está en la caja: es [[para él|teal]] y para su hija. Sara, ¿vienes [[conmigo|violet]] a la tienda el jueves? Compramos las bebidas juntas. Marcos trae la música y Lucía prepara el postre [[con él|teal]]. El jueves por la mañana no estoy en la oficina: hacen la reunión [[sin mí|blue]]. ¿Quién trae los regalos del amigo invisible? Un abrazo, Elena.',
            minWords: 40,
            checks: [
              { label: 'Preposición + pronombre (para ti, para él, con ella…)', pattern: '(?<!\\p{L})(?:para|con|sin|de|a)\\s+(?:mí|ti|él|ella|usted|nosotros|nosotras|ellos|ellas|ustedes)(?!\\p{L})', tip: 'Di para quién es algo: «Esta invitación es para ti», «El regalo es para ella».' },
              { label: 'Conmigo o contigo (with me, with you)', pattern: '(?<!\\p{L})con(?:migo|tigo)(?!\\p{L})', tip: 'Invita a alguien: «¿Vienes conmigo a la tienda?».' },
              { label: 'Una frase sobre ti: para mí o sin mí', pattern: '(?<!\\p{L})(?:para|sin|de|a)\\s+mí(?!\\p{L})', tip: 'Escribe «mí» con tilde: «Hacen la reunión sin mí», «Para mí, un café».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:para|sin|de|con)\\s+(?:yo|tú)(?!\\p{L})', why: 'Después de una preposición, yo → **mí** y tú → **ti**: «para mí», «sin ti». Con «con»: conmigo, contigo.' },
              { pattern: '(?<!\\p{L})con\\s+(?:mí|ti|tí)(?!\\p{L})', why: 'Con + yo y con + tú son una palabra: **conmigo**, **contigo**.' },
              { pattern: '(?<!\\p{L})tí(?!\\p{L})', why: '«Ti» nunca lleva tilde: **para ti**.' },
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
            { tone: 'blue', label: 'MÍ · TI · yo y tú cambian', formula: 'para mí · sin ti · de mí · a ti', example: 'Esto es para mí, no para ti.', caption: 'después de preposición: mí (con tilde), ti (sin tilde)', en: 'after a preposition: mí (accent), ti (no accent)' },
            { tone: 'violet', label: 'CON · formas especiales', formula: 'conmigo · contigo (nunca «con mí», «con ti»)', example: '¿Vienes conmigo? Sí, voy contigo.', caption: 'una sola palabra', en: 'one single word' },
            { tone: 'teal', label: 'LOS DEMÁS · igual que el sujeto', formula: 'para él · con ella · con nosotros · para ustedes · sin ellos', example: 'El viernes ceno con ustedes.', caption: 'él con tilde: no es el artículo', en: 'él has an accent: it is not the article' },
            { tone: 'orange', label: 'NO CONFUNDIR · sujeto y posesivo', formula: 'yo traigo / para mí · mi mesa / para mí · tu regalo / para ti', example: 'Es tu regalo: es para ti.', caption: 'yo y tú van antes del verbo; mi y tu, con un nombre', en: 'yo and tú go before the verb; mi and tu go with a noun' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregunta: **¿hay una preposición justo antes?** Si sí, yo → **mí** y tú → **ti**; con «con», **conmigo** y **contigo**. Los otros pronombres no cambian. Una excepción: **entre tú y yo** (between you and me) usa yo y tú.', en: 'Ask: is there a preposition just before? If so, yo → mí and tú → ti; with “con”, conmigo and contigo. The other pronouns don’t change. One exception: “entre tú y yo” (between you and me) uses yo and tú.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Pablo, estas flores son para ___.', options: ['tú', 'te', 'ti'], answer: 2, why: 'Después de «para», tú → ti.', en: 'Pablo, these flowers are for you.' },
            { prompt: 'Rosa, ¿cenas ___ el viernes? (with me)', options: ['con mí', 'conmigo', 'con yo'], answer: 1, why: 'Con + yo = conmigo.', en: 'Rosa, are you having dinner with me on Friday?' },
            { prompt: 'Diego no viene: la reunión es sin ___.', options: ['el', 'lo', 'él'], answer: 2, why: 'Diego = él, con tilde.', en: 'Diego isn’t coming: the meeting is without him.' },
            { prompt: '¿Cuál es correcta?', options: ['El regalo es para yo.', 'El regalo es para mí.', 'El regalo es para mi.'], answer: 1, why: 'Para + yo → para mí, con tilde.', en: 'Which one is correct?' },
            { prompt: 'A ___ me encanta el pastel de chocolate.', options: ['mi', 'me', 'mí'], answer: 2, why: '«A» es preposición: a mí, con tilde.', en: 'I love chocolate cake.' },
          ] },
        ] },
        { title: 'Una fiesta nueva · A new party', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'rewrite', title: 'El cumpleaños de tu amiga · Your friend’s birthday', items: [
            { prompt: 'This cake is for you. (tú)', instruction: 'Escribe la frase en español. (cake = el pastel)', accept: ['Este pastel es para ti', 'El pastel es para ti'] },
            { prompt: 'Are you coming with me? (tú)', instruction: 'Escribe la pregunta en español, con venir. (to come = venir)', accept: ['¿Vienes conmigo?', '¿Tú vienes conmigo?'] },
            { prompt: 'There’s no party without you. (tú)', instruction: 'Escribe la frase en español. (there is no = no hay)', accept: ['No hay fiesta sin ti', 'Sin ti no hay fiesta'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 034 · Números, cantidades y cuantificadores básicos', text: 'Ya repartes invitaciones, tareas y regalos: para mí, para ti, conmigo, contigo. Ahora la pregunta es **cuántos**: en la clase 034 cuentas personas, invitaciones y cosas con números, mucho, poco y bastante, justo lo que necesitas para organizar una fiesta.', en: 'You can now hand out invitations, tasks and presents: for me, for you, with me, with you. Now the question is how many: in class 034 you count people, invitations and things with numbers, mucho, poco and bastante, exactly what you need to organize a party.', href: '/el-mercado-de-las-cantidades', label: 'Ir a la clase 034' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Tienes tres regalos. ¿Para quién son y quién va contigo a comprarlos?». Respuesta esperada con para mí / para ti / para él o ella y conmigo o con + persona. Tarea: mandar el mensaje de Escribir a un grupo real.' },
        ] },
      ],
    },
  ],
};
