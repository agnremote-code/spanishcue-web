// Inglaterra · a London pub, Camden Market, the Tube, an Oxford college and the
// Beatles' Liverpool. Five places, four levels each (A0, A1, A2, B1). Every level is
// written on its own: same place and people, different situations.
export default {
  id: 'inglaterra',
  spots: [
    // ------------------------------------------------------------ the pub
    {
      id: 'pub',
      name: { es: 'El pub del barrio', en: 'The local pub' },
      who: { name: 'Oliver', role: { es: 'dueño del pub', en: 'pub landlord' } },
      levels: {
        A0: {
          scene: { es: 'Es un pub de Londres. Es viejo y bonito. Hay mesas de madera y una chimenea. Oliver está en la barra.', en: 'It is a London pub. It is old and pretty. There are wooden tables and a fireplace. Oliver is at the bar.' },
          opener: { es: '¡Hola! Soy Oliver. Este es mi pub. Aquí pides en la barra, no en la mesa. ¿Qué quieres?', en: 'Hello! I am Oliver. This is my pub. Here you order at the bar, not at the table. What do you want?' },
          decide: {
            ask: { es: 'Oliver tiene tres cosas. ¿Qué pides?', en: 'Oliver has three things. What do you order?' },
            options: [
              { say: { es: 'Fish and chips, por favor.', en: 'Fish and chips, please.' }, then: { es: 'Oliver dice: «¡El plato más famoso!»', en: 'Oliver says: “The most famous dish!”' } },
              { say: { es: 'Un zumo de manzana.', en: 'An apple juice.' }, then: { es: 'Oliver dice: «Muy bien. Es de una granja de aquí».', en: 'Oliver says: “Very good. It is from a farm near here.”' } },
              { say: { es: 'Un pastel de carne.', en: 'A meat pie.' }, then: { es: 'Oliver dice: «¡Está muy caliente! Cuidado».', en: 'Oliver says: “It is very hot! Careful.”' } },
            ],
          },
          twist: { es: 'Hay un perro debajo de tu mesa. Es el perro de Oliver. Se llama Biscuit. ¿Qué dices?', en: 'There is a dog under your table. It is Oliver’s dog. Its name is Biscuit. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el pescado?', en: 'Do you like fish?' }, help: { es: 'Sí, me gusta. / No, no me gusta.', en: 'Yes, I like it. / No, I don’t like it.' }, follow: [{ es: '¿Y las patatas fritas?', en: 'And chips?' }, { es: '¿Comes pescado los viernes?', en: 'Do you eat fish on Fridays?' }] },
            { q: { es: '¿Tienes perro?', en: 'Do you have a dog?' }, help: { es: 'Sí, tengo un perro. / No, tengo un gato.', en: 'Yes, I have a dog. / No, I have a cat.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is its name?' }, { es: '¿Es grande o pequeño?', en: 'Is it big or small?' }] },
            { q: { es: '¿Hay bares viejos en tu ciudad?', en: 'Are there old bars in your city?' }, help: { es: 'Sí, hay muchos. / No, hay pocos.', en: 'Yes, there are many. / No, there are few.' }, follow: [{ es: '¿Vas mucho?', en: 'Do you go often?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Comes en casa o fuera?', en: 'Do you eat at home or out?' }, help: { es: 'En casa. / Fuera, a veces.', en: 'At home. / Out, sometimes.' }, follow: [{ es: '¿Cocinas tú?', en: 'Do you cook?' }, { es: '¿Qué comes hoy?', en: 'What are you eating today?' }] },
          ],
          words: [{ es: 'la barra', en: 'the bar' }, { es: 'la chimenea', en: 'the fireplace' }, { es: 'el pastel de carne', en: 'the meat pie' }, { es: 'la madera', en: 'wood' }, { es: 'caliente', en: 'hot' }],
        },
        A1: {
          scene: { es: 'Es jueves por la noche. En el pub hay un concurso de preguntas, el famoso «pub quiz». Los grupos tienen nombres divertidos. Un grupo de cuatro amigos necesita una persona más.', en: 'It is Thursday night. There is a quiz at the pub, the famous “pub quiz”. The teams have funny names. A group of four friends needs one more person.' },
          opener: { es: 'Todos los jueves hacemos el quiz. Hay preguntas de historia, de música, de deporte y de geografía. El premio es una cena gratis. ¿Quieres jugar con ellos? Necesitan a alguien que sepa de otros países.', en: 'Every Thursday we do the quiz. There are questions about history, music, sport and geography. The prize is a free dinner. Do you want to play with them? They need someone who knows about other countries.' },
          decide: {
            ask: { es: 'Los amigos te preguntan: «¿Qué tema sabes mejor?». ¿Qué contestas?', en: 'The friends ask you: “Which topic do you know best?” What do you answer?' },
            options: [
              { say: { es: 'La geografía. Sé muchas capitales.', en: 'Geography. I know lots of capitals.' }, then: { es: 'Contestas bien seis preguntas. Tus nuevos amigos te dan un abrazo.', en: 'You answer six questions right. Your new friends give you a hug.' } },
              { say: { es: 'La música, sobre todo el pop.', en: 'Music, especially pop.' }, then: { es: 'Hay una pregunta de los Beatles. Todos te miran. Sabes la respuesta.', en: 'There is a question about the Beatles. Everyone looks at you. You know the answer.' } },
              { say: { es: 'Ninguno, pero me gusta jugar.', en: 'None, but I like playing.' }, then: { es: 'Los amigos se ríen. «Perfecto, nosotros tampoco sabemos nada».', en: 'The friends laugh. “Perfect, we don’t know anything either.”' } },
            ],
          },
          twist: { es: 'Tu grupo empata con otro grupo. Oliver hace una última pregunta: «¿Cuántas tazas de té toman los británicos al día?». ¿Qué número dices?', en: 'Your team draws with another team. Oliver asks one last question: “How many cups of tea do the British drink a day?” What number do you say?' },
          questions: [
            { q: { es: '¿Te gustan los concursos de preguntas?', en: 'Do you like quizzes?' }, help: { es: 'Sí, mucho. / No, me ponen nervioso.', en: 'Yes, a lot. / No, they make me nervous.' }, follow: [{ es: '¿Ves concursos en la tele?', en: 'Do you watch quiz shows on TV?' }, { es: '¿Juegas con tu familia?', en: 'Do you play with your family?' }] },
            { q: { es: '¿Qué tema sabes bien?', en: 'Which topic do you know well?' }, help: { es: 'Sé mucho de… / Sé poco de…', en: 'I know a lot about… / I know little about…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y qué tema no sabes?', en: 'And which topic don’t you know?' }] },
            { q: { es: '¿Qué haces los jueves por la noche?', en: 'What do you do on Thursday nights?' }, help: { es: 'Normalmente… / Me quedo en casa.', en: 'Normally… / I stay at home.' }, follow: [{ es: '¿Sales entre semana?', en: 'Do you go out on weekdays?' }, { es: '¿A qué hora te acuestas?', en: 'What time do you go to bed?' }] },
            { q: { es: '¿Tomas té?', en: 'Do you drink tea?' }, help: { es: 'Sí, con leche. / No, prefiero el café.', en: 'Yes, with milk. / No, I prefer coffee.' }, follow: [{ es: '¿Cuántas tazas al día?', en: 'How many cups a day?' }, { es: '¿Con azúcar?', en: 'With sugar?' }] },
          ],
          words: [{ es: 'el concurso', en: 'the quiz' }, { es: 'el premio', en: 'the prize' }, { es: 'empatar', en: 'to draw (a game)' }, { es: 'la taza', en: 'the cup' }, { es: 'el grupo', en: 'the team' }],
        },
        A2: {
          scene: { es: 'El pub de Oliver tiene doscientos años. Su abuelo y su padre trabajaron aquí. Pero los precios del barrio han subido mucho y una empresa grande le ha ofrecido dinero para convertir el pub en pisos de lujo.', en: 'Oliver’s pub is two hundred years old. His grandfather and his father worked here. But prices in the area have gone up a lot and a big company has offered him money to turn the pub into luxury flats.' },
          opener: { es: 'Este año han cerrado tres pubs en mi calle. La gente joven ya no viene tanto: se queda en casa o va a cafeterías modernas. Pero para muchos vecinos mayores, este es el único lugar donde hablan con alguien. ¿Tú has visto cerrar un lugar que te gustaba?', en: 'This year three pubs have closed on my street. Young people don’t come as much any more: they stay at home or go to modern cafés. But for many older neighbours, this is the only place where they talk to someone. Have you ever seen a place you liked close down?' },
          decide: {
            ask: { es: 'Oliver tiene que contestar a la empresa esta semana. ¿Qué le aconsejas?', en: 'Oliver has to answer the company this week. What do you advise him?' },
            options: [
              { say: { es: 'Que venda y descanse. Ya ha trabajado bastante.', en: 'Sell and rest. He has worked enough.' }, then: { es: 'Oliver vende. Con el dinero se compra una casa en la costa, pero los vecinos están muy tristes.', en: 'Oliver sells. With the money he buys a house on the coast, but the neighbours are very sad.' } },
              { say: { es: 'Que cambie el pub: comida, música y actividades para jóvenes.', en: 'Change the pub: food, music and activities for young people.' }, then: { es: 'Los sábados hay música en directo. Ahora vienen abuelos y nietos.', en: 'On Saturdays there is live music. Now grandparents and grandchildren come.' } },
              { say: { es: 'Que pida ayuda a los vecinos para comprar el pub juntos.', en: 'Ask the neighbours for help to buy the pub together.' }, then: { es: 'Doscientos vecinos ponen dinero. El pub es ahora de todo el barrio.', en: 'Two hundred neighbours put in money. The pub now belongs to the whole neighbourhood.' } },
            ],
          },
          twist: { es: 'La hija de Oliver dice que ella no quiere el pub: quiere ser médica. Oliver se enfada y no habla con ella. ¿Qué le dices a Oliver?', en: 'Oliver’s daughter says she doesn’t want the pub: she wants to be a doctor. Oliver gets angry and won’t talk to her. What do you say to Oliver?' },
          questions: [
            { q: { es: '¿Ha cerrado algún lugar importante para ti?', en: 'Has a place that was important to you closed?' }, help: { es: 'Sí, cerró… y ahora hay… / No, todavía está…', en: 'Yes, … closed and now there is… / No, … is still there.' }, follow: [{ es: '¿Qué hacías allí?', en: 'What did you use to do there?' }, { es: '¿Qué hay ahora?', en: 'What is there now?' }] },
            { q: { es: '¿Dónde hablas con tus vecinos?', en: 'Where do you talk to your neighbours?' }, help: { es: 'En el ascensor. / En la tienda. / Casi nunca hablo con ellos.', en: 'In the lift. / In the shop. / I hardly ever talk to them.' }, follow: [{ es: '¿Conoces sus nombres?', en: 'Do you know their names?' }, { es: '¿Te han ayudado alguna vez?', en: 'Have they ever helped you?' }] },
            { q: { es: '¿Tu familia tiene un negocio o un oficio de padres a hijos?', en: 'Does your family have a business or a trade passed down from parents to children?' }, help: { es: 'Sí, mi abuelo era… / No, cada uno hace algo diferente.', en: 'Yes, my grandfather was a… / No, everyone does something different.' }, follow: [{ es: '¿Te habría gustado seguir?', en: 'Would you have liked to continue it?' }, { es: '¿Qué decían tus padres?', en: 'What did your parents say?' }] },
            { q: { es: '¿Ha cambiado mucho tu barrio?', en: 'Has your neighbourhood changed a lot?' }, help: { es: 'Sí, antes había… y ahora hay… / No mucho.', en: 'Yes, before there was… and now there is… / Not much.' }, follow: [{ es: '¿Es más caro?', en: 'Is it more expensive?' }, { es: '¿Te gusta el cambio?', en: 'Do you like the change?' }] },
          ],
          words: [{ es: 'el piso de lujo', en: 'the luxury flat' }, { es: 'el vecino', en: 'the neighbour' }, { es: 'cerrar', en: 'to close' }, { es: 'el negocio', en: 'the business' }, { es: 'en directo', en: 'live' }],
        },
        B1: {
          scene: { es: 'Un estudio reciente dice que en Londres cada vez más jóvenes no beben alcohol. Oliver ha decidido abrir una zona sin alcohol en su pub, con juegos de mesa y bebidas especiales. Algunos clientes de toda la vida dicen que «eso ya no es un pub».', en: 'A recent study says that in London more and more young people don’t drink alcohol. Oliver has decided to open an alcohol-free area in his pub, with board games and special drinks. Some lifelong customers say that “that isn’t a pub any more”.' },
          opener: { es: 'Para mí, un pub nunca ha sido solo un sitio para beber: es la sala de estar del barrio. Pero mis clientes mayores sienten que les estoy quitando algo suyo. ¿Las tradiciones tienen que cambiar para sobrevivir, o pierden su sentido si cambian demasiado?', en: 'For me, a pub has never been just a place to drink: it’s the neighbourhood’s living room. But my older customers feel I’m taking something of theirs away. Do traditions have to change to survive, or do they lose their meaning if they change too much?' },
          decide: {
            ask: { es: 'El grupo de clientes mayores amenaza con irse a otro pub. ¿Qué debería hacer Oliver?', en: 'The group of older customers threatens to go to another pub. What should Oliver do?' },
            options: [
              { say: { es: 'Mantener la zona nueva y explicar por qué la necesita.', en: 'Keep the new area and explain why he needs it.' }, then: { es: 'Dos clientes se van, pero llegan veinte nuevos. Uno de los mayores acaba jugando al ajedrez con ellos.', en: 'Two customers leave, but twenty new ones arrive. One of the older men ends up playing chess with them.' } },
              { say: { es: 'Separar los horarios: la zona nueva solo por la tarde.', en: 'Separate the hours: the new area only in the afternoon.' }, then: { es: 'Funciona, pero los dos grupos nunca se encuentran. El pub parece dos lugares distintos.', en: 'It works, but the two groups never meet. The pub feels like two different places.' } },
              { say: { es: 'Hacer una noche mixta cada semana para que se conozcan.', en: 'Hold a mixed night every week so they get to know each other.' }, then: { es: 'La primera noche es incómoda. La cuarta, el quiz lo gana un equipo de abuelos y estudiantes.', en: 'The first night is awkward. By the fourth, the quiz is won by a team of grandparents and students.' } },
            ],
          },
          twist: { es: 'Un periodista publica un artículo titulado «El pub que ya no quiere bebedores». Las reservas caen. ¿Cómo debería responder Oliver públicamente?', en: 'A journalist publishes an article titled “The pub that no longer wants drinkers”. Bookings fall. How should Oliver respond publicly?' },
          questions: [
            { q: { es: '¿Qué lugar funciona como «sala de estar» de tu barrio?', en: 'Which place works as your neighbourhood’s “living room”?' }, help: { es: 'Creo que es… porque allí… / En mi barrio no hay ninguno, y eso…', en: 'I think it’s… because there… / There isn’t one in my area, and that…' }, follow: [{ es: '¿Quién va allí?', en: 'Who goes there?' }, { es: '¿Qué pasaría si cerrara?', en: 'What would happen if it closed?' }] },
            { q: { es: '¿Se puede pasarlo bien sin alcohol?', en: 'Can you have a good time without alcohol?' }, help: { es: 'Por supuesto, siempre que… / Depende de la cultura, porque…', en: 'Of course, as long as… / It depends on the culture, because…' }, follow: [{ es: '¿Cómo es en tu país?', en: 'What is it like in your country?' }, { es: '¿Ha cambiado con los jóvenes?', en: 'Has it changed with young people?' }] },
            { q: { es: '¿Qué tradición de tu país debería cambiar?', en: 'Which tradition in your country should change?' }, help: { es: 'Yo cambiaría… porque hoy en día…', en: 'I would change… because nowadays…' }, follow: [{ es: '¿Y cuál no cambiarías nunca?', en: 'And which would you never change?' }, { es: '¿Qué opinan tus padres?', en: 'What do your parents think?' }] },
            { q: { es: '¿Te has sentido alguna vez fuera de lugar en un sitio que cambió?', en: 'Have you ever felt out of place somewhere that changed?' }, help: { es: 'Sí, cuando… empezó a… / No, me adapto rápido.', en: 'Yes, when… started to… / No, I adapt quickly.' }, follow: [{ es: '¿Volviste?', en: 'Did you go back?' }, { es: '¿Qué echabas de menos?', en: 'What did you miss?' }] },
          ],
          words: [{ es: 'sobrevivir', en: 'to survive' }, { es: 'el cliente de toda la vida', en: 'the lifelong customer' }, { es: 'amenazar', en: 'to threaten' }, { es: 'la reserva', en: 'the booking' }, { es: 'el juego de mesa', en: 'the board game' }],
        },
      },
    },
    // ------------------------------------------------------------ Camden Market
    {
      id: 'camden',
      name: { es: 'El mercado de Camden', en: 'Camden Market' },
      who: { name: 'Priya', role: { es: 'vendedora de comida', en: 'food stall owner' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado grande junto a un canal. Hay ropa, música y comida de muchos países. Priya vende comida de la India.', en: 'It is a big market next to a canal. There are clothes, music and food from many countries. Priya sells Indian food.' },
          opener: { es: '¡Hola! Soy Priya. Mi familia es de la India, pero yo soy de Londres. ¿Tienes hambre?', en: 'Hello! I am Priya. My family is from India, but I am from London. Are you hungry?' },
          decide: {
            ask: { es: 'Priya tiene tres platos. ¿Cuál quieres?', en: 'Priya has three dishes. Which one do you want?' },
            options: [
              { say: { es: 'El curri de pollo.', en: 'The chicken curry.' }, then: { es: 'Priya dice: «¡Es el favorito de los ingleses!»', en: 'Priya says: “It is the English favourite!”' } },
              { say: { es: 'El arroz con verduras.', en: 'The rice with vegetables.' }, then: { es: 'Priya dice: «Muy bien. No tiene carne».', en: 'Priya says: “Very good. It has no meat.”' } },
              { say: { es: 'El pan con queso.', en: 'The bread with cheese.' }, then: { es: 'Priya dice: «Está caliente. ¡Mmm!»', en: 'Priya says: “It is hot. Mmm!”' } },
            ],
          },
          twist: { es: 'El curri es muy picante. ¡Tienes la boca roja! Priya te da agua. ¿Qué dices?', en: 'The curry is very spicy. Your mouth is red! Priya gives you water. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la comida picante?', en: 'Do you like spicy food?' }, help: { es: 'Sí, me encanta. / No, un poco.', en: 'Yes, I love it. / No, a little.' }, follow: [{ es: '¿Qué comida picante comes?', en: 'What spicy food do you eat?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Hay mercados en tu ciudad?', en: 'Are there markets in your city?' }, help: { es: 'Sí, el sábado. / No, hay supermercados.', en: 'Yes, on Saturday. / No, there are supermarkets.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Es grande?', en: 'Is it big?' }] },
            { q: { es: '¿Comes arroz?', en: 'Do you eat rice?' }, help: { es: 'Sí, mucho. / No, poco.', en: 'Yes, a lot. / No, a little.' }, follow: [{ es: '¿Con qué?', en: 'With what?' }, { es: '¿Cocinas arroz?', en: 'Do you cook rice?' }] },
            { q: { es: '¿Tu familia es de otro país?', en: 'Is your family from another country?' }, help: { es: 'Sí, mi abuelo es de… / No, todos son de aquí.', en: 'Yes, my grandfather is from… / No, they are all from here.' }, follow: [{ es: '¿Hablas su idioma?', en: 'Do you speak their language?' }, { es: '¿Comes su comida?', en: 'Do you eat their food?' }] },
          ],
          words: [{ es: 'el canal', en: 'the canal' }, { es: 'picante', en: 'spicy' }, { es: 'el plato', en: 'the dish' }, { es: 'las verduras', en: 'vegetables' }, { es: 'tener hambre', en: 'to be hungry' }],
        },
        A1: {
          scene: { es: 'Es domingo y el mercado está lleno de turistas. El puesto de Priya es pequeño: tiene solo una cocina y dos ayudantes. Hay una fila de veinte personas y todos tienen prisa.', en: 'It is Sunday and the market is full of tourists. Priya’s stall is small: it only has one cooker and two helpers. There is a queue of twenty people and everyone is in a hurry.' },
          opener: { es: 'Los domingos trabajo doce horas. Me levanto a las cinco para preparar la comida. Es duro, pero me gusta hablar con gente de todo el mundo. Hoy uno de mis ayudantes está enfermo. ¿Me ayudas un rato?', en: 'On Sundays I work twelve hours. I get up at five to prepare the food. It’s hard, but I like talking to people from all over the world. Today one of my helpers is ill. Will you help me for a while?' },
          decide: {
            ask: { es: 'Priya te da un trabajo. ¿Cuál eliges?', en: 'Priya gives you a job. Which one do you choose?' },
            options: [
              { say: { es: 'Cobrar a los clientes.', en: 'Take the customers’ money.' }, then: { es: 'Hablas con turistas de Japón, Brasil y Canadá. Todos pagan con el móvil.', en: 'You talk to tourists from Japan, Brazil and Canada. Everyone pays by phone.' } },
              { say: { es: 'Servir la comida en los platos.', en: 'Serve the food onto the plates.' }, then: { es: 'Al principio pones demasiado arroz. Priya se ríe y te enseña.', en: 'At first you put too much rice. Priya laughs and shows you how.' } },
              { say: { es: 'Explicar los platos a la gente de la fila.', en: 'Explain the dishes to the people in the queue.' }, then: { es: 'La fila avanza más rápido. Priya dice que eres un buen vendedor.', en: 'The queue moves faster. Priya says you are a good salesperson.' } },
            ],
          },
          twist: { es: 'Un cliente dice que la comida está fría y no quiere pagar. Priya está ocupada. ¿Qué haces?', en: 'A customer says the food is cold and doesn’t want to pay. Priya is busy. What do you do?' },
          questions: [
            { q: { es: '¿A qué hora te levantas los domingos?', en: 'What time do you get up on Sundays?' }, help: { es: 'Me levanto a las… / Tarde, a las…', en: 'I get up at… / Late, at…' }, follow: [{ es: '¿Y entre semana?', en: 'And on weekdays?' }, { es: '¿Qué desayunas?', en: 'What do you have for breakfast?' }] },
            { q: { es: '¿Has trabajado en una tienda o un restaurante?', en: 'Have you worked in a shop or a restaurant?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Te gustaba?', en: 'Did you like it?' }, { es: '¿Cuántas horas?', en: 'How many hours?' }] },
            { q: { es: '¿Cómo pagas normalmente?', en: 'How do you normally pay?' }, help: { es: 'Con el móvil. / Con tarjeta. / En efectivo.', en: 'By phone. / By card. / In cash.' }, follow: [{ es: '¿Llevas dinero en la cartera?', en: 'Do you carry money in your wallet?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Te gustan los lugares con mucha gente?', en: 'Do you like places with lots of people?' }, help: { es: 'Sí, me gustan. / No, prefiero lugares tranquilos.', en: 'Yes, I like them. / No, I prefer quiet places.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Adónde vas para estar tranquilo?', en: 'Where do you go to be calm?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'la fila', en: 'the queue' }, { es: 'el ayudante', en: 'the helper' }, { es: 'cobrar', en: 'to charge' }, { es: 'tener prisa', en: 'to be in a hurry' }],
        },
        A2: {
          scene: { es: 'Los padres de Priya llegaron a Londres hace cuarenta años. Trabajaron en una fábrica para que ella pudiera estudiar. Priya estudió Derecho, pero dejó su trabajo en un bufete para abrir el puesto de comida. Sus padres todavía no lo entienden.', en: 'Priya’s parents arrived in London forty years ago. They worked in a factory so she could study. Priya studied law, but she left her job at a law firm to open the food stall. Her parents still don’t understand it.' },
          opener: { es: 'Mi madre me dice: «Hemos trabajado toda la vida para que no tengas que cocinar para otros». Pero yo era muy infeliz en la oficina. Aquí cocino las recetas de mi abuela y la gente las disfruta. ¿Tú has tomado alguna vez una decisión que tu familia no entendía?', en: 'My mother tells me: “We worked all our lives so you wouldn’t have to cook for others.” But I was very unhappy in the office. Here I cook my grandmother’s recipes and people enjoy them. Have you ever made a decision your family didn’t understand?' },
          decide: {
            ask: { es: 'Es el cumpleaños de la madre de Priya. ¿Qué le aconsejas regalarle?', en: 'It’s Priya’s mother’s birthday. What do you advise her to give her?' },
            options: [
              { say: { es: 'Invitarla a pasar un día en el puesto.', en: 'Invite her to spend a day at the stall.' }, then: { es: 'La madre ve a cien personas felices con la comida de su abuela. Al final llora un poco.', en: 'Her mother sees a hundred people happy with her grandmother’s food. At the end she cries a little.' } },
              { say: { es: 'Un libro con las recetas de la abuela y fotos de los clientes.', en: 'A book with the grandmother’s recipes and photos of the customers.' }, then: { es: 'La madre lee el libro tres veces y lo enseña a todas sus amigas.', en: 'Her mother reads the book three times and shows it to all her friends.' } },
              { say: { es: 'Una cena tranquila para hablar del tema.', en: 'A quiet dinner to talk about it.' }, then: { es: 'Hablan cuatro horas. La madre confiesa que ella también quería tener un restaurante.', en: 'They talk for four hours. Her mother confesses she also wanted to have a restaurant.' } },
            ],
          },
          twist: { es: 'Un programa de televisión quiere grabar el puesto, pero quieren que Priya diga que es «comida exótica». A ella no le gusta esa palabra. ¿Qué debería hacer?', en: 'A TV programme wants to film the stall, but they want Priya to say it is “exotic food”. She doesn’t like that word. What should she do?' },
          questions: [
            { q: { es: '¿Tu familia ha vivido en otro país?', en: 'Has your family lived in another country?' }, help: { es: 'Sí, mis abuelos se fueron a… / No, siempre hemos vivido aquí.', en: 'Yes, my grandparents went to… / No, we have always lived here.' }, follow: [{ es: '¿Por qué se fueron?', en: 'Why did they leave?' }, { es: '¿Volvieron?', en: 'Did they come back?' }] },
            { q: { es: '¿Has dejado algo seguro por algo que te gustaba más?', en: 'Have you left something secure for something you liked more?' }, help: { es: 'Sí, una vez dejé… / No, soy prudente.', en: 'Yes, once I left… / No, I’m careful.' }, follow: [{ es: '¿Fue buena idea?', en: 'Was it a good idea?' }, { es: '¿Qué te dijeron?', en: 'What did people tell you?' }] },
            { q: { es: '¿Qué receta de tu familia te gustaría guardar?', en: 'Which family recipe would you like to keep?' }, help: { es: 'La… de mi abuela, porque…', en: 'My grandmother’s…, because…' }, follow: [{ es: '¿Sabes hacerla?', en: 'Do you know how to make it?' }, { es: '¿Cuándo la comían?', en: 'When did they eat it?' }] },
            { q: { es: '¿Qué esperaban tus padres de tu trabajo?', en: 'What did your parents expect of your work?' }, help: { es: 'Querían que yo fuera… / Me dejaban elegir.', en: 'They wanted me to be… / They let me choose.' }, follow: [{ es: '¿Les hiciste caso?', en: 'Did you listen to them?' }, { es: '¿Qué piensan ahora?', en: 'What do they think now?' }] },
          ],
          words: [{ es: 'el bufete', en: 'the law firm' }, { es: 'la receta', en: 'the recipe' }, { es: 'infeliz', en: 'unhappy' }, { es: 'disfrutar', en: 'to enjoy' }, { es: 'grabar', en: 'to film' }],
        },
        B1: {
          scene: { es: 'El ayuntamiento quiere renovar el mercado de Camden. El plan nuevo trae marcas famosas y alquileres más caros. Muchos puestos pequeños, como el de Priya, no podrán pagarlo. Los vecinos están divididos: unos quieren un mercado más limpio y seguro; otros dicen que Camden perderá su alma.', en: 'The council wants to renovate Camden Market. The new plan brings famous brands and higher rents. Many small stalls, like Priya’s, won’t be able to afford it. Locals are divided: some want a cleaner, safer market; others say Camden will lose its soul.' },
          opener: { es: 'Camden siempre ha sido el lugar de los raros: punks, artistas, inmigrantes. Ahora parece que quieren un centro comercial con un canal al lado. Pero reconozco que los baños son horribles y que de noche hay problemas. ¿Hasta qué punto una ciudad debería proteger los lugares «auténticos»?', en: 'Camden has always been the place for misfits: punks, artists, immigrants. Now it seems they want a shopping centre with a canal next to it. But I admit the toilets are awful and there are problems at night. To what extent should a city protect “authentic” places?' },
          decide: {
            ask: { es: 'Hay una reunión pública y Priya puede hablar tres minutos. ¿Qué debería pedir?', en: 'There is a public meeting and Priya can speak for three minutes. What should she ask for?' },
            options: [
              { say: { es: 'Alquileres más bajos para los puestos que llevan años aquí.', en: 'Lower rents for the stalls that have been here for years.' }, then: { es: 'La propuesta pasa con una condición: los puestos tienen que demostrar que son independientes.', en: 'The proposal passes on one condition: the stalls have to prove they are independent.' } },
              { say: { es: 'Que los vecinos voten el plan antes de aprobarlo.', en: 'For the locals to vote on the plan before it is approved.' }, then: { es: 'La votación tarda seis meses. Mientras tanto, nadie sabe qué va a pasar.', en: 'The vote takes six months. Meanwhile, nobody knows what will happen.' } },
              { say: { es: 'Aceptar la renovación, pero con un espacio para comida de inmigrantes.', en: 'Accept the renovation, but with a space for immigrant food.' }, then: { es: 'Se crea una zona nueva. Es bonita, pero algunos dicen que parece un museo.', en: 'A new area is created. It is pretty, but some say it looks like a museum.' } },
            ],
          },
          twist: { es: 'Una cadena famosa le ofrece a Priya poner su comida en cien supermercados. Ganaría mucho dinero, pero tendría que cambiar las recetas para producir más barato. ¿Debería aceptar?', en: 'A famous chain offers Priya the chance to sell her food in a hundred supermarkets. She would earn a lot of money, but she would have to change the recipes to produce more cheaply. Should she accept?' },
          questions: [
            { q: { es: '¿Hay en tu ciudad un barrio que ha perdido su carácter?', en: 'Is there a neighbourhood in your city that has lost its character?' }, help: { es: 'Sí, antes… era… y ahora… / No, creo que se ha protegido bien.', en: 'Yes, … used to be… and now… / No, I think it has been protected well.' }, follow: [{ es: '¿Quién se benefició?', en: 'Who benefited?' }, { es: '¿Quién tuvo que irse?', en: 'Who had to leave?' }] },
            { q: { es: '¿Prefieres comprar en tiendas pequeñas o en cadenas?', en: 'Do you prefer to shop in small shops or chains?' }, help: { es: 'Prefiero… aunque… / Depende de lo que compre.', en: 'I prefer… although… / It depends on what I’m buying.' }, follow: [{ es: '¿Pagarías más por lo local?', en: 'Would you pay more for local things?' }, { es: '¿Lo haces de verdad?', en: 'Do you really do it?' }] },
            { q: { es: '¿Qué hace que un lugar sea «auténtico»?', en: 'What makes a place “authentic”?' }, help: { es: 'Para mí, es auténtico cuando… / No creo que exista, porque…', en: 'For me, it’s authentic when… / I don’t think it exists, because…' }, follow: [{ es: '¿Has estado en uno?', en: 'Have you been to one?' }, { es: '¿El turismo lo estropea?', en: 'Does tourism spoil it?' }] },
            { q: { es: '¿Cambiarías tu producto para ganar mucho más dinero?', en: 'Would you change your product to earn much more money?' }, help: { es: 'Sí, si… / No, porque perdería…', en: 'Yes, if… / No, because I would lose…' }, follow: [{ es: '¿Dónde está tu límite?', en: 'Where is your limit?' }, { es: '¿Conoces un ejemplo real?', en: 'Do you know a real example?' }] },
          ],
          words: [{ es: 'renovar', en: 'to renovate' }, { es: 'el alquiler', en: 'the rent' }, { es: 'el alma', en: 'the soul' }, { es: 'la cadena', en: 'the chain' }, { es: 'el carácter', en: 'character' }],
        },
      },
    },
    // ------------------------------------------------------------ the Tube
    {
      id: 'metro',
      name: { es: 'El metro de Londres', en: 'The London Underground' },
      who: { name: 'Grace', role: { es: 'trabajadora del metro', en: 'Underground worker' } },
      levels: {
        A0: {
          scene: { es: 'Estás en el metro de Londres. Los ingleses lo llaman «the Tube». Hay mucha gente. Grace lleva un chaleco naranja.', en: 'You are in the London Underground. The English call it “the Tube”. There are lots of people. Grace is wearing an orange vest.' },
          opener: { es: '¡Hola! Soy Grace. Trabajo en el metro. En la escalera, a la derecha, por favor. ¿Adónde vas?', en: 'Hello! I am Grace. I work in the Underground. On the escalator, stand on the right, please. Where are you going?' },
          decide: {
            ask: { es: 'Grace te ayuda. ¿Adónde vas?', en: 'Grace helps you. Where are you going?' },
            options: [
              { say: { es: 'Al Big Ben.', en: 'To Big Ben.' }, then: { es: 'Grace dice: «Línea gris. Dos paradas».', en: 'Grace says: “Grey line. Two stops.”' } },
              { say: { es: 'Al Museo Británico.', en: 'To the British Museum.' }, then: { es: 'Grace dice: «Línea roja. Es gratis, el museo».', en: 'Grace says: “Red line. The museum is free.”' } },
              { say: { es: 'Al estadio de fútbol.', en: 'To the football stadium.' }, then: { es: 'Grace dice: «¡Hoy hay partido! Mucha gente».', en: 'Grace says: “There is a match today! Lots of people.”' } },
            ],
          },
          twist: { es: 'Una voz dice: «Mind the gap». Tú no entiendes. Grace dice: «¡Cuidado con el hueco!». ¿Qué dices?', en: 'A voice says: “Mind the gap.” You don’t understand. Grace says: “Careful with the gap!” What do you say?' },
          questions: [
            { q: { es: '¿Hay metro en tu ciudad?', en: 'Is there an underground in your city?' }, help: { es: 'Sí, hay metro. / No, hay autobuses.', en: 'Yes, there is. / No, there are buses.' }, follow: [{ es: '¿Lo usas?', en: 'Do you use it?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Cómo vas al trabajo?', en: 'How do you go to work?' }, help: { es: 'En metro. / En coche. / A pie.', en: 'By underground. / By car. / On foot.' }, follow: [{ es: '¿Cuántos minutos?', en: 'How many minutes?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Te gustan los museos?', en: 'Do you like museums?' }, help: { es: 'Sí, mucho. / No, prefiero los parques.', en: 'Yes, a lot. / No, I prefer parks.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Vas solo?', en: 'Do you go alone?' }] },
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es el…', en: 'My favourite colour is…' }, follow: [{ es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }, { es: '¿Y tu casa?', en: 'And your house?' }] },
          ],
          words: [{ es: 'la línea', en: 'the line' }, { es: 'la parada', en: 'the stop' }, { es: 'la escalera mecánica', en: 'the escalator' }, { es: 'el hueco', en: 'the gap' }, { es: 'a la derecha', en: 'on the right' }],
        },
        A1: {
          scene: { es: 'Son las ocho de la mañana. Es la hora punta. El andén está lleno y el tren llega con retraso. Una turista con dos maletas grandes no sabe qué hacer.', en: 'It is eight in the morning. It is rush hour. The platform is full and the train is late. A tourist with two big suitcases doesn’t know what to do.' },
          opener: { es: 'Cada día viajan cinco millones de personas en el metro. A esta hora todos tienen prisa y nadie habla. En el metro de Londres hay una regla: no se mira a los ojos a nadie. ¿En tu ciudad la gente habla en el transporte público?', en: 'Every day five million people travel on the Underground. At this time everyone is in a hurry and nobody talks. On the London Underground there’s a rule: you don’t look anyone in the eye. In your city, do people talk on public transport?' },
          decide: {
            ask: { es: 'La turista de las maletas está muy nerviosa. ¿Qué haces?', en: 'The tourist with the suitcases is very nervous. What do you do?' },
            options: [
              { say: { es: 'Le ayudo con una maleta.', en: 'I help her with a suitcase.' }, then: { es: 'Ella es de Chile. Te da las gracias y te invita a un café.', en: 'She is from Chile. She thanks you and invites you for a coffee.' } },
              { say: { es: 'Le digo que espere el próximo tren.', en: 'I tell her to wait for the next train.' }, then: { es: 'El próximo tren llega en dos minutos y está casi vacío. ¡Buena idea!', en: 'The next train arrives in two minutes and is almost empty. Good idea!' } },
              { say: { es: 'Llamo a Grace para que le ayude.', en: 'I call Grace to help her.' }, then: { es: 'Grace la lleva al ascensor. Hay un camino sin escaleras.', en: 'Grace takes her to the lift. There is a route without stairs.' } },
            ],
          },
          twist: { es: 'El tren para en el túnel. Las luces se apagan un momento. Nadie dice nada. Un niño empieza a llorar. ¿Qué haces?', en: 'The train stops in the tunnel. The lights go off for a moment. Nobody says anything. A child starts to cry. What do you do?' },
          questions: [
            { q: { es: '¿Usas el transporte público en la hora punta?', en: 'Do you use public transport at rush hour?' }, help: { es: 'Sí, todos los días. / No, nunca.', en: 'Yes, every day. / No, never.' }, follow: [{ es: '¿Cuánto tiempo tardas?', en: 'How long does it take you?' }, { es: '¿Qué haces durante el viaje?', en: 'What do you do during the journey?' }] },
            { q: { es: '¿Hablas con desconocidos?', en: 'Do you talk to strangers?' }, help: { es: 'Sí, a veces. / No, me da vergüenza.', en: 'Yes, sometimes. / No, I’m embarrassed.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿De qué hablas?', en: 'What do you talk about?' }] },
            { q: { es: '¿Ayudas a los turistas en tu ciudad?', en: 'Do you help tourists in your city?' }, help: { es: 'Sí, si me preguntan. / No mucho.', en: 'Yes, if they ask me. / Not much.' }, follow: [{ es: '¿En qué idioma?', en: 'In which language?' }, { es: '¿Qué te preguntan?', en: 'What do they ask you?' }] },
            { q: { es: '¿Te gusta viajar con maletas grandes?', en: 'Do you like travelling with big suitcases?' }, help: { es: 'No, prefiero una mochila. / Sí, llevo mucha ropa.', en: 'No, I prefer a backpack. / Yes, I take lots of clothes.' }, follow: [{ es: '¿Qué llevas siempre?', en: 'What do you always take?' }, { es: '¿Cuántos zapatos?', en: 'How many shoes?' }] },
          ],
          words: [{ es: 'la hora punta', en: 'rush hour' }, { es: 'el andén', en: 'the platform' }, { es: 'el retraso', en: 'the delay' }, { es: 'la maleta', en: 'the suitcase' }, { es: 'el desconocido', en: 'the stranger' }],
        },
        A2: {
          scene: { es: 'Grace trabaja en el metro desde hace quince años. Durante la pandemia siguió trabajando cuando la ciudad estaba vacía. Ahora la empresa quiere instalar máquinas en lugar de personas en muchas estaciones, y el puesto de Grace puede desaparecer.', en: 'Grace has worked in the Underground for fifteen years. During the pandemic she kept working when the city was empty. Now the company wants to install machines instead of people at many stations, and Grace’s job may disappear.' },
          opener: { es: 'Las máquinas venden billetes, sí. Pero ayer una señora mayor se perdió y lloraba. ¿Una máquina la habría ayudado? En quince años he encontrado niños perdidos, he ayudado a gente enferma y una vez hasta ayudé en un parto. ¿Tú crees que tu trabajo lo puede hacer una máquina?', en: 'Machines sell tickets, yes. But yesterday an older lady got lost and was crying. Would a machine have helped her? In fifteen years I’ve found lost children, helped sick people and once I even helped at a birth. Do you think a machine could do your job?' },
          decide: {
            ask: { es: 'Los trabajadores del metro quieren hacer huelga. Grace no sabe si participar. ¿Qué le dices?', en: 'The Underground workers want to strike. Grace doesn’t know whether to take part. What do you tell her?' },
            options: [
              { say: { es: 'Que haga huelga con sus compañeros.', en: 'Strike with her colleagues.' }, then: { es: 'Londres está un día sin metro. Muchos están enfadados, pero la empresa acepta hablar.', en: 'London has a day without the Underground. Many people are angry, but the company agrees to talk.' } },
              { say: { es: 'Que aprenda a reparar las máquinas nuevas.', en: 'Learn to repair the new machines.' }, then: { es: 'Grace hace un curso. Ahora tiene un trabajo nuevo y mejor pagado.', en: 'Grace takes a course. Now she has a new, better-paid job.' } },
              { say: { es: 'Que cuente sus historias en las redes sociales.', en: 'Tell her stories on social media.' }, then: { es: 'Su vídeo de la señora perdida tiene un millón de visitas. Mucha gente apoya a los trabajadores.', en: 'Her video about the lost lady gets a million views. Lots of people support the workers.' } },
            ],
          },
          twist: { es: 'El hijo de Grace le dice que las máquinas son el futuro y que ella debería buscar otra cosa. Grace se siente muy dolida. ¿Qué debería contestarle?', en: 'Grace’s son tells her that machines are the future and that she should look for something else. Grace feels very hurt. What should she answer?' },
          questions: [
            { q: { es: '¿Alguna vez una persona te ha ayudado en un lugar público?', en: 'Has a person ever helped you in a public place?' }, help: { es: 'Sí, una vez en… alguien me… / No me acuerdo.', en: 'Yes, once in… someone… / I don’t remember.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Le diste las gracias?', en: 'Did you thank them?' }] },
            { q: { es: '¿Prefieres hablar con una persona o usar una máquina?', en: 'Do you prefer to talk to a person or use a machine?' }, help: { es: 'Prefiero la máquina porque… / Prefiero una persona cuando…', en: 'I prefer the machine because… / I prefer a person when…' }, follow: [{ es: '¿Y en el banco?', en: 'And at the bank?' }, { es: '¿Y en el médico?', en: 'And at the doctor’s?' }] },
            { q: { es: '¿Has participado alguna vez en una huelga o una protesta?', en: 'Have you ever taken part in a strike or a protest?' }, help: { es: 'Sí, por… / No, nunca.', en: 'Yes, about… / No, never.' }, follow: [{ es: '¿Sirvió de algo?', en: 'Did it achieve anything?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Qué trabajos crees que van a desaparecer?', en: 'Which jobs do you think will disappear?' }, help: { es: 'Creo que… porque… / Ninguno, porque…', en: 'I think… because… / None, because…' }, follow: [{ es: '¿Y cuáles van a aparecer?', en: 'And which will appear?' }, { es: '¿Te preocupa?', en: 'Does it worry you?' }] },
          ],
          words: [{ es: 'la huelga', en: 'the strike' }, { es: 'perderse', en: 'to get lost' }, { es: 'el billete', en: 'the ticket' }, { es: 'el puesto de trabajo', en: 'the job' }, { es: 'dolido', en: 'hurt' }],
        },
        B1: {
          scene: { es: 'El metro de Londres va a poner cámaras con inteligencia artificial que detectan a la gente que no paga, a quien se comporta de forma «sospechosa» y a quien está a punto de caer a las vías. La empresa dice que salvará vidas; algunos grupos dicen que es vigilancia masiva.', en: 'The London Underground is going to install cameras with artificial intelligence that detect people who don’t pay, anyone behaving “suspiciously” and anyone about to fall onto the tracks. The company says it will save lives; some groups say it is mass surveillance.' },
          opener: { es: 'Yo he visto lo que pasa cuando alguien se cae a las vías: si una cámara puede evitarlo, la quiero. Pero ¿quién decide qué es «sospechoso»? Mi primo es negro y lleva capucha porque tiene frío, no porque vaya a robar. ¿Cuánta privacidad estarías dispuesto a dar a cambio de seguridad?', en: 'I’ve seen what happens when someone falls onto the tracks: if a camera can prevent it, I want it. But who decides what is “suspicious”? My cousin is Black and wears a hood because he’s cold, not because he’s going to steal. How much privacy would you be willing to give up in exchange for safety?' },
          decide: {
            ask: { es: 'Le piden a Grace que participe en la prueba de las cámaras. ¿Qué debería hacer?', en: 'Grace is asked to take part in the camera trial. What should she do?' },
            options: [
              { say: { es: 'Participar y vigilar que el sistema sea justo.', en: 'Take part and make sure the system is fair.' }, then: { es: 'Grace descubre que el sistema se equivoca más con los jóvenes. Lo informa y lo corrigen.', en: 'Grace discovers the system makes more mistakes with young people. She reports it and they fix it.' } },
              { say: { es: 'Negarse y explicar sus razones a sus jefes.', en: 'Refuse and explain her reasons to her managers.' }, then: { es: 'Sus jefes la respetan, pero la prueba sigue adelante sin ella.', en: 'Her managers respect her, but the trial goes ahead without her.' } },
              { say: { es: 'Aceptar solo las cámaras que detectan caídas a las vías.', en: 'Accept only the cameras that detect falls onto the tracks.' }, then: { es: 'La empresa acepta empezar por ahí. En el primer mes se evitan dos accidentes.', en: 'The company agrees to start there. In the first month two accidents are prevented.' } },
            ],
          },
          twist: { es: 'Una cámara marca como «sospechoso» al primo de Grace, y la policía lo para delante de todos. Él no ha hecho nada. ¿Qué debería hacer Grace ahora?', en: 'A camera flags Grace’s cousin as “suspicious”, and the police stop him in front of everyone. He has done nothing. What should Grace do now?' },
          questions: [
            { q: { es: '¿Te molesta que haya cámaras en la calle?', en: 'Does it bother you that there are cameras in the street?' }, help: { es: 'No, me siento más seguro porque… / Sí, porque…', en: 'No, I feel safer because… / Yes, because…' }, follow: [{ es: '¿Cuántas ves al día?', en: 'How many do you see a day?' }, { es: '¿Y en el trabajo?', en: 'And at work?' }] },
            { q: { es: '¿Puede una máquina juzgar a las personas?', en: 'Can a machine judge people?' }, help: { es: 'Solo si… / Nunca, porque…', en: 'Only if… / Never, because…' }, follow: [{ es: '¿Y un humano juzga mejor?', en: 'And does a human judge better?' }, { es: '¿Conoces algún error famoso?', en: 'Do you know any famous mistake?' }] },
            { q: { es: '¿Te han juzgado alguna vez por tu aspecto?', en: 'Have you ever been judged by your appearance?' }, help: { es: 'Sí, una vez… / No, pero he visto que…', en: 'Yes, once… / No, but I’ve seen that…' }, follow: [{ es: '¿Cómo reaccionaste?', en: 'How did you react?' }, { es: '¿Qué harías ahora?', en: 'What would you do now?' }] },
            { q: { es: '¿Qué es más importante en el transporte: la seguridad o la libertad?', en: 'What is more important on public transport: safety or freedom?' }, help: { es: 'Para mí, … porque… / No se puede elegir, porque…', en: 'For me, … because… / You can’t choose, because…' }, follow: [{ es: '¿Y en un aeropuerto?', en: 'And at an airport?' }, { es: '¿Y en internet?', en: 'And on the internet?' }] },
          ],
          words: [{ es: 'la vigilancia', en: 'surveillance' }, { es: 'sospechoso', en: 'suspicious' }, { es: 'las vías', en: 'the tracks' }, { es: 'la privacidad', en: 'privacy' }, { es: 'la capucha', en: 'the hood' }],
        },
      },
    },
    // ------------------------------------------------------------ Oxford
    {
      id: 'oxford',
      name: { es: 'Un colegio de Oxford', en: 'An Oxford college' },
      who: { name: 'Edward', role: { es: 'profesor', en: 'tutor' } },
      levels: {
        A0: {
          scene: { es: 'Es una universidad muy vieja. Tiene casi novecientos años. Hay un jardín verde y una biblioteca enorme. Edward es profesor.', en: 'It is a very old university. It is almost nine hundred years old. There is a green garden and a huge library. Edward is a tutor.' },
          opener: { es: 'Buenos días. Soy Edward. Enseño historia aquí. Mira, esta biblioteca tiene muchos libros. ¿Te gusta leer?', en: 'Good morning. I am Edward. I teach history here. Look, this library has lots of books. Do you like reading?' },
          decide: {
            ask: { es: 'Edward te enseña tres lugares. ¿Cuál quieres ver?', en: 'Edward shows you three places. Which one do you want to see?' },
            options: [
              { say: { es: 'La biblioteca.', en: 'The library.' }, then: { es: 'Edward dice: «Aquí estudian en silencio. ¡Shhh!»', en: 'Edward says: “Here they study in silence. Shhh!”' } },
              { say: { es: 'El comedor grande.', en: 'The big dining hall.' }, then: { es: 'Edward dice: «Parece una película de magia, ¿verdad?»', en: 'Edward says: “It looks like a magic film, doesn’t it?”' } },
              { say: { es: 'El jardín y el río.', en: 'The garden and the river.' }, then: { es: 'Edward dice: «Los estudiantes van en barca por el río».', en: 'Edward says: “The students go on the river in boats.”' } },
            ],
          },
          twist: { es: 'Un estudiante pasa en bicicleta muy rápido. ¡Casi choca contigo! Dice: «Sorry!». ¿Qué dices?', en: 'A student goes past on a bike very fast. He almost crashes into you! He says: “Sorry!” What do you say?' },
          questions: [
            { q: { es: '¿Te gusta leer?', en: 'Do you like reading?' }, help: { es: 'Sí, mucho. / No, prefiero ver películas.', en: 'Yes, a lot. / No, I prefer watching films.' }, follow: [{ es: '¿Qué lees?', en: 'What do you read?' }, { es: '¿Dónde lees?', en: 'Where do you read?' }] },
            { q: { es: '¿Estudias ahora?', en: 'Are you studying now?' }, help: { es: 'Sí, estudio… / No, trabajo.', en: 'Yes, I study… / No, I work.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Tienes bicicleta?', en: 'Do you have a bike?' }, help: { es: 'Sí, tengo una. / No, no tengo.', en: 'Yes, I have one. / No, I don’t.' }, follow: [{ es: '¿De qué color es?', en: 'What colour is it?' }, { es: '¿Vas mucho en bici?', en: 'Do you ride it a lot?' }] },
            { q: { es: '¿Te gustan las películas de magia?', en: 'Do you like magic films?' }, help: { es: 'Sí, me encantan. / No mucho.', en: 'Yes, I love them. / Not much.' }, follow: [{ es: '¿Cuál es tu favorita?', en: 'Which is your favourite?' }, { es: '¿Con quién las ves?', en: 'Who do you watch them with?' }] },
          ],
          words: [{ es: 'la biblioteca', en: 'the library' }, { es: 'el comedor', en: 'the dining hall' }, { es: 'la barca', en: 'the boat' }, { es: 'el silencio', en: 'silence' }, { es: 'viejo', en: 'old' }],
        },
        A1: {
          scene: { es: 'Es el día de la graduación. Los estudiantes llevan ropa negra muy antigua y un sombrero cuadrado. Las familias hacen fotos en el jardín. Edward está muy orgulloso de sus alumnos.', en: 'It is graduation day. The students wear very old-fashioned black clothes and a square hat. The families take photos in the garden. Edward is very proud of his students.' },
          opener: { es: 'Hoy terminan tres años de trabajo. Algunos de mis alumnos son los primeros de su familia en ir a la universidad. Sus padres trabajan en fábricas o en tiendas. Para ellos, este día es muy especial. ¿En tu familia alguien ha ido a la universidad?', en: 'Today three years of work come to an end. Some of my students are the first in their family to go to university. Their parents work in factories or in shops. For them, this day is very special. Has anyone in your family gone to university?' },
          decide: {
            ask: { es: 'Edward te invita a la fiesta. Una alumna te pide un consejo: ¿qué hago ahora?', en: 'Edward invites you to the party. A student asks you for advice: what do I do now?' },
            options: [
              { say: { es: 'Viajar un año antes de trabajar.', en: 'Travel for a year before working.' }, then: { es: 'Ella sonríe. «Quiero ir a México y aprender español».', en: 'She smiles. “I want to go to Mexico and learn Spanish.”' } },
              { say: { es: 'Buscar trabajo enseguida.', en: 'Look for a job straight away.' }, then: { es: 'Ella dice: «Sí, necesito dinero para ayudar a mis padres».', en: 'She says: “Yes, I need money to help my parents.”' } },
              { say: { es: 'Seguir estudiando un máster.', en: 'Keep studying for a master’s.' }, then: { es: 'Edward dice: «¡Buena idea! Ella es muy inteligente».', en: 'Edward says: “Good idea! She is very clever.”' } },
            ],
          },
          twist: { es: 'La abuela de la alumna empieza a llorar de alegría y te da un abrazo. Ella no habla inglés, habla polaco. ¿Qué haces?', en: 'The student’s grandmother starts crying with joy and hugs you. She doesn’t speak English, she speaks Polish. What do you do?' },
          questions: [
            { q: { es: '¿Has ido a una graduación?', en: 'Have you been to a graduation?' }, help: { es: 'Sí, a la de… / No, nunca.', en: 'Yes, to…’s. / No, never.' }, follow: [{ es: '¿Qué ropa llevabas?', en: 'What were you wearing?' }, { es: '¿Hubo fiesta?', en: 'Was there a party?' }] },
            { q: { es: '¿Qué estudias o qué estudiaste?', en: 'What do you study or what did you study?' }, help: { es: 'Estudio… / Estudié…', en: 'I study… / I studied…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Qué te gustaría estudiar ahora?', en: 'What would you like to study now?' }, help: { es: 'Me gustaría estudiar…', en: 'I would like to study…' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Cuántos años?', en: 'How many years?' }] },
            { q: { es: '¿Llevas sombrero?', en: 'Do you wear a hat?' }, help: { es: 'Sí, en invierno. / No, nunca.', en: 'Yes, in winter. / No, never.' }, follow: [{ es: '¿De qué tipo?', en: 'What kind?' }, { es: '¿Tienes una foto con sombrero?', en: 'Do you have a photo in a hat?' }] },
          ],
          words: [{ es: 'la graduación', en: 'the graduation' }, { es: 'orgulloso', en: 'proud' }, { es: 'el alumno', en: 'the student' }, { es: 'el máster', en: 'the master’s degree' }, { es: 'la alegría', en: 'joy' }],
        },
        A2: {
          scene: { es: 'Edward entrevista a candidatos que quieren estudiar en su colegio. Hoy tiene que elegir entre dos estudiantes: uno de un colegio privado muy caro, con notas perfectas, y una chica de un pueblo minero, con notas un poco peores pero ideas muy originales.', en: 'Edward is interviewing candidates who want to study at his college. Today he has to choose between two students: one from a very expensive private school, with perfect marks, and a girl from a mining town, with slightly lower marks but very original ideas.' },
          opener: { es: 'Durante siglos, Oxford fue solo para los hijos de familias ricas. Hemos cambiado mucho, pero todavía hay más estudiantes de colegios privados de lo normal. Solo tengo una plaza. ¿Tú qué valoras más: las notas o el potencial?', en: 'For centuries, Oxford was only for the sons of rich families. We have changed a lot, but there are still more students from private schools than normal. I only have one place. What do you value more: marks or potential?' },
          decide: {
            ask: { es: 'Edward te pide tu opinión. ¿A quién elegirías?', en: 'Edward asks for your opinion. Who would you choose?' },
            options: [
              { say: { es: 'Al chico de las notas perfectas.', en: 'The boy with perfect marks.' }, then: { es: 'El chico estudia mucho y termina con la mejor nota. Pero la chica no consigue plaza en ninguna otra universidad.', en: 'The boy studies hard and finishes with the top mark. But the girl doesn’t get a place at any other university.' } },
              { say: { es: 'A la chica del pueblo minero.', en: 'The girl from the mining town.' }, then: { es: 'El primer año le cuesta mucho. Al tercero, escribe el mejor trabajo de su clase.', en: 'The first year is very hard for her. By the third, she writes the best essay in her class.' } },
              { say: { es: 'Pedir una segunda entrevista a los dos.', en: 'Ask both for a second interview.' }, then: { es: 'En la segunda entrevista, el chico confiesa que en realidad quiere ser músico.', en: 'In the second interview, the boy confesses he actually wants to be a musician.' } },
            ],
          },
          twist: { es: 'El padre del chico rico es un hombre famoso que ha dado mucho dinero al colegio. Llama a Edward por teléfono. ¿Qué debería decirle Edward?', en: 'The rich boy’s father is a famous man who has given the college a lot of money. He phones Edward. What should Edward tell him?' },
          questions: [
            { q: { es: '¿Fuiste a un colegio público o privado?', en: 'Did you go to a state or private school?' }, help: { es: 'Fui a uno… y era…', en: 'I went to a… one and it was…' }, follow: [{ es: '¿Te gustaba?', en: 'Did you like it?' }, { es: '¿Cambiarías algo?', en: 'Would you change anything?' }] },
            { q: { es: '¿Has hecho una entrevista importante?', en: 'Have you had an important interview?' }, help: { es: 'Sí, para… y estaba… / No todavía.', en: 'Yes, for… and I was… / Not yet.' }, follow: [{ es: '¿Qué te preguntaron?', en: 'What did they ask you?' }, { es: '¿Te eligieron?', en: 'Did they choose you?' }] },
            { q: { es: '¿Las notas dicen quién eres?', en: 'Do marks say who you are?' }, help: { es: 'No del todo, porque… / Sí, en parte.', en: 'Not completely, because… / Yes, in part.' }, follow: [{ es: '¿Cómo eran tus notas?', en: 'What were your marks like?' }, { es: '¿Te importaban?', en: 'Did they matter to you?' }] },
            { q: { es: '¿Quién te ha dado una oportunidad importante?', en: 'Who has given you an important opportunity?' }, help: { es: 'Un profesor que… / Mi primer jefe…', en: 'A teacher who… / My first boss…' }, follow: [{ es: '¿Por qué crees que lo hizo?', en: 'Why do you think they did it?' }, { es: '¿Se lo has agradecido?', en: 'Have you thanked them?' }] },
          ],
          words: [{ es: 'la plaza', en: 'the place' }, { es: 'la nota', en: 'the mark' }, { es: 'el colegio privado', en: 'the private school' }, { es: 'minero', en: 'mining' }, { es: 'valorar', en: 'to value' }],
        },
        B1: {
          scene: { es: 'Los estudiantes de Oxford votan para quitar el retrato de un antiguo alumno famoso del comedor, porque ganó su fortuna con el comercio de esclavos. Edward enseña historia y tiene que dirigir el debate. Unos dicen que quitar el cuadro es borrar la historia; otros, que colgarlo es celebrarla.', en: 'Oxford students are voting to remove the portrait of a famous former student from the dining hall, because he made his fortune from the slave trade. Edward teaches history and has to chair the debate. Some say removing the painting is erasing history; others, that hanging it is celebrating it.' },
          opener: { es: 'Llevo treinta años comiendo bajo ese cuadro y nunca me había hecho preguntas. Una alumna mía, descendiente de esclavos, me dijo que cada día come mirando al hombre que compró a su familia. Eso me cambió la perspectiva. ¿Los monumentos del pasado deben juzgarse con los valores de hoy?', en: 'I’ve spent thirty years eating under that painting and I had never asked myself any questions. A student of mine, descended from slaves, told me that every day she eats looking at the man who bought her family. That changed my perspective. Should monuments of the past be judged by today’s values?' },
          decide: {
            ask: { es: 'El debate termina empatado. Edward tiene la última palabra. ¿Qué debería proponer?', en: 'The debate ends in a tie. Edward has the final say. What should he propose?' },
            options: [
              { say: { es: 'Quitar el cuadro y llevarlo a un museo con su historia completa.', en: 'Remove the painting and take it to a museum with its full history.' }, then: { es: 'El museo prepara una exposición. Muchos visitantes descubren una parte de la historia que no conocían.', en: 'The museum puts on an exhibition. Many visitors discover a part of history they didn’t know.' } },
              { say: { es: 'Dejar el cuadro con una placa que explique quién era.', en: 'Leave the painting with a plaque explaining who he was.' }, then: { es: 'La placa genera conversaciones en cada comida. Algunos alumnos siguen sin querer sentarse cerca.', en: 'The plaque sparks conversations at every meal. Some students still refuse to sit nearby.' } },
              { say: { es: 'Poner al lado el retrato de una persona que luchó contra la esclavitud.', en: 'Hang beside it the portrait of someone who fought against slavery.' }, then: { es: 'Los dos cuadros juntos se hacen famosos. Llegan visitantes de todo el país a verlos.', en: 'The two paintings together become famous. Visitors come from all over the country to see them.' } },
            ],
          },
          twist: { es: 'Un periódico publica que Edward «quiere borrar la historia británica». Recibe cientos de mensajes de odio. El rector le pide que no hable más del tema. ¿Debería callarse?', en: 'A newspaper reports that Edward “wants to erase British history”. He receives hundreds of hate messages. The head of college asks him not to talk about it any more. Should he stay silent?' },
          questions: [
            { q: { es: '¿Hay en tu país monumentos que generan polémica?', en: 'Are there monuments in your country that cause controversy?' }, help: { es: 'Sí, por ejemplo… porque… / No que yo sepa.', en: 'Yes, for example… because… / Not that I know of.' }, follow: [{ es: '¿Qué opinas tú?', en: 'What do you think?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Se puede separar a una persona de su obra?', en: 'Can you separate a person from their work?' }, help: { es: 'Creo que sí, siempre que… / No, porque…', en: 'I think so, as long as… / No, because…' }, follow: [{ es: '¿Con qué artista te pasa?', en: 'Which artist does that apply to for you?' }, { es: '¿Sigues escuchándolo o leyéndolo?', en: 'Do you still listen to or read them?' }] },
            { q: { es: '¿Has cambiado de opinión sobre algo importante por una persona?', en: 'Have you changed your mind about something important because of a person?' }, help: { es: 'Sí, cuando… me contó… / No, suelo cambiar por…', en: 'Yes, when… told me… / No, I usually change because of…' }, follow: [{ es: '¿Fue difícil?', en: 'Was it difficult?' }, { es: '¿Se lo dijiste?', en: 'Did you tell them?' }] },
            { q: { es: '¿Hay temas de los que es mejor no hablar en el trabajo?', en: 'Are there topics it’s better not to talk about at work?' }, help: { es: 'Sí, la política, porque… / No, porque hablar…', en: 'Yes, politics, because… / No, because talking…' }, follow: [{ es: '¿Qué pasa en tu trabajo?', en: 'What happens at your work?' }, { es: '¿Y en las cenas familiares?', en: 'And at family dinners?' }] },
          ],
          words: [{ es: 'el retrato', en: 'the portrait' }, { es: 'el comercio de esclavos', en: 'the slave trade' }, { es: 'borrar', en: 'to erase' }, { es: 'la placa', en: 'the plaque' }, { es: 'la polémica', en: 'controversy' }],
        },
      },
    },
    // ------------------------------------------------------------ the Beatles' Liverpool
    {
      id: 'beatles',
      name: { es: 'El Liverpool de los Beatles', en: 'The Beatles’ Liverpool' },
      who: { name: 'Jamie', role: { es: 'guía y músico', en: 'guide and musician' } },
      levels: {
        A0: {
          scene: { es: 'Estás en Liverpool, la ciudad de los Beatles. Es un club pequeño y oscuro. Hay una guitarra y un escenario. Jamie es guía.', en: 'You are in Liverpool, the city of the Beatles. It is a small, dark club. There is a guitar and a stage. Jamie is a guide.' },
          opener: { es: '¡Hola! Soy Jamie. Aquí tocaban los Beatles. Yo toco la guitarra también. ¿Te gusta la música?', en: 'Hello! I am Jamie. The Beatles played here. I play the guitar too. Do you like music?' },
          decide: {
            ask: { es: 'Jamie quiere tocar una canción. ¿Cuál pides?', en: 'Jamie wants to play a song. Which one do you ask for?' },
            options: [
              { say: { es: '«Yellow Submarine».', en: '“Yellow Submarine”.' }, then: { es: 'Jamie canta y todos cantan con él. ¡Es muy divertido!', en: 'Jamie sings and everyone sings with him. It is great fun!' } },
              { say: { es: '«Let It Be».', en: '“Let It Be”.' }, then: { es: 'Jamie toca despacio. Una señora llora un poco.', en: 'Jamie plays slowly. A lady cries a little.' } },
              { say: { es: 'Una canción de Jamie.', en: 'One of Jamie’s songs.' }, then: { es: 'Jamie está muy contento. «¡Nadie me pide mis canciones!»', en: 'Jamie is very happy. “Nobody asks for my songs!”' } },
            ],
          },
          twist: { es: 'Jamie te da la guitarra. «¡Ahora tú!», dice. Todos te miran. ¿Qué haces?', en: 'Jamie gives you the guitar. “Now you!” he says. Everyone looks at you. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los Beatles?', en: 'Do you like the Beatles?' }, help: { es: 'Sí, mucho. / No los conozco bien.', en: 'Yes, a lot. / I don’t know them well.' }, follow: [{ es: '¿Qué canción?', en: 'Which song?' }, { es: '¿Y a tus padres?', en: 'And your parents?' }] },
            { q: { es: '¿Tocas algún instrumento?', en: 'Do you play an instrument?' }, help: { es: 'Sí, toco el… / No, no toco nada.', en: 'Yes, I play the… / No, I don’t play anything.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Quieres aprender uno?', en: 'Do you want to learn one?' }] },
            { q: { es: '¿Cantas?', en: 'Do you sing?' }, help: { es: 'Sí, en la ducha. / No, canto muy mal.', en: 'Yes, in the shower. / No, I sing very badly.' }, follow: [{ es: '¿Qué cantas?', en: 'What do you sing?' }, { es: '¿Vas al karaoke?', en: 'Do you go to karaoke?' }] },
            { q: { es: '¿Qué música escuchas?', en: 'What music do you listen to?' }, help: { es: 'Escucho pop. / Escucho rock. / Escucho de todo.', en: 'I listen to pop. / I listen to rock. / I listen to everything.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Con qué?', en: 'On what?' }] },
          ],
          words: [{ es: 'el escenario', en: 'the stage' }, { es: 'la guitarra', en: 'the guitar' }, { es: 'la canción', en: 'the song' }, { es: 'tocar', en: 'to play (music)' }, { es: 'oscuro', en: 'dark' }],
        },
        A1: {
          scene: { es: 'Jamie hace un tour en autobús por Liverpool: la casa de John Lennon, la calle Penny Lane y el puerto. En el autobús hay turistas de Japón, Argentina y Estados Unidos. Todos son grandes fans.', en: 'Jamie runs a bus tour around Liverpool: John Lennon’s house, Penny Lane and the port. On the bus there are tourists from Japan, Argentina and the United States. They are all big fans.' },
          opener: { es: 'Liverpool es una ciudad de puerto. Antes llegaban barcos de todo el mundo y con ellos llegaba música nueva de América. Así empezaron los Beatles. Hoy la ciudad vive mucho del turismo musical. ¿Tu ciudad es famosa por algo?', en: 'Liverpool is a port city. Ships used to arrive from all over the world and with them came new music from America. That’s how the Beatles started. Today the city lives a lot off music tourism. Is your city famous for something?' },
          decide: {
            ask: { es: 'El autobús para veinte minutos. ¿Qué haces?', en: 'The bus stops for twenty minutes. What do you do?' },
            options: [
              { say: { es: 'Hago una foto en Penny Lane.', en: 'I take a photo on Penny Lane.' }, then: { es: 'El cartel de la calle está lleno de firmas de fans de todo el mundo.', en: 'The street sign is covered in signatures from fans all over the world.' } },
              { say: { es: 'Compro un recuerdo en una tienda.', en: 'I buy a souvenir in a shop.' }, then: { es: 'Compras una taza amarilla con un submarino. Cuesta diez libras.', en: 'You buy a yellow mug with a submarine on it. It costs ten pounds.' } },
              { say: { es: 'Hablo con los turistas japoneses.', en: 'I talk to the Japanese tourists.' }, then: { es: 'Son una pareja de setenta años. Vieron a los Beatles en Tokio en 1966.', en: 'They are a couple in their seventies. They saw the Beatles in Tokyo in 1966.' } },
            ],
          },
          twist: { es: 'El autobús se rompe en medio de la calle. Jamie saca la guitarra y empieza a cantar para los turistas. ¿Qué haces?', en: 'The bus breaks down in the middle of the street. Jamie gets out his guitar and starts singing for the tourists. What do you do?' },
          questions: [
            { q: { es: '¿Tu ciudad es famosa por algo?', en: 'Is your city famous for something?' }, help: { es: 'Sí, por… / No, es tranquila.', en: 'Yes, for… / No, it’s quiet.' }, follow: [{ es: '¿Vienen turistas?', en: 'Do tourists come?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Compras recuerdos cuando viajas?', en: 'Do you buy souvenirs when you travel?' }, help: { es: 'Sí, compro… / No, hago fotos.', en: 'Yes, I buy… / No, I take photos.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Dónde lo tienes?', en: 'Where do you keep it?' }] },
            { q: { es: '¿Has ido a un concierto?', en: 'Have you been to a concert?' }, help: { es: 'Sí, de… / No, nunca.', en: 'Yes, …’s. / No, never.' }, follow: [{ es: '¿Con quién fuiste?', en: 'Who did you go with?' }, { es: '¿Cuánto costó?', en: 'How much did it cost?' }] },
            { q: { es: '¿Eres fan de alguien?', en: 'Are you a fan of anyone?' }, help: { es: 'Sí, soy fan de… / No mucho.', en: 'Yes, I’m a fan of… / Not really.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Qué tienes de esa persona?', en: 'What do you have of theirs?' }] },
          ],
          words: [{ es: 'el puerto', en: 'the port' }, { es: 'el recuerdo', en: 'the souvenir' }, { es: 'la firma', en: 'the signature' }, { es: 'romperse', en: 'to break down' }, { es: 'la libra', en: 'the pound' }],
        },
        A2: {
          scene: { es: 'Jamie tiene treinta y cinco años. Toca canciones de los Beatles todas las noches para los turistas, pero escribe sus propias canciones desde los quince. Nadie quiere escucharlas: los turistas solo quieren «Hey Jude». Esta noche, un productor de Londres está en el club.', en: 'Jamie is thirty-five. He plays Beatles songs every night for tourists, but he has been writing his own songs since he was fifteen. Nobody wants to hear them: tourists only want “Hey Jude”. Tonight, a producer from London is in the club.' },
          opener: { es: 'Me pagan bien por tocar a los Beatles. Pagan el alquiler y la comida de mi hija. Pero a veces siento que vivo la vida de otra persona. Mi padre me decía: «Haz lo seguro». ¿Tú has dejado de lado un sueño por necesidad?', en: 'They pay me well to play the Beatles. It pays the rent and my daughter’s food. But sometimes I feel I’m living someone else’s life. My father used to tell me: “Do the safe thing.” Have you ever put a dream aside out of necessity?' },
          decide: {
            ask: { es: 'Jamie tiene tiempo para una sola canción delante del productor. ¿Qué debería tocar?', en: 'Jamie has time for only one song in front of the producer. What should he play?' },
            options: [
              { say: { es: 'Su mejor canción, aunque los turistas se aburran.', en: 'His best song, even if the tourists get bored.' }, then: { es: 'Los turistas no aplauden mucho. Pero el productor le da su tarjeta.', en: 'The tourists don’t clap much. But the producer gives him his card.' } },
              { say: { es: 'Una de los Beatles, pero con su propio estilo.', en: 'A Beatles song, but in his own style.' }, then: { es: 'El club se vuelve loco. El productor dice: «Interesante. ¿Tienes más?».', en: 'The club goes wild. The producer says: “Interesting. Do you have more?”' } },
              { say: { es: '«Hey Jude», como siempre, sin arriesgar.', en: '“Hey Jude”, as always, without taking a risk.' }, then: { es: 'Todos cantan. El productor se va antes del final.', en: 'Everyone sings. The producer leaves before the end.' } },
            ],
          },
          twist: { es: 'El productor le ofrece un contrato, pero tiene que irse a Londres seis meses, lejos de su hija de ocho años. ¿Qué debería hacer?', en: 'The producer offers him a contract, but he has to go to London for six months, away from his eight-year-old daughter. What should he do?' },
          questions: [
            { q: { es: '¿Tenías un sueño de niño?', en: 'Did you have a dream as a child?' }, help: { es: 'Sí, quería ser… / No me acuerdo.', en: 'Yes, I wanted to be… / I don’t remember.' }, follow: [{ es: '¿Qué pasó con ese sueño?', en: 'What happened to that dream?' }, { es: '¿Todavía lo tienes?', en: 'Do you still have it?' }] },
            { q: { es: '¿Has hecho algo por dinero que no te gustaba?', en: 'Have you done something for money that you didn’t like?' }, help: { es: 'Sí, trabajé de… / No, siempre he…', en: 'Yes, I worked as… / No, I’ve always…' }, follow: [{ es: '¿Cuánto tiempo?', en: 'For how long?' }, { es: '¿Aprendiste algo?', en: 'Did you learn anything?' }] },
            { q: { es: '¿Qué consejo te daban tus padres?', en: 'What advice did your parents give you?' }, help: { es: 'Siempre me decían que… / Me dejaban decidir.', en: 'They always told me that… / They let me decide.' }, follow: [{ es: '¿Les hiciste caso?', en: 'Did you take their advice?' }, { es: '¿Se lo dices tú a otros?', en: 'Do you say it to others?' }] },
            { q: { es: '¿Te irías lejos de tu familia por una gran oportunidad?', en: 'Would you go far from your family for a great opportunity?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Por cuánto tiempo?', en: 'For how long?' }, { es: '¿Lo has hecho?', en: 'Have you done it?' }] },
          ],
          words: [{ es: 'el productor', en: 'the producer' }, { es: 'arriesgar', en: 'to take a risk' }, { es: 'el sueño', en: 'the dream' }, { es: 'aplaudir', en: 'to clap' }, { es: 'el contrato', en: 'the contract' }],
        },
        B1: {
          scene: { es: 'Una empresa ha creado con inteligencia artificial una canción «nueva» de los Beatles, con la voz de John Lennon. Es un éxito mundial. Jamie, que vive de tocar a los Beatles, está invitado a un programa de radio para dar su opinión junto a la empresa.', en: 'A company has used artificial intelligence to create a “new” Beatles song, with John Lennon’s voice. It’s a worldwide hit. Jamie, who makes a living playing the Beatles, is invited onto a radio programme to give his opinion alongside the company.' },
          opener: { es: 'Cuando la escuché, se me puso la piel de gallina: parecía él de verdad. Luego me quedé con una sensación rara. Lennon no eligió esa letra ni esa melodía. ¿Es un homenaje o es usar a un muerto para vender? Y si una máquina puede hacer «nuevas» canciones de los Beatles, ¿para qué me necesitan a mí?', en: 'When I heard it, I got goosebumps: it really sounded like him. Then I felt strange. Lennon didn’t choose those lyrics or that melody. Is it a tribute or is it using a dead man to sell? And if a machine can make “new” Beatles songs, why do they need me?' },
          decide: {
            ask: { es: 'En la radio, le preguntan a Jamie qué ley debería existir. ¿Qué debería proponer?', en: 'On the radio, Jamie is asked what law there should be. What should he propose?' },
            options: [
              { say: { es: 'Prohibir usar la voz de un artista muerto sin permiso de su familia.', en: 'Ban using a dead artist’s voice without their family’s permission.' }, then: { es: 'Muchos oyentes lo apoyan. La empresa dice que la familia ya estaba de acuerdo.', en: 'Many listeners support him. The company says the family had already agreed.' } },
              { say: { es: 'Permitirlo, pero avisar siempre que la canción es artificial.', en: 'Allow it, but always state that the song is artificial.' }, then: { es: 'La empresa acepta poner una etiqueta. Las ventas casi no cambian.', en: 'The company agrees to add a label. Sales hardly change.' } },
              { say: { es: 'Que una parte del dinero sea para músicos jóvenes.', en: 'That part of the money go to young musicians.' }, then: { es: 'La idea gusta tanto que otras empresas la copian. Nace un fondo para músicos.', en: 'The idea is so popular that other companies copy it. A fund for musicians is born.' } },
            ],
          },
          twist: { es: 'Al final del programa, la empresa le ofrece a Jamie un trabajo: entrenar a la inteligencia artificial con su forma de tocar. Pagan muy bien. ¿Debería aceptar?', en: 'At the end of the programme, the company offers Jamie a job: training the artificial intelligence with his way of playing. They pay very well. Should he accept?' },
          questions: [
            { q: { es: '¿Escucharías una canción hecha por una inteligencia artificial?', en: 'Would you listen to a song made by artificial intelligence?' }, help: { es: 'Sí, si suena bien. / No, porque la música necesita…', en: 'Yes, if it sounds good. / No, because music needs…' }, follow: [{ es: '¿Notarías la diferencia?', en: 'Would you notice the difference?' }, { es: '¿Pagarías por ella?', en: 'Would you pay for it?' }] },
            { q: { es: '¿Qué derechos debería tener una persona después de morir?', en: 'What rights should a person have after they die?' }, help: { es: 'Creo que su familia debería… / Ninguno, porque…', en: 'I think their family should… / None, because…' }, follow: [{ es: '¿Y tus fotos y mensajes?', en: 'And your photos and messages?' }, { es: '¿Has pensado en ello?', en: 'Have you thought about it?' }] },
            { q: { es: '¿Qué parte de tu trabajo nunca podría hacer una máquina?', en: 'Which part of your work could a machine never do?' }, help: { es: 'La parte de… porque… / Creo que todo, por desgracia.', en: 'The part where… because… / I think all of it, sadly.' }, follow: [{ es: '¿Estás seguro?', en: 'Are you sure?' }, { es: '¿Usas ya alguna herramienta así?', en: 'Do you already use a tool like that?' }] },
            { q: { es: '¿Copiar a un artista es un homenaje o un robo?', en: 'Is copying an artist a tribute or theft?' }, help: { es: 'Depende de si… / Es un homenaje cuando…', en: 'It depends on whether… / It’s a tribute when…' }, follow: [{ es: '¿Conoces un caso real?', en: 'Do you know a real case?' }, { es: '¿Dónde pondrías el límite?', en: 'Where would you draw the line?' }] },
          ],
          words: [{ es: 'el homenaje', en: 'the tribute' }, { es: 'la letra', en: 'the lyrics' }, { es: 'la piel de gallina', en: 'goosebumps' }, { es: 'el oyente', en: 'the listener' }, { es: 'el fondo', en: 'the fund' }],
        },
      },
    },
  ],
};
