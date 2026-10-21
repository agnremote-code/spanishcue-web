// Oaxaca · the city, the valleys and their crafts. Five places, four levels each
// (A0, A1, A2, B1). Every level is written on its own: same place and people,
// different situations, decisions and questions. English is a natural translation.
export default {
  id: 'oaxaca',
  spots: [
    // ------------------------------------------------------------ the mole eatery
    {
      id: 'comedor',
      name: { es: 'El comedor de mole', en: 'The mole eatery' },
      who: { name: 'Doña Chelo', role: { es: 'cocinera', en: 'cook' } },
      levels: {
        A0: {
          scene: { es: 'Es un comedor pequeño. Hay ollas grandes. Doña Chelo cocina mole. El mole es una salsa oscura.', en: 'It is a small eatery. There are big pots. Doña Chelo cooks mole. Mole is a dark sauce.' },
          opener: { es: '¡Buenas tardes! Soy Chelo. ¿Quieres probar el mole?', en: 'Good afternoon! I am Chelo. Do you want to try the mole?' },
          decide: {
            ask: { es: 'Hay mole negro, mole rojo y mole amarillo. ¿Cuál quieres?', en: 'There is black mole, red mole and yellow mole. Which one do you want?' },
            options: [
              { say: { es: 'El mole negro.', en: 'The black mole.' }, then: { es: 'Chelo dice: «Tiene chocolate. Es mi favorito».', en: 'Chelo says: “It has chocolate. It is my favourite.”' } },
              { say: { es: 'El mole rojo.', en: 'The red mole.' }, then: { es: 'Chelo dice: «Pica un poco. ¿Está bien?»', en: 'Chelo says: “It is a bit spicy. Is that OK?”' } },
              { say: { es: 'Los tres, por favor.', en: 'All three, please.' }, then: { es: 'Chelo ríe: «¡Muy bien! Tres platos pequeños».', en: 'Chelo laughs: “Very good! Three small plates.”' } },
            ],
          },
          twist: { es: 'Chelo dice: «El mole tiene treinta ingredientes». ¡Treinta! ¿Qué dices?', en: 'Chelo says: “Mole has thirty ingredients.” Thirty! What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el chocolate?', en: 'Do you like chocolate?' }, help: { es: 'Sí, me encanta. / No mucho.', en: 'Yes, I love it. / Not much.' }, follow: [{ es: '¿Chocolate negro o con leche?', en: 'Dark or milk chocolate?' }, { es: '¿Comes chocolate todos los días?', en: 'Do you eat chocolate every day?' }] },
            { q: { es: '¿Cocinas en casa?', en: 'Do you cook at home?' }, help: { es: 'Sí, cocino. / No, no cocino.', en: 'Yes, I cook. / No, I don’t cook.' }, follow: [{ es: '¿Qué cocinas?', en: 'What do you cook?' }, { es: '¿Cocinas bien?', en: 'Do you cook well?' }] },
            { q: { es: '¿Cuál es tu comida favorita?', en: 'What is your favourite food?' }, help: { es: 'Mi comida favorita es…', en: 'My favourite food is…' }, follow: [{ es: '¿Es dulce o salada?', en: 'Is it sweet or savoury?' }, { es: '¿Quién la cocina?', en: 'Who cooks it?' }] },
            { q: { es: '¿Comes en restaurantes?', en: 'Do you eat in restaurants?' }, help: { es: 'Sí, a veces. / No mucho.', en: 'Yes, sometimes. / Not much.' }, follow: [{ es: '¿Con quién?', en: 'Who with?' }, { es: '¿Restaurantes grandes o pequeños?', en: 'Big or small restaurants?' }] },
          ],
          words: [{ es: 'la olla', en: 'the pot' }, { es: 'probar', en: 'to try' }, { es: 'oscuro', en: 'dark' }, { es: 'el ingrediente', en: 'the ingredient' }, { es: 'el plato', en: 'the plate, dish' }],
        },
        A1: {
          scene: { es: 'El comedor de Doña Chelo está en el mercado 20 de Noviembre. Huele a chile, a chocolate y a tortillas. Hay mesas largas y la gente come junta, aunque no se conoce.', en: 'Doña Chelo’s eatery is in the 20 de Noviembre market. It smells of chilli, chocolate and tortillas. There are long tables and people eat together, even though they don’t know each other.' },
          opener: { es: 'El mole negro necesita dos días de trabajo. Mi mamá me enseñó a los diez años. ¿Tú sabes cocinar algo especial?', en: 'Black mole needs two days of work. My mum taught me when I was ten. Do you know how to cook something special?' },
          decide: {
            ask: { es: 'Chelo te invita a ayudar en la cocina. ¿Qué tarea eliges?', en: 'Chelo invites you to help in the kitchen. Which task do you choose?' },
            options: [
              { say: { es: 'Moler los chiles.', en: 'Grind the chillies.' }, then: { es: 'Te pican los ojos y lloras. Chelo te da un trapo y ríe.', en: 'Your eyes sting and you cry. Chelo gives you a cloth and laughs.' } },
              { say: { es: 'Mover el mole en la olla.', en: 'Stir the mole in the pot.' }, then: { es: '«Siempre en la misma dirección», dice Chelo. «Si no, se enoja».', en: '“Always in the same direction,” says Chelo. “If not, it gets angry.”' } },
              { say: { es: 'Hacer tortillas a mano.', en: 'Make tortillas by hand.' }, then: { es: 'Tus tortillas parecen mapas. Chelo las sirve igual.', en: 'Your tortillas look like maps. Chelo serves them anyway.' } },
            ],
          },
          twist: { es: 'Un cliente dice que el mole está «demasiado dulce». Toda la cocina se queda en silencio.', en: 'A customer says the mole is “too sweet”. The whole kitchen goes silent.' },
          questions: [
            { q: { es: '¿Quién te enseñó a cocinar?', en: 'Who taught you to cook?' }, help: { es: 'Me enseñó mi… / Aprendo con videos.', en: 'My … taught me. / I learn with videos.' }, follow: [{ es: '¿Qué fue lo primero que cocinaste?', en: 'What was the first thing you cooked?' }, { es: '¿Te salió bien?', en: 'Did it turn out well?' }] },
            { q: { es: '¿Te gusta comer con personas que no conoces?', en: 'Do you like eating with people you don’t know?' }, help: { es: 'Sí, es divertido. / No, prefiero…', en: 'Yes, it’s fun. / No, I prefer…' }, follow: [{ es: '¿Hablas con ellos?', en: 'Do you talk to them?' }, { es: '¿Dónde comes así?', en: 'Where do you eat like that?' }] },
            { q: { es: '¿Qué olor te gusta mucho?', en: 'What smell do you really like?' }, help: { es: 'Me gusta el olor a…', en: 'I like the smell of…' }, follow: [{ es: '¿Te recuerda algo?', en: 'Does it remind you of something?' }, { es: '¿Y qué olor no te gusta?', en: 'And what smell don’t you like?' }] },
            { q: { es: '¿Qué dices si no te gusta la comida en casa de alguien?', en: 'What do you say if you don’t like the food at someone’s house?' }, help: { es: 'Digo que… / No digo nada y…', en: 'I say that… / I say nothing and…' }, follow: [{ es: '¿Te pasó alguna vez?', en: 'Has it ever happened to you?' }, { es: '¿Comes todo?', en: 'Do you eat everything?' }] },
          ],
          words: [{ es: 'oler a', en: 'to smell of' }, { es: 'moler', en: 'to grind' }, { es: 'a mano', en: 'by hand' }, { es: 'el trapo', en: 'the cloth' }, { es: 'demasiado', en: 'too (much)' }],
        },
        A2: {
          scene: { es: 'Doña Chelo cocinó durante treinta años solo para la gente del mercado. El año pasado un programa de televisión extranjero la filmó y ahora llegan turistas de todo el mundo con su foto en el teléfono.', en: 'Doña Chelo cooked for thirty years only for the market people. Last year a foreign TV show filmed her and now tourists from all over the world arrive with her photo on their phones.' },
          opener: { es: 'Antes conocía a todos mis clientes por su nombre. Ahora vienen cien personas al día y casi no tengo tiempo para mis señoras de siempre. Ganamos más, sí. Pero algo se perdió, ¿no crees?', en: 'Before, I knew all my customers by name. Now a hundred people come a day and I hardly have time for my regular ladies. We earn more, yes. But something has been lost, don’t you think?' },
          decide: {
            ask: { es: 'La familia de Chelo discute qué hacer. ¿Qué propones tú?', en: 'Chelo’s family argues about what to do. What do you suggest?' },
            options: [
              { say: { es: 'Reservar una mesa solo para los clientes del barrio.', en: 'Keep one table only for neighbourhood customers.' }, then: { es: 'Chelo pone un letrero: «Mesa de las vecinas». Las señoras están felices.', en: 'Chelo puts up a sign: “Neighbours’ table.” The ladies are happy.' } },
              { say: { es: 'Abrir un segundo comedor para turistas.', en: 'Open a second eatery for tourists.' }, then: { es: 'Su nieto se ofrece a dirigirlo. Chelo no confía en su mole.', en: 'Her grandson offers to run it. Chelo doesn’t trust his mole.' } },
              { say: { es: 'Subir los precios para los turistas.', en: 'Raise prices for tourists.' }, then: { es: 'Chelo dice que no: «Mi mamá decía que la comida no tiene pasaporte».', en: 'Chelo says no: “My mum used to say food has no passport.”' } },
            ],
          },
          twist: { es: 'Una señora del barrio, clienta desde hace veinte años, llega y no encuentra lugar. Se va sin decir nada.', en: 'A lady from the neighbourhood, a customer for twenty years, arrives and can’t find a seat. She leaves without saying anything.' },
          questions: [
            { q: { es: '¿Tienes un restaurante o una tienda «de siempre»?', en: 'Do you have a “regular” restaurant or shop?' }, help: { es: 'Sí, siempre voy a… porque…', en: 'Yes, I always go to… because…' }, follow: [{ es: '¿Desde cuándo vas?', en: 'Since when have you gone?' }, { es: '¿Te conocen por tu nombre?', en: 'Do they know you by name?' }] },
            { q: { es: '¿Viste algún lugar que cambió mucho por la fama?', en: 'Have you seen a place that changed a lot because of fame?' }, help: { es: 'Sí, antes era… y después de…', en: 'Yes, it used to be… and after…' }, follow: [{ es: '¿Para bien o para mal?', en: 'For better or worse?' }, { es: '¿Sigues yendo?', en: 'Do you still go?' }] },
            { q: { es: '¿Buscas restaurantes en internet antes de viajar?', en: 'Do you look up restaurants online before travelling?' }, help: { es: 'Sí, siempre miro… / No, prefiero preguntar.', en: 'Yes, I always check… / No, I prefer to ask.' }, follow: [{ es: '¿Confías en las opiniones?', en: 'Do you trust reviews?' }, { es: '¿Te equivocaste alguna vez?', en: 'Have you ever got it wrong?' }] },
            { q: { es: '¿Qué le dirías a la señora que se fue?', en: 'What would you say to the lady who left?' }, help: { es: 'Le diría que… / Le pediría perdón…', en: 'I would tell her that… / I would apologise…' }, follow: [{ es: '¿Chelo debería ir a buscarla?', en: 'Should Chelo go and find her?' }, { es: '¿Volverá?', en: 'Will she come back?' }] },
          ],
          words: [{ es: 'filmar', en: 'to film' }, { es: 'de siempre', en: 'regular, usual' }, { es: 'perderse', en: 'to be lost' }, { es: 'el letrero', en: 'the sign' }, { es: 'confiar en', en: 'to trust' }],
        },
        B1: {
          scene: { es: 'Una marca internacional de alimentos quiere vender «mole oaxaqueño» en frascos en supermercados de Europa, con la cara de Doña Chelo en la etiqueta. Le ofrecen un pago único y ningún porcentaje de las ventas.', en: 'An international food brand wants to sell “Oaxacan mole” in jars in European supermarkets, with Doña Chelo’s face on the label. They offer her a one-off payment and no percentage of the sales.' },
          opener: { es: 'Mi receta no es mía: es de mi mamá, de mi abuela y de las mujeres de este pueblo. ¿Puedo firmar algo que no me pertenece solo a mí? Y si digo que no, ¿no lo van a hacer igual sin mí?', en: 'My recipe isn’t mine: it’s my mother’s, my grandmother’s and the women of this town. Can I sign something that doesn’t belong only to me? And if I say no, won’t they do it anyway without me?' },
          decide: {
            ask: { es: 'Chelo te pide consejo. ¿Qué le recomiendas?', en: 'Chelo asks for your advice. What do you recommend?' },
            options: [
              { say: { es: 'Exigir un porcentaje para una cooperativa de cocineras del pueblo.', en: 'Demand a percentage for a cooperative of the town’s cooks.' }, then: { es: 'La marca primero se niega. Dos semanas después, vuelve con una contraoferta.', en: 'The brand refuses at first. Two weeks later, it comes back with a counter-offer.' } },
              { say: { es: 'Rechazarlo y registrar la receta como patrimonio local.', en: 'Reject it and register the recipe as local heritage.' }, then: { es: 'Un abogado le explica que el proceso tarda años. Chelo decide empezar igual.', en: 'A lawyer explains the process takes years. Chelo decides to start anyway.' } },
              { say: { es: 'Aceptar: así el mole llegará a gente que nunca vendrá a Oaxaca.', en: 'Accept: that way mole will reach people who will never come to Oaxaca.' }, then: { es: 'Chelo duda: «¿Y si lo prueban de un frasco y creen que ese es el mole?»', en: 'Chelo hesitates: “And what if they try it from a jar and think that is mole?”' } },
            ],
          },
          twist: { es: 'La nieta de Chelo descubre que la marca ya registró el nombre «Mole Doña Chelo» en tres países.', en: 'Chelo’s granddaughter discovers the brand has already registered the name “Mole Doña Chelo” in three countries.' },
          questions: [
            { q: { es: '¿A quién pertenece una receta tradicional?', en: 'Who does a traditional recipe belong to?' }, help: { es: 'Creo que pertenece a… / No debería pertenecer a nadie, porque…', en: 'I think it belongs to… / It shouldn’t belong to anyone, because…' }, follow: [{ es: '¿Y una canción tradicional?', en: 'And a traditional song?' }, { es: '¿Quién debería ganar dinero con ella?', en: 'Who should make money from it?' }] },
            { q: { es: '¿Conoces casos de empresas que usaron la cultura de un pueblo sin permiso?', en: 'Do you know cases of companies that used a community’s culture without permission?' }, help: { es: 'Sí, leí que una marca… / Recuerdo que…', en: 'Yes, I read that a brand… / I remember that…' }, follow: [{ es: '¿Cómo terminó?', en: 'How did it end?' }, { es: '¿Qué opinas?', en: 'What do you think?' }] },
            { q: { es: '¿Comprarías un producto «típico» hecho por una gran empresa?', en: 'Would you buy a “traditional” product made by a big company?' }, help: { es: 'Lo compraría si… / Preferiría…', en: 'I would buy it if… / I would prefer…' }, follow: [{ es: '¿Lees las etiquetas?', en: 'Do you read labels?' }, { es: '¿Pagarías más por algo artesanal?', en: 'Would you pay more for something handmade?' }] },
            { q: { es: '¿Qué harías tú en el lugar de Chelo después de lo que descubrió su nieta?', en: 'What would you do in Chelo’s place after what her granddaughter found?' }, help: { es: 'Yo en su lugar… / Lo primero sería…', en: 'In her place I… / The first thing would be…' }, follow: [{ es: '¿Lo harías público?', en: 'Would you make it public?' }, { es: '¿Negociarías igual?', en: 'Would you still negotiate?' }] },
          ],
          words: [{ es: 'el frasco', en: 'the jar' }, { es: 'la etiqueta', en: 'the label' }, { es: 'pertenecer', en: 'to belong' }, { es: 'exigir', en: 'to demand' }, { es: 'el patrimonio', en: 'heritage' }],
        },
      },
    },
    // ------------------------------------------------------------ the alebrije workshop
    {
      id: 'alebrijes',
      name: { es: 'El taller de alebrijes', en: 'The alebrije workshop' },
      who: { name: 'Jacobo', role: { es: 'artesano', en: 'craftsman' } },
      levels: {
        A0: {
          scene: { es: 'Es un taller con muchos colores. Hay animales de madera: gatos, perros y dragones. Jacobo pinta un animal.', en: 'It is a workshop full of colours. There are wooden animals: cats, dogs and dragons. Jacobo paints an animal.' },
          opener: { es: '¡Hola! Soy Jacobo. Estos son alebrijes. ¿Te gustan?', en: 'Hi! I am Jacobo. These are alebrijes. Do you like them?' },
          decide: {
            ask: { es: 'Jacobo pinta un alebrije para ti. ¿Qué animal quieres?', en: 'Jacobo paints an alebrije for you. What animal do you want?' },
            options: [
              { say: { es: 'Un gato.', en: 'A cat.' }, then: { es: 'Jacobo pinta un gato azul con alas. ¡Es raro y bonito!', en: 'Jacobo paints a blue cat with wings. It is strange and beautiful!' } },
              { say: { es: 'Un dragón.', en: 'A dragon.' }, then: { es: 'Jacobo dice: «¡Un dragón verde y rojo! Muy bien».', en: 'Jacobo says: “A green and red dragon! Very good.”' } },
              { say: { es: 'Un perro.', en: 'A dog.' }, then: { es: 'Jacobo pinta un perro amarillo. Tiene puntos rosas.', en: 'Jacobo paints a yellow dog. It has pink dots.' } },
            ],
          },
          twist: { es: 'Jacobo te da un pincel. «Ahora tú». ¿Qué pintas?', en: 'Jacobo gives you a brush. “Now you.” What do you paint?' },
          questions: [
            { q: { es: '¿Te gusta pintar?', en: 'Do you like painting?' }, help: { es: 'Sí, me gusta. / No, no pinto.', en: 'Yes, I like it. / No, I don’t paint.' }, follow: [{ es: '¿Pintas bien?', en: 'Do you paint well?' }, { es: '¿Qué pintas?', en: 'What do you paint?' }] },
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es el…', en: 'My favourite colour is…' }, follow: [{ es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }, { es: '¿Qué color no te gusta?', en: 'What colour don’t you like?' }] },
            { q: { es: '¿Qué animal te gusta?', en: 'What animal do you like?' }, help: { es: 'Me gusta el / la…', en: 'I like the…' }, follow: [{ es: '¿Es grande o pequeño?', en: 'Is it big or small?' }, { es: '¿Tienes uno?', en: 'Do you have one?' }] },
            { q: { es: '¿Tienes arte en tu casa?', en: 'Do you have art in your house?' }, help: { es: 'Sí, tengo un cuadro… / No, no tengo.', en: 'Yes, I have a painting… / No, I don’t.' }, follow: [{ es: '¿Dónde está?', en: 'Where is it?' }, { es: '¿De qué color es?', en: 'What colour is it?' }] },
          ],
          words: [{ es: 'el taller', en: 'the workshop' }, { es: 'pintar', en: 'to paint' }, { es: 'el pincel', en: 'the brush' }, { es: 'el ala', en: 'the wing' }, { es: 'raro', en: 'strange' }],
        },
        A1: {
          scene: { es: 'Estás en San Martín Tilcajete, un pueblo cerca de Oaxaca. Casi todas las familias hacen alebrijes. Jacobo trabaja con su esposa y sus tres hijos en el patio de su casa.', en: 'You are in San Martín Tilcajete, a village near Oaxaca. Almost every family makes alebrijes. Jacobo works with his wife and three children in the courtyard of their house.' },
          opener: { es: 'Cada persona tiene un animal que la protege, según el calendario zapoteco. ¿Cuándo es tu cumpleaños? Te digo cuál es el tuyo.', en: 'Each person has an animal that protects them, according to the Zapotec calendar. When is your birthday? I’ll tell you which one is yours.' },
          decide: {
            ask: { es: 'Tu animal es el jaguar. Jacobo tiene tres jaguares a la venta. ¿Cuál compras?', en: 'Your animal is the jaguar. Jacobo has three jaguars for sale. Which do you buy?' },
            options: [
              { say: { es: 'El pequeño, para llevar en la maleta.', en: 'The small one, to carry in my suitcase.' }, then: { es: 'Jacobo lo envuelve en papel periódico. «Cuidado con las orejas».', en: 'Jacobo wraps it in newspaper. “Careful with the ears.”' } },
              { say: { es: 'El grande, aunque es caro.', en: 'The big one, even though it’s expensive.' }, then: { es: 'Jacobo te explica que tardó tres meses en hacerlo. Lo envía a tu casa por correo.', en: 'Jacobo explains it took him three months. He sends it to your home by post.' } },
              { say: { es: 'Ninguno: quiero aprender a hacer uno.', en: 'None: I want to learn to make one.' }, then: { es: 'Jacobo te da un trozo de madera y un cuchillo. Tu jaguar parece un perro triste.', en: 'Jacobo gives you a piece of wood and a knife. Your jaguar looks like a sad dog.' } },
            ],
          },
          twist: { es: 'La hija pequeña de Jacobo te muestra su primer alebrije. Es un pato con seis patas.', en: 'Jacobo’s little daughter shows you her first alebrije. It is a duck with six legs.' },
          questions: [
            { q: { es: '¿Qué animal te representa?', en: 'What animal represents you?' }, help: { es: 'Creo que soy un… porque…', en: 'I think I am a… because…' }, follow: [{ es: '¿Y a tu mejor amigo?', en: 'And your best friend?' }, { es: '¿Qué animal no eres?', en: 'What animal are you not?' }] },
            { q: { es: '¿Trabajas o estudias con tu familia?', en: 'Do you work or study with your family?' }, help: { es: 'Sí, trabajo con… / No, nunca.', en: 'Yes, I work with… / No, never.' }, follow: [{ es: '¿Te gustaría?', en: 'Would you like to?' }, { es: '¿Es fácil o difícil?', en: 'Is it easy or hard?' }] },
            { q: { es: '¿Qué recuerdos compras cuando viajas?', en: 'What souvenirs do you buy when you travel?' }, help: { es: 'Siempre compro… / No compro nada.', en: 'I always buy… / I don’t buy anything.' }, follow: [{ es: '¿Dónde los pones en casa?', en: 'Where do you put them at home?' }, { es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }] },
            { q: { es: '¿Sabes hacer algo con las manos?', en: 'Can you make something with your hands?' }, help: { es: 'Sé… / No sé hacer nada.', en: 'I can… / I can’t make anything.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Qué te gustaría aprender?', en: 'What would you like to learn?' }] },
          ],
          words: [{ es: 'el pueblo', en: 'the village' }, { es: 'proteger', en: 'to protect' }, { es: 'envolver', en: 'to wrap' }, { es: 'la madera', en: 'wood' }, { es: 'la pata', en: 'the (animal) leg' }],
        },
        A2: {
          scene: { es: 'Jacobo empezó a tallar madera a los ocho años. Hoy sus alebrijes se venden en galerías de Nueva York, pero en el pueblo hay copias baratas hechas en fábricas que se venden como «artesanía de Oaxaca».', en: 'Jacobo started carving wood when he was eight. Today his alebrijes sell in New York galleries, but in the village there are cheap factory-made copies sold as “Oaxacan crafts”.' },
          opener: { es: 'Un turista me dijo ayer que mis alebrijes eran caros, que en el mercado había iguales por la mitad. No son iguales. Pero desde lejos, ¿cómo lo sabes?', en: 'A tourist told me yesterday my alebrijes were expensive, that in the market there were identical ones for half the price. They aren’t identical. But from far away, how can you tell?' },
          decide: {
            ask: { es: 'Jacobo quiere proteger su trabajo. ¿Qué le recomiendas?', en: 'Jacobo wants to protect his work. What do you recommend?' },
            options: [
              { say: { es: 'Firmar cada pieza y dar un certificado.', en: 'Sign each piece and give a certificate.' }, then: { es: 'Los compradores lo agradecen. Al mes aparecen copias con firmas falsas.', en: 'Buyers appreciate it. A month later copies appear with fake signatures.' } },
              { say: { es: 'Hacer visitas al taller para que la gente vea el proceso.', en: 'Run workshop visits so people see the process.' }, then: { es: 'Después de ver tres meses de trabajo, nadie dice que es caro.', en: 'After seeing three months of work, nobody says it’s expensive.' } },
              { say: { es: 'Bajar los precios para competir.', en: 'Lower prices to compete.' }, then: { es: 'Su esposa se opone: «Si bajamos, trabajamos el doble y ganamos lo mismo».', en: 'His wife objects: “If we lower them, we work twice as hard and earn the same.”' } },
            ],
          },
          twist: { es: 'Un vecino de Jacobo admite que vende copias de fábrica porque no puede vivir solo de su trabajo.', en: 'A neighbour of Jacobo’s admits he sells factory copies because he can’t live on his own work alone.' },
          questions: [
            { q: { es: '¿Compraste alguna vez algo falso sin saberlo?', en: 'Have you ever bought something fake without knowing?' }, help: { es: 'Sí, una vez compré… y después…', en: 'Yes, once I bought… and later…' }, follow: [{ es: '¿Cómo te diste cuenta?', en: 'How did you realise?' }, { es: '¿Te enojaste?', en: 'Did you get angry?' }] },
            { q: { es: '¿Qué hacías con las manos cuando eras niño?', en: 'What did you do with your hands as a child?' }, help: { es: 'Me gustaba dibujar / construir…', en: 'I liked to draw / build…' }, follow: [{ es: '¿Lo sigues haciendo?', en: 'Do you still do it?' }, { es: '¿Por qué lo dejaste?', en: 'Why did you stop?' }] },
            { q: { es: '¿Por qué crees que lo hecho a mano cuesta más?', en: 'Why do you think handmade things cost more?' }, help: { es: 'Porque lleva más tiempo / porque es único…', en: 'Because it takes more time / because it’s unique…' }, follow: [{ es: '¿Lo vale?', en: 'Is it worth it?' }, { es: '¿Qué tienes hecho a mano?', en: 'What do you have that’s handmade?' }] },
            { q: { es: '¿Entiendes al vecino de Jacobo?', en: 'Do you understand Jacobo’s neighbour?' }, help: { es: 'Lo entiendo porque… / No, porque…', en: 'I understand him because… / No, because…' }, follow: [{ es: '¿Qué harías en su lugar?', en: 'What would you do in his place?' }, { es: '¿Jacobo debería ayudarlo?', en: 'Should Jacobo help him?' }] },
          ],
          words: [{ es: 'tallar', en: 'to carve' }, { es: 'la copia', en: 'the copy' }, { es: 'la pieza', en: 'the piece' }, { es: 'competir', en: 'to compete' }, { es: 'darse cuenta', en: 'to realise' }],
        },
        B1: {
          scene: { es: 'Un famoso estudio de animación usó alebrijes en una película de éxito mundial. Desde entonces, la demanda se multiplicó por diez. Para tener madera suficiente, algunos talleres cortan árboles de copal sin control.', en: 'A famous animation studio used alebrijes in a worldwide hit film. Since then, demand has multiplied by ten. To get enough wood, some workshops cut copal trees without any control.' },
          opener: { es: 'La película nos hizo famosos, y estoy agradecido. Pero un copal tarda quince años en crecer y nosotros cortamos en un mes lo que el bosque hace en una década. El éxito nos está comiendo el futuro.', en: 'The film made us famous, and I’m grateful. But a copal tree takes fifteen years to grow and we cut in a month what the forest makes in a decade. Success is eating our future.' },
          decide: {
            ask: { es: 'Jacobo propone a los artesanos del pueblo un acuerdo. ¿Qué medida apoyarías?', en: 'Jacobo proposes an agreement to the village craftspeople. Which measure would you support?' },
            options: [
              { say: { es: 'Plantar cinco árboles por cada uno que se corte.', en: 'Plant five trees for each one cut.' }, then: { es: 'La mayoría acepta. Los más jóvenes organizan jornadas de plantación los domingos.', en: 'Most agree. The youngest organise planting days on Sundays.' } },
              { say: { es: 'Limitar la producción, aunque se gane menos.', en: 'Limit production, even if it means earning less.' }, then: { es: 'Las familias más pobres protestan: para ellos, un mes sin vender es un mes sin comer.', en: 'The poorest families protest: for them, a month without selling is a month without eating.' } },
              { say: { es: 'Subir los precios y explicar por qué a los compradores.', en: 'Raise prices and explain why to buyers.' }, then: { es: 'Las galerías aceptan. Los turistas del mercado, no tanto.', en: 'The galleries accept. The market tourists, not so much.' } },
            ],
          },
          twist: { es: 'El estudio de animación ofrece financiar un vivero de copales, pero quiere su logotipo en la entrada del pueblo.', en: 'The animation studio offers to fund a copal nursery, but wants its logo at the entrance to the village.' },
          questions: [
            { q: { es: '¿El éxito internacional ayuda o perjudica a una tradición local?', en: 'Does international success help or harm a local tradition?' }, help: { es: 'Ayuda en el sentido de que… pero perjudica…', en: 'It helps in the sense that… but it harms…' }, follow: [{ es: '¿Conoces otro ejemplo?', en: 'Do you know another example?' }, { es: '¿Se puede evitar el lado negativo?', en: 'Can the negative side be avoided?' }] },
            { q: { es: '¿Aceptarías dinero de una empresa a cambio de poner su marca en tu pueblo?', en: 'Would you accept money from a company in exchange for putting its brand in your town?' }, help: { es: 'Lo aceptaría siempre que… / No lo aceptaría porque…', en: 'I would accept it as long as… / I wouldn’t because…' }, follow: [{ es: '¿Dónde está el límite?', en: 'Where is the limit?' }, { es: '¿Quién debería decidirlo?', en: 'Who should decide?' }] },
            { q: { es: '¿Estarías dispuesto a pagar más por un producto sostenible?', en: 'Would you be willing to pay more for a sustainable product?' }, help: { es: 'Sí, si supiera que… / Depende de cuánto…', en: 'Yes, if I knew that… / It depends how much…' }, follow: [{ es: '¿Cómo sabes si algo es sostenible?', en: 'How do you know if something is sustainable?' }, { es: '¿Lo haces ya?', en: 'Do you already do it?' }] },
            { q: { es: '¿Cómo equilibrarías el trabajo de las familias pobres con la protección del bosque?', en: 'How would you balance poor families’ work with protecting the forest?' }, help: { es: 'Yo propondría… para que… / Habría que…', en: 'I would propose… so that… / It would be necessary to…' }, follow: [{ es: '¿Quién pagaría?', en: 'Who would pay?' }, { es: '¿Funcionaría a largo plazo?', en: 'Would it work in the long term?' }] },
          ],
          words: [{ es: 'multiplicarse', en: 'to multiply' }, { es: 'sin control', en: 'without control' }, { es: 'agradecido', en: 'grateful' }, { es: 'el vivero', en: 'the nursery (plants)' }, { es: 'a cambio de', en: 'in exchange for' }],
        },
      },
    },
    // ------------------------------------------------------------ Santo Domingo church
    {
      id: 'iglesia',
      name: { es: 'La iglesia de Santo Domingo', en: 'Santo Domingo church' },
      who: { name: 'Fray Bernardo', role: { es: 'fraile y guía', en: 'friar and guide' } },
      levels: {
        A0: {
          scene: { es: 'Es una iglesia grande y vieja. Por dentro hay mucho oro. Fray Bernardo es el guía.', en: 'It is a big old church. Inside there is a lot of gold. Friar Bernardo is the guide.' },
          opener: { es: 'Hola, bienvenido. Soy Bernardo. Mira arriba, por favor.', en: 'Hello, welcome. I am Bernardo. Look up, please.' },
          decide: {
            ask: { es: 'Bernardo pregunta: ¿qué te gusta más?', en: 'Bernardo asks: what do you like most?' },
            options: [
              { say: { es: 'El techo dorado.', en: 'The golden ceiling.' }, then: { es: 'Bernardo dice: «Sí, es oro. Es muy viejo».', en: 'Bernardo says: “Yes, it is gold. It is very old.”' } },
              { say: { es: 'El jardín.', en: 'The garden.' }, then: { es: 'Bernardo dice: «Hay muchas plantas y cactus grandes».', en: 'Bernardo says: “There are many plants and big cacti.”' } },
              { say: { es: 'Las campanas.', en: 'The bells.' }, then: { es: 'Bernardo dice: «Suenan a las doce. ¡Escucha!»', en: 'Bernardo says: “They ring at twelve. Listen!”' } },
            ],
          },
          twist: { es: 'Son las doce. Las campanas suenan muy fuerte. ¡Ding, dong! ¿Qué dices?', en: 'It is twelve o’clock. The bells ring very loudly. Ding, dong! What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los edificios viejos?', en: 'Do you like old buildings?' }, help: { es: 'Sí, me gustan. / Prefiero los nuevos.', en: 'Yes, I like them. / I prefer new ones.' }, follow: [{ es: '¿Hay edificios viejos en tu ciudad?', en: 'Are there old buildings in your city?' }, { es: '¿Cuál te gusta?', en: 'Which one do you like?' }] },
            { q: { es: '¿Qué hora es?', en: 'What time is it?' }, help: { es: 'Son las… / Es la una.', en: 'It is … o’clock. / It is one o’clock.' }, follow: [{ es: '¿A qué hora comes?', en: 'What time do you eat?' }, { es: '¿A qué hora duermes?', en: 'What time do you go to sleep?' }] },
            { q: { es: '¿Te gustan los jardines?', en: 'Do you like gardens?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Tienes jardín?', en: 'Do you have a garden?' }, { es: '¿Qué plantas te gustan?', en: 'What plants do you like?' }] },
            { q: { es: '¿Sacas fotos cuando viajas?', en: 'Do you take photos when you travel?' }, help: { es: 'Sí, muchas. / No, pocas.', en: 'Yes, lots. / No, not many.' }, follow: [{ es: '¿Con el teléfono o con cámara?', en: 'With your phone or a camera?' }, { es: '¿Fotos de qué?', en: 'Photos of what?' }] },
          ],
          words: [{ es: 'la iglesia', en: 'the church' }, { es: 'el oro', en: 'gold' }, { es: 'el techo', en: 'the ceiling' }, { es: 'la campana', en: 'the bell' }, { es: 'arriba', en: 'up, above' }],
        },
        A1: {
          scene: { es: 'La iglesia de Santo Domingo está en el centro de Oaxaca. Al lado hay un museo y un jardín botánico enorme. Fray Bernardo guía un grupo pequeño de visitantes.', en: 'The church of Santo Domingo is in the centre of Oaxaca. Next to it there is a museum and an enormous botanical garden. Friar Bernardo guides a small group of visitors.' },
          opener: { es: 'Esta iglesia tiene más de cuatrocientos años. Durante la guerra fue un cuartel con caballos. Hoy es uno de los lugares más bonitos de México. ¿Qué te parece?', en: 'This church is more than four hundred years old. During the war it was a barracks with horses. Today it is one of the most beautiful places in Mexico. What do you think?' },
          decide: {
            ask: { es: 'Tienes una hora. ¿Qué visitas con Fray Bernardo?', en: 'You have one hour. What do you visit with Friar Bernardo?' },
            options: [
              { say: { es: 'El museo, con joyas antiguas.', en: 'The museum, with ancient jewellery.' }, then: { es: 'Ves un tesoro de oro de hace mil años. Bernardo cuenta cómo lo encontraron en una tumba.', en: 'You see a thousand-year-old gold treasure. Bernardo tells how it was found in a tomb.' } },
              { say: { es: 'El jardín botánico.', en: 'The botanical garden.' }, then: { es: 'Hay cactus más altos que una casa. Bernardo conoce el nombre de cada uno.', en: 'There are cacti taller than a house. Bernardo knows the name of each one.' } },
              { say: { es: 'La torre de las campanas.', en: 'The bell tower.' }, then: { es: 'Subes ochenta escalones. Desde arriba ves toda la ciudad y las montañas.', en: 'You climb eighty steps. From the top you see the whole city and the mountains.' } },
            ],
          },
          twist: { es: 'En la puerta empieza una boda. La novia llega con una banda de música y un burro con flores.', en: 'At the door a wedding begins. The bride arrives with a brass band and a donkey with flowers.' },
          questions: [
            { q: { es: '¿Qué edificio famoso hay en tu ciudad?', en: 'What famous building is there in your city?' }, help: { es: 'Hay un/una… muy famoso/a. Es de…', en: 'There is a very famous… It is from…' }, follow: [{ es: '¿Lo visitaste?', en: 'Have you visited it?' }, { es: '¿Es antiguo o moderno?', en: 'Is it old or modern?' }] },
            { q: { es: '¿Te gustan los museos?', en: 'Do you like museums?' }, help: { es: 'Sí, me gustan los museos de… / No mucho.', en: 'Yes, I like … museums. / Not much.' }, follow: [{ es: '¿Cuál fue el último?', en: 'Which was the last one?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Cómo son las bodas en tu país?', en: 'What are weddings like in your country?' }, help: { es: 'Normalmente hay… / La gente baila…', en: 'There is usually… / People dance…' }, follow: [{ es: '¿Cuántas personas van?', en: 'How many people go?' }, { es: '¿Qué ropa lleva la gente?', en: 'What do people wear?' }] },
            { q: { es: '¿Subes a torres y miradores?', en: 'Do you climb towers and viewpoints?' }, help: { es: 'Sí, siempre. / No, me dan miedo las alturas.', en: 'Yes, always. / No, I’m scared of heights.' }, follow: [{ es: '¿Cuál es el lugar más alto donde estuviste?', en: 'What is the highest place you have been?' }, { es: '¿Qué viste?', en: 'What did you see?' }] },
          ],
          words: [{ es: 'el cuartel', en: 'the barracks' }, { es: 'la joya', en: 'the jewel' }, { es: 'la tumba', en: 'the tomb' }, { es: 'el escalón', en: 'the step' }, { es: 'la boda', en: 'the wedding' }],
        },
        A2: {
          scene: { es: 'Fray Bernardo llegó a Oaxaca hace treinta años desde un pueblo del norte. Al principio no hablaba ninguna lengua indígena. Hoy habla zapoteco y escucha las historias de los abuelos que vienen a la iglesia.', en: 'Friar Bernardo came to Oaxaca thirty years ago from a town in the north. At first he didn’t speak any indigenous language. Today he speaks Zapotec and listens to the stories of the grandparents who come to the church.' },
          opener: { es: 'Cuando llegué, la gente me hablaba en zapoteco y yo solo sonreía. Una señora me enseñó, palabra por palabra, en el mercado. ¿Tú tuviste alguna vez un maestro inesperado?', en: 'When I arrived, people spoke to me in Zapotec and I just smiled. A lady taught me, word by word, at the market. Have you ever had an unexpected teacher?' },
          decide: {
            ask: { es: 'Bernardo quiere hacer algo para que los jóvenes no olviden el zapoteco. ¿Qué le sugieres?', en: 'Bernardo wants to do something so young people don’t forget Zapotec. What do you suggest?' },
            options: [
              { say: { es: 'Clases gratis los sábados en el jardín.', en: 'Free classes on Saturdays in the garden.' }, then: { es: 'El primer sábado vienen cuatro niños. El tercero, cuarenta, con sus abuelos.', en: 'The first Saturday four kids come. The third, forty, with their grandparents.' } },
              { say: { es: 'Grabar a los abuelos contando historias.', en: 'Record the grandparents telling stories.' }, then: { es: 'Un abuelo cuenta una historia de dos horas. Nadie se aburre.', en: 'A grandfather tells a two-hour story. Nobody gets bored.' } },
              { say: { es: 'Hacer canciones modernas en zapoteco.', en: 'Make modern songs in Zapotec.' }, then: { es: 'Un grupo de chicos graba un rap en zapoteco. Los abuelos no entienden la música, pero sí la letra.', en: 'A group of kids records a rap in Zapotec. The grandparents don’t understand the music, but they understand the lyrics.' } },
            ],
          },
          twist: { es: 'Una niña le pregunta a Bernardo por qué la iglesia tiene oro si en el pueblo hay gente pobre.', en: 'A girl asks Bernardo why the church has gold when there are poor people in the town.' },
          questions: [
            { q: { es: '¿Quién te enseñó algo importante sin ser profesor?', en: 'Who taught you something important without being a teacher?' }, help: { es: 'Mi… me enseñó a… cuando yo…', en: 'My… taught me to… when I…' }, follow: [{ es: '¿Le diste las gracias?', en: 'Did you thank them?' }, { es: '¿Sigues en contacto?', en: 'Are you still in touch?' }] },
            { q: { es: '¿Tus abuelos hablaban otro idioma?', en: 'Did your grandparents speak another language?' }, help: { es: 'Sí, hablaban… / No, pero…', en: 'Yes, they spoke… / No, but…' }, follow: [{ es: '¿Tú lo hablas?', en: 'Do you speak it?' }, { es: '¿Te gustaría aprenderlo?', en: 'Would you like to learn it?' }] },
            { q: { es: '¿Cómo te sentiste la primera vez que no entendías a nadie?', en: 'How did you feel the first time you couldn’t understand anyone?' }, help: { es: 'Me sentía… / No sabía qué…', en: 'I felt… / I didn’t know what…' }, follow: [{ es: '¿Dónde fue?', en: 'Where was it?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Qué le contestarías a la niña?', en: 'What would you answer the girl?' }, help: { es: 'Le diría que… / Es una buena pregunta porque…', en: 'I would tell her that… / It’s a good question because…' }, follow: [{ es: '¿Tiene razón?', en: 'Is she right?' }, { es: '¿Qué haría con el oro?', en: 'What would she do with the gold?' }] },
          ],
          words: [{ es: 'la lengua indígena', en: 'indigenous language' }, { es: 'inesperado', en: 'unexpected' }, { es: 'olvidar', en: 'to forget' }, { es: 'aburrirse', en: 'to get bored' }, { es: 'la letra', en: 'the lyrics' }],
        },
        B1: {
          scene: { es: 'Un museo europeo tiene en su colección piezas que salieron de Oaxaca hace un siglo. Una comunidad zapoteca pide que vuelvan. El museo responde que en Europa están mejor conservadas y que más gente puede verlas. Fray Bernardo participa en el debate.', en: 'A European museum has pieces in its collection that left Oaxaca a century ago. A Zapotec community asks for their return. The museum replies that in Europe they are better preserved and more people can see them. Friar Bernardo takes part in the debate.' },
          opener: { es: 'El museo dice que las cuida mejor. Puede ser. Pero un abuelo me dijo ayer: «No es lo mismo ver a tu madre en una foto que tenerla en casa». ¿A quién pertenece la memoria de un pueblo?', en: 'The museum says it looks after them better. Maybe. But a grandfather told me yesterday: “It’s not the same to see your mother in a photo as to have her at home.” Who does a people’s memory belong to?' },
          decide: {
            ask: { es: 'Te piden tu opinión en el debate. ¿Qué propones?', en: 'You are asked your opinion in the debate. What do you propose?' },
            options: [
              { say: { es: 'Devolver las piezas y ayudar a construir un buen museo local.', en: 'Return the pieces and help build a good local museum.' }, then: { es: 'La comunidad aplaude. El representante del museo pide tiempo para «estudiar la propuesta».', en: 'The community applauds. The museum representative asks for time to “study the proposal”.' } },
              { say: { es: 'Un préstamo largo: que vuelvan durante diez años y luego se decida.', en: 'A long loan: they return for ten years and then it’s decided.' }, then: { es: 'Algunos lo ven como un buen comienzo. Otros dicen que no se presta lo que es de uno.', en: 'Some see it as a good start. Others say you don’t lend what is yours.' } },
              { say: { es: 'Hacer copias perfectas para Europa y devolver los originales.', en: 'Make perfect copies for Europe and return the originals.' }, then: { es: 'El museo se resiste: «La gente viene a ver lo auténtico».', en: 'The museum resists: “People come to see the real thing.”' } },
            ],
          },
          twist: { es: 'Un historiador revela que las piezas no fueron robadas: una familia oaxaqueña las vendió legalmente en 1920.', en: 'A historian reveals the pieces weren’t stolen: an Oaxacan family sold them legally in 1920.' },
          questions: [
            { q: { es: '¿Deberían los museos devolver objetos a sus países de origen?', en: 'Should museums return objects to their countries of origin?' }, help: { es: 'Creo que sí, siempre que… / No en todos los casos, porque…', en: 'I think so, as long as… / Not in every case, because…' }, follow: [{ es: '¿Conoces algún caso famoso?', en: 'Do you know a famous case?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Cambia tu opinión si las piezas se vendieron legalmente?', en: 'Does your opinion change if the pieces were sold legally?' }, help: { es: 'Sí, cambia porque… / No, porque lo legal no siempre es justo.', en: 'Yes, it changes because… / No, because legal isn’t always fair.' }, follow: [{ es: '¿Y si la familia era pobre?', en: 'And if the family was poor?' }, { es: '¿Y si el comprador lo sabía?', en: 'And if the buyer knew?' }] },
            { q: { es: '¿Qué objeto de tu familia debería quedarse siempre en la familia?', en: 'What object from your family should always stay in the family?' }, help: { es: 'Hay un… que perteneció a… y…', en: 'There is a… that belonged to… and…' }, follow: [{ es: '¿Quién lo tiene ahora?', en: 'Who has it now?' }, { es: '¿Qué pasaría si se vendiera?', en: 'What would happen if it were sold?' }] },
            { q: { es: '¿Es más importante que muchos vean un objeto o que esté donde tiene sentido?', en: 'Is it more important for many people to see an object or for it to be where it makes sense?' }, help: { es: 'Para mí es más importante… porque…', en: 'For me it’s more important… because…' }, follow: [{ es: '¿Y en el caso de una obra de arte moderna?', en: 'And in the case of a modern artwork?' }, { es: '¿Qué viste en un museo que te hizo pensar?', en: 'What did you see in a museum that made you think?' }] },
          ],
          words: [{ es: 'la colección', en: 'the collection' }, { es: 'conservar', en: 'to preserve' }, { es: 'el préstamo', en: 'the loan' }, { es: 'resistirse', en: 'to resist' }, { es: 'el país de origen', en: 'country of origin' }],
        },
      },
    },
    // ------------------------------------------------------------ the mezcal bar
    {
      id: 'mezcal',
      name: { es: 'La mezcalería', en: 'The mezcal bar' },
      who: { name: 'Itzel', role: { es: 'dueña de la mezcalería', en: 'mezcal bar owner' } },
      levels: {
        A0: {
          scene: { es: 'Es un bar pequeño con velas. En la mesa hay naranjas y sal. Itzel es la dueña.', en: 'It is a small bar with candles. On the table there are oranges and salt. Itzel is the owner.' },
          opener: { es: '¡Hola! Soy Itzel. Bienvenido. ¿Qué quieres tomar?', en: 'Hi! I am Itzel. Welcome. What do you want to drink?' },
          decide: {
            ask: { es: 'Itzel tiene tres bebidas. ¿Cuál quieres?', en: 'Itzel has three drinks. Which one do you want?' },
            options: [
              { say: { es: 'Agua de jamaica.', en: 'Hibiscus water.' }, then: { es: 'Itzel dice: «Es roja y fresca. ¡Muy rica!»', en: 'Itzel says: “It is red and refreshing. Very tasty!”' } },
              { say: { es: 'Un chocolate caliente.', en: 'A hot chocolate.' }, then: { es: 'Itzel dice: «Es chocolate de Oaxaca, con canela».', en: 'Itzel says: “It is Oaxacan chocolate, with cinnamon.”' } },
              { say: { es: 'Un poco de mezcal.', en: 'A little mezcal.' }, then: { es: 'Itzel dice: «Despacio, es fuerte. Con naranja».', en: 'Itzel says: “Slowly, it is strong. With orange.”' } },
            ],
          },
          twist: { es: 'Itzel trae un plato con insectos pequeños. Son chapulines. «¿Quieres probar?» ¿Qué dices?', en: 'Itzel brings a plate with small insects. They are grasshoppers. “Do you want to try?” What do you say?' },
          questions: [
            { q: { es: '¿Qué bebes en la mañana?', en: 'What do you drink in the morning?' }, help: { es: 'Bebo café / té / jugo.', en: 'I drink coffee / tea / juice.' }, follow: [{ es: '¿Con azúcar?', en: 'With sugar?' }, { es: '¿Caliente o frío?', en: 'Hot or cold?' }] },
            { q: { es: '¿Comes insectos?', en: 'Do you eat insects?' }, help: { es: '¡No, nunca! / Sí, a veces.', en: 'No, never! / Yes, sometimes.' }, follow: [{ es: '¿Quieres probar?', en: 'Do you want to try?' }, { es: '¿Qué comida rara comes?', en: 'What strange food do you eat?' }] },
            { q: { es: '¿Te gustan las naranjas?', en: 'Do you like oranges?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Qué fruta te gusta más?', en: 'What fruit do you like most?' }, { es: '¿Bebes jugo de naranja?', en: 'Do you drink orange juice?' }] },
            { q: { es: '¿Vas a bares?', en: 'Do you go to bars?' }, help: { es: 'Sí, a veces. / No, prefiero mi casa.', en: 'Yes, sometimes. / No, I prefer my house.' }, follow: [{ es: '¿Con quién?', en: 'Who with?' }, { es: '¿Qué día?', en: 'What day?' }] },
          ],
          words: [{ es: 'la vela', en: 'the candle' }, { es: 'la sal', en: 'salt' }, { es: 'fuerte', en: 'strong' }, { es: 'la canela', en: 'cinnamon' }, { es: 'el chapulín', en: 'the grasshopper' }],
        },
        A1: {
          scene: { es: 'La mezcalería de Itzel está en una calle tranquila del centro. Las paredes son de color azul y hay botellas sin etiqueta. Cada botella viene de un pueblo diferente.', en: 'Itzel’s mezcal bar is on a quiet street in the centre. The walls are blue and there are bottles without labels. Each bottle comes from a different village.' },
          opener: { es: 'El mezcal no se bebe rápido. Se besa. Primero lo hueles, después tomas un poquito. ¿Quieres probar o prefieres algo sin alcohol?', en: 'Mezcal isn’t drunk fast. You kiss it. First you smell it, then you take a tiny sip. Do you want to try or do you prefer something without alcohol?' },
          decide: {
            ask: { es: 'Itzel te propone una actividad para esta noche. ¿Cuál eliges?', en: 'Itzel suggests an activity for tonight. Which do you choose?' },
            options: [
              { say: { es: 'Una cata de tres mezcales diferentes.', en: 'A tasting of three different mezcals.' }, then: { es: 'Uno sabe a humo, otro a frutas y otro a tierra. Te gusta el de frutas.', en: 'One tastes of smoke, another of fruit and another of earth. You like the fruity one.' } },
              { say: { es: 'Escuchar al músico que toca en la esquina.', en: 'Listen to the musician playing in the corner.' }, then: { es: 'Toca canciones tristes con una guitarra vieja. Itzel canta con él.', en: 'He plays sad songs on an old guitar. Itzel sings with him.' } },
              { say: { es: 'Comer tlayudas en la calle.', en: 'Eat tlayudas on the street.' }, then: { es: 'Una tlayuda es como una pizza grande y crujiente. Necesitas las dos manos.', en: 'A tlayuda is like a big crispy pizza. You need both hands.' } },
            ],
          },
          twist: { es: 'Un turista bebe el mezcal de un trago y empieza a toser. Todo el bar lo mira.', en: 'A tourist drinks the mezcal in one gulp and starts coughing. The whole bar looks at him.' },
          questions: [
            { q: { es: '¿Qué bebida típica hay en tu país?', en: 'What typical drink is there in your country?' }, help: { es: 'En mi país se bebe… / Es de…', en: 'In my country people drink… / It is made of…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Cuándo se bebe?', en: 'When do people drink it?' }] },
            { q: { es: '¿Prefieres un bar tranquilo o con mucha gente?', en: 'Do you prefer a quiet bar or one with lots of people?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Cuál es tu bar favorito?', en: 'What is your favourite bar?' }, { es: '¿Qué pides?', en: 'What do you order?' }] },
            { q: { es: '¿Qué haces un viernes por la noche?', en: 'What do you do on a Friday night?' }, help: { es: 'Normalmente… / Salgo con… / Me quedo en casa.', en: 'Usually… / I go out with… / I stay home.' }, follow: [{ es: '¿A qué hora vuelves a casa?', en: 'What time do you get home?' }, { es: '¿Y el último viernes?', en: 'And last Friday?' }] },
            { q: { es: '¿Te gusta probar cosas nuevas?', en: 'Do you like trying new things?' }, help: { es: 'Sí, siempre. / Depende de…', en: 'Yes, always. / It depends on…' }, follow: [{ es: '¿Qué probaste hace poco?', en: 'What have you tried recently?' }, { es: '¿Qué nunca vas a probar?', en: 'What will you never try?' }] },
          ],
          words: [{ es: 'tranquilo', en: 'quiet' }, { es: 'oler', en: 'to smell' }, { es: 'la cata', en: 'the tasting' }, { es: 'el humo', en: 'smoke' }, { es: 'de un trago', en: 'in one gulp' }],
        },
        A2: {
          scene: { es: 'Itzel creció en un pueblo donde su abuelo hacía mezcal en un horno de tierra. Estudió turismo en la ciudad y hace cinco años abrió su mezcalería para vender solo el mezcal de las familias pequeñas.', en: 'Itzel grew up in a village where her grandfather made mezcal in an earth oven. She studied tourism in the city and five years ago opened her bar to sell only mezcal from small families.' },
          opener: { es: 'Cuando yo era niña, el mezcal era bebida de pobres. Ahora en Nueva York una copa cuesta veinte dólares. Pero los que lo hacen siguen ganando lo mismo. Eso no me parece justo. ¿A ti?', en: 'When I was a child, mezcal was a poor people’s drink. Now in New York a glass costs twenty dollars. But the people who make it still earn the same. That doesn’t seem fair to me. Does it to you?' },
          decide: {
            ask: { es: 'Itzel quiere que los turistas conozcan a los productores. ¿Qué le aconsejas?', en: 'Itzel wants tourists to meet the producers. What do you advise?' },
            options: [
              { say: { es: 'Organizar excursiones a los pueblos.', en: 'Organise trips to the villages.' }, then: { es: 'En la primera excursión, el abuelo de Itzel explica todo. Los turistas compran veinte botellas.', en: 'On the first trip, Itzel’s grandfather explains everything. The tourists buy twenty bottles.' } },
              { say: { es: 'Poner la foto y el nombre de cada productor en las botellas.', en: 'Put each producer’s photo and name on the bottles.' }, then: { es: 'Los clientes preguntan por «Don Celso» como si fuera famoso. Don Celso se ríe cuando se entera.', en: 'Customers ask for “Don Celso” as if he were famous. Don Celso laughs when he finds out.' } },
              { say: { es: 'Invitar a los productores a la mezcalería una vez al mes.', en: 'Invite the producers to the bar once a month.' }, then: { es: 'La primera noche, un productor llega con su burro. La calle entera sale a mirar.', en: 'The first night, a producer arrives with his donkey. The whole street comes out to look.' } },
            ],
          },
          twist: { es: 'Un empresario le ofrece a Itzel abrir diez mezcalerías iguales en otras ciudades.', en: 'A businessman offers Itzel the chance to open ten identical mezcal bars in other cities.' },
          questions: [
            { q: { es: '¿Qué hacían tus abuelos para ganarse la vida?', en: 'What did your grandparents do for a living?' }, help: { es: 'Mi abuelo era… y mi abuela…', en: 'My grandfather was… and my grandmother…' }, follow: [{ es: '¿Era un trabajo duro?', en: 'Was it hard work?' }, { es: '¿Alguien de tu familia lo hace hoy?', en: 'Does anyone in your family do it today?' }] },
            { q: { es: '¿Algo que antes era barato ahora es caro y de moda?', en: 'Is there something that used to be cheap and is now expensive and trendy?' }, help: { es: 'Sí, antes… y ahora…', en: 'Yes, before… and now…' }, follow: [{ es: '¿Lo compras?', en: 'Do you buy it?' }, { es: '¿Quién gana con eso?', en: 'Who benefits from that?' }] },
            { q: { es: '¿Te importa saber quién hace lo que compras?', en: 'Do you care who makes what you buy?' }, help: { es: 'Sí, me importa porque… / No mucho.', en: 'Yes, I care because… / Not much.' }, follow: [{ es: '¿Dónde lo puedes saber?', en: 'Where can you find out?' }, { es: '¿Cambia lo que compras?', en: 'Does it change what you buy?' }] },
            { q: { es: '¿Itzel debería aceptar la oferta del empresario?', en: 'Should Itzel accept the businessman’s offer?' }, help: { es: 'Creo que sí porque… / Creo que no porque…', en: 'I think so because… / I don’t think so because…' }, follow: [{ es: '¿Qué ganaría?', en: 'What would she gain?' }, { es: '¿Qué perdería?', en: 'What would she lose?' }] },
          ],
          words: [{ es: 'crecer', en: 'to grow up' }, { es: 'el horno', en: 'the oven' }, { es: 'justo', en: 'fair' }, { es: 'el productor', en: 'the producer' }, { es: 'enterarse', en: 'to find out' }],
        },
        B1: {
          scene: { es: 'El boom del mezcal hizo que los agaves silvestres empiecen a desaparecer de las montañas. Algunos productores ahora plantan agave en vez de maíz y frijol, y los pueblos dependen de un solo cultivo. Itzel organiza una mesa redonda en su bar.', en: 'The mezcal boom has made wild agaves start disappearing from the mountains. Some producers now plant agave instead of corn and beans, and villages depend on a single crop. Itzel organises a round table in her bar.' },
          opener: { es: 'Yo vendo mezcal, así que no puedo decir que el éxito sea malo. Pero si mañana pasa la moda, ¿qué comen los pueblos que dejaron de plantar maíz? Me preocupa que estemos repitiendo la historia del café.', en: 'I sell mezcal, so I can’t say success is bad. But if tomorrow the fashion passes, what will the villages that stopped planting corn eat? I worry we’re repeating the history of coffee.' },
          decide: {
            ask: { es: 'Itzel tiene que decidir qué mezcal vende a partir de ahora. ¿Qué le aconsejas?', en: 'Itzel has to decide which mezcal she will sell from now on. What do you advise?' },
            options: [
              { say: { es: 'Solo mezcal de productores que también plantan comida.', en: 'Only mezcal from producers who also grow food.' }, then: { es: 'Pierde a dos proveedores, pero gana la confianza de un grupo de cooperativas.', en: 'She loses two suppliers, but gains the trust of a group of cooperatives.' } },
              { say: { es: 'Dejar de vender mezcal de agave silvestre.', en: 'Stop selling wild-agave mezcal.' }, then: { es: 'Sus mejores clientes protestan: era el más caro y el más buscado.', en: 'Her best customers protest: it was the most expensive and most sought-after.' } },
              { say: { es: 'Seguir igual, pero donar una parte a reforestar.', en: 'Carry on, but donate part to reforestation.' }, then: { es: 'Un productor joven dice que eso es «lavar la conciencia». Se arma una discusión.', en: 'A young producer says that is “washing your conscience”. An argument breaks out.' } },
            ],
          },
          twist: { es: 'Su propio abuelo admite en público que el año pasado cortó agaves silvestres de una montaña protegida porque necesitaba el dinero.', en: 'Her own grandfather admits in public that last year he cut wild agaves from a protected mountain because he needed the money.' },
          questions: [
            { q: { es: '¿Es peligroso que una región dependa de un solo producto?', en: 'Is it dangerous for a region to depend on a single product?' }, help: { es: 'Sí, porque si… / No necesariamente, si…', en: 'Yes, because if… / Not necessarily, if…' }, follow: [{ es: '¿Hay un caso así en tu país?', en: 'Is there a case like this in your country?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿Puede un negocio ser ético y rentable al mismo tiempo?', en: 'Can a business be ethical and profitable at the same time?' }, help: { es: 'Creo que puede, siempre que… / Es difícil porque…', en: 'I think it can, as long as… / It’s hard because…' }, follow: [{ es: '¿Conoces alguno?', en: 'Do you know one?' }, { es: '¿Pagarías más por apoyarlo?', en: 'Would you pay more to support it?' }] },
            { q: { es: '¿Juzgarías al abuelo de Itzel?', en: 'Would you judge Itzel’s grandfather?' }, help: { es: 'No lo juzgaría porque… / Entiendo que…, pero…', en: 'I wouldn’t judge him because… / I understand that…, but…' }, follow: [{ es: '¿Qué debería hacer Itzel ahora?', en: 'What should Itzel do now?' }, { es: '¿La necesidad justifica romper una regla?', en: 'Does need justify breaking a rule?' }] },
            { q: { es: '¿Qué moda de consumo crees que pasará pronto?', en: 'What consumer trend do you think will pass soon?' }, help: { es: 'Me parece que… dejará de estar de moda porque…', en: 'I think… will go out of fashion because…' }, follow: [{ es: '¿Quién perderá más?', en: 'Who will lose most?' }, { es: '¿Tú la sigues?', en: 'Do you follow it?' }] },
          ],
          words: [{ es: 'silvestre', en: 'wild' }, { es: 'el cultivo', en: 'the crop' }, { es: 'el proveedor', en: 'the supplier' }, { es: 'rentable', en: 'profitable' }, { es: 'lavar la conciencia', en: 'to ease one’s conscience' }],
        },
      },
    },
    // ------------------------------------------------------------ the Guelaguetza stage
    {
      id: 'guelaguetza',
      name: { es: 'El escenario de la Guelaguetza', en: 'The Guelaguetza stage' },
      who: { name: 'Marisol', role: { es: 'bailarina', en: 'dancer' } },
      levels: {
        A0: {
          scene: { es: 'Es una fiesta grande. Hay música, flores y muchos colores. Marisol baila con un vestido largo.', en: 'It is a big party. There is music, flowers and lots of colours. Marisol dances in a long dress.' },
          opener: { es: '¡Hola! Soy Marisol. ¡Es la Guelaguetza! ¿Bailas conmigo?', en: 'Hi! I am Marisol. It is the Guelaguetza! Will you dance with me?' },
          decide: {
            ask: { es: 'Marisol quiere bailar contigo. ¿Qué haces?', en: 'Marisol wants to dance with you. What do you do?' },
            options: [
              { say: { es: '¡Sí, bailo!', en: 'Yes, I’ll dance!' }, then: { es: 'Bailas un poco mal, pero Marisol ríe: «¡Muy bien!»', en: 'You dance a bit badly, but Marisol laughs: “Very good!”' } },
              { say: { es: 'No, gracias. Miro.', en: 'No, thanks. I’ll watch.' }, then: { es: 'Marisol dice: «Está bien. Mira y aplaude».', en: 'Marisol says: “That’s fine. Watch and clap.”' } },
              { say: { es: 'Saco una foto.', en: 'I take a photo.' }, then: { es: 'Marisol sonríe para la foto. ¡Es muy bonita!', en: 'Marisol smiles for the photo. It is very nice!' } },
            ],
          },
          twist: { es: 'Las bailarinas tiran frutas al público. ¡Una piña viene a ti! ¿Qué haces?', en: 'The dancers throw fruit to the audience. A pineapple is coming at you! What do you do?' },
          questions: [
            { q: { es: '¿Te gustan las fiestas?', en: 'Do you like parties?' }, help: { es: 'Sí, me encantan. / No mucho.', en: 'Yes, I love them. / Not much.' }, follow: [{ es: '¿Qué fiesta te gusta?', en: 'What party do you like?' }, { es: '¿Bailas en las fiestas?', en: 'Do you dance at parties?' }] },
            { q: { es: '¿Te gustan las flores?', en: 'Do you like flowers?' }, help: { es: 'Sí, me gustan. / No mucho.', en: 'Yes, I like them. / Not much.' }, follow: [{ es: '¿Qué flor te gusta?', en: 'What flower do you like?' }, { es: '¿Tienes flores en casa?', en: 'Do you have flowers at home?' }] },
            { q: { es: '¿Usas ropa de colores?', en: 'Do you wear colourful clothes?' }, help: { es: 'Sí, mucho. / No, uso negro.', en: 'Yes, a lot. / No, I wear black.' }, follow: [{ es: '¿Qué ropa llevas hoy?', en: 'What are you wearing today?' }, { es: '¿De qué color?', en: 'What colour?' }] },
            { q: { es: '¿Bailas bien?', en: 'Do you dance well?' }, help: { es: 'Sí, bailo bien. / No, bailo mal.', en: 'Yes, I dance well. / No, I dance badly.' }, follow: [{ es: '¿Qué música bailas?', en: 'What music do you dance to?' }, { es: '¿Quién baila bien en tu familia?', en: 'Who dances well in your family?' }] },
          ],
          words: [{ es: 'la fiesta', en: 'the party, festival' }, { es: 'bailar', en: 'to dance' }, { es: 'el vestido', en: 'the dress' }, { es: 'aplaudir', en: 'to clap' }, { es: 'tirar', en: 'to throw' }],
        },
        A1: {
          scene: { es: 'Es julio y en Oaxaca se celebra la Guelaguetza. Grupos de las ocho regiones del estado bailan en un gran auditorio en el cerro. Marisol baila la «Danza de la Piña» con su grupo.', en: 'It is July and Oaxaca celebrates the Guelaguetza. Groups from the eight regions of the state dance in a big auditorium on the hill. Marisol dances the “Pineapple Dance” with her group.' },
          opener: { es: '«Guelaguetza» significa «compartir» en zapoteco. Al final del baile regalamos fruta, pan y otras cosas al público. ¿Tú qué compartes con la gente?', en: '“Guelaguetza” means “sharing” in Zapotec. At the end of the dance we give fruit, bread and other things to the audience. What do you share with people?' },
          decide: {
            ask: { es: 'Faltan diez minutos para el baile. Marisol está nerviosa. ¿Qué haces?', en: 'There are ten minutes left before the dance. Marisol is nervous. What do you do?' },
            options: [
              { say: { es: 'Le digo que respire despacio conmigo.', en: 'I tell her to breathe slowly with me.' }, then: { es: 'Respiran juntas tres veces. Marisol sonríe: «Ya está. Gracias».', en: 'You breathe together three times. Marisol smiles: “That’s it. Thanks.”' } },
              { say: { es: 'Le cuento un chiste.', en: 'I tell her a joke.' }, then: { es: 'El chiste es malo, pero Marisol ríe tanto que se le olvidan los nervios.', en: 'The joke is bad, but Marisol laughs so much she forgets her nerves.' } },
              { say: { es: 'Le ayudo con el vestido y las flores.', en: 'I help her with the dress and the flowers.' }, then: { es: 'Una flor se cae. La pones otra vez con cuidado. Está perfecta.', en: 'A flower falls. You put it back carefully. She looks perfect.' } },
            ],
          },
          twist: { es: 'En pleno baile empieza a llover. El público abre los paraguas, pero las bailarinas siguen bailando.', en: 'In the middle of the dance it starts to rain. The audience opens umbrellas, but the dancers keep dancing.' },
          questions: [
            { q: { es: '¿Cuál es la fiesta más importante de tu ciudad?', en: 'What is the most important festival in your city?' }, help: { es: 'La fiesta más importante es… en…', en: 'The most important festival is… in…' }, follow: [{ es: '¿Qué hace la gente?', en: 'What do people do?' }, { es: '¿Vas todos los años?', en: 'Do you go every year?' }] },
            { q: { es: '¿Te pones nervioso antes de hablar en público?', en: 'Do you get nervous before speaking in public?' }, help: { es: 'Sí, mucho. / Un poco. / No, nunca.', en: 'Yes, a lot. / A little. / No, never.' }, follow: [{ es: '¿Qué haces para calmarte?', en: 'What do you do to calm down?' }, { es: '¿Cuándo fue la última vez?', en: 'When was the last time?' }] },
            { q: { es: '¿Qué compartes con tus amigos?', en: 'What do you share with your friends?' }, help: { es: 'Comparto… / Les presto…', en: 'I share… / I lend them…' }, follow: [{ es: '¿Hay algo que no compartes?', en: 'Is there something you don’t share?' }, { es: '¿Qué compartías de niño?', en: 'What did you share as a child?' }] },
            { q: { es: '¿Qué haces cuando llueve en un plan al aire libre?', en: 'What do you do when it rains during an outdoor plan?' }, help: { es: 'Sigo igual. / Me voy a casa. / Busco un techo.', en: 'I carry on. / I go home. / I look for shelter.' }, follow: [{ es: '¿Te pasó alguna vez?', en: 'Has it happened to you?' }, { es: '¿Llevas paraguas siempre?', en: 'Do you always carry an umbrella?' }] },
          ],
          words: [{ es: 'celebrar', en: 'to celebrate' }, { es: 'compartir', en: 'to share' }, { es: 'regalar', en: 'to give (as a gift)' }, { es: 'los nervios', en: 'nerves' }, { es: 'el chiste', en: 'the joke' }],
        },
        A2: {
          scene: { es: 'Marisol baila en la Guelaguetza desde los quince años. Este año es su último: se va a estudiar medicina a la Ciudad de México. Su abuela, que también bailaba, le hizo el vestido a mano durante seis meses.', en: 'Marisol has danced in the Guelaguetza since she was fifteen. This year is her last: she is going to study medicine in Mexico City. Her grandmother, who also danced, made her dress by hand over six months.' },
          opener: { es: 'Estoy feliz por la universidad, pero también tengo miedo. Cuando volvía de la escuela, siempre había alguien ensayando en la calle. En la capital nadie me va a conocer. ¿Tú alguna vez te fuiste lejos de casa?', en: 'I’m happy about university, but I’m also scared. When I came home from school, there was always someone rehearsing in the street. In the capital nobody will know me. Have you ever gone far from home?' },
          decide: {
            ask: { es: 'Marisol quiere llevar algo de Oaxaca a su nueva vida. ¿Qué le sugieres?', en: 'Marisol wants to take something of Oaxaca to her new life. What do you suggest?' },
            options: [
              { say: { es: 'Buscar un grupo de danza oaxaqueña en la capital.', en: 'Find an Oaxacan dance group in the capital.' }, then: { es: 'Encuentra uno en internet. Ensayan los domingos y hay tres chicas de su pueblo.', en: 'She finds one online. They rehearse on Sundays and there are three girls from her town.' } },
              { say: { es: 'Llevar el vestido de su abuela.', en: 'Take her grandmother’s dress.' }, then: { es: 'La abuela llora y dice que ella lo hizo justo para eso: para viajar.', en: 'Her grandmother cries and says she made it precisely for that: to travel.' } },
              { say: { es: 'Aprender a cocinar el mole de su familia antes de irse.', en: 'Learn to cook her family’s mole before leaving.' }, then: { es: 'Pasa tres días en la cocina con su mamá. Al final, su mole está casi igual.', en: 'She spends three days in the kitchen with her mum. In the end, her mole is almost the same.' } },
            ],
          },
          twist: { es: 'Al terminar el baile, el público grita su nombre. Alguien le dio la noticia al presentador.', en: 'When the dance ends, the audience shouts her name. Someone told the presenter the news.' },
          questions: [
            { q: { es: '¿Qué hacías los fines de semana cuando tenías quince años?', en: 'What did you do at weekends when you were fifteen?' }, help: { es: 'Los sábados yo… / Siempre…', en: 'On Saturdays I used to… / I always…' }, follow: [{ es: '¿Con quién?', en: 'Who with?' }, { es: '¿Lo extrañas?', en: 'Do you miss it?' }] },
            { q: { es: '¿Te fuiste alguna vez de casa para estudiar o trabajar?', en: 'Have you ever left home to study or work?' }, help: { es: 'Sí, me fui a… cuando… / No, todavía no.', en: 'Yes, I went to… when… / No, not yet.' }, follow: [{ es: '¿Qué fue lo más difícil?', en: 'What was the hardest thing?' }, { es: '¿Qué llevaste contigo?', en: 'What did you take with you?' }] },
            { q: { es: '¿Tienes algo hecho a mano por un familiar?', en: 'Do you have something handmade by a relative?' }, help: { es: 'Sí, tengo un… que hizo mi…', en: 'Yes, I have a… that my… made.' }, follow: [{ es: '¿Dónde lo guardas?', en: 'Where do you keep it?' }, { es: '¿Lo usas?', en: 'Do you use it?' }] },
            { q: { es: '¿Qué tradición de tu familia quieres continuar?', en: 'What family tradition do you want to continue?' }, help: { es: 'Quiero seguir con… porque…', en: 'I want to carry on with… because…' }, follow: [{ es: '¿Quién la empezó?', en: 'Who started it?' }, { es: '¿Qué tradición no quieres continuar?', en: 'What tradition don’t you want to continue?' }] },
          ],
          words: [{ es: 'ensayar', en: 'to rehearse' }, { es: 'tener miedo', en: 'to be scared' }, { es: 'la capital', en: 'the capital' }, { es: 'justo para eso', en: 'precisely for that' }, { es: 'el presentador', en: 'the presenter' }],
        },
        B1: {
          scene: { es: 'Cada año la Guelaguetza atrae a más turistas y el gobierno cobra entradas cada vez más caras para el auditorio. Algunas comunidades dicen que su fiesta se convirtió en un espectáculo para extranjeros y organizan una «Guelaguetza popular», gratis, en las calles.', en: 'Every year the Guelaguetza attracts more tourists and the government charges ever higher prices for the auditorium. Some communities say their festival has become a show for foreigners and organise a free “people’s Guelaguetza” in the streets.' },
          opener: { es: 'Mi abuela bailaba para su pueblo, no para un público que paga. Pero gracias a las entradas, a mí me pagaron el viaje y el vestido. No sé si debería bailar en el auditorio o en la calle. ¿Tú qué harías?', en: 'My grandmother danced for her town, not for a paying audience. But thanks to the tickets, they paid for my trip and my dress. I don’t know whether I should dance in the auditorium or in the street. What would you do?' },
          decide: {
            ask: { es: 'Marisol tiene que elegir este año. ¿Qué le aconsejas?', en: 'Marisol has to choose this year. What do you advise?' },
            options: [
              { say: { es: 'Bailar en los dos sitios.', en: 'Dance in both places.' }, then: { es: 'Los organizadores del auditorio no se lo prohíben, pero tampoco les gusta.', en: 'The auditorium organisers don’t forbid it, but they don’t like it either.' } },
              { say: { es: 'Bailar en la calle, con su comunidad.', en: 'Dance in the street, with her community.' }, then: { es: 'La fiesta es más pequeña, pero su abuela baila con ella por primera vez en veinte años.', en: 'The party is smaller, but her grandmother dances with her for the first time in twenty years.' } },
              { say: { es: 'Bailar en el auditorio y usar su voz para pedir cambios.', en: 'Dance in the auditorium and use her voice to ask for changes.' }, then: { es: 'En una entrevista en televisión, Marisol pide entradas gratis para la gente de Oaxaca. Se hace viral.', en: 'In a TV interview, Marisol asks for free tickets for Oaxacan people. It goes viral.' } },
            ],
          },
          twist: { es: 'Una agencia de viajes ofrece a su grupo una gira por Europa. Les pagarían bien, pero tendrían que acortar los bailes a cinco minutos «para no aburrir».', en: 'A travel agency offers her group a tour of Europe. They would be paid well, but would have to shorten the dances to five minutes “so as not to bore people”.' },
          questions: [
            { q: { es: '¿Cuándo una tradición deja de ser auténtica?', en: 'When does a tradition stop being authentic?' }, help: { es: 'Creo que deja de serlo cuando… / No creo que…', en: 'I think it stops being so when… / I don’t think…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Lo auténtico puede cambiar?', en: 'Can the authentic change?' }] },
            { q: { es: '¿Está bien cobrar entrada a una fiesta tradicional?', en: 'Is it right to charge admission to a traditional festival?' }, help: { es: 'Me parece bien si… / No me parece bien porque…', en: 'I think it’s fine if… / I don’t think it’s right because…' }, follow: [{ es: '¿Quién debería recibir el dinero?', en: 'Who should receive the money?' }, { es: '¿Y los turistas, deberían pagar más?', en: 'And should tourists pay more?' }] },
            { q: { es: '¿Aceptarías la gira si fueras Marisol?', en: 'Would you accept the tour if you were Marisol?' }, help: { es: 'La aceptaría, pero pondría como condición… / No la aceptaría porque…', en: 'I would accept it, but I’d set the condition… / I wouldn’t because…' }, follow: [{ es: '¿Cinco minutos son suficientes?', en: 'Are five minutes enough?' }, { es: '¿Qué se pierde al acortar?', en: 'What is lost by shortening?' }] },
            { q: { es: '¿Qué fiesta de tu país cambió por el turismo?', en: 'What festival in your country has changed because of tourism?' }, help: { es: 'Antes era… y ahora se ha convertido en…', en: 'It used to be… and now it has become…' }, follow: [{ es: '¿La gente local sigue yendo?', en: 'Do locals still go?' }, { es: '¿Qué harías para recuperarla?', en: 'What would you do to recover it?' }] },
          ],
          words: [{ es: 'cobrar', en: 'to charge' }, { es: 'el espectáculo', en: 'the show' }, { es: 'prohibir', en: 'to forbid' }, { es: 'la gira', en: 'the tour' }, { es: 'acortar', en: 'to shorten' }],
        },
      },
    },
  ],
};
