// Jerusalén · the Old City, the Mahane Yehuda market, a Friday-night Shabbat dinner, the
// Dead Sea Scrolls and a viewpoint over the city. Five places, four levels each (A0, A1,
// A2, B1). Every level is written on its own.
export default {
  id: 'jerusalen',
  spots: [
    // ------------------------------------------------------------ the Old City
    {
      id: 'ciudad-vieja',
      name: { es: 'La Ciudad Vieja', en: 'The Old City' },
      who: { name: 'Elías', role: { es: 'guía', en: 'guide' } },
      levels: {
        A0: {
          scene: { es: 'Hay una muralla muy alta y una puerta de piedra. Las calles son estrechas. Hay tiendas pequeñas y mucha gente. Elías es guía. Tiene un mapa.', en: 'There is a very high wall and a stone gate. The streets are narrow. There are small shops and lots of people. Elías is a guide. He has a map.' },
          opener: { es: '¡Bienvenido! Esta ciudad es muy antigua. ¿Entramos?', en: 'Welcome! This city is very old. Shall we go in?' },
          decide: {
            ask: { es: '¿Por dónde vas?', en: 'Which way do you go?' },
            options: [
              { say: { es: 'Por la calle de las tiendas.', en: 'Down the street of shops.' }, then: { es: 'Hay pañuelos, lámparas y especias. ¡Qué colores!', en: 'There are scarves, lamps and spices. What colours!' } },
              { say: { es: 'Por la muralla, arriba.', en: 'Along the wall, up top.' }, then: { es: 'Desde arriba ves toda la ciudad. ¡Qué bonito!', en: 'From up there you see the whole city. How beautiful!' } },
              { say: { es: 'Por una calle pequeña.', en: 'Down a small street.' }, then: { es: 'Un niño juega al fútbol. La pelota rueda hasta tus pies.', en: 'A boy is playing football. The ball rolls to your feet.' } },
            ],
          },
          twist: { es: 'Las calles son iguales. ¿Dónde está Elías? ¿Usas el mapa?', en: 'The streets all look the same. Where is Elías? Do you use the map?' },
          questions: [
            { q: { es: '¿Tu ciudad es antigua o moderna?', en: 'Is your city old or modern?' }, help: { es: 'Es antigua. / Es moderna.', en: 'It is old. / It is modern.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué hay en el centro?', en: 'What is in the centre?' }] },
            { q: { es: '¿Usas mapas?', en: 'Do you use maps?' }, help: { es: 'Sí, en el teléfono. / No.', en: 'Yes, on my phone. / No.' }, follow: [{ es: '¿Te pierdes?', en: 'Do you get lost?' }, { es: '¿Preguntas a la gente?', en: 'Do you ask people?' }] },
            { q: { es: '¿Te gustan las tiendas pequeñas?', en: 'Do you like small shops?' }, help: { es: 'Sí. / No, prefiero las grandes.', en: 'Yes. / No, I prefer big ones.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Hay en tu barrio?', en: 'Are there any in your neighbourhood?' }] },
            { q: { es: '¿Viajas con guía?', en: 'Do you travel with a guide?' }, help: { es: 'Sí. / No, solo/a.', en: 'Yes. / No, alone.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Con quién viajas?', en: 'Who do you travel with?' }] },
          ],
          words: [{ es: 'la muralla', en: 'the city wall' }, { es: 'la puerta', en: 'the gate' }, { es: 'estrecho', en: 'narrow' }, { es: 'antiguo', en: 'old / ancient' }, { es: 'el mapa', en: 'the map' }],
        },
        A1: {
          scene: { es: 'La Ciudad Vieja de Jerusalén tiene menos de un kilómetro cuadrado, pero es importante para el judaísmo, el cristianismo y el islam. Tiene cuatro barrios: judío, cristiano, musulmán y armenio. En una misma calle oyes campanas, oraciones y vendedores que gritan precios. Elías lleva treinta años enseñando estas calles.', en: 'Jerusalem’s Old City is less than one square kilometre, but it is important to Judaism, Christianity and Islam. It has four quarters: Jewish, Christian, Muslim and Armenian. On the same street you hear bells, prayers and sellers shouting prices. Elías has been showing people these streets for thirty years.' },
          opener: { es: 'Mi regla número uno: aquí todo es sagrado para alguien. Por eso hay que caminar con respeto, vestir con hombros y rodillas cubiertas en algunos lugares y no sacar fotos a la gente que reza. Mi regla número dos: si te pierdes, no pasa nada; todas las calles llevan a una puerta. ¿Empezamos por el barrio armenio? Es el más tranquilo.', en: 'My rule number one: here everything is sacred to someone. That’s why you walk respectfully, cover shoulders and knees in some places and don’t take photos of people praying. My rule number two: if you get lost, no problem; every street leads to a gate. Shall we start with the Armenian quarter? It’s the quietest.' },
          decide: {
            ask: { es: '¿Qué barrio visitas primero?', en: 'Which quarter do you visit first?' },
            options: [
              { say: { es: 'El armenio.', en: 'The Armenian one.' }, then: { es: 'Un señor pinta cerámica azul. Te explica que su familia hace lo mismo desde hace cien años.', en: 'A man paints blue ceramics. He explains that his family has done the same for a hundred years.' } },
              { say: { es: 'El musulmán, por el mercado.', en: 'The Muslim one, for the market.' }, then: { es: 'Un vendedor te invita a té con menta. Hablan con las manos y algunas palabras.', en: 'A seller invites you for mint tea. You talk with your hands and a few words.' } },
              { say: { es: 'El judío, por las plazas.', en: 'The Jewish one, for the squares.' }, then: { es: 'Unos niños salen de la escuela cantando. La plaza está llena de luz.', en: 'Some children come out of school singing. The square is full of light.' } },
            ],
          },
          twist: { es: 'Llevas pantalón corto y quieres entrar en una iglesia. Un señor te dice que no puedes. ¿Qué haces?', en: 'You are wearing shorts and want to go into a church. A man says you can’t. What do you do?' },
          questions: [
            { q: { es: '¿Hay lugares en tu país donde hay que vestirse de una forma especial?', en: 'Are there places in your country where you have to dress in a special way?' }, help: { es: 'Sí, en… hay que… / No.', en: 'Yes, in… you have to… / No.' }, follow: [{ es: '¿Te parece bien?', en: 'Do you think that’s fine?' }, { es: '¿Lo respetas?', en: 'Do you respect it?' }] },
            { q: { es: '¿Te pierdes fácilmente en una ciudad nueva?', en: 'Do you get lost easily in a new city?' }, help: { es: 'Sí, siempre. / No, me oriento bien.', en: 'Yes, always. / No, I find my way well.' }, follow: [{ es: '¿Qué haces?', en: 'What do you do?' }, { es: '¿Una historia?', en: 'A story?' }] },
            { q: { es: '¿Qué sonidos hay en tu calle?', en: 'What sounds are there on your street?' }, help: { es: 'Se oyen coches, pájaros…', en: 'You hear cars, birds…' }, follow: [{ es: '¿Te molestan?', en: 'Do they bother you?' }, { es: '¿Cuál te gusta?', en: 'Which one do you like?' }] },
            { q: { es: '¿Sacas fotos a personas desconocidas?', en: 'Do you take photos of strangers?' }, help: { es: 'No, nunca. / Sí, si me dejan.', en: 'No, never. / Yes, if they let me.' }, follow: [{ es: '¿Pides permiso?', en: 'Do you ask permission?' }, { es: '¿Te sacaron fotos a ti?', en: 'Has anyone photographed you?' }] },
          ],
          words: [{ es: 'sagrado', en: 'sacred' }, { es: 'rezar', en: 'to pray' }, { es: 'el barrio', en: 'the quarter' }, { es: 'las campanas', en: 'bells' }, { es: 'cubierto', en: 'covered' }],
        },
        A2: {
          scene: { es: 'Es Semana Santa y, al mismo tiempo, una fiesta judía y el mes de Ramadán. La Ciudad Vieja recibe a cientos de miles de personas en pocos días. Elías tiene un grupo de cuarenta turistas que quiere ver todo en una mañana. La policía cierra algunas calles y el grupo se queda atrapado entre dos procesiones.', en: 'It is Holy Week and, at the same time, a Jewish holiday and the month of Ramadan. The Old City receives hundreds of thousands of people in a few days. Elías has a group of forty tourists who want to see everything in one morning. The police close some streets and the group gets stuck between two processions.' },
          opener: { es: 'Estas semanas son preciosas y agotadoras. Mis clientes pagaron mucho y quieren su foto en cada lugar famoso. Pero hoy es imposible: hay demasiada gente, los fieles necesitan su espacio y no quiero que mi grupo moleste a nadie. Puedo cambiar el plan y llevarlos a lugares menos conocidos, aunque algunos se van a quejar. ¿Qué harías tú en mi lugar?', en: 'These weeks are beautiful and exhausting. My clients paid a lot and want their photo at every famous place. But today it’s impossible: there are too many people, the faithful need their space and I don’t want my group to disturb anyone. I can change the plan and take them to lesser-known places, even if some will complain. What would you do in my place?' },
          decide: {
            ask: { es: '¿Qué hace Elías?', en: 'What does Elías do?' },
            options: [
              { say: { es: 'Cambiar el plan y explicar por qué.', en: 'Change the plan and explain why.' }, then: { es: 'Visitan un tejado secreto con vista a toda la ciudad. Al final, todos dicen que fue lo mejor.', en: 'They visit a secret rooftop overlooking the whole city. In the end, everyone says it was the best part.' } },
              { say: { es: 'Esperar a que pase la procesión.', en: 'Wait for the procession to pass.' }, then: { es: 'Esperan una hora. Ven la procesión de cerca y algunos se emocionan.', en: 'They wait an hour. They see the procession up close and some are moved.' } },
              { say: { es: 'Dividir el grupo en dos.', en: 'Split the group in two.' }, then: { es: 'Un grupo va con Elías y el otro con su sobrino. Se encuentran tarde y cansados.', en: 'One group goes with Elías and the other with his nephew. They meet up late and tired.' } },
            ],
          },
          twist: { es: 'Un turista del grupo quiere subir a un lugar cerrado para sacar una foto «para Instagram». Le dice a Elías: «Yo pagué, tengo derecho». ¿Cómo responde Elías?', en: 'A tourist in the group wants to climb into a closed area to take a photo “for Instagram”. He tells Elías: “I paid, I have the right.” How does Elías respond?' },
          questions: [
            { q: { es: '¿Viajarías a un lugar en su fiesta más importante?', en: 'Would you travel to a place during its most important festival?' }, help: { es: 'Sí, para ver… / No, por la gente…', en: 'Yes, to see… / No, because of the crowds…' }, follow: [{ es: '¿Qué fiesta te gustaría ver?', en: 'Which festival would you like to see?' }, { es: '¿Ya fuiste a alguna?', en: 'Have you been to one?' }] },
            { q: { es: '¿Qué haces cuando un plan de viaje sale mal?', en: 'What do you do when a travel plan goes wrong?' }, help: { es: 'Me enfado… / Busco otra cosa…', en: 'I get angry… / I look for something else…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Al final fue bueno?', en: 'Did it turn out well?' }] },
            { q: { es: '¿Pagar mucho te da derecho a todo?', en: 'Does paying a lot give you the right to everything?' }, help: { es: 'No, porque… / En parte, porque…', en: 'No, because… / Partly, because…' }, follow: [{ es: '¿Dónde está el límite?', en: 'Where is the limit?' }, { es: '¿Viste a alguien así?', en: 'Have you seen someone like that?' }] },
            { q: { es: '¿Prefieres los lugares famosos o los desconocidos?', en: 'Do you prefer famous or unknown places?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Cuál es tu lugar secreto?', en: 'What is your secret place?' }, { es: '¿Lo compartirías?', en: 'Would you share it?' }] },
          ],
          words: [{ es: 'la procesión', en: 'the procession' }, { es: 'los fieles', en: 'the faithful' }, { es: 'agotador', en: 'exhausting' }, { es: 'atrapado', en: 'stuck' }, { es: 'el tejado', en: 'the rooftop' }],
        },
        B1: {
          scene: { es: 'En la Ciudad Vieja viven unas treinta y cinco mil personas, en casas pequeñas y antiguas, entre millones de visitantes al año. Para ellas, los lugares sagrados son también su barrio: el sitio donde compran pan, llevan a los niños al colegio y tienden la ropa. Elías nació aquí. Su sobrina, de veintidós años, le dice que quiere irse a vivir a la ciudad nueva: está cansada de los turistas, del ruido de las peregrinaciones y de no poder abrir la ventana sin salir en una foto.', en: 'About thirty-five thousand people live in the Old City, in small old houses, among millions of visitors a year. For them, the holy sites are also their neighbourhood: where they buy bread, take the kids to school and hang out the washing. Elías was born here. His twenty-two-year-old niece tells him she wants to move to the new city: she’s tired of tourists, of the noise of pilgrimages and of not being able to open the window without ending up in a photo.' },
          opener: { es: 'Yo la entiendo, pero me duele. Si los jóvenes se van, la Ciudad Vieja se convierte en un decorado: piedras preciosas, tiendas de recuerdos y nadie que viva de verdad. Hay ciudades en Europa donde ya pasó eso. Por otro lado, ¿con qué derecho le pido a mi sobrina que sacrifique su vida para mantener vivo un barrio? Vivir en un lugar sagrado es un honor, pero también es un peso. ¿Debería una ciudad ayudar a sus vecinos a quedarse, aunque eso limite a los visitantes?', en: 'I understand her, but it hurts. If young people leave, the Old City turns into a stage set: beautiful stones, souvenir shops and nobody really living there. There are cities in Europe where that has already happened. On the other hand, what right do I have to ask my niece to sacrifice her life to keep a neighbourhood alive? Living in a holy place is an honour, but it’s also a weight. Should a city help its residents stay, even if that limits visitors?' },
          decide: {
            ask: { es: '¿Qué le dice Elías a su sobrina?', en: 'What does Elías tell his niece?' },
            options: [
              { say: { es: '«Vete. Tu vida es tuya».', en: '“Go. Your life is yours.”' }, then: { es: 'Se muda. Los domingos vuelve a comer con la familia y por primera vez ve la Ciudad Vieja con ojos de visitante.', en: 'She moves. On Sundays she comes back to eat with the family and for the first time sees the Old City with a visitor’s eyes.' } },
              { say: { es: '«Quédate un año más y lucha por el barrio».', en: '“Stay another year and fight for the neighbourhood.”' }, then: { es: 'Organiza con otros jóvenes un horario sin grupos turísticos en su calle. Funciona a medias.', en: 'With other young people she organises tourist-free hours on her street. It half works.' } },
              { say: { es: '«Haz algo con los turistas: trabaja con ellos».', en: '“Do something with the tourists: work with them.”' }, then: { es: 'Abre un pequeño café donde los vecinos cuentan su vida a los visitantes. Se llena.', en: 'She opens a small café where residents tell visitors about their lives. It fills up.' } },
            ],
          },
          twist: { es: 'El ayuntamiento propone cobrar una entrada a los turistas para entrar en la Ciudad Vieja, como en algunas ciudades italianas, y usar el dinero para los vecinos. Los comerciantes dicen que perderán clientes. ¿Es justo cobrar por pasear por una ciudad?', en: 'The council proposes charging tourists an entry fee to the Old City, as in some Italian cities, and using the money for residents. Shopkeepers say they’ll lose customers. Is it fair to charge people to walk around a city?' },
          questions: [
            { q: { es: '¿Te gustaría vivir en un lugar muy turístico?', en: 'Would you like to live in a very touristy place?' }, help: { es: 'Sí, porque… / No, por…', en: 'Yes, because… / No, because of…' }, follow: [{ es: '¿Qué ventajas tendría?', en: 'What advantages would it have?' }, { es: '¿Qué no soportarías?', en: 'What couldn’t you stand?' }] },
            { q: { es: '¿Cuándo un lugar deja de estar «vivo»?', en: 'When does a place stop being “alive”?' }, help: { es: 'Creo que cuando…', en: 'I think when…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Se puede recuperar?', en: 'Can it be recovered?' }] },
            { q: { es: '¿Tienen los jóvenes una obligación con el lugar donde nacieron?', en: 'Do young people have an obligation to the place where they were born?' }, help: { es: 'No, pero… / En cierto modo, sí, porque…', en: 'No, but… / In a way, yes, because…' }, follow: [{ es: '¿Tú te fuiste de tu ciudad?', en: 'Did you leave your town?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿Pagarías una entrada para visitar una ciudad?', en: 'Would you pay an entry fee to visit a city?' }, help: { es: 'Sí, si el dinero… / No, porque una ciudad…', en: 'Yes, if the money… / No, because a city…' }, follow: [{ es: '¿Cuánto?', en: 'How much?' }, { es: '¿Para qué debería servir?', en: 'What should it be used for?' }] },
          ],
          words: [{ es: 'el decorado', en: 'the stage set' }, { es: 'la peregrinación', en: 'the pilgrimage' }, { es: 'el peso', en: 'the weight / burden' }, { es: 'el comerciante', en: 'the shopkeeper' }, { es: 'tender la ropa', en: 'to hang out the washing' }],
        },
      },
    },
    // ------------------------------------------------------------ Mahane Yehuda
    {
      id: 'mahane-yehuda',
      name: { es: 'El mercado Mahane Yehuda', en: 'The Mahane Yehuda market' },
      who: { name: 'Shira', role: { es: 'vendedora de especias', en: 'spice seller' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado con techo. Hay montañas de especias de colores: rojo, amarillo, verde. Shira vende especias. También tiene halva, un dulce de sésamo.', en: 'It is a covered market. There are mountains of coloured spices: red, yellow, green. Shira sells spices. She also has halva, a sesame sweet.' },
          opener: { es: '¡Hola! ¿Hueles? Es comino. ¿Quieres probar halva?', en: 'Hello! Can you smell it? It is cumin. Do you want to try halva?' },
          decide: {
            ask: { es: '¿Qué pruebas?', en: 'What do you try?' },
            options: [
              { say: { es: 'Halva de chocolate.', en: 'Chocolate halva.' }, then: { es: 'Es dulce y suave. ¡Muy rico!', en: 'It is sweet and soft. Very tasty!' } },
              { say: { es: 'Halva de pistacho.', en: 'Pistachio halva.' }, then: { es: 'Es verde por dentro. Shira dice: «¡Mi favorita!».', en: 'It is green inside. Shira says: “My favourite!”' } },
              { say: { es: 'Nada dulce. Huelo las especias.', en: 'Nothing sweet. I smell the spices.' }, then: { es: 'Hueles una especia roja. ¡Achís! ¡Es muy picante!', en: 'You smell a red spice. Atchoo! It is very spicy!' } },
            ],
          },
          twist: { es: 'Shira te regala una bolsa pequeña de especias. ¿Para qué comida la usas?', en: 'Shira gives you a small bag of spices. Which food do you use it for?' },
          questions: [
            { q: { es: '¿Te gustan las comidas picantes?', en: 'Do you like spicy food?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿Qué comida?', en: 'Which food?' }, { es: '¿Muy picante?', en: 'Very spicy?' }] },
            { q: { es: '¿Qué dulce te gusta?', en: 'What sweet do you like?' }, help: { es: 'Me gusta…', en: 'I like…' }, follow: [{ es: '¿Lo comes mucho?', en: 'Do you eat it a lot?' }, { es: '¿Es de tu país?', en: 'Is it from your country?' }] },
            { q: { es: '¿Cocinas con especias?', en: 'Do you cook with spices?' }, help: { es: 'Sí, con… / No.', en: 'Yes, with… / No.' }, follow: [{ es: '¿Cuál usas más?', en: 'Which do you use most?' }, { es: '¿Qué cocinas?', en: 'What do you cook?' }] },
            { q: { es: '¿Hay un mercado bonito en tu ciudad?', en: 'Is there a nice market in your city?' }, help: { es: 'Sí, se llama… / No.', en: 'Yes, it is called… / No.' }, follow: [{ es: '¿Qué venden?', en: 'What do they sell?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
          ],
          words: [{ es: 'las especias', en: 'spices' }, { es: 'el comino', en: 'cumin' }, { es: 'oler', en: 'to smell' }, { es: 'picante', en: 'spicy' }, { es: 'el dulce', en: 'the sweet' }],
        },
        A1: {
          scene: { es: 'Mahane Yehuda tiene más de doscientos cincuenta puestos. De día es un mercado normal: verdura, pescado, pan y especias. De noche, cuando los vendedores cierran, las persianas de metal se convierten en paredes para bares y música. Las persianas tienen retratos pintados por un artista. Shira está cerrando su puesto a las siete.', en: 'Mahane Yehuda has more than two hundred and fifty stalls. By day it’s a normal market: vegetables, fish, bread and spices. At night, when the sellers close, the metal shutters become walls for bars and music. The shutters have portraits painted by an artist. Shira is closing her stall at seven.' },
          opener: { es: 'Mira mi persiana: tiene la cara de mi abuela pintada. Ella abrió este puesto cuando llegó de Kurdistán. Cuando cierro, mi abuela «trabaja» de noche con los bares. Me gusta el mercado de día porque viene la gente del barrio. De noche vienen los jóvenes y los turistas. ¿Tú prefieres el mercado de día o de noche?', en: 'Look at my shutter: it has my grandmother’s face painted on it. She opened this stall when she came from Kurdistan. When I close, my grandmother “works” at night with the bars. I like the market by day because the neighbourhood people come. At night the young people and tourists come. Do you prefer the market by day or by night?' },
          decide: {
            ask: { es: '¿Qué haces esta noche?', en: 'What do you do tonight?' },
            options: [
              { say: { es: 'Me quedo a ver los bares.', en: 'I stay to see the bars.' }, then: { es: 'Un grupo toca música en directo entre dos puestos de fruta cerrados.', en: 'A band plays live music between two closed fruit stalls.' } },
              { say: { es: 'Ayudo a Shira a cerrar.', en: 'I help Shira close up.' }, then: { es: 'Bajan juntos la persiana. Aparece la cara de la abuela. Shira le da un beso a la pintura.', en: 'You pull down the shutter together. The grandmother’s face appears. Shira kisses the painting.' } },
              { say: { es: 'Compro especias para mañana.', en: 'I buy spices for tomorrow.' }, then: { es: 'Shira te hace precio de amigo y te da una receta escrita a mano.', en: 'Shira gives you a friend’s price and a handwritten recipe.' } },
            ],
          },
          twist: { es: 'Un turista quiere comprar la persiana con el retrato de la abuela. Ofrece mil dólares. ¿Qué dice Shira?', en: 'A tourist wants to buy the shutter with the grandmother’s portrait. He offers a thousand dollars. What does Shira say?' },
          questions: [
            { q: { es: '¿Sales de noche?', en: 'Do you go out at night?' }, help: { es: 'Sí, los… / No mucho.', en: 'Yes, on… / Not much.' }, follow: [{ es: '¿Adónde vas?', en: 'Where do you go?' }, { es: '¿Hasta qué hora?', en: 'Until what time?' }] },
            { q: { es: '¿Hay arte en las calles de tu ciudad?', en: 'Is there art on the streets of your city?' }, help: { es: 'Sí, hay murales… / No mucho.', en: 'Yes, there are murals… / Not much.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Dónde está?', en: 'Where is it?' }] },
            { q: { es: '¿Tienes una foto o un objeto de tus abuelos?', en: 'Do you have a photo or an object from your grandparents?' }, help: { es: 'Sí, tengo… / No.', en: 'Yes, I have… / No.' }, follow: [{ es: '¿Dónde está?', en: 'Where is it?' }, { es: '¿Lo venderías?', en: 'Would you sell it?' }] },
            { q: { es: '¿Prefieres los lugares tranquilos o con mucha gente?', en: 'Do you prefer quiet or crowded places?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Y de vacaciones?', en: 'And on holiday?' }] },
          ],
          words: [{ es: 'la persiana', en: 'the shutter' }, { es: 'el retrato', en: 'the portrait' }, { es: 'cerrar', en: 'to close' }, { es: 'en directo', en: 'live' }, { es: 'la receta', en: 'the recipe' }],
        },
        A2: {
          scene: { es: 'Los bares nocturnos del mercado tienen mucho éxito, pero los vecinos de las casas cercanas se quejan: música hasta las tres de la mañana, botellas en el suelo y gente gritando. Proponen que los bares cierren a medianoche. Los dueños de los bares dicen que gracias a ellos el mercado está vivo y que muchos vendedores alquilan sus puestos por la noche para ganar más.', en: 'The market’s night bars are very successful, but residents of nearby houses complain: music until three in the morning, bottles on the ground and people shouting. They propose the bars close at midnight. The bar owners say that thanks to them the market is alive and many sellers rent out their stalls at night to earn more.' },
          opener: { es: 'Yo estoy en el medio. Mi madre vive en una de esas casas y no duerme. Pero yo alquilo mi puesto por la noche a un chico que hace cócteles, y con ese dinero pago la universidad de mi hijo. Si cierran a medianoche, él gana menos y yo también. Si no cierran, mi madre se pone enferma. Mañana hay una reunión en el ayuntamiento y tengo que hablar. ¿Qué digo?', en: 'I’m in the middle. My mother lives in one of those houses and doesn’t sleep. But I rent my stall at night to a guy who makes cocktails, and with that money I pay my son’s university. If they close at midnight, he earns less and so do I. If they don’t, my mother gets ill. Tomorrow there’s a meeting at the council and I have to speak. What do I say?' },
          decide: {
            ask: { es: '¿Qué propone Shira?', en: 'What does Shira propose?' },
            options: [
              { say: { es: 'Cerrar a medianoche entre semana y más tarde el jueves.', en: 'Close at midnight on weekdays and later on Thursday.' }, then: { es: 'Casi todos aceptan. Su madre duerme bien cinco noches de siete.', en: 'Almost everyone agrees. Her mother sleeps well five nights out of seven.' } },
              { say: { es: 'Música solo en la parte central del mercado.', en: 'Music only in the central part of the market.' }, then: { es: 'Los bares de las orillas protestan, pero las casas tienen más silencio.', en: 'The bars on the edges protest, but the houses are quieter.' } },
              { say: { es: 'Que los bares paguen ventanas contra el ruido a los vecinos.', en: 'That the bars pay for soundproof windows for residents.' }, then: { es: 'Es caro, pero funciona. La madre de Shira dice que ahora oye menos hasta a sus nietos.', en: 'It’s expensive, but it works. Shira’s mother says now she can barely hear even her grandchildren.' } },
            ],
          },
          twist: { es: 'En la reunión, un vendedor mayor dice: «Este mercado es para vender comida, no para emborracharse». Los jóvenes se ríen. ¿Tiene razón?', en: 'At the meeting, an older seller says: “This market is for selling food, not for getting drunk.” The young people laugh. Is he right?' },
          questions: [
            { q: { es: '¿Hay ruido de noche donde vives?', en: 'Is there noise at night where you live?' }, help: { es: 'Sí, por… / No, es muy tranquilo.', en: 'Yes, because of… / No, it’s very quiet.' }, follow: [{ es: '¿Te quejaste alguna vez?', en: 'Have you ever complained?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿A qué hora deberían cerrar los bares?', en: 'What time should bars close?' }, help: { es: 'Creo que a las… porque…', en: 'I think at… because…' }, follow: [{ es: '¿Y los fines de semana?', en: 'And at weekends?' }, { es: '¿En tu ciudad cuándo cierran?', en: 'When do they close in your city?' }] },
            { q: { es: '¿Alguna vez estuviste entre dos personas que querían cosas distintas?', en: 'Have you ever been caught between two people who wanted different things?' }, help: { es: 'Sí, entre mi… y mi… / No.', en: 'Yes, between my… and my… / No.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Salió bien?', en: 'Did it go well?' }] },
            { q: { es: '¿Un lugar puede tener dos vidas distintas, de día y de noche?', en: 'Can a place have two different lives, by day and by night?' }, help: { es: 'Sí, por ejemplo… / Es difícil porque…', en: 'Yes, for example… / It’s hard because…' }, follow: [{ es: '¿Conoces uno?', en: 'Do you know one?' }, { es: '¿Cuál prefieres?', en: 'Which do you prefer?' }] },
          ],
          words: [{ es: 'quejarse', en: 'to complain' }, { es: 'medianoche', en: 'midnight' }, { es: 'alquilar', en: 'to rent out' }, { es: 'emborracharse', en: 'to get drunk' }, { es: 'el ruido', en: 'noise' }],
        },
        B1: {
          scene: { es: 'Jerusalén es una ciudad con muchas comunidades que viven muy cerca pero a veces se mezclan poco: judíos ultraortodoxos, judíos laicos, árabes musulmanes y cristianos, inmigrantes recientes. El mercado es uno de los pocos lugares donde casi todos compran. Shira tiene clientes de todos los grupos. Hoy una ONG le propone participar en un proyecto: cenas mensuales en el mercado donde vecinos de comunidades distintas cocinan juntos.', en: 'Jerusalem is a city with many communities that live very close together but sometimes mix little: ultra-Orthodox Jews, secular Jews, Muslim and Christian Arabs, recent immigrants. The market is one of the few places where almost everyone shops. Shira has customers from every group. Today an NGO proposes she take part in a project: monthly dinners at the market where neighbours from different communities cook together.' },
          opener: { es: 'Me encanta la idea, pero no soy ingenua. En mi puesto todos son amables: piden comino, preguntan por la familia, pagan y se van. Sentarse a cenar juntos es otra cosa. Algunos clientes me han dicho que no vendrían, otros que vendrían solo si no se habla de política. Y yo pienso: ¿sirve de algo una cena donde no se puede hablar de lo importante? ¿O justamente es el primer paso necesario?', en: 'I love the idea, but I’m not naive. At my stall everyone is friendly: they ask for cumin, ask about the family, pay and leave. Sitting down to dinner together is something else. Some customers have told me they wouldn’t come, others that they’d come only if politics isn’t discussed. And I think: is a dinner where you can’t talk about what matters any use? Or is it exactly the necessary first step?' },
          decide: {
            ask: { es: '¿Cómo organiza Shira la primera cena?', en: 'How does Shira organise the first dinner?' },
            options: [
              { say: { es: 'Con una regla: solo se habla de comida y familia.', en: 'With one rule: only talk about food and family.' }, then: { es: 'Vienen cuarenta personas. Intercambian recetas de abuelas. Dos señoras de barrios distintos descubren que hacen el mismo plato.', en: 'Forty people come. They swap grandmothers’ recipes. Two women from different neighbourhoods discover they make the same dish.' } },
              { say: { es: 'Sin reglas: cada uno habla de lo que quiera.', en: 'No rules: everyone talks about whatever they want.' }, then: { es: 'Vienen menos personas. Hay una discusión fuerte, pero al final se quedan hasta tarde hablando.', en: 'Fewer people come. There’s a heated argument, but in the end they stay late talking.' } },
              { say: { es: 'Empezar por los niños: un taller de cocina para familias.', en: 'Start with the children: a cooking workshop for families.' }, then: { es: 'Los niños se hacen amigos en una hora. Los padres tardan un poco más.', en: 'The children become friends in an hour. The parents take a little longer.' } },
            ],
          },
          twist: { es: 'Después de la primera cena, alguien publica fotos en internet y un grupo critica a Shira por «mezclarse con quien no debe». Algunos clientes dejan de comprarle. ¿Debería seguir con el proyecto?', en: 'After the first dinner, someone posts photos online and a group criticises Shira for “mixing with the wrong people”. Some customers stop buying from her. Should she continue with the project?' },
          questions: [
            { q: { es: '¿En tu ciudad hay grupos que viven cerca pero se mezclan poco?', en: 'In your city are there groups who live nearby but mix little?' }, help: { es: 'Sí, por ejemplo… / No mucho, porque…', en: 'Yes, for example… / Not really, because…' }, follow: [{ es: '¿Por qué crees que pasa?', en: 'Why do you think that happens?' }, { es: '¿Dónde se encuentran?', en: 'Where do they meet?' }] },
            { q: { es: '¿La comida puede acercar a personas muy distintas?', en: 'Can food bring very different people closer?' }, help: { es: 'Sí, porque… / Ayuda, pero no basta…', en: 'Yes, because… / It helps, but it’s not enough…' }, follow: [{ es: '¿Tienes un ejemplo?', en: 'Do you have an example?' }, { es: '¿Qué más hace falta?', en: 'What else is needed?' }] },
            { q: { es: '¿Es mejor evitar los temas difíciles al principio de una relación?', en: 'Is it better to avoid difficult subjects at the start of a relationship?' }, help: { es: 'Creo que sí/no, porque…', en: 'I think so/not, because…' }, follow: [{ es: '¿Cuándo se puede hablar de ellos?', en: 'When can you talk about them?' }, { es: '¿Tú qué haces?', en: 'What do you do?' }] },
            { q: { es: '¿Seguirías con un proyecto si te costara clientes o amigos?', en: 'Would you continue a project if it cost you customers or friends?' }, help: { es: 'Sí, si creo en… / Depende de…', en: 'Yes, if I believe in… / It depends on…' }, follow: [{ es: '¿Hasta dónde?', en: 'How far?' }, { es: '¿Te pasó algo así?', en: 'Has something like that happened to you?' }] },
          ],
          words: [{ es: 'ingenuo', en: 'naive' }, { es: 'laico', en: 'secular' }, { es: 'la comunidad', en: 'the community' }, { es: 'mezclarse', en: 'to mix' }, { es: 'el paso', en: 'the step' }],
        },
      },
    },
    // ------------------------------------------------------------ a Shabbat dinner
    {
      id: 'shabat',
      name: { es: 'Una cena de shabat', en: 'A Shabbat dinner' },
      who: { name: 'Rut', role: { es: 'anfitriona', en: 'host' } },
      levels: {
        A0: {
          scene: { es: 'Es viernes por la noche. En la mesa hay dos velas, pan trenzado y vino. Rut es la anfitriona. Toda la familia está en casa.', en: 'It is Friday night. On the table there are two candles, braided bread and wine. Rut is the host. The whole family is at home.' },
          opener: { es: '¡Shabat shalom! Bienvenido. Siéntate aquí, por favor.', en: 'Shabbat shalom! Welcome. Sit here, please.' },
          decide: {
            ask: { es: '¿Qué traes de regalo?', en: 'What do you bring as a gift?' },
            options: [
              { say: { es: 'Flores.', en: 'Flowers.' }, then: { es: 'Rut pone las flores en la mesa. «¡Qué bonitas!».', en: 'Rut puts the flowers on the table. “How pretty!”' } },
              { say: { es: 'Chocolate.', en: 'Chocolate.' }, then: { es: 'Los niños gritan: «¡Chocolate!». Rut ríe.', en: 'The children shout: “Chocolate!” Rut laughs.' } },
              { say: { es: 'Nada. Lo siento.', en: 'Nothing. I am sorry.' }, then: { es: 'Rut dice: «No pasa nada. Tú eres el regalo».', en: 'Rut says: “It doesn’t matter. You are the gift.”' } },
            ],
          },
          twist: { es: 'El abuelo canta una canción. Todos cantan. ¿Cantas también?', en: 'Grandpa sings a song. Everyone sings. Do you sing too?' },
          questions: [
            { q: { es: '¿Comes con tu familia?', en: 'Do you eat with your family?' }, help: { es: 'Sí, todos los días. / No mucho.', en: 'Yes, every day. / Not much.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Quién cocina?', en: 'Who cooks?' }] },
            { q: { es: '¿Tienes una comida especial a la semana?', en: 'Do you have a special meal each week?' }, help: { es: 'Sí, el domingo. / No.', en: 'Yes, on Sunday. / No.' }, follow: [{ es: '¿Qué comen?', en: 'What do you eat?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Qué regalo llevas a una cena?', en: 'What gift do you take to a dinner?' }, help: { es: 'Llevo vino / flores / un postre.', en: 'I take wine / flowers / a dessert.' }, follow: [{ es: '¿Siempre?', en: 'Always?' }, { es: '¿Es normal en tu país?', en: 'Is it normal in your country?' }] },
            { q: { es: '¿Te gusta cantar?', en: 'Do you like singing?' }, help: { es: 'Sí. / No, canto muy mal.', en: 'Yes. / No, I sing very badly.' }, follow: [{ es: '¿Qué canción?', en: 'Which song?' }, { es: '¿Con quién cantas?', en: 'Who do you sing with?' }] },
          ],
          words: [{ es: 'la vela', en: 'the candle' }, { es: 'el pan trenzado', en: 'braided bread' }, { es: 'la familia', en: 'the family' }, { es: 'la anfitriona', en: 'the host' }, { es: 'el regalo', en: 'the gift' }],
        },
        A1: {
          scene: { es: 'El shabat empieza el viernes al atardecer y termina el sábado por la noche. Para muchas familias judías es un día de descanso: no se trabaja y algunas personas religiosas no usan el teléfono, no cocinan ni conducen. En Jerusalén las tiendas cierran y la ciudad se queda en silencio. Rut invita cada viernes a alguien nuevo a su mesa.', en: 'Shabbat begins on Friday at sunset and ends on Saturday night. For many Jewish families it’s a day of rest: nobody works and some religious people don’t use their phones, cook or drive. In Jerusalem shops close and the city goes quiet. Every Friday Rut invites someone new to her table.' },
          opener: { es: 'En mi casa no somos muy religiosos, pero el viernes por la noche es sagrado de otra forma: todos apagan el teléfono y comemos juntos sin prisa. Mis hijos adolescentes protestan los primeros diez minutos y después no quieren levantarse de la mesa. ¿Tú podrías pasar una noche entera sin mirar el teléfono?', en: 'In my house we’re not very religious, but Friday night is sacred in another way: everyone turns off their phone and we eat together slowly. My teenage children protest for the first ten minutes and then they don’t want to leave the table. Could you spend a whole evening without looking at your phone?' },
          decide: {
            ask: { es: '¿Qué haces con tu teléfono?', en: 'What do you do with your phone?' },
            options: [
              { say: { es: 'Lo apago y lo pongo en la cesta.', en: 'I turn it off and put it in the basket.' }, then: { es: 'Al principio buscas el teléfono con la mano. Después te olvidas por completo.', en: 'At first your hand reaches for the phone. Then you forget all about it.' } },
              { say: { es: 'Lo dejo en silencio en el bolsillo.', en: 'I leave it on silent in my pocket.' }, then: { es: 'Vibra tres veces. El hijo de Rut te mira y sonríe: «Te entiendo».', en: 'It vibrates three times. Rut’s son looks at you and smiles: “I get it.”' } },
              { say: { es: 'Saco una foto de la mesa primero.', en: 'I take a photo of the table first.' }, then: { es: 'Rut dice: «Una foto, y luego a la cesta». La foto es preciosa.', en: 'Rut says: “One photo, and then into the basket.” The photo is beautiful.' } },
            ],
          },
          twist: { es: 'La abuela pregunta a cada persona: «¿Qué fue lo mejor de tu semana?». Ahora es tu turno. ¿Qué dices?', en: 'Grandma asks each person: “What was the best thing about your week?” Now it’s your turn. What do you say?' },
          questions: [
            { q: { es: '¿Tienes un día de descanso de verdad?', en: 'Do you have a real day of rest?' }, help: { es: 'Sí, el… / No, siempre hago algo.', en: 'Yes, on… / No, I always do something.' }, follow: [{ es: '¿Qué haces ese día?', en: 'What do you do that day?' }, { es: '¿Qué no haces?', en: 'What don’t you do?' }] },
            { q: { es: '¿Cuántas horas al día miras el teléfono?', en: 'How many hours a day do you look at your phone?' }, help: { es: 'Unas… horas, creo.', en: 'About… hours, I think.' }, follow: [{ es: '¿Es mucho?', en: 'Is it a lot?' }, { es: '¿Quieres cambiar?', en: 'Do you want to change?' }] },
            { q: { es: '¿Qué fue lo mejor de tu semana?', en: 'What was the best thing about your week?' }, help: { es: 'Lo mejor fue…', en: 'The best thing was…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Y lo peor?', en: 'And the worst?' }] },
            { q: { es: '¿Invitas a gente nueva a tu casa?', en: 'Do you invite new people to your home?' }, help: { es: 'Sí, a veces. / No, solo a amigos.', en: 'Yes, sometimes. / No, only friends.' }, follow: [{ es: '¿Qué cocinas?', en: 'What do you cook?' }, { es: '¿Te gusta ser anfitrión/a?', en: 'Do you like being a host?' }] },
          ],
          words: [{ es: 'el descanso', en: 'rest' }, { es: 'apagar', en: 'to turn off' }, { es: 'sin prisa', en: 'without hurrying' }, { es: 'la cesta', en: 'the basket' }, { es: 'el atardecer', en: 'sunset' }],
        },
        A2: {
          scene: { es: 'Es viernes por la tarde y Rut está cocinando para doce personas. Su hija mayor, de diecinueve años, llama: tiene un examen el domingo y quiere quedarse en su piso estudiando. Es la primera vez que no viene a la cena de shabat. Rut sabe que su madre, la abuela, se va a poner muy triste. La abuela tiene ochenta y siete años.', en: 'It’s Friday afternoon and Rut is cooking for twelve. Her eldest daughter, nineteen, calls: she has an exam on Sunday and wants to stay in her flat studying. It’s the first time she won’t come to Shabbat dinner. Rut knows her mother, the grandmother, will be very sad. Grandma is eighty-seven.' },
          opener: { es: 'Yo a su edad también quería libertad, y mi madre me obligaba a venir todos los viernes. A veces me enfadaba, pero hoy agradezco esas cenas. No quiero repetir lo que hizo mi madre, pero tampoco quiero que la tradición se rompa. Y la abuela… no sé cuántos viernes más vamos a tener con ella. ¿Le digo a mi hija que venga o la dejo estudiar?', en: 'At her age I also wanted freedom, and my mother made me come every Friday. Sometimes I got angry, but today I’m grateful for those dinners. I don’t want to repeat what my mother did, but I don’t want the tradition to break either. And grandma… I don’t know how many more Fridays we’ll have with her. Do I tell my daughter to come or let her study?' },
          decide: {
            ask: { es: '¿Qué hace Rut?', en: 'What does Rut do?' },
            options: [
              { say: { es: 'Dejarla estudiar.', en: 'Let her study.' }, then: { es: 'La hija llama a la abuela antes de la cena. La abuela dice: «Estudia, que yo te espero el próximo viernes».', en: 'The daughter calls grandma before dinner. Grandma says: “Study, I’ll wait for you next Friday.”' } },
              { say: { es: 'Pedirle que venga solo una hora.', en: 'Ask her to come for just one hour.' }, then: { es: 'Llega con los libros, come rápido y se va. La abuela está feliz igual.', en: 'She arrives with her books, eats quickly and leaves. Grandma is happy anyway.' } },
              { say: { es: 'Llevarle la cena a su piso.', en: 'Take dinner to her flat.' }, then: { es: 'Rut deja una caja con comida y una vela en la puerta. La hija llora un poco al abrirla.', en: 'Rut leaves a box of food and a candle at the door. The daughter cries a little when she opens it.' } },
            ],
          },
          twist: { es: 'El hijo menor dice: «Si ella no viene, yo tampoco quiero venir la semana que viene». ¿Cómo responde Rut?', en: 'The youngest son says: “If she doesn’t come, I don’t want to come next week either.” How does Rut respond?' },
          questions: [
            { q: { es: '¿Hay una tradición familiar que no te gustaba de joven y ahora sí?', en: 'Is there a family tradition you didn’t like when young but do now?' }, help: { es: 'Sí, cuando era joven… pero ahora…', en: 'Yes, when I was young… but now…' }, follow: [{ es: '¿Por qué cambiaste?', en: 'Why did you change?' }, { es: '¿La mantienes?', en: 'Do you keep it up?' }] },
            { q: { es: '¿Los padres deben obligar a los hijos a seguir las tradiciones?', en: 'Should parents make children follow traditions?' }, help: { es: 'No, pero… / Hasta cierta edad, sí…', en: 'No, but… / Up to a certain age, yes…' }, follow: [{ es: '¿Hasta qué edad?', en: 'Up to what age?' }, { es: '¿Tus padres lo hicieron?', en: 'Did your parents do it?' }] },
            { q: { es: '¿Qué es más importante: los estudios o la familia?', en: 'What is more important: studies or family?' }, help: { es: 'Depende del momento… / Para mí,…', en: 'It depends on the moment… / For me,…' }, follow: [{ es: '¿Tuviste que elegir alguna vez?', en: 'Have you ever had to choose?' }, { es: '¿Qué elegiste?', en: 'What did you choose?' }] },
            { q: { es: '¿Pasas suficiente tiempo con tus abuelos o con personas mayores?', en: 'Do you spend enough time with your grandparents or older people?' }, help: { es: 'Sí, los veo… / No tanto como quisiera.', en: 'Yes, I see them… / Not as much as I’d like.' }, follow: [{ es: '¿Qué hacen juntos?', en: 'What do you do together?' }, { es: '¿Qué aprendiste de ellos?', en: 'What have you learnt from them?' }] },
          ],
          words: [{ es: 'obligar', en: 'to make / force' }, { es: 'agradecer', en: 'to be grateful for' }, { es: 'romperse', en: 'to break' }, { es: 'la libertad', en: 'freedom' }, { es: 'el examen', en: 'the exam' }],
        },
        B1: {
          scene: { es: 'En Jerusalén, durante el shabat, casi no hay autobuses públicos ni trenes. Para las familias religiosas es lo natural: el día de descanso debe respetarse en el espacio público. Para muchos vecinos laicos, estudiantes, ancianos sin coche o trabajadores que no son judíos, significa quedarse encerrados un día entero. La ciudad debate si debería haber transporte público mínimo el sábado. Rut forma parte de un consejo vecinal con personas de las dos posiciones.', en: 'In Jerusalem, during Shabbat, there are almost no public buses or trains. For religious families it’s natural: the day of rest should be respected in public space. For many secular residents, students, older people without cars or workers who aren’t Jewish, it means being stuck at home for a whole day. The city is debating whether there should be minimal public transport on Saturdays. Rut sits on a neighbourhood council with people from both positions.' },
          opener: { es: 'Mi vecino religioso me dice: «Si los autobuses circulan el sábado, el shabat deja de ser de todos y pasa a ser solo de los que se quedan en casa». Mi vecina de abajo, que tiene noventa años y no conduce, me dice: «Yo también quiero visitar a mi hermana el sábado». Los dos tienen razón, y los dos son buena gente. En una ciudad compartida, ¿qué pesa más: el respeto a una tradición mayoritaria en el barrio o la libertad de movimiento de cada persona?', en: 'My religious neighbour tells me: “If buses run on Saturday, Shabbat stops belonging to everyone and becomes only for those who stay home.” My downstairs neighbour, who is ninety and doesn’t drive, tells me: “I also want to visit my sister on Saturday.” Both are right, and both are good people. In a shared city, what weighs more: respect for a tradition that is the majority in the neighbourhood or each person’s freedom of movement?' },
          decide: {
            ask: { es: '¿Qué propone Rut en el consejo?', en: 'What does Rut propose at the council?' },
            options: [
              { say: { es: 'Pequeños autobuses solo por las calles principales.', en: 'Small buses only on the main roads.' }, then: { es: 'Los barrios religiosos quedan en silencio y los demás tienen transporte. Nadie está totalmente contento.', en: 'Religious neighbourhoods stay quiet and the others have transport. Nobody is completely happy.' } },
              { say: { es: 'Un servicio de voluntarios con coche para mayores.', en: 'A volunteer car service for older people.' }, then: { es: 'Funciona para los ancianos, pero los estudiantes dicen que se olvidaron de ellos.', en: 'It works for the elderly, but the students say they were forgotten.' } },
              { say: { es: 'Que cada barrio vote su propia regla.', en: 'That each neighbourhood votes on its own rule.' }, then: { es: 'El mapa de la ciudad queda como un rompecabezas: aquí hay autobús, aquí no.', en: 'The city map ends up like a jigsaw: here there’s a bus, here there isn’t.' } },
            ],
          },
          twist: { es: 'Un conductor de autobús, que es musulmán, dice en el consejo que él trabajaría con gusto los sábados, pero que nadie le preguntó su opinión. ¿Quién debería participar en una decisión así?', en: 'A bus driver, who is Muslim, says at the council that he would gladly work Saturdays, but nobody asked his opinion. Who should take part in a decision like this?' },
          questions: [
            { q: { es: '¿Debería el espacio público respetar las tradiciones religiosas de la mayoría?', en: 'Should public space respect the religious traditions of the majority?' }, help: { es: 'En parte, porque… / No, porque el espacio público…', en: 'Partly, because… / No, because public space…' }, follow: [{ es: '¿Y las minorías?', en: 'And minorities?' }, { es: '¿Hay ejemplos en tu país?', en: 'Are there examples in your country?' }] },
            { q: { es: '¿Qué cierra en tu país un día festivo y qué opinas?', en: 'What closes in your country on a holiday and what do you think?' }, help: { es: 'Cierran… y a mí me parece…', en: '… close, and I think…' }, follow: [{ es: '¿Te afecta?', en: 'Does it affect you?' }, { es: '¿Lo cambiarías?', en: 'Would you change it?' }] },
            { q: { es: '¿Se puede llegar a un acuerdo cuando los dos lados tienen razón?', en: 'Can you reach an agreement when both sides are right?' }, help: { es: 'Sí, si cada uno cede… / A veces no…', en: 'Yes, if each gives way… / Sometimes not…' }, follow: [{ es: '¿Un ejemplo de tu vida?', en: 'An example from your life?' }, { es: '¿Quién cedió?', en: 'Who gave way?' }] },
            { q: { es: '¿Quién suele quedar fuera cuando una ciudad toma decisiones?', en: 'Who usually gets left out when a city makes decisions?' }, help: { es: 'Muchas veces los…', en: 'Often the…' }, follow: [{ es: '¿Cómo se podría evitar?', en: 'How could that be avoided?' }, { es: '¿Te pasó a ti?', en: 'Has it happened to you?' }] },
          ],
          words: [{ es: 'laico', en: 'secular' }, { es: 'encerrado', en: 'stuck indoors' }, { es: 'mayoritario', en: 'majority (adj.)' }, { es: 'ceder', en: 'to give way' }, { es: 'el consejo vecinal', en: 'the neighbourhood council' }],
        },
      },
    },
    // ------------------------------------------------------------ the Dead Sea Scrolls
    {
      id: 'museo',
      name: { es: 'Los manuscritos del mar Muerto', en: 'The Dead Sea Scrolls' },
      who: { name: 'Daniel', role: { es: 'guía del museo', en: 'museum guide' } },
      levels: {
        A0: {
          scene: { es: 'Es un museo con un techo blanco, como una tapa grande. Dentro está oscuro. Hay papeles muy viejos detrás de un cristal. Daniel es guía del museo.', en: 'It is a museum with a white roof, like a big lid. Inside it is dark. There are very old papers behind glass. Daniel is a museum guide.' },
          opener: { es: 'Hola. Estos papeles tienen dos mil años. ¡Dos mil! ¿Te gustan los museos?', en: 'Hello. These papers are two thousand years old. Two thousand! Do you like museums?' },
          decide: {
            ask: { es: '¿Qué miras?', en: 'What do you look at?' },
            options: [
              { say: { es: 'El papel más largo.', en: 'The longest paper.' }, then: { es: 'Mide siete metros. ¡Es muy largo!', en: 'It is seven metres long. It is very long!' } },
              { say: { es: 'Las letras.', en: 'The letters.' }, then: { es: 'Las letras son pequeñas y negras. Daniel dice: «Es hebreo antiguo».', en: 'The letters are small and black. Daniel says: “It is ancient Hebrew.”' } },
              { say: { es: 'Las vasijas de barro.', en: 'The clay jars.' }, then: { es: 'Los papeles estaban dentro de estas vasijas, en una cueva.', en: 'The papers were inside these jars, in a cave.' } },
            ],
          },
          twist: { es: 'No se pueden sacar fotos con flash. Tu amigo saca una foto con flash. ¿Qué dices?', en: 'You can’t take photos with flash. Your friend takes a flash photo. What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los museos?', en: 'Do you like museums?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Qué museo?', en: 'Which museum?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Tienes algo muy viejo en casa?', en: 'Do you have something very old at home?' }, help: { es: 'Sí, un/una… / No.', en: 'Yes, a… / No.' }, follow: [{ es: '¿De quién era?', en: 'Whose was it?' }, { es: '¿Cuántos años tiene?', en: 'How old is it?' }] },
            { q: { es: '¿Lees en papel o en pantalla?', en: 'Do you read on paper or on screen?' }, help: { es: 'En papel. / En pantalla.', en: 'On paper. / On screen.' }, follow: [{ es: '¿Qué lees?', en: 'What do you read?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Escribes a mano?', en: 'Do you write by hand?' }, help: { es: 'Sí, a veces. / Casi nunca.', en: 'Yes, sometimes. / Almost never.' }, follow: [{ es: '¿Qué escribes?', en: 'What do you write?' }, { es: '¿Tu letra es bonita?', en: 'Is your handwriting nice?' }] },
          ],
          words: [{ es: 'el museo', en: 'the museum' }, { es: 'el papel', en: 'the paper' }, { es: 'la letra', en: 'the letter / handwriting' }, { es: 'la vasija', en: 'the jar' }, { es: 'la cueva', en: 'the cave' }],
        },
        A1: {
          scene: { es: 'En 1947, un joven pastor beduino buscaba una cabra perdida cerca del mar Muerto. Tiró una piedra dentro de una cueva y oyó algo romperse. Dentro había vasijas con manuscritos de hace dos mil años. Hoy se guardan en el Santuario del Libro, en Jerusalén. El techo blanco del edificio tiene la forma de la tapa de esas vasijas.', en: 'In 1947, a young Bedouin shepherd was looking for a lost goat near the Dead Sea. He threw a stone into a cave and heard something break. Inside were jars with manuscripts two thousand years old. Today they are kept in the Shrine of the Book, in Jerusalem. The building’s white roof is shaped like the lids of those jars.' },
          opener: { es: 'Me encanta empezar con la historia del pastor y la cabra. Uno de los descubrimientos más importantes del siglo veinte llegó por casualidad. Los manuscritos son textos religiosos y también reglas de vida de una comunidad que vivía en el desierto. Aquí ves una copia; el original solo sale unos meses, porque la luz lo daña. ¿Encontraste algo importante por casualidad alguna vez?', en: 'I love starting with the story of the shepherd and the goat. One of the most important discoveries of the twentieth century happened by chance. The scrolls are religious texts and also rules of life of a community that lived in the desert. Here you see a copy; the original only comes out for a few months, because light damages it. Have you ever found something important by chance?' },
          decide: {
            ask: { es: '¿Qué le preguntas a Daniel?', en: 'What do you ask Daniel?' },
            options: [
              { say: { es: '¿Qué pasó con el pastor?', en: 'What happened to the shepherd?' }, then: { es: 'Vendió los manuscritos por muy poco dinero. Más tarde se hizo famoso en los libros de historia.', en: 'He sold the scrolls for very little money. Later he became famous in the history books.' } },
              { say: { es: '¿Quién escribió los textos?', en: 'Who wrote the texts?' }, then: { es: 'Daniel sonríe: «Los expertos todavía discuten. Es un misterio».', en: 'Daniel smiles: “Experts still argue. It’s a mystery.”' } },
              { say: { es: '¿Hay más cuevas sin descubrir?', en: 'Are there more undiscovered caves?' }, then: { es: '«Seguro que sí», dice Daniel. «En 2021 encontraron más fragmentos».', en: '“Surely,” says Daniel. “In 2021 they found more fragments.”' } },
            ],
          },
          twist: { es: 'Un niño del grupo pregunta: «¿Y la cabra? ¿La encontró?». Nadie sabe la respuesta. ¿Qué crees tú?', en: 'A child in the group asks: “And the goat? Did he find it?” Nobody knows the answer. What do you think?' },
          questions: [
            { q: { es: '¿Encontraste algo importante por casualidad?', en: 'Have you found something important by chance?' }, help: { es: 'Sí, una vez encontré… / No, nunca.', en: 'Yes, once I found… / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Qué museo famoso visitaste?', en: 'Which famous museum have you visited?' }, help: { es: 'Visité… en…', en: 'I visited… in…' }, follow: [{ es: '¿Qué te gustó más?', en: 'What did you like most?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿Te gustan los misterios de la historia?', en: 'Do you like historical mysteries?' }, help: { es: 'Sí, por ejemplo… / No mucho.', en: 'Yes, for example… / Not much.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Tienes una teoría?', en: 'Do you have a theory?' }] },
            { q: { es: '¿Guardas cartas o papeles antiguos?', en: 'Do you keep old letters or papers?' }, help: { es: 'Sí, en una caja. / No, tiro todo.', en: 'Yes, in a box. / No, I throw everything away.' }, follow: [{ es: '¿Cuál es el más viejo?', en: 'Which is the oldest?' }, { es: '¿Por qué lo guardas?', en: 'Why do you keep it?' }] },
          ],
          words: [{ es: 'el pastor', en: 'the shepherd' }, { es: 'la cabra', en: 'the goat' }, { es: 'el manuscrito', en: 'the manuscript' }, { es: 'por casualidad', en: 'by chance' }, { es: 'dañar', en: 'to damage' }],
        },
        A2: {
          scene: { es: 'Un coleccionista privado ofrece al museo un fragmento de manuscrito que dice haber comprado en un mercado de antigüedades. Pide mucho dinero. Daniel sabe que en los últimos años se vendieron fragmentos falsos a museos importantes de Estados Unidos. También sabe que, si es verdadero, es un tesoro y no deben perderlo.', en: 'A private collector offers the museum a scroll fragment he says he bought at an antiques market. He asks for a lot of money. Daniel knows that in recent years fake fragments were sold to major museums in the United States. He also knows that, if it’s real, it’s a treasure and they mustn’t lose it.' },
          opener: { es: 'El coleccionista dice que no tiene papeles que expliquen de dónde viene el fragmento. «Lo compré a un señor en Belén hace treinta años», dice. Si lo compramos y es falso, el museo hace el ridículo. Si no lo compramos y es verdadero, termina en una colección privada y nadie lo estudia nunca. Los análisis tardan meses y el coleccionista quiere una respuesta esta semana. ¿Qué harías tú?', en: 'The collector says he has no papers explaining where the fragment comes from. “I bought it from a man in Bethlehem thirty years ago,” he says. If we buy it and it’s fake, the museum looks ridiculous. If we don’t buy it and it’s real, it ends up in a private collection and nobody ever studies it. Tests take months and the collector wants an answer this week. What would you do?' },
          decide: {
            ask: { es: '¿Qué recomienda Daniel?', en: 'What does Daniel recommend?' },
            options: [
              { say: { es: 'No comprar sin análisis.', en: 'Don’t buy without tests.' }, then: { es: 'El coleccionista se enfada y se va. Un año después, otro museo descubre que su fragmento era falso.', en: 'The collector gets angry and leaves. A year later, another museum discovers his fragment was fake.' } },
              { say: { es: 'Pedir el fragmento prestado para estudiarlo.', en: 'Ask to borrow the fragment to study it.' }, then: { es: 'El coleccionista acepta tres meses. Los análisis dicen que el papel es antiguo, pero la tinta es moderna.', en: 'The collector agrees to three months. Tests show the material is old, but the ink is modern.' } },
              { say: { es: 'Comprarlo rápido antes que otro.', en: 'Buy it quickly before anyone else.' }, then: { es: 'El museo paga. Los análisis dicen que es verdadero. Daniel respira, pero sabe que tuvieron suerte.', en: 'The museum pays. Tests show it’s real. Daniel breathes, but knows they were lucky.' } },
            ],
          },
          twist: { es: 'Una periodista llama a Daniel: ha descubierto que el fragmento podría venir de una excavación ilegal hace pocos años, no de hace treinta. ¿Cambia eso la decisión, aunque sea verdadero?', en: 'A journalist calls Daniel: she has discovered the fragment might come from an illegal dig a few years ago, not thirty years ago. Does that change the decision, even if it’s real?' },
          questions: [
            { q: { es: '¿Compraste algo que resultó ser falso?', en: 'Have you bought something that turned out to be fake?' }, help: { es: 'Sí, una vez compré… / No, que yo sepa.', en: 'Yes, once I bought… / Not that I know of.' }, follow: [{ es: '¿Cómo lo descubriste?', en: 'How did you find out?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Los objetos antiguos deberían estar en museos o pueden ser privados?', en: 'Should ancient objects be in museums or can they be private?' }, help: { es: 'Creo que deberían… porque…', en: 'I think they should… because…' }, follow: [{ es: '¿Y si el dueño lo cuida bien?', en: 'And if the owner looks after it well?' }, { es: '¿Quién decide?', en: 'Who decides?' }] },
            { q: { es: '¿Tomas decisiones rápidas cuando te presionan?', en: 'Do you make quick decisions under pressure?' }, help: { es: 'Sí, y a veces… / No, necesito tiempo.', en: 'Yes, and sometimes… / No, I need time.' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Salió bien?', en: 'Did it go well?' }] },
            { q: { es: '¿Qué es peor: hacer el ridículo o perder una oportunidad?', en: 'What is worse: looking ridiculous or missing an opportunity?' }, help: { es: 'Para mí, es peor… porque…', en: 'For me,… is worse because…' }, follow: [{ es: '¿Te pasó alguna de las dos?', en: 'Has either happened to you?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
          ],
          words: [{ es: 'el coleccionista', en: 'the collector' }, { es: 'el fragmento', en: 'the fragment' }, { es: 'falso', en: 'fake' }, { es: 'la tinta', en: 'the ink' }, { es: 'hacer el ridículo', en: 'to look ridiculous' }],
        },
        B1: {
          scene: { es: 'Los manuscritos del mar Muerto ya están digitalizados en altísima resolución: cualquier persona del mundo puede verlos en internet con más detalle que en el museo. Algunos expertos proponen guardar los originales en una cámara protegida para siempre, sin exponerlos más, porque cada exposición los daña un poco. Otros dicen que ver el objeto real es una experiencia que ninguna pantalla puede reemplazar. Daniel tiene que preparar una propuesta para la dirección del museo.', en: 'The Dead Sea Scrolls have now been digitised at very high resolution: anyone in the world can see them online in more detail than at the museum. Some experts propose storing the originals in a protected vault forever, no longer displaying them, because every exhibition damages them a little. Others say that seeing the real object is an experience no screen can replace. Daniel has to prepare a proposal for the museum’s management.' },
          opener: { es: 'Cada día veo lo mismo: gente que viaja miles de kilómetros, entra en esta sala oscura, se acerca al cristal y se queda en silencio. Algunos lloran. Nadie llora delante de una pantalla. Pero también veo los informes: la luz, la humedad y el calor de las personas dañan el pergamino. Dentro de doscientos años, ¿preferirán nuestros nietos tener el original intacto o la memoria de que millones de personas lo vieron? ¿Para qué sirve un tesoro que nadie puede ver?', en: 'Every day I see the same thing: people who travel thousands of kilometres, enter this dark room, approach the glass and fall silent. Some cry. Nobody cries in front of a screen. But I also see the reports: light, humidity and people’s body heat damage the parchment. In two hundred years, will our grandchildren prefer having the original intact or the memory that millions of people saw it? What’s the use of a treasure nobody can see?' },
          decide: {
            ask: { es: '¿Qué propone Daniel?', en: 'What does Daniel propose?' },
            options: [
              { say: { es: 'Exponer el original solo un día al año.', en: 'Display the original only one day a year.' }, then: { es: 'Ese día se convierte en un acontecimiento. Hay colas de toda la noche.', en: 'That day becomes an event. People queue all night.' } },
              { say: { es: 'Retirar los originales y crear una sala virtual.', en: 'Withdraw the originals and create a virtual room.' }, then: { es: 'Los científicos aplauden. Las visitas bajan un treinta por ciento.', en: 'Scientists applaud. Visits fall by thirty per cent.' } },
              { say: { es: 'Seguir rotando fragmentos, como ahora.', en: 'Keep rotating fragments, as now.' }, then: { es: 'Nada cambia, pero se invierte más dinero en tecnología para proteger las salas.', en: 'Nothing changes, but more money is invested in technology to protect the rooms.' } },
            ],
          },
          twist: { es: 'Un grupo de investigadores pide tocar un fragmento original para analizar su ADN y saber de qué animal es el pergamino. El análisis daña un milímetro del manuscrito para siempre. ¿Se debe sacrificar un trozo del pasado para entenderlo mejor?', en: 'A group of researchers asks to touch an original fragment to analyse its DNA and find out which animal the parchment comes from. The test destroys one millimetre of the scroll forever. Should a piece of the past be sacrificed to understand it better?' },
          questions: [
            { q: { es: '¿Es lo mismo ver una obra en persona que en una pantalla?', en: 'Is seeing a work in person the same as on a screen?' }, help: { es: 'No, porque en persona… / Casi, porque hoy…', en: 'No, because in person… / Almost, because today…' }, follow: [{ es: '¿Qué obra viste en persona?', en: 'Which work have you seen in person?' }, { es: '¿Qué sentiste?', en: 'What did you feel?' }] },
            { q: { es: '¿Qué es más importante: conservar el pasado o compartirlo?', en: 'What is more important: preserving the past or sharing it?' }, help: { es: 'Creo que… aunque…', en: 'I think… although…' }, follow: [{ es: '¿Se pueden hacer las dos cosas?', en: 'Can you do both?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Viajarías miles de kilómetros para ver un objeto real?', en: 'Would you travel thousands of kilometres to see a real object?' }, help: { es: 'Sí, para ver… / No, me basta con…', en: 'Yes, to see… / No, … is enough for me' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Por qué ese?', en: 'Why that one?' }] },
            { q: { es: '¿Dañarías algo valioso para aprender más sobre ello?', en: 'Would you damage something valuable to learn more about it?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Dónde está el límite?', en: 'Where is the limit?' }, { es: '¿Y con algo de tu familia?', en: 'And with something from your family?' }] },
          ],
          words: [{ es: 'digitalizar', en: 'to digitise' }, { es: 'el pergamino', en: 'parchment' }, { es: 'la cámara', en: 'the vault' }, { es: 'intacto', en: 'intact' }, { es: 'exponer', en: 'to display' }],
        },
      },
    },
    // ------------------------------------------------------------ the viewpoint
    {
      id: 'mirador',
      name: { es: 'El mirador del monte de los Olivos', en: 'The Mount of Olives viewpoint' },
      who: { name: 'Yusuf', role: { es: 'fotógrafo', en: 'photographer' } },
      levels: {
        A0: {
          scene: { es: 'Es un mirador alto. Ves toda la ciudad: casas de piedra, cúpulas y torres. Hay un camello con un señor. Yusuf es fotógrafo. Tiene una cámara grande.', en: 'It is a high viewpoint. You see the whole city: stone houses, domes and towers. There is a camel with a man. Yusuf is a photographer. He has a big camera.' },
          opener: { es: 'Hola. ¡Qué vista! ¿Una foto? Es gratis.', en: 'Hello. What a view! A photo? It is free.' },
          decide: {
            ask: { es: '¿Qué foto quieres?', en: 'Which photo do you want?' },
            options: [
              { say: { es: 'Yo con la ciudad detrás.', en: 'Me with the city behind.' }, then: { es: 'Yusuf dice: «¡Sonríe!». La foto es muy bonita.', en: 'Yusuf says: “Smile!” The photo is very nice.' } },
              { say: { es: 'Solo la ciudad.', en: 'Just the city.' }, then: { es: 'Yusuf espera un minuto. Pasa un pájaro. ¡Foto perfecta!', en: 'Yusuf waits a minute. A bird flies by. Perfect photo!' } },
              { say: { es: 'Yo con el camello.', en: 'Me with the camel.' }, then: { es: 'El camello te mira. El señor dice: «Diez shéquels».', en: 'The camel looks at you. The man says: “Ten shekels.”' } },
            ],
          },
          twist: { es: 'El sol baja. Las piedras son doradas. ¿Sacas otra foto?', en: 'The sun goes down. The stones are golden. Do you take another photo?' },
          questions: [
            { q: { es: '¿Sacas muchas fotos?', en: 'Do you take many photos?' }, help: { es: 'Sí, muchas. / No, pocas.', en: 'Yes, lots. / No, few.' }, follow: [{ es: '¿De qué?', en: 'Of what?' }, { es: '¿Con el teléfono?', en: 'With your phone?' }] },
            { q: { es: '¿Te gustan las fotos de ti?', en: 'Do you like photos of yourself?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Cuál es tu foto favorita?', en: 'What is your favourite photo?' }] },
            { q: { es: '¿Hay un mirador en tu ciudad?', en: 'Is there a viewpoint in your city?' }, help: { es: 'Sí, se llama… / No.', en: 'Yes, it is called… / No.' }, follow: [{ es: '¿Vas mucho?', en: 'Do you go often?' }, { es: '¿Qué se ve?', en: 'What can you see?' }] },
            { q: { es: '¿Te gusta el atardecer?', en: 'Do you like sunset?' }, help: { es: 'Sí, mucho. / Prefiero la mañana.', en: 'Yes, a lot. / I prefer the morning.' }, follow: [{ es: '¿Dónde lo miras?', en: 'Where do you watch it?' }, { es: '¿Con quién?', en: 'With whom?' }] },
          ],
          words: [{ es: 'el mirador', en: 'the viewpoint' }, { es: 'la cúpula', en: 'the dome' }, { es: 'la cámara', en: 'the camera' }, { es: 'la vista', en: 'the view' }, { es: 'dorado', en: 'golden' }],
        },
        A1: {
          scene: { es: 'Desde el monte de los Olivos se ve toda la Ciudad Vieja: la cúpula dorada, las torres de las iglesias, las murallas y, alrededor, la ciudad moderna. Hay una ley en Jerusalén: todos los edificios nuevos deben estar cubiertos de piedra clara. Por eso al atardecer la ciudad parece de oro. Yusuf saca fotos aquí desde hace veinte años.', en: 'From the Mount of Olives you can see the whole Old City: the golden dome, the church towers, the walls and, around them, the modern city. There is a law in Jerusalem: all new buildings must be faced with light stone. That’s why at sunset the city looks golden. Yusuf has been taking photos here for twenty years.' },
          opener: { es: 'Saco la misma foto todos los días a la misma hora. Tengo más de siete mil fotos de esta vista. Parece la misma, pero cambia: la luz, las nubes, una grúa nueva, un árbol que crece. Es como un diario de la ciudad. ¿Tú sacas fotos para recordar o para enseñar a otros?', en: 'I take the same photo every day at the same time. I have more than seven thousand photos of this view. It looks the same, but it changes: the light, the clouds, a new crane, a tree that grows. It’s like a diary of the city. Do you take photos to remember or to show others?' },
          decide: {
            ask: { es: '¿Qué le pides a Yusuf?', en: 'What do you ask Yusuf?' },
            options: [
              { say: { es: 'Ver sus fotos de hace veinte años.', en: 'To see his photos from twenty years ago.' }, then: { es: 'Comparan una foto vieja con la vista de hoy. Hay muchos edificios nuevos a la derecha.', en: 'You compare an old photo with today’s view. There are many new buildings on the right.' } },
              { say: { es: 'Que te enseñe a sacar una buena foto.', en: 'For him to teach you to take a good photo.' }, then: { es: '«Regla de tres», dice Yusuf. «Nunca pongas la cúpula en el centro».', en: '“Rule of thirds,” says Yusuf. “Never put the dome in the centre.”' } },
              { say: { es: 'Comprar una foto suya.', en: 'To buy one of his photos.' }, then: { es: 'Eliges una con nieve. Yusuf dice: «Nevó solo tres días ese año».', en: 'You choose one with snow. Yusuf says: “It only snowed three days that year.”' } },
            ],
          },
          twist: { es: 'Un grupo grande llega y se pone delante de la cámara de Yusuf para hacerse selfis. Faltan dos minutos para su foto diaria. ¿Qué hacen?', en: 'A big group arrives and stands in front of Yusuf’s camera to take selfies. There are two minutes left before his daily photo. What do you do?' },
          questions: [
            { q: { es: '¿Sacas fotos para recordar o para compartir?', en: 'Do you take photos to remember or to share?' }, help: { es: 'Sobre todo para…', en: 'Mainly to…' }, follow: [{ es: '¿Dónde las compartes?', en: 'Where do you share them?' }, { es: '¿Las miras después?', en: 'Do you look at them later?' }] },
            { q: { es: '¿Haces algo todos los días a la misma hora?', en: 'Do you do something every day at the same time?' }, help: { es: 'Sí, todos los días a las… / No.', en: 'Yes, every day at… / No.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Tu ciudad cambió mucho en los últimos años?', en: 'Has your city changed a lot in recent years?' }, help: { es: 'Sí, ahora hay… / No mucho.', en: 'Yes, now there are… / Not much.' }, follow: [{ es: '¿Para bien o para mal?', en: 'For better or worse?' }, { es: '¿Qué extrañas?', en: 'What do you miss?' }] },
            { q: { es: '¿Cuántas fotos tienes en el teléfono?', en: 'How many photos do you have on your phone?' }, help: { es: 'Unas… / Demasiadas.', en: 'About… / Too many.' }, follow: [{ es: '¿Las ordenas?', en: 'Do you organise them?' }, { es: '¿Borras algunas?', en: 'Do you delete some?' }] },
          ],
          words: [{ es: 'la grúa', en: 'the crane' }, { es: 'el diario', en: 'the diary' }, { es: 'la luz', en: 'light' }, { es: 'cubierto de piedra', en: 'faced with stone' }, { es: 'nevar', en: 'to snow' }],
        },
        A2: {
          scene: { es: 'Una agencia de publicidad quiere comprar las siete mil fotos de Yusuf para hacer un video de la ciudad que pasa en veinte años en un minuto. Le ofrecen buen dinero, pero el video será para una campaña de una empresa de bebidas, y su nombre aparecerá solo en letras pequeñas al final. Además, quieren quitar con el ordenador las grúas y los cables «porque son feos».', en: 'An advertising agency wants to buy Yusuf’s seven thousand photos to make a video of the city passing through twenty years in one minute. They offer good money, but the video will be for a drinks company’s campaign, and his name will only appear in small letters at the end. They also want to digitally remove the cranes and cables “because they’re ugly”.' },
          opener: { es: 'Las grúas y los cables son justamente la historia. Si los quitan, mi diario de la ciudad se convierte en una postal falsa. Pero tengo cincuenta y ocho años, mi cámara está vieja y nunca gané dinero de verdad con estas fotos. Mi hijo dice que acepte y que después haga mi propio libro. Mi mujer dice que no venda mi alma por una bebida. ¿Qué harías tú?', en: 'The cranes and cables are exactly the history. If they remove them, my diary of the city becomes a fake postcard. But I’m fifty-eight, my camera is old and I never made real money from these photos. My son says I should accept and then make my own book. My wife says I shouldn’t sell my soul for a drink. What would you do?' },
          decide: {
            ask: { es: '¿Qué decide Yusuf?', en: 'What does Yusuf decide?' },
            options: [
              { say: { es: 'Aceptar, pero sin borrar nada.', en: 'Accept, but without deleting anything.' }, then: { es: 'La agencia acepta a regañadientes. El video tiene millones de visitas y alguien escribe: «Me encantan las grúas».', en: 'The agency reluctantly agrees. The video gets millions of views and someone writes: “I love the cranes.”' } },
              { say: { es: 'No vender y publicar su propio video gratis.', en: 'Not sell and publish his own video for free.' }, then: { es: 'Su video tiene menos visitas, pero un museo lo llama para una exposición.', en: 'His video gets fewer views, but a museum calls him for an exhibition.' } },
              { say: { es: 'Vender y usar el dinero para el libro.', en: 'Sell and use the money for the book.' }, then: { es: 'El anuncio no le gusta, pero el libro sale un año después con todas las grúas.', en: 'He doesn’t like the advert, but the book comes out a year later with all the cranes.' } },
            ],
          },
          twist: { es: 'Yusuf descubre que en algunas de sus fotos se ven personas en sus balcones, que nunca dieron permiso. ¿Puede usarlas en un anuncio?', en: 'Yusuf discovers that some of his photos show people on their balconies who never gave permission. Can he use them in an advert?' },
          questions: [
            { q: { es: '¿Venderías tu trabajo para algo que no te gusta?', en: 'Would you sell your work for something you don’t like?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Por cuánto?', en: 'For how much?' }, { es: '¿Te pasó algo parecido?', en: 'Has something similar happened to you?' }] },
            { q: { es: '¿Retocas tus fotos antes de publicarlas?', en: 'Do you retouch your photos before posting them?' }, help: { es: 'Sí, un poco… / No, nunca.', en: 'Yes, a bit… / No, never.' }, follow: [{ es: '¿Qué cambias?', en: 'What do you change?' }, { es: '¿Es mentir?', en: 'Is it lying?' }] },
            { q: { es: '¿Qué tiene tu ciudad que es feo pero forma parte de su historia?', en: 'What does your city have that is ugly but part of its history?' }, help: { es: 'Hay un/una… que…', en: 'There’s a… that…' }, follow: [{ es: '¿Lo quitarías?', en: 'Would you remove it?' }, { es: '¿Qué dice la gente?', en: 'What do people say?' }] },
            { q: { es: '¿Hace falta permiso para fotografiar a la gente en la calle?', en: 'Do you need permission to photograph people in the street?' }, help: { es: 'Creo que sí/no, porque…', en: 'I think so/not, because…' }, follow: [{ es: '¿Y si es para un anuncio?', en: 'And if it’s for an advert?' }, { es: '¿Y en tu país?', en: 'And in your country?' }] },
          ],
          words: [{ es: 'la agencia de publicidad', en: 'the advertising agency' }, { es: 'la campaña', en: 'the campaign' }, { es: 'quitar', en: 'to remove' }, { es: 'el anuncio', en: 'the advert' }, { es: 'a regañadientes', en: 'reluctantly' }],
        },
        B1: {
          scene: { es: 'Las fotos de Jerusalén dan la vuelta al mundo cada día, y casi siempre muestran lo mismo: o la postal dorada de los lugares sagrados o las imágenes de conflicto de las noticias. Yusuf ha decidido hacer una exposición con otra mirada: la vida cotidiana de la ciudad. Un panadero al amanecer, unas niñas que saltan a la cuerda, un anciano que juega al backgammon. Pero el museo que lo invita le pide incluir «algunas fotos fuertes» para atraer al público y a la prensa internacional.', en: 'Photos of Jerusalem travel around the world every day, and they almost always show the same thing: either the golden postcard of the holy sites or the conflict images from the news. Yusuf has decided to make an exhibition with a different gaze: the city’s everyday life. A baker at dawn, girls skipping rope, an old man playing backgammon. But the museum that invites him asks him to include “some strong photos” to attract the public and the international press.' },
          opener: { es: 'No quiero esconder nada; la ciudad tiene heridas y todos lo sabemos. Pero cuando alguien en otro país piensa en Jerusalén, solo imagina dos cosas: rezar o pelear. Y aquí la gente también se enamora, se aburre en el autobús, celebra cumpleaños y discute por el aparcamiento. Si incluyo las fotos fuertes, la gente vendrá, pero solo recordará esas. Si no las incluyo, quizás no venga nadie. ¿Tiene un fotógrafo la responsabilidad de mostrar la realidad completa o puede elegir mostrar solo una parte?', en: 'I don’t want to hide anything; the city has wounds and we all know it. But when someone in another country thinks of Jerusalem, they only picture two things: praying or fighting. And here people also fall in love, get bored on the bus, celebrate birthdays and argue about parking. If I include the strong photos, people will come, but they’ll only remember those. If I don’t, maybe nobody will come. Does a photographer have a responsibility to show the whole reality, or can he choose to show only a part?' },
          decide: {
            ask: { es: '¿Cómo arma Yusuf la exposición?', en: 'How does Yusuf put the exhibition together?' },
            options: [
              { say: { es: 'Solo vida cotidiana, sin fotos fuertes.', en: 'Only everyday life, no strong photos.' }, then: { es: 'Las primeras semanas va poca gente. Después, un artículo dice: «La Jerusalén que nadie nos enseña». La sala se llena.', en: 'The first weeks few people come. Then an article says: “The Jerusalem nobody shows us.” The room fills up.' } },
              { say: { es: 'Una sala de vida cotidiana y otra más dura, separadas.', en: 'One room of everyday life and a harder one, separate.' }, then: { es: 'Los visitantes eligen el orden. Muchos dicen que la segunda sala se entiende mejor después de la primera.', en: 'Visitors choose the order. Many say the second room makes more sense after the first.' } },
              { say: { es: 'Mezclar todo, como es la ciudad.', en: 'Mix everything, as the city is.' }, then: { es: 'Una boda al lado de un control policial. Algunos se sienten incómodos; nadie se va indiferente.', en: 'A wedding next to a police checkpoint. Some feel uncomfortable; nobody leaves indifferent.' } },
            ],
          },
          twist: { es: 'Un visitante escribe en el libro de la exposición: «Sus fotos bonitas esconden el sufrimiento». Otro escribe al lado: «Por fin alguien nos muestra como personas». Los dos son de la misma ciudad. ¿A quién debería escuchar Yusuf?', en: 'A visitor writes in the exhibition book: “Your pretty photos hide the suffering.” Another writes next to it: “Finally someone shows us as people.” Both are from the same city. Who should Yusuf listen to?' },
          questions: [
            { q: { es: '¿Qué imagen tiene tu país en las noticias internacionales?', en: 'What image does your country have in the international news?' }, help: { es: 'Normalmente muestran… pero la realidad…', en: 'They usually show… but the reality…' }, follow: [{ es: '¿Te molesta?', en: 'Does it bother you?' }, { es: '¿Qué mostrarías tú?', en: 'What would you show?' }] },
            { q: { es: '¿Mostrar solo lo bonito es una forma de mentir?', en: 'Is showing only the beautiful side a form of lying?' }, help: { es: 'No necesariamente, porque… / Sí, cuando…', en: 'Not necessarily, because… / Yes, when…' }, follow: [{ es: '¿Y en las redes sociales?', en: 'And on social media?' }, { es: '¿Tú lo haces?', en: 'Do you do it?' }] },
            { q: { es: '¿Las imágenes fuertes ayudan a entender o solo impresionan?', en: 'Do strong images help understanding or only shock?' }, help: { es: 'Creo que… depende de…', en: 'I think… it depends on…' }, follow: [{ es: '¿Recuerdas una foto así?', en: 'Do you remember a photo like that?' }, { es: '¿Te cambió algo?', en: 'Did it change anything for you?' }] },
            { q: { es: '¿Qué foto de tu vida cotidiana explicaría mejor tu ciudad?', en: 'Which photo of your daily life would best explain your city?' }, help: { es: 'Sacaría una foto de…', en: 'I’d take a photo of…' }, follow: [{ es: '¿Por qué esa?', en: 'Why that one?' }, { es: '¿Qué no se vería?', en: 'What wouldn’t be seen?' }] },
          ],
          words: [{ es: 'la mirada', en: 'the gaze' }, { es: 'cotidiano', en: 'everyday' }, { es: 'la herida', en: 'the wound' }, { es: 'esconder', en: 'to hide' }, { es: 'indiferente', en: 'indifferent' }],
        },
      },
    },
  ],
};
