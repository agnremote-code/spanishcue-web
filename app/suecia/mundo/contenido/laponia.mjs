// Laponia · the Ice Hotel, a Sami reindeer herder, a northern lights tour, a sauna by
// a frozen lake and Kiruna, the mining town that is being moved. Five places, four
// levels each (A0, A1, A2, B1). Every level is written on its own: same place and
// people, different situations.
export default {
  id: 'laponia',
  spots: [
    // ------------------------------------------------------------ the Ice Hotel
    {
      id: 'hotel-hielo',
      name: { es: 'El Hotel de Hielo', en: 'The Ice Hotel' },
      who: { name: 'Nils', role: { es: 'escultor de hielo', en: 'ice sculptor' } },
      levels: {
        A0: {
          scene: { es: 'Es un hotel de hielo y nieve. Todo es blanco y azul. Las camas son de hielo. Nils hace esculturas.', en: 'It is a hotel made of ice and snow. Everything is white and blue. The beds are made of ice. Nils makes sculptures.' },
          opener: { es: '¡Hola! Soy Nils. Aquí todo es de hielo. ¡Hace cinco grados bajo cero! ¿Tienes frío?', en: 'Hello! I am Nils. Everything here is made of ice. It is minus five degrees! Are you cold?' },
          decide: {
            ask: { es: 'Nils te enseña tres habitaciones. ¿Cuál te gusta?', en: 'Nils shows you three rooms. Which one do you like?' },
            options: [
              { say: { es: 'La habitación con un oso de hielo.', en: 'The room with an ice bear.' }, then: { es: 'Nils dice: «Es mi escultura. ¡Gracias!»', en: 'Nils says: “It is my sculpture. Thank you!”' } },
              { say: { es: 'La habitación con luces azules.', en: 'The room with blue lights.' }, then: { es: 'Nils dice: «Es muy bonita de noche».', en: 'Nils says: “It is very beautiful at night.”' } },
              { say: { es: 'Una habitación normal y caliente.', en: 'A normal, warm room.' }, then: { es: 'Nils se ríe: «¡Está al lado! Es para los valientes que no son valientes».', en: 'Nils laughs: “It is next door! It’s for brave people who aren’t brave.”' } },
            ],
          },
          twist: { es: 'Nils te da un saco de dormir muy grande. «Para la noche». ¿Qué dices?', en: 'Nils gives you a very big sleeping bag. “For the night.” What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el frío?', en: 'Do you like the cold?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, a lot. / No, not at all.' }, follow: [{ es: '¿Y el calor?', en: 'And the heat?' }, { es: '¿Qué estación prefieres?', en: 'Which season do you prefer?' }] },
            { q: { es: '¿Has visto la nieve?', en: 'Have you seen snow?' }, help: { es: 'Sí, muchas veces. / No, nunca.', en: 'Yes, many times. / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Dormirías en una cama de hielo?', en: 'Would you sleep in an ice bed?' }, help: { es: 'Sí, una noche. / No, nunca.', en: 'Yes, one night. / No, never.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Te gusta el arte?', en: 'Do you like art?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué arte?', en: 'Which kind of art?' }, { es: '¿Vas a museos?', en: 'Do you go to museums?' }] },
          ],
          words: [{ es: 'el hielo', en: 'ice' }, { es: 'la nieve', en: 'snow' }, { es: 'la escultura', en: 'the sculpture' }, { es: 'el oso', en: 'the bear' }, { es: 'el saco de dormir', en: 'the sleeping bag' }],
        },
        A1: {
          scene: { es: 'Es noviembre. El hotel se construye otra vez cada invierno con hielo del río Torne. Nils y otros artistas de todo el mundo tienen tres semanas para hacer las habitaciones. En primavera, todo se derrite y vuelve al río.', en: 'It is November. The hotel is rebuilt every winter with ice from the Torne River. Nils and other artists from around the world have three weeks to make the rooms. In spring, everything melts and goes back to the river.' },
          opener: { es: 'Cada año hago una habitación diferente. El año pasado hice un bosque de hielo; este año, un barco. Trabajo con motosierra, cinceles y agua. Mis amigos me preguntan si me da pena que todo se derrita. A mí me gusta: el arte también puede ser temporal. ¿Tú qué harías con un bloque de hielo?', en: 'Every year I make a different room. Last year I made an ice forest; this year, a ship. I work with a chainsaw, chisels and water. My friends ask me if it makes me sad that everything melts. I like it: art can be temporary too. What would you make with a block of ice?' },
          decide: {
            ask: { es: 'Nils te deja hacer una pequeña escultura. ¿Qué haces?', en: 'Nils lets you make a small sculpture. What do you make?' },
            options: [
              { say: { es: 'Un reno.', en: 'A reindeer.' }, then: { es: 'Tu reno parece un perro con cuernos. Nils lo pone en la entrada.', en: 'Your reindeer looks like a dog with antlers. Nils puts it at the entrance.' } },
              { say: { es: 'Mi nombre en letras grandes.', en: 'My name in big letters.' }, then: { es: 'Los turistas se hacen fotos con tu nombre. Ahora eres «famoso».', en: 'Tourists take photos with your name. Now you’re “famous”.' } },
              { say: { es: 'Una copa de hielo para el bar.', en: 'An ice glass for the bar.' }, then: { es: 'Esa noche, alguien bebe un zumo en tu copa. Te sientes artista.', en: 'That night, someone drinks a juice from your glass. You feel like an artist.' } },
            ],
          },
          twist: { es: 'Un trozo de hielo se rompe y cae cerca de Nils. Tiene un corte en la mano. ¿Qué haces?', en: 'A piece of ice breaks and falls near Nils. He has a cut on his hand. What do you do?' },
          questions: [
            { q: { es: '¿Te gustan las cosas que duran poco?', en: 'Do you like things that don’t last long?' }, help: { es: 'Sí, como las flores… / No, prefiero lo que dura.', en: 'Yes, like flowers… / No, I prefer things that last.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }] },
            { q: { es: '¿Haces algo con las manos?', en: 'Do you make anything with your hands?' }, help: { es: 'Sí, dibujo / cocino / construyo… / No.', en: 'Yes, I draw / cook / build… / No.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Para quién?', en: 'For whom?' }] },
            { q: { es: '¿Qué haces en noviembre normalmente?', en: 'What do you usually do in November?' }, help: { es: 'En noviembre normalmente…', en: 'In November I usually…' }, follow: [{ es: '¿Hace frío?', en: 'Is it cold?' }, { es: '¿Te gusta ese mes?', en: 'Do you like that month?' }] },
            { q: { es: '¿Trabajarías con personas de muchos países?', en: 'Would you work with people from many countries?' }, help: { es: 'Sí, me encantaría. / Sería difícil por el idioma.', en: 'Yes, I would love it. / It would be hard because of the language.' }, follow: [{ es: '¿En qué idioma?', en: 'In which language?' }, { es: '¿Qué aprenderías?', en: 'What would you learn?' }] },
          ],
          words: [{ es: 'derretirse', en: 'to melt' }, { es: 'la motosierra', en: 'the chainsaw' }, { es: 'el cincel', en: 'the chisel' }, { es: 'temporal', en: 'temporary' }, { es: 'el cuerno', en: 'the antler / horn' }],
        },
        A2: {
          scene: { es: 'Este invierno ha hecho demasiado calor. El río ha tardado mucho en congelarse y el hielo es más fino. El hotel abrirá un mes tarde y algunas habitaciones no se podrán construir. Nils ha venido desde hace veinte años y nunca había visto algo así.', en: 'This winter has been too warm. The river took a long time to freeze and the ice is thinner. The hotel will open a month late and some rooms can’t be built. Nils has been coming for twenty years and has never seen anything like it.' },
          opener: { es: 'Cuando empecé, en noviembre teníamos treinta grados bajo cero. Ahora a veces llueve en diciembre. Mi arte depende del frío, y el frío se está yendo. Algunos dicen que el hotel tiene que usar máquinas para hacer hielo. Para mí eso ya no sería lo mismo. ¿Has visto cambios en el clima donde vives?', en: 'When I started, in November we had minus thirty degrees. Now it sometimes rains in December. My art depends on the cold, and the cold is leaving. Some say the hotel should use machines to make ice. For me that wouldn’t be the same anymore. Have you seen changes in the climate where you live?' },
          decide: {
            ask: { es: 'El hotel le pide a Nils su opinión sobre las máquinas de hielo. ¿Qué le aconsejas?', en: 'The hotel asks Nils for his opinion on the ice machines. What do you advise him?' },
            options: [
              { say: { es: 'Que acepte las máquinas para salvar el hotel.', en: 'Accept the machines to save the hotel.' }, then: { es: 'El hotel abre a tiempo. Algunos artistas dicen que ha perdido su alma.', en: 'The hotel opens on time. Some artists say it has lost its soul.' } },
              { say: { es: 'Que diga que no: el hotel debe abrir cuando la naturaleza quiera.', en: 'Say no: the hotel should open when nature allows.' }, then: { es: 'El hotel abre tarde. Los turistas lo aceptan cuando conocen la razón.', en: 'The hotel opens late. Tourists accept it when they hear the reason.' } },
              { say: { es: 'Que proponga una habitación que hable del cambio climático.', en: 'Suggest a room about climate change.' }, then: { es: 'Nils hace una habitación con un glaciar que se rompe. Es la más visitada del año.', en: 'Nils makes a room with a breaking glacier. It’s the most visited of the year.' } },
            ],
          },
          twist: { es: 'Un periodista dice que el Hotel de Hielo contamina mucho porque los turistas vienen en avión de todo el mundo. Nils no sabe qué contestar. ¿Qué le dices?', en: 'A journalist says the Ice Hotel causes a lot of pollution because tourists fly in from all over the world. Nils doesn’t know how to answer. What do you tell him?' },
          questions: [
            { q: { es: '¿Has visto cambios en el clima donde vives?', en: 'Have you seen changes in the climate where you live?' }, help: { es: 'Sí, ahora… y antes… / No mucho.', en: 'Yes, now… and before… / Not much.' }, follow: [{ es: '¿Qué te preocupa más?', en: 'What worries you most?' }, { es: '¿Y a tus padres?', en: 'And your parents?' }] },
            { q: { es: '¿Qué trabajos dependen del clima en tu país?', en: 'Which jobs depend on the climate in your country?' }, help: { es: 'Por ejemplo, los agricultores…', en: 'For example, farmers…' }, follow: [{ es: '¿Están en peligro?', en: 'Are they at risk?' }, { es: '¿Qué pueden hacer?', en: 'What can they do?' }] },
            { q: { es: '¿Viajarías menos en avión para contaminar menos?', en: 'Would you fly less to pollute less?' }, help: { es: 'Sí, ya lo hago. / Me costaría, porque…', en: 'Yes, I already do. / It would be hard, because…' }, follow: [{ es: '¿Cómo viajarías?', en: 'How would you travel?' }, { es: '¿Adónde no irías?', en: 'Where wouldn’t you go?' }] },
            { q: { es: '¿Una cosa hecha con máquinas tiene menos valor?', en: 'Does something made by machines have less value?' }, help: { es: 'Sí, porque… / No, depende de…', en: 'Yes, because… / No, it depends on…' }, follow: [{ es: '¿Puedes dar un ejemplo?', en: 'Can you give an example?' }, { es: '¿Qué compras hecho a mano?', en: 'What do you buy handmade?' }] },
          ],
          words: [{ es: 'congelarse', en: 'to freeze' }, { es: 'fino', en: 'thin' }, { es: 'el glaciar', en: 'the glacier' }, { es: 'el alma', en: 'the soul' }, { es: 'contaminar', en: 'to pollute' }],
        },
        B1: {
          scene: { es: 'Una empresa de Dubái quiere copiar el Hotel de Hielo en el desierto, dentro de un edificio refrigerado. Ofrece a Nils un contrato muy bueno para dirigir el proyecto. Él vive en Laponia desde hace veinte años y su pareja es de un pueblo cercano.', en: 'A company in Dubai wants to copy the Ice Hotel in the desert, inside a refrigerated building. It offers Nils a very good contract to lead the project. He has lived in Lapland for twenty years and his partner is from a nearby village.' },
          opener: { es: 'Es el contrato de mi vida: tres veces lo que gano aquí y un equipo enorme. Pero hacer hielo en el desierto con máquinas que gastan energía sin parar… va contra todo lo que he defendido. Y si no lo hago yo, lo hará otro. ¿Hasta qué punto somos responsables de lo que hacemos si alguien lo haría igual?', en: 'It’s the contract of a lifetime: three times what I earn here and a huge team. But making ice in the desert with machines that use energy non-stop… goes against everything I’ve stood for. And if I don’t do it, someone else will. To what extent are we responsible for what we do if someone else would do it anyway?' },
          decide: {
            ask: { es: 'Nils tiene una semana para decidir. ¿Qué debería hacer?', en: 'Nils has one week to decide. What should he do?' },
            options: [
              { say: { es: 'Rechazar el contrato y quedarse en Laponia.', en: 'Turn down the contract and stay in Lapland.' }, then: { es: 'Otro artista acepta. Nils escribe un artículo explicando su decisión y se hace viral.', en: 'Another artist accepts. Nils writes an article explaining his decision and it goes viral.' } },
              { say: { es: 'Aceptar, pero exigir que todo funcione con energía solar.', en: 'Accept, but demand that everything runs on solar power.' }, then: { es: 'La empresa acepta. El proyecto es más caro, pero se convierte en un ejemplo.', en: 'The company agrees. The project costs more, but becomes an example.' } },
              { say: { es: 'Aceptar solo como asesor, sin mudarse.', en: 'Accept only as an adviser, without moving.' }, then: { es: 'Nils viaja dos veces al año. Su pareja está contenta, pero él no se siente cómodo.', en: 'Nils travels twice a year. His partner is happy, but he doesn’t feel comfortable.' } },
            ],
          },
          twist: { es: 'Su pareja le dice que, si acepta, ella no lo acompañará. «No puedo vivir en un sitio así», le dice. ¿Cambia eso la decisión?', en: 'His partner tells him that if he accepts, she won’t go with him. “I can’t live in a place like that,” she says. Does that change the decision?' },
          questions: [
            { q: { es: '¿Harías un trabajo que va contra tus ideas por mucho dinero?', en: 'Would you do a job against your principles for a lot of money?' }, help: { es: 'Depende de cuánto… / No, nunca, porque…', en: 'It depends how much… / No, never, because…' }, follow: [{ es: '¿Cuál es tu límite?', en: 'What is your limit?' }, { es: '¿Lo has hecho alguna vez?', en: 'Have you ever done it?' }] },
            { q: { es: '«Si no lo hago yo, lo hará otro»: ¿es una buena excusa?', en: '“If I don’t do it, someone else will”: is that a good excuse?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think it is / isn’t, because…' }, follow: [{ es: '¿La has usado?', en: 'Have you used it?' }, { es: '¿En qué situación?', en: 'In what situation?' }] },
            { q: { es: '¿Te mudarías lejos por tu trabajo sin tu pareja?', en: 'Would you move far away for work without your partner?' }, help: { es: 'Sí, por un tiempo. / No, nunca.', en: 'Yes, for a while. / No, never.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long?' }, { es: '¿Qué sería lo más difícil?', en: 'What would be hardest?' }] },
            { q: { es: '¿Qué te parecen los lugares artificiales, como pistas de esquí en el desierto?', en: 'What do you think of artificial places, like ski slopes in the desert?' }, help: { es: 'Me parecen… porque…', en: 'I think they are… because…' }, follow: [{ es: '¿Irías a uno?', en: 'Would you go to one?' }, { es: '¿Conoces alguno?', en: 'Do you know any?' }] },
          ],
          words: [{ es: 'refrigerado', en: 'refrigerated' }, { es: 'dirigir', en: 'to lead, direct' }, { es: 'el asesor', en: 'the adviser' }, { es: 'defender', en: 'to stand for, defend' }, { es: 'la pareja', en: 'the partner' }],
        },
      },
    },
    // ------------------------------------------------------------ the reindeer herder
    {
      id: 'renos',
      name: { es: 'Los renos de los sami', en: 'The Sami reindeer' },
      who: { name: 'Inga', role: { es: 'pastora de renos sami', en: 'Sami reindeer herder' } },
      levels: {
        A0: {
          scene: { es: 'Es un bosque con mucha nieve. Hay muchos renos. Inga es sami, un pueblo del norte. Ella cuida los renos.', en: 'It is a forest with lots of snow. There are many reindeer. Inga is Sami, a people from the north. She looks after the reindeer.' },
          opener: { es: '¡Hola! Soy Inga. Mi familia tiene quinientos renos. ¿Quieres dar comida a un reno?', en: 'Hello! I am Inga. My family has five hundred reindeer. Do you want to feed a reindeer?' },
          decide: {
            ask: { es: 'Inga te da tres opciones. ¿Qué haces?', en: 'Inga gives you three options. What do you do?' },
            options: [
              { say: { es: 'Doy comida a un reno pequeño.', en: 'I feed a small reindeer.' }, then: { es: 'Inga dice: «Se llama Sol. Tiene seis meses».', en: 'Inga says: “Her name is Sol. She is six months old.”' } },
              { say: { es: 'Subo a un trineo de renos.', en: 'I get on a reindeer sledge.' }, then: { es: 'Inga dice: «¡Agárrate! Es rápido».', en: 'Inga says: “Hold on! It is fast.”' } },
              { say: { es: 'Hago una foto.', en: 'I take a photo.' }, then: { es: 'Inga dice: «Despacio. Los renos son tímidos».', en: 'Inga says: “Slowly. Reindeer are shy.”' } },
            ],
          },
          twist: { es: 'Un reno grande come de tu bolsillo. ¿Qué dices?', en: 'A big reindeer eats from your pocket. What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los animales?', en: 'Do you like animals?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }, { es: '¿Tienes uno?', en: 'Do you have one?' }] },
            { q: { es: '¿Has visto un reno?', en: 'Have you seen a reindeer?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Y otros animales del norte?', en: 'And other northern animals?' }] },
            { q: { es: '¿Vives en el norte o en el sur de tu país?', en: 'Do you live in the north or south of your country?' }, help: { es: 'Vivo en el norte / sur / centro.', en: 'I live in the north / south / centre.' }, follow: [{ es: '¿Hace frío?', en: 'Is it cold?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Tu familia tiene animales?', en: 'Does your family have animals?' }, help: { es: 'Sí, un perro / gatos… / No.', en: 'Yes, a dog / cats… / No.' }, follow: [{ es: '¿Cuántos?', en: 'How many?' }, { es: '¿Quién los cuida?', en: 'Who looks after them?' }] },
          ],
          words: [{ es: 'el reno', en: 'the reindeer' }, { es: 'el trineo', en: 'the sledge' }, { es: 'cuidar', en: 'to look after' }, { es: 'tímido', en: 'shy' }, { es: 'el bolsillo', en: 'the pocket' }],
        },
        A1: {
          scene: { es: 'Es primavera y los renos se mueven hacia las montañas, como hacen desde hace miles de años. Inga y su hermano los acompañan en motos de nieve. Duermen en una tienda tradicional, la «lávvu», con un fuego en el centro.', en: 'It is spring and the reindeer are moving towards the mountains, as they have done for thousands of years. Inga and her brother go with them on snowmobiles. They sleep in a traditional tent, the “lávvu”, with a fire in the middle.' },
          opener: { es: 'Mis abuelos seguían a los renos a pie y con esquís. Nosotros usamos motos de nieve y GPS, pero el camino es el mismo. Los renos saben adónde ir; nosotros solo los seguimos y los protegemos. ¿Tu familia tiene una tradición que se hace igual desde hace mucho tiempo?', en: 'My grandparents followed the reindeer on foot and on skis. We use snowmobiles and GPS, but the route is the same. The reindeer know where to go; we just follow and protect them. Does your family have a tradition that has been done the same way for a long time?' },
          decide: {
            ask: { es: 'Inga te invita a pasar una noche en la lávvu. ¿Qué haces?', en: 'Inga invites you to spend a night in the lávvu. What do you do?' },
            options: [
              { say: { es: 'Acepto y ayudo con el fuego.', en: 'I accept and help with the fire.' }, then: { es: 'Por la noche, Inga canta un «joik», una canción sami. Nunca has oído nada así.', en: 'At night, Inga sings a “joik”, a Sami song. You’ve never heard anything like it.' } },
              { say: { es: 'Acepto, pero llevo tres sacos de dormir.', en: 'I accept, but I bring three sleeping bags.' }, then: { es: 'Inga se ríe mucho. A las tres de la mañana, le das uno a su hermano.', en: 'Inga laughs a lot. At three in the morning, you give one to her brother.' } },
              { say: { es: 'Prefiero volver al hotel por la noche.', en: 'I prefer to go back to the hotel at night.' }, then: { es: 'El hermano de Inga te lleva en moto de nieve. Ves un zorro blanco en el camino.', en: 'Inga’s brother takes you on a snowmobile. You see a white fox on the way.' } },
            ],
          },
          twist: { es: 'Por la mañana falta un reno joven. Hay huellas de lobo en la nieve. ¿Qué haces?', en: 'In the morning a young reindeer is missing. There are wolf tracks in the snow. What do you do?' },
          questions: [
            { q: { es: '¿Tu familia tiene una tradición antigua?', en: 'Does your family have an old tradition?' }, help: { es: 'Sí, cada año… / No, ninguna.', en: 'Yes, every year… / No, none.' }, follow: [{ es: '¿De dónde viene?', en: 'Where does it come from?' }, { es: '¿La vas a continuar?', en: 'Will you continue it?' }] },
            { q: { es: '¿Has dormido en una tienda de campaña?', en: 'Have you slept in a tent?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Hacía frío?', en: 'Was it cold?' }] },
            { q: { es: '¿Conoces alguna canción tradicional de tu país?', en: 'Do you know a traditional song from your country?' }, help: { es: 'Sí, una que se llama… / No.', en: 'Yes, one called… / No.' }, follow: [{ es: '¿Quién te la enseñó?', en: 'Who taught it to you?' }, { es: '¿De qué habla?', en: 'What is it about?' }] },
            { q: { es: '¿Usas el GPS o prefieres los mapas de papel?', en: 'Do you use GPS or do you prefer paper maps?' }, help: { es: 'Uso el GPS. / Prefiero los mapas.', en: 'I use GPS. / I prefer maps.' }, follow: [{ es: '¿Te has perdido alguna vez?', en: 'Have you ever got lost?' }, { es: '¿Dónde?', en: 'Where?' }] },
          ],
          words: [{ es: 'la moto de nieve', en: 'the snowmobile' }, { es: 'la tienda', en: 'the tent' }, { es: 'la huella', en: 'the track, footprint' }, { es: 'el lobo', en: 'the wolf' }, { es: 'el zorro', en: 'the fox' }],
        },
        A2: {
          scene: { es: 'Inga estudió en Estocolmo y trabajó dos años en una oficina. Volvió al norte porque su padre está enfermo y alguien tiene que cuidar los renos. Sus amigos de la ciudad no entienden por qué ha vuelto. Hoy uno de ellos viene a visitarla.', en: 'Inga studied in Stockholm and worked in an office for two years. She came back north because her father is ill and someone has to look after the reindeer. Her city friends don’t understand why she returned. Today one of them is coming to visit.' },
          opener: { es: 'En Estocolmo tenía un buen sueldo, cafés bonitos y amigos. Aquí tengo frío, mucho trabajo y poca cobertura. Pero cuando estoy con los renos siento que soy yo misma. En la ciudad, la gente me preguntaba si vivía en un iglú. ¿Tú te sientes de un lugar?', en: 'In Stockholm I had a good salary, nice cafés and friends. Here I have cold, lots of work and poor phone signal. But when I’m with the reindeer I feel like myself. In the city, people asked me if I lived in an igloo. Do you feel you belong to a place?' },
          decide: {
            ask: { es: 'Su amigo le ofrece un trabajo a distancia para una empresa de Estocolmo. ¿Qué le aconsejas a Inga?', en: 'Her friend offers her a remote job for a Stockholm company. What do you advise Inga?' },
            options: [
              { say: { es: 'Que acepte y trabaje desde el norte.', en: 'Accept and work from the north.' }, then: { es: 'Inga trabaja por las tardes con el ordenador en la cocina. Los renos no se quejan.', en: 'Inga works in the afternoons with her laptop in the kitchen. The reindeer don’t complain.' } },
              { say: { es: 'Que no acepte y se dedique solo a los renos.', en: 'Don’t accept and devote herself only to the reindeer.' }, then: { es: 'El dinero es poco, pero su padre está feliz de verla con los animales.', en: 'There’s little money, but her father is happy to see her with the animals.' } },
              { say: { es: 'Que vuelva a Estocolmo cuando su padre se recupere.', en: 'Go back to Stockholm when her father recovers.' }, then: { es: 'Su padre se recupera en un año. Inga ya no quiere volver.', en: 'Her father recovers within a year. Inga no longer wants to go back.' } },
            ],
          },
          twist: { es: 'El amigo de Inga hace fotos de los renos y quiere publicarlas con el texto «La vida exótica de mi amiga sami». A Inga no le gusta. ¿Qué le dice?', en: 'Inga’s friend takes photos of the reindeer and wants to post them with the caption “My Sami friend’s exotic life.” Inga doesn’t like it. What does she tell him?' },
          questions: [
            { q: { es: '¿Te sientes de un lugar?', en: 'Do you feel you belong to a place?' }, help: { es: 'Sí, de… porque… / No, de varios.', en: 'Yes, to… because… / No, to several.' }, follow: [{ es: '¿Qué te hace sentir así?', en: 'What makes you feel like that?' }, { es: '¿Volverías a vivir allí?', en: 'Would you live there again?' }] },
            { q: { es: '¿Has vuelto a un lugar después de mucho tiempo?', en: 'Have you returned to a place after a long time?' }, help: { es: 'Sí, volví a… y… / No.', en: 'Yes, I went back to… and… / No.' }, follow: [{ es: '¿Había cambiado?', en: 'Had it changed?' }, { es: '¿Y tú?', en: 'And had you?' }] },
            { q: { es: '¿La gente tiene ideas equivocadas sobre tu país o tu región?', en: 'Do people have wrong ideas about your country or region?' }, help: { es: 'Sí, piensan que… pero…', en: 'Yes, they think that… but…' }, follow: [{ es: '¿Cómo reaccionas?', en: 'How do you react?' }, { es: '¿Te molesta?', en: 'Does it bother you?' }] },
            { q: { es: '¿Dejarías tu trabajo para cuidar a un familiar?', en: 'Would you leave your job to look after a relative?' }, help: { es: 'Sí, sin dudar. / Sería muy difícil, porque…', en: 'Yes, without hesitation. / It would be very hard, because…' }, follow: [{ es: '¿Conoces a alguien que lo ha hecho?', en: 'Do you know someone who has done it?' }, { es: '¿Cómo le fue?', en: 'How did it go?' }] },
          ],
          words: [{ es: 'la cobertura', en: 'phone signal' }, { es: 'recuperarse', en: 'to recover' }, { es: 'exótico', en: 'exotic' }, { es: 'dedicarse a', en: 'to devote oneself to' }, { es: 'el iglú', en: 'the igloo' }],
        },
        B1: {
          scene: { es: 'Una empresa quiere construir un parque eólico enorme en las montañas por donde pasan los renos de Inga en verano. El gobierno lo apoya porque es energía limpia. Los sami dicen que los molinos asustan a los renos y que nadie les ha preguntado. Inga va a hablar ante una comisión en Estocolmo.', en: 'A company wants to build a huge wind farm in the mountains where Inga’s reindeer pass in summer. The government supports it because it’s clean energy. The Sami say the turbines frighten the reindeer and that nobody asked them. Inga is going to speak before a commission in Stockholm.' },
          opener: { es: 'Es difícil estar en contra de la energía limpia. Yo también quiero salvar el planeta. Pero no es justo que la solución para todos la paguemos siempre los mismos. Mi pueblo lleva siglos perdiendo tierras: primero por las minas, luego por las presas, ahora por los molinos. ¿Cómo se equilibra el bien de todos con los derechos de unos pocos?', en: 'It’s hard to be against clean energy. I want to save the planet too. But it isn’t fair that the same people always pay for everyone’s solution. My people have been losing land for centuries: first to mines, then to dams, now to wind turbines. How do you balance the common good with the rights of a few?' },
          decide: {
            ask: { es: 'Inga tiene diez minutos ante la comisión. ¿Qué debería pedir?', en: 'Inga has ten minutes before the commission. What should she ask for?' },
            options: [
              { say: { es: 'Que el parque se construya en otro lugar.', en: 'That the wind farm be built somewhere else.' }, then: { es: 'La comisión estudia otras zonas. El proyecto se retrasa dos años.', en: 'The commission looks at other areas. The project is delayed by two years.' } },
              { say: { es: 'Que los sami tengan derecho a decidir sobre sus tierras.', en: 'That the Sami have the right to decide about their lands.' }, then: { es: 'Su discurso sale en todos los periódicos. Se abre un debate nacional.', en: 'Her speech is in every newspaper. A national debate begins.' } },
              { say: { es: 'Que la empresa pague a las familias y pare los molinos en verano.', en: 'That the company pays the families and stops the turbines in summer.' }, then: { es: 'La empresa acepta parte del acuerdo. Algunas familias sami se sienten traicionadas.', en: 'The company accepts part of the deal. Some Sami families feel betrayed.' } },
            ],
          },
          twist: { es: 'Un político le dice a Inga: «Son solo renos. El planeta es más importante». ¿Cómo debería responder ella?', en: 'A politician tells Inga: “They’re just reindeer. The planet is more important.” How should she respond?' },
          questions: [
            { q: { es: '¿Hay pueblos indígenas en tu país? ¿Cómo viven hoy?', en: 'Are there indigenous peoples in your country? How do they live today?' }, help: { es: 'Sí, los… Viven… / No que yo sepa.', en: 'Yes, the… They live… / Not that I know of.' }, follow: [{ es: '¿Tienen derechos especiales?', en: 'Do they have special rights?' }, { es: '¿Qué problemas tienen?', en: 'What problems do they face?' }] },
            { q: { es: '¿La energía limpia justifica cualquier sacrificio?', en: 'Does clean energy justify any sacrifice?' }, help: { es: 'No, porque… / Casi siempre, porque…', en: 'No, because… / Almost always, because…' }, follow: [{ es: '¿Qué sacrificio aceptarías tú?', en: 'What sacrifice would you accept?' }, { es: '¿Cuál no?', en: 'Which wouldn’t you?' }] },
            { q: { es: '¿Has sentido que una decisión importante se tomó sin preguntarte?', en: 'Have you felt that an important decision was made without asking you?' }, help: { es: 'Sí, en el trabajo / en mi ciudad… / No.', en: 'Yes, at work / in my city… / No.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Cambió algo?', en: 'Did anything change?' }] },
            { q: { es: '¿Un parque eólico cerca de tu casa te molestaría?', en: 'Would a wind farm near your home bother you?' }, help: { es: 'Sí, por el ruido… / No, me parece bien.', en: 'Yes, because of the noise… / No, I’m fine with it.' }, follow: [{ es: '¿Y una central nuclear?', en: 'And a nuclear power station?' }, { es: '¿Qué energía prefieres?', en: 'Which energy do you prefer?' }] },
          ],
          words: [{ es: 'el parque eólico', en: 'the wind farm' }, { es: 'el molino', en: 'the wind turbine' }, { es: 'la presa', en: 'the dam' }, { es: 'equilibrar', en: 'to balance' }, { es: 'traicionado', en: 'betrayed' }],
        },
      },
    },
    // ------------------------------------------------------------ the northern lights
    {
      id: 'aurora',
      name: { es: 'La noche de la aurora boreal', en: 'The northern lights night' },
      who: { name: 'Erik', role: { es: 'guía de auroras', en: 'northern lights guide' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche. El cielo está negro y hay estrellas. De repente, hay luces verdes en el cielo. Erik es el guía.', en: 'It is night. The sky is black and there are stars. Suddenly, there are green lights in the sky. Erik is the guide.' },
          opener: { es: '¡Mira! ¡Es la aurora boreal! Soy Erik. ¿Es tu primera vez?', en: 'Look! It is the northern lights! I am Erik. Is it your first time?' },
          decide: {
            ask: { es: 'Erik tiene tres ideas. ¿Qué haces?', en: 'Erik has three ideas. What do you do?' },
            options: [
              { say: { es: 'Hago una foto.', en: 'I take a photo.' }, then: { es: 'Erik dice: «Tu móvil no es bueno para esto. Usa mi cámara».', en: 'Erik says: “Your phone isn’t good for this. Use my camera.”' } },
              { say: { es: 'Me tumbo en la nieve y miro.', en: 'I lie down in the snow and look.' }, then: { es: 'Erik dice: «¡Es la mejor forma!»', en: 'Erik says: “It is the best way!”' } },
              { say: { es: 'Bebo un chocolate caliente.', en: 'I drink a hot chocolate.' }, then: { es: 'Erik dice: «Toma. Hace treinta grados bajo cero».', en: 'Erik says: “Here. It is minus thirty degrees.”' } },
            ],
          },
          twist: { es: 'Las luces cambian de color: ahora son rosas. ¿Qué dices?', en: 'The lights change colour: now they are pink. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta mirar las estrellas?', en: 'Do you like looking at the stars?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Haces muchas fotos?', en: 'Do you take many photos?' }, help: { es: 'Sí, muchas. / No, pocas.', en: 'Yes, many. / No, few.' }, follow: [{ es: '¿De qué?', en: 'Of what?' }, { es: '¿Con el móvil?', en: 'With your phone?' }] },
            { q: { es: '¿Te gusta la noche?', en: 'Do you like the night?' }, help: { es: 'Sí, me gusta. / No, prefiero el día.', en: 'Yes, I like it. / No, I prefer the day.' }, follow: [{ es: '¿Qué haces de noche?', en: 'What do you do at night?' }, { es: '¿A qué hora duermes?', en: 'What time do you sleep?' }] },
            { q: { es: '¿Cuál es tu bebida caliente favorita?', en: 'What is your favourite hot drink?' }, help: { es: 'Mi bebida favorita es el café / el té…', en: 'My favourite drink is coffee / tea…' }, follow: [{ es: '¿Cuándo la tomas?', en: 'When do you drink it?' }, { es: '¿Con azúcar?', en: 'With sugar?' }] },
          ],
          words: [{ es: 'la aurora boreal', en: 'the northern lights' }, { es: 'el cielo', en: 'the sky' }, { es: 'la estrella', en: 'the star' }, { es: 'tumbarse', en: 'to lie down' }, { es: 'verde', en: 'green' }],
        },
        A1: {
          scene: { es: 'Erik lleva a un grupo de turistas en furgoneta lejos de las luces de la ciudad. Han esperado tres horas en el frío y no ha salido la aurora. Algunos están enfadados porque han pagado mucho dinero.', en: 'Erik takes a group of tourists by van far from the city lights. They have waited three hours in the cold and the northern lights haven’t appeared. Some are angry because they paid a lot of money.' },
          opener: { es: 'La aurora no es un espectáculo con horario: es la naturaleza. A veces sale cinco minutos, a veces toda la noche, a veces nada. Mi trabajo es buscar el cielo sin nubes y esperar. Y también contar historias mientras esperamos. ¿Tú eres paciente?', en: 'The northern lights aren’t a show with a timetable: it’s nature. Sometimes they come out for five minutes, sometimes all night, sometimes not at all. My job is to find clear skies and wait. And also to tell stories while we wait. Are you patient?' },
          decide: {
            ask: { es: 'Un turista quiere volver al hotel y pide su dinero. ¿Qué propones a Erik?', en: 'A tourist wants to go back to the hotel and asks for his money back. What do you suggest to Erik?' },
            options: [
              { say: { es: 'Esperar media hora más con chocolate caliente.', en: 'Wait half an hour more with hot chocolate.' }, then: { es: 'A los veinte minutos, el cielo se pone verde. El turista enfadado llora de emoción.', en: 'After twenty minutes, the sky turns green. The angry tourist cries with emotion.' } },
              { say: { es: 'Ir a otro sitio con menos nubes.', en: 'Go somewhere else with fewer clouds.' }, then: { es: 'Conducen cuarenta minutos. La aurora sale justo cuando llegan.', en: 'They drive forty minutes. The lights appear just as they arrive.' } },
              { say: { es: 'Ofrecer otra excursión gratis mañana.', en: 'Offer another free trip tomorrow.' }, then: { es: 'Todos aceptan. Al día siguiente ven la mejor aurora del año.', en: 'Everyone accepts. The next day they see the best lights of the year.' } },
            ],
          },
          twist: { es: 'Una señora mayor tiene mucho frío y no siente los pies. ¿Qué haces?', en: 'An elderly lady is very cold and can’t feel her feet. What do you do?' },
          questions: [
            { q: { es: '¿Eres paciente?', en: 'Are you patient?' }, help: { es: 'Sí, bastante. / No, nada.', en: 'Yes, quite. / No, not at all.' }, follow: [{ es: '¿Cuándo pierdes la paciencia?', en: 'When do you lose patience?' }, { es: '¿Qué te ayuda?', en: 'What helps you?' }] },
            { q: { es: '¿Has pagado por algo que no ha salido bien?', en: 'Have you paid for something that didn’t go well?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Te devolvieron el dinero?', en: 'Did they give you your money back?' }, { es: '¿Te quejaste?', en: 'Did you complain?' }] },
            { q: { es: '¿Qué espectáculo natural te gustaría ver?', en: 'What natural spectacle would you like to see?' }, help: { es: 'Me gustaría ver…', en: 'I would like to see…' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Qué ropa llevas cuando hace mucho frío?', en: 'What do you wear when it’s very cold?' }, help: { es: 'Llevo abrigo, gorro, guantes…', en: 'I wear a coat, hat, gloves…' }, follow: [{ es: '¿Tienes mucho frío normalmente?', en: 'Do you usually feel very cold?' }, { es: '¿Y los pies?', en: 'And your feet?' }] },
          ],
          words: [{ es: 'la furgoneta', en: 'the van' }, { es: 'la nube', en: 'the cloud' }, { es: 'el espectáculo', en: 'the show, spectacle' }, { es: 'paciente', en: 'patient' }, { es: 'la excursión', en: 'the trip' }],
        },
        A2: {
          scene: { es: 'Erik era profesor de física en Malmö. Hace diez años vino a Laponia de vacaciones, vio la aurora y no volvió a su trabajo. Ahora tiene su propia empresa de excursiones. Esta noche, en el grupo hay una antigua alumna suya que no lo reconoce.', en: 'Erik used to be a physics teacher in Malmö. Ten years ago he came to Lapland on holiday, saw the northern lights and never went back to his job. Now he has his own tour company. Tonight, the group includes a former student of his who doesn’t recognise him.' },
          opener: { es: 'Mis antiguos compañeros dicen que lo dejé todo por unas luces. Es verdad. Explicaba la aurora en clase con dibujos en la pizarra, pero nunca la había visto de verdad. Al verla, me di cuenta de que había pasado treinta años explicando cosas que no había vivido. ¿Tú has cambiado de vida de repente?', en: 'My former colleagues say I gave everything up for some lights. It’s true. I explained the northern lights in class with drawings on the board, but I’d never really seen them. When I did, I realised I’d spent thirty years explaining things I hadn’t lived. Have you ever changed your life suddenly?' },
          decide: {
            ask: { es: 'Erik reconoce a su antigua alumna. ¿Qué debería hacer?', en: 'Erik recognises his former student. What should he do?' },
            options: [
              { say: { es: 'Decirle quién es delante del grupo.', en: 'Tell her who he is in front of the group.' }, then: { es: 'Ella grita de sorpresa. Le cuenta que estudió física por sus clases.', en: 'She shrieks with surprise. She tells him she studied physics because of his classes.' } },
              { say: { es: 'Esperar al final de la excursión y hablar con ella a solas.', en: 'Wait until the end of the trip and talk to her alone.' }, then: { es: 'Hablan dos horas en la furgoneta. Ella también quiere cambiar de vida.', en: 'They talk for two hours in the van. She wants to change her life too.' } },
              { say: { es: 'No decir nada.', en: 'Say nothing.' }, then: { es: 'Al final, ella le deja una nota: «Siempre supe que era usted, profe».', en: 'At the end, she leaves him a note: “I always knew it was you, sir.”' } },
            ],
          },
          twist: { es: 'La alumna le pregunta a Erik si se arrepiente de haber dejado la enseñanza. ¿Qué le contesta?', en: 'The student asks Erik if he regrets leaving teaching. What does he answer?' },
          questions: [
            { q: { es: '¿Has cambiado de vida de repente?', en: 'Have you ever changed your life suddenly?' }, help: { es: 'Sí, cuando… / No, todo ha sido poco a poco.', en: 'Yes, when… / No, everything has been gradual.' }, follow: [{ es: '¿Qué te hizo cambiar?', en: 'What made you change?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Qué profesor recuerdas de tu colegio?', en: 'Which teacher do you remember from school?' }, help: { es: 'Recuerdo a… porque…', en: 'I remember… because…' }, follow: [{ es: '¿Qué asignatura daba?', en: 'What subject did they teach?' }, { es: '¿Te gustaría volver a verlo?', en: 'Would you like to see them again?' }] },
            { q: { es: '¿Has explicado algo que nunca habías vivido?', en: 'Have you explained something you had never experienced?' }, help: { es: 'Sí, por ejemplo… / No.', en: 'Yes, for example… / No.' }, follow: [{ es: '¿Fue fácil?', en: 'Was it easy?' }, { es: '¿Lo has vivido después?', en: 'Have you experienced it since?' }] },
            { q: { es: '¿Qué te haría dejar tu trabajo mañana?', en: 'What would make you quit your job tomorrow?' }, help: { es: 'Lo dejaría si…', en: 'I would quit if…' }, follow: [{ es: '¿Adónde irías?', en: 'Where would you go?' }, { es: '¿Qué harías?', en: 'What would you do?' }] },
          ],
          words: [{ es: 'la física', en: 'physics' }, { es: 'la pizarra', en: 'the board' }, { es: 'reconocer', en: 'to recognise' }, { es: 'a solas', en: 'alone, in private' }, { es: 'arrepentirse', en: 'to regret' }],
        },
        B1: {
          scene: { es: 'El turismo de auroras ha crecido tanto que cada noche hay decenas de furgonetas buscando el cielo perfecto. Algunas empresas entran en tierras privadas y en zonas donde pastan los renos de los sami. Erik se siente parte del problema y parte de la solución al mismo tiempo.', en: 'Northern lights tourism has grown so much that every night there are dozens of vans looking for the perfect sky. Some companies drive onto private land and into areas where Sami reindeer graze. Erik feels he’s part of the problem and part of the solution at the same time.' },
          opener: { es: 'Yo vine aquí buscando silencio. Ahora, una noche normal, hay ochenta personas gritando con el móvil en la mano en el mismo lago. Los sami se quejan, con razón. Pero vivo de esto, y los turistas también dan trabajo a mucha gente del pueblo. ¿Cómo se comparte algo bonito sin destruirlo?', en: 'I came here looking for silence. Now, on a normal night, there are eighty people shouting with their phones in their hands on the same lake. The Sami complain, and they’re right. But I make my living from this, and tourists also give jobs to many people in the village. How do you share something beautiful without destroying it?' },
          decide: {
            ask: { es: 'Las empresas de auroras se reúnen para crear unas normas. ¿Qué debería proponer Erik?', en: 'The northern lights companies meet to create some rules. What should Erik propose?' },
            options: [
              { say: { es: 'Un límite de grupos por noche y por lugar.', en: 'A limit on groups per night and per place.' }, then: { es: 'Las grandes empresas protestan. Las pequeñas lo apoyan.', en: 'The big companies protest. The small ones support it.' } },
              { say: { es: 'Acuerdos con las familias sami para usar sus tierras pagando.', en: 'Agreements with Sami families to use their land for a fee.' }, then: { es: 'Algunas familias aceptan. Otras dicen que la tierra no se alquila.', en: 'Some families accept. Others say land isn’t for rent.' } },
              { say: { es: 'Un sello de turismo responsable con reglas claras.', en: 'A responsible tourism label with clear rules.' }, then: { es: 'Al principio, pocos turistas lo conocen. Tres años después, es lo primero que buscan.', en: 'At first, few tourists know about it. Three years later, it’s the first thing they look for.' } },
            ],
          },
          twist: { es: 'Una empresa grande de la competencia ofrece comprar la empresa de Erik por mucho dinero. Él sabe que no respeta las normas. ¿Debería vender?', en: 'A big competing company offers to buy Erik’s business for a lot of money. He knows it doesn’t respect the rules. Should he sell?' },
          questions: [
            { q: { es: '¿Hay un lugar natural en tu país que esté sufriendo por el turismo?', en: 'Is there a natural place in your country suffering from tourism?' }, help: { es: 'Sí, por ejemplo… porque…', en: 'Yes, for example… because…' }, follow: [{ es: '¿Qué se debería hacer?', en: 'What should be done?' }, { es: '¿Lo has visitado?', en: 'Have you visited it?' }] },
            { q: { es: '¿Pagarías más por un turismo más responsable?', en: 'Would you pay more for more responsible tourism?' }, help: { es: 'Sí, si… / No, porque ya es caro.', en: 'Yes, if… / No, because it’s already expensive.' }, follow: [{ es: '¿Cuánto más?', en: 'How much more?' }, { es: '¿Cómo sabes si es responsable?', en: 'How do you know if it’s responsible?' }] },
            { q: { es: '¿Has sido parte de un problema que querías solucionar?', en: 'Have you been part of a problem you wanted to solve?' }, help: { es: 'Sí, por ejemplo… / Creo que no.', en: 'Yes, for example… / I don’t think so.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Cambió algo?', en: 'Did anything change?' }] },
            { q: { es: '¿Venderías tu negocio a alguien que no respeta tus valores?', en: 'Would you sell your business to someone who doesn’t respect your values?' }, help: { es: 'No, nunca. / Depende del precio…', en: 'No, never. / It depends on the price…' }, follow: [{ es: '¿Qué le pedirías?', en: 'What would you ask of them?' }, { es: '¿Qué harías con el dinero?', en: 'What would you do with the money?' }] },
          ],
          words: [{ es: 'decenas', en: 'dozens' }, { es: 'pastar', en: 'to graze' }, { es: 'compartir', en: 'to share' }, { es: 'el sello', en: 'the label, seal' }, { es: 'la competencia', en: 'the competition' }],
        },
      },
    },
    // ------------------------------------------------------------ the sauna
    {
      id: 'sauna',
      name: { es: 'La sauna junto al lago helado', en: 'The sauna by the frozen lake' },
      who: { name: 'Freja', role: { es: 'dueña de la sauna', en: 'sauna owner' } },
      levels: {
        A0: {
          scene: { es: 'Es una casa pequeña de madera al lado de un lago. El lago tiene hielo. Hay un agujero en el hielo. Freja tiene una sauna.', en: 'It is a small wooden house next to a lake. The lake has ice on it. There is a hole in the ice. Freja has a sauna.' },
          opener: { es: '¡Hola! Soy Freja. Primero, sauna: mucho calor. Después, ¡al agua fría! ¿Quieres probar?', en: 'Hello! I am Freja. First, sauna: very hot. Then, into the cold water! Do you want to try?' },
          decide: {
            ask: { es: 'Freja tiene tres ideas. ¿Qué haces?', en: 'Freja has three ideas. What do you do?' },
            options: [
              { say: { es: 'Entro en la sauna.', en: 'I go into the sauna.' }, then: { es: 'Freja dice: «Hay ochenta grados. ¡Respira despacio!»', en: 'Freja says: “It is eighty degrees. Breathe slowly!”' } },
              { say: { es: 'Entro en el agua fría.', en: 'I go into the cold water.' }, then: { es: 'Freja dice: «¡Muy valiente! Un minuto, no más».', en: 'Freja says: “Very brave! One minute, no more.”' } },
              { say: { es: 'Solo miro. Tomo un té.', en: 'I just watch. I have a tea.' }, then: { es: 'Freja dice: «Muy bien. El té también es sueco».', en: 'Freja says: “Very good. Tea is Swedish too.”' } },
            ],
          },
          twist: { es: 'Sales del agua. Hace mucho frío. Freja te da una toalla. ¿Qué dices?', en: 'You get out of the water. It is very cold. Freja gives you a towel. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta el calor?', en: 'Do you like heat?' }, help: { es: 'Sí, mucho. / No, prefiero el frío.', en: 'Yes, a lot. / No, I prefer the cold.' }, follow: [{ es: '¿Has estado en una sauna?', en: 'Have you been in a sauna?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
            { q: { es: '¿Te bañas en agua fría?', en: 'Do you bathe in cold water?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Hay un lago cerca de tu casa?', en: 'Is there a lake near your home?' }, help: { es: 'Sí, hay uno. / No, no hay.', en: 'Yes, there is one. / No, there isn’t.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is it called?' }, { es: '¿Vas?', en: 'Do you go?' }] },
            { q: { es: '¿Qué haces para relajarte?', en: 'What do you do to relax?' }, help: { es: 'Leo / camino / escucho música…', en: 'I read / walk / listen to music…' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Dónde?', en: 'Where?' }] },
          ],
          words: [{ es: 'la sauna', en: 'the sauna' }, { es: 'el lago', en: 'the lake' }, { es: 'el agujero', en: 'the hole' }, { es: 'respirar', en: 'to breathe' }, { es: 'la toalla', en: 'the towel' }],
        },
        A1: {
          scene: { es: 'Es sábado por la tarde. En la sauna de Freja hay vecinos del pueblo, dos turistas japoneses y un grupo de jóvenes. Todos están en silencio. En Suecia, en la sauna se habla poco o nada.', en: 'It is Saturday afternoon. In Freja’s sauna there are people from the village, two Japanese tourists and a group of young people. Everyone is silent. In Sweden, people talk little or not at all in the sauna.' },
          opener: { es: 'Para mí, la sauna es como una iglesia. Entras, te sientas, sudas y piensas. Después, el agua fría te despierta todo el cuerpo. Mi abuela venía todos los días hasta los noventa y cinco años. ¿Tú tienes un lugar para desconectar?', en: 'For me, the sauna is like a church. You go in, sit down, sweat and think. Then the cold water wakes up your whole body. My grandmother came every day until she was ninety-five. Do you have a place to switch off?' },
          decide: {
            ask: { es: 'Los jóvenes hablan muy alto en la sauna. Los vecinos los miran mal. ¿Qué haces?', en: 'The young people are talking very loudly in the sauna. The locals glare at them. What do you do?' },
            options: [
              { say: { es: 'Les explico en voz baja la costumbre del silencio.', en: 'I quietly explain the custom of silence.' }, then: { es: 'Los jóvenes se disculpan. Uno de ellos se queda en silencio una hora entera.', en: 'The young people apologise. One of them stays silent for a whole hour.' } },
              { say: { es: 'Salgo y voy al agua fría.', en: 'I go out to the cold water.' }, then: { es: 'En el agua helada no oyes nada. Solo tu corazón.', en: 'In the icy water you hear nothing. Only your heart.' } },
              { say: { es: 'Me río con ellos. No pasa nada.', en: 'I laugh with them. It’s no big deal.' }, then: { es: 'Una señora mayor te mira muy seria. Luego, sonríe un poco.', en: 'An elderly lady gives you a very serious look. Then she smiles a little.' } },
            ],
          },
          twist: { es: 'Uno de los turistas se marea después de la sauna y casi se cae al agua. ¿Qué haces?', en: 'One of the tourists feels dizzy after the sauna and nearly falls into the water. What do you do?' },
          questions: [
            { q: { es: '¿Tienes un lugar para desconectar?', en: 'Do you have a place to switch off?' }, help: { es: 'Sí, en… / No, me cuesta desconectar.', en: 'Yes, at… / No, I find it hard to switch off.' }, follow: [{ es: '¿Qué haces allí?', en: 'What do you do there?' }, { es: '¿Con qué frecuencia vas?', en: 'How often do you go?' }] },
            { q: { es: '¿Te gusta el silencio?', en: 'Do you like silence?' }, help: { es: 'Sí, mucho. / No, me pone nervioso.', en: 'Yes, a lot. / No, it makes me nervous.' }, follow: [{ es: '¿Cuándo buscas silencio?', en: 'When do you look for silence?' }, { es: '¿Hay mucho ruido donde vives?', en: 'Is there much noise where you live?' }] },
            { q: { es: '¿Hay costumbres raras en tu país para los extranjeros?', en: 'Are there customs in your country that seem strange to foreigners?' }, help: { es: 'Sí, por ejemplo…', en: 'Yes, for example…' }, follow: [{ es: '¿Por qué son raras?', en: 'Why are they strange?' }, { es: '¿Te gustan?', en: 'Do you like them?' }] },
            { q: { es: '¿Qué hacían tus abuelos para estar sanos?', en: 'What did your grandparents do to stay healthy?' }, help: { es: 'Caminaban / comían… / trabajaban en…', en: 'They walked / ate… / worked in…' }, follow: [{ es: '¿Tú lo haces también?', en: 'Do you do it too?' }, { es: '¿Funcionaba?', en: 'Did it work?' }] },
          ],
          words: [{ es: 'sudar', en: 'to sweat' }, { es: 'desconectar', en: 'to switch off' }, { es: 'la costumbre', en: 'the custom' }, { es: 'marearse', en: 'to feel dizzy' }, { es: 'helado', en: 'icy, frozen' }],
        },
        A2: {
          scene: { es: 'La sauna de Freja se ha hecho famosa en las redes sociales. Ahora vienen influencers a grabar vídeos en el agujero del hielo. Freja gana más dinero, pero los vecinos del pueblo ya no vienen porque siempre hay cámaras y ruido.', en: 'Freja’s sauna has become famous on social media. Now influencers come to film videos in the ice hole. Freja earns more money, but the villagers no longer come because there are always cameras and noise.' },
          opener: { es: 'Antes, esta sauna era el lugar del pueblo para hablar de todo y de nada. Ahora es un decorado para vídeos. Necesito el dinero, porque el invierno es largo y caro. Pero echo de menos a mis vecinos. ¿Tú has visto un lugar cambiar por internet?', en: 'Before, this sauna was the village place to talk about everything and nothing. Now it’s a set for videos. I need the money, because winter is long and expensive. But I miss my neighbours. Have you seen a place change because of the internet?' },
          decide: {
            ask: { es: 'Freja quiere recuperar a sus vecinos. ¿Qué le aconsejas?', en: 'Freja wants to win back her neighbours. What do you advise her?' },
            options: [
              { say: { es: 'Que prohíba las cámaras dentro de la sauna.', en: 'Ban cameras inside the sauna.' }, then: { es: 'Los influencers se enfadan y escriben críticas. Los vecinos vuelven poco a poco.', en: 'The influencers get angry and write bad reviews. The neighbours slowly return.' } },
              { say: { es: 'Que haga días solo para gente del pueblo.', en: 'Have days just for village people.' }, then: { es: 'Los martes y jueves son del pueblo. La abuela de la casa de al lado vuelve después de un año.', en: 'Tuesdays and Thursdays are for the village. The old lady next door comes back after a year.' } },
              { say: { es: 'Que cobre mucho más a los que graban vídeos.', en: 'Charge much more to people who film videos.' }, then: { es: 'Vienen menos influencers, pero pagan el doble. Freja ya no tiene problemas de dinero.', en: 'Fewer influencers come, but they pay double. Freja no longer has money problems.' } },
            ],
          },
          twist: { es: 'Un influencer muy famoso se graba saltando al agujero de noche, sin permiso, y se hace daño. Su vídeo culpa a la sauna. ¿Qué hace Freja?', en: 'A very famous influencer films himself jumping into the hole at night, without permission, and gets hurt. His video blames the sauna. What does Freja do?' },
          questions: [
            { q: { es: '¿Has visto un lugar cambiar por internet?', en: 'Have you seen a place change because of the internet?' }, help: { es: 'Sí, un café / una playa… ahora…', en: 'Yes, a café / a beach… now…' }, follow: [{ es: '¿Para bien o para mal?', en: 'For better or worse?' }, { es: '¿Vas todavía?', en: 'Do you still go?' }] },
            { q: { es: '¿Sigues a influencers?', en: 'Do you follow influencers?' }, help: { es: 'Sí, a… porque… / No, a nadie.', en: 'Yes, … because… / No, nobody.' }, follow: [{ es: '¿Qué te gusta de su contenido?', en: 'What do you like about their content?' }, { es: '¿Confías en ellos?', en: 'Do you trust them?' }] },
            { q: { es: '¿Qué lugar de tu barrio te gustaría proteger?', en: 'Which place in your neighbourhood would you like to protect?' }, help: { es: 'Me gustaría proteger… porque…', en: 'I would like to protect… because…' }, follow: [{ es: '¿Está en peligro?', en: 'Is it at risk?' }, { es: '¿Qué harías?', en: 'What would you do?' }] },
            { q: { es: '¿Te grabarías haciendo algo peligroso para internet?', en: 'Would you film yourself doing something dangerous for the internet?' }, help: { es: 'No, nunca. / Quizás, si…', en: 'No, never. / Maybe, if…' }, follow: [{ es: '¿Por qué crees que la gente lo hace?', en: 'Why do you think people do it?' }, { es: '¿Has visto algún caso?', en: 'Have you seen any cases?' }] },
          ],
          words: [{ es: 'grabar', en: 'to film' }, { es: 'el decorado', en: 'the set (for filming)' }, { es: 'echar de menos', en: 'to miss' }, { es: 'cobrar', en: 'to charge' }, { es: 'culpar', en: 'to blame' }],
        },
        B1: {
          scene: { es: 'Freja ha creado un pequeño grupo para personas con depresión: se reúnen tres veces por semana para hacer sauna y bañarse en agua fría. Muchos dicen que les ayuda más que los medicamentos. Un periódico quiere publicar un artículo con el título «La sauna que cura la depresión».', en: 'Freja has started a small group for people with depression: they meet three times a week for the sauna and a cold-water swim. Many say it helps them more than medication. A newspaper wants to publish an article titled “The sauna that cures depression.”' },
          opener: { es: 'Me alegra que la gente se sienta mejor. Pero yo no soy médica, y el título del periódico es peligroso: alguien podría dejar sus medicamentos por leerlo. Al mismo tiempo, si sale el artículo, quizás más personas solas encuentren el grupo. ¿Cómo se habla de algo que ayuda sin prometer milagros?', en: 'I’m glad people feel better. But I’m not a doctor, and the newspaper’s title is dangerous: someone could stop taking their medication after reading it. At the same time, if the article comes out, maybe more lonely people will find the group. How do you talk about something that helps without promising miracles?' },
          decide: {
            ask: { es: 'Freja tiene que contestar al periódico hoy. ¿Qué debería hacer?', en: 'Freja has to answer the newspaper today. What should she do?' },
            options: [
              { say: { es: 'Aceptar el artículo, pero exigir que cambien el título.', en: 'Accept the article, but demand they change the title.' }, then: { es: 'El título final es «Calor, frío y compañía». Llegan veinte personas nuevas.', en: 'The final title is “Heat, cold and company”. Twenty new people arrive.' } },
              { say: { es: 'Rechazar el artículo para proteger al grupo.', en: 'Turn down the article to protect the group.' }, then: { es: 'El grupo sigue pequeño y tranquilo. Algunos miembros se lo agradecen.', en: 'The group stays small and calm. Some members thank her for it.' } },
              { say: { es: 'Pedir a un médico que participe en el artículo.', en: 'Ask a doctor to take part in the article.' }, then: { es: 'El médico explica los beneficios y los límites. El artículo se usa en una universidad.', en: 'The doctor explains the benefits and the limits. The article is used at a university.' } },
            ],
          },
          twist: { es: 'Una mujer del grupo le dice a Freja que ha dejado su tratamiento porque «la sauna es suficiente». Freja está muy preocupada. ¿Qué debería hacer?', en: 'A woman in the group tells Freja she has stopped her treatment because “the sauna is enough”. Freja is very worried. What should she do?' },
          questions: [
            { q: { es: '¿Qué te ayuda cuando estás triste?', en: 'What helps you when you are sad?' }, help: { es: 'Me ayuda… / Hablo con…', en: '… helps me. / I talk to…' }, follow: [{ es: '¿Siempre funciona?', en: 'Does it always work?' }, { es: '¿Se lo recomendarías a otros?', en: 'Would you recommend it to others?' }] },
            { q: { es: '¿Los medios exageran las noticias sobre salud?', en: 'Does the media exaggerate health news?' }, help: { es: 'Sí, a menudo, porque… / No siempre.', en: 'Yes, often, because… / Not always.' }, follow: [{ es: '¿Recuerdas algún ejemplo?', en: 'Do you remember an example?' }, { es: '¿Dónde buscas información fiable?', en: 'Where do you look for reliable information?' }] },
            { q: { es: '¿Has probado algo poco común para sentirte mejor?', en: 'Have you tried something unusual to feel better?' }, help: { es: 'Sí, probé… / No.', en: 'Yes, I tried… / No.' }, follow: [{ es: '¿Funcionó?', en: 'Did it work?' }, { es: '¿Lo seguirías haciendo?', en: 'Would you keep doing it?' }] },
            { q: { es: '¿Es importante hablar de la salud mental en público?', en: 'Is it important to talk about mental health in public?' }, help: { es: 'Sí, porque… / Depende de cómo.', en: 'Yes, because… / It depends how.' }, follow: [{ es: '¿Se habla en tu país?', en: 'Is it talked about in your country?' }, { es: '¿Ha cambiado en los últimos años?', en: 'Has it changed in recent years?' }] },
          ],
          words: [{ es: 'la depresión', en: 'depression' }, { es: 'los medicamentos', en: 'medication' }, { es: 'el milagro', en: 'the miracle' }, { es: 'el tratamiento', en: 'the treatment' }, { es: 'fiable', en: 'reliable' }],
        },
      },
    },
    // ------------------------------------------------------------ Kiruna, the moving town
    {
      id: 'kiruna',
      name: { es: 'Kiruna, la ciudad que se muda', en: 'Kiruna, the town that is moving' },
      who: { name: 'Per', role: { es: 'minero', en: 'miner' } },
      levels: {
        A0: {
          scene: { es: 'Es una ciudad pequeña en el norte. Hay una mina muy grande. La ciudad se mueve a otro lugar. Per trabaja en la mina.', en: 'It is a small town in the north. There is a very big mine. The town is moving to another place. Per works in the mine.' },
          opener: { es: '¡Hola! Soy Per. Trabajo en la mina. Mi ciudad se mueve tres kilómetros. ¡Es verdad!', en: 'Hello! I am Per. I work in the mine. My town is moving three kilometres. It’s true!' },
          decide: {
            ask: { es: 'Per tiene tres cosas para enseñarte. ¿Qué quieres ver?', en: 'Per has three things to show you. What do you want to see?' },
            options: [
              { say: { es: 'La iglesia de madera.', en: 'The wooden church.' }, then: { es: 'Per dice: «La movemos entera, en un camión enorme».', en: 'Per says: “We are moving it whole, on a huge truck.”' } },
              { say: { es: 'La mina.', en: 'The mine.' }, then: { es: 'Per dice: «Tiene mil trescientos metros de profundidad».', en: 'Per says: “It is one thousand three hundred metres deep.”' } },
              { say: { es: 'El centro nuevo.', en: 'The new centre.' }, then: { es: 'Per dice: «Es moderno. Pero yo prefiero el viejo».', en: 'Per says: “It is modern. But I prefer the old one.”' } },
            ],
          },
          twist: { es: 'Per dice: «Mi casa también se mueve. En un camión». ¿Qué dices?', en: 'Per says: “My house is moving too. On a truck.” What do you say?' },
          questions: [
            { q: { es: '¿Tu ciudad es grande o pequeña?', en: 'Is your town big or small?' }, help: { es: 'Es grande. / Es pequeña.', en: 'It is big. / It is small.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué hay?', en: 'What is there?' }] },
            { q: { es: '¿Hay una iglesia bonita en tu ciudad?', en: 'Is there a beautiful church in your town?' }, help: { es: 'Sí, hay una. / No.', en: 'Yes, there is one. / No.' }, follow: [{ es: '¿Es antigua?', en: 'Is it old?' }, { es: '¿Vas?', en: 'Do you go?' }] },
            { q: { es: '¿Te gusta tu casa?', en: 'Do you like your house?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Cuántas habitaciones tiene?', en: 'How many rooms does it have?' }, { es: '¿Desde cuándo vives allí?', en: 'How long have you lived there?' }] },
            { q: { es: '¿Trabajarías bajo tierra?', en: 'Would you work underground?' }, help: { es: 'Sí, ¿por qué no? / No, nunca.', en: 'Yes, why not? / No, never.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué trabajo prefieres?', en: 'Which job do you prefer?' }] },
          ],
          words: [{ es: 'la mina', en: 'the mine' }, { es: 'el minero', en: 'the miner' }, { es: 'mudarse', en: 'to move (home)' }, { es: 'la profundidad', en: 'depth' }, { es: 'el camión', en: 'the truck' }],
        },
        A1: {
          scene: { es: 'La mina de hierro está tan cerca de la ciudad que el suelo se está rompiendo. Por eso, Kiruna se muda poco a poco a un lugar nuevo. Per y su familia viven en la calle que se va a mover este año.', en: 'The iron mine is so close to the town that the ground is cracking. That’s why Kiruna is slowly moving to a new location. Per and his family live on the street that will be moved this year.' },
          opener: { es: 'Trabajo en la mina desde hace veinte años, igual que mi padre. Sin la mina no hay Kiruna, pero la mina también se está comiendo la ciudad. Es raro, ¿no? Mis hijos van a crecer en un barrio que todavía no existe. ¿Tú has cambiado de casa muchas veces?', en: 'I’ve worked in the mine for twenty years, like my father. Without the mine there is no Kiruna, but the mine is also eating up the town. Strange, isn’t it? My children will grow up in a neighbourhood that doesn’t exist yet. Have you moved house many times?' },
          decide: {
            ask: { es: 'La empresa de la mina ofrece a Per dos opciones. ¿Qué elige?', en: 'The mining company offers Per two options. Which does he choose?' },
            options: [
              { say: { es: 'Una casa nueva y moderna en el centro nuevo.', en: 'A new, modern house in the new centre.' }, then: { es: 'La casa tiene calefacción en el suelo. Sus hijos están encantados.', en: 'The house has underfloor heating. His children are delighted.' } },
              { say: { es: 'Mover su casa vieja de madera en un camión.', en: 'Move his old wooden house on a truck.' }, then: { es: 'Todo el barrio sale a ver el camión. La casa llega entera.', en: 'The whole neighbourhood comes out to watch the truck. The house arrives in one piece.' } },
              { say: { es: 'Dinero para irse a vivir a otra ciudad.', en: 'Money to go and live in another town.' }, then: { es: 'Per piensa en irse al sur. Al final se queda, porque echa de menos la nieve.', en: 'Per thinks about moving south. In the end he stays, because he misses the snow.' } },
            ],
          },
          twist: { es: 'La hija de Per no quiere dejar su habitación. Llora y se encierra. ¿Qué le dices?', en: 'Per’s daughter doesn’t want to leave her room. She cries and locks herself in. What do you say to her?' },
          questions: [
            { q: { es: '¿Has cambiado de casa muchas veces?', en: 'Have you moved house many times?' }, help: { es: 'Sí, … veces. / No, siempre he vivido en la misma.', en: 'Yes, … times. / No, I’ve always lived in the same one.' }, follow: [{ es: '¿Cuál era tu casa favorita?', en: 'Which was your favourite home?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Trabajas en lo mismo que tus padres?', en: 'Do you work in the same thing as your parents?' }, help: { es: 'Sí, como mi… / No, ellos eran…', en: 'Yes, like my… / No, they were…' }, follow: [{ es: '¿Te gustaría?', en: 'Would you like to?' }, { es: '¿Qué aprendiste de ellos?', en: 'What did you learn from them?' }] },
            { q: { es: '¿Qué hay en tu habitación que es importante para ti?', en: 'What is there in your room that is important to you?' }, help: { es: 'Hay… que me regaló…', en: 'There is… that… gave me.' }, follow: [{ es: '¿Desde cuándo lo tienes?', en: 'How long have you had it?' }, { es: '¿Lo llevarías a otra casa?', en: 'Would you take it to another home?' }] },
            { q: { es: '¿Tu ciudad depende de una empresa o un trabajo?', en: 'Does your town depend on one company or job?' }, help: { es: 'Sí, del turismo / de una fábrica… / No.', en: 'Yes, on tourism / a factory… / No.' }, follow: [{ es: '¿Es bueno o malo?', en: 'Is it good or bad?' }, { es: '¿Qué pasaría si se acaba?', en: 'What would happen if it ended?' }] },
          ],
          words: [{ es: 'el hierro', en: 'iron' }, { es: 'romperse', en: 'to crack, break' }, { es: 'la calefacción', en: 'heating' }, { es: 'encerrarse', en: 'to lock oneself in' }, { es: 'crecer', en: 'to grow up' }],
        },
        A2: {
          scene: { es: 'La mina ha descubierto un enorme depósito de tierras raras, minerales necesarios para los coches eléctricos y los móviles. Es una buena noticia para Europa, pero significa que la mina crecerá todavía más. Per está orgulloso, pero sus vecinos sami están preocupados por sus renos.', en: 'The mine has discovered a huge deposit of rare earths, minerals needed for electric cars and phones. It’s good news for Europe, but it means the mine will grow even bigger. Per is proud, but his Sami neighbours are worried about their reindeer.' },
          opener: { es: 'Todos queremos coches eléctricos y teléfonos nuevos, pero nadie quiere una mina al lado de su casa. Nosotros sí la tenemos. Mi amigo Ánte es sami: sus renos pasan por donde quieren hacer la nueva mina. Él y yo nunca hemos discutido, hasta ahora. ¿Qué haces cuando un amigo piensa muy diferente?', en: 'We all want electric cars and new phones, but nobody wants a mine next to their house. We do have one. My friend Ánte is Sami: his reindeer pass through where they want to build the new mine. He and I had never argued, until now. What do you do when a friend thinks very differently?' },
          decide: {
            ask: { es: 'Per y Ánte discuten en el bar del pueblo. ¿Qué le aconsejas a Per?', en: 'Per and Ánte are arguing in the village bar. What do you advise Per?' },
            options: [
              { say: { es: 'Que escuche a Ánte sin defender la mina.', en: 'Listen to Ánte without defending the mine.' }, then: { es: 'Ánte le explica cómo afectará a su familia. Per lo ve de otra forma.', en: 'Ánte explains how it will affect his family. Per sees it differently.' } },
              { say: { es: 'Que no hablen de la mina y sigan siendo amigos.', en: 'Don’t talk about the mine and stay friends.' }, then: { es: 'Funciona unos meses, pero el tema siempre vuelve.', en: 'It works for a few months, but the topic always comes back.' } },
              { say: { es: 'Que vayan juntos a la reunión con la empresa.', en: 'Go together to the meeting with the company.' }, then: { es: 'Ver juntos al minero y al pastor sorprende a todos. La empresa promete escucharlos.', en: 'Seeing the miner and the herder together surprises everyone. The company promises to listen.' } },
            ],
          },
          twist: { es: 'El jefe de Per le dice que, si habla mal de la mina en público, puede perder su puesto. ¿Qué hace Per?', en: 'Per’s boss tells him that if he speaks badly of the mine in public, he could lose his job. What does Per do?' },
          questions: [
            { q: { es: '¿Sabes de dónde vienen los materiales de tu móvil?', en: 'Do you know where the materials in your phone come from?' }, help: { es: 'Sí, de… / No, nunca lo he pensado.', en: 'Yes, from… / No, I’ve never thought about it.' }, follow: [{ es: '¿Te importa?', en: 'Does it matter to you?' }, { es: '¿Cada cuánto cambias de móvil?', en: 'How often do you change phones?' }] },
            { q: { es: '¿Has discutido con un amigo por política?', en: 'Have you argued with a friend about politics?' }, help: { es: 'Sí, una vez… / No, evito esos temas.', en: 'Yes, once… / No, I avoid those topics.' }, follow: [{ es: '¿Todavía son amigos?', en: 'Are you still friends?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Aceptarías una mina cerca de tu casa?', en: 'Would you accept a mine near your home?' }, help: { es: 'Sí, si da trabajo… / No, porque…', en: 'Yes, if it creates jobs… / No, because…' }, follow: [{ es: '¿Y una fábrica?', en: 'And a factory?' }, { es: '¿Y un aeropuerto?', en: 'And an airport?' }] },
            { q: { es: '¿Hablarías mal de tu empresa en público?', en: 'Would you speak badly of your company in public?' }, help: { es: 'Sí, si… / No, nunca.', en: 'Yes, if… / No, never.' }, follow: [{ es: '¿Qué tendría que pasar?', en: 'What would have to happen?' }, { es: '¿Conoces a alguien que lo haya hecho?', en: 'Do you know someone who has done it?' }] },
          ],
          words: [{ es: 'el depósito', en: 'the deposit' }, { es: 'las tierras raras', en: 'rare earths' }, { es: 'orgulloso', en: 'proud' }, { es: 'el pastor', en: 'the herder' }, { es: 'afectar', en: 'to affect' }],
        },
        B1: {
          scene: { es: 'El traslado de Kiruna durará décadas. El centro nuevo es moderno y eficiente, pero muchos mayores dicen que no lo sienten suyo. Han desaparecido los bares de siempre, la vieja estación y las calles donde crecieron. El ayuntamiento pregunta a los vecinos qué edificios del pasado deberían reconstruirse.', en: 'Kiruna’s relocation will take decades. The new centre is modern and efficient, but many older people say it doesn’t feel like theirs. The old bars, the old station and the streets where they grew up are gone. The council is asking residents which buildings from the past should be rebuilt.' },
          opener: { es: 'Una ciudad no son solo edificios: son recuerdos. Mi madre se niega a ir al centro nuevo porque dice que «allí no ha pasado nada». Yo creo que hay que empezar a crear recuerdos nuevos, pero entiendo su tristeza. Solo hay dinero para reconstruir un edificio. ¿Qué es lo que hace que un lugar sea tuyo?', en: 'A town isn’t just buildings: it’s memories. My mother refuses to go to the new centre because she says “nothing has happened there.” I think we have to start making new memories, but I understand her sadness. There’s only money to rebuild one building. What is it that makes a place yours?' },
          decide: {
            ask: { es: 'Per tiene que votar qué edificio se reconstruye. ¿Cuál debería elegir?', en: 'Per has to vote on which building to rebuild. Which should he choose?' },
            options: [
              { say: { es: 'El viejo bar donde se reunían los mineros.', en: 'The old bar where the miners used to meet.' }, then: { es: 'El bar reabre con las mismas mesas. Su madre va el primer día.', en: 'The bar reopens with the same tables. His mother goes on the first day.' } },
              { say: { es: 'La vieja estación de tren, para turistas y vecinos.', en: 'The old train station, for tourists and residents.' }, then: { es: 'La estación se convierte en museo y café. Es el lugar más visitado.', en: 'The station becomes a museum and café. It’s the most visited place.' } },
              { say: { es: 'Ninguno: mejor gastar el dinero en algo nuevo para los jóvenes.', en: 'None: better to spend the money on something new for young people.' }, then: { es: 'Se construye un centro juvenil. Los jóvenes lo adoran; los mayores, no tanto.', en: 'A youth centre is built. Young people love it; older people, not so much.' } },
            ],
          },
          twist: { es: 'Un arquitecto propone hacer una copia exacta del viejo centro para turistas, con actores vestidos de mineros. Muchos vecinos se sienten ofendidos. ¿Qué opina Per?', en: 'An architect proposes making an exact copy of the old centre for tourists, with actors dressed as miners. Many residents feel offended. What does Per think?' },
          questions: [
            { q: { es: '¿Qué hace que un lugar sea tuyo?', en: 'What makes a place yours?' }, help: { es: 'Para mí es… porque…', en: 'For me it’s… because…' }, follow: [{ es: '¿Tienes un lugar así?', en: 'Do you have a place like that?' }, { es: '¿Ha cambiado?', en: 'Has it changed?' }] },
            { q: { es: '¿Ha desaparecido algún lugar importante de tu infancia?', en: 'Has an important place from your childhood disappeared?' }, help: { es: 'Sí, el / la… ya no existe. / No.', en: 'Yes, the… no longer exists. / No.' }, follow: [{ es: '¿Qué hay ahora?', en: 'What is there now?' }, { es: '¿Cómo te sientes?', en: 'How do you feel?' }] },
            { q: { es: '¿Es mejor reconstruir el pasado o construir algo nuevo?', en: 'Is it better to rebuild the past or build something new?' }, help: { es: 'Depende de… / Prefiero… porque…', en: 'It depends on… / I prefer… because…' }, follow: [{ es: '¿Conoces un buen ejemplo?', en: 'Do you know a good example?' }, { es: '¿Y uno malo?', en: 'And a bad one?' }] },
            { q: { es: '¿Qué opinas de convertir la historia en espectáculo para turistas?', en: 'What do you think of turning history into a show for tourists?' }, help: { es: 'Me parece… porque…', en: 'I think it’s… because…' }, follow: [{ es: '¿Has visto algo así?', en: 'Have you seen something like that?' }, { es: '¿Te gustó?', en: 'Did you like it?' }] },
          ],
          words: [{ es: 'el traslado', en: 'the relocation' }, { es: 'reconstruir', en: 'to rebuild' }, { es: 'negarse a', en: 'to refuse to' }, { es: 'el recuerdo', en: 'the memory' }, { es: 'ofendido', en: 'offended' }],
        },
      },
    },
  ],
};
