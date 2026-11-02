// El billete ganador · A0: you win the lottery. What do you buy, where do you
// go, who do you call? Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('¡Sorpresa! Tienes el billete ganador de la lotería: un millón. Antes de cobrar, respondes: qué compras, adónde vas, a quién llamas.', 'Surprise! You have the winning lottery ticket: one million. Before you collect it, you answer: what you buy, where you go, who you call.'),
  categorias: [
    {
      icon: '🎟️', title: t('¡Tengo el billete!', 'I have the ticket!'),
      questions: [
        t('¿A quién llamas primero con el billete en la mano?', 'Who do you call first with the ticket in your hand?'),
        t('¿Gritas, lloras o bailas cuando ganas?', 'Do you scream, cry or dance when you win?'),
        t('¿Dónde escondes el billete esta noche?', 'Where do you hide the ticket tonight?'),
        t('¿Quién de tu familia compra lotería cada semana?', 'Who in your family buys the lottery every week?'),
        t('¿Qué número compras en un billete de lotería?', 'What number do you buy on a lottery ticket?'),
      ],
      starters: [t('Llamo primero a…', 'First I call…'), t('Yo…', 'I…'), t('Lo escondo en…', 'I hide it in…')],
    },
    {
      icon: '🛍️', title: t('Compras', 'Shopping'),
      questions: [
        t('¿Qué compras el primer día con un millón?', 'What do you buy on the first day with a million?'),
        t('¿Limusina, deportivo rojo o bicicleta de oro?', 'Limousine, red sports car or golden bicycle?'),
        t('¿Qué ropa cara quieres llevar?', 'What expensive clothes do you want to wear?'),
        t('¿Qué cosa barata compras igual que antes?', 'What cheap thing do you buy just like before?'),
        t('¿Qué tienda abres con tu dinero?', 'What shop do you open with your money?'),
      ],
      starters: [t('El primer día compro…', 'On the first day I buy…'), t('Prefiero…', 'I prefer…'), t('Abro una tienda de…', 'I open a … shop')],
    },
    {
      icon: '🏰', title: t('Tu casa nueva', 'Your new home'),
      questions: [
        t('¿Dónde compras tu casa nueva: playa, campo o ciudad?', 'Where do you buy your new home: beach, countryside or city?'),
        t('¿Cuántos baños tiene tu mansión?', 'How many bathrooms does your mansion have?'),
        t('¿Qué tiene tu casa nueva: piscina, cine o jardín?', 'What does your new home have: pool, cinema or garden?'),
        t('¿Quién vive contigo en la casa nueva?', 'Who lives with you in the new house?'),
        t('¿Qué mueble viejo llevas a la casa nueva?', 'What old piece of furniture do you take to the new house?'),
      ],
      starters: [t('Compro una casa en…', 'I buy a house in…'), t('Tiene… baños', 'It has… bathrooms'), t('Llevo…', 'I take…')],
    },
    {
      icon: '🌴', title: t('Viajes', 'Trips'),
      questions: [
        t('¿Adónde viajas la primera semana?', 'Where do you travel in the first week?'),
        t('¿Primera clase en el avión o un barco privado?', 'First class on the plane or a private boat?'),
        t('¿Con quién viajas a la isla de tus sueños?', 'Who do you travel with to the island of your dreams?'),
        t('¿Qué hotel de lujo quieres probar?', 'What luxury hotel do you want to try?'),
        t('¿Cuántos meses viajas sin trabajar?', 'How many months do you travel without working?'),
      ],
      starters: [t('Viajo a…', 'I travel to…'), t('Viajo con…', 'I travel with…'), t('Viajo… meses', 'I travel for… months')],
    },
    {
      icon: '🎁', title: t('Regalos', 'Presents'),
      questions: [
        t('¿Qué regalas a tu mamá o a tu papá?', 'What do you give your mum or dad?'),
        t('¿Qué amigo recibe un regalo grande?', 'Which friend gets a big present?'),
        t('¿Cuánto dinero das a una causa importante?', 'How much money do you give to an important cause?'),
        t('¿Qué regalo das a tu vecino?', 'What present do you give your neighbour?'),
        t('¿Qué capricho te compras solo para ti?', 'What treat do you buy just for yourself?'),
      ],
      starters: [t('A mi mamá le regalo…', 'I give my mum…'), t('Doy… a…', 'I give… to…'), t('Me regalo…', 'I give myself…')],
    },
    {
      icon: '🍀', title: t('La suerte', 'Luck'),
      questions: [
        t('¿Del uno al diez, cuánta suerte tienes?', 'From one to ten, how lucky are you?'),
        t('¿Qué haces con una cartera perdida en el autobús?', 'What do you do with a wallet lost on the bus?'),
        t('¿Vas a trabajar el lunes después de ganar?', 'Are you going to work on Monday after winning?'),
        t('¿Qué no cambia en tu vida con un millón?', 'What does not change in your life with a million?'),
        t('¿Qué cosa no puede comprar el dinero?', 'What thing can money not buy?'),
      ],
      starters: [t('Tengo un… de suerte', 'I have a… for luck'), t('El lunes…', 'On Monday…'), t('No cambia…', '… does not change')],
    },
  ],
};
