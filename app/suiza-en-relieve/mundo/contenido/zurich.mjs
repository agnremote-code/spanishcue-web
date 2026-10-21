// Zúrich · a chocolate workshop, the punctual train, swimming in the Limmat, recycling day
// and a Sunday vote. Five places, four levels each (A0, A1, A2, B1). Every level is
// written on its own.
export default {
  id: 'zurich',
  spots: [
    // ------------------------------------------------------------ the chocolate workshop
    {
      id: 'chocolate',
      name: { es: 'El taller de chocolate', en: 'The chocolate workshop' },
      who: { name: 'Anna', role: { es: 'chocolatera', en: 'chocolate maker' } },
      levels: {
        A0: {
          scene: { es: 'Es una tienda pequeña y huele a chocolate. Hay chocolate blanco, negro y con leche. Anna es chocolatera. Tiene un delantal marrón y un gorro blanco.', en: 'It is a small shop and it smells of chocolate. There is white, dark and milk chocolate. Anna is a chocolate maker. She has a brown apron and a white hat.' },
          opener: { es: '¡Hola! Soy Anna. Aquí hacemos chocolate. ¿Quieres probar?', en: 'Hello! I am Anna. We make chocolate here. Do you want to try some?' },
          decide: {
            ask: { es: '¿Qué chocolate pruebas?', en: 'Which chocolate do you try?' },
            options: [
              { say: { es: 'El chocolate negro.', en: 'The dark chocolate.' }, then: { es: 'Es fuerte y un poco amargo. Anna dice: «Es mi favorito».', en: 'It is strong and a little bitter. Anna says: “It is my favourite.”' } },
              { say: { es: 'El chocolate con leche.', en: 'The milk chocolate.' }, then: { es: 'Es dulce y suave. ¡Mmm, qué rico!', en: 'It is sweet and smooth. Mmm, delicious!' } },
              { say: { es: 'El chocolate blanco.', en: 'The white chocolate.' }, then: { es: 'Anna ríe: «¡Muy dulce! Toma agua».', en: 'Anna laughs: “Very sweet! Have some water.”' } },
            ],
          },
          twist: { es: 'Anna te da un molde con forma de vaca. ¿Haces tu chocolate?', en: 'Anna gives you a cow-shaped mould. Do you make your own chocolate?' },
          questions: [
            { q: { es: '¿Te gusta el chocolate?', en: 'Do you like chocolate?' }, help: { es: 'Sí, mucho. / No mucho.', en: 'Yes, a lot. / Not much.' }, follow: [{ es: '¿Cuál prefieres?', en: 'Which do you prefer?' }, { es: '¿Cuándo comes chocolate?', en: 'When do you eat chocolate?' }] },
            { q: { es: '¿Comes dulces todos los días?', en: 'Do you eat sweets every day?' }, help: { es: 'Sí. / No, a veces.', en: 'Yes. / No, sometimes.' }, follow: [{ es: '¿Qué dulce te gusta?', en: 'What sweet do you like?' }, { es: '¿Por la mañana o por la noche?', en: 'In the morning or at night?' }] },
            { q: { es: '¿Cocinas en casa?', en: 'Do you cook at home?' }, help: { es: 'Sí, cocino. / No, no cocino.', en: 'Yes, I cook. / No, I don’t cook.' }, follow: [{ es: '¿Qué cocinas?', en: 'What do you cook?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Qué regalo te gusta?', en: 'What gift do you like?' }, help: { es: 'Me gusta el chocolate / las flores…', en: 'I like chocolate / flowers…' }, follow: [{ es: '¿Quién te regala?', en: 'Who gives you gifts?' }, { es: '¿Cuándo?', en: 'When?' }] },
          ],
          words: [{ es: 'el chocolate negro', en: 'dark chocolate' }, { es: 'dulce', en: 'sweet' }, { es: 'amargo', en: 'bitter' }, { es: 'probar', en: 'to try / taste' }, { es: 'el molde', en: 'the mould' }],
        },
        A1: {
          scene: { es: 'Es sábado por la mañana. Un grupo de turistas hace un taller de chocolate con Anna. Cada uno tiene un delantal y un molde. En la pared hay una foto del abuelo de Anna: abrió la tienda en 1952. Los suizos comen unos diez kilos de chocolate por persona al año.', en: 'It is Saturday morning. A group of tourists is doing a chocolate workshop with Anna. Each one has an apron and a mould. On the wall there is a photo of Anna’s grandfather: he opened the shop in 1952. The Swiss eat about ten kilos of chocolate per person a year.' },
          opener: { es: 'El secreto del chocolate suizo es la paciencia. Mi abuelo movía el chocolate durante tres días para hacerlo suave. Hoy las máquinas lo hacen, pero yo todavía hago algunas cosas a mano. Primero derretimos el chocolate, después lo enfriamos y al final lo ponemos en el molde. ¿Te gusta cocinar con las manos?', en: 'The secret of Swiss chocolate is patience. My grandfather stirred the chocolate for three days to make it smooth. Today machines do it, but I still do some things by hand. First we melt the chocolate, then we cool it, and finally we put it in the mould. Do you like cooking with your hands?' },
          decide: {
            ask: { es: '¿Qué pones en tu chocolate?', en: 'What do you put in your chocolate?' },
            options: [
              { say: { es: 'Avellanas.', en: 'Hazelnuts.' }, then: { es: 'Anna dice: «Clásico. Como el chocolate de mi abuelo».', en: 'Anna says: “Classic. Like my grandfather’s chocolate.”' } },
              { say: { es: 'Sal y pimienta.', en: 'Salt and pepper.' }, then: { es: 'Todos se ríen, pero al final está muy bueno.', en: 'Everyone laughs, but in the end it is very good.' } },
              { say: { es: 'Fresas secas.', en: 'Dried strawberries.' }, then: { es: 'Tu chocolate es rosa y rojo. ¡El más bonito del grupo!', en: 'Your chocolate is pink and red. The prettiest in the group!' } },
            ],
          },
          twist: { es: 'Un niño del grupo se come todo el chocolate antes de ponerlo en el molde. ¿Qué hace Anna?', en: 'A child in the group eats all the chocolate before putting it in the mould. What does Anna do?' },
          questions: [
            { q: { es: '¿Qué comida es famosa en tu país?', en: 'What food is famous in your country?' }, help: { es: 'En mi país es famoso/a…', en: 'In my country… is famous.' }, follow: [{ es: '¿Sabes hacerla?', en: 'Can you make it?' }, { es: '¿Cuándo la comes?', en: 'When do you eat it?' }] },
            { q: { es: '¿Tienes paciencia para cocinar?', en: 'Do you have patience for cooking?' }, help: { es: 'Sí, mucha. / No, cocino rápido.', en: 'Yes, a lot. / No, I cook fast.' }, follow: [{ es: '¿Qué plato tarda mucho?', en: 'Which dish takes a long time?' }, { es: '¿Lo haces?', en: 'Do you make it?' }] },
            { q: { es: '¿Hiciste un taller alguna vez?', en: 'Have you ever done a workshop?' }, help: { es: 'Sí, de… / No, nunca.', en: 'Yes, a… one / No, never.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Qué hiciste?', en: 'What did you make?' }] },
            { q: { es: '¿Tu familia tiene un negocio?', en: 'Does your family have a business?' }, help: { es: 'Sí, una tienda de… / No.', en: 'Yes, a… shop / No.' }, follow: [{ es: '¿Desde cuándo?', en: 'Since when?' }, { es: '¿Trabajas allí?', en: 'Do you work there?' }] },
          ],
          words: [{ es: 'derretir', en: 'to melt' }, { es: 'enfriar', en: 'to cool' }, { es: 'las avellanas', en: 'hazelnuts' }, { es: 'suave', en: 'smooth' }, { es: 'el taller', en: 'the workshop' }],
        },
        A2: {
          scene: { es: 'Una gran empresa de chocolate ofrece comprar la tienda de Anna. Quiere usar el nombre de la familia y la foto del abuelo en sus cajas, pero producir el chocolate en una fábrica grande. Le ofrecen mucho dinero y un puesto de «embajadora de la marca». Anna tiene una semana para responder.', en: 'A big chocolate company offers to buy Anna’s shop. It wants to use the family name and the grandfather’s photo on its boxes, but produce the chocolate in a big factory. They offer her a lot of money and a job as “brand ambassador”. Anna has a week to answer.' },
          opener: { es: 'Llevo veinte años aquí. Me levanto a las cinco, trabajo seis días a la semana y no recuerdo mis últimas vacaciones. Con ese dinero podría descansar, viajar, ayudar a mi hija con la universidad. Pero mi abuelo decía que el chocolate tiene alma. Si lo hacen en una fábrica con su nombre, ¿sigue siendo nuestro chocolate? ¿Tú qué harías?', en: 'I’ve been here twenty years. I get up at five, work six days a week and I can’t remember my last holiday. With that money I could rest, travel, help my daughter with university. But my grandfather used to say chocolate has a soul. If they make it in a factory under his name, is it still our chocolate? What would you do?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Anna?', en: 'What do you advise Anna?' },
            options: [
              { say: { es: 'Vender y descansar.', en: 'Sell and rest.' }, then: { es: 'Anna viaja por primera vez a Brasil y visita una plantación de cacao. Llora de emoción.', en: 'Anna travels to Brazil for the first time and visits a cocoa plantation. She cries with emotion.' } },
              { say: { es: 'Vender la marca, pero quedarse con la tienda.', en: 'Sell the brand, but keep the shop.' }, then: { es: 'La empresa acepta. Anna sigue con su tienda, pero con otro nombre: «Anna, chocolate a mano».', en: 'The company agrees. Anna keeps her shop, but with another name: “Anna, handmade chocolate”.' } },
              { say: { es: 'No vender y buscar a un joven aprendiz.', en: 'Not sell and look for a young apprentice.' }, then: { es: 'Llega Lars, de diecinueve años. Es lento, pero tiene muchas ganas de aprender.', en: 'Lars arrives, nineteen years old. He is slow, but very eager to learn.' } },
            ],
          },
          twist: { es: 'La hija de Anna dice que no quiere trabajar en la tienda nunca. Quiere ser ingeniera. ¿Cambia eso la decisión?', en: 'Anna’s daughter says she never wants to work in the shop. She wants to be an engineer. Does that change the decision?' },
          questions: [
            { q: { es: '¿Venderías el negocio de tu familia?', en: 'Would you sell your family’s business?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Por cuánto?', en: 'For how much?' }, { es: '¿Qué harías con el dinero?', en: 'What would you do with the money?' }] },
            { q: { es: '¿Prefieres productos hechos a mano o de fábrica?', en: 'Do you prefer handmade or factory-made products?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Pagas más por lo hecho a mano?', en: 'Do you pay more for handmade things?' }, { es: '¿Qué compras así?', en: 'What do you buy like that?' }] },
            { q: { es: '¿Cuándo fueron tus últimas vacaciones?', en: 'When was your last holiday?' }, help: { es: 'Fueron en… / Hace mucho.', en: 'It was in… / A long time ago.' }, follow: [{ es: '¿Adónde fuiste?', en: 'Where did you go?' }, { es: '¿Descansaste?', en: 'Did you rest?' }] },
            { q: { es: '¿Los hijos deben continuar el trabajo de los padres?', en: 'Should children continue their parents’ work?' }, help: { es: 'No, cada uno… / Sí, si quieren…', en: 'No, everyone… / Yes, if they want…' }, follow: [{ es: '¿Tú hiciste lo mismo que tus padres?', en: 'Did you do the same as your parents?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'la marca', en: 'the brand' }, { es: 'la fábrica', en: 'the factory' }, { es: 'el alma', en: 'the soul' }, { es: 'el aprendiz', en: 'the apprentice' }, { es: 'el cacao', en: 'cocoa' }],
        },
        B1: {
          scene: { es: 'Suiza es famosa por su chocolate, pero en Suiza no crece ni un solo árbol de cacao. Todo viene de África occidental y de América Latina, donde muchos agricultores ganan menos de dos dólares al día. Un periodista publica que una parte del cacao que compra Anna viene de plantaciones donde trabajan niños. Anna no lo sabía.', en: 'Switzerland is famous for its chocolate, but not a single cocoa tree grows in Switzerland. All of it comes from West Africa and Latin America, where many farmers earn less than two dollars a day. A journalist reports that part of the cocoa Anna buys comes from plantations where children work. Anna didn’t know.' },
          opener: { es: 'Siempre compré a un distribuidor serio, con certificados. Ahora resulta que los certificados no garantizan nada. Puedo comprar cacao directamente a una cooperativa de Ecuador que paga bien a sus agricultores, pero mi chocolate costaría el doble. Mis clientes dicen que les importa el comercio justo, pero luego compran lo más barato en el supermercado. ¿De quién es la responsabilidad: del que vende o del que compra?', en: 'I always bought from a serious distributor, with certificates. Now it turns out the certificates don’t guarantee anything. I can buy cocoa directly from a cooperative in Ecuador that pays its farmers well, but my chocolate would cost twice as much. My customers say they care about fair trade, but then they buy the cheapest at the supermarket. Whose responsibility is it: the seller’s or the buyer’s?' },
          decide: {
            ask: { es: '¿Qué debería hacer Anna?', en: 'What should Anna do?' },
            options: [
              { say: { es: 'Cambiar a la cooperativa y explicar el precio a los clientes.', en: 'Switch to the cooperative and explain the price to customers.' }, then: { es: 'Pierde un tercio de los clientes, pero gana otros nuevos que buscan justamente eso.', en: 'She loses a third of her customers, but gains new ones who are looking for exactly that.' } },
              { say: { es: 'Ofrecer las dos opciones y dejar elegir al cliente.', en: 'Offer both options and let the customer choose.' }, then: { es: 'El setenta por ciento elige el barato. Anna no sabe si fue un éxito o un fracaso.', en: 'Seventy per cent choose the cheap one. Anna doesn’t know if it was a success or a failure.' } },
              { say: { es: 'Viajar a Ecuador antes de decidir.', en: 'Travel to Ecuador before deciding.' }, then: { es: 'Conoce a los agricultores y graba un video. Las ventas suben cuando los clientes ven sus caras.', en: 'She meets the farmers and records a video. Sales go up when customers see their faces.' } },
            ],
          },
          twist: { es: 'Una cadena de supermercados le propone a Anna vender su chocolate de comercio justo en todo el país, pero exige bajar el precio un treinta por ciento. ¿Se puede ser justo y barato a la vez?', en: 'A supermarket chain proposes selling Anna’s fair-trade chocolate across the country, but demands a thirty per cent price cut. Can you be fair and cheap at the same time?' },
          questions: [
            { q: { es: '¿Pagarías el doble por un producto si sabes que es justo?', en: 'Would you pay double for a product if you knew it was fair?' }, help: { es: 'Sí, por ejemplo… / Depende del producto…', en: 'Yes, for example… / It depends on the product…' }, follow: [{ es: '¿Lo haces realmente?', en: 'Do you really do it?' }, { es: '¿Qué te lo impide?', en: 'What stops you?' }] },
            { q: { es: '¿Sabes de dónde vienen las cosas que comes o vistes?', en: 'Do you know where the things you eat or wear come from?' }, help: { es: 'A veces miro… / La verdad, no.', en: 'Sometimes I check… / Honestly, no.' }, follow: [{ es: '¿Te sorprendió algo?', en: 'Has anything surprised you?' }, { es: '¿Cambiaste algún hábito?', en: 'Did you change any habit?' }] },
            { q: { es: '¿Confías en los certificados y etiquetas «ecológicas» o «justas»?', en: 'Do you trust “eco” or “fair” certificates and labels?' }, help: { es: 'Confío en algunos porque… / No, porque…', en: 'I trust some because… / No, because…' }, follow: [{ es: '¿Cuál conoces?', en: 'Which do you know?' }, { es: '¿Quién debería controlarlos?', en: 'Who should check them?' }] },
            { q: { es: '¿Es posible ser un consumidor coherente hoy?', en: 'Is it possible to be a consistent consumer today?' }, help: { es: 'Creo que es difícil porque… / Sí, si…', en: 'I think it’s hard because… / Yes, if…' }, follow: [{ es: '¿En qué eres incoherente tú?', en: 'Where are you inconsistent?' }, { es: '¿Te molesta?', en: 'Does it bother you?' }] },
          ],
          words: [{ es: 'el distribuidor', en: 'the distributor' }, { es: 'la cooperativa', en: 'the cooperative' }, { es: 'el comercio justo', en: 'fair trade' }, { es: 'garantizar', en: 'to guarantee' }, { es: 'la responsabilidad', en: 'responsibility' }],
        },
      },
    },
    // ------------------------------------------------------------ the punctual train
    {
      id: 'tren',
      name: { es: 'La estación central de Zúrich', en: 'Zurich main station' },
      who: { name: 'Reto', role: { es: 'revisor de tren', en: 'train conductor' } },
      levels: {
        A0: {
          scene: { es: 'Es una estación muy grande. Hay un reloj enorme y muchos trenes rojos. Reto es revisor. Tiene un uniforme azul y una gorra.', en: 'It is a very big station. There is a huge clock and lots of red trains. Reto is a conductor. He has a blue uniform and a cap.' },
          opener: { es: '¡Buenos días! Soy Reto. El tren sale a las nueve y dos. ¿Tienes billete?', en: 'Good morning! I am Reto. The train leaves at two minutes past nine. Do you have a ticket?' },
          decide: {
            ask: { es: '¿Qué dices?', en: 'What do you say?' },
            options: [
              { say: { es: 'Sí, aquí está.', en: 'Yes, here it is.' }, then: { es: 'Reto mira el billete. «Perfecto. Vagón cuatro».', en: 'Reto looks at the ticket. “Perfect. Carriage four.”' } },
              { say: { es: 'No, ¿dónde compro uno?', en: 'No, where do I buy one?' }, then: { es: 'Reto dice: «En la máquina roja. ¡Rápido!».', en: 'Reto says: “At the red machine. Quick!”' } },
              { say: { es: '¿A las nueve y dos? ¿No a las nueve?', en: 'At two past nine? Not at nine?' }, then: { es: 'Reto ríe: «En Suiza, dos minutos son importantes».', en: 'Reto laughs: “In Switzerland, two minutes are important.”' } },
            ],
          },
          twist: { es: 'Son las nueve y un minuto. Un señor corre con una maleta. ¿Lo esperan?', en: 'It is one minute past nine. A man runs with a suitcase. Do they wait for him?' },
          questions: [
            { q: { es: '¿Viajas en tren?', en: 'Do you travel by train?' }, help: { es: 'Sí, mucho. / No, nunca.', en: 'Yes, a lot. / No, never.' }, follow: [{ es: '¿Adónde?', en: 'Where to?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Eres puntual?', en: 'Are you punctual?' }, help: { es: 'Sí, siempre. / No, llego tarde.', en: 'Yes, always. / No, I am late.' }, follow: [{ es: '¿Y tus amigos?', en: 'And your friends?' }, { es: '¿Te molesta esperar?', en: 'Do you mind waiting?' }] },
            { q: { es: '¿Qué hora es ahora?', en: 'What time is it now?' }, help: { es: 'Son las…', en: 'It is…' }, follow: [{ es: '¿Tienes reloj?', en: 'Do you have a watch?' }, { es: '¿Usas el móvil para la hora?', en: 'Do you use your phone for the time?' }] },
            { q: { es: '¿Hay trenes en tu ciudad?', en: 'Are there trains in your city?' }, help: { es: 'Sí, hay… / No, hay autobuses.', en: 'Yes, there are… / No, there are buses.' }, follow: [{ es: '¿Son puntuales?', en: 'Are they punctual?' }, { es: '¿Son caros?', en: 'Are they expensive?' }] },
          ],
          words: [{ es: 'la estación', en: 'the station' }, { es: 'el billete', en: 'the ticket' }, { es: 'el revisor', en: 'the conductor' }, { es: 'puntual', en: 'punctual' }, { es: 'el vagón', en: 'the carriage' }],
        },
        A1: {
          scene: { es: 'Son las siete y media de la mañana en la estación central de Zúrich. Cada día pasan por aquí casi medio millón de personas. Los trenes salen al minuto exacto. Reto revisa billetes en el tren a Lucerna. Hoy hay un problema: una vaca está en las vías y el tren va a llegar cuatro minutos tarde.', en: 'It is half past seven in the morning at Zurich main station. Almost half a million people pass through here every day. The trains leave on the exact minute. Reto checks tickets on the train to Lucerne. Today there is a problem: a cow is on the tracks and the train will arrive four minutes late.' },
          opener: { es: 'Cuatro minutos tarde y la gente ya está nerviosa. Aquí un retraso de tres minutos es un retraso de verdad. Algunos pasajeros pierden su conexión a Berna o a Ginebra. Tengo que anunciarlo por el altavoz en alemán, francés, italiano e inglés. ¿En tu país los trenes llegan a tiempo?', en: 'Four minutes late and people are already nervous. Here a three-minute delay is a real delay. Some passengers miss their connection to Bern or Geneva. I have to announce it over the loudspeaker in German, French, Italian and English. Do trains arrive on time in your country?' },
          decide: {
            ask: { es: 'Una señora mayor va a perder su tren a Ginebra. ¿Qué hace Reto?', en: 'An older lady is going to miss her train to Geneva. What does Reto do?' },
            options: [
              { say: { es: 'Llama a la estación para pedir que esperen un minuto.', en: 'He calls the station to ask them to wait a minute.' }, then: { es: 'El tren de Ginebra espera. La señora corre y llega. ¡Aplausos!', en: 'The Geneva train waits. The lady runs and makes it. Applause!' } },
              { say: { es: 'Le explica cuál es el próximo tren.', en: 'He explains which is the next train.' }, then: { es: 'Sale en treinta minutos. La señora toma un café y lee el periódico.', en: 'It leaves in thirty minutes. The lady has a coffee and reads the newspaper.' } },
              { say: { es: 'Le da un vale para un chocolate en la estación.', en: 'He gives her a voucher for a hot chocolate at the station.' }, then: { es: 'La señora sonríe: «Por un chocolate, espero lo que haga falta».', en: 'The lady smiles: “For a hot chocolate, I’ll wait as long as it takes.”' } },
            ],
          },
          twist: { es: 'Un pasajero no tiene billete y dice que la máquina no funcionaba. La multa es de noventa francos. ¿Qué hace Reto?', en: 'A passenger has no ticket and says the machine wasn’t working. The fine is ninety francs. What does Reto do?' },
          questions: [
            { q: { es: '¿Cuánto tiempo de retraso es normal para ti?', en: 'How much delay is normal for you?' }, help: { es: 'Cinco minutos / media hora…', en: 'Five minutes / half an hour…' }, follow: [{ es: '¿Y en tu país?', en: 'And in your country?' }, { es: '¿Te enfadas?', en: 'Do you get angry?' }] },
            { q: { es: '¿Perdiste un tren o un avión alguna vez?', en: 'Have you ever missed a train or plane?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿Cuántos idiomas se hablan en tu país?', en: 'How many languages are spoken in your country?' }, help: { es: 'Se habla… / Se hablan…', en: '… is spoken. / … are spoken.' }, follow: [{ es: '¿Cuáles hablas tú?', en: 'Which do you speak?' }, { es: '¿Cuál te gustaría aprender?', en: 'Which would you like to learn?' }] },
            { q: { es: '¿Prefieres el tren, el coche o el avión?', en: 'Do you prefer the train, the car or the plane?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Para viajes largos también?', en: 'For long trips too?' }, { es: '¿Cuál es más barato?', en: 'Which is cheaper?' }] },
          ],
          words: [{ es: 'las vías', en: 'the tracks' }, { es: 'el retraso', en: 'the delay' }, { es: 'la conexión', en: 'the connection' }, { es: 'el altavoz', en: 'the loudspeaker' }, { es: 'la multa', en: 'the fine' }],
        },
        A2: {
          scene: { es: 'Reto trabaja en el tren de la noche de Zúrich a Coira. Es viernes, la una de la madrugada, y el tren está lleno de jóvenes que vuelven de fiesta. Un grupo hace mucho ruido, pone música alta y molesta a una mujer que viaja con un niño dormido. La mujer le pide ayuda a Reto.', en: 'Reto works on the night train from Zurich to Chur. It is Friday, one in the morning, and the train is full of young people coming back from parties. A group is making a lot of noise, playing loud music and bothering a woman travelling with a sleeping child. The woman asks Reto for help.' },
          opener: { es: 'Me gustan los turnos de noche, pero los viernes son otra cosa. Estos chicos no son malos, solo están contentos y un poco borrachos. Si les hablo con autoridad, pueden reaccionar mal. Si no hago nada, la señora va a escribir una queja y tiene razón. Hace unos meses un compañero tuvo problemas por intervenir. ¿Cómo hablarías tú con ellos?', en: 'I like night shifts, but Fridays are something else. These lads aren’t bad, they’re just happy and a bit drunk. If I speak to them with authority, they might react badly. If I do nothing, the lady will write a complaint and she’s right. A few months ago a colleague got into trouble for stepping in. How would you talk to them?' },
          decide: {
            ask: { es: '¿Qué hace Reto?', en: 'What does Reto do?' },
            options: [
              { say: { es: 'Habla con el grupo con humor y les pide bajar la música.', en: 'He talks to the group with humour and asks them to turn the music down.' }, then: { es: 'Uno de ellos dice: «Perdón, señor revisor». Bajan la música y hasta cantan bajito.', en: 'One of them says: “Sorry, sir.” They turn the music down and even sing quietly.' } },
              { say: { es: 'Lleva a la mujer y al niño a otro vagón más tranquilo.', en: 'He takes the woman and the child to a quieter carriage.' }, then: { es: 'La mujer está agradecida, pero dice: «¿Por qué tengo que moverme yo?».', en: 'The woman is grateful, but says: “Why do I have to be the one to move?”' } },
              { say: { es: 'Llama a la seguridad para la próxima estación.', en: 'He calls security for the next station.' }, then: { es: 'Dos guardias suben al tren. El grupo se calla, pero uno de ellos graba todo con el móvil.', en: 'Two guards get on the train. The group goes quiet, but one of them films everything on his phone.' } },
            ],
          },
          twist: { es: 'Al día siguiente aparece en internet un video de Reto hablando con los jóvenes. Algunos dicen que fue demasiado duro, otros que fue demasiado blando. ¿Qué piensas?', en: 'The next day a video appears online of Reto talking to the young people. Some say he was too harsh, others too soft. What do you think?' },
          questions: [
            { q: { es: '¿Qué haces cuando alguien hace ruido en el transporte público?', en: 'What do you do when someone is noisy on public transport?' }, help: { es: 'Le digo algo. / Me cambio de lugar. / No hago nada.', en: 'I say something. / I move. / I do nothing.' }, follow: [{ es: '¿Te pasó hace poco?', en: 'Did it happen to you recently?' }, { es: '¿Cómo reaccionó la persona?', en: 'How did the person react?' }] },
            { q: { es: '¿Trabajaste de noche alguna vez?', en: 'Have you ever worked at night?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Qué es lo bueno?', en: 'What’s the good part?' }, { es: '¿Y lo malo?', en: 'And the bad part?' }] },
            { q: { es: '¿Es fácil decir «no» a un grupo?', en: 'Is it easy to say “no” to a group?' }, help: { es: 'No, porque… / Para mí sí.', en: 'No, because… / For me it is.' }, follow: [{ es: '¿Cuándo lo hiciste?', en: 'When did you do it?' }, { es: '¿Cómo te sentiste?', en: 'How did you feel?' }] },
            { q: { es: '¿Está bien grabar a los trabajadores con el móvil?', en: 'Is it OK to film workers on your phone?' }, help: { es: 'Depende de… / No, porque…', en: 'It depends on… / No, because…' }, follow: [{ es: '¿Te grabaron alguna vez?', en: 'Have you ever been filmed?' }, { es: '¿Lo compartiste?', en: 'Did you share it?' }] },
          ],
          words: [{ es: 'el turno', en: 'the shift' }, { es: 'borracho', en: 'drunk' }, { es: 'la queja', en: 'the complaint' }, { es: 'intervenir', en: 'to step in' }, { es: 'agradecido', en: 'grateful' }],
        },
        B1: {
          scene: { es: 'Los suizos votaron hace años un gran plan para pasar el transporte de mercancías de la carretera al tren: el túnel de San Gotardo, el más largo del mundo, con cincuenta y siete kilómetros. Ahora el gobierno propone subir el precio del abono anual de tren para pagar nuevos túneles. Reto, como representante del sindicato, tiene que dar su opinión en televisión.', en: 'Years ago the Swiss voted for a big plan to move freight from road to rail: the Gotthard tunnel, the longest in the world, at fifty-seven kilometres. Now the government proposes raising the price of the annual rail pass to pay for new tunnels. Reto, as a union representative, has to give his opinion on television.' },
          opener: { es: 'El tren es casi una religión aquí. Tenemos uno de los mejores sistemas del mundo porque lo pagamos entre todos y lo votamos una y otra vez. Pero el abono ya cuesta casi cuatro mil francos al año. Para una enfermera que vive lejos de la ciudad porque no puede pagar un piso en Zúrich, es muchísimo. Si sube, algunos volverán al coche. Si no sube, no hay túneles nuevos. ¿Quién debería pagar el transporte público: el que lo usa o todos?', en: 'The train is almost a religion here. We have one of the best systems in the world because we all pay for it and vote for it again and again. But the pass already costs almost four thousand francs a year. For a nurse who lives far from the city because she can’t afford a flat in Zurich, it’s a huge amount. If it goes up, some will go back to the car. If it doesn’t, there are no new tunnels. Who should pay for public transport: those who use it or everyone?' },
          decide: {
            ask: { es: '¿Qué propone Reto en la televisión?', en: 'What does Reto propose on television?' },
            options: [
              { say: { es: 'Que paguen más los camiones y los coches, no los pasajeros.', en: 'That lorries and cars pay more, not passengers.' }, then: { es: 'Las asociaciones de transportistas protestan, pero la idea gana apoyo en las encuestas.', en: 'The hauliers’ associations protest, but the idea gains support in the polls.' } },
              { say: { es: 'Un abono más barato para quien gana poco.', en: 'A cheaper pass for low earners.' }, then: { es: 'Es justo, pero complicado: hay que demostrar el sueldo y mucha gente no lo pide por vergüenza.', en: 'It’s fair, but complicated: you have to prove your salary and many people don’t apply out of embarrassment.' } },
              { say: { es: 'Votar en un referéndum si se construyen los túneles.', en: 'Hold a referendum on whether to build the tunnels.' }, then: { es: 'Los suizos votan. Gana el sí por poco, y el precio sube menos de lo previsto.', en: 'The Swiss vote. Yes wins narrowly, and the price rises less than planned.' } },
            ],
          },
          twist: { es: 'Un periodista le pregunta a Reto: «Usted viaja gratis por ser trabajador del tren. ¿No es fácil pedir que paguen otros?». ¿Cómo responde?', en: 'A journalist asks Reto: “You travel free as a rail worker. Isn’t it easy to ask others to pay?” How does he answer?' },
          questions: [
            { q: { es: '¿El transporte público debería ser gratis?', en: 'Should public transport be free?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Quién lo pagaría?', en: 'Who would pay for it?' }, { es: '¿Conoces una ciudad donde es gratis?', en: 'Do you know a city where it’s free?' }] },
            { q: { es: '¿Dejarías el coche si el tren fuera más barato y frecuente?', en: 'Would you give up the car if the train were cheaper and more frequent?' }, help: { es: 'Sí, si… / No, porque necesito…', en: 'Yes, if… / No, because I need…' }, follow: [{ es: '¿Qué te falta?', en: 'What’s missing?' }, { es: '¿Cuánto gastas en transporte?', en: 'How much do you spend on transport?' }] },
            { q: { es: '¿Votarías una obra enorme que pagarán tus nietos?', en: 'Would you vote for a huge project your grandchildren will pay for?' }, help: { es: 'Sí, porque ellos también… / No, porque…', en: 'Yes, because they’ll also… / No, because…' }, follow: [{ es: '¿Qué obra de tu país fue una buena inversión?', en: 'Which project in your country was a good investment?' }, { es: '¿Y una mala?', en: 'And a bad one?' }] },
            { q: { es: '¿Es justo que alguien defienda algo de lo que se beneficia?', en: 'Is it fair for someone to defend something they benefit from?' }, help: { es: 'Sí, si es honesto… / No, porque…', en: 'Yes, if they’re honest… / No, because…' }, follow: [{ es: '¿Tú lo hiciste?', en: 'Have you done it?' }, { es: '¿Cómo se demuestra que no es egoísmo?', en: 'How do you prove it isn’t selfishness?' }] },
          ],
          words: [{ es: 'las mercancías', en: 'freight / goods' }, { es: 'el abono', en: 'the (travel) pass' }, { es: 'el sindicato', en: 'the union' }, { es: 'el referéndum', en: 'the referendum' }, { es: 'el camión', en: 'the lorry / truck' }],
        },
      },
    },
    // ------------------------------------------------------------ swimming in the Limmat
    {
      id: 'rio',
      name: { es: 'Nadar en el río Limmat', en: 'Swimming in the Limmat' },
      who: { name: 'Nina', role: { es: 'socorrista del río', en: 'river lifeguard' } },
      levels: {
        A0: {
          scene: { es: 'Es verano. Hay un río en el centro de la ciudad. El agua es verde y limpia. Mucha gente nada. Nina es socorrista. Tiene una camiseta roja y un silbato.', en: 'It is summer. There is a river in the middle of the city. The water is green and clean. Lots of people are swimming. Nina is a lifeguard. She has a red T-shirt and a whistle.' },
          opener: { es: '¡Hola! Soy Nina. El agua está fresca hoy. ¿Nadas con nosotros?', en: 'Hello! I am Nina. The water is cool today. Will you swim with us?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Sí, nado en el río.', en: 'Yes, I swim in the river.' }, then: { es: 'El agua te lleva. ¡Es como un tren de agua!', en: 'The water carries you. It is like a water train!' } },
              { say: { es: 'No, tomo el sol.', en: 'No, I sunbathe.' }, then: { es: 'Te sientas en la madera. Hace calor. ¡Qué bien!', en: 'You sit on the wooden deck. It is hot. How nice!' } },
              { say: { es: 'Primero toco el agua.', en: 'First I touch the water.' }, then: { es: '¡Está fría! Nina ríe: «Solo diecinueve grados».', en: 'It is cold! Nina laughs: “Only nineteen degrees.”' } },
            ],
          },
          twist: { es: 'Muchas personas llevan su ropa en una bolsa de agua. ¿Pones tu ropa en una bolsa?', en: 'Many people carry their clothes in a waterproof bag. Do you put your clothes in a bag?' },
          questions: [
            { q: { es: '¿Sabes nadar?', en: 'Can you swim?' }, help: { es: 'Sí, muy bien. / Un poco. / No.', en: 'Yes, very well. / A little. / No.' }, follow: [{ es: '¿Dónde nadas?', en: 'Where do you swim?' }, { es: '¿Te gusta?', en: 'Do you like it?' }] },
            { q: { es: '¿Hay un río en tu ciudad?', en: 'Is there a river in your city?' }, help: { es: 'Sí, se llama… / No.', en: 'Yes, it is called… / No.' }, follow: [{ es: '¿Está limpio?', en: 'Is it clean?' }, { es: '¿Se puede nadar?', en: 'Can you swim in it?' }] },
            { q: { es: '¿Te gusta el agua fría?', en: 'Do you like cold water?' }, help: { es: 'Sí. / No, prefiero el agua caliente.', en: 'Yes. / No, I prefer warm water.' }, follow: [{ es: '¿Te duchas con agua fría?', en: 'Do you shower with cold water?' }, { es: '¿En verano o en invierno?', en: 'In summer or in winter?' }] },
            { q: { es: '¿Qué haces en verano?', en: 'What do you do in summer?' }, help: { es: 'Voy a la playa / al río / a la piscina…', en: 'I go to the beach / river / pool…' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Cuántas semanas?', en: 'How many weeks?' }] },
          ],
          words: [{ es: 'el río', en: 'the river' }, { es: 'la socorrista', en: 'the (female) lifeguard' }, { es: 'el silbato', en: 'the whistle' }, { es: 'fresco', en: 'cool' }, { es: 'tomar el sol', en: 'to sunbathe' }],
        },
        A1: {
          scene: { es: 'Es un jueves de julio a las seis de la tarde. Los oficinistas salen del trabajo, se cambian y saltan al río Limmat. Se dejan llevar por el agua desde el centro hasta una piscina pública de madera, a un kilómetro. Hace cuarenta años el río estaba sucio. Hoy se puede beber el agua de las fuentes de la ciudad.', en: 'It is a Thursday in July at six in the evening. Office workers leave work, get changed and jump into the river Limmat. They let the water carry them from the centre to a wooden public pool a kilometre away. Forty years ago the river was dirty. Today you can drink the water from the city’s fountains.' },
          opener: { es: 'Mi trabajo es mirar el agua todo el día. Parece fácil, pero el río tiene corriente y algunos turistas no lo saben. Saltan desde el puente con el móvil en la mano o después de dos cervezas. Hay que nadar siempre con la corriente, nunca contra ella. ¿Te gusta nadar en ríos o prefieres la piscina?', en: 'My job is to watch the water all day. It looks easy, but the river has a current and some tourists don’t know. They jump off the bridge with their phone in their hand or after two beers. You always have to swim with the current, never against it. Do you like swimming in rivers or do you prefer the pool?' },
          decide: {
            ask: { es: 'Un turista quiere saltar desde un puente muy alto. ¿Qué le dice Nina?', en: 'A tourist wants to jump off a very high bridge. What does Nina tell him?' },
            options: [
              { say: { es: '«Está prohibido. Salta desde la plataforma».', en: '“It’s forbidden. Jump from the platform.”' }, then: { es: 'El turista salta desde la plataforma. Es más bajo, pero muy divertido.', en: 'The tourist jumps from the platform. It’s lower, but great fun.' } },
              { say: { es: '«¿Sabes cuánta profundidad hay?».', en: '“Do you know how deep it is?”' }, then: { es: 'El turista no sabe. Nina le explica que allí hay solo un metro. Se baja del puente.', en: 'The tourist doesn’t know. Nina explains it’s only a metre deep there. He gets off the bridge.' } },
              { say: { es: 'Toca el silbato muy fuerte.', en: 'She blows the whistle very loudly.' }, then: { es: 'Todo el mundo mira al turista. Él, con vergüenza, baja por la escalera.', en: 'Everyone looks at the tourist. He climbs down the stairs, embarrassed.' } },
            ],
          },
          twist: { es: 'Un niño pierde su pelota en el río y quiere ir a buscarla. ¿Qué hace Nina?', en: 'A child loses his ball in the river and wants to go after it. What does Nina do?' },
          questions: [
            { q: { es: '¿Qué haces después del trabajo o la escuela?', en: 'What do you do after work or school?' }, help: { es: 'Voy al… / Descanso en casa.', en: 'I go to… / I rest at home.' }, follow: [{ es: '¿Y en verano?', en: 'And in summer?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿El agua de tu ciudad se puede beber?', en: 'Can you drink the tap water in your city?' }, help: { es: 'Sí. / No, compramos agua.', en: 'Yes. / No, we buy water.' }, follow: [{ es: '¿Cuánta agua bebes al día?', en: 'How much water do you drink a day?' }, { es: '¿Usas botella?', en: 'Do you use a bottle?' }] },
            { q: { es: '¿Hiciste algo peligroso en vacaciones?', en: 'Have you done something dangerous on holiday?' }, help: { es: 'Sí, salté… / No, soy prudente.', en: 'Yes, I jumped… / No, I’m careful.' }, follow: [{ es: '¿Tuviste miedo?', en: 'Were you scared?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
            { q: { es: '¿Te gustaría trabajar al aire libre?', en: 'Would you like to work outdoors?' }, help: { es: 'Sí, como… / No, prefiero una oficina.', en: 'Yes, as a… / No, I prefer an office.' }, follow: [{ es: '¿Qué trabajo?', en: 'Which job?' }, { es: '¿Y en invierno?', en: 'And in winter?' }] },
          ],
          words: [{ es: 'la corriente', en: 'the current' }, { es: 'el puente', en: 'the bridge' }, { es: 'saltar', en: 'to jump' }, { es: 'la profundidad', en: 'the depth' }, { es: 'la fuente', en: 'the fountain' }],
        },
        A2: {
          scene: { es: 'Esta tarde Nina sacó del agua a un hombre de sesenta años que se sentía mal. Ahora está bien, en el hospital. Pero en la ciudad hay un debate: cada verano el río tiene más gente, y algunos vecinos quieren limitar la entrada, cobrar dinero o prohibir el alcohol en las orillas. Un periodista entrevista a Nina.', en: 'This afternoon Nina pulled a sixty-year-old man out of the water who was feeling unwell. He is fine now, in hospital. But there is a debate in the city: every summer the river is busier, and some residents want to limit entry, charge money or ban alcohol on the banks. A journalist interviews Nina.' },
          opener: { es: 'Hace diez años éramos tres socorristas y había quinientas personas los días de calor. Hoy somos cinco y viene el triple. El río es de todos, eso es lo bonito: el banquero y el estudiante nadan juntos, gratis. Pero con tanta gente no puedo mirar a todos. Si cobran entrada, menos gente vendrá… y será menos de todos. ¿Qué opinas tú?', en: 'Ten years ago there were three of us lifeguards and five hundred people on hot days. Today there are five of us and three times as many come. The river belongs to everyone, that’s the beautiful thing: the banker and the student swim together, for free. But with so many people I can’t watch everyone. If they charge for entry, fewer people will come… and it’ll belong to fewer people. What do you think?' },
          decide: {
            ask: { es: '¿Qué le dice Nina al periodista?', en: 'What does Nina tell the journalist?' },
            options: [
              { say: { es: 'Que necesitan más socorristas, no entradas.', en: 'That they need more lifeguards, not tickets.' }, then: { es: 'El ayuntamiento contrata a tres socorristas más. Pero sube un poco el impuesto municipal.', en: 'The council hires three more lifeguards. But the local tax goes up a little.' } },
              { say: { es: 'Que prohíban el alcohol cerca del agua.', en: 'That alcohol be banned near the water.' }, then: { es: 'Hay menos accidentes, pero los jóvenes se quejan y se van a otro lugar sin vigilancia.', en: 'There are fewer accidents, but young people complain and go to another spot with no lifeguards.' } },
              { say: { es: 'Que se enseñe a nadar en río en las escuelas.', en: 'That river swimming be taught in schools.' }, then: { es: 'Es una solución lenta, pero en unos años los niños de Zúrich conocen el río mejor que nadie.', en: 'It’s a slow solution, but in a few years Zurich’s children know the river better than anyone.' } },
            ],
          },
          twist: { es: 'El hombre que Nina salvó quiere darle mil francos como regalo. Los socorristas no pueden aceptar dinero. ¿Qué debería hacer Nina?', en: 'The man Nina saved wants to give her a thousand francs as a gift. Lifeguards can’t accept money. What should Nina do?' },
          questions: [
            { q: { es: '¿Los espacios públicos deberían ser siempre gratis?', en: 'Should public spaces always be free?' }, help: { es: 'Sí, porque… / No siempre, porque…', en: 'Yes, because… / Not always, because…' }, follow: [{ es: '¿Hay alguno que cobra en tu ciudad?', en: 'Is there one that charges in your city?' }, { es: '¿Te parece bien?', en: 'Do you think that’s right?' }] },
            { q: { es: '¿Ayudaste a alguien en una emergencia?', en: 'Have you helped someone in an emergency?' }, help: { es: 'Sí, cuando… / No, pero sabría…', en: 'Yes, when… / No, but I’d know…' }, follow: [{ es: '¿Qué hiciste?', en: 'What did you do?' }, { es: '¿Sabes primeros auxilios?', en: 'Do you know first aid?' }] },
            { q: { es: '¿Hay demasiada gente en algún lugar que te gusta?', en: 'Are there too many people in a place you like?' }, help: { es: 'Sí, en… / No.', en: 'Yes, in… / No.' }, follow: [{ es: '¿Sigues yendo?', en: 'Do you still go?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Aceptarías un regalo por hacer tu trabajo?', en: 'Would you accept a gift for doing your job?' }, help: { es: 'Sí, si es pequeño… / No, porque…', en: 'Yes, if it’s small… / No, because…' }, follow: [{ es: '¿Te regalaron algo así?', en: 'Have you been given something like that?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
          ],
          words: [{ es: 'la orilla', en: 'the bank (of a river)' }, { es: 'limitar', en: 'to limit' }, { es: 'cobrar', en: 'to charge' }, { es: 'el impuesto', en: 'the tax' }, { es: 'la vigilancia', en: 'supervision' }],
        },
        B1: {
          scene: { es: 'Zúrich es una de las ciudades con mejor calidad de vida del mundo, y también una de las más caras. Nina, de veintiocho años, gana un buen sueldo de socorrista en verano y trabaja en un gimnasio en invierno, pero paga la mitad de su sueldo en alquiler, en un piso compartido. Una amiga le ofrece trabajo en Portugal, con un sueldo mucho menor pero con una vida mucho más barata.', en: 'Zurich is one of the cities with the best quality of life in the world, and also one of the most expensive. Nina, twenty-eight, earns a good lifeguard wage in summer and works at a gym in winter, but she spends half her salary on rent, in a shared flat. A friend offers her a job in Portugal, with a much lower salary but a much cheaper life.' },
          opener: { es: 'Aquí todo funciona: el tren, el agua, la seguridad. Puedo dejar la bicicleta sin candado. Pero a veces siento que trabajo para pagar el derecho a vivir en un lugar bonito, y no me queda tiempo ni dinero para disfrutarlo. En Lisboa ganaría la mitad, pero tendría mar, sol y tiempo libre. Mis padres dicen que sería un error dejar la seguridad suiza. ¿Qué vale más: la seguridad o el tiempo?', en: 'Everything works here: the train, the water, safety. I can leave my bike without a lock. But sometimes I feel I work to pay for the right to live somewhere beautiful, and I have no time or money left to enjoy it. In Lisbon I’d earn half, but I’d have the sea, sun and free time. My parents say leaving Swiss security would be a mistake. What’s worth more: security or time?' },
          decide: {
            ask: { es: '¿Qué le aconsejas a Nina?', en: 'What do you advise Nina?' },
            options: [
              { say: { es: 'Probar un año en Lisboa sin cerrar las puertas en Zúrich.', en: 'Try a year in Lisbon without closing doors in Zurich.' }, then: { es: 'El gimnasio le guarda el puesto. Nina se va con una maleta y muchas dudas.', en: 'The gym keeps her job open. Nina leaves with one suitcase and lots of doubts.' } },
              { say: { es: 'Quedarse, pero mudarse a un pueblo más barato.', en: 'Stay, but move to a cheaper town.' }, then: { es: 'Paga menos alquiler, pero pasa una hora y media al día en el tren.', en: 'She pays less rent, but spends an hour and a half a day on the train.' } },
              { say: { es: 'Quedarse y ahorrar cinco años para irse después.', en: 'Stay and save for five years, then leave.' }, then: { es: 'Es un buen plan. El problema es que cinco años es mucho tiempo y la vida cambia.', en: 'It’s a good plan. The problem is that five years is a long time and life changes.' } },
            ],
          },
          twist: { es: 'Muchos portugueses vienen a Suiza a trabajar justamente por los sueldos altos. Nina se pregunta si su sueño es un privilegio: solo puede irse a un país más pobre porque viene de uno rico. ¿Qué piensas?', en: 'Many Portuguese people come to Switzerland to work precisely because of the high wages. Nina wonders whether her dream is a privilege: she can only move to a poorer country because she comes from a rich one. What do you think?' },
          questions: [
            { q: { es: '¿Cambiarías un sueldo alto por más tiempo libre?', en: 'Would you trade a high salary for more free time?' }, help: { es: 'Sí, porque… / No, porque necesito…', en: 'Yes, because… / No, because I need…' }, follow: [{ es: '¿Cuánto tiempo libre tienes ahora?', en: 'How much free time do you have now?' }, { es: '¿Qué harías con más?', en: 'What would you do with more?' }] },
            { q: { es: '¿Qué ciudad te parece cara? ¿Vale la pena vivir allí?', en: 'Which city seems expensive to you? Is it worth living there?' }, help: { es: '… es carísima, pero… / No vale la pena porque…', en: '… is very expensive, but… / It isn’t worth it because…' }, follow: [{ es: '¿Cuánto cuesta un alquiler allí?', en: 'How much is rent there?' }, { es: '¿Viviste allí?', en: 'Did you live there?' }] },
            { q: { es: '¿Tus padres aprobarían que te mudaras a otro país?', en: 'Would your parents approve of you moving to another country?' }, help: { es: 'Creo que sí / no, porque…', en: 'I think so / not, because…' }, follow: [{ es: '¿Te importa su opinión?', en: 'Does their opinion matter to you?' }, { es: '¿Lo hablaste con ellos?', en: 'Have you talked to them about it?' }] },
            { q: { es: '¿Mudarse a un país más barato es un privilegio?', en: 'Is moving to a cheaper country a privilege?' }, help: { es: 'Sí, porque… / No necesariamente…', en: 'Yes, because… / Not necessarily…' }, follow: [{ es: '¿Conoces a alguien que lo hizo?', en: 'Do you know someone who did it?' }, { es: '¿Cómo lo ven los locales?', en: 'How do the locals see it?' }] },
          ],
          words: [{ es: 'la calidad de vida', en: 'quality of life' }, { es: 'el alquiler', en: 'the rent' }, { es: 'el candado', en: 'the lock' }, { es: 'ahorrar', en: 'to save' }, { es: 'el privilegio', en: 'the privilege' }],
        },
      },
    },
    // ------------------------------------------------------------ recycling day
    {
      id: 'reciclaje',
      name: { es: 'El día del reciclaje', en: 'Recycling day' },
      who: { name: 'Ursula', role: { es: 'vecina y conserje', en: 'neighbour and caretaker' } },
      levels: {
        A0: {
          scene: { es: 'Es un edificio de pisos. Abajo hay muchos contenedores de colores. Ursula es la conserje. Tiene gafas, el pelo blanco y una lista en la mano.', en: 'It is a block of flats. Downstairs there are lots of coloured bins. Ursula is the caretaker. She has glasses, white hair and a list in her hand.' },
          opener: { es: '¡Buenos días! Soy Ursula. Hoy es el día del papel. ¿Tienes papel?', en: 'Good morning! I am Ursula. Today is paper day. Do you have paper?' },
          decide: {
            ask: { es: '¿Qué traes?', en: 'What do you bring?' },
            options: [
              { say: { es: 'Unos periódicos.', en: 'Some newspapers.' }, then: { es: 'Ursula dice: «Muy bien. Átalos con una cuerda».', en: 'Ursula says: “Very good. Tie them with string.”' } },
              { say: { es: 'Una botella de vidrio.', en: 'A glass bottle.' }, then: { es: 'Ursula dice: «¡No! El vidrio es el miércoles».', en: 'Ursula says: “No! Glass is on Wednesday.”' } },
              { say: { es: 'Una caja de cartón.', en: 'A cardboard box.' }, then: { es: 'Ursula dice: «El cartón va aparte. Ese contenedor».', en: 'Ursula says: “Cardboard goes separately. That bin.”' } },
            ],
          },
          twist: { es: 'Hay una bolsa negra de basura en la calle. No es una bolsa oficial. ¿De quién es?', en: 'There is a black rubbish bag in the street. It is not an official bag. Whose is it?' },
          questions: [
            { q: { es: '¿Reciclas en casa?', en: 'Do you recycle at home?' }, help: { es: 'Sí, siempre. / A veces. / No.', en: 'Yes, always. / Sometimes. / No.' }, follow: [{ es: '¿Qué reciclas?', en: 'What do you recycle?' }, { es: '¿Es fácil?', en: 'Is it easy?' }] },
            { q: { es: '¿Lees el periódico?', en: 'Do you read the newspaper?' }, help: { es: 'Sí, en papel. / Sí, en el móvil. / No.', en: 'Yes, on paper. / Yes, on my phone. / No.' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Cuándo?', en: 'When?' }] },
            { q: { es: '¿Vives en un piso o en una casa?', en: 'Do you live in a flat or a house?' }, help: { es: 'En un piso. / En una casa.', en: 'In a flat. / In a house.' }, follow: [{ es: '¿Es grande?', en: 'Is it big?' }, { es: '¿Tienes vecinos simpáticos?', en: 'Do you have nice neighbours?' }] },
            { q: { es: '¿Eres ordenado?', en: 'Are you tidy?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, very. / No, not at all.' }, follow: [{ es: '¿Y tu familia?', en: 'And your family?' }, { es: '¿Tu habitación está ordenada ahora?', en: 'Is your room tidy now?' }] },
          ],
          words: [{ es: 'el contenedor', en: 'the bin' }, { es: 'el papel', en: 'paper' }, { es: 'el vidrio', en: 'glass' }, { es: 'el cartón', en: 'cardboard' }, { es: 'la basura', en: 'rubbish' }],
        },
        A1: {
          scene: { es: 'En Zúrich, la basura normal se tira en bolsas oficiales que se compran en el supermercado. Cada bolsa cuesta dos francos. El reciclaje es gratis, pero hay reglas muy precisas: el papel atado, el vidrio por colores y nunca los domingos. Ursula, de setenta años, vive en el edificio desde hace cuarenta años y conoce todas las reglas.', en: 'In Zurich, normal rubbish goes into official bags bought at the supermarket. Each bag costs two francs. Recycling is free, but there are very precise rules: paper tied up, glass by colour and never on Sundays. Ursula, seventy, has lived in the building for forty years and knows every rule.' },
          opener: { es: 'Los nuevos vecinos siempre se equivocan. Ayer alguien puso una botella verde con las blancas. Y el domingo, ¡alguien tiró vidrio a las diez de la mañana! Hace ruido, ¿sabes? El domingo es para descansar. No soy una policía, pero si nadie cuida las reglas, esto se convierte en un caos. ¿En tu país hay reglas así?', en: 'New neighbours always get it wrong. Yesterday someone put a green bottle in with the white ones. And on Sunday, someone threw glass away at ten in the morning! It makes noise, you know? Sunday is for resting. I’m not the police, but if nobody looks after the rules, this turns into chaos. Are there rules like this in your country?' },
          decide: {
            ask: { es: 'Ursula encuentra una carta con el nombre del vecino nuevo en una bolsa no oficial. ¿Qué hace?', en: 'Ursula finds a letter with the new neighbour’s name in an unofficial bag. What does she do?' },
            options: [
              { say: { es: 'Habla con el vecino amablemente.', en: 'She talks to the neighbour kindly.' }, then: { es: 'El vecino es de Brasil. No conocía las reglas. Ursula le regala una bolsa oficial.', en: 'The neighbour is from Brazil. He didn’t know the rules. Ursula gives him an official bag.' } },
              { say: { es: 'Deja una nota en su puerta.', en: 'She leaves a note on his door.' }, then: { es: 'El vecino lee la nota y se siente mal. Durante semanas no saluda a Ursula.', en: 'The neighbour reads the note and feels bad. For weeks he doesn’t say hello to Ursula.' } },
              { say: { es: 'Llama a la administración del edificio.', en: 'She calls the building management.' }, then: { es: 'El vecino recibe una multa de cien francos. Ahora recicla perfecto… pero no le habla.', en: 'The neighbour gets a hundred-franc fine. Now he recycles perfectly… but he doesn’t talk to her.' } },
            ],
          },
          twist: { es: 'El vecino nuevo invita a Ursula a cenar comida brasileña. ¿Va Ursula?', en: 'The new neighbour invites Ursula to dinner, Brazilian food. Does Ursula go?' },
          questions: [
            { q: { es: '¿Cuánto cuesta tirar la basura en tu ciudad?', en: 'How much does it cost to throw rubbish away in your city?' }, help: { es: 'Es gratis. / Pagamos un impuesto.', en: 'It’s free. / We pay a tax.' }, follow: [{ es: '¿Te parece bien?', en: 'Do you think that’s fair?' }, { es: '¿Cuántas bolsas tiras a la semana?', en: 'How many bags do you throw away a week?' }] },
            { q: { es: '¿Qué se puede hacer y qué no el domingo en tu país?', en: 'What can and can’t you do on Sundays in your country?' }, help: { es: 'El domingo se puede… / no se puede…', en: 'On Sundays you can… / you can’t…' }, follow: [{ es: '¿Las tiendas abren?', en: 'Are shops open?' }, { es: '¿Qué haces tú?', en: 'What do you do?' }] },
            { q: { es: '¿Conoces a tus vecinos?', en: 'Do you know your neighbours?' }, help: { es: 'Sí, a todos. / Solo a algunos. / No.', en: 'Yes, all of them. / Only some. / No.' }, follow: [{ es: '¿Cómo se llaman?', en: 'What are their names?' }, { es: '¿Tuviste un problema con alguno?', en: 'Have you had a problem with any of them?' }] },
            { q: { es: '¿Te gustan las reglas claras?', en: 'Do you like clear rules?' }, help: { es: 'Sí, porque… / No, prefiero…', en: 'Yes, because… / No, I prefer…' }, follow: [{ es: '¿Qué regla no te gusta?', en: 'Which rule do you not like?' }, { es: '¿La respetas igual?', en: 'Do you follow it anyway?' }] },
          ],
          words: [{ es: 'la bolsa oficial', en: 'the official bag' }, { es: 'atado', en: 'tied up' }, { es: 'equivocarse', en: 'to get it wrong' }, { es: 'el caos', en: 'chaos' }, { es: 'la administración', en: 'the management' }],
        },
        A2: {
          scene: { es: 'El edificio tiene una reunión de vecinos. Una familia joven propone poner un compostador común en el patio para la basura orgánica y plantar un huerto. Ursula tiene dudas: dice que el compost huele mal y atrae ratones. Otros vecinos piensan que es una idea genial. Hay que votar.', en: 'The building has a residents’ meeting. A young family proposes putting a shared composter in the courtyard for organic waste and planting a vegetable garden. Ursula has doubts: she says compost smells bad and attracts mice. Other neighbours think it’s a great idea. They have to vote.' },
          opener: { es: 'Hace treinta años teníamos un compostador. Funcionó dos meses. Después nadie lo cuidaba, olía fatal y apareció una familia de ratones. Yo fui la que limpió todo, sola. Los jóvenes siempre tienen ideas bonitas, pero luego se van de vacaciones. No digo que no, pero quiero saber quién va a hacer el trabajo. ¿Tú votarías a favor?', en: 'Thirty years ago we had a composter. It worked for two months. Then nobody looked after it, it smelled terrible and a family of mice turned up. I was the one who cleaned everything up, on my own. Young people always have lovely ideas, but then they go on holiday. I’m not saying no, but I want to know who’s going to do the work. Would you vote for it?' },
          decide: {
            ask: { es: '¿Qué propones en la reunión?', en: 'What do you propose at the meeting?' },
            options: [
              { say: { es: 'Hacer un calendario con turnos para cada familia.', en: 'Make a calendar with turns for each family.' }, then: { es: 'Funciona bien. Ursula controla el calendario y, en secreto, está contenta.', en: 'It works well. Ursula keeps the calendar and, secretly, she’s happy.' } },
              { say: { es: 'Probar seis meses y votar otra vez.', en: 'Try it for six months and vote again.' }, then: { es: 'A los seis meses hay tomates, lechugas… y ningún ratón. Ursula vota que sí.', en: 'After six months there are tomatoes, lettuces… and no mice. Ursula votes yes.' } },
              { say: { es: 'Pedir a Ursula que sea la responsable del huerto.', en: 'Ask Ursula to be in charge of the garden.' }, then: { es: 'Ursula sorprende a todos: acepta. Resulta que de joven tenía un huerto enorme.', en: 'Ursula surprises everyone: she accepts. It turns out she had a huge garden when she was young.' } },
            ],
          },
          twist: { es: 'Los niños de la familia joven empiezan a jugar en el patio después de las ocho de la tarde. El reglamento dice que hay silencio desde las ocho. ¿Qué es más importante?', en: 'The young family’s children start playing in the courtyard after eight in the evening. The rules say silence from eight. What matters more?' },
          questions: [
            { q: { es: '¿Participas en las reuniones de vecinos?', en: 'Do you take part in residents’ meetings?' }, help: { es: 'Sí, siempre. / No, nunca voy.', en: 'Yes, always. / No, I never go.' }, follow: [{ es: '¿De qué se habla?', en: 'What do people talk about?' }, { es: '¿Hay discusiones?', en: 'Are there arguments?' }] },
            { q: { es: '¿Tienes plantas o un huerto?', en: 'Do you have plants or a vegetable garden?' }, help: { es: 'Sí, tengo… / No, no tengo espacio.', en: 'Yes, I have… / No, I don’t have space.' }, follow: [{ es: '¿Quién las cuida?', en: 'Who looks after them?' }, { es: '¿Qué te gustaría plantar?', en: 'What would you like to plant?' }] },
            { q: { es: '¿Una idea tuya fracasó alguna vez porque nadie ayudó?', en: 'Has an idea of yours ever failed because nobody helped?' }, help: { es: 'Sí, en el trabajo… / No que recuerde.', en: 'Yes, at work… / Not that I remember.' }, follow: [{ es: '¿Qué pasó?', en: 'What happened?' }, { es: '¿Lo intentarías otra vez?', en: 'Would you try again?' }] },
            { q: { es: '¿Los jóvenes y los mayores piensan muy distinto en tu barrio?', en: 'Do young and older people think very differently in your neighbourhood?' }, help: { es: 'Sí, por ejemplo… / No mucho.', en: 'Yes, for example… / Not much.' }, follow: [{ es: '¿En qué están de acuerdo?', en: 'What do they agree on?' }, { es: '¿Y en qué no?', en: 'And on what not?' }] },
          ],
          words: [{ es: 'el compostador', en: 'the composter' }, { es: 'el huerto', en: 'the vegetable garden' }, { es: 'el patio', en: 'the courtyard' }, { es: 'el turno', en: 'the turn / rota' }, { es: 'el reglamento', en: 'the rules' }],
        },
        B1: {
          scene: { es: 'En el barrio de Ursula se discute un sistema nuevo: contenedores inteligentes que leen una tarjeta personal y pesan la basura de cada hogar. Quien tira más, paga más. El ayuntamiento dice que así se reduce la basura un treinta por ciento. Algunos vecinos están encantados; otros dicen que es control y que los datos pueden usarse mal.', en: 'A new system is being debated in Ursula’s neighbourhood: smart bins that read a personal card and weigh each household’s rubbish. Whoever throws away more pays more. The council says this cuts rubbish by thirty per cent. Some neighbours are delighted; others say it’s surveillance and the data could be misused.' },
          opener: { es: 'Toda mi vida defendí las reglas, ya lo sabes. Pero esto me da escalofríos. Una máquina va a saber cuánto tiro, a qué hora y qué días. Hoy lo usan para cobrar la basura; mañana, ¿para qué? Mi vecino del tercero dice que quien no tiene nada que esconder no tiene nada que temer. Yo vengo de una generación que recuerda cuando el Estado vigilaba a ciertos ciudadanos con fichas secretas. ¿Dónde está el límite entre organizar y controlar?', en: 'All my life I’ve defended rules, you know that. But this gives me the shivers. A machine will know how much I throw away, at what time and on which days. Today they use it to charge for rubbish; tomorrow, for what? My neighbour on the third floor says that if you have nothing to hide, you have nothing to fear. I come from a generation that remembers when the state kept secret files on certain citizens. Where is the line between organising and controlling?' },
          decide: {
            ask: { es: '¿Qué debería pedir el barrio?', en: 'What should the neighbourhood ask for?' },
            options: [
              { say: { es: 'Aceptar los contenedores, pero sin datos personales.', en: 'Accept the bins, but without personal data.' }, then: { es: 'Se usa una tarjeta por edificio, no por persona. Se reduce menos la basura, pero nadie se siente vigilado.', en: 'One card per building is used, not per person. Rubbish falls less, but nobody feels watched.' } },
              { say: { es: 'Aceptarlos con una ley que borre los datos cada mes.', en: 'Accept them with a law that deletes the data every month.' }, then: { es: 'El ayuntamiento acepta, aunque los críticos dicen que nadie podrá comprobar si de verdad se borran.', en: 'The council agrees, although critics say nobody will be able to check whether they’re really deleted.' } },
              { say: { es: 'Rechazarlos y mejorar la educación sobre reciclaje.', en: 'Reject them and improve recycling education.' }, then: { es: 'El barrio organiza talleres. La basura baja un diez por ciento: menos que con las máquinas, pero sin conflicto.', en: 'The neighbourhood runs workshops. Rubbish falls ten per cent: less than with the machines, but without conflict.' } },
            ],
          },
          twist: { es: 'Un estudio muestra que, con los contenedores inteligentes, algunas personas empiezan a tirar su basura en el bosque o en otros barrios para no pagar. ¿Las reglas muy estrictas producen trampas?', en: 'A study shows that, with smart bins, some people start dumping their rubbish in the woods or in other neighbourhoods to avoid paying. Do very strict rules produce cheating?' },
          questions: [
            { q: { es: '¿Estás de acuerdo con «quien no tiene nada que esconder no tiene nada que temer»?', en: 'Do you agree with “if you have nothing to hide, you have nothing to fear”?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Qué datos tuyos no compartirías?', en: 'Which of your data would you not share?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Es justo que quien contamina más pague más?', en: 'Is it fair that whoever pollutes more pays more?' }, help: { es: 'Sí, siempre que… / No del todo, porque…', en: 'Yes, as long as… / Not entirely, because…' }, follow: [{ es: '¿Y una familia numerosa?', en: 'And a large family?' }, { es: '¿Cómo lo harías justo?', en: 'How would you make it fair?' }] },
            { q: { es: '¿Alguna regla te hizo buscar una trampa?', en: 'Has a rule ever made you look for a way to cheat?' }, help: { es: 'Sí, una vez… / No, nunca.', en: 'Yes, once… / No, never.' }, follow: [{ es: '¿Te descubrieron?', en: 'Did you get caught?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Qué tecnología de control te parece aceptable y cuál no?', en: 'Which surveillance technology seems acceptable to you and which doesn’t?' }, help: { es: 'Acepto… pero no…', en: 'I accept… but not…' }, follow: [{ es: '¿Hay cámaras en tu barrio?', en: 'Are there cameras in your neighbourhood?' }, { es: '¿Te sientes más seguro?', en: 'Do you feel safer?' }] },
          ],
          words: [{ es: 'pesar', en: 'to weigh' }, { es: 'el hogar', en: 'the household' }, { es: 'los escalofríos', en: 'the shivers' }, { es: 'vigilar', en: 'to watch / monitor' }, { es: 'la trampa', en: 'cheating / trick' }],
        },
      },
    },
    // ------------------------------------------------------------ a Sunday vote
    {
      id: 'votacion',
      name: { es: 'El domingo de votación', en: 'Voting Sunday' },
      who: { name: 'Peter', role: { es: 'funcionario del ayuntamiento', en: 'town hall official' } },
      levels: {
        A0: {
          scene: { es: 'Es domingo. Hay una escuela con una urna en la mesa. Peter trabaja en el ayuntamiento. Tiene una camisa blanca y un bolígrafo. Hay pocas personas: casi todos votan por correo.', en: 'It is Sunday. There is a school with a ballot box on the table. Peter works at the town hall. He has a white shirt and a pen. There are few people: almost everyone votes by post.' },
          opener: { es: '¡Buenos días! Soy Peter. Hoy votamos. En Suiza votamos cuatro veces al año. ¿Votas en tu país?', en: 'Good morning! I am Peter. Today we vote. In Switzerland we vote four times a year. Do you vote in your country?' },
          decide: {
            ask: { es: '¿Qué preguntas?', en: 'What do you ask?' },
            options: [
              { say: { es: '¿Qué votan hoy?', en: 'What are you voting on today?' }, then: { es: 'Peter dice: «Hoy votamos si hay más carriles para bicicletas».', en: 'Peter says: “Today we vote on whether there are more bike lanes.”' } },
              { say: { es: '¿Cuatro veces al año?', en: 'Four times a year?' }, then: { es: 'Peter ríe: «Sí. ¡Los suizos votan mucho!».', en: 'Peter laughs: “Yes. The Swiss vote a lot!”' } },
              { say: { es: '¿Puedo mirar?', en: 'Can I watch?' }, then: { es: 'Peter dice: «Sí, pero en silencio, por favor».', en: 'Peter says: “Yes, but in silence, please.”' } },
            ],
          },
          twist: { es: 'Una señora vota y dice: «¡Más bicicletas, no!». Un joven vota y dice: «¡Más bicicletas, sí!». ¿Tú qué votas?', en: 'A lady votes and says: “More bikes, no!” A young man votes and says: “More bikes, yes!” What do you vote?' },
          questions: [
            { q: { es: '¿Votas?', en: 'Do you vote?' }, help: { es: 'Sí, siempre. / No.', en: 'Yes, always. / No.' }, follow: [{ es: '¿Dónde votas?', en: 'Where do you vote?' }, { es: '¿Con quién vas?', en: 'Who do you go with?' }] },
            { q: { es: '¿Usas la bicicleta?', en: 'Do you use a bike?' }, help: { es: 'Sí, mucho. / No, nunca.', en: 'Yes, a lot. / No, never.' }, follow: [{ es: '¿Para ir adónde?', en: 'To go where?' }, { es: '¿Es fácil en tu ciudad?', en: 'Is it easy in your city?' }] },
            { q: { es: '¿Qué haces los domingos?', en: 'What do you do on Sundays?' }, help: { es: 'Descanso. / Como con mi familia.', en: 'I rest. / I eat with my family.' }, follow: [{ es: '¿Te levantas tarde?', en: 'Do you get up late?' }, { es: '¿Sales?', en: 'Do you go out?' }] },
            { q: { es: '¿Escribes cartas por correo?', en: 'Do you write letters by post?' }, help: { es: 'Sí, a veces. / No, nunca.', en: 'Yes, sometimes. / No, never.' }, follow: [{ es: '¿A quién?', en: 'To whom?' }, { es: '¿Recibes cartas?', en: 'Do you get letters?' }] },
          ],
          words: [{ es: 'votar', en: 'to vote' }, { es: 'la urna', en: 'the ballot box' }, { es: 'el ayuntamiento', en: 'the town hall' }, { es: 'por correo', en: 'by post' }, { es: 'el carril bici', en: 'the bike lane' }],
        },
        A1: {
          scene: { es: 'En Suiza, si cien mil personas firman una propuesta, todo el país la vota. Por eso los suizos votan sobre muchas cosas: impuestos, vacaciones, el precio de la leche, ¡hasta los cuernos de las vacas! Peter cuenta los votos en una escuela de Zúrich. Hoy hay tres preguntas en la papeleta.', en: 'In Switzerland, if a hundred thousand people sign a proposal, the whole country votes on it. That’s why the Swiss vote on lots of things: taxes, holidays, the price of milk, even cows’ horns! Peter counts the votes at a school in Zurich. Today there are three questions on the ballot paper.' },
          opener: { es: 'Mi abuela no pudo votar hasta 1971. Antes, en Suiza solo votaban los hombres. En un cantón, las mujeres votaron por primera vez en 1990. Por eso para mí este trabajo es importante, aunque sea domingo y aunque solo venga poca gente. ¿Cuándo empezaron a votar las mujeres en tu país?', en: 'My grandmother couldn’t vote until 1971. Before that, only men voted in Switzerland. In one canton, women voted for the first time in 1990. That’s why this job matters to me, even though it’s Sunday and only a few people come. When did women start voting in your country?' },
          decide: {
            ask: { es: 'Una de las preguntas es: «¿Cuatro semanas o seis semanas de vacaciones?». ¿Qué votarías?', en: 'One of the questions is: “Four weeks or six weeks of holiday?” What would you vote?' },
            options: [
              { say: { es: 'Seis semanas, claro.', en: 'Six weeks, of course.' }, then: { es: 'Sorpresa: en 2012 los suizos votaron que no. Dijeron que era malo para la economía.', en: 'Surprise: in 2012 the Swiss voted no. They said it was bad for the economy.' } },
              { say: { es: 'Cuatro semanas está bien.', en: 'Four weeks is fine.' }, then: { es: 'Peter dice: «Como la mayoría de los suizos en 2012».', en: 'Peter says: “Like most Swiss people in 2012.”' } },
              { say: { es: 'Depende del trabajo.', en: 'It depends on the job.' }, then: { es: 'Peter dice: «Buena respuesta, pero en la papeleta solo hay sí o no».', en: 'Peter says: “Good answer, but on the ballot there’s only yes or no.”' } },
            ],
          },
          twist: { es: 'Un hombre llega a las doce y un minuto. La votación cierra a las doce. ¿Puede votar?', en: 'A man arrives at one minute past twelve. Voting closes at twelve. Can he vote?' },
          questions: [
            { q: { es: '¿Sobre qué tema te gustaría votar?', en: 'What topic would you like to vote on?' }, help: { es: 'Me gustaría votar sobre…', en: 'I’d like to vote on…' }, follow: [{ es: '¿Qué votarías?', en: 'What would you vote?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Cuántas semanas de vacaciones tienes?', en: 'How many weeks of holiday do you have?' }, help: { es: 'Tengo… semanas.', en: 'I have… weeks.' }, follow: [{ es: '¿Son suficientes?', en: 'Is that enough?' }, { es: '¿Cuándo las tomas?', en: 'When do you take them?' }] },
            { q: { es: '¿Tu abuela votaba?', en: 'Did your grandmother vote?' }, help: { es: 'Sí. / No sé. / No podía.', en: 'Yes. / I don’t know. / She couldn’t.' }, follow: [{ es: '¿Hablas de política con tu familia?', en: 'Do you talk about politics with your family?' }, { es: '¿Discuten?', en: 'Do you argue?' }] },
            { q: { es: '¿Firmaste una propuesta alguna vez?', en: 'Have you ever signed a petition?' }, help: { es: 'Sí, sobre… / No, nunca.', en: 'Yes, about… / No, never.' }, follow: [{ es: '¿Sirvió?', en: 'Did it work?' }, { es: '¿Firmas por internet?', en: 'Do you sign online?' }] },
          ],
          words: [{ es: 'firmar', en: 'to sign' }, { es: 'la propuesta', en: 'the proposal' }, { es: 'la papeleta', en: 'the ballot paper' }, { es: 'contar votos', en: 'to count votes' }, { es: 'la mayoría', en: 'the majority' }],
        },
        A2: {
          scene: { es: 'Hoy se vota una propuesta polémica: dejar que los extranjeros que viven en Zúrich desde hace más de diez años voten en las elecciones de la ciudad. Uno de cada tres habitantes de Zúrich no tiene pasaporte suizo, aunque muchos nacieron aquí. Peter tiene un buen amigo italiano que vive en la ciudad desde hace treinta años y nunca votó.', en: 'Today there is a controversial proposal: letting foreigners who have lived in Zurich for more than ten years vote in city elections. One in three Zurich residents doesn’t have a Swiss passport, although many were born here. Peter has a good Italian friend who has lived in the city for thirty years and has never voted.' },
          opener: { es: 'Mi amigo Marco paga impuestos aquí, sus hijos van a la escuela aquí, entrena al equipo de fútbol del barrio. Pero cuando hay una votación sobre su calle, él no puede opinar. Para pedir el pasaporte suizo tiene que hacer un examen, pagar mucho dinero y esperar años. Algunos dicen que si quiere votar, que se haga suizo. Otros dicen que vivir aquí ya es suficiente. ¿Tú qué opinas?', en: 'My friend Marco pays taxes here, his children go to school here, he coaches the neighbourhood football team. But when there’s a vote about his street, he can’t have a say. To apply for a Swiss passport he has to take an exam, pay a lot of money and wait years. Some say if he wants to vote, he should become Swiss. Others say living here is enough. What do you think?' },
          decide: {
            ask: { es: '¿Qué votarías tú?', en: 'What would you vote?' },
            options: [
              { say: { es: 'Sí: quien vive y paga aquí debe votar.', en: 'Yes: whoever lives and pays here should vote.' }, then: { es: 'En la ciudad gana el sí, pero el cantón tiene que aprobarlo también, y allí puede perder.', en: 'Yes wins in the city, but the canton has to approve it too, and it may lose there.' } },
              { say: { es: 'No: primero hay que hacerse ciudadano.', en: 'No: you have to become a citizen first.' }, then: { es: 'Marco no está de acuerdo, pero dice que respeta el resultado. Así es la democracia.', en: 'Marco doesn’t agree, but says he respects the result. That’s democracy.' } },
              { say: { es: 'Sí, pero solo para temas del barrio.', en: 'Yes, but only on neighbourhood matters.' }, then: { es: 'Es una idea interesante, pero no está en la papeleta. Peter la apunta para el futuro.', en: 'It’s an interesting idea, but it’s not on the ballot. Peter writes it down for the future.' } },
            ],
          },
          twist: { es: 'Marco le confiesa a Peter que no quiere el pasaporte suizo porque siente que sería traicionar a Italia. ¿Se puede ser de dos países a la vez?', en: 'Marco confesses to Peter that he doesn’t want a Swiss passport because he feels it would be betraying Italy. Can you belong to two countries at once?' },
          questions: [
            { q: { es: '¿Los extranjeros pueden votar en tu país?', en: 'Can foreigners vote in your country?' }, help: { es: 'Sí, en… / No, solo los ciudadanos.', en: 'Yes, in… / No, only citizens.' }, follow: [{ es: '¿Te parece bien?', en: 'Do you think that’s right?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Conoces a alguien que vive en un país donde no puede votar?', en: 'Do you know someone who lives in a country where they can’t vote?' }, help: { es: 'Sí, mi… / No.', en: 'Yes, my… / No.' }, follow: [{ es: '¿Le molesta?', en: 'Does it bother them?' }, { es: '¿Quiere cambiar de nacionalidad?', en: 'Do they want to change nationality?' }] },
            { q: { es: '¿Cuántos años hay que vivir en un lugar para ser «de allí»?', en: 'How many years do you have to live somewhere to be “from there”?' }, help: { es: 'Creo que… / Nunca, porque…', en: 'I think… / Never, because…' }, follow: [{ es: '¿Tú de dónde te sientes?', en: 'Where do you feel you’re from?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Te gustaría tener dos pasaportes?', en: 'Would you like to have two passports?' }, help: { es: 'Sí, de… / No, uno es suficiente.', en: 'Yes, from… / No, one is enough.' }, follow: [{ es: '¿Para qué te serviría?', en: 'What would it be useful for?' }, { es: '¿Sería difícil conseguirlo?', en: 'Would it be hard to get?' }] },
          ],
          words: [{ es: 'polémico', en: 'controversial' }, { es: 'el habitante', en: 'the resident' }, { es: 'el ciudadano', en: 'the citizen' }, { es: 'aprobar', en: 'to approve' }, { es: 'traicionar', en: 'to betray' }],
        },
        B1: {
          scene: { es: 'La participación en las votaciones suizas es baja: muchas veces vota menos de la mitad de la población. Peter forma parte de un grupo que estudia cómo animar a los jóvenes a votar. Las propuestas son tres: votar por internet con el móvil, bajar la edad de voto a dieciséis años o hacer obligatorio el voto, como en el cantón de Schaffhausen, donde quien no vota paga una pequeña multa.', en: 'Turnout in Swiss votes is low: often fewer than half the population vote. Peter is part of a group studying how to encourage young people to vote. There are three proposals: voting online by phone, lowering the voting age to sixteen, or making voting compulsory, as in the canton of Schaffhausen, where those who don’t vote pay a small fine.' },
          opener: { es: 'Votamos tantas veces que la gente se cansa. Hay temas muy técnicos: la reforma de las pensiones, una ley sobre el agua. Muchos jóvenes me dicen: «No entiendo la pregunta, así que prefiero no votar». Y es lógico. Pero si no votan, deciden siempre los mayores, que votan mucho más, sobre un futuro que vivirán los jóvenes. Votar por el móvil sería más fácil, pero los expertos dicen que es menos seguro. ¿Cómo se consigue que la gente participe sin bajar la calidad del voto?', en: 'We vote so often that people get tired. Some topics are very technical: pension reform, a water law. Many young people tell me: “I don’t understand the question, so I’d rather not vote.” And that makes sense. But if they don’t vote, it’s always older people, who vote much more, deciding on a future that young people will live in. Voting by phone would be easier, but experts say it’s less secure. How do you get people to take part without lowering the quality of the vote?' },
          decide: {
            ask: { es: '¿Qué propuesta debería apoyar el grupo de Peter?', en: 'Which proposal should Peter’s group back?' },
            options: [
              { say: { es: 'Bajar la edad a dieciséis y explicar las votaciones en la escuela.', en: 'Lower the age to sixteen and explain votes at school.' }, then: { es: 'Los jóvenes votan más el primer año. Algunos padres se quejan de que la escuela «hace política».', en: 'Young people vote more in the first year. Some parents complain that the school is “doing politics”.' } },
              { say: { es: 'Votar por el móvil, con un sistema muy controlado.', en: 'Vote by phone, with a tightly controlled system.' }, then: { es: 'La participación sube mucho, pero un grupo de hackers encuentra un error y hay que repetir una votación.', en: 'Turnout rises a lot, but a group of hackers finds a flaw and one vote has to be repeated.' } },
              { say: { es: 'Hacer obligatorio el voto en todo el país.', en: 'Make voting compulsory across the country.' }, then: { es: 'Votan casi todos, pero muchos votan al azar o dejan la papeleta en blanco.', en: 'Almost everyone votes, but many vote at random or leave the ballot blank.' } },
            ],
          },
          twist: { es: 'Un político dice: «Si alguien no entiende una ley, es mejor que no vote. La democracia necesita votos informados, no votos rápidos». ¿Estás de acuerdo?', en: 'A politician says: “If someone doesn’t understand a law, it’s better they don’t vote. Democracy needs informed votes, not quick votes.” Do you agree?' },
          questions: [
            { q: { es: '¿Debería ser obligatorio votar?', en: 'Should voting be compulsory?' }, help: { es: 'Sí, porque… / No, porque no votar también es…', en: 'Yes, because… / No, because not voting is also…' }, follow: [{ es: '¿Es obligatorio en tu país?', en: 'Is it compulsory in your country?' }, { es: '¿Funciona?', en: 'Does it work?' }] },
            { q: { es: '¿A los dieciséis años se tiene madurez para votar?', en: 'Are you mature enough to vote at sixteen?' }, help: { es: 'Creo que sí / no, porque a esa edad…', en: 'I think so / not, because at that age…' }, follow: [{ es: '¿Cómo eras tú a los dieciséis?', en: 'What were you like at sixteen?' }, { es: '¿Qué habrías votado?', en: 'What would you have voted?' }] },
            { q: { es: '¿Votarías por el móvil? ¿Confiarías en el resultado?', en: 'Would you vote by phone? Would you trust the result?' }, help: { es: 'Sí, porque… / No, porque tengo miedo de…', en: 'Yes, because… / No, because I’m afraid of…' }, follow: [{ es: '¿Haces trámites importantes por internet?', en: 'Do you do important paperwork online?' }, { es: '¿Tuviste problemas?', en: 'Have you had problems?' }] },
            { q: { es: '¿Es mejor votar poco y bien informado o mucho y rápido?', en: 'Is it better to vote rarely and well informed or often and quickly?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿Cómo te informas antes de votar?', en: 'How do you get informed before voting?' }, { es: '¿Cambiaste de opinión alguna vez?', en: 'Have you ever changed your mind?' }] },
          ],
          words: [{ es: 'la participación', en: 'turnout' }, { es: 'obligatorio', en: 'compulsory' }, { es: 'la reforma', en: 'the reform' }, { es: 'la madurez', en: 'maturity' }, { es: 'al azar', en: 'at random' }],
        },
      },
    },
  ],
};
