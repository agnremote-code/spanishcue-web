// El restaurante imposible · A1: a restaurant open twenty-four hours, where
// every table is a moment of your day. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Este restaurante imposible abre las veinticuatro horas. Cada mesa es un momento de tu día. Te sientas, eliges una pregunta y hablas de tu vida.', 'This impossible restaurant is open twenty-four hours. Each table is a moment of your day. You sit down, choose a question and talk about your life.'),
  categorias: [
    {
      icon: '🍽️', title: t('Mesa para uno', 'Table for one'),
      questions: [
        t('¿Qué cena improvisas un viernes sin nadie en casa?', 'What dinner do you improvise on a Friday with nobody at home?'),
        t('¿Vas a un restaurante sin compañía? ¿Qué haces mientras esperas?', 'Do you go to a restaurant alone? What do you do while you wait?'),
        t('¿Qué video o pódcast acompaña tu cena?', 'What video or podcast goes with your dinner?'),
        t('¿Qué mezcla rara de comida es tu secreto?', 'What strange food mix is your secret?'),
        t('¿A qué hora ataca tu hambre de verdad?', 'At what time does your real hunger attack?'),
      ],
      starters: [t('Cuando estoy solo o sola…', 'When I am alone…'), t('Mientras espero…', 'While I wait…'), t('Tengo más hambre…', 'I am hungriest…')],
    },
    {
      icon: '📋', title: t('El menú del día', 'The set menu of the day'),
      questions: [
        t('¿Dónde almuerzas un día normal de trabajo o de clase?', 'Where do you have lunch on a normal work or school day?'),
        t('¿Cuánto cuesta un almuerzo barato en tu ciudad?', 'How much does a cheap lunch cost in your city?'),
        t('¿Llevas comida en un táper? ¿Qué llevas hoy?', 'Do you take food in a lunchbox? What do you take today?'),
        t('¿Qué almuerzo de emergencia compras en la estación o la gasolinera?', 'What emergency lunch do you buy at the station or the petrol station?'),
        t('¿Con quién almuerzas casi todos los días?', 'Who do you have lunch with almost every day?'),
      ],
      starters: [t('Normalmente almuerzo en…', 'I normally have lunch at…'), t('Cuesta más o menos…', 'It costs about…'), t('Hoy llevo…', 'Today I am taking…')],
    },
    {
      icon: '🌮', title: t('La comida de la calle', 'Street food'),
      questions: [
        t('¿Qué comida de la calle de tu ciudad recomiendas?', 'What street food in your city do you recommend?'),
        t('¿Qué puesto de comida conoces desde hace muchos años?', 'Which food stall have you known for many years?'),
        t('¿Qué pides en un puesto de comida de madrugada?', 'What do you order at a late-night food stall?'),
        t('¿Qué mercado de tu ciudad tiene la mejor comida?', 'Which market in your city has the best food?'),
        t('¿Qué comida de la calle de otro país recuerdas de un viaje?', 'What street food from another country do you remember from a trip?'),
      ],
      starters: [t('En mi ciudad hay un puesto de…', 'In my city there is a stall with…'), t('Después de una fiesta como…', 'After a party I eat…'), t('En un viaje probé…', 'On a trip I tried…')],
    },
    {
      icon: '🛵', title: t('El delivery de medianoche', 'The midnight delivery'),
      questions: [
        t('¿Qué pides a domicilio cuando no quieres cocinar?', 'What do you order for delivery when you do not want to cook?'),
        t('¿Qué repartidor en bicicleta ves siempre por tu calle?', 'Which delivery rider on a bike do you always see on your street?'),
        t('¿Qué comida llega siempre fría o rota a tu casa?', 'What food always arrives cold or broken at your home?'),
        t('¿Cocinas más o menos que tus padres?', 'Do you cook more or less than your parents?'),
        t('¿Qué comida rápida es tu debilidad secreta?', 'What fast food is your secret weakness?'),
      ],
      starters: [t('Cuando no quiero cocinar, pido…', 'When I do not want to cook, I order…'), t('Más o menos… veces', 'About… times'), t('Mi debilidad es…', 'My weakness is…')],
    },
    {
      icon: '🥂', title: t('La mesa de la fiesta', 'The party table'),
      questions: [
        t('¿Qué comida no puede faltar en una fiesta de tu familia?', 'What food cannot be missing at a family party?'),
        t('¿Qué llevas cuando una amiga te invita a cenar?', 'What do you take when a friend invites you to dinner?'),
        t('¿Qué bebida de tu país explicas a los turistas?', 'What drink from your country do you explain to tourists?'),
        t('¿Qué cocinas tú para muchas personas?', 'What do you cook for a lot of people?'),
        t('¿A qué hora se cena en tu país en una fiesta?', 'What time do people have dinner at a party in your country?'),
      ],
      starters: [t('En las fiestas de mi familia siempre hay…', 'At my family parties there is always…'), t('Llevo…', 'I take…'), t('En mi país se cena a las…', 'In my country people have dinner at…')],
    },
    {
      icon: '💶', title: t('La cuenta, por favor', 'The bill, please'),
      questions: [
        t('¿Qué camarero o camarera de tu barrio te conoce por tu nombre?', 'Which waiter or waitress in your neighbourhood knows you by name?'),
        t('¿Pagas todo tú o dividen la cuenta entre todos?', 'Do you pay for everything or do you split the bill?'),
        t('¿Qué comida está muy cara este año en el supermercado?', 'What food is very expensive this year at the supermarket?'),
        t('¿Qué restaurante caro quieres probar un día especial?', 'What expensive restaurant do you want to try on a special day?'),
        t('¿Qué plato pides cuando invita otra persona?', 'What dish do you order when someone else pays?'),
      ],
      starters: [t('Normalmente dejo…', 'I normally leave…'), t('Este año está muy caro…', 'This year … is very expensive'), t('Cuando invita otra persona…', 'When someone else pays…')],
    },
  ],
};
