// El consultorio sentimental de la radio · A0: a night radio show about the
// heart. Listeners call; you answer about your people and your feelings.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Son las once de la noche. En la radio empieza el consultorio sentimental. Hoy tú estás en el micrófono: hablas de amor, de amigos y de familia.', 'It is eleven at night. On the radio the agony aunt show begins. Today you are at the microphone: you talk about love, friends and family.'),
  categorias: [
    {
      icon: '📻', title: t('Buenas noches, ¿quién habla?', 'Good evening, who is speaking?'),
      questions: [
        t('¿Escuchas la radio en el coche, en la cocina o nunca?', 'Do you listen to the radio in the car, in the kitchen or never?'),
        t('¿Qué voz de la radio o de un pódcast te relaja?', 'What radio or podcast voice relaxes you?'),
        t('¿Qué dedicatoria haces en la radio esta noche?', 'What dedication do you make on the radio tonight?'),
        t('¿A quién saludas si hablas en la radio?', 'Who do you say hello to if you speak on the radio?'),
        t('¿Qué canción de amor pides al locutor?', 'What love song do you ask the presenter for?'),
      ],
      starters: [t('Escucho la radio…', 'I listen to the radio…'), t('Saludo a…', 'I say hello to…'), t('Pido la canción…', 'I ask for the song…')],
    },
    {
      icon: '💘', title: t('Corazones', 'Hearts'),
      questions: [
        t('¿Qué es romántico para ti: flores, una carta o una cena?', 'What is romantic for you: flowers, a letter or a dinner?'),
        t('¿Qué emoji mandas a la persona que quieres?', 'What emoji do you send to the person you love?'),
        t('¿Qué película de amor ves con pañuelos?', 'What love film do you watch with tissues?'),
        t('¿Sonrisa, ojos o voz: qué te enamora primero?', 'Smile, eyes or voice: what makes you fall in love first?'),
        t('¿Dónde es una primera cita perfecta en tu ciudad?', 'Where is a perfect first date in your city?'),
      ],
      starters: [t('Para mí es romántico…', 'For me … is romantic'), t('En mi idioma decimos…', 'In my language we say…'), t('Me enamora…', '… makes me fall in love')],
    },
    {
      icon: '🤞', title: t('Amigos', 'Friends'),
      questions: [
        t('¿Desde qué año conoces a tu amiga o amigo más antiguo?', 'Since what year have you known your oldest friend?'),
        t('¿Qué plan barato haces con tu persona favorita un sábado?', 'What cheap plan do you do with your favourite person on a Saturday?'),
        t('¿Qué amigo te escucha a las tres de la mañana?', 'Which friend listens to you at three in the morning?'),
        t('¿Cómo se llama tu grupo de amigos en el chat?', 'What is your friends’ group called in the chat?'),
        t('¿Qué regalo das a un amigo triste?', 'What present do you give a sad friend?'),
      ],
      starters: [t('Conozco a… desde…', 'I have known… since…'), t('Los fines de semana…', 'At weekends…'), t('Mi grupo se llama…', 'My group is called…')],
    },
    {
      icon: '🏡', title: t('Familia', 'Family'),
      questions: [
        t('¿Qué primo o prima es como un hermano para ti?', 'Which cousin is like a sibling to you?'),
        t('¿Quién en tu familia da los mejores abrazos?', 'Who in your family gives the best hugs?'),
        t('¿Qué pregunta te hace siempre tu tía o tu abuela?', 'What question does your aunt or grandmother always ask you?'),
        t('¿Qué haces cuando discutes con un hermano o una prima?', 'What do you do when you argue with a brother or a cousin?'),
        t('¿Qué apodo cariñoso usa tu familia contigo?', 'What affectionate nickname does your family use for you?'),
      ],
      starters: [t('Mi primo o mi prima…', 'My cousin…'), t('Siempre me pregunta…', 'She always asks me…'), t('Me llaman…', 'They call me…')],
    },
    {
      icon: '🥺', title: t('Sentimientos', 'Feelings'),
      questions: [
        t('¿Qué comida te consuela un domingo gris?', 'What food comforts you on a grey Sunday?'),
        t('¿Lloras con películas, con canciones o nunca?', 'Do you cry with films, with songs or never?'),
        t('¿Qué te pone celoso o celosa?', 'What makes you jealous?'),
        t('¿Qué color es tu humor hoy?', 'What colour is your mood today?'),
        t('¿Qué palabra bonita te dice alguien esta semana?', 'What nice word does someone say to you this week?'),
      ],
      starters: [t('Cuando estoy triste…', 'When I am sad…'), t('Lloro con…', 'I cry with…'), t('Hoy mi humor es…', 'Today my mood is…')],
    },
    {
      icon: '🎙️', title: t('Tu consejo al oyente', 'Your advice to the listener'),
      questions: [
        t('¿Qué consejo das a una persona tímida en el amor?', 'What advice do you give a shy person in love?'),
        t('¿Qué dices a un amigo que tiene el corazón roto?', 'What do you say to a friend with a broken heart?'),
        t('¿Mensaje, llamada o carta para pedir perdón?', 'Message, call or letter to say sorry?'),
        t('¿Qué haces si tu amigo no contesta tus mensajes?', 'What do you do if your friend does not answer your messages?'),
        t('¿Qué frase dices en la radio para terminar el programa?', 'What sentence do you say on the radio to end the show?'),
      ],
      starters: [t('Mi consejo es…', 'My advice is…'), t('Le digo…', 'I tell him or her…'), t('Para pedir perdón, prefiero…', 'To say sorry, I prefer…')],
    },
  ],
};
