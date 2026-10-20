import type { LiveLesson } from '../types';

/**
 * Lesson 376 · A2 · Se impersonal introductorio: instrucciones (course unit G076).
 * One scene runs through the class: Elena Duarte runs a small hostel, La Ceiba,
 * in Santa Marta (Colombian coast). Hugo Ramírez, the new receptionist, makes
 * the reception signs with her and learns the breakfast recipe (arepas de
 * queso). Nadia, a guest who is learning Spanish, asks questions at reception
 * (Hugo uses usted with her). In the audio note Elena (Colombian voice, tú)
 * explains to Hugo how the arepas are made because she arrives late tomorrow.
 * Content: se + 3rd person for general instructions, rules and signs, with no
 * specific person: the verb agrees with the thing (se corta la cebolla / se
 * cortan los tomates; the noun may come first: las toallas se cambian); no
 * noun or an infinitive → singular (aquí se cena a las ocho; no se puede
 * fumar); ¿Cómo se dice…? Contrast: imperative to a specific person (class
 * 058: Hugo, corta la cebolla) and a sentence about a person (Elena corta la
 * cebolla); the reflexive se of class 031 (Hugo se lava las manos).
 * Mistakes: *se corta los tomates, *aquí se hablan español, *no se pueden
 * fumar, *aquí habla español (for a sign). Kept out on purpose: se + personal
 * «a», se puede(n) + infinitive + plural noun (only a tip), passive vs
 * impersonal se (class 119, B1). The infinitive style («No fumar») is in the
 * Ampliación.
 */
