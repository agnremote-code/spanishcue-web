// Cataluña · Barcelona: the Sagrada Família, La Boqueria market, the Barceloneta
// beach, a human-tower team and the football stadium. Five places, four levels
// each (A0, A1, A2, B1), every level written on its own.
export default {
  id: 'cataluna',
  spots: [
    // ------------------------------------------------------------ the Sagrada Família
    {
      id: 'sagrada',
      name: { es: 'La Sagrada Família', en: 'The Sagrada Família' },
      who: { name: 'Jordi', role: { es: 'guía', en: 'tour guide' } },
      levels: {
        A0: {
          scene: { es: 'Es una iglesia enorme y muy rara. Tiene torres altas y muchos colores. Jordi es guía. Hay muchos turistas.', en: 'It is a huge and very unusual church. It has tall towers and many colours. Jordi is a guide. There are many tourists.' },
          opener: { es: 'Hola, soy Jordi. ¡Bienvenido a Barcelona! ¿Te gusta?', en: 'Hi, I am Jordi. Welcome to Barcelona! Do you like it?' },
          decide: {
            ask: { es: '¿Qué quieres ver primero?', en: 'What do you want to see first?' },
            options: [
              { say: { es: 'Las torres.', en: 'The towers.' }, then: { es: 'Jordi dice: «Son muy altas. ¡Hay un ascensor!»', en: 'Jordi says: “They are very tall. There is a lift!”' } },
              { say: { es: 'Las ventanas de colores.', en: 'The coloured windows.' }, then: { es: 'Jordi dice: «Con el sol, todo es rojo, verde y azul».', en: 'Jordi says: “With the sun, everything is red, green and blue.”' } },
              { say: { es: 'La puerta grande.', en: 'The big door.' }, then: { es: 'Jordi dice: «Mira: hay animales y plantas en la piedra».', en: 'Jordi says: “Look: there are animals and plants in the stone.”' } },
            ],
          },
          twist: { es: 'Jordi dice: «La iglesia no está terminada. ¡Empezó en 1882!». ¿Qué dices?', en: 'Jordi says: “The church is not finished. It started in 1882!” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los edificios antiguos?', en: 'Do you like old buildings?' }, help: { es: 'Sí, mucho. / Prefiero los modernos.', en: 'Yes, a lot. / I prefer modern ones.' }, follow: [{ es: '¿Hay uno en tu ciudad?', en: 'Is there one in your city?' }, { es: '¿Cómo es?', en: 'What is it like?' }] },
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Me gusta el…', en: 'I like…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }] },
            { q: { es: '¿Subes a las torres en los viajes?', en: 'Do you go up towers on trips?' }, help: { es: 'Sí, siempre. / No, me da miedo.', en: 'Yes, always. / No, I am scared.' }, follow: [{ es: '¿Cuál fue la más alta?', en: 'Which was the tallest?' }, { es: '¿Por las escaleras?', en: 'By the stairs?' }] },
            { q: { es: '¿Conoces Barcelona?', en: 'Do you know Barcelona?' }, help: { es: 'Sí, un poco. / No, todavía no.', en: 'Yes, a little. / No, not yet.' }, follow: [{ es: '¿Qué quieres ver?', en: 'What do you want to see?' }, { es: '¿Con quién vas?', en: 'Who are you going with?' }] },
          ],
          words: [{ es: 'la iglesia', en: 'the church' }, { es: 'la torre', en: 'the tower' }, { es: 'el ascensor', en: 'the lift' }, { es: 'la piedra', en: 'stone' }, { es: 'terminado', en: 'finished' }],
        },
        A1: {
          scene: { es: 'La Sagrada Família es la obra más famosa del arquitecto Antoni Gaudí. Se construye desde hace más de cien años con el dinero de las entradas. Jordi hace visitas en catalán, español e inglés.', en: 'The Sagrada Família is the most famous work of the architect Antoni Gaudí. It has been under construction for over a hundred years, paid for with ticket money. Jordi gives tours in Catalan, Spanish and English.' },
          opener: { es: 'Gaudí decía que su cliente no tenía prisa. Por eso tardamos tanto. Las columnas de dentro parecen árboles: él copiaba la naturaleza. En Barcelona hablamos catalán y español. ¿Sabes alguna palabra en catalán?', en: 'Gaudí used to say his client was in no hurry. That’s why it’s taking so long. The columns inside look like trees: he copied nature. In Barcelona we speak Catalan and Spanish. Do you know any words in Catalan?' },
          decide: {
            ask: { es: 'Tienes una mañana libre en Barcelona. ¿Qué haces después?', en: 'You have a free morning in Barcelona. What do you do next?' },
            options: [
              { say: { es: 'Voy al Park Güell, otra obra de Gaudí.', en: 'I go to Park Güell, another work by Gaudí.' }, then: { es: 'Ves un dragón de colores y bancos largos con vistas a toda la ciudad.', en: 'You see a colourful dragon and long benches with views of the whole city.' } },
              { say: { es: 'Paseo por el barrio Gótico.', en: 'I walk around the Gothic Quarter.' }, then: { es: 'Te pierdes en calles estrechas y encuentras una plaza con músicos.', en: 'You get lost in narrow streets and find a square with musicians.' } },
              { say: { es: 'Aprendo tres palabras en catalán con Jordi.', en: 'I learn three words in Catalan with Jordi.' }, then: { es: 'Aprendes «bon dia», «gràcies» y «adéu». La gente sonríe cuando las usas.', en: 'You learn “bon dia”, “gràcies” and “adéu”. People smile when you use them.' } },
            ],
          },
          twist: { es: 'Una turista pregunta si la iglesia va a estar terminada mañana. Jordi se ríe. ¿Qué le dices tú?', en: 'A tourist asks if the church will be finished tomorrow. Jordi laughs. What do you tell her?' },
          questions: [
            { q: { es: '¿Hablas más de un idioma?', en: 'Do you speak more than one language?' }, help: { es: 'Sí, hablo… y… / No, solo…', en: 'Yes, I speak… and… / No, only…' }, follow: [{ es: '¿Dónde los usas?', en: 'Where do you use them?' }, { es: '¿Cuál prefieres?', en: 'Which do you prefer?' }] },
            { q: { es: '¿Qué arquitecto o artista famoso hay en tu país?', en: 'What famous architect or artist is there in your country?' }, help: { es: 'En mi país, … es muy famoso.', en: 'In my country, … is very famous.' }, follow: [{ es: '¿Qué hizo?', en: 'What did they make?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Te gusta perderte en una ciudad nueva?', en: 'Do you like getting lost in a new city?' }, help: { es: 'Sí, me encanta. / No, uso el mapa.', en: 'Yes, I love it. / No, I use the map.' }, follow: [{ es: '¿Qué encontraste una vez?', en: 'What did you find once?' }, { es: '¿Usas el móvil?', en: 'Do you use your phone?' }] },
            { q: { es: '¿Tienes paciencia?', en: 'Are you patient?' }, help: { es: 'Sí, mucha. / No, ninguna.', en: 'Yes, very. / No, not at all.' }, follow: [{ es: '¿Cuándo pierdes la paciencia?', en: 'When do you lose patience?' }, { es: '¿Esperas bien en las filas?', en: 'Do you wait well in queues?' }] },
          ],
          words: [{ es: 'la obra', en: 'the work (of art)' }, { es: 'el arquitecto', en: 'the architect' }, { es: 'la columna', en: 'the column' }, { es: 'tener prisa', en: 'to be in a hurry' }, { es: 'estrecho', en: 'narrow' }],
        },
        A2: {
          scene: { es: 'Jordi lleva un grupo de veinte personas. A mitad de la visita, un niño desaparece. Los padres están desesperados. La iglesia está llena: hay miles de visitantes ese día.', en: 'Jordi is leading a group of twenty people. Halfway through the tour, a child goes missing. The parents are desperate. The church is packed: there are thousands of visitors that day.' },
          opener: { es: 'En quince años de guía nunca había perdido a nadie. Le dije al grupo que se quedara junto a la puerta y llamé a seguridad. La madre lloraba, el padre gritaba el nombre del niño. Yo intentaba pensar como un niño de seis años. ¿Dónde irías tú si tuvieras seis años?', en: 'In fifteen years as a guide I had never lost anyone. I told the group to stay by the door and called security. The mother was crying, the father was shouting the boy’s name. I was trying to think like a six-year-old. Where would you go if you were six?' },
          decide: {
            ask: { es: 'Jordi tiene que decidir dónde buscar primero. ¿Qué le dices?', en: 'Jordi has to decide where to look first. What do you tell him?' },
            options: [
              { say: { es: 'En la tienda de recuerdos, donde hay juguetes.', en: 'In the gift shop, where there are toys.' }, then: { es: 'No está allí, pero la cajera dice que vio a un niño mirando hacia arriba, cerca de las columnas.', en: 'He isn’t there, but the cashier says she saw a boy looking up, near the columns.' } },
              { say: { es: 'Debajo de las ventanas de colores.', en: 'Under the coloured windows.' }, then: { es: 'Lo encuentran sentado en el suelo, mirando la luz. Dice que estaba «dentro de un arcoíris».', en: 'They find him sitting on the floor, looking at the light. He says he was “inside a rainbow”.' } },
              { say: { es: 'Que anuncien su nombre por los altavoces.', en: 'Have his name announced over the loudspeakers.' }, then: { es: 'Un vigilante lo trae de la mano en cinco minutos. El niño no entiende por qué todos lloran.', en: 'A guard brings him by the hand in five minutes. The boy doesn’t understand why everyone is crying.' } },
            ],
          },
          twist: { es: 'Al final de la visita, el niño le regala a Jordi un dibujo de la iglesia… terminada, con todas las torres.', en: 'At the end of the tour, the boy gives Jordi a drawing of the church… finished, with all its towers.' },
          questions: [
            { q: { es: '¿Te perdiste alguna vez de niño?', en: 'Did you ever get lost as a child?' }, help: { es: 'Sí, una vez en… / No, nunca.', en: 'Yes, once in… / No, never.' }, follow: [{ es: '¿Cómo te encontraron?', en: 'How did they find you?' }, { es: '¿Tuviste miedo?', en: 'Were you scared?' }] },
            { q: { es: '¿Qué hacías cuando eras niño en los museos o iglesias?', en: 'What did you do in museums or churches as a child?' }, help: { es: 'Me aburría / Miraba… / Corría…', en: 'I got bored / I looked at… / I ran…' }, follow: [{ es: '¿Y ahora?', en: 'And now?' }, { es: '¿Qué te gustaba?', en: 'What did you like?' }] },
            { q: { es: '¿Cómo reaccionas en una emergencia?', en: 'How do you react in an emergency?' }, help: { es: 'Me pongo nervioso / Me quedo tranquilo…', en: 'I get nervous / I stay calm…' }, follow: [{ es: '¿Te pasó alguna vez?', en: 'Has it ever happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Qué lugar te pareció mágico alguna vez?', en: 'What place has ever seemed magical to you?' }, help: { es: 'Una vez estuve en… y…', en: 'Once I was in… and…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Volviste?', en: 'Did you go back?' }] },
          ],
          words: [{ es: 'desaparecer', en: 'to disappear' }, { es: 'desesperado', en: 'desperate' }, { es: 'el altavoz', en: 'the loudspeaker' }, { es: 'el arcoíris', en: 'the rainbow' }, { es: 'la seguridad', en: 'security (staff)' }],
        },
        B1: {
          scene: { es: 'Para terminar la gran escalera de entrada de la Sagrada Família, el proyecto original necesita derribar varios edificios de viviendas de la calle de enfrente. Cientos de familias viven allí desde hace décadas. Jordi vive en uno de esos edificios.', en: 'To finish the great entrance staircase of the Sagrada Família, the original plan requires demolishing several apartment buildings across the street. Hundreds of families have lived there for decades. Jordi lives in one of those buildings.' },
          opener: { es: 'Es una situación absurda: trabajo cada día explicando a los turistas el sueño de Gaudí, y ese sueño incluye derribar mi casa. Mis vecinos dicen que Gaudí nunca hubiera querido echar a nadie. La fundación dice que el proyecto es así desde 1915. ¿Hasta dónde hay que respetar el plan de un genio que murió hace un siglo?', en: 'It is an absurd situation: every day I explain Gaudí’s dream to tourists, and that dream includes demolishing my home. My neighbours say Gaudí would never have wanted to throw anyone out. The foundation says the project has been like this since 1915. How far should you respect the plan of a genius who died a century ago?' },
          decide: {
            ask: { es: 'Hay una consulta en el barrio. ¿Qué le aconsejas a Jordi?', en: 'There is a neighbourhood consultation. What do you advise Jordi?' },
            options: [
              { say: { es: 'Defender un diseño nuevo de la escalera, sin derribar casas.', en: 'Support a new staircase design, without demolishing homes.' }, then: { es: 'Unos arquitectos jóvenes presentan una propuesta. La fundación dice que la estudiará.', en: 'Some young architects present a proposal. The foundation says it will study it.' } },
              { say: { es: 'Aceptar el proyecto si les dan casas nuevas en el mismo barrio.', en: 'Accept the project if they get new homes in the same neighbourhood.' }, then: { es: 'La negociación dura años. Muchos vecinos mayores prefieren no vivir para verla.', en: 'The negotiation takes years. Many older neighbours would rather not live to see it.' } },
              { say: { es: 'Contar el conflicto en sus visitas, con honestidad.', en: 'Talk honestly about the conflict on his tours.' }, then: { es: 'Su jefe no está contento, pero los turistas le hacen más preguntas que nunca.', en: 'His boss isn’t happy, but tourists ask him more questions than ever.' } },
            ],
          },
          twist: { es: 'En el archivo de la fundación, Jordi encuentra una carta en la que Gaudí dice que los que vengan después deben adaptar el proyecto a su tiempo.', en: 'In the foundation’s archive, Jordi finds a letter in which Gaudí says that those who come after him should adapt the project to their own time.' },
          questions: [
            { q: { es: '¿Hay que terminar las obras exactamente como las imaginó su autor?', en: 'Should works be finished exactly as their creator imagined them?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Y en la música o los libros?', en: 'And in music or books?' }, { es: '¿Conoces otro caso?', en: 'Do you know another case?' }] },
            { q: { es: '¿Qué pesa más: un monumento o las casas de la gente?', en: 'What matters more: a monument or people’s homes?' }, help: { es: 'Para mí pesa más… porque…', en: 'For me, … matters more because…' }, follow: [{ es: '¿Hay excepciones?', en: 'Are there exceptions?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Tu trabajo choca alguna vez con tus intereses personales?', en: 'Does your work ever clash with your personal interests?' }, help: { es: 'Sí, cuando… / No, nunca me ha pasado.', en: 'Yes, when… / No, it has never happened to me.' }, follow: [{ es: '¿Cómo lo resolviste?', en: 'How did you solve it?' }, { es: '¿Lo hablaste con alguien?', en: 'Did you talk to anyone about it?' }] },
            { q: { es: '¿Es bueno que una ciudad dependa tanto de un monumento turístico?', en: 'Is it good for a city to depend so much on a tourist monument?' }, help: { es: 'Tiene ventajas, como… pero también…', en: 'It has advantages, like… but also…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Qué alternativas hay?', en: 'What alternatives are there?' }] },
          ],
          words: [{ es: 'derribar', en: 'to demolish' }, { es: 'la vivienda', en: 'housing / home' }, { es: 'la fundación', en: 'the foundation' }, { es: 'echar', en: 'to throw out' }, { es: 'la consulta', en: 'the consultation / vote' }],
        },
      },
    },
    // ------------------------------------------------------------ La Boqueria market
    {
      id: 'boqueria',
      name: { es: 'El mercado de La Boqueria', en: 'La Boqueria market' },
      who: { name: 'Montse', role: { es: 'frutera', en: 'fruit seller' } },
      levels: {
        A0: {
          scene: { es: 'Es un mercado grande y con muchos colores. Hay fruta, pescado y jamón. Montse vende fruta y zumos.', en: 'It is a big, colourful market. There is fruit, fish and ham. Montse sells fruit and juices.' },
          opener: { es: '¡Bon dia! Soy Montse. ¿Quieres un zumo?', en: 'Good morning! I am Montse. Do you want a juice?' },
          decide: {
            ask: { es: 'Montse tiene tres zumos. ¿Cuál quieres?', en: 'Montse has three juices. Which one do you want?' },
            options: [
              { say: { es: 'De naranja, por favor.', en: 'Orange, please.' }, then: { es: 'Montse dice: «Es el clásico. Dos euros».', en: 'Montse says: “It is the classic. Two euros.”' } },
              { say: { es: 'De fresa y plátano.', en: 'Strawberry and banana.' }, then: { es: 'Montse dice: «¡Muy dulce! Es mi favorito».', en: 'Montse says: “Very sweet! It is my favourite.”' } },
              { say: { es: 'De mango y coco.', en: 'Mango and coconut.' }, then: { es: 'Montse dice: «¡Tropical! Perfecto para el calor».', en: 'Montse says: “Tropical! Perfect for the heat.”' } },
            ],
          },
          twist: { es: 'Montse te da una fruta rara de regalo. Es roja y tiene pelos. ¿La pruebas?', en: 'Montse gives you a strange fruit as a gift. It is red and hairy. Do you try it?' },
          questions: [
            { q: { es: '¿Qué fruta te gusta?', en: 'What fruit do you like?' }, help: { es: 'Me gusta la manzana / la naranja…', en: 'I like apples / oranges…' }, follow: [{ es: '¿Cuándo la comes?', en: 'When do you eat it?' }, { es: '¿Dónde la compras?', en: 'Where do you buy it?' }] },
            { q: { es: '¿Tomas zumo por la mañana?', en: 'Do you drink juice in the morning?' }, help: { es: 'Sí, de naranja. / No, tomo café.', en: 'Yes, orange. / No, I drink coffee.' }, follow: [{ es: '¿Lo haces tú?', en: 'Do you make it yourself?' }, { es: '¿Con azúcar?', en: 'With sugar?' }] },
            { q: { es: '¿Te gusta el pescado?', en: 'Do you like fish?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿Qué pescado?', en: 'Which fish?' }, { es: '¿Cocinas pescado?', en: 'Do you cook fish?' }] },
            { q: { es: '¿Vas al mercado?', en: 'Do you go to the market?' }, help: { es: 'Sí, los sábados. / No, voy al supermercado.', en: 'Yes, on Saturdays. / No, I go to the supermarket.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Con quién?', en: 'With whom?' }] },
          ],
          words: [{ es: 'el mercado', en: 'the market' }, { es: 'el zumo', en: 'juice (Spain)' }, { es: 'la fresa', en: 'strawberry' }, { es: 'el plátano', en: 'banana' }, { es: 'el pescado', en: 'fish (food)' }],
        },
        A1: {
          scene: { es: 'La Boqueria está en las Ramblas y tiene más de ochocientos años. Montse es la cuarta generación de su familia en el mismo puesto. Por la mañana llegan cocineros de restaurantes y, a mediodía, miles de turistas.', en: 'La Boqueria is on the Ramblas and is over eight hundred years old. Montse is the fourth generation of her family at the same stall. In the morning, restaurant chefs arrive and, at midday, thousands of tourists.' },
          opener: { es: 'Mi bisabuela vendía aquí las mismas naranjas. Antes los clientes eran vecinos que compraban para toda la semana. Ahora muchos compran un zumo, sacan una foto y se van. A mí me gustan los dos tipos de clientes, pero los vecinos me cuentan su vida. ¿Tú qué compras en un mercado?', en: 'My great-grandmother sold the same oranges here. Customers used to be locals buying for the whole week. Now many buy a juice, take a photo and leave. I like both kinds of customers, but the locals tell me about their lives. What do you buy at a market?' },
          decide: {
            ask: { es: 'Quieres cocinar algo típico catalán esta noche. Montse te ayuda. ¿Qué eliges?', en: 'You want to cook something typically Catalan tonight. Montse helps you. What do you choose?' },
            options: [
              { say: { es: 'Pa amb tomàquet: pan, tomates maduros y aceite.', en: 'Pa amb tomàquet: bread, ripe tomatoes and oil.' }, then: { es: 'Montse te explica: frotas unos tomates maduros en el pan, pones aceite y sal. ¡Fácil y delicioso!', en: 'Montse explains: you rub some ripe tomatoes on the bread, add oil and salt. Easy and delicious!' } },
              { say: { es: 'Una crema catalana de postre.', en: 'A crema catalana for dessert.' }, then: { es: 'Necesitas leche, huevos, azúcar y canela. Montse te escribe la receta de su abuela.', en: 'You need milk, eggs, sugar and cinnamon. Montse writes down her grandmother’s recipe for you.' } },
              { say: { es: 'Una ensalada con frutas de temporada.', en: 'A salad with seasonal fruit.' }, then: { es: 'Montse elige higos, melocotón y uvas. «Lo que está en el árbol ahora».', en: 'Montse picks figs, peach and grapes. “What is on the tree right now.”' } },
            ],
          },
          twist: { es: 'Un turista toca toda la fruta con las manos y no compra nada. Montse se enfada. ¿Qué haces?', en: 'A tourist touches all the fruit with his hands and doesn’t buy anything. Montse gets angry. What do you do?' },
          questions: [
            { q: { es: '¿Qué comida típica sabes cocinar?', en: 'What typical dish can you cook?' }, help: { es: 'Sé cocinar… / No sé cocinar nada.', en: 'I can cook… / I can’t cook anything.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Para quién cocinas?', en: 'Who do you cook for?' }] },
            { q: { es: '¿Tu familia tiene un negocio o un oficio?', en: 'Does your family have a business or trade?' }, help: { es: 'Sí, mi padre / madre… / No.', en: 'Yes, my father / mother… / No.' }, follow: [{ es: '¿Trabajarías allí?', en: 'Would you work there?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
            { q: { es: '¿Compras fruta de temporada?', en: 'Do you buy seasonal fruit?' }, help: { es: 'Sí, en verano compro… / No me fijo.', en: 'Yes, in summer I buy… / I don’t pay attention.' }, follow: [{ es: '¿Cuál es tu temporada favorita?', en: 'What is your favourite season?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Te molestan los turistas?', en: 'Do tourists bother you?' }, help: { es: 'A veces, cuando… / No, me gustan.', en: 'Sometimes, when… / No, I like them.' }, follow: [{ es: '¿Eres buen turista?', en: 'Are you a good tourist?' }, { es: '¿Qué no haces nunca?', en: 'What do you never do?' }] },
          ],
          words: [{ es: 'el puesto', en: 'the stall' }, { es: 'la bisabuela', en: 'the great-grandmother' }, { es: 'frotar', en: 'to rub' }, { es: 'de temporada', en: 'seasonal' }, { es: 'enfadarse', en: 'to get angry (Spain)' }],
        },
        A2: {
          scene: { es: 'Es viernes y un famoso cocinero con estrellas Michelin compra en el puesto de Montse. Le propone venderle toda la fruta de la semana a un precio muy bueno, pero solo si deja de vender a los clientes normales los viernes.', en: 'It is Friday and a famous Michelin-starred chef is buying at Montse’s stall. He offers to buy all her fruit for the week at a very good price, but only if she stops selling to ordinary customers on Fridays.' },
          opener: { es: 'Con ese dinero podría arreglar el puesto, que tiene cien años y se cae a trozos. Pero los viernes viene la señora Rosa, que tiene noventa años y compra dos peras. Y viene el chico de la escuela de al lado a por su plátano. ¿Tú renunciarías a tus clientes de siempre por un cliente importante?', en: 'With that money I could fix up the stall, which is a hundred years old and falling apart. But on Fridays Mrs Rosa comes, who is ninety and buys two pears. And the boy from the school next door comes for his banana. Would you give up your regular customers for one important client?' },
          decide: {
            ask: { es: 'Montse tiene que contestar al cocinero hoy. ¿Qué le aconsejas?', en: 'Montse has to answer the chef today. What do you advise?' },
            options: [
              { say: { es: 'Que acepte, pero guarde un poco de fruta para Rosa y el chico.', en: 'Accept, but keep a little fruit for Rosa and the boy.' }, then: { es: 'El cocinero no se entera. Rosa recibe sus peras en una bolsa secreta debajo del mostrador.', en: 'The chef doesn’t find out. Rosa gets her pears in a secret bag under the counter.' } },
              { say: { es: 'Que diga que no: sus clientes son su vida.', en: 'Say no: her customers are her life.' }, then: { es: 'El cocinero se va molesto, pero vuelve un mes después: «Su fruta es la mejor. Compraré como todos».', en: 'The chef leaves annoyed, but comes back a month later: “Your fruit is the best. I’ll buy like everyone else.”' } },
              { say: { es: 'Que proponga venderle todo los martes, no los viernes.', en: 'Offer to sell him everything on Tuesdays, not Fridays.' }, then: { es: 'El cocinero cambia el menú de su restaurante. Ahora hay un «martes de mercado».', en: 'The chef changes his restaurant’s menu. Now there is a “market Tuesday”.' } },
            ],
          },
          twist: { es: 'La señora Rosa le cuenta a Montse que, hace sesenta años, ese mismo cocinero era un niño que robaba manzanas del puesto de su bisabuela.', en: 'Mrs Rosa tells Montse that, sixty years ago, that same chef was a boy who stole apples from her great-grandmother’s stall.' },
          questions: [
            { q: { es: '¿Eres cliente fiel de alguna tienda?', en: 'Are you a loyal customer of any shop?' }, help: { es: 'Sí, siempre compro en… / No, compro donde sea.', en: 'Yes, I always buy at… / No, I buy anywhere.' }, follow: [{ es: '¿Por qué ahí?', en: 'Why there?' }, { es: '¿Te conocen?', en: 'Do they know you?' }] },
            { q: { es: '¿Has dicho que no a una buena oferta?', en: 'Have you ever said no to a good offer?' }, help: { es: 'Sí, una vez rechacé… / No, nunca.', en: 'Yes, once I turned down… / No, never.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Qué hacías de niño que ahora te da vergüenza?', en: 'What did you do as a child that embarrasses you now?' }, help: { es: 'Cuando era niño, yo…', en: 'When I was a child, I…' }, follow: [{ es: '¿Alguien lo sabe?', en: 'Does anyone know?' }, { es: '¿Te castigaron?', en: 'Were you punished?' }] },
            { q: { es: '¿Prefieres los mercados o los supermercados?', en: 'Do you prefer markets or supermarkets?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Es más caro?', en: 'Is it more expensive?' }, { es: '¿Qué ventajas tiene?', en: 'What are the advantages?' }] },
          ],
          words: [{ es: 'caerse a trozos', en: 'to fall apart' }, { es: 'renunciar', en: 'to give up' }, { es: 'el mostrador', en: 'the counter' }, { es: 'enterarse', en: 'to find out' }, { es: 'fiel', en: 'loyal' }],
        },
        B1: {
          scene: { es: 'La Boqueria tiene tantos turistas que muchos puestos de fruta se han convertido en bares de comida rápida para visitantes. El ayuntamiento quiere prohibir los grupos turísticos grandes los viernes y sábados por la mañana para que los vecinos puedan hacer la compra.', en: 'La Boqueria has so many tourists that many fruit stalls have turned into fast-food bars for visitors. The city council wants to ban large tour groups on Friday and Saturday mornings so locals can do their shopping.' },
          opener: { es: 'Mis compañeros están divididos. Los que venden zumos y brochetas de fruta para turistas dicen que la prohibición los va a arruinar. Los que venden verdura, carne y pescado dicen que, sin vecinos, el mercado se muere. Yo vendo las dos cosas. ¿Un mercado es un servicio para el barrio o un negocio como cualquier otro?', en: 'My colleagues are divided. Those who sell juices and fruit skewers to tourists say the ban will ruin them. Those who sell vegetables, meat and fish say that without locals the market will die. I sell both. Is a market a service for the neighbourhood or a business like any other?' },
          decide: {
            ask: { es: 'La asociación de vendedores pide la opinión de Montse. ¿Qué le recomiendas?', en: 'The sellers’ association asks for Montse’s opinion. What do you recommend?' },
            options: [
              { say: { es: 'Apoyar la prohibición los sábados, no los viernes.', en: 'Support the ban on Saturdays, not Fridays.' }, then: { es: 'El acuerdo convence a la mayoría. Los vecinos vuelven poco a poco los sábados.', en: 'The compromise convinces the majority. Locals gradually return on Saturdays.' } },
              { say: { es: 'Proponer horarios: mañanas para vecinos, tardes para turistas.', en: 'Propose time slots: mornings for locals, afternoons for tourists.' }, then: { es: 'Es difícil de controlar, pero el ambiente de la mañana cambia por completo.', en: 'It is hard to control, but the morning atmosphere changes completely.' } },
              { say: { es: 'Rechazar la prohibición y pedir un impuesto turístico para el mercado.', en: 'Reject the ban and ask for a tourist tax for the market.' }, then: { es: 'El dinero arregla el techo y baja los alquileres de los puestos de verdura.', en: 'The money fixes the roof and lowers the rents of the vegetable stalls.' } },
            ],
          },
          twist: { es: 'El hijo de Montse, de veinte años, le anuncia que quiere seguir con el puesto… pero convertirlo en un bar de zumos.', en: 'Montse’s twenty-year-old son announces that he wants to carry on with the stall… but turn it into a juice bar.' },
          questions: [
            { q: { es: '¿Un mercado debería proteger a los vecinos antes que a los turistas?', en: 'Should a market protect locals before tourists?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Y otros lugares?', en: 'And other places?' }, { es: '¿Cómo se haría?', en: 'How would it be done?' }] },
            { q: { es: '¿Estás a favor de los impuestos turísticos?', en: 'Are you in favour of tourist taxes?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Has pagado alguno?', en: 'Have you paid one?' }, { es: '¿En qué debería gastarse?', en: 'What should it be spent on?' }] },
            { q: { es: '¿Los hijos deben continuar el negocio familiar a su manera?', en: 'Should children carry on the family business their own way?' }, help: { es: 'Me parece bien que… / Deberían respetar…', en: 'I think it is fine that… / They should respect…' }, follow: [{ es: '¿Qué harías tú?', en: 'What would you do?' }, { es: '¿Conoces un caso?', en: 'Do you know a case?' }] },
            { q: { es: '¿Qué lugar de tu ciudad ha cambiado por el turismo?', en: 'What place in your city has changed because of tourism?' }, help: { es: 'Antes… y ahora…', en: 'Before… and now…' }, follow: [{ es: '¿Es mejor o peor?', en: 'Is it better or worse?' }, { es: '¿Qué harías?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'la brocheta', en: 'the skewer' }, { es: 'arruinar', en: 'to ruin' }, { es: 'hacer la compra', en: 'to do the shopping' }, { es: 'el impuesto', en: 'the tax' }, { es: 'el techo', en: 'the roof' }],
        },
      },
    },
    // ------------------------------------------------------------ the Barceloneta beach
    {
      id: 'barceloneta',
      name: { es: 'La playa de la Barceloneta', en: 'Barceloneta beach' },
      who: { name: 'Marc', role: { es: 'socorrista', en: 'lifeguard' } },
      levels: {
        A0: {
          scene: { es: 'Es una playa en la ciudad. Hay sol, arena y mucha gente. Marc es socorrista. Mira el mar todo el día.', en: 'It is a beach in the city. There is sun, sand and many people. Marc is a lifeguard. He watches the sea all day.' },
          opener: { es: 'Hola, soy Marc. ¿Vas a nadar?', en: 'Hi, I am Marc. Are you going to swim?' },
          decide: {
            ask: { es: '¿Qué haces en la playa?', en: 'What do you do at the beach?' },
            options: [
              { say: { es: 'Nado en el mar.', en: 'I swim in the sea.' }, then: { es: 'Marc dice: «El agua está fría hoy. ¡Cuidado!»', en: 'Marc says: “The water is cold today. Careful!”' } },
              { say: { es: 'Tomo el sol.', en: 'I sunbathe.' }, then: { es: 'Marc dice: «¡Usa crema! El sol es fuerte».', en: 'Marc says: “Use sun cream! The sun is strong.”' } },
              { say: { es: 'Juego al vóley.', en: 'I play volleyball.' }, then: { es: 'Marc dice: «¡Muy bien! Hay una red allí».', en: 'Marc says: “Very good! There is a net over there.”' } },
            ],
          },
          twist: { es: 'Hay una bandera roja. Marc dice: «¡Hoy no se puede nadar!». ¿Qué haces?', en: 'There is a red flag. Marc says: “No swimming today!” What do you do?' },
          questions: [
            { q: { es: '¿Te gusta la playa?', en: 'Do you like the beach?' }, help: { es: 'Sí, mucho. / No, prefiero la montaña.', en: 'Yes, a lot. / No, I prefer the mountains.' }, follow: [{ es: '¿Qué playa te gusta?', en: 'Which beach do you like?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Sabes nadar?', en: 'Can you swim?' }, help: { es: 'Sí, nado bien. / Un poco. / No.', en: 'Yes, I swim well. / A little. / No.' }, follow: [{ es: '¿Dónde nadas?', en: 'Where do you swim?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
            { q: { es: '¿Usas crema para el sol?', en: 'Do you use sun cream?' }, help: { es: 'Sí, siempre. / No, nunca.', en: 'Yes, always. / No, never.' }, follow: [{ es: '¿Te quemas?', en: 'Do you get sunburnt?' }, { es: '¿Y los niños?', en: 'And the children?' }] },
            { q: { es: '¿Hay playa en tu ciudad?', en: 'Is there a beach in your city?' }, help: { es: 'Sí, hay una. / No, está lejos.', en: 'Yes, there is one. / No, it is far.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is it called?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
          ],
          words: [{ es: 'la playa', en: 'the beach' }, { es: 'la arena', en: 'sand' }, { es: 'nadar', en: 'to swim' }, { es: 'la crema', en: 'sun cream' }, { es: 'la bandera', en: 'the flag' }],
        },
        A1: {
          scene: { es: 'La Barceloneta es un antiguo barrio de pescadores junto al mar. En verano la playa está llena de turistas, vendedores ambulantes y vecinos que vienen a nadar temprano. Marc trabaja de socorrista de junio a septiembre.', en: 'La Barceloneta is an old fishermen’s neighbourhood by the sea. In summer the beach is full of tourists, street vendors and locals who come to swim early. Marc works as a lifeguard from June to September.' },
          opener: { es: 'Mi turno empieza a las diez. Antes de esa hora, la playa es de los abuelos del barrio: nadan todas las mañanas del año, incluso en enero. Después llegan los turistas y no paran hasta la noche. ¿Tú eres de mañana o de tarde?', en: 'My shift starts at ten. Before that, the beach belongs to the neighbourhood’s grandparents: they swim every morning of the year, even in January. Then the tourists arrive and don’t stop until night. Are you a morning or an afternoon person?' },
          decide: {
            ask: { es: 'Pasas un día en la Barceloneta. ¿Qué haces a mediodía?', en: 'You spend a day in La Barceloneta. What do you do at midday?' },
            options: [
              { say: { es: 'Como una paella en un chiringuito.', en: 'I eat paella at a beach bar.' }, then: { es: 'La paella es buena, pero muy cara. Marc te recomienda un bar del barrio para la próxima vez.', en: 'The paella is good, but very expensive. Marc recommends a neighbourhood bar for next time.' } },
              { say: { es: 'Me quedo en la playa con un bocadillo.', en: 'I stay on the beach with a sandwich.' }, then: { es: 'Una gaviota te roba medio bocadillo. Marc se ríe desde su silla.', en: 'A seagull steals half your sandwich. Marc laughs from his chair.' } },
              { say: { es: 'Paseo por las calles del barrio.', en: 'I walk around the neighbourhood’s streets.' }, then: { es: 'Ves ropa tendida en los balcones y señoras hablando en la puerta de casa.', en: 'You see washing hanging from balconies and women chatting at their front doors.' } },
            ],
          },
          twist: { es: 'Un vendedor ambulante te ofrece un mojito por cinco euros. Marc te hace una señal: «No». ¿Qué haces?', en: 'A street vendor offers you a mojito for five euros. Marc signals to you: “No.” What do you do?' },
          questions: [
            { q: { es: '¿Eres de mañana o de noche?', en: 'Are you a morning or a night person?' }, help: { es: 'Soy de mañana / de noche porque…', en: 'I am a morning / night person because…' }, follow: [{ es: '¿A qué hora te levantas?', en: 'What time do you get up?' }, { es: '¿Cuándo trabajas mejor?', en: 'When do you work best?' }] },
            { q: { es: '¿Nadarías en el mar en invierno?', en: 'Would you swim in the sea in winter?' }, help: { es: '¡Sí! / ¡Nunca!', en: 'Yes! / Never!' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Conoces a alguien que lo hace?', en: 'Do you know someone who does?' }] },
            { q: { es: '¿Qué comes en la playa?', en: 'What do you eat at the beach?' }, help: { es: 'Como bocadillos / fruta / helado…', en: 'I eat sandwiches / fruit / ice cream…' }, follow: [{ es: '¿Lo llevas de casa?', en: 'Do you bring it from home?' }, { es: '¿Y para beber?', en: 'And to drink?' }] },
            { q: { es: '¿Compras cosas a vendedores en la calle?', en: 'Do you buy things from street vendors?' }, help: { es: 'Sí, a veces… / No, nunca.', en: 'Yes, sometimes… / No, never.' }, follow: [{ es: '¿Qué compraste?', en: 'What did you buy?' }, { es: '¿Por qué no?', en: 'Why not?' }] },
          ],
          words: [{ es: 'el pescador', en: 'the fisherman' }, { es: 'el turno', en: 'the shift' }, { es: 'el chiringuito', en: 'the beach bar (Spain)' }, { es: 'la gaviota', en: 'the seagull' }, { es: 'el vendedor ambulante', en: 'the street vendor' }],
        },
        A2: {
          scene: { es: 'Es una tarde de agosto con mucho viento. Marc ve a dos jóvenes que nadan lejos, detrás de las boyas, y no responden a su silbato. Uno de ellos empieza a hacer señales con los brazos.', en: 'It is a windy August afternoon. Marc sees two young people swimming far out, beyond the buoys, and not responding to his whistle. One of them starts waving his arms.' },
          opener: { es: 'Siempre pasa lo mismo: la gente cree que el Mediterráneo es una piscina. Hoy hay corrientes fuertes. Mi compañero está en el otro extremo de la playa con un niño que se ha cortado el pie. Tengo que decidir en segundos. ¿Has visto alguna vez un rescate?', en: 'It’s always the same: people think the Mediterranean is a swimming pool. Today there are strong currents. My colleague is at the other end of the beach with a child who has cut his foot. I have to decide in seconds. Have you ever seen a rescue?' },
          decide: {
            ask: { es: 'Marc te pide ayuda mientras corre hacia el agua. ¿Qué haces tú?', en: 'Marc asks for your help as he runs to the water. What do you do?' },
            options: [
              { say: { es: 'Llamo al 112 y les explico dónde estamos.', en: 'I call 112 and explain where we are.' }, then: { es: 'En cinco minutos llega una lancha de rescate. Los dos jóvenes salen cansados pero bien.', en: 'In five minutes a rescue boat arrives. The two young men come out tired but fine.' } },
              { say: { es: 'Aparto a la gente para que Marc tenga espacio.', en: 'I move people back so Marc has space.' }, then: { es: 'Marc saca al primero y lo deja en la arena. Tú te quedas con él mientras Marc vuelve a por el segundo.', en: 'Marc brings out the first one and leaves him on the sand. You stay with him while Marc goes back for the second.' } },
              { say: { es: 'Busco al otro socorrista.', en: 'I look for the other lifeguard.' }, then: { es: 'Llegan juntos y sacan a los dos jóvenes en tres minutos. La gente aplaude.', en: 'They arrive together and bring the two young men out in three minutes. People applaud.' } },
            ],
          },
          twist: { es: 'Uno de los jóvenes rescatados resulta ser campeón regional de natación. Dice, avergonzado, que nunca había nadado en el mar.', en: 'One of the rescued young men turns out to be a regional swimming champion. He says, embarrassed, that he had never swum in the sea.' },
          questions: [
            { q: { es: '¿Has tenido miedo en el agua alguna vez?', en: 'Have you ever been scared in the water?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Volviste a nadar?', en: 'Did you swim again?' }] },
            { q: { es: '¿Respetas siempre las normas de seguridad?', en: 'Do you always respect safety rules?' }, help: { es: 'Sí, siempre. / No siempre, a veces…', en: 'Yes, always. / Not always, sometimes…' }, follow: [{ es: '¿Cuál no respetas?', en: 'Which one don’t you respect?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Qué trabajo de verano tuviste o te gustaría tener?', en: 'What summer job did you have or would you like to have?' }, help: { es: 'Trabajé de… / Me gustaría trabajar de…', en: 'I worked as… / I would like to work as…' }, follow: [{ es: '¿Qué aprendiste?', en: 'What did you learn?' }, { es: '¿Cuánto ganabas?', en: 'How much did you earn?' }] },
            { q: { es: '¿Alguna vez sobreestimaste tus capacidades?', en: 'Have you ever overestimated your abilities?' }, help: { es: 'Sí, cuando intenté… / No, soy prudente.', en: 'Yes, when I tried… / No, I am careful.' }, follow: [{ es: '¿Qué aprendiste?', en: 'What did you learn?' }, { es: '¿Te dio vergüenza?', en: 'Were you embarrassed?' }] },
          ],
          words: [{ es: 'la boya', en: 'the buoy' }, { es: 'el silbato', en: 'the whistle' }, { es: 'la corriente', en: 'the current' }, { es: 'el rescate', en: 'the rescue' }, { es: 'avergonzado', en: 'embarrassed' }],
        },
        B1: {
          scene: { es: 'Los vecinos de la Barceloneta protestan contra los cruceros y los pisos turísticos: dicen que los alquileres se han duplicado y que muchos han tenido que irse del barrio. Marc es hijo de pescadores del barrio, pero su sueldo de socorrista depende del turismo.', en: 'Residents of La Barceloneta are protesting against cruise ships and tourist flats: they say rents have doubled and many have had to leave the neighbourhood. Marc is the son of local fishermen, but his lifeguard salary depends on tourism.' },
          opener: { es: 'Mi madre ha vivido toda su vida en la misma calle. Ahora en su edificio quedan tres familias; el resto son apartamentos que cambian de gente cada semana. Este verano, unos manifestantes mojaron a los turistas con pistolas de agua. Algunos de mis amigos estaban allí. Yo no fui. No sé si porque no estoy de acuerdo o porque tengo miedo de perder el trabajo. ¿Se puede estar contra el turismo y vivir de él?', en: 'My mother has lived her whole life on the same street. Now there are three families left in her building; the rest are apartments that change people every week. This summer, some protesters squirted tourists with water pistols. Some of my friends were there. I didn’t go. I don’t know if it’s because I disagree or because I’m afraid of losing my job. Can you be against tourism and live off it?' },
          decide: {
            ask: { es: 'Los amigos de Marc le piden que hable en la próxima manifestación. ¿Qué le aconsejas?', en: 'Marc’s friends ask him to speak at the next protest. What do you advise?' },
            options: [
              { say: { es: 'Que hable, pero contra los pisos turísticos, no contra los turistas.', en: 'Speak, but against tourist flats, not against tourists.' }, then: { es: 'Su discurso tiene mucho eco. Hasta algunos turistas lo comparten en redes.', en: 'His speech gets a lot of attention. Even some tourists share it online.' } },
              { say: { es: 'Que no hable en público, pero que ayude a organizar.', en: 'Not speak in public, but help organise.' }, then: { es: 'Marc prepara los carteles y la logística. Nadie lo ve, pero todo funciona.', en: 'Marc prepares the signs and logistics. Nobody sees him, but everything works.' } },
              { say: { es: 'Que proponga una charla entre vecinos y turistas en la playa.', en: 'Propose a talk between residents and tourists on the beach.' }, then: { es: 'Vienen pocos, pero la conversación es sincera. Un periodista escribe sobre ella.', en: 'Few people come, but the conversation is honest. A journalist writes about it.' } },
            ],
          },
          twist: { es: 'El dueño del piso turístico más grande del edificio de su madre resulta ser un antiguo compañero de colegio de Marc, del mismo barrio.', en: 'The owner of the biggest tourist flat in his mother’s building turns out to be an old school friend of Marc’s, from the same neighbourhood.' },
          questions: [
            { q: { es: '¿Se puede estar contra algo y vivir de ello?', en: 'Can you be against something and live off it?' }, help: { es: 'Creo que sí, porque… / Es contradictorio porque…', en: 'I think so, because… / It is contradictory because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Te pasa a ti?', en: 'Does it happen to you?' }] },
            { q: { es: '¿Qué opinas de los pisos turísticos?', en: 'What do you think of tourist flats?' }, help: { es: 'Me parecen… porque…', en: 'I think they are… because…' }, follow: [{ es: '¿Los usas cuando viajas?', en: 'Do you use them when you travel?' }, { es: '¿Deberían tener límites?', en: 'Should they have limits?' }] },
            { q: { es: '¿Qué formas de protesta te parecen aceptables?', en: 'What forms of protest seem acceptable to you?' }, help: { es: 'Me parece aceptable… pero no…', en: 'I find… acceptable but not…' }, follow: [{ es: '¿Has protestado alguna vez?', en: 'Have you ever protested?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Tu barrio ha cambiado mucho desde que eras niño?', en: 'Has your neighbourhood changed a lot since you were a child?' }, help: { es: 'Sí, antes había… / No mucho.', en: 'Yes, there used to be… / Not much.' }, follow: [{ es: '¿Qué echas de menos?', en: 'What do you miss?' }, { es: '¿Qué ha mejorado?', en: 'What has improved?' }] },
          ],
          words: [{ es: 'el crucero', en: 'the cruise ship' }, { es: 'el alquiler', en: 'the rent' }, { es: 'el manifestante', en: 'the protester' }, { es: 'mojar', en: 'to wet / soak' }, { es: 'tener eco', en: 'to resonate / get attention' }],
        },
      },
    },
    // ------------------------------------------------------------ the human towers
    {
      id: 'castells',
      name: { es: 'Los castells', en: 'The human towers' },
      who: { name: 'Núria', role: { es: 'castellera', en: 'human-tower climber' } },
      levels: {
        A0: {
          scene: { es: 'Es una fiesta en una plaza. La gente sube a los hombros de otras personas. ¡Es una torre de personas! Núria es castellera.', en: 'It is a festival in a square. People climb on other people’s shoulders. It is a tower of people! Núria is a human-tower climber.' },
          opener: { es: '¡Hola! Soy Núria. ¿Quieres ayudar?', en: 'Hi! I am Núria. Do you want to help?' },
          decide: {
            ask: { es: '¿Dónde quieres estar en la torre?', en: 'Where do you want to be in the tower?' },
            options: [
              { say: { es: 'Abajo, en la base.', en: 'At the bottom, in the base.' }, then: { es: 'Núria dice: «¡Muy bien! Aquí necesitamos mucha gente fuerte».', en: 'Núria says: “Very good! We need many strong people here.”' } },
              { say: { es: 'Arriba, en la punta.', en: 'At the top.' }, then: { es: 'Núria dice: «¡No! Arriba suben los niños. Son pequeños».', en: 'Núria says: “No! Children go up to the top. They are small.”' } },
              { say: { es: 'Solo quiero mirar.', en: 'I just want to watch.' }, then: { es: 'Núria dice: «Vale. ¡Pero aplaude mucho!»', en: 'Núria says: “OK. But clap a lot!”' } },
            ],
          },
          twist: { es: 'La música empieza. Todos se ponen una faja negra. Núria te da una. ¿Qué haces?', en: 'The music starts. Everyone puts on a black sash. Núria gives you one. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan las fiestas en la calle?', en: 'Do you like street festivals?' }, help: { es: 'Sí, mucho. / No, hay mucha gente.', en: 'Yes, a lot. / No, there are too many people.' }, follow: [{ es: '¿Qué fiesta te gusta?', en: 'Which festival do you like?' }, { es: '¿Cuándo es?', en: 'When is it?' }] },
            { q: { es: '¿Eres fuerte?', en: 'Are you strong?' }, help: { es: 'Sí, bastante. / No mucho.', en: 'Yes, quite. / Not very.' }, follow: [{ es: '¿Haces deporte?', en: 'Do you do sport?' }, { es: '¿Qué deporte?', en: 'Which sport?' }] },
            { q: { es: '¿Te dan miedo las alturas?', en: 'Are you scared of heights?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, very. / No, not at all.' }, follow: [{ es: '¿Subes a edificios altos?', en: 'Do you go up tall buildings?' }, { es: '¿Y en avión?', en: 'And on a plane?' }] },
            { q: { es: '¿Trabajas en equipo?', en: 'Do you work in a team?' }, help: { es: 'Sí, en mi trabajo… / No, trabajo solo.', en: 'Yes, at work… / No, I work alone.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Cuántas personas son?', en: 'How many people are there?' }] },
          ],
          words: [{ es: 'la torre', en: 'the tower' }, { es: 'los hombros', en: 'shoulders' }, { es: 'abajo', en: 'below / at the bottom' }, { es: 'arriba', en: 'above / at the top' }, { es: 'la faja', en: 'the sash' }],
        },
        A1: {
          scene: { es: 'Los castells son torres humanas, una tradición catalana de más de doscientos años. En una plaza de un pueblo cerca de Barcelona, el equipo de Núria prepara un castillo de ocho pisos. Abajo hay cientos de personas; arriba, una niña de siete años.', en: 'Castells are human towers, a Catalan tradition over two hundred years old. In a town square near Barcelona, Núria’s team is preparing an eight-level tower. At the bottom there are hundreds of people; at the top, a seven-year-old girl.' },
          opener: { es: 'Aquí no importa si eres alto, bajo, joven o viejo: todos son necesarios. Mi abuelo está en la base, yo en el tercer piso y mi hija sube hasta arriba. Lo más bonito es el silencio antes de subir. ¿Tú has hecho algo con tu familia en equipo?', en: 'Here it doesn’t matter if you are tall, short, young or old: everyone is needed. My grandfather is in the base, I am on the third level and my daughter climbs to the top. The most beautiful part is the silence before the climb. Have you done something as a team with your family?' },
          decide: {
            ask: { es: 'El castillo empieza a moverse. ¿Qué deben hacer?', en: 'The tower starts to wobble. What should they do?' },
            options: [
              { say: { es: 'Seguir subiendo, con calma.', en: 'Keep climbing, calmly.' }, then: { es: 'La niña llega arriba y levanta la mano. ¡La plaza explota de alegría!', en: 'The girl reaches the top and raises her hand. The square explodes with joy!' } },
              { say: { es: 'Bajar despacio, piso por piso.', en: 'Come down slowly, level by level.' }, then: { es: 'Bajan sin problemas. «Hoy no era el día», dice el jefe. Lo intentarán la próxima vez.', en: 'They come down without problems. “Today wasn’t the day,” says the leader. They will try next time.' } },
              { say: { es: 'Que más gente ayude en la base.', en: 'Get more people to help in the base.' }, then: { es: 'Treinta personas del público se meten debajo. El castillo se queda quieto.', en: 'Thirty people from the crowd get underneath. The tower stays still.' } },
            ],
          },
          twist: { es: 'Núria te invita a entrar en la base. Hay mucha gente, mucho calor y no ves nada. ¿Qué haces?', en: 'Núria invites you into the base. There are lots of people, it’s very hot and you can’t see anything. What do you do?' },
          questions: [
            { q: { es: '¿Hay alguna tradición especial en tu ciudad?', en: 'Is there a special tradition in your city?' }, help: { es: 'Sí, en… hay… / No que yo sepa.', en: 'Yes, in… there is… / Not that I know of.' }, follow: [{ es: '¿Participas?', en: 'Do you take part?' }, { es: '¿Es antigua?', en: 'Is it old?' }] },
            { q: { es: '¿Haces algo con tu familia regularmente?', en: 'Do you do something with your family regularly?' }, help: { es: 'Sí, todos los… / No, cada uno hace lo suyo.', en: 'Yes, every… / No, we each do our own thing.' }, follow: [{ es: '¿Qué hacen?', en: 'What do you do?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
            { q: { es: '¿Prefieres estar arriba o abajo?', en: 'Do you prefer being at the top or at the bottom?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿En un equipo también?', en: 'In a team too?' }, { es: '¿Eres líder?', en: 'Are you a leader?' }] },
            { q: { es: '¿Qué te da miedo y qué haces con ese miedo?', en: 'What scares you and what do you do about it?' }, help: { es: 'Me da miedo… y entonces…', en: '… scares me and so I…' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Lo has superado?', en: 'Have you overcome it?' }] },
          ],
          words: [{ es: 'el castillo', en: 'the castle / tower' }, { es: 'el piso', en: 'the level / floor' }, { es: 'la base', en: 'the base' }, { es: 'quieto', en: 'still' }, { es: 'el público', en: 'the audience / crowd' }],
        },
        A2: {
          scene: { es: 'Es el gran concurso de castells de Tarragona, que se celebra cada dos años. El equipo de Núria lleva meses entrenando para intentar un castillo de diez pisos. Pero el día antes, la niña que sube arriba se rompe un brazo jugando al fútbol.', en: 'It is the big human-tower competition in Tarragona, held every two years. Núria’s team has trained for months to attempt a ten-level tower. But the day before, the girl who climbs to the top breaks her arm playing football.' },
          opener: { es: 'Tenemos otra niña que podría subir, pero solo tiene seis años y nunca ha llegado tan alto. Sus padres dicen que sí, que ella quiere. El jefe de equipo dice que la decisión es mía, porque yo entreno a los pequeños. No he dormido en toda la noche. ¿Tú qué harías?', en: 'We have another girl who could climb, but she is only six and has never gone that high. Her parents say yes, that she wants to. The team leader says the decision is mine, because I train the little ones. I haven’t slept all night. What would you do?' },
          decide: {
            ask: { es: 'Núria tiene que decidir antes del concurso. ¿Qué le aconsejas?', en: 'Núria has to decide before the competition. What do you advise?' },
            options: [
              { say: { es: 'Que intenten un castillo más bajo, de nueve pisos.', en: 'Try a lower tower, nine levels.' }, then: { es: 'Lo consiguen sin problemas. No ganan, pero la niña nueva gana confianza para el próximo año.', en: 'They do it without problems. They don’t win, but the new girl gains confidence for next year.' } },
              { say: { es: 'Que confíe en la niña y en el equipo.', en: 'Trust the girl and the team.' }, then: { es: 'La niña sube, saluda arriba y baja. Es la más joven de la historia en hacerlo.', en: 'The girl climbs, waves at the top and comes down. She is the youngest ever to do it.' } },
              { say: { es: 'Que pregunte a la niña cómo se siente de verdad.', en: 'Ask the girl how she really feels.' }, then: { es: 'La niña confiesa que tiene miedo pero que quiere intentarlo. Núria le promete que puede parar cuando quiera.', en: 'The girl admits she is scared but wants to try. Núria promises she can stop whenever she wants.' } },
            ],
          },
          twist: { es: 'La niña del brazo roto viene al concurso con su escayola y es la que más grita para animar a su compañera.', en: 'The girl with the broken arm comes to the competition in her cast and is the one who cheers loudest for her teammate.' },
          questions: [
            { q: { es: '¿Has tenido que tomar una decisión difícil por otra persona?', en: 'Have you had to make a difficult decision for someone else?' }, help: { es: 'Sí, una vez elegimos… / No, nunca.', en: 'Yes, once we chose… / No, never.' }, follow: [{ es: '¿Cómo salió?', en: 'How did it turn out?' }, { es: '¿Lo harías igual?', en: 'Would you do it the same?' }] },
            { q: { es: '¿Los niños deberían participar en actividades con riesgo?', en: 'Should children take part in risky activities?' }, help: { es: 'Creo que sí, si… / No, porque…', en: 'I think so, if… / No, because…' }, follow: [{ es: '¿Qué hacías tú de niño?', en: 'What did you do as a child?' }, { es: '¿Tus padres te dejaban?', en: 'Did your parents let you?' }] },
            { q: { es: '¿Te rompiste algo alguna vez?', en: 'Have you ever broken anything?' }, help: { es: 'Sí, me rompí el brazo / la pierna… / No, nunca.', en: 'Yes, I broke my arm / leg… / No, never.' }, follow: [{ es: '¿Cómo pasó?', en: 'How did it happen?' }, { es: '¿Cuánto tiempo tardó en curarse?', en: 'How long did it take to heal?' }] },
            { q: { es: '¿Qué es más importante: ganar o participar?', en: 'What is more important: winning or taking part?' }, help: { es: 'Para mí… porque…', en: 'For me… because…' }, follow: [{ es: '¿Siempre pensaste así?', en: 'Have you always thought so?' }, { es: '¿Y en el trabajo?', en: 'And at work?' }] },
          ],
          words: [{ es: 'el concurso', en: 'the competition' }, { es: 'entrenar', en: 'to train' }, { es: 'la confianza', en: 'confidence / trust' }, { es: 'la escayola', en: 'the plaster cast (Spain)' }, { es: 'animar', en: 'to cheer on' }],
        },
        B1: {
          scene: { es: 'Tras un accidente en otra ciudad, en el que un niño cayó desde lo alto de un castillo, hay un debate nacional: algunos médicos y políticos proponen prohibir que los menores de doce años suban. Los castellers dicen que sin niños no hay castells: arriba solo cabe alguien muy ligero.', en: 'After an accident in another city, in which a child fell from the top of a tower, there is a national debate: some doctors and politicians propose banning children under twelve from climbing. The castellers say that without children there are no castells: only someone very light fits at the top.' },
          opener: { es: 'Cuando se cae un niño, nos duele a todos, de verdad. Los niños llevan casco desde hace años, y las caídas graves son muy raras. Pero entiendo a los padres que tienen miedo. Para nosotros, los castells son mucho más que un deporte: es aprender a confiar en los demás. ¿Dónde está el límite entre proteger a los niños y quitarles la experiencia?', en: 'When a child falls, it hurts all of us, truly. Children have worn helmets for years, and serious falls are very rare. But I understand parents who are afraid. For us, castells are much more than a sport: it is learning to trust others. Where is the line between protecting children and taking the experience away from them?' },
          decide: {
            ask: { es: 'Núria tiene que hablar en un programa de televisión. ¿Qué propuesta lleva?', en: 'Núria has to speak on a TV programme. What proposal does she bring?' },
            options: [
              { say: { es: 'Mantener a los niños, con más formación y protección.', en: 'Keep the children, with more training and protection.' }, then: { es: 'Propone un certificado de seguridad para cada equipo. Muchos equipos lo adoptan.', en: 'She proposes a safety certificate for every team. Many teams adopt it.' } },
              { say: { es: 'Aceptar una edad mínima de ocho años.', en: 'Accept a minimum age of eight.' }, then: { es: 'Algunos castellers la acusan de traición; otros dicen que es una buena solución intermedia.', en: 'Some castellers accuse her of betrayal; others say it is a good middle ground.' } },
              { say: { es: 'Dejar que cada familia decida, con toda la información.', en: 'Let each family decide, with full information.' }, then: { es: 'El debate se calma. Los médicos piden datos públicos de cada caída.', en: 'The debate calms down. Doctors ask for public data on every fall.' } },
            ],
          },
          twist: { es: 'Al salir del programa, una de las médicas que pedía la prohibición le confiesa a Núria que de niña fue «enxaneta», la que sube arriba del todo.', en: 'Leaving the programme, one of the doctors who called for the ban confesses to Núria that as a child she was an “enxaneta”, the one who climbs to the very top.' },
          questions: [
            { q: { es: '¿Dónde está el límite entre proteger y sobreproteger?', en: 'Where is the line between protecting and overprotecting?' }, help: { es: 'Para mí, el límite está en…', en: 'For me, the line is…' }, follow: [{ es: '¿Te sobreprotegieron a ti?', en: 'Were you overprotected?' }, { es: '¿Cómo lo harías tú?', en: 'How would you do it?' }] },
            { q: { es: '¿Una tradición justifica un riesgo?', en: 'Does a tradition justify a risk?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Qué tradición peligrosa conoces?', en: 'What dangerous tradition do you know?' }, { es: '¿Debería cambiar?', en: 'Should it change?' }] },
            { q: { es: '¿Quién debería decidir: el Estado o las familias?', en: 'Who should decide: the state or families?' }, help: { es: 'En este caso, creo que…', en: 'In this case, I think…' }, follow: [{ es: '¿Y en la educación?', en: 'And in education?' }, { es: '¿Y en la salud?', en: 'And in health?' }] },
            { q: { es: '¿Qué te ha enseñado a confiar en los demás?', en: 'What has taught you to trust others?' }, help: { es: 'Empecé a confiar cuando…', en: 'I started to trust when…' }, follow: [{ es: '¿Confías fácilmente?', en: 'Do you trust easily?' }, { es: '¿Alguien te falló?', en: 'Has anyone let you down?' }] },
          ],
          words: [{ es: 'el casco', en: 'the helmet' }, { es: 'la caída', en: 'the fall' }, { es: 'prohibir', en: 'to ban' }, { es: 'la traición', en: 'the betrayal' }, { es: 'sobreproteger', en: 'to overprotect' }],
        },
      },
    },
    // ------------------------------------------------------------ the football stadium
    {
      id: 'estadio',
      name: { es: 'El estadio de fútbol', en: 'The football stadium' },
      who: { name: 'Pau', role: { es: 'vendedor de la tienda del club', en: 'club shop assistant' } },
      levels: {
        A0: {
          scene: { es: 'Es un estadio de fútbol enorme. Hay una tienda con camisetas azules y rojas. Pau trabaja en la tienda.', en: 'It is a huge football stadium. There is a shop with blue and red shirts. Pau works in the shop.' },
          opener: { es: 'Hola, soy Pau. ¿Te gusta el fútbol?', en: 'Hi, I am Pau. Do you like football?' },
          decide: {
            ask: { es: '¿Qué compras en la tienda?', en: 'What do you buy in the shop?' },
            options: [
              { say: { es: 'Una camiseta.', en: 'A shirt.' }, then: { es: 'Pau dice: «¿Talla mediana o grande?»', en: 'Pau says: “Medium or large size?”' } },
              { say: { es: 'Una bufanda.', en: 'A scarf.' }, then: { es: 'Pau dice: «Es para el partido. ¡Muy bien!»', en: 'Pau says: “It is for the match. Very good!”' } },
              { say: { es: 'Un balón.', en: 'A ball.' }, then: { es: 'Pau dice: «Es el balón oficial. Cuesta veinte euros».', en: 'Pau says: “It is the official ball. It costs twenty euros.”' } },
            ],
          },
          twist: { es: 'Un jugador famoso entra en la tienda. Todos gritan. ¿Qué haces?', en: 'A famous player walks into the shop. Everyone screams. What do you do?' },
          questions: [
            { q: { es: '¿Te gusta el fútbol?', en: 'Do you like football?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿De qué equipo eres?', en: 'Which team do you support?' }, { es: '¿Juegas?', en: 'Do you play?' }] },
            { q: { es: '¿Qué deporte ves en la tele?', en: 'What sport do you watch on TV?' }, help: { es: 'Veo fútbol / tenis / baloncesto…', en: 'I watch football / tennis / basketball…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Cuál es tu talla?', en: 'What is your size?' }, help: { es: 'Mi talla es la…', en: 'My size is…' }, follow: [{ es: '¿Compras ropa por internet?', en: 'Do you buy clothes online?' }, { es: '¿Dónde compras ropa?', en: 'Where do you buy clothes?' }] },
            { q: { es: '¿Fuiste a un estadio alguna vez?', en: 'Have you ever been to a stadium?' }, help: { es: 'Sí, fui a… / No, nunca.', en: 'Yes, I went to… / No, never.' }, follow: [{ es: '¿Qué viste?', en: 'What did you see?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
          ],
          words: [{ es: 'el estadio', en: 'the stadium' }, { es: 'la camiseta', en: 'the shirt / T-shirt' }, { es: 'la bufanda', en: 'the scarf' }, { es: 'el balón', en: 'the ball' }, { es: 'la talla', en: 'the size' }],
        },
        A1: {
          scene: { es: 'Es día de partido. Miles de aficionados llegan al estadio con bufandas y banderas. Pau trabaja en la tienda del club desde hace cinco años y es aficionado desde que nació. Hoy juegan contra el gran rival.', en: 'It is match day. Thousands of fans arrive at the stadium with scarves and flags. Pau has worked in the club shop for five years and has been a fan since he was born. Today they are playing their great rival.' },
          opener: { es: 'Hoy es el partido más importante del año. Vendo más camisetas en un día que en un mes. Lo malo es que trabajo durante el partido y solo escucho los goles por los gritos del estadio. ¿Tú eres de algún equipo?', en: 'Today is the most important match of the year. I sell more shirts in a day than in a month. The bad thing is I work during the match and only hear the goals from the stadium’s shouting. Do you support any team?' },
          decide: {
            ask: { es: 'Tienes una entrada para el partido. ¿Qué haces antes?', en: 'You have a ticket for the match. What do you do beforehand?' },
            options: [
              { say: { es: 'Compro una camiseta y me la pongo.', en: 'I buy a shirt and put it on.' }, then: { es: 'Ahora pareces un aficionado de verdad. Un señor te abraza en la puerta.', en: 'Now you look like a real fan. A man hugs you at the gate.' } },
              { say: { es: 'Voy a un bar cercano con los aficionados.', en: 'I go to a nearby bar with the fans.' }, then: { es: 'Aprendes tres canciones del equipo. No entiendes todas las palabras.', en: 'You learn three team songs. You don’t understand all the words.' } },
              { say: { es: 'Visito el museo del club.', en: 'I visit the club museum.' }, then: { es: 'Ves copas, fotos antiguas y las botas de jugadores famosos.', en: 'You see trophies, old photos and famous players’ boots.' } },
            ],
          },
          twist: { es: 'Te sientas y descubres que estás rodeado de aficionados del otro equipo. ¿Qué haces?', en: 'You sit down and discover you are surrounded by fans of the other team. What do you do?' },
          questions: [
            { q: { es: '¿De qué equipo eres?', en: 'Which team do you support?' }, help: { es: 'Soy del… / No soy de ningún equipo.', en: 'I support… / I don’t support any team.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Por qué ese equipo?', en: 'Why that team?' }] },
            { q: { es: '¿Has ido a un partido en el estadio?', en: 'Have you been to a match at a stadium?' }, help: { es: 'Sí, fui a ver… / No, solo en la tele.', en: 'Yes, I went to see… / No, only on TV.' }, follow: [{ es: '¿Cómo fue?', en: 'How was it?' }, { es: '¿Quién ganó?', en: 'Who won?' }] },
            { q: { es: '¿Tienes ropa de un equipo?', en: 'Do you have clothes from a team?' }, help: { es: 'Sí, tengo una camiseta del… / No.', en: 'Yes, I have a … shirt. / No.' }, follow: [{ es: '¿Cuándo la usas?', en: 'When do you wear it?' }, { es: '¿Quién te la regaló?', en: 'Who gave it to you?' }] },
            { q: { es: '¿Qué rivalidad famosa hay en tu país?', en: 'What famous rivalry is there in your country?' }, help: { es: 'Hay una gran rivalidad entre… y…', en: 'There is a big rivalry between… and…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Es amistosa?', en: 'Is it friendly?' }] },
          ],
          words: [{ es: 'el aficionado', en: 'the fan' }, { es: 'el partido', en: 'the match' }, { es: 'el rival', en: 'the rival' }, { es: 'el gol', en: 'the goal' }, { es: 'la copa', en: 'the trophy / cup' }],
        },
        A2: {
          scene: { es: 'Después de una derrota, un grupo de aficionados entra en la tienda muy enfadado. Uno de ellos insulta a una turista que lleva la camiseta del otro equipo. Pau está solo en la caja.', en: 'After a defeat, a group of fans comes into the shop very angry. One of them insults a tourist wearing the other team’s shirt. Pau is alone at the till.' },
          opener: { es: 'Me encanta el fútbol, pero odio esta parte. La chica está asustada y el chico no para de gritar. Mi jefe siempre dice que no nos metamos, que llamemos a seguridad. Pero seguridad tarda y la chica está temblando. ¿Tú qué habrías hecho?', en: 'I love football, but I hate this part. The girl is scared and the guy won’t stop shouting. My boss always says not to get involved, to call security. But security takes time and the girl is shaking. What would you have done?' },
          decide: {
            ask: { es: 'Pau tiene que actuar ya. ¿Qué le dices?', en: 'Pau has to act now. What do you tell him?' },
            options: [
              { say: { es: 'Que se ponga entre los dos con calma.', en: 'Step between them calmly.' }, then: { es: 'El chico duda. Sus propios amigos lo sacan de la tienda. La chica le da las gracias a Pau.', en: 'The guy hesitates. His own friends take him out of the shop. The girl thanks Pau.' } },
              { say: { es: 'Que lleve a la chica al almacén mientras llega seguridad.', en: 'Take the girl to the storeroom until security arrives.' }, then: { es: 'La chica espera tranquila. Seguridad llega y el chico se va sin problemas.', en: 'The girl waits calmly. Security arrives and the guy leaves without trouble.' } },
              { say: { es: 'Que grabe todo con el móvil.', en: 'Record everything on his phone.' }, then: { es: 'El vídeo sirve para identificar al chico. El club le prohíbe entrar al estadio durante un año.', en: 'The video helps identify the guy. The club bans him from the stadium for a year.' } },
            ],
          },
          twist: { es: 'La turista vuelve al día siguiente y se compra… una camiseta del equipo de Pau. «Para mi hermano», dice sonriendo.', en: 'The tourist comes back the next day and buys… a shirt of Pau’s team. “For my brother,” she says with a smile.' },
          questions: [
            { q: { es: '¿Has visto alguna vez violencia en un partido?', en: 'Have you ever seen violence at a match?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
            { q: { es: '¿Te metes cuando ves una injusticia?', en: 'Do you get involved when you see an injustice?' }, help: { es: 'Sí, siempre. / Depende de… / No me atrevo.', en: 'Yes, always. / It depends on… / I don’t dare.' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿Por qué crees que el fútbol despierta tantas emociones?', en: 'Why do you think football stirs up so many emotions?' }, help: { es: 'Creo que porque…', en: 'I think because…' }, follow: [{ es: '¿Te pasa con otra cosa?', en: 'Does it happen to you with something else?' }, { es: '¿Es sano?', en: 'Is it healthy?' }] },
            { q: { es: '¿Qué harías si tu jefe te dice una cosa y tu conciencia otra?', en: 'What would you do if your boss told you one thing and your conscience another?' }, help: { es: 'Haría caso a… porque…', en: 'I would listen to… because…' }, follow: [{ es: '¿Te ha pasado?', en: 'Has it happened to you?' }, { es: '¿Cómo terminó?', en: 'How did it end?' }] },
          ],
          words: [{ es: 'la derrota', en: 'the defeat' }, { es: 'insultar', en: 'to insult' }, { es: 'la caja', en: 'the till / checkout' }, { es: 'meterse', en: 'to get involved' }, { es: 'temblar', en: 'to shake / tremble' }],
        },
        B1: {
          scene: { es: 'El club tiene una deuda enorme y anuncia que va a vender el nombre del estadio a una empresa extranjera. También subirá el precio de los abonos un cuarenta por ciento. Muchos socios de toda la vida dicen que el club ha dejado de ser «más que un club».', en: 'The club has huge debts and announces that it will sell the stadium’s name to a foreign company. It will also raise the price of season tickets by forty per cent. Many lifelong members say the club has stopped being “more than a club”.' },
          opener: { es: 'Mi abuelo me hizo socio el día que nací. Para él, el club era una forma de defender la identidad catalana cuando estaba prohibida. Ahora el estadio llevará el nombre de una marca y mi padre ya no puede pagar su abono. La directiva dice que sin ese dinero no se puede competir con los grandes clubes del mundo. ¿El fútbol todavía pertenece a los aficionados?', en: 'My grandfather made me a member the day I was born. For him, the club was a way of defending Catalan identity when it was forbidden. Now the stadium will carry a brand’s name and my father can no longer afford his season ticket. The board says that without that money they can’t compete with the world’s big clubs. Does football still belong to the fans?' },
          decide: {
            ask: { es: 'Los socios votan en una asamblea. ¿Qué le recomiendas a Pau?', en: 'The members vote at a general meeting. What do you recommend to Pau?' },
            options: [
              { say: { es: 'Votar en contra de vender el nombre.', en: 'Vote against selling the name.' }, then: { es: 'Gana el «no» por pocos votos. El club tiene que buscar dinero de otra forma.', en: '“No” wins by a few votes. The club has to find money another way.' } },
              { say: { es: 'Aceptar el nombre, pero exigir abonos baratos para los socios mayores.', en: 'Accept the name, but demand cheap season tickets for older members.' }, then: { es: 'La directiva acepta. El padre de Pau vuelve al estadio, aunque el nombre le duele.', en: 'The board agrees. Pau’s father goes back to the stadium, although the name hurts him.' } },
              { say: { es: 'Abstenerse y escribir una carta explicando por qué.', en: 'Abstain and write a letter explaining why.' }, then: { es: 'La carta se lee en la radio. Muchos socios dicen que se sienten igual: divididos.', en: 'The letter is read on the radio. Many members say they feel the same: torn.' } },
            ],
          },
          twist: { es: 'Pau descubre que la empresa que compra el nombre es la misma para la que trabaja su hermana, en otro país.', en: 'Pau discovers that the company buying the name is the same one his sister works for, in another country.' },
          questions: [
            { q: { es: '¿El deporte profesional pertenece a los aficionados o a los inversores?', en: 'Does professional sport belong to fans or investors?' }, help: { es: 'Creo que pertenece a… porque…', en: 'I think it belongs to… because…' }, follow: [{ es: '¿Debería ser así?', en: 'Should it be like that?' }, { es: '¿Qué pasa en tu país?', en: 'What happens in your country?' }] },
            { q: { es: '¿Un equipo puede representar la identidad de un pueblo?', en: 'Can a team represent a people’s identity?' }, help: { es: 'Sí, por ejemplo… / No, solo es deporte.', en: 'Yes, for example… / No, it is just sport.' }, follow: [{ es: '¿Conoces otro caso?', en: 'Do you know another case?' }, { es: '¿Es peligroso?', en: 'Is it dangerous?' }] },
            { q: { es: '¿Qué tradición familiar te han pasado tus abuelos?', en: 'What family tradition have your grandparents passed on to you?' }, help: { es: 'Mis abuelos me pasaron…', en: 'My grandparents passed on…' }, follow: [{ es: '¿La mantienes?', en: 'Do you keep it up?' }, { es: '¿La pasarás a otros?', en: 'Will you pass it on?' }] },
            { q: { es: '¿Pagarías más por algo que amas aunque cambie?', en: 'Would you pay more for something you love even if it changes?' }, help: { es: 'Sí, porque… / No, dejaría de…', en: 'Yes, because… / No, I would stop…' }, follow: [{ es: '¿Cuál es tu límite?', en: 'What is your limit?' }, { es: '¿Te ha pasado?', en: 'Has it happened to you?' }] },
          ],
          words: [{ es: 'la deuda', en: 'the debt' }, { es: 'el abono', en: 'the season ticket' }, { es: 'el socio', en: 'the club member' }, { es: 'la directiva', en: 'the board (of directors)' }, { es: 'abstenerse', en: 'to abstain' }],
        },
      },
    },
  ],
};
