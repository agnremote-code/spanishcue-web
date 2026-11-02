// Tradiciones que nadie entiende · A1: the customs of the calendar and of
// daily life, in your country and in your family. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Un año entero de tradiciones: fiestas de invierno, de primavera, de verano. También las costumbres pequeñas de cada día. Tú explicas las tuyas a una persona de otro país.', 'A whole year of traditions: winter, spring and summer festivals. Also the small customs of every day. You explain yours to a person from another country.'),
  categorias: [
    {
      icon: '❄️', title: t('Las fiestas de invierno', 'Winter festivities'),
      questions: [
        t('¿Qué decoración pones en tu casa en diciembre?', 'What decoration do you put up at home in December?'),
        t('¿Papá Noel o Reyes Magos: quién trae tus regalos?', 'Father Christmas or the Three Kings: who brings your presents?'),
        t('¿Qué dulce de invierno comes solo una vez al año?', 'What winter sweet do you eat only once a year?'),
        t('¿Qué plan haces con nieve o con mucho frío?', 'What plan do you make with snow or a lot of cold?'),
        t('¿Qué regalo de diciembre recuerdas de tu infancia?', 'What December present do you remember from your childhood?'),
      ],
      starters: [t('En diciembre pongo…', 'In December I put up…'), t('En mi país los regalos los trae…', 'In my country the presents are brought by…'), t('Solo una vez al año como…', 'Only once a year I eat…')],
    },
    {
      icon: '🌸', title: t('La primavera y la Semana Santa', 'Spring and Easter'),
      questions: [
        t('¿Qué haces en Semana Santa: viajar, descansar o ir a la iglesia?', 'What do you do at Easter: travel, rest or go to church?'),
        t('¿Qué comida especial hay en primavera en tu país?', 'What special food is there in spring in your country?'),
        t('¿Escondes huevos de chocolate para los niños?', 'Do you hide chocolate eggs for the children?'),
        t('¿Qué flores compras o regalas en primavera?', 'What flowers do you buy or give in spring?'),
        t('¿Qué día de fiesta de primavera te gusta más?', 'Which spring holiday do you like most?'),
      ],
      starters: [t('En Semana Santa yo…', 'At Easter I…'), t('En primavera comemos…', 'In spring we eat…'), t('Regalo…', 'I give…')],
    },
    {
      icon: '☀️', title: t('El verano y las fiestas del pueblo', 'Summer and village festivals'),
      questions: [
        t('¿Qué pueblo o barrio tiene la mejor fiesta de verano?', 'Which village or neighbourhood has the best summer festival?'),
        t('¿Hasta qué hora bailas en una fiesta de verano?', 'Until what time do you dance at a summer party?'),
        t('¿Qué hacen en tu país la noche más corta del año?', 'What do people do in your country on the shortest night of the year?'),
        t('¿Qué juego de verano juegas en la calle o en la playa?', 'What summer game do you play in the street or on the beach?'),
        t('¿Qué fuegos artificiales de tu vida recuerdas?', 'What fireworks from your life do you remember?'),
      ],
      starters: [t('La mejor fiesta es en…', 'The best festival is in…'), t('Bailo hasta las…', 'I dance until…'), t('Esa noche la gente…', 'That night people…')],
    },
    {
      icon: '🕯️', title: t('Recordar a los que no están', 'Remembering those who are gone'),
      questions: [
        t('¿Cómo recuerda tu familia a los abuelos que ya no están?', 'How does your family remember the grandparents who are gone?'),
        t('¿Qué haces tú el primero o el dos de noviembre?', 'What do you do on the first or second of November?'),
        t('¿Qué foto en blanco y negro de tu familia te encanta?', 'What black-and-white family photo do you love?'),
        t('¿Qué flor o comida llevas para recordar a alguien?', 'What flower or food do you take to remember someone?'),
        t('¿Qué reloj, anillo o libro heredado tienes en un cajón?', 'What inherited watch, ring or book do you have in a drawer?'),
      ],
      starters: [t('Mi familia los recuerda con…', 'My family remembers them with…'), t('En mi país ese día…', 'In my country on that day…'), t('Guardo…', 'I keep…')],
    },
    {
      icon: '👋', title: t('Saludos y gestos', 'Greetings and gestures'),
      questions: [
        t('¿Beso, abrazo o mano: cómo saludas a un compañero nuevo?', 'Kiss, hug or handshake: how do you greet a new colleague?'),
        t('¿Qué gesto de la mano es de mala educación en tu país?', 'What hand gesture is rude in your country?'),
        t('¿A qué distancia hablas con una persona que no conoces?', 'At what distance do you talk to a person you do not know?'),
        t('¿Qué dices en tu idioma cuando alguien estornuda?', 'What do you say in your language when someone sneezes?'),
        t('¿Cómo te despides por teléfono de tu mamá o tu papá?', 'How do you say goodbye on the phone to your mum or dad?'),
      ],
      starters: [t('En mi país damos…', 'In my country we give…'), t('Es de mala educación…', 'It is rude to…'), t('Cuando alguien estornuda, decimos…', 'When someone sneezes, we say…')],
    },
    {
      icon: '🧳', title: t('Tus tradiciones nuevas', 'Your new traditions'),
      questions: [
        t('¿Qué tradición nueva empiezas tú con tus amigos o tu pareja?', 'What new tradition do you start with your friends or partner?'),
        t('¿Qué fiesta de otro país celebras en tu casa?', 'Which festival from another country do you celebrate at home?'),
        t('¿Qué tradición de tu país no te gusta nada?', 'What tradition in your country do you not like at all?'),
        t('¿Qué costumbre de tu familia quieres para tus hijos o tus sobrinos?', 'What family custom do you want for your children or nephews and nieces?'),
        t('¿Qué tradición extranjera te parece muy divertida?', 'What foreign tradition seems very fun to you?'),
      ],
      starters: [t('Con mis amigos siempre…', 'With my friends we always…'), t('En casa celebramos…', 'At home we celebrate…'), t('No me gusta nada…', 'I do not like … at all')],
    },
  ],
};
