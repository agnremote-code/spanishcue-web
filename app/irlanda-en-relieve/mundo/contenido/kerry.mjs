// Kerry · the Ring of Kerry road, the Skellig Michael boat trip, a jaunting car in
// Killarney, surfing at Inch beach and the harbour town of Dingle. Five places, four
// levels each (A0, A1, A2, B1). Every level is written on its own.
export default {
  id: 'kerry',
  spots: [
    // ------------------------------------------------------------ the Ring of Kerry
    {
      id: 'anillo',
      name: { es: 'La carretera del Anillo de Kerry', en: 'The Ring of Kerry road' },
      who: { name: 'Tadhg', role: { es: 'conductor de autobús', en: 'bus driver' } },
      levels: {
        A0: {
          scene: { es: 'Es una carretera estrecha. A un lado hay montañas y al otro lado está el mar. Tadhg conduce un autobús verde. Hay veinte turistas.', en: 'It is a narrow road. On one side there are mountains and on the other side is the sea. Tadhg drives a green bus. There are twenty tourists.' },
          opener: { es: '¡Buenos días! Soy Tadhg. Hoy damos la vuelta al Anillo de Kerry. Son ciento ochenta kilómetros. ¿Estás listo?', en: 'Good morning! I am Tadhg. Today we go around the Ring of Kerry. It is a hundred and eighty kilometres. Are you ready?' },
          decide: {
            ask: { es: '¿Dónde te sientas?', en: 'Where do you sit?' },
            options: [
              { say: { es: 'Adelante, cerca de Tadhg.', en: 'At the front, near Tadhg.' }, then: { es: 'Tadhg te cuenta historias todo el viaje.', en: 'Tadhg tells you stories the whole trip.' } },
              { say: { es: 'En la ventana, al lado del mar.', en: 'By the window, on the sea side.' }, then: { es: 'Ves playas, islas y un arcoíris.', en: 'You see beaches, islands and a rainbow.' } },
              { say: { es: 'Atrás, para dormir.', en: 'At the back, to sleep.' }, then: { es: 'Duermes una hora. ¡Te pierdes las vistas!', en: 'You sleep for an hour. You miss the views!' } },
            ],
          },
          twist: { es: 'Hay ovejas en la carretera. El autobús para. Las ovejas no se mueven. ¿Qué haces?', en: 'There are sheep on the road. The bus stops. The sheep don’t move. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta viajar en autobús?', en: 'Do you like travelling by bus?' }, help: { es: 'Sí, mucho. / No, prefiero el coche.', en: 'Yes, a lot. / No, I prefer the car.' }, follow: [{ es: '¿Adónde vas en autobús?', en: 'Where do you go by bus?' }, { es: '¿Cuánto tiempo?', en: 'How long?' }] },
            { q: { es: '¿Dónde te sientas en el autobús?', en: 'Where do you sit on the bus?' }, help: { es: 'Adelante. / En la ventana. / Atrás.', en: 'At the front. / By the window. / At the back.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Duermes en el autobús?', en: 'Do you sleep on the bus?' }] },
            { q: { es: '¿Viste un arcoíris?', en: 'Have you seen a rainbow?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Con quién estabas?', en: 'Who were you with?' }, { es: '¿Sacaste una foto?', en: 'Did you take a photo?' }] },
            { q: { es: '¿Tienes coche?', en: 'Do you have a car?' }, help: { es: 'Sí, tengo. / No, no tengo.', en: 'Yes, I do. / No, I don’t.' }, follow: [{ es: '¿De qué color es?', en: 'What colour is it?' }, { es: '¿Te gusta conducir?', en: 'Do you like driving?' }] },
          ],
          words: [{ es: 'la carretera', en: 'the road' }, { es: 'estrecho', en: 'narrow' }, { es: 'conducir', en: 'to drive' }, { es: 'el arcoíris', en: 'the rainbow' }, { es: 'la vista', en: 'the view' }],
        },
        A1: {
          scene: { es: 'El autobús para en un mirador. Los turistas bajan a sacar fotos. Tadhg toma un té de su termo. Hay un hombre mayor que vende jerséis y un perro que ayuda a mover las ovejas.', en: 'The bus stops at a viewpoint. The tourists get off to take photos. Tadhg drinks tea from his flask. There is an old man selling sweaters and a dog that helps move the sheep.' },
          opener: { es: 'Hago este viaje cinco veces por semana desde hace quince años. Siempre es la misma carretera, pero nunca es el mismo día: cambia la luz, cambia el tiempo, cambia la gente. Los autobuses siempre van en el mismo sentido, contra el reloj, para no encontrarse en las curvas. ¿Tú repites algún camino todos los días?', en: 'I have made this trip five times a week for fifteen years. It is always the same road, but never the same day: the light changes, the weather changes, the people change. The buses always go the same way, anticlockwise, so they don’t meet on the bends. Do you repeat any route every day?' },
          decide: {
            ask: { es: 'Un turista no volvió al autobús. Ya pasaron diez minutos. ¿Qué le aconsejas a Tadhg?', en: 'A tourist hasn’t come back to the bus. Ten minutes have passed. What do you advise Tadhg?' },
            options: [
              { say: { es: 'Esperar cinco minutos más.', en: 'Wait five more minutes.' }, then: { es: 'El turista llega corriendo con un jersey nuevo. Todos aplauden.', en: 'The tourist arrives running with a new sweater. Everyone claps.' } },
              { say: { es: 'Ir a buscarlo.', en: 'Go and look for him.' }, then: { es: 'Lo encuentras hablando con el perro. «¡Es muy inteligente!», dice.', en: 'You find him talking to the dog. “He is very clever!” he says.' } },
              { say: { es: 'Salir sin él.', en: 'Leave without him.' }, then: { es: 'Tadhg dice: «Nunca dejo a nadie». Y espera.', en: 'Tadhg says: “I never leave anyone.” And he waits.' } },
            ],
          },
          twist: { es: 'Tadhg cuenta que muchos turistas ahora alquilan coche y no quieren autobús. Su empresa puede cerrar. ¿Qué le recomiendas?', en: 'Tadhg says that many tourists now hire cars and don’t want a bus. His company may close. What do you recommend?' },
          questions: [
            { q: { es: '¿Qué camino haces todos los días?', en: 'What route do you take every day?' }, help: { es: 'Voy de casa a… en…', en: 'I go from home to… by…' }, follow: [{ es: '¿Cuánto tardas?', en: 'How long does it take?' }, { es: '¿Te aburre?', en: 'Does it bore you?' }] },
            { q: { es: '¿Prefieres viajar solo o con un grupo?', en: 'Do you prefer travelling alone or with a group?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Hiciste una excursión en grupo?', en: 'Have you done a group tour?' }, { es: '¿Cómo fue?', en: 'How was it?' }] },
            { q: { es: '¿Llegas tarde con frecuencia?', en: 'Are you often late?' }, help: { es: 'Sí, siempre. / No, soy puntual.', en: 'Yes, always. / No, I am punctual.' }, follow: [{ es: '¿Te esperaron alguna vez?', en: 'Has anyone waited for you?' }, { es: '¿Esperas tú a los demás?', en: 'Do you wait for others?' }] },
            { q: { es: '¿Qué llevas siempre en un viaje largo?', en: 'What do you always take on a long trip?' }, help: { es: 'Siempre llevo agua, música…', en: 'I always take water, music…' }, follow: [{ es: '¿Y qué olvidas siempre?', en: 'And what do you always forget?' }, { es: '¿Llevas comida?', en: 'Do you take food?' }] },
          ],
          words: [{ es: 'el mirador', en: 'the viewpoint' }, { es: 'el termo', en: 'the flask' }, { es: 'la curva', en: 'the bend' }, { es: 'alquilar', en: 'to hire / rent' }, { es: 'puntual', en: 'punctual' }],
        },
        A2: {
          scene: { es: 'Es la última vuelta de la temporada. El autobús va casi vacío: solo tú, una pareja japonesa y una señora de ochenta años que vuelve a Kerry después de sesenta años en Boston. Quiere ver la casa donde vivió de niña.', en: 'It is the last trip of the season. The bus is almost empty: just you, a Japanese couple and an eighty-year-old lady coming back to Kerry after sixty years in Boston. She wants to see the house where she lived as a girl.' },
          opener: { es: 'La señora Kathleen me dio una foto vieja de su casa. Dice que estaba cerca de una iglesia blanca y de un puente, pero en Kerry hay muchas iglesias blancas y muchos puentes. No es una parada del recorrido. Si me desvío, llegamos tarde a la cena del hotel. ¿Qué harías tú?', en: 'Mrs Kathleen gave me an old photo of her house. She says it was near a white church and a bridge, but in Kerry there are many white churches and many bridges. It is not a stop on the route. If I make a detour, we will be late for dinner at the hotel. What would you do?' },
          decide: {
            ask: { es: 'Tadhg pregunta a los pasajeros. ¿Qué votas?', en: 'Tadhg asks the passengers. How do you vote?' },
            options: [
              { say: { es: 'Desviarnos: la cena puede esperar.', en: 'Make the detour: dinner can wait.' }, then: { es: 'Después de una hora encuentran la casa. Está en ruinas, pero Kathleen llora de alegría.', en: 'After an hour they find the house. It is in ruins, but Kathleen cries with joy.' } },
              { say: { es: 'Preguntar en un bar del pueblo primero.', en: 'Ask in a village pub first.' }, then: { es: 'Un hombre del bar reconoce el apellido. ¡Es primo de Kathleen!', en: 'A man in the pub recognises the surname. He is Kathleen’s cousin!' } },
              { say: { es: 'Volver mañana con un taxi.', en: 'Come back tomorrow by taxi.' }, then: { es: 'Kathleen acepta, pero en el hotel no puede dormir de los nervios.', en: 'Kathleen agrees, but at the hotel she can’t sleep from nerves.' } },
            ],
          },
          twist: { es: 'En la casa vive ahora una familia joven de Polonia. Invitan a Kathleen a tomar el té en la cocina donde ella comía de niña. Ella no sabe si entrar. ¿Qué le dices?', en: 'A young family from Poland now lives in the house. They invite Kathleen for tea in the kitchen where she ate as a girl. She doesn’t know whether to go in. What do you tell her?' },
          questions: [
            { q: { es: '¿Volviste alguna vez a la casa de tu infancia?', en: 'Have you ever gone back to your childhood home?' }, help: { es: 'Sí, y estaba… / No, ya no existe.', en: 'Yes, and it was… / No, it doesn’t exist any more.' }, follow: [{ es: '¿Qué sentiste?', en: 'What did you feel?' }, { es: '¿Quién vive ahí ahora?', en: 'Who lives there now?' }] },
            { q: { es: '¿Tienes familia que se fue a otro país hace mucho?', en: 'Do you have family who moved to another country long ago?' }, help: { es: 'Sí, mis bisabuelos llegaron de… / No que yo sepa.', en: 'Yes, my great-grandparents came from… / Not that I know of.' }, follow: [{ es: '¿Por qué se fueron?', en: 'Why did they leave?' }, { es: '¿Conoces ese lugar?', en: 'Do you know that place?' }] },
            { q: { es: '¿Cambiarías un plan por ayudar a un desconocido?', en: 'Would you change a plan to help a stranger?' }, help: { es: 'Sí, si… / Depende de…', en: 'Yes, if… / It depends on…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
            { q: { es: '¿Guardas fotos antiguas de tu familia?', en: 'Do you keep old family photos?' }, help: { es: 'Sí, tengo un álbum… / Están en casa de mi madre.', en: 'Yes, I have an album… / They are at my mother’s house.' }, follow: [{ es: '¿Cuál es tu favorita?', en: 'Which is your favourite?' }, { es: '¿Quién aparece?', en: 'Who is in it?' }] },
          ],
          words: [{ es: 'desviarse', en: 'to make a detour' }, { es: 'el recorrido', en: 'the route' }, { es: 'el apellido', en: 'the surname' }, { es: 'en ruinas', en: 'in ruins' }, { es: 'el pasajero', en: 'the passenger' }],
        },
        B1: {
          scene: { es: 'La empresa de Tadhg quiere cambiar los autobuses grandes por furgonetas eléctricas pequeñas y una aplicación que explica el paisaje con audio. Ya no harían falta conductores que cuenten historias: la aplicación lo hace en doce idiomas. A Tadhg le ofrecen un puesto en la oficina o una indemnización.', en: 'Tadhg’s company wants to replace the big buses with small electric vans and an app that explains the landscape with audio. Drivers who tell stories would no longer be needed: the app does it in twelve languages. Tadhg is offered an office job or a redundancy payment.' },
          opener: { es: 'La aplicación sabe las fechas y los nombres mejor que yo, eso es verdad. Pero no sabe que la señora del café de Waterville perdió a su marido el mes pasado y que hay que pararse a saludarla. No sabe qué chiste funciona con los alemanes y cuál con los argentinos. ¿Una máquina puede hacer un trabajo que en el fondo consiste en conocer gente?', en: 'The app knows dates and names better than I do, that is true. But it doesn’t know that the lady at the café in Waterville lost her husband last month and that you have to stop and say hello to her. It doesn’t know which joke works with Germans and which with Argentinians. Can a machine do a job that is really about knowing people?' },
          decide: {
            ask: { es: '¿Qué le recomiendas a Tadhg?', en: 'What do you recommend to Tadhg?' },
            options: [
              { say: { es: 'Aceptar la oficina y ayudar a mejorar la aplicación con sus historias.', en: 'Accept the office job and help improve the app with his stories.' }, then: { es: 'Graba cien historias para la aplicación. Los turistas preguntan quién es «la voz de Kerry».', en: 'He records a hundred stories for the app. Tourists ask who “the voice of Kerry” is.' } },
              { say: { es: 'Tomar la indemnización y crear su propio tour para grupos pequeños.', en: 'Take the redundancy money and start his own tour for small groups.' }, then: { es: 'Empieza con una furgoneta vieja. El primer verano va bien; el invierno es muy duro.', en: 'He starts with an old van. The first summer goes well; the winter is very hard.' } },
              { say: { es: 'Organizar a los conductores para negociar otro modelo con la empresa.', en: 'Organise the drivers to negotiate a different model with the company.' }, then: { es: 'La empresa acepta tener conductores en la mitad de las rutas, al menos por dos años.', en: 'The company agrees to have drivers on half the routes, at least for two years.' } },
            ],
          },
          twist: { es: 'Las encuestas de la empresa muestran que los turistas jóvenes prefieren la aplicación: pueden parar cuando quieren y no tienen que hablar con nadie. ¿Tiene sentido defender algo que los clientes ya no piden?', en: 'The company’s surveys show that young tourists prefer the app: they can stop when they want and don’t have to talk to anyone. Does it make sense to defend something customers no longer ask for?' },
          questions: [
            { q: { es: '¿Qué trabajos crees que no puede hacer una máquina?', en: 'What jobs do you think a machine can’t do?' }, help: { es: 'Creo que ninguna máquina puede… porque…', en: 'I think no machine can… because…' }, follow: [{ es: '¿Y dentro de veinte años?', en: 'And in twenty years?' }, { es: '¿Tu trabajo está en peligro?', en: 'Is your job at risk?' }] },
            { q: { es: '¿Prefieres un guía humano o una audioguía?', en: 'Do you prefer a human guide or an audio guide?' }, help: { es: 'Prefiero… porque puedo…', en: 'I prefer… because I can…' }, follow: [{ es: '¿Recuerdas un guía especial?', en: 'Do you remember a special guide?' }, { es: '¿Qué tenía?', en: 'What did they have?' }] },
            { q: { es: '¿Qué harías con una indemnización grande?', en: 'What would you do with a large redundancy payment?' }, help: { es: 'La usaría para… / La ahorraría…', en: 'I would use it to… / I would save it…' }, follow: [{ es: '¿Arriesgarías con un negocio propio?', en: 'Would you risk your own business?' }, { es: '¿Qué negocio?', en: 'What business?' }] },
            { q: { es: '¿Hay que proteger trabajos tradicionales aunque sean menos eficientes?', en: 'Should traditional jobs be protected even if they are less efficient?' }, help: { es: 'Sí, porque aportan… / No, el mundo cambia y…', en: 'Yes, because they bring… / No, the world changes and…' }, follow: [{ es: '¿Qué trabajo desapareció en tu país?', en: 'What job disappeared in your country?' }, { es: '¿Se extraña?', en: 'Is it missed?' }] },
          ],
          words: [{ es: 'la indemnización', en: 'the redundancy payment' }, { es: 'la furgoneta', en: 'the van' }, { es: 'la encuesta', en: 'the survey' }, { es: 'en el fondo', en: 'deep down / really' }, { es: 'eficiente', en: 'efficient' }],
        },
      },
    },
    // ------------------------------------------------------------ Skellig Michael
    {
      id: 'skellig',
      name: { es: 'El barco a Skellig Michael', en: 'The boat to Skellig Michael' },
      who: { name: 'Fionnuala', role: { es: 'capitana de barco', en: 'boat skipper' } },
      levels: {
        A0: {
          scene: { es: 'Es un barco pequeño en el puerto. El mar se mueve mucho. Lejos hay una isla de roca muy alta. Fionnuala es la capitana.', en: 'It is a small boat in the harbour. The sea is moving a lot. Far away there is a very high rock island. Fionnuala is the skipper.' },
          opener: { es: '¡Hola! Soy Fionnuala. Vamos a la isla Skellig. Hay monjes antiguos y muchos pájaros. ¿Te mareas en el barco?', en: 'Hello! I am Fionnuala. We are going to Skellig island. There are ancient monks and lots of birds. Do you get seasick on boats?' },
          decide: {
            ask: { es: 'El mar se mueve. ¿Qué haces?', en: 'The sea is moving. What do you do?' },
            options: [
              { say: { es: 'Miro el horizonte.', en: 'I look at the horizon.' }, then: { es: 'Te sientes mejor. Ves delfines al lado del barco.', en: 'You feel better. You see dolphins next to the boat.' } },
              { say: { es: 'Como una galleta.', en: 'I eat a biscuit.' }, then: { es: 'Fionnuala dice: «Muy bien. Pan y galletas, sí».', en: 'Fionnuala says: “Very good. Bread and biscuits, yes.”' } },
              { say: { es: 'Me siento dentro.', en: 'I sit inside.' }, then: { es: 'Dentro no ves el mar. ¡Te mareas más!', en: 'Inside you can’t see the sea. You feel sicker!' } },
            ],
          },
          twist: { es: 'En la isla hay seiscientos escalones de piedra. Son muy altos. ¿Subes?', en: 'On the island there are six hundred stone steps. They are very steep. Do you climb?' },
          questions: [
            { q: { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }, help: { es: 'Sí, mucho. / No, me mareo.', en: 'Yes, a lot. / No, I get seasick.' }, follow: [{ es: '¿Dónde fuiste en barco?', en: 'Where did you go by boat?' }, { es: '¿Cuánto tiempo?', en: 'How long?' }] },
            { q: { es: '¿Viste delfines alguna vez?', en: 'Have you ever seen dolphins?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Cuántos?', en: 'How many?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Te gusta subir escaleras?', en: 'Do you like climbing stairs?' }, help: { es: 'Sí, es buen ejercicio. / No, prefiero el ascensor.', en: 'Yes, it is good exercise. / No, I prefer the lift.' }, follow: [{ es: '¿En qué piso vives?', en: 'What floor do you live on?' }, { es: '¿Hay ascensor?', en: 'Is there a lift?' }] },
            { q: { es: '¿Qué ves desde tu ventana?', en: 'What do you see from your window?' }, help: { es: 'Veo una calle / un parque / el mar…', en: 'I see a street / a park / the sea…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué te gustaría ver?', en: 'What would you like to see?' }] },
          ],
          words: [{ es: 'el barco', en: 'the boat' }, { es: 'marearse', en: 'to get seasick' }, { es: 'la roca', en: 'the rock' }, { es: 'el escalón', en: 'the step' }, { es: 'el monje', en: 'the monk' }],
        },
        A1: {
          scene: { es: 'Arriba de la isla hay casitas de piedra con forma de colmena. Hace mil cuatrocientos años vivían aquí unos doce monjes. No tenían árboles, ni tierra, casi nada. Fionnuala te muestra el pequeño huerto que ellos hicieron entre las rocas.', en: 'At the top of the island there are little beehive-shaped stone huts. Fourteen hundred years ago about twelve monks lived here. They had no trees, no soil, almost nothing. Fionnuala shows you the small garden they made among the rocks.' },
          opener: { es: 'Los monjes comían pescado, huevos de pájaro y lo poco que crecía aquí. En invierno no venía ningún barco durante meses. Vivían en silencio, rezaban y copiaban libros. Yo vengo en verano y en dos horas ya quiero mi café. ¿Podrías vivir sin internet ni tiendas una semana?', en: 'The monks ate fish, birds’ eggs and the little that grew here. In winter no boat came for months. They lived in silence, prayed and copied books. I come in summer and after two hours I already want my coffee. Could you live without internet or shops for a week?' },
          decide: {
            ask: { es: 'Fionnuala te da diez minutos libres. ¿Qué haces?', en: 'Fionnuala gives you ten free minutes. What do you do?' },
            options: [
              { say: { es: 'Me siento en silencio, como los monjes.', en: 'I sit in silence, like the monks.' }, then: { es: 'Solo escuchas el viento y los pájaros. Es muy raro y muy bonito.', en: 'You only hear the wind and the birds. It is very strange and very beautiful.' } },
              { say: { es: 'Entro en una casita de piedra.', en: 'I go into a stone hut.' }, then: { es: 'Dentro es oscuro y no hace viento. Cabe una sola persona acostada.', en: 'Inside it is dark and there is no wind. Only one person lying down fits.' } },
              { say: { es: 'Busco frailecillos para una foto.', en: 'I look for puffins for a photo.' }, then: { es: 'Un frailecillo se queda quieto frente a ti, como un modelo.', en: 'A puffin stands still in front of you, like a model.' } },
            ],
          },
          twist: { es: 'Fionnuala dice que filmaron una película de La guerra de las galaxias aquí, y ahora viene mucha más gente. ¿Es bueno o malo para la isla?', en: 'Fionnuala says they filmed a Star Wars movie here, and now many more people come. Is it good or bad for the island?' },
          questions: [
            { q: { es: '¿Podrías vivir una semana sin internet?', en: 'Could you live a week without internet?' }, help: { es: 'Sí, sin problema. / No, imposible.', en: 'Yes, no problem. / No, impossible.' }, follow: [{ es: '¿Qué harías?', en: 'What would you do?' }, { es: '¿Qué extrañarías más?', en: 'What would you miss most?' }] },
            { q: { es: '¿Te gusta el silencio?', en: 'Do you like silence?' }, help: { es: 'Sí, me relaja. / No, me pone nervioso.', en: 'Yes, it relaxes me. / No, it makes me nervous.' }, follow: [{ es: '¿Dónde encuentras silencio?', en: 'Where do you find silence?' }, { es: '¿Escuchas música siempre?', en: 'Do you always listen to music?' }] },
            { q: { es: '¿Visitaste un lugar de una película?', en: 'Have you visited a place from a film?' }, help: { es: 'Sí, fui a… / No, pero quiero ir a…', en: 'Yes, I went to… / No, but I want to go to…' }, follow: [{ es: '¿Qué película?', en: 'Which film?' }, { es: '¿Era igual que en la pantalla?', en: 'Was it like on screen?' }] },
            { q: { es: '¿Qué comerías en una isla sin tiendas?', en: 'What would you eat on an island without shops?' }, help: { es: 'Comería pescado, huevos…', en: 'I would eat fish, eggs…' }, follow: [{ es: '¿Sabes pescar?', en: 'Can you fish?' }, { es: '¿Sabes cocinar con fuego?', en: 'Can you cook over a fire?' }] },
          ],
          words: [{ es: 'la colmena', en: 'the beehive' }, { es: 'rezar', en: 'to pray' }, { es: 'el huerto', en: 'the vegetable garden' }, { es: 'caber', en: 'to fit' }, { es: 'el frailecillo', en: 'the puffin' }],
        },
        A2: {
          scene: { es: 'Es la hora de volver, pero el viento cambió de repente. Las olas son más grandes y Fionnuala habla por radio con el puerto. Hay otro barco con doce turistas que todavía no bajó de la isla. Una turista mayor se torció el tobillo en los escalones.', en: 'It is time to go back, but the wind has suddenly changed. The waves are bigger and Fionnuala is talking to the harbour on the radio. There is another boat with twelve tourists who haven’t come down from the island yet. An older tourist has twisted her ankle on the steps.' },
          opener: { es: 'Llevo veinte años en este mar y solo hay una regla: el mar decide, no yo. Hace tres años tuvimos que dejar a un grupo una noche en la isla porque era imposible volver. Pasaron frío y miedo, pero volvieron todos. Hoy el puerto me dice que tengo una hora, quizás menos. ¿Qué harías primero?', en: 'I have been on this sea for twenty years and learned only one rule: the sea decides, not me. Three years ago we had to leave a group on the island for a night because it was impossible to get back. They were cold and scared, but they all came back. Today the harbour tells me I have an hour, maybe less. What would you do first?' },
          decide: {
            ask: { es: 'Fionnuala necesita ayuda. ¿Qué haces?', en: 'Fionnuala needs help. What do you do?' },
            options: [
              { say: { es: 'Subo a ayudar a bajar a la señora del tobillo.', en: 'I go up to help the lady with the ankle come down.' }, then: { es: 'Bajan muy despacio entre tres personas. Llegan al barco justo a tiempo.', en: 'They come down very slowly with three people. They reach the boat just in time.' } },
              { say: { es: 'Me quedo en el barco y reparto chalecos salvavidas.', en: 'I stay on the boat and hand out life jackets.' }, then: { es: 'Todos están listos cuando llega el grupo. Fionnuala sale enseguida.', en: 'Everyone is ready when the group arrives. Fionnuala leaves immediately.' } },
              { say: { es: 'Llamo a la guardia costera.', en: 'I call the coastguard.' }, then: { es: 'Llega un helicóptero para la señora. El resto vuelve en barco, mojado pero bien.', en: 'A helicopter comes for the lady. The rest go back by boat, wet but fine.' } },
            ],
          },
          twist: { es: 'Ya en el puerto, un turista se queja porque no pudo ver la isla entera y pide su dinero. Fionnuala está agotada. ¿Qué le dirías tú a ese turista?', en: 'Back in the harbour, a tourist complains because he couldn’t see the whole island and asks for his money back. Fionnuala is exhausted. What would you say to that tourist?' },
          questions: [
            { q: { es: '¿Estuviste alguna vez en una situación de peligro?', en: 'Have you ever been in a dangerous situation?' }, help: { es: 'Sí, una vez… / Por suerte, no.', en: 'Yes, once… / Luckily, no.' }, follow: [{ es: '¿Quién te ayudó?', en: 'Who helped you?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Cómo reaccionas en una emergencia?', en: 'How do you react in an emergency?' }, help: { es: 'Me quedo tranquilo / me pongo nervioso…', en: 'I stay calm / I get nervous…' }, follow: [{ es: '¿Sabes primeros auxilios?', en: 'Do you know first aid?' }, { es: '¿Dónde aprendiste?', en: 'Where did you learn?' }] },
            { q: { es: '¿Te quejaste alguna vez en un viaje?', en: 'Have you ever complained on a trip?' }, help: { es: 'Sí, porque el hotel… / No, nunca me quejo.', en: 'Yes, because the hotel… / No, I never complain.' }, follow: [{ es: '¿Te devolvieron el dinero?', en: 'Did they give you your money back?' }, { es: '¿Tenías razón?', en: 'Were you right?' }] },
            { q: { es: '¿Qué reglas aprendiste con la experiencia?', en: 'What rules have you learned from experience?' }, help: { es: 'La experiencia me enseñó que nunca hay que…', en: 'I learned that you should never…' }, follow: [{ es: '¿Quién te la enseñó?', en: 'Who taught it to you?' }, { es: '¿La sigues siempre?', en: 'Do you always follow it?' }] },
          ],
          words: [{ es: 'la ola', en: 'the wave' }, { es: 'torcerse el tobillo', en: 'to twist your ankle' }, { es: 'el chaleco salvavidas', en: 'the life jacket' }, { es: 'la guardia costera', en: 'the coastguard' }, { es: 'agotado', en: 'exhausted' }],
        },
        B1: {
          scene: { es: 'Skellig Michael es patrimonio de la humanidad. Para protegerla, el gobierno solo permite ciento ochenta visitantes al día y quince barcos con licencia. Fionnuala tiene una de esas licencias, que pasó de su padre a ella. Ahora una plataforma de viajes ofrece pagar cualquier precio por las licencias y venderlas a turistas ricos como «experiencia exclusiva».', en: 'Skellig Michael is a World Heritage Site. To protect it, the government only allows a hundred and eighty visitors a day and fifteen licensed boats. Fionnuala holds one of those licences, which passed from her father to her. Now a travel platform is offering to pay any price for the licences and sell them to rich tourists as an “exclusive experience”.' },
          opener: { es: 'Mi padre llevaba a cualquiera: estudiantes, curas, abuelas de Cork. Cobraba poco porque decía que la isla no era suya, que él solo era el camino. La plataforma me ofrece más dinero del que voy a ganar en toda mi vida. Ya vendieron tres licencias. Si vendo, me jubilo mañana. Si no vendo, tal vez sea la última capitana de pueblo en este puerto. ¿Tiene sentido resistir cuando los demás ya se rindieron?', en: 'My father took anyone: students, priests, grandmothers from Cork. He charged little because he said the island wasn’t his, he was only the way there. The platform is offering me more money than I will earn in my whole life. Three licences have already been sold. If I sell, I retire tomorrow. If I don’t, I may be the last local skipper in this harbour. Does it make sense to resist when the others have already given in?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Fionnuala?', en: 'What do you advise Fionnuala?' },
            options: [
              { say: { es: 'No vender y pedir al gobierno que prohíba vender licencias a empresas.', en: 'Not sell and ask the government to ban selling licences to companies.' }, then: { es: 'La propuesta llega al parlamento. Tarda, pero otros capitanes se suman.', en: 'The proposal reaches parliament. It is slow, but other skippers join in.' } },
              { say: { es: 'Vender, pero exigir que un día por semana sea a precio popular.', en: 'Sell, but demand that one day a week is at an affordable price.' }, then: { es: 'La plataforma acepta en el contrato, pero nadie controla si lo cumple.', en: 'The platform accepts it in the contract, but nobody checks whether it complies.' } },
              { say: { es: 'Crear una cooperativa con los capitanes que quedan.', en: 'Create a cooperative with the remaining skippers.' }, then: { es: 'Comparten barcos, clientes y gastos. Ganan menos, pero nadie más vende.', en: 'They share boats, customers and costs. They earn less, but nobody else sells.' } },
            ],
          },
          twist: { es: 'Un estudio científico dice que los barcos dañan a las colonias de aves y recomienda cerrar la isla al público durante diez años. Entonces las licencias no valdrían nada. ¿Debería Fionnuala vender ahora, antes de que se sepa?', en: 'A scientific study says the boats harm the bird colonies and recommends closing the island to the public for ten years. Then the licences would be worth nothing. Should Fionnuala sell now, before it becomes known?' },
          questions: [
            { q: { es: '¿Los lugares únicos deberían ser para quien pueda pagar más?', en: 'Should unique places be for whoever can pay most?' }, help: { es: 'No, porque… / En parte, si el dinero sirve para…', en: 'No, because… / Partly, if the money is used to…' }, follow: [{ es: '¿Qué lugar de tu país es así?', en: 'Which place in your country is like this?' }, { es: '¿Cuánto cuesta?', en: 'How much does it cost?' }] },
            { q: { es: '¿Usarías información que otros no tienen para ganar dinero?', en: 'Would you use information others don’t have to make money?' }, help: { es: 'No me parece justo porque… / Si es legal, sí.', en: 'I don’t think it’s fair because… / If it’s legal, yes.' }, follow: [{ es: '¿Dónde está la línea?', en: 'Where is the line?' }, { es: '¿Conoces un caso?', en: 'Do you know a case?' }] },
            { q: { es: '¿Vale la pena resistir cuando todos los demás se rinden?', en: 'Is it worth resisting when everyone else gives in?' }, help: { es: 'Sí, porque alguien tiene que… / No, es inútil si…', en: 'Yes, because someone has to… / No, it’s pointless if…' }, follow: [{ es: '¿Resististe tú alguna vez?', en: 'Have you ever resisted?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
            { q: { es: '¿Cerrarías un lugar famoso diez años para protegerlo?', en: 'Would you close a famous place for ten years to protect it?' }, help: { es: 'Sí, si los expertos dicen… / No, porque la gente del lugar…', en: 'Yes, if experts say… / No, because local people…' }, follow: [{ es: '¿Quién debería decidir?', en: 'Who should decide?' }, { es: '¿Cómo compensarías a los vecinos?', en: 'How would you compensate local people?' }] },
          ],
          words: [{ es: 'la licencia', en: 'the licence' }, { es: 'jubilarse', en: 'to retire' }, { es: 'rendirse', en: 'to give in' }, { es: 'la plataforma', en: 'the platform' }, { es: 'patrimonio de la humanidad', en: 'World Heritage Site' }],
        },
      },
    },
    // ------------------------------------------------------------ Killarney
    {
      id: 'killarney',
      name: { es: 'El carro de caballos de Killarney', en: 'The jaunting car in Killarney' },
      who: { name: 'Mick', role: { es: 'cochero', en: 'jaunting car driver' } },
      levels: {
        A0: {
          scene: { es: 'Es un parque enorme con lagos y árboles. Mick tiene un carro con un caballo marrón. El caballo se llama Bruno. Hay ciervos en el bosque.', en: 'It is a huge park with lakes and trees. Mick has a cart with a brown horse. The horse is called Bruno. There are deer in the forest.' },
          opener: { es: '¡Hola! Soy Mick, y este es Bruno. ¿Damos un paseo por el parque? Son treinta minutos.', en: 'Hello! I am Mick, and this is Bruno. Shall we take a ride through the park? It is thirty minutes.' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Subo al carro.', en: 'I get in the cart.' }, then: { es: 'Bruno camina despacio. Ves un lago muy azul.', en: 'Bruno walks slowly. You see a very blue lake.' } },
              { say: { es: 'Prefiero caminar.', en: 'I prefer walking.' }, then: { es: 'Caminas al lado del carro. Mick canta una canción.', en: 'You walk beside the cart. Mick sings a song.' } },
              { say: { es: 'Le doy agua a Bruno.', en: 'I give Bruno water.' }, then: { es: 'Bruno bebe mucho. Mick dice: «Ahora es tu amigo».', en: 'Bruno drinks a lot. Mick says: “Now he is your friend.”' } },
            ],
          },
          twist: { es: 'Un ciervo grande cruza el camino. Bruno para. ¿Qué haces?', en: 'A big deer crosses the path. Bruno stops. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los parques?', en: 'Do you like parks?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Hay un parque cerca de tu casa?', en: 'Is there a park near your home?' }, { es: '¿Qué haces allí?', en: 'What do you do there?' }] },
            { q: { es: '¿Tienes un animal?', en: 'Do you have a pet?' }, help: { es: 'Sí, tengo un… / No.', en: 'Yes, I have a… / No.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is its name?' }, { es: '¿Qué come?', en: 'What does it eat?' }] },
            { q: { es: '¿Caminas mucho?', en: 'Do you walk a lot?' }, help: { es: 'Sí, todos los días. / No, poco.', en: 'Yes, every day. / No, a little.' }, follow: [{ es: '¿Adónde?', en: 'Where to?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Cantas?', en: 'Do you sing?' }, help: { es: 'Sí, en la ducha. / No, canto mal.', en: 'Yes, in the shower. / No, I sing badly.' }, follow: [{ es: '¿Qué canción?', en: 'Which song?' }, { es: '¿Cantas para alguien?', en: 'Do you sing for anyone?' }] },
          ],
          words: [{ es: 'el caballo', en: 'the horse' }, { es: 'el carro', en: 'the cart' }, { es: 'el ciervo', en: 'the deer' }, { es: 'el bosque', en: 'the forest' }, { es: 'el paseo', en: 'the ride / walk' }],
        },
        A1: {
          scene: { es: 'El carro pasa por la casa Muckross, una mansión antigua con jardines. Mick habla todo el tiempo: cuenta historias, chistes y datos de cada árbol. Algunos son verdad y otros, sospechas, son inventados.', en: 'The cart passes Muckross House, an old mansion with gardens. Mick talks the whole time: he tells stories, jokes and facts about every tree. Some are true and others, you suspect, are made up.' },
          opener: { es: 'La reina Victoria visitó esta casa en mil ochocientos sesenta y uno. Los dueños gastaron una fortuna para prepararla y después casi quedaron pobres. Ella solo se quedó dos noches. Eso es verdad, ¿eh? Lo del fantasma en la cocina… ese ya no sé. ¿Te gustan las historias de fantasmas?', en: 'Queen Victoria visited this house in 1861. The owners spent a fortune getting it ready and afterwards were almost poor. She only stayed two nights. That is true, eh? The one about the ghost in the kitchen… that one I’m not so sure about. Do you like ghost stories?' },
          decide: {
            ask: { es: 'Mick dice que puede contar una historia de miedo o una de amor. ¿Cuál eliges?', en: 'Mick says he can tell a scary story or a love story. Which do you choose?' },
            options: [
              { say: { es: 'La de miedo.', en: 'The scary one.' }, then: { es: 'Mick habla de una cocinera que todavía hace té por las noches. Bruno relincha y todos se ríen.', en: 'Mick talks about a cook who still makes tea at night. Bruno neighs and everyone laughs.' } },
              { say: { es: 'La de amor.', en: 'The love one.' }, then: { es: 'Es la historia de un jardinero y una hija del dueño. Termina mal, claro.', en: 'It is the story of a gardener and the owner’s daughter. It ends badly, of course.' } },
              { say: { es: 'Una historia de su vida.', en: 'A story from his life.' }, then: { es: 'Mick se queda callado un momento y cuenta cómo conoció a su mujer en este camino.', en: 'Mick goes quiet for a moment and tells how he met his wife on this path.' } },
            ],
          },
          twist: { es: 'Unos turistas dicen que usar caballos para los turistas es cruel. Mick se enoja. ¿Qué opinas tú?', en: 'Some tourists say using horses for tourists is cruel. Mick gets angry. What do you think?' },
          questions: [
            { q: { es: '¿Crees en fantasmas?', en: 'Do you believe in ghosts?' }, help: { es: 'Sí, un poco. / No, para nada.', en: 'Yes, a little. / No, not at all.' }, follow: [{ es: '¿Conoces una historia?', en: 'Do you know a story?' }, { es: '¿Te da miedo?', en: 'Does it scare you?' }] },
            { q: { es: '¿Visitaste una casa o un palacio antiguo?', en: 'Have you visited an old house or palace?' }, help: { es: 'Sí, visité… / No, nunca.', en: 'Yes, I visited… / No, never.' }, follow: [{ es: '¿Qué te gustó?', en: 'What did you like?' }, { es: '¿Vivirías allí?', en: 'Would you live there?' }] },
            { q: { es: '¿Conoces a alguien que habla mucho?', en: 'Do you know someone who talks a lot?' }, help: { es: 'Sí, mi… habla muchísimo.', en: 'Yes, my… talks a lot.' }, follow: [{ es: '¿De qué habla?', en: 'What do they talk about?' }, { es: '¿Tú hablas mucho?', en: 'Do you talk a lot?' }] },
            { q: { es: '¿Dónde conociste a tu mejor amigo?', en: 'Where did you meet your best friend?' }, help: { es: 'Lo conocí en…', en: 'I met them at…' }, follow: [{ es: '¿Cuántos años tenían?', en: 'How old were you?' }, { es: '¿Se ven mucho?', en: 'Do you see each other a lot?' }] },
          ],
          words: [{ es: 'la mansión', en: 'the mansion' }, { es: 'el fantasma', en: 'the ghost' }, { es: 'el jardinero', en: 'the gardener' }, { es: 'inventado', en: 'made up' }, { es: 'la fortuna', en: 'the fortune' }],
        },
        A2: {
          scene: { es: 'Es domingo y hay una carrera de carros en el pueblo. Mick no compite desde hace años, pero su sobrino Seán lo convenció de prestarle a Bruno. Bruno ya tiene diecinueve años. El veterinario dice que está bien, aunque Mick no está tan seguro.', en: 'It is Sunday and there is a cart race in the town. Mick hasn’t competed for years, but his nephew Seán persuaded him to lend him Bruno. Bruno is already nineteen. The vet says he is fine, although Mick isn’t so sure.' },
          opener: { es: 'Bruno ganó esta carrera tres veces cuando era joven. Mi sobrino es buen chico, pero quiere ganar a toda costa, como yo a su edad. Anoche pasé la noche despierto pensando en las curvas del camino. Una parte de mí quiere verlo ganar otra vez, y otra parte quiere sacarlo de la carrera. ¿Tú qué harías con un animal viejo?', en: 'Bruno won this race three times when he was young. My nephew is a good lad, but he wants to win at all costs, like me at his age. Last night I didn’t sleep thinking about the bends in the road. Part of me wants to see him win again, and part of me wants to pull him out of the race. What would you do with an old animal?' },
          decide: {
            ask: { es: 'Faltan diez minutos para empezar. ¿Qué le dices a Mick?', en: 'There are ten minutes to go. What do you tell Mick?' },
            options: [
              { say: { es: 'Que hable con Seán y le pida ir tranquilo.', en: 'To talk to Seán and ask him to take it easy.' }, then: { es: 'Seán promete no forzarlo. Quedan cuartos y Bruno termina feliz.', en: 'Seán promises not to push him. They come fourth and Bruno finishes happy.' } },
              { say: { es: 'Que conduzca él mismo, como antes.', en: 'To drive himself, like before.' }, then: { es: 'Mick y Bruno corren juntos por última vez. El público los aplaude de pie.', en: 'Mick and Bruno race together one last time. The crowd gives them a standing ovation.' } },
              { say: { es: 'Que retire a Bruno: no vale la pena.', en: 'To withdraw Bruno: it’s not worth it.' }, then: { es: 'Seán se enoja, pero al día siguiente le trae a Bruno una bolsa de zanahorias.', en: 'Seán gets angry, but the next day he brings Bruno a bag of carrots.' } },
            ],
          },
          twist: { es: 'Después de la carrera, un hotel de lujo quiere comprar a Bruno para que los niños de los huéspedes se saquen fotos con él. Le darían buena comida y poco trabajo. ¿Lo vende Mick?', en: 'After the race, a luxury hotel wants to buy Bruno so the guests’ children can take photos with him. They would give him good food and little work. Does Mick sell him?' },
          questions: [
            { q: { es: '¿Tuviste un animal que se hizo viejo?', en: 'Have you had an animal that grew old?' }, help: { es: 'Sí, mi perro… / No, nunca tuve animales.', en: 'Yes, my dog… / No, I never had animals.' }, follow: [{ es: '¿Cómo lo cuidaste?', en: 'How did you look after it?' }, { es: '¿Lo recuerdas mucho?', en: 'Do you remember it a lot?' }] },
            { q: { es: '¿Querías ganar a toda costa cuando eras joven?', en: 'Did you want to win at all costs when you were young?' }, help: { es: 'Sí, era muy competitivo. / No, nunca me importó.', en: 'Yes, I was very competitive. / No, I never cared.' }, follow: [{ es: '¿Y ahora?', en: 'And now?' }, { es: '¿Qué cambió?', en: 'What changed?' }] },
            { q: { es: '¿Le prestaste algo importante a un familiar?', en: 'Have you lent something important to a relative?' }, help: { es: 'Sí, le presté mi coche / mi casa…', en: 'Yes, I lent my car / my house…' }, follow: [{ es: '¿Te lo devolvió bien?', en: 'Did they give it back in good condition?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Hay una carrera o competición famosa en tu ciudad?', en: 'Is there a famous race or competition in your city?' }, help: { es: 'Sí, cada año hay… / No que yo sepa.', en: 'Yes, every year there is… / Not that I know of.' }, follow: [{ es: '¿Participaste?', en: 'Have you taken part?' }, { es: '¿Vas a verla?', en: 'Do you go and watch?' }] },
          ],
          words: [{ es: 'la carrera', en: 'the race' }, { es: 'el sobrino', en: 'the nephew' }, { es: 'el veterinario', en: 'the vet' }, { es: 'a toda costa', en: 'at all costs' }, { es: 'prestar', en: 'to lend' }],
        },
        B1: {
          scene: { es: 'Un grupo de defensa de los animales lanzó una campaña para prohibir los carros de caballos en el parque, como ya pasó en otras ciudades. Tiene cincuenta mil firmas. Los cocheros dicen que sus caballos viven mejor que muchas mascotas. El ayuntamiento invitó a Mick a un debate en la radio local.', en: 'An animal rights group has launched a campaign to ban jaunting cars in the park, as has already happened in other cities. It has fifty thousand signatures. The drivers say their horses live better than many pets. The council has invited Mick to a debate on local radio.' },
          opener: { es: 'Mi familia lleva cinco generaciones con caballos en este parque. Bruno come mejor que yo, va al veterinario más que yo y trabaja cuatro horas al día. Pero entiendo que alguien que lo ve con calor, en la carretera, entre coches, piense que sufre. Lo que me molesta es que la mayoría de los que firmaron nunca estuvo aquí. ¿Se puede opinar sobre algo que no conoces de cerca?', en: 'My family has had horses in this park for five generations. Bruno eats better than me, goes to the vet more than me and works four hours a day. But I understand that someone who sees him in the heat, on the road, among cars, might think he is suffering. What bothers me is that most of the people who signed have never been here. Can you have an opinion on something you don’t know up close?' },
          decide: {
            ask: { es: '¿Qué estrategia le recomiendas para el debate?', en: 'What strategy do you recommend for the debate?' },
            options: [
              { say: { es: 'Invitar a los del grupo a pasar un día con Bruno.', en: 'Invite the group to spend a day with Bruno.' }, then: { es: 'Dos activistas aceptan. Una cambia de opinión; la otra no, pero suaviza su tono.', en: 'Two activists accept. One changes her mind; the other doesn’t, but softens her tone.' } },
              { say: { es: 'Proponer reglas nuevas: menos horas, no trabajar con calor, controles públicos.', en: 'Propose new rules: fewer hours, no work in the heat, public inspections.' }, then: { es: 'El ayuntamiento adopta las reglas. Algunos cocheros se quejan de que Mick cedió demasiado.', en: 'The council adopts the rules. Some drivers complain that Mick gave in too much.' } },
              { say: { es: 'Defender la tradición con datos y no ceder en nada.', en: 'Defend the tradition with facts and give no ground.' }, then: { es: 'El debate se pone tenso. La radio recibe cientos de mensajes, a favor y en contra.', en: 'The debate gets tense. The radio receives hundreds of messages, for and against.' } },
            ],
          },
          twist: { es: 'El día antes del debate, un caballo de otro cochero se desmaya por el calor y el vídeo circula por todas las redes. Mick sabe que ese cochero no cuida bien a sus animales. ¿Debería decirlo en público, aunque sea un compañero?', en: 'The day before the debate, another driver’s horse collapses from the heat and the video spreads across social media. Mick knows that driver doesn’t look after his animals well. Should he say so publicly, even though he is a colleague?' },
          questions: [
            { q: { es: '¿Se puede opinar sobre algo que no conoces de cerca?', en: 'Can you have an opinion on something you don’t know up close?' }, help: { es: 'Sí, pero con cuidado… / No, primero hay que…', en: 'Yes, but carefully… / No, first you need to…' }, follow: [{ es: '¿Lo hiciste tú alguna vez?', en: 'Have you ever done it?' }, { es: '¿Cambiaste de opinión después?', en: 'Did you change your mind afterwards?' }] },
            { q: { es: '¿Firmas campañas por internet?', en: 'Do you sign online petitions?' }, help: { es: 'A veces, cuando… / No, porque no sirven.', en: 'Sometimes, when… / No, because they don’t work.' }, follow: [{ es: '¿Cuál fue la última?', en: 'What was the last one?' }, { es: '¿Sirvió para algo?', en: 'Did it achieve anything?' }] },
            { q: { es: '¿Usar animales para trabajar es aceptable hoy?', en: 'Is using animals for work acceptable today?' }, help: { es: 'Depende del animal y de… / No, nunca, porque…', en: 'It depends on the animal and… / No, never, because…' }, follow: [{ es: '¿Y los perros de policía o de ciegos?', en: 'And police dogs or guide dogs?' }, { es: '¿Dónde pones el límite?', en: 'Where do you draw the line?' }] },
            { q: { es: '¿Criticarías en público a un compañero de trabajo?', en: 'Would you criticise a colleague in public?' }, help: { es: 'Solo si… / Prefiero hablar en privado porque…', en: 'Only if… / I prefer to talk privately because…' }, follow: [{ es: '¿Qué pasó cuando lo hiciste?', en: 'What happened when you did?' }, { es: '¿Y si te critican a ti?', en: 'And if they criticise you?' }] },
          ],
          words: [{ es: 'la firma', en: 'the signature' }, { es: 'el cochero', en: 'the cart driver' }, { es: 'ceder', en: 'to give way / concede' }, { es: 'desmayarse', en: 'to collapse / faint' }, { es: 'suavizar', en: 'to soften' }],
        },
      },
    },
    // ------------------------------------------------------------ surfing at Inch
    {
      id: 'surf',
      name: { es: 'La playa de surf de Inch', en: 'The surf beach at Inch' },
      who: { name: 'Róisín', role: { es: 'profesora de surf', en: 'surf instructor' } },
      levels: {
        A0: {
          scene: { es: 'Es una playa muy larga. El agua está fría. Róisín tiene un traje negro y una tabla amarilla. Hay seis alumnos en la arena.', en: 'It is a very long beach. The water is cold. Róisín has a black wetsuit and a yellow board. There are six students on the sand.' },
          opener: { es: '¡Hola! Soy Róisín. Hoy aprendemos surf. El agua está fría: once grados. ¿Estás listo?', en: 'Hello! I am Róisín. Today we learn to surf. The water is cold: eleven degrees. Are you ready?' },
          decide: {
            ask: { es: 'Róisín te da una tabla. ¿Qué haces?', en: 'Róisín gives you a board. What do you do?' },
            options: [
              { say: { es: 'Entro al agua enseguida.', en: 'I go into the water straight away.' }, then: { es: '¡Está muy fría! Gritas y todos se ríen.', en: 'It is very cold! You shout and everyone laughs.' } },
              { say: { es: 'Practico en la arena primero.', en: 'I practise on the sand first.' }, then: { es: 'Róisín dice: «¡Perfecto! Arriba, abajo, arriba».', en: 'Róisín says: “Perfect! Up, down, up.”' } },
              { say: { es: 'Miro a los otros.', en: 'I watch the others.' }, then: { es: 'Un alumno se cae diez veces. Tú aprendes mirando.', en: 'A student falls ten times. You learn by watching.' } },
            ],
          },
          twist: { es: 'Viene una ola grande. Róisín grita: «¡Ahora! ¡De pie!». ¿Qué haces?', en: 'A big wave is coming. Róisín shouts: “Now! Stand up!” What do you do?' },
          questions: [
            { q: { es: '¿Sabes nadar?', en: 'Can you swim?' }, help: { es: 'Sí, bien. / Un poco. / No.', en: 'Yes, well. / A little. / No.' }, follow: [{ es: '¿Dónde nadas?', en: 'Where do you swim?' }, { es: '¿Quién te enseñó?', en: 'Who taught you?' }] },
            { q: { es: '¿Te gusta el agua fría?', en: 'Do you like cold water?' }, help: { es: 'Sí, me encanta. / No, prefiero caliente.', en: 'Yes, I love it. / No, I prefer warm.' }, follow: [{ es: '¿Te duchas con agua fría?', en: 'Do you shower with cold water?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Haces deporte?', en: 'Do you play sports?' }, help: { es: 'Sí, hago… / No, nada.', en: 'Yes, I do… / No, nothing.' }, follow: [{ es: '¿Cuántas veces por semana?', en: 'How many times a week?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Quieres aprender surf?', en: 'Do you want to learn to surf?' }, help: { es: 'Sí, me gustaría. / No, gracias.', en: 'Yes, I would like to. / No, thanks.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Qué otro deporte quieres aprender?', en: 'What other sport do you want to learn?' }] },
          ],
          words: [{ es: 'la tabla', en: 'the board' }, { es: 'el traje', en: 'the wetsuit' }, { es: 'la ola', en: 'the wave' }, { es: 'de pie', en: 'standing' }, { es: 'caerse', en: 'to fall' }],
        },
        A1: {
          scene: { es: 'La clase terminó. Róisín y los alumnos toman sopa caliente en una furgoneta que vende comida en la playa. Todos tienen las manos rojas de frío. Una alumna de cincuenta y cinco años se puso de pie en la tabla por primera vez y no deja de sonreír.', en: 'The class is over. Róisín and the students are having hot soup from a food van on the beach. Everyone has red hands from the cold. A fifty-five-year-old student stood up on the board for the first time and can’t stop smiling.' },
          opener: { es: 'Empecé a surfear a los doce años con una tabla rota de mi hermano. En Irlanda la gente piensa que el surf es para Australia o California, pero aquí tenemos olas increíbles y casi nadie en el agua. Mi alumna favorita de hoy tiene cincuenta y cinco años. Nunca es tarde. ¿Qué te gustaría aprender aunque te dé vergüenza?', en: 'I started surfing at twelve with my brother’s broken board. In Ireland people think surfing is for Australia or California, but here we have incredible waves and almost nobody in the water. My favourite student today is fifty-five. It is never too late. What would you like to learn even if it embarrasses you?' },
          decide: {
            ask: { es: 'La alumna de cincuenta y cinco años te pregunta si debe seguir con las clases. ¿Qué le dices?', en: 'The fifty-five-year-old student asks you if she should continue with the classes. What do you tell her?' },
            options: [
              { say: { es: 'Que sí, todas las semanas.', en: 'Yes, every week.' }, then: { es: 'Ella compra un traje nuevo. Róisín le hace un descuento.', en: 'She buys a new wetsuit. Róisín gives her a discount.' } },
              { say: { es: 'Que pruebe en verano, cuando hace menos frío.', en: 'To try in summer, when it is less cold.' }, then: { es: 'Ella dice: «En verano hay demasiada gente. ¡Vuelvo el sábado!».', en: 'She says: “In summer there are too many people. I’m coming back on Saturday!”' } },
              { say: { es: 'Que invite a su marido.', en: 'To invite her husband.' }, then: { es: 'El marido viene la semana siguiente. No se pone de pie nunca, pero se divierte mucho.', en: 'Her husband comes the following week. He never stands up, but he has lots of fun.' } },
            ],
          },
          twist: { es: 'Róisín quiere abrir una escuela de surf solo para mujeres mayores de cuarenta años. Algunos dicen que es discriminación. ¿Qué piensas?', en: 'Róisín wants to open a surf school just for women over forty. Some people say it is discrimination. What do you think?' },
          questions: [
            { q: { es: '¿Qué te gustaría aprender aunque te dé vergüenza?', en: 'What would you like to learn even if it embarrasses you?' }, help: { es: 'Me gustaría aprender a bailar / cantar / nadar…', en: 'I would like to learn to dance / sing / swim…' }, follow: [{ es: '¿Qué te detiene?', en: 'What stops you?' }, { es: '¿Cuándo empiezas?', en: 'When are you starting?' }] },
            { q: { es: '¿A qué edad empezaste tu deporte o hobby favorito?', en: 'At what age did you start your favourite sport or hobby?' }, help: { es: 'Empecé a los…', en: 'I started at…' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Lo sigues haciendo?', en: 'Do you still do it?' }] },
            { q: { es: '¿Qué comes cuando tienes mucho frío?', en: 'What do you eat when you are very cold?' }, help: { es: 'Como sopa / tomo chocolate caliente…', en: 'I have soup / hot chocolate…' }, follow: [{ es: '¿Quién la prepara?', en: 'Who makes it?' }, { es: '¿Tiene una receta especial?', en: 'Does it have a special recipe?' }] },
            { q: { es: '¿Prefieres un lugar tranquilo o un lugar famoso?', en: 'Do you prefer a quiet place or a famous place?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Conoces un lugar secreto?', en: 'Do you know a secret place?' }, { es: '¿Lo compartes?', en: 'Do you share it?' }] },
          ],
          words: [{ es: 'surfear', en: 'to surf' }, { es: 'la vergüenza', en: 'embarrassment' }, { es: 'el descuento', en: 'the discount' }, { es: 'divertirse', en: 'to have fun' }, { es: 'probar', en: 'to try' }],
        },
        A2: {
          scene: { es: 'Es un día de tormenta y la escuela está cerrada. Róisín te invita a su casa, una caravana al lado de la playa. Tiene fotos de olas en todas las paredes y una medalla de un campeonato nacional. Te cuenta por qué dejó de competir.', en: 'It is a stormy day and the school is closed. Róisín invites you to her home, a caravan next to the beach. She has photos of waves on every wall and a medal from a national championship. She tells you why she stopped competing.' },
          opener: { es: 'A los veinticuatro años era la segunda mejor surfista de Irlanda. Tenía patrocinadores y viajaba a Portugal y a Francia. Un día, en una ola enorme, me golpeé contra las rocas y me rompí el hombro. Estuve un año sin entrar al agua. Cuando volví, ya no quería ganar: quería disfrutar. ¿A ti te cambió algo un accidente o una enfermedad?', en: 'At twenty-four I was the second-best surfer in Ireland. I had sponsors and travelled to Portugal and France. One day, on a huge wave, I hit the rocks and broke my shoulder. I spent a year without going into the water. When I came back, I didn’t want to win any more: I wanted to enjoy it. Has an accident or illness ever changed something for you?' },
          decide: {
            ask: { es: 'Una marca le ofrece volver a competir en un campeonato para veteranas. ¿Qué le aconsejas?', en: 'A brand offers her a return to competition in a veterans’ championship. What do you advise her?' },
            options: [
              { say: { es: 'Que acepte, solo por diversión.', en: 'To accept, just for fun.' }, then: { es: 'Róisín compite sin presión y gana. Lo celebra con sus alumnas.', en: 'Róisín competes without pressure and wins. She celebrates with her students.' } },
              { say: { es: 'Que acepte, pero que lleve a sus alumnas como equipo.', en: 'To accept, but take her students as a team.' }, then: { es: 'La marca acepta. Tres alumnas compiten por primera vez.', en: 'The brand agrees. Three students compete for the first time.' } },
              { say: { es: 'Que diga que no: ahora es feliz enseñando.', en: 'To say no: she is happy teaching now.' }, then: { es: 'Róisín cuelga la carta en la pared, al lado de la medalla.', en: 'Róisín hangs the letter on the wall, next to the medal.' } },
            ],
          },
          twist: { es: 'Mientras hablan, alguien llama a la puerta: un chico se metió al mar con la tormenta y no sale. Róisín toma su tabla. ¿Vas con ella o llamas a emergencias?', en: 'While you are talking, someone knocks on the door: a boy has gone into the sea in the storm and can’t get out. Róisín grabs her board. Do you go with her or call emergency services?' },
          questions: [
            { q: { es: '¿Un accidente o una enfermedad te cambió algo?', en: 'Did an accident or illness change something for you?' }, help: { es: 'Sí, después de… empecé a… / No, por suerte.', en: 'Yes, after… I started to… / No, luckily.' }, follow: [{ es: '¿Fue para bien?', en: 'Was it for the better?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Prefieres ganar o disfrutar?', en: 'Do you prefer winning or enjoying?' }, help: { es: 'Prefiero… pero a veces…', en: 'I prefer… but sometimes…' }, follow: [{ es: '¿Siempre fue así?', en: 'Was it always like that?' }, { es: '¿En qué juegas para ganar?', en: 'What do you play to win?' }] },
            { q: { es: '¿Tienes algún premio o recuerdo especial en tu casa?', en: 'Do you have a prize or special souvenir at home?' }, help: { es: 'Tengo una medalla / un diploma / una foto…', en: 'I have a medal / a diploma / a photo…' }, follow: [{ es: '¿Dónde está?', en: 'Where is it?' }, { es: '¿Quién lo ve?', en: 'Who sees it?' }] },
            { q: { es: '¿Vivirías en una caravana al lado del mar?', en: 'Would you live in a caravan by the sea?' }, help: { es: 'Sí, me encantaría. / No, necesito…', en: 'Yes, I would love it. / No, I need…' }, follow: [{ es: '¿Qué llevarías?', en: 'What would you take?' }, { es: '¿Qué dejarías?', en: 'What would you leave behind?' }] },
          ],
          words: [{ es: 'la caravana', en: 'the caravan' }, { es: 'el patrocinador', en: 'the sponsor' }, { es: 'golpearse', en: 'to hit oneself' }, { es: 'el hombro', en: 'the shoulder' }, { es: 'la medalla', en: 'the medal' }],
        },
        B1: {
          scene: { es: 'Una empresa quiere construir una piscina de olas artificiales a quince kilómetros de la playa: olas perfectas todos los días, sin frío ni tormentas, con cafetería y tienda. Ofrece a Róisín ser directora de la escuela, con un sueldo fijo por primera vez en su vida. Sus amigos surfistas dicen que eso no es surf, es un parque de atracciones.', en: 'A company wants to build an artificial wave pool fifteen kilometres from the beach: perfect waves every day, without cold or storms, with a café and a shop. It offers Róisín the job of director of the school, with a fixed salary for the first time in her life. Her surfer friends say that isn’t surfing, it’s an amusement park.' },
          opener: { es: 'En el mar aprendes a esperar, a leer el viento, a tener miedo y respeto. En una piscina aprendes la técnica en la mitad del tiempo, sin peligro. Mis alumnas mayores estarían encantadas: nada de corrientes ni de agua a once grados. Pero sospecho que perderían lo mejor. Tengo cuarenta años, vivo en una caravana y no tengo pensión. ¿Es traición elegir la seguridad?', en: 'In the sea you learn to wait, to read the wind, to feel fear and respect. In a pool you learn technique in half the time, with no danger. My older students would be delighted: no currents and no eleven-degree water. But I suspect they would lose the best part. I am forty, I live in a caravan and I have no pension. Is it betrayal to choose security?' },
          decide: {
            ask: { es: '¿Qué le recomiendas a Róisín?', en: 'What do you recommend to Róisín?' },
            options: [
              { say: { es: 'Aceptar y usar la piscina como primer paso antes de llevar a los alumnos al mar.', en: 'Accept and use the pool as a first step before taking students to the sea.' }, then: { es: 'Diseña un curso que termina siempre en Inch. Sus amigos la critican, pero muchos alumnos llegan al mar.', en: 'She designs a course that always ends at Inch. Her friends criticise her, but many students reach the sea.' } },
              { say: { es: 'Rechazar y buscar ayudas públicas para su escuela en la playa.', en: 'Refuse and look for public funding for her beach school.' }, then: { es: 'Consigue una pequeña ayuda del condado. No es mucho, pero le permite pasar el invierno.', en: 'She gets a small grant from the county. It isn’t much, but it gets her through the winter.' } },
              { say: { es: 'Aceptar solo un contrato de un año para probar.', en: 'Accept only a one-year contract to try it out.' }, then: { es: 'Al final del año ahorró bastante y vuelve a la playa con una furgoneta nueva.', en: 'At the end of the year she has saved quite a lot and goes back to the beach with a new van.' } },
            ],
          },
          twist: { es: 'El proyecto necesita mucha agua y energía, y un informe dice que gastaría lo mismo que un pueblo de tres mil personas. La empresa promete usar energía eólica. ¿Cambia eso tu respuesta?', en: 'The project needs a lot of water and energy, and a report says it would use as much as a village of three thousand people. The company promises to use wind energy. Does that change your answer?' },
          questions: [
            { q: { es: '¿Es traición cambiar tus ideales por seguridad?', en: 'Is it betrayal to change your ideals for security?' }, help: { es: 'No, porque todos necesitamos… / A veces sí, cuando…', en: 'No, because we all need… / Sometimes yes, when…' }, follow: [{ es: '¿Lo hiciste tú?', en: 'Have you done it?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Lo artificial puede reemplazar a lo natural?', en: 'Can the artificial replace the natural?' }, help: { es: 'En algunos casos sí, por ejemplo… / Nunca del todo porque…', en: 'In some cases yes, for example… / Never completely because…' }, follow: [{ es: '¿Qué ejemplo usas tú?', en: 'What example do you use?' }, { es: '¿Lo prefieres?', en: 'Do you prefer it?' }] },
            { q: { es: '¿Qué te da más miedo: no tener dinero o no tener libertad?', en: 'What scares you more: having no money or having no freedom?' }, help: { es: 'Me da más miedo… porque…', en: 'I’m more afraid of… because…' }, follow: [{ es: '¿Siempre pensaste así?', en: 'Have you always thought that?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Aprender sin riesgo es aprender de verdad?', en: 'Is learning without risk really learning?' }, help: { es: 'Creo que el riesgo… / Se puede aprender bien sin…', en: 'I think risk… / You can learn well without…' }, follow: [{ es: '¿Qué aprendiste con un poco de miedo?', en: 'What did you learn with a bit of fear?' }, { es: '¿Lo recomiendas?', en: 'Do you recommend it?' }] },
          ],
          words: [{ es: 'artificial', en: 'artificial' }, { es: 'la corriente', en: 'the current' }, { es: 'el sueldo fijo', en: 'the fixed salary' }, { es: 'la pensión', en: 'the pension' }, { es: 'la traición', en: 'betrayal' }],
        },
      },
    },
    // ------------------------------------------------------------ Dingle
    {
      id: 'dingle',
      name: { es: 'El puerto de Dingle', en: 'Dingle harbour' },
      who: { name: 'Orla', role: { es: 'heladera artesanal', en: 'ice-cream maker' } },
      levels: {
        A0: {
          scene: { es: 'Es un pueblo pequeño con casas de colores. En el puerto hay barcos de pesca. Orla tiene una heladería. Hay helados de muchos sabores.', en: 'It is a small town with colourful houses. In the harbour there are fishing boats. Orla has an ice-cream shop. There are ice creams in many flavours.' },
          opener: { es: '¡Hola! Soy Orla. Hago helados. Hay helado de miel, de pan negro y… ¡de sal del mar! ¿Cuál quieres?', en: 'Hello! I am Orla. I make ice cream. There is honey ice cream, brown bread ice cream and… sea salt! Which one do you want?' },
          decide: {
            ask: { es: '¿Qué sabor eliges?', en: 'Which flavour do you choose?' },
            options: [
              { say: { es: 'Miel.', en: 'Honey.' }, then: { es: 'Es dulce y suave. ¡Muy rico!', en: 'It is sweet and smooth. Very tasty!' } },
              { say: { es: 'Pan negro.', en: 'Brown bread.' }, then: { es: 'Es raro, pero te gusta mucho.', en: 'It is strange, but you like it a lot.' } },
              { say: { es: 'Sal del mar.', en: 'Sea salt.' }, then: { es: 'Orla ríe: «¡Eres valiente!». Es dulce y salado.', en: 'Orla laughs: “You are brave!” It is sweet and salty.' } },
            ],
          },
          twist: { es: 'Hace frío y llueve, pero hay una fila de diez personas. Orla necesita ayuda. ¿La ayudas?', en: 'It is cold and raining, but there is a queue of ten people. Orla needs help. Do you help her?' },
          questions: [
            { q: { es: '¿Te gusta el helado?', en: 'Do you like ice cream?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué sabor?', en: 'Which flavour?' }, { es: '¿Comes helado en invierno?', en: 'Do you eat ice cream in winter?' }] },
            { q: { es: '¿Prefieres dulce o salado?', en: 'Do you prefer sweet or salty?' }, help: { es: 'Prefiero dulce. / Prefiero salado.', en: 'I prefer sweet. / I prefer salty.' }, follow: [{ es: '¿Qué comes de postre?', en: 'What do you eat for dessert?' }, { es: '¿Y para picar?', en: 'And as a snack?' }] },
            { q: { es: '¿Te gustan las casas de colores?', en: 'Do you like colourful houses?' }, help: { es: 'Sí, son bonitas. / No, prefiero blanco.', en: 'Yes, they are pretty. / No, I prefer white.' }, follow: [{ es: '¿De qué color es tu casa?', en: 'What colour is your house?' }, { es: '¿Qué color quieres?', en: 'What colour do you want?' }] },
            { q: { es: '¿Esperas en una fila larga por comida?', en: 'Do you wait in a long queue for food?' }, help: { es: 'Sí, si es buena. / No, nunca.', en: 'Yes, if it is good. / No, never.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Por qué comida?', en: 'For what food?' }] },
          ],
          words: [{ es: 'el helado', en: 'the ice cream' }, { es: 'el sabor', en: 'the flavour' }, { es: 'la miel', en: 'the honey' }, { es: 'salado', en: 'salty' }, { es: 'la fila', en: 'the queue' }],
        },
        A1: {
          scene: { es: 'Es temprano. Orla está en la cocina de la heladería. Hace helado con leche de vacas de Kerry, algas de la playa y ginebra de una destilería del pueblo. En la pared hay una foto de un delfín.', en: 'It is early. Orla is in the ice-cream shop’s kitchen. She makes ice cream with milk from Kerry cows, seaweed from the beach and gin from a local distillery. On the wall there is a photo of a dolphin.' },
          opener: { es: 'Ese es Fungie, el delfín del puerto. Vivió aquí treinta y siete años, solo, y jugaba con los barcos. Todo el pueblo vivía de él: barcos, camisetas, peluches. En dos mil veinte desapareció. Yo hice un helado azul en su honor. ¿Hay un animal famoso en tu ciudad?', en: 'That is Fungie, the harbour dolphin. He lived here for thirty-seven years, alone, and played with the boats. The whole town lived off him: boats, T-shirts, cuddly toys. In 2020 he disappeared. I made a blue ice cream in his honour. Is there a famous animal in your city?' },
          decide: {
            ask: { es: 'Orla quiere crear un sabor nuevo con algo de Kerry. ¿Qué le propones?', en: 'Orla wants to create a new flavour with something from Kerry. What do you suggest?' },
            options: [
              { say: { es: 'Helado de algas.', en: 'Seaweed ice cream.' }, then: { es: 'Es verde y un poco raro. A los turistas les encanta para las fotos.', en: 'It is green and a bit strange. Tourists love it for photos.' } },
              { say: { es: 'Helado de whisky irlandés.', en: 'Irish whiskey ice cream.' }, then: { es: 'Los adultos hacen fila. Orla pone un cartel: «No para niños».', en: 'The adults queue up. Orla puts up a sign: “Not for children.”' } },
              { say: { es: 'Helado de patata.', en: 'Potato ice cream.' }, then: { es: 'Orla te mira seria. Después lo prueba… y no está mal.', en: 'Orla looks at you seriously. Then she tries it… and it’s not bad.' } },
            ],
          },
          twist: { es: 'Una empresa grande quiere vender los helados de Orla en supermercados de toda Irlanda. Tendría que usar leche en polvo. ¿Qué le dices?', en: 'A big company wants to sell Orla’s ice creams in supermarkets all over Ireland. She would have to use powdered milk. What do you tell her?' },
          questions: [
            { q: { es: '¿Hay un animal famoso en tu ciudad o país?', en: 'Is there a famous animal in your city or country?' }, help: { es: 'Sí, el… / No que yo sepa.', en: 'Yes, the… / Not that I know of.' }, follow: [{ es: '¿Por qué es famoso?', en: 'Why is it famous?' }, { es: '¿Lo viste?', en: 'Have you seen it?' }] },
            { q: { es: '¿Cuál es el sabor más raro que probaste?', en: 'What is the strangest flavour you have tried?' }, help: { es: 'Probé un helado / una comida de…', en: 'I tried an ice cream / a food with…' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Dónde fue?', en: 'Where was it?' }] },
            { q: { es: '¿Compras productos de tu región?', en: 'Do you buy products from your region?' }, help: { es: 'Sí, compro… / No, no me fijo.', en: 'Yes, I buy… / No, I don’t pay attention.' }, follow: [{ es: '¿Cuál recomiendas?', en: 'Which do you recommend?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Tendrías un negocio de comida?', en: 'Would you have a food business?' }, help: { es: 'Sí, un café / una panadería… / No, es muy difícil.', en: 'Yes, a café / a bakery… / No, it’s very hard.' }, follow: [{ es: '¿Qué venderías?', en: 'What would you sell?' }, { es: '¿Dónde?', en: 'Where?' }] },
          ],
          words: [{ es: 'las algas', en: 'seaweed' }, { es: 'el delfín', en: 'the dolphin' }, { es: 'desaparecer', en: 'to disappear' }, { es: 'en su honor', en: 'in its honour' }, { es: 'la leche en polvo', en: 'powdered milk' }],
        },
        A2: {
          scene: { es: 'Es el día de San Esteban, el veintiséis de diciembre. Por las calles de Dingle pasan los «wren boys»: grupos con máscaras de paja, tambores y trajes de colores. Orla cierra la heladería y sale con su banda. Antes te cuenta que esta fiesta casi desaparece cuando ella era niña.', en: 'It is St Stephen’s Day, the twenty-sixth of December. The “wren boys” parade through the streets of Dingle: groups with straw masks, drums and colourful costumes. Orla closes the ice-cream shop and goes out with her band. Before that she tells you this festival almost disappeared when she was a child.' },
          opener: { es: 'Cuando yo era pequeña, solo salían unos viejos y nosotros, los niños, teníamos miedo de las máscaras. En los noventa casi no quedaba nadie. Después un grupo de jóvenes la recuperó y ahora vienen miles de personas. Me encanta, pero a veces parece más un espectáculo para turistas que una fiesta nuestra. ¿Hay una fiesta en tu país que cambió mucho?', en: 'When I was little, only a few old men went out and we children were scared of the masks. In the nineties there was hardly anyone left. Then a group of young people revived it and now thousands of people come. I love it, but sometimes it feels more like a show for tourists than our own festival. Is there a festival in your country that has changed a lot?' },
          decide: {
            ask: { es: 'El grupo de Orla necesita una persona más para tocar el tambor. ¿Qué haces?', en: 'Orla’s group needs one more person to play the drum. What do you do?' },
            options: [
              { say: { es: 'Me pongo una máscara y toco.', en: 'I put on a mask and play.' }, then: { es: 'Tocas fuera de ritmo, pero nadie se da cuenta con tanto ruido.', en: 'You play out of rhythm, but nobody notices with so much noise.' } },
              { say: { es: 'Prefiero mirar y grabar un vídeo.', en: 'I prefer to watch and film a video.' }, then: { es: 'Tu vídeo sale perfecto. Orla lo usa en la página de la heladería.', en: 'Your video comes out perfect. Orla uses it on the ice-cream shop’s page.' } },
              { say: { es: 'Le pido que me explique la historia primero.', en: 'I ask her to explain the history first.' }, then: { es: 'Orla te cuenta la leyenda del reyezuelo y te da una máscara pequeña de recuerdo.', en: 'Orla tells you the legend of the wren and gives you a small mask as a souvenir.' } },
            ],
          },
          twist: { es: 'El ayuntamiento quiere cobrar una entrada a los turistas para ver el desfile y así pagar la limpieza. Orla no sabe qué pensar. ¿Qué opinas tú?', en: 'The council wants to charge tourists an entrance fee to see the parade and so pay for the cleaning. Orla doesn’t know what to think. What do you think?' },
          questions: [
            { q: { es: '¿Hay una fiesta en tu país que cambió mucho?', en: 'Is there a festival in your country that has changed a lot?' }, help: { es: 'Sí, antes… y ahora…', en: 'Yes, before… and now…' }, follow: [{ es: '¿Te gusta más ahora o antes?', en: 'Do you like it more now or before?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Qué te daba miedo cuando eras pequeño?', en: 'What scared you when you were little?' }, help: { es: 'Me daban miedo los payasos / la oscuridad…', en: 'I was scared of clowns / the dark…' }, follow: [{ es: '¿Y ahora?', en: 'And now?' }, { es: '¿Cómo lo superaste?', en: 'How did you get over it?' }] },
            { q: { es: '¿Te disfrazaste alguna vez?', en: 'Have you ever dressed up?' }, help: { es: 'Sí, de… para… / No, nunca.', en: 'Yes, as… for… / No, never.' }, follow: [{ es: '¿Quién hizo el disfraz?', en: 'Who made the costume?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
            { q: { es: '¿Pagarías por ver una fiesta tradicional?', en: 'Would you pay to see a traditional festival?' }, help: { es: 'Sí, si el dinero… / No, las fiestas son…', en: 'Yes, if the money… / No, festivals are…' }, follow: [{ es: '¿Cuánto?', en: 'How much?' }, { es: '¿Y los vecinos?', en: 'And the local people?' }] },
          ],
          words: [{ es: 'la máscara', en: 'the mask' }, { es: 'el disfraz', en: 'the costume' }, { es: 'recuperar', en: 'to revive / recover' }, { es: 'el espectáculo', en: 'the show' }, { es: 'darse cuenta', en: 'to notice' }],
        },
        B1: {
          scene: { es: 'Dingle se llena de casas de alquiler para turistas. En verano hay más camas para visitantes que para vecinos. Orla tiene dos empleados jóvenes que no encuentran dónde vivir y duermen en una furgoneta. Ella tiene un piso arriba de la heladería que podría alquilar a turistas por mucho dinero o a sus empleados por muy poco.', en: 'Dingle is filling up with holiday rentals. In summer there are more beds for visitors than for residents. Orla has two young employees who can’t find anywhere to live and are sleeping in a van. She has a flat above the shop that she could rent to tourists for a lot of money or to her employees for very little.' },
          opener: { es: 'Con lo que gano alquilando el piso en julio y agosto pago la hipoteca de todo el año. Si se lo doy a mis empleados, tengo que subir el precio de los helados o despedir a alguien en invierno. Si no se lo doy, se van a ir a Tralee y me quedo sin equipo. Todo el pueblo dice que el problema son los alquileres turísticos, pero casi todos tenemos uno. ¿Quién debería cambiar primero?', en: 'With what I earn renting the flat in July and August I pay the mortgage for the whole year. If I give it to my employees, I have to raise the price of the ice cream or let someone go in winter. If I don’t, they will leave for Tralee and I will lose my team. The whole town says the problem is holiday rentals, but almost all of us have one. Who should change first?' },
          decide: {
            ask: { es: '¿Qué le recomiendas a Orla?', en: 'What do you recommend to Orla?' },
            options: [
              { say: { es: 'Alquilar el piso a sus empleados y explicar a los clientes por qué los helados cuestan más.', en: 'Rent the flat to her employees and explain to customers why the ice cream costs more.' }, then: { es: 'Pone un cartel en la puerta. Muchos clientes dejan propina extra; algunos se quejan.', en: 'She puts a sign on the door. Many customers leave extra tips; some complain.' } },
              { say: { es: 'Alquilarlo a turistas en verano y a los empleados el resto del año.', en: 'Rent it to tourists in summer and to her employees the rest of the year.' }, then: { es: 'Los empleados aceptan, pero en verano tienen que volver a la furgoneta.', en: 'The employees accept, but in summer they have to go back to the van.' } },
              { say: { es: 'Organizar a los comerciantes para pedir un límite a los alquileres turísticos.', en: 'Organise the shop owners to demand a limit on holiday rentals.' }, then: { es: 'La reunión es tensa: muchos viven de esos alquileres. Pero aprueban estudiar el tema.', en: 'The meeting is tense: many live off those rentals. But they agree to look into it.' } },
            ],
          },
          twist: { es: 'Uno de sus empleados le confiesa que, si consigue el piso barato, piensa subalquilar una habitación a turistas para ahorrar. ¿Cambia eso la decisión de Orla?', en: 'One of her employees confesses that, if he gets the cheap flat, he plans to sublet a room to tourists to save money. Does that change Orla’s decision?' },
          questions: [
            { q: { es: '¿El turismo hace la vida más cara en tu ciudad?', en: 'Does tourism make life more expensive in your city?' }, help: { es: 'Sí, sobre todo los alquileres… / No mucho, porque…', en: 'Yes, especially rents… / Not much, because…' }, follow: [{ es: '¿Qué barrio cambió más?', en: 'Which neighbourhood has changed most?' }, { es: '¿Quién gana y quién pierde?', en: 'Who wins and who loses?' }] },
            { q: { es: '¿Alquilarías tu casa a turistas?', en: 'Would you rent your home to tourists?' }, help: { es: 'Sí, para ganar… / No, porque los vecinos…', en: 'Yes, to earn… / No, because the neighbours…' }, follow: [{ es: '¿Lo hiciste?', en: 'Have you done it?' }, { es: '¿Cómo fue?', en: 'How was it?' }] },
            { q: { es: '¿Quién debería resolver el problema de la vivienda?', en: 'Who should solve the housing problem?' }, help: { es: 'El gobierno, porque… / Todos, porque…', en: 'The government, because… / Everyone, because…' }, follow: [{ es: '¿Qué medida tomarías?', en: 'What measure would you take?' }, { es: '¿Funcionaría?', en: 'Would it work?' }] },
            { q: { es: '¿Es fácil para los jóvenes vivir solos en tu país?', en: 'Is it easy for young people to live on their own in your country?' }, help: { es: 'No, la mayoría vive con sus padres hasta… / Sí, bastante.', en: 'No, most live with their parents until… / Yes, quite.' }, follow: [{ es: '¿A qué edad te fuiste tú?', en: 'At what age did you leave?' }, { es: '¿Fue difícil?', en: 'Was it hard?' }] },
          ],
          words: [{ es: 'el alquiler turístico', en: 'the holiday rental' }, { es: 'la hipoteca', en: 'the mortgage' }, { es: 'despedir', en: 'to dismiss / let go' }, { es: 'la propina', en: 'the tip' }, { es: 'subalquilar', en: 'to sublet' }],
        },
      },
    },
  ],
};
