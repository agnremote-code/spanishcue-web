// Bariloche · chocolate shops, the Nahuel Huapi lake, Cerro Catedral, a craft
// brewery and the Centro Cívico. Five places, four levels each (A0, A1, A2, B1).
// Every level is written on its own: same place and people, different situations.
export default {
  id: 'bariloche',
  spots: [
    // ------------------------------------------------------------ the chocolate shop
    {
      id: 'chocolateria',
      name: { es: 'La chocolatería', en: 'The chocolate shop' },
      who: { name: 'Greta', role: { es: 'chocolatera', en: 'chocolate maker' } },
      levels: {
        A0: {
          scene: { es: 'Es una tienda de chocolate. Huele muy bien. Hay chocolate blanco, negro y con leche. Greta trabaja aquí.', en: 'It is a chocolate shop. It smells very good. There is white, dark and milk chocolate. Greta works here.' },
          opener: { es: 'Hola, soy Greta. ¿Te gusta el chocolate?', en: 'Hi, I am Greta. Do you like chocolate?' },
          decide: {
            ask: { es: 'Greta te da a probar tres chocolates. ¿Cuál quieres?', en: 'Greta lets you taste three chocolates. Which one do you want?' },
            options: [
              { say: { es: 'El chocolate blanco, por favor.', en: 'The white chocolate, please.' }, then: { es: 'Greta dice: «Es muy dulce. ¡A los niños les encanta!»', en: 'Greta says: “It is very sweet. Children love it!”' } },
              { say: { es: 'El chocolate negro.', en: 'The dark chocolate.' }, then: { es: 'Greta dice: «Es mi favorito. Es un poco amargo».', en: 'Greta says: “It is my favourite. It is a little bitter.”' } },
              { say: { es: 'El chocolate con leche.', en: 'The milk chocolate.' }, then: { es: 'Greta dice: «Es el más popular. ¿Cuántos quieres?»', en: 'Greta says: “It is the most popular. How many do you want?”' } },
            ],
          },
          twist: { es: 'Greta pregunta: «¿Es un regalo?». Pone el chocolate en una caja roja. ¿Para quién es?', en: 'Greta asks: “Is it a present?” She puts the chocolate in a red box. Who is it for?' },
          questions: [
            { q: { es: '¿Te gusta el chocolate?', en: 'Do you like chocolate?' }, help: { es: 'Sí, me gusta mucho. / No mucho.', en: 'Yes, I like it a lot. / Not much.' }, follow: [{ es: '¿Blanco, negro o con leche?', en: 'White, dark or milk?' }, { es: '¿Cuándo comes chocolate?', en: 'When do you eat chocolate?' }] },
            { q: { es: '¿Te gustan las cosas dulces?', en: 'Do you like sweet things?' }, help: { es: 'Sí, me gustan. / Prefiero las cosas saladas.', en: 'Yes, I like them. / I prefer salty things.' }, follow: [{ es: '¿Cuál es tu postre favorito?', en: 'What is your favourite dessert?' }, { es: '¿Cocinas postres?', en: 'Do you make desserts?' }] },
            { q: { es: '¿Para quién compras regalos?', en: 'Who do you buy presents for?' }, help: { es: 'Para mi madre / mi pareja / mis amigos.', en: 'For my mother / my partner / my friends.' }, follow: [{ es: '¿Qué le regalas?', en: 'What do you give them?' }, { es: '¿Te gusta recibir regalos?', en: 'Do you like getting presents?' }] },
            { q: { es: '¿Hace frío en tu ciudad?', en: 'Is it cold in your city?' }, help: { es: 'Sí, hace mucho frío. / No, hace calor.', en: 'Yes, it is very cold. / No, it is hot.' }, follow: [{ es: '¿Qué tomas cuando hace frío?', en: 'What do you drink when it is cold?' }, { es: '¿Te gusta el frío?', en: 'Do you like the cold?' }] },
          ],
          words: [{ es: 'el chocolate', en: 'chocolate' }, { es: 'dulce', en: 'sweet' }, { es: 'amargo', en: 'bitter' }, { es: 'el regalo', en: 'the present' }, { es: 'la caja', en: 'the box' }],
        },
        A1: {
          scene: { es: 'La calle Mitre, en el centro de Bariloche, tiene muchas chocolaterías. Greta es hija de una familia que llegó de Suiza hace muchos años. En la vitrina hay chocolate en rama, bombones y alfajores.', en: 'Mitre Street, in the centre of Bariloche, has many chocolate shops. Greta comes from a family that arrived from Switzerland many years ago. In the window there is “chocolate en rama”, bonbons and alfajores.' },
          opener: { es: 'Mi abuelo empezó con una cocina pequeña en su casa. Ahora la tienda tiene tres pisos. Arriba hacemos el chocolate y abajo lo vendemos. ¿Quieres ver cómo lo hacemos?', en: 'My grandfather started with a small kitchen at home. Now the shop has three floors. Upstairs we make the chocolate and downstairs we sell it. Do you want to see how we make it?' },
          decide: {
            ask: { es: 'Tienes dinero para una sola cosa. ¿Qué compras?', en: 'You have money for one thing only. What do you buy?' },
            options: [
              { say: { es: 'Una caja grande de chocolate en rama.', en: 'A big box of “chocolate en rama”.' }, then: { es: 'Greta te explica que se rompe fácil y te da una bolsa especial para el viaje.', en: 'Greta explains it breaks easily and gives you a special bag for the trip.' } },
              { say: { es: 'Seis alfajores para compartir.', en: 'Six alfajores to share.' }, then: { es: 'Greta pone uno más de regalo. «Siempre uno más para el camino».', en: 'Greta adds one more as a gift. “Always one more for the road.”' } },
              { say: { es: 'Una clase de una hora en la cocina.', en: 'A one-hour class in the kitchen.' }, then: { es: 'Te pones un delantal y haces tus propios bombones. No son perfectos, pero son tuyos.', en: 'You put on an apron and make your own bonbons. They are not perfect, but they are yours.' } },
            ],
          },
          twist: { es: 'Se corta la luz en toda la calle. El chocolate de la cocina empieza a ponerse duro. Greta te pide ayuda. ¿Qué haces?', en: 'The power goes out in the whole street. The chocolate in the kitchen starts to harden. Greta asks for your help. What do you do?' },
          questions: [
            { q: { es: '¿Qué comida típica hay en tu ciudad?', en: 'What typical food is there in your city?' }, help: { es: 'En mi ciudad hay… / Es famosa por…', en: 'In my city there is… / It is famous for…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Dónde la compras?', en: 'Where do you buy it?' }] },
            { q: { es: '¿Tu familia viene de otro país?', en: 'Does your family come from another country?' }, help: { es: 'Sí, mis abuelos vienen de… / No, todos son de aquí.', en: 'Yes, my grandparents come from… / No, they are all from here.' }, follow: [{ es: '¿Qué costumbres tienen?', en: 'What customs do they have?' }, { es: '¿Hablas otro idioma en casa?', en: 'Do you speak another language at home?' }] },
            { q: { es: '¿Sabes cocinar algo dulce?', en: 'Can you cook something sweet?' }, help: { es: 'Sí, sé hacer… / No, solo sé comer.', en: 'Yes, I can make… / No, I can only eat.' }, follow: [{ es: '¿Quién te enseñó?', en: 'Who taught you?' }, { es: '¿Para quién cocinas?', en: 'Who do you cook for?' }] },
            { q: { es: '¿Qué compras como recuerdo de un viaje?', en: 'What do you buy as a souvenir of a trip?' }, help: { es: 'Siempre compro… / No compro nada.', en: 'I always buy… / I don’t buy anything.' }, follow: [{ es: '¿Cuál es tu recuerdo favorito?', en: 'What is your favourite souvenir?' }, { es: '¿Dónde lo tienes?', en: 'Where do you keep it?' }] },
          ],
          words: [{ es: 'la vitrina', en: 'the shop window' }, { es: 'el bombón', en: 'the bonbon' }, { es: 'el delantal', en: 'the apron' }, { es: 'el recuerdo', en: 'the souvenir' }, { es: 'compartir', en: 'to share' }],
        },
        A2: {
          scene: { es: 'Es temporada alta y la chocolatería está llena de turistas y de grupos de estudiantes en su viaje de egresados. Greta trabaja desde las siete de la mañana. Un chico de un grupo rompe una figura de chocolate de dos kilos.', en: 'It is high season and the chocolate shop is full of tourists and school groups on their graduation trip. Greta has been working since seven in the morning. A boy from one of the groups breaks a two-kilo chocolate figure.' },
          opener: { es: 'Todos los años es igual: llegan miles de chicos de quince, dieciséis años, felices y sin dormir. Los quiero, de verdad, pero esa figura era un San Bernardo que tardé tres días en hacer. ¿Tú hiciste un viaje así con tu escuela?', en: 'Every year it is the same: thousands of fifteen- and sixteen-year-olds arrive, happy and without sleep. I love them, really, but that figure was a Saint Bernard that took me three days to make. Did you go on a trip like that with your school?' },
          decide: {
            ask: { es: 'El chico está muy nervioso y no tiene dinero. El coordinador del grupo no aparece. ¿Qué le aconsejas a Greta?', en: 'The boy is very nervous and has no money. The group coordinator is nowhere to be found. What do you advise Greta?' },
            options: [
              { say: { es: 'Que llame a la empresa del viaje para que pague.', en: 'Call the travel company so they pay.' }, then: { es: 'La empresa paga, pero tarda dos meses. Greta suspira y guarda la factura.', en: 'The company pays, but it takes two months. Greta sighs and keeps the invoice.' } },
              { say: { es: 'Que el chico ayude en la tienda una tarde.', en: 'Have the boy help in the shop for an afternoon.' }, then: { es: 'El chico trabaja cuatro horas, aprende a hacer bombones y al final quiere volver el año próximo.', en: 'The boy works four hours, learns to make bonbons and in the end wants to come back next year.' } },
              { say: { es: 'Que use los pedazos para vender chocolate roto más barato.', en: 'Use the pieces to sell broken chocolate cheaper.' }, then: { es: 'Los turistas compran todos los pedazos en media hora. Greta gana más que con la figura entera.', en: 'The tourists buy all the pieces in half an hour. Greta earns more than with the whole figure.' } },
            ],
          },
          twist: { es: 'Esa noche, el grupo entero vuelve a la tienda con un cartel: «Perdón, Greta». Cada uno compra algo.', en: 'That night, the whole group comes back to the shop with a sign: “Sorry, Greta.” Each of them buys something.' },
          questions: [
            { q: { es: '¿Hiciste un viaje con tu escuela?', en: 'Did you go on a school trip?' }, help: { es: 'Sí, fuimos a… / No, nunca hicimos un viaje.', en: 'Yes, we went to… / No, we never went on a trip.' }, follow: [{ es: '¿Qué recuerdas de ese viaje?', en: 'What do you remember from that trip?' }, { es: '¿Hiciste algo prohibido?', en: 'Did you do anything forbidden?' }] },
            { q: { es: '¿Rompiste algo caro alguna vez?', en: 'Have you ever broken something expensive?' }, help: { es: 'Sí, una vez rompí… / No, tengo mucho cuidado.', en: 'Yes, once I broke… / No, I am very careful.' }, follow: [{ es: '¿Qué pasó después?', en: 'What happened afterwards?' }, { es: '¿Tuviste que pagar?', en: 'Did you have to pay?' }] },
            { q: { es: '¿Qué lugar de tu país se llena de turistas?', en: 'What place in your country fills up with tourists?' }, help: { es: 'En verano / invierno, … se llena de…', en: 'In summer / winter, … fills up with…' }, follow: [{ es: '¿Es bueno para la gente de allí?', en: 'Is it good for the people there?' }, { es: '¿Vas en temporada alta?', en: 'Do you go in high season?' }] },
            { q: { es: '¿Trabajaste alguna vez con público?', en: 'Have you ever worked with the public?' }, help: { es: 'Sí, trabajé en… / No, nunca.', en: 'Yes, I worked in… / No, never.' }, follow: [{ es: '¿Cuál fue el cliente más difícil?', en: 'Who was the most difficult customer?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
          ],
          words: [{ es: 'la temporada alta', en: 'high season' }, { es: 'el viaje de egresados', en: 'graduation trip' }, { es: 'romper', en: 'to break' }, { es: 'la factura', en: 'the invoice' }, { es: 'el pedazo', en: 'the piece' }],
        },
        B1: {
          scene: { es: 'Una cadena internacional quiere comprar la chocolatería de la familia de Greta. Ofrece mucho dinero y promete mantener el nombre, pero quiere cambiar la receta por una más barata y llevar la producción a una fábrica en Buenos Aires.', en: 'An international chain wants to buy Greta’s family chocolate shop. It offers a lot of money and promises to keep the name, but wants to change the recipe for a cheaper one and move production to a factory in Buenos Aires.' },
          opener: { es: 'Mi hermano quiere vender. Dice que estamos cansados, que el negocio es cada vez más difícil y que con ese dinero podríamos vivir tranquilos. Tiene razón en todo. Pero si cambian la receta, ya no es nuestro chocolate, es solo nuestro apellido en una caja. ¿Tú qué harías?', en: 'My brother wants to sell. He says we are tired, that the business gets harder every year and that with that money we could live in peace. He is right about everything. But if they change the recipe, it is no longer our chocolate, it is just our surname on a box. What would you do?' },
          decide: {
            ask: { es: 'Greta tiene que dar una respuesta el lunes. ¿Qué le recomiendas?', en: 'Greta has to give an answer on Monday. What do you recommend?' },
            options: [
              { say: { es: 'Vender, pero con la condición de mantener la receta.', en: 'Sell, but on condition that they keep the recipe.' }, then: { es: 'La cadena acepta en el contrato, pero solo por cinco años. Después, nadie sabe.', en: 'The chain accepts it in the contract, but only for five years. After that, nobody knows.' } },
              { say: { es: 'No vender y buscar un socio local más pequeño.', en: 'Don’t sell and look for a smaller local partner.' }, then: { es: 'Un hotel de la zona se asocia con ellos. Ganan menos, pero la cocina sigue arriba de la tienda.', en: 'A local hotel partners with them. They earn less, but the kitchen stays above the shop.' } },
              { say: { es: 'Vender todo y abrir algo nuevo y pequeño con su propio nombre.', en: 'Sell everything and open something new and small under her own name.' }, then: { es: 'Greta abre un taller de diez metros. La fila de clientes llega hasta la esquina.', en: 'Greta opens a ten-metre workshop. The queue of customers reaches the corner.' } },
            ],
          },
          twist: { es: 'En una caja vieja, Greta encuentra el cuaderno de recetas de su abuelo. La receta original no es la que usan hoy: ya la cambiaron hace treinta años, sin que nadie lo notara.', en: 'In an old box, Greta finds her grandfather’s recipe notebook. The original recipe is not the one they use today: it was already changed thirty years ago, without anyone noticing.' },
          questions: [
            { q: { es: '¿Venderías un negocio familiar por mucho dinero?', en: 'Would you sell a family business for a lot of money?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Qué condición pondrías?', en: 'What condition would you set?' }, { es: '¿Qué opinaría tu familia?', en: 'What would your family think?' }] },
            { q: { es: '¿Qué producto de tu país perdió calidad con los años?', en: 'What product from your country has lost quality over the years?' }, help: { es: 'Antes… era mejor, ahora…', en: 'Before, … was better, now…' }, follow: [{ es: '¿Por qué crees que pasó?', en: 'Why do you think it happened?' }, { es: '¿Lo sigues comprando?', en: 'Do you still buy it?' }] },
            { q: { es: '¿Es importante que una tradición no cambie nunca?', en: 'Is it important that a tradition never changes?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Qué tradición cambiarías?', en: 'What tradition would you change?' }] },
            { q: { es: '¿Prefieres las tiendas pequeñas o las grandes cadenas?', en: 'Do you prefer small shops or big chains?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Dónde compraste algo la última vez?', en: 'Where did you last buy something?' }, { es: '¿Pagarías más por lo local?', en: 'Would you pay more for local products?' }] },
          ],
          words: [{ es: 'la cadena', en: 'the chain (of shops)' }, { es: 'el socio', en: 'the business partner' }, { es: 'la receta', en: 'the recipe' }, { es: 'el apellido', en: 'the surname' }, { es: 'notar', en: 'to notice' }],
        },
      },
    },
    // ------------------------------------------------------------ the lake and the harbour
    {
      id: 'lago',
      name: { es: 'El puerto del lago', en: 'The lake harbour' },
      who: { name: 'Don Aníbal', role: { es: 'capitán de barco', en: 'boat captain' } },
      levels: {
        A0: {
          scene: { es: 'Es un lago grande y azul. Hay montañas con nieve. Hay un barco blanco. Don Aníbal es el capitán.', en: 'It is a big blue lake. There are mountains with snow. There is a white boat. Don Aníbal is the captain.' },
          opener: { es: 'Buenos días. Soy Aníbal. ¿Vienes al barco?', en: 'Good morning. I am Aníbal. Are you coming on the boat?' },
          decide: {
            ask: { es: 'El barco va a una isla. ¿Dónde te sientas?', en: 'The boat goes to an island. Where do you sit?' },
            options: [
              { say: { es: 'Afuera, para ver el lago.', en: 'Outside, to see the lake.' }, then: { es: 'Aníbal dice: «Hace frío. ¡Ponte una campera!»', en: 'Aníbal says: “It is cold. Put on a jacket!”' } },
              { say: { es: 'Adentro, cerca de la ventana.', en: 'Inside, near the window.' }, then: { es: 'Aníbal dice: «Buena idea. Hay café caliente».', en: 'Aníbal says: “Good idea. There is hot coffee.”' } },
              { say: { es: 'Con el capitán, por favor.', en: 'With the captain, please.' }, then: { es: 'Aníbal dice: «¡Claro! Ven. Aquí está el timón».', en: 'Aníbal says: “Sure! Come. Here is the wheel.”' } },
            ],
          },
          twist: { es: 'Hay pájaros alrededor del barco. Aníbal te da pan. «¡Dales de comer!» ¿Qué haces?', en: 'There are birds around the boat. Aníbal gives you bread. “Feed them!” What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }, help: { es: 'Sí, me gustan. / No, me mareo.', en: 'Yes, I like them. / No, I get seasick.' }, follow: [{ es: '¿Hay barcos en tu ciudad?', en: 'Are there boats in your city?' }, { es: '¿Sabes nadar?', en: 'Can you swim?' }] },
            { q: { es: '¿Hay un lago cerca de tu casa?', en: 'Is there a lake near your home?' }, help: { es: 'Sí, hay un lago. / No, hay un río / el mar.', en: 'Yes, there is a lake. / No, there is a river / the sea.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is it called?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
            { q: { es: '¿De qué color son las montañas en invierno?', en: 'What colour are the mountains in winter?' }, help: { es: 'Son blancas. / Son verdes.', en: 'They are white. / They are green.' }, follow: [{ es: '¿Te gusta la nieve?', en: 'Do you like snow?' }, { es: '¿Hay nieve en tu país?', en: 'Is there snow in your country?' }] },
            { q: { es: '¿Te gustan los pájaros?', en: 'Do you like birds?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Tienes animales?', en: 'Do you have pets?' }, { es: '¿Cuál es tu animal favorito?', en: 'What is your favourite animal?' }] },
          ],
          words: [{ es: 'el lago', en: 'the lake' }, { es: 'el barco', en: 'the boat' }, { es: 'la isla', en: 'the island' }, { es: 'la nieve', en: 'snow' }, { es: 'la campera', en: 'the jacket (Argentina)' }],
        },
        A1: {
          scene: { es: 'El lago Nahuel Huapi es enorme y el agua es muy fría, incluso en verano. Desde el puerto salen barcos a la isla Victoria y al bosque de arrayanes, unos árboles con el tronco color canela. Don Aníbal maneja barcos aquí desde hace cuarenta años.', en: 'Lake Nahuel Huapi is huge and the water is very cold, even in summer. From the harbour, boats leave for Victoria Island and the arrayán forest, trees with cinnamon-coloured trunks. Don Aníbal has been driving boats here for forty years.' },
          opener: { es: 'Este lago cambia de humor como una persona. A la mañana está tranquilo, a la tarde hay viento y olas. Hoy el día está perfecto. ¿Es tu primera vez en la Patagonia?', en: 'This lake changes its mood like a person. In the morning it is calm, in the afternoon there is wind and waves. Today the day is perfect. Is it your first time in Patagonia?' },
          decide: {
            ask: { es: 'Hay tres excursiones hoy. ¿Cuál eliges?', en: 'There are three excursions today. Which do you choose?' },
            options: [
              { say: { es: 'El bosque de arrayanes.', en: 'The arrayán forest.' }, then: { es: 'Caminas por un sendero de madera entre árboles de color naranja. Parece un cuento.', en: 'You walk along a wooden path among orange trees. It looks like a fairy tale.' } },
              { say: { es: 'La isla Victoria, con una caminata larga.', en: 'Victoria Island, with a long walk.' }, then: { es: 'Caminas tres horas. Ves pinturas antiguas en las piedras y una playa de arena blanca.', en: 'You walk for three hours. You see ancient paintings on the rocks and a white-sand beach.' } },
              { say: { es: 'Una vuelta corta por el lago y volver.', en: 'A short trip round the lake and back.' }, then: { es: 'Aníbal te cuenta historias del lago y te muestra dónde vive un ave muy rara.', en: 'Aníbal tells you stories about the lake and shows you where a very rare bird lives.' } },
            ],
          },
          twist: { es: 'De repente, empieza el viento y el barco se mueve mucho. Una señora se asusta. ¿Qué haces?', en: 'Suddenly the wind starts and the boat rocks a lot. A woman gets scared. What do you do?' },
          questions: [
            { q: { es: '¿Prefieres la montaña o la playa?', en: 'Do you prefer the mountains or the beach?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Adónde vas de vacaciones?', en: 'Where do you go on holiday?' }, { es: '¿Qué haces allí?', en: 'What do you do there?' }] },
            { q: { es: '¿Te bañas en agua fría?', en: 'Do you swim in cold water?' }, help: { es: 'Sí, me encanta. / ¡No, nunca!', en: 'Yes, I love it. / No, never!' }, follow: [{ es: '¿Dónde te bañas?', en: 'Where do you swim?' }, { es: '¿Cuánto tiempo puedes estar?', en: 'How long can you stay in?' }] },
            { q: { es: '¿Qué te gusta hacer cuando hay sol?', en: 'What do you like doing when it is sunny?' }, help: { es: 'Cuando hay sol, me gusta…', en: 'When it is sunny, I like…' }, follow: [{ es: '¿Y cuando llueve?', en: 'And when it rains?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Te da miedo algo en los viajes?', en: 'Does anything scare you when travelling?' }, help: { es: 'Me dan miedo los aviones / los barcos… / Nada.', en: 'Planes / boats… scare me. / Nothing.' }, follow: [{ es: '¿Qué haces para estar tranquilo?', en: 'What do you do to stay calm?' }, { es: '¿Siempre fue así?', en: 'Has it always been like that?' }] },
          ],
          words: [{ es: 'el puerto', en: 'the harbour' }, { es: 'la ola', en: 'the wave' }, { es: 'el viento', en: 'the wind' }, { es: 'el sendero', en: 'the path' }, { es: 'el bosque', en: 'the forest' }],
        },
        A2: {
          scene: { es: 'Es el último viaje del día y está anocheciendo. Don Aníbal cuenta la leyenda del Nahuelito, un animal enorme que, según algunos vecinos, vive en el fondo del lago. Muchos se ríen, pero hay fotos borrosas de los años ochenta.', en: 'It is the last trip of the day and night is falling. Don Aníbal tells the legend of Nahuelito, a huge creature that, according to some locals, lives at the bottom of the lake. Many people laugh, but there are blurry photos from the eighties.' },
          opener: { es: 'Yo no creía en el Nahuelito. Una tarde de invierno, en el año noventa y dos, vi una sombra larga al lado del barco, más grande que el barco mismo. Se lo conté a mi mujer y se rio tres días seguidos. ¿Tú crees en estas cosas?', en: 'I didn’t believe in Nahuelito. One winter afternoon, in ’92, I saw a long shadow beside the boat, bigger than the boat itself. I told my wife and she laughed for three days straight. Do you believe in these things?' },
          decide: {
            ask: { es: 'Un pasajero dice que ve algo moverse en el agua. Todos miran. ¿Qué haces?', en: 'A passenger says he sees something moving in the water. Everyone looks. What do you do?' },
            options: [
              { say: { es: 'Saco una foto rápido.', en: 'I take a photo quickly.' }, then: { es: 'La foto sale borrosa, como todas. Ahora tú también tienes tu foto del Nahuelito.', en: 'The photo comes out blurry, like all of them. Now you too have your Nahuelito photo.' } },
              { say: { es: 'Le pido a Aníbal que pare el barco.', en: 'I ask Aníbal to stop the boat.' }, then: { es: 'Aníbal apaga el motor. Silencio total. Solo se oye el agua. Nadie respira.', en: 'Aníbal turns off the engine. Total silence. Only the water can be heard. Nobody breathes.' } },
              { say: { es: 'Me río: seguro que es un tronco.', en: 'I laugh: it is surely a log.' }, then: { es: 'Aníbal sonríe: «Eso mismo dije yo en el noventa y dos».', en: 'Aníbal smiles: “That is exactly what I said in ’92.”' } },
            ],
          },
          twist: { es: 'Al llegar al puerto, un nene le pregunta a Aníbal si el Nahuelito es malo. Aníbal le contesta: «No. Es tímido, como tú».', en: 'When they reach the harbour, a little boy asks Aníbal if Nahuelito is bad. Aníbal answers: “No. He is shy, like you.”' },
          questions: [
            { q: { es: '¿Hay alguna leyenda en tu país?', en: 'Is there a legend in your country?' }, help: { es: 'Sí, se dice que… / No conozco ninguna.', en: 'Yes, they say that… / I don’t know any.' }, follow: [{ es: '¿Quién te la contó?', en: 'Who told it to you?' }, { es: '¿La gente la cree?', en: 'Do people believe it?' }] },
            { q: { es: '¿Viste algo raro alguna vez?', en: 'Have you ever seen something strange?' }, help: { es: 'Sí, una vez vi… / No, nunca.', en: 'Yes, once I saw… / No, never.' }, follow: [{ es: '¿Dónde estabas?', en: 'Where were you?' }, { es: '¿Se lo contaste a alguien?', en: 'Did you tell anyone?' }] },
            { q: { es: '¿Qué historias te contaban de niño?', en: 'What stories did people tell you as a child?' }, help: { es: 'Mi abuela / mi padre me contaba…', en: 'My grandmother / my father used to tell me…' }, follow: [{ es: '¿Te daban miedo?', en: 'Did they scare you?' }, { es: '¿Las cuentas tú ahora?', en: 'Do you tell them now?' }] },
            { q: { es: '¿Te gusta ver el atardecer?', en: 'Do you like watching the sunset?' }, help: { es: 'Sí, sobre todo en… / No le presto atención.', en: 'Yes, especially in… / I don’t pay attention to it.' }, follow: [{ es: '¿Cuál es el atardecer más lindo que viste?', en: 'What is the most beautiful sunset you have seen?' }, { es: '¿Con quién estabas?', en: 'Who were you with?' }] },
          ],
          words: [{ es: 'la leyenda', en: 'the legend' }, { es: 'la sombra', en: 'the shadow' }, { es: 'borroso', en: 'blurry' }, { es: 'anochecer', en: 'to get dark' }, { es: 'el nene', en: 'the little boy (Argentina)' }],
        },
        B1: {
          scene: { es: 'Un grupo inversor quiere construir un muelle privado y un hotel de lujo en una bahía del lago que hoy es pública. Habría trabajo para cien personas, pero los vecinos ya no podrían bañarse ni pescar allí. Don Aníbal tiene que hablar en la reunión del barrio esta noche.', en: 'An investment group wants to build a private pier and a luxury hotel on a bay of the lake that is public today. There would be work for a hundred people, but locals could no longer swim or fish there. Don Aníbal has to speak at the neighbourhood meeting tonight.' },
          opener: { es: 'Mi nieto necesita trabajo y ese hotel le daría uno. Pero en esa bahía mi padre me enseñó a nadar, y su padre a él. Si la cerramos, los chicos de hoy solo van a ver el lago desde la ruta. No sé qué decir esta noche. ¿Tú qué dirías?', en: 'My grandson needs work and that hotel would give him a job. But my father taught me to swim in that bay, and his father taught him. If we close it, today’s kids will only see the lake from the road. I don’t know what to say tonight. What would you say?' },
          decide: {
            ask: { es: 'Aníbal tiene cinco minutos para hablar. ¿Qué le sugieres?', en: 'Aníbal has five minutes to speak. What do you suggest?' },
            options: [
              { say: { es: 'Apoyar el hotel, pero exigir que la playa siga siendo pública.', en: 'Support the hotel, but demand that the beach stays public.' }, then: { es: 'El grupo inversor acepta una franja pública de veinte metros. Algunos vecinos lo llaman traidor; otros, sensato.', en: 'The investors accept a twenty-metre public strip. Some locals call him a traitor; others, sensible.' } },
              { say: { es: 'Oponerse y proponer el hotel en otro lugar.', en: 'Oppose it and propose the hotel somewhere else.' }, then: { es: 'La reunión dura cuatro horas. Al final, la municipalidad pide un estudio de otros terrenos.', en: 'The meeting lasts four hours. In the end, the town council asks for a study of other sites.' } },
              { say: { es: 'Contar su historia personal y no decir qué votar.', en: 'Tell his personal story and not say how to vote.' }, then: { es: 'La sala queda en silencio. Varios jóvenes cambian de opinión, y algunos viejos también.', en: 'The room goes quiet. Several young people change their minds, and some old ones too.' } },
            ],
          },
          twist: { es: 'Después de la reunión, el nieto de Aníbal le confiesa que ya firmó un contrato con el hotel la semana pasada.', en: 'After the meeting, Aníbal’s grandson confesses that he already signed a contract with the hotel last week.' },
          questions: [
            { q: { es: '¿Los lugares naturales deberían ser siempre públicos?', en: 'Should natural places always be public?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Hay excepciones?', en: 'Are there exceptions?' }, { es: '¿Qué pasa en tu país?', en: 'What happens in your country?' }] },
            { q: { es: '¿Qué es más importante: el trabajo o el paisaje?', en: 'What is more important: jobs or the landscape?' }, help: { es: 'Depende de… / Para mí, …', en: 'It depends on… / For me, …' }, follow: [{ es: '¿Se pueden tener los dos?', en: 'Can you have both?' }, { es: '¿Qué ejemplo conoces?', en: 'What example do you know?' }] },
            { q: { es: '¿Participaste alguna vez en una reunión de vecinos?', en: 'Have you ever taken part in a neighbourhood meeting?' }, help: { es: 'Sí, una vez discutimos… / No, nunca fui.', en: 'Yes, once we discussed… / No, I never went.' }, follow: [{ es: '¿Cómo terminó?', en: 'How did it end?' }, { es: '¿Hablaste?', en: 'Did you speak?' }] },
            { q: { es: '¿Qué lugar de tu infancia cambió mucho?', en: 'What place from your childhood has changed a lot?' }, help: { es: 'Antes era… y ahora es…', en: 'Before it was… and now it is…' }, follow: [{ es: '¿Para bien o para mal?', en: 'For better or worse?' }, { es: '¿Vuelves a veces?', en: 'Do you go back sometimes?' }] },
          ],
          words: [{ es: 'el muelle', en: 'the pier' }, { es: 'la bahía', en: 'the bay' }, { es: 'exigir', en: 'to demand' }, { es: 'la municipalidad', en: 'the town council' }, { es: 'sensato', en: 'sensible' }],
        },
      },
    },
    // ------------------------------------------------------------ Cerro Catedral, the ski station
    {
      id: 'cerro',
      name: { es: 'El cerro Catedral', en: 'Cerro Catedral' },
      who: { name: 'Lola', role: { es: 'instructora de esquí', en: 'ski instructor' } },
      levels: {
        A0: {
          scene: { es: 'Es una montaña con mucha nieve. Hay gente con esquís. Hace mucho frío. Lola es la profesora de esquí.', en: 'It is a mountain with a lot of snow. There are people with skis. It is very cold. Lola is the ski teacher.' },
          opener: { es: '¡Hola! Soy Lola. ¿Sabes esquiar?', en: 'Hi! I am Lola. Can you ski?' },
          decide: {
            ask: { es: 'Lola tiene tres actividades. ¿Qué quieres hacer?', en: 'Lola has three activities. What do you want to do?' },
            options: [
              { say: { es: 'Quiero esquiar.', en: 'I want to ski.' }, then: { es: 'Lola dice: «¡Muy bien! Primero, despacio».', en: 'Lola says: “Very good! Slowly at first.”' } },
              { say: { es: 'Quiero subir en la aerosilla.', en: 'I want to go up on the chairlift.' }, then: { es: 'Lola dice: «Arriba hay una vista muy linda».', en: 'Lola says: “Up there, there is a very nice view.”' } },
              { say: { es: 'Quiero tomar un chocolate caliente.', en: 'I want to drink a hot chocolate.' }, then: { es: 'Lola dice: «¡Yo también! Vamos a la cafetería».', en: 'Lola says: “Me too! Let’s go to the café.”' } },
            ],
          },
          twist: { es: '¡Te caes en la nieve! Lola se ríe y te da la mano. ¿Qué dices?', en: 'You fall in the snow! Lola laughs and gives you her hand. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el invierno?', en: 'Do you like winter?' }, help: { es: 'Sí, me gusta. / No, prefiero el verano.', en: 'Yes, I like it. / No, I prefer summer.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué haces en invierno?', en: 'What do you do in winter?' }] },
            { q: { es: '¿Haces deporte?', en: 'Do you do any sport?' }, help: { es: 'Sí, juego al… / No, no hago deporte.', en: 'Yes, I play… / No, I don’t do sport.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Qué ropa usas cuando hace frío?', en: 'What clothes do you wear when it is cold?' }, help: { es: 'Uso campera / gorro / guantes.', en: 'I wear a jacket / hat / gloves.' }, follow: [{ es: '¿Tienes una bufanda?', en: 'Do you have a scarf?' }, { es: '¿De qué color es?', en: 'What colour is it?' }] },
            { q: { es: '¿Te gustan las montañas?', en: 'Do you like mountains?' }, help: { es: 'Sí, mucho. / Prefiero el mar.', en: 'Yes, a lot. / I prefer the sea.' }, follow: [{ es: '¿Hay montañas en tu país?', en: 'Are there mountains in your country?' }, { es: '¿Cuál es la más alta?', en: 'Which is the highest?' }] },
          ],
          words: [{ es: 'la montaña', en: 'the mountain' }, { es: 'esquiar', en: 'to ski' }, { es: 'la aerosilla', en: 'the chairlift' }, { es: 'el frío', en: 'the cold' }, { es: 'caerse', en: 'to fall' }],
        },
        A1: {
          scene: { es: 'El cerro Catedral es uno de los centros de esquí más grandes de Sudamérica. En julio llegan familias de todo el país y de Brasil. Lola da clases a principiantes desde las nueve de la mañana hasta las cuatro de la tarde.', en: 'Cerro Catedral is one of the largest ski resorts in South America. In July, families arrive from all over the country and from Brazil. Lola teaches beginners from nine in the morning until four in the afternoon.' },
          opener: { es: 'Mis alumnos de hoy son una familia de São Paulo. Nunca vieron la nieve. Los chicos están felices y los padres, muertos de miedo. ¿Me ayudas a traducir un poco?', en: 'My students today are a family from São Paulo. They had never seen snow. The kids are happy and the parents are scared to death. Will you help me translate a little?' },
          decide: {
            ask: { es: 'El papá no quiere bajar la pista. ¿Qué le dices?', en: 'The dad doesn’t want to go down the slope. What do you tell him?' },
            options: [
              { say: { es: '«Tranquilo, vamos muy despacio».', en: '“Relax, we go very slowly.”' }, then: { es: 'El papá baja en quince minutos una pista de cien metros. Al final, aplaude.', en: 'The dad takes fifteen minutes to go down a hundred-metre slope. At the end, he claps.' } },
              { say: { es: '«Mira a tus hijos: ¡ellos pueden!»', en: '“Look at your kids: they can do it!”' }, then: { es: 'El papá mira a los chicos, respira y baja. Se cae dos veces, pero se ríe.', en: 'The dad looks at the kids, breathes and goes down. He falls twice, but laughs.' } },
              { say: { es: '«Puedes esperar en la cafetería».', en: '“You can wait in the café.”' }, then: { es: 'El papá acepta feliz. Desde la ventana, saca fotos de toda la familia.', en: 'The dad happily accepts. From the window, he takes photos of the whole family.' } },
            ],
          },
          twist: { es: 'La nena más chica de la familia se pierde entre la gente. Lola te pide que la busques en la cafetería. ¿Qué haces?', en: 'The youngest girl of the family gets lost in the crowd. Lola asks you to look for her in the café. What do you do?' },
          questions: [
            { q: { es: '¿Viste la nieve alguna vez?', en: 'Have you ever seen snow?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Qué deporte quieres aprender?', en: 'What sport do you want to learn?' }, help: { es: 'Quiero aprender a…', en: 'I want to learn to…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Qué idiomas hablas?', en: 'What languages do you speak?' }, help: { es: 'Hablo… y un poco de…', en: 'I speak… and a little…' }, follow: [{ es: '¿Dónde los usas?', en: 'Where do you use them?' }, { es: '¿Cuál es el más difícil?', en: 'Which is the hardest?' }] },
            { q: { es: '¿Te perdiste alguna vez de niño?', en: 'Did you ever get lost as a child?' }, help: { es: 'Sí, una vez en… / No, nunca.', en: 'Yes, once in… / No, never.' }, follow: [{ es: '¿Quién te encontró?', en: 'Who found you?' }, { es: '¿Tuviste miedo?', en: 'Were you scared?' }] },
          ],
          words: [{ es: 'la pista', en: 'the slope' }, { es: 'el principiante', en: 'the beginner' }, { es: 'despacio', en: 'slowly' }, { es: 'la nena', en: 'the little girl (Argentina)' }, { es: 'perderse', en: 'to get lost' }],
        },
        A2: {
          scene: { es: 'Este invierno casi no nevó. Las pistas bajas están verdes y solo funcionan las de arriba. Los hoteles bajan los precios y muchos instructores, como Lola, trabajan la mitad de las horas.', en: 'This winter it hardly snowed. The lower slopes are green and only the upper ones are open. Hotels are lowering their prices and many instructors, like Lola, are working half the hours.' },
          opener: { es: 'Cuando yo era chica, en julio la nieve llegaba hasta la puerta de casa. Ahora miramos el pronóstico todas las mañanas como si fuera la lotería. El año pasado pensé en irme a trabajar a Europa, a los Alpes, pero allá también falta nieve. ¿Notaste cambios en el clima donde vives?', en: 'When I was a girl, in July the snow reached our front door. Now we check the forecast every morning as if it were the lottery. Last year I thought about going to work in Europe, in the Alps, but there is not enough snow there either. Have you noticed changes in the climate where you live?' },
          decide: {
            ask: { es: 'Lola tiene pocas clases este mes. ¿Qué le aconsejas?', en: 'Lola has few classes this month. What do you advise her?' },
            options: [
              { say: { es: 'Ofrecer caminatas por la montaña sin nieve.', en: 'Offer mountain walks without snow.' }, then: { es: 'Lola organiza caminatas al amanecer. Los turistas que no esquían están encantados.', en: 'Lola organises sunrise walks. Tourists who don’t ski are delighted.' } },
              { say: { es: 'Irse al hemisferio norte en diciembre.', en: 'Go to the northern hemisphere in December.' }, then: { es: 'Lola consigue trabajo en Canadá para el invierno de allá. Dos inviernos por año: mucho frío y pocas vacaciones.', en: 'Lola gets work in Canada for their winter. Two winters a year: lots of cold and few holidays.' } },
              { say: { es: 'Dar clases de esquí en línea, con videos.', en: 'Give online ski lessons, with videos.' }, then: { es: 'Sus videos de «cómo no caerse» tienen miles de visitas. Ahora la reconocen en la pista.', en: 'Her “how not to fall” videos get thousands of views. Now people recognise her on the slope.' } },
            ],
          },
          twist: { es: 'Esa noche empieza a nevar fuerte y no para durante tres días. El teléfono de Lola no deja de sonar.', en: 'That night it starts snowing hard and doesn’t stop for three days. Lola’s phone won’t stop ringing.' },
          questions: [
            { q: { es: '¿Cómo era el clima cuando eras chico?', en: 'What was the weather like when you were a child?' }, help: { es: 'Antes hacía más… / Era igual.', en: 'Before it was more… / It was the same.' }, follow: [{ es: '¿Qué cambió?', en: 'What has changed?' }, { es: '¿Te preocupa?', en: 'Does it worry you?' }] },
            { q: { es: '¿Tu trabajo depende del tiempo?', en: 'Does your work depend on the weather?' }, help: { es: 'Sí, cuando llueve… / No, nada.', en: 'Yes, when it rains… / No, not at all.' }, follow: [{ es: '¿Qué haces en un mal día?', en: 'What do you do on a bad day?' }, { es: '¿Conoces a alguien que sí?', en: 'Do you know someone whose does?' }] },
            { q: { es: '¿Trabajarías en otro país durante una temporada?', en: 'Would you work in another country for a season?' }, help: { es: 'Sí, en… / No, porque…', en: 'Yes, in… / No, because…' }, follow: [{ es: '¿Qué trabajo harías?', en: 'What job would you do?' }, { es: '¿Qué extrañarías?', en: 'What would you miss?' }] },
            { q: { es: '¿Qué hacías en las vacaciones de invierno?', en: 'What did you use to do in the winter holidays?' }, help: { es: 'Íbamos a… / Me quedaba en casa y…', en: 'We used to go to… / I stayed at home and…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Lo sigues haciendo?', en: 'Do you still do it?' }] },
          ],
          words: [{ es: 'nevar', en: 'to snow' }, { es: 'el pronóstico', en: 'the forecast' }, { es: 'el amanecer', en: 'the sunrise' }, { es: 'la temporada', en: 'the season' }, { es: 'extrañar', en: 'to miss' }],
        },
        B1: {
          scene: { es: 'El centro de esquí quiere fabricar nieve artificial para asegurar la temporada. Para eso necesita sacar millones de litros de agua de un arroyo de la montaña. Los guardaparques y algunas comunidades mapuches de la zona se oponen. Lola trabaja para el cerro, pero también es voluntaria en un grupo ambiental.', en: 'The ski resort wants to make artificial snow to secure the season. For that it needs to take millions of litres of water from a mountain stream. Park rangers and some Mapuche communities in the area oppose it. Lola works for the resort, but she is also a volunteer in an environmental group.' },
          opener: { es: 'Mi jefe me pidió que aparezca en el video promocional de la nieve artificial. Mis compañeros del grupo ambiental me pidieron que firme una carta en contra. Si digo que sí al video, pierdo a mis amigos; si firmo la carta, quizás pierdo el trabajo. ¿Cómo se sale de esto?', en: 'My boss asked me to appear in the promotional video for the artificial snow. My friends in the environmental group asked me to sign a letter against it. If I say yes to the video, I lose my friends; if I sign the letter, I might lose my job. How do you get out of this?' },
          decide: {
            ask: { es: 'Lola tiene que contestar a los dos antes del viernes. ¿Qué le recomiendas?', en: 'Lola has to answer both before Friday. What do you recommend?' },
            options: [
              { say: { es: 'Firmar la carta y explicarle a su jefe por qué.', en: 'Sign the letter and explain to her boss why.' }, then: { es: 'El jefe no la despide, pero le da los turnos más temprano de toda la temporada.', en: 'Her boss doesn’t fire her, but gives her the earliest shifts of the whole season.' } },
              { say: { es: 'No hacer ninguna de las dos cosas.', en: 'Do neither.' }, then: { es: 'Nadie queda contento. Los dos lados le dicen que no tener opinión también es una opinión.', en: 'Nobody is happy. Both sides tell her that having no opinion is also an opinion.' } },
              { say: { es: 'Proponer una reunión entre el cerro y las comunidades.', en: 'Propose a meeting between the resort and the communities.' }, then: { es: 'La reunión se hace. No hay acuerdo todavía, pero por primera vez se sientan en la misma mesa.', en: 'The meeting takes place. There is no agreement yet, but for the first time they sit at the same table.' } },
            ],
          },
          twist: { es: 'Un periodista publica que el cerro ya empezó a sacar agua del arroyo antes de tener el permiso. En la foto de la nota aparece Lola, de fondo, sin saberlo.', en: 'A journalist reports that the resort had already started taking water from the stream before getting the permit. Lola appears in the background of the article’s photo, without knowing it.' },
          questions: [
            { q: { es: '¿Tuviste que elegir entre tu trabajo y tus ideas?', en: 'Have you had to choose between your job and your beliefs?' }, help: { es: 'Sí, una vez… / Nunca me pasó, pero…', en: 'Yes, once… / It has never happened to me, but…' }, follow: [{ es: '¿Qué elegiste?', en: 'What did you choose?' }, { es: '¿Harías lo mismo hoy?', en: 'Would you do the same today?' }] },
            { q: { es: '¿El turismo ayuda o daña la naturaleza?', en: 'Does tourism help or harm nature?' }, help: { es: 'Por un lado… por otro lado…', en: 'On the one hand… on the other hand…' }, follow: [{ es: '¿Qué ejemplo conoces?', en: 'What example do you know?' }, { es: '¿Qué tipo de turismo prefieres?', en: 'What kind of tourism do you prefer?' }] },
            { q: { es: '¿Quién debería decidir sobre el agua de una región?', en: 'Who should decide about a region’s water?' }, help: { es: 'Creo que deberían decidir…', en: 'I think … should decide.' }, follow: [{ es: '¿Y si no se ponen de acuerdo?', en: 'And if they don’t agree?' }, { es: '¿Cómo es en tu país?', en: 'What is it like in your country?' }] },
            { q: { es: '¿Es posible ser neutral en un conflicto así?', en: 'Is it possible to be neutral in a conflict like this?' }, help: { es: 'Me parece que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Te pasó estar en el medio?', en: 'Have you ever been caught in the middle?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
          ],
          words: [{ es: 'la nieve artificial', en: 'artificial snow' }, { es: 'el arroyo', en: 'the stream' }, { es: 'el guardaparque', en: 'the park ranger' }, { es: 'despedir', en: 'to fire (from a job)' }, { es: 'el permiso', en: 'the permit' }],
        },
      },
    },
    // ------------------------------------------------------------ the craft brewery
    {
      id: 'cerveceria',
      name: { es: 'La cervecería', en: 'The brewery' },
      who: { name: 'Bruno', role: { es: 'cervecero', en: 'brewer' } },
      levels: {
        A0: {
          scene: { es: 'Es un bar de madera. Hay mesas largas y mucha gente. Bruno hace la cerveza aquí. También hay comida.', en: 'It is a wooden bar. There are long tables and many people. Bruno makes the beer here. There is food too.' },
          opener: { es: '¡Hola! Soy Bruno. ¿Qué quieres tomar?', en: 'Hi! I am Bruno. What would you like to drink?' },
          decide: {
            ask: { es: 'Bruno tiene tres bebidas. ¿Qué pides?', en: 'Bruno has three drinks. What do you order?' },
            options: [
              { say: { es: 'Una cerveza rubia, por favor.', en: 'A blonde beer, please.' }, then: { es: 'Bruno dice: «Es suave y fresca. ¡Salud!»', en: 'Bruno says: “It is light and fresh. Cheers!”' } },
              { say: { es: 'Una cerveza negra.', en: 'A dark beer.' }, then: { es: 'Bruno dice: «Tiene sabor a café y chocolate».', en: 'Bruno says: “It tastes of coffee and chocolate.”' } },
              { say: { es: 'Una limonada, por favor.', en: 'A lemonade, please.' }, then: { es: 'Bruno dice: «¡Claro! Es casera, con menta».', en: 'Bruno says: “Sure! It is homemade, with mint.”' } },
            ],
          },
          twist: { es: 'Bruno trae una pizza grande. «Es para compartir». Hay ocho porciones. ¿Cuántas comes?', en: 'Bruno brings a big pizza. “It is for sharing.” There are eight slices. How many do you eat?' },
          questions: [
            { q: { es: '¿Qué tomas con la comida?', en: 'What do you drink with food?' }, help: { es: 'Tomo agua / jugo / vino.', en: 'I drink water / juice / wine.' }, follow: [{ es: '¿Y en una fiesta?', en: 'And at a party?' }, { es: '¿Qué no te gusta?', en: 'What don’t you like?' }] },
            { q: { es: '¿Te gusta la pizza?', en: 'Do you like pizza?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Con qué te gusta?', en: 'What do you like on it?' }, { es: '¿Cuántas porciones comes?', en: 'How many slices do you eat?' }] },
            { q: { es: '¿Vas a bares con amigos?', en: 'Do you go to bars with friends?' }, help: { es: 'Sí, los viernes. / No, prefiero casa.', en: 'Yes, on Fridays. / No, I prefer home.' }, follow: [{ es: '¿Cuál es tu bar favorito?', en: 'What is your favourite bar?' }, { es: '¿Qué piden?', en: 'What do you order?' }] },
            { q: { es: '¿Qué comida compartes?', en: 'What food do you share?' }, help: { es: 'Comparto pizza / papas fritas…', en: 'I share pizza / chips…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Te gusta compartir?', en: 'Do you like sharing?' }] },
          ],
          words: [{ es: 'la cerveza', en: 'beer' }, { es: 'el bar', en: 'the bar' }, { es: 'la porción', en: 'the slice' }, { es: 'casero', en: 'homemade' }, { es: '¡Salud!', en: 'Cheers!' }],
        },
        A1: {
          scene: { es: 'Bariloche tiene muchas cervecerías artesanales. Bruno hace su cerveza con agua de la montaña y lúpulo de El Bolsón, un pueblo cercano. Por la noche el lugar se llena de esquiadores cansados y de músicos que tocan gratis.', en: 'Bariloche has many craft breweries. Bruno makes his beer with mountain water and hops from El Bolsón, a nearby town. At night the place fills up with tired skiers and musicians who play for free.' },
          opener: { es: 'Esta cerveza se llama «Nahuelito». La hice el año pasado y ganó un premio. Pero mi favorita es la de frambuesa, aunque casi nadie la pide. ¿Quieres probar las dos?', en: 'This beer is called “Nahuelito”. I made it last year and it won a prize. But my favourite is the raspberry one, although hardly anyone orders it. Do you want to try both?' },
          decide: {
            ask: { es: 'Bruno quiere un nombre para su cerveza nueva. ¿Qué propones?', en: 'Bruno wants a name for his new beer. What do you suggest?' },
            options: [
              { say: { es: '«Catedral», como el cerro.', en: '“Catedral”, like the mountain.' }, then: { es: 'Bruno dice que ya existe una con ese nombre. «Bariloche es chico, ¡todos copiamos!»', en: 'Bruno says there is already one with that name. “Bariloche is small, we all copy!”' } },
              { say: { es: '«Lola», por la instructora de esquí.', en: '“Lola”, after the ski instructor.' }, then: { es: 'Bruno se pone rojo. Parece que Lola le gusta mucho.', en: 'Bruno blushes. It seems he likes Lola a lot.' } },
              { say: { es: 'Un nombre en mapuche.', en: 'A name in Mapuche.' }, then: { es: 'Bruno decide preguntar a una profesora de la escuela para elegir bien la palabra.', en: 'Bruno decides to ask a teacher from the school to choose the word properly.' } },
            ],
          },
          twist: { es: 'Se rompe la heladera de las cervezas. Bruno tiene cuarenta litros calientes y una fiesta en dos horas. ¿Qué haces?', en: 'The beer fridge breaks. Bruno has forty litres of warm beer and a party in two hours. What do you do?' },
          questions: [
            { q: { es: '¿Qué bebida típica hay en tu país?', en: 'What typical drink is there in your country?' }, help: { es: 'En mi país se toma…', en: 'In my country people drink…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Cuándo se toma?', en: 'When do people drink it?' }] },
            { q: { es: '¿Qué hace la gente en tu ciudad por la noche?', en: 'What do people do in your city at night?' }, help: { es: 'Salen a… / Se quedan en casa.', en: 'They go out to… / They stay at home.' }, follow: [{ es: '¿Y tú?', en: 'And you?' }, { es: '¿Hasta qué hora?', en: 'Until what time?' }] },
            { q: { es: '¿Tocas algún instrumento?', en: 'Do you play an instrument?' }, help: { es: 'Sí, toco la… / No, pero me gustaría.', en: 'Yes, I play the… / No, but I would like to.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Qué música te gusta?', en: 'What music do you like?' }] },
            { q: { es: '¿Qué nombre le pondrías a un bar?', en: 'What name would you give a bar?' }, help: { es: 'Le pondría «…» porque…', en: 'I would call it “…” because…' }, follow: [{ es: '¿Cómo sería el lugar?', en: 'What would the place be like?' }, { es: '¿Qué música habría?', en: 'What music would there be?' }] },
          ],
          words: [{ es: 'artesanal', en: 'craft / handmade' }, { es: 'el premio', en: 'the prize' }, { es: 'la frambuesa', en: 'raspberry' }, { es: 'la heladera', en: 'the fridge (Argentina)' }, { es: 'probar', en: 'to try / taste' }],
        },
        A2: {
          scene: { es: 'Es sábado y en la cervecería hay un concurso de cocina de montaña. Cada participante prepara un plato con trucha, cordero o hongos de la zona. Bruno es parte del jurado, pero uno de los cocineros es su ex novia.', en: 'It is Saturday and there is a mountain-cooking contest at the brewery. Each participant prepares a dish with trout, lamb or local mushrooms. Bruno is on the jury, but one of the cooks is his ex-girlfriend.' },
          opener: { es: 'Mira, no te voy a mentir: el plato de Carla es el mejor. Pero si le doy el premio, todo el pueblo va a decir que todavía estoy enamorado. Y si no se lo doy, ella va a decir que soy un rencoroso. Ya me pasó algo parecido hace dos años. ¿Qué harías tú?', en: 'Look, I’m not going to lie: Carla’s dish is the best. But if I give her the prize, the whole town will say I am still in love. And if I don’t, she will say I hold a grudge. Something similar happened to me two years ago. What would you do?' },
          decide: {
            ask: { es: 'Bruno tiene que votar ahora. ¿Qué le dices?', en: 'Bruno has to vote now. What do you tell him?' },
            options: [
              { say: { es: 'Que vote por el mejor plato, sin pensar en nada más.', en: 'Vote for the best dish, without thinking about anything else.' }, then: { es: 'Carla gana. Algunos murmuran, pero el cordero era realmente increíble.', en: 'Carla wins. Some people whisper, but the lamb really was incredible.' } },
              { say: { es: 'Que no vote y explique por qué.', en: 'Not vote and explain why.' }, then: { es: 'El público aplaude su honestidad. Los otros dos jurados eligen a Carla igual.', en: 'The audience applauds his honesty. The other two judges choose Carla anyway.' } },
              { say: { es: 'Que vote por el segundo mejor.', en: 'Vote for the second best.' }, then: { es: 'Carla queda segunda por un punto. Esa noche, Bruno no puede dormir.', en: 'Carla comes second by one point. That night, Bruno can’t sleep.' } },
            ],
          },
          twist: { es: 'Después del concurso, Carla se acerca a Bruno y le propone abrir un restaurante juntos, al lado de la cervecería.', en: 'After the contest, Carla goes up to Bruno and suggests opening a restaurant together, next to the brewery.' },
          questions: [
            { q: { es: '¿Participaste alguna vez en un concurso?', en: 'Have you ever taken part in a contest?' }, help: { es: 'Sí, de… y gané. / Sí, pero no gané. / No, nunca.', en: 'Yes, a … contest and I won. / Yes, but I didn’t win. / No, never.' }, follow: [{ es: '¿Estabas nervioso?', en: 'Were you nervous?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Eres amigo de alguna ex pareja?', en: 'Are you friends with an ex?' }, help: { es: 'Sí, nos llevamos bien. / No, preferimos no hablar.', en: 'Yes, we get on well. / No, we prefer not to talk.' }, follow: [{ es: '¿Es posible ser amigos?', en: 'Is it possible to be friends?' }, { es: '¿Qué opinan tus amigos?', en: 'What do your friends think?' }] },
            { q: { es: '¿Cuál es el plato más rico que probaste?', en: 'What is the tastiest dish you have tried?' }, help: { es: 'Una vez probé… en…', en: 'Once I tried… in…' }, follow: [{ es: '¿Quién lo cocinó?', en: 'Who cooked it?' }, { es: '¿Sabes hacerlo?', en: 'Can you make it?' }] },
            { q: { es: '¿Es fácil ser justo con la gente que conoces?', en: 'Is it easy to be fair with people you know?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Te pasó alguna vez?', en: 'Has it ever happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
          ],
          words: [{ es: 'el concurso', en: 'the contest' }, { es: 'el jurado', en: 'the jury' }, { es: 'la trucha', en: 'trout' }, { es: 'el cordero', en: 'lamb' }, { es: 'rencoroso', en: 'resentful / holding a grudge' }],
        },
        B1: {
          scene: { es: 'Una gran empresa de bebidas compró varias cervecerías artesanales de la Patagonia. Ahora le ofrece a Bruno distribuir su cerveza en todos los supermercados del país. Sería un éxito enorme, pero tendría que producir diez veces más y dejar de vender solo en su bar.', en: 'A big drinks company has bought several craft breweries in Patagonia. Now it is offering Bruno nationwide distribution in every supermarket. It would be a huge success, but he would have to produce ten times more and stop selling only in his bar.' },
          opener: { es: 'Cuando empecé, hace doce años, hacía la cerveza en la cocina de mi madre, en ollas de sopa. Mis amigos me decían que estaba loco. Ahora me ofrecen lo que soñé siempre, y sin embargo tengo miedo de convertirme en una fábrica más. Lo artesanal no es solo la receta: es el tiempo, la gente, este lugar. ¿Crees que se puede crecer sin perder eso?', en: 'When I started, twelve years ago, I made beer in my mother’s kitchen, in soup pots. My friends told me I was crazy. Now they are offering me what I always dreamed of, and yet I am afraid of becoming just another factory. Craft is not only the recipe: it is the time, the people, this place. Do you think you can grow without losing that?' },
          decide: {
            ask: { es: 'Bruno tiene que firmar o rechazar el acuerdo. ¿Qué le aconsejas?', en: 'Bruno has to sign or reject the deal. What do you advise him?' },
            options: [
              { say: { es: 'Aceptar, pero solo con una cerveza y mantener las otras en el bar.', en: 'Accept, but with one beer only, and keep the others in the bar.' }, then: { es: 'La «Nahuelito» llega a todo el país. Las demás siguen siendo un secreto local.', en: '“Nahuelito” reaches the whole country. The others remain a local secret.' } },
              { say: { es: 'Rechazar y crecer despacio, con otros cerveceros de la zona.', en: 'Reject it and grow slowly, with other brewers in the area.' }, then: { es: 'Cinco cervecerías crean una cooperativa. Ganan menos, pero deciden juntos.', en: 'Five breweries set up a cooperative. They earn less, but they decide together.' } },
              { say: { es: 'Aceptar todo y aprovechar la oportunidad.', en: 'Accept everything and seize the opportunity.' }, then: { es: 'En un año Bruno gana más que en diez. Pero ya casi no está en el bar y los músicos dejan de venir.', en: 'In one year Bruno earns more than in ten. But he is hardly ever at the bar now and the musicians stop coming.' } },
            ],
          },
          twist: { es: 'Bruno descubre que la empresa también compró, en secreto, el campo de lúpulo de El Bolsón que le vende a él y a todos los cerveceros de la zona.', en: 'Bruno discovers that the company has also secretly bought the hop farm in El Bolsón that sells to him and to every brewer in the area.' },
          questions: [
            { q: { es: '¿Se puede crecer mucho sin perder la identidad?', en: 'Can you grow a lot without losing your identity?' }, help: { es: 'Sí, si… / Es difícil porque…', en: 'Yes, if… / It is hard because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Y en las personas?', en: 'And in people?' }] },
            { q: { es: '¿Qué sueño tenías de joven que todavía no cumpliste?', en: 'What dream did you have when you were young that you haven’t fulfilled yet?' }, help: { es: 'Siempre quise… pero…', en: 'I always wanted to… but…' }, follow: [{ es: '¿Todavía es posible?', en: 'Is it still possible?' }, { es: '¿Qué te falta?', en: 'What are you missing?' }] },
            { q: { es: '¿Qué piensas de las cooperativas?', en: 'What do you think of cooperatives?' }, help: { es: 'Me parecen… porque…', en: 'I think they are… because…' }, follow: [{ es: '¿Hay alguna en tu ciudad?', en: 'Is there one in your city?' }, { es: '¿Trabajarías en una?', en: 'Would you work in one?' }] },
            { q: { es: '¿Alguien te dijo que estabas loco por un proyecto?', en: 'Has anyone told you you were crazy because of a project?' }, help: { es: 'Sí, cuando quise… / No, nunca.', en: 'Yes, when I wanted to… / No, never.' }, follow: [{ es: '¿Tenían razón?', en: 'Were they right?' }, { es: '¿Qué les dirías hoy?', en: 'What would you tell them today?' }] },
          ],
          words: [{ es: 'distribuir', en: 'to distribute' }, { es: 'la olla', en: 'the pot' }, { es: 'el lúpulo', en: 'hops' }, { es: 'la cooperativa', en: 'the cooperative' }, { es: 'aprovechar', en: 'to take advantage of' }],
        },
      },
    },
    // ------------------------------------------------------------ the Centro Cívico and its bell tower
    {
      id: 'campanario',
      name: { es: 'El Centro Cívico', en: 'The Centro Cívico' },
      who: { name: 'Inés', role: { es: 'guía de turismo', en: 'tour guide' } },
      levels: {
        A0: {
          scene: { es: 'Es una plaza grande con edificios de piedra y madera. Hay una torre con un reloj. Hay perros grandes y blancos. Inés es guía.', en: 'It is a big square with stone and wooden buildings. There is a tower with a clock. There are big white dogs. Inés is a guide.' },
          opener: { es: 'Hola, soy Inés. ¡Bienvenido a Bariloche! ¿De dónde eres?', en: 'Hi, I am Inés. Welcome to Bariloche! Where are you from?' },
          decide: {
            ask: { es: 'Hay un perro San Bernardo. Hay una foto con el perro. ¿Qué haces?', en: 'There is a Saint Bernard dog. You can take a photo with the dog. What do you do?' },
            options: [
              { say: { es: 'Saco una foto con el perro.', en: 'I take a photo with the dog.' }, then: { es: 'Inés dice: «¡Qué linda foto! El perro se llama Rocco».', en: 'Inés says: “What a nice photo! The dog is called Rocco.”' } },
              { say: { es: 'Acaricio al perro.', en: 'I stroke the dog.' }, then: { es: 'Inés dice: «Es muy bueno. ¡Le gusta mucho!»', en: 'Inés says: “He is very good. He likes it a lot!”' } },
              { say: { es: 'No, gracias. Miro la torre.', en: 'No, thanks. I look at the tower.' }, then: { es: 'Inés dice: «El reloj tiene muchos años».', en: 'Inés says: “The clock is very old.”' } },
            ],
          },
          twist: { es: 'El reloj de la torre suena: ¡son las doce! Inés pregunta: «¿Tienes hambre?». ¿Qué dices?', en: 'The tower clock rings: it is twelve o’clock! Inés asks: “Are you hungry?” What do you say?' },
          questions: [
            { q: { es: '¿De dónde eres?', en: 'Where are you from?' }, help: { es: 'Soy de…', en: 'I am from…' }, follow: [{ es: '¿Cómo es tu ciudad?', en: 'What is your city like?' }, { es: '¿Hay una plaza grande?', en: 'Is there a big square?' }] },
            { q: { es: '¿Te gustan los perros?', en: 'Do you like dogs?' }, help: { es: 'Sí, mucho. / Prefiero los gatos.', en: 'Yes, a lot. / I prefer cats.' }, follow: [{ es: '¿Tienes perro?', en: 'Do you have a dog?' }, { es: '¿Cómo se llama?', en: 'What is its name?' }] },
            { q: { es: '¿Sacas muchas fotos?', en: 'Do you take many photos?' }, help: { es: 'Sí, muchas. / No, pocas.', en: 'Yes, many. / No, few.' }, follow: [{ es: '¿Con el teléfono?', en: 'With your phone?' }, { es: '¿De qué?', en: 'Of what?' }] },
            { q: { es: '¿Qué hora es ahora?', en: 'What time is it now?' }, help: { es: 'Son las…', en: 'It is…' }, follow: [{ es: '¿A qué hora comes?', en: 'What time do you eat?' }, { es: '¿A qué hora duermes?', en: 'What time do you go to sleep?' }] },
          ],
          words: [{ es: 'la plaza', en: 'the square' }, { es: 'la torre', en: 'the tower' }, { es: 'el reloj', en: 'the clock' }, { es: 'el perro', en: 'the dog' }, { es: 'la foto', en: 'the photo' }],
        },
        A1: {
          scene: { es: 'El Centro Cívico de Bariloche tiene edificios de piedra y madera de ciprés, con un estilo parecido al de los pueblos de los Alpes. Desde la plaza se ve el lago. Inés hace visitas guiadas gratis todas las mañanas y los turistas le dejan una propina.', en: 'Bariloche’s Centro Cívico has buildings made of stone and cypress wood, in a style similar to Alpine villages. From the square you can see the lake. Inés gives free guided tours every morning and tourists leave her a tip.' },
          opener: { es: 'Muchos turistas piensan que estos edificios son antiguos, de Suiza. ¡Pero son de 1940 y los hizo un arquitecto argentino! Hoy tengo un grupo de doce personas de seis países. ¿Te sumas?', en: 'Many tourists think these buildings are old, from Switzerland. But they are from 1940 and an Argentine architect built them! Today I have a group of twelve people from six countries. Will you join?' },
          decide: {
            ask: { es: 'La visita termina. Inés pregunta qué quieren ver después. ¿Qué eliges?', en: 'The tour ends. Inés asks what you want to see next. What do you choose?' },
            options: [
              { say: { es: 'El museo de la Patagonia.', en: 'The Patagonia museum.' }, then: { es: 'Ves objetos de los pueblos mapuche y tehuelche. Inés te explica que antes no había fronteras aquí.', en: 'You see objects of the Mapuche and Tehuelche peoples. Inés explains there were no borders here before.' } },
              { say: { es: 'La catedral, cerca del lago.', en: 'The cathedral, near the lake.' }, then: { es: 'Caminas diez minutos por la costanera. La catedral tiene vitrales de colores muy lindos.', en: 'You walk ten minutes along the lakeside. The cathedral has very beautiful stained-glass windows.' } },
              { say: { es: 'Un lugar para comer algo típico.', en: 'A place to eat something typical.' }, then: { es: 'Inés recomienda una casa de té con torta galesa y dulce de frambuesa.', en: 'Inés recommends a tea house with Welsh cake and raspberry jam.' } },
            ],
          },
          twist: { es: 'Un turista del grupo no paga la propina y se va rápido. Inés no dice nada. ¿Tú qué haces?', en: 'A tourist from the group doesn’t tip and leaves quickly. Inés says nothing. What do you do?' },
          questions: [
            { q: { es: '¿Haces visitas guiadas cuando viajas?', en: 'Do you take guided tours when you travel?' }, help: { es: 'Sí, siempre. / No, prefiero ir solo.', en: 'Yes, always. / No, I prefer going alone.' }, follow: [{ es: '¿Cuál fue la mejor?', en: 'Which was the best?' }, { es: '¿Dejas propina?', en: 'Do you leave a tip?' }] },
            { q: { es: '¿Cuál es el edificio más lindo de tu ciudad?', en: 'What is the most beautiful building in your city?' }, help: { es: 'Para mí es… porque…', en: 'For me it is… because…' }, follow: [{ es: '¿Es antiguo?', en: 'Is it old?' }, { es: '¿Se puede visitar?', en: 'Can you visit it?' }] },
            { q: { es: '¿Te gustan los museos?', en: 'Do you like museums?' }, help: { es: 'Sí, sobre todo los de… / No mucho.', en: 'Yes, especially … ones. / Not much.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿En tu país se deja propina?', en: 'Do people tip in your country?' }, help: { es: 'Sí, normalmente un diez por ciento. / No, no es común.', en: 'Yes, usually ten per cent. / No, it is not common.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Qué piensas de la propina?', en: 'What do you think about tipping?' }] },
          ],
          words: [{ es: 'la visita guiada', en: 'the guided tour' }, { es: 'la propina', en: 'the tip' }, { es: 'el edificio', en: 'the building' }, { es: 'la costanera', en: 'the waterfront' }, { es: 'sumarse', en: 'to join' }],
        },
        A2: {
          scene: { es: 'Inés prepara una visita nueva sobre la historia de Bariloche. Mientras busca información en el archivo de la ciudad, encuentra cartas de una familia de inmigrantes que llegó en 1903. En una de ellas, una mujer cuenta cómo cruzó la cordillera desde Chile en invierno, con dos hijos y una vaca.', en: 'Inés is preparing a new tour about the history of Bariloche. While she looks for information in the city archive, she finds letters from an immigrant family who arrived in 1903. In one of them, a woman tells how she crossed the Andes from Chile in winter, with two children and a cow.' },
          opener: { es: 'Leí la carta tres veces. Esta mujer caminó veinte días en la nieve y después escribió: «Llegamos. El lago es tan grande que parece el mar». Y nadie la recuerda. Los libros solo hablan de los hombres que fundaron la ciudad. ¿Tú sabes cómo llegó tu familia al lugar donde vive?', en: 'I read the letter three times. This woman walked for twenty days in the snow and then wrote: “We have arrived. The lake is so big it looks like the sea.” And nobody remembers her. The books only talk about the men who founded the city. Do you know how your family came to the place where they live?' },
          decide: {
            ask: { es: '¿Cómo debería usar Inés estas cartas?', en: 'How should Inés use these letters?' },
            options: [
              { say: { es: 'Leer una carta en voz alta al final de cada visita.', en: 'Read a letter aloud at the end of each tour.' }, then: { es: 'Muchos turistas se emocionan. Algunos le escriben después para contar la historia de su propia familia.', en: 'Many tourists are moved. Some write to her afterwards to tell their own family’s story.' } },
              { say: { es: 'Buscar a los descendientes de la familia.', en: 'Look for the family’s descendants.' }, then: { es: 'Encuentra a una bisnieta que vive a tres cuadras. Ella no sabía nada de las cartas.', en: 'She finds a great-granddaughter who lives three blocks away. She knew nothing about the letters.' } },
              { say: { es: 'Proponerle al museo una exposición.', en: 'Suggest an exhibition to the museum.' }, then: { es: 'El museo acepta, pero dice que tardará un año. Inés empieza a escribir los textos esa misma noche.', en: 'The museum accepts, but says it will take a year. Inés starts writing the texts that same night.' } },
            ],
          },
          twist: { es: 'En la última carta, la mujer menciona a «la señora Inés, que nos ayudó a cruzar». Es el mismo nombre que la guía, y era su tatarabuela.', en: 'In the last letter, the woman mentions “Mrs Inés, who helped us cross.” It is the same name as the guide, and she was her great-great-grandmother.' },
          questions: [
            { q: { es: '¿Sabes de dónde vino tu familia?', en: 'Do you know where your family came from?' }, help: { es: 'Mis abuelos / bisabuelos vinieron de…', en: 'My grandparents / great-grandparents came from…' }, follow: [{ es: '¿Por qué se fueron?', en: 'Why did they leave?' }, { es: '¿Quién te lo contó?', en: 'Who told you?' }] },
            { q: { es: '¿Guardas cartas o fotos viejas?', en: 'Do you keep old letters or photos?' }, help: { es: 'Sí, tengo… de mi… / No, todo está en el teléfono.', en: 'Yes, I have… from my… / No, everything is on my phone.' }, follow: [{ es: '¿Cuál es la más antigua?', en: 'Which is the oldest?' }, { es: '¿Dónde las guardas?', en: 'Where do you keep them?' }] },
            { q: { es: '¿Qué viaje difícil hizo alguien de tu familia?', en: 'What difficult journey did someone in your family make?' }, help: { es: 'Mi… viajó a… en…', en: 'My… travelled to… in…' }, follow: [{ es: '¿Cuánto tardó?', en: 'How long did it take?' }, { es: '¿Por qué lo hizo?', en: 'Why did they do it?' }] },
            { q: { es: '¿Quién merece estar en los libros de historia y no está?', en: 'Who deserves to be in history books and isn’t?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Por qué crees que no está?', en: 'Why do you think they aren’t?' }, { es: '¿Qué hizo?', en: 'What did they do?' }] },
          ],
          words: [{ es: 'el archivo', en: 'the archive' }, { es: 'la carta', en: 'the letter' }, { es: 'la cordillera', en: 'the mountain range' }, { es: 'el descendiente', en: 'the descendant' }, { es: 'la bisnieta', en: 'the great-granddaughter' }],
        },
        B1: {
          scene: { es: 'En la plaza del Centro Cívico hay una estatua de un militar del siglo XIX. Para muchos es un héroe nacional; para las comunidades mapuches, es el responsable de la ocupación violenta de sus tierras. Un grupo pide quitarla, otro pide protegerla. La municipalidad le pide a Inés, como guía, que proponga un texto para un cartel nuevo al lado de la estatua.', en: 'In the Centro Cívico square there is a statue of a 19th-century military officer. For many he is a national hero; for the Mapuche communities, he is responsible for the violent occupation of their lands. One group wants it removed, another wants it protected. The town council asks Inés, as a guide, to propose the text for a new sign next to the statue.' },
          opener: { es: 'Cada día, frente a esa estatua, alguien me pregunta quién era. Si digo «un héroe», unos se enojan; si digo «un genocida», se enojan otros. Yo creo que un guía no está para decir qué pensar, sino para dar la información completa. Pero ¿cómo resumes cien años de conflicto en cincuenta palabras? ¿Tú qué escribirías?', en: 'Every day, in front of that statue, someone asks me who he was. If I say “a hero”, some get angry; if I say “a perpetrator of genocide”, others do. I believe a guide is not there to tell people what to think, but to give the full picture. But how do you sum up a hundred years of conflict in fifty words? What would you write?' },
          decide: {
            ask: { es: 'Inés tiene que presentar su propuesta mañana. ¿Qué le sugieres?', en: 'Inés has to present her proposal tomorrow. What do you suggest?' },
            options: [
              { say: { es: 'Un cartel con las dos miradas, una al lado de la otra.', en: 'A sign with both views, side by side.' }, then: { es: 'La propuesta se aprueba. Nadie está del todo contento, lo que, según Inés, es una buena señal.', en: 'The proposal is approved. Nobody is completely happy, which, according to Inés, is a good sign.' } },
              { say: { es: 'Pedir que lo escriban juntos un historiador y un representante mapuche.', en: 'Ask a historian and a Mapuche representative to write it together.' }, then: { es: 'Tardan tres meses en ponerse de acuerdo. El texto final es corto y muy cuidado.', en: 'It takes them three months to agree. The final text is short and very carefully written.' } },
              { say: { es: 'Proponer trasladar la estatua a un museo, con su historia completa.', en: 'Propose moving the statue to a museum, with its full history.' }, then: { es: 'La propuesta genera un debate enorme en la radio local. La decisión queda para el próximo año.', en: 'The proposal sparks a huge debate on local radio. The decision is postponed until next year.' } },
            ],
          },
          twist: { es: 'Durante la reunión, una anciana mapuche y un descendiente del militar descubren que viven en la misma calle y que sus nietos van a la misma escuela.', en: 'During the meeting, an elderly Mapuche woman and a descendant of the officer discover they live on the same street and their grandchildren go to the same school.' },
          questions: [
            { q: { es: '¿Hay estatuas polémicas en tu país?', en: 'Are there controversial statues in your country?' }, help: { es: 'Sí, la de… porque… / No que yo sepa.', en: 'Yes, the one of… because… / Not that I know of.' }, follow: [{ es: '¿Qué opina la gente?', en: 'What do people think?' }, { es: '¿Y tú?', en: 'And you?' }] },
            { q: { es: '¿Se puede contar la historia de forma neutral?', en: 'Can history be told neutrally?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Quién debería contarla?', en: 'Who should tell it?' }, { es: '¿Cómo la aprendiste tú en la escuela?', en: 'How did you learn it at school?' }] },
            { q: { es: '¿Qué harías con una estatua que ofende a una parte de la población?', en: 'What would you do with a statue that offends part of the population?' }, help: { es: 'Yo la… / Dependería de…', en: 'I would… it / It would depend on…' }, follow: [{ es: '¿Y si es una obra de arte importante?', en: 'And if it is an important work of art?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Cambiaste de opinión sobre un personaje histórico?', en: 'Have you changed your mind about a historical figure?' }, help: { es: 'Sí, antes pensaba que… y ahora…', en: 'Yes, I used to think… and now…' }, follow: [{ es: '¿Qué te hizo cambiar?', en: 'What made you change?' }, { es: '¿Se lo contaste a alguien?', en: 'Did you tell anyone?' }] },
          ],
          words: [{ es: 'la estatua', en: 'the statue' }, { es: 'polémico', en: 'controversial' }, { es: 'quitar', en: 'to remove' }, { es: 'el cartel', en: 'the sign' }, { es: 'trasladar', en: 'to move / relocate' }],
        },
      },
    },
  ],
};
