// Reseñas de una estrella · A0: you give stars to everything: hotels, buses,
// shops, apps and your own week. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Hoy eres crítico de todo. Das estrellas: de una a cinco. Una estrella es horrible. Cinco estrellas es perfecto. Tú explicas por qué.', 'Today you are a critic of everything. You give stars: from one to five. One star is horrible. Five stars is perfect. You explain why.'),
  categorias: [
    {
      icon: '🏨', title: t('El hotel', 'The hotel'),
      questions: [
        t('¿Cuántas estrellas das a tu cama de hoy?', 'How many stars do you give your bed today?'),
        t('¿Qué es horrible en una habitación de hotel?', 'What is horrible in a hotel room?'),
        t('¿Qué toalla, almohada o ducha es perfecta para ti?', 'What towel, pillow or shower is perfect for you?'),
        t('¿Qué desayuno de hotel quieres cada mañana?', 'What hotel breakfast do you want every morning?'),
        t('¿Qué cosa robas de un hotel: el jabón o nada?', 'What do you take from a hotel: the soap or nothing?'),
      ],
      starters: [t('Doy… estrellas porque…', 'I give… stars because…'), t('Es horrible cuando…', 'It is horrible when…'), t('Quiero…', 'I want…')],
    },
    {
      icon: '🍕', title: t('El restaurante', 'The restaurant'),
      questions: [
        t('¿Qué restaurante de tu barrio tiene cinco estrellas para ti?', 'Which restaurant in your neighbourhood has five stars for you?'),
        t('¿Qué pizza o hamburguesa es de una estrella?', 'What pizza or burger is one star?'),
        t('¿Cuántos minutos esperas tu plato sin enfadarte?', 'How many minutes do you wait for your dish without getting angry?'),
        t('¿Qué camarero o camarera recuerdas por su simpatía?', 'Which waiter do you remember for being friendly?'),
        t('¿Qué haces si la sopa está fría?', 'What do you do if the soup is cold?'),
      ],
      starters: [t('Cinco estrellas para…', 'Five stars for…'), t('Espero… minutos', 'I wait… minutes'), t('Si está fría, yo…', 'If it is cold, I…')],
    },
    {
      icon: '🛍️', title: t('La tienda', 'The shop'),
      questions: [
        t('¿Qué tienda de tu ciudad tiene una estrella?', 'Which shop in your city has one star?'),
        t('¿Zapatos por internet o en una zapatería: qué prefieres?', 'Shoes online or in a shoe shop: which do you prefer?'),
        t('¿Qué paquete llega tarde a tu casa?', 'What parcel arrives late at your home?'),
        t('¿Qué ropa devuelves a la tienda?', 'What clothes do you return to the shop?'),
        t('¿Qué frutería, librería o kiosco de tu barrio merece cinco estrellas?', 'Which greengrocer, bookshop or kiosk in your neighbourhood deserves five stars?'),
      ],
      starters: [t('Una estrella para…', 'One star for…'), t('Por internet compro…', 'Online I buy…'), t('Mi favorita es…', 'My favourite is…')],
    },
    {
      icon: '🚌', title: t('El autobús, el tren y el avión', 'The bus, the train and the plane'),
      questions: [
        t('¿Cuántas estrellas tiene el transporte de tu ciudad?', 'How many stars does your city’s transport have?'),
        t('¿Qué asiento eliges en un avión: ventana o pasillo?', 'What seat do you choose on a plane: window or aisle?'),
        t('¿Qué pasajero ruidoso merece una estrella?', 'What noisy passenger deserves one star?'),
        t('¿Qué comida de avión o de tren comes?', 'What plane or train food do you eat?'),
        t('¿Qué estación o aeropuerto es horrible para ti?', 'Which station or airport is horrible for you?'),
      ],
      starters: [t('El transporte tiene…', 'The transport has…'), t('Elijo…', 'I choose…'), t('Es de una estrella el que…', 'The one who… is one star')],
    },
    {
      icon: '📱', title: t('Las aplicaciones', 'The apps'),
      questions: [
        t('¿Qué aplicación de tu teléfono tiene cinco estrellas?', 'Which app on your phone has five stars?'),
        t('¿Qué aplicación borras hoy?', 'Which app do you delete today?'),
        t('¿Qué notificación odias?', 'What notification do you hate?'),
        t('¿Qué opinión de internet lees antes de comprar?', 'What online opinion do you read before buying?'),
        t('¿Qué juego del teléfono juegas en el metro?', 'What phone game do you play on the metro?'),
      ],
      starters: [t('Cinco estrellas para…', 'Five stars for…'), t('Hoy borro…', 'Today I delete…'), t('Odio…', 'I hate…')],
    },
    {
      icon: '⭐', title: t('Las estrellas de tu vida', 'The stars of your life'),
      questions: [
        t('¿Cuántas estrellas das a tu semana?', 'How many stars do you give your week?'),
        t('¿Qué parte de tu día tiene cinco estrellas?', 'What part of your day has five stars?'),
        t('¿Qué cosa de tu casa tiene una estrella?', 'What thing in your home has one star?'),
        t('¿Qué nota pone un turista a tu ciudad?', 'What score does a tourist give your city?'),
        t('¿Qué persona de tu vida tiene seis estrellas?', 'Who in your life has six stars?'),
      ],
      starters: [t('Mi semana tiene…', 'My week has…'), t('Cinco estrellas para…', 'Five stars for…'), t('Seis estrellas para…', 'Six stars for…')],
    },
  ],
};
