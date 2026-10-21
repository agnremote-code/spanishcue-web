// Dublín · a traditional music session, the Trinity College library, a hurling match at
// Croke Park, the Moore Street market and the DART coastal train. Five places, four
// levels each (A0, A1, A2, B1). Every level is written on its own: same place and
// people, different situations.
export default {
  id: 'dublin',
  spots: [
    // ------------------------------------------------------------ the music session
    {
      id: 'musica',
      name: { es: 'La sesión de música tradicional', en: 'The traditional music session' },
      who: { name: 'Aoife', role: { es: 'violinista', en: 'fiddle player' } },
      levels: {
        A0: {
          scene: { es: 'Es un bar pequeño de Dublín. Hay seis músicos en una mesa. Tocan violín, flauta y guitarra. Aoife toca el violín.', en: 'It is a small bar in Dublin. There are six musicians at a table. They play fiddle, flute and guitar. Aoife plays the fiddle.' },
          opener: { es: '¡Hola! Soy Aoife. Esto es una sesión: música irlandesa, gratis, para todos. ¿Te gusta?', en: 'Hello! I am Aoife. This is a session: Irish music, free, for everyone. Do you like it?' },
          decide: {
            ask: { es: 'Aoife te da tres opciones. ¿Qué haces?', en: 'Aoife gives you three options. What do you do?' },
            options: [
              { say: { es: 'Aplaudo con la música.', en: 'I clap along to the music.' }, then: { es: 'Aoife sonríe: «¡Muy bien! Más rápido».', en: 'Aoife smiles: “Very good! Faster.”' } },
              { say: { es: 'Bailo un poco.', en: 'I dance a little.' }, then: { es: 'Un señor mayor baila contigo. ¡Es muy rápido!', en: 'An older man dances with you. He is very fast!' } },
              { say: { es: 'Escucho en silencio.', en: 'I listen in silence.' }, then: { es: 'Aoife toca una canción lenta y triste. Es muy bonita.', en: 'Aoife plays a slow, sad song. It is very beautiful.' } },
            ],
          },
          twist: { es: 'Aoife te da un tambor pequeño. «¡Toca tú!», dice. ¿Qué dices?', en: 'Aoife gives you a small drum. “You play!” she says. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la música en vivo?', en: 'Do you like live music?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Dónde la escuchas?', en: 'Where do you listen to it?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Tocas un instrumento?', en: 'Do you play an instrument?' }, help: { es: 'Sí, toco el… / No, no toco.', en: 'Yes, I play the… / No, I don’t.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Quieres aprender uno?', en: 'Do you want to learn one?' }] },
            { q: { es: '¿Bailas?', en: 'Do you dance?' }, help: { es: 'Sí, me encanta. / No, bailo mal.', en: 'Yes, I love it. / No, I dance badly.' }, follow: [{ es: '¿Qué música bailas?', en: 'What music do you dance to?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Hay música típica en tu país?', en: 'Is there traditional music in your country?' }, help: { es: 'Sí, el… / No sé.', en: 'Yes,… / I don’t know.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Con qué instrumentos?', en: 'With which instruments?' }] },
          ],
          words: [{ es: 'el violín', en: 'the fiddle' }, { es: 'la flauta', en: 'the flute' }, { es: 'el tambor', en: 'the drum' }, { es: 'aplaudir', en: 'to clap' }, { es: 'lento', en: 'slow' }],
        },
        A1: {
          scene: { es: 'Es martes por la noche. En la sesión hay músicos de setenta años y estudiantes de veinte. Nadie lee partituras: todos tocan de memoria. Una turista quiere grabar un vídeo con el móvil.', en: 'It is Tuesday night. At the session there are musicians in their seventies and students in their twenties. Nobody reads sheet music: everyone plays from memory. A tourist wants to film a video on her phone.' },
          opener: { es: 'Mi abuelo me enseñó a tocar cuando tenía cinco años. En Irlanda la música se aprende escuchando, no leyendo. Aquí cualquiera puede sentarse y tocar, pero hay reglas: no se toca más fuerte que los demás y se respeta a los mayores. ¿Tú aprendiste algo de tus abuelos?', en: 'My grandfather taught me to play when I was five. In Ireland music is learned by listening, not by reading. Anyone can sit down and play here, but there are rules: you don’t play louder than the others and you respect the older players. Did you learn something from your grandparents?' },
          decide: {
            ask: { es: 'La turista pregunta si puede grabar. ¿Qué le dices?', en: 'The tourist asks if she can film. What do you tell her?' },
            options: [
              { say: { es: 'Que pregunte primero a los músicos.', en: 'Ask the musicians first.' }, then: { es: 'Los músicos dicen que sí, pero solo una canción. Ella está muy contenta.', en: 'The musicians say yes, but only one song. She is very happy.' } },
              { say: { es: 'Que mejor escuche sin el móvil.', en: 'Better to listen without her phone.' }, then: { es: 'Ella guarda el móvil. Al final dice que es el mejor momento del viaje.', en: 'She puts her phone away. At the end she says it is the best moment of her trip.' } },
              { say: { es: 'Que grabe, porque es un recuerdo bonito.', en: 'Film it, because it is a nice memory.' }, then: { es: 'Un músico mayor se enfada un poco. Aoife lo tranquiliza.', en: 'An older musician gets a bit annoyed. Aoife calms him down.' } },
            ],
          },
          twist: { es: 'Un músico mayor te pregunta si sabes una canción de tu país. Todos se callan y te miran. ¿Qué haces?', en: 'An older musician asks if you know a song from your country. Everyone goes quiet and looks at you. What do you do?' },
          questions: [
            { q: { es: '¿Qué te enseñaron tus abuelos?', en: 'What did your grandparents teach you?' }, help: { es: 'Mi abuela me enseñó a… / No me acuerdo.', en: 'My grandmother taught me to… / I don’t remember.' }, follow: [{ es: '¿Todavía lo haces?', en: 'Do you still do it?' }, { es: '¿Lo enseñarías a otros?', en: 'Would you teach it to others?' }] },
            { q: { es: '¿Grabas vídeos en los conciertos?', en: 'Do you film videos at concerts?' }, help: { es: 'Sí, siempre. / No, prefiero mirar.', en: 'Yes, always. / No, I prefer to watch.' }, follow: [{ es: '¿Los miras después?', en: 'Do you watch them afterwards?' }, { es: '¿Y los compartes?', en: 'And do you share them?' }] },
            { q: { es: '¿Sabes una canción de memoria?', en: 'Do you know a song by heart?' }, help: { es: 'Sí, sé… / No, ninguna.', en: 'Yes, I know… / No, none.' }, follow: [{ es: '¿Cuándo la aprendiste?', en: 'When did you learn it?' }, { es: '¿La cantas?', en: 'Do you sing it?' }] },
            { q: { es: '¿Qué haces los martes por la noche?', en: 'What do you do on Tuesday nights?' }, help: { es: 'Normalmente… / Me quedo en casa.', en: 'Normally… / I stay at home.' }, follow: [{ es: '¿Sales entre semana?', en: 'Do you go out on weekdays?' }, { es: '¿Con quién?', en: 'With whom?' }] },
          ],
          words: [{ es: 'la partitura', en: 'sheet music' }, { es: 'de memoria', en: 'by heart' }, { es: 'grabar', en: 'to film / record' }, { es: 'los mayores', en: 'the elders' }, { es: 'callarse', en: 'to go quiet' }],
        },
        A2: {
          scene: { es: 'Aoife tiene veinticinco años y toca en sesiones desde niña. Una discográfica le ha ofrecido un contrato, pero quieren que mezcle la música tradicional con electrónica para vender más. Los músicos mayores de la sesión dicen que eso no es música irlandesa.', en: 'Aoife is twenty-five and has played in sessions since she was a child. A record label has offered her a contract, but they want her to mix traditional music with electronic music to sell more. The older musicians at the session say that isn’t Irish music.' },
          opener: { es: 'Me encanta la música de mi abuelo. Pero también me gusta la electrónica, y muchos jóvenes irlandeses no escuchan música tradicional. Si la mezclo, quizás la conocen. Pero el señor Kelly, que toca aquí desde 1970, me ha dicho que estoy «vendiendo el alma». ¿Tú has cambiado algo tradicional para hacerlo tuyo?', en: 'I love my grandfather’s music. But I also like electronic music, and lots of young Irish people don’t listen to traditional music. If I mix them, maybe they’ll discover it. But Mr Kelly, who has played here since 1970, told me I’m “selling my soul”. Have you ever changed something traditional to make it your own?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Aoife?', en: 'What do you advise Aoife?' },
            options: [
              { say: { es: 'Que firme el contrato y siga en la sesión los martes.', en: 'Sign the contract and keep playing at the session on Tuesdays.' }, then: { es: 'Su disco tiene éxito. Muchos jóvenes empiezan a venir a la sesión para conocerla.', en: 'Her album is a success. Lots of young people start coming to the session to meet her.' } },
              { say: { es: 'Que no firme: la música tradicional no se toca.', en: 'Don’t sign: traditional music shouldn’t be touched.' }, then: { es: 'El señor Kelly está orgulloso. Pero Aoife se pregunta qué habría pasado.', en: 'Mr Kelly is proud. But Aoife wonders what would have happened.' } },
              { say: { es: 'Que invite al señor Kelly a tocar en el disco.', en: 'Invite Mr Kelly to play on the album.' }, then: { es: 'El señor Kelly dice que no al principio. Al final, toca en una canción y le encanta.', en: 'Mr Kelly says no at first. In the end, he plays on one song and loves it.' } },
            ],
          },
          twist: { es: 'En el primer concierto de Aoife, el público grita y habla tanto que no se oye el violín. Ella para de tocar. ¿Qué debería hacer?', en: 'At Aoife’s first concert, the audience shouts and talks so much that the fiddle can’t be heard. She stops playing. What should she do?' },
          questions: [
            { q: { es: '¿Has mezclado algo tradicional con algo moderno?', en: 'Have you mixed something traditional with something modern?' }, help: { es: 'Sí, por ejemplo una receta… / No, nunca.', en: 'Yes, for example a recipe… / No, never.' }, follow: [{ es: '¿Gustó a tu familia?', en: 'Did your family like it?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
            { q: { es: '¿Los jóvenes de tu país escuchan música tradicional?', en: 'Do young people in your country listen to traditional music?' }, help: { es: 'Sí, sobre todo en… / Muy poco.', en: 'Yes, especially at… / Very little.' }, follow: [{ es: '¿Y tú?', en: 'And you?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Alguien mayor te ha criticado por una decisión?', en: 'Has someone older criticised you for a decision?' }, help: { es: 'Sí, mi… me dijo que… / No, nunca.', en: 'Yes, my… told me that… / No, never.' }, follow: [{ es: '¿Tenía razón?', en: 'Were they right?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Qué artista mezcla estilos y te gusta?', en: 'Which artist mixes styles and you like?' }, help: { es: 'Me gusta… porque mezcla… con…', en: 'I like… because they mix… with…' }, follow: [{ es: '¿Cómo lo descubriste?', en: 'How did you discover them?' }, { es: '¿Lo escuchas mucho?', en: 'Do you listen to them a lot?' }] },
          ],
          words: [{ es: 'la discográfica', en: 'the record label' }, { es: 'mezclar', en: 'to mix' }, { es: 'el disco', en: 'the album' }, { es: 'el alma', en: 'the soul' }, { es: 'el público', en: 'the audience' }],
        },
        B1: {
          scene: { es: 'Los alquileres en Dublín son de los más caros de Europa. Muchos bares con música tradicional están cerrando y se convierten en hoteles para turistas. El bar donde toca Aoife cierra el mes que viene. Los músicos quieren protestar tocando en la calle, pero la policía dice que necesitan un permiso.', en: 'Rents in Dublin are among the most expensive in Europe. Many bars with traditional music are closing and becoming tourist hotels. The bar where Aoife plays closes next month. The musicians want to protest by playing in the street, but the police say they need a permit.' },
          opener: { es: 'Dublín vende al mundo su música, sus bares, su ambiente. Pero los músicos ya no podemos vivir aquí, y los bares donde tocamos se convierten en hoteles para la gente que viene a escucharnos. Es absurdo. ¿Una ciudad puede seguir siendo ella misma si los que crean su cultura tienen que irse?', en: 'Dublin sells its music, its bars and its atmosphere to the world. But musicians can no longer afford to live here, and the bars where we play are turning into hotels for the people who come to hear us. It’s absurd. Can a city stay itself if the people who create its culture have to leave?' },
          decide: {
            ask: { es: '¿Qué deberían hacer los músicos?', en: 'What should the musicians do?' },
            options: [
              { say: { es: 'Tocar en la calle sin permiso, como protesta pacífica.', en: 'Play in the street without a permit, as a peaceful protest.' }, then: { es: 'Se juntan doscientos músicos. La policía los deja tocar y sale en todas las noticias.', en: 'Two hundred musicians gather. The police let them play and it’s on all the news.' } },
              { say: { es: 'Pedir al ayuntamiento que proteja los bares con música en vivo.', en: 'Ask the council to protect bars with live music.' }, then: { es: 'El ayuntamiento crea una lista de «lugares culturales protegidos». El bar de Aoife entra por poco.', en: 'The council creates a list of “protected cultural venues”. Aoife’s bar just makes it in.' } },
              { say: { es: 'Buscar un local nuevo fuera del centro.', en: 'Find a new venue outside the centre.' }, then: { es: 'Encuentran un garaje viejo en un barrio obrero. Los vecinos al principio desconfían, después vienen todos los martes.', en: 'They find an old garage in a working-class area. The locals are suspicious at first, then they come every Tuesday.' } },
            ],
          },
          twist: { es: 'El dueño del nuevo hotel ofrece a los músicos tocar en el vestíbulo cada noche, con buen sueldo. Algunos aceptan; Aoife cree que es una traición. ¿Quién tiene razón?', en: 'The owner of the new hotel offers the musicians a well-paid spot playing in the lobby every night. Some accept; Aoife thinks it’s a betrayal. Who is right?' },
          questions: [
            { q: { es: '¿Los artistas pueden vivir en el centro de tu ciudad?', en: 'Can artists afford to live in your city centre?' }, help: { es: 'No, se han ido a… porque… / Sí, todavía hay…', en: 'No, they’ve moved to… because… / Yes, there are still…' }, follow: [{ es: '¿Qué ha cambiado?', en: 'What has changed?' }, { es: '¿Quién vive ahora allí?', en: 'Who lives there now?' }] },
            { q: { es: '¿La cultura de una ciudad debería protegerse por ley?', en: 'Should a city’s culture be protected by law?' }, help: { es: 'Sí, porque si no… / No, porque la cultura…', en: 'Yes, because otherwise… / No, because culture…' }, follow: [{ es: '¿Qué protegerías tú?', en: 'What would you protect?' }, { es: '¿Quién pagaría?', en: 'Who would pay?' }] },
            { q: { es: '¿Es aceptable protestar sin permiso?', en: 'Is it acceptable to protest without a permit?' }, help: { es: 'Sí, si es pacífico… / No, porque las normas…', en: 'Yes, if it’s peaceful… / No, because the rules…' }, follow: [{ es: '¿Has visto una protesta así?', en: 'Have you seen a protest like that?' }, { es: '¿Funcionó?', en: 'Did it work?' }] },
            { q: { es: '¿Tocar para turistas en un hotel es venderse?', en: 'Is playing for tourists in a hotel selling out?' }, help: { es: 'No, es un trabajo… / En parte sí, porque…', en: 'No, it’s a job… / Partly yes, because…' }, follow: [{ es: '¿Qué harías tú?', en: 'What would you do?' }, { es: '¿Dónde está el límite?', en: 'Where is the limit?' }] },
          ],
          words: [{ es: 'el permiso', en: 'the permit' }, { es: 'el ambiente', en: 'the atmosphere' }, { es: 'desconfiar', en: 'to be suspicious' }, { es: 'el vestíbulo', en: 'the lobby' }, { es: 'el barrio obrero', en: 'the working-class area' }],
        },
      },
    },
    // ------------------------------------------------------------ Trinity College library
    {
      id: 'trinity',
      name: { es: 'La biblioteca del Trinity College', en: 'The Trinity College library' },
      who: { name: 'Brendan', role: { es: 'bibliotecario', en: 'librarian' } },
      levels: {
        A0: {
          scene: { es: 'Es una biblioteca muy larga y muy vieja. Hay miles de libros de madera oscura. En una sala hay un libro famoso: el Libro de Kells. Brendan es bibliotecario.', en: 'It is a very long, very old library. There are thousands of books on dark wooden shelves. In one room there is a famous book: the Book of Kells. Brendan is a librarian.' },
          opener: { es: 'Buenos días. Soy Brendan. Este libro tiene mil doscientos años. Lo hicieron unos monjes a mano. ¿Quieres verlo?', en: 'Good morning. I am Brendan. This book is twelve hundred years old. Some monks made it by hand. Do you want to see it?' },
          decide: {
            ask: { es: '¿Qué miras primero?', en: 'What do you look at first?' },
            options: [
              { say: { es: 'Los dibujos del libro.', en: 'The drawings in the book.' }, then: { es: 'Hay animales, colores y letras enormes. ¡Qué bonito!', en: 'There are animals, colours and huge letters. How beautiful!' } },
              { say: { es: 'La sala larga con los libros.', en: 'The long room with the books.' }, then: { es: 'Brendan dice: «Aquí hay doscientos mil libros».', en: 'Brendan says: “There are two hundred thousand books here.”' } },
              { say: { es: 'El arpa antigua.', en: 'The old harp.' }, then: { es: 'Brendan dice: «Es el símbolo de Irlanda. Está en las monedas».', en: 'Brendan says: “It is the symbol of Ireland. It is on the coins.”' } },
            ],
          },
          twist: { es: 'Tu móvil suena muy fuerte en la biblioteca. Todos te miran. ¿Qué dices?', en: 'Your phone rings very loudly in the library. Everyone looks at you. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta leer?', en: 'Do you like reading?' }, help: { es: 'Sí, mucho. / No, poco.', en: 'Yes, a lot. / No, a little.' }, follow: [{ es: '¿Qué lees?', en: 'What do you read?' }, { es: '¿En papel o en el móvil?', en: 'On paper or on your phone?' }] },
            { q: { es: '¿Vas a la biblioteca?', en: 'Do you go to the library?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Para qué?', en: 'What for?' }] },
            { q: { es: '¿Tienes muchos libros en casa?', en: 'Do you have many books at home?' }, help: { es: 'Sí, muchos. / No, pocos.', en: 'Yes, lots. / No, few.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Dónde están?', en: 'Where are they?' }] },
            { q: { es: '¿Te gustan las cosas antiguas?', en: 'Do you like old things?' }, help: { es: 'Sí, me encantan. / No mucho.', en: 'Yes, I love them. / Not much.' }, follow: [{ es: '¿Tienes algo antiguo?', en: 'Do you have something old?' }, { es: '¿De quién era?', en: 'Whose was it?' }] },
          ],
          words: [{ es: 'la biblioteca', en: 'the library' }, { es: 'el monje', en: 'the monk' }, { es: 'el arpa', en: 'the harp' }, { es: 'la moneda', en: 'the coin' }, { es: 'antiguo', en: 'old / ancient' }],
        },
        A1: {
          scene: { es: 'Es la semana de exámenes en la universidad. La biblioteca está llena de estudiantes cansados. Brendan ve a una estudiante extranjera que llora delante de su ordenador. Es su primer año en Irlanda.', en: 'It is exam week at the university. The library is full of tired students. Brendan sees an international student crying in front of her computer. It is her first year in Ireland.' },
          opener: { es: 'Trabajo aquí desde hace treinta años. En semana de exámenes veo de todo: estudiantes que duermen sobre los libros, otros que comen a escondidas… Ser joven y estar lejos de casa es difícil. ¿Tú has estudiado lejos de tu familia?', en: 'I’ve worked here for thirty years. In exam week I see everything: students sleeping on their books, others eating in secret… Being young and far from home is hard. Have you studied far from your family?' },
          decide: {
            ask: { es: 'Brendan te pide ayuda con la estudiante. ¿Qué haces?', en: 'Brendan asks you to help with the student. What do you do?' },
            options: [
              { say: { es: 'Le pregunto si quiere tomar un café.', en: 'I ask her if she wants a coffee.' }, then: { es: 'Es de Brasil. Echa de menos a su familia. Después del café, está más tranquila.', en: 'She is from Brazil. She misses her family. After the coffee, she is calmer.' } },
              { say: { es: 'Le explico dónde está el servicio de ayuda para estudiantes.', en: 'I tell her where the student support service is.' }, then: { es: 'Ella no sabía que existía. Va al día siguiente.', en: 'She didn’t know it existed. She goes the next day.' } },
              { say: { es: 'Le pregunto qué estudia y la ayudo un poco.', en: 'I ask what she studies and help her a bit.' }, then: { es: 'Estudia historia. Brendan le trae tres libros perfectos para su examen.', en: 'She studies history. Brendan brings her three perfect books for her exam.' } },
            ],
          },
          twist: { es: 'Llega la hora de cerrar, pero un grupo de estudiantes no quiere salir porque mañana tienen un examen. ¿Qué haces?', en: 'It’s closing time, but a group of students doesn’t want to leave because they have an exam tomorrow. What do you do?' },
          questions: [
            { q: { es: '¿Has estudiado lejos de tu familia?', en: 'Have you studied far from your family?' }, help: { es: 'Sí, en… / No, siempre en casa.', en: 'Yes, in… / No, always at home.' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Qué echabas de menos?', en: 'What did you miss?' }] },
            { q: { es: '¿Dónde estudias mejor?', en: 'Where do you study best?' }, help: { es: 'En casa. / En la biblioteca. / En un café.', en: 'At home. / In the library. / In a café.' }, follow: [{ es: '¿Con música?', en: 'With music?' }, { es: '¿Por la mañana o por la noche?', en: 'In the morning or at night?' }] },
            { q: { es: '¿Te ponen nervioso los exámenes?', en: 'Do exams make you nervous?' }, help: { es: 'Sí, mucho. / No, estoy tranquilo.', en: 'Yes, very. / No, I’m calm.' }, follow: [{ es: '¿Qué haces para calmarte?', en: 'What do you do to calm down?' }, { es: '¿Duermes bien antes?', en: 'Do you sleep well before?' }] },
            { q: { es: '¿Pides ayuda cuando estás mal?', en: 'Do you ask for help when you feel bad?' }, help: { es: 'Sí, a mi… / No, me cuesta.', en: 'Yes, to my… / No, I find it hard.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Quién te ayuda más?', en: 'Who helps you most?' }] },
          ],
          words: [{ es: 'el examen', en: 'the exam' }, { es: 'a escondidas', en: 'in secret' }, { es: 'echar de menos', en: 'to miss' }, { es: 'el servicio de ayuda', en: 'the support service' }, { es: 'cerrar', en: 'to close' }],
        },
        A2: {
          scene: { es: 'La universidad quiere digitalizar todos los libros antiguos y guardar los originales en un almacén. Los turistas podrían ver el Libro de Kells en una pantalla gigante. Así se protegería, porque la luz y la gente lo están dañando. Brendan no está seguro.', en: 'The university wants to digitise all the old books and store the originals in a warehouse. Tourists could see the Book of Kells on a giant screen. That way it would be protected, because light and people are damaging it. Brendan isn’t sure.' },
          opener: { es: 'Cada año vienen un millón de visitantes a ver una página del libro. Muchos lloran. Cuando lo ven en persona, sienten los mil doscientos años. ¿Sentirían lo mismo delante de una pantalla? Pero si no hacemos nada, en cien años los colores habrán desaparecido. ¿Tú has visto una obra de arte famosa en persona?', en: 'Every year a million visitors come to see one page of the book. Many cry. When they see it in person, they feel the twelve hundred years. Would they feel the same in front of a screen? But if we do nothing, in a hundred years the colours will have faded. Have you seen a famous work of art in person?' },
          decide: {
            ask: { es: 'Brendan tiene que dar su opinión en una reunión. ¿Qué le aconsejas?', en: 'Brendan has to give his opinion at a meeting. What do you advise him?' },
            options: [
              { say: { es: 'Mostrar el original solo un día al mes.', en: 'Show the original only one day a month.' }, then: { es: 'Las entradas para ese día se agotan en minutos. El libro descansa el resto del mes.', en: 'Tickets for that day sell out in minutes. The book rests the rest of the month.' } },
              { say: { es: 'Guardar el original y mostrar una copia digital perfecta.', en: 'Store the original and show a perfect digital copy.' }, then: { es: 'Muchos visitantes no notan la diferencia. Otros se sienten engañados.', en: 'Many visitors don’t notice the difference. Others feel cheated.' } },
              { say: { es: 'Seguir igual, pero con menos luz y grupos más pequeños.', en: 'Carry on as now, but with less light and smaller groups.' }, then: { es: 'Las colas son más largas, pero el libro está más protegido.', en: 'The queues are longer, but the book is better protected.' } },
            ],
          },
          twist: { es: 'Un millonario ofrece mucho dinero para ver el libro solo, de noche, con sus amigos. La universidad necesita el dinero. ¿Qué debería decir Brendan?', en: 'A millionaire offers a lot of money to see the book alone, at night, with his friends. The university needs the money. What should Brendan say?' },
          questions: [
            { q: { es: '¿Has visto una obra de arte famosa en persona?', en: 'Have you seen a famous work of art in person?' }, help: { es: 'Sí, vi… en… / No, solo en fotos.', en: 'Yes, I saw… in… / No, only in photos.' }, follow: [{ es: '¿Qué sentiste?', en: 'What did you feel?' }, { es: '¿Había mucha gente?', en: 'Were there many people?' }] },
            { q: { es: '¿Prefieres libros en papel o digitales?', en: 'Do you prefer paper or digital books?' }, help: { es: 'En papel, porque… / Digitales, porque…', en: 'Paper, because… / Digital, because…' }, follow: [{ es: '¿Ha cambiado con los años?', en: 'Has it changed over the years?' }, { es: '¿Y para estudiar?', en: 'And for studying?' }] },
            { q: { es: '¿Las copias tienen el mismo valor que los originales?', en: 'Do copies have the same value as originals?' }, help: { es: 'No, porque… / Para mí sí, si…', en: 'No, because… / For me yes, if…' }, follow: [{ es: '¿Comprarías una copia?', en: 'Would you buy a copy?' }, { es: '¿Notarías la diferencia?', en: 'Would you notice the difference?' }] },
            { q: { es: '¿Qué objeto de tu familia te gustaría proteger?', en: 'Which object in your family would you like to protect?' }, help: { es: 'El… de mi abuelo, porque…', en: 'My grandfather’s…, because…' }, follow: [{ es: '¿Dónde está ahora?', en: 'Where is it now?' }, { es: '¿Quién lo tendrá después?', en: 'Who will have it later?' }] },
          ],
          words: [{ es: 'digitalizar', en: 'to digitise' }, { es: 'el almacén', en: 'the warehouse' }, { es: 'dañar', en: 'to damage' }, { es: 'la pantalla', en: 'the screen' }, { es: 'engañado', en: 'cheated' }],
        },
        B1: {
          scene: { es: 'Durante siglos, el Trinity College fue solo para protestantes ricos; los católicos no podían estudiar allí. Hoy la universidad ha descubierto que parte de su colección se compró con dinero de propietarios que echaron a familias pobres de sus tierras durante la Gran Hambruna. Brendan tiene que preparar una exposición sobre el tema.', en: 'For centuries, Trinity College was only for wealthy Protestants; Catholics couldn’t study there. Today the university has discovered that part of its collection was bought with money from landlords who evicted poor families from their land during the Great Famine. Brendan has to prepare an exhibition on the subject.' },
          opener: { es: 'Entre 1845 y 1852 murió un millón de irlandeses de hambre y otro millón emigró. Mi bisabuela fue una de las que se fueron a América. Ahora descubro que algunos libros que cuido desde hace treinta años se pagaron con ese sufrimiento. ¿Una institución debe pedir perdón por lo que hicieron otros hace doscientos años?', en: 'Between 1845 and 1852 a million Irish people died of hunger and another million emigrated. My great-grandmother was one of those who left for America. Now I discover that some books I’ve looked after for thirty years were paid for with that suffering. Should an institution apologise for what others did two hundred years ago?' },
          decide: {
            ask: { es: '¿Cómo debería ser la exposición de Brendan?', en: 'What should Brendan’s exhibition be like?' },
            options: [
              { say: { es: 'Contar la historia completa, con nombres de las familias expulsadas.', en: 'Tell the full story, with the names of the evicted families.' }, then: { es: 'Descendientes de esas familias vienen desde Estados Unidos y Australia. Algunos encuentran a sus antepasados.', en: 'Descendants of those families come from the United States and Australia. Some find their ancestors.' } },
              { say: { es: 'Acompañarla con becas para estudiantes sin recursos.', en: 'Pair it with scholarships for students without means.' }, then: { es: 'La universidad crea veinte becas al año. Algunos dicen que es poco; otros, que es un buen comienzo.', en: 'The university creates twenty scholarships a year. Some say it’s too little; others, that it’s a good start.' } },
              { say: { es: 'Hacer una exposición pequeña, sin acusar a nadie.', en: 'Hold a small exhibition, without accusing anyone.' }, then: { es: 'Pasa casi desapercibida. Un periódico critica que la universidad «esconde» su pasado.', en: 'It goes almost unnoticed. A newspaper criticises the university for “hiding” its past.' } },
            ],
          },
          twist: { es: 'Un descendiente de uno de aquellos propietarios es hoy uno de los mayores donantes de la universidad. Amenaza con retirar su dinero si aparece el nombre de su familia. ¿Qué debería hacer Brendan?', en: 'A descendant of one of those landlords is today one of the university’s biggest donors. He threatens to withdraw his money if his family’s name appears. What should Brendan do?' },
          questions: [
            { q: { es: '¿Una institución debe pedir perdón por el pasado?', en: 'Should an institution apologise for the past?' }, help: { es: 'Sí, porque todavía… / No, porque los responsables…', en: 'Yes, because it still… / No, because those responsible…' }, follow: [{ es: '¿Conoces un ejemplo real?', en: 'Do you know a real example?' }, { es: '¿Sirvió de algo?', en: 'Did it achieve anything?' }] },
            { q: { es: '¿Tu familia emigró alguna vez?', en: 'Did your family ever emigrate?' }, help: { es: 'Sí, mis bisabuelos se fueron a… / No, que yo sepa.', en: 'Yes, my great-grandparents went to… / Not that I know of.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Conoces su historia?', en: 'Do you know their story?' }] },
            { q: { es: '¿Se puede separar el arte de cómo se pagó?', en: 'Can art be separated from how it was paid for?' }, help: { es: 'Creo que sí, porque… / No del todo, porque…', en: 'I think so, because… / Not completely, because…' }, follow: [{ es: '¿Visitarías un museo así?', en: 'Would you visit a museum like that?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Aceptarías dinero de alguien para callar una verdad?', en: 'Would you accept someone’s money to keep a truth quiet?' }, help: { es: 'Nunca, porque… / Depende de…', en: 'Never, because… / It depends on…' }, follow: [{ es: '¿Y si el dinero salvara puestos de trabajo?', en: 'And if the money saved jobs?' }, { es: '¿Dónde está tu límite?', en: 'Where is your limit?' }] },
          ],
          words: [{ es: 'la hambruna', en: 'the famine' }, { es: 'expulsar', en: 'to evict' }, { es: 'el donante', en: 'the donor' }, { es: 'la beca', en: 'the scholarship' }, { es: 'pasar desapercibido', en: 'to go unnoticed' }],
        },
      },
    },
    // ------------------------------------------------------------ hurling at Croke Park
    {
      id: 'hurling',
      name: { es: 'El hurling en Croke Park', en: 'Hurling at Croke Park' },
      who: { name: 'Cian', role: { es: 'jugador de hurling', en: 'hurling player' } },
      levels: {
        A0: {
          scene: { es: 'Es un estadio enorme. Hay ochenta mil personas. Los jugadores tienen un palo de madera y una pelota pequeña. Es el hurling, un deporte irlandés. Cian juega.', en: 'It is a huge stadium. There are eighty thousand people. The players have a wooden stick and a small ball. It is hurling, an Irish sport. Cian plays.' },
          opener: { es: '¡Hola! Soy Cian. Esto es el hurling. Es muy rápido. ¿Quieres probar el palo?', en: 'Hello! I am Cian. This is hurling. It is very fast. Do you want to try the stick?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Pruebo el palo.', en: 'I try the stick.' }, then: { es: 'Le das a la pelota. ¡Va muy lejos!', en: 'You hit the ball. It goes very far!' } },
              { say: { es: 'Me pongo el casco.', en: 'I put the helmet on.' }, then: { es: 'Cian dice: «Muy bien. Es importante».', en: 'Cian says: “Very good. It is important.”' } },
              { say: { es: 'Miro desde las gradas.', en: 'I watch from the stands.' }, then: { es: 'La gente canta y grita. ¡Qué ruido!', en: 'People sing and shout. What a noise!' } },
            ],
          },
          twist: { es: 'La pelota viene hacia ti muy rápido. ¿Qué haces?', en: 'The ball comes towards you very fast. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta el deporte?', en: 'Do you like sport?' }, help: { es: 'Sí, mucho. / No, no mucho.', en: 'Yes, a lot. / No, not much.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Lo haces o lo ves?', en: 'Do you play it or watch it?' }] },
            { q: { es: '¿Has ido a un estadio?', en: 'Have you been to a stadium?' }, help: { es: 'Sí, una vez. / No, nunca.', en: 'Yes, once. / No, never.' }, follow: [{ es: '¿Qué viste?', en: 'What did you see?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Eres rápido?', en: 'Are you fast?' }, help: { es: 'Sí, muy rápido. / No, soy lento.', en: 'Yes, very fast. / No, I’m slow.' }, follow: [{ es: '¿Corres?', en: 'Do you run?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Hay un deporte típico en tu país?', en: 'Is there a traditional sport in your country?' }, help: { es: 'Sí, el… / No sé.', en: 'Yes,… / I don’t know.' }, follow: [{ es: '¿Lo juegas?', en: 'Do you play it?' }, { es: '¿Es difícil?', en: 'Is it difficult?' }] },
          ],
          words: [{ es: 'el palo', en: 'the stick' }, { es: 'la pelota', en: 'the ball' }, { es: 'el casco', en: 'the helmet' }, { es: 'las gradas', en: 'the stands' }, { es: 'el ruido', en: 'noise' }],
        },
        A1: {
          scene: { es: 'Es la final de hurling. Juegan Kilkenny contra Tipperary. Cian juega con Kilkenny. Antes del partido, Cian te cuenta algo sorprendente: los jugadores no cobran. Todos tienen otro trabajo.', en: 'It is the hurling final. Kilkenny are playing Tipperary. Cian plays for Kilkenny. Before the match, Cian tells you something surprising: the players aren’t paid. They all have another job.' },
          opener: { es: 'Yo soy profesor de matemáticas en un colegio. Entreno cuatro noches por semana y juego los domingos. Aquí el deporte es amateur: juegas por tu pueblo, no por dinero. Ochenta mil personas me miran hoy, y mañana a las nueve tengo clase. ¿Tú harías algo así gratis?', en: 'I’m a maths teacher at a school. I train four nights a week and play on Sundays. Here the sport is amateur: you play for your town, not for money. Eighty thousand people are watching me today, and tomorrow at nine I have class. Would you do something like that for free?' },
          decide: {
            ask: { es: 'Cian te invita a ver el partido. ¿Con quién te sientas?', en: 'Cian invites you to watch the match. Who do you sit with?' },
            options: [
              { say: { es: 'Con los aficionados de Kilkenny.', en: 'With the Kilkenny fans.' }, then: { es: 'Te dan una bufanda negra y amarilla. Cantas con ellos todo el partido.', en: 'They give you a black and amber scarf. You sing with them the whole match.' } },
              { say: { es: 'Con los aficionados de Tipperary.', en: 'With the Tipperary fans.' }, then: { es: 'Son muy simpáticos. Te explican las reglas con paciencia.', en: 'They are very friendly. They patiently explain the rules to you.' } },
              { say: { es: 'Con la familia de Cian.', en: 'With Cian’s family.' }, then: { es: 'Su madre está muy nerviosa. No para de hablar.', en: 'His mother is very nervous. She doesn’t stop talking.' } },
            ],
          },
          twist: { es: 'Kilkenny gana. Cian te ve en las gradas y te llama para hacer una foto con el equipo. ¿Qué haces?', en: 'Kilkenny win. Cian sees you in the stands and calls you over for a photo with the team. What do you do?' },
          questions: [
            { q: { es: '¿Harías un deporte sin cobrar, solo por tu pueblo?', en: 'Would you play a sport without pay, just for your town?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Cuántas horas a la semana?', en: 'How many hours a week?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Eres aficionado de algún equipo?', en: 'Are you a fan of any team?' }, help: { es: 'Sí, del… / No, de ninguno.', en: 'Yes,… / No, none.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Vas a verlo?', en: 'Do you go to watch them?' }] },
            { q: { es: '¿Qué haces los domingos?', en: 'What do you do on Sundays?' }, help: { es: 'Los domingos… / Descanso.', en: 'On Sundays… / I rest.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Te gusta el domingo?', en: 'Do you like Sundays?' }] },
            { q: { es: '¿Tienes dos trabajos o actividades?', en: 'Do you have two jobs or activities?' }, help: { es: 'Sí, trabajo y también… / No, solo uno.', en: 'Yes, I work and also… / No, just one.' }, follow: [{ es: '¿Tienes tiempo libre?', en: 'Do you have free time?' }, { es: '¿Estás cansado?', en: 'Are you tired?' }] },
          ],
          words: [{ es: 'cobrar', en: 'to get paid' }, { es: 'el aficionado', en: 'the fan' }, { es: 'la bufanda', en: 'the scarf' }, { es: 'entrenar', en: 'to train' }, { es: 'amateur', en: 'amateur' }],
        },
        A2: {
          scene: { es: 'Cian tiene treinta años y es el mejor jugador de Irlanda. Un equipo de fútbol australiano, un deporte parecido, le ha ofrecido un contrato profesional en Melbourne: diez veces su sueldo de profesor. Pero tendría que dejar a su equipo, a sus alumnos y a su novia.', en: 'Cian is thirty and the best player in Ireland. An Australian football team, a similar sport, has offered him a professional contract in Melbourne: ten times his teacher’s salary. But he would have to leave his team, his students and his girlfriend.' },
          opener: { es: 'Toda mi vida he jugado por Kilkenny. Mi abuelo jugó aquí, mi padre también. Si me voy, en el pueblo dirán que los he abandonado por dinero. Pero es la única oportunidad de vivir del deporte. ¿Tú has dejado algo seguro por una oportunidad grande?', en: 'All my life I’ve played for Kilkenny. My grandfather played here, my father too. If I leave, people in the town will say I abandoned them for money. But it’s my only chance to make a living from sport. Have you ever left something secure for a big opportunity?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Cian?', en: 'What do you advise Cian?' },
            options: [
              { say: { es: 'Que se vaya dos años y después vuelva.', en: 'Go for two years and then come back.' }, then: { es: 'En Melbourne juega muy bien. Pero cada domingo mira los partidos de Kilkenny por internet a las tres de la mañana.', en: 'In Melbourne he plays very well. But every Sunday he watches Kilkenny matches online at three in the morning.' } },
              { say: { es: 'Que se quede: el dinero no lo es todo.', en: 'Stay: money isn’t everything.' }, then: { es: 'Kilkenny gana otra final. Cian llora en el campo con su padre.', en: 'Kilkenny win another final. Cian cries on the pitch with his father.' } },
              { say: { es: 'Que hable con su novia antes de decidir nada.', en: 'Talk to his girlfriend before deciding anything.' }, then: { es: 'Ella le dice que siempre ha querido vivir en Australia. Cian no lo sabía.', en: 'She tells him she has always wanted to live in Australia. Cian didn’t know.' } },
            ],
          },
          twist: { es: 'Un alumno de Cian, de doce años, le escribe una carta: «Si te vas, ¿quién me va a enseñar a jugar?». ¿Qué debería responderle Cian?', en: 'One of Cian’s students, aged twelve, writes him a letter: “If you leave, who will teach me to play?” What should Cian reply?' },
          questions: [
            { q: { es: '¿Has dejado algo seguro por una oportunidad?', en: 'Have you left something secure for an opportunity?' }, help: { es: 'Sí, dejé… para… / No, prefiero lo seguro.', en: 'Yes, I left… to… / No, I prefer what’s safe.' }, follow: [{ es: '¿Salió bien?', en: 'Did it go well?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Te irías a vivir a otro continente por trabajo?', en: 'Would you move to another continent for work?' }, help: { es: 'Sí, a… / No, porque…', en: 'Yes, to… / No, because…' }, follow: [{ es: '¿Qué echarías de menos?', en: 'What would you miss?' }, { es: '¿Por cuánto tiempo?', en: 'For how long?' }] },
            { q: { es: '¿Tu familia tiene una tradición de padres a hijos?', en: 'Does your family have a tradition passed from parents to children?' }, help: { es: 'Sí, todos somos… / No, cada uno hace lo suyo.', en: 'Yes, we’re all… / No, everyone does their own thing.' }, follow: [{ es: '¿La vas a seguir?', en: 'Will you continue it?' }, { es: '¿Te pesa?', en: 'Is it a burden?' }] },
            { q: { es: '¿Quién te enseñó a hacer deporte?', en: 'Who taught you to play sport?' }, help: { es: 'Mi… / Un profesor del colegio.', en: 'My… / A school teacher.' }, follow: [{ es: '¿Cómo era?', en: 'What were they like?' }, { es: '¿Sigues en contacto?', en: 'Are you still in touch?' }] },
          ],
          words: [{ es: 'el sueldo', en: 'the salary' }, { es: 'abandonar', en: 'to abandon' }, { es: 'la oportunidad', en: 'the opportunity' }, { es: 'el contrato', en: 'the contract' }, { es: 'arriesgar', en: 'to risk' }],
        },
        B1: {
          scene: { es: 'La asociación que organiza el hurling discute si debería pagar a los jugadores. Los partidos generan millones en entradas y televisión, pero los jugadores no reciben nada y algunos se lesionan gravemente. Los defensores de la tradición dicen que el dinero destruiría el espíritu de los pueblos. Cian ha sido elegido para hablar en nombre de los jugadores.', en: 'The association that runs hurling is debating whether it should pay the players. Matches bring in millions in tickets and TV, but the players get nothing and some suffer serious injuries. Defenders of tradition say money would destroy the spirit of the towns. Cian has been chosen to speak on behalf of the players.' },
          opener: { es: 'El año pasado un compañero se rompió la rodilla y perdió su trabajo de electricista. La asociación le pagó el hospital, pero no el sueldo de seis meses. Al mismo tiempo, se vendieron entradas por valor de cuarenta millones. Yo quiero jugar por mi pueblo, no por un club rico. ¿Se puede ser amateur cuando todo a tu alrededor es un negocio?', en: 'Last year a teammate broke his knee and lost his job as an electrician. The association paid for the hospital, but not six months’ wages. At the same time, forty million worth of tickets were sold. I want to play for my town, not for a rich club. Can you be amateur when everything around you is a business?' },
          decide: {
            ask: { es: '¿Qué debería pedir Cian en la reunión?', en: 'What should Cian ask for at the meeting?' },
            options: [
              { say: { es: 'Un sueldo para todos los jugadores de primera división.', en: 'A salary for all top-division players.' }, then: { es: 'La propuesta se rechaza por pocos votos. Algunos pueblos pequeños temen no poder competir.', en: 'The proposal is rejected by a few votes. Some small towns fear they won’t be able to compete.' } },
              { say: { es: 'Un seguro completo que cubra el sueldo si se lesionan.', en: 'Full insurance covering wages if they get injured.' }, then: { es: 'Se aprueba por unanimidad. Nadie quiere ver a otro jugador en paro por jugar.', en: 'It’s approved unanimously. Nobody wants to see another player out of work because of playing.' } },
              { say: { es: 'Que una parte del dinero vaya a los clubes de los pueblos.', en: 'That part of the money goes to the town clubs.' }, then: { es: 'Los clubes renuevan sus campos y ofrecen clases gratis a los niños.', en: 'The clubs renovate their pitches and offer free classes to children.' } },
            ],
          },
          twist: { es: 'Una gran marca de bebidas ofrece patrocinar a Cian personalmente con mucho dinero. Sería el primer jugador «patrocinado» de la historia del hurling. ¿Debería aceptar?', en: 'A big drinks brand offers to sponsor Cian personally for a lot of money. He would be the first “sponsored” player in hurling history. Should he accept?' },
          questions: [
            { q: { es: '¿El deporte amateur tiene más valor que el profesional?', en: 'Does amateur sport have more value than professional sport?' }, help: { es: 'Sí, porque… / No, porque los profesionales…', en: 'Yes, because… / No, because professionals…' }, follow: [{ es: '¿Qué ves tú más?', en: 'Which do you watch more?' }, { es: '¿Has jugado en un equipo?', en: 'Have you played on a team?' }] },
            { q: { es: '¿Es justo que otros ganen dinero con tu trabajo gratis?', en: 'Is it fair for others to make money from your unpaid work?' }, help: { es: 'No, porque… / Depende, si…', en: 'No, because… / It depends, if…' }, follow: [{ es: '¿Te ha pasado?', en: 'Has it happened to you?' }, { es: '¿Y con los voluntarios?', en: 'And with volunteers?' }] },
            { q: { es: '¿El dinero cambia el espíritu de las cosas?', en: 'Does money change the spirit of things?' }, help: { es: 'Sí, por ejemplo… / No siempre, porque…', en: 'Yes, for example… / Not always, because…' }, follow: [{ es: '¿Conoces un caso?', en: 'Do you know a case?' }, { es: '¿Fue para mejor?', en: 'Was it for the better?' }] },
            { q: { es: '¿Las marcas de alcohol deberían patrocinar el deporte?', en: 'Should alcohol brands sponsor sport?' }, help: { es: 'No, porque los niños… / Sí, si…', en: 'No, because children… / Yes, if…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Qué marcas patrocinan a tu equipo?', en: 'Which brands sponsor your team?' }] },
          ],
          words: [{ es: 'lesionarse', en: 'to get injured' }, { es: 'el seguro', en: 'the insurance' }, { es: 'patrocinar', en: 'to sponsor' }, { es: 'por unanimidad', en: 'unanimously' }, { es: 'la rodilla', en: 'the knee' }],
        },
      },
    },
    // ------------------------------------------------------------ Moore Street market
    {
      id: 'moore',
      name: { es: 'El mercado de Moore Street', en: 'Moore Street market' },
      who: { name: 'Bridget', role: { es: 'vendedora de fruta', en: 'fruit seller' } },
      levels: {
        A0: {
          scene: { es: 'Es una calle con puestos de fruta, verdura y flores. Bridget vende fruta. Tiene setenta años y una voz muy fuerte.', en: 'It is a street with fruit, vegetable and flower stalls. Bridget sells fruit. She is seventy and has a very loud voice.' },
          opener: { es: '¡Hola, cariño! Soy Bridget. ¡Plátanos, manzanas, fresas! Todo muy barato. ¿Qué quieres?', en: 'Hello, love! I am Bridget. Bananas, apples, strawberries! All very cheap. What do you want?' },
          decide: {
            ask: { es: '¿Qué compras?', en: 'What do you buy?' },
            options: [
              { say: { es: 'Fresas, por favor.', en: 'Strawberries, please.' }, then: { es: 'Bridget dice: «Son de Wexford. ¡Las mejores!»', en: 'Bridget says: “They are from Wexford. The best!”' } },
              { say: { es: 'Cinco manzanas.', en: 'Five apples.' }, then: { es: 'Bridget te da seis. «Una de regalo», dice.', en: 'Bridget gives you six. “One is a gift,” she says.' } },
              { say: { es: 'Unas flores.', en: 'Some flowers.' }, then: { es: 'Bridget pregunta: «¿Son para tu novio o tu novia?»', en: 'Bridget asks: “Are they for your boyfriend or girlfriend?”' } },
            ],
          },
          twist: { es: 'Empieza a llover. Bridget pone un plástico sobre la fruta y te invita a entrar debajo. ¿Qué dices?', en: 'It starts to rain. Bridget puts plastic over the fruit and invites you to come underneath. What do you say?' },
          questions: [
            { q: { es: '¿Qué fruta te gusta?', en: 'Which fruit do you like?' }, help: { es: 'Me gustan las… / Me gusta el…', en: 'I like… ' }, follow: [{ es: '¿La comes cada día?', en: 'Do you eat it every day?' }, { es: '¿Dónde la compras?', en: 'Where do you buy it?' }] },
            { q: { es: '¿Compras en mercados?', en: 'Do you buy at markets?' }, help: { es: 'Sí, los sábados. / No, en el supermercado.', en: 'Yes, on Saturdays. / No, at the supermarket.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Es más barato?', en: 'Is it cheaper?' }] },
            { q: { es: '¿Compras flores?', en: 'Do you buy flowers?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Para quién?', en: 'For whom?' }, { es: '¿Qué flores?', en: 'Which flowers?' }] },
            { q: { es: '¿Hablas fuerte o bajo?', en: 'Do you speak loudly or quietly?' }, help: { es: 'Fuerte. / Bajo. / Normal.', en: 'Loudly. / Quietly. / Normally.' }, follow: [{ es: '¿Y tu familia?', en: 'And your family?' }, { es: '¿Quién habla más fuerte?', en: 'Who speaks loudest?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'la fresa', en: 'the strawberry' }, { es: 'el plátano', en: 'the banana' }, { es: 'barato', en: 'cheap' }, { es: 'de regalo', en: 'as a gift' }],
        },
        A1: {
          scene: { es: 'Bridget vende en este mercado desde los doce años. Su madre y su abuela vendían aquí también. Hoy hay pocos clientes: muchos compran en el supermercado de enfrente. Los otros puestos de la calle ahora son de familias de Nigeria, Polonia y China.', en: 'Bridget has sold at this market since she was twelve. Her mother and grandmother sold here too. Today there are few customers: many buy at the supermarket opposite. The other stalls on the street now belong to families from Nigeria, Poland and China.' },
          opener: { es: 'Antes, esta calle era solo de mujeres de Dublín como yo. Ahora es como un viaje por el mundo: mi vecino vende especias africanas y la chica de enfrente, verduras chinas. Al principio no me gustaba el cambio. Ahora comemos juntos los viernes. ¿Tu barrio ha cambiado mucho?', en: 'This street used to be only Dublin women like me. Now it’s like a trip around the world: my neighbour sells African spices and the girl opposite, Chinese vegetables. At first I didn’t like the change. Now we eat together on Fridays. Has your neighbourhood changed a lot?' },
          decide: {
            ask: { es: 'Es viernes. Bridget te invita a comer con los vendedores. ¿Qué pruebas?', en: 'It’s Friday. Bridget invites you to eat with the sellers. What do you try?' },
            options: [
              { say: { es: 'El arroz picante de Nigeria.', en: 'The spicy Nigerian rice.' }, then: { es: '¡Pica mucho! Todos se ríen y te dan agua.', en: 'It’s very spicy! Everyone laughs and gives you water.' } },
              { say: { es: 'Los pierogi polacos.', en: 'The Polish pierogi.' }, then: { es: 'La señora polaca te da la receta escrita en un papel.', en: 'The Polish lady gives you the recipe written on a piece of paper.' } },
              { say: { es: 'El estofado irlandés de Bridget.', en: 'Bridget’s Irish stew.' }, then: { es: 'Bridget está orgullosa. «Es la receta de mi abuela», dice.', en: 'Bridget is proud. “It’s my grandmother’s recipe,” she says.' } },
            ],
          },
          twist: { es: 'Un hombre del ayuntamiento llega y dice que el mercado va a cerrar para construir un centro comercial. Todos se callan. ¿Qué haces?', en: 'A man from the council arrives and says the market is going to close to build a shopping centre. Everyone goes quiet. What do you do?' },
          questions: [
            { q: { es: '¿Tu barrio ha cambiado mucho?', en: 'Has your neighbourhood changed a lot?' }, help: { es: 'Sí, antes había… y ahora… / No mucho.', en: 'Yes, before there was… and now… / Not much.' }, follow: [{ es: '¿Te gusta el cambio?', en: 'Do you like the change?' }, { es: '¿Qué echas de menos?', en: 'What do you miss?' }] },
            { q: { es: '¿Comes comida de otros países?', en: 'Do you eat food from other countries?' }, help: { es: 'Sí, me gusta la comida… / Poco.', en: 'Yes, I like… food. / Not much.' }, follow: [{ es: '¿Cuál es tu favorita?', en: 'What is your favourite?' }, { es: '¿Sabes cocinarla?', en: 'Can you cook it?' }] },
            { q: { es: '¿A qué edad empezaste a trabajar?', en: 'At what age did you start working?' }, help: { es: 'A los… años. / Todavía no trabajo.', en: 'At… / I don’t work yet.' }, follow: [{ es: '¿Qué hacías?', en: 'What did you do?' }, { es: '¿Te gustaba?', en: 'Did you like it?' }] },
            { q: { es: '¿Comes con tus vecinos?', en: 'Do you eat with your neighbours?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Los conoces bien?', en: 'Do you know them well?' }, { es: '¿De dónde son?', en: 'Where are they from?' }] },
          ],
          words: [{ es: 'las especias', en: 'spices' }, { es: 'enfrente', en: 'opposite' }, { es: 'el estofado', en: 'the stew' }, { es: 'el centro comercial', en: 'the shopping centre' }, { es: 'el vendedor', en: 'the seller' }],
        },
        A2: {
          scene: { es: 'El ayuntamiento quiere renovar Moore Street: los puestos de madera se cambiarán por casetas modernas, con un alquiler mensual. Bridget nunca ha pagado alquiler. Además, en esta calle hay una casa histórica donde los rebeldes de 1916 se rindieron, y algunos quieren convertirla en museo.', en: 'The council wants to renovate Moore Street: the wooden stalls will be replaced by modern kiosks, with a monthly rent. Bridget has never paid rent. Also, on this street there is a historic house where the 1916 rebels surrendered, and some want to turn it into a museum.' },
          opener: { es: 'Mi abuela vio a los rebeldes salir de esa casa con las manos arriba. Me lo contaba cada Navidad. Yo quiero que haya un museo, claro. Pero si el museo trae turistas y suben los precios, nosotras, las vendedoras, desapareceremos. ¿Es posible proteger la historia sin echar a la gente que vive en ella?', en: 'My grandmother saw the rebels come out of that house with their hands up. She told me about it every Christmas. I want there to be a museum, of course. But if the museum brings tourists and prices go up, we sellers will disappear. Is it possible to protect history without pushing out the people who live in it?' },
          decide: {
            ask: { es: 'Bridget tiene que hablar en una reunión del ayuntamiento. ¿Qué le aconsejas?', en: 'Bridget has to speak at a council meeting. What do you advise her?' },
            options: [
              { say: { es: 'Pedir que las vendedoras tradicionales no paguen alquiler.', en: 'Ask that the traditional sellers pay no rent.' }, then: { es: 'El ayuntamiento acepta para las que llevan más de veinte años. Bridget se queda.', en: 'The council agrees for those with more than twenty years. Bridget stays.' } },
              { say: { es: 'Proponer que el museo cuente también la historia del mercado.', en: 'Propose that the museum also tells the market’s history.' }, then: { es: 'En el museo hay una sala con fotos de la abuela de Bridget. Ella llora al verla.', en: 'In the museum there is a room with photos of Bridget’s grandmother. She cries when she sees it.' } },
              { say: { es: 'Unirse con los vendedores extranjeros para negociar juntos.', en: 'Join with the foreign sellers to negotiate together.' }, then: { es: 'Juntos son más fuertes. Consiguen casetas más baratas para todos.', en: 'Together they are stronger. They get cheaper kiosks for everyone.' } },
            ],
          },
          twist: { es: 'La nieta de Bridget, que estudia en la universidad, le dice que el mercado es «del pasado» y que ella nunca trabajará allí. ¿Qué debería responderle Bridget?', en: 'Bridget’s granddaughter, who is at university, tells her the market is “from the past” and she will never work there. What should Bridget reply?' },
          questions: [
            { q: { es: '¿Tus abuelos te contaban historias del pasado?', en: 'Did your grandparents tell you stories from the past?' }, help: { es: 'Sí, mi abuelo me contaba… / No mucho.', en: 'Yes, my grandfather used to tell me… / Not much.' }, follow: [{ es: '¿Cuál recuerdas?', en: 'Which one do you remember?' }, { es: '¿Se la cuentas a otros?', en: 'Do you tell it to others?' }] },
            { q: { es: '¿Hay un lugar histórico cerca de tu casa?', en: 'Is there a historic place near your home?' }, help: { es: 'Sí, el… / No, que yo sepa.', en: 'Yes, the… / Not that I know of.' }, follow: [{ es: '¿Lo has visitado?', en: 'Have you visited it?' }, { es: '¿Qué pasó allí?', en: 'What happened there?' }] },
            { q: { es: '¿Qué trabajo de tu familia no quieres hacer?', en: 'Which family job don’t you want to do?' }, help: { es: 'No quiero ser… porque… / Ninguno, me gustan.', en: 'I don’t want to be… because… / None, I like them.' }, follow: [{ es: '¿Se lo has dicho?', en: 'Have you told them?' }, { es: '¿Cómo reaccionaron?', en: 'How did they react?' }] },
            { q: { es: '¿El turismo ayuda o perjudica a tu ciudad?', en: 'Does tourism help or harm your city?' }, help: { es: 'Ayuda porque… pero… / Perjudica porque…', en: 'It helps because… but… / It harms because…' }, follow: [{ es: '¿Qué cambiarías?', en: 'What would you change?' }, { es: '¿Has sido turista allí?', en: 'Have you been a tourist there?' }] },
          ],
          words: [{ es: 'rendirse', en: 'to surrender' }, { es: 'el rebelde', en: 'the rebel' }, { es: 'la caseta', en: 'the kiosk' }, { es: 'negociar', en: 'to negotiate' }, { es: 'la nieta', en: 'the granddaughter' }],
        },
        B1: {
          scene: { es: 'Un estudio dice que los mercados tradicionales de Dublín venden fruta más barata que los supermercados, pero sin control de calidad oficial. El gobierno propone obligar a todos los puestos a pasar inspecciones caras. Bridget calcula que tendría que subir los precios un treinta por ciento. Muchos de sus clientes son pensionistas con poco dinero.', en: 'A study says Dublin’s traditional markets sell cheaper fruit than supermarkets, but without official quality control. The government proposes forcing all stalls to undergo expensive inspections. Bridget calculates she would have to raise prices by thirty per cent. Many of her customers are pensioners with little money.' },
          opener: { es: 'Llevo sesenta años vendiendo fruta y nadie se ha puesto nunca enfermo. Pero entiendo que el gobierno quiera controlar. El problema es que las normas se hacen pensando en los supermercados grandes, no en una mujer con un carro de madera. ¿Las normas iguales para todos son siempre justas?', en: 'I’ve been selling fruit for sixty years and nobody has ever got sick. But I understand the government wants controls. The problem is that rules are made with big supermarkets in mind, not a woman with a wooden cart. Are the same rules for everyone always fair?' },
          decide: {
            ask: { es: '¿Qué debería proponer Bridget al gobierno?', en: 'What should Bridget propose to the government?' },
            options: [
              { say: { es: 'Inspecciones gratuitas para los puestos pequeños.', en: 'Free inspections for small stalls.' }, then: { es: 'El gobierno acepta durante cinco años. Después, nadie sabe qué pasará.', en: 'The government agrees for five years. After that, nobody knows what will happen.' } },
              { say: { es: 'Un sistema de control compartido entre todos los vendedores.', en: 'A shared control system among all the sellers.' }, then: { es: 'Los vendedores contratan juntos a un inspector. Cuesta poco a cada uno.', en: 'The sellers hire an inspector together. It costs each of them little.' } },
              { say: { es: 'Negarse y seguir vendiendo como siempre.', en: 'Refuse and keep selling as always.' }, then: { es: 'Le ponen una multa. Sus clientes hacen una colecta para pagarla.', en: 'She gets a fine. Her customers take up a collection to pay it.' } },
            ],
          },
          twist: { es: 'Un supermercado le ofrece a Bridget un puesto dentro de su tienda, con su nombre y su carro de madera, «para dar ambiente tradicional». Le pagarían un sueldo fijo. ¿Debería aceptar?', en: 'A supermarket offers Bridget a spot inside its shop, with her name and her wooden cart, “to give a traditional atmosphere”. They would pay her a fixed salary. Should she accept?' },
          questions: [
            { q: { es: '¿Las normas iguales para todos son siempre justas?', en: 'Are the same rules for everyone always fair?' }, help: { es: 'No, porque los pequeños… / Sí, porque si no…', en: 'No, because small businesses… / Yes, because otherwise…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Confías más en un mercado o en un supermercado?', en: 'Do you trust a market or a supermarket more?' }, help: { es: 'En el mercado, porque… / En el supermercado, porque…', en: 'The market, because… / The supermarket, because…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Has tenido un problema?', en: 'Have you had a problem?' }] },
            { q: { es: '¿Las personas mayores tienen problemas para pagar la comida en tu país?', en: 'Do older people struggle to pay for food in your country?' }, help: { es: 'Sí, muchos… / No tanto, porque…', en: 'Yes, many… / Not so much, because…' }, follow: [{ es: '¿Quién les ayuda?', en: 'Who helps them?' }, { es: '¿Qué debería hacer el gobierno?', en: 'What should the government do?' }] },
            { q: { es: '¿Es «auténtico» un puesto tradicional dentro de un supermercado?', en: 'Is a traditional stall inside a supermarket “authentic”?' }, help: { es: 'No, es un decorado… / Puede serlo si…', en: 'No, it’s a stage set… / It can be if…' }, follow: [{ es: '¿Has visto algo así?', en: 'Have you seen something like that?' }, { es: '¿Comprarías allí?', en: 'Would you buy there?' }] },
          ],
          words: [{ es: 'la inspección', en: 'the inspection' }, { es: 'el pensionista', en: 'the pensioner' }, { es: 'la multa', en: 'the fine' }, { es: 'la colecta', en: 'the collection (of money)' }, { es: 'el carro', en: 'the cart' }],
        },
      },
    },
    // ------------------------------------------------------------ the DART coastal train
    {
      id: 'dart',
      name: { es: 'El tren de la costa a Howth', en: 'The coastal train to Howth' },
      who: { name: 'Sorcha', role: { es: 'pescadera', en: 'fishmonger' } },
      levels: {
        A0: {
          scene: { es: 'Es un tren verde que va por la costa. Ves el mar por la ventana. Al final hay un pueblo de pescadores: Howth. Sorcha vende pescado en el puerto.', en: 'It is a green train that goes along the coast. You see the sea from the window. At the end there is a fishing village: Howth. Sorcha sells fish at the port.' },
          opener: { es: '¡Hola! Soy Sorcha. Aquí hay pescado fresco y focas. ¿Ves las focas en el agua?', en: 'Hello! I am Sorcha. Here there is fresh fish and seals. Do you see the seals in the water?' },
          decide: {
            ask: { es: '¿Qué haces en el puerto?', en: 'What do you do at the port?' },
            options: [
              { say: { es: 'Miro las focas.', en: 'I look at the seals.' }, then: { es: 'Una foca grande saca la cabeza. ¡Parece un perro!', en: 'A big seal pops its head up. It looks like a dog!' } },
              { say: { es: 'Compro pescado con patatas.', en: 'I buy fish and chips.' }, then: { es: 'Sorcha dice: «El pescado es de esta mañana».', en: 'Sorcha says: “The fish is from this morning.”' } },
              { say: { es: 'Camino por el faro.', en: 'I walk to the lighthouse.' }, then: { es: 'Hace mucho viento, pero la vista es increíble.', en: 'It is very windy, but the view is incredible.' } },
            ],
          },
          twist: { es: 'Una gaviota te roba una patata de la mano. Sorcha se ríe. ¿Qué dices?', en: 'A seagull steals a chip from your hand. Sorcha laughs. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el pescado?', en: 'Do you like fish?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Cómo lo cocinas?', en: 'How do you cook it?' }] },
            { q: { es: '¿Vives cerca del mar?', en: 'Do you live near the sea?' }, help: { es: 'Sí, muy cerca. / No, lejos.', en: 'Yes, very close. / No, far.' }, follow: [{ es: '¿Vas mucho?', en: 'Do you go often?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Has visto una foca?', en: 'Have you seen a seal?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Qué animal del mar te gusta?', en: 'Which sea animal do you like?' }] },
            { q: { es: '¿Te gusta viajar en tren?', en: 'Do you like travelling by train?' }, help: { es: 'Sí, mucho. / No, prefiero el coche.', en: 'Yes, a lot. / No, I prefer the car.' }, follow: [{ es: '¿Adónde?', en: 'Where to?' }, { es: '¿Miras por la ventana?', en: 'Do you look out the window?' }] },
          ],
          words: [{ es: 'la foca', en: 'the seal' }, { es: 'la gaviota', en: 'the seagull' }, { es: 'el faro', en: 'the lighthouse' }, { es: 'fresco', en: 'fresh' }, { es: 'el puerto', en: 'the port' }],
        },
        A1: {
          scene: { es: 'Son las seis de la mañana. Llegan los barcos de pesca al puerto de Howth. Sorcha compra el pescado y lo prepara para su tienda. Hace frío y huele a mar. Sorcha te enseña a elegir pescado fresco.', en: 'It is six in the morning. The fishing boats arrive at Howth harbour. Sorcha buys the fish and prepares it for her shop. It is cold and smells of the sea. Sorcha teaches you how to choose fresh fish.' },
          opener: { es: 'Mi padre era pescador y yo empecé a trabajar con él a los quince años. Ahora tengo la tienda. Para saber si un pescado es fresco, mira los ojos: tienen que brillar. Y no tiene que oler mal. En Irlanda comemos poco pescado, aunque somos una isla. ¿En tu país se come mucho pescado?', en: 'My father was a fisherman and I started working with him at fifteen. Now I have the shop. To know if a fish is fresh, look at the eyes: they have to shine. And it mustn’t smell bad. In Ireland we eat little fish, even though we’re an island. In your country do people eat a lot of fish?' },
          decide: {
            ask: { es: 'Sorcha te pide ayuda en la tienda. ¿Qué trabajo eliges?', en: 'Sorcha asks you to help in the shop. Which job do you choose?' },
            options: [
              { say: { es: 'Atender a los clientes.', en: 'Serve the customers.' }, then: { es: 'Una señora te pregunta cómo cocinar salmón. Sorcha te ayuda con la respuesta.', en: 'A lady asks you how to cook salmon. Sorcha helps you with the answer.' } },
              { say: { es: 'Poner el pescado en el hielo.', en: 'Put the fish on the ice.' }, then: { es: 'Tienes las manos muy frías, pero el escaparate queda precioso.', en: 'Your hands are freezing, but the display looks beautiful.' } },
              { say: { es: 'Escribir los precios en la pizarra.', en: 'Write the prices on the board.' }, then: { es: 'Escribes «salmón» en español. Un cliente de México te sonríe.', en: 'You write “salmón” in Spanish. A customer from Mexico smiles at you.' } },
            ],
          },
          twist: { es: 'Un cliente dice que el pescado de ayer le hizo daño al estómago y quiere su dinero. Sorcha está segura de que el pescado estaba bien. ¿Qué haces?', en: 'A customer says yesterday’s fish upset his stomach and wants his money back. Sorcha is sure the fish was fine. What do you do?' },
          questions: [
            { q: { es: '¿Se come mucho pescado en tu país?', en: 'Do people eat a lot of fish in your country?' }, help: { es: 'Sí, mucho. / No, más carne.', en: 'Yes, a lot. / No, more meat.' }, follow: [{ es: '¿Qué pescado?', en: 'Which fish?' }, { es: '¿Y tú?', en: 'And you?' }] },
            { q: { es: '¿Te levantas temprano?', en: 'Do you get up early?' }, help: { es: 'Sí, a las… / No, tarde.', en: 'Yes, at… / No, late.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Sabes elegir fruta o pescado fresco?', en: 'Do you know how to choose fresh fruit or fish?' }, help: { es: 'Sí, miro… / No, nunca sé.', en: 'Yes, I look at… / No, I never know.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Dónde compras?', en: 'Where do you shop?' }] },
            { q: { es: '¿Trabajaste con tus padres?', en: 'Did you work with your parents?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Qué hacías?', en: 'What did you do?' }, { es: '¿Te gustaba?', en: 'Did you like it?' }] },
          ],
          words: [{ es: 'el pescador', en: 'the fisherman' }, { es: 'brillar', en: 'to shine' }, { es: 'oler', en: 'to smell' }, { es: 'el hielo', en: 'ice' }, { es: 'la pizarra', en: 'the board' }],
        },
        A2: {
          scene: { es: 'Este año la Unión Europea ha reducido la cantidad de pescado que pueden pescar los barcos irlandeses para proteger el mar. El hermano de Sorcha es pescador y ha tenido que vender su barco. Mientras, barcos grandes de otros países pescan cerca de la costa irlandesa.', en: 'This year the European Union has cut the amount of fish Irish boats can catch to protect the sea. Sorcha’s brother is a fisherman and has had to sell his boat. Meanwhile, big boats from other countries fish near the Irish coast.' },
          opener: { es: 'Entiendo que hay que proteger los peces: si no, en veinte años no quedará nada. Pero mi hermano ha perdido el trabajo de su vida mientras barcos enormes de otros países siguen pescando delante de nuestra casa. Dice que se va a ir a Australia. ¿Tú has visto una ley que era buena para todos pero mala para tu familia?', en: 'I understand we have to protect the fish: otherwise, in twenty years there will be nothing left. But my brother has lost his life’s work while huge boats from other countries keep fishing in front of our house. He says he’s going to go to Australia. Have you ever seen a law that was good for everyone but bad for your family?' },
          decide: {
            ask: { es: '¿Qué le aconsejas al hermano de Sorcha?', en: 'What do you advise Sorcha’s brother?' },
            options: [
              { say: { es: 'Que use su experiencia para llevar turistas a ver ballenas.', en: 'Use his experience to take tourists whale watching.' }, then: { es: 'Compra un barco pequeño. Gana menos que antes, pero sigue en el mar.', en: 'He buys a small boat. He earns less than before, but he’s still at sea.' } },
              { say: { es: 'Que trabaje con Sorcha en la tienda.', en: 'Work with Sorcha in the shop.' }, then: { es: 'Discuten mucho al principio. Después abren juntos un pequeño restaurante.', en: 'They argue a lot at first. Then they open a small restaurant together.' } },
              { say: { es: 'Que se vaya a Australia a probar suerte.', en: 'Go to Australia to try his luck.' }, then: { es: 'Encuentra trabajo en un barco en dos semanas. Pero llama a su madre cada noche.', en: 'He finds work on a boat within two weeks. But he calls his mother every night.' } },
            ],
          },
          twist: { es: 'Un periodista quiere entrevistar a Sorcha. Si dice lo que piensa de la Unión Europea, algunos clientes pueden enfadarse. ¿Qué debería hacer?', en: 'A journalist wants to interview Sorcha. If she says what she thinks about the European Union, some customers might get angry. What should she do?' },
          questions: [
            { q: { es: '¿Conoces una ley buena para todos pero mala para algunos?', en: 'Do you know a law that’s good for everyone but bad for some?' }, help: { es: 'Sí, por ejemplo… / No se me ocurre ninguna.', en: 'Yes, for example… / I can’t think of any.' }, follow: [{ es: '¿A quién perjudica?', en: 'Who does it harm?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
            { q: { es: '¿Alguien de tu familia ha perdido su trabajo?', en: 'Has anyone in your family lost their job?' }, help: { es: 'Sí, mi… cuando… / No, por suerte.', en: 'Yes, my… when… / No, luckily.' }, follow: [{ es: '¿Qué hizo después?', en: 'What did they do afterwards?' }, { es: '¿Cómo lo vivieron?', en: 'How did they cope?' }] },
            { q: { es: '¿Has visto ballenas o delfines?', en: 'Have you seen whales or dolphins?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Cómo fue?', en: 'How was it?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Dices tu opinión política a tus clientes o compañeros?', en: 'Do you tell your clients or colleagues your political opinion?' }, help: { es: 'No, nunca, porque… / Sí, a veces.', en: 'No, never, because… / Yes, sometimes.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Ha habido problemas?', en: 'Have there been problems?' }] },
          ],
          words: [{ es: 'pescar', en: 'to fish' }, { es: 'la ballena', en: 'the whale' }, { es: 'reducir', en: 'to reduce' }, { es: 'probar suerte', en: 'to try one’s luck' }, { es: 'el barco', en: 'the boat' }],
        },
        B1: {
          scene: { es: 'El gobierno quiere construir un enorme parque eólico en el mar, frente a Howth, para producir energía limpia. Las turbinas se verían desde el pueblo. Los pescadores dicen que afectará a los peces, los vecinos que estropeará la vista y algunos jóvenes que es la única forma de luchar contra el cambio climático. Sorcha preside la asociación de comerciantes.', en: 'The government wants to build a huge offshore wind farm in front of Howth to produce clean energy. The turbines would be visible from the village. The fishermen say it will affect the fish, the residents that it will spoil the view, and some young people that it’s the only way to fight climate change. Sorcha chairs the traders’ association.' },
          opener: { es: 'Mi hija tiene dieciséis años y me dice: «Mamá, si no hacemos nada, Howth estará bajo el agua en cien años». Y tiene razón. Pero también veo que las decisiones siempre las paga la gente que vive del mar. ¿Por qué los parques eólicos nunca se ponen delante de las casas de los ricos de la ciudad?', en: 'My daughter is sixteen and tells me: “Mum, if we do nothing, Howth will be under water in a hundred years.” And she’s right. But I also see that decisions are always paid for by the people who live from the sea. Why are wind farms never put in front of rich people’s houses in the city?' },
          decide: {
            ask: { es: '¿Qué posición debería defender la asociación de Sorcha?', en: 'What position should Sorcha’s association take?' },
            options: [
              { say: { es: 'Apoyar el parque si el pueblo recibe parte de los beneficios.', en: 'Support the wind farm if the village receives part of the profits.' }, then: { es: 'El gobierno acepta. Con el dinero, Howth arregla el puerto y crea becas para jóvenes.', en: 'The government agrees. With the money, Howth repairs the harbour and creates scholarships for young people.' } },
              { say: { es: 'Pedir que el parque se construya más lejos, aunque cueste más.', en: 'Ask for the wind farm to be built further out, even if it costs more.' }, then: { es: 'Se mueve cinco kilómetros más lejos. Se retrasa dos años, pero casi no se ve.', en: 'It’s moved five kilometres further out. It’s delayed two years, but it’s barely visible.' } },
              { say: { es: 'Oponerse: el mar es el trabajo y la identidad del pueblo.', en: 'Oppose it: the sea is the village’s work and identity.' }, then: { es: 'El proyecto se va a otra costa. La hija de Sorcha no le habla durante una semana.', en: 'The project goes to another coast. Sorcha’s daughter doesn’t speak to her for a week.' } },
            ],
          },
          twist: { es: 'Sorcha descubre que la empresa del parque ha ofrecido trabajo bien pagado a varios pescadores a cambio de que voten a favor. ¿Debería hacerlo público?', en: 'Sorcha discovers the wind farm company has offered well-paid jobs to several fishermen in exchange for voting in favour. Should she make it public?' },
          questions: [
            { q: { es: '¿Aceptarías turbinas eólicas delante de tu casa?', en: 'Would you accept wind turbines in front of your house?' }, help: { es: 'Sí, porque el clima… / No, porque…', en: 'Yes, because the climate… / No, because…' }, follow: [{ es: '¿Y una central solar?', en: 'And a solar plant?' }, { es: '¿Qué pedirías a cambio?', en: 'What would you ask for in exchange?' }] },
            { q: { es: '¿Los jóvenes ven el cambio climático diferente que los mayores?', en: 'Do young people see climate change differently from older people?' }, help: { es: 'Sí, los jóvenes… mientras que… / No tanto.', en: 'Yes, young people… while… / Not so much.' }, follow: [{ es: '¿Y en tu familia?', en: 'And in your family?' }, { es: '¿Han discutido por eso?', en: 'Have you argued about it?' }] },
            { q: { es: '¿Quién suele pagar el precio de las decisiones grandes?', en: 'Who usually pays the price of big decisions?' }, help: { es: 'Normalmente los que… / Creo que todos por igual.', en: 'Usually those who… / I think everyone equally.' }, follow: [{ es: '¿Conoces un caso?', en: 'Do you know a case?' }, { es: '¿Es justo?', en: 'Is it fair?' }] },
            { q: { es: '¿Denunciarías a tus vecinos si hicieran algo injusto?', en: 'Would you report your neighbours if they did something unfair?' }, help: { es: 'Sí, aunque… / Primero hablaría con ellos.', en: 'Yes, even though… / I’d talk to them first.' }, follow: [{ es: '¿Te ha pasado?', en: 'Has it happened to you?' }, { es: '¿Qué pensarían de ti?', en: 'What would they think of you?' }] },
          ],
          words: [{ es: 'el parque eólico', en: 'the wind farm' }, { es: 'la turbina', en: 'the turbine' }, { es: 'el comerciante', en: 'the trader' }, { es: 'estropear', en: 'to spoil' }, { es: 'presidir', en: 'to chair' }],
        },
      },
    },
  ],
};
