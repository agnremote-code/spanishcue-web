import type { LiveLesson } from '../types';

/**
 * Lesson 379 · A2 · Preguntar sin imponer: podrías, te importaría (course unit G079).
 * One scene runs through the class: Daniela Rojas moves into a flat (departamento)
 * in an old building in Guadalajara (Mexico). Her brother Beto helps with the
 * boxes. She talks to the building manager, señora Ochoa (usted), to an older
 * neighbour, don Ramiro Fuentes (usted), and to Paula, the young neighbour in
 * 4.º B (tú). In the voice message Daniela (Mexican voice, tú) asks Paula three
 * favours before a work trip.
 * Content: polite requests as fixed chunks, built only on poder, importar,
 * hacer (el favor), gustar and querer / venir: ¿Podrías…? (tú) / ¿Podría
 * (usted)…? / ¿Podrían…? + infinitive; ¿Te / Le importaría + infinitive?;
 * ¿Me harías / haría el favor de + infinitive?; Me gustaría + infinitive / noun;
 * the courtesy imperfect (quería pedirte…, venía a + infinitive), which speaks
 * about NOW (coverage audit row 16). Answering: «No, claro que no» to
 * ¿te importaría…?, declining with «Lo siento, es que…». Contrast with the
 * direct options the learner already has: imperative + por favor (058) and
 * ¿Puedes…? / ¿Me pasas…? (040). Mistakes: *¿Te importaría a cerrar…?,
 * *¿Podrías de…?, *el favor regar, *Yo me gustaría, tú/usted mixing
 * (*don Ramiro, ¿podrías mover su coche?), *Me gustaba (for a wish now).
 * Kept out on purpose: the full conditional paradigm and its other uses
 * (class 103), quisiera (only receptively, in the Ampliación).
 */
