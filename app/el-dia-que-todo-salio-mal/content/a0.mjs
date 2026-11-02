// El día que todo salió mal · A0: a terrible day, hour by hour. The questions
// are about your small disasters and how you feel better. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Hoy es un día horrible. El despertador no suena, llueve, el teléfono no tiene batería. Hora por hora, tú cuentas tus pequeños desastres.', 'Today is a horrible day. The alarm does not ring, it rains, the phone has no battery. Hour by hour, you talk about your small disasters.'),
  categorias: [
    {
      icon: '⏰', title: t('7:00 · El despertador no suena', '7:00 · The alarm does not ring'),
      questions: [
        t('¿Cuántas alarmas pones para despertarte?', 'How many alarms do you set to wake up?'),
        t('¿Qué desayuno comes caminando cuando no hay tiempo?', 'What breakfast do you eat while walking when there is no time?'),
        t('¿Qué ruido de la mañana odias más?', 'What morning noise do you hate most?'),
        t('¿Qué ropa te pones cuando tienes mucha prisa?', 'What clothes do you put on when you are in a big hurry?'),
        t('¿Con qué humor te despiertas un lunes?', 'In what mood do you wake up on a Monday?'),
      ],
      starters: [t('Pongo… alarmas', 'I set… alarms'), t('Cuando llego tarde…', 'When I am late…'), t('Los lunes estoy…', 'On Mondays I am…')],
    },
    {
      icon: '🌧️', title: t('8:30 · Llueve y no hay paraguas', '8:30 · It rains and there is no umbrella'),
      questions: [
        t('¿Cuántos paraguas pierdes en un año?', 'How many umbrellas do you lose in a year?'),
        t('¿Qué haces cuando el autobús no llega?', 'What do you do when the bus does not come?'),
        t('¿Qué zapatos odias con lluvia?', 'What shoes do you hate in the rain?'),
        t('¿Qué haces si un coche te moja entero en la calle?', 'What do you do if a car splashes you completely in the street?'),
        t('¿Qué tiempo te pone de mal humor: frío, calor o viento?', 'What weather puts you in a bad mood: cold, heat or wind?'),
      ],
      starters: [t('Pierdo más o menos…', 'I lose about…'), t('Cuando no llega,…', 'When it does not come,…'), t('Me pone de mal humor…', '… puts me in a bad mood')],
    },
    {
      icon: '💼', title: t('10:00 · El jefe o la profesora está enfadado', '10:00 · The boss or the teacher is angry'),
      questions: [
        t('¿Qué dices cuando olvidas una tarea importante?', 'What do you say when you forget an important task?'),
        t('¿Qué excusa usas mucho? ¿Es verdad?', 'What excuse do you use a lot? Is it true?'),
        t('¿Quién te ayuda en el trabajo o en clase?', 'Who helps you at work or in class?'),
        t('¿Qué parte de tu cuerpo tiembla con los nervios?', 'What part of your body shakes when you are nervous?'),
        t('¿A quién mandas un mensaje cuando tienes un problema?', 'Who do you send a message to when you have a problem?'),
      ],
      starters: [t('Normalmente digo…', 'I normally say…'), t('Mi excusa favorita es…', 'My favourite excuse is…'), t('Me ayuda…', '… helps me')],
    },
    {
      icon: '🍝', title: t('13:00 · La comida en la camisa', '13:00 · Food on the shirt'),
      questions: [
        t('¿Qué comida mancha siempre tu ropa?', 'What food always stains your clothes?'),
        t('¿Qué haces si el camarero trae el plato equivocado?', 'What do you do if the waiter brings the wrong dish?'),
        t('¿Qué color de ropa llevas para no ver las manchas?', 'What colour of clothes do you wear so stains do not show?'),
        t('¿Qué comes cuando estás de mal humor?', 'What do you eat when you are in a bad mood?'),
        t('¿Qué cosa rompes mucho en casa: vasos, platos o tazas?', 'What do you break a lot at home: glasses, plates or mugs?'),
      ],
      starters: [t('Siempre me mancho con…', 'I always stain myself with…'), t('Le digo al camarero…', 'I tell the waiter…'), t('Cuando estoy de mal humor, como…', 'When I am in a bad mood, I eat…')],
    },
    {
      icon: '🔋', title: t('17:00 · El teléfono sin batería', '17:00 · The phone with no battery'),
      questions: [
        t('¿Qué porcentaje de batería te da miedo?', 'What battery percentage scares you?'),
        t('¿Qué haces sin teléfono en la calle?', 'What do you do without a phone on the street?'),
        t('¿A quién pides ayuda en la calle sin teléfono?', 'Who do you ask for help on the street without a phone?'),
        t('¿Qué cable o cargador pides prestado siempre?', 'What cable or charger do you always borrow?'),
        t('¿Qué clave de internet cambias cada mes porque la olvidas?', 'What internet password do you change every month because you forget it?'),
      ],
      starters: [t('Mi teléfono tiene…', 'My phone has…'), t('Sé de memoria…', 'I know by heart…'), t('Siempre olvido…', 'I always forget…')],
    },
    {
      icon: '🛁', title: t('22:00 · Por fin en casa', '22:00 · Home at last'),
      questions: [
        t('¿Qué haces para olvidar un día horrible?', 'What do you do to forget a horrible day?'),
        t('¿A quién llamas para contar tu mal día?', 'Who do you call to tell about your bad day?'),
        t('¿Qué canción bailas sola o solo en la cocina?', 'What song do you dance to alone in the kitchen?'),
        t('¿Qué cosa pequeña salva un día terrible?', 'What small thing saves a terrible day?'),
        t('¿Qué dices a un amigo que tiene un día terrible?', 'What do you say to a friend who is having a terrible day?'),
      ],
      starters: [t('Para olvidarlo…', 'To forget it…'), t('Llamo a…', 'I call…'), t('Lo bueno es que…', 'The good thing is that…')],
    },
  ],
};
