// El día que todo salió mal · A1: a week of small disasters, one day at a
// time, about your routine, your home and your people. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('No es un día malo: es una semana entera. Cada día tiene un desastre pequeño. Tú cuentas qué haces, a quién llamas y cómo lo arreglas.', 'It is not one bad day: it is a whole week. Each day has a small disaster. You say what you do, who you call and how you fix it.'),
  categorias: [
    {
      icon: '🔑', title: t('Lunes · Las llaves dentro de casa', 'Monday · The keys inside the house'),
      questions: [
        t('¿Qué haces cuando la puerta se cierra con las llaves dentro?', 'What do you do when the door shuts with the keys inside?'),
        t('¿Qué objeto pierdes más: gafas, llaves o cartera?', 'What object do you lose most: glasses, keys or wallet?'),
        t('¿Qué vecino o vecina te ayuda en una emergencia?', 'Which neighbour helps you in an emergency?'),
        t('¿Qué cosa buscas todas las mañanas antes de salir?', 'What thing do you look for every morning before going out?'),
        t('¿Qué cosas raras aparecen en tus bolsillos al lavar la ropa?', 'What strange things turn up in your pockets when you wash clothes?'),
      ],
      starters: [t('Tiene una copia…', '… has a copy'), t('Siempre dejo las llaves…', 'I always leave my keys…'), t('Todas las mañanas busco…', 'Every morning I look for…')],
    },
    {
      icon: '🩺', title: t('Martes · Dos horas en el médico', 'Tuesday · Two hours at the doctor’s'),
      questions: [
        t('¿Qué revista vieja lees mientras esperas al dentista?', 'What old magazine do you read while you wait for the dentist?'),
        t('¿Qué parte del cuerpo te duele cuando estás estresado o estresada?', 'What part of your body hurts when you are stressed?'),
        t('¿Qué medicina tienes siempre en casa?', 'What medicine do you always have at home?'),
        t('¿Cómo pides cita con el médico en tu país?', 'How do you make a doctor’s appointment in your country?'),
        t('¿A quién acompañas tú al médico?', 'Who do you go to the doctor with?'),
      ],
      starters: [t('En la sala de espera…', 'In the waiting room…'), t('Cuando estoy estresado o estresada, me duele…', 'When I am stressed, my … hurts'), t('En mi país pides cita…', 'In my country you make an appointment…')],
    },
    {
      icon: '🔥', title: t('Miércoles · La cena quemada', 'Wednesday · The burnt dinner'),
      questions: [
        t('¿Qué plato quemas casi siempre?', 'What dish do you burn almost every time?'),
        t('¿Qué cenas cuando la cena original sale mal?', 'What do you have for dinner when the original dinner goes wrong?'),
        t('¿Qué olor a quemado conoce bien tu vecino?', 'What burning smell does your neighbour know well?'),
        t('¿Qué aparato de tu cocina usas cada día?', 'What kitchen appliance do you use every day?'),
        t('¿Qué haces cuando llegan invitados y no hay comida?', 'What do you do when guests arrive and there is no food?'),
      ],
      starters: [t('Casi siempre quemo…', 'I almost always burn…'), t('Cuando sale mal, ceno…', 'When it goes wrong, I have…'), t('Cocina peor que yo…', '… cooks worse than me')],
    },
    {
      icon: '🚇', title: t('Jueves · El metro parado', 'Thursday · The stopped metro'),
      questions: [
        t('¿Qué haces cuando el metro se para entre dos estaciones?', 'What do you do when the metro stops between two stations?'),
        t('¿Caminas, pedaleas o tomas un taxi cuando hay huelga?', 'Do you walk, cycle or take a taxi when there is a strike?'),
        t('¿Qué persona rara ves a veces en el transporte?', 'What strange person do you sometimes see on public transport?'),
        t('¿Cuánto tiempo caminas cada día, más o menos?', 'How long do you walk every day, more or less?'),
        t('¿A quién avisas cuando vas a llegar tarde?', 'Who do you tell when you are going to be late?'),
      ],
      starters: [t('Cuando se para, yo…', 'When it stops, I…'), t('Si hay huelga,…', 'If there is a strike,…'), t('Camino más o menos…', 'I walk about…')],
    },
    {
      icon: '🎈', title: t('Viernes · La fiesta sin invitados', 'Friday · The party with no guests'),
      questions: [
        t('¿Qué haces si nadie llega a tu fiesta?', 'What do you do if nobody comes to your party?'),
        t('¿Qué haces solo o sola en un bar esperando a tu grupo?', 'What do you do alone in a bar waiting for your group?'),
        t('¿Qué mensaje mandas para cancelar un plan sin quedar mal?', 'What message do you send to cancel a plan without looking bad?'),
        t('¿Prefieres una fiesta grande o una cena con tres amigos?', 'Do you prefer a big party or a dinner with three friends?'),
        t('¿Qué haces un viernes por la noche cuando el plan se cancela?', 'What do you do on a Friday night when the plan is cancelled?'),
      ],
      starters: [t('Si nadie llega,…', 'If nobody comes,…'), t('Siempre llega tarde…', '… always arrives late'), t('Cuando se cancela el plan,…', 'When the plan is cancelled,…')],
    },
    {
      icon: '🌈', title: t('Sábado · El día de arreglarlo todo', 'Saturday · The day to fix everything'),
      questions: [
        t('¿Qué arreglas tú en casa sin llamar a nadie?', 'What do you fix at home without calling anyone?'),
        t('¿Qué haces un sábado para recuperar energía?', 'What do you do on a Saturday to get your energy back?'),
        t('¿Qué persona de tu vida te hace reír en los días malos?', 'Who in your life makes you laugh on bad days?'),
        t('¿Qué frase dices cuando todo sale mal?', 'What phrase do you say when everything goes wrong?'),
        t('¿Qué cosa buena pasa esta semana, aunque sea pequeña?', 'What good thing happens this week, even if it is small?'),
      ],
      starters: [t('Yo arreglo…', 'I fix…'), t('Para recuperar energía,…', 'To get my energy back,…'), t('Siempre digo…', 'I always say…')],
    },
  ],
};
