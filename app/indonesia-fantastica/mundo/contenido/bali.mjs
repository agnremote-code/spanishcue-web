// Bali · the rice terraces, the daily offerings, a surf school, the Day of Silence and the
// monkeys of Uluwatu. Five places, four levels each (A0, A1, A2, B1). Every level is
// written on its own.
export default {
  id: 'bali',
  spots: [
    // ------------------------------------------------------------ the rice terraces
    {
      id: 'arrozales',
      name: { es: 'Las terrazas de arroz', en: 'The rice terraces' },
      who: { name: 'Made', role: { es: 'agricultor de arroz', en: 'rice farmer' } },
      levels: {
        A0: {
          scene: { es: 'Hay escalones verdes en la montaña. Son campos de arroz. Hay agua y palmeras. Made es agricultor. Tiene un sombrero grande.', en: 'There are green steps on the mountain. They are rice fields. There is water and palm trees. Made is a farmer. He has a big hat.' },
          opener: { es: '¡Hola! Esto es arroz. ¿Comes arroz?', en: 'Hello! This is rice. Do you eat rice?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Camino por el campo.', en: 'I walk through the field.' }, then: { es: 'El camino es estrecho. ¡Cuidado con el agua!', en: 'The path is narrow. Careful with the water!' } },
              { say: { es: 'Saco una foto.', en: 'I take a photo.' }, then: { es: 'Made sonríe en la foto. ¡Es muy verde!', en: 'Made smiles in the photo. It is very green!' } },
              { say: { es: 'Ayudo a Made.', en: 'I help Made.' }, then: { es: 'Pones los pies en el agua. ¡Hay barro!', en: 'You put your feet in the water. There is mud!' } },
            ],
          },
          twist: { es: 'Llueve mucho de repente. Made te da una hoja de banana. ¿Para qué?', en: 'It suddenly rains a lot. Made gives you a banana leaf. What for?' },
          questions: [
            { q: { es: '¿Comes arroz?', en: 'Do you eat rice?' }, help: { es: 'Sí, todos los días. / A veces.', en: 'Yes, every day. / Sometimes.' }, follow: [{ es: '¿Con qué?', en: 'With what?' }, { es: '¿Quién cocina?', en: 'Who cooks?' }] },
            { q: { es: '¿Te gusta el campo?', en: 'Do you like the countryside?' }, help: { es: 'Sí. / No, prefiero la ciudad.', en: 'Yes. / No, I prefer the city.' }, follow: [{ es: '¿Vas al campo?', en: 'Do you go to the countryside?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Llueve mucho en tu país?', en: 'Does it rain a lot in your country?' }, help: { es: 'Sí. / No, poco.', en: 'Yes. / No, a little.' }, follow: [{ es: '¿En qué mes?', en: 'In which month?' }, { es: '¿Usas paraguas?', en: 'Do you use an umbrella?' }] },
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es el…', en: 'My favourite colour is…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tu ropa es de ese color?', en: 'Are your clothes that colour?' }] },
          ],
          words: [{ es: 'el arroz', en: 'rice' }, { es: 'el campo', en: 'the field' }, { es: 'verde', en: 'green' }, { es: 'el barro', en: 'mud' }, { es: 'llover', en: 'to rain' }],
        },
        A1: {
          scene: { es: 'En Bali el arroz se cultiva en terrazas desde hace más de mil años. El agua baja de la montaña por canales y pasa de un campo a otro. Los agricultores se organizan en grupos llamados «subak» y deciden juntos cuándo usar el agua. Made tiene un campo pequeño que era de su abuelo. Hoy recoge el arroz con su mujer.', en: 'In Bali rice has been grown on terraces for more than a thousand years. Water comes down the mountain through channels and passes from one field to another. Farmers organise themselves in groups called “subak” and decide together when to use the water. Made has a small field that belonged to his grandfather. Today he is harvesting rice with his wife.' },
          opener: { es: 'El agua es de todos, no es mía. Si yo uso demasiada, mi vecino de abajo no tiene. Por eso hablamos mucho en el subak, cada mes. Y antes de plantar, llevamos una ofrenda al templo del agua. Aquí el arroz no es solo comida: es casi una persona de la familia. ¿En tu país hay algo así de importante?', en: 'The water belongs to everyone, it’s not mine. If I use too much, my neighbour below has none. That’s why we talk a lot in the subak, every month. And before planting, we take an offering to the water temple. Here rice isn’t just food: it’s almost a family member. In your country is there something that important?' },
          decide: {
            ask: { es: '¿Cómo ayudas a Made?', en: 'How do you help Made?' },
            options: [
              { say: { es: 'Corto el arroz con él.', en: 'I cut the rice with him.' }, then: { es: 'Usas una hoz pequeña. Después de una hora te duele la espalda. Made ríe.', en: 'You use a small sickle. After an hour your back hurts. Made laughs.' } },
              { say: { es: 'Llevo el arroz en cestas.', en: 'I carry the rice in baskets.' }, then: { es: 'Las cestas pesan mucho. La mujer de Made lleva dos a la vez, en la cabeza.', en: 'The baskets are very heavy. Made’s wife carries two at once, on her head.' } },
              { say: { es: 'Asusto a los pájaros.', en: 'I scare the birds.' }, then: { es: 'Mueves unas cuerdas con latas. Hacen mucho ruido y los pájaros se van.', en: 'You pull some ropes with cans. They make a lot of noise and the birds fly away.' } },
            ],
          },
          twist: { es: 'Llega un autobús de turistas. Todos quieren fotos en el campo y pisan el arroz. ¿Qué dice Made?', en: 'A tourist bus arrives. Everyone wants photos in the field and they step on the rice. What does Made say?' },
          questions: [
            { q: { es: '¿Qué comida es muy importante en tu país?', en: 'Which food is very important in your country?' }, help: { es: 'En mi país es el/la…', en: 'In my country it’s…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿La comes todos los días?', en: 'Do you eat it every day?' }] },
            { q: { es: '¿Compartes algo con tus vecinos?', en: 'Do you share something with your neighbours?' }, help: { es: 'Sí, el/la… / No.', en: 'Yes, the… / No.' }, follow: [{ es: '¿Hay problemas?', en: 'Are there problems?' }, { es: '¿Cómo se organizan?', en: 'How do you organise it?' }] },
            { q: { es: '¿Trabajaste alguna vez en el campo?', en: 'Have you ever worked in the fields?' }, help: { es: 'Sí, con mi… / No, nunca.', en: 'Yes, with my… / No, never.' }, follow: [{ es: '¿Fue duro?', en: 'Was it hard?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Qué tienes de tus abuelos?', en: 'What do you have from your grandparents?' }, help: { es: 'Tengo su… / Nada.', en: 'I have their… / Nothing.' }, follow: [{ es: '¿Dónde está?', en: 'Where is it?' }, { es: '¿Lo usas?', en: 'Do you use it?' }] },
          ],
          words: [{ es: 'cultivar', en: 'to grow' }, { es: 'el canal', en: 'the channel' }, { es: 'la ofrenda', en: 'the offering' }, { es: 'la cesta', en: 'the basket' }, { es: 'la hoz', en: 'the sickle' }],
        },
        A2: {
          scene: { es: 'Un empresario quiere comprar el campo de Made para construir un hotel con piscina y vista a las terrazas. Le ofrece más dinero del que Made ganaría en treinta años de arroz. Muchos vecinos ya vendieron: donde antes había campos, ahora hay villas y cafés para turistas. Pero si Made vende, el agua del subak cambia de camino y los campos de abajo pueden quedarse secos.', en: 'A businessman wants to buy Made’s field to build a hotel with a pool overlooking the terraces. He offers more money than Made would earn in thirty years of rice. Many neighbours have already sold: where there were fields, now there are villas and cafés for tourists. But if Made sells, the subak water changes course and the fields below could dry up.' },
          opener: { es: 'Mi hijo trabaja en un hotel en Seminyak y gana más que yo. Mi hija quiere estudiar en Yakarta, y eso cuesta mucho. Con ese dinero, todo sería fácil. Pero mi vecino Nyoman, que está abajo, depende de mi agua. Si vendo, él también tendrá que vender. Y los turistas vienen a ver los campos… ¿qué verán cuando solo haya hoteles? ¿Tú venderías?', en: 'My son works at a hotel in Seminyak and earns more than me. My daughter wants to study in Jakarta, and that costs a lot. With that money, everything would be easy. But my neighbour Nyoman, who is below, depends on my water. If I sell, he’ll have to sell too. And tourists come to see the fields… what will they see when there are only hotels? Would you sell?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Made?', en: 'What do you advise Made?' },
            options: [
              { say: { es: 'No vender y abrir una casa de huéspedes pequeña.', en: 'Not sell and open a small guesthouse.' }, then: { es: 'Los turistas duermen en su casa y ayudan en el campo. Gana menos que con el hotel, pero el agua sigue igual.', en: 'Tourists sleep in his house and help in the field. He earns less than with the hotel, but the water stays the same.' } },
              { say: { es: 'Vender, pero exigir que el agua siga pasando.', en: 'Sell, but demand the water keeps flowing.' }, then: { es: 'El empresario acepta en el contrato. Dos años después, la piscina del hotel usa más agua de la prometida.', en: 'The businessman accepts in the contract. Two years later, the hotel pool uses more water than promised.' } },
              { say: { es: 'Hablar primero con todo el subak.', en: 'Talk to the whole subak first.' }, then: { es: 'El subak decide pedir ayuda al gobierno para proteger las terrazas. Tarda, pero llega una pequeña ayuda.', en: 'The subak decides to ask the government for help to protect the terraces. It takes time, but a small grant arrives.' } },
            ],
          },
          twist: { es: 'La hija de Made le dice: «Papá, no vendas por mí. Puedo estudiar en Denpasar». ¿Cambia eso la decisión?', en: 'Made’s daughter tells him: “Dad, don’t sell for me. I can study in Denpasar.” Does that change the decision?' },
          questions: [
            { q: { es: '¿Venderías la tierra de tu familia?', en: 'Would you sell your family’s land?' }, help: { es: 'Sí, si… / Nunca, porque…', en: 'Yes, if… / Never, because…' }, follow: [{ es: '¿Por cuánto?', en: 'For how much?' }, { es: '¿Qué diría tu familia?', en: 'What would your family say?' }] },
            { q: { es: '¿El turismo cambió algún lugar que conoces?', en: 'Has tourism changed a place you know?' }, help: { es: 'Sí, el pueblo de… antes era… / No.', en: 'Yes,… used to be… / No.' }, follow: [{ es: '¿Para bien o para mal?', en: 'For better or worse?' }, { es: '¿Volverías?', en: 'Would you go back?' }] },
            { q: { es: '¿Tus decisiones afectan a tus vecinos?', en: 'Do your decisions affect your neighbours?' }, help: { es: 'Sí, por ejemplo… / No mucho.', en: 'Yes, for example… / Not much.' }, follow: [{ es: '¿Lo piensas antes?', en: 'Do you think about it first?' }, { es: '¿Y al revés?', en: 'And the other way round?' }] },
            { q: { es: '¿Los padres deben sacrificarse por los estudios de los hijos?', en: 'Should parents make sacrifices for their children’s studies?' }, help: { es: 'Sí, pero… / No siempre, porque…', en: 'Yes, but… / Not always, because…' }, follow: [{ es: '¿Tus padres lo hicieron?', en: 'Did your parents?' }, { es: '¿Tú lo harías?', en: 'Would you?' }] },
          ],
          words: [{ es: 'el empresario', en: 'the businessman' }, { es: 'la villa', en: 'the villa' }, { es: 'secarse', en: 'to dry up' }, { es: 'exigir', en: 'to demand' }, { es: 'depender de', en: 'to depend on' }],
        },
        B1: {
          scene: { es: 'El sistema subak es Patrimonio de la Humanidad desde 2012: la UNESCO lo reconoció como un ejemplo de cómo la religión, la naturaleza y la comunidad pueden organizar el agua de forma justa. Pero ese reconocimiento atrajo todavía más turistas, y con ellos más hoteles, más pozos y menos agua para el arroz. Muchos jóvenes balineses no quieren ser agricultores. Made, como jefe de su subak, tiene que hablar en una reunión con funcionarios de Yakarta y de la UNESCO.', en: 'The subak system has been a World Heritage Site since 2012: UNESCO recognised it as an example of how religion, nature and community can organise water fairly. But that recognition attracted even more tourists, and with them more hotels, more wells and less water for rice. Many young Balinese don’t want to be farmers. Made, as head of his subak, has to speak at a meeting with officials from Jakarta and UNESCO.' },
          opener: { es: 'Nos dieron una placa que dice que somos patrimonio de la humanidad. Muy bonito. Pero la placa no planta arroz. Los turistas pagan una entrada para ver nuestras terrazas, y ese dinero va a una empresa de la ciudad, no a los agricultores. Mientras tanto, nosotros ganamos tan poco que nuestros hijos se van. Si nadie trabaja el campo, dentro de veinte años la UNESCO protegerá un paisaje vacío. ¿Sirve de algo proteger un paisaje si no se protege a la gente que lo hace posible?', en: 'They gave us a plaque saying we’re a world heritage site. Very nice. But the plaque doesn’t plant rice. Tourists pay an entry fee to see our terraces, and that money goes to a city company, not to the farmers. Meanwhile, we earn so little that our children leave. If nobody works the fields, in twenty years UNESCO will be protecting an empty landscape. Is it any use protecting a landscape if you don’t protect the people who make it possible?' },
          decide: {
            ask: { es: '¿Qué pide Made en la reunión?', en: 'What does Made ask for at the meeting?' },
            options: [
              { say: { es: 'Que una parte de las entradas vaya a los agricultores.', en: 'That part of the entry fees goes to the farmers.' }, then: { es: 'Se aprueba el diez por ciento. No es mucho, pero por primera vez el turismo paga el arroz.', en: 'Ten per cent is approved. It’s not much, but for the first time tourism pays for the rice.' } },
              { say: { es: 'Prohibir nuevos hoteles cerca de las terrazas.', en: 'Ban new hotels near the terraces.' }, then: { es: 'El gobierno local duda: los hoteles pagan muchos impuestos. Se aprueba una zona protegida pequeña.', en: 'The local government hesitates: hotels pay a lot of taxes. A small protected zone is approved.' } },
              { say: { es: 'Becas para jóvenes que estudien agricultura y se queden.', en: 'Scholarships for young people who study agriculture and stay.' }, then: { es: 'Veinte jóvenes aceptan. Uno de ellos crea una aplicación para medir el agua del subak.', en: 'Twenty young people accept. One of them creates an app to measure the subak’s water.' } },
            ],
          },
          twist: { es: 'Un funcionario propone pagar a los agricultores un sueldo fijo por «mantener el paisaje», aunque no vendan arroz. Algunos aceptan encantados; Made siente que eso los convierte en actores de un decorado. ¿Es una buena solución?', en: 'An official proposes paying farmers a fixed salary to “maintain the landscape”, even if they don’t sell rice. Some gladly accept; Made feels it turns them into actors on a stage set. Is it a good solution?' },
          questions: [
            { q: { es: '¿Para qué sirve declarar algo «patrimonio de la humanidad»?', en: 'What is the point of declaring something a “world heritage site”?' }, help: { es: 'Sirve para… pero también…', en: 'It helps to… but also…' }, follow: [{ es: '¿Conoces uno?', en: 'Do you know one?' }, { es: '¿Lo mejoró o lo empeoró?', en: 'Did it improve it or make it worse?' }] },
            { q: { es: '¿Quién debería beneficiarse del turismo en un lugar?', en: 'Who should benefit from tourism in a place?' }, help: { es: 'Sobre todo la gente que…', en: 'Mainly the people who…' }, follow: [{ es: '¿Pasa así en tu país?', en: 'Is it like that in your country?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Pagarías más por un producto si sabes que mantiene un paisaje?', en: 'Would you pay more for a product if you knew it kept a landscape alive?' }, help: { es: 'Sí, por ejemplo… / Depende de…', en: 'Yes, for example… / It depends on…' }, follow: [{ es: '¿Lo haces ya?', en: 'Do you already?' }, { es: '¿Qué producto?', en: 'Which product?' }] },
            { q: { es: '¿Es digno cobrar por «mantener un paisaje»?', en: 'Is it dignified to be paid to “maintain a landscape”?' }, help: { es: 'Sí, porque es un trabajo… / No del todo, porque…', en: 'Yes, because it’s a job… / Not entirely, because…' }, follow: [{ es: '¿Lo aceptarías?', en: 'Would you accept it?' }, { es: '¿Qué otra solución ves?', en: 'What other solution do you see?' }] },
          ],
          words: [{ es: 'el pozo', en: 'the well' }, { es: 'la placa', en: 'the plaque' }, { es: 'la beca', en: 'the scholarship' }, { es: 'el funcionario', en: 'the official' }, { es: 'el paisaje', en: 'the landscape' }],
        },
      },
    },
    // ------------------------------------------------------------ the offerings
    {
      id: 'ofrendas',
      name: { es: 'Las ofrendas de cada mañana', en: 'The morning offerings' },
      who: { name: 'Ketut', role: { es: 'vendedora de ofrendas', en: 'offering maker' } },
      levels: {
        A0: {
          scene: { es: 'Es la mañana. En la calle hay cestas pequeñas de hojas con flores, arroz e incienso. Están en el suelo, en las puertas. Ketut hace las cestas. Tiene muchas flores.', en: 'It is morning. In the street there are small leaf baskets with flowers, rice and incense. They are on the ground, at the doors. Ketut makes the baskets. She has lots of flowers.' },
          opener: { es: 'Buenos días. Esto es una ofrenda. ¿Quieres hacer una?', en: 'Good morning. This is an offering. Do you want to make one?' },
          decide: {
            ask: { es: '¿Qué flor pones?', en: 'Which flower do you put in?' },
            options: [
              { say: { es: 'Una flor roja.', en: 'A red flower.' }, then: { es: 'Ketut dice: «Muy bien. El rojo va al sur».', en: 'Ketut says: “Very good. Red goes to the south.”' } },
              { say: { es: 'Una flor blanca.', en: 'A white flower.' }, then: { es: 'Ketut dice: «El blanco va al este». ¡Qué bonito!', en: 'Ketut says: “White goes to the east.” How pretty!' } },
              { say: { es: 'Muchas flores.', en: 'Lots of flowers.' }, then: { es: 'Tu ofrenda es muy grande. Ketut ríe: «¡Es para un rey!».', en: 'Your offering is very big. Ketut laughs: “It is for a king!”' } },
            ],
          },
          twist: { es: 'Caminas por la calle. Hay una ofrenda en el suelo. ¿La pisas?', en: 'You walk down the street. There is an offering on the ground. Do you step on it?' },
          questions: [
            { q: { es: '¿Te gustan las flores?', en: 'Do you like flowers?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Compras flores?', en: 'Do you buy flowers?' }] },
            { q: { es: '¿Haces algo todas las mañanas?', en: 'Do you do something every morning?' }, help: { es: 'Sí, tomo café / corro…', en: 'Yes, I have coffee / I run…' }, follow: [{ es: '¿A qué hora?', en: 'At what time?' }, { es: '¿Solo/a?', en: 'Alone?' }] },
            { q: { es: '¿Te gusta hacer cosas con las manos?', en: 'Do you like making things with your hands?' }, help: { es: 'Sí, cocino / dibujo… / No.', en: 'Yes, I cook / draw… / No.' }, follow: [{ es: '¿Qué haces?', en: 'What do you make?' }, { es: '¿Es fácil?', en: 'Is it easy?' }] },
            { q: { es: '¿Usas incienso o velas en casa?', en: 'Do you use incense or candles at home?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Te gusta el olor?', en: 'Do you like the smell?' }] },
          ],
          words: [{ es: 'la ofrenda', en: 'the offering' }, { es: 'la flor', en: 'the flower' }, { es: 'el incienso', en: 'incense' }, { es: 'la hoja', en: 'the leaf' }, { es: 'pisar', en: 'to step on' }],
        },
        A1: {
          scene: { es: 'En Bali la mayoría de la gente es hindú, no musulmana como en el resto de Indonesia. Cada mañana, las mujeres dejan pequeñas ofrendas llamadas «canang» en las casas, las tiendas, los coches y hasta en los cajeros automáticos. Son para dar las gracias y mantener el equilibrio entre el bien y el mal. Ketut hace cien ofrendas al día para vender en el mercado.', en: 'In Bali most people are Hindu, not Muslim like in the rest of Indonesia. Every morning, women leave small offerings called “canang” at houses, shops, cars and even cash machines. They are to give thanks and keep the balance between good and evil. Ketut makes a hundred offerings a day to sell at the market.' },
          opener: { es: 'Antes, todas las mujeres hacían sus propias ofrendas en casa. Hoy muchas trabajan en hoteles o en oficinas y no tienen tiempo, así que me las compran a mí. Tardo un minuto en hacer cada una: hoja de palma, flores de cuatro colores, un poco de arroz y una galleta. Arriba, el incienso. ¿Tú tienes algún pequeño ritual cada día?', en: 'Before, every woman made her own offerings at home. Today many work in hotels or offices and don’t have time, so they buy them from me. It takes me a minute to make each one: palm leaf, flowers in four colours, a little rice and a biscuit. On top, the incense. Do you have a small daily ritual?' },
          decide: {
            ask: { es: '¿Qué haces con Ketut?', en: 'What do you do with Ketut?' },
            options: [
              { say: { es: 'Hago una ofrenda con ella.', en: 'I make an offering with her.' }, then: { es: 'Tardas diez minutos. Está un poco torcida, pero Ketut la pone en la puerta de su casa.', en: 'It takes you ten minutes. It’s a bit crooked, but Ketut puts it at her front door.' } },
              { say: { es: 'La acompaño a dejar las ofrendas.', en: 'I go with her to leave the offerings.' }, then: { es: 'Ketut deja una en el motor de un coche y otra en una tienda de teléfonos.', en: 'Ketut leaves one on a car engine and another in a phone shop.' } },
              { say: { es: 'Le pregunto qué significan los colores.', en: 'I ask her what the colours mean.' }, then: { es: 'Cada color es un dios y una dirección: blanco al este, rojo al sur, amarillo al oeste, azul o verde al norte.', en: 'Each colour is a god and a direction: white east, red south, yellow west, blue or green north.' } },
            ],
          },
          twist: { es: 'Un perro del barrio se come la galleta de una ofrenda. Ketut no se enfada. ¿Por qué crees que no se enfada?', en: 'A neighbourhood dog eats the biscuit from an offering. Ketut doesn’t get angry. Why do you think she doesn’t?' },
          questions: [
            { q: { es: '¿Tienes un pequeño ritual cada día?', en: 'Do you have a small daily ritual?' }, help: { es: 'Sí, siempre… / No, no tengo.', en: 'Yes, I always… / No, I don’t.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Por qué lo haces?', en: 'Why do you do it?' }] },
            { q: { es: '¿Cuál es la religión principal en tu país?', en: 'What is the main religion in your country?' }, help: { es: 'La mayoría es… pero también…', en: 'Most are… but also…' }, follow: [{ es: '¿Hay fiestas religiosas?', en: 'Are there religious festivals?' }, { es: '¿Las celebras?', en: 'Do you celebrate them?' }] },
            { q: { es: '¿Compras cosas que antes se hacían en casa?', en: 'Do you buy things that used to be made at home?' }, help: { es: 'Sí, compro… / No, hago…', en: 'Yes, I buy… / No, I make…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Te gustaría hacerlas?', en: 'Would you like to make them?' }] },
            { q: { es: '¿Das las gracias por algo cada día?', en: 'Do you give thanks for something every day?' }, help: { es: 'Sí, por… / No mucho.', en: 'Yes, for… / Not much.' }, follow: [{ es: '¿A quién?', en: 'To whom?' }, { es: '¿Cómo?', en: 'How?' }] },
          ],
          words: [{ es: 'hindú', en: 'Hindu' }, { es: 'el ritual', en: 'the ritual' }, { es: 'el equilibrio', en: 'balance' }, { es: 'el cajero automático', en: 'the cash machine' }, { es: 'torcido', en: 'crooked' }],
        },
        A2: {
          scene: { es: 'Cada día se tiran en Bali miles de ofrendas con plástico: muchas vendedoras usan grapas, bolsas y flores de plástico porque son más baratas y duran más. La basura llega a los ríos y al mar. Un grupo ecologista le pide a Ketut que vuelva a hacer solo ofrendas naturales, con hojas y palillos de bambú. Pero así tarda el doble y tendría que subir el precio.', en: 'Every day thousands of offerings containing plastic are thrown away in Bali: many sellers use staples, bags and plastic flowers because they’re cheaper and last longer. The rubbish reaches rivers and the sea. An environmental group asks Ketut to go back to making only natural offerings, with leaves and bamboo pins. But that way it takes twice as long and she’d have to raise the price.' },
          opener: { es: 'Mi madre nunca usó plástico; no existía. Yo empecé a usar grapas porque las clientas querían ofrendas más baratas. Si subo el precio, se van a otra vendedora. Si sigo con plástico, ensucio la isla que quiero. Las ofrendas son para mantener el equilibrio con la naturaleza… y ahora la dañan. Es casi una broma. ¿Tú qué harías?', en: 'My mother never used plastic; it didn’t exist. I started using staples because customers wanted cheaper offerings. If I raise the price, they’ll go to another seller. If I keep using plastic, I’m dirtying the island I love. Offerings are meant to keep balance with nature… and now they harm it. It’s almost a joke. What would you do?' },
          decide: {
            ask: { es: '¿Qué decide Ketut?', en: 'What does Ketut decide?' },
            options: [
              { say: { es: 'Volver a lo natural y explicar el precio.', en: 'Go back to natural and explain the price.' }, then: { es: 'Pierde algunas clientas, pero el sacerdote del templo la recomienda a todo el pueblo.', en: 'She loses some customers, but the temple priest recommends her to the whole village.' } },
              { say: { es: 'Convencer a las otras vendedoras de cambiar juntas.', en: 'Convince the other sellers to change together.' }, then: { es: 'Siete vendedoras aceptan. Como todas suben el precio, nadie pierde clientas.', en: 'Seven sellers agree. As they all raise their prices, nobody loses customers.' } },
              { say: { es: 'Hacer dos tipos de ofrendas.', en: 'Make two kinds of offerings.' }, then: { es: 'Al principio casi todos compran la barata. Poco a poco, la natural empieza a venderse más.', en: 'At first almost everyone buys the cheap one. Little by little, the natural one starts selling more.' } },
            ],
          },
          twist: { es: 'Una tienda de recuerdos quiere venderles a los turistas ofrendas de plástico permanentes «como decoración». Le ofrece a Ketut un buen pedido. ¿Acepta?', en: 'A souvenir shop wants to sell tourists permanent plastic offerings “as decoration”. It offers Ketut a big order. Does she accept?' },
          questions: [
            { q: { es: '¿Usas mucho plástico en tu vida diaria?', en: 'Do you use a lot of plastic in daily life?' }, help: { es: 'Sí, sobre todo… / Intento usar poco.', en: 'Yes, especially… / I try to use little.' }, follow: [{ es: '¿Qué podrías cambiar?', en: 'What could you change?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Pagarías más por algo ecológico?', en: 'Would you pay more for something eco-friendly?' }, help: { es: 'Sí, si… / No siempre, porque…', en: 'Yes, if… / Not always, because…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Cuánto más?', en: 'How much more?' }] },
            { q: { es: '¿Es más fácil cambiar solo o en grupo?', en: 'Is it easier to change alone or in a group?' }, help: { es: 'En grupo, porque… / Solo, porque…', en: 'In a group, because… / Alone, because…' }, follow: [{ es: '¿Te pasó?', en: 'Has it happened to you?' }, { es: '¿Funcionó?', en: 'Did it work?' }] },
            { q: { es: '¿Es correcto vender objetos religiosos como recuerdos?', en: 'Is it right to sell religious objects as souvenirs?' }, help: { es: 'Creo que sí/no, porque…', en: 'I think so/not, because…' }, follow: [{ es: '¿Compraste alguno?', en: 'Have you bought one?' }, { es: '¿Dónde lo tienes?', en: 'Where do you keep it?' }] },
          ],
          words: [{ es: 'la grapa', en: 'the staple' }, { es: 'el palillo', en: 'the pin / small stick' }, { es: 'ensuciar', en: 'to dirty' }, { es: 'el pedido', en: 'the order' }, { es: 'ecologista', en: 'environmental' }],
        },
        B1: {
          scene: { es: 'Bali recibe más de cinco millones de turistas extranjeros al año. Muchos vienen atraídos por su espiritualidad: templos, ceremonias, ofrendas, yoga. Algunos visitantes participan con respeto; otros entran en templos en bañador, se sacan fotos sobre árboles sagrados o se hacen tatuajes con símbolos religiosos sin saber qué significan. El gobierno de Bali estudia publicar un código de conducta para turistas. Ketut participa en una reunión de mujeres del pueblo para opinar.', en: 'Bali receives more than five million foreign tourists a year. Many come attracted by its spirituality: temples, ceremonies, offerings, yoga. Some visitors take part respectfully; others enter temples in swimwear, take photos on sacred trees or get tattoos with religious symbols without knowing what they mean. The Bali government is considering publishing a code of conduct for tourists. Ketut takes part in a meeting of village women to give her opinion.' },
          opener: { es: 'No quiero cerrar la puerta a nadie. Mi religión no es un secreto, y me encanta cuando un turista me pregunta de verdad qué significa una ofrenda. Pero hay una diferencia entre interesarse por una cultura y usarla como decorado para una foto. Mi sobrina trabaja en un centro de yoga de lujo donde los clientes pagan por una «ceremonia balinesa auténtica» que dura veinte minutos y que nadie del pueblo reconocería. ¿Dónde está la línea entre compartir una cultura y venderla?', en: 'I don’t want to close the door on anyone. My religion isn’t a secret, and I love it when a tourist genuinely asks me what an offering means. But there’s a difference between being interested in a culture and using it as a backdrop for a photo. My niece works at a luxury yoga centre where clients pay for an “authentic Balinese ceremony” that lasts twenty minutes and that nobody in the village would recognise. Where is the line between sharing a culture and selling it?' },
          decide: {
            ask: { es: '¿Qué propone Ketut para el código?', en: 'What does Ketut propose for the code?' },
            options: [
              { say: { es: 'Reglas claras y multas en los templos.', en: 'Clear rules and fines at temples.' }, then: { es: 'Se ponen carteles y guardias. Hay menos problemas, aunque algunos turistas se quejan de sentirse vigilados.', en: 'Signs and guards are put up. There are fewer problems, though some tourists complain of feeling watched.' } },
              { say: { es: 'Talleres para que los turistas aprendan con mujeres del pueblo.', en: 'Workshops for tourists to learn with village women.' }, then: { es: 'Los talleres se llenan. Las mujeres ganan dinero y los turistas entienden más.', en: 'The workshops fill up. The women earn money and tourists understand more.' } },
              { say: { es: 'Nada nuevo: educar con el ejemplo.', en: 'Nothing new: teach by example.' }, then: { es: 'Algunas mujeres creen que es muy poco. Ketut sigue explicando ofrendas a quien pregunta.', en: 'Some women think it’s too little. Ketut keeps explaining offerings to whoever asks.' } },
            ],
          },
          twist: { es: 'En la reunión, una mujer joven dice que el problema no son solo los turistas: muchos balineses también venden su cultura porque necesitan dinero. Se hace un silencio incómodo. ¿Tiene razón?', en: 'At the meeting, a young woman says the problem isn’t only the tourists: many Balinese also sell their culture because they need money. There’s an awkward silence. Is she right?' },
          questions: [
            { q: { es: '¿Dónde está la línea entre compartir una cultura y venderla?', en: 'Where is the line between sharing a culture and selling it?' }, help: { es: 'Creo que la línea está en…', en: 'I think the line is…' }, follow: [{ es: '¿Un ejemplo de tu país?', en: 'An example from your country?' }, { es: '¿Quién gana dinero?', en: 'Who makes money?' }] },
            { q: { es: '¿Hiciste alguna vez algo en un viaje que después te pareció irrespetuoso?', en: 'Have you ever done something on a trip that later seemed disrespectful to you?' }, help: { es: 'Sí, una vez… / No, que yo sepa.', en: 'Yes, once… / Not that I know of.' }, follow: [{ es: '¿Qué aprendiste?', en: 'What did you learn?' }, { es: '¿Lo harías distinto?', en: 'Would you do it differently?' }] },
            { q: { es: '¿Un código de conducta para turistas es buena idea?', en: 'Is a code of conduct for tourists a good idea?' }, help: { es: 'Sí, porque… / No funciona, porque…', en: 'Yes, because… / It doesn’t work, because…' }, follow: [{ es: '¿Qué pondrías en él?', en: 'What would you put in it?' }, { es: '¿Para tu ciudad?', en: 'For your city?' }] },
            { q: { es: '¿Qué tradición de tu país se vende a los turistas de forma falsa?', en: 'Which tradition from your country is sold to tourists in a fake way?' }, help: { es: 'Por ejemplo… que en realidad…', en: 'For example… which really…' }, follow: [{ es: '¿Te molesta?', en: 'Does it bother you?' }, { es: '¿Tiene algo bueno?', en: 'Does it have a good side?' }] },
          ],
          words: [{ es: 'la espiritualidad', en: 'spirituality' }, { es: 'el código de conducta', en: 'the code of conduct' }, { es: 'el bañador', en: 'swimwear' }, { es: 'sagrado', en: 'sacred' }, { es: 'vigilado', en: 'watched' }],
        },
      },
    },
    // ------------------------------------------------------------ the surf school
    {
      id: 'surf',
      name: { es: 'La escuela de surf de Kuta', en: 'The Kuta surf school' },
      who: { name: 'Wayan', role: { es: 'profesor de surf', en: 'surf instructor' } },
      levels: {
        A0: {
          scene: { es: 'Es una playa larga con olas. Hay muchas tablas de surf de colores. Wayan es profesor de surf. Está muy moreno y siempre sonríe.', en: 'It is a long beach with waves. There are many colourful surfboards. Wayan is a surf instructor. He is very tanned and always smiles.' },
          opener: { es: '¡Hola! ¿Surfeas? ¡Vamos! Es fácil… un poco.', en: 'Hello! Do you surf? Let’s go! It is easy… a little.' },
          decide: {
            ask: { es: '¿Qué tabla eliges?', en: 'Which board do you choose?' },
            options: [
              { say: { es: 'La tabla grande.', en: 'The big board.' }, then: { es: 'Es fácil. ¡Te pones de pie! Wayan grita: «¡Bien!».', en: 'It is easy. You stand up! Wayan shouts: “Good!”' } },
              { say: { es: 'La tabla pequeña.', en: 'The small board.' }, then: { es: 'Es difícil. Te caes al agua cinco veces.', en: 'It is hard. You fall into the water five times.' } },
              { say: { es: 'La tabla rosa.', en: 'The pink board.' }, then: { es: 'Wayan ríe: «¡Es la más bonita!».', en: 'Wayan laughs: “It is the prettiest!”' } },
            ],
          },
          twist: { es: 'Viene una ola muy grande. ¿Qué haces?', en: 'A very big wave is coming. What do you do?' },
          questions: [
            { q: { es: '¿Haces deporte en el agua?', en: 'Do you do water sports?' }, help: { es: 'Sí, nado / surfeo… / No.', en: 'Yes, I swim / surf… / No.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Desde cuándo?', en: 'Since when?' }] },
            { q: { es: '¿Te gustan las olas grandes?', en: 'Do you like big waves?' }, help: { es: 'Sí. / No, me dan miedo.', en: 'Yes. / No, they scare me.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y el mar tranquilo?', en: 'And a calm sea?' }] },
            { q: { es: '¿Te caes mucho cuando aprendes algo?', en: 'Do you fall a lot when you learn something?' }, help: { es: 'Sí, mucho. / No.', en: 'Yes, a lot. / No.' }, follow: [{ es: '¿Qué aprendes ahora?', en: 'What are you learning now?' }, { es: '¿Es difícil?', en: 'Is it hard?' }] },
            { q: { es: '¿Qué deporte quieres aprender?', en: 'Which sport do you want to learn?' }, help: { es: 'Quiero aprender…', en: 'I want to learn…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Dónde?', en: 'Where?' }] },
          ],
          words: [{ es: 'la ola', en: 'the wave' }, { es: 'la tabla', en: 'the board' }, { es: 'surfear', en: 'to surf' }, { es: 'caerse', en: 'to fall' }, { es: 'ponerse de pie', en: 'to stand up' }],
        },
        A1: {
          scene: { es: 'Kuta fue una pequeña aldea de pescadores. En los años setenta llegaron los primeros surfistas australianos y todo cambió: hoteles, bares, tiendas y miles de turistas. Wayan aprendió a surfear de niño con una tabla rota que encontró en la playa. Hoy tiene su propia escuela y enseña a turistas de todo el mundo.', en: 'Kuta was a small fishing village. In the seventies the first Australian surfers arrived and everything changed: hotels, bars, shops and thousands of tourists. Wayan learnt to surf as a child on a broken board he found on the beach. Today he has his own school and teaches tourists from all over the world.' },
          opener: { es: 'Mi padre era pescador y no sabía nadar bien: en mi familia el mar daba miedo. Yo era el loco que siempre estaba en el agua. Hoy enseño a cien alumnos por semana. Lo más difícil no es ponerse de pie en la tabla: es saber esperar la ola correcta. ¿Tú eres paciente o quieres todo rápido?', en: 'My father was a fisherman and couldn’t swim well: in my family the sea was scary. I was the crazy one who was always in the water. Today I teach a hundred students a week. The hardest part isn’t standing up on the board: it’s knowing how to wait for the right wave. Are you patient or do you want everything fast?' },
          decide: {
            ask: { es: '¿Cómo es tu primera clase?', en: 'How is your first lesson?' },
            options: [
              { say: { es: 'Practico en la arena primero.', en: 'I practise on the sand first.' }, then: { es: 'Practicas veinte minutos. En el agua te pones de pie a la tercera vez.', en: 'You practise for twenty minutes. In the water you stand up on the third try.' } },
              { say: { es: 'Voy directo al agua.', en: 'I go straight into the water.' }, then: { es: 'Bebes mucha agua salada. Wayan te lleva otra vez a la arena.', en: 'You swallow a lot of salt water. Wayan takes you back to the sand.' } },
              { say: { es: 'Miro a Wayan surfear.', en: 'I watch Wayan surf.' }, then: { es: 'Wayan coge una ola enorme y baila sobre la tabla. Todos aplauden.', en: 'Wayan catches a huge wave and dances on the board. Everyone claps.' } },
            ],
          },
          twist: { es: 'Después de la clase, ves mucho plástico en la arena. Wayan dice que todos los alumnos tienen que recoger diez cosas. ¿Lo haces?', en: 'After the lesson, you see lots of plastic on the sand. Wayan says every student has to pick up ten things. Do you do it?' },
          questions: [
            { q: { es: '¿Eres paciente?', en: 'Are you patient?' }, help: { es: 'Sí, bastante. / No, nada.', en: 'Yes, quite. / No, not at all.' }, follow: [{ es: '¿Con qué cosas?', en: 'With what things?' }, { es: '¿Y con las personas?', en: 'And with people?' }] },
            { q: { es: '¿En tu familia hay algo que da miedo?', en: 'In your family is there something that is scary?' }, help: { es: 'Sí, el/la… / No.', en: 'Yes, the… / No.' }, follow: [{ es: '¿A ti también?', en: 'To you too?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Tu ciudad cambió mucho por el turismo?', en: 'Has your city changed a lot because of tourism?' }, help: { es: 'Sí, ahora hay… / No mucho.', en: 'Yes, now there are… / Not much.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué extrañas?', en: 'What do you miss?' }] },
            { q: { es: '¿Aprendiste algo solo, sin profesor?', en: 'Have you learnt something on your own, without a teacher?' }, help: { es: 'Sí, a… / No.', en: 'Yes, to… / No.' }, follow: [{ es: '¿Cómo?', en: 'How?' }, { es: '¿Fue difícil?', en: 'Was it hard?' }] },
          ],
          words: [{ es: 'la aldea', en: 'the village' }, { es: 'el surfista', en: 'the surfer' }, { es: 'esperar', en: 'to wait' }, { es: 'paciente', en: 'patient' }, { es: 'la arena', en: 'the sand' }],
        },
        A2: {
          scene: { es: 'En la estación de lluvias, los ríos y el mar llevan toneladas de plástico a la playa de Kuta. Algunas mañanas no se puede ver la arena. Los hoteles pagan a trabajadores para limpiar delante de sus edificios, pero no en el resto de la playa. La escuela de Wayan pierde alumnos: nadie quiere surfear entre botellas. Wayan piensa en mudar su escuela a otra playa más limpia, lejos de su barrio.', en: 'In the rainy season, rivers and the sea carry tonnes of plastic onto Kuta beach. Some mornings you can’t see the sand. Hotels pay workers to clean in front of their buildings, but not the rest of the beach. Wayan’s school is losing students: nobody wants to surf among bottles. Wayan is thinking of moving his school to another, cleaner beach, far from his neighbourhood.' },
          opener: { es: 'Esta playa me lo dio todo. Si me voy, ¿quién la cuida? Pero cada semana tengo menos alumnos, y tengo cuatro empleados con familia. En la otra playa hay olas buenas y agua limpia, pero es de un hotel de lujo que me cobraría mucho por el permiso. Algunos amigos quieren organizar limpiezas todos los días, gratis. ¿Tú qué harías en mi lugar?', en: 'This beach gave me everything. If I leave, who looks after it? But every week I have fewer students, and I have four employees with families. On the other beach there are good waves and clean water, but it belongs to a luxury hotel that would charge me a lot for the permit. Some friends want to organise clean-ups every day, for free. What would you do in my place?' },
          decide: {
            ask: { es: '¿Qué hace Wayan?', en: 'What does Wayan do?' },
            options: [
              { say: { es: 'Quedarse y organizar limpiezas con los alumnos.', en: 'Stay and organise clean-ups with students.' }, then: { es: 'Las limpiezas se hacen populares en las redes. Algunos alumnos vienen solo para limpiar.', en: 'The clean-ups become popular online. Some students come just to clean.' } },
              { say: { es: 'Mudarse a la playa limpia.', en: 'Move to the clean beach.' }, then: { es: 'Gana más alumnos, pero paga mucho al hotel. Echa de menos a sus vecinos.', en: 'He gets more students, but pays the hotel a lot. He misses his neighbours.' } },
              { say: { es: 'Pedir a los hoteles que paguen la limpieza de toda la playa.', en: 'Ask the hotels to pay for cleaning the whole beach.' }, then: { es: 'Tres hoteles aceptan. Los demás dicen que no es su problema.', en: 'Three hotels agree. The rest say it’s not their problem.' } },
            ],
          },
          twist: { es: 'Wayan descubre que mucho del plástico viene de pueblos río arriba, donde no hay recogida de basura. Limpiar la playa no basta. ¿Qué más se puede hacer?', en: 'Wayan discovers that much of the plastic comes from villages upriver, where there’s no rubbish collection. Cleaning the beach isn’t enough. What else can be done?' },
          questions: [
            { q: { es: '¿Viste una playa o un río muy sucio?', en: 'Have you seen a very dirty beach or river?' }, help: { es: 'Sí, en… / No.', en: 'Yes, in… / No.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Volviste?', en: 'Did you go back?' }] },
            { q: { es: '¿Te irías de tu barrio por trabajo?', en: 'Would you leave your neighbourhood for work?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Ya lo hiciste?', en: 'Have you already?' }, { es: '¿Qué extrañarías?', en: 'What would you miss?' }] },
            { q: { es: '¿Quién debería limpiar los lugares públicos?', en: 'Who should clean public places?' }, help: { es: 'El ayuntamiento / las empresas / todos…', en: 'The council / companies / everyone…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tú ayudas?', en: 'Do you help?' }] },
            { q: { es: '¿Hay recogida de basura en todos los lugares de tu país?', en: 'Is there rubbish collection everywhere in your country?' }, help: { es: 'En las ciudades sí, pero en… / Sí.', en: 'In cities yes, but in… / Yes.' }, follow: [{ es: '¿Qué hace la gente sin recogida?', en: 'What do people do without collection?' }, { es: '¿Se recicla?', en: 'Is it recycled?' }] },
          ],
          words: [{ es: 'la estación de lluvias', en: 'the rainy season' }, { es: 'la tonelada', en: 'the tonne' }, { es: 'mudar', en: 'to move' }, { es: 'el permiso', en: 'the permit' }, { es: 'río arriba', en: 'upriver' }],
        },
        B1: {
          scene: { es: 'Muchos extranjeros llegan a Bali con visado de turista y se quedan a vivir y trabajar: abren escuelas de surf, cafés, centros de yoga o trabajan por internet. Algunos lo hacen legalmente; otros, no. Los balineses que tienen negocios similares dicen que no pueden competir con extranjeros que tienen más dinero y contactos internacionales. Un surfista australiano abre una escuela de surf moderna justo al lado de la de Wayan, con precios más bajos y un video promocional espectacular.', en: 'Many foreigners arrive in Bali on tourist visas and stay to live and work: they open surf schools, cafés, yoga centres or work online. Some do it legally; others don’t. Balinese people with similar businesses say they can’t compete with foreigners who have more money and international contacts. An Australian surfer opens a modern surf school right next to Wayan’s, with lower prices and a spectacular promotional video.' },
          opener: { es: 'Fueron los australianos los que trajeron el surf aquí, y les estoy agradecido: sin ellos yo no tendría este trabajo. Pero ahora siento que juego un partido con reglas distintas. Él puede bajar precios porque tiene dinero de su país; yo vivo de esto. Y muchos clientes prefieren aprender con alguien que habla su idioma y se parece a ellos. No quiero odiar a nadie, pero tampoco quiero desaparecer en mi propia playa. ¿Qué es justo cuando alguien de fuera compite con los de dentro?', en: 'It was Australians who brought surfing here, and I’m grateful to them: without them I wouldn’t have this job. But now I feel I’m playing a match with different rules. He can lower prices because he has money from his country; I live off this. And many customers prefer to learn with someone who speaks their language and looks like them. I don’t want to hate anyone, but I don’t want to disappear on my own beach either. What is fair when an outsider competes with locals?' },
          decide: {
            ask: { es: '¿Qué hace Wayan?', en: 'What does Wayan do?' },
            options: [
              { say: { es: 'Proponer al australiano trabajar juntos.', en: 'Propose working together to the Australian.' }, then: { es: 'Crean una escuela con profesores balineses y extranjeros. Discuten a menudo, pero el negocio crece.', en: 'They set up a school with Balinese and foreign instructors. They argue often, but the business grows.' } },
              { say: { es: 'Pedir al gobierno que controle los permisos de trabajo.', en: 'Ask the government to check work permits.' }, then: { es: 'Descubren que el australiano no tenía permiso. Cierra. Wayan se siente aliviado y un poco culpable.', en: 'They discover the Australian had no permit. He closes. Wayan feels relieved and a bit guilty.' } },
              { say: { es: 'Contar su historia: el niño con la tabla rota.', en: 'Tell his story: the boy with the broken board.' }, then: { es: 'Su video sencillo tiene más visitas que el espectacular. Los clientes quieren aprender con «el chico de la tabla rota».', en: 'His simple video gets more views than the spectacular one. Customers want to learn with “the broken-board kid”.' } },
            ],
          },
          twist: { es: 'Uno de los mejores profesores de Wayan se va a trabajar con el australiano, porque le paga el doble. Le dice: «No es personal, tengo que pagar la escuela de mis hijos». ¿Puede Wayan reprochárselo?', en: 'One of Wayan’s best instructors leaves to work for the Australian, because he pays double. He tells him: “It’s not personal, I have to pay for my kids’ school.” Can Wayan blame him?' },
          questions: [
            { q: { es: '¿Es justo que extranjeros abran negocios que compiten con los locales?', en: 'Is it fair for foreigners to open businesses that compete with locals?' }, help: { es: 'Sí, si… / Depende de…', en: 'Yes, if… / It depends on…' }, follow: [{ es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }, { es: '¿Qué reglas pondrías?', en: 'What rules would you set?' }] },
            { q: { es: '¿Trabajarías en otro país sin los papeles en regla?', en: 'Would you work in another country without the right papers?' }, help: { es: 'No, porque… / Quizás, si…', en: 'No, because… / Maybe, if…' }, follow: [{ es: '¿Conoces a alguien así?', en: 'Do you know someone like that?' }, { es: '¿Qué riesgos tiene?', en: 'What are the risks?' }] },
            { q: { es: '¿Cambiarías de trabajo por el doble de sueldo, aunque dejaras a un amigo?', en: 'Would you change jobs for double the salary, even if you left a friend?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Se lo dirías antes?', en: 'Would you tell them first?' }, { es: '¿Te pasó?', en: 'Has it happened to you?' }] },
            { q: { es: '¿Una historia personal vende más que un buen video?', en: 'Does a personal story sell more than a good video?' }, help: { es: 'Creo que sí, porque… / No siempre…', en: 'I think so, because… / Not always…' }, follow: [{ es: '¿Un ejemplo que te convenció?', en: 'An example that convinced you?' }, { es: '¿Cuál sería tu historia?', en: 'What would your story be?' }] },
          ],
          words: [{ es: 'el visado', en: 'the visa' }, { es: 'competir', en: 'to compete' }, { es: 'agradecido', en: 'grateful' }, { es: 'aliviado', en: 'relieved' }, { es: 'reprochar', en: 'to reproach / blame' }],
        },
      },
    },
    // ------------------------------------------------------------ the Day of Silence
    {
      id: 'nyepi',
      name: { es: 'Nyepi, el día del silencio', en: 'Nyepi, the Day of Silence' },
      who: { name: 'Nyoman', role: { es: 'vecino del pueblo', en: 'village resident' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche. Hay muñecos gigantes en la calle. Son monstruos de papel. La gente toca tambores. Nyoman lleva un monstruo con sus amigos.', en: 'It is night. There are giant dolls in the street. They are paper monsters. People play drums. Nyoman carries a monster with his friends.' },
          opener: { es: '¡Hola! Mañana es Nyepi. Hoy hay fiesta. ¡Mira mi monstruo!', en: 'Hello! Tomorrow is Nyepi. Today there is a party. Look at my monster!' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Llevo el monstruo.', en: 'I carry the monster.' }, then: { es: '¡Pesa mucho! Todos gritan y bailan.', en: 'It is very heavy! Everyone shouts and dances.' } },
              { say: { es: 'Toco el tambor.', en: 'I play the drum.' }, then: { es: '¡Bum, bum, bum! Hace mucho ruido.', en: 'Boom, boom, boom! It is very loud.' } },
              { say: { es: 'Miro y saco fotos.', en: 'I watch and take photos.' }, then: { es: 'El monstruo tiene ojos rojos. ¡Da un poco de miedo!', en: 'The monster has red eyes. It is a bit scary!' } },
            ],
          },
          twist: { es: 'Mañana, todo el día: sin luz, sin ruido, sin salir de casa. ¿Puedes?', en: 'Tomorrow, all day: no light, no noise, no going out. Can you?' },
          questions: [
            { q: { es: '¿Te gustan las fiestas en la calle?', en: 'Do you like street parties?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Cuándo es?', en: 'When is it?' }] },
            { q: { es: '¿Te gusta el silencio?', en: 'Do you like silence?' }, help: { es: 'Sí, mucho. / No, prefiero música.', en: 'Yes, a lot. / No, I prefer music.' }, follow: [{ es: '¿Dónde hay silencio?', en: 'Where is there silence?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Tocas un instrumento?', en: 'Do you play an instrument?' }, help: { es: 'Sí, toco… / No.', en: 'Yes, I play… / No.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Te gustaría?', en: 'Would you like to?' }] },
            { q: { es: '¿Puedes estar un día sin teléfono?', en: 'Can you go a day without your phone?' }, help: { es: 'Sí. / No, imposible.', en: 'Yes. / No, impossible.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué harías?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'el monstruo', en: 'the monster' }, { es: 'el tambor', en: 'the drum' }, { es: 'el silencio', en: 'silence' }, { es: 'la fiesta', en: 'the party' }, { es: 'el ruido', en: 'noise' }],
        },
        A1: {
          scene: { es: 'Nyepi es el año nuevo balinés. La noche antes, los pueblos sacan a la calle unos monstruos gigantes de papel, los «ogoh-ogoh», para asustar a los malos espíritus, y después los queman. Al día siguiente, durante veinticuatro horas, toda la isla se queda en silencio: no se trabaja, no se viaja, no se enciende la luz y hasta el aeropuerto cierra. La idea es que los malos espíritus piensen que la isla está vacía.', en: 'Nyepi is the Balinese new year. The night before, villages parade giant paper monsters, the “ogoh-ogoh”, through the streets to scare away evil spirits, and then burn them. The next day, for twenty-four hours, the whole island goes silent: nobody works, travels or turns on lights, and even the airport closes. The idea is that the evil spirits will think the island is empty.' },
          opener: { es: 'Hicimos este monstruo en tres meses, todos los jóvenes del barrio, por las noches. Es el más feo del pueblo y estamos muy orgullosos. Mañana nadie sale de casa: ni turistas. Los hoteles cierran las cortinas y la policía del pueblo vigila las calles. Para mí es el mejor día del año: duermo, pienso, hablo con mi familia y por la noche veo todas las estrellas. ¿Tú qué harías un día entero en silencio?', en: 'We made this monster in three months, all the young people in the neighbourhood, at night. It’s the ugliest in the village and we’re very proud. Tomorrow nobody leaves the house: not even tourists. Hotels close their curtains and village police watch the streets. For me it’s the best day of the year: I sleep, think, talk with my family and at night I see all the stars. What would you do for a whole day in silence?' },
          decide: {
            ask: { es: '¿Cómo pasas el día de Nyepi?', en: 'How do you spend Nyepi?' },
            options: [
              { say: { es: 'Duermo y leo todo el día.', en: 'I sleep and read all day.' }, then: { es: 'Terminas un libro entero. Por la noche ves la Vía Láctea desde la ventana.', en: 'You finish a whole book. At night you see the Milky Way from the window.' } },
              { say: { es: 'Medito con la familia de Nyoman.', en: 'I meditate with Nyoman’s family.' }, then: { es: 'Al principio te aburres. Después de una hora, sientes una paz muy rara.', en: 'At first you’re bored. After an hour, you feel a very strange peace.' } },
              { say: { es: 'Me quedo en el hotel con wifi.', en: 'I stay in the hotel with wifi.' }, then: { es: 'En algunos lugares hasta internet está cortado. Miras el techo y escuchas a los pájaros.', en: 'In some places even the internet is cut. You stare at the ceiling and listen to the birds.' } },
            ],
          },
          twist: { es: 'A medianoche, cuando quemas el monstruo, un niño del grupo llora: no quiere que lo quemen. ¿Qué le dices?', en: 'At midnight, when you burn the monster, a child in the group cries: he doesn’t want it burnt. What do you tell him?' },
          questions: [
            { q: { es: '¿Qué harías un día entero en silencio?', en: 'What would you do for a whole day in silence?' }, help: { es: 'Dormiría / leería / pensaría…', en: 'I’d sleep / read / think…' }, follow: [{ es: '¿Sería fácil?', en: 'Would it be easy?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Cómo se celebra el año nuevo en tu país?', en: 'How is New Year celebrated in your country?' }, help: { es: 'Celebramos con… a las doce…', en: 'We celebrate with… at midnight…' }, follow: [{ es: '¿Es ruidoso?', en: 'Is it noisy?' }, { es: '¿Qué haces tú?', en: 'What do you do?' }] },
            { q: { es: '¿Hiciste algo en grupo durante meses?', en: 'Have you made something as a group over months?' }, help: { es: 'Sí, en la escuela… / No.', en: 'Yes, at school… / No.' }, follow: [{ es: '¿Qué hicieron?', en: 'What did you make?' }, { es: '¿Salió bien?', en: 'Did it turn out well?' }] },
            { q: { es: '¿Puedes ver las estrellas desde tu casa?', en: 'Can you see the stars from your home?' }, help: { es: 'Sí, muchas. / No, hay mucha luz.', en: 'Yes, many. / No, there’s too much light.' }, follow: [{ es: '¿Dónde las ves mejor?', en: 'Where do you see them best?' }, { es: '¿Te gusta mirarlas?', en: 'Do you like looking at them?' }] },
          ],
          words: [{ es: 'asustar', en: 'to scare' }, { es: 'el espíritu', en: 'the spirit' }, { es: 'quemar', en: 'to burn' }, { es: 'meditar', en: 'to meditate' }, { es: 'la paz', en: 'peace' }],
        },
        A2: {
          scene: { es: 'Este año, Nyepi coincide con el vuelo de vuelta de una familia de turistas: su avión sale exactamente ese día y el aeropuerto está cerrado. Están muy enfadados y quieren salir del hotel para ir a la playa. Nyoman trabaja como recepcionista en ese hotel. El gerente le pide que se encargue del problema.', en: 'This year, Nyepi coincides with a tourist family’s return flight: their plane leaves exactly that day and the airport is closed. They’re very angry and want to leave the hotel to go to the beach. Nyoman works as a receptionist at that hotel. The manager asks him to deal with the problem.' },
          opener: { es: 'El padre me grita que pagó mucho y que tiene derecho a salir, que él no es hindú. Yo lo entiendo: está frustrado, pierde dos días de trabajo. Pero si sale a la calle, la policía del pueblo lo devuelve, y el hotel puede tener problemas con la comunidad. Además, es nuestro día más sagrado. ¿Cómo le explico esto a alguien que solo ve un día perdido?', en: 'The father shouts that he paid a lot and has the right to go out, that he isn’t Hindu. I understand: he’s frustrated, he’s losing two days of work. But if he goes out, the village police will send him back, and the hotel could have problems with the community. Besides, it’s our holiest day. How do I explain this to someone who only sees a lost day?' },
          decide: {
            ask: { es: '¿Qué hace Nyoman?', en: 'What does Nyoman do?' },
            options: [
              { say: { es: 'Explicar con calma y ofrecer actividades dentro del hotel.', en: 'Explain calmly and offer activities inside the hotel.' }, then: { es: 'Los niños hacen un monstruo de papel pequeño. Al final, el padre pide una foto con Nyoman.', en: 'The children make a small paper monster. In the end, the father asks for a photo with Nyoman.' } },
              { say: { es: 'Llamar al gerente y no meterse.', en: 'Call the manager and stay out of it.' }, then: { es: 'El gerente le regala una noche gratis. El padre se calma, pero no entiende nada.', en: 'The manager gives him a free night. The father calms down, but understands nothing.' } },
              { say: { es: 'Contarle por qué Nyepi es importante para él.', en: 'Tell him why Nyepi matters to him personally.' }, then: { es: 'Nyoman habla de su abuela y de las estrellas. El padre escucha en silencio. Por la noche, sale al jardín a mirar el cielo.', en: 'Nyoman talks about his grandmother and the stars. The father listens silently. At night, he goes out into the garden to look at the sky.' } },
            ],
          },
          twist: { es: 'La hija adolescente del turista le dice a Nyoman: «Para mí es el mejor día del viaje». Su padre la mira sorprendido. ¿Qué piensas tú?', en: 'The tourist’s teenage daughter tells Nyoman: “For me it’s the best day of the trip.” Her father looks at her in surprise. What do you think?' },
          questions: [
            { q: { es: '¿Los turistas deben respetar las fiestas religiosas del lugar?', en: 'Should tourists respect local religious holidays?' }, help: { es: 'Sí, porque… / Depende de…', en: 'Yes, because… / It depends on…' }, follow: [{ es: '¿Aunque no sean de esa religión?', en: 'Even if they’re not of that religion?' }, { es: '¿Hasta qué punto?', en: 'To what extent?' }] },
            { q: { es: '¿Te tocó alguna vez calmar a un cliente o a una persona muy enfadada?', en: 'Have you ever had to calm a very angry customer or person?' }, help: { es: 'Sí, una vez… / No.', en: 'Yes, once… / No.' }, follow: [{ es: '¿Qué le dijiste?', en: 'What did you say?' }, { es: '¿Funcionó?', en: 'Did it work?' }] },
            { q: { es: '¿Perdiste alguna vez un vuelo o un viaje?', en: 'Have you ever missed a flight or trip?' }, help: { es: 'Sí, por… / No, nunca.', en: 'Yes, because of… / No, never.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Te enfadaste?', en: 'Did you get angry?' }] },
            { q: { es: '¿Un día sin hacer nada es un día perdido?', en: 'Is a day doing nothing a lost day?' }, help: { es: 'No, porque… / Para mí sí…', en: 'No, because… / For me yes…' }, follow: [{ es: '¿Cuándo fue tu último día así?', en: 'When was your last day like that?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
          ],
          words: [{ es: 'coincidir', en: 'to coincide' }, { es: 'el recepcionista', en: 'the receptionist' }, { es: 'el gerente', en: 'the manager' }, { es: 'encargarse', en: 'to deal with' }, { es: 'frustrado', en: 'frustrated' }],
        },
        B1: {
          scene: { es: 'Durante Nyepi, el aire de Bali se vuelve más limpio, el consumo de energía baja más de un sesenta por ciento y el mar se calma. Algunos científicos y activistas proponen exportar la idea: un «día mundial del silencio» en el que todo el planeta pare durante veinticuatro horas. Otros dicen que solo funciona en Bali porque tiene un sentido religioso y comunitario, y que impuesto desde fuera sería un simple día festivo más. Nyoman, ahora profesor de escuela, organiza un debate con sus alumnos.', en: 'During Nyepi, Bali’s air becomes cleaner, energy use drops by more than sixty per cent and the sea calms. Some scientists and activists propose exporting the idea: a “world day of silence” when the whole planet stops for twenty-four hours. Others say it only works in Bali because it has religious and community meaning, and that imposed from outside it would just be another public holiday. Nyoman, now a schoolteacher, organises a debate with his students.' },
          opener: { es: 'Me encanta que el mundo mire a Bali con curiosidad. Pero me pregunto si Nyepi se puede copiar. Aquí nadie obedece por miedo a una multa: obedecemos porque creemos en algo y porque todo el pueblo lo hace a la vez. Si un gobierno ordena «hoy todos en silencio», la gente buscará cómo saltarse la regla. Y, sin embargo, ¿no sería maravilloso un día en que todo el planeta respire? ¿Puede una tradición religiosa convertirse en una práctica universal sin perder su sentido?', en: 'I love that the world looks at Bali with curiosity. But I wonder whether Nyepi can be copied. Here nobody obeys for fear of a fine: we obey because we believe in something and because the whole village does it at once. If a government orders “today everyone is silent”, people will look for ways around the rule. And yet, wouldn’t a day when the whole planet breathes be wonderful? Can a religious tradition become a universal practice without losing its meaning?' },
          decide: {
            ask: { es: '¿Qué conclusión saca la clase?', en: 'What conclusion does the class reach?' },
            options: [
              { say: { es: 'Que cada país invente su propio «Nyepi».', en: 'That each country invents its own “Nyepi”.' }, then: { es: 'Los alumnos escriben cartas a escuelas de otros países. Una escuela de Chile responde con su propia idea.', en: 'The students write letters to schools in other countries. A school in Chile replies with its own idea.' } },
              { say: { es: 'Que Nyepi no se puede copiar: solo se puede visitar.', en: 'That Nyepi can’t be copied: it can only be visited.' }, then: { es: 'Deciden hacer un video para explicar Nyepi a los turistas antes de llegar.', en: 'They decide to make a video explaining Nyepi to tourists before they arrive.' } },
              { say: { es: 'Probar un «Nyepi digital»: un día sin pantallas en la escuela.', en: 'Try a “digital Nyepi”: a day without screens at school.' }, then: { es: 'Algunos alumnos sufren, otros descubren que les encanta. Lo repiten cada mes.', en: 'Some students suffer, others discover they love it. They repeat it every month.' } },
            ],
          },
          twist: { es: 'Un alumno pregunta: «Profesor, ¿y los hospitales? ¿Y si alguien necesita ayuda en Nyepi?». En Bali, las urgencias funcionan con permisos especiales. ¿Cuántas excepciones puede tener una regla antes de dejar de tener sentido?', en: 'A student asks: “Sir, what about hospitals? What if someone needs help on Nyepi?” In Bali, emergencies work with special permits. How many exceptions can a rule have before it stops making sense?' },
          questions: [
            { q: { es: '¿Apoyarías un «día mundial del silencio»?', en: 'Would you support a “world day of silence”?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Lo cumplirías?', en: 'Would you keep it?' }, { es: '¿Qué sería lo más difícil?', en: 'What would be hardest?' }] },
            { q: { es: '¿Obedecemos más por convicción o por miedo a la multa?', en: 'Do we obey more out of conviction or fear of fines?' }, help: { es: 'Creo que… depende de…', en: 'I think… it depends on…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Y tú?', en: 'And you?' }] },
            { q: { es: '¿Una tradición pierde su sentido si se copia en otro lugar?', en: 'Does a tradition lose its meaning if copied elsewhere?' }, help: { es: 'A veces sí, por ejemplo… / No necesariamente…', en: 'Sometimes yes, for example… / Not necessarily…' }, follow: [{ es: '¿Halloween en tu país?', en: 'Halloween in your country?' }, { es: '¿Qué opinas?', en: 'What do you think?' }] },
            { q: { es: '¿Cuántas excepciones puede tener una regla?', en: 'How many exceptions can a rule have?' }, help: { es: 'Las necesarias para…', en: 'As many as needed to…' }, follow: [{ es: '¿Una regla con demasiadas excepciones?', en: 'A rule with too many exceptions?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
          ],
          words: [{ es: 'el consumo', en: 'consumption' }, { es: 'imponer', en: 'to impose' }, { es: 'obedecer', en: 'to obey' }, { es: 'saltarse una regla', en: 'to get round a rule' }, { es: 'la excepción', en: 'the exception' }],
        },
      },
    },
    // ------------------------------------------------------------ the monkeys of Uluwatu
    {
      id: 'uluwatu',
      name: { es: 'Los monos de Uluwatu', en: 'The monkeys of Uluwatu' },
      who: { name: 'Komang', role: { es: 'guarda del templo', en: 'temple guard' } },
      levels: {
        A0: {
          scene: { es: 'Hay un templo sobre un acantilado muy alto. Abajo está el mar. Hay muchos monos. Komang es guarda del templo. Tiene un palo y bananas.', en: 'There is a temple on a very high cliff. Below is the sea. There are many monkeys. Komang is a temple guard. He has a stick and bananas.' },
          opener: { es: '¡Cuidado con tus gafas! Los monos roban. ¿Tienes gafas?', en: 'Careful with your glasses! The monkeys steal. Do you have glasses?' },
          decide: {
            ask: { es: '¿Qué haces con tus cosas?', en: 'What do you do with your things?' },
            options: [
              { say: { es: 'Guardo las gafas en la mochila.', en: 'I put my glasses in my backpack.' }, then: { es: 'Komang dice: «¡Muy bien!». El mono te mira enfadado.', en: 'Komang says: “Very good!” The monkey looks at you angrily.' } },
              { say: { es: 'No hago nada.', en: 'I do nothing.' }, then: { es: '¡Un mono salta y se lleva tus gafas! Sube a un árbol.', en: 'A monkey jumps and takes your glasses! It climbs a tree.' } },
              { say: { es: 'Doy una banana al mono.', en: 'I give the monkey a banana.' }, then: { es: 'El mono come la banana. Llegan diez monos más.', en: 'The monkey eats the banana. Ten more monkeys come.' } },
            ],
          },
          twist: { es: 'Un mono tiene el teléfono de un turista. Komang tiene una banana. ¿Qué pasa?', en: 'A monkey has a tourist’s phone. Komang has a banana. What happens?' },
          questions: [
            { q: { es: '¿Te gustan los monos?', en: 'Do you like monkeys?' }, help: { es: 'Sí. / No, me dan miedo.', en: 'Yes. / No, they scare me.' }, follow: [{ es: '¿Viste monos?', en: 'Have you seen monkeys?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Usas gafas?', en: 'Do you wear glasses?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Para leer?', en: 'To read?' }, { es: '¿Y gafas de sol?', en: 'And sunglasses?' }] },
            { q: { es: '¿Qué llevas en tu mochila?', en: 'What do you carry in your backpack?' }, help: { es: 'Llevo agua, el teléfono…', en: 'I carry water, my phone…' }, follow: [{ es: '¿Qué es lo más importante?', en: 'What is the most important?' }, { es: '¿Pesa mucho?', en: 'Is it heavy?' }] },
            { q: { es: '¿Te gustan los lugares altos?', en: 'Do you like high places?' }, help: { es: 'Sí. / No, tengo miedo.', en: 'Yes. / No, I am scared.' }, follow: [{ es: '¿Cuál es el lugar más alto donde estuviste?', en: 'What is the highest place you’ve been?' }, { es: '¿Qué viste?', en: 'What did you see?' }] },
          ],
          words: [{ es: 'el mono', en: 'the monkey' }, { es: 'el acantilado', en: 'the cliff' }, { es: 'robar', en: 'to steal' }, { es: 'las gafas', en: 'the glasses' }, { es: 'la mochila', en: 'the backpack' }],
        },
        A1: {
          scene: { es: 'El templo de Uluwatu está a setenta metros sobre el mar, en el sur de Bali. Tiene más de mil años. Al atardecer hay una danza tradicional, el «kecak», con cien hombres que cantan «chak-chak-chak» alrededor del fuego. Pero los protagonistas para muchos turistas son los monos: roban gafas, sombreros y teléfonos, y los devuelven solo a cambio de comida.', en: 'Uluwatu temple stands seventy metres above the sea, in the south of Bali. It is more than a thousand years old. At sunset there is a traditional dance, the “kecak”, with a hundred men chanting “chak-chak-chak” around the fire. But for many tourists the stars are the monkeys: they steal glasses, hats and phones, and give them back only in exchange for food.' },
          opener: { es: 'Los monos son muy listos. Saben que los objetos caros valen más fruta. Un estudio dijo que algunos monos «negocian»: si les ofreces poca comida, no devuelven el teléfono; esperan algo mejor. Mi trabajo es recuperar las cosas de los turistas. Ayer recuperé tres gafas, dos sombreros y un pasaporte. ¿Tú crees que los animales son inteligentes como nosotros?', en: 'The monkeys are very clever. They know expensive objects are worth more fruit. A study said some monkeys “negotiate”: if you offer them little food, they don’t give the phone back; they wait for something better. My job is to get tourists’ things back. Yesterday I got back three pairs of glasses, two hats and a passport. Do you think animals are as intelligent as us?' },
          decide: {
            ask: { es: '¿Qué haces en el templo?', en: 'What do you do at the temple?' },
            options: [
              { say: { es: 'Veo la danza al atardecer.', en: 'I watch the dance at sunset.' }, then: { es: 'Cien voces cantan juntas. El sol baja detrás de los bailarines. Se te pone la piel de gallina.', en: 'A hundred voices chant together. The sun sets behind the dancers. You get goosebumps.' } },
              { say: { es: 'Ayudo a Komang con un mono.', en: 'I help Komang with a monkey.' }, then: { es: 'Le ofreces un huevo. El mono suelta las gafas y coge el huevo. ¡Éxito!', en: 'You offer it an egg. The monkey drops the glasses and grabs the egg. Success!' } },
              { say: { es: 'Camino por el borde del acantilado.', en: 'I walk along the edge of the cliff.' }, then: { es: 'La vista es enorme. Ves a surfistas pequeños como puntos en el mar.', en: 'The view is huge. You see surfers as small as dots in the sea.' } },
            ],
          },
          twist: { es: 'Un mono se lleva tu teléfono justo cuando grabas la danza. Komang no está. ¿Qué haces?', en: 'A monkey takes your phone just as you’re filming the dance. Komang isn’t there. What do you do?' },
          questions: [
            { q: { es: '¿Los animales son inteligentes como nosotros?', en: 'Are animals as intelligent as us?' }, help: { es: 'Algunos sí, por ejemplo… / No, porque…', en: 'Some are, for example… / No, because…' }, follow: [{ es: '¿Qué animal es el más listo?', en: 'Which animal is the cleverest?' }, { es: '¿Tienes una mascota lista?', en: 'Do you have a clever pet?' }] },
            { q: { es: '¿Te robaron algo alguna vez?', en: 'Has something ever been stolen from you?' }, help: { es: 'Sí, me robaron… en… / No, nunca.', en: 'Yes, they stole my… in… / No, never.' }, follow: [{ es: '¿Lo recuperaste?', en: 'Did you get it back?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Viste alguna danza tradicional?', en: 'Have you seen a traditional dance?' }, help: { es: 'Sí, en… / No.', en: 'Yes, in… / No.' }, follow: [{ es: '¿Cómo era?', en: 'What was it like?' }, { es: '¿Bailaste?', en: 'Did you dance?' }] },
            { q: { es: '¿Grabas videos en los espectáculos?', en: 'Do you film at shows?' }, help: { es: 'Sí, siempre. / No, prefiero mirar.', en: 'Yes, always. / No, I prefer to watch.' }, follow: [{ es: '¿Los miras después?', en: 'Do you watch them afterwards?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'listo', en: 'clever' }, { es: 'negociar', en: 'to negotiate' }, { es: 'recuperar', en: 'to get back' }, { es: 'la danza', en: 'the dance' }, { es: 'la piel de gallina', en: 'goosebumps' }],
        },
        A2: {
          scene: { es: 'Los vendedores de fruta que hay en la entrada del templo ganan mucho dinero: los turistas les compran comida para recuperar sus cosas. Algunos guardas creen que ciertos vendedores enseñan a los monos a robar más. Los científicos dicen que la comida de los turistas pone a los monos gordos y agresivos. El templo piensa en prohibir la venta de comida. Komang conoce bien a todos los vendedores: uno es su primo.', en: 'The fruit sellers at the temple entrance make a lot of money: tourists buy food from them to get their things back. Some guards believe certain sellers train the monkeys to steal more. Scientists say tourists’ food makes the monkeys fat and aggressive. The temple is considering banning food sales. Komang knows all the sellers well: one is his cousin.' },
          opener: { es: 'Mi primo vende fruta aquí desde hace quince años. Él no enseña a los monos, estoy seguro… casi seguro. Pero entiendo a los científicos: los monos están más nerviosos que antes y ya mordieron a varios turistas. Si prohíben la comida, mi primo pierde su trabajo. Si no hacen nada, un día un mono hará daño grave a un niño. ¿Qué harías tú?', en: 'My cousin has sold fruit here for fifteen years. He doesn’t train the monkeys, I’m sure… almost sure. But I understand the scientists: the monkeys are more nervous than before and have already bitten several tourists. If they ban food, my cousin loses his job. If they do nothing, one day a monkey will seriously hurt a child. What would you do?' },
          decide: {
            ask: { es: '¿Qué propone Komang?', en: 'What does Komang propose?' },
            options: [
              { say: { es: 'Prohibir la comida y dar otro trabajo a los vendedores.', en: 'Ban the food and give the sellers other work.' }, then: { es: 'El primo de Komang empieza a vender agua y sombreros. Gana menos, pero duerme más tranquilo.', en: 'Komang’s cousin starts selling water and hats. He earns less, but sleeps better.' } },
              { say: { es: 'Solo los guardas pueden dar comida a los monos.', en: 'Only guards can give food to the monkeys.' }, then: { es: 'Los monos aprenden rápido que los guardas tienen la comida. Los turistas están más tranquilos.', en: 'The monkeys quickly learn the guards have the food. Tourists are calmer.' } },
              { say: { es: 'Cajas cerradas para guardar las cosas antes de entrar.', en: 'Locked boxes to store things before going in.' }, then: { es: 'Casi nadie pierde nada. Pero algunos turistas dicen que la «aventura de los monos» ya no es divertida.', en: 'Almost nobody loses anything. But some tourists say the “monkey adventure” isn’t fun any more.' } },
            ],
          },
          twist: { es: 'Komang ve con sus propios ojos cómo un vendedor, no su primo, da un trozo de fruta a un mono justo después de que roba unas gafas. ¿Lo denuncia?', en: 'Komang sees with his own eyes a seller, not his cousin, give a monkey a piece of fruit right after it steals some glasses. Does he report it?' },
          questions: [
            { q: { es: '¿Se debe dar de comer a los animales salvajes?', en: 'Should wild animals be fed?' }, help: { es: 'No, porque… / A veces, si…', en: 'No, because… / Sometimes, if…' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿Denunciarías a alguien que conoces?', en: 'Would you report someone you know?' }, help: { es: 'Sí, si… / Es difícil porque…', en: 'Yes, if… / It’s hard because…' }, follow: [{ es: '¿Y a un familiar?', en: 'And a relative?' }, { es: '¿Dónde está el límite?', en: 'Where is the limit?' }] },
            { q: { es: '¿El turismo cambia el comportamiento de los animales?', en: 'Does tourism change animals’ behaviour?' }, help: { es: 'Sí, por ejemplo… / No tanto.', en: 'Yes, for example… / Not that much.' }, follow: [{ es: '¿Viste un caso?', en: 'Have you seen a case?' }, { es: '¿Qué se puede hacer?', en: 'What can be done?' }] },
            { q: { es: '¿Los peligros forman parte de la aventura de viajar?', en: 'Are dangers part of the adventure of travelling?' }, help: { es: 'Un poco, sí… / No, prefiero…', en: 'A bit, yes… / No, I prefer…' }, follow: [{ es: '¿Tu viaje más arriesgado?', en: 'Your riskiest trip?' }, { es: '¿Lo repetirías?', en: 'Would you repeat it?' }] },
          ],
          words: [{ es: 'morder', en: 'to bite' }, { es: 'agresivo', en: 'aggressive' }, { es: 'denunciar', en: 'to report' }, { es: 'salvaje', en: 'wild' }, { es: 'el comportamiento', en: 'behaviour' }],
        },
        B1: {
          scene: { es: 'Con los años, la danza kecak de Uluwatu se convirtió en uno de los espectáculos más vendidos de Bali: más de mil personas cada tarde, entradas por internet y paquetes con cena. Lo curioso es que el kecak, tal como se baila hoy, lo crearon en los años treinta un artista alemán y bailarines balineses, en parte pensando en los visitantes extranjeros. Hoy muchos lo consideran una tradición balinesa auténtica. Komang, que también baila en el coro, recibe a un antropólogo que le pregunta: «¿Esto es tradición o espectáculo?».', en: 'Over the years, the Uluwatu kecak dance became one of Bali’s best-selling shows: more than a thousand people every evening, online tickets and packages with dinner. Curiously, the kecak as it is danced today was created in the 1930s by a German artist and Balinese dancers, partly with foreign visitors in mind. Today many consider it an authentic Balinese tradition. Komang, who also dances in the chorus, receives an anthropologist who asks him: “Is this tradition or show?”' },
          opener: { es: 'Mi abuelo bailaba el kecak, mi padre también y yo también. Para mí es tradición, aunque haya nacido mirando a los turistas. ¿Cuántos años necesita algo para ser «tradicional»? ¿Cincuenta? ¿Cien? Muchas tradiciones del mundo empezaron como una novedad o una mezcla. Lo que me preocupa no es su origen: es que ahora lo bailamos con prisa, porque detrás hay otro grupo esperando, y que algunos bailarines jóvenes no saben qué historia cuentan. ¿Qué hace que una tradición sea auténtica: su origen o el significado que tiene para quienes la viven?', en: 'My grandfather danced kecak, so did my father and so do I. For me it’s tradition, even if it was born with tourists in mind. How many years does something need to be “traditional”? Fifty? A hundred? Many traditions around the world started as something new or a mix. What worries me isn’t its origin: it’s that now we dance it in a hurry, because another group is waiting behind, and that some young dancers don’t know what story they’re telling. What makes a tradition authentic: its origin or the meaning it has for those who live it?' },
          decide: {
            ask: { es: '¿Qué le responde Komang al antropólogo?', en: 'What does Komang answer the anthropologist?' },
            options: [
              { say: { es: '«Es tradición porque nosotros decidimos que lo es».', en: '“It’s tradition because we decide it is.”' }, then: { es: 'El antropólogo lo anota. Más tarde escribe un artículo titulado «Quién decide qué es auténtico».', en: 'The anthropologist writes it down. Later he writes an article called “Who decides what is authentic”.' } },
              { say: { es: '«Es las dos cosas, y no hay nada malo en eso».', en: '“It’s both, and there’s nothing wrong with that.”' }, then: { es: 'Varios bailarines están de acuerdo. Uno más mayor dice que el dinero cambió el corazón de la danza.', en: 'Several dancers agree. An older one says money changed the heart of the dance.' } },
              { say: { es: '«Venga a verlo en una ceremonia del pueblo, sin turistas».', en: '“Come and see it at a village ceremony, without tourists.”' }, then: { es: 'El antropólogo descubre una versión mucho más larga, lenta y emocionante. Entiende la diferencia sin necesidad de palabras.', en: 'The anthropologist discovers a much longer, slower and more moving version. He understands the difference without words.' } },
            ],
          },
          twist: { es: 'Una plataforma de streaming quiere grabar el kecak y venderlo en todo el mundo. Pagaría bien al grupo, pero quiere acortarlo a doce minutos y añadir efectos especiales. ¿Debería aceptar el grupo?', en: 'A streaming platform wants to film the kecak and sell it worldwide. It would pay the group well, but wants to cut it to twelve minutes and add special effects. Should the group accept?' },
          questions: [
            { q: { es: '¿Cuántos años necesita algo para ser una tradición?', en: 'How many years does something need to become a tradition?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Hay una tradición reciente en tu país?', en: 'Is there a recent tradition in your country?' }, { es: '¿La gente la vive como antigua?', en: 'Do people treat it as old?' }] },
            { q: { es: '¿Qué hace que algo sea auténtico?', en: 'What makes something authentic?' }, help: { es: 'Para mí, lo auténtico es…', en: 'For me, authentic means…' }, follow: [{ es: '¿Te importa la autenticidad cuando viajas?', en: 'Do you care about authenticity when you travel?' }, { es: '¿Cómo la reconoces?', en: 'How do you recognise it?' }] },
            { q: { es: '¿El dinero cambia el corazón de una tradición?', en: 'Does money change the heart of a tradition?' }, help: { es: 'A veces, cuando… / No, si…', en: 'Sometimes, when… / No, if…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Se puede evitar?', en: 'Can it be avoided?' }] },
            { q: { es: '¿Acortarías una tradición para que llegue a más gente?', en: 'Would you shorten a tradition so it reaches more people?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Qué no cortarías nunca?', en: 'What would you never cut?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
          ],
          words: [{ es: 'el espectáculo', en: 'the show' }, { es: 'el antropólogo', en: 'the anthropologist' }, { es: 'el coro', en: 'the chorus' }, { es: 'auténtico', en: 'authentic' }, { es: 'acortar', en: 'to shorten' }],
        },
      },
    },
  ],
};