export const lesson: LiveLesson = {
  id: 379,
  level: 'A2',
  title: 'Preguntar sin imponer: podrías, te importaría',
  subtitle: 'Pedir favores con suavidad a amigos y a desconocidos: «¿podrías…?», «¿le importaría…?», «me gustaría…», «quería pedirte…».',
  legend: [
    { tone: 'blue', label: '¿PODRÍAS…? / ¿PODRÍA…? + infinitivo · could you…?' },
    { tone: 'teal', label: '¿TE / LE IMPORTARÍA…? · ¿ME HARÍAS EL FAVOR DE…? · would you mind…? (extra soft)' },
    { tone: 'orange', label: 'ME GUSTARÍA · QUERÍA · VENÍA A · what I want, said softly' },
    { tone: 'violet', label: 'DIRECTO · imperativo, ¿puedes…? (direct, for small things and close people)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Pedir sin imponer', coach: 'La misma petición, más suave. The same request, softer.',
      steps: [
        { title: 'El día de la mudanza · Moving day', blocks: [
          { kind: 'lead', text: 'Daniela Rojas se muda hoy a un departamento en un edificio antiguo de Guadalajara, en México. Su hermano Beto la ayuda con las cajas. Daniela no conoce a nadie y necesita muchos favores. ¿Cómo pide algo a una persona que no conoce? Sin imponer: con **¿podrías…?**, **¿le importaría…?**, **me gustaría…**', en: 'Daniela Rojas is moving into a flat in an old building in Guadalajara, Mexico, today. Her brother Beto is helping with the boxes. Daniela doesn’t know anyone and needs lots of favours. How do you ask a stranger for something? Without imposing: with ¿podrías…? (could you…?), ¿le importaría…? (would you mind…?), me gustaría… (I’d like…).' },
          { kind: 'table', title: 'Cuatro maneras de pedir lo mismo · Four ways to ask the same thing', head: ['Petición', '¿Cómo suena? · How does it sound?'], rows: [
            ['[[Cierra|violet]] el portón, por favor.', 'Directo: imperativo (clase 058). Normal con familia y amigos. · Direct.'],
            ['¿[[Puedes|violet]] cerrar el portón?', 'Directo pero amable (clase 040). · Direct but friendly.'],
            ['¿[[Podrías|blue]] cerrar el portón?', 'Más suave: no impones. · Softer: you don’t impose.'],
            ['¿[[Te importaría|teal]] cerrar el portón?', 'Muy suave: das espacio para decir que no. · Very soft: the other person can say no.'],
          ], note: 'Las cuatro son correctas. Eliges según la persona (amigo o desconocido) y el favor (pequeño o grande). El portón es la puerta grande del edificio.' },
          { kind: 'guide', text: { teacher: 'Tú lees las cuatro peticiones con tono diferente y tu alumno dice cuál usa con su hermano y cuál con un vecino que no conoce.', self: 'Lee las cuatro peticiones en voz alta. ¿Cuál usas con tu hermano? ¿Y con un vecino que no conoces? (Which one with your brother? Which one with a stranger?)' } },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué petición es la más suave?', options: ['¿Te importaría cerrar el portón?', '¿Puedes cerrar el portón?', 'Cierra el portón, por favor.'], answer: 0, why: '«¿Te importaría…?» pregunta si es un problema para la otra persona: es la forma más suave de las tres.', en: 'Which request is the softest?' },
            { prompt: '«Cierra el portón, por favor» es…', options: ['la forma más formal.', 'incorrecto: nunca se usa.', 'correcto, pero directo: normal con familia y amigos.'], answer: 2, why: 'El imperativo con «por favor» es correcto y muy normal con personas cercanas; con desconocidos, una pregunta suena más amable.', en: '“Close the gate, please” is…' },
          ] },
        ] },
        { title: '¿Podrías…? ¿Podría usted…? · Could you…?', mascot: '/brand/mascot/studying.webp', coach: 'Poder, pero más suave. Can, but softer.', blocks: [
          { kind: 'concept', tone: 'blue', label: '¿PODRÍAS…? + INFINITIVO', question: '¿Cómo pido una acción con suavidad?', en: '¿Podrías…? is a softer ¿Puedes…? (could you instead of can you). With usted it has no -s: ¿Podría (usted)…? With ustedes: ¿Podrían…? Always followed by an infinitive. Today we learn these forms as fixed phrases; the whole tense (the conditional) comes in class 103.', formula: ['¿podrías + infinitivo? (tú)', '¿podría (usted) + infinitivo? · ¿podrían (ustedes) + infinitivo?'],
            meaning: '**¿Podrías…?** es un **¿puedes…?** más suave: no das una orden, preguntas si la otra persona puede. Con **usted**, sin -s: **¿podría…?** Con **ustedes**: **¿podrían…?** Después va siempre un **infinitivo**. Hoy aprendes estas formas como bloques fijos; el tiempo completo (el condicional) llega en la clase 103.',
            examples: [
              { es: 'Beto, ¿[[podrías|blue]] traer la caja de los libros?', en: 'Beto, could you bring the box of books?' },
              { es: 'Señora Ochoa, ¿[[podría|blue]] darme la llave del buzón?', en: 'Mrs Ochoa, could you give me the mailbox key?' },
              { es: 'Señores, ¿[[podrían|blue]] dejar la mesa en la cocina?', en: 'Gentlemen, could you leave the table in the kitchen?' },
            ],
            note: 'El pronombre va al final del infinitivo o delante de podrías (clase 065): «¿Podrías ayudar**me**?» = «¿**Me** podrías ayudar?».' },
          { kind: 'table', title: 'Una forma para cada persona · One form for each person', head: ['¿A quién? · To whom?', 'Forma', 'Ejemplo'], rows: [
            ['tú (Paula, Beto)', '[[¿podrías…?|blue]]', '¿Podrías abrir la ventana?'],
            ['usted (señora Ochoa)', '[[¿podría…?|blue]]', '¿Podría abrir la ventana?'],
            ['ustedes (los vecinos)', '[[¿podrían…?|blue]]', '¿Podrían abrir la ventana?'],
            ['yo: pido permiso · I ask permission', '[[¿podría…?|blue]]', '¿Podría pasar un momento?'],
          ], note: 'Con «yo» y con «usted» la forma es igual: «¿Podría pasar?» (¿yo puedo pasar?) y «¿Podría pasar usted?». El contexto lo dice. (Same form for I and usted.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniela habla con don Ramiro, un vecino mayor (usted): «¿___ ayudarme con esta puerta?»', options: ['Podrías', 'Podría', 'Podrían'], answer: 1, why: 'Con usted, la forma no lleva -s: ¿podría…?', en: 'Daniela talks to don Ramiro, an older neighbour: “Could you help me with this door?”' },
            { prompt: 'Daniela habla con Paula (tú): «¿Me ___ prestar una escalera?»', options: ['podrías de', 'podría', 'podrías'], answer: 2, why: 'Con tú: ¿podrías…? Después va el infinitivo directamente, sin «de».', en: 'Daniela talks to Paula: “Could you lend me a ladder?”' },
          ] },
        ] },
        { title: '¿Te importaría…? ¿Me harías el favor de…? · Would you mind…?', mascot: '/autoestudio/mascot/noting.webp', coach: 'Más espacio para decir que no. More room to say no.', blocks: [
          { kind: 'concept', tone: 'teal', label: '¿TE / LE IMPORTARÍA + INFINITIVO?', question: '¿Es un problema para ti?', en: '¿Te importaría…? = would you mind…? It works like gustar (class 032): te for tú, le for usted, les for ustedes, and the verb is always importaría + infinitive. ¿Me harías el favor de…? = would you do me the favour of…?: with usted, ¿Me haría el favor de…?', formula: ['¿te / le / les + importaría + infinitivo?', '¿me harías (tú) / haría (usted) el favor de + infinitivo?'],
            meaning: '**¿Te importaría…?** pregunta: ¿es un problema para ti? Funciona como «gustar» (clase 032): **te** para tú, **le** para usted, **les** para ustedes, y el verbo siempre es **importaría** + infinitivo. **¿Me harías el favor de…?** pide un favor de forma clara y amable; lleva **de** antes del infinitivo.',
            examples: [
              { es: 'Paula, ¿[[te importaría|teal]] sostener la puerta un momento?', en: 'Paula, would you mind holding the door for a moment?' },
              { es: 'Don Ramiro, ¿[[le importaría|teal]] mover su coche?', en: 'Don Ramiro, would you mind moving your car?' },
              { es: 'Beto, ¿[[me harías el favor de|teal]] bajar la basura?', en: 'Beto, would you do me a favour and take the rubbish down?' },
            ],
            note: 'En México y en otros países también se oye en presente: «¿Me haces el favor de…?». Ojo con el tono: con voz seca puede sonar a orden. (With a sharp tone it can sound like an order.)' },
          { kind: 'tip', icon: '💡', title: '¿Cómo respondes? · How do you answer?', text: 'A «¿Te importaría…?» la respuesta más clara es **«No, claro que no»** o **«No, para nada»**: no me importa, lo hago. «Claro» y «Con gusto» también aceptan. Un «Sí» solo es confuso: puede significar «sí, me importa». Para decir que no: **«Lo siento, es que…»** + una razón.', en: 'To “Would you mind…?” the clearest answer is “No, claro que no” or “No, para nada”: I don’t mind, I’ll do it. “Claro” and “Con gusto” also accept. A plain “Sí” is confusing: it can mean “yes, I do mind”. To say no: “Lo siento, es que…” + a reason.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Paula pregunta: «¿Te importaría bajar la música?». Daniela acepta: «___»', options: ['Sí, me importa.', 'No, claro que no. Ahora la bajo.', 'Sí, no.'], answer: 1, why: '«No, claro que no» = no me importa: acepto. «Sí, me importa» es decir que no.', en: 'Paula asks: “Would you mind turning the music down?” Daniela says yes.' },
            { prompt: 'Daniela habla con la señora Ochoa (usted): «¿___ importaría abrir el portón?»', options: ['Me', 'Te', 'Le'], answer: 2, why: 'Con usted: le importaría. «Te» es para tú; «me» sería «¿es un problema para mí?».', en: 'Daniela talks to Mrs Ochoa: “Would you mind opening the gate?”' },
          ] },
        ] },
        { title: 'Me gustaría, quería, venía a · I’d like, I wanted, I’ve come to', mascot: '/brand/mascot/speaking.webp', coach: 'Lo que quieres, dicho con suavidad. What you want, said softly.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'DECIR LO QUE QUIERES · SIN IMPONER', question: '¿Cómo digo «quiero» con suavidad?', en: '“Quiero…” can sound strong. Softer: me gustaría + infinitive or noun (I’d like), quería + infinitive (the imperfect of courtesy: it speaks about NOW, not the past) and venía a + infinitive when you arrive somewhere (I’ve come to…).', formula: ['me gustaría + infinitivo / nombre', 'quería + infinitivo · venía a + infinitivo'],
            meaning: '«Quiero…» puede sonar fuerte. Más suave: **me gustaría** + infinitivo o nombre. Con el **imperfecto** también suavizas: **quería** pedirte un favor, **venía a** recoger las llaves. Ojo: aquí el imperfecto no habla del pasado: es **ahora**. Es el imperfecto de cortesía.',
            examples: [
              { es: '[[Me gustaría|orange]] hablar con la administradora.', en: 'I’d like to speak to the building manager.' },
              { es: 'Paula, [[quería pedirte|orange]] un favor.', en: 'Paula, I wanted to ask you a favour.' },
              { es: 'Buenos días, [[venía a|orange]] pagar la cuota del mes.', en: 'Good morning, I’ve come to pay this month’s fee.' },
            ],
            note: 'Con «gustar», la persona va con «me / te / le», nunca con «yo»: «**Me** gustaría», no «yo me gustaría» (clase 032).' },
          { kind: 'compare', title: '¿Ahora o antes? · Now or before?', columns: [
            { tone: 'orange', label: 'AHORA · cortesía', sentence: '[[Quería|orange]] preguntarle por el agua caliente.', idea: 'Daniela pregunta ahora, con suavidad.', en: 'I wanted to ask you about the hot water. (= I’m asking now, politely)' },
            { tone: 'neutral', label: 'ANTES · pasado (clase 049)', sentence: 'De niña quería ser veterinaria.', idea: 'Un deseo del pasado: ya no es así.', en: 'As a girl, I wanted to be a vet.' },
            { tone: 'neutral', label: 'SIEMPRE · gusto general', sentence: 'Me gusta vivir en el centro.', idea: '«Me gusta» = un gusto general; «me gustaría» = un deseo ahora.', en: 'I like living in the centre. (a general taste)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniela entra en la oficina del edificio: «Buenos días, ___ a recoger un paquete».', options: ['vengo de', 'venir', 'venía'], answer: 2, why: '«Venía a» + infinitivo: explicas con suavidad por qué llegas.', en: 'Daniela walks into the building office: “Good morning, I’ve come to pick up a parcel.”' },
            { prompt: 'En la cafetería: «___ un café con leche, por favor».', options: ['Me gustaría', 'Me gusta', 'Yo me gustaría'], answer: 0, why: 'Un deseo ahora: me gustaría. «Me gusta» es un gusto general, y «yo» no va con gustar.', en: 'At the café: “I’d like a white coffee, please.”' },
          ] },
        ] },
        { title: '¿Directo o suave? · Direct or soft?', mascot: '/brand/mascot/seated.webp', coach: '¿Quién es y qué le pides? Who is it and what are you asking?', blocks: [
          { kind: 'compare', title: 'Tres peticiones de Daniela · Three of Daniela’s requests', columns: [
            { tone: 'violet', label: 'DIRECTO · su hermano, algo pequeño', sentence: 'Beto, [[pásame|violet]] la cinta, por favor.', idea: 'Familia y un favor mínimo: el imperativo es natural.', en: 'Beto, pass me the tape, please.' },
            { tone: 'blue', label: 'SUAVE · una vecina joven', sentence: 'Paula, ¿[[podrías|blue]] recibir mi paquete mañana?', idea: 'Una persona nueva y un favor normal.', en: 'Paula, could you take in my parcel tomorrow?' },
            { tone: 'teal', label: 'MUY SUAVE · un vecino mayor, un favor grande', sentence: 'Don Ramiro, ¿[[le importaría|teal]] dejar su coche en la calle hoy?', idea: 'Usted y un favor que molesta: máxima suavidad.', en: 'Don Ramiro, would you mind leaving your car in the street today?' },
          ] },
          { kind: 'decide', title: 'Vas a pedir algo · You are going to ask for something', steps: [
            { q: '¿Es alguien muy cercano y un favor pequeño (la sal, la cinta)?', yes: 'Puedes ser directo: «Pásame la sal», «¿Me pasas la sal?», «¿Puedes…?».', no: 'next' },
            { q: '¿Hablas de usted (una persona mayor, un desconocido, un cliente)?', yes: 'Usa **¿podría…?** o **¿le importaría…?**', no: 'Usa **¿podrías…?** o **¿te importaría…?**' },
            { q: '¿El favor es grande o molesta (mover el coche, esperar)?', yes: 'Empieza con «**Quería** pedirte / pedirle un favor» y usa **¿te / le importaría…?**', no: '**¿Podrías / podría…?** es suficiente.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un vecino que Daniela no conoce tiene que esperar media hora para usar el elevador (lift). ¿Qué le dice Daniela?', options: ['Quería pedirle un favor: ¿le importaría esperar media hora?', 'Espere media hora.', '¿Puedes esperar media hora?'], answer: 0, why: 'Desconocido (usted) y un favor que molesta: quería pedirle + ¿le importaría…?', en: 'A neighbour Daniela doesn’t know has to wait half an hour to use the lift. What does she say to him?' },
            { prompt: 'En la cena, Daniela quiere la sal. Beto está a su lado. ¿Qué es natural?', options: ['¿Me pasas la sal?', '¿Le importaría pasarme la sal?', 'Venía a pedir la sal.'], answer: 0, why: 'Familia y un favor mínimo: «¿Me pasas la sal?» es natural. «Le importaría» con su hermano suena raro o irónico.', en: 'At dinner Daniela wants the salt. Beto is next to her. What is natural?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Bloques fijos, sin piezas de más. Fixed chunks, no extra pieces.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla antes de ver la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: '¿Te importaría a cerrar la ventana?', right: '¿Te importaría cerrar la ventana?', why: 'Después de «importaría» va el infinitivo directamente, sin «a». (No preposition.)' },
            { wrong: '¿Podrías de llamar al técnico?', right: '¿Podrías llamar al técnico?', why: 'Igual que «¿puedes llamar?»: poder + infinitivo, sin «de». (No de after podrías.)' },
            { wrong: '¿Me harías el favor regar las plantas?', right: '¿Me harías el favor de regar las plantas?', why: 'El bloque es completo: «el favor **de**» + infinitivo. (The chunk needs de.)' },
            { wrong: 'Yo me gustaría conocer a los vecinos.', right: 'Me gustaría conocer a los vecinos.', why: 'Con gustar no se usa «yo»: me gustaría. (Like me gusta: no yo.)' },
            { wrong: 'Don Ramiro, ¿podrías mover su coche?', right: 'Don Ramiro, ¿podría mover su coche?', why: 'Daniela le habla de usted («su coche»): podría, sin -s. No mezcles tú y usted. (Don’t mix tú and usted.)' },
            { wrong: 'Señora Ochoa, me gustaba hablar con usted.', right: 'Señora Ochoa, me gustaría hablar con usted.', why: '«Me gustaba» es un gusto del pasado. Para un deseo ahora: me gustaría. (Gustaba = I used to like.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['¿Le importaría a esperar aquí?', '¿Le importaría esperar aquí?', '¿Le importaría de esperar aquí?'], answer: 1, why: 'Importaría + infinitivo, sin preposición.', en: 'Which sentence is correct? (“Would you mind waiting here?”)' },
            { prompt: 'Daniela, a la señora Ochoa: «___ hablar con usted un momento».', options: ['Me gustaba', 'Me gustaría', 'Yo gustaría'], answer: 1, why: 'Deseo ahora, con gustar: me gustaría.', en: 'Daniela, to Mrs Ochoa: “I’d like to talk to you for a moment.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno pide tres cosas reales de la clase (abrir la ventana, repetir una frase, prestar un bolígrafo): una con ¿podrías / podría…?, otra con ¿te / le importaría…? y otra con «quería…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Cajas, llaves y vecinos', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'La mañana de la mudanza · The morning of the move', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres la señora Ochoa y Paula; tu alumno es Daniela. Después tu alumno toca cada forma marcada y dice si la petición es con tú o con usted.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di: ¿tú o usted? (Tú or usted?)' } },
          { kind: 'explore', title: 'Nueva en el edificio', setting: 'Sábado, nueve de la mañana. Daniela llega al edificio con Beto y muchas cajas. Primero habla con la administradora, la señora Ochoa (usted); después, con Paula, la vecina del 4.º B (tú). (Saturday, 9 a.m., moving day.)', lines: [
            { who: 'Daniela', text: 'Buenos días, señora Ochoa. Soy Daniela Rojas, la nueva vecina del 4.º A. [[Venía a|orange]] recoger las llaves.', en: 'Good morning, Mrs Ochoa. I’m Daniela Rojas, the new neighbour in 4A. I’ve come to pick up the keys.' },
            { who: 'Sra. Ochoa', text: '¡Bienvenida, Daniela! Aquí tiene: la del portón y la del departamento. ¿Necesita algo más?', en: 'Welcome, Daniela! Here you are: the one for the gate and the one for the flat. Do you need anything else?' },
            { who: 'Daniela', text: 'Sí, [[quería pedirle|orange]] un favor. El camión de la mudanza llega a las diez. ¿[[Podría|blue]] abrir el portón grande a esa hora?', en: 'Yes, I wanted to ask you a favour. The removal van arrives at ten. Could you open the big gate at that time?' },
            { who: 'Sra. Ochoa', text: 'Claro, con gusto. Pero el coche de don Ramiro está en la entrada.', en: 'Of course, gladly. But don Ramiro’s car is in the entrance.' },
            { who: 'Daniela', text: 'Uy… ¿[[le importaría|teal]] hablar con él? Todavía no lo conozco.', en: 'Oh… would you mind talking to him? I don’t know him yet.' },
            { who: 'Sra. Ochoa', text: 'No, para nada. Ahora mismo lo llamo por teléfono.', en: 'No, not at all. I’ll phone him right now.' },
            { who: 'Paula', text: 'Hola, soy Paula, del 4.º B. ¡Cuántas cajas! ¿Te ayudo?', en: 'Hi, I’m Paula, from 4B. So many boxes! Shall I help you?' },
            { who: 'Daniela', text: '¡Mil gracias! ¿[[Podrías|blue]] sostener la puerta del elevador un momento?', en: 'Thanks so much! Could you hold the lift door for a moment?' },
            { who: 'Paula', text: 'Claro. ¿Y esa caja tan grande? ¿Es la tele?', en: 'Sure. And that huge box? Is it the TV?' },
            { who: 'Daniela', text: 'Sí. Beto, ¿[[me harías el favor de|teal]] subirla tú? Pesa mucho. Y Paula, [[me gustaría|orange]] invitarte a cenar el viernes, para darte las gracias.', en: 'Yes. Beto, would you do me a favour and take it up? It’s really heavy. And Paula, I’d like to invite you to dinner on Friday, to say thank you.' },
            { who: 'Paula', text: '¡Me encantaría! Solo una cosa: ¿[[te importaría|teal]] cerrar el portón después? Los niños del 2.º salen a jugar a la calle.', en: 'I’d love to! Just one thing: would you mind closing the gate afterwards? The kids from the second floor go out to play in the street.' },
            { who: 'Daniela', text: 'No, claro que no. Yo misma lo cierro.', en: 'No, of course not. I’ll close it myself.' },
          ], notes: {
            'Venía a': '**Venía a** + infinitivo: Daniela explica por qué llega. Es imperfecto, pero habla de **ahora**: suena más suave que «vengo a».',
            'quería pedirle': '**Quería pedirle** un favor: otra vez el imperfecto de cortesía (ahora, no antes). «Le» porque habla de usted con la señora Ochoa.',
            'Podría': '**¿Podría…?** + infinitivo, sin -s porque es usted. Es un «¿puede…?» más suave.',
            'le importaría': '**¿Le importaría** + infinitivo? «Le» para usted. Es un favor que molesta (hablar con un vecino), por eso Daniela usa la forma muy suave.',
            'Podrías': '**¿Podrías…?** con -s: Paula es joven y la trata de tú. Favor pequeño, tono amable.',
            'me harías el favor de': '**¿Me harías el favor de** + infinitivo? Con su hermano, una forma cariñosa de pedir algo pesado. «Subirla»: la tele (clase 065).',
            'me gustaría': '**Me gustaría** + infinitivo: un deseo ahora, con suavidad. Con gustar no hay «yo».',
            'te importaría': '**¿Te importaría…?** con «te» porque Paula habla de tú. Y Daniela responde bien: «No, claro que no» = lo hago.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué va Daniela a la oficina de la señora Ochoa?', options: ['A pagar la cuota.', 'A recoger las llaves.', 'A presentar a su hermano.'], answer: 1, why: 'Dice: «Venía a recoger las llaves».', en: 'Why does Daniela go to Mrs Ochoa’s office?' },
            { prompt: '¿Cuál es el problema con el portón?', options: ['El coche de don Ramiro está en la entrada.', 'El portón no abre.', 'No hay llave del portón.'], answer: 0, why: 'La señora Ochoa dice: «el coche de don Ramiro está en la entrada».', en: 'What is the problem with the gate?' },
            { prompt: '¿Qué pide Paula al final?', options: ['Una invitación a cenar.', 'Ayuda con la tele.', 'Cerrar el portón, por los niños.'], answer: 2, why: '«¿Te importaría cerrar el portón…? Los niños del 2.º salen a jugar».', en: 'What does Paula ask for at the end?' },
          ] },
        ] },
        { title: '¿Tú o usted? · Tú or usted?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más peticiones en el edificio · More requests in the building', categories: [
            { id: 'tu', label: 'A Paula o a Beto · tú', tone: 'blue' },
            { id: 'usted', label: 'A la señora Ochoa o a don Ramiro · usted', tone: 'teal' },
          ], items: [
            { text: '¿Podrías llevar esta lámpara a la sala?', answer: 'tu', why: 'Podrías, con -s: tú.' },
            { text: '¿Le importaría esperar un momento en la entrada?', answer: 'usted', why: 'Le importaría: usted.' },
            { text: '¿Me haría el favor de firmar aquí?', answer: 'usted', why: 'Haría, sin -s: usted.' },
            { text: '¿Te importaría prestarme tu taladro? (drill)', answer: 'tu', why: 'Te importaría y «tu taladro»: tú.' },
            { text: '¿Podría abrirme el cuarto de la basura?', answer: 'usted', why: 'Podría, sin -s: usted.' },
            { text: '¿Me harías el favor de abrir esa caja?', answer: 'tu', why: 'Harías, con -s: tú.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno cambia tres peticiones de tú a usted o al revés: «¿Podrías llevar…?» → «¿Podría llevar…?»; «¿Le importaría…?» → «¿Te importaría…?».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero: ¿tú o usted? ¿Favor grande o pequeño? First: tú or usted? Big or small favour?',
      steps: [
        { title: 'La primera semana de Daniela · Daniela’s first week', blocks: [
          { kind: 'choice', items: [
            { context: 'Daniela habla con el técnico de internet (usted). (The internet technician.)', prompt: '¿___ instalar el módem cerca de la ventana?', options: ['Podrías usted', 'Podría usted', 'Puedes usted'], answer: 1, why: 'Con usted: podría, sin -s. «Podrías» y «puedes» son de tú.', en: 'Could you install the modem near the window?' },
            { context: 'Daniela escribe a Paula. (A message to Paula.)', prompt: '¿Te importaría ___ mis cartas esta semana?', options: ['recoger', 'a recoger', 'de recoger'], answer: 0, why: 'Importaría + infinitivo, sin preposición.', en: 'Would you mind collecting my letters this week?' },
            { context: 'Daniela entra en una cerrajería. (A locksmith’s.)', prompt: 'Buenas tardes. ___ a recoger las copias de mis llaves.', options: ['Venir', 'Vienes', 'Venía'], answer: 2, why: 'Venía a + infinitivo: dices con suavidad por qué llegas.', en: 'Good afternoon. I’ve come to pick up the copies of my keys.' },
            { context: 'Un vecino pregunta a Daniela: «¿Le importaría esperar cinco minutos?». (A neighbour asks her to wait.)', prompt: 'Daniela acepta: «___»', options: ['Sí, para nada.', 'Sí, me importa mucho.', 'No, claro que no. Espero aquí.'], answer: 2, why: 'Para aceptar: «No, claro que no» (no me importa). «Sí, me importa» es rechazar.', en: 'Daniela accepts: “No, of course not. I’ll wait here.”' },
            { context: 'En la panadería de la esquina. (At the corner bakery.)', prompt: 'Buenos días. ___ dos conchas, por favor.', options: ['Me gusta', 'Me gustaría', 'Yo me gustaría'], answer: 1, why: 'Un deseo ahora: me gustaría. «Me gusta» es un gusto general; con gustar no va «yo». (Una concha es un pan dulce mexicano.)', en: 'Good morning. I’d like two conchas (Mexican sweet buns), please.' },
          ] },
        ] },
        { title: '¿Pedir, querer o responder? · Ask, want or answer?', blocks: [
          { kind: 'classify', title: '¿Qué hace cada frase? · What does each sentence do?', categories: [
            { id: 'pedir', label: 'Pide una acción a otra persona · asks someone to do something', tone: 'blue' },
            { id: 'querer', label: 'Dice lo que yo quiero · says what I want', tone: 'orange' },
            { id: 'responder', label: 'Responde a una petición · answers a request', tone: 'neutral' },
          ], items: [
            { text: '¿Me podrías prestar tu escalera?', answer: 'pedir', why: '¿Podrías…? pide una acción a otra persona.' },
            { text: 'Me gustaría pintar la sala de azul.', answer: 'querer', why: 'Me gustaría + infinitivo: lo que yo quiero.' },
            { text: 'No, para nada. Ahora te la traigo.', answer: 'responder', why: '«No, para nada» acepta un «¿te importaría…?».' },
            { text: 'Quería preguntarle por la reunión de vecinos.', answer: 'querer', why: 'Quería + infinitivo: lo que yo quiero, ahora, con suavidad.' },
            { text: '¿Les importaría hablar un poco más bajo?', answer: 'pedir', why: '¿Les importaría…? pide una acción a ustedes.' },
            { text: 'Lo siento, es que hoy trabajo hasta tarde.', answer: 'responder', why: '«Lo siento, es que…» rechaza con una razón.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: '¿Podrías de llevar estas cajas al coche?', ok: false, options: ['¿Podrías a llevar estas cajas al coche?', '¿Podrías llevar estas cajas al coche?', '¿Podrías llevas estas cajas al coche?'], answer: 1, why: 'Podrías + infinitivo, sin «de» ni «a». El infinitivo es «llevar», no «llevas».' },
            { sentence: '¿Le importaría esperar al técnico conmigo, señor Fuentes?', ok: true, why: 'Correcta: usted → le importaría + infinitivo.' },
            { sentence: 'Beto, ¿me harías el favor comprar pan?', ok: false, options: ['Beto, ¿me harías el favor de comprar pan?', 'Beto, ¿me harías el favor a comprar pan?', 'Beto, ¿me harías favor comprar pan?'], answer: 0, why: 'El bloque completo es «el favor de» + infinitivo.' },
            { sentence: 'Yo me gustaría vivir cerca del parque.', ok: false, options: ['Yo gustaría vivir cerca del parque.', 'Me gustaba vivir cerca del parque.', 'Me gustaría vivir cerca del parque.'], answer: 2, why: 'Con gustar no va «yo»: me gustaría. «Me gustaba» es pasado.' },
            { sentence: 'Don Ramiro, ¿podrías prestarme su escalera?', ok: false, options: ['Don Ramiro, ¿podrían prestarme su escalera?', 'Don Ramiro, ¿podrías prestarme tu escalera, usted?', 'Don Ramiro, ¿podría prestarme su escalera?'], answer: 2, why: 'De usted («su escalera»): podría, sin -s. «Podrían» es para ustedes.' },
            { sentence: 'Quería pedirte un favor: ¿me prestas una escalera?', ok: true, why: 'Correcta: «quería pedirte» suaviza y después «¿me prestas…?» es una pregunta directa pero amable entre amigos.' },
          ] },
        ] },
        { title: 'Daniela y don Ramiro · Daniela and don Ramiro', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'En la puerta del 3.º A · At the door of 3A', lines: [
            { who: 'Daniela', text: 'Buenas tardes, don Ramiro. Soy Daniela, la nueva vecina. ___ presentarme.', options: ['Venía de', 'Venía a', 'Venía'], answer: 1, why: 'Venía a + infinitivo: explica por qué llama a la puerta.' },
            { who: 'Don Ramiro', text: '¡Mucho gusto, Daniela! ¿En qué le puedo ayudar?' },
            { who: 'Daniela', text: 'Pues ___ pedirle un favor pequeño.', options: ['quiere', 'quise', 'quería'], answer: 2, why: 'Quería + infinitivo: imperfecto de cortesía, habla de ahora. «Quise» es un hecho pasado; «quiere» es él o usted.' },
            { who: 'Daniela', text: 'Mañana llega otro camión. ¿___ dejar su coche en la calle por la mañana?', options: ['Te importaría', 'Le importa a', 'Le importaría'], answer: 2, why: 'Usted: le importaría + infinitivo, sin «a».' },
            { who: 'Don Ramiro', text: '___. Esta noche lo saco.', options: ['No, me importaría', 'No, claro que no', 'Sí, me importa'], answer: 1, why: 'Acepta: «No, claro que no» = no me importa.' },
            { who: 'Daniela', text: '¡Muchísimas gracias, don Ramiro! Es usted muy amable.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['ayudarme', '¿Podrías', 'la', 'con', 'mesa?'], accept: ['¿Podrías ayudarme con la mesa?'], en: 'Could you help me with the table?' },
            { tiles: ['importaría', '¿Le', 'este', 'firmar', 'papel?'], accept: ['¿Le importaría firmar este papel?'], en: 'Would you mind signing this form?' },
            { tiles: ['gustaría', 'a', 'Me', 'vecinos.', 'invitar', 'los'], accept: ['Me gustaría invitar a los vecinos.'], en: 'I’d like to invite the neighbours.' },
            { tiles: ['harías', 'favor', '¿Me', 'el', 'colgar', 'de', 'este', 'cuadro?'], accept: ['¿Me harías el favor de colgar este cuadro?'], en: 'Would you do me a favour and hang this picture?' },
          ] },
        ] },
        { title: 'Más suave, por favor · Softer, please', blocks: [
          { kind: 'lead', text: 'Daniela escribe sus mensajes muy rápido y suenan un poco duros. Ahora los cambia: misma petición, más suave.', en: 'Daniela types her messages very fast and they sound a bit harsh. Now she changes them: same request, softer.' },
          { kind: 'rewrite', title: 'Misma petición, más suave · Same request, softer', items: [
            { prompt: 'Paula, apaga la luz de la escalera.', instruction: 'Pídelo con «¿Podrías…?» (tú). (Use ¿Podrías…?)', accept: ['¿Podrías apagar la luz de la escalera?', 'Paula, ¿podrías apagar la luz de la escalera?'] },
            { prompt: 'Don Ramiro, cierre la puerta del garaje.', instruction: 'Pídelo con «¿Le importaría…?» (usted). (Use ¿Le importaría…?)', accept: ['¿Le importaría cerrar la puerta del garaje?', 'Don Ramiro, ¿le importaría cerrar la puerta del garaje?'] },
            { prompt: 'Quiero conocer la azotea del edificio.', instruction: 'Dilo más suave con «Me gustaría…». (Use Me gustaría…)', accept: ['Me gustaría conocer la azotea del edificio'] },
            { prompt: 'Beto, sube la tele con cuidado.', instruction: 'Usa «¿Me harías el favor de…?» (tú). (Use ¿Me harías el favor de…?)', accept: ['¿Me harías el favor de subir la tele con cuidado?', 'Beto, ¿me harías el favor de subir la tele con cuidado?'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno pide tres favores reales a su profesor o profesora, de usted o de tú según su relación: uno con ¿podría(s)…?, otro con ¿le / te importaría…? y otro con «quería pedirle / pedirte…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Daniela', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un audio para Paula · An audio message for Paula', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota los favores que pide Daniela y la forma que usa para cada uno (¿podrías…?, ¿te importaría…?). Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota cada favor y la forma que usa Daniela. (Listen once for the gist, then note each favour and the form she uses.)' } },
          { kind: 'listen', title: 'Tres favores para el fin de semana', channel: 'NOTA DE VOZ · DE DANIELA PARA PAULA', src: '/audio/grammar-live/379.mp3',
            before: 'Daniela se va de viaje el fin de semana y manda un audio a Paula, su vecina. ¿Qué favores crees que pide? ¿Va a decir «riega mis plantas» o «¿te importaría regar…?»? (What favours will she ask for? Direct or soft?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Daniela se queja del ruido del edificio.', 'Daniela invita a Paula a una fiesta en Monterrey.', 'Daniela pide varios favores a Paula porque se va de viaje.'], answer: 2, why: 'Se va a Monterrey por trabajo y pide ayuda con un paquete, las plantas y la basura.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué llega el sábado?', options: ['Un paquete con libros.', 'Un técnico de internet.', 'Su hermano Beto.'], answer: 0, why: '«El sábado llega un paquete con unos libros».', en: 'What arrives on Saturday?' },
              { prompt: '¿Dónde está la llave del departamento de Daniela?', options: ['Debajo de la puerta.', 'Con don Ramiro.', 'Con la señora Ochoa.'], answer: 2, why: '«La llave está con la señora Ochoa».', en: 'Where is the key to Daniela’s flat?' },
              { prompt: '¿Por qué hay que sacar la basura el sábado en la noche?', options: ['Porque el camión pasa el domingo temprano.', 'Porque Daniela regresa el sábado.', 'Porque el domingo no hay luz.'], answer: 0, why: '«El camión pasa el domingo muy temprano».', en: 'Why does the rubbish need to go out on Saturday night?' },
              { prompt: '¿Qué ofrece Daniela para dar las gracias?', options: ['Invitar a Paula a comer el lunes.', 'Regar las plantas de Paula.', 'Darle un libro.'], answer: 0, why: '«Me gustaría invitarte a comer el lunes».', en: 'What does Daniela offer to say thank you?' },
            ],
            transcript: 'Hola, Paula, soy Daniela, del 4.º A. Oye, [[quería pedirte|orange]] un favor. Bueno, tres favores. Mañana me voy a Monterrey por trabajo y regreso el domingo en la noche. El sábado llega un paquete con unos libros. ¿[[Podrías|blue]] recibirlo tú? El repartidor viene entre las diez y las doce. Otra cosa: ¿[[te importaría|teal]] regar mis plantas el sábado? La llave está con la señora Ochoa; ya hablé con ella. Y, por último, ¿[[me harías el favor de|teal]] sacar mi basura el sábado en la noche? El camión pasa el domingo muy temprano. Ya sé que son muchas cosas; por eso [[me gustaría|orange]] invitarte a comer el lunes, en la fonda de la esquina. Si no puedes, no pasa nada, de verdad. ¿[[Podrías|blue]] contestarme hoy? ¡Mil gracias, Paula!',
            reply: { teacher: 'Tú eres Daniela. Tu alumno es Paula y responde al audio: acepta dos favores con «claro» o «no, claro que no», rechaza uno con «lo siento, es que…» y acepta la invitación.', self: 'Responde a Daniela en voz alta como Paula: acepta dos favores, rechaza uno con «Lo siento, es que…» y acepta la invitación. (Accept two favours, decline one politely, accept the invitation.)' } },
          { kind: 'tip', icon: '🇲🇽', title: 'Palabras de México · Mexican words', text: '**En la noche** = por la noche. Una **fonda** es un restaurante pequeño y sencillo de comida casera. **Departamento** = piso (en España) o apartamento. **Regadera** = ducha.', en: 'En la noche = at night (Spain: por la noche). A fonda is a small, simple restaurant serving home-style food. Departamento = flat or apartment (Spain: piso). Regadera = shower.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú pides sin imponer', coach: 'Mira a la persona y el favor. Look at the person and the favour.',
      steps: [
        { title: 'En el edificio y en tu vida · In the building and in your life', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de vecino, de amigo o de empleado y haces las preguntas de seguimiento. A veces aceptas y a veces dices que no. Tu alumno pide con suavidad y responde.', self: 'Lee la situación y responde en voz alta. Antes de hablar, decide: ¿tú o usted? ¿Favor grande o pequeño? (Decide: tú or usted? Big or small favour?)' } },
          { kind: 'talk', cards: [
            { q: 'Tú eres Daniela. Llamas a la puerta de una vecina mayor que no conoces. Te presentas y le pides un favor. · You are Daniela. Introduce yourself to an older neighbour and ask a favour.', followUps: ['¡Claro! ¿Y cuándo lo necesita? (Of course! When do you need it?)', '¿Necesita algo más? (Do you need anything else?)'], phrases: ['[[Venía a|orange]] presentarme.', '[[Quería pedirle|orange]] un favor.', '¿[[Le importaría|teal]]…? / ¿[[Podría|blue]]…?'], hint: 'Usted: quería pedirle, ¿le importaría…?, ¿podría…? Sin -s.', example: 'Buenas tardes, señora. Soy Daniela, la nueva vecina del 4.º A. Venía a presentarme. Y quería pedirle un favor: ¿le importaría prestarme su escalera mañana? Necesito poner unas cortinas.', next: 'Ahora, con un amigo.' },
            { q: 'Un amigo te ayuda con tu mudanza. Pídele tres cosas. · A friend is helping you move. Ask him for three things.', followUps: ['¿Y dónde pongo esta caja? (Where shall I put this box?)', '¿Algo más? (Anything else?)'], phrases: ['¿[[Podrías|blue]]…?', '¿[[Te importaría|teal]]…?', '¿[[Me harías el favor de|teal]]…?'], hint: 'Tú: podrías, te importaría, me harías. Para algo pequeño, también «¿me pasas…?».', example: '¿Podrías llevar estas sillas a la cocina? Y ¿te importaría montar la cama conmigo? Es muy difícil sola. Ah, y ¿me harías el favor de comprar agua? Hace mucho calor.', teacher: 'Si tu alumno usa el imperativo con su amigo («lleva las sillas»), no es un error. Después da una versión más suave.' },
            { q: 'Llegas a una oficina: el banco, el ayuntamiento o la escuela de tus hijos. Explica a qué vienes. · You arrive at an office. Explain why you have come.', followUps: ['¿Tiene su documento? (Do you have your ID?)', '¿Para cuándo lo necesita? (When do you need it for?)'], phrases: ['Buenos días, [[venía a|orange]]…', '[[Me gustaría|orange]] hablar con…', '¿[[Podría|blue]] darme…?'], hint: 'Venía a + infinitivo para empezar. Al empleado, de usted.', example: 'Buenos días. Venía a abrir una cuenta. Me gustaría hablar con la persona responsable. ¿Podría darme también la lista de documentos?', next: 'Ahora, un problema en casa.' },
            { q: 'Tu vecino pone música muy alta a la una de la mañana. Pídele que la baje, sin enfadarte. · Your neighbour plays loud music at 1 a.m. Ask him to turn it down, politely.', followUps: ['Es que hoy es mi cumpleaños… (It’s my birthday today…)', '¿Y si cierro la ventana? (What if I close the window?)'], phrases: ['Perdone, [[quería pedirle|orange]]…', '¿[[Le importaría|teal]] bajar…?', 'Es que mañana tengo que…'], hint: 'Una razón ayuda: «es que mañana trabajo temprano».', example: 'Perdone, buenas noches. Soy la vecina del 4.º A. Quería pedirle algo: ¿le importaría bajar un poco la música? Es que mañana tengo que trabajar a las siete. Muchas gracias.', teacher: 'Tú haces de vecino: primero no quieres bajar la música. Tu alumno insiste con amabilidad y propone una hora.' },
            { q: 'Alguien te pide un favor. Acepta uno y rechaza otro, con cortesía. · Someone asks you favours. Accept one and decline another, politely.', followUps: ['¿Te importaría cuidar a mi gato el fin de semana? (Would you mind looking after my cat at the weekend?)', '¿Podrías llevarme al aeropuerto el lunes a las cinco? (Could you take me to the airport on Monday at five?)'], phrases: ['No, claro que no. / No, para nada.', 'Claro, con gusto.', 'Lo siento, es que…'], hint: 'A «¿te importaría…?»: «No, claro que no». Para rechazar: «Lo siento, es que…» + razón.', example: 'No, claro que no, me encantan los gatos. Pero lo del aeropuerto… lo siento, es que el lunes trabajo a las seis. ¿Te pido un taxi?', next: 'Ahora, tu cultura.' },
            { q: '¿Cómo se pide un favor en tu idioma? ¿Es diferente con un amigo y con una persona mayor? · How do people ask for favours in your language?', followUps: ['¿Qué te parece más difícil en español? (What seems harder in Spanish?)', '¿Qué forma te gusta más? (Which form do you like best?)'], phrases: ['En mi idioma se dice…', 'Con mis amigos…; con una persona mayor…', '[[Me gustaría|orange]] usar más…'], hint: 'Compara: directo con amigos, suave con desconocidos.', example: 'En inglés decimos «could you…?» o «would you mind…?», como en español. Con mis amigos soy más directo. Con una persona mayor uso formas suaves. Me gustaría usar más «¿te importaría…?».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú pides favores, a veces con una forma demasiado directa o con un error («¿Podrías de ayudarme?»). Tu alumno responde, acepta o rechaza, y corrige los errores.', self: 'Ahora al revés: imagina que alguien te pide tres favores. Di las peticiones en voz alta y respóndelas: acepta dos y rechaza una. (Say the requests, then answer them.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje con favores', coach: 'Amable, claro y con razones. Kind, clear and with reasons.',
      steps: [
        { title: 'Un mensaje a la administradora · A message to the building manager', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada petición: ¿usted en todas?, ¿infinitivo sin preposición?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después revisa cada petición: ¿usted en todas? (Check every request: usted throughout?)' } },
          { kind: 'write', title: 'Mensaje a la señora Ochoa · Message to Mrs Ochoa', situation: 'Eres Daniela. Llevas una semana en el edificio y tienes dos problemas en el departamento. Escribe un mensaje a la administradora, la señora Ochoa, de usted, para pedirle ayuda. (You are Daniela. Write to the building manager, using usted, to ask for help with two problems in the flat.)', task: [
            'Saluda y empieza con «Quería pedirle…» o «Quería preguntarle…». (Start with the courtesy imperfect.)',
            'Pide dos cosas con formas diferentes: ¿podría…?, ¿le importaría…?, ¿me haría el favor de…? (Two requests, two different forms.)',
            'Da una razón para cada petición: es que…, porque… (A reason for each.)',
            'Escribe una frase con «me gustaría». (One sentence with me gustaría.)',
            'Da las gracias y despídete. (Thank her and sign off.)',
          ], starters: ['Buenos días, señora Ochoa:', 'Quería pedirle un favor.', '¿Podría…?', '¿Le importaría…?', 'Me gustaría…', 'Muchas gracias. Saludos, Daniela (4.º A)'],
            words: ['quería pedirle', 'quería preguntarle', '¿podría…?', '¿le importaría…?', '¿me haría el favor de…?', 'me gustaría', 'es que', 'porque', 'el técnico', 'la llave', 'el agua caliente'],
            model: 'Buenos días, señora Ochoa: [[quería pedirle|orange]] ayuda con dos cosas del departamento. Desde el lunes no hay agua caliente en la regadera. ¿[[Podría|blue]] llamar al técnico del edificio? Es que yo no tengo su número. Además, la llave del buzón no funciona bien. ¿[[Le importaría|teal]] darme una copia? Puedo pasar por su oficina mañana a las seis, porque antes trabajo. Por cierto, [[me gustaría|orange]] ir a la próxima reunión de vecinos. ¿Cuándo es? Muchas gracias por todo. Saludos, Daniela Rojas (4.º A)',
            minWords: 60,
            checks: [
              { label: 'Una petición con ¿podría…?, ¿le importaría…? o ¿me haría el favor de…? (a soft request)', pattern: '(?<!\\p{L})(?:podr[ií]a|importar[ií]a|har[ií]a\\s+el\\s+favor)(?!\\p{L})', tip: 'Pide algo con suavidad: «¿Podría llamar al técnico?», «¿Le importaría darme una copia?».' },
              { label: 'Imperfecto de cortesía: quería… (courtesy imperfect)', pattern: '(?<!\\p{L})quer[ií]a\\s+\\p{L}+(?:ar|er|ir)(?:le|me|te)?(?!\\p{L})', tip: 'Empieza con suavidad: «Quería pedirle un favor», «Quería preguntarle…».' },
              { label: 'Me gustaría + infinitivo (I’d like)', pattern: '(?<!\\p{L})me\\s+gustar[ií]a(?!\\p{L})', tip: 'Di lo que quieres con suavidad: «Me gustaría ir a la reunión».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:importar[ií]a|podr[ií]as?|podr[ií]an)\\s+(?:a|de)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: 'Después de «importaría» o «podría» va el infinitivo directamente, sin «a» ni «de»: ¿Le importaría **darme**…?' },
              { pattern: '(?<!\\p{L})el\\s+favor\\s+(?!de(?!\\p{L}))\\p{L}+(?:ar|er|ir)(?:me|le|lo|la)?(?!\\p{L})', why: 'El bloque completo es «el favor **de**» + infinitivo: ¿Me haría el favor **de** llamar…?' },
              { pattern: '(?<!\\p{L})yo\\s+me\\s+gust', why: 'Con gustar no se usa «yo»: **me** gustaría.' },
              { pattern: '(?<!\\p{L})(?:podr[ií]as|te\\s+importar[ií]a|har[ií]as)(?!\\p{L})', why: 'Escribes a la señora Ochoa de usted: **¿podría…?**, **¿le importaría…?**, **¿me haría…?** (sin -s, con le).' },
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
            { tone: 'blue', label: '¿PODRÍAS / PODRÍA…?', formula: '¿podrías (tú) / podría (usted) / podrían (ustedes) + infinitivo?', example: '¿Podrías cerrar el portón? ¿Podría abrir a las diez?', caption: 'un «¿puedes…?» más suave', en: 'a softer “can you…?”: could you…?' },
            { tone: 'teal', label: '¿TE / LE IMPORTARÍA…?', formula: '¿te / le / les importaría + infinitivo? · ¿me harías / haría el favor de + infinitivo?', example: '¿Le importaría mover su coche? —No, claro que no.', caption: 'muy suave: favores grandes, desconocidos', en: 'very soft: would you mind…? Answer “No, claro que no” to say yes' },
            { tone: 'orange', label: 'ME GUSTARÍA · QUERÍA · VENÍA A', formula: 'me gustaría + infinitivo / nombre · quería / venía a + infinitivo', example: 'Me gustaría hablar con usted. Quería pedirte un favor. Venía a recoger las llaves.', caption: 'lo que quieres, ahora, con suavidad', en: 'what you want, now, said softly (the imperfect here means now)' },
            { tone: 'violet', label: 'DIRECTO', formula: 'imperativo + por favor · ¿puedes…? · ¿me pasas…?', example: 'Pásame la cinta, por favor. ¿Me pasas la sal?', caption: 'personas cercanas, favores pequeños', en: 'close people, small favours: correct and natural' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de pedir, mira **a la persona** (¿tú o usted?) y **el favor** (¿pequeño o grande?). Directo para lo pequeño y cercano; **¿podrías…?** para lo normal; **quería pedirte** + **¿te importaría…?** para lo grande. Y siempre infinitivo directo, sin «a» ni «de» (solo «el favor **de**»).', en: 'Before asking, look at the person (tú or usted?) and the favour (small or big?). Direct for small things with close people; ¿podrías…? for normal requests; quería pedirte + ¿te importaría…? for big ones. And always the infinitive straight after, with no a or de (only “el favor de”).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'En un hotel, a la recepcionista: «¿___ despertarme a las seis?»', options: ['Podría', 'Podrías usted', 'Podría de'], answer: 0, why: 'A la recepcionista, de usted: podría + infinitivo.', en: 'At a hotel, to the receptionist: “Could you wake me up at six?”' },
            { prompt: 'Un compañero de trabajo (tú): «¿___ revisar mi presentación?»', options: ['Le importaría', 'Te importaría', 'Te importaría a'], answer: 1, why: 'Tú: te importaría + infinitivo, sin «a».', en: 'A colleague: “Would you mind checking my presentation?”' },
            { prompt: '«¿Le importaría cambiarme de mesa?» El camarero acepta: «___»', options: ['No, claro que no.', 'Sí, para nada.', 'Sí, me importa.'], answer: 0, why: '«No, claro que no» = no me importa: lo hago.', en: '“Would you mind moving me to another table?” The waiter agrees.' },
            { prompt: 'En la oficina de correos: «Buenos días, ___ a enviar este paquete».', options: ['venía', 'vine de', 'venir'], answer: 0, why: 'Venía a + infinitivo: dices por qué llegas, con suavidad.', en: 'At the post office: “Good morning, I’ve come to send this parcel.”' },
            { prompt: 'A tu jefa: «___ hablar con usted cinco minutos».', options: ['Me gustaba', 'Me gustaría', 'Yo me gustaría'], answer: 1, why: 'Un deseo ahora: me gustaría. Sin «yo».', en: 'To your boss: “I’d like to talk to you for five minutes.”' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en un hotel. Now, in a hotel.', blocks: [
          { kind: 'lead', text: 'Nora llega cansada a un hotel en Cartagena y escribe notas muy cortas. Tú las conviertes en peticiones amables para la recepcionista, de usted.', en: 'Nora arrives at a hotel in Cartagena, tired, and writes very short notes. You turn them into polite requests for the receptionist, using usted.' },
          { kind: 'rewrite', title: 'En la recepción · At reception', items: [
            { prompt: 'Cámbieme de habitación.', instruction: 'Pídelo con «¿Podría…?». (Use ¿Podría…?)', accept: ['¿Podría cambiarme de habitación?', '¿Me podría cambiar de habitación?'] },
            { prompt: 'Guárdeme la maleta hasta las tres.', instruction: 'Pídelo con «¿Le importaría…?». (Use ¿Le importaría…?)', accept: ['¿Le importaría guardarme la maleta hasta las tres?', '¿Le importaría guardar mi maleta hasta las tres?'] },
            { prompt: 'Quiero un mapa de la ciudad.', instruction: 'Dilo con «Me gustaría…». (Use Me gustaría…)', accept: ['Me gustaría un mapa de la ciudad', 'Me gustaría tener un mapa de la ciudad'] },
          ] },
        ] },
        { title: 'Ampliación: más formal todavía · Extension: even more formal', mascot: '/brand/mascot/portrait.webp', coach: 'Un correo a una oficina. An email to an office.', blocks: [
          { kind: 'tip', icon: '✍', title: 'Escalera de cortesía · A ladder of politeness', text: 'En correos formales y en tiendas elegantes vas a oír dos formas más. **Quisiera…** (= quería, muy formal: «Quisiera hablar con el director») y **¿Sería posible…?** (would it be possible…?: «¿Sería posible cambiar la cita?»). De momento, entiéndelas como bloques fijos; sus tiempos verbales llegan en B1. Para escribir hoy, tus formas son suficientes: **quería pedirle**, **¿podría…?**, **¿le importaría…?**, **me gustaría**.', en: 'In formal emails and smart shops you will hear two more forms. Quisiera… (= quería, very formal: “I would like to speak to the manager”) and ¿Sería posible…? (would it be possible…?). For now, understand them as fixed phrases; their tenses come at B1. To write today, your forms are enough: quería pedirle, ¿podría…?, ¿le importaría…?, me gustaría.' },
          { kind: 'rewrite', title: 'Del chat al correo formal · From chat to formal email', items: [
            { prompt: 'Hola, ¿puedes mandarme la factura?', instruction: 'Correo a una empresa, de usted, con «¿Podría…?». (Formal email.)', accept: ['¿Podría mandarme la factura?', 'Hola, ¿podría mandarme la factura?', '¿Me podría mandar la factura?', 'Hola, ¿me podría mandar la factura?'] },
            { prompt: 'Quiero cambiar la cita del jueves.', instruction: 'Empieza con el imperfecto de cortesía: «Quería…». (Start with Quería…)', accept: ['Quería cambiar la cita del jueves'] },
            { prompt: '¿Me esperas cinco minutos más?', instruction: 'Al director, de usted, con «¿Le importaría…?». (To the director.)', accept: ['¿Le importaría esperarme cinco minutos más?', '¿Le importaría esperar cinco minutos más?'] },
            { prompt: '¿Me das tu número de teléfono?', instruction: 'A una clienta, de usted, con «¿Me haría el favor de…?». (To a client.)', accept: ['¿Me haría el favor de darme su número de teléfono?', '¿Me haría el favor de darme su número?'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. «Quisiera» y «sería» solo se reconocen aquí; el condicional completo y sus otros usos se estudian en la clase 103 (B1).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 080 · Formas de obligación: hay que, deber, tener que', text: 'Ya sabes pedir sin imponer: «¿Te importaría cerrar el portón?». Pero en un edificio también hay normas: «Hay que cerrar el portón», «Los vecinos deben sacar la basura el sábado». En la clase 080 aprendes a decir qué es necesario u obligatorio con hay que, deber y tener que. Es el paso natural: de pedir un favor a explicar una obligación.', en: 'You can now ask without imposing: “Would you mind closing the gate?” But a building also has rules: “The gate has to be closed”, “Residents must take the rubbish out on Saturday.” In class 080 you learn to say what is necessary or compulsory with hay que, deber and tener que. It is the natural next step: from asking a favour to explaining an obligation.', href: '/gramatica/formas-de-obligacion-hay-que-deber', label: 'Ir a la clase 080' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Pide el mismo favor a tu mejor amigo y a un vecino mayor». Respuesta posible: «¿Podrías ayudarme con la mudanza?» / «Quería pedirle un favor: ¿le importaría ayudarme con una caja?». Tarea: escribir tres mensajes cortos con favores: a un amigo, a un compañero y a una oficina.' },
        ] },
      ],
    },
  ],
};
