// Buenos Aires · cafés, tango, La Boca, Retiro and the San Telmo fair. Five
// places, four levels each (A0, A1, A2, B1). Every level is written on its own:
// same place and people, different situations, decisions and questions.
export default {
  id: 'buenos-aires',
  spots: [
    // ------------------------------------------------------------ the old café
    {
      id: 'cafe',
      name: { es: 'El café notable', en: 'The historic café' },
      who: { name: 'Don Alberto', role: { es: 'mozo', en: 'waiter' } },
      levels: {
        A0: {
          scene: { es: 'Es un café muy viejo y bonito. Hay mesas de madera y lámparas. Don Alberto es el mozo.', en: 'It is a very old and beautiful café. There are wooden tables and lamps. Don Alberto is the waiter.' },
          opener: { es: 'Buenas tardes. Soy Alberto. ¿Qué tomas?', en: 'Good afternoon. I am Alberto. What will you have?' },
          decide: {
            ask: { es: 'Hay café, té y chocolate. ¿Qué pides?', en: 'There is coffee, tea and hot chocolate. What do you order?' },
            options: [
              { say: { es: 'Un café con leche, por favor.', en: 'A white coffee, please.' }, then: { es: 'Alberto dice: «Muy bien. ¿Con medialunas?»', en: 'Alberto says: “Very good. With croissants?”' } },
              { say: { es: 'Un té, por favor.', en: 'A tea, please.' }, then: { es: 'Alberto dice: «Claro. ¿Con limón o con leche?»', en: 'Alberto says: “Sure. With lemon or with milk?”' } },
              { say: { es: 'Un chocolate caliente.', en: 'A hot chocolate.' }, then: { es: 'Alberto dice: «¡Hace frío hoy! Buena idea».', en: 'Alberto says: “It is cold today! Good idea.”' } },
            ],
          },
          twist: { es: 'Alberto trae tres medialunas. «Son gratis. Hoy es mi cumpleaños». ¿Qué dices?', en: 'Alberto brings three croissants. “They are free. Today is my birthday.” What do you say?' },
          questions: [
            { q: { es: '¿Tomas café?', en: 'Do you drink coffee?' }, help: { es: 'Sí, tomo café. / No, tomo té.', en: 'Yes, I drink coffee. / No, I drink tea.' }, follow: [{ es: '¿Cuántos cafés al día?', en: 'How many coffees a day?' }, { es: '¿Con azúcar?', en: 'With sugar?' }] },
            { q: { es: '¿Te gustan los cafés viejos?', en: 'Do you like old cafés?' }, help: { es: 'Sí, me gustan. / Prefiero los modernos.', en: 'Yes, I like them. / I prefer modern ones.' }, follow: [{ es: '¿Hay uno en tu ciudad?', en: 'Is there one in your city?' }, { es: '¿Cómo se llama?', en: 'What is it called?' }] },
            { q: { es: '¿Qué comes en la tarde?', en: 'What do you eat in the afternoon?' }, help: { es: 'Como fruta / galletas / nada.', en: 'I eat fruit / biscuits / nothing.' }, follow: [{ es: '¿A qué hora?', en: 'At what time?' }, { es: '¿Con quién?', en: 'Who with?' }] },
            { q: { es: '¿Cuándo es tu cumpleaños?', en: 'When is your birthday?' }, help: { es: 'Mi cumpleaños es en…', en: 'My birthday is in…' }, follow: [{ es: '¿Haces una fiesta?', en: 'Do you have a party?' }, { es: '¿Qué comes ese día?', en: 'What do you eat that day?' }] },
          ],
          words: [{ es: 'el mozo', en: 'the waiter (Argentina)' }, { es: 'la medialuna', en: 'croissant' }, { es: 'la mesa', en: 'the table' }, { es: 'caliente', en: 'hot' }, { es: 'gratis', en: 'free' }],
        },
        A1: {
          scene: { es: 'Estás en un café de la avenida de Mayo, en Buenos Aires. Tiene más de cien años. Hay gente que lee el diario, juega al ajedrez o habla durante horas.', en: 'You are in a café on Avenida de Mayo, in Buenos Aires. It is more than a hundred years old. There are people reading the paper, playing chess or talking for hours.' },
          opener: { es: 'Aquí nadie tiene apuro. Puedes pedir un café y quedarte toda la tarde. Esa mesa del rincón es de un señor que viene todos los días desde 1970.', en: 'Nobody is in a hurry here. You can order a coffee and stay all afternoon. That corner table belongs to a man who has come every day since 1970.' },
          decide: {
            ask: { es: 'Tienes una hora libre. ¿Qué haces en el café?', en: 'You have a free hour. What do you do in the café?' },
            options: [
              { say: { es: 'Juego al ajedrez con el señor del rincón.', en: 'I play chess with the man in the corner.' }, then: { es: 'El señor gana en diez minutos. Después te cuenta la historia del barrio.', en: 'The man wins in ten minutes. Then he tells you the story of the neighbourhood.' } },
              { say: { es: 'Escribo postales para mi familia.', en: 'I write postcards to my family.' }, then: { es: 'Alberto te presta su lapicera y te dice dónde está el correo.', en: 'Alberto lends you his pen and tells you where the post office is.' } },
              { say: { es: 'Miro las fotos de las paredes.', en: 'I look at the photos on the walls.' }, then: { es: 'Hay fotos de escritores y cantantes famosos. Alberto conoce a todos.', en: 'There are photos of famous writers and singers. Alberto knows them all.' } },
            ],
          },
          twist: { es: 'Llega un grupo grande de turistas y no hay mesas. El señor del rincón te mira: quiere su mesa de siempre.', en: 'A big group of tourists arrives and there are no tables. The man in the corner looks at you: he wants his usual table.' },
          questions: [
            { q: { es: '¿Tienes un lugar favorito para tomar algo?', en: 'Do you have a favourite place to have a drink?' }, help: { es: 'Sí, voy a… / No, tomo en casa.', en: 'Yes, I go to… / No, I have it at home.' }, follow: [{ es: '¿Por qué te gusta?', en: 'Why do you like it?' }, { es: '¿Cuántas veces vas?', en: 'How often do you go?' }] },
            { q: { es: '¿Juegas al ajedrez u otro juego?', en: 'Do you play chess or another game?' }, help: { es: 'Sí, juego a… / No, no juego.', en: 'Yes, I play… / No, I don’t play.' }, follow: [{ es: '¿Con quién juegas?', en: 'Who do you play with?' }, { es: '¿Ganas mucho?', en: 'Do you win a lot?' }] },
            { q: { es: '¿Escribes postales o cartas?', en: 'Do you write postcards or letters?' }, help: { es: 'Sí, a veces. / No, mando mensajes.', en: 'Yes, sometimes. / No, I send messages.' }, follow: [{ es: '¿A quién?', en: 'To whom?' }, { es: '¿Recibes cartas?', en: 'Do you get letters?' }] },
            { q: { es: '¿Tienes prisa normalmente?', en: 'Are you usually in a hurry?' }, help: { es: 'Sí, siempre. / No, soy tranquilo.', en: 'Yes, always. / No, I am calm.' }, follow: [{ es: '¿Cuándo tienes más prisa?', en: 'When are you most in a hurry?' }, { es: '¿Qué haces para relajarte?', en: 'What do you do to relax?' }] },
          ],
          words: [{ es: 'el diario', en: 'the newspaper' }, { es: 'el ajedrez', en: 'chess' }, { es: 'el apuro', en: 'hurry (Argentina)' }, { es: 'el rincón', en: 'the corner' }, { es: 'la lapicera', en: 'the pen (Argentina)' }],
        },
        A2: {
          scene: { es: 'Don Alberto trabaja en este café desde hace treinta y ocho años. Conoció a su esposa aquí: ella venía todos los jueves a leer. Hoy es su último día de trabajo antes de jubilarse.', en: 'Don Alberto has worked in this café for thirty-eight years. He met his wife here: she used to come every Thursday to read. Today is his last day at work before retiring.' },
          opener: { es: 'Cuando empecé, los mozos llevábamos corbata y los clientes se quedaban hasta la madrugada hablando de política. Ahora casi todos miran el teléfono. Pero el café sigue siendo el mismo. ¿Tú cómo pasabas las tardes de joven?', en: 'When I started, we waiters wore ties and customers stayed until dawn talking politics. Now almost everyone looks at their phone. But the coffee is still the same. How did you spend your afternoons when you were young?' },
          decide: {
            ask: { es: 'Los clientes quieren hacerle un regalo a Alberto. ¿Qué propones?', en: 'The customers want to give Alberto a present. What do you suggest?' },
            options: [
              { say: { es: 'Una foto de todos los clientes en la puerta del café.', en: 'A photo of all the customers at the café door.' }, then: { es: 'Vienen más de cincuenta personas. Alberto no puede hablar de la emoción.', en: 'More than fifty people come. Alberto can’t speak with emotion.' } },
              { say: { es: 'Una placa con su nombre en su mesa favorita.', en: 'A plaque with his name on his favourite table.' }, then: { es: 'El dueño acepta. Ahora la mesa cuatro se llama «Mesa de Alberto».', en: 'The owner agrees. Now table four is called “Alberto’s Table”.' } },
              { say: { es: 'Un viaje para él y su esposa.', en: 'A trip for him and his wife.' }, then: { es: 'Juntan dinero para un fin de semana en Mar del Plata. Alberto ríe: «¡Por fin me van a servir a mí!»', en: 'They collect money for a weekend in Mar del Plata. Alberto laughs: “At last someone will serve me!”' } },
            ],
          },
          twist: { es: 'El nuevo mozo llega para aprender. Es el nieto del señor que juega al ajedrez en el rincón.', en: 'The new waiter arrives to learn. He is the grandson of the man who plays chess in the corner.' },
          questions: [
            { q: { es: '¿Cómo pasabas las tardes cuando eras joven?', en: 'How did you spend your afternoons when you were young?' }, help: { es: 'Siempre iba a… / Me juntaba con…', en: 'I always went to… / I met up with…' }, follow: [{ es: '¿Lo extrañas?', en: 'Do you miss it?' }, { es: '¿Qué hacen los jóvenes ahora?', en: 'What do young people do now?' }] },
            { q: { es: '¿Dónde conociste a tu mejor amigo o a tu pareja?', en: 'Where did you meet your best friend or your partner?' }, help: { es: 'Lo / La conocí en…', en: 'I met him / her in…' }, follow: [{ es: '¿Cómo fue?', en: 'How was it?' }, { es: '¿Qué pensaste la primera vez?', en: 'What did you think the first time?' }] },
            { q: { es: '¿Trabajaste mucho tiempo en el mismo lugar?', en: 'Have you worked a long time in the same place?' }, help: { es: 'Sí, trabajé… años en… / No, cambio mucho.', en: 'Yes, I worked … years at… / No, I change a lot.' }, follow: [{ es: '¿Qué te gustaba?', en: 'What did you like?' }, { es: '¿Por qué te fuiste?', en: 'Why did you leave?' }] },
            { q: { es: '¿Qué le regalarías a una persona que se jubila?', en: 'What would you give someone who is retiring?' }, help: { es: 'Le regalaría… porque…', en: 'I would give them… because…' }, follow: [{ es: '¿Qué te gustaría recibir a ti?', en: 'What would you like to receive?' }, { es: '¿Qué harás cuando te jubiles?', en: 'What will you do when you retire?' }] },
          ],
          words: [{ es: 'jubilarse', en: 'to retire' }, { es: 'la madrugada', en: 'the early hours' }, { es: 'la placa', en: 'the plaque' }, { es: 'juntar dinero', en: 'to collect money' }, { es: 'la emoción', en: 'emotion' }],
        },
        B1: {
          scene: { es: 'El edificio del café fue vendido a una cadena internacional. Los nuevos dueños prometen «respetar la historia», pero quieren cambiar las mesas, el menú y poner pantallas. Los vecinos piden que el café sea declarado patrimonio de la ciudad.', en: 'The café building has been sold to an international chain. The new owners promise to “respect its history”, but they want to change the tables, the menu and put in screens. Residents are asking for the café to be declared city heritage.' },
          opener: { es: 'Un café notable no es un museo: es un lugar vivo. Si lo congelamos, se muere igual. Pero si lo convierten en una cadena con pantallas, ya no es nuestro. ¿Dónde está el punto medio?', en: 'A historic café isn’t a museum: it’s a living place. If we freeze it, it dies anyway. But if they turn it into a chain with screens, it’s no longer ours. Where is the middle ground?' },
          decide: {
            ask: { es: 'Los vecinos te invitan a firmar una carta. ¿Qué propuesta apoyas?', en: 'The residents invite you to sign a letter. Which proposal do you support?' },
            options: [
              { say: { es: 'Proteger el edificio y la decoración, pero dejar libre el menú.', en: 'Protect the building and décor, but leave the menu free.' }, then: { es: 'Los nuevos dueños aceptan. Las medialunas siguen, pero ahora también hay café frío de caramelo.', en: 'The new owners accept. The croissants stay, but now there is also caramel iced coffee.' } },
              { say: { es: 'Que el gobierno compre el café y lo gestione.', en: 'The government should buy the café and run it.' }, then: { es: 'Alguien recuerda que el último café que compró el gobierno cerró en dos años.', en: 'Someone recalls that the last café the government bought closed within two years.' } },
              { say: { es: 'Aceptar los cambios: los cafés siempre cambiaron.', en: 'Accept the changes: cafés have always changed.' }, then: { es: 'Don Alberto suspira: «En 1950 también decían que la radio iba a matar la conversación».', en: 'Don Alberto sighs: “In 1950 they also said the radio would kill conversation.”' } },
            ],
          },
          twist: { es: 'Se descubre que uno de los vecinos que más protesta es dueño de tres edificios en la misma calle que subieron de precio gracias al café.', en: 'It turns out one of the residents who protests most owns three buildings on the same street that have risen in value thanks to the café.' },
          questions: [
            { q: { es: '¿Qué lugar de tu ciudad debería protegerse aunque no sea rentable?', en: 'What place in your city should be protected even if it isn’t profitable?' }, help: { es: 'Creo que habría que proteger… porque…', en: 'I think … should be protected because…' }, follow: [{ es: '¿Quién debería pagar?', en: 'Who should pay?' }, { es: '¿Está en peligro ahora?', en: 'Is it in danger now?' }] },
            { q: { es: '¿Las cadenas internacionales hacen que todas las ciudades se parezcan?', en: 'Do international chains make all cities look alike?' }, help: { es: 'En parte sí, porque… / No del todo, ya que…', en: 'Partly yes, because… / Not entirely, since…' }, follow: [{ es: '¿Las usas cuando viajas?', en: 'Do you use them when you travel?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Cómo cambió la forma de conversar desde que existen los teléfonos?', en: 'How has the way people talk changed since phones exist?' }, help: { es: 'Antes la gente… y ahora… / Me parece que…', en: 'Before people… and now… / It seems to me that…' }, follow: [{ es: '¿Es para mejor o para peor?', en: 'Is it for better or worse?' }, { es: '¿Tú dejas el teléfono cuando hablas?', en: 'Do you put your phone away when you talk?' }] },
            { q: { es: '¿Qué opinas del vecino que protesta y también se beneficia?', en: 'What do you think of the resident who protests and also benefits?' }, help: { es: 'Me parece hipócrita porque… / Entiendo que…', en: 'It seems hypocritical to me because… / I understand that…' }, follow: [{ es: '¿Sus argumentos valen menos?', en: 'Are his arguments worth less?' }, { es: '¿Conoces un caso parecido?', en: 'Do you know a similar case?' }] },
          ],
          words: [{ es: 'el patrimonio', en: 'heritage' }, { es: 'congelar', en: 'to freeze' }, { es: 'el punto medio', en: 'the middle ground' }, { es: 'gestionar', en: 'to manage, run' }, { es: 'rentable', en: 'profitable' }],
        },
      },
    },
    // ------------------------------------------------------------ the tango hall
    {
      id: 'tango',
      name: { es: 'La milonga de San Telmo', en: 'The San Telmo tango hall' },
      who: { name: 'Malena', role: { es: 'bailarina de tango', en: 'tango dancer' } },
      levels: {
        A0: {
          scene: { es: 'Es de noche. Hay música de tango. Las parejas bailan. Malena tiene zapatos rojos.', en: 'It is night. There is tango music. Couples are dancing. Malena has red shoes.' },
          opener: { es: '¡Hola! Soy Malena. ¿Bailas tango?', en: 'Hi! I am Malena. Do you dance tango?' },
          decide: {
            ask: { es: 'Malena te invita a bailar. ¿Qué dices?', en: 'Malena invites you to dance. What do you say?' },
            options: [
              { say: { es: '¡Sí, vamos!', en: 'Yes, let’s go!' }, then: { es: 'Bailas despacio. Malena dice: «¡Muy bien! Uno, dos, tres».', en: 'You dance slowly. Malena says: “Very good! One, two, three.”' } },
              { say: { es: 'No sé bailar.', en: 'I can’t dance.' }, then: { es: 'Malena dice: «No hay problema. Te enseño».', en: 'Malena says: “No problem. I’ll teach you.”' } },
              { say: { es: 'Primero miro.', en: 'First I watch.' }, then: { es: 'Malena dice: «Bien. Mira los pies».', en: 'Malena says: “Good. Watch the feet.”' } },
            ],
          },
          twist: { es: '¡Pisas el pie de Malena! Ella ríe. ¿Qué dices?', en: 'You step on Malena’s foot! She laughs. What do you say?' },
          questions: [
            { q: { es: '¿Te gusta bailar?', en: 'Do you like dancing?' }, help: { es: 'Sí, me gusta. / No mucho.', en: 'Yes, I like it. / Not much.' }, follow: [{ es: '¿Qué música bailas?', en: 'What music do you dance to?' }, { es: '¿Dónde bailas?', en: 'Where do you dance?' }] },
            { q: { es: '¿Conoces el tango?', en: 'Do you know tango?' }, help: { es: 'Sí, un poco. / No, no lo conozco.', en: 'Yes, a little. / No, I don’t know it.' }, follow: [{ es: '¿Te gusta la música?', en: 'Do you like the music?' }, { es: '¿Quieres aprender?', en: 'Do you want to learn?' }] },
            { q: { es: '¿Qué zapatos usas hoy?', en: 'What shoes are you wearing today?' }, help: { es: 'Uso zapatillas / zapatos negros…', en: 'I am wearing trainers / black shoes…' }, follow: [{ es: '¿De qué color?', en: 'What colour?' }, { es: '¿Son cómodos?', en: 'Are they comfortable?' }] },
            { q: { es: '¿Sales de noche?', en: 'Do you go out at night?' }, help: { es: 'Sí, los sábados. / No, duermo temprano.', en: 'Yes, on Saturdays. / No, I go to bed early.' }, follow: [{ es: '¿Adónde vas?', en: 'Where do you go?' }, { es: '¿A qué hora vuelves?', en: 'What time do you come back?' }] },
          ],
          words: [{ es: 'bailar', en: 'to dance' }, { es: 'la pareja', en: 'the couple, partner' }, { es: 'el pie', en: 'the foot' }, { es: 'pisar', en: 'to step on' }, { es: 'despacio', en: 'slowly' }],
        },
        A1: {
          scene: { es: 'Es domingo a la noche en San Telmo. En la milonga hay gente joven y mayor, argentinos y turistas. Malena da una clase gratis antes del baile.', en: 'It is Sunday night in San Telmo. In the tango hall there are young and older people, Argentines and tourists. Malena gives a free class before the dance.' },
          opener: { es: 'El tango es un abrazo que camina. No necesitas pasos difíciles: necesitas escuchar la música y a tu pareja. ¿Probamos?', en: 'Tango is an embrace that walks. You don’t need difficult steps: you need to listen to the music and to your partner. Shall we try?' },
          decide: {
            ask: { es: 'En la clase tienes que elegir una pareja. ¿Con quién bailas?', en: 'In the class you have to choose a partner. Who do you dance with?' },
            options: [
              { say: { es: 'Con el señor mayor que baila muy bien.', en: 'With the older man who dances very well.' }, then: { es: 'Tiene ochenta años y baila desde los quince. Te guía con mucha paciencia.', en: 'He is eighty and has danced since he was fifteen. He guides you very patiently.' } },
              { say: { es: 'Con otro turista principiante.', en: 'With another beginner tourist.' }, then: { es: 'Los dos se ríen mucho. Al final, aprenden el paso básico juntos.', en: 'You both laugh a lot. In the end, you learn the basic step together.' } },
              { say: { es: 'Con Malena, la profesora.', en: 'With Malena, the teacher.' }, then: { es: 'Malena te corrige la postura: «Más derecho. Y no mires los pies».', en: 'Malena corrects your posture: “Straighter. And don’t look at your feet.”' } },
            ],
          },
          twist: { es: 'La orquesta toca un tango muy rápido. Todos los principiantes se van a sentar, menos tú.', en: 'The band plays a very fast tango. All the beginners go and sit down, except you.' },
          questions: [
            { q: { es: '¿Tomaste alguna vez una clase de baile?', en: 'Have you ever taken a dance class?' }, help: { es: 'Sí, tomé clases de… / No, nunca.', en: 'Yes, I took … classes. / No, never.' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Seguiste?', en: 'Did you continue?' }] },
            { q: { es: '¿Qué haces los domingos a la noche?', en: 'What do you do on Sunday nights?' }, help: { es: 'Normalmente… / Me preparo para el lunes.', en: 'Usually… / I get ready for Monday.' }, follow: [{ es: '¿Sales o te quedas en casa?', en: 'Do you go out or stay home?' }, { es: '¿Con quién?', en: 'Who with?' }] },
            { q: { es: '¿Prefieres aprender con alguien experto o con alguien de tu nivel?', en: 'Do you prefer learning with an expert or with someone at your level?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Y en el trabajo?', en: 'And at work?' }, { es: '¿Te gusta enseñar?', en: 'Do you like teaching?' }] },
            { q: { es: '¿Qué música típica tiene tu país?', en: 'What typical music does your country have?' }, help: { es: 'En mi país hay… / Se baila…', en: 'In my country there is… / People dance…' }, follow: [{ es: '¿La bailas?', en: 'Do you dance it?' }, { es: '¿Cuándo se escucha?', en: 'When is it played?' }] },
          ],
          words: [{ es: 'la milonga', en: 'tango dance hall' }, { es: 'el abrazo', en: 'the embrace' }, { es: 'el paso', en: 'the step' }, { es: 'la postura', en: 'posture' }, { es: 'el principiante', en: 'the beginner' }],
        },
        A2: {
          scene: { es: 'Malena llegó a Buenos Aires desde un pueblo de Santiago del Estero a los dieciocho años. Trabajaba de día en una tienda y de noche aprendía tango. Hoy da clases y baila en espectáculos para turistas.', en: 'Malena came to Buenos Aires from a town in Santiago del Estero at eighteen. She worked in a shop by day and learned tango by night. Today she teaches and dances in shows for tourists.' },
          opener: { es: 'Mi mamá no entendía por qué me iba. En mi pueblo se baila chacarera, no tango. Los primeros meses lloraba todas las noches. Pero un día bailé con un señor que me dijo: «Tú bailas como si estuvieras contando un secreto». Ese día me quedé.', en: 'My mum didn’t understand why I was leaving. In my town people dance chacarera, not tango. The first months I cried every night. But one day I danced with a man who told me: “You dance as if you were telling a secret.” That day I stayed.' },
          decide: {
            ask: { es: 'Malena tiene dos ofertas para el verano. ¿Cuál le recomiendas?', en: 'Malena has two offers for the summer. Which do you recommend?' },
            options: [
              { say: { es: 'Una gira por Europa con una compañía de tango.', en: 'A tour of Europe with a tango company.' }, then: { es: 'Malena se ilusiona, pero tendría que dejar a sus alumnos tres meses.', en: 'Malena gets excited, but she would have to leave her students for three months.' } },
              { say: { es: 'Volver a su pueblo y enseñar tango y chacarera juntos.', en: 'Go back to her town and teach tango and chacarera together.' }, then: { es: 'Su mamá llora de alegría por teléfono. Ya está buscando un salón.', en: 'Her mum cries with joy on the phone. She is already looking for a hall.' } },
              { say: { es: 'Quedarse en Buenos Aires y abrir su propia escuela.', en: 'Stay in Buenos Aires and open her own school.' }, then: { es: 'Es lo más difícil, pero lo que siempre soñó. Empieza a buscar un local en San Telmo.', en: 'It’s the hardest, but what she always dreamed of. She starts looking for premises in San Telmo.' } },
            ],
          },
          twist: { es: 'El señor que le dijo la frase del secreto entra en la milonga. Hace diez años que no venía.', en: 'The man who told her the line about the secret walks into the hall. He hasn’t come for ten years.' },
          questions: [
            { q: { es: '¿Te fuiste alguna vez de tu ciudad para hacer algo que te gustaba?', en: 'Have you ever left your city to do something you loved?' }, help: { es: 'Sí, me fui a… para… / No, pero…', en: 'Yes, I went to… to… / No, but…' }, follow: [{ es: '¿Qué dijo tu familia?', en: 'What did your family say?' }, { es: '¿Valió la pena?', en: 'Was it worth it?' }] },
            { q: { es: '¿Qué frase te dijo alguien que nunca olvidaste?', en: 'What did someone tell you that you never forgot?' }, help: { es: 'Una vez alguien me dijo… y…', en: 'Once someone told me… and…' }, follow: [{ es: '¿Quién era?', en: 'Who was it?' }, { es: '¿Por qué fue importante?', en: 'Why was it important?' }] },
            { q: { es: '¿Trabajabas en algo diferente mientras estudiabas?', en: 'Did you work at something different while you studied?' }, help: { es: 'Sí, trabajaba en… / No, solo estudiaba.', en: 'Yes, I worked at… / No, I only studied.' }, follow: [{ es: '¿Era cansado?', en: 'Was it tiring?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Qué música te recuerda a tu infancia?', en: 'What music reminds you of your childhood?' }, help: { es: 'Me recuerda… porque en mi casa…', en: 'It reminds me… because at home…' }, follow: [{ es: '¿La escuchas todavía?', en: 'Do you still listen to it?' }, { es: '¿Quién la ponía?', en: 'Who used to play it?' }] },
          ],
          words: [{ es: 'llorar', en: 'to cry' }, { es: 'ilusionarse', en: 'to get excited' }, { es: 'la gira', en: 'the tour' }, { es: 'soñar', en: 'to dream' }, { es: 'el salón', en: 'the hall' }],
        },
        B1: {
          scene: { es: 'Los espectáculos de tango para turistas llenan teatros todas las noches, pero muchos bailarines de milonga dicen que eso no es tango «de verdad»: es acrobacia con lentejuelas. Malena baila en los dos mundos y un periodista le pregunta de qué lado está.', en: 'Tango shows for tourists fill theatres every night, but many dance-hall dancers say that isn’t “real” tango: it’s acrobatics with sequins. Malena dances in both worlds and a journalist asks her which side she is on.' },
          opener: { es: 'En el escenario bailo para que el público se emocione en dos minutos. En la milonga bailo para una sola persona, durante tres tangos, sin que nadie mire. Las dos cosas son tango, pero no son lo mismo. ¿Hay que elegir?', en: 'On stage I dance so the audience is moved in two minutes. In the dance hall I dance for one person, for three tangos, with no one watching. Both are tango, but they’re not the same. Do you have to choose?' },
          decide: {
            ask: { es: '¿Qué debería responder Malena al periodista?', en: 'What should Malena answer the journalist?' },
            options: [
              { say: { es: 'Que el espectáculo es la puerta de entrada a la milonga.', en: 'That the show is the gateway to the dance hall.' }, then: { es: 'El periodista lo cita en el titular. Al día siguiente, tres turistas del teatro llegan a su clase.', en: 'The journalist quotes it in the headline. The next day, three tourists from the theatre come to her class.' } },
              { say: { es: 'Que el tango de turistas es un negocio, y que está bien que lo sea.', en: 'That tango for tourists is a business, and that’s fine.' }, then: { es: 'Algunos milongueros la critican en redes. Otros le dan la razón en voz baja.', en: 'Some dance-hall regulars criticise her online. Others quietly agree with her.' } },
              { say: { es: 'Que no quiere hablar de lados: el tango siempre fue mestizo.', en: 'That she doesn’t want to talk about sides: tango has always been a mix.' }, then: { es: 'Explica que el tango nació mezclando músicas de inmigrantes, africanas y criollas. El periodista cambia la pregunta.', en: 'She explains that tango was born from mixing immigrant, African and creole music. The journalist changes his question.' } },
            ],
          },
          twist: { es: 'Una plataforma de videos le ofrece a Malena un contrato para enseñar tango en línea a cien mil personas. Ella siempre dijo que el tango no se aprende por pantalla.', en: 'A video platform offers Malena a contract to teach tango online to a hundred thousand people. She has always said tango can’t be learned through a screen.' },
          questions: [
            { q: { es: '¿Puede una tradición adaptarse al turismo sin perder su esencia?', en: 'Can a tradition adapt to tourism without losing its essence?' }, help: { es: 'Creo que puede, siempre que… / Es difícil porque…', en: 'I think it can, as long as… / It’s hard because…' }, follow: [{ es: '¿Qué ejemplo conoces?', en: 'What example do you know?' }, { es: '¿Quién decide qué es la esencia?', en: 'Who decides what the essence is?' }] },
            { q: { es: '¿Hay cosas que solo se aprenden en persona?', en: 'Are there things that can only be learned in person?' }, help: { es: 'Sí, por ejemplo… / Hoy casi todo se puede aprender…', en: 'Yes, for example… / Today almost everything can be learned…' }, follow: [{ es: '¿Aprendiste algo en línea que te sorprendió?', en: 'Did you learn something online that surprised you?' }, { es: '¿Y algo que no funcionó?', en: 'And something that didn’t work?' }] },
            { q: { es: '¿Qué harías tú con la oferta de la plataforma?', en: 'What would you do with the platform’s offer?' }, help: { es: 'Yo la aceptaría si… / La rechazaría porque…', en: 'I would accept it if… / I would turn it down because…' }, follow: [{ es: '¿Sería incoherente aceptar?', en: 'Would it be inconsistent to accept?' }, { es: '¿Se puede cambiar de opinión?', en: 'Can you change your mind?' }] },
            { q: { es: '¿Qué tradición de tu país nació de una mezcla de culturas?', en: 'What tradition from your country was born from a mix of cultures?' }, help: { es: 'Por ejemplo… viene de… y de…', en: 'For example… comes from… and from…' }, follow: [{ es: '¿La gente lo sabe?', en: 'Do people know that?' }, { es: '¿Se habla de eso?', en: 'Is it talked about?' }] },
          ],
          words: [{ es: 'la lentejuela', en: 'the sequin' }, { es: 'emocionarse', en: 'to be moved' }, { es: 'el titular', en: 'the headline' }, { es: 'mestizo', en: 'mixed' }, { es: 'la esencia', en: 'the essence' }],
        },
      },
    },
    // ------------------------------------------------------------ Caminito
    {
      id: 'caminito',
      name: { es: 'Caminito, en La Boca', en: 'Caminito, in La Boca' },
      who: { name: 'Marcos', role: { es: 'pintor', en: 'painter' } },
      levels: {
        A0: {
          scene: { es: 'Es una calle con casas de muchos colores: rojo, azul, amarillo y verde. Marcos pinta cuadros.', en: 'It is a street with houses in many colours: red, blue, yellow and green. Marcos paints pictures.' },
          opener: { es: '¡Hola! Soy Marcos. Soy pintor. ¿Te gustan los colores?', en: 'Hi! I am Marcos. I am a painter. Do you like the colours?' },
          decide: {
            ask: { es: 'Marcos tiene tres cuadros. ¿Cuál te gusta?', en: 'Marcos has three paintings. Which one do you like?' },
            options: [
              { say: { es: 'El cuadro de las casas.', en: 'The painting of the houses.' }, then: { es: 'Marcos dice: «Es esta calle. ¡Mira, es igual!»', en: 'Marcos says: “It is this street. Look, it is the same!”' } },
              { say: { es: 'El cuadro del barco.', en: 'The painting of the boat.' }, then: { es: 'Marcos dice: «El río está aquí cerca».', en: 'Marcos says: “The river is near here.”' } },
              { say: { es: 'El cuadro de la pareja de tango.', en: 'The painting of the tango couple.' }, then: { es: 'Marcos dice: «Son mis abuelos».', en: 'Marcos says: “They are my grandparents.”' } },
            ],
          },
          twist: { es: 'Un perro pasa y toca la pintura azul. ¡El perro es azul ahora! ¿Qué dices?', en: 'A dog walks by and touches the blue paint. The dog is blue now! What do you say?' },
          questions: [
            { q: { es: '¿De qué color es tu casa?', en: 'What colour is your house?' }, help: { es: 'Mi casa es blanca / gris / roja…', en: 'My house is white / grey / red…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Qué color prefieres?', en: 'What colour do you prefer?' }] },
            { q: { es: '¿Pintas o dibujas?', en: 'Do you paint or draw?' }, help: { es: 'Sí, un poco. / No, nunca.', en: 'Yes, a little. / No, never.' }, follow: [{ es: '¿Qué dibujas?', en: 'What do you draw?' }, { es: '¿Dibujas bien?', en: 'Do you draw well?' }] },
            { q: { es: '¿Tienes perro?', en: 'Do you have a dog?' }, help: { es: 'Sí, tengo un perro. / No, no tengo.', en: 'Yes, I have a dog. / No, I don’t.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is its name?' }, { es: '¿Es grande?', en: 'Is it big?' }] },
            { q: { es: '¿Te gusta el arte?', en: 'Do you like art?' }, help: { es: 'Sí, me gusta. / No mucho.', en: 'Yes, I like it. / Not much.' }, follow: [{ es: '¿Vas a museos?', en: 'Do you go to museums?' }, { es: '¿Qué pintor te gusta?', en: 'What painter do you like?' }] },
          ],
          words: [{ es: 'el color', en: 'the colour' }, { es: 'el cuadro', en: 'the painting' }, { es: 'pintar', en: 'to paint' }, { es: 'la calle', en: 'the street' }, { es: 'el río', en: 'the river' }],
        },
        A1: {
          scene: { es: 'Caminito es una calle pequeña del barrio de La Boca. Hace cien años vivían aquí inmigrantes italianos que pintaban sus casas con los restos de pintura de los barcos. Hoy hay artistas, músicos y muchos turistas.', en: 'Caminito is a small street in the La Boca neighbourhood. A hundred years ago Italian immigrants lived here and painted their houses with leftover paint from the ships. Today there are artists, musicians and lots of tourists.' },
          opener: { es: 'Mi bisabuelo llegó de Génova en barco. Trabajaba en el puerto. Por eso las casas tienen tantos colores: usaban la pintura que sobraba. ¿De dónde viene tu familia?', en: 'My great-grandfather came from Genoa by boat. He worked at the port. That’s why the houses have so many colours: they used the leftover paint. Where does your family come from?' },
          decide: {
            ask: { es: 'Marcos te ofrece un recuerdo. ¿Qué eliges?', en: 'Marcos offers you a souvenir. What do you choose?' },
            options: [
              { say: { es: 'Un cuadro pequeño de Caminito.', en: 'A small painting of Caminito.' }, then: { es: 'Marcos lo firma por detrás y escribe tu nombre.', en: 'Marcos signs it on the back and writes your name.' } },
              { say: { es: 'Un retrato mío en diez minutos.', en: 'A portrait of me in ten minutes.' }, then: { es: 'Te sientas en una silla. Al final, tu nariz es un poco grande, pero te gusta.', en: 'You sit on a chair. In the end, your nose is a bit big, but you like it.' } },
              { say: { es: 'Nada, prefiero sacar una foto con él.', en: 'Nothing, I prefer to take a photo with him.' }, then: { es: 'Marcos sonríe y pone su sombrero para la foto.', en: 'Marcos smiles and puts on his hat for the photo.' } },
            ],
          },
          twist: { es: 'Un hincha de fútbol pasa cantando con una camiseta azul y amarilla. Marcos empieza a cantar con él.', en: 'A football fan walks by singing in a blue and yellow shirt. Marcos starts singing with him.' },
          questions: [
            { q: { es: '¿De dónde viene tu familia?', en: 'Where does your family come from?' }, help: { es: 'Mi familia viene de… / Mis abuelos eran de…', en: 'My family comes from… / My grandparents were from…' }, follow: [{ es: '¿Conoces ese lugar?', en: 'Do you know that place?' }, { es: '¿Hablas su idioma?', en: 'Do you speak its language?' }] },
            { q: { es: '¿Qué recuerdos compras cuando viajas?', en: 'What souvenirs do you buy when you travel?' }, help: { es: 'Compro… / No compro nada.', en: 'I buy… / I don’t buy anything.' }, follow: [{ es: '¿Para quién?', en: 'Who for?' }, { es: '¿Cuál es tu favorito?', en: 'Which is your favourite?' }] },
            { q: { es: '¿Te gusta el fútbol?', en: 'Do you like football?' }, help: { es: 'Sí, soy de… / No, no me interesa.', en: 'Yes, I support… / No, I’m not interested.' }, follow: [{ es: '¿Vas al estadio?', en: 'Do you go to the stadium?' }, { es: '¿Juegas?', en: 'Do you play?' }] },
            { q: { es: '¿Hay un barrio de inmigrantes en tu ciudad?', en: 'Is there an immigrant neighbourhood in your city?' }, help: { es: 'Sí, hay un barrio… / No que yo sepa.', en: 'Yes, there is a … neighbourhood. / Not that I know of.' }, follow: [{ es: '¿Qué se come allí?', en: 'What do people eat there?' }, { es: '¿Vas a veces?', en: 'Do you go sometimes?' }] },
          ],
          words: [{ es: 'el inmigrante', en: 'the immigrant' }, { es: 'el puerto', en: 'the port' }, { es: 'sobrar', en: 'to be left over' }, { es: 'el retrato', en: 'the portrait' }, { es: 'el hincha', en: 'the fan (football)' }],
        },
        A2: {
          scene: { es: 'Marcos creció en La Boca, cuando el barrio era pobre y los turistas no venían. Hoy Caminito está lleno de restaurantes caros y tiendas de recuerdos, pero dos calles más allá muchas familias todavía viven en casas que se inundan cuando llueve.', en: 'Marcos grew up in La Boca, when the neighbourhood was poor and tourists didn’t come. Today Caminito is full of expensive restaurants and souvenir shops, but two streets away many families still live in houses that flood when it rains.' },
          opener: { es: 'Los turistas sacan fotos de los colores y se van en el colectivo. No ven el resto del barrio. Yo vivo de los turistas, así que no me quejo. Pero a veces siento que vendo una postal y escondo la casa. ¿Tú qué ves cuando visitas un lugar?', en: 'The tourists take photos of the colours and leave on the bus. They don’t see the rest of the neighbourhood. I live off the tourists, so I don’t complain. But sometimes I feel I sell a postcard and hide the house. What do you see when you visit a place?' },
          decide: {
            ask: { es: 'Marcos quiere mostrar el barrio real a los visitantes. ¿Qué le sugieres?', en: 'Marcos wants to show visitors the real neighbourhood. What do you suggest?' },
            options: [
              { say: { es: 'Hacer un paseo guiado con los vecinos.', en: 'Run a guided walk with the residents.' }, then: { es: 'Una vecina cuenta cómo era vivir con el agua hasta las rodillas. Los turistas escuchan en silencio.', en: 'A resident tells what it was like to live with water up to your knees. The tourists listen in silence.' } },
              { say: { es: 'Pintar un mural con la historia del barrio.', en: 'Paint a mural with the history of the neighbourhood.' }, then: { es: 'Los chicos de la escuela ayudan. El mural mide veinte metros.', en: 'The school kids help. The mural is twenty metres long.' } },
              { say: { es: 'Donar una parte de lo que vende a la escuela del barrio.', en: 'Donate part of what he sells to the local school.' }, then: { es: 'Pone un cartel en su puesto. Algunos turistas compran solo por eso.', en: 'He puts up a sign at his stall. Some tourists buy just because of it.' } },
            ],
          },
          twist: { es: 'Una agencia de turismo le pide a Marcos que deje de hablar de la pobreza: «Asusta a los clientes».', en: 'A travel agency asks Marcos to stop talking about poverty: “It scares the customers.”' },
          questions: [
            { q: { es: '¿Cómo era tu barrio cuando eras niño?', en: 'What was your neighbourhood like when you were a child?' }, help: { es: 'Era… Había… Los vecinos…', en: 'It was… There was… The neighbours…' }, follow: [{ es: '¿Cambió mucho?', en: 'Has it changed a lot?' }, { es: '¿Vive todavía tu familia allí?', en: 'Does your family still live there?' }] },
            { q: { es: '¿Qué ves normalmente cuando visitas una ciudad nueva?', en: 'What do you usually see when you visit a new city?' }, help: { es: 'Siempre visito… / Me gusta perderme en…', en: 'I always visit… / I like getting lost in…' }, follow: [{ es: '¿Haces visitas guiadas?', en: 'Do you take guided tours?' }, { es: '¿Hablas con la gente local?', en: 'Do you talk to local people?' }] },
            { q: { es: '¿Viste alguna vez un lugar turístico muy diferente a la realidad del país?', en: 'Have you ever seen a tourist spot very different from the country’s reality?' }, help: { es: 'Sí, en… parecía… pero en realidad…', en: 'Yes, in… it looked… but actually…' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Qué le contestarías a la agencia?', en: 'What would you answer the agency?' }, help: { es: 'Les diría que… / Entiendo que…, pero…', en: 'I would tell them that… / I understand that…, but…' }, follow: [{ es: '¿Marcos puede perder dinero?', en: 'Could Marcos lose money?' }, { es: '¿Vale la pena?', en: 'Is it worth it?' }] },
          ],
          words: [{ es: 'inundarse', en: 'to flood' }, { es: 'el colectivo', en: 'the bus (Argentina)' }, { es: 'esconder', en: 'to hide' }, { es: 'el mural', en: 'the mural' }, { es: 'asustar', en: 'to scare' }],
        },
        B1: {
          scene: { es: 'Una empresa inmobiliaria quiere construir torres de lujo junto al Riachuelo, a pocas cuadras de Caminito. Prometen limpiar el río, crear empleo y «revitalizar» el barrio. Muchos vecinos temen que, si suben los alquileres, tengan que irse.', en: 'A property company wants to build luxury towers by the Riachuelo, a few blocks from Caminito. They promise to clean the river, create jobs and “revitalise” the neighbourhood. Many residents fear that if rents go up, they’ll have to leave.' },
          opener: { es: 'Todos queremos que limpien el río. Hace cincuenta años que lo prometen. Lo raro es que ahora, justo cuando hay plata para construir torres, de repente se puede. ¿Para quién se limpia el río, entonces?', en: 'We all want them to clean the river. They’ve promised it for fifty years. The odd thing is that now, just when there’s money to build towers, suddenly it can be done. Who is the river being cleaned for, then?' },
          decide: {
            ask: { es: 'Hay una reunión de vecinos con la empresa. ¿Qué propuesta presentarías?', en: 'There is a residents’ meeting with the company. What proposal would you present?' },
            options: [
              { say: { es: 'Exigir que un porcentaje de las viviendas sea para vecinos actuales.', en: 'Demand that a percentage of the homes be for current residents.' }, then: { es: 'La empresa ofrece un diez por ciento. Los vecinos piden treinta. La negociación sigue.', en: 'The company offers ten percent. The residents ask for thirty. The negotiation continues.' } },
              { say: { es: 'Rechazar el proyecto completo.', en: 'Reject the whole project.' }, then: { es: 'Algunos aplauden. Otros preguntan quién va a limpiar el río si no es la empresa.', en: 'Some applaud. Others ask who will clean the river if not the company.' } },
              { say: { es: 'Pedir que el gobierno limpie el río antes y sin condiciones.', en: 'Ask the government to clean the river first and unconditionally.' }, then: { es: 'Un funcionario promete estudiarlo. Los vecinos más viejos se ríen: lo escucharon muchas veces.', en: 'An official promises to look into it. The oldest residents laugh: they’ve heard it many times.' } },
            ],
          },
          twist: { es: 'Marcos recibe una oferta: la empresa quiere comprarle veinte cuadros para decorar el vestíbulo de las torres.', en: 'Marcos gets an offer: the company wants to buy twenty paintings to decorate the towers’ lobby.' },
          questions: [
            { q: { es: '¿La «revitalización» de un barrio beneficia a los vecinos o los expulsa?', en: 'Does a neighbourhood’s “revitalisation” benefit residents or push them out?' }, help: { es: 'Depende de cómo se haga: si… / En la mayoría de los casos…', en: 'It depends how it’s done: if… / In most cases…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Qué se podría hacer distinto?', en: 'What could be done differently?' }] },
            { q: { es: '¿Por qué crees que algunos problemas se resuelven solo cuando hay dinero privado?', en: 'Why do you think some problems are only solved when there is private money?' }, help: { es: 'Creo que… / Porque el Estado…', en: 'I think… / Because the State…' }, follow: [{ es: '¿Es un problema?', en: 'Is it a problem?' }, { es: '¿Pasa en tu país?', en: 'Does it happen in your country?' }] },
            { q: { es: '¿Debería Marcos vender sus cuadros a la empresa?', en: 'Should Marcos sell his paintings to the company?' }, help: { es: 'Creo que debería… porque… / Yo no lo haría porque…', en: 'I think he should… because… / I wouldn’t because…' }, follow: [{ es: '¿Qué dirían sus vecinos?', en: 'What would his neighbours say?' }, { es: '¿El arte puede ser neutral?', en: 'Can art be neutral?' }] },
            { q: { es: 'Si te subieran mucho el alquiler, ¿qué harías?', en: 'If your rent went up a lot, what would you do?' }, help: { es: 'Probablemente me mudaría a… / Intentaría negociar…', en: 'I would probably move to… / I would try to negotiate…' }, follow: [{ es: '¿Qué extrañarías de tu barrio?', en: 'What would you miss about your neighbourhood?' }, { es: '¿Te pasó alguna vez?', en: 'Has it ever happened to you?' }] },
          ],
          words: [{ es: 'la inmobiliaria', en: 'the property company' }, { es: 'la cuadra', en: 'the block (street)' }, { es: 'el alquiler', en: 'the rent' }, { es: 'la plata', en: 'money (Argentina)' }, { es: 'expulsar', en: 'to push out' }],
        },
      },
    },
    // ------------------------------------------------------------ Retiro station
    {
      id: 'retiro',
      name: { es: 'La estación de Retiro', en: 'Retiro station' },
      who: { name: 'Graciela', role: { es: 'empleada de boletería', en: 'ticket office clerk' } },
      levels: {
        A0: {
          scene: { es: 'Es una estación de tren grande y antigua. Hay mucha gente. Graciela vende boletos.', en: 'It is a big old train station. There are lots of people. Graciela sells tickets.' },
          opener: { es: 'Hola. Soy Graciela. ¿Adónde vas?', en: 'Hello. I am Graciela. Where are you going?' },
          decide: {
            ask: { es: 'Hay tres trenes. ¿Adónde vas?', en: 'There are three trains. Where are you going?' },
            options: [
              { say: { es: 'Al río, a Tigre.', en: 'To the river, to Tigre.' }, then: { es: 'Graciela dice: «Es el tren azul. Sale a las diez».', en: 'Graciela says: “It is the blue train. It leaves at ten.”' } },
              { say: { es: 'A la playa.', en: 'To the beach.' }, then: { es: 'Graciela dice: «Para la playa, el autobús es mejor».', en: 'Graciela says: “For the beach, the coach is better.”' } },
              { say: { es: 'No sé.', en: 'I don’t know.' }, then: { es: 'Graciela ríe: «Mira el mapa. ¡Es muy grande!»', en: 'Graciela laughs: “Look at the map. It is very big!”' } },
            ],
          },
          twist: { es: 'El tren sale ahora. ¡Corre! Graciela grita: «¡Andén tres!» ¿Qué haces?', en: 'The train is leaving now. Run! Graciela shouts: “Platform three!” What do you do?' },
          questions: [
            { q: { es: '¿Viajas en tren?', en: 'Do you travel by train?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Adónde?', en: 'Where to?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Cómo vas al trabajo?', en: 'How do you get to work?' }, help: { es: 'Voy en autobús / en coche / a pie.', en: 'I go by bus / by car / on foot.' }, follow: [{ es: '¿Cuánto tiempo?', en: 'How long does it take?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Llegas tarde a veces?', en: 'Are you late sometimes?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Corres?', en: 'Do you run?' }] },
            { q: { es: '¿Te gustan los viajes largos?', en: 'Do you like long trips?' }, help: { es: 'Sí, me gustan. / No, prefiero cortos.', en: 'Yes, I like them. / No, I prefer short ones.' }, follow: [{ es: '¿Qué haces en el viaje?', en: 'What do you do on the trip?' }, { es: '¿Duermes?', en: 'Do you sleep?' }] },
          ],
          words: [{ es: 'la estación', en: 'the station' }, { es: 'el tren', en: 'the train' }, { es: 'el boleto', en: 'the ticket' }, { es: 'el andén', en: 'the platform' }, { es: 'salir', en: 'to leave' }],
        },
        A1: {
          scene: { es: 'La estación de Retiro fue construida por los ingleses hace más de cien años. Tiene un reloj enorme y techos de hierro. Por la mañana llegan miles de personas que viven en las afueras y trabajan en el centro.', en: 'Retiro station was built by the British more than a hundred years ago. It has an enormous clock and iron roofs. In the morning thousands of people arrive who live in the suburbs and work in the centre.' },
          opener: { es: 'Buen día. Si vas a Tigre, el próximo tren sale en doce minutos del andén cinco. Ida y vuelta es más barato. ¿Quieres la tarjeta de transporte o un boleto suelto?', en: 'Good morning. If you’re going to Tigre, the next train leaves in twelve minutes from platform five. Return is cheaper. Do you want the transport card or a single ticket?' },
          decide: {
            ask: { es: 'Tienes un día libre. Graciela te recomienda tres destinos. ¿Cuál eliges?', en: 'You have a free day. Graciela recommends three destinations. Which do you choose?' },
            options: [
              { say: { es: 'Tigre, para pasear en lancha por el delta.', en: 'Tigre, to take a boat on the delta.' }, then: { es: 'Pasas la tarde entre ríos y casas sobre el agua. Compras frutas en un barco-almacén.', en: 'You spend the afternoon among rivers and houses on the water. You buy fruit from a grocery boat.' } },
              { say: { es: 'San Isidro, para ver las casas antiguas.', en: 'San Isidro, to see the old houses.' }, then: { es: 'Visitas una quinta con un jardín enorme frente al río.', en: 'You visit an old country house with an enormous garden by the river.' } },
              { say: { es: 'Me quedo en el centro y camino.', en: 'I stay in the centre and walk.' }, then: { es: 'Graciela te dibuja un mapa en un papel: «Primero la Torre, después la plaza San Martín».', en: 'Graciela draws you a map on a piece of paper: “First the Tower, then Plaza San Martín.”' } },
            ],
          },
          twist: { es: 'Anuncian por los altavoces que hay paro de trenes. Todos los trenes se cancelan por dos horas.', en: 'They announce over the speakers that there’s a train strike. All trains are cancelled for two hours.' },
          questions: [
            { q: { es: '¿Cómo es el transporte público en tu ciudad?', en: 'What is public transport like in your city?' }, help: { es: 'Es bueno / caro / lento… Hay…', en: 'It’s good / expensive / slow… There is…' }, follow: [{ es: '¿Lo usas todos los días?', en: 'Do you use it every day?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Qué haces cuando se cancela un viaje?', en: 'What do you do when a trip is cancelled?' }, help: { es: 'Busco otra opción. / Espero. / Me enojo.', en: 'I look for another option. / I wait. / I get angry.' }, follow: [{ es: '¿Te pasó alguna vez?', en: 'Has it happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Vives en el centro o en las afueras?', en: 'Do you live in the centre or the suburbs?' }, help: { es: 'Vivo en… / Está a… minutos del centro.', en: 'I live in… / It’s … minutes from the centre.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Dónde te gustaría vivir?', en: 'Where would you like to live?' }] },
            { q: { es: '¿Qué te gusta hacer en un día libre?', en: 'What do you like doing on a day off?' }, help: { es: 'Me gusta… / Normalmente…', en: 'I like… / Usually…' }, follow: [{ es: '¿Sales de la ciudad?', en: 'Do you leave the city?' }, { es: '¿Con quién?', en: 'Who with?' }] },
          ],
          words: [{ es: 'las afueras', en: 'the suburbs' }, { es: 'ida y vuelta', en: 'return (ticket)' }, { es: 'suelto', en: 'single, loose' }, { es: 'el paro', en: 'the strike' }, { es: 'el altavoz', en: 'the speaker' }],
        },
        A2: {
          scene: { es: 'Graciela trabaja en la boletería desde hace veinte años. Ve pasar a miles de personas cada día: estudiantes, trabajadores, turistas, gente que se va del país. Dice que puede adivinar la historia de alguien por cómo pide el boleto.', en: 'Graciela has worked in the ticket office for twenty years. She sees thousands of people go by every day: students, workers, tourists, people leaving the country. She says she can guess someone’s story by how they ask for a ticket.' },
          opener: { es: 'El que va a una entrevista de trabajo pide el boleto mirando el reloj. El que se escapa de algo pide «el primero que salga». Y los enamorados siempre compran dos boletos, aunque viaje uno solo. ¿Tú cómo pides el boleto?', en: 'Someone going to a job interview asks for the ticket looking at the clock. Someone running away from something asks for “the first one leaving”. And people in love always buy two tickets, even if only one is travelling. How do you ask for a ticket?' },
          decide: {
            ask: { es: 'Una chica joven llora en la fila y pide un boleto «a cualquier lado». ¿Qué le dices a Graciela?', en: 'A young woman is crying in the queue and asks for a ticket “to anywhere”. What do you say to Graciela?' },
            options: [
              { say: { es: 'Que le pregunte si necesita ayuda.', en: 'That she should ask her if she needs help.' }, then: { es: 'La chica se peleó con su familia. Graciela le da un café y su número de teléfono.', en: 'The girl had a fight with her family. Graciela gives her a coffee and her phone number.' } },
              { say: { es: 'Que le venda el boleto y respete su decisión.', en: 'That she should sell her the ticket and respect her decision.' }, then: { es: 'Graciela le vende un boleto a Tigre: «El río calma». La chica sonríe un poco.', en: 'Graciela sells her a ticket to Tigre: “The river calms you.” The girl smiles a little.' } },
              { say: { es: 'Que llame a la policía de la estación.', en: 'That she should call the station police.' }, then: { es: 'La chica se asusta y se va. Graciela se queda preocupada toda la tarde.', en: 'The girl gets scared and leaves. Graciela stays worried all afternoon.' } },
            ],
          },
          twist: { es: 'Un señor mayor le devuelve a Graciela un boleto de 1998. Dice que nunca hizo ese viaje y que hoy, por fin, lo quiere hacer.', en: 'An older man gives Graciela back a ticket from 1998. He says he never made that trip and today, at last, he wants to.' },
          questions: [
            { q: { es: '¿Puedes adivinar cosas de la gente por cómo habla o se viste?', en: 'Can you guess things about people by how they talk or dress?' }, help: { es: 'A veces… / Creo que no se puede porque…', en: 'Sometimes… / I don’t think you can because…' }, follow: [{ es: '¿Te equivocaste alguna vez?', en: 'Have you ever been wrong?' }, { es: '¿Qué piensa la gente de ti?', en: 'What do people think of you?' }] },
            { q: { es: '¿Hiciste alguna vez un viaje sin planearlo?', en: 'Have you ever made a trip without planning it?' }, help: { es: 'Sí, una vez… / No, siempre planifico.', en: 'Yes, once… / No, I always plan.' }, follow: [{ es: '¿Cómo salió?', en: 'How did it go?' }, { es: '¿Lo repetirías?', en: 'Would you repeat it?' }] },
            { q: { es: '¿Hay un viaje que siempre quisiste hacer y nunca hiciste?', en: 'Is there a trip you always wanted to make and never did?' }, help: { es: 'Siempre quise ir a… pero…', en: 'I always wanted to go to… but…' }, follow: [{ es: '¿Qué te frenó?', en: 'What held you back?' }, { es: '¿Lo vas a hacer?', en: 'Are you going to do it?' }] },
            { q: { es: '¿Qué harías tú en el lugar de Graciela con la chica?', en: 'What would you do in Graciela’s place with the girl?' }, help: { es: 'Yo le preguntaría… / Le diría que…', en: 'I would ask her… / I would tell her that…' }, follow: [{ es: '¿Es parte de su trabajo?', en: 'Is it part of her job?' }, { es: '¿Dónde está el límite?', en: 'Where is the limit?' }] },
          ],
          words: [{ es: 'la boletería', en: 'the ticket office' }, { es: 'adivinar', en: 'to guess' }, { es: 'escaparse', en: 'to run away' }, { es: 'cualquier', en: 'any' }, { es: 'devolver', en: 'to give back' }],
        },
        B1: {
          scene: { es: 'El gobierno anuncia que va a reemplazar las boleterías por máquinas y una aplicación. Dicen que ahorrará millones y reducirá filas. Graciela y sus compañeros podrán elegir entre un retiro anticipado o un puesto en otra área.', en: 'The government announces it will replace ticket offices with machines and an app. They say it will save millions and reduce queues. Graciela and her colleagues can choose between early retirement or a job in another area.' },
          opener: { es: 'La máquina no le va a dar un café a la chica que llora, ni le va a explicar a la abuela qué andén es. Ya sé que el progreso no se frena. Pero me gustaría que alguien contara también lo que se pierde, no solo lo que se ahorra.', en: 'The machine won’t give a coffee to the crying girl, or explain to grandma which platform it is. I know progress can’t be stopped. But I’d like someone to count what is lost too, not only what is saved.' },
          decide: {
            ask: { es: 'Graciela tiene que elegir antes del viernes. ¿Qué le aconsejas?', en: 'Graciela has to choose before Friday. What do you advise?' },
            options: [
              { say: { es: 'Pedir un puesto de atención al público en la estación.', en: 'Ask for a customer service job at the station.' }, then: { es: 'Le dan un chaleco que dice «¿Necesitas ayuda?». El primer día ayuda a cuarenta personas con las máquinas.', en: 'She gets a vest that says “Need help?”. On the first day she helps forty people with the machines.' } },
              { say: { es: 'Aceptar el retiro y hacer por fin los viajes que vendió.', en: 'Take retirement and finally make the trips she sold.' }, then: { es: 'Graciela compra un boleto a Salta. Es el primero que compra para ella en veinte años.', en: 'Graciela buys a ticket to Salta. It’s the first one she has bought for herself in twenty years.' } },
              { say: { es: 'Organizarse con sus compañeros para negociar mejores condiciones.', en: 'Organise with her colleagues to negotiate better conditions.' }, then: { es: 'Consiguen que quede una boletería abierta para personas mayores. Es poco, pero es algo.', en: 'They get one ticket office kept open for older people. It’s not much, but it’s something.' } },
            ],
          },
          twist: { es: 'El primer día de las máquinas, la aplicación se cae durante cuatro horas y la estación es un caos.', en: 'On the first day of the machines, the app goes down for four hours and the station is chaos.' },
          questions: [
            { q: { es: '¿Qué trabajos crees que van a desaparecer en los próximos años?', en: 'What jobs do you think will disappear in the coming years?' }, help: { es: 'Creo que… van a desaparecer porque… / Me temo que…', en: 'I think… will disappear because… / I’m afraid that…' }, follow: [{ es: '¿Es inevitable?', en: 'Is it inevitable?' }, { es: '¿Qué trabajos nuevos aparecerán?', en: 'What new jobs will appear?' }] },
            { q: { es: '¿Prefieres que te atienda una persona o una máquina?', en: 'Do you prefer being served by a person or a machine?' }, help: { es: 'Depende de… / Para cosas simples prefiero…', en: 'It depends on… / For simple things I prefer…' }, follow: [{ es: '¿Y tus padres?', en: 'And your parents?' }, { es: '¿Tuviste un problema con una máquina?', en: 'Have you had a problem with a machine?' }] },
            { q: { es: '¿Cómo se podría medir «lo que se pierde» cuando se automatiza un servicio?', en: 'How could “what is lost” be measured when a service is automated?' }, help: { es: 'Se podría preguntar a… / Es difícil porque…', en: 'You could ask… / It’s hard because…' }, follow: [{ es: '¿Quién debería medirlo?', en: 'Who should measure it?' }, { es: '¿Debería pesar en la decisión?', en: 'Should it weigh in the decision?' }] },
            { q: { es: 'Si tu trabajo desapareciera mañana, ¿qué harías?', en: 'If your job disappeared tomorrow, what would you do?' }, help: { es: 'Probablemente… / Siempre quise…', en: 'Probably… / I always wanted to…' }, follow: [{ es: '¿Estás preparado?', en: 'Are you prepared?' }, { es: '¿Qué aprenderías?', en: 'What would you learn?' }] },
          ],
          words: [{ es: 'reemplazar', en: 'to replace' }, { es: 'el retiro anticipado', en: 'early retirement' }, { es: 'frenar', en: 'to stop, to brake' }, { es: 'caerse (una aplicación)', en: 'to go down (an app)' }, { es: 'automatizar', en: 'to automate' }],
        },
      },
    },
    // ------------------------------------------------------------ the San Telmo fair
    {
      id: 'feria',
      name: { es: 'La feria de San Telmo', en: 'The San Telmo fair' },
      who: { name: 'Don Ernesto', role: { es: 'anticuario', en: 'antique dealer' } },
      levels: {
        A0: {
          scene: { es: 'Es domingo. Hay una feria en la plaza. Hay cosas viejas: relojes, teléfonos, fotos. Don Ernesto vende antigüedades.', en: 'It is Sunday. There is a fair in the square. There are old things: clocks, phones, photos. Don Ernesto sells antiques.' },
          opener: { es: 'Buen día. Soy Ernesto. Todo aquí es muy viejo. ¿Qué buscas?', en: 'Good morning. I am Ernesto. Everything here is very old. What are you looking for?' },
          decide: {
            ask: { es: 'Hay un reloj, un teléfono y una cámara. ¿Qué miras?', en: 'There is a clock, a phone and a camera. What do you look at?' },
            options: [
              { say: { es: 'El reloj.', en: 'The clock.' }, then: { es: 'Ernesto dice: «Es de 1920. ¡Todavía funciona!»', en: 'Ernesto says: “It is from 1920. It still works!”' } },
              { say: { es: 'El teléfono.', en: 'The phone.' }, then: { es: 'Ernesto dice: «Es negro y muy pesado. Mira, tiene un disco».', en: 'Ernesto says: “It is black and very heavy. Look, it has a dial.”' } },
              { say: { es: 'La cámara.', en: 'The camera.' }, then: { es: 'Ernesto dice: «Es de mi papá. No está a la venta».', en: 'Ernesto says: “It is my dad’s. It is not for sale.”' } },
            ],
          },
          twist: { es: 'El teléfono viejo suena. ¡Ring, ring! Ernesto dice: «¡Contesta!» ¿Qué dices?', en: 'The old phone rings. Ring, ring! Ernesto says: “Answer it!” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan las cosas viejas?', en: 'Do you like old things?' }, help: { es: 'Sí, me gustan. / No, prefiero las nuevas.', en: 'Yes, I like them. / No, I prefer new ones.' }, follow: [{ es: '¿Tienes algo viejo en casa?', en: 'Do you have something old at home?' }, { es: '¿De quién es?', en: 'Whose is it?' }] },
            { q: { es: '¿Usas reloj?', en: 'Do you wear a watch?' }, help: { es: 'Sí, uso reloj. / No, miro el teléfono.', en: 'Yes, I wear a watch. / No, I look at my phone.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Es un regalo?', en: 'Is it a gift?' }] },
            { q: { es: '¿Vas a ferias o mercados?', en: 'Do you go to fairs or markets?' }, help: { es: 'Sí, los domingos. / No, nunca.', en: 'Yes, on Sundays. / No, never.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Sacas muchas fotos?', en: 'Do you take many photos?' }, help: { es: 'Sí, muchas. / No, pocas.', en: 'Yes, many. / No, few.' }, follow: [{ es: '¿Con qué?', en: 'With what?' }, { es: '¿Fotos de qué?', en: 'Photos of what?' }] },
          ],
          words: [{ es: 'la feria', en: 'the fair' }, { es: 'viejo', en: 'old' }, { es: 'el reloj', en: 'the clock, watch' }, { es: 'pesado', en: 'heavy' }, { es: 'a la venta', en: 'for sale' }],
        },
        A1: {
          scene: { es: 'Todos los domingos, la calle Defensa se llena de puestos: antigüedades, artesanías, comida, músicos y estatuas vivientes. Don Ernesto tiene su puesto en la plaza Dorrego desde hace cuarenta años.', en: 'Every Sunday, Defensa street fills with stalls: antiques, crafts, food, musicians and living statues. Don Ernesto has had his stall in Plaza Dorrego for forty years.' },
          opener: { es: 'Aquí se regatea, eh. Si te digo mil pesos, tú me dices quinientos, y terminamos en setecientos. Es parte del juego. ¿Sabes regatear?', en: 'Here you haggle, you know. If I say a thousand pesos, you say five hundred, and we end at seven hundred. It’s part of the game. Do you know how to haggle?' },
          decide: {
            ask: { es: 'Te gusta una caja de música antigua. Ernesto pide tres mil pesos. ¿Qué haces?', en: 'You like an old music box. Ernesto asks for three thousand pesos. What do you do?' },
            options: [
              { say: { es: 'Ofrezco mil quinientos.', en: 'I offer fifteen hundred.' }, then: { es: 'Ernesto se ríe: «¡Me quieres arruinar!». Al final, la compras por dos mil.', en: 'Ernesto laughs: “You want to ruin me!” In the end, you buy it for two thousand.' } },
              { say: { es: 'Pago tres mil. No sé regatear.', en: 'I pay three thousand. I can’t haggle.' }, then: { es: 'Ernesto te mira con pena y te regala una postal antigua.', en: 'Ernesto looks at you pityingly and gives you an old postcard for free.' } },
              { say: { es: 'Le pregunto la historia de la caja.', en: 'I ask about the box’s history.' }, then: { es: 'Era de una cantante de ópera de los años cuarenta. Ahora la quieres todavía más.', en: 'It belonged to an opera singer from the forties. Now you want it even more.' } },
            ],
          },
          twist: { es: 'Una estatua viviente se mueve de repente y te asusta. Toda la gente alrededor se ríe.', en: 'A living statue suddenly moves and scares you. Everyone around laughs.' },
          questions: [
            { q: { es: '¿Sabes regatear?', en: 'Can you haggle?' }, help: { es: 'Sí, un poco. / No, me da vergüenza.', en: 'Yes, a little. / No, it embarrasses me.' }, follow: [{ es: '¿En tu país se regatea?', en: 'Do people haggle in your country?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Qué haces los domingos?', en: 'What do you do on Sundays?' }, help: { es: 'Los domingos… / Normalmente descanso.', en: 'On Sundays… / I usually rest.' }, follow: [{ es: '¿Comes con tu familia?', en: 'Do you eat with your family?' }, { es: '¿Sales a pasear?', en: 'Do you go for a walk?' }] },
            { q: { es: '¿Compras cosas de segunda mano?', en: 'Do you buy second-hand things?' }, help: { es: 'Sí, compro ropa / libros… / No, nunca.', en: 'Yes, I buy clothes / books… / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Qué compraste la última vez?', en: 'What did you buy last time?' }] },
            { q: { es: '¿Te gustan los artistas de la calle?', en: 'Do you like street artists?' }, help: { es: 'Sí, me encantan. / A veces.', en: 'Yes, I love them. / Sometimes.' }, follow: [{ es: '¿Les das dinero?', en: 'Do you give them money?' }, { es: '¿Cuál te sorprendió?', en: 'Which one surprised you?' }] },
          ],
          words: [{ es: 'regatear', en: 'to haggle' }, { es: 'el puesto', en: 'the stall' }, { es: 'la caja de música', en: 'the music box' }, { es: 'de segunda mano', en: 'second-hand' }, { es: 'la estatua viviente', en: 'the living statue' }],
        },
        A2: {
          scene: { es: 'Don Ernesto empezó a vender antigüedades cuando murió su padre y la familia tuvo que vaciar la casa. Desde entonces compra objetos en casas de gente que se muda o fallece. Dice que cada objeto tiene una historia y que él solo es «el cartero».', en: 'Don Ernesto started selling antiques when his father died and the family had to empty the house. Since then he buys objects from the homes of people who move or pass away. He says every object has a story and he is just “the postman”.' },
          opener: { es: 'La semana pasada compré una caja con cartas de amor de 1955. Él estaba en Córdoba y ella en Buenos Aires. Las cartas terminan de repente. No sé si se casaron o no. ¿Tú las venderías o buscarías a la familia?', en: 'Last week I bought a box of love letters from 1955. He was in Córdoba and she was in Buenos Aires. The letters stop suddenly. I don’t know if they married or not. Would you sell them or look for the family?' },
          decide: {
            ask: { es: 'Ernesto te pregunta qué hacer con las cartas. ¿Qué le aconsejas?', en: 'Ernesto asks you what to do with the letters. What do you advise?' },
            options: [
              { say: { es: 'Buscar a la familia por internet.', en: 'Look for the family online.' }, then: { es: 'Encuentran a una nieta en Rosario. Ella no sabía que su abuela había tenido otro amor.', en: 'They find a granddaughter in Rosario. She didn’t know her grandmother had had another love.' } },
              { say: { es: 'Venderlas: ya son historia.', en: 'Sell them: they’re history now.' }, then: { es: 'Un escritor las compra para una novela. Ernesto no está seguro de haber hecho bien.', en: 'A writer buys them for a novel. Ernesto isn’t sure he did the right thing.' } },
              { say: { es: 'Guardarlas y no hacer nada.', en: 'Keep them and do nothing.' }, then: { es: 'Ernesto las pone en un cajón. Pero cada domingo vuelve a leer una.', en: 'Ernesto puts them in a drawer. But every Sunday he rereads one.' } },
            ],
          },
          twist: { es: 'Una señora muy mayor se acerca al puesto, ve las cartas y se pone pálida: reconoce la letra.', en: 'A very old lady comes up to the stall, sees the letters and turns pale: she recognises the handwriting.' },
          questions: [
            { q: { es: '¿Qué objeto de tu familia tiene una historia especial?', en: 'What object in your family has a special story?' }, help: { es: 'Tenemos un… que era de… y…', en: 'We have a… that belonged to… and…' }, follow: [{ es: '¿Quién lo tiene?', en: 'Who has it?' }, { es: '¿Lo venderías?', en: 'Would you sell it?' }] },
            { q: { es: '¿Escribiste alguna vez cartas de amor?', en: 'Have you ever written love letters?' }, help: { es: 'Sí, cuando era… / No, pero…', en: 'Yes, when I was… / No, but…' }, follow: [{ es: '¿Las guardas?', en: 'Do you keep them?' }, { es: '¿Hoy se escriben cartas así?', en: 'Are letters like that written today?' }] },
            { q: { es: '¿Qué hicieron con las cosas de tus abuelos?', en: 'What did your family do with your grandparents’ things?' }, help: { es: 'Las repartimos entre… / Las donamos… / Todavía…', en: 'We shared them among… / We donated them… / Still…' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Qué te quedaste tú?', en: 'What did you keep?' }] },
            { q: { es: '¿Está bien vender objetos personales de gente que ya no está?', en: 'Is it right to sell personal objects of people who are gone?' }, help: { es: 'Creo que sí, si… / No me parece bien porque…', en: 'I think so, if… / I don’t think it’s right because…' }, follow: [{ es: '¿Y fotos o cartas?', en: 'And photos or letters?' }, { es: '¿Dónde está el límite?', en: 'Where is the limit?' }] },
          ],
          words: [{ es: 'vaciar', en: 'to empty' }, { es: 'mudarse', en: 'to move house' }, { es: 'fallecer', en: 'to pass away' }, { es: 'el cajón', en: 'the drawer' }, { es: 'la letra', en: 'handwriting' }],
        },
        B1: {
          scene: { es: 'Un inspector llega a la feria: algunos objetos que se venden podrían ser robados de iglesias y museos del interior del país. Don Ernesto siempre compró «sin preguntar demasiado». Ahora tiene que demostrar de dónde viene cada pieza.', en: 'An inspector arrives at the fair: some objects on sale could have been stolen from churches and museums in the provinces. Don Ernesto has always bought “without asking too much”. Now he has to prove where each piece comes from.' },
          opener: { es: 'En cuarenta años nadie me pidió un papel. Compraba en casas, en remates, a otros vendedores. ¿Cómo voy a saber de dónde salió un candelabro de 1880? Pero tampoco quiero ser el que vende lo que le robaron a un pueblo.', en: 'In forty years nobody asked me for a document. I bought in houses, at auctions, from other dealers. How am I supposed to know where an 1880 candlestick came from? But I don’t want to be the one selling what was stolen from a town either.' },
          decide: {
            ask: { es: 'Ernesto tiene un crucifijo de plata sin papeles. ¿Qué debería hacer?', en: 'Ernesto has a silver crucifix with no papers. What should he do?' },
            options: [
              { say: { es: 'Entregarlo al inspector para que investigue.', en: 'Hand it to the inspector to investigate.' }, then: { es: 'Resulta que fue robado de una capilla de Jujuy en 1990. El pueblo organiza una fiesta para recibirlo.', en: 'It turns out it was stolen from a chapel in Jujuy in 1990. The town organises a celebration to welcome it back.' } },
              { say: { es: 'Dejar de venderlo, pero quedárselo.', en: 'Stop selling it, but keep it.' }, then: { es: 'Ernesto lo guarda en su casa. No duerme bien desde entonces.', en: 'Ernesto keeps it at home. He hasn’t slept well since.' } },
              { say: { es: 'Investigar él mismo antes de decidir.', en: 'Investigate himself before deciding.' }, then: { es: 'Encuentra al vendedor que se lo dio. El hombre le cuelga el teléfono sin explicar nada.', en: 'He finds the dealer who sold it to him. The man hangs up without explaining anything.' } },
            ],
          },
          twist: { es: 'El inspector descubre que uno de los vendedores más famosos de la feria compra piezas robadas por encargo. Es amigo de Ernesto desde hace treinta años.', en: 'The inspector discovers that one of the fair’s most famous dealers buys stolen pieces to order. He has been Ernesto’s friend for thirty years.' },
          questions: [
            { q: { es: '¿Quién es responsable cuando alguien compra algo robado sin saberlo?', en: 'Who is responsible when someone buys something stolen without knowing?' }, help: { es: 'Creo que la responsabilidad es de… / Depende de si…', en: 'I think responsibility lies with… / It depends on whether…' }, follow: [{ es: '¿Y si podía sospecharlo?', en: 'And if they could have suspected?' }, { es: '¿Debería devolverlo sin compensación?', en: 'Should they return it without compensation?' }] },
            { q: { es: '¿Por qué crees que se roban objetos religiosos o históricos?', en: 'Why do you think religious or historical objects are stolen?' }, help: { es: 'Porque hay coleccionistas que… / Porque valen…', en: 'Because there are collectors who… / Because they’re worth…' }, follow: [{ es: '¿Quién los compra?', en: 'Who buys them?' }, { es: '¿Cómo se podría evitar?', en: 'How could it be prevented?' }] },
            { q: { es: '¿Denunciarías a un amigo si descubrieras que hace algo ilegal?', en: 'Would you report a friend if you found out they were doing something illegal?' }, help: { es: 'Depende de lo grave que fuera… / Primero hablaría con él…', en: 'It would depend how serious it was… / First I’d talk to him…' }, follow: [{ es: '¿La amistad tiene límites?', en: 'Does friendship have limits?' }, { es: '¿Te pasó algo parecido?', en: 'Has something similar happened to you?' }] },
            { q: { es: '¿Qué valor tiene un objeto cuando vuelve a su lugar de origen?', en: 'What value does an object have when it returns to its place of origin?' }, help: { es: 'Tiene un valor… que no se mide en dinero, porque…', en: 'It has a … value that isn’t measured in money, because…' }, follow: [{ es: '¿Conoces un caso así?', en: 'Do you know a case like that?' }, { es: '¿Y en tu país?', en: 'And in your country?' }] },
          ],
          words: [{ es: 'el remate', en: 'the auction (Argentina)' }, { es: 'el candelabro', en: 'the candlestick' }, { es: 'por encargo', en: 'to order' }, { es: 'colgar el teléfono', en: 'to hang up' }, { es: 'denunciar', en: 'to report (a crime)' }],
        },
      },
    },
  ],
};
