// Tel Aviv y Jaffa · paddle ball on the beach, the Carmel market, the White City, the old
// port of Jaffa and a start-up office. Five places, four levels each (A0, A1, A2, B1).
// Every level is written on its own.
export default {
  id: 'tel-aviv',
  spots: [
    // ------------------------------------------------------------ the beach
    {
      id: 'playa',
      name: { es: 'La playa de Gordon', en: 'Gordon Beach' },
      who: { name: 'Yoni', role: { es: 'jugador de matkot', en: 'matkot player' } },
      levels: {
        A0: {
          scene: { es: 'Es una playa grande en la ciudad. Hace sol. Se oye «toc, toc, toc». Yoni juega con dos palas de madera y una pelota pequeña. Es el matkot.', en: 'It is a big beach in the city. It is sunny. You hear “tock, tock, tock”. Yoni plays with two wooden paddles and a small ball. It is matkot.' },
          opener: { es: '¡Hola! Soy Yoni. ¿Juegas conmigo? Es fácil.', en: 'Hello! I am Yoni. Do you play with me? It is easy.' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Sí, juego.', en: 'Yes, I play.' }, then: { es: 'La pelota va al agua. Yoni ríe: «¡Otra vez!».', en: 'The ball goes into the water. Yoni laughs: “Again!”' } },
              { say: { es: 'No, gracias. Miro.', en: 'No, thanks. I watch.' }, then: { es: 'Te sientas en la arena. Yoni juega muy rápido.', en: 'You sit on the sand. Yoni plays very fast.' } },
              { say: { es: 'Primero, agua.', en: 'Water first.' }, then: { es: 'Yoni te da una botella. Hace mucho calor.', en: 'Yoni gives you a bottle. It is very hot.' } },
            ],
          },
          twist: { es: 'Llega un perro y se lleva la pelota. ¿Corres?', en: 'A dog comes and takes the ball. Do you run?' },
          questions: [
            { q: { es: '¿Te gusta la playa?', en: 'Do you like the beach?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué playa?', en: 'Which beach?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Haces deporte?', en: 'Do you do sport?' }, help: { es: 'Sí, juego al… / No.', en: 'Yes, I play… / No.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Te gusta el sol?', en: 'Do you like the sun?' }, help: { es: 'Sí. / No, prefiero la sombra.', en: 'Yes. / No, I prefer the shade.' }, follow: [{ es: '¿Usas crema?', en: 'Do you use sun cream?' }, { es: '¿Usas gorra?', en: 'Do you wear a cap?' }] },
            { q: { es: '¿Nadas en el mar?', en: 'Do you swim in the sea?' }, help: { es: 'Sí. / No, en la piscina.', en: 'Yes. / No, in the pool.' }, follow: [{ es: '¿Nadas bien?', en: 'Do you swim well?' }, { es: '¿El agua está fría en tu país?', en: 'Is the water cold in your country?' }] },
          ],
          words: [{ es: 'la playa', en: 'the beach' }, { es: 'la pelota', en: 'the ball' }, { es: 'la pala', en: 'the paddle' }, { es: 'la arena', en: 'the sand' }, { es: 'jugar', en: 'to play' }],
        },
        A1: {
          scene: { es: 'Son las seis de la tarde y la playa está llena. Hay gente que corre, gente que hace yoga y muchos grupos que juegan al matkot. No hay red ni puntos: el objetivo es no dejar caer la pelota. Detrás de la playa hay hoteles altos y un paseo con bicicletas.', en: 'It is six in the evening and the beach is full. There are people running, people doing yoga and many groups playing matkot. There is no net and no points: the aim is not to let the ball drop. Behind the beach there are tall hotels and a promenade with bikes.' },
          opener: { es: 'Juego aquí todas las tardes después del trabajo. Mi padre jugaba con su hermano en esta misma playa. En el matkot nadie gana: si la pelota cae, los dos pierden. Me gusta eso. Mira, ¿quieres probar? Pon la pala así, delante de la cara.', en: 'I play here every evening after work. My father used to play with his brother on this same beach. In matkot nobody wins: if the ball drops, both lose. I like that. Look, do you want to try? Hold the paddle like this, in front of your face.' },
          decide: {
            ask: { es: '¿Cómo juegas?', en: 'How do you play?' },
            options: [
              { say: { es: 'Despacio y con cuidado.', en: 'Slowly and carefully.' }, then: { es: 'Llegan a veinte golpes seguidos. Yoni aplaude.', en: 'You reach twenty hits in a row. Yoni claps.' } },
              { say: { es: 'Fuerte, como un profesional.', en: 'Hard, like a pro.' }, then: { es: 'La pelota sale volando y cae en la toalla de una señora.', en: 'The ball flies off and lands on a woman’s towel.' } },
              { say: { es: 'Con los ojos cerrados.', en: 'With my eyes closed.' }, then: { es: 'Increíble: tocas la pelota una vez. Todos se ríen.', en: 'Incredible: you hit the ball once. Everyone laughs.' } },
            ],
          },
          twist: { es: 'Un hombre se queja: «¡Demasiado ruido! Quiero leer». ¿Qué le dices?', en: 'A man complains: “Too much noise! I want to read.” What do you say to him?' },
          questions: [
            { q: { es: '¿Qué haces después del trabajo o de las clases?', en: 'What do you do after work or class?' }, help: { es: 'Normalmente voy a… / Descanso en…', en: 'Usually I go to… / I rest at…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Todos los días?', en: 'Every day?' }] },
            { q: { es: '¿Prefieres los juegos con ganador o sin ganador?', en: 'Do you prefer games with or without a winner?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Eres competitivo?', en: 'Are you competitive?' }, { es: '¿Te enfadas cuando pierdes?', en: 'Do you get angry when you lose?' }] },
            { q: { es: '¿Qué juego típico hay en las playas de tu país?', en: 'What typical game is there on the beaches in your country?' }, help: { es: 'En mi país jugamos al…', en: 'In my country we play…' }, follow: [{ es: '¿Tú juegas?', en: 'Do you play?' }, { es: '¿Es difícil?', en: 'Is it hard?' }] },
            { q: { es: '¿Haces alguna actividad que hacían tus padres?', en: 'Do you do an activity your parents used to do?' }, help: { es: 'Sí, como mi padre/madre… / No.', en: 'Yes, like my father/mother… / No.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
          ],
          words: [{ es: 'el golpe', en: 'the hit' }, { es: 'seguido', en: 'in a row' }, { es: 'el paseo', en: 'the promenade' }, { es: 'la toalla', en: 'the towel' }, { es: 'quejarse', en: 'to complain' }],
        },
        A2: {
          scene: { es: 'El ayuntamiento quiere prohibir el matkot cerca del agua en las horas de más gente, porque algunos bañistas reciben golpes de pelota. Propone una zona especial para jugar, lejos del mar, detrás de una red. Los jugadores dicen que el matkot es parte de la cultura de la playa desde hace setenta años.', en: 'The city council wants to ban matkot near the water at the busiest hours, because some swimmers get hit by the ball. It proposes a special zone for playing, far from the sea, behind a net. The players say matkot has been part of beach culture for seventy years.' },
          opener: { es: 'Entiendo a los bañistas, de verdad. Una vez una pelota le pegó a una niña y fue horrible. Pero si nos mandan detrás de una red, el matkot pierde la gracia: se juega con los pies en el agua, con el ruido de las olas. Algunos amigos dicen que vamos a jugar igual, con multa o sin multa. ¿Tú qué harías en mi lugar?', en: 'I understand the swimmers, really. Once a ball hit a little girl and it was horrible. But if they send us behind a net, matkot loses its charm: you play with your feet in the water, with the sound of the waves. Some friends say we’ll play anyway, fine or no fine. What would you do in my place?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Yoni?', en: 'What do you advise Yoni?' },
            options: [
              { say: { es: 'Aceptar la zona especial.', en: 'Accept the special zone.' }, then: { es: 'Al principio es raro, pero la zona se llena y aparece un pequeño torneo los viernes.', en: 'At first it feels strange, but the zone fills up and a small Friday tournament appears.' } },
              { say: { es: 'Proponer horarios: jugar temprano y al atardecer.', en: 'Propose schedules: play early and at sunset.' }, then: { es: 'El ayuntamiento acepta. A mediodía la orilla es para los bañistas.', en: 'The council agrees. At midday the shore is for the swimmers.' } },
              { say: { es: 'Seguir jugando donde siempre.', en: 'Keep playing where he always does.' }, then: { es: 'Le ponen una multa de doscientos shéquels. Yoni la cuelga en la pared de su casa.', en: 'He gets a two-hundred-shekel fine. Yoni hangs it on the wall at home.' } },
            ],
          },
          twist: { es: 'Un turista graba un video de Yoni y se hace viral: «El deporte nacional de Israel». Ahora todos quieren jugar en la playa. ¿Es bueno o malo para él?', en: 'A tourist films Yoni and it goes viral: “Israel’s national sport”. Now everyone wants to play on the beach. Is that good or bad for him?' },
          questions: [
            { q: { es: '¿Hay reglas en las playas o parques de tu ciudad que te parecen exageradas?', en: 'Are there rules on the beaches or parks in your city that seem exaggerated to you?' }, help: { es: 'Sí, por ejemplo no se puede… / No, me parecen bien.', en: 'Yes, for example you can’t… / No, they seem fine.' }, follow: [{ es: '¿La gente las respeta?', en: 'Do people respect them?' }, { es: '¿Hay multas?', en: 'Are there fines?' }] },
            { q: { es: '¿Alguna vez una actividad de otra persona te molestó en un lugar público?', en: 'Has someone else’s activity ever bothered you in a public place?' }, help: { es: 'Sí, una vez… / No, soy tranquilo/a.', en: 'Yes, once… / No, I’m easygoing.' }, follow: [{ es: '¿Dijiste algo?', en: 'Did you say anything?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿Pagarías una multa por algo que te parece injusto?', en: 'Would you pay a fine for something you think is unfair?' }, help: { es: 'Sí, pero… / No, protestaría.', en: 'Yes, but… / No, I would protest.' }, follow: [{ es: '¿Cómo protestarías?', en: 'How would you protest?' }, { es: '¿Ya lo hiciste?', en: 'Have you done it already?' }] },
            { q: { es: '¿Qué costumbre de tu ciudad no debería desaparecer nunca?', en: 'Which custom in your city should never disappear?' }, help: { es: 'Para mí,… porque…', en: 'For me,… because…' }, follow: [{ es: '¿Está en peligro?', en: 'Is it in danger?' }, { es: '¿Quién la mantiene?', en: 'Who keeps it alive?' }] },
          ],
          words: [{ es: 'prohibir', en: 'to ban' }, { es: 'el bañista', en: 'the swimmer' }, { es: 'la multa', en: 'the fine' }, { es: 'la orilla', en: 'the shore' }, { es: 'perder la gracia', en: 'to lose its charm' }],
        },
        B1: {
          scene: { es: 'Tel Aviv es una de las ciudades más caras del mundo. Yoni tiene treinta y dos años, trabaja de enfermero y comparte un piso pequeño con dos compañeros. Sus padres viven en una ciudad del sur, donde con el mismo sueldo podría comprar una casa con jardín. Pero allí no hay mar, ni amigos, ni vida nocturna. Esta tarde, entre golpe y golpe, Yoni te cuenta que tiene que decidir antes de fin de mes si renueva el alquiler.', en: 'Tel Aviv is one of the most expensive cities in the world. Yoni is thirty-two, works as a nurse and shares a small flat with two flatmates. His parents live in a southern city where, on the same salary, he could buy a house with a garden. But there is no sea there, no friends, no nightlife. This evening, between hits, Yoni tells you he has to decide by the end of the month whether to renew the lease.' },
          opener: { es: 'Mis amigos lo llaman «la burbuja»: aquí todo es moderno, abierto, divertido, y a una hora de coche el país es otro. Pago la mitad de mi sueldo por una habitación sin ventana al mar. Mi madre me dice que vuelva, que allí el hospital necesita enfermeros y que podría tener hijos con espacio. Pero cada vez que vengo a esta playa al atardecer siento que no puedo irme. ¿Dónde está el límite entre amar un lugar y que ese lugar te coma la vida?', en: 'My friends call it “the bubble”: here everything is modern, open, fun, and an hour’s drive away it’s a different country. I pay half my salary for a room with no sea view. My mother tells me to come back, that the hospital there needs nurses and that I could have children with space. But every time I come to this beach at sunset I feel I can’t leave. Where is the line between loving a place and that place eating up your life?' },
          decide: {
            ask: { es: '¿Qué debería hacer Yoni?', en: 'What should Yoni do?' },
            options: [
              { say: { es: 'Volver al sur y construir una vida allí.', en: 'Go back south and build a life there.' }, then: { es: 'Compra una casa, organiza un club de matkot en la playa del sur y viene a Tel Aviv un fin de semana al mes.', en: 'He buys a house, starts a matkot club on the southern beach and comes to Tel Aviv one weekend a month.' } },
              { say: { es: 'Quedarse, pero buscar un piso más barato en las afueras.', en: 'Stay, but look for a cheaper flat on the outskirts.' }, then: { es: 'Tarda cuarenta minutos en tren, pero ahorra. El mar sigue ahí los sábados.', en: 'It takes forty minutes by train, but he saves. The sea is still there on Saturdays.' } },
              { say: { es: 'Probar un año en otro país.', en: 'Try a year in another country.' }, then: { es: 'Trabaja de enfermero en Europa. Gana más, pero echa de menos el ruido de las palas.', en: 'He works as a nurse in Europe. He earns more, but misses the sound of the paddles.' } },
            ],
          },
          twist: { es: 'Los dos compañeros de piso de Yoni anuncian que se van del país: dicen que aquí nunca podrán comprar nada. Yoni se queda solo con el alquiler completo. ¿Cambia eso la decisión?', en: 'Yoni’s two flatmates announce they are leaving the country: they say they’ll never be able to buy anything here. Yoni is left alone with the full rent. Does that change the decision?' },
          questions: [
            { q: { es: '¿Qué porcentaje de tu sueldo te parece razonable para la vivienda?', en: 'What percentage of your salary seems reasonable for housing?' }, help: { es: 'Creo que no más del… porque…', en: 'I think no more than… because…' }, follow: [{ es: '¿Es así en tu ciudad?', en: 'Is it like that in your city?' }, { es: '¿Qué harías si no lo fuera?', en: 'What would you do if it weren’t?' }] },
            { q: { es: '¿Vivirías en un lugar más barato aunque perdieras a tus amigos?', en: 'Would you live somewhere cheaper even if you lost your friends?' }, help: { es: 'Sí, si… / No, porque para mí…', en: 'Yes, if… / No, because for me…' }, follow: [{ es: '¿Qué es lo más difícil de mudarse?', en: 'What is hardest about moving?' }, { es: '¿Te mudaste alguna vez por dinero?', en: 'Have you ever moved for money?' }] },
            { q: { es: '¿Existe una «burbuja» en tu país, un lugar muy distinto al resto?', en: 'Is there a “bubble” in your country, a place very different from the rest?' }, help: { es: 'Sí, la capital es… / No, todo es parecido.', en: 'Yes, the capital is… / No, it’s all similar.' }, follow: [{ es: '¿Qué diferencias ves?', en: 'What differences do you see?' }, { es: '¿Dónde te sientes mejor?', en: 'Where do you feel better?' }] },
            { q: { es: '¿Hay un lugar que te haga sentir que no puedes irte?', en: 'Is there a place that makes you feel you can’t leave?' }, help: { es: 'Sí,… porque cuando estoy allí…', en: 'Yes,… because when I’m there…' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Lo cambiarías por dinero?', en: 'Would you trade it for money?' }] },
          ],
          words: [{ es: 'la burbuja', en: 'the bubble' }, { es: 'renovar el alquiler', en: 'to renew the lease' }, { es: 'las afueras', en: 'the outskirts' }, { es: 'echar de menos', en: 'to miss' }, { es: 'la vivienda', en: 'housing' }],
        },
      },
    },
    // ------------------------------------------------------------ the Carmel market
    {
      id: 'carmel',
      name: { es: 'El mercado Carmel', en: 'The Carmel Market' },
      who: { name: 'Avi', role: { es: 'vendedor de jugos', en: 'juice seller' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado largo y lleno de gente. Hay frutas, pan, especias y ropa. Avi vende jugos de fruta. Tiene muchas granadas rojas.', en: 'It is a long, crowded market. There is fruit, bread, spices and clothes. Avi sells fruit juices. He has lots of red pomegranates.' },
          opener: { es: '¡Hola! ¡Jugo de granada! ¿Quieres uno? Es fresco.', en: 'Hello! Pomegranate juice! Do you want one? It is fresh.' },
          decide: {
            ask: { es: '¿Qué jugo pides?', en: 'Which juice do you order?' },
            options: [
              { say: { es: 'De granada.', en: 'Pomegranate.' }, then: { es: 'Es rojo y un poco ácido. ¡Qué rico!', en: 'It is red and a little sour. Delicious!' } },
              { say: { es: 'De naranja.', en: 'Orange.' }, then: { es: 'Avi corta cinco naranjas. El jugo es dulce.', en: 'Avi cuts five oranges. The juice is sweet.' } },
              { say: { es: 'De zanahoria.', en: 'Carrot.' }, then: { es: 'Avi dice: «¡Muy sano!». Es naranja y espeso.', en: 'Avi says: “Very healthy!” It is orange and thick.' } },
            ],
          },
          twist: { es: 'El jugo cuesta quince shéquels. No tienes dinero, solo tarjeta. ¿Qué haces?', en: 'The juice costs fifteen shekels. You have no cash, only a card. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los jugos?', en: 'Do you like juices?' }, help: { es: 'Sí, de… / No mucho.', en: 'Yes,… / Not much.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Lo haces en casa?', en: 'Do you make it at home?' }] },
            { q: { es: '¿Vas al mercado?', en: 'Do you go to the market?' }, help: { es: 'Sí, los… / No, voy al supermercado.', en: 'Yes, on… / No, I go to the supermarket.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Qué fruta te gusta?', en: 'What fruit do you like?' }, help: { es: 'Me gusta la/el…', en: 'I like…' }, follow: [{ es: '¿Es cara en tu país?', en: 'Is it expensive in your country?' }, { es: '¿Cuándo la comes?', en: 'When do you eat it?' }] },
            { q: { es: '¿Pagas con dinero o con tarjeta?', en: 'Do you pay with cash or by card?' }, help: { es: 'Con tarjeta. / Con dinero.', en: 'By card. / With cash.' }, follow: [{ es: '¿Y en el mercado?', en: 'And at the market?' }, { es: '¿Usas el teléfono para pagar?', en: 'Do you use your phone to pay?' }] },
          ],
          words: [{ es: 'el jugo', en: 'the juice' }, { es: 'la granada', en: 'the pomegranate' }, { es: 'el mercado', en: 'the market' }, { es: 'ácido', en: 'sour' }, { es: 'fresco', en: 'fresh' }],
        },
        A1: {
          scene: { es: 'Es viernes por la mañana y el mercado está lleno. Todos compran para la cena del viernes, la más importante de la semana. Los vendedores gritan precios. A las tres de la tarde todo empieza a cerrar, porque empieza el shabat. Avi tiene un puesto pequeño, con una máquina vieja para exprimir granadas.', en: 'It is Friday morning and the market is packed. Everyone is shopping for Friday dinner, the most important of the week. Sellers shout prices. At three in the afternoon everything starts to close, because Shabbat begins. Avi has a small stall, with an old machine for squeezing pomegranates.' },
          opener: { es: 'El viernes es el mejor día y el peor. Vendo el doble, pero no tengo tiempo ni para comer. Mi abuelo llegó de Irak y abrió este puesto. Él vendía especias; yo vendo jugos porque los jóvenes ya no cocinan. Mira, ¿me ayudas? Tú cortas las naranjas y yo hablo con los clientes.', en: 'Friday is the best day and the worst. I sell double, but I don’t even have time to eat. My grandfather came from Iraq and opened this stall. He sold spices; I sell juices because young people don’t cook anymore. Look, will you help me? You cut the oranges and I talk to the customers.' },
          decide: {
            ask: { es: '¿Cómo ayudas a Avi?', en: 'How do you help Avi?' },
            options: [
              { say: { es: 'Corto las naranjas.', en: 'I cut the oranges.' }, then: { es: 'Cortas cuarenta naranjas en una hora. Te duelen las manos, pero Avi te invita a un jugo.', en: 'You cut forty oranges in an hour. Your hands hurt, but Avi treats you to a juice.' } },
              { say: { es: 'Grito los precios.', en: 'I shout the prices.' }, then: { es: 'Gritas «¡Diez shéquels!» con tu acento. La gente se ríe y compra.', en: 'You shout “Ten shekels!” with your accent. People laugh and buy.' } },
              { say: { es: 'Cobro el dinero.', en: 'I take the money.' }, then: { es: 'Te equivocas con el cambio dos veces. Avi dice: «No pasa nada».', en: 'You get the change wrong twice. Avi says: “No problem.”' } },
            ],
          },
          twist: { es: 'Una señora mayor dice que el jugo de Avi era más barato el año pasado. Quiere un descuento. ¿Qué le dices?', en: 'An older woman says Avi’s juice was cheaper last year. She wants a discount. What do you tell her?' },
          questions: [
            { q: { es: '¿Cuál es el día más ocupado de tu semana?', en: 'Which is the busiest day of your week?' }, help: { es: 'El… porque…', en: 'On… because…' }, follow: [{ es: '¿Qué haces ese día?', en: 'What do you do that day?' }, { es: '¿Comes bien?', en: 'Do you eat well?' }] },
            { q: { es: '¿Hay una cena especial en tu familia?', en: 'Is there a special dinner in your family?' }, help: { es: 'Sí, el domingo… / En Navidad…', en: 'Yes, on Sunday… / At Christmas…' }, follow: [{ es: '¿Quién cocina?', en: 'Who cooks?' }, { es: '¿Qué comen?', en: 'What do you eat?' }] },
            { q: { es: '¿Tu familia vino de otro país?', en: 'Did your family come from another country?' }, help: { es: 'Sí, mis abuelos vinieron de… / No.', en: 'Yes, my grandparents came from… / No.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué costumbres trajeron?', en: 'What customs did they bring?' }] },
            { q: { es: '¿Pides descuentos cuando compras?', en: 'Do you ask for discounts when you shop?' }, help: { es: 'Sí, en el mercado. / No, me da vergüenza.', en: 'Yes, at the market. / No, I’m embarrassed.' }, follow: [{ es: '¿Funciona?', en: 'Does it work?' }, { es: '¿Dónde no se puede?', en: 'Where can’t you?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'exprimir', en: 'to squeeze' }, { es: 'las especias', en: 'spices' }, { es: 'el cambio', en: 'the change (money)' }, { es: 'el descuento', en: 'the discount' }],
        },
        A2: {
          scene: { es: 'Una empresa quiere convertir la parte vieja del mercado en un «mercado gourmet», con techo, aire acondicionado y restaurantes de moda. Los vendedores tendrían que pagar un alquiler tres veces más alto, pero llegarían muchos más turistas. Avi tiene que firmar o dejar el puesto antes del verano.', en: 'A company wants to turn the old part of the market into a “gourmet market”, with a roof, air conditioning and trendy restaurants. Sellers would have to pay rent three times higher, but many more tourists would come. Avi has to sign or leave the stall before summer.' },
          opener: { es: 'Mi vecino de puesto ya firmó. Va a vender sándwiches de diseño a veinte dólares. Yo no sé. Este mercado siempre fue para la gente del barrio: abuelas con carritos, soldados que compran fruta, trabajadores que desayunan rápido. Si todo es caro y bonito, ¿quién va a venir? Pero si no firmo, me quedo sin nada. ¿Tú qué harías?', en: 'My stall neighbour already signed. He’s going to sell designer sandwiches for twenty dollars. I don’t know. This market was always for the neighbourhood: grandmothers with trolleys, people buying fruit, workers grabbing a quick breakfast. If everything is expensive and pretty, who’s going to come? But if I don’t sign, I’m left with nothing. What would you do?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Avi?', en: 'What do you advise Avi?' },
            options: [
              { say: { es: 'Firmar y subir los precios.', en: 'Sign and raise prices.' }, then: { es: 'Vende menos jugos, pero más caros. Los turistas sacan fotos de su máquina vieja.', en: 'He sells fewer juices, but more expensive ones. Tourists take photos of his old machine.' } },
              { say: { es: 'No firmar y vender en un carrito por la calle.', en: 'Not sign and sell from a cart in the street.' }, then: { es: 'Gana menos, pero sus clientes de siempre lo siguen.', en: 'He earns less, but his regular customers follow him.' } },
              { say: { es: 'Unirse con otros vendedores y negociar.', en: 'Join other sellers and negotiate.' }, then: { es: 'Consiguen dos precios: uno para los puestos antiguos y otro para los nuevos.', en: 'They get two prices: one for old stalls and another for new ones.' } },
            ],
          },
          twist: { es: 'El hijo de Avi, de veinte años, le dice: «Papá, firma. Yo quiero llevar el puesto y hacerlo moderno». ¿Cambia eso las cosas?', en: 'Avi’s twenty-year-old son tells him: “Dad, sign. I want to run the stall and make it modern.” Does that change things?' },
          questions: [
            { q: { es: '¿Hay mercados «modernizados» en tu ciudad?', en: 'Are there “modernised” markets in your city?' }, help: { es: 'Sí, el mercado de… / No, son como antes.', en: 'Yes, the… market / No, they’re as they were.' }, follow: [{ es: '¿Te gustan?', en: 'Do you like them?' }, { es: '¿Quién va?', en: 'Who goes?' }] },
            { q: { es: '¿Prefieres un lugar auténtico o un lugar cómodo?', en: 'Do you prefer an authentic place or a comfortable one?' }, help: { es: 'Prefiero… aunque…', en: 'I prefer… even though…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Pagarías más por lo auténtico?', en: 'Would you pay more for authenticity?' }] },
            { q: { es: '¿Qué pasa cuando llegan muchos turistas a un barrio?', en: 'What happens when lots of tourists come to a neighbourhood?' }, help: { es: 'Suben los precios… / Hay más trabajo…', en: 'Prices go up… / There’s more work…' }, follow: [{ es: '¿Lo viste en tu ciudad?', en: 'Have you seen it in your city?' }, { es: '¿Es bueno o malo?', en: 'Is it good or bad?' }] },
            { q: { es: '¿Cambiarías un negocio familiar para hacerlo moderno?', en: 'Would you change a family business to make it modern?' }, help: { es: 'Sí, cambiaría… / No, mantendría…', en: 'Yes, I’d change… / No, I’d keep…' }, follow: [{ es: '¿Qué no tocarías nunca?', en: 'What would you never touch?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'firmar', en: 'to sign' }, { es: 'el alquiler', en: 'the rent' }, { es: 'el barrio', en: 'the neighbourhood' }, { es: 'negociar', en: 'to negotiate' }, { es: 'el carrito', en: 'the trolley / cart' }],
        },
        B1: {
          scene: { es: 'En el mercado Carmel se oyen hebreo, árabe, ruso, amharico, francés e inglés. Israel es un país de inmigrantes: familias que llegaron de Marruecos, Yemen, Etiopía, la antigua Unión Soviética, Argentina o Francia, y que trajeron sus comidas. El puesto de Avi está entre un panadero yemení y una vendedora etíope de café. Hoy un periodista prepara un reportaje: «¿Existe una cocina israelí o es una mezcla de cocinas ajenas?».', en: 'In the Carmel Market you hear Hebrew, Arabic, Russian, Amharic, French and English. Israel is a country of immigrants: families who came from Morocco, Yemen, Ethiopia, the former Soviet Union, Argentina or France, and who brought their food. Avi’s stall is between a Yemeni baker and an Ethiopian coffee seller. Today a journalist is preparing a report: “Is there an Israeli cuisine, or is it a mix of other people’s cuisines?”' },
          opener: { es: 'Mi abuelo cocinaba como en Bagdad. Mi madre cocinaba como mi abuelo, pero con productos de aquí. Yo como shakshuka tunecina, pan yemení y hummus, que también es de los vecinos árabes. Algunos dicen que eso es robar, otros dicen que es lo normal en cualquier país. Para mí, una cocina nace cuando la gente se mezcla. Pero entiendo a quien dice: «Eso era nuestro primero». ¿Cuándo un plato deja de ser de alguien y pasa a ser de todos?', en: 'My grandfather cooked like in Baghdad. My mother cooked like my grandfather, but with local produce. I eat Tunisian shakshuka, Yemeni bread and hummus, which also belongs to our Arab neighbours. Some say that’s stealing, others say it’s normal in any country. For me, a cuisine is born when people mix. But I understand those who say: “That was ours first.” When does a dish stop belonging to someone and become everyone’s?' },
          decide: {
            ask: { es: '¿Qué título le pondrías al reportaje?', en: 'What headline would you give the report?' },
            options: [
              { say: { es: '«Una cocina hecha de muchas maletas».', en: '“A cuisine made of many suitcases.”' }, then: { es: 'El periodista entrevista a diez vendedores y cada uno cuenta de dónde vino su receta.', en: 'The journalist interviews ten sellers and each tells where their recipe came from.' } },
              { say: { es: '«Los platos tienen dueño».', en: '“Dishes have owners.”' }, then: { es: 'El reportaje provoca un gran debate en las redes. Algunos vendedores cambian los carteles: «Hummus, receta palestina».', en: 'The report sparks a big debate online. Some sellers change their signs: “Hummus, Palestinian recipe.”' } },
              { say: { es: '«La comida no pide pasaporte».', en: '“Food doesn’t ask for a passport.”' }, then: { es: 'El título gusta a muchos, pero un cocinero mayor dice que es demasiado fácil.', en: 'Many like the headline, but an older cook says it’s too easy.' } },
            ],
          },
          twist: { es: 'Un restaurante de Nueva York vende «hummus israelí» a dieciocho dólares y gana un premio. El panadero yemení dice que nadie habla de su pan. ¿Quién debería recibir el reconocimiento?', en: 'A New York restaurant sells “Israeli hummus” for eighteen dollars and wins a prize. The Yemeni baker says nobody talks about his bread. Who should get the recognition?' },
          questions: [
            { q: { es: '¿Qué plato de tu país vino originalmente de otro lugar?', en: 'Which dish in your country originally came from somewhere else?' }, help: { es: 'Por ejemplo,… que llegó con…', en: 'For example,… which came with…' }, follow: [{ es: '¿Se cambió la receta?', en: 'Did the recipe change?' }, { es: '¿La gente lo sabe?', en: 'Do people know?' }] },
            { q: { es: '¿Qué diferencia hay entre inspirarse en una cultura y apropiarse de ella?', en: 'What is the difference between being inspired by a culture and appropriating it?' }, help: { es: 'Creo que la diferencia está en…', en: 'I think the difference lies in…' }, follow: [{ es: '¿Un ejemplo claro?', en: 'A clear example?' }, { es: '¿Importa quién gana dinero?', en: 'Does it matter who makes money?' }] },
            { q: { es: '¿Qué comida llevarías contigo si te mudaras a otro país?', en: 'Which food would you take with you if you moved to another country?' }, help: { es: 'Llevaría… porque me recuerda…', en: 'I’d take… because it reminds me of…' }, follow: [{ es: '¿Sabes cocinarla?', en: 'Can you cook it?' }, { es: '¿La compartirías?', en: 'Would you share it?' }] },
            { q: { es: '¿Tu cocina familiar es una mezcla?', en: 'Is your family’s cooking a mix?' }, help: { es: 'Sí, mi madre es de… y mi padre de… / No, es muy…', en: 'Yes, my mother is from… and my father from… / No, it’s very…' }, follow: [{ es: '¿Qué plato lo demuestra?', en: 'Which dish shows it?' }, { es: '¿Quién lo cocina?', en: 'Who cooks it?' }] },
          ],
          words: [{ es: 'la mezcla', en: 'the mix' }, { es: 'apropiarse', en: 'to appropriate' }, { es: 'el reconocimiento', en: 'recognition' }, { es: 'el reportaje', en: 'the report' }, { es: 'ajeno', en: 'other people’s' }],
        },
      },
    },
    // ------------------------------------------------------------ the White City
    {
      id: 'bauhaus',
      name: { es: 'La Ciudad Blanca', en: 'The White City' },
      who: { name: 'Miriam', role: { es: 'arquitecta', en: 'architect' } },
      levels: {
        A0: {
          scene: { es: 'Es una calle con edificios blancos. Son cuadrados y tienen balcones redondos. Miriam es arquitecta. Tiene un cuaderno y un lápiz.', en: 'It is a street with white buildings. They are square and have round balconies. Miriam is an architect. She has a notebook and a pencil.' },
          opener: { es: 'Hola. Soy Miriam. ¿Te gustan estos edificios? Son muy viejos.', en: 'Hello. I am Miriam. Do you like these buildings? They are very old.' },
          decide: {
            ask: { es: '¿Qué edificio te gusta?', en: 'Which building do you like?' },
            options: [
              { say: { es: 'El blanco con balcón.', en: 'The white one with a balcony.' }, then: { es: 'Miriam dice: «Es de 1936. ¡Mi favorito!».', en: 'Miriam says: “It is from 1936. My favourite!”' } },
              { say: { es: 'El edificio alto y nuevo.', en: 'The tall new building.' }, then: { es: 'Miriam mira el edificio y dice: «Hmm… es de cristal».', en: 'Miriam looks at the building and says: “Hmm… it is glass.”' } },
              { say: { es: 'La casa pequeña con árboles.', en: 'The small house with trees.' }, then: { es: 'Hay un gato en la ventana. ¡Qué bonito!', en: 'There is a cat in the window. How pretty!' } },
            ],
          },
          twist: { es: 'Miriam te da su lápiz. ¿Dibujas una casa?', en: 'Miriam gives you her pencil. Do you draw a house?' },
          questions: [
            { q: { es: '¿Vives en una casa o en un piso?', en: 'Do you live in a house or a flat?' }, help: { es: 'En una casa. / En un piso.', en: 'In a house. / In a flat.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Tiene balcón?', en: 'Does it have a balcony?' }] },
            { q: { es: '¿De qué color es tu casa?', en: 'What colour is your house?' }, help: { es: 'Es blanca / amarilla…', en: 'It is white / yellow…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué color prefieres?', en: 'Which colour do you prefer?' }] },
            { q: { es: '¿Te gustan los edificios viejos?', en: 'Do you like old buildings?' }, help: { es: 'Sí. / No, prefiero los nuevos.', en: 'Yes. / No, I prefer new ones.' }, follow: [{ es: '¿Hay edificios viejos en tu ciudad?', en: 'Are there old buildings in your city?' }, { es: '¿Cuál te gusta?', en: 'Which one do you like?' }] },
            { q: { es: '¿Dibujas?', en: 'Do you draw?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Qué dibujas?', en: 'What do you draw?' }, { es: '¿Dibujas bien?', en: 'Do you draw well?' }] },
          ],
          words: [{ es: 'el edificio', en: 'the building' }, { es: 'blanco', en: 'white' }, { es: 'el balcón', en: 'the balcony' }, { es: 'la arquitecta', en: 'the architect' }, { es: 'dibujar', en: 'to draw' }],
        },
        A1: {
          scene: { es: 'Tel Aviv tiene más de cuatro mil edificios de estilo Bauhaus, construidos en los años treinta por arquitectos que llegaron de Alemania y Europa del Este. Por eso la llaman «la Ciudad Blanca». Las ventanas son pequeñas y largas para protegerse del sol. Miriam hace un recorrido a pie con un grupo de estudiantes.', en: 'Tel Aviv has more than four thousand Bauhaus-style buildings, built in the 1930s by architects who came from Germany and Eastern Europe. That’s why it’s called “the White City”. The windows are small and long to protect against the sun. Miriam is leading a walking tour with a group of students.' },
          opener: { es: 'Miren este edificio. Es simple: blanco, sin decoración, con balcones largos. Los arquitectos estudiaron en Europa, pero aquí cambiaron muchas cosas por el calor. Por ejemplo, las ventanas son pequeñas y los techos son planos, para tomar el fresco por la noche. ¿Te gusta este estilo o te parece aburrido?', en: 'Look at this building. It’s simple: white, no decoration, with long balconies. The architects studied in Europe, but here they changed many things because of the heat. For example, the windows are small and the roofs are flat, to enjoy the cool air at night. Do you like this style or does it seem boring to you?' },
          decide: {
            ask: { es: '¿Qué dices del edificio?', en: 'What do you say about the building?' },
            options: [
              { say: { es: 'Es elegante y práctico.', en: 'It is elegant and practical.' }, then: { es: 'Miriam sonríe: «Exacto. Menos es más».', en: 'Miriam smiles: “Exactly. Less is more.”' } },
              { say: { es: 'Es un poco aburrido.', en: 'It is a bit boring.' }, then: { es: 'Miriam ríe: «Eso dice mi hija también». Te muestra una escalera redonda preciosa por dentro.', en: 'Miriam laughs: “My daughter says that too.” She shows you a beautiful round staircase inside.' } },
              { say: { es: 'Necesita pintura nueva.', en: 'It needs new paint.' }, then: { es: '«Tienes razón», dice Miriam. «El sol y el mar estropean las paredes».', en: '“You’re right,” says Miriam. “The sun and the sea damage the walls.”' } },
            ],
          },
          twist: { es: 'Una vecina sale al balcón y les dice: «¡Esto no es un museo! ¡Aquí vive gente!». ¿Qué le dices?', en: 'A neighbour comes out on the balcony and tells you: “This isn’t a museum! People live here!” What do you say to her?' },
          questions: [
            { q: { es: '¿Cómo es el edificio donde vives?', en: 'What is the building you live in like?' }, help: { es: 'Es viejo/nuevo, tiene… pisos…', en: 'It’s old/new, it has… floors…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Cómo protegen las casas del calor o del frío en tu país?', en: 'How do houses protect against heat or cold in your country?' }, help: { es: 'Tienen… / Usan…', en: 'They have… / They use…' }, follow: [{ es: '¿Funciona?', en: 'Does it work?' }, { es: '¿Usas aire acondicionado?', en: 'Do you use air conditioning?' }] },
            { q: { es: '¿Prefieres lo simple o lo decorado?', en: 'Do you prefer simple or decorated things?' }, help: { es: 'Prefiero lo… en ropa, casas…', en: 'I prefer… in clothes, houses…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tu casa es así?', en: 'Is your home like that?' }] },
            { q: { es: '¿Hiciste alguna vez un recorrido a pie por una ciudad?', en: 'Have you ever done a walking tour of a city?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Qué viste?', en: 'What did you see?' }, { es: '¿Lo recomiendas?', en: 'Do you recommend it?' }] },
          ],
          words: [{ es: 'el estilo', en: 'the style' }, { es: 'el techo plano', en: 'the flat roof' }, { es: 'la decoración', en: 'decoration' }, { es: 'el recorrido', en: 'the tour' }, { es: 'estropear', en: 'to damage' }],
        },
        A2: {
          scene: { es: 'Los dueños de un edificio Bauhaus de 1937 quieren añadir dos pisos nuevos en el techo. Con ese dinero pagarían la restauración de todo el edificio, que tiene grietas y humedad. Pero los pisos nuevos cambiarían su forma original. Miriam forma parte del comité que debe decidir.', en: 'The owners of a 1937 Bauhaus building want to add two new floors on the roof. With that money they would pay for restoring the whole building, which has cracks and damp. But the new floors would change its original shape. Miriam sits on the committee that has to decide.' },
          opener: { es: 'Es un dilema clásico. Si decimos que no, el edificio sigue cayéndose, porque nadie tiene dinero para arreglarlo. Si decimos que sí, se salva, pero ya no es exactamente el mismo. Muchos edificios de esta calle ya tienen pisos nuevos de cristal arriba. Algunos quedan bien; otros parecen un sombrero feo. ¿Prefieres un edificio original y viejo o uno restaurado pero distinto?', en: 'It’s a classic dilemma. If we say no, the building keeps falling apart, because nobody has the money to fix it. If we say yes, it’s saved, but it’s no longer exactly the same. Many buildings on this street already have new glass floors on top. Some look good; others look like an ugly hat. Do you prefer an old original building or a restored but different one?' },
          decide: {
            ask: { es: '¿Qué vota Miriam?', en: 'How does Miriam vote?' },
            options: [
              { say: { es: 'Sí, pero con un diseño discreto.', en: 'Yes, but with a discreet design.' }, then: { es: 'Los pisos nuevos son blancos y un poco más atrás. Desde la calle casi no se ven.', en: 'The new floors are white and set back a little. From the street you can hardly see them.' } },
              { say: { es: 'No. El edificio debe quedar como era.', en: 'No. The building must stay as it was.' }, then: { es: 'El edificio no se modifica, pero sigue con grietas. Miriam busca dinero del Estado.', en: 'The building isn’t changed, but it still has cracks. Miriam looks for state money.' } },
              { say: { es: 'Sí, y que los pisos nuevos sean muy modernos.', en: 'Yes, and the new floors should be very modern.' }, then: { es: 'El contraste es enorme. A los turistas les encanta; a los vecinos, no tanto.', en: 'The contrast is huge. Tourists love it; the neighbours, not so much.' } },
            ],
          },
          twist: { es: 'Una anciana vive en el edificio desde 1960 y no quiere obras: dice que el ruido la va a matar. ¿Cómo la convences, o no?', en: 'An old woman has lived in the building since 1960 and doesn’t want building work: she says the noise will kill her. How do you convince her, or not?' },
          questions: [
            { q: { es: '¿Hay edificios históricos en mal estado en tu ciudad?', en: 'Are there historic buildings in bad condition in your city?' }, help: { es: 'Sí, por ejemplo… / No, están bien cuidados.', en: 'Yes, for example… / No, they’re well kept.' }, follow: [{ es: '¿Quién debería pagar?', en: 'Who should pay?' }, { es: '¿Qué pasará con ellos?', en: 'What will happen to them?' }] },
            { q: { es: '¿Te gustan las mezclas de antiguo y moderno?', en: 'Do you like mixes of old and modern?' }, help: { es: 'Sí, cuando… / No, prefiero…', en: 'Yes, when… / No, I prefer…' }, follow: [{ es: '¿Un ejemplo que te guste?', en: 'An example you like?' }, { es: '¿Uno que no?', en: 'One you don’t?' }] },
            { q: { es: '¿Viviste alguna vez en un edificio con obras?', en: 'Have you ever lived in a building under construction work?' }, help: { es: 'Sí, fue… / No, por suerte.', en: 'Yes, it was… / No, luckily.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Cómo lo soportaste?', en: 'How did you put up with it?' }] },
            { q: { es: '¿Qué edificio de tu ciudad salvarías siempre?', en: 'Which building in your city would you always save?' }, help: { es: 'Salvaría… porque…', en: 'I’d save… because…' }, follow: [{ es: '¿Qué tiene de especial?', en: 'What’s special about it?' }, { es: '¿Está en peligro?', en: 'Is it in danger?' }] },
          ],
          words: [{ es: 'añadir', en: 'to add' }, { es: 'las grietas', en: 'cracks' }, { es: 'la humedad', en: 'damp' }, { es: 'la restauración', en: 'restoration' }, { es: 'las obras', en: 'building work' }],
        },
        B1: {
          scene: { es: 'La Ciudad Blanca es Patrimonio de la Humanidad desde 2003. Eso protege la historia, pero también limita lo que se puede construir en el centro. Mientras tanto, los precios de la vivienda no paran de subir y los jóvenes se van a otras ciudades. Una asociación de vecinos propone construir torres de cuarenta pisos al lado de los edificios Bauhaus. Miriam tiene que dar una charla pública sobre el tema esta noche.', en: 'The White City has been a World Heritage Site since 2003. That protects history, but it also limits what can be built in the centre. Meanwhile, housing prices keep rising and young people are moving to other cities. A residents’ association proposes building forty-storey towers next to the Bauhaus buildings. Miriam has to give a public talk on the subject tonight.' },
          opener: { es: 'Los arquitectos de los años treinta construyeron esta ciudad para obreros, no para millonarios. Querían viviendas simples, con luz y aire, para gente que llegaba sin nada. Hoy un piso aquí cuesta una fortuna y lo compran inversores de fuera que lo usan dos semanas al año. A veces pienso que, si esos arquitectos vivieran, construirían torres para la gente joven. Y otras veces pienso que, si tocamos el centro, perdemos lo que nos hace únicos. ¿Qué es más fiel al espíritu de un lugar: conservar su forma o su función?', en: 'The 1930s architects built this city for workers, not for millionaires. They wanted simple homes, with light and air, for people who arrived with nothing. Today a flat here costs a fortune and is bought by foreign investors who use it two weeks a year. Sometimes I think that if those architects were alive, they’d build towers for young people. And other times I think that if we touch the centre, we lose what makes us unique. What is more faithful to the spirit of a place: keeping its form or its function?' },
          decide: {
            ask: { es: '¿Qué propone Miriam en la charla?', en: 'What does Miriam propose in the talk?' },
            options: [
              { say: { es: 'Torres solo fuera del centro histórico.', en: 'Towers only outside the historic centre.' }, then: { es: 'La propuesta gusta a casi todos, pero los terrenos de fuera también son caros.', en: 'Almost everyone likes the proposal, but land outside is expensive too.' } },
              { say: { es: 'Un impuesto a los pisos vacíos.', en: 'A tax on empty flats.' }, then: { es: 'Algunos inversores venden. Por primera vez en años, bajan un poco los alquileres.', en: 'Some investors sell. For the first time in years, rents drop slightly.' } },
              { say: { es: 'Torres al lado de los edificios Bauhaus.', en: 'Towers next to the Bauhaus buildings.' }, then: { es: 'La UNESCO envía una carta de advertencia. El debate llega a los periódicos internacionales.', en: 'UNESCO sends a warning letter. The debate reaches the international newspapers.' } },
            ],
          },
          twist: { es: 'Al final de la charla, una estudiante pregunta: «¿Usted vive en la Ciudad Blanca?». Miriam vive en un piso Bauhaus heredado de su abuela. Varias personas murmuran. ¿Debería eso cambiar el valor de su opinión?', en: 'At the end of the talk, a student asks: “Do you live in the White City?” Miriam lives in a Bauhaus flat inherited from her grandmother. Several people murmur. Should that change the value of her opinion?' },
          questions: [
            { q: { es: '¿Debería una ciudad proteger su historia aunque eso haga la vivienda más cara?', en: 'Should a city protect its history even if that makes housing more expensive?' }, help: { es: 'Creo que sí/no, porque… Además…', en: 'I think so/not, because… Also…' }, follow: [{ es: '¿Hay un punto intermedio?', en: 'Is there a middle ground?' }, { es: '¿Quién decide?', en: 'Who decides?' }] },
            { q: { es: '¿Qué opinas de los pisos que solo se usan unas semanas al año?', en: 'What do you think of flats that are only used a few weeks a year?' }, help: { es: 'Me parece… porque…', en: 'I find it… because…' }, follow: [{ es: '¿Pasa en tu ciudad?', en: 'Does it happen in your city?' }, { es: '¿Debería prohibirse?', en: 'Should it be banned?' }] },
            { q: { es: '¿Conservar la forma o la función: qué elegirías para un lugar importante para ti?', en: 'Keep the form or the function: which would you choose for a place important to you?' }, help: { es: 'Elegiría… porque lo importante es…', en: 'I’d choose… because what matters is…' }, follow: [{ es: '¿Qué lugar?', en: 'Which place?' }, { es: '¿Cambió mucho?', en: 'Has it changed a lot?' }] },
            { q: { es: '¿Una opinión vale menos si la persona se beneficia de ella?', en: 'Is an opinion worth less if the person benefits from it?' }, help: { es: 'No necesariamente, pero… / Sí, porque…', en: 'Not necessarily, but… / Yes, because…' }, follow: [{ es: '¿Cómo se evita?', en: 'How do you avoid it?' }, { es: '¿Te pasó a ti?', en: 'Has it happened to you?' }] },
          ],
          words: [{ es: 'el patrimonio', en: 'heritage' }, { es: 'el inversor', en: 'the investor' }, { es: 'heredar', en: 'to inherit' }, { es: 'fiel', en: 'faithful' }, { es: 'la advertencia', en: 'the warning' }],
        },
      },
    },
    // ------------------------------------------------------------ the port of Jaffa
    {
      id: 'jaffa',
      name: { es: 'El puerto de Jaffa', en: 'The port of Jaffa' },
      who: { name: 'Sami', role: { es: 'panadero', en: 'baker' } },
      levels: {
        A0: {
          scene: { es: 'Es un puerto viejo, con barcos pequeños y casas de piedra. Huele a pan. Sami es panadero. Vende un pan redondo con semillas de sésamo.', en: 'It is an old port, with small boats and stone houses. It smells of bread. Sami is a baker. He sells a round bread with sesame seeds.' },
          opener: { es: '¡Hola! Pan caliente. Con sésamo. ¿Quieres uno?', en: 'Hello! Hot bread. With sesame. Do you want one?' },
          decide: {
            ask: { es: '¿Qué pides?', en: 'What do you order?' },
            options: [
              { say: { es: 'Un pan con sésamo.', en: 'A sesame bread.' }, then: { es: 'Está caliente. Sami te da también un poco de zatar.', en: 'It is hot. Sami also gives you a little za’atar.' } },
              { say: { es: 'Dos panes, por favor.', en: 'Two breads, please.' }, then: { es: 'Sami dice: «Uno para ti y uno para el mar». ¡Las gaviotas vienen!', en: 'Sami says: “One for you and one for the sea.” The seagulls come!' } },
              { say: { es: 'Un pan con huevo.', en: 'A bread with egg.' }, then: { es: 'Sami pone un huevo y verduras dentro. ¡Un buen desayuno!', en: 'Sami puts an egg and vegetables inside. A good breakfast!' } },
            ],
          },
          twist: { es: 'Sami te pregunta: «¿De dónde eres?». ¿Qué dices?', en: 'Sami asks you: “Where are you from?” What do you say?' },
          questions: [
            { q: { es: '¿Comes pan todos los días?', en: 'Do you eat bread every day?' }, help: { es: 'Sí. / No, a veces.', en: 'Yes. / No, sometimes.' }, follow: [{ es: '¿Qué pan te gusta?', en: 'Which bread do you like?' }, { es: '¿Dónde lo compras?', en: 'Where do you buy it?' }] },
            { q: { es: '¿Qué desayunas?', en: 'What do you have for breakfast?' }, help: { es: 'Desayuno café y…', en: 'I have coffee and…' }, follow: [{ es: '¿A qué hora?', en: 'What time?' }, { es: '¿En casa?', en: 'At home?' }] },
            { q: { es: '¿Hay un puerto en tu ciudad?', en: 'Is there a port in your city?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }] },
            { q: { es: '¿De dónde eres?', en: 'Where are you from?' }, help: { es: 'Soy de…', en: 'I am from…' }, follow: [{ es: '¿Cómo es tu ciudad?', en: 'What is your city like?' }, { es: '¿Hay mar?', en: 'Is there sea?' }] },
          ],
          words: [{ es: 'el pan', en: 'the bread' }, { es: 'el sésamo', en: 'sesame' }, { es: 'caliente', en: 'hot' }, { es: 'el puerto', en: 'the port' }, { es: 'el panadero', en: 'the baker' }],
        },
        A1: {
          scene: { es: 'Jaffa es una de las ciudades portuarias más antiguas del mundo. Hoy forma parte de Tel Aviv. En sus calles viven familias judías y árabes. La panadería de Sami abrió en 1879 y nunca cierra: trabaja día y noche. A las tres de la mañana llegan taxistas, estudiantes y gente que sale de fiesta.', en: 'Jaffa is one of the oldest port cities in the world. Today it is part of Tel Aviv. Jewish and Arab families live in its streets. Sami’s bakery opened in 1879 and never closes: it works day and night. At three in the morning taxi drivers, students and people coming back from parties arrive.' },
          opener: { es: 'Soy la quinta generación de panaderos de mi familia. Mi tatarabuelo hacía el pan en un horno de leña, aquí mismo. A mí me gusta el turno de noche: llegan personas muy distintas, y todas tienen hambre. El pan no pregunta quién eres. ¿Tú te levantas temprano o te acuestas tarde?', en: 'I’m the fifth generation of bakers in my family. My great-great-grandfather made bread in a wood-fired oven, right here. I like the night shift: very different people come, and they’re all hungry. Bread doesn’t ask who you are. Do you get up early or go to bed late?' },
          decide: {
            ask: { es: '¿Qué haces en la panadería?', en: 'What do you do at the bakery?' },
            options: [
              { say: { es: 'Ayudo a hacer el pan.', en: 'I help make the bread.' }, then: { es: 'Tu primer pan tiene forma de corazón… sin querer. Sami lo pone en el escaparate.', en: 'Your first bread is heart-shaped… by accident. Sami puts it in the window.' } },
              { say: { es: 'Hablo con los clientes de la noche.', en: 'I talk to the night customers.' }, then: { es: 'Un taxista te cuenta toda la historia de Jaffa en diez minutos.', en: 'A taxi driver tells you the whole history of Jaffa in ten minutes.' } },
              { say: { es: 'Miro el horno antiguo.', en: 'I look at the old oven.' }, then: { es: 'Sami te muestra una foto en blanco y negro de su tatarabuelo, con la misma pala de madera.', en: 'Sami shows you a black-and-white photo of his great-great-grandfather, with the same wooden peel.' } },
            ],
          },
          twist: { es: 'Se va la luz en todo el barrio. El horno moderno no funciona. ¿Qué hacen?', en: 'The power goes out in the whole neighbourhood. The modern oven doesn’t work. What do you do?' },
          questions: [
            { q: { es: '¿Eres de mañana o de noche?', en: 'Are you a morning or a night person?' }, help: { es: 'Soy de… porque…', en: 'I’m a… person because…' }, follow: [{ es: '¿A qué hora te acuestas?', en: 'What time do you go to bed?' }, { es: '¿Y los fines de semana?', en: 'And at weekends?' }] },
            { q: { es: '¿Hay un negocio muy antiguo en tu ciudad?', en: 'Is there a very old business in your city?' }, help: { es: 'Sí, una tienda de… de…', en: 'Yes, a… shop from…' }, follow: [{ es: '¿Fuiste alguna vez?', en: 'Have you ever been?' }, { es: '¿Qué vende?', en: 'What does it sell?' }] },
            { q: { es: '¿Qué comes cuando tienes hambre de noche?', en: 'What do you eat when you’re hungry at night?' }, help: { es: 'Como… / No como nada.', en: 'I eat… / I eat nothing.' }, follow: [{ es: '¿Hay sitios abiertos en tu ciudad?', en: 'Are there places open in your city?' }, { es: '¿Cocinas?', en: 'Do you cook?' }] },
            { q: { es: '¿Sabes algo de tus tatarabuelos?', en: 'Do you know anything about your great-great-grandparents?' }, help: { es: 'Sí, eran… / No, nada.', en: 'Yes, they were… / No, nothing.' }, follow: [{ es: '¿De dónde eran?', en: 'Where were they from?' }, { es: '¿Hay fotos?', en: 'Are there photos?' }] },
          ],
          words: [{ es: 'el horno', en: 'the oven' }, { es: 'la leña', en: 'firewood' }, { es: 'el turno de noche', en: 'the night shift' }, { es: 'el escaparate', en: 'the shop window' }, { es: 'el tatarabuelo', en: 'great-great-grandfather' }],
        },
        A2: {
          scene: { es: 'Una cadena internacional de cafeterías quiere comprar la marca de Sami para abrir panaderías «estilo Jaffa» en Londres, Nueva York y Dubái. Le ofrecen mucho dinero y la promesa de usar su receta. Sami seguiría en Jaffa, pero su nombre estaría en cien tiendas que él nunca va a pisar.', en: 'An international coffee chain wants to buy Sami’s brand to open “Jaffa-style” bakeries in London, New York and Dubai. They offer a lot of money and promise to use his recipe. Sami would stay in Jaffa, but his name would be on a hundred shops he will never set foot in.' },
          opener: { es: 'Mi padre dice que no, sin pensarlo. Mi hermana dice que sí, que es una oportunidad única para la familia. Yo pienso en el pan: aquí lo hacemos con agua de Jaffa, harina de la Galilea y un horno de ciento cuarenta años. En Londres lo harán con máquinas. ¿Seguirá siendo nuestro pan, o solo nuestro nombre? ¿Tú venderías?', en: 'My father says no, without thinking. My sister says yes, that it’s a unique opportunity for the family. I think about the bread: here we make it with Jaffa water, Galilee flour and a hundred-and-forty-year-old oven. In London they’ll make it with machines. Will it still be our bread, or just our name? Would you sell?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Sami?', en: 'What do you advise Sami?' },
            options: [
              { say: { es: 'Vender, pero controlar la receta.', en: 'Sell, but control the recipe.' }, then: { es: 'Sami viaja a Londres para enseñar. El primer pan sale perfecto; el décimo, no tanto.', en: 'Sami travels to London to teach. The first loaf comes out perfect; the tenth, not so much.' } },
              { say: { es: 'No vender nunca.', en: 'Never sell.' }, then: { es: 'La cadena abre «Jaffa Bread» sin él. Sami se enfada, pero su panadería tiene más clientes que nunca.', en: 'The chain opens “Jaffa Bread” without him. Sami gets angry, but his bakery has more customers than ever.' } },
              { say: { es: 'Abrir él mismo una segunda panadería en otra ciudad.', en: 'Open a second bakery himself in another city.' }, then: { es: 'Abre en Haifa con su hermana. Es pequeño, pero es suyo.', en: 'He opens in Haifa with his sister. It’s small, but it’s theirs.' } },
            ],
          },
          twist: { es: 'Un cliente de toda la vida le dice: «Si vendes, ya no vuelvo». Pero el banco le recuerda a Sami que el techo necesita una reparación muy cara. ¿Qué pesa más?', en: 'A lifelong customer tells him: “If you sell, I won’t come back.” But the bank reminds Sami that the roof needs a very expensive repair. What weighs more?' },
          questions: [
            { q: { es: '¿Qué producto de tu ciudad podría venderse en todo el mundo?', en: 'Which product from your city could be sold all over the world?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Sería igual fuera?', en: 'Would it be the same abroad?' }, { es: '¿Lo comprarías allí?', en: 'Would you buy it there?' }] },
            { q: { es: '¿Probaste alguna vez una comida típica fuera de su país?', en: 'Have you ever tried a typical food outside its country?' }, help: { es: 'Sí, probé… en… y era…', en: 'Yes, I tried… in… and it was…' }, follow: [{ es: '¿Era auténtica?', en: 'Was it authentic?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Quién debería decidir en un negocio familiar: el padre o los hijos?', en: 'Who should decide in a family business: the father or the children?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Y si no están de acuerdo?', en: 'And if they disagree?' }, { es: '¿Votarían?', en: 'Would they vote?' }] },
            { q: { es: '¿Qué significa para ti un cliente «de toda la vida»?', en: 'What does a “lifelong” customer mean to you?' }, help: { es: 'Es alguien que…', en: 'It’s someone who…' }, follow: [{ es: '¿Eres cliente fiel de algún lugar?', en: 'Are you a loyal customer somewhere?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'la cadena', en: 'the chain' }, { es: 'la receta', en: 'the recipe' }, { es: 'la harina', en: 'flour' }, { es: 'pisar', en: 'to set foot in' }, { es: 'la reparación', en: 'the repair' }],
        },
        B1: {
          scene: { es: 'En los últimos veinte años, el barrio de Jaffa cambió mucho. Llegaron galerías de arte, restaurantes caros y apartamentos de lujo con vista al mar. Muchas familias árabes que vivían aquí desde hace generaciones ya no pueden pagar el alquiler y se mudan a otras zonas. Algunos nuevos vecinos dicen que el barrio está más vivo que nunca. Esta noche Sami participa en una reunión de vecinos en el centro comunitario.', en: 'Over the last twenty years, Jaffa has changed a lot. Art galleries, expensive restaurants and luxury flats with sea views have arrived. Many Arab families who had lived here for generations can no longer afford the rent and are moving to other areas. Some new neighbours say the neighbourhood is livelier than ever. Tonight Sami is taking part in a residents’ meeting at the community centre.' },
          opener: { es: 'Mis clientes nuevos son simpáticos: pagan bien, sacan fotos, dejan buenas reseñas. Pero mi vecina Um Khaled, que compraba aquí desde niña, se fue el mes pasado a Lod porque le subieron el alquiler un cuarenta por ciento. Su casa ahora es un alojamiento turístico. Yo gano más dinero que nunca y, sin embargo, siento que el barrio se está vaciando por dentro. ¿Se puede mejorar un barrio sin expulsar a la gente que lo hizo especial?', en: 'My new customers are nice: they pay well, take photos, leave good reviews. But my neighbour Um Khaled, who had shopped here since she was a girl, left for Lod last month because her rent went up forty per cent. Her house is now a holiday rental. I’m earning more money than ever and yet I feel the neighbourhood is emptying from within. Can you improve a neighbourhood without pushing out the people who made it special?' },
          decide: {
            ask: { es: '¿Qué propone Sami en la reunión?', en: 'What does Sami propose at the meeting?' },
            options: [
              { say: { es: 'Un límite a los alojamientos turísticos.', en: 'A cap on holiday rentals.' }, then: { es: 'Los dueños de apartamentos protestan, pero el ayuntamiento estudia la idea.', en: 'Flat owners protest, but the council considers the idea.' } },
              { say: { es: 'Viviendas protegidas para las familias del barrio.', en: 'Subsidised housing for the neighbourhood’s families.' }, then: { es: 'Se construyen treinta pisos. Hay trescientas familias en la lista de espera.', en: 'Thirty flats are built. There are three hundred families on the waiting list.' } },
              { say: { es: 'Que los comercios nuevos contraten a jóvenes del barrio.', en: 'That new businesses hire young people from the neighbourhood.' }, then: { es: 'Algunas galerías aceptan. Un chico de dieciséis años empieza a trabajar con un fotógrafo.', en: 'Some galleries agree. A sixteen-year-old starts working with a photographer.' } },
            ],
          },
          twist: { es: 'En la reunión, un nuevo vecino dice: «Yo también trabajo mucho para pagar mi piso. ¿Es culpa mía que el barrio sea bonito?». Se hace un silencio. ¿Qué le responderías?', en: 'At the meeting, a new neighbour says: “I also work hard to pay for my flat. Is it my fault the neighbourhood is pretty?” There’s a silence. What would you answer him?' },
          questions: [
            { q: { es: '¿Viste un barrio cambiar así en tu ciudad?', en: 'Have you seen a neighbourhood change like that in your city?' }, help: { es: 'Sí, el barrio de… antes era… y ahora…', en: 'Yes,… used to be… and now…' }, follow: [{ es: '¿Quién ganó y quién perdió?', en: 'Who won and who lost?' }, { es: '¿Te gusta cómo está ahora?', en: 'Do you like it now?' }] },
            { q: { es: '¿Tienen los recién llegados alguna responsabilidad con el barrio?', en: 'Do newcomers have any responsibility towards the neighbourhood?' }, help: { es: 'Creo que deberían… / No, porque…', en: 'I think they should… / No, because…' }, follow: [{ es: '¿Qué podrían hacer?', en: 'What could they do?' }, { es: '¿Tú lo hiciste al mudarte?', en: 'Did you do it when you moved?' }] },
            { q: { es: '¿Usarías un alojamiento turístico sabiendo que antes vivía allí una familia?', en: 'Would you use a holiday rental knowing a family used to live there?' }, help: { es: 'Sí, pero… / Prefiero un hotel porque…', en: 'Yes, but… / I prefer a hotel because…' }, follow: [{ es: '¿Lo pensaste antes?', en: 'Had you thought about it before?' }, { es: '¿Cambia tu decisión?', en: 'Does it change your decision?' }] },
            { q: { es: '¿Qué hace que un barrio sea «especial»: los edificios o la gente?', en: 'What makes a neighbourhood “special”: the buildings or the people?' }, help: { es: 'Para mí, sobre todo…', en: 'For me, above all…' }, follow: [{ es: '¿Cómo es tu barrio?', en: 'What is your neighbourhood like?' }, { es: '¿Qué perderías si cambiara?', en: 'What would you lose if it changed?' }] },
          ],
          words: [{ es: 'vaciarse', en: 'to empty' }, { es: 'expulsar', en: 'to push out' }, { es: 'el alojamiento turístico', en: 'the holiday rental' }, { es: 'la vivienda protegida', en: 'subsidised housing' }, { es: 'el recién llegado', en: 'the newcomer' }],
        },
      },
    },
    // ------------------------------------------------------------ the start-up
    {
      id: 'startup',
      name: { es: 'Una oficina de startup', en: 'A start-up office' },
      who: { name: 'Dana', role: { es: 'programadora', en: 'programmer' } },
      levels: {
        A0: {
          scene: { es: 'Es una oficina moderna en un piso alto. Hay ordenadores, sofás y un perro. Dana es programadora. Toma café y mira la pantalla.', en: 'It is a modern office on a high floor. There are computers, sofas and a dog. Dana is a programmer. She drinks coffee and looks at the screen.' },
          opener: { es: '¡Hola! Hoy es domingo y trabajo. ¿Quieres café?', en: 'Hello! Today is Sunday and I am working. Do you want coffee?' },
          decide: {
            ask: { es: '¿Qué tomas?', en: 'What do you have?' },
            options: [
              { say: { es: 'Un café, por favor.', en: 'A coffee, please.' }, then: { es: 'La máquina hace mucho ruido. El café está muy fuerte.', en: 'The machine is very noisy. The coffee is very strong.' } },
              { say: { es: 'Agua, gracias.', en: 'Water, thanks.' }, then: { es: 'Dana te da agua con limón y hojas de menta.', en: 'Dana gives you water with lemon and mint leaves.' } },
              { say: { es: 'Nada. Juego con el perro.', en: 'Nothing. I play with the dog.' }, then: { es: 'El perro se llama Bug. ¡Está muy contento!', en: 'The dog is called Bug. He is very happy!' } },
            ],
          },
          twist: { es: '¿Domingo? ¡Sí! En Israel la semana empieza el domingo. ¿Y en tu país?', en: 'Sunday? Yes! In Israel the week starts on Sunday. And in your country?' },
          questions: [
            { q: { es: '¿Trabajas o estudias?', en: 'Do you work or study?' }, help: { es: 'Trabajo. / Estudio.', en: 'I work. / I study.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Qué día empieza tu semana?', en: 'Which day does your week start?' }, help: { es: 'El lunes. / El domingo.', en: 'On Monday. / On Sunday.' }, follow: [{ es: '¿Qué día descansas?', en: 'Which day do you rest?' }, { es: '¿Te gusta el lunes?', en: 'Do you like Monday?' }] },
            { q: { es: '¿Usas mucho el ordenador?', en: 'Do you use the computer a lot?' }, help: { es: 'Sí, todo el día. / No mucho.', en: 'Yes, all day. / Not much.' }, follow: [{ es: '¿Para qué?', en: 'What for?' }, { es: '¿Y el teléfono?', en: 'And the phone?' }] },
            { q: { es: '¿Tienes perro?', en: 'Do you have a dog?' }, help: { es: 'Sí. / No, tengo gato. / No.', en: 'Yes. / No, I have a cat. / No.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is its name?' }, { es: '¿Es grande?', en: 'Is it big?' }] },
          ],
          words: [{ es: 'la oficina', en: 'the office' }, { es: 'el ordenador', en: 'the computer' }, { es: 'la pantalla', en: 'the screen' }, { es: 'el domingo', en: 'Sunday' }, { es: 'trabajar', en: 'to work' }],
        },
        A1: {
          scene: { es: 'Israel tiene una de las mayores cantidades de startups por habitante del mundo. En esta oficina trabajan veinte personas jóvenes. Hacen una aplicación para ahorrar agua en los campos. En Israel la semana laboral va de domingo a jueves; el viernes y el sábado son el fin de semana.', en: 'Israel has one of the highest numbers of start-ups per inhabitant in the world. Twenty young people work in this office. They are making an app to save water in the fields. In Israel the working week runs from Sunday to Thursday; Friday and Saturday are the weekend.' },
          opener: { es: 'Nuestra aplicación mide la humedad de la tierra y le dice al agricultor cuánta agua necesita cada planta. Aquí el agua es muy valiosa: la mitad del país es desierto. Trabajo mucho, a veces doce horas, pero me encanta. ¿Quieres ver cómo funciona? Mira, este punto rojo es un campo de tomates con sed.', en: 'Our app measures soil moisture and tells the farmer how much water each plant needs. Water is very precious here: half the country is desert. I work a lot, sometimes twelve hours, but I love it. Do you want to see how it works? Look, this red dot is a thirsty tomato field.' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Pruebo la aplicación.', en: 'I try the app.' }, then: { es: 'Das agua al campo rojo. El punto se pone verde. ¡Funciona!', en: 'You water the red field. The dot turns green. It works!' } },
              { say: { es: 'Pregunto por el horario.', en: 'I ask about the hours.' }, then: { es: 'Dana dice: «No hay horario. Pero el viernes nadie trabaja… casi nadie».', en: 'Dana says: “There are no set hours. But on Friday nobody works… almost nobody.”' } },
              { say: { es: 'Pido un trabajo.', en: 'I ask for a job.' }, then: { es: 'Dana ríe: «¿Sabes programar?». Te da su tarjeta.', en: 'Dana laughs: “Can you code?” She gives you her card.' } },
            ],
          },
          twist: { es: 'A las ocho de la noche todos siguen trabajando. El jefe pide pizza para todos. ¿Te quedas o te vas?', en: 'At eight in the evening everyone is still working. The boss orders pizza for everyone. Do you stay or go?' },
          questions: [
            { q: { es: '¿Cuántas horas trabajas o estudias al día?', en: 'How many hours a day do you work or study?' }, help: { es: 'Unas… horas.', en: 'About… hours.' }, follow: [{ es: '¿Es mucho?', en: 'Is it a lot?' }, { es: '¿Te gustaría trabajar menos?', en: 'Would you like to work less?' }] },
            { q: { es: '¿Qué aplicación usas más?', en: 'Which app do you use most?' }, help: { es: 'Uso mucho…', en: 'I use… a lot.' }, follow: [{ es: '¿Para qué?', en: 'What for?' }, { es: '¿Cuántas horas al día?', en: 'How many hours a day?' }] },
            { q: { es: '¿Ahorras agua en casa?', en: 'Do you save water at home?' }, help: { es: 'Sí, cierro el grifo… / No mucho.', en: 'Yes, I turn off the tap… / Not much.' }, follow: [{ es: '¿Hay problemas de agua en tu país?', en: 'Are there water problems in your country?' }, { es: '¿En verano?', en: 'In summer?' }] },
            { q: { es: '¿Te gustaría trabajar en una startup?', en: 'Would you like to work in a start-up?' }, help: { es: 'Sí, porque… / No, prefiero…', en: 'Yes, because… / No, I prefer…' }, follow: [{ es: '¿Qué harías?', en: 'What would you do?' }, { es: '¿Y en una empresa grande?', en: 'And in a big company?' }] },
          ],
          words: [{ es: 'la aplicación', en: 'the app' }, { es: 'ahorrar', en: 'to save' }, { es: 'la humedad', en: 'moisture' }, { es: 'el agricultor', en: 'the farmer' }, { es: 'la semana laboral', en: 'the working week' }],
        },
        A2: {
          scene: { es: 'Una gran empresa tecnológica estadounidense quiere comprar la startup de Dana por mucho dinero. Todos los empleados serían ricos de un día para otro. Pero la empresa quiere usar la aplicación para vender datos de los campos a fabricantes de semillas, y no para ayudar a los pequeños agricultores, que era la idea original.', en: 'A big American tech company wants to buy Dana’s start-up for a lot of money. All the employees would become rich overnight. But the company wants to use the app to sell field data to seed manufacturers, not to help small farmers, which was the original idea.' },
          opener: { es: 'Empecé este proyecto pensando en mi abuelo, que tenía un campo de naranjas en el norte y casi lo perdió por la sequía. Si vendemos, con mi parte podría comprar un piso y no preocuparme nunca más. Mis compañeros ya hacen planes: uno quiere dar la vuelta al mundo, otra quiere abrir su propia empresa. Yo no paro de pensar en los agricultores. ¿Tú qué harías?', en: 'I started this project thinking about my grandfather, who had an orange grove in the north and nearly lost it to drought. If we sell, with my share I could buy a flat and never worry again. My colleagues are already making plans: one wants to travel round the world, another wants to start her own company. I can’t stop thinking about the farmers. What would you do?' },
          decide: {
            ask: { es: '¿Qué vota Dana?', en: 'How does Dana vote?' },
            options: [
              { say: { es: 'Vender y usar el dinero para un proyecto nuevo.', en: 'Sell and use the money for a new project.' }, then: { es: 'Dana crea una fundación que regala sensores a pequeños agricultores.', en: 'Dana creates a foundation that gives sensors to small farmers.' } },
              { say: { es: 'No vender, aunque sea la única.', en: 'Not sell, even if she’s the only one.' }, then: { es: 'Pierde la votación. Deja la empresa con su parte y una gran tristeza.', en: 'She loses the vote. She leaves the company with her share and a great sadness.' } },
              { say: { es: 'Vender con condiciones escritas.', en: 'Sell with written conditions.' }, then: { es: 'El contrato dice que la versión para pequeños agricultores será gratis cinco años.', en: 'The contract says the version for small farmers will be free for five years.' } },
            ],
          },
          twist: { es: 'Un periodista descubre la venta antes del anuncio oficial y publica: «La startup del agua se vende por millones». Los agricultores llaman enfadados. ¿Qué les dice Dana?', en: 'A journalist discovers the sale before the official announcement and publishes: “The water start-up sells for millions.” Farmers call angrily. What does Dana tell them?' },
          questions: [
            { q: { es: '¿Venderías una idea tuya si cambiaran su objetivo?', en: 'Would you sell an idea of yours if they changed its purpose?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Por cuánto dinero?', en: 'For how much money?' }, { es: '¿Qué te importaría más?', en: 'What would matter most to you?' }] },
            { q: { es: '¿Qué harías si fueras rico de un día para otro?', en: 'What would you do if you got rich overnight?' }, help: { es: 'Primero… después…', en: 'First… then…' }, follow: [{ es: '¿Seguirías trabajando?', en: 'Would you keep working?' }, { es: '¿Se lo dirías a todos?', en: 'Would you tell everyone?' }] },
            { q: { es: '¿Te importa qué hacen las empresas con tus datos?', en: 'Do you care what companies do with your data?' }, help: { es: 'Sí, mucho… / No mucho, porque…', en: 'Yes, a lot… / Not much, because…' }, follow: [{ es: '¿Lees las condiciones?', en: 'Do you read the terms?' }, { es: '¿Alguna vez te arrepentiste?', en: 'Have you ever regretted it?' }] },
            { q: { es: '¿Hay un proyecto que empezaste por alguien de tu familia?', en: 'Is there a project you started because of someone in your family?' }, help: { es: 'Sí, por mi… / No, pero…', en: 'Yes, because of my… / No, but…' }, follow: [{ es: '¿Cómo fue?', en: 'How did it go?' }, { es: '¿Sigue?', en: 'Is it still going?' }] },
          ],
          words: [{ es: 'los datos', en: 'data' }, { es: 'la sequía', en: 'drought' }, { es: 'de un día para otro', en: 'overnight' }, { es: 'la semilla', en: 'the seed' }, { es: 'el contrato', en: 'the contract' }],
        },
        B1: {
          scene: { es: 'En Israel el ritmo de trabajo en tecnología es intenso, y la cultura empresarial valora el atrevimiento: hay una palabra, «jutzpá», que significa algo como descaro o valentía para desafiar a la autoridad. Dana dirige ahora un equipo de doce personas. Una nueva empleada, recién llegada de Japón, está sorprendida: en las reuniones todos interrumpen, discuten con el jefe y nadie usa títulos. Le confiesa a Dana que se siente incómoda y que no se atreve a hablar.', en: 'In Israel the pace of tech work is intense, and business culture values boldness: there’s a word, “chutzpah”, meaning something like cheek or the courage to challenge authority. Dana now leads a team of twelve. A new employee, just arrived from Japan, is surprised: in meetings everyone interrupts, argues with the boss and nobody uses titles. She confides to Dana that she feels uncomfortable and doesn’t dare to speak.' },
          opener: { es: 'Para nosotros discutir es una forma de respeto: si no te digo que tu idea es mala, es porque no me importa. Pero entiendo que para Aiko esto parezca una pelea constante. En su país, contradecir al jefe en público es casi impensable. No quiero que cambie su personalidad, pero tampoco quiero perder sus ideas, que son muy buenas. ¿Debe adaptarse ella al equipo o el equipo a ella?', en: 'For us, arguing is a form of respect: if I don’t tell you your idea is bad, it’s because I don’t care. But I understand that for Aiko this looks like a constant fight. In her country, contradicting the boss in public is almost unthinkable. I don’t want her to change her personality, but I don’t want to lose her ideas either, which are very good. Should she adapt to the team or the team to her?' },
          decide: {
            ask: { es: '¿Qué cambia Dana?', en: 'What does Dana change?' },
            options: [
              { say: { es: 'Reuniones con turnos para hablar.', en: 'Meetings with turns to speak.' }, then: { es: 'Los primeros días el equipo protesta. Después descubren que Aiko y otros dos callados tenían ideas excelentes.', en: 'At first the team protests. Then they discover Aiko and two other quiet people had excellent ideas.' } },
              { say: { es: 'Pedir ideas por escrito antes de cada reunión.', en: 'Ask for written ideas before each meeting.' }, then: { es: 'Aiko manda una propuesta muy detallada. Es la que eligen.', en: 'Aiko sends a very detailed proposal. It’s the one they choose.' } },
              { say: { es: 'Nada: Aiko ya se acostumbrará.', en: 'Nothing: Aiko will get used to it.' }, then: { es: 'Tres meses después, Aiko interrumpe al jefe. Todos aplauden. Ella no sabe si sentirse orgullosa o triste.', en: 'Three months later, Aiko interrupts the boss. Everyone applauds. She doesn’t know whether to feel proud or sad.' } },
            ],
          },
          twist: { es: 'Unos meses después, Dana viaja a Tokio para cerrar un contrato importante. En la primera reunión interrumpe al director japonés y el ambiente se congela. Aiko, que la acompaña, la mira. ¿Qué debería hacer Dana ahora?', en: 'A few months later, Dana travels to Tokyo to close an important deal. In the first meeting she interrupts the Japanese director and the atmosphere freezes. Aiko, who is with her, looks at her. What should Dana do now?' },
          questions: [
            { q: { es: '¿En tu cultura está bien contradecir al jefe en público?', en: 'In your culture, is it OK to contradict the boss in public?' }, help: { es: 'Depende de… / En general,…', en: 'It depends on… / In general,…' }, follow: [{ es: '¿Tú lo haces?', en: 'Do you do it?' }, { es: '¿Qué pasa si lo haces?', en: 'What happens if you do?' }] },
            { q: { es: '¿Discutir es una forma de respeto o de falta de respeto?', en: 'Is arguing a form of respect or of disrespect?' }, help: { es: 'Para mí, depende de cómo…', en: 'For me, it depends on how…' }, follow: [{ es: '¿Con quién discutes más?', en: 'Who do you argue with most?' }, { es: '¿Sobre qué?', en: 'About what?' }] },
            { q: { es: '¿Te sentiste alguna vez fuera de lugar en un grupo con otras costumbres?', en: 'Have you ever felt out of place in a group with other customs?' }, help: { es: 'Sí, cuando… / No, me adapto fácil.', en: 'Yes, when… / No, I adapt easily.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Quién se debe adaptar: el que llega o el grupo que recibe?', en: 'Who should adapt: the newcomer or the welcoming group?' }, help: { es: 'Creo que los dos, pero…', en: 'I think both, but…' }, follow: [{ es: '¿Hasta qué punto?', en: 'To what extent?' }, { es: '¿Hay límites?', en: 'Are there limits?' }] },
          ],
          words: [{ es: 'el atrevimiento', en: 'boldness' }, { es: 'el descaro', en: 'cheek' }, { es: 'interrumpir', en: 'to interrupt' }, { es: 'contradecir', en: 'to contradict' }, { es: 'atreverse', en: 'to dare' }],
        },
      },
    },
  ],
};
