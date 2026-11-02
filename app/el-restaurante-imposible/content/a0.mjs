// El restaurante imposible · A0: a restaurant where the menu is about you.
// Six dishes, five questions each, about your food and your table. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Bienvenido al restaurante imposible. Aquí no hay menú normal: cada plato es una pregunta sobre ti. Tú eliges el plato y respondes.', 'Welcome to the impossible restaurant. There is no normal menu here: each dish is a question about you. You choose the dish and answer.'),
  categorias: [
    {
      icon: '🥖', title: t('El pan de la mesa', 'The bread on the table'),
      questions: [
        t('¿Con qué mano comes el pan, la izquierda o la derecha?', 'Which hand do you eat bread with, the left or the right?'),
        t('¿Qué pones en tu tostada favorita?', 'What do you put on your favourite toast?'),
        t('¿Arepa, baguette o tortilla de maíz para tu desayuno?', 'Arepa, baguette or corn tortilla for your breakfast?'),
        t('¿Qué comida que mancha pides en una primera cita?', 'What messy food would you eat on a first date?'),
        t('¿Qué galleta o snack tienes ahora en tu mochila?', 'What biscuit or snack do you have in your bag now?'),
      ],
      starters: [t('Yo como con…', 'I eat with…'), t('En mi tostada pongo…', 'On my toast I put…'), t('En mi mochila hay…', 'In my bag there is…')],
    },
    {
      icon: '🍲', title: t('La sopa de los recuerdos', 'The soup of memories'),
      questions: [
        t('¿Qué sopa te prepara alguien cuando estás enfermo o enferma?', 'What soup does someone make you when you are ill?'),
        t('¿Qué plato de tu familia es el mejor del mundo?', 'Which dish in your family is the best in the world?'),
        t('¿Qué fruta tropical pruebas por primera vez este año?', 'What tropical fruit do you try for the first time this year?'),
        t('¿Qué caramelo o chocolate compras con monedas de niño o niña?', 'What sweet or chocolate do you buy with coins as a child?'),
        t('¿Qué plato comes en tu cumpleaños?', 'What dish do you eat on your birthday?'),
      ],
      starters: [t('Mi mamá o mi papá cocina…', 'My mum or my dad cooks…'), t('En verano como…', 'In summer I eat…'), t('En mi cumpleaños…', 'On my birthday…')],
    },
    {
      icon: '🌶️', title: t('El plato picante', 'The spicy dish'),
      questions: [
        t('¿Cuánto picante aguantas, del uno al diez?', 'How much spice can you handle, from one to ten?'),
        t('¿Qué salsa pones en casi todo?', 'What sauce do you put on almost everything?'),
        t('¿Qué verdura no comes ni con un millón de dólares?', 'What vegetable would you not eat even for a million dollars?'),
        t('¿Limón, café amargo o miel: qué sabor eres tú?', 'Lemon, bitter coffee or honey: what flavour are you?'),
        t('¿Qué comida rara de otro país quieres probar?', 'What strange food from another country do you want to try?'),
      ],
      starters: [t('Aguanto un…', 'I can handle a…'), t('Pongo… en todo', 'I put… on everything'), t('No como… nunca', 'I never eat…')],
    },
    {
      icon: '🧑‍🍳', title: t('La cocina de tu casa', 'Your home kitchen'),
      questions: [
        t('¿Quién deja la sartén sucia en tu casa?', 'Who leaves the dirty frying pan in your home?'),
        t('¿Qué cocinas tú en quince minutos?', 'What do you cook in fifteen minutes?'),
        t('¿Qué hay ahora en tu nevera?', 'What is in your fridge now?'),
        t('¿Cenas con la televisión encendida o apagada?', 'Do you have dinner with the TV on or off?'),
        t('¿Qué cosa de tu cocina está siempre rota?', 'What thing in your kitchen is always broken?'),
      ],
      starters: [t('En mi casa lava…', 'In my home … washes'), t('En mi nevera hay…', 'In my fridge there is…'), t('Normalmente como en…', 'I normally eat at…')],
    },
    {
      icon: '🍦', title: t('El postre gigante', 'The giant dessert'),
      questions: [
        t('¿Helado de qué sabor pides siempre?', 'What ice cream flavour do you always order?'),
        t('¿Postre antes o después de la comida?', 'Dessert before or after the meal?'),
        t('¿Qué persona come tu postre sin preguntar?', 'Who eats your dessert without asking?'),
        t('¿Qué pastel quieres para tu próxima fiesta?', 'What cake do you want for your next party?'),
        t('¿Qué dulce de tu país regalas a un amigo extranjero?', 'What sweet from your country do you give a foreign friend?'),
      ],
      starters: [t('Siempre pido…', 'I always order…'), t('Comparto con…', 'I share with…'), t('Regalo…', 'I give…')],
    },
    {
      icon: '☕', title: t('El café de la sobremesa', 'The after-dinner coffee'),
      questions: [
        t('¿Café, té, mate o chocolate caliente por la tarde?', 'Coffee, tea, mate or hot chocolate in the afternoon?'),
        t('¿Qué taza de tu casa es solo tuya?', 'Which mug in your home is only yours?'),
        t('¿Con quién hablas mucho después de comer?', 'Who do you talk with a lot after eating?'),
        t('¿Qué restaurante de tu ciudad es perfecto para una celebración?', 'Which restaurant in your city is perfect for a celebration?'),
        t('¿Quién paga la cuenta en tu grupo de amigos?', 'Who pays the bill in your group of friends?'),
      ],
      starters: [t('Por la tarde tomo…', 'In the afternoon I have…'), t('Después de comer hablo con…', 'After eating I talk with…'), t('En mi grupo paga…', 'In my group … pays')],
    },
  ],
};
