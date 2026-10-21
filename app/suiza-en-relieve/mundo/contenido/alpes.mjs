// Los Alpes · the car-free village of Zermatt, the Aletsch glacier, a mountain hut, the
// Saint Bernard dogs and a summer alpine pasture. Five places, four levels each (A0, A1,
// A2, B1). Every level is written on its own.
export default {
  id: 'alpes',
  spots: [
    // ------------------------------------------------------------ Zermatt
    {
      id: 'zermatt',
      name: { es: 'Zermatt, el pueblo sin coches', en: 'Zermatt, the car-free village' },
      who: { name: 'Urs', role: { es: 'taxista eléctrico', en: 'electric taxi driver' } },
      levels: {
        A0: {
          scene: { es: 'Es un pueblo en la montaña. Hay nieve y casas de madera. No hay coches. Hay taxis pequeños y eléctricos. Urs es taxista. Tiene un gorro rojo y unos guantes.', en: 'It is a village in the mountains. There is snow and wooden houses. There are no cars. There are small electric taxis. Urs is a taxi driver. He has a red hat and gloves.' },
          opener: { es: '¡Hola! Soy Urs. Aquí no hay coches. Mi taxi es eléctrico. ¿Adónde vas?', en: 'Hello! I am Urs. There are no cars here. My taxi is electric. Where are you going?' },
          decide: {
            ask: { es: '¿Adónde vas?', en: 'Where are you going?' },
            options: [
              { say: { es: 'Al hotel.', en: 'To the hotel.' }, then: { es: 'Urs pone tu maleta en el taxi. Es muy silencioso.', en: 'Urs puts your suitcase in the taxi. It is very quiet.' } },
              { say: { es: 'A la montaña.', en: 'To the mountain.' }, then: { es: 'Urs dice: «Al tren de la montaña. ¡Mira, el Cervino!».', en: 'Urs says: “To the mountain train. Look, the Matterhorn!”' } },
              { say: { es: 'Voy a pie.', en: 'I go on foot.' }, then: { es: 'Urs ríe: «¡Bien! Pero hace frío. Ponte el gorro».', en: 'Urs laughs: “Good! But it is cold. Put your hat on.”' } },
            ],
          },
          twist: { es: 'Ves una montaña con forma de triángulo. Es muy famosa. ¿Sacas una foto?', en: 'You see a triangle-shaped mountain. It is very famous. Do you take a photo?' },
          questions: [
            { q: { es: '¿Te gusta la nieve?', en: 'Do you like snow?' }, help: { es: 'Sí, mucho. / No, hace frío.', en: 'Yes, a lot. / No, it is cold.' }, follow: [{ es: '¿Nieva en tu ciudad?', en: 'Does it snow in your city?' }, { es: '¿Esquías?', en: 'Do you ski?' }] },
            { q: { es: '¿Tienes coche?', en: 'Do you have a car?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Cómo vas al trabajo?', en: 'How do you get to work?' }, { es: '¿Usas taxi?', en: 'Do you use taxis?' }] },
            { q: { es: '¿Te gustan las montañas?', en: 'Do you like mountains?' }, help: { es: 'Sí. / No, prefiero el mar.', en: 'Yes. / No, I prefer the sea.' }, follow: [{ es: '¿Hay montañas en tu país?', en: 'Are there mountains in your country?' }, { es: '¿Son altas?', en: 'Are they high?' }] },
            { q: { es: '¿Usas guantes en invierno?', en: 'Do you wear gloves in winter?' }, help: { es: 'Sí. / No, no hace frío.', en: 'Yes. / No, it is not cold.' }, follow: [{ es: '¿Y gorro?', en: 'And a hat?' }, { es: '¿De qué color?', en: 'What colour?' }] },
          ],
          words: [{ es: 'la nieve', en: 'snow' }, { es: 'el taxi eléctrico', en: 'the electric taxi' }, { es: 'el gorro', en: 'the woolly hat' }, { es: 'los guantes', en: 'the gloves' }, { es: 'la maleta', en: 'the suitcase' }],
        },
        A1: {
          scene: { es: 'En Zermatt los coches de gasolina están prohibidos desde hace décadas. Los turistas dejan el coche en otro pueblo y llegan en tren. Por las calles solo pasan taxis eléctricos, bicicletas y algún carro de caballos. Detrás del pueblo está el Cervino, la montaña más famosa de Suiza. Urs nació aquí y conoce a todo el mundo.', en: 'In Zermatt petrol cars have been banned for decades. Tourists leave their car in another village and arrive by train. Only electric taxis, bicycles and the odd horse-drawn carriage go through the streets. Behind the village stands the Matterhorn, Switzerland’s most famous mountain. Urs was born here and knows everyone.' },
          opener: { es: 'En invierno somos seis mil habitantes y treinta mil turistas. Los más jóvenes del pueblo trabajan en hoteles, restaurantes y escuelas de esquí. El aire es limpio y no hay ruido de motores: solo campanas y gente que habla en veinte idiomas. Algunos turistas preguntan dónde aparcar. ¡Tengo que explicar que aquí no hay coches! ¿Te gustaría vivir en un pueblo sin coches?', en: 'In winter there are six thousand of us residents and thirty thousand tourists. The youngest in the village work in hotels, restaurants and ski schools. The air is clean and there’s no engine noise: just bells and people talking in twenty languages. Some tourists ask where to park. I have to explain there are no cars here! Would you like to live in a village without cars?' },
          decide: {
            ask: { es: 'Una familia con cuatro maletas grandes y dos niños pequeños necesita un taxi. El taxi de Urs es pequeño. ¿Qué hace?', en: 'A family with four big suitcases and two small children needs a taxi. Urs’s taxi is small. What does he do?' },
            options: [
              { say: { es: 'Hace dos viajes.', en: 'He makes two trips.' }, then: { es: 'Primero los niños y la madre; después el padre y las maletas. Todos llegan contentos.', en: 'First the children and the mother; then the father and the suitcases. Everyone arrives happy.' } },
              { say: { es: 'Llama a un amigo con un carro de caballos.', en: 'He calls a friend with a horse-drawn carriage.' }, then: { es: 'Los niños están encantados con el caballo. Es el mejor recuerdo del viaje.', en: 'The children are delighted with the horse. It’s the best memory of the trip.' } },
              { say: { es: 'Lleva a los niños y pone las maletas en un trineo.', en: 'He takes the children and puts the suitcases on a sledge.' }, then: { es: 'El padre arrastra el trineo por la nieve. Llega cansado, pero riendo.', en: 'The father drags the sledge through the snow. He arrives tired, but laughing.' } },
            ],
          },
          twist: { es: 'Un millonario quiere traer su coche deportivo a Zermatt y ofrece pagar una multa enorme. ¿Debería el pueblo aceptar?', en: 'A millionaire wants to bring his sports car to Zermatt and offers to pay a huge fine. Should the village accept?' },
          questions: [
            { q: { es: '¿Te gustaría vivir en un lugar sin coches?', en: 'Would you like to live in a place without cars?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Qué sería difícil?', en: 'What would be hard?' }, { es: '¿Qué sería mejor?', en: 'What would be better?' }] },
            { q: { es: '¿Esquiaste alguna vez?', en: 'Have you ever skied?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Te caíste mucho?', en: 'Did you fall a lot?' }, { es: '¿Te gustaría aprender?', en: 'Would you like to learn?' }] },
            { q: { es: '¿Hay mucho ruido donde vives?', en: 'Is there a lot of noise where you live?' }, help: { es: 'Sí, de coches / de gente. / No, es tranquilo.', en: 'Yes, from cars / people. / No, it’s quiet.' }, follow: [{ es: '¿Te molesta?', en: 'Does it bother you?' }, { es: '¿Duermes bien?', en: 'Do you sleep well?' }] },
            { q: { es: '¿Viajas con mucho equipaje?', en: 'Do you travel with a lot of luggage?' }, help: { es: 'Sí, siempre. / No, solo una mochila.', en: 'Yes, always. / No, just a backpack.' }, follow: [{ es: '¿Qué llevas siempre?', en: 'What do you always take?' }, { es: '¿Qué olvidas?', en: 'What do you forget?' }] },
          ],
          words: [{ es: 'prohibido', en: 'banned' }, { es: 'aparcar', en: 'to park' }, { es: 'el carro de caballos', en: 'the horse-drawn carriage' }, { es: 'el trineo', en: 'the sledge' }, { es: 'el equipaje', en: 'the luggage' }],
        },
        A2: {
          scene: { es: 'Zermatt tiene un problema: los pisos son tan caros que los trabajadores del pueblo no pueden vivir allí. Muchos camareros, cocineros y limpiadores viven en pueblos del valle y suben en tren cada día. Urs paga mucho por un piso pequeño. Su hija, que es profesora de esquí, va a mudarse fuera del pueblo porque no encuentra nada que pueda pagar.', en: 'Zermatt has a problem: flats are so expensive that the village’s workers can’t live there. Many waiters, cooks and cleaners live in villages down the valley and come up by train every day. Urs pays a lot for a small flat. His daughter, a ski instructor, is going to move out of the village because she can’t find anything she can afford.' },
          opener: { es: 'Mi familia vive aquí desde hace cinco generaciones. Mi abuelo era guía de montaña y subió al Cervino ciento cincuenta veces. Ahora la mitad de las casas son de extranjeros ricos que vienen dos semanas al año. En noviembre, cuando no hay turistas, el pueblo está vacío: ventanas cerradas por todas partes. Mi hija se va. ¿Qué futuro tiene un pueblo donde la gente del pueblo no puede vivir?', en: 'My family has lived here for five generations. My grandfather was a mountain guide and climbed the Matterhorn a hundred and fifty times. Now half the houses belong to rich foreigners who come two weeks a year. In November, when there are no tourists, the village is empty: closed windows everywhere. My daughter is leaving. What future does a village have when its own people can’t live there?' },
          decide: {
            ask: { es: '¿Qué debería hacer el pueblo?', en: 'What should the village do?' },
            options: [
              { say: { es: 'Construir pisos baratos solo para trabajadores del pueblo.', en: 'Build cheap flats just for village workers.' }, then: { es: 'Se construyen cuarenta pisos. La hija de Urs consigue uno y se queda.', en: 'Forty flats are built. Urs’s daughter gets one and stays.' } },
              { say: { es: 'Limitar la venta de casas a extranjeros.', en: 'Limit house sales to foreigners.' }, then: { es: 'Los precios dejan de subir, pero algunos vecinos que querían vender están enfadados.', en: 'Prices stop rising, but some locals who wanted to sell are angry.' } },
              { say: { es: 'Obligar a los hoteles a dar casa a sus trabajadores.', en: 'Make hotels provide housing for their workers.' }, then: { es: 'Los hoteles lo hacen, pero suben los precios de las habitaciones. Los turistas pagan la diferencia.', en: 'The hotels do it, but they raise room prices. The tourists pay the difference.' } },
            ],
          },
          twist: { es: 'Un extranjero que tiene casa en Zermatt dice: «Yo pago impuestos aquí y gasto mucho dinero en el pueblo. ¿Por qué soy el problema?». ¿Tiene razón?', en: 'A foreigner who owns a house in Zermatt says: “I pay taxes here and spend a lot of money in the village. Why am I the problem?” Is he right?' },
          questions: [
            { q: { es: '¿Puedes pagar una casa en la ciudad donde trabajas?', en: 'Can you afford a home in the city where you work?' }, help: { es: 'Sí, pero… / No, vivo en…', en: 'Yes, but… / No, I live in…' }, follow: [{ es: '¿Cuánto tardas en llegar al trabajo?', en: 'How long does it take you to get to work?' }, { es: '¿Te gustaría vivir más cerca?', en: 'Would you like to live closer?' }] },
            { q: { es: '¿Tu familia vive en el mismo lugar desde hace mucho?', en: 'Has your family lived in the same place for a long time?' }, help: { es: 'Sí, desde… / No, nos mudamos mucho.', en: 'Yes, since… / No, we move a lot.' }, follow: [{ es: '¿Te gustaría quedarte allí?', en: 'Would you like to stay there?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿El turismo es bueno para los pueblos?', en: 'Is tourism good for villages?' }, help: { es: 'Sí, porque… pero…', en: 'Yes, because… but…' }, follow: [{ es: '¿Un ejemplo de tu país?', en: 'An example from your country?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Te mudarías por no poder pagar el alquiler?', en: 'Would you move because you couldn’t afford the rent?' }, help: { es: 'Sí, ya lo hice. / No, buscaría…', en: 'Yes, I already have. / No, I’d look for…' }, follow: [{ es: '¿Adónde irías?', en: 'Where would you go?' }, { es: '¿Qué perderías?', en: 'What would you lose?' }] },
          ],
          words: [{ es: 'el limpiador', en: 'the cleaner' }, { es: 'la generación', en: 'the generation' }, { es: 'el guía de montaña', en: 'the mountain guide' }, { es: 'mudarse', en: 'to move (house)' }, { es: 'la diferencia', en: 'the difference' }],
        },
        B1: {
          scene: { es: 'El permafrost, la tierra que siempre estuvo helada en lo alto de las montañas, se está derritiendo por el calor. Las rocas se sueltan y algunas rutas de escalada del Cervino se cierran en verano. Hace dos años, un pueblo cercano tuvo que evacuarse porque una parte de la montaña amenazaba con caer. El ayuntamiento debe decidir si construye muros de protección muy caros o traslada algunas casas.', en: 'Permafrost, the ground that was always frozen high in the mountains, is thawing because of the heat. Rocks are coming loose and some climbing routes on the Matterhorn close in summer. Two years ago, a nearby village had to be evacuated because part of the mountain threatened to collapse. The council must decide whether to build very expensive protective walls or relocate some houses.' },
          opener: { es: 'Los montañeros siempre dijeron que la montaña manda. Pero antes la montaña era más predecible. Ahora un verano caliente puede cambiar en una semana lo que no cambió en mil años. Algunas familias viven en casas que sus bisabuelos construyeron en lugares que antes eran seguros. Para ellas, irse es perder su historia. Para el ayuntamiento, protegerlas puede costar millones cada año. ¿Hasta dónde debe un país proteger a la gente que vive en lugares cada vez más peligrosos?', en: 'Mountaineers have always said the mountain is in charge. But the mountain used to be more predictable. Now one hot summer can change in a week what didn’t change in a thousand years. Some families live in houses their great-grandparents built in places that used to be safe. For them, leaving means losing their history. For the council, protecting them could cost millions every year. How far should a country go to protect people living in increasingly dangerous places?' },
          decide: {
            ask: { es: '¿Qué apoya Urs en la reunión del pueblo?', en: 'What does Urs back at the village meeting?' },
            options: [
              { say: { es: 'Construir los muros, aunque sean caros.', en: 'Build the walls, even if they’re expensive.' }, then: { es: 'El cantón paga una parte. Los impuestos del pueblo suben, pero las familias se quedan.', en: 'The canton pays part. Village taxes go up, but the families stay.' } },
              { say: { es: 'Trasladar las casas con ayuda pública.', en: 'Relocate the houses with public help.' }, then: { es: 'Es doloroso: algunas familias lloran al irse. Pero dos años después, la zona antigua sufre un derrumbe.', en: 'It’s painful: some families cry as they leave. But two years later, the old area suffers a landslide.' } },
              { say: { es: 'Dejar que cada familia decida, con información clara del riesgo.', en: 'Let each family decide, with clear information on the risk.' }, then: { es: 'La mitad se queda y la otra mitad se va. El pueblo queda dividido.', en: 'Half stay and the other half leave. The village is left divided.' } },
            ],
          },
          twist: { es: 'Una compañía de seguros anuncia que ya no va a asegurar casas en zonas de riesgo alto. Sin seguro, nadie puede comprar ni vender esas casas. ¿Deben decidir los seguros dónde puede vivir la gente?', en: 'An insurance company announces it will no longer insure houses in high-risk areas. Without insurance, nobody can buy or sell those houses. Should insurers decide where people can live?' },
          questions: [
            { q: { es: '¿Hay zonas peligrosas por el clima en tu país?', en: 'Are there areas made dangerous by climate in your country?' }, help: { es: 'Sí, por inundaciones / incendios / sequías en…', en: 'Yes, from floods / fires / droughts in…' }, follow: [{ es: '¿La gente se va?', en: 'Do people leave?' }, { es: '¿Quién los ayuda?', en: 'Who helps them?' }] },
            { q: { es: '¿Dejarías tu casa si fuera peligroso quedarse?', en: 'Would you leave your home if it were dangerous to stay?' }, help: { es: 'Sí, enseguida. / Me costaría mucho porque…', en: 'Yes, straight away. / It would be very hard because…' }, follow: [{ es: '¿Qué te llevarías?', en: 'What would you take?' }, { es: '¿Adónde irías?', en: 'Where would you go?' }] },
            { q: { es: '¿Quién debería pagar la protección: el Estado, el pueblo o las familias?', en: 'Who should pay for protection: the state, the town or the families?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Y si es muy caro?', en: 'And if it’s very expensive?' }, { es: '¿Hay un límite?', en: 'Is there a limit?' }] },
            { q: { es: '¿Notaste cambios en la naturaleza desde que eras niño?', en: 'Have you noticed changes in nature since you were a child?' }, help: { es: 'Sí, ahora… y antes…', en: 'Yes, now… and before…' }, follow: [{ es: '¿Te preocupa?', en: 'Does it worry you?' }, { es: '¿Haces algo al respecto?', en: 'Do you do anything about it?' }] },
          ],
          words: [{ es: 'el permafrost', en: 'permafrost' }, { es: 'derretirse', en: 'to thaw / melt' }, { es: 'evacuar', en: 'to evacuate' }, { es: 'trasladar', en: 'to relocate' }, { es: 'el derrumbe', en: 'the landslide / collapse' }],
        },
      },
    },
    // ------------------------------------------------------------ the Aletsch glacier
    {
      id: 'glaciar',
      name: { es: 'El glaciar Aletsch', en: 'The Aletsch glacier' },
      who: { name: 'Martina', role: { es: 'glacióloga', en: 'glaciologist' } },
      levels: {
        A0: {
          scene: { es: 'Es un río de hielo enorme entre las montañas. Es blanco y azul. Martina es científica. Tiene una chaqueta naranja, gafas de sol y un bastón.', en: 'It is a huge river of ice between the mountains. It is white and blue. Martina is a scientist. She has an orange jacket, sunglasses and a walking pole.' },
          opener: { es: '¡Hola! Soy Martina. Esto es un glaciar. Es hielo muy, muy viejo. ¿Caminamos?', en: 'Hello! I am Martina. This is a glacier. It is very, very old ice. Shall we walk?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Camino con Martina.', en: 'I walk with Martina.' }, then: { es: 'El hielo hace ruido: ¡crac! Martina dice: «Está vivo».', en: 'The ice makes a noise: crack! Martina says: “It is alive.”' } },
              { say: { es: 'Toco el hielo.', en: 'I touch the ice.' }, then: { es: '¡Está muy frío! Es azul por dentro.', en: 'It is very cold! It is blue inside.' } },
              { say: { es: 'Me pongo gafas de sol.', en: 'I put on sunglasses.' }, then: { es: 'Martina dice: «Muy bien. Aquí el sol es muy fuerte».', en: 'Martina says: “Very good. The sun is very strong here.”' } },
            ],
          },
          twist: { es: 'Martina muestra una foto de hace cien años. El glaciar era más grande. ¿Por qué?', en: 'Martina shows a photo from a hundred years ago. The glacier was bigger. Why?' },
          questions: [
            { q: { es: '¿Viste un glaciar alguna vez?', en: 'Have you ever seen a glacier?' }, help: { es: 'Sí. / No, nunca.', en: 'Yes. / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te gustaría ver uno?', en: 'Would you like to see one?' }] },
            { q: { es: '¿Usas gafas de sol?', en: 'Do you wear sunglasses?' }, help: { es: 'Sí, siempre. / A veces. / No.', en: 'Yes, always. / Sometimes. / No.' }, follow: [{ es: '¿De qué color son?', en: 'What colour are they?' }, { es: '¿Cuántas tienes?', en: 'How many do you have?' }] },
            { q: { es: '¿Te gusta el frío?', en: 'Do you like the cold?' }, help: { es: 'Sí. / No, prefiero el calor.', en: 'Yes. / No, I prefer the heat.' }, follow: [{ es: '¿Qué haces cuando hace frío?', en: 'What do you do when it is cold?' }, { es: '¿Y cuando hace calor?', en: 'And when it is hot?' }] },
            { q: { es: '¿Te gusta la ciencia?', en: 'Do you like science?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué ciencia?', en: 'Which science?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'el glaciar', en: 'the glacier' }, { es: 'el hielo', en: 'ice' }, { es: 'la científica', en: 'the (female) scientist' }, { es: 'las gafas de sol', en: 'sunglasses' }, { es: 'el bastón', en: 'the walking pole' }],
        },
        A1: {
          scene: { es: 'El glaciar Aletsch es el más grande de los Alpes: tiene veinte kilómetros y, en algunos lugares, casi mil metros de hielo. Desde un mirador se ve como una autopista blanca entre las montañas. Martina mide el glaciar cada año con aparatos y fotos. Hoy trabaja con un grupo de estudiantes.', en: 'The Aletsch glacier is the largest in the Alps: it’s twenty kilometres long and, in some places, almost a thousand metres of ice. From a viewpoint it looks like a white motorway between the mountains. Martina measures the glacier every year with instruments and photos. Today she’s working with a group of students.' },
          opener: { es: 'Cada año el glaciar pierde unos cincuenta metros de largo. Los científicos dicen que, a final de siglo, puede quedar solo una pequeña parte. Es muy triste, pero también es mi trabajo: medir, mirar, explicar. Lo más bonito es ver a los estudiantes cuando llegan aquí por primera vez. Se quedan en silencio. ¿Qué lugar te dejó sin palabras?', en: 'Every year the glacier loses about fifty metres in length. Scientists say that by the end of the century only a small part may be left. It’s very sad, but it’s also my job: to measure, watch and explain. The best part is seeing students when they get here for the first time. They go quiet. Which place has left you speechless?' },
          decide: {
            ask: { es: 'Un estudiante quiere caminar solo por el glaciar para hacer una foto. ¿Qué hace Martina?', en: 'A student wants to walk alone on the glacier to take a photo. What does Martina do?' },
            options: [
              { say: { es: 'Le dice que no: hay grietas escondidas.', en: 'She says no: there are hidden crevasses.' }, then: { es: 'Martina le muestra una grieta de treinta metros. El estudiante no vuelve a separarse.', en: 'Martina shows him a thirty-metre crevasse. The student never wanders off again.' } },
              { say: { es: 'Lo acompaña con una cuerda.', en: 'She goes with him on a rope.' }, then: { es: 'Hacen la foto atados. Es la mejor foto del viaje.', en: 'They take the photo roped together. It’s the best photo of the trip.' } },
              { say: { es: 'Le da el dron para hacer la foto desde el aire.', en: 'She gives him the drone to take the photo from the air.' }, then: { es: 'La foto desde arriba es increíble. Y nadie corre peligro.', en: 'The photo from above is incredible. And nobody is in danger.' } },
            ],
          },
          twist: { es: 'Los estudiantes encuentran un objeto viejo en el hielo: una bota de hace ochenta años. ¿Qué hacen con ella?', en: 'The students find an old object in the ice: a boot from eighty years ago. What do they do with it?' },
          questions: [
            { q: { es: '¿Qué lugar te dejó sin palabras?', en: 'Which place has left you speechless?' }, help: { es: 'Me dejó sin palabras… porque…', en: '… left me speechless because…' }, follow: [{ es: '¿Con quién estabas?', en: 'Who were you with?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿Te gustaría trabajar al aire libre como Martina?', en: 'Would you like to work outdoors like Martina?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿En qué lugar?', en: 'Where?' }, { es: '¿Haciendo qué?', en: 'Doing what?' }] },
            { q: { es: '¿Usaste un dron alguna vez?', en: 'Have you ever used a drone?' }, help: { es: 'Sí. / No, nunca.', en: 'Yes. / No, never.' }, follow: [{ es: '¿Te gustaría?', en: 'Would you like to?' }, { es: '¿Para qué?', en: 'What for?' }] },
            { q: { es: '¿Encontraste algo antiguo o curioso alguna vez?', en: 'Have you ever found something old or curious?' }, help: { es: 'Sí, encontré… / No.', en: 'Yes, I found… / No.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Lo tienes todavía?', en: 'Do you still have it?' }] },
          ],
          words: [{ es: 'medir', en: 'to measure' }, { es: 'el aparato', en: 'the instrument' }, { es: 'la grieta', en: 'the crevasse / crack' }, { es: 'la cuerda', en: 'the rope' }, { es: 'el dron', en: 'the drone' }],
        },
        A2: {
          scene: { es: 'Un pueblo del valle propone cubrir una parte del glaciar con mantas blancas enormes en verano para que no se derrita tan rápido. Ya se hace en otros glaciares de Suiza. Funciona: bajo las mantas se pierde mucho menos hielo. Pero es carísimo y solo protege una zona muy pequeña. Le piden a Martina su opinión de experta.', en: 'A valley village proposes covering part of the glacier with huge white blankets in summer so it doesn’t melt so fast. It’s already done on other Swiss glaciers. It works: much less ice is lost under the blankets. But it’s very expensive and protects only a very small area. They ask Martina for her expert opinion.' },
          opener: { es: 'Entiendo a los vecinos: el glaciar es su paisaje, su turismo, su agua. Ver cómo desaparece duele. Las mantas salvan un poco de hielo, sí, pero es como poner una tirita a un enfermo grave. Además, me preocupa que la gente piense que el problema está resuelto. El problema real está lejos de aquí: en el aire que calentamos todos. Pero tampoco quiero quitarles la esperanza. ¿Qué les dirías?', en: 'I understand the locals: the glacier is their landscape, their tourism, their water. Watching it disappear hurts. The blankets save a little ice, yes, but it’s like putting a plaster on someone who’s seriously ill. Besides, I worry people will think the problem is solved. The real problem is far from here: in the air we all heat up. But I don’t want to take away their hope either. What would you tell them?' },
          decide: {
            ask: { es: '¿Qué recomienda Martina?', en: 'What does Martina recommend?' },
            options: [
              { say: { es: 'Poner las mantas, pero explicar claramente sus límites.', en: 'Put the blankets on, but explain their limits clearly.' }, then: { es: 'El pueblo lo hace y pone carteles: «Esto no salva el glaciar. Solo gana tiempo».', en: 'The village does it and puts up signs: “This doesn’t save the glacier. It only buys time.”' } },
              { say: { es: 'Usar el dinero en educación sobre el clima.', en: 'Spend the money on climate education.' }, then: { es: 'Se crea un centro para escuelas. Miles de niños visitan el glaciar cada año.', en: 'A centre for schools is created. Thousands of children visit the glacier every year.' } },
              { say: { es: 'Usar el dinero en energía limpia para el valle.', en: 'Spend the money on clean energy for the valley.' }, then: { es: 'El valle pone paneles solares. Es poco para el planeta, pero un buen ejemplo.', en: 'The valley installs solar panels. It’s not much for the planet, but a good example.' } },
            ],
          },
          twist: { es: 'Un turista dice: «Tengo que verlo antes de que desaparezca» y vino en avión desde muy lejos. ¿Es una contradicción?', en: 'A tourist says: “I have to see it before it disappears” and flew in from very far away. Is that a contradiction?' },
          questions: [
            { q: { es: '¿Qué lugar te gustaría ver antes de que cambie o desaparezca?', en: 'Which place would you like to see before it changes or disappears?' }, help: { es: 'Me gustaría ver… porque…', en: 'I’d like to see… because…' }, follow: [{ es: '¿Cómo irías?', en: 'How would you go?' }, { es: '¿Es una contradicción?', en: 'Is it a contradiction?' }] },
            { q: { es: '¿Las soluciones pequeñas sirven o distraen del problema grande?', en: 'Do small solutions help or distract from the big problem?' }, help: { es: 'Sirven porque… / Distraen porque…', en: 'They help because… / They distract because…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Qué haces tú?', en: 'What do you do?' }] },
            { q: { es: '¿Qué cosa pequeña haces por el medio ambiente?', en: 'What small thing do you do for the environment?' }, help: { es: 'Yo… / La verdad, nada.', en: 'I… / Honestly, nothing.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Crees que sirve?', en: 'Do you think it helps?' }] },
            { q: { es: '¿Es mejor decir la verdad aunque quite la esperanza?', en: 'Is it better to tell the truth even if it takes away hope?' }, help: { es: 'Sí, porque… / Depende de…', en: 'Yes, because… / It depends on…' }, follow: [{ es: '¿Te pasó alguna vez?', en: 'Has it happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
          ],
          words: [{ es: 'cubrir', en: 'to cover' }, { es: 'la manta', en: 'the blanket' }, { es: 'la tirita', en: 'the plaster' }, { es: 'la esperanza', en: 'hope' }, { es: 'el medio ambiente', en: 'the environment' }],
        },
        B1: {
          scene: { es: 'Los glaciares son también las reservas de agua de Europa: alimentan el Ródano, el Rin y muchos ríos que dan agua a millones de personas, a la agricultura y a las centrales eléctricas. Martina presenta un informe en Berna: cuando los glaciares desaparezcan, en verano habrá mucha menos agua. Un diputado le pregunta por qué Suiza, un país pequeño, debería hacer grandes sacrificios si los grandes contaminadores no cambian.', en: 'Glaciers are also Europe’s water reserves: they feed the Rhône, the Rhine and many rivers that supply water to millions of people, farming and power plants. Martina presents a report in Bern: when the glaciers disappear, there will be much less water in summer. A member of parliament asks her why Switzerland, a small country, should make big sacrifices if the big polluters don’t change.' },
          opener: { es: 'Es la pregunta que más escucho, y entiendo por qué. Suiza produce una parte mínima de las emisiones del mundo. Si mañana dejamos de contaminar, los glaciares seguirán derritiéndose. Pero los suizos consumimos mucho, viajamos mucho y nuestros bancos invierten en petróleo en todo el mundo. Y si cada país pequeño dice lo mismo, nadie hace nada. Por otro lado, no puedo pedir a una familia de aquí que pague más si eso no cambia nada. ¿Tiene sentido actuar cuando tu acción sola no resuelve el problema?', en: 'It’s the question I hear most, and I understand why. Switzerland produces a tiny share of the world’s emissions. If we stopped polluting tomorrow, the glaciers would keep melting. But we Swiss consume a lot, travel a lot, and our banks invest in oil all over the world. And if every small country says the same, nobody does anything. On the other hand, I can’t ask a family here to pay more if it changes nothing. Does it make sense to act when your action alone doesn’t solve the problem?' },
          decide: {
            ask: { es: '¿Qué le responde Martina al diputado?', en: 'What does Martina reply to the MP?' },
            options: [
              { say: { es: 'Que Suiza tiene influencia por su dinero y sus bancos, no por su tamaño.', en: 'That Switzerland has influence through its money and banks, not its size.' }, then: { es: 'La idea de controlar las inversiones de los bancos llega a votación. El debate es muy intenso.', en: 'The idea of controlling bank investments goes to a vote. The debate is very intense.' } },
              { say: { es: 'Que hay que prepararse para vivir con menos agua, pase lo que pase.', en: 'That the country must prepare to live with less water, whatever happens.' }, then: { es: 'El parlamento aprueba nuevos embalses. Es práctico, pero algunos dicen que es rendirse.', en: 'Parliament approves new reservoirs. It’s practical, but some say it’s giving up.' } },
              { say: { es: 'Que los países pequeños pueden ser un ejemplo que otros copien.', en: 'That small countries can be an example others copy.' }, then: { es: 'El diputado sonríe con escepticismo, pero dos países vecinos piden información sobre el plan suizo.', en: 'The MP smiles sceptically, but two neighbouring countries ask for information on the Swiss plan.' } },
            ],
          },
          twist: { es: 'Unos jóvenes activistas bloquean la entrada de un banco suizo que invierte en petróleo. Los detienen. Algunos dicen que son héroes; otros, que no respetan la ley. ¿Qué piensas?', en: 'Some young activists block the entrance of a Swiss bank that invests in oil. They are arrested. Some say they’re heroes; others that they don’t respect the law. What do you think?' },
          questions: [
            { q: { es: '¿Tiene sentido actuar aunque tu acción sola no resuelva un problema?', en: 'Does it make sense to act even if your action alone won’t solve a problem?' }, help: { es: 'Sí, porque… / No mucho, porque…', en: 'Yes, because… / Not really, because…' }, follow: [{ es: '¿Un ejemplo de tu vida?', en: 'An example from your life?' }, { es: '¿Lo sigues haciendo?', en: 'Do you keep doing it?' }] },
            { q: { es: '¿Los países ricos deben hacer más por el clima?', en: 'Should rich countries do more for the climate?' }, help: { es: 'Sí, porque… / Todos igual, porque…', en: 'Yes, because… / Everyone equally, because…' }, follow: [{ es: '¿Y tu país?', en: 'And your country?' }, { es: '¿Qué hace?', en: 'What does it do?' }] },
            { q: { es: '¿Te preocupa el agua en el futuro?', en: 'Are you worried about water in the future?' }, help: { es: 'Sí, porque en mi país… / No mucho.', en: 'Yes, because in my country… / Not much.' }, follow: [{ es: '¿Hubo sequías donde vives?', en: 'Have there been droughts where you live?' }, { es: '¿Cómo fue?', en: 'What was it like?' }] },
            { q: { es: '¿Está bien romper la ley para defender una causa justa?', en: 'Is it right to break the law to defend a just cause?' }, help: { es: 'A veces, cuando… / No, porque…', en: 'Sometimes, when… / No, because…' }, follow: [{ es: '¿Un ejemplo de la historia?', en: 'An example from history?' }, { es: '¿Tú lo harías?', en: 'Would you do it?' }] },
          ],
          words: [{ es: 'la reserva', en: 'the reserve' }, { es: 'el diputado', en: 'the member of parliament' }, { es: 'las emisiones', en: 'emissions' }, { es: 'el embalse', en: 'the reservoir' }, { es: 'el escepticismo', en: 'scepticism' }],
        },
      },
    },
    // ------------------------------------------------------------ the mountain hut
    {
      id: 'refugio',
      name: { es: 'El refugio de montaña', en: 'The mountain hut' },
      who: { name: 'Hans', role: { es: 'guarda del refugio', en: 'hut keeper' } },
      levels: {
        A0: {
          scene: { es: 'Es una casa de piedra en lo alto de la montaña. No hay carretera. Dentro hay camas, mesas y una estufa. Hans es el guarda. Tiene barba y un jersey de lana.', en: 'It is a stone house high on the mountain. There is no road. Inside there are beds, tables and a stove. Hans is the keeper. He has a beard and a wool sweater.' },
          opener: { es: '¡Bienvenido! Soy Hans. Estamos a tres mil metros. ¿Estás cansado?', en: 'Welcome! I am Hans. We are at three thousand metres. Are you tired?' },
          decide: {
            ask: { es: '¿Qué dices?', en: 'What do you say?' },
            options: [
              { say: { es: 'Sí, muy cansado.', en: 'Yes, very tired.' }, then: { es: 'Hans te da una sopa caliente. ¡Qué rica!', en: 'Hans gives you a hot soup. Delicious!' } },
              { say: { es: 'No, estoy bien.', en: 'No, I am fine.' }, then: { es: 'Hans dice: «¡Muy bien! Mañana subimos más».', en: 'Hans says: “Very good! Tomorrow we climb higher.”' } },
              { say: { es: 'Tengo frío.', en: 'I am cold.' }, then: { es: 'Hans pone madera en la estufa. Hace calor.', en: 'Hans puts wood in the stove. It gets warm.' } },
            ],
          },
          twist: { es: 'Por la noche hay veinte personas en una habitación. ¡Alguien ronca muy fuerte! ¿Qué haces?', en: 'At night there are twenty people in one room. Someone snores very loudly! What do you do?' },
          questions: [
            { q: { es: '¿Te gusta caminar por la montaña?', en: 'Do you like walking in the mountains?' }, help: { es: 'Sí. / No, me canso.', en: 'Yes. / No, I get tired.' }, follow: [{ es: '¿Con quién vas?', en: 'Who do you go with?' }, { es: '¿Cuántas horas?', en: 'How many hours?' }] },
            { q: { es: '¿Duermes bien con otras personas en la habitación?', en: 'Do you sleep well with other people in the room?' }, help: { es: 'Sí. / No, necesito silencio.', en: 'Yes. / No, I need silence.' }, follow: [{ es: '¿Roncas?', en: 'Do you snore?' }, { es: '¿Usas tapones?', en: 'Do you use earplugs?' }] },
            { q: { es: '¿Te gusta la sopa?', en: 'Do you like soup?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Qué sopa?', en: 'Which soup?' }, { es: '¿Cuándo comes sopa?', en: 'When do you eat soup?' }] },
            { q: { es: '¿Tienes un jersey favorito?', en: 'Do you have a favourite sweater?' }, help: { es: 'Sí, uno… / No.', en: 'Yes, a… one / No.' }, follow: [{ es: '¿De qué color?', en: 'What colour?' }, { es: '¿Es un regalo?', en: 'Is it a gift?' }] },
          ],
          words: [{ es: 'el refugio', en: 'the mountain hut' }, { es: 'la estufa', en: 'the stove' }, { es: 'la madera', en: 'wood' }, { es: 'roncar', en: 'to snore' }, { es: 'la barba', en: 'the beard' }],
        },
        A1: {
          scene: { es: 'El refugio de Hans está a tres mil metros, a cinco horas a pie del último pueblo. Tiene sesenta camas en habitaciones compartidas. La comida llega en helicóptero una vez por semana. No hay ducha caliente y el agua viene de la nieve derretida. Los montañeros cenan a las seis y se acuestan a las nueve: a las cuatro de la mañana empiezan a subir a la cumbre.', en: 'Hans’s hut is at three thousand metres, five hours’ walk from the last village. It has sixty beds in shared rooms. Food arrives by helicopter once a week. There’s no hot shower and the water comes from melted snow. Climbers have dinner at six and go to bed at nine: at four in the morning they start climbing to the summit.' },
          opener: { es: 'Aquí arriba la vida es simple: comer, dormir, mirar el tiempo. No hay internet y el móvil casi no funciona. Algunos turistas llegan nerviosos porque no pueden mirar sus mensajes. Al segundo día están tranquilos y miran las estrellas. Mi trabajo es cocinar, limpiar y, sobre todo, decir a la gente cuándo no debe subir. ¿Podrías vivir aquí un verano entero?', en: 'Up here life is simple: eat, sleep, watch the weather. There’s no internet and phones barely work. Some tourists arrive anxious because they can’t check their messages. By the second day they’re calm and looking at the stars. My job is to cook, clean and, above all, tell people when they shouldn’t climb. Could you live here a whole summer?' },
          decide: {
            ask: { es: 'Mañana va a haber tormenta. Un grupo quiere subir a la cumbre igual. ¿Qué hace Hans?', en: 'Tomorrow there will be a storm. A group wants to climb to the summit anyway. What does Hans do?' },
            options: [
              { say: { es: 'Les dice claramente que no suban.', en: 'He tells them clearly not to climb.' }, then: { es: 'El grupo se queda. A las once empieza la tormenta. Le dan las gracias a Hans.', en: 'The group stays. At eleven the storm starts. They thank Hans.' } },
              { say: { es: 'Les propone salir más temprano, a las dos.', en: 'He suggests leaving earlier, at two.' }, then: { es: 'Suben y bajan antes de la tormenta, muy cansados pero felices.', en: 'They go up and come down before the storm, very tired but happy.' } },
              { say: { es: 'Les propone una ruta más fácil y corta.', en: 'He suggests an easier, shorter route.' }, then: { es: 'No llegan a la cumbre, pero ven un amanecer increíble.', en: 'They don’t reach the summit, but they see an incredible sunrise.' } },
            ],
          },
          twist: { es: 'Llega un montañero sin reserva a las diez de la noche. El refugio está lleno. ¿Qué hace Hans?', en: 'A climber with no booking arrives at ten at night. The hut is full. What does Hans do?' },
          questions: [
            { q: { es: '¿Podrías vivir sin internet un mes?', en: 'Could you live without internet for a month?' }, help: { es: 'Sí, fácil. / Me costaría mucho.', en: 'Yes, easily. / It would be very hard.' }, follow: [{ es: '¿Qué extrañarías?', en: 'What would you miss?' }, { es: '¿Qué harías?', en: 'What would you do?' }] },
            { q: { es: '¿Te levantas temprano para hacer algo especial?', en: 'Do you get up early to do something special?' }, help: { es: 'Sí, para… / No, nunca.', en: 'Yes, to… / No, never.' }, follow: [{ es: '¿A qué hora?', en: 'At what time?' }, { es: '¿Vale la pena?', en: 'Is it worth it?' }] },
            { q: { es: '¿Viste las estrellas lejos de la ciudad?', en: 'Have you seen the stars far from the city?' }, help: { es: 'Sí, en… / No.', en: 'Yes, in… / No.' }, follow: [{ es: '¿Cómo era?', en: 'What was it like?' }, { es: '¿Con quién estabas?', en: 'Who were you with?' }] },
            { q: { es: '¿Escuchas los consejos de los expertos?', en: 'Do you listen to experts’ advice?' }, help: { es: 'Sí, siempre. / Depende.', en: 'Yes, always. / It depends.' }, follow: [{ es: '¿Un consejo que no seguiste?', en: 'A piece of advice you didn’t follow?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
          ],
          words: [{ es: 'compartido', en: 'shared' }, { es: 'el helicóptero', en: 'the helicopter' }, { es: 'el montañero', en: 'the climber' }, { es: 'la cumbre', en: 'the summit' }, { es: 'la tormenta', en: 'the storm' }],
        },
        A2: {
          scene: { es: 'Es medianoche. Hans recibe una llamada: dos montañeros extranjeros están atrapados en la montaña, a una hora del refugio. Uno tiene la pierna herida. Hay niebla y el helicóptero de rescate no puede volar hasta la mañana. Hans conoce bien el camino, pero ir de noche con niebla es peligroso también para él.', en: 'It’s midnight. Hans gets a call: two foreign climbers are stuck on the mountain, an hour from the hut. One has an injured leg. There’s fog and the rescue helicopter can’t fly until morning. Hans knows the path well, but going at night in fog is dangerous for him too.' },
          opener: { es: 'Esta es la parte más difícil de mi trabajo. Si voy, puedo ayudarlos… o puedo tener un accidente y entonces serán tres personas en peligro. Si no voy, pasan la noche a menos diez grados. Les dije por teléfono que se pongan toda la ropa y se abracen para mantener el calor. Tengo a dos jóvenes voluntarios en el refugio que quieren venir conmigo. ¿Qué harías tú?', en: 'This is the hardest part of my job. If I go, I can help them… or I could have an accident and then there’d be three people in danger. If I don’t go, they spend the night at minus ten. I told them on the phone to put on all their clothes and huddle together to keep warm. I have two young volunteers at the hut who want to come with me. What would you do?' },
          decide: {
            ask: { es: '¿Qué decide Hans?', en: 'What does Hans decide?' },
            options: [
              { say: { es: 'Ir con los dos voluntarios, atados con una cuerda.', en: 'Go with the two volunteers, roped together.' }, then: { es: 'Llegan en dos horas. Llevan a los montañeros al refugio. Todos sobreviven.', en: 'They arrive in two hours. They bring the climbers back to the hut. Everyone survives.' } },
              { say: { es: 'Ir solo, sin poner en peligro a los jóvenes.', en: 'Go alone, without putting the young volunteers at risk.' }, then: { es: 'Hans encuentra a los montañeros. Pasa la noche con ellos, en un agujero en la nieve, hasta el helicóptero.', en: 'Hans finds the climbers. He spends the night with them, in a snow hole, until the helicopter comes.' } },
              { say: { es: 'Quedarse y hablar con ellos por teléfono toda la noche.', en: 'Stay and talk to them on the phone all night.' }, then: { es: 'A las seis llega el helicóptero. Están muy fríos, pero vivos. Hans no durmió nada.', en: 'At six the helicopter arrives. They’re very cold, but alive. Hans didn’t sleep at all.' } },
            ],
          },
          twist: { es: 'El rescate en helicóptero cuesta diez mil francos. Los montañeros no tienen seguro. ¿Quién debería pagar?', en: 'The helicopter rescue costs ten thousand francs. The climbers have no insurance. Who should pay?' },
          questions: [
            { q: { es: '¿Arriesgarías tu vida para ayudar a un desconocido?', en: 'Would you risk your life to help a stranger?' }, help: { es: 'Sí, si… / Depende de…', en: 'Yes, if… / It depends on…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Conoces a alguien que lo hizo?', en: 'Do you know someone who did?' }] },
            { q: { es: '¿Tienes seguro cuando viajas?', en: 'Do you have insurance when you travel?' }, help: { es: 'Sí, siempre. / No, nunca.', en: 'Yes, always. / No, never.' }, follow: [{ es: '¿Lo usaste alguna vez?', en: 'Have you ever used it?' }, { es: '¿Para qué?', en: 'What for?' }] },
            { q: { es: '¿Fuiste voluntario alguna vez?', en: 'Have you ever volunteered?' }, help: { es: 'Sí, en… / No, pero me gustaría.', en: 'Yes, at… / No, but I’d like to.' }, follow: [{ es: '¿Qué hacías?', en: 'What did you do?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Quién debe pagar un rescate: el que se arriesga o todos?', en: 'Who should pay for a rescue: the person who took the risk or everyone?' }, help: { es: 'El que se arriesga porque… / Todos porque…', en: 'The risk-taker because… / Everyone because…' }, follow: [{ es: '¿Y si fue un accidente?', en: 'And if it was an accident?' }, { es: '¿Cómo es en tu país?', en: 'How is it in your country?' }] },
          ],
          words: [{ es: 'atrapado', en: 'stuck / trapped' }, { es: 'herido', en: 'injured' }, { es: 'la niebla', en: 'fog' }, { es: 'el voluntario', en: 'the volunteer' }, { es: 'sobrevivir', en: 'to survive' }],
        },
        B1: {
          scene: { es: 'Cada verano el refugio de Hans recibe más gente: muchos turistas sin experiencia que suben porque vieron fotos en internet. Algunos llegan en zapatillas de deporte, sin chaqueta y sin saber leer el tiempo. El número de rescates se duplicó en diez años. Algunos guías proponen un examen o un permiso obligatorio para subir a las cumbres de más de cuatro mil metros.', en: 'Every summer Hans’s hut gets more people: lots of inexperienced tourists who climb because they’ve seen photos online. Some arrive in trainers, without a jacket and unable to read the weather. The number of rescues has doubled in ten years. Some guides propose a test or compulsory permit to climb peaks over four thousand metres.' },
          opener: { es: 'La montaña siempre fue un espacio de libertad: cualquiera podía intentar subir, bajo su propia responsabilidad. Esa libertad es preciosa. Pero cuando alguien sin preparación se mete en problemas, no solo se arriesga él: arriesga a los rescatistas, que tienen familia. Un permiso parece lógico, pero ¿quién lo da?, ¿cuánto cuesta?, ¿solo podrán subir los que pueden pagar un curso? ¿Dónde está el límite entre proteger a la gente y quitarle su libertad de equivocarse?', en: 'The mountain has always been a space of freedom: anyone could try to climb, at their own risk. That freedom is precious. But when someone unprepared gets into trouble, it’s not only them at risk: it’s the rescuers, who have families. A permit seems logical, but who issues it? How much does it cost? Will only those who can pay for a course be able to climb? Where is the line between protecting people and taking away their freedom to make mistakes?' },
          decide: {
            ask: { es: '¿Qué defiende Hans?', en: 'What does Hans argue for?' },
            options: [
              { say: { es: 'Un permiso obligatorio con un curso corto y barato.', en: 'A compulsory permit with a short, cheap course.' }, then: { es: 'Los rescates bajan un tercio. Algunos montañeros veteranos se sienten insultados.', en: 'Rescues fall by a third. Some veteran climbers feel insulted.' } },
              { say: { es: 'Libertad total, pero el que se arriesga paga su rescate.', en: 'Total freedom, but whoever takes the risk pays for their rescue.' }, then: { es: 'Algunos dejan de llamar al rescate por miedo al precio, y eso es aún más peligroso.', en: 'Some stop calling for rescue out of fear of the cost, and that’s even more dangerous.' } },
              { say: { es: 'Más información en los pueblos y en internet, sin obligación.', en: 'More information in the villages and online, with no obligation.' }, then: { es: 'Las redes sociales del refugio tienen mucho éxito. Los rescates bajan un poco.', en: 'The hut’s social media is very successful. Rescues fall a little.' } },
            ],
          },
          twist: { es: 'Un influencer sube sin experiencia, graba todo y su video tiene millones de visitas. Muchos jóvenes quieren copiarlo. ¿Deberían las redes sociales prohibir este tipo de videos?', en: 'An influencer climbs with no experience, films everything and the video gets millions of views. Lots of young people want to copy him. Should social media ban this kind of video?' },
          questions: [
            { q: { es: '¿Debería existir un permiso para actividades peligrosas?', en: 'Should there be a permit for dangerous activities?' }, help: { es: 'Sí, para… / No, porque…', en: 'Yes, for… / No, because…' }, follow: [{ es: '¿Qué actividades?', en: 'Which activities?' }, { es: '¿Quién lo daría?', en: 'Who would issue it?' }] },
            { q: { es: '¿Tenemos derecho a equivocarnos aunque sea peligroso?', en: 'Do we have the right to make mistakes even if it’s dangerous?' }, help: { es: 'Sí, porque… / No cuando…', en: 'Yes, because… / Not when…' }, follow: [{ es: '¿Un error que te enseñó mucho?', en: 'A mistake that taught you a lot?' }, { es: '¿Lo repetirías?', en: 'Would you repeat it?' }] },
            { q: { es: '¿Las redes sociales nos empujan a hacer cosas arriesgadas?', en: 'Does social media push us to do risky things?' }, help: { es: 'Sí, porque… / No, cada uno…', en: 'Yes, because… / No, everyone…' }, follow: [{ es: '¿Viste un caso?', en: 'Have you seen a case?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿Qué libertad no cambiarías por más seguridad?', en: 'What freedom would you not trade for more safety?' }, help: { es: 'No cambiaría…', en: 'I wouldn’t trade…' }, follow: [{ es: '¿Y cuál sí?', en: 'And which would you?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'las zapatillas de deporte', en: 'trainers' }, { es: 'el permiso', en: 'the permit' }, { es: 'el rescatista', en: 'the rescuer' }, { es: 'la preparación', en: 'preparation / training' }, { es: 'equivocarse', en: 'to make mistakes' }],
        },
      },
    },
    // ------------------------------------------------------------ the Saint Bernard dogs
    {
      id: 'san-bernardo',
      name: { es: 'Los perros del Gran San Bernardo', en: 'The Great St Bernard dogs' },
      who: { name: 'Chantal', role: { es: 'cuidadora de perros', en: 'dog keeper' } },
      levels: {
        A0: {
          scene: { es: 'Es un edificio viejo en la montaña. Hay nieve. Hay perros grandes, blancos y marrones. Chantal cuida los perros. Tiene un abrigo rojo y una correa.', en: 'It is an old building in the mountains. There is snow. There are big white and brown dogs. Chantal looks after the dogs. She has a red coat and a lead.' },
          opener: { es: '¡Hola! Soy Chantal. Este perro se llama Barry. Pesa setenta kilos. ¿Lo tocas?', en: 'Hello! I am Chantal. This dog is called Barry. He weighs seventy kilos. Will you stroke him?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Sí, lo toco.', en: 'Yes, I stroke him.' }, then: { es: 'Barry es suave y tranquilo. Te mira con ojos tristes.', en: 'Barry is soft and calm. He looks at you with sad eyes.' } },
              { say: { es: 'No, tengo miedo.', en: 'No, I am scared.' }, then: { es: 'Chantal dice: «Tranquilo. Es muy bueno».', en: 'Chantal says: “Don’t worry. He is very good.”' } },
              { say: { es: 'Camino con Barry.', en: 'I walk with Barry.' }, then: { es: 'Barry camina despacio por la nieve. ¡Es muy fuerte!', en: 'Barry walks slowly through the snow. He is very strong!' } },
            ],
          },
          twist: { es: 'Barry se sienta en la nieve y no quiere caminar. ¿Qué haces?', en: 'Barry sits down in the snow and doesn’t want to walk. What do you do?' },
          questions: [
            { q: { es: '¿Tienes perro?', en: 'Do you have a dog?' }, help: { es: 'Sí, se llama… / No.', en: 'Yes, he/she is called… / No.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Quién lo pasea?', en: 'Who walks it?' }] },
            { q: { es: '¿Te dan miedo los perros grandes?', en: 'Are you scared of big dogs?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Y los gatos?', en: 'And cats?' }, { es: '¿Qué animal te gusta?', en: 'Which animal do you like?' }] },
            { q: { es: '¿Caminas en la nieve?', en: 'Do you walk in the snow?' }, help: { es: 'Sí, en invierno. / No, no hay nieve.', en: 'Yes, in winter. / No, there is no snow.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Haces muñecos de nieve?', en: 'Do you make snowmen?' }] },
            { q: { es: '¿Te gustan los abrigos rojos?', en: 'Do you like red coats?' }, help: { es: 'Sí. / No, prefiero…', en: 'Yes. / No, I prefer…' }, follow: [{ es: '¿De qué color es tu abrigo?', en: 'What colour is your coat?' }, { es: '¿Es nuevo?', en: 'Is it new?' }] },
          ],
          words: [{ es: 'el perro', en: 'the dog' }, { es: 'la correa', en: 'the lead' }, { es: 'el abrigo', en: 'the coat' }, { es: 'pesar', en: 'to weigh' }, { es: 'suave', en: 'soft' }],
        },
        A1: {
          scene: { es: 'El paso del Gran San Bernardo está a casi dos mil quinientos metros, entre Suiza e Italia. Desde hace casi mil años hay aquí un hospicio donde unos monjes ayudaban a los viajeros perdidos en la nieve. Los famosos perros San Bernardo los acompañaban para encontrar personas. Hoy los perros viven en una fundación y Chantal los cuida.', en: 'The Great St Bernard Pass is at almost two thousand five hundred metres, between Switzerland and Italy. For almost a thousand years there’s been a hospice here where monks helped travellers lost in the snow. The famous St Bernard dogs went with them to find people. Today the dogs live at a foundation and Chantal looks after them.' },
          opener: { es: 'El perro más famoso se llamaba Barry y salvó a más de cuarenta personas a principios del siglo diecinueve. Hoy los rescates se hacen con helicópteros y perros más pequeños y rápidos. Los San Bernardo ya no rescatan: ahora visitan hospitales, residencias de ancianos y escuelas. Los niños los adoran. Y una cosa más: el barril de licor en el cuello es un mito. ¿Te gustan los perros?', en: 'The most famous dog was called Barry and he saved more than forty people at the start of the nineteenth century. Today rescues are done with helicopters and smaller, faster dogs. St Bernards don’t rescue any more: now they visit hospitals, care homes and schools. Children adore them. And one more thing: the brandy barrel round the neck is a myth. Do you like dogs?' },
          decide: {
            ask: { es: 'Chantal lleva a Barry a una residencia de ancianos. ¿Qué pasa?', en: 'Chantal takes Barry to a care home. What happens?' },
            options: [
              { say: { es: 'Una señora que no habla nunca empieza a hablar con Barry.', en: 'A lady who never speaks starts talking to Barry.' }, then: { es: 'Las enfermeras no lo pueden creer. La señora le cuenta a Barry historias de su infancia.', en: 'The nurses can’t believe it. The lady tells Barry stories from her childhood.' } },
              { say: { es: 'Un señor quiere llevarse a Barry a su habitación.', en: 'A man wants to take Barry to his room.' }, then: { es: 'Chantal dice que no, pero promete volver la semana que viene.', en: 'Chantal says no, but promises to come back next week.' } },
              { say: { es: 'Barry se duerme en el salón.', en: 'Barry falls asleep in the lounge.' }, then: { es: 'Todos los ancianos se ríen. Barry ronca como un tren.', en: 'All the residents laugh. Barry snores like a train.' } },
            ],
          },
          twist: { es: 'Un turista quiere comprar un cachorro de San Bernardo. Vive en un piso pequeño en la ciudad. ¿Qué le dice Chantal?', en: 'A tourist wants to buy a St Bernard puppy. He lives in a small flat in the city. What does Chantal tell him?' },
          questions: [
            { q: { es: '¿Los animales ayudan a las personas?', en: 'Do animals help people?' }, help: { es: 'Sí, por ejemplo… / No mucho.', en: 'Yes, for example… / Not much.' }, follow: [{ es: '¿Un animal te ayudó a ti?', en: 'Has an animal helped you?' }, { es: '¿Cómo?', en: 'How?' }] },
            { q: { es: '¿Visitas a personas mayores?', en: 'Do you visit older people?' }, help: { es: 'Sí, a mis abuelos. / No mucho.', en: 'Yes, my grandparents. / Not much.' }, follow: [{ es: '¿Qué hacen juntos?', en: 'What do you do together?' }, { es: '¿Cada cuánto?', en: 'How often?' }] },
            { q: { es: '¿Qué mito de tu país es falso?', en: 'Which myth about your country is false?' }, help: { es: 'La gente piensa que… pero no es verdad.', en: 'People think… but it isn’t true.' }, follow: [{ es: '¿Te molesta?', en: 'Does it bother you?' }, { es: '¿Lo explicas?', en: 'Do you explain it?' }] },
            { q: { es: '¿Qué animal es bueno para vivir en un piso?', en: 'Which animal is good for living in a flat?' }, help: { es: 'Un gato / un perro pequeño / un pez…', en: 'A cat / a small dog / a fish…' }, follow: [{ es: '¿Tienes uno?', en: 'Do you have one?' }, { es: '¿Te gustaría?', en: 'Would you like one?' }] },
          ],
          words: [{ es: 'el paso', en: 'the (mountain) pass' }, { es: 'el hospicio', en: 'the hospice' }, { es: 'la residencia de ancianos', en: 'the care home' }, { es: 'el mito', en: 'the myth' }, { es: 'el cachorro', en: 'the puppy' }],
        },
        A2: {
          scene: { es: 'Los San Bernardo modernos tienen problemas de salud: por la cría para que sean cada vez más grandes y con más pelo, muchos sufren de las caderas y del corazón, y viven solo ocho años. La fundación debe decidir si los cruza con otra raza para hacerlos más sanos y un poco más pequeños. Los criadores tradicionales están en contra: dicen que así desaparece la raza.', en: 'Modern St Bernards have health problems: from being bred to be bigger and furrier, many suffer from hip and heart problems, and live only eight years. The foundation must decide whether to cross them with another breed to make them healthier and a little smaller. Traditional breeders are against it: they say the breed would disappear.' },
          opener: { es: 'Me duele ver a perros de seis años que casi no pueden caminar. Los primeros San Bernardo del hospicio eran más pequeños, más ligeros, más fuertes: tenían que caminar por la nieve horas. Los hicimos enormes porque a la gente le gustaba la imagen de un perro gigante. Si los cruzamos, serán más sanos, pero ya no se parecerán a Barry. ¿Qué es más importante: la salud del animal o la tradición?', en: 'It hurts to see six-year-old dogs that can barely walk. The first St Bernards at the hospice were smaller, lighter, stronger: they had to walk through snow for hours. We made them huge because people liked the image of a giant dog. If we cross them, they’ll be healthier, but they won’t look like Barry any more. What matters more: the animal’s health or tradition?' },
          decide: {
            ask: { es: '¿Qué decide la fundación?', en: 'What does the foundation decide?' },
            options: [
              { say: { es: 'Cruzarlos para que sean más sanos.', en: 'Cross them so they’re healthier.' }, then: { es: 'Los cachorros nuevos son más ágiles. Algunos turistas dicen: «¡Ese no es un San Bernardo!».', en: 'The new puppies are more agile. Some tourists say: “That’s not a St Bernard!”' } },
              { say: { es: 'Elegir solo a los perros más sanos para tener cachorros.', en: 'Breed only from the healthiest dogs.' }, then: { es: 'Es lento: tardará veinte años en notarse. Pero la raza se mantiene.', en: 'It’s slow: it’ll take twenty years to show. But the breed is preserved.' } },
              { say: { es: 'Volver al tamaño de los perros antiguos.', en: 'Go back to the size of the old dogs.' }, then: { es: 'Los perros nuevos se parecen a los cuadros antiguos del hospicio. Los historiadores están encantados.', en: 'The new dogs look like the old paintings at the hospice. Historians are delighted.' } },
            ],
          },
          twist: { es: 'Un video en internet muestra un San Bernardo con un barril en el cuello para turistas en otro país. Es falso y el perro tiene calor. ¿Qué debería hacer la fundación?', en: 'An online video shows a St Bernard with a barrel round its neck for tourists in another country. It’s fake and the dog is too hot. What should the foundation do?' },
          questions: [
            { q: { es: '¿Está bien cambiar a los animales para que sean más bonitos?', en: 'Is it OK to change animals so they’re prettier?' }, help: { es: 'No, porque… / Depende de…', en: 'No, because… / It depends on…' }, follow: [{ es: '¿Conoces una raza con problemas?', en: 'Do you know a breed with problems?' }, { es: '¿Cuál?', en: 'Which one?' }] },
            { q: { es: '¿Prefieres perros de raza o mestizos?', en: 'Do you prefer pedigree or mixed-breed dogs?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Adoptarías uno?', en: 'Would you adopt one?' }, { es: '¿De dónde?', en: 'From where?' }] },
            { q: { es: '¿Hay una tradición que hace daño y se mantiene en tu país?', en: 'Is there a harmful tradition that continues in your country?' }, help: { es: 'Sí, por ejemplo… / No que sepa.', en: 'Yes, for example… / Not that I know.' }, follow: [{ es: '¿Qué opinas?', en: 'What do you think?' }, { es: '¿Debería cambiar?', en: 'Should it change?' }] },
            { q: { es: '¿Los animales de los turistas viven bien?', en: 'Do animals used for tourists live well?' }, help: { es: 'Creo que no, porque… / Algunos sí…', en: 'I don’t think so, because… / Some do…' }, follow: [{ es: '¿Montaste en un animal en vacaciones?', en: 'Have you ridden an animal on holiday?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
          ],
          words: [{ es: 'la cría', en: 'breeding' }, { es: 'la cadera', en: 'the hip' }, { es: 'cruzar', en: 'to cross (breeds)' }, { es: 'la raza', en: 'the breed' }, { es: 'el criador', en: 'the breeder' }],
        },
        B1: {
          scene: { es: 'El hospicio del Gran San Bernardo siguió acogiendo a viajeros durante mil años, sin preguntar quiénes eran. Hoy por este paso cruzan algunos migrantes que intentan llegar a Europa del norte a pie, a veces en invierno, sin ropa adecuada. Los monjes los ayudan como siempre. La policía pide a la fundación que informe cuando lleguen. Chantal, que trabaja con los monjes, no sabe qué pensar.', en: 'The Great St Bernard hospice took in travellers for a thousand years, without asking who they were. Today some migrants cross this pass trying to reach northern Europe on foot, sometimes in winter, without proper clothing. The monks help them as they always have. The police ask the foundation to report when they arrive. Chantal, who works with the monks, doesn’t know what to think.' },
          opener: { es: 'Los monjes dicen que la hospitalidad no tiene condiciones: el que llega con frío recibe sopa y una cama, sea quien sea. Es lo que hicieron con comerciantes, peregrinos, soldados y contrabandistas durante siglos. Pero también entiendo a la policía: el Estado tiene leyes y necesita saber quién entra. Y algunos vecinos tienen miedo. Yo solo sé que cuando un chico de diecisiete años llega con los pies helados, no le pido los papeles. ¿Está la ayuda humanitaria por encima de la ley?', en: 'The monks say hospitality has no conditions: whoever arrives cold gets soup and a bed, whoever they are. It’s what they did for merchants, pilgrims, soldiers and smugglers for centuries. But I also understand the police: the state has laws and needs to know who comes in. And some locals are afraid. All I know is that when a seventeen-year-old arrives with frozen feet, I don’t ask for his papers. Is humanitarian help above the law?' },
          decide: {
            ask: { es: '¿Qué debería hacer el hospicio?', en: 'What should the hospice do?' },
            options: [
              { say: { es: 'Ayudar primero y avisar a la policía después, con condiciones.', en: 'Help first and notify the police afterwards, with conditions.' }, then: { es: 'La policía acepta no entrar en el hospicio. Es un equilibrio frágil, pero funciona.', en: 'The police agree not to enter the hospice. It’s a fragile balance, but it works.' } },
              { say: { es: 'Seguir la tradición y no informar a nadie.', en: 'Follow tradition and inform no one.' }, then: { es: 'Hay un juicio contra la fundación. Muchos ciudadanos la apoyan; otros la critican duramente.', en: 'The foundation is taken to court. Many citizens support it; others criticise it harshly.' } },
              { say: { es: 'Colaborar con organizaciones humanitarias para un centro oficial.', en: 'Work with humanitarian organisations on an official centre.' }, then: { es: 'Se abre un centro en el valle. Los monjes siguen dando sopa, pero ya no están solos.', en: 'A centre opens in the valley. The monks keep serving soup, but they’re no longer alone.' } },
            ],
          },
          twist: { es: 'Un vecino del valle dice: «Mi abuelo cruzó este paso para trabajar en Francia y nadie le dio sopa. ¿Por qué ellos sí?». ¿Qué le responderías?', en: 'A valley resident says: “My grandfather crossed this pass to work in France and nobody gave him soup. Why do they get it?” What would you answer?' },
          questions: [
            { q: { es: '¿Ayudarías a alguien aunque fuera ilegal?', en: 'Would you help someone even if it were illegal?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Dónde está tu límite?', en: 'Where is your limit?' }, { es: '¿Conoces un caso real?', en: 'Do you know a real case?' }] },
            { q: { es: '¿La hospitalidad debe tener condiciones?', en: 'Should hospitality have conditions?' }, help: { es: 'Sí, por ejemplo… / No, nunca.', en: 'Yes, for example… / No, never.' }, follow: [{ es: '¿Cómo es la hospitalidad en tu cultura?', en: 'What is hospitality like in your culture?' }, { es: '¿Cambió con los años?', en: 'Has it changed over the years?' }] },
            { q: { es: '¿Alguien de tu familia migró en condiciones difíciles?', en: 'Did someone in your family migrate in difficult conditions?' }, help: { es: 'Sí, mi… / No que yo sepa.', en: 'Yes, my… / Not that I know of.' }, follow: [{ es: '¿Quién los ayudó?', en: 'Who helped them?' }, { es: '¿Cuentan esa historia?', en: 'Do they tell that story?' }] },
            { q: { es: '¿Las tradiciones religiosas deberían estar por encima de las leyes del Estado?', en: 'Should religious traditions be above state laws?' }, help: { es: 'No, porque… / En algunos casos, cuando…', en: 'No, because… / In some cases, when…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Quién decide?', en: 'Who decides?' }] },
          ],
          words: [{ es: 'acoger', en: 'to take in' }, { es: 'la hospitalidad', en: 'hospitality' }, { es: 'el peregrino', en: 'the pilgrim' }, { es: 'el contrabandista', en: 'the smuggler' }, { es: 'humanitario', en: 'humanitarian' }],
        },
      },
    },
    // ------------------------------------------------------------ the alpine pasture
    {
      id: 'alpage',
      name: { es: 'El pasto de verano', en: 'The summer pasture' },
      who: { name: 'Ueli', role: { es: 'pastor de vacas', en: 'cowherd' } },
      levels: {
        A0: {
          scene: { es: 'Es un prado verde en la montaña. Hay muchas vacas con campanas grandes. Ueli es pastor. Tiene un chaleco negro, una camisa blanca y un sombrero.', en: 'It is a green meadow in the mountains. There are lots of cows with big bells. Ueli is a cowherd. He has a black waistcoat, a white shirt and a hat.' },
          opener: { es: '¡Hola! Soy Ueli. Tengo cuarenta vacas. ¿Escuchas las campanas?', en: 'Hello! I am Ueli. I have forty cows. Can you hear the bells?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Cuento las vacas.', en: 'I count the cows.' }, then: { es: 'Uno, dos, tres… ¡treinta y nueve! Falta una.', en: 'One, two, three… thirty-nine! One is missing.' } },
              { say: { es: 'Bebo leche fresca.', en: 'I drink fresh milk.' }, then: { es: 'Ueli te da un vaso. La leche está caliente y muy rica.', en: 'Ueli gives you a glass. The milk is warm and very tasty.' } },
              { say: { es: 'Toco una campana.', en: 'I ring a bell.' }, then: { es: '¡Dong, dong! Todas las vacas te miran.', en: 'Dong, dong! All the cows look at you.' } },
            ],
          },
          twist: { es: 'Una vaca no está. Ueli dice: «Se llama Blume». ¿La buscas con él?', en: 'A cow is missing. Ueli says: “Her name is Blume.” Do you look for her with him?' },
          questions: [
            { q: { es: '¿Te gustan las vacas?', en: 'Do you like cows?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Hay vacas en tu país?', en: 'Are there cows in your country?' }, { es: '¿Viste una de cerca?', en: 'Have you seen one up close?' }] },
            { q: { es: '¿Bebes leche?', en: 'Do you drink milk?' }, help: { es: 'Sí, todos los días. / No.', en: 'Yes, every day. / No.' }, follow: [{ es: '¿Con café?', en: 'With coffee?' }, { es: '¿Fría o caliente?', en: 'Cold or warm?' }] },
            { q: { es: '¿Te gusta el campo?', en: 'Do you like the countryside?' }, help: { es: 'Sí. / No, prefiero la ciudad.', en: 'Yes. / No, I prefer the city.' }, follow: [{ es: '¿Vas al campo?', en: 'Do you go to the countryside?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Sabes contar hasta cuarenta en español?', en: 'Can you count to forty in Spanish?' }, help: { es: 'Sí: uno, dos… / Un poco.', en: 'Yes: one, two… / A little.' }, follow: [{ es: '¿Y en tu idioma?', en: 'And in your language?' }, { es: '¿Rápido?', en: 'Quickly?' }] },
          ],
          words: [{ es: 'la vaca', en: 'the cow' }, { es: 'la campana', en: 'the bell' }, { es: 'el pastor', en: 'the herder' }, { es: 'el prado', en: 'the meadow' }, { es: 'el chaleco', en: 'the waistcoat' }],
        },
        A1: {
          scene: { es: 'Cada junio, Ueli sube con sus vacas a los pastos de montaña, a dos mil metros. Pasan todo el verano allí, comiendo hierba fresca y flores. Ueli vive en una cabaña de madera sin electricidad, ordeña las vacas dos veces al día y hace queso. En septiembre bajan al pueblo con flores en la cabeza: es la gran fiesta de la bajada.', en: 'Every June, Ueli goes up with his cows to the mountain pastures, at two thousand metres. They spend the whole summer there, eating fresh grass and flowers. Ueli lives in a wooden cabin with no electricity, milks the cows twice a day and makes cheese. In September they come down to the village with flowers on their heads: it’s the big coming-down festival.' },
          opener: { es: 'Me levanto a las cinco para ordeñar. Después hago el queso, limpio, reparo las vallas y busco a las vacas que se escapan. A las nueve de la noche estoy muerto de cansancio. Pero no cambio esto por nada: el silencio, las estrellas, el olor de la hierba. Cada vaca tiene su nombre y su carácter: Blume es curiosa, Stella es la jefa. ¿Te gustaría pasar un verano así?', en: 'I get up at five to milk. Then I make the cheese, clean, fix the fences and look for the cows that wander off. By nine at night I’m dead tired. But I wouldn’t swap this for anything: the silence, the stars, the smell of the grass. Every cow has her name and her personality: Blume is curious, Stella is the boss. Would you like to spend a summer like this?' },
          decide: {
            ask: { es: 'Es el día de la bajada. ¿Cómo decoras a Stella, la jefa?', en: 'It’s coming-down day. How do you decorate Stella, the boss?' },
            options: [
              { say: { es: 'Con una corona de flores enorme.', en: 'With a huge crown of flowers.' }, then: { es: 'Stella camina orgullosa delante de todas. La gente del pueblo aplaude.', en: 'Stella walks proudly at the front. The villagers clap.' } },
              { say: { es: 'Con la campana más grande.', en: 'With the biggest bell.' }, then: { es: 'La campana suena tan fuerte que se oye desde el otro valle.', en: 'The bell rings so loudly you can hear it from the next valley.' } },
              { say: { es: 'Con una bandera suiza pequeña.', en: 'With a small Swiss flag.' }, then: { es: 'Los turistas sacan mil fotos. Stella es la estrella del día.', en: 'The tourists take a thousand photos. Stella is the star of the day.' } },
            ],
          },
          twist: { es: 'Unos excursionistas pasan por el prado con un perro sin correa. Las vacas se ponen nerviosas. ¿Qué hace Ueli?', en: 'Some hikers cross the meadow with a dog off the lead. The cows get nervous. What does Ueli do?' },
          questions: [
            { q: { es: '¿Podrías vivir sin electricidad un verano?', en: 'Could you live without electricity for a summer?' }, help: { es: 'Sí. / No, necesito…', en: 'Yes. / No, I need…' }, follow: [{ es: '¿Qué extrañarías?', en: 'What would you miss?' }, { es: '¿Qué harías por la noche?', en: 'What would you do at night?' }] },
            { q: { es: '¿Hay fiestas con animales en tu país?', en: 'Are there festivals with animals in your country?' }, help: { es: 'Sí, por ejemplo… / No.', en: 'Yes, for example… / No.' }, follow: [{ es: '¿Fuiste alguna vez?', en: 'Have you ever been?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿A qué hora te levantas?', en: 'What time do you get up?' }, help: { es: 'Me levanto a las…', en: 'I get up at…' }, follow: [{ es: '¿Es temprano para ti?', en: 'Is that early for you?' }, { es: '¿Y los domingos?', en: 'And on Sundays?' }] },
            { q: { es: '¿Los animales tienen carácter?', en: 'Do animals have personalities?' }, help: { es: 'Sí, por ejemplo mi… / No sé.', en: 'Yes, for example my… / I don’t know.' }, follow: [{ es: '¿Un animal que conociste?', en: 'An animal you’ve known?' }, { es: '¿Cómo era?', en: 'What was it like?' }] },
          ],
          words: [{ es: 'el pasto', en: 'the pasture' }, { es: 'ordeñar', en: 'to milk' }, { es: 'la cabaña', en: 'the cabin' }, { es: 'la valla', en: 'the fence' }, { es: 'la bajada', en: 'the coming down' }],
        },
        A2: {
          scene: { es: 'Este verano un lobo mató a tres ovejas de un pastor vecino, y esta mañana Ueli encontró huellas cerca de sus vacas. Los lobos volvieron a Suiza hace unos veinte años, después de un siglo sin ellos. Están protegidos, pero los pastores pueden pedir permiso para cazar a uno si ataca muchas veces. Ueli tiene que decidir qué hacer.', en: 'This summer a wolf killed three sheep belonging to a neighbouring herder, and this morning Ueli found tracks near his cows. Wolves came back to Switzerland about twenty years ago, after a century without them. They’re protected, but herders can ask for permission to shoot one if it attacks many times. Ueli has to decide what to do.' },
          opener: { es: 'No odio al lobo. Es un animal precioso y estaba aquí antes que nosotros. Pero mis vacas son mi vida y mi trabajo. Si el lobo ataca a un ternero, pierdo dinero y, sobre todo, pierdo la tranquilidad: las vacas nerviosas dan menos leche. Mi vecino quiere cazarlo ya. Los ecologistas dicen que pongamos perros guardianes y vallas eléctricas, pero eso cuesta mucho y es mucho trabajo. ¿Tú qué harías?', en: 'I don’t hate the wolf. It’s a beautiful animal and it was here before us. But my cows are my life and my work. If the wolf attacks a calf, I lose money and, above all, I lose peace of mind: nervous cows give less milk. My neighbour wants to shoot it now. The conservationists say we should get guard dogs and electric fences, but that costs a lot and it’s a lot of work. What would you do?' },
          decide: {
            ask: { es: '¿Qué decide Ueli?', en: 'What does Ueli decide?' },
            options: [
              { say: { es: 'Comprar dos perros guardianes.', en: 'Buy two guard dogs.' }, then: { es: 'Los perros protegen a las vacas, pero un día asustan a unos excursionistas. Hay quejas.', en: 'The dogs protect the cows, but one day they frighten some hikers. There are complaints.' } },
              { say: { es: 'Poner vallas eléctricas por la noche.', en: 'Put up electric fences at night.' }, then: { es: 'Es mucho trabajo cada tarde, pero el lobo no vuelve a acercarse.', en: 'It’s a lot of work every evening, but the wolf doesn’t come near again.' } },
              { say: { es: 'Pedir permiso para cazar al lobo.', en: 'Ask for permission to shoot the wolf.' }, then: { es: 'El cantón dice que no: solo atacó a ovejas. Ueli está enfadado, pero espera.', en: 'The canton says no: it only attacked sheep. Ueli is angry, but he waits.' } },
            ],
          },
          twist: { es: 'Un grupo de la ciudad hace una campaña para proteger al lobo y llama «asesinos» a los pastores. Ueli se siente insultado. ¿Tiene derecho la gente de la ciudad a opinar sobre la vida en el campo?', en: 'A city group campaigns to protect the wolf and calls herders “murderers”. Ueli feels insulted. Do city people have the right to give opinions on country life?' },
          questions: [
            { q: { es: '¿Los animales salvajes deben volver a donde vivían antes?', en: 'Should wild animals return to where they used to live?' }, help: { es: 'Sí, porque… / Depende de…', en: 'Yes, because… / It depends on…' }, follow: [{ es: '¿Hay un caso así en tu país?', en: 'Is there a case like this in your country?' }, { es: '¿Qué opinan los vecinos?', en: 'What do the locals think?' }] },
            { q: { es: '¿Tienes miedo de algún animal salvaje?', en: 'Are you afraid of any wild animal?' }, help: { es: 'Sí, de… / No.', en: 'Yes, of… / No.' }, follow: [{ es: '¿Lo viste alguna vez?', en: 'Have you ever seen one?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿La gente de la ciudad entiende la vida del campo?', en: 'Do city people understand country life?' }, help: { es: 'No mucho, porque… / Sí, cada vez más…', en: 'Not much, because… / Yes, more and more…' }, follow: [{ es: '¿Y al revés?', en: 'And the other way round?' }, { es: '¿Tú de dónde eres?', en: 'Where are you from?' }] },
            { q: { es: '¿Quién debería pagar los daños que causa un animal protegido?', en: 'Who should pay for the damage caused by a protected animal?' }, help: { es: 'El Estado, porque… / Nadie, porque…', en: 'The state, because… / Nobody, because…' }, follow: [{ es: '¿Es justo para el pastor?', en: 'Is it fair to the herder?' }, { es: '¿Y para el animal?', en: 'And to the animal?' }] },
          ],
          words: [{ es: 'el lobo', en: 'the wolf' }, { es: 'la huella', en: 'the track / footprint' }, { es: 'el ternero', en: 'the calf' }, { es: 'el ecologista', en: 'the conservationist' }, { es: 'la valla eléctrica', en: 'the electric fence' }],
        },
        B1: {
          scene: { es: 'Ueli tiene cincuenta y ocho años y es el último pastor de su familia. Su hijo es informático en Basilea y su hija estudia medicina. Cada año hay menos pastores en los Alpes, y las cabañas se quedan vacías. Un grupo de jóvenes urbanos, sin experiencia, le escribe: quieren pasar el verano con él para aprender el oficio. Pero Ueli duda: el trabajo es duro y peligroso, y ellos lo ven como una aventura.', en: 'Ueli is fifty-eight and the last herder in his family. His son is an IT specialist in Basel and his daughter is studying medicine. Every year there are fewer herders in the Alps, and the cabins are left empty. A group of young city people with no experience writes to him: they want to spend the summer with him to learn the trade. But Ueli has doubts: the work is hard and dangerous, and they see it as an adventure.' },
          opener: { es: 'Mis hijos eligieron otra vida, y está bien: nunca les exigí que fueran pastores. Pero cuando me jubile, ¿quién va a subir con las vacas? Estos jóvenes de la ciudad tienen ganas, pero no saben ni ordeñar. Algunos vienen un verano, publican fotos bonitas y no vuelven. Otros, en cambio, se quedan y son mejores que los hijos de pastores. No sé cómo distinguirlos. ¿Se puede aprender una forma de vida o hay que nacer en ella?', en: 'My children chose a different life, and that’s fine: I never asked them to be herders. But when I retire, who’s going to go up with the cows? These young city people are keen, but they can’t even milk. Some come for one summer, post pretty photos and never come back. Others, on the other hand, stay and turn out better than herders’ children. I don’t know how to tell them apart. Can you learn a way of life, or do you have to be born into it?' },
          decide: {
            ask: { es: '¿Qué hace Ueli con los jóvenes?', en: 'What does Ueli do with the young people?' },
            options: [
              { say: { es: 'Acepta a dos, con un mes de prueba muy duro.', en: 'He takes on two, with a very tough trial month.' }, then: { es: 'Uno se va a la semana. La otra, una diseñadora de Ginebra, se queda tres veranos y después tiene su propio pasto.', en: 'One leaves after a week. The other, a designer from Geneva, stays three summers and then gets her own pasture.' } },
              { say: { es: 'Los rechaza y busca un pastor profesional.', en: 'He turns them down and looks for a professional herder.' }, then: { es: 'Encuentra a un pastor polaco con mucha experiencia. Funciona bien, pero Ueli se pregunta qué pasará con la tradición local.', en: 'He finds a very experienced Polish herder. It works well, but Ueli wonders what will happen to the local tradition.' } },
              { say: { es: 'Crea un curso de verano con otros pastores.', en: 'He sets up a summer course with other herders.' }, then: { es: 'Veinte jóvenes hacen el curso. Seis siguen trabajando en los Alpes al año siguiente.', en: 'Twenty young people take the course. Six are still working in the Alps the following year.' } },
            ],
          },
          twist: { es: 'El hijo de Ueli le propone poner cámaras y sensores en las vacas para controlarlas desde el móvil y necesitar menos personas. Ueli dice que eso no es ser pastor. ¿Quién tiene razón?', en: 'Ueli’s son suggests fitting the cows with cameras and sensors to monitor them by phone and need fewer people. Ueli says that’s not being a herder. Who is right?' },
          questions: [
            { q: { es: '¿Se puede aprender una forma de vida o hay que nacer en ella?', en: 'Can you learn a way of life or do you have to be born into it?' }, help: { es: 'Se puede aprender si… / Hay cosas que…', en: 'You can learn it if… / Some things…' }, follow: [{ es: '¿Tú cambiaste de forma de vida?', en: 'Have you changed your way of life?' }, { es: '¿Fue difícil?', en: 'Was it hard?' }] },
            { q: { es: '¿Los hijos deben continuar la profesión de los padres?', en: 'Should children continue their parents’ profession?' }, help: { es: 'No, porque… / A veces, cuando…', en: 'No, because… / Sometimes, when…' }, follow: [{ es: '¿Tú lo hiciste?', en: 'Did you?' }, { es: '¿Qué esperaban tus padres?', en: 'What did your parents expect?' }] },
            { q: { es: '¿La tecnología puede cambiar un oficio tradicional sin destruirlo?', en: 'Can technology change a traditional trade without destroying it?' }, help: { es: 'Sí, por ejemplo… / No, porque…', en: 'Yes, for example… / No, because…' }, follow: [{ es: '¿Un oficio que cambió mucho?', en: 'A trade that has changed a lot?' }, { es: '¿Para bien o para mal?', en: 'For better or worse?' }] },
            { q: { es: '¿Qué oficio te gustaría aprender aunque no sea útil hoy?', en: 'What trade would you like to learn even if it isn’t useful today?' }, help: { es: 'Me gustaría aprender a…', en: 'I’d like to learn to…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Dónde lo aprenderías?', en: 'Where would you learn it?' }] },
          ],
          words: [{ es: 'el informático', en: 'the IT specialist' }, { es: 'jubilarse', en: 'to retire' }, { es: 'distinguir', en: 'to tell apart' }, { es: 'el sensor', en: 'the sensor' }, { es: 'el oficio', en: 'the trade' }],
        },
      },
    },
  ],
};
