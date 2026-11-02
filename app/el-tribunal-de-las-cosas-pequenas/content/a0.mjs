// El tribunal de las cosas pequeñas · A0: a funny court for small crimes of
// daily life. You are the judge: guilty or innocent? Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Bienvenido al tribunal de las cosas pequeñas. Aquí no hay grandes crímenes: hay calcetines en el suelo y música alta. Tú eres el juez: ¿culpable o inocente?', 'Welcome to the court of small things. There are no big crimes here: there are socks on the floor and loud music. You are the judge: guilty or innocent?'),
  categorias: [
    {
      icon: '🧦', title: t('Crímenes en casa', 'Crimes at home'),
      questions: [
        t('¿Quién deja los calcetines en el suelo en tu casa?', 'Who leaves socks on the floor in your home?'),
        t('¿Culpable o inocente: el último trozo de pizza sin preguntar?', 'Guilty or innocent: the last slice of pizza without asking?'),
        t('¿Qué cosa sucia no lavas hasta mañana?', 'What dirty thing do you not wash until tomorrow?'),
        t('¿Quién controla el mando de la tele en tu casa?', 'Who controls the TV remote in your home?'),
        t('¿Qué haces si no hay papel higiénico en el baño?', 'What do you do if there is no toilet paper in the bathroom?'),
      ],
      starters: [t('En mi casa, el culpable es…', 'In my home, the guilty one is…'), t('¡Culpable! Porque…', 'Guilty! Because…'), t('¡Inocente! Porque…', 'Innocent! Because…')],
    },
    {
      icon: '🍽️', title: t('Crímenes en la mesa', 'Crimes at the table'),
      questions: [
        t('¿Masticar chicle muy fuerte: culpable o inocente?', 'Chewing gum very loudly: guilty or innocent?'),
        t('¿Culpable o inocente: ketchup en la tortilla o en la pasta?', 'Guilty or innocent: ketchup on the omelette or on pasta?'),
        t('¿Quién come muy rápido en tu familia?', 'Who eats very fast in your family?'),
        t('¿Piña en la pizza: culpable o inocente?', 'Pineapple on pizza: guilty or innocent?'),
        t('¿Qué sonido con la cuchara o el plato te molesta?', 'What sound with the spoon or the plate annoys you?'),
      ],
      starters: [t('¡Culpable! Porque…', 'Guilty! Because…'), t('Come muy rápido…', '… eats very fast'), t('No soporto…', 'I cannot stand…')],
    },
    {
      icon: '🚇', title: t('Crímenes en el transporte', 'Crimes on public transport'),
      questions: [
        t('¿Qué haces si alguien escucha música sin auriculares en el autobús?', 'What do you do if someone plays music without headphones on the bus?'),
        t('¿Culpable o inocente: los pies en el asiento del tren?', 'Guilty or innocent: feet on the train seat?'),
        t('¿Qué castigo das a quien ocupa dos asientos?', 'What punishment do you give to whoever takes up two seats?'),
        t('¿Qué persona del metro es culpable de todo?', 'What person on the metro is guilty of everything?'),
        t('¿Comer en el metro: culpable o inocente?', 'Eating on the metro: guilty or innocent?'),
      ],
      starters: [t('Si alguien pone música,…', 'If someone plays music,…'), t('Mi castigo es…', 'My punishment is…'), t('Es culpable la persona que…', 'The person who… is guilty')],
    },
    {
      icon: '👯', title: t('Crímenes entre amigos', 'Crimes between friends'),
      questions: [
        t('¿Llegar veinte minutos tarde sin avisar: culpable o inocente?', 'Arriving twenty minutes late without warning: guilty or innocent?'),
        t('¿Culpable o inocente: leer un mensaje y no contestar?', 'Guilty or innocent: reading a message and not replying?'),
        t('¿Qué haces si un amigo no devuelve tu libro?', 'What do you do if a friend does not return your book?'),
        t('¿Quién cuenta tus secretos en el grupo?', 'Who tells your secrets in the group?'),
        t('¿Mandar audios de cinco minutos: culpable o inocente?', 'Sending five-minute voice notes: guilty or innocent?'),
      ],
      starters: [t('¡Inocente! Porque…', 'Innocent! Because…'), t('Le pido mi libro…', 'I ask for my book…'), t('Es culpable porque…', 'He or she is guilty because…')],
    },
    {
      icon: '🏢', title: t('Crímenes en el trabajo o en clase', 'Crimes at work or in class'),
      questions: [
        t('¿Quién roba la comida de la nevera de la oficina?', 'Who steals the food from the office fridge?'),
        t('¿Culpable o inocente: hablar por teléfono en voz alta en la oficina?', 'Guilty or innocent: talking loudly on the phone in the office?'),
        t('¿Qué compañero no lava su taza?', 'Which colleague does not wash their mug?'),
        t('¿Llegar cinco minutos tarde a clase: culpable o inocente?', 'Arriving five minutes late to class: guilty or innocent?'),
        t('¿Qué castigo pones a quien no limpia la cocina?', 'What punishment do you give to whoever does not clean the kitchen?'),
      ],
      starters: [t('El culpable es…', 'The guilty one is…'), t('Mi castigo es…', 'My punishment is…'), t('¡Inocente! Porque…', 'Innocent! Because…')],
    },
    {
      icon: '⚖️', title: t('Tu veredicto', 'Your verdict'),
      questions: [
        t('¿Qué pequeño crimen haces tú cada semana?', 'What small crime do you commit every week?'),
        t('¿Qué manía tuya molesta a tu familia?', 'What habit of yours annoys your family?'),
        t('¿Qué pequeño crimen perdonas siempre?', 'What small crime do you always forgive?'),
        t('¿Qué castigo divertido das a tu mejor amigo?', 'What funny punishment do you give your best friend?'),
        t('¿Qué ley nueva quieres para tu casa?', 'What new law do you want for your home?'),
      ],
      starters: [t('Confieso que…', 'I confess that…'), t('Mi manía es…', 'My habit is…'), t('Mi ley nueva es…', 'My new law is…')],
    },
  ],
};
