// Madrid · churros at dawn, the Prado, the Retiro boats, a tapas bar in La Latina
// and the Sunday Rastro. Five places, four levels each (A0, A1, A2, B1). Every
// level is written on its own: same place and people, different situations.
export default {
  id: 'madrid',
  spots: [
    // ------------------------------------------------------------ the churro shop
    {
      id: 'churreria',
      name: { es: 'La chocolatería de churros', en: 'The churro café' },
      who: { name: 'Paco', role: { es: 'churrero', en: 'churro maker' } },
      levels: {
        A0: {
          scene: { es: 'Es un café pequeño en el centro de Madrid. Hay churros y chocolate caliente. Paco hace los churros.', en: 'It is a small café in the centre of Madrid. There are churros and hot chocolate. Paco makes the churros.' },
          opener: { es: '¡Buenos días! Soy Paco. ¿Quieres churros?', en: 'Good morning! I am Paco. Do you want churros?' },
          decide: {
            ask: { es: 'Paco tiene tres cosas. ¿Qué pides?', en: 'Paco has three things. What do you order?' },
            options: [
              { say: { es: 'Churros con chocolate, por favor.', en: 'Churros with chocolate, please.' }, then: { es: 'Paco dice: «¡El clásico! Seis churros y un chocolate».', en: 'Paco says: “The classic! Six churros and a chocolate.”' } },
              { say: { es: 'Porras, por favor.', en: 'Porras, please.' }, then: { es: 'Paco dice: «Son churros grandes. ¡Muy buenos!»', en: 'Paco says: “They are big churros. Very good!”' } },
              { say: { es: 'Solo un café con leche.', en: 'Just a white coffee.' }, then: { es: 'Paco dice: «Vale. ¿Y un churro de regalo?»', en: 'Paco says: “OK. And a free churro?”' } },
            ],
          },
          twist: { es: 'El chocolate está muy caliente. ¡Cuidado! Paco te da un vaso de agua. ¿Qué dices?', en: 'The chocolate is very hot. Careful! Paco gives you a glass of water. What do you say?' },
          questions: [
            { q: { es: '¿Qué desayunas?', en: 'What do you have for breakfast?' }, help: { es: 'Desayuno café / pan / fruta.', en: 'I have coffee / bread / fruit.' }, follow: [{ es: '¿A qué hora?', en: 'At what time?' }, { es: '¿Dónde desayunas?', en: 'Where do you have breakfast?' }] },
            { q: { es: '¿Te gusta el chocolate caliente?', en: 'Do you like hot chocolate?' }, help: { es: 'Sí, mucho. / No, prefiero café.', en: 'Yes, a lot. / No, I prefer coffee.' }, follow: [{ es: '¿Cuándo lo tomas?', en: 'When do you drink it?' }, { es: '¿Con qué?', en: 'With what?' }] },
            { q: { es: '¿Comes cosas dulces por la mañana?', en: 'Do you eat sweet things in the morning?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿Qué comes?', en: 'What do you eat?' }, { es: '¿Y los domingos?', en: 'And on Sundays?' }] },
            { q: { es: '¿Hay un café cerca de tu casa?', en: 'Is there a café near your home?' }, help: { es: 'Sí, hay uno. / No, no hay.', en: 'Yes, there is one. / No, there isn’t.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is it called?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
          ],
          words: [{ es: 'el churro', en: 'churro (fried dough)' }, { es: 'el chocolate', en: 'hot chocolate' }, { es: 'caliente', en: 'hot' }, { es: '¡Cuidado!', en: 'Careful!' }, { es: 'vale', en: 'OK (Spain)' }],
        },
        A1: {
          scene: { es: 'Son las seis de la mañana de un domingo. La chocolatería está llena de gente que vuelve de la fiesta y de trabajadores que empiezan el día. Paco hace churros desde las cinco.', en: 'It is six on a Sunday morning. The café is full of people coming back from a night out and workers starting their day. Paco has been making churros since five.' },
          opener: { es: 'A esta hora tengo dos tipos de clientes: los que no han dormido y los que se acaban de levantar. Los dos piden lo mismo: chocolate con churros. ¿Y tú, de qué grupo eres?', en: 'At this hour I have two kinds of customers: those who haven’t slept and those who have just got up. Both order the same: chocolate with churros. And you, which group are you in?' },
          decide: {
            ask: { es: 'Un grupo de jóvenes muy cansados se sienta a tu lado. Uno se duerme en la mesa. ¿Qué haces?', en: 'A group of very tired young people sits next to you. One falls asleep at the table. What do you do?' },
            options: [
              { say: { es: 'Le pido a Paco un café para el chico.', en: 'I ask Paco for a coffee for the boy.' }, then: { es: 'El chico se despierta, toma el café y te da las gracias en tres idiomas.', en: 'The boy wakes up, drinks the coffee and thanks you in three languages.' } },
              { say: { es: 'Saco una foto para sus amigos.', en: 'I take a photo for his friends.' }, then: { es: 'Sus amigos se ríen mucho. La foto termina en el grupo de la clase.', en: 'His friends laugh a lot. The photo ends up in the class group chat.' } },
              { say: { es: 'No hago nada y como mis churros.', en: 'I do nothing and eat my churros.' }, then: { es: 'Paco te guiña un ojo: «Aquí cada uno duerme donde puede».', en: 'Paco winks at you: “Here everyone sleeps where they can.”' } },
            ],
          },
          twist: { es: 'Se acaba la masa de los churros y hay una fila de veinte personas. Paco te pide ayuda para atender. ¿Qué haces?', en: 'The churro dough runs out and there is a queue of twenty people. Paco asks you to help serve. What do you do?' },
          questions: [
            { q: { es: '¿A qué hora te levantas los domingos?', en: 'What time do you get up on Sundays?' }, help: { es: 'Me levanto a las…', en: 'I get up at…' }, follow: [{ es: '¿Y entre semana?', en: 'And on weekdays?' }, { es: '¿Duermes la siesta?', en: 'Do you take a nap?' }] },
            { q: { es: '¿Sales por la noche?', en: 'Do you go out at night?' }, help: { es: 'Sí, los sábados. / No, prefiero quedarme en casa.', en: 'Yes, on Saturdays. / No, I prefer staying at home.' }, follow: [{ es: '¿Hasta qué hora?', en: 'Until what time?' }, { es: '¿Adónde vas?', en: 'Where do you go?' }] },
            { q: { es: '¿Qué comida típica hay en tu ciudad por la mañana?', en: 'What typical morning food is there in your city?' }, help: { es: 'En mi ciudad se come…', en: 'In my city people eat…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Dónde se compra?', en: 'Where do you buy it?' }] },
            { q: { es: '¿Trabajas los fines de semana?', en: 'Do you work at weekends?' }, help: { es: 'Sí, trabajo el… / No, descanso.', en: 'Yes, I work on… / No, I rest.' }, follow: [{ es: '¿Qué haces para descansar?', en: 'What do you do to rest?' }, { es: '¿Te gusta tu horario?', en: 'Do you like your schedule?' }] },
          ],
          words: [{ es: 'la fila', en: 'the queue' }, { es: 'la masa', en: 'the dough' }, { es: 'atender', en: 'to serve (customers)' }, { es: 'cansado', en: 'tired' }, { es: 'guiñar un ojo', en: 'to wink' }],
        },
        A2: {
          scene: { es: 'La chocolatería tiene más de cien años. El dueño, un señor mayor, quiere jubilarse y venderla. Una cadena de cafeterías ofrece mucho dinero, pero quiere quitar los churros hechos a mano. Paco trabaja aquí desde hace veinticinco años.', en: 'The café is over a hundred years old. The owner, an elderly man, wants to retire and sell it. A chain of coffee shops is offering a lot of money, but wants to get rid of the handmade churros. Paco has worked here for twenty-five years.' },
          opener: { es: 'Llegué a Madrid con diecinueve años, desde un pueblo de Extremadura. Mi primer trabajo fue aquí, y nunca me fui. El padre del dueño me enseñó a hacer churros. Si esto se convierte en una cafetería más, no sé qué voy a hacer. ¿Tú has tenido miedo de perder un trabajo?', en: 'I came to Madrid at nineteen, from a village in Extremadura. My first job was here, and I never left. The owner’s father taught me to make churros. If this becomes just another coffee shop, I don’t know what I’ll do. Have you ever been afraid of losing a job?' },
          decide: {
            ask: { es: 'Paco tiene una idea, pero necesita valor. ¿Qué le aconsejas?', en: 'Paco has an idea, but needs courage. What do you advise him?' },
            options: [
              { say: { es: 'Que intente comprar la chocolatería con otros trabajadores.', en: 'Try to buy the café with other workers.' }, then: { es: 'Cuatro compañeros se unen. El banco duda, pero el dueño baja el precio para ellos.', en: 'Four colleagues join him. The bank hesitates, but the owner lowers the price for them.' } },
              { say: { es: 'Que abra su propio puesto de churros en un mercado.', en: 'Open his own churro stall in a market.' }, then: { es: 'Paco empieza con un puesto pequeño. Los clientes de siempre lo siguen.', en: 'Paco starts with a small stall. His regular customers follow him.' } },
              { say: { es: 'Que hable con la cadena para mantener los churros.', en: 'Talk to the chain to keep the churros.' }, then: { es: 'La cadena acepta un año de prueba. Si venden bien, se quedan.', en: 'The chain agrees to a one-year trial. If they sell well, they stay.' } },
            ],
          },
          twist: { es: 'El dueño escucha la conversación desde la cocina. Sale y dice: «Paco, nunca te lo pregunté: ¿quieres ser el dueño?».', en: 'The owner hears the conversation from the kitchen. He comes out and says: “Paco, I never asked you: do you want to be the owner?”' },
          questions: [
            { q: { es: '¿Has tenido miedo de perder un trabajo?', en: 'Have you ever been afraid of losing a job?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Qué pasó al final?', en: 'What happened in the end?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Cuál fue tu primer trabajo?', en: 'What was your first job?' }, help: { es: 'Mi primer trabajo fue en… / Todavía no he trabajado.', en: 'My first job was in… / I haven’t worked yet.' }, follow: [{ es: '¿Cuánto tiempo estuviste?', en: 'How long were you there?' }, { es: '¿Qué aprendiste?', en: 'What did you learn?' }] },
            { q: { es: '¿Hay algún lugar antiguo en tu ciudad que cerró?', en: 'Is there an old place in your city that closed?' }, help: { es: 'Sí, cerró… y ahora hay…', en: 'Yes, … closed and now there is…' }, follow: [{ es: '¿Lo echas de menos?', en: 'Do you miss it?' }, { es: '¿Por qué cerró?', en: 'Why did it close?' }] },
            { q: { es: '¿Te mudaste a otra ciudad alguna vez?', en: 'Have you ever moved to another city?' }, help: { es: 'Sí, me mudé a… con… años. / No, siempre en la misma.', en: 'Yes, I moved to… at… / No, always the same one.' }, follow: [{ es: '¿Fue difícil?', en: 'Was it hard?' }, { es: '¿Qué extrañaste?', en: 'What did you miss?' }] },
          ],
          words: [{ es: 'jubilarse', en: 'to retire' }, { es: 'la cadena', en: 'the chain (of shops)' }, { es: 'hecho a mano', en: 'handmade' }, { es: 'el pueblo', en: 'the village' }, { es: 'el valor', en: 'courage' }],
        },
        B1: {
          scene: { es: 'El centro de Madrid cambia rápido: muchos pisos se han convertido en apartamentos turísticos y las tiendas de toda la vida cierran. La chocolatería de Paco aparece en todas las guías, y ahora el noventa por ciento de los clientes son turistas. Los vecinos dicen que ya no es su sitio.', en: 'Central Madrid is changing fast: many flats have become tourist apartments and lifelong shops are closing. Paco’s café appears in every guidebook, and now ninety per cent of the customers are tourists. The locals say it is no longer their place.' },
          opener: { es: 'Me pasa algo raro. Nunca hemos ganado tanto dinero, y nunca he estado tan triste. Antes conocía a todos: al señor del quiosco, a la profesora que venía con sus hijos, al taxista del turno de noche. Ahora atiendo a gente que no vuelve nunca. ¿El éxito puede quitarle el alma a un lugar?', en: 'Something strange is happening to me. We have never made so much money, and I have never been so sad. I used to know everyone: the newsstand man, the teacher who came with her kids, the night-shift taxi driver. Now I serve people who never come back. Can success take the soul out of a place?' },
          decide: {
            ask: { es: 'Paco quiere recuperar a los vecinos sin perder a los turistas. ¿Qué le propones?', en: 'Paco wants to win back the locals without losing the tourists. What do you suggest?' },
            options: [
              { say: { es: 'Un precio especial para los vecinos del barrio.', en: 'A special price for people from the neighbourhood.' }, then: { es: 'Funciona, pero algunos turistas se quejan en internet de que es injusto.', en: 'It works, but some tourists complain online that it is unfair.' } },
              { say: { es: 'Abrir una hora antes solo para la gente del barrio.', en: 'Open an hour earlier only for local people.' }, then: { es: 'De seis a siete vuelve el ambiente de antes. Paco vuelve a sonreír.', en: 'From six to seven the old atmosphere returns. Paco smiles again.' } },
              { say: { es: 'Aceptar que los tiempos cambian.', en: 'Accept that times change.' }, then: { es: 'Paco sigue trabajando, pero empieza a buscar un local en un barrio menos turístico.', en: 'Paco keeps working, but starts looking for premises in a less touristy area.' } },
            ],
          },
          twist: { es: 'Una turista japonesa que viene cada año desde hace quince años le trae a Paco una foto de los dos, de su primera visita. Paco no la recordaba, pero ella a él sí.', en: 'A Japanese tourist who has come every year for fifteen years brings Paco a photo of the two of them from her first visit. Paco didn’t remember her, but she remembered him.' },
          questions: [
            { q: { es: '¿El turismo cambió tu ciudad o tu barrio?', en: 'Has tourism changed your city or neighbourhood?' }, help: { es: 'Sí, antes… y ahora… / No mucho.', en: 'Yes, before… and now… / Not much.' }, follow: [{ es: '¿Para bien o para mal?', en: 'For better or worse?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
            { q: { es: '¿Es justo cobrar distinto a vecinos y turistas?', en: 'Is it fair to charge locals and tourists differently?' }, help: { es: 'Me parece justo / injusto porque…', en: 'I think it is fair / unfair because…' }, follow: [{ es: '¿Has visto algo así?', en: 'Have you seen something like that?' }, { es: '¿Y en los museos?', en: 'And in museums?' }] },
            { q: { es: '¿Qué hace que un lugar sea «tuyo»?', en: 'What makes a place feel “yours”?' }, help: { es: 'Para mí, un lugar es mío cuando…', en: 'For me, a place is mine when…' }, follow: [{ es: '¿Tienes un lugar así?', en: 'Do you have a place like that?' }, { es: '¿Lo perdiste alguna vez?', en: 'Have you ever lost one?' }] },
            { q: { es: '¿Se puede tener éxito y seguir siendo el mismo?', en: 'Can you be successful and stay the same?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Qué cambiarías tú?', en: 'What would you change?' }] },
          ],
          words: [{ es: 'el piso', en: 'the flat (Spain)' }, { es: 'de toda la vida', en: 'lifelong, traditional' }, { es: 'el vecino', en: 'the local resident' }, { es: 'el local', en: 'the premises' }, { es: 'el alma', en: 'the soul' }],
        },
      },
    },
    // ------------------------------------------------------------ the Prado
    {
      id: 'prado',
      name: { es: 'El Museo del Prado', en: 'The Prado Museum' },
      who: { name: 'Elena', role: { es: 'vigilante de sala', en: 'gallery attendant' } },
      levels: {
        A0: {
          scene: { es: 'Es un museo muy grande. Hay cuadros muy famosos. Elena trabaja en una sala. Hay mucha gente.', en: 'It is a very big museum. There are very famous paintings. Elena works in a room. There are many people.' },
          opener: { es: 'Hola, soy Elena. ¿Te gustan los cuadros?', en: 'Hi, I am Elena. Do you like paintings?' },
          decide: {
            ask: { es: 'Hay tres cuadros en la sala. ¿Cuál miras?', en: 'There are three paintings in the room. Which one do you look at?' },
            options: [
              { say: { es: 'Un cuadro con una familia de reyes.', en: 'A painting of a royal family.' }, then: { es: 'Elena dice: «Es Las meninas, de Velázquez. ¡Es muy famoso!»', en: 'Elena says: “It is Las Meninas, by Velázquez. It is very famous!”' } },
              { say: { es: 'Un cuadro oscuro y triste.', en: 'A dark and sad painting.' }, then: { es: 'Elena dice: «Es de Goya. Pinta cosas muy tristes».', en: 'Elena says: “It is by Goya. He paints very sad things.”' } },
              { say: { es: 'Un cuadro con un jardín y mucha gente.', en: 'A painting with a garden and many people.' }, then: { es: 'Elena dice: «Es de El Bosco. ¡Mira los detalles!»', en: 'Elena says: “It is by Bosch. Look at the details!”' } },
            ],
          },
          twist: { es: 'Sacas una foto. Elena dice: «¡No, por favor! No se pueden sacar fotos». ¿Qué dices?', en: 'You take a photo. Elena says: “No, please! You can’t take photos.” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan los museos?', en: 'Do you like museums?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Qué museo te gusta?', en: 'Which museum do you like?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Pintas o dibujas?', en: 'Do you paint or draw?' }, help: { es: 'Sí, dibujo un poco. / No, nunca.', en: 'Yes, I draw a little. / No, never.' }, follow: [{ es: '¿Qué dibujas?', en: 'What do you draw?' }, { es: '¿Con qué colores?', en: 'With what colours?' }] },
            { q: { es: '¿Cuál es tu color favorito?', en: 'What is your favourite colour?' }, help: { es: 'Mi color favorito es el…', en: 'My favourite colour is…' }, follow: [{ es: '¿Tienes ropa de ese color?', en: 'Do you have clothes in that colour?' }, { es: '¿Por qué te gusta?', en: 'Why do you like it?' }] },
            { q: { es: '¿Sacas fotos en los museos?', en: 'Do you take photos in museums?' }, help: { es: 'Sí, siempre. / No, solo miro.', en: 'Yes, always. / No, I just look.' }, follow: [{ es: '¿Para quién?', en: 'For whom?' }, { es: '¿Las miras después?', en: 'Do you look at them later?' }] },
          ],
          words: [{ es: 'el museo', en: 'the museum' }, { es: 'el cuadro', en: 'the painting' }, { es: 'la sala', en: 'the room (in a museum)' }, { es: 'famoso', en: 'famous' }, { es: 'oscuro', en: 'dark' }],
        },
        A1: {
          scene: { es: 'El Prado es uno de los museos más importantes del mundo. Elena cuida la sala de Velázquez desde hace diez años. Conoce cada detalle de Las meninas y le encanta mirar las caras de los visitantes.', en: 'The Prado is one of the most important museums in the world. Elena has looked after the Velázquez room for ten years. She knows every detail of Las Meninas and loves watching visitors’ faces.' },
          opener: { es: '¿Sabes qué es lo más divertido de este cuadro? El pintor está dentro del cuadro, mirándote. Y los reyes están en el espejo del fondo. Mucha gente no lo ve. ¿Lo encuentras?', en: 'Do you know what’s most fun about this painting? The painter is inside the painting, looking at you. And the king and queen are in the mirror at the back. Many people don’t see it. Can you find it?' },
          decide: {
            ask: { es: 'Tienes solo una hora en el museo. ¿Qué haces?', en: 'You have only one hour in the museum. What do you do?' },
            options: [
              { say: { es: 'Veo solo tres cuadros, despacio.', en: 'I see only three paintings, slowly.' }, then: { es: 'Elena te recomienda Las meninas, El jardín de las delicias y un Goya. Sales feliz.', en: 'Elena recommends Las Meninas, The Garden of Earthly Delights and a Goya. You leave happy.' } },
              { say: { es: 'Camino rápido por todas las salas.', en: 'I walk quickly through all the rooms.' }, then: { es: 'Ves cientos de cuadros, pero al final no recuerdas casi ninguno.', en: 'You see hundreds of paintings, but in the end you hardly remember any.' } },
              { say: { es: 'Me siento en un banco y miro a la gente.', en: 'I sit on a bench and watch people.' }, then: { es: 'Elena se ríe: «Eso es lo que hago yo todos los días».', en: 'Elena laughs: “That’s what I do every day.”' } },
            ],
          },
          twist: { es: 'Un niño se acerca mucho al cuadro y suena una alarma. Todos miran. ¿Qué haces?', en: 'A child gets very close to the painting and an alarm goes off. Everyone looks. What do you do?' },
          questions: [
            { q: { es: '¿Cuál es el museo más famoso de tu país?', en: 'What is the most famous museum in your country?' }, help: { es: 'Es el… en…', en: 'It is the… in…' }, follow: [{ es: '¿Lo visitaste?', en: 'Have you visited it?' }, { es: '¿Qué hay dentro?', en: 'What is inside?' }] },
            { q: { es: '¿Prefieres ver muchas cosas rápido o pocas despacio?', en: 'Do you prefer seeing many things quickly or a few slowly?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Y en los viajes?', en: 'And on trips?' }, { es: '¿Y en los libros?', en: 'And with books?' }] },
            { q: { es: '¿Conoces algún pintor español?', en: 'Do you know any Spanish painter?' }, help: { es: 'Sí, conozco a… / No, ninguno.', en: 'Yes, I know… / No, none.' }, follow: [{ es: '¿Qué cuadro?', en: 'Which painting?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Te gusta mirar a la gente?', en: 'Do you like watching people?' }, help: { es: 'Sí, en el metro / en los cafés…', en: 'Yes, on the metro / in cafés…' }, follow: [{ es: '¿Qué observas?', en: 'What do you notice?' }, { es: '¿Inventas historias?', en: 'Do you make up stories?' }] },
          ],
          words: [{ es: 'el pintor', en: 'the painter' }, { es: 'el espejo', en: 'the mirror' }, { es: 'el fondo', en: 'the background' }, { es: 'el banco', en: 'the bench' }, { es: 'la alarma', en: 'the alarm' }],
        },
        A2: {
          scene: { es: 'Es martes y el museo está tranquilo. Elena ve a una mujer mayor que viene todos los martes, se sienta frente al mismo cuadro de Goya y llora en silencio. Hoy Elena decide hablar con ella.', en: 'It is Tuesday and the museum is quiet. Elena sees an elderly woman who comes every Tuesday, sits in front of the same Goya painting and cries silently. Today Elena decides to talk to her.' },
          opener: { es: 'Llevo meses viéndola. Siempre el mismo cuadro, siempre una hora, siempre las lágrimas. Mis compañeros me dicen que no es asunto mío. Pero hoy le he llevado un pañuelo y me he sentado a su lado. ¿Tú qué habrías hecho?', en: 'I have been watching her for months. Always the same painting, always an hour, always the tears. My colleagues tell me it is none of my business. But today I brought her a tissue and sat next to her. What would you have done?' },
          decide: {
            ask: { es: 'La mujer le cuenta que venía cada martes con su marido, que murió el año pasado. ¿Qué le dice Elena?', en: 'The woman tells her she used to come every Tuesday with her husband, who died last year. What does Elena say?' },
            options: [
              { say: { es: 'Que puede venir siempre, que ella la va a esperar.', en: 'That she can always come, that she will wait for her.' }, then: { es: 'La mujer sonríe por primera vez. El martes siguiente trae dos cafés.', en: 'The woman smiles for the first time. The next Tuesday she brings two coffees.' } },
              { say: { es: 'Que le cuente qué le gustaba a su marido del cuadro.', en: 'Ask her what her husband liked about the painting.' }, then: { es: 'La mujer habla durante una hora. Elena aprende más de Goya que en diez años.', en: 'The woman talks for an hour. Elena learns more about Goya than in ten years.' } },
              { say: { es: 'Que hay grupos de visitas para personas mayores.', en: 'That there are tour groups for older people.' }, then: { es: 'La mujer se apunta. Ahora viene los martes con cinco amigas nuevas.', en: 'The woman signs up. Now she comes on Tuesdays with five new friends.' } },
            ],
          },
          twist: { es: 'Al despedirse, la mujer le dice a Elena que su marido fue vigilante de esta misma sala durante treinta años.', en: 'As they say goodbye, the woman tells Elena that her husband was the attendant in this very room for thirty years.' },
          questions: [
            { q: { es: '¿Tienes un lugar al que vuelves por alguien especial?', en: 'Do you have a place you return to because of someone special?' }, help: { es: 'Sí, vuelvo a… porque… / No, no tengo.', en: 'Yes, I go back to… because… / No, I don’t.' }, follow: [{ es: '¿Qué sientes allí?', en: 'What do you feel there?' }, { es: '¿Vas solo o acompañado?', en: 'Do you go alone or with someone?' }] },
            { q: { es: '¿Hablarías con un desconocido que está triste?', en: 'Would you talk to a stranger who is sad?' }, help: { es: 'Sí, le preguntaría… / No, no me atrevo.', en: 'Yes, I would ask… / No, I don’t dare.' }, follow: [{ es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }, { es: '¿Qué pasó?', en: 'What happened?' }] },
            { q: { es: '¿Una obra de arte te emocionó alguna vez?', en: 'Has a work of art ever moved you?' }, help: { es: 'Sí, una canción / un cuadro / una película…', en: 'Yes, a song / a painting / a film…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿La compartiste con alguien?', en: 'Did you share it with someone?' }] },
            { q: { es: '¿Qué haces cuando un amigo está triste?', en: 'What do you do when a friend is sad?' }, help: { es: 'Lo escucho / lo invito a… / le escribo…', en: 'I listen / I invite them to… / I write to them…' }, follow: [{ es: '¿Y cuando tú estás triste?', en: 'And when you are sad?' }, { es: '¿Quién te ayuda?', en: 'Who helps you?' }] },
          ],
          words: [{ es: 'las lágrimas', en: 'tears' }, { es: 'el pañuelo', en: 'the tissue' }, { es: 'no es asunto mío', en: 'it’s none of my business' }, { es: 'apuntarse', en: 'to sign up' }, { es: 'despedirse', en: 'to say goodbye' }],
        },
        B1: {
          scene: { es: 'Dos activistas climáticos entran en la sala y pegan sus manos al marco de un cuadro de Goya para protestar. No dañan la pintura, que está protegida por un cristal, pero la sala se cierra y cientos de visitantes se quedan fuera. Elena estaba de guardia.', en: 'Two climate activists walk into the room and glue their hands to the frame of a Goya painting in protest. They don’t damage the painting, which is protected by glass, but the room is closed and hundreds of visitors are left outside. Elena was on duty.' },
          opener: { es: 'Los vi entrar y no sospeché nada: parecían estudiantes normales. Ahora mi jefe me pregunta por qué no los paré, y los periodistas me preguntan qué opino de la protesta. Lo curioso es que, en parte, estoy de acuerdo con lo que defienden. Pero el arte no tiene la culpa. ¿O sí sirve de algo?', en: 'I saw them come in and didn’t suspect a thing: they looked like normal students. Now my boss is asking why I didn’t stop them, and the journalists are asking what I think of the protest. The funny thing is that, partly, I agree with what they stand for. But art isn’t to blame. Or does it actually help?' },
          decide: {
            ask: { es: 'Un periodista le pide a Elena una declaración para la televisión. ¿Qué le recomiendas?', en: 'A journalist asks Elena for a statement for television. What do you recommend?' },
            options: [
              { say: { es: 'Que no hable: es una trabajadora, no una portavoz.', en: 'Not to speak: she is an employee, not a spokesperson.' }, then: { es: 'Elena se calla. Su jefe se lo agradece, pero ella se siente cobarde.', en: 'Elena keeps quiet. Her boss is grateful, but she feels cowardly.' } },
              { say: { es: 'Que diga lo que piensa, con respeto por las dos partes.', en: 'To say what she thinks, respecting both sides.' }, then: { es: 'Sus palabras se hacen virales. Unos la aplauden; otros piden que la despidan.', en: 'Her words go viral. Some applaud her; others demand that she be fired.' } },
              { say: { es: 'Que hable solo del cuadro y de su historia.', en: 'To talk only about the painting and its history.' }, then: { es: 'El reportaje termina siendo una pequeña clase de arte. Las visitas a Goya aumentan.', en: 'The report ends up being a small art lesson. Visits to Goya increase.' } },
            ],
          },
          twist: { es: 'Uno de los activistas detenidos resulta ser un antiguo estudiante de Bellas Artes que Elena conoció en una visita escolar, hace años.', en: 'One of the arrested activists turns out to be a former fine-arts student Elena met on a school visit years ago.' },
          questions: [
            { q: { es: '¿Te parece legítimo protestar en un museo?', en: 'Do you think protesting in a museum is legitimate?' }, help: { es: 'Me parece legítimo / ilegítimo porque…', en: 'I think it is legitimate / illegitimate because…' }, follow: [{ es: '¿Dónde sí protestarías?', en: 'Where would you protest?' }, { es: '¿Qué protesta te ha convencido?', en: 'What protest has convinced you?' }] },
            { q: { es: '¿Un trabajador debería poder dar su opinión en público?', en: 'Should an employee be able to give their opinion in public?' }, help: { es: 'Depende de… / Creo que sí, siempre que…', en: 'It depends on… / I think so, as long as…' }, follow: [{ es: '¿Te ha pasado?', en: 'Has it happened to you?' }, { es: '¿Qué límites hay en tu trabajo?', en: 'What limits are there at your work?' }] },
            { q: { es: '¿Para qué sirve el arte en un mundo con problemas graves?', en: 'What is art for in a world with serious problems?' }, help: { es: 'Para mí, el arte sirve para…', en: 'For me, art is for…' }, follow: [{ es: '¿Qué obra lo demuestra?', en: 'Which work proves it?' }, { es: '¿Y la música?', en: 'And music?' }] },
            { q: { es: '¿Alguna vez te has quedado callado y luego te has arrepentido?', en: 'Have you ever kept quiet and then regretted it?' }, help: { es: 'Sí, una vez no dije… / No, suelo hablar.', en: 'Yes, once I didn’t say… / No, I usually speak up.' }, follow: [{ es: '¿Qué dirías ahora?', en: 'What would you say now?' }, { es: '¿Por qué callaste?', en: 'Why did you stay quiet?' }] },
          ],
          words: [{ es: 'pegar', en: 'to glue' }, { es: 'el marco', en: 'the frame' }, { es: 'sospechar', en: 'to suspect' }, { es: 'el portavoz', en: 'the spokesperson' }, { es: 'arrepentirse', en: 'to regret' }],
        },
      },
    },
    // ------------------------------------------------------------ the Retiro boats
    {
      id: 'retiro',
      name: { es: 'Las barcas del Retiro', en: 'The Retiro boats' },
      who: { name: 'Lucía', role: { es: 'encargada de las barcas', en: 'boat hire attendant' } },
      levels: {
        A0: {
          scene: { es: 'Es un parque muy grande. Hay un lago con barcas azules. Hay árboles y patos. Lucía alquila las barcas.', en: 'It is a very big park. There is a lake with blue boats. There are trees and ducks. Lucía rents out the boats.' },
          opener: { es: '¡Hola! Soy Lucía. ¿Quieres una barca?', en: 'Hi! I am Lucía. Do you want a boat?' },
          decide: {
            ask: { es: '¿Con quién subes a la barca?', en: 'Who do you get in the boat with?' },
            options: [
              { say: { es: 'Solo, por favor.', en: 'Alone, please.' }, then: { es: 'Lucía dice: «Muy bien. ¡Rema despacio!»', en: 'Lucía says: “Very good. Row slowly!”' } },
              { say: { es: 'Con un amigo.', en: 'With a friend.' }, then: { es: 'Lucía dice: «Perfecto. Uno rema y otro mira».', en: 'Lucía says: “Perfect. One rows and the other looks.”' } },
              { say: { es: 'Con mi familia.', en: 'With my family.' }, then: { es: 'Lucía dice: «En la barca hay sitio para cuatro».', en: 'Lucía says: “There is room for four in the boat.”' } },
            ],
          },
          twist: { es: 'Un pato sube a tu barca. ¡Quiere pan! ¿Qué haces?', en: 'A duck climbs into your boat. It wants bread! What do you do?' },
          questions: [
            { q: { es: '¿Hay un parque cerca de tu casa?', en: 'Is there a park near your home?' }, help: { es: 'Sí, hay uno grande / pequeño. / No.', en: 'Yes, there is a big / small one. / No.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is it called?' }, { es: '¿Qué haces allí?', en: 'What do you do there?' }] },
            { q: { es: '¿Sabes remar?', en: 'Can you row?' }, help: { es: 'Sí, un poco. / No, no sé.', en: 'Yes, a little. / No, I can’t.' }, follow: [{ es: '¿Dónde aprendiste?', en: 'Where did you learn?' }, { es: '¿Te gusta el agua?', en: 'Do you like water?' }] },
            { q: { es: '¿Con quién vas al parque?', en: 'Who do you go to the park with?' }, help: { es: 'Con mi perro / mis hijos / mis amigos.', en: 'With my dog / my children / my friends.' }, follow: [{ es: '¿Cuándo?', en: 'When?' }, { es: '¿Qué llevas?', en: 'What do you take?' }] },
            { q: { es: '¿Te gustan los domingos?', en: 'Do you like Sundays?' }, help: { es: 'Sí, descanso. / No, son aburridos.', en: 'Yes, I rest. / No, they are boring.' }, follow: [{ es: '¿Qué haces los domingos?', en: 'What do you do on Sundays?' }, { es: '¿Y los sábados?', en: 'And on Saturdays?' }] },
          ],
          words: [{ es: 'el parque', en: 'the park' }, { es: 'la barca', en: 'the rowing boat' }, { es: 'remar', en: 'to row' }, { es: 'el pato', en: 'the duck' }, { es: 'el sitio', en: 'room / space (Spain)' }],
        },
        A1: {
          scene: { es: 'El Retiro es el gran parque del centro de Madrid. Los domingos hay músicos, magos, gente que patina y familias que pasean. Lucía trabaja en las barcas del estanque los fines de semana para pagar sus estudios.', en: 'The Retiro is the great park in central Madrid. On Sundays there are musicians, magicians, people skating and families walking. Lucía works at the pond’s boats at weekends to pay for her studies.' },
          opener: { es: 'Estudio Veterinaria y trabajo aquí los sábados y domingos. Lo mejor es que veo de todo: parejas que se declaran, niños que reman por primera vez, abuelos que recuerdan su juventud. ¿Qué te trae hoy al Retiro?', en: 'I study veterinary science and work here on Saturdays and Sundays. The best part is that I see everything: couples proposing, children rowing for the first time, grandparents remembering their youth. What brings you to the Retiro today?' },
          decide: {
            ask: { es: 'Tienes la tarde libre en el Retiro. ¿Qué haces primero?', en: 'You have the afternoon free in the Retiro. What do you do first?' },
            options: [
              { say: { es: 'Alquilo una barca media hora.', en: 'I rent a boat for half an hour.' }, then: { es: 'Remas en círculos durante diez minutos. Al final, Lucía te enseña a ir recto.', en: 'You row in circles for ten minutes. In the end, Lucía shows you how to go straight.' } },
              { say: { es: 'Veo el espectáculo de un mago.', en: 'I watch a magician’s show.' }, then: { es: 'El mago te elige para un truco y saca una moneda de tu oreja.', en: 'The magician picks you for a trick and pulls a coin out of your ear.' } },
              { say: { es: 'Busco el Palacio de Cristal.', en: 'I look for the Crystal Palace.' }, then: { es: 'Encuentras un edificio de cristal precioso junto a un pequeño lago con tortugas.', en: 'You find a beautiful glass building next to a small lake with turtles.' } },
            ],
          },
          twist: { es: 'Un chico en una barca saca un anillo y se pone de rodillas. ¡La barca se mueve mucho! ¿Qué haces?', en: 'A young man in a boat takes out a ring and gets down on one knee. The boat is rocking a lot! What do you do?' },
          questions: [
            { q: { es: '¿Qué haces los fines de semana?', en: 'What do you do at weekends?' }, help: { es: 'Normalmente… / A veces…', en: 'Usually… / Sometimes…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Y este fin de semana?', en: 'And this weekend?' }] },
            { q: { es: '¿Trabajas y estudias a la vez?', en: 'Do you work and study at the same time?' }, help: { es: 'Sí, trabajo en… / No, solo…', en: 'Yes, I work in… / No, only…' }, follow: [{ es: '¿Es difícil?', en: 'Is it hard?' }, { es: '¿Qué estudias?', en: 'What do you study?' }] },
            { q: { es: '¿Te gustan los espectáculos en la calle?', en: 'Do you like street shows?' }, help: { es: 'Sí, me gustan los músicos / magos… / No mucho.', en: 'Yes, I like musicians / magicians… / Not much.' }, follow: [{ es: '¿Das dinero?', en: 'Do you give money?' }, { es: '¿Cuál fue el mejor?', en: 'Which was the best?' }] },
            { q: { es: '¿Has visto una declaración de amor en público?', en: 'Have you seen a public marriage proposal?' }, help: { es: 'Sí, una vez en… / No, nunca.', en: 'Yes, once in… / No, never.' }, follow: [{ es: '¿Te parece romántico?', en: 'Do you find it romantic?' }, { es: '¿Lo harías?', en: 'Would you do it?' }] },
          ],
          words: [{ es: 'el estanque', en: 'the pond' }, { es: 'el mago', en: 'the magician' }, { es: 'patinar', en: 'to skate' }, { es: 'declararse', en: 'to declare one’s love / propose' }, { es: 'de rodillas', en: 'on one’s knees' }],
        },
        A2: {
          scene: { es: 'Es agosto y hace cuarenta grados. El parque está casi vacío y las barcas también. Lucía ve a un señor mayor que se marea al sol, cerca del estanque. No hay nadie más cerca.', en: 'It is August and forty degrees. The park is almost empty, and so are the boats. Lucía sees an elderly man feeling dizzy in the sun near the pond. There is nobody else nearby.' },
          opener: { es: 'Los veranos en Madrid son durísimos. Esta mañana ya he dado agua a dos turistas que se sentían mal. Y ahora este señor… Está muy pálido y dice que solo necesita sentarse. Yo estudio para curar animales, no personas. ¿Tú sabes qué hay que hacer?', en: 'Summers in Madrid are really tough. This morning I already gave water to two tourists who felt unwell. And now this man… He is very pale and says he just needs to sit down. I study to treat animals, not people. Do you know what to do?' },
          decide: {
            ask: { es: 'El señor no quiere ayuda y quiere irse andando a casa. ¿Qué haces?', en: 'The man doesn’t want help and wants to walk home. What do you do?' },
            options: [
              { say: { es: 'Llamo al 112 aunque él no quiera.', en: 'I call 112 even if he doesn’t want me to.' }, then: { es: 'La ambulancia llega en ocho minutos. Era un golpe de calor. El médico te felicita.', en: 'The ambulance arrives in eight minutes. It was heatstroke. The doctor congratulates you.' } },
              { say: { es: 'Lo llevo a la sombra y le doy agua.', en: 'I take him into the shade and give him water.' }, then: { es: 'Después de veinte minutos se siente mejor. Te cuenta que vive solo y que su aire acondicionado está roto.', en: 'After twenty minutes he feels better. He tells you he lives alone and his air conditioning is broken.' } },
              { say: { es: 'Lo acompaño andando hasta su casa.', en: 'I walk him home.' }, then: { es: 'Vive a diez minutos. Por el camino te cuenta que se conocieron con su mujer en estas barcas, en 1965.', en: 'He lives ten minutes away. On the way he tells you he met his wife at these boats in 1965.' } },
            ],
          },
          twist: { es: 'Una semana después, el señor vuelve al estanque con un ventilador nuevo de regalo para la caseta de Lucía.', en: 'A week later, the man comes back to the pond with a new fan as a present for Lucía’s booth.' },
          questions: [
            { q: { es: '¿Cómo son los veranos en tu ciudad?', en: 'What are summers like in your city?' }, help: { es: 'Hace mucho calor / Llueve / Es agradable…', en: 'It is very hot / It rains / It is pleasant…' }, follow: [{ es: '¿Qué haces para el calor?', en: 'What do you do about the heat?' }, { es: '¿Te vas de vacaciones?', en: 'Do you go on holiday?' }] },
            { q: { es: '¿Has ayudado alguna vez a alguien en la calle?', en: 'Have you ever helped someone in the street?' }, help: { es: 'Sí, una vez… / No, nunca he tenido que hacerlo.', en: 'Yes, once… / No, I have never had to.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
            { q: { es: '¿Sabes primeros auxilios?', en: 'Do you know first aid?' }, help: { es: 'Sí, hice un curso. / No, pero me gustaría aprender.', en: 'Yes, I did a course. / No, but I would like to learn.' }, follow: [{ es: '¿Debería ser obligatorio?', en: 'Should it be compulsory?' }, { es: '¿Dónde se aprende?', en: 'Where can you learn it?' }] },
            { q: { es: '¿Hay personas mayores que viven solas cerca de ti?', en: 'Are there older people who live alone near you?' }, help: { es: 'Sí, mi vecina… / No que yo sepa.', en: 'Yes, my neighbour… / Not that I know of.' }, follow: [{ es: '¿Hablas con ellas?', en: 'Do you talk to them?' }, { es: '¿Cómo se podría ayudar?', en: 'How could people help?' }] },
          ],
          words: [{ es: 'marearse', en: 'to feel dizzy' }, { es: 'pálido', en: 'pale' }, { es: 'el golpe de calor', en: 'heatstroke' }, { es: 'la sombra', en: 'the shade' }, { es: 'la caseta', en: 'the booth' }],
        },
        B1: {
          scene: { es: 'El ayuntamiento quiere cobrar entrada en algunas zonas del Retiro para pagar su mantenimiento, porque el parque recibe millones de visitas y los árboles viejos se caen con las tormentas. Lucía tiene que recoger firmas en el estanque, a favor o en contra.', en: 'The city council wants to charge admission to some areas of the Retiro to pay for its upkeep, because the park gets millions of visits and old trees fall in storms. Lucía has to collect signatures at the pond, for or against.' },
          opener: { es: 'Me han pedido de los dos lados que recoja firmas, y yo no sé qué pensar. Por un lado, el parque está agotado: el año pasado cayó un árbol a dos metros de una familia. Por otro, el Retiro siempre ha sido de todos, del que tiene dinero y del que no. Si pones una entrada, aunque sea pequeña, alguien se queda fuera. ¿Tú qué firmarías?', en: 'Both sides have asked me to collect signatures, and I don’t know what to think. On the one hand, the park is worn out: last year a tree fell two metres from a family. On the other, the Retiro has always belonged to everyone, rich or not. If you charge admission, even a small one, someone is left out. What would you sign?' },
          decide: {
            ask: { es: 'Lucía tiene que elegir una postura para su caseta. ¿Qué le aconsejas?', en: 'Lucía has to choose a position for her booth. What do you advise?' },
            options: [
              { say: { es: 'Entrada solo para turistas, gratis para los vecinos.', en: 'Charge only tourists, free for residents.' }, then: { es: 'Muchos firman, pero alguien pregunta cómo se distingue a un turista de un madrileño.', en: 'Many sign, but someone asks how you tell a tourist from a madrileño.' } },
              { say: { es: 'Parque gratis, pero con donaciones voluntarias.', en: 'A free park, but with voluntary donations.' }, then: { es: 'La idea gusta mucho, pero los expertos dicen que no alcanza ni para un diez por ciento.', en: 'People like the idea, but experts say it won’t cover even ten per cent.' } },
              { say: { es: 'No firmar nada y explicar las dos posturas.', en: 'Sign nothing and explain both positions.' }, then: { es: 'La caseta de Lucía se convierte en un pequeño foro de debate cada domingo.', en: 'Lucía’s booth becomes a small debate forum every Sunday.' } },
            ],
          },
          twist: { es: 'Esa misma tarde, una tormenta tira tres árboles en el paseo principal. Nadie resulta herido, pero el debate cambia de tono.', en: 'That same afternoon, a storm brings down three trees on the main avenue. Nobody is hurt, but the debate changes tone.' },
          questions: [
            { q: { es: '¿Los parques deberían ser siempre gratis?', en: 'Should parks always be free?' }, help: { es: 'Sí, porque… / No necesariamente, ya que…', en: 'Yes, because… / Not necessarily, since…' }, follow: [{ es: '¿Quién debería pagarlos?', en: 'Who should pay for them?' }, { es: '¿Y los museos?', en: 'And museums?' }] },
            { q: { es: '¿Cobrarías más a los turistas que a los vecinos?', en: 'Would you charge tourists more than residents?' }, help: { es: 'Me parece razonable / injusto porque…', en: 'I think it is reasonable / unfair because…' }, follow: [{ es: '¿Has pagado más por ser turista?', en: 'Have you paid more as a tourist?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
            { q: { es: '¿Has firmado alguna vez una petición?', en: 'Have you ever signed a petition?' }, help: { es: 'Sí, firmé una para… / No, nunca.', en: 'Yes, I signed one for… / No, never.' }, follow: [{ es: '¿Sirvió de algo?', en: 'Did it make any difference?' }, { es: '¿Por qué la firmaste?', en: 'Why did you sign it?' }] },
            { q: { es: '¿Qué espacio público de tu ciudad necesita más cuidado?', en: 'Which public space in your city needs more care?' }, help: { es: 'Creo que… porque…', en: 'I think… because…' }, follow: [{ es: '¿Qué harías tú?', en: 'What would you do?' }, { es: '¿Quién es responsable?', en: 'Who is responsible?' }] },
          ],
          words: [{ es: 'el ayuntamiento', en: 'the city council' }, { es: 'el mantenimiento', en: 'the upkeep' }, { es: 'recoger firmas', en: 'to collect signatures' }, { es: 'agotado', en: 'worn out' }, { es: 'la postura', en: 'the position / stance' }],
        },
      },
    },
    // ------------------------------------------------------------ a tapas bar in La Latina
    {
      id: 'tapas',
      name: { es: 'El bar de tapas', en: 'The tapas bar' },
      who: { name: 'Manolo', role: { es: 'camarero', en: 'waiter' } },
      levels: {
        A0: {
          scene: { es: 'Es un bar pequeño y lleno de gente. Hay jamón en la pared. Manolo es el camarero. Habla muy alto.', en: 'It is a small bar full of people. There are hams on the wall. Manolo is the waiter. He talks very loudly.' },
          opener: { es: '¡Hola! Soy Manolo. ¿Qué te pongo?', en: 'Hi! I am Manolo. What can I get you?' },
          decide: {
            ask: { es: 'Hay tres tapas. ¿Cuál pides?', en: 'There are three tapas. Which do you order?' },
            options: [
              { say: { es: 'Una tortilla de patatas.', en: 'A potato omelette.' }, then: { es: 'Manolo dice: «¡La mejor de Madrid! Con cebolla».', en: 'Manolo says: “The best in Madrid! With onion.”' } },
              { say: { es: 'Unas patatas bravas.', en: 'Some patatas bravas.' }, then: { es: 'Manolo dice: «Pican un poco. ¿Quieres agua?»', en: 'Manolo says: “They are a bit spicy. Do you want water?”' } },
              { say: { es: 'Un poco de jamón.', en: 'A little ham.' }, then: { es: 'Manolo dice: «Es jamón ibérico. ¡Muy rico!»', en: 'Manolo says: “It is Iberian ham. Very tasty!”' } },
            ],
          },
          twist: { es: 'Manolo trae una tapa que no pediste. «Es gratis, con la bebida». ¿Qué dices?', en: 'Manolo brings a tapa you didn’t order. “It is free, with the drink.” What do you say?' },
          questions: [
            { q: { es: '¿Te gustan las patatas?', en: 'Do you like potatoes?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Fritas o cocidas?', en: 'Fried or boiled?' }, { es: '¿Con qué?', en: 'With what?' }] },
            { q: { es: '¿Comes carne?', en: 'Do you eat meat?' }, help: { es: 'Sí, como carne. / No, soy vegetariano.', en: 'Yes, I eat meat. / No, I am vegetarian.' }, follow: [{ es: '¿Qué carne te gusta?', en: 'What meat do you like?' }, { es: '¿Y el pescado?', en: 'And fish?' }] },
            { q: { es: '¿Vas a bares con tus amigos?', en: 'Do you go to bars with your friends?' }, help: { es: 'Sí, los viernes. / No, casi nunca.', en: 'Yes, on Fridays. / No, hardly ever.' }, follow: [{ es: '¿Qué tomas?', en: 'What do you drink?' }, { es: '¿Qué comes?', en: 'What do you eat?' }] },
            { q: { es: '¿Te gusta la comida picante?', en: 'Do you like spicy food?' }, help: { es: 'Sí, me encanta. / No, nada.', en: 'Yes, I love it. / No, not at all.' }, follow: [{ es: '¿Qué comida picante comes?', en: 'What spicy food do you eat?' }, { es: '¿Cuánto picante?', en: 'How spicy?' }] },
          ],
          words: [{ es: 'la tapa', en: 'a small dish (tapa)' }, { es: 'la tortilla de patatas', en: 'potato omelette' }, { es: 'el jamón', en: 'ham' }, { es: '¿Qué te pongo?', en: 'What can I get you? (Spain)' }, { es: 'picar', en: 'to be spicy' }],
        },
        A1: {
          scene: { es: 'En La Latina, los domingos al mediodía la gente va de bar en bar: una caña y una tapa en cada uno. Manolo trabaja en un bar que abrió su abuelo en 1952. Las servilletas están en el suelo: es una tradición.', en: 'In La Latina, on Sunday at midday, people go from bar to bar: a small beer and a tapa in each one. Manolo works in a bar his grandfather opened in 1952. The napkins are on the floor: it is a tradition.' },
          opener: { es: '¡Bienvenido! Aquí la regla es fácil: pides en la barra, comes de pie y tiras la servilleta al suelo. Cuantas más servilletas, mejor es el bar. ¿Es tu primera vez de tapas?', en: 'Welcome! The rule here is easy: you order at the bar, eat standing up and throw your napkin on the floor. The more napkins, the better the bar. Is this your first time going for tapas?' },
          decide: {
            ask: { es: 'Vas de tapas con amigos. ¿Cómo lo hacen?', en: 'You go for tapas with friends. How do you do it?' },
            options: [
              { say: { es: 'Una tapa en cada bar, cinco bares.', en: 'One tapa in each bar, five bars.' }, then: { es: 'En el tercer bar ya estás lleno. En el quinto solo pides agua.', en: 'By the third bar you are already full. In the fifth you only order water.' } },
              { say: { es: 'Nos quedamos aquí y pedimos raciones.', en: 'We stay here and order full portions.' }, then: { es: 'Manolo trae croquetas, calamares y pimientos. Comen como reyes.', en: 'Manolo brings croquettes, squid and peppers. You eat like kings.' } },
              { say: { es: 'Pedimos lo que Manolo recomienda.', en: 'We order what Manolo recommends.' }, then: { es: 'Manolo trae oreja a la plancha. Nadie sabe qué es hasta que termina.', en: 'Manolo brings grilled pig’s ear. Nobody knows what it is until they finish.' } },
            ],
          },
          twist: { es: 'Al pagar, cada amigo quiere pagar todo. Discuten en la barra. ¿Qué propones?', en: 'When it is time to pay, every friend wants to pay for everything. They argue at the bar. What do you suggest?' },
          questions: [
            { q: { es: '¿Qué haces los domingos al mediodía?', en: 'What do you do on Sundays at midday?' }, help: { es: 'Como con mi familia / Salgo con amigos…', en: 'I eat with my family / I go out with friends…' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Qué comen?', en: 'What do you eat?' }] },
            { q: { es: '¿Prefieres comer de pie o sentado?', en: 'Do you prefer eating standing up or sitting down?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Y en una fiesta?', en: 'And at a party?' }, { es: '¿Y en casa?', en: 'And at home?' }] },
            { q: { es: '¿Quién paga cuando sales con amigos?', en: 'Who pays when you go out with friends?' }, help: { es: 'Pagamos a medias / Cada uno paga lo suyo / Invito yo…', en: 'We split it / Everyone pays their own / I treat…' }, follow: [{ es: '¿Es igual en tu país?', en: 'Is it the same in your country?' }, { es: '¿Qué prefieres?', en: 'What do you prefer?' }] },
            { q: { es: '¿Has comido algo raro sin saber qué era?', en: 'Have you eaten something strange without knowing what it was?' }, help: { es: 'Sí, una vez probé… / No, siempre pregunto.', en: 'Yes, once I tried… / No, I always ask.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Lo comerías otra vez?', en: 'Would you eat it again?' }] },
          ],
          words: [{ es: 'la caña', en: 'a small draught beer (Spain)' }, { es: 'la barra', en: 'the bar counter' }, { es: 'la servilleta', en: 'the napkin' }, { es: 'la ración', en: 'a full portion' }, { es: 'pagar a medias', en: 'to split the bill' }],
        },
        A2: {
          scene: { es: 'Un sábado por la noche, el bar está lleno. Un cliente extranjero se queja en voz alta: dice que le han cobrado una tapa que creía gratis y que la cuenta está mal. Manolo está solo en la barra y la cocina va con retraso.', en: 'On a Saturday night the bar is packed. A foreign customer complains loudly: he says he has been charged for a tapa he thought was free and that the bill is wrong. Manolo is alone at the bar and the kitchen is running late.' },
          opener: { es: 'En Madrid, en algunos bares, la tapa viene gratis con la bebida; en otros, no. El señor ha visto un vídeo en internet y cree que en toda España es igual. Y ahora me grita delante de todos. Yo llevo doce horas de pie. ¿Tú cómo reaccionarías?', en: 'In Madrid, in some bars, the tapa comes free with the drink; in others, it doesn’t. The man has seen a video online and thinks it is the same all over Spain. And now he is shouting at me in front of everyone. I’ve been on my feet for twelve hours. How would you react?' },
          decide: {
            ask: { es: 'El cliente pide hablar con el jefe. El jefe no está. ¿Qué hace Manolo?', en: 'The customer asks to speak to the boss. The boss isn’t there. What does Manolo do?' },
            options: [
              { say: { es: 'Le quita la tapa de la cuenta para terminar rápido.', en: 'He removes the tapa from the bill to end it quickly.' }, then: { es: 'El cliente se calla y se va. Manolo pierde tres euros, pero gana tranquilidad.', en: 'The customer goes quiet and leaves. Manolo loses three euros, but gains peace.' } },
              { say: { es: 'Le explica con calma cómo funcionan las tapas aquí.', en: 'He calmly explains how tapas work here.' }, then: { es: 'El cliente entiende, se disculpa y deja propina. Al final hasta pide otra tapa.', en: 'The customer understands, apologises and leaves a tip. In the end he even orders another tapa.' } },
              { say: { es: 'Le pide al cliente que pague o se vaya.', en: 'He asks the customer to pay or leave.' }, then: { es: 'El cliente paga, pero escribe una mala reseña en internet esa misma noche.', en: 'The customer pays, but writes a bad online review that same night.' } },
            ],
          },
          twist: { es: 'Al día siguiente, el mismo cliente vuelve con su familia. Viene a pedir perdón y a probar la tortilla de la que todos hablan.', en: 'The next day, the same customer comes back with his family. He comes to apologise and to try the omelette everyone talks about.' },
          questions: [
            { q: { es: '¿Te has quejado alguna vez en un restaurante?', en: 'Have you ever complained in a restaurant?' }, help: { es: 'Sí, una vez porque… / No, nunca me quejo.', en: 'Yes, once because… / No, I never complain.' }, follow: [{ es: '¿Cómo reaccionaron?', en: 'How did they react?' }, { es: '¿Volviste?', en: 'Did you go back?' }] },
            { q: { es: '¿Lees las reseñas antes de ir a un sitio?', en: 'Do you read reviews before going somewhere?' }, help: { es: 'Sí, siempre. / No, prefiero descubrir.', en: 'Yes, always. / No, I prefer to discover.' }, follow: [{ es: '¿Escribes reseñas?', en: 'Do you write reviews?' }, { es: '¿Confías en ellas?', en: 'Do you trust them?' }] },
            { q: { es: '¿Has trabajado de cara al público?', en: 'Have you worked with the public?' }, help: { es: 'Sí, trabajé en… / No, nunca.', en: 'Yes, I worked in… / No, never.' }, follow: [{ es: '¿Cuál fue el peor cliente?', en: 'Who was the worst customer?' }, { es: '¿Y el mejor?', en: 'And the best?' }] },
            { q: { es: '¿Qué costumbre de tu país sorprende a los extranjeros?', en: 'Which custom from your country surprises foreigners?' }, help: { es: 'Les sorprende que…', en: 'They are surprised that…' }, follow: [{ es: '¿Y a ti qué te sorprendió fuera?', en: 'And what surprised you abroad?' }, { es: '¿Por qué crees que es así?', en: 'Why do you think it is like that?' }] },
          ],
          words: [{ es: 'quejarse', en: 'to complain' }, { es: 'la cuenta', en: 'the bill' }, { es: 'cobrar', en: 'to charge' }, { es: 'la reseña', en: 'the review' }, { es: 'disculparse', en: 'to apologise' }],
        },
        B1: {
          scene: { es: 'La ley ha cambiado: los bares del barrio tienen que cerrar las terrazas a medianoche porque los vecinos no pueden dormir. Manolo gana un tercio de su dinero en la terraza de verano. Los vecinos, muchos de ellos mayores, han presentado quejas durante años.', en: 'The law has changed: the neighbourhood bars must close their terraces at midnight because residents can’t sleep. Manolo makes a third of his money on the summer terrace. The residents, many of them elderly, have complained for years.' },
          opener: { es: 'Entiendo a mis vecinos, de verdad. Mi madre vive encima del bar y lleva veinte años durmiendo con tapones. Pero si cierro la terraza a las doce en agosto, cuando la gente sale a cenar a las diez y media, tengo que despedir a dos camareros. ¿Cómo se equilibra el derecho a descansar con el derecho a ganarse la vida?', en: 'I understand my neighbours, I really do. My mother lives above the bar and has slept with earplugs for twenty years. But if I close the terrace at twelve in August, when people go out to dinner at half past ten, I have to let two waiters go. How do you balance the right to rest with the right to earn a living?' },
          decide: {
            ask: { es: 'Hay una reunión entre bares y vecinos. ¿Qué propuesta llevas?', en: 'There is a meeting between bars and residents. What proposal do you bring?' },
            options: [
              { say: { es: 'Terrazas hasta la una, pero con normas de ruido muy estrictas.', en: 'Terraces until one, but with very strict noise rules.' }, then: { es: 'Se acepta como prueba. Ponen medidores de ruido en la plaza.', en: 'It is accepted as a trial. They put noise meters in the square.' } },
              { say: { es: 'Ayudas públicas para insonorizar las casas de los vecinos.', en: 'Public grants to soundproof residents’ homes.' }, then: { es: 'Gusta a todos, pero el ayuntamiento dice que no hay presupuesto este año.', en: 'Everyone likes it, but the council says there is no budget this year.' } },
              { say: { es: 'Cumplir la ley y buscar clientes de día.', en: 'Follow the law and look for daytime customers.' }, then: { es: 'Manolo empieza a servir desayunos. Su madre por fin duerme, y él descubre que le gusta madrugar.', en: 'Manolo starts serving breakfasts. His mother finally sleeps, and he discovers he likes getting up early.' } },
            ],
          },
          twist: { es: 'En la reunión, la vecina que más se ha quejado resulta ser la madrina de Manolo. Le pide que hablen en privado.', en: 'At the meeting, the resident who has complained most turns out to be Manolo’s godmother. She asks to talk in private.' },
          questions: [
            { q: { es: '¿El ruido de la calle te ha molestado alguna vez?', en: 'Has street noise ever bothered you?' }, help: { es: 'Sí, cuando vivía en… / No, duermo muy bien.', en: 'Yes, when I lived in… / No, I sleep very well.' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Te quejaste?', en: 'Did you complain?' }] },
            { q: { es: '¿Qué derecho es más importante: el descanso o el trabajo?', en: 'Which right is more important: rest or work?' }, help: { es: 'Creo que… porque… / Depende de…', en: 'I think… because… / It depends on…' }, follow: [{ es: '¿Hay una solución intermedia?', en: 'Is there a middle-ground solution?' }, { es: '¿Quién debería decidir?', en: 'Who should decide?' }] },
            { q: { es: '¿Los horarios de tu país son muy distintos a los de España?', en: 'Are the schedules in your country very different from Spain’s?' }, help: { es: 'Sí, allí cenamos a las… / Son parecidos.', en: 'Yes, there we have dinner at… / They are similar.' }, follow: [{ es: '¿Qué horario prefieres?', en: 'Which schedule do you prefer?' }, { es: '¿Podrías adaptarte?', en: 'Could you adapt?' }] },
            { q: { es: '¿Alguna vez has tenido que elegir entre tu familia y tu negocio o trabajo?', en: 'Have you ever had to choose between your family and your business or job?' }, help: { es: 'Sí, cuando… / No, pero imagino que…', en: 'Yes, when… / No, but I imagine that…' }, follow: [{ es: '¿Qué elegiste?', en: 'What did you choose?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
          ],
          words: [{ es: 'la terraza', en: 'the outdoor terrace' }, { es: 'los tapones', en: 'earplugs' }, { es: 'ganarse la vida', en: 'to earn a living' }, { es: 'insonorizar', en: 'to soundproof' }, { es: 'madrugar', en: 'to get up early' }],
        },
      },
    },
    // ------------------------------------------------------------ the Sunday Rastro
    {
      id: 'rastro',
      name: { es: 'El Rastro', en: 'The Rastro flea market' },
      who: { name: 'Doña Carmen', role: { es: 'vendedora de discos', en: 'record seller' } },
      levels: {
        A0: {
          scene: { es: 'Es domingo. Hay un mercado en la calle con muchas cosas viejas. Doña Carmen vende discos y radios.', en: 'It is Sunday. There is a street market with many old things. Doña Carmen sells records and radios.' },
          opener: { es: 'Hola, guapo. Soy Carmen. ¿Buscas algo?', en: 'Hi, dear. I am Carmen. Are you looking for something?' },
          decide: {
            ask: { es: 'Carmen tiene tres cosas. ¿Qué miras?', en: 'Carmen has three things. What do you look at?' },
            options: [
              { say: { es: 'Un disco de música española.', en: 'A record of Spanish music.' }, then: { es: 'Carmen dice: «Es flamenco. Cuesta cinco euros».', en: 'Carmen says: “It is flamenco. It costs five euros.”' } },
              { say: { es: 'Una radio muy vieja.', en: 'A very old radio.' }, then: { es: 'Carmen dice: «Es de mi padre. ¡Funciona!»', en: 'Carmen says: “It was my father’s. It works!”' } },
              { say: { es: 'Una foto antigua de Madrid.', en: 'An old photo of Madrid.' }, then: { es: 'Carmen dice: «Es la Gran Vía en 1960».', en: 'Carmen says: “It is the Gran Vía in 1960.”' } },
            ],
          },
          twist: { es: 'Carmen dice: «Diez euros». Tú tienes solo ocho. ¿Qué dices?', en: 'Carmen says: “Ten euros.” You only have eight. What do you say?' },
          questions: [
            { q: { es: '¿Te gustan las cosas viejas?', en: 'Do you like old things?' }, help: { es: 'Sí, mucho. / No, prefiero las nuevas.', en: 'Yes, a lot. / No, I prefer new ones.' }, follow: [{ es: '¿Tienes algo viejo?', en: 'Do you have something old?' }, { es: '¿De quién era?', en: 'Whose was it?' }] },
            { q: { es: '¿Qué música escuchas?', en: 'What music do you listen to?' }, help: { es: 'Escucho pop / rock / salsa…', en: 'I listen to pop / rock / salsa…' }, follow: [{ es: '¿Dónde la escuchas?', en: 'Where do you listen to it?' }, { es: '¿Tienes discos?', en: 'Do you have records?' }] },
            { q: { es: '¿Vas a mercados?', en: 'Do you go to markets?' }, help: { es: 'Sí, los domingos. / No mucho.', en: 'Yes, on Sundays. / Not much.' }, follow: [{ es: '¿Qué compras?', en: 'What do you buy?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Cuánto dinero llevas hoy?', en: 'How much money do you have on you today?' }, help: { es: 'Llevo… euros / nada.', en: 'I have… euros / nothing.' }, follow: [{ es: '¿Pagas con tarjeta?', en: 'Do you pay by card?' }, { es: '¿Y con el móvil?', en: 'And with your phone?' }] },
          ],
          words: [{ es: 'el disco', en: 'the record' }, { es: 'la radio', en: 'the radio' }, { es: 'viejo', en: 'old' }, { es: 'el euro', en: 'the euro' }, { es: 'guapo', en: 'dear (friendly, Spain)' }],
        },
        A1: {
          scene: { es: 'El Rastro es un mercado al aire libre que se monta todos los domingos desde hace siglos. Hay ropa, muebles, libros, discos y cosas imposibles. Doña Carmen tiene su puesto en la misma esquina desde 1978.', en: 'The Rastro is an open-air market set up every Sunday for centuries. There are clothes, furniture, books, records and impossible things. Doña Carmen has had her stall on the same corner since 1978.' },
          opener: { es: 'Aquí hay que regatear, ¿eh? Si pagas lo primero que te digo, me pongo triste. Es un juego: yo digo un precio alto, tú uno bajo y al final nos encontramos en el medio. ¿Sabes regatear?', en: 'You have to haggle here, you know? If you pay the first price I say, I get sad. It is a game: I say a high price, you say a low one, and in the end we meet in the middle. Do you know how to haggle?' },
          decide: {
            ask: { es: 'Quieres un tocadiscos antiguo. Carmen pide sesenta euros. ¿Qué dices?', en: 'You want an old record player. Carmen asks for sixty euros. What do you say?' },
            options: [
              { say: { es: '«Te doy treinta».', en: '“I’ll give you thirty.”' }, then: { es: 'Carmen se ríe: «¡Qué valiente! Cuarenta y cinco y te regalo un disco».', en: 'Carmen laughs: “How brave! Forty-five and I’ll throw in a record.”' } },
              { say: { es: '«Vale, sesenta».', en: '“OK, sixty.”' }, then: { es: 'Carmen pone cara triste: «¡Así no se juega!». Te devuelve diez euros.', en: 'Carmen makes a sad face: “That’s not how you play!” She gives you back ten euros.' } },
              { say: { es: '«¿Funciona? Quiero probarlo».', en: '“Does it work? I want to try it.”' }, then: { es: 'Carmen pone un disco de los años setenta. Toda la calle se para a escuchar.', en: 'Carmen plays a record from the seventies. The whole street stops to listen.' } },
            ],
          },
          twist: { es: 'De repente hay muchísima gente y no encuentras tu cartera. Carmen te dice: «Tranquilo, mira bien». ¿Qué haces?', en: 'Suddenly there are loads of people and you can’t find your wallet. Carmen says: “Calm down, look carefully.” What do you do?' },
          questions: [
            { q: { es: '¿En tu país se regatea?', en: 'Do people haggle in your country?' }, help: { es: 'Sí, en los mercados. / No, los precios son fijos.', en: 'Yes, in markets. / No, prices are fixed.' }, follow: [{ es: '¿Te gusta regatear?', en: 'Do you like haggling?' }, { es: '¿Eres bueno?', en: 'Are you good at it?' }] },
            { q: { es: '¿Compras cosas de segunda mano?', en: 'Do you buy second-hand things?' }, help: { es: 'Sí, ropa / libros… / No, nunca.', en: 'Yes, clothes / books… / No, never.' }, follow: [{ es: '¿Dónde?', en: 'Where?' }, { es: '¿Qué fue lo mejor que compraste?', en: 'What was the best thing you bought?' }] },
            { q: { es: '¿Qué música escuchaban tus padres?', en: 'What music did your parents listen to?' }, help: { es: 'Mis padres escuchaban…', en: 'My parents listened to…' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿La escuchas ahora?', en: 'Do you listen to it now?' }] },
            { q: { es: '¿Has perdido la cartera alguna vez?', en: 'Have you ever lost your wallet?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿La encontraste?', en: 'Did you find it?' }, { es: '¿Qué llevabas dentro?', en: 'What did you have in it?' }] },
          ],
          words: [{ es: 'regatear', en: 'to haggle' }, { es: 'el puesto', en: 'the stall' }, { es: 'el tocadiscos', en: 'the record player' }, { es: 'de segunda mano', en: 'second-hand' }, { es: 'la cartera', en: 'the wallet' }],
        },
        A2: {
          scene: { es: 'Un joven músico le vende a Carmen una caja de discos viejos de su abuelo, que acaba de morir. Necesita dinero para el alquiler. Carmen revisa la caja y encuentra un disco muy raro que vale mucho más de lo que el chico pide.', en: 'A young musician sells Carmen a box of old records that belonged to his grandfather, who has just died. He needs money for the rent. Carmen goes through the box and finds a very rare record worth much more than the boy is asking.' },
          opener: { es: 'El chico me pide cien euros por toda la caja. Solo este disco, un flamenco de 1958 con la firma del cantaor, vale por lo menos mil. Él no lo sabe. En cuarenta años aquí he visto de todo, pero esto me ha quitado el sueño. ¿Tú qué harías en mi lugar?', en: 'The boy is asking a hundred euros for the whole box. This record alone, a 1958 flamenco album signed by the singer, is worth at least a thousand. He doesn’t know. In forty years here I have seen everything, but this has kept me awake. What would you do in my place?' },
          decide: {
            ask: { es: 'Carmen tiene que decidir antes de que el chico vuelva. ¿Qué le aconsejas?', en: 'Carmen has to decide before the boy comes back. What do you advise?' },
            options: [
              { say: { es: 'Que le diga la verdad y le pague lo justo.', en: 'Tell him the truth and pay him a fair price.' }, then: { es: 'El chico no se lo cree. Paga el alquiler de tres meses y le compone una canción a Carmen.', en: 'The boy can’t believe it. He pays three months’ rent and writes Carmen a song.' } },
              { say: { es: 'Que le devuelva ese disco: es un recuerdo de su abuelo.', en: 'Give that record back to him: it is a keepsake of his grandfather.' }, then: { es: 'El chico se emociona. Decide no venderlo nunca y lo cuelga en su casa.', en: 'The boy is moved. He decides never to sell it and hangs it up at home.' } },
              { say: { es: 'Que pague los cien euros: es un negocio.', en: 'Pay the hundred euros: it is business.' }, then: { es: 'Carmen paga, pero no duerme en una semana. Al final busca al chico.', en: 'Carmen pays, but doesn’t sleep for a week. In the end she looks for the boy.' } },
            ],
          },
          twist: { es: 'Dentro de la funda del disco hay una carta: el abuelo del chico y el padre de Carmen tocaban juntos en un bar del barrio.', en: 'Inside the record sleeve there is a letter: the boy’s grandfather and Carmen’s father used to play together in a local bar.' },
          questions: [
            { q: { es: '¿Has vendido algo de valor?', en: 'Have you ever sold something valuable?' }, help: { es: 'Sí, una vez vendimos… / No, nunca.', en: 'Yes, once we sold… / No, never.' }, follow: [{ es: '¿Por qué lo vendiste?', en: 'Why did you sell it?' }, { es: '¿Te arrepientes?', en: 'Do you regret it?' }] },
            { q: { es: '¿Guardas objetos de tus abuelos?', en: 'Do you keep objects from your grandparents?' }, help: { es: 'Sí, tengo… de mi abuela / abuelo.', en: 'Yes, I have… from my grandmother / grandfather.' }, follow: [{ es: '¿Qué historia tiene?', en: 'What is its story?' }, { es: '¿Lo usas?', en: 'Do you use it?' }] },
            { q: { es: '¿Alguna vez alguien te ha devuelto algo que perdiste?', en: 'Has anyone ever returned something you lost?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Cómo te sentiste?', en: 'How did you feel?' }, { es: '¿Le diste algo?', en: 'Did you give them something?' }] },
            { q: { es: '¿Qué es más importante en un negocio: ganar o ser honesto?', en: 'What is more important in business: profit or honesty?' }, help: { es: 'Para mí… porque…', en: 'For me… because…' }, follow: [{ es: '¿Conoces un ejemplo?', en: 'Do you know an example?' }, { es: '¿Se pueden tener las dos cosas?', en: 'Can you have both?' }] },
          ],
          words: [{ es: 'el alquiler', en: 'the rent' }, { es: 'la firma', en: 'the signature' }, { es: 'el cantaor', en: 'the flamenco singer' }, { es: 'la funda', en: 'the sleeve / cover' }, { es: 'quitar el sueño', en: 'to keep someone awake (worrying)' }],
        },
        B1: {
          scene: { es: 'Las grandes plataformas de venta por internet han cambiado el Rastro: muchos compradores ahora miran el precio en el móvil antes de regatear, y algunos vendedores jóvenes solo venden en línea. El ayuntamiento propone reducir el mercado a la mitad de calles para facilitar el tráfico.', en: 'Big online sales platforms have changed the Rastro: many buyers now check the price on their phone before haggling, and some young sellers only sell online. The city council proposes shrinking the market to half the streets to ease traffic.' },
          opener: { es: 'Mi nieta me dice que venda los discos por internet, que ganaría el triple sin pasar frío. Seguramente tiene razón. Pero el Rastro no es solo comprar y vender: es la conversación, el regateo, el vecino que viene a contarte su semana. Si lo reducen, dentro de diez años será un museo. ¿Lo que no da dinero tiene derecho a sobrevivir?', en: 'My granddaughter tells me to sell the records online, that I’d make three times as much without getting cold. She is probably right. But the Rastro isn’t just buying and selling: it is the conversation, the haggling, the neighbour who comes to tell you about his week. If they shrink it, in ten years it will be a museum. Does something that doesn’t make money have the right to survive?' },
          decide: {
            ask: { es: 'Los vendedores organizan una protesta. Carmen duda. ¿Qué le recomiendas?', en: 'The sellers organise a protest. Carmen hesitates. What do you recommend?' },
            options: [
              { say: { es: 'Que vaya a la protesta y hable como la vendedora más antigua.', en: 'Go to the protest and speak as the oldest seller.' }, then: { es: 'Su discurso sale en el telediario. El ayuntamiento acepta negociar.', en: 'Her speech is on the evening news. The council agrees to negotiate.' } },
              { say: { es: 'Que pruebe a vender también en línea con su nieta.', en: 'Try selling online too, with her granddaughter.' }, then: { es: 'Venden el triple, y muchos compradores en línea luego vienen al puesto a conocerla.', en: 'They sell three times as much, and many online buyers then come to the stall to meet her.' } },
              { say: { es: 'Que proponga un Rastro más pequeño pero con actividades culturales.', en: 'Propose a smaller Rastro with cultural activities.' }, then: { es: 'La idea convence a algunos vecinos, pero otros vendedores la acusan de rendirse.', en: 'The idea wins over some residents, but other sellers accuse her of giving up.' } },
            ],
          },
          twist: { es: 'La nieta de Carmen sube un vídeo de su abuela regateando con un turista. Se hace viral y el domingo siguiente hay una fila de jóvenes en su puesto.', en: 'Carmen’s granddaughter uploads a video of her grandmother haggling with a tourist. It goes viral and the next Sunday there is a queue of young people at her stall.' },
          questions: [
            { q: { es: '¿Prefieres comprar en internet o en persona?', en: 'Do you prefer buying online or in person?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Qué compras siempre en persona?', en: 'What do you always buy in person?' }, { es: '¿Y en internet?', en: 'And online?' }] },
            { q: { es: '¿Lo que no da dinero tiene derecho a sobrevivir?', en: 'Does something that doesn’t make money have the right to survive?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Quién debería protegerlo?', en: 'Who should protect it?' }, { es: '¿Con qué dinero?', en: 'With what money?' }] },
            { q: { es: '¿Qué tradición de tu ciudad ha cambiado por la tecnología?', en: 'Which tradition in your city has changed because of technology?' }, help: { es: 'Antes… y ahora…', en: 'Before… and now…' }, follow: [{ es: '¿Es mejor o peor?', en: 'Is it better or worse?' }, { es: '¿La echas de menos?', en: 'Do you miss it?' }] },
            { q: { es: '¿Qué te han enseñado las personas mayores de tu familia sobre el trabajo?', en: 'What have the older people in your family taught you about work?' }, help: { es: 'Me enseñaron que…', en: 'They taught me that…' }, follow: [{ es: '¿Estás de acuerdo?', en: 'Do you agree?' }, { es: '¿Qué les enseñas tú?', en: 'What do you teach them?' }] },
          ],
          words: [{ es: 'la plataforma', en: 'the platform' }, { es: 'el regateo', en: 'haggling' }, { es: 'el telediario', en: 'the TV news (Spain)' }, { es: 'rendirse', en: 'to give up' }, { es: 'sobrevivir', en: 'to survive' }],
        },
      },
    },
  ],
};
