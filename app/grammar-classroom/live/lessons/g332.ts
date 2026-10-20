import type { LiveLesson } from '../types';

/**
 * Lesson 332 · A1 · Gustar y encantar + nombre / infinitivo (course unit G032).
 * One scene runs through the class: Carmen and Diego, a couple from Monterrey,
 * are on holiday in Veracruz (Mexico). Valeria, the hotel receptionist, offers
 * three restaurants for dinner: La Huerta (vegetarian), El Puerto (fish,
 * seafood, live music) and Casa Rosa (pasta, pizza, fish of the day, quiet).
 * Content: me / te / le / nos + gusta + singular noun or infinitive, + gustan +
 * plural noun; encantar (= love) with the same pattern; no me gusta nada;
 * the article in general tastes (me gusta el pescado). Contrast with class 031:
 * me levanto (verb with yo) / me gusta (verb with the thing). os / les are
 * receptive; «a mí, a ti» appear only as fixed chunks (a mí también, a mí no).
 * Valeria speaks usted to the clients; the couple speak tú to each other.
 * The voice message is Valeria (Mexican voice).
 */
export const lesson: LiveLesson = {
  id: 332,
  level: 'A1',
  title: 'Gustar y encantar + nombre / infinitivo',
  subtitle: 'Decir qué te gusta y qué te encanta, y qué le gusta a otra persona, para elegir juntos un restaurante.',
  legend: [
    { tone: 'blue', label: 'GUSTA · ENCANTA + una cosa o un infinitivo (one thing / an action)' },
    { tone: 'orange', label: 'GUSTAN · ENCANTAN + varias cosas (plural)' },
    { tone: 'violet', label: 'ME · TE · LE · NOS: a quién le gusta (who likes it)' },
    { tone: 'neutral', label: 'Reacciones: a mí también, a mí no (reactions)' },
  ],
  optionNotes: {
    gusto: '«Gusto» es la forma de yo, pero con gustar el verbo va con **la cosa**: me gust**a** el café, me gust**an** los postres.',
    gustas: '«Gustas» va con tú como sujeto (you are pleasing). Para preguntar por un gusto: ¿te gust**a** + una cosa?, ¿te gust**an** + varias cosas?',
    Encantamos: 'Con encantar, el verbo va con la cosa, no con nosotros: **nos encanta(n)**.',
    'Yo encanto': 'Con encantar, el verbo va con la cosa, no con yo: **me encanta**.',
    muy: '«Muy» va con adjetivos (muy rico), no con gustar. Con gustar: **mucho** (me gusta mucho) o, en negativo, **nada** (no me gusta nada).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Tres restaurantes, dos clientes', coach: 'Me gusta, me encanta. I like it, I love it.',
      steps: [
        { title: 'La cena en Veracruz · Dinner in Veracruz', blocks: [
          { kind: 'lead', text: 'Carmen y Diego están de vacaciones en Veracruz, México. Esta noche quieren cenar fuera. Valeria, la recepcionista del hotel, tiene **tres restaurantes**. Para elegir, todos hablan de **gustos**: qué les gusta y qué no.', en: 'Carmen and Diego are on holiday in Veracruz, Mexico. Tonight they want to eat out. Valeria, the hotel receptionist, has three restaurants. To choose, everyone talks about tastes: what they like and what they don’t.' },
          { kind: 'guide', text: { teacher: 'Tú lees los tres restaurantes y tu alumno repite. Después, tu alumno dice cuál le gusta más a primera vista.', self: 'Lee los tres restaurantes en voz alta. ¿Cuál te gusta a ti? (Which one do you like?)' } },
          { kind: 'compare', title: 'Las tres opciones · The three options', columns: [
            { tone: 'blue', label: 'La Huerta', sentence: 'Ensaladas, verduras y sopas. Comida vegetariana.', idea: 'Para quien no come carne ni pescado.', en: 'Salads, vegetables and soups. Vegetarian food.' },
            { tone: 'orange', label: 'El Puerto', sentence: 'Pescado, mariscos y música en vivo.', idea: 'Mucho ambiente, mucho ruido.', en: 'Fish, seafood and live music.' },
            { tone: 'violet', label: 'Casa Rosa', sentence: 'Pasta, pizza y pescado del día. Lugar tranquilo.', idea: 'Postres caseros y sin música alta.', en: 'Pasta, pizza and fish of the day. A quiet place.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'La frase de hoy · Today’s sentence', text: 'Carmen dice: «**Me gusta** el café y **me gusta** viajar». En inglés es «I like»; en español la idea es «el café **me** gusta»: la cosa le gusta a una persona.', en: 'Carmen says: “I like coffee and I like travelling.” In English it is “I like”; in Spanish the idea is “coffee pleases me”: the thing is pleasing to a person.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Dónde hay música en vivo?', options: ['En La Huerta.', 'En El Puerto.', 'En Casa Rosa.'], answer: 1, why: 'El Puerto: pescado, mariscos y música en vivo.', en: 'Where is there live music?' },
            { prompt: '«Me gusta el café» significa…', options: ['I make coffee.', 'I am a coffee.', 'I like coffee.'], answer: 2, why: 'Me gusta = I like. Literalmente: el café me gusta (coffee pleases me).', en: '“Me gusta el café” means…' },
            { prompt: 'Diego no quiere ruido. ¿Qué restaurante es bueno para él?', options: ['Casa Rosa.', 'El Puerto.'], answer: 0, why: 'Casa Rosa es un lugar tranquilo, sin música alta.', en: 'Diego doesn’t want noise. Which restaurant is good for him?' },
          ] },
        ] },
        { title: 'Gusta o gustan · One thing or several', mascot: '/brand/mascot/studying.webp', coach: 'El verbo mira la cosa. The verb looks at the thing.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ME GUSTA · ME GUSTAN', question: '¿Qué me gusta?', en: 'I like…', formula: ['me gusta + el / la + una cosa', 'me gusta + infinitivo (cenar, viajar)', 'me gustan + los / las + varias cosas'],
            meaning: 'Con gustar, el verbo **no** va con la persona: va con **la cosa** que gusta. Una cosa o una acción (infinitivo): **gusta**. Varias cosas: **gustan**.',
            examples: [
              { es: 'Me [[gusta|blue]] el libro.', en: 'I like the book.' },
              { es: 'Me [[gustan|orange]] los libros.', en: 'I like books.' },
              { es: 'Me [[gusta|blue]] la sopa de verduras.', en: 'I like vegetable soup.' },
              { es: 'Me [[gustan|orange]] las ensaladas.', en: 'I like salads.' },
              { es: 'Me [[gusta|blue]] cenar tarde.', en: 'I like having dinner late.' },
              { es: 'Me [[gusta|blue]] viajar y comer bien.', en: 'I like travelling and eating well.' },
            ],
            note: 'Un infinitivo, o dos, siempre con **gusta**: «Me gusta bailar y cantar». Dos cosas juntas son plural: «Me gust**an** la pasta y la pizza».' },
          { kind: 'compare', title: 'Tres pares · Three pairs', columns: [
            { tone: 'blue', label: 'Una cosa · one thing', sentence: 'Me [[gusta|blue]] el postre. Me [[gusta|blue]] la playa.', idea: 'Singular: gusta.', en: 'I like the dessert. I like the beach.' },
            { tone: 'orange', label: 'Varias cosas · several things', sentence: 'Me [[gustan|orange]] los postres. Me [[gustan|orange]] las playas.', idea: 'Plural: gustan.', en: 'I like desserts. I like beaches.' },
            { tone: 'blue', label: 'Una acción · an action', sentence: 'Me [[gusta|blue]] nadar. Me [[gusta|blue]] cocinar.', idea: 'Infinitivo: siempre gusta.', en: 'I like swimming. I like cooking.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'El artículo · The article', text: 'Para un gusto general, el español usa el artículo: «Me gusta **el** pescado», «Me gustan **las** sopas». En inglés no: «I like fish».', en: 'For a general taste, Spanish uses the article: “Me gusta el pescado”, “Me gustan las sopas”. English doesn’t: “I like fish”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Me ___ la comida mexicana.', options: ['gustan', 'gusta'], answer: 1, why: 'La comida: una cosa, gusta.', en: 'I like Mexican food.' },
            { prompt: 'Me ___ los mariscos.', options: ['gusta', 'gustan'], answer: 1, why: 'Los mariscos: plural, gustan.', en: 'I like seafood.' },
            { prompt: 'Me ___ caminar por la playa.', options: ['gustan', 'gusta'], answer: 1, why: 'Caminar es un infinitivo: gusta.', en: 'I like walking on the beach.' },
            { prompt: 'Me gusta ___ pescado.', options: ['los', 'el', 'un'], answer: 1, why: 'Gusto general: el pescado. «Los» no va con un nombre en singular.', en: 'I like fish.' },
          ] },
        ] },
        { title: 'Me, te, le, nos · Who likes it', mascot: '/brand/mascot/speaking.webp', coach: 'Me, te, le, nos: la persona. The person.', blocks: [
          { kind: 'lead', text: 'La palabra antes de gusta dice **a quién** le gusta: **me** (a mí), **te** (a ti), **le** (a él, a ella, a usted), **nos** (a nosotros). El verbo sigue mirando la cosa: gusta o gustan.', en: 'The word before gusta says who likes it: me (me), te (you), le (him, her, you formal), nos (us). The verb still looks at the thing: gusta or gustan.' },
          { kind: 'table', title: 'Gustar · las personas · the people', head: ['¿A quién? (who)', 'Pronombre', '+ una cosa / infinitivo', '+ varias cosas'], rows: [
            ['yo', '[[me|violet]]', 'me **gusta** el pescado', 'me **gustan** los postres'],
            ['tú', '[[te|violet]]', 'te **gusta** el pescado', 'te **gustan** los postres'],
            ['él · ella · usted', '[[le|violet]]', 'le **gusta** el pescado', 'le **gustan** los postres'],
            ['nosotros · nosotras', '[[nos|violet]]', 'nos **gusta** el pescado', 'nos **gustan** los postres'],
            ['vosotros · vosotras (España)', 'os', 'os gusta el pescado', 'os gustan los postres'],
            ['ellos · ellas · ustedes', 'les', 'les gusta el pescado', 'les gustan los postres'],
          ], note: 'Hoy usas **me, te, le, nos**; **os** y **les** solo los reconoces. Con un nombre: «**A** Carmen **le** gusta el pescado». La a + persona va primero; el le también se dice.' },
          { kind: 'tip', icon: '💬', title: 'A mí también · A mí no', text: 'Para reaccionar: «Me gusta el café». — «**A mí también**» (me too) o «**A mí no**» (not me). Hoy son frases fijas; los pronombres después de a (a mí, a ti) son la clase 033.', en: 'To react: “I like coffee.” — “A mí también” (me too) or “A mí no” (not me). Today they are fixed phrases; pronouns after “a” (a mí, a ti) are class 033.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Diego habla con Carmen: «¿___ gusta el pescado?»', options: ['Le', 'Me', 'Te'], answer: 2, why: 'Diego pregunta a Carmen (tú): te gusta.', en: 'Diego talks to Carmen: “Do you like fish?”' },
            { prompt: 'Valeria habla de Diego: «A Diego no ___ gusta el ruido».', options: ['le', 'te', 'nos'], answer: 0, why: 'Diego = él: le gusta.', en: 'Valeria talks about Diego: “Diego doesn’t like noise.”' },
            { prompt: 'Carmen y Diego: «___ gusta Veracruz».', options: ['Me', 'Le', 'Nos'], answer: 2, why: 'Carmen y Diego = nosotros: nos gusta.', en: 'Carmen and Diego: “We like Veracruz.”' },
            { prompt: 'Valeria habla con Carmen (usted): «Señora, ¿___ gusta la música?»', options: ['le', 'te', 'me'], answer: 0, why: 'Con usted, el pronombre es le: ¿le gusta?', en: 'Valeria talks to Carmen (formal): “Madam, do you like music?”' },
          ] },
        ] },
        { title: 'Encantar y el grado · Love it or not', mascot: '/brand/mascot/seated.webp', coach: 'Me encanta = me gusta mucho, mucho.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'ME ENCANTA · ME ENCANTAN', question: '¿Qué me encanta?', en: 'I love…', formula: ['me encanta + una cosa / infinitivo', 'me encantan + varias cosas'],
            meaning: '**Encantar** funciona igual que gustar, pero es más fuerte: «I love». Encantar ya es mucho: normalmente no se añade «mucho».',
            examples: [
              { es: 'Me [[encanta|blue]] el mar.', en: 'I love the sea.' },
              { es: 'Nos [[encantan|orange]] los postres caseros.', en: 'We love home-made desserts.' },
              { es: 'A Carmen le [[encanta|blue]] bailar.', en: 'Carmen loves dancing.' },
            ],
            note: 'Para el no fuerte, usa gustar: «No me gusta **nada**» (I don’t like it at all).' },
          { kind: 'table', title: 'De más a menos · From most to least', head: ['Frase', 'English'], rows: [
            ['Me **encanta** el pescado.', 'I love fish.'],
            ['Me gusta **mucho** el pescado.', 'I really like fish.'],
            ['Me gusta el pescado.', 'I like fish.'],
            ['**No** me gusta el pescado.', 'I don’t like fish.'],
            ['**No** me gusta **nada** el pescado.', 'I don’t like fish at all.'],
          ], note: 'El «no» va antes del pronombre: **no me** gusta. Igual que con los reflexivos: no me levanto.' },
          { kind: 'compare', title: '¿Me levanto o me gusta? · Class 031 vs today', columns: [
            { tone: 'neutral', label: 'Reflexivo · class 031', sentence: 'Me levant**o** a las siete.', idea: 'Yo hago la acción: el verbo va con yo (levanto).', en: 'I get up at seven.' },
            { tone: 'blue', label: 'Gustar · today', sentence: 'Me [[gusta|blue]] el café.', idea: 'El café «me gusta»: el verbo va con la cosa (gusta).', en: 'I like coffee.' },
            { tone: 'orange', label: 'Gustar · plural', sentence: 'Me [[gustan|orange]] los libros.', idea: 'Los libros: plural. Nunca «me gusto».', en: 'I like books.' },
          ] },
          { kind: 'decide', title: 'Antes de decir gusta o gustan · Before you choose', steps: [
            { q: '¿Después viene un infinitivo (cenar, viajar, bailar)? (an action)', yes: 'Usa **gusta / encanta**: «Me gusta cenar tarde».', no: 'next' },
            { q: '¿Viene un nombre en plural o dos cosas (los postres, la pasta y la pizza)? (plural)', yes: 'Usa **gustan / encantan**: «Me gustan los postres».', no: 'Una cosa en singular: **gusta / encanta**: «Me encanta el mar».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Diego: «¡Me ___ la pizza!» (I love it)', options: ['encantan', 'encanto', 'encanta'], answer: 2, why: 'La pizza: una cosa, encanta.', en: 'Diego: “I love pizza!”' },
            { prompt: 'Diego: «No me gusta ___ el ruido».', options: ['muy', 'mucho no', 'nada'], answer: 2, why: 'No me gusta nada = I don’t like it at all.', en: 'Diego: “I don’t like noise at all.”' },
            { prompt: '«Me encanta» es…', options: ['más fuerte que «me gusta».', 'menos fuerte que «me gusta».', 'igual que «no me gusta».'], answer: 0, why: 'Encantar = love: más fuerte que gustar.', en: '“Me encanta” is…' },
          ] },
        ] },
        { title: 'También, tampoco, sí, no · Reacting to tastes', mascot: '/brand/mascot/portrait.webp', coach: '¿Igual o diferente? Same or different?', blocks: [
          { kind: 'lead', text: 'En la recepción, Carmen y Diego reaccionan a los gustos del otro. Para decir que tienes **el mismo gusto** o **un gusto diferente**, mira primero si la frase es **positiva** (me gusta) o **negativa** (no me gusta).', en: 'At reception, Carmen and Diego react to each other’s tastes. To say that you have the same taste or a different one, first look at whether the sentence is positive (me gusta) or negative (no me gusta).' },
          { kind: 'table', title: 'Cuatro reacciones · Four reactions', head: ['La otra persona dice…', 'Yo, igual (same)', 'Yo, diferente (different)'], rows: [
            ['Me gusta el mar. (+)', '[[A mí también|neutral]]. (me too)', '[[A mí no|neutral]]. (not me)'],
            ['No me gusta el ruido. (−)', '[[A mí tampoco|neutral]]. (me neither)', '[[A mí sí|neutral]]. (I do)'],
            ['Como pescado. (+)', '[[Yo también|neutral]]. (me too)', '[[Yo no|neutral]]. (I don’t)'],
            ['No como carne. (−)', '[[Yo tampoco|neutral]]. (me neither)', '[[Yo sí|neutral]]. (I do)'],
          ], note: '**También** responde a una frase positiva; **tampoco**, a una frase negativa. Con gustar y encantar: **a mí**. Con otros verbos (como, quiero, vivo): **yo**.' },
          { kind: 'tip', icon: '🔑', title: '¿A mí o yo? · “A mí” or “yo”?', text: 'Si la otra persona dice **me** gusta o **me** encanta, respondes con **a mí**: «A mí también». Si dice un verbo normal con yo (com**o**, quier**o**), respondes con **yo**: «Yo también». ¿Y la otra persona? Pregunta: «¿Y a ti?» (gustar) o «¿Y tú?» (otros verbos).', en: 'If the other person says “me gusta” or “me encanta”, you answer with “a mí”: “A mí también”. If they use a normal verb with “yo” (como, quiero), you answer with “yo”: “Yo también”. To ask back: “¿Y a ti?” (gustar) or “¿Y tú?” (other verbs).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Carmen: «Me encanta el mar». Diego también: «___»', options: ['A mí tampoco.', 'A mí también.', 'Yo también.'], answer: 1, why: 'Frase positiva y el mismo gusto: también. Con encantar: a mí.', en: 'Carmen: “I love the sea.” Diego loves it too: “Me too.”' },
            { prompt: 'Diego: «No me gusta el ruido». A Carmen no le gusta: «___»', options: ['A mí tampoco.', 'A mí también.', 'A mí sí.'], answer: 0, why: 'Frase negativa y el mismo gusto: tampoco.', en: 'Diego: “I don’t like noise.” Carmen doesn’t like it either: “Me neither.”' },
            { prompt: 'Carmen: «No me gustan los mariscos». A Diego le encantan: «___»', options: ['A mí no.', 'A mí tampoco.', 'A mí sí.'], answer: 2, why: 'Frase negativa y un gusto diferente: a mí sí.', en: 'Carmen: “I don’t like seafood.” Diego loves it: “I do.”' },
            { prompt: 'Diego: «Me gusta cenar tarde». Carmen prefiere cenar temprano: «___»', options: ['A mí no.', 'A mí sí.', 'A mí tampoco.'], answer: 0, why: 'Frase positiva y un gusto diferente: a mí no.', en: 'Diego: “I like having dinner late.” Carmen prefers to eat early: “Not me.”' },
            { prompt: 'Valeria: «No como carne». Carmen tampoco come carne: «___»', options: ['A mí tampoco.', 'Yo tampoco.', 'Yo también.'], answer: 1, why: 'Comer no funciona como gustar: el verbo va con yo. Frase negativa, lo mismo: yo tampoco.', en: 'Valeria: “I don’t eat meat.” Carmen doesn’t either: “Me neither.”' },
            { prompt: 'Diego: «Quiero ir a Casa Rosa». Carmen también quiere: «___»', options: ['A mí también.', 'Yo tampoco.', 'Yo también.'], answer: 2, why: 'Querer es un verbo normal (quiero): yo. Frase positiva, lo mismo: yo también.', en: 'Diego: “I want to go to Casa Rosa.” Carmen wants to go too: “Me too.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Una cosa o varias? One thing or several?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno busca qué mira el verbo: la cosa. Después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. Pregunta siempre: ¿qué cosa gusta?' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Me gusto los libros.', right: 'Me gustan los libros.', why: 'El verbo no va con yo, va con los libros (plural): gustan.' },
            { wrong: 'Me gusta los postres.', right: 'Me gustan los postres.', why: 'Los postres son varios: gustan.' },
            { wrong: 'Yo gusto el pescado.', right: 'Me gusta el pescado.', why: 'La persona va con me, te, le, nos; el verbo va con el pescado: me gusta.' },
            { wrong: 'Me gustan bailar y cantar.', right: 'Me gusta bailar y cantar.', why: 'Con infinitivos, siempre gusta, aunque sean dos.' },
            { wrong: 'Me gusta pescado.', right: 'Me gusta el pescado.', why: 'Un gusto general lleva artículo: el pescado.' },
            { wrong: 'Me gusta muy la pasta.', right: 'Me gusta mucho la pasta.', why: 'Con gustar, mucho (a lot). «Muy» va con adjetivos: muy rica.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Me gustan las ensaladas.', 'Me gusto las ensaladas.', 'Me gusta las ensaladas.'], answer: 0, why: 'Las ensaladas: plural, gustan.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['A Diego le gusta la pizza.', 'Diego gusta la pizza.', 'A Diego gusta la pizza.'], answer: 0, why: 'A Diego + le + gusta + la pizza.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres gustos reales: uno con gusta + cosa, uno con gustan + plural y uno con gusta + infinitivo. Tú respondes «A mí también» o «A mí no».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la recepción', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Elegir restaurante · Choosing a restaurant', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Valeria y tu alumno es Carmen y Diego. Después, tu alumno toca cada expresión marcada y dice por qué es gusta o gustan.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada para ver por qué se usa.' } },
          { kind: 'explore', title: '¿Qué les gusta?', setting: 'Viernes, cinco de la tarde, en la recepción del hotel. Valeria habla con Carmen y Diego de usted; ellos hablan entre ellos de tú. (Friday, 5 p.m., at the hotel reception.)', lines: [
            { who: 'Valeria', text: 'Buenas tardes. Tengo tres restaurantes para esta noche. Señora, ¿qué comida [[le gusta|violet]]?', en: 'Good afternoon. I have three restaurants for tonight. Madam, what food do you like?' },
            { who: 'Carmen', text: '[[Me encanta el pescado|blue]]. Y [[me gustan mucho los mariscos|orange]].', en: 'I love fish. And I really like seafood.' },
            { who: 'Valeria', text: 'Entonces El Puerto es perfecto: pescado, mariscos y música en vivo. Señor, ¿a usted le gusta el pescado?', en: 'Then El Puerto is perfect: fish, seafood and live music. Sir, do you like fish?' },
            { who: 'Diego', text: 'No, [[no me gusta nada|blue]]. Y la música en vivo, no, gracias. [[Me gusta cenar|blue]] con calma.', en: 'No, I don’t like it at all. And live music, no thanks. I like having dinner in peace.' },
            { who: 'Carmen', text: '¡Diego! ¿No [[te gusta|violet]] la música?', en: 'Diego! Don’t you like music?' },
            { who: 'Diego', text: 'Sí, pero en casa. En un restaurante [[me gusta hablar|blue]] y comer tranquilo.', en: 'Yes, but at home. In a restaurant I like talking and eating quietly.' },
            { who: 'Valeria', text: '¿Y La Huerta? Es vegetariana: ensaladas, verduras, sopas…', en: 'And La Huerta? It’s vegetarian: salads, vegetables, soups…' },
            { who: 'Diego', text: 'Mmm, [[me gustan las ensaladas|orange]].', en: 'Mmm, I like salads.' },
            { who: 'Carmen', text: '[[A mí no|neutral]]. Como verduras, pero no me encantan.', en: 'Not me. I eat vegetables, but I don’t love them.' },
            { who: 'Valeria', text: 'Bueno, también está Casa Rosa: pasta, pizza y pescado del día. Es un lugar tranquilo.', en: 'Well, there’s also Casa Rosa: pasta, pizza and fish of the day. It’s a quiet place.' },
            { who: 'Diego', text: '¡[[Me encantan la pasta y la pizza|orange]]!', en: 'I love pasta and pizza!' },
            { who: 'Carmen', text: 'Y yo, el pescado del día. ¡Y [[nos encantan|orange]] los postres! Casa Rosa, por favor.', en: 'And the fish of the day for me. And we love desserts! Casa Rosa, please.' },
          ], notes: {
            'le gusta': 'Valeria habla con Carmen de **usted**: el pronombre es **le**. ¿Qué comida le gusta?',
            'Me encanta el pescado': 'El pescado: una cosa, **encanta**. Encantar es más fuerte que gustar: I love.',
            'me gustan mucho los mariscos': 'Los mariscos: plural, **gustan**. «Mucho» va después del verbo.',
            'no me gusta nada': '**No** antes de me, **nada** después: I don’t like it at all.',
            'Me gusta cenar': 'Cenar es un infinitivo: siempre **gusta**.',
            'te gusta': 'Carmen habla con Diego de **tú**: te gusta. La música: una cosa, gusta.',
            'me gusta hablar': 'Dos infinitivos (hablar y comer): **gusta**, no gustan.',
            'me gustan las ensaladas': 'Las ensaladas: plural, **gustan**.',
            'A mí no': 'Frase fija para decir «not me». Carmen reacciona a «me gustan las ensaladas».',
            'Me encantan la pasta y la pizza': 'Dos cosas juntas (la pasta **y** la pizza) son plural: **encantan**.',
            'nos encantan': 'Carmen habla de ella y de Diego: **nos**. Los postres: plural, encantan.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué le encanta a Carmen?', options: ['Las ensaladas.', 'El pescado.', 'La pizza.'], answer: 1, why: '«Me encanta el pescado».', en: 'What does Carmen love?' },
            { prompt: '¿Por qué Diego no quiere El Puerto?', options: ['Es vegetariano.', 'No le gusta el pescado y no quiere música en vivo.', 'No le gustan los postres.'], answer: 1, why: '«No me gusta nada» (el pescado) y «la música en vivo, no, gracias».', en: 'Why doesn’t Diego want El Puerto?' },
            { prompt: '¿Qué les encanta a los dos?', options: ['Las verduras.', 'Los postres.', 'La música en vivo.'], answer: 1, why: '«¡Nos encantan los postres!».', en: 'What do they both love?' },
          ] },
        ] },
        { title: '¿Gusta o gustan? · In the scene', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'A Carmen o a Diego le… · Carmen or Diego likes…', categories: [
            { id: 'gusta', label: 'GUSTA · una cosa / infinitivo', tone: 'blue' },
            { id: 'gustan', label: 'GUSTAN · varias cosas', tone: 'orange' },
          ], items: [
            { text: '… el pescado del día', answer: 'gusta', why: 'Una cosa: le gusta el pescado del día.' },
            { text: '… los mariscos', answer: 'gustan', why: 'Plural: le gustan los mariscos.' },
            { text: '… cenar con calma', answer: 'gusta', why: 'Infinitivo: le gusta cenar con calma.' },
            { text: '… las ensaladas', answer: 'gustan', why: 'Plural: le gustan las ensaladas.' },
            { text: '… la música en vivo', answer: 'gusta', why: 'Una cosa: le gusta la música en vivo.' },
            { text: '… la pasta y la pizza', answer: 'gustan', why: 'Dos cosas juntas: le gustan.' },
          ] },
          { kind: 'teacher', text: 'Pregunta rápida sobre el diálogo: «¿Qué no le gusta nada a Diego?». Respuesta esperada con le: «A Diego no le gusta nada el pescado».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Qué cosa gusta? What is liked?',
      steps: [
        { title: 'Elige · Choose', blocks: [
          { kind: 'choice', items: [
            { context: 'En Casa Rosa, Diego mira la carta. (Diego reads the menu.)', prompt: 'A Diego le ___ las pizzas de Casa Rosa.', options: ['gusto', 'gustan', 'gusta'], answer: 1, why: 'Las pizzas: plural, gustan. El verbo no va con Diego.', en: 'Diego likes the pizzas at Casa Rosa.' },
            { context: 'Diego pregunta a Carmen. (Diego asks Carmen.)', prompt: 'Carmen, ¿te ___ el flan?', options: ['gusta', 'gustas', 'gustan'], answer: 0, why: 'El flan: una cosa, gusta. «Te» ya dice que es para tú.', en: 'Carmen, do you like the flan?' },
            { context: 'Valeria habla de su ciudad. (Valeria talks about her city.)', prompt: 'A mí me ___ caminar por el malecón.', options: ['gusto', 'gusta', 'gustan'], answer: 1, why: 'Caminar es un infinitivo: gusta.', en: 'I like walking along the seafront.' },
            { context: 'Diego explica su gusto. (Diego explains his taste.)', prompt: 'No me gusta ___.', options: ['música alta', 'la música alta'], answer: 1, why: 'Un gusto general lleva artículo: la música alta.', en: 'I don’t like loud music.' },
            { context: 'Carmen y Diego, a la mesa. (Carmen and Diego, at the table.)', prompt: '___ los postres caseros.', options: ['Encantamos', 'Nos encantan', 'Nos encanta'], answer: 1, why: 'Nosotros = nos; los postres = plural, encantan.', en: 'We love home-made desserts.' },
            { context: 'Carmen prueba la sopa. (Carmen tastes the soup.)', prompt: 'Mmm, me gusta ___ esta sopa.', options: ['mucho', 'muy'], answer: 0, why: 'Con gustar, mucho. «Muy» va con adjetivos: muy rica.', en: 'Mmm, I really like this soup.' },
          ] },
        ] },
        { title: '¿A quién? · Who?', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'classify', title: '¿Quién tiene el gusto? · Who has the taste?', categories: [
            { id: 'yo', label: 'yo · me', tone: 'violet' },
            { id: 'tu', label: 'tú · te', tone: 'violet' },
            { id: 'el', label: 'él · ella · usted · le', tone: 'violet' },
            { id: 'nos', label: 'nosotros · nos', tone: 'violet' },
          ], items: [
            { text: 'Te encanta el mar.', answer: 'tu', why: 'Te = a ti (tú).' },
            { text: 'Le gustan las flores.', answer: 'el', why: 'Le = a él, a ella o a usted.' },
            { text: 'Nos gusta cenar tarde.', answer: 'nos', why: 'Nos = a nosotros.' },
            { text: 'Me encantan los tacos.', answer: 'yo', why: 'Me = a mí (yo).' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'A Carmen le gusto el pescado.', ok: false, options: ['A Carmen le gustan el pescado.', 'Carmen gusta el pescado.', 'A Carmen le gusta el pescado.'], answer: 2, why: 'El pescado: una cosa, gusta. «Gusto» es la forma de yo.' },
            { sentence: 'Nos encantan los restaurantes pequeños.', ok: true, why: 'Correcta: nosotros = nos; los restaurantes = plural, encantan.' },
            { sentence: 'Me gusta los espaguetis de Casa Rosa.', ok: false, options: ['Me gusto los espaguetis de Casa Rosa.', 'Me gusta espaguetis de Casa Rosa.', 'Me gustan los espaguetis de Casa Rosa.'], answer: 2, why: 'Los espaguetis: plural, gustan.' },
            { sentence: 'Diego gusta la pizza.', ok: false, options: ['A Diego gusta la pizza.', 'Diego le gustan la pizza.', 'A Diego le gusta la pizza.'], answer: 2, why: 'La persona va con a + le: a Diego le gusta.' },
            { sentence: 'Me gustan cocinar y comer.', ok: false, options: ['Me gusta cocinar y comer.', 'Me gusto cocinar y comer.', 'Me gustan cocino y como.'], answer: 0, why: 'Con infinitivos, siempre gusta, aunque sean dos.' },
          ] },
        ] },
        { title: 'La cena en Casa Rosa · Dinner at Casa Rosa', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'A la mesa · At the table', lines: [
            { who: 'Mesero', text: 'Buenas noches. Hoy tenemos pescado del día y pasta casera.' },
            { who: 'Carmen', text: 'Yo quiero el pescado. Me ___ el pescado a la plancha.', options: ['encantan', 'encanto', 'encanta'], answer: 2, why: 'El pescado: una cosa, encanta.' },
            { who: 'Diego', text: 'Y yo, la pasta. Carmen, ¿___ gustan los espaguetis?', options: ['me', 'te', 'le'], answer: 1, why: 'Diego habla con Carmen (tú): te gustan.' },
            { who: 'Carmen', text: 'Sí, pero no me ___ mucho el tomate.', options: ['gusto', 'gusta', 'gustan'], answer: 1, why: 'El tomate: una cosa, gusta.' },
            { who: 'Mesero', text: '¿Y de postre? El flan de la casa es famoso.' },
            { who: 'Diego', text: '¡Sí, por favor! A los dos ___ encantan los postres.', options: ['les', 'me', 'nos'], answer: 2, why: 'Diego habla de él y de Carmen: a los dos nos encantan.' },
            { who: 'Carmen', text: 'Y a mí me gusta ___ un café después de cenar.', options: ['tomamos', 'tomar', 'tomo'], answer: 1, why: 'Después de gusta va el infinitivo: tomar.' },
          ] },
        ] },
        { title: 'Construye y transforma · Build and change', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['gusta', 'Me', 'el', 'mar'], accept: ['Me gusta el mar', 'El mar me gusta'], en: 'I like the sea.' },
            { tiles: ['encantan', 'Nos', 'postres', 'los'], accept: ['Nos encantan los postres', 'Los postres nos encantan'], en: 'We love desserts.' },
            { tiles: ['no', 'Diego', 'A', 'le', 'gusta', 'ruido', 'el'], accept: ['A Diego no le gusta el ruido'], en: 'Diego doesn’t like noise.' },
            { tiles: ['te', '¿Qué', 'gusta', 'comer?'], accept: ['¿Qué te gusta comer?'], en: 'What do you like to eat?' },
          ] },
          { kind: 'rewrite', title: 'Transforma · Change the sentence', items: [
            { prompt: 'Me gusta la ensalada.', instruction: 'Cambia a plural: las ensaladas. (Make it plural.)', accept: ['Me gustan las ensaladas'] },
            { prompt: 'Me gusta la playa.', instruction: 'Usa encantar (I love). (Use encantar.)', accept: ['Me encanta la playa'] },
            { prompt: 'Me gustan las sopas.', instruction: 'Ahora habla de Carmen (ella). (Now talk about Carmen.)', accept: ['A Carmen le gustan las sopas', 'Le gustan las sopas', 'A Carmen le gustan las sopas también'] },
            { prompt: 'I love travelling.', instruction: 'Escribe la frase en español con encantar. (Write it in Spanish.)', accept: ['Me encanta viajar', 'A mí me encanta viajar'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Valeria', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Valeria llama a Carmen · Valeria calls Carmen', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué llama Valeria?). Segunda escucha: tu alumno levanta la mano cada vez que oye gusta, gustan, encanta o encantan. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes gusta, gustan, encanta o encantan. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Valeria', channel: 'MENSAJE DE VOZ · DE LA RECEPCIÓN DEL HOTEL, VIERNES 18:10', src: '/audio/grammar-live/332.mp3',
            before: 'Carmen y Diego están en la playa. Valeria deja un mensaje de voz para Carmen. ¿Qué crees que dice? (Valeria leaves Carmen a voice message. What do you think she says?)',
            gist: { prompt: '¿Para qué llama Valeria?', options: ['Para dar la reserva en Casa Rosa.', 'Para cancelar la cena.', 'Para recomendar La Huerta.'], answer: 0, why: '«Hay mesa en Casa Rosa a las ocho y media».', en: 'Why does Valeria call?' },
            details: [
              { prompt: '¿A qué hora es la mesa en Casa Rosa?', options: ['A las nueve.', 'A las siete.', 'A las ocho y media.'], answer: 2, why: '«Hay mesa en Casa Rosa a las ocho y media».', en: 'What time is the table at Casa Rosa?' },
              { prompt: '¿Qué le gusta a Diego, según Valeria?', options: ['El pescado.', 'La música en vivo.', 'La pasta y la pizza.'], answer: 2, why: '«A su esposo le gustan la pasta y la pizza».', en: 'What does Diego like, according to Valeria?' },
              { prompt: '¿Qué le encanta a Valeria?', options: ['Los postres.', 'El ruido.', 'Los mariscos.'], answer: 0, why: '«Y los postres… ¡a mí me encantan!».', en: 'What does Valeria love?' },
              { prompt: '¿Qué otra opción da Valeria?', options: ['El Puerto, a las nueve, con música.', 'La Huerta, a las ocho.', 'Casa Rosa, el sábado.'], answer: 0, why: '«El Puerto tiene mesa a las nueve, con música».', en: 'What other option does Valeria give?' },
            ],
            transcript: 'Buenas tardes, señora Carmen. Soy Valeria, de la recepción del hotel. Tengo buenas noticias: hay mesa en Casa Rosa a las ocho y media. A su esposo [[le gustan|orange]] la pasta y la pizza, y allí la pasta es casera. Y a usted [[le encanta|blue]] el pescado: hoy viernes tienen pescado del día. Es un lugar tranquilo, sin música en vivo. A Diego no [[le gusta|blue]] el ruido, ¿verdad? Y los postres… ¡a mí [[me encantan|orange]]! El flan de la casa es delicioso. Si a usted no [[le gusta|blue]] la idea, El Puerto tiene mesa a las nueve, con música. Por favor, llámeme a la recepción. ¡Hasta luego!',
            reply: { teacher: 'Tú eres Valeria. Tu alumno es Carmen y responde al mensaje: si le gusta la idea, qué le encanta de Casa Rosa y una pregunta, por ejemplo «¿A usted le gusta el flan?».', self: 'Responde a Valeria en voz alta como Carmen: «Hola, Valeria. Me gusta la idea… Me encanta…». Termina con una pregunta. (Answer Valeria aloud as Carmen.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Elegir juntos', coach: 'Tus gustos, de verdad. Your real tastes.',
      steps: [
        { title: '¿Qué te gusta? · What do you like?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Valeria, en la recepción, y preguntas con tú. Tu alumno responde con sus gustos reales, en frases cortas. Tú reaccionas con «A mí también» o «A mí no» y sigues.', self: 'Imagina que estás en la recepción con Valeria. Lee la pregunta, responde en voz alta con tus gustos reales y, si quieres, escribe tu respuesta. (Answer aloud with your real tastes.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué comida te gusta? · What food do you like?', followUps: ['¿Y qué comida te encanta? (love)', '¿Te gusta la comida mexicana? (Mexican food?)'], phrases: ['Me [[gusta|blue]] el pescado / la pasta…', 'Me [[gustan|orange]] las ensaladas / los tacos…', 'Me [[encanta|blue]] …'], hint: 'Una cosa: gusta. Varias cosas: gustan. No olvides el artículo: el, la, los, las.', example: 'Me gusta mucho la comida mexicana. Me gustan los tacos y me encanta el guacamole.', next: 'Ahora, lo que no te gusta.' },
            { q: '¿Qué no te gusta nada? · What don’t you like at all?', followUps: ['¿La comida picante? (spicy food?)', '¿El ruido en un restaurante? (noise?)'], phrases: ['No me [[gusta|blue]] nada …', 'No me [[gustan|orange]] …'], hint: 'No + me + gusta(n) + nada. «Nada» puede ir al final: «No me gusta nada».', example: 'No me gusta nada la comida picante. Y no me gustan los restaurantes con música alta.', next: 'Ahora, actividades.' },
            { q: '¿Qué te encanta hacer en un viaje? · What do you love doing on a trip?', followUps: ['¿Te gusta caminar por la ciudad? (walking around?)', '¿Te gusta cenar tarde o temprano? (late or early?)', '¿Te gusta probar comida nueva? (try new food?)'], phrases: ['Me [[encanta|blue]] + infinitivo', 'Me [[gusta|blue]] caminar / nadar / probar…'], hint: 'Con un infinitivo, siempre gusta o encanta, aunque sean dos acciones.', example: 'En un viaje me encanta caminar por la ciudad y probar comida nueva. No me gusta cenar tarde.', next: 'Ahora, reacciona.', teacher: 'Di tú un gusto («Me gusta cenar tarde») y tu alumno reacciona: «A mí también» o «A mí no».' },
            { q: 'Valeria: «Me gusta la música en vivo». ¿Y a ti? · And you?', followUps: ['«Me encantan los postres». ¿Y a ti?', '«Me gusta mucho el mar». ¿Y a ti?'], phrases: ['[[A mí también|neutral]].', '[[A mí no|neutral]].', 'A mí no: no me gusta el ruido.'], hint: 'Si estás de acuerdo: «A mí también». Si no: «A mí no» y una razón corta.', example: 'A mí no: no me gusta el ruido. Pero los postres… ¡a mí también!', next: 'Ahora, habla de otra persona.' },
            { q: 'Tu amigo o amiga viene a cenar. ¿Qué le gusta? · What does your friend like?', followUps: ['¿Qué no le gusta? (doesn’t like?)', '¿Qué le encanta? (loves?)'], phrases: ['A mi amiga Ana [[le|violet]] gusta …', 'A mi amigo [[le|violet]] gustan …', 'No [[le|violet]] gusta nada …'], hint: 'Para otra persona: a + nombre + le + gusta(n).', example: 'A mi amiga Ana le encanta la comida vegetariana. No le gusta nada el pescado.', next: 'Para terminar, elige restaurante.' },
            { q: 'La Huerta, El Puerto o Casa Rosa: ¿cuál eligen tú y tu amigo? ¿Por qué? · Which one do you choose together?', followUps: ['¿Qué les gusta a los dos? (what do you both like?) Responde con nos.', '¿Por qué no El Puerto? (why not El Puerto?)'], phrases: ['[[Nos|violet]] gusta …', '[[Nos|violet]] encantan …', 'A mí me gusta … y a mi amigo le gusta …'], hint: 'Los dos juntos: nos gusta(n). Cada persona: me gusta / le gusta.', example: 'Elegimos La Huerta. A Ana le encanta la comida vegetariana y a mí me gustan las sopas. Nos gustan los lugares tranquilos.', teacher: 'Pregunta «¿Por qué no El Puerto?» para provocar una frase negativa: «No nos gusta la música alta».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Valeria y te hace las preguntas con «¿Qué te gusta?», «¿Qué le gusta a tu amigo?».', self: 'Ahora tú eres Valeria: haz las preguntas en voz alta («¿Qué te gusta?», «¿Te gustan los postres?») y responde como un cliente. (Now you are Valeria.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para la recepción', coach: 'Gustos claros, mensaje corto. Clear tastes, short message.',
      steps: [
        { title: 'Pide una recomendación · Ask for a recommendation', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos gusta / gustan y me / le / nos. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien gusta / gustan. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje para Valeria · A message for Valeria', situation: 'Estás en el hotel de Veracruz con un amigo o una amiga. Mañana quieren cenar fuera. Escribe un mensaje a Valeria, en la recepción, con sus gustos, para pedir un restaurante. (You and a friend are at the hotel. Write to Valeria at reception with your tastes to ask for a restaurant.)', task: [
            'Saluda y di quién eres: nombre y habitación. (Say hello and who you are.)',
            'Di qué te gusta o te encanta con **me gusta(n) / me encanta(n)**. (Your tastes.)',
            'Di qué le gusta a tu amigo o amiga con **le gusta(n)**. (Your friend’s tastes.)',
            'Di algo de los dos con **nos gusta(n)** o **no nos gusta**. (Something about both of you.)',
            'Pide la recomendación: «¿Qué restaurante nos recomienda?». (Ask for the recommendation.)',
          ], starters: ['Hola, Valeria. Soy …, de la habitación …', 'Mañana mi amigo / mi amiga … y yo queremos cenar fuera.', 'Me gusta mucho …', 'A … le encanta …', 'No nos gusta …', '¿Qué restaurante nos recomienda? Gracias.'],
            words: ['me gusta', 'me gustan', 'me encanta', 'le gusta', 'nos gusta', 'no … nada', 'el pescado', 'la pasta', 'las ensaladas', 'los postres', 'la música', 'tranquilo', 'cenar'],
            model: 'Hola, Valeria. Soy Sam, de la habitación 310. Mañana mi amiga Ana y yo queremos cenar fuera. A Ana [[le encanta|blue]] la comida vegetariana, pero a mí [[me gusta|blue]] mucho el pescado. [[Nos gustan|orange]] los lugares tranquilos: no [[nos gusta|blue]] la música alta. Y [[nos encantan|orange]] los postres. ¿Qué restaurante nos recomienda? Gracias.',
            minWords: 35,
            checks: [
              { label: 'Tus gustos: me gusta(n) o me encanta(n) (your tastes)', pattern: '(?<!\\p{L})me\\s+(?:gusta|encanta)n?(?!\\p{L})', tip: 'Di qué te gusta: «Me gusta el pescado», «Me encantan los postres».' },
              { label: 'Tu amigo o amiga: le gusta(n) o le encanta(n) (your friend)', pattern: '(?<!\\p{L})le\\s+(?:gusta|encanta)n?(?!\\p{L})', tip: 'Habla de la otra persona: «A Ana le gusta…».' },
              { label: 'Los dos: nos gusta(n) o nos encanta(n) (both of you)', pattern: '(?<!\\p{L})nos\\s+(?:gusta|encanta)n?(?!\\p{L})', tip: 'Di algo de los dos: «Nos gustan los lugares tranquilos».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:me\\s+gusto|yo\\s+gusto|yo\\s+encanto)(?!\\p{L})', why: 'Con gustar y encantar, el verbo va con la cosa: «me gusta», «me encanta», no «gusto» o «encanto».' },
              { pattern: '(?<!\\p{L})(?:gusta|encanta)\\s+(?:los|las)(?!\\p{L})', why: 'Con los / las (plural), el verbo es plural: «me gustan los postres», «me encantan las sopas».' },
              { pattern: '(?<!\\p{L})(?:gustan|encantan)\\s+(?:cenar|comer|viajar|caminar|bailar|nadar|cocinar|hablar)(?!\\p{L})', why: 'Con un infinitivo, siempre singular: «me gusta cenar», «nos encanta viajar».' },
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
            { tone: 'blue', label: 'GUSTA · ENCANTA', formula: 'me gusta + el / la + cosa · + infinitivo', example: 'Me gusta el café y me gusta viajar.', caption: 'una cosa o una acción', en: 'one thing or an action' },
            { tone: 'orange', label: 'GUSTAN · ENCANTAN', formula: 'me gustan + los / las + cosas', example: 'Me gustan los libros. Me encantan la pasta y la pizza.', caption: 'varias cosas', en: 'several things' },
            { tone: 'violet', label: 'ME · TE · LE · NOS', formula: 'a quién: me, te, le (a Carmen le…), nos', example: 'A Diego no le gusta nada el ruido.', caption: 'la persona va antes', en: 'the person comes first' },
            { tone: 'neutral', label: 'REACCIONAR', formula: 'a mí también · a mí no', example: '—Me encantan los postres. —¡A mí también!', caption: 'frases fijas', en: 'me too · not me' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregunta siempre: **¿qué cosa gusta?** Una cosa o un infinitivo: gusta. Varias cosas: gustan. La persona (me, te, le, nos) no cambia el verbo: nunca «me gusto».', en: 'Always ask: what is being liked? One thing or an infinitive: gusta. Several things: gustan. The person (me, te, le, nos) doesn’t change the verb: never “me gusto”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'A Carmen le ___ los mariscos.', options: ['gusto', 'gustan', 'gusta'], answer: 1, why: 'Los mariscos: plural, gustan.', en: 'Carmen likes seafood.' },
            { prompt: 'Diego, ¿te ___ bailar?', options: ['gusta', 'gustas', 'gustan'], answer: 0, why: 'Bailar: infinitivo, gusta.', en: 'Diego, do you like dancing?' },
            { prompt: '___ encanta Veracruz: es una ciudad preciosa.', options: ['Nosotros', 'Encantamos', 'Nos'], answer: 2, why: 'La persona va con nos: nos encanta Veracruz.', en: 'We love Veracruz: it’s a beautiful city.' },
            { prompt: '___ la comida mexicana.', options: ['Me encanta', 'Yo encanto', 'Me encantan'], answer: 0, why: 'La comida: una cosa, me encanta.', en: 'I love Mexican food.' },
            { prompt: '—¿Te gusta el café? —Sí, ___ mucho.', options: ['me gustas', 'te gusta', 'me gusta'], answer: 2, why: 'Respondes por ti: me gusta. El café: una cosa.', en: '—Do you like coffee? —Yes, I really like it.' },
          ] },
        ] },
        { title: 'Tus errores y otra situación · Your mistakes and a new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'review' },
          { kind: 'choice', title: 'Ahora, el cine · Now, the cinema', items: [
            { context: 'Eliges una película con tu familia. (You choose a film with your family.)', prompt: 'A mi hermano le ___ las películas de terror.', options: ['gusto', 'gustan', 'gusta'], answer: 1, why: 'Las películas: plural, gustan.', en: 'My brother likes horror films.' },
            { context: 'Habla tu familia. (Your family speaks.)', prompt: 'Nos ___ ir al cine los domingos.', options: ['gusta', 'gustan', 'gustamos'], answer: 0, why: 'Ir: infinitivo, gusta.', en: 'We like going to the cinema on Sundays.' },
            { context: 'Preguntas a tu hermana. (You ask your sister.)', prompt: '¿Te ___ las series en español?', options: ['gustas', 'gustan', 'gusta'], answer: 1, why: 'Las series: plural, gustan.', en: 'Do you like series in Spanish?' },
          ] },
        ] },
        { title: 'El siguiente paso · The next step', blocks: [
          { kind: 'link', title: 'Siguiente: Clase 033 · Pronombres tónicos tras preposición', text: 'Hoy dices «a mí también» y «a mí no» como frases fijas. En la clase 033 ves el sistema completo: a mí, a ti, para mí, con ella, y las formas especiales conmigo y contigo. Así puedes decir con claridad «a mí me gusta, a ti no».', en: 'Today you say “a mí también” and “a mí no” as fixed phrases. In class 033 you see the whole system: a mí, a ti, para mí, con ella, and the special forms conmigo and contigo. Then you can say clearly “I like it, you don’t”.', href: '/gramatica/pronombres-tras-preposicion', label: 'Ir a la clase 033' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te gusta y qué te encanta? ¿Qué no te gusta nada?». Respuesta esperada con gusta / gustan bien elegidos. Tarea: mandar el mensaje de Escribir y añadir tres gustos de una persona de la familia con le.' },
        ] },
      ],
    },
  ],
};
