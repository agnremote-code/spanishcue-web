import type { LiveLesson } from '../types';

/**
 * Lesson 335 · A1 · Artículos con partes del cuerpo y ropa (course unit G035).
 * One scene runs through the class: Saturday evening in a shared flat. Clara is
 * unwell (head, throat, eyes) and cannot go to a concert; her flatmate Sergio
 * gets ready to go with his friend Pablo (he washes his hands, puts on a shirt,
 * a coat and Clara's scarf, takes off his new shoes). The listening is Clara's
 * voicemail to her health centre (doctora Ruiz) to ask for an appointment.
 * Content: with me / te / se / le / nos + verb, the body part or the piece of
 * clothing takes el / la / los / las, not mi / tu / su: me duele la cabeza,
 * me lavo las manos, me pongo el abrigo. Doler works like gustar (class 032):
 * me duele + singular, me duelen + plural. Contrast: to describe or locate
 * (es, está) or to name another owner, use mi / tu / su: mi cabeza es grande,
 * ¿dónde está mi abrigo?, me pongo tu bufanda. «La mano» is feminine.
 * Abro los ojos / tengo los ojos verdes appear receptively in a tip.
 * Everyone speaks with tú; the voicemail is a speaker from Spain (Clara).
 */
export const lesson: LiveLesson = {
  id: 335,
  level: 'A1',
  title: 'Artículos con partes del cuerpo y ropa',
  subtitle: 'Decir qué te duele y qué te pones con el artículo justo: me duele la cabeza, me pongo el abrigo; y mi abrigo para describir.',
  legend: [
    { tone: 'blue', label: 'Pronombre + verbo + EL / LA / LOS / LAS: ya sabemos de quién es (me duele la cabeza, me pongo el abrigo)' },
    { tone: 'violet', label: 'ME DUELEN + plural: dos o más cosas (me duelen los pies)' },
    { tone: 'orange', label: 'MI · TU · SU: describir, decir dónde está o hablar de la cosa de otra persona (mi abrigo es azul)' },
  ],
  optionNotes: {
    duelo: '«Duelo» es la forma de yo, pero la que duele no eres tú: es la parte del cuerpo. Como con gustar: **me duele** la cabeza, **me duelen** los pies.',
    dueles: '«Dueles» es la forma de tú. Lo que duele es la parte del cuerpo: **duele** (una) o **duelen** (dos o más).',
    te: '«Te» va antes de un verbo (te pones, te duele). Antes de un nombre, para decir de quién es, usa **tu**: tu abrigo.',
    me: '«Me» va antes de un verbo (me pongo, me duele). Antes de un nombre, para decir de quién es, usa **mi**: mi bufanda.',
    ti: '«Ti» va después de una preposición (para ti, a ti). Antes de un nombre, usa **tu**: tu abrigo.',
    Me: '«Me» va antes de un verbo (me pongo, me duele). Antes de un nombre, para decir de quién es, usa **mi**: mi chaqueta.',
    yo: '«Yo» es el sujeto (I). Antes de un nombre, para decir de quién es, usa **mi**: mi bufanda.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un sábado en casa', coach: 'Me duele la cabeza. My head hurts.',
      steps: [
        { title: 'Clara y Sergio · Clara and Sergio', blocks: [
          { kind: 'lead', text: 'Es sábado, a las ocho de la tarde. Clara y Sergio viven en el mismo piso. Hay un concierto a las nueve, pero Clara está mal. Sergio se prepara para salir con su amigo Pablo.', en: 'It is Saturday, eight in the evening. Clara and Sergio share a flat. There is a concert at nine, but Clara is unwell. Sergio is getting ready to go out with his friend Pablo.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después, tu alumno dice qué palabra va antes de «cabeza» y antes de «abrigo».', self: 'Lee las tres frases en voz alta. Mira la palabra antes de «cabeza» y antes de «abrigo». (Look at the word before “cabeza” and “abrigo”.)' } },
          { kind: 'compare', title: 'Tres frases de la tarde · Three sentences from the evening', columns: [
            { tone: 'blue', label: 'Clara · body', sentence: '«[[Me duele la cabeza|blue]]».', idea: 'Clara explica qué le pasa.', en: '“My head hurts.”' },
            { tone: 'blue', label: 'Sergio · clothes', sentence: '«[[Me pongo el abrigo|blue]]».', idea: 'Sergio se prepara para salir.', en: '“I’m putting on my coat.”' },
            { tone: 'orange', label: 'Sergio · where?', sentence: '«¿Dónde está [[mi abrigo|orange]]?».', idea: 'Sergio busca su abrigo.', en: '“Where is my coat?”' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué le pasa a Clara?', options: ['Busca su abrigo.', 'Le duele la cabeza.', 'Tiene un concierto.'], answer: 1, why: '«Me duele la cabeza»: Clara está mal.', en: 'What is wrong with Clara?' },
            { prompt: 'En «me duele la cabeza», ¿de quién es la cabeza?', options: ['De Sergio.', 'No sabemos.', 'De Clara: «me» lo dice.'], answer: 2, why: '«Me» ya dice la persona: la cabeza es de Clara. Por eso no hace falta «mi».', en: 'In “me duele la cabeza”, whose head is it?' },
            { prompt: 'En inglés decimos «my coat». En «me pongo ___ abrigo», ¿qué palabra va?', options: ['el', 'mi', 'un'], answer: 0, why: 'Me pongo **el** abrigo: «me» ya dice que el abrigo es de Sergio.', en: 'In English we say “my coat”. Which word goes in “me pongo ___ abrigo”?' },
          ] },
        ] },
        { title: 'Doler, como gustar · Doler works like gustar', mascot: '/brand/mascot/studying.webp', coach: 'Me duele una cosa; me duelen dos.', blocks: [
          { kind: 'lead', text: '**Doler** (to hurt) funciona como **gustar** (clase 032). La parte del cuerpo es el sujeto: si es una, **duele**; si son dos o más, **duelen**. La persona va antes: **me, te, le, nos, les**.', en: 'Doler (to hurt) works like gustar (class 032). The body part is the subject: one part, duele; two or more, duelen. The person goes first: me, te, le, nos, les.' },
          { kind: 'concept', tone: 'blue', label: 'DOLER', question: '¿Qué te duele?', en: 'What hurts?', formula: ['me / te / le / nos / les + duele + el / la + una parte', 'me / te / le / nos / les + duelen + los / las + dos o más'],
            meaning: 'Con doler, el pronombre dice **a quién** le duele. Por eso la parte del cuerpo lleva **artículo**, no posesivo: me duele **la** cabeza.',
            examples: [
              { es: '[[Me duele la garganta|blue]].', en: 'My throat hurts.' },
              { es: '[[Me duelen los ojos|violet]] con la luz.', en: 'My eyes hurt in the light.' },
              { es: 'A Sergio [[le duele la espalda|blue]].', en: 'Sergio’s back hurts.' },
              { es: '¿[[Te duelen los pies|violet]]?', en: 'Do your feet hurt?' },
            ] },
          { kind: 'table', title: 'Doler en presente · Doler in the present', head: ['¿A quién?', 'Pronombre', '+ una parte', '+ dos o más'], rows: [
            ['a mí', 'me', '[[me duele la cabeza|blue]]', '[[me duelen los pies|violet]]'],
            ['a ti', 'te', '[[te duele la garganta|blue]]', '[[te duelen los ojos|violet]]'],
            ['a él · a ella · a usted', 'le', '[[le duele la espalda|blue]]', '[[le duelen las piernas|violet]]'],
            ['a nosotros · a nosotras', 'nos', '[[nos duele el estómago|blue]]', '[[nos duelen los oídos|violet]]'],
            ['a ellos · a ellas · a ustedes', 'les', '[[les duele la cabeza|blue]]', '[[les duelen las manos|violet]]'],
          ], note: 'Solo necesitas **duele** y **duelen**. La o cambia a ue, como en «puede» (clase 020). (o → ue, like puede.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Me ___ el estómago.', options: ['duelo', 'duele', 'duelen'], answer: 1, why: 'El estómago es una cosa: duele.', en: 'My stomach hurts.' },
            { prompt: 'Después del concierto, a Sergio le ___ las piernas.', options: ['duele', 'duelen', 'duelo'], answer: 1, why: 'Las piernas son dos: duelen.', en: 'After the concert, Sergio’s legs hurt.' },
            { prompt: '¿Qué significa «nos duele la cabeza»?', options: ['Your head hurts.', 'Our heads hurt.', 'My head hurts.'], answer: 1, why: '«Nos» = a nosotros: our heads hurt.', en: 'What does “nos duele la cabeza” mean?' },
          ] },
        ] },
        { title: 'El cuerpo y la ropa · Body and clothes', mascot: '/brand/mascot/standing.webp', coach: 'Me lavo las manos. Me pongo el abrigo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ARTÍCULO · el, la, los, las', question: '¿Me lavo mis manos o me lavo las manos?', en: 'With a pronoun, use the article', formula: ['me / te / se / nos + verbo + el / la / los / las + parte del cuerpo', 'me / te / se / nos + pongo, quito… + el / la / los / las + ropa'],
            meaning: 'Con los verbos reflexivos de la clase 031 (lavarse, ponerse, quitarse…), el pronombre ya dice de quién es la parte del cuerpo o la ropa. En español va **el, la, los, las**, no mi, tu, su. En inglés es al revés: «I wash **my** hands».',
            examples: [
              { es: 'Antes de comer, [[me lavo las manos|blue]].', en: 'Before eating, I wash my hands.' },
              { es: 'Sergio [[se pone la camisa|blue]] blanca.', en: 'Sergio puts on his white shirt.' },
              { es: 'En casa, Clara [[se quita los zapatos|blue]].', en: 'At home, Clara takes off her shoes.' },
              { es: '¿[[Te lavas los dientes|blue]] después de cenar?', en: 'Do you brush your teeth after dinner?' },
            ],
            note: 'Quitarse = to take off. Es regular: me quito, te quitas, se quita.' },
          { kind: 'table', title: 'Palabras de hoy, con su artículo · Today’s words, with their article', head: ['El cuerpo · body', 'La ropa · clothes'], rows: [
            ['[[la cabeza|blue]] · head', '[[el abrigo|blue]] · coat'],
            ['[[la garganta|blue]] · throat', '[[la bufanda|blue]] · scarf'],
            ['[[el estómago|blue]] · stomach', '[[el gorro|blue]] · woolly hat'],
            ['[[la espalda|blue]] · back', '[[la camisa|blue]] · shirt'],
            ['[[la mano|blue]] · [[las manos|blue]] · hand(s)', '[[los guantes|blue]] · gloves'],
            ['[[los ojos|blue]] · [[los oídos|blue]] · eyes · ears', '[[los zapatos|blue]] · shoes'],
            ['[[los pies|blue]] · [[las piernas|blue]] · feet · legs', '[[la chaqueta|blue]] · jacket'],
          ], note: '¡Atención! **La mano** termina en -o, pero es femenina: la mano, las manos. (Mano is feminine.)' },
          { kind: 'tip', icon: '💡', title: 'Lo vas a oír también así · You will also hear it like this', text: 'Con otros verbos, si está claro de quién es, también va el artículo: «abro **los** ojos», «levanto **la** mano», «tengo **los** ojos verdes». Hoy solo lo reconoces.', en: 'With other verbs, when it is clear whose it is, Spanish also uses the article: “I open my eyes”, “I raise my hand”, “I have green eyes”. Today you only need to recognise it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hace frío. Me pongo ___ guantes.', options: ['los', 'mis', 'las'], answer: 0, why: '«Me pongo» ya dice de quién son. Guantes es masculino plural: los guantes.', en: 'It’s cold. I put on my gloves.' },
            { prompt: 'Clara se lava ___ manos.', options: ['sus', 'los', 'las'], answer: 2, why: 'La mano es femenina: las manos. «Se lava» ya dice que son de Clara.', en: 'Clara washes her hands.' },
            { prompt: '«Sergio se quita los zapatos» significa…', options: ['Sergio takes off his shoes.', 'Sergio puts on his shoes.', 'Sergio buys shoes.'], answer: 0, why: 'Quitarse = to take off. Ponerse = to put on.', en: '“Sergio se quita los zapatos” means…' },
          ] },
        ] },
        { title: '¿La o mi? · The or my?', mascot: '/brand/mascot/portrait.webp', coach: '¿Hay pronombre antes del verbo?', blocks: [
          { kind: 'compare', title: 'La misma cabeza, dos frases · Same head, two sentences', columns: [
            { tone: 'blue', label: 'ARTÍCULO · with me, te, se…', sentence: '[[Me duele la cabeza|blue]].', idea: '«Me» dice de quién es: la cabeza.', en: 'My head hurts.' },
            { tone: 'orange', label: 'POSESIVO · describing', sentence: '[[Mi cabeza|orange]] es grande.', idea: 'Describes con «es». No hay «me»: para decir de quién es, mi.', en: 'My head is big.' },
          ] },
          { kind: 'table', title: 'Pares mínimos · Minimal pairs', head: ['Pronombre + verbo → artículo', 'Describir, dónde está, otra persona → posesivo', 'English'], rows: [
            ['Me pongo [[el abrigo|blue]].', '[[Mi abrigo|orange]] es azul.', 'I put on my coat. / My coat is blue.'],
            ['Sergio se lava [[las manos|blue]].', '[[Sus manos|orange]] son grandes.', 'Sergio washes his hands. / His hands are big.'],
            ['Me quito [[los zapatos|blue]].', '¿Dónde están [[mis zapatos|orange]]?', 'I take off my shoes. / Where are my shoes?'],
            ['Me pongo [[la bufanda|blue]]. (es mía)', 'Me pongo [[tu bufanda|orange]]. (es de otra persona)', 'I put on my scarf. / I put on your scarf.'],
          ], note: 'Si la ropa es de **otra persona**, dilo: tu bufanda, la bufanda **de Clara**. «Mi» con me pongo solo suena natural para contrastar: «me pongo **mi** abrigo, no el tuyo». (Someone else’s: say whose. Mi only for contrast.)' },
          { kind: 'decide', title: 'Antes de decir la frase · Before you say it', steps: [
            { q: '¿Hay me, te, se, le o nos antes del verbo, y la cosa es de esa persona? (me duele, me pongo, te lavas…)', yes: 'Usa **el, la, los, las**: me duele la garganta, me pongo el gorro.', no: 'next' },
            { q: '¿Describes la cosa o dices dónde está, o es de otra persona? (es, está, son, someone else’s)', yes: 'Usa **mi, tu, su**: mi gorro es gris, ¿dónde está tu chaqueta?, me pongo tu bufanda.', no: 'Mira otra vez: ¿de quién es y qué verbo hay?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Sergio: «¿Dónde está ___ bufanda, Clara?»', options: ['ti', 'tu', 'te'], answer: 1, why: 'Sergio pregunta dónde está, y es de Clara: tu bufanda.', en: 'Sergio: “Where is your scarf, Clara?”' },
            { prompt: 'Me ___ la garganta.', options: ['duelo', 'duele', 'duelen'], answer: 1, why: 'Una parte (la garganta): me duele.', en: 'My throat hurts.' },
            { prompt: '¿Cuál es la frase natural?', options: ['Mi chaqueta es negra.', 'Me chaqueta es negra.', 'La me chaqueta es negra.'], answer: 0, why: 'Describes con «es»: mi chaqueta. «Me» va antes de un verbo, no de un nombre.', en: 'Which sentence is natural?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Artículo o posesivo? Article or possessive?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Hay pronombre antes del verbo? ¿Es una cosa o son dos?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Me duele mi cabeza.', right: 'Me duele la cabeza.', why: '«Me» ya dice que la cabeza es tuya. «Mi» es repetir: en español va el artículo. (Me already says whose.)' },
            { wrong: 'Me duelo la cabeza.', right: 'Me duele la cabeza.', why: 'Doler es como gustar: lo que duele es la cabeza, no yo. (The head hurts: duele.)' },
            { wrong: 'Me duele los pies.', right: 'Me duelen los pies.', why: 'Los pies son dos: duelen. (Plural → duelen.)' },
            { wrong: 'Me lavo mis manos antes de comer.', right: 'Me lavo las manos antes de comer.', why: 'Con «me lavo», las manos ya son tuyas: las manos. Es la forma del inglés «my hands». (Article, not possessive.)' },
            { wrong: 'Me lavo los manos.', right: 'Me lavo las manos.', why: 'La mano es femenina, aunque termina en -o: las manos. (Mano is feminine.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Me duelen mis ojos.', 'Me duelen los ojos.', 'Me duele los ojos.'], answer: 1, why: 'Plural (los ojos): duelen, con artículo, no con «mis».', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Sergio se pone el gorro.', 'Sergio pone se el gorro.', 'Sergio se pone gorro.'], answer: 0, why: 'Se + verbo + artículo + ropa: se pone el gorro.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice dos frases reales con «me duele / me duelen» (hoy o después de un día largo) y dos con «me pongo / me quito» y una prenda. Tú repites cada frase bien y tu alumno la repite.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Antes del concierto', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Clara no sale · Clara stays in', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Sergio y tu alumno es Clara. Después, tu alumno toca cada expresión marcada y dice si lleva artículo o posesivo, y por qué.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada para ver por qué lleva artículo o posesivo. (Read aloud, then tap the marks.)' } },
          { kind: 'explore', title: '¿Dónde está mi abrigo?', setting: 'Sábado, ocho de la tarde, en el piso de Clara y Sergio. El concierto empieza a las nueve. (Saturday, 8 p.m., in Clara and Sergio’s flat. The concert starts at nine.)', lines: [
            { who: 'Sergio', text: 'Clara, el concierto empieza a las nueve. ¿Estás lista?', en: 'Clara, the concert starts at nine. Are you ready?' },
            { who: 'Clara', text: 'No, Sergio. Estoy mal: [[me duele la cabeza|blue]] y [[me duele la garganta|blue]].', en: 'No, Sergio. I don’t feel well: my head hurts and my throat hurts.' },
            { who: 'Sergio', text: '¡Vaya! ¿Y [[te duelen los oídos|violet]] también?', en: 'Oh no! And do your ears hurt too?' },
            { who: 'Clara', text: 'No, los oídos no. Pero [[me duelen los ojos|violet]] con la luz.', en: 'No, not my ears. But my eyes hurt in the light.' },
            { who: 'Sergio', text: 'Entonces tú no sales. Yo voy con Pablo. Un momento: [[me lavo las manos|blue]] y [[me pongo la camisa|blue]] nueva.', en: 'Then you’re not going out. I’m going with Pablo. Just a moment: I’ll wash my hands and put on my new shirt.' },
            { who: 'Clara', text: 'Hace frío esta noche. ¿[[Te pones el abrigo|blue]]?', en: 'It’s cold tonight. Are you putting on your coat?' },
            { who: 'Sergio', text: 'Sí, claro. Pero… ¿dónde está [[mi abrigo|orange]]?', en: 'Yes, of course. But… where is my coat?' },
            { who: 'Clara', text: '[[Tu abrigo|orange]] está en la silla del salón. Y [[mi bufanda|orange]] está en el sofá: es grande y muy caliente.', en: 'Your coat is on the chair in the living room. And my scarf is on the sofa: it’s big and very warm.' },
            { who: 'Sergio', text: '¡Gracias! Entonces [[me pongo tu bufanda|orange]] para el concierto.', en: 'Thanks! Then I’ll put on your scarf for the concert.' },
            { who: 'Clara', text: 'Claro. Oye, ¿por qué caminas así?', en: 'Sure. Hey, why are you walking like that?' },
            { who: 'Sergio', text: '[[Mis zapatos|orange]] son nuevos y [[me duelen los pies|violet]]. Bueno, [[me quito los zapatos|blue]] y me pongo las zapatillas de deporte.', en: 'My shoes are new and my feet hurt. OK, I’ll take off the shoes and put on my trainers.' },
            { who: 'Clara', text: 'Buena idea. ¡Buen concierto, Sergio!', en: 'Good idea. Enjoy the concert, Sergio!' },
          ], notes: {
            'me duele la cabeza': 'Una parte (la cabeza): **me duele**. «Me» dice que es la cabeza de Clara: artículo **la**, no «mi».',
            'me duele la garganta': 'Otra vez una parte: **me duele la garganta**. Con doler, siempre el artículo.',
            'te duelen los oídos': 'Sergio habla con Clara (tú): **te**. Los oídos son dos: **duelen**.',
            'me duelen los ojos': 'Dos ojos: **me duelen**, con **los**. En inglés: my eyes hurt.',
            'me lavo las manos': 'Lavarse (clase 031) + parte del cuerpo: **las manos**. La mano es femenina.',
            'me pongo la camisa': 'Ponerse + ropa: **me pongo la camisa**. «Me» ya dice que es la camisa de Sergio.',
            'Te pones el abrigo': 'Pregunta con tú: **te pones el abrigo**. El pronombre «te» dice de quién es: artículo.',
            'mi abrigo': 'Aquí no hay pronombre antes del verbo: Sergio pregunta **dónde está**. Para decir de quién es: **mi** abrigo.',
            'Tu abrigo': 'Clara dice dónde está el abrigo de Sergio: **tu** abrigo está en la silla. Posesivo.',
            'mi bufanda': 'Clara describe su bufanda y dice dónde está: **mi** bufanda. Posesivo.',
            'me pongo tu bufanda': 'La bufanda es **de otra persona** (de Clara). Por eso Sergio dice **tu** bufanda, no «la bufanda».',
            'Mis zapatos': 'Sergio describe sus zapatos con «son»: **mis** zapatos son nuevos.',
            'me duelen los pies': 'Dos pies: **me duelen los pies**. Plural: duelen.',
            'me quito los zapatos': 'Quitarse (to take off) + ropa: **me quito los zapatos**, con artículo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué le duele a Clara?', options: ['La cabeza, la garganta y los ojos.', 'Los oídos.', 'Los pies y la espalda.'], answer: 0, why: '«Me duele la cabeza y me duele la garganta… me duelen los ojos con la luz».', en: 'What hurts Clara?' },
            { prompt: '¿Dónde está el abrigo de Sergio?', options: ['En el sofá.', 'En la silla del salón.', 'En la habitación de Clara.'], answer: 1, why: '«Tu abrigo está en la silla del salón».', en: 'Where is Sergio’s coat?' },
            { prompt: '¿Por qué se quita Sergio los zapatos?', options: ['Porque no va al concierto.', 'Porque le duelen los pies.', 'Porque hace frío.'], answer: 1, why: '«Mis zapatos son nuevos y me duelen los pies».', en: 'Why does Sergio take off his shoes?' },
          ] },
        ] },
        { title: '¿Por qué artículo o posesivo? · Why article or possessive?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: 'Frases del diálogo · Sentences from the dialogue', categories: [
            { id: 'art', label: 'Pronombre + verbo → EL · LA · LOS · LAS', tone: 'blue' },
            { id: 'pos', label: 'Describir, dónde está u otra persona → MI · TU · SU', tone: 'orange' },
          ], items: [
            { text: 'Me duele la garganta.', answer: 'art', why: '«Me» + doler: la garganta.' },
            { text: '¿Dónde está mi abrigo?', answer: 'pos', why: 'Sergio pregunta dónde está: mi abrigo.' },
            { text: 'Me lavo las manos.', answer: 'art', why: '«Me lavo» ya dice de quién son: las manos.' },
            { text: 'Mi bufanda es grande.', answer: 'pos', why: 'Clara describe con «es»: mi bufanda.' },
            { text: 'Me pongo tu bufanda.', answer: 'pos', why: 'La bufanda es de otra persona: tu bufanda.' },
            { text: 'Me quito los zapatos.', answer: 'art', why: '«Me quito» + ropa: los zapatos.' },
            { text: 'Mis zapatos son nuevos.', answer: 'pos', why: 'Sergio describe con «son»: mis zapatos.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Por qué Sergio dice "me pongo la camisa" pero "me pongo tu bufanda"?». Respuesta esperada: la camisa es de él (el pronombre lo dice); la bufanda es de Clara, de otra persona.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Una o dos? ¿Artículo o posesivo? One or two? The or my?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Clara habla con la doctora. (Clara talks to the doctor.)', prompt: 'Doctora, me ___ la garganta desde hoy.', options: ['duelen', 'duele', 'duelo'], answer: 1, why: 'Una parte (la garganta): **duele**.', en: 'Doctor, my throat has hurt since today.' },
            { context: 'Clara explica otra molestia. (Another problem.)', prompt: 'También me ___ los ojos con la luz.', options: ['duelo', 'duelen', 'duele'], answer: 1, why: 'Los ojos son dos: **duelen**.', en: 'My eyes also hurt in the light.' },
            { context: 'Clara habla de Sergio. (Clara talks about Sergio.)', prompt: 'Con los zapatos nuevos, a Sergio le ___ los pies.', options: ['dueles', 'duelen', 'duele'], answer: 1, why: 'Los pies son dos: **le duelen**.', en: 'With his new shoes, Sergio’s feet hurt.' },
            { context: 'Antes de cenar. (Before dinner.)', prompt: 'Clara se lava ___ manos.', options: ['los', 'las', 'sus'], answer: 1, why: '«Se lava» ya dice que son de Clara, y mano es femenina: **las** manos.', en: 'Clara washes her hands.' },
            { context: 'Sergio habla con Clara. (Sergio talks to Clara.)', prompt: 'Clara, ___ abrigo es muy bonito.', options: ['tu', 'ti', 'te'], answer: 0, why: 'Describe con «es» el abrigo de Clara: **tu** abrigo. «Te» va antes de un verbo.', en: 'Clara, your coat is very nice.' },
            { context: 'Sergio sale. Hace frío. (It’s cold.)', prompt: 'Yo ___ los guantes y el gorro.', options: ['me pongo', 'se pone', 'pongo'], answer: 0, why: 'Ponerse con yo: **me pongo**. Sin «me», no se dice dónde va la ropa.', en: 'I put on my gloves and my hat.' },
          ] },
        ] },
        { title: '¿Duele o duelen? · One or more?', blocks: [
          { kind: 'classify', title: 'Me ___ …', categories: [
            { id: 'una', label: 'duele (una parte)', tone: 'blue' },
            { id: 'dos', label: 'duelen (dos o más)', tone: 'violet' },
          ], items: [
            { text: 'Me ___ la espalda.', answer: 'una', why: 'La espalda: una. Me duele.' },
            { text: 'Me ___ las piernas.', answer: 'dos', why: 'Las piernas: dos. Me duelen.' },
            { text: 'Me ___ el estómago.', answer: 'una', why: 'El estómago: uno. Me duele.' },
            { text: 'Me ___ los oídos.', answer: 'dos', why: 'Los oídos: dos. Me duelen.' },
            { text: 'Me ___ la mano derecha.', answer: 'una', why: 'La mano derecha: una (mano termina en -o, pero es la mano). Me duele.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Me duele mi cabeza desde la mañana.', ok: false, options: ['Me duelo la cabeza desde la mañana.', 'Me duelen la cabeza desde la mañana.', 'Me duele la cabeza desde la mañana.'], answer: 2, why: '«Me» ya dice de quién es: **la** cabeza. Una parte: duele.' },
            { sentence: 'Sergio se pone el abrigo negro.', ok: true, why: 'Correcta: se pone + artículo + ropa.' },
            { sentence: 'Me duele los pies con estos zapatos.', ok: false, options: ['Me duelen los pies con estos zapatos.', 'Me duele mis pies con estos zapatos.', 'Me duelen mis pies con estos zapatos.'], answer: 0, why: 'Dos pies: **duelen**, y con artículo: los pies.' },
            { sentence: 'Antes de comer, me lavo manos.', ok: false, options: ['Antes de comer, me lavo mis manos.', 'Antes de comer, lavo me las manos.', 'Antes de comer, me lavo las manos.'], answer: 2, why: 'Falta el artículo: me lavo **las** manos. «Mis» es la forma del inglés.' },
            { sentence: 'Mi abrigo es azul y tu abrigo es negro.', ok: true, why: 'Correcta: describes con «es» y hay dos personas: mi abrigo, tu abrigo.' },
          ] },
        ] },
        { title: 'El domingo por la mañana · Sunday morning', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'En la cocina · In the kitchen', lines: [
            { who: 'Sergio', text: 'Buenos días, Clara. ¿Todavía te ___ la cabeza?', options: ['duele', 'duelen', 'dueles'], answer: 0, why: 'La cabeza es una: **te duele**.' },
            { who: 'Clara', text: 'Un poco. Pero ahora me duele ___ estómago.', options: ['el', 'mi', 'la'], answer: 0, why: '«Me duele» ya dice de quién es: **el** estómago (masculino).' },
            { who: 'Sergio', text: 'Yo estoy cansado. Después del concierto, me ___ las piernas.', options: ['duele', 'duelen', 'duelo'], answer: 1, why: 'Las piernas son dos: **me duelen**.' },
            { who: 'Clara', text: '¡Pobre! Oye, ¿dónde está ___ bufanda?', options: ['yo', 'mi', 'me'], answer: 1, why: 'Clara pregunta dónde está su bufanda: **mi** bufanda. «Me» va antes de un verbo.' },
            { who: 'Sergio', text: 'En el sofá. Un momento: primero ___ los zapatos, están sucios.', options: ['me quito', 'me quita', 'quito'], answer: 0, why: 'Quitarse con yo: **me quito** los zapatos.' },
            { who: 'Clara', text: 'Gracias, Sergio. Y ahora, un té para los dos.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['la', 'Me', 'cabeza', 'duele'], accept: ['Me duele la cabeza', 'La cabeza me duele'], en: 'My head hurts.' },
            { tiles: ['se', 'el abrigo', 'Sergio', 'pone'], accept: ['Sergio se pone el abrigo'], en: 'Sergio puts on his coat.' },
            { tiles: ['las', 'Nos', 'manos', 'lavamos'], accept: ['Nos lavamos las manos'], en: 'We wash our hands.' },
            { tiles: ['abrigo', 'Mi', 'azul', 'es'], accept: ['Mi abrigo es azul'], en: 'My coat is blue.' },
          ] },
        ] },
        { title: 'Del inglés al español · From English to Spanish', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Escríbelo en español · Write it in Spanish', items: [
            { prompt: 'My feet hurt.', instruction: 'Escribe la frase en español. (feet = los pies)', accept: ['Me duelen los pies', 'A mí me duelen los pies', 'Los pies me duelen'] },
            { prompt: 'I put on my scarf.', instruction: 'Escribe la frase en español. (scarf = la bufanda) ¡Ojo con «my»!', accept: ['Me pongo la bufanda', 'Yo me pongo la bufanda'] },
            { prompt: 'Clara washes her hands.', instruction: 'Escribe la frase en español. (hands = las manos)', accept: ['Clara se lava las manos', 'Se lava las manos', 'Ella se lava las manos'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Clara llama al centro de salud', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un mensaje en el contestador · A voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye «me duele», «me duelen», «me pongo» o «me lavo». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las veces que oyes «me duele», «me duelen», «me pongo» o «me lavo». (Listen once for the gist, then for details.)' } },
          { kind: 'listen', title: 'Clara llama al centro de salud', channel: 'CONTESTADOR · CENTRO DE SALUD, SÁBADO POR LA TARDE', src: '/audio/grammar-live/335.mp3',
            before: 'El centro de salud está cerrado. Clara deja un mensaje en el contestador. ¿Qué crees que dice? (The health centre is closed. Clara leaves a voicemail. What do you think she says?)',
            gist: { prompt: '¿Para qué llama Clara?', options: ['Para pedir una cita para el lunes.', 'Para hablar con Sergio.', 'Para cambiar una cita del martes.'], answer: 0, why: '«Llamo para pedir una cita para el lunes».', en: 'Why is Clara calling?' },
            details: [
              { prompt: '¿Qué le duele a Clara?', options: ['El estómago.', 'La cabeza y la garganta.', 'La espalda y los pies.'], answer: 1, why: '«Me duele mucho la cabeza y me duele la garganta».', en: 'What hurts Clara?' },
              { prompt: '¿Cuándo le duelen los ojos?', options: ['Con la luz.', 'Con el frío.', 'Por la mañana.'], answer: 0, why: '«También me duelen los ojos con la luz».', en: 'When do her eyes hurt?' },
              { prompt: '¿Qué se pone Clara en casa?', options: ['Los guantes y el gorro.', 'El abrigo y la bufanda.', 'La chaqueta de Sergio.'], answer: 1, why: '«En casa me pongo el abrigo y la bufanda».', en: 'What does Clara put on at home?' },
              { prompt: '¿Por qué se lava las manos muchas veces? (fiebre = fever)', options: ['Porque vive con un amigo.', 'Porque tiene fiebre.', 'Porque trabaja en un hospital.'], answer: 0, why: '«Me lavo las manos muchas veces, porque vivo con un amigo».', en: 'Why does she wash her hands so often?' },
            ],
            transcript: 'Hola, buenas tardes. Soy Clara Molina, paciente de la doctora Ruiz. Llamo para pedir una cita para el lunes. Desde hoy estoy mal: [[me duele mucho la cabeza|blue]] y [[me duele la garganta|blue]]. También [[me duelen los ojos|violet]] con la luz. No tengo fiebre, pero tengo frío todo el tiempo, y en casa [[me pongo el abrigo|blue]] y la bufanda. [[Me lavo las manos|blue]] muchas veces, porque vivo con un amigo. [[Mi número|orange]] es el seis, uno, cuatro, dos, dos, ocho, siete, cinco, tres. Muchas gracias. Hasta el lunes.',
            reply: { teacher: 'Tú eres la doctora Ruiz y llamas a Clara el lunes. Tu alumno es Clara y responde: qué le duele hoy, qué le duele menos y qué se pone en casa.', self: 'Eres Clara. Es lunes y la doctora te llama. Responde en voz alta: «Hoy me duele… Ya no me duelen… En casa me pongo…». (Answer as Clara: what hurts today and what you wear at home.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu cuerpo y tu ropa', coach: '¿Qué te duele? ¿Qué te pones? What hurts? What do you wear?',
      steps: [
        { title: 'Molestias y ropa · Aches and clothes', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres un amigo, una amiga o el médico y preguntas con tú. Tu alumno responde con frases reales: me duele / me duelen, me pongo, me quito. Tú repites su frase bien dicha y sigues con las repreguntas.', self: 'Lee la pregunta, responde en voz alta con frases reales y después compara con el ejemplo. (Answer aloud, then compare.)' } },
          { kind: 'talk', cards: [
            { q: 'Después de un día largo, ¿qué te duele? · After a long day, what hurts?', followUps: ['¿Te duelen los pies o la espalda? (Your feet or your back?)', '¿Y qué haces? (And what do you do?)'], phrases: ['[[Me duele|blue]] la espalda.', '[[Me duelen|violet]] los pies.', 'No me duele nada.'], hint: 'Una parte: me duele. Dos o más: me duelen. Siempre con el, la, los, las.', example: 'Después del trabajo me duele la espalda, porque estoy sentada ocho horas. A veces también me duelen los ojos.', next: 'Ahora, con el médico.' },
            { q: 'Estás con el médico. ¿Qué te pasa? · You are at the doctor’s. What’s wrong?', followUps: ['¿Desde cuándo? (Since when?)', '¿Te duele mucho o un poco? (A lot or a little?)', '¿Tienes fiebre? (Do you have a fever?)'], phrases: ['Doctor, [[me duele la garganta|blue]].', 'También [[me duelen los oídos|violet]].', 'Me duele mucho / un poco.'], hint: 'Di dos molestias. Recuerda: me duele la garganta, no «mi garganta».', example: 'Doctora, me duele mucho la garganta desde ayer. También me duelen los oídos un poco. No tengo fiebre.', next: 'Ahora, el frío.', teacher: 'Si tu alumno dice «me duele mi garganta», tú repites la frase bien, sin explicar: «Ah, ¿te duele la garganta?».' },
            { q: 'Hace frío y sales. ¿Qué te pones? · It’s cold and you’re going out. What do you put on?', followUps: ['¿Te pones gorro o no? (A hat or not?)', '¿Y cuando llegas a casa, qué te quitas? (What do you take off at home?)'], phrases: ['[[Me pongo el abrigo|blue]] y [[la bufanda|blue]].', '[[Me pongo los guantes|blue]].', 'En casa [[me quito los zapatos|blue]].'], hint: 'Me pongo / me quito + el, la, los, las + ropa.', example: 'Me pongo el abrigo negro, la bufanda y los guantes. No me pongo gorro. En casa me quito los zapatos.', next: 'Ahora, antes de salir por la noche.' },
            { q: 'Esta noche sales con amigos. ¿Qué haces antes? · Tonight you’re going out with friends. What do you do first?', followUps: ['¿Te duchas? (Do you shower?)', '¿Qué camisa o qué chaqueta te pones? (Which shirt or jacket?)'], phrases: ['[[Me lavo los dientes|blue]].', '[[Me pongo la camisa|blue]] azul.', 'Me peino. (I comb my hair.)'], hint: 'Rutina de la clase 031 + la ropa con artículo.', example: 'Primero me ducho y me lavo el pelo. Después me pongo la camisa azul y la chaqueta gris. Al final me lavo los dientes.', next: 'Ahora, tu ropa favorita.' },
            { q: 'Describe tu ropa favorita. ¿Cómo es? ¿Dónde está ahora? · Describe your favourite clothes. What are they like? Where are they now?', followUps: ['¿De qué color es? (What colour?)', '¿Es nueva o vieja? (New or old?)'], phrases: ['[[Mi chaqueta|orange]] favorita es…', '[[Mis zapatos|orange]] son…', '[[Mi bufanda|orange]] está en…'], hint: 'Describes o dices dónde está: mi, mis. Aquí no hay pronombre antes del verbo.', example: 'Mi chaqueta favorita es verde y muy vieja. Ahora está en el armario. Mis zapatos favoritos son negros y cómodos.', next: 'Para terminar, el final de la noche.' },
            { q: 'Llegas a casa después de un concierto, como Sergio. ¿Qué te quitas y qué te duele? · You get home after a concert, like Sergio. What do you take off and what hurts?', followUps: ['¿Te duelen los pies? (Do your feet hurt?)', '¿Te pones el pijama? (Do you put on your pyjamas?)', '¿Te lavas la cara? (Do you wash your face?)'], phrases: ['[[Me quito los zapatos|blue]] y [[la chaqueta|blue]].', '[[Me duelen las piernas|violet]].', '[[Me pongo el pijama|blue]].'], hint: 'Mezcla: me quito / me pongo + ropa, me duele / me duelen + cuerpo.', example: 'Me quito los zapatos y la chaqueta. Me duelen los pies y me duele un poco la cabeza. Me lavo la cara, me pongo el pijama y me acuesto.', teacher: 'Pregunta una vez «¿Y dónde está tu chaqueta ahora?», para que tu alumno use el posesivo: «Mi chaqueta está en la silla». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué te duele?», «¿Qué te pones?», «¿Cómo es tu chaqueta?») y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta («¿Qué te duele?», «¿Qué te pones?») y responde como Clara o como Sergio. (Now ask the questions and answer as Clara or Sergio.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Esta noche no salgo', coach: 'Qué te duele, qué te pones y una cosa tuya.',
      steps: [
        { title: 'Tu mensaje · Your message', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada parte del cuerpo y cada prenda: ¿artículo o posesivo? ¿duele o duelen? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira cada parte del cuerpo y cada prenda: ¿el, la, los, las o mi, tu? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje para tu amigo · A message to your friend', situation: 'Esta noche tienes un plan con un amigo o una amiga, pero estás mal y no sales. Le escribes un mensaje: qué te duele, qué haces en casa y una cosa tuya para él o ella. (You had plans tonight but you feel unwell. Text your friend: what hurts, what you do at home, and something of yours you offer them.)', task: [
            'Di que no sales y explica dos molestias con me duele / me duelen. (Two aches.)',
            'Di qué haces en casa con me pongo, me quito o me lavo + el, la, los, las. (What you do at home.)',
            'Ofrece una cosa tuya y descríbela o di dónde está, con mi. (Offer something of yours: mi…)',
            'Despídete. (Say goodbye.)',
          ], starters: ['Hola, …:', 'Lo siento, esta noche no salgo.', 'Estoy mal: me duele…', 'También me duelen…', 'Ahora me pongo…', '¿Quieres mi…?', 'Mi … está en…', '¡Buen concierto! Un abrazo.'],
            words: ['me duele', 'me duelen', 'la cabeza', 'la garganta', 'los ojos', 'el estómago', 'me pongo', 'me quito', 'me lavo', 'el pijama', 'mi gorro', 'mi bufanda', 'está en'],
            model: 'Hola, Pablo: lo siento, esta noche no salgo. Estoy mal: [[me duele la cabeza|blue]] y [[me duelen los ojos|violet]]. Ahora [[me pongo el pijama|blue]] y me acuesto temprano. Hace frío esta noche. ¿Quieres [[mi gorro|orange]]? [[Mi gorro|orange]] es gris y está en la mesa de la entrada. ¡Buen concierto! Un abrazo, Clara.',
            minWords: 30,
            checks: [
              { label: 'Me duele / me duelen: qué te duele (what hurts)', pattern: '(?<!\\p{L})(?:me|te|le|nos|les)\\s+(?:duele|duelen)(?!\\p{L})', tip: 'Explica qué te duele: «Me duele la cabeza», «Me duelen los ojos».' },
              { label: 'Me pongo / me quito / me lavo + el, la, los, las', pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:pongo|pones|pone|ponemos|quito|quitas|quita|quitamos|lavo|lavas|lava|lavamos)\\s+(?:el|la|los|las)(?!\\p{L})', tip: 'Di qué haces en casa: «Me pongo el pijama», «Me lavo la cara».' },
              { label: 'Una cosa tuya con mi (something of yours)', pattern: '(?<!\\p{L})(?:mi|mis)\\s+\\p{L}+', tip: 'Ofrece una cosa tuya: «¿Quieres mi bufanda? Mi bufanda está en el sofá».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:me|te|le|nos|les)\\s+(?:duele|duelen)\\s+(?:mucho\\s+|un\\s+poco\\s+)?(?:mi|mis|tu|tus|su|sus)(?!\\p{L})', why: 'Con doler, el pronombre ya dice de quién es: «me duele **la** cabeza», no «me duele mi cabeza».' },
              { pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:lavo|lavas|lava|lavamos|pongo|quito)\\s+(?:mis|tus|sus)\\s+(?:manos|pies|ojos|dientes|zapatos|guantes)(?!\\p{L})', why: 'Con «me lavo», «me pongo» o «me quito», usa el artículo: «me lavo **las** manos», «me quito **los** zapatos».' },
              { pattern: '(?<!\\p{L})duele\\s+(?:mucho\\s+|un\\s+poco\\s+)?(?:los|las)(?!\\p{L})', why: 'Dos o más: «me **duelen** los ojos».' },
              { pattern: '(?<!\\p{L})duelen\\s+(?:mucho\\s+|un\\s+poco\\s+)?(?:el|la)(?!\\p{L})', why: 'Una sola parte: «me **duele** la cabeza».' },
              { pattern: '(?<!\\p{L})me\\s+duelo(?!\\p{L})', why: 'Lo que duele es la parte del cuerpo: «me **duele** la cabeza», como «me gusta».' },
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
            { tone: 'blue', label: 'DOLER · como gustar', formula: 'me / te / le / nos / les + duele + el / la …', example: 'Me duele la cabeza.', caption: 'una parte del cuerpo', en: 'one body part hurts' },
            { tone: 'violet', label: 'DUELEN · plural', formula: 'me duelen + los / las …', example: 'Me duelen los pies.', caption: 'dos o más', en: 'two or more hurt' },
            { tone: 'blue', label: 'REFLEXIVO + ARTÍCULO', formula: 'me lavo las manos · me pongo el abrigo · se quita los zapatos', example: 'Sergio se pone la camisa.', caption: 'el pronombre dice de quién es', en: 'the pronoun says whose it is' },
            { tone: 'orange', label: 'POSESIVO · mi, tu, su', formula: 'mi abrigo es azul · ¿dónde está tu bufanda? · me pongo tu bufanda', example: 'Mi cabeza es grande.', caption: 'describir, dónde está, otra persona', en: 'describing, location, someone else’s' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira el verbo: si hay **me, te, se, le o nos** y la cosa es de esa persona, va **el, la, los, las**: me duele la cabeza, me pongo el abrigo. Si describes, dices dónde está o es de otra persona, va **mi, tu, su**. Y con doler: una parte, **duele**; dos o más, **duelen**.', en: 'Look at the verb: if there is me, te, se, le or nos and the thing belongs to that person, use el, la, los, las: my head hurts, I put on my coat. If you describe it, say where it is, or it belongs to someone else, use mi, tu, su. And with doler: one part, duele; two or more, duelen.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Después del gimnasio me ___ las piernas.', options: ['duele', 'duelen', 'duelo'], answer: 1, why: 'Las piernas: dos. Me duelen.', en: 'After the gym my legs hurt.' },
            { prompt: '¿Cuál es correcta?', options: ['Me duelo la espalda.', 'Me duele la espalda.', 'Me duele mi espalda.'], answer: 1, why: 'Me duele + artículo: la espalda.', en: 'Which one is correct?' },
            { prompt: 'En la puerta, Clara se quita ___ botas. (las botas = boots)', options: ['sus', 'las', 'los'], answer: 1, why: '«Se quita» ya dice de quién son; botas es femenino: las botas.', en: 'At the door, Clara takes off her boots.' },
            { prompt: '___ chaqueta es roja y la chaqueta de Sergio es negra.', options: ['Mi', 'Me', 'La me'], answer: 0, why: 'Describes con «es»: mi chaqueta.', en: 'My jacket is red and Sergio’s jacket is black.' },
            { prompt: '¿Cuál es correcta?', options: ['Antes de comer, nos lavamos nuestras manos.', 'Antes de comer, lavamos nos las manos.', 'Antes de comer, nos lavamos las manos.'], answer: 2, why: 'Nos lavamos + artículo: las manos.', en: 'Which one is correct?' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'rewrite', title: 'En la piscina y en el médico · At the pool and at the doctor’s', items: [
            { prompt: 'At the pool, I take off my shoes.', instruction: 'Escribe la frase en español. (at the pool = en la piscina; to take off = quitarse)', accept: ['En la piscina me quito los zapatos', 'En la piscina, me quito los zapatos', 'Me quito los zapatos en la piscina'] },
            { prompt: 'Doctor, my back hurts.', instruction: 'Escribe la frase en español. (back = la espalda)', accept: ['Doctor, me duele la espalda', 'Doctora, me duele la espalda', 'Me duele la espalda'] },
            { prompt: 'Your jacket is red.', instruction: 'Escribe la frase en español, con tú. (jacket = la chaqueta)', accept: ['Tu chaqueta es roja'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 036 · Identificar y describir un objeto con varias pistas', text: 'Ya sabes cuándo va el artículo y cuándo va mi, tu, su con la ropa y el cuerpo. En la clase 036 describes un objeto con varias pistas, para encontrarlo entre otros: «la bufanda gris, la grande, está en el sofá». Artículo, nombre, adjetivo y lugar, todo junto.', en: 'You now know when to use the article and when to use mi, tu, su with clothes and the body. In class 036 you describe an object with several clues so someone can find it among others: “the grey scarf, the big one, is on the sofa”. Article, noun, adjective and place, all together.', href: '/gramatica/describir-un-objeto', label: 'Ir a la clase 036' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te duele hoy y qué te pones para salir?». Respuesta esperada con me duele / me duelen + artículo y me pongo + artículo, y una frase con mi para describir una prenda. Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
