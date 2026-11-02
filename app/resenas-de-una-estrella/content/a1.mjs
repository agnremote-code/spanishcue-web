// Reseñas de una estrella · A1: the services of daily life, from the
// hairdresser to customer service. You say what you like, what you hate and
// how you complain. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Hoy escribes reseñas de los servicios de tu vida: la peluquería, el gimnasio, el supermercado, el servicio al cliente. ¿Cinco estrellas o una? Tú explicas y te quejas.', 'Today you write reviews of the services in your life: the hairdresser, the gym, the supermarket, customer service. Five stars or one? You explain and you complain.'),
  categorias: [
    {
      icon: '💇', title: t('La peluquería', 'The hairdresser'),
      questions: [
        t('¿Qué peluquero o barbero de tu barrio merece cinco estrellas?', 'Which hairdresser or barber in your neighbourhood deserves five stars?'),
        t('¿Qué corte de pelo fue un desastre total?', 'What haircut was a total disaster?'),
        t('¿De qué temas habla tu peluquero mientras corta?', 'What topics does your hairdresser talk about while cutting?'),
        t('¿Gorro, coleta o paciencia después de un corte horrible?', 'Hat, ponytail or patience after a horrible haircut?'),
        t('¿Cuánto cuesta un corte de pelo en tu ciudad?', 'How much does a haircut cost in your city?'),
      ],
      starters: [t('Cinco estrellas para…', 'Five stars for…'), t('Fue un desastre porque…', 'It was a disaster because…'), t('Prefiero…', 'I prefer…')],
    },
    {
      icon: '🏋️', title: t('El gimnasio', 'The gym'),
      questions: [
        t('¿Qué persona del gimnasio merece una estrella?', 'What person at the gym deserves one star?'),
        t('¿Cuánto dinero pierdes en una cuota de deporte sin usar?', 'How much money do you lose on an unused sports membership?'),
        t('¿Qué máquina del gimnasio no entiendes?', 'What gym machine do you not understand?'),
        t('¿Qué clase de deporte en grupo recomiendas?', 'What group exercise class do you recommend?'),
        t('¿Qué música quieres en tu gimnasio ideal?', 'What music do you want in your ideal gym?'),
      ],
      starters: [t('Una estrella para la persona que…', 'One star for the person who…'), t('Pierdo más o menos…', 'I lose about…'), t('Recomiendo…', 'I recommend…')],
    },
    {
      icon: '🛒', title: t('El supermercado', 'The supermarket'),
      questions: [
        t('¿Qué fila del supermercado eliges siempre?', 'Which supermarket queue do you always choose?'),
        t('¿Qué producto sube mucho de precio este mes?', 'What product goes up a lot in price this month?'),
        t('¿Usas la caja automática o la caja con persona?', 'Do you use the self-checkout or the checkout with a person?'),
        t('¿Qué haces cuando no encuentras un producto?', 'What do you do when you cannot find a product?'),
        t('¿Qué supermercado de tu ciudad tiene cinco estrellas?', 'Which supermarket in your city has five stars?'),
      ],
      starters: [t('Siempre elijo…', 'I always choose…'), t('Este mes está más caro…', 'This month … is more expensive'), t('Uso…', 'I use…')],
    },
    {
      icon: '☎️', title: t('El servicio al cliente', 'Customer service'),
      questions: [
        t('¿Cuántos minutos esperas al teléfono antes de colgar?', 'How many minutes do you wait on the phone before hanging up?'),
        t('¿Qué música de espera telefónica odias?', 'What phone hold music do you hate?'),
        t('¿Hablas con un robot o pides una persona?', 'Do you talk to a robot or ask for a person?'),
        t('¿Qué empresa tiene el peor servicio al cliente en tu país?', 'Which company has the worst customer service in your country?'),
        t('¿Qué dices cuando te enfadas por teléfono?', 'What do you say when you get angry on the phone?'),
      ],
      starters: [t('Espero… minutos', 'I wait… minutes'), t('Pido…', 'I ask for…'), t('Digo: «…»', 'I say: “…”')],
    },
    {
      icon: '🏖️', title: t('El apartamento de vacaciones', 'The holiday flat'),
      questions: [
        t('¿Qué foto del anuncio es mentira muchas veces?', 'What photo in the advert is often a lie?'),
        t('¿Qué necesitas sí o sí en un alojamiento de vacaciones?', 'What do you absolutely need in holiday accommodation?'),
        t('¿Qué problema tienes en un apartamento turístico?', 'What problem do you have in a holiday rental?'),
        t('¿Qué detalle de un anfitrión te alegra al llegar?', 'What detail from a host makes you happy when you arrive?'),
        t('¿Qué reseña lees primero: la buena o la mala?', 'Which review do you read first: the good one or the bad one?'),
      ],
      starters: [t('Muchas veces es mentira…', '… is often a lie'), t('Necesito…', 'I need…'), t('Leo primero…', 'I read first…')],
    },
    {
      icon: '✍️', title: t('Tu reseña', 'Your review'),
      questions: [
        t('¿Qué lugar de tu ciudad merece una reseña de cinco estrellas hoy?', 'What place in your city deserves a five-star review today?'),
        t('¿Qué servicio de tu vida merece una queja?', 'What service in your life deserves a complaint?'),
        t('¿Qué palabras usas en una reseña bonita?', 'What words do you use in a nice review?'),
        t('¿Qué foto pones en una reseña de un restaurante?', 'What photo do you put in a restaurant review?'),
        t('¿Qué título tiene tu reseña de esta semana?', 'What title does your review of this week have?'),
      ],
      starters: [t('Cinco estrellas para…', 'Five stars for…'), t('Mi queja es…', 'My complaint is…'), t('Mi título es…', 'My title is…')],
    },
  ],
};
