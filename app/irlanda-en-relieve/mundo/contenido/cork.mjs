// Cork · the English Market, the emigrants’ harbour at Cobh, Blarney Castle and its
// stone, the colourful port of Kinsale and the jazz festival. Five places, four levels
// each (A0, A1, A2, B1). Every level is written on its own.
export default {
  id: 'cork',
  spots: [
    // ------------------------------------------------------------ the English Market
    {
      id: 'mercado',
      name: { es: 'El Mercado Inglés de Cork', en: 'The English Market in Cork' },
      who: { name: 'Siobhán', role: { es: 'pescadera', en: 'fishmonger' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado grande y cubierto. Hay pescado, carne, queso y pan. Siobhán vende pescado. Tiene un delantal blanco.', en: 'It is a big covered market. There is fish, meat, cheese and bread. Siobhán sells fish. She has a white apron.' },
          opener: { es: '¡Buenos días! Soy Siobhán. Hoy tengo salmón, caballa y cangrejo. Todo es fresco. ¿Qué quieres?', en: 'Good morning! I am Siobhán. Today I have salmon, mackerel and crab. Everything is fresh. What would you like?' },
          decide: {
            ask: { es: '¿Qué compras?', en: 'What do you buy?' },
            options: [
              { say: { es: 'Salmón, por favor.', en: 'Salmon, please.' }, then: { es: 'Siobhán dice: «Muy bien. Son ocho euros».', en: 'Siobhán says: “Very good. That’s eight euros.”' } },
              { say: { es: 'Un cangrejo.', en: 'A crab.' }, then: { es: 'El cangrejo se mueve. ¡Está vivo! Tú gritas.', en: 'The crab moves. It is alive! You shout.' } },
              { say: { es: 'Nada. Solo miro.', en: 'Nothing. I am just looking.' }, then: { es: 'Siobhán te da un trozo de salmón ahumado para probar.', en: 'Siobhán gives you a piece of smoked salmon to try.' } },
            ],
          },
          twist: { es: 'Siobhán te pregunta: «¿Cocinas tú el pescado?». ¿Qué dices?', en: 'Siobhán asks you: “Do you cook the fish yourself?” What do you say?' },
          questions: [
            { q: { es: '¿Vas al mercado?', en: 'Do you go to the market?' }, help: { es: 'Sí, los sábados. / No, voy al supermercado.', en: 'Yes, on Saturdays. / No, I go to the supermarket.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Comes pescado?', en: 'Do you eat fish?' }, help: { es: 'Sí, mucho. / Poco. / No.', en: 'Yes, a lot. / A little. / No.' }, follow: [{ es: '¿Cuál te gusta?', en: 'Which one do you like?' }, { es: '¿Cuántas veces por semana?', en: 'How many times a week?' }] },
            { q: { es: '¿Te gusta el queso?', en: 'Do you like cheese?' }, help: { es: 'Sí, me encanta. / No mucho.', en: 'Yes, I love it. / Not much.' }, follow: [{ es: '¿Qué queso?', en: 'Which cheese?' }, { es: '¿Con qué lo comes?', en: 'What do you eat it with?' }] },
            { q: { es: '¿Qué compras siempre?', en: 'What do you always buy?' }, help: { es: 'Siempre compro pan, leche…', en: 'I always buy bread, milk…' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Cuánto cuesta?', en: 'How much does it cost?' }] },
          ],
          words: [{ es: 'el mercado', en: 'the market' }, { es: 'el pescado', en: 'the fish' }, { es: 'fresco', en: 'fresh' }, { es: 'el cangrejo', en: 'the crab' }, { es: 'probar', en: 'to try / taste' }],
        },
        A1: {
          scene: { es: 'El mercado tiene más de doscientos años. El puesto de Siobhán era de su abuela. Al lado hay un puesto de carne con «drisheen», una morcilla típica de Cork que pocos turistas se atreven a probar. Los vendedores se conocen todos y se hacen bromas de un puesto a otro.', en: 'The market is more than two hundred years old. Siobhán’s stall belonged to her grandmother. Next door there is a meat stall with “drisheen”, a Cork black pudding that few tourists dare to try. The traders all know each other and joke from one stall to the next.' },
          opener: { es: 'Mi abuela vendía aquí cuando el pescado se envolvía en periódico. Yo empecé a ayudarla los sábados a los diez años. Muchos clientes vienen desde hace cuarenta años: sé qué pescado quieren antes de que hablen. Una vez vino la reina de Inglaterra y le di la mano. ¿Tienes una tienda favorita donde te conocen?', en: 'My grandmother sold here when fish was wrapped in newspaper. I started helping her on Saturdays at ten. Many customers have been coming for forty years: I know which fish they want before they speak. Once the Queen of England came and I shook her hand. Do you have a favourite shop where they know you?' },
          decide: {
            ask: { es: 'El vendedor de al lado te ofrece drisheen. ¿Qué haces?', en: 'The trader next door offers you drisheen. What do you do?' },
            options: [
              { say: { es: 'Lo pruebo.', en: 'I try it.' }, then: { es: 'Tiene una textura muy blanda. Todos esperan tu reacción.', en: 'It has a very soft texture. Everyone waits for your reaction.' } },
              { say: { es: 'Pregunto qué tiene.', en: 'I ask what is in it.' }, then: { es: 'Es sangre de oveja y leche. Te lo piensas dos veces.', en: 'It is sheep’s blood and milk. You think twice.' } },
              { say: { es: 'Le digo que soy vegetariano.', en: 'I tell him I am vegetarian.' }, then: { es: 'Te manda al puesto de quesos. «Allí te van a querer más», dice.', en: 'He sends you to the cheese stall. “They’ll like you more there,” he says.' } },
            ],
          },
          twist: { es: 'Un supermercado grande abre al lado del mercado. Es más barato y está abierto hasta las diez. ¿Dónde comprarías tú?', en: 'A big supermarket opens next to the market. It is cheaper and open until ten. Where would you shop?' },
          questions: [
            { q: { es: '¿Tienes una tienda donde te conocen?', en: 'Do you have a shop where they know you?' }, help: { es: 'Sí, la panadería de… / No, siempre voy a sitios distintos.', en: 'Yes, the bakery at… / No, I always go to different places.' }, follow: [{ es: '¿Desde cuándo vas?', en: 'How long have you been going?' }, { es: '¿Qué compras?', en: 'What do you buy?' }] },
            { q: { es: '¿Qué comida típica de tu país no le gusta a los turistas?', en: 'What typical food from your country don’t tourists like?' }, help: { es: 'A muchos no les gusta…', en: 'Many don’t like…' }, follow: [{ es: '¿A ti te gusta?', en: 'Do you like it?' }, { es: '¿Cómo se prepara?', en: 'How is it made?' }] },
            { q: { es: '¿Ayudabas a tus padres o abuelos en su trabajo?', en: 'Did you help your parents or grandparents at work?' }, help: { es: 'Sí, los sábados… / No, nunca.', en: 'Yes, on Saturdays… / No, never.' }, follow: [{ es: '¿Qué hacías?', en: 'What did you do?' }, { es: '¿Te gustaba?', en: 'Did you like it?' }] },
            { q: { es: '¿Conociste a alguien famoso?', en: 'Have you met anyone famous?' }, help: { es: 'Sí, conocí a… en… / No, nunca.', en: 'Yes, I met… in… / No, never.' }, follow: [{ es: '¿Qué le dijiste?', en: 'What did you say to them?' }, { es: '¿Cómo era?', en: 'What were they like?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'el vendedor', en: 'the trader' }, { es: 'la morcilla', en: 'black pudding' }, { es: 'atreverse', en: 'to dare' }, { es: 'envolver', en: 'to wrap' }],
        },
        A2: {
          scene: { es: 'Es sábado y el mercado está lleno. Siobhán está sola porque su ayudante está enfermo. De repente, una clienta mayor se desmaya delante del puesto. Al mismo tiempo, un grupo de veinte turistas con guía llega y todos quieren fotos y preguntas.', en: 'It is Saturday and the market is packed. Siobhán is alone because her assistant is ill. Suddenly, an elderly customer faints in front of the stall. At the same time, a group of twenty tourists with a guide arrives and they all want photos and to ask questions.' },
          opener: { es: 'Es la señora Nora, viene todos los sábados desde que yo era niña. Siempre compra la misma caballa y siempre me cuenta de su gato. Hoy estaba pálida y le dije que se sentara, pero no me hizo caso. Necesito ayuda, ¡ya!', en: 'It is Mrs Nora, she has come every Saturday since I was a child. She always buys the same mackerel and always tells me about her cat. Today she was pale and I told her to sit down, but she didn’t listen. I need help, now!' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Me quedo con la señora Nora y llamo a una ambulancia.', en: 'I stay with Mrs Nora and call an ambulance.' }, then: { es: 'La ambulancia llega en diez minutos. Nora abre los ojos y pregunta por su caballa.', en: 'The ambulance arrives in ten minutes. Nora opens her eyes and asks about her mackerel.' } },
              { say: { es: 'Le pido al guía que se lleve al grupo a otro puesto.', en: 'I ask the guide to take the group to another stall.' }, then: { es: 'El guía entiende enseguida. Hay espacio y aire para Nora.', en: 'The guide understands immediately. There is space and air for Nora.' } },
              { say: { es: 'Atiendo el puesto mientras Siobhán ayuda a Nora.', en: 'I look after the stall while Siobhán helps Nora.' }, then: { es: 'Vendes tres salmones y confundes la caballa con el arenque. Nadie se queja.', en: 'You sell three salmon and mix up the mackerel with the herring. Nobody complains.' } },
            ],
          },
          twist: { es: 'Una semana después, la hija de Nora llega al mercado. Nora está bien, pero vive sola y la hija quiere llevarla a una residencia. Nora le pidió a Siobhán que convenza a su hija de que no. ¿Debería Siobhán meterse?', en: 'A week later, Nora’s daughter comes to the market. Nora is fine, but she lives alone and the daughter wants to move her to a care home. Nora has asked Siobhán to convince her daughter not to. Should Siobhán get involved?' },
          questions: [
            { q: { es: '¿Viviste una emergencia en un lugar público?', en: 'Have you experienced an emergency in a public place?' }, help: { es: 'Sí, una vez en el metro… / No, nunca.', en: 'Yes, once on the underground… / No, never.' }, follow: [{ es: '¿Quién ayudó?', en: 'Who helped?' }, { es: '¿Qué hiciste tú?', en: 'What did you do?' }] },
            { q: { es: '¿Conoces bien a algún vendedor o vecino mayor?', en: 'Do you know an older trader or neighbour well?' }, help: { es: 'Sí, a la señora del… / No mucho.', en: 'Yes, the lady at… / Not really.' }, follow: [{ es: '¿De qué hablan?', en: 'What do you talk about?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
            { q: { es: '¿Te metes en los problemas de los demás?', en: 'Do you get involved in other people’s problems?' }, help: { es: 'Solo si me lo piden. / Nunca. / Siempre, no puedo evitarlo.', en: 'Only if they ask. / Never. / Always, I can’t help it.' }, follow: [{ es: '¿Salió bien alguna vez?', en: 'Has it ever gone well?' }, { es: '¿Y mal?', en: 'And badly?' }] },
            { q: { es: '¿Cómo viven los mayores en tu país?', en: 'How do older people live in your country?' }, help: { es: 'Muchos viven con su familia / solos / en residencias…', en: 'Many live with family / alone / in care homes…' }, follow: [{ es: '¿Qué te parece?', en: 'What do you think of that?' }, { es: '¿Cómo te gustaría vivir tú?', en: 'How would you like to live?' }] },
          ],
          words: [{ es: 'desmayarse', en: 'to faint' }, { es: 'pálido', en: 'pale' }, { es: 'hacer caso', en: 'to listen / pay attention' }, { es: 'la residencia', en: 'the care home' }, { es: 'meterse', en: 'to get involved' }],
        },
        B1: {
          scene: { es: 'El ayuntamiento quiere renovar el mercado: más restaurantes, un bar de vinos y puestos de comida para llevar. Los alquileres de los puestos subirían un cuarenta por ciento. Los vendedores tradicionales de carne y pescado dicen que el mercado se convertiría en un centro comercial para turistas. Siobhán representa a los vendedores en la negociación.', en: 'The city council wants to renovate the market: more restaurants, a wine bar and takeaway food stalls. Stall rents would rise by forty percent. The traditional meat and fish traders say the market would become a shopping centre for tourists. Siobhán represents the traders in the negotiation.' },
          opener: { es: 'Lo curioso es que los turistas vienen precisamente porque aquí todavía hay pescaderas que gritan y carniceros que cortan delante de ti. Si lo convertimos en otro mercado bonito con tapas caras, ¿quién va a venir dentro de diez años? Pero tampoco puedo negar que el techo tiene goteras y que mis clientes de siempre se están muriendo. ¿Cómo se moderniza algo sin matarlo?', en: 'The curious thing is that tourists come precisely because there are still fishmongers who shout and butchers who cut in front of you. If we turn it into another pretty market with expensive tapas, who will come in ten years? But I can’t deny either that the roof leaks and that my lifelong customers are dying. How do you modernise something without killing it?' },
          decide: {
            ask: { es: '¿Qué propuesta debería llevar Siobhán a la reunión?', en: 'What proposal should Siobhán take to the meeting?' },
            options: [
              { say: { es: 'Aceptar la renovación si los puestos tradicionales pagan menos alquiler que los nuevos.', en: 'Accept the renovation if traditional stalls pay less rent than the new ones.' }, then: { es: 'El ayuntamiento acepta un descuento por cinco años. Después, nadie sabe.', en: 'The council agrees to a discount for five years. After that, nobody knows.' } },
              { say: { es: 'Pedir solo las reparaciones urgentes y rechazar lo demás.', en: 'Ask only for urgent repairs and reject the rest.' }, then: { es: 'Arreglan el techo. El proyecto de los restaurantes queda congelado por ahora.', en: 'They fix the roof. The restaurant project is frozen for now.' } },
              { say: { es: 'Proponer cocinar en el mercado el pescado y la carne que ellos mismos venden.', en: 'Propose cooking the fish and meat they sell themselves in the market.' }, then: { es: 'Abren una pequeña barra común. Los turistas comen y los vecinos siguen comprando.', en: 'They open a small shared counter. Tourists eat and locals keep buying.' } },
            ],
          },
          twist: { es: 'Durante la negociación, el concejal le ofrece a Siobhán, en privado, el mejor puesto del mercado renovado sin subida de alquiler si convence a los demás de aceptar. ¿Qué debería hacer con esa oferta?', en: 'During the negotiation, the councillor privately offers Siobhán the best stall in the renovated market with no rent increase if she convinces the others to accept. What should she do with that offer?' },
          questions: [
            { q: { es: '¿Cómo se moderniza algo sin perder su esencia?', en: 'How do you modernise something without losing its essence?' }, help: { es: 'Creo que hay que mantener… y cambiar…', en: 'I think you have to keep… and change…' }, follow: [{ es: '¿Conoces un buen ejemplo?', en: 'Do you know a good example?' }, { es: '¿Y uno malo?', en: 'And a bad one?' }] },
            { q: { es: '¿Qué harías si te ofrecieran un privilegio a cambio de convencer a otros?', en: 'What would you do if you were offered a privilege in exchange for convincing others?' }, help: { es: 'Lo contaría a todos porque… / Lo pensaría si…', en: 'I would tell everyone because… / I would think about it if…' }, follow: [{ es: '¿Te pasó algo parecido?', en: 'Has something similar happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Los mercados tradicionales tienen futuro?', en: 'Do traditional markets have a future?' }, help: { es: 'Sí, si… / Me temo que no, porque…', en: 'Yes, if… / I’m afraid not, because…' }, follow: [{ es: '¿Cómo es el mercado de tu ciudad?', en: 'What is your city’s market like?' }, { es: '¿Quién compra allí?', en: 'Who shops there?' }] },
            { q: { es: '¿Representarías a tus compañeros en una negociación difícil?', en: 'Would you represent your colleagues in a difficult negotiation?' }, help: { es: 'Sí, porque se me da bien… / No, prefiero que otro…', en: 'Yes, because I’m good at… / No, I prefer someone else…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Qué es lo más difícil?', en: 'What is the hardest part?' }] },
          ],
          words: [{ es: 'renovar', en: 'to renovate' }, { es: 'la gotera', en: 'the leak' }, { es: 'el concejal', en: 'the councillor' }, { es: 'congelado', en: 'frozen / on hold' }, { es: 'la esencia', en: 'the essence' }],
        },
      },
    },
    // ------------------------------------------------------------ Cobh
    {
      id: 'cobh',
      name: { es: 'El puerto de Cobh', en: 'Cobh harbour' },
      who: { name: 'Ciarán', role: { es: 'guía del museo de la emigración', en: 'emigration museum guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un puerto con casas de colores en una colina. Hay una catedral grande arriba. Ciarán trabaja en un museo. En el museo hay maletas viejas.', en: 'It is a harbour with colourful houses on a hill. There is a big cathedral at the top. Ciarán works in a museum. In the museum there are old suitcases.' },
          opener: { es: '¡Hola! Soy Ciarán. De este puerto salían los barcos a América. El Titanic paró aquí. ¿Quieres ver el museo?', en: 'Hello! I am Ciarán. Ships left this harbour for America. The Titanic stopped here. Do you want to see the museum?' },
          decide: {
            ask: { es: '¿Qué miras primero?', en: 'What do you look at first?' },
            options: [
              { say: { es: 'Las maletas viejas.', en: 'The old suitcases.' }, then: { es: 'Una maleta es muy pequeña. «Era todo lo que tenían», dice Ciarán.', en: 'One suitcase is very small. “It was all they had,” says Ciarán.' } },
              { say: { es: 'Las fotos del Titanic.', en: 'The photos of the Titanic.' }, then: { es: 'Ves la última foto del Titanic. Es en este puerto.', en: 'You see the last photo of the Titanic. It is in this harbour.' } },
              { say: { es: 'El mapa del mundo.', en: 'The world map.' }, then: { es: 'Hay líneas desde Irlanda a América, Australia y Argentina.', en: 'There are lines from Ireland to America, Australia and Argentina.' } },
            ],
          },
          twist: { es: 'Ciarán te da un billete viejo con un nombre. «Busca a esta persona en el museo», dice. ¿Buscas?', en: 'Ciarán gives you an old ticket with a name. “Look for this person in the museum,” he says. Do you look?' },
          questions: [
            { q: { es: '¿Viajaste en barco grande?', en: 'Have you travelled on a big ship?' }, help: { es: 'Sí, a… / No, nunca.', en: 'Yes, to… / No, never.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Cuánto tiempo?', en: 'How long?' }] },
            { q: { es: '¿Qué llevas en tu maleta?', en: 'What do you take in your suitcase?' }, help: { es: 'Llevo ropa, libros…', en: 'I take clothes, books…' }, follow: [{ es: '¿Es grande o pequeña?', en: 'Is it big or small?' }, { es: '¿Qué olvidas?', en: 'What do you forget?' }] },
            { q: { es: '¿Te gustan los museos?', en: 'Do you like museums?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Conoces la película Titanic?', en: 'Do you know the film Titanic?' }, help: { es: 'Sí, la vi. / No, no la vi.', en: 'Yes, I saw it. / No, I haven’t seen it.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Lloraste?', en: 'Did you cry?' }] },
          ],
          words: [{ es: 'el puerto', en: 'the harbour' }, { es: 'la maleta', en: 'the suitcase' }, { es: 'la colina', en: 'the hill' }, { es: 'el museo', en: 'the museum' }, { es: 'el billete', en: 'the ticket' }],
        },
        A1: {
          scene: { es: 'En el museo hay una estatua de bronce: Annie Moore y sus dos hermanos pequeños. Annie fue la primera persona que entró en Estados Unidos por la isla de Ellis, en mil ochocientos noventa y dos. Tenía diecisiete años. Ciarán te cuenta que más de dos millones y medio de personas salieron por este puerto.', en: 'In the museum there is a bronze statue: Annie Moore and her two little brothers. Annie was the first person to enter the United States through Ellis Island, in 1892. She was seventeen. Ciarán tells you that more than two and a half million people left through this harbour.' },
          opener: { es: 'Annie viajó doce días con sus hermanos. Sus padres ya estaban en Nueva York. Ella cumplió diecisiete años en el barco. Casi todas las familias irlandesas tienen a alguien que se fue: mi bisabuelo se fue a Boston y nunca volvió. ¿En tu familia alguien emigró?', en: 'Annie travelled for twelve days with her brothers. Her parents were already in New York. She turned seventeen on the ship. Almost every Irish family has someone who left: my great-grandfather went to Boston and never came back. Did anyone in your family emigrate?' },
          decide: {
            ask: { es: 'Ciarán te deja buscar un apellido en el ordenador del museo. ¿Qué buscas?', en: 'Ciarán lets you search a surname on the museum computer. What do you search for?' },
            options: [
              { say: { es: 'Mi propio apellido.', en: 'My own surname.' }, then: { es: 'Aparece una persona con tu apellido que salió en mil novecientos diez. ¿Será familia?', en: 'A person with your surname appears who left in 1910. Could they be family?' } },
              { say: { es: 'El apellido de Ciarán.', en: 'Ciarán’s surname.' }, then: { es: 'Encuentran el billete de su bisabuelo. Ciarán se emociona.', en: 'They find his great-grandfather’s ticket. Ciarán is moved.' } },
              { say: { es: 'Un apellido famoso.', en: 'A famous surname.' }, then: { es: 'Buscas «Kennedy». Hay cientos. Ciarán se ríe.', en: 'You search for “Kennedy”. There are hundreds. Ciarán laughs.' } },
            ],
          },
          twist: { es: 'Hoy muchos jóvenes irlandeses también se van, a Australia o a Canadá. Ciarán dice que su hija se va el mes que viene. ¿Qué le dices?', en: 'Today many young Irish people also leave, for Australia or Canada. Ciarán says his daughter is leaving next month. What do you say to him?' },
          questions: [
            { q: { es: '¿En tu familia alguien emigró?', en: 'Did anyone in your family emigrate?' }, help: { es: 'Sí, mi… se fue a… / No, todos están aquí.', en: 'Yes, my… went to… / No, everyone is here.' }, follow: [{ es: '¿Por qué se fue?', en: 'Why did they leave?' }, { es: '¿Volvió?', en: 'Did they come back?' }] },
            { q: { es: '¿Qué significa tu apellido?', en: 'What does your surname mean?' }, help: { es: 'Significa… / No sé.', en: 'It means… / I don’t know.' }, follow: [{ es: '¿De dónde viene?', en: 'Where does it come from?' }, { es: '¿Es común?', en: 'Is it common?' }] },
            { q: { es: '¿Qué hacías a los diecisiete años?', en: 'What were you doing at seventeen?' }, help: { es: 'Estudiaba… / Trabajaba en…', en: 'I was studying… / I was working at…' }, follow: [{ es: '¿Eras feliz?', en: 'Were you happy?' }, { es: '¿Qué querías ser?', en: 'What did you want to be?' }] },
            { q: { es: '¿Te irías a vivir a otro país?', en: 'Would you go and live in another country?' }, help: { es: 'Sí, a… / No, me quedo aquí.', en: 'Yes, to… / No, I’m staying here.' }, follow: [{ es: '¿Por qué allí?', en: 'Why there?' }, { es: '¿Qué extrañarías?', en: 'What would you miss?' }] },
          ],
          words: [{ es: 'emigrar', en: 'to emigrate' }, { es: 'el bronce', en: 'bronze' }, { es: 'cumplir años', en: 'to have a birthday' }, { es: 'el bisabuelo', en: 'the great-grandfather' }, { es: 'emocionarse', en: 'to be moved' }],
        },
        A2: {
          scene: { es: 'Un hombre de setenta años llega desde Chicago con una carta antigua. Es de su abuela, escrita en Cobh la noche antes de embarcar en mil novecientos doce. En la carta habla de un chico del pueblo que no pudo venir con ella. El hombre quiere saber qué pasó con ese chico.', en: 'A seventy-year-old man arrives from Chicago with an old letter. It is from his grandmother, written in Cobh the night before she boarded in 1912. In the letter she talks about a boy from the village who couldn’t come with her. The man wants to know what happened to that boy.' },
          opener: { es: 'La carta dice: «Mañana me voy y Michael se queda. Prometió seguirme en un año. Si no viene, voy a esperar igual». El señor me contó que su abuela se casó con otro hombre en Chicago, pero que nunca se quitó un anillo pequeño de hierro. Tenemos registros de todos los pasajeros. ¿Crees que deberíamos buscar a Michael?', en: 'The letter says: “Tomorrow I leave and Michael stays. He promised to follow me in a year. If he doesn’t come, I will wait anyway.” The gentleman told me his grandmother married another man in Chicago, but never took off a small iron ring. We have records of all the passengers. Do you think we should look for Michael?' },
          decide: {
            ask: { es: '¿Cómo ayudas a buscar a Michael?', en: 'How do you help look for Michael?' },
            options: [
              { say: { es: 'Buscamos en las listas de barcos de los años siguientes.', en: 'We search the passenger lists for the following years.' }, then: { es: 'Encuentran a un Michael del mismo pueblo que viajó en mil novecientos catorce… a Buenos Aires.', en: 'They find a Michael from the same village who travelled in 1914… to Buenos Aires.' } },
              { say: { es: 'Preguntamos en la iglesia del pueblo por los registros.', en: 'We ask the village church for its records.' }, then: { es: 'El cura encuentra que Michael se casó en el pueblo en mil novecientos veinte. Nunca se fue.', en: 'The priest finds that Michael married in the village in 1920. He never left.' } },
              { say: { es: 'Mejor no buscar: es el secreto de su abuela.', en: 'Better not to look: it is his grandmother’s secret.' }, then: { es: 'El señor lo piensa. «Ella lo guardó cien años. Puede guardarlo un poco más».', en: 'The gentleman thinks about it. “She kept it for a hundred years. She can keep it a little longer.”' } },
            ],
          },
          twist: { es: 'Encuentran a una nieta de Michael que vive en Cork. Ella también tiene una carta: la que Michael escribió y nunca envió. ¿Deberían leerla juntos?', en: 'They find one of Michael’s granddaughters who lives in Cork. She also has a letter: the one Michael wrote and never sent. Should they read it together?' },
          questions: [
            { q: { es: '¿Tienes cartas o mensajes antiguos guardados?', en: 'Do you keep old letters or messages?' }, help: { es: 'Sí, tengo cartas de… / No, borro todo.', en: 'Yes, I have letters from… / No, I delete everything.' }, follow: [{ es: '¿Las lees a veces?', en: 'Do you read them sometimes?' }, { es: '¿Quién las escribió?', en: 'Who wrote them?' }] },
            { q: { es: '¿Investigaste alguna vez la historia de tu familia?', en: 'Have you ever researched your family history?' }, help: { es: 'Sí, y me enteré de que… / No, pero me gustaría.', en: 'Yes, I discovered that… / No, but I would like to.' }, follow: [{ es: '¿Qué te sorprendió?', en: 'What surprised you?' }, { es: '¿A quién preguntaste?', en: 'Who did you ask?' }] },
            { q: { es: '¿Hay secretos que es mejor no descubrir?', en: 'Are there secrets it is better not to uncover?' }, help: { es: 'Sí, cuando… / No, la verdad siempre…', en: 'Yes, when… / No, the truth always…' }, follow: [{ es: '¿Conoces un caso?', en: 'Do you know a case?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿Cumpliste alguna vez una promesa difícil?', en: 'Have you ever kept a difficult promise?' }, help: { es: 'Sí, prometí… y lo hice. / Una vez no pude…', en: 'Yes, I promised… and did it. / Once I couldn’t…' }, follow: [{ es: '¿A quién?', en: 'To whom?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
          ],
          words: [{ es: 'embarcar', en: 'to board' }, { es: 'el anillo', en: 'the ring' }, { es: 'el registro', en: 'the record' }, { es: 'el cura', en: 'the priest' }, { es: 'enviar', en: 'to send' }],
        },
        B1: {
          scene: { es: 'El museo prepara una exposición nueva: «Irlanda, país de acogida». Hoy uno de cada cinco habitantes de Irlanda nació en otro país. Ciarán quiere poner, al lado de las maletas de los emigrantes de mil novecientos, las mochilas de refugiados que llegaron el año pasado. Algunos miembros del patronato dicen que mezclar las dos historias es hacer política.', en: 'The museum is preparing a new exhibition: “Ireland, a country of welcome”. Today one in five people in Ireland was born in another country. Ciarán wants to put the backpacks of refugees who arrived last year next to the suitcases of the 1900s emigrants. Some trustees say that mixing the two stories is politics.' },
          opener: { es: 'Mis bisabuelos llegaron a Boston y en las ventanas había carteles que decían «No se aceptan irlandeses». Hoy en Cork hay gente que dice cosas parecidas de los que llegan. Para mí es la misma historia contada desde el otro lado del mar. Pero un museo no debería decirle a la gente qué pensar. ¿O sí? ¿Dónde termina contar la historia y empieza dar una opinión?', en: 'My great-grandparents arrived in Boston and there were signs in the windows saying “No Irish need apply”. Today in Cork there are people who say similar things about those who arrive. For me it is the same story told from the other side of the sea. But a museum shouldn’t tell people what to think. Or should it? Where does telling history end and giving an opinion begin?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Ciarán?', en: 'What do you advise Ciarán?' },
            options: [
              { say: { es: 'Hacer la exposición con testimonios en primera persona, sin comentarios del museo.', en: 'Do the exhibition with first-person testimonies, without comments from the museum.' }, then: { es: 'Los visitantes leen las voces de ayer y de hoy y sacan sus propias conclusiones. Las críticas bajan.', en: 'Visitors read the voices of then and now and draw their own conclusions. The criticism dies down.' } },
              { say: { es: 'Separar las dos historias en salas distintas.', en: 'Separate the two stories into different rooms.' }, then: { es: 'El patronato aprueba, pero muchos visitantes no entran en la segunda sala.', en: 'The trustees approve, but many visitors don’t go into the second room.' } },
              { say: { es: 'Hacerla como la imaginó, aunque haya polémica.', en: 'Do it as he imagined it, even if there is controversy.' }, then: { es: 'Sale en los periódicos nacionales. Llegan más visitantes, y también algunas amenazas.', en: 'It appears in the national papers. More visitors come, and also some threats.' } },
            ],
          },
          twist: { es: 'Una refugiada siria que trabaja como voluntaria en el museo no quiere que su mochila y su historia aparezcan: tiene miedo de que su familia en Siria tenga problemas. Pero su historia es la más fuerte de todas. ¿Qué hace Ciarán?', en: 'A Syrian refugee who volunteers at the museum doesn’t want her backpack and story to appear: she is afraid her family in Syria could get into trouble. But her story is the most powerful of all. What does Ciarán do?' },
          questions: [
            { q: { es: '¿Un museo debe ser neutral?', en: 'Should a museum be neutral?' }, help: { es: 'Sí, porque… / No existe la neutralidad total porque…', en: 'Yes, because… / Total neutrality doesn’t exist because…' }, follow: [{ es: '¿Qué museo te hizo pensar?', en: 'Which museum made you think?' }, { es: '¿Sobre qué?', en: 'About what?' }] },
            { q: { es: '¿Tu país fue más de emigrantes o de inmigrantes?', en: 'Has your country been more a country of emigrants or immigrants?' }, help: { es: 'Históricamente… pero hoy…', en: 'Historically… but today…' }, follow: [{ es: '¿Cómo se trata a los que llegan?', en: 'How are newcomers treated?' }, { es: '¿Cambió con los años?', en: 'Has it changed over the years?' }] },
            { q: { es: '¿Las historias del pasado ayudan a entender el presente?', en: 'Do stories from the past help us understand the present?' }, help: { es: 'Sí, por ejemplo… / A veces se usan mal para…', en: 'Yes, for example… / Sometimes they are misused to…' }, follow: [{ es: '¿Qué historia aprendiste en la escuela que te sirve hoy?', en: 'What history did you learn at school that helps you today?' }, { es: '¿Cuál faltaba?', en: 'Which was missing?' }] },
            { q: { es: '¿Contar una historia real puede poner a alguien en peligro?', en: 'Can telling a true story put someone in danger?' }, help: { es: 'Sí, si… / Por eso hay que…', en: 'Yes, if… / That’s why you have to…' }, follow: [{ es: '¿Qué harías tú en el lugar de Ciarán?', en: 'What would you do in Ciarán’s place?' }, { es: '¿Y en el de la refugiada?', en: 'And in the refugee’s place?' }] },
          ],
          words: [{ es: 'la acogida', en: 'welcome / reception' }, { es: 'el patronato', en: 'the board of trustees' }, { es: 'el testimonio', en: 'the testimony' }, { es: 'la polémica', en: 'the controversy' }, { es: 'la amenaza', en: 'the threat' }],
        },
      },
    },
    // ------------------------------------------------------------ Blarney Castle
    {
      id: 'blarney',
      name: { es: 'El castillo de Blarney', en: 'Blarney Castle' },
      who: { name: 'Dermot', role: { es: 'guardián de la piedra', en: 'keeper of the stone' } },
      levels: {
        A0: {
          scene: { es: 'Es un castillo viejo de piedra gris. Arriba, en la torre, hay una piedra famosa. Para besarla, te acuestas de espaldas. Dermot te ayuda.', en: 'It is an old grey stone castle. At the top, in the tower, there is a famous stone. To kiss it, you lie on your back. Dermot helps you.' },
          opener: { es: '¡Hola! Soy Dermot. Esta es la piedra de Blarney. Si la besas, hablas muy bien. ¿Quieres besarla?', en: 'Hello! I am Dermot. This is the Blarney Stone. If you kiss it, you speak very well. Do you want to kiss it?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Sí, la beso.', en: 'Yes, I kiss it.' }, then: { es: 'Dermot te sostiene. ¡Lo hiciste! Ahora hablas mucho.', en: 'Dermot holds you. You did it! Now you talk a lot.' } },
              { say: { es: 'No, tengo miedo.', en: 'No, I am scared.' }, then: { es: 'Dermot dice: «No pasa nada. La vista es bonita igual».', en: 'Dermot says: “No problem. The view is beautiful anyway.”' } },
              { say: { es: 'Primero miro a otra persona.', en: 'First I watch someone else.' }, then: { es: 'Un señor la besa y grita de alegría. Ahora quieres probar.', en: 'A man kisses it and shouts with joy. Now you want to try.' } },
            ],
          },
          twist: { es: 'Hay ciento veinte escalones para bajar. Son estrechos y hay mucha gente. ¿Bajas ahora o esperas?', en: 'There are a hundred and twenty steps down. They are narrow and there are lots of people. Do you go down now or wait?' },
          questions: [
            { q: { es: '¿Hablas mucho o poco?', en: 'Do you talk a lot or a little?' }, help: { es: 'Hablo mucho. / Hablo poco.', en: 'I talk a lot. / I talk a little.' }, follow: [{ es: '¿Con quién hablas más?', en: 'Who do you talk to most?' }, { es: '¿Y en español?', en: 'And in Spanish?' }] },
            { q: { es: '¿Visitaste un castillo?', en: 'Have you visited a castle?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Era grande?', en: 'Was it big?' }, { es: '¿Subiste a la torre?', en: 'Did you go up the tower?' }] },
            { q: { es: '¿Crees en la suerte?', en: 'Do you believe in luck?' }, help: { es: 'Sí, un poco. / No.', en: 'Yes, a little. / No.' }, follow: [{ es: '¿Tienes un número de la suerte?', en: 'Do you have a lucky number?' }, { es: '¿Cuál?', en: 'Which one?' }] },
            { q: { es: '¿Tienes miedo de las alturas?', en: 'Are you afraid of heights?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, very. / No, not at all.' }, follow: [{ es: '¿Subes a lugares altos?', en: 'Do you go up high places?' }, { es: '¿Qué haces?', en: 'What do you do?' }] },
          ],
          words: [{ es: 'el castillo', en: 'the castle' }, { es: 'besar', en: 'to kiss' }, { es: 'la torre', en: 'the tower' }, { es: 'de espaldas', en: 'on your back' }, { es: 'la suerte', en: 'luck' }],
        },
        A1: {
          scene: { es: 'Alrededor del castillo hay jardines enormes. Hay un «jardín venenoso» con plantas peligrosas, una cueva de brujas y unas rocas con nombres de leyenda. Dermot trabaja aquí desde hace veinte años y conoce todas las historias.', en: 'Around the castle there are huge gardens. There is a “poison garden” with dangerous plants, a witch’s cave and rocks with legendary names. Dermot has worked here for twenty years and knows all the stories.' },
          opener: { es: 'La palabra «blarney» en inglés significa hablar muy bonito para convencer, pero sin decir la verdad del todo. Dicen que un señor de este castillo engañaba a la reina Isabel con cartas preciosas que nunca decían nada. ¿Conoces a alguien que habla muy bonito pero no dice nada?', en: 'The word “blarney” in English means talking very sweetly to persuade, but without telling the whole truth. They say a lord of this castle tricked Queen Elizabeth with beautiful letters that never said anything. Do you know someone who talks very nicely but says nothing?' },
          decide: {
            ask: { es: 'Dermot te ofrece visitar un lugar del jardín. ¿Cuál eliges?', en: 'Dermot offers to show you a place in the garden. Which do you choose?' },
            options: [
              { say: { es: 'El jardín venenoso.', en: 'The poison garden.' }, then: { es: 'Hay plantas en jaulas. Dermot dice: «No toques nada, de verdad».', en: 'There are plants in cages. Dermot says: “Don’t touch anything, really.”' } },
              { say: { es: 'La cueva de la bruja.', en: 'The witch’s cave.' }, then: { es: 'Dermot cuenta que la bruja da deseos a quien baja los escalones hacia atrás.', en: 'Dermot says the witch grants wishes to anyone who goes down the steps backwards.' } },
              { say: { es: 'El lago tranquilo.', en: 'The quiet lake.' }, then: { es: 'Ves una garza que pesca. Dermot se sienta y no cuenta ninguna historia.', en: 'You see a heron fishing. Dermot sits down and doesn’t tell any story.' } },
            ],
          },
          twist: { es: 'Un turista te dice que los trabajadores del castillo hacen pis en la piedra por la noche, para reírse de los turistas. Dermot se pone rojo. ¿Le crees al turista?', en: 'A tourist tells you the castle workers pee on the stone at night to laugh at the tourists. Dermot goes red. Do you believe the tourist?' },
          questions: [
            { q: { es: '¿Conoces a alguien que habla bonito pero no dice nada?', en: 'Do you know someone who talks nicely but says nothing?' }, help: { es: 'Sí, un jefe / un político…', en: 'Yes, a boss / a politician…' }, follow: [{ es: '¿Qué dice?', en: 'What do they say?' }, { es: '¿Lo crees?', en: 'Do you believe them?' }] },
            { q: { es: '¿Crees en las leyendas?', en: 'Do you believe in legends?' }, help: { es: 'Algunas sí. / No, son cuentos.', en: 'Some, yes. / No, they’re stories.' }, follow: [{ es: '¿Cuál es tu favorita?', en: 'Which is your favourite?' }, { es: '¿Quién te la contó?', en: 'Who told it to you?' }] },
            { q: { es: '¿Tienes plantas en casa?', en: 'Do you have plants at home?' }, help: { es: 'Sí, tengo… / No, se me mueren.', en: 'Yes, I have… / No, they die on me.' }, follow: [{ es: '¿Quién las cuida?', en: 'Who looks after them?' }, { es: '¿Cuál es tu favorita?', en: 'Which is your favourite?' }] },
            { q: { es: '¿Qué deseo pedirías?', en: 'What wish would you make?' }, help: { es: 'Pediría…', en: 'I would wish for…' }, follow: [{ es: '¿Para ti o para otra persona?', en: 'For you or for someone else?' }, { es: '¿Es posible?', en: 'Is it possible?' }] },
          ],
          words: [{ es: 'venenoso', en: 'poisonous' }, { es: 'la bruja', en: 'the witch' }, { es: 'la cueva', en: 'the cave' }, { es: 'engañar', en: 'to trick / deceive' }, { es: 'el deseo', en: 'the wish' }],
        },
        A2: {
          scene: { es: 'Es un día de lluvia y hay poca gente. Dermot te cuenta un secreto: él era muy tímido de joven. En la escuela no podía hablar en público. Una noche, solo, subió a la torre y besó la piedra. Al día siguiente pasó algo que le cambió la vida.', en: 'It is a rainy day and there are few people. Dermot tells you a secret: he was very shy as a young man. At school he couldn’t speak in public. One night, alone, he went up the tower and kissed the stone. The next day something happened that changed his life.' },
          opener: { es: 'Al día siguiente había un concurso de debate en la escuela y el profesor me eligió a mí, sin preguntarme. Yo temblaba. Pero cuando empecé a hablar, las palabras salían solas. Gané. ¿Fue la piedra o fue que por fin me atreví? Nunca lo voy a saber. ¿Tú crees que algo así puede funcionar?', en: 'The next day there was a debating competition at school and the teacher picked me, without asking. I was shaking. But when I started speaking, the words came out on their own. I won. Was it the stone or was it that I finally dared? I will never know. Do you think something like that can work?' },
          decide: {
            ask: { es: 'Dermot te pregunta qué crees. ¿Qué respondes?', en: 'Dermot asks what you think. How do you answer?' },
            options: [
              { say: { es: 'Fue la piedra: hay cosas que no se explican.', en: 'It was the stone: some things can’t be explained.' }, then: { es: 'Dermot sonríe: «Eso dice mi madre. Y ella besó la piedra tres veces».', en: 'Dermot smiles: “That’s what my mother says. And she kissed the stone three times.”' } },
              { say: { es: 'Fuiste tú: la piedra solo te dio valor.', en: 'It was you: the stone just gave you courage.' }, then: { es: '«Puede ser», dice Dermot. «Pero el valor tenía que venir de algún lado».', en: '“Maybe,” says Dermot. “But the courage had to come from somewhere.”' } },
              { say: { es: 'Fue el profesor: confió en ti.', en: 'It was the teacher: he trusted you.' }, then: { es: 'Dermot se queda callado. «Nunca le di las gracias», dice. «Todavía vive».', en: 'Dermot goes quiet. “I never thanked him,” he says. “He’s still alive.”' } },
            ],
          },
          twist: { es: 'Dermot decide visitar a su viejo profesor, que tiene noventa años y vive en una residencia. Te pide que lo acompañes porque tiene miedo de no saber qué decir. ¿Vas?', en: 'Dermot decides to visit his old teacher, who is ninety and lives in a care home. He asks you to go with him because he is afraid he won’t know what to say. Do you go?' },
          questions: [
            { q: { es: '¿Eras tímido de niño?', en: 'Were you shy as a child?' }, help: { es: 'Sí, mucho. / No, hablaba con todos.', en: 'Yes, very. / No, I talked to everyone.' }, follow: [{ es: '¿Cambiaste?', en: 'Did you change?' }, { es: '¿Qué te ayudó?', en: 'What helped you?' }] },
            { q: { es: '¿Tuviste un profesor que te cambió la vida?', en: 'Did you have a teacher who changed your life?' }, help: { es: 'Sí, mi profesora de… porque…', en: 'Yes, my… teacher because…' }, follow: [{ es: '¿Le diste las gracias?', en: 'Did you thank them?' }, { es: '¿Sabes dónde está ahora?', en: 'Do you know where they are now?' }] },
            { q: { es: '¿Haces algo para tener suerte antes de algo importante?', en: 'Do you do something for luck before something important?' }, help: { es: 'Sí, siempre llevo… / No, no creo en eso.', en: 'Yes, I always wear… / No, I don’t believe in that.' }, follow: [{ es: '¿Funciona?', en: 'Does it work?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
            { q: { es: '¿Cómo te sentiste la primera vez que hablaste en público?', en: 'How did you feel the first time you spoke in public?' }, help: { es: 'Estaba muy nervioso porque…', en: 'I was very nervous because…' }, follow: [{ es: '¿Cómo salió?', en: 'How did it go?' }, { es: '¿Y ahora?', en: 'And now?' }] },
          ],
          words: [{ es: 'tímido', en: 'shy' }, { es: 'temblar', en: 'to shake / tremble' }, { es: 'atreverse', en: 'to dare' }, { es: 'el valor', en: 'courage' }, { es: 'el debate', en: 'the debate' }],
        },
        B1: {
          scene: { es: 'Después de la pandemia, el castillo prohibió besar la piedra durante dos años. Ahora vuelve a permitirlo, pero un grupo de médicos publicó un artículo que dice que la piedra es «la superficie más sucia de Irlanda». Los dueños del castillo, una familia que vive allí desde hace siglos, tienen que decidir si mantienen la tradición.', en: 'After the pandemic, the castle banned kissing the stone for two years. Now it allows it again, but a group of doctors has published an article saying the stone is “the dirtiest surface in Ireland”. The castle’s owners, a family who have lived there for centuries, have to decide whether to keep the tradition.' },
          opener: { es: 'Cada beso se limpia con un desinfectante, pero no sirve de mucho si hay cuatrocientas personas por hora. Los médicos tienen razón en los datos. Pero si quitamos el beso, el castillo es un castillo más entre mil. Viene gente que esperó toda la vida para esto. ¿Hasta dónde se puede proteger a la gente de sus propias decisiones?', en: 'Every kiss is wiped with disinfectant, but it doesn’t help much when there are four hundred people an hour. The doctors are right about the data. But if we remove the kiss, the castle is just one castle among a thousand. People come who have waited their whole lives for this. How far can you protect people from their own decisions?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a la familia?', en: 'What do you advise the family?' },
            options: [
              { say: { es: 'Mantener el beso y poner un cartel claro sobre el riesgo.', en: 'Keep the kiss and put up a clear sign about the risk.' }, then: { es: 'Casi nadie lee el cartel. El número de visitantes sube un diez por ciento.', en: 'Almost nobody reads the sign. Visitor numbers go up ten percent.' } },
              { say: { es: 'Poner un cristal fino que se cambia cada hora.', en: 'Put a thin glass cover that is changed every hour.' }, then: { es: 'Los tradicionalistas dicen que ya no es la piedra. Las críticas en internet se multiplican.', en: 'Traditionalists say it isn’t the stone any more. Online criticism multiplies.' } },
              { say: { es: 'Limitar el número de besos por día, con reserva previa.', en: 'Limit the number of kisses per day, with advance booking.' }, then: { es: 'Las reservas se agotan en minutos. Aparece una reventa de entradas carísima.', en: 'The bookings sell out in minutes. Very expensive ticket touting appears.' } },
            ],
          },
          twist: { es: 'Un empleado le cuenta a Dermot que la piedra original se rompió hace años y que la actual es una copia. Nadie lo sabe fuera de la familia. ¿Debería contarse?', en: 'An employee tells Dermot that the original stone broke years ago and the current one is a copy. Nobody outside the family knows. Should it be made public?' },
          questions: [
            { q: { es: '¿Hasta dónde hay que proteger a la gente de sus propias decisiones?', en: 'How far should people be protected from their own decisions?' }, help: { es: 'Creo que cada uno debe… salvo cuando…', en: 'I think everyone should… except when…' }, follow: [{ es: '¿Qué ley de tu país te parece exagerada?', en: 'Which law in your country seems excessive to you?' }, { es: '¿Y cuál falta?', en: 'And which one is missing?' }] },
            { q: { es: '¿Una tradición pierde valor si se descubre que no es «original»?', en: 'Does a tradition lose value if it turns out not to be “original”?' }, help: { es: 'No, porque lo importante es… / Sí, porque engaña a…', en: 'No, because what matters is… / Yes, because it deceives…' }, follow: [{ es: '¿Conoces un caso así?', en: 'Do you know a case like this?' }, { es: '¿Cambió algo?', en: 'Did anything change?' }] },
            { q: { es: '¿Qué tradiciones cambiaron después de la pandemia?', en: 'What traditions changed after the pandemic?' }, help: { es: 'Por ejemplo, ya no… / Volvimos a…', en: 'For example, we no longer… / We went back to…' }, follow: [{ es: '¿Algo mejoró?', en: 'Did anything improve?' }, { es: '¿Qué extrañas?', en: 'What do you miss?' }] },
            { q: { es: '¿Harías algo poco higiénico por una experiencia única?', en: 'Would you do something unhygienic for a unique experience?' }, help: { es: 'Sí, por ejemplo… / No, nunca.', en: 'Yes, for example… / No, never.' }, follow: [{ es: '¿Qué es lo más raro que hiciste en un viaje?', en: 'What is the strangest thing you did on a trip?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
          ],
          words: [{ es: 'la superficie', en: 'the surface' }, { es: 'el desinfectante', en: 'the disinfectant' }, { es: 'agotarse', en: 'to sell out' }, { es: 'la reventa', en: 'ticket touting / resale' }, { es: 'la reserva previa', en: 'advance booking' }],
        },
      },
    },
    // ------------------------------------------------------------ Kinsale
    {
      id: 'kinsale',
      name: { es: 'El puerto de Kinsale', en: 'Kinsale harbour' },
      who: { name: 'Gráinne', role: { es: 'chef de restaurante', en: 'restaurant chef' } },
      levels: {
        A0: {
          scene: { es: 'Es un pueblo con casas rojas, azules y amarillas. Hay barcos de vela en el puerto. Gráinne es cocinera. Su restaurante tiene mesas en la calle.', en: 'It is a town with red, blue and yellow houses. There are sailing boats in the harbour. Gráinne is a cook. Her restaurant has tables in the street.' },
          opener: { es: '¡Bienvenido! Soy Gráinne. Hoy hay sopa de pescado, mejillones y pastel de manzana. ¿Tienes hambre?', en: 'Welcome! I am Gráinne. Today there is fish soup, mussels and apple pie. Are you hungry?' },
          decide: {
            ask: { es: '¿Qué pides?', en: 'What do you order?' },
            options: [
              { say: { es: 'La sopa de pescado.', en: 'The fish soup.' }, then: { es: 'La sopa está muy caliente y tiene pan al lado. ¡Perfecta!', en: 'The soup is very hot and comes with bread. Perfect!' } },
              { say: { es: 'Los mejillones.', en: 'The mussels.' }, then: { es: 'Llegan muchos mejillones en una olla negra. Comes con las manos.', en: 'Lots of mussels arrive in a black pot. You eat with your hands.' } },
              { say: { es: 'Solo el pastel de manzana.', en: 'Just the apple pie.' }, then: { es: 'Gráinne ríe: «¡Primero el postre! Me gusta».', en: 'Gráinne laughs: “Dessert first! I like it.”' } },
            ],
          },
          twist: { es: 'Una gaviota grande roba pan de tu mesa. ¿Qué haces?', en: 'A big seagull steals bread from your table. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta comer fuera?', en: 'Do you like eating out?' }, help: { es: 'Sí, mucho. / No, prefiero en casa.', en: 'Yes, a lot. / No, I prefer at home.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Qué comes de postre?', en: 'What do you have for dessert?' }, help: { es: 'Como fruta / helado / pastel…', en: 'I have fruit / ice cream / cake…' }, follow: [{ es: '¿Cocinas postres?', en: 'Do you make desserts?' }, { es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }] },
            { q: { es: '¿Hay gaviotas donde vives?', en: 'Are there seagulls where you live?' }, help: { es: 'Sí, muchas. / No.', en: 'Yes, many. / No.' }, follow: [{ es: '¿Qué animales hay?', en: 'What animals are there?' }, { es: '¿Te molestan?', en: 'Do they bother you?' }] },
            { q: { es: '¿Cuál es tu color favorito para una casa?', en: 'What is your favourite colour for a house?' }, help: { es: 'Me gusta el azul / el amarillo…', en: 'I like blue / yellow…' }, follow: [{ es: '¿Y tu habitación?', en: 'And your room?' }, { es: '¿Pintas tú?', en: 'Do you paint yourself?' }] },
          ],
          words: [{ es: 'el mejillón', en: 'the mussel' }, { es: 'la olla', en: 'the pot' }, { es: 'el pastel', en: 'the pie / cake' }, { es: 'la gaviota', en: 'the seagull' }, { es: 'tener hambre', en: 'to be hungry' }],
        },
        A1: {
          scene: { es: 'Kinsale se llama «la capital gastronómica de Irlanda». En una calle hay más de veinte restaurantes. Gráinne se levanta a las seis para ir al puerto y elegir el pescado de los barcos. Hoy un pescador le ofrece un pez enorme y feo que ella nunca cocinó.', en: 'Kinsale is called “the food capital of Ireland”. On one street there are more than twenty restaurants. Gráinne gets up at six to go to the harbour and choose fish from the boats. Today a fisherman offers her a huge, ugly fish she has never cooked.' },
          opener: { es: 'Mi madre cocinaba muy mal, de verdad. Todo hervido, todo gris. Por eso empecé a cocinar: por pura necesidad. Trabajé en Francia y en España, y volví con muchas ideas. Ahora cambio el menú cada día según lo que trae el mar. Este pez se llama rape. Es feísimo, pero dicen que es delicioso. ¿Tú pruebas cosas que no conoces?', en: 'My mother cooked really badly, honestly. Everything boiled, everything grey. That’s why I started cooking: out of pure necessity. I worked in France and Spain, and came back with lots of ideas. Now I change the menu every day according to what the sea brings. This fish is called monkfish. It is very ugly, but they say it is delicious. Do you try things you don’t know?' },
          decide: {
            ask: { es: '¿Cómo debería cocinar Gráinne el rape?', en: 'How should Gráinne cook the monkfish?' },
            options: [
              { say: { es: 'A la plancha, con limón.', en: 'Grilled, with lemon.' }, then: { es: 'Es simple y perfecto. Se vende todo en una hora.', en: 'It is simple and perfect. It all sells in an hour.' } },
              { say: { es: 'En un guiso, como en España.', en: 'In a stew, like in Spain.' }, then: { es: 'Gráinne pone patatas, pimiento y pimentón. El restaurante huele increíble.', en: 'Gráinne adds potatoes, peppers and paprika. The restaurant smells incredible.' } },
              { say: { es: 'Con curry.', en: 'With curry.' }, then: { es: 'Es una sorpresa. A unos clientes les encanta y otros no lo tocan.', en: 'It is a surprise. Some customers love it and others don’t touch it.' } },
            ],
          },
          twist: { es: 'Un crítico de comida famoso entra al restaurante sin avisar. Gráinne lo reconoce. ¿Le da el mejor plato o lo trata como a todos?', en: 'A famous food critic walks into the restaurant without warning. Gráinne recognises him. Does she give him the best dish or treat him like everyone else?' },
          questions: [
            { q: { es: '¿Pruebas comidas que no conoces?', en: 'Do you try foods you don’t know?' }, help: { es: 'Sí, siempre. / Depende de cómo se ven.', en: 'Yes, always. / It depends how they look.' }, follow: [{ es: '¿Qué probaste último?', en: 'What did you try last?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Quién cocina mejor en tu familia?', en: 'Who cooks best in your family?' }, help: { es: 'Mi abuela / mi padre / yo…', en: 'My grandmother / my father / me…' }, follow: [{ es: '¿Cuál es su plato especial?', en: 'What is their special dish?' }, { es: '¿Te enseñó?', en: 'Did they teach you?' }] },
            { q: { es: '¿Trabajaste en otro país?', en: 'Have you worked in another country?' }, help: { es: 'Sí, en… / No, pero me gustaría.', en: 'Yes, in… / No, but I would like to.' }, follow: [{ es: '¿Qué aprendiste?', en: 'What did you learn?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿Cuál es tu plato favorito de pescado o de verduras?', en: 'What is your favourite fish or vegetable dish?' }, help: { es: 'Me encanta…', en: 'I love…' }, follow: [{ es: '¿Lo cocinas tú?', en: 'Do you cook it yourself?' }, { es: '¿Dónde lo comes?', en: 'Where do you eat it?' }] },
          ],
          words: [{ es: 'el rape', en: 'monkfish' }, { es: 'hervido', en: 'boiled' }, { es: 'a la plancha', en: 'grilled' }, { es: 'el guiso', en: 'the stew' }, { es: 'el crítico', en: 'the critic' }],
        },
        A2: {
          scene: { es: 'Es viernes por la noche y el restaurante está lleno. De repente se va la luz en todo el puerto. Hay cuarenta clientes, la cocina es eléctrica y en la nevera hay pescado para todo el fin de semana. Gráinne tiene velas y una barbacoa vieja en el patio.', en: 'It is Friday night and the restaurant is full. Suddenly the power goes out across the whole harbour. There are forty customers, the kitchen is electric and in the fridge there is fish for the whole weekend. Gráinne has candles and an old barbecue in the yard.' },
          opener: { es: 'La última vez que pasó esto, hace cinco años, mandé a todos a casa y se me echó a perder todo el pescado. Lloré en la cocina. Esta vez no quiero rendirme. Tengo la barbacoa, tengo velas y tengo a mi ayudante, que tiene diecinueve años y nunca vio una crisis. Dime, ¿qué hacemos?', en: 'The last time this happened, five years ago, I sent everyone home and all the fish went off. I cried in the kitchen. This time I don’t want to give up. I have the barbecue, I have candles and I have my assistant, who is nineteen and has never seen a crisis. Tell me, what do we do?' },
          decide: {
            ask: { es: '¿Qué le propones a Gráinne?', en: 'What do you suggest to Gráinne?' },
            options: [
              { say: { es: 'Cocinar todo en la barbacoa y cenar a la luz de las velas.', en: 'Cook everything on the barbecue and have dinner by candlelight.' }, then: { es: 'Es la noche más bonita del año. Un cliente pide matrimonio a su novia.', en: 'It is the most beautiful night of the year. A customer proposes to his girlfriend.' } },
              { say: { es: 'Regalar el pescado a los vecinos antes de que se estropee.', en: 'Give the fish to the neighbours before it goes off.' }, then: { es: 'Los vecinos traen vino y música. El puerto entero se convierte en una fiesta.', en: 'The neighbours bring wine and music. The whole harbour becomes a party.' } },
              { say: { es: 'Pedir disculpas y devolver el dinero.', en: 'Apologise and give the money back.' }, then: { es: 'Los clientes se van tranquilos, pero Gráinne pierde otra vez el pescado.', en: 'The customers leave calmly, but Gráinne loses the fish again.' } },
            ],
          },
          twist: { es: 'La luz vuelve a medianoche. Un cliente escribe una crítica en internet: «Sin luz, sin menú, sin profesionalidad. Una estrella». Gráinne quiere responder enojada. ¿Qué le aconsejas?', en: 'The power comes back at midnight. A customer writes an online review: “No lights, no menu, no professionalism. One star.” Gráinne wants to reply angrily. What do you advise her?' },
          questions: [
            { q: { es: '¿Viviste un apagón o una crisis inesperada?', en: 'Have you experienced a power cut or unexpected crisis?' }, help: { es: 'Sí, una vez se fue la luz y… / No que recuerde.', en: 'Yes, once the power went out and… / Not that I remember.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Fue divertido o terrible?', en: 'Was it fun or terrible?' }] },
            { q: { es: '¿Cómo reaccionas cuando algo sale mal?', en: 'How do you react when something goes wrong?' }, help: { es: 'Me pongo nervioso / busco una solución / me río…', en: 'I get nervous / I look for a solution / I laugh…' }, follow: [{ es: '¿Siempre fuiste así?', en: 'Were you always like that?' }, { es: '¿Quién te ayuda?', en: 'Who helps you?' }] },
            { q: { es: '¿Escribes críticas en internet?', en: 'Do you write online reviews?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Buenas o malas?', en: 'Good or bad?' }, { es: '¿Lees las críticas antes de ir a un lugar?', en: 'Do you read reviews before going somewhere?' }] },
            { q: { es: '¿Cuál fue la mejor cena de tu vida?', en: 'What was the best dinner of your life?' }, help: { es: 'Fue en… con… y comimos…', en: 'It was in… with… and we ate…' }, follow: [{ es: '¿Qué la hizo especial?', en: 'What made it special?' }, { es: '¿Volviste?', en: 'Did you go back?' }] },
          ],
          words: [{ es: 'irse la luz', en: 'to have a power cut' }, { es: 'la vela', en: 'the candle' }, { es: 'la nevera', en: 'the fridge' }, { es: 'estropearse', en: 'to go off / spoil' }, { es: 'la crítica', en: 'the review' }],
        },
        B1: {
          scene: { es: 'Gráinne quiere entrar en la guía de restaurantes más famosa del mundo. Un inspector le aconsejó, en privado, cambiar el menú: menos pescado del día, más platos sofisticados y un menú degustación caro. Sus clientes de siempre, pescadores y familias del pueblo, ya no podrían pagar su restaurante.', en: 'Gráinne wants to get into the world’s most famous restaurant guide. An inspector privately advised her to change the menu: less fish of the day, more sophisticated dishes and an expensive tasting menu. Her regular customers, fishermen and local families, would no longer be able to afford her restaurant.' },
          opener: { es: 'Desde los dieciocho años sueño con esa estrella. Trabajé quince horas al día en París por ella. Ahora la tengo cerca, pero el precio es dejar de ser el restaurante de mi pueblo. El pescador que me vende el rape no podría sentarse a comerlo. Mi socio dice que la estrella nos daría seguridad para siempre. ¿Qué vale más: el reconocimiento o la gente que te conoce?', en: 'I have dreamed of that star since I was eighteen. I worked fifteen hours a day in Paris for it. Now it is within reach, but the price is no longer being my town’s restaurant. The fisherman who sells me the monkfish couldn’t sit down to eat it. My business partner says the star would give us security forever. What is worth more: recognition or the people who know you?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Gráinne?', en: 'What do you advise Gráinne?' },
            options: [
              { say: { es: 'Abrir dos espacios: el restaurante de siempre y una sala pequeña con el menú degustación.', en: 'Open two spaces: the usual restaurant and a small room with the tasting menu.' }, then: { es: 'Trabaja el doble. Un año después, la guía la menciona como «una sorpresa».', en: 'She works twice as hard. A year later, the guide mentions her as “a surprise”.' } },
              { say: { es: 'Ignorar el consejo y seguir igual.', en: 'Ignore the advice and carry on the same.' }, then: { es: 'No consigue la estrella, pero un periódico la elige como «el restaurante más honesto de Irlanda».', en: 'She doesn’t get the star, but a newspaper names her “the most honest restaurant in Ireland”.' } },
              { say: { es: 'Cambiar el menú, pero ofrecer un día al mes a precio de pueblo.', en: 'Change the menu, but offer one day a month at local prices.' }, then: { es: 'Los pescadores agradecen el gesto, aunque dicen que ya no es lo mismo.', en: 'The fishermen appreciate the gesture, although they say it isn’t the same any more.' } },
            ],
          },
          twist: { es: 'El socio de Gráinne le confiesa que tienen deudas y que sin un cambio importante el restaurante cierra en un año. Ella no lo sabía. ¿Cambia eso tu consejo?', en: 'Gráinne’s partner confesses that they are in debt and that without a major change the restaurant will close within a year. She didn’t know. Does that change your advice?' },
          questions: [
            { q: { es: '¿Qué vale más para ti: el reconocimiento o la gente cercana?', en: 'What matters more to you: recognition or the people close to you?' }, help: { es: 'Para mí… aunque reconozco que…', en: 'For me… although I admit that…' }, follow: [{ es: '¿Tuviste que elegir alguna vez?', en: 'Have you ever had to choose?' }, { es: '¿Qué elegiste?', en: 'What did you choose?' }] },
            { q: { es: '¿Tienes un sueño desde hace muchos años?', en: 'Do you have a dream you have had for many years?' }, help: { es: 'Sí, desde pequeño quiero… / Ya no, cambió.', en: 'Yes, since I was small I have wanted… / Not any more, it changed.' }, follow: [{ es: '¿Qué estás haciendo para conseguirlo?', en: 'What are you doing to achieve it?' }, { es: '¿Qué precio pagarías?', en: 'What price would you pay?' }] },
            { q: { es: '¿Los restaurantes caros son solo para turistas en tu ciudad?', en: 'Are expensive restaurants only for tourists in your city?' }, help: { es: 'En gran parte sí, porque… / No, la gente local…', en: 'Largely yes, because… / No, local people…' }, follow: [{ es: '¿Cuál es el sitio más caro que conoces?', en: 'What is the most expensive place you know?' }, { es: '¿Vale lo que cuesta?', en: 'Is it worth what it costs?' }] },
            { q: { es: '¿Trabajarías con un socio que te ocultó algo importante?', en: 'Would you work with a partner who hid something important from you?' }, help: { es: 'Solo si… / No, la confianza…', en: 'Only if… / No, trust…' }, follow: [{ es: '¿Qué harías primero?', en: 'What would you do first?' }, { es: '¿Se puede recuperar la confianza?', en: 'Can trust be regained?' }] },
          ],
          words: [{ es: 'la guía', en: 'the guide' }, { es: 'el menú degustación', en: 'the tasting menu' }, { es: 'el socio', en: 'the business partner' }, { es: 'el reconocimiento', en: 'recognition' }, { es: 'la deuda', en: 'the debt' }],
        },
      },
    },
    // ------------------------------------------------------------ the jazz festival
    {
      id: 'jazz',
      name: { es: 'El festival de jazz de Cork', en: 'The Cork jazz festival' },
      who: { name: 'Fintan', role: { es: 'saxofonista', en: 'saxophonist' } },
      levels: {
        A0: {
          scene: { es: 'Es octubre en Cork. Hay música en los bares, en las calles y en los hoteles. Fintan toca el saxofón en un bar pequeño. Tiene un sombrero negro.', en: 'It is October in Cork. There is music in the bars, in the streets and in the hotels. Fintan plays the saxophone in a small bar. He has a black hat.' },
          opener: { es: '¡Hola! Soy Fintan. Toco jazz. Este fin de semana hay música en toda la ciudad. ¿Te gusta el jazz?', en: 'Hello! I am Fintan. I play jazz. This weekend there is music all over the city. Do you like jazz?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Me siento a escuchar.', en: 'I sit down to listen.' }, then: { es: 'Fintan toca una canción lenta. Cierras los ojos.', en: 'Fintan plays a slow song. You close your eyes.' } },
              { say: { es: 'Bailo.', en: 'I dance.' }, then: { es: 'Fintan toca más rápido. ¡Todo el bar baila!', en: 'Fintan plays faster. The whole bar dances!' } },
              { say: { es: 'Pido una canción.', en: 'I request a song.' }, then: { es: 'Fintan dice: «¡Claro!». Toca tu canción en versión jazz.', en: 'Fintan says: “Of course!” He plays your song in a jazz version.' } },
            ],
          },
          twist: { es: 'El pianista de Fintan está enfermo. Fintan te pregunta: «¿Tocas el piano?». ¿Qué dices?', en: 'Fintan’s pianist is ill. Fintan asks you: “Do you play the piano?” What do you say?' },
          questions: [
            { q: { es: '¿Qué música te gusta?', en: 'What music do you like?' }, help: { es: 'Me gusta el pop / el rock / el jazz…', en: 'I like pop / rock / jazz…' }, follow: [{ es: '¿Qué cantante?', en: 'Which singer?' }, { es: '¿Cuándo la escuchas?', en: 'When do you listen to it?' }] },
            { q: { es: '¿Vas a conciertos?', en: 'Do you go to concerts?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Cuál fue el último?', en: 'What was the last one?' }, { es: '¿Con quién fuiste?', en: 'Who did you go with?' }] },
            { q: { es: '¿Tienes un sombrero?', en: 'Do you have a hat?' }, help: { es: 'Sí, tengo uno. / No.', en: 'Yes, I have one. / No.' }, follow: [{ es: '¿Cómo es?', en: 'What is it like?' }, { es: '¿Cuándo lo usas?', en: 'When do you wear it?' }] },
            { q: { es: '¿Qué instrumento te gusta?', en: 'What instrument do you like?' }, help: { es: 'Me gusta el piano / la guitarra…', en: 'I like the piano / the guitar…' }, follow: [{ es: '¿Lo tocas?', en: 'Do you play it?' }, { es: '¿Quieres aprender?', en: 'Do you want to learn?' }] },
          ],
          words: [{ es: 'el saxofón', en: 'the saxophone' }, { es: 'el sombrero', en: 'the hat' }, { es: 'el pianista', en: 'the pianist' }, { es: 'la canción', en: 'the song' }, { es: 'el concierto', en: 'the concert' }],
        },
        A1: {
          scene: { es: 'El festival empezó en mil novecientos setenta y ocho, cuando un hotel no tenía clientes en octubre. Ahora vienen más de mil músicos y miles de visitantes. Fintan toca en cuatro lugares distintos en un solo día. Entre concierto y concierto, come un sándwich en la calle.', en: 'The festival started in 1978, when a hotel had no guests in October. Now more than a thousand musicians and thousands of visitors come. Fintan plays at four different venues in a single day. Between concerts, he eats a sandwich in the street.' },
          opener: { es: 'Soy profesor de música en una escuela de lunes a viernes. El festival es mi fiesta del año: aquí toco con músicos de Nueva Orleans, de Brasil, de Japón. No hablamos el mismo idioma, pero en la música nos entendemos. ¿Conociste a alguien sin hablar su idioma?', en: 'I am a music teacher at a school from Monday to Friday. The festival is my big event of the year: here I play with musicians from New Orleans, Brazil, Japan. We don’t speak the same language, but in music we understand each other. Have you ever got to know someone without speaking their language?' },
          decide: {
            ask: { es: 'Fintan tiene diez minutos entre conciertos. ¿Qué le propones?', en: 'Fintan has ten minutes between concerts. What do you suggest?' },
            options: [
              { say: { es: 'Comer algo tranquilo.', en: 'Eat something calmly.' }, then: { es: 'Se sienta y come. Llega al siguiente bar justo a tiempo.', en: 'He sits down and eats. He reaches the next bar just in time.' } },
              { say: { es: 'Tocar en la calle para la gente.', en: 'Play in the street for the people.' }, then: { es: 'Se forma un grupo enorme. Llega tarde, pero muy contento.', en: 'A huge crowd forms. He arrives late, but very happy.' } },
              { say: { es: 'Escuchar a otro músico.', en: 'Listen to another musician.' }, then: { es: 'Escuchan a una cantante brasileña. Fintan la invita a tocar con él.', en: 'They listen to a Brazilian singer. Fintan invites her to play with him.' } },
            ],
          },
          twist: { es: 'Unos alumnos de Fintan, de quince años, están en el bar. No deberían estar allí. Fintan los ve. ¿Qué hace?', en: 'Some of Fintan’s students, aged fifteen, are in the bar. They shouldn’t be there. Fintan sees them. What does he do?' },
          questions: [
            { q: { es: '¿Conociste a alguien sin hablar su idioma?', en: 'Have you got to know someone without speaking their language?' }, help: { es: 'Sí, en un viaje… / No, nunca.', en: 'Yes, on a trip… / No, never.' }, follow: [{ es: '¿Cómo se comunicaban?', en: 'How did you communicate?' }, { es: '¿Siguen en contacto?', en: 'Are you still in touch?' }] },
            { q: { es: '¿Qué haces de lunes a viernes y qué haces el fin de semana?', en: 'What do you do Monday to Friday and what do you do at weekends?' }, help: { es: 'De lunes a viernes… y el fin de semana…', en: 'Monday to Friday… and at weekends…' }, follow: [{ es: '¿Qué prefieres?', en: 'Which do you prefer?' }, { es: '¿Cambiarías algo?', en: 'Would you change anything?' }] },
            { q: { es: '¿Hay un festival grande en tu ciudad?', en: 'Is there a big festival in your city?' }, help: { es: 'Sí, en… hay… / No.', en: 'Yes, in… there is… / No.' }, follow: [{ es: '¿Vas?', en: 'Do you go?' }, { es: '¿Qué te gusta?', en: 'What do you like?' }] },
            { q: { es: '¿Tienes una pasión fuera del trabajo?', en: 'Do you have a passion outside work?' }, help: { es: 'Sí, me encanta… / No mucho.', en: 'Yes, I love… / Not really.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Cuánto tiempo le dedicas?', en: 'How much time do you spend on it?' }] },
          ],
          words: [{ es: 'el festival', en: 'the festival' }, { es: 'el profesor de música', en: 'the music teacher' }, { es: 'entenderse', en: 'to understand each other' }, { es: 'a tiempo', en: 'on time' }, { es: 'el lugar', en: 'the venue / place' }],
        },
        A2: {
          scene: { es: 'Es la última noche del festival. Fintan va a tocar en el escenario principal por primera vez, delante de dos mil personas. Una hora antes, su saxofón se cae en la calle y una llave se rompe. Las tiendas de música están cerradas. Una saxofonista estadounidense famosa está en el mismo hotel.', en: 'It is the last night of the festival. Fintan is going to play on the main stage for the first time, in front of two thousand people. An hour before, his saxophone falls in the street and a key breaks. The music shops are closed. A famous American saxophonist is staying at the same hotel.' },
          opener: { es: 'Llevo veinte años esperando esta noche. Este saxofón era de mi padre, que también tocaba aquí, en los bares pequeños. Puedo intentar arreglarlo con cinta, pero va a sonar raro. O puedo pedirle su saxofón a esa señora, a quien no conozco y que es una estrella. Me da muchísima vergüenza. ¿Qué harías tú?', en: 'I have been waiting twenty years for this night. This saxophone was my father’s, who also played here, in the small bars. I can try to fix it with tape, but it will sound strange. Or I can ask that lady, whom I don’t know and who is a star, for her saxophone. I am terribly embarrassed. What would you do?' },
          decide: {
            ask: { es: '¿Qué le dices a Fintan?', en: 'What do you tell Fintan?' },
            options: [
              { say: { es: 'Que le pida el saxofón a la estrella.', en: 'To ask the star for her saxophone.' }, then: { es: 'Ella dice que sí y, además, sube al escenario a tocar una canción con él.', en: 'She says yes and, what’s more, goes on stage to play a song with him.' } },
              { say: { es: 'Que toque con el saxofón de su padre arreglado.', en: 'To play with his father’s saxophone, fixed.' }, then: { es: 'Suena raro en dos notas, pero el público no se da cuenta. Fintan llora al final.', en: 'It sounds odd on two notes, but the audience doesn’t notice. Fintan cries at the end.' } },
              { say: { es: 'Que cambie el repertorio y toque canciones sin esa nota.', en: 'To change the setlist and play songs without that note.' }, then: { es: 'Es un concierto distinto y valiente. Los críticos hablan de «improvisación brillante».', en: 'It is a different and brave concert. The critics talk about “brilliant improvisation”.' } },
            ],
          },
          twist: { es: 'Al terminar, un productor de discos le ofrece una gira de tres meses por Europa. Fintan tendría que dejar sus clases en la escuela en mitad del curso. ¿Qué le aconsejas?', en: 'At the end, a record producer offers him a three-month tour of Europe. Fintan would have to leave his school classes in the middle of the year. What do you advise him?' },
          questions: [
            { q: { es: '¿Tienes un objeto que era de tus padres o abuelos?', en: 'Do you have an object that belonged to your parents or grandparents?' }, help: { es: 'Sí, tengo el reloj de… / No.', en: 'Yes, I have…’s watch / No.' }, follow: [{ es: '¿Lo usas?', en: 'Do you use it?' }, { es: '¿Qué historia tiene?', en: 'What is its story?' }] },
            { q: { es: '¿Le pediste ayuda a alguien importante alguna vez?', en: 'Have you ever asked someone important for help?' }, help: { es: 'Sí, a mi jefe / a un profesor… / No, me da vergüenza.', en: 'Yes, my boss / a teacher… / No, I’m too embarrassed.' }, follow: [{ es: '¿Te ayudó?', en: 'Did they help you?' }, { es: '¿Lo volverías a hacer?', en: 'Would you do it again?' }] },
            { q: { es: '¿Qué hiciste cuando algo importante salió mal a último momento?', en: 'What did you do when something important went wrong at the last minute?' }, help: { es: 'Una vez… y tuve que…', en: 'Once… and I had to…' }, follow: [{ es: '¿Cómo terminó?', en: 'How did it end?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Dejarías tu trabajo por un sueño de tres meses?', en: 'Would you leave your job for a three-month dream?' }, help: { es: 'Sí, porque… / No, porque mis responsabilidades…', en: 'Yes, because… / No, because my responsibilities…' }, follow: [{ es: '¿Qué sueño sería?', en: 'What dream would it be?' }, { es: '¿Y después?', en: 'And afterwards?' }] },
          ],
          words: [{ es: 'el escenario', en: 'the stage' }, { es: 'la llave', en: 'the key (of an instrument)' }, { es: 'la cinta', en: 'the tape' }, { es: 'el repertorio', en: 'the setlist / repertoire' }, { es: 'la gira', en: 'the tour' }],
        },
        B1: {
          scene: { es: 'El festival tiene un patrocinador nuevo: una casa de apuestas. El dinero permite traer a músicos internacionales y mantener gratis los conciertos de la calle. Pero Fintan trabaja con jóvenes y sabe que dos de sus antiguos alumnos tienen problemas graves con el juego. Le piden que toque en el escenario con el logo de la empresa detrás.', en: 'The festival has a new sponsor: a betting company. The money makes it possible to bring international musicians and keep the street concerts free. But Fintan works with young people and knows that two of his former students have serious gambling problems. He is asked to play on stage with the company’s logo behind him.' },
          opener: { es: 'Sin ese dinero, el festival se reduce a la mitad. Los músicos de los bares pequeños, como yo hace años, perderían su oportunidad. Pero cada vez que veo el logo pienso en Darragh, que perdió su piso con diecinueve años por las apuestas en el móvil. Si me niego a tocar, nadie lo va a notar. Si toco, me siento un hipócrita. ¿Se puede aceptar dinero de alguien que hace daño para hacer algo bueno?', en: 'Without that money, the festival shrinks by half. The musicians in the small bars, as I was years ago, would lose their chance. But every time I see the logo I think of Darragh, who lost his flat at nineteen because of betting on his phone. If I refuse to play, nobody will notice. If I play, I feel like a hypocrite. Can you accept money from someone who does harm in order to do something good?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Fintan?', en: 'What do you advise Fintan?' },
            options: [
              { say: { es: 'Tocar y hablar en el escenario sobre la adicción al juego.', en: 'Play and speak on stage about gambling addiction.' }, then: { es: 'La empresa se enfada, pero el público aplaude. Una asociación de ayuda recibe muchas llamadas esa semana.', en: 'The company gets angry, but the audience applauds. A support group receives many calls that week.' } },
              { say: { es: 'No tocar y explicar por qué en una carta pública.', en: 'Not play and explain why in an open letter.' }, then: { es: 'Otros músicos firman la carta. El festival promete buscar otro patrocinador para el año que viene.', en: 'Other musicians sign the letter. The festival promises to look for another sponsor next year.' } },
              { say: { es: 'Tocar en silencio y donar su pago a un centro de ayuda.', en: 'Play quietly and donate his fee to a support centre.' }, then: { es: 'Nadie se entera, salvo el centro. Fintan duerme un poco más tranquilo.', en: 'Nobody finds out, except the centre. Fintan sleeps a little easier.' } },
            ],
          },
          twist: { es: 'Darragh, el antiguo alumno, le escribe a Fintan: «Toca, profe. Si el festival desaparece, perdemos otra cosa buena. Yo ya estoy mejor». ¿Cambia eso la decisión?', en: 'Darragh, the former student, writes to Fintan: “Play, sir. If the festival disappears, we lose another good thing. I’m better now.” Does that change the decision?' },
          questions: [
            { q: { es: '¿Se puede aceptar dinero de una empresa que hace daño para hacer algo bueno?', en: 'Can you accept money from a company that does harm in order to do something good?' }, help: { es: 'Depende de… / No, porque legitima… / Sí, si el beneficio…', en: 'It depends on… / No, because it legitimises… / Yes, if the benefit…' }, follow: [{ es: '¿Qué ejemplos conoces?', en: 'What examples do you know?' }, { es: '¿Dónde pones el límite?', en: 'Where do you draw the line?' }] },
            { q: { es: '¿La publicidad de apuestas debería prohibirse?', en: 'Should betting advertising be banned?' }, help: { es: 'Sí, porque… / No del todo, pero…', en: 'Yes, because… / Not completely, but…' }, follow: [{ es: '¿Cómo es en tu país?', en: 'What is it like in your country?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Te sentiste hipócrita alguna vez?', en: 'Have you ever felt like a hypocrite?' }, help: { es: 'Sí, cuando… / Intento no…', en: 'Yes, when… / I try not to…' }, follow: [{ es: '¿Qué hiciste después?', en: 'What did you do afterwards?' }, { es: '¿Lo hablaste con alguien?', en: 'Did you talk to someone about it?' }] },
            { q: { es: '¿Quién debería decidir: el afectado o los que quieren protegerlo?', en: 'Who should decide: the person affected or those who want to protect them?' }, help: { es: 'El afectado, porque… / Los demás, si…', en: 'The person affected, because… / The others, if…' }, follow: [{ es: '¿Te pasó con alguien de tu familia?', en: 'Has it happened with someone in your family?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
          ],
          words: [{ es: 'la casa de apuestas', en: 'the betting company' }, { es: 'el juego', en: 'gambling' }, { es: 'el hipócrita', en: 'the hypocrite' }, { es: 'donar', en: 'to donate' }, { es: 'la adicción', en: 'the addiction' }],
        },
      },
    },
  ],
};
