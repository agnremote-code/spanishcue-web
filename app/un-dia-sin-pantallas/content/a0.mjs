// Un día sin pantallas · A0: twenty-four hours without phone, TV or computer.
// What do you do, who do you see, what do you miss? Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Hoy es un día especial: no hay teléfono, no hay televisión, no hay ordenador. Veinticuatro horas sin pantallas. ¿Qué haces tú?', 'Today is a special day: no phone, no TV, no computer. Twenty-four hours without screens. What do you do?'),
  categorias: [
    {
      icon: '🌅', title: t('La mañana sin teléfono', 'The morning without a phone'),
      questions: [
        t('¿Qué haces primero sin tu teléfono en la mesita?', 'What do you do first without your phone on the bedside table?'),
        t('¿Cómo sabes la hora sin el móvil?', 'How do you know the time without your phone?'),
        t('¿Periódico, revista o caja de cereales: qué lees desayunando?', 'Newspaper, magazine or cereal box: what do you read at breakfast?'),
        t('¿Con quién hablas por la mañana cara a cara?', 'Who do you talk to face to face in the morning?'),
        t('¿Qué ruido de la mañana escuchas hoy por primera vez?', 'What morning sound do you hear today for the first time?'),
      ],
      starters: [t('Primero yo…', 'First I…'), t('Miro un reloj…', 'I look at a clock…'), t('Hablo con…', 'I talk to…')],
    },
    {
      icon: '🚶', title: t('La calle', 'The street'),
      questions: [
        t('¿Cómo llegas a un lugar nuevo sin mapa en el teléfono?', 'How do you get to a new place without a map on your phone?'),
        t('¿Qué ves en tu calle cuando no miras el móvil?', 'What do you see in your street when you do not look at your phone?'),
        t('¿A quién preguntas una dirección?', 'Who do you ask for directions?'),
        t('¿Qué quiosco o mercado visitas sin prisa hoy?', 'Which kiosk or market do you visit today without hurrying?'),
        t('¿Qué miras en la parada mientras esperas?', 'What do you look at at the stop while you wait?'),
      ],
      starters: [t('Pregunto a…', 'I ask…'), t('En mi calle veo…', 'In my street I see…'), t('En la parada…', 'At the stop…')],
    },
    {
      icon: '🧩', title: t('Juegos y manos', 'Games and hands'),
      questions: [
        t('¿Qué juego de mesa sacas del armario?', 'What board game do you take out of the cupboard?'),
        t('¿Qué haces con las manos: cocinar, dibujar o tocar música?', 'What do you do with your hands: cook, draw or play music?'),
        t('¿Qué libro de papel lees hoy?', 'What paper book do you read today?'),
        t('¿Dominó, ajedrez o naipes con tus abuelos?', 'Dominoes, chess or cards with your grandparents?'),
        t('¿Qué retrato haces con lápiz de tu mascota o tu amigo?', 'What pencil portrait do you make of your pet or your friend?'),
      ],
      starters: [t('Saco…', 'I take out…'), t('Con las manos…', 'With my hands…'), t('Dibujo…', 'I draw…')],
    },
    {
      icon: '👥', title: t('La gente', 'People'),
      questions: [
        t('¿A qué amigo visitas sin mandar un mensaje antes?', 'Which friend do you visit without sending a message first?'),
        t('¿Cómo quedas con alguien sin teléfono?', 'How do you arrange to meet someone without a phone?'),
        t('¿Qué vecino saludas hoy por su nombre?', 'Which neighbour do you greet by name today?'),
        t('¿Con quién comes hoy sin mirar pantallas?', 'Who do you eat with today without looking at screens?'),
        t('¿Qué conversación larga tienes hoy?', 'What long conversation do you have today?'),
      ],
      starters: [t('Visito a…', 'I visit…'), t('Quedamos en…', 'We arrange to meet at…'), t('Como con…', 'I eat with…')],
    },
    {
      icon: '😬', title: t('Lo difícil', 'The hard part'),
      questions: [
        t('¿Qué echas de menos de tu teléfono a las doce?', 'What do you miss about your phone at twelve?'),
        t('¿Qué aplicación quieres abrir cada cinco minutos?', 'What app do you want to open every five minutes?'),
        t('¿Qué foto no haces hoy?', 'What photo do you not take today?'),
        t('¿Qué haces cuando te aburres sin pantalla?', 'What do you do when you get bored without a screen?'),
        t('¿Qué mensaje importante no recibes hoy?', 'What important message do you not get today?'),
      ],
      starters: [t('Echo de menos…', 'I miss…'), t('Quiero abrir…', 'I want to open…'), t('Cuando me aburro…', 'When I get bored…')],
    },
    {
      icon: '🌙', title: t('La noche', 'The night'),
      questions: [
        t('¿Qué haces por la noche sin televisión ni series?', 'What do you do at night without TV or series?'),
        t('¿A qué hora duermes en un día sin pantallas?', 'What time do you sleep on a day without screens?'),
        t('¿Qué tres cosas del día anotas en una libreta?', 'What three things from the day do you note down in a notebook?'),
        t('¿Qué momento desconectado de hoy recuerdas con una sonrisa?', 'What unplugged moment from today do you remember with a smile?'),
        t('¿Repites un día sin pantallas este mes?', 'Do you repeat a day without screens this month?'),
      ],
      starters: [t('Por la noche…', 'At night…'), t('Duermo a las…', 'I sleep at…'), t('Me gusta más…', 'I like … most')],
    },
  ],
};
