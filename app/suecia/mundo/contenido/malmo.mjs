// Malmö y Escania · a bike courier in the city, the train over the Öresund bridge, the
// old sea baths, a farm among yellow fields and the Möllevången market square. Five
// places, four levels each (A0, A1, A2, B1). Every level is written on its own: same
// place and people, different situations.
export default {
  id: 'malmo',
  spots: [
    // ------------------------------------------------------------ the bike courier
    {
      id: 'bicicleta',
      name: { es: 'La ciudad en bicicleta', en: 'The city by bike' },
      who: { name: 'Linnea', role: { es: 'mensajera en bicicleta', en: 'bike courier' } },
      levels: {
        A0: {
          scene: { es: 'Es una ciudad con muchas bicicletas. Hay carriles para bicis en todas las calles. Linnea es mensajera: lleva paquetes en su bici.', en: 'It is a city with lots of bikes. There are bike lanes on every street. Linnea is a courier: she carries parcels on her bike.' },
          opener: { es: '¡Hola! Soy Linnea. Hago cien kilómetros al día en bici. ¿Tienes bici?', en: 'Hello! I am Linnea. I ride a hundred kilometres a day. Do you have a bike?' },
          decide: {
            ask: { es: 'Linnea tiene tres bicis para alquilar. ¿Cuál quieres?', en: 'Linnea has three bikes to rent. Which one do you want?' },
            options: [
              { say: { es: 'La bici roja, rápida.', en: 'The red, fast bike.' }, then: { es: 'Linnea dice: «¡Cuidado en las curvas!»', en: 'Linnea says: “Careful on the bends!”' } },
              { say: { es: 'La bici con una cesta.', en: 'The bike with a basket.' }, then: { es: 'Linnea dice: «Perfecta para ir al mercado».', en: 'Linnea says: “Perfect for going to the market.”' } },
              { say: { es: 'La bici eléctrica.', en: 'The electric bike.' }, then: { es: 'Linnea dice: «¡Muy cómoda! Pero cuesta más».', en: 'Linnea says: “Very comfortable! But it costs more.”' } },
            ],
          },
          twist: { es: 'Empieza a llover. Linnea dice: «Aquí vamos en bici con lluvia». ¿Qué dices?', en: 'It starts to rain. Linnea says: “Here we cycle in the rain.” What do you say?' },
          questions: [
            { q: { es: '¿Tienes bicicleta?', en: 'Do you have a bike?' }, help: { es: 'Sí, tengo una. / No, no tengo.', en: 'Yes, I have one. / No, I don’t.' }, follow: [{ es: '¿De qué color es?', en: 'What colour is it?' }, { es: '¿Adónde vas en bici?', en: 'Where do you go by bike?' }] },
            { q: { es: '¿Hay carriles para bicis en tu ciudad?', en: 'Are there bike lanes in your city?' }, help: { es: 'Sí, muchos. / No, pocos.', en: 'Yes, lots. / No, few.' }, follow: [{ es: '¿Son seguros?', en: 'Are they safe?' }, { es: '¿Los usas?', en: 'Do you use them?' }] },
            { q: { es: '¿Te gusta hacer deporte?', en: 'Do you like doing sport?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué deporte?', en: 'Which sport?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Qué haces cuando llueve?', en: 'What do you do when it rains?' }, help: { es: 'Me quedo en casa. / Salgo con paraguas.', en: 'I stay at home. / I go out with an umbrella.' }, follow: [{ es: '¿Te gusta la lluvia?', en: 'Do you like the rain?' }, { es: '¿Llueve mucho donde vives?', en: 'Does it rain a lot where you live?' }] },
          ],
          words: [{ es: 'la bicicleta', en: 'the bicycle' }, { es: 'el carril bici', en: 'the bike lane' }, { es: 'el paquete', en: 'the parcel' }, { es: 'la cesta', en: 'the basket' }, { es: 'alquilar', en: 'to rent' }],
        },
        A1: {
          scene: { es: 'Es lunes por la mañana. Linnea tiene veinte paquetes que llevar antes de las doce. Hay mucho viento y empieza a nevar. En Malmö, más de la mitad de la gente va al trabajo en bicicleta, también en invierno.', en: 'It is Monday morning. Linnea has twenty parcels to deliver before twelve. It is very windy and starting to snow. In Malmö, more than half of people cycle to work, even in winter.' },
          opener: { es: 'Mucha gente piensa que en Suecia hace demasiado frío para la bici. Pero aquí decimos: «No hay mal tiempo, solo ropa mala». Yo llevo tres capas, guantes buenos y ruedas especiales para la nieve. ¿Tú irías en bici con nieve?', en: 'Lots of people think it’s too cold in Sweden for cycling. But here we say: “There’s no bad weather, only bad clothing.” I wear three layers, good gloves and special tyres for the snow. Would you cycle in the snow?' },
          decide: {
            ask: { es: 'Linnea tiene un paquete urgente y otro grande. Solo puede llevar uno ahora. ¿Cuál le aconsejas?', en: 'Linnea has an urgent parcel and a big one. She can only take one now. Which do you advise?' },
            options: [
              { say: { es: 'El urgente: son medicinas para una farmacia.', en: 'The urgent one: it’s medicine for a pharmacy.' }, then: { es: 'Llega a tiempo. La farmacéutica le regala unas galletas.', en: 'She arrives on time. The pharmacist gives her some biscuits.' } },
              { say: { es: 'El grande: es una tarta de cumpleaños.', en: 'The big one: it’s a birthday cake.' }, then: { es: 'La tarta llega un poco rota. El niño del cumpleaños dice que así es más divertida.', en: 'The cake arrives a little broken. The birthday boy says it’s more fun like that.' } },
              { say: { es: 'Que llame a un compañero para llevar el otro.', en: 'Call a colleague to take the other one.' }, then: { es: 'Su compañero llega en cinco minutos. Los dos paquetes llegan a tiempo.', en: 'Her colleague arrives in five minutes. Both parcels arrive on time.' } },
            ],
          },
          twist: { es: 'Linnea pincha una rueda en medio de un puente. No tiene otra rueda. ¿Qué haces?', en: 'Linnea gets a puncture in the middle of a bridge. She has no spare tyre. What do you do?' },
          questions: [
            { q: { es: '¿Cómo vas al trabajo o a clase en invierno?', en: 'How do you get to work or class in winter?' }, help: { es: 'Voy en… porque…', en: 'I go by… because…' }, follow: [{ es: '¿Y en verano?', en: 'And in summer?' }, { es: '¿Cuánto tardas?', en: 'How long does it take?' }] },
            { q: { es: '¿Qué ropa llevas cuando hace mal tiempo?', en: 'What do you wear when the weather is bad?' }, help: { es: 'Llevo un abrigo / botas / un chubasquero…', en: 'I wear a coat / boots / a raincoat…' }, follow: [{ es: '¿Tienes ropa especial?', en: 'Do you have special clothes?' }, { es: '¿Dónde la compras?', en: 'Where do you buy it?' }] },
            { q: { es: '¿Haces trabajos con prisa?', en: 'Do you do work in a rush?' }, help: { es: 'Sí, siempre. / No, me gusta ir tranquilo.', en: 'Yes, always. / No, I like to take it easy.' }, follow: [{ es: '¿Cómo te sientes?', en: 'How do you feel?' }, { es: '¿Qué haces para organizarte?', en: 'What do you do to get organised?' }] },
            { q: { es: '¿Has tenido un problema con tu bici o tu coche en la calle?', en: 'Have you had a problem with your bike or car in the street?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Quién te ayudó?', en: 'Who helped you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
          ],
          words: [{ es: 'urgente', en: 'urgent' }, { es: 'la capa', en: 'the layer' }, { es: 'la rueda', en: 'the wheel / tyre' }, { es: 'pinchar', en: 'to get a puncture' }, { es: 'la farmacia', en: 'the pharmacy' }],
        },
        A2: {
          scene: { es: 'La empresa de Linnea quiere cambiar a los mensajeros por pequeños robots que van por la acera. Ya hay diez robots en pruebas. Linnea es la mensajera más rápida de la empresa, pero la jefa le dice que los robots no se cansan ni piden vacaciones.', en: 'Linnea’s company wants to replace couriers with small robots that drive along the pavement. Ten robots are already being tested. Linnea is the company’s fastest courier, but her boss tells her that robots don’t get tired or ask for holidays.' },
          opener: { es: 'Ayer un robot se quedó atascado en la nieve y yo tuve que llevar su paquete. ¡Qué ironía! Me gusta mi trabajo porque soy libre, hago ejercicio y conozco toda la ciudad. No quiero trabajar en una oficina. ¿Tú crees que tu trabajo existirá dentro de diez años?', en: 'Yesterday a robot got stuck in the snow and I had to deliver its parcel. How ironic! I like my job because I’m free, I get exercise and I know the whole city. I don’t want to work in an office. Do you think your job will exist in ten years?' },
          decide: {
            ask: { es: 'La jefa le ofrece a Linnea controlar los robots desde la oficina. ¿Qué le aconsejas?', en: 'Her boss offers Linnea a job controlling the robots from the office. What do you advise her?' },
            options: [
              { say: { es: 'Que acepte: es un trabajo con futuro.', en: 'Accept: it’s a job with a future.' }, then: { es: 'Gana más, pero echa de menos la bici. Los fines de semana hace carreras.', en: 'She earns more, but misses the bike. At weekends she enters races.' } },
              { say: { es: 'Que no acepte y busque otra empresa de mensajería.', en: 'Don’t accept, and look for another courier company.' }, then: { es: 'Encuentra una cooperativa de mensajeros en bici. Son pocos, pero muy unidos.', en: 'She finds a bike courier cooperative. They are few, but very close.' } },
              { say: { es: 'Que proponga trabajar con los robots, para los casos difíciles.', en: 'Suggest working alongside the robots, for the difficult cases.' }, then: { es: 'La jefa acepta. Linnea es ahora «la que rescata a los robots».', en: 'Her boss agrees. Linnea is now “the one who rescues the robots”.' } },
            ],
          },
          twist: { es: 'Unos niños bloquean a un robot en la calle y le ponen un gorro de lana. La gente se ríe. La jefa le pide a Linnea que lo resuelva. ¿Qué hace?', en: 'Some kids block a robot in the street and put a woolly hat on it. People laugh. Her boss asks Linnea to sort it out. What does she do?' },
          questions: [
            { q: { es: '¿Tu trabajo existirá dentro de diez años?', en: 'Will your job exist in ten years?' }, help: { es: 'Creo que sí, porque… / Quizás no, porque…', en: 'I think so, because… / Maybe not, because…' }, follow: [{ es: '¿Qué cambiará?', en: 'What will change?' }, { es: '¿Te preocupa?', en: 'Does it worry you?' }] },
            { q: { es: '¿Has visto robots en la calle o en tiendas?', en: 'Have you seen robots in the street or in shops?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Qué hacían?', en: 'What were they doing?' }, { es: '¿Te gustaron?', en: 'Did you like them?' }] },
            { q: { es: '¿Prefieres trabajar en la calle o en una oficina?', en: 'Do you prefer working outdoors or in an office?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Dónde trabajas ahora?', en: 'Where do you work now?' }, { es: '¿Te gustaría cambiar?', en: 'Would you like to change?' }] },
            { q: { es: '¿Qué es para ti la libertad en el trabajo?', en: 'What does freedom at work mean to you?' }, help: { es: 'Para mí es poder…', en: 'For me it’s being able to…' }, follow: [{ es: '¿La tienes?', en: 'Do you have it?' }, { es: '¿Qué la limita?', en: 'What limits it?' }] },
          ],
          words: [{ es: 'la acera', en: 'the pavement' }, { es: 'atascado', en: 'stuck' }, { es: 'la ironía', en: 'irony' }, { es: 'la mensajería', en: 'the courier service' }, { es: 'bloquear', en: 'to block' }],
        },
        B1: {
          scene: { es: 'Linnea trabaja para una aplicación de reparto. No tiene contrato: cobra por cada pedido, no tiene vacaciones pagadas y si se lesiona no cobra nada. La semana pasada un compañero tuvo un accidente y la aplicación ni siquiera llamó para preguntar. Los mensajeros quieren organizarse.', en: 'Linnea works for a delivery app. She has no contract: she’s paid per order, has no paid holidays and if she gets injured she earns nothing. Last week a colleague had an accident and the app didn’t even call to ask how he was. The couriers want to organise.' },
          opener: { es: 'La aplicación dice que somos «emprendedores libres». Pero no elegimos los precios, ni las rutas, ni los horarios. Es libertad para la empresa, no para nosotros. Al mismo tiempo, mucha gente usa estas aplicaciones porque no encuentra otro trabajo. Si protestamos, quizás la empresa se va de la ciudad. ¿Vale la pena arriesgarse?', en: 'The app says we are “free entrepreneurs”. But we don’t choose the prices, the routes or the hours. It’s freedom for the company, not for us. At the same time, lots of people use these apps because they can’t find other work. If we protest, maybe the company leaves the city. Is it worth the risk?' },
          decide: {
            ask: { es: 'Los mensajeros votan qué hacer. ¿Qué debería apoyar Linnea?', en: 'The couriers are voting on what to do. What should Linnea support?' },
            options: [
              { say: { es: 'Una huelga de un día en hora punta.', en: 'A one-day strike at peak time.' }, then: { es: 'Los restaurantes se quedan sin repartos. La aplicación promete un seguro de accidentes.', en: 'Restaurants are left without deliveries. The app promises accident insurance.' } },
              { say: { es: 'Crear una cooperativa propia con una aplicación local.', en: 'Create their own cooperative with a local app.' }, then: { es: 'Es difícil competir, pero veinte restaurantes del barrio se unen.', en: 'It’s hard to compete, but twenty local restaurants join.' } },
              { say: { es: 'Ir a los tribunales para que les reconozcan como trabajadores.', en: 'Go to court to be recognised as employees.' }, then: { es: 'El juicio dura dos años. La sentencia cambia las reglas en todo el país.', en: 'The case lasts two years. The ruling changes the rules nationwide.' } },
            ],
          },
          twist: { es: 'La aplicación ofrece a Linnea un puesto de «coordinadora» muy bien pagado si deja de organizar a los mensajeros. ¿Debería aceptar?', en: 'The app offers Linnea a very well-paid “coordinator” job if she stops organising the couriers. Should she accept?' },
          questions: [
            { q: { es: '¿Usas aplicaciones de reparto?', en: 'Do you use delivery apps?' }, help: { es: 'Sí, a menudo. / No, porque…', en: 'Yes, often. / No, because…' }, follow: [{ es: '¿Sabes cuánto cobra el repartidor?', en: 'Do you know how much the courier earns?' }, { es: '¿Das propina?', en: 'Do you tip?' }] },
            { q: { es: '¿Trabajar sin contrato puede ser bueno para alguien?', en: 'Can working without a contract be good for someone?' }, help: { es: 'Sí, para… / No, nunca, porque…', en: 'Yes, for… / No, never, because…' }, follow: [{ es: '¿Lo has hecho?', en: 'Have you done it?' }, { es: '¿Cómo fue?', en: 'How was it?' }] },
            { q: { es: '¿Aceptarías un ascenso a cambio de dejar de defender a tus compañeros?', en: 'Would you accept a promotion in exchange for no longer standing up for your colleagues?' }, help: { es: 'No, porque… / Depende…', en: 'No, because… / It depends…' }, follow: [{ es: '¿Qué dirían tus compañeros?', en: 'What would your colleagues say?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Las protestas sirven para cambiar las cosas?', en: 'Do protests help change things?' }, help: { es: 'A veces, si… / Pocas veces, porque…', en: 'Sometimes, if… / Rarely, because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Has participado en una?', en: 'Have you taken part in one?' }] },
          ],
          words: [{ es: 'el reparto', en: 'delivery' }, { es: 'el pedido', en: 'the order' }, { es: 'lesionarse', en: 'to get injured' }, { es: 'el emprendedor', en: 'the entrepreneur' }, { es: 'la sentencia', en: 'the ruling' }],
        },
      },
    },
    // ------------------------------------------------------------ the Öresund bridge train
    {
      id: 'puente',
      name: { es: 'El tren del puente de Öresund', en: 'The Öresund bridge train' },
      who: { name: 'Mikael', role: { es: 'revisor del tren', en: 'train conductor' } },
      levels: {
        A0: {
          scene: { es: 'Es un tren rápido. Va por un puente muy largo sobre el mar. Al otro lado está Copenhague, en Dinamarca. Mikael es el revisor.', en: 'It is a fast train. It goes over a very long bridge above the sea. On the other side is Copenhagen, in Denmark. Mikael is the conductor.' },
          opener: { es: '¡Hola! Soy Mikael. ¿Tienes billete? En veinte minutos estamos en otro país.', en: 'Hello! I am Mikael. Do you have a ticket? In twenty minutes we are in another country.' },
          decide: {
            ask: { es: 'Mikael te pregunta. ¿Qué dices?', en: 'Mikael asks you. What do you say?' },
            options: [
              { say: { es: 'Sí, aquí está mi billete.', en: 'Yes, here is my ticket.' }, then: { es: 'Mikael dice: «Gracias. ¡Buen viaje!»', en: 'Mikael says: “Thank you. Have a good trip!”' } },
              { say: { es: 'Está en mi móvil.', en: 'It is on my phone.' }, then: { es: 'Mikael dice: «Perfecto. ¿Y tu pasaporte?»', en: 'Mikael says: “Perfect. And your passport?”' } },
              { say: { es: 'No tengo billete. ¿Puedo comprarlo aquí?', en: 'I don’t have a ticket. Can I buy it here?' }, then: { es: 'Mikael dice: «Sí, pero es más caro».', en: 'Mikael says: “Yes, but it is more expensive.”' } },
            ],
          },
          twist: { es: 'Por la ventana ves el mar y muchos molinos de viento blancos. ¿Qué dices?', en: 'Through the window you see the sea and lots of white wind turbines. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta viajar en tren?', en: 'Do you like travelling by train?' }, help: { es: 'Sí, mucho. / No, prefiero el coche.', en: 'Yes, a lot. / No, I prefer the car.' }, follow: [{ es: '¿Adónde vas?', en: 'Where do you go?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Has viajado a otro país?', en: 'Have you travelled to another country?' }, help: { es: 'Sí, a… / No, nunca.', en: 'Yes, to… / No, never.' }, follow: [{ es: '¿Cómo?', en: 'How?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Hay un puente famoso en tu ciudad?', en: 'Is there a famous bridge in your city?' }, help: { es: 'Sí, se llama… / No.', en: 'Yes, it’s called… / No.' }, follow: [{ es: '¿Es largo?', en: 'Is it long?' }, { es: '¿Lo cruzas?', en: 'Do you cross it?' }] },
            { q: { es: '¿Qué ves por la ventana de tu casa?', en: 'What do you see from your home window?' }, help: { es: 'Veo la calle / un parque / el mar…', en: 'I see the street / a park / the sea…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué te gustaría ver?', en: 'What would you like to see?' }] },
          ],
          words: [{ es: 'el puente', en: 'the bridge' }, { es: 'el revisor', en: 'the conductor (train)' }, { es: 'el billete', en: 'the ticket' }, { es: 'el pasaporte', en: 'the passport' }, { es: 'el molino de viento', en: 'the wind turbine' }],
        },
        A1: {
          scene: { es: 'Es lunes a las siete de la mañana. El tren va lleno de personas que viven en Suecia y trabajan en Dinamarca, o al revés. Mikael conoce a muchos de ellos: los ve todos los días. Hoy el tren lleva quince minutos de retraso por el viento.', en: 'It is Monday at seven in the morning. The train is full of people who live in Sweden and work in Denmark, or the other way round. Mikael knows many of them: he sees them every day. Today the train is fifteen minutes late because of the wind.' },
          opener: { es: 'Muchos de mis pasajeros cruzan una frontera dos veces al día. Viven en Malmö porque los pisos son más baratos y trabajan en Copenhague porque pagan mejor. Hablan sueco en casa y danés en el trabajo. ¿Tú harías un viaje así cada día?', en: 'Many of my passengers cross a border twice a day. They live in Malmö because flats are cheaper and work in Copenhagen because the pay is better. They speak Swedish at home and Danish at work. Would you make a trip like that every day?' },
          decide: {
            ask: { es: 'Un pasajero está muy enfadado por el retraso: tiene una reunión importante. ¿Qué hace Mikael?', en: 'A passenger is very angry about the delay: he has an important meeting. What does Mikael do?' },
            options: [
              { say: { es: 'Le explica con calma lo del viento y le da un papel para su jefe.', en: 'He calmly explains about the wind and gives him a note for his boss.' }, then: { es: 'El pasajero se tranquiliza. Su jefe también llega tarde, en el mismo tren.', en: 'The passenger calms down. His boss is also late, on the same train.' } },
              { say: { es: 'Le ofrece un café gratis.', en: 'He offers him a free coffee.' }, then: { es: 'El café no arregla el retraso, pero el pasajero sonríe un poco.', en: 'The coffee doesn’t fix the delay, but the passenger smiles a little.' } },
              { say: { es: 'Le dice que no es culpa suya y sigue trabajando.', en: 'He tells him it’s not his fault and keeps working.' }, then: { es: 'El pasajero escribe una queja. Mikael no está preocupado.', en: 'The passenger writes a complaint. Mikael isn’t worried.' } },
            ],
          },
          twist: { es: 'Un niño viaja solo y no sabe en qué estación bajar. Tiene un papel con una dirección de Copenhague. ¿Qué haces?', en: 'A child is travelling alone and doesn’t know which station to get off at. He has a piece of paper with an address in Copenhagen. What do you do?' },
          questions: [
            { q: { es: '¿Cuánto tiempo tardas en ir al trabajo o a clase?', en: 'How long does it take you to get to work or class?' }, help: { es: 'Tardo… minutos en…', en: 'It takes me… minutes by…' }, follow: [{ es: '¿Es mucho?', en: 'Is that a lot?' }, { es: '¿Qué haces en el viaje?', en: 'What do you do on the way?' }] },
            { q: { es: '¿Hablas un idioma en casa y otro en el trabajo?', en: 'Do you speak one language at home and another at work?' }, help: { es: 'Sí, hablo… en casa y… en el trabajo. / No.', en: 'Yes, I speak… at home and… at work. / No.' }, follow: [{ es: '¿Es difícil?', en: 'Is it difficult?' }, { es: '¿Cuál prefieres?', en: 'Which do you prefer?' }] },
            { q: { es: '¿Te enfadas cuando el transporte llega tarde?', en: 'Do you get angry when transport is late?' }, help: { es: 'Sí, mucho. / No, me da igual.', en: 'Yes, very. / No, I don’t mind.' }, follow: [{ es: '¿Pasa mucho donde vives?', en: 'Does it happen a lot where you live?' }, { es: '¿Qué haces?', en: 'What do you do?' }] },
            { q: { es: '¿Viajabas solo de niño?', en: 'Did you travel alone as a child?' }, help: { es: 'Sí, a los… años. / No, nunca.', en: 'Yes, at… years old. / No, never.' }, follow: [{ es: '¿Adónde?', en: 'Where to?' }, { es: '¿Tenías miedo?', en: 'Were you scared?' }] },
          ],
          words: [{ es: 'la frontera', en: 'the border' }, { es: 'el retraso', en: 'the delay' }, { es: 'al revés', en: 'the other way round' }, { es: 'la queja', en: 'the complaint' }, { es: 'cruzar', en: 'to cross' }],
        },
        A2: {
          scene: { es: 'Durante unos meses, Suecia ha vuelto a controlar los pasaportes en la frontera por razones de seguridad. Ahora cada viaje tarda cuarenta minutos más. Muchos pasajeros de Mikael están cansados y algunos piensan dejar su trabajo en Copenhague.', en: 'For a few months, Sweden has brought back passport checks at the border for security reasons. Now every journey takes forty minutes longer. Many of Mikael’s passengers are tired and some are thinking about leaving their jobs in Copenhagen.' },
          opener: { es: 'Cuando abrieron el puente en el año 2000, la gente decía que Malmö y Copenhague serían una sola ciudad. Durante años lo fueron. Ahora, con los controles, parece que volvemos atrás. Entiendo la seguridad, pero veo a madres que llegan tarde a recoger a sus hijos todos los días. ¿Las fronteras deberían existir?', en: 'When they opened the bridge in 2000, people said Malmö and Copenhagen would become one city. For years they were. Now, with the checks, it feels like we’re going backwards. I understand security, but I see mothers arriving late to pick up their children every day. Should borders exist?' },
          decide: {
            ask: { es: 'Una pasajera, Hanna, piensa dejar su trabajo en Dinamarca. Le pregunta a Mikael. ¿Qué le aconsejas?', en: 'A passenger, Hanna, is thinking about leaving her job in Denmark. She asks Mikael. What do you advise her?' },
            options: [
              { say: { es: 'Que espere: los controles no duran para siempre.', en: 'Wait: the checks won’t last forever.' }, then: { es: 'Seis meses después, quitan los controles. Hanna está contenta de haber esperado.', en: 'Six months later, the checks are removed. Hanna is glad she waited.' } },
              { say: { es: 'Que pida trabajar desde casa algunos días.', en: 'Ask to work from home some days.' }, then: { es: 'Su empresa acepta dos días por semana. El viaje ya no es tan duro.', en: 'Her company agrees to two days a week. The commute isn’t so hard anymore.' } },
              { say: { es: 'Que se mude a Copenhague.', en: 'Move to Copenhagen.' }, then: { es: 'El piso es muy caro, pero tiene más tiempo libre. Echa de menos Malmö.', en: 'The flat is very expensive, but she has more free time. She misses Malmö.' } },
            ],
          },
          twist: { es: 'En un control, la policía no deja pasar a un pasajero que ha olvidado su pasaporte. Llora porque es el día de la operación de su madre en Copenhague. ¿Qué puede hacer Mikael?', en: 'At a check, the police won’t let a passenger through who has forgotten his passport. He’s crying because it’s the day of his mother’s operation in Copenhagen. What can Mikael do?' },
          questions: [
            { q: { es: '¿Has tenido problemas en una frontera?', en: 'Have you had problems at a border?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
            { q: { es: '¿Trabajarías en un país y vivirías en otro?', en: 'Would you work in one country and live in another?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿En qué países?', en: 'Which countries?' }, { es: '¿Cuánto viajarías?', en: 'How far would you commute?' }] },
            { q: { es: '¿Qué es más importante: la seguridad o la libertad de moverse?', en: 'What’s more important: security or freedom of movement?' }, help: { es: 'Para mí… porque…', en: 'For me… because…' }, follow: [{ es: '¿Ha cambiado tu opinión?', en: 'Has your opinion changed?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Hay dos ciudades cercanas en tu país que compiten o colaboran?', en: 'Are there two nearby cities in your country that compete or cooperate?' }, help: { es: 'Sí, … y … / No que yo sepa.', en: 'Yes, … and … / Not that I know of.' }, follow: [{ es: '¿Cómo se llevan?', en: 'How do they get along?' }, { es: '¿Cuál prefieres?', en: 'Which do you prefer?' }] },
          ],
          words: [{ es: 'el control', en: 'the check' }, { es: 'la seguridad', en: 'security' }, { es: 'volver atrás', en: 'to go backwards' }, { es: 'recoger', en: 'to pick up' }, { es: 'la operación', en: 'the operation (surgery)' }],
        },
        B1: {
          scene: { es: 'Una noche, en el último tren, Mikael encuentra a un hombre joven escondido en el baño, sin billete y sin pasaporte. Le dice que huye de la guerra y que su hermano lo espera en Suecia. Si Mikael lo denuncia, lo devolverán a Dinamarca. Si no lo hace, puede perder su trabajo.', en: 'One night, on the last train, Mikael finds a young man hiding in the toilet, with no ticket and no passport. He says he’s fleeing war and that his brother is waiting for him in Sweden. If Mikael reports him, he’ll be sent back to Denmark. If he doesn’t, he could lose his job.' },
          opener: { es: 'Mi trabajo es comprobar billetes y avisar a la policía en estos casos. Son las normas, y las entiendo. Pero tengo delante a un chico de la edad de mi hijo, temblando de frío y de miedo. No sé si me está diciendo la verdad. Tengo diez minutos antes de llegar a Malmö. ¿Qué harías tú?', en: 'My job is to check tickets and inform the police in these cases. Those are the rules, and I understand them. But in front of me is a boy my son’s age, shaking with cold and fear. I don’t know if he’s telling me the truth. I have ten minutes before we reach Malmö. What would you do?' },
          decide: {
            ask: { es: 'Mikael tiene que decidir antes de llegar. ¿Qué debería hacer?', en: 'Mikael has to decide before arriving. What should he do?' },
            options: [
              { say: { es: 'Seguir las normas y avisar a la policía.', en: 'Follow the rules and inform the police.' }, then: { es: 'La policía se lleva al chico. Mikael no duerme esa noche, pero sabe que hizo lo que debía.', en: 'The police take the boy away. Mikael doesn’t sleep that night, but knows he did what he had to.' } },
              { say: { es: 'Avisar a la policía, pero ayudarle a pedir asilo legalmente.', en: 'Inform the police, but help him apply for asylum legally.' }, then: { es: 'Mikael llama a una organización de ayuda. El chico puede pedir asilo en Suecia.', en: 'Mikael calls an aid organisation. The boy is able to apply for asylum in Sweden.' } },
              { say: { es: 'No decir nada y dejarlo bajar en Malmö.', en: 'Say nothing and let him get off in Malmö.' }, then: { es: 'El chico baja y desaparece. Mikael nunca sabrá qué fue de él.', en: 'The boy gets off and disappears. Mikael will never know what happened to him.' } },
            ],
          },
          twist: { es: 'Una pasajera ha grabado toda la escena con el móvil y la quiere publicar. ¿Qué debería decirle Mikael?', en: 'A passenger has filmed the whole scene on her phone and wants to post it. What should Mikael tell her?' },
          questions: [
            { q: { es: '¿Alguna vez has tenido que elegir entre una norma y tu conciencia?', en: 'Have you ever had to choose between a rule and your conscience?' }, help: { es: 'Sí, una vez… / Creo que no.', en: 'Yes, once… / I don’t think so.' }, follow: [{ es: '¿Qué elegiste?', en: 'What did you choose?' }, { es: '¿Lo harías igual?', en: 'Would you do the same?' }] },
            { q: { es: '¿Cómo se trata a las personas refugiadas en tu país?', en: 'How are refugees treated in your country?' }, help: { es: 'Creo que… / Depende de…', en: 'I think… / It depends on…' }, follow: [{ es: '¿Ha cambiado en los últimos años?', en: 'Has it changed in recent years?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Es responsable un trabajador de lo que pasa por cumplir las normas?', en: 'Is a worker responsible for what happens because they followed the rules?' }, help: { es: 'Sí, en parte, porque… / No, porque…', en: 'Yes, partly, because… / No, because…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Y los jefes?', en: 'And the bosses?' }] },
            { q: { es: '¿Está bien grabar y publicar escenas de personas en apuros?', en: 'Is it right to film and post scenes of people in trouble?' }, help: { es: 'A veces sí, porque… / No, porque…', en: 'Sometimes, because… / No, because…' }, follow: [{ es: '¿Lo has hecho?', en: 'Have you done it?' }, { es: '¿Qué límites pondrías?', en: 'What limits would you set?' }] },
          ],
          words: [{ es: 'esconderse', en: 'to hide' }, { es: 'huir', en: 'to flee' }, { es: 'temblar', en: 'to shake, tremble' }, { es: 'pedir asilo', en: 'to apply for asylum' }, { es: 'la conciencia', en: 'the conscience' }],
        },
      },
    },
    // ------------------------------------------------------------ the sea baths
    {
      id: 'kallbadhus',
      name: { es: 'Los baños fríos de Ribersborg', en: 'The Ribersborg cold baths' },
      who: { name: 'Birgitta', role: { es: 'bañista de invierno', en: 'winter swimmer' } },
      levels: {
        A0: {
          scene: { es: 'Es una casa de madera sobre el mar. Hay sauna y escaleras para bajar al agua. El agua está muy fría. Birgitta tiene setenta y ocho años y nada todos los días.', en: 'It is a wooden house above the sea. There is a sauna and steps down to the water. The water is very cold. Birgitta is seventy-eight and swims every day.' },
          opener: { es: '¡Hola! Soy Birgitta. Nado aquí todos los días, también en invierno. ¿Nadas conmigo?', en: 'Hello! I am Birgitta. I swim here every day, also in winter. Will you swim with me?' },
          decide: {
            ask: { es: 'Birgitta te invita. ¿Qué haces?', en: 'Birgitta invites you. What do you do?' },
            options: [
              { say: { es: 'Sí, nado con ella.', en: 'Yes, I swim with her.' }, then: { es: 'Birgitta dice: «¡Bravo! El agua está a tres grados».', en: 'Birgitta says: “Bravo! The water is three degrees.”' } },
              { say: { es: 'Primero, la sauna.', en: 'First, the sauna.' }, then: { es: 'Birgitta dice: «Buena idea. Diez minutos de calor».', en: 'Birgitta says: “Good idea. Ten minutes of heat.”' } },
              { say: { es: 'No, gracias. Solo miro.', en: 'No, thank you. I’ll just watch.' }, then: { es: 'Birgitta se ríe: «¡Mañana!»', en: 'Birgitta laughs: “Tomorrow!”' } },
            ],
          },
          twist: { es: 'Birgitta sale del agua muy contenta. «¡Me siento joven!» ¿Qué dices?', en: 'Birgitta gets out of the water very happy. “I feel young!” What do you say?' },
          questions: [
            { q: { es: '¿Sabes nadar?', en: 'Can you swim?' }, help: { es: 'Sí, sé nadar. / No, no sé.', en: 'Yes, I can. / No, I can’t.' }, follow: [{ es: '¿Dónde nadas?', en: 'Where do you swim?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Haces algo todos los días?', en: 'Do you do something every day?' }, help: { es: 'Sí, camino / leo / corro…', en: 'Yes, I walk / read / run…' }, follow: [{ es: '¿A qué hora?', en: 'At what time?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
            { q: { es: '¿Tus abuelos hacen deporte?', en: 'Do your grandparents do sport?' }, help: { es: 'Sí, mi abuela… / No.', en: 'Yes, my grandmother… / No.' }, follow: [{ es: '¿Qué deporte?', en: 'Which sport?' }, { es: '¿Cuántos años tienen?', en: 'How old are they?' }] },
            { q: { es: '¿Te bañas en el mar en invierno?', en: 'Do you swim in the sea in winter?' }, help: { es: 'Sí, a veces. / ¡No, nunca!', en: 'Yes, sometimes. / No, never!' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Probarías?', en: 'Would you try?' }] },
          ],
          words: [{ es: 'nadar', en: 'to swim' }, { es: 'la escalera', en: 'the steps, stairs' }, { es: 'el grado', en: 'the degree' }, { es: 'joven', en: 'young' }, { es: 'mirar', en: 'to watch, look' }],
        },
        A1: {
          scene: { es: 'Es enero. Fuera hace dos grados y sopla un viento muy fuerte. En los baños hay un grupo de mujeres mayores que vienen juntas desde hace treinta años. Se llaman a sí mismas «las focas».', en: 'It is January. Outside it is two degrees and a very strong wind is blowing. At the baths there is a group of older women who have been coming together for thirty years. They call themselves “the seals”.' },
          opener: { es: 'Las focas nos conocimos aquí. Algunas eran maestras, otras enfermeras, una era taxista. Ahora somos abuelas y seguimos viniendo cada mañana. El agua fría nos despierta y la sauna nos hace hablar. ¿Tú tienes un grupo de amigos de hace muchos años?', en: 'We “seals” met here. Some were teachers, others nurses, one was a taxi driver. Now we are grandmothers and we still come every morning. The cold water wakes us up and the sauna gets us talking. Do you have a group of friends from many years ago?' },
          decide: {
            ask: { es: 'Las focas te invitan a su desayuno después del baño. ¿Qué llevas?', en: 'The seals invite you to their breakfast after the swim. What do you bring?' },
            options: [
              { say: { es: 'Pan recién hecho de la panadería.', en: 'Freshly baked bread from the bakery.' }, then: { es: 'Las focas aplauden. Una pregunta dónde está la panadería.', en: 'The seals applaud. One asks where the bakery is.' } },
              { say: { es: 'Un termo de café muy caliente.', en: 'A flask of very hot coffee.' }, then: { es: 'Es lo mejor después del agua fría. Te nombran «foca de honor».', en: 'It’s the best thing after cold water. They name you an “honorary seal”.' } },
              { say: { es: 'Fruta de mi país.', en: 'Fruit from my country.' }, then: { es: 'Nadie conoce esa fruta. Todas quieren probarla.', en: 'Nobody knows that fruit. They all want to try it.' } },
            ],
          },
          twist: { es: 'Una de las focas no ha venido hoy. Nunca falta. Las demás están preocupadas. ¿Qué haces?', en: 'One of the seals hasn’t come today. She never misses a day. The others are worried. What do you do?' },
          questions: [
            { q: { es: '¿Tienes amigos de hace muchos años?', en: 'Do you have friends from many years ago?' }, help: { es: 'Sí, desde el colegio. / No muchos.', en: 'Yes, since school. / Not many.' }, follow: [{ es: '¿Cómo os conocisteis?', en: 'How did you meet?' }, { es: '¿Os veis a menudo?', en: 'Do you see each other often?' }] },
            { q: { es: '¿Tu grupo de amigos tiene un nombre?', en: 'Does your group of friends have a name?' }, help: { es: 'Sí, nos llamamos… / No.', en: 'Yes, we call ourselves… / No.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué hacéis juntos?', en: 'What do you do together?' }] },
            { q: { es: '¿Qué desayunas los fines de semana?', en: 'What do you have for breakfast at weekends?' }, help: { es: 'Desayuno…', en: 'I have…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Es diferente de entre semana?', en: 'Is it different from weekdays?' }] },
            { q: { es: '¿Qué haces si un amigo no contesta en todo el día?', en: 'What do you do if a friend doesn’t answer all day?' }, help: { es: 'Le llamo / voy a su casa / espero…', en: 'I call them / go to their house / wait…' }, follow: [{ es: '¿Te ha pasado?', en: 'Has it happened to you?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
          ],
          words: [{ es: 'soplar', en: 'to blow (wind)' }, { es: 'la foca', en: 'the seal' }, { es: 'el termo', en: 'the flask' }, { es: 'faltar', en: 'to be missing, miss' }, { es: 'la enfermera', en: 'the nurse' }],
        },
        A2: {
          scene: { es: 'Los baños son de 1898 y necesitan una reparación muy cara. El ayuntamiento quiere convertirlos en un spa moderno de lujo. La entrada costaría cinco veces más. Las focas, que pagan muy poco con su abono de jubiladas, tienen miedo de perder su lugar.', en: 'The baths date from 1898 and need a very expensive repair. The council wants to turn them into a modern luxury spa. Entry would cost five times as much. The seals, who pay very little with their pensioners’ pass, are afraid of losing their place.' },
          opener: { es: 'Este lugar me salvó cuando murió mi marido. No quería salir de casa, y una vecina me trajo aquí casi a la fuerza. El agua fría me devolvió las ganas de vivir. Ahora quieren hacer un spa para gente con dinero. ¿Hay un lugar que te ayudó en un momento difícil?', en: 'This place saved me when my husband died. I didn’t want to leave the house, and a neighbour brought me here almost by force. The cold water gave me back the will to live. Now they want to make a spa for people with money. Is there a place that helped you at a difficult time?' },
          decide: {
            ask: { es: 'Las focas quieren hacer algo. ¿Qué le aconsejas a Birgitta?', en: 'The seals want to do something. What do you advise Birgitta?' },
            options: [
              { say: { es: 'Recoger dinero entre los bañistas para la reparación.', en: 'Raise money among the swimmers for the repair.' }, then: { es: 'Consiguen la mitad del dinero. El ayuntamiento pone el resto.', en: 'They raise half the money. The council puts in the rest.' } },
              { say: { es: 'Hablar con los periódicos y la televisión.', en: 'Talk to the newspapers and TV.' }, then: { es: 'Las focas salen en las noticias en bañador. Todo el país las conoce.', en: 'The seals appear on the news in their swimsuits. The whole country knows them.' } },
              { say: { es: 'Aceptar el spa, pero pedir precios especiales para mayores.', en: 'Accept the spa, but ask for special prices for older people.' }, then: { es: 'El ayuntamiento acepta un precio reducido por las mañanas. No es lo mismo, pero sigue.', en: 'The council agrees to a reduced price in the mornings. It’s not the same, but it continues.' } },
            ],
          },
          twist: { es: 'Un empresario rico, que nada aquí desde niño, ofrece pagar toda la reparación si le dejan poner su nombre en la entrada. ¿Qué piensa Birgitta?', en: 'A wealthy businessman, who has swum here since childhood, offers to pay for the entire repair if they let him put his name on the entrance. What does Birgitta think?' },
          questions: [
            { q: { es: '¿Hay un lugar que te ayudó en un momento difícil?', en: 'Is there a place that helped you at a difficult time?' }, help: { es: 'Sí, el / la… porque… / No.', en: 'Yes, the… because… / No.' }, follow: [{ es: '¿Vuelves allí?', en: 'Do you go back there?' }, { es: '¿Qué tiene de especial?', en: 'What’s special about it?' }] },
            { q: { es: '¿Los servicios públicos deberían ser baratos para los mayores?', en: 'Should public services be cheap for older people?' }, help: { es: 'Sí, porque… / Depende de…', en: 'Yes, because… / It depends on…' }, follow: [{ es: '¿Y para los jóvenes?', en: 'And for young people?' }, { es: '¿Cómo es en tu país?', en: 'What is it like in your country?' }] },
            { q: { es: '¿Has dado dinero para salvar un lugar o un proyecto?', en: 'Have you given money to save a place or a project?' }, help: { es: 'Sí, para… / No, nunca.', en: 'Yes, for… / No, never.' }, follow: [{ es: '¿Funcionó?', en: 'Did it work?' }, { es: '¿Lo volverías a hacer?', en: 'Would you do it again?' }] },
            { q: { es: '¿Te gustan los lugares antiguos o los modernos?', en: 'Do you like old or modern places?' }, help: { es: 'Prefiero los… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Tienes un ejemplo?', en: 'Do you have an example?' }, { es: '¿Dónde vives tú?', en: 'Where do you live?' }] },
          ],
          words: [{ es: 'la reparación', en: 'the repair' }, { es: 'el abono', en: 'the pass, season ticket' }, { es: 'a la fuerza', en: 'by force' }, { es: 'las ganas de vivir', en: 'the will to live' }, { es: 'el bañador', en: 'the swimsuit' }],
        },
        B1: {
          scene: { es: 'Un estudio científico dice que el agua del mar cerca de Malmö está más contaminada de lo que se pensaba, por los barcos y las fábricas de la costa. Recomienda no bañarse algunos días. Las focas dicen que llevan cuarenta años bañándose y están perfectamente. El ayuntamiento duda si cerrar los baños.', en: 'A scientific study says the sea water near Malmö is more polluted than thought, because of ships and coastal factories. It recommends not swimming on some days. The seals say they’ve been swimming for forty years and are perfectly fine. The council is unsure whether to close the baths.' },
          opener: { es: 'Yo me fío más de mi cuerpo que de un estudio. Pero mi nieta es bióloga y me dice que eso es lo que decía la gente que fumaba. Me molesta que tenga razón. El problema no son los baños: son los barcos y las fábricas. ¿Por qué cerrar el lugar de las abuelas y no la fábrica que contamina?', en: 'I trust my body more than a study. But my granddaughter is a biologist and she tells me that’s what smokers used to say. It annoys me that she’s right. The problem isn’t the baths: it’s the ships and the factories. Why close the grandmothers’ place and not the factory that pollutes?' },
          decide: {
            ask: { es: 'Birgitta va a hablar en la reunión del ayuntamiento. ¿Qué debería pedir?', en: 'Birgitta is going to speak at the council meeting. What should she ask for?' },
            options: [
              { say: { es: 'Que los baños sigan abiertos con un aviso diario sobre el agua.', en: 'That the baths stay open with a daily notice about the water.' }, then: { es: 'Se pone un panel con el estado del agua. Las focas lo miran cada mañana.', en: 'A board showing the water quality is put up. The seals check it every morning.' } },
              { say: { es: 'Que se investigue y se multe a las fábricas que contaminan.', en: 'That the polluting factories are investigated and fined.' }, then: { es: 'La investigación dura un año. Dos fábricas tienen que cambiar sus sistemas.', en: 'The investigation takes a year. Two factories have to change their systems.' } },
              { say: { es: 'Que cada bañista decida bajo su propia responsabilidad.', en: 'That each swimmer decides at their own risk.' }, then: { es: 'El ayuntamiento acepta, pero pone una firma obligatoria. Muchos jóvenes dejan de venir.', en: 'The council agrees, but requires a signature. Many young people stop coming.' } },
            ],
          },
          twist: { es: 'La nieta de Birgitta presenta el estudio en la misma reunión. Abuela y nieta tienen que hablar una contra la otra. ¿Cómo debería empezar Birgitta?', en: 'Birgitta’s granddaughter presents the study at the same meeting. Grandmother and granddaughter have to speak against each other. How should Birgitta begin?' },
          questions: [
            { q: { es: '¿Te fías más de tu experiencia o de los estudios científicos?', en: 'Do you trust your experience or scientific studies more?' }, help: { es: 'Depende de… / Normalmente de… porque…', en: 'It depends on… / Usually… because…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Has cambiado de opinión alguna vez?', en: 'Have you ever changed your mind?' }] },
            { q: { es: '¿Quién debería pagar por la contaminación?', en: 'Who should pay for pollution?' }, help: { es: 'Las empresas que… / Todos, porque…', en: 'The companies that… / Everyone, because…' }, follow: [{ es: '¿Cómo es en tu país?', en: 'What is it like in your country?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿Has discutido con un familiar de otra generación sobre algo importante?', en: 'Have you argued with a relative of another generation about something important?' }, help: { es: 'Sí, con mi… sobre… / No.', en: 'Yes, with my… about… / No.' }, follow: [{ es: '¿Quién tenía razón?', en: 'Who was right?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
            { q: { es: '¿Las personas deberían poder asumir riesgos bajo su responsabilidad?', en: 'Should people be able to take risks at their own responsibility?' }, help: { es: 'Sí, si no afecta a… / No, porque…', en: 'Yes, if it doesn’t affect… / No, because…' }, follow: [{ es: '¿Qué riesgo asumes tú?', en: 'What risk do you take?' }, { es: '¿Dónde está el límite?', en: 'Where is the limit?' }] },
          ],
          words: [{ es: 'contaminado', en: 'polluted' }, { es: 'la costa', en: 'the coast' }, { es: 'fiarse', en: 'to trust' }, { es: 'multar', en: 'to fine' }, { es: 'bajo su responsabilidad', en: 'at their own risk' }],
        },
      },
    },
    // ------------------------------------------------------------ the Scania farm
    {
      id: 'granja',
      name: { es: 'La granja entre campos amarillos', en: 'The farm among yellow fields' },
      who: { name: 'Gustav', role: { es: 'granjero', en: 'farmer' } },
      levels: {
        A0: {
          scene: { es: 'Es el campo. Hay campos amarillos, muy amarillos. Hay vacas, gallinas y una casa blanca. Gustav es granjero.', en: 'It is the countryside. There are yellow fields, very yellow. There are cows, hens and a white house. Gustav is a farmer.' },
          opener: { es: '¡Hola! Soy Gustav. Estos campos amarillos son de colza. ¿Te gustan?', en: 'Hello! I am Gustav. These yellow fields are rapeseed. Do you like them?' },
          decide: {
            ask: { es: 'Gustav te da tres trabajos. ¿Cuál eliges?', en: 'Gustav gives you three jobs. Which do you choose?' },
            options: [
              { say: { es: 'Dar de comer a las gallinas.', en: 'Feed the hens.' }, then: { es: 'Gustav dice: «Mira, hay seis huevos hoy».', en: 'Gustav says: “Look, there are six eggs today.”' } },
              { say: { es: 'Ver las vacas.', en: 'See the cows.' }, then: { es: 'Gustav dice: «Esta vaca se llama Rosa. Es muy simpática».', en: 'Gustav says: “This cow is called Rosa. She is very friendly.”' } },
              { say: { es: 'Subir al tractor.', en: 'Get on the tractor.' }, then: { es: 'Gustav dice: «¡Despacio! Es grande».', en: 'Gustav says: “Slowly! It is big.”' } },
            ],
          },
          twist: { es: 'Una gallina entra en la casa. ¿Qué dices?', en: 'A hen goes into the house. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el campo?', en: 'Do you like the countryside?' }, help: { es: 'Sí, mucho. / No, prefiero la ciudad.', en: 'Yes, a lot. / No, I prefer the city.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Vas a menudo?', en: 'Do you go often?' }] },
            { q: { es: '¿Comes huevos?', en: 'Do you eat eggs?' }, help: { es: 'Sí, a veces. / No.', en: 'Yes, sometimes. / No.' }, follow: [{ es: '¿Cómo los cocinas?', en: 'How do you cook them?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Cuál es tu animal de granja favorito?', en: 'What is your favourite farm animal?' }, help: { es: 'Mi favorito es la vaca / el caballo…', en: 'My favourite is the cow / horse…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Has tocado uno?', en: 'Have you touched one?' }] },
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es el…', en: 'My favourite colour is…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tienes ropa de ese color?', en: 'Do you have clothes that colour?' }] },
          ],
          words: [{ es: 'la granja', en: 'the farm' }, { es: 'la vaca', en: 'the cow' }, { es: 'la gallina', en: 'the hen' }, { es: 'el huevo', en: 'the egg' }, { es: 'el tractor', en: 'the tractor' }],
        },
        A1: {
          scene: { es: 'Es mayo y los campos de Escania están completamente amarillos. Gustav tiene una pequeña tienda en la granja donde vende huevos, leche, miel y pan. No hay vendedor: la gente deja el dinero en una caja.', en: 'It is May and the fields of Scania are completely yellow. Gustav has a small shop on the farm where he sells eggs, milk, honey and bread. There’s no shop assistant: people leave the money in a box.' },
          opener: { es: 'Mi tienda funciona con confianza. Nadie vigila. La gente coge lo que quiere y deja el dinero en la caja. En diez años, solo me han robado dos veces. En Suecia esto es bastante normal en el campo. ¿En tu país funcionaría una tienda así?', en: 'My shop works on trust. Nobody watches. People take what they want and leave the money in the box. In ten years, I’ve only been robbed twice. In Sweden this is quite normal in the countryside. Would a shop like this work in your country?' },
          decide: {
            ask: { es: 'Llegas a la tienda y no tienes monedas. Solo tienes un billete grande. ¿Qué haces?', en: 'You arrive at the shop and have no coins. You only have a big note. What do you do?' },
            options: [
              { say: { es: 'Dejo el billete grande y cojo más cosas.', en: 'I leave the big note and take more things.' }, then: { es: 'Llevas huevos, miel y pan para una semana. Gustav está muy contento.', en: 'You take eggs, honey and bread for a week. Gustav is very happy.' } },
              { say: { es: 'Voy a la casa a buscar a Gustav.', en: 'I go to the house to look for Gustav.' }, then: { es: 'Gustav te da el cambio y te invita a un café en la cocina.', en: 'Gustav gives you change and invites you for coffee in the kitchen.' } },
              { say: { es: 'Me llevo los huevos y vuelvo mañana a pagar.', en: 'I take the eggs and come back tomorrow to pay.' }, then: { es: 'Al día siguiente vuelves. Gustav dice que eres la primera persona que vuelve.', en: 'You come back the next day. Gustav says you’re the first person who has ever come back.' } },
            ],
          },
          twist: { es: 'Ves a un chico que coge miel y no deja dinero. ¿Qué haces?', en: 'You see a boy take some honey without leaving money. What do you do?' },
          questions: [
            { q: { es: '¿Funcionaría una tienda sin vendedor en tu país?', en: 'Would a shop without a shop assistant work in your country?' }, help: { es: 'Sí, en el campo. / No, porque…', en: 'Yes, in the countryside. / No, because…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Has visto alguna?', en: 'Have you seen one?' }] },
            { q: { es: '¿Compras comida directamente a los productores?', en: 'Do you buy food directly from producers?' }, help: { es: 'Sí, en el mercado / en una granja. / No.', en: 'Yes, at the market / on a farm. / No.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Es más caro?', en: 'Is it more expensive?' }] },
            { q: { es: '¿Confías en la gente que no conoces?', en: 'Do you trust people you don’t know?' }, help: { es: 'Sí, normalmente. / No mucho.', en: 'Yes, usually. / Not much.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Alguien te ha engañado?', en: 'Has anyone deceived you?' }] },
            { q: { es: '¿Qué comes con miel?', en: 'What do you eat with honey?' }, help: { es: 'Como miel con pan / yogur / té…', en: 'I eat honey with bread / yogurt / tea…' }, follow: [{ es: '¿Te gusta mucho?', en: 'Do you like it a lot?' }, { es: '¿De dónde es tu miel?', en: 'Where is your honey from?' }] },
          ],
          words: [{ es: 'la colza', en: 'rapeseed' }, { es: 'la miel', en: 'honey' }, { es: 'la confianza', en: 'trust' }, { es: 'robar', en: 'to steal, rob' }, { es: 'el cambio', en: 'change (money)' }],
        },
        A2: {
          scene: { es: 'Gustav tiene sesenta y dos años y ningún hijo quiere seguir con la granja. Su hija es abogada en Estocolmo y su hijo es músico en Berlín. Un grupo de jóvenes refugiados sirios que trabajan en la granja en verano le preguntan si podrían quedarse con ella algún día.', en: 'Gustav is sixty-two and none of his children want to take over the farm. His daughter is a lawyer in Stockholm and his son is a musician in Berlin. A group of young Syrian refugees who work on the farm in summer ask him whether they could take it over one day.' },
          opener: { es: 'Mi familia tiene esta granja desde hace cinco generaciones. Siempre pensé que mi hijo la heredaría. Él prefiere la guitarra. Estos chicos de Siria trabajan mejor que nadie: en su país tenían olivos y sus padres eran agricultores. Pero mis vecinos dicen que «no son de aquí». ¿Qué significa ser de un lugar?', en: 'My family has had this farm for five generations. I always thought my son would inherit it. He prefers the guitar. These boys from Syria work better than anyone: in their country they had olive trees and their parents were farmers. But my neighbours say “they’re not from here”. What does it mean to be from a place?' },
          decide: {
            ask: { es: 'Gustav tiene que pensar en el futuro de la granja. ¿Qué le aconsejas?', en: 'Gustav has to think about the farm’s future. What do you advise him?' },
            options: [
              { say: { es: 'Que enseñe todo a los jóvenes y se la deje a ellos poco a poco.', en: 'Teach the young men everything and hand it over to them bit by bit.' }, then: { es: 'En cinco años, la granja produce más que nunca. Venden también aceite y pan sirio.', en: 'In five years, the farm produces more than ever. They also sell Syrian oil and bread.' } },
              { say: { es: 'Que hable primero con sus hijos.', en: 'Talk to his children first.' }, then: { es: 'Su hija le dice: «Papá, haz lo que te haga feliz». Su hijo le escribe una canción.', en: 'His daughter tells him: “Dad, do what makes you happy.” His son writes him a song.' } },
              { say: { es: 'Que venda la granja a una gran empresa agrícola.', en: 'Sell the farm to a big agricultural company.' }, then: { es: 'Gana mucho dinero. La tienda de la confianza desaparece.', en: 'He makes a lot of money. The trust shop disappears.' } },
            ],
          },
          twist: { es: 'Un vecino le dice a Gustav que, si deja la granja a los refugiados, nadie del pueblo volverá a comprar en su tienda. ¿Qué responde Gustav?', en: 'A neighbour tells Gustav that if he leaves the farm to the refugees, nobody from the village will ever shop at his store again. What does Gustav reply?' },
          questions: [
            { q: { es: '¿Qué significa para ti ser de un lugar?', en: 'What does being from a place mean to you?' }, help: { es: 'Para mí significa…', en: 'For me it means…' }, follow: [{ es: '¿De dónde te sientes tú?', en: 'Where do you feel you’re from?' }, { es: '¿Puede cambiar?', en: 'Can it change?' }] },
            { q: { es: '¿En tu familia hay un negocio o una tierra que pasa de padres a hijos?', en: 'In your family is there a business or land passed from parents to children?' }, help: { es: 'Sí, mi familia tiene… / No.', en: 'Yes, my family has… / No.' }, follow: [{ es: '¿Tú lo vas a continuar?', en: 'Will you continue it?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Has hecho algo distinto de lo que tu familia esperaba?', en: 'Have you done something different from what your family expected?' }, help: { es: 'Sí, ellos querían… pero yo… / No.', en: 'Yes, they wanted… but I… / No.' }, follow: [{ es: '¿Cómo reaccionaron?', en: 'How did they react?' }, { es: '¿Lo aceptan ahora?', en: 'Do they accept it now?' }] },
            { q: { es: '¿Cuánto tiempo tiene que vivir alguien en un lugar para ser «de allí»?', en: 'How long does someone have to live in a place to be “from there”?' }, help: { es: 'Creo que… / No depende del tiempo, sino de…', en: 'I think… / It doesn’t depend on time, but on…' }, follow: [{ es: '¿Y tú dónde llevas más tiempo?', en: 'And where have you lived longest?' }, { es: '¿Te sientes de allí?', en: 'Do you feel you’re from there?' }] },
          ],
          words: [{ es: 'heredar', en: 'to inherit' }, { es: 'la generación', en: 'the generation' }, { es: 'el refugiado', en: 'the refugee' }, { es: 'agrícola', en: 'agricultural' }, { es: 'el agricultor', en: 'the farmer' }],
        },
        B1: {
          scene: { es: 'Este verano ha sido el más seco en cien años. Los campos de Gustav han dado la mitad de cosecha y no hay hierba para las vacas. El gobierno ofrece ayudas, pero solo a las granjas que cambien a métodos más ecológicos, que son más caros al principio. Gustav tiene deudas con el banco.', en: 'This summer has been the driest in a hundred years. Gustav’s fields have produced half a harvest and there is no grass for the cows. The government offers aid, but only to farms that switch to more ecological methods, which are more expensive at first. Gustav is in debt to the bank.' },
          opener: { es: 'Me piden que salve el planeta mientras intento salvar mi granja. Entiendo que hay que cambiar: yo veo el clima cambiar con mis propios ojos, cada año. Pero cambiar cuesta dinero que no tengo, y si me equivoco, pierdo todo lo que mi familia construyó durante ciento cincuenta años. ¿Quién debería pagar la transición?', en: 'They’re asking me to save the planet while I try to save my farm. I understand we have to change: I see the climate changing with my own eyes, every year. But changing costs money I don’t have, and if I get it wrong, I lose everything my family built over a hundred and fifty years. Who should pay for the transition?' },
          decide: {
            ask: { es: 'Gustav tiene que decidir antes del invierno. ¿Qué debería hacer?', en: 'Gustav has to decide before winter. What should he do?' },
            options: [
              { say: { es: 'Cambiar a lo ecológico con la ayuda del gobierno, aunque sea arriesgado.', en: 'Switch to organic with government aid, even though it’s risky.' }, then: { es: 'Los dos primeros años son muy duros. Al tercero, sus productos se venden mejor que nunca.', en: 'The first two years are very hard. In the third, his products sell better than ever.' } },
              { say: { es: 'Vender las vacas y quedarse solo con los campos.', en: 'Sell the cows and keep only the fields.' }, then: { es: 'Las deudas bajan. Gustav llora el día que se llevan a Rosa, su vaca favorita.', en: 'The debts go down. Gustav cries the day they take away Rosa, his favourite cow.' } },
              { say: { es: 'Unirse con otras granjas pequeñas para compartir máquinas y gastos.', en: 'Join other small farms to share machinery and costs.' }, then: { es: 'Siete granjas forman una cooperativa. Juntos consiguen un préstamo mejor.', en: 'Seven farms form a cooperative. Together they get a better loan.' } },
            ],
          },
          twist: { es: 'Un periodista de Estocolmo escribe que los granjeros «contaminan y se quejan». Gustav está furioso y quiere contestar públicamente. ¿Qué debería decir?', en: 'A Stockholm journalist writes that farmers “pollute and complain”. Gustav is furious and wants to reply publicly. What should he say?' },
          questions: [
            { q: { es: '¿Quién debería pagar el cambio hacia una economía más verde?', en: 'Who should pay for the shift to a greener economy?' }, help: { es: 'El gobierno, porque… / Los consumidores, porque…', en: 'The government, because… / Consumers, because…' }, follow: [{ es: '¿Tú pagarías más?', en: 'Would you pay more?' }, { es: '¿Cuánto?', en: 'How much?' }] },
            { q: { es: '¿La gente de la ciudad entiende los problemas del campo?', en: 'Do city people understand rural problems?' }, help: { es: 'No mucho, porque… / Sí, cada vez más.', en: 'Not much, because… / Yes, more and more.' }, follow: [{ es: '¿Y tú?', en: 'And you?' }, { es: '¿Qué no se entiende?', en: 'What isn’t understood?' }] },
            { q: { es: '¿Has visto los efectos del cambio climático cerca de ti?', en: 'Have you seen the effects of climate change near you?' }, help: { es: 'Sí, por ejemplo… / No mucho.', en: 'Yes, for example… / Not much.' }, follow: [{ es: '¿Te preocupa?', en: 'Does it worry you?' }, { es: '¿Qué haces tú?', en: 'What do you do?' }] },
            { q: { es: '¿Arriesgarías todo por un cambio que crees necesario?', en: 'Would you risk everything for a change you believe is necessary?' }, help: { es: 'Sí, si… / No, prefiero ir poco a poco.', en: 'Yes, if… / No, I prefer to go step by step.' }, follow: [{ es: '¿Lo has hecho alguna vez?', en: 'Have you ever done it?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
          ],
          words: [{ es: 'la sequía', en: 'drought' }, { es: 'la cosecha', en: 'the harvest' }, { es: 'la ayuda', en: 'aid, subsidy' }, { es: 'la transición', en: 'the transition' }, { es: 'el préstamo', en: 'the loan' }],
        },
      },
    },
    // ------------------------------------------------------------ Möllevången square
    {
      id: 'mollevangen',
      name: { es: 'La plaza de Möllevången', en: 'Möllevången square' },
      who: { name: 'Yasmin', role: { es: 'frutera', en: 'fruit seller' } },
      levels: {
        A0: {
          scene: { es: 'Es una plaza con un mercado. Hay fruta, verdura y especias de muchos países. Se oyen muchos idiomas. Yasmin vende fruta.', en: 'It is a square with a market. There is fruit, vegetables and spices from many countries. You can hear lots of languages. Yasmin sells fruit.' },
          opener: { es: '¡Hola! Soy Yasmin. Hablo sueco, árabe e inglés. ¿Qué fruta quieres?', en: 'Hello! I am Yasmin. I speak Swedish, Arabic and English. What fruit do you want?' },
          decide: {
            ask: { es: 'Yasmin tiene tres frutas. ¿Cuál compras?', en: 'Yasmin has three fruits. Which do you buy?' },
            options: [
              { say: { es: 'Dátiles, por favor.', en: 'Dates, please.' }, then: { es: 'Yasmin dice: «Son muy dulces. Son de Marruecos».', en: 'Yasmin says: “They are very sweet. They are from Morocco.”' } },
              { say: { es: 'Una sandía.', en: 'A watermelon.' }, then: { es: 'Yasmin dice: «¡Pesa mucho! Cinco kilos».', en: 'Yasmin says: “It is very heavy! Five kilos.”' } },
              { say: { es: 'Manzanas suecas.', en: 'Swedish apples.' }, then: { es: 'Yasmin dice: «Son de una granja de aquí cerca».', en: 'Yasmin says: “They are from a farm near here.”' } },
            ],
          },
          twist: { es: 'Yasmin te da un dátil gratis. «¡Prueba!» ¿Qué dices?', en: 'Yasmin gives you a free date. “Try it!” What do you say?' },
          questions: [
            { q: { es: '¿Cuántos idiomas hablas?', en: 'How many languages do you speak?' }, help: { es: 'Hablo… idiomas.', en: 'I speak… languages.' }, follow: [{ es: '¿Cuáles?', en: 'Which ones?' }, { es: '¿Cuál es más difícil?', en: 'Which is hardest?' }] },
            { q: { es: '¿Cuál es tu fruta favorita?', en: 'What is your favourite fruit?' }, help: { es: 'Mi fruta favorita es…', en: 'My favourite fruit is…' }, follow: [{ es: '¿Cuándo la comes?', en: 'When do you eat it?' }, { es: '¿Dónde la compras?', en: 'Where do you buy it?' }] },
            { q: { es: '¿Hay un mercado en tu barrio?', en: 'Is there a market in your neighbourhood?' }, help: { es: 'Sí, hay uno. / No.', en: 'Yes, there is one. / No.' }, follow: [{ es: '¿Qué día?', en: 'Which day?' }, { es: '¿Qué venden?', en: 'What do they sell?' }] },
            { q: { es: '¿Te gusta la comida de otros países?', en: 'Do you like food from other countries?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿De qué país?', en: 'From which country?' }, { es: '¿Qué plato?', en: 'Which dish?' }] },
          ],
          words: [{ es: 'la plaza', en: 'the square' }, { es: 'las especias', en: 'spices' }, { es: 'el dátil', en: 'the date (fruit)' }, { es: 'la sandía', en: 'the watermelon' }, { es: 'pesar', en: 'to weigh' }],
        },
        A1: {
          scene: { es: 'Es sábado y el mercado está lleno. En Malmö viven personas de más de ciento ochenta países. En el puesto de Yasmin compran familias suecas, estudiantes chinos, abuelas polacas y cocineros de restaurantes del barrio.', en: 'It is Saturday and the market is packed. People from over a hundred and eighty countries live in Malmö. At Yasmin’s stall, Swedish families, Chinese students, Polish grandmothers and cooks from local restaurants all shop.' },
          opener: { es: 'Mi padre abrió este puesto cuando llegó del Líbano hace treinta años. Yo nací aquí, en Malmö. En casa hablo árabe, en el mercado hablo de todo, y sueño en sueco. A veces los turistas me preguntan de dónde soy. Yo digo: de Möllevången. ¿Tú de dónde dices que eres?', en: 'My father opened this stall when he arrived from Lebanon thirty years ago. I was born here, in Malmö. At home I speak Arabic, at the market I speak a bit of everything, and I dream in Swedish. Sometimes tourists ask me where I’m from. I say: from Möllevången. Where do you say you’re from?' },
          decide: {
            ask: { es: 'Una señora mayor quiere comprar fruta, pero no habla sueco ni inglés. ¿Qué haces?', en: 'An elderly lady wants to buy fruit, but doesn’t speak Swedish or English. What do you do?' },
            options: [
              { say: { es: 'Uso las manos y los dedos para los números.', en: 'I use my hands and fingers for the numbers.' }, then: { es: 'Funciona perfectamente. La señora se ríe y te da las gracias en polaco.', en: 'It works perfectly. The lady laughs and thanks you in Polish.' } },
              { say: { es: 'Busco a alguien en el mercado que hable su idioma.', en: 'I look for someone at the market who speaks her language.' }, then: { es: 'Encuentras a un chico polaco en el puesto de al lado. Ahora son amigos.', en: 'You find a Polish boy at the next stall. Now they’re friends.' } },
              { say: { es: 'Uso el traductor del móvil.', en: 'I use the translator on my phone.' }, then: { es: 'El traductor dice algo raro. Todos se ríen mucho.', en: 'The translator says something weird. Everyone laughs a lot.' } },
            ],
          },
          twist: { es: 'Llueve muy fuerte y el toldo del puesto se rompe. La fruta se moja. ¿Qué haces?', en: 'It rains very hard and the stall’s awning breaks. The fruit gets wet. What do you do?' },
          questions: [
            { q: { es: '¿De dónde dices que eres?', en: 'Where do you say you’re from?' }, help: { es: 'Digo que soy de… porque…', en: 'I say I’m from… because…' }, follow: [{ es: '¿Es fácil contestar?', en: 'Is it easy to answer?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Hay personas de muchos países en tu ciudad?', en: 'Are there people from many countries in your city?' }, help: { es: 'Sí, hay muchas personas de… / No mucho.', en: 'Yes, there are many people from… / Not much.' }, follow: [{ es: '¿Qué te gusta de eso?', en: 'What do you like about it?' }, { es: '¿Hay barrios especiales?', en: 'Are there special neighbourhoods?' }] },
            { q: { es: '¿En qué idioma sueñas?', en: 'Which language do you dream in?' }, help: { es: 'Sueño en… / No lo sé.', en: 'I dream in… / I don’t know.' }, follow: [{ es: '¿Has soñado en español?', en: 'Have you dreamed in Spanish?' }, { es: '¿Qué pasaba?', en: 'What was happening?' }] },
            { q: { es: '¿Usas el traductor del móvil?', en: 'Do you use the translator on your phone?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Para qué?', en: 'What for?' }, { es: '¿Funciona bien?', en: 'Does it work well?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'soñar', en: 'to dream' }, { es: 'el traductor', en: 'the translator' }, { es: 'el toldo', en: 'the awning' }, { es: 'mojarse', en: 'to get wet' }],
        },
        A2: {
          scene: { es: 'Möllevången se ha puesto de moda. Abren bares caros, galerías de arte y cafeterías de diseño. Los alquileres suben y muchas familias del barrio se van. El ayuntamiento quiere «renovar» el mercado y poner puestos más modernos y caros.', en: 'Möllevången has become trendy. Expensive bars, art galleries and designer cafés are opening. Rents are rising and many local families are leaving. The council wants to “renovate” the market with more modern, expensive stalls.' },
          opener: { es: 'Me alegra que venga gente nueva. El problema es que los que hicieron el barrio ya no pueden pagarlo. Mi padre trabajó aquí treinta años con lluvia y nieve. Ahora un chico con gafas de sol me pregunta si mi fruta es «auténtica». ¿Qué es lo que hace especial a un barrio?', en: 'I’m glad new people are coming. The problem is that those who made the neighbourhood can’t afford it anymore. My father worked here for thirty years in rain and snow. Now a guy in sunglasses asks me if my fruit is “authentic”. What is it that makes a neighbourhood special?' },
          decide: {
            ask: { es: 'El ayuntamiento ofrece a Yasmin un puesto nuevo, pero el alquiler es el doble. ¿Qué le aconsejas?', en: 'The council offers Yasmin a new stall, but the rent is double. What do you advise her?' },
            options: [
              { say: { es: 'Que acepte y venda también zumos y fruta cortada, más caros.', en: 'Accept and also sell juices and cut fruit, at higher prices.' }, then: { es: 'Los zumos tienen mucho éxito. Pero algunos clientes de siempre ya no pueden comprar.', en: 'The juices are a big success. But some regular customers can’t afford to buy anymore.' } },
              { say: { es: 'Que se una con los otros vendedores para negociar.', en: 'Join the other sellers to negotiate.' }, then: { es: 'Juntos consiguen que el alquiler suba solo un poco cada año.', en: 'Together they get the rent to rise only a little each year.' } },
              { say: { es: 'Que se mude a otro barrio más barato.', en: 'Move to another, cheaper neighbourhood.' }, then: { es: 'Muchos clientes la siguen. El nuevo barrio empieza a ponerse de moda.', en: 'Many customers follow her. The new neighbourhood starts to become trendy.' } },
            ],
          },
          twist: { es: 'Una revista de viajes quiere hacer fotos del puesto de Yasmin para un artículo titulado «El mercado más exótico de Suecia». A Yasmin no le gusta la palabra «exótico». ¿Qué hace?', en: 'A travel magazine wants to photograph Yasmin’s stall for an article titled “Sweden’s most exotic market”. Yasmin doesn’t like the word “exotic”. What does she do?' },
          questions: [
            { q: { es: '¿Qué hace especial a un barrio?', en: 'What makes a neighbourhood special?' }, help: { es: 'Para mí es la gente / las tiendas / la historia…', en: 'For me it’s the people / shops / history…' }, follow: [{ es: '¿Tu barrio es especial?', en: 'Is your neighbourhood special?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Tu barrio ha cambiado en los últimos años?', en: 'Has your neighbourhood changed in recent years?' }, help: { es: 'Sí, antes había… y ahora… / No mucho.', en: 'Yes, there used to be… and now… / Not much.' }, follow: [{ es: '¿Para bien o para mal?', en: 'For better or worse?' }, { es: '¿Qué echas de menos?', en: 'What do you miss?' }] },
            { q: { es: '¿Qué palabras te molestan cuando la gente habla de tu país?', en: 'What words bother you when people talk about your country?' }, help: { es: 'Me molesta cuando dicen… porque…', en: 'It bothers me when they say… because…' }, follow: [{ es: '¿Qué dirías tú?', en: 'What would you say?' }, { es: '¿Has corregido a alguien?', en: 'Have you corrected anyone?' }] },
            { q: { es: '¿Pagarías más por algo «auténtico»?', en: 'Would you pay more for something “authentic”?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Qué es auténtico para ti?', en: 'What is authentic for you?' }, { es: '¿Un ejemplo?', en: 'An example?' }] },
          ],
          words: [{ es: 'renovar', en: 'to renovate' }, { es: 'auténtico', en: 'authentic' }, { es: 'la galería', en: 'the gallery' }, { es: 'negociar', en: 'to negotiate' }, { es: 'exótico', en: 'exotic' }],
        },
        B1: {
          scene: { es: 'Antes de las elecciones, un político hace campaña en la plaza diciendo que Möllevången es «un barrio problemático» por la inmigración. Las cámaras de televisión graban el mercado. Un periodista le pide a Yasmin su opinión en directo.', en: 'Before the elections, a politician campaigns in the square, saying Möllevången is “a problem neighbourhood” because of immigration. TV cameras film the market. A journalist asks Yasmin for her opinion live.' },
          opener: { es: 'Es verdad que hay problemas: pobreza, paro, algunos jóvenes que no encuentran su lugar. No voy a decir que todo es perfecto. Pero cuando un político usa nuestro barrio como ejemplo de miedo, mis clientes, mis vecinos y mi familia se convierten en un problema. ¿Cómo se habla de los problemas sin estigmatizar a la gente?', en: 'It’s true there are problems: poverty, unemployment, some young people who can’t find their place. I won’t say everything is perfect. But when a politician uses our neighbourhood as an example of fear, my customers, my neighbours and my family become a problem. How do you talk about problems without stigmatising people?' },
          decide: {
            ask: { es: 'Yasmin tiene un minuto en directo. ¿Qué debería decir?', en: 'Yasmin has one minute live on air. What should she say?' },
            options: [
              { say: { es: 'Reconocer los problemas y proponer soluciones concretas.', en: 'Acknowledge the problems and propose concrete solutions.' }, then: { es: 'Su respuesta se comparte mucho. Un partido le ofrece ser candidata local.', en: 'Her answer is widely shared. A party offers to make her a local candidate.' } },
              { say: { es: 'Invitar al político a trabajar un día en su puesto.', en: 'Invite the politician to work a day at her stall.' }, then: { es: 'El político no acepta, pero el vídeo se hace viral. Mucha gente visita el mercado.', en: 'The politician doesn’t accept, but the video goes viral. Lots of people visit the market.' } },
              { say: { es: 'No responder: no quiere que su puesto se convierta en política.', en: 'Not answer: she doesn’t want her stall to become political.' }, then: { es: 'El periodista se va. Algunos vecinos piensan que tuvo miedo; otros, que fue inteligente.', en: 'The journalist leaves. Some neighbours think she was scared; others, that she was smart.' } },
            ],
          },
          twist: { es: 'Después de la entrevista, alguien rompe el cristal del puesto de Yasmin por la noche. Su padre quiere cerrar y no hablar más. ¿Qué debería hacer ella?', en: 'After the interview, someone smashes the glass of Yasmin’s stall at night. Her father wants to close and never speak out again. What should she do?' },
          questions: [
            { q: { es: '¿Se habla de los barrios pobres de forma justa en tu país?', en: 'Are poor neighbourhoods talked about fairly in your country?' }, help: { es: 'No siempre, porque… / Creo que sí.', en: 'Not always, because… / I think so.' }, follow: [{ es: '¿Qué palabras se usan?', en: 'What words are used?' }, { es: '¿Quién habla de ellos?', en: 'Who talks about them?' }] },
            { q: { es: '¿Hablarías en televisión sobre un tema polémico?', en: 'Would you speak on TV about a controversial topic?' }, help: { es: 'Sí, si… / No, por miedo a…', en: 'Yes, if… / No, for fear of…' }, follow: [{ es: '¿Sobre qué tema?', en: 'About which topic?' }, { es: '¿Qué dirías?', en: 'What would you say?' }] },
            { q: { es: '¿Cómo se puede hablar de problemas sin estigmatizar?', en: 'How can you talk about problems without stigmatising?' }, help: { es: 'Creo que hay que…', en: 'I think you have to…' }, follow: [{ es: '¿Conoces un buen ejemplo?', en: 'Do you know a good example?' }, { es: '¿Y uno malo?', en: 'And a bad one?' }] },
            { q: { es: '¿Seguirías hablando después de recibir amenazas?', en: 'Would you keep speaking out after receiving threats?' }, help: { es: 'Sí, porque… / No, protegería a…', en: 'Yes, because… / No, I would protect…' }, follow: [{ es: '¿Qué te daría fuerza?', en: 'What would give you strength?' }, { es: '¿Quién te apoyaría?', en: 'Who would support you?' }] },
          ],
          words: [{ es: 'la campaña', en: 'the campaign' }, { es: 'el paro', en: 'unemployment' }, { es: 'estigmatizar', en: 'to stigmatise' }, { es: 'el candidato', en: 'the candidate' }, { es: 'la amenaza', en: 'the threat' }],
        },
      },
    },
  ],
};
