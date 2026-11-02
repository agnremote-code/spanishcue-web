// Speed dating de personajes · A0: six dates with six very different people.
// Each person asks you five questions about your own life. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Esta noche hay citas rápidas en un café. Seis personas. Cada persona te hace cinco preguntas. Tú respondes con frases cortas.', 'Tonight there is speed dating in a café. Six people. Each person asks you five questions. You answer with short sentences.'),
  categorias: [
    {
      icon: '🥐', title: t('Lucía, la panadera de Bogotá', 'Lucía, the baker from Bogotá'),
      questions: [
        t('¿Qué desayunas antes de un día largo de trabajo?', 'What do you eat for breakfast before a long working day?'),
        t('¿Qué panadería o mercado de tu barrio quieres enseñarme?', 'Which bakery or market in your neighbourhood do you want to show me?'),
        t('¿A qué hora suena tu despertador?', 'What time does your alarm clock ring?'),
        t('¿Qué huele bien en tu cocina?', 'What smells good in your kitchen?'),
        t('¿Qué olor de comida te lleva a tu infancia?', 'What food smell takes you back to your childhood?'),
      ],
      starters: [t('Por la mañana yo…', 'In the morning I…'), t('Prefiero… porque…', 'I prefer… because…'), t('Mi abuela hace…', 'My grandmother makes…')],
    },
    {
      icon: '🏄', title: t('Kenji, el profesor de surf de Lima', 'Kenji, the surf teacher from Lima'),
      questions: [
        t('¿Qué ola, lago o río de tu vida recuerdas?', 'What wave, lake or river from your life do you remember?'),
        t('¿Qué parque o paseo de tu ciudad es tu lugar para correr?', 'Which park or promenade in your city is your place to run?'),
        t('¿Surf, escalada o yoga: qué pruebas conmigo?', 'Surfing, climbing or yoga: what do you try with me?'),
        t('¿Cuál es tu bicicleta, tu coche o tu tren?', 'What is your bicycle, your car or your train?'),
        t('¿Qué partido del Mundial 2026 recuerdas?', 'Which match of the 2026 World Cup do you remember?'),
      ],
      starters: [t('Me gusta más…', 'I like … more'), t('Los domingos yo…', 'On Sundays I…'), t('Voy en…', 'I go by…')],
    },
    {
      icon: '📱', title: t('Doña Carmen, la abuela de TikTok', 'Doña Carmen, the TikTok grandmother'),
      questions: [
        t('¿Cuál es la primera aplicación de tu mañana?', 'What is the first app of your morning?'),
        t('¿Qué video corto te hace reír mucho?', 'What short video makes you laugh a lot?'),
        t('¿Qué foto de tu teléfono me enseñas primero?', 'Which photo on your phone do you show me first?'),
        t('¿Quién te manda audios muy largos?', 'Who sends you very long voice notes?'),
        t('¿Qué plato de tu país enseñas en un video?', 'What dish from your country would you teach in a video?'),
      ],
      starters: [t('Primero abro…', 'First I open…'), t('Tengo más o menos…', 'I have more or less…'), t('Mando mensajes a…', 'I send messages to…')],
    },
    {
      icon: '🎹', title: t('Mateo, el pianista tímido de Montevideo', 'Mateo, the shy pianist from Montevideo'),
      questions: [
        t('¿En una fiesta llena de desconocidos, dónde te sientas?', 'At a party full of strangers, where do you sit?'),
        t('¿Qué canción te pone triste y bonita a la vez?', 'What song makes you sad and happy at the same time?'),
        t('¿Qué sonido te relaja: lluvia, mar o piano?', 'What sound relaxes you: rain, sea or piano?'),
        t('¿Tu mascota ideal es un perro, un gato o un pez?', 'Is your ideal pet a dog, a cat or a fish?'),
        t('¿Qué piensas a las tres de la madrugada?', 'What do you think about at three in the morning?'),
      ],
      starters: [t('Con gente nueva yo…', 'With new people I…'), t('Cuando estoy triste…', 'When I am sad…'), t('De noche oigo…', 'At night I hear…')],
    },
    {
      icon: '🚀', title: t('Valentina, la ingeniera que quiere ir a Marte', 'Valentina, the engineer who wants to go to Mars'),
      questions: [
        t('¿Qué tres cosas llevas a Marte?', 'What three things do you take to Mars?'),
        t('¿Qué planeta o estrella conoces por su nombre?', 'Which planet or star do you know by name?'),
        t('¿Qué robot o máquina usas cada día?', 'What robot or machine do you use every day?'),
        t('¿Hablas con una inteligencia artificial? ¿Para qué?', 'Do you talk to an artificial intelligence? What for?'),
        t('¿Qué objeto pequeño de tu casa quieres llevar al espacio?', 'What small object from your home do you want to take to space?'),
      ],
      starters: [t('Llevo…', 'I take…'), t('Cada día uso…', 'Every day I use…'), t('Mi habitación es…', 'My bedroom is…')],
    },
    {
      icon: '💘', title: t('Tú eliges: la segunda cita', 'You choose: the second date'),
      questions: [
        t('¿A cuál de las cinco personas llamas mañana?', 'Which of the five people do you call tomorrow?'),
        t('¿Qué ropa llevas a una cita bonita?', 'What clothes do you wear to a nice date?'),
        t('¿Qué tres palabras dicen cómo eres tú?', 'What three words say what you are like?'),
        t('¿Café, helado o cena para una primera cita?', 'Coffee, ice cream or dinner for a first date?'),
        t('¿Qué pregunta te encanta recibir en una cita?', 'What question do you love being asked on a date?'),
      ],
      starters: [t('Llamo a… porque…', 'I call… because…'), t('Yo soy…', 'I am…'), t('Para una cita prefiero…', 'For a date I prefer…')],
    },
  ],
};