export const lesson: LiveLesson = {
  id: 376,
  level: 'A2',
  title: 'Se impersonal introductorio: instrucciones',
  subtitle: 'Explicar recetas, normas y carteles sin decir quién: «se corta la cebolla», «se cortan los tomates», «aquí no se puede fumar».',
  legend: [
    { tone: 'blue', label: 'SE + SINGULAR · se corta la cebolla, se habla español (one thing, or no thing)' },
    { tone: 'orange', label: 'SE + PLURAL · se cortan los tomates, se alquilan bicicletas (several things)' },
    { tone: 'teal', label: '(NO) SE PUEDE + infinitivo · normas y permisos (rules and permission)' },
    { tone: 'violet', label: 'PERSONA CONCRETA · Elena corta, Hugo, corta (a specific person)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Se corta, se cortan', coach: 'No importa quién: importa qué. It’s not about who, it’s about what.',
      steps: [
        { title: 'Los carteles del hostal · The hostel signs', blocks: [
          { kind: 'lead', text: 'Elena Duarte tiene un hostal pequeño en Santa Marta, en la costa de Colombia: el hostal **La Ceiba**. Hugo Ramírez es el nuevo recepcionista. Hoy preparan los carteles de la recepción y el menú del desayuno. En carteles, recetas e instrucciones, el español usa mucho una forma: **se + verbo**.', en: 'Elena Duarte runs a small hostel in Santa Marta, on the coast of Colombia: La Ceiba. Hugo Ramírez is the new receptionist. Today they are making the reception signs and the breakfast menu. On signs, in recipes and in instructions, Spanish uses one form a lot: se + verb.' },
          { kind: 'table', title: 'En la pared de la recepción · On the reception wall', head: ['Cartel', 'En inglés'], rows: [
            ['Aquí [[se habla|blue]] español.', 'Spanish spoken here.'],
            ['[[Se alquilan|orange]] bicicletas.', 'Bikes for rent.'],
            ['El desayuno [[se sirve|blue]] de 7:00 a 10:00.', 'Breakfast is served from 7 to 10.'],
            ['[[No se puede|teal]] fumar en las habitaciones.', 'No smoking in the rooms.'],
          ], note: 'Ningún cartel dice quién habla, quién alquila o quién sirve. No es importante: es información para todos.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada cartel en voz alta y tu alumno dice qué significa y dónde lo ve en su ciudad.', self: 'Lee los carteles en voz alta. ¿Dónde ves carteles así en tu ciudad? (Where do you see signs like these?)' } },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En el cartel «Se alquilan bicicletas», ¿quién alquila las bicicletas?', options: ['Los huéspedes.', 'No importa: el cartel da información para todos.', 'Hugo, y solo él.'], answer: 1, why: 'Con se no decimos quién lo hace. El cartel informa: hay bicicletas para alquilar.', en: 'On the sign “Bikes for rent”, who rents out the bikes?' },
            { prompt: '«No se puede fumar en las habitaciones» es…', options: ['una frase en pasado.', 'una norma para todos.', 'una pregunta de Elena.'], answer: 1, why: '«No se puede» + infinitivo expresa una norma: nadie puede fumar allí.', en: '“No smoking in the rooms” is…' },
          ] },
        ] },
        { title: 'Se + verbo: la acción sin persona · Se + verb: the action without a person', mascot: '/brand/mascot/studying.webp', coach: 'Una instrucción para todos. An instruction for everyone.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SE + VERBO', question: '¿Cómo se hace? ¿Qué se hace aquí?', en: 'Se + verb in the 3rd person: we talk about the action, not about who does it. Typical of recipes, signs, manuals and rules.', formula: ['se + verbo en 3.ª persona (él / ellos)', 'se corta · se habla · se sirve · se cierra'],
            meaning: 'Usamos **se** + verbo cuando no hablamos de una persona concreta: es una instrucción, una costumbre o una norma para todos. No importa **quién** lo hace; importa **qué** se hace. El verbo va siempre en **tercera persona**, como «él» o «ellos».',
            examples: [
              { es: 'Primero [[se corta|blue]] la cebolla.', en: 'First, the onion is chopped. / First, you chop the onion.' },
              { es: 'La recepción [[se cierra|blue]] a medianoche.', en: 'Reception closes at midnight.' },
              { es: '¿Cómo [[se dice|blue]] «towel» en español?', en: 'How do you say “towel” in Spanish?' },
            ],
            note: 'En inglés hay muchas traducciones: «you…», «people…», «is done», «-ing». En español, una sola forma: **se** + verbo.' },
          { kind: 'tip', icon: '💡', title: 'No es el «se» de «Hugo se levanta» · Not the reflexive se', text: 'En la clase 031 viste «Hugo **se** levanta a las seis»: allí hay una persona concreta (Hugo) y la acción vuelve a ella. En «**Se** corta la cebolla» no hay persona: es una instrucción general.', en: 'In class 031 you saw “Hugo se levanta a las seis”: there is a specific person (Hugo) and the action goes back to him. In “Se corta la cebolla” there is no person: it is a general instruction.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es una instrucción general, para todos?', options: ['Hugo, corta el pan.', 'Elena corta el pan.', 'Se corta el pan en rebanadas.'], answer: 2, why: '«Se corta» no dice quién: es una instrucción general. En las otras hay una persona: Elena o Hugo.', en: 'Which sentence is a general instruction, for everyone?' },
            { prompt: 'Nadia no sabe una palabra. Pregunta: «¿Cómo ___ "pillow" en español?»', options: ['dice se', 'se dice', 'se dicen'], answer: 1, why: 'Pregunta general por una palabra: ¿Cómo se dice…? Una palabra → singular.', en: 'Nadia doesn’t know a word: “How do you say ‘pillow’ in Spanish?”' },
          ] },
        ] },
        { title: '¿Se corta o se cortan? · Singular or plural?', mascot: '/autoestudio/mascot/noting.webp', coach: 'Mira la cosa. Look at the thing.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONCORDANCIA', question: '¿Una cosa o varias?', en: 'The verb agrees with the thing: one thing → singular verb; several things → plural verb (-n). The thing can go before or after the verb.', formula: ['se + verbo singular + una cosa', 'se + verbo plural (-n) + varias cosas'],
            meaning: 'El verbo **concuerda con la cosa** (el nombre): una cosa → singular (**se corta** la cebolla); varias cosas → plural (**se cortan** los tomates). La cosa puede ir después o antes del verbo: «Se cambian las toallas» = «Las toallas se cambian».',
            examples: [
              { es: '[[Se corta|blue]] la cebolla y [[se cortan|orange]] los tomates.', en: 'The onion is chopped and the tomatoes are chopped.' },
              { es: '[[Se vende|blue]] café de la sierra.', en: 'Coffee from the mountains for sale.' },
              { es: 'Las toallas [[se cambian|orange]] cada tres días.', en: 'Towels are changed every three days.' },
            ] },
          { kind: 'table', title: 'Una cosa o varias · One thing or several', head: ['Singular (una cosa)', 'Plural (varias cosas)'], rows: [
            ['[[se corta|blue]] **la cebolla**', '[[se cortan|orange]] **los tomates**'],
            ['[[se alquila|blue]] **una habitación**', '[[se alquilan|orange]] **bicicletas**'],
            ['[[se vende|blue]] **café**', '[[se venden|orange]] **mapas**'],
            ['[[se sirve|blue]] **el desayuno**', '[[se sirven|orange]] **las arepas**'],
            ['[[se cambia|blue]] **la sábana**', '[[se cambian|orange]] **las toallas**'],
          ], note: 'Truco: pregunta «¿qué se corta?». La cebolla (una) → se corta. Los tomates (varios) → se cortan.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Menú del hostal: «___ jugos naturales».', options: ['Se vendan', 'Se vende', 'Se venden'], answer: 2, why: 'Jugos: varias cosas → se venden.', en: 'Hostel menu: “Fresh juices for sale.”' },
            { prompt: 'Receta: «Primero ___ la harina con agua».', options: ['se mezclan', 'mezcla', 'se mezcla'], answer: 2, why: 'La harina: una cosa → se mezcla.', en: 'Recipe: “First, mix the flour with water.”' },
            { prompt: 'Cartel: «Las llaves ___ en recepción».', options: ['se dejan', 'se deja', 'dejan'], answer: 0, why: 'Las llaves van antes, pero mandan igual: varias cosas → se dejan.', en: 'Sign: “Keys are left at reception.” / “Leave keys at reception.”' },
          ] },
        ] },
        { title: 'Se puede, no se puede · Allowed, not allowed', mascot: '/brand/mascot/speaking.webp', coach: 'Normas claras. Clear rules.', blocks: [
          { kind: 'concept', tone: 'teal', label: '(NO) SE PUEDE + INFINITIVO', question: '¿Está permitido?', en: 'Rules and permission: se puede (it is allowed / possible) and no se puede (it is not allowed), followed by an infinitive. With an infinitive alone, or with no thing at all, the verb is singular.', formula: ['(no) se puede + infinitivo', 'se puede pagar · no se puede fumar'],
            meaning: 'Para normas y permisos usamos **se puede** y **no se puede** + **infinitivo**. Con un infinitivo solo, el verbo va en **singular**. También va en singular cuando no hay ninguna cosa: «Aquí **se cena** a las ocho», «En este barrio **se vive** muy bien».',
            examples: [
              { es: '[[No se puede|teal]] fumar en las habitaciones.', en: 'Smoking is not allowed in the rooms.' },
              { es: '¿[[Se puede|teal]] pagar con tarjeta?', en: 'Can I pay by card? / Is paying by card possible?' },
              { es: 'En la terraza [[se puede|teal]] comer, pero en la cocina no.', en: 'You can eat on the terrace, but not in the kitchen.' },
            ] },
          { kind: 'tip', icon: '🔎', title: 'Infinitivo + varias cosas · Infinitive + several things', text: 'A veces, después del infinitivo hay varias cosas: «Se **pueden** alquilar bicicletas en recepción». Lo más recomendado es el plural, pero también se oye «se puede alquilar bicicletas». En esta clase usamos **se puede** con el infinitivo solo (se puede pagar, no se puede entrar).', en: 'Sometimes several things come after the infinitive: “Se pueden alquilar bicicletas en recepción.” The plural is the most recommended form, but you will also hear “se puede alquilar bicicletas”. In this class we use se puede with the infinitive alone (se puede pagar, no se puede entrar).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cartel de la piscina: «No ___ nadar después de las nueve».', options: ['se puede', 'se pueden', 'puede se'], answer: 0, why: 'Infinitivo (nadar) y ninguna cosa: singular, se puede.', en: 'Pool sign: “No swimming after nine.”' },
            { prompt: 'Nadia pregunta: «¿___ usar la cocina por la noche?»', options: ['Puede se', 'Se pueden', 'Se puede'], answer: 2, why: 'Se puede + infinitivo: ¿Se puede usar…? «La cocina» es una cosa: singular.', en: 'Nadia asks: “Can guests use the kitchen at night?”' },
          ] },
        ] },
        { title: '¿Para Hugo o para todos? · For Hugo or for everyone?', mascot: '/brand/mascot/seated.webp', coach: '¿Hay una persona? Is there a person?', blocks: [
          { kind: 'compare', title: 'Tres frases con cortar · Three sentences with cortar', columns: [
            { tone: 'violet', label: 'UNA PERSONA · Elena', sentence: 'Elena [[corta|violet]] la cebolla en la cocina.', idea: 'Describe lo que hace una persona concreta.', en: 'Elena is chopping the onion in the kitchen.' },
            { tone: 'violet', label: 'A UNA PERSONA · imperativo (058)', sentence: 'Hugo, [[corta|violet]] la cebolla, por favor.', idea: 'Una instrucción directa a Hugo.', en: 'Hugo, chop the onion, please.' },
            { tone: 'blue', label: 'PARA TODOS · se', sentence: '[[Se corta|blue]] la cebolla en trozos pequeños.', idea: 'La receta, el cartel, el manual: para cualquier persona.', en: 'The onion is chopped into small pieces.' },
          ] },
          { kind: 'decide', title: 'Vas a dar una instrucción · You are going to give an instruction', steps: [
            { q: '¿Hablas directamente con una persona (Hugo, una clienta)?', yes: 'Usa el **imperativo**: «Corta la cebolla», «Pase, por favor».', no: 'next' },
            { q: '¿Es una receta, una norma o un cartel para todos?', yes: 'Usa **se** + verbo. Sigue a la última pregunta.', no: 'Habla de la persona: «Elena corta la cebolla».' },
            { q: '¿Hay varias cosas (los tomates, bicicletas)?', yes: 'Verbo en **plural**: «Se cortan los tomates».', no: 'Verbo en **singular**: «Se corta la cebolla», «No se puede fumar».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elena escribe la receta en la pizarra de la cocina: «___ el queso».', options: ['Elena ralla', 'Hugo, ralla', 'Se ralla'], answer: 2, why: 'Una receta en la pizarra es para todos: se ralla el queso.', en: 'Elena writes the recipe on the kitchen board: “Grate the cheese.”' },
            { prompt: 'Elena habla con Hugo, que está a su lado: «Hugo, ___ la puerta, por favor».', options: ['se abren', 'se abre', 'abre'], answer: 2, why: 'Habla directamente con Hugo: imperativo de tú, abre.', en: 'Elena talks to Hugo, who is next to her: “Hugo, open the door, please.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Una cosa o varias? One thing or several?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla antes de ver la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Se corta los tomates en cuatro trozos.', right: 'Se cortan los tomates en cuatro trozos.', why: 'Los tomates son varios: el verbo va en plural, se cortan. (Plural thing → plural verb.)' },
            { wrong: 'Aquí se hablan español.', right: 'Aquí se habla español.', why: 'Español es un idioma: singular, se habla. (One language → singular.)' },
            { wrong: 'En las habitaciones no se pueden fumar.', right: 'En las habitaciones no se puede fumar.', why: '«En las habitaciones» es el lugar, no la cosa. Detrás hay un infinitivo solo: se puede. (Infinitive alone → singular.)' },
            { wrong: 'Cartel: «Aquí habla español».', right: 'Cartel: «Aquí se habla español».', why: 'Sin «se», la frase habla de una persona (él o ella habla). En un cartel para todos: se habla. (Without se, it is about one person.)' },
            { wrong: 'Se vende arepas en la terraza.', right: 'Se venden arepas en la terraza.', why: 'Arepas: varias cosas → se venden. (Plural thing → plural verb.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cartel de la tienda del hostal: «___ gorras y sombreros».', options: ['Se vende', 'Se venden', 'Se venda'], answer: 1, why: 'Gorras y sombreros: varias cosas → se venden.', en: 'Hostel shop sign: “Caps and hats for sale.”' },
            { prompt: '«En la playa no ___ entrar con perros».', options: ['se pueden', 'puede se', 'se puede'], answer: 2, why: 'Infinitivo (entrar): se puede. «Con perros» no es la cosa del verbo.', en: '“Dogs are not allowed on the beach.” (lit. you can’t go in with dogs)' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres normas de su casa o de su trabajo con se («En mi casa se cena a las ocho», «No se puede…») y una cosa que se vende cerca de su casa.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Carteles y arepas', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Primer día en la recepción · First day at reception', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y Nadia; tu alumno es Hugo. Después tu alumno toca cada forma marcada y dice: ¿singular, plural o se puede?', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di: ¿una cosa, varias cosas o una norma? (One thing, several things or a rule?)' } },
          { kind: 'explore', title: 'Carteles nuevos', setting: 'Las ocho de la mañana en la recepción del hostal La Ceiba. Elena y Hugo hacen los carteles y el menú. Después llega Nadia, una huésped que aprende español. (8 a.m. at the hostel reception.)', lines: [
            { who: 'Elena', text: 'Hugo, hoy hacemos los carteles nuevos. El primero es fácil: «Aquí [[se habla|blue]] español».', en: 'Hugo, today we’re making the new signs. The first one is easy: “Spanish spoken here.”' },
            { who: 'Hugo', text: '¿Y pongo también «[[Se alquilan|orange]] bicicletas»? Ya tenemos seis nuevas.', en: 'Shall I also put “Bikes for rent”? We’ve got six new ones now.' },
            { who: 'Elena', text: 'Sí, claro. Y otro para las habitaciones: «[[No se puede|teal]] fumar».', en: 'Yes, of course. And another one for the rooms: “No smoking.”' },
            { who: 'Hugo', text: '¿Y en la terraza [[se puede|teal]] fumar?', en: 'And can people smoke on the terrace?' },
            { who: 'Elena', text: 'En la terraza sí. Ahora, el menú. Mira la receta de las arepas: primero [[se mezcla|blue]] la harina con agua tibia y sal.', en: 'On the terrace, yes. Now, the menu. Look at the arepa recipe: first you mix the flour with warm water and salt.' },
            { who: 'Hugo', text: '¿Y el queso? Son arepas de queso, ¿no?', en: 'And the cheese? They’re cheese arepas, aren’t they?' },
            { who: 'Elena', text: 'Sí. [[Se pone|blue]] un poco de queso rallado en la masa. Después [[se forman|orange]] las arepas con las manos.', en: 'Yes. You put a little grated cheese in the dough. Then you shape the arepas with your hands.' },
            { who: 'Hugo', text: '¿Y cuánto tiempo [[se dejan|orange]] en la plancha?', en: 'And how long do you leave them on the griddle?' },
            { who: 'Elena', text: 'Unos cinco minutos por cada lado. Y recuerda: el café [[se sirve|blue]] en la terraza, no en la cocina.', en: 'About five minutes on each side. And remember: coffee is served on the terrace, not in the kitchen.' },
            { who: 'Nadia', text: 'Buenos días. Perdón, ¿aquí [[se puede|teal]] pagar con tarjeta?', en: 'Good morning. Excuse me, can I pay by card here?' },
            { who: 'Hugo', text: 'Sí, claro, con tarjeta o en efectivo. Y si quiere una bicicleta, las bicicletas [[se devuelven|orange]] antes de las ocho de la noche.', en: 'Yes, of course, by card or in cash. And if you want a bike, bikes are returned before eight in the evening.' },
            { who: 'Nadia', text: '¡Perfecto! Y veo el cartel: aquí se habla español. ¡Mejor para practicar!', en: 'Perfect! And I see the sign: Spanish spoken here. All the better for practising!' },
          ], notes: {
            'se habla': 'Hablar en singular: **se habla**, porque el español es un idioma (una cosa). No importa quién lo habla: es información para todos.',
            'Se alquilan': 'Alquilar en plural: **se alquilan**, porque las bicicletas son varias. Un cartel muy típico.',
            'No se puede': '**No se puede** + infinitivo (fumar): una norma. Con un infinitivo solo, singular.',
            'se puede': '**Se puede** + infinitivo: ¿está permitido?, ¿es posible? Es una pregunta muy útil: «¿Se puede pagar con tarjeta?».',
            'se mezcla': 'Mezclar en singular: **se mezcla**, porque la harina es una cosa. Es el lenguaje típico de las recetas.',
            'Se pone': 'Poner en singular: **se pone** un poco de queso. Una cosa → singular.',
            'se forman': 'Formar en plural: **se forman** las arepas. Varias cosas → plural.',
            'se dejan': 'Dejar en plural: **se dejan**, porque Hugo pregunta por las arepas (ellas: varias cosas).',
            'se sirve': 'Servir (e → i) en singular: **se sirve** el café. Igual que «pide», el cambio de vocal se queda: se sirve, se sirven.',
            'se devuelven': 'Devolver (o → ue) en plural: **se devuelven**, porque las bicicletas van antes y son varias. Hugo no dice quién las devuelve: es la norma del hostal.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Dónde se puede fumar en el hostal?', options: ['En la cocina.', 'En las habitaciones.', 'En la terraza.'], answer: 2, why: 'Elena dice: «En la terraza sí». En las habitaciones no se puede.', en: 'Where can people smoke at the hostel?' },
            { prompt: '¿Qué se pone en la masa de las arepas?', options: ['Café.', 'Mantequilla y azúcar.', 'Un poco de queso rallado.'], answer: 2, why: '«Se pone un poco de queso rallado en la masa».', en: 'What goes into the arepa dough?' },
            { prompt: '¿Cuándo se devuelven las bicicletas?', options: ['Después de cinco minutos.', 'Antes de las ocho de la noche.', 'A las ocho de la mañana.'], answer: 1, why: 'Hugo dice: «las bicicletas se devuelven antes de las ocho de la noche».', en: 'When are the bikes returned?' },
          ] },
        ] },
        { title: '¿Una cosa, varias o una norma? · One thing, several or a rule?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases del hostal · More hostel sentences', categories: [
            { id: 'una', label: 'Una cosa · se + singular', tone: 'blue' },
            { id: 'varias', label: 'Varias cosas · se + plural', tone: 'orange' },
            { id: 'norma', label: 'Norma · (no) se puede + infinitivo', tone: 'teal' },
          ], items: [
            { text: 'Se lavan las sábanas los lunes.', answer: 'varias', why: 'Las sábanas: varias cosas → se lavan.' },
            { text: 'Se limpia la cocina a las once.', answer: 'una', why: 'La cocina: una cosa → se limpia.' },
            { text: 'No se puede poner música alta por la noche.', answer: 'norma', why: 'No se puede + infinitivo (poner): una norma.' },
            { text: 'Se venden mapas de la ciudad.', answer: 'varias', why: 'Mapas: varias cosas → se venden.' },
            { text: 'Se puede dejar la maleta en recepción.', answer: 'norma', why: 'Se puede + infinitivo (dejar): un permiso.' },
            { text: 'El jugo se prepara con fruta fresca.', answer: 'una', why: 'El jugo va antes: una cosa → se prepara.' },
            { text: 'Las arepas se sirven calientes.', answer: 'varias', why: 'Las arepas van antes: varias cosas → se sirven.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno cambia tres frases de singular a plural o al revés: «Se vende un mapa» → «Se venden mapas»; «Se lavan las sábanas» → «Se lava la sábana».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero: ¿qué cosa? ¿Una o varias? First: which thing? One or several?',
      steps: [
        { title: 'El segundo día de Hugo · Hugo’s second day', blocks: [
          { kind: 'choice', items: [
            { context: 'Un cartel nuevo en la recepción. (A new sign at reception.)', prompt: '___ toallas para la playa.', options: ['Se alquila', 'Se alquilan', 'Alquilan se'], answer: 1, why: 'Toallas: varias cosas → se alquilan. «Se» va delante del verbo.', en: 'Beach towels for rent.' },
            { context: 'La hoja de información de la habitación. (The room information sheet.)', prompt: 'El desayuno ___ de siete a diez.', options: ['se sirve', 'se sirven', 'sirve'], answer: 0, why: 'El desayuno: una cosa → se sirve. Sin «se», «sirve» habla de una persona concreta.', en: 'Breakfast is served from seven to ten.' },
            { context: 'Las normas del hostal. (The hostel rules.)', prompt: 'Después de las once de la noche no ___ poner música alta.', options: ['se puede', 'se pueden', 'puede se'], answer: 0, why: 'No se puede + infinitivo (poner). «Música» es una cosa: todo en singular.', en: 'No loud music after eleven at night.' },
            { context: 'La receta de la limonada de la terraza, escrita con se. (The terrace lemonade recipe, written with se.)', prompt: 'Primero ___ los limones por la mitad.', options: ['se corta', 'se cortan', 'se corte'], answer: 1, why: 'Los limones: varias cosas → se cortan. «Corte» es el imperativo de usted (clase 058), no la forma de la receta.', en: 'First, cut the lemons in half.' },
            { context: 'Nadia en la cocina, con la receta. (Nadia in the kitchen.)', prompt: '¿Cómo ___ «to squeeze» en español?', options: ['se dicen', 'se dice', 'dice se'], answer: 1, why: 'Pregunta por una palabra: ¿Cómo se dice…? Una palabra → singular. (Se dice «exprimir».)', en: 'How do you say “to squeeze” in Spanish?' },
          ] },
        ] },
        { title: '¿Se vende o se venden? · Singular or plural?', blocks: [
          { kind: 'classify', title: 'Elige la forma correcta para el hueco · Choose the form for the gap', categories: [
            { id: 'sing', label: 'se + singular (se vende)', tone: 'blue' },
            { id: 'plur', label: 'se + plural (se venden)', tone: 'orange' },
          ], items: [
            { text: '___ arepas de queso. (vender)', answer: 'plur', why: 'Arepas: varias cosas → se venden.' },
            { text: '___ café de la sierra. (vender)', answer: 'sing', why: 'Café: una cosa → se vende.' },
            { text: '___ las sábanas cada semana. (cambiar)', answer: 'plur', why: 'Las sábanas: varias → se cambian.' },
            { text: 'En esta ciudad ___ muy bien. (comer)', answer: 'sing', why: 'No hay ninguna cosa: singular → se come.' },
            { text: 'No ___ entrar con mascotas. (poder)', answer: 'sing', why: 'Infinitivo (entrar): se puede, en singular.' },
            { text: 'En recepción ___ dos idiomas. (hablar)', answer: 'plur', why: 'Dos idiomas: plural → se hablan.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Las toallas se cambia cada tres días.', ok: false, options: ['Las toallas se cambias cada tres días.', 'Las toallas se cambian cada tres días.', 'Las toallas cambian se cada tres días.'], answer: 1, why: 'Las toallas van antes, pero mandan igual: varias cosas → se cambian. «Se» va delante del verbo.' },
            { sentence: '¿Se puede usar la cocina por la noche?', ok: true, why: 'Correcta: se puede + infinitivo (usar). La cocina es una cosa: singular.' },
            { sentence: 'En el hostal se aceptan perros pequeños.', ok: true, why: 'Correcta: perros pequeños, varios → se aceptan.' },
            { sentence: 'Para la limonada se necesita cuatro limones.', ok: false, options: ['Para la limonada necesita se cuatro limones.', 'Para la limonada se necesitas cuatro limones.', 'Para la limonada se necesitan cuatro limones.'], answer: 2, why: 'Cuatro limones: varias cosas → se necesitan. El verbo va en tercera persona (no «necesitas»).' },
            { sentence: 'En la terraza se sirven el café.', ok: false, options: ['En la terraza sirven se el café.', 'En la terraza se sirves el café.', 'En la terraza se sirve el café.'], answer: 2, why: 'El café: una cosa → se sirve.' },
            { sentence: 'El arroz se cocina veinte minutos.', ok: true, why: 'Correcta: el arroz va antes y es una cosa → se cocina.' },
            { sentence: 'Hugo se lava las manos antes de cocinar.', ok: true, why: 'Correcta, pero es otro «se»: el reflexivo de la clase 031. Hugo es una persona concreta y se lava a sí mismo.' },
          ] },
        ] },
        { title: 'En la recepción · At reception', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Nadia pregunta · Nadia asks', lines: [
            { who: 'Nadia', text: 'Hola, Hugo. Una pregunta: ¿dónde ___ el autobús para la playa?', options: ['toma se', 'se toman', 'se toma'], answer: 2, why: 'El autobús: una cosa → se toma. Nadia pregunta en general, no por una persona.' },
            { who: 'Hugo', text: 'En la esquina, frente a la panadería. Y en recepción ___ mapas de la ciudad, si quiere.', options: ['venden se', 'se venden', 'se vende'], answer: 1, why: 'Mapas: varias cosas → se venden. «Se» va delante del verbo.' },
            { who: 'Nadia', text: '¡Genial! ¿Y ___ dejar la maleta aquí hasta la tarde?', options: ['se pueden', 'puede se', 'se puede'], answer: 2, why: 'Se puede + infinitivo (dejar): un permiso, en singular.' },
            { who: 'Hugo', text: 'Sí, claro. Las maletas ___ en esta sala. Aquí tiene la llave.', options: ['guardan se', 'se guarda', 'se guardan'], answer: 2, why: 'Las maletas: varias cosas → se guardan.' },
            { who: 'Nadia', text: '¡Perfecto, muchas gracias! Hasta la tarde.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['habla', 'Aquí', 'español', 'se'], accept: ['Aquí se habla español', 'Se habla español aquí'], en: 'Spanish spoken here.' },
            { tiles: ['puede', 'No', 'fumar', 'se', 'en', 'las', 'habitaciones'], accept: ['No se puede fumar en las habitaciones', 'En las habitaciones no se puede fumar'], en: 'No smoking in the rooms.' },
            { tiles: ['arepas', 'Las', 'se', 'con', 'sirven', 'mantequilla'], accept: ['Las arepas se sirven con mantequilla', 'Se sirven las arepas con mantequilla'], en: 'The arepas are served with butter.' },
            { tiles: ['alquilan', 'En', 'se', 'recepción', 'bicicletas'], accept: ['En recepción se alquilan bicicletas', 'Se alquilan bicicletas en recepción'], en: 'Bikes for rent at reception.' },
          ] },
        ] },
        { title: 'De Hugo a la receta · From Hugo to the recipe', blocks: [
          { kind: 'lead', text: 'Elena da instrucciones a Hugo con tú. Ahora Hugo las escribe en la receta para todos, sin persona.', en: 'Elena gives Hugo instructions with tú. Now Hugo writes them in the recipe for everyone, with no person.' },
          { kind: 'rewrite', title: 'Para la receta · For the recipe', items: [
            { prompt: 'Hugo, corta la cebolla en trozos pequeños.', instruction: 'Escribe la instrucción para la receta: se + verbo. Empieza con «Se». (Start with “Se”.)', accept: ['Se corta la cebolla en trozos pequeños'] },
            { prompt: 'Hugo, lava los vasos con agua caliente.', instruction: 'Para la receta, sin persona. Cuidado: ¿una cosa o varias? (One thing or several?)', accept: ['Se lavan los vasos con agua caliente', 'Los vasos se lavan con agua caliente'] },
            { prompt: 'Hugo, mezcla el jugo con agua y azúcar.', instruction: 'Para la receta, sin persona. (For the recipe, no person.)', accept: ['Se mezcla el jugo con agua y azúcar', 'El jugo se mezcla con agua y azúcar'] },
            { prompt: 'Hugo, sirve las arepas calientes.', instruction: 'Para la receta, sin persona. (For the recipe, no person.)', accept: ['Se sirven las arepas calientes', 'Las arepas se sirven calientes'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno explica cómo se prepara su bebida favorita en tres pasos, sin persona: «Primero se calienta el agua…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Elena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un audio para Hugo · An audio message for Hugo', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota los pasos de la receta en orden, con la forma que oye (se mezcla, se amasa…). Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota los pasos de la receta en orden. (Listen once for the gist, then note the steps in order.)' } },
          { kind: 'listen', title: 'Las arepas de mañana', channel: 'NOTA DE VOZ · DE ELENA PARA HUGO', src: '/audio/grammar-live/376.mp3',
            before: 'Elena llega tarde mañana y Hugo prepara solo el desayuno. Elena le manda un audio con la receta. ¿Qué pasos crees que da? ¿Vas a oír «se mezcla» o «mezcla, Hugo»? (Which steps do you expect? Will you hear se forms or commands?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Elena pide a Hugo comprar queso.', 'Elena cancela el desayuno de mañana.', 'Elena explica cómo se hacen las arepas y dónde se sirve el desayuno.'], answer: 2, why: 'Da los pasos de la receta y dice que el desayuno se sirve en la terraza.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Por qué Hugo prepara el desayuno?', options: ['Porque Elena está enferma.', 'Porque hay muchos huéspedes.', 'Porque Elena llega a las diez.'], answer: 2, why: '«Mañana llego tarde, a las diez».', en: 'Why is Hugo making breakfast?' },
              { prompt: '¿Qué se mezcla con la harina?', options: ['Agua tibia, sal y un poco de queso.', 'Solo agua.', 'Leche y azúcar.'], answer: 0, why: '«Se mezcla la harina con agua tibia, sal y un poco de queso».', en: 'What is mixed with the flour?' },
              { prompt: '¿Cuánto tiempo se asan las arepas?', options: ['Diez minutos en total, sin darles la vuelta.', 'Cinco minutos por cada lado.', 'Tres minutos.'], answer: 1, why: '«Las arepas se asan cinco minutos por cada lado». Tres minutos es para amasar.', en: 'How long are the arepas cooked?' },
              { prompt: '¿Por qué no se desayuna en la cocina?', options: ['Porque en la cocina no se puede comer.', 'Porque la cocina se cierra a las siete.', 'Porque hace calor.'], answer: 0, why: '«En la cocina no se puede comer, ya sabes».', en: 'Why don’t guests have breakfast in the kitchen?' },
            ],
            transcript: 'Hola, Hugo, buenas noches. Te mando este audio porque mañana llego tarde, a las diez, y tú preparas el desayuno. Es fácil, de verdad. La receta es así: primero [[se mezcla|blue]] la harina con agua tibia, sal y un poco de queso. [[Se amasa|blue]] bien, unos tres minutos, y después [[se forman|orange]] bolitas y se aplastan con la mano. Pon la plancha a fuego medio. Las arepas [[se asan|orange]] cinco minutos por cada lado y [[se sirven|orange]] calientes, con mantequilla. Ah, y abre la terraza a las siete, porque el desayuno [[se sirve|blue]] allí. En la cocina [[no se puede|teal]] comer, ya sabes. ¡Mil gracias, Hugo! Nos vemos mañana.',
            reply: { teacher: 'Tú eres Elena. Tu alumno es Hugo y responde al audio: da las gracias, repite dos pasos de la receta con se y hace una pregunta («¿Cuánta sal se pone?»).', self: 'Responde a Elena en voz alta como Hugo: da las gracias, repite dos pasos con se y haz una pregunta. (Answer as Hugo: thank her, repeat two steps with se, ask a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú explicas cómo se hace', coach: 'Sin persona, para todos. No person, for everyone.',
      steps: [
        { title: 'En el hostal y en tu vida · At the hostel and in your life', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de huésped, de Hugo o de un amigo curioso y haces las preguntas de seguimiento. Tu alumno responde con se: se puede, se sirve, se cortan…', self: 'Lee la situación y responde en voz alta. Antes de cada verbo, mira la cosa: ¿una o varias? (Before each verb, look at the thing: one or several?)' } },
          { kind: 'talk', cards: [
            { q: 'Tú eres Hugo. Llega un huésped nuevo. Explícale las normas del hostal. · You are Hugo. Explain the hostel rules to a new guest.', followUps: ['¿Se puede fumar en la terraza? (Can people smoke on the terrace?)', '¿A qué hora se sirve el desayuno? (What time is breakfast served?)'], phrases: ['Aquí [[no se puede|teal]]…', 'En la terraza [[se puede|teal]]…', 'El desayuno [[se sirve|blue]] de… a…'], hint: 'Normas: (no) se puede + infinitivo. Horarios: se sirve, se cierra.', example: 'Bienvenido. En las habitaciones no se puede fumar, pero en la terraza sí se puede. El desayuno se sirve de siete a diez y la puerta se cierra a medianoche.', next: 'Ahora, la lavadora.' },
            { q: 'Un huésped no sabe usar la lavadora. Explícale cómo se usa, en cuatro pasos. · Explain how the washing machine works, in four steps.', followUps: ['¿Cuánto jabón se pone? (How much soap do you put in?)', '¿Y la ropa blanca? (And white clothes?)'], phrases: ['Primero [[se pone|blue]] la ropa…', 'Después [[se cierra|blue]] la puerta y [[se elige|blue]]…', 'Al final [[se presiona|blue]] el botón…'], hint: 'Un manual: se + verbo, paso a paso. Elegir: se elige (e → i).', example: 'Es fácil. Primero se pone la ropa en la lavadora. Después se pone un poco de jabón aquí y se cierra bien la puerta. Luego se elige el programa y al final se presiona este botón.', teacher: 'Si tu alumno usa el imperativo («Pon la ropa»), no es un error: habla con una persona. Después tu alumno da la versión de manual, con se.' },
            { q: '¿Cómo se prepara un plato típico de tu país o de tu familia? Explica la receta sin persona. · How is a typical dish made? Explain it with se.', followUps: ['¿Qué ingredientes se necesitan? (What ingredients do you need?)', '¿Con qué se sirve? (What is it served with?)'], phrases: ['[[Se necesitan|orange]]…', 'Primero [[se cortan|orange]]… / [[se corta|blue]]…', '[[Se sirve|blue]] con… / [[Se sirven|orange]] con…'], hint: 'Mira la cosa: un ingrediente → se corta; varios → se cortan.', example: 'Para el guacamole se necesitan dos aguacates, una cebolla pequeña, un poco de cilantro y un limón. Primero se aplastan los aguacates con un tenedor. Después se pica la cebolla muy fina. Al final, se mezcla todo con el cilantro, sal y jugo de limón.', next: 'Ahora, las normas de tu mundo.' },
            { q: 'En tu trabajo, en tu escuela o en tu biblioteca: ¿qué se puede hacer y qué no se puede hacer? · At work, school or the library: what can and can’t people do?', followUps: ['¿Se puede comer allí? (Can people eat there?)', '¿Se puede hablar por teléfono? (Can people talk on the phone?)'], phrases: ['En mi trabajo [[se puede|teal]]…', '[[No se puede|teal]]…', 'Los libros [[se devuelven|orange]]…'], hint: 'Con un infinitivo solo: se puede, en singular.', example: 'En la biblioteca de mi barrio se puede estudiar y usar internet gratis. No se puede comer ni hablar por teléfono en las salas. Los libros se devuelven en dos semanas.' },
            { q: '¿Qué idiomas se hablan en tu ciudad? ¿Qué se come en las fiestas de tu familia? · Which languages are spoken in your city? What do people eat at your family celebrations?', followUps: ['¿Se habla inglés en las tiendas? (Is English spoken in shops?)', '¿Se baila en las fiestas? (Do people dance at parties?)'], phrases: ['En mi ciudad [[se habla|blue]]… / [[se hablan|orange]]…', 'En las fiestas [[se come|blue]]… / [[se comen|orange]]…'], hint: 'Un idioma → se habla; dos idiomas → se hablan. Sin cosa: se baila, se canta.', example: 'En mi ciudad se habla inglés, pero también se hablan muchos otros idiomas. En las fiestas de mi familia se comen los platos de mi abuela y se baila mucho.', next: 'Ahora, el cartel de la puerta.' },
            { q: 'Tú eres Elena. Hugo prepara un cartel para la puerta del hostal. Decide con él qué se escribe. · You are Elena. Decide with Hugo what goes on the door sign.', followUps: ['¿Ponemos también los precios? (Shall we put the prices too?)', '¿Y el horario de la recepción? (And the reception hours?)'], phrases: ['[[Se alquilan|orange]]…', '[[Se venden|orange]]…', 'Aquí [[se habla|blue]]…'], hint: 'Un cartel es corto: se + verbo + cosa. Y a Hugo le hablas con tú: escribe, pon.', example: 'Hugo, escribe: «Aquí se habla español. Se alquilan bicicletas. Se venden mapas de la ciudad». Y abajo pon: «La recepción se cierra a medianoche».', teacher: 'Fíjense en la mezcla natural: imperativo para Hugo (escribe, pon) y se para el cartel.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú eres Hugo y explicas las normas y la receta, a veces con un error («se vende arepas»). Tu alumno es el huésped, pregunta con «¿Se puede…?» y corrige los errores.', self: 'Ahora al revés: haz tú las preguntas en voz alta («¿Se puede…?», «¿Cómo se…?») y después respóndelas. (Ask the questions yourself, then answer them.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Información para los huéspedes', coach: 'Claro, corto y para todos. Clear, short, for everyone.',
      steps: [
        { title: 'La hoja de la recepción · The reception info sheet', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada forma con se: ¿una cosa o varias?', self: 'Escribe tu hoja y toca «Revisar mi texto». Después mira cada «se»: ¿una cosa o varias? (Check each se: one thing or several?)' } },
          { kind: 'write', title: 'Información para los huéspedes · Information for guests', situation: 'Eres Hugo. Elena te pide una hoja de información para la pared de la recepción: para los huéspedes nuevos, con las normas, los servicios y cómo se usa una cosa del hostal. (You are Hugo. Elena asks you for an information sheet for the reception wall: for new guests, with rules, services and how to use something in the hostel.)', task: [
            'Escribe dos normas con «no se puede» + infinitivo. (Two rules with no se puede.)',
            'Escribe dos servicios con se + plural: se alquilan…, se venden… (Two services, plural.)',
            'Explica cómo se usa una cosa del hostal en tres pasos: primero, después, al final. (How to use something, in three steps.)',
            'Da un horario con se: el desayuno se sirve…, la recepción se cierra… (One timetable with se.)',
            'Saluda a los huéspedes al principio y firma al final. (Greet the guests and sign.)',
          ], starters: ['¡Bienvenidos al hostal La Ceiba!', 'En las habitaciones no se puede…', 'En recepción se alquilan…', '¿Cómo se usa la lavadora? Primero se…', 'El desayuno se sirve…', 'Hugo, recepción'],
            words: ['se puede', 'no se puede', 'se alquilan', 'se venden', 'se sirve', 'se cierra', 'se pone', 'se elige', 'primero', 'después', 'al final'],
            model: '¡Bienvenidos al hostal La Ceiba! Aquí tienen información útil. El desayuno [[se sirve|blue]] en la terraza de siete a diez. En recepción [[se alquilan|orange]] bicicletas y [[se venden|orange]] mapas de la ciudad. En las habitaciones [[no se puede|teal]] fumar ni comer. Después de las once de la noche [[no se puede|teal]] poner música alta. ¿Cómo se usa la lavadora? Primero [[se pone|blue]] la ropa y [[se cierra|blue]] bien la puerta. Después [[se elige|blue]] el programa. Al final, [[se presiona|blue]] el botón verde. Las toallas [[se cambian|orange]] cada tres días. ¿Preguntas? Estamos en recepción. Hugo',
            minWords: 60,
            checks: [
              { label: 'Una norma con «no se puede» + infinitivo (a rule)', pattern: '(?<!\\p{L})no\\s+se\\s+puede\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Escribe una norma: «En las habitaciones no se puede fumar».' },
              { label: 'Una forma de se en plural: se alquilan, se venden… (se + plural)', pattern: '(?<!\\p{L})se\\s+\\p{L}+(?:an|en)(?!\\p{L})', tip: 'Para varias cosas, el verbo va en plural: «Se alquilan bicicletas», «Se venden mapas».' },
              { label: 'Pasos en orden: primero… (steps in order)', pattern: '(?<!\\p{L})primero(?!\\p{L})', tip: 'Ordena los pasos: «Primero se pone la ropa… Después se elige el programa…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})se\\s+(?:vende|alquila|corta|cambia|lava|sirve|necesita|ofrece|limpia)\\s+(?:los|las|\\p{L}+s\\s+(?:de|para|en)\\s)', why: '¿Hay varias cosas después del verbo? Entonces el verbo va en plural: se ven**den** mapas, se cam**bian** las toallas. (Si es una persona que se lava las manos, está bien: es otro «se».)' },
              { pattern: '(?<!\\p{L})se\\s+pueden\\s+(?:fumar|entrar|salir|nadar|comer|beber)(?=\\s*(?:[.,;!]|$|(?:aquí|en|después|antes|con|por)(?!\\p{L})))', why: 'Con un infinitivo solo, el verbo va en singular: **no se puede** fumar, se puede entrar.' },
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
            { tone: 'blue', label: 'SE + SINGULAR', formula: 'se + verbo (él) + una cosa / sin cosa', example: 'Se corta la cebolla. Aquí se habla español. Aquí se cena a las ocho.', caption: 'una cosa, o ninguna', en: 'one thing, or no thing at all → singular verb' },
            { tone: 'orange', label: 'SE + PLURAL', formula: 'se + verbo (ellos) + varias cosas', example: 'Se cortan los tomates. Las toallas se cambian cada tres días.', caption: 'varias cosas, antes o después del verbo', en: 'several things, before or after the verb → plural verb (-n)' },
            { tone: 'teal', label: '(NO) SE PUEDE', formula: '(no) se puede + infinitivo', example: 'No se puede fumar. ¿Se puede pagar con tarjeta?', caption: 'normas y permisos', en: 'rules and permission: singular with the infinitive' },
            { tone: 'violet', label: 'PERSONA CONCRETA', formula: 'imperativo / sujeto', example: 'Hugo, corta la cebolla. Elena corta la cebolla.', caption: 'cuando importa quién', en: 'when it matters who: command or a named subject' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Para recetas, normas y carteles, **se** + verbo en tercera persona: no importa quién. Después mira **la cosa**: una → se corta; varias → se cortan. Con un infinitivo solo o sin cosa, singular: se puede fumar, se cena a las ocho.', en: 'For recipes, rules and signs: se + 3rd-person verb, it doesn’t matter who. Then look at the thing: one → se corta; several → se cortan. With an infinitive alone or with no thing, singular: se puede fumar, se cena a las ocho.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Cartel de una tienda: «___ ropa de segunda mano».', options: ['Se venda', 'Se vende', 'Se venden'], answer: 1, why: '«Ropa» es una palabra singular (aunque son muchas prendas): se vende.', en: 'Shop sign: “Second-hand clothes for sale.”' },
            { prompt: 'Manual de una cafetera: «Primero ___ agua en el depósito».', options: ['pone se', 'se pone', 'se ponen'], answer: 1, why: 'Agua: una cosa → se pone.', en: 'Coffee machine manual: “First, put water in the tank.”' },
            { prompt: 'Cartel en un museo: «No ___ entrar con comida».', options: ['se puede', 'puede se', 'se pueden'], answer: 0, why: 'Infinitivo (entrar): se puede. «Con comida» no cambia nada.', en: 'Museum sign: “No food allowed inside.”' },
            { prompt: 'Receta: «Las papas ___ en agua con sal veinte minutos».', options: ['se cocinan', 'se cocina', 'cocinan se'], answer: 0, why: 'Las papas van antes: varias cosas → se cocinan.', en: 'Recipe: “Cook the potatoes in salted water for twenty minutes.”' },
            { prompt: 'Anuncio: «___ habitación con baño, cerca de la playa».', options: ['Se alquila', 'Se alquilan', 'Se alquile'], answer: 0, why: 'Una habitación: singular → se alquila.', en: 'Ad: “Room with bathroom for rent, near the beach.”' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una biblioteca. Now, in a library.', blocks: [
          { kind: 'lead', text: 'Marcos trabaja en una biblioteca pública. Su jefa le da notas con tú; él escribe las normas para todos los lectores, con se.', en: 'Marcos works at a public library. His boss gives him notes with tú; he writes the rules for all the readers, with se.' },
          { kind: 'rewrite', title: 'Las normas de la biblioteca · The library rules', items: [
            { prompt: 'Devuelve los libros en dos semanas.', instruction: 'Escribe la norma para todos, con se. (Write the rule for everyone, with se.)', accept: ['Se devuelven los libros en dos semanas', 'Los libros se devuelven en dos semanas'] },
            { prompt: 'Habla en voz baja en la sala de lectura.', instruction: 'Escribe la norma para todos, con se. (Write the rule for everyone, with se.)', accept: ['Se habla en voz baja en la sala de lectura', 'En la sala de lectura se habla en voz baja'] },
            { prompt: 'No comas en la biblioteca.', instruction: 'Escribe la norma con «no se puede». (Use no se puede.)', accept: ['No se puede comer en la biblioteca', 'En la biblioteca no se puede comer'] },
          ] },
        ] },
        { title: 'Ampliación: tres maneras de dar instrucciones · Extension: three ways to give instructions', mascot: '/brand/mascot/portrait.webp', coach: 'El estilo de las recetas escritas. The style of written recipes.', blocks: [
          { kind: 'tip', icon: '✍', title: 'Imperativo, se, infinitivo · Command, se, infinitive', text: 'En recetas y carteles vas a ver tres estilos: el **imperativo** para una persona («Corta la cebolla»), **se** para todos («Se corta la cebolla») y el **infinitivo**, muy frecuente en recetas escritas y en carteles cortos («Cortar la cebolla», «No fumar»). En carteles formales también verás «**Se prohíbe** fumar». Las tres maneras son correctas; al hablar, lo normal es el imperativo o se.', en: 'In recipes and on signs you will see three styles: the command for one person (“Corta la cebolla”), se for everyone (“Se corta la cebolla”) and the infinitive, very common in written recipes and on short signs (“Cortar la cebolla”, “No fumar”). On formal signs you will also see “Se prohíbe fumar” (smoking is prohibited). All three are correct; when speaking, people normally use the command or se.' },
          { kind: 'rewrite', title: 'De infinitivo a se · From infinitive to se', items: [
            { prompt: 'Pelar las papas.', instruction: 'Cambia a se. ¿Una cosa o varias? (Change to se.)', accept: ['Se pelan las papas', 'Las papas se pelan'] },
            { prompt: 'Batir los huevos con un poco de sal.', instruction: 'Cambia a se. (Change to se.)', accept: ['Se baten los huevos con un poco de sal', 'Los huevos se baten con un poco de sal'] },
            { prompt: 'Calentar el aceite en una sartén.', instruction: 'Cambia a se. (Change to se.)', accept: ['Se calienta el aceite en una sartén', 'El aceite se calienta en una sartén'] },
            { prompt: 'No dejar la puerta abierta.', instruction: 'Cambia a una norma con «no se puede». (Use no se puede.)', accept: ['No se puede dejar la puerta abierta'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. La diferencia entre el «se» pasivo y el «se» impersonal se estudia en el nivel B1 (clase 119); aquí basta con la regla de la cosa: una o varias.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 077 · Conectores de secuencia y explicación', text: 'Ya explicas cómo se hace algo: «Primero se mezcla la harina… después se forman las arepas». Para ordenar mejor los pasos y explicar por qué, necesitas conectores: primero, luego, al final, por eso. En la clase 077 aprendes a unir las ideas de una receta, de un viaje o de un día. Es el paso natural: ya tienes los pasos, ahora los conectas.', en: 'You can now explain how something is done: “First the flour is mixed… then the arepas are shaped.” To order the steps better and explain why, you need connectors: first, then, finally, that’s why. In class 077 you learn to link the ideas of a recipe, a trip or a day. It is the natural next step: you have the steps, now you connect them.', href: '/gramatica/conectores-de-secuencia-y-explicacion', label: 'Ir a la clase 077' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Escribe dos carteles para tu casa o tu trabajo, uno en singular y otro en plural». Respuesta posible: «Aquí no se puede comer» / «Se cambian las toallas los lunes». Tarea: escribir la receta de un plato favorito con se, en cinco pasos.' },
        ] },
      ],
    },
  ],
};
