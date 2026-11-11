import type { LiveLesson } from '../types';

/**
 * Lesson 546 · C1 · El infinitivo como nombre y como orden (course unit G246,
 * extension from the PCIC coverage review of 2026-11-11; studied after G178).
 * One scene: a mountain refuge run by Aurelio, a strict but kind warden. Two hikers,
 * Nuria and Beto, arrive late and soaked. In the audio Aurelio (Spanish voice) gives
 * the evening welcome talk. Content: the infinitive as a noun (Caminar cansa; el
 * caminar; ese constante quejarse; el murmurar del río; lexicalized: el deber, el
 * amanecer, el parecer, los andares, el pesar); the infinitive as a general
 * instruction on signs (No fumar, Empujar) vs the imperative for specific people;
 * a + infinitive as an energetic spoken order (¡A dormir!); independent infinitives:
 * short answers (—¿Qué haces? —Descansar), incredulous echo (¿Yo, quejarme?),
 * reproach with haber + participle (¡Haberlo dicho antes!), fixed formulas (a saber,
 * ni hablar, a ver). Mistakes: *El caminando cansa, *gracias por viniendo, *Sentarse,
 * por favor (to specific people), *Haberlo decir antes, *el beber del agua.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 546,
  level: 'C1',
  title: 'El infinitivo como nombre y como orden',
  subtitle: 'Usar el infinitivo fuera de las perífrasis: el caminar, no fumar, ¡a dormir!, ¿yo, quejarme?, ¡haberlo dicho!',
  legend: [
    { tone: 'teal', label: 'INFINITIVO NOMBRE · caminar cansa, el caminar (as a noun)' },
    { tone: 'orange', label: 'INSTRUCCIÓN GENERAL · no fumar, empujar (signs, general public)' },
    { tone: 'violet', label: 'A + INFINITIVO · ¡a dormir! (energetic spoken order)' },
    { tone: 'blue', label: 'INFINITIVO INDEPENDIENTE · ¿yo, quejarme?, ¡haberlo dicho! (stand-alone)' },
  ],
  optionNotes: {
    'El caminando': 'En español el gerundio no funciona como nombre: se usa el **infinitivo**: caminar, el caminar.',
    'por viniendo': 'Después de preposición va **infinitivo**: por venir.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un infinitivo, muchos oficios', coach: 'Nombre, orden, exclamación.',
      steps: [
        { title: 'El refugio · The refuge', blocks: [
          { kind: 'lead', text: 'Nuria y Beto llegan a un refugio de montaña empapados y tarde. En la puerta, un cartel: «**Dejar** las botas en la entrada. **No fumar**». Dentro, Aurelio, el guarda, los mira: «**Caminar** con esta lluvia es de valientes. Venga, **¡a cenar!**». Beto murmura algo sobre el frío, y Aurelio se ríe: «¿**Quejarse**, a estas alturas? **¡Haber subido** en agosto!». Cinco infinitivos, y ninguno depende de otro verbo. Hoy ves qué puede hacer el infinitivo cuando va solo.', en: 'Nuria and Beto arrive at a mountain refuge soaked and late. On the door, a sign: “Leave boots at the entrance. No smoking”. Inside, Aurelio, the warden, looks at them: “Walking in this rain takes courage. Come on, dinner time!”. Beto mutters something about the cold, and Aurelio laughs: “Complaining, at this stage? You should have come up in August!”. Five infinitives, none of them depending on another verb. Today you see what the infinitive can do on its own.' },
          { kind: 'compare', title: 'Cuatro oficios · Four jobs', columns: [
            { tone: 'teal', label: 'NOMBRE', sentence: '[[Caminar|teal]] con esta lluvia es de valientes.', idea: 'Es el sujeto de la frase, como un nombre.', en: 'Walking in this rain takes courage.' },
            { tone: 'orange', label: 'INSTRUCCIÓN', sentence: '[[No fumar|orange]].', idea: 'Cartel: una norma para cualquiera que lo lea.', en: 'No smoking.' },
            { tone: 'violet', label: 'ORDEN HABLADA', sentence: '[[¡A cenar!|violet]]', idea: 'A + infinitivo: orden enérgica y cordial a un grupo.', en: 'Dinner time! / Off to dinner!' },
            { tone: 'blue', label: 'INDEPENDIENTE', sentence: '[[¡Haber subido|blue]] en agosto!', idea: 'Reproche sobre algo que ya no tiene remedio.', en: 'You should have come up in August!' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«¡Haber subido en agosto!» significa…', options: ['Suban en agosto, por favor.', 'Deberían haber subido en agosto; ahora ya es tarde.', 'Subieron en agosto.'], answer: 1, why: 'Haber + participio como reproche por algo no hecho.', en: '“¡Haber subido en agosto!” means…' },
            { prompt: '¿A quién se dirige el cartel «Dejar las botas en la entrada»?', options: ['Solo a Nuria y Beto.', 'A cualquier persona que entre.', 'Al guarda.'], answer: 1, why: 'Infinitivo en carteles: destinatario general.', en: 'Who is the sign addressed to?' },
          ] },
        ] },
        { title: 'El infinitivo como nombre · The infinitive as a noun', mascot: '/brand/mascot/studying.webp', coach: 'Caminar cansa. El caminar.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'INFINITIVO NOMBRE', question: '¿Cómo digo «walking is healthy»?', en: 'How do I say “walking is healthy”?', formula: ['infinitivo (+ complementos) como sujeto u objeto: Caminar es sano', 'tras preposición: sin descansar, por llegar tarde', 'el + infinitivo: el caminar, el ir y venir'],
            meaning: 'El infinitivo es la **forma nominal del verbo**: puede ser sujeto, objeto o término de preposición, y conserva sus complementos verbales: «**Subir** esta montaña **sin guía** es una locura». Donde el inglés usa *-ing*, el español usa **infinitivo**, nunca gerundio. Con **el** delante se acerca más a un nombre y suena más **literario o abstracto**: «el vivir», «el querer». Compara: «Fumar perjudica» (norma general) y «El fumar tanto lo está matando» (ese hábito concreto).',
            examples: [
              { es: '[[Madrugar|teal]] nunca fue lo mío.', en: 'Getting up early was never my thing.' },
              { es: 'Me despertó [[el crujir|teal]] de la madera.', en: 'I was woken by the creaking of the wood.' },
              { es: 'Gracias por [[esperarnos|teal]] con la cena.', en: 'Thanks for waiting for us with dinner.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'INFINITIVO MUY NOMINAL', question: '¿Puede llevar adjetivos, demostrativos, plural?', en: 'Can it take adjectives, demonstratives, a plural?', formula: ['determinante + (adjetivo) + infinitivo + de + «sujeto»: el lento caer de la nieve', 'ese / aquel / tanto + infinitivo: ese constante quejarse', 'lexicalizados con plural: el deber → los deberes'],
            meaning: 'En la lengua cuidada, el infinitivo admite **determinantes y adjetivos**, y su sujeto aparece con **de**: «el dulce murmurar **del río**». Con demostrativos o *tanto* suele expresar **fastidio o insistencia**: «ese continuo protestar», «tanto ir y venir». Algunos infinitivos son ya **nombres plenos**, con plural y significado propio.',
            examples: [
              { es: 'Desde la ventana se veía [[el lento caer|teal]] de la nieve.', en: 'From the window you could see the slow falling of the snow.' },
              { es: 'Me agota [[ese constante quejarse|teal]] de Beto.', en: 'That constant complaining of Beto’s wears me out.' },
            ] },
          { kind: 'table', title: 'Infinitivos que ya son nombres · Infinitives that are now nouns', head: ['Nombre', 'Significado', 'Ejemplo'], rows: [
            ['[[el deber|teal]] · los deberes', 'obligación · tarea escolar', 'Cumplió con su deber.'],
            ['[[el amanecer|teal]] · el atardecer · el anochecer', 'momentos del día', 'Salimos al amanecer.'],
            ['[[el parecer|teal]]', 'opinión', 'A mi parecer, es tarde para subir.'],
            ['[[el pesar|teal]]', 'pena, disgusto', 'Muy a mi pesar, tuvimos que volver.'],
            ['[[los andares|teal]]', 'manera de caminar', 'Lo reconocí por sus andares.'],
            ['[[el poder|teal]] · [[el saber|teal]] · [[el ser|teal]]', 'power · knowledge · being', 'El saber no ocupa lugar.'],
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ de noche por la montaña es peligroso.', options: ['Caminando', 'Caminar', 'El caminando'], answer: 1, why: 'Sujeto: infinitivo, no gerundio.', en: 'Walking in the mountains at night is dangerous.' },
            { prompt: 'Nos despertó ___ de las campanas.', options: ['el repicar', 'el repicando', 'repicado'], answer: 0, why: 'El + infinitivo + de + «sujeto».', en: 'We were woken by the ringing of the bells.' },
          ] },
        ] },
        { title: 'El infinitivo como orden · The infinitive as an order', mascot: '/brand/mascot/speaking.webp', coach: 'No fumar. ¡A dormir!', blocks: [
          { kind: 'concept', tone: 'orange', label: 'INSTRUCCIÓN GENERAL', question: '¿Cuándo vale el infinitivo como orden?', en: 'When does the infinitive work as an order?', formula: ['carteles, recetas, manuales: No tocar · Agitar antes de usar', 'destinatario: cualquiera, nadie en concreto'],
            meaning: 'En **carteles, instrucciones y recetas** el infinitivo da una norma **impersonal**, dirigida a cualquiera. En cambio, cuando hablas con **personas concretas**, lo recomendado es el **imperativo**: a un grupo le dices «**Siéntense**, por favor», no «Sentarse, por favor». El infinitivo como orden directa se oye en la lengua coloquial, pero se evita en el uso cuidado.',
            examples: [
              { es: '[[No dejar|orange]] mochilas en el pasillo.', en: 'Do not leave rucksacks in the corridor.' },
              { es: '[[Cerrar|orange]] la puerta al salir.', en: 'Close the door on your way out.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'A + INFINITIVO', question: '¿Y «¡A dormir!»?', en: 'And “¡A dormir!”?', formula: ['¡A + infinitivo!: ¡A cenar! · ¡A callar! · ¡A trabajar!', 'también como narración viva: Y todos, a correr'],
            meaning: '**A + infinitivo** es una orden **oral, enérgica y colectiva**: quien la da suele incluirse o tiene autoridad familiar (padres, entrenadores, guardas con carácter). Puede ser cordial («¡A comer!») o tajante («¡A callar!»). En la narración coloquial expresa el **comienzo brusco** de una acción: «Sonó el trueno y todos, a correr».',
            examples: [
              { es: 'Son las diez: [[¡a dormir|violet]], que mañana se madruga!', en: 'It’s ten o’clock: off to bed, we’re up early tomorrow!' },
              { es: 'Empezó a granizar y nosotros, [[a correr|violet]] hacia el refugio.', en: 'It started to hail and off we ran towards the refuge.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Aurelio, a un grupo de excursionistas que acaba de entrar (trato de usted, uso cuidado):', options: ['Sentarse junto al fuego, por favor.', 'Siéntense junto al fuego, por favor.', 'A sentando junto al fuego.'], answer: 1, why: 'Personas concretas: imperativo.', en: 'Aurelio, to a group of hikers who have just come in (formal, careful usage):' },
            { prompt: '¿Qué texto es propio de un cartel?', options: ['No encender fuego fuera de la chimenea.', '¡A no encender fuego!', 'No enciendan ustedes, si son tan amables, fuego.'], answer: 0, why: 'Cartel: infinitivo impersonal.', en: 'Which text belongs on a sign?' },
          ] },
        ] },
        { title: 'Infinitivos que van solos · Stand-alone infinitives', mascot: '/brand/mascot/portrait.webp', coach: '¿Yo, quejarme? ¡Haberlo dicho!', blocks: [
          { kind: 'concept', tone: 'blue', label: 'INFINITIVO INDEPENDIENTE', question: '¿Qué expresa un infinitivo sin verbo principal?', en: 'What does an infinitive with no main verb express?', formula: ['respuesta breve: —¿Qué haces? —Descansar.', 'eco incrédulo: ¿Yo, quejarme? · ¿Rendirnos ahora?', 'reproche: ¡Haber + participio! · ¡Mira que + infinitivo…!', 'fórmulas: a saber · a ver · ni hablar · a juzgar por…'],
            meaning: 'En el diálogo, el infinitivo puede aparecer **solo**. Como **respuesta**, nombra la acción sin conjugarla. Como **eco**, repite con incredulidad o indignación lo que otro ha dicho o insinuado: «¿Yo, mentir?». Con **haber + participio** expresa un **reproche** sobre algo que ya no se puede cambiar: «¡Haberlo pensado antes!» (= deberías haberlo pensado). **Mira que + infinitivo** reprocha con asombro: «¡Mira que olvidar el mapa!».',
            examples: [
              { es: '—¿Y tú qué quieres hacer mañana? —[[Dormir|blue]]. Solo eso.', en: '“And what do you want to do tomorrow?” “Sleep. Just that.”' },
              { es: '¿[[Bajar|blue]] ahora, con esta niebla? Ni hablar.', en: 'Go down now, in this fog? No way.' },
              { es: '¿Tienes frío? [[¡Haber traído|blue]] un abrigo!', en: 'You’re cold? You should have brought a coat!' },
            ],
            note: '**A saber** = quién sabe: «A saber dónde dejó las llaves». **A ver** abre una petición o una duda: «A ver, ¿quién falta?».' },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El caminando por la nieve cansa mucho.', right: 'Caminar por la nieve cansa mucho.', why: 'Como nombre: infinitivo, nunca gerundio.' },
            { wrong: 'Gracias por viniendo tan rápido.', right: 'Gracias por venir tan rápido.', why: 'Tras preposición: infinitivo.' },
            { wrong: '¡Haberlo decir antes!', right: '¡Haberlo dicho antes!', why: 'Reproche: haber + participio.' },
            { wrong: 'Señores, pasar al comedor, por favor.', right: 'Señores, pasen al comedor, por favor.', why: 'A personas concretas, en uso cuidado: imperativo.' },
            { wrong: 'Me molesta el beber del agua fría.', right: 'Me molesta beber agua fría.', why: 'El objeto del infinitivo no lleva «de»: beber agua. «De» introduce el sujeto: el correr del agua.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—Te has dejado la linterna abajo. —¡___ que la subiera yo!', options: ['Haberme dicho', 'Haberme decir', 'Habiéndome dicho'], answer: 0, why: 'Reproche: haber + participio.', en: '“You left the torch downstairs.” “You should have told me to bring it up!”' },
            { prompt: '—Dicen que te rendiste a mitad de camino. —¿___? Jamás.', options: ['Yo, rendirme', 'Yo, rindiéndome', 'Yo, rendido me'], answer: 0, why: 'Eco incrédulo: sujeto + infinitivo.', en: '“They say you gave up halfway.” “Me, give up? Never.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno inventa un cartel para su casa, una orden con «¡A…!», un reproche con «¡Haber…!» y una frase con un infinitivo como sujeto.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Una noche en el refugio', coach: 'Toca los infinitivos marcados.',
      steps: [
        { title: 'Junto a la chimenea', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles. Después tu alumno toca cada infinitivo marcado y dice qué oficio tiene: nombre, instrucción, orden hablada o independiente.', self: 'Lee el diálogo en voz alta. Toca cada infinitivo marcado: ¿nombre, instrucción, orden hablada o independiente?' } },
          { kind: 'explore', title: 'Las nueve de la noche', setting: 'El comedor del refugio. Llueve fuera. Aurelio sirve sopa; Nuria y Beto se secan junto al fuego.', lines: [
            { who: 'Beto', text: 'No siento los pies. [[Subir|teal]] hoy fue un error.', en: 'I can’t feel my feet. Coming up today was a mistake.' },
            { who: 'Nuria', text: 'El error fue salir a mediodía. [[¡Haber madrugado!|blue]]', en: 'The mistake was leaving at midday. You should have got up early!' },
            { who: 'Beto', text: '¿[[Madrugar|blue]], yo? Si fuiste tú la que no encontraba las botas.', en: 'Me, get up early? You were the one who couldn’t find her boots.' },
            { who: 'Aurelio', text: 'Paz. Aquí, lo primero: «[[Colgar|orange]] la ropa mojada en el secadero», como dice el cartel.', en: 'Peace. First things first here: “Hang wet clothes in the drying room”, as the sign says.' },
            { who: 'Nuria', text: 'Ahora mismo. ¿Se oye siempre así el viento?', en: 'Right away. Does the wind always sound like that?' },
            { who: 'Aurelio', text: 'Toda la noche. A mí [[el silbar|teal]] del viento me ayuda a dormir.', en: 'All night. The whistling of the wind helps me sleep.' },
            { who: 'Beto', text: '¿Y mañana qué recomiendas? ¿La cumbre?', en: 'And what do you recommend tomorrow? The summit?' },
            { who: 'Aurelio', text: '[[A saber|blue]] cómo amanece. A mi [[parecer|teal]], mejor el lago.', en: 'Who knows what the morning will bring. In my view, the lake is better.' },
            { who: 'Nuria', text: '¿Qué piensas hacer tú mañana, Aurelio?', en: 'What are you planning to do tomorrow, Aurelio?' },
            { who: 'Aurelio', text: '[[Cortar|blue]] leña, como siempre. Y ahora, [[¡a cenar!|violet]] Que la sopa se enfría.', en: 'Chop wood, as always. And now, dinner! The soup is getting cold.' },
            { who: 'Beto', text: 'Con [[tanto hablar|teal]] se me había olvidado el hambre.', en: 'With all this talking I had forgotten I was hungry.' },
          ], notes: {
            'Subir': 'Infinitivo **sujeto** de «fue un error»: funciona como nombre y conserva su complemento («hoy»).',
            '¡Haber madrugado!': '**Reproche**: deberían haber madrugado, y ya no tiene remedio.',
            'Madrugar': '**Eco incrédulo**: Beto repite la idea con indignación. «¿Madrugar, yo?».',
            'Colgar': '**Instrucción de cartel**: impersonal, para cualquiera.',
            'el silbar': '**El + infinitivo + de** + «sujeto» (el viento silba): uso nominal, algo literario.',
            'A saber': 'Fórmula fija: **quién sabe**.',
            'parecer': 'Infinitivo ya convertido en **nombre**: «a mi parecer» = en mi opinión.',
            'Cortar': '**Respuesta breve**: nombra la acción sin conjugar el verbo.',
            '¡a cenar!': '**A + infinitivo**: orden oral, enérgica y cordial.',
            'tanto hablar': '**Tanto + infinitivo**: insistencia; aquí, con humor.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: 'Según Nuria, ¿cuál fue el error?', options: ['Subir por la ruta larga.', 'Salir a mediodía y no madrugar.', 'No llevar botas.'], answer: 1, why: '«El error fue salir a mediodía. ¡Haber madrugado!».', en: 'According to Nuria, what was the mistake?' },
            { prompt: '¿Qué recomienda Aurelio para mañana?', options: ['La cumbre.', 'El lago.', 'Quedarse en el refugio.'], answer: 1, why: '«A mi parecer, mejor el lago».', en: 'What does Aurelio recommend for tomorrow?' },
            { prompt: '¿Está seguro Aurelio del tiempo de mañana?', options: ['Sí.', 'No: «a saber cómo amanece».', 'Dice que nevará.'], answer: 1, why: 'A saber = quién sabe.', en: 'Is Aurelio sure about tomorrow’s weather?' },
          ] },
        ] },
        { title: '¿Qué oficio tiene? · What job is it doing?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Cuatro usos', categories: [
            { id: 'nombre', label: 'NOMBRE', tone: 'teal' },
            { id: 'cartel', label: 'INSTRUCCIÓN GENERAL', tone: 'orange' },
            { id: 'a', label: 'A + INFINITIVO', tone: 'violet' },
            { id: 'solo', label: 'INDEPENDIENTE', tone: 'blue' },
          ], items: [
            { text: 'Agitar antes de usar.', answer: 'cartel', why: 'Instrucción impersonal.' },
            { text: 'Errar es humano.', answer: 'nombre', why: 'Infinitivo sujeto.' },
            { text: '¡A trabajar, que es tarde!', answer: 'a', why: 'Orden oral enérgica.' },
            { text: '¡Haberlo pensado antes!', answer: 'solo', why: 'Reproche.' },
            { text: 'Me encanta el despertar del bosque.', answer: 'nombre', why: 'El + infinitivo + de.' },
            { text: '¿Pagar yo otra vez? Ni hablar.', answer: 'solo', why: 'Eco incrédulo.' },
            { text: 'No pisar el césped.', answer: 'cartel', why: 'Cartel.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué carteles con infinitivo ves cada día? ¿Cuál cambiarías?».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Infinitivo, no gerundio.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { prompt: '___ en altura exige beber mucha agua.', options: ['Dormir', 'Durmiendo', 'El durmiendo'], answer: 0, why: 'Sujeto: infinitivo.', en: 'Sleeping at altitude requires drinking a lot of water.' },
            { prompt: 'Estoy harta de ___ de mochilas por el pasillo.', options: ['tanto tropezar', 'tanto tropezando', 'tanta tropezada'], answer: 0, why: 'Tanto + infinitivo: insistencia molesta.', en: 'I’m fed up with tripping over rucksacks in the corridor so much.' },
            { prompt: '(Cartel en la cocina) ___ los platos después de usarlos.', options: ['Lavar', 'Lavando', 'A lavados'], answer: 0, why: 'Instrucción general: infinitivo.', en: '(Sign in the kitchen) Wash the dishes after use.' },
            { prompt: 'Son las seis y hay que salir: ¡___!', options: ['a levantarse', 'levantándose', 'a levantados'], answer: 0, why: 'A + infinitivo: orden oral al grupo.', en: 'It’s six and we have to leave: up you get!' },
            { prompt: '—No queda pan. —¡___ ayer, que te lo dije!', options: ['Haber comprado', 'Haber comprar', 'Habiendo comprar'], answer: 0, why: 'Reproche: haber + participio.', en: '“There’s no bread left.” “You should have bought some yesterday, I told you!”' },
            { prompt: 'Lo reconocí de lejos por ___.', options: ['sus andares', 'sus andandos', 'su andando'], answer: 0, why: 'Infinitivo lexicalizado en plural: los andares.', en: 'I recognized him from afar by the way he walks.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Fumando en el dormitorio está prohibido.', ok: false, options: ['Fumar en el dormitorio está prohibido.', 'El fumando en el dormitorio está prohibido.', 'Fumado en el dormitorio está prohibido.'], answer: 0, why: 'Sujeto: infinitivo.' },
            { sentence: 'Muy a mi pesar, tuvimos que dar media vuelta.', ok: true, why: 'Correcta: «pesar» es un infinitivo lexicalizado.' },
            { sentence: 'Salimos sin desayunando.', ok: false, options: ['Salimos sin desayunar.', 'Salimos sin desayunado.', 'Salimos sin el desayunando.'], answer: 0, why: 'Tras preposición: infinitivo.' },
            { sentence: '¿Yo, perderme en esta ruta? Imposible.', ok: true, why: 'Correcta: eco incrédulo con infinitivo.' },
            { sentence: '¡Haberme avisar del mal tiempo!', ok: false, options: ['¡Haberme avisado del mal tiempo!', '¡Habiéndome avisar del mal tiempo!', '¡Haber avisarme del mal tiempo!'], answer: 0, why: 'Haber + participio.' },
          ] },
        ] },
        { title: 'Por la mañana · In the morning', blocks: [
          { kind: 'chat-fill', title: 'Las seis y media', lines: [
            { who: 'Aurelio', text: '¡Arriba! Café recién hecho. ¡___!', options: ['A desayunar', 'Desayunando', 'A desayunado'], answer: 0, why: 'A + infinitivo.' },
            { who: 'Beto', text: 'Cinco minutos más… ___ tan temprano debería ser ilegal.', options: ['Levantarse', 'Levantándose', 'El levantándose'], answer: 0, why: 'Infinitivo sujeto.' },
            { who: 'Nuria', text: '¿Qué prefieres, cumbre o lago?' },
            { who: 'Beto', text: '___. Pero ya que estamos, el lago.', options: ['Dormir', 'Durmiendo', 'Dormido'], answer: 0, why: 'Respuesta breve en infinitivo.' },
            { who: 'Nuria', text: 'No encuentro mis guantes.' },
            { who: 'Aurelio', text: '¡___ en el secadero, como dice el cartel!', options: ['Haberlos colgado', 'Haberlos colgar', 'Habiéndolos colgar'], answer: 0, why: 'Reproche: haber + pronombre + participio.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['mío', 'Madrugar', 'lo', 'es', 'no'], accept: ['Madrugar no es lo mío'], en: 'Getting up early is not my thing.' },
            { tiles: ['antes!', '¡Haberlo', 'dicho'], accept: ['¡Haberlo dicho antes!'], en: 'You should have said so earlier!' },
            { tiles: ['la', 'al', 'Cerrar', 'puerta', 'salir'], accept: ['Cerrar la puerta al salir'], en: 'Close the door on your way out.' },
            { tiles: ['del', 'el', 'Oíamos', 'río', 'murmurar'], accept: ['Oíamos el murmurar del río'], en: 'We could hear the murmuring of the river.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Usa el infinitivo', items: [
            { prompt: 'Deberías haberlo pensado antes.', instruction: 'Conviértelo en un reproche con «¡Haber…!».', accept: ['¡Haberlo pensado antes!', 'Haberlo pensado antes'] },
            { prompt: 'No se puede fumar. (cartel)', instruction: 'Escríbelo como un cartel con infinitivo.', accept: ['No fumar'] },
            { prompt: 'En mi opinión, es tarde.', instruction: 'Cambia «en mi opinión» por la expresión con «parecer».', accept: ['A mi parecer, es tarde'] },
            { prompt: 'Vamos todos a dormir ahora mismo.', instruction: 'Conviértelo en una orden enérgica con «¡A…!».', accept: ['¡A dormir!', 'A dormir'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno redacta de palabra tres normas de cartel para una biblioteca y las dice después como órdenes a personas concretas, con imperativo.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La charla de Aurelio', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Normas del refugio', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: tono general. Segunda escucha: tu alumno anota las normas y distingue las que Aurelio lee de los carteles de las que da él de viva voz.', self: 'Escucha una vez para el tono general y otra para anotar las normas: ¿cuáles lee Aurelio de los carteles y cuáles da él?' } },
          { kind: 'listen', title: 'Bienvenida de las nueve y media', channel: 'REFUGIO · CHARLA DEL GUARDA', src: '/audio/grammar-live/546.mp3',
            before: 'Cada noche, después de la cena, Aurelio explica las normas a los recién llegados. ¿Qué normas esperas en un refugio de montaña?',
            gist: { prompt: '¿Cuál es el tono de Aurelio?', options: ['Firme, pero cordial y con humor.', 'Enfadado.', 'Indiferente.'], answer: 0, why: 'Da normas claras y bromea.', en: 'What is Aurelio’s tone?' },
            details: [
              { prompt: '¿Qué hay que hacer con las botas?', options: ['Dejarlas en la entrada.', 'Subirlas al dormitorio.', 'Secarlas junto al fuego.'], answer: 0, why: '«Dejar las botas en la entrada».', en: 'What do you do with the boots?' },
              { prompt: '¿A qué hora se apaga la luz?', options: ['A las diez.', 'A medianoche.', 'No se apaga.'], answer: 0, why: '«A las diez, ¡a dormir!».', en: 'What time are the lights turned off?' },
              { prompt: '¿Qué dice de quien se queje de los ronquidos?', options: ['Que cambie de habitación.', '«¡Haber traído tapones!».', 'Que hable con él.'], answer: 1, why: 'Reproche humorístico.', en: 'What does he say about anyone who complains about snoring?' },
              { prompt: '¿Qué opina de subir a la cumbre mañana?', options: ['Que depende del tiempo: a saber cómo amanece.', 'Que está prohibido.', 'Que es obligatorio.'], answer: 0, why: '«A saber cómo amanece».', en: 'What does he think about going up to the summit tomorrow?' },
            ],
            transcript: 'Buenas noches a todos y bienvenidos. Llevo veinte años aquí y solo pido tres cosas; están en los carteles, pero las repito. Primera: «[[Dejar|orange]] las botas en la entrada». Segunda: «[[No encender|orange]] hornillos en los dormitorios». Tercera: «[[Respetar|orange]] el descanso de los demás». [[Dormir|teal]] bien aquí arriba no es un lujo: es seguridad. A las diez se apaga la luz y, entonces, [[¡a dormir!|violet]] Si alguien ronca y otro protesta… [[¡haber traído|blue]] tapones! Mañana, el desayuno es a las seis y media. ¿[[Subir|blue]] a la cumbre? [[A saber|blue]] cómo amanece; lo decidimos con el café. A mi [[parecer|teal]], la montaña no se va a ir. Que descansen.',
            reply: { teacher: 'Tu alumno hace de excursionista y resume las normas a un compañero que llegó tarde: primero como carteles, luego con sus propias palabras.', self: 'Resume en voz alta las normas para un compañero que llegó tarde: primero como carteles, luego con tus propias palabras.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Normas, reproches y placeres', coach: 'Deja que el infinitivo trabaje solo.',
      steps: [
        { title: 'Habla con infinitivos', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas; anima a tu alumno a usar infinitivos como sujeto, ecos y reproches. Reformula cuando use un gerundio en lugar del infinitivo.', self: 'Responde en voz alta. Intenta usar un infinitivo como sujeto, un eco y un reproche.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué actividades te dan energía y cuáles te la quitan?', followUps: ['¿Por qué?', '¿Qué echas de menos hacer?'], phrases: ['[[Caminar|teal]] me…', '[[Madrugar|teal]] nunca…', 'Lo peor es [[tener que|teal]]…'], hint: 'Infinitivo como sujeto, no gerundio.', example: 'Caminar sin rumbo me despeja la cabeza. En cambio, contestar correos me agota, y tener que hacerlo en fin de semana, más.', next: 'Ahora, normas.' },
            { q: 'Inventa las normas de un lugar que conoces bien: tu casa, tu oficina, un gimnasio.', followUps: ['¿Cuál se incumple más?', '¿Cómo se lo dirías a alguien en persona?'], phrases: ['«[[No dejar|orange]]…»', '«[[Apagar|orange]]… al salir»', 'En persona: «Por favor, apaguen…»'], hint: 'Cartel: infinitivo. En persona: imperativo.', example: 'En mi oficina: «No dejar tazas en el fregadero», «Apagar las luces al salir». En persona diría: «Por favor, apaguen las luces cuando se vayan».', next: 'Ahora, reproches.' },
            { q: 'Recuerda una situación en la que alguien se quejó de algo que podía haber evitado. ¿Qué le dirías?', followUps: ['¿Y qué te dirían a ti?', '¿Te lo han dicho alguna vez?'], phrases: ['[[¡Haber|blue]] salido antes!', '[[¡Haberlo|blue]] pensado!', '[[¡Mira que|blue]] olvidar…!'], hint: '¡Haber + participio! para reproches sin remedio.', example: 'Mi hermano siempre llega tarde al aeropuerto y luego se queja de las colas. ¡Haber salido antes! Y a mí me dicen: ¡Haber reservado con tiempo!', next: 'Ahora, indignación.' },
            { q: 'Reacciona con incredulidad a estas ideas: trabajar gratis, mudarte mañana, dejar el café.', followUps: ['¿Cuál aceptarías con condiciones?', '¿Qué propuesta te indigna de verdad?'], phrases: ['¿[[Trabajar|blue]] gratis, yo?', '¿[[Dejar|blue]] el café? Ni hablar.', '[[A saber|blue]] qué…'], hint: 'Eco con infinitivo + reacción.', example: '¿Trabajar gratis? Ni hablar. ¿Mudarme mañana? Imposible, a saber dónde acabaría. ¿Dejar el café? Antes dejo de dormir.', teacher: 'Lanza tú las propuestas con tono serio para provocar el eco incrédulo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno te propone tres ideas absurdas y tú reaccionas con ecos; él dice qué fórmula usaste.', self: 'Ahora propón tres ideas absurdas en voz alta y reacciona como otra persona, con ecos e infinitivos.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El libro de visitas', coach: 'Una entrada con voz propia.',
      steps: [
        { title: 'Tu entrada en el libro del refugio', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada infinitivo: ¿qué oficio tiene?', self: 'Escribe tu texto y toca «Revisar mi texto». Después revisa cada infinitivo: ¿qué oficio tiene?' } },
          { kind: 'write', title: 'Una noche en un lugar con normas', situation: 'Has pasado una noche en un lugar con normas claras: un refugio, un albergue, una casa rural, un campamento. Escribe una entrada para el libro de visitas, con humor.', task: [
            'Cuenta cómo llegaste, con un infinitivo como sujeto.',
            'Cita una o dos normas de cartel en infinitivo.',
            'Incluye una orden oral con «¡A…!».',
            'Añade un reproche con «¡Haber…!» o un eco incrédulo.',
            'Cierra con un infinitivo nominal más literario (el + infinitivo + de…).',
          ], starters: ['Llegar hasta aquí…', 'En la puerta, un cartel: «…»', 'A las diez, el guarda gritó: «¡A…!»', '¿Quejarme, yo?', '¡Haber…!', 'Me llevo el… de…'],
            words: ['llegar', 'madrugar', 'no fumar', 'dejar', '¡a dormir!', '¡haber traído…!', 'a saber', 'a mi parecer', 'el crujir de', 'el amanecer'],
            model: '[[Llegar|teal]] hasta aquí con niebla fue una pequeña hazaña. En la puerta, un cartel: «[[Dejar|orange]] las botas en la entrada. [[No hablar|orange]] alto después de las diez». Obedecí. A las diez en punto, el guarda dio una palmada: «[[¡A dormir!|violet]]». Mi litera crujía y mi vecino roncaba. ¿[[Quejarme|blue]], yo? Jamás: [[¡haber traído|blue]] tapones! A las seis, [[madrugar|teal]] dolió menos de lo previsto. Me llevo [[el crujir|teal]] de la madera, el olor a café y un amanecer que no cabe en una foto. Volveré.',
            minWords: 80,
            checks: [
              { label: 'Una norma de cartel en infinitivo, entre comillas', pattern: '«\\s*(?:No\\s+)?\\p{L}+(?:ar|er|ir)(?:se|las?|los?)?(?![\\p{L}])', tip: 'Por ejemplo: «Dejar las botas en la entrada».' },
              { label: 'Un reproche con ¡Haber + participio!', pattern: '(?:^|[^\\p{L}])[Hh]aber(?:lo|la|los|las|me|te|se|nos)?\\s+\\p{L}+(?:ado|ido|to|cho|so)(?![\\p{L}])', tip: 'Por ejemplo: «¡Haber traído tapones!».' },
            ],
            warnings: [
              { pattern: '(?:^|[^\\p{L}])(?:por|sin|para|de|al|tras)\\s+\\p{L}+(?:ando|iendo)(?![\\p{L}])', why: 'Después de preposición va **infinitivo**: sin desayunar, por llegar tarde.' },
              { pattern: '(?:^|[^\\p{L}])[Ee]l\\s+\\p{L}+(?:ando|iendo)(?![\\p{L}])', why: 'El gerundio no funciona como nombre: usa el **infinitivo** (el caminar).' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'NOMBRE', formula: 'infinitivo · el + infinitivo (+ de)', example: 'Caminar cansa. El silbar del viento.', caption: 'donde el inglés usa -ing; nunca gerundio', en: 'where English uses -ing; never the gerund' },
            { tone: 'orange', label: 'INSTRUCCIÓN GENERAL', formula: 'infinitivo en carteles y recetas', example: 'No fumar. Cerrar al salir.', caption: 'a personas concretas, imperativo', en: 'for specific people, use the imperative' },
            { tone: 'violet', label: 'A + INFINITIVO', formula: '¡A + infinitivo!', example: '¡A dormir!', caption: 'orden oral, enérgica, colectiva', en: 'spoken, energetic, collective order' },
            { tone: 'blue', label: 'INDEPENDIENTE', formula: 'respuesta · eco · ¡Haber + participio!', example: '¿Yo, quejarme? ¡Haberlo dicho!', caption: 'incredulidad y reproche', en: 'disbelief and reproach' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'El infinitivo es el **nombre de la acción**. Por eso puede ser sujeto, llevar artículo o aparecer solo en un cartel. Dos reflejos que conviene fijar: tras preposición, **siempre infinitivo** (sin comer, por llegar); y para reprochar lo que ya no tiene arreglo, **¡Haber + participio!**', en: 'The infinitive is the name of the action. That is why it can be a subject, take an article or stand alone on a sign. Two reflexes worth fixing: after a preposition, always the infinitive; and to reproach what can no longer be fixed, ¡Haber + participle!' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda', items: [
            { prompt: '___ idiomas abre muchas puertas.', options: ['Aprender', 'Aprendiendo', 'El aprendiendo'], answer: 0, why: 'Infinitivo sujeto.', en: 'Learning languages opens many doors.' },
            { prompt: '—Estoy empapado. —¡___ el paraguas!', options: ['Haber traído', 'Haber traer', 'Habiendo traer'], answer: 0, why: 'Reproche: haber + participio.', en: '“I’m soaked.” “You should have brought the umbrella!”' },
            { prompt: '(Cartel en un museo) ___ las obras.', options: ['No tocar', 'No tocando', 'A no tocar'], answer: 0, why: 'Cartel: infinitivo.', en: '(Sign in a museum) Do not touch the works.' },
            { prompt: '¿___ yo la culpa? ¡Pero si ni estaba!', options: ['Tener', 'Teniendo', 'Tenido'], answer: 0, why: 'Eco incrédulo.', en: 'Me, to blame? I wasn’t even there!' },
            { prompt: 'Nos quedamos escuchando ___ de la lluvia en el tejado.', options: ['el golpear', 'el golpeando', 'golpeado'], answer: 0, why: 'El + infinitivo + de.', en: 'We stayed listening to the drumming of the rain on the roof.' },
          ] },
        ] },
        { title: 'Ampliación · Al, de, con y por + infinitivo', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más.', blocks: [
          { kind: 'lead', text: 'Con preposición, el infinitivo equivale a una subordinada entera. **Al + infinitivo**: tiempo o causa («Al llegar, cenamos»; «Al no haber cobertura, no pudimos llamar»). **De + infinitivo**: condición («De haberlo sabido, no subo»). **Con + infinitivo**: concesión o condición suficiente («Con llorar no arreglas nada»; «Con avisar basta»). **Por + infinitivo**: algo pendiente («Queda mucho por hacer»).', en: 'With a preposition, the infinitive stands for a whole subordinate clause. Al + infinitive: time or cause. De + infinitive: condition (“Had I known…”). Con + infinitive: concession or sufficient condition. Por + infinitive: something still to be done.' },
          { kind: 'choice', title: 'Para estudiantes rápidos', items: [
            { prompt: '___ no tener mapa, seguimos el río.', options: ['Al', 'De el', 'Por el'], answer: 0, why: 'Al + infinitivo con valor causal.', en: 'As we had no map, we followed the river.' },
            { prompt: 'Todavía queda media ruta ___.', options: ['por recorrer', 'de recorriendo', 'con recorrido'], answer: 0, why: 'Por + infinitivo: pendiente.', en: 'There is still half the route to cover.' },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional. Tu alumno completa: «De haberlo sabido…», «Con… basta», «Queda mucho por…».' },
        ] },
      ],
    },
  ],
};
