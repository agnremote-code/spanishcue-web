// Comunidad Valenciana · a paella by the Albufera, a fallas workshop, an orange grove,
// the City of Arts and Sciences and a hotel reception in Benidorm. Five places, four
// levels each (A0, A1, A2, B1). Every level is written on its own: same place and
// people, different situations.
export default {
  id: 'valencia',
  spots: [
    // ------------------------------------------------------------ the paella restaurant
    {
      id: 'paella',
      name: { es: 'El restaurante de paella en la Albufera', en: 'The paella restaurant by the Albufera' },
      who: { name: 'Amparo', role: { es: 'cocinera', en: 'cook' } },
      levels: {
        A0: {
          scene: { es: 'Es un restaurante al lado de un lago. Hay arroz, verduras y pollo. Amparo cocina una paella grande.', en: 'It is a restaurant next to a lake. There is rice, vegetables and chicken. Amparo is cooking a big paella.' },
          opener: { es: '¡Hola! Soy Amparo. Esta es mi paella. ¿Tienes hambre?', en: 'Hello! I am Amparo. This is my paella. Are you hungry?' },
          decide: {
            ask: { es: 'Amparo tiene tres paellas. ¿Cuál quieres?', en: 'Amparo has three paellas. Which one do you want?' },
            options: [
              { say: { es: 'La paella valenciana, con pollo.', en: 'The Valencian paella, with chicken.' }, then: { es: 'Amparo dice: «¡La original! Muy buena elección».', en: 'Amparo says: “The original! Very good choice.”' } },
              { say: { es: 'La paella de marisco, por favor.', en: 'The seafood paella, please.' }, then: { es: 'Amparo dice: «Tiene gambas y mejillones. ¡Qué rica!»', en: 'Amparo says: “It has prawns and mussels. So tasty!”' } },
              { say: { es: 'Arroz negro, por favor.', en: 'Black rice, please.' }, then: { es: 'Amparo dice: «Es negro por la tinta del calamar. ¡Pruébalo!»', en: 'Amparo says: “It is black because of the squid ink. Try it!”' } },
            ],
          },
          twist: { es: 'Amparo te da una cuchara de madera. Aquí la paella se come de la sartén. ¿Qué dices?', en: 'Amparo gives you a wooden spoon. Here people eat paella straight from the pan. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el arroz?', en: 'Do you like rice?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Con qué lo comes?', en: 'What do you eat it with?' }, { es: '¿Cocinas arroz?', en: 'Do you cook rice?' }] },
            { q: { es: '¿Comes pescado?', en: 'Do you eat fish?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Qué pescado te gusta?', en: 'Which fish do you like?' }, { es: '¿Y marisco?', en: 'And seafood?' }] },
            { q: { es: '¿Cocinas en casa?', en: 'Do you cook at home?' }, help: { es: 'Sí, todos los días. / No, casi nunca.', en: 'Yes, every day. / No, almost never.' }, follow: [{ es: '¿Qué cocinas?', en: 'What do you cook?' }, { es: '¿Para quién?', en: 'For whom?' }] },
            { q: { es: '¿Comes con tu familia los domingos?', en: 'Do you eat with your family on Sundays?' }, help: { es: 'Sí, siempre. / No, como solo.', en: 'Yes, always. / No, I eat alone.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Qué coméis?', en: 'What do you eat?' }] },
          ],
          words: [{ es: 'el arroz', en: 'rice' }, { es: 'la paella', en: 'paella' }, { es: 'el marisco', en: 'seafood' }, { es: 'la sartén', en: 'the pan' }, { es: 'la cuchara', en: 'the spoon' }],
        },
        A1: {
          scene: { es: 'Es domingo al mediodía. El restaurante está en El Palmar, un pueblo pequeño entre arrozales. Hay familias enteras esperando mesa. Amparo cocina diez paellas al mismo tiempo, con fuego de leña.', en: 'It is Sunday at noon. The restaurant is in El Palmar, a small village among rice fields. Whole families are waiting for a table. Amparo is cooking ten paellas at the same time, over a wood fire.' },
          opener: { es: 'Los domingos aquí es una locura. Cada paella tarda casi una hora y la gente tiene prisa. Yo siempre digo lo mismo: la paella espera a nadie, pero nadie espera a la paella. ¿Tú eres una persona paciente?', en: 'On Sundays this place is crazy. Each paella takes almost an hour and people are in a hurry. I always say the same: paella waits for no one, but no one waits for paella. Are you a patient person?' },
          decide: {
            ask: { es: 'Un turista pide ketchup para su paella. Toda la cocina se queda en silencio. ¿Qué haces?', en: 'A tourist asks for ketchup for his paella. The whole kitchen goes silent. What do you do?' },
            options: [
              { say: { es: 'Le explico con calma cómo se come la paella.', en: 'I calmly explain how paella is eaten.' }, then: { es: 'El turista prueba la paella sin nada y pide otra para llevar.', en: 'The tourist tries the paella plain and orders another one to take away.' } },
              { say: { es: 'Le traigo el ketchup. El cliente manda.', en: 'I bring him the ketchup. The customer is king.' }, then: { es: 'Amparo te mira muy seria y luego se ríe: «Hoy te perdono».', en: 'Amparo gives you a very serious look and then laughs: “I forgive you today.”' } },
              { say: { es: 'Le ofrezco un poco de limón.', en: 'I offer him a bit of lemon.' }, then: { es: 'Amparo acepta el limón. «Eso sí, pero solo un poco».', en: 'Amparo accepts the lemon. “That’s fine, but only a little.”' } },
            ],
          },
          twist: { es: 'Se acaba la leña y quedan tres paellas en el fuego. El pueblo está a dos kilómetros. Amparo te pide ayuda. ¿Qué haces?', en: 'The firewood runs out and three paellas are still on the fire. The village is two kilometres away. Amparo asks you for help. What do you do?' },
          questions: [
            { q: { es: '¿Cuál es la comida típica de tu país?', en: 'What is the typical food of your country?' }, help: { es: 'En mi país se come mucho…', en: 'In my country people eat a lot of…' }, follow: [{ es: '¿Sabes prepararla?', en: 'Do you know how to make it?' }, { es: '¿Quién la cocina mejor?', en: 'Who cooks it best?' }] },
            { q: { es: '¿Cuánto tiempo esperas por una mesa en un restaurante?', en: 'How long do you wait for a table at a restaurant?' }, help: { es: 'Espero diez minutos como mucho. / No me importa esperar.', en: 'I wait ten minutes at most. / I don’t mind waiting.' }, follow: [{ es: '¿Haces reservas?', en: 'Do you book tables?' }, { es: '¿Qué haces mientras esperas?', en: 'What do you do while you wait?' }] },
            { q: { es: '¿Pones salsas en la comida?', en: 'Do you put sauces on your food?' }, help: { es: 'Sí, siempre pongo… / No, nunca.', en: 'Yes, I always put… / No, never.' }, follow: [{ es: '¿Cuál es tu salsa favorita?', en: 'What is your favourite sauce?' }, { es: '¿En qué comida no la pones?', en: 'Which food don’t you put it on?' }] },
            { q: { es: '¿Te gusta comer al aire libre?', en: 'Do you like eating outdoors?' }, help: { es: 'Sí, en verano. / No, prefiero dentro.', en: 'Yes, in summer. / No, I prefer inside.' }, follow: [{ es: '¿Dónde comes al aire libre?', en: 'Where do you eat outdoors?' }, { es: '¿Con quién?', en: 'With whom?' }] },
          ],
          words: [{ es: 'la leña', en: 'firewood' }, { es: 'el arrozal', en: 'the rice field' }, { es: 'tener prisa', en: 'to be in a hurry' }, { es: 'paciente', en: 'patient' }, { es: 'para llevar', en: 'to take away' }],
        },
        A2: {
          scene: { es: 'El restaurante es de la familia de Amparo desde 1958. Su abuela empezó con cuatro mesas en el patio. Ahora un programa de televisión de cocina quiere grabar aquí, pero pide cambiar la receta para hacerla «más moderna».', en: 'The restaurant has belonged to Amparo’s family since 1958. Her grandmother started with four tables in the courtyard. Now a TV cooking show wants to film here, but asks to change the recipe to make it “more modern”.' },
          opener: { es: 'Mi abuela no sabía leer, pero sabía exactamente cuándo estaba el arroz. Lo sabía por el ruido. Yo aprendo todavía, y ya tengo cincuenta años. Ahora me piden poner chorizo en la paella para la tele. ¿Tú cambiarías una receta de familia por dinero?', en: 'My grandmother couldn’t read, but she knew exactly when the rice was ready. She knew from the sound. I’m still learning, and I’m fifty already. Now they want me to put chorizo in the paella for TV. Would you change a family recipe for money?' },
          decide: {
            ask: { es: 'El productor espera una respuesta hoy. ¿Qué le aconsejas a Amparo?', en: 'The producer is waiting for an answer today. What do you advise Amparo?' },
            options: [
              { say: { es: 'Que acepte, pero que cocine la receta original.', en: 'Accept, but cook the original recipe.' }, then: { es: 'Amparo cocina la paella de siempre. El programa la llama «la reina del arroz».', en: 'Amparo cooks her usual paella. The show calls her “the queen of rice”.' } },
              { say: { es: 'Que diga que no. La receta no se toca.', en: 'Say no. The recipe is not to be touched.' }, then: { es: 'El programa se va a otro pueblo. Esa noche, el restaurante está lleno de vecinos que la apoyan.', en: 'The show goes to another village. That night, the restaurant is full of neighbours supporting her.' } },
              { say: { es: 'Que proponga dos paellas: la clásica y una nueva.', en: 'Suggest two paellas: the classic one and a new one.' }, then: { es: 'La nueva gusta mucho a los jóvenes. La clásica sigue siendo la más pedida.', en: 'Young people love the new one. The classic one is still the most ordered.' } },
            ],
          },
          twist: { es: 'Durante la grabación, se rompe la paellera más grande, la de la abuela. Faltan diez minutos para salir en directo. ¿Qué haces?', en: 'During filming, the biggest paella pan breaks, the grandmother’s one. There are ten minutes left before going live. What do you do?' },
          questions: [
            { q: { es: '¿Hay alguna receta especial en tu familia?', en: 'Is there a special recipe in your family?' }, help: { es: 'Sí, mi abuela hacía… / No, en mi familia no se cocinaba mucho.', en: 'Yes, my grandmother used to make… / No, my family didn’t cook much.' }, follow: [{ es: '¿Quién la sabe hacer ahora?', en: 'Who knows how to make it now?' }, { es: '¿Cuándo se come?', en: 'When is it eaten?' }] },
            { q: { es: '¿Qué te enseñaron tus abuelos?', en: 'What did your grandparents teach you?' }, help: { es: 'Me enseñaron a…', en: 'They taught me to…' }, follow: [{ es: '¿Todavía lo haces?', en: 'Do you still do it?' }, { es: '¿Se lo enseñarías a otra persona?', en: 'Would you teach it to someone else?' }] },
            { q: { es: '¿Has salido alguna vez en la televisión o en un vídeo?', en: 'Have you ever been on TV or in a video?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Cómo fue?', en: 'How was it?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Prefieres la comida tradicional o la moderna?', en: 'Do you prefer traditional or modern food?' }, help: { es: 'Prefiero la tradicional porque… / Me gusta probar cosas nuevas.', en: 'I prefer traditional because… / I like trying new things.' }, follow: [{ es: '¿Cuál es el último plato nuevo que has probado?', en: 'What is the last new dish you have tried?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
          ],
          words: [{ es: 'la receta', en: 'the recipe' }, { es: 'la paellera', en: 'the paella pan' }, { es: 'grabar', en: 'to film / record' }, { es: 'en directo', en: 'live' }, { es: 'apoyar', en: 'to support' }],
        },
        B1: {
          scene: { es: 'La Albufera es un parque natural, pero el agua del lago está cada vez más sucia y los arrozales reciben menos agua por la sequía. Los agricultores, los pescadores y los restaurantes discuten en una reunión del pueblo. Amparo tiene que hablar en nombre de los restaurantes.', en: 'The Albufera is a nature park, but the lake water is getting dirtier and the rice fields receive less water because of the drought. Farmers, fishermen and restaurants are arguing at a village meeting. Amparo has to speak on behalf of the restaurants.' },
          opener: { es: 'Sin arroz de aquí, mi paella es solo un plato bonito para turistas. Pero si los restaurantes seguimos creciendo, también gastamos más agua y llenamos el pueblo de coches. Es difícil defender algo cuando una también es parte del problema. ¿Cómo hablarías tú en esa reunión?', en: 'Without local rice, my paella is just a pretty dish for tourists. But if we restaurants keep growing, we also use more water and fill the village with cars. It’s hard to defend something when you are also part of the problem. How would you speak at that meeting?' },
          decide: {
            ask: { es: 'Amparo tiene cinco minutos para hablar. ¿Qué propuesta debería hacer?', en: 'Amparo has five minutes to speak. Which proposal should she make?' },
            options: [
              { say: { es: 'Que los restaurantes paguen una tasa para limpiar el lago.', en: 'That restaurants pay a fee to clean the lake.' }, then: { es: 'Los pescadores aplauden. Algunos restaurantes se enfadan, pero la propuesta se vota.', en: 'The fishermen applaud. Some restaurants get angry, but the proposal is put to a vote.' } },
              { say: { es: 'Que solo se sirva arroz de la Albufera, aunque sea más caro.', en: 'That only Albufera rice is served, even if it is more expensive.' }, then: { es: 'Los agricultores la apoyan. Los precios suben un poco y los clientes no protestan.', en: 'The farmers support her. Prices go up a little and customers don’t complain.' } },
              { say: { es: 'Que se limite el número de autobuses turísticos al día.', en: 'That the number of tourist buses per day is limited.' }, then: { es: 'Hay un gran debate. Al final, se prueba la idea durante un verano.', en: 'There is a big debate. In the end, the idea is tried out for one summer.' } },
            ],
          },
          twist: { es: 'Al final de la reunión, un joven pescador acusa a Amparo de hipócrita, delante de todo el pueblo. ¿Cómo debería responder?', en: 'At the end of the meeting, a young fisherman accuses Amparo of being a hypocrite in front of the whole village. How should she respond?' },
          questions: [
            { q: { es: '¿Qué problema medioambiental hay en el lugar donde vives?', en: 'What environmental problem is there where you live?' }, help: { es: 'El mayor problema es… porque…', en: 'The biggest problem is… because…' }, follow: [{ es: '¿Quién debería solucionarlo?', en: 'Who should solve it?' }, { es: '¿Tú haces algo al respecto?', en: 'Do you do anything about it?' }] },
            { q: { es: '¿Pagarías más por un producto local?', en: 'Would you pay more for a local product?' }, help: { es: 'Sí, si… / Depende del precio.', en: 'Yes, if… / It depends on the price.' }, follow: [{ es: '¿Qué productos locales compras?', en: 'Which local products do you buy?' }, { es: '¿Dónde los compras?', en: 'Where do you buy them?' }] },
            { q: { es: '¿El turismo ayuda o perjudica a tu ciudad?', en: 'Does tourism help or harm your city?' }, help: { es: 'Por un lado… pero por otro lado…', en: 'On the one hand… but on the other hand…' }, follow: [{ es: '¿Qué cambiarías?', en: 'What would you change?' }, { es: '¿Los vecinos están contentos?', en: 'Are the locals happy?' }] },
            { q: { es: '¿Alguna vez has defendido algo en público?', en: 'Have you ever defended something in public?' }, help: { es: 'Sí, una vez en… / No, me da vergüenza.', en: 'Yes, once at… / No, it embarrasses me.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Lo volverías a hacer?', en: 'Would you do it again?' }] },
          ],
          words: [{ es: 'la sequía', en: 'the drought' }, { es: 'el parque natural', en: 'the nature park' }, { es: 'la tasa', en: 'the fee / tax' }, { es: 'hipócrita', en: 'hypocrite' }, { es: 'en nombre de', en: 'on behalf of' }],
        },
      },
    },
    // ------------------------------------------------------------ the fallas workshop
    {
      id: 'fallas',
      name: { es: 'El taller de fallas', en: 'The fallas workshop' },
      who: { name: 'Vicent', role: { es: 'artista fallero', en: 'fallas artist' } },
      levels: {
        A0: {
          scene: { es: 'Es un taller muy grande. Hay figuras enormes de cartón y madera. Vicent pinta una cara gigante.', en: 'It is a very big workshop. There are huge figures made of cardboard and wood. Vicent is painting a giant face.' },
          opener: { es: '¡Hola! Soy Vicent. Hago figuras para las Fallas. ¿Te gustan?', en: 'Hello! I am Vicent. I make figures for the Fallas. Do you like them?' },
          decide: {
            ask: { es: 'Vicent tiene tres figuras. ¿Cuál te gusta más?', en: 'Vicent has three figures. Which one do you like most?' },
            options: [
              { say: { es: 'El dragón verde.', en: 'The green dragon.' }, then: { es: 'Vicent dice: «Es muy grande. ¡Mide diez metros!»', en: 'Vicent says: “It is very big. It is ten metres tall!”' } },
              { say: { es: 'La señora con flores.', en: 'The lady with flowers.' }, then: { es: 'Vicent dice: «Es mi madre. ¡No se lo digas!»', en: 'Vicent says: “It is my mother. Don’t tell her!”' } },
              { say: { es: 'El político con la nariz larga.', en: 'The politician with the long nose.' }, then: { es: 'Vicent se ríe: «Todos quieren ese».', en: 'Vicent laughs: “Everyone wants that one.”' } },
            ],
          },
          twist: { es: 'Vicent dice: «El 19 de marzo quemamos todo». ¿Qué dices?', en: 'Vicent says: “On 19 March we burn everything.” What do you say?' },
          questions: [
            { q: { es: '¿Te gusta pintar?', en: 'Do you like painting?' }, help: { es: 'Sí, mucho. / No, no pinto.', en: 'Yes, a lot. / No, I don’t paint.' }, follow: [{ es: '¿Qué pintas?', en: 'What do you paint?' }, { es: '¿Con qué colores?', en: 'With which colours?' }] },
            { q: { es: '¿Hay fiestas grandes en tu ciudad?', en: 'Are there big festivals in your city?' }, help: { es: 'Sí, en… / No, no hay.', en: 'Yes, in… / No, there aren’t.' }, follow: [{ es: '¿Cómo se llama la fiesta?', en: 'What is the festival called?' }, { es: '¿Vas?', en: 'Do you go?' }] },
            { q: { es: '¿Te gustan los fuegos artificiales?', en: 'Do you like fireworks?' }, help: { es: 'Sí, me encantan. / No, hacen mucho ruido.', en: 'Yes, I love them. / No, they are very loud.' }, follow: [{ es: '¿Cuándo los ves?', en: 'When do you see them?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es el…', en: 'My favourite colour is…' }, follow: [{ es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }, { es: '¿Y tu casa?', en: 'And your home?' }] },
          ],
          words: [{ es: 'la figura', en: 'the figure' }, { es: 'el cartón', en: 'cardboard' }, { es: 'pintar', en: 'to paint' }, { es: 'quemar', en: 'to burn' }, { es: 'gigante', en: 'giant' }],
        },
        A1: {
          scene: { es: 'Faltan dos semanas para las Fallas. El taller está lleno de trabajo. Vicent y su equipo trabajan doce horas al día para terminar una falla de quince metros.', en: 'There are two weeks left until the Fallas. The workshop is full of work. Vicent and his team work twelve hours a day to finish a fifteen-metre falla.' },
          opener: { es: 'Trabajamos todo el año en una falla, y el último día la quemamos en una noche. La gente siempre me pregunta si me pongo triste. Yo digo que no: así el año siguiente empiezo otra. ¿Tú podrías hacer algo tan bonito para quemarlo?', en: 'We work all year on a falla, and on the last day we burn it in one night. People always ask me if I get sad. I say no: that way, the next year I start another one. Could you make something so beautiful just to burn it?' },
          decide: {
            ask: { es: 'Vicent te deja elegir el tema de una figura pequeña. ¿Qué eliges?', en: 'Vicent lets you choose the theme of a small figure. What do you choose?' },
            options: [
              { say: { es: 'Un turista con mil fotos en el móvil.', en: 'A tourist with a thousand photos on his phone.' }, then: { es: 'Vicent pinta el móvil más grande que la cabeza. Todos se ríen.', en: 'Vicent paints the phone bigger than the head. Everyone laughs.' } },
              { say: { es: 'Un gato que manda en una oficina.', en: 'A cat in charge of an office.' }, then: { es: 'El gato tiene corbata y gafas. Los niños del barrio lo adoran.', en: 'The cat has a tie and glasses. The kids from the neighbourhood adore it.' } },
              { say: { es: 'Un profesor dormido en clase.', en: 'A teacher asleep in class.' }, then: { es: 'Vicent dice: «Mi hermana es profesora. Le va a encantar».', en: 'Vicent says: “My sister is a teacher. She’s going to love it.”' } },
            ],
          },
          twist: { es: 'Empieza a llover dentro del taller: hay un agujero en el techo y la pintura está fresca. ¿Qué haces?', en: 'It starts raining inside the workshop: there is a hole in the roof and the paint is still wet. What do you do?' },
          questions: [
            { q: { es: '¿Cuántas horas trabajas o estudias al día?', en: 'How many hours a day do you work or study?' }, help: { es: 'Trabajo / estudio unas… horas.', en: 'I work / study about… hours.' }, follow: [{ es: '¿Es mucho o poco?', en: 'Is that a lot or a little?' }, { es: '¿Cuándo descansas?', en: 'When do you rest?' }] },
            { q: { es: '¿Haces cosas con las manos?', en: 'Do you make things with your hands?' }, help: { es: 'Sí, a veces hago… / No, no soy bueno con las manos.', en: 'Yes, sometimes I make… / No, I’m not good with my hands.' }, follow: [{ es: '¿Qué te gustaría aprender a hacer?', en: 'What would you like to learn to make?' }, { es: '¿Quién te enseña?', en: 'Who teaches you?' }] },
            { q: { es: '¿Te gusta trabajar en equipo?', en: 'Do you like working in a team?' }, help: { es: 'Sí, porque… / Prefiero trabajar solo.', en: 'Yes, because… / I prefer working alone.' }, follow: [{ es: '¿Con quién trabajas?', en: 'Who do you work with?' }, { es: '¿Qué es lo más difícil?', en: 'What is the hardest part?' }] },
            { q: { es: '¿Guardas cosas viejas?', en: 'Do you keep old things?' }, help: { es: 'Sí, guardo… / No, tiro todo.', en: 'Yes, I keep… / No, I throw everything away.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Dónde las guardas?', en: 'Where do you keep them?' }] },
          ],
          words: [{ es: 'el taller', en: 'the workshop' }, { es: 'el equipo', en: 'the team' }, { es: 'el agujero', en: 'the hole' }, { es: 'el techo', en: 'the roof / ceiling' }, { es: 'la pintura', en: 'the paint' }],
        },
        A2: {
          scene: { es: 'Cada año el público vota la figura más bonita de todas las fallas. Esa figura, el «ninot indultat», es la única que no se quema y va a un museo. Vicent nunca ha ganado. Este año su figura es una abuela que baila con su nieto.', en: 'Every year the public votes for the most beautiful figure of all the fallas. That figure, the “ninot indultat”, is the only one that isn’t burned and goes to a museum. Vicent has never won. This year his figure is a grandmother dancing with her grandson.' },
          opener: { es: 'Mi padre también era artista fallero. Trabajó cuarenta años y nunca ganó el indulto. Esta abuela es la cara de mi madre, y el niño es mi hijo. Si gana, mi familia se queda en el museo para siempre. Si no gana, la veo arder el día diecinueve. ¿Tú qué salvarías del fuego?', en: 'My father was also a fallas artist. He worked for forty years and never won the pardon. This grandmother has my mother’s face, and the boy is my son. If she wins, my family stays in the museum forever. If not, I watch her burn on the nineteenth. What would you save from the fire?' },
          decide: {
            ask: { es: 'Un hombre rico quiere comprar la figura antes de la votación. ¿Qué le aconsejas a Vicent?', en: 'A rich man wants to buy the figure before the vote. What do you advise Vicent?' },
            options: [
              { say: { es: 'Que la venda. Así la salva seguro.', en: 'Sell it. That way he saves it for sure.' }, then: { es: 'La figura termina en un hotel de lujo. Vicent está tranquilo, pero un poco triste.', en: 'The figure ends up in a luxury hotel. Vicent is calm, but a little sad.' } },
              { say: { es: 'Que espere a la votación. Las Fallas son así.', en: 'Wait for the vote. That’s what the Fallas are like.' }, then: { es: 'La figura gana por veinte votos. Vicent llora delante de todo el barrio.', en: 'The figure wins by twenty votes. Vicent cries in front of the whole neighbourhood.' } },
              { say: { es: 'Que haga una copia pequeña para su madre.', en: 'Make a small copy for his mother.' }, then: { es: 'La madre pone la copia en el salón. Dice que se parece más a su hermana.', en: 'His mother puts the copy in the living room. She says it looks more like her sister.' } },
            ],
          },
          twist: { es: 'La noche antes de la votación alguien rompe un brazo de la figura. Vicent sospecha de otro taller. ¿Qué hace?', en: 'The night before the vote someone breaks an arm off the figure. Vicent suspects another workshop. What does he do?' },
          questions: [
            { q: { es: '¿Qué objeto de tu casa no venderías nunca?', en: 'Which object in your home would you never sell?' }, help: { es: 'Nunca vendería… porque…', en: 'I would never sell… because…' }, follow: [{ es: '¿Desde cuándo lo tienes?', en: 'How long have you had it?' }, { es: '¿Quién te lo dio?', en: 'Who gave it to you?' }] },
            { q: { es: '¿Has ganado algún concurso o premio?', en: 'Have you ever won a contest or prize?' }, help: { es: 'Sí, una vez gané… / No, nunca he ganado nada.', en: 'Yes, once I won… / No, I have never won anything.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Qué premio te gustaría ganar?', en: 'What prize would you like to win?' }] },
            { q: { es: '¿Tu familia tiene una profesión que pasa de padres a hijos?', en: 'Does your family have a profession passed down from parents to children?' }, help: { es: 'Sí, en mi familia todos son… / No, cada uno hace algo diferente.', en: 'Yes, in my family everyone is a… / No, everyone does something different.' }, follow: [{ es: '¿Tú la has seguido?', en: 'Have you followed it?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Qué fiesta tradicional te gustaría ver en otro país?', en: 'Which traditional festival would you like to see in another country?' }, help: { es: 'Me gustaría ver… en…', en: 'I would like to see… in…' }, follow: [{ es: '¿Qué sabes de ella?', en: 'What do you know about it?' }, { es: '¿Con quién irías?', en: 'Who would you go with?' }] },
          ],
          words: [{ es: 'votar', en: 'to vote' }, { es: 'el indulto', en: 'the pardon' }, { es: 'arder', en: 'to burn (in flames)' }, { es: 'sospechar', en: 'to suspect' }, { es: 'el barrio', en: 'the neighbourhood' }],
        },
        B1: {
          scene: { es: 'Las fallas cuestan cada vez más dinero y muchas comisiones de barrio tienen deudas. Además, algunos vecinos se quejan del ruido, del humo y de la ciudad cerrada durante semanas. Una televisión invita a Vicent a un debate: ¿hay que cambiar las Fallas?', en: 'The fallas cost more and more money and many neighbourhood committees are in debt. Also, some residents complain about the noise, the smoke and the city being closed off for weeks. A TV channel invites Vicent to a debate: should the Fallas change?' },
          opener: { es: 'Yo vivo de las Fallas, así que no soy neutral. Pero también entiendo a la vecina mayor que no puede dormir en dos semanas. Hay quien dice que quemar tanto es un desperdicio; yo creo que justamente eso es lo que las hace únicas. ¿Hasta dónde debería cambiar una tradición para convivir con todos?', en: 'I make my living from the Fallas, so I’m not neutral. But I also understand the elderly neighbour who can’t sleep for two weeks. Some say burning so much is a waste; I think that is exactly what makes them unique. How far should a tradition change to coexist with everyone?' },
          decide: {
            ask: { es: 'En el debate, Vicent puede hacer una sola propuesta. ¿Cuál debería ser?', en: 'In the debate, Vicent can make only one proposal. Which should it be?' },
            options: [
              { say: { es: 'Usar materiales que contaminen menos al quemarse.', en: 'Use materials that pollute less when burned.' }, then: { es: 'Los ecologistas lo apoyan. Algunos artistas dicen que es más caro y más lento.', en: 'Environmentalists support him. Some artists say it is more expensive and slower.' } },
              { say: { es: 'Reducir los días de petardos en los barrios con hospitales.', en: 'Cut the days of firecrackers in neighbourhoods with hospitals.' }, then: { es: 'La propuesta gusta a casi todos. Las comisiones de esos barrios protestan un poco.', en: 'Almost everyone likes the proposal. The committees in those neighbourhoods complain a little.' } },
              { say: { es: 'No cambiar nada: la tradición se respeta tal como es.', en: 'Change nothing: the tradition is respected as it is.' }, then: { es: 'Los falleros lo aplauden. Las redes sociales se llenan de críticas durante días.', en: 'Fallas fans applaud him. Social media fills with criticism for days.' } },
            ],
          },
          twist: { es: 'En directo, la presentadora le pregunta a Vicent cuánto cobra por una falla. La cifra es muy alta. ¿Cómo debería responder?', en: 'Live on air, the presenter asks Vicent how much he charges for a falla. The figure is very high. How should he respond?' },
          questions: [
            { q: { es: '¿Qué tradición de tu país te parece difícil de defender hoy?', en: 'Which tradition in your country seems hard to defend today?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Debería desaparecer o cambiar?', en: 'Should it disappear or change?' }, { es: '¿Qué opinan tus amigos?', en: 'What do your friends think?' }] },
            { q: { es: '¿Has vivido cerca de una fiesta muy ruidosa?', en: 'Have you lived near a very noisy festival?' }, help: { es: 'Sí, cuando vivía en… / No, por suerte.', en: 'Yes, when I lived in… / No, luckily.' }, follow: [{ es: '¿Cómo lo llevabas?', en: 'How did you cope?' }, { es: '¿Te quejaste?', en: 'Did you complain?' }] },
            { q: { es: '¿Es un desperdicio gastar mucho dinero en algo que dura un día?', en: 'Is it a waste to spend a lot of money on something that lasts one day?' }, help: { es: 'Depende de… / Para mí, sí / no, porque…', en: 'It depends on… / For me, yes / no, because…' }, follow: [{ es: '¿Pondrías un ejemplo?', en: 'Could you give an example?' }, { es: '¿Tú lo has hecho alguna vez?', en: 'Have you ever done it?' }] },
            { q: { es: '¿Te sentirías cómodo hablando en un debate de televisión?', en: 'Would you feel comfortable speaking in a TV debate?' }, help: { es: 'Sí, si el tema… / No, me pondría nervioso.', en: 'Yes, if the topic… / No, I would get nervous.' }, follow: [{ es: '¿Sobre qué tema hablarías?', en: 'What topic would you talk about?' }, { es: '¿Cómo te prepararías?', en: 'How would you prepare?' }] },
          ],
          words: [{ es: 'la comisión', en: 'the committee' }, { es: 'la deuda', en: 'the debt' }, { es: 'el desperdicio', en: 'the waste' }, { es: 'convivir', en: 'to coexist / live together' }, { es: 'el petardo', en: 'the firecracker' }],
        },
      },
    },
    // ------------------------------------------------------------ the orange grove
    {
      id: 'naranjos',
      name: { es: 'El huerto de naranjos', en: 'The orange grove' },
      who: { name: 'Pepa', role: { es: 'agricultora', en: 'farmer' } },
      levels: {
        A0: {
          scene: { es: 'Es un campo con muchos árboles. Los árboles tienen naranjas. Pepa tiene una caja llena.', en: 'It is a field with many trees. The trees have oranges. Pepa has a full box.' },
          opener: { es: '¡Hola! Soy Pepa. Estas son mis naranjas. ¿Quieres una?', en: 'Hello! I am Pepa. These are my oranges. Do you want one?' },
          decide: {
            ask: { es: 'Pepa tiene tres cosas. ¿Qué quieres?', en: 'Pepa has three things. What do you want?' },
            options: [
              { say: { es: 'Una naranja, por favor.', en: 'An orange, please.' }, then: { es: 'Pepa dice: «Está muy dulce. ¡Cómela aquí!»', en: 'Pepa says: “It is very sweet. Eat it here!”' } },
              { say: { es: 'Un zumo de naranja.', en: 'An orange juice.' }, then: { es: 'Pepa dice: «Zumo natural. ¡Del árbol al vaso!»', en: 'Pepa says: “Fresh juice. From the tree to the glass!”' } },
              { say: { es: 'Un limón, por favor.', en: 'A lemon, please.' }, then: { es: 'Pepa se ríe: «¿Un limón? ¡Qué raro eres!»', en: 'Pepa laughs: “A lemon? How strange you are!”' } },
            ],
          },
          twist: { es: 'Pepa te da una caja vacía. Dice: «¡Ahora tú! Diez naranjas». ¿Qué dices?', en: 'Pepa gives you an empty box. She says: “Now you! Ten oranges.” What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la fruta?', en: 'Do you like fruit?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué fruta te gusta?', en: 'Which fruit do you like?' }, { es: '¿Cuándo la comes?', en: 'When do you eat it?' }] },
            { q: { es: '¿Tomas zumo por la mañana?', en: 'Do you drink juice in the morning?' }, help: { es: 'Sí, de naranja. / No, tomo café.', en: 'Yes, orange juice. / No, I drink coffee.' }, follow: [{ es: '¿De qué fruta?', en: 'From which fruit?' }, { es: '¿Natural?', en: 'Freshly made?' }] },
            { q: { es: '¿Hay árboles cerca de tu casa?', en: 'Are there trees near your home?' }, help: { es: 'Sí, muchos. / No, pocos.', en: 'Yes, many. / No, few.' }, follow: [{ es: '¿Qué árboles?', en: 'Which trees?' }, { es: '¿Tienen fruta?', en: 'Do they have fruit?' }] },
            { q: { es: '¿Te gusta el campo o la ciudad?', en: 'Do you like the countryside or the city?' }, help: { es: 'Me gusta el campo. / Me gusta la ciudad.', en: 'I like the countryside. / I like the city.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Dónde vives?', en: 'Where do you live?' }] },
          ],
          words: [{ es: 'la naranja', en: 'the orange' }, { es: 'el árbol', en: 'the tree' }, { es: 'el zumo', en: 'juice (Spain)' }, { es: 'dulce', en: 'sweet' }, { es: 'la caja', en: 'the box' }],
        },
        A1: {
          scene: { es: 'Es enero, el mejor mes para las naranjas. Pepa recoge fruta con su hijo y dos trabajadores. Hace frío por la mañana, pero a mediodía hace sol. El campo huele a azahar.', en: 'It is January, the best month for oranges. Pepa is picking fruit with her son and two workers. It is cold in the morning, but at noon it is sunny. The field smells of orange blossom.' },
          opener: { es: 'Este huerto era de mi abuelo. Yo vengo cada día a las siete. Mi hijo prefiere la ciudad, pero en enero siempre viene a ayudar. ¿Tú has trabajado alguna vez en el campo?', en: 'This grove belonged to my grandfather. I come every day at seven. My son prefers the city, but in January he always comes to help. Have you ever worked in the countryside?' },
          decide: {
            ask: { es: 'Pepa te ofrece un trabajo de un día. ¿Qué quieres hacer?', en: 'Pepa offers you a one-day job. What do you want to do?' },
            options: [
              { say: { es: 'Subir a la escalera y recoger naranjas.', en: 'Climb the ladder and pick oranges.' }, then: { es: 'Al final del día tienes los brazos cansados y veinte cajas llenas.', en: 'At the end of the day your arms are tired and you have twenty full boxes.' } },
              { say: { es: 'Llevar las cajas a la furgoneta.', en: 'Carry the boxes to the van.' }, then: { es: 'Las cajas pesan mucho. El hijo de Pepa te enseña un truco para la espalda.', en: 'The boxes are very heavy. Pepa’s son shows you a trick for your back.' } },
              { say: { es: 'Vender naranjas en la puerta del huerto.', en: 'Sell oranges at the gate of the grove.' }, then: { es: 'Vendes treinta kilos a vecinos y ciclistas. Pepa te da una bolsa de regalo.', en: 'You sell thirty kilos to neighbours and cyclists. Pepa gives you a bag as a present.' } },
            ],
          },
          twist: { es: 'De repente empieza a granizar. Las naranjas están todavía en los árboles. ¿Qué haces?', en: 'Suddenly it starts hailing. The oranges are still on the trees. What do you do?' },
          questions: [
            { q: { es: '¿Has trabajado alguna vez al aire libre?', en: 'Have you ever worked outdoors?' }, help: { es: 'Sí, en… / No, siempre en oficina.', en: 'Yes, in… / No, always in an office.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Qué tiempo hacía?', en: 'What was the weather like?' }] },
            { q: { es: '¿Qué fruta se cultiva en tu país?', en: 'Which fruit is grown in your country?' }, help: { es: 'En mi país hay mucho / mucha…', en: 'In my country there is a lot of…' }, follow: [{ es: '¿Es cara o barata?', en: 'Is it expensive or cheap?' }, { es: '¿En qué mes?', en: 'In which month?' }] },
            { q: { es: '¿A qué hora te levantas para trabajar o estudiar?', en: 'What time do you get up to work or study?' }, help: { es: 'Me levanto a las…', en: 'I get up at…' }, follow: [{ es: '¿Es temprano para ti?', en: 'Is that early for you?' }, { es: '¿Desayunas en casa?', en: 'Do you have breakfast at home?' }] },
            { q: { es: '¿Compras fruta en el mercado o en el supermercado?', en: 'Do you buy fruit at the market or at the supermarket?' }, help: { es: 'En el mercado, porque… / En el supermercado, porque…', en: 'At the market, because… / At the supermarket, because…' }, follow: [{ es: '¿Cuánta fruta compras?', en: 'How much fruit do you buy?' }, { es: '¿Qué día?', en: 'On which day?' }] },
          ],
          words: [{ es: 'recoger', en: 'to pick / collect' }, { es: 'el huerto', en: 'the grove / orchard' }, { es: 'la escalera', en: 'the ladder' }, { es: 'el azahar', en: 'orange blossom' }, { es: 'granizar', en: 'to hail' }],
        },
        A2: {
          scene: { es: 'Las naranjas de Pepa son muy buenas, pero los supermercados pagan muy poco por ellas. Este año pagan menos de lo que cuesta recogerlas. Muchos vecinos han dejado sus huertos y una empresa quiere comprar el campo de Pepa para construir casas.', en: 'Pepa’s oranges are very good, but supermarkets pay very little for them. This year they pay less than it costs to pick them. Many neighbours have abandoned their groves and a company wants to buy Pepa’s land to build houses.' },
          opener: { es: 'Mi abuelo plantó estos árboles después de la guerra. Algunos tienen más de setenta años. El año pasado tiré miles de kilos de naranjas porque nadie las compraba a un precio justo. Me duele el corazón. ¿Tú vendes la tierra de tu familia si no da dinero?', en: 'My grandfather planted these trees after the war. Some are over seventy years old. Last year I threw away thousands of kilos of oranges because nobody would buy them at a fair price. It breaks my heart. Would you sell your family’s land if it didn’t make money?' },
          decide: {
            ask: { es: 'Pepa tiene que decidir antes del verano. ¿Qué le aconsejas?', en: 'Pepa has to decide before summer. What do you advise her?' },
            options: [
              { say: { es: 'Que venda las naranjas por internet, directamente a las familias.', en: 'Sell the oranges online, directly to families.' }, then: { es: 'Las primeras cajas llegan a Alemania y Francia. Pepa tiene que aprender a usar el ordenador.', en: 'The first boxes reach Germany and France. Pepa has to learn how to use the computer.' } },
              { say: { es: 'Que venda el campo y descanse por fin.', en: 'Sell the land and finally rest.' }, then: { es: 'Pepa compra un piso cerca del mar. Pero cada enero vuelve a mirar los árboles desde la carretera.', en: 'Pepa buys a flat by the sea. But every January she comes back to look at the trees from the road.' } },
              { say: { es: 'Que se una a una cooperativa con otros agricultores.', en: 'Join a cooperative with other farmers.' }, then: { es: 'Juntos negocian un precio mejor. No es mucho, pero ya no pierden dinero.', en: 'Together they negotiate a better price. It isn’t much, but they no longer lose money.' } },
            ],
          },
          twist: { es: 'El hijo de Pepa le dice que quiere dejar su trabajo en la ciudad y quedarse con el huerto. Pepa no sabe si alegrarse o preocuparse. ¿Qué le dices?', en: 'Pepa’s son tells her he wants to quit his job in the city and take over the grove. Pepa doesn’t know whether to be happy or worried. What do you tell her?' },
          questions: [
            { q: { es: '¿Sabes de dónde viene la fruta que comes?', en: 'Do you know where the fruit you eat comes from?' }, help: { es: 'Sí, normalmente de… / No, nunca lo miro.', en: 'Yes, usually from… / No, I never check.' }, follow: [{ es: '¿Te importa?', en: 'Does it matter to you?' }, { es: '¿Lo vas a mirar ahora?', en: 'Will you check now?' }] },
            { q: { es: '¿Tu familia tiene tierras o una casa en el campo?', en: 'Does your family have land or a house in the countryside?' }, help: { es: 'Sí, mis abuelos tenían… / No, somos de ciudad.', en: 'Yes, my grandparents had… / No, we are city people.' }, follow: [{ es: '¿Todavía la tenéis?', en: 'Do you still have it?' }, { es: '¿Qué hacíais allí?', en: 'What did you do there?' }] },
            { q: { es: '¿Has comprado algo directamente a un productor?', en: 'Have you ever bought something directly from a producer?' }, help: { es: 'Sí, compré… / No, siempre en tiendas.', en: 'Yes, I bought… / No, always in shops.' }, follow: [{ es: '¿Era más caro?', en: 'Was it more expensive?' }, { es: '¿Era mejor?', en: 'Was it better?' }] },
            { q: { es: '¿Dejarías la ciudad para vivir en el campo?', en: 'Would you leave the city to live in the countryside?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Qué echarías de menos?', en: 'What would you miss?' }, { es: '¿Dónde te gustaría vivir?', en: 'Where would you like to live?' }] },
          ],
          words: [{ es: 'el precio justo', en: 'a fair price' }, { es: 'la cooperativa', en: 'the cooperative' }, { es: 'plantar', en: 'to plant' }, { es: 'la tierra', en: 'the land' }, { es: 'tirar', en: 'to throw away' }],
        },
        B1: {
          scene: { es: 'Una plaga está secando los naranjos de toda la zona. La única solución rápida es un producto químico prohibido en Europa, pero que se vende en secreto. Varios vecinos ya lo usan. Pepa ha encontrado un bote escondido en el almacén de su propio hijo.', en: 'A plague is drying out the orange trees across the whole area. The only quick solution is a chemical banned in Europe, but sold secretly. Several neighbours already use it. Pepa has found a bottle hidden in her own son’s storeroom.' },
          opener: { es: 'Llevo toda la vida defendiendo la fruta limpia. Ahora mi hijo, que dejó todo para venir al huerto, usa lo mismo que yo critico. Si lo denuncio, pierde todo. Si no hago nada, mis clientes comen algo peligroso y yo lo sé. ¿Qué pesa más: la familia o la verdad?', en: 'I’ve spent my whole life defending clean fruit. Now my son, who gave up everything to come to the grove, uses the very thing I criticise. If I report him, he loses everything. If I do nothing, my customers eat something dangerous and I know it. What weighs more: family or the truth?' },
          decide: {
            ask: { es: 'Pepa tiene que actuar antes de la próxima recogida. ¿Qué debería hacer?', en: 'Pepa has to act before the next harvest. What should she do?' },
            options: [
              { say: { es: 'Hablar con su hijo y tirar juntos esa cosecha.', en: 'Talk to her son and throw away that harvest together.' }, then: { es: 'Pierden el dinero de un año. El hijo está furioso al principio, pero luego lo entiende.', en: 'They lose a year’s money. Her son is furious at first, but later understands.' } },
              { say: { es: 'Avisar a las autoridades sin decir nombres.', en: 'Tell the authorities without giving names.' }, then: { es: 'Hay inspecciones en toda la zona. Nadie sabe quién avisó, pero el pueblo sospecha.', en: 'There are inspections across the area. Nobody knows who reported it, but the village has suspicions.' } },
              { say: { es: 'Buscar una alternativa ecológica, aunque sea lenta.', en: 'Look for an organic alternative, even if it is slow.' }, then: { es: 'La universidad le propone probar un insecto que se come la plaga. Funciona, pero tarda dos años.', en: 'The university offers to test an insect that eats the plague. It works, but takes two years.' } },
            ],
          },
          twist: { es: 'Un periodista local descubre la historia y llama a Pepa para una entrevista. ¿Debería contar lo de su hijo?', en: 'A local journalist finds out the story and calls Pepa for an interview. Should she tell about her son?' },
          questions: [
            { q: { es: '¿Denunciarías a alguien de tu familia?', en: 'Would you report someone in your family?' }, help: { es: 'Depende de lo que hiciera. / Nunca, porque…', en: 'It depends on what they did. / Never, because…' }, follow: [{ es: '¿Y a un amigo?', en: 'And a friend?' }, { es: '¿Dónde está el límite?', en: 'Where is the limit?' }] },
            { q: { es: '¿Compras productos ecológicos?', en: 'Do you buy organic products?' }, help: { es: 'Sí, sobre todo… / No, son demasiado caros.', en: 'Yes, especially… / No, they are too expensive.' }, follow: [{ es: '¿Confías en las etiquetas?', en: 'Do you trust the labels?' }, { es: '¿Notas la diferencia?', en: 'Do you notice the difference?' }] },
            { q: { es: '¿Es más importante producir barato o producir limpio?', en: 'Is it more important to produce cheaply or cleanly?' }, help: { es: 'Para mí… porque… / Ojalá fuera posible las dos cosas.', en: 'For me… because… / I wish both were possible.' }, follow: [{ es: '¿Quién debería pagar la diferencia?', en: 'Who should pay the difference?' }, { es: '¿Y en tu país?', en: 'And in your country?' }] },
            { q: { es: '¿Alguna vez has tenido que elegir entre ser leal y ser honesto?', en: 'Have you ever had to choose between being loyal and being honest?' }, help: { es: 'Sí, una vez… / Creo que no.', en: 'Yes, once… / I don’t think so.' }, follow: [{ es: '¿Qué elegiste?', en: 'What did you choose?' }, { es: '¿Lo harías igual hoy?', en: 'Would you do the same today?' }] },
          ],
          words: [{ es: 'la plaga', en: 'the plague / pest' }, { es: 'prohibido', en: 'banned' }, { es: 'denunciar', en: 'to report (to the authorities)' }, { es: 'la cosecha', en: 'the harvest' }, { es: 'ecológico', en: 'organic' }],
        },
      },
    },
    // ------------------------------------------------------------ the City of Arts and Sciences
    {
      id: 'ciencias',
      name: { es: 'La Ciudad de las Artes y las Ciencias', en: 'The City of Arts and Sciences' },
      who: { name: 'Sergio', role: { es: 'guía del museo', en: 'museum guide' } },
      levels: {
        A0: {
          scene: { es: 'Son edificios blancos y muy modernos. Hay agua azul alrededor. Sergio es guía del museo de ciencias.', en: 'They are white, very modern buildings. There is blue water all around. Sergio is a guide at the science museum.' },
          opener: { es: '¡Hola! Soy Sergio. Bienvenido al museo. ¿Qué quieres ver?', en: 'Hello! I am Sergio. Welcome to the museum. What do you want to see?' },
          decide: {
            ask: { es: 'Hay tres sitios. ¿Adónde vas?', en: 'There are three places. Where do you go?' },
            options: [
              { say: { es: 'Al acuario, con los peces.', en: 'To the aquarium, with the fish.' }, then: { es: 'Sergio dice: «Hay tiburones y delfines. ¡Es enorme!»', en: 'Sergio says: “There are sharks and dolphins. It is huge!”' } },
              { say: { es: 'Al cine en 3D.', en: 'To the 3D cinema.' }, then: { es: 'Sergio dice: «Hoy hay una película del espacio».', en: 'Sergio says: “Today there is a film about space.”' } },
              { say: { es: 'Al museo de ciencias.', en: 'To the science museum.' }, then: { es: 'Sergio dice: «¡Ven! Aquí puedes tocar todo».', en: 'Sergio says: “Come! Here you can touch everything.”' } },
            ],
          },
          twist: { es: 'Un niño pequeño llora. No encuentra a su madre. ¿Qué dices?', en: 'A small boy is crying. He can’t find his mother. What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los museos?', en: 'Do you like museums?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué museo te gusta?', en: 'Which museum do you like?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Te gustan los animales del mar?', en: 'Do you like sea animals?' }, help: { es: 'Sí, los delfines. / No, me dan miedo.', en: 'Yes, dolphins. / No, they scare me.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Nadas en el mar?', en: 'Do you swim in the sea?' }] },
            { q: { es: '¿Vas al cine?', en: 'Do you go to the cinema?' }, help: { es: 'Sí, a veces. / No, veo películas en casa.', en: 'Yes, sometimes. / No, I watch films at home.' }, follow: [{ es: '¿Qué películas te gustan?', en: 'What films do you like?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Te gusta la ciencia?', en: 'Do you like science?' }, help: { es: 'Sí, mucho. / No, prefiero el arte.', en: 'Yes, a lot. / No, I prefer art.' }, follow: [{ es: '¿Qué ciencia?', en: 'Which science?' }, { es: '¿Y en el colegio?', en: 'And at school?' }] },
          ],
          words: [{ es: 'el museo', en: 'the museum' }, { es: 'el acuario', en: 'the aquarium' }, { es: 'el tiburón', en: 'the shark' }, { es: 'el delfín', en: 'the dolphin' }, { es: 'tocar', en: 'to touch' }],
        },
        A1: {
          scene: { es: 'Es sábado y el museo está lleno de familias. Sergio hace experimentos para un grupo de niños: hoy explica la electricidad con un globo y una bola de metal.', en: 'It is Saturday and the museum is full of families. Sergio is doing experiments for a group of children: today he is explaining electricity with a balloon and a metal ball.' },
          opener: { es: 'Mi trabajo es hacer que la ciencia sea divertida. Los niños siempre me preguntan si es magia. Yo les digo que no: es física, que es mucho mejor. ¿A ti te gustaban las ciencias en el colegio?', en: 'My job is to make science fun. Children always ask me if it’s magic. I tell them no: it’s physics, which is much better. Did you like science at school?' },
          decide: {
            ask: { es: 'Sergio necesita un voluntario para un experimento. ¿Qué haces?', en: 'Sergio needs a volunteer for an experiment. What do you do?' },
            options: [
              { say: { es: 'Levanto la mano. ¡Yo quiero!', en: 'I raise my hand. Me!' }, then: { es: 'Tocas la bola de metal y el pelo se te pone de punta. Todos hacen fotos.', en: 'You touch the metal ball and your hair stands on end. Everyone takes photos.' } },
              { say: { es: 'Le digo a un niño que salga él.', en: 'I tell a child to go up instead.' }, then: { es: 'La niña sale muy contenta. Su padre te da las gracias.', en: 'The girl goes up very happy. Her father thanks you.' } },
              { say: { es: 'Me escondo detrás de una columna.', en: 'I hide behind a column.' }, then: { es: 'Sergio te ve: «Te he visto. ¡La próxima vez es tu turno!»', en: 'Sergio sees you: “I saw you. Next time it’s your turn!”' } },
            ],
          },
          twist: { es: 'Se va la luz en todo el museo. Los niños gritan. Sergio tiene una linterna. ¿Qué haces?', en: 'The power goes out in the whole museum. The children scream. Sergio has a torch. What do you do?' },
          questions: [
            { q: { es: '¿Qué asignatura te gustaba más en el colegio?', en: 'Which subject did you like best at school?' }, help: { es: 'Me gustaba… porque…', en: 'I liked… because…' }, follow: [{ es: '¿Tenías un buen profesor?', en: 'Did you have a good teacher?' }, { es: '¿Y cuál no te gustaba?', en: 'And which one didn’t you like?' }] },
            { q: { es: '¿Qué haces los sábados?', en: 'What do you do on Saturdays?' }, help: { es: 'Los sábados normalmente…', en: 'On Saturdays I usually…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Y los domingos?', en: 'And on Sundays?' }] },
            { q: { es: '¿Te gusta hablar delante de mucha gente?', en: 'Do you like speaking in front of a lot of people?' }, help: { es: 'Sí, no me da miedo. / No, me pongo nervioso.', en: 'Yes, it doesn’t scare me. / No, I get nervous.' }, follow: [{ es: '¿Cuándo lo haces?', en: 'When do you do it?' }, { es: '¿Qué haces para estar tranquilo?', en: 'What do you do to stay calm?' }] },
            { q: { es: '¿Hay un edificio moderno famoso en tu ciudad?', en: 'Is there a famous modern building in your city?' }, help: { es: 'Sí, se llama… / No, mi ciudad es antigua.', en: 'Yes, it’s called… / No, my city is old.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Para qué se usa?', en: 'What is it used for?' }] },
          ],
          words: [{ es: 'el experimento', en: 'the experiment' }, { es: 'el voluntario', en: 'the volunteer' }, { es: 'la linterna', en: 'the torch / flashlight' }, { es: 'irse la luz', en: 'to have a power cut' }, { es: 'de punta', en: 'on end (hair)' }],
        },
        A2: {
          scene: { es: 'El acuario tiene una nueva cría de delfín, la primera nacida aquí en cinco años. Todo el mundo quiere verla. Sergio tiene que dar una charla, pero un grupo de activistas protesta en la puerta: dicen que los delfines no deberían vivir en piscinas.', en: 'The aquarium has a new baby dolphin, the first born here in five years. Everyone wants to see it. Sergio has to give a talk, but a group of activists is protesting at the entrance: they say dolphins shouldn’t live in pools.' },
          opener: { es: 'De pequeño soñaba con trabajar con animales del mar. Ahora lo hago y estoy orgulloso. Pero cuando veo a los activistas, me hago preguntas. Algunos de sus argumentos son buenos. ¿Tú qué piensas de los acuarios y los zoológicos?', en: 'As a child I dreamed of working with sea animals. Now I do and I’m proud of it. But when I see the activists, I start asking myself questions. Some of their arguments are good. What do you think of aquariums and zoos?' },
          decide: {
            ask: { es: 'Una activista quiere entrar a hablar con Sergio. ¿Qué le aconsejas?', en: 'An activist wants to come in and talk to Sergio. What do you advise him?' },
            options: [
              { say: { es: 'Que la invite a la charla y la deje hablar.', en: 'Invite her to the talk and let her speak.' }, then: { es: 'La charla se convierte en un debate. El público dice que es la mejor visita del año.', en: 'The talk turns into a debate. The audience says it’s the best visit of the year.' } },
              { say: { es: 'Que no hable con ella. Él trabaja para el museo.', en: 'Not to talk to her. He works for the museum.' }, then: { es: 'La charla es normal, pero Sergio no puede dejar de pensar en las preguntas de la chica.', en: 'The talk is normal, but Sergio can’t stop thinking about the girl’s questions.' } },
              { say: { es: 'Que hable con ella después, en privado.', en: 'Talk to her afterwards, in private.' }, then: { es: 'Toman un café juntos. No están de acuerdo, pero se respetan.', en: 'They have a coffee together. They don’t agree, but they respect each other.' } },
            ],
          },
          twist: { es: 'La cría de delfín no come desde ayer. Los veterinarios están preocupados y los periodistas preguntan. ¿Qué debería decir Sergio?', en: 'The baby dolphin hasn’t eaten since yesterday. The vets are worried and journalists are asking. What should Sergio say?' },
          questions: [
            { q: { es: '¿Qué querías ser de pequeño?', en: 'What did you want to be as a child?' }, help: { es: 'De pequeño quería ser…', en: 'As a child I wanted to be…' }, follow: [{ es: '¿Por qué cambiaste?', en: 'Why did you change?' }, { es: '¿Todavía te gustaría?', en: 'Would you still like to?' }] },
            { q: { es: '¿Has ido a un zoológico o a un acuario?', en: 'Have you been to a zoo or an aquarium?' }, help: { es: 'Sí, fui a… / No, nunca.', en: 'Yes, I went to… / No, never.' }, follow: [{ es: '¿Qué animal te gustó más?', en: 'Which animal did you like most?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿Has cambiado de opinión sobre algo importante?', en: 'Have you changed your mind about something important?' }, help: { es: 'Sí, antes pensaba que… / No, siempre pienso igual.', en: 'Yes, I used to think that… / No, I always think the same.' }, follow: [{ es: '¿Qué te hizo cambiar?', en: 'What made you change?' }, { es: '¿Fue difícil?', en: 'Was it difficult?' }] },
            { q: { es: '¿Te gusta discutir con personas que piensan diferente?', en: 'Do you like discussing with people who think differently?' }, help: { es: 'Sí, aprendo mucho. / No, prefiero evitarlo.', en: 'Yes, I learn a lot. / No, I prefer to avoid it.' }, follow: [{ es: '¿Sobre qué temas?', en: 'About which topics?' }, { es: '¿Cómo terminan esas discusiones?', en: 'How do those discussions end?' }] },
          ],
          words: [{ es: 'la cría', en: 'the baby animal' }, { es: 'la charla', en: 'the talk' }, { es: 'el activista', en: 'the activist' }, { es: 'el argumento', en: 'the argument (reason)' }, { es: 'el veterinario', en: 'the vet' }],
        },
        B1: {
          scene: { es: 'La Ciudad de las Artes y las Ciencias costó mucho más dinero del previsto y algunos valencianos todavía están enfadados. Ahora el ayuntamiento quiere gastar otros millones en un nuevo edificio espectacular. Sergio es invitado a una mesa redonda en la radio: ¿vale la pena invertir en arquitectura famosa?', en: 'The City of Arts and Sciences cost far more money than planned and some people in Valencia are still angry. Now the city council wants to spend millions more on a spectacular new building. Sergio is invited to a radio round table: is it worth investing in famous architecture?' },
          opener: { es: 'Gracias a estos edificios, millones de turistas conocen Valencia y yo tengo trabajo. Pero mi abuela vive en un barrio sin ascensor ni centro de salud cerca. Cuando le hablo del museo, me pregunta quién paga todo esto. No siempre sé qué contestarle. ¿Tú crees que una ciudad necesita monumentos nuevos?', en: 'Thanks to these buildings, millions of tourists know Valencia and I have a job. But my grandmother lives in a neighbourhood with no lift and no health centre nearby. When I tell her about the museum, she asks who pays for all this. I don’t always know what to answer. Do you think a city needs new monuments?' },
          decide: {
            ask: { es: 'En la radio, Sergio tiene que tomar posición. ¿Qué debería defender?', en: 'On the radio, Sergio has to take a position. What should he defend?' },
            options: [
              { say: { es: 'Que el nuevo edificio se construya, pero con un presupuesto cerrado.', en: 'That the new building goes ahead, but with a fixed budget.' }, then: { es: 'El alcalde dice que es imposible garantizarlo. Los oyentes llaman para opinar durante una hora.', en: 'The mayor says it’s impossible to guarantee. Listeners call in with their opinions for an hour.' } },
              { say: { es: 'Que ese dinero vaya a los barrios con menos servicios.', en: 'That the money goes to neighbourhoods with fewer services.' }, then: { es: 'Su jefe en el museo no está contento. Su abuela lo escucha y lo llama emocionada.', en: 'His boss at the museum is not happy. His grandmother hears him and calls him, very moved.' } },
              { say: { es: 'Que los vecinos voten en una consulta popular.', en: 'That residents vote in a public referendum.' }, then: { es: 'La idea gusta, pero la participación es muy baja. El debate sigue abierto.', en: 'People like the idea, but turnout is very low. The debate remains open.' } },
            ],
          },
          twist: { es: 'Un oyente llama y acusa a Sergio de morder la mano que le da de comer. ¿Cómo debería responder?', en: 'A listener calls in and accuses Sergio of biting the hand that feeds him. How should he respond?' },
          questions: [
            { q: { es: '¿En qué debería gastar más dinero tu ciudad?', en: 'What should your city spend more money on?' }, help: { es: 'Creo que debería invertir en… porque…', en: 'I think it should invest in… because…' }, follow: [{ es: '¿Y en qué debería gastar menos?', en: 'And what should it spend less on?' }, { es: '¿Quién decide eso?', en: 'Who decides that?' }] },
            { q: { es: '¿Un edificio famoso puede cambiar una ciudad?', en: 'Can a famous building change a city?' }, help: { es: 'Sí, por ejemplo… / No, lo importante es…', en: 'Yes, for example… / No, what matters is…' }, follow: [{ es: '¿Conoces algún caso?', en: 'Do you know any example?' }, { es: '¿Fue para bien?', en: 'Was it for the better?' }] },
            { q: { es: '¿Criticarías públicamente a tu empresa?', en: 'Would you publicly criticise your company?' }, help: { es: 'Sí, si… / No, porque podría…', en: 'Yes, if… / No, because I could…' }, follow: [{ es: '¿Lo has hecho alguna vez?', en: 'Have you ever done it?' }, { es: '¿Qué pasaría?', en: 'What would happen?' }] },
            { q: { es: '¿Votarías en una consulta sobre tu barrio?', en: 'Would you vote in a referendum about your neighbourhood?' }, help: { es: 'Sí, siempre voto. / Depende del tema.', en: 'Yes, I always vote. / It depends on the topic.' }, follow: [{ es: '¿Qué te gustaría votar?', en: 'What would you like to vote on?' }, { es: '¿Por qué la gente no participa?', en: 'Why don’t people take part?' }] },
          ],
          words: [{ es: 'el presupuesto', en: 'the budget' }, { es: 'el ayuntamiento', en: 'the city council' }, { es: 'invertir', en: 'to invest' }, { es: 'la mesa redonda', en: 'the round table' }, { es: 'la consulta popular', en: 'the referendum' }],
        },
      },
    },
    // ------------------------------------------------------------ the Benidorm hotel
    {
      id: 'benidorm',
      name: { es: 'La recepción de un hotel en Benidorm', en: 'A hotel reception in Benidorm' },
      who: { name: 'Toni', role: { es: 'recepcionista', en: 'receptionist' } },
      levels: {
        A0: {
          scene: { es: 'Es un hotel muy alto, al lado de la playa. Hay mucha gente con maletas. Toni trabaja en la recepción.', en: 'It is a very tall hotel, next to the beach. There are a lot of people with suitcases. Toni works at reception.' },
          opener: { es: '¡Buenas tardes! Soy Toni. ¿Tiene una reserva?', en: 'Good afternoon! I am Toni. Do you have a booking?' },
          decide: {
            ask: { es: 'Toni tiene tres habitaciones. ¿Cuál quieres?', en: 'Toni has three rooms. Which one do you want?' },
            options: [
              { say: { es: 'Una habitación con vistas al mar.', en: 'A room with a sea view.' }, then: { es: 'Toni dice: «Piso veinte. ¡Las vistas son increíbles!»', en: 'Toni says: “Twentieth floor. The views are incredible!”' } },
              { say: { es: 'Una habitación tranquila, por favor.', en: 'A quiet room, please.' }, then: { es: 'Toni dice: «Al lado de la piscina no. ¡Muy bien!»', en: 'Toni says: “Not next to the pool. Very good!”' } },
              { say: { es: 'La habitación más barata.', en: 'The cheapest room.' }, then: { es: 'Toni dice: «Es pequeña, pero tiene balcón».', en: 'Toni says: “It is small, but it has a balcony.”' } },
            ],
          },
          twist: { es: 'Toni no encuentra tu reserva en el ordenador. ¿Qué dices?', en: 'Toni can’t find your booking on the computer. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la playa?', en: 'Do you like the beach?' }, help: { es: 'Sí, mucho. / No, prefiero la montaña.', en: 'Yes, a lot. / No, I prefer the mountains.' }, follow: [{ es: '¿Qué playa te gusta?', en: 'Which beach do you like?' }, { es: '¿Nadas?', en: 'Do you swim?' }] },
            { q: { es: '¿Viajas en verano?', en: 'Do you travel in summer?' }, help: { es: 'Sí, siempre. / No, trabajo.', en: 'Yes, always. / No, I work.' }, follow: [{ es: '¿Adónde?', en: 'Where to?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Prefieres hotel o apartamento?', en: 'Do you prefer a hotel or an apartment?' }, help: { es: 'Prefiero un hotel. / Prefiero un apartamento.', en: 'I prefer a hotel. / I prefer an apartment.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y camping?', en: 'And camping?' }] },
            { q: { es: '¿Llevas mucho equipaje?', en: 'Do you take a lot of luggage?' }, help: { es: 'Sí, dos maletas. / No, solo una mochila.', en: 'Yes, two suitcases. / No, just a backpack.' }, follow: [{ es: '¿Qué llevas siempre?', en: 'What do you always take?' }, { es: '¿Y qué olvidas?', en: 'And what do you forget?' }] },
          ],
          words: [{ es: 'la reserva', en: 'the booking' }, { es: 'la habitación', en: 'the room' }, { es: 'la maleta', en: 'the suitcase' }, { es: 'las vistas', en: 'the view' }, { es: 'la piscina', en: 'the swimming pool' }],
        },
        A1: {
          scene: { es: 'Es agosto y el hotel está completo. Hay turistas británicos, familias españolas y jubilados del norte de Europa. Toni habla cuatro idiomas y trabaja de noche esta semana.', en: 'It is August and the hotel is full. There are British tourists, Spanish families and retired people from northern Europe. Toni speaks four languages and is working nights this week.' },
          opener: { es: 'En recepción ves de todo: gente feliz, gente enfadada, gente que pierde la llave tres veces en una noche. Mi regla es sonreír siempre, aunque sean las cuatro de la mañana. ¿Tú qué haces cuando un cliente está muy enfadado?', en: 'At reception you see everything: happy people, angry people, people who lose their key three times in one night. My rule is to always smile, even if it’s four in the morning. What do you do when a customer is very angry?' },
          decide: {
            ask: { es: 'Son las tres de la mañana. Un cliente se queja de la música de la habitación de al lado. ¿Qué haces?', en: 'It is three in the morning. A guest complains about music in the room next door. What do you do?' },
            options: [
              { say: { es: 'Subo y llamo a la puerta de la fiesta.', en: 'I go up and knock on the party room’s door.' }, then: { es: 'Abren cinco chicos con disfraces de piratas. Bajan la música y te ofrecen pizza.', en: 'Five boys in pirate costumes open the door. They turn the music down and offer you pizza.' } },
              { say: { es: 'Le cambio la habitación al cliente.', en: 'I give the guest a different room.' }, then: { es: 'El cliente duerme tranquilo. Por la mañana te deja una propina.', en: 'The guest sleeps peacefully. In the morning he leaves you a tip.' } },
              { say: { es: 'Llamo a seguridad.', en: 'I call security.' }, then: { es: 'El guardia tarda veinte minutos. Cuando llega, la fiesta ya ha terminado.', en: 'The guard takes twenty minutes. When he arrives, the party is already over.' } },
            ],
          },
          twist: { es: 'Una señora mayor baja en pijama. Dice que hay un lagarto en su baño. ¿Qué haces?', en: 'An elderly lady comes down in her pyjamas. She says there is a lizard in her bathroom. What do you do?' },
          questions: [
            { q: { es: '¿Has trabajado de noche alguna vez?', en: 'Have you ever worked nights?' }, help: { es: 'Sí, cuando… / No, nunca.', en: 'Yes, when… / No, never.' }, follow: [{ es: '¿Cómo dormías?', en: 'How did you sleep?' }, { es: '¿Te gustaba?', en: 'Did you like it?' }] },
            { q: { es: '¿Cuántos idiomas hablas?', en: 'How many languages do you speak?' }, help: { es: 'Hablo… idiomas: …', en: 'I speak… languages: …' }, follow: [{ es: '¿Cuál es el más difícil?', en: 'Which is the hardest?' }, { es: '¿Cuál quieres aprender?', en: 'Which do you want to learn?' }] },
            { q: { es: '¿Qué haces cuando no puedes dormir?', en: 'What do you do when you can’t sleep?' }, help: { es: 'Leo / miro el móvil / me levanto…', en: 'I read / look at my phone / get up…' }, follow: [{ es: '¿Te pasa mucho?', en: 'Does it happen often?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Te gustan los sitios con mucha gente?', en: 'Do you like places with lots of people?' }, help: { es: 'Sí, me divierto. / No, prefiero sitios tranquilos.', en: 'Yes, I have fun. / No, I prefer quiet places.' }, follow: [{ es: '¿Adónde vas para estar tranquilo?', en: 'Where do you go to be at peace?' }, { es: '¿Y de vacaciones?', en: 'And on holiday?' }] },
          ],
          words: [{ es: 'completo', en: 'full (no vacancies)' }, { es: 'quejarse', en: 'to complain' }, { es: 'la propina', en: 'the tip' }, { es: 'la llave', en: 'the key' }, { es: 'el lagarto', en: 'the lizard' }],
        },
        A2: {
          scene: { es: 'Benidorm era un pueblo de pescadores en los años cincuenta. Hoy tiene más rascacielos por habitante que casi ninguna ciudad del mundo. Toni nació aquí. Su abuelo era pescador y todavía vive en el casco antiguo, entre bares para turistas.', en: 'Benidorm was a fishing village in the fifties. Today it has more skyscrapers per resident than almost any city in the world. Toni was born here. His grandfather was a fisherman and still lives in the old town, among bars for tourists.' },
          opener: { es: 'Mi abuelo dice que antes conocía a todos los vecinos y ahora no conoce a nadie. Yo, en cambio, tengo trabajo gracias al turismo. Él odia los rascacielos; a mí me parecen bonitos de noche. ¿Tu ciudad ha cambiado mucho desde que eras pequeño?', en: 'My grandfather says that he used to know all the neighbours and now he knows nobody. I, on the other hand, have a job thanks to tourism. He hates the skyscrapers; I think they look beautiful at night. Has your city changed a lot since you were little?' },
          decide: {
            ask: { es: 'El hotel le ofrece a Toni un puesto de director en otra ciudad. ¿Qué le aconsejas?', en: 'The hotel offers Toni a manager’s job in another city. What do you advise him?' },
            options: [
              { say: { es: 'Que acepte. Es una gran oportunidad.', en: 'Accept. It’s a great opportunity.' }, then: { es: 'Toni se va a Málaga. Llama a su abuelo cada domingo y le manda fotos del mar.', en: 'Toni moves to Málaga. He calls his grandfather every Sunday and sends him photos of the sea.' } },
              { say: { es: 'Que se quede cerca de su abuelo.', en: 'Stay close to his grandfather.' }, then: { es: 'Toni se queda. Los domingos sale a pescar con su abuelo, como cuando era niño.', en: 'Toni stays. On Sundays he goes fishing with his grandfather, like when he was a boy.' } },
              { say: { es: 'Que pida el mismo puesto, pero aquí en Benidorm.', en: 'Ask for the same job, but here in Benidorm.' }, then: { es: 'La empresa dice que lo va a pensar. Seis meses después, lo llaman.', en: 'The company says it will think about it. Six months later, they call him.' } },
            ],
          },
          twist: { es: 'Un cliente famoso llega sin reserva y el hotel está lleno. Ofrece mucho dinero por una habitación. ¿Qué hace Toni?', en: 'A famous guest arrives without a booking and the hotel is full. He offers a lot of money for a room. What does Toni do?' },
          questions: [
            { q: { es: '¿Cómo era tu barrio cuando eras pequeño?', en: 'What was your neighbourhood like when you were little?' }, help: { es: 'Era… y había…', en: 'It was… and there was…' }, follow: [{ es: '¿Qué ha cambiado?', en: 'What has changed?' }, { es: '¿Qué echas de menos?', en: 'What do you miss?' }] },
            { q: { es: '¿Te gustan los rascacielos?', en: 'Do you like skyscrapers?' }, help: { es: 'Sí, me parecen… / No, prefiero…', en: 'Yes, I think they are… / No, I prefer…' }, follow: [{ es: '¿Vivirías en uno?', en: 'Would you live in one?' }, { es: '¿En qué piso?', en: 'On which floor?' }] },
            { q: { es: '¿Te irías a vivir lejos de tu familia por un trabajo?', en: 'Would you move far from your family for a job?' }, help: { es: 'Sí, si el trabajo… / No, mi familia es lo primero.', en: 'Yes, if the job… / No, my family comes first.' }, follow: [{ es: '¿Lo has hecho ya?', en: 'Have you done it already?' }, { es: '¿Adónde irías?', en: 'Where would you go?' }] },
            { q: { es: '¿Qué hacías de vacaciones de niño?', en: 'What did you do on holiday as a child?' }, help: { es: 'Normalmente íbamos a…', en: 'We usually went to…' }, follow: [{ es: '¿Con quién ibas?', en: 'Who did you go with?' }, { es: '¿Volverías a ese lugar?', en: 'Would you go back to that place?' }] },
          ],
          words: [{ es: 'el rascacielos', en: 'the skyscraper' }, { es: 'el casco antiguo', en: 'the old town' }, { es: 'el pescador', en: 'the fisherman' }, { es: 'el puesto', en: 'the position / job' }, { es: 'echar de menos', en: 'to miss' }],
        },
        B1: {
          scene: { es: 'Los pisos turísticos han subido tanto los alquileres que muchos trabajadores de hotel ya no pueden vivir en Benidorm. Toni comparte un piso con tres compañeros a cuarenta minutos en autobús. Mientras, su jefe le pide que convenza a los clientes de reservar más noches.', en: 'Holiday flats have pushed rents up so much that many hotel workers can no longer afford to live in Benidorm. Toni shares a flat with three colleagues forty minutes away by bus. Meanwhile, his boss asks him to persuade guests to book more nights.' },
          opener: { es: 'Es curioso: trabajo en el lugar más turístico de España y no puedo pagar un piso aquí. Mis compañeros quieren hacer huelga en pleno agosto. Si lo hacemos, quizás nos escuchan; si no, quizás nos quedamos sin trabajo. ¿Tú harías huelga en el peor momento para tu empresa?', en: 'It’s funny: I work in the most touristy place in Spain and I can’t afford a flat here. My colleagues want to go on strike in the middle of August. If we do, maybe they’ll listen to us; if not, maybe we’ll lose our jobs. Would you go on strike at the worst moment for your company?' },
          decide: {
            ask: { es: 'Mañana se vota la huelga. ¿Qué debería votar Toni?', en: 'Tomorrow there is a vote on the strike. How should Toni vote?' },
            options: [
              { say: { es: 'Sí a la huelga, en agosto, cuando más duele.', en: 'Yes to the strike, in August, when it hurts most.' }, then: { es: 'La huelga dura tres días. La empresa sube los sueldos un poco, pero no olvida los nombres.', en: 'The strike lasts three days. The company raises wages a little, but doesn’t forget the names.' } },
              { say: { es: 'No a la huelga, pero sí a negociar con el ayuntamiento.', en: 'No to the strike, but yes to negotiating with the council.' }, then: { es: 'El ayuntamiento promete pisos para trabajadores. Las obras empiezan dos años después.', en: 'The council promises flats for workers. Construction starts two years later.' } },
              { say: { es: 'Abstenerse y buscar trabajo en otro sector.', en: 'Abstain and look for work in another sector.' }, then: { es: 'Toni encuentra trabajo en una empresa de software. Gana más, pero echa de menos la recepción.', en: 'Toni finds a job at a software company. He earns more, but misses reception.' } },
            ],
          },
          twist: { es: 'Durante la huelga, una familia con un recién nacido llega al hotel y no hay nadie para atenderlos. Toni está en la puerta, con los huelguistas. ¿Qué debería hacer?', en: 'During the strike, a family with a newborn arrives at the hotel and there is nobody to look after them. Toni is at the entrance with the strikers. What should he do?' },
          questions: [
            { q: { es: '¿Los alquileres son un problema en tu ciudad?', en: 'Are rents a problem in your city?' }, help: { es: 'Sí, un piso cuesta… / No tanto, porque…', en: 'Yes, a flat costs… / Not so much, because…' }, follow: [{ es: '¿Qué solución propones?', en: 'What solution do you suggest?' }, { es: '¿Y los pisos turísticos?', en: 'And holiday flats?' }] },
            { q: { es: '¿Has participado alguna vez en una huelga o una protesta?', en: 'Have you ever taken part in a strike or a protest?' }, help: { es: 'Sí, por… / No, pero lo haría si…', en: 'Yes, for… / No, but I would if…' }, follow: [{ es: '¿Sirvió para algo?', en: 'Did it achieve anything?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
            { q: { es: '¿Cuánto tiempo tardarías como máximo en ir al trabajo?', en: 'What is the longest you would commute to work?' }, help: { es: 'Como máximo… minutos, porque…', en: 'At most… minutes, because…' }, follow: [{ es: '¿Cómo vas ahora?', en: 'How do you get there now?' }, { es: '¿Qué haces en el trayecto?', en: 'What do you do on the way?' }] },
            { q: { es: '¿El turismo debería tener límites?', en: 'Should tourism have limits?' }, help: { es: 'Sí, por ejemplo… / No, porque la economía…', en: 'Yes, for example… / No, because the economy…' }, follow: [{ es: '¿Quién debería ponerlos?', en: 'Who should set them?' }, { es: '¿Tú viajarías menos?', en: 'Would you travel less?' }] },
          ],
          words: [{ es: 'el alquiler', en: 'the rent' }, { es: 'la huelga', en: 'the strike' }, { es: 'el sueldo', en: 'the wage / salary' }, { es: 'abstenerse', en: 'to abstain' }, { es: 'convencer', en: 'to persuade' }],
        },
      },
    },
  ],
};
