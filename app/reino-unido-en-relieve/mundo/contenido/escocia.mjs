// Escocia · Edinburgh Castle, Loch Ness, the Fringe festival, a kilt maker and a
// Highlands mountain hut. Five places, four levels each (A0, A1, A2, B1). Every level is
// written on its own: same place and people, different situations.
export default {
  id: 'escocia',
  spots: [
    // ------------------------------------------------------------ Edinburgh Castle
    {
      id: 'castillo',
      name: { es: 'El castillo de Edimburgo', en: 'Edinburgh Castle' },
      who: { name: 'Fiona', role: { es: 'guía del castillo', en: 'castle guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un castillo enorme sobre una roca. Hace viento y frío. Hay cañones viejos. Fiona es guía.', en: 'It is a huge castle on a rock. It is windy and cold. There are old cannons. Fiona is a guide.' },
          opener: { es: '¡Hola! Soy Fiona. Bienvenido al castillo. Tiene casi mil años. A la una, hay un cañón. ¡Pum! ¿Quieres verlo?', en: 'Hello! I am Fiona. Welcome to the castle. It is almost a thousand years old. At one o’clock, there is a cannon. Boom! Do you want to see it?' },
          decide: {
            ask: { es: 'Fiona tiene tres cosas para ver. ¿Qué eliges?', en: 'Fiona has three things to see. What do you choose?' },
            options: [
              { say: { es: 'La corona del rey.', en: 'The king’s crown.' }, then: { es: 'Fiona dice: «Es de oro. ¡No se puede tocar!»', en: 'Fiona says: “It is gold. You can’t touch it!”' } },
              { say: { es: 'El cañón de la una.', en: 'The one o’clock gun.' }, then: { es: 'Fiona dice: «¡Tápate las orejas!»', en: 'Fiona says: “Cover your ears!”' } },
              { say: { es: 'La vista de la ciudad.', en: 'The view of the city.' }, then: { es: 'Fiona dice: «Allí está el mar. ¡Qué bonito!»', en: 'Fiona says: “The sea is over there. How pretty!”' } },
            ],
          },
          twist: { es: '¡Empieza a llover mucho! Fiona tiene un paraguas grande. ¿Qué dices?', en: 'It starts to rain a lot! Fiona has a big umbrella. What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los castillos?', en: 'Do you like castles?' }, help: { es: 'Sí, mucho. / No, prefiero la playa.', en: 'Yes, a lot. / No, I prefer the beach.' }, follow: [{ es: '¿Hay castillos en tu país?', en: 'Are there castles in your country?' }, { es: '¿Has visitado uno?', en: 'Have you visited one?' }] },
            { q: { es: '¿Llueve mucho en tu ciudad?', en: 'Does it rain a lot in your city?' }, help: { es: 'Sí, mucho. / No, poco.', en: 'Yes, a lot. / No, a little.' }, follow: [{ es: '¿Te gusta la lluvia?', en: 'Do you like the rain?' }, { es: '¿Tienes paraguas?', en: 'Do you have an umbrella?' }] },
            { q: { es: '¿A qué hora comes?', en: 'What time do you have lunch?' }, help: { es: 'A la una. / A las dos.', en: 'At one. / At two.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Te gusta el frío o el calor?', en: 'Do you like the cold or the heat?' }, help: { es: 'El frío. / El calor.', en: 'The cold. / The heat.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué ropa llevas hoy?', en: 'What clothes are you wearing today?' }] },
          ],
          words: [{ es: 'el castillo', en: 'the castle' }, { es: 'la roca', en: 'the rock' }, { es: 'el cañón', en: 'the cannon' }, { es: 'la corona', en: 'the crown' }, { es: 'el paraguas', en: 'the umbrella' }],
        },
        A1: {
          scene: { es: 'Es la última noche del año, Hogmanay. Hay una fiesta enorme en la calle debajo del castillo. A medianoche hay fuegos artificiales. Fiona termina de trabajar y te invita a la fiesta con sus amigos.', en: 'It is the last night of the year, Hogmanay. There is a huge street party below the castle. At midnight there are fireworks. Fiona finishes work and invites you to the party with her friends.' },
          opener: { es: 'En Escocia, Hogmanay es más importante que la Navidad. Hay una tradición: después de medianoche, la primera persona que entra en tu casa trae suerte. Tiene que traer un regalo: carbón, pan o sal. ¿Cómo celebras tú el fin de año?', en: 'In Scotland, Hogmanay is more important than Christmas. There’s a tradition: after midnight, the first person who comes into your house brings luck. They have to bring a gift: coal, bread or salt. How do you celebrate New Year’s Eve?' },
          decide: {
            ask: { es: 'Vas a ser la primera persona en entrar en casa de Fiona. ¿Qué regalo llevas?', en: 'You are going to be the first person to enter Fiona’s house. What gift do you take?' },
            options: [
              { say: { es: 'Pan, para que nunca falte comida.', en: 'Bread, so there is always food.' }, then: { es: 'La madre de Fiona te da un beso. «¡Este año vamos a comer bien!»', en: 'Fiona’s mother gives you a kiss. “This year we’re going to eat well!”' } },
              { say: { es: 'Sal, para tener buena suerte.', en: 'Salt, for good luck.' }, then: { es: 'El abuelo de Fiona dice que eres el mejor invitado en veinte años.', en: 'Fiona’s grandfather says you are the best guest in twenty years.' } },
              { say: { es: 'Una caja de galletas de mi país.', en: 'A box of biscuits from my country.' }, then: { es: 'No es tradicional, pero todos se las comen en cinco minutos.', en: 'It isn’t traditional, but everyone eats them in five minutes.' } },
            ],
          },
          twist: { es: 'A medianoche, todos se dan la mano en un círculo y cantan una canción vieja. Tú no sabes la letra. ¿Qué haces?', en: 'At midnight, everyone holds hands in a circle and sings an old song. You don’t know the words. What do you do?' },
          questions: [
            { q: { es: '¿Cómo celebras el fin de año?', en: 'How do you celebrate New Year’s Eve?' }, help: { es: 'Con mi familia. / Con amigos, en la calle.', en: 'With my family. / With friends, in the street.' }, follow: [{ es: '¿Qué comes?', en: 'What do you eat?' }, { es: '¿A qué hora te acuestas?', en: 'What time do you go to bed?' }] },
            { q: { es: '¿Hay tradiciones para tener suerte en tu país?', en: 'Are there traditions for good luck in your country?' }, help: { es: 'Sí, comemos… / Llevamos ropa…', en: 'Yes, we eat… / We wear… clothes.' }, follow: [{ es: '¿Tú lo haces?', en: 'Do you do it?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Te gustan los fuegos artificiales?', en: 'Do you like fireworks?' }, help: { es: 'Sí, son bonitos. / No, tienen mucho ruido.', en: 'Yes, they’re pretty. / No, they’re very noisy.' }, follow: [{ es: '¿Y a tu perro?', en: 'And your dog?' }, { es: '¿Cuándo hay fuegos en tu ciudad?', en: 'When are there fireworks in your city?' }] },
            { q: { es: '¿Qué llevas cuando vas a una casa nueva?', en: 'What do you take when you visit a new house?' }, help: { es: 'Llevo flores. / Llevo algo de comer.', en: 'I take flowers. / I take something to eat.' }, follow: [{ es: '¿Y en tu país es obligatorio?', en: 'And is it expected in your country?' }, { es: '¿Qué te gusta recibir?', en: 'What do you like receiving?' }] },
          ],
          words: [{ es: 'la medianoche', en: 'midnight' }, { es: 'los fuegos artificiales', en: 'fireworks' }, { es: 'la suerte', en: 'luck' }, { es: 'el carbón', en: 'coal' }, { es: 'la sal', en: 'salt' }],
        },
        A2: {
          scene: { es: 'Fiona lleva diez años de guía en el castillo. Cada verano llegan más turistas y las calles de Edimburgo están tan llenas que los vecinos no pueden caminar. Muchos pisos del centro se han convertido en alojamientos turísticos y Fiona ya no puede pagar un alquiler cerca de su trabajo.', en: 'Fiona has been a guide at the castle for ten years. Every summer more tourists arrive and Edinburgh’s streets are so full that locals can’t walk. Many flats in the centre have become holiday lets and Fiona can no longer afford rent near her work.' },
          opener: { es: 'Yo vivo del turismo, no puedo quejarme. Pero ahora tardo una hora en llegar al castillo porque he tenido que irme a vivir fuera de la ciudad. La panadería de mi calle se ha convertido en una tienda de recuerdos. ¿Tú has visto cómo el turismo cambia un lugar?', en: 'I make my living from tourism, I can’t complain. But now it takes me an hour to get to the castle because I’ve had to move out of the city. The bakery on my street has become a souvenir shop. Have you seen how tourism changes a place?' },
          decide: {
            ask: { es: 'El ayuntamiento quiere cobrar una tasa a cada turista. Fiona tiene que dar su opinión en una reunión. ¿Qué le aconsejas decir?', en: 'The council wants to charge every tourist a fee. Fiona has to give her opinion at a meeting. What do you advise her to say?' },
            options: [
              { say: { es: 'Que está de acuerdo, si el dinero es para los vecinos.', en: 'That she agrees, if the money goes to the locals.' }, then: { es: 'Con la tasa se arreglan parques y se abre una escuela nueva en el centro.', en: 'With the fee they fix up parks and open a new school in the centre.' } },
              { say: { es: 'Que no, porque los turistas dejarán de venir.', en: 'No, because tourists will stop coming.' }, then: { es: 'Los turistas siguen viniendo igual. Fiona se da cuenta de que se equivocaba.', en: 'Tourists keep coming just the same. Fiona realises she was wrong.' } },
              { say: { es: 'Que es mejor limitar los pisos turísticos.', en: 'That it’s better to limit holiday lets.' }, then: { es: 'Los propietarios se enfadan mucho, pero el alquiler baja un poco.', en: 'The landlords get very angry, but rents go down a little.' } },
            ],
          },
          twist: { es: 'Un turista le dice a Fiona que su acento escocés es «muy difícil» y le pide que hable «inglés normal». ¿Cómo debería responder?', en: 'A tourist tells Fiona that her Scottish accent is “very difficult” and asks her to speak “normal English”. How should she respond?' },
          questions: [
            { q: { es: '¿Tu ciudad recibe muchos turistas?', en: 'Does your city get many tourists?' }, help: { es: 'Sí, sobre todo en… / No muchos.', en: 'Yes, especially in… / Not many.' }, follow: [{ es: '¿Te molestan?', en: 'Do they bother you?' }, { es: '¿Qué visitan?', en: 'What do they visit?' }] },
            { q: { es: '¿Has tenido que mudarte por el precio del alquiler?', en: 'Have you had to move because of the rent?' }, help: { es: 'Sí, me mudé a… / No, tengo suerte.', en: 'Yes, I moved to… / No, I’m lucky.' }, follow: [{ es: '¿Cuánto tardas al trabajo?', en: 'How long does it take you to get to work?' }, { es: '¿Echas de menos tu barrio?', en: 'Do you miss your neighbourhood?' }] },
            { q: { es: '¿Pagarías una tasa por visitar una ciudad?', en: 'Would you pay a fee to visit a city?' }, help: { es: 'Sí, si es poco. / No, porque…', en: 'Yes, if it’s not much. / No, because…' }, follow: [{ es: '¿Cuánto?', en: 'How much?' }, { es: '¿Has pagado alguna vez?', en: 'Have you ever paid one?' }] },
            { q: { es: '¿Alguien se ha reído de tu acento?', en: 'Has anyone laughed at your accent?' }, help: { es: 'Sí, cuando… / No, nunca.', en: 'Yes, when… / No, never.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Te gusta tu acento?', en: 'Do you like your accent?' }] },
          ],
          words: [{ es: 'quejarse', en: 'to complain' }, { es: 'la tasa', en: 'the fee' }, { es: 'mudarse', en: 'to move house' }, { es: 'el propietario', en: 'the landlord' }, { es: 'el acento', en: 'the accent' }],
        },
        B1: {
          scene: { es: 'Escocia discute desde hace años si debería separarse del Reino Unido y ser un país independiente. En el castillo, Fiona guía hoy a un grupo de estudiantes: la mitad quiere la independencia y la otra mitad no. La discusión empieza en la sala de la corona y se pone muy tensa.', en: 'Scotland has been debating for years whether it should leave the United Kingdom and become an independent country. In the castle, Fiona is guiding a group of students today: half want independence and the other half don’t. The argument starts in the crown room and gets very tense.' },
          opener: { es: 'Mi trabajo es contar la historia, no decir a nadie qué votar. Pero aquí cada piedra tiene una opinión. Mi abuelo quería la independencia; mi madre votó en contra porque tenía miedo por su trabajo. ¿Un pueblo tiene derecho a decidir si quiere separarse, aunque no esté claro que le vaya mejor?', en: 'My job is to tell history, not to tell anyone how to vote. But here every stone has an opinion. My grandfather wanted independence; my mother voted against because she was afraid for her job. Does a people have the right to decide whether to separate, even if it isn’t clear they’d be better off?' },
          decide: {
            ask: { es: 'Dos estudiantes empiezan a gritarse. Los demás turistas miran. ¿Qué debería hacer Fiona?', en: 'Two students start shouting at each other. The other tourists are watching. What should Fiona do?' },
            options: [
              { say: { es: 'Parar la visita y pedirles que hablen con respeto.', en: 'Stop the tour and ask them to talk respectfully.' }, then: { es: 'Los estudiantes se calman. Uno pide perdón. La visita termina en silencio.', en: 'The students calm down. One apologises. The tour ends in silence.' } },
              { say: { es: 'Contar una historia del castillo que muestre las dos caras.', en: 'Tell a castle story that shows both sides.' }, then: { es: 'La historia de dos hermanos que lucharon en bandos distintos hace pensar a todos.', en: 'The story of two brothers who fought on opposite sides makes everyone think.' } },
              { say: { es: 'Organizar un pequeño debate con turnos de palabra.', en: 'Organise a small debate with turns to speak.' }, then: { es: 'El debate dura veinte minutos. Al final, nadie cambia de opinión, pero se dan la mano.', en: 'The debate lasts twenty minutes. In the end, nobody changes their mind, but they shake hands.' } },
            ],
          },
          twist: { es: 'Uno de los estudiantes graba la discusión y la sube a internet con el título «Guía del castillo apoya la independencia». No es verdad. Su jefe la llama. ¿Qué debería decir Fiona?', en: 'One of the students films the argument and uploads it with the title “Castle guide backs independence”. It isn’t true. Her boss calls her. What should Fiona say?' },
          questions: [
            { q: { es: '¿Hay regiones en tu país que quieren más autonomía?', en: 'Are there regions in your country that want more autonomy?' }, help: { es: 'Sí, por ejemplo… porque… / No, que yo sepa.', en: 'Yes, for example… because… / Not that I know of.' }, follow: [{ es: '¿Qué opinas tú?', en: 'What do you think?' }, { es: '¿Se habla mucho del tema?', en: 'Is it discussed a lot?' }] },
            { q: { es: '¿Se puede hablar de política con personas que piensan lo contrario?', en: 'Can you talk politics with people who think the opposite?' }, help: { es: 'Sí, siempre que… / Me cuesta, porque…', en: 'Yes, as long as… / I find it hard, because…' }, follow: [{ es: '¿Lo haces con tu familia?', en: 'Do you do it with your family?' }, { es: '¿Alguna vez acabó mal?', en: 'Did it ever end badly?' }] },
            { q: { es: '¿Votarías por el corazón o por la cartera?', en: 'Would you vote with your heart or your wallet?' }, help: { es: 'Por el corazón, aunque… / Por la cartera, porque…', en: 'With my heart, although… / With my wallet, because…' }, follow: [{ es: '¿Te ha pasado?', en: 'Has it happened to you?' }, { es: '¿Qué votaron tus padres?', en: 'How did your parents vote?' }] },
            { q: { es: '¿Un trabajador público debería mostrar sus opiniones políticas?', en: 'Should a public worker show their political opinions?' }, help: { es: 'No en el trabajo, porque… / Sí, porque también es…', en: 'Not at work, because… / Yes, because they’re also…' }, follow: [{ es: '¿Y un profesor?', en: 'And a teacher?' }, { es: '¿Y un futbolista famoso?', en: 'And a famous footballer?' }] },
          ],
          words: [{ es: 'la independencia', en: 'independence' }, { es: 'separarse', en: 'to separate' }, { es: 'el bando', en: 'the side' }, { es: 'gritarse', en: 'to shout at each other' }, { es: 'la autonomía', en: 'autonomy' }],
        },
      },
    },
    // ------------------------------------------------------------ Loch Ness
    {
      id: 'ness',
      name: { es: 'El lago Ness', en: 'Loch Ness' },
      who: { name: 'Hamish', role: { es: 'barquero', en: 'boatman' } },
      levels: {
        A0: {
          scene: { es: 'Es un lago muy largo y muy oscuro. Hay montañas verdes. Hamish tiene un barco pequeño. Dice que en el lago vive un monstruo: Nessie.', en: 'It is a very long, very dark lake. There are green mountains. Hamish has a small boat. He says a monster lives in the lake: Nessie.' },
          opener: { es: '¡Hola! Soy Hamish. Este es mi barco. Vamos a buscar a Nessie. Es grande y verde. ¿Vienes?', en: 'Hello! I am Hamish. This is my boat. We are going to look for Nessie. She is big and green. Are you coming?' },
          decide: {
            ask: { es: 'Hamish te da tres cosas. ¿Cuál usas?', en: 'Hamish gives you three things. Which one do you use?' },
            options: [
              { say: { es: 'La cámara de fotos.', en: 'The camera.' }, then: { es: 'Haces muchas fotos. En una hay… ¿una cabeza?', en: 'You take lots of photos. In one there is… a head?' } },
              { say: { es: 'Los prismáticos.', en: 'The binoculars.' }, then: { es: 'Ves un pájaro, un árbol y… ¡algo grande en el agua!', en: 'You see a bird, a tree and… something big in the water!' } },
              { say: { es: 'Un sándwich.', en: 'A sandwich.' }, then: { es: 'Hamish se ríe: «¡Primero comemos, después Nessie!»', en: 'Hamish laughs: “First we eat, then Nessie!”' } },
            ],
          },
          twist: { es: 'El agua se mueve mucho. Hamish dice: «¡Es ella!». Pero es un perro que nada. ¿Qué dices?', en: 'The water moves a lot. Hamish says: “It’s her!” But it is a dog swimming. What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }, help: { es: 'Sí, mucho. / No, me mareo.', en: 'Yes, a lot. / No, I get seasick.' }, follow: [{ es: '¿Has ido en barco?', en: 'Have you been on a boat?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Crees en los monstruos?', en: 'Do you believe in monsters?' }, help: { es: 'Sí, un poco. / No, nada.', en: 'Yes, a little. / No, not at all.' }, follow: [{ es: '¿Y en los fantasmas?', en: 'And in ghosts?' }, { es: '¿Tienes miedo de algo?', en: 'Are you afraid of anything?' }] },
            { q: { es: '¿Hay un lago cerca de tu casa?', en: 'Is there a lake near your house?' }, help: { es: 'Sí, hay uno. / No, hay un río.', en: 'Yes, there is one. / No, there is a river.' }, follow: [{ es: '¿Nadas allí?', en: 'Do you swim there?' }, { es: '¿Es bonito?', en: 'Is it pretty?' }] },
            { q: { es: '¿Haces muchas fotos?', en: 'Do you take a lot of photos?' }, help: { es: 'Sí, con el móvil. / No, pocas.', en: 'Yes, with my phone. / No, few.' }, follow: [{ es: '¿De qué?', en: 'Of what?' }, { es: '¿Cuál es tu foto favorita?', en: 'What is your favourite photo?' }] },
          ],
          words: [{ es: 'el lago', en: 'the lake' }, { es: 'el monstruo', en: 'the monster' }, { es: 'los prismáticos', en: 'the binoculars' }, { es: 'nadar', en: 'to swim' }, { es: 'el barco', en: 'the boat' }],
        },
        A1: {
          scene: { es: 'Hay niebla en el lago. Es temprano y hace frío. En el barco de Hamish hay una familia con dos niños. Los niños quieren ver a Nessie y están muy nerviosos.', en: 'There is fog on the lake. It is early and cold. On Hamish’s boat there is a family with two children. The children want to see Nessie and are very excited.' },
          opener: { es: 'Mi padre y mi abuelo también eran barqueros. Ellos contaban historias de Nessie a los turistas. Yo tengo cincuenta años y nunca la he visto, pero cada mañana la busco. El lago tiene doscientos metros de profundidad. ¿Quién sabe qué hay abajo?', en: 'My father and grandfather were also boatmen. They told tourists stories about Nessie. I’m fifty and I’ve never seen her, but every morning I look for her. The lake is two hundred metres deep. Who knows what’s down there?' },
          decide: {
            ask: { es: 'El niño pequeño te pregunta: «¿Nessie existe?». ¿Qué le dices?', en: 'The little boy asks you: “Does Nessie exist?” What do you tell him?' },
            options: [
              { say: { es: '«Sí, pero es muy tímida».', en: '“Yes, but she is very shy.”' }, then: { es: 'El niño grita «¡Hola, Nessie!» al agua todo el viaje.', en: 'The boy shouts “Hello, Nessie!” at the water the whole trip.' } },
              { say: { es: '«No sé. ¿Tú qué piensas?».', en: '“I don’t know. What do you think?”' }, then: { es: 'El niño explica su teoría: Nessie come peces y duerme de día.', en: 'The boy explains his theory: Nessie eats fish and sleeps during the day.' } },
              { say: { es: '«Pregúntale a Hamish».', en: '“Ask Hamish.”' }, then: { es: 'Hamish le cuenta una historia de su abuelo. El niño escucha con la boca abierta.', en: 'Hamish tells him a story about his grandfather. The boy listens with his mouth open.' } },
            ],
          },
          twist: { es: 'En la niebla aparece una forma larga y oscura. Todos se callan. Hamish apaga el motor. ¿Qué haces?', en: 'A long dark shape appears in the fog. Everyone goes quiet. Hamish switches off the engine. What do you do?' },
          questions: [
            { q: { es: '¿Qué historias te contaban de niño?', en: 'What stories did people tell you as a child?' }, help: { es: 'Mi abuela me contaba… / No me contaban historias.', en: 'My grandmother used to tell me… / They didn’t tell me stories.' }, follow: [{ es: '¿Te daban miedo?', en: 'Did they scare you?' }, { es: '¿Se las cuentas a otros?', en: 'Do you tell them to others?' }] },
            { q: { es: '¿Te levantas temprano?', en: 'Do you get up early?' }, help: { es: 'Sí, a las… / No, tarde.', en: 'Yes, at… / No, late.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué haces primero?', en: 'What do you do first?' }] },
            { q: { es: '¿Hay leyendas en tu ciudad?', en: 'Are there legends in your city?' }, help: { es: 'Sí, dicen que… / No conozco ninguna.', en: 'Yes, they say that… / I don’t know any.' }, follow: [{ es: '¿Te la crees?', en: 'Do you believe it?' }, { es: '¿Vienen turistas por ella?', en: 'Do tourists come because of it?' }] },
            { q: { es: '¿Qué trabajo tenían tus abuelos?', en: 'What jobs did your grandparents have?' }, help: { es: 'Mi abuelo era… / Mi abuela era…', en: 'My grandfather was a… / My grandmother was a…' }, follow: [{ es: '¿Te gustaría hacer lo mismo?', en: 'Would you like to do the same?' }, { es: '¿Dónde trabajaban?', en: 'Where did they work?' }] },
          ],
          words: [{ es: 'la niebla', en: 'fog' }, { es: 'el barquero', en: 'the boatman' }, { es: 'la profundidad', en: 'depth' }, { es: 'la leyenda', en: 'the legend' }, { es: 'el motor', en: 'the engine' }],
        },
        A2: {
          scene: { es: 'Unos científicos han estudiado el agua del lago y dicen que no hay ningún animal grande: Nessie seguramente no existe. La noticia está en todos los periódicos. Ese verano, el barco de Hamish tiene la mitad de clientes que el año pasado.', en: 'Some scientists have studied the lake’s water and say there is no large animal: Nessie almost certainly doesn’t exist. The news is in all the papers. That summer, Hamish’s boat has half as many customers as last year.' },
          opener: { es: 'Yo nunca he dicho que Nessie exista. Lo que vendo es la posibilidad, el misterio, la niebla. Pero la gente ha leído la noticia y ahora piensa que es una tontería. Mi hija dice que tengo que cambiar el negocio. ¿Tú has perdido algo que te gustaba por culpa de la verdad?', en: 'I’ve never said Nessie exists. What I sell is the possibility, the mystery, the fog. But people have read the news and now they think it’s nonsense. My daughter says I have to change the business. Have you ever lost something you liked because of the truth?' },
          decide: {
            ask: { es: 'Hamish necesita más clientes. ¿Qué le aconsejas?', en: 'Hamish needs more customers. What do you advise him?' },
            options: [
              { say: { es: 'Hacer viajes sobre la naturaleza y los animales reales del lago.', en: 'Run trips about nature and the lake’s real animals.' }, then: { es: 'Vienen muchos colegios. Los niños descubren nutrias y águilas.', en: 'Lots of schools come. The children discover otters and eagles.' } },
              { say: { es: 'Hacer viajes de noche con historias de miedo.', en: 'Run night trips with scary stories.' }, then: { es: 'Los viajes de noche se venden todos. La gente quiere misterio, no ciencia.', en: 'The night trips sell out. People want mystery, not science.' } },
              { say: { es: 'Invitar a los científicos a explicar su estudio en el barco.', en: 'Invite the scientists to explain their study on the boat.' }, then: { es: 'Es un éxito. Al final de cada viaje, todos votan: ¿existe Nessie o no?', en: 'It’s a hit. At the end of every trip, everyone votes: does Nessie exist or not?' } },
            ],
          },
          twist: { es: 'Un turista le ofrece mucho dinero a Hamish por una foto falsa de Nessie para subirla a internet. ¿Qué debería hacer?', en: 'A tourist offers Hamish a lot of money for a fake photo of Nessie to post online. What should he do?' },
          questions: [
            { q: { es: '¿Creías en algo de niño que luego no era verdad?', en: 'Did you believe in something as a child that turned out not to be true?' }, help: { es: 'Sí, creía que… / No, era muy realista.', en: 'Yes, I believed that… / No, I was very realistic.' }, follow: [{ es: '¿Cómo lo descubriste?', en: 'How did you find out?' }, { es: '¿Te puso triste?', en: 'Did it make you sad?' }] },
            { q: { es: '¿Has hecho un viaje solo por una leyenda o una película?', en: 'Have you travelled just because of a legend or a film?' }, help: { es: 'Sí, fui a… porque… / No, nunca.', en: 'Yes, I went to… because… / No, never.' }, follow: [{ es: '¿Valió la pena?', en: 'Was it worth it?' }, { es: '¿Qué viste?', en: 'What did you see?' }] },
            { q: { es: '¿Has cambiado tu forma de trabajar por algo que pasó?', en: 'Have you changed the way you work because of something that happened?' }, help: { es: 'Sí, después de… empecé a… / No, sigo igual.', en: 'Yes, after… I started to… / No, I’m the same.' }, follow: [{ es: '¿Fue para mejor?', en: 'Was it for the better?' }, { es: '¿Quién te ayudó?', en: 'Who helped you?' }] },
            { q: { es: '¿Es malo inventar historias para los turistas?', en: 'Is it bad to make up stories for tourists?' }, help: { es: 'No, si… / Sí, porque…', en: 'No, if… / Yes, because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Te has sentido engañado?', en: 'Have you felt tricked?' }] },
          ],
          words: [{ es: 'el científico', en: 'the scientist' }, { es: 'el misterio', en: 'the mystery' }, { es: 'la tontería', en: 'nonsense' }, { es: 'la nutria', en: 'the otter' }, { es: 'falso', en: 'fake' }],
        },
        B1: {
          scene: { es: 'Una empresa quiere construir una central hidroeléctrica en la orilla del lago Ness. Daría energía limpia a miles de casas y trabajo a cien personas del pueblo. Pero cambiaría el nivel del agua y el paisaje que atrae a los turistas. Hamish forma parte del grupo de vecinos que tiene que votar.', en: 'A company wants to build a hydroelectric plant on the shore of Loch Ness. It would give clean energy to thousands of homes and jobs to a hundred people from the village. But it would change the water level and the landscape that attracts tourists. Hamish is part of the residents’ group that has to vote.' },
          opener: { es: 'Siempre he dicho que hay que cuidar el planeta. Ahora me ofrecen energía limpia justo delante de mi barco, y mi primera reacción es decir que no. ¿Soy un hipócrita? Mis vecinos jóvenes necesitan trabajo y se están yendo a Glasgow. ¿Es justo pedir que un lugar sacrifique su paisaje por el bien de todos?', en: 'I’ve always said we have to look after the planet. Now they offer me clean energy right in front of my boat, and my first reaction is to say no. Am I a hypocrite? My young neighbours need work and they’re leaving for Glasgow. Is it fair to ask a place to sacrifice its landscape for the common good?' },
          decide: {
            ask: { es: 'Mañana es la votación. ¿Qué debería votar Hamish?', en: 'Tomorrow is the vote. How should Hamish vote?' },
            options: [
              { say: { es: 'A favor, porque el clima es más importante que el paisaje.', en: 'In favour, because the climate matters more than the landscape.' }, then: { es: 'La central se aprueba. Dos jóvenes del pueblo vuelven de Glasgow para trabajar allí.', en: 'The plant is approved. Two young people from the village come back from Glasgow to work there.' } },
              { say: { es: 'En contra, porque el lago es la identidad del pueblo.', en: 'Against, because the lake is the village’s identity.' }, then: { es: 'La central no se construye. El pueblo celebra, pero la escuela cierra al año siguiente por falta de niños.', en: 'The plant is not built. The village celebrates, but the school closes the following year for lack of children.' } },
              { say: { es: 'Pedir que la empresa comparta los beneficios con el pueblo.', en: 'Ask the company to share the profits with the village.' }, then: { es: 'Tras meses de negociación, cada familia recibe energía más barata y se crea un fondo local.', en: 'After months of negotiation, every family gets cheaper energy and a local fund is set up.' } },
            ],
          },
          twist: { es: 'Hamish descubre que su hija trabaja en secreto para la empresa de la central. Ella no se lo ha dicho porque sabía que él estaba en contra. ¿Qué debería hacer?', en: 'Hamish discovers that his daughter is secretly working for the power-plant company. She hasn’t told him because she knew he was against it. What should he do?' },
          questions: [
            { q: { es: '¿Aceptarías una central de energía cerca de tu casa?', en: 'Would you accept a power plant near your home?' }, help: { es: 'Sí, si fuera… / No, aunque sea limpia, porque…', en: 'Yes, if it were… / No, even if it’s clean, because…' }, follow: [{ es: '¿Y un parque eólico?', en: 'And a wind farm?' }, { es: '¿Y una cárcel?', en: 'And a prison?' }] },
            { q: { es: '¿Has defendido una idea y luego te ha costado cumplirla?', en: 'Have you defended an idea and then found it hard to live by?' }, help: { es: 'Sí, por ejemplo… / No, intento ser coherente.', en: 'Yes, for example… / No, I try to be consistent.' }, follow: [{ es: '¿Alguien te lo dijo?', en: 'Did anyone point it out?' }, { es: '¿Cambiaste?', en: 'Did you change?' }] },
            { q: { es: '¿Qué pierde un pueblo cuando se van los jóvenes?', en: 'What does a village lose when young people leave?' }, help: { es: 'Pierde… y al final… / Creo que no pierde tanto si…', en: 'It loses… and in the end… / I don’t think it loses much if…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Volverías tú a un pueblo?', en: 'Would you go back to a village?' }] },
            { q: { es: '¿Es aceptable ocultar algo a tu familia para no discutir?', en: 'Is it acceptable to hide something from your family to avoid an argument?' }, help: { es: 'A veces sí, cuando… / Nunca, porque…', en: 'Sometimes, when… / Never, because…' }, follow: [{ es: '¿Te ha pasado?', en: 'Has it happened to you?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
          ],
          words: [{ es: 'la central hidroeléctrica', en: 'the hydroelectric plant' }, { es: 'la orilla', en: 'the shore' }, { es: 'el paisaje', en: 'the landscape' }, { es: 'sacrificar', en: 'to sacrifice' }, { es: 'el beneficio', en: 'the profit' }],
        },
      },
    },
    // ------------------------------------------------------------ the Fringe
    {
      id: 'fringe',
      name: { es: 'El festival Fringe', en: 'The Fringe festival' },
      who: { name: 'Callum', role: { es: 'cómico', en: 'comedian' } },
      levels: {
        A0: {
          scene: { es: 'Es agosto en Edimburgo. Hay un festival enorme. En la calle hay músicos, payasos y actores. Callum es cómico. Da papeles a la gente.', en: 'It is August in Edinburgh. There is a huge festival. In the street there are musicians, clowns and actors. Callum is a comedian. He hands out flyers to people.' },
          opener: { es: '¡Hola! Soy Callum. Hago comedia. Mi show es a las ocho. ¡Es gratis! ¿Vienes?', en: 'Hello! I am Callum. I do comedy. My show is at eight. It’s free! Are you coming?' },
          decide: {
            ask: { es: 'Hay tres shows. ¿Cuál ves?', en: 'There are three shows. Which one do you see?' },
            options: [
              { say: { es: 'El show de Callum.', en: 'Callum’s show.' }, then: { es: 'Callum dice: «¡Gracias! Siéntate delante».', en: 'Callum says: “Thank you! Sit at the front.”' } },
              { say: { es: 'El show de magia.', en: 'The magic show.' }, then: { es: 'El mago saca un conejo de tu bolso. ¡Increíble!', en: 'The magician pulls a rabbit out of your bag. Incredible!' } },
              { say: { es: 'El concierto de gaitas.', en: 'The bagpipe concert.' }, then: { es: 'Es muy fuerte. ¡Pero muy bonito!', en: 'It is very loud. But very beautiful!' } },
            ],
          },
          twist: { es: 'En el show, Callum te mira y dice: «¡Tú! ¿De dónde eres?». Todos te miran. ¿Qué dices?', en: 'In the show, Callum looks at you and says: “You! Where are you from?” Everyone looks at you. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta la comedia?', en: 'Do you like comedy?' }, help: { es: 'Sí, me encanta. / No mucho.', en: 'Yes, I love it. / Not much.' }, follow: [{ es: '¿Ves comedia en la tele?', en: 'Do you watch comedy on TV?' }, { es: '¿Quién te hace reír?', en: 'Who makes you laugh?' }] },
            { q: { es: '¿Vas al teatro?', en: 'Do you go to the theatre?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Hay festivales en tu ciudad?', en: 'Are there festivals in your city?' }, help: { es: 'Sí, en verano. / No, no hay.', en: 'Yes, in summer. / No, there aren’t.' }, follow: [{ es: '¿De qué?', en: 'Of what?' }, { es: '¿Vas?', en: 'Do you go?' }] },
            { q: { es: '¿Te gusta la magia?', en: 'Do you like magic?' }, help: { es: 'Sí, mucho. / No, me da igual.', en: 'Yes, a lot. / No, I don’t care.' }, follow: [{ es: '¿Sabes un truco?', en: 'Do you know a trick?' }, { es: '¿Has visto a un mago?', en: 'Have you seen a magician?' }] },
          ],
          words: [{ es: 'el cómico', en: 'the comedian' }, { es: 'el payaso', en: 'the clown' }, { es: 'el mago', en: 'the magician' }, { es: 'la gaita', en: 'the bagpipes' }, { es: 'reír', en: 'to laugh' }],
        },
        A1: {
          scene: { es: 'Son las once de la noche. El show de Callum es en un sótano pequeño con treinta sillas. Hoy solo hay ocho personas. Callum está un poco nervioso, pero empieza su show con una sonrisa.', en: 'It is eleven at night. Callum’s show is in a small basement with thirty chairs. Today there are only eight people. Callum is a bit nervous, but he starts his show with a smile.' },
          opener: { es: 'En el Fringe hay más de tres mil shows. Todos los artistas pagan para estar aquí: el viaje, la sala, el piso. Muchos pierden dinero. Yo duermo en el sofá de un amigo y como pasta todos los días. ¿Tú harías algo así por tu pasión?', en: 'At the Fringe there are more than three thousand shows. All the artists pay to be here: the travel, the venue, the flat. Many lose money. I sleep on a friend’s sofa and eat pasta every day. Would you do something like that for your passion?' },
          decide: {
            ask: { es: 'Al final del show, Callum pasa un sombrero para pedir dinero. ¿Qué haces?', en: 'At the end of the show, Callum passes a hat round to ask for money. What do you do?' },
            options: [
              { say: { es: 'Pongo diez libras. Me he reído mucho.', en: 'I put in ten pounds. I laughed a lot.' }, then: { es: 'Callum te da las gracias. Con ese dinero puede cenar algo más que pasta.', en: 'Callum thanks you. With that money he can have something more than pasta for dinner.' } },
              { say: { es: 'No pongo dinero, pero le hago una buena reseña en internet.', en: 'I don’t put in money, but I write him a good review online.' }, then: { es: 'Al día siguiente vienen quince personas. ¡Gracias a tu reseña!', en: 'The next day fifteen people come. Thanks to your review!' } },
              { say: { es: 'Le invito a tomar algo y hablamos.', en: 'I invite him for a drink and we talk.' }, then: { es: 'Callum te cuenta que de día trabaja en un supermercado.', en: 'Callum tells you that by day he works in a supermarket.' } },
            ],
          },
          twist: { es: 'Una persona del público duerme y ronca muy fuerte. Todos se ríen. Callum te mira: «¿Qué hago?». ¿Qué le dices?', en: 'Someone in the audience is asleep and snoring very loudly. Everyone laughs. Callum looks at you: “What do I do?” What do you tell him?' },
          questions: [
            { q: { es: '¿Tienes una pasión?', en: 'Do you have a passion?' }, help: { es: 'Sí, me encanta… / No sé, me gustan muchas cosas.', en: 'Yes, I love… / I don’t know, I like lots of things.' }, follow: [{ es: '¿Cuánto tiempo le dedicas?', en: 'How much time do you spend on it?' }, { es: '¿Ganas dinero con ella?', en: 'Do you earn money from it?' }] },
            { q: { es: '¿Das dinero a los artistas de la calle?', en: 'Do you give money to street performers?' }, help: { es: 'Sí, si me gusta. / No, casi nunca.', en: 'Yes, if I like it. / No, hardly ever.' }, follow: [{ es: '¿Cuánto?', en: 'How much?' }, { es: '¿Hay muchos en tu ciudad?', en: 'Are there many in your city?' }] },
            { q: { es: '¿Escribes reseñas en internet?', en: 'Do you write online reviews?' }, help: { es: 'Sí, de restaurantes. / No, solo las leo.', en: 'Yes, of restaurants. / No, I only read them.' }, follow: [{ es: '¿Buenas o malas?', en: 'Good or bad?' }, { es: '¿Te fías de ellas?', en: 'Do you trust them?' }] },
            { q: { es: '¿Te pones nervioso delante de mucha gente?', en: 'Do you get nervous in front of lots of people?' }, help: { es: 'Sí, mucho. / No, me gusta.', en: 'Yes, very. / No, I like it.' }, follow: [{ es: '¿Qué haces para calmarte?', en: 'What do you do to calm down?' }, { es: '¿Cuándo te pasa?', en: 'When does it happen to you?' }] },
          ],
          words: [{ es: 'el sótano', en: 'the basement' }, { es: 'el público', en: 'the audience' }, { es: 'la reseña', en: 'the review' }, { es: 'roncar', en: 'to snore' }, { es: 'la pasión', en: 'passion' }],
        },
        A2: {
          scene: { es: 'Callum hace un chiste sobre los ingleses. A la mayoría del público le hace mucha gracia, pero una pareja de Londres se levanta y se va. Al día siguiente, una crítica en el periódico dice que su humor es «cruel». Callum no ha dormido en toda la noche.', en: 'Callum makes a joke about the English. Most of the audience finds it very funny, but a couple from London get up and leave. The next day, a review in the paper says his humour is “cruel”. Callum hasn’t slept all night.' },
          opener: { es: 'Llevo diez años haciendo chistes sobre escoceses, ingleses, mi madre y yo mismo. Siempre he pensado que la comedia tiene que molestar un poco. Pero cuando vi a esa pareja irse, me sentó fatal. ¿Tú alguna vez has hecho un chiste que ha ofendido a alguien sin querer?', en: 'I’ve been making jokes about Scots, the English, my mother and myself for ten years. I’ve always thought comedy should be a bit uncomfortable. But when I saw that couple leave, it hit me hard. Have you ever made a joke that offended someone without meaning to?' },
          decide: {
            ask: { es: 'Esta noche Callum tiene otro show. ¿Qué le aconsejas?', en: 'Tonight Callum has another show. What do you advise him?' },
            options: [
              { say: { es: 'Quitar el chiste. No vale la pena.', en: 'Drop the joke. It’s not worth it.' }, then: { es: 'El show está bien, pero Callum siente que ha perdido algo suyo.', en: 'The show is fine, but Callum feels he has lost something of his own.' } },
              { say: { es: 'Mantenerlo y hablar de la crítica en el show.', en: 'Keep it and talk about the review in the show.' }, then: { es: 'Convierte la crítica en un chiste nuevo. Es el mejor momento de la noche.', en: 'He turns the review into a new joke. It’s the best moment of the night.' } },
              { say: { es: 'Cambiar el chiste para reírse de los escoceses también.', en: 'Change the joke so it laughs at the Scots too.' }, then: { es: 'Ahora todo el público se ríe, incluidos los ingleses de la primera fila.', en: 'Now the whole audience laughs, including the English people in the front row.' } },
            ],
          },
          twist: { es: 'La pareja de Londres le escribe un correo a Callum. Le explican que el chiste les recordó algo muy triste de su familia. ¿Qué debería contestar?', en: 'The London couple email Callum. They explain the joke reminded them of something very sad in their family. What should he reply?' },
          questions: [
            { q: { es: '¿Te has reído de algo y luego te has arrepentido?', en: 'Have you laughed at something and then regretted it?' }, help: { es: 'Sí, una vez… / No que yo recuerde.', en: 'Yes, once… / Not that I remember.' }, follow: [{ es: '¿Pediste perdón?', en: 'Did you apologise?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Hay chistes sobre la gente de otras regiones en tu país?', en: 'Are there jokes about people from other regions in your country?' }, help: { es: 'Sí, sobre los de… porque dicen que… / No muchos.', en: 'Yes, about people from… because they say… / Not many.' }, follow: [{ es: '¿Te hacen gracia?', en: 'Do you find them funny?' }, { es: '¿Y si son sobre tu región?', en: 'And if they’re about your region?' }] },
            { q: { es: '¿Te ha afectado una crítica?', en: 'Has a criticism affected you?' }, help: { es: 'Sí, cuando… me dijo que… / No, no me importan.', en: 'Yes, when… told me that… / No, I don’t care about them.' }, follow: [{ es: '¿Era justa?', en: 'Was it fair?' }, { es: '¿Cambiaste algo?', en: 'Did you change anything?' }] },
            { q: { es: '¿Sabes reírte de ti mismo?', en: 'Can you laugh at yourself?' }, help: { es: 'Sí, por ejemplo cuando… / Me cuesta un poco.', en: 'Yes, for example when… / I find it a bit hard.' }, follow: [{ es: '¿Quién te hace reír de ti?', en: 'Who makes you laugh at yourself?' }, { es: '¿Es importante?', en: 'Is it important?' }] },
          ],
          words: [{ es: 'el chiste', en: 'the joke' }, { es: 'hacer gracia', en: 'to be funny (to someone)' }, { es: 'ofender', en: 'to offend' }, { es: 'arrepentirse', en: 'to regret' }, { es: 'la crítica', en: 'the review / criticism' }],
        },
        B1: {
          scene: { es: 'Un canal de televisión le ofrece a Callum su propio programa. Es su gran oportunidad. Pero el canal le pide que quite todos los chistes políticos y que no hable de religión, porque quiere un público familiar. Callum siempre ha dicho que la comedia sirve para criticar a los poderosos.', en: 'A TV channel offers Callum his own programme. It’s his big break. But the channel asks him to drop all the political jokes and not to talk about religion, because it wants a family audience. Callum has always said comedy is for criticising the powerful.' },
          opener: { es: 'Llevo quince años actuando en sótanos para ocho personas. Ahora puedo llegar a un millón. Mi madre está orgullosísima. Pero si acepto, haré chistes sobre perros y suegras. ¿Es mejor llegar a mucha gente diciendo menos, o a poca gente diciendo exactamente lo que piensas?', en: 'I’ve spent fifteen years performing in basements for eight people. Now I can reach a million. My mother is incredibly proud. But if I accept, I’ll be making jokes about dogs and mothers-in-law. Is it better to reach lots of people saying less, or a few people saying exactly what you think?' },
          decide: {
            ask: { es: 'Callum tiene que firmar el contrato mañana. ¿Qué debería hacer?', en: 'Callum has to sign the contract tomorrow. What should he do?' },
            options: [
              { say: { es: 'Firmar y meter la crítica de forma sutil.', en: 'Sign and slip in the criticism subtly.' }, then: { es: 'Sus chistes sobre «un vecino con mucho poder» se vuelven famosos. Todos saben de quién habla.', en: 'His jokes about “a very powerful neighbour” become famous. Everyone knows who he means.' } },
              { say: { es: 'No firmar y seguir en los sótanos.', en: 'Not sign and stay in the basements.' }, then: { es: 'Sus fans lo admiran todavía más. Pero el alquiler sigue siendo un problema.', en: 'His fans admire him even more. But the rent is still a problem.' } },
              { say: { es: 'Negociar: un programa familiar y un pódcast libre.', en: 'Negotiate: a family show plus an uncensored podcast.' }, then: { es: 'El canal acepta. El pódcast acaba teniendo más oyentes que el programa.', en: 'The channel agrees. The podcast ends up having more listeners than the show.' } },
            ],
          },
          twist: { es: 'Un político al que Callum critica en sus shows es ahora el dueño del canal de televisión. ¿Cambia esto la decisión?', en: 'A politician Callum criticises in his shows is now the owner of the TV channel. Does this change the decision?' },
          questions: [
            { q: { es: '¿Debería haber límites en el humor?', en: 'Should there be limits to humour?' }, help: { es: 'Sí, por ejemplo… / No, porque el humor…', en: 'Yes, for example… / No, because humour…' }, follow: [{ es: '¿Quién los decide?', en: 'Who decides them?' }, { es: '¿Has visto un caso polémico?', en: 'Have you seen a controversial case?' }] },
            { q: { es: '¿Has callado tu opinión para conseguir algo?', en: 'Have you kept your opinion quiet to get something?' }, help: { es: 'Sí, en una entrevista… / No, siempre digo lo que pienso.', en: 'Yes, in an interview… / No, I always say what I think.' }, follow: [{ es: '¿Te arrepientes?', en: 'Do you regret it?' }, { es: '¿Valió la pena?', en: 'Was it worth it?' }] },
            { q: { es: '¿Qué humoristas de tu país critican a los poderosos?', en: 'Which comedians in your country criticise the powerful?' }, help: { es: 'Por ejemplo… que habla de… / No conozco ninguno.', en: 'For example… who talks about… / I don’t know any.' }, follow: [{ es: '¿Han tenido problemas?', en: 'Have they had problems?' }, { es: '¿Te gustan?', en: 'Do you like them?' }] },
            { q: { es: '¿Prefieres ser famoso o ser libre?', en: 'Would you rather be famous or free?' }, help: { es: 'Prefiero… porque… / Creo que se puede ser las dos cosas si…', en: 'I’d rather… because… / I think you can be both if…' }, follow: [{ es: '¿Qué famoso parece libre?', en: 'Which famous person seems free?' }, { es: '¿Qué te daría miedo de la fama?', en: 'What would scare you about fame?' }] },
          ],
          words: [{ es: 'los poderosos', en: 'the powerful' }, { es: 'sutil', en: 'subtle' }, { es: 'la suegra', en: 'the mother-in-law' }, { es: 'negociar', en: 'to negotiate' }, { es: 'callar', en: 'to keep quiet' }],
        },
      },
    },
    // ------------------------------------------------------------ the kilt maker
    {
      id: 'kilts',
      name: { es: 'La tienda de faldas escocesas', en: 'The kilt maker’s shop' },
      who: { name: 'Morag', role: { es: 'sastra de kilts', en: 'kilt maker' } },
      levels: {
        A0: {
          scene: { es: 'Es una tienda pequeña. Hay telas de muchos colores: rojo, verde, azul. Son los cuadros escoceses. Morag hace faldas para hombres: los kilts.', en: 'It is a small shop. There are fabrics in many colours: red, green, blue. They are Scottish tartans. Morag makes skirts for men: kilts.' },
          opener: { es: '¡Hola! Soy Morag. Aquí hacemos kilts. Cada familia tiene sus colores. ¿Quieres probarte uno?', en: 'Hello! I am Morag. Here we make kilts. Each family has its own colours. Do you want to try one on?' },
          decide: {
            ask: { es: 'Morag tiene tres telas. ¿Cuál eliges?', en: 'Morag has three fabrics. Which one do you choose?' },
            options: [
              { say: { es: 'La roja.', en: 'The red one.' }, then: { es: 'Morag dice: «¡Es de una familia muy famosa!»', en: 'Morag says: “It is from a very famous family!”' } },
              { say: { es: 'La verde y azul.', en: 'The green and blue one.' }, then: { es: 'Morag dice: «Muy elegante. Como el mar».', en: 'Morag says: “Very elegant. Like the sea.”' } },
              { say: { es: 'La negra.', en: 'The black one.' }, then: { es: 'Morag dice: «¡Perfecta para una boda!»', en: 'Morag says: “Perfect for a wedding!”' } },
            ],
          },
          twist: { es: 'Te pruebas el kilt. ¡Es muy grande! Morag se ríe. ¿Qué dices?', en: 'You try on the kilt. It is very big! Morag laughs. What do you say?' },
          questions: [
            { q: { es: '¿Cuál es tu ropa favorita?', en: 'What are your favourite clothes?' }, help: { es: 'Mis vaqueros. / Mi chaqueta.', en: 'My jeans. / My jacket.' }, follow: [{ es: '¿De qué color?', en: 'What colour?' }, { es: '¿Dónde la compras?', en: 'Where do you buy it?' }] },
            { q: { es: '¿Hay ropa típica en tu país?', en: 'Is there traditional clothing in your country?' }, help: { es: 'Sí, el… / No, no hay.', en: 'Yes, the… / No, there isn’t.' }, follow: [{ es: '¿Cuándo se lleva?', en: 'When is it worn?' }, { es: '¿Tienes una?', en: 'Do you have one?' }] },
            { q: { es: '¿Te gustan los cuadros en la ropa?', en: 'Do you like checks on clothes?' }, help: { es: 'Sí, me gustan. / No, prefiero un color.', en: 'Yes, I like them. / No, I prefer one colour.' }, follow: [{ es: '¿Tienes una camisa de cuadros?', en: 'Do you have a checked shirt?' }, { es: '¿De qué colores?', en: 'What colours?' }] },
            { q: { es: '¿Vas a bodas?', en: 'Do you go to weddings?' }, help: { es: 'Sí, a veces. / No, casi nunca.', en: 'Yes, sometimes. / No, hardly ever.' }, follow: [{ es: '¿Qué ropa llevas?', en: 'What clothes do you wear?' }, { es: '¿Bailas?', en: 'Do you dance?' }] },
          ],
          words: [{ es: 'la tela', en: 'the fabric' }, { es: 'la falda', en: 'the skirt' }, { es: 'los cuadros', en: 'checks / tartan' }, { es: 'probarse', en: 'to try on' }, { es: 'la boda', en: 'the wedding' }],
        },
        A1: {
          scene: { es: 'Un chico joven entra en la tienda con su abuelo. El chico se casa el mes que viene y quiere llevar kilt, como todos los hombres de su familia. Pero él vive en Londres y nunca ha llevado uno.', en: 'A young man comes into the shop with his grandfather. He is getting married next month and wants to wear a kilt, like all the men in his family. But he lives in London and has never worn one.' },
          opener: { es: 'Un kilt de verdad tiene ocho metros de tela y tardo treinta horas en hacerlo a mano. Por eso es caro: unas seiscientas libras. Pero dura toda la vida. Este abuelo lleva el mismo kilt desde su boda, hace cincuenta años. ¿Tú tienes algo que te dure toda la vida?', en: 'A real kilt has eight metres of fabric and it takes me thirty hours to make by hand. That’s why it’s expensive: about six hundred pounds. But it lasts a lifetime. This grandfather has worn the same kilt since his wedding, fifty years ago. Do you have something that will last you a lifetime?' },
          decide: {
            ask: { es: 'El chico no tiene mucho dinero. ¿Qué le recomiendas?', en: 'The young man doesn’t have much money. What do you recommend?' },
            options: [
              { say: { es: 'Alquilar un kilt para la boda.', en: 'Hire a kilt for the wedding.' }, then: { es: 'Cuesta ochenta libras. Está contento, pero el abuelo pone cara triste.', en: 'It costs eighty pounds. He is happy, but his grandfather looks sad.' } },
              { say: { es: 'Llevar el kilt viejo del abuelo.', en: 'Wear his grandfather’s old kilt.' }, then: { es: 'Morag lo arregla un poco. El abuelo llora de emoción.', en: 'Morag alters it a little. The grandfather cries with emotion.' } },
              { say: { es: 'Comprar uno nuevo y pagar poco a poco.', en: 'Buy a new one and pay little by little.' }, then: { es: 'Morag acepta. El chico paga cincuenta libras al mes durante un año.', en: 'Morag agrees. He pays fifty pounds a month for a year.' } },
            ],
          },
          twist: { es: 'El chico pregunta en voz baja: «¿Qué se lleva debajo del kilt?». El abuelo se ríe muy fuerte. ¿Qué dices tú?', en: 'The young man asks quietly: “What do you wear under the kilt?” The grandfather laughs very loudly. What do you say?' },
          questions: [
            { q: { es: '¿Tienes algo muy viejo que todavía usas?', en: 'Do you have something very old that you still use?' }, help: { es: 'Sí, tengo un… de hace… años.', en: 'Yes, I have a… from… years ago.' }, follow: [{ es: '¿De dónde es?', en: 'Where is it from?' }, { es: '¿Por qué lo guardas?', en: 'Why do you keep it?' }] },
            { q: { es: '¿Prefieres cosas hechas a mano o en fábrica?', en: 'Do you prefer handmade or factory-made things?' }, help: { es: 'A mano, porque… / En fábrica, son más baratas.', en: 'Handmade, because… / Factory, they’re cheaper.' }, follow: [{ es: '¿Qué tienes hecho a mano?', en: 'What do you have that’s handmade?' }, { es: '¿Sabes hacer algo a mano?', en: 'Can you make anything by hand?' }] },
            { q: { es: '¿Alquilas ropa para fiestas?', en: 'Do you hire clothes for parties?' }, help: { es: 'Sí, a veces. / No, compro.', en: 'Yes, sometimes. / No, I buy.' }, follow: [{ es: '¿Para qué fiesta?', en: 'For which party?' }, { es: '¿Es buena idea?', en: 'Is it a good idea?' }] },
            { q: { es: '¿Qué ropa lleva la gente en las bodas de tu país?', en: 'What do people wear at weddings in your country?' }, help: { es: 'Los hombres llevan… y las mujeres…', en: 'Men wear… and women…' }, follow: [{ es: '¿Hay colores prohibidos?', en: 'Are there forbidden colours?' }, { es: '¿Qué llevas tú?', en: 'What do you wear?' }] },
          ],
          words: [{ es: 'a mano', en: 'by hand' }, { es: 'alquilar', en: 'to hire' }, { es: 'arreglar', en: 'to alter / fix' }, { es: 'casarse', en: 'to get married' }, { es: 'durar', en: 'to last' }],
        },
        A2: {
          scene: { es: 'Morag es la última persona de su pueblo que hace kilts a mano. Tiene sesenta y cinco años y le duelen las manos. Hace un año aceptó a una aprendiz, Leila, una chica siria que llegó a Escocia como refugiada. Algunos clientes mayores dicen que un kilt «de verdad» lo tiene que hacer una escocesa.', en: 'Morag is the last person in her village who makes kilts by hand. She is sixty-five and her hands hurt. A year ago she took on an apprentice, Leila, a Syrian girl who came to Scotland as a refugee. Some older customers say a “real” kilt has to be made by a Scottish woman.' },
          opener: { es: 'Leila tiene las mejores manos que he visto en cuarenta años. En Siria, su abuela era costurera. Aprende rápido y le encanta el oficio. Pero ayer un cliente me dijo que no quería «un kilt hecho por una extranjera». Me quedé sin palabras. ¿Tú qué le habrías dicho?', en: 'Leila has the best hands I’ve seen in forty years. In Syria, her grandmother was a seamstress. She learns fast and loves the craft. But yesterday a customer told me he didn’t want “a kilt made by a foreigner”. I was speechless. What would you have told him?' },
          decide: {
            ask: { es: 'Morag tiene que decidir qué hace con ese cliente. ¿Qué le aconsejas?', en: 'Morag has to decide what to do about that customer. What do you advise her?' },
            options: [
              { say: { es: 'Decirle que se vaya a otra tienda.', en: 'Tell him to go to another shop.' }, then: { es: 'El cliente se va. Leila se entera y le da las gracias a Morag con un abrazo.', en: 'The customer leaves. Leila finds out and thanks Morag with a hug.' } },
              { say: { es: 'Enseñarle el trabajo de Leila sin decir quién lo ha hecho.', en: 'Show him Leila’s work without saying who made it.' }, then: { es: 'El cliente dice que es el mejor kilt que ha visto. Entonces Morag se lo explica.', en: 'The customer says it’s the best kilt he has ever seen. Then Morag explains.' } },
              { say: { es: 'Contar la historia en el periódico del pueblo.', en: 'Tell the story in the village newspaper.' }, then: { es: 'Muchos vecinos vienen a conocer a Leila. Los pedidos se duplican.', en: 'Lots of locals come to meet Leila. Orders double.' } },
            ],
          },
          twist: { es: 'Leila le dice a Morag que quiere crear un tartán nuevo con los colores de Siria y de Escocia juntos. A algunos les parece una falta de respeto a la tradición. ¿Qué debería hacer Morag?', en: 'Leila tells Morag she wants to create a new tartan with the colours of Syria and Scotland together. Some people think it’s disrespectful to tradition. What should Morag do?' },
          questions: [
            { q: { es: '¿Hay oficios tradicionales que están desapareciendo en tu país?', en: 'Are there traditional crafts disappearing in your country?' }, help: { es: 'Sí, por ejemplo… porque ya nadie… / No muchos.', en: 'Yes, for example… because nobody… any more. / Not many.' }, follow: [{ es: '¿Es una pena?', en: 'Is it a shame?' }, { es: '¿Aprenderías uno?', en: 'Would you learn one?' }] },
            { q: { es: '¿Alguien te ha enseñado un oficio o una habilidad?', en: 'Has someone taught you a craft or a skill?' }, help: { es: 'Sí, mi… me enseñó a… / No, nadie me enseñó.', en: 'Yes, my… taught me to… / No, I taught myself.' }, follow: [{ es: '¿Cuánto tiempo tardaste?', en: 'How long did it take you?' }, { es: '¿Lo usas todavía?', en: 'Do you still use it?' }] },
            { q: { es: '¿Has visto a alguien tratar mal a un extranjero?', en: 'Have you seen someone treat a foreigner badly?' }, help: { es: 'Sí, una vez en… / No, pero he oído que…', en: 'Yes, once in… / No, but I’ve heard that…' }, follow: [{ es: '¿Hiciste algo?', en: 'Did you do anything?' }, { es: '¿Qué harías ahora?', en: 'What would you do now?' }] },
            { q: { es: '¿Se puede cambiar una tradición sin romperla?', en: 'Can you change a tradition without breaking it?' }, help: { es: 'Sí, si… / No, porque entonces…', en: 'Yes, if… / No, because then…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Te gustó el cambio?', en: 'Did you like the change?' }] },
          ],
          words: [{ es: 'la aprendiz', en: 'the apprentice' }, { es: 'la costurera', en: 'the seamstress' }, { es: 'el oficio', en: 'the craft' }, { es: 'el pedido', en: 'the order' }, { es: 'el refugiado', en: 'the refugee' }],
        },
        B1: {
          scene: { es: 'Una gran marca de moda de Londres ha presentado una colección con «falda escocesa» en un desfile de París. Los diseños usan los cuadros de familias escocesas sin pedir permiso y se fabrican en Asia a un precio muy bajo. Morag recibe la llamada de un periodista que quiere su opinión.', en: 'A big London fashion brand has shown a collection with “Scottish skirts” at a Paris fashion show. The designs use Scottish family tartans without asking permission and are made in Asia at a very low price. Morag gets a call from a journalist who wants her opinion.' },
          opener: { es: 'Por un lado, me alegra que el mundo vea nuestros cuadros. Por otro, esos diseños no tienen nada que ver con lo que hago: ni la historia de las familias, ni las treinta horas de trabajo. Y los venden a cuarenta libras. ¿Dónde está la línea entre inspirarse en una cultura y aprovecharse de ella?', en: 'On the one hand, I’m glad the world sees our tartans. On the other, those designs have nothing to do with what I make: neither the families’ history nor the thirty hours of work. And they sell them for forty pounds. Where is the line between being inspired by a culture and exploiting it?' },
          decide: {
            ask: { es: 'El periodista le pide a Morag una frase para el titular. ¿Qué debería decir?', en: 'The journalist asks Morag for a line for the headline. What should she say?' },
            options: [
              { say: { es: '«Que paguen a quienes crearon estos cuadros».', en: '“Let them pay those who created these tartans.”' }, then: { es: 'La marca recibe muchas críticas y propone una colaboración con talleres escoceses.', en: 'The brand receives lots of criticism and proposes a collaboration with Scottish workshops.' } },
              { say: { es: '«Me alegra que se hable de Escocia, aunque sea así».', en: '“I’m glad people are talking about Scotland, even like this.”' }, then: { es: 'Algunos artesanos se enfadan con ella. Pero su tienda recibe pedidos de todo el mundo.', en: 'Some craftspeople get angry with her. But her shop gets orders from all over the world.' } },
              { say: { es: '«Un kilt barato no es un kilt: es un disfraz».', en: '“A cheap kilt isn’t a kilt: it’s a costume.”' }, then: { es: 'La frase se hace viral. La marca retira dos diseños de la colección.', en: 'The line goes viral. The brand withdraws two designs from the collection.' } },
            ],
          },
          twist: { es: 'La marca le ofrece a Morag un contrato para diseñar su próxima colección. Ganaría en un año más que en toda su vida, pero su nombre aparecería en ropa fabricada en serie. ¿Debería aceptar?', en: 'The brand offers Morag a contract to design its next collection. She would earn more in a year than in her whole life, but her name would appear on mass-produced clothing. Should she accept?' },
          questions: [
            { q: { es: '¿Qué elemento de tu cultura se ha usado mal en otros países?', en: 'Which element of your culture has been misused in other countries?' }, help: { es: 'Por ejemplo, … se usa como… / No se me ocurre ninguno.', en: 'For example, … is used as… / I can’t think of any.' }, follow: [{ es: '¿Te molesta?', en: 'Does it bother you?' }, { es: '¿Y al revés?', en: 'And the other way round?' }] },
            { q: { es: '¿Llevarías ropa típica de otra cultura?', en: 'Would you wear traditional clothing from another culture?' }, help: { es: 'Sí, si… / Depende del contexto, porque…', en: 'Yes, if… / It depends on the context, because…' }, follow: [{ es: '¿Lo has hecho?', en: 'Have you done it?' }, { es: '¿Cómo reaccionó la gente?', en: 'How did people react?' }] },
            { q: { es: '¿Pagas más por productos artesanales?', en: 'Do you pay more for handmade products?' }, help: { es: 'Sí, cuando… / Me gustaría, pero…', en: 'Yes, when… / I’d like to, but…' }, follow: [{ es: '¿Qué compras así?', en: 'What do you buy that way?' }, { es: '¿Cómo sabes que es auténtico?', en: 'How do you know it’s authentic?' }] },
            { q: { es: '¿Venderías tu nombre a una gran empresa?', en: 'Would you sell your name to a big company?' }, help: { es: 'Sí, si me dejaran… / No, porque perdería…', en: 'Yes, if they let me… / No, because I’d lose…' }, follow: [{ es: '¿Por cuánto dinero?', en: 'For how much money?' }, { es: '¿Qué condiciones pondrías?', en: 'What conditions would you set?' }] },
          ],
          words: [{ es: 'el desfile', en: 'the fashion show' }, { es: 'aprovecharse', en: 'to exploit' }, { es: 'el disfraz', en: 'the costume' }, { es: 'el taller', en: 'the workshop' }, { es: 'en serie', en: 'mass-produced' }],
        },
      },
    },
    // ------------------------------------------------------------ the Highlands
    {
      id: 'highlands',
      name: { es: 'El refugio de las Tierras Altas', en: 'The Highlands mountain hut' },
      who: { name: 'Isla', role: { es: 'guarda de montaña', en: 'mountain ranger' } },
      levels: {
        A0: {
          scene: { es: 'Estás en las montañas de Escocia. Hay ovejas, ríos y mucho viento. No hay casas. Isla trabaja en un refugio pequeño.', en: 'You are in the Scottish mountains. There are sheep, rivers and lots of wind. There are no houses. Isla works in a small mountain hut.' },
          opener: { es: '¡Hola! Soy Isla. Trabajo aquí, en la montaña. Hoy hace mucho viento. ¿Quieres caminar conmigo?', en: 'Hello! I am Isla. I work here, in the mountains. Today it is very windy. Do you want to walk with me?' },
          decide: {
            ask: { es: 'Isla te da tres caminos. ¿Cuál eliges?', en: 'Isla gives you three paths. Which one do you choose?' },
            options: [
              { say: { es: 'El camino del río.', en: 'The river path.' }, then: { es: 'Isla dice: «Mira, un ciervo bebe agua».', en: 'Isla says: “Look, a deer is drinking water.”' } },
              { say: { es: 'El camino a la montaña alta.', en: 'The path to the high mountain.' }, then: { es: 'Isla dice: «¡Arriba hay nieve!»', en: 'Isla says: “There is snow at the top!”' } },
              { say: { es: 'El camino corto.', en: 'The short path.' }, then: { es: 'Isla dice: «Muy bien. Después, té caliente».', en: 'Isla says: “Very good. Then, hot tea.”' } },
            ],
          },
          twist: { es: 'Hay unos insectos muy pequeños. ¡Pican mucho! Isla te da una crema. ¿Qué dices?', en: 'There are some very small insects. They bite a lot! Isla gives you some cream. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta caminar?', en: 'Do you like walking?' }, help: { es: 'Sí, mucho. / No, prefiero la bici.', en: 'Yes, a lot. / No, I prefer cycling.' }, follow: [{ es: '¿Dónde caminas?', en: 'Where do you walk?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Prefieres la montaña o la playa?', en: 'Do you prefer the mountains or the beach?' }, help: { es: 'La montaña. / La playa.', en: 'The mountains. / The beach.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Cuál está cerca de tu casa?', en: 'Which is near your house?' }] },
            { q: { es: '¿Te gustan los animales?', en: 'Do you like animals?' }, help: { es: 'Sí, me gustan los… / No mucho.', en: 'Yes, I like… / Not much.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Tienes uno?', en: 'Do you have one?' }] },
            { q: { es: '¿Hace viento en tu ciudad?', en: 'Is it windy in your city?' }, help: { es: 'Sí, mucho. / No, poco.', en: 'Yes, a lot. / No, a little.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿En qué mes?', en: 'In which month?' }] },
          ],
          words: [{ es: 'el refugio', en: 'the mountain hut' }, { es: 'el ciervo', en: 'the deer' }, { es: 'el viento', en: 'the wind' }, { es: 'picar', en: 'to bite' }, { es: 'el camino', en: 'the path' }],
        },
        A1: {
          scene: { es: 'Son las cinco de la tarde. Empieza a oscurecer y hay niebla. Dos excursionistas jóvenes llegan al refugio. Están mojados, tienen frío y uno lleva zapatillas de deporte. Quieren subir a la montaña más alta de Gran Bretaña mañana.', en: 'It is five in the afternoon. It is getting dark and there is fog. Two young hikers arrive at the hut. They are wet, cold and one is wearing trainers. They want to climb the highest mountain in Great Britain tomorrow.' },
          opener: { es: 'En Escocia el tiempo cambia en diez minutos. Por la mañana hace sol y a mediodía hay nieve. Cada año rescatamos a muchas personas que suben sin la ropa adecuada. Mira las zapatillas de este chico… ¿Tú qué llevas siempre cuando vas a la montaña?', en: 'In Scotland the weather changes in ten minutes. In the morning it’s sunny and at midday there’s snow. Every year we rescue lots of people who climb without the right clothes. Look at this lad’s trainers… What do you always take when you go to the mountains?' },
          decide: {
            ask: { es: 'Los chicos te preguntan qué hacer mañana. ¿Qué les dices?', en: 'The young hikers ask you what to do tomorrow. What do you tell them?' },
            options: [
              { say: { es: 'Esperar un día y comprar botas en el pueblo.', en: 'Wait a day and buy boots in the village.' }, then: { es: 'Al día siguiente hace sol. Suben con botas nuevas y llegan arriba.', en: 'The next day it’s sunny. They climb with new boots and reach the top.' } },
              { say: { es: 'Subir con Isla, que conoce el camino.', en: 'Climb with Isla, who knows the way.' }, then: { es: 'Isla acepta. A mitad de camino hay nieve, pero ella sabe qué hacer.', en: 'Isla agrees. Halfway up there is snow, but she knows what to do.' } },
              { say: { es: 'Hacer un camino más fácil por el valle.', en: 'Do an easier route through the valley.' }, then: { es: 'Ven ciervos, cascadas y un castillo en ruinas. Están muy contentos.', en: 'They see deer, waterfalls and a ruined castle. They are very happy.' } },
            ],
          },
          twist: { es: 'Por la noche, la radio del refugio suena: hay una persona perdida en la montaña. Isla tiene que salir. ¿Qué haces tú?', en: 'At night, the hut’s radio crackles: there is a person lost on the mountain. Isla has to go out. What do you do?' },
          questions: [
            { q: { es: '¿Qué llevas cuando vas de excursión?', en: 'What do you take when you go hiking?' }, help: { es: 'Llevo agua, … y …', en: 'I take water, … and …' }, follow: [{ es: '¿Llevas comida?', en: 'Do you take food?' }, { es: '¿Y el móvil?', en: 'And your phone?' }] },
            { q: { es: '¿Cambia mucho el tiempo en tu país?', en: 'Does the weather change a lot in your country?' }, help: { es: 'Sí, mucho. / No, siempre hace…', en: 'Yes, a lot. / No, it’s always…' }, follow: [{ es: '¿Miras el tiempo cada día?', en: 'Do you check the weather every day?' }, { es: '¿Con qué aplicación?', en: 'With which app?' }] },
            { q: { es: '¿Te has perdido alguna vez?', en: 'Have you ever got lost?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Tenías miedo?', en: 'Were you scared?' }] },
            { q: { es: '¿Cuál es la montaña más alta de tu país?', en: 'What is the highest mountain in your country?' }, help: { es: 'Es el… / No lo sé.', en: 'It’s… / I don’t know.' }, follow: [{ es: '¿Has subido?', en: 'Have you climbed it?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
          ],
          words: [{ es: 'el excursionista', en: 'the hiker' }, { es: 'mojado', en: 'wet' }, { es: 'las botas', en: 'the boots' }, { es: 'rescatar', en: 'to rescue' }, { es: 'el valle', en: 'the valley' }],
        },
        A2: {
          scene: { es: 'Las Tierras Altas tienen muy pocos habitantes. Hace doscientos años, muchos terratenientes echaron a las familias de sus tierras para criar ovejas. Hoy, un millonario extranjero ha comprado una gran parte de la montaña donde trabaja Isla y quiere cerrar los caminos al público.', en: 'The Highlands have very few inhabitants. Two hundred years ago, many landowners threw families off their land to raise sheep. Today, a foreign millionaire has bought a large part of the mountain where Isla works and wants to close the paths to the public.' },
          opener: { es: 'Mi familia vivió en este valle durante siglos, hasta que los echaron. Ahora, otra vez, un hombre rico decide quién puede caminar por aquí. En Escocia tenemos una ley muy bonita: todo el mundo puede caminar por el campo, aunque sea privado. ¿En tu país se puede caminar por cualquier sitio?', en: 'My family lived in this valley for centuries, until they were thrown out. Now, once again, a rich man decides who can walk here. In Scotland we have a lovely law: everyone can walk in the countryside, even if it’s private. In your country can you walk anywhere?' },
          decide: {
            ask: { es: 'El millonario invita a Isla a hablar. ¿Qué le aconsejas?', en: 'The millionaire invites Isla to talk. What do you advise her?' },
            options: [
              { say: { es: 'Explicarle la ley y la historia del valle.', en: 'Explain the law and the history of the valley to him.' }, then: { es: 'El millonario no conocía la historia. Decide dejar los caminos abiertos.', en: 'The millionaire didn’t know the history. He decides to leave the paths open.' } },
              { say: { es: 'Organizar una caminata con cien vecinos.', en: 'Organise a walk with a hundred locals.' }, then: { es: 'Llegan doscientas personas. Sale en la televisión nacional.', en: 'Two hundred people turn up. It’s on national television.' } },
              { say: { es: 'Proponerle un proyecto para plantar árboles juntos.', en: 'Propose a project to plant trees together.' }, then: { es: 'Al millonario le encanta la idea. Se plantan diez mil árboles en tres años.', en: 'The millionaire loves the idea. Ten thousand trees are planted in three years.' } },
            ],
          },
          twist: { es: 'El millonario le ofrece a Isla un trabajo con un sueldo tres veces mayor: ser la guarda de su finca privada. ¿Debería aceptar?', en: 'The millionaire offers Isla a job with three times the salary: to be the ranger of his private estate. Should she accept?' },
          questions: [
            { q: { es: '¿Tu familia ha tenido que dejar su tierra alguna vez?', en: 'Has your family ever had to leave its land?' }, help: { es: 'Sí, mis bisabuelos… / No, que yo sepa.', en: 'Yes, my great-grandparents… / Not that I know of.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Adónde fueron?', en: 'Where did they go?' }] },
            { q: { es: '¿En tu país se puede caminar por el campo libremente?', en: 'In your country can you walk freely in the countryside?' }, help: { es: 'Sí, casi siempre. / No, mucho es privado.', en: 'Yes, almost always. / No, a lot is private.' }, follow: [{ es: '¿Te parece bien?', en: 'Do you think that’s right?' }, { es: '¿Has tenido problemas?', en: 'Have you had problems?' }] },
            { q: { es: '¿Has plantado un árbol alguna vez?', en: 'Have you ever planted a tree?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Sigue vivo?', en: 'Is it still alive?' }, { es: '¿Qué árbol era?', en: 'What tree was it?' }] },
            { q: { es: '¿Trabajarías para alguien con quien no estás de acuerdo?', en: 'Would you work for someone you disagree with?' }, help: { es: 'Sí, si el sueldo… / No, porque…', en: 'Yes, if the salary… / No, because…' }, follow: [{ es: '¿Lo has hecho?', en: 'Have you done it?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
          ],
          words: [{ es: 'el terrateniente', en: 'the landowner' }, { es: 'echar', en: 'to throw out' }, { es: 'la finca', en: 'the estate' }, { es: 'plantar', en: 'to plant' }, { es: 'el habitante', en: 'the inhabitant' }],
        },
        B1: {
          scene: { es: 'Un grupo ecologista quiere reintroducir lobos en las Tierras Altas, donde desaparecieron hace trescientos años. Dicen que los lobos controlarían a los ciervos, que se comen los árboles jóvenes. Los granjeros de ovejas están furiosos. Isla tiene que preparar un informe para el gobierno.', en: 'An environmental group wants to reintroduce wolves to the Highlands, where they disappeared three hundred years ago. They say wolves would control the deer, which eat the young trees. Sheep farmers are furious. Isla has to prepare a report for the government.' },
          opener: { es: 'Como guarda, sé que hay demasiados ciervos y que el bosque no puede crecer. Los lobos lo arreglarían. Pero mi vecino tiene ochocientas ovejas y es su única forma de vivir. Si un lobo mata a diez, ¿quién le paga? ¿Tenemos derecho a devolver a la naturaleza algo que nuestros antepasados eliminaron, aunque cueste caro a algunas personas?', en: 'As a ranger, I know there are too many deer and the forest can’t grow. Wolves would fix that. But my neighbour has eight hundred sheep and it’s his only livelihood. If a wolf kills ten, who pays him? Do we have the right to give back to nature something our ancestors wiped out, even if it costs some people dearly?' },
          decide: {
            ask: { es: '¿Qué debería recomendar Isla en su informe?', en: 'What should Isla recommend in her report?' },
            options: [
              { say: { es: 'Traer los lobos y pagar a los granjeros por cada oveja perdida.', en: 'Bring the wolves and pay farmers for every sheep lost.' }, then: { es: 'Llegan seis lobos. El bosque empieza a crecer, pero los pagos tardan meses y los granjeros protestan.', en: 'Six wolves arrive. The forest begins to grow, but the payments take months and the farmers protest.' } },
              { say: { es: 'No traer lobos y controlar a los ciervos con cazadores.', en: 'Not bring wolves and control the deer with hunters.' }, then: { es: 'El número de ciervos baja. Los ecologistas dicen que es una solución «a medias».', en: 'Deer numbers fall. The environmentalists say it’s a “half-measure”.' } },
              { say: { es: 'Hacer una prueba en una isla vallada durante cinco años.', en: 'Run a five-year trial on a fenced island.' }, then: { es: 'La prueba atrae a científicos de todo el mundo. Los granjeros aceptan esperar los resultados.', en: 'The trial attracts scientists from all over the world. The farmers agree to wait for the results.' } },
            ],
          },
          twist: { es: 'Una noche, alguien mata a varios ciervos y deja un cartel: «Esto harán los lobos». Isla sospecha de un granjero que conoce desde niña. ¿Debería denunciarlo?', en: 'One night, someone kills several deer and leaves a sign: “This is what wolves will do.” Isla suspects a farmer she has known since she was a child. Should she report him?' },
          questions: [
            { q: { es: '¿Traerías de vuelta un animal que desapareció de tu país?', en: 'Would you bring back an animal that disappeared from your country?' }, help: { es: 'Sí, el… porque… / No, porque hoy…', en: 'Yes, the… because… / No, because today…' }, follow: [{ es: '¿Quién se opondría?', en: 'Who would oppose it?' }, { es: '¿Quién ganaría?', en: 'Who would benefit?' }] },
            { q: { es: '¿Es justo que unos pocos paguen por el bien de todos?', en: 'Is it fair for a few to pay for the good of all?' }, help: { es: 'Sí, siempre que se les compense… / No, porque…', en: 'Yes, as long as they’re compensated… / No, because…' }, follow: [{ es: '¿Conoces un caso real?', en: 'Do you know a real case?' }, { es: '¿Y si fueras tú?', en: 'And if it were you?' }] },
            { q: { es: '¿Denunciarías a alguien que conoces de toda la vida?', en: 'Would you report someone you’ve known all your life?' }, help: { es: 'Depende de lo que haya hecho. / Sí, porque la ley…', en: 'It depends on what they did. / Yes, because the law…' }, follow: [{ es: '¿Hablarías antes con esa persona?', en: 'Would you talk to them first?' }, { es: '¿Qué pensarían tus vecinos?', en: 'What would your neighbours think?' }] },
            { q: { es: '¿La gente del campo y la de la ciudad ven la naturaleza igual?', en: 'Do country people and city people see nature the same way?' }, help: { es: 'No, la gente de la ciudad… mientras que en el campo… / Creo que sí.', en: 'No, city people… whereas in the country… / I think so.' }, follow: [{ es: '¿Tú de qué lado estás?', en: 'Which side are you on?' }, { es: '¿Has vivido en los dos?', en: 'Have you lived in both?' }] },
          ],
          words: [{ es: 'reintroducir', en: 'to reintroduce' }, { es: 'el lobo', en: 'the wolf' }, { es: 'el antepasado', en: 'the ancestor' }, { es: 'vallado', en: 'fenced' }, { es: 'denunciar', en: 'to report' }],
        },
      },
    },
  ],
};
