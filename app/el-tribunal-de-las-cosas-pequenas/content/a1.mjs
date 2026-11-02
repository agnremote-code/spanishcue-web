// El tribunal de las cosas pequeñas · A1: new cases for the court: neighbours,
// flatmates, bars, chats, family and the street. You judge and you confess.
// Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Hoy el tribunal tiene muchos casos: vecinos ruidosos, compañeros de piso, grupos de chat y familias. Tú escuchas el caso, das tu veredicto y cuentas tu experiencia.', 'Today the court has many cases: noisy neighbours, flatmates, chat groups and families. You listen to the case, give your verdict and tell your experience.'),
  categorias: [
    {
      icon: '🔨', title: t('Caso 1 · El vecino del taladro', 'Case 1 · The neighbour with the drill'),
      questions: [
        t('¿A qué hora es un crimen usar un taladro un domingo?', 'At what time is it a crime to use a drill on a Sunday?'),
        t('¿Qué ruido de tu edificio te despierta?', 'What noise in your building wakes you up?'),
        t('¿Qué pena das a un perro que ladra toda la tarde?', 'What sentence do you give a dog that barks all afternoon?'),
        t('¿Qué mensaje escribes en el ascensor para los vecinos?', 'What message do you write in the lift for the neighbours?'),
        t('¿Qué costumbre tuya escucha el vecino de abajo?', 'What habit of yours does the downstairs neighbour hear?'),
      ],
      starters: [t('Es un crimen antes de las…', 'It is a crime before…'), t('Me despierta…', '… wakes me up'), t('Escribo: «…»', 'I write: “…”')],
    },
    {
      icon: '🛋️', title: t('Caso 2 · La compañera de piso y el yogur', 'Case 2 · The flatmate and the yoghurt'),
      questions: [
        t('¿Qué comida de la nevera es solo tuya?', 'What food in the fridge is only yours?'),
        t('¿Qué castigo das a quien come tu yogur?', 'What punishment do you give to whoever eats your yoghurt?'),
        t('¿Cuántas horas puede estar alguien en el baño por la mañana?', 'How many hours can someone be in the bathroom in the morning?'),
        t('¿Qué ruido nocturno de un compañero no perdonas?', 'What night noise from a flatmate do you not forgive?'),
        t('¿Qué haces si tu compañero trae amigos todos los días?', 'What do you do if your flatmate brings friends every day?'),
      ],
      starters: [t('Es solo mío…', '… is only mine'), t('Mi castigo es…', 'My punishment is…'), t('No perdono…', 'I do not forgive…')],
    },
    {
      icon: '🍻', title: t('Caso 3 · El amigo que nunca paga', 'Case 3 · The friend who never pays'),
      questions: [
        t('¿Quién de tu grupo olvida siempre la cartera?', 'Who in your group always forgets their wallet?'),
        t('¿Pagas tu parte exacta o pagan todos igual?', 'Do you pay your exact share or does everyone pay the same?'),
        t('¿Qué haces si alguien pide el plato más caro y quiere dividir?', 'What do you do if someone orders the most expensive dish and wants to split?'),
        t('¿Qué bebida pides cuando invita otro?', 'What drink do you order when someone else is paying?'),
        t('¿Qué pena das al amigo que nunca paga?', 'What sentence do you give the friend who never pays?'),
      ],
      starters: [t('Siempre olvida la cartera…', '… always forgets the wallet'), t('Pagamos…', 'We pay…'), t('Mi pena es…', 'My sentence is…')],
    },
    {
      icon: '💬', title: t('Caso 4 · El grupo de chat de la familia', 'Case 4 · The family chat group'),
      questions: [
        t('¿Quién manda cadenas falsas en el grupo de tu familia?', 'Who sends fake chain messages in your family group?'),
        t('¿Cuántos mensajes de «buenos días» recibes cada mañana?', 'How many “good morning” messages do you get every morning?'),
        t('¿Silencias algún grupo de chat? ¿Cuál?', 'Do you mute any chat group? Which one?'),
        t('¿Qué foto de ti pone tu familia en el grupo sin preguntar?', 'What photo of you does your family post in the group without asking?'),
        t('¿Qué regla pones en un grupo de chat?', 'What rule do you set in a chat group?'),
      ],
      starters: [t('Las manda…', '… sends them'), t('Recibo…', 'I get…'), t('La regla es…', 'The rule is…')],
    },
    {
      icon: '🏙️', title: t('Caso 5 · Los crímenes de la calle', 'Case 5 · Street crimes'),
      questions: [
        t('¿Qué haces si alguien se cuela en la fila?', 'What do you do if someone jumps the queue?'),
        t('¿Caminar despacio en una calle llena: culpable o inocente?', 'Walking slowly on a crowded street: guilty or innocent?'),
        t('¿Qué haces con la basura cuando no hay papelera?', 'What do you do with rubbish when there is no bin?'),
        t('¿Qué ciclista o conductor es culpable en tu ciudad?', 'What cyclist or driver is guilty in your city?'),
        t('¿Qué pequeño crimen de la calle ves todos los días?', 'What small street crime do you see every day?'),
      ],
      starters: [t('Le digo: «…»', 'I tell him or her: “…”'), t('Guardo la basura en…', 'I keep the rubbish in…'), t('Todos los días veo…', 'Every day I see…')],
    },
    {
      icon: '👨‍⚖️', title: t('Caso 6 · Tú en el banquillo', 'Case 6 · You in the dock'),
      questions: [
        t('¿Qué pequeño crimen confiesas hoy ante el tribunal?', 'What small crime do you confess today before the court?'),
        t('¿Qué manía tuya no cambias nunca?', 'What habit of yours do you never change?'),
        t('¿Quién es tu abogado defensor en la familia?', 'Who is your defence lawyer in the family?'),
        t('¿Qué testigo de tu vida dice siempre la verdad sobre ti?', 'Which witness in your life always tells the truth about you?'),
        t('¿Qué pena justa te pones a ti?', 'What fair sentence do you give yourself?'),
      ],
      starters: [t('Confieso que…', 'I confess that…'), t('Mi abogado es…', 'My lawyer is…'), t('Mi pena es…', 'My sentence is…')],
    },
  ],
};
